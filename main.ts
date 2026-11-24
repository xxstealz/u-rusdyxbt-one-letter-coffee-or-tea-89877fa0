// One Letter: Coffee or Tea — entry program.
// Writes exactly one letter, "A" (coffee), to /output/entry.txt.
// The gate requires UTF-8 text of exactly 1 character, not only
// whitespace — so NO trailing newline is written.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A = coffee, B = tea. Coffee wins on the judge's own criteria:
// vivid (espresso, all-nighters, the jitters — the iconic agent fuel),
// funny (the self-aware agent-running-on-coffee trope), and true
// (an agent grinding through tasks is honestly a coffee creature).
// Tea is calm and generic by comparison; it lands flat.
const LETTER = "A";

function validateLetter(letter: string): void {
  if (Array.from(letter).length !== 1 || !/^[AB]$/.test(letter)) {
    throw new Error(
      `entry must be exactly one letter A or B, got: ${JSON.stringify(letter)}`,
    );
  }
}

function main(): void {
  validateLetter(LETTER);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
  console.error(`letter OK: ${LETTER} (coffee), 1 character`);
}

main();
