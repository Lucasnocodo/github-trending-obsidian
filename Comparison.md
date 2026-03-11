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

## 各分類對比

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const cats = {};
for (const p of pages) {
  const cat = p.category || "其他";
  if (!cats[cat]) cats[cat] = [];
  cats[cat].push(p);
}

// 依數量排序，自動為每個分類生成比較表
for (const [cat, repos] of Object.entries(cats).sort((a, b) => b[1].length - a[1].length)) {
  if (repos.length === 0) continue;
  dv.header(3, `${cat} (${repos.length} 個)`);
  dv.table(
    ["專案", "Stars/天", "語言", "子分類", "安裝", "授權", "評分", "用途"],
    repos
      .sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0))
      .map(p => [
        p.file.link,
        p.stars_per_day || 0,
        p.language || "N/A",
        p.subcategory || "",
        p.install_complexity || "N/A",
        p.license || "N/A",
        p.my_rating > 0 ? ("\u2605".repeat(p.my_rating) + "\u2606".repeat(5 - p.my_rating)) : "\u672a\u8a55",
        (p.use_case || "").slice(0, 60)
      ])
  );
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

## 語言 vs 分類 熱力圖

> [!abstract] 哪些語言在哪些分類最常出現

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const matrix = {};
const allCats = new Set();
const allLangs = new Set();
for (const p of pages) {
  const lang = p.language || "Other";
  const cat = p.category || "其他";
  allLangs.add(lang);
  allCats.add(cat);
  const key = `${lang}|${cat}`;
  matrix[key] = (matrix[key] || 0) + 1;
}
const topLangs = [...allLangs].sort((a, b) => {
  const cA = pages.where(p => (p.language || "Other") === a).length;
  const cB = pages.where(p => (p.language || "Other") === b).length;
  return cB - cA;
}).slice(0, 8);
const topCats = [...allCats].sort((a, b) => {
  const cA = pages.where(p => (p.category || "其他") === a).length;
  const cB = pages.where(p => (p.category || "其他") === b).length;
  return cB - cA;
}).slice(0, 8);
if (topLangs.length > 1 && topCats.length > 1) {
  dv.table(
    ["語言 \\ 分類", ...topCats],
    topLangs.map(lang => [
      `**${lang}**`,
      ...topCats.map(cat => {
        const c = matrix[`${lang}|${cat}`] || 0;
        return c > 0 ? c : "";
      })
    ])
  );
}
```

## 成熟度分佈

> [!abstract] 專案的開發階段分佈

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const stages = {};
for (const p of pages) {
  // 從 pushed_at 推斷活躍度
  const pushedAt = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
  const daysSincePush = pushedAt ? Math.floor((Date.now() - pushedAt.getTime()) / 86400000) : null;
  const created = p.created ? new Date(p.created.toString()) : null;
  const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;

  let stage;
  if (age !== null && age <= 7) stage = "Brand New (<1w)";
  else if (age !== null && age <= 30) stage = "Early (<1m)";
  else if (age !== null && age <= 180) stage = "Growing (1-6m)";
  else stage = "Established (6m+)";

  if (!stages[stage]) stages[stage] = [];
  stages[stage].push(p);
}

const order = ["Brand New (<1w)", "Early (<1m)", "Growing (1-6m)", "Established (6m+)"];
dv.table(
  ["階段", "數量", "代表專案"],
  order
    .filter(s => stages[s]?.length > 0)
    .map(s => {
      const repos = stages[s].sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
      return [s, repos.length, repos.slice(0, 3).map(r => r.file.link).join(", ")];
    })
);
```

## Owner 影響力

> [!abstract] 哪些開發者/組織的專案最常出現在 Trending

```dataviewjs
const pages = dv.pages('"Repos"');
const owners = {};
for (const p of pages) {
  const o = p.owner || "unknown";
  if (!owners[o]) owners[o] = { count: 0, totalStars: 0, cats: new Set(), repos: [] };
  owners[o].count++;
  owners[o].totalStars += (p.stars || 0);
  if (p.category) owners[o].cats.add(p.category);
  owners[o].repos.push(p);
}
const multi = Object.entries(owners)
  .filter(([_, d]) => d.count >= 2)
  .sort((a, b) => b[1].totalStars - a[1].totalStars);
if (multi.length > 0) {
  dv.table(
    ["Owner", "專案數", "總 Stars", "涵蓋分類", "代表專案"],
    multi.map(([name, d]) => [
      name, d.count, d.totalStars.toLocaleString(),
      [...d.cats].join(", "),
      d.repos.sort((a, b) => (b.stars || 0) - (a.stars || 0)).slice(0, 2).map(r => r.file.link).join(", ")
    ])
  );
} else {
  dv.paragraph("目前沒有重複出現的 Owner。收錄更多 repo 後這裡會自動出現。");
}
```

## 貢獻者風險總覽

> [!warning] Solo 專案風險：只有 1 位貢獻者的熱門專案

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && (p.contributor_count || 0) <= 1 && (p.stars_per_day || 0) >= 10);
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "分類", "安裝", "授權", "維護狀態"],
    pages.sort(p => p.stars_per_day, "desc").map(p => {
      const pushed = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
      const days = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
      const maint = days === null ? "?" : days <= 7 ? "Active" : days <= 30 ? "Moderate" : "Stale";
      return [p.file.link, p.stars_per_day || 0, p.category || "", p.install_complexity || "?", p.license || "N/A", maint];
    })
  );
} else {
  dv.paragraph("目前沒有高熱度的 solo 專案。");
}
```

## 安裝難度 vs 評分

> [!abstract] 已評分專案的安裝難度分佈

```dataview
TABLE
  install_complexity AS "安裝",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  category AS "分類",
  use_case AS "用途"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC, install_complexity ASC
