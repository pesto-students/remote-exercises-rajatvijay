import { isTriangle } from "./isTriangle";

describe("isTriangle", () => {
  it("should return true if triangle can be formed given three lines", () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
  });

  it("should return false if triangle can not be formed given three lines", () => {
    expect(isTriangle(1, 4, 2)).toBe(false);
  });

  it("should handle string arguments and true if triangle can be formed", () => {
    expect(isTriangle("3", "4", "5")).toBe(true);
  });

  it("should throw error if arguemnt cannot be converted into type number", () => {
    expect(() => isTriangle("a", "4", "5")).toThrow(
      "Unsupported data type for arguments. Make sure each argument is of type number"
    );
  });
});
