function curry(fn) {
  const maxArgs = fn.length;
  return function curried(...partialArgs) {
    if (partialArgs.length === maxArgs) {
      return fn(...partialArgs);
    }
    return function (...moreArgs) {
      return curried(...partialArgs, ...moreArgs);
    };
  };
}

export { curry };
