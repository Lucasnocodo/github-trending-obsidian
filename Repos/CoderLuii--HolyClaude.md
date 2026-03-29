---
repo: CoderLuii/HolyClaude
url: https://github.com/CoderLuii/HolyClaude
owner: CoderLuii
owner_type: User
language: Dockerfile
license: MIT
description: "AI coding workstation: Claude Code + web UI + 5 AI CLIs + headless browser + 50+ tools"
homepage: "https://holyclaude.coderluii.dev"
stars: 1187
stars_per_day: 170
forks: 122
open_issues: 2
created: 2026-03-22
pushed_at: 2026-03-28
first_seen: 2026-03-28
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "AI 工具"
release_tag: "v1.1.6"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-28
use_case: "提供一個完整的 AI 編碼工作站，整合 Claude Code、網頁 UI 及多種 AI CLI 工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-05"
contributor_count: 2
engagement: "medium"
issue_close_rate: 80
repo_size_kb: 1753
readme_length: 9996
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-28"
star_history: "2026-03-28:969,2026-03-28:970,2026-03-29:1187,2026-03-29:1187"
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
  - "提供一個完整的 AI 編碼工作站，整合 Claude Code、網頁 UI 及多種 AI CLI 工具。"
---

# HolyClaude

**1.2k** stars · **170** stars/天 · 建立 7 天前 · Dockerfile · MIT

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

`v1.1.6` `easy-install`

`ai` `ai-coding` `anthropic` `claude` `claude-code` `coding-agent` `container` `developer-tools` `devtools` `docker` `docker-compose` `gemini` `headless-browser` `openai` `playwright`

