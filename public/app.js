const fields = {
  captionOutput: document.querySelector("#captionOutput"),
  contactEmail: document.querySelector("#contactEmail"),
  copyAll: document.querySelector("#copyAll"),
  emailOrder: document.querySelector("#emailOrder"),
  handoffOutput: document.querySelector("#handoffOutput"),
  lifeDates: document.querySelector("#lifeDates"),
  lifeNotes: document.querySelector("#lifeNotes"),
  musicPreference: document.querySelector("#musicPreference"),
  personName: document.querySelector("#personName"),
  photoCount: document.querySelector("#photoCount"),
  relationship: document.querySelector("#relationship"),
  sceneOutput: document.querySelector("#sceneOutput"),
  serviceTime: document.querySelector("#serviceTime"),
  summaryOutput: document.querySelector("#summaryOutput"),
  tone: document.querySelector("#tone"),
  videoLength: document.querySelector("#videoLength"),
};

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
  starter: "https://www.paypal.com/ncp/payment/4L3HUKYKN6C8S",
  expanded: "https://www.paypal.com/ncp/payment/84K489BK7ZMLL",
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
- $99 expanded: ${paymentLinks.expanded}

Intake summary:
${fields.summaryOutput.textContent}

Scene plan:
${fields.sceneOutput.textContent}

Caption draft:
${fields.captionOutput.textContent}

Editor handoff:
${fields.handoffOutput.textContent}`;
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

generate();
