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
| [[MOC - 生產力]] | 生產力 |
| [[MOC - 遊戲]] | 遊戲 |
| [[MOC - 其他]] | 其他分類 |
| [[Discovery]] | 探索 — 隱藏寶石、風險警示、盲點分析 |
| [[Comparison]] | 同分類橫向對比 + 決策矩陣 + 四象限分析 |
| [[Tech-Radar.canvas\|Tech Radar]] | 四環評估看板（Adopt/Trial/Assess/Hold）|

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

## 你的工具箱

> [!tip]- 你正在追蹤的專案（reading / tried / integrated）

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.status && p.status !== "to-review" && p.status !== "archived";
});
if (pages.length > 0) {
  const byStatus = { integrated: [], tried: [], reading: [] };
  for (const p of pages) {
    const s = p.status || "";
    if (byStatus[s]) byStatus[s].push(p);
    else byStatus[s] = [p];
  }
  for (const [status, repos] of Object.entries(byStatus)) {
    if (repos.length === 0) continue;
    dv.header(4, status.charAt(0).toUpperCase() + status.slice(1));
    dv.paragraph(repos.map(p => {
      const rating = (p.my_rating || 0) > 0 ? " \u2605" + p.my_rating : "";
      return p.file.link + rating;
    }).join(" / "));
  }
} else {
  dv.paragraph("將專案改為 reading 狀態就會出現在這裡。");
}
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

## 今日待複習

> [!tip] 間隔複習排程：到期的專案會自動出現在這裡

```dataview
TABLE
  next_review AS "複習日",
  stars_per_day AS "Stars/天",
  category AS "分類",
  priority AS "優先級"
FROM "Repos"
WHERE next_review AND date(next_review) <= date(today) AND status != "archived"
SORT priority DESC, date(next_review) ASC
LIMIT 8
```

## 複習預報（未來 14 天）

> [!abstract] 未來兩週的複習工作量預覽

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.next_review && p.status !== "archived");
const today = new Date();
today.setHours(0,0,0,0);
const forecast = [];
for (let i = 0; i < 14; i++) {
  const d = new Date(today);
  d.setDate(d.getDate() + i);
  const key = d.toISOString().split("T")[0];
  const due = pages.where(p => {
    const nr = new Date(p.next_review.toString());
    nr.setHours(0,0,0,0);
    return nr.getTime() === d.getTime();
  });
  forecast.push({ date: key, count: due.length, repos: due });
}
const overdue = pages.where(p => new Date(p.next_review.toString()) < today).length;
if (overdue > 0) dv.paragraph(`**${overdue}** 個已逾期`);
const line = forecast.map(f => {
  const day = f.date.slice(5);
  const bar = f.count === 0 ? "." : f.count <= 2 ? "o" : f.count <= 5 ? "O" : "#";
  return `${day}:${bar}(${f.count})`;
}).join(" ");
dv.paragraph(line + "\n\n. = 0 | o = 1-2 | O = 3-5 | # = 6+");
const busiest = forecast.reduce((a, b) => a.count > b.count ? a : b);
if (busiest.count > 0) dv.paragraph(`最忙碌：**${busiest.date.slice(5)}** 有 ${busiest.count} 個待複習`);
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

## 趨勢速報

