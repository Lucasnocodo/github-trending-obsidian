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

---

> [!tip] 如何使用
> 1. 從 **Inbox** 開始，快速瀏覽每個專案的用途
> 2. 有興趣的改 `status: reading`，不相關的改 `status: archived`
> 3. 試用後改 `status: tried`，給予 `my_rating` 1-5 分
> 4. 決定長期使用的改 `status: integrated`
