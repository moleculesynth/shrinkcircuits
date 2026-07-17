# Shrink Circuits

The responsive portfolio and project archive for
[shrinkcircuits.org](https://shrinkcircuits.org).

The site preserves the original photography for S.T.E.P. Lab, WSU–DTC 338,
Molecule Wall, and the broader Shrink Circuits workshop archive. Source images
are optimized to WebP for the published galleries.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm test
```

This creates the deployment build and verifies the homepage, all three project
routes, metadata, and required image assets.

## Image import

The committed gallery files are already optimized. To re-import a source image
archive with the same folder structure:

```bash
node scripts/import-images.mjs /path/to/source public/images
```
