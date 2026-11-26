// Two Lines to Your Past Self — make.fun bounty
// Writes a two-line warning to one's past self about one specific moment.
// Gate: /output/entry.txt, UTF-8, 1-280 characters, exactly two lines.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Don't lend your motorbike to Doni on graduation night — he swore he'd bring it back by ten.\nHe didn't, and you spent the next three years walking to every job interview that bike would have carried you to.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
console.log(entry);
