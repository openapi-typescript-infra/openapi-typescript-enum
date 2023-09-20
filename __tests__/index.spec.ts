import path from 'path';

import { expect, test } from 'vitest';

import { generate } from '../src/index.js';

test('should generate a matching document', async () => {
  const types = await generate(path.resolve(__dirname, 'petstore.json'), {});
  expect(types).toMatchSnapshot();
});
