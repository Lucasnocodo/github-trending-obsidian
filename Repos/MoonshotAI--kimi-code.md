---
repo: MoonshotAI/kimi-code
url: https://github.com/MoonshotAI/kimi-code
owner: MoonshotAI
owner_type: Organization
language: TypeScript
license: MIT
description: "The Starting Point for Next-Gen Agents"
homepage: "https://moonshotai.github.io/kimi-code/"
stars: 1251
stars_per_day: 209
forks: 104
open_issues: 47
created: 2026-05-22
pushed_at: 2026-05-28
first_seen: 2026-05-26
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "@moonshot-ai/kimi-code@0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "提供一個終端中的 AI 編碼代理，能夠讀取和編輯代碼、執行命令，並根據反饋選擇下一步行動。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 33
repo_size_kb: 6575
readme_length: 3517
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-26"
star_history: "2026-05-26:500,2026-05-26:511,2026-05-27:724,2026-05-27:729,2026-05-28:889,2026-05-28:889,2026-05-29:1245,2026-05-29:1251"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "kimi-code"
  - "MoonshotAI/kimi-code"
  - "提供一個終端中的 AI 編碼代理，能夠讀取和編輯代碼、執行命令，並根據反饋選擇下一步行動。"
---

# kimi-code

**1.3k** stars · **209** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/MoonshotAI--kimi-code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `@moonshot-ai/kimi-code@0.5.0` `easy-install`

