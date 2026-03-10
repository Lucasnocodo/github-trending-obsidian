---
tags:
  - moc
  - web_應用
---

# MOC - Web 應用

> 所有分類為「Web 應用」的 GitHub Trending 專案

## 專案列表

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "Web 應用"
SORT stars DESC
```

## 待回顧

```dataview
LIST
FROM "Repos"
WHERE category = "Web 應用" AND status = "to-review"
SORT stars DESC
```
