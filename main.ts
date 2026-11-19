// GTA 6 meme on X — entry program for make.fun's gta6-meme-x-01 bounty.
// The post itself is the entry: this program only hands the house the
// address of the X post, stored in POST.json at the repository root.
// It copies that file into the output directory so the gate can read it.
// Nothing about the meme or the post is decided here; the house reads the
// post from X itself and the judge sees its first picture and its text.
// Run it with MAKEFUN_BOT_DIR set to this repository and
// MAKEFUN_OUTPUT_DIR set to the output directory, as the grader does.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outRoot = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFileName = "POST.json";

const sourcePath = join(repoRoot, postFileName);
const targetPath = join(outRoot, postFileName);

const rawPost = readFileSync(sourcePath);

// The file must name one X post, so check its shape before handing it on.
// The bytes are copied unchanged: the gate reads exactly what is committed.
const parsed = JSON.parse(rawPost.toString("utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error(`${postFileName} must hold a JSON object with the post address`);
}
const address = (parsed as { url?: unknown }).url;
if (typeof address !== "string" || !address.startsWith("https://")) {
  throw new Error(`${postFileName} must carry the post address as an https url`);
}
// The address must point at one X post, so the gate is handed a real one.
const postShape = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/;
if (!postShape.test(address)) {
  throw new Error(`${postFileName} must name an X post address`);
}

mkdirSync(outRoot, { recursive: true });
writeFileSync(targetPath, rawPost);
