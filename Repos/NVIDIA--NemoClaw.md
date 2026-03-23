---
repo: NVIDIA/NemoClaw
url: https://github.com/NVIDIA/NemoClaw
owner: NVIDIA
owner_type: Organization
language: JavaScript
license: Apache-2.0
description: "Run OpenClaw more securely inside NVIDIA OpenShell with managed inference"
homepage: "https://docs.nvidia.com/nemoclaw/latest/"
stars: 15356
stars_per_day: 2194
forks: 1582
open_issues: 355
created: 2026-03-15
pushed_at: 2026-03-23
first_seen: 2026-03-18
week: "2026-W12"
month: "2026-03"
category: "AI/ML"
subcategory: "推論優化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-18
use_case: "在 NVIDIA OpenShell 中更安全地運行 OpenClaw，並進行管理推理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 19
repo_size_kb: 4921
readme_length: 9514
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-18"
star_history: "2026-03-18:4282,2026-03-18:4313,2026-03-19:8457,2026-03-19:8511,2026-03-20:12647,2026-03-20:12676,2026-03-21:14333,2026-03-21:14336,2026-03-22:14882,2026-03-22:14885,2026-03-23:15356"
tags:
  - github
  - "category/ai_ml"
  - "lang/javascript"
  - org
aliases:
  - "NemoClaw"
  - "NVIDIA/NemoClaw"
  - "在 NVIDIA OpenShell 中更安全地運行 OpenClaw，並進行管理推理。"
---

# NemoClaw

