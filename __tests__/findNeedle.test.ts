import { findNeedle } from '../src/codewars/level-eight/findNeedle';

test('A função "findNeedle" recebe um array de valores e retorna a posição de needle:', () => {
  const resulExpected = findNeedle([3, 1, 2, 'needle', 'Oi', 10]);
  expect(resulExpected).toBe('found the needle at position 3');
});
