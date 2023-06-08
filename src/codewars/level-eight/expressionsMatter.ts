export function expressionsMatter(a: number, b: number, c: number): number {
  const FIRST_RESULT = a + b + c;
  const SECOND_RESULT = a * b * c;
  const THIRD_RESULT = (a + b) * c;
  const FOURTH_RESULT = a + b * c;
  const FIFTH_RESULT = a * (b + c);
  const RESULT_LIST = [
    FIRST_RESULT,
    SECOND_RESULT,
    THIRD_RESULT,
    FOURTH_RESULT,
    FIFTH_RESULT
  ];

  RESULT_LIST.sort((a, b) => b - a);

  return RESULT_LIST[0];
}
