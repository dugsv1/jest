const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./functions");

describe("capitalize", () => {
  test("capitalize exists", () => {
    expect(capitalize).toBeDefined();
  });
  test("capitalize word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString", () => {
  test("simple word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("subtract", () => {
    expect(calculator.sub(1, 2)).toBe(-1);
  });
  test("multiply", () => {
    expect(calculator.mult(1, 2)).toBe(2);
  });
  test("divide", () => {
    expect(calculator.div(1, 2)).toBe(0.5);
  });
});

describe("Cipher", () => {
  test("shifts letter", () => {
    expect(caesarCipher("a", 3)).toBe("d");
  });
  test("wraps Z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});
