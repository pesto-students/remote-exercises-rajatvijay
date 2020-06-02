function sleep(ms) {
  const promise = new Promise((resolve) => setTimeout(() => resolve(), ms));
  const sleepPromise = (args) => promise.then(() => args);
  sleepPromise.then = function (onFulfilled) {
    return promise.then(onFulfilled);
  };
  sleepPromise.catch = function (onRejected) {
    return promise.catch(onRejected);
  };
  return sleepPromise;
}

export { sleep };
