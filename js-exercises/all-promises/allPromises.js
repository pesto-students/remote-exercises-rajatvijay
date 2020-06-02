const allPromises = (promises) => new Promise((resolve, reject) => {
  let counter = promises.length - 1;
  const results = [];
  const resolver = (result, index) => {
    counter -= 1;
    results[index] = result;
    if (counter === 0) {
      resolve(results);
    }
  };
  promises.forEach((promise, index) => {
    Promise.resolve(promise)
      .then((result) => resolver(result, index))
      .catch((error) => reject(error));
  });
});

export { allPromises };