> [!abstract]- 加速/降溫中的專案（基於 star_history）

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.star_history && typeof p.star_history === "string" && p.star_history.includes(",") && p.status !== "archived");
const trends = [];
for (const p of pages) {
  const entries = p.star_history.split(",").map(e => { const [d, s] = e.trim().split(":"); return { date: d, stars: parseInt(s) || 0 }; }).filter(e => e.date && e.stars > 0);
  if (entries.length < 2) continue;
  const mid = Math.floor(entries.length / 2);
  const fh = entries.slice(0, mid), sh = entries.slice(mid);
  const rF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
  const rS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
  const ratio = rF > 0 ? rS / rF : rS > 0 ? 2 : 1;
  if (ratio > 1.3 || ratio < 0.7) {
    trends.push({ link: p.file.link, trend: ratio > 1.3 ? "Rising" : "Cooling", ratio: Math.round(ratio * 100) / 100, cat: p.category });
  }
}
if (trends.length > 0) {
  const rising = trends.filter(t => t.trend === "Rising").sort((a,b) => b.ratio - a.ratio).slice(0, 3);
  const cooling = trends.filter(t => t.trend === "Cooling").sort((a,b) => a.ratio - b.ratio).slice(0, 3);
  if (rising.length > 0) dv.paragraph("Rising: " + rising.map(t => `${t.link} (${t.ratio}x)`).join(" · "));
  if (cooling.length > 0) dv.paragraph("Cooling: " + cooling.map(t => `${t.link} (${t.ratio}x)`).join(" · "));
} else {
  dv.paragraph("需要更多 star_history 資料才能偵測趨勢。");
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

## 決策分數 Top 5

> [!abstract] 綜合評估最高的專案 — 值得優先投入時間

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const scored = [];
for (const p of pages) {
  let score = 0;
  const spd = p.stars_per_day || 0;
  score += Math.min(25, Math.round(spd / 40 * 25));
  score += p.install_complexity === "easy" ? 20 : p.install_complexity === "medium" ? 12 : 5;
  const created = p.created ? new Date(p.created.toString()) : null;
  const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
  score += age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
  score += (p.forks || 0) > 200 ? 20 : (p.forks || 0) > 50 ? 15 : (p.forks || 0) > 10 ? 10 : 5;
  const lic = (p.license || "").toString();
  score += ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic) ? 15 : lic && lic !== "N/A" ? 8 : 0;
  const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
  scored.push({ link: p.file.link, score, grade, cat: p.category, spd, install: p.install_complexity });
}
scored.sort((a, b) => b.score - a.score);
if (scored.length > 0) {
  dv.table(
    ["專案", "分數", "等級", "Stars/天", "安裝"],
    scored.slice(0, 5).map(s => [s.link, s.score + "/100", s.grade, s.spd, s.install])
  );
}
```

## 需要你的決策

> [!warning] 高價值但尚未給出結論的專案

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  if (p.status === "archived") return false;
  const highValue = (p.stars_per_day || 0) >= 50 || (p.my_rating || 0) >= 4 || p.priority === "high";
  const noDecision = (!p.verdict || p.verdict === "") && (!p.ring || p.ring === "" || p.ring === "assess");
  return highValue && noDecision;
}).sort(p => p.stars_per_day || 0, "desc").limit(5);
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "分類", "狀態"],
    pages.map(p => [p.file.link, p.stars_per_day || 0, p.category || "", p.status || "?"])
  );
} else {
  dv.paragraph("所有高價值專案都已評估完畢！");
}
```

## 社群健康快報

> [!abstract]- Issue 解決率和文件品質一覽

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const withICR = pages.where(p => p.issue_close_rate >= 0);
const withReadme = pages.where(p => p.readme_length > 0);
const parts = [];
if (withICR.length > 0) {
  const avgICR = Math.round(withICR.map(p => p.issue_close_rate).array().reduce((a,b) => a+b, 0) / withICR.length);
  const top = withICR.sort(p => p.issue_close_rate, "desc").first();
  parts.push(`Issue 解決率平均 **${avgICR}%**（最佳：${top.file.link} ${top.issue_close_rate}%）`);
}
if (withReadme.length > 0) {
  const goodDoc = withReadme.where(p => p.readme_length > 5000).length;
  const poorDoc = withReadme.where(p => p.readme_length < 500).length;
  parts.push(`README 品質：**${goodDoc}** 個優秀 / **${poorDoc}** 個薄弱`);
}
const withBF = pages.where(p => (p.bus_factor || 0) > 0);
if (withBF.length > 0) {
  const solo = withBF.where(p => p.bus_factor === 1).length;
  const pct = Math.round(solo / withBF.length * 100);
  parts.push(`Bus Factor：**${solo}** 個 Solo 專案（${pct}%）`);
}
if (parts.length > 0) {
  dv.paragraph(parts.join("\n\n"));
} else {
  dv.paragraph("_需要更多 issue_close_rate 和 readme_length 資料_");
}
```

## 興趣雷達

> [!tip] 你最感興趣的專案（依三維評分排序）

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.status !== "archived" && (p.score_interest || 0) > 0;
}).sort(p => (p.score_interest || 0) * 2 + (p.score_confidence || 0) + (p.score_risk || 0), "desc").limit(5);
if (pages.length > 0) {
  dv.table(
    ["專案", "興趣", "信心", "風險", "Stars/天", "分類"],
    pages.map(p => [p.file.link, p.score_interest, p.score_confidence, p.score_risk, p.stars_per_day || 0, p.category || ""])
  );
} else {
  dv.paragraph("打開任一專案筆記，在「快速評估」區填寫信心/興趣/風險 1-5 分。");
}
```

