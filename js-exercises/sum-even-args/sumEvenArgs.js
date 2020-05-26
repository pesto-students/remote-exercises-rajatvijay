const isEven = (num) => num % 2 === 0;

const sumEvenArgs = (...args) => args.reduce((sum, num) => sum + (isEven(num) ? num : 0), 0);

export { sumEvenArgs };
