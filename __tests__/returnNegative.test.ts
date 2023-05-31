import { makeNegative } from '../src/codewars/level-eight/returnNegative';

test('A função "makeNegative" deve receber um número e retorna-lo em sua forma negativa:', () => {
  const resultExpected = makeNegative(55);
  expect(resultExpected).toBe(-55);
  expect(typeof resultExpected).toBe('number');
});

test('Com valores menor ou iguais a 0 a função "makeNegative" retorna sem alterações:', () => {
  const resultExpected = makeNegative(-1);
  expect(resultExpected).toBe(-1);
  expect(typeof resultExpected).toBe('number');
});
