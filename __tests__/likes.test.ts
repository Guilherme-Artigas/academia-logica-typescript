import { likes } from '../src/codewars/level-eight/likes';

test('A função "likes" quando recebe uma lista vazia retorna: "no one likes this"', () => {
  const resultExpected = likes([]);
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('no one likes this');
});

test('A função "likes" quando recebe uma lista com um nome retorna quem curtiu:', () => {
  const resultExpected = likes(['Guilherme']);
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('Guilherme likes this');
});

test('A função "likes" quando recebe uma lista com dois nomes retorna quem curtiu:', () => {
  const resultExpected = likes(['Guilherme', 'Rafaela']);
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('Guilherme and Rafaela like this');
});

test('A função "likes" quando recebe uma lista com três nomes retorna quem curtiu:', () => {
  const resultExpected = likes(['Guilherme', 'Rafaela', 'Jamile']);
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('Guilherme, Rafaela and Jamile like this');
});

test('A função "likes" quando recebe uma lista com quatro nomes retorna quem curtiu:', () => {
  const resultExpected = likes(['Guilherme', 'Rafaela', 'Jamile', 'Julia']);
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('Guilherme, Rafaela and 2 others like this');
});
