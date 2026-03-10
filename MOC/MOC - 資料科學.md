---
tags:
  - moc
  - 資料科學
---

# MOC - 資料科學

> 所有分類為「資料科學」的 GitHub Trending 專案

## 專案列表

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "資料科學"
SORT stars DESC
```

## 待回顧

```dataview
LIST
FROM "Repos"
WHERE category = "資料科學" AND status = "to-review"
SORT stars DESC
```
