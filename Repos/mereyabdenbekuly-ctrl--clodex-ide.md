---
repo: mereyabdenbekuly-ctrl/clodex-ide
url: https://github.com/mereyabdenbekuly-ctrl/clodex-ide
owner: mereyabdenbekuly-ctrl
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "Local-first, zero-trust agentic IDE for verifiable autonomous software development."
homepage: "https://ide.clodex.xyz"
stars: 801
stars_per_day: 401
forks: 148
open_issues: 3
created: 2026-07-12
pushed_at: 2026-07-15
first_seen: 2026-07-13
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "IDE"
release_tag: "v1.16.0-preview.1-windows-x64"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-13
use_case: "提供一個本地優先的零信任開發環境，專為可驗證的自動化軟體開發而設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-18"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 36915
readme_length: 9941
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-13"
star_history: "2026-07-13:641,2026-07-14:698,2026-07-15:801"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/agentic_ai"
  - "topic/agentic_ide"
  - "topic/ai_agents"
  - "topic/developer_tools"
  - "topic/electron"
aliases:
  - "clodex-ide"
  - "mereyabdenbekuly-ctrl/clodex-ide"
  - "提供一個本地優先的零信任開發環境，專為可驗證的自動化軟體開發而設計。"
---

# clodex-ide

**641** stars · **641** stars/天 · 建立 1 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.16.0-preview.1-windows-x64`

`agentic-ai` `agentic-ide` `ai-agents` `developer-tools` `electron` `ide` `local-first` `typescript` `zero-trust`

> [!summary] 一句話摘要
> 提供一個本地優先的零信任開發環境，專為可驗證的自動化軟體開發而設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (641 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高安全性和可驗證性開發環境的軟體工程師和 DevOps 團隊。
> **一句話重點** Clodex 的設計理念是將開發過程中的所有元素整合在一起，並在安全性上做出重大突破。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "IDE" && p.file.name !== "mereyabdenbekuly-ctrl--clodex-ide" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 IDE 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，4 小時整合，得到高安全性和可驗證性的開發環境，值得探索。

> [!abstract] 核心創新
> Clodex 結合了持久的 AI 任務和代碼管理，並提供了零信任的安全架構。

## 專案簡介

Clodex 是一個本地優先的開發環境，專注於可驗證的自動化軟體開發，將 AI 任務、代碼、終端、瀏覽器和 Git 整合在同一個 Electron 工作區。用戶可以透過 Clodex 執行長期任務，並在應用重啟後保持上下文，這樣的設計使得開發過程更具持續性和一致性。其核心功能包括持久任務管理、代碼編輯、終端會話和證據記錄，並且支持本地執行、SSH 和 Docker 環境。關鍵指令如 `pnpm install --frozen-lockfile` 和 `pnpm --dir apps/browser start` 使得開發者能快速啟動和測試環境。Clodex 的賣點在於它的零信任架構，所有敏感操作都需經過明確的授權，這樣能有效降低安全風險。其架構將用戶界面、代理執行和政策分開，確保了更高的安全性和可控性。這樣的設計使得 Clodex 在處理複雜的開發任務時，能夠提供更好的可追溯性和審核能力。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Shell` · `MDX` · `PowerShell` · `HTML` · `Dockerfile`

## 重點功能

