import { position } from '../src/codewars/level-eight/position';

test('A função "position" deve retornar a posição da letra passado:', () => {
  const resultExpected = position('b');
  expect(resultExpected).toBe('Position of alphabet: 2');
});
