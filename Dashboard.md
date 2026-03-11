---
tags:
  - dashboard
cssclasses:
  - dashboard
---

# GitHub Trending Dashboard

> [!summary] 總覽
> 使用 Dataview 插件自動彙總所有收錄的 GitHub 專案

## 回顧進度

```dataviewjs
const pages = dv.pages('"Repos"');
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const rated = pages.where(p => p.my_rating > 0).length;
const tried = pages.where(p => p.status === "tried").length;
const integrated = pages.where(p => p.status === "integrated").length;
const archived = pages.where(p => p.status === "archived").length;
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

dv.paragraph(`**${total}** 個專案 · 已回顧 **${reviewed}** (${pct}%) · 已評分 **${rated}** · 已試用 **${tried}** · 已整合 **${integrated}** · 已封存 **${archived}`);
dv.paragraph(`<progress value="${reviewed}" max="${total}" style="width:100%"></progress>`);
```

## 今日行動建議

```dataviewjs
const pages = dv.pages('"Repos"');
const toReview = pages.where(p => p.status === "to-review");
const highPri = toReview.where(p => p.priority === "high");
const easy = toReview.where(p => p.install_complexity === "easy");
const actions = [];

if (highPri.length > 0) {
  const top = highPri.sort(p => p.stars_per_day, "desc").first();
  actions.push(`**優先回顧** ${top.file.link}（${top.stars_per_day} stars/天，priority: high）`);
}
if (easy.length > 0) {
  const pick = easy.sort(p => p.stars_per_day, "desc").first();
  if (!highPri.length || pick.file.name !== highPri.sort(p => p.stars_per_day, "desc").first()?.file.name) {
    actions.push(`**快速試用** ${pick.file.link}（easy install，${pick.stars_per_day} stars/天）`);
  }
}
const stale = pages.where(p => {
  if (!p.last_reviewed || p.status === "archived") return false;
  const d = new Date(p.last_reviewed.toString());
  return (Date.now() - d.getTime()) > 14 * 86400000 && p.my_rating > 3;
});
if (stale.length > 0) {
  actions.push(`**重新檢視** ${stale.first().file.link}（高評分但超過 14 天未回顧）`);
}
// 到期複習提醒
const dueReview = pages.where(p => {
  if (!p.next_review || p.status === "archived") return false;
  const nr = new Date(p.next_review.toString());
  return nr.getTime() <= Date.now();
});
if (dueReview.length > 0) {
  actions.push(`**到期複習** ${dueReview.length} 個專案已到複習日（最優先：${dueReview.sort(p => p.stars_per_day, "desc").first().file.link}）`);
}
if (actions.length > 0) {
  dv.list(actions);
} else {
  dv.paragraph("所有專案都已處理完畢！");
}
```

## 今日重訪

> [!abstract] 知識重現
> 隨機挑選 30 天以上未接觸的筆記，避免知識被遺忘

```dataviewjs
const repos = dv.pages('"Repos"')
  .where(p => {
    if (p.status === "archived") return false;
    const mtime = p.file.mtime?.ts || 0;
    return (Date.now() - mtime) > 30 * 86400000;
  }).array();
const concepts = dv.pages('"Concepts"')
  .where(p => {
    const mtime = p.file.mtime?.ts || 0;
    return (Date.now() - mtime) > 30 * 86400000;
  }).array();

const pool = [...repos, ...concepts];
const sample = pool.sort(() => Math.random() - 0.5).slice(0, 5);

if (sample.length > 0) {
  dv.table(
    ["筆記", "類型", "最後修改", "距今天數"],
    sample.map(p => {
      const mtime = p.file.mtime?.ts || 0;
      const days = Math.round((Date.now() - mtime) / 86400000);
      const type = p.file.folder === "Repos" ? "Repo" : "Concept";
      return [p.file.link, type, p.file.mtime?.toFormat?.("yyyy-MM-dd") || "N/A", days + " 天"];
    })
  );
} else {
  dv.paragraph("所有筆記都在 30 天內有修改，做得好！");
}
```

## 收錄時間軸

