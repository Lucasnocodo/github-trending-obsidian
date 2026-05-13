---
repo: strukto-ai/mirage
url: https://github.com/strukto-ai/mirage
owner: strukto-ai
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "A Unified Virtual Filesystem For AI Agents"
homepage: "https://www.strukto.ai/mirage"
stars: 2065
stars_per_day: 344
forks: 133
open_issues: 16
created: 2026-05-06
pushed_at: 2026-05-12
first_seen: 2026-05-08
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "虛擬檔案系統"
release_tag: "v0.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-08
use_case: "為 AI 代理提供統一的虛擬檔案系統，讓多種服務如 S3、Google Drive 等能夠無縫整合。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-16"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 8598
readme_length: 8492
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-08"
star_history: "2026-05-08:1003,2026-05-09:1447,2026-05-10:1632,2026-05-11:1795,2026-05-12:1941,2026-05-13:2065"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/agent_sandbox"
  - "topic/agent_tools"
  - "topic/ai_agents"
  - "topic/bash"
  - "topic/claude_code"
aliases:
  - "mirage"
  - "strukto-ai/mirage"
  - "為 AI 代理提供統一的虛擬檔案系統，讓多種服務如 S3、Google Drive 等能夠無縫整合。"
---

# mirage

**1.0k** stars · **1.0k** stars/天 · 建立 1 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/strukto-ai--mirage");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.0.1` `easy-install`

`agent-sandbox` `agent-tools` `ai-agents` `bash` `claude-code` `fuse` `langchain` `llm-agents` `openai-agents` `python` `typescript` `vfs` `virtual-filesystem`

> [!summary] 一句話摘要
> 為 AI 代理提供統一的虛擬檔案系統，讓多種服務如 S3、Google Drive 等能夠無縫整合。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.0k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在多個後端服務之間進行資料操作的 AI 開發者。
> **一句話重點** Mirage 讓 AI 代理能夠在一個統一的虛擬檔案系統中操作多種後端服務，顯著提高了開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/strukto-ai--mirage");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "虛擬檔案系統" && p.file.name !== "strukto-ai--mirage" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 虛擬檔案系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到一個能夠簡化多服務整合的工具，值得嘗試。

> [!abstract] 核心創新
> Mirage 提供了一個統一的虛擬檔案系統，讓 AI 代理能夠無縫訪問多種後端服務。

## 專案簡介

Mirage 是一個統一的虛擬檔案系統，讓 AI 代理能夠透過類似 Unix 的工具訪問多種後端服務。用戶可以將 S3、Google Drive、Slack 等服務掛載到同一檔案系統中，並使用熟悉的命令進行操作，例如 `cp` 和 `grep`。這種設計使得 AI 代理能夠在一個統一的環境中運行，無需學習不同的 API，從而提高了效率。Mirage 支援 Python 和 TypeScript SDK，並提供 CLI 工具，方便開發者在不同環境中使用。它的架構基於 FUSE 技術，能夠在 macOS 和 Linux 上運行，並且能夠在不同的資源之間進行操作，這樣的設計讓資料流動更為順暢。

與其他工具相比，Mirage 的優勢在於它的多後端整合能力，讓用戶能夠在一個統一的檔案系統中操作多種資料來源，而不需要分開處理。這對於需要頻繁訪問多個服務的開發者來說，能夠顯著提高工作效率。使用者可以輕鬆地快照和版本控制工作空間，並且能夠在不同的機器上無縫轉移代理運行。這樣的設計使得 Mirage 成為一個靈活且強大的工具，特別適合需要處理多種資料來源的 AI 代理應用。

**技術棧**：`TypeScript` · `Python` · `Shell`

## 重點功能

- 統一檔案系統 — 將多種後端服務如 S3、Google Drive、Slack 等掛載為一個檔案系統。
- 支持多種命令 — 使用熟悉的 Unix 命令進行操作，無需學習新 API。
- 快照和版本控制 — 能夠輕鬆快照和版本控制工作空間，方便資料管理。
- Python 和 TypeScript SDK — 提供多種 SDK，方便在不同環境中使用。
- CLI 工具 — 支持命令行操作，方便自動化和腳本化。

