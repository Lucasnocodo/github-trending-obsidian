---
tags:
  - dashboard
cssclasses:
  - dashboard
---

# GitHub Trending Dashboard

> [!summary] 總覽
> 使用 Dataview 插件自動彙總所有收錄的 GitHub 專案

## 回顧進度

```dataviewjs
const pages = dv.pages('"Repos"');
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const rated = pages.where(p => p.my_rating > 0).length;
const tried = pages.where(p => p.status === "tried").length;
const integrated = pages.where(p => p.status === "integrated").length;
const archived = pages.where(p => p.status === "archived").length;
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

dv.paragraph(`**${total}** 個專案 · 已回顧 **${reviewed}** (${pct}%) · 已評分 **${rated}** · 已試用 **${tried}** · 已整合 **${integrated}** · 已封存 **${archived}`);
dv.paragraph(`<progress value="${reviewed}" max="${total}" style="width:100%"></progress>`);
```

## 今日行動建議

```dataviewjs
const pages = dv.pages('"Repos"');
const toReview = pages.where(p => p.status === "to-review");
const highPri = toReview.where(p => p.priority === "high");
const easy = toReview.where(p => p.install_complexity === "easy");
const actions = [];

if (highPri.length > 0) {
  const top = highPri.sort(p => p.stars_per_day, "desc").first();
  actions.push(`**優先回顧** ${top.file.link}（${top.stars_per_day} stars/天，priority: high）`);
}
if (easy.length > 0) {
  const pick = easy.sort(p => p.stars_per_day, "desc").first();
  if (!highPri.length || pick.file.name !== highPri.sort(p => p.stars_per_day, "desc").first()?.file.name) {
    actions.push(`**快速試用** ${pick.file.link}（easy install，${pick.stars_per_day} stars/天）`);
  }
}
const stale = pages.where(p => {
  if (!p.last_reviewed || p.status === "archived") return false;
  const d = new Date(p.last_reviewed.toString());
  return (Date.now() - d.getTime()) > 14 * 86400000 && p.my_rating > 3;
});
if (stale.length > 0) {
  actions.push(`**重新檢視** ${stale.first().file.link}（高評分但超過 14 天未回顧）`);
}
if (actions.length > 0) {
  dv.list(actions);
} else {
  dv.paragraph("所有專案都已處理完畢！");
}
```

## 今日待複習

> [!tip] 根據間隔複習排程，以下專案該回顧了

```dataview
TABLE
  next_review AS "預定複習日",
  stars_per_day AS "Stars/天",
  category AS "分類",
  use_case AS "用途",
  priority AS "優先級"
FROM "Repos"
WHERE next_review AND date(next_review) <= date(today) AND status != "archived"
SORT date(next_review) ASC
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
const rows = [];
for (const f of forecast) {
  const day = f.date.slice(5);
  const bar = "\u2588".repeat(Math.min(f.count, 10)) + "\u2591".repeat(Math.max(0, 10 - f.count));
  const names = f.repos.sort(p => p.stars_per_day, "desc").limit(3).map(p => p.file.link).join(", ");
  rows.push([day, f.count, bar, names]);
}
dv.table(["日期", "數量", "負載", "代表專案"], rows);
const totalDue = forecast.reduce((s, f) => s + f.count, 0);
dv.paragraph(`未來兩週共 **${totalDue}** 個待複習（含逾期 ${overdue}）`);
```

## 參與度分析

> [!info] Fork/Star 比率反映社群實際使用程度

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.engagement);
const groups = { high: [], medium: [], low: [] };
for (const p of pages) {
  const e = p.engagement?.toString() || "low";
  if (groups[e]) groups[e].push(p);
}
dv.paragraph(`**High** (fork 比 >=30%): ${groups.high.length} · **Medium** (10-30%): ${groups.medium.length} · **Low** (<10%): ${groups.low.length}`);
if (groups.high.length > 0) {
  dv.header(4, "高參與度專案");
  dv.table(
    ["專案", "Stars", "Forks", "分類"],
    groups.high.sort((a,b) => (b.stars||0) - (a.stars||0)).map(p => [p.file.link, p.stars, p.forks, p.category])
  );
}
```

## 收錄時間軸

```dataview
CALENDAR first_seen
FROM "Repos"
```

## 依狀態分群

```dataview
TABLE WITHOUT ID
  status AS "狀態",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY status
SORT length(rows) DESC
```

## Tech Radar 總覽

```dataview
TABLE WITHOUT ID
  ring AS "Ring",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE ring != null AND ring != ""
