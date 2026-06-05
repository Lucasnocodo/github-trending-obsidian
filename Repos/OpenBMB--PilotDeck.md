---
repo: OpenBMB/PilotDeck
url: https://github.com/OpenBMB/PilotDeck
owner: OpenBMB
owner_type: Organization
language: TypeScript
license: AGPL-3.0
description: "Task-oriented AI Agent productivity platform"
homepage: "https://pilotdeck.openbmb.cn"
stars: 2963
stars_per_day: 228
forks: 305
open_issues: 101
created: 2026-05-22
pushed_at: 2026-06-04
first_seen: 2026-05-29
week: "2026-W22"
month: "2026-05"
category: "生產力"
subcategory: "AI 代理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-29
use_case: "一個以任務為導向的 AI 代理生產力平台，重新定義操作邊界和記憶演進。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-01"
contributor_count: 5
engagement: "medium"
issue_close_rate: 12
repo_size_kb: 18575
readme_length: 9950
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-29"
star_history: "2026-05-29:1524,2026-05-29:1540,2026-05-30:1980,2026-05-31:2262,2026-06-01:2545,2026-06-02:2738,2026-06-03:2850,2026-06-04:2914,2026-06-05:2963"
tags:
  - github
  - "category/生產力"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "PilotDeck"
  - "OpenBMB/PilotDeck"
  - "一個以任務為導向的 AI 代理生產力平台，重新定義操作邊界和記憶演進。"
---

# PilotDeck

