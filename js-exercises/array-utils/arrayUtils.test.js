import { forEach, map, filter } from "./arrayUtils";

describe("forEach", () => {
  it("should iterate on an array", () => {
    const fn = jest.fn();
    const result = forEach([1, 2, 3, 4, 5], fn);
    expect(fn).toHaveBeenCalledWith(1, 0, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(2, 1, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(3, 2, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(4, 3, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(5, 4, [1, 2, 3, 4, 5]);
    expect(result).not.toBeDefined();
  });

  it("should iterate an pseudo array", () => {
    const fn = jest.fn();
    const item = { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, length: 5 };
    const result = forEach(item, fn);
    expect(fn).toHaveBeenCalledWith(1, 0, item);
    expect(fn).toHaveBeenCalledWith(2, 1, item);
    expect(fn).toHaveBeenCalledWith(3, 2, item);
    expect(fn).toHaveBeenCalledWith(4, 3, item);
    expect(fn).toHaveBeenCalledWith(5, 4, item);
    expect(result).not.toBeDefined();
  });

  it("should throw when args are improper", () => {
    expect(() => forEach(null, fn)).toThrow();
    expect(() => forEach([1], null)).toThrow();
  });
});

describe("map", () => {
  it("should iterate on an array", () => {
    const fn = jest.fn().mockImplementation((value) => 1 + value);
    const result = map([1, 2, 3, 4, 5], fn);
    expect(fn).toHaveBeenCalledWith(1, 0, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(2, 1, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(3, 2, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(4, 3, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(5, 4, [1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });

  it("should iterate an pseudo array", () => {
    const fn = jest.fn().mockImplementation((value) => 1 + value);
    const item = { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, length: 5 };
    const result = map(item, fn);
    expect(fn).toHaveBeenCalledWith(1, 0, item);
    expect(fn).toHaveBeenCalledWith(2, 1, item);
    expect(fn).toHaveBeenCalledWith(3, 2, item);
    expect(fn).toHaveBeenCalledWith(4, 3, item);
    expect(fn).toHaveBeenCalledWith(5, 4, item);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });

  it("should throw when args are improper", () => {
    expect(() => forEach(null, fn)).toThrow();
    expect(() => forEach([1], null)).toThrow();
  });
});

describe("filter", () => {
  it("should iterate on an array", () => {
    const fn = jest.fn().mockImplementation((value) => value === 1);
    const result = filter([1, 2, 3, 4, 5], fn);
    expect(fn).toHaveBeenCalledWith(1, 0, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(2, 1, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(3, 2, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(4, 3, [1, 2, 3, 4, 5]);
    expect(fn).toHaveBeenCalledWith(5, 4, [1, 2, 3, 4, 5]);
    expect(result).toEqual([1]);
  });

  it("should iterate an pseudo array", () => {
    const fn = jest.fn().mockImplementation((value) => value === 1);
    const item = { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, length: 5 };
    const result = filter(item, fn);
    expect(fn).toHaveBeenCalledWith(1, 0, item);
    expect(fn).toHaveBeenCalledWith(2, 1, item);
    expect(fn).toHaveBeenCalledWith(3, 2, item);
    expect(fn).toHaveBeenCalledWith(4, 3, item);
    expect(fn).toHaveBeenCalledWith(5, 4, item);
    expect(result).toEqual([1]);
  });

  it("should throw when args are improper", () => {
    expect(() => forEach(null, fn)).toThrow();
    expect(() => forEach([1], null)).toThrow();
  });
});

// describe("reduce", () => {
//   it("should iterate on an array", () => {
//     const fn = jest.fn().mockImplementation((acc, value) => acc + value);
//     const result = reduce([1, 2, 3, 4, 5], fn, 0);
//     expect(fn).toHaveBeenCalledWith(0, 1, 0, [1, 2, 3, 4, 5]);
//     expect(fn).toHaveBeenCalledWith(1, 2, 1, [1, 2, 3, 4, 5]);
//     expect(fn).toHaveBeenCalledWith(3, 3, 2, [1, 2, 3, 4, 5]);
//     expect(fn).toHaveBeenCalledWith(6, 4, 3, [1, 2, 3, 4, 5]);
//     expect(fn).toHaveBeenCalledWith(11, 5, 4, [1, 2, 3, 4, 5]);
//     expect(result).toEqual([1]);
//   });

//   // it("should iterate an pseudo array", () => {
//   //   const fn = jest.fn().mockImplementation((value) => value === 1);
//   //   const item = { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, length: 5 };
//   //   const result = filter(item, fn);
//   //   expect(fn).toHaveBeenCalledWith(1, 0, item);
//   //   expect(fn).toHaveBeenCalledWith(2, 1, item);
//   //   expect(fn).toHaveBeenCalledWith(3, 2, item);
//   //   expect(fn).toHaveBeenCalledWith(4, 3, item);
//   //   expect(fn).toHaveBeenCalledWith(5, 4, item);
//   //   expect(result).toEqual([1]);
//   // });

//   it("should throw when args are improper", () => {
//     expect(() => forEach(null, fn)).toThrow();
//     expect(() => forEach([1], null)).toThrow();
//   });
// });
