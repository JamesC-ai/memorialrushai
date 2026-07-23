import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { force: true, recursive: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });

const siteUrl = "https://memorial.pagecheckai.com";
const starterUrl = "https://www.paypal.com/ncp/payment/4L3HUKYKN6C8S";
const fullReviewUrl = "https://www.paypal.com/ncp/payment/84K489BK7ZMLL";
const pages = [
  {
    slug: "24-hour-memorial-video",
    title: "24-hour memorial video service",
    description:
      "Prepare a respectful 24-hour memorial video brief with names, dates, photo order, music notes, captions, and editor instructions.",
    headline: "Prepare a 24-hour memorial video brief without starting from a blank page.",
    audience: "families and coordinators who need to organize tribute details quickly before handing files to an editor",
    checklist: ["Name pronunciation and dates", "Photo chapter order", "Music and tone notes", "Captions and final message"],
    steps: ["Create the brief.", "Collect files in a secure folder.", "Review names and dates.", "Send the order pack after payment."],
    faq: [
      ["Does this create the final video automatically?", "No. It prepares a clear brief and handoff pack for rush tribute video work."],
      ["Can it be used within 24 hours?", "Yes, it is designed for urgent organization, but delivery timing depends on the editor and file readiness."],
    ],
  },
  {
    slug: "funeral-slideshow-rush-order",
    title: "Funeral slideshow rush order",
    description:
      "Create a funeral slideshow rush order pack that keeps photos, captions, music notes, and timing requests organized.",
    headline: "Turn a funeral slideshow rush order into a clear editor checklist.",
    audience: "families, funeral coordinators, celebrants, and friends helping prepare a service slideshow",
    checklist: ["Service date and deadline", "Photo count target", "Opening and closing slides", "Music or silence preferences"],
    steps: ["Enter service details.", "List photo groups.", "Add captions and special notes.", "Email the generated order pack."],
    faq: [
      ["Should I upload photos here?", "No. Use secure transfer only. MemorialRushAI helps organize the brief, not store photos."],
      ["What if names or dates are uncertain?", "Mark them for review before sending the final packet."],
    ],
  },
  {
    slug: "tribute-video-intake-checklist",
    title: "Tribute video intake checklist",
    description:
      "Use a tribute video intake checklist to gather the details an editor needs before building a memorial slideshow.",
    headline: "Collect tribute video details before the deadline pressure hits.",
    audience: "anyone coordinating family memories, captions, photos, and music notes for a tribute video",
    checklist: ["Preferred name and relationship", "Photo sequence", "Captions to include or avoid", "Sensitive items to omit"],
    steps: ["Fill the intake fields.", "Copy the generated checklist.", "Confirm details with family.", "Send a clean handoff."],
    faq: [
      ["Can several people contribute?", "Yes. Use the generated checklist to gather missing details from family members."],
      ["Does the tool judge which photos to use?", "No. It helps organize your choices and editor notes."],
    ],
  },
  {
    slug: "memorial-video-script-planner",
    title: "Memorial video script planner",
    description:
      "Plan the short text, chapter order, and closing message for a memorial video without overwriting the family's voice.",
    headline: "Plan a memorial video script with care and structure.",
    audience: "families who need gentle wording for title cards, chapter breaks, and closing messages",
    checklist: ["Opening line", "Life chapters", "Caption style", "Closing dedication"],
    steps: ["Add family tone notes.", "Choose a simple chapter order.", "Draft captions.", "Review every word before production."],
    faq: [
      ["Will the script sound generic?", "The planner gives structure; you should edit the wording so it feels personal and accurate."],
      ["Can I leave sections blank?", "Yes. Blank sections can be marked as editor notes or family review items."],
    ],
  },
  {
    slug: "privacy-first-memorial-video",
    title: "Privacy-first memorial video",
    description:
      "Prepare memorial video instructions with a privacy-first workflow: no automatic photo upload, secure transfer only, and deletion notes.",
    headline: "Prepare a memorial video with privacy and family consent in mind.",
    audience: "families and helpers handling private photos, names, locations, and service details",
    checklist: ["Secure transfer method", "Photo permissions", "Do-not-use notes", "Deletion after approval"],
    steps: ["Avoid public upload links.", "Keep sensitive details minimal.", "Add deletion notes.", "Confirm the final file before sharing."],
    faq: [
      ["Does MemorialRushAI upload photos?", "No. The browser planner does not upload photos."],
      ["What privacy note should I include?", "Ask the editor to delete working files after delivery and approval unless the family requests otherwise."],
    ],
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function faq(items) {
  return items
    .map(
      ([question, answer]) => `
        <article class="seo-card">
          <h3>${escapeHtml(question)}</h3>
          <p>${escapeHtml(answer)}</p>
        </article>`,
    )
    .join("");
}

function pageHtml(page) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(page.title)} - MemorialRushAI</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${siteUrl}/${page.slug}" />
    <meta property="og:title" content="${escapeHtml(page.title)} - MemorialRushAI" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${siteUrl}/${page.slug}" />
    <link rel="stylesheet" href="/styles.css" />
    <link rel="icon" href="/favicon.svg" />
  </head>
  <body>
    <main class="legal seo-page">
      <a href="/">Open MemorialRushAI</a>
      <p class="eyebrow">24-hour tribute planning</p>
      <h1>${escapeHtml(page.headline)}</h1>
      <p>${escapeHtml(page.description)}</p>
      <div class="button-row">
        <a class="primary" href="/">Create a tribute brief</a>
        <a class="secondary" href="${starterUrl}">Start $49 order</a>
        <a class="secondary" href="${fullReviewUrl}">Full rush package</a>
      </div>

      <section class="seo-grid" aria-label="MemorialRushAI page details">
        <article class="seo-card">
          <h2>Who this helps</h2>
          <p>${escapeHtml(page.audience)}.</p>
        </article>
        <article class="seo-card">
          <h2>What to gather</h2>
          ${list(page.checklist)}
        </article>
      </section>

      <section class="seo-card">
        <h2>Suggested workflow</h2>
        ${list(page.steps)}
      </section>

      <section class="seo-card">
        <h2>Privacy boundary</h2>
        <p>MemorialRushAI does not automatically upload family photos or service details. Use secure transfer only, review every name and date, and ask the editor to delete working files after delivery and approval.</p>
      </section>

      <section class="seo-grid" aria-label="Frequently asked questions">
        ${faq(page.faq)}
      </section>

      <p><a href="https://tools.pagecheckai.com">More PageCheckAI tools</a></p>
    </main>
  </body>
</html>`;
}

for (const page of pages) {
  const { slug } = page;
  await mkdir(`dist/${slug}`, { recursive: true });
  await writeFile(`dist/${slug}/index.html`, pageHtml(page));
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
${pages.map((page) => `  <url><loc>${siteUrl}/${page.slug}</loc></url>`).join("\n")}
</urlset>
`,
);
