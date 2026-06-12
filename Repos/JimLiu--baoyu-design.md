---
repo: JimLiu/baoyu-design
url: https://github.com/JimLiu/baoyu-design
owner: JimLiu
owner_type: User
language: JavaScript
license: MIT
description: "Run Claude Design locally as an Agent Skill — Cursor, Claude Code & more. Produce polished UI mockups, prototypes, decks & wireframes as self-contained HTML, without claude.ai/design. Best with Opus 4.8."
homepage: ""
stars: 772
stars_per_day: 154
forks: 60
open_issues: 0
created: 2026-06-07
pushed_at: 2026-06-11
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "設計工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "讓你在本地運行 Claude Design，生成精美的 UI 模擬圖、原型和線框圖，無需上傳或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-19"
contributor_count: 4
engagement: "low"
issue_close_rate: 100
repo_size_kb: 7186
readme_length: 9842
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:522,2026-06-09:523,2026-06-10:638,2026-06-10:640,2026-06-11:692,2026-06-12:772"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skills"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/claude_design"
  - "topic/cursor"
aliases:
  - "baoyu-design"
  - "JimLiu/baoyu-design"
  - "讓你在本地運行 Claude Design，生成精美的 UI 模擬圖、原型和線框圖，無需上傳或訂閱。"
---

# baoyu-design

**640** stars · **213** stars/天 · 建立 3 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/JimLiu--baoyu-design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent-skills` `claude` `claude-code` `claude-design` `cursor` `design` `prototyping` `ui-design`

> [!summary] 一句話摘要
> 讓你在本地運行 Claude Design，生成精美的 UI 模擬圖、原型和線框圖，無需上傳或訂閱。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (213 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在本地環境中快速生成 UI 設計的開發者和設計師。
> **一句話重點** 這個專案讓設計師能夠在本地環境中高效生成和管理 UI 設計，顯著提高了設計流程的靈活性和效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JimLiu--baoyu-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "JimLiu--baoyu-design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，得到高效的本地設計工具，值得採用。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 Claude Design 打包為本地可運行的 Agent Skill，讓用戶能夠在本地環境中生成設計產物。

## 專案簡介

這個專案的核心機制是將 Claude Design 作為一個可攜式的 Agent Skill，讓用戶在本地編輯器中生成 UI 模擬圖、原型和其他設計產物。用戶只需將此技能安裝到支持的本地代理（如 Cursor 或 Claude Code）中，然後透過簡單的自然語言指令，如 '設計一個定價頁面'，就能生成自包含的 HTML 文件。這樣的設計省去了上傳和訂閱的麻煩，並且所有產出都保留在用戶的版本控制系統中。這個工具的賣點在於其能夠在本地環境中提供完整的設計流程，從提問到生成 HTML，並且支持即時預覽和編輯。技術上，它使用了 Markdown 和 JSX/JS 結構，無需複雜的建置步驟，並且能夠快速生成可用的設計資產。

與其他設計工具相比，如 Figma 或 Adobe XD，baoyu-design 提供了更高的靈活性，因為它不依賴於雲端服務，並且所有數據都存儲在本地。這對於需要快速迭代和本地化設計的開發者來說，特別有價值。使用者可以在本地環境中進行設計，並利用代理的預覽工具進行即時反饋，這樣的工作流程能夠顯著提高設計效率。這個專案的設計適合需要快速生成和修改 UI 的團隊，特別是那些已經在使用 Claude 系列工具的開發者。未來的發展可能會集中在擴展功能和增強與其他設計系統的整合能力。

**技術棧**：`Node.js` · `Python 3` · `JavaScript`

## 重點功能

- 本地運行 — 將 Claude Design 作為 Agent Skill，無需上傳或訂閱。
- 自包含的 HTML 輸出 — 所有設計產物直接生成 HTML 文件，方便版本控制。
- 即時預覽 — 支持本地預覽和即時編輯，提升設計效率。
- 多樣化的設計產出 — 支持生成 UI 模擬圖、原型、線框圖、簡報等多種格式。
- 與 Claude Opus 4.8 最佳搭配 — 提供最佳的設計結果，支持多種代理環境。

## 快速開始

1. 安裝技能到當前專案
```bash
npx skills add JimLiu/baoyu-design
```
2. 全局安裝技能
```bash
npx skills add JimLiu/baoyu-design -g
```
3. 啟動預覽伺服器
```bash
python3 -m http.server 4311 --directory designs
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 baoyu-design 技能",
  "指令": "Design 3 hi‑fi variations of a pricing page using the brand in this screenshot.",
  "預期輸出": "生成三個高保真的定價頁面設計，並以 HTML 格式輸出。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 640 stars（213/天），forks 48（7.5%），顯示出強勁的增長潛力。作者 JimLiu 過去在設計和開發領域有豐富經驗，這個專案解決了設計過程中需要依賴雲端服務的痛點，讓用戶能夠在本地環境中進行設計。這樣的設計不僅提高了效率，還保護了用戶的數據隱私。社群的反饋也很積極，已經有多個關鍵問題被迅速解決，顯示出良好的維護狀態。