```dataview
CALENDAR first_seen
FROM "Repos"
```

## 依狀態分群

```dataview
TABLE WITHOUT ID
  status AS "狀態",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY status
SORT length(rows) DESC
```

## 爆紅專案 Top 15

```dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝難度",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分"
FROM "Repos"
SORT stars_per_day DESC
LIMIT 15
```

## 已評分的專案

```dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  stars AS "Stars",
  category AS "分類",
  status AS "狀態",
  install_complexity AS "安裝"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC
```

## 待回顧（優先順序）

> [!tip] 回顧建議
> Stars/天 最高的專案最值得優先回顧。use_case 欄位幫你快速判斷是否相關。

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝",
  use_case AS "解決什麼問題",
  priority AS "優先級"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
```

## 依優先級分群

```dataview
TABLE WITHOUT ID
  priority AS "優先級",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE status != "archived"
GROUP BY priority
SORT choice(priority, "high", 1, choice(priority, "medium", 2, 3)) ASC
```

## 需要重新檢視（超過 30 天未回顧）

```dataview
TABLE
  last_reviewed AS "最後回顧",
  status AS "狀態",
  stars AS "Stars"
FROM "Repos"
WHERE last_reviewed AND date(today) - date(last_reviewed) > dur(30 days)
  AND status != "archived"
SORT last_reviewed ASC
```

## 已有結論的專案

```dataview
TABLE
  verdict AS "結論",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  category AS "分類",
  status AS "狀態"
FROM "Repos"
WHERE verdict AND verdict != ""
SORT my_rating DESC
```

## 依參與度分群

> [!abstract] Forks/Stars 比值反映社群實際使用程度

```dataview
TABLE WITHOUT ID
  engagement AS "參與度",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE status != "archived"
GROUP BY engagement
SORT choice(engagement, "high", 1, choice(engagement, "medium", 2, 3)) ASC
```

## 依分類瀏覽

```dataview
TABLE WITHOUT ID
  category AS "分類",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars",
  round(sum(rows.my_rating) / length(rows.where(r => r.my_rating > 0)), 1) AS "平均評分"
FROM "Repos"
GROUP BY category
SORT length(rows) DESC
```

## 依語言瀏覽

```dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY language
SORT length(rows) DESC
```

## 安裝難度分佈

```dataview
TABLE WITHOUT ID
  install_complexity AS "難度",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY install_complexity
SORT choice(install_complexity, "easy", 1, choice(install_complexity, "medium", 2, 3)) ASC
```

## 本週新增

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝"
FROM "Repos"
WHERE date(first_seen) >= date(today) - dur(7 days)
SORT stars DESC
```

## 每週收錄量

```dataview
TABLE WITHOUT ID
  week AS "週次",
  length(rows) AS "收錄數",
  sum(rows.stars) AS "總 Stars",
  max(rows.stars_per_day) AS "最快 Stars/天"
FROM "Repos"
GROUP BY week
SORT week DESC
```

## 持續熱門

