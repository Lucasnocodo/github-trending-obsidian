---
tags:
  - moc
  - 教學資源
---

# MOC - 教學資源

> 所有分類為「教學資源」的 GitHub Trending 專案

## 依狀態分群

```dataview
TABLE WITHOUT ID
  file.link AS "專案",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  stars AS "Stars",
  language AS "語言"
FROM "Repos"
WHERE category = "教學資源"
GROUP BY status
```

## 專案列表

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  install_complexity AS "安裝",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "教學資源"
SORT stars DESC
```

## 待回顧

```dataview
LIST
FROM "Repos"
WHERE category = "教學資源" AND status = "to-review"
SORT stars_per_day DESC
```
