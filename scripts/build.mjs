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
    rushReadiness: [
      "Confirm the service deadline, timezone, venue screen format, and backup contact before editing starts.",
      "Group photos into childhood, family, work, friends, hobbies, and closing memories so the editor can move quickly.",
      "Keep one decision owner for final approvals to avoid conflicting last-minute changes.",
    ],
    familyReview: [
      "Ask one family member to check spelling, dates, pronunciation, and relationship labels.",
      "Flag photos that are meaningful but sensitive so the editor knows whether to include, soften, or omit them.",
      "Confirm the closing slide wording before payment so the order pack is ready for production.",
    ],
    privacyNotes: [
      "Use private transfer links with expiration dates instead of public folders.",
      "Do not include home addresses, medical details, or private service logistics unless they belong in the final video.",
      "Request deletion of working files after delivery and approval.",
    ],
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
    rushReadiness: [
      "Share the exact playback deadline and whether the file is needed for a chapel screen, projector, livestream, or download link.",
      "Prepare a minimum viable set of photos first, then add extras only if time allows.",
      "Separate must-use photos from optional photos so the editor can protect the most important memories.",
    ],
    familyReview: [
      "Review the order of immediate family, friends, military or faith moments, and closing tribute images.",
      "Check whether any photo should be cropped, blurred, skipped, or shown only briefly.",
      "Make one final pass for misspelled names before the slideshow is rendered.",
    ],
    privacyNotes: [
      "Avoid public upload pages for family images and service documents.",
      "Only share the folder with the editor and the family reviewer.",
      "Ask for a written confirmation when source files are deleted after approval.",
    ],
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
    rushReadiness: [
      "Collect the essentials first: name, dates, deadline, tone, music preference, and photo count.",
      "Write short notes for each photo group instead of trying to script every second.",
      "Mark unknown details as family review items instead of guessing under time pressure.",
    ],
    familyReview: [
      "Send the checklist to the person who knows the family history best.",
      "Confirm the tone: quiet remembrance, faith-centered, celebration of life, or warm documentary.",
      "Keep a simple change log so the editor can see what changed after the first review.",
    ],
    privacyNotes: [
      "Keep intake notes limited to details that help the tribute video.",
      "Do not paste private contact lists, medical information, or unrelated family history into the order pack.",
      "Use a secure folder and remove access after delivery.",
    ],
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
    rushReadiness: [
      "Choose a simple three-part structure: beginning, life and family, closing gratitude.",
      "Use short title cards so the video can move through photos without feeling crowded.",
      "Keep optional stories in the notes field so the editor can use them only if the runtime allows.",
    ],
    familyReview: [
      "Read the script out loud to catch language that feels too formal, too casual, or inaccurate.",
      "Ask whether faith, military service, cultural traditions, or family phrases should be included.",
      "Confirm the final dedication before rendering, because that line often matters most.",
    ],
    privacyNotes: [
      "Avoid private family conflicts, health details, and addresses in visible captions.",
      "Keep the public script separate from private editor notes.",
      "Delete draft scripts after the family approves the final wording.",
    ],
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
    rushReadiness: [
      "Decide who may access the source folder before sending any private photos.",
      "Separate public final-video captions from private production instructions.",
      "Choose a delivery method that allows the family to review before wider sharing.",
    ],
    familyReview: [
      "Ask whether every person shown in sensitive photos is appropriate for the memorial context.",
      "Confirm any do-not-use photos, names, locations, or events before the editor begins.",
      "Review the final video on a private link before posting or projecting it publicly.",
    ],
    privacyNotes: [
      "Use expiring links, limited permissions, and deletion requests for all source files.",
      "Avoid uploading original photos to public forums, comment threads, or untrusted tools.",
      "Keep a copy of the final approved video in a family-controlled folder.",
    ],
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

      <section class="seo-grid" aria-label="Rush memorial video operations">
        <article class="seo-card">
          <h2>Rush readiness checklist</h2>
          ${list(page.rushReadiness)}
        </article>
        <article class="seo-card">
          <h2>Family review notes</h2>
          ${list(page.familyReview)}
        </article>
        <article class="seo-card">
          <h2>Privacy and consent checklist</h2>
          ${list(page.privacyNotes)}
        </article>
        <article class="seo-card">
          <h2>Editor handoff review</h2>
          <p>Before checkout, make sure the brief includes the final contact email, deadline, video length, music notes, photo count, required captions, and any do-not-use instructions. A clean handoff reduces rework during a sensitive deadline.</p>
        </article>
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
