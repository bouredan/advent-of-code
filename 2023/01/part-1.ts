export function solve(lines: string[]) {
  return lines.reduce<number>((acc, line) => {
    const numberFromLine = Number(
      `${getFirstDigit(line)}${getLastDigit(line)}`
    );
    return acc + numberFromLine;
  }, 0);
}

function getFirstDigit(line: string) {
  for (let i = 0; i < line.length; i++) {
    const digit = Number(line[i]);
    if (!isNaN(digit)) {
      return digit;
    }
  }
}

function getLastDigit(line: string) {
  for (let i = line.length - 1; i >= 0; i--) {
    const digit = Number(line[i]);
    if (!isNaN(digit)) {
      return digit;
    }
  }
}
