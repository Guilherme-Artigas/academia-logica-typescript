import { reverseList } from '../src/codewars/level-eight/reverseList';

test('A função "reverseList" deve receber uma lista e a retornar-la invertida', () => {
  const resultExpected = reverseList([5, 4, 3, 2, 1]);
  expect(resultExpected).toEqual([1, 2, 3, 4]);
});
