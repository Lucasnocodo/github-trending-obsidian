---
tags:
  - moc
  - 基礎設施
---

# MOC - 基礎設施

> 所有分類為「基礎設施」的 GitHub Trending 專案

## 總覽

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施");
const active = pages.where(p => p.status !== "archived");
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const rated = pages.where(p => p.my_rating > 0);
const avgStars = total > 0 ? Math.round(pages.array().reduce((s, p) => s + (p.stars || 0), 0) / total) : 0;
const avgSpd = active.length > 0 ? Math.round(active.array().reduce((s, p) => s + (p.stars_per_day || 0), 0) / active.length) : 0;
const maxSpd = active.length > 0 ? Math.max(...active.array().map(p => p.stars_per_day || 0)) : 0;
const avgRating = rated.length > 0 ? (rated.array().reduce((s, p) => s + p.my_rating, 0) / rated.length).toFixed(1) : "N/A";

dv.paragraph(`**${total}** 個專案 · 已回顧 ${reviewed}/${total} · 已評分 ${rated.length}`);
dv.paragraph(`平均 Stars: ${avgStars.toLocaleString()} · 平均 Stars/天: ${avgSpd} · 最快: ${maxSpd}/天${rated.length > 0 ? " · 平均評分: " + avgRating + "/5" : ""}`);

// 本週新增（MOC 健康指標）
const recent = pages.where(p => {
  if (!p.first_seen) return false;
  return (Date.now() - new Date(p.first_seen.toString()).getTime()) < 7 * 86400000;
});
if (recent.length > 0) {
  dv.paragraph(`**本週新增**: ${recent.map(p => p.file.link).join(", ")}`);
}
```

## 依狀態分群

```dataview
TABLE WITHOUT ID
  status AS "狀態",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "基礎設施"
GROUP BY status
SORT length(rows) DESC
```

## 專案列表（依 Stars 排序）

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  install_complexity AS "安裝",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "基礎設施"
SORT stars DESC
```

## 依語言分群

```dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "基礎設施"
GROUP BY language
SORT length(rows) DESC
```

## 待回顧（優先）

```dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  install_complexity AS "安裝"
FROM "Repos"
WHERE category = "基礎設施" AND status = "to-review"
SORT stars_per_day DESC
```

## 依子分類

```dataview
TABLE WITHOUT ID
  subcategory AS "子分類",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "基礎設施"
GROUP BY subcategory
SORT length(rows) DESC
```

## 決策矩陣

> [!tip] 快速比較：哪個最適合你的情境？

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived");
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "安裝", "授權", "維護", "評分", "子分類"],
    pages.sort(p => p.stars_per_day, "desc").map(p => {
      const pushedAt = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
      const daysSincePush = pushedAt ? Math.floor((Date.now() - pushedAt.getTime()) / 86400000) : null;
      const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
      return [
        p.file.link,
        p.stars_per_day || 0,
        p.install_complexity || "?",
        p.license || "N/A",
        maint,
        p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評",
        p.subcategory || ""
      ];
    })
  );
} else {
  dv.paragraph("_此分類無專案_");
}
```

## 決策分數排名

> [!abstract] 綜合評分（熱度+易用+成熟+社群+授權 = 0-100）

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived");
const scored = [];
for (const p of pages) {
  let score = 0;
  const spd = p.stars_per_day || 0;
  score += Math.min(25, Math.round(spd / 40 * 25));
  score += p.install_complexity === "easy" ? 20 : p.install_complexity === "medium" ? 12 : 5;
  const created = p.created ? new Date(p.created.toString()) : null;
  const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
  score += age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
  const forks = p.forks || 0;
  score += forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
  const lic = p.license || "";
  score += ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic) ? 15 : lic && lic !== "N/A" ? 8 : 0;
  const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
  scored.push([p.file.link, grade, score, p.stars_per_day || 0, p.install_complexity || "?", p.subcategory || ""]);
}
scored.sort((a, b) => b[2] - a[2]);
if (scored.length > 0) {
  dv.table(["專案", "等級", "分數", "Stars/天", "安裝", "子分類"], scored);
} else {
  dv.paragraph("_此分類無專案_");
}
```

## 子分類推薦

> [!abstract] 每個子分類中的最佳候選

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived" && p.subcategory);
const subs = {};
for (const p of pages) {
  const sub = p.subcategory;
  if (!subs[sub]) subs[sub] = [];
  subs[sub].push(p);
}

