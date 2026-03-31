---
repo: NVIDIA/NemoClaw
url: https://github.com/NVIDIA/NemoClaw
owner: NVIDIA
owner_type: Organization
language: JavaScript
license: Apache-2.0
description: "Run OpenClaw more securely inside NVIDIA OpenShell with managed inference"
homepage: "https://docs.nvidia.com/nemoclaw/latest/"
stars: 17816
stars_per_day: 1188
forks: 2050
open_issues: 449
created: 2026-03-15
pushed_at: 2026-03-31
first_seen: 2026-03-18
week: "2026-W12"
month: "2026-03"
category: "基礎設施"
subcategory: "容器化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-18
use_case: "在 NVIDIA OpenShell 中更安全地運行 OpenClaw，提供管理推理功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 27
repo_size_kb: 6326
readme_length: 9340
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-18"
star_history: "2026-03-18:4282,2026-03-18:4313,2026-03-19:8457,2026-03-19:8511,2026-03-20:12647,2026-03-20:12676,2026-03-21:14333,2026-03-21:14336,2026-03-22:14882,2026-03-22:14885,2026-03-23:15356,2026-03-24:15935,2026-03-25:16379,2026-03-26:16764,2026-03-27:17068,2026-03-28:17313,2026-03-29:17489,2026-03-30:17645,2026-03-31:17816"
tags:
  - github
  - "category/基礎設施"
  - "lang/javascript"
  - org
aliases:
  - "NemoClaw"
  - "NVIDIA/NemoClaw"
  - "在 NVIDIA OpenShell 中更安全地運行 OpenClaw，提供管理推理功能。"
---

# NemoClaw

**17.8k** stars · **1.2k** stars/天 · 建立 15 天前 · JavaScript · Apache-2.0

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

`ORG`

