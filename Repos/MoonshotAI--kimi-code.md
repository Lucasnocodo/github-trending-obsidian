---
repo: MoonshotAI/kimi-code
url: https://github.com/MoonshotAI/kimi-code
owner: MoonshotAI
owner_type: Organization
language: TypeScript
license: MIT
description: "The Starting Point for Next-Gen Agents"
homepage: "https://moonshotai.github.io/kimi-code/"
stars: 729
stars_per_day: 182
forks: 50
open_issues: 23
created: 2026-05-22
pushed_at: 2026-05-26
first_seen: 2026-05-26
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "@moonshot-ai/kimi-code@0.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "提供一個終端機的 AI 編碼代理，能夠讀取和編輯程式碼、執行指令等。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 36
repo_size_kb: 6271
readme_length: 3517
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-26"
star_history: "2026-05-26:500,2026-05-26:511,2026-05-27:724,2026-05-27:729"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "kimi-code"
  - "MoonshotAI/kimi-code"
  - "提供一個終端機的 AI 編碼代理，能夠讀取和編輯程式碼、執行指令等。"
---

# kimi-code

**729** stars · **182** stars/天 · 建立 4 天前 · TypeScript · MIT

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

`ORG` `@moonshot-ai/kimi-code@0.3.0` `easy-install`

