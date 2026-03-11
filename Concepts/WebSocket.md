---
tags:
  - concept
aliases:
  - "WebSocket"
---

# WebSocket

## 是什麼

WebSocket 是建立在 HTTP 握手之上的全雙工協議，一旦連線建立，伺服器和客戶端都可以主動送出訊息，不用像傳統 HTTP 那樣客戶端每次都得發 request 才能收到回應。這解決了即時應用（聊天、遊戲、股票行情、協作編輯）中「伺服器要主動通知客戶端」的核心問題。如果你的應用需要低延遲的雙向通訊，WebSocket 通常是第一個考慮的選項。

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
  status AS "狀態"
FROM "Repos"
WHERE contains(file.outlinks, this.file.link)
SORT stars DESC
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

## 分類交叉

> [!abstract] 哪些分類引用了這個概念

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.file.outlinks?.some(l => l.path === dv.current().file.path);
});
const catMap = {};
for (const p of pages) {
  const c = p.category || "其他";
  if (!catMap[c]) catMap[c] = [];
  catMap[c].push(p);
}
const sorted = Object.entries(catMap).sort((a, b) => b[1].length - a[1].length);
if (sorted.length > 0) {
  dv.table(
    ["分類", "數量", "代表專案"],
    sorted.map(([cat, repos]) => {
      repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
      return [cat, repos.length, repos.slice(0, 2).map(r => r.file.link).join(", ")];
    })
  );
}
```

## 精選推薦

> [!tip] 引用此概念的最佳評分專案

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.my_rating > 0 && p.file.outlinks?.some(l => l.path === dv.current().file.path);
}).sort(p => p.my_rating, "desc").limit(5);
if (pages.length > 0) {
  dv.table(
    ["專案", "評分", "Stars", "用途"],
    pages.map(p => [
      p.file.link,
      "★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating),
      p.stars,
      (p.use_case || "").slice(0, 40)
    ])
  );
} else {
  dv.paragraph("_尚無已評分的相關專案。試用並評分後會出現在這裡。_");
}
```

## 學習資源

_關鍵文章、教學、論文..._

## 我的理解

_自己的話重新解釋，寫下使用心得和判斷_
