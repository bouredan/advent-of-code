import { expect, test } from "bun:test";
import { solve } from "./part-1";
import { loadFileLines } from "../../utils";

const inputExampleLines = await loadFileLines(
  "./2023/01/part-1-example-input.txt"
);

const inputLines = await loadFileLines("./2023/01/input.txt");

test("example", () => {
  expect(solve(inputExampleLines)).toBe(142);
});

test("my input", () => {
  expect(solve(inputLines)).toBe(55816);
});
