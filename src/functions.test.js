const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
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
  test("case sensitive", () => {
    expect(caesarCipher('HeLLo!', 3)).toBe("KhOOr!");
  });
});

describe('Analyze Array', () => {
  test("analyze array exists", () => {
    expect(analyzeArray).toBeDefined();
  });
  test("exists", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
   });
  });
})