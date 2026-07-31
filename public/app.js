const fields = {
  activateExpanded: document.querySelector("#activateExpanded"),
  activateStarter: document.querySelector("#activateStarter"),
  captionOutput: document.querySelector("#captionOutput"),
  contactEmail: document.querySelector("#contactEmail"),
  copyAll: document.querySelector("#copyAll"),
  downloadExpanded: document.querySelector("#downloadExpanded"),
  downloadStarter: document.querySelector("#downloadStarter"),
  emailOrder: document.querySelector("#emailOrder"),
  expandedCode: document.querySelector("#expandedCode"),
  expandedStatus: document.querySelector("#expandedStatus"),
  handoffOutput: document.querySelector("#handoffOutput"),
  lifeDates: document.querySelector("#lifeDates"),
  lifeNotes: document.querySelector("#lifeNotes"),
  musicPreference: document.querySelector("#musicPreference"),
  personName: document.querySelector("#personName"),
  photoCount: document.querySelector("#photoCount"),
  relationship: document.querySelector("#relationship"),
  sceneOutput: document.querySelector("#sceneOutput"),
  serviceTime: document.querySelector("#serviceTime"),
  starterCode: document.querySelector("#starterCode"),
  starterStatus: document.querySelector("#starterStatus"),
  summaryOutput: document.querySelector("#summaryOutput"),
  tone: document.querySelector("#tone"),
  videoLength: document.querySelector("#videoLength"),
};

const LICENSE_VERIFY_URL = "https://namebatch.pagecheckai.com/api/licenses/verify";
const LICENSE_STORAGE_KEYS = {
  expanded: "memorialrushai.expanded-code",
  starter: "memorialrushai.starter-code",
};
let starterActive = false;
let expandedActive = false;

function textValue(node, fallback = "") {
  return node.value.trim() || fallback;
}

function values() {
  return {
    captionOutput: fields.captionOutput.textContent,
    contactEmail: textValue(fields.contactEmail),
    handoffOutput: fields.handoffOutput.textContent,
    lifeDates: textValue(fields.lifeDates, "dates not provided"),
    lifeNotes: textValue(fields.lifeNotes),
    musicPreference: textValue(fields.musicPreference, "gentle instrumental music"),
    personName: textValue(fields.personName, "the honored person"),
    photoCount: Math.max(Number(fields.photoCount.value) || 0, 0),
    relationship: textValue(fields.relationship, "beloved family member"),
    sceneOutput: fields.sceneOutput.textContent,
    serviceTime: fields.serviceTime.value,
    summaryOutput: fields.summaryOutput.textContent,
    tone: fields.tone.value,
    videoLength: fields.videoLength.value,
  };
}

const paymentLinks = {
  starter: "https://namebatch.pagecheckai.com/api/checkout?v=memorial-20260731&product=memorialrushai",
  expanded: "https://namebatch.pagecheckai.com/api/checkout?v=memorial-20260731&product=memorialrushexpanded",
  starterFallback: "https://www.paypal.com/ncp/payment/4L3HUKYKN6C8S",
  expandedFallback: "https://www.paypal.com/ncp/payment/84K489BK7ZMLL",
};

function chapterCount(photoCount) {
  if (photoCount >= 80) return 5;
  if (photoCount >= 45) return 4;
  return 3;
}

function generate() {
  const v = values();
  const chapters = chapterCount(v.photoCount);
  const serviceLine = v.serviceTime ? `Service time: ${v.serviceTime}` : "Service time: not provided";
  const warnings = [];

  if (v.photoCount < 15) warnings.push("Ask for at least 15 photos if possible.");
  if (!v.lifeNotes || v.lifeNotes.length < 80) warnings.push("Ask the family for more life notes or 3-5 favorite memories.");
  if (!v.contactEmail) warnings.push("Ask for a contact email before accepting the rush order.");

  fields.summaryOutput.textContent = `Honored person: ${v.personName}
Dates: ${v.lifeDates}
Audience: ${v.relationship}
Tone: ${v.tone}
Length: ${v.videoLength}
Photos expected: ${v.photoCount}
Music: ${v.musicPreference}
${serviceLine}
Rush readiness: ${warnings.length ? "Needs a quick intake follow-up." : "Ready for editor handoff."}`;

  fields.sceneOutput.textContent = `1. Opening title card: ${v.personName}, ${v.lifeDates}.
2. Early life and family roots: use older photos and simple location/date captions.
3. Main life chapter: work, service, hobbies, travel, traditions, and everyday moments.
${chapters >= 4 ? "4. Family messages: use group photos, grandchildren, friends, and short written tributes.\n" : ""}${
    chapters >= 5 ? "5. Closing reflection: strongest portrait, thank-you note, and service details.\n" : ""
  }${chapters < 4 ? "4. Closing card: thank-you note, final portrait, and service details.\n" : ""}Recommended pacing: slow crossfades, no flashy transitions, 5-7 seconds per photo unless captions need more time.`;

  fields.captionOutput.textContent = `Opening:
In loving memory of ${v.personName}.

Chapter caption:
A life remembered through family, kindness, and the moments that mattered most.

Memory line:
${v.lifeNotes}

Closing:
With love and gratitude, from family and friends.`;

  fields.handoffOutput.textContent = `Editor brief:
- Build a ${v.videoLength} tribute video in a ${v.tone} tone.
- Use ${v.musicPreference}; confirm the family has permission or use royalty-safe music.
- Verify spelling of "${v.personName}" and dates "${v.lifeDates}" before export.
- Keep source photos private. Delete working files after delivery and approval.
- Export 1080p MP4 plus a backup copy.

Follow-up questions:
${warnings.length ? warnings.map((item, index) => `${index + 1}. ${item}`).join("\n") : "1. Confirm final photo order and exact service playback format."}`;
}