GROUP BY ring
SORT choice(ring, "adopt", 1, choice(ring, "trial", 2, choice(ring, "assess", 3, 4))) ASC
```

## 有結論的專案

```dataview
TABLE
  verdict AS "結論",
  ring AS "Ring",
  ring_history AS "歷程",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  category AS "分類"
FROM "Repos"
WHERE verdict != "" AND verdict != null
SORT my_rating DESC
```

## 需要填空

> [!warning] 高關注度專案尚未給出結論 — 值得優先評估

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  if (p.status === "archived") return false;
  const hasVerdict = p.verdict && p.verdict !== "";
  const hasRing = p.ring && p.ring !== "" && p.ring !== "assess";
  const highValue = (p.stars_per_day || 0) >= 50 || (p.my_rating || 0) >= 4 || p.priority === "high";
  return highValue && (!hasVerdict || !hasRing);
});
if (pages.length > 0) {
  pages.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
  dv.paragraph(`**${pages.length}** 個高價值專案等待你的決策`);
  dv.table(
    ["專案", "Stars/天", "評分", "狀態", "缺少"],
    pages.limit(10).map(p => {
      const missing = [];
      if (!p.verdict || p.verdict === "") missing.push("verdict");
      if (!p.ring || p.ring === "" || p.ring === "assess") missing.push("ring");
      if (!p.my_rating || p.my_rating === 0) missing.push("rating");
      return [
        p.file.link,
        p.stars_per_day || 0,
        p.my_rating > 0 ? ("\u2605".repeat(p.my_rating) + "\u2606".repeat(5 - p.my_rating)) : "未評",
        p.status || "?",
        missing.join(", ")
      ];
    })
  );
} else {
  dv.paragraph("所有高價值專案都已完成評估！");
}
```

## Ring 異動追蹤

> [!abstract] 最近的 Tech Radar 狀態變更

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.ring_history && typeof p.ring_history === "string" && p.ring_history.includes(","));
if (pages.length > 0) {
  const changes = [];
  for (const p of pages) {
    const entries = p.ring_history.split(",").map(e => e.trim());
    if (entries.length >= 2) {
      const prev = entries[entries.length - 2].split("@");
      const curr = entries[entries.length - 1].split("@");
      const prevRing = prev[0] || "?";
      const currRing = curr[0] || "?";
      const date = curr[1] || "?";
      const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
      const direction = (ringOrder[currRing] || 0) > (ringOrder[prevRing] || 0) ? "UP" : (ringOrder[currRing] || 0) < (ringOrder[prevRing] || 0) ? "DOWN" : "SAME";
      changes.push({ link: p.file.link, from: prevRing, to: currRing, date, direction, stars: p.stars_per_day || 0 });
    }
  }
  changes.sort((a, b) => b.date.localeCompare(a.date));
  if (changes.length > 0) {
    dv.table(
      ["專案", "異動", "方向", "日期", "Stars/天"],
      changes.slice(0, 10).map(c => [
        c.link,
        c.from + " -> " + c.to,
        c.direction === "UP" ? "Promoted" : c.direction === "DOWN" ? "Demoted" : "Lateral",
        c.date,
        c.stars
      ])
    );
  }
} else {
  dv.paragraph("尚無 ring 異動紀錄。更新專案的 ring 時請追加 ring_history。");
}
```

## 趨勢方向

> [!abstract] 基於 star_history 偵測哪些專案正在加速或降溫

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.star_history && typeof p.star_history === "string" && p.star_history.includes(","));
if (pages.length > 0) {
  const trends = [];
  for (const p of pages) {
    const entries = p.star_history.split(",").map(e => {
      const [d, s] = e.trim().split(":");
      return { date: d, stars: parseInt(s) || 0 };
    }).filter(e => e.date && e.stars > 0);
    if (entries.length < 2) continue;
    const mid = Math.floor(entries.length / 2);
    const firstHalf = entries.slice(0, mid);
    const secondHalf = entries.slice(mid);
    const avgFirst = firstHalf.length > 1 ? (firstHalf[firstHalf.length-1].stars - firstHalf[0].stars) / Math.max(1, (new Date(firstHalf[firstHalf.length-1].date) - new Date(firstHalf[0].date)) / 86400000) : 0;
    const avgSecond = secondHalf.length > 1 ? (secondHalf[secondHalf.length-1].stars - secondHalf[0].stars) / Math.max(1, (new Date(secondHalf[secondHalf.length-1].date) - new Date(secondHalf[0].date)) / 86400000) : 0;
    const ratio = avgFirst > 0 ? avgSecond / avgFirst : avgSecond > 0 ? 2 : 1;
    const trend = ratio > 1.3 ? "Rising" : ratio < 0.7 ? "Cooling" : "Stable";
    trends.push({ link: p.file.link, trend, ratio: Math.round(ratio * 100) / 100, recentRate: Math.round(avgSecond), cat: p.category, spd: p.stars_per_day });
  }
  trends.sort((a, b) => b.ratio - a.ratio);
  const rising = trends.filter(t => t.trend === "Rising");
  const cooling = trends.filter(t => t.trend === "Cooling");
  const stable = trends.filter(t => t.trend === "Stable");
  dv.paragraph(`Rising **${rising.length}** · Stable **${stable.length}** · Cooling **${cooling.length}**`);
  if (rising.length > 0) {
    dv.header(4, "Rising（加速成長）");
    dv.table(["專案", "加速比", "近期增速", "Stars/天", "分類"],
      rising.slice(0, 5).map(t => [t.link, t.ratio + "x", t.recentRate + "/天", t.spd, t.cat]));
  }
  if (cooling.length > 0) {
    dv.header(4, "Cooling（降溫中）");
    dv.table(["專案", "減速比", "近期增速", "Stars/天", "分類"],
      cooling.slice(0, 5).map(t => [t.link, t.ratio + "x", t.recentRate + "/天", t.spd, t.cat]));
  }
} else {
  dv.paragraph("需要多次 refresh 才能累積 star_history 趨勢資料。");
}
```

