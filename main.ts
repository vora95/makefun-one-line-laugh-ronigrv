// u-ronigrv-the-one-line-laugh-7ccca46f
// "The One-Line Laugh"
//
// The program writes one short text to /output/entry.txt: a single funny
// line. The joke is the dentist's standard advice — floss only the teeth
// you want to keep — taken literally: the speaker flosses exactly one
// tooth and guards it like an heirloom. The surprise lands at the end
// ("one tooth", "heirloom") but still makes sense, because everyone has
// heard the floss lecture and nobody actually flosses every tooth.
//
// Deterministic: the same bytes on every run. No network, no input.
// Run with: node main.ts  (node22) — then read /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My dentist told me to floss only the teeth I want to keep, so now I floss exactly one tooth and guard it like an heirloom.";

// The gate allows 1–200 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
