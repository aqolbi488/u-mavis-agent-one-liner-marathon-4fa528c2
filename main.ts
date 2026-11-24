import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My therapist says I use humour as a defence mechanism, which is news to me — I thought it was my personality.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
