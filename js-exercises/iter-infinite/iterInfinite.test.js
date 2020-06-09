import { count, cycle, repeat } from "./iterInfinite";

test("count: should return next infinitely", () => {
  {
    const iter = count(10);
    expect(iter.next().value).toBe(10);
    expect(iter.next().value).toBe(11);
    expect(iter.next().value).toBe(12);
    expect(iter.next().value).toBe(13);
    expect(iter.next().value).toBe(14);
  }

  {
    const iter = count(10, 2);
    expect(iter.next().value).toBe(10);
    expect(iter.next().value).toBe(12);
    expect(iter.next().value).toBe(14);
    expect(iter.next().value).toBe(16);
    expect(iter.next().value).toBe(18);
  }
});

test("cycle: should return next infinitely", () => {
  {
    const iter = cycle("ABCD");
    expect(iter.next().value).toBe("A");
    expect(iter.next().value).toBe("B");
    expect(iter.next().value).toBe("C");
    expect(iter.next().value).toBe("D");
    expect(iter.next().value).toBe("A");
    expect(iter.next().value).toBe("B");
    expect(iter.next().value).toBe("C");
  }

  {
    const iter = cycle("ABCD", 1);
    expect(iter.next().value).toBe("A");
    expect(iter.next().value).toBe("B");
    expect(iter.next().value).toBe("C");
    expect(iter.next().value).toBe("D");
    expect(iter.next().value).not.toBeDefined();
    expect(iter.next().value).not.toBeDefined();
    expect(iter.next().value).not.toBeDefined();
  }
});

test("repeat: should return next infinitely", () => {
  {
    const iter = repeat(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(1);
  }

  {
    const iter = repeat(1, 1);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).not.toBeDefined();
    expect(iter.next().value).not.toBeDefined();
    expect(iter.next().value).not.toBeDefined();
  }
});
