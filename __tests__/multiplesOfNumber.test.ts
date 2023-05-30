import { findMultiples } from '../src/codewars/level-eight/multiplesOfNumber';

test('A função "findMultiples" deve retornar os valores corretos', () => {
  const resultExpected = findMultiples(5, 25);
  expect(resultExpected).toContain(20);
  expect(resultExpected).toEqual([ 5, 10, 15, 20, 25 ]);
});