**15.4k** stars · **2.2k** stars/天 · 建立 7 天前 · JavaScript · Apache-2.0

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
> 在 NVIDIA OpenShell 中更安全地運行 OpenClaw，並進行管理推理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (2.2k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在安全環境中運行 AI 助手的開發者和研究人員。
> **一句話重點** NemoClaw 的安全設計讓它成為開發 AI 助手的理想選擇，特別是在需要高安全性的應用場景中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NVIDIA--NemoClaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "NVIDIA--NemoClaw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 推論優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學、6 小時整合，得到安全的 AI 助手運行環境，值得嘗試。

> [!abstract] 核心創新
> NemoClaw 提供了一個安全的沙盒環境來運行 OpenClaw，這在目前的 AI 助手開發中尚屬首次。

## 專案簡介

NVIDIA NemoClaw 是一個開源參考堆疊，旨在簡化在 NVIDIA OpenShell 環境中運行 OpenClaw 的過程。用戶只需安裝 NVIDIA OpenShell 運行時，便可在沙盒中安全運行 OpenClaw 助手，這樣的設計能夠提供額外的安全性，特別適合需要持續運行的自主代理。使用者在啟動過程中，NemoClaw 會自動創建一個新的 OpenClaw 實例，這樣的隔離設計有助於減少潛在的安全風險。關鍵指令包括 `npm install` 來安裝依賴，並使用 `./bin/nemoclaw.js` 來啟動應用，這樣的設計使得用戶能夠快速上手。技術上，NemoClaw 依賴於 Node.js 20 及以上版本，並使用 Docker 作為主要的容器運行時，這樣的選擇使得它在多平台上都能運行，特別是 Linux 和 macOS。

與其他類似工具相比，如 OpenClaw 和其他開源模型，NemoClaw 提供了更強的安全性和更簡單的部署流程，特別是在需要高可用性和安全性的場景中。使用者在實際操作中可能會遇到內存不足的問題，建議配置至少 8GB 的 RAM 或使用交換空間來避免 OOM 錯誤。該專案目前處於 Alpha 階段，尚未準備好進入生產環境，未來可能會有接口和行為的變更。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需要謹慎考量其穩定性。

**技術棧**：`Node.js 20` · `Docker` · `NVIDIA OpenShell`

## 重點功能

- 安全沙盒運行 — 在 NVIDIA OpenShell 中運行 OpenClaw，提供額外的安全性。
- 自動化部署 — 使用簡單的命令行指令 `npm install` 和 `./bin/nemoclaw.js` 來快速啟動。
- 多平台支持 — 支援 Linux、macOS 和 Windows WSL，適合多種開發環境。
- 開源模型集成 — 包含 NVIDIA Nemotron 等開源模型，方便用戶進行擴展。
- 內存管理建議 — 提供內存配置建議，幫助用戶避免 OOM 錯誤。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動 NemoClaw
```bash
./bin/nemoclaw.js
```
3. 檢查運行狀態
```bash
docker ps
```

## 程式碼範例

```js
{
  "前置條件": "確保已安裝 Node.js 20 或以上版本。",
  "指令": "npm install && ./bin/nemoclaw.js",
  "預期輸出": "NemoClaw 正在啟動，請稍候..."
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 15356 stars（2194/天），forks 1582（10.3%），顯示出強勁的增長潛力。這個專案由 NVIDIA 團隊開發，專注於提供安全的 AI 助手運行環境，解決了傳統 OpenClaw 部署過程中的安全隱患。近期的推廣活動和社群反饋也促進了其受歡迎程度。NemoClaw 的出現正好填補了市場上對安全自主代理運行環境的需求，尤其是在 AI 應用日益增多的背景下。forks/stars 比率為 10.3%，顯示出有相當比例的用戶在進行實際修改和使用，這意味著社群對其有實際的參與和貢獻。

## 適合誰使用

**目標受眾**：需要在安全環境中運行 AI 助手的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員用它來在安全的沙盒環境中運行 OpenClaw 助手，因為這樣可以減少潛在的安全風險，並且能夠快速迭代模型。
> - DevOps 工程師用它來在 CI/CD 流程中自動化部署 OpenClaw，因為這樣可以確保每次部署都在隔離的環境中進行，降低錯誤率。
> - 小型團隊用它來進行 AI 助手的原型開發，因為其簡單的安裝流程和安全性設計使得團隊能夠專注於功能開發而不是基礎設施。

## 架構分析

NemoClaw 的架構基於 NVIDIA OpenShell，這是一個輕量級的運行時環境，專為安全性設計。用戶在啟動 NemoClaw 時，會在沙盒中創建一個新的 OpenClaw 實例，這樣的設計能夠有效隔離各個實例，降低安全風險。資料流方面，NemoClaw 使用 Docker 作為容器運行時，這樣的選擇使得它能夠在多種平台上運行，並且簡化了部署過程。選擇 Node.js 作為主要開發語言，能夠快速迭代和開發，但也可能帶來一定的性能開銷。擴展性方面，NemoClaw 目前的設計對於小型團隊和個人開發者非常友好，但在處理大規模部署時，可能會遇到性能瓶頸，特別是在內存使用上。

## 技術深入分析

NemoClaw 的核心技術機制是基於 NVIDIA OpenShell 的安全運行時環境，這使得它能夠在沙盒中運行 OpenClaw 助手。這種設計不僅提高了安全性，還能夠有效隔離不同的實例，防止潛在的安全漏洞。效能方面，NemoClaw 需要至少 8GB 的 RAM，並且在內存使用上有一定的限制，這可能會影響到大規模部署的性能。選擇 Node.js 作為開發語言，雖然能夠快速開發，但在高負載情況下可能會出現性能瓶頸。技術上，NemoClaw 依賴於 Docker 作為容器運行時，這樣的選擇使得它能夠在多種平台上運行，但也可能帶來一定的複雜性。對於團隊來說，NemoClaw 的學習曲線相對較低，但在整合到現有的 CI/CD 流程中，仍然需要一定的調整和配置。整體而言，NemoClaw 提供了一個安全、靈活的環境來運行 AI 助手，但在穩定性和性能上仍需進一步改進。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含必要的安裝和使用範例。安裝過程相對順暢，但對於硬體要求有明確的提示。文件目前僅提供英文版本，對於非英語使用者可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供安全的沙盒環境，降低安全風險。
> - 簡單的安裝和啟動流程，適合快速開發。
> - 支持多平台運行，靈活性高。
> - 集成多種開源模型，方便用戶擴展。

> [!danger] 缺點
> - 目前處於 Alpha 階段，穩定性不足。
> - 需要較高的硬體要求，特別是內存。
> - 不支援 Podman，限制了部分用戶群。
> - 對於 Windows 用戶的支持有限。

> [!warning] 注意事項
> - 目前處於 Alpha 階段，尚未準備好進入生產環境。
> - 需要至少 8 GB 的 RAM，否則可能會遇到 OOM 錯誤。
> - 不支援 Podman 在 macOS 上的運行，僅限 Docker。
> - 對於 Windows 用戶，僅支持 WSL 環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [NVIDIA/OpenClaw](https://github.com/NVIDIA/OpenClaw) | OpenClaw 是一個獨立的 AI 助手框架，而 NemoClaw 提供了安全的運行環境，適合需要高安全性的應用場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這個專案專注於醫療領域的 AI 助手，而 NemoClaw 則是通用的 AI 助手運行環境，適用於更廣泛的應用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了不同的安全模型，但 NemoClaw 專注於簡化 OpenClaw 的安全運行，並提供更好的用戶體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenClaw | OpenClaw 是一個獨立的 AI 助手框架，專注於功能實現，而 NemoClaw 則專注於安全運行環境的提供。 | 如果需要一個功能強大的 AI 助手而不太在意安全性，OpenClaw 是更好的選擇。 | low，因為兩者之間的接口相對簡單。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這個專案專注於醫療領域的 AI 助手，而 NemoClaw 則提供了通用的運行環境。 | 如果專注於醫療應用，這個專案會更合適。 | medium，因為需要考慮到醫療特定的需求。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了一個不同的安全模型，但 NemoClaw 更加專注於簡化 OpenClaw 的安全運行。 | 如果需要一個多樣化的安全模型，Shadowbroker 可能更適合。 | high，因為需要重構部分架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **NemoClaw** | **OpenClaw** | **OpenClaw-Medical-Skills** | **Shadowbroker** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 是一個獨立的 AI 助手框架，專注於功能實現，而 NemoClaw 則專注於安全運行環境的提供。 | 這個專案專注於醫療領域的 AI 助手，而 NemoClaw 則提供了通用的運行環境。 | Shadowbroker 提供了一個不同的安全模型，但 NemoClaw 更加專注於簡化 OpenClaw 的安全運行。 |
> | 遷移成本 | - | low，因為兩者之間的接口相對簡單。 | medium，因為需要考慮到醫療特定的需求。 | high，因為需要重構部分架構。 |
> | 適用場景 | 主要場景 | 如果需要一個功能強大的 AI 助手而不太在意安全性，Open | 如果專注於醫療應用，這個專案會更合適。 | 如果需要一個多樣化的安全模型，Shadowbroker 可能 |

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

- **[HIGH]** 在內存不足的情況下，可能會遇到 OOM 錯誤。
  - 解法：建議配置至少 8GB 的 RAM 或使用交換空間。
- [MEDIUM] 在 macOS 上使用 Podman 時不支援，可能會導致安裝失敗。
  - 解法：建議使用 Docker 作為替代。
- [MEDIUM] Windows 用戶在 WSL 環境中的支持有限，可能會遇到兼容性問題。
  - 解法：確保使用最新版本的 Docker Desktop。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 助手原型 | 非常適合 | 提供安全的沙盒環境，適合快速迭代和開發。 |
| 需要高安全性的 AI 應用 | 適合 | 在沙盒中運行，降低安全風險。 |
| 大型企業的生產環境 | 不適合 | 目前處於 Alpha 階段，穩定性不足。 |
| 個人開發者進行 AI 實驗 | 非常適合 | 簡單的安裝流程和安全性設計使得實驗更為便捷。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學、6 小時整合，得到安全的 AI 助手運行環境，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估中等，NemoClaw 需要一定的權限來運行 Docker，並且會存取系統資源。依賴鏈中有一些未審計的依賴，建議在生產環境中謹慎使用。

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
| Forks | 1.6k |
| Open Issues | 355 |
| Issue 解決率 | 19% (82 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://docs.nvidia.com/nemoclaw/latest/) |
| Repo 大小 | 4.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NVIDIA/NemoClaw) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `openclaw` `@commitlint/cli` `@commitlint/config-conventional` `husky` `lint-staged` `shellcheck` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 42
>     "Shell" : 30
>     "TypeScript" : 17
>     "Python" : 10
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ericksoa](https://github.com/ericksoa) | 151 |
> | [@miyoungc](https://github.com/miyoungc) | 58 |
> | [@jacobtomlinson](https://github.com/jacobtomlinson) | 25 |
> | [@kjw3](https://github.com/kjw3) | 12 |
> | [@cv](https://github.com/cv) | 11 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和問題回應。
**連結**：[文件](https://docs.nvidia.com/nemoclaw/latest/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-22 ~ 2026-03-23）
> **活躍天數** 2 天 · **最新 commit** fix(security): stop leaking API keys in process args visible via ps aux (#330)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#65](https://github.com/NVIDIA/NemoClaw/issues/65) | Support for jetson nano `Platform: AGX Thor/Orin` | 8 | 2 |
> | [#93](https://github.com/NVIDIA/NemoClaw/issues/93) | [Bug] Telegram agent exits with code 255: "sandbox not found `priority: medium` `Integration: Telegram` | 5 | 1 |
> | [#50](https://github.com/NVIDIA/NemoClaw/issues/50) | Fedora - Docker - Onboarding cannot find Docker `Docker` | 5 | 6 |
> | [#315](https://github.com/NVIDIA/NemoClaw/issues/315) | Local vLLM inference from sandbox on WSL2 + RTX 5090 — worka `Platform: Windows/WSL` | 4 | 6 |
> | [#571](https://github.com/NVIDIA/NemoClaw/issues/571) | sandbox connect fails `bug` `status: triage` | 3 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NVIDIA NemoClaw: Reference Stack for Running OpenClaw in OpenShell
> 
> [](https://github.com/NVIDIA/NemoClaw/blob/main/LICENSE)
> [](https://github.com/NVIDIA/NemoClaw/blob/main/SECURITY.md)
> [](https://github.com/NVIDIA/NemoClaw/blob/main/docs/about/release-notes.md)
> 
> NVIDIA NemoClaw is an open source reference stack that simplifies running [OpenClaw](https://openclaw.ai) always-on assistants more safely.
> It installs the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) runtime, part of NVIDIA Agent Toolkit, which provides additional security for running autonomous agents.
> It also includes open source models such as [NVIDIA Nemotron](https://build.nvidia.com).
> 
> > **Alpha software**
> >
> > NemoClaw is available in early preview starting March 16, 2026.
> > This software is not production-ready.
> > Interfaces, APIs, and behavior may change without notice as we iterate on the design.
> > The project is shared to gather feedback and enable early experimentation.
> > We welcome issues and discussion from the community while the project evolves.
> 
> ---
> 
> 
> ## Quick Start
> 
> Follow these steps to get started with NemoClaw and your first sandboxed OpenClaw agent.
> 
> > **ℹ️ Note**
> >
> > NemoClaw creates a fresh OpenClaw instance inside the sandbox during onboarding.
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
> > **💡 Tip**
> >
> > For DGX Spark, follow the [DGX Spark setup guide](https://github.com/NVIDIA/NemoClaw/blob/main/spark-install.md). It covers Spark-specific prerequisites, such as cgroup v2 and Docker configuration, before running the standard installer.
> 
> 
> ### Install NemoClaw and Onboard OpenClaw Agent
> 
> Download and run the installer script.
> The script installs Node.js if it is not already present, then runs the guided onboard wizard to create a sandbox, configure inference, and apply security policies.
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
> ```
> ──────────────────────────────────────────────────
> Sandbox      my-assistant (Landlock + seccomp + netns)
> Model        nvidia/nemotron-3-super-120b-a12b (NVIDIA Endpoint API)
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
> ### Uninstall
> 
> To remove NemoClaw and all resources created during setup, in the terminal outside the sandbox, run:
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/NVIDIA/NemoClaw/refs/heads/main/uninstall.sh | bash
> ```
> 
> The script removes sandboxes, the NemoClaw gateway and providers, related Docker images and containers, local state directories, and the global `nemoclaw` npm package. It does not remove shared system tooling such as Docker, Node.js, npm, or Ollama.
> 
> | Flag               | Effect                                              |
> |--------------------|-----------------------------------------------------|
> | `--yes`            | Skip the confirmation prompt.                       |
> | `--keep-openshell` | Leave the `openshell` binary installed.              |
> | `--delete-models`  | Also remove NemoClaw-pulled Ollama models.           |
> 
> For example, to skip the confirmation prompt:
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/NVIDIA/NemoClaw/refs/heads/main/uninstall.sh | bash -s -- --yes
> ```
> 
> ---
> 
> 
> ## Configuring Sandbox Policy
> 
> The sandbox policy is defined in a declarative YAML file and enforced by the OpenShell runtime.
> NemoClaw ships a default policy in [`nemoclaw-blueprint/policies/openclaw-sandbox.yaml`](https://github.com/NVIDIA/NemoClaw/blob/main/nemoclaw-blueprint/policies/openclaw-sandbox.yaml) that denies all network egress except explicitly listed endpoints.
> 
> Operators can customize the policy in two ways:
> 
> | Method | How | Scope |
> |--------|-----|-------|
> | **Static** | Edit `openclaw-sandbox.yaml` and re-run `nemoclaw onboard`. | Persists across restarts. |
> | **Dynamic** | Run `openshell policy set ` on a running sandbox. | Session only; resets on restart. |
> 
> NemoClaw includes preset policy files for common integrations such as PyPI, Docker Hub, Slack, and Jira in `nemoclaw-blueprint/policies/presets/`. Apply a preset as-is or use it as a starting template.
> 
> NemoClaw is an open project — we are still determining which presets to ship by default. If you have suggestions, please open an [issue](https://github.com/NVIDIA/NemoClaw/issues) or [discussion](https://github.com/NVIDIA/NemoClaw/discussions).
> 
> When the agent attempts to reach an endpoint not covered by the policy, OpenShell blocks the request and surfaces it in the TUI (`openshell term`) for the operator to approve or deny in real time. Approved endpoints persist for the current session only.
> 
> For step-by-step instructions, see [Customize Network Policy](https://docs.nvidia.com/nemoclaw/latest/network-policy/customize-network-policy.html). For the underlying enforcement details, see the OpenShell [Policy Schema](https://docs.nvidia.com/openshell/latest/reference/policy-schema.html) and [Sandbox Policies](https://docs.nvidia.com/openshell/latest/sandboxes/policies.html) documentation.
> 
> ---
> 
> 
> ### Chat with the Agent
> 
> Connect to the sandbox, then chat with the agent through the TUI or the CLI.
> 
> #### Connect to the Sandbox
> 
> Run the following command to connect to the sandbox:
> 
> ```bash
> nemoclaw my-assistant connect
> ```
> 
> This connects you to the sandbox shell `sandbox@my-assistant:~$` where you can run `openclaw` commands.
> 
> #### OpenClaw TUI
> 
> In the sandbox shell, run the following command to open the OpenClaw TUI, which opens an interactive chat interface.
> 
> ```bash
> openclaw tui
> ```
> 
> Send a test message to the agent and verify you receive a response.
> 
> > **ℹ️ Note**
> >
> > The TUI is best for interactive back-and-forth. If you need the full text of a long response such as a large code generation output, use the CLI instead.
> 
> #### OpenClaw CLI
> 
> In the sandbox shell, run the following command to send a single message and print the response:
> 
> ```bash
> openclaw agent --agent main --local -m "hello" --session-id test
> ```
> 
> This prints the complete response dir

## 延伸閱讀

相關概念：[[容器化]] · [[CI/CD]] · [[自動化測試]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

[GitHub](https://github.com/NVIDIA/NemoClaw) · [官方網站](https://docs.nvidia.com/nemoclaw/latest/)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "NVIDIA--NemoClaw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "NVIDIA--NemoClaw"
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
> const concepts = ["容器化","CI/CD","自動化測試"];
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
