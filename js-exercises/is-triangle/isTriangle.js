const sum = (...args) => args.reduce((result, element) => result + element, 0);

const validateNumberArgs = (...args) => {
  const argsInNumber = args.map(Number);
  const isValid = !argsInNumber.some(Number.isNaN);
  return [isValid, isValid ? argsInNumber : null];
};

function isTriangle(lineLengthA, lineLengthB, lineLengthC) {
  const [isValid, validatedArgs] = validateNumberArgs(
    lineLengthA,
    lineLengthB,
    lineLengthC,
  );

  if (!isValid) {
    throw new Error(
      'Unsupported data type for arguments. Make sure each argument is of type number',
    );
  }

  const [
    validatedLineLengthA,
    validatedLineLengthB,
    validatedLineLengthC,
  ] = validatedArgs;

  const pairs = [
    {
      pair: [validatedLineLengthA, validatedLineLengthB],
      other: validatedLineLengthC,
    },
    {
      pair: [validatedLineLengthB, validatedLineLengthC],
      other: validatedLineLengthA,
    },
    {
      pair: [validatedLineLengthA, validatedLineLengthC],
      other: validatedLineLengthB,
    },
  ];

  for (const pair of pairs) {
    if (sum(...pair.pair) <= pair.other) {
      return false;
    }
  }

  return true;
}

export { isTriangle };
