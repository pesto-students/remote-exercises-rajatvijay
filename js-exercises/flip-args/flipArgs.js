function flipArgs(fn) {
  return function flipped(...args) {
    const flippedArguments = [...args].reverse();
    return fn(...flippedArguments);
  };
}

export { flipArgs };
