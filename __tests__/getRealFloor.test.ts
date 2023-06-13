import { getRealFloor } from '../src/codewars/level-eight/getRealFloor';

test('A função "getRealFloor" recebendo o valor 5 deve retornar o valor 4:', () => {
  const resultExpected = getRealFloor(5);
  expect(typeof resultExpected).toBe('number');
  expect(resultExpected).toBe(4);
});

test('A função "getRealFloor" recebendo o valor 20 deve retornar o valor 18:', () => {
  const resultExpected = getRealFloor(20);
  expect(typeof resultExpected).toBe('number');
  expect(resultExpected).toBe(18);
});

test('A função "getRealFloor" recebendo o valor -12 deve retornar o valor -12:', () => {
  const resultExpected = getRealFloor(-12);
  expect(typeof resultExpected).toBe('number');
  expect(resultExpected).toBe(-12);
});
