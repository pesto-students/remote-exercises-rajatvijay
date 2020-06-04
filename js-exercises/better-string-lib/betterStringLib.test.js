import { betterStringLib } from "./betterStringLib";

const { equal } = betterStringLib();

describe("betterStringLib", () => {
  test("equal should work with normal strings", () => {
    expect(equal("a", "a")).toBe(true);
    expect(equal("mañana", "mañana")).toBe(true);
    expect(equal("b", "a")).toBe(false);
  });

  test("equal should work with diff looking same strings", () => {
    expect(equal("c\u0327a va bien", "c\u0327a va bien")).toBe(true);
    expect(equal("c\u0327a va bien", "ça va bien")).toBe(true);
  });
});
