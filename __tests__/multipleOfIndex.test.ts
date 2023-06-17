import { multipleOfIndex } from '../src/codewars/level-eight/multipleOfIndex';

test('A função "multipleOfIndex" recebendo os valores [11, -11] deve retornar [-11]', () => {
  const resultExpected = multipleOfIndex([11, -11]);
  expect(resultExpected).toEqual([-11]);
});
