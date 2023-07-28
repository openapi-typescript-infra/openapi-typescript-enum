import path from 'path';

import { expect, test } from 'vitest';

import { generate } from '../src/index';

test('should generate a matching document', async () => {
  const types = await generate(path.resolve(__dirname, 'petstore.json'), {});
  expect(types).toMatchSnapshot();
});
