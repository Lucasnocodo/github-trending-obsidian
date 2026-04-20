---
repo: getagentseal/codeburn
url: https://github.com/getagentseal/codeburn
owner: getagentseal
owner_type: Organization
language: TypeScript
license: MIT
description: "See where your AI coding tokens go. Interactive TUI dashboard for Claude Code, Codex, and Cursor cost observability."
homepage: ""
stars: 2871
stars_per_day: 479
forks: 212
open_issues: 21
created: 2026-04-13
pushed_at: 2026-04-19
first_seen: 2026-04-19
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "成本追蹤"
release_tag: "mac-v0.7.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-19
use_case: "讓開發者追蹤 AI 編碼工具的使用成本，提供互動式的 TUI 儀表板。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-23"
contributor_count: 5
engagement: "low"
issue_close_rate: 54
repo_size_kb: 3235
readme_length: 9972
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-19"
star_history: "2026-04-19:2717,2026-04-20:2871"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/ai_coding"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/codex"
  - "topic/cost_tracking"
aliases:
  - "codeburn"
  - "getagentseal/codeburn"
  - "讓開發者追蹤 AI 編碼工具的使用成本，提供互動式的 TUI 儀表板。"
---

# codeburn

**2.7k** stars · **543** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/getagentseal--codeburn");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `mac-v0.7.5` `easy-install`

`ai-coding` `claude-code` `cli` `codex` `cost-tracking` `cursor-ide` `developer-tools` `observability` `terminal-ui` `token-usage`

