import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { force: true, recursive: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });

const siteUrl = "https://memorial.pagecheckai.com";
const pages = [
  ["24-hour-memorial-video", "24-hour memorial video service"],
  ["funeral-slideshow-rush-order", "Funeral slideshow rush order"],
  ["tribute-video-intake-checklist", "Tribute video intake checklist"],
  ["memorial-video-script-planner", "Memorial video script planner"],
  ["privacy-first-memorial-video", "Privacy-first memorial video"],
];

for (const [slug, title] of pages) {
  await mkdir(`dist/${slug}`, { recursive: true });
  await writeFile(
    `dist/${slug}/index.html`,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} - MemorialRushAI</title><meta name="description" content="Plan a respectful rush memorial video with a private intake checklist, tribute script, and editor handoff brief."><link rel="canonical" href="${siteUrl}/${slug}"><link rel="stylesheet" href="/styles.css"><link rel="icon" href="/favicon.svg"></head><body><main class="legal"><a href="/">Open MemorialRushAI</a><p class="eyebrow">24-hour tribute planning</p><h1>${title}</h1><p>MemorialRushAI helps families prepare names, dates, photos, music notes, chapter order, captions, and a clear editor brief for a respectful tribute video.</p><a class="primary" href="/">Create a tribute brief</a><p><a href="https://tools.pagecheckai.com">More PageCheckAI tools</a></p></main></body></html>`,
  );
}

await writeFile(
  "dist/robots.txt",
  `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`,
);

await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc></url>
  <url><loc>${siteUrl}/privacy.html</loc></url>
  <url><loc>${siteUrl}/support.html</loc></url>
  <url><loc>${siteUrl}/terms.html</loc></url>
${pages.map(([slug]) => `  <url><loc>${siteUrl}/${slug}</loc></url>`).join("\n")}
</urlset>
`,
);
