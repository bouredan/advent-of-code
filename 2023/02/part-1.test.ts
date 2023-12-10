import { expect, test } from "bun:test";
import { solve } from "./part-1";
import { loadFileLines } from "../../utils";

const inputExampleLines = await loadFileLines(
  "./2023/02/part-1-example-input.txt"
);

const inputLines = await loadFileLines("./2023/02/input.txt");

test("example", () => {
  expect(solve(inputExampleLines)).toBe(8);
});

test("my input", () => {
  expect(solve(inputLines)).toBe(2101);
});
