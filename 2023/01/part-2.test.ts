import { expect, test } from "bun:test";
import { solve } from "./part-2";
import { loadFileLines } from "../../utils";

const inputExampleLines = await loadFileLines(
  "./2023/01/part-2-example-input.txt"
);

const inputLines = await loadFileLines(
  "./2023/01/input.txt"
);

test("example", () => {
  expect(solve(inputExampleLines)).toBe(281);
});

test("my input", () => {
  expect(solve(inputLines)).toBe(54980);
});
