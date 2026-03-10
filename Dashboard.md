---
tags:
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
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

dv.paragraph(`回顧進度：${reviewed}/${total} (${pct}%) · 已評分：${rated}`);
dv.paragraph(`<progress value="${reviewed}" max="${total}"></progress>`);
```

## 收錄時間軸

```dataview
CALENDAR first_seen
FROM "Repos"
```

## 爆紅專案（依 Stars/天 排序）

```dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝難度"
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
  status AS "狀態"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC
```

## 待回顧的專案

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
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

## 本週新增

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  category AS "分類"
FROM "Repos"
WHERE date(first_seen) >= date(today) - dur(7 days)
SORT stars DESC
```

## 語言統計

```dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars"
FROM "Repos"
GROUP BY language
SORT length(rows) DESC
```

## 所有專案（依 Stars 排序）

```dataview
TABLE
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
SORT stars DESC
```

---

> [!info] 使用說明
> 此頁面需要安裝 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件才能正常顯示。
> 安裝方式：設定 → 社群插件 → 搜尋 Dataview → 安裝並啟用
> DataviewJS 需在 Dataview 設定中啟用（設定 → Dataview → Enable JavaScript Queries）
