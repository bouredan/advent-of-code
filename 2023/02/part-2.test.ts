import { expect, test } from "bun:test";
import { solve } from "./part-2";
import { loadFileLines } from "../../utils";

const inputExampleLines = await loadFileLines(
  "./2023/02/part-2-example-input.txt"
);

const inputLines = await loadFileLines("./2023/02/input.txt");

test("example", () => {
  expect(solve(inputExampleLines)).toBe(2286);
});

test("my input", () => {
  expect(solve(inputLines)).toBe(58269);
});
