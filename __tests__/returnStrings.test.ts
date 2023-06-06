import { greet } from '../src/codewars/level-eight/returnStrings';

test('A função "greet" deve retornar uma saudação ao nome que foi chamado:', () => {
  const resultExpected = greet('Guilherme');
  expect(typeof resultExpected).toBe('string');
});