> [!summary] 一句話摘要
> 讓開發者追蹤 AI 編碼工具的使用成本，提供互動式的 TUI 儀表板。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (543 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要追蹤 AI 編碼工具成本的開發團隊，特別是使用多種工具的團隊。
> **一句話重點** 這個工具不僅能追蹤成本，還能幫助開發者優化 AI 工具的使用效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/getagentseal--codeburn");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "成本追蹤" && p.file.name !== "getagentseal--codeburn" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 成本追蹤 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到清晰的成本追蹤，值得一試。

> [!abstract] 核心創新
> 提供無需 API 金鑰的直接磁碟讀取方式來追蹤 AI 編碼工具的使用情況。

## 專案簡介

CodeBurn 透過直接讀取磁碟上的會話數據，無需 API 金鑰或代理，讓開發者能夠追蹤 AI 編碼工具（如 Claude Code、Codex 和 Cursor）的使用情況。使用者可以透過 CLI 指令如 `codeburn` 來啟動互動式儀表板，查看過去 7 天的使用情況，或使用 `codeburn report -p all` 獲取所有記錄的會話數據。這個工具的賣點在於其能夠詳細分類任務類型，並追蹤每個活動的成功率，幫助用戶了解哪些操作有效，哪些則可能造成額外的 token 消耗。其設計選擇了 TUI（文本用戶界面），以便於在終端中進行快速導航和數據展示，並支持 CSV 和 JSON 格式的數據導出。這樣的設計使得開發者能夠在不依賴外部服務的情況下，獲得精確的成本分析。使用者可以透過 `codeburn optimize` 指令來找出不必要的 token 消耗，進一步優化使用效率。

**技術棧**：`TypeScript 5.8.0` · `React 19.2.5` · `Node.js >=22`

## 重點功能

- 互動式 TUI 儀表板 — 提供多種視圖（今日、過去 7 天、30 天等）以便於快速檢視使用情況。
- 多種報告格式 — 支援 CSV 和 JSON 格式的數據導出，方便進一步分析。
- 任務類型分類 — 能夠根據使用模式和關鍵字自動分類 13 種任務類型，幫助用戶了解 token 消耗來源。
- 一鍵優化 — 使用 `codeburn optimize` 指令找出不必要的 token 消耗，提升使用效率。
- 多供應商支持 — 自動檢測並支持多種 AI 編碼工具的數據導入，方便用戶整合不同來源的數據。

## 快速開始

1. 全局安裝 CodeBurn
```bash
npm install -g codeburn
```
2. 啟動互動式儀表板
```bash
codeburn
```
3. 查看今日使用情況
```bash
codeburn today
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 20+ 並配置好 AI 編碼工具的數據路徑。",
  "指令": "codeburn report --from 2026-04-01 --to 2026-04-10",
  "預期輸出": "顯示指定日期範圍內的使用報告。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2717 stars（543/天），forks 190（7.0%），顯示出強烈的需求。作者 AgentSeal 之前有開發過其他 AI 工具，這次專案解決了開發者在使用 AI 編碼工具時無法有效追蹤成本的痛點。這個工具讓開發者能夠清楚了解每次請求的 token 使用情況，並且在社群中引起了關注，特別是對於那些依賴多種 AI 工具的開發者。技術上，這個工具的出現正好符合了開發者對於成本透明化的需求，尤其是在 AI 工具日益普及的背景下。

## 適合誰使用

**目標受眾**：需要追蹤 AI 編碼工具成本的開發團隊，特別是使用多種工具的團隊。

> [!example] 使用場景
> - 後端工程師用它來追蹤使用 Claude Code 的 token 消耗，因為這樣可以清楚知道哪些功能造成了額外的成本。
> - 產品經理用它來分析團隊在 AI 編碼工具上的支出，因為能夠提供具體的數據支持決策。
> - DevOps 工程師用它來優化 CI/CD 流程中的 AI 工具使用，因為能夠找出不必要的 token 消耗，節省預算。

## 架構分析

CodeBurn 採用單一的 CLI 工具架構，通過直接讀取本地磁碟上的會話數據來實現成本追蹤。這樣的設計使得用戶無需依賴外部 API 或代理，降低了使用門檻和潛在的安全風險。數據流從磁碟到用戶界面，使用了 TUI 技術來提供互動式的數據展示。

這種架構的代價在於需要用戶手動配置數據路徑，並且對於不同工具的支持需要額外的插件開發。擴展性方面，因為是基於文件系統的讀取，對於大規模數據的處理可能會有性能瓶頸，尤其是在首次運行時。整體來說，這個架構適合中小型團隊使用，但在面對大型數據集時可能需要進一步優化。

## 技術深入分析

CodeBurn 的核心技術在於其直接從磁碟讀取數據的能力，這使得它能夠在不依賴外部 API 的情況下，提供實時的成本追蹤。使用 TypeScript 和 React 開發的 TUI，讓用戶能夠在終端中進行直觀的數據交互。效能方面，雖然對於小型數據集的處理非常迅速，但在首次運行時可能會因為需要讀取大量數據而導致延遲。設計上選擇了 CLI 工具的形式，這樣可以方便地與現有的開發流程整合，並且支持多種操作系統。技術風險方面，依賴於本地文件系統的讀取，可能會受到文件結構變化的影響。整合方面，與主流的 CI/CD 工具鏈相容性良好，能夠輕鬆嵌入到現有的開發環境中，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多個使用範例。安裝過程順暢，僅需一行命令即可完成。文檔目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，直接從磁碟讀取數據，安全性高。
> - 支持多種 AI 編碼工具，方便整合使用。
> - 互動式 TUI 儀表板，易於使用和導航。

> [!danger] 缺點
> - 僅支援特定版本的 Node.js，限制了使用範圍。
> - 需要用戶手動配置數據路徑，增加了使用複雜度。
> - 對於大型數據集的處理可能存在性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Node.js 20+。
> - 需要配置好 AI 編碼工具的數據路徑，否則無法讀取數據。
> - 不支援 Windows 平台的完整功能，某些功能可能無法正常運作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的成本追蹤功能，但主要針對特定的 AI 工具，功能範圍較窄。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於 Claude Code 的使用分析，但缺乏多供應商支持，無法整合其他工具的數據。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用 Rust 實作，記憶體使用量更低，但功能較為單一。 | 如果你的團隊需要一個輕量級的成本追蹤工具，並且不需要多供應商支持。 | medium，因為需要重新配置數據路徑和使用方式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於 Claude Code 的使用分析，功能較為集中，但缺乏多供應商支持。 | 如果你的團隊主要使用 Claude Code，並且需要深入的使用分析。 | low，因為功能相似且數據格式兼容。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codeburn** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體使用量更低，但功能較為單一。 | 專注於 Claude Code 的使用分析，功能較為集中，但缺乏多供應商支持。 |
> | 遷移成本 | - | medium，因為需要重新配置數據路徑和使用方式。 | low，因為功能相似且數據格式兼容。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的成本追蹤工具，並且不需要多供應商 | 如果你的團隊主要使用 Claude Code，並且需要深入的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊進行試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次運行時可能需要較長的數據讀取時間，特別是在大型數據集上。
  - 解法：建議在空閒時間運行，或定期清理舊數據以加快讀取速度。
- **[HIGH]** 在配置數據路徑時，若路徑不正確會導致無法讀取數據。
  - 解法：仔細檢查配置，並參考文檔中的範例。
- [MEDIUM] 某些功能在 Windows 平台上可能無法正常運作。
  - 解法：建議使用 macOS 或 Linux 環境進行測試。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊使用 AI 編碼工具進行開發 | 非常適合 | 能夠有效追蹤成本，幫助團隊控制預算。 |
| 大型企業的開發部門需要整合多種 AI 編碼工具 | 普通 | 雖然支持多供應商，但在大型數據集上可能存在性能瓶頸。 |
| 個人開發者希望優化 AI 工具的使用效率 | 非常適合 | 簡單易用的界面和強大的數據分析功能能夠幫助個人開發者快速上手。 |
| 需要在 Windows 環境中使用的開發團隊 | 不適合 | 目前在 Windows 上的支持有限，可能無法正常運作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到清晰的成本追蹤，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需讀取本地數據，並不存取敏感資料。依賴於本地文件系統，存在一定的安全性考量，但整體風險較低。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CodeBurn 最常與 AI 編碼工具如 Claude Code 和 Codex 搭配使用，位於開發流程的成本追蹤環節。實際整合範例包括在一個使用 Node.js 的專案中，開發者可以透過 `codeburn` 指令快速啟動儀表板，並查看各種工具的使用情況。這個工具與 GitHub Actions 和其他 CI 工具的相容性良好，能夠輕鬆嵌入到現有的開發環境中。整合的摩擦點主要在於用戶需要手動配置數據路徑，這可能會影響初次使用的體驗。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/getagentseal--codeburn");
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
> const me = dv.page("Repos/getagentseal--codeburn");
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
| Forks | 190 |
| Open Issues | 17 |
| Issue 解決率 | 54% (20 closed) |
| 最後推送 | 2026-04-18 |
| 建立日期 | 2026-04-13 |
| Repo 大小 | 3.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/getagentseal/codeburn) |
| Topics | `ai-coding` `claude-code` `cli` `codex` `cost-tracking` `cursor-ide` `developer-tools` `observability` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `commander` `ink` `react` `@types/node` `@types/react` `tsup` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 68
>     "Swift" : 31
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@iamtoruk](https://github.com/iamtoruk) | 151 |
> | [@lfl1337](https://github.com/lfl1337) | 19 |
> | [@AgentSeal](https://github.com/AgentSeal) | 14 |
> | [@rafaelcalleja](https://github.com/rafaelcalleja) | 6 |
> | [@mallek](https://github.com/mallek) | 6 |

**最新版本**：mac-v0.7.5 — Menubar v0.7.5 (2026-04-18)

> [!info]- Release Notes
> Install with:
> 
> ```
> npx codeburn menubar
> ```
> 
> That command drops the app into `~/Applications`, clears the download
> quarantine, and launches it. If you download the zip from this page directly
> and macOS shows "cannot verify developer", right-click the app in Finder and
> pick Open to whitelist it once.

## 社群與生態

**社群活躍度**：社群活躍，最近有多個 commit 和 issue 回應。
**連結**：[文件](https://github.com/getagentseal/codeburn#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-18 ~ 2026-04-18）
> **活躍天數** 1 天 · **最新 commit** docs: cover --from/--to, avgCostPerSession, and semgrep guard (#99)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/getagentseal/codeburn/issues/11) | Subscription vs API Use `enhancement` | 4 | 2 |
> | [#31](https://github.com/getagentseal/codeburn/issues/31) | Add support for KiloCode and OpenCode `enhancement` | 3 | 3 |
> | [#55](https://github.com/getagentseal/codeburn/issues/55) | Support cursor-agent CLI sessions (~/.cursor/projects/*/agen `enhancement` | 2 | 0 |
> | [#12](https://github.com/getagentseal/codeburn/issues/12) | Feature proposals from a power user (15+ projects, 170+ sess `enhancement` | 2 | 4 |
> | [#47](https://github.com/getagentseal/codeburn/issues/47) | Widget for Windows `enhancement` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> CodeBurn
> 
> See where your AI coding tokens go.
> 
>   
>   
>   
>   
>   
>   
> 
>   
> 
> By task type, tool, model, MCP server, and project. Supports **Claude Code**, **Codex** (OpenAI), **Cursor**, **OpenCode**, **Pi**, and **GitHub Copilot** with a provider plugin system. Tracks one-shot success rate per activity type so you can see where the AI nails it first try vs. burns tokens on edit/test/fix retries. Interactive TUI dashboard with gradient charts, responsive panels, and keyboard navigation. Native macOS menubar app in `mac/`. CSV/JSON export.
> 
> Works by reading session data directly from disk. No wrapper, no proxy, no API keys. Pricing from LiteLLM (auto-cached, all models supported).
> 
> 
> ## Install
> 
> ```bash
> npm install -g codeburn
> ```
> 
> Or run without installing:
> 
> ```bash
> npx codeburn
> ```
> 
> 
> ## Usage
> 
> ```bash
> codeburn                        # interactive dashboard (default: 7 days)
> codeburn today                  # today's usage
> codeburn month                  # this month's usage
> codeburn report -p 30days       # rolling 30-day window
> codeburn report -p all          # every recorded session
> codeburn report --from 2026-04-01 --to 2026-04-10  # exact date range
> codeburn report --format json   # full dashboard data as JSON
> codeburn report --refresh 60    # auto-refresh every 60 seconds
> codeburn status                 # compact one-liner (today + month)
> codeburn status --format json
> codeburn export                 # CSV with today, 7 days, 30 days
> codeburn export -f json         # JSON export
> codeburn optimize               # find waste, get copy-paste fixes
> codeburn optimize -p week       # scope the scan to last 7 days
> ```
> 
> Arrow keys switch between Today / 7 Days / 30 Days / Month / All Time. Press `q` to quit, `1` `2` `3` `4` `5` as shortcuts. The dashboard also shows average cost per session and the five most expensive sessions across all projects.
> 
> 
> ## What it tracks
> 
> **13 task categories** classified from tool usage patterns and user message keywords. No LLM calls, fully deterministic.
> 
> | Category | What triggers it |
> |---|---|
> | Coding | Edit, Write tools |
> | Debugging | Error/fix keywords + tool usage |
> | Feature Dev | "add", "create", "implement" keywords |
> | Refactoring | "refactor", "rename", "simplify" |
> | Testing | pytest, vitest, jest in Bash |
> | Exploration | Read, Grep, WebSearch without edits |
> | Planning | EnterPlanMode, TaskCreate tools |
> | Delegation | Agent tool spawns |
> | Git Ops | git push/commit/merge in Bash |
> | Build/Deploy | npm build, docker, pm2 |
> | Brainstorming | "brainstorm", "what if", "design" |
> | Conversation | No tools, pure text exchange |
> | General | Skill tool, uncategorized |
> 
> **Breakdowns**: daily cost chart, per-project, per-model (Opus/Sonnet/Haiku/GPT-5/GPT-4o/Gemini), per-activity with one-shot rate, core tools, shell commands, MCP servers.
> 
> **One-shot rate**: For categories that involve code edits, CodeBurn detects edit/test/fix retry cycles (Edit -> Bash -> Edit patterns). The 1-shot column shows the percentage of edit turns that succeeded without retries. Coding at 90% means the AI got it right first try 9 out of 10 times.
> 
> **Pricing**: Fetched from [LiteLLM](https://github.com/BerriAI/litellm) model prices (auto-cached 24h at `~/.cache/codeburn/`). Handles input, output, cache write, cache read, and web search costs. Fast mode multiplier for Claude. Hardcoded fallbacks for all Claude and GPT-5 models to prevent fuzzy matching mispricing.
> 
> 
> ### Requirements
> 
> - Node.js 20+
> - Claude Code (`~/.claude/projects/`), Codex (`~/.codex/sessions/`), Cursor, OpenCode, Pi (`~/.pi/agent/sessions/`), and/or GitHub Copilot (`~/.copilot/session-state/`)
> - For Cursor/OpenCode support: `better-sqlite3` is installed automatically as an optional dependency
> 
> 
> ### JSON output
> 
> `report`, `today`, and `month` support `--format json` to output the full dashboard data as structured JSON to stdout:
> 
> ```bash
> codeburn report --format json             # 7-day JSON report
> codeburn today --format json              # today's data as JSON
> codeburn month --format json              # this month as JSON
> codeburn report -p 30days --format json   # 30-day window
> ```
> 
> The JSON includes all dashboard panels: overview (cost, calls, sessions, cache hit %), daily breakdown, projects (with `avgCostPerSession`), models with token counts, activities with one-shot rates, core tools, MCP servers, and shell commands. Pipe to `jq` for filtering:
> 
> ```bash
> codeburn report --format json | jq '.projects'
> codeburn today --format json | jq '.overview.cost'
> ```
> 
> For the lighter `status --format json` (today + month totals only) or file-based exports (`export -f json`), see above.
> 
> 
> ## Providers
> 
> CodeBurn auto-detects which AI coding tools you use. If multiple providers have session data on disk, press `p` in the dashboard to toggle between them.
> 
> ```bash
> codeburn report                      # all providers combined (default)
> codeburn report --provider claude    # Claude Code only
> codeburn report --provider codex     # Codex only
> codeburn report --provider cursor    # Cursor only
> codeburn report --provider opencode  # OpenCode only
> codeburn report --provider pi        # Pi only
> codeburn report --provider copilot   # GitHub Copilot only
> codeburn today --provider codex      # Codex today
> codeburn export --provider claude    # export Claude data only
> ```
> 
> The `--provider` flag works on all commands: `report`, `today`, `month`, `status`, `export`.
> 
> 
> ### Project filtering
> 
> Filter results by project name (case-insensitive substring match). Both flags are repeatable:
> 
> ```bash
> codeburn report --project myapp                  # show only projects matching "myapp"
> codeburn report --exclude myapp                  # show everything except "myapp"
> codeburn report --exclude myapp --exclude tests  # exclude multiple projects
> codeburn month --project api --project web       # include multiple projects
> codeburn export --project inventory              # export only "inventory" project data
> ```
> 
> The `--project` and `--exclude` flags work on all commands and can be combined with `--provider`.
> 
> 
> ### Date range filtering
> 
> Beyond the preset periods, specify an exact window with `--from` and `--to` (`YYYY-MM-DD`, local time):
> 
> ```bash
> codeburn report --from 2026-04-01 --to 2026-04-10   # explicit window
> codeburn report --from 2026-04-01                    # this date through today
> codeburn report --to 2026-04-10                      # earliest data through this date
> codeburn report --from 2026-04-01 --to 2026-04-10 --format json
> ```
> 
> Either flag alone is valid. Inverted or malformed dates exit with a clear error. In the TUI, the custom range sets the initial load only -- pressing `1`-`5` switches back to predefined periods.
> 
> 
> ### Supported providers
> 
> | Provider | Data location | Status |
> |----------|--------------|--------|
> | Claude Code | `~/.claude/projects/` | Supported |
> | Claude Desktop | `~/Library/Application Support/Claude/local-agent-mode-sessions/` | Supported |
> | Codex (OpenAI) | `~/.codex/sessions/` | Supported |
> | Cursor | `~/Library/Application Support/Cursor/User/globalStorage/state.vscdb` | Supported |
> | OpenCode | `~/.local/share/opencode/` (SQLite) | Supported |
> | Pi | `~/.pi/agent/sessions/` | Supported |
> | GitHub Copilot | `~/.copilot/session-state/` | Supported (output tokens only) |
> | Amp | -- | Planned (provider plugin system) |
> 
> Codex tool names are normalized to match Claude's conventions (`exec_command` shows as `Bash`, `read_file` as `Read`, etc.) so the activity classifier and tool breakdown work across providers.
> 
> Cursor reads token usage from its local SQLite database. Since Cursor's "Auto" mode hides the actual model used, costs are estimated using Sonnet pricing (labeled "Auto (Sonnet est.)" in the dashboard). The Cursor view shows a **Languages** panel (extracted from code blocks) instead of Core Tools/Shell/MCP panels, since Cursor does not log individual tool calls. First run on a large Cursor database may take up to a minute; results are cached and subsequent runs

## 延伸閱讀

相關概念：[[成本追蹤]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/getagentseal/codeburn)

## 相關收錄

> [!note]- 直接競品（同子分類：成本追蹤）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "成本追蹤" AND file.name != "getagentseal--codeburn"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "getagentseal--codeburn"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "getagentseal--codeburn" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "getagentseal--codeburn"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["成本追蹤","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "getagentseal--codeburn" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/getagentseal--codeburn");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "getagentseal--codeburn" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "getagentseal" AND file.name != "getagentseal--codeburn"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/getagentseal--codeburn");
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
> const me = dv.page("Repos/getagentseal--codeburn");
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
> const me = dv.page("Repos/getagentseal--codeburn");
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
> const me = dv.page("Repos/getagentseal--codeburn");
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
> const me = dv.page("Repos/getagentseal--codeburn");
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

> **2026-04-19** — 首次收錄
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

- [[2026-04-20|2026-04-20]] — 再次上榜，2.9k stars
- [[2026-04-19|2026-04-19]] — 首次收錄，2.7k stars