const rows = [];
for (const [sub, repos] of Object.entries(subs)) {
  // 以 stars_per_day 排序，取最高的
  repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
  const best = repos[0];
  rows.push([
    sub,
    repos.length,
    best.file.link,
    best.stars_per_day || 0,
    best.install_complexity || "?",
    (best.use_case || "").slice(0, 50)
  ]);
}
if (rows.length > 0) {
  dv.table(["子分類", "專案數", "最熱門", "Stars/天", "安裝", "用途"], rows.sort((a, b) => b[1] - a[1]));
} else {
  dv.paragraph("_尚無子分類資料_");
}
```

## 相關概念

```dataviewjs
const repos = dv.pages('"Repos"').where(p => p.category === "基礎設施");
const concepts = new Map();
for (const r of repos) {
  for (const link of (r.file.outlinks || [])) {
    const target = dv.page(link.path);
    if (target?.tags?.includes("concept")) {
      const name = target.file.name;
      concepts.set(name, (concepts.get(name) || 0) + 1);
    }
  }
}
const sorted = [...concepts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
if (sorted.length > 0) {
  dv.table(["概念", "相關專案數"], sorted.map(([name, count]) => [dv.fileLink(name), count]));
} else {
  dv.paragraph("_尚無相關概念連結_");
}
```

## Tech Radar 分佈

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.ring);
const rings = { adopt: 0, trial: 0, assess: 0, hold: 0 };
for (const p of pages) {
  const ring = (p.ring || "assess").toLowerCase();
  if (rings[ring] !== undefined) rings[ring]++;
}
const total = Object.values(rings).reduce((s, c) => s + c, 0);
if (total > 0) {
  const labels = { adopt: "Adopt", trial: "Trial", assess: "Assess", hold: "Hold" };
  dv.table(
    ["Ring", "數量", "佔比"],
    Object.entries(rings)
      .filter(([_, c]) => c > 0)
      .map(([ring, count]) => {
        const pct = Math.round((count / total) * 100);
        return [labels[ring], count, pct + "%"];
      })
  );
} else {
  dv.paragraph("_此分類尚無 Tech Radar 評估_");
}
```

## 參與度分析

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived");
const engagementMap = {};
for (const p of pages) {
  const e = p.engagement || "unknown";
  engagementMap[e] = (engagementMap[e] || 0) + 1;
}
const total = pages.length;
if (total > 0) {
  dv.table(
    ["參與度", "數量", "佔比"],
    Object.entries(engagementMap)
      .sort((a, b) => b[1] - a[1])
      .map(([e, c]) => [e, c, Math.round((c / total) * 100) + "%"])
  );
}
```

## 授權分佈

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived");
const licMap = {};
const commercial = new Set(["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "Unlicense"]);
for (const p of pages) {
  const lic = p.license || "N/A";
  if (!licMap[lic]) licMap[lic] = { count: 0, commercial: commercial.has(lic) };
  licMap[lic].count++;
}
const sorted = Object.entries(licMap).sort((a, b) => b[1].count - a[1].count);
if (sorted.length > 0) {
  dv.table(
    ["授權", "數量", "商業友好"],
    sorted.map(([lic, d]) => [lic, d.count, d.commercial ? "Yes" : "No"])
  );
}
```

## 成長速度分佈

> [!abstract] 此分類的專案成長快慢

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived");
const bands = [
  { label: "Viral (1000+/天)", min: 1000, max: Infinity, repos: [] },
  { label: "Hot (100-999/天)", min: 100, max: 999, repos: [] },
  { label: "Growing (10-99/天)", min: 10, max: 99, repos: [] },
  { label: "Steady (<10/天)", min: 0, max: 9, repos: [] },
];
for (const p of pages) {
  const spd = p.stars_per_day || 0;
  for (const b of bands) {
    if (spd >= b.min && spd <= b.max) { b.repos.push(p); break; }
  }
}
const total = pages.length;
if (total > 0) {
  dv.table(
    ["速度區間", "數量", "代表專案"],
    bands.filter(b => b.repos.length > 0).map(b => {
      const top = b.repos.sort((a,b) => (b.stars_per_day||0) - (a.stars_per_day||0)).slice(0, 2).map(r => r.file.link).join(", ");
      return [b.label, b.repos.length, top];
    })
  );
  const avgSpd = Math.round(pages.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / total);
  dv.paragraph(`**分類平均** ${avgSpd} stars/天`);
} else {
  dv.paragraph("_此分類無專案_");
}
```

## 需要關注的專案

> [!warning] 收錄 3+ 天仍未接觸

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  if (p.category !== "基礎設施" || p.status !== "to-review" || !p.first_seen) return false;
  return (Date.now() - new Date(p.first_seen.toString()).getTime()) >= 3 * 86400000;
}).sort(p => p.stars_per_day, "desc").limit(10);
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "收錄日", "安裝"],
    pages.map(p => [p.file.link, p.stars_per_day || 0, p.first_seen, p.install_complexity || "?"])
  );
} else {
  dv.paragraph("所有專案都有被接觸。");
}
```

## 貢獻者風險

> [!abstract] 低 bus factor 的專案可能有維護風險

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "基礎設施" && p.status !== "archived" && (p.contributor_count || 0) <= 1);
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars", "貢獻者", "維護狀態"],
    pages.sort(p => p.stars, "desc").map(p => {
      const pushed = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
      const days = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
      const maint = days === null ? "?" : days <= 7 ? "Active" : days <= 30 ? "Moderate" : "Stale";
      return [p.file.link, p.stars || 0, p.contributor_count || "?", maint];
    })
  );
} else {
  dv.paragraph("此分類所有專案都有多位貢獻者。");
}
```

## 每週趨勢

```dataview
TABLE WITHOUT ID
  week AS "週次",
  length(rows) AS "新增數",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "基礎設施"
GROUP BY week
SORT week DESC
```
