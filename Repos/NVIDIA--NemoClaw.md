---
repo: NVIDIA/NemoClaw
url: https://github.com/NVIDIA/NemoClaw
owner: NVIDIA
owner_type: Organization
language: JavaScript
license: Apache-2.0
description: "Run OpenClaw more securely inside NVIDIA OpenShell with managed inference"
homepage: "https://docs.nvidia.com/nemoclaw/latest/"
stars: 17645
stars_per_day: 1260
forks: 2022
open_issues: 491
created: 2026-03-15
pushed_at: 2026-03-30
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
use_case: "在 NVIDIA OpenShell 中更安全地運行 OpenClaw，並進行管理推理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 22
repo_size_kb: 5430
readme_length: 9381
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-18"
star_history: "2026-03-18:4282,2026-03-18:4313,2026-03-19:8457,2026-03-19:8511,2026-03-20:12647,2026-03-20:12676,2026-03-21:14333,2026-03-21:14336,2026-03-22:14882,2026-03-22:14885,2026-03-23:15356,2026-03-24:15935,2026-03-25:16379,2026-03-26:16764,2026-03-27:17068,2026-03-28:17313,2026-03-29:17489,2026-03-30:17645"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "NemoClaw"
  - "NVIDIA/NemoClaw"
  - "在 NVIDIA OpenShell 中更安全地運行 OpenClaw，並進行管理推理。"
---

# NemoClaw

**17.6k** stars · **1.3k** stars/天 · 建立 14 天前 · JavaScript · Apache-2.0

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
> 在 NVIDIA OpenShell 中更安全地運行 OpenClaw，並進行管理推理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.3k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在安全環境中運行 AI 助手的開發者和研究人員。
> **一句話重點** NemoClaw 的安全沙盒設計使其成為運行 AI 助手的理想選擇，特別是在處理敏感數據時。

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
> **結論** 花 5 小時學、8 小時整合，得到安全的 AI 助手運行環境，值得一試。

> [!abstract] 核心創新
> NemoClaw 提供了在安全沙盒中運行 OpenClaw 的能力，這在同類工具中是獨一無二的。

## 專案簡介

NVIDIA NemoClaw 是一個開源參考堆疊，旨在簡化在 NVIDIA OpenShell 中運行 OpenClaw 的過程，提供更高的安全性。用戶首先需要安裝 NVIDIA OpenShell，然後可以通過簡單的安裝腳本來創建一個沙盒環境，這個環境會自動配置推理和應用安全策略。安裝後，用戶可以使用 `nemoclaw my-assistant connect` 來連接到沙盒，並透過 TUI 或 CLI 與 OpenClaw 進行互動。這個工具的賣點在於它能夠在安全的沙盒中運行持續運作的助手，並且提供了靈活的網絡政策配置。技術上，NemoClaw 使用了 Node.js 和 Docker，並依賴於 OpenShell 的安全特性來隔離和管理推理過程。

與其他類似工具相比，如 OpenClaw，NemoClaw 提供了更強的安全性和管理功能，特別是在處理敏感數據時。根據 README，這個工具目前處於 Alpha 階段，並不適合生產環境使用，使用者應該注意 API 和行為可能會隨著開發而變化。實際使用中，NemoClaw 需要至少 8GB 的 RAM 和 20GB 的磁碟空間，這在資源有限的環境中可能會成為瓶頸。社群活躍度中等，開發者對於問題的回應速度尚可，但仍有大量未解決的問題。對於需要在安全環境中運行 AI 助手的開發者來說，NemoClaw 是一個值得關注的選擇，但在正式使用前應該仔細評估其穩定性和功能完整性。

**技術棧**：`Node.js >=22.16.0` · `Docker` · `OpenShell`

## 重點功能

- 安全沙盒運行 — 在 NVIDIA OpenShell 中運行 OpenClaw，提供額外的安全防護。
- 靈活的網絡政策配置 — 使用 YAML 文件定義沙盒政策，支持靜態和動態配置。
- 簡單的安裝過程 — 透過一行命令安裝，並自動配置環境。
- 支持多種平台 — 包括 Linux、macOS 和 Windows WSL，提供廣泛的兼容性。
- 實時監控和日誌 — 使用 `nemoclaw my-assistant logs --follow` 命令查看沙盒日誌。

## 快速開始

