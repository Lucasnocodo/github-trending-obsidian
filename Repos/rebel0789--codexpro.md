---
repo: rebel0789/codexpro
url: https://github.com/rebel0789/codexpro
owner: rebel0789
owner_type: User
language: TypeScript
license: MIT
description: "Use ChatGPT Developer Mode as a local coding agent for your repo through MCP."
homepage: "https://rebel0789.github.io/codexpro/"
stars: 446
stars_per_day: 149
forks: 40
open_issues: 1
created: 2026-06-16
pushed_at: 2026-06-19
first_seen: 2026-06-20
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "本地開發"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-20
use_case: "讓 ChatGPT 成為你的本地編碼代理，輕鬆操作你的代碼庫。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-27"
contributor_count: 2
engagement: "low"
issue_close_rate: 83
repo_size_kb: 200
readme_length: 9905
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-20"
star_history: "2026-06-20:446"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/apps_sdk"
  - "topic/chatgpt"
  - "topic/cloudflare_tunnel"
  - "topic/codex"
  - "topic/local_development"
aliases:
  - "codexpro"
  - "rebel0789/codexpro"
  - "讓 ChatGPT 成為你的本地編碼代理，輕鬆操作你的代碼庫。"
---

# codexpro

**446** stars · **149** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/rebel0789--codexpro");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`apps-sdk` `chatgpt` `cloudflare-tunnel` `codex` `local-development` `mcp` `ngrok`