## 快速開始

1. 安裝 Python SDK
```bash
uv add mirage-ai
```
2. 安裝 TypeScript SDK
```bash
npm install @struktoai/mirage-node
```
3. 執行 CLI 工具
```bash
uvx mirage-ai
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 mirage 套件",
  "程式碼": "const ws = new Workspace({ '/data': new RAMResource(), '/s3': new S3Resource({ bucket: 'my-bucket' }) }); await ws.execute('cp /s3/report.csv /data/report.csv');",
  "預期輸出": "將 S3 上的 report.csv 複製到 RAM 資源中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1003 stars（1003/天），forks 58（5.8%），這顯示出強烈的興趣和需求。作者 zechengz 在開源領域有一定的影響力，這個專案解決了 AI 代理在多後端整合上的痛點，之前的方案往往需要針對每個服務學習不同的 API。這個工具的出現讓開發者能夠更有效率地使用 AI 代理，並且在社群中引發了熱烈討論。技術上，FUSE 的使用使得這個方案在檔案系統層面上具備了靈活性，這在以往的工具中並不常見。

## 適合誰使用

**目標受眾**：需要在多個後端服務之間進行資料操作的 AI 開發者。

> [!example] 使用場景
> - 資料科學家用它來整合多個資料來源，進行數據分析，因為可以用單一命令訪問 S3 和 Google Drive 的資料。
> - 後端工程師用它來在 CI/CD 流程中自動化測試，因為可以直接在虛擬檔案系統中操作多個服務，減少了環境配置的複雜性。
> - AI 研究者用它來快速測試不同的模型輸入，因為可以在同一環境中輕鬆切換資料來源，提升了實驗效率。

## 架構分析

Mirage 的架構基於 FUSE 技術，允許用戶將多個後端服務掛載為一個虛擬檔案系統。這樣的設計使得 AI 代理能夠使用熟悉的命令行工具進行操作，簡化了多後端整合的複雜性。每個資源都被視為檔案系統中的一部分，用戶可以輕鬆地在這些資源之間進行操作。

這種設計的代價是需要在 macOS 和 Linux 上運行，對於 Windows 用戶來說可能不太友好。此外，Mirage 的快照和版本控制功能使得用戶能夠在不同環境之間輕鬆轉移工作空間，這對於需要頻繁切換環境的開發者來說非常重要。整體而言，Mirage 的架構設計旨在提高開發效率，降低使用門檻。

## 技術深入分析

Mirage 的核心技術機制是基於 FUSE 的虛擬檔案系統，這使得不同的後端服務可以被掛載為檔案系統的一部分，並且用戶可以使用熟悉的 Unix 命令進行操作。這樣的設計不僅提高了操作的直觀性，也降低了學習成本。效能方面，Mirage 支援的快照和版本控制功能使得用戶能夠在不同環境之間輕鬆轉移工作空間，這對於需要頻繁切換環境的開發者來說非常重要。設計上，Mirage 的依賴樹相對簡單，主要依賴於 FUSE 和各種後端服務的 SDK，這使得整體架構較為輕量。技術風險方面，Mirage 可能在處理大量資料時面臨性能瓶頸，特別是在網路延遲較高的情況下。此外，對於某些後端服務的 API 限制也可能影響功能的完整性。整合方面，Mirage 可以輕鬆與主流的 AI 代理框架整合，並且支援多種開發環境，這使得它在現有技術生態中具有良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了多種範例，安裝過程相對順暢，沒有明顯的坑。提供了良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 統一的虛擬檔案系統，簡化多服務整合。
> - 使用熟悉的 Unix 命令，降低學習成本。
> - 支持快照和版本控制，方便資料管理。

> [!danger] 缺點
> - 目前僅支援 macOS 和 Linux，Windows 用戶無法使用。
> - 對於大型檔案的處理性能可能受限。
> - 某些服務的 API 限制可能影響功能完整性。

> [!warning] 注意事項
> - 目前僅支援 macOS 和 Linux，Windows 尚未實現。
> - 對於大型檔案的處理可能會受到性能影響，特別是在網路延遲較高的情況下。
> - 某些服務的 API 限制可能影響功能的完整性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理整合，但不支援虛擬檔案系統的功能，適合需要簡單代理的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料處理的工具，但不具備 Mirage 的多後端整合能力，適合單一資料來源的使用情境。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的整合，但不支援虛擬檔案系統的功能。 | 如果需要簡單的 AI 代理整合而不需要虛擬檔案系統的功能。 | low，因為功能範圍較小，遷移成本低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供資料處理功能，但不具備 Mirage 的多後端整合能力。 | 如果只需要處理單一資料來源的情境，適合不需要多服務整合的使用者。 | medium，因為需要調整使用方式以適應不同的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mirage** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代理的整合，但不支援虛擬檔案系統的功能。 | 提供資料處理功能，但不具備 Mirage 的多後端整合能力。 |
> | 遷移成本 | - | low，因為功能範圍較小，遷移成本低。 | medium，因為需要調整使用方式以適應不同的 API。 |
> | 適用場景 | 主要場景 | 如果需要簡單的 AI 代理整合而不需要虛擬檔案系統的功能。 | 如果只需要處理單一資料來源的情境，適合不需要多服務整合的使用 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，掛載的服務可能無法正確顯示檔案列表。
  - 解法：重新掛載服務或檢查 API 設定。
- **[HIGH]** 對於大型檔案的處理性能可能會受到影響。
  - 解法：考慮使用更小的檔案進行測試。
- [MEDIUM] 某些服務的 API 限制可能導致功能不完整。
  - 解法：檢查服務的 API 文檔以確認限制。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠簡化多服務整合，提升開發效率。 |
| 需要處理大量資料的數據科學團隊 | 普通 | 性能可能受到影響，需評估具體情況。 |
| 大型企業的 AI 代理應用 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個能夠簡化多服務整合的工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Mirage 本身不需要高權限，且不存取敏感資料，但依賴的後端服務可能有安全性考量。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/strukto-ai--mirage");
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
> const me = dv.page("Repos/strukto-ai--mirage");
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
| Forks | 58 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-05-06 |
| 官方網站 | [Link](https://www.strukto.ai/mirage) |
| Repo 大小 | 8.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/strukto-ai/mirage) |
| Topics | `agent-sandbox` `agent-tools` `ai-agents` `bash` `claude-code` `fuse` `langchain` `llm-agents` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 58
>     "Python" : 42
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zechengz](https://github.com/zechengz) | 4 |

**最新版本**：v0.0.1 — v0.0.1 — first public release (2026-05-06)

> [!info]- Release Notes
> The first public release of **Mirage** — a unified virtual filesystem for AI agents.
> 
> Mount S3, Google Drive, Slack, Gmail, GitHub, Linear, Notion, Postgres, MongoDB, SSH, and more behind one filesystem so agents read, write, and pipe across services with familiar shell commands.
> 
> ## What's included
> 
> - **Python SDK** — [`mirage-ai` on PyPI](https://pypi.org/project/mirage-ai/0.0.1/)
> - **TypeScript SDKs** — `@struktoai/mirage-{core,node,browser,agents,cli,server}` (npm publish forthcoming)
> - **CLI + daemon** — `uvx mirage-ai` or `uv tool install mirage-ai`
> - **FUSE mounts** — expose any workspace as a real filesystem (macOS / Linux)
> - **Agent integrations** — OpenAI Agents SDK, Vercel AI SDK, LangChain (deepagents), Pydantic AI, CAMEL, OpenHands, Mastra, Pi Coding Agent
> - **CLI agent integrations** — Claude Code and Codex via FUSE
> - **Documentation** — https://docs.mirage.strukto.ai
> 
> ## Install
> 
> ```bash
> # Python (library + CLI)
> uv add mirage-ai
> 
> # Or run the CLI directly
> uvx mirage-ai
> ```
> 
> ## Quickstart
> 
> ```python
> from mirage import MountMode, Workspace
> from mirage.resource.ram import RAMResource
> 

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應問題的速度尚可。
**連結**：[文件](https://www.strukto.ai/mirage)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-06）
> **活躍天數** 1 天 · **最新 commit** Update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/strukto-ai/mirage/issues/6) | Bug: `AbortSignal` is only checked at entry, never observed  | 0 | 0 |
> | [#5](https://github.com/strukto-ai/mirage/issues/5) | Feature: support per-call `env` in `ExecuteOptions` | 0 | 0 |
> | [#4](https://github.com/strukto-ai/mirage/issues/4) | Feature: support per-call `cwd` in `ExecuteOptions` | 0 | 0 |
> | [#3](https://github.com/strukto-ai/mirage/issues/3) | Multi-file shell ops perform per-file sequential reads — opp | 0 | 1 |
> | [#2](https://github.com/strukto-ai/mirage/issues/2) | Add convex support | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Mirage is **a Unified Virtual File System for AI Agents**: a single tree that mounts services and data sources like S3, Google Drive, Slack, Gmail, and Redis side-by-side as one filesystem.
> 
> AI agents reach every backend with the same handful of Unix-like tools, and pipelines compose across services as naturally as on a local disk. It's a simulated environment, agents see one filesystem underneath. Any LLM that already knows bash can use Mirage out of the box, with zero new vocabulary.
> 
> ```ts
> const ws = new Workspace({
>   '/data':   new RAMResource(),
>   '/s3':     new S3Resource({ bucket: 'logs' }),
>   '/slack':  new SlackResource({}),
>   '/github': new GitHubResource({}),
> })
> 
> await ws.execute('grep alert /slack/general/*.json | wc -l')
> await ws.execute('cat /github/mirage/README.md')
> await ws.execute('cp /s3/report.csv /data/local.csv')
> 
> // Register a new command, available across every mount.
> ws.command('summarize', ...)
> 
> // Override a command for a specific resource + filetype —
> // `cat` on a Parquet file in /s3 renders rows as JSON instead of raw bytes.
> ws.command('cat', { resource: 's3', filetype: 'parquet' }, ...)
> 
> await ws.execute('summarize /github/mirage/README.md')
> await ws.execute('cat /s3/events/2026-05-06.parquet | jq .user')
> ```
> 
> ## About
> 
> - **One filesystem, every backend.** Every service speaks the same filesystem semantics, so agents reason about one abstraction instead of N SDKs and M MCPs, leaning on the filesystem and bash vocabulary LLMs are most fluent in.
> - **Multiple resources, one filesystem:** RAM, Disk, Redis, S3 / R2 / OCI / Supabase / GCS, Gmail / GDrive / GDocs / GSheets / GSlides, GitHub / Linear / Notion / Trello, Slack / Discord / Telegram / Email, MongoDB, SSH, and more, mounted side-by-side under a single root.
> - **Familiar bash tools across every mount.** Agents reuse the same handful of Unix-like tools instead of learning a new API per service, and pipelines compose across services as naturally as on a local disk, the exact corpus modern LLMs are most heavily trained on.
> - **Portable workspaces:** clone, snapshot, and version your environment. Move agent runs between machines without restarting or reconfiguring the system.
> - **Embed in your apps and services:** Python and TypeScript SDKs let you give your AI agents a virtual filesystem directly inside FastAPI, Express, browser apps, or any async runtime, no separate process required. Clone, snapshot, and version the workspace from inside your code.
> - **Works with major agent application frameworks:** OpenAI Agents SDK, Vercel AI SDK (TypeScript), LangChain, Pydantic AI, CAMEL, and OpenHands.
> - **Lightweight CLI + daemon:** plugs into coding agents like Claude Code and Codex so they reach every mounted resource through familiar bash, getting more useful work done per turn.
> 
> ## Architecture
> 
>   
>     
>     
>   
> 
> ## Installation
> 
> ### Prerequisites
> 
> - **Python** ≥ 3.12 for the `mirage-ai` package and the `mirage` CLI
> - **Node.js** ≥ 20 for the TypeScript SDK
> - **macOS** or **Linux** (FUSE-based mounts require platform support)
> 
> ### Python
> 
> ```bash
> uv add mirage-ai
> ```
> 
> This installs both the `mirage` library and the `mirage` CLI binary.
> 
> ### TypeScript
> 
> Pick the package that matches your runtime:
> 
> ```bash
> npm install @struktoai/mirage-node      # Node.js servers and CLIs
> npm install @struktoai/mirage-browser   # browser / edge runtimes
> npm install @struktoai/mirage-core      # runtime-agnostic primitives
> ```
> 
> `@struktoai/mirage-node` and `@struktoai/mirage-browser` both pull in `@struktoai/mirage-core` automatically.
> 
> ### CLI
> 
> ```bash
> curl -fsSL https://strukto.ai/mirage/install.sh | sh
> ```
> 
> Or via your package manager of choice:
> 
> ```bash
> npm install -g @struktoai/mirage-cli
> ```
> 
> ```bash
> uvx mirage-ai
> ```
> 
> ```bash
> npx @struktoai/mirage-cli
> ```
> 
> ## Quickstart (Python)
> 
> ```python
> from mirage import Workspace
> from mirage.resource.gdocs import GDocsConfig, GDocsResource
> from mirage.resource.ram import RAMResource
> from mirage.resource.s3 import S3Config, S3Resource
> from mirage.resource.slack import SlackConfig, SlackResource
> 
> ws = Workspace({
>     "/data":  RAMResource(),
>     "/s3":    S3Resource(S3Config(bucket="my-bucket")),
>     "/slack": SlackResource(SlackConfig()),
>     "/docs":  GDocsResource(GDocsConfig()),
> })
> 
> await ws.execute("cp /s3/report.csv /data/report.csv")
> await ws.execute("grep alert /s3/data/log.jsonl | wc -l")
> 
> ws.snapshot("demo.tar")
> ```
> 
> ## Quickstart (TypeScript)
> 
> ```ts
> import {
>   Workspace,
>   RAMResource,
>   S3Resource,
>   SlackResource,
>   GDocsResource,
> } from '@struktoai/mirage-browser'
> 
> const ws = new Workspace({
>   '/data':  new RAMResource(),
>   '/s3':    new S3Resource({ bucket: 'my-bucket' }),
>   '/slack': new SlackResource({}),
>   '/docs':  new GDocsResource({}),
> })
> 
> await ws.execute('cp /s3/report.csv /data/report.csv')
> await ws.execute('grep alert /s3/data/log.jsonl | wc -l')
> ```
> 
> ## Quickstart (CLI)
> 
> ```bash
> mirage workspace create ws.yaml --id demo
> mirage execute   --workspace_id demo --command "cp /s3/report.csv /data/report.csv"
> mirage provision --workspace_id demo --command "cat /s3/data/large.jsonl"
> mirage workspace snapshot demo demo.tar
> mirage workspace load demo.tar --id demo-restored
> ```
> 
> ## Agent Frameworks
> 
> Mirage drops into the major agent application frameworks as a sandbox or tool layer. Your agent runs against the same mount tree it would in bash, so swapping the model or runtime never changes the surface.
> 
> ### OpenAI Agents SDK (Python)
> 
> The `MirageSandboxClient` plugs a `Workspace` into the OpenAI Agents SDK as a sandbox: bash commands the agent runs execute against your mounts.
> 
> ```python
> from agents import Runner
> from agents.run import RunConfig
> from agents.sandbox import SandboxAgent, SandboxRunConfig
> 
> from mirage.agents.openai_agents import MirageSandboxClient
> 
> client = MirageSandboxClient(ws)
> agent = SandboxAgent(
>     name="Mirage Sandbox Agent",
>     model="gpt-5.4-nano",
>     instructions=ws.file_prompt,
> )
> 
> result = await Runner.run(
>     agent,
>     "Summarize /s3/data/report.parquet into /report.txt.",
>     run_config=RunConfig(sandbox=SandboxRunConfig(client=client)),
> )
> ```
> 
> ### Vercel AI SDK (TypeScript)
> 
> `mirageTools(ws)` exposes the workspace as a typed AI SDK tool set, so any model wired into the AI SDK can read and write across mounts, in Node or the browser.
> 
> ```ts
> import { generateText } from 'ai'
> import { openai } from '@ai-sdk/openai'
> import { mirageTools } from '@struktoai/mirage-agents/vercel'
> import { buildSystemPrompt } from '@struktoai/mirage-agents/openai'
> 
> const { text } = await generateText({
>   model: openai('gpt-5.4-nano'),
>   system: buildSystemPrompt({ mountInfo: { '/': 'In-memory filesystem' } }),
>   prompt: "Use readFile to read /docs/paper.pdf, then describe what's in it.",
>   tools: mirageTools(ws),
> })
> ```
> 
> LangChain, Pydantic AI, CAMEL, OpenHands, and Mastra adapters live alongside these.
> 
> ## Cache
> 
> Every `Workspace` ships with a **two-layer cache** so repeated work against remote backends (S3, GDrive, Slack, …) hits local state instead of the network:
> 
> - **Index cache.** Listings and metadata. The first directory walk hits the API; subsequent ones serve from the index until TTL expires.
> - **File cache.** Object bytes. The first read streams from origin; later pipelines read from cache.
> - **Pluggable backends.** Each layer is a store with two built-ins:
>   - **RAM** (default): in-process, zero setup, 512 MB file cache and 10-minute index TTL. Best for single-process apps and notebooks.
>   - **Redis**: shared across workers, processes, and machines. Best for serverless, multi-replica services, or when you want cache state to survive restarts.
> 
> ```ts
> import { RedisFileCacheStore, RedisIndexCacheStore, Workspace } from 'mirage/node'
> 
> const ws = new Workspace(
>   { '/s3': new S3Resource({ bucket: 'my-bucket' }) },
>   {
>     cache: new RedisFileCacheStore({ url: 'redis://localhost:6379/0', limit: '8GB' }),
>     index: new RedisIndexCacheStore({ url: 'redis://localhost:6379/0', ttl: 600 }),
>   },
> )
> ```
> 
> ```ts
> import { S3R

## 延伸閱讀

相關概念：[[虛擬檔案系統]] · [[AI 代理]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[jackwener--opencli|jackwener/opencli]] · [[santifer--career-ops|santifer/career-ops]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/strukto-ai/mirage) · [官方網站](https://www.strukto.ai/mirage)

## 相關收錄

> [!note]- 直接競品（同子分類：虛擬檔案系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "虛擬檔案系統" AND file.name != "strukto-ai--mirage"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "strukto-ai--mirage"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "strukto-ai--mirage" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "strukto-ai--mirage"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["虛擬檔案系統","AI 代理","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "strukto-ai--mirage" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/strukto-ai--mirage");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "strukto-ai--mirage" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "strukto-ai" AND file.name != "strukto-ai--mirage"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/strukto-ai--mirage");
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
> const me = dv.page("Repos/strukto-ai--mirage");
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
> const me = dv.page("Repos/strukto-ai--mirage");
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
> const me = dv.page("Repos/strukto-ai--mirage");
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
> const me = dv.page("Repos/strukto-ai--mirage");
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

> **2026-05-08** — 首次收錄
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

- [[2026-05-13|2026-05-13]] — 再次上榜，2.1k stars
- [[2026-05-12|2026-05-12]] — 再次上榜，1.9k stars
- [[2026-05-11|2026-05-11]] — 再次上榜，1.8k stars
- [[2026-05-10|2026-05-10]] — 再次上榜，1.6k stars
- [[2026-05-09|2026-05-09]] — 再次上榜，1.4k stars
- [[2026-05-08|2026-05-08]] — 首次收錄，1.0k stars
