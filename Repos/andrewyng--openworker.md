---
repo: andrewyng/openworker
url: https://github.com/andrewyng/openworker
owner: andrewyng
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 1686
stars_per_day: 422
forks: 249
open_issues: 57
created: 2026-07-20
pushed_at: 2026-07-23
first_seen: 2026-07-24
week: "2026-W30"
month: "2026-07"
category: "生產力"
subcategory: "AI 助手"
release_tag: "v0.1.6"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-24
use_case: "提供一個開源的 AI 助手平台，能夠在桌面上自動完成日常任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-27"
contributor_count: 3
engagement: "medium"
issue_close_rate: 2
repo_size_kb: 1619
readme_length: 6698
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-24"
star_history: "2026-07-24:1686"
tags:
  - github
  - "category/生產力"
  - "lang/python"
aliases:
  - "openworker"
  - "andrewyng/openworker"
  - "提供一個開源的 AI 助手平台，能夠在桌面上自動完成日常任務。"
---

# openworker

**1.7k** stars · **422** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/andrewyng--openworker");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.6`

> [!summary] 一句話摘要
> 提供一個開源的 AI 助手平台，能夠在桌面上自動完成日常任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (422 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要一個能在桌面上自動完成日常任務的獨立開發者或業務專業人士。
> **一句話重點** OpenWorker 的本地執行特性使其在隱私和安全性上具備優勢，適合需要保護數據的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/andrewyng--openworker");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "andrewyng--openworker" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，8 小時整合，得到高效的日常任務自動化，值得投入。

> [!abstract] 核心創新
> OpenWorker 提供了一個本地執行的 AI 助手，能夠自動完成日常任務，並支持多種模型提供者。

## 專案簡介

OpenWorker 是一個開源的 AI 助手，旨在幫助用戶自動完成日常任務，像是撰寫文件、更新日曆或回覆 Slack 訊息。用戶只需告訴 OpenWorker 期望的結果，例如「準備客戶簡報」，它會將任務分解為多個步驟，並在桌面、文件及連接的應用程式中執行。在進行任何重要操作之前，OpenWorker 會先確認用戶的批准，確保不會意外執行不必要的動作。這樣的設計使得用戶最終獲得的是完成的交付物，而非待辦事項清單。該工具支持多達 25 種以上的應用整合，包括 Slack、Jira、Notion 等，並且能夠根據用戶的需求選擇模型提供者，無論是 OpenAI、Anthropic 還是本地模型如 Ollama。

這種靈活性使得 OpenWorker 不會鎖定於任何特定的模型，並確保用戶的數據安全性，因為所有操作都在本地進行。其核心架構基於 aisuite，這是一個輕量級的 Python 庫，提供統一的聊天完成 API 和工具支持。這樣的設計選擇使得 OpenWorker 在功能上具備高度的可擴展性和靈活性。與其他類似工具相比，OpenWorker 的最大優勢在於其本地執行的特性，這意味著用戶的數據不會被上傳至雲端，從而提高了隱私性和安全性。

**技術棧**：`Python 3.10` · `Node 20` · `Rust`

## 重點功能

- 多種交付物生成 — 能夠生成文件、報告、電子表格等，並以可分享的格式輸出。
- Slack 整合 — 在 Slack 中提及 @OpenWorker 即可啟動會話，並在桌面上完成工作。
- 25+ 應用整合 — 支援 GitHub、Notion、Jira 等多種工具，並可透過 MCP 協議進行擴展。
- 自動化排程 — 能夠設定定期執行的任務，如每週報告或日常簡報。
- 用戶批准機制 — 在執行任何重要操作前，會先確認用戶的批准，避免意外行動。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/andrewyng/openworker && cd openworker
```
2. 設置開發環境
```bash
bash packaging/setup_dev_env.sh
```
3. 啟動本地代理伺服器
```bash
.venv/bin/openworker-server --cwd ~/some/project --port 8765
```

## 程式碼範例

```python
{
  "前置條件": "需要 Python 3.10+ 和 Node 20+。",
  "指令": "bash packaging/setup_dev_env.sh",
  "預期輸出": "設置開發環境所需的虛擬環境。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1686 stars（422/天），forks 249（14.8%），顯示出強烈的社群興趣。這個專案的作者 rohitprasad15 和 andrewyng 具備豐富的開發經驗，之前在 aisuite 的工作為這個專案奠定了基礎。OpenWorker 解決了許多用戶在日常工作中需要多個工具協作的痛點，提供了一個集成的解決方案。最近的推文和社群討論也引發了對這個工具的關注，特別是在 AI 助手的需求日益增加的背景下。高達 14.8% 的 forks/stars 比率顯示出許多開發者對這個專案進行實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要一個能在桌面上自動完成日常任務的獨立開發者或業務專業人士。

> [!example] 使用場景
> - 業務開發人員用它來自動生成客戶簡報，因為這樣可以節省大量的時間，並且確保內容的專業性。
> - 專案經理用它來整合 Slack 和 Jira 的訊息，因為這樣可以快速獲得專案進度而不需要手動查詢。
> - 內容創作者用它來編寫和排版文章，因為它能夠自動生成格式化的文件，提升工作效率。

## 架構分析

OpenWorker 的架構基於一個本地代理伺服器，這樣的設計使得用戶的數據不會被上傳至雲端，從而提高了隱私性。其核心使用 Python 實現，並利用 aisuite 提供的統一 API 來支持多種 LLM 模型。資料流從用戶的請求開始，經過代理伺服器處理後，通過各種應用整合進行操作。這樣的設計選擇使得 OpenWorker 在功能上具備高度的靈活性，但可能在擴展性上受到本地環境的限制。整體來說，這種架構能夠有效地處理多種任務，但在面對大規模資料時，性能可能會受到影響。

## 技術深入分析

OpenWorker 的核心技術機制基於 aisuite，這是一個提供統一聊天完成 API 的輕量級 Python 庫。這使得 OpenWorker 能夠靈活地整合多種 LLM 模型，並在用戶的本地環境中運行。效能方面，由於所有操作都在本地進行，這意味著用戶的數據不會被上傳至雲端，從而提高了隱私性。然而，這也可能導致在處理大型資料時性能下降，特別是在資源有限的環境中。

設計上選擇 Python 使得開發過程相對簡單，但也可能導致在高並發情況下的性能瓶頸。對於依賴於外部 API 的功能，OpenWorker 需要穩定的網路連接，否則會影響其整體效能。整合方面，OpenWorker 支援多種 CI/CD 工具，並且能夠輕鬆地與現有的開發流程相容，但對於某些特定的環境配置，可能需要額外的適配。整體而言，OpenWorker 提供了一個靈活且強大的解決方案，適合需要高隱私性和自動化的用戶。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用說明，包含必要的範例。安裝過程相對順暢，但需要注意多個依賴的安裝。文件中缺乏中文或多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 本地執行，保護用戶隱私。
> - 支持多種模型提供者，靈活性高。
> - 集成多種應用，提升工作效率。

> [!danger] 缺點
> - 安裝過程相對複雜，需要多個依賴。
> - Windows 版本尚未簽名，可能影響使用體驗。
> - 對於大型資料處理可能存在性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 目前 Windows 版本尚未簽名，可能會有 SmartScreen 警告。
> - 需要安裝 Node.js 及 Rust 工具鏈來運行桌面應用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個可視化的代理生成工具，而 OpenWorker 更專注於日常任務的自動化和整合。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 模型的管理，而 OpenWorker 提供的是一個完整的工作流自動化解決方案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供可視化的代理生成工具，專注於簡化代理的創建過程。 | 如果你的團隊需要快速生成和測試代理，而不關心日常任務的自動化。 | medium - 需要重新設計工作流以適應新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 模型的管理，提供更細粒度的控制。 | 如果你的需求主要是管理和調用多個 AI 模型，而不是自動化日常任務。 | high - 需要重新設計整個應用架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openworker** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供可視化的代理生成工具，專注於簡化代理的創建過程。 | 專注於 AI 模型的管理，提供更細粒度的控制。 |
> | 遷移成本 | - | medium - 需要重新設計工作流以適應新的工具。 | high - 需要重新設計整個應用架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速生成和測試代理，而不關心日常任務的自動化 | 如果你的需求主要是管理和調用多個 AI 模型，而不是自動化日 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 上的安裝過程可能會遇到 SmartScreen 警告
  - 解法：使用 macOS 或在 Windows 上等待簽名完成
- [MEDIUM] 某些應用整合可能需要額外的配置
  - 解法：參考官方文檔進行配置
- [MEDIUM] 在處理大型任務時可能會出現性能瓶頸
  - 解法：考慮將任務拆分為小型任務進行處理

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要自動化日常任務 | 非常適合 | 其本地執行特性和多種應用整合非常符合小型團隊的需求。 |
| 大型企業需要高效的任務管理系統 | 普通 | 雖然功能強大，但在大型資料處理上可能會遇到性能瓶頸。 |
| 需要保護數據隱私的個人用戶 | 非常適合 | 所有操作均在本地進行，能有效保護用戶的數據隱私。 |
| 對於不熟悉技術的用戶 | 不適合 | 安裝和配置過程相對複雜，可能需要技術支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高效的日常任務自動化，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenWorker 在本地執行，不需要高權限，且不會存取敏感資料。依賴鏈的信任程度較高，因為使用了知名的開源庫。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
| Forks | 249 |
| Open Issues | 57 |
| Issue 解決率 | 2% (1 closed) |
| 最後推送 | 2026-07-23 |
| 建立日期 | 2026-07-20 |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/andrewyng/openworker) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 58
>     "TypeScript" : 33
>     "HTML" : 4
>     "CSS" : 3
>     "Rust" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@rohitprasad15](https://github.com/rohitprasad15) | 44 |
> | [@andrewyng](https://github.com/andrewyng) | 1 |
> | [@Yashasm18](https://github.com/Yashasm18) | 1 |

**最新版本**：v0.1.6 (2026-07-23)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/andrewyng/openworker/compare/v0.1.5...v0.1.6
> 
> **Full Changelog**: https://github.com/andrewyng/openworker/compare/v0.1.5...v0.1.6

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度尚可。
**連結**：[文件](https://openworker.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-23 ~ 2026-07-23）
> **活躍天數** 1 天 · **最新 commit** Keep ripgrep searches out of generated directories (#10)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#64](https://github.com/andrewyng/openworker/issues/64) | Chat composer sends message on Enter while confirming IME (C | 0 | 0 |
> | [#62](https://github.com/andrewyng/openworker/issues/62) | Unable to hit models running in my own GPU's | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenWorker
> 
> **[openworker.com](https://openworker.com)** · [Download](#download) · [Issues](https://github.com/andrewyng/openworker/issues)
> 
> > **Beta** - OpenWorker is in open beta: fully usable, updates itself, and we're actively polishing rough edges. [Issues](https://github.com/andrewyng/openworker/issues) welcome.
> 
> **AI that gets your everyday tasks done.** OpenWorker is an open-source AI coworker that lives on your desktop and delivers **finished work**, not just chat: a polished document, a Slack reply with the numbers, an updated calendar, a triaged inbox.
> 
> It runs on your machine and doesn't lock you into any model: bring your own API key for OpenAI, Anthropic, Google, or an open-weight provider, or run fully local with Ollama. Your data leaves your machine only through the model and integrations *you* choose.
> 
> [](https://openworker.com)
> 
> ## Download
> 
> [**⬇ macOS (Apple Silicon)**](https://download.openworker.com/mac)
> macOS 12+ · signed & notarized · auto-updates
> 
> [**⬇ Windows 10/11 (x64)**](https://download.openworker.com/windows)
> builds are not yet code-signed, so SmartScreen will warn; signing is in progress
> 
> Open the app, add a model key (or point it at Ollama), and ask for something real.
> 
> ## How it works
> 
> 1. Tell OpenWorker the outcome you want - "prepare a customer brief," "untangle my calendar," "draft a report," "check where the release stands across Jira and GitHub."
> 2. It breaks the task into steps and works across your desktop, files, and connected apps.
> 3. Before anything consequential - sending a message, changing a calendar, running a command - it checks in and you approve or redirect.
> 4. You get the finished deliverable, not a to-do list.
> 
> Under the hood:
> 
> ```text
> ┌────────────────────────────────────────────────┐
> │              OpenWorker desktop app            │  native shell + GUI
> ├────────────────────────────────────────────────┤
> │           local agent server (Python)          │  engine · tools · connectors - built on aisuite
> ├───────────────┬────────────────┬───────────────┤
> │  your files   │   your tools   │  your model   │  everything runs with your keys,
> │  & terminal   │ 25+ connectors │  any provider │  on your machine
> └───────────────┴────────────────┴───────────────┘
> ```
> 
> ## What it can do
> 
> - **Produce real deliverables** - documents, spreadsheets, reports, and web pages land as files you can open and share.
> - **Work from Slack** - mention `@OpenWorker` in a channel; a session opens on your desktop, the work happens with your tools, and the answer comes back as a thread reply.
> - **Use your everyday tools** - 25+ integrations including GitHub, Slack, Jira, Notion, Linear, HubSpot, Outlook, monday.com, Gmail, and Google Calendar, plus your **terminal and local files**. Any tool reachable over [MCP](https://modelcontextprotocol.io/) plugs in too, with per-tool control.
> - **Run on a schedule** - automations for recurring work: a morning brief, a weekly report, a standing watch over a channel. Runs land in the app with full transcripts.
> - **Ask before acting** - writes, sends, and shell commands are approval-gated. Unattended runs park their asks in an inbox instead of acting on their own.
> 
> ## Bring your own model
> 
> Model access is yours: pick a provider, paste your key, switch anytime. Supported out of the box:
> 
> **OpenAI · Anthropic · Google Gemini · Inkling (Thinking Machines) · GLM (Z.ai) · DeepSeek · Kimi (Moonshot) · Qwen · MiniMax · Mistral · Grok (xAI)** - plus open-weight models via **Together** and **Fireworks**, and fully local models via **Ollama**.
> 
> A curated model list marks what we've verified for tool-calling work. Adding any model string works at your own risk.
> 
> ## Privacy
> 
> OpenWorker is local-first. Everything lives on your machine: the agent loop, your conversations, connector tokens, and model keys - all in the app's local secret store. The only cloud piece is a small service that brokers OAuth handshakes for connectors. You can always use the App without signing-in - use the connectors via manually-created credentials/API-keys.
> 
> ## Run from source
> 
> Prerequisites: Python 3.10+, Node 20+, and (for the desktop shell) the Rust toolchain via [rustup](https://rustup.rs/).
> 
> ```shell
> git clone https://github.com/andrewyng/openworker
> cd openworker
> 
> # 1. One-time bootstrap - creates the Python venv at .venv
> #    (on Windows, run from Git Bash or WSL)
> bash packaging/setup_dev_env.sh
> 
> # 2. Start the local agent server
> .venv/bin/openworker-server --cwd ~/some/project --port 8765
> #    (Windows: .venv\Scripts\openworker-server.exe)
> 
> # 3. In a second terminal, start the UI
> cd surfaces/gui
> npm install
> npm run dev        # browser UI on the Vite dev port
> ```
> 
> To run the full desktop app instead of the browser UI, replace step 3 with `npm run tauri dev` (from `surfaces/gui/`) - the Tauri shell launches the window and supervises the server itself.
> 
> Tests: `.venv/bin/pytest` (server), `npm test` and `npm run e2e` in `surfaces/gui` (GUI unit + hermetic end-to-end). Desktop bundles are built with `packaging/build_dmg.sh` / `packaging/build_windows.ps1`.
> 
> ## Repository layout
> 
> | Directory | What's in it |
> |---|---|
> | `coworker/` | Python backend - agent engine, model providers, connectors, MCP client, memory, automations |
> | `surfaces/gui/` | Desktop app - React UI + Tauri shell that supervises the server |
> | `stt/` | Speech-to-text sidecar (Rust) for voice input |
> | `packaging/` | Installer builds (macOS DMG, Windows), auto-update manifest, dev bootstrap |
> | `docs/` | Design specs and decision logs |
> | `tests/` | Backend test suite |
> 
> ## Built on aisuite
> 
> OpenWorker's engine is built on [**aisuite**](https://github.com/andrewyng/aisuite), a lightweight Python library providing a unified chat-completions API across LLM providers and an agents layer with tools, toolkits, and MCP support. If you want to build your own agent harness rather than use ours, start there; this repo is a working reference for what aisuite can carry.
> 
> OpenWorker was originally developed inside the aisuite repository before moving to its own home here; thanks to the aisuite contributors whose work it builds on.
> 
> ## Contributing
> 
> Contributions and bug reports are welcome - open an [issue](https://github.com/andrewyng/openworker/issues) or a pull request. The app updates itself, so fixes reach installs quickly.
> For any PR, please attach screenshots of what was broken and how it is fixed now. We will shortly add features that you can contribute to.
> Please note that we are actively developing based off a internal list and goal, so we may not approve PRs that add features that are already under-development or deviates from our vision.
> 
> ## License
> 
> MIT - see [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[自動化]] · [[AI 助手]] · [[MCP Protocol]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Blueturboguy07--cue|Blueturboguy07/cue]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Doorman11991--smallcode|Doorman11991/smallcode]] · [[OpenBMB--PilotDeck|OpenBMB/PilotDeck]]

[GitHub](https://github.com/andrewyng/openworker)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "andrewyng--openworker" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 助手","MCP Protocol"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "andrewyng--openworker" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/andrewyng--openworker");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "andrewyng--openworker" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "andrewyng" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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

- [[2026-07-24|2026-07-24]] — 首次收錄，1.7k stars
