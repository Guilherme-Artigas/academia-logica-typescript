import { twiceAsOld } from '../src/codewars/level-eight/twiceAsOld';

test('A função "twiceAsOld" deve retornar os valores corretos:', () => {
  const resultExpected = twiceAsOld(50, 31);
  expect(resultExpected).toBe(12);
});
