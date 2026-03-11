---
tags:
  - navigation
cssclasses:
  - discovery
---

# Discovery — 探索你的 Vault

> 從不同角度發現有價值的專案。跟 Dashboard 看數據不同，這裡幫你找到 **你可能錯過的東西**。

## 技術棧交叉點

> [!abstract] 用相同技術棧的專案 — 如果你喜歡一個，可能也會喜歡另一個

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && p.language);
const langGroups = {};
for (const p of pages) {
  const lang = p.language.toString();
  if (!langGroups[lang]) langGroups[lang] = [];
  langGroups[lang].push(p);
}
const multiLang = Object.entries(langGroups)
  .filter(([_, repos]) => repos.length >= 2)
  .sort((a, b) => b[1].length - a[1].length);
for (const [lang, repos] of multiLang.slice(0, 5)) {
  dv.header(4, lang + " (" + repos.length + " 個)");
  dv.table(
    ["專案", "Stars/天", "分類", "狀態"],
    repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0))
      .slice(0, 5)
      .map(p => [p.file.link, p.stars_per_day || 0, p.category || "", p.status || "?"])
  );
}
```

## 多產作者

> [!abstract] 有多個收錄專案的開發者/組織 — 值得追蹤他們的動態

```dataviewjs
const pages = dv.pages('"Repos"');
const owners = {};
for (const p of pages) {
  const owner = p.owner?.toString() || "";
  if (!owner) continue;
  if (!owners[owner]) owners[owner] = [];
  owners[owner].push(p);
}
const multi = Object.entries(owners)
  .filter(([_, repos]) => repos.length >= 2)
  .sort((a, b) => b[1].reduce((s, p) => s + (p.stars || 0), 0) - a[1].reduce((s, p) => s + (p.stars || 0), 0));
if (multi.length > 0) {
  for (const [owner, repos] of multi) {
    const totalStars = repos.reduce((s, p) => s + (p.stars || 0), 0);
    dv.paragraph("**" + owner + "** (" + totalStars.toLocaleString() + " total stars): " +
      repos.map(p => p.file.link).join(" / "));
  }
} else {
  dv.paragraph("目前沒有重複作者。隨著收錄量增加，這裡會出現值得追蹤的開發者。");
}
```

## 隱藏寶石

> [!tip] Stars/天不算爆炸但品質可能很高的專案 — 安裝簡單且有明確授權

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  if (p.status === "archived") return false;
  const spd = p.stars_per_day || 0;
  const lic = (p.license || "").toString();
  const friendly = ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC"].includes(lic);
  return spd >= 10 && spd < 200 && p.install_complexity === "easy" && friendly;
}).sort(p => p.stars_per_day || 0, "desc").limit(8);
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "分類", "授權", "用途"],
    pages.map(p => [p.file.link, p.stars_per_day, p.category || "", p.license || "", (p.use_case || "").slice(0, 50)])
  );
} else {
  dv.paragraph("目前沒有符合條件的隱藏寶石。");
}
```

## 風險警示

> [!warning] 潛在風險較高的專案 — 沒授權、單人維護、或推送停滯

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  if (p.status === "archived") return false;
  const lic = (p.license || "").toString();
  const noLicense = !lic || lic === "N/A" || lic === "";
  const contribs = p.contributor_count || 0;
  const pushed = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
  const stale = pushed ? (Date.now() - pushed.getTime()) > 30 * 86400000 : false;
  return noLicense || (contribs <= 1 && (p.stars || 0) > 500) || stale;
});
if (pages.length > 0) {
  dv.table(
    ["專案", "風險", "Stars", "授權", "貢獻者", "最後推送"],
    pages.sort((a, b) => (b.stars || 0) - (a.stars || 0)).limit(10).map(p => {
      const risks = [];
      const lic = (p.license || "").toString();
      if (!lic || lic === "N/A") risks.push("No License");
      if ((p.contributor_count || 0) <= 1 && (p.stars || 0) > 500) risks.push("Bus Factor");
      const pushed = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
      if (pushed && (Date.now() - pushed.getTime()) > 30 * 86400000) risks.push("Stale");
      return [p.file.link, risks.join(", "), p.stars || 0, lic || "N/A", p.contributor_count || "?", p.pushed_at || "?"];
    })
  );
} else {
  dv.paragraph("所有收錄專案都通過基本風險檢查。");
}
```

## 你的盲點

> [!question] 你還沒有探索的分類和語言 — 可能有你不知道的好工具

```dataviewjs
const all = dv.pages('"Repos"').where(p => p.status !== "archived");
const reviewed = all.where(p => p.status && p.status !== "to-review");

