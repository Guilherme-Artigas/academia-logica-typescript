import { makeUpperCase } from '../src/codewars/level-eight/makeUpperCase';

test('A função "makeUpperCase" deve transformar strings em maiuscula:', () => {
  const resultExpected = makeUpperCase('Guilherme');
  expect(resultExpected).toBe('GUILHERME');
});
