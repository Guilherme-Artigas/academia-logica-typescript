import { twoArePositive } from '../src/codewars/level-seven/twoArePositive';

test('A função "twoArePositive" deve validar se pelo menos dois valores são positivos', () => {
  const expectedResult = twoArePositive(12, -1, 19);
  expect(typeof expectedResult).toBe('boolean');
  expect(expectedResult).toBe(true);
});
