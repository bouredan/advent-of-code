import { reverseString } from "../../utils";

/**
 * The implementation for getting last digit is actually pretty stupid and I should just
 * search from the start for multiple occurences and take the last one.
 *
 * Talk about premature optimization (which is worse than not "optimized"), lul.
 */

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

const digitRegExp = /one|two|three|four|five|six|seven|eight|nine|\d/g;

export function solve(lines: string[]) {
  return lines.reduce<number>((acc, line) => {
    const [firstDigit, lastDigit] = getFirstAndLastDigits(line);
    const numberFromLine = Number(`${firstDigit}${lastDigit}`);
    console.log(line, numberFromLine);
    return acc + numberFromLine;
  }, 0);
}

function getFirstAndLastDigits(line: string) {
  const digitStrings = line.match(digitRegExp);
  if (!digitStrings || digitStrings.length === 0) {
    throw new Error("Input does not include digit");
  }
  return [
    digitStringToNumber(digitStrings.at(0)),
    digitStringToNumber(digitStrings.at(-1)),
  ];
}

function digitStringToNumber(digitString: string | undefined) {
  if (!digitString) {
    return NaN;
  }
  if (digitString.length > 1) {
    return digitStrings[digitString];
  }
  const digit = Number(digitString);
  if (!isNaN(digit)) {
    return digit;
  }
}
