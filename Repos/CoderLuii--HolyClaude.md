---
repo: CoderLuii/HolyClaude
url: https://github.com/CoderLuii/HolyClaude
owner: CoderLuii
owner_type: User
language: Dockerfile
license: MIT
description: "AI coding workstation: Claude Code + web UI + 5 AI CLIs + headless browser + 50+ tools"
homepage: "https://holyclaude.coderluii.dev"
stars: 969
stars_per_day: 162
forks: 100
open_issues: 5
created: 2026-03-22
pushed_at: 2026-03-27
first_seen: 2026-03-28
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "AI 工具"
release_tag: "v1.1.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-28
use_case: "提供一個完整的 AI 開發工作站，整合 Claude Code、網頁介面及多種開發工具，讓開發者快速上手。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 2
engagement: "medium"
issue_close_rate: 29
repo_size_kb: 1669
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-28"
star_history: "2026-03-28:969"
tags:
  - github
  - "category/開發工具"
  - "lang/dockerfile"
  - easy_install
  - "topic/ai"
  - "topic/ai_coding"
  - "topic/anthropic"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "HolyClaude"
  - "CoderLuii/HolyClaude"
  - "提供一個完整的 AI 開發工作站，整合 Claude Code、網頁介面及多種開發工具，讓開發者快速上手。"
---

# HolyClaude

**969** stars · **162** stars/天 · 建立 6 天前 · Dockerfile · MIT

```dataviewjs
const me = dv.page("Repos/CoderLuii--HolyClaude");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.1.2` `easy-install`

`ai` `ai-coding` `anthropic` `claude` `claude-code` `coding-agent` `container` `developer-tools` `devtools` `docker` `docker-compose` `gemini` `headless-browser` `openai` `playwright`

