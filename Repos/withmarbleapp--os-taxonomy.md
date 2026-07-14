---
repo: withmarbleapp/os-taxonomy
url: https://github.com/withmarbleapp/os-taxonomy
owner: withmarbleapp
owner_type: Organization
language: JavaScript
license: ODbL-1.0
description: ""
homepage: ""
stars: 2946
stars_per_day: 589
forks: 523
open_issues: 12
created: 2026-07-08
pushed_at: 2026-07-08
first_seen: 2026-07-10
week: "2026-W28"
month: "2026-07"
category: "其他"
subcategory: "教育數據"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-10
use_case: "提供一個開放的學習主題結構，幫助理解兒童在小學階段的學習內容。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-17"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 5629
readme_length: 5992
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-10"
star_history: "2026-07-10:1542,2026-07-11:2181,2026-07-12:2458,2026-07-13:2749,2026-07-14:2946"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "os-taxonomy"
  - "withmarbleapp/os-taxonomy"
  - "提供一個開放的學習主題結構，幫助理解兒童在小學階段的學習內容。"
---

# os-taxonomy

**1.5k** stars · **1.5k** stars/天 · 建立 1 天前 · JavaScript · ODbL-1.0

```dataviewjs
const me = dv.page("Repos/withmarbleapp--os-taxonomy");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個開放的學習主題結構，幫助理解兒童在小學階段的學習內容。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** ODbL-1.0 · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要結構化學習數據來設計課程或開發教育應用的教育工作者和開發者。
> **一句話重點** 這個專案通過結構化的學習圖譜，為教育者提供了一個全新的視角來理解學習過程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "教育數據" && p.file.name !== "withmarbleapp--os-taxonomy" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 教育數據 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供了一個開放的、結構化的學習主題分類，幫助理解兒童在小學階段的學習內容。

## 專案簡介

這個專案提供了一個開放的、結構化的學習主題分類，專注於小學階段的學習內容，涵蓋了1590個微主題，並以先決條件圖的形式呈現。用戶可以透過這個圖譜了解每個主題的學習依賴關係，並依據國家課程標準進行對應。使用者只需加載JSON數據，便可獲得每個主題的詳細資訊，包括名稱、描述、年齡範圍及評估標準等。這個工具的賣點在於其結構化的圖形數據，能夠清楚地展示學習的先決條件，幫助教育者和家長更好地理解學習過程。技術上，專案使用JavaScript，並以JSON格式儲存數據，這使得其無需任何運行時依賴，簡化了使用流程。

與傳統的平面課程標準相比，這個工具提供了更為動態的學習路徑，能夠讓用戶更直觀地看到學習的依賴關係。相較於其他教育數據庫，這個專案的優勢在於其開放性和可擴展性，使用者可以自由地在此基礎上進行擴展和修改。實際使用中，使用者可能會遇到數據結構驗證的需求，這可以通過提供的驗證腳本輕鬆解決。這個專案目前處於初期階段，對於需要結構化學習數據的教育者和開發者來說，值得關注。未來6個月內，隨著社群的成長和功能的擴展，這個專案有潛力成為教育領域的重要資源。

**技術棧**：`JavaScript`

## 重點功能

- 結構化學習主題 — 包含1590個微主題，涵蓋多個學科。
- 先決條件圖 — 3221個依賴關係，幫助理解學習路徑。
- 課程標準對應 — 與多個國家課程標準相連接，提供標準參考。
- 開放數據格式 — 所有數據以UTF-8 JSON格式儲存，無需運行時依賴。
- 驗證工具 — 提供結構驗證腳本，確保數據完整性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/withmarbleapp/os-taxonomy.git
```
2. 安裝依賴
```bash
npm install
```
3. 驗證數據結構
```bash
node scripts/validate.mjs
```

## 程式碼範例

