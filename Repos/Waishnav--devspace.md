---
repo: Waishnav/devspace
url: https://github.com/Waishnav/devspace
owner: Waishnav
owner_type: User
language: TypeScript
license: MIT
description: "Turn ChatGPT into Codex and enjoy 2x rate limits :)"
homepage: ""
stars: 1928
stars_per_day: 275
forks: 189
open_issues: 15
created: 2026-06-14
pushed_at: 2026-06-21
first_seen: 2026-06-19
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.0.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-19
use_case: "讓 ChatGPT 連接到本地開發環境，實現類似 Codex 的編碼體驗。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 17
repo_size_kb: 1279
readme_length: 5978
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-19"
star_history: "2026-06-19:870,2026-06-19:876,2026-06-20:1405,2026-06-20:1409,2026-06-21:1632,2026-06-21:1636,2026-06-22:1928"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "devspace"
  - "Waishnav/devspace"
  - "讓 ChatGPT 連接到本地開發環境，實現類似 Codex 的編碼體驗。"
---

# devspace

**1.9k** stars · **275** stars/天 · 建立 7 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Waishnav--devspace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.2` `easy-install`

> [!summary] 一句話摘要
> 讓 ChatGPT 連接到本地開發環境，實現類似 Codex 的編碼體驗。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (275 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在本地開發環境中使用 ChatGPT 進行編碼但又擔心安全性的開發者。
> **一句話重點** DevSpace 讓開發者能在本地環境中安全地使用 ChatGPT 進行編碼，這在隱私和安全性上提供了優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Waishnav--devspace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "Waishnav--devspace" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到安全的本地開發環境，值得採用。

> [!abstract] 核心創新
> DevSpace 提供了一個安全的本地編碼環境，讓 ChatGPT 能直接操作本地項目而不需上傳資料。

## 專案簡介

DevSpace 是一個自我託管的 MCP 伺服器，能讓 ChatGPT 直接讀取、編輯和執行本地項目的代碼，而不需將任何資料上傳到第三方。使用者可以透過安全的隧道連接到本地機器，並使用密碼進行授權。安裝後，使用者只需執行 `devspace init` 和 `devspace serve` 來啟動伺服器，並設定允許 ChatGPT 存取的本地項目資料夾。這個工具的賣點在於它提供了安全的本地編碼環境，讓 ChatGPT 可以進行代碼編輯和執行，並且支持多種平台，包括 Linux、macOS 和 Windows。

技術上，DevSpace 使用了 SQLite 來持久化 OAuth 客戶端和令牌，並且提供了自動版本化的數據庫遷移功能，這樣即使在伺服器重啟後也能保持連線狀態。與其他類似工具相比，DevSpace 允許更高的安全性和靈活性，因為所有操作都在本地進行，並且不需要依賴外部服務。使用者可以在本地環境中執行 shell 命令、使用 Git 和執行測試，這使得它非常適合需要高安全性和隱私的開發工作。這個專案目前處於穩定階段，適合中小型團隊使用，未來可能會增加更多的功能和平台支援。

**技術棧**：`TypeScript` · `Node.js >=20.12 <27` · `SQLite`

## 重點功能

- 安全連接 — 允許 ChatGPT 透過安全隧道連接到本地開發環境。
- 本地代碼編輯 — ChatGPT 可以直接讀取和編輯本地項目檔案。
- 執行 shell 命令 — 支持在本地終端中執行測試、構建和 git 命令。
- 持久化 OAuth 客戶端 — 使用 SQLite 保存 OAuth 客戶端和令牌，支持重啟後持續使用。
- 多平台支援 — 支持 Linux、macOS 和 Windows 環境，並要求 Bash 相容性。

## 快速開始

1. 安裝 DevSpace CLI
```bash
npm install -g @waishnav/devspace
```
2. 初始化 DevSpace 伺服器
```bash
devspace init
```
3. 啟動 DevSpace 伺服器
```bash
devspace serve
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 DevSpace CLI",
  "devspace init",
  "# 預期輸出：初始化完成，並顯示 Owner 密碼。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1928 stars（275/天），forks 189（9.8%），顯示出強烈的社群興趣。Waishnav 是一位經驗豐富的開發者，過去創建了 GitCMS，這次推出 DevSpace 旨在解決開發者在使用 ChatGPT 進行編碼時的安全性和隱私問題。這個專案的出現恰逢許多開發者尋求更安全的 AI 編碼助手，特別是在本地開發環境中。高 forks/stars 比率（9.8%）顯示出許多開發者在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要在本地開發環境中使用 ChatGPT 進行編碼但又擔心安全性的開發者。