> [!summary] 一句話摘要
> 提供一個完整的 AI 開發工作站，整合 Claude Code、網頁介面及多種開發工具，讓開發者快速上手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (162 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要快速搭建 AI 開發環境的開發者，尤其是使用 Claude Code 的使用者。
> **一句話重點** HolyClaude 是一個完整的 AI 開發工作站，讓開發者能在短時間內搭建起所需的開發環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CoderLuii--HolyClaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "CoderLuii--HolyClaude" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速搭建 AI 開發環境的效果，值得嘗試。

> [!abstract] 核心創新
> HolyClaude 提供了一個完整的 AI 開發工作站，將多種工具和服務整合在一個容器中，簡化了開發者的環境配置過程。

## 專案簡介

HolyClaude 是一個容器化的 AI 開發工作站，旨在簡化開發者使用 Claude Code 的過程。用戶只需執行 `docker compose up -d`，便可啟動包含 Claude Code、網頁介面、5 種 AI CLI 及 50 多種開發工具的環境。這種設計消除了繁瑣的手動安裝和配置過程，讓開發者能專注於實際的開發工作，而非環境設置。HolyClaude 預先安裝並配置所有必要的工具，並使用 Docker 的優勢來確保一致性和可攜性。這意味著開發者無需擔心不同環境中的配置問題，因為 HolyClaude 在所有機器上都能正常運行。

技術上，HolyClaude 使用 Docker 來容納所有的依賴，並且支持多種架構（AMD64 和 ARM64），這使得它能在各種平台上運行，包括 Linux 和 macOS。與其他工具相比，HolyClaude 的優勢在於其一體化的解決方案，避免了手動安裝和配置的繁瑣過程。

與傳統的手動安裝相比，HolyClaude 的設置時間從 1-2 小時縮短至 30 秒，顯著提高了開發效率。

在與其他類似工具的比較中，HolyClaude 提供了更為完整的功能集，像是內建的 Chromium 和 Playwright 支持，而這些在其他工具中通常需要額外安裝和配置。對於需要快速開發和測試 AI 應用的團隊，HolyClaude 是一個理想的選擇，特別是當開發者希望減少環境配置的時間時。

不過，HolyClaude 仍然有一些限制，例如對於某些特定的工具或插件可能不支持，並且在使用過程中可能會遇到一些常見的 Docker 問題。社群的活躍度也相對較低，這可能會影響到問題的解決速度。整體來看，HolyClaude 是一個成熟的解決方案，適合中小型團隊或個人開發者使用，未來可能會持續增強其功能和社群支持。

**技術棧**：`Docker` · `Python`

## 重點功能

- 一鍵啟動 — 只需執行 `docker compose up -d` 即可啟動完整的 AI 開發工作站。
- 內建 Claude Code — 預先安裝並配置 Claude Code CLI，無需額外安裝。
- 多種 AI CLI 支持 — 包含 5 種不同的 AI CLI，方便開發者使用。
- 完整的開發工具集 — 提供 50 多種開發工具，無需手動安裝。
- 支援多平台 — 可在 AMD64 和 ARM64 環境中運行，適用於多種操作系統。

## 快速開始

1. 創建 HolyClaude 文件夾
```bash
mkdir holyclaude && cd holyclaude
```
2. 創建 docker-compose.yaml 文件
```bash
# 複製模板
```
3. 拉取並啟動容器
```bash
docker compose up -d
```
4. 打開網頁介面
```bash
http://localhost:3001
```
5. 創建 CloudCLI 帳號並登入
```bash
# 完成帳號創建
```

## 程式碼範例

```dockerfile
{
  "前置條件": "需要安裝 Docker 和 Docker Compose；",
  "指令": "docker compose up -d",
  "預期輸出": "啟動所有服務，並可在 http://localhost:3001 訪問網頁介面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 969 stars（162/天），forks 100（10.3%），顯示出強勁的增長潛力。作者 CoderLuii 之前有開發其他開源工具，這次針對開發者在使用 Claude Code 時的繁瑣流程提出了解決方案。HolyClaude 的出現解決了許多開發者在環境配置上的痛點，特別是對於需要快速上手的使用者。社群的反饋和需求也促進了這個專案的成長，尤其是對於 Docker 和 AI 開發工具的需求日益增加。

## 適合誰使用

**目標受眾**：需要快速搭建 AI 開發環境的開發者，尤其是使用 Claude Code 的使用者。

> [!example] 使用場景
> - 後端工程師用它來快速搭建 AI 開發環境，因為只需執行一條指令便能啟動完整的開發工作站，節省了大量的環境配置時間。
> - 獨立開發者用它來測試和開發基於 Claude Code 的應用，因為 HolyClaude 提供了即時的網頁介面和多種 CLI 工具，讓開發過程更加流暢。
> - 小型團隊用它來協作開發 AI 應用，因為 HolyClaude 的容器化設計確保了環境的一致性，減少了因環境不同而導致的問題。

## 架構分析

HolyClaude 採用 Docker 容器化架構，這使得所有的依賴和工具都被封裝在一個容器中，確保了環境的一致性。資料流方面，使用者透過網頁介面與後端的 Claude Code 進行交互，並且所有的 CLI 工具都在同一個容器內運行，這樣的設計避免了多個工具之間的版本衝突。選擇 Docker 的原因在於其便於部署和管理，然而這也意味著使用者需要對 Docker 有基本的了解。擴展性方面，HolyClaude 支持多平台運行，但在某些情況下可能會受到 Docker 的限制，例如在特定的硬體上運行時可能會遇到性能瓶頸。

## 技術深入分析

HolyClaude 的核心技術在於其容器化架構，使用 Docker 來管理所有依賴和工具，這樣的設計使得開發者能夠在不同的環境中獲得一致的使用體驗。HolyClaude 內建的工具包括 Claude Code、Chromium 和 Playwright，這些工具的整合使得開發者能夠快速進行開發和測試。效能方面，HolyClaude 能夠在多平台上運行，並且支持 AMD64 和 ARM64 架構，這使得它能夠在 Raspberry Pi 等設備上運行，滿足不同開發者的需求。選擇 Docker 的原因在於其便於管理和部署，但這也意味著使用者需要具備一定的 Docker 知識，以避免在配置過程中遇到問題。技術風險方面，HolyClaude 可能在某些特定的硬體上運行時遇到性能瓶頸，特別是在資源有限的環境中。整合方面，HolyClaude 與主流的 CI/CD 工具相容，能夠輕鬆地融入現有的開發流程中，這對於希望快速部署的團隊來說是個優勢。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，讓新手能夠快速上手。安裝過程相對順暢，只需執行一條指令即可啟動環境。文件中沒有多語言支持，但內容簡潔易懂，適合大多數開發者。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 快速啟動 — 只需一條指令即可啟動完整環境。
> - 多種工具整合 — 提供 50 多種開發工具，無需手動安裝。
> - 一致性 — 容器化設計確保環境在不同機器上運行一致。

> [!danger] 缺點
> - 對於某些特定的工具或插件可能不支持。
> - 需要對 Docker 有基本了解，否則可能會遇到問題。
> - 社群活躍度較低，可能影響問題解決速度。

> [!warning] 注意事項
> - 對於某些特定的工具或插件可能不支持。
> - 在使用過程中可能會遇到一些常見的 Docker 問題。
> - 社群活躍度較低，可能影響問題解決速度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備完整的 AI 開發環境，適合需要文件同步的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，與 HolyClaude 的開發工具功能不同，適合對安全性有高要求的使用者。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 WebSocket 代理，無法提供完整的 AI 開發工作站功能，適合需要 WebSocket 代理的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，提供簡單的同步功能，但沒有 AI 開發環境的整合。 | 如果你的需求主要是文件同步，且不需要完整的 AI 開發環境。 | low，因為主要功能簡單，易於替換。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性，提供更高的隱私保護，但不具備 HolyClaude 的開發工具整合。 | 如果你的專案對安全性有高要求，且不需要多種開發工具的支持。 | medium，因為需要重新配置開發環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HolyClaude** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，提供簡單的同步功能，但沒有 AI 開發環境的整合。 | 專注於安全性，提供更高的隱私保護，但不具備 HolyClaude 的開發工具整合。 |
> | 遷移成本 | - | low，因為主要功能簡單，易於替換。 | medium，因為需要重新配置開發環境。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步，且不需要完整的 AI 開發環境。 | 如果你的專案對安全性有高要求，且不需要多種開發工具的支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人開發者或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些平台上啟動時可能會遇到性能瓶頸，特別是在資源有限的環境中。
  - 解法：考慮使用更高效的硬體或調整 Docker 配置以優化性能。
- [MEDIUM] 某些工具或插件可能不支持，導致功能缺失。
  - 解法：定期檢查更新，並參與社群討論以獲得最新資訊。
- **[HIGH]** Docker 設定不當可能導致環境無法啟動。
  - 解法：確保 Docker 和 Docker Compose 的版本為最新，並參考官方文檔進行配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 應用 | 非常適合 | 提供完整的開發環境，能夠快速上手。 |
| 獨立開發者進行個人專案 | 適合 | 簡化了環境配置，讓開發者能專注於程式碼。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍處於 beta 階段，穩定性和支持可能不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速搭建 AI 開發環境的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> HolyClaude 本身不需要高權限運行，且不存取敏感資料。依賴的 Docker 環境需定期更新，以避免潛在的安全風險。整體而言，將 HolyClaude 融入 CI/CD 流程是安全的。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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
| Forks | 100 |
| Open Issues | 5 |
| Issue 解決率 | 29% (2 closed) |
| 最後推送 | 2026-03-27 |
| 建立日期 | 2026-03-22 |
| 官方網站 | [Link](https://holyclaude.coderluii.dev) |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CoderLuii/HolyClaude) |
| Topics | `ai` `ai-coding` `anthropic` `claude` `claude-code` `coding-agent` `container` `developer-tools` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Dockerfile" : 54
>     "Shell" : 34
>     "Python" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@CoderLuii](https://github.com/CoderLuii) | 5 |
> | [@Sunwood-ai-labs](https://github.com/Sunwood-ai-labs) | 1 |

**最新版本**：v1.1.2 (2026-03-27)

> [!info]- Release Notes
> ## 03/26/2026
> 
> ### Added
> - Docker HEALTHCHECK instruction for container health monitoring (`docker ps` now shows healthy/unhealthy status)
> - Bootstrap now backs up existing `settings.json` and `CLAUDE.md` before overwriting on re-bootstrap (`.bak` files created automatically)
> - Expanded CONTRIBUTING.md with build commands, testing steps, file map, and PR checklist
> 
> ### Links
> 
> - [Full documentation](https://github.com/CoderLuii/HolyClaude)
> - [Docker Hub](https://hub.docker.com/r/coderluii/holyclaude)
> - [GHCR](https://github.com/CoderLuii/HolyClaude/pkgs/container/holyclaude)
> - [Landing page](https://holyclaude.coderluii.dev)

## 社群與生態

**社群活躍度**：社群活躍度中等，存在一些開放的問題和功能請求。
**連結**：[文件](https://github.com/CoderLuii/HolyClaude)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-22 ~ 2026-03-27）
> **活躍天數** 3 天 · **最新 commit** v1.1.2

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/CoderLuii/HolyClaude/issues/10) | Add the Azure CLI `enhancement` | 1 | 1 |
> | [#13](https://github.com/CoderLuii/HolyClaude/issues/13) | [Package Request] `enhancement` | 0 | 1 |
> | [#11](https://github.com/CoderLuii/HolyClaude/issues/11) | Web Terminal plugin stuck on "Connecting..." spinner — WebSo `bug` | 0 | 2 |
> | [#4](https://github.com/CoderLuii/HolyClaude/issues/4) | Support Junie `enhancement` | 0 | 2 |
> | [#3](https://github.com/CoderLuii/HolyClaude/issues/3) | Feature idea: Plasmate as a lightweight alternative to headl `enhancement` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> #  HolyClaude
> 
>   
> 
> [](https://opensource.org/licenses/MIT)
> [](https://hub.docker.com/r/coderluii/holyclaude)
> [](https://hub.docker.com/r/coderluii/holyclaude)
> [](https://hub.docker.com/r/coderluii/holyclaude)
> 
> [](https://github.com/CoderLuii/HolyClaude)
> [](https://x.com/CoderLuii)
> [](https://www.paypal.com/donate/?hosted_button_id=PM2UXGVSTHDNL)
> [](https://buymeacoffee.com/CoderLuii)
> [](https://coderluii.dev)
> [](https://github.com/CoderLuii/HolyClaude/releases)
> [](https://github.com/CoderLuii/HolyClaude/issues)
> [](https://github.com/CoderLuii/HolyClaude/graphs/contributors)
> 
> 
> ## :zap: Quick Start
> 
> **1.** Create a folder for HolyClaude:
> 
> ```bash
> mkdir holyclaude && cd holyclaude
> ```
> 
> **2.** Create a `docker-compose.yaml` file. Copy one of the templates below:
> - [Quick template](#whale-docker-compose--quick) — minimal, zero config, just works
> - [Full template](#whale2-docker-compose--full) — all options, fully documented
> 
> **3.** Pull and start:
> 
> ```bash
> docker compose up -d
> ```
> 
> **4.** Open the web UI:
> 
> ```
> http://localhost:3001
> ```
> 
> **5.** Create a CloudCLI account (takes 10 seconds), sign in with your Anthropic account, and you're live.
> 
> > No `.env` files. No pre-configuration. No reading 40 pages of docs before you can start. It just runs.
> 
>   ↑ back to top
> 
> ---
> 
> 
> # HolyClaude — Quick Start
> 
> ### Re-triggering first-boot setup:
> ```bash
> 
> ### Stop configuring. Start building.
> 
> One command. Full AI development workstation. Claude Code, web UI, headless browser, 5 AI CLIs, 50+ dev tools — containerized and ready.
> 
> **You were going to spend 2 hours setting this up manually. Or you could just `docker compose up`.**
> 
> **Works with your existing Claude Code subscription.** Max/Pro plan, API key — whatever you have, it just works.
> 
> ---
> 
> 
> # HolyClaude — Full Configuration
> 
> # All options documented inline.
> 
> # Detailed docs: https://github.com/CoderLuii/HolyClaude/blob/main/docs/configuration.md
> 
> ## :star2: Why HolyClaude
> 
> I built this because I was tired of re-doing the same setup every time. Installing Claude Code, wiring up a web UI, configuring Chromium in Docker, fixing permission issues, debugging process supervision. Every time.
> 
> So I made a container that does all of it. And then I hit every possible bug so you don't have to.
> 
> | | HolyClaude | Doing it yourself |
> |---|---|---|
> | **Setup** | 30 seconds | 1-2 hours (if it goes well) |
> | **Claude Code** | Pre-installed, pre-configured, ready | Install, configure, debug installer hanging, fix WORKDIR |
> | **Web UI** | CloudCLI included with plugins | Find a web UI, install it, configure it, wire it to Claude |
> | **Headless browser** | Chromium + Xvfb + Playwright, configured | Install Chromium, install Xvfb, configure display :99, fix shm, fix sandbox, fix seccomp... |
> | **AI CLIs** | 5 providers, one container | Install each one separately across 3 package managers |
> | **Dev tools** | 50+ tools, ready | `apt-get install` / `npm i -g` / `pip install` for the next hour |
> | **Process management** | s6-overlay (auto-restart, graceful shutdown) | Write your own supervisord config or hope Docker restart works |
> | **Persistence** | Bind mounts, credentials survive everything | Figure out Docker volumes, debug "why is this a directory not a file" |
> | **Updates** | `docker pull && docker compose up -d` | Update 50 tools manually, pray nothing breaks |
> | **Multi-arch** | AMD64 + ARM64 | Pray your Dockerfile builds on ARM |
> 
> **The last row of every manual setup is "works on my machine."** HolyClaude works on every machine.
> 
>   ↑ back to top
> 
> ---
> 
> 
> ## What is this?
> 
> You know the drill. You want Claude Code. But you also want it in a browser. With a headless browser for screenshots and testing. With Playwright configured. With every AI CLI. With TypeScript, Python, deployment tools, database clients, GitHub CLI.
> 
> So you start installing things. One by one. Then Chromium won't launch because Docker's shared memory is 64MB. Then Xvfb isn't configured. Then the UID inside the container doesn't match your host and everything is permission denied. Then you realize Claude Code's installer hangs when WORKDIR is root-owned. Then SQLite locks on your NAS mount. Then—
> 
> **HolyClaude is the container I built after solving every single one of those problems.**
> 
> I've been running this daily on my own server for weeks. Every bug has been hit, diagnosed, and fixed. Every edge case has been handled. Every "why doesn't this work in Docker" has been answered.
> 
> You pull it. You run it. You open your browser. You build.
> 
> 
> ### :credit_card: Use Your Existing Subscription
> 
> **This runs the real Claude Code CLI.** Not a wrapper. Not a proxy. Not a knock-off.
> 
> Your existing Anthropic account works directly:
> - **Claude Max/Pro plan** — authenticate through the web UI (OAuth), same as desktop Claude Code
> - **Anthropic API key** — set it through the web UI, same billing as always
> - **No extra cost** — HolyClaude is free and open source. You only pay Anthropic for what you use, like you already do.
> 
> > HolyClaude doesn't touch your credentials. They're stored locally in your bind-mounted volume (`./data/claude/`), same as they would be on bare metal.
> 
>   ↑ back to top
> 
> ---
> 
> 
> ## Table of Contents
> 
> | | Section |
> |---|---|
> | :zap: | [Quick Start](#zap-quick-start) |
> | :computer: | [Platform Support](#computer-platform-support) |
> | :star2: | [Why HolyClaude](#star2-why-holyclaude) |
> | :credit_card: | [Subscription & Authentication](#credit_card-subscription--authentication) |
> | :package: | [Image Variants](#package-image-variants) |
> | :whale: | [Docker Compose — Quick](#whale-docker-compose--quick) |
> | :whale2: | [Docker Compose — Full](#whale2-docker-compose--full) |
> | :wrench: | [Environment Variables](#wrench-environment-variables) |
> | :rocket: | [What's Inside](#rocket-whats-inside) |
> | :robot: | [AI CLI Providers](#robot-ai-cli-providers) |
> | :building_construction: | [Architecture](#building_construction-architecture) |
> | :file_folder: | [Project Structure](#file_folder-project-structure) |
> | :floppy_disk: | [Data & Persistence](#floppy_disk-data--persistence) |
> | :lock: | [Permissions](#lock-permissions) |
> | :bell: | [Notifications](#bell-notifications) |
> | :arrows_counterclockwise: | [Upgrading](#arrows_counterclockwise-upgrading) |
> | :construction: | [Troubleshooting](#construction-troubleshooting) |
> | :warning: | [Known Issues](#warning-known-issues) |
> | :hammer_and_wrench: | [Building Locally](#hammer_and_wrench-building-locally) |
> | :bar_chart: | [Alternatives](#bar_chart-alternatives) |
> | :rocket: | [Roadmap](#rocket-roadmap) |
> | :trophy: | [Built with HolyClaude](#trophy-built-with-holyclaude) |
> | :handshake: | [Contributing](#handshake-contributing) |
> | :heart: | [Support](#heart-support) |
> | :page_facing_up: | [License](#page_facing_up-license) |
> 
>   ↑ back to top
> 
> ---
> 
> 
> ## :computer: Platform Support
> 
> | Platform | Status | Notes |
> |----------|--------|-------|
> | Linux (amd64) | ✅ Fully supported | Native performance, recommended |
> | Linux (arm64) | ✅ Fully supported | Raspberry Pi 4+, Oracle Cloud, AWS Graviton |
> | macOS (Docker Desktop) | ✅ Fully supported | Apple Silicon & Intel via Docker Desktop |
> | Windows (WSL2 + Docker Desktop) | ✅ Fully supported | Requires WSL2 backend |
> | Synology / QNAP NAS | ✅ Fully supported | Use `CHOKIDAR_USEPOLLING=true` for SMB mounts |
> | Kubernetes | 🔜 Coming soon | Helm chart planned |
> 
>   ↑ back to top
> 
> ---
> 
> 
> ## :credit_card: Subscription & Authentication
> 
> HolyClaude runs the **official Claude Code CLI** from Anthropic. Your existing account works out of the box.
> 
> 
> ### What works:
> 
> | Authentication method | How | Cost |
> |----------------------|-----|------|
> | **Claude Max/Pro plan** (subscription) | Sign in through CloudCLI web UI — same OAuth flow as desktop | Your existing subscription, no extra charge |
> | **Anthropic API key** | Paste your API key in the web UI | Pay-per-use, same Anthropic billing |
> 
> 
> ### What doesn't work:
> 
> | | Why |
> |---|---|
> | ChatGPT Plus/Pro subscription | That's for chat.openai.

## 延伸閱讀

相關概念：[[容器化]] · [[AI 開發]] · [[Docker]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/CoderLuii/HolyClaude) · [官方網站](https://holyclaude.coderluii.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "CoderLuii--HolyClaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "CoderLuii--HolyClaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Dockerfile" AND file.name != "CoderLuii--HolyClaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "CoderLuii--HolyClaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["容器化","AI 開發","Docker"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "CoderLuii--HolyClaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/CoderLuii--HolyClaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CoderLuii--HolyClaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CoderLuii" AND file.name != "CoderLuii--HolyClaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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
> const me = dv.page("Repos/CoderLuii--HolyClaude");
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

> **2026-03-28** — 首次收錄
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

- [[2026-03-28|2026-03-28]] — 首次收錄，969 stars
