import fs from 'fs';
import path from 'path';

import { expect, test } from 'vitest';

import { generate } from '../src/index';

test('should generate a matching document', async () => {
  const now = await generate(path.resolve(__dirname, 'petstore.json'), {});
  expect(now).toMatch(fs.readFileSync(path.resolve(__dirname, 'snapshot.d.ts'), 'utf8'));
});