- 持久任務管理 — 提供可搜索的任務歷史、進度和時間預算。
- 代理執行環境 — 支持本地、SSH 和 Docker 執行，並能管理執行的生命周期。
- 代碼工作區 — 包含文件編輯、Git 操作和保護合併流程。
- 終端和瀏覽器 — 提供持久的 shell 會話和控制台輸出。
- 證據記錄 — 使用附加證據記錄來追蹤上下文和檢查點。
- 模型路由 — 提供中立的模型路由和政策發布功能。
- 獨立授權 — 對敏感操作進行獨立的授權決策，確保安全性。
- 持續性 — 支持會話檢查點和崩潰恢復。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/mereyabdenbekuly-ctrl/clodex-ide.git && cd clodex-ide && corepack enable && corepack prepare pnpm@10.30.3 --activate && cp .env.example .env && cp .env.example .env.dev && pnpm install --frozen-lockfile
```
2. 構建專案
```bash
pnpm build:packages
```
3. 啟動應用
```bash
pnpm --dir apps/browser start
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 pnpm",
  "指令": "pnpm --dir apps/browser start",
  "預期輸出": "啟動 Clodex IDE 的本地開發環境。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 641 stars（641/天），forks 137（21.4%），顯示出強烈的社群興趣。作者是一位獨立研究者，專注於零信任 AI 基礎設施，這樣的背景使得 Clodex 在安全性和可驗證性上有獨特的優勢。這個專案解決了傳統 IDE 在安全性和持續性上的不足，尤其是在自動化和 AI 驅動的開發環境中。社群的反饋和早期測試可能促使了這一快速增長的趨勢。技術上，這個專案的出現與對開發安全性需求的上升有關，尤其是在 AI 和自動化日益普及的背景下。forks/stars 比率達到 21.4%，顯示出許多開發者對這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要高安全性和可驗證性開發環境的軟體工程師和 DevOps 團隊。

> [!example] 使用場景
> - 後端開發者用它來管理持久的開發任務，因為 Clodex 提供的任務歷史和上下文保持功能能夠提高工作效率。
> - DevOps 工程師用它來在本地和雲端環境中執行自動化任務，因為其支持 SSH 和 Docker 的執行環境能夠簡化部署流程。
> - 安全專家用它來進行代碼審核和敏感操作管理，因為 Clodex 的零信任架構能夠確保所有操作都經過明確授權。

## 架構分析

Clodex 的架構將用戶界面、代理執行和政策分開，這樣的設計使得每個組件都能獨立運行，並且能夠更好地控制安全性。用戶界面使用 Electron 渲染，並通過 IPC 與主進程通信。代理主機和 MCP 主機在主進程中運行，並與隔離的工作進程進行交互。

這樣的設計確保了執行的隔離性，並且在進行敏感操作時能夠提供更高的安全性。選擇這種架構的代價在於需要更複雜的通信和狀態管理，但這也使得 Clodex 能夠在安全性和可擴展性上表現更佳。擴展性瓶頸可能出現在需要處理大量並發請求時，這需要進一步的優化和測試。

## 技術深入分析

Clodex 的核心技術機制包括持久任務管理和零信任執行環境。它使用 Electron 作為用戶界面框架，並通過 IPC 機制進行內部通信。這種設計使得用戶能夠在一個統一的環境中進行開發，並且能夠隨時保持上下文。效能方面，Clodex 能夠處理多個並發任務，但在高負載情況下可能會出現瓶頸。

選擇 TypeScript 和 JavaScript 作為主要開發語言，使得 Clodex 在開發社群中更具吸引力，因為這些語言的學習曲線相對較低。依賴關係方面，Clodex 依賴於多個開源庫，但這些依賴的穩定性和安全性仍需進一步評估。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，這需要在未來的版本中進行優化。整合方面，Clodex 與主流的開發工具鏈如 Git 和 Docker 有良好的兼容性，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和配置說明，並包含必要的範例。安裝過程相對順暢，但對於新手來說可能會有一些挑戰。整體而言，文檔質量較高，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 提供零信任架構，增強安全性。
> - 支持多種執行環境，包括本地和雲端。
> - 持久任務管理功能，提高開發效率。

> [!danger] 缺點
> - 目前僅為技術預覽，功能尚不完整。
> - 安裝和配置過程相對複雜。
> - 對於新手來說，學習曲線可能較陡。

> [!warning] 注意事項
> - 目前僅支援 Windows 環境的技術預覽版本。
> - 某些高級功能仍在開發中，尚未全面釋出。
> - 需要 Node.js 和 pnpm 的特定版本，可能導致兼容性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理，而 Clodex 提供更全面的開發環境和任務管理功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一個簡化的開發環境，但缺乏 Clodex 的持久任務和安全性設計。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的協作，而 Clodex 更加注重單一開發者的工作流程和安全性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理，而 Clodex 提供更全面的開發環境和任務管理功能。 | 如果你的專案需要專注於 AI 代理的開發和管理，而不是整體的開發環境。 | medium，因為需要重新設計開發流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一個簡化的開發環境，但缺乏 Clodex 的持久任務和安全性設計。 | 如果你的專案需要快速開發而不需要高安全性要求。 | low，因為功能相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clodex-ide** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理，而 Clodex 提供更全面的開發環境和任務管理功能。 | 提供一個簡化的開發環境，但缺乏 Clodex 的持久任務和安全性設計。 |
> | 遷移成本 | - | medium，因為需要重新設計開發流程。 | low，因為功能相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的專案需要專注於 AI 代理的開發和管理，而不是整體的 | 如果你的專案需要快速開發而不需要高安全性要求。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下安裝可能會失敗，特別是 Node.js 版本不兼容時。
  - 解法：確保使用正確版本的 Node.js 和 pnpm。
