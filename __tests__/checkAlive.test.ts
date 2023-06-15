import { checkAlive } from '../src/codewars/level-eight/checkAlive';

test('A função "checkAlive" recebendo o valor 5 deve retornar true:', () => {
  const resultExpected = checkAlive(5);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(true);
});

test('A função "checkAlive" recebendo o valor 0 deve retornar false:', () => {
  const resultExpected = checkAlive(0);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(false);
});
