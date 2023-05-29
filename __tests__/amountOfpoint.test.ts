import { points } from '../src/codewars/level-eight/amountOfpoints';

test('A função "points" deve calcular a quantidade de pontos correta em casos de vitória:', () => {
  const outputMock = [ '1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3' ];
  const resultExpected = points(outputMock);
  expect(resultExpected).toBe(30);
  expect(typeof resultExpected).toBe('number');
});

test('A função "points" deve calcular a quantidade de pontos correta em casos de derrota:', () => {
  const outputMock = [ '0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4' ];
  const resultExpected = points(outputMock);
  expect(resultExpected).toBe(0);
  expect(typeof resultExpected).toBe('number');
});

test('A função "points" deve calcular a quantidade de pontos correta em casos de empate:', () => {
  const outputMock = [ '1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4' ];
  const resultExpected = points(outputMock);
  expect(resultExpected).toBe(10);
  expect(typeof resultExpected).toBe('number');
});
