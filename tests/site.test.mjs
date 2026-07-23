import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders MemorialRushAI planner", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /MemorialRushAI/);
  assert.match(html, /Generate tribute brief/);
  assert.match(html, /Email order pack/);
  assert.match(html, /https:\/\/www\.paypal\.com\/ncp\/payment\/4L3HUKYKN6C8S/);
  assert.match(html, /https:\/\/www\.paypal\.com\/ncp\/payment\/84K489BK7ZMLL/);
  assert.match(html, /Privacy: use secure transfer only/);
  assert.match(html, /Photo order/);
  assert.match(html, /Online memorial/);
});

test("ships browser-local tribute generator", async () => {
  const script = await readFile(new URL("../dist/app.js", import.meta.url), "utf8");
  assert.match(script, /function generate/);
  assert.match(script, /MemorialRushAI rush order request/);
  assert.match(script, /4L3HUKYKN6C8S/);
  assert.match(script, /84K489BK7ZMLL/);
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
  assert.match(sitemap, /memorial-photo-organization-checklist/);
  assert.match(sitemap, /celebration-of-life-slideshow-plan/);
  assert.match(sitemap, /online-memorial-video-planner/);
  assert.match(sitemap, /grandparent-tribute-video-script/);
  assert.match(sitemap, /funeral-photo-scan-order/);
  assert.match(privacy, /does not upload photos/i);
  assert.match(support, /MemorialRushAI support/);
});

test("builds thick memorial SEO pages for rush and privacy searches", async () => {
  const rushPage = await readFile(new URL("../dist/24-hour-memorial-video/index.html", import.meta.url), "utf8");
  const privacyPage = await readFile(new URL("../dist/privacy-first-memorial-video/index.html", import.meta.url), "utf8");
  assert.match(rushPage, /Rush readiness checklist/);
  assert.match(rushPage, /Family review notes/);
  assert.match(rushPage, /Privacy and consent checklist/);
  assert.match(rushPage, /Editor handoff review/);
  assert.match(rushPage, /Confirm the service deadline/);
  assert.match(privacyPage, /expiring links, limited permissions, and deletion requests/);
  assert.match(privacyPage, /Review the final video on a private link/);
});
