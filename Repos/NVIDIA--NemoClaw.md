---
repo: NVIDIA/NemoClaw
url: https://github.com/NVIDIA/NemoClaw
owner: NVIDIA
owner_type: Organization
language: JavaScript
license: Apache-2.0
description: "NVIDIA plugin for secure installation of OpenClaw"
homepage: "https://docs.nvidia.com/nemoclaw/latest/"
stars: 8511
stars_per_day: 2837
forks: 879
open_issues: 230
created: 2026-03-15
pushed_at: 2026-03-19
first_seen: 2026-03-18
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-18
use_case: "提供安全的 OpenClaw 安裝解決方案，簡化運行 NVIDIA 的 OpenClaw 助手。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 974
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-18"
star_history: "2026-03-18:4282,2026-03-18:4313,2026-03-19:8457,2026-03-19:8511"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "NemoClaw"
  - "NVIDIA/NemoClaw"
  - "提供安全的 OpenClaw 安裝解決方案，簡化運行 NVIDIA 的 OpenClaw 助手。"
---

# NemoClaw

**8.5k** stars · **2.8k** stars/天 · 建立 3 天前 · JavaScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/NVIDIA--NemoClaw");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供安全的 OpenClaw 安裝解決方案，簡化運行 NVIDIA 的 OpenClaw 助手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.8k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在安全環境中運行 AI 助手的開發者和工程師。
> **一句話重點** NemoClaw 讓開發者能夠在安全的環境中運行 AI 助手，這在當前的開發環境中是相對缺乏的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NVIDIA--NemoClaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "NVIDIA--NemoClaw" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到安全的 AI 助手運行環境，值得。

> [!abstract] 核心創新
> NemoClaw 提供了一個安全的沙盒環境來運行 OpenClaw 助手，並且所有的網路請求和文件存取都受到嚴格的政策控制。

## 專案簡介

NemoClaw 是一個開源工具，旨在簡化在 NVIDIA OpenShell 環境中運行 OpenClaw 助手的過程。使用者可以透過 `curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash` 指令快速安裝，並在安裝後使用 `nemoclaw my-assistant connect` 來連接到沙盒環境進行互動。這個工具的核心賣點在於它提供了一個安全的沙盒環境，所有網路請求和文件存取都受到嚴格的政策控制，確保運行過程中的安全性。NemoClaw 使用 TypeScript 作為主要的 CLI 工具，並依賴於 NVIDIA 的 OpenShell 來管理沙盒的創建和政策執行。這種設計使得用戶能夠在一個受控的環境中運行 AI 助手，並且可以隨時檢查沙盒的狀態和日誌。相較於其他工具，NemoClaw 專注於提供一個安全的執行環境，而不是僅僅提供功能性，這使得它在需要高安全性的應用場景中更具優勢。使用者需要注意的是，這個專案目前仍處於 Alpha 階段，可能會有不穩定的情況，並且需要一定的硬體要求，如至少 8GB 的 RAM 和 20GB 的磁碟空間。

**技術棧**：`Node.js >=20.0.0` · `TypeScript` · `Docker`

## 重點功能

- 安全沙盒環境 — 所有網路請求和文件存取受到嚴格控制，確保運行安全。
- CLI 工具 — 使用 TypeScript 實現的命令行介面，提供簡單的指令來管理沙盒。
- 即時監控 — 使用 `nemoclaw status` 指令檢查沙盒狀態和日誌。
- 自動化安裝 — 使用者可以透過一行指令快速安裝和配置環境。
- 版本控制 — 使用版本化的藍圖來管理沙盒的創建和政策應用。

## 快速開始

1. 下載並運行安裝腳本
```bash
$ curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
```
2. 連接到沙盒環境
```bash
$ nemoclaw my-assistant connect
```
3. 檢查沙盒狀態
```bash
$ nemoclaw my-assistant status
```

## 程式碼範例