## 爆紅專案 Top 15

```dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝難度",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分"
FROM "Repos"
SORT stars_per_day DESC
LIMIT 15
```

## 已評分的專案

```dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  stars AS "Stars",
  category AS "分類",
  status AS "狀態",
  install_complexity AS "安裝"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC
```

## 待回顧（優先順序）

> [!tip] 回顧建議
> Stars/天 最高的專案最值得優先回顧。use_case 欄位幫你快速判斷是否相關。

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝",
  use_case AS "解決什麼問題",
  priority AS "優先級"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
```

## 依優先級分群

```dataview
TABLE WITHOUT ID
  priority AS "優先級",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE status != "archived"
GROUP BY priority
SORT choice(priority, "high", 1, choice(priority, "medium", 2, 3)) ASC
```

## 需要重新檢視（超過 30 天未回顧）

```dataview
TABLE
  last_reviewed AS "最後回顧",
  status AS "狀態",
  stars AS "Stars"
FROM "Repos"
WHERE last_reviewed AND date(today) - date(last_reviewed) > dur(30 days)
  AND status != "archived"
SORT last_reviewed ASC
```

## 依分類瀏覽

```dataview
TABLE WITHOUT ID
  category AS "分類",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars",
  round(average(rows.stars_per_day), 0) AS "平均 Stars/天",
  max(rows.stars_per_day) AS "最快",
  round(sum(rows.my_rating) / length(rows.where(r => r.my_rating > 0)), 1) AS "平均評分"
FROM "Repos"
GROUP BY category
SORT length(rows) DESC
```

## 依子分類瀏覽

> [!tip]- 展開查看細分類

```dataview
TABLE WITHOUT ID
  category AS "主分類",
  subcategory AS "子分類",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE subcategory != ""
GROUP BY category + " / " + subcategory
SORT length(rows) DESC
```

## 依語言瀏覽

```dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY language
SORT length(rows) DESC
```

## 安裝難度分佈

```dataview
TABLE WITHOUT ID
  install_complexity AS "難度",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY install_complexity
SORT choice(install_complexity, "easy", 1, choice(install_complexity, "medium", 2, 3)) ASC
```

## 本週新增

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝"
FROM "Repos"
WHERE date(first_seen) >= date(today) - dur(7 days)
SORT stars DESC
```

## 每週收錄量

```dataview
TABLE WITHOUT ID
  week AS "週次",
  length(rows) AS "收錄數",
  sum(rows.stars) AS "總 Stars",
  max(rows.stars_per_day) AS "最快 Stars/天"
FROM "Repos"
GROUP BY week
SORT week DESC
```

## 多次上榜

> [!tip] 這些專案反覆出現在 GitHub Trending，值得留意

```dataview
TABLE
  appearances AS "上榜次數",
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  priority AS "優先級"
FROM "Repos"
WHERE appearances > 1
SORT appearances DESC
```

## 持續熱門