1. 下載並運行安裝腳本
```bash
curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
```
2. 連接到沙盒
```bash
nemoclaw my-assistant connect
```
3. 查看沙盒狀態
```bash
nemoclaw my-assistant status
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 NemoClaw 和 OpenClaw",
  "nemoclaw my-assistant connect",
  "# 預期輸出：連接到沙盒 shell，顯示提示符 sandbox@my-assistant:~$"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天就累積 17645 stars（1260/天），forks 2022（11.5%），顯示出強烈的社群興趣。作者 NVIDIA 是知名的 AI 和 GPU 技術公司，過去在開源領域有多個成功案例。NemoClaw 解決了在安全環境中運行 AI 助手的需求，這在當前的開發環境中是個痛點。最近的推廣活動和社群討論也可能促進了這個工具的曝光度。技術上，NemoClaw 的設計依賴於 NVIDIA OpenShell 的安全特性，這使得它在同類工具中具備獨特的優勢。forks/stars 比率為 11.5%，顯示出不少開發者在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要在安全環境中運行 AI 助手的開發者和研究人員。

> [!example] 使用場景
> - AI 開發者用它來在安全的沙盒中運行 OpenClaw 助手，因為這樣可以避免敏感數據洩露的風險。
> - DevOps 工程師用它來配置和管理推理環境，因為 NemoClaw 提供了靈活的網絡政策配置，能夠滿足不同的安全需求。
> - 研究人員用它來測試和實驗 AI 模型，因為它能夠在隔離的環境中運行，避免對主系統造成影響。

## 架構分析

NemoClaw 的架構基於 Node.js 和 Docker，旨在提供一個安全的沙盒環境來運行 OpenClaw。這種設計使得用戶能夠在隔離的環境中運行 AI 助手，避免對主系統的影響。資料流方面，NemoClaw 會在安裝過程中創建一個新的 OpenClaw 實例，並在沙盒中配置推理和安全策略。這樣的設計選擇使得用戶能夠靈活地管理和配置其環境，但也帶來了對資源的需求，特別是在內存和磁碟空間方面。擴展性方面，NemoClaw 目前依賴於 Docker 和 OpenShell 的特性，這可能會在未來的擴展中成為瓶頸，特別是在處理大量並發請求時。

## 技術深入分析

NemoClaw 的核心技術機制依賴於 Node.js 和 Docker，並利用 OpenShell 的安全特性來隔離和管理推理過程。這樣的設計使得用戶能夠在安全的環境中運行 OpenClaw 助手，並提供靈活的網絡政策配置。效能方面，NemoClaw 需要至少 8GB 的 RAM 和 20GB 的磁碟空間，這在資源有限的環境中可能會成為瓶頸。設計上，選擇 Node.js 使得開發過程更為靈活，但也帶來了對於 Node.js 環境的依賴。技術風險方面，NemoClaw 目前處於 Alpha 階段，未來可能會面臨 API 不穩定的問題。整合方面，NemoClaw 與 Docker 和 OpenShell 的整合相對簡單，但在高負載情況下可能會遇到性能瓶頸。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但對於 Docker 的依賴可能會造成一些問題。沒有提供多語言支持，但文檔質量較高，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供安全的沙盒環境，減少數據洩露風險。
> - 安裝過程簡單，適合快速上手。
> - 支持多種平台，增加了靈活性。

> [!danger] 缺點
> - 目前處於 Alpha 階段，功能不穩定。
> - 對於資源需求較高，可能不適合低配置環境。
> - 安裝過程中可能遇到 Docker 相關問題。

> [!warning] 注意事項
> - 目前處於 Alpha 階段，功能和 API 可能不穩定。
> - 需要至少 8GB 的 RAM，對於資源有限的環境可能會造成瓶頸。
> - 不支持 Windows 原生運行，僅能在 WSL 環境中使用。
> - 安裝過程中可能會遇到 Docker 連接問題，需確保容器運行時已啟動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [NVIDIA/OpenClaw](https://github.com/NVIDIA/OpenClaw) | OpenClaw 是一個開放的 AI 助手框架，但缺乏 NemoClaw 的安全沙盒特性，適合不需要高安全性的環境。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，而 NemoClaw 專注於安全運行 AI 助手，功能定位不同。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw-Medical-Skills 專注於醫療領域的應用，而 NemoClaw 提供更通用的安全運行環境。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/OpenClaw](https://github.com/NVIDIA/OpenClaw) | OpenClaw 是一個開放的 AI 助手框架，但缺乏 NemoClaw 的安全沙盒特性，適合不需要高安全性的環境。 | 如果你的應用不需要高安全性，且希望使用更成熟的框架，則可以選擇 OpenClaw。 | medium，因為需要重新配置安全策略和環境設置。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的應用，提供特定的功能和模型，而 NemoClaw 提供更通用的安全運行環境。 | 如果你的應用專注於醫療領域，且需要特定的模型和技能，則可以選擇這個工具。 | high，因為需要重新設計整個應用架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **NemoClaw** | **OpenClaw** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 是一個開放的 AI 助手框架，但缺乏 NemoClaw 的安全沙盒特性，適合不需要高安全性的環境。 | 專注於醫療領域的應用，提供特定的功能和模型，而 NemoClaw 提供更通用的安全運行環境。 |
> | 遷移成本 | - | medium，因為需要重新配置安全策略和環境設置。 | high，因為需要重新設計整個應用架構。 |
> | 適用場景 | 主要場景 | 如果你的應用不需要高安全性，且希望使用更成熟的框架，則可以選 | 如果你的應用專注於醫療領域，且需要特定的模型和技能，則可以選 |

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

- **[HIGH]** 安裝過程中可能會遇到 Docker 連接問題，需確保容器運行時已啟動。
  - 解法：在安裝前檢查 Docker 是否正常運行。
- [MEDIUM] 在 macOS 上首次運行時，可能會缺少開發者工具。
  - 解法：確保安裝 Xcode Command Line Tools。
- **[HIGH]** 沙盒中的資源限制可能導致 OOM 錯誤。
  - 解法：確保系統有足夠的 RAM 或配置 swap。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 助手 | 非常適合 | 提供安全的沙盒環境，減少數據洩露風險。 |
| 大型企業的生產環境 | 不適合 | 目前處於 Alpha 階段，功能不穩定。 |
| 研究機構進行 AI 實驗 | 適合 | 能夠在隔離的環境中運行，避免對主系統造成影響。 |
| 需要高性能計算的應用 | 普通 | 對於資源需求較高，可能不適合低配置環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、8 小時整合，得到安全的 AI 助手運行環境，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> NemoClaw 本身不需要高權限運行，但會存取敏感資料如憑證和配置文件。依賴於 Docker 的安全性，需確保 Docker 環境的安全性。

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
| Open Issues | 491 |
| Issue 解決率 | 22% (139 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://docs.nvidia.com/nemoclaw/latest/) |
| Repo 大小 | 5.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NVIDIA/NemoClaw) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `openclaw` `@commitlint/cli` `@commitlint/config-conventional` `@eslint/js` `@j178/prek` `@types/node` `@vitest/coverage-v8` `execa` `eslint` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 48
>     "Shell" : 31
>     "TypeScript" : 16
>     "Python" : 4
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ericksoa](https://github.com/ericksoa) | 167 |
> | [@miyoungc](https://github.com/miyoungc) | 61 |
> | [@cv](https://github.com/cv) | 31 |
> | [@jacobtomlinson](https://github.com/jacobtomlinson) | 25 |
> | [@kjw3](https://github.com/kjw3) | 18 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://docs.nvidia.com/nemoclaw/latest/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26 ~ 2026-03-30）
> **活躍天數** 5 天 · **最新 commit** fix(install): add trap handler to spin() for clean Ctrl+C teardown (#1070)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#65](https://github.com/NVIDIA/NemoClaw/issues/65) | Support for jetson nano `Platform: AGX Thor/Orin` | 8 | 2 |
> | [#719](https://github.com/NVIDIA/NemoClaw/issues/719) | openclaw.json created as root with read-only permissions, ma `bug` `Integration: OpenClaw` `priority: medium` | 6 | 5 |
> | [#924](https://github.com/NVIDIA/NemoClaw/issues/924) | refactor(cli): shell consolidation, TypeScript migration & o | 5 | 2 |
> | [#93](https://github.com/NVIDIA/NemoClaw/issues/93) | [Bug] Telegram agent exits with code 255: "sandbox not found `priority: medium` `Integration: Telegram` | 5 | 1 |
> | [#50](https://github.com/NVIDIA/NemoClaw/issues/50) | Fedora - Docker - Onboarding cannot find Docker `Docker` | 5 | 7 |

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
> | Node.js    | 22.16 or later |
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
> #### macOS first-run checklist
> 
> On a fresh macOS machine, install the prerequisites in this order:
> 
> 1. Install Xcode Command Line Tools:
> 
>    ```bash
>    xcode-select --install
>    ```
> 
> 2. Install and start a supported container runtime:
>    - Docker Desktop
>    - Colima
> 3. Run the NemoClaw installer.
> 
> This avoids the two most common first-run failures on macOS:
> 
> - missing developer tools needed by the installer and Node.js toolchain
> - Docker connection errors when no supported container runtime is installed or running
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
> ## Host-Side State and Config
> 
> NemoClaw keeps its operator-facing state on the host rather than inside the sandbox.
> These are the main files new users usually need to locate:
> 
> | Path | Purpose |
> |---|---|
> | `~/.nemoclaw/credentials.json` | Provider credentials saved during onboarding |
> | `~/.nemoclaw/sandboxes.json` | Registered sandbox metadata, including the default sandbox selection |
> | `~/.openclaw/openclaw.json` | Host OpenClaw configuration that NemoClaw snapshots or restores during migration flows |
> 
> Common environment variables for optional services and local access include `TELEGRAM_BOT_TOKEN`, `ALLOWED_CHAT_IDS`, and `CHAT_UI_URL`.
> For normal sandbox setup and reconfiguration, prefer `nemoclaw onboard` over editing these files by hand.
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
> For step-by-step instructions, see [Customize Network Policy](https://docs.nvidia.com/ne

## 延伸閱讀

相關概念：[[容器化]] · [[自動化]] · [[安全漏洞]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

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
> const concepts = ["容器化","自動化","安全漏洞"];
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