function orderText() {
  const v = values();
  return `MemorialRushAI rush order request

Contact email: ${v.contactEmail || "not provided"}
Honored person: ${v.personName}
Dates: ${v.lifeDates}
Relationship / audience: ${v.relationship}
Service time: ${v.serviceTime || "not provided"}
Video length: ${v.videoLength}
Tone: ${v.tone}
Photo count: ${v.photoCount}
Music preference: ${v.musicPreference}
Payment:
- $49 starter: ${paymentLinks.starter}
- $49 starter fallback: ${paymentLinks.starterFallback}
- $99 expanded: ${paymentLinks.expanded}
- $99 expanded fallback: ${paymentLinks.expandedFallback}

Intake summary:
${fields.summaryOutput.textContent}

Scene plan:
${fields.sceneOutput.textContent}

Caption draft:
${fields.captionOutput.textContent}

Editor handoff:
${fields.handoffOutput.textContent}`;
}

function paidHandoffText(kind) {
  const v = values();
  const expanded = kind === "expanded";
  return `MemorialRushAI ${expanded ? "Expanded Archive Handoff" : "Starter Editor Handoff"}

Generated locally from the current browser brief. Review every name, date, caption, photo order, music note, privacy choice, and family approval before sharing.

${orderText()}

Paid handoff checklist:
1. Confirm the honored person's display name, pronunciation, dates, relationships, faith or service wording, and title card language with the family reviewer.
2. Keep source photos, videos, voice notes, service details, family contacts, private links, and editor files in a restricted family-controlled folder.
3. Separate verified facts from memories, optional captions, uncertain dates, and sensitive stories. Do not guess missing information.
4. Mark must-use, do-not-use, sensitive, child/minor, military/service, music, and private images before any editor handoff.
5. Use secure transfer for media files. Do not paste private download links, passwords, account credentials, or public folder permissions into this tool.
6. Confirm music rights, public sharing permissions, obituary/program link visibility, captions, accessibility needs, and final family approval outside this tool.
7. Keep final video creation, file conversion, venue playback testing, posting, messaging, USB/print production, and file deletion as separate human-controlled steps.

Family and editor tracker:
Item | Owner | Private location | Reviewer | Status | Last checked | Next authorized step
Names and dates | _____ | _____ | _____ | pending family review | _____ | _____
Photo order | _____ | _____ | _____ | pending family review | _____ | _____
Music notes and rights | _____ | _____ | _____ | pending external review | _____ | _____
Captions and wording | _____ | _____ | _____ | pending family review | _____ | _____
Sensitive or private media | _____ | _____ | _____ | pending family decision | _____ | _____
Editor transfer folder | _____ | _____ | _____ | not managed by this tool | _____ | _____
Final approval | _____ | _____ | _____ | not completed by this tool | _____ | _____
After-service archive | _____ | _____ | _____ | ${expanded ? "included in expanded checklist" : "upgrade if needed"} | _____ | _____

${
  expanded
    ? `Expanded archive notes:
- Prepare an approved final-file index with MP4, captions, thumbnail, source folder, review version, delivery date, and access owner.
- Record accessibility review notes for caption size, contrast, pacing, audio balance, flashing transitions, and playback controls without collecting guest health details.
- Track anniversary resharing separately; past approval does not automatically authorize a new public audience.
- Ask the editor or family storage owner to confirm deletion of temporary working files after delivery and approval.`
    : `Starter scope:
- Use this as an editor-ready handoff and family review checklist.
- Upgrade to the expanded pack if the family needs after-service archive, accessibility, anniversary resharing, or backup naming notes.`
}

Operating boundary:
MemorialRushAI organizes private tribute planning notes. It does not upload photos, create the final video automatically, test venue equipment, convert files, post publicly, message relatives, create USB copies, delete files for the family, provide grief counseling, legal advice, music licensing advice, accessibility certification, family consent advice, or guarantee delivery, playback, approval, privacy, ranking, traffic, sales, or revenue.`;
}