> [!tip] 收錄超過 7 天仍在活躍開發的專案

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => {
    if (!p.first_seen || !p.pushed_at) return false;
    const daysSinceSeen = (new Date() - new Date(p.first_seen?.toString())) / 86400000;
    const daysSincePush = (new Date() - new Date(p.pushed_at?.toString())) / 86400000;
    return daysSinceSeen > 7 && daysSincePush < 7 && (p.stars_per_day || 0) > 50;
  })
  .sort(p => p.stars, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "收錄日期", "最後推送", "分類"],
    pages.map(p => [p.file.link, p.stars_per_day, p.first_seen, p.pushed_at, p.category])
  );
} else {
  dv.paragraph("目前沒有符合條件的持續熱門專案（需追蹤超過 7 天）");
}
```

## Star 增長追蹤

> [!abstract] 有歷史資料的專案 Star 變化

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.star_history && typeof p.star_history === "string" && p.star_history.includes(","));
if (pages.length > 0) {
  const rows = pages.sort(p => p.stars_per_day, "desc").limit(10).map(p => {
    const entries = p.star_history.split(",").map(e => { const [d, s] = e.split(":"); return { date: d, stars: parseInt(s) || 0 }; });
    const first = entries[0], last = entries[entries.length - 1];
    const growth = last.stars - first.stars;
    const days = Math.max(1, (new Date(last.date) - new Date(first.date)) / 86400000);
    return [p.file.link, first.stars.toLocaleString(), last.stars.toLocaleString(), "+" + growth.toLocaleString(), Math.round(growth / days) + "/天", entries.length + " 筆"];
  });
  dv.table(["專案", "首次 Stars", "最新 Stars", "增長", "增速", "資料點"], rows);
} else {
  dv.paragraph("尚無歷史資料。多次出現或 refresh 的專案會累積 star_history。");
}
```

## 分類趨勢

```dataviewjs
const pages = dv.pages('"Repos"');
const catData = {};
for (const p of pages) {
  const cat = p.category || "其他";
  catData[cat] = (catData[cat] || 0) + 1;
}
const sorted = Object.entries(catData).sort((a,b) => b[1] - a[1]).slice(0, 10);
dv.table(
  ["分類", "數量", "佔比", "視覺化"],
  sorted.map(([cat, count]) => {
    const pct = Math.round((count / pages.length) * 100);
    const bar = "█".repeat(Math.round(pct / 5)) + "░".repeat(20 - Math.round(pct / 5));
    return [cat, count, pct + "%", bar];
  })
);
```

## 分類圓餅圖

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const cats = {};
for (const p of pages) {
  const c = p.category || "其他";
  cats[c] = (cats[c] || 0) + 1;
}
const lines = ['pie title 分類分佈'];
for (const [cat, count] of Object.entries(cats).sort((a,b) => b[1] - a[1])) {
  lines.push('    "' + cat + '" : ' + count);
}
dv.paragraph('```mermaid\n' + lines.join('\n') + '\n```');
```

## 子分類聚集

> [!abstract] 同一子分類的多個專案代表該方向正被密集探索

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && p.subcategory);
const subs = {};
for (const p of pages) {
  const key = p.category + " > " + p.subcategory;
  if (!subs[key]) subs[key] = [];
  subs[key].push(p);
}
const hot = Object.entries(subs).filter(([_, r]) => r.length >= 2).sort((a, b) => b[1].length - a[1].length);
if (hot.length > 0) {
  dv.table(
    ["子分類", "數量", "最熱門", "Stars/天", "專案"],
    hot.map(([sub, repos]) => {
      repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
      return [
        sub,
        repos.length,
        repos[0].file.link,
        repos[0].stars_per_day || 0,
        repos.slice(1).map(r => r.file.link).join(", ")
      ];
    })
  );
} else {
  dv.paragraph("_需收錄更多專案才能看到子分類聚集_");
}
```

## 月度趨勢

```dataviewjs
const pages = dv.pages('"Repos"');
const months = {};
for (const p of pages) {
  const fs = p.first_seen?.toString();
  if (!fs) continue;
  const m = fs.slice(0, 7);
  if (!months[m]) months[m] = { count: 0, stars: 0, rated: 0 };
  months[m].count++;
  months[m].stars += (p.stars || 0);
  if (p.my_rating > 0) months[m].rated++;
}
const sorted = Object.entries(months).sort((a, b) => b[0].localeCompare(a[0]));
dv.table(
  ["月份", "收錄數", "總 Stars", "已評分", "平均 Stars"],
  sorted.map(([m, d]) => [
    dv.fileLink(m, false, m),
    d.count,
    d.stars.toLocaleString(),
    d.rated,
    Math.round(d.stars / d.count).toLocaleString()
  ])
);
```

