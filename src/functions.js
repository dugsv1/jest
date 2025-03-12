export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mult, div };
})();

export function caesarCipher(str, shiftFactor) {
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);
      // if (code >= 65 && code <= 90) {
      //   return String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65);
      // }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97);
      }
      // return char;
    })
    .join("");
}

console.log(126 % 26);