## 適合誰使用

**目標受眾**：需要在本地環境中快速生成 UI 設計的開發者和設計師。

> [!example] 使用場景
> - UI 設計師用它來快速生成定價頁面的高保真設計，因為這樣能夠節省大量的手動設計時間，並且直接在本地環境中進行修改。
> - 前端開發者用它來創建一個移動應用的線框圖，因為這樣可以在不依賴網路的情況下，快速迭代設計並進行即時預覽。
> - 產品經理用它來製作一個針對內部會議的簡報，因為它能夠直接生成可編輯的 PPTX 文件，並且不需要額外的工具。

## 架構分析

這個專案採用模組化的架構，將設計技能分為多個組件，並使用 Markdown 和 JSX/JS 結構來描述設計過程。這樣的設計使得用戶可以輕鬆地在本地環境中運行，而無需複雜的建置步驟。資料流中，當用戶發出設計請求時，代理會讀取 SKILL.md 和 system-prompt.md，根據環境選擇合適的工具進行設計。

這種分離的設計使得技能可以在不同的代理環境中靈活運行，並且保持了設計規範的一致性。選擇這種架構的代價在於需要用戶具備一定的技術背景來設置環境，但這也帶來了更高的靈活性和控制權。擴展性方面，由於所有設計產物都存儲在本地，這使得用戶能夠方便地管理和版本控制設計資產。

未來可能的擴展包括增加對更多設計工具的支持和改進與現有設計系統的整合能力。

## 技術深入分析

baoyu-design 的核心技術機制在於將 Claude Design 的功能封裝為一個本地可運行的 Agent Skill，這樣的設計使得用戶能夠在本地環境中生成設計產物。它使用 Markdown 和 JSX/JS 結構來描述設計過程，這樣的設計不僅簡化了使用流程，還避免了繁瑣的建置步驟。效能方面，該工具能夠快速生成 HTML 文件，並且支持即時預覽，這對於需要快速迭代的設計工作特別有用。設計取捨方面，選擇使用本地運行的方式使得用戶能夠完全掌控自己的數據，但同時也要求用戶具備一定的技術背景來設置環境。技術風險方面，對於依賴於特定版本的 Claude 模型，未來可能會面臨兼容性問題。整合分析方面，該工具能夠與現有的開發工具鏈無縫對接，特別是在使用 Node.js 和 Python 的環境中，能夠輕鬆集成到 CI/CD pipeline 中，並且支持與主流 IDE 的協作。整體而言，baoyu-design 提供了一個靈活且高效的設計解決方案，適合需要快速生成和修改 UI 的開發者和設計師。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多語言版本，安裝過程相對順暢，但需要用戶具備 Node.js 和 Python 的基礎知識。提供了良好的快速入門指南，幫助新手快速上手。文件中沒有中文版本的詳細步驟，可能對部分用戶造成困難。

## 優缺點分析

> [!success] 優點
> - 無需依賴雲端服務，所有數據保留在本地。
> - 支持即時預覽和編輯，提升設計效率。
> - 能夠生成多種格式的設計產物，方便使用。

> [!danger] 缺點
> - 需要本地安裝 Node.js 和 Python，對新手不太友好。
> - 僅支持特定版本的 Claude 模型，限制了使用範圍。
> - 對於大型團隊可能缺乏協作功能，需手動管理版本。