> [!tip] 收錄超過 7 天仍在活躍開發的專案

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => {
    if (!p.first_seen || !p.pushed_at) return false;
    const daysSinceSeen = (new Date() - new Date(p.first_seen?.toString())) / 86400000;
    const daysSincePush = (new Date() - new Date(p.pushed_at?.toString())) / 86400000;
    return daysSinceSeen > 7 && daysSincePush < 7 && (p.stars_per_day || 0) > 100;
  })
  .sort(p => p.stars, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "收錄日期", "最後推送", "分類"],
    pages.map(p => [p.file.link, p.stars_per_day, p.first_seen, p.pushed_at, p.category])
  );
} else {
  dv.paragraph("目前沒有符合條件的持續熱門專案（需追蹤超過 7 天）");
}
```

## 分類趨勢

```dataviewjs
const pages = dv.pages('"Repos"');
const catData = {};
for (const p of pages) {
  const cat = p.category || "其他";
  catData[cat] = (catData[cat] || 0) + 1;
}
const sorted = Object.entries(catData).sort((a,b) => b[1] - a[1]).slice(0, 10);
dv.table(
  ["分類", "數量", "佔比", "視覺化"],
  sorted.map(([cat, count]) => {
    const pct = Math.round((count / pages.length) * 100);
    const bar = "█".repeat(Math.round(pct / 5)) + "░".repeat(20 - Math.round(pct / 5));
    return [cat, count, pct + "%", bar];
  })
);
```

## 月度趨勢

```dataviewjs
const pages = dv.pages('"Repos"');
const months = {};
for (const p of pages) {
  const fs = p.first_seen?.toString();
  if (!fs) continue;
  const m = fs.slice(0, 7);
  if (!months[m]) months[m] = { count: 0, stars: 0, rated: 0 };
  months[m].count++;
  months[m].stars += (p.stars || 0);
  if (p.my_rating > 0) months[m].rated++;
}
const sorted = Object.entries(months).sort((a, b) => b[0].localeCompare(a[0]));
dv.table(
  ["月份", "收錄數", "總 Stars", "已評分", "平均 Stars"],
  sorted.map(([m, d]) => [
    dv.fileLink(m, false, m),
    d.count,
    d.stars.toLocaleString(),
    d.rated,
    Math.round(d.stars / d.count).toLocaleString()
  ])
);
```

## Easy Install 專案

> [!tip] 立即可試
> 安裝複雜度為 easy 的專案，一行指令就能開始使用

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  language AS "語言",
  status AS "狀態"
FROM "Repos"
WHERE install_complexity = "easy"
SORT stars DESC
LIMIT 10
```

## 速覽清單

> [!tip] 快速掃描
> 一眼看完每個專案的重點

```dataviewjs
const pages = dv.pages('"Repos"')
  .sort(p => p.stars_per_day || 0, "desc");

const rows = [];
for (const p of pages) {
  const desc = p.aliases?.[2] || p.description || "";
  const install = p.install_complexity === "easy" ? "Easy" : p.install_complexity === "medium" ? "Mid" : "Hard";
  rows.push([
    p.file.link,
    (p.stars_per_day || 0) + "/d",
    install,
    p.category || "",
    desc.slice(0, 50) + (desc.length > 50 ? "..." : "")
  ]);
}
dv.table(["專案", "速度", "安裝", "分類", "一句話"], rows);
```

## Tech Radar 概覽

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.ring && p.status !== "archived");
const rings = { adopt: [], trial: [], assess: [], hold: [] };
for (const p of pages) {
  const ring = (p.ring || "assess").toLowerCase();
  if (rings[ring]) rings[ring].push(p);
}

const ringLabels = {
  adopt: "Adopt（採用）",
  trial: "Trial（試用）",
  assess: "Assess（評估）",
  hold: "Hold（觀望）"
};

for (const [ring, label] of Object.entries(ringLabels)) {
  const repos = rings[ring];
  if (repos.length > 0) {
    dv.header(4, `${label} — ${repos.length} 個`);
    dv.table(
      ["專案", "分類", "Stars/天", "評分"],
      repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0)).slice(0, 5).map(p => [
        p.file.link,
        p.category || "",
        p.stars_per_day || 0,
        p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評"
      ])
    );
  }
}
if (Object.values(rings).every(r => r.length === 0)) {
  dv.paragraph("尚未有專案被分配到 Tech Radar 環。更新筆記的 `ring` 欄位來開始使用。");
}
```

## 語言 × 分類 矩陣

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const matrix = {};
const allCats = new Set();
const allLangs = new Set();

for (const p of pages) {
  const lang = p.language || "Other";
  const cat = p.category || "其他";
  allLangs.add(lang);
  allCats.add(cat);
  const key = `${lang}|${cat}`;
  matrix[key] = (matrix[key] || 0) + 1;
}

const topLangs = [...allLangs].sort((a, b) => {
  const countA = pages.where(p => (p.language || "Other") === a).length;
  const countB = pages.where(p => (p.language || "Other") === b).length;
  return countB - countA;
}).slice(0, 6);
const topCats = [...allCats].sort((a, b) => {
  const countA = pages.where(p => (p.category || "其他") === a).length;
  const countB = pages.where(p => (p.category || "其他") === b).length;
  return countB - countA;
}).slice(0, 6);

if (topLangs.length > 1 && topCats.length > 1) {
  dv.table(
    ["", ...topCats],
    topLangs.map(lang => [
      `**${lang}**`,
      ...topCats.map(cat => matrix[`${lang}|${cat}`] || "")
    ])
  );
}
```

