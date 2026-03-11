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
  dv.table(
    ["專案", "Stars/天", "分類", "安裝", "用途"],
    pages.limit(15).map(p => [
      p.file.link,
      p.stars_per_day,
      p.category,
      p.install_complexity,
      (p.use_case || "").slice(0, 40)
    ])
  );
}
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