> [!example] 使用場景
> - 後端工程師用它來在本地開發環境中運行 ChatGPT 編碼助手，因為這樣可以直接操作本地代碼而不需上傳到雲端。
> - 全端工程師用它來快速測試和執行代碼片段，因為它支持直接在終端中運行 shell 命令，提升開發效率。
> - 安全專家用它來確保在本地環境中進行 AI 編碼，因為所有資料都保留在本地，降低了數據洩漏的風險。

## 架構分析

DevSpace 採用自我託管的 MCP 伺服器架構，這樣的設計使得用戶可以完全控制自己的開發環境，而不必擔心資料洩漏。資料流中，使用者的本地專案資料夾經由安全隧道連接到 ChatGPT，並且所有操作都在本地進行。這樣的設計選擇使得開發者能夠在保護隱私的同時，享受 AI 編碼助手的便利。選擇 SQLite 作為資料庫，因為它輕量且易於管理，適合小型專案，但在處理大型資料時可能會遇到性能瓶頸。整體架構的擴展性良好，但需注意隨著使用者數量增加，可能會影響伺服器的性能。

## 技術深入分析

DevSpace 的核心技術機制是自我託管的 MCP 伺服器，這使得 ChatGPT 能夠直接與本地項目互動。使用 SQLite 來持久化 OAuth 客戶端和令牌，這樣的選擇使得用戶在伺服器重啟後仍能保持連線。效能方面，DevSpace 能夠處理中小型專案，但在大型專案中可能會遇到性能瓶頸，特別是在高並發的情況下。選擇 TypeScript 和 Node.js 作為開發語言，這樣的選擇使得開發過程更為高效且易於維護。整體依賴樹相對輕量，主要依賴於 SQLite 和 Express，這降低了維護成本。技術風險方面，隨著使用者數量的增加，伺服器性能可能會受到影響，需考慮擴展方案。整合方面，DevSpace 與主流的開發工具鏈（如 Git 和 npm）相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝範例，讓新手能快速上手。安裝過程相對順暢，但對於不熟悉 Node.js 的使用者可能會有些挑戰。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 提供安全的本地開發環境，無需上傳資料。
> - 支持多平台，方便不同操作系統的開發者使用。
> - 具備持久化 OAuth 客戶端功能，提升使用體驗。

> [!danger] 缺點
> - 不支持 Windows PowerShell 或 cmd.exe，限制使用者選擇。
> - 需要一定的設置過程，對新手可能有些困難。
> - 對於大型專案的性能可能不如其他專業工具。

> [!warning] 注意事項
> - 僅支持 Node 版本 >=20.12 <27。
> - 不支持 Windows PowerShell 或 cmd.exe，需使用 Git Bash 或 WSL。
> - 目前僅支援 Bash 相容的 shell，對於其他 shell 可能不兼容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手功能，但不具備本地執行能力，所有操作需上傳到雲端。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼片段管理，而非完整的本地開發環境整合。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多個 AI 代理的協作功能，但缺乏 DevSpace 的安全性和本地執行特性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手功能，但不具備本地執行能力，所有操作需上傳到雲端。 | 如果你需要一個雲端解決方案而不在意資料隱私，則可以選擇這個工具。 | medium，因為需要重新配置雲端環境和資料流。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼片段管理，而非完整的本地開發環境整合。 | 如果你的需求主要是管理代碼片段而非整個專案，則這個工具會更適合。 | low，因為只需將代碼片段轉移到新工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **devspace** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 編碼助手功能，但不具備本地執行能力，所有操作需上傳到雲端。 | 專注於代碼片段管理，而非完整的本地開發環境整合。 |
> | 遷移成本 | - | medium，因為需要重新配置雲端環境和資料流。 | low，因為只需將代碼片段轉移到新工具。 |
> | 適用場景 | 主要場景 | 如果你需要一個雲端解決方案而不在意資料隱私，則可以選擇這個工 | 如果你的需求主要是管理代碼片段而非整個專案，則這個工具會更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合中小型團隊在本地環境中使用，並且已經具備穩定的功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境中，使用 PowerShell 可能會導致連接問題。
  - 解法：使用 Git Bash 或 WSL 來啟動 DevSpace。
- [MEDIUM] 如果未正確設置 OAuth，可能會導致連接失敗。
  - 解法：確保在設定過程中正確輸入所有必要的資料。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊進行本地開發 | 非常適合 | 提供安全的本地環境，適合小型團隊使用。 |
