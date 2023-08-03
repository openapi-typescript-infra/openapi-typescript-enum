# openapi-typescript-enum

This module adds a transformer to openapi-typescript that generates real enums in addition to the typed unions.
You can use it as a straight replacement for `npx openapi-typescript` or `yarn openapi-typescript` as we essentially
copied the CLI code. In the future we'd prefer this was just a transform that was invoked from the openapi-typescript
CLI.
