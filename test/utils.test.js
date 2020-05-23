import { func3 } from '../src/utils';

test('unit test 1', async () => {
  const str = 'input string';
  const output = func3(str);
  expect(output).toBe(str);
});
