---
tags:
  - moc
  - 其他
---

# MOC - 其他

> 所有分類為「其他」的 GitHub Trending 專案

## 總覽

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "其他");
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const avgStars = total > 0 ? Math.round(pages.array().reduce((s, p) => s + (p.stars || 0), 0) / total) : 0;
dv.paragraph(`**${total}** 個專案 · 已回顧 ${reviewed}/${total} · 平均 Stars: ${avgStars.toLocaleString()}`);
```

## 依狀態分群

```dataview
TABLE WITHOUT ID
  status AS "狀態",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "其他"
GROUP BY status
SORT length(rows) DESC
```

## 專案列表（依 Stars 排序）

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  install_complexity AS "安裝",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "其他"
SORT stars DESC
```

## 依語言分群

```dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "其他"
GROUP BY language
SORT length(rows) DESC
```

## 待回顧（優先）

```dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  install_complexity AS "安裝"
FROM "Repos"
WHERE category = "其他" AND status = "to-review"
SORT stars_per_day DESC
```

## 每週趨勢

```dataview
TABLE WITHOUT ID
  week AS "週次",
  length(rows) AS "新增數",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "其他"
GROUP BY week
SORT week DESC
```
