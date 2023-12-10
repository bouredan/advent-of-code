const colors = ["red", "green", "blue"] as const;
type Color = (typeof colors)[number];

const gameConfig: Record<Color, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

const lineRegex = /Game (\d+): (.*)/;

export function solve(lines: string[]) {
  return lines.reduce<number>((acc, line) => {
    const result = line.match(lineRegex);
    if (!result) {
      return acc;
    }
    const id = Number(result.at(1));
    const sets = result.at(2)?.split(";");
    if (!sets) {
      return acc;
    }
    for (const set of sets) {
      const numberOfBallsFromSet = getNumberOfBallsFromSet(set);
      for (const color of colors) {
        if (numberOfBallsFromSet[color] > gameConfig[color]) {
          return acc;
        }
      }
    }
    return acc + id;
  }, 0);
}

const roundRegex = /(\d+) (red|green|blue)/;
function getNumberOfBallsFromSet(set: string) {
  const numberOfBalls: Record<Color, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };
  const rounds = set.split(", ");
  for (const round of rounds) {
    const result = round.match(roundRegex);
    if (!result) {
      break;
    }
    const color = result.at(2) as Color;
    numberOfBalls[color] = numberOfBalls[color] + Number(result.at(1));
  }
  return numberOfBalls;
}
