import { arrayPlusArray } from '../src/codewars/level-eight/arrayPlusArray';

test('A função "arrayPlusArray" deve ser capaz de fazer a soma entre duas listas:', () => {
  const resultExpected = arrayPlusArray([10, 20, 30], [40]);
  expect(typeof resultExpected).toBe('number');
  expect(resultExpected).toBe(100);
});
