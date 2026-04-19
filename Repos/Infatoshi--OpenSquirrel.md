---
repo: Infatoshi/OpenSquirrel
url: https://github.com/Infatoshi/OpenSquirrel
owner: Infatoshi
owner_type: User
language: Rust
license: MIT
description: "For people who get distracted by agents. A native Rust/GPUI control plane for running Claude Code, Codex, Cursor, and OpenCode side by side — because if you're going to be squirrely, you might as well optimize for it."
homepage: ""
stars: 1346
stars_per_day: 40
forks: 84
open_issues: 4
created: 2026-03-15
pushed_at: 2026-03-24
first_seen: 2026-03-22
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "多代理管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-22
use_case: "為了讓使用者能夠在多個 AI 編碼代理之間高效切換，提供一個原生的 Rust/GPUI 控制平面。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-25"
contributor_count: 1
engagement: "low"
issue_close_rate: 20
repo_size_kb: 48972
readme_length: 3792
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-22"
star_history: "2026-03-22:1235,2026-03-22:1236,2026-03-23:1270,2026-03-24:1290,2026-03-25:1312,2026-03-26:1316,2026-03-27:1315,2026-03-28:1314,2026-03-29:1315,2026-03-30:1317,2026-03-31:1321,2026-04-01:1326,2026-04-02:1327,2026-04-03:1333,2026-04-04:1336,2026-04-05:1340,2026-04-06:1342,2026-04-07:1341,2026-04-08:1342,2026-04-09:1345,2026-04-10:1344,2026-04-11:1341,2026-04-12:1343,2026-04-13:1343,2026-04-14:1343,2026-04-15:1344,2026-04-16:1346,2026-04-17:1345,2026-04-18:1345,2026-04-19:1346"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "OpenSquirrel"
  - "Infatoshi/OpenSquirrel"
  - "為了讓使用者能夠在多個 AI 編碼代理之間高效切換，提供一個原生的 Rust/GPUI 控制平面。"
---

# OpenSquirrel

**1.3k** stars · **40** stars/天 · 建立 34 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/Infatoshi--OpenSquirrel");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 為了讓使用者能夠在多個 AI 編碼代理之間高效切換，提供一個原生的 Rust/GPUI 控制平面。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (40 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 25 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在多個 AI 編碼工具之間高效切換的開發者，特別是對終端操作熟悉的使用者。
> **一句話重點** OpenSquirrel 的經驗告訴我們，終端機的靈活性和簡單性在多代理管理中更具優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多代理管理" && p.file.name !== "Infatoshi--OpenSquirrel" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多代理管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** archived · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** high
> **結論** 花 5 小時學習、3 小時整合，得到的效果有限，因為專案已被歸檔，未來可能無法獲得支持。

> [!abstract] 核心創新
> 使用 GPU 渲染的原生多代理管理工具，旨在提供更高效的 AI 編碼體驗。

## 專案簡介

OpenSquirrel 是一個用於管理多個 AI 編碼代理的工具，透過 GPU 渲染的方式實現了高效的視覺化界面。使用者可以同時運行 Claude Code、Codex、Cursor 和 OpenCode，並且具備自動子代理委派、SSH 遠程機器目標設定及持久會話等功能。這個專案的核心賣點在於它的多代理管理能力，讓使用者能夠在一個視窗中高效地協調多個 AI 工具。技術上，OpenSquirrel 使用 Rust 和 GPUI 框架，這使得它在性能上有優勢，特別是在 GPU 渲染方面，能夠提供流暢的用戶體驗。與其他 CLI 工具相比，如 Codex 和 Cursor，OpenSquirrel 提供了一個更為視覺化的操作界面，但這也帶來了複雜性，因為用戶可能需要適應新的操作方式。

實際使用中，這個工具的效能和靈活性受到限制，特別是在處理多個代理時，可能會遇到性能瓶頸。根據 README 的內容，這個專案已經被歸檔，顯示出作者對於使用 GUI 來協調 AI 代理的想法已經改變，認為使用終端機的方式更為高效。這意味著，對於習慣於終端操作的開發者來說，OpenSquirrel 可能並不是最佳選擇。對於希望在多個 AI 工具之間進行切換的用戶，OpenSquirrel 提供了一個有趣的選擇，但考慮到其已被歸檔，使用者應該謹慎評估其長期可用性。

**技術棧**：`Rust 1.85+` · `GPUI 0.2` · `async-channel 2`

## 重點功能

