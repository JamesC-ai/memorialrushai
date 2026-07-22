import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders MemorialRushAI planner", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /MemorialRushAI/);
  assert.match(html, /Generate tribute brief/);
  assert.match(html, /Email order pack/);
  assert.match(html, /Privacy: use secure transfer only/);
});

test("ships browser-local tribute generator", async () => {
  const script = await readFile(new URL("../dist/app.js", import.meta.url), "utf8");
  assert.match(script, /function generate/);
  assert.match(script, /MemorialRushAI rush order request/);
  assert.match(script, /Delete working files after delivery and approval/);
  assert.doesNotMatch(script, /fetch\(/);
});

test("includes policy support and SEO discovery files", async () => {
  const robots = await readFile(new URL("../dist/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../dist/sitemap.xml", import.meta.url), "utf8");
  const privacy = await readFile(new URL("../dist/privacy.html", import.meta.url), "utf8");
  const support = await readFile(new URL("../dist/support.html", import.meta.url), "utf8");
  assert.match(robots, /Sitemap: https:\/\/memorial\.pagecheckai\.com\/sitemap\.xml/);
  assert.match(sitemap, /24-hour-memorial-video/);
  assert.match(sitemap, /privacy-first-memorial-video/);
  assert.match(privacy, /does not upload photos/i);
  assert.match(support, /MemorialRushAI support/);
});
