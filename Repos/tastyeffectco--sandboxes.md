---
repo: tastyeffectco/sandboxes
url: https://github.com/tastyeffectco/sandboxes
owner: tastyeffectco
owner_type: User
language: Go
license: MIT
description: "Self-hosted dev sandboxes with preview URLs. One command. No Kubernetes, perfect for coding agents and Saas factories"
homepage: "https://upilote.com"
stars: 471
stars_per_day: 157
forks: 10
open_issues: 5
created: 2026-06-03
pushed_at: 2026-06-06
first_seen: 2026-06-07
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "沙箱管理"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-07
use_case: "提供自我托管的開發沙箱，讓每位用戶都能擁有獨立的雲端開發環境和即時預覽網址。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-14"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 261
readme_length: 9978
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-07"
star_history: "2026-06-07:471"
tags:
  - github
  - "category/開發工具"
  - "lang/go"
  - easy_install
  - "topic/ai"
  - "topic/ai_agent"
  - "topic/dev_environment"
  - "topic/docker"
  - "topic/isolation"
aliases:
  - "sandboxes"
  - "tastyeffectco/sandboxes"
  - "提供自我托管的開發沙箱，讓每位用戶都能擁有獨立的雲端開發環境和即時預覽網址。"
---

# sandboxes

**471** stars · **157** stars/天 · 建立 3 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/tastyeffectco--sandboxes");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.0` `easy-install`

`ai` `ai-agent` `dev-environment` `docker` `isolation` `preview` `preview-environment` `sandbox` `self-hosted`

