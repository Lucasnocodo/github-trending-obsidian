---
tags:
  - moc
  - 其他
---

# MOC - 其他

> 所有分類為「其他」的 GitHub Trending 專案

## 專案列表

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "其他"
SORT stars DESC
```

## 待回顧

```dataview
LIST
FROM "Repos"
WHERE category = "其他" AND status = "to-review"
SORT stars DESC
```