## 授權分佈

```dataview
TABLE WITHOUT ID
  license AS "授權",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY license
SORT length(rows) DESC
```

## Easy Install 專案

> [!tip] 立即可試
> 安裝複雜度為 easy 的專案，一行指令就能開始使用

```dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  language AS "語言",
  status AS "狀態"
FROM "Repos"
WHERE install_complexity = "easy"
SORT stars DESC
LIMIT 10
```

## 速覽清單

> [!tip] 快速掃描
> 一眼看完每個專案的重點

```dataviewjs
const pages = dv.pages('"Repos"')
  .sort(p => p.stars_per_day || 0, "desc");

const rows = [];
for (const p of pages) {
  const desc = p.aliases?.[2] || p.description || "";
  const install = p.install_complexity === "easy" ? "Easy" : p.install_complexity === "medium" ? "Mid" : "Hard";
  // 從 pushed_at 計算維護狀態
  let maint = "-";
  if (p.pushed_at) {
    const days = Math.floor((Date.now() - new Date(p.pushed_at.toString()).getTime()) / 86400000);
    maint = days <= 7 ? "Active" : days <= 30 ? "OK" : days <= 90 ? "Slow" : "Stale";
  }
  rows.push([
    p.file.link,
    (p.stars_per_day || 0) + "/d",
    install,
    maint,
    p.category || "",
    desc.slice(0, 40) + (desc.length > 40 ? "..." : "")
  ]);
}
dv.table(["專案", "速度", "安裝", "維護", "分類", "一句話"], rows);
```

## 熱門概念（被最多專案引用）

```dataviewjs
const pages = dv.pages('"Repos"');
const conceptCounts = {};
for (const p of pages) {
  const extMatch = p.file.outlinks?.filter(l => {
    const target = dv.page(l.path);
    return target?.tags?.includes("concept");
  }) || [];
  for (const link of extMatch) {
    const name = link.path.split("/").pop();
    conceptCounts[name] = (conceptCounts[name] || 0) + 1;
  }
}
const sorted = Object.entries(conceptCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);
if (sorted.length > 0) {
  dv.table(
    ["概念", "引用次數", "視覺化"],
    sorted.map(([name, count]) => {
      const bar = "█".repeat(count) + "░".repeat(Math.max(0, 20 - count));
      return [dv.fileLink("Concepts/" + name, false, name), count, bar];
    })
  );
}
```

## 孤立筆記（缺少連結）

> [!warning] 這些筆記沒有跟其他筆記建立連結，Graph View 中會是孤島

```dataviewjs
const pages = dv.pages('"Repos"');
const orphans = pages.where(p => {
  const outlinks = p.file.outlinks?.length || 0;
  const inlinks = p.file.inlinks?.length || 0;
  return (outlinks + inlinks) < 3;
});
if (orphans.length > 0) {
  dv.table(
    ["專案", "Stars", "分類", "外連結", "內連結"],
    orphans.sort(p => p.stars, "desc").limit(10).map(p => [
      p.file.link,
      p.stars,
      p.category,
      p.file.outlinks?.length || 0,
      p.file.inlinks?.length || 0
    ])
  );
} else {
  dv.paragraph("所有筆記都有足夠的連結！");
}
```

## 筆記完整度

