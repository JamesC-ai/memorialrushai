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
