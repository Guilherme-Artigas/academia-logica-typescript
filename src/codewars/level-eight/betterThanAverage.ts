export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  return (classPoints.reduce((acc, cur) => acc += cur, 0) / classPoints.length) <= yourPoints;
}
