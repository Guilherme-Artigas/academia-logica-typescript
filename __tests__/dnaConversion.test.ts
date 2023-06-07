import { DNAtoRNA } from '../src/codewars/level-eight/dnaConversion';

test('A função "DNAtoRNA" deve substituir letras T por letras U:', () => {
  const resultExpected = DNAtoRNA('GCAT');
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('GCAU');
});
