import fs from "node:fs";

import { processInput } from "../src/server/assembler/process-input";

function main() {
  const data = fs.readFileSync("./scripts/test.asm", "utf8");

  console.log(processInput(data));
}

main();