> [!info] 檢查哪些筆記缺少重要區塊

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const checks = [
  { name: "成熟度評估", pattern: "## 成熟度評估" },
  { name: "已知陷阱", pattern: "## 已知陷阱" },
  { name: "使用情境適合度", pattern: "## 使用情境適合度" },
  { name: "替代方案決策", pattern: "## 替代方案決策" },
  { name: "技術深入分析", pattern: "## 技術深入分析" },
  { name: "新手體驗", pattern: "## 新手體驗" },
  { name: "架構分析", pattern: "## 架構分析" },
  { name: "開發動態", pattern: "## 開發動態" },
  { name: "熱門議題", pattern: "## 熱門議題" },
  { name: "生態系整合", pattern: "## 生態系整合" },
  { name: "歷史脈絡", pattern: "## 歷史脈絡" },
  { name: "團隊採用指南", pattern: "## 團隊採用指南" },
  { name: "相對成長速度", pattern: "## 相對成長速度" },
];
const incomplete = [];
for (const p of pages) {
  const content = await dv.io.load(p.file.path);
  const missing = checks.filter(c => !content.includes(c.pattern)).map(c => c.name);
  if (missing.length > 0) {
    incomplete.push({ link: p.file.link, stars: p.stars, missing: missing.join(", "), count: missing.length });
  }
}
if (incomplete.length > 0) {
  incomplete.sort((a, b) => b.count - a.count);
  dv.paragraph(`**${incomplete.length}** 筆記有缺失區塊（共 ${pages.length} 非封存筆記）`);
  dv.table(
    ["專案", "Stars", "缺失區塊", "缺失數"],
    incomplete.slice(0, 15).map(i => [i.link, i.stars, i.missing, i.count])
  );
} else {
  dv.paragraph("所有筆記都有完整的區塊！");
}
```

## 評估完整度儀表板

> [!abstract] 每個專案的評估進度 — 幫助你找出該優先填寫的筆記

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const results = [];
for (const p of pages) {
  const content = await dv.io.load(p.file.path);
  let done = 0, total = 8;
  // Step 1: 已讀（status != to-review）
  if (p.status && p.status !== "to-review") done++;
  // Step 2: 已評分
  if (p.my_rating > 0) done++;
  // Step 3: 有 verdict
  if (p.verdict && p.verdict !== "") done++;
  // Step 4: ring 不是 assess
  if (p.ring && p.ring !== "" && p.ring !== "assess") done++;
  // Step 5: 有成熟度評估
  if (content.includes("## 成熟度評估")) done++;
  // Step 6: 有替代方案決策
  if (content.includes("## 替代方案決策")) done++;
  // Step 7: 有生態系整合
  if (content.includes("## 生態系整合")) done++;
  // Step 8: 有團隊採用指南
  if (content.includes("## 團隊採用指南")) done++;
  const pct = Math.round((done / total) * 100);
  results.push({ link: p.file.link, done, total, pct, spd: p.stars_per_day || 0, status: p.status });
}
results.sort((a, b) => {
  // 高關注度但低完整度優先
  const scoreA = (100 - a.pct) * Math.log2((a.spd || 1) + 1);
  const scoreB = (100 - b.pct) * Math.log2((b.spd || 1) + 1);
  return scoreB - scoreA;
});
const avgPct = results.length > 0 ? Math.round(results.reduce((s, r) => s + r.pct, 0) / results.length) : 0;
const full = results.filter(r => r.pct === 100).length;
dv.paragraph(`**整體完整度** ${avgPct}% · **完全評估** ${full}/${results.length}`);
const bar = pct => {
  const filled = Math.round(pct / 5);
  return "\u2588".repeat(filled) + "\u2591".repeat(20 - filled) + " " + pct + "%";
};
dv.table(
  ["專案", "完整度", "Stars/天", "狀態", "進度"],
  results.filter(r => r.pct < 100).slice(0, 15).map(r => [
    r.link, r.done + "/" + r.total, r.spd, r.status, bar(r.pct)
  ])
);
```

## 主觀三維評分總覽

> [!abstract] 信心 / 興趣 / 風險 — 幫助你辨識高價值目標

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.status !== "archived" && ((p.score_confidence || 0) + (p.score_interest || 0) + (p.score_risk || 0)) > 0;
});
if (pages.length === 0) {
  dv.paragraph("尚無專案填寫三維評分。在筆記的「快速評估」區填寫信心/興趣/風險 1-5 分，並更新 frontmatter 的 score_confidence / score_interest / score_risk。");
} else {
  // 綜合分數 = interest*2 + confidence + risk（興趣權重最高）
  const scored = pages.map(p => ({
    link: p.file.link,
    c: p.score_confidence || 0,
    i: p.score_interest || 0,
    r: p.score_risk || 0,
    composite: (p.score_interest || 0) * 2 + (p.score_confidence || 0) + (p.score_risk || 0),
    status: p.status || "",
    spd: p.stars_per_day || 0,
  })).sort((a, b) => b.composite - a.composite);

  // 高興趣但低信心 = 值得深入研究
  const researchTargets = scored.filter(s => s.i >= 4 && s.c <= 2);
  if (researchTargets.length > 0) {
    dv.header(4, "值得深入研究（高興趣 + 低信心）");
    dv.table(
      ["專案", "興趣", "信心", "風險", "Stars/天"],
      researchTargets.map(s => [s.link, s.i, s.c, s.r, s.spd])
    );
  }

  // 全部評分排行
  dv.header(4, "綜合評分排行");
  dv.table(
    ["專案", "信心", "興趣", "風險", "綜合", "狀態"],
    scored.slice(0, 15).map(s => [s.link, s.c, s.i, s.r, s.composite, s.status])
  );
}
```

## Owner 排行榜

> [!abstract] 哪些開發者/組織的專案最常登上 Trending

```dataviewjs
const pages = dv.pages('"Repos"');
const owners = {};
for (const p of pages) {
  const o = p.owner || "unknown";
  if (!owners[o]) owners[o] = { count: 0, totalStars: 0, repos: [] };
  owners[o].count++;
  owners[o].totalStars += (p.stars || 0);
  owners[o].repos.push(p.file.link);
}
const multi = Object.entries(owners)
  .filter(([_, d]) => d.count >= 2)
  .sort((a, b) => b[1].count - a[1].count);
