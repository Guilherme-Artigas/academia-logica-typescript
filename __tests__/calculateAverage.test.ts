import { findAverage } from '../src/codewars/level-eight/calculateAverage';

test('Função "findAverage" deve calcular a média dos valores de uma determinada lista:', () => {
  const resultExpected = findAverage([ 1, 1, 1 ]);
  expect(resultExpected).toBe(1);
});

test('Função "findAverage" deve retornar 0 caso receba uma lista vazia:', () => {
  const resultExpected = findAverage([]);
  expect(resultExpected).toBe(0);
});