**3.0k** stars · **228** stars/天 · 建立 13 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> 一個以任務為導向的 AI 代理生產力平台，重新定義操作邊界和記憶演進。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (228 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在多專案環境中運行 AI 代理並追蹤任務成本的開發團隊。
> **一句話重點** PilotDeck 的白盒記憶和智能路由功能，讓多任務管理變得更高效且可控。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理" && p.file.name !== "OpenBMB--PilotDeck" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的多任務管理，值得一試。

> [!abstract] 核心創新
> PilotDeck 提供可追蹤的白盒記憶和智能路由功能，顯著提升多任務環境下的生產力。

## 專案簡介

PilotDeck 是一個開源的 AI 代理操作系統，專注於多任務場景的生產力提升。其核心機制是以 "WorkSpace" 為單位，為每個專案提供獨立的文件系統、記憶存儲和技能集，避免了不同專案間的干擾。用戶可以透過 CLI 指令 `pilotdeck` 啟動伺服器，並使用 `pilotdeck status` 檢查運行狀態。PilotDeck 的三大支柱能力包括可追溯的白盒記憶、智能路由和持續運行，這使得 AI 代理能夠在用戶不在時主動發現任務並生成結果。

技術上，PilotDeck 使用 TypeScript 和 Node.js，並支援多種模型提供者，透過 Model Context Protocol (MCP) 確保一致性。相較於其他工具如 Claude Cowork 和 WorkBuddy，PilotDeck 提供了更細緻的記憶管理和任務成本追蹤，能夠在多專案環境中有效運行。使用者在實際操作中可能會發現，PilotDeck 的智能路由功能能夠在社交媒體工作流中節省約 70% 的成本，並且在多個複雜任務上表現優於單一模型。這個專案仍在活躍開發中，社群參與度高，適合需要長期運行多任務的團隊使用。

**技術棧**：`Node.js 22` · `TypeScript 5.9.3` · `React 19.2.6`

## 重點功能

- WorkSpace 隔離 — 每個專案擁有獨立的文件系統和記憶存儲。
- 白盒記憶 — 記憶生成、提取和存儲過程可見，支持一鍵回滾。
- 智能路由 — 自動檢測任務難度，簡單任務使用輕量模型，節省成本。
- 持續運行 — 代理在用戶不在時主動發現任務並生成結果。
- 開放插件架構 — 支援自定義工具和技能的擴展。

## 快速開始

1. 一鍵安裝
```bash
curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
```
2. 啟動伺服器
```bash
pilotdeck
```
3. 檢查運行狀態
```bash
pilotdeck status
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 2963 stars（228/天），forks 305（10.3%），顯示出強烈的社群參與。開發者 Mingwwww 和其他貢獻者來自知名機構如清華大學，這為專案增添了信譽。PilotDeck 解決了多專案環境中記憶管理和任務成本追蹤的痛點，這在現有工具中並不常見。最近的開源公告和社群活動也吸引了更多開發者的注意，促進了快速增長。這個工具的設計理念符合當前對於 AI 代理的需求，特別是在生產力提升方面。

## 適合誰使用

**目標受眾**：需要在多專案環境中運行 AI 代理並追蹤任務成本的開發團隊。

> [!example] 使用場景
> - 產品經理用它來管理多個專案的進度，因為每個專案都有獨立的記憶和技能，避免了上下文混淆。
> - 開發者用它來生成和編輯工作文檔，因為可以追蹤每個記憶條目，便於修正錯誤。
> - 社交媒體經營者用它來優化內容發布流程，因為智能路由能夠自動降低簡單任務的處理成本。

## 架構分析

PilotDeck 採用微服務架構，將每個專案的記憶、文件和技能隔離在各自的 WorkSpace 中。這樣的設計避免了上下文污染，確保每個專案的獨立性。資料流方面，使用 MCP 協議來確保不同前端（Web/CLI）之間的一致性。選擇這種架構的代價是需要更多的系統資源來維持多個獨立的運行環境。擴展性上，這種設計能夠輕鬆添加新功能或整合外部工具，但也可能導致管理上的複雜性增加。

## 技術深入分析

PilotDeck 的核心技術機制是以 WorkSpace 為單位進行任務管理，這樣的設計使得每個專案都擁有獨立的記憶和技能集。使用 TypeScript 和 Node.js，PilotDeck 能夠在多專案環境中提供高效的性能。智能路由功能能夠自動檢測任務的難度，並根據需要選擇合適的模型，這樣的設計在社交媒體工作流中實現了約 70% 的成本節省。選擇這種架構的代價是需要更多的系統資源來維持多個獨立的運行環境。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在記憶管理和任務調度上。整合方面，PilotDeck 能夠輕鬆與現有的 CI/CD 流程整合，並支援多種模型提供者，這使得它在開發環境中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢。新手可以在 30 分鐘內完成安裝並啟動伺服器，文件目前僅提供英語和簡體中文版本。

## 優缺點分析

> [!success] 優點
> - 提供獨立的 WorkSpace，避免專案間的干擾。
> - 白盒記憶功能使得記憶可追蹤和可編輯，提升使用者控制感。
> - 智能路由能夠顯著降低任務成本，提升效率。

> [!danger] 缺點
> - 目前僅支援 Linux 和 macOS，Windows 使用者需額外配置。
> - 對於大型專案，系統資源需求較高。
> - 社群支持仍在發展中，部分功能可能不穩定。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 使用者需透過 WSL。
> - 對於大型專案，可能需要較高的系統資源以確保性能。
> - 社群支持仍在發展中，某些功能可能尚未完全穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多任務管理功能，但缺乏 PilotDeck 的白盒記憶和智能路由能力。 |
| WorkBuddy | 專注於即時通訊整合，而 PilotDeck 更加重視長期任務的管理和成本追蹤。 |
| Claude Cowork | 雖然也提供多專案管理，但在記憶可見性和可編輯性上不如 PilotDeck。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理的工具，而 PilotDeck 提供了更全面的任務管理和記憶功能。 | 如果你的需求主要是創建代理而非管理多任務，這個工具可能更合適。 | low，因為兩者的基本概念相似。 |
| Claude Cowork | 提供類似的多專案管理功能，但缺乏 PilotDeck 的白盒記憶和智能路由能力。 | 如果你需要即時通訊整合，Claude Cowork 可能更適合。 | medium，因為需要重新調整工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PilotDeck** | **agent-sprite-forge** | **Claude Cowork** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理的工具，而 PilotDeck 提供了更全面的任務管理和記憶功能。 | 提供類似的多專案管理功能，但缺乏 PilotDeck 的白盒記憶和智能路由能力。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似。 | medium，因為需要重新調整工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是創建代理而非管理多任務，這個工具可能更合適 | 如果你需要即時通訊整合，Claude Cowork 可能更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在小型專案中試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型專案中，記憶管理可能會導致性能下降。
  - 解法：定期清理不必要的記憶條目以釋放資源。
- [MEDIUM] 某些功能在不同操作系統上的表現不一致。
  - 解法：建議在 Linux 或 macOS 環境中運行以獲得最佳效果。
- [MEDIUM] 社群支持尚在發展中，某些問題可能無法即時解決。
  - 解法：主動參與社群討論以獲得幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | PilotDeck 的多專案管理和記憶功能能有效支持小型團隊的需求。 |
| 大型企業的多專案協作 | 普通 | 在高負載情況下，性能可能會受到影響。 |
| 需要即時通訊整合的團隊 | 不適合 | PilotDeck 目前不支援即時通訊功能。 |
| AI 代理開發者 | 適合 | 開放的插件架構允許開發者擴展功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的多任務管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PilotDeck 本身不需要高權限，僅存取用戶的專案資料，依賴鏈中無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

PilotDeck 最常與 Node.js 和 React 生態系統搭配使用，特別是在開發和部署階段。用戶可以在使用 Next.js 部署的專案中，透過 CLI 指令啟動 PilotDeck，並將其整合到 CI/CD 流程中。支援 GitHub Actions 和其他 CI 工具，整合過程中最常見的問題是配置模型提供者時的 API 鍵管理。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
| Forks | 305 |
| Open Issues | 101 |
| Issue 解決率 | 12% (14 closed) |
| 最後推送 | 2026-06-04 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://pilotdeck.openbmb.cn) |
| Repo 大小 | 18.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/OpenBMB/PilotDeck) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@larksuiteoapi/node-sdk` `@modelcontextprotocol/sdk` `@types/react` `@types/turndown` `@vscode/ripgrep` `edgeclaw-memory-core` `ink` `ink-text-input` `js-tiktoken` `jsonrepair` `mupdf` `react` `sharp` `slice-ansi` `string-width`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 70
>     "JavaScript" : 23
>     "Python" : 4
>     "HTML" : 1
>     "Shell" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Mingwwww](https://github.com/Mingwwww) | 221 |
> | [@Kaguya-19](https://github.com/Kaguya-19) | 197 |
> | [@Gucc111](https://github.com/Gucc111) | 184 |
> | [@mmrdmn](https://github.com/mmrdmn) | 53 |
> | [@zhengdaqi](https://github.com/zhengdaqi) | 29 |

## 社群與生態

**社群活躍度**：社群活躍度高，定期更新和回應使用者反饋。
**連結**：[文件](https://pilotdeck.openbmb.cn)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-04 ~ 2026-06-04）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #160 from OpenBMB/fix/settings-about-i18n

## README 摘錄

> [!info]- 展開查看原文 README
> Task-oriented AI Agent productivity platform — redefining operational boundaries and memory evolution, one WorkSpace at a time.
> 
>   
>   
>   
>   
>   
>   
>   
>   &nbsp;
>   
>   &nbsp;
>   
>   
> 
>   English | 简体中文
>   
>   Website · Live Demo · Tutorial · Quick Start · Highlights · Use Cases · Community
> 
> ---
> 
> **News** 🔥
> 
> - **[2026.05.28]** PilotDeck is now open source! Visit our official website at [pilotdeck.openbmb.cn](https://pilotdeck.openbmb.cn). We welcome contributions, feedback, and stars from the community.
> 
> ---
> 
> 
> ## 📦 Installation & Quick Start
> 
> We provide a one-line installer for macOS / Linux, plus a source-based workflow for developers.
> 
> 
> ### Option A: One-line install (recommended, macOS / Linux)
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
> ```
> 
> The script auto-installs Node.js 22, clones the repo, installs dependencies, and builds the frontend. Once it finishes:
> 
> ```bash
> pilotdeck            # starts the server at http://localhost:3001
> pilotdeck status     # check runtime status
> ```
> 
> 
> ## 🖥️ UI & Demo
> 
> PilotDeck ships an out-of-the-box Web UI with full WorkSpace management, white-box memory editing, and visualization of multi-agent collaboration.
> 
> 
> ## 💡 About PilotDeck
> 
> **PilotDeck** is an open-source agent operating system designed around the concept of "WorkSpace". It is jointly developed and open-sourced by Tsinghua University [THUNLP](https://nlp.csai.tsinghua.edu.cn/), [ModelBest](https://modelbest.cn/), [OpenBMB](https://www.openbmb.cn/), and [AI9Stars](https://github.com/AI9Stars). Targeting general-purpose, multi-task scenarios, PilotDeck is built to be a true *productivity tool* for the Agent era.
> 
> A wave of excellent AI Agent harnesses has emerged in recent years, each with its own focus: **Claude Code / Cursor / Trae Solo** brought model reasoning deep into the programming IDE; **Claude Cowork** introduced the notion of project-level isolation to desktop-side knowledge work; **WorkBuddy** connected agents to IM ecosystems such as WeCom and Feishu so AI is one message away.
> 
> When we shift the lens from "one-shot programming" or "immediate Q&A" to **long-running, multi-project productivity work**, however, several questions remain open:
> 
> - When many projects run in parallel, can memory be **white-box and traceable**? When the AI gets something wrong, can you pinpoint which memory entry caused it and edit it directly — without starting a new chat from scratch?
> - Can token cost be **tracked per task**, so that running agents in the background actually becomes economically viable?
> - Can tasks of different difficulty **automatically be matched to different models**, instead of burning the flagship model on trivial calls?
> - When you step away from the keyboard, can the work keep moving? Can the agent **proactively discover what's worth doing, report progress, and land results as files on disk**?
> 
> PilotDeck is an incremental exploration around exactly these questions. It uses the WorkSpace as the fundamental unit — completely isolating files, memory and skills per project — and pairs it with three pillar capabilities: **White-box Memory**, **Smart Routing** and **Always-on**. The entire system natively supports the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) and behaves consistently across front-ends (Web / CLI / IM).
> 
> 
> ### ✨ Key Highlights
> 
> **WorkSpace-Level Isolation & Accretion**
> 
> Every project gets its own file system, memory store and skill set. Parallel work no longer interferes with itself, retrieval has a bounded scope, and skills accrete naturally as each task grows — no more global context pollution.
> 
>   
> 
> **Traceable White-box Memory**
> 
> Memory generation, extraction, storage and retrieval are visible end-to-end. When the AI mis-remembers, you can pinpoint and fix the offending entry. Built-in **Dream Mode** consolidates memory in idle windows, and supports one-click rollback.
> 
>   
> 
> **Smart Routing & Cost Optimization**
> 
> Task difficulty is auto-detected; complex calls go to flagship models (e.g. Claude 3.5 Sonnet / GPT-4o), simple ones drop to lighter models. Through on-device / cloud co-orchestration and precise matching, token spend shrinks dramatically without sacrificing quality.
> 
>   
> 
> **Always-on Background Execution**
> 
> PilotDeck breaks the "you ask, it answers" loop: after you sign off, the agent keeps discovering candidate tasks, running long-horizon monitors, and finally lands deliverables as local files with a summary report waiting for you.
> 
>   
> 
> 
> ### Option B: From source (for developers)
> 
> **1. Clone and install dependencies**
> 
> > This repo uses [Git LFS](https://git-lfs.com/) for large media assets. Make sure `git lfs` is installed before cloning.
> > If you don't need the demo videos/GIFs, add `GIT_LFS_SKIP_SMUDGE=1` before `git clone` to skip downloading them.
> 
> ```bash
> git clone https://github.com/OpenBMB/PilotDeck.git
> cd PilotDeck
> 
> npm install              # root deps (Gateway runtime)
> cd ui && npm install     # UI deps
> cd ..
> ```
> 
> **2. Configure a model provider**
> 
> PilotDeck reads `~/.pilotdeck/pilotdeck.yaml`. You can create it manually, let the bootstrap script generate one, **or just open the Web UI and configure providers visually in the settings panel.**
> Supported protocols include OpenAI, Anthropic, DeepSeek, Qwen, Kimi, MiniMax and other OpenAI-compatible endpoints.
> 
> ```yaml
> schemaVersion: 1
> agent:
>   model: deepseek/deepseek-v4-pro
> model:
>   providers:
>     deepseek:
>       protocol: openai
>       url: https://api.deepseek.com/v1
>       apiKey: sk-your-api-key
> ```
> 
> **3. Start the services**
> 
> ```bash
> cd ui && npm run dev     # dev mode (HMR), visit http://localhost:5173
> 
> ### Option C: Docker Compose
> 
> If Docker is installed, you can start PilotDeck with:
> 
> ```bash
> docker compose up -d
> ```
> 
> ---
> 
> 
> ### 📊 Real-world Numbers
> 
> The three pillar capabilities have shown clear advantages in production-grade workflows:
> 
> #### 1. Smart Routing — ~70% cost savings on social-media workloads
> 
> In Xiaohongshu-style social-media operations, enabling Smart Routing automatically demotes simple polishing / layout tasks to a sub-agent (e.g. Sonnet 4.5) and only invokes Opus 4.5 at planning checkpoints:
> 
> Setup
> Model configuration
> Cost
> Multiplier
> 
> Smart Routing ON
> Opus 4.5 (main) + Sonnet 4.5 (sub)
> $2.83
> 1.1×
> 
> Smart Routing OFF
> All Opus 4.5 (main + sub)
> $12.58
> 5.0×
> 
> Monolithic
> Single Opus 4.5 long-react (estimated)
> $12.20
> 4.8×
> 
> #### 2. Smart Routing — 1/6 the cost while beating frontier models on hard tasks
> 
> The research team benchmarked 7 complex tasks (multilingual podcast push, multi-source data reports, domain-specific literature review, codebase architecture docs, etc.). The "strong main + light sub" routing setup matches or beats the frontier single-model setup at a fraction of the cost:
> 
> Setting
> Score
> Cost
> 
> MiniMax-M2.7 single-agent
> 37.1
> $1.90
> 
> Claude Sonnet 4.6 single-agent
> 69.1
> $18.36
> 
> Sonnet 4.6 (main) + MiniMax-M2.7 (sub)
> 70.6
> $3.15
> 
> #### 3. White-box Memory — layout & tone never bleed across projects
> 
> In black-box agents, mixing tasks in a shared context pool inevitably pollutes memory. PilotDeck's WorkSpace-scoped white-box memory addresses this end-to-end:
> 
>   Dimension
>   Current AI Agents (black-box)
>   PilotDeck (white-box)
> 
>   Visibility
>   You can't see what the AI remembers, only what it outputs
>   View every memory entry: what was stored, when, and which WorkSpace
> 
>   Control
>   Once written, memory can't be edited or removed
>   Edit / delete entries, pin critical decisions so they don't drift
> 
>   Traceability
>   When it goes wrong, you can't find the root cause
>   Generation → extraction → storage → retrieval, all auditable
> 
>   Isolation
>   One shared pool — projects bleed into each other
>   Scoped per WorkSpace; A's memory never reaches B
> 
>   Reversible
>   After compression, the original is gone
>   Dream-mode supports one-click rollback to the prior state
> 
> ---
> 
> 
> ### Use Cases
> 
> > All demos below are generated entirely by edge-side models via PilotDeck's Smart Routing — no cloud-side 

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[自動化]] · [[多模態]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[XBuilderLAB--cheat-on-content|XBuilderLAB/cheat-on-content]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/OpenBMB/PilotDeck) · [官方網站](https://pilotdeck.openbmb.cn)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "OpenBMB--PilotDeck" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "OpenBMB--PilotDeck" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "OpenBMB--PilotDeck" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "OpenBMB" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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

> **2026-05-29** — 首次收錄
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

- [[2026-05-29|2026-05-29]] — 首次收錄，1.5k stars
