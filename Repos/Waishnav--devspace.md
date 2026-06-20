---
repo: Waishnav/devspace
url: https://github.com/Waishnav/devspace
owner: Waishnav
owner_type: User
language: TypeScript
license: MIT
description: "Turn ChatGPT into Codex"
homepage: ""
stars: 1405
stars_per_day: 281
forks: 126
open_issues: 12
created: 2026-06-14
pushed_at: 2026-06-17
first_seen: 2026-06-19
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-19
use_case: "讓 ChatGPT 直接在本地專案中讀寫程式碼，無需上傳到第三方。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-23"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1473
readme_length: 5253
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-19"
star_history: "2026-06-19:870,2026-06-19:876,2026-06-20:1405"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "devspace"
  - "Waishnav/devspace"
  - "讓 ChatGPT 直接在本地專案中讀寫程式碼，無需上傳到第三方。"
---

# devspace

**876** stars · **219** stars/天 · 建立 4 天前 · TypeScript · MIT

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

`個人專案` `v1.0.0`

> [!summary] 一句話摘要
> 讓 ChatGPT 直接在本地專案中讀寫程式碼，無需上傳到第三方。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (219 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在本地環境中安全地使用 ChatGPT 進行編碼的開發者。
> **一句話重點** DevSpace 讓 ChatGPT 能夠在本地專案中安全地進行編碼，這在隱私和安全性方面提供了全新的解決方案。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到安全的本地編碼環境，值得嘗試。

> [!abstract] 核心創新
> DevSpace 提供了一個安全的本地編碼環境，讓 ChatGPT 能夠直接與本地專案互動。

## 專案簡介

DevSpace 是一個自我托管的 MCP 伺服器，讓 ChatGPT 能夠在本地專案中進行讀取、編輯、搜索和執行程式碼。用戶只需在本機運行 DevSpace，並透過安全的隧道連接，確保不會將任何資料上傳到第三方。安裝後，使用 `devspace init` 和 `devspace serve` 指令來初始化和啟動伺服器，並設定允許的本地專案資料夾與 HTTPS 基本 URL。這樣，ChatGPT 就能在經過授權的工作空間中進行檔案操作、執行 shell 命令以及使用 Git 工作樹進行平行編碼。這個工具的賣點在於它提供了一個安全的環境，讓 ChatGPT 能夠直接與本地檔案互動，而不需要擔心資料洩漏。技術上，DevSpace 使用 Node.js 作為伺服器環境，並依賴多個庫來實現功能，如 Express 和 React。

與其他類似工具相比，DevSpace 提供了更高的安全性，因為它不需要將資料上傳到雲端，而是直接在本地環境中操作。這使得它特別適合需要保護敏感資料的開發者。使用者可能會遇到的問題包括需要配置 HTTPS 隧道和管理授權密碼，這些都需要一定的技術知識。這個專案目前處於 v1.0.0 的初始階段，未來可能會增加更多功能和改進。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，尤其是在需要與 ChatGPT 進行深度整合的情況下。

**技術棧**：`Node.js >=20.12 <27` · `Express` · `React`

## 重點功能

- 安全的本地編碼環境 — 讓 ChatGPT 在不上傳資料的情況下直接操作本地專案。
- 支援多種命令 — 包括讀取、寫入、編輯檔案及執行 shell 命令。
- Git 工作樹模式 — 允許用戶在隔離的環境中進行平行編碼。
- 自定義工具命名和設定 — 用戶可以根據需求調整工具的行為和名稱。
- 跨平台支援 — 在 Linux、macOS 和 Windows 環境中運行。

## 快速開始

1. 安裝 DevSpace CLI
```bash
npm install -g @waishnav/devspace
```
2. 初始化伺服器
```bash
devspace init
```
3. 啟動伺服器
```bash
devspace serve
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 DevSpace CLI",
  "指令": "devspace init\n devspace serve",
  "預期輸出": "伺服器啟動並等待連接"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 876 stars（219/天），forks 82（9.4%），顯示出強勁的增長潛力。作者 Waishnav 之前創建過 GitCMS，這次推出 DevSpace 是針對開發者在使用 ChatGPT 進行編碼時的需求，提供了一個安全的本地環境。這個工具解決了開發者在使用 AI 助手時的隱私問題，讓他們能夠直接在本地專案中進行操作，而不必擔心資料外洩。社群的反應也表明，許多人對於這種安全的編碼工作流感到興趣，這可能是其快速增長的原因之一。

## 適合誰使用

**目標受眾**：需要在本地環境中安全地使用 ChatGPT 進行編碼的開發者。

> [!example] 使用場景
> - 後端工程師用它來在本地專案中直接編輯程式碼，因為這樣可以避免將敏感資料上傳到雲端。
> - 全端開發者用它來快速測試和執行 shell 命令，因為可以在 ChatGPT 的幫助下進行即時調試。
> - 新手開發者用它來學習如何在本地環境中使用 ChatGPT 進行編碼，因為提供了安全的實驗環境。

## 架構分析

DevSpace 的架構是基於 Node.js 的伺服器，並使用 Express 框架來處理 HTTP 請求。這種設計使得伺服器能夠快速響應來自 MCP 客戶端的請求，並提供必要的檔案操作功能。資料流方面，當用戶啟動伺服器並連接隧道後，ChatGPT 可以通過指定的端點與本地檔案系統進行互動。選擇 Node.js 作為伺服器環境的好處在於其非同步處理能力，但這也意味著需要一定的資源來維持伺服器的運行。擴展性方面，隨著用戶數量的增加，伺服器的性能可能會受到影響，特別是在高並發的情況下。

## 技術深入分析

DevSpace 的核心技術機制是基於 Node.js 和 Express 框架，這使得它能夠快速處理來自 MCP 客戶端的請求。伺服器的設計考慮到了安全性，使用者可以設定哪些本地資料夾可以被 ChatGPT 存取，並透過密碼保護連接。效能方面，DevSpace 能夠處理多個並發請求，但隨著使用者數量增加，伺服器的響應時間可能會受到影響。選擇 Node.js 的好處在於其非同步處理能力和豐富的生態系統，但這也可能導致在高負載情況下出現性能瓶頸。技術風險方面，若未妥善管理隧道和密碼，可能會導致安全漏洞。與主流框架的整合難度相對較低，但對於新手來說，學習曲線仍然存在。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟和範例，安裝過程相對順暢，但對於新手來說可能需要額外的學習時間。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 提供安全的本地環境，無需上傳資料。
> - 支援多種編碼和測試命令，提升開發效率。
> - 允許使用 Git 工作樹進行平行開發，方便團隊協作。

> [!danger] 缺點
> - 安裝和配置過程對新手來說可能較為複雜。
> - 目前不支援某些 Windows 環境，限制了使用者範圍。
> - 需要額外配置 HTTPS 隧道，增加了初期設置的難度。

> [!warning] 注意事項
> - 需要 Node.js 版本在 20.12 到 27 之間。
> - 目前不支援 Windows PowerShell 或 cmd.exe，必須使用 Git Bash 或 WSL。
> - 需要配置 HTTPS 隧道，對於新手可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的編碼助手功能，但不專注於本地環境的安全性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 助手的整合，但缺乏 DevSpace 的本地檔案操作能力。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 Codex 風格的編碼體驗，但不具備 DevSpace 的安全隧道功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的編碼助手功能，但不專注於本地環境的安全性。 | 如果需要更靈活的雲端整合，而不太在意資料安全問題。 | medium，因為需要重新配置雲端環境。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 助手的整合，但缺乏 DevSpace 的本地檔案操作能力。 | 如果需要更強大的 AI 整合功能，但不需要本地操作。 | low，因為可以直接使用現有的雲端服務。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **devspace** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的編碼助手功能，但不專注於本地環境的安全性。 | 專注於 AI 助手的整合，但缺乏 DevSpace 的本地檔案操作能力。 |
> | 遷移成本 | - | medium，因為需要重新配置雲端環境。 | low，因為可以直接使用現有的雲端服務。 |
> | 適用場景 | 主要場景 | 如果需要更靈活的雲端整合，而不太在意資料安全問題。 | 如果需要更強大的 AI 整合功能，但不需要本地操作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要配置 HTTPS 隧道，對於新手來說可能有困難
  - 解法：參考官方文檔中的隧道設置指南
- [MEDIUM] 安裝過程中可能會遇到 Node.js 版本不兼容的問題
  - 解法：確保使用推薦的 Node.js 版本
- [MEDIUM] 在 Windows 環境下，僅支援 Git Bash，其他終端可能無法正常運行
  - 解法：使用 Git Bash 或 WSL 進行安裝

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供安全的本地環境，適合處理敏感資料. |
| 大型企業的開發團隊 | 普通 | 需要更高的安全性和穩定性，可能不適合 alpha 階段的工具. |
| 個人開發者的側項目 | 非常適合 | 能夠快速實現 ChatGPT 的編碼輔助功能. |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到安全的本地編碼環境，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅需配置 HTTPS 隧道，並且不會存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 82 |
| Open Issues | 9 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-17 |
| 建立日期 | 2026-06-14 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Waishnav/devspace) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@clack/prompts` `@earendil-works/pi-coding-agent` `@modelcontextprotocol/ext-apps` `@modelcontextprotocol/sdk` `@pierre/diffs` `better-sqlite3` `drizzle-orm` `express` `react` `react-dom` `semver` `zod` `@types/better-sqlite3` `@types/express` `@types/node`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 87
>     "JavaScript" : 8
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Waishnav](https://github.com/Waishnav) | 167 |

**最新版本**：v1.0.0 (2026-06-16)

> [!info]- Release Notes
> Initial public release of DevSpace.
> 
> - Install and run with `npx @waishnav/devspace` or install globally as `devspace`.
> - Exposes approved local workspaces over MCP for file reads, writes, edits, search, shell commands, and project navigation.
> - Supports `AGENTS.md` and `CLAUDE.md` project instructions, including nested instruction discovery.
> - Supports local Skills loading so connected MCP clients can use workspace-specific guidance.
> - Adds checkout and managed Git worktree modes for direct or isolated coding sessions.
> - Includes diff rendering for edit and write tool results through the review UI.
> - Provides configurable tool naming, widget modes, allowed roots, OAuth owner approval, and tunnel-friendly public base URL settings.
> - Includes cross-platform CI smoke coverage for Linux, macOS, and Windows.

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題尚未解決。
**連結**：[文件](https://github.com/Waishnav/devspace/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-16 ~ 2026-06-17）
> **活躍天數** 2 天 · **最新 commit** Clarify ChatGPT capabilities in README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/Waishnav/devspace/issues/11) | Document ChatGPT Pro lane app-tool caveat | 1 | 1 |
> | [#10](https://github.com/Waishnav/devspace/issues/10) | Add create-only file tool for safer first-run ChatGPT probes | 0 | 0 |
> | [#7](https://github.com/Waishnav/devspace/issues/7) | enhance - youtube video tutorial to dummies | 0 | 0 |

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
> [](docs/assets/devspace-screenshot.png)
> 
> **Give ChatGPT a secure connection to your own machine and Turn ChatGPT into Codex**
> 
> DevSpace is a self-hosted MCP server that lets ChatGPT read, edit, search, and run code in your real local projects — your files, your tools, your terminal — without uploading anything to a third party. You run it on your machine, expose it through a tunnel you control, and approve the connection with a password only you have.
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
> - [Setup Guide](docs/setup.md)
> - [ChatGPT Coding Workflow](docs/chatgpt-coding-workflow.md)
> - [Configuration Reference](docs/configuration.md)
> - [Security Model](docs/security.md)
> - [Troubleshooting Gotchas](docs/gotchas.md)
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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

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

- [[2026-06-20|2026-06-20]] — 再次上榜，1.4k stars
- [[2026-06-19|2026-06-19]] — 首次收錄，870 stars
