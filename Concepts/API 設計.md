---
tags:
  - concept
aliases:
  - "API 設計"
---

# API 設計

> 這個概念與以下 GitHub Trending 專案相關

## 相關專案

```dataview
TABLE
  stars AS "Stars",
  category AS "分類",
  language AS "語言",
  status AS "狀態"
FROM "Repos"
WHERE contains(file.outlinks, this.file.link) OR contains(meta(file.frontmatter), "API 設計")
SORT stars DESC
```

## 筆記

_在此記錄關於「API 設計」的理解、學習心得、相關資源..._