// 找出你完全沒碰過的分類
const allCats = new Set(all.map(p => p.category).filter(Boolean).map(c => c.toString()));
const touchedCats = new Set(reviewed.map(p => p.category).filter(Boolean).map(c => c.toString()));
const untouched = [...allCats].filter(c => !touchedCats.has(c));
if (untouched.length > 0) {
  dv.paragraph("**未探索的分類**：" + untouched.join("、"));
  const recs = all.where(p => untouched.includes(p.category?.toString()))
    .sort(p => p.stars_per_day || 0, "desc").limit(3);
  if (recs.length > 0) {
    dv.paragraph("推薦先看：" + recs.map(p => p.file.link + " (" + p.category + ")").join(" / "));
  }
}

// 找出你沒看過的語言
const allLangs = new Set(all.map(p => p.language).filter(Boolean).map(l => l.toString()));
const touchedLangs = new Set(reviewed.map(p => p.language).filter(Boolean).map(l => l.toString()));
const untouchedLangs = [...allLangs].filter(l => !touchedLangs.has(l));
if (untouchedLangs.length > 0) {
  dv.paragraph("**未探索的語言**：" + untouchedLangs.join("、"));
}

if (untouched.length === 0 && untouchedLangs.length === 0) {
  dv.paragraph("你已經探索了所有分類和語言！");
}
```

## 分類對決

> [!abstract] 同分類內誰更值得投入？直接比較 Stars 和成長速度

```dataviewjs
const cats = {};
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
for (const p of pages) {
  const cat = (p.category || "其他").toString();
  if (!cats[cat]) cats[cat] = [];
  cats[cat].push(p);
}
const hotCats = Object.entries(cats)
  .filter(([_, repos]) => repos.length >= 3)
  .sort((a, b) => b[1].length - a[1].length);
for (const [cat, repos] of hotCats.slice(0, 3)) {
  dv.header(4, cat + " (" + repos.length + " 個)");
  const sorted = repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
  dv.table(
    ["專案", "Stars/天", "Stars 總量", "安裝", "授權"],
    sorted.slice(0, 5).map(p => [
      p.file.link,
      p.stars_per_day || 0,
      p.stars || 0,
      p.install_complexity || "?",
      p.license || "N/A"
    ])
  );
}
```

## 快速採用路徑

> [!tip] 從評估到採用最快的路線 — easy install + MIT + 高 stars + 低依賴風險

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  if (p.status === "archived" || p.status === "integrated") return false;
  const lic = (p.license || "").toString();
  return p.install_complexity === "easy" &&
    ["MIT", "Apache-2.0", "ISC"].includes(lic) &&
    (p.stars_per_day || 0) >= 30;
}).sort(p => p.stars_per_day || 0, "desc").limit(5);
if (pages.length > 0) {
  for (const p of pages) {
    const use = (p.use_case || p.description || "").toString().slice(0, 80);
    dv.paragraph("**" + p.file.link + "** — " + (p.stars_per_day || 0) + " stars/day / " + p.license + "\n> " + use);
  }
} else {
  dv.paragraph("目前沒有完美符合快速採用條件的專案。");
}
```

## 概念地圖

> [!abstract] 哪些技術概念連結了最多專案？點擊概念可以看到所有相關工具

```dataviewjs
const repos = dv.pages('"Repos"').where(p => p.status !== "archived");
const conceptLinks = {};
for (const p of repos) {
  for (const link of (p.file.outlinks || [])) {
    if (link.path?.startsWith("Concepts/")) {
      const name = link.path.replace("Concepts/", "").replace(".md", "");
      if (!conceptLinks[name]) conceptLinks[name] = new Set();
      conceptLinks[name].add(p.category?.toString() || "其他");
    }
  }
}
const crossConcepts = Object.entries(conceptLinks)
  .filter(([_, cats]) => cats.size >= 2)
  .sort((a, b) => b[1].size - a[1].size);
if (crossConcepts.length > 0) {
  dv.paragraph("**跨分類概念** — 這些技術概念連結了不同分類的專案：");
  dv.table(
    ["概念", "跨分類數", "涵蓋分類"],
    crossConcepts.slice(0, 10).map(([name, cats]) => [
      dv.fileLink("Concepts/" + name, false, name),
      cats.size,
      [...cats].join(", ")
    ])
  );
} else {
  dv.paragraph("目前概念跨分類連結不足，隨著收錄量增加會更豐富。");
}
```

