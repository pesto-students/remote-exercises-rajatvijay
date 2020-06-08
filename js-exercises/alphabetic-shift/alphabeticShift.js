const alphabeticShift = (input) => input
  .normalize()
  .split('')
  .map((char) => String.fromCharCode(char.codePointAt(0) + 1))
  .join('');

export { alphabeticShift };