## 分類健康度

> [!abstract]- 各分類的專案數量和回顧進度

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const cats = {};
for (const p of pages) {
  const cat = p.category || "其他";
  if (!cats[cat]) cats[cat] = { total: 0, reviewed: 0, rated: 0, avgSpd: 0, totalSpd: 0 };
  cats[cat].total++;
  if (p.status !== "to-review") cats[cat].reviewed++;
  if (p.my_rating > 0) cats[cat].rated++;
  cats[cat].totalSpd += (p.stars_per_day || 0);
}
const rows = Object.entries(cats)
  .sort((a, b) => b[1].total - a[1].total)
  .map(([cat, d]) => {
    const pct = Math.round((d.reviewed / d.total) * 100);
    const avgSpd = Math.round(d.totalSpd / d.total);
    const bar = "█".repeat(Math.round(pct / 5)) + "░".repeat(20 - Math.round(pct / 5));
    return [cat, d.total, `${pct}% ${bar}`, d.rated, avgSpd];
  });
dv.table(["分類", "專案數", "回顧進度", "已評分", "平均 Stars/天"], rows);
```

## 概念熱度 Top 10

> [!abstract] 被最多專案引用的技術概念

```dataviewjs
const concepts = dv.pages('"Concepts"').where(p => p.tags?.includes("concept") && !p.tags?.includes("redirect"));
const ranked = [];
for (const c of concepts) {
  const refs = dv.pages('"Repos"').where(p => p.file.outlinks?.some(l => l.path === c.file.path)).length;
  if (refs > 0) ranked.push({ link: c.file.link, refs });
}
ranked.sort((a, b) => b.refs - a.refs);
if (ranked.length > 0) {
  dv.table(
    ["概念", "引用數", "熱度"],
    ranked.slice(0, 10).map(r => [
      r.link, r.refs,
      "█".repeat(Math.min(r.refs, 15)) + "░".repeat(Math.max(0, 15 - r.refs))
    ])
  );
}
```

## 收錄活動圖

> [!abstract]- 最近 30 天的收錄密度

```dataviewjs
const pages = dv.pages('"Repos"');
const today = new Date();
const dayMap = {};
for (let i = 29; i >= 0; i--) {
  const d = new Date(today);
  d.setDate(d.getDate() - i);
  const key = d.toISOString().split("T")[0];
  dayMap[key] = 0;
}
for (const p of pages) {
  const fs = p.first_seen?.toString();
  if (fs && dayMap[fs] !== undefined) dayMap[fs]++;
}
const dates = Object.keys(dayMap).sort();
const max = Math.max(...Object.values(dayMap), 1);
const rows = [];
for (let week = 0; week < Math.ceil(dates.length / 7); week++) {
  const weekDates = dates.slice(week * 7, (week + 1) * 7);
  const cells = weekDates.map(d => {
    const count = dayMap[d];
    const level = count === 0 ? "." : count <= 2 ? "o" : count <= 5 ? "O" : "#";
    return level;
  });
  const label = weekDates[0]?.slice(5) || "";
  rows.push(label + " " + cells.join(" "));
}
dv.paragraph(rows.join("\n") + "\n\n. = 0 | o = 1-2 | O = 3-5 | # = 6+");
```

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
>
> **使用流程**：
> 1. 每日查看「今日待複習」，花 5 分鐘快速掃描
> 2. 有興趣的專案修改 frontmatter: `status: reading`
> 3. 試用後填寫「個人筆記 → 試用記錄」
> 4. 評估完更新 `ring`（adopt/trial/hold）、`verdict` 和 `ring_history`
> 5. 低價值專案會在 14 天後自動封存
> 6. 用 [[Tech-Radar]] Canvas 視覺化追蹤採用決策
