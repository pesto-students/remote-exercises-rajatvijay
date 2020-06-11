import { anyPromise } from "./anyPromise";

test("should returns the first promise that resolves immediately", async () => {
  {
    const response = await anyPromise([
      Promise.resolve(2),
      new Promise((resolve) => setTimeout(() => resolve(5), 2000)),
    ]);

    expect(response).toBe(2);
  }
});

test("should returns the first promise that resolves first", async () => {
  {
    const response = await anyPromise([
      new Promise((resolve) => setTimeout(() => resolve(5), 3000)),
      new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    ]);

    expect(response).toBe(2);
  }
});

test("should ignored rejected promises", async () => {
  {
    const response = await anyPromise([
      Promise.reject(2),
      new Promise((resolve) => setTimeout(() => resolve(5), 2000)),
    ]);

    expect(response).toBe(5);
  }
});

test("should resolve with undefined if none is resolved", async () => {
  {
    const response = await anyPromise([Promise.reject(2), Promise.reject(5)]);

    expect(response).not.toBeDefined();
  }
});
