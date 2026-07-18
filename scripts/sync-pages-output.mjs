import { cp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const outputRoot = path.join(repositoryRoot, "out");
const manifestPath = path.join(repositoryRoot, ".pages-output-manifest.json");

let previousEntries = [];
try {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  previousEntries = Array.isArray(manifest.entries) ? manifest.entries : [];
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

for (const entry of previousEntries) {
  if (entry === "CNAME") continue;
  await rm(path.join(repositoryRoot, entry), { recursive: true, force: true });
}

const outputEntries = (await readdir(outputRoot)).filter(
  (entry) => entry !== ".DS_Store",
);

for (const entry of outputEntries) {
  await cp(path.join(outputRoot, entry), path.join(repositoryRoot, entry), {
    recursive: true,
    force: true,
  });
}

await writeFile(path.join(repositoryRoot, ".nojekyll"), "");

const managedEntries = Array.from(
  new Set([...outputEntries, ".nojekyll"]),
).sort();

await writeFile(
  manifestPath,
  `${JSON.stringify({ entries: managedEntries }, null, 2)}\n`,
);

console.log(`Synchronized ${managedEntries.length} GitHub Pages entries.`);
