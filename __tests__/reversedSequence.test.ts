import { reverseSeq } from '../src/codewars/level-eight/reversedSequence';

test('A função "reverseSeq" retorna valores de forma correta:', () => {
  const expectedResult = reverseSeq(5);
  expect(expectedResult).toEqual([ 5, 4, 3, 2, 1 ]);
  expect(expectedResult).toContain(1);
});