if (multi.length > 0) {
  dv.table(
    ["Owner", "專案數", "總 Stars", "代表專案"],
    multi.map(([name, d]) => [
      name, d.count, d.totalStars.toLocaleString(),
      d.repos.slice(0, 3).join(", ")
    ])
  );
} else {
  dv.paragraph("目前沒有重複出現的 Owner。");
}
```

## Quick Wins（低門檻高價值）

> [!tip] 安裝簡單且熱度高的待回顧專案

```dataview
TABLE
  stars_per_day AS "Stars/天",
  category AS "分類",
  language AS "語言",
  use_case AS "用途"
FROM "Repos"
WHERE install_complexity = "easy" AND status = "to-review"
SORT stars_per_day DESC
LIMIT 10
```

## 決策分數排行

> [!abstract] 綜合評估分數 Top 10（自動計算：熱度 + 易用性 + 成熟度 + 社群 + 授權）

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
  const forks = p.forks || 0;
  score += forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
  const lic = (p.license || "").toString();
  score += ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic) ? 15 : lic && lic !== "N/A" ? 8 : 0;
  const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
  scored.push({ link: p.file.link, score, grade, spd, cat: p.category, install: p.install_complexity, status: p.status });
}
scored.sort((a, b) => b.score - a.score);
if (scored.length > 0) {
  const bar = s => "\u2588".repeat(Math.round(s/5)) + "\u2591".repeat(20 - Math.round(s/5));
  dv.table(
    ["專案", "分數", "等級", "Stars/天", "分類", "安裝", "視覺化"],
    scored.slice(0, 10).map(s => [s.link, s.score, s.grade, s.spd, s.cat, s.install, bar(s.score)])
  );
  const avg = Math.round(scored.reduce((a, b) => a + b.score, 0) / scored.length);
  const grades = { A: 0, B: 0, C: 0, D: 0 };
  scored.forEach(s => grades[s.grade]++);
  dv.paragraph(`**平均分數** ${avg}/100 | A: ${grades.A} | B: ${grades.B} | C: ${grades.C} | D: ${grades.D}`);
}
```

## Contributor 風險預警

> [!warning] Solo 專案（僅 1 位貢獻者）且 Stars/天 >= 10 — Bus Factor 風險

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && (p.contributor_count || 0) <= 1 && (p.stars_per_day || 0) >= 10);
if (pages.length > 0) {
  const sorted = pages.sort(p => p.stars_per_day || 0, "desc");
  dv.table(
    ["專案", "Stars/天", "Stars", "語言", "分類", "維護狀態"],
    sorted.map(p => {
      const pushed = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
      const days = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
      const maint = days === null ? "?" : days <= 7 ? "Active" : days <= 30 ? "Moderate" : "Stale";
      return [p.file.link, p.stars_per_day, p.stars, p.language, p.category, maint];
    })
  );
  dv.paragraph(`**${pages.length}** 個高關注度 solo 專案 — 考慮替代方案或社群活躍度再決定是否採用`);
} else {
  dv.paragraph("目前沒有高風險的 solo 專案。");
}
```

## 技術棧熱度

> [!abstract] 哪些技術被最多 trending 專案使用

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const langByCat = {};
for (const p of pages) {
  const lang = (p.language || "Other").toString();
  const cat = (p.category || "Other").toString();
  const key = lang + " x " + cat;
  if (!langByCat[key]) langByCat[key] = { lang, cat, count: 0, totalSpd: 0, repos: [] };
  langByCat[key].count++;
  langByCat[key].totalSpd += (p.stars_per_day || 0);
  langByCat[key].repos.push(p.file.link);
}
const combos = Object.values(langByCat).filter(c => c.count >= 2).sort((a, b) => b.totalSpd - a.totalSpd);
if (combos.length > 0) {
  dv.table(
    ["語言", "分類", "專案數", "累計 Stars/天", "代表專案"],
    combos.slice(0, 12).map(c => [c.lang, c.cat, c.count, c.totalSpd, c.repos.slice(0, 2).join(", ")])
  );
} else {
  dv.paragraph("_需要更多專案才能看到技術棧熱度_");
}
```

