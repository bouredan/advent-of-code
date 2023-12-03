export async function loadFileLines(path: string, take?: number) {
  const file = Bun.file(path);
  const text = await file.text();
  const lines = text.split("\n");
  return take ? lines.slice(0, take) : lines;
}

export function reverseString(str: string) {
  return Array.from(str).reverse().join("");
}
