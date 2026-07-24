---
repo: nyblnet/bento
url: https://github.com/nyblnet/bento
owner: nyblnet
owner_type: User
language: TypeScript
license: MIT
description: ""
homepage: ""
stars: 1171
stars_per_day: 195
forks: 66
open_issues: 7
created: 2026-07-17
pushed_at: 2026-07-24
first_seen: 2026-07-24
week: "2026-W30"
month: "2026-07"
category: "其他"
subcategory: "簡報工具"
release_tag: "v1.0.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-24
use_case: "提供一個獨立的 HTML 檔案作為 PowerPoint 替代方案，無需安裝任何軟體。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-31"
contributor_count: 2
engagement: "low"
issue_close_rate: 13
repo_size_kb: 20590
readme_length: 7957
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-24"
star_history: "2026-07-24:1171"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - easy_install
aliases:
  - "bento"
  - "nyblnet/bento"
  - "提供一個獨立的 HTML 檔案作為 PowerPoint 替代方案，無需安裝任何軟體。"
---

# bento

**1.2k** stars · **195** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/nyblnet--bento");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.7` `easy-install`

> [!summary] 一句話摘要
> 提供一個獨立的 HTML 檔案作為 PowerPoint 替代方案，無需安裝任何軟體。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (195 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要一個獨立運行的簡報工具且重視資料隱私的專業人士。
> **一句話重點** Bento 的設計理念是將所有功能整合於一個檔案中，讓使用者擁有完全的資料控制權。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nyblnet--bento");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "簡報工具" && p.file.name !== "nyblnet--bento" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 簡報工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到一個完全獨立的簡報工具，值得嘗試。

> [!abstract] 核心創新
> Bento 是一個將所有簡報功能整合於單一 HTML 檔案中的工具，無需安裝任何應用程式。

## 專案簡介

Bento 是一個將所有功能整合於單一 HTML 檔案中的簡報工具，使用者只需打開檔案即可編輯和展示，無需額外安裝任何應用程式。這個工具的核心在於它的自我保存功能，檔案內部包含了所有的數據和編輯器，並且以可讀的 JSON 格式儲存，確保未來的可讀性和無鎖定性。使用者可以透過 `morphId` 來實現元素之間的動畫效果，並且支援即時協作，所有的編輯都能在離線狀態下進行，並在恢復連線後自動合併。技術上，Bento 使用了自家開發的動畫引擎和 CRDT 來處理即時協作，並且所有的數據都以加密形式存儲在檔案中，確保安全性。

與傳統的雲端簡報工具相比，Bento 的設計使得使用者不再依賴第三方伺服器，並且能夠在本地環境中完全運行。這使得它特別適合需要高度隱私和資料控制的使用者。儘管目前仍有一些開放的問題，例如 MathJax 渲染問題和移動設備上的顯示問題，但整體上，Bento 提供了一個創新的解決方案，適合需要簡報功能但又不想依賴雲端服務的使用者。這個專案的成熟度仍在發展中，未來可能會有更多功能推出，特別是與 AI 的整合方面。

**技術棧**：`TypeScript` · `JavaScript` · `HTML` · `CSS`

## 重點功能

- 單一檔案格式 — 所有簡報內容和編輯器都整合在一個 HTML 檔案中，方便分享和使用。
- 即時協作 — 支援加密的即時協作，使用者可以在離線狀態下編輯並在恢復連線後自動合併變更。
- Morph 動畫 — 使用 `morphId` 來實現簡報中元素的動畫效果，提升視覺呈現。
- 本地運行 — 完全在本地環境中運行，無需依賴雲端伺服器，確保資料安全。
- 可讀的 JSON 格式 — 檔案內的數據以可讀的 JSON 格式儲存，未來可持續使用。

## 快速開始

1. 下載 Bento 檔案
```bash
從 GitHub Releases 下載 Bento_Slides.bento.html
```
2. 打開檔案
```bash
在任何現代瀏覽器中打開 Bento_Slides.bento.html
```
3. 開始編輯簡報
```bash
直接在瀏覽器中編輯並保存變更
```

## 程式碼範例

```ts
# 前置條件
# 需要 Node.js 20+ 和 npm

```bash
cd slides
npm install
npm run dev            # dev server (http://localhost:5173)
npm run build:single   # → dist-single/Bento_Slides.bento.html (the product)
```
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1171 stars（195/天），forks 66（5.6%），顯示出穩定的增長趨勢。這個專案的作者 nyblnet 和 tura-ai-agent 之前有過其他開源專案的經驗，這使得他們能夠快速推出一個功能完整的工具。Bento 解決了傳統簡報工具的鎖定問題，讓使用者能夠擁有自己的檔案而不依賴雲端服務。這種設計理念吸引了對隱私和資料控制有需求的使用者群體。社群的反饋也顯示出對於即時協作和簡報功能的高度需求，進一步促進了這個專案的流行。

## 適合誰使用

**目標受眾**：需要一個獨立運行的簡報工具且重視資料隱私的專業人士。

> [!example] 使用場景
> - 教育工作者用它來製作和分享課堂簡報，因為它的單一檔案格式讓學生能夠輕鬆下載和使用。
> - 自由工作者用它來展示作品集，因為不需要安裝任何軟體，客戶可以直接打開檔案查看。
> - 企業內部團隊用它來進行即時協作簡報，因為它支援離線編輯和自動合併功能，確保資料不會遺失。

## 架構分析

Bento 的架構設計為單頁應用程式，所有功能都整合在一個 HTML 檔案中，這樣的設計使得使用者能夠在任何瀏覽器中直接運行。資料模型由 `slides/src/model.ts` 定義，渲染由 `render.ts` 負責，並使用自家開發的動畫引擎和 CRDT 來處理即時協作。這樣的設計雖然簡化了使用流程，但也可能在未來擴展功能時面臨挑戰，特別是在處理大型簡報時的效能問題。整體來看，這種單一檔案的架構使得 Bento 在資料管理上具備優勢，但在功能擴展上可能需要更多的考量。

## 技術深入分析

Bento 使用 TypeScript 和 JavaScript 開發，並將所有功能整合於單一 HTML 檔案中，這樣的設計使得使用者能夠在任何現代瀏覽器中直接運行。核心的資料模型由 `slides/src/model.ts` 定義，並使用自家開發的動畫引擎來處理簡報中的動態效果。即時協作功能則是透過 CRDT 實現，這使得多位使用者能夠同時編輯而不會產生衝突。效能方面，由於所有資料都存儲在單一檔案中，對於大型簡報的處理可能會面臨挑戰，特別是在需要即時更新的情況下。整體架構的選擇使得 Bento 在資料管理上具備優勢，但在擴展性上可能需要進一步的考量。對於使用者來說，這樣的設計能夠提供更高的資料安全性和控制權，但也可能在功能上有所限制。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，並包含了安裝和使用的範例。安裝過程相對簡單，使用者只需下載 HTML 檔案並在瀏覽器中打開即可開始使用。文件中有多語言版本，對於不同語言的使用者友好。

## 優缺點分析

> [!success] 優點
> - 無需安裝，使用者只需打開 HTML 檔案即可使用所有功能。
> - 資料以可讀的 JSON 格式儲存，未來可持續使用。
> - 支援即時協作，並且能在離線狀態下進行編輯。

> [!danger] 缺點
> - 目前仍有一些功能上的限制，例如在移動設備上的顯示問題。
> - 即時協作中的 Undo 功能可能會影響其他使用者的編輯。
> - 對於大型簡報的效能可能會受到影響。

> [!warning] 注意事項
> - 目前仍有一些開放的問題，例如 MathJax 渲染問題。
> - 在移動設備上顯示可能存在問題，特別是簡報列表的顯示。
> - Undo 功能在即時協作中可能會導致回退其他使用者的變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了一個針對 AI 代理的簡報生成工具，但不支援即時協作功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料可視化，適合需要圖表功能的使用者，但缺乏簡報功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的簡報生成，使用 Python 實作，記憶體用量相對較低，但功能不如 Bento 完整。 | 如果你的團隊需要針對 AI 代理進行簡報生成，且不需要即時協作功能。 | medium，因為需要重新適應不同的工作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料可視化，使用 JavaScript 實作，適合需要圖表功能的使用者，但不支援簡報功能。 | 如果你的專案主要需要資料可視化，而不需要簡報功能。 | low，因為兩者都是基於 JavaScript 開發。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **bento** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代理的簡報生成，使用 Python 實作，記憶體用量相對較低，但功能不如 Bento 完整。 | 專注於資料可視化，使用 JavaScript 實作，適合需要圖表功能的使用者，但不支援簡報功能。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的工作流程。 | low，因為兩者都是基於 JavaScript 開發。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要針對 AI 代理進行簡報生成，且不需要即時協 | 如果你的專案主要需要資料可視化，而不需要簡報功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的簡報需求，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在移動設備上顯示可能存在問題，特別是簡報列表的顯示。
  - 解法：建議在桌面環境中使用，或使用平板設備進行展示。
- **[HIGH]** 即時協作中的 Undo 功能可能會影響其他使用者的編輯。
  - 解法：在編輯時注意其他使用者的變更，避免同時編輯同一元素。
- [MEDIUM] MathJax 渲染問題可能導致數學公式顯示不正確。
  - 解法：在編輯時檢查公式的顯示，必要時手動調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的簡報需求 | 非常適合 | 即時協作和離線編輯功能非常符合小型團隊的需求。 |
| 大型企業的正式簡報 | 不適合 | 可能在大型簡報的效能上會有瓶頸。 |
| 教育機構的課堂簡報 | 適合 | 單一檔案格式方便學生下載和使用。 |
| 需要高隱私的簡報需求 | 非常適合 | 本地運行且不依賴雲端服務，確保資料安全。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個完全獨立的簡報工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Bento 不需要高權限，所有數據存儲在本地檔案中，並且使用加密技術確保安全性。對於 CI/CD 的整合也不會暴露敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Bento 最常與現有的簡報工具鏈搭配使用，特別是在需要本地運行的情況下。使用者可以在一個用 Node.js 開發的環境中，透過簡單的指令來啟動開發伺服器。與主流的 CI/CD 工具如 GitHub Actions 兼容，並且可以在 VS Code 等 IDE 中進行開發。整合的摩擦點主要在於需要確保 Node.js 環境的正確配置，否則可能會影響開發流程。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Bento 出現之前，許多簡報工具依賴於雲端服務，這使得使用者的資料面臨鎖定和隱私問題。隨著對資料隱私的重視增加，Bento 提供了一個獨立的解決方案，讓使用者能夠完全控制自己的資料。技術上，隨著 HTML5 和 JavaScript 的發展，將所有功能整合於單一檔案中變得可行，這使得 Bento 成為一個具有前瞻性的選擇。

未來，隨著更多功能的推出，Bento 可能會成為簡報工具的主流選擇。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nyblnet--bento");
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
> const me = dv.page("Repos/nyblnet--bento");
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
| Forks | 66 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-07-24 |
| 建立日期 | 2026-07-17 |
| Repo 大小 | 20.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nyblnet/bento) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 76
>     "JavaScript" : 14
>     "HTML" : 7
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nyblnet](https://github.com/nyblnet) | 308 |
> | [@tura-ai-agent](https://github.com/tura-ai-agent) | 3 |

**最新版本**：v1.0.7 (2026-07-22)

> [!info]- Release Notes
> Bento Slides v1.0.7 — the whole app in one ~571 KB HTML file (viewer + editor + data + collab).
> 
> **Changes**
> - **Editable morph id.** An optional `morphId` lets you pair two independently-created elements to morph across slides without touching their stable `id` (selection, connectors, comments and live-collab identity stay put). New **Morph** section in the element panel: a "Morph id" field and a "Pair with" picker; same-slide collisions are rejected inline. Default id-based morph is unchanged — old decks behave identically.
> - **8K fullscreen fill.** Presentations now fill high-resolution displays. Reveal's default 2× scale cap letterboxed decks in the middle of 4K/5K/8K screens; that cap is lifted (content is vector/text and upscales crisply).
> - **In-place update keeps its handle.** Updating a double-clicked deck no longer re-prompts every time — the save-picker handle is retained, so after a one-time overwrite of your open file, updates rewrite it in place silently.
> 
> Download the attached `Bento_Slides.bento.html` and open it in any browser — it *is* the app. Or try it live at https://bento.page/slides

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率較低。
**連結**：[文件](https://bento.page/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-23 ~ 2026-07-24）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #29 from nyblnet/format-panel-ui

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/nyblnet/bento/issues/15) | MathJax rendering `enhancement` | 3 | 0 |
> | [#31](https://github.com/nyblnet/bento/issues/31) | Add a button to start a presentation from scratch `enhancement` | 0 | 0 |
> | [#30](https://github.com/nyblnet/bento/issues/30) | Can't delete a slide in a presentation with two slides. `bug` | 0 | 0 |
> | [#22](https://github.com/nyblnet/bento/issues/22) | FR: link to github from the about `enhancement` | 0 | 0 |
> | [#20](https://github.com/nyblnet/bento/issues/20) | Horizontal Slide List on Mobile view `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # [Bento — the office suite that fits in a file](https://bento.page/)
> 
> [English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md)
> 
> **This PowerPoint alternative is a single HTML file.** A Bento deck carries
> its own viewer, presenter, and editor inside the document — open it in any
> browser, edit it, present it, send it. The person you send it to needs
> nothing: the file *is* the software.
> 
> **Try it in 10 seconds:** open [bento.page/slides](https://bento.page/slides)
> — that's the entire app, running on a starter deck that doubles as the
> feature tour. Or grab a designed template from the
> [gallery](https://bento.page/) and make it yours.
> 
> **Download the app:** grab the single `Bento_Slides.bento.html` from the
> [GitHub Releases](https://github.com/nyblnet/bento/releases) page or straight
> from [bento.page](https://bento.page/releases/slides/Bento_Slides.bento.html)
> (~560 KB, no account, no installer). Open it in any modern browser and it *is*
> the editor. Save, and it rewrites itself with your deck inside.
> 
> ## Why this exists
> 
> Office documents used to be things you *had*. Now they're things you rent —
> locked in someone's cloud, behind someone's login, readable only while a
> company keeps its servers on. Bento takes the other path:
> 
> - **One file, forever.** Deck, fonts, images, charts, animations, and the
>   full editor travel together. A copy from 2026 will open in 2036.
> - **View-source honest.** Your data sits in a plain, readable JSON block at
>   the top of the file. No binary formats, no lock-in, no archaeology.
> - **It saves itself.** The file rewrites its own data block on save (File
>   System Access API, with a download fallback). No app to install, ever.
> - **Local-first, provably.** Flip on Offline mode and nothing leaves your
>   machine — updates and collaboration are hard-blocked, and the app says so.
> 
> ## What's inside
> 
> | Feature | Description |
> |---|---|
> | **Morph presenting** | Elements that share an id animate between slides — position, size, color, even gradients. Duplicate a slide, rearrange, and the motion designs itself. |
> | **Live collaboration** | E2EE (AES-GCM) with keys that live in your file, never on a server. The file itself is the invitation: anyone who opens a copy joins. Offline edits merge back precisely — our own CRDT, character-level text merging included. |
> | **A blind relay** | The optional sync relay ([`server/sync-worker/`](server/sync-worker/)) stores ciphertext and learns nothing. Read the source; it's about one file. |
> | **Charts, built in** | Bar / line / pie / scatter drawn by our own dependency-free engine, live during presentations: tooltips, zoom, and data that morphs when a bar chart becomes a pie. |
> | **Designed for AI** | The document is plain JSON in the file, so agents edit `.bento.html` files in place and chatbots round-trip the JSON (`window.bento.loadDoc`). See [docs/agents.md](docs/agents.md). |
> | **Signed self-updates** | Releases are ECDSA-signed and offered in-app. Updating writes a *new* file — the old one stays as your rollback. No server ever touches your documents. |
> | **Everything else** | Speaker view, comments, layouts, hidden interactive states, hover reveals, motion paths, PDF export, page sizes, 8 UI languages — in a ~560 KB shell. |
> 
> ## Use it with AI
> 
> Because the document is plain JSON living in one plaintext block near the top
> of the file, any assistant that can read and write a file can edit your deck —
> no plugin, no API. Two ways in:
> 
> - **File harnesses** edit the `#bento-doc` JSON in place:
>   [Claude Code](https://claude.com/claude-code), Cursor, Aider, or any agent
>   with filesystem access. Claude Code users get a packaged `bento-slides`
>   skill (installable from this repo's plugin marketplace: `/plugin marketplace
>   add nyblnet/bento`) that even downloads the latest Bento app by itself.
> - **Chat round-trip** for any chatbot: copy the document JSON out (*About →
>   Copy document JSON*), let the assistant rewrite it, paste it back.
> 
> **It works fully offline with local open-weight models** — point
> [Ollama](https://ollama.com), llama.cpp, or LM Studio at the deck and nothing
> leaves your machine. The agent guide is a single page you can drop into any
> model's context: [bento.page/agents.md](https://bento.page/agents.md) (also in
> this repo at [docs/agents.md](docs/agents.md)).
> 
> ## Architecture in one paragraph
> 
> `slides/src/model.ts` defines the JSON document model; one renderer
> (`render.ts`) draws it for the editor canvas, thumbnails, and present mode
> (Reveal.js drives navigation; morphs are computed from the model, not the
> DOM). Animation is an in-house engine (`anim.ts`), charts are in-house
> (`charts.ts`), collaboration is an in-house CRDT (`sync/crdt.ts` — pure
> data, fuzz-tested by `scripts/test-sync.ts` across hundreds of thousands of
> convergence checks). The shell compresses to ~560 KB with the document block
> left as plaintext so old files and outside tools can always splice it. The
> deep dive: [docs/architecture.md](docs/architecture.md).
> 
> ## Security model, honestly
> 
> - Collab keys are minted client-side at document creation and live only in
>   the file. Possession of the file = membership; "Rotate keys" = revocation.
> - The relay sees: ciphertext, connection timing, and a hash of the room key.
>   It cannot read content, names, or structure.
> - Presence names are claims, not proofs — fine within a shared-key room;
>   enterprise identity would need signed frames (designed, not built).
> - Update checks fetch a static manifest and send nothing about you or your
>   document. Signature + hash + version monotonicity are verified in-app.
> - Known trade-offs: undo during live collab is snapshot-based and can revert
>   a collaborator's concurrent edit to the same property; editing is
>   desktop-first (phones view and present well).
> 
> ## Build from source
> 
> Node 20+ and npm are all you need — the app is a single-page build with no
> backend to stand up.
> 
> ```bash
> cd slides
> npm install
> npm run dev            # dev server (http://localhost:5173)
> npm run build:single   # → dist-single/Bento_Slides.bento.html (the product)
> ```
> 
> `node scripts/test-sync.ts` runs the CRDT convergence rig. Releases are cut
> locally so the signing key never leaves the maintainer's machine — see
> [docs/RELEASING.md](docs/RELEASING.md).
> 
> ## Where to read more
> 
> - [CLAUDE.md](CLAUDE.md) — the deep architecture + development guide (also what
>   AI agents read to work in this repo).
> - [docs/architecture.md](docs/architecture.md) — how a `.bento.html` file is
>   built, the on-disk format, and the runtime layout.
> - [docs/format.md](docs/format.md) — the normative `bento/slides` document-model
>   spec (every element type, slide/state/layout shape, and collab fields).
> - [docs/collab-design.md](docs/collab-design.md) — the CRDT, E2EE relay, and
>   signed-write RBAC design + threat model.
> - [docs/agents.md](docs/agents.md) — the document format, for AI agents.
> - [CHANGELOG.md](CHANGELOG.md) — the version history.
> - **Layout:** `slides/` is the app (source in `slides/src/`);
>   `server/sync-worker/` is the blind relay; `docs/` and `scripts/` are the
>   guides and build tooling.
> 
> Contributions welcome — start with [CONTRIBUTING.md](CONTRIBUTING.md). Found a
> security issue? See [SECURITY.md](SECURITY.md).
> 
> ## Roadmap
> 
> **Bento/Slides** is the first app of Bento/Suite — a PowerPoint alternative,
> shipping now. **Docs** (`bento/docs`) and **Sheets** (`bento/sheets`) follow,
> each as its own self-contained `.bento.html` distributable. The current release
> lives on [bento.page](https://bento.page) and reaches every existing file
> through the signed update channel.
> 
> ## License
> 
> Bento is open source under the [MIT License](LICENSE) — all software here is
> MIT, © 2026 The Bento/Suite authors. Bundled runtime components (reveal.js,
> Moveable, Selecto) are MIT; the embedded typefaces (Fraunces, Instrument Sans)
> are OFL; gallery imagery is public-domain (see
> `scripts/gallery-photos/SOURCES.md`). Each component keeps its own license.

## 延伸閱讀

相關概念：[[即時通訊]] · [[資料視覺化]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Russell-cell--PPT-Design-Prompt|Russell-cell/PPT-Design-Prompt]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[zarazhangrui--beautiful-html-templates|zarazhangrui/beautiful-html-templates]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[calesthio--Crucix|calesthio/Crucix]]

[GitHub](https://github.com/nyblnet/bento)

## 相關收錄

> [!note]- 直接競品（同子分類：簡報工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "簡報工具" AND file.name != "nyblnet--bento"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "nyblnet--bento"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "nyblnet--bento" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "nyblnet--bento"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["即時通訊","資料視覺化","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nyblnet--bento" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nyblnet--bento");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nyblnet--bento" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nyblnet" AND file.name != "nyblnet--bento"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nyblnet--bento");
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
> const me = dv.page("Repos/nyblnet--bento");
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
> const me = dv.page("Repos/nyblnet--bento");
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
> const me = dv.page("Repos/nyblnet--bento");
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
> const me = dv.page("Repos/nyblnet--bento");
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

> **2026-07-24** — 首次收錄
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

- [[2026-07-24|2026-07-24]] — 首次收錄，1.2k stars
