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
