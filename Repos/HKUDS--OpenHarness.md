---
repo: HKUDS/OpenHarness
url: https://github.com/HKUDS/OpenHarness
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenHarness: Open Agent Harness with a Built-in Personal Agent--Ohmo!\""
homepage: ""
stars: 10346
stars_per_day: 609
forks: 1755
open_issues: 18
created: 2026-04-01
pushed_at: 2026-04-18
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.1.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供一個開放的代理架構，讓個人 AI 助手 Ohmo 能夠在多個平台上運作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 78
repo_size_kb: 10801
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7142,2026-04-08:7164,2026-04-09:7764,2026-04-10:8224,2026-04-11:8613,2026-04-12:8807,2026-04-13:9045,2026-04-14:9341,2026-04-15:9616,2026-04-16:9857,2026-04-17:10038,2026-04-18:10213,2026-04-19:10346"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "OpenHarness"
  - "HKUDS/OpenHarness"
  - "提供一個開放的代理架構，讓個人 AI 助手 Ohmo 能夠在多個平台上運作。"
---

# OpenHarness

**10.3k** stars · **609** stars/天 · 建立 17 天前 · Python · MIT

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

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 提供一個開放的代理架構，讓個人 AI 助手 Ohmo 能夠在多個平台上運作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (609 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在多平台上運行個人 AI 助手但不想處理繁瑣 API 配置的開發者。
> **一句話重點** OpenHarness 的設計不僅提供了強大的功能，還讓用戶能夠輕鬆擴展和自定義代理行為，這對於追求靈活性的開發者來說是個重要優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "HKUDS--OpenHarness" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的 AI 助手功能，值得考慮。

> [!abstract] 核心創新
> OpenHarness 提供了一個開放的代理架構，讓用戶能夠輕鬆整合多種 AI 服務，並支持長時間的上下文記憶。

## 專案簡介

OpenHarness 是一個開源的代理架構，旨在為用戶提供一個靈活的 AI 助手環境，特別是個人助手 Ohmo。用戶可以透過 CLI 指令 `oh` 啟動 OpenHarness，並整合多種 AI 服務，如 Claude 和 OpenAI，無需額外的 API 金鑰。這個架構支持多種工具的並行執行、API 重試、上下文記憶及多代理協調等功能，讓用戶能夠進行長時間的互動而不會丟失上下文。技術上，OpenHarness 使用 Python 和 TypeScript，並依賴多個庫如 `anthropic` 和 `openai`，以確保其功能的強大和靈活性。這個工具的賣點在於其可擴展性，允許用戶根據需求自定義代理的行為和能力。

與其他類似工具相比，如 AgentSeal 和 OpenClaw，OpenHarness 提供了更高的自定義能力和多平台支持，適合需要長時間運作的 AI 助手的用戶。使用者可以在多個平台（如 Slack、Telegram 和 Discord）上與 Ohmo 互動，並且可以在非互動模式下使用管道和腳本進行自動化操作。這個工具的設計考量了用戶的便利性和擴展性，並且在社群中有活躍的貢獻者，顯示出其健康的發展潛力。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，尤其是那些希望在現有的 AI 生態系統中進行實驗和擴展的用戶。

**技術棧**：`Python 3.10` · `TypeScript` · `Docker`

## 重點功能

- 多代理協調 — 支持同時運行多個代理，並能夠進行任務分配和管理。
- 上下文記憶 — 自動保存上下文，支持長時間的會話而不丟失信息。
- API 重試與成本追蹤 — 內建的 API 重試機制，並能夠追蹤使用成本。
- 多種工具支持 — 提供 43 種工具（如文件、Shell、搜索等）供用戶使用。
- 即時通訊集成 — 支持在 Slack、Telegram、Discord 等平台上與 Ohmo 互動。

## 快速開始

1. 安裝 OpenHarness
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
```
2. 啟動 OpenHarness
```bash
oh
```
3. 設置 Ohmo 個人代理
```bash
ohmo init
```

## 程式碼範例

```python
{
  "前置條件": "安裝 OpenHarness 並啟動",
  "指令": "ohmo init",
  "預期輸出": "初始化 ~/.ohmo 工作區"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天內累積 10346 stars（609/天），forks 1755（17.0%），顯示出強勁的增長潛力。作者團隊由多位活躍的開源貢獻者組成，過去在 AI 和開源社區中有豐富的經驗。這個專案解決了用戶在使用多種 AI 服務時的整合問題，提供了一個統一的接口來管理和使用不同的 AI 模型。近期的推廣活動和社群討論也可能促進了其曝光率。技術上，OpenHarness 利用 Python 和 TypeScript 的組合，使其在開發和擴展上具備良好的靈活性，這對於開發者來說是一個重要的吸引力。forks/stars 比率為 17.0%，顯示出許多人在實際修改和使用此工具，這是一個健康的信號。

## 適合誰使用

**目標受眾**：希望在多平台上運行個人 AI 助手但不想處理繁瑣 API 配置的開發者。

> [!example] 使用場景
> - 後端工程師用它來整合多個 AI 服務，因為可以透過一個統一的命令 `oh` 來管理不同的模型和工具。
> - 產品經理用它來快速生成和測試產品文檔，因為 Ohmo 能夠在 Slack 中自動撰寫和開啟 PR，節省了大量時間。
> - 開發者用它來在 CI/CD 流程中自動化代碼檢查和修復，因為可以使用 `oh -p` 指令來快速執行代碼分析並獲得即時反饋。

## 架構分析

OpenHarness 採用模組化架構，將代理功能分為多個可擴展的模組。這樣的設計使得用戶可以根據需求選擇和整合不同的工具和 API。資料流方面，使用者透過 CLI 指令與代理互動，代理則通過 API 調用來執行任務。這種設計的優勢在於靈活性和可擴展性，但代價是需要用戶具備一定的技術背景來進行配置和擴展。擴展性方面，OpenHarness 可以輕鬆整合新的工具和 API，但在大型專案中可能會面臨管理複雜度的挑戰。

## 技術深入分析

OpenHarness 的核心技術機制是其模組化的代理架構，這使得用戶可以根據需求選擇不同的工具和 API。它使用 Python 和 TypeScript 作為主要開發語言，並依賴多個庫來實現其功能，如 `anthropic` 和 `openai`。效能方面，OpenHarness 能夠處理多個並行請求，並且支持上下文記憶，這對於長時間的會話非常重要。設計上，選擇 Python 作為主要語言是因為其生態系統豐富，適合快速開發和迭代，但這也可能導致性能瓶頸，特別是在高並發的情況下。技術風險方面，隨著用戶數量的增加，可能會面臨 API 限制和性能下降的問題。整合方面，OpenHarness 與主流的 CI/CD 工具相容性良好，但對於新手來說，學習曲線可能較陡峭。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但對於新手來說，可能需要一些時間來熟悉 CLI 指令。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 靈活的代理架構，支持多種 AI 服務的整合。
> - 強大的上下文記憶功能，適合長時間的互動。
> - 活躍的社群和貢獻者，持續更新和改進。

> [!danger] 缺點
> - 仍在 alpha 階段，可能存在不穩定性。
> - 對於新手來說，安裝和配置過程可能有些複雜。
> - 在 Windows 環境下的支持尚不完善。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 在 Windows 環境下可能需要額外的配置
> - 目前仍在 alpha 階段，API 可能會有變動

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供類似的代理功能，但專注於安全性和隱私保護，而 OpenHarness 更加靈活且易於擴展。 |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 專注於醫療技能的開發，而 OpenHarness 提供更廣泛的工具和多平台支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個簡化的代理架構，專注於特定的任務，而 OpenHarness 則提供更廣泛的功能和擴展性。 | 如果你的需求僅限於特定任務，Boneyard 可能會更簡單易用。 | low，因為 Boneyard 的設置較為簡單，且功能較少。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供了更強的安全性和隱私保護，而 OpenHarness 更加靈活且易於擴展。 | 如果你的應用需要更高的安全性，AgentSeal 會是更好的選擇。 | medium，因為需要重新配置安全設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenHarness** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供了一個簡化的代理架構，專注於特定的任務，而 OpenHarness 則提供更廣泛的功能和擴展性。 | AgentSeal 提供了更強的安全性和隱私保護，而 OpenHarness 更加靈活且易於擴展。 |
> | 遷移成本 | - | low，因為 Boneyard 的設置較為簡單，且功能較少。 | medium，因為需要重新配置安全設置。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於特定任務，Boneyard 可能會更簡單易 | 如果你的應用需要更高的安全性，AgentSeal 會是更好的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和開發，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下安裝時可能會遇到權限問題
  - 解法：確保以管理員身份運行 PowerShell
- [MEDIUM] 某些 API 可能會因為流量限制而無法正常使用
  - 解法：考慮使用本地模型或減少請求頻率

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 助手開發 | 非常適合 | 提供靈活的架構和多平台支持，適合快速迭代和實驗。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 個人開發者的 AI 工具整合 | 適合 | 簡單的安裝和多種工具支持，適合快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的 AI 助手功能，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：工具本身不需要高權限，但需要存取 API 金鑰和敏感資料，建議在安全的環境中使用。

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
| Forks | 1.8k |
| Open Issues | 18 |
| Issue 解決率 | 78% (65 closed) |
| 最後推送 | 2026-04-18 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 10.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/OpenHarness) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "TypeScript" : 5
>     "Shell" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 180 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 32 |
> | [@glitch-ux](https://github.com/glitch-ux) | 10 |
> | [@siaochuan](https://github.com/siaochuan) | 9 |
> | [@yl-jiang](https://github.com/yl-jiang) | 8 |

**最新版本**：v0.1.7 — v0.1.7 — TUI Polish & Safer Install (2026-04-18)

> [!info]- Release Notes
> Highlights for 0.1.7
> 
> - Safer install flow: `scripts/install.sh` now links `oh`, `ohmo`, and `openharness` into `~/.local/bin` instead of prepending the virtualenv `bin` directory to `PATH`, which avoids clobbering Conda-managed shells.
> - Better React TUI input: `Shift+Enter` now inserts a newline while plain `Enter` still submits.
> - Quieter busy-state animation: the extra pseudo-animation line was removed, and Windows terminals now use conservative ASCII spinner frames to reduce flashing.
> - PyPI package published: `openharness-ai==0.1.7`.
> 
> 
> ## What's Changed
> * feat(tui): pair tool-call and tool-result rows for cleaner transcript by @yl-jiang in https://github.com/HKUDS/OpenHarness/pull/111
> * fix(auth): cache keyring probe and rename misleading encrypt/decrypt by @glitch-ux in https://github.com/HKUDS/OpenHarness/pull/106
> * feat(providers): add built-in Google Gemini provider profile by @glitch-ux in https://github.com/HKUDS/OpenHarness/pull/105
> * fix: regenerate system prompt on checkpoint restore by @JiangweiYe76 in https://github.com/HKUDS/OpenHarness/pull/104
> * fix(tui): keep busy spinner active throughout agent turn by @yl-jiang in https://github.com/HKUDS/OpenHarness/pull/116
> * fix(config): strip ANSI escape sequences from model names by @jiakeboge in https://github.com/HKUDS/OpenHarness/pull/114
> * fix(ui): show effective runtime model in header by @siaochuan in https://github.com/HKUDS/OpenHarness/pull/95
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/HKUDS/OpenHarness/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-16 ~ 2026-04-18）
> **活躍天數** 3 天 · **最新 commit** release: publish 0.1.7

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/HKUDS/OpenHarness/issues/40) | 是否会支持ACP协议？ `enhancement` | 1 | 0 |
> | [#18](https://github.com/HKUDS/OpenHarness/issues/18) | [Discussion] Run-level evidence layer: structured archive fo | 1 | 1 |
> | [#160](https://github.com/HKUDS/OpenHarness/issues/160) | how to delete openharness in my mac | 0 | 1 |
> | [#102](https://github.com/HKUDS/OpenHarness/issues/102) | 建立 OpenClaw 内部后台任务数据模型 | 0 | 0 |

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
> #### Linux / macOS / WSL
> 
> ```bash
> 
> # One-click install
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
> 
> 
> # One-click install (PowerShell)
> iex (Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.ps1')
> 
> 
> # On Windows PowerShell, use: openh setup
> ```
> 
> Supports **Claude / OpenAI / Copilot / Codex / Moonshot(Kimi) / GLM / MiniMax** and any compatible endpoint.
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
> | **Google Gemini** | `https://generativelanguage.googleapis.com/v1beta/openai` | `gemini-2.5-flash`, `gemini-2.5-pro` |
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
> - **2026-04-18** ⚙️ **v0.1.7** — Packaging & TUI polish:
>   - Install script now links `oh`, `ohmo`, and `openharness` into `~/.local/bin` instead of prepending the virtualenv `bin` directory to `PATH`, which avoids clobbering Conda-managed shells.
>   - React TUI now supports `Shift+Enter` to insert a newline while keeping plain `Enter` as submit.
>   - Busy-state animation in the React TUI is quieter and less error-prone on Windows terminals, with conservative spinner frames and reduced flashing.
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
> #### Windows (Native)
> 
> ```powershell
> 
> # Or via pip
> pip install openharness-ai
> ```
> 
> **Note**: Windows support is now native. In PowerShell, use `openh` instead of `oh` because `oh` can resolve to the built-in `Out-Host` alias.
> 
> 
> ### 3. Run
> 
> ```bash
> oh
> 
> # On Windows PowerShell, 

## 延伸閱讀

相關概念：[[Agent 框架]] · [[CLI/TUI]] · [[多模態]]

相關專案：[[AgentSeal--codeburn|AgentSeal/codeburn]] · [[0xGF--boneyard|0xGF/boneyard]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/HKUDS/OpenHarness)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "HKUDS--OpenHarness"
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
> const concepts = ["Agent 框架","CLI/TUI","多模態"];
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
