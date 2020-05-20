const limitFunctionCallCount = (fn, limit) => {
  let callbackInvoked = 0;
  return function limitedFunction(...args) {
    callbackInvoked += 1;
    return callbackInvoked > limit ? null : fn(...args);
  };
};

export { limitFunctionCallCount };
