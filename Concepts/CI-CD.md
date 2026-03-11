---
tags:
  - concept
aliases:
  - "CI/CD"
---

# CI/CD

## 是什麼

CI（持續整合）是每次有人推程式碼就自動跑測試，確保沒有東西壞掉；CD（持續部署）是測試通過後自動把程式部署到環境上，不用人工手動發版。這套流程解決了「只有在我電腦上才能跑」和「發版要一堆人手動操作」的問題。你會需要它，是當團隊超過一個人，或你想每天多次安全地把新功能推上線的時候。

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