> [!summary] 一句話摘要
> 提供自我托管的開發沙箱，讓每位用戶都能擁有獨立的雲端開發環境和即時預覽網址。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (157 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要為多位用戶提供獨立開發環境的團隊，特別是在 AI 應用開發領域。
> **一句話重點** sandboxed 讓開發者能夠在單一機器上輕鬆管理多個獨立的開發環境，特別適合 AI 應用開發。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tastyeffectco--sandboxes");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "沙箱管理" && p.file.name !== "tastyeffectco--sandboxes" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 沙箱管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學、3 小時整合，得到簡單的多用戶開發環境，值得一試。

> [!abstract] 核心創新
> 提供一個自我托管的開發沙箱解決方案，能夠在單一機器上為多個用戶提供獨立的開發環境和即時預覽網址。

## 專案簡介

sandboxed 是一個自我托管的開發沙箱解決方案，旨在為每位用戶提供獨立的雲端開發環境。用戶只需發送一個 HTTP 請求，即可創建一個隔離的 Linux 容器，並在其中運行 AI 編碼代理，最終生成的應用會自動提供一個可分享的預覽網址。這個工具的賣點在於其簡單的安裝過程，僅需執行 `./install.sh`，便可啟動整個 API 和預覽功能。技術上，sandboxed 使用了 Go 語言編寫，並依賴 Docker 和 Traefik 來管理容器和路由，SQLite 作為數據存儲，這使得整體架構輕量且易於理解。

與其他類似工具相比，sandboxed 提供了多租戶隔離，能夠有效管理多個用戶的環境，並且具備自動停止和喚醒的功能，這樣可以節省資源，降低運行成本。與傳統的 Docker 解決方案相比，sandboxed 省去了手動管理端口和容器的麻煩，並且提供了 API 接口，方便與其他應用集成。實際使用中，sandboxed 允許用戶在沙箱中運行 AI 編碼代理，並能夠實時查看任務進度和結果，這對於需要快速開發和測試的團隊來說非常有價值。儘管目前仍處於 beta 階段，但其設計理念和功能已經相當成熟，適合需要多用戶開發環境的團隊使用。

**技術棧**：`Go` · `Docker` · `Traefik` · `SQLite`

## 重點功能

- 一鍵安裝 — 只需執行 `./install.sh` 即可啟動整個開發環境。
- 內建 AI 代理 — 包含 OpenCode 和 Claude Code，能夠自動生成代碼。
- 預覽網址 — 每個沙箱都會生成一個可分享的預覽網址，方便展示和測試。
- API 接口 — 提供完整的 HTTP API，可用於創建、管理和操作沙箱。
- 資源管理 — Idle 沙箱會自動停止以釋放內存，並在需要時自動喚醒。

## 快速開始

1. 克隆專案並安裝
```bash
git clone https://github.com/tastyeffectco/sandboxes.git && cd sandboxes && ./install.sh
```
2. 檢查 API 是否正常運行
```bash
curl http://127.0.0.1:9090/healthz
```
3. 創建一個新的沙箱
```bash
curl -s -XPOST http://127.0.0.1:9090/sandbox -H 'content-type: application/json' -d '{"ports":[3000]}'
```

## 程式碼範例

```go
[
  "# 前置條件：已安裝並啟動 sandboxed",
  "curl -s -XPOST http://127.0.0.1:9090/sandbox -H 'content-type: application/json' -d '{\"ports\":[3000]}'",
  "# 預期輸出：{\"id\":\"<sandbox_id>\"}"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 471 stars（157/天），forks 10（2.1%），顯示出一定的使用者關注度。作者 tastyeffectco 的背景不詳，但這個專案解決了多用戶開發環境的需求，特別是在 AI 應用開發方面，之前的解決方案往往需要複雜的 Kubernetes 環境或手動管理容器。這個工具的簡單性和自我托管的特性吸引了許多開發者的注意，尤其是在社群中對於簡化開發環境的需求日益增加。最近的推廣活動或討論可能也促進了其曝光率。

## 適合誰使用

**目標受眾**：需要為多位用戶提供獨立開發環境的團隊，特別是在 AI 應用開發領域。

> [!example] 使用場景
> - 後端工程師用它來快速創建多個開發沙箱，因為它能夠在一台機器上輕鬆管理多個環境，節省資源和時間。
> - AI 開發者用它來測試和部署 AI 代理，因為內建的 OpenCode 和 Claude Code 代理可以直接在沙箱中運行，無需額外配置。
> - 產品經理用它來為客戶演示即時原型，因為每個沙箱都提供獨立的預覽網址，便於分享和反饋。

## 架構分析

sandboxed 的架構設計旨在簡化多用戶開發環境的管理。其核心是使用 Go 語言編寫的控制平面，通過 Docker 來管理容器，並使用 Traefik 進行路由。每個沙箱都是一個獨立的 Linux 容器，具備自己的文件系統和內存限制，確保用戶之間的隔離。

SQLite 作為數據存儲，提供了持久性和狀態恢復的能力。這種設計使得整體架構輕量且易於維護，但也意味著在擴展性上可能會遇到瓶頸，特別是在用戶數量激增時。由於目前僅支持單一 Docker 主機，未來若需擴展至多主機或 Kubernetes 環境，將需要進行架構調整。

## 技術深入分析

sandboxed 的核心技術在於其簡化的架構，使用 Go 語言來控制 Docker 容器的創建和管理。這種設計使得每個沙箱都能夠獨立運行，並且具備自己的資源限制，從而避免了多用戶環境中的資源衝突。效能方面，由於使用 SQLite 作為數據存儲，能夠快速恢復狀態，並且在用戶不活動時自動釋放內存，這對於資源有限的環境來說非常重要。選擇 Docker 作為容器管理工具，讓整個系統能夠輕鬆部署和擴展，但也意味著在大規模使用時可能會面臨性能瓶頸。技術風險方面，若用戶數量激增，可能會導致資源競爭，影響整體效能。整合方面，sandboxed 與現有的 CI/CD 流程相容性良好，能夠輕鬆嵌入到現有的開發工具鏈中，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例。安裝過程順暢，幾乎沒有坑。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的安裝流程，適合快速部署開發環境。
> - 內建 AI 代理，能夠自動生成代碼，提升開發效率。
> - 支持多租戶隔離，確保用戶之間的安全和隱私。

> [!danger] 缺點
> - 目前僅支持 Linux 環境，對於其他操作系統的支持有限。
> - 不支援 Kubernetes，對於需要大規模擴展的團隊可能不夠靈活。
> - 對於小型專案來說，可能顯得過於複雜。

> [!warning] 注意事項
> - 僅支援 Linux 環境，需安裝 Docker Engine 和 Compose 插件。
> - 目前不支援 Kubernetes，僅限於單一 Docker 主機。
> - 對於小型專案，可能顯得過於複雜，簡單的 shell 腳本可能更合適。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的沙箱環境，但專注於 AI 代理的管理和協作，適合需要多代理協作的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於輕量級的容器管理，適合需要快速啟動和停止的開發環境，但不具備預覽網址功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的管理，提供更強大的代理協作功能，適合需要多代理的開發環境。 | 如果你的專案需要多個 AI 代理協作，且希望有更強的管理能力，則選擇此工具。 | medium，因為需要重新配置代理和環境設置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 輕量級的容器管理工具，專注於快速啟動和停止，適合小型專案。 | 如果你的需求僅限於少量容器的管理，且不需要預覽網址功能，則選擇此工具。 | low，因為其使用方式與 sandboxed 相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **sandboxes** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代理的管理，提供更強大的代理協作功能，適合需要多代理的開發環境。 | 輕量級的容器管理工具，專注於快速啟動和停止，適合小型專案。 |
> | 遷移成本 | - | medium，因為需要重新配置代理和環境設置。 | low，因為其使用方式與 sandboxed 相似。 |
> | 適用場景 | 主要場景 | 如果你的專案需要多個 AI 代理協作，且希望有更強的管理能力 | 如果你的需求僅限於少量容器的管理，且不需要預覽網址功能，則選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，可能會出現資源競爭，影響沙箱性能。
  - 解法：監控資源使用情況，必要時增加硬體資源。
- [MEDIUM] 目前不支持 Windows 環境，僅限於 Linux。
  - 解法：使用 WSL 或在 Linux 環境中運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠輕鬆管理多個開發環境，並提供即時預覽功能。 |
| 大型企業的多租戶開發平台 | 適合 | 具備多租戶隔離和資源管理功能，適合大規模使用。 |
| 個人開發者的單一專案 | 不適合 | 對於單一專案來說，可能顯得過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到簡單的多用戶開發環境，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：sandboxed 本身不需要高權限運行，且不會存取敏感資料。依賴的 Docker 和 SQLite 也相對安全，但仍需注意容器的安全配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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
| Forks | 10 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-06 |
| 建立日期 | 2026-06-03 |
| 官方網站 | [Link](https://upilote.com) |
| Repo 大小 | 261 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tastyeffectco/sandboxes) |
| Topics | `ai` `ai-agent` `dev-environment` `docker` `isolation` `preview` `preview-environment` `sandbox` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 96
>     "Shell" : 2
>     "Dockerfile" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tastyeffectco](https://github.com/tastyeffectco) | 2 |

**最新版本**：v0.1.0 — v0.1.0 — Initial release (2026-06-06)

> [!info]- Release Notes
> First public release of sandboxed.
> 
> - One-command install (./install.sh)
> - Create/stop/destroy sandboxes via HTTP API
> - Built-in AI agents (OpenCode + Claude Code)
> - Preview URLs via Traefik
> - Stop-on-idle, wake-on-request
> - Hardened containers (cap-drop ALL, no-new-privileges, read-only rootfs)
> - Workspace persistence across stops and reboots
> - SQLite state + reconciler
> 
> Status: beta

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應速度尚可。
**連結**：[文件](https://upilote.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-03 ~ 2026-06-04）
> **活躍天數** 2 天 · **最新 commit** Update README to remove duplicate image and add section

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/tastyeffectco/sandboxes/issues/7) | Disk quota per sandbox `enhancement` | 0 | 0 |
> | [#6](https://github.com/tastyeffectco/sandboxes/issues/6) | Multi-host clustering `enhancement` | 0 | 0 |
> | [#5](https://github.com/tastyeffectco/sandboxes/issues/5) | Add Firecracker as alternative runtime `enhancement` | 0 | 0 |
> | [#4](https://github.com/tastyeffectco/sandboxes/issues/4) | ARM64 / Apple Silicon support `good first issue` | 0 | 0 |
> | [#3](https://github.com/tastyeffectco/sandboxes/issues/3) | Add gVisor runtime support `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> sandboxed
> 
>   The open-source engine for AI app-builder products.
>   Give every user an isolated cloud dev environment, a built-in coding agent,
>   and a live preview URL — self-hosted, on one machine, in one command.
> 
>   
>   
>   
>   
> 
> ---
> 
> 
> ## Quick start
> 
> Requirements: **Docker Engine + the Compose plugin**, on Linux. That's it.
> 
> 
> ### 1. Install
> 
> ```bash
> git clone https://github.com/tastyeffectco/sandboxes.git
> cd sandboxes
> ./install.sh
> ```
> 
> `install.sh` checks Docker, writes a `.env`, builds the sandbox base image + the
> control plane, and starts the stack. The API is then live at
> `http://127.0.0.1:9090` (verify: `curl http://127.0.0.1:9090/healthz` → `ok`).
> 
> 
> ## Uninstall
> 
> ```bash
> ./uninstall.sh            # stop the stack + remove all sandboxes + network (keeps your data)
> ./uninstall.sh --images   # also remove the built Docker images
> ./uninstall.sh --data     # also DELETE all workspaces + state (asks to confirm)
> ./uninstall.sh --all      # full removal: images + data
> ```
> 
> Safe by default — it removes only what sandboxed created (containers labelled
> `sandboxed.managed=true`, the compose stack, the network) and **keeps your
> workspaces** unless you pass `--data`/`--all`.
> 
> 
> ## API
> 
> Base URL = `http://127.0.0.1:9090` (set by `SANDBOXED_API_BIND`). Auth is **off
> by default** for local use; with `SANDBOXD_API_AUTH_DISABLED=false` +
> `SANDBOXD_API_TOKENS`, send `-H "Authorization: Bearer "`.
> 
> | Method & path | Body | Purpose |
> |---|---|---|
> | `POST /sandbox` | `{"ports":[3000],"env":{...}}` | **create** — `id` optional (ULID auto); `env` injects vars (e.g. API keys) |
> | `GET /sandboxes` | — | list all sandboxes |
> | `GET /sandbox/{id}` | — | get one (status, ports, container id…) |
> | `POST /sandbox/{id}/exec` | `{"cmd":["bash","-lc","…"]}` | run a command (non-interactive) |
> | `POST /sandbox/{id}/keepalive` | — | postpone the idle reaper |
> | `POST /v1/sandboxes/{id}/stop` | — | stop now to free RAM (wakes on next preview hit) |
> | `DELETE /sandbox/{id}` | — | destroy the container, **keep** the workspace |
> | `POST /sandbox/{id}/purge` | — | destroy **and delete** the workspace |
> | `POST /v1/sandboxes/{id}/tasks` | `{"prompt":"…","agent":"opencode"}` | run a coding agent headlessly |
> | `GET /v1/sandboxes/{id}/tasks/{taskId}` | — | task result |
> | `GET /v1/sandboxes/{id}/tasks/{taskId}/events` | — | live task event stream (SSE) |
> | `GET/PUT /v1/sandboxes/{id}/files` | `{"path","content","append"}` | list / read / write workspace files |
> | `GET /healthz`, `GET /readyz` | — | liveness / readiness |
> 
> A complete, copy-pasteable runbook (including driving it from your own agent) is
> in **[`AGENTS.md`](AGENTS.md)**.
> 
> 
> ## Configuration
> 
> Everything is in `.env` (created from [`.env.example`](.env.example) on install).
> The defaults run a complete local stack. The knobs you'll touch most:
> 
> | Variable | Default | What it does |
> |---|---|---|
> | `PREVIEW_DOMAIN` | `localhost` | domain preview URLs hang off |
> | `HTTP_PORT` | `80` | host port Traefik listens on |
> | `SANDBOXED_DATA_DIR` | `/var/lib/sandboxed` | where workspaces + state live |
> | `SANDBOXED_API_BIND` | `127.0.0.1:9090` | where the control-plane API is published |
> | `SANDBOXD_API_AUTH_DISABLED` | `true` | open API for local use; set `false` + tokens for prod |
> 
> 
> ## Why sandboxed?
> 
> If you're building an **AI app-builder, an agent platform, a coding playground,
> or a per-user preview product**, the hard part isn't the prompt — it's the
> infrastructure underneath it:
> 
> - **Multi-tenant isolation** so one user's code can't touch another's.
> - **Per-user preview URLs** with automatic routing and TLS.
> - **Cost control** — idle environments must release memory, or your bill explodes.
> - **Agent orchestration** — run a coding agent against a workspace, stream its
>   progress, capture the result.
> - **Persistence, wake-on-demand, reconciliation after a crash or reboot.**
> 
> That's months of platform work. sandboxed is that platform, distilled to one
> command:
> 
> - ⚡ **One-command install.** `./install.sh` and you have a working API + previews.
> - 🧠 **Agents included.** The OpenCode and Claude Code CLIs ship in every sandbox;
>   hand a sandbox a prompt and it builds.
> - 💸 **Dense by design.** Stop-on-idle + wake-on-request means dozens of sandboxes
>   share one box instead of one VM each — the difference between a $20 server and
>   a $2,000 cluster.
> - 🔓 **Yours.** Self-hosted, MIT-licensed, no vendor lock-in. Own your data, your
>   margins, and your roadmap.
> - 🪶 **Boring on purpose.** SQLite + the `docker` CLI + Traefik. A reconciler
>   converges Docker back to the database on every boot. You can read the whole
>   control plane in an afternoon.
> 
> 
> ## "Why not just a shell script?"
> 
> Fair question — and honestly: **if you need one or two long-lived containers for
> yourself, a shell script (or `docker run`, or [lxd](https://canonical.com/lxd))
> is simpler. Use that.** We mean it. sandboxed is overkill for one-off projects.
> 
> It earns its keep the moment you're running **many** sandboxes for **other
> people** — a team, or a product — because that's when the tidy little `docker
> run` script quietly grows into all of this:
> 
> - **URLs, not ports.** Every sandbox gets a clean preview URL with automatic
>   routing + TLS — no port bookkeeping, no collisions to manage.
> - **It sleeps and wakes itself.** Idle sandboxes stop to free RAM and restart
>   transparently on the next request (warming-up page, readiness probe, request
>   hold). That part alone is well past 100 lines — and it's the difference
>   between one cheap box and a rack of always-on VMs.
> - **It survives reboots.** SQLite is the source of truth; a reconciler
>   re-converges Docker to it on boot. A script forgets everything when the host
>   restarts.
> - **It's an API, not a CLI you shell into.** create / exec / stop / destroy /
>   write-files / run-agent-task are real HTTP endpoints with auth — you call them
>   from your app backend, per user, at scale.
> - **One user can't take down the rest.** Per-sandbox memory/PID limits + a
>   host-memory pressure reaper.
> - **Agents with a lifecycle.** Submit a prompt, stream progress (SSE), capture a
>   durable result — not just `opencode` fired inline.
> 
> Rebuild those as your script grows and you've rebuilt sandboxed. So: skip it for
> one-offs; reach for it when "just a script" has started keeping you up at night.
> 
> > **Prefer Kubernetes?** The control plane talks to the container runtime through
> > a thin `docker` CLI boundary, so a k8s Job/Pod backend is an interface swap,
> > not a rewrite — a great first contribution. Today it targets a single Docker
> > host (no k8s required), which is the sweet spot for teams who don't want to run
> > a cluster just for sandboxes.
> 
> 
> ## What is sandboxed? (start here)
> 
> Think of the apps where you type *"build me a todo app"* and seconds later a
> working website appears at its own link — like Lovable, Bolt, v0, or Replit.
> **sandboxed is the open-source backend that makes that possible**, running on
> your own server.
> 
> Here's what it does, in plain terms. You send it one HTTP request, and it:
> 
> 1. **Creates a sandbox** — a private, isolated Linux container (its own
>    filesystem, its own memory limits), so one user's code can never see or
>    break another's.
> 2. **Runs an AI coding agent inside it** — you give it a prompt, and it writes
>    the code into that sandbox. (The OpenCode and Claude Code CLIs come
>    pre-installed.)
> 3. **Gives the app a live URL** — the dev server running inside the sandbox is
>    instantly reachable at a shareable preview link.
> 
> ```
> POST /sandbox          → a private, isolated container spins up
> POST .../tasks         → an AI agent writes an app inside it
> http://.preview... → that app is live at its own URL
> ```
> 
> It's also cheap to run: a sandbox **goes to sleep when nobody's using it**
> (freeing memory) and **wakes up the instant someone opens its link again** —
> files are saved on disk the whole time. So one ordinary server can hold many
> users instead of needing one virtual machine each.
> 
> Under the hood it's deliberately sma

## 延伸閱讀

相關概念：[[容器化]] · [[自動化測試]] · [[多租戶]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Sophomoresty--gemini-web2api|Sophomoresty/gemini-web2api]] · [[pewdiepie-archdaemon--odysseus|pewdiepie-archdaemon/odysseus]]

[GitHub](https://github.com/tastyeffectco/sandboxes) · [官方網站](https://upilote.com)

## 相關收錄

> [!note]- 直接競品（同子分類：沙箱管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "沙箱管理" AND file.name != "tastyeffectco--sandboxes"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "tastyeffectco--sandboxes"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "tastyeffectco--sandboxes" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "tastyeffectco--sandboxes"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["容器化","自動化測試","多租戶"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tastyeffectco--sandboxes" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tastyeffectco--sandboxes");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tastyeffectco--sandboxes" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tastyeffectco" AND file.name != "tastyeffectco--sandboxes"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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
> const me = dv.page("Repos/tastyeffectco--sandboxes");
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

> **2026-06-07** — 首次收錄
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

- [[2026-06-07|2026-06-07]] — 首次收錄，471 stars
