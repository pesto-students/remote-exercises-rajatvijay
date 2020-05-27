// function Stack() {
//   return {
//     push: (item) => {}
//   }
// }

const getOpeningBrace = (brace) => ({
  '}': '{',
  ']': '[',
  ')': '(',
}[brace]);

const isAClosingBrace = (brace) => ['}', ']', ')'].includes(brace);

const isABrace = (char) => ['{', '[', '(', '}', ']', ')'].includes(char);

function balancedBraces(string) {
  const braces = string.split('').filter(isABrace);
  const stack = [];
  console.log('braces', braces);

  for (const brace of braces) {
    if (!isAClosingBrace(brace)) {
      stack.push(brace);
      // console.log("current stack:", stack);
    } else {
      const lastItem = stack.pop();
      // console.log("finding opening match for:", brace);
      // console.log("possible candidate:", lastItem);
      // console.log("expected:", getOpeningBrace(brace));
      if (!lastItem || lastItem !== getOpeningBrace(brace)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

export { balancedBraces };
