import { hero } from '../src/codewars/level-eight/surviveCastle';

test('A função "hero" retorna true com os seguintes valores de parâmetros (100, 40):', () => {
  const resultExpected = hero(100, 40);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(true);
});

test('A função "hero" retorna false com os seguintes valores de parâmetros (1500, 751):', () => {
  const resultExpected = hero(1500, 751);
  expect(typeof resultExpected).toBe('boolean');
  expect(resultExpected).toBe(false);
});