## 收錄時間軸

> [!abstract] 你的 vault 成長歷程

```dataviewjs
const pages = dv.pages('"Repos"');
const byWeek = {};
for (const p of pages) {
  const w = p.week?.toString() || "unknown";
  if (!byWeek[w]) byWeek[w] = { count: 0, totalStars: 0, cats: {} };
  byWeek[w].count++;
  byWeek[w].totalStars += (p.stars || 0);
  const cat = (p.category || "其他").toString();
  byWeek[w].cats[cat] = (byWeek[w].cats[cat] || 0) + 1;
}
const weeks = Object.entries(byWeek)
  .filter(([w]) => w !== "unknown")
  .sort((a, b) => a[0].localeCompare(b[0]));
if (weeks.length > 0) {
  dv.table(
    ["週", "收錄數", "總 Stars", "最熱分類"],
    weeks.map(([w, d]) => {
      const topCat = Object.entries(d.cats).sort((a, b) => b[1] - a[1])[0];
      return [
        dv.fileLink("Weekly/" + w, false, w),
        d.count,
        d.totalStars.toLocaleString(),
        topCat ? topCat[0] + " (" + topCat[1] + ")" : "?"
      ];
    })
  );
  const totalRepos = pages.length;
  const totalStars = pages.array().reduce((s, p) => s + (p.stars || 0), 0);
  dv.paragraph("**累計** " + totalRepos + " 個專案 / " + totalStars.toLocaleString() + " stars");
}
```

## 文件品質 vs 人氣

> [!abstract] README 品質與 Stars 的關係 — 有些高 Stars 專案文件品質意外地差

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.status !== "archived" && p.readme_length > 0 && p.stars > 0);
if (pages.length > 0) {
  // 高 Stars + 差 README
  const highStarBadDoc = pages.where(p => p.stars > 500 && p.readme_length < 2000)
    .sort(p => p.stars, "desc").limit(5);
  if (highStarBadDoc.length > 0) {
    dv.header(4, "高人氣但文件薄弱（可能有坑）");
    dv.table(
      ["專案", "Stars", "README 長度", "分類"],
      highStarBadDoc.map(p => [p.file.link, p.stars, (p.readme_length || 0).toLocaleString() + " 字", p.category])
    );
  }
  // 低 Stars + 好 README
  const lowStarGoodDoc = pages.where(p => p.stars < 500 && p.readme_length > 5000)
    .sort(p => p.readme_length, "desc").limit(5);
  if (lowStarGoodDoc.length > 0) {
    dv.header(4, "低調但文件完整（值得發掘）");
    dv.table(
      ["專案", "Stars", "README 長度", "分類"],
      lowStarGoodDoc.map(p => [p.file.link, p.stars, (p.readme_length || 0).toLocaleString() + " 字", p.category])
    );
  }
} else {
  dv.paragraph("_需要 readme_length 資料，新增的專案會自動記錄_");
}
```

## 社群回應力

> [!abstract] Issue 解決率排行 — 維護者回應社群問題的速度反映專案長期可靠性

```dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => p.status !== "archived" && p.issue_close_rate >= 0);
if (pages.length > 0) {
  const excellent = pages.where(p => p.issue_close_rate >= 80).sort(p => p.issue_close_rate, "desc");
  const poor = pages.where(p => p.issue_close_rate < 30 && p.issue_close_rate >= 0).sort(p => p.issue_close_rate, "asc");
  if (excellent.length > 0) {
    dv.header(4, "維護者積極回應（解決率 >= 80%）");
    dv.table(["專案", "解決率", "Stars", "分類"],
      excellent.limit(5).map(p => [p.file.link, p.issue_close_rate + "%", p.stars, p.category]));
  }
  if (poor.length > 0) {
    dv.header(4, "Issue 堆積中（解決率 < 30%）");
    dv.table(["專案", "解決率", "Stars", "分類"],
      poor.limit(5).map(p => [p.file.link, p.issue_close_rate + "%", p.stars, p.category]));
  }
} else {
  dv.paragraph("_需要 issue_close_rate 資料，新增的專案會自動追蹤_");
}
```

## Release 健康度分佈

> [!abstract] 專案的發版節奏 — 積極發版的專案通常維護品質較好

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && p.release_cadence);
if (pages.length > 0) {
  const cadences = { weekly: [], monthly: [], quarterly: [], irregular: [], never: [], unknown: [] };
  for (const p of pages) {
    const c = (p.release_cadence || "unknown").toString();
    if (cadences[c]) cadences[c].push(p);
    else cadences.unknown.push(p);
  }
  const total = pages.length;
  const rows = [
    ["Weekly", cadences.weekly.length, cadences.weekly.slice(0, 2).map(p => p.file.link).join(", ")],
    ["Monthly", cadences.monthly.length, cadences.monthly.slice(0, 2).map(p => p.file.link).join(", ")],
    ["Quarterly", cadences.quarterly.length, cadences.quarterly.slice(0, 2).map(p => p.file.link).join(", ")],
    ["Irregular", cadences.irregular.length, cadences.irregular.slice(0, 2).map(p => p.file.link).join(", ")],
    ["Never", cadences.never.length, cadences.never.slice(0, 2).map(p => p.file.link).join(", ")],
  ].filter(r => r[1] > 0);
  dv.table(["發版節奏", "數量", "代表專案"], rows);
  const activeRelease = cadences.weekly.length + cadences.monthly.length;
  dv.paragraph("**積極發版** " + activeRelease + "/" + total + " (" + Math.round(activeRelease/total*100) + "%) · **從未發版** " + cadences.never.length);
} else {
  dv.paragraph("_需要 release_cadence 資料，下次 Actions 執行後會自動記錄_");
}
```

