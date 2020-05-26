function sumAll([num1, num2]) {
  const [min, max] = num1 > num2 ? [num2, num1] : [num1, num2];

  // Imperative
  // let sum = 0;
  // for (let i = min; i <= max; i++) {
  //   sum += i;
  // }
  // return sum;

  // Declarative
  const recursiveSum = (minimum, maximum, sum) => (minimum <= maximum
    ? recursiveSum(minimum + 1, maximum, sum + minimum)
    : sum);

  return recursiveSum(min, max, 0);
}

export { sumAll };
