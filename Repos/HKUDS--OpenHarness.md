---
repo: HKUDS/OpenHarness
url: https://github.com/HKUDS/OpenHarness
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "OpenHarness: Open Agent Harness with a built-in personal agent, Ohmo!"
homepage: ""
stars: 8613
stars_per_day: 957
forks: 1509
open_issues: 32
created: 2026-04-01
pushed_at: 2026-04-10
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.6"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供一個開源的 AI 代理架構，讓個人代理 Ohmo 能夠自動化編程任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 51
repo_size_kb: 10500
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7142,2026-04-08:7164,2026-04-09:7764,2026-04-10:8224,2026-04-11:8613"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "OpenHarness"
  - "HKUDS/OpenHarness"
  - "提供一個開源的 AI 代理架構，讓個人代理 Ohmo 能夠自動化編程任務。"
---

# OpenHarness

**8.6k** stars · **957** stars/天 · 建立 9 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HKUDS--OpenHarness");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.6` `easy-install`

> [!summary] 一句話摘要
> 提供一個開源的 AI 代理架構，讓個人代理 Ohmo 能夠自動化編程任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (957 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在團隊中使用 AI 代理進行編程自動化的開發者和團隊領導。
> **一句話重點** OpenHarness 的強大之處在於其多代理協作能力，讓開發者能夠在團隊中高效使用 AI 代理。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "HKUDS--OpenHarness" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的 AI 代理自動化，值得投資。

> [!abstract] 核心創新
> OpenHarness 提供了一個完整的代理基礎架構，能夠支持多代理協作和持久記憶。

## 專案簡介

OpenHarness 是一個開源的 AI 代理架構，專為開發者設計，能夠透過聊天應用（如 Feishu、Slack、Telegram 和 Discord）與個人代理 Ohmo 互動。用戶可以透過簡單的指令，例如 `ohmo init` 和 `ohmo config`，快速設置代理，並開始自動化任務，如分支管理、代碼撰寫和測試執行。這個架構的核心在於它的多代理協調系統，能夠支持多個代理在同一環境中協同工作，並且具備持久的記憶功能，讓代理能夠在長時間的會話中保持上下文。技術上，OpenHarness 使用 Python 和 TypeScript，並依賴多個庫，如 `anthropic` 和 `openai`，以支持不同的 LLM 提供者。

這種設計使得開發者能夠輕鬆擴展和自定義代理的功能，並且支持多種 API 兼容性，從而提高了靈活性和可擴展性。與其他工具相比，如 GitHub Copilot 和 OpenAI 的 API，OpenHarness 提供了更強的多代理協調能力和自定義插件系統，適合需要高效協作的團隊使用。實際使用中，OpenHarness 能夠處理複雜的任務和多個代理的管理，但在使用時可能會遇到配置上的挑戰，尤其是在多個 API 提供者的整合上。這個專案目前仍在快速發展中，未來可能會加入更多功能和改進，值得關注。

**技術棧**：`Python 3.10` · `TypeScript` · `Shell`

## 重點功能

- 個人 AI 代理 Ohmo — 能夠在多個聊天平台上運行，並自動執行代碼撰寫和測試任務。
- 多代理協調系統 — 支持多個代理的協作，能夠有效管理任務和上下文。
- 持久記憶功能 — 讓代理能夠在長時間會話中保持上下文，提升交互的連貫性。
- API 兼容性 — 支持多種 LLM 提供者，如 Claude 和 OpenAI，無需額外 API 金鑰。
- 插件生態系統 — 允許開發者擴展代理的功能，支持自定義插件和技能。

## 快速開始

1. 安裝 OpenHarness
```bash
pip install openharness-ai
```
2. 設置代理
```bash
oh setup
```
3. 啟動代理
```bash
ohmo init && ohmo config && ohmo gateway start
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 OpenHarness 並設置代理。",
  "指令": "ohmo init && ohmo config && ohmo gateway start",
  "預期輸出": "Ohmo 現在在你的聊天應用中運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 8613 stars（957/天），forks 1509（17.5%），顯示出強烈的社群參與。主要貢獻者包括多位活躍的開發者，這些人過去在開源社群中有豐富的經驗。這個專案解決了開發者在使用 LLM 進行編程時的協作與自動化需求，之前的解決方案往往缺乏靈活性和擴展性。隨著 AI 技術的進步，對於這類工具的需求也在增加，特別是在團隊合作和自動化任務方面。forks/stars 比率為 17.5%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在團隊中使用 AI 代理進行編程自動化的開發者和團隊領導。

> [!example] 使用場景
> - 後端工程師用它來自動化代碼測試和 PR 開放，因為 Ohmo 能夠在 Slack 中直接執行這些任務，節省了大量手動操作的時間。
> - 團隊領導用它來協調多個代理的工作，因為它的多代理協調系統能夠有效管理任務分配，提升團隊的工作效率。
> - 開發者用它來整合不同的 LLM 提供者，因為它支持多種 API 兼容性，讓開發者能夠靈活選擇最適合的模型。

## 架構分析

OpenHarness 採用模組化設計，核心是代理架構，能夠支持多種 LLM 提供者。每個代理都能夠獨立運行，並透過 API 進行通訊。這種設計使得開發者能夠靈活地擴展功能，並且能夠在不同的環境中運行。資料流方面，代理能夠接收來自用戶的請求，通過 API 調用 LLM，並將結果返回給用戶。這樣的架構選擇使得系統具備高可擴展性，但也可能在多代理運行時面臨資源競爭的問題。

## 技術深入分析

OpenHarness 的核心技術機制是其代理架構，這種架構允許多個代理在同一環境中協同工作。每個代理都能夠獨立運行，並透過 API 調用 LLM，這使得系統具備高可擴展性。效能方面，OpenHarness 能夠處理多個代理的請求，但在高負載下可能會面臨資源競爭的問題。設計上，選擇 Python 和 TypeScript 作為技術棧，這使得開發者能夠快速上手並進行擴展，但也可能帶來一定的學習曲線。技術風險方面，隨著使用者數量的增加，可能會面臨 API 穩定性和性能瓶頸的挑戰。整合方面，OpenHarness 能夠與主流的 CI/CD 工具友好整合，並且支持多種 IDE 的插件，降低了使用的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，並提供了良好的入門指南。整體上，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多種 LLM 提供者，靈活性高。
> - 具備持久記憶功能，提升長時間交互的效果。
> - 多代理協作能力強，適合團隊使用。

> [!danger] 缺點
> - 配置過程可能較為複雜，需要時間學習。
> - 在多代理運行時可能會面臨資源競爭問題。
> - 仍在快速開發中，可能會有不穩定的 API 變更。

> [!warning] 注意事項
> - 需要 Python 3.10 以上版本。
> - 在配置多個 API 提供者時，可能需要額外的設定時間。
> - 目前仍在快速開發中，可能會有不穩定的 API 變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 代理功能，但主要集中在單一代理的使用，而 OpenHarness 支持多代理協作。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 專注於 Claude 模型的使用，而 OpenHarness 提供更廣泛的 API 兼容性和自定義插件支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Go 語言實作，專注於資料同步和傳輸，而 OpenHarness 更加專注於 AI 代理的協作和自動化。 | 如果你的需求主要是資料同步而非 AI 代理的協作，則可以選擇 parsync。 | medium，因為需要重新設計整個工作流。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，而 OpenHarness 更加注重於多代理的協作和功能擴展。 | 如果你的專案對安全性有極高要求，Shadowbroker 可能更合適。 | high，因為需要重新評估整個架構和安全策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenHarness** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Go 語言實作，專注於資料同步和傳輸，而 OpenHarness 更加專注於 AI 代理的協作和自動化。 | 專注於安全性和隱私保護，而 OpenHarness 更加注重於多代理的協作和功能擴展。 |
> | 遷移成本 | - | medium，因為需要重新設計整個工作流。 | high，因為需要重新評估整個架構和安全策略。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非 AI 代理的協作，則可以選擇 | 如果你的專案對安全性有極高要求，Shadowbroker 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行實驗和探索，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多代理運行時，可能會遇到資源競爭問題，導致性能下降。
  - 解法：優化代理的資源使用，或限制同時運行的代理數量。
- [MEDIUM] 配置過程中可能會出現 API 鍵不匹配的情況。
  - 解法：仔細檢查配置文件，確保所有 API 鍵正確無誤。
- [MEDIUM] 在使用過程中，可能會遇到不穩定的 API 變更。
  - 解法：定期檢查更新，並保持對文檔的關注。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 具備自動化和多代理協作能力，能夠提高開發效率。 |
| 大型企業的 AI 代理系統 | 適合 | 雖然功能強大，但可能需要更多的配置和資源管理。 |
| 個人開發者的簡單專案 | 普通 | 雖然功能豐富，但對於簡單專案來說可能過於複雜。 |
| 需要高安全性的金融系統 | 不適合 | 目前仍在 beta 階段，可能存在安全性風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的 AI 代理自動化，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenHarness 本身不需要高權限，並且不存取敏感資料。依賴的庫和 API 需定期檢查安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
| Forks | 1.5k |
| Open Issues | 32 |
| Issue 解決率 | 51% (33 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 10.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/OpenHarness) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 95
>     "TypeScript" : 4
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 142 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 32 |
> | [@yl-jiang](https://github.com/yl-jiang) | 5 |
> | [@siaochuan](https://github.com/siaochuan) | 5 |
> | [@glitch-ux](https://github.com/glitch-ux) | 4 |

**最新版本**：v0.1.6 — v0.1.6 — ohmo Personal Agent & Auto-Compaction (2026-04-10)

> [!info]- Release Notes
> ## Highlights
> 
> **ohmo** — a personal AI agent built on OpenHarness. Chat with ohmo in Feishu / Slack / Telegram / Discord, and it forks branches, writes code, runs tests, and opens PRs on its own. ohmo runs on your existing Claude Code or Codex subscription — no extra API key needed.
> 
> ```bash
> pip install openharness-ai
> oh setup
> oh
> ```
> 
> ```bash
> ohmo init && ohmo config && ohmo gateway start
> ```
> 
> ---
> 
> ## What's New since v0.1.0
> 
> ### 🤖 Swarm & Multi-Agent
> - Full coordinator orchestration system with agent definition loading
> - InProcessBackend with contextvars isolation, subprocess backend for pollable agents
> - WorktreeManager with git worktree isolation per teammate
> - TeamLifecycleManager with persistent team file management
> - Mailbox communication system with file-lock layer extracted to standalone module
> - Permission sync protocol for leader-worker bridging
> - Subprocess teammates run in headless worker mode
> 
> ### 🧠 Auto-Compaction
> - Context auto-compression for long-running sessions
> - Task state and channel logs preserved across compaction

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和回應問題。
**連結**：[文件](https://github.com/HKUDS/OpenHarness/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-10 ~ 2026-04-10）
> **活躍天數** 1 天 · **最新 commit** docs(readme): simplify Quick Start and add ohmo setup guide

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/HKUDS/OpenHarness/issues/40) | 是否会支持ACP协议？ `enhancement` | 1 | 0 |
> | [#18](https://github.com/HKUDS/OpenHarness/issues/18) | [Discussion] Run-level evidence layer: structured archive fo | 1 | 1 |
> | [#10](https://github.com/HKUDS/OpenHarness/issues/10) | [Feature]: Need demo or README.md for how to add various LLM `enhancement` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp;&nbsp;
>   
>   
>   oh — OpenHarness &amp; ohmo
> 
>   English ·
>   简体中文
> 
> **OpenHarness** delivers core lightweight agent infrastructure: tool-use, skills, memory, and multi-agent coordination.
> 
> **ohmo** is a personal AI agent built on OpenHarness — not another chatbot, but an assistant that actually works for you over long sessions. Chat with ohmo in Feishu / Slack / Telegram / Discord, and it forks branches, writes code, runs tests, and opens PRs on its own. ohmo runs on your existing Claude Code or Codex subscription — no extra API key needed.
> 
> **Join the community**: contribute **Harness** for open agent development.
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
>   
>   
>   
>   
>   
> 
> One Command (**oh**) to Launch **OpenHarness** and Unlock All Agent Harnesses. 
> 
> Supports CLI agent integration including OpenClaw, nanobot, Cursor, and more.
> 
>   
> 
> ---
> 
> ## 🚀 Quick Start
> 
> 
> ### 1. Install
> 
> ```bash
> 
> # One-click install (Linux / macOS / WSL)
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
> 
> 
> # Development setup
> git clone https://github.com/HKUDS/OpenHarness.git
> cd OpenHarness
> uv sync --extra dev
> uv run pytest -q  # Verify everything works
> ```
> 
> Useful contributor entry points:
> 
> - [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup, checks, and PR expectations
> - [`CHANGELOG.md`](CHANGELOG.md) for user-visible changes
> - [`docs/SHOWCASE.md`](docs/SHOWCASE.md) for real-world usage patterns worth documenting
> 
> ---
> 
> 
> ## ✨ OpenHarness's Key Harness Features
> 
> 🔄 Agent Loop
> 
>   
> 
> • Streaming Tool-Call Cycle
> • API Retry with Exponential Backoff
> • Parallel Tool Execution
> • Token Counting & Cost Tracking
> 
> 🔧 Harness Toolkit
> 
>   
> 
> • 43 Tools (File, Shell, Search, Web, MCP)
> • On-Demand Skill Loading (.md)
> • Plugin Ecosystem (Skills + Hooks + Agents)
> • Compatible with anthropics/skills & plugins
> 
> 🧠 Context & Memory
> 
>   
> 
> • CLAUDE.md Discovery & Injection
> • Context Compression (Auto-Compact)
> • MEMORY.md Persistent Memory
> • Session Resume & History
> 
> 🛡️ Governance
> 
>   
> 
> • Multi-Level Permission Modes
> • Path-Level & Command Rules
> • PreToolUse / PostToolUse Hooks
> • Interactive Approval Dialogs
> 
> 🤝 Swarm Coordination
> 
>   
> 
> • Subagent Spawning & Delegation
> • Team Registry & Task Management
> • Background Task Lifecycle
> • ClawTeam Integration (Roadmap)
> 
> ---
> 
> 
> ## ✨ Features
> 
> 
> ### 2. Configure
> 
> ```bash
> oh setup    # interactive wizard — pick a provider, authenticate, done
> ```
> 
> Supports **Claude / OpenAI / Copilot / Codex / Moonshot(Kimi) / GLM / MiniMax** and any compatible endpoint.
> 
> 
> ### Compatible API Families
> 
> #### Anthropic-Compatible API
> 
> Typical examples:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **Claude official** | `https://api.anthropic.com` | `claude-sonnet-4-6`, `claude-opus-4-6` |
> | **Moonshot / Kimi** | `https://api.moonshot.cn/anthropic` | `kimi-k2.5` |
> | **Zhipu / GLM** | custom Anthropic-compatible endpoint | `glm-4.5` |
> | **MiniMax** | custom Anthropic-compatible endpoint | `minimax-m1` |
> 
> #### OpenAI-Compatible API
> 
> Any provider implementing the OpenAI `/v1/chat/completions` style API works:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **OpenAI** | `https://api.openai.com/v1` | `gpt-5.4`, `gpt-4.1` |
> | **OpenRouter** | `https://openrouter.ai/api/v1` | provider-specific |
> | **Alibaba DashScope** | `https://dashscope.aliyuncs.com/compatible-mode/v1` | `qwen3.5-flash`, `qwen3-max`, `deepseek-r1` |
> | **DeepSeek** | `https://api.deepseek.com` | `deepseek-chat`, `deepseek-reasoner` |
> | **GitHub Models** | `https://models.inference.ai.azure.com` | `gpt-4o`, `Meta-Llama-3.1-405B-Instruct` |
> | **SiliconFlow** | `https://api.siliconflow.cn/v1` | `deepseek-ai/DeepSeek-V3` |
> | **Groq** | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
> | **Ollama (local)** | `http://localhost:11434/v1` | any local model |
> 
> 
> ### GitHub Copilot Format (`--api-format copilot`)
> 
> Use your existing GitHub Copilot subscription as the LLM backend. Authentication uses GitHub's OAuth device flow — no API keys needed.
> 
> ```bash
> 
> # Configure gateway channels and pick a provider profile
> ohmo config
> 
> 
> ## 🤔 What is an Agent Harness?
> 
> An **Agent Harness** is the complete infrastructure that wraps around an LLM to make it a functional agent. The model provides intelligence; the harness provides **hands, eyes, memory, and safety boundaries**.
> 
>   
> 
> OpenHarness is an open-source Python implementation designed for **researchers, builders, and the community**:
> 
> - **Understand** how production AI agents work under the hood
> - **Experiment** with cutting-edge tools, skills, and agent coordination patterns
> - **Extend** the harness with custom plugins, providers, and domain knowledge
> - **Build** specialized agents on top of proven architecture
> 
> ---
> 
> 
> ## 📰 What's New
> 
> - **2026-04-10** 🧠 **v0.1.6** — Auto-Compaction & Markdown TUI:
>   - Auto-Compaction preserves task state and channel logs across context compression — agents can run multi-day sessions without manual compact/clear
>   - Subprocess teammates run in headless worker mode; agent team creation stabilized
>   - Assistant messages now render full Markdown in the React TUI
>   - `ohmo` gains channel slash commands and multimodal attachment support
> - **2026-04-08** 🔌 **v0.1.5** — MCP HTTP transport & Swarm polling:
>   - MCP protocol adds HTTP transport, auto-reconnect on disconnect, and tool-only server compatibility
>   - JSON Schema types inferred for MCP tool inputs — no manual type mapping needed
>   - `ohmo` channels support file attachments and multimodal gateway messages
>   - Subprocess agents are now pollable in real runs; permission modals serialized to prevent input swallowing
> - **2026-04-08** 🌙 **v0.1.4** — Multi-provider auth & Moonshot/Kimi:
>   - Native Moonshot/Kimi provider with `reasoning_content` support for thinking models
>   - Auth overhaul: fixed provider-switching key mismatch, `OPENAI_BASE_URL` env override, profile-scoped credential priority
>   - MCP gracefully handles disconnected servers in `call_tool` / `read_resource`
>   - Security: built-in sensitive-path protection in PermissionChecker, hardened `web_fetch` URL validation
>   - Stability: EIO crash recovery in Ink TUI, `--debug` logging, Windows cmd flash fix
> - **2026-04-06** 🚀 **v0.1.2** — Unified setup flows and `ohmo` personal-agent app:
>   - `oh setup` now guides provider selection as workflows instead of exposing raw auth/provider internals
>   - Compatible API setup is now profile-scoped, so Anthropic/OpenAI-compatible endpoints can keep separate keys
>   - `ohmo` ships as a packaged app with `~/.ohmo` workspace, gateway, bootstrap prompts, and channel config flow
> - **2026-04-01** 🎨 **v0.1.0** — Initial **OpenHarness** open-source release featuring complete Harness architecture: 
> 
>   Start here:
>   Quick Start ·
>   Provider Compatibility ·
>   Showcase ·
>   Contributing ·
>   Changelog
> 
> ---
> 
> 
> # Or via pip
> pip install openharness-ai
> ```
> 
> 
> ### 3. Run
> 
> ```bash
> oh
> ```
> 
>   
> 
> 
> ### 4. Set up ohmo (Personal Agent)
> 
> Want an AI agent that works for you from Feishu / Slack / Telegram / Discord?
> 
> ```bash
> ohmo init             # initialize ~/.ohmo workspace
> ohmo config           # configure channels and provider
> ohmo gateway start    # start the gateway — ohmo is now live in your chat app
> ```
> 
> ohmo runs on your existing **Claude Code subscription** or **Codex subscription** — no extra API key needed.
> 
> 
> ### Non-Interactive Mode (Pipes & Scripts)
> 
> ```bash
> 
> # Single prompt → stdout
> oh -p "Explain this codebase"
> 
> 
> # JSON output for programmatic use
> oh -p "List all functions in main.py" --output-format json
> 
> 
> # Stream JSON events in real-time
> oh -p "Fix the bug" --output-format stream-json
> ```
> 
> 
> ## 🔌 Provider Compatibility
> 
> OpenHarness treats providers as **workflows** backed by named profiles. In day-to-day use, prefer:
> 
> ```bash
> oh setup
> oh provider list
> oh provider use 
> ```
> 
> 
> ### Built-in Workflows
> 
> | Workflow | What it is | Typical backends |
> |----------|------------|------------------|
> | **Anthropic-Compatible API** 

## 延伸閱讀

相關概念：[[多模態]] · [[自動化]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]]

[GitHub](https://github.com/HKUDS/OpenHarness)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--OpenHarness" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--OpenHarness" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--OpenHarness" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 首次收錄，7.1k stars