```js
{
  "前置條件": "已安裝並配置好 NemoClaw 和 OpenClaw。",
  "指令": "$ nemoclaw my-assistant connect",
  "預期輸出": "連接到沙盒環境，開始與助手互動。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 8511 stars（2837/天），forks 879（10.3%），顯示出強烈的社群興趣。這個專案的主要貢獻者來自 NVIDIA，過去在 AI 和機器學習領域有豐富的經驗。NemoClaw 解決了在安全環境中運行 AI 助手的需求，這在當前的開發環境中是相對缺乏的。隨著對於 AI 安全性的重視增加，這個工具的需求也隨之上升。社群的反饋和問題討論也顯示出用戶對於功能和穩定性的期待，這進一步推動了專案的關注度。

## 適合誰使用

**目標受眾**：需要在安全環境中運行 AI 助手的開發者和工程師。

> [!example] 使用場景
> - AI 開發者用它來在安全的環境中運行 OpenClaw 助手，因為這樣可以避免未經授權的網路請求和文件存取。
> - DevOps 工程師用它來快速部署和管理 AI 助手的沙盒環境，因為它提供了簡單的 CLI 指令來監控和管理服務。
> - 資料科學家用它來測試不同的 AI 模型，因為它的沙盒環境可以確保模型的安全性和穩定性。

## 架構分析

NemoClaw 的架構基於一個安全的沙盒環境，使用 NVIDIA OpenShell 作為基礎。它的設計目的是為了提供一個受控的執行環境，所有的網路請求和文件存取都受到嚴格的政策控制。這樣的設計使得用戶能夠在一個安全的環境中運行 AI 助手，並且可以隨時檢查沙盒的狀態和日誌。

NemoClaw 的 CLI 工具負責協調整個堆棧，包括 OpenShell 閘道、沙盒、推理提供者和網路政策。這種設計的代價是需要一定的硬體資源，特別是 RAM 和磁碟空間，並且在 Alpha 階段可能會有不穩定的情況。擴展性方面，隨著用戶需求的增加，可能需要進一步優化資源管理和性能。

## 技術深入分析

NemoClaw 的核心技術機制是基於 NVIDIA OpenShell 的沙盒環境，所有的網路請求和文件存取都受到嚴格的政策控制。這樣的設計使得用戶能夠在一個安全的環境中運行 AI 助手，並且可以隨時檢查沙盒的狀態和日誌。效能方面，NemoClaw 需要至少 8GB 的 RAM 和 20GB 的磁碟空間，這在資源有限的環境中可能會造成挑戰。設計上選擇 Node.js 和 TypeScript 作為開發語言，這使得 CLI 工具能夠快速響應用戶的請求，但也增加了對 Node.js 環境的依賴。技術風險方面，由於目前仍在 Alpha 階段，未來可能會有不穩定的情況出現，特別是在擴展性和性能方面。整合方面，NemoClaw 與 NVIDIA 的其他工具（如 OpenShell）有良好的相容性，但對於其他開發環境的支持仍需進一步開發。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要注意硬體要求。整體上，對於新手來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供安全的沙盒環境，適合運行敏感的 AI 應用。
> - 簡單的 CLI 指令，易於使用和管理。
> - 自動化安裝過程，減少了配置的複雜性。

> [!danger] 缺點
> - 目前仍處於 Alpha 階段，功能和接口可能會變動。
> - 僅支援 Linux 環境，對於其他平台的支援有限。
> - 需要較高的硬體要求，對於資源有限的環境不友好。

> [!warning] 注意事項
> - 目前僅支援 Linux 環境，其他平台的支援仍在開發中。
> - 需要至少 8GB 的 RAM，否則可能會觸發 OOM killer。
> - Alpha 階段，功能和接口可能會變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，功能範圍較窄，但針對性強。 |
| [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell 是 NemoClaw 的基礎，提供沙盒環境，但不具備 NemoClaw 的自動化安裝功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步的工具，與 NemoClaw 的安全沙盒環境概念不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，功能範圍較窄，但針對性強。 | 如果你的應用場景是醫療領域，這個工具可能更適合。 | low，因為功能上有相似之處。 |
| [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | OpenShell 是 NemoClaw 的基礎，提供沙盒環境，但不具備 NemoClaw 的自動化安裝功能。 | 如果你需要更靈活的沙盒管理，OpenShell 可能更適合。 | medium，因為需要手動配置環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **NemoClaw** | **OpenClaw-Medical-Skills** | **OpenShell** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的 OpenClaw 應用，功能範圍較窄，但針對性強。 | OpenShell 是 NemoClaw 的基礎，提供沙盒環境，但不具備 NemoClaw 的自動化安裝功能。 |
> | 遷移成本 | - | low，因為功能上有相似之處。 | medium，因為需要手動配置環境。 |
> | 適用場景 | 主要場景 | 如果你的應用場景是醫療領域，這個工具可能更適合。 | 如果你需要更靈活的沙盒管理，OpenShell 可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 Docker 找不到的問題
  - 解法：確保 Docker 已安裝並運行，必要時手動啟動 Docker。
- [MEDIUM] 在低於 8GB RAM 的機器上可能會觸發 OOM killer
  - 解法：配置至少 8GB 的 swap 空間以避免性能問題。
- [MEDIUM] 某些 CLI 指令可能在不同平台上表現不一致
  - 解法：參考官方文檔，並在社群中尋求幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 助手 | 非常適合 | 提供安全的沙盒環境，適合運行敏感的 AI 應用。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 Alpha 階段，穩定性不足。 |
| 個人開發者測試 AI 模型 | 適合 | 簡單的 CLI 指令和自動化安裝過程，易於上手。 |
| 需要高性能計算的應用 | 普通 | 需要較高的硬體要求，對於資源有限的環境不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到安全的 AI 助手運行環境，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：NemoClaw 本身不需要高權限，主要依賴於 Docker 和 OpenShell 的安全性。它不會存取敏感資料，但需要注意依賴鏈的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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
| Forks | 879 |
| Open Issues | 230 |
| Issue 解決率 | 13% (35 closed) |
| 最後推送 | 2026-03-19 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://docs.nvidia.com/nemoclaw/latest/) |
| Repo 大小 | 974 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NVIDIA/NemoClaw) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `openclaw`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 39
>     "TypeScript" : 29
>     "Shell" : 28
>     "Python" : 4
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ericksoa](https://github.com/ericksoa) | 131 |
> | [@miyoungc](https://github.com/miyoungc) | 45 |
> | [@jacobtomlinson](https://github.com/jacobtomlinson) | 25 |
> | [@vincentkoc](https://github.com/vincentkoc) | 6 |
> | [@lbliii](https://github.com/lbliii) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題和討論，回應速度尚可。
**連結**：[文件](https://docs.nvidia.com/nemoclaw/latest/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-19）
> **活躍天數** 2 天 · **最新 commit** Create feature_request.yml (#372)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#65](https://github.com/NVIDIA/NemoClaw/issues/65) | Support for jetson nano `Platform: AGX Thor/Orin` | 7 | 1 |
> | [#50](https://github.com/NVIDIA/NemoClaw/issues/50) | Fedora - Docker - Onboarding cannot find Docker `Docker` | 4 | 5 |
> | [#231](https://github.com/NVIDIA/NemoClaw/issues/231) | Need an offcial docker image set. `enhancement` `Docker` | 3 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NVIDIA NemoClaw: OpenClaw Plugin for OpenShell
> 
> [](https://github.com/NVIDIA/NemoClaw/blob/main/LICENSE)
> [](https://github.com/NVIDIA/NemoClaw/blob/main/SECURITY.md)
> [](https://github.com/NVIDIA/NemoClaw/blob/main/docs/about/release-notes.md)
> 
> NVIDIA NemoClaw is an open source stack that simplifies running [OpenClaw](https://openclaw.ai) always-on assistants safely. It installs the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) runtime, part of [NVIDIA Agent Toolkit](https://docs.nvidia.com/nemo/agent-toolkit/latest), a secure environment for running autonomous agents, with inference routed through [NVIDIA cloud](https://build.nvidia.com).
> 
> > **Alpha software**
> > 
> > NemoClaw is early-stage. Expect rough edges. We are building toward production-ready sandbox orchestration, but the starting point is getting your own environment up and running.
> > Interfaces, APIs, and behavior may change without notice as we iterate on the design.
> > The project is shared to gather feedback and enable early experimentation, but it
> > should not yet be considered production-ready.
> > We welcome issues and discussion from the community while the project evolves.
> 
> ---
> 
> 
> ## Quick Start
> 
> Follow these steps to get started with NemoClaw and your first sandboxed OpenClaw agent.
> 
> > [!NOTE]
> > NemoClaw currently requires a fresh installation of OpenClaw.
> 
> 
> ### Prerequisites
> 
> Check the prerequisites before you start to ensure you have the necessary software and hardware to run NemoClaw.
> 
> #### Hardware
> 
> | Resource | Minimum        | Recommended      |
> |----------|----------------|------------------|
> | CPU      | 4 vCPU         | 4+ vCPU          |
> | RAM      | 8 GB           | 16 GB            |
> | Disk     | 20 GB free     | 40 GB free       |
> 
> The sandbox image is approximately 2.4 GB compressed. During image push, the Docker daemon, k3s, and the OpenShell gateway run alongside the export pipeline, which buffers decompressed layers in memory. On machines with less than 8 GB of RAM, this combined usage can trigger the OOM killer. If you cannot add memory, configuring at least 8 GB of swap can work around the issue at the cost of slower performance.
> 
> #### Software
> 
> | Dependency | Version                          |
> |------------|----------------------------------|
> | Linux      | Ubuntu 22.04 LTS or later |
> | Node.js    | 20 or later |
> | npm        | 10 or later |
> | Container runtime | Supported runtime installed and running |
> | [OpenShell](https://github.com/NVIDIA/OpenShell) | Installed |
> 
> #### Container Runtime Support
> 
> | Platform | Supported runtimes | Notes |
> |----------|--------------------|-------|
> | Linux | Docker | Primary supported path today |
> | macOS (Apple Silicon) | Colima, Docker Desktop | Recommended runtimes for supported macOS setups |
> | macOS | Podman | Not supported yet. NemoClaw currently depends on OpenShell support for Podman on macOS. |
> | Windows WSL | Docker Desktop (WSL backend) | Supported target path |
> 
> 
> ### Install NemoClaw and Onboard OpenClaw Agent
> 
> Download and run the installer script.
> The script installs Node.js if it is not already present, then runs the guided onboard wizard to create a sandbox, configure inference, and apply security policies.
> 
> ```console
> $ curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
> ```
> 
> If you use nvm or fnm to manage Node.js, the installer may not update your current shell's PATH.
> If `nemoclaw` is not found after install, run `source ~/.bashrc` (or `source ~/.zshrc` for zsh) or open a new terminal.
> 
> When the install completes, a summary confirms the running environment:
> 
> ```
> ──────────────────────────────────────────────────
> Sandbox      my-assistant (Landlock + seccomp + netns)
> Model        nvidia/nemotron-3-super-120b-a12b (NVIDIA Cloud API)
> ──────────────────────────────────────────────────
> Run:         nemoclaw my-assistant connect
> Status:      nemoclaw my-assistant status
> Logs:        nemoclaw my-assistant logs --follow
> ──────────────────────────────────────────────────
> 
> [INFO]  === Installation complete ===
> ```
> 
> 
> ### Chat with the Agent
> 
> Connect to the sandbox, then chat with the agent through the TUI or the CLI.
> 
> ```console
> $ nemoclaw my-assistant connect
> ```
> 
> #### OpenClaw TUI
> 
> The OpenClaw TUI opens an interactive chat interface. Type a message and press Enter to send it to the agent:
> 
> ```console
> sandbox@my-assistant:~$ openclaw tui
> ```
> 
> Send a test message to the agent and verify you receive a response.
> 
> > [!NOTE]
> > The TUI is best for interactive back-and-forth. If you need the full text of a long response (for example, large code generation output), use the CLI instead:
> >
> > ```console
> > sandbox@my-assistant:~$ openclaw agent --agent main --local -m "" --session-id 
> > ```
> >
> > This prints the complete response directly in the terminal and avoids relying on the TUI view for long output.
> 
> #### OpenClaw CLI
> 
> Use the OpenClaw CLI to send a single message and print the response:
> 
> ```console
> sandbox@my-assistant:~$ openclaw agent --agent main --local -m "hello" --session-id test
> ```
> 
> ---
> 
> 
> ## How It Works
> 
> NemoClaw installs the NVIDIA OpenShell runtime and Nemotron models, then uses a versioned blueprint to create a sandboxed environment where every network request, file access, and inference call is governed by declarative policy. The `nemoclaw` CLI orchestrates the full stack: OpenShell gateway, sandbox, inference provider, and network policy.
> 
> | Component        | Role                                                                                      |
> |------------------|-------------------------------------------------------------------------------------------|
> | **Plugin**       | TypeScript CLI commands for launch, connect, status, and logs.                            |
> | **Blueprint**    | Versioned Python artifact that orchestrates sandbox creation, policy, and inference setup. |
> | **Sandbox**      | Isolated OpenShell container running OpenClaw with policy-enforced egress and filesystem.  |
> | **Inference**    | NVIDIA cloud model calls, routed through the OpenShell gateway, transparent to the agent.  |
> 
> The blueprint lifecycle follows four stages: resolve the artifact, verify its digest, plan the resources, and apply through the OpenShell CLI.
> 
> When something goes wrong, errors may originate from either NemoClaw or the OpenShell layer underneath. Run `nemoclaw  status` for NemoClaw-level health and `openshell sandbox list` to check the underlying sandbox state.
> 
> ---
> 
> 
> ## Inference
> 
> Inference requests from the agent never leave the sandbox directly. OpenShell intercepts every call and routes it to the NVIDIA cloud provider.
> 
> | Provider     | Model                               | Use Case                                       |
> |--------------|--------------------------------------|-------------------------------------------------|
> | NVIDIA cloud | `nvidia/nemotron-3-super-120b-a12b` | Production. Requires an NVIDIA API key.         |
> 
> Get an API key from [build.nvidia.com](https://build.nvidia.com). The `nemoclaw onboard` command prompts for this key during setup.
> 
> Local inference options such as Ollama and vLLM are still experimental. On macOS, they also depend on OpenShell host-routing support in addition to the local service itself being reachable on the host.
> 
> ---
> 
> 
> ## Protection Layers
> 
> The sandbox starts with a strict baseline policy that controls network egress and filesystem access:
> 
> | Layer      | What it protects                                    | When it applies             |
> |------------|-----------------------------------------------------|-----------------------------|
> | Network    | Blocks unauthorized outbound connections.           | Hot-reloadable at runtime.  |
> | Filesystem | Prevents reads/writes outside `/sandbox` and `/tmp`.| Locked at sandbox creation. |
> | Process    | Blocks privilege escalation and dangerous syscalls. | Locked at sandbox creation. |
> | Inference  | Reroutes model API calls to controlled backends.    | Hot-reloadable at runtime.  |
> 
> When the agent tries 

## 延伸閱讀

相關概念：[[安全漏洞]] · [[容器化]] · [[自動化]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

[GitHub](https://github.com/NVIDIA/NemoClaw) · [官方網站](https://docs.nvidia.com/nemoclaw/latest/)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "NVIDIA--NemoClaw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "NVIDIA--NemoClaw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "NVIDIA--NemoClaw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "NVIDIA--NemoClaw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","容器化","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NVIDIA--NemoClaw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NVIDIA--NemoClaw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NVIDIA--NemoClaw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NVIDIA" AND file.name != "NVIDIA--NemoClaw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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
> const me = dv.page("Repos/NVIDIA--NemoClaw");
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

> **2026-03-18** — 首次收錄
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

- [[2026-03-19|2026-03-19]] — 再次上榜，8.5k stars
- [[2026-03-18|2026-03-18]] — 首次收錄，4.3k stars
