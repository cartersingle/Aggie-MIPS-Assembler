import fs from "node:fs";

import { processInput } from "../src/server/assembler/process-input";
import { buildDataTable } from "../src/server/assembler/build-data-table";
import { buildLabelTable } from "../src/server/assembler/build-label-table";

function main() {
  const data = fs.readFileSync("./scripts/test.asm", "utf8");

  const lines = processInput(data);

  const stuff = buildDataTable(lines);

  const otherStuff = buildLabelTable(stuff.dataTableLines);

  console.dir(otherStuff, {
    depth: Infinity,
  });
}

main();
