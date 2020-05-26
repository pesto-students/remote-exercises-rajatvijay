import { sumPrimes } from "./sumPrimes";

describe("sumPrimes", () => {
  test("should return a number", () => {
    expect(typeof sumPrimes(10)).toEqual("number");
  });
  test("should return the correct output", () => {
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);

    // Added tests for edge cse
    expect(sumPrimes(2)).toBe(2);
    expect(sumPrimes(0)).toBe(0);
    expect(sumPrimes(-2)).toBe(0);
  });
});
