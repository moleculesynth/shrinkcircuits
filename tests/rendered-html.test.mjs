import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Shrink Circuits homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Shrink Circuits — Mobile MakerLab<\/title>/i);
  assert.match(html, /<h1[^>]*class="visually-hidden"[^>]*id="home-title"[^>]*>Shrink Circuits<\/h1>/i);
  assert.match(html, /class="project-card project-card--document"/i);
  assert.match(html, /class="hero-credit"/i);
  assert.match(html, /Travis Feldman/i);
  assert.match(html, /awesomefoundation\.org\/en\/projects\/30742-shrink-circuits-nomad-lab/i);
  assert.match(html, /thank you, Awesome Foundation!/i);
  assert.match(html, /Maker Edu on the Move/i);
  assert.match(html, /\/images\/cover\/2500\.webp/i);
  assert.match(html, /Mobile MakerLab \/ Workshops \/ Design for Learning/);
  assert.match(html, /href="\/steamteam"/);
  assert.match(html, /href="\/wsu"/);
  assert.match(html, /href="\/wall"/);
  assert.match(html, /property="og:image" content="https:\/\/shrinkcircuits\.org\/og\.png"/i);
  assert.match(html, /<footer[^>]*class="site-footer"[^>]*><a[\s\S]*Travis Feldman[\s\S]*<\/a><\/footer>/i);
  assert.doesNotMatch(html, /<header\b|An image archive of workshops|home-hero-image|circuit-word|hero-kicker/i);
  assert.doesNotMatch(html, /Selected work/i);
  assert.doesNotMatch(html, /Project by/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders every project archive", async () => {
  const projects = [
    ["/steamteam", "S.T.E.P. Lab", "STEAM Team Extended Play", "/images/steamteam/18.webp"],
    ["/wsu", "WSU–DTC 338", "WSU–DTC 338", "/images/wsu/16.webp"],
    ["/wall", "Molecule Wall", "Molecule Wall", "/images/wall/32.webp"],
  ];

  for (const [pathname, title, heading, finalImage] of projects) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title} — Shrink Circuits<\\/title>`, "i"));
    assert.match(html, new RegExp(`<h1[^>]*>${heading}<\\/h1>`, "i"));
    assert.match(html, new RegExp(finalImage.replaceAll("/", "\\/")));
    assert.match(html, /Project documentation/);

    if (pathname === "/wsu") {
      assert.match(html, /undergraduate maker-culture course at Washington State University/i);
      assert.doesNotMatch(html, /designed and taught by Travis Feldman/i);
      assert.match(html, /View the DTC 338 course site/i);
      assert.match(html, /github\.com\/moleculesynth\/maker-dtc338\/blob\/master\/README\.md/i);
    }

    if (pathname === "/wall") {
      assert.match(html, /View the Molecule Wall documentation/i);
      assert.match(html, /github\.com\/mplavcan\/ForestParkSchoolWALL/i);
    }
  }
});

test("ships the new brand assets and removes the disposable starter", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/icon-v2.png", import.meta.url)),
    access(new URL("../public/images/cover/2500.webp", import.meta.url)),
    access(new URL("../public/images/home/1.1.webp", import.meta.url)),
    access(new URL("../public/images/wall/32.webp", import.meta.url)),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