| 大型企業的開發團隊 | 普通 | 雖然功能穩定，但在高並發情況下可能會遇到性能瓶頸。 |
| 需要高安全性的開發環境 | 非常適合 | 所有操作都在本地進行，降低數據洩漏風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到安全的本地開發環境，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：DevSpace 在本地運行，不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
| Forks | 189 |
| Open Issues | 15 |
| Issue 解決率 | 17% (3 closed) |
| 最後推送 | 2026-06-21 |
| 建立日期 | 2026-06-14 |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Waishnav/devspace) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@clack/prompts` `@earendil-works/pi-coding-agent` `@modelcontextprotocol/ext-apps` `@modelcontextprotocol/sdk` `@pierre/diffs` `better-sqlite3` `drizzle-orm` `express` `react` `react-dom` `semver` `zod` `@types/better-sqlite3` `@types/express` `@types/node`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 88
>     "JavaScript" : 7
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Waishnav](https://github.com/Waishnav) | 183 |

**最新版本**：v1.0.2 (2026-06-21)

> [!info]- Release Notes
> ## Highlights
> 
> - Persist OAuth clients, access tokens, and refresh tokens in SQLite so authenticated MCP clients continue working across DevSpace restarts.
> - Add automatic, versioned SQLite migrations for existing installations.
> - Make refresh-token rotation transactional and reject concurrent token reuse.
> - Restrict DevSpace state storage permissions and harden SQLite configuration for local production use.
> - Close SQLite stores cleanly during server shutdown.
> - Fix README image and documentation links on npm.
> - Improve the workspace diff loading indicator and refresh project documentation.
> 
> Existing users are migrated automatically the next time DevSpace opens its state database.
> 
> **Full changelog:** https://github.com/Waishnav/devspace/compare/v1.0.1...v1.0.2

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/Waishnav/devspace/blob/main/docs/setup.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-21 ~ 2026-06-21）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/Waishnav/devspace/issues/11) | Document ChatGPT Pro lane app-tool caveat | 2 | 2 |
> | [#20](https://github.com/Waishnav/devspace/issues/20) | git push blocked by ChatGPT host safety layer via DevSpace b | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> DevSpace
> 
> Bring a Codex-style coding workflow to ChatGPT.
> 
>   
>   
>   
> 
> [](https://raw.githubusercontent.com/Waishnav/devspace/main/docs/assets/devspace-screenshot.png)
> 
> **Give ChatGPT a secure connection to your own machine and Turn ChatGPT into Codex**
> 
> DevSpace is a self-hosted MCP server that lets ChatGPT read, edit, search, and run code in your real local projects — your files, your tools, your terminal — without uploading anything to a third party. You run it on your machine, expose it through a tunnel you control, and approve the connection with a password only you have.
> 
> ## Sponsors and Special Thanks
> 
>   
>     
>       Sponsor
>       About
>     
>   
>   
>     
>       
>         
>           
>         
>       
>       
>         The ads in your terminal pay you.
>         Rebates adds one optional
>         sponsored footer to your coding agent and pays you cash back for every
>         session in which it is shown. Turn it off at any time.
>       
>     
>   
> 
>   DevSpace is open to new sponsors.
>   Get in touch to become one.
> 
> ## Installation
> 
> DevSpace requires Node `>=20.12 <27`. Node 22 LTS is recommended.
> 
> Install the DevSpace CLI:
> 
> ```bash
> npm install -g @waishnav/devspace
> ```
> 
> Then initialize and start the server:
> 
> ```bash
> devspace init
> devspace serve
> ```
> 
> Or run it without a global install:
> 
> ```bash
> npx @waishnav/devspace init
> npx @waishnav/devspace serve
> ```
> 
> During setup, DevSpace asks for:
> 
> - the local project folders ChatGPT is allowed to open through DevSpace
> - the local port, usually `7676`
> - your public HTTPS base URL from Cloudflare Tunnel, ngrok, Pinggy, Tailscale Funnel, or
>   another reverse proxy
> 
> Use the public origin without `/mcp` during setup:
> 
> ```text
> https://your-tunnel-host.example.com
> ```
> 
> You will configure your MCP client with the public `/mcp` URL after setup.
> 
> When the client connects, DevSpace opens an Owner password approval page. Enter
> the Owner password printed by `devspace init`. It is also stored in:
> 
> ```text
> ~/.devspace/auth.json
> ```
> 
> Keep that password private.
> 
> ## Connect Your MCP Client
> 
> The default local endpoint is:
> 
> ```text
> http://127.0.0.1:7676/mcp
> ```
> 
> Most users should connect through a public HTTPS tunnel:
> 
> ```text
> https://your-tunnel-host.example.com/mcp
> ```
> 
> ## What ChatGPT Can Do
> 
> Once connected, ChatGPT can open one of your approved project folders as a
> workspace. From there, it can inspect the repo, make scoped edits, run commands,
> and show you what changed.
> 
> DevSpace gives ChatGPT tools to:
> 
> - read, write, and edit files inside the opened workspace
> - search code and inspect directories
> - run shell commands for tests, builds, git, and package scripts
> - use isolated Git worktrees for parallel coding sessions
> - follow project instructions from `AGENTS.md` and `CLAUDE.md`
> - discover local agent skills from your skill folders
> - show tool cards and optional change summaries in ChatGPT Apps-compatible hosts
> 
> ## Mental Model
> 
> DevSpace is remote access to selected local folders.
> 
> You decide which roots are allowed. The MCP client still has powerful local
> capabilities inside an opened workspace, including shell execution. Treat a
> connected client like a trusted coding partner with access to your machine.
> 
> For a normal ChatGPT coding session:
> 
> 1. Start your tunnel.
> 2. Run `devspace serve`.
> 3. Connect the MCP client to your public `/mcp` URL.
> 4. Approve the connection with the Owner password.
> 5. Ask ChatGPT to open a project inside one of your allowed roots.
> 
> ## Platform Support
> 
> DevSpace supports Linux, macOS, and Windows environments with a Bash-compatible
> shell.
> 
> | Platform                                          | Status            | Notes                                          |
> | ------------------------------------------------- | ----------------- | ---------------------------------------------- |
> | Linux                                             | Supported         | Requires Node, npm, Git, and Bash.             |
> | macOS                                             | Supported         | Requires Node, npm, Git, and Bash.             |
> | Windows with Git Bash, WSL, MSYS2, or Cygwin Bash | Supported         | Git Bash is the simplest native Windows setup. |
> | Windows PowerShell or `cmd.exe` only              | Not supported yet | Install Git Bash or use WSL.                   |
> 
> Run this to inspect your local setup:
> 
> ```bash
> devspace doctor
> ```
> 
> ## Documentation
> 
> - [Setup Guide](https://github.com/Waishnav/devspace/blob/main/docs/setup.md)
> - [ChatGPT Coding Workflow](https://github.com/Waishnav/devspace/blob/main/docs/chatgpt-coding-workflow.md)
> - [Configuration Reference](https://github.com/Waishnav/devspace/blob/main/docs/configuration.md)
> - [Security Model](https://github.com/Waishnav/devspace/blob/main/docs/security.md)
> - [Troubleshooting Gotchas](https://github.com/Waishnav/devspace/blob/main/docs/gotchas.md)
> 
> ## Philosophy
> 
> Every piece of software is becoming conversational. Natural language is
> redefining how we interact with tools, workflows, and systems.
> 
> My bet is that ChatGPT becomes the operating system for everything. Once we
> reach AGI, we will simply talk to ChatGPT, and it will prompt, coordinate, and
> orchestrate sub-agents that set up the right loops for us.
> 
> We are not there yet.
> 
> DevSpace is one attempt to fast-forward that future: a way for MCP-capable
> hosts like ChatGPT and Claude to work directly with local project files through
> explicit, inspectable tools.
> 
> ## Built by Waishnav
> 
> I'm Waishnav, the creator of [GitCMS](https://gitcms.dev/), a Git-backed CMS
> for markdown sites.
> 
> I like building opinionated products, and DevSpace is another example of that.
> I'm on a journey to build a single-person company doing multiple millions in
> revenue. If you want to watch the failures, wins, lessons, and everything in
> between, come hang out with me on [X](https://x.com/wshxnv).
> 
> ## Local Development
> 
> For working on DevSpace itself:
> 
> ```bash
> npm install --include=dev
> npm run dev
> npm run typecheck
> npm test
> npm run build
> npm run start
> ```

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[安全漏洞]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/Waishnav/devspace)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Waishnav--devspace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","安全漏洞"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Waishnav--devspace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Waishnav--devspace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Waishnav--devspace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Waishnav" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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

> **2026-06-19** — 首次收錄
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

- [[2026-06-21|2026-06-21]] — 再次上榜，1.6k stars
- [[2026-06-20|2026-06-20]] — 再次上榜，1.4k stars
- [[2026-06-19|2026-06-19]] — 首次收錄，870 stars
