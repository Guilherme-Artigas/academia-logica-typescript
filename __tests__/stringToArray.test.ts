import { stringToArray } from '../src/codewars/level-eight/stringToArray';

test('A função "stringToArray" deve retornar uma lista de palavras:', () => {
  const resultExpected = stringToArray('oloko bicho!');
  expect(resultExpected).toEqual(['oloko', 'bicho!']);
});
