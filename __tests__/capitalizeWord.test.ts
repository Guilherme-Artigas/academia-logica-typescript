import { capitalizeWord } from '../src/codewars/level-eight/capitalizeWord';

test('A função "capitalizeWord" recebe uma palavra e deixar a pimeira letra em caixa alta:', () => {
  const expectedResult = capitalizeWord('word');
  expect(expectedResult).toBe('Word');
});