```js
{
  "前置條件": "確保已安裝Node.js環境。",
  "指令": "import topics from './data/topics.json' with { type: 'json' };",
  "預期輸出": "一個包含所有微主題的數據結構。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立1天就累積1542 stars（1542/天），forks 284（18.4%），這顯示出強烈的社群興趣。這個專案由Marble團隊開發，旨在解決傳統課程標準數據的靜態與封閉問題，提供一個動態的學習圖譜。隨著教育科技的發展，對於開放和結構化學習數據的需求日益增加，這使得該專案的出現恰逢其時。社群的反饋和活躍度也顯示出使用者對於這個工具的期待和需求。

## 適合誰使用

**目標受眾**：需要結構化學習數據來設計課程或開發教育應用的教育工作者和開發者。

> [!example] 使用場景
> - 教育工作者用它來設計課程，因為它提供了清晰的學習依賴關係，幫助他們制定教學計劃。
> - 家長用它來了解孩子的學習進度，因為它能夠直觀地展示每個主題的學習路徑和評估標準。
> - 開發者用它來構建教育應用，因為其開放的數據結構允許自由擴展和修改。

## 架構分析

這個專案採用了一個簡單的JSON數據結構來儲存學習主題和依賴關係，這使得數據的讀取和操作變得非常直觀。每個微主題都被設計為一個獨立的節點，並且通過有向邊來表示其先決條件。這種設計使得用戶可以輕鬆地查詢和擴展主題，而不需要複雜的數據庫架構。選擇JSON格式的代價在於對於大型數據集的性能可能會受到影響，但這樣的選擇也使得數據更易於理解和使用。整體架構的輕量化設計使得它適合快速開發和迭代，並且能夠輕鬆整合進其他教育應用中。

## 技術深入分析

這個專案的核心在於其結構化的學習主題圖譜，使用了有向無環圖（DAG）來表示微主題之間的依賴關係。每個微主題都包含詳細的描述和評估標準，這使得用戶能夠清楚地了解每個主題的學習目標和要求。效能上，因為數據以JSON格式儲存，對於小型數據集的處理非常迅速，但在面對大型數據集時，可能會出現性能瓶頸。選擇JavaScript作為開發語言的好處在於其廣泛的使用和社群支持，但也可能限制了其在其他環境中的應用。設計上，這個專案並未依賴於任何外部庫或框架，這降低了整合的複雜度，但也意味著未來的擴展可能需要更多的手動工作。技術風險方面，隨著數據量的增加，可能會面臨性能下降的問題，這需要在未來的版本中進行優化。整體來看，這個專案在教育數據的開放性和結構化方面提供了一個有趣的解決方案，值得關注其未來的發展。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰，提供了詳細的使用說明和範例。安裝過程相對簡單，無需複雜的配置。文件目前僅提供英文，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 開放數據，易於擴展和修改。
> - 結構化的學習路徑，便於教學設計。
> - 與多個課程標準對應，增加實用性。

> [!danger] 缺點
> - 目前僅支援JavaScript環境，限制了使用範圍。
> - 數據更新頻率不明，可能影響長期使用。
> - 對於大型數據集的性能可能不佳。

> [!warning] 注意事項
> - 目前僅支援JavaScript環境。
> - 數據更新頻率不明，可能需定期檢查最新版本。
> - 依賴於JSON格式，對於大型數據集可能會影響性能。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 284 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-08 |
| 建立日期 | 2026-07-08 |
| Repo 大小 | 5.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/withmarbleapp/os-taxonomy) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lauramionel](https://github.com/lauramionel) | 7 |
> | [@guillaumeboniface](https://github.com/guillaumeboniface) | 2 |

## 社群與生態

**社群活躍度**：專案剛成立，社群活躍度尚待觀察。
**連結**：[文件](https://withmarble.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-08）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #3 from withmarbleapp/docs/readme-gif

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/withmarbleapp/os-taxonomy/issues/5) | Possible reversed edges / age-label mismatches: 5 prerequisi | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Marble Skill Taxonomy
> 
> An open, structured taxonomy of **what children learn** across the primary/elementary years — decomposed into fine-grained "micro-topics", wired into a prerequisite graph, and aligned to national curriculum standards. Produced by [Marble](https://withmarble.com).
> 
> > **Version:** `v1` · **Topics:** 1,590 · **Prerequisite edges:** 3,221 · **Subjects:** 8
> 
> ## See it
> 
> Every dot is a micro-topic, colored by subject; height is age; each thread is a prerequisite ([full-quality video](media/curriculum-viz.mp4)). Explore it interactively at [withmarble.com/curriculum](https://withmarble.com/curriculum) — tap any concept to trace everything a learner must master before it.
> 
> ## What this is
> 
> Most curriculum data is either a flat list of standards or locked inside a product. This dataset is a **connected graph of learning**:
> 
> - **1,590 micro-topics** — a single, teachable idea (e.g. *"Building sentences"*, *"Apparent brightness of stars"*), each with a plain-language description, mastery **evidence** criteria, a type (conceptual / procedural / representational / language / meta), a subject + domain, and an approximate age range.
> - **3,221 prerequisite dependencies** — a directed acyclic graph: *"topic X depends on prerequisite Y"*, each edge tagged `hard`/`soft` and carrying a one-line **reason**.
> - **Curriculum alignment** — each micro-topic links to the standards it was distilled from (NGSS, Common Core, the UK National Curriculum, and more).
> - **Domain clusters** — 183 parent-friendly one-paragraph summaries per (subject, domain, age band).
> 
> ### Subjects
> 
> | Subject | Topics |
> |---|---:|
> | Science | 547 |
> | Mathematics | 503 |
> | English | 286 |
> | History | 90 |
> | Personal & Social Development | 88 |
> | Life Skills | 37 |
> | Computing | 21 |
> | Learning to Learn | 18 |
> 
> ## Files
> 
> All data lives in [`data/`](data/) as UTF-8 JSON. See [`schema/`](schema/) for JSON Schemas and [`manifest.json`](data/manifest.json) for counts + SHA-256 checksums.
> 
> | File | What it holds |
> |---|---|
> | [`data/topics.json`](data/topics.json) | The micro-topics (graph **nodes**). |
> | [`data/dependencies.json`](data/dependencies.json) | Prerequisite **edges** (`topicId` depends on `prerequisiteId`). |
> | [`data/curriculum-standards.json`](data/curriculum-standards.json) | The source curriculum standards, grouped by curriculum. |
> | [`data/clusters.json`](data/clusters.json) | Parent-friendly domain summaries. |
> | [`data/manifest.json`](data/manifest.json) | Counts, per-subject breakdown, per-file checksums. |
> 
> ### A topic
> 
> ```json
> {
>   "id": "mt_N8CpN1EJrP",
>   "type": "CONCEPTUAL",
>   "subject": "English",
>   "domain": "Grammar & Punctuation",
>   "name": "Building sentences",
>   "description": "Understand that words combine to make sentences — a sentence expresses a complete thought…",
>   "ageRangeStart": 4,
>   "ageRangeEnd": 6,
>   "centrality": 0.257,
>   "evidence": [
>     "Distinguish between complete sentences and fragments",
>     "Compose a complete sentence with a subject and verb"
>   ],
>   "assessmentPrompt": "If {{name}} says something like \"The dog\", can they tell you that's not a complete sentence…?",
>   "standards": ["ccss-ela:L.K.1f", "uk-nc-2013:Eng.App2.Y1.Sent.1"]
> }
> ```
> 
> - `id` — stable identifier (`mt_…`), referenced by dependencies and by neighbours.
> - `standards` — keys into `curriculum-standards.json` (`":"`).
> - `assessmentPrompt` — a natural-language check for the idea. Contains a `{{name}}` placeholder (the child's name); substitute or strip before display.
> 
> ### A dependency
> 
> ```json
> { "topicId": "mt__00ZSLnB7p", "prerequisiteId": "mt_VBl1T1sFCM", "strength": "hard",
>   "reason": "Must understand vibrations make sound before finding volume patterns" }
> ```
> 
> `topicId` **depends on** `prerequisiteId`. Reverse the edge to get "unlocks".
> 
> ## Using it
> 
> Pure data — no runtime, no dependencies. Load the JSON and go.
> 
> ```js
> import topics from './data/topics.json' with { type: 'json' };
> import deps from './data/dependencies.json' with { type: 'json' };
> 
> const byId = new Map(topics.topics.map(t => [t.id, t]));
> const prereqs = deps.dependencies
>   .filter(d => d.topicId === 'mt_N8CpN1EJrP')
>   .map(d => byId.get(d.prerequisiteId).name);
> ```
> 
> Validate structure + referential integrity:
> 
> ```bash
> node scripts/validate.mjs
> ```
> 
> ## License
> 
> This dataset is **multi-licensed** — read this before you use or redistribute it.
> 
> | Layer | License |
> |---|---|
> | **The database** — the collection, structure, IDs, topic↔topic and topic↔standard relationships | [**ODbL 1.0**](LICENSE) — free for research **and** commercial use, **attribution** required, **share-alike** (derivative *databases* must stay open under ODbL). |
> | **The textual content Marble authored** — topic `description`/`name`/`evidence`/`assessmentPrompt`, dependency `reason`s, cluster `summary`s | [**CC BY-SA 4.0**](LICENSE-CONTENT) — same spirit: attribution + share-alike. |
> | **`curriculum-standards.json`** — extracted from third-party frameworks | **Not** Marble's to relicense. Each source is under **its own upstream license** — see [**PROVENANCE.md**](PROVENANCE.md). |
> 
> **Why share-alike + still commercial-friendly:** ODbL distinguishes a *derivative database* (extend/modify the taxonomy → must stay open) from a *produced work* (use it inside a product, model, or app → stays yours). So you can build a commercial product on this without open-sourcing your product; you only owe back improvements to the *taxonomy itself*.
> 
> ### Attribution
> 
> Any use must credit:
> 
> > Marble Skill Taxonomy (v1) · © Generative Spark, Inc. (Marble) · https://withmarble.com · licensed under ODbL 1.0 (database) and CC BY-SA 4.0 (content).
> 
> Plus the upstream notices in [PROVENANCE.md](PROVENANCE.md) for any curriculum standards you use. See [CITATION.cff](CITATION.cff) for a formal citation.
> 
> ## What's *not* here
> 
> Deliberately excluded from this release: semantic embeddings (derived, recomputable) and any per-child / user data (never published). See [CHANGELOG.md](CHANGELOG.md).

## 延伸閱讀

相關概念：[[教育數據]] · [[課程設計]] · [[開放數據]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[LinXiaoTao--FuckClaude|LinXiaoTao/FuckClaude]]

[GitHub](https://github.com/withmarbleapp/os-taxonomy)

## 相關收錄

> [!note]- 直接競品（同子分類：教育數據）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "教育數據" AND file.name != "withmarbleapp--os-taxonomy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "withmarbleapp--os-taxonomy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "withmarbleapp--os-taxonomy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "withmarbleapp--os-taxonomy"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["教育數據","課程設計","開放數據"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "withmarbleapp--os-taxonomy" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "withmarbleapp--os-taxonomy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "withmarbleapp" AND file.name != "withmarbleapp--os-taxonomy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/withmarbleapp--os-taxonomy");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-07-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-07-14|2026-07-14]] — 再次上榜，2.9k stars
- [[2026-07-13|2026-07-13]] — 再次上榜，2.7k stars
- [[2026-07-12|2026-07-12]] — 再次上榜，2.5k stars
- [[2026-07-11|2026-07-11]] — 再次上榜，2.2k stars
- [[2026-07-10|2026-07-10]] — 首次收錄，1.5k stars
