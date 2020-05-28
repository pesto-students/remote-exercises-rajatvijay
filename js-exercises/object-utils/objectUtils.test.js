import { map, filter, invert, merge, every, some } from "./objectUtils";

describe("map: takes an object and transforms the (key, value) pair according to the callback function", () => {
  it("should return an object", () => {
    const result = map({ name: "rajat" }, (key, value) => [
      key.toUpperCase(),
      value.toUpperCase(),
    ]);
    expect(typeof result).toBe("object");
    expect(result).not.toBe(null);
  });

  it("should transform the object according to the given function", () => {
    const input = { name: "rajat" };
    const result = map(input, (key, value) => [
      key.toUpperCase(),
      value.toUpperCase(),
    ]);
    expect(result).toEqual({
      NAME: "RAJAT",
    });
  });
});

describe("invert: inverts key value pairs", () => {
  it("should return an object", () => {
    const result = invert({ name: "rajat" });
    expect(typeof result).toBe("object");
    expect(result).not.toBe(null);
  });

  it("should invert the key value in an object", () => {
    const input = { name: "rajat" };
    const result = invert(input);
    expect(result).toEqual({
      rajat: "name",
    });
  });
});

describe("filter: filters on the basis of keys or values.", () => {
  it("should return an object", () => {
    const result = filter({ name: "rajat" }, (key, value) => true);
    expect(typeof result).toBe("object");
    expect(result).not.toBe(null);
  });

  it("should filter out key, value pair from the object according to the given function", () => {
    const input = { name: "rajat" };
    const result = filter(input, (key, value) => key === "name");
    expect(result).toEqual({ name: "rajat" });
  });
});

describe("merge: merge n number of objects into a single objects", () => {
  it("should return an object", () => {
    const result = merge([{ name: "rajat" }]);
    expect(typeof result).toBe("object");
    expect(result).not.toBe(null);
  });

  it("should merge key values from all the objects into a single one", () => {
    const input = [{ name: "rajat" }, { surname: "vijay" }];
    const result = merge(input);
    expect(result).toEqual({
      name: "rajat",
      surname: "vijay",
    });
  });
});

describe("every: Array.prototype.every for objects", () => {
  it("should return a boolean", () => {
    const result = every(
      { name: "rajat", surname: "vijay" },
      (key, value) => key === "name"
    );
    expect(typeof result).toBe("boolean");
  });

  it("should check if all the items returns true for the given fn", () => {
    {
      const result = every(
        { name: "rajat", surname: "vijay" },
        (key, value) => key === "name"
      );
      expect(result).toBe(false);
    }
    {
      const result = every({ name: "rajat" }, (key, value) => key === "name");
      expect(result).toBe(true);
    }
  });
});

describe("some: Array.prototype.some for objects", () => {
  it("should return a boolean", () => {
    const result = some(
      { name: "rajat", surname: "vijay" },
      (key, value) => key === "name"
    );
    expect(typeof result).toBe("boolean");
  });

  it("should check if any of the items returns true for the given fn", () => {
    {
      const result = some(
        { name: "rajat", surname: "vijay" },
        (key, value) => key === "name"
      );
      expect(result).toBe(true);
    }

    {
      const result = some({ surname: "vijay" }, (key, value) => key === "name");
      expect(result).toBe(false);
    }
  });
});
