const isPrime = (num) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const getNextPrime = (num) => {
  // eslint-disable-next-line no-plusplus
  for (let nextNum = num + 1; ; nextNum++) {
    if (isPrime(nextNum)) {
      return nextNum;
    }
  }
};

const sumRecursive = ({ current, limit, sum }) => {
  if (sum >= Number.MAX_SAFE_INTEGER) {
    return sum;
  }
  const nextPrime = getNextPrime(current);
  return nextPrime <= limit
    ? sumRecursive({ current: nextPrime, limit, sum: sum + nextPrime })
    : sum;
};

function sumPrimes(limit) {
  if (limit < 2) {
    return 0;
  }
  return sumRecursive({
    current: 2,
    limit,
    sum: 2,
  });
}

export { sumPrimes };