## 概念分佈

> [!abstract] 被最多專案引用的技術概念

```dataviewjs
const repos = dv.pages('"Repos"').where(p => p.status !== "archived");
const conceptCount = {};
for (const p of repos) {
  for (const link of (p.file.outlinks || [])) {
    if (link.path?.startsWith("Concepts/")) {
      const name = link.path.replace("Concepts/", "").replace(".md", "");
      conceptCount[name] = (conceptCount[name] || 0) + 1;
    }
  }
}
const sorted = Object.entries(conceptCount).sort((a, b) => b[1] - a[1]).slice(0, 12);
if (sorted.length > 0) {
  dv.table(
    ["概念", "引用數", "佔比"],
    sorted.map(([name, count]) => {
      const pct = Math.round((count / repos.length) * 100);
      const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
      return [dv.fileLink("Concepts/" + name, false, name), count, bar + " " + pct + "%"];
    })
  );
} else {
  dv.paragraph("_專案尚未建立概念連結_");
}
```

## 概念分群索引

> [!abstract] 依主要關聯分類分群所有概念

```dataviewjs
const repos = dv.pages('"Repos"').where(p => p.status !== "archived");
const conceptCats = {};
for (const p of repos) {
  const cat = p.category || "其他";
  for (const link of (p.file.outlinks || [])) {
    if (link.path?.startsWith("Concepts/")) {
      const n = link.path.replace("Concepts/", "").replace(".md", "");
      if (!conceptCats[n]) conceptCats[n] = {};
      conceptCats[n][cat] = (conceptCats[n][cat] || 0) + 1;
    }
  }
}
const catGroups = {};
for (const [concept, cats] of Object.entries(conceptCats)) {
  const mainCat = Object.entries(cats).sort((a, b) => b[1] - a[1])[0][0];
  if (!catGroups[mainCat]) catGroups[mainCat] = [];
  catGroups[mainCat].push({ name: concept, count: Object.values(cats).reduce((s, c) => s + c, 0) });
}
for (const [cat, concepts] of Object.entries(catGroups).sort((a, b) => b[1].length - a[1].length)) {
  concepts.sort((a, b) => b.count - a.count);
  dv.header(4, `${cat} (${concepts.length} 個概念)`);
  dv.paragraph(concepts.map(c => `[[Concepts/${c.name}|${c.name}]] (${c.count})`).join(" · "));
}
```

## 圖譜健康分析

### 孤立筆記（缺少連結）

> [!warning] 這些筆記沒有跟其他筆記建立連結，Graph View 中會是孤島

```dataviewjs
const pages = dv.pages('"Repos"');
const orphans = pages.where(p => {
  const outlinks = p.file.outlinks?.length || 0;
  const inlinks = p.file.inlinks?.length || 0;
  return (outlinks + inlinks) < 3;
});
if (orphans.length > 0) {
  dv.table(
    ["專案", "Stars", "分類", "外連結", "內連結"],
    orphans.sort(p => p.stars, "desc").limit(10).map(p => [
      p.file.link,
      p.stars,
      p.category,
      p.file.outlinks?.length || 0,
      p.file.inlinks?.length || 0
    ])
  );
} else {
  dv.paragraph("所有筆記都有足夠的連結！");
}
```

### Hub 集中度

> [!info] 被最多筆記引用的節點 — 過度集中代表分類太粗或連結單一化