> [!summary] 一句話摘要
> 提供一個完整的 AI 編碼工作站，整合 Claude Code、網頁 UI 及多種 AI CLI 工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (170 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要快速搭建 AI 開發環境的開發者，特別是那些不想花時間在環境配置上的團隊。
> **一句話重點** HolyClaude 讓開發者能夠在幾秒鐘內啟動完整的 AI 開發環境，顯著提高了開發效率。

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
> **結論** 花 2 小時學習，1 小時整合，得到快速搭建的 AI 開發環境，值得一試。

> [!abstract] 核心創新
> HolyClaude 是一個完整的 AI 開發工作站，將多種工具和服務整合在一個容器中，簡化了開發者的設置流程。

## 專案簡介

HolyClaude 是一個容器化的 AI 編碼工作站，讓開發者能夠快速啟動 Claude Code 和多種 AI CLI 工具。用戶只需執行 `docker compose up -d`，便可在 30 秒內啟動整個環境，省去手動安裝和配置的繁瑣過程。這個工具的設計理念是解決常見的 Docker 配置問題，如 Chromium 啟動失敗和權限錯誤，並提供一個穩定的開發環境。HolyClaude 預裝了 50 多種開發工具，並支持多種平台，包括 Linux、macOS 和 Windows。這樣的設計使得開發者可以專注於編碼，而不是環境配置。

與其他工具相比，如手動安裝 Claude Code，HolyClaude 的優勢在於其快速部署和即時可用性，能夠減少設置時間和潛在的錯誤。實際使用中，HolyClaude 的性能表現穩定，並且能夠在多種架構上運行，適合需要快速開發和測試的團隊。這個專案目前處於穩定狀態，並且有活躍的社群支持，能夠快速解決使用者的問題。未來幾個月內，預期會持續更新和增強功能，特別是在多架構支持和工具整合方面。適合需要快速搭建 AI 開發環境的開發者，尤其是那些不想花時間在環境配置上的團隊。

**技術棧**：`Docker` · `Python` · `Shell`

## 重點功能

- 快速啟動 — 只需執行 `docker compose up -d` 即可啟動整個環境。
- 多平台支持 — 支援 Linux、macOS 和 Windows，適合各種開發環境。
- 預裝 50+ 開發工具 — 包含 TypeScript、Python 和多種 CLI 工具，無需手動安裝。
- 自動更新 — 透過 `docker pull && docker compose up -d` 方便地更新所有工具。
- 完整的 AI CLI 支持 — 包含 Claude Code、OpenAI Codex 等多種 AI CLI 工具，無需額外配置。

## 快速開始

1. 創建 HolyClaude 資料夾
```bash
mkdir holyclaude && cd holyclaude
```
2. 創建 docker-compose.yaml 文件
```bash
# 複製模板到 docker-compose.yaml
```
3. 拉取並啟動服務
```bash
docker compose up -d
```
4. 打開網頁 UI
```bash
http://localhost:3001
```
5. 創建 CloudCLI 帳號並登入
```bash
# 在網頁 UI 中進行操作
```

## 程式碼範例

```dockerfile
{
  "前置條件": "已安裝 Docker 和 Docker Compose",
  "指令": "docker compose up -d",
  "預期輸出": "啟動 HolyClaude 環境，並在瀏覽器中訪問 http://localhost:3001"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1187 stars（169.57/天），forks 122（10.3%），顯示出穩定的增長。這個專案的作者 CoderLuii 之前有其他開源專案，顯示出其在開源社群中的活躍度。HolyClaude 解決了開發者在設置 AI 開發環境時的繁瑣流程，提供了一個即開即用的解決方案，這在目前的開發環境中是相對稀缺的。社群的反饋和問題解決速度也顯示出這個專案的潛力和需求。這樣的設計和功能正好符合當前開發者對於快速部署和高效工作的需求。

## 適合誰使用

**目標受眾**：需要快速搭建 AI 開發環境的開發者，特別是那些不想花時間在環境配置上的團隊。

> [!example] 使用場景
> - 後端工程師用它來快速搭建 AI 開發環境，因為只需執行一條指令便能啟動完整的工作站，節省了大量的設置時間。
> - 全端工程師用它來整合多種 AI CLI 工具，因為 HolyClaude 預裝了 50 多種開發工具，無需手動安裝，提升了開發效率。
> - DevOps 工程師用它來測試和部署 AI 應用，因為其容器化設計使得在不同環境中保持一致性變得簡單。

## 架構分析

HolyClaude 採用 Docker 容器化架構，將所有工具和服務整合在一個容器中，這樣的設計使得用戶無需擔心環境配置和依賴問題。資料流方面，使用者透過網頁 UI 進行操作，所有請求都經由 Claude Code CLI 處理，並且支援多種 AI CLI 工具。這樣的架構使得開發者能夠快速搭建和測試 AI 應用，並且能夠在不同平台上保持一致性。選擇 Docker 的原因是其便於管理和部署，代價則是需要用戶具備基本的 Docker 知識。擴展性方面，HolyClaude 支持多架構運行，但在某些環境下可能需要額外配置以確保性能最佳化。

## 技術深入分析

HolyClaude 的核心技術機制是基於 Docker 容器化架構，將多種開發工具和服務整合在一個容器中，這樣的設計使得用戶無需擔心環境配置和依賴問題。效能上，HolyClaude 能夠在多種平台上運行，包括 Linux、macOS 和 Windows，並且支持多架構運行。由於使用了 Docker，這個工具的冷啟動時間相對較短，並且能夠在不同環境中保持一致性。選擇 Docker 的原因是其便於管理和部署，代價則是需要用戶具備基本的 Docker 知識。技術風險方面，HolyClaude 依賴於 Docker 的穩定性和性能，若 Docker 環境出現問題，可能會影響整體運行。整合方面，HolyClaude 能夠輕鬆與現有的開發工具鏈結合，並且支持 CI/CD 流程，這使得開發者能夠快速部署和測試 AI 應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程順暢，無需複雜的配置。提供了良好的入門指南，幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 快速啟動，節省設置時間。
> - 預裝多種開發工具，提升開發效率。
> - 支持多平台，適合不同開發環境。

> [!danger] 缺點
> - 需要 Docker 環境，對新手有學習曲線。
> - 在某些 NAS 環境下可能需要額外配置。
> - 不支持 OpenAI API 密鑰，限制了某些用戶的選擇。

> [!warning] 注意事項
> - 需要 Docker 環境，對於不熟悉 Docker 的用戶可能有學習曲線。
> - 在某些 NAS 環境下可能需要額外配置，特別是對於共享存儲的支持。
> - 不支持 OpenAI API 密鑰，僅限於 Anthropic 的服務。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的容器化工具，但專注於數據同步，而 HolyClaude 專注於 AI 開發環境。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，而 HolyClaude 更加注重開發效率和工具整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和備份，而 HolyClaude 專注於 AI 開發環境的快速搭建。 | 如果你的需求主要是數據同步而非開發環境，則 AlpinDale/parsync 更適合。 | medium，因為需要重新配置數據流和同步邏輯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，而 HolyClaude 更加注重開發效率和工具整合。 | 如果你的專案需要強調安全性和隱私，則 BigBodyCobain/Shadowbroker 是更好的選擇。 | high，因為需要重構整個開發環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HolyClaude** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和備份，而 HolyClaude 專注於 AI 開發環境的快速搭建。 | 專注於安全性和隱私保護，而 HolyClaude 更加注重開發效率和工具整合。 |
> | 遷移成本 | - | medium，因為需要重新配置數據流和同步邏輯。 | high，因為需要重構整個開發環境。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步而非開發環境，則 AlpinDal | 如果你的專案需要強調安全性和隱私，則 BigBodyCoba |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 NAS 環境下，可能需要額外配置以支持共享存儲。
  - 解法：使用 `CHOKIDAR_USEPOLLING=true` 環境變數。
- [MEDIUM] Docker 環境中的權限問題可能導致某些工具無法正常運行。
  - 解法：確保 Docker 容器的 UID 和 GID 與主機一致。
- [MEDIUM] 在某些平台上，Chromium 可能無法啟動。
  - 解法：檢查 Docker 的共享內存配置，並適當調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創公司開發 AI 應用 | 非常適合 | 快速搭建環境，節省時間和資源。 |
| 大型企業的 AI 開發團隊 | 普通 | 雖然功能強大，但可能需要更多的定制化配置。 |
| 個人開發者進行 AI 實驗 | 非常適合 | 快速啟動和簡單使用，適合快速迭代。 |
| 需要高安全性的金融應用開發 | 不適合 | 目前對安全性的考量不足，可能不符合要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速搭建的 AI 開發環境，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> HolyClaude 本身不需要高權限，但需要 Docker 環境，這可能涉及到對系統的管理權限。它不會存取敏感資料，所有憑證都存儲在本地綁定的卷中，安全性較高。

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
| Forks | 122 |
| Open Issues | 2 |
| Issue 解決率 | 80% (8 closed) |
| 最後推送 | 2026-03-28 |
| 建立日期 | 2026-03-22 |
| 官方網站 | [Link](https://holyclaude.coderluii.dev) |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CoderLuii/HolyClaude) |
| Topics | `ai` `ai-coding` `anthropic` `claude` `claude-code` `coding-agent` `container` `developer-tools` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Dockerfile" : 60
>     "Shell" : 30
>     "Python" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@CoderLuii](https://github.com/CoderLuii) | 9 |
> | [@Sunwood-ai-labs](https://github.com/Sunwood-ai-labs) | 1 |

**最新版本**：v1.1.6 (2026-03-28)

> [!info]- Release Notes
> ## 03/28/2026
> 
> ### Fixed
> - Codex CLI `apply_patch` failing on Synology NAS and other hosts with restricted user namespaces (bubblewrap sandbox now works via setuid fallback)
> - Corrected documentation that incorrectly stated ChatGPT Plus/Pro subscriptions do not work with Codex CLI (they do, via `codex login --device-auth`)
> 
> Thanks to @tchirou for reporting the bubblewrap issue and suggesting the fix.

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達 80%。
**連結**：[文件](https://github.com/CoderLuii/HolyClaude)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-22 ~ 2026-03-28）
> **活躍天數** 4 天 · **最新 commit** v1.1.6

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/CoderLuii/HolyClaude/issues/17) | Notification support for Codex CLI (and other AI CLIs) `enhancement` | 0 | 0 |
> | [#16](https://github.com/CoderLuii/HolyClaude/issues/16) | Codex CLI: bubblewrap (bwrap) sandbox fails on Synology NAS  `bug` | 0 | 13 |

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
> One command. Full AI development workstation. Claude Code, web UI, headless browser, 7 AI CLIs, 50+ dev tools — containerized and ready.
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
> | **AI CLIs** | 7 providers, one container | Install each one separately across 3 package managers |
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
> | :llama: | [Using Ollama](#llama-using-ollama) |
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
> | :scroll: | [Third-Party Software](#scroll-third-party-software) |
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
> | **Anthropic API key** | Paste your API key in the web UI | Pay-per-use, same Anthr

## 延伸閱讀

相關概念：[[容器化]] · [[CI/CD]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

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
> const concepts = ["容器化","CI/CD","自動化測試"];
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

- [[2026-03-29|2026-03-29]] — 再次上榜，1.2k stars
- [[2026-03-28|2026-03-28]] — 首次收錄，969 stars
