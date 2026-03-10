---
tags:
  - dashboard
---

# GitHub Trending Dashboard

> [!summary] 總覽
> 使用 Dataview 插件自動彙總所有收錄的 GitHub 專案

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

## 依分類瀏覽

```dataview
TABLE WITHOUT ID
  file.link AS "專案",
  stars AS "Stars",
  language AS "語言",
  status AS "狀態"
FROM "Repos"
GROUP BY category
SORT stars DESC
```

## 待回顧的專案

```dataview
TABLE
  stars AS "Stars",
  category AS "分類",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE status = "to-review"
SORT stars DESC
```

## 本週新增

```dataview
TABLE
  stars AS "Stars",
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

---

> [!info] 使用說明
> 此頁面需要安裝 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件才能正常顯示。
> 安裝方式：設定 → 社群插件 → 搜尋 Dataview → 安裝並啟用