- [MEDIUM] 某些高級功能尚未穩定，可能會導致意外錯誤。
  - 解法：避免在關鍵任務中使用未釋出的功能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | Clodex 提供的持久任務管理和安全性設計能夠支持小型團隊的開發需求。 |
| 大型企業的 DevOps 團隊 | 適合 | 雖然功能強大，但可能需要額外的配置和學習時間。 |
| 個人開發者的實驗性專案 | 非常適合 | Clodex 的開放性和可驗證性特別適合探索和實驗。 |
| 需要高安全性的金融科技公司 | 普通 | 雖然提供零信任架構，但目前仍在技術預覽階段，可能不夠穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，4 小時整合，得到高安全性和可驗證性的開發環境，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> Clodex 在設計上不需要高權限，並且不會存取敏感資料。其依賴鏈的安全性需要進一步評估，但目前的設計已考慮到供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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
| Forks | 137 |
| Open Issues | 0 |
| 最後推送 | 2026-07-13 |
| 建立日期 | 2026-07-12 |
| 官方網站 | [Link](https://ide.clodex.xyz) |
| Repo 大小 | 36.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| Topics | `agentic-ai` `agentic-ide` `ai-agents` `developer-tools` `electron` `ide` `local-first` `typescript` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mereyabdenbekuly-ctrl](https://github.com/mereyabdenbekuly-ctrl) | 7 |

**最新版本**：v1.16.0-preview.1-windows-x64 — Clodex 1.16.0 Windows x64 Technical Preview (2026-07-13)

> [!info]- Release Notes
> ## Clodex 1.16.0 — Windows x64 Technical Preview
> 
> Community-built Windows installer for early testing.
> 
> ### Download integrity
> 
> - Installer: `clodex-1.16.0-x64-setup.exe`
> - SHA-256: `c2cab99136b4938039476e2be0c72e7c35133875542ae1d39dee6609c90f1918`
> - Verified build source: `633889881840fa94570c5ec79f95d15ac9fa45ff`
> 
> ### Verification performed before publication
> 
> - Installer metadata reports **Clodex Agentic IDE 1.16.0**.
> - The packaged application executable is Windows **x86-64**.
> - All 747 comparable textual project sources recovered from packaged source maps match the verified source commit. Twelve binary image entries were excluded from textual comparison.
> - The packaged `package.json` matches the source commit.
> - No packaged `.env` files, API tokens, or private-key material were detected by the static checks.
> 
> ### Important limitation
> 
> This temporary technical-preview installer is **not Authenticode-signed**. Windows SmartScreen may display an unknown-publisher warning. Use it for testing only. A CI-built and properly signed Windows release will replace it when the Windows signing infrastructure is available.
> 
> Runtime testing was performed by the community builder; Clodex verified package structure, source correspondence, metadata, and checksum before publication.

## 社群與生態

**社群活躍度**：社群活躍度高，持續有更新和討論。
**連結**：[文件](https://ide.clodex.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-12 ~ 2026-07-13）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #7 from mereyabdenbekuly-ctrl/release/windows-download-20260713

## README 摘錄

> [!info]- 展開查看原文 README
> # Clodex
> 
> 
> ### Setup
> 
> ```bash
> git clone https://github.com/mereyabdenbekuly-ctrl/clodex-ide.git
> cd clodex-ide
> 
> corepack enable
> corepack prepare pnpm@10.30.3 --activate
> 
> cp .env.example .env
> cp .env.example .env.dev
> 
> pnpm install --frozen-lockfile
> pnpm build:packages
> pnpm --dir apps/browser start:fast
> ```
> 
> Use the checked development command when you want type checking to run in
> parallel with Electron:
> 
> ```bash
> pnpm --dir apps/browser start
> ```
> 
> Environment and provider configuration are documented in
> [`docs/developer/local-development.md`](./docs/developer/local-development.md).
> Never commit `.env`, credentials, signing keys, or local runtime state.
> 
> 
> ## Why Clodex
> 
> A conventional coding assistant produces the next answer or patch. Clodex
> models engineering work as a durable task with its own state, workspaces,
> processes, permissions, evidence, and review lifecycle.
> 
> A task can:
> 
> 1. retain context across long-running work and application restarts;
> 2. operate across files, Git, terminals, browser tabs, MCP tools, and runners;
> 3. route work between models without changing the surrounding workflow;
> 4. request approval before high-impact shell, network, browser, or remote
>    actions;
> 5. execute locally or move to Docker, SSH, or cloud-backed environments;
> 6. return diffs, receipts, artifacts, and a self-contained final result.
> 
> 
> ### Local-first agentic IDE with governed execution
> 
> [](https://ide.clodex.xyz)
> 
> [](./LICENSE)
> 
> [](https://x.com/CLODEx_lab)
> [](#donations)
> 
> Clodex is an open-source agentic development environment that combines
> persistent AI tasks, code, terminal, browser, Git, models, memory, and
> controlled execution in one Electron workspace.
> 
> It is built around a simple principle:
> 
> > Model output is untrusted input. Authority comes from explicit policy,
> > isolated runtimes, and user-controlled review.
> 
> **Current release status:** Technical Preview. The architectural core is
> implemented and tested locally. Advanced execution lanes remain feature-gated
> until their live promotion evidence and manual sign-off are complete.
> 
> 
> ## Start here
> 
> | Goal                                    | Document                                                                                      |
> | --------------------------------------- | --------------------------------------------------------------------------------------------- |
> | Understand the product in a few minutes | [Product overview](./short_doc.en.md) · [Русский обзор](./short_doc.md)                       |
> | Run Clodex locally                      | [Developer handbook](./DEVELOPERS.md)                                                         |
> | Study the complete system               | [Full project documentation](./full_doc.md)                                                   |
> | Navigate the engineering documentation  | [Developer documentation index](./docs/developer/README.md)                                   |
> | Review the architecture                 | [Architecture](./docs/developer/architecture.md)                                              |
> | Review security and data handling       | [Security and data](./docs/developer/security-and-data.md) · [Security policy](./SECURITY.md) |
> | Explore the live project                | [ide.clodex.xyz](https://ide.clodex.xyz)                                                      |
> 
>   
> 
> 
> ## Core capabilities
> 
> | Area                       | What Clodex provides                                                                                                         |
> | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
> | **Persistent tasks**       | Searchable task history, projects, workspaces, forks, goals, progress, token budgets, and time budgets.                      |
> | **Agent runtime**          | Managed turns, cancellation, recovery, collaboration modes, tool execution, and supervised lifecycle handling.               |
> | **Code workspace**         | File editing, pending edits, line-level diffs, Git operations, worktrees, pull-request review, and protected merge flows.    |
> | **Terminal and browser**   | Persistent shell sessions, local ports, browser/CDP context, console output, screenshots, and visual verification.           |
> | **Evidence-backed memory** | Scoped memory, append-only evidence records, retrieval, provenance, checkpoints, and bounded context injection.              |
> | **Model Fabric**           | Provider-neutral model routing, endpoint health, fallbacks, budget controls, usage accounting, and policy publication.       |
> | **Execution Fabric**       | Local execution, SSH sessions, Docker runners, custom runner contracts, cloud-task foundations, and portable snapshots.      |
> | **Guardian**               | Independent authorization decisions for sensitive capabilities, fail-closed outcomes, approval escalation, and audit events. |
> | **Network Policy**         | Destination grants, DNS validation, controlled browser access, MCP egress enforcement, and an audit ledger.                  |
> | **Extensions**             | MCP servers, skills, signed plugins, private marketplaces, runner SDKs, and capability-bounded generated apps.               |
> | **Continuity**             | Session checkpoints, crash recovery, memory synchronization, artifact capture, and experimental session teleportation.       |
> 
> 
> ## Architecture
> 
> Clodex separates user interface, agent execution, tools, secrets, and policy
> into explicit process and trust boundaries.
> 
> ```mermaid
> flowchart TB
>     USER["Developer"] --> UI["Electron renderer"]
>     UI  IPC["Karton typed IPC"]
>     IPC  MAIN["Electron main process"]
> 
>     MAIN  AGENT_HOST["Agent Host process"]
>     MAIN  MCP_HOST["MCP Host process"]
>     MAIN  SANDBOX["Sandbox workers"]
> 
>     AGENT_HOST --> CORE["Agent Core"]
>     CORE --> TASKS["Task lifecycle and goals"]
>     CORE --> MEMORY["Evidence memory and context ledger"]
>     CORE --> FABRIC["Model Fabric"]
>     CORE --> POLICY["Guardian and Zero-Trust policy"]
> 
>     POLICY --> EXECUTION["Local, SSH, Docker, or cloud execution"]
>     EXECUTION --> ARTIFACTS["Artifacts, receipts, and checkpoints"]
>     ARTIFACTS --> MEMORY
> ```
> 
> 
> ### Important packages
> 
> ```text
> apps/browser/                 Electron desktop application
> apps/website/                 Public project website
> agent/runtime-node/           Isolated Node.js agent runtime
> packages/agent-core/          Agent lifecycle, memory, routing, and policy
> packages/agent-shell/         Shell and execution contracts
> packages/mcp-runtime/         MCP transport and protocol runtime
> packages/runner-sdk/          External runner integration SDK
> packages/karton/              Typed state and RPC transport
> packages/stage-ui/            Shared interface components
> ```
> 
> For a complete map, see
> [`docs/developer/repository-map.md`](./docs/developer/repository-map.md).
> 
> 
> ## Security model
> 
> Clodex does not rely on a prompt asking the model to behave safely. Sensitive
> operations pass through deterministic controls outside the model runtime.
> 
> - **Fail closed:** ambiguous or invalid authorization results do not execute.
> - **Isolated hosts:** agent turns, MCP servers, and sandboxed workloads run
>   outside the renderer.
> - **Explicit capabilities:** possessing a tool does not automatically grant
>   authority to use it.
> - **Controlled egress:** network destinations are evaluated independently of
>   model intent.
> - **Protected storage:** credentials use OS-backed storage; sensitive task
>   artifacts use context-bound authenticated encryption.
> - **Human review:** pending edits, permission prompts, protected merge flows,
>   and high-impact approvals keep final authority with the user.
> - **Supply-chain checks:** extension identity, signatures, integrity,
>   compatibility, rollback, and quarantine are verified before activation.
> - **Privacy-aware audit:** operational events avoid storing prompts, source
>   code, audio, credentials, or other unnecessa

## 延伸閱讀

相關概念：[[零信任]] · [[持久任務管理]] · [[自動化開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]]

[GitHub](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) · [官方網站](https://ide.clodex.xyz)

## 相關收錄

> [!note]- 直接競品（同子分類：IDE）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "IDE" AND file.name != "mereyabdenbekuly-ctrl--clodex-ide"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "mereyabdenbekuly-ctrl--clodex-ide"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "mereyabdenbekuly-ctrl--clodex-ide" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "mereyabdenbekuly-ctrl--clodex-ide"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["零信任","持久任務管理","自動化開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mereyabdenbekuly-ctrl--clodex-ide" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mereyabdenbekuly-ctrl--clodex-ide" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mereyabdenbekuly-ctrl" AND file.name != "mereyabdenbekuly-ctrl--clodex-ide"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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
> const me = dv.page("Repos/mereyabdenbekuly-ctrl--clodex-ide");
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

> **2026-07-13** — 首次收錄
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

- [[2026-07-15|2026-07-15]] — 再次上榜，801 stars
- [[2026-07-14|2026-07-14]] — 再次上榜，698 stars
- [[2026-07-13|2026-07-13]] — 首次收錄，641 stars
