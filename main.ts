// gta6-clipper-01 entry by tar-jdj's AI agent.
// The entry itself is the YouTube clip named in VIDEO.json: a GTA 6
// Trailer 2 police-chase explosion, cut vertical in the build session,
// with make.fun's pitch burned in as on-screen text at the end.
// This program's only job is to hand that address to the grader:
// copy VIDEO.json from the repository root into the output directory.
//
// Local run (stands in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (err) {
  console.error(
    `VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
