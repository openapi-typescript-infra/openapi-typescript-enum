// @ts-expect-error ESM is a threat to humanity. Once OATS exposes a working CJS, use it
import type { OpenAPITSOptions } from 'openapi-typescript';

function getEnumTitle(path: string) {
  const parts = path
    .substring('#/paths//'.length)
    .split(/\/parameters\//)
    .join('/')
    .split('/');
  if (parts?.[0].match(/v[0-9]+/)) {
    parts.shift();
  }
  return `${parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')}`;
}

interface ComponentWithProps {
  properties: Record<string, unknown>;
}

export async function generate(file: string | typeof process.stdin, options: OpenAPITSOptions) {
  const enumsByName: Record<string, string> = {};
  const visitedEnums: Record<string, string[]> = {};

  function collectEnumerations(prefix: string, properties: ComponentWithProps['properties']) {
    for (const [key, value] of Object.entries(properties)) {
      if (typeof value === 'object' && value !== null && 'enum' in value) {
        visitedEnums[prefix + '/' + key] = value.enum as string[];
      } else if (typeof value === 'object' && value !== null && 'properties' in value) {
        collectEnumerations(prefix + '/' + key, (value as ComponentWithProps).properties);
      }
    }
  }

  function addEnum(title: string, values: string[]) {
    const definition = `export enum ${title}Enum {
  ${values.map((e) => `"${e}" = "${e}"`).join(',\n  ')}
}
`;
    if (enumsByName[title] && enumsByName[title] !== definition) {
      throw new Error(`Enum ${title} already exists with different values`);
    }
    enumsByName[title] = definition;
  }

  const finalOptions: OpenAPITSOptions = {
    ...options,
    transform(schemaObject, metadata) {
      // There are two places where we look for enums. Path handlers, and components.
      // For path handlers, we can derive the name from the path. For components, we
      // can't get what we need, so INSTEAD we will transform those when we see the
      // component itself.
      if (schemaObject.enum) {
        const visited = Object.entries(visitedEnums).find(
          ([, enums]) => enums === schemaObject.enum,
        )?.[0];
        if (visited) {
          const title = visited
            .split('/')
            .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
            .join('');
          addEnum(title, schemaObject.enum as string[]);
        } else {
          const parameter = Object.values(metadata.ctx.parameters).find(
            (p) => p.schema?.enum === schemaObject.enum,
          );
          if (parameter) {
            const title = getEnumTitle(metadata.path);
            addEnum(title, schemaObject.enum as string[]);
          }
        }
      }

      if (
        metadata.path.startsWith('#/components/schemas/') &&
        (schemaObject as ComponentWithProps).properties
      ) {
        collectEnumerations(
          metadata.path.substring('#/components/schemas/'.length),
          (schemaObject as ComponentWithProps).properties,
        );
      }
      return undefined;
    },
  };

  const { default: openApiTs } = await import('openapi-typescript');
  const basicOutput = await openApiTs(file, finalOptions);
  return [basicOutput, ...Object.values(enumsByName)].join('\n');
}