- 多代理管理 — 同時運行 Claude Code、Codex、Cursor 和 OpenCode，支持自動子代理委派。
- GPU 渲染 — 使用 GPUI 框架提供流暢的用戶界面。
- SSH 遠程目標 — 支持通過 SSH 連接遠程機器，實現持久會話。
- 配置文件 — 使用 `~/.osq/config.toml` 進行靈活配置，支持多種運行時。
- 多主題支持 — 提供 7 種主題選擇，滿足不同用戶的需求。

## 快速開始

1. 安裝 Rust 和相關依賴
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
2. 構建專案
```bash
cargo build --release
```
3. 運行應用
```bash
cp target/release/opensquirrel dist/OpenSquirrel.app/Contents/MacOS/OpenSquirrel-bin && open dist/OpenSquirrel.app
```

## 程式碼範例

```rust
{
  "前置條件": "需要 Rust 1.85+ 和 macOS (Metal GPU)",
  "指令": "cargo build --release",
  "預期輸出": "構建成功，生成可執行文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 34 天就累積 1346 stars（39.5/天），forks 84（6.2%），這顯示出一定的關注度。作者 Infatoshi 在開源社群中有一定的影響力，這個專案解決了多代理管理的需求，但最終發現使用終端機更為高效。這一發現反映了使用者對於簡單工具的偏好，並且在技術生態中，終端機的使用習慣已經根深蒂固。這個專案的流行可能源於對於多代理協調的需求，但最終的結論是，簡單的 CLI 工具更符合使用者的需求。forks/stars 比率為 6.2%，顯示出一些使用者對於進一步定制的興趣。

## 適合誰使用

**目標受眾**：希望在多個 AI 編碼工具之間高效切換的開發者，特別是對終端操作熟悉的使用者。

> [!example] 使用場景
> - 後端工程師用它來同時運行多個 AI 編碼代理，因為這樣可以在一個界面中高效管理不同的工具。
> - AI 研究人員用它來測試不同的 AI 模型，因為它支持持久會話和自動子代理委派，能夠快速切換上下文。
> - 開發者用它來進行多任務處理，因為它的 GPU 渲染能夠提供流暢的操作體驗，適合需要高效能的工作環境。

## 架構分析

OpenSquirrel 採用 Rust 和 GPUI 框架，設計上旨在提供一個 GPU 渲染的多代理管理界面。資料流方面，使用者透過終端命令與各個 AI 代理互動，並將結果回饋至 GUI。這樣的設計使得使用者能夠在一個視窗中高效管理多個代理，但也帶來了性能上的挑戰，特別是在處理大量資料時。選擇 Rust 作為開發語言提供了高效能和安全性，但也增加了學習曲線。由於專案已被歸檔，未來的擴展性和維護性將受到限制，這對於長期使用者來說是一個風險。

## 技術深入分析

OpenSquirrel 的核心技術機制是基於 Rust 和 GPUI 的 GPU 渲染，這使得它能夠提供高效的視覺化界面。使用者可以透過終端命令與多個 AI 代理進行互動，這樣的設計使得資料流動更為直接。然而，這也帶來了一些性能瓶頸，特別是在同時處理多個代理時，可能會導致延遲。選擇 Rust 作為開發語言提供了高效能和安全性，但也增加了學習曲線，對於新手來說可能會有一定的挑戰。由於專案已被歸檔，未來的維護和擴展性將受到限制，這對於長期使用者來說是一個風險。整合方面，這個工具與現有的 CLI 工具鏈相容性良好，但由於其 GUI 的複雜性，可能會增加使用者的學習成本。對於希望在多個 AI 工具之間進行切換的用戶，OpenSquirrel 提供了一個有趣的選擇，但考慮到其已被歸檔，使用者應該謹慎評估其長期可用性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的說明，但缺乏具體的範例和使用指南。安裝過程相對順暢，但對於新手來說可能會有一些挑戰。整體來說，花 30 分鐘能夠成功運行起來，但需要一定的 Rust 知識。

## 優缺點分析

> [!success] 優點
> - 支持多個 AI 編碼代理的同時運行，提供靈活的工作流程。
> - GPU 渲染提供流暢的用戶體驗，適合高效能需求。
> - 配置靈活，支持多種運行時和主題選擇。

> [!danger] 缺點
> - 已被歸檔，未來可能無法獲得支持或更新。
> - 對於 Windows 用戶不友好，僅支持 macOS 和 Linux。
> - 性能可能受到多代理同時運行的影響，特別是在資源有限的情況下。

> [!warning] 注意事項
> - 不再積極維護，未來可能無法獲得更新或支持。
> - 僅支持 macOS 和 Linux，對於 Windows 用戶不友好。
> - 性能可能受到多代理同時運行的影響，特別是在資源有限的情況下。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多代理管理功能，但專注於 CLI 工具的整合，沒有 GUI 的複雜性。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於 AI 代理的協調，但不提供圖形界面，適合喜歡終端操作的用戶。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供了對 Claude 的集成，但不支持多代理同時運行，適合單一代理的使用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多代理管理功能，但專注於 CLI 工具的整合，沒有 GUI 的複雜性。 | 如果你的團隊已經習慣使用 CLI 工具，且不需要額外的 GUI 界面。 | low，因為兩者的功能相似，轉換成本不高。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於 AI 代理的協調，但不提供圖形界面，適合喜歡終端操作的用戶。 | 如果你希望在終端中進行更靈活的操作，而不需要 GUI 的限制。 | medium，因為需要重新適應 CLI 的操作方式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供了對 Claude 的集成，但不支持多代理同時運行，適合單一代理的使用場景。 | 如果你的工作流程主要依賴於 Claude，而不需要其他代理的支持。 | low，因為功能相對單一，轉換簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSquirrel** | **boneyard** | **codeburn** | **claude-obsidian** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的多代理管理功能，但專注於 CLI 工具的整合，沒有 GUI 的複雜性。 | 專注於 AI 代理的協調，但不提供圖形界面，適合喜歡終端操作的用戶。 | 提供了對 Claude 的集成，但不支持多代理同時運行，適合單一代理的使用場景。 |
> | 遷移成本 | - | low，因為兩者的功能相似，轉換成本不高。 | medium，因為需要重新適應 CLI 的操作方式。 | low，因為功能相對單一，轉換簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經習慣使用 CLI 工具，且不需要額外的 GU | 如果你希望在終端中進行更靈活的操作，而不需要 GUI 的限制 | 如果你的工作流程主要依賴於 Claude，而不需要其他代理的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | archived |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 不建議在生產環境中使用，因為專案已被歸檔，未來可能無法獲得支持。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 專案已被歸檔，未來可能無法獲得支持或更新
  - 解法：考慮使用其他活躍的替代方案
- [MEDIUM] 性能可能受到多代理同時運行的影響
  - 解法：在資源充足的環境中運行，避免同時啟動過多代理
- [MEDIUM] 對於 Windows 用戶不友好，僅支持 macOS 和 Linux
  - 解法：考慮使用虛擬機或 WSL 運行 Linux 環境

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 不適合 | 因為專案已被歸檔，未來可能無法獲得支持。 |
| AI 研究團隊需要同時運行多個 AI 模型 | 普通 | 雖然可以使用，但性能和支持有限。 |
| 希望在終端中靈活操作的開發者 | 適合 | 對於喜歡 CLI 的用戶來說，這是一個有趣的選擇。 |
| 大型企業需要穩定的多代理管理工具 | 不適合 | 因為專案已被歸檔，無法保證穩定性和支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | high |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到的效果有限，因為專案已被歸檔，未來可能無法獲得支持。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，但由於已被歸檔，未來的安全性無法保證。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenSquirrel 最常與各種 AI 編碼代理搭配使用，特別是在需要同時運行多個代理的情境下。實際整合範例中，使用者可以在終端中運行 `claude` 和 `codex`，並透過配置文件來管理不同的運行時。與主流工具鏈的相容性良好，能夠與現有的 CLI 工具無縫整合，但由於其 GUI 的複雜性，可能會增加使用者的學習成本。整合的摩擦點主要在於需要適應新的操作方式，對於習慣於終端操作的用戶來說，這可能會造成一定的困擾。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenSquirrel 出現之前，開發者主要依賴 CLI 工具來管理多個 AI 編碼代理，這些工具雖然功能強大，但缺乏視覺化的操作界面。隨著 GPU 渲染技術的進步，開發者希望能夠提供一個更為直觀的管理方式。然而，OpenSquirrel 的經驗告訴我們，終端機的靈活性和簡單性在多代理管理中更具優勢。

這個專案的出現反映了對於多代理協調的需求，但最終的結論是，簡單的 CLI 工具更符合使用者的需求。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Rust
- 了解 CLI 工具的使用
- 有基本的 GPU 渲染知識

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：評估使用效果，決定是否繼續使用。

**成功指標**：多代理管理的效率提高，開發時間減少。

> [!warning] 退出計畫
> 如果要退出這個工具，所有設定存在標準 TOML 格式，可以輕鬆轉換為其他工具的配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
| Forks | 84 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-03-24 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 47.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Infatoshi/OpenSquirrel) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `gpui` `async-channel` `serde` `serde_json` `toml` `anyhow` `gpui-terminal` `portable-pty` `ctrlc` `libc`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Infatoshi](https://github.com/Infatoshi) | 17 |

## 社群與生態

**社群活躍度**：社群活躍度不高，僅有少數開發者參與。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-24）
> **活躍天數** 4 天 · **最新 commit** Archive project: update README with learnings, fix assistant message parsing

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Infatoshi/OpenSquirrel/issues/9) | Screenshots? | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> OpenSquirrel
> 
>   This project is no longer actively maintained.
>   Fork it, customize it, make it yours.
> 
>   
> 
> ## What it was
> 
> A native, GPU-rendered tiling manager for AI coding agents. Rust + GPUI. Run Claude Code, Codex, Cursor, Gemini, and OpenCode side by side with automatic sub-agent delegation, remote machine targeting via SSH, and persistent sessions.
> 
> ## Why it's archived
> 
> After a week of building this, I arrived at a simpler conclusion: **you don't need a custom GUI to orchestrate AI agents.**
> 
> Here's what I learned:
> 
> **The terminal already won.** Every AI coding CLI (Claude Code, Codex, Cursor Agent, Gemini CLI, OpenCode) ships with a polished terminal TUI. Building a Rust GUI that parses their JSON output and re-renders it will always be worse than just... using the native TUI. Users are comfortable in their terminal. They don't want a new window.
> 
> **Delegation is a prompt, not a product.** The entire coordinator/worker delegation system -- spawning sub-agents across runtimes, collecting results, feeding them back -- can be done with 4 lines in a `CLAUDE.md` file telling the model to use `cursor agent --print` or `codex exec` via Bash. No orchestration daemon needed. No hooks. No middleware. Claude Code's Agent tool already handles internal delegation. For external CLIs, just run them headless.
> 
> **Token tracking already exists.** [CodexBar](https://github.com/steipete/CodexBar) sits in your macOS menu bar and tracks usage across Claude, Codex, Cursor, Gemini, and more by reading their local data files. No need to build this into a GUI.
> 
> **The architectural mismatch.** Using Claude Code (a Node/Bun process) to build and iterate on a Rust GPU application through JSON stream parsing is a bizarre feedback loop. The model is trained on terminal interactions, not on debugging GPUI render pipelines. Every feature took 10x longer than it should have because the tooling fought the workflow.
> 
> **Models aren't good enough yet for opinionated UX.** Nobody knows the right workflow for multi-agent coding. Building a rigid UI around one workflow locks you in. The terminal is infinitely flexible. Wait for patterns to emerge before building products around them.
> 
> ## What works instead
> 
> The setup I actually use now:
> 
> - **Terminal**: Ghostty (or whatever you prefer)
> - **Agents**: Run them directly -- `claude`, `codex`, `cursor agent`, `gemini`
> - **Delegation**: Instructions in `~/.claude/CLAUDE.md` telling Claude to run external CLIs via Bash when asked
> - **Token tracking**: CodexBar (menu bar app, reads local files)
> - **Multi-agent**: Just open multiple terminal tabs/panes
> 
> That's it. No custom software. The orchestration layer is a config file.
> 
> ## If you want to use or fork this
> 
> The code works. The `legacy` branch at commit `78f1bf2` has the full feature set:
> 
> - Multi-agent grid with auto-layout
> - Coordinator/worker delegation across runtimes
> - Remote SSH targeting with tmux session persistence
> - Reusable UI components (FuzzyList, modal builders, selectable rows)
> - Model picker with fuzzy search (Cmd+M)
> - Token/cost tracking per agent
> - 7 themes, persistent state, MCP integration
> - 93 passing tests
> 
> ### Build & run
> 
> ```bash
> cargo build --release
> # Run as .app bundle:
> cp target/release/opensquirrel dist/OpenSquirrel.app/Contents/MacOS/OpenSquirrel-bin
> open dist/OpenSquirrel.app
> ```
> 
> Requires Rust 1.85+ and macOS (Metal GPU). Linux (Vulkan) compiles and tests pass.
> 
> ### Config
> 
> `~/.osq/config.toml` -- runtimes, machines, MCPs, themes, settings.
> 
> ### Supported runtimes
> 
> | Runtime | CLI | Mode |
> |---------|-----|------|
> | Claude Code | `claude` | Persistent multi-turn |
> | Codex | `codex` | One-shot |
> | Cursor Agent | `cursor agent` | One-shot |
> | Gemini CLI | `gemini` | One-shot |
> | OpenCode | `opencode` | One-shot |
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/Infatoshi/OpenSquirrel)

## 相關收錄

> [!note]- 直接競品（同子分類：多代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多代理管理" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Infatoshi--OpenSquirrel" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","多模態","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Infatoshi--OpenSquirrel" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Infatoshi--OpenSquirrel" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Infatoshi" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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

> **2026-03-22** — 首次收錄
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

- [[2026-03-22|2026-03-22]] — 首次收錄，1.2k stars
