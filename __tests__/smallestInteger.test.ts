import { findSmallestInt } from '../src/codewars/level-eight/smallestInteger';

test('A função "findSmallestInt" recebe um array de valores e retorna o menor:', () => {
  const expectedResult = findSmallestInt([97, -15, 31, 17, 25, 50, 10]);
  expect(typeof expectedResult).toBe('number');
  expect(expectedResult).toBe(-15);
});
