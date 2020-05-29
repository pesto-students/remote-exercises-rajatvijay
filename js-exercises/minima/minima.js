function minima(count, numbers) {
  return numbers.sort((num1, num2) => (num1 > num2 ? 1 : -1)).slice(0, count);
}

export { minima };