## Bus Factor 分佈

> [!abstract] 專案的核心開發者集中度 — 了解供應鏈風險

```dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived" && (p.bus_factor || 0) > 0);
if (pages.length > 0) {
  const solo = pages.where(p => p.bus_factor === 1);
  const duo = pages.where(p => p.bus_factor === 2);
  const team = pages.where(p => p.bus_factor >= 3);
  dv.table(["Bus Factor", "數量", "風險", "代表專案"], [
    ["1 (Solo)", solo.length, "HIGH — 單人專案", solo.sort(p => p.stars, "desc").limit(3).map(p => p.file.link).join(", ")],
    ["2 (Duo)", duo.length, "Medium", duo.sort(p => p.stars, "desc").limit(3).map(p => p.file.link).join(", ")],
    ["3+ (Team)", team.length, "Low", team.sort(p => p.stars, "desc").limit(3).map(p => p.file.link).join(", ")],
  ].filter(r => r[1] > 0));
  dv.paragraph("**Solo 專案佔比** " + Math.round(solo.length / pages.length * 100) + "% — " + (solo.length > pages.length * 0.6 ? "多數專案依賴單一維護者，長期穩定性需關注" : "開發者多樣性尚可"));
} else {
  dv.paragraph("_需要 bus_factor 資料，下次 Actions 執行後會自動計算_");
}
```

## 等待你的決策

> [!warning] 高 Stars 但你還沒表態的專案 — 該 adopt 還是 hold？

```dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.status !== "archived" &&
    (!p.ring || p.ring === "assess") &&
    (p.stars || 0) >= 200;
}).sort(p => p.stars || 0, "desc").limit(8);
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars", "Stars/天", "分類", "收錄於"],
    pages.map(p => [p.file.link, p.stars || 0, p.stars_per_day || 0, p.category || "", p.first_seen || "?"])
  );
} else {
  dv.paragraph("所有高 Stars 專案都已有明確的 Ring 決策。");
}
```

---

> [!info] 小提示
> - 在 Obsidian 的 Graph View 中可以視覺化看到專案之間的連結
> - 用 `Ctrl/Cmd + O` 快速跳轉到任何專案筆記
> - 在任何 repo 筆記中用 Templater 快捷鍵觸發「快速分流」