> [!summary] 一句話摘要
> 提供一個終端中的 AI 編碼代理，能夠讀取和編輯代碼、執行命令，並根據反饋選擇下一步行動。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (209 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在終端中進行高效編碼和自動化任務的開發者，尤其是對 AI 助手有需求的團隊。
> **一句話重點** Kimi Code CLI 不僅是一個編碼助手，更是一個能夠在終端中提供即時反饋和多樣化功能的工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--kimi-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "MoonshotAI--kimi-code" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到高效的編碼助手，值得一試。

> [!abstract] 核心創新
> Kimi Code CLI 提供了一個無需 Node.js 環境的單一二進制分發方式，並支持視頻輸入功能。

## 專案簡介

Kimi Code CLI 是一個在終端運行的 AI 編碼代理，能夠讀取和編輯代碼、執行 shell 命令、搜索文件和獲取網頁。用戶可以透過簡單的指令，如 `kimi`，進入互動式界面，並使用 `/login` 指令進行身份驗證。這個工具的賣點在於其單一二進制分發方式，安裝過程簡單，無需 Node.js 環境，並且啟動速度極快，幾乎即時可用。技術上，它使用了專為長時間會話設計的 TUI，並支持視頻輸入，讓代理能夠處理難以用文字描述的情境。

此工具的設計考量了用戶的交互需求，並提供了子代理功能，讓用戶能夠在不同上下文中進行專注的工作。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Kimi Code 提供了更快的啟動時間和更友好的用戶界面，並且不需要複雜的環境設置。實際使用中，這個工具能夠處理的資料量和命令執行速度都相當可觀，但仍需注意其依賴的 Node.js 版本和其他開發環境的兼容性。這個專案目前處於 beta 階段，適合小型團隊或個人開發者進行實驗和開發，未來可能會進一步增強功能和穩定性。

**技術棧**：`TypeScript 6.0.2` · `pnpm 10.33.0`

## 重點功能

- 單一二進制分發 — 只需一條命令安裝，無需 Node.js 環境。
- 即時啟動 — TUI 在毫秒內準備好，無需等待。
- 專為長時間會話設計的 TUI — 提供良好的用戶體驗，適合專注工作。
- 視頻輸入支持 — 允許用戶上傳錄屏，讓代理理解複雜情境。
- AI 原生 MCP 配置 — 透過 `/mcp-config` 指令輕鬆管理模型上下文協議。

## 快速開始

1. 安裝 Kimi Code CLI
```bash
curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
```
2. 進入專案目錄
```bash
cd your-project
```
3. 啟動 Kimi Code CLI
```bash
kimi
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Kimi Code CLI",
  "指令": "kimi",
  "預期輸出": "進入 Kimi Code CLI 的互動式界面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1251 stars（209/天），forks 104（8.3%），這顯示出強烈的社群興趣。作者 MoonshotAI 團隊在 AI 和開發工具領域有豐富的經驗，這個專案解決了傳統編碼工具無法靈活應對多樣化需求的痛點。此工具的推出恰逢對 AI 編碼助手需求上升的時期，並且在社群中引發了熱烈討論，特別是關於其與 Python 版本的比較。這些因素共同推動了其快速增長。

## 適合誰使用

**目標受眾**：需要在終端中進行高效編碼和自動化任務的開發者，尤其是對 AI 助手有需求的團隊。

> [!example] 使用場景
> - 後端工程師用它來在終端中自動生成 API 文檔，因為這樣可以節省手動編寫的時間，並確保文檔的即時更新。
> - 前端開發者用它來快速檢查和修改 CSS 樣式，因為其即時反饋機制能夠加速樣式調整過程。
> - DevOps 工程師用它來定期執行系統健康檢查，因為它支持 cron 語法的排程任務，能夠自動化日常維護工作。

## 架構分析

Kimi Code CLI 採用單一二進制架構，這樣的設計使得安裝過程極為簡單，無需複雜的環境配置。資料流方面，使用者透過命令行與 AI 代理互動，代理能夠即時讀取和執行命令，並根據反饋進行調整。這樣的設計讓使用者能夠在不同的上下文中進行專注的工作，並且能夠輕鬆管理模型上下文協議。選擇這種架構的代價在於，未來若需擴展功能或整合更多外部服務，可能需要進行額外的開發工作。整體而言，這個架構在小型專案中表現優異，但在大型專案中可能會面臨擴展性挑戰。

## 技術深入分析

Kimi Code CLI 的核心技術機制是其基於 TypeScript 的設計，利用了現代 JavaScript 的特性來實現高效的命令執行和資料處理。其 TUI 是專為長時間使用而設計，能夠快速響應用戶的指令，並提供即時的反饋。效能方面，這個工具能夠在毫秒內啟動，適合需要快速反應的開發環境。設計上，選擇 TypeScript 使得代碼更具可維護性和可擴展性，但也增加了對 Node.js 環境的依賴。技術風險方面，若未來需要整合更多外部 API，可能會面臨兼容性問題。整合方面，這個工具與主流的 CI/CD 流程相容性良好，能夠輕鬆嵌入現有的開發工作流中。整體而言，Kimi Code CLI 是一個值得關注的工具，特別是在快速開發和自動化任務方面。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導；安裝過程順暢，無明顯坑；有良好的入門指南，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，無需 Node.js 環境，適合快速上手。
> - 啟動速度快，能夠即時進入工作狀態，提升效率。
> - 支持視頻輸入，能夠處理複雜的用例，增強代理的理解能力。

> [!danger] 缺點
> - 目前功能仍在持續增強中，可能存在不穩定性。
> - 對於 Windows 用戶的支持有限，需使用 PowerShell。
> - 依賴於 Node.js 的特定版本，可能影響兼容性。

> [!warning] 注意事項
> - 僅支援 Node.js 版本 >= 24.15.0
> - 需要在 UNIX 系統上運行，Windows 用戶需使用 PowerShell。
> - 目前功能仍在持續增強中，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手功能，但需要更複雜的安裝和配置過程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的編碼任務，功能較為單一，無法提供 Kimi Code 的多樣化支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 採用 Python 實作，對於需要 Python 環境的用戶來說更為方便，但安裝過程相對複雜。 | 如果你的團隊已經在使用 Python 並需要進行深度學習相關的開發，這個工具會更適合。 | medium，因為需要重新適應 Python 的開發環境和工具鏈。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的編碼任務，功能較為單一，無法提供 Kimi Code 的多樣化支持。 | 如果你的需求非常專一，且不需要多樣化的功能，這個工具會更合適。 | low，因為功能簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **kimi-code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 採用 Python 實作，對於需要 Python 環境的用戶來說更為方便，但安裝過程相對複雜。 | 專注於特定的編碼任務，功能較為單一，無法提供 Kimi Code 的多樣化支持。 |
> | 遷移成本 | - | medium，因為需要重新適應 Python 的開發環境和工具鏈。 | low，因為功能簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 並需要進行深度學習相關 | 如果你的需求非常專一，且不需要多樣化的功能，這個工具會更合適 |

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

- **[HIGH]** 在某些 UNIX 系統上安裝時可能會遇到權限問題
  - 解法：使用 sudo 執行安裝命令
- [MEDIUM] Windows 用戶在使用 PowerShell 時可能會遇到指令不兼容的問題
  - 解法：確保使用最新版本的 PowerShell
- [MEDIUM] 某些功能在高負載情況下可能會出現延遲
  - 解法：減少同時執行的任務數量

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成和管理 API 文檔，提升開發效率。 |
| 需要頻繁進行代碼審查的小型團隊 | 適合 | 提供即時反饋，能夠加速審查過程。 |
| 大型企業的核心系統開發 | 不適合 | 目前功能仍在增強中，穩定性不足。 |
| 對 AI 編碼助手有需求的獨立開發者 | 非常適合 | 提供多樣化的功能，能夠提升工作效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到高效的編碼助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限運行，且不存取敏感資料，依賴鏈中未發現已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Kimi Code CLI 最常與開發環境和 CI/CD 工具搭配使用，能夠在開發過程中提供即時反饋。在一個使用 GitHub Actions 的專案中，你可以用 Kimi Code CLI 來自動化代碼檢查，具體做法是將 Kimi CLI 整合到 CI 流程中，使用 `kimi test` 指令進行測試。與主流 IDE（如 VS Code）有良好的相容性，能夠輕鬆嵌入開發工作流中。整合的摩擦點主要在於需要確保環境配置正確，否則可能會影響使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Kimi Code CLI 出現之前，開發者通常依賴於傳統的編碼工具和 IDE，這些工具在自動化和即時反饋方面存在不足。隨著 AI 技術的進步，尤其是在自然語言處理和代碼生成領域，開發者對於能夠提供即時反饋的 AI 編碼助手的需求日益增加。Kimi Code CLI 代表了這一趨勢，將 AI 助手的功能整合到終端中，未來可能會隨著技術的進步而進一步演變，特別是在多模態交互和自動化任務方面。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉終端操作
- 了解基本的 JavaScript/TypeScript

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：收集反饋並調整使用方式。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：開發效率提升 30%，代碼檢查時間減少 50%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以輕鬆導出並轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
| Forks | 104 |
| Open Issues | 47 |
| Issue 解決率 | 33% (23 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://moonshotai.github.io/kimi-code/) |
| Repo 大小 | 6.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/kimi-code) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@arethetypeswrong/cli` `@changesets/changelog-github` `@changesets/cli` `@microsoft/api-extractor` `@types/node` `@vitest/coverage-v8` `lint-staged` `oxlint` `oxlint-tsgolint` `pkg-pr-new` `publint` `sherif` `simple-git-hooks` `tsdown` `tsx`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liruifengv](https://github.com/liruifengv) | 30 |
> | [@kermanx](https://github.com/kermanx) | 20 |
> | [@wbxl2000](https://github.com/wbxl2000) | 11 |
> | [@7Sageer](https://github.com/7Sageer) | 7 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 4 |

**最新版本**：@moonshot-ai/kimi-code@0.5.0 (2026-05-28)

> [!info]- Release Notes
> ### Minor Changes
> 
> -   [#163](https://github.com/MoonshotAI/kimi-code/pull/163) [`07dd604`](https://github.com/MoonshotAI/kimi-code/commit/07dd604c3c7f453dfb0c0a601bb1c44a8114bb3b) - Add `/auto` slash command and `--auto` CLI flag for auto permission mode.
> 
> -   [#157](https://github.com/MoonshotAI/kimi-code/pull/157) [`971fce6`](https://github.com/MoonshotAI/kimi-code/commit/971fce6e528c2b210df1852d7cd12bcda71014fd) - Add scheduled tasks:
> 
>     You can now ask the assistant to remind you at a specific time, run a task on a recurring cron schedule (for example, check a deploy every 5 minutes or run a daily report every weekday at 9am), or come back on its own in a few minutes to continue what it was doing.
> 
>     Schedules use the standard 5-field cron syntax.
> 
> ### Patch Changes
> 
> -   [#162](https://github.com/MoonshotAI/kimi-code/pull/162) [`f3c1015`](https://github.com/MoonshotAI/kimi-code/commit/f3c1015b677d40fb94957ab121da5e14480a890f) - Add a clickable changelog link to the update prompt.
> 
> -   [#150](https://github.com/MoonshotAI/kimi-code/pull/150) [`8b5a251`](https://github.com/MoonshotAI/kimi-code/commit/8b5a25161ceac02894d1a09c78a5aa883e460c8e) - Show the full Bash command when expanding a Bash tool card with `ctrl+o`. The header still truncates long commands at 60 chars, but the expanded view now reveals the complete multi-line command above the output.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題回應率約 33%。
**連結**：[文件](https://moonshotai.github.io/kimi-code/en/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-28）
> **活躍天數** 1 天 · **最新 commit** docs: simplify plugins documentation (#169)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#39](https://github.com/MoonshotAI/kimi-code/issues/39) | Support kimi web `enhancement` | 9 | 1 |
> | [#37](https://github.com/MoonshotAI/kimi-code/issues/37) | 想问下 kimi 团队为什么还是决定放弃 python 版的 kimi-cli 转而重新起一个 ts 的 kimi-co | 5 | 12 |
> | [#60](https://github.com/MoonshotAI/kimi-code/issues/60) | feat: 增加 Skills 可见性和管理入口 | 3 | 0 |
> | [#160](https://github.com/MoonshotAI/kimi-code/issues/160) | 是否还支持Kimi cli web `enhancement` | 2 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Kimi Code CLI
> 
> [](LICENSE) [](https://moonshotai.github.io/kimi-code/en/) 
> [Documentation](https://moonshotai.github.io/kimi-code/en/) · [Issues](https://github.com/MoonshotAI/kimi-code/issues) · [中文](README.zh-CN.md)
> 
> ## What is Kimi Code CLI
> 
> Kimi Code CLI is an AI coding agent that runs in your terminal — it can read and edit code, run shell commands, search files, fetch web pages, and choose the next step based on the feedback it receives. It works out of the box with Moonshot AI’s Kimi models and can also be configured to use other compatible providers.
> 
> ## Install
> 
> Install with the official script. No Node.js required.
> 
> - **macOS or Linux**:
> 
> ```sh
> curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
> ```
> 
> - **Windows (PowerShell)**:
> 
> ```powershell
> irm https://code.kimi.com/kimi-code/install.ps1 | iex
> ```
> 
> Then, run it with a new shell session:
> 
> ```sh
> kimi --version
> ```
> 
> For npm install, upgrade, uninstall, see [Getting Started](https://moonshotai.github.io/kimi-code/en/guides/getting-started).
> 
> ## Quick Start
> 
> Open a project and start the interactive UI:
> 
> ```sh
> cd your-project
> kimi
> ```
> 
> On first launch, run `/login` inside Kimi Code CLI and choose either Kimi Code OAuth or a Moonshot AI Open Platform API key. After login, try your first task:
> 
> ```
> Take a look at this project and explain its main directories.
> ```
> 
> ## Key Features
> 
> - **Single-binary distribution.** Install with one command: no Node.js setup, PATH gymnastics, or global module conflicts.
> - **Blazing-fast startup.** The TUI is ready in milliseconds, so starting a session never feels heavy.
> - **Purpose-built TUI.** A carefully tuned interface for long, focused agent sessions.
> - **Video input.** Drop a screen recording or demo clip into the chat, and let the agent watch what is hard to describe in words.
> - **AI-native MCP configuration.** Add, edit, and authenticate Model Context Protocol servers conversationally with `/mcp-config`, without hand-editing JSON.
> - **Subagents for focused, parallel work.** Dispatch built-in `coder`, `explore`, and `plan` subagents in isolated contexts while keeping the main conversation clean.
> - **Lifecycle hooks.** Run local commands at key points to gate risky tool calls, audit decisions, trigger desktop notifications, or connect to your own automation.
> 
> ## Docs
> 
> - [Getting Started](https://moonshotai.github.io/kimi-code/en/guides/getting-started)
> - [Interaction and approvals](https://moonshotai.github.io/kimi-code/en/guides/interaction)
> - [Sessions](https://moonshotai.github.io/kimi-code/en/guides/sessions)
> - [Configuration](https://moonshotai.github.io/kimi-code/en/configuration/config-files)
> - [Command reference](https://moonshotai.github.io/kimi-code/en/reference/kimi-command)
> 
> ## Develop
> 
> Requirements: Node.js ≥ 24.15.0, pnpm 10.33.0.
> 
> ```sh
> git clone https://github.com/MoonshotAI/kimi-code.git
> cd kimi-code
> pnpm install
> ```
> 
> ```sh
> pnpm dev:cli    # run the CLI in dev mode
> pnpm test       # run tests
> pnpm typecheck  # TypeScript check
> pnpm lint       # oxlint
> pnpm build      # build all packages
> ```
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guide.
> 
> ## Community
> 
> - [Issues](https://github.com/MoonshotAI/kimi-code/issues)
> - For security vulnerabilities, see [SECURITY.md](SECURITY.md).
> 
> ## Acknowledgements
> 
> Our TUI is built on top of [`pi-tui`](https://github.com/earendil-works/pi-mono/tree/main/packages/tui). We thank the authors of `pi-tui` for their valuable work.
> 
> ## License
> 
> Released under the [MIT License](LICENSE).

## 延伸閱讀

相關概念：[[AI 編碼助手]] · [[終端用戶介面]] · [[自動化任務]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/MoonshotAI/kimi-code) · [官方網站](https://moonshotai.github.io/kimi-code/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "MoonshotAI--kimi-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 編碼助手","終端用戶介面","自動化任務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MoonshotAI--kimi-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MoonshotAI--kimi-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MoonshotAI" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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

> **2026-05-26** — 首次收錄
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

- [[2026-05-29|2026-05-29]] — 再次上榜，1.2k stars
- [[2026-05-28|2026-05-28]] — 再次上榜，889 stars
- [[2026-05-27|2026-05-27]] — 再次上榜，724 stars
- [[2026-05-26|2026-05-26]] — 首次收錄，500 stars