> [!summary] 一句話摘要
> 在 NVIDIA OpenShell 中更安全地運行 OpenClaw，提供管理推理功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Viral (1.2k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在安全環境中運行 AI 助手的開發者和研究人員。
> **一句話重點** NemoClaw 的安全性設計使得在不安全環境中運行 AI 助手成為可能，這是其最大的價值所在。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NVIDIA--NemoClaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "容器化" && p.file.name !== "NVIDIA--NemoClaw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 容器化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、8 小時整合，得到安全的 AI 助手運行環境，值得考慮。

> [!abstract] 核心創新
> NemoClaw 提供了一個安全的沙盒環境來運行 OpenClaw，這在之前的解決方案中並不存在。

## 專案簡介

NVIDIA NemoClaw 是一個開源參考堆疊，旨在簡化在 NVIDIA OpenShell 中運行 OpenClaw 助手的過程。用戶可以通過安裝 NVIDIA OpenShell 運行時來獲得額外的安全性，這對於運行自主代理至關重要。安裝過程中，NemoClaw 提供了指導式的上線流程，並在此基礎上增加了狀態管理、消息橋接、路由推理和多層保護等功能。用戶只需執行 `curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash` 即可開始安裝，並在安裝完成後通過 `nemoclaw my-assistant connect` 來連接到沙盒環境。這個工具的賣點在於它能夠在保護層下運行 OpenClaw，從而減少潛在的安全風險。

技術上，NemoClaw 依賴於 Node.js 和 Docker，並且需要至少 8GB 的 RAM 來避免 OOM 錯誤，這使得它在資源需求上相對較高。與其他類似工具相比，如 FreedomIntelligence/OpenClaw-Medical-Skills 和 GAIR-NLP/daVinci-MagiHuman，NemoClaw 提供了更強的安全性和管理功能，特別適合需要高安全性環境的用戶。使用者可能會遇到一些安裝和配置的挑戰，特別是在資源有限的情況下。這個專案目前處於 Alpha 階段，尚未準備好進入生產環境，但對於早期實驗和反饋收集來說非常合適。對於希望在安全的環境中運行 OpenClaw 的開發者來說，NemoClaw 是一個值得考慮的選擇。

**技術棧**：`Node.js >=22.16.0` · `Docker` · `TypeScript`

## 重點功能

- 安全沙盒環境 — 提供多層保護，減少運行時的安全風險。
- 指導式上線流程 — 用戶友好的安裝和配置過程，簡化了初始設置。
- 狀態管理 — 允許用戶跟蹤和管理多個 OpenClaw 實例的狀態。
- 推理路由 — 支持靈活的推理配置，能夠根據需求進行調整。
- Docker 支持 — 兼容多種容器運行時，方便在不同環境中部署。

## 快速開始

1. 下載並運行安裝腳本
```bash
curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
```
2. 連接到沙盒環境
```bash
nemoclaw my-assistant connect
```
3. 在沙盒中啟動 OpenClaw 終端 UI
```bash
openclaw tui
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 NemoClaw 並創建了沙盒環境。",
  "指令": "openclaw agent --agent main --local -m \"hello\" --session-id test",
  "預期輸出": "返回 OpenClaw 助手的回應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 17816 stars（1188/天），forks 2050（11.5%），顯示出強烈的社群興趣。NVIDIA 作為知名的 AI 和 GPU 技術公司，提供了這個工具以解決在不安全環境中運行 AI 助手的痛點。之前的解決方案往往缺乏安全性，無法有效管理推理過程。這個專案的推出正好填補了這一空白，並且在社群中引發了廣泛的討論和反饋。由於其 Alpha 階段的特性，許多開發者希望參與早期測試以影響未來的發展方向。

## 適合誰使用

**目標受眾**：希望在安全環境中運行 AI 助手的開發者和研究人員。

> [!example] 使用場景
> - AI 開發者用它來在安全的沙盒環境中運行 OpenClaw 助手，因為這樣可以減少安全風險並簡化管理流程。
> - DevOps 工程師用它來快速部署和管理多個 OpenClaw 實例，因為它提供了強大的狀態管理和安全性。
> - 研究人員用它來測試不同的推理配置，因為它支持靈活的推理路由和配置選項。

## 架構分析

NemoClaw 的架構基於 NVIDIA OpenShell，設計目的是提供一個安全的運行環境。它使用 Docker 來管理容器，並通過 Node.js 提供 CLI 介面。每個 OpenClaw 實例在沙盒中運行，這樣可以隔離不同的實例以提高安全性。

這種設計使得用戶可以在不影響主系統的情況下運行多個實例，但也增加了資源需求。選擇 Docker 作為容器運行時的好處是其廣泛的支持和社群生態，但代價是需要額外的學習和配置。擴展性方面，NemoClaw 目前的設計在小型團隊和個人項目中表現良好，但在大規模部署時可能會遇到性能瓶頸。

## 技術深入分析

NemoClaw 的核心技術機制是基於 NVIDIA OpenShell 的安全運行時，這使得它能夠在沙盒中運行 OpenClaw 助手。它使用 Docker 來管理容器，並通過 Node.js 提供 CLI 介面。這樣的設計使得用戶可以在隔離的環境中運行多個實例，從而提高安全性。效能方面，NemoClaw 需要至少 8GB 的 RAM，這在資源有限的環境中可能會導致性能瓶頸。選擇 Node.js 作為主要語言的好處是其強大的生態系統和社群支持，但代價是可能需要額外的學習成本。技術風險方面，NemoClaw 目前處於 Alpha 階段，未來可能會有重大變更，這對於依賴其穩定性的用戶來說是一個潛在的風險。整合方面，NemoClaw 與 Docker 的整合非常友好，但在某些環境中可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但需要注意硬體要求。文件目前僅提供英文版本，對於非英語使用者可能有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 提供安全的沙盒環境，減少運行時風險。
> - 指導式的安裝流程，適合新手使用。
> - 支持靈活的推理配置，滿足不同需求。

> [!danger] 缺點
> - 目前處於 Alpha 階段，功能不穩定。
> - 需要較高的硬體要求，對於資源有限的用戶不友好。
> - 不支持某些容器運行時，限制了使用場景。

> [!warning] 注意事項
> - 目前處於 Alpha 階段，功能和接口可能會變動。
> - 需要至少 8GB 的 RAM，否則可能會遇到 OOM 錯誤。
> - 不支持在 macOS (Intel) 上使用 Podman，僅限於 Docker。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療技能的 OpenClaw 實現，缺乏 NemoClaw 的安全性和管理功能。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 提供類似的 AI 助手功能，但不具備 NemoClaw 的安全沙盒環境。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 實現，提供特定功能，但缺乏 NemoClaw 的安全性和管理功能。 | 如果你的應用場景專注於醫療領域，並且不需要額外的安全性。 | medium，因為需要重新配置環境和依賴。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 提供類似的 AI 助手功能，但不具備 NemoClaw 的安全沙盒環境，適合快速開發。 | 如果你需要快速開發並不需要強大的安全性。 | low，因為功能相似且依賴較少。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **NemoClaw** | **OpenClaw-Medical-Skills** | **daVinci-MagiHuman** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的 OpenClaw 實現，提供特定功能，但缺乏 NemoClaw 的安全性和管理功能。 | 提供類似的 AI 助手功能，但不具備 NemoClaw 的安全沙盒環境，適合快速開發。 |
> | 遷移成本 | - | medium，因為需要重新配置環境和依賴。 | low，因為功能相似且依賴較少。 |
> | 適用場景 | 主要場景 | 如果你的應用場景專注於醫療領域，並且不需要額外的安全性。 | 如果你需要快速開發並不需要強大的安全性。 |

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

- **[HIGH]** 安裝過程中可能會遇到 OOM 錯誤，特別是在 RAM 不足的情況下。
  - 解法：配置至少 8GB 的 swap 以減少 OOM 風險。
- [MEDIUM] 使用 nvm 管理 Node.js 時，安裝後可能無法找到 nemoclaw 命令。
  - 解法：運行 `source ~/.bashrc` 或重新打開終端。
- [MEDIUM] 在某些環境中，Docker 可能需要額外的配置才能正常運行。
  - 解法：參考官方文檔中的 Docker 配置指南。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 助手 | 非常適合 | 提供安全的沙盒環境，適合多實例管理。 |
| 個人開發者測試 AI 應用 | 適合 | 安裝簡單，適合快速上手。 |
| 大型企業的生產環境 | 不適合 | 目前處於 Alpha 階段，功能不穩定。 |
| 需要高安全性的 AI 應用 | 非常適合 | 提供多層保護和安全配置選項。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、8 小時整合，得到安全的 AI 助手運行環境，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要 Docker 和 Node.js 的安裝，可能存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 2.0k |
| Open Issues | 449 |
| Issue 解決率 | 27% (167 closed) |
| 最後推送 | 2026-03-31 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://docs.nvidia.com/nemoclaw/latest/) |
| Repo 大小 | 6.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NVIDIA/NemoClaw) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `openclaw` `p-retry` `@commitlint/cli` `@commitlint/config-conventional` `@eslint/js` `@j178/prek` `@types/node` `@vitest/coverage-v8` `eslint` `execa` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 48
>     "Shell" : 33
>     "TypeScript" : 15
>     "Python" : 4
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ericksoa](https://github.com/ericksoa) | 174 |
> | [@miyoungc](https://github.com/miyoungc) | 63 |
> | [@cv](https://github.com/cv) | 32 |
> | [@jacobtomlinson](https://github.com/jacobtomlinson) | 25 |
> | [@kjw3](https://github.com/kjw3) | 18 |

## 社群與生態

**社群活躍度**：社群活躍，歡迎討論和反饋。
**連結**：[文件](https://docs.nvidia.com/nemoclaw/latest/) · [Discord](https://discord.gg/XFpfPv9Uvx)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-30 ~ 2026-03-31）
> **活躍天數** 2 天 · **最新 commit** docs: improve vulnerability reporting guide (#1128)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#65](https://github.com/NVIDIA/NemoClaw/issues/65) | Support for jetson nano `Platform: AGX Thor/Orin` | 8 | 2 |
> | [#719](https://github.com/NVIDIA/NemoClaw/issues/719) | openclaw.json created as root with read-only permissions, ma `bug` `Integration: OpenClaw` `priority: medium` | 6 | 8 |
> | [#924](https://github.com/NVIDIA/NemoClaw/issues/924) | refactor(cli): shell consolidation, TypeScript migration & o `NemoClaw CLI` `refactor` | 5 | 2 |
> | [#396](https://github.com/NVIDIA/NemoClaw/issues/396) | NemoClaw sandbox: Gemini web_search fails with EAI_AGAIN unt `bug` `Platform: MacOS` `OpenShell` | 5 | 2 |
> | [#93](https://github.com/NVIDIA/NemoClaw/issues/93) | [Bug] Telegram agent exits with code 255: "sandbox not found `priority: medium` `Integration: Telegram` | 5 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🦞 NVIDIA NemoClaw: Reference Stack for Running OpenClaw in OpenShell
> 
> [](https://github.com/NVIDIA/NemoClaw/blob/main/LICENSE)
> [](https://github.com/NVIDIA/NemoClaw/blob/main/SECURITY.md)
> [](https://github.com/NVIDIA/NemoClaw/blob/main/docs/about/release-notes.md)
> [](https://discord.gg/XFpfPv9Uvx)
> 
> NVIDIA NemoClaw is an open source reference stack that simplifies running [OpenClaw](https://openclaw.ai) always-on assistants more safely.
> It installs the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) runtime, part of NVIDIA Agent Toolkit, which provides additional security for running autonomous agents.
> 
> > **Alpha software**
> >
> > NemoClaw is available in early preview starting March 16, 2026.
> > This software is not production-ready.
> > Interfaces, APIs, and behavior may change without notice as we iterate on the design.
> > The project is shared to gather feedback and enable early experimentation.
> > We welcome issues and discussion from the community while the project evolves.
> 
> NemoClaw adds guided onboarding, a hardened blueprint, state management, messaging bridges, routed inference, and layered protection on top of the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) runtime. For the full feature list, refer to [Overview](https://docs.nvidia.com/nemoclaw/latest/about/overview.html). For the system diagram, component model, and blueprint lifecycle, refer to [How It Works](https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html) and [Architecture](https://docs.nvidia.com/nemoclaw/latest/reference/architecture.html).
> 
> ## Getting Started
> 
> Follow these steps to install NemoClaw and run your first sandboxed OpenClaw agent.
> 
> ### Prerequisites
> 
> Before getting started, check the prerequisites to ensure you have the necessary software and hardware to run NemoClaw.
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
> | Node.js    | 22.16 or later |
> | npm        | 10 or later |
> | Container runtime | Supported runtime installed and running |
> | [OpenShell](https://github.com/NVIDIA/OpenShell) | Installed |
> 
> #### Container Runtimes
> 
> | Platform | Supported runtimes | Notes |
> |----------|--------------------|-------|
> | Linux | Docker | Primary supported path. |
> | macOS (Apple Silicon) | Colima, Docker Desktop | Install Xcode Command Line Tools (`xcode-select --install`) and start the runtime before running the installer. |
> | macOS (Intel) | Podman | Not supported yet. Depends on OpenShell support for Podman on macOS. |
> | Windows WSL | Docker Desktop (WSL backend) | Supported target path. |
> | DGX Spark | Docker | Refer to the [DGX Spark setup guide](https://github.com/NVIDIA/NemoClaw/blob/main/spark-install.md) for cgroup v2 and Docker configuration. |
> 
> ### Install NemoClaw and Onboard OpenClaw Agent
> 
> Download and run the installer script.
> The script installs Node.js if it is not already present, then runs the guided onboard wizard to create a sandbox, configure inference, and apply security policies.
> 
> > **ℹ️ Note**
> >
> > NemoClaw creates a fresh OpenClaw instance inside the sandbox during the onboarding process.
> 
> ```bash
> curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
> ```
> 
> If you use nvm or fnm to manage Node.js, the installer may not update your current shell's PATH.
> If `nemoclaw` is not found after install, run `source ~/.bashrc` (or `source ~/.zshrc` for zsh) or open a new terminal.
> 
> When the install completes, a summary confirms the running environment:
> 
> ```text
> ──────────────────────────────────────────────────
> Sandbox      my-assistant (Landlock + seccomp + netns)
> Model        nvidia/nemotron-3-super-120b-a12b (NVIDIA Endpoints)
> ──────────────────────────────────────────────────
> Run:         nemoclaw my-assistant connect
> Status:      nemoclaw my-assistant status
> Logs:        nemoclaw my-assistant logs --follow
> ──────────────────────────────────────────────────
> 
> [INFO]  === Installation complete ===
> ```
> 
> ### Chat with the Agent
> 
> Connect to the sandbox, then chat with the agent through the TUI or the CLI.
> 
> ```bash
> nemoclaw my-assistant connect
> ```
> 
> In the sandbox shell, open the OpenClaw terminal UI and start a chat:
> 
> ```bash
> openclaw tui
> ```
> 
> Alternatively, send a single message and print the response:
> 
> ```bash
> openclaw agent --agent main --local -m "hello" --session-id test
> ```
> 
> ### Uninstall
> 
> To remove NemoClaw and all resources created during setup, run the uninstall script:
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/NVIDIA/NemoClaw/refs/heads/main/uninstall.sh | bash
> ```
> 
> | Flag               | Effect                                              |
> |--------------------|-----------------------------------------------------|
> | `--yes`            | Skip the confirmation prompt.                       |
> | `--keep-openshell` | Leave the `openshell` binary installed.              |
> | `--delete-models`  | Also remove NemoClaw-pulled Ollama models.           |
> 
> For troubleshooting installation or onboarding issues, see the [Troubleshooting guide](https://docs.nvidia.com/nemoclaw/latest/reference/troubleshooting.html).
> 
> ## Documentation
> 
> Refer to the following pages on the official documentation website for more information on NemoClaw.
> 
> | Page | Description |
> |------|-------------|
> | [Overview](https://docs.nvidia.com/nemoclaw/latest/about/overview.html) | What NemoClaw does and how it fits together. |
> | [How It Works](https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html) | Plugin, blueprint, sandbox lifecycle, and protection layers. |
> | [Architecture](https://docs.nvidia.com/nemoclaw/latest/reference/architecture.html) | Plugin structure, blueprint lifecycle, sandbox environment, and host-side state. |
> | [Inference Profiles](https://docs.nvidia.com/nemoclaw/latest/reference/inference-profiles.html) | Supported providers, validation, and routed inference configuration. |
> | [Network Policies](https://docs.nvidia.com/nemoclaw/latest/reference/network-policies.html) | Baseline rules, operator approval flow, and egress control. |
> | [Customize Network Policy](https://docs.nvidia.com/nemoclaw/latest/network-policy/customize-network-policy.html) | Static and dynamic policy changes, presets. |
> | [Sandbox Hardening](https://docs.nvidia.com/nemoclaw/latest/deployment/sandbox-hardening.html) | Container security measures, capability drops, process limits. |
> | [CLI Commands](https://docs.nvidia.com/nemoclaw/latest/reference/commands.html) | Full NemoClaw CLI command reference. |
> | [Troubleshooting](https://docs.nvidia.com/nemoclaw/latest/reference/troubleshooting.html) | Common issues and resolution steps. |
> 
> ## Project Structure
> 
> The following directories make up the NemoClaw repository.
> 
> ```text
> NemoClaw/
> ├── bin/              # CLI entry point and library modules (CJS)
> ├── nemoclaw/         # TypeScript plugin (Commander CLI extension)
> │   └── src/
> │       ├── blueprint/    # Runner, snapshot, SSRF validation, state
> │       ├── commands/     # Slash commands, migration state
> │       └── onboard/      # Onboarding config
> ├── nemoclaw-blueprint/   # Blueprint YAML and network policies
> ├── scripts/          # Install helpers, setup, automation
> ├── test/             # Integration and E2E tests
> └── docs/             # User-facing docs (Sphinx/MyST)
> ```
> 
> ## Community
> 

## 延伸閱讀

相關概念：[[容器化]] · [[安全漏洞]] · [[自動化測試]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

[GitHub](https://github.com/NVIDIA/NemoClaw) · [官方網站](https://docs.nvidia.com/nemoclaw/latest/)

## 相關收錄

> [!note]- 直接競品（同子分類：容器化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "容器化" AND file.name != "NVIDIA--NemoClaw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "NVIDIA--NemoClaw"
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
> const concepts = ["容器化","安全漏洞","自動化測試"];
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

- [[2026-03-22|2026-03-22]] — 再次上榜，14.9k stars
- [[2026-03-21|2026-03-21]] — 再次上榜，14.3k stars
- [[2026-03-20|2026-03-20]] — 再次上榜，12.6k stars
- [[2026-03-19|2026-03-19]] — 再次上榜，8.5k stars
- [[2026-03-18|2026-03-18]] — 首次收錄，4.3k stars
