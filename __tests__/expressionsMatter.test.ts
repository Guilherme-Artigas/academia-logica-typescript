import { expressionsMatter } from '../src/codewars/level-eight/expressionsMatter';

test('A função "expressionsMatter" recebendo os valores 10, 5, 6, deve retornar 300:', () => {
  const expectedResult = expressionsMatter(10, 5, 6);
  expect(typeof expectedResult).toBe('number');
  expect(expectedResult).toBe(300);
});
