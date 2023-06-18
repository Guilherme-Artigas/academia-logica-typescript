import { countSheeps } from '../src/codewars/level-eight/countSheeps';

test('A função "countSheeps" recebendo o array [false, true, false, true], retorna 2:', () => {
  const resultExpected = countSheeps([false, true, false, true]);
  expect(typeof resultExpected).toBe('number');
  expect(resultExpected).toBe(2);
});
