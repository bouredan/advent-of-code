import { reverseString } from "../../utils";

const digitStrings: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
} as const;

const digitRegExp = /one|two|three|four|five|six|seven|eight|nine|\d/;
const reversedDigitRegExp = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d/;

export function solve(lines: string[]) {
  return lines.reduce<number>((acc, line) => {
    const firstDigit = getFirstDigit(line);
    const lastDigit = getLastDigit(line);
    const numberFromLine = Number(`${firstDigit}${lastDigit}`);
    return acc + numberFromLine;
  }, 0);
}

function getFirstDigit(line: string) {
  const digitString = line.match(digitRegExp)?.at(0);
  if (!digitString) {
    throw new Error("Input does not include digit");
  }
  if (digitString.length > 1) {
    return digitStrings[digitString];
  }
  const digit = Number(digitString);
  if (!isNaN(digit)) {
    return digit;
  }
}

function getLastDigit(line: string) {
  const reversedLine = reverseString(line);
  const reversedDigitString = reversedLine.match(reversedDigitRegExp)?.at(0);
  if (!reversedDigitString) {
    throw new Error("Input does not include digit");
  }
  if (reversedDigitString.length > 1) {
    const digitString = reverseString(reversedDigitString);
    return digitStrings[digitString];
  }
  const digit = Number(reversedDigitString);
  if (!isNaN(digit)) {
    return digit;
  }
}
