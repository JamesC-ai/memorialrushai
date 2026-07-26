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
  assert.match(html, /Last-minute slideshow/);
  assert.match(html, /Church playback/);
  assert.match(html, /Editor handoff/);
  assert.match(html, /Funeral home intake/);
  assert.match(html, /Pet memorial/);
  assert.match(html, /Photo count &amp; runtime/);
  assert.match(html, /TV\/projector format/);
  assert.match(html, /Same-day checklist/);
  assert.match(html, /Revision checklist/);
  assert.match(html, /Private folder handoff/);
  assert.match(html, /Livestream tribute/);
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
  const indexNowKey = await readFile(new URL("../dist/a9285ac544aea7af0311e391eb112c5d.txt", import.meta.url), "utf8");
  const indexNowScript = await readFile(new URL("../scripts/submit-indexnow.mjs", import.meta.url), "utf8");
  assert.match(robots, /Sitemap: https:\/\/memorial\.pagecheckai\.com\/sitemap\.xml/);
  assert.match(sitemap, /24-hour-memorial-video/);
  assert.match(sitemap, /privacy-first-memorial-video/);
  assert.match(sitemap, /memorial-photo-organization-checklist/);
  assert.match(sitemap, /celebration-of-life-slideshow-plan/);
  assert.match(sitemap, /online-memorial-video-planner/);
  assert.match(sitemap, /grandparent-tribute-video-script/);
  assert.match(sitemap, /funeral-photo-scan-order/);
  assert.match(sitemap, /last-minute-memorial-slideshow/);
  assert.match(sitemap, /church-funeral-slideshow-playback/);
  assert.match(sitemap, /veteran-memorial-video-brief/);
  assert.match(sitemap, /memorial-video-caption-checklist/);
  assert.match(sitemap, /memorial-video-music-notes/);
  assert.match(sitemap, /portrait-memorial-video-layout/);
  assert.match(sitemap, /family-review-memorial-video/);
  assert.match(sitemap, /private-memorial-photo-folder/);
  assert.match(sitemap, /bilingual-memorial-video-brief/);
  assert.match(sitemap, /memorial-video-editor-handoff/);
  for (const slug of [
    "funeral-home-memorial-video-intake",
    "memorial-slideshow-for-mother",
    "memorial-slideshow-for-father",
    "spouse-tribute-video-script",
    "pet-memorial-video-planner",
    "obituary-photo-slideshow-plan",
    "memorial-video-voiceover-script",
    "memorial-slideshow-photo-count-runtime",
    "funeral-slideshow-tv-projector-format",
    "remote-family-memorial-photo-collection",
    "same-day-funeral-slideshow-checklist",
    "memorial-video-photo-sorting-service",
    "memorial-slideshow-usb-backup-checklist",
    "funeral-livestream-tribute-video-plan",
    "memorial-video-revision-checklist",
    "memorial-slideshow-with-captions",
    "funeral-video-music-permission-checklist",
    "memorial-video-dropbox-handoff",
    "memorial-slideshow-for-brother",
    "memorial-slideshow-for-sister",
    "memorial-video-for-husband",
    "memorial-video-for-wife",
    "memorial-slideshow-for-son",
    "memorial-slideshow-for-daughter",
    "memorial-video-for-friend",
    "memorial-slideshow-opening-closing-cards",
    "memorial-video-photo-permission-checklist",
    "funeral-program-video-link-checklist",
    "memorial-video-social-sharing-checklist",
    "memorial-video-family-copy-after-service",
  ]) {
    assert.match(sitemap, new RegExp(slug));
  }
  assert.equal((sitemap.match(/<loc>/g) || []).length, 54);
  assert.match(privacy, /does not upload photos/i);
  assert.match(support, /MemorialRushAI support/);
  assert.equal(indexNowKey.trim(), "a9285ac544aea7af0311e391eb112c5d");
  assert.match(indexNowScript, /api\.indexnow\.org\/indexnow/);
});

test("builds same-day and handoff memorial planning pages", async () => {
  const sameDayPage = await readFile(
    new URL("../dist/same-day-funeral-slideshow-checklist/index.html", import.meta.url),
    "utf8",
  );
  const handoffPage = await readFile(new URL("../dist/memorial-video-dropbox-handoff/index.html", import.meta.url), "utf8");
  const musicPage = await readFile(
    new URL("../dist/funeral-video-music-permission-checklist/index.html", import.meta.url),
    "utf8",
  );
  assert.match(sameDayPage, /Does this guarantee same-day delivery/i);
  assert.match(sameDayPage, /delivery depends on editor availability/i);
  assert.match(handoffPage, /restricted folder/i);
  assert.match(handoffPage, /does not automatically upload family photos/i);
  assert.match(musicPage, /Is this legal advice about music rights/i);
  assert.match(musicPage, /rights and licensing should be checked separately/i);
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

test("builds new memorial planning SEO pages", async () => {
  const editorPage = await readFile(new URL("../dist/memorial-video-editor-handoff/index.html", import.meta.url), "utf8");
  const bilingualPage = await readFile(new URL("../dist/bilingual-memorial-video-brief/index.html", import.meta.url), "utf8");
  assert.match(editorPage, /deadline, video length, music notes, photo count/i);
  assert.match(editorPage, /deletion instructions for source and working files/i);
  assert.match(bilingualPage, /family reviewer for each language/i);
  assert.match(bilingualPage, /Avoid machine-translated wording without family review/i);
});

test("builds relationship and playback memorial planning pages", async () => {
  const funeralHomePage = await readFile(
    new URL("../dist/funeral-home-memorial-video-intake/index.html", import.meta.url),
    "utf8",
  );
  const petPage = await readFile(new URL("../dist/pet-memorial-video-planner/index.html", import.meta.url), "utf8");
  const playbackPage = await readFile(
    new URL("../dist/funeral-slideshow-tv-projector-format/index.html", import.meta.url),
    "utf8",
  );
  assert.match(funeralHomePage, /does not upload photos/i);
  assert.match(petPage, /private family keepsake/i);
  assert.match(playbackPage, /Does MemorialRushAI convert the video format/i);
  assert.match(playbackPage, /No\. It prepares playback requirements/i);
});

test("builds new family sharing and consent planning pages", async () => {
  const sonPage = await readFile(new URL("../dist/memorial-slideshow-for-son/index.html", import.meta.url), "utf8");
  const permissionPage = await readFile(
    new URL("../dist/memorial-video-photo-permission-checklist/index.html", import.meta.url),
    "utf8",
  );
  const programLinkPage = await readFile(new URL("../dist/funeral-program-video-link-checklist/index.html", import.meta.url), "utf8");
  const socialPage = await readFile(new URL("../dist/memorial-video-social-sharing-checklist/index.html", import.meta.url), "utf8");
  const copyPage = await readFile(new URL("../dist/memorial-video-family-copy-after-service/index.html", import.meta.url), "utf8");
  assert.match(sonPage, /does not replace personal or professional support/i);
  assert.match(permissionPage, /legal consent advice/i);
  assert.match(programLinkPage, /Does MemorialRushAI host the video link/i);
  assert.match(socialPage, /Does MemorialRushAI post to social media/i);
  assert.match(copyPage, /does this create USB copies/i);
});
