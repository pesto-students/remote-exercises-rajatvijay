import { freqSort } from "./freqSort";

describe("Template Test", () => {
  test("should work with normal strings", () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([
      "z",
      "b",
      "a",
    ]);
  });

  test("should work with similar looking strings with diff char code", () => {
    expect(
      freqSort([
        "c\u0327a va bien",
        "c\u0327a va bien",
        "a",
        "a",
        "ça va bien",
        "ça va bien",
      ])
    ).toEqual(["ça va bien", "a"]);
  });
});
