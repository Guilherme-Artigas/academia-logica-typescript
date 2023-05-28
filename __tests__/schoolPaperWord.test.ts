import { paperwork } from '../src/codewars/level-eight/schoolPaperWork';

test('A função "paperwork" retorna valores de forma correta:', () => {
  const result = paperwork(5, 5);
  expect(result).toBe(25);
});

test('A função "paperwork" recebendo valores 0 ou negativos retorna 0:', () => {
  const result = paperwork(0, -1);
  expect(result).toBe(0);
});
