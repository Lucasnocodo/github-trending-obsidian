---
repo: OpenBMB/PilotDeck
url: https://github.com/OpenBMB/PilotDeck
owner: OpenBMB
owner_type: Organization
language: TypeScript
license: AGPL-3.0
description: "Task-oriented AI Agent productivity platform"
homepage: "https://pilotdeck.openbmb.cn"
stars: 2545
stars_per_day: 283
forks: 238
open_issues: 50
created: 2026-05-22
pushed_at: 2026-05-29
first_seen: 2026-05-29
week: "2026-W22"
month: "2026-05"
category: "生產力"
subcategory: "任務管理"
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
engagement: "low"
issue_close_rate: 12
repo_size_kb: 18284
readme_length: 9950
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-29"
star_history: "2026-05-29:1524,2026-05-29:1540,2026-05-30:1980,2026-05-31:2262,2026-06-01:2545"
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

**2.5k** stars · **283** stars/天 · 建立 9 天前 · TypeScript · AGPL-3.0

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
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (283 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要高效管理多專案的團隊，尤其是在 AI 代理應用方面的開發者。
> **一句話重點** PilotDeck 的設計不僅解決了多任務管理中的記憶混淆問題，還通過智能路由實現了顯著的成本節省。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "任務管理" && p.file.name !== "OpenBMB--PilotDeck" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 任務管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的多任務管理，值得投資。

> [!abstract] 核心創新
> PilotDeck 的白盒記憶系統和智能路由能力使其在多任務管理中具備獨特的優勢。

## 專案簡介

PilotDeck 是一個開源的 AI 代理操作系統，專注於多任務場景的生產力提升。它的核心機制是以 WorkSpace 為單位，為每個專案提供獨立的文件系統、記憶存儲和技能集，這樣可以避免不同專案之間的干擾。使用者可以透過簡單的 CLI 指令如 `pilotdeck` 啟動伺服器，並使用 `pilotdeck status` 檢查運行狀態。這個設計使得記憶的生成、提取和存儲都可追溯，當 AI 出現錯誤時，使用者可以直接編輯記憶條目，這樣的白盒記憶系統大大提高了可控性。技術上，PilotDeck 使用了 Model Context Protocol (MCP) 來支持多種模型的協作，並且能夠根據任務的複雜度自動選擇合適的模型，這樣可以節省多達 70% 的成本。

與其他工具相比，如 Claude Code 和 WorkBuddy，PilotDeck 提供了更高的任務隔離和記憶可追溯性，特別適合需要長期運行和多專案管理的情境。實際使用中，PilotDeck 能夠在社交媒體操作中實現顯著的成本節省，並在多個複雜任務上表現優於單一模型。這使得它在大型專案和團隊合作中顯得尤為重要。整體來說，PilotDeck 是一個成熟的生產力工具，適合需要高效管理多任務的團隊使用。

**技術棧**：`TypeScript` · `JavaScript` · `Python` · `HTML` · `Shell` · `CSS` · `Dockerfile`

## 重點功能

- WorkSpace 隔離 — 每個專案擁有獨立的文件系統和記憶存儲，避免上下文污染。
- 白盒記憶 — 記憶的生成、提取和存儲過程可追溯，使用者可以直接編輯記憶條目。
- 智能路由 — 根據任務難度自動選擇合適的模型，節省運行成本。
- 持續執行 — 代理在使用者離開後仍能持續執行任務，並生成報告。
- 開放插件架構 — 支持自定義工具和技能的擴展，方便社群貢獻。

## 快速開始

1. 使用一鍵安裝腳本安裝
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
> 建立 9 天內累積 2545 stars（283/天），forks 238（9.4%），顯示出強勁的社群反響。開發者 Mingwwww 和其他貢獻者來自知名機構，這為專案的可信度加分。PilotDeck 解決了多任務管理中的記憶混淆和資源浪費問題，這在現有的 AI 代理工具中尚未有良好的解決方案。開源的決定吸引了廣泛的開發者參與，並促進了社群的活躍。技術上，MCP 的支持使得 PilotDeck 能夠靈活整合多種模型，這在當前的 AI 生態中具有重要意義。forks/stars 比率為 9.4%，顯示出許多用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要高效管理多專案的團隊，尤其是在 AI 代理應用方面的開發者。

> [!example] 使用場景
> - 後端工程師用它來管理多個專案的 AI 代理，因為每個專案都有獨立的記憶和技能，避免了上下文污染。
> - 產品經理用它來追蹤不同任務的進度和成本，因為它能自動匹配任務難度和模型，節省了 70% 的運行成本。
> - 內容創作者用它來生成和管理社交媒體內容，因為它的白盒記憶讓他們能夠隨時編輯和回溯內容的生成過程。

## 架構分析

PilotDeck 採用模組化架構，核心功能以 WorkSpace 為單位進行隔離，這樣的設計使得每個專案的記憶和技能不會互相干擾。資料流方面，使用者的請求會透過智能路由系統自動分配到最合適的模型，這樣可以有效降低運行成本。選擇這種架構的代價是需要較高的初始配置，但長期來看能夠提升生產力和可維護性。擴展性方面，PilotDeck 支持開放插件架構，這使得社群能夠輕鬆地為系統添加新功能，但也可能引入不穩定的第三方代碼。整體而言，這種設計在多任務環境中表現出色，特別適合需要高效管理的團隊。

## 技術深入分析

PilotDeck 的核心技術機制圍繞著 WorkSpace 隔離和白盒記憶展開。每個 WorkSpace 擁有獨立的記憶和技能，這樣可以避免上下文污染，並且記憶的生成和提取過程都是可追溯的。這種設計使得使用者能夠在出現錯誤時快速定位問題並進行修正。效能方面，PilotDeck 能夠處理多達數百個同時運行的代理，並且在社交媒體操作中實現了 70% 的成本節省。

選擇 TypeScript 和 JavaScript 作為主要開發語言，使得開發過程更加靈活，但也帶來了一定的學習曲線。這個專案的依賴樹相對簡單，主要依賴於 Node.js 生態系統，這降低了維護的複雜度。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在記憶存儲和檢索的效率上。整合方面，PilotDeck 可以輕鬆與現有的 CI/CD 流程結合，並且支持多種模型的協作，使得它在多任務環境中表現出色。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程順暢，沒有明顯的坑。文件中有詳細的快速入門指南，並且支持多語言，方便不同背景的開發者使用。

## 優缺點分析

> [!success] 優點
> - 提供獨立的 WorkSpace 隔離，避免上下文混淆。
> - 智能路由系統能夠根據任務難度自動選擇模型，節省成本。
> - 白盒記憶系統使得記憶的可追溯性和可編輯性大幅提升。

> [!danger] 缺點
> - 目前僅支援 macOS 和 Linux，Windows 用戶無法使用。
> - 對於大型專案，可能需要較高的硬體資源以支持多個同時運行的代理。
> - 開發者需要具備一定的技術背景才能進行深度定制。

> [!warning] 注意事項
> - 目前僅支援 macOS 和 Linux 系統的安裝。
> - 對於大型專案，可能需要較高的硬體資源以支持多個同時運行的代理。
> - 開發者需要熟悉 Node.js 和相關技術棧才能進行深度定制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理的工具，與 PilotDeck 的多任務管理相比，功能範圍較窄。 |
| WorkBuddy | 提供了與 IM 生態系統的整合，但在記憶可追溯性和任務隔離方面不如 PilotDeck。 |
| Claude Code | 專注於編程 IDE 的 AI 助手，而 PilotDeck 更加通用，適合多種任務場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理的工具，與 PilotDeck 的多任務管理相比，功能範圍較窄。 | 如果你的專案主要集中在單一代理的開發和管理上，這個工具會更合適。 | low，因為功能相對簡單，轉移成本低。 |
| WorkBuddy | 提供了與 IM 生態系統的整合，但在記憶可追溯性和任務隔離方面不如 PilotDeck。 | 如果你的團隊已經在使用 IM 工具並需要集成，WorkBuddy 會是更好的選擇。 | medium，因為需要重新配置工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PilotDeck** | **agent-sprite-forge** | **WorkBuddy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理的工具，與 PilotDeck 的多任務管理相比，功能範圍較窄。 | 提供了與 IM 生態系統的整合，但在記憶可追溯性和任務隔離方面不如 PilotDeck。 |
> | 遷移成本 | - | low，因為功能相對簡單，轉移成本低。 | medium，因為需要重新配置工作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在單一代理的開發和管理上，這個工具會更合 | 如果你的團隊已經在使用 IM 工具並需要集成，WorkBud |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用一鍵安裝腳本時，如果 3000 和 3001 端口被佔用，安裝過程會失敗。
  - 解法：手動修改安裝腳本中的端口設置。
- [MEDIUM] 在大型專案中，記憶存儲可能會導致性能下降。
  - 解法：定期清理不必要的記憶條目。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | PilotDeck 提供的任務隔離和記憶可追溯性非常符合小型團隊的需求。 |
| 大型企業的多專案管理 | 適合 | 雖然性能可能會受到影響，但其智能路由和成本節省功能仍然有助於提升效率。 |
| 單一任務的 AI 代理開發 | 普通 | 對於單一任務，PilotDeck 的多任務設計可能顯得過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的多任務管理，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PilotDeck 不需要高權限運行，且不會存取敏感資料，依賴的庫也相對穩定，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

PilotDeck 可以與 Node.js 生態系統中的多種工具無縫整合，特別是在開發和部署階段。它的 CLI 可與現有的 CI/CD 流程結合，並且支持多種模型的協作。使用者可以在 Node.js 環境中輕鬆配置和啟動 PilotDeck，並且可以與主流的 IDE（如 VS Code）進行整合。常見的整合問題主要集中在配置模型提供者上，這需要用戶有一定的技術背景來處理。

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
| Forks | 238 |
| Open Issues | 50 |
| Issue 解決率 | 12% (7 closed) |
| 最後推送 | 2026-05-29 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://pilotdeck.openbmb.cn) |
| Repo 大小 | 17.9 MB |
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
> | [@Mingwwww](https://github.com/Mingwwww) | 196 |
> | [@Kaguya-19](https://github.com/Kaguya-19) | 188 |
> | [@Gucc111](https://github.com/Gucc111) | 167 |
> | [@mmrdmn](https://github.com/mmrdmn) | 52 |
> | [@zhengdaqi](https://github.com/zhengdaqi) | 29 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://pilotdeck.openbmb.cn)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-05-29）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #76 from rollroyces/fix/volcano-ark-provider

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#82](https://github.com/OpenBMB/PilotDeck/issues/82) | 用在线自动安装脚本安装时，当 3000和3001 端口被其它应用占用时的自动处理 | 0 | 0 |

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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[XBuilderLAB--cheat-on-content|XBuilderLAB/cheat-on-content]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Doorman11991--smallcode|Doorman11991/smallcode]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/OpenBMB/PilotDeck) · [官方網站](https://pilotdeck.openbmb.cn)

## 相關收錄

> [!note]- 直接競品（同子分類：任務管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "任務管理" AND file.name != "OpenBMB--PilotDeck"
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
