import { getVolumeOfCuboid } from '../src/codewars/level-eight/getVolumeOfCuboid';

test('Função "getVolumeOfCuboid" recebe 3 parâmetros e calcular o volume do cubo:', () => {
  const expectResult = getVolumeOfCuboid(6.3, 2, 5);

  expect(typeof expectResult).toBe('number');
  expect(expectResult).toBe(63);
});
