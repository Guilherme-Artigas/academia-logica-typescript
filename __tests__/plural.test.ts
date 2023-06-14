import { plural } from '../src/codewars/level-eight/plural';

test('A função "plural" recebendo o valor 2, deve retornar true:', () => {
  const resultExpected = plural(2);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(true);
});
