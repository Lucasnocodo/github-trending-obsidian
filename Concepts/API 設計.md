---
tags:
  - concept
aliases:
  - "API 設計"
---

# API 設計

## 是什麼

API 設計就是決定兩個系統或服務之間怎麼溝通——用什麼端點、傳什麼資料格式、錯誤怎麼回報。設計得好的 API 讓呼叫方直覺好用，不需要看文件就猜得到怎麼用；設計得差的會讓整合方一直踩坑。REST、GraphQL、gRPC 是常見的風格選擇，你在做後端服務、開放平台或微服務之間的溝通時都會碰到這個問題。

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
