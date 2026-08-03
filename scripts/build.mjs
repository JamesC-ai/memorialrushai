import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { force: true, recursive: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });

const siteUrl = "https://memorial.pagecheckai.com";
const starterUrl = "https://namebatch.pagecheckai.com/api/checkout?v=memorial-20260731&product=memorialrushai";
const fullReviewUrl = "https://namebatch.pagecheckai.com/api/checkout?v=memorial-20260731&product=memorialrushexpanded";
const starterFallbackUrl = "https://www.paypal.com/ncp/payment/4L3HUKYKN6C8S";
const fullReviewFallbackUrl = "https://www.paypal.com/ncp/payment/84K489BK7ZMLL";
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
  {
    slug: "memorial-photo-organization-checklist",
    title: "Memorial photo organization checklist",
    description:
      "Organize memorial photos into a respectful sequence before sending them to a tribute video editor.",
    headline: "Organize memorial photos before the rush deadline.",
    audience: "families and helpers sorting decades of photos into a clear tribute video order",
    checklist: ["Must-use photos", "Photo chapter groups", "Caption notes", "Do-not-use items"],
    steps: ["Create a minimum photo set.", "Group by life chapter.", "Mark sensitive or duplicate images.", "Send the clean order pack."],
    rushReadiness: [
      "Start with a smaller must-use folder so production can begin even if extra photos arrive later.",
      "Use chapter folders such as childhood, family, work, hobbies, friends, and closing memories.",
      "Keep filename order simple so the editor can follow the family sequence without guessing.",
    ],
    familyReview: [
      "Ask one reviewer to confirm the photo order and relationship labels.",
      "Flag photos that should be cropped, shown briefly, or excluded.",
      "Check whether any person in a photo may not belong in a public service slideshow.",
    ],
    privacyNotes: [
      "Use private folders with limited access for source photos.",
      "Avoid posting source photo folders publicly while collecting contributions.",
      "Ask the editor to delete unused and working files after approval.",
    ],
    faq: [
      ["How many photos should I choose first?", "Choose the smallest set that can tell the story, then add optional photos only if time allows."],
      ["Should captions be written for every photo?", "No. Short chapter notes are often enough unless a specific photo needs context."],
    ],
  },
  {
    slug: "celebration-of-life-slideshow-plan",
    title: "Celebration of life slideshow plan",
    description:
      "Plan a celebration of life slideshow with warm chapter order, caption tone, music notes, and editor handoff details.",
    headline: "Plan a celebration of life slideshow with calm structure.",
    audience: "families preparing a warmer tribute focused on memories, gratitude, and shared stories",
    checklist: ["Opening title", "Memory chapters", "Music preference", "Closing thank-you"],
    steps: ["Choose the tribute tone.", "List the story chapters.", "Add music and runtime notes.", "Review the final dedication."],
    rushReadiness: [
      "Decide whether the slideshow should feel quiet, warm, humorous, faith-centered, or documentary.",
      "Keep the chapter order simple so the video can be assembled quickly.",
      "Confirm playback format, venue screen, and final delivery deadline before payment.",
    ],
    familyReview: [
      "Read all visible text aloud before sending the order pack.",
      "Confirm whether family sayings, cultural traditions, faith language, or military service should be included.",
      "Make sure the closing message feels like the family's voice.",
    ],
    privacyNotes: [
      "Separate public captions from private editor notes.",
      "Avoid private family conflict, health details, and addresses in visible text.",
      "Review the final video privately before sharing with a wider group.",
    ],
    faq: [
      ["Is this different from a funeral slideshow?", "The structure can be similar, but the tone often focuses more on celebration, memories, and gratitude."],
      ["Can it include humor?", "Yes, if the family agrees and the editor understands which moments are appropriate."],
    ],
  },
  {
    slug: "online-memorial-video-planner",
    title: "Online memorial video planner",
    description:
      "Prepare an online memorial video brief for livestreams, private links, remote family review, and secure delivery.",
    headline: "Plan an online memorial video for remote family and friends.",
    audience: "families sharing a tribute through livestreams, private video links, or remote memorial pages",
    checklist: ["Private review link", "Remote attendee needs", "Caption readability", "Download or livestream format"],
    steps: ["Confirm where the video will be shown.", "Plan title cards and captions for online viewing.", "Choose a secure review path.", "Send the final editor brief."],
    rushReadiness: [
      "Confirm whether the final video is for livestream playback, a download link, a private memorial page, or social sharing.",
      "Use larger, shorter captions so remote viewers can read them on phones.",
      "Prepare backup delivery options before the service time.",
    ],
    familyReview: [
      "Send the private review link only to the decision owner and backup contact.",
      "Ask remote family to check names and dates before the final render deadline.",
      "Confirm whether the final link should be downloadable or view-only.",
    ],
    privacyNotes: [
      "Avoid public links until the family approves the video.",
      "Use expiring review links when possible.",
      "Remove editor and reviewer access after delivery.",
    ],
    faq: [
      ["Can this help with livestream playback?", "Yes. Include livestream format, deadline, and backup contact details in the handoff."],
      ["Should the link be public?", "Usually no. Start private, then share more widely only after family approval."],
    ],
  },
  {
    slug: "grandparent-tribute-video-script",
    title: "Grandparent tribute video script",
    description:
      "Draft gentle chapter notes and closing wording for a grandparent tribute video without losing the family's voice.",
    headline: "Prepare a grandparent tribute video script with care.",
    audience: "children and grandchildren writing short tribute text for photos, title cards, and closing slides",
    checklist: ["Family role", "Favorite memories", "Legacy themes", "Closing dedication"],
    steps: ["Add relationship and tone notes.", "Choose life chapters.", "Draft short captions.", "Review with family before production."],
    rushReadiness: [
      "Keep visible text short so photos remain the focus.",
      "Group memories by family, work, traditions, hobbies, and closing gratitude.",
      "Send optional stories as editor notes instead of forcing every memory into captions.",
    ],
    familyReview: [
      "Ask relatives to confirm names, relationships, and phrases the family commonly uses.",
      "Check that wording feels warm but not overly generic.",
      "Confirm whether grandchildren names should be shown individually or as a group.",
    ],
    privacyNotes: [
      "Keep private family details out of visible captions.",
      "Ask before using photos of children or private family gatherings in a public video.",
      "Store drafts in a family-controlled folder.",
    ],
    faq: [
      ["Can it help when I do not know what to write?", "Yes. It creates a structure you can edit into the family's own voice."],
      ["Should every grandchild be named?", "Only if the family wants that and the spelling has been reviewed."],
    ],
  },
  {
    slug: "funeral-photo-scan-order",
    title: "Funeral photo scan order",
    description:
      "Prepare scanned funeral photos for a video editor with file order, caption notes, crop warnings, and privacy instructions.",
    headline: "Turn scanned funeral photos into an editor-ready order.",
    audience: "families scanning albums, printed photos, service programs, and older images for a tribute slideshow",
    checklist: ["Scan quality", "File order", "Crop warnings", "Caption and date notes"],
    steps: ["Scan must-use photos first.", "Number files in the intended order.", "Add crop and repair notes.", "Send the organized handoff pack."],
    rushReadiness: [
      "Scan at a consistent quality and avoid retaking photos from a screen if a better original exists.",
      "Number files before sending so the editor can follow the intended story quickly.",
      "Mark damaged photos that need gentle cropping or restoration expectations.",
    ],
    familyReview: [
      "Check whether older photos have correct names, dates, and locations.",
      "Ask family before excluding meaningful but low-quality photos.",
      "Confirm which scanned documents are for reference only and should not appear in the final video.",
    ],
    privacyNotes: [
      "Avoid scanning private documents unless they are needed for the video.",
      "Use secure transfer for scans, especially if they include children or family records.",
      "Request deletion of unused scans after delivery and approval.",
    ],
    faq: [
      ["What if scans are low quality?", "Mark them clearly. The editor can decide whether to crop, soften, or use them briefly."],
      ["Should I send every album photo?", "No. Send a must-use set first, then optional extras if the deadline allows."],
    ],
  },
  {
    slug: "last-minute-memorial-slideshow",
    title: "Last-minute memorial slideshow checklist",
    description:
      "Organize a last-minute memorial slideshow brief with the minimum details an editor needs before a service deadline.",
    headline: "Prepare a last-minute memorial slideshow without losing the essentials.",
    audience: "families and helpers working under a same-day or next-day tribute video deadline",
    checklist: ["Playback deadline", "Must-use photos", "Name and date spellings", "Backup contact"],
    steps: ["Create a must-use photo set.", "Confirm the service time and playback format.", "Write short caption notes.", "Send one clean editor brief."],
    rushReadiness: [
      "Start with the smallest complete photo set instead of waiting for every possible image.",
      "Confirm venue format, deadline, and backup contact before payment.",
      "Make one person responsible for final approvals so changes do not conflict.",
    ],
    familyReview: [
      "Check names, dates, and relationship labels before the editor begins.",
      "Flag any photo that should be omitted, cropped, or shown only briefly.",
      "Keep extra photos optional if the deadline is tight.",
    ],
    privacyNotes: [
      "Use a private transfer folder with limited access.",
      "Do not post source folders publicly while collecting last-minute photos.",
      "Ask for working-file deletion after delivery and approval.",
    ],
    faq: [
      ["Can this help the same day?", "It can help organize the handoff quickly, but final delivery depends on editor availability and file readiness."],
      ["What should I do first?", "Collect must-use photos, exact names and dates, service deadline, and playback format."],
    ],
  },
  {
    slug: "church-funeral-slideshow-playback",
    title: "Church funeral slideshow playback checklist",
    description:
      "Prepare funeral slideshow details for church, chapel, projector, livestream, or venue playback without missing format notes.",
    headline: "Make church funeral slideshow playback easier to coordinate.",
    audience: "families, church staff, funeral homes, and helpers preparing a tribute video for a service venue",
    checklist: ["Venue contact", "Screen or projector format", "File type request", "Playback deadline"],
    steps: ["Confirm venue playback rules.", "Add screen and audio notes.", "Prepare a backup contact.", "Send the final editor and venue handoff."],
    rushReadiness: [
      "Ask the venue whether they need MP4, USB, download link, or livestream-ready file.",
      "Confirm whether audio will be played through the chapel or livestream system.",
      "Prepare a backup delivery method before the service day.",
    ],
    familyReview: [
      "Check that captions are readable from the venue screen distance.",
      "Confirm whether faith language, prayers, hymns, or scripture should appear.",
      "Review the opening and closing slides before the final export.",
    ],
    privacyNotes: [
      "Send venue files only to the approved service contact.",
      "Do not include private family logistics in visible slides.",
      "Remove venue and editor access after the service if possible.",
    ],
    faq: [
      ["Should I ask the church about file format?", "Yes. File format and playback rules should be confirmed before the editor exports."],
      ["Can the same video work online and in venue?", "Sometimes, but online captions and venue projection may need different readability checks."],
    ],
  },
  {
    slug: "veteran-memorial-video-brief",
    title: "Veteran memorial video brief",
    description:
      "Prepare a respectful veteran memorial video brief with service notes, family memories, photos, captions, and privacy boundaries.",
    headline: "Organize a veteran memorial video brief with respect and accuracy.",
    audience: "families honoring military service alongside family, work, community, and personal memories",
    checklist: ["Service branch and years", "Rank or unit notes to verify", "Family photo order", "Closing dedication"],
    steps: ["Gather verified service details.", "Separate public captions from private notes.", "Add family chapters.", "Review all military wording before production."],
    rushReadiness: [
      "Verify branch, rank, unit, medals, and service years instead of guessing.",
      "Decide how much of the video should focus on service versus family life.",
      "Confirm whether flags, ceremony photos, or military music notes should be included.",
    ],
    familyReview: [
      "Ask a family reviewer to confirm military terms and spelling.",
      "Check whether any service details are private or uncertain.",
      "Review the final dedication for tone and accuracy.",
    ],
    privacyNotes: [
      "Do not include sensitive service records or IDs in the visible video.",
      "Keep private documents out of the editor folder unless needed for reference.",
      "Use secure transfer for military and family photos.",
    ],
    faq: [
      ["Can I include military details?", "Yes, but verify them first and keep uncertain details out of visible captions."],
      ["Should service photos come first?", "Only if that matches the family's preferred story order."],
    ],
  },
  {
    slug: "memorial-video-caption-checklist",
    title: "Memorial video caption checklist",
    description:
      "Review memorial video captions for names, dates, relationships, tone, readability, and do-not-use details before editing.",
    headline: "Check memorial video captions before the final render.",
    audience: "families and editors reviewing title cards, photo captions, and closing dedication text",
    checklist: ["Name spelling", "Dates and relationships", "Caption length", "Sensitive wording"],
    steps: ["Draft short captions.", "Read them aloud.", "Confirm spelling with family.", "Send final text as one reviewed list."],
    rushReadiness: [
      "Use fewer captions when time is short so review stays manageable.",
      "Keep each caption short enough to read while the photo is on screen.",
      "Separate uncertain details into review notes instead of guessing.",
    ],
    familyReview: [
      "Ask one person to check spellings and relationships.",
      "Confirm whether humor, faith language, or family sayings feel appropriate.",
      "Review the final closing slide twice before export.",
    ],
    privacyNotes: [
      "Avoid private addresses, health details, and conflict in visible captions.",
      "Keep private editor notes separate from public text.",
      "Delete draft caption files after approval if they contain sensitive details.",
    ],
    faq: [
      ["Should every photo have a caption?", "No. Chapter cards are often easier to review than captions for every image."],
      ["How long should captions be?", "Short enough to read comfortably before the next photo appears."],
    ],
  },
  {
    slug: "memorial-video-music-notes",
    title: "Memorial video music notes",
    description:
      "Prepare memorial video music notes for tone, timing, lyric sensitivity, quiet sections, and editor handoff.",
    headline: "Organize memorial video music notes before editing starts.",
    audience: "families choosing music tone, song references, instrumental preferences, or quiet sections for a tribute video",
    checklist: ["Preferred tone", "Instrumental or lyrics", "Quiet opening or closing", "Permission or venue notes"],
    steps: ["Describe the mood.", "List song references if any.", "Mark lyric sensitivities.", "Confirm music notes with family."],
    rushReadiness: [
      "Choose a mood direction first: soft piano, instrumental, faith-centered, classic, warm, or silent.",
      "Tell the editor whether music should fade under captions or stay quiet at the closing dedication.",
      "Confirm venue or livestream audio requirements before export.",
    ],
    familyReview: [
      "Ask whether lyrics are appropriate for the service setting.",
      "Confirm whether a specific song has personal meaning or should only be used as style reference.",
      "Review the final audio level if the video will be projected in a venue.",
    ],
    privacyNotes: [
      "Do not paste unrelated private stories into music notes.",
      "Keep licensing or permission decisions separate from the planning brief.",
      "Store private song references and family notes in a secure folder.",
    ],
    faq: [
      ["Can I request no lyrics?", "Yes. Put instrumental, no lyrics, or quiet piano in the music preference field."],
      ["Does this license music?", "No. It only prepares music notes for the editor and family review."],
    ],
  },
  {
    slug: "portrait-memorial-video-layout",
    title: "Portrait memorial video layout",
    description:
      "Plan a portrait memorial video layout for phone screens, social sharing, vertical photos, captions, and private review.",
    headline: "Prepare a portrait memorial video layout for phone viewing.",
    audience: "families sharing tribute videos on phones, private links, social pages, or remote memorial groups",
    checklist: ["Portrait or square format", "Caption size", "Vertical photo handling", "Private sharing link"],
    steps: ["Choose portrait or square format.", "Mark vertical and horizontal photos.", "Keep captions short.", "Review on a phone before sharing."],
    rushReadiness: [
      "Confirm whether the final video is for phone viewing, social sharing, livestream, or venue playback.",
      "Tell the editor how to handle horizontal photos inside a portrait frame.",
      "Check caption size on a phone before approval.",
    ],
    familyReview: [
      "Review the video on the same type of device most family members will use.",
      "Check that faces are not cropped awkwardly in portrait layout.",
      "Confirm whether the family wants a downloadable or view-only link.",
    ],
    privacyNotes: [
      "Keep the review link private until approved.",
      "Avoid posting source photos publicly just to collect them for a portrait video.",
      "Remove access after the final video is delivered.",
    ],
    faq: [
      ["Is portrait format good for a funeral service screen?", "Usually no. Confirm venue playback separately; portrait is mainly for phones or social viewing."],
      ["Can captions be larger?", "Yes. Shorter captions with larger text usually work better on phones."],
    ],
  },
  {
    slug: "family-review-memorial-video",
    title: "Family review for memorial video",
    description:
      "Create a family review checklist for memorial videos so names, dates, photo order, captions, and sensitive details are checked once.",
    headline: "Run one calm family review before the memorial video is finalized.",
    audience: "families coordinating feedback from several relatives without overwhelming the editor",
    checklist: ["Decision owner", "Name and date review", "Do-not-use notes", "Final approval deadline"],
    steps: ["Choose one reviewer.", "Send the generated checklist.", "Collect corrections in one list.", "Approve final changes before rendering."],
    rushReadiness: [
      "Set a clear review deadline before the editor starts final export.",
      "Ask relatives to send corrections to one decision owner instead of separate threads.",
      "Protect must-fix items and move optional ideas to a later version if needed.",
    ],
    familyReview: [
      "Check spellings, dates, relationships, photo order, captions, and tone.",
      "Decide which feedback is required versus optional.",
      "Confirm final approval in writing before delivery.",
    ],
    privacyNotes: [
      "Do not send the review link more widely than necessary.",
      "Avoid collecting private family history in public comment threads.",
      "Remove reviewer access after delivery.",
    ],
    faq: [
      ["Should everyone review the video?", "Usually no. One decision owner plus a backup reviewer is easier under a deadline."],
      ["How do we avoid conflicting edits?", "Collect all edits in one list and mark required versus optional."],
    ],
  },
  {
    slug: "private-memorial-photo-folder",
    title: "Private memorial photo folder handoff",
    description:
      "Prepare a private memorial photo folder handoff with folder structure, access notes, deletion request, and editor instructions.",
    headline: "Organize a private memorial photo folder before sending it to an editor.",
    audience: "families handling sensitive source photos and contributor folders before tribute video production",
    checklist: ["Private folder link", "Access permissions", "Must-use folder", "Optional photos", "Deletion request"],
    steps: ["Create must-use and optional folders.", "Limit access to the editor and reviewer.", "Add caption notes separately.", "Request deletion after approval."],
    rushReadiness: [
      "Put must-use photos in their own folder so work can start quickly.",
      "Keep optional or late-arriving photos separate from the main order.",
      "Name folders clearly: must-use, optional, reference-only, and do-not-use.",
    ],
    familyReview: [
      "Ask the family reviewer to confirm which folder controls final order.",
      "Check whether any contributors added duplicate or sensitive photos.",
      "Confirm when the folder should stop accepting new files.",
    ],
    privacyNotes: [
      "Use private links with limited permissions.",
      "Avoid public upload forms for family photos.",
      "Ask the editor to delete working files after delivery and approval.",
    ],
    faq: [
      ["Should I send one giant folder?", "No. Separate must-use, optional, reference-only, and do-not-use items."],
      ["Can contributors upload photos?", "Yes, but keep access controlled and review new files before sending them to the editor."],
    ],
  },
  {
    slug: "bilingual-memorial-video-brief",
    title: "Bilingual memorial video brief",
    description:
      "Prepare a bilingual memorial video brief with translated captions, name pronunciation, family review, and editor notes.",
    headline: "Prepare a bilingual memorial video brief with reviewed wording.",
    audience: "families creating tribute videos with two languages, translated captions, or pronunciation notes",
    checklist: ["Language order", "Name pronunciation", "Translated captions", "Family reviewer for each language"],
    steps: ["Choose language order.", "Draft short captions.", "Ask fluent family members to review.", "Send final translations to the editor."],
    rushReadiness: [
      "Keep translated captions short so both languages remain readable.",
      "Decide whether each slide needs both languages or only key title cards.",
      "Confirm pronunciation notes before voiceover or spoken introductions.",
    ],
    familyReview: [
      "Ask a fluent reviewer for each language to check tone and meaning.",
      "Avoid machine-translated wording without family review.",
      "Confirm names, honorifics, and family terms before rendering.",
    ],
    privacyNotes: [
      "Keep private family notes separate from public captions.",
      "Do not include private immigration, medical, or family conflict details in visible text.",
      "Use secure transfer for translation drafts if they include sensitive family history.",
    ],
    faq: [
      ["Can every caption be bilingual?", "Yes, but shorter captions usually work better for readability."],
      ["Should translations be reviewed?", "Yes. A family reviewer should check tone, names, and cultural meaning."],
    ],
  },
  {
    slug: "memorial-video-editor-handoff",
    title: "Memorial video editor handoff",
    description:
      "Create a clean memorial video editor handoff with deadline, photo order, captions, music notes, privacy instructions, and support details.",
    headline: "Send a memorial video editor handoff that reduces rework.",
    audience: "families, coordinators, and assistants sending tribute details to a video editor",
    checklist: ["Deadline and timezone", "Photo order", "Captions", "Music notes", "Privacy and deletion request"],
    steps: ["Generate the editor handoff.", "Review details with family.", "Attach secure folder links.", "Include payment and support references."],
    rushReadiness: [
      "Put deadline, timezone, playback format, and backup contact at the top.",
      "Separate must-use photos from optional extras.",
      "Confirm the final contact email and decision owner before checkout.",
    ],
    familyReview: [
      "Check the handoff for spelling, dates, tone, and do-not-use notes.",
      "Make sure editor notes are practical and not conflicting.",
      "Confirm what counts as final approval.",
    ],
    privacyNotes: [
      "Include deletion instructions for source and working files.",
      "Use secure folder links instead of public uploads.",
      "Avoid sending private details that do not affect the video.",
    ],
    faq: [
      ["What should the editor see first?", "Deadline, playback format, decision owner, must-use folder, and any do-not-use instructions."],
      ["Can this prevent every revision?", "No. It reduces confusion, but family review and editor communication still matter."],
    ],
  },
  {
    slug: "funeral-home-memorial-video-intake",
    title: "Funeral home memorial video intake",
    description:
      "Prepare a funeral home memorial video intake with service timing, family contact, photo order, captions, music, playback, and privacy notes.",
    headline: "Create a funeral home memorial video intake that is ready for production.",
    audience: "funeral homes, arrangers, family liaisons, and coordinators collecting tribute details under a short deadline",
    checklist: ["Primary family contact", "Service date and playback deadline", "Photo and caption plan", "Music and delivery format"],
    steps: ["Collect only production details.", "Generate the intake pack.", "Review names and dates with family.", "Send secure links to the approved editor."],
    rushReadiness: [
      "Put the service time, timezone, venue, playback deadline, and backup contact at the top.",
      "Separate must-use photos from optional contributions.",
      "Confirm who can approve the final video and what happens if feedback arrives late.",
    ],
    familyReview: [
      "Ask the family decision owner to confirm spelling, dates, relationships, and closing wording.",
      "Flag faith, military, cultural, or personal details that need careful treatment.",
      "Keep venue logistics and private family notes out of visible captions.",
    ],
    privacyNotes: [
      "Use a private folder with access limited to the funeral home, family reviewer, and editor.",
      "Do not collect unrelated medical, financial, or identification documents.",
      "Set a deletion date for source and working files after approval.",
    ],
    faq: [
      ["Does this replace the funeral home's intake process?", "No. It is a focused video-planning pack that should fit within the funeral home's approved workflow."],
      ["Does MemorialRushAI receive the photos?", "No. The planner does not upload photos; use the approved secure transfer method."],
    ],
  },
  {
    slug: "memorial-slideshow-for-mother",
    title: "Memorial slideshow for mother",
    description:
      "Plan a memorial slideshow for a mother with family chapters, photo notes, short captions, music preferences, and a closing dedication.",
    headline: "Plan a memorial slideshow for a mother in the family's own voice.",
    audience: "children, grandchildren, relatives, and friends organizing a tribute for a mother or maternal figure",
    checklist: ["Preferred name and dates", "Family and life chapters", "Meaningful routines or sayings", "Closing message from the family"],
    steps: ["Choose a simple story order.", "Group must-use photos.", "Draft short family-approved captions.", "Prepare the editor handoff."],
    rushReadiness: [
      "Start with a minimum set covering early life, family, work or service, favorite moments, and the closing tribute.",
      "Use short captions so the photos remain central.",
      "Choose one reviewer who can protect the deadline and family tone.",
    ],
    familyReview: [
      "Confirm how children, grandchildren, relatives, and close friends should be represented.",
      "Check family sayings, names, dates, and relationship labels carefully.",
      "Remove any story or photo the family does not want shown publicly.",
    ],
    privacyNotes: [
      "Keep private family history and contact details out of visible captions.",
      "Share source photos through a restricted folder.",
      "Review the final video privately before service playback or public sharing.",
    ],
    faq: [
      ["Will the wording sound generic?", "The planner provides structure; edit every line so it sounds like the family."],
      ["Does this create the final slideshow?", "No. It prepares the brief and handoff for an editor or family video maker."],
    ],
  },
  {
    slug: "memorial-slideshow-for-father",
    title: "Memorial slideshow for father",
    description:
      "Create a memorial slideshow plan for a father with life chapters, family memories, work or service notes, music, and closing wording.",
    headline: "Organize a memorial slideshow for a father with calm structure.",
    audience: "children, grandchildren, relatives, and friends preparing a tribute for a father or paternal figure",
    checklist: ["Name and dates", "Childhood, family, and work chapters", "Hobbies or service memories", "Closing dedication"],
    steps: ["List the most important life chapters.", "Choose photos for each chapter.", "Add short caption and music notes.", "Review with the family decision owner."],
    rushReadiness: [
      "Protect the deadline by building a complete minimum version before adding extra photos.",
      "Keep work, military, faith, hobby, and family sections balanced according to the family's wishes.",
      "Confirm the final playback format before checkout.",
    ],
    familyReview: [
      "Check names, ranks, titles, dates, and relationships rather than guessing.",
      "Ask whether humor, favorite sayings, or informal photos fit the service tone.",
      "Confirm the closing message with immediate family.",
    ],
    privacyNotes: [
      "Do not include private account, medical, address, or service logistics in the public video.",
      "Use limited-access source folders.",
      "Request deletion of working files after delivery and approval.",
    ],
    faq: [
      ["Can the plan include military or work history?", "Yes. Include only details the family has checked and wants in the tribute."],
      ["Is final delivery guaranteed in 24 hours?", "No. The planner supports urgent organization; delivery depends on file readiness and the editor."],
    ],
  },
  {
    slug: "spouse-tribute-video-script",
    title: "Spouse tribute video script",
    description:
      "Plan a spouse or partner tribute video script with shared-life chapters, family memories, captions, music notes, and a personal closing.",
    headline: "Draft a spouse tribute video structure without flattening a shared life into generic words.",
    audience: "spouses, partners, children, relatives, and close friends preparing a deeply personal memorial tribute",
    checklist: ["How they met", "Shared home and family chapters", "Favorite routines and places", "Personal closing dedication"],
    steps: ["Choose a few shared-life chapters.", "Add the must-use memories.", "Draft short title cards.", "Ask a trusted family reviewer to check the wording."],
    rushReadiness: [
      "Use a clear opening, shared-life middle, and closing dedication.",
      "Keep longer private stories in editor notes rather than crowding the screen.",
      "Confirm which voice the captions should use: spouse, family, or collective remembrance.",
    ],
    familyReview: [
      "Read the wording aloud to check that it feels natural and personal.",
      "Confirm sensitive relationship or family details before including them.",
      "Protect the surviving spouse or partner from repeated broad review requests by naming one support reviewer.",
    ],
    privacyNotes: [
      "Keep private correspondence, addresses, and intimate family details out of the public video unless explicitly approved.",
      "Limit access to source photos and draft scripts.",
      "Delete rejected drafts and unused source copies after approval.",
    ],
    faq: [
      ["Can the script use first-person wording?", "Yes. Choose a consistent voice and have the spouse or approved reviewer confirm it."],
      ["Does the planner write a finished eulogy?", "No. It structures short video wording and editor notes, not a complete eulogy service."],
    ],
  },
  {
    slug: "pet-memorial-video-planner",
    title: "Pet memorial video planner",
    description:
      "Plan a pet memorial video with favorite photos, milestones, routines, family memories, music notes, and a gentle closing message.",
    headline: "Create a pet memorial video brief that honors the bond without rushing the words.",
    audience: "families and individuals preparing a private or shared tribute for a beloved pet",
    checklist: ["Pet name and years", "Arrival and family milestones", "Favorite routines and places", "Closing message"],
    steps: ["Choose the key memory chapters.", "Group favorite photos and clips.", "Add short captions and music notes.", "Review before sharing with an editor."],
    rushReadiness: [
      "Start with a small must-use set of clear photos.",
      "Use simple chapters such as arrival, everyday life, adventures, family, and goodbye.",
      "Decide whether the video is private, shared with friends, or posted publicly.",
    ],
    familyReview: [
      "Confirm names, dates, and the tone that feels right for the household.",
      "Keep wording gentle and specific rather than forcing a formal funeral style.",
      "Check whether photos include private home details or people who should not be posted.",
    ],
    privacyNotes: [
      "Review visible addresses, tags, phone numbers, and household details in pet photos.",
      "Use a private source folder if the tribute is not public.",
      "Ask for working-file deletion after final delivery.",
    ],
    faq: [
      ["Can this be used for a private family keepsake?", "Yes. The brief can be prepared for a private video with no public posting."],
      ["Does MemorialRushAI upload pet photos?", "No. The browser planner creates the brief only."],
    ],
  },
  {
    slug: "obituary-photo-slideshow-plan",
    title: "Obituary photo slideshow plan",
    description:
      "Turn an obituary outline into a photo slideshow plan while separating public facts, family memories, captions, and private editor notes.",
    headline: "Translate an obituary into a respectful photo slideshow structure.",
    audience: "families, obituary writers, funeral coordinators, and editors using approved life details to plan a tribute",
    checklist: ["Approved obituary facts", "Life chapter order", "Matching photo groups", "Closing acknowledgment"],
    steps: ["Mark public obituary facts.", "Map each section to photo groups.", "Draft short title cards.", "Review details before production."],
    rushReadiness: [
      "Use the obituary structure as a guide, not a requirement to place every fact on screen.",
      "Prioritize photos and concise chapter cards over dense paragraphs.",
      "Mark facts or names that still need family confirmation.",
    ],
    familyReview: [
      "Check that the obituary version used is final and family approved.",
      "Confirm names, dates, places, affiliations, and service details.",
      "Decide whether donation, service, or contact information belongs in the video at all.",
    ],
    privacyNotes: [
      "Keep private obituary drafts separate from public captions.",
      "Do not add home addresses or private family contacts to the slideshow.",
      "Review the final video before it is linked from a public obituary page.",
    ],
    faq: [
      ["Should the whole obituary appear in the video?", "Usually no. Use short chapter wording and let the photos carry the story."],
      ["Does this verify obituary facts?", "No. A family reviewer must confirm every fact used in the video."],
    ],
  },
  {
    slug: "memorial-video-voiceover-script",
    title: "Memorial video voiceover script",
    description:
      "Prepare a short memorial video voiceover script with pronunciation notes, pacing, life chapters, family-approved wording, and recording guidance.",
    headline: "Plan a memorial video voiceover that leaves room for photos and silence.",
    audience: "families, celebrants, narrators, and editors adding a short spoken introduction or chapter narration",
    checklist: ["Speaker and point of view", "Name pronunciation", "Short chapter wording", "Pacing and silence notes"],
    steps: ["Choose the narrator voice.", "Draft short sections.", "Read the script aloud.", "Record only after family approval."],
    rushReadiness: [
      "Keep narration concise enough for the photo runtime.",
      "Add pronunciation notes for names, places, titles, and cultural terms.",
      "Leave pauses for music, reflection, and transitions.",
    ],
    familyReview: [
      "Ask the family to approve tone, facts, names, and the narrator's point of view.",
      "Remove any medical, conflict, or relationship detail not intended for the audience.",
      "Confirm whether faith language, humor, or direct quotations are appropriate.",
    ],
    privacyNotes: [
      "Do not include private phone numbers, addresses, or service logistics in the recording.",
      "Store voice recordings and draft scripts in a restricted folder.",
      "Delete unused takes after the family approves the final version.",
    ],
    faq: [
      ["Can AI pronunciation be trusted automatically?", "No. A person who knows the name or language should confirm pronunciation."],
      ["Does the planner record the voiceover?", "No. It prepares the script and production notes."],
    ],
  },
  {
    slug: "memorial-slideshow-photo-count-runtime",
    title: "Memorial slideshow photo count and runtime",
    description:
      "Plan memorial slideshow photo count and runtime with a practical pacing brief for service playback, music, captions, and review time.",
    headline: "Choose a memorial slideshow photo count that fits the available runtime.",
    audience: "families and coordinators deciding how many photos can fit a service slideshow without feeling rushed",
    checklist: ["Target runtime", "Number of music tracks", "Must-use photo count", "Caption and title-card time"],
    steps: ["Confirm venue runtime.", "Choose a must-use photo set.", "Allow time for titles and captions.", "Ask the editor to confirm final pacing."],
    rushReadiness: [
      "Start with the fixed playback window and work backward.",
      "Keep a smaller must-use set plus optional extras.",
      "Allow extra time for opening, closing, long captions, and deliberate pauses.",
    ],
    familyReview: [
      "Watch the draft at normal speed rather than reviewing only still frames.",
      "Check that important people and life chapters are represented fairly.",
      "Remove duplicates before asking the editor to shorten every photo.",
    ],
    privacyNotes: [
      "Do not upload source photos to a public calculator or comment thread.",
      "Keep count and chapter notes separate from private family history.",
      "Review the final video through a private link.",
    ],
    faq: [
      ["Is there one correct seconds-per-photo rule?", "No. Captions, music, photo quality, and family tone affect pacing; ask the editor to confirm."],
      ["Does the planner calculate final timing automatically?", "No. It helps organize a pacing brief for human review."],
    ],
  },
  {
    slug: "funeral-slideshow-tv-projector-format",
    title: "Funeral slideshow format for TV or projector",
    description:
      "Prepare funeral slideshow playback notes for a chapel TV, projector, laptop, livestream, or backup USB.",
    headline: "Confirm funeral slideshow playback format before the service.",
    audience: "families, funeral homes, churches, venues, and editors coordinating reliable service playback",
    checklist: ["Screen aspect ratio", "Accepted video format", "Audio connection", "Primary and backup playback copies"],
    steps: ["Ask the venue for specifications.", "Add format notes to the brief.", "Test the final file on site.", "Keep a backup copy and contact."],
    rushReadiness: [
      "Confirm resolution, aspect ratio, codec, file size, and whether audio is available.",
      "Bring the final file on two approved media options when possible.",
      "Schedule a real playback test before guests arrive.",
    ],
    familyReview: [
      "Check that title cards and captions remain readable from the back of the room.",
      "Confirm the video starts and ends cleanly without desktop notifications or player controls.",
      "Keep one final approved file clearly labeled to avoid playing the wrong draft.",
    ],
    privacyNotes: [
      "Do not leave source photo folders or private drafts on venue equipment.",
      "Use only the approved final playback file on shared devices.",
      "Remove temporary copies from venue or borrowed computers after the service.",
    ],
    faq: [
      ["Does MemorialRushAI convert the video format?", "No. It prepares playback requirements and handoff notes for the editor or venue."],
      ["Is a USB copy enough?", "Bring a backup option and test both with the actual playback setup whenever possible."],
    ],
  },
  {
    slug: "remote-family-memorial-photo-collection",
    title: "Remote family memorial photo collection",
    description:
      "Coordinate remote family memorial photo contributions with a deadline, naming guide, permissions, duplicates process, and private folder.",
    headline: "Collect memorial photos from remote family without losing the deadline or privacy boundary.",
    audience: "families and coordinators gathering photos from relatives in different cities, countries, or time zones",
    checklist: ["Contribution deadline", "Private upload folder", "Simple filename guide", "Permission and do-not-use notes"],
    steps: ["Create one restricted folder.", "Send a short contribution guide.", "Close submissions at the deadline.", "Move approved photos into the editor folder."],
    rushReadiness: [
      "Set an earlier family deadline than the editor deadline.",
      "Ask for a few best photos rather than entire unsorted libraries.",
      "Name one coordinator to remove duplicates and confirm captions.",
    ],
    familyReview: [
      "Confirm contributor names, photo subjects, approximate dates, and permissions.",
      "Mark photos that need cropping, restoration, or exclusion.",
      "Keep late arrivals in a separate optional folder so production can continue.",
    ],
    privacyNotes: [
      "Do not use a public contribution link that anyone can browse.",
      "Limit folder access and remove contributor permissions after collection.",
      "Ask the editor to delete working files after delivery and approval.",
    ],
    faq: [
      ["Can several relatives use the same folder?", "Yes, if access is restricted and one coordinator reviews submissions."],
      ["Does MemorialRushAI host the upload folder?", "No. Use a secure storage service controlled by the family or approved coordinator."],
    ],
  },
  {
    slug: "same-day-funeral-slideshow-checklist",
    title: "Same-day funeral slideshow checklist",
    description:
      "Prepare a same-day funeral slideshow checklist for the minimum viable photo set, deadline, captions, playback format, and backup contact.",
    headline: "Organize a same-day funeral slideshow without losing the essentials.",
    audience: "families, funeral homes, churches, and friends coordinating a tribute slideshow on a same-day deadline",
    checklist: ["Must-use photo set", "Service deadline", "Playback format", "Backup family reviewer"],
    steps: ["List the fixed deadline.", "Choose a small must-use photo set.", "Add short captions only where needed.", "Confirm playback and backup delivery."],
    rushReadiness: [
      "Start with the photos that must appear even if no extras can be added.",
      "Use a shorter runtime so the editor has time for review, export, and playback testing.",
      "Make one person responsible for final approval before the file is rendered.",
    ],
    familyReview: [
      "Check names, dates, relationships, and the opening and closing slides first.",
      "Skip disputed or unclear photos rather than delaying the whole slideshow.",
      "Keep late additions in an optional folder so the editor can continue production.",
    ],
    privacyNotes: [
      "Do not use public upload links for same-day family photos.",
      "Share only the approved source folder with the editor or venue contact.",
      "Ask for working file deletion after the service and final approval.",
    ],
    faq: [
      ["Does this guarantee same-day delivery?", "No. It helps prepare a clear brief; delivery depends on editor availability and file readiness."],
      ["How many photos should I start with?", "Start with the smallest meaningful set, then add optional extras only if time allows."],
    ],
  },
  {
    slug: "memorial-video-photo-sorting-service",
    title: "Memorial video photo sorting service",
    description:
      "Plan a memorial video photo sorting handoff with life chapters, duplicate removal, must-use flags, captions, and privacy notes.",
    headline: "Sort memorial video photos into a clearer editor handoff.",
    audience: "families with large unsorted photo folders who need to help an editor find the right memories quickly",
    checklist: ["Life chapter folders", "Must-use photos", "Duplicate removal", "Do-not-use notes"],
    steps: ["Group photos by life chapter.", "Mark must-use images.", "Remove duplicates and unclear scans.", "Send the sorted folder with captions."],
    rushReadiness: [
      "Create a must-use folder before sorting every image.",
      "Separate optional extras so production can begin while the family reviews late additions.",
      "Use simple folder names like childhood, family, work, friends, hobbies, and closing.",
    ],
    familyReview: [
      "Ask the person who knows the family history best to confirm people, dates, and places.",
      "Mark photos that need cropping, restoration, or careful handling.",
      "Avoid including every similar image from the same moment unless it tells a different part of the story.",
    ],
    privacyNotes: [
      "Do not share the full archive more widely than needed.",
      "Use restricted folders and remove access after delivery.",
      "Keep private family context in notes, not visible captions, unless approved.",
    ],
    faq: [
      ["Does MemorialRushAI sort the photos automatically?", "No. It creates a sorting checklist and editor handoff so a person can review the choices."],
      ["Should I rename every photo?", "Simple chapter folders and must-use flags are often more useful than perfect filenames under a rush deadline."],
    ],
  },
  {
    slug: "memorial-slideshow-usb-backup-checklist",
    title: "Memorial slideshow USB backup checklist",
    description:
      "Prepare a memorial slideshow USB backup checklist with final file naming, second copy, venue test, audio check, and deletion notes.",
    headline: "Prepare a backup USB plan before the memorial slideshow is played.",
    audience: "families, celebrants, funeral homes, and venue contacts who need a reliable backup copy for service playback",
    checklist: ["Final approved filename", "Two backup copies", "Venue playback test", "Audio and screen check"],
    steps: ["Ask the venue which formats work.", "Label the final approved file clearly.", "Prepare two backup copies.", "Test playback before guests arrive."],
    rushReadiness: [
      "Keep one file labeled final so the wrong draft is not played.",
      "Bring a second approved copy on a separate drive or private download link.",
      "Confirm who has the backup and how to reach them during the service.",
    ],
    familyReview: [
      "Watch the file from beginning to end before copying it to USB.",
      "Confirm captions are readable on the actual screen or projector.",
      "Make sure the final file starts cleanly without desktop windows or player controls.",
    ],
    privacyNotes: [
      "Do not leave source photos or private drafts on venue computers.",
      "Use only the final approved video on shared playback devices.",
      "Remove temporary copies after the service when possible.",
    ],
    faq: [
      ["Is one USB enough?", "Use at least one backup option and test it with the actual venue setup whenever possible."],
      ["Does MemorialRushAI create the video file?", "No. It prepares the playback and backup requirements for the editor or venue."],
    ],
  },
  {
    slug: "funeral-livestream-tribute-video-plan",
    title: "Funeral livestream tribute video plan",
    description:
      "Plan a funeral livestream tribute video handoff with timing, caption readability, audio notes, private link review, and backup playback.",
    headline: "Prepare tribute video notes for a funeral livestream.",
    audience: "families, churches, funeral homes, and livestream coordinators adding a tribute video to an online service",
    checklist: ["Livestream run-of-show", "Video start cue", "Caption readability", "Private review link"],
    steps: ["Confirm when the tribute plays.", "Add livestream format notes.", "Review captions on a small screen.", "Prepare a backup playback path."],
    rushReadiness: [
      "Ask whether the video will be embedded in the stream, screen-shared, or played from venue equipment.",
      "Keep captions and title cards large enough for remote viewers.",
      "Share the final file early enough for a real stream test.",
    ],
    familyReview: [
      "Review the tribute through the same private link remote guests may use.",
      "Check that audio levels do not overwhelm spoken parts of the service.",
      "Confirm the start and end cue with the livestream operator.",
    ],
    privacyNotes: [
      "Use private review links before the public or family stream.",
      "Do not include private service logistics in visible captions.",
      "Confirm whether the livestream replay will remain online and who can access it.",
    ],
    faq: [
      ["Does MemorialRushAI run the livestream?", "No. It prepares the tribute video planning notes for the livestream coordinator."],
      ["Should captions be shorter for livestreams?", "Often yes. Remote viewers may watch on small screens, so use fewer words and larger text."],
    ],
  },
  {
    slug: "memorial-video-revision-checklist",
    title: "Memorial video revision checklist",
    description:
      "Use a memorial video revision checklist to collect family feedback, spelling fixes, photo swaps, caption edits, and final approval notes.",
    headline: "Collect memorial video revisions without confusing the final editor.",
    audience: "families and coordinators reviewing a tribute video draft during a sensitive deadline",
    checklist: ["One feedback owner", "Timestamped changes", "Name and date fixes", "Final approval note"],
    steps: ["Watch the full draft once.", "Collect timestamped notes.", "Group changes by urgency.", "Send one final revision list."],
    rushReadiness: [
      "Avoid sending many separate messages from different reviewers.",
      "Separate factual fixes from optional taste changes.",
      "Agree on a revision cutoff time so the final render can be exported.",
    ],
    familyReview: [
      "Check the opening title, life dates, relationship labels, and closing message first.",
      "Use timestamps for photo swaps, caption edits, and pacing notes.",
      "Confirm whether any requested change affects music timing or runtime.",
    ],
    privacyNotes: [
      "Keep draft review links private.",
      "Do not post unfinished tribute drafts to public threads for feedback.",
      "Ask the editor to remove draft links after final approval.",
    ],
    faq: [
      ["Can several relatives review the draft?", "Yes, but combine their notes into one clear revision list before sending it to the editor."],
      ["Does this replace human final approval?", "No. A family reviewer should approve facts, tone, and sensitive photo choices."],
    ],
  },
  {
    slug: "memorial-slideshow-with-captions",
    title: "Memorial slideshow with captions",
    description:
      "Plan a memorial slideshow with captions by organizing names, dates, places, relationship labels, title cards, and readability notes.",
    headline: "Prepare captions for a memorial slideshow with care.",
    audience: "families who want short captions, title cards, and relationship labels without crowding the tribute video",
    checklist: ["Caption style", "Names and dates", "Relationship labels", "Readable title cards"],
    steps: ["Choose short caption rules.", "Confirm spelling and dates.", "Mark photos that need captions.", "Review every visible word before export."],
    rushReadiness: [
      "Caption only the photos that need context under a tight deadline.",
      "Use shorter lines so captions remain readable on TVs, projectors, and phones.",
      "Keep longer stories in private notes instead of placing them on screen.",
    ],
    familyReview: [
      "Ask a family member to verify names, places, and approximate dates.",
      "Confirm whether humor, faith language, or family phrases are appropriate.",
      "Check that captions do not cover important faces or details.",
    ],
    privacyNotes: [
      "Avoid private addresses, medical details, or family conflicts in captions.",
      "Keep sensitive notes separate from visible text.",
      "Review the captioned draft privately before sharing.",
    ],
    faq: [
      ["Should every photo have a caption?", "No. Use captions where they add context without slowing the tribute."],
      ["Does MemorialRushAI write final captions automatically?", "It creates planning notes; family review is still required."],
    ],
  },
  {
    slug: "funeral-video-music-permission-checklist",
    title: "Funeral video music permission checklist",
    description:
      "Prepare funeral video music notes with preferred mood, backup tracks, venue audio requirements, rights review, and no-lyrics alternatives.",
    headline: "Organize funeral video music choices before the editor starts.",
    audience: "families, funeral coordinators, and editors choosing respectful music for a tribute video or memorial slideshow",
    checklist: ["Preferred mood", "Track names", "Rights review", "Backup no-lyrics option"],
    steps: ["List music preferences.", "Confirm venue audio setup.", "Choose backup tracks.", "Review rights and family approval before final use."],
    rushReadiness: [
      "Give the editor mood and backup options instead of relying on one unavailable track.",
      "Confirm whether the service venue can play audio from the final file.",
      "Choose instrumental backup options when lyrics may distract from the tribute.",
    ],
    familyReview: [
      "Ask whether a song has special family meaning or should be avoided.",
      "Confirm the music tone fits the service setting.",
      "Review the final mix on the intended playback speakers when possible.",
    ],
    privacyNotes: [
      "Do not paste private streaming account details into the brief.",
      "Keep rights and permission questions separate from emotional family notes.",
      "Use approved transfer channels for any licensed audio files.",
    ],
    faq: [
      ["Is this legal advice about music rights?", "No. It helps collect music notes; rights and licensing should be checked separately."],
      ["What if the preferred song cannot be used?", "Provide backup mood notes and alternate tracks so the editor can keep moving."],
    ],
  },
  {
    slug: "memorial-video-dropbox-handoff",
    title: "Memorial video Dropbox handoff",
    description:
      "Prepare a memorial video folder handoff for Dropbox, Google Drive, or another private storage service with permissions, naming, and deletion notes.",
    headline: "Prepare a private folder handoff for memorial video files.",
    audience: "families and coordinators using private cloud folders to share photos, captions, music notes, and editor briefs",
    checklist: ["Restricted folder access", "Approved subfolders", "Editor brief file", "Deletion request"],
    steps: ["Create one restricted folder.", "Add sorted subfolders and the brief.", "Share access only with approved people.", "Remove access after delivery."],
    rushReadiness: [
      "Place must-use photos and the editor brief at the top level or in clearly named folders.",
      "Avoid changing folder structure after the editor starts unless you send a change note.",
      "Keep an optional-late folder for additions that may not make the first render.",
    ],
    familyReview: [
      "Check that the final brief and folder names match the honored person's preferred name.",
      "Confirm contributors did not upload duplicate, private, or do-not-use images.",
      "Keep one coordinator responsible for permissions and final access removal.",
    ],
    privacyNotes: [
      "Use expiring or restricted links when the storage service supports them.",
      "Do not make the folder public or searchable.",
      "Ask the editor to confirm deletion of working copies after approval.",
    ],
    faq: [
      ["Does MemorialRushAI provide the Dropbox folder?", "No. Use a storage account controlled by the family or approved coordinator."],
      ["Can I use Google Drive instead?", "Yes. The handoff checklist works for any private folder with controlled access."],
    ],
  },
  {
    slug: "memorial-slideshow-for-brother",
    title: "Memorial slideshow for brother",
    description:
      "Plan a memorial slideshow for a brother with sibling stories, family photos, friendships, hobbies, captions, and closing tribute notes.",
    headline: "Plan a brother's memorial slideshow with warmth and structure.",
    audience: "siblings, parents, spouses, and friends preparing a tribute slideshow for a brother",
    checklist: ["Sibling memories", "Family and friend chapters", "Hobbies and work", "Closing message"],
    steps: ["Choose the tone.", "Group photos by life chapter.", "Write short sibling captions.", "Review sensitive details with family."],
    rushReadiness: [
      "Start with a balanced set of childhood, family, friends, work, and favorite-place photos.",
      "Ask one sibling or close family member to approve the emotional tone.",
      "Keep optional stories in notes if the runtime is short.",
    ],
    familyReview: [
      "Confirm which relationships and nicknames should appear on screen.",
      "Review photos involving friends or private moments before inclusion.",
      "Make sure the closing message represents the family voice accurately.",
    ],
    privacyNotes: [
      "Avoid private conflicts, medical details, and addresses in captions.",
      "Share drafts only through private review links.",
      "Delete working folders after the family approves delivery.",
    ],
    faq: [
      ["Can the tone be informal?", "Yes, if the family approves. Add tone notes so the editor understands what feels authentic."],
      ["Does the planner choose the photos?", "No. It helps organize the family's choices and editor instructions."],
    ],
  },
  {
    slug: "memorial-slideshow-for-sister",
    title: "Memorial slideshow for sister",
    description:
      "Plan a memorial slideshow for a sister with family chapters, friendship memories, captions, music notes, and a gentle review workflow.",
    headline: "Prepare a sister's memorial slideshow with clear family notes.",
    audience: "siblings, parents, spouses, children, and friends preparing a tribute slideshow for a sister",
    checklist: ["Family chapters", "Friendship memories", "Caption wording", "Music and closing tribute"],
    steps: ["Collect core photos.", "Group memories by chapter.", "Draft short captions.", "Ask a family reviewer to approve tone and wording."],
    rushReadiness: [
      "Select must-use photos first, then add optional friend and activity photos if time allows.",
      "Keep captions short and personal rather than trying to explain every memory.",
      "Confirm the deadline, runtime, and playback format before editing starts.",
    ],
    familyReview: [
      "Ask whether family phrases, faith language, or favorite sayings should be included.",
      "Confirm photo permissions and relationship labels before final rendering.",
      "Review the closing card carefully because it often carries the emotional weight.",
    ],
    privacyNotes: [
      "Do not include private health, family conflict, or contact details in visible text.",
      "Use private folders and review links only.",
      "Remove contributor and editor access after delivery and approval.",
    ],
    faq: [
      ["Can friends contribute photos?", "Yes. Use a restricted folder and one coordinator to review submissions."],
      ["Does MemorialRushAI upload the source files?", "No. The planner creates a brief; families use their own secure transfer method."],
    ],
  },
  {
    slug: "memorial-video-for-husband",
    title: "Memorial video for husband",
    description:
      "Plan a memorial video for a husband with family chapters, partnership memories, children or grandchildren notes, music preferences, and review guidance.",
    headline: "Prepare a husband's memorial video with care and structure.",
    audience: "spouses, children, siblings, and close friends preparing a tribute video for a husband",
    checklist: ["Marriage and family chapters", "Work and friendship memories", "Favorite places", "Closing family message"],
    steps: ["Choose the tone.", "Collect must-use family photos.", "Draft short captions.", "Ask one family reviewer to approve wording and photo order."],
    rushReadiness: [
      "Start with a few essential family photos before adding optional chapters.",
      "Keep the story focused if the runtime is short.",
      "Confirm service deadline, playback format, and final contact before checkout.",
    ],
    familyReview: [
      "Review relationship labels and family names carefully.",
      "Confirm whether faith language, humor, or personal sayings should appear.",
      "Avoid asking too many reviewers to make last-minute changes.",
    ],
    privacyNotes: [
      "Do not include private medical, financial, or family-conflict details in captions.",
      "Use private folders and review links only.",
      "Ask the editor to delete working copies after approval.",
    ],
    faq: [
      ["Can the tone be personal?", "Yes. Add short tone notes so the editor understands what feels respectful and authentic."],
      ["Does MemorialRushAI choose the photos?", "No. The planner organizes the family's chosen photos and instructions."],
    ],
  },
  {
    slug: "memorial-video-for-wife",
    title: "Memorial video for wife",
    description:
      "Create a memorial video brief for a wife with family memories, friendship chapters, captions, music notes, and a gentle approval workflow.",
    headline: "Plan a wife's memorial video with clear family notes.",
    audience: "spouses, children, siblings, and friends preparing a tribute video for a wife",
    checklist: ["Family chapters", "Friendship memories", "Favorite sayings", "Music and closing card"],
    steps: ["Collect core photos.", "Group memories by chapter.", "Write short captions.", "Confirm the final family reviewer."],
    rushReadiness: [
      "Select must-use photos first and place optional additions in a separate note.",
      "Keep captions short enough for a calm viewing pace.",
      "Confirm final runtime and service playback requirements before editing starts.",
    ],
    familyReview: [
      "Check names, dates, relationship labels, and preferred wording.",
      "Ask whether certain photos or stories should remain private.",
      "Review the closing card carefully before final render.",
    ],
    privacyNotes: [
      "Avoid visible addresses, medical details, and private family context.",
      "Use restricted folders for source photos and drafts.",
      "Remove editor access after delivery and approval.",
    ],
    faq: [
      ["Can friends contribute memories?", "Yes. Use one coordinator to review submissions and decide what enters the brief."],
      ["Does the planner upload photos?", "No. It creates the brief only; use a secure family-controlled transfer method."],
    ],
  },
  {
    slug: "memorial-slideshow-for-son",
    title: "Memorial slideshow for son",
    description:
      "Prepare a memorial slideshow for a son with childhood photos, family chapters, friendships, captions, and a careful review process.",
    headline: "Organize a son's memorial slideshow with sensitivity.",
    audience: "parents, siblings, partners, and close friends preparing a tribute slideshow for a son",
    checklist: ["Childhood and family photos", "Friendship memories", "Hobbies or school/work chapters", "Short closing message"],
    steps: ["Choose a small set of essential photos.", "Group memories by life chapter.", "Draft minimal captions.", "Ask a trusted reviewer to check tone."],
    rushReadiness: [
      "Use a smaller, approved photo set if the deadline is close.",
      "Keep optional stories in notes when runtime is limited.",
      "Confirm whether the family wants a quiet or celebration-of-life tone.",
    ],
    familyReview: [
      "Review every caption for emotional fit.",
      "Confirm which relationships, friends, or private moments should appear.",
      "Avoid broad review loops during a sensitive deadline.",
    ],
    privacyNotes: [
      "Avoid private health, crisis, conflict, or address details.",
      "Share drafts only through private links.",
      "Delete working folders after approval.",
    ],
    faq: [
      ["Can the slideshow be very simple?", "Yes. A simple photo order with a short closing card can be more respectful than a crowded edit."],
      ["Does MemorialRushAI provide grief counseling?", "No. It helps organize a tribute video brief and does not replace personal or professional support."],
    ],
  },
  {
    slug: "memorial-slideshow-for-daughter",
    title: "Memorial slideshow for daughter",
    description:
      "Plan a memorial slideshow for a daughter with family memories, favorite photos, captions, music notes, and private review instructions.",
    headline: "Prepare a daughter's memorial slideshow with gentle structure.",
    audience: "parents, siblings, partners, and close friends preparing a tribute slideshow for a daughter",
    checklist: ["Family and childhood chapters", "Friends and favorite places", "Caption wording", "Music and closing message"],
    steps: ["Collect must-use photos.", "Sort by life chapter.", "Draft very short captions.", "Confirm tone with one family reviewer."],
    rushReadiness: [
      "Prioritize photos the family already agrees on.",
      "Use short captions to avoid overexplaining emotional moments.",
      "Confirm service format, deadline, and delivery contact early.",
    ],
    familyReview: [
      "Check relationship labels, names, and sensitive stories.",
      "Ask whether any photos should be reserved for private family viewing.",
      "Limit changes after the family approves the draft.",
    ],
    privacyNotes: [
      "Avoid private medical, location, conflict, or contact details.",
      "Use restricted source folders and review links.",
      "Ask for deletion of working files after approval.",
    ],
    faq: [
      ["Should we include every favorite photo?", "No. Choose the strongest set for the runtime and keep extras in a private family folder."],
      ["Does the planner store source photos?", "No. The browser planner creates text instructions only."],
    ],
  },
  {
    slug: "memorial-video-for-friend",
    title: "Memorial video for friend",
    description:
      "Plan a memorial video for a friend with shared memories, chosen-family chapters, photos, captions, and approval notes.",
    headline: "Organize a friend's memorial video without losing family consent.",
    audience: "friends, chosen family, coworkers, classmates, and coordinators preparing a tribute with family awareness",
    checklist: ["Friendship chapters", "Family consent notes", "Shared activities", "Closing tribute"],
    steps: ["Collect approved photos.", "Group by friendship chapter.", "Write short captions.", "Confirm family or coordinator approval."],
    rushReadiness: [
      "Ask the family or coordinator what tone and photos are appropriate.",
      "Keep optional friend stories separate if runtime is short.",
      "Confirm whether the final video is for service, private sharing, or online memorial use.",
    ],
    familyReview: [
      "Respect do-not-use notes from family members.",
      "Review captions for names, relationships, and context.",
      "Use one coordinator to approve the final brief.",
    ],
    privacyNotes: [
      "Do not publish or share photos beyond the approved audience.",
      "Avoid private stories, locations, and contact information.",
      "Use private review links and remove access after delivery.",
    ],
    faq: [
      ["Can friends lead the video?", "Yes, but it is best to confirm with the family or service coordinator first."],
      ["Does this publish the memorial video?", "No. It prepares planning notes and an editor brief only."],
    ],
  },
  {
    slug: "memorial-slideshow-opening-closing-cards",
    title: "Memorial slideshow opening and closing cards",
    description:
      "Prepare opening and closing card wording for a memorial slideshow with names, dates, family thanks, service notes, and privacy reminders.",
    headline: "Write memorial slideshow opening and closing cards clearly.",
    audience: "families, funeral coordinators, editors, and volunteers preparing title cards and final thank-you slides",
    checklist: ["Preferred name", "Dates or years", "Opening title", "Closing thank-you"],
    steps: ["Confirm spelling and dates.", "Choose a short opening card.", "Draft a closing message.", "Review wording with the family before rendering."],
    rushReadiness: [
      "Lock the opening card early because it affects the whole video.",
      "Keep final thanks short for readability.",
      "Confirm whether service location or livestream details should appear.",
    ],
    familyReview: [
      "Check every name, date, and relationship label.",
      "Ask whether faith language, poems, or quotes are approved.",
      "Avoid last-minute typography changes unless they fix accuracy.",
    ],
    privacyNotes: [
      "Do not include private addresses, phone numbers, or family contact details.",
      "Use private drafts for review.",
      "Keep approved text in the editor handoff.",
    ],
    faq: [
      ["Can the closing card thank everyone?", "Yes. Keep it concise and readable on the playback screen."],
      ["Does MemorialRushAI design the card?", "No. It helps draft and organize the wording for the editor."],
    ],
  },
  {
    slug: "memorial-video-photo-permission-checklist",
    title: "Memorial video photo permission checklist",
    description:
      "Create a practical checklist for family photo permissions, do-not-use notes, private images, minors, and final approval before a memorial video is shared.",
    headline: "Review memorial photo permissions before sharing the video.",
    audience: "families, coordinators, editors, and volunteers collecting photos from multiple contributors",
    checklist: ["Contributor source", "Do-not-use notes", "Private image flags", "Final approval owner"],
    steps: ["Collect photo source notes.", "Mark private or do-not-use images.", "Confirm who approves the final selection.", "Share the draft only with approved reviewers."],
    rushReadiness: [
      "Use must-use and do-not-use folders when time is short.",
      "Ask contributors to label private photos clearly.",
      "Avoid waiting for broad consent on optional images if the deadline is close.",
    ],
    familyReview: [
      "Confirm images involving children, former partners, coworkers, or private settings.",
      "Remove any photo the family is unsure about.",
      "Keep a written approval note with the final brief.",
    ],
    privacyNotes: [
      "Use restricted folders and private review links.",
      "Avoid public upload forms.",
      "Ask the editor to delete source and working files after approval.",
    ],
    faq: [
      ["Is this legal consent advice?", "No. It is an organization checklist; legal or formal consent questions should be handled separately."],
      ["Can we skip uncertain photos?", "Yes. During a rush deadline, omitting uncertain photos is often safer than including them."],
    ],
  },
  {
    slug: "funeral-program-video-link-checklist",
    title: "Funeral program video link checklist",
    description:
      "Prepare notes for including a memorial video link or QR reference in a funeral program while keeping privacy, permissions, and access limits clear.",
    headline: "Plan a funeral program video link without making files public by accident.",
    audience: "families, funeral homes, church coordinators, and volunteers preparing printed or digital service programs",
    checklist: ["Private video link", "Access setting", "QR code owner", "Expiration or removal note"],
    steps: ["Confirm where the video will be hosted.", "Check access settings.", "Add link or QR notes to the program draft.", "Test the link before printing or sharing."],
    rushReadiness: [
      "Use a stable link only after final approval.",
      "Test the link on a phone before the program is printed.",
      "Have a backup playback file for the service itself.",
    ],
    familyReview: [
      "Confirm whether the video should be public, unlisted, or private.",
      "Review the printed wording with the family.",
      "Decide when the link should be removed or access should be limited.",
    ],
    privacyNotes: [
      "Do not publish source photo folders through the program link.",
      "Avoid public links if the family wants private access.",
      "Use a family-controlled hosting or sharing account when possible.",
    ],
    faq: [
      ["Does MemorialRushAI host the video link?", "No. It helps organize the checklist for a family-controlled or approved video link."],
      ["Should the QR code be public?", "Only if the family approves public access."],
    ],
  },
  {
    slug: "memorial-video-social-sharing-checklist",
    title: "Memorial video social sharing checklist",
    description:
      "Prepare a memorial video sharing checklist for Facebook, YouTube, private groups, or family messages with caption, access, and consent notes.",
    headline: "Share a memorial video online with privacy and family review in mind.",
    audience: "families and coordinators deciding whether to share a memorial video online after a service",
    checklist: ["Approved platform", "Caption text", "Audience setting", "Family consent notes"],
    steps: ["Choose the sharing audience.", "Draft a short caption.", "Confirm privacy settings.", "Review with the family before posting."],
    rushReadiness: [
      "Do not rush a public post before the family approves.",
      "Use private groups or direct sharing when the audience should be limited.",
      "Keep a separate service playback copy from any social version.",
    ],
    familyReview: [
      "Ask whether comments, tagging, or resharing should be limited.",
      "Confirm visible names, dates, and relationship labels.",
      "Choose one person to handle posting and updates.",
    ],
    privacyNotes: [
      "Avoid posting source photo folders.",
      "Review platform privacy settings before sharing.",
      "Remove drafts or links that should not remain online.",
    ],
    faq: [
      ["Does MemorialRushAI post to social media?", "No. It prepares sharing notes only; posting requires family approval."],
      ["Can we make the video private?", "Yes. Use the platform's private or unlisted settings if that matches the family's wishes."],
    ],
  },
  {
    slug: "memorial-video-family-copy-after-service",
    title: "Memorial video family copy after service",
    description:
      "Plan the after-service handoff for family copies of a memorial video, including download links, USB copies, captions, deletion notes, and support details.",
    headline: "Prepare family copies after the memorial service.",
    audience: "families, coordinators, and editors handling final memorial video delivery after the service",
    checklist: ["Final approved file", "Family download link", "USB or backup copy", "Deletion and support note"],
    steps: ["Confirm the final approved version.", "Create the family handoff note.", "Share through approved private channels.", "Remove working access after delivery."],
    rushReadiness: [
      "Keep one final file name and version.",
      "Separate service playback copies from family archive copies.",
      "Record who received the final link or USB copy.",
    ],
    familyReview: [
      "Confirm names, dates, captions, and music before archiving.",
      "Ask whether a shorter social version is needed later.",
      "Keep support contact and receipt details with the handoff note.",
    ],
    privacyNotes: [
      "Use private links or physical copies according to family preference.",
      "Avoid leaving editor access open longer than needed.",
      "Ask for deletion of working files after final approval.",
    ],
    faq: [
      ["Does this create USB copies?", "No. It creates the handoff checklist; production and copying are handled by the family or editor."],
      ["Should we keep source photos online?", "Only as long as needed and only in a restricted folder controlled by the family."],
    ],
  },
  {
    slug: "memorial-video-photo-scanning-tips",
    title: "Memorial video photo scanning tips",
    description:
      "Prepare a photo scanning checklist for memorial videos, including file order, crop notes, duplicates, privacy, and editor handoff details.",
    headline: "Scan memorial photos with a cleaner editor handoff in mind.",
    audience: "families, volunteers, and coordinators digitizing printed photos before a tribute video deadline",
    checklist: ["Scan order", "Duplicate photos", "Crop and rotation notes", "Private-photo flags"],
    steps: ["Create a must-use scan folder.", "Name files in rough story order.", "Mark duplicates and sensitive photos.", "Send scan notes with the editor brief."],
    rushReadiness: [
      "Scan the must-use photos first before adding optional albums.",
      "Keep a simple sequence number so the editor can follow the family's story.",
      "Use phone scans only as a backup when flatbed scans are not available in time.",
    ],
    familyReview: [
      "Ask one reviewer to confirm names, dates, and photo order.",
      "Flag photos that should be cropped, repaired, softened, or omitted.",
      "Avoid arguing over optional duplicates when the deadline is close.",
    ],
    privacyNotes: [
      "Do not post scan folders publicly while collecting photos.",
      "Avoid scanning private documents that do not belong in the tribute.",
      "Ask the editor to delete working scans after delivery and approval.",
    ],
    faq: [
      ["Does MemorialRushAI scan or restore photos?", "No. It prepares scanning and handoff notes; scanning and restoration are separate work."],
      ["What if a photo is blurry?", "Mark it for review and include a backup option if possible."],
    ],
  },
  {
    slug: "memorial-slideshow-for-aunt",
    title: "Memorial slideshow for aunt",
    description:
      "Plan a memorial slideshow for an aunt with family-role notes, favorite memories, photo chapters, captions, and closing wording.",
    headline: "Prepare an aunt memorial slideshow with warm family context.",
    audience: "nieces, nephews, siblings, and relatives preparing photos and wording for a family tribute",
    checklist: ["Family role", "Favorite memories", "Photo chapters", "Closing dedication"],
    steps: ["Gather family photos.", "Choose the tone and chapter order.", "Draft short captions.", "Review wording with close relatives."],
    rushReadiness: [
      "Start with a small must-use set of photos from different life chapters.",
      "Keep captions short and relationship-focused.",
      "Ask one person to collect final family wording before sending the brief.",
    ],
    familyReview: [
      "Confirm whether nieces, nephews, siblings, or extended family should be named individually.",
      "Check that the wording feels like the family's voice.",
      "Review sensitive family photos before including them.",
    ],
    privacyNotes: [
      "Use private folders for family photos.",
      "Avoid public sharing before family approval.",
      "Delete draft scripts and working files after approval if the family prefers.",
    ],
    faq: [
      ["Does this replace writing a personal tribute?", "No. It gives structure; the family should edit wording until it feels personal."],
      ["Can it include humor?", "Yes, if close relatives agree the tone is appropriate."],
    ],
  },
  {
    slug: "memorial-slideshow-for-uncle",
    title: "Memorial slideshow for uncle",
    description:
      "Plan a memorial slideshow for an uncle with photo order, story notes, captions, tone guidance, and editor-ready handoff details.",
    headline: "Prepare an uncle memorial slideshow without losing the family's voice.",
    audience: "nieces, nephews, siblings, cousins, and friends preparing a respectful family tribute",
    checklist: ["Relationship notes", "Life chapters", "Hobby or service memories", "Final thank-you"],
    steps: ["Collect the first photo set.", "Group by family, work, hobbies, and friends.", "Draft chapter notes.", "Confirm the final dedication."],
    rushReadiness: [
      "Use broad chapter notes instead of long narration when the deadline is tight.",
      "Separate must-use photos from optional additions.",
      "Confirm service playback format before sending the brief.",
    ],
    familyReview: [
      "Check names, relationships, and any military, faith, or cultural references.",
      "Ask whether certain stories should remain private.",
      "Review the closing line with immediate family.",
    ],
    privacyNotes: [
      "Keep source photos in a restricted family folder.",
      "Avoid including addresses, private conflicts, or health details in visible captions.",
      "Ask for working file deletion after delivery and approval.",
    ],
    faq: [
      ["Can friends contribute photos?", "Yes. Ask them to send photos through an approved private folder with short context notes."],
      ["Does MemorialRushAI create the final slideshow?", "No. It prepares the brief and handoff checklist."],
    ],
  },
  {
    slug: "memorial-video-thank-you-message",
    title: "Memorial video thank you message",
    description:
      "Draft a short thank-you message for the closing card of a memorial video while keeping tone, names, and family approval clear.",
    headline: "Prepare a closing thank-you message for a memorial video.",
    audience: "families and service coordinators writing final slide wording under time pressure",
    checklist: ["Closing wording", "Family signature", "Faith or gratitude notes", "Names to include or omit"],
    steps: ["Choose a simple tone.", "Draft one or two closing lines.", "Confirm the family signature.", "Review the final card before rendering."],
    rushReadiness: [
      "Keep the thank-you message short enough to read before the video ends.",
      "Avoid trying to name every contributor unless the family has approved the list.",
      "Use one final version so the editor does not receive conflicting wording.",
    ],
    familyReview: [
      "Read the final line aloud.",
      "Confirm spelling for family names and group signatures.",
      "Ask whether faith language, service language, or simple gratitude is preferred.",
    ],
    privacyNotes: [
      "Do not include private contact details on the closing card.",
      "Keep contributor notes separate from visible video text.",
      "Delete unused draft wording if the family requests it.",
    ],
    faq: [
      ["Can MemorialRushAI write the exact final line?", "It can help structure options, but the family should approve every visible word."],
      ["Should we include a donation link?", "Only if the family approves and the service coordinator confirms the right placement."],
    ],
  },
  {
    slug: "funeral-slideshow-rehearsal-checklist",
    title: "Funeral slideshow rehearsal checklist",
    description:
      "Prepare a funeral slideshow rehearsal checklist for playback file, venue screen, audio, captions, backup copy, and final approval.",
    headline: "Rehearse a funeral slideshow before the service starts.",
    audience: "families, funeral homes, church media teams, celebrants, and volunteers handling playback",
    checklist: ["Playback file", "Audio test", "Screen format", "Backup copy"],
    steps: ["Confirm the final approved video.", "Test playback on venue equipment.", "Check audio and captions.", "Keep a backup file ready."],
    rushReadiness: [
      "Test the exact file on the exact playback device if possible.",
      "Bring a backup copy on a second device or USB drive.",
      "Confirm who will start, pause, or replay the slideshow during the service.",
    ],
    familyReview: [
      "Let the family approve the final file before rehearsal.",
      "Check names, dates, captions, and photo order one last time.",
      "Decide whether the video should loop before or after the service.",
    ],
    privacyNotes: [
      "Do not leave source photo folders on venue devices.",
      "Remove temporary files after the service.",
      "Keep public playback copies separate from family archive copies.",
    ],
    faq: [
      ["Does MemorialRushAI test the venue equipment?", "No. It prepares the rehearsal checklist for the family, venue, or media volunteer."],
      ["Should we bring a backup?", "Yes. Bring at least one backup copy and know who has it."],
    ],
  },
  {
    slug: "memorial-video-late-photo-additions",
    title: "Memorial video late photo additions",
    description:
      "Plan how to handle late memorial photo additions without derailing the edit, including cutoff time, must-use flags, duplicates, and family approval.",
    headline: "Handle late memorial photo additions calmly.",
    audience: "families and coordinators receiving extra photos after the tribute edit has already started",
    checklist: ["Cutoff time", "Must-use flag", "Duplicate check", "Approval owner"],
    steps: ["Set a late-photo cutoff.", "Mark must-use additions only.", "Check for duplicates.", "Send one clear update to the editor."],
    rushReadiness: [
      "Protect the edit by limiting late additions to truly important photos.",
      "Send one consolidated update instead of many small messages.",
      "Avoid changing chapter structure unless the family approves the extra time.",
    ],
    familyReview: [
      "Ask the decision owner to approve every late photo.",
      "Confirm whether the late photo replaces another image or extends the runtime.",
      "Check captions and relationship labels before sending.",
    ],
    privacyNotes: [
      "Use the same secure folder as the original handoff.",
      "Do not add photos from public comments without family approval.",
      "Request deletion of unused late photos after the edit is complete.",
    ],
    faq: [
      ["Can late photos always be added?", "No. It depends on timing, editor availability, and whether the final render has started."],
      ["Should every late photo be included?", "No. During a rush edit, mark only true must-use additions."],
    ],
  },
  {
    slug: "memorial-video-portrait-landscape-mix",
    title: "Memorial video portrait and landscape photo mix",
    description:
      "Prepare editor notes for a memorial video that mixes portrait and landscape photos, including crop preference, background style, and do-not-crop flags.",
    headline: "Plan a memorial video with portrait and landscape photos.",
    audience: "families and editors working with photos from phones, scans, albums, and social messages",
    checklist: ["Crop preference", "Do-not-crop photos", "Background style", "Important faces"],
    steps: ["Group portrait and landscape photos.", "Mark photos that must not be cropped.", "Add background and framing notes.", "Review a sample frame if available."],
    rushReadiness: [
      "Do not spend too long forcing every image into the same shape.",
      "Flag only the photos where cropping would remove someone important.",
      "Choose a simple background style before editing starts.",
    ],
    familyReview: [
      "Check whether faces, hands, pets, or meaningful objects are cut off.",
      "Approve the framing style before the final render.",
      "Review phone screenshots or social photos carefully because they may be low resolution.",
    ],
    privacyNotes: [
      "Avoid using social screenshots that include comments or private profile details.",
      "Keep original and cropped versions in restricted folders.",
      "Ask the editor to delete working files after approval.",
    ],
    faq: [
      ["Does MemorialRushAI crop the photos?", "No. It prepares crop and framing notes for the editor."],
      ["Should portrait photos be avoided?", "No. They can work well if the editor has clear framing notes."],
    ],
  },
  {
    slug: "memorial-video-title-card-wording",
    title: "Memorial video title card wording",
    description:
      "Draft title card wording for a memorial video with name, dates, relationship labels, faith notes, and family approval steps.",
    headline: "Prepare memorial video title card wording with care.",
    audience: "families, celebrants, editors, and volunteers preparing visible opening and chapter text",
    checklist: ["Preferred name", "Dates or years", "Relationship label", "Opening phrase"],
    steps: ["Choose the preferred name.", "Confirm dates or years.", "Draft the opening card.", "Review every visible word with family."],
    rushReadiness: [
      "Keep the opening card short and readable.",
      "Use years only if exact dates are uncertain.",
      "Send one approved wording version to the editor.",
    ],
    familyReview: [
      "Confirm spelling, honorifics, nicknames, and dates.",
      "Ask whether faith language or a simple remembrance phrase fits best.",
      "Check whether relationships should be listed or kept broad.",
    ],
    privacyNotes: [
      "Avoid addresses, service logistics, or private details in the title card.",
      "Keep alternate wording drafts private.",
      "Delete draft wording after approval if the family wants a minimal record.",
    ],
    faq: [
      ["Should the title card include exact dates?", "Only if the family has confirmed them. Years can be safer when exact dates are uncertain."],
      ["Can the title card include a quote?", "Yes, if the family approves the source and wording."],
    ],
  },
  {
    slug: "funeral-service-projector-test-checklist",
    title: "Funeral service projector test checklist",
    description:
      "Prepare a funeral service projector test checklist for aspect ratio, brightness, audio, captions, file format, backup device, and operator notes.",
    headline: "Test the projector setup before the memorial slideshow plays.",
    audience: "church media teams, funeral homes, family volunteers, and service coordinators handling venue playback",
    checklist: ["Aspect ratio", "Audio level", "Caption readability", "Backup device"],
    steps: ["Bring the final video file.", "Test it on the projector.", "Check sound and readability.", "Confirm backup playback steps."],
    rushReadiness: [
      "Test the actual projector or TV instead of only checking on a laptop.",
      "Confirm whether the venue needs MP4, USB, HDMI, AirPlay, or another path.",
      "Keep a second copy with someone who will be present at the service.",
    ],
    familyReview: [
      "Ask the family to approve the visible framing on the venue screen if time allows.",
      "Check that captions are readable from the back of the room.",
      "Confirm whether the slideshow starts before, during, or after a spoken segment.",
    ],
    privacyNotes: [
      "Remove temporary files from venue computers after playback.",
      "Do not leave source photos on shared equipment.",
      "Keep the family archive copy separate from the venue playback copy.",
    ],
    faq: [
      ["Does MemorialRushAI convert video files?", "No. It prepares the test checklist; format conversion should be handled separately."],
      ["What if the projector crops the video?", "Flag the issue before the service and use a backup format or different playback setting if available."],
    ],
  },
  {
    slug: "memorial-video-file-deletion-checklist",
    title: "Memorial video file deletion checklist",
    description:
      "Prepare after-delivery deletion notes for memorial video source photos, drafts, editor files, review links, and family archive copies.",
    headline: "Close a memorial video project with clearer file deletion notes.",
    audience: "families, editors, coordinators, and volunteers handling sensitive photos after final delivery",
    checklist: ["Source photo folder", "Draft files", "Review links", "Final archive copy"],
    steps: ["Confirm final delivery.", "Save the approved family copy.", "Ask for working-file deletion.", "Remove temporary access links."],
    rushReadiness: [
      "Do not delete source files before the family has the final approved copy.",
      "Write down which folders and links should be removed after approval.",
      "Keep the deletion request simple so the editor can confirm completion.",
    ],
    familyReview: [
      "Confirm who keeps the family archive copy.",
      "Ask whether a shorter social version is still needed before deletion.",
      "Record the support contact in case the family needs another copy later.",
    ],
    privacyNotes: [
      "Remove reviewer and editor access after final approval.",
      "Avoid leaving private source photos in public or shared folders.",
      "Keep only the copies the family intentionally wants to preserve.",
    ],
    faq: [
      ["Does MemorialRushAI delete files for us?", "No. It prepares the deletion checklist and wording for the family or editor."],
      ["Should every copy be deleted?", "No. Keep the approved family archive copy, then remove temporary working files and access links."],
    ],
  },
  {
    slug: "memorial-video-church-media-team-handoff",
    title: "Memorial video church media team handoff",
    description: "Prepare church media team notes for memorial video playback, file format, sound, screen timing, contact names, and backup delivery.",
    headline: "Hand off a memorial video to the church media team clearly.",
    audience: "families, funeral coordinators, volunteers, and church media teams preparing service-day playback",
    checklist: ["Final MP4 or playback file", "Media contact", "Run-of-service timing", "Backup copy"],
    steps: ["Confirm the service schedule.", "Share playback requirements.", "Test audio and captions.", "Keep a second copy ready."],
    rushReadiness: ["Confirm file format with the media team.", "Test on the actual system when possible.", "Do not rely on one phone or one email attachment."],
    familyReview: ["Ask the family to approve the version before media handoff.", "Confirm intro and closing cards.", "Clarify when the video should start."],
    privacyNotes: ["Use limited-access transfer links.", "Ask venue staff to delete temporary files after the service.", "Do not leave family photos on shared computers."],
    faq: [["Does MemorialRushAI contact the church?", "No. It prepares handoff notes only."], ["Can it guarantee playback works?", "No. Playback depends on venue equipment and testing."]],
  },
  {
    slug: "memorial-video-obituary-link-checklist",
    title: "Memorial video obituary link checklist",
    description: "Prepare obituary page video link notes with privacy, expiration, thumbnail, caption, family approval, and after-service access boundaries.",
    headline: "Prepare a memorial video link for an obituary page.",
    audience: "families, funeral homes, editors, and coordinators adding a tribute link to an obituary or service page",
    checklist: ["Approved video link", "Thumbnail or title", "Privacy setting", "Expiration or archive plan"],
    steps: ["Confirm family approval.", "Choose public, unlisted, or private access.", "Prepare the obituary link note.", "Review after-service availability."],
    rushReadiness: ["Avoid last-minute public links without family review.", "Test the link from a non-owner device.", "Keep a backup link in case the obituary platform strips embeds."],
    familyReview: ["Confirm the displayed name and dates.", "Ask whether comments, downloads, or sharing should be disabled.", "Choose who receives access questions."],
    privacyNotes: ["Do not publish private family media without approval.", "Use the least public access level that fits the family plan.", "Remove or expire temporary review links."],
    faq: [["Does MemorialRushAI host obituary links?", "No. It prepares the link checklist and wording."], ["Is this legal advice about publicity or privacy?", "No. Family and qualified review decide public sharing."]],
  },
  {
    slug: "memorial-video-grandchild-photo-request",
    title: "Memorial video grandchild photo request",
    description: "Draft a gentle request for grandchildren and extended family to submit photos, names, captions, deadlines, and do-not-use notes.",
    headline: "Ask grandchildren for photos without creating confusion.",
    audience: "families coordinating photos from grandchildren, nieces, nephews, cousins, and extended relatives",
    checklist: ["Photo deadline", "Submission folder", "Caption guidance", "Do-not-use instructions"],
    steps: ["Write a short request.", "Set a clear deadline.", "Ask for names and photo context.", "Route all files to one family coordinator."],
    rushReadiness: ["Set one cutoff time for late photos.", "Ask for original files when possible.", "Avoid scattered text threads if the deadline is tight."],
    familyReview: ["Confirm spelling of each grandchild's name.", "Ask whether every submitted photo may be used.", "Prioritize photos that fit the chosen length."],
    privacyNotes: ["Do not pressure relatives to share private images.", "Keep child photos and captions under family control.", "Limit folder access to necessary reviewers."],
    faq: [["Does MemorialRushAI message relatives?", "No. It drafts wording for the family coordinator."], ["Can every submitted photo be included?", "No. Runtime and deadline may limit what fits."]],
  },
  {
    slug: "memorial-slideshow-military-service-section",
    title: "Memorial slideshow military service section",
    description: "Plan a respectful military service section with dates, branch, photos, captions, music notes, family review, and accuracy checks.",
    headline: "Prepare a military service section with careful fact review.",
    audience: "families creating a tribute section for veterans, service members, first responders, or public-service careers",
    checklist: ["Service dates", "Branch or role", "Approved photos", "Caption wording"],
    steps: ["Gather verified service details.", "Choose approved photos.", "Draft captions for family review.", "Keep the section respectful and concise."],
    rushReadiness: ["Verify names, dates, ranks, and units with family sources.", "Do not invent credentials or honors.", "Leave uncertain details out when the deadline is short."],
    familyReview: ["Ask a close family reviewer to confirm wording.", "Check whether uniform or ceremony photos may be used.", "Confirm music and title-card tone."],
    privacyNotes: ["Do not expose sensitive service records.", "Avoid publishing private documents.", "Use family-approved wording only."],
    faq: [["Does MemorialRushAI verify military records?", "No. It relies on family-provided details and does not certify service history."], ["Can it write official honors language?", "No. Use verified family or official wording when appropriate."]],
  },
  {
    slug: "memorial-video-photo-duplicate-cleanup",
    title: "Memorial video photo duplicate cleanup",
    description: "Prepare a duplicate-photo cleanup checklist for memorial slideshows with folder names, best-copy selection, captions, and backup archive notes.",
    headline: "Clean up duplicate memorial photos before editor handoff.",
    audience: "families and volunteers sorting large photo folders under a tight memorial video deadline",
    checklist: ["Duplicate groups", "Best visible copy", "Caption status", "Archive folder"],
    steps: ["Group duplicate photos.", "Choose the clearest version.", "Keep originals in an archive.", "Send only approved selections to the editor."],
    rushReadiness: ["Do not spend the whole deadline perfecting duplicates.", "Pick the clearest emotional moments first.", "Keep a simple maybe folder for later review."],
    familyReview: ["Ask one reviewer to approve final selections.", "Avoid removing meaningful photos just because they are similar.", "Confirm caption names after cleanup."],
    privacyNotes: ["Keep rejected photos private.", "Do not upload full unsorted archives to public links.", "Remove editor access after delivery."],
    faq: [["Does MemorialRushAI deduplicate photos automatically?", "No. It prepares a manual cleanup checklist."], ["Should originals be deleted?", "No. Keep originals until the family confirms the final archive plan."]],
  },
  {
    slug: "memorial-video-music-memory-notes",
    title: "Memorial video music memory notes",
    description: "Collect family music memories, favorite songs, lyric sensitivity notes, licensing reminders, and alternate track ideas for a tribute video.",
    headline: "Organize music memories before choosing tribute audio.",
    audience: "families, editors, funeral coordinators, and volunteers discussing memorial video music",
    checklist: ["Favorite songs", "Family memory notes", "Sensitive lyrics", "Alternate tracks"],
    steps: ["Ask for meaningful music ideas.", "Note emotional or lyric concerns.", "Prepare alternates.", "Check rights separately before public use."],
    rushReadiness: ["Choose backup options if a song cannot be used.", "Keep the editor's deadline in mind.", "Do not delay the whole video over one track."],
    familyReview: ["Ask family reviewers about tone and lyrics.", "Confirm whether instrumental music is preferable.", "Record final approval before delivery."],
    privacyNotes: ["Do not publish private voice notes without permission.", "Keep family stories limited to approved reviewers.", "Check music rights outside this planning tool."],
    faq: [["Is this music licensing advice?", "No. Rights and licensing should be checked separately."], ["Does MemorialRushAI source music?", "No. It organizes family notes for editor review."]],
  },
  {
    slug: "memorial-video-sensitive-photo-boundary",
    title: "Memorial video sensitive photo boundary",
    description: "Prepare do-not-use notes for sensitive photos, hospital images, private moments, minors, conflict concerns, and public-sharing limits.",
    headline: "Set clear boundaries for sensitive memorial photos.",
    audience: "families and coordinators deciding what should stay private in a memorial video",
    checklist: ["Do-not-use list", "Private folders", "Minor or guest concerns", "Public-sharing limits"],
    steps: ["Identify sensitive images early.", "Separate them from editor-ready photos.", "Write simple do-not-use notes.", "Confirm public-sharing boundaries."],
    rushReadiness: ["Do not send uncertain photos to the editor by accident.", "Use one approved folder for usable images.", "Flag sensitive items before the first cut."],
    familyReview: ["Ask the closest family reviewer for final say.", "Respect private grief and minor privacy.", "Avoid surprise images at the service."],
    privacyNotes: ["Keep sensitive photos out of shared links.", "Do not publish without clear family approval.", "Delete temporary review access after use."],
    faq: [["Does MemorialRushAI decide what is appropriate?", "No. The family decides what feels right and private."], ["Does this replace grief or family mediation support?", "No. It is a planning checklist only."]],
  },
  {
    slug: "memorial-video-qr-code-program-note",
    title: "Memorial video QR code program note",
    description: "Plan a funeral program QR code note with link privacy, expiration, family approval, printable wording, and backup URL checks.",
    headline: "Prepare a QR code note for the memorial video link.",
    audience: "families, funeral homes, print coordinators, and volunteers adding a tribute video link to a printed program",
    checklist: ["Approved video URL", "QR code test", "Printed backup URL", "Expiration plan"],
    steps: ["Confirm the family-approved link.", "Generate and test the QR code separately.", "Add a short printed note.", "Retest before printing."],
    rushReadiness: ["Test the QR code on multiple phones.", "Include a short fallback URL when possible.", "Do not print until the family approves the destination."],
    familyReview: ["Confirm whether the link is public, unlisted, or private.", "Review the visible title and thumbnail.", "Choose who handles access questions."],
    privacyNotes: ["Do not point a printed QR code at a temporary private folder.", "Avoid public links for family-only content.", "Expire review links after the service."],
    faq: [["Does MemorialRushAI create QR codes?", "No. It prepares the checklist and note."], ["Can a QR code be changed after printing?", "Only if the destination URL or redirect system supports it; test before printing."]],
  },
  {
    slug: "memorial-video-after-service-update-request",
    title: "Memorial video after-service update request",
    description: "Draft after-service update notes for corrected captions, added photos, family archive versions, link changes, and editor availability.",
    headline: "Request after-service updates without reopening confusion.",
    audience: "families and editors handling small memorial video updates after the service",
    checklist: ["Correction list", "Added photos", "Archive version", "Updated link needs"],
    steps: ["List only the requested updates.", "Confirm whether a new export is needed.", "Ask about editor availability.", "Replace old links after approval."],
    rushReadiness: ["Separate urgent service fixes from after-service archive updates.", "Avoid sending multiple conflicting request threads.", "Confirm whether new charges or timelines apply."],
    familyReview: ["Ask the family to approve the revised archive copy.", "Confirm corrected names and dates.", "Decide whether the old version should remain accessible."],
    privacyNotes: ["Remove old public links if the family wants the corrected version only.", "Do not leave review links open indefinitely.", "Keep archive access limited to approved family members."],
    faq: [["Can updates always be made after delivery?", "No. It depends on editor availability, source files, and the requested change."], ["Does MemorialRushAI update links automatically?", "No. It drafts the request and checklist only."]],
  },
  {
    slug: "memorial-video-family-archive-index",
    title: "Memorial video family archive index",
    description: "Create a simple archive index for final memorial video files, photos, captions, music notes, delivery dates, and access owners.",
    headline: "Create a family archive index after the memorial video is finished.",
    audience: "families preserving the approved tribute video and source notes after a service",
    checklist: ["Final video file", "Photo folder", "Caption notes", "Access owner"],
    steps: ["Record final filenames and dates.", "Choose who keeps archive access.", "Store caption and music notes.", "Remove temporary editor links."],
    rushReadiness: ["Do not lose the final file after a rushed service.", "Save one approved archive copy before cleanup.", "Write down where future family members can request access."],
    familyReview: ["Confirm the archive version is approved.", "Decide whether source photos stay with one coordinator.", "Record any do-not-share notes."],
    privacyNotes: ["Limit access to family-approved people.", "Do not publish archive folders publicly.", "Remove temporary working copies after approval."],
    faq: [["Does MemorialRushAI store the archive?", "No. It helps plan the archive index; storage stays with the family."], ["Should editor files be kept forever?", "Only if the family and editor agree. Temporary working files can usually be removed after approval."]],
  },
  {
    slug: "memorial-video-name-date-proofreading-checklist",
    title: "Memorial video name and date proofreading checklist",
    description: "Proofread names, relationships, birth and death dates, service details, captions, and title cards before a memorial video is delivered.",
    headline: "Check every memorial video name and date before delivery.",
    audience: "families, editors, funeral coordinators, and volunteers reviewing a final tribute video",
    checklist: ["Full name spellings", "Birth and death dates", "Relationship captions", "Service time and location"],
    steps: ["Create one fact list from family-approved sources.", "Compare every title and caption.", "Mark uncertain details instead of guessing.", "Ask one final family reviewer to approve corrections."],
    rushReadiness: ["Prioritize names and dates before visual refinements.", "Keep one correction list.", "Do not invent missing facts under deadline pressure."],
    familyReview: ["Ask the closest family reviewer to confirm facts.", "Read names aloud when spellings are easy to confuse.", "Approve the final export after corrections."],
    privacyNotes: ["Keep the fact list in a restricted folder.", "Do not publish private dates or relationships without approval.", "Remove temporary correction documents after handoff."],
    faq: [["Does MemorialRushAI verify public records?", "No. It organizes family-supplied facts and does not certify dates or identities."], ["What if a detail is uncertain?", "Leave it out or mark it for family confirmation rather than guessing."]],
  },
  {
    slug: "memorial-video-accessibility-review-checklist",
    title: "Memorial video accessibility review checklist",
    description: "Review caption readability, font size, contrast, pacing, audio balance, flashing transitions, and playback controls for a memorial video.",
    headline: "Make a memorial video easier for more guests to follow.",
    audience: "families, editors, venues, and funeral coordinators preparing inclusive service-day playback",
    checklist: ["Readable captions", "Text contrast and size", "Audio and music balance", "Gentle transition pacing"],
    steps: ["Watch the video with sound on and off.", "Read captions from a realistic viewing distance.", "Reduce distracting or flashing transitions.", "Test playback with the venue when possible."],
    rushReadiness: ["Fix unreadable names and captions first.", "Keep title cards on screen long enough to read.", "Prepare a captioned backup when feasible."],
    familyReview: ["Ask whether guests have known hearing or vision needs.", "Confirm the chosen tone remains respectful.", "Have a human review the final playback."],
    privacyNotes: ["Do not add health details to explain accessibility needs.", "Keep guest information private.", "Share only the approved final file."],
    faq: [["Is this an accessibility certification?", "No. It is a practical review checklist, not legal or accessibility compliance advice."], ["Does MemorialRushAI add captions automatically?", "No. It helps plan and review captions with the editor."]],
  },
  {
    slug: "memorial-video-family-final-approval-checklist",
    title: "Memorial video family final approval checklist",
    description: "Prepare one final family approval pass for names, dates, photos, music, captions, privacy boundaries, and delivery links.",
    headline: "Finish one clear family approval pass before sharing.",
    audience: "families and editors closing a memorial video project without conflicting review threads",
    checklist: ["Named final reviewer", "Approved export version", "Correction cutoff", "Sharing and archive decision"],
    steps: ["Choose one final reviewer.", "Collect corrections in one list.", "Confirm the approved version number.", "Record delivery and sharing boundaries."],
    rushReadiness: ["Set a clear correction deadline.", "Separate required fact fixes from optional preferences.", "Avoid multiple conflicting approval messages."],
    familyReview: ["Confirm names, dates, photo order, captions, and music.", "Ask whether any image should remain private.", "Approve the exact final file and link."],
    privacyNotes: ["Use a private review link.", "Do not assume silence means consent.", "Remove obsolete review versions after approval."],
    faq: [["Does MemorialRushAI approve the video for the family?", "No. The family or its chosen reviewer makes the final decision."], ["Is approval a legal release?", "No. This checklist is not legal advice or a substitute for required permissions."]],
  },
  {
    slug: "memorial-video-backup-file-naming-checklist",
    title: "Memorial video backup file naming checklist",
    description: "Name final exports, caption files, photos, review versions, and archive folders so the family can identify the approved memorial video later.",
    headline: "Name memorial video backups so the approved copy stays clear.",
    audience: "families, editors, funeral homes, and volunteers organizing final tribute files and backups",
    checklist: ["Approved final filename", "Version and delivery date", "Caption or subtitle files", "Archive owner and location"],
    steps: ["Choose one plain filename pattern.", "Mark review drafts separately.", "Store the approved final and captions together.", "Record who controls the backup."],
    rushReadiness: ["Avoid filenames such as final-final-new.", "Keep one clearly approved export.", "Do not overwrite the only family copy."],
    familyReview: ["Confirm the approved file opens correctly.", "Check captions stay paired with the right version.", "Tell the archive owner which file is final."],
    privacyNotes: ["Avoid private details in public filenames.", "Keep backups in family-controlled storage.", "Remove temporary editor links after confirmation."],
    faq: [["Does MemorialRushAI create the backup?", "No. It prepares naming and handoff notes; storage remains with the family or editor."], ["Should every draft be kept?", "No. Keep what the family and editor intentionally need after final approval."]],
  },
  {
    slug: "memorial-video-anniversary-reshare-checklist",
    title: "Memorial video anniversary reshare checklist",
    description: "Review family approval, privacy settings, captions, links, music rights, and audience boundaries before resharing a memorial video on an anniversary.",
    headline: "Recheck privacy before sharing a memorial video again.",
    audience: "families and community coordinators considering an anniversary or remembrance-day reshare",
    checklist: ["Current family approval", "Audience and privacy setting", "Working video link", "Music and photo permissions"],
    steps: ["Ask whether the family still wants the video shared.", "Review the current audience and link settings.", "Check captions and sensitive photos again.", "Share only after renewed approval."],
    rushReadiness: ["Do not reuse an old public link without checking it.", "Confirm who will receive the reshare.", "Keep a private alternative ready."],
    familyReview: ["Ask whether relationships or circumstances have changed.", "Confirm comments and downloads settings.", "Respect any new do-not-share request."],
    privacyNotes: ["Past approval may not cover a new public audience.", "Do not tag relatives without permission.", "Use the least public sharing setting that fits the plan."],
    faq: [["Does MemorialRushAI post the anniversary tribute?", "No. It prepares the review checklist and does not publish or message anyone."], ["Does old approval automatically cover resharing?", "No. Ask the family again and review permissions for the new audience."]],
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

function checkoutUrlFor(baseUrl, content) {
  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", "memorialrushai");
  url.searchParams.set("utm_medium", "owned");
  url.searchParams.set("utm_campaign", "conversion");
  url.searchParams.set("utm_content", content);
  return escapeHtml(url.toString());
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
        <a class="secondary" href="${checkoutUrlFor(starterUrl, `seo_${page.slug}_starter`)}">Start $49 order</a>
        <a class="secondary" href="${checkoutUrlFor(fullReviewUrl, `seo_${page.slug}_expanded`)}">Full rush package</a>
        <a class="secondary" href="${starterFallbackUrl}">Starter fallback</a>
        <a class="secondary" href="${fullReviewFallbackUrl}">Expanded fallback</a>
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
        <article class="seo-card">
          <h2>When a paid memorial handoff is worth it</h2>
          <p>Buy the $49 starter only after the free brief has enough names, dates, photos, service timing, tone, and music notes for a careful editor handoff. Use the $99 expanded pack when the family also needs archive notes, accessibility review prompts, after-service copy, backup naming, and resharing notes. Skip payment if you need photo scanning, final video production, public posting, funeral-home contact, USB creation, file deletion, grief counseling, legal advice, music licensing advice, accessibility certification, consent advice, or guaranteed delivery, playback, approval, privacy, ranking, traffic, sales, or revenue.</p>
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
