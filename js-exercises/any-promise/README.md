# Instructions

`anyPromise()` takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfils, returns a single promise that resolves with the value from that promise.

# Restrictions
- Don't use `Promise.any`