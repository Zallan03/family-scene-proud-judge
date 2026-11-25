// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (1-2 lines, max 280 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Grandma's soup recipe has no measurements — 'a handful, until it smells right.' I finally got it right last winter. She tasted it, nodded once, and said, 'Now you can feed them when I'm gone.'";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-280`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
