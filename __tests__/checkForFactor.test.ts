import { checkForFactor } from '../src/codewars/level-eight/checkForFactor';

test('A função "checkForFactor" com os valores 9, 2 deve retornar false:', () => {
  const resultExpected = checkForFactor(9, 2);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(false);
});