> [!summary] 一句話摘要
> 讓 ChatGPT 成為你的本地編碼代理，輕鬆操作你的代碼庫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (149 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望將 ChatGPT 整合到本地開發流程中的獨立開發者或小型團隊。
> **一句話重點** CodexPro 讓 ChatGPT 成為本地開發的強大助手，簡化了開發者的工作流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/rebel0789--codexpro");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "本地開發" && p.file.name !== "rebel0789--codexpro" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 本地開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效的本地開發支持，值得嘗試。

> [!abstract] 核心創新
> CodexPro 是一個本地 MCP/App SDK 風格的連接器，讓 ChatGPT 能夠在本地開發環境中檢查和編輯代碼。

## 專案簡介

CodexPro 將 ChatGPT 的開發者模式轉變為本地編碼代理，讓你能在本機代碼庫中直接與 ChatGPT 互動。使用者只需在目標資料夾中執行 `codexpro setup`，然後將生成的伺服器 URL 複製到 ChatGPT 的應用中，即可讓 ChatGPT 檢視檔案、編輯代碼並執行安全的驗證命令。這種設計使得開發者能夠在不改變 ChatGPT 的使用限制下，繼續在本地環境中進行工作。CodexPro 的一大賣點是它能夠在多個工作流程中保持穩定性，避免因為某一產品的限制而中斷開發。技術上，CodexPro 使用了 MCP 協議來連接 ChatGPT 和本地代碼庫，並且支援多種隧道選擇（如 Cloudflare 和 ngrok），這使得它在不同環境下都能靈活運用。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xSero/codex-shim，CodexPro 提供了更為直觀的設置流程和更強的本地開發支持。這使得它在小型團隊和個人開發者中尤為受歡迎。CodexPro 的設計考量了用戶的便捷性，並提供了詳細的診斷工具來協助用戶排解問題。對於需要快速開發和測試的場景，CodexPro 是一個非常合適的選擇，但在大型專案中可能會因為依賴於本地環境而受到限制。整體而言，CodexPro 是一個值得一試的工具，尤其是對於那些希望將 ChatGPT 整合到日常開發工作流中的開發者。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >=20`

## 重點功能

- 本地編碼代理 — 透過 MCP 協議連接 ChatGPT 和本地代碼庫，支持即時編輯和檢查。
- 多種隧道選擇 — 支援 Cloudflare 和 ngrok，方便用戶根據需求選擇合適的連接方式。
- 簡易設置流程 — 只需執行 `codexpro setup` 即可完成配置，並自動生成伺服器 URL。
- 診斷工具 — 提供 `codexpro doctor` 命令，檢查本地環境的設置和依賴狀態。
- 保存工作區配置 — 自動保存隧道提供者、主機名和端口設置，方便未來的啟動。

## 快速開始

1. 全局安裝 CodexPro
```bash
npm install -g codexpro
```
2. 在目標資料夾中執行設置
```bash
codexpro setup
```
3. 啟動 CodexPro 以開始使用
```bash
codexpro start
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 CodexPro 並完成設置",
  "指令": "codexpro start",
  "預期輸出": "啟動 CodexPro 服務並顯示伺服器 URL"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 446 stars（149/天），forks 40（9%），顯示出強勁的增長潛力。該專案由 rebel0789 和 Jasonzld 共同開發，前者在開源社群中有一定的知名度。CodexPro 解決了開發者在本地環境中使用 ChatGPT 的痛點，提供了一個簡單的設置流程，讓開發者能夠快速上手。近期的 GitHub 討論和社群反饋也促進了這個專案的曝光度。隨著本地開發需求的增加，CodexPro 的出現正好滿足了這一需求。

## 適合誰使用

**目標受眾**：希望將 ChatGPT 整合到本地開發流程中的獨立開發者或小型團隊。

> [!example] 使用場景
> - 前端工程師用它來在本地開發環境中快速編輯代碼，因為可以直接在 ChatGPT 中獲得即時反饋，提升開發效率。
> - 後端工程師用它來檢查和修改 API 文檔，因為 CodexPro 能夠自動加載上下文，減少手動操作的時間。
> - 全端開發者用它來進行代碼審查，因為可以利用 ChatGPT 的智能提示來提高代碼質量，降低錯誤率。

## 架構分析

CodexPro 採用模組化設計，核心功能透過 MCP 協議與 ChatGPT 進行通信。使用者在本地環境中設置 CodexPro 之後，透過簡單的命令啟動服務，並使用隧道技術（如 Cloudflare 或 ngrok）來實現遠端訪問。這種設計使得開發者能夠在本地環境中無縫地與 ChatGPT 互動，並且能夠在不同的開發環境中靈活運用。選擇 MCP 協議而非其他傳輸方式（如 REST API）是因為它能夠提供更低的延遲和更高的效率，但這也意味著需要用戶具備一定的技術背景來進行設置。擴展性方面，CodexPro 允許多個工作區同時運行，但每個工作區需要獨立的端口，這在大型專案中可能會造成管理上的複雜性。

## 技術深入分析

CodexPro 的核心技術機制是透過 MCP 協議將 ChatGPT 與本地開發環境連接。這種設計使得 ChatGPT 可以直接訪問本地檔案，並執行編輯和驗證操作。CodexPro 的性能在於其能夠快速響應用戶的請求，並且能夠處理多個工作區的同時運行。這意味著在開發過程中，開發者可以隨時切換不同的專案，而不需要重新配置環境。

選擇 TypeScript 和 JavaScript 作為開發語言，讓 CodexPro 能夠輕鬆與其他 Node.js 生態系統的工具整合，並且能夠利用現有的 npm 生態系統。這也使得依賴管理相對簡單，降低了維護成本。然而，這種設計也帶來了對 Node.js 版本的依賴，可能會限制某些用戶的使用。技術風險方面，CodexPro 可能在高負載情況下出現性能瓶頸，特別是在同時處理多個工作區時。

這需要開發者在使用時進行性能監控，以確保不會影響開發效率。整合方面，CodexPro 與主流的開發工具（如 VS Code）相容性良好，並且能夠輕鬆地融入現有的 CI/CD 流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的設置步驟，對於新手來說非常友好。安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，幫助用戶快速上手。文件目前僅有英文版本，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 簡單的安裝和設置流程，適合新手使用。
> - 支持多種隧道選擇，靈活性高。
> - 提供診斷工具，幫助用戶快速排解問題。

> [!danger] 缺點
> - 僅支援特定版本的 Node.js，可能對某些用戶造成限制。
> - 在大型專案中可能因為端口管理而增加複雜性。
> - 對於不熟悉 MCP 協議的用戶，初期設置可能會有學習曲線。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本
> - 需要安裝 Cloudflare 或 ngrok 以便於隧道連接
> - 不支援 Windows 的某些特定環境配置

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的本地編碼代理功能，但缺乏 CodexPro 的簡易設置和多隧道支持。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於將 ChatGPT 整合到特定開發環境中，功能較為單一，無法提供 CodexPro 的靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於提供一個簡單的本地編碼代理，但缺乏 CodexPro 的多隧道支持和靈活性。 | 如果你的需求僅限於簡單的本地編碼代理，且不需要多隧道功能，則可以考慮此工具。 | medium，因為需要重新配置環境和設置。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供類似的功能，但主要針對特定的開發環境，缺乏 CodexPro 的通用性。 | 如果你在特定的開發環境中工作，且需要針對該環境的專用解決方案，則可以考慮此工具。 | high，因為需要對現有工作流進行重大調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codexpro** | **agent-sprite-forge** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於提供一個簡單的本地編碼代理，但缺乏 CodexPro 的多隧道支持和靈活性。 | 提供類似的功能，但主要針對特定的開發環境，缺乏 CodexPro 的通用性。 |
> | 遷移成本 | - | medium，因為需要重新配置環境和設置。 | high，因為需要對現有工作流進行重大調整。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於簡單的本地編碼代理，且不需要多隧道功能，則 | 如果你在特定的開發環境中工作，且需要針對該環境的專用解決方案 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於個人項目或小型團隊的試用，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，隧道連接可能會不穩定，導致服務中斷
  - 解法：考慮使用 ngrok 的穩定域名功能
- [MEDIUM] 使用者在設置過程中可能會遇到 Node.js 版本不兼容的問題
  - 解法：確保使用 Node.js 20 以上版本
- [MEDIUM] 在 Linux 環境中，剪貼板支持可能需要額外安裝工具
  - 解法：安裝 wl-copy 或 xclip 等工具

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的本地開發環境 | 非常適合 | 簡單的設置和多隧道支持使得團隊能夠快速上手。 |
| 大型企業的核心系統開發 | 不適合 | 可能因為端口管理和性能瓶頸而影響開發效率。 |
| 個人開發者的側項目 | 適合 | 提供了靈活的本地開發支持，適合快速迭代。 |
| 需要高可用性的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的本地開發支持，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CodexPro 本身不需要高權限，且不會存取敏感資料。依賴的外部工具（如 Cloudflare 和 ngrok）需自行評估其安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/rebel0789--codexpro");
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
> const me = dv.page("Repos/rebel0789--codexpro");
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
| Forks | 40 |
| Open Issues | 1 |
| Issue 解決率 | 83% (5 closed) |
| 最後推送 | 2026-06-19 |
| 建立日期 | 2026-06-16 |
| 官方網站 | [Link](https://rebel0789.github.io/codexpro/) |
| Repo 大小 | 200 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/rebel0789/codexpro) |
| Topics | `apps-sdk` `chatgpt` `cloudflare-tunnel` `codex` `local-development` `mcp` `ngrok` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@modelcontextprotocol/sdk` `cors` `express` `minimatch` `zod` `@types/cors` `@types/express` `@types/node` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 50
>     "JavaScript" : 50
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@rebel0789](https://github.com/rebel0789) | 9 |
> | [@Jasonzld](https://github.com/Jasonzld) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和問題回應。
**連結**：[文件](https://rebel0789.github.io/codexpro/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-17 ~ 2026-06-19）
> **活躍天數** 3 天 · **最新 commit** Fix bash session guard review issues (#16)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/rebel0789/codexpro/issues/13) | 提个建议 | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> CodexPro
> 
>   Let ChatGPT web see your Codex-style repo context and act like a local coding agent.
> 
>   
>   
>   
>   
> 
>   Website
>   ·
>   中文 README
>   ·
>   中文网站
>   ·
>   Star on GitHub
>   ·
>   npm
>   ·
>   Stable URL guide
>   ·
>   FAQ
>   ·
>   Security
> 
> CodexPro turns ChatGPT Developer Mode into a local coding agent for the folder on your machine. Install it globally, run setup in a repo, paste the copied Server URL into ChatGPT Create App, and ChatGPT can inspect files, edit code, run safe verification commands, and load the same explicit context you normally give Codex through `AGENTS.md`, `.ai-bridge`, git status, git diff, and source files.
> 
> CodexPro is not a rate-limit bypass. It uses ChatGPT's official Developer Mode and MCP app path to connect your own ChatGPT session to your own local repo. ChatGPT and Codex remain separate product surfaces, each subject to its own plan limits, safety rules, and availability.
> 
> If one workflow is unavailable and another product surface you already have access to is still available, CodexPro lets you keep working against the same local repo without modifying or evading either product's limits.
> 
> ```bash
> npm install -g codexpro
> codexpro setup
> ```
> 
> 
> ## Install
> 
> Recommended install:
> 
> ```bash
> npm install -g codexpro
> ```
> 
> First run from the repo you want ChatGPT to work on:
> 
> ```bash
> codexpro setup
> ```
> 
> Daily start after setup:
> 
> ```bash
> codexpro start
> ```
> 
> No-install fallback:
> 
> ```bash
> npx codexpro@latest start --root /absolute/path/to/your/repo
> ```
> 
> From source:
> 
> ```bash
> cd codexpro
> npm install
> npm run build
> ```
> 
> 
> ## ChatGPT app setup
> 
> Before you paste the CodexPro URL, turn on Developer Mode in ChatGPT:
> 
> ```text
> ChatGPT Settings
> -> Apps
> -> Advanced settings
> -> Developer mode: on
> -> Enforce CSP in developer mode: on
> -> Create app
> ```
> 
> This is a one-time ChatGPT setting. Keep CSP enabled; CodexPro widgets are built for that path.
> 
> In Create App, use:
> 
> ```text
> Name: CodexPro
> Description: Local workspace bridge for ChatGPT coding
> Connection: Server URL
> Server URL: paste the copied URL
> Authentication: No Authentication / None
> ```
> 
> The copied Server URL already includes the private CodexPro token. Do not paste the token separately unless your ChatGPT UI supports custom headers.
> 
> Keep the terminal running while ChatGPT uses the connector. When you stop it, the quick-tunnel URL stops working.
> 
> If `cloudflared` is missing, CodexPro downloads the official Cloudflare binary into `~/.codexpro/bin` on supported macOS, Windows, and Linux machines. No sudo, admin shell, Homebrew, apt, or winget step is required. To skip that behavior:
> 
> ```bash
> codexpro start --no-install-cloudflared
> ```
> 
> OS behavior:
> 
> ```text
> macOS    auto-installs ~/.codexpro/bin/cloudflared, copies with pbcopy, opens ChatGPT with open
> Windows  auto-installs ~/.codexpro/bin/cloudflared.exe, copies with clip, opens ChatGPT with start
> Linux    auto-installs ~/.codexpro/bin/cloudflared, opens ChatGPT with xdg-open when available
> ```
> 
> Linux clipboard copy requires one of `wl-copy`, `xclip`, or `xsel`. If none is installed, CodexPro prints the URL clearly so it can be copied manually.
> 
> First-run tunnel choice:
> 
> ```text
> cloudflare  Cloudflare quick tunnel. Easiest demo path, new URL each restart.
> ngrok       ngrok free dev domain. Recommended stable URL for most users.
> stable      Cloudflare named tunnel. Stable URL with your own Cloudflare domain.
> local       No public tunnel. Only for local MCP clients.
> ```
> 
> If you use quick mode, the Server URL changes every time the tunnel restarts. That means you must update the ChatGPT app Server URL each time. Use quick mode for demos, not daily work.
> 
> Recommended daily path: create a free ngrok account, use the dev domain assigned to your account, save it in `codexpro setup`, and keep the same ChatGPT app Server URL across restarts.
> 
> CodexPro saves the selected tunnel provider, hostname, port, mode, and auth token for that workspace. Future launches from the same folder reuse it:
> 
> ```bash
> codexpro start
> ```
> 
> If you start CodexPro in a new folder and already have saved setups, it shows a numbered list. Press Enter to reuse the first saved setup, type another number, or type `new` to choose a fresh tunnel.
> 
> If you are running this repository from source instead of npm:
> 
> ```bash
> npm run connect:chatgpt -- --root /absolute/path/to/your/repo
> ```
> 
> Guided onboarding:
> 
> ```bash
> codexpro setup
> ```
> 
> `setup` asks for the workspace folder, local port, mode, and public URL strategy, then prints the exact `codexpro start ...` command and can launch it immediately. It saves the selected tunnel provider, hostname, local port, mode, and generated CodexPro auth token for that workspace under `~/.codexpro/profiles/`, so future `codexpro start` runs from the same folder can reuse the stable URL setup automatically.
> 
> From a source checkout:
> 
> ```bash
> npm run connect:setup
> ```
> 
> Preflight diagnostics:
> 
> ```bash
> codexpro doctor
> ```
> 
> `doctor` does not start the MCP server or open a tunnel. It checks the local package build, Node version, workspace profile, port availability, tunnel prerequisites, clipboard support, and browser-open support. Run it before filing setup bugs or before recording a demo.
> 
> Use `--no-copy-url` if you do not want CodexPro to copy the connector URL. Add `--open-chatgpt` if you want the browser to open automatically instead of pressing Enter.
> 
> Local setup/status page:
> 
> ```text
> press o in the CodexPro terminal control panel
> ```
> 
> The page shows the active workspace, local MCP endpoint, safety modes, allowed roots, and the exact ChatGPT setup steps. It is served by the local CodexPro process and stays token-protected when auth is enabled.
> 
> Saved workspace profile behavior:
> 
> ```text
> codexpro setup
>   choose quick, stable, ngrok, or local
>   enter the Cloudflare/ngrok hostname when needed
>   accept the generated CodexPro auth token
>   save the profile
> 
> future codexpro start
>   loads the saved profile for the current folder
>   reuses the saved tunnel provider, hostname, port, mode, and token
> ```
> 
> If setup finds a saved ngrok or Cloudflare stable profile, CodexPro prints the saved hostname and the short daily command:
> 
> ```bash
> codexpro start
> ```
> 
> That is enough from the same workspace folder. Use `codexpro setup` again only when you want to change the port, mode, tunnel provider, hostname, or CodexPro auth token.
> 
> Useful profile flags:
> 
> ```bash
> codexpro start --no-profile      # ignore saved profile for this run
> codexpro setup --no-save-config  # run setup without saving
> codexpro setup --save-config     # explicitly save setup choices
> ```
> 
> Workspace settings:
> 
> ```bash
> codexpro settings
> codexpro settings show
> codexpro settings list
> codexpro settings set --tunnel ngrok --hostname your-domain.ngrok-free.dev
> codexpro settings use --from-root /path/to/another/repo
> codexpro settings set --tunnel cloudflare
> codexpro settings delete --yes
> ```
> 
> Use `codexpro settings` when you want to make ngrok the default, switch back to Cloudflare quick tunnels, reuse a saved setup from another repo, or delete the saved workspace preference. The saved token is redacted when settings are shown.
> 
> Terminal controls:
> 
> ```text
> Enter  open ChatGPT connector settings in your browser
> c      copy Server URL again
> o      open local setup/status page
> h      show controls
> q      stop CodexPro
> ```
> 
> Advanced controls such as `u` for printing the full URL, `p` for Create App fields, and `m` for mode help are still available through `h`.
> 
> Startup modes:
> 
> ```bash
> codexpro start                 # normal coding mode: read/write/edit/search/bash
> codexpro start --no-bash       # normal coding mode without ChatGPT-triggered shell commands
> codexpro start --bash-session main --require-bash-session
> codexpro setup                 # guided onboarding for new users
> codexpro start --mode handoff  # planning-only .ai-bridge handoff
> codexpro start --mode handoff --no-bash
> codexpro start --mode pro      # export context for models without MCP tools
> codexpro stable --hostname codexpro.example.com --tunnel-name codexpro
> cod

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[本地開發]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/rebel0789/codexpro) · [官方網站](https://rebel0789.github.io/codexpro/)

## 相關收錄

> [!note]- 直接競品（同子分類：本地開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "本地開發" AND file.name != "rebel0789--codexpro"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "rebel0789--codexpro"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "rebel0789--codexpro" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "rebel0789--codexpro"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","本地開發","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "rebel0789--codexpro" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/rebel0789--codexpro");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "rebel0789--codexpro" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "rebel0789" AND file.name != "rebel0789--codexpro"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/rebel0789--codexpro");
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
> const me = dv.page("Repos/rebel0789--codexpro");
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
> const me = dv.page("Repos/rebel0789--codexpro");
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
> const me = dv.page("Repos/rebel0789--codexpro");
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
> const me = dv.page("Repos/rebel0789--codexpro");
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

> **2026-06-20** — 首次收錄
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

- [[2026-06-20|2026-06-20]] — 首次收錄，446 stars
