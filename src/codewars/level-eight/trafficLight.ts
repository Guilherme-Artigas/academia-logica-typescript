export function updateLight(current: string): string {
  let state = '';

  if (current === 'green') return state = 'yellow';
  if (current === 'yellow') return state = 'red';
  if (current === 'red') return state = 'green';

  return state;
}
