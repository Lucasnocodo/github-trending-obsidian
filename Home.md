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
| [[Triage]] | 快速分流 — 看板式工作流 |
| [[MOC - AI-ML]] | AI/ML 相關專案 |
| [[MOC - 開發工具]] | 開發者工具 |
| [[MOC - Web 應用]] | Web 應用程式 |
| [[MOC - CLI 工具]] | 命令列工具 |
| [[MOC - 安全]] | 安全相關 |
| [[MOC - 資料科學]] | 資料科學 |
| [[MOC - 教學資源]] | 教學資源 |
| [[MOC - 基礎設施]] | 基礎設施 |
| [[Comparison]] | 同分類橫向對比矩陣 |
| [[Tech-Radar.canvas\|Tech Radar]] | 四環評估看板 |

## 統計快照

```dataviewjs
const pages = dv.pages('"Repos"');
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const tried = pages.where(p => p.status === "tried" || p.status === "integrated").length;
const rated = pages.where(p => p.my_rating > 0).length;
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

const cats = {};
for (const p of pages) {
  const c = p.category || "其他";
  cats[c] = (cats[c] || 0) + 1;
}
const topCat = Object.entries(cats).sort((a,b) => b[1] - a[1])[0];

dv.paragraph(`**${total}** 個專案 · 回顧 **${reviewed}** (${pct}%) · 試用 **${tried}** · 評分 **${rated}**`);
dv.paragraph(`<progress value="${reviewed}" max="${total}" style="width:100%"></progress>`);
if (topCat) dv.paragraph(`最多分類：**${topCat[0]}** (${topCat[1]} 個)`);
```

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

## 本週亮點

```dataviewjs
const thisWeek = dv.pages('"Repos"')
  .where(p => {
    if (!p.first_seen) return false;
    const d = new Date(p.first_seen.toString());
    return (Date.now() - d.getTime()) < 7 * 86400000;
  })
  .sort(p => p.stars_per_day, "desc")
  .limit(3);

if (thisWeek.length > 0) {
  for (const p of thisWeek) {
    const desc = p.use_case || p.description || "";
    dv.paragraph(`**${p.file.link}** — ${p.stars_per_day} stars/day · ${p.category || ""}\n> ${desc.slice(0, 100)}`);
  }
} else {
  dv.paragraph("本週尚無新收錄。");
}
```

## 快速篩選

> [!tip]- 立即可用的專案（easy install + 高 stars）
> ```dataview
> TABLE stars AS "Stars", category AS "分類", language AS "語言"
> FROM "Repos"
> WHERE install_complexity = "easy" AND status = "to-review"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!tip]- 商業友好授權（MIT/Apache）
> ```dataview
> TABLE stars AS "Stars", license AS "授權", category AS "分類"
> FROM "Repos"
> WHERE license = "MIT" OR license = "Apache-2.0"
> SORT stars DESC
> LIMIT 5
> ```

## 最近的週報

```dataview
LIST
FROM "Weekly"
SORT file.name DESC
LIMIT 4
```

## 月報

```dataview
LIST
FROM "Monthly"
SORT file.name DESC
LIMIT 3
```

---

> [!info] 關於這個 Vault
> 由 [GitHub Actions](https://github.com/Lucasnocodo/github-trending-obsidian) 每日自動更新。
> 使用 GitHub Models API (gpt-4o-mini) 產生中文摘要和分析。
