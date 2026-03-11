---
tags:
  - concept
aliases:
  - "UEFI"
---

# UEFI

## 是什麼

統一可擴展韌體介面（Unified Extensible Firmware Interface），取代傳統 BIOS 的現代韌體標準。負責開機流程、硬體初始化和 OS 載入。UEFI Secure Boot 增加了開機安全性但也帶來相容性挑戰。

## 快速統計

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.file.outlinks?.some(l => l.path === dv.current().file.path);
});
const total = pages.length;
const cats = {};
const langs = {};
for (const p of pages) {
  const c = p.category || "其他";
  cats[c] = (cats[c] || 0) + 1;
  const l = p.language || "Other";
  langs[l] = (langs[l] || 0) + 1;
}
const topCat = Object.entries(cats).sort((a,b) => b[1]-a[1])[0];
const topLang = Object.entries(langs).sort((a,b) => b[1]-a[1])[0];
const avgStars = total > 0 ? Math.round(pages.array().reduce((s,p) => s + (p.stars||0), 0) / total) : 0;
dv.paragraph(`**${total}** 個相關專案 · 平均 ${avgStars.toLocaleString()} stars`);
if (topCat) dv.paragraph(`主要分類：**${topCat[0]}**（${topCat[1]} 個）· 主要語言：**${topLang?.[0] || 'N/A'}**（${topLang?.[1] || 0} 個）`);
```

## 核心問題

- [ ] 這個技術解決的根本問題是什麼？
- [ ] 目前最成熟的實作方案是？
- [ ] 什麼情況下不該用這個技術？

## 相關專案

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  install_complexity AS "難度",
  status AS "狀態",
  use_case AS "用途"
FROM "Repos"
WHERE contains(file.outlinks, this.file.link)
SORT stars DESC
```

## 相關概念

```dataviewjs
const thisLinks = dv.current().file.inlinks;
const related = new Set();
for (const link of thisLinks) {
  const page = dv.page(link.path);
  if (!page || !page.file?.outlinks) continue;
  for (const out of page.file.outlinks) {
    const target = dv.page(out.path);
    if (target?.tags?.includes("concept") && target.file.path !== dv.current().file.path) {
      related.add(target.file.link);
    }
  }
}
if (related.size > 0) {
  dv.list([...related]);
} else {
  dv.paragraph("_暫無相關概念_");
}
```


## 週趨勢

> [!abstract] 這個概念在不同週次的出現頻率

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.file.outlinks?.some(l => l.path === dv.current().file.path);
});
const weekCount = {};
for (const p of pages) {
  const w = p.week || "unknown";
  weekCount[w] = (weekCount[w] || 0) + 1;
}
const sorted = Object.entries(weekCount).sort((a, b) => b[0].localeCompare(a[0]));
if (sorted.length > 0) {
  dv.table(["週次", "出現次數", "視覺化"], sorted.map(([w, c]) => {
    return [w, c, "█".repeat(c) + "░".repeat(Math.max(0, 5 - c))];
  }));
} else {
  dv.paragraph("_尚無時間趨勢資料_");
}
```

## 學習資源

_關鍵文章、教學、論文..._

## 我的理解

_自己的話重新解釋，寫下使用心得和判斷_
