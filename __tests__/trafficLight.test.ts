import { updateLight } from '../src/codewars/level-eight/trafficLight';

test('A função "updateLight" quando recebe o valor green, deve retornar o valor yellow:', () => {
  const resultExpected = updateLight('green');
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('yellow');
});

test('A função "updateLight" quando recebe o valor yellow, deve retornar o valor red:', () => {
  const resultExpected = updateLight('yellow');
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('red');
});

test('A função "updateLight" quando recebe o valor red, deve retornar o valor green:', () => {
  const resultExpected = updateLight('red');
  expect(typeof resultExpected).toBe('string');
  expect(resultExpected).toBe('green');
});
