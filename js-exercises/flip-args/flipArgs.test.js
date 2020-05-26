import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should return a function", () => {
    expect(typeof flipArgs()).toBe("function");
  });

  it("should call the function with reversed args", () => {
    const inputFunction = (...args) => args;
    const flipped = flipArgs(inputFunction);
    expect(flipped(1, 2, 3, 4)).toStrictEqual([4, 3, 2, 1]);
    expect(flipped("a", 2, "b", 4)).toStrictEqual([4, "b", 2, "a"]);
  });
});