> [!warning] 注意事項
> - 僅支援 Claude Opus 4.8 及以上版本。
> - 需要在本地安裝 Node.js 和 Python 3。
> - 不支援非 HTML 格式的輸出（如 Sketch 或 Figma 格式）。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的本地設計能力，但主要針對遊戲開發，功能範圍較窄。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計資產的管理和版本控制，而非即時設計生成。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 Codex 的功能，但不專注於 UI 設計，適用範圍較廣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Figma | 基於雲端的設計工具，提供即時協作功能，但需要網路連接。 | 如果你的團隊需要實時協作和雲端存儲，Figma 是更好的選擇。 | medium，因為需要將現有設計轉換為 Figma 格式。 |
| Adobe XD | 桌面應用程序，提供強大的設計和原型功能，但不支持本地運行。 | 如果你的團隊已經在使用 Adobe 生態系統，Adobe XD 會更合適。 | medium，因為需要將設計從其他工具轉移到 Adobe XD。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **baoyu-design** | **Figma** | **Adobe XD** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 基於雲端的設計工具，提供即時協作功能，但需要網路連接。 | 桌面應用程序，提供強大的設計和原型功能，但不支持本地運行。 |
> | 遷移成本 | - | medium，因為需要將現有設計轉換為 Figma 格式。 | medium，因為需要將設計從其他工具轉移到 Adobe XD。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要實時協作和雲端存儲，Figma 是更好的選擇 | 如果你的團隊已經在使用 Adobe 生態系統，Adobe X |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型項目，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，安裝過程可能會遇到 Node.js 版本不兼容的問題。
  - 解法：確保使用最新的 Node.js 版本。
- [MEDIUM] 生成的 HTML 文件在某些瀏覽器中可能無法正確顯示。
  - 解法：使用支持最新 HTML 標準的瀏覽器進行預覽。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 UI 設計工作 | 非常適合 | 能夠快速生成和迭代設計，並且所有數據保留在本地。 |
| 大型企業的設計流程 | 不適合 | 缺乏協作功能，無法滿足大型團隊的需求。 |
| 個人設計師的自由職業工作 | 適合 | 能夠靈活地在本地環境中進行設計，並且無需依賴網路。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到高效的本地設計工具，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，所有數據保留在本地，並且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

baoyu-design 最常與 Cursor 和 Claude Code 搭配使用，通常在設計開發的環節中運行。在一個使用 Node.js 的專案中，你可以用這個工具來生成 UI 模擬圖，具體做法是安裝技能後，直接在編輯器中輸入設計請求。該工具支持與 GitHub Actions 等 CI 工具的整合，並且能夠與 VS Code 等主流 IDE 兼容。整合的摩擦點主要在於對 Node.js 和 Python 的依賴，對於不熟悉這些技術的用戶來說，可能需要額外的學習成本。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 baoyu-design 出現之前，設計師通常依賴於雲端工具如 Figma 或 Adobe XD 進行設計，這些工具雖然功能強大，但也帶來了數據隱私和網路依賴的問題。隨著本地運行工具的需求增加，baoyu-design 應運而生，提供了一個靈活且高效的設計解決方案。這個工具代表了設計工具向本地化和自主化的趨勢，未來可能會有更多類似的工具出現，滿足不同用戶的需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解基本的 HTML/CSS
- 有設計工具使用經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品中開始使用。

**成功指標**：設計產出時間減少 30%，設計質量提高。

