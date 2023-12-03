import { loadFileLines } from "../../utils";
import { solve as solvePart1 } from "./part-1";
import { solve as solvePart2 } from "./part-2";

const fileLines = await loadFileLines("./2023/01/input.txt");

console.info("Part One:", solvePart1(fileLines));
console.info("Part Two:", solvePart2(fileLines));