```dataviewjs
const allPages = dv.pages('"Repos" or "Concepts"');
const hubMap = {};
for (const p of allPages) {
  const inCount = p.file.inlinks?.length || 0;
  if (inCount >= 5) {
    hubMap[p.file.name] = { link: p.file.link, inlinks: inCount, folder: p.file.folder };
  }
}
const hubs = Object.values(hubMap).sort((a, b) => b.inlinks - a.inlinks).slice(0, 10);
if (hubs.length > 0) {
  const totalLinks = Object.values(hubMap).reduce((s, h) => s + h.inlinks, 0);
  const topPct = hubs.length > 0 ? Math.round((hubs[0].inlinks / totalLinks) * 100) : 0;
  if (topPct > 40) {
    dv.paragraph(`> [!caution] 最大 hub (${hubs[0].link}) 佔所有入連結的 ${topPct}%，圖譜過度集中`);
  }
  dv.table(
    ["節點", "入連結數", "類型"],
    hubs.map(h => [h.link, h.inlinks, h.folder])
  );
} else {
  dv.paragraph("目前沒有 hub 節點（入連結 >= 5），圖譜較為分散。");
}
```

### 圖譜統計

```dataviewjs
const repos = dv.pages('"Repos"');
const concepts = dv.pages('"Concepts"');
const totalPages = repos.length + concepts.length;
let totalLinks = 0;
let orphanCount = 0;
for (const p of [...repos, ...concepts]) {
  const links = (p.file.outlinks?.length || 0) + (p.file.inlinks?.length || 0);
  totalLinks += links;
  if (links < 3) orphanCount++;
}
const avgLinks = totalPages > 0 ? (totalLinks / totalPages).toFixed(1) : 0;
const orphanPct = totalPages > 0 ? Math.round((orphanCount / totalPages) * 100) : 0;
const health = orphanPct > 50 ? "需改善" : orphanPct > 25 ? "普通" : "良好";
dv.paragraph([
  `**節點** ${totalPages} 個（${repos.length} repos + ${concepts.length} concepts）`,
  `**平均連結數** ${avgLinks}`,
  `**孤立比例** ${orphanCount}/${totalPages} (${orphanPct}%)`,
  `**健康度** ${health}`
].join(" · "));
```

## 決策分數 Top 10

> [!abstract] 綜合熱度、易用性、成熟度、社群、授權計算 0-100 分

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const scored = [];
for (const p of pages) {
  let score = 0;
  const spd = p.stars_per_day || 0;
  score += Math.min(25, Math.round(spd / 40 * 25));
  score += p.install_complexity === "easy" ? 20 : p.install_complexity === "medium" ? 12 : 5;
  const created = p.created ? new Date(p.created.toString()) : null;
  const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
  score += age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
  const forks = p.forks || 0;
  score += forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
  const lic = p.license || "";
  score += ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic) ? 15 : lic && lic !== "N/A" ? 8 : 0;
  const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
  scored.push([p.file.link, grade, score, p.category || "", p.install_complexity || ""]);
}
scored.sort((a, b) => b[2] - a[2]);
dv.table(
  ["專案", "等級", "總分", "分類", "安裝"],
  scored.slice(0, 10)
);
```

## 所有專案

```dataview
TABLE
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  status AS "狀態",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  first_seen AS "收錄日期"
FROM "Repos"
SORT stars DESC
```

---

> [!info] 使用說明
> 此頁面需要安裝 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件才能正常顯示。
> 安裝方式：設定 → 社群插件 → 搜尋 Dataview → 安裝並啟用
> DataviewJS 需在 Dataview 設定中啟用（設定 → Dataview → Enable JavaScript Queries）
>
> **推薦插件**：
> - [Dataview](https://github.com/blacksmithgu/obsidian-dataview) — 動態查詢引擎（必裝）
> - [Contribution Graph](https://github.com/vran-dev/obsidian-contribution-graph) — 收錄熱力圖
> - [Heatmap Calendar](https://github.com/Richardsl/heatmap-calendar-obsidian) — GitHub 風格活動熱力圖
> - [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) — 每週回顧自動化
> - [Metadata Menu](https://github.com/mdelobelle/metadatamenu) — 強型別 frontmatter 管理
> - [Templater](https://github.com/SilentVoid13/Templater) — 進階模板引擎（搭配 quick-triage）