> [!warning] 退出計畫
> 所有設定和設計文件以標準格式存儲，可以輕鬆轉移到其他設計工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
| Forks | 48 |
| Open Issues | 0 |
| Issue 解決率 | 100% (3 closed) |
| 最後推送 | 2026-06-09 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 7.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JimLiu/baoyu-design) |
| Topics | `agent-skills` `claude` `claude-code` `claude-design` `cursor` `design` `prototyping` `ui-design` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JimLiu](https://github.com/JimLiu) | 25 |
> | [@easonshen90](https://github.com/easonshen90) | 1 |
> | [@HCS9527](https://github.com/HCS9527) | 1 |
> | [@y122972](https://github.com/y122972) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達 100%。
**連結**：[文件](https://github.com/JimLiu/baoyu-design)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-08 ~ 2026-06-09）
> **活躍天數** 2 天 · **最新 commit** Expose PascalCase .jsx/.tsx exports without .d.ts

## README 摘錄

> [!info]- 展開查看原文 README
> # baoyu-design
> 
> **Run Claude Design on your own local agent — Cursor, Claude Code, Claude Desktop, or any file‑capable coding agent.**
> 
> [English](README.md) · [简体中文](README.zh-CN.md) · [Changelog](CHANGELOG.md)
> 
>   
> 
> `baoyu-design` packages **Claude Design** — the design engine behind [claude.ai/design](https://claude.ai/design) — as a portable **Agent Skill**. Drop it into a local agent and you get most of what the website does, right inside your editor: polished UI mockups, interactive prototypes, wireframes, landing pages, dashboards, mobile apps, and slide decks — all produced as self‑contained HTML.
> 
> No website, no separate subscription, no upload step. The agent already on your machine does the work, and every artifact stays in your repo.
> 
> ---
> 
> 
> ## Quick start
> 
> 
> ### Prerequisites
> 
> - A local agent — **[Cursor](https://cursor.com)**, **[Claude Code](https://claude.com/claude-code)**, **[Codex](https://developers.openai.com/codex/)**, or any of the 70+ agents the installer supports (Cline, Roo Code, GitHub Copilot…). Cursor, Claude Code, and Codex have first‑class tool references inside the skill.
> - **Claude Opus 4.8** selected as the model, for best results.
> - **Node.js** (to run the `npx` installer below). **Python 3** is also handy for the local preview server.
> 
> 
> ### Install
> 
> **Recommended — the `skills` CLI.** [`npx skills`](https://github.com/vercel-labs/skills) (from Vercel Labs) reads this repo, finds `skills/baoyu-design/`, and drops it into the right folder for whatever agent it detects:
> 
> ```bash
> 
> # Install into the current project (auto‑detects your agent)
> npx skills add JimLiu/baoyu-design
> 
> 
> # …or install globally, for every project
> npx skills add JimLiu/baoyu-design -g
> 
> 
> ## Example prompts
> 
> - *"Design 3 hi‑fi variations of a pricing page using the brand in this screenshot."*
> - *"Prototype a working onboarding flow — real state, transitions, form validation."*
> - *"Make a 10‑slide deck from this PRD for an engineering all‑hands."*
> - *"Wireframe a few layout ideas for a mobile expense‑tracker home screen."*
> - *"Recreate the composer UI from this codebase, then export it as standalone HTML."*
> - *"Build a dashboard using our design system, starting from its analytics screen."*
> 
> For best results, **give it design context** — a screenshot, a UI kit, a Figma link, or a codebase. Starting from real context is the single biggest lever on quality; the skill will ask for it if you don't provide it.
> 
> ---
> 
> 
> ## What it can make
> 
> The skill drives a full design process — clarifying questions → gathering design context → producing one or more HTML deliverables → previewing and verifying. It ships **24 built‑in skills** and a set of ready‑made component scaffolds.
> 
> | Area | Built‑in skills |
> |---|---|
> | **Core design** | Hi‑fi design · Interactive prototype · Wireframe · Frontend aesthetic direction |
> | **Decks** | Make a deck · Speaker notes |
> | **Mobile & motion** | Mobile prototype · Animated video · Sound effects |
> | **Design systems** | Create design system · Design Components (`.dc.html`) · Make tweakable |
> | **Export & handoff** | Standalone HTML · PDF · PPTX (editable) · PPTX (screenshots) · Send to Figma · Send to Canva · Handoff to Claude Code |
> | **AI assets & integration** | Gemini image generation · Call Claude from prototypes · Read PDF |
> 
> **Starter components** (in [`starter-components/`](skills/baoyu-design/starter-components/)) save the agent from hand‑rolling the basics: iOS / Android / macOS / browser frames, a pan‑zoom design canvas, a slide‑deck stage, a timeline animation engine, a tweaks panel, and a fillable image slot.
> 
> ---
> 
> 
> ## Why run it locally
> 
> - **Free yourself from the website.** You get the vast majority of `claude.ai/design`'s capabilities without ever leaving your editor — same methodology, same craft standards, same output format.
> - **Best with Opus 4.8.** The skill is a long, demanding design brief; the stronger the model, the better the result. Pair it with **Claude Opus 4.8** for the best output, and it still works well on other capable models.
> - **Iterate by pointing, not describing.** Because the deliverable is plain HTML served on `localhost`, you can lean on your agent's built‑in browser preview and element‑annotation tools (Cursor Browser / DevTools, Claude Preview, or Codex Browser). Point at a button in the live preview, say what you want changed, and the agent edits the underlying source — a tight, visual second‑pass editing loop that's hard to get on a website.
> - **Everything is yours.** Output lands in `designs//` as self‑contained HTML you can version, fork, export, or ship.
> 
> ---
> 
> 
> ## Screenshots
> 
> The same Reader Mac App prompt was used in Cursor, Codex, Claude, and Claude Design.
> 
> | Cursor | Codex | Claude | Claude Design |
> |---|---|---|---|
> |  |  |  |  |
> 
> Prompt used for all screenshots
> 
> ```markdown
> Build a Reader Mac app that helps me read and save articles better. All data is stored locally.
> 
> 
> ## Information collection
> 
> 1. Manual adding
> Support manually adding different types of information:
> - URL: enter a URL and automatically fetch content and images
> - Attachments: upload PDFs, videos, and images
> - Markdown editing: like publishing a blog post, enter the title, body, and cover image
> - Other
> 
> 2. Automatic subscriptions
> - RSS feeds
> - Social media accounts: X, Weibo, YouTube
> - Other
> 
> 
> ## Editing and organization
> 
> 1. Tags
> Every item can have tags.
> 
> 2. Categories and folders
> Create tree-structured folders and place content in different categories.
> 
> 3. Favorites
> Users can click to favorite an item.
> 
> 4. Editing
> Every item can be edited with a built-in Markdown editor.
> 
> 
> ## AI assistance
> 
> 1. Automatic translation
> Support translation across different languages.
> 
> 2. Summaries and abstracts
> Generate summaries for captured content.
> 
> 3. Derivative creation
> Create new work based on one or more pieces of content.
> 
> 4. Integrated AI Chat
> Use AI Chat to call AI Agents that help process content.
> ```
> 
> ---
> 
> 
> ## How it works
> 
> The skill is plain Markdown plus a few JSX/JS scaffolds — no build step, no runtime.
> 
> ```
> skills/baoyu-design/
> ├── SKILL.md              # Entry point — orchestrates the whole flow
> ├── system-prompt.md      # The design methodology & craft standards (source of truth)
> ├── references/
> │   ├── claude.md         # Tool map for Claude Code
> │   ├── cursor.md         # Tool map for Cursor
> │   └── codex.md          # Tool map for Codex Agent
> ├── built-in-skills/      # 24 specialized prompts (decks, mobile, export, …)
> └── starter-components/   # Device frames, deck stage, canvas, animation engine, …
> ```
> 
> When you ask for a design, the agent reads `SKILL.md`, loads the core methodology from `system-prompt.md`, detects whether it's running in Cursor, Claude Code, Codex Agent, or a generic file‑capable harness, and reads the matching reference doc when one exists. It then pulls in only the built‑in skill(s) the task needs. The split keeps craft rules harness‑independent while each environment resolves its own tools for *asking questions*, *previewing*, *screenshotting*, and *verifying*.
> 
> ---
> 
> 
> # Target a specific agent explicitly
> npx skills add JimLiu/baoyu-design --agent claude-code
> npx skills add JimLiu/baoyu-design --agent cursor
> npx skills add JimLiu/baoyu-design --agent codex
> 
> 
> # Just list what's in the repo first
> npx skills add JimLiu/baoyu-design --list
> ```
> 
> It installs to `.claude/skills/` for Claude Code and `.agents/skills/` for Cursor/Codex-style agents (add `-g` for the `~/`‑level user install).
> 
> **Alternative — hand the repo URL to your agent.** Don't want to install anything? Paste the URL into chat and let the agent fetch the skill itself:
> 
> > Read https://github.com/JimLiu/baoyu-design and follow its `skills/baoyu-design/SKILL.md` to design a settings screen for a meditation app.
> 
> The agent clones or fetches the repo, loads `SKILL.md`, and proceeds — perfect for a one‑off.
> 
> 
> ### Use it
> 
> Once the skill is installed (or fetched), just describe a design task in plain language — it auto‑activates fr

## 延伸閱讀

相關概念：[[設計系統]] · [[UI/UX 設計]] · [[即時通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[OpenCoworkAI--open-codesign|OpenCoworkAI/open-codesign]] · [[alchaincyf--huashu-design|alchaincyf/huashu-design]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]]

[GitHub](https://github.com/JimLiu/baoyu-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "JimLiu--baoyu-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","UI/UX 設計","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "JimLiu--baoyu-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JimLiu--baoyu-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JimLiu" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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

> **2026-06-09** — 首次收錄
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

- [[2026-06-12|2026-06-12]] — 再次上榜，772 stars
- [[2026-06-11|2026-06-11]] — 再次上榜，692 stars
- [[2026-06-10|2026-06-10]] — 再次上榜，638 stars
- [[2026-06-09|2026-06-09]] — 首次收錄，522 stars
