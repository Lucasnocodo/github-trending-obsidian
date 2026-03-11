---
tags:
  - navigation
cssclasses:
  - triage
---

# Triage Board

> 快速分流工作流：inbox -> watching -> evaluating -> using / archived

## Inbox（待分流）

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.status === "to-review")
  .sort(p => p.stars_per_day, "desc");

if (pages.length === 0) {
  dv.paragraph("Inbox 已清空！");
} else {
  dv.paragraph(`**${pages.length}** 個專案等待分流`);
  // 卡片式展示前 10 個，提供更多上下文幫助快速決策
  for (const p of pages.limit(10)) {
    const use = p.use_case || p.description || "";
    const lang = p.language || "";
    const install = p.install_complexity === "easy" ? "Easy" : p.install_complexity === "medium" ? "Mid" : "Hard";
    const engagement = p.engagement || "";
    dv.paragraph(`### ${p.file.link}\n**${p.stars_per_day}** stars/天 · ${p.category || ""} · ${lang} · ${install} install · ${engagement} engagement\n> ${use}`);
  }
  if (pages.length > 10) {
    dv.paragraph(`\n_...還有 ${pages.length - 10} 個專案_`);
  }
}
```

## 今日到期複習

> [!tip] 根據間隔複習排程，以下專案到了該回顧的時間

```dataview
TABLE
  next_review AS "複習日",
  stars_per_day AS "Stars/天",
  category AS "分類",
  engagement AS "參與度"
FROM "Repos"
WHERE next_review AND date(next_review) <= date(today) AND status != "archived"
SORT priority DESC, date(next_review) ASC
```

## High Priority（優先處理）

```dataview
TABLE
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝",
  use_case AS "用途"
FROM "Repos"
WHERE status = "to-review" AND priority = "high"
SORT stars_per_day DESC
```

## Reading（正在研究）

```dataview
TABLE
  stars AS "Stars",
  category AS "分類",
  use_case AS "用途",
  last_reviewed AS "上次回顧"
FROM "Repos"
WHERE status = "reading"
SORT last_reviewed DESC
```

## Tried（已試用）

```dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  stars AS "Stars",
  category AS "分類",
  use_case AS "用途"
FROM "Repos"
WHERE status = "tried"
SORT my_rating DESC
```

## Integrated（已整合）

```dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  stars AS "Stars",
  category AS "分類",
  use_case AS "用途"
FROM "Repos"
WHERE status = "integrated"
SORT my_rating DESC
```

## Archived（封存）

```dataview
TABLE
  stars AS "Stars",
  category AS "分類",
  use_case AS "用途"
FROM "Repos"
WHERE status = "archived"
SORT stars DESC
```

## 推薦回顧（基於偏好）

> [!tip] 你評過高分的分類，還有這些專案沒看過

```dataviewjs
// 找出你給高評分的分類
const rated = dv.pages('"Repos"').where(p => p.my_rating >= 4);
const favCats = new Set(rated.map(p => p.category).filter(Boolean));

if (favCats.size === 0) {
  dv.paragraph("先給幾個專案評分，就能看到推薦。");
} else {
  const recs = dv.pages('"Repos"')
    .where(p => p.status === "to-review" && favCats.has(p.category))
    .sort(p => p.stars_per_day, "desc")
    .limit(10);
  if (recs.length > 0) {
    dv.paragraph(`偏好分類：${[...favCats].join("、")}`);
    dv.table(
      ["專案", "Stars/天", "分類", "安裝", "用途"],
      recs.map(p => [
        p.file.link,
        p.stars_per_day,
        p.category,
        p.install_complexity,
        (p.use_case || "").slice(0, 40)
      ])
    );
  } else {
    dv.paragraph("偏好分類中已無待回顧的專案。");
  }
}
```

## 歸檔候選

> [!warning] 低優先度且長期未回顧（v12 起會自動封存）

```dataview
TABLE
  stars AS "Stars",
  priority AS "優先級",
  first_seen AS "收錄日期",
  category AS "分類"
FROM "Repos"
WHERE status = "to-review"
  AND priority = "low"
  AND date(first_seen) < date(today) - dur(14 days)
SORT first_seen ASC
```

## 筆記完整度

> [!info] 缺少重要區塊的筆記（v14 標準：成熟度評估、已知陷阱、使用情境適合度）

```dataviewjs
const sections = [
  { name: "成熟度評估", pattern: "## 成熟度評估" },
  { name: "已知陷阱", pattern: "## 已知陷阱" },
  { name: "使用情境適合度", pattern: "## 使用情境適合度" },
  { name: "替代方案決策", pattern: "## 替代方案決策" },
  { name: "技術深入分析", pattern: "## 技術深入分析" },
];
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const incomplete = [];
for (const p of pages) {
  const content = await dv.io.load(p.file.path);
  const missing = sections.filter(s => !content.includes(s.pattern)).map(s => s.name);
  if (missing.length >= 3) {
    incomplete.push({ link: p.file.link, stars: p.stars_per_day || 0, missing: missing.join(", "), count: missing.length });
  }
}
incomplete.sort((a, b) => b.stars - a.stars);
if (incomplete.length > 0) {
  dv.paragraph(`**${incomplete.length}** 個筆記缺少 3+ 個 v14 區塊`);
  dv.table(
    ["專案", "Stars/天", "缺少區塊", "缺少數"],
    incomplete.slice(0, 10).map(i => [i.link, i.stars, i.missing, i.count])
  );
} else {
  dv.paragraph("所有非封存筆記都符合 v14 標準！");
}
```

## 快速統計

```dataviewjs
const all = dv.pages('"Repos"');
const byStatus = {};
for (const p of all) {
  const s = p.status || "unknown";
  byStatus[s] = (byStatus[s] || 0) + 1;
}
const total = all.length;
const bar = (label, count) => {
  const pct = Math.round((count / total) * 100);
  const filled = Math.round(pct / 5);
  return `${label}: ${"█".repeat(filled)}${"░".repeat(20 - filled)} ${count} (${pct}%)`;
};
const lines = Object.entries(byStatus)
  .sort((a, b) => b[1] - a[1])
  .map(([s, c]) => bar(s, c));
dv.paragraph(lines.join("\n"));
```

---

> [!tip] 如何使用
> 1. 從 **Inbox** 開始，快速瀏覽每個專案的用途
> 2. 有興趣的改 `status: reading`，不相關的改 `status: archived`
> 3. 試用後改 `status: tried`，給予 `my_rating` 1-5 分
> 4. 決定長期使用的改 `status: integrated`
