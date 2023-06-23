import { betterThanAverage } from '../src/codewars/level-eight/betterThanAverage';

test('A função "betterThanAverage" recebe um array com valores [2, 5] deve retornar true:', () => {
  const resultExpected = betterThanAverage([2, 5], 5);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(true);
});