```

## 決策矩陣（自動評分）

> [!abstract] 綜合熱度、易用性、成熟度、社群、授權自動計算 0-100 分

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const scored = [];
for (const p of pages) {
  let score = 0;
  const spd = p.stars_per_day || 0;
  const heat = Math.min(25, Math.round(spd / 40 * 25));
  score += heat;
  const inst = p.install_complexity === "easy" ? 20 : p.install_complexity === "medium" ? 12 : 5;
  score += inst;
  const created = p.created ? new Date(p.created.toString()) : null;
  const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
  const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
  score += mat;
  const forks = p.forks || 0;
  const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
  score += comm;
  const lic = p.license || "";
  const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
  const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
  score += licScore;
  const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
  scored.push([p.file.link, grade, score, heat, inst, mat, comm, licScore, p.category || ""]);
}
scored.sort((a, b) => b[2] - a[2]);
dv.table(
  ["專案", "等級", "總分", "熱度/25", "易用/20", "成熟/20", "社群/20", "授權/15", "分類"],
  scored.slice(0, 20)
);
```

## 新興技術偵測

> [!abstract] 近 7 天新出現的技術棧組合

```dataviewjs
const recent = dv.pages('"Repos"').where(p => {
  if (!p.first_seen) return false;
  return (Date.now() - new Date(p.first_seen.toString()).getTime()) < 7 * 86400000;
});
const langCatPairs = {};
for (const p of recent) {
  const key = `${p.language || "?"} + ${p.category || "?"}`;
  if (!langCatPairs[key]) langCatPairs[key] = [];
  langCatPairs[key].push(p);
}
const sorted = Object.entries(langCatPairs).sort((a, b) => b[1].length - a[1].length);
if (sorted.length > 0) {
  dv.table(
    ["組合", "專案數", "代表專案", "平均 Stars/天"],
    sorted.slice(0, 10).map(([key, repos]) => {
      const avgSpd = Math.round(repos.reduce((s, p) => s + (p.stars_per_day || 0), 0) / repos.length);
      return [key, repos.length, repos.slice(0, 2).map(p => p.file.link).join(", "), avgSpd];
    })
  );
} else {
  dv.paragraph("本週尚無新收錄。");
}
```

## 速度 vs 成熟度四象限

> [!abstract] 快速找到「既熱門又穩定」的專案（右上角最佳）

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const quadrants = {
  "快速+成熟": { desc: "Stars/天 >= 50 且 > 30 天", repos: [] },
  "快速+新生": { desc: "Stars/天 >= 50 且 <= 30 天", repos: [] },
  "穩定+成熟": { desc: "Stars/天 < 50 且 > 30 天", repos: [] },
  "穩定+新生": { desc: "Stars/天 < 50 且 <= 30 天", repos: [] },
};
for (const p of pages) {
  const spd = p.stars_per_day || 0;
  const created = p.created ? new Date(p.created.toString()) : null;
  const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
  const fast = spd >= 50;
  const mature = age > 30;
  const key = fast ? (mature ? "快速+成熟" : "快速+新生") : (mature ? "穩定+成熟" : "穩定+新生");
  quadrants[key].repos.push(p);
}
for (const [name, q] of Object.entries(quadrants)) {
  if (q.repos.length === 0) continue;
  q.repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
  dv.header(4, `${name} (${q.repos.length})`);
  dv.table(
    ["專案", "Stars/天", "年齡(天)", "分類", "安裝"],
    q.repos.slice(0, 5).map(p => {
      const age = p.created ? Math.floor((Date.now() - new Date(p.created.toString()).getTime()) / 86400000) : "?";
      return [p.file.link, p.stars_per_day || 0, age, p.category || "", p.install_complexity || "?"];
    })
  );
}
```

## 技術棧分佈

> [!abstract] 各語言在不同安裝難度下的分佈

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const langInstall = {};
for (const p of pages) {
  const lang = (p.language || "Other").toString();
  const inst = (p.install_complexity || "unknown").toString();
  if (!langInstall[lang]) langInstall[lang] = { easy: 0, medium: 0, hard: 0, total: 0 };
  langInstall[lang][inst] = (langInstall[lang][inst] || 0) + 1;
  langInstall[lang].total++;
}
const sorted = Object.entries(langInstall).sort((a, b) => b[1].total - a[1].total).slice(0, 10);
if (sorted.length > 0) {
  dv.table(
    ["語言", "總數", "Easy", "Medium", "Hard", "Easy 比例"],
    sorted.map(([lang, d]) => [
      lang, d.total, d.easy || 0, d.medium || 0, d.hard || 0,
      d.total > 0 ? Math.round((d.easy || 0) / d.total * 100) + "%" : "0%"
    ])
  );
}
```

---

> [!info] 使用方式
> 1. 從分類表格中找到感興趣的領域
> 2. 橫向比較同分類的專案
> 3. 子分類交叉分析幫你找到直接競品
> 4. 四象限圖找出「既熱門又穩定」的專案
> 5. 決策矩陣幫你找出綜合評分最高的專案
> 6. 貢獻者風險總覽識別 bus factor 風險
> 7. 技術棧分佈了解語言生態
> 8. 搭配 [[Triage]] 進行狀態管理
