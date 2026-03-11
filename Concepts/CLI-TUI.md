---
tags:
  - concept
aliases:
  - "CLI/TUI"
---

# CLI/TUI

## 是什麼

CLI（命令列介面）就是你在終端機輸入指令操作程式；TUI（終端使用者介面）則更進一步，用鍵盤在終端機裡做出類似 GUI 的視覺化介面，像 htop、vim 那種感覺。這類工具適合開發者工具、伺服器管理、或需要自動化腳本整合的場景，不用開瀏覽器也能高效操作。你會注意到這個領域，通常是在做 DevTools、內部工具，或想讓自己的 CLI 工具更好用的時候。

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

## 學習資源

_關鍵文章、教學、論文..._

## 我的理解

_自己的話重新解釋，寫下使用心得和判斷_