function setPackState(kind, active, message) {
  if (kind === "starter") {
    starterActive = active;
    fields.downloadStarter.disabled = !active;
    fields.starterStatus.textContent = message;
    return;
  }
  expandedActive = active;
  fields.downloadExpanded.disabled = !active;
  fields.expandedStatus.textContent = message;
}

async function verifyPackCode(kind, rawCode, { quiet = false } = {}) {
  const code = rawCode.trim().toUpperCase();
  const config =
    kind === "starter"
      ? {
          button: fields.activateStarter,
          entitlement: "starter_tribute_handoff_pack",
          input: fields.starterCode,
          pattern: /^MR-[A-F0-9]{4}(?:-[A-F0-9]{4}){3}$/,
          product: "memorialrushai",
          storageKey: LICENSE_STORAGE_KEYS.starter,
        }
      : {
          button: fields.activateExpanded,
          entitlement: "expanded_tribute_archive_pack",
          input: fields.expandedCode,
          pattern: /^MX-[A-F0-9]{4}(?:-[A-F0-9]{4}){3}$/,
          product: "memorialrushexpanded",
          storageKey: LICENSE_STORAGE_KEYS.expanded,
        };
  if (!config.pattern.test(code)) {
    setPackState(kind, false, quiet ? "Enter your paid handoff code." : "That activation code format is not valid.");
    return false;
  }
  config.button.disabled = true;
  if (!quiet) setPackState(kind, false, "Checking activation code...");
  try {
    const response = await fetch(LICENSE_VERIFY_URL, {
      body: JSON.stringify({ code, product: config.product }),
      headers: { "content-type": "application/json" },
      method: "POST",
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.valid !== true || result.entitlement !== config.entitlement) {
      localStorage.removeItem(config.storageKey);
      setPackState(kind, false, "The code could not be verified. Check it or contact support.");
      return false;
    }
    localStorage.setItem(config.storageKey, code);
    config.input.value = code;
    setPackState(kind, true, "Paid handoff unlocked on this browser.");
    return true;
  } catch {
    setPackState(kind, false, "Activation is temporarily unavailable. Your memorial notes remain on this device.");
    return false;
  } finally {
    config.button.disabled = false;
  }
}

function downloadPack(kind) {
  if (kind === "starter" && !starterActive) {
    setPackState("starter", false, "Activate the starter handoff before downloading.");
    fields.starterCode.focus();
    return;
  }
  if (kind === "expanded" && !expandedActive) {
    setPackState("expanded", false, "Activate the expanded handoff before downloading.");
    fields.expandedCode.focus();
    return;
  }
  const blob = new Blob([paidHandoffText(kind)], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download =
    kind === "starter"
      ? "memorialrushai-starter-editor-handoff.txt"
      : "memorialrushai-expanded-archive-handoff.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function mailto() {
  const v = values();
  const subject = `MemorialRushAI rush order - ${v.personName}`;
  return `mailto:support@pagecheckai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(orderText())}`;
}

async function copyAll() {
  await navigator.clipboard.writeText(orderText());
  fields.copyAll.textContent = "Copied";
  setTimeout(() => {
    fields.copyAll.textContent = "Copy";
  }, 1400);
}

function emailOrder() {
  location.href = mailto();
}

document.querySelector("#tributeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  generate();
});

fields.copyAll.addEventListener("click", copyAll);
fields.emailOrder.addEventListener("click", emailOrder);
fields.activateStarter.addEventListener("click", () => verifyPackCode("starter", fields.starterCode.value));
fields.activateExpanded.addEventListener("click", () => verifyPackCode("expanded", fields.expandedCode.value));
fields.downloadStarter.addEventListener("click", () => downloadPack("starter"));
fields.downloadExpanded.addEventListener("click", () => downloadPack("expanded"));

const savedStarterCode = localStorage.getItem(LICENSE_STORAGE_KEYS.starter);
if (savedStarterCode) {
  fields.starterCode.value = savedStarterCode;
  verifyPackCode("starter", savedStarterCode, { quiet: true });
}

const savedExpandedCode = localStorage.getItem(LICENSE_STORAGE_KEYS.expanded);
if (savedExpandedCode) {
  fields.expandedCode.value = savedExpandedCode;
  verifyPackCode("expanded", savedExpandedCode, { quiet: true });
}

generate();
