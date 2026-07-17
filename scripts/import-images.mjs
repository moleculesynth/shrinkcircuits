import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = process.argv[2];
const outputRoot = process.argv[3];

if (!sourceRoot || !outputRoot) {
  throw new Error("Usage: node scripts/import-images.mjs <source> <destination>");
}

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const sourceFiles = await collectFiles(sourceRoot);

await Promise.all(
  sourceFiles.map(async (sourcePath) => {
    const relativePath = path.relative(sourceRoot, sourcePath);
    const parsedPath = path.parse(relativePath);
    const outputPath = path.join(outputRoot, parsedPath.dir, `${parsedPath.name}.webp`);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await sharp(sourcePath)
      .rotate()
      .resize({ width: 2000, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 })
      .toFile(outputPath);
  }),
);

console.log(`Imported ${sourceFiles.length} images.`);
