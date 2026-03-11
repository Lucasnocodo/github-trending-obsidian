---
tags:
  - navigation
cssclasses:
  - comparison
---

# Comparison Matrix

> 同分類 repos 的橫向對比，幫助快速做出技術選型決策

## 分類概覽

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const cats = {};
for (const p of pages) {
  const cat = p.category || "其他";
  if (!cats[cat]) cats[cat] = { count: 0, rated: 0, avgStars: 0, totalStars: 0, langs: {} };
  cats[cat].count++;
  cats[cat].totalStars += (p.stars || 0);
  if (p.my_rating > 0) cats[cat].rated++;
  const lang = p.language || "Other";
  cats[cat].langs[lang] = (cats[cat].langs[lang] || 0) + 1;
}

dv.table(
  ["分類", "專案數", "已評分", "平均 Stars", "主要語言"],
  Object.entries(cats)
    .sort((a, b) => b[1].count - a[1].count)
    .map(([cat, d]) => {
      const topLang = Object.entries(d.langs).sort((a, b) => b[1] - a[1])[0];
      return [
        cat,
        d.count,
        d.rated,
        Math.round(d.totalStars / d.count).toLocaleString(),
        topLang ? `${topLang[0]} (${topLang[1]})` : "N/A"
      ];
    })
);
```

## AI/ML 對比

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.category === "AI/ML" && p.status !== "archived")
  .sort(p => p.stars_per_day, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "語言", "子分類", "安裝", "授權", "評分", "用途"],
    pages.map(p => [
      p.file.link,
      p.stars_per_day || 0,
      p.language || "N/A",
      p.subcategory || "",
      p.install_complexity || "N/A",
      p.license || "N/A",
      p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評",
      (p.use_case || "").slice(0, 60)
    ])
  );
} else {
  dv.paragraph("_此分類無專案_");
}
```

## 開發工具 對比

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.category === "開發工具" && p.status !== "archived")
  .sort(p => p.stars_per_day, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "語言", "子分類", "安裝", "授權", "評分", "用途"],
    pages.map(p => [
      p.file.link,
      p.stars_per_day || 0,
      p.language || "N/A",
      p.subcategory || "",
      p.install_complexity || "N/A",
      p.license || "N/A",
      p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評",
      (p.use_case || "").slice(0, 60)
    ])
  );
} else {
  dv.paragraph("_此分類無專案_");
}
```

## CLI 工具 對比

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.category === "CLI 工具" && p.status !== "archived")
  .sort(p => p.stars_per_day, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "語言", "子分類", "安裝", "授權", "評分", "用途"],
    pages.map(p => [
      p.file.link,
      p.stars_per_day || 0,
      p.language || "N/A",
      p.subcategory || "",
      p.install_complexity || "N/A",
      p.license || "N/A",
      p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評",
      (p.use_case || "").slice(0, 60)
    ])
  );
} else {
  dv.paragraph("_此分類無專案_");
}
```

## 安全 對比

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.category === "安全" && p.status !== "archived")
  .sort(p => p.stars_per_day, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "語言", "子分類", "安裝", "授權", "評分", "用途"],
    pages.map(p => [
      p.file.link,
      p.stars_per_day || 0,
      p.language || "N/A",
      p.subcategory || "",
      p.install_complexity || "N/A",
      p.license || "N/A",
      p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評",
      (p.use_case || "").slice(0, 60)
    ])
  );
} else {
  dv.paragraph("_此分類無專案_");
}
```

## 子分類交叉分析

> [!abstract] 找到同子分類的競品，方便做技術選型

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && p.subcategory);
const subs = {};
for (const p of pages) {
  const key = `${p.category} > ${p.subcategory}`;
  if (!subs[key]) subs[key] = [];
  subs[key].push(p);
}

// 只顯示有 2+ 個 repo 的子分類（有比較價值）
const comparableSubs = Object.entries(subs)
  .filter(([_, repos]) => repos.length >= 2)
  .sort((a, b) => b[1].length - a[1].length);

if (comparableSubs.length > 0) {
  for (const [sub, repos] of comparableSubs) {
    dv.header(3, `${sub} (${repos.length} 個)`);
    dv.table(
      ["專案", "Stars", "Stars/天", "安裝", "語言", "用途"],
      repos
        .sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0))
        .map(p => [
          p.file.link,
          p.stars || 0,
          p.stars_per_day || 0,
          p.install_complexity || "N/A",
          p.language || "N/A",
          (p.use_case || "").slice(0, 50)
        ])
    );
  }
} else {
  dv.paragraph("目前沒有足夠的同子分類專案可供比較。收錄更多 repo 後這裡會自動出現。");
}
```

## 安裝難度 vs Stars/天 散點圖

> [!info] 快速找到高價值低門檻的專案（左上角最佳）

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const buckets = { easy: [], medium: [], hard: [] };
for (const p of pages) {
  const complexity = p.install_complexity || "medium";
  if (buckets[complexity]) buckets[complexity].push(p);
}

for (const [level, label] of [["easy", "Easy Install"], ["medium", "Medium Install"], ["hard", "Hard Install"]]) {
  const repos = buckets[level]?.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
  if (repos?.length > 0) {
    dv.header(4, `${label} (${repos.length} 個)`);
    dv.table(
      ["專案", "Stars/天", "分類", "語言"],
      repos.slice(0, 5).map(p => [p.file.link, p.stars_per_day || 0, p.category || "", p.language || ""])
    );
  }
}
```

## 授權分析

> [!tip] 商業使用時授權很重要

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const licenses = {};
for (const p of pages) {
  const lic = p.license || "N/A";
  if (!licenses[lic]) licenses[lic] = { count: 0, commercial: false };
  licenses[lic].count++;
}
// 標記商業友好授權
const commercial = new Set(["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "Unlicense"]);
for (const [lic, data] of Object.entries(licenses)) {
  data.commercial = commercial.has(lic);
}

dv.table(
  ["授權", "數量", "商業友好"],
  Object.entries(licenses)
    .sort((a, b) => b[1].count - a[1].count)
    .map(([lic, d]) => [lic, d.count, d.commercial ? "Yes" : "No"])
);
```

---

> [!info] 使用方式
> 1. 從分類表格中找到感興趣的領域
> 2. 橫向比較同分類的專案
> 3. 子分類交叉分析幫你找到直接競品
> 4. 搭配 [[Triage]] 進行狀態管理
