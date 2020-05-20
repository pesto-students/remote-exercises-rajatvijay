function cacheFunction(fn) {
  const cache = {};
  return function callback(...args) {
    const uniqueIdentifier = args.join('');
    // ! check will not work for undefined results
    if (!Object.prototype.hasOwnProperty.call(cache, uniqueIdentifier)) {
      // Saving in the cache
      const result = fn(...args);
      cache[uniqueIdentifier] = result;
    }

    // Always returning from the cache
    return cache[uniqueIdentifier];
  };
}

export { cacheFunction };