## 成長速度分佈

> [!abstract] 各速度區間的專案分佈

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
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
dv.table(
  ["速度區間", "數量", "佔比", "視覺化", "代表專案"],
  bands.map(b => {
    const pct = total > 0 ? Math.round(b.repos.length / total * 100) : 0;
    const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
    const top = b.repos.sort((a,b) => (b.stars_per_day||0) - (a.stars_per_day||0)).slice(0, 2).map(r => r.file.link).join(", ");
    return [b.label, b.repos.length, pct + "%", bar, top];
  })
);
const avgSpd = total > 0 ? Math.round(pages.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / total) : 0;
const medianArr = pages.map(p => p.stars_per_day || 0).array().sort((a,b) => a-b);
const median = medianArr.length > 0 ? medianArr[Math.floor(medianArr.length / 2)] : 0;
dv.paragraph(`**平均** ${avgSpd} stars/天 · **中位數** ${median} stars/天`);
```

## 維護健康快照

> [!abstract] 你正在關注的專案是否仍在積極維護？

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.status && p.status !== "to-review" && p.status !== "archived";
});
if (pages.length > 0) {
  const now = Date.now();
  const rows = pages.sort(p => {
    const pushed = p.pushed_at ? new Date(p.pushed_at.toString()).getTime() : 0;
    return now - pushed;
  }, "desc").map(p => {
    const pushed = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
    const days = pushed ? Math.floor((now - pushed.getTime()) / 86400000) : null;
    const health = days === null ? "?" : days <= 7 ? "Active" : days <= 30 ? "OK" : days <= 90 ? "Slow" : "Stale";
    const bar = days === null ? "?" : days <= 7 ? "\u2588\u2588\u2588\u2588" : days <= 30 ? "\u2588\u2588\u2588\u2591" : days <= 90 ? "\u2588\u2588\u2591\u2591" : "\u2588\u2591\u2591\u2591";
    return [p.file.link, p.status, health, bar, days !== null ? days + " 天前" : "?", p.category || ""];
  });
  dv.table(["專案", "狀態", "維護", "健康", "最後推送", "分類"], rows);
} else {
  dv.paragraph("先將感興趣的專案改為 reading/tried/integrated 狀態。");
}
```

## Topic 標籤雲

> [!abstract] 收錄專案涵蓋的 GitHub Topics

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const topics = {};
for (const p of pages) {
  const tags = p.file.tags || [];
  for (const t of tags) {
    if (t.startsWith("#topic/")) {
      const name = t.replace("#topic/", "").replace(/_/g, "-");
      topics[name] = (topics[name] || 0) + 1;
    }
  }
}
const sorted = Object.entries(topics).sort((a, b) => b[1] - a[1]);
if (sorted.length > 0) {
  dv.paragraph(sorted.map(([t, c]) => {
    const size = c >= 5 ? "**" : c >= 3 ? "" : "";
    return size + t + "(" + c + ")" + size;
  }).join(" "));
} else {
  dv.paragraph("_下次 Actions 執行後會出現 topic 標籤_");
}
```

## 所有專案

```dataview
TABLE
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  status AS "狀態",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  first_seen AS "收錄日期"
FROM "Repos"
SORT stars DESC
```

---

> [!info] 使用說明
> 此頁面需要安裝 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件才能正常顯示。
> 安裝方式：設定 → 社群插件 → 搜尋 Dataview → 安裝並啟用
> DataviewJS 需在 Dataview 設定中啟用（設定 → Dataview → Enable JavaScript Queries）
>
> **推薦插件**：
> - [Dataview](https://github.com/blacksmithgu/obsidian-dataview) — Dashboard 和查詢（必裝）
> - [Contribution Graph](https://github.com/vran-dev/obsidian-contribution-graph) — 收錄熱力圖
> - [Charts View](https://github.com/caronchen/obsidian-chartsview-plugin) — 語言分佈圖表
> - [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) — 每週回顧自動化
> - [Smart Connections](https://github.com/brianpetro/obsidian-smart-connections) — AI 語意關聯推薦
> - [Advanced Canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas) — Tech Radar 視覺決策板
