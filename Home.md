---
tags:
  - home
cssclasses:
  - home
---

# GitHub Trending Vault

> 自動追蹤 GitHub 上最熱門的新專案，每日更新，用 Obsidian 整理和回顧。

## 快速導覽

| 頁面 | 說明 |
| --- | --- |
| [[Dashboard]] | 完整數據儀表板 — 統計、排行、分類 |
| [[MOC - AI-ML]] | AI/ML 相關專案 |
| [[MOC - 開發工具]] | 開發者工具 |
| [[MOC - Web 應用]] | Web 應用程式 |
| [[MOC - CLI 工具]] | 命令列工具 |
| [[MOC - 安全]] | 安全相關 |
| [[MOC - 資料科學]] | 資料科學 |

## 最新收錄

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  language AS "語言"
FROM "Repos"
SORT first_seen DESC
LIMIT 10
```

## 待回顧（優先）

```dataview
TABLE
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
LIMIT 5
```

## 已評分的精選

```dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  category AS "分類",
  status AS "狀態"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC
LIMIT 10
```

## 回顧進度

```dataviewjs
const pages = dv.pages('"Repos"');
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;
dv.paragraph(`${reviewed}/${total} 已回顧 (${pct}%)`);
dv.paragraph(`<progress value="${reviewed}" max="${total}" style="width:100%"></progress>`);
```

---

> [!info] 關於這個 Vault
> 由 [GitHub Actions](https://github.com/Lucasnocodo/github-trending-obsidian) 每日自動更新。
> 使用 GitHub Models API (gpt-4o-mini) 產生中文摘要和分析。