> [!summary] 一句話摘要
> 提供一個終端機的 AI 編碼代理，能夠讀取和編輯程式碼、執行指令等。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (182 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在終端機中進行編碼和自動化的開發者，尤其是對 AI 助手有需求的工程師。
> **一句話重點** Kimi Code CLI 的設計專注於終端機環境，提供即時反饋和簡化的安裝流程，適合需要高效開發的用戶。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、1 小時整合，得到即時反饋的 AI 編碼助手，值得一試。

> [!abstract] 核心創新
> Kimi Code CLI 提供即時反饋的 AI 編碼助手，專為終端機環境設計。

## 專案簡介

Kimi Code CLI 是一個 AI 編碼代理，設計用於終端機環境，能夠讀取和編輯程式碼、執行 shell 指令、搜尋檔案及根據反饋選擇下一步行動。用戶只需透過簡單的指令 `kimi` 啟動，並在首次啟動時使用 `/login` 登入，便可開始與代理互動。這個工具的賣點在於其單一二進位分發，無需 Node.js 環境，並且啟動速度極快，幾乎是即時的。技術上，它使用 TypeScript 和多種現代開發工具，如 pnpm 和 vitest，確保開發過程的高效與可靠。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Kimi Code CLI 提供了更快的啟動時間和專注的 TUI 界面，適合長時間的代理會話。

它的設計考量了用戶的工作流程，提供了視頻輸入功能，讓代理能夠理解難以用文字表達的內容。雖然目前還在開發中，但其社群活躍度尚可，解決率約 36%。對於需要在終端機中進行編碼和自動化的開發者來說，這是一個值得關注的工具。未來幾個月內，隨著功能的增強和社群的擴大，Kimi Code CLI 有潛力成為更為成熟的解決方案。

**技術棧**：`TypeScript 6.0.2` · `pnpm 10.33.0` · `vitest 4.1.4`

## 重點功能

- 單一二進位分發 — 只需一條指令安裝，無需 Node.js 環境。
- 快速啟動 — TUI 在毫秒內準備就緒，無需等待。
- 專為長時間會話設計的 TUI — 提供專注的界面，適合長時間使用。
- 視頻輸入功能 — 支持將屏幕錄影或演示片段放入聊天中，讓代理理解難以描述的內容。
- AI 原生 MCP 配置 — 透過 `/mcp-config` 命令輕鬆配置 Model Context Protocol 伺服器。

## 快速開始

1. 安裝 Kimi Code CLI
```bash
curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
```
2. 啟動 Kimi Code CLI
```bash
cd your-project && kimi
```
3. 登入並開始互動
```bash
/login
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Kimi Code CLI",
  "指令": "kimi",
  "預期輸出": "啟動 Kimi Code CLI 的互動界面"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 729 stars（182/天），forks 50（6.9%），顯示出強勁的增長潛力。開發者 MoonshotAI 的背景在於推動 AI 技術的應用，這個專案解決了終端機環境中缺乏高效 AI 編碼助手的痛點。之前的解決方案多數依賴於繁瑣的安裝過程或不夠靈活，Kimi Code CLI 透過簡化安裝和提供即時反饋的能力，吸引了開發者的注意。社群的活躍度和開放的問題討論也促進了其快速成長。

## 適合誰使用

**目標受眾**：需要在終端機中進行編碼和自動化的開發者，尤其是對 AI 助手有需求的工程師。

> [!example] 使用場景
> - 全端工程師用它來在終端機中快速編輯和執行代碼，因為它能夠即時反饋並簡化開發流程。
> - DevOps 工程師用它來自動化日常任務，因為其支持 shell 指令和視頻輸入功能，能夠處理複雜的操作。
> - 新手開發者用它來學習程式碼結構和命令行操作，因為它提供了即時的指導和反饋。

## 架構分析

Kimi Code CLI 採用單一二進位架構，這樣的設計使得安裝過程極為簡便，無需額外的 Node.js 環境。其內部架構使用 TypeScript 編寫，並依賴 pnpm 進行包管理，確保開發過程的高效。資料流方面，使用者透過 CLI 發出指令，代理則根據反饋進行即時處理，並能夠調用本地命令。

這種設計使得用戶能夠靈活地與代理互動，並在需要時進行本地操作。選擇 TypeScript 而非 JavaScript，能夠提供更好的型別檢查和開發體驗，但也增加了學習曲線。整體而言，這種架構適合需要快速部署和高效開發的環境，但在處理大型專案時可能會遇到性能瓶頸。

## 技術深入分析

Kimi Code CLI 的核心技術機制在於其使用 TypeScript 來實現一個高效的終端機用戶介面，並透過 pnpm 管理依賴。這使得開發者能夠在不需要 Node.js 環境的情況下快速部署，並且啟動速度極快。該工具能夠處理多種指令，並根據用戶的反饋進行即時調整，這對於需要快速迭代的開發過程至關重要。設計上，選擇 TypeScript 而非 JavaScript 提供了更好的型別檢查，但也意味著開發者需要具備一定的 TypeScript 知識。對於大型專案，可能會出現性能瓶頸，特別是在處理大量檔案時。整合方面，Kimi Code CLI 能夠與現有的 CI/CD 流程無縫對接，並且支持多種命令行工具，這使得它在現有的開發環境中能夠輕鬆融入。整體而言，這個工具在提升開發效率的同時，也需要注意其在大型專案中的性能表現。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，幫助用戶快速上手。文件目前僅有英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，無需 Node.js 環境，適合快速上手。
> - 啟動速度快，能夠即時反饋用戶操作。
> - 專為終端機設計的界面，提升使用體驗。

> [!danger] 缺點
> - 目前僅支援 macOS 和 Linux，Windows 用戶需另行處理。
> - 對於大型專案的支持可能有限，性能可能下降。
> - 社群支持尚在發展中，問題解決速度可能較慢。

> [!warning] 注意事項
> - 目前僅支援 macOS 和 Linux，Windows 用戶需使用 PowerShell。
> - 對於大型專案，可能會出現性能瓶頸，特別是在處理大量文件時。
> - 社群支持尚在發展中，解決問題的速度可能不如成熟工具。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手功能，但安裝過程較為繁瑣，且啟動速度較慢。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也針對終端機環境，但缺乏 Kimi Code 的即時反饋和視頻輸入功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手功能，但安裝過程較為繁瑣，且啟動速度較慢。 | 如果需要一個功能全面的 AI 編碼助手，但不介意較長的安裝過程。 | medium，因為需要重新配置環境和依賴。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也針對終端機環境，但缺乏 Kimi Code 的即時反饋和視頻輸入功能。 | 如果需要一個簡單的 CLI 工具，但不需要高級功能。 | low，因為其設計較為簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **kimi-code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 編碼助手功能，但安裝過程較為繁瑣，且啟動速度較慢。 | 雖然也針對終端機環境，但缺乏 Kimi Code 的即時反饋和視頻輸入功能。 |
> | 遷移成本 | - | medium，因為需要重新配置環境和依賴。 | low，因為其設計較為簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果需要一個功能全面的 AI 編碼助手，但不介意較長的安裝過 | 如果需要一個簡單的 CLI 工具，但不需要高級功能。 |

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

- **[HIGH]** 在大型專案中性能可能下降，特別是處理大量檔案時。
  - 解法：考慮將專案拆分為小型模組以減少負擔。
- [MEDIUM] Windows 平台的支持尚未完善，可能會遇到兼容性問題。
  - 解法：使用 WSL 或在 Linux 環境中運行。
- [MEDIUM] 社群支持尚在發展中，問題解決速度可能較慢。
  - 解法：積極參與社群討論，尋求幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡化的安裝和即時反饋功能非常符合小型團隊的需求。 |
| 大型企業的核心系統開發 | 不適合 | 性能瓶頸可能影響開發效率。 |
| 需要快速原型開發的個人開發者 | 適合 | 快速啟動和簡單的使用流程非常適合原型開發。 |
| 需要長期支持的商業應用 | 普通 | 目前處於 alpha 階段，穩定性尚待觀察。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到即時反饋的 AI 編碼助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度較高，適合在 CI/CD 中使用。安全性考量良好，無已知的重大漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Kimi Code CLI 最常與終端機環境搭配使用，特別是在開發和測試階段。用戶可以在使用 Next.js 開發的專案中，通過 `kimi` 指令快速啟動代理，並在終端中進行即時的代碼編輯和執行。它與 GitHub Actions 等 CI 工具相容，能夠輕鬆集成到現有的開發流程中。整合過程中，最常見的問題是環境配置，特別是在不同操作系統之間的兼容性問題。

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
| Forks | 50 |
| Open Issues | 23 |
| Issue 解決率 | 36% (13 closed) |
| 最後推送 | 2026-05-26 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://moonshotai.github.io/kimi-code/) |
| Repo 大小 | 6.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/kimi-code) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@arethetypeswrong/cli` `@changesets/changelog-github` `@changesets/cli` `@microsoft/api-extractor` `@types/node` `@vitest/coverage-v8` `lint-staged` `oxlint` `oxlint-tsgolint` `publint` `sherif` `simple-git-hooks` `tsdown` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liruifengv](https://github.com/liruifengv) | 13 |
> | [@7Sageer](https://github.com/7Sageer) | 7 |
> | [@kermanx](https://github.com/kermanx) | 6 |
> | [@wbxl2000](https://github.com/wbxl2000) | 5 |
> | [@sailist](https://github.com/sailist) | 3 |

**最新版本**：@moonshot-ai/kimi-code@0.3.0 (2026-05-26)

> [!info]- Release Notes
> ### Minor Changes
> 
> -   [#76](https://github.com/MoonshotAI/kimi-code/pull/76) [`6f22ae4`](https://github.com/MoonshotAI/kimi-code/commit/6f22ae48f84a062a65dcaa9510ffe96f40ab503b) - /logout now opens a picker so you can choose which provider to log out of, instead of always logging out the one tied to the current model. The current provider is highlighted by default, so pressing Enter matches the previous behavior. The command is also available as /disconnect.
> 
> ### Patch Changes
> 
> -   [#62](https://github.com/MoonshotAI/kimi-code/pull/62) [`e2b2b46`](https://github.com/MoonshotAI/kimi-code/commit/e2b2b46fc9c1d6a0ada67c590b8aa56e77c9c513) - Make `AgentRecords` hold the `Agent` instance directly and inline the restore dispatch logic.
> 
> -   [#73](https://github.com/MoonshotAI/kimi-code/pull/73) [`bddc60f`](https://github.com/MoonshotAI/kimi-code/commit/bddc60f0e9af44d326dc0759a60bce93187f8a7b) - Prevent running the `/model` and `/sessions` slash commands while streaming or compacting context.
> 
> -   [#70](https://github.com/MoonshotAI/kimi-code/pull/70) [`d95b013`](https://github.com/MoonshotAI/kimi-code/commit/d95b01342a7921f0863ceb37abad7984d0245509) - Preserve catalog-declared interleaved reasoning fields for OpenAI-compatible models configured through `/connect`.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度尚可，解決率約 36%。
**連結**：[文件](https://moonshotai.github.io/kimi-code/en/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-26 ~ 2026-05-26）
> **活躍天數** 1 天 · **最新 commit** ci: release packages (#65)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#37](https://github.com/MoonshotAI/kimi-code/issues/37) | 想问下 kimi 团队为什么还是决定放弃 python 版的 kimi-cli 转而重新起一个 ts 的 kimi-co | 4 | 3 |
> | [#39](https://github.com/MoonshotAI/kimi-code/issues/39) | Support kimi web `enhancement` | 2 | 0 |
> | [#21](https://github.com/MoonshotAI/kimi-code/issues/21) | 什么时候支持Memory `enhancement` | 2 | 0 |

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 編碼助手]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

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
> const concepts = ["CLI/TUI","自動化","AI 編碼助手"];
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

- [[2026-05-27|2026-05-27]] — 再次上榜，724 stars
- [[2026-05-26|2026-05-26]] — 首次收錄，500 stars
