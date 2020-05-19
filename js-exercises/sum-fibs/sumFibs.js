const sumRecursive = ({
  current, next, sum, limit,
}) => {
  if (current > limit) {
    return sum;
  }
  const isOdd = current % 2 !== 0;
  const newSum = isOdd ? sum + current : sum;
  return sumRecursive({
    current: next,
    next: current + next,
    sum: newSum,
    limit,
  });
};

function sumFibs(limit) {
  return sumRecursive({
    current: 1,
    next: 1,
    sum: 0,
    limit,
  });
}

export { sumFibs };
