<%*
// Templater script: 快速分流 — 一鍵更新 status + ring + my_rating
// 使用方式：在任何 repo 筆記中觸發此 template（建議綁定快捷鍵）
const file = app.workspace.getActiveFile();
if (!file) { new Notice("請先開啟一個筆記"); return; }

const fm = app.metadataCache.getFileCache(file)?.frontmatter;
if (!fm?.repo) { new Notice("此筆記沒有 repo frontmatter 欄位"); return; }

const current = `目前: status=${fm.status || 'N/A'}, ring=${fm.ring || 'N/A'}, rating=${fm.my_rating || 0}`;

const action = await tp.system.suggester(
  [
    `繼續研究 (reading + assess)`,
    `開始試用 (tried + trial)`,
    `正式採用 (integrated + adopt)`,
    `觀望中 (to-review + assess)`,
    `暫緩 (to-review + hold)`,
    `封存 (archived + hold)`,
  ],
  ["reading", "tried", "integrated", "watching", "hold", "archived"],
  false,
  current
);
if (!action) return;

const statusMap = {
  reading: "reading",
  tried: "tried",
  integrated: "integrated",
  watching: "to-review",
  hold: "to-review",
  archived: "archived",
};
const ringMap = {
  reading: "assess",
  tried: "trial",
  integrated: "adopt",
  watching: "assess",
  hold: "hold",
  archived: "hold",
};

const newStatus = statusMap[action];
const newRing = ringMap[action];

let newRating = fm.my_rating || 0;
if (action === "tried" || action === "integrated") {
  const rating = await tp.system.suggester(
    ["1 - 不推薦", "2 - 勉強", "3 - 普通", "4 - 推薦", "5 - 必用"],
    [1, 2, 3, 4, 5],
    false,
    "評分（1-5）"
  );
  if (rating) newRating = rating;
}

// v26: 三維評分（可選）
let newInterest = fm.score_interest || 0;
let newConfidence = fm.score_confidence || 0;
let newRisk = fm.score_risk || 0;
const doScore = await tp.system.suggester(
  ["跳過", "快速評分（興趣/信心/風險）"],
  [false, true],
  false,
  "要填三維評分嗎？"
);
if (doScore) {
  const interest = await tp.system.suggester(
    ["1 - 無興趣", "2 - 略有興趣", "3 - 中等", "4 - 很有興趣", "5 - 非常想研究"],
    [1, 2, 3, 4, 5], false, "興趣程度"
  );
  if (interest) newInterest = interest;
  const confidence = await tp.system.suggester(
    ["1 - 完全不了解", "2 - 略知皮毛", "3 - 有基本認識", "4 - 了解細節", "5 - 非常熟悉"],
    [1, 2, 3, 4, 5], false, "了解程度"
  );
  if (confidence) newConfidence = confidence;
  const risk = await tp.system.suggester(
    ["1 - 高風險", "2 - 有風險", "3 - 普通", "4 - 低風險", "5 - 極低風險"],
    [1, 2, 3, 4, 5], false, "導入風險"
  );
  if (risk) newRisk = risk;
}

// v26: verdict（可選，簡短結論）
let newVerdict = fm.verdict || "";
if (action === "tried" || action === "integrated" || action === "hold" || action === "archived") {
  const verdict = await tp.system.prompt("一句話結論（可留空）：", newVerdict);
  if (verdict !== null) newVerdict = verdict;
}

const today = new Date().toISOString().split("T")[0];
const oldHistory = fm.ring_history || "";
const newHistory = oldHistory
  ? `${oldHistory}, ${newRing}@${today}`
  : `${newRing}@${today}`;

await app.fileManager.processFrontMatter(file, fmObj => {
  fmObj.status = newStatus;
  fmObj.ring = newRing;
  fmObj.my_rating = newRating;
  fmObj.last_reviewed = today;
  fmObj.ring_history = newHistory;
  fmObj.score_interest = newInterest;
  fmObj.score_confidence = newConfidence;
  fmObj.score_risk = newRisk;
  if (newVerdict !== "") fmObj.verdict = newVerdict;
  // 重新計算 next_review
  const spd = fmObj.stars_per_day || 0;
  const d = new Date();
  d.setDate(d.getDate() + (spd >= 200 ? 3 : spd >= 30 ? 7 : 14));
  fmObj.next_review = d.toISOString().split("T")[0];
});

const scoreSummary = doScore ? ` I:${newInterest} C:${newConfidence} R:${newRisk}` : "";
new Notice(`${fm.repo}: ${newStatus} / ${newRing} / rating ${newRating}${scoreSummary}`);
%>
