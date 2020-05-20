import { cacheFunction } from "./cacheFunction";

describe("cacheFunction", () => {
  it("should return a function", () => {
    expect(typeof cacheFunction()).toBe("function");
  });
  it("The cached function should return the correct result", () => {
    const foo = (x) => x * x;
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5)).toBe(25);
  });
  it("should cache function results and not rerun the original callback if the same arguments are presented", () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true); //1
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10); //2
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    // Supporting multiple args
    myCachedFunction(10, 20); //3
    myCachedFunction(10, 20);
    myCachedFunction(10, 20);
    myCachedFunction(10, 20);

    myCachedFunction(10, 21); //4
    expect(foo).toHaveBeenCalledTimes(4);
  });
});
