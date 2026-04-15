---
repo: AgentSeal/codeburn
url: https://github.com/AgentSeal/codeburn
owner: AgentSeal
owner_type: User
language: TypeScript
license: MIT
description: "See where your AI coding tokens go. Interactive TUI dashboard for Claude Code and Codex cost observability."
homepage: ""
stars: 897
stars_per_day: 897
forks: 72
open_issues: 11
created: 2026-04-13
pushed_at: 2026-04-14
first_seen: 2026-04-15
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "成本追蹤"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-15
use_case: "追蹤 AI 編碼工具的 token 使用情況，提供互動式 TUI 儀表板。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 42
repo_size_kb: 1458
readme_length: 7640
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-15"
star_history: "2026-04-15:897"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/ai_coding"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/codex"
  - "topic/cost_tracking"
aliases:
  - "codeburn"
  - "AgentSeal/codeburn"
  - "追蹤 AI 編碼工具的 token 使用情況，提供互動式 TUI 儀表板。"
---

# codeburn

**897** stars · **897** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/AgentSeal--codeburn");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`ai-coding` `claude-code` `cli` `codex` `cost-tracking` `developer-tools` `observability` `terminal-ui` `token-usage`

> [!summary] 一句話摘要
> 追蹤 AI 編碼工具的 token 使用情況，提供互動式 TUI 儀表板。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (897 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要追蹤 AI 編碼工具 token 使用情況的開發者和團隊管理者。
> **一句話重點** CodeBurn 不僅是追蹤工具，更是開發者理解 AI 編碼成本的利器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AgentSeal--codeburn");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "成本追蹤" && p.file.name !== "AgentSeal--codeburn" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能夠有效追蹤 AI 工具的 token 使用，值得嘗試。

> [!abstract] 核心創新
> 提供一個無需 API 鍵的本地 token 使用追蹤解決方案。

## 專案簡介

CodeBurn 是一個用於追蹤 AI 編碼工具（如 Claude Code 和 Codex）token 使用情況的工具，透過讀取存儲在磁碟上的會話記錄來運作。用戶可以通過命令行介面（CLI）執行 `codeburn` 指令來啟動互動式儀表板，並查看不同時間範圍（如今天、過去 7 天、過去 30 天）的使用情況。這個工具的賣點在於它能夠提供詳細的使用分析，包括每個任務類型的成功率，幫助開發者了解 AI 在編碼過程中的表現。技術上，CodeBurn 使用 TypeScript 開發，並依賴於 Node.js 20+ 環境，利用 `chalk` 和 `ink` 來構建終端用戶介面，並支持 CSV 和 JSON 格式的數據導出。

與其他工具相比，CodeBurn 的獨特之處在於它不需要 API 鍵或代理，直接從本地文件中讀取數據，這使得它的設置過程更為簡單。與 ccusage 等工具相比，CodeBurn 提供了更為豐富的可視化和交互功能，並且能夠自動檢測使用的 AI 工具。使用者可以輕鬆切換不同的 AI 工具數據，並且支持多種貨幣顯示，這對於國際用戶來說相當便利。儘管目前仍在開發中，但其活躍的社群和持續的功能更新顯示出良好的發展潛力。

**技術棧**：`TypeScript 5.8.0` · `Node.js 20+` · `React 19.2.5`

## 重點功能

- 互動式 TUI 儀表板 — 提供直觀的使用情況視覺化，支持鍵盤導航。
- 多種時間範圍報告 — 使用 `codeburn today`、`codeburn month` 等命令查看不同時間段的使用情況。
- 支持多種 AI 工具 — 自動檢測 Claude Code 和 Codex 的會話數據，並支持未來的插件擴展。
- CSV/JSON 數據導出 — 使用 `codeburn export` 命令導出使用報告，方便進一步分析。
- 貨幣轉換功能 — 支持多達 162 種貨幣的顯示，並可自動獲取匯率。

## 快速開始

1. 全局安裝 CodeBurn
```bash
npm install -g codeburn
```
2. 啟動互動式儀表板
```bash
codeburn
```
3. 查看今天的使用情況
```bash
codeburn today
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 CodeBurn 並有 Claude Code 或 Codex 的會話數據。",
  "指令": "codeburn report -p 30days",
  "預期輸出": "顯示過去 30 天的 token 使用情況報告。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 897 stars（897/天），forks 72（8.0%），顯示出強勁的增長潛力。作者 AgentSeal 之前在開源社群中活躍，這個工具解決了開發者在使用 AI 編碼工具時難以追蹤 token 使用的痛點，之前的解決方案多依賴於手動記錄或不夠直觀的界面。這個專案的推出正好填補了這一空白，並且在社群中引發了討論，進一步推動了其曝光率。隨著 AI 工具的普及，開發者對於成本控制和使用效率的需求日益增加，使得這個工具的市場需求上升。

## 適合誰使用

**目標受眾**：需要追蹤 AI 編碼工具 token 使用情況的開發者和團隊管理者。

> [!example] 使用場景
> - 後端工程師用它來追蹤使用 Claude Code 的 token 消耗，因為這樣能夠清楚了解每個功能的成本，避免不必要的開支。
> - 產品經理用它來分析團隊在不同 AI 工具上的使用情況，因為這樣能夠更好地分配資源並優化開發流程。
> - 數據分析師用它來導出過去 30 天的 token 使用報告，因為這樣能夠為未來的預算規劃提供依據。

## 架構分析

CodeBurn 採用模組化的設計，主要由 CLI 和 TUI 組成，CLI 負責命令解析和用戶交互，而 TUI 則提供視覺化的使用情況展示。數據流從本地的會話記錄文件讀取，經過解析和分類後，呈現在用戶界面上。這種設計使得用戶無需依賴外部 API，降低了使用門檻，但也意味著必須確保本地數據的正確性和完整性。選擇 TypeScript 和 React 使得開發過程中能夠快速迭代，並保持代碼的可維護性。整體架構的擴展性良好，未來可以通過插件系統輕鬆添加對新工具的支持。

## 技術深入分析

CodeBurn 的核心技術機制在於其能夠直接從本地的會話記錄中讀取數據，這使得它不需要依賴外部 API 的穩定性，降低了使用的複雜度。它使用 TypeScript 和 React 來構建終端用戶介面，這不僅提高了開發效率，也使得最終產品的可維護性更高。效能方面，由於數據是從本地文件中讀取，冷啟動時間非常短，並且能夠快速響應用戶的操作。設計上，選擇了模組化的架構，這使得未來可以輕鬆擴展對新工具的支持。技術風險方面，依賴於本地數據的完整性，若數據丟失或格式錯誤，將直接影響使用體驗。整合方面，CodeBurn 能夠與現有的開發工具鏈無縫對接，特別是在使用 CLI 工具時，能夠輕鬆地融入到 CI/CD pipeline 中，提升開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並包含範例指令。安裝過程相對順暢，僅需確保 Node.js 版本符合要求。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 無需 API 鍵，直接從本地文件讀取數據，降低了使用門檻。
> - 提供詳細的使用分析和可視化，幫助開發者更好地理解成本。
> - 支持多種貨幣顯示，方便國際用戶使用。

> [!danger] 缺點
> - 目前僅支持 Claude Code 和 Codex，對於其他 AI 工具的支持仍在開發中。
> - 需要用戶手動配置會話數據路徑，對新手可能不友好。
> - 依賴於本地數據的完整性，若數據丟失將影響使用體驗。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 目前僅支持 Claude Code 和 Codex，其他工具仍在計劃中。
> - 需要正確配置 AI 工具的會話數據路徑。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的 token 使用追蹤功能，但主要針對特定的 AI 工具，功能範圍較窄。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude Obsidian 專注於 Claude Code 的使用情況，但缺乏 CodeBurn 的多工具支持和可視化功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| ccusage | ccusage 提供類似的 token 使用追蹤功能，但主要針對 Claude Code，缺乏 CodeBurn 的多工具支持和可視化功能。 | 如果你的團隊主要使用 Claude Code，且不需要多工具支持，ccusage 可能會是更簡單的選擇。 | low，因為功能相似，轉移數據和使用習慣不會有太大困難。 |
| LiteLLM | LiteLLM 專注於提供模型價格和性能數據，而 CodeBurn 則提供更全面的 token 使用分析和可視化。 | 如果你只需要模型的價格信息，而不需要詳細的使用分析，LiteLLM 會是更合適的選擇。 | medium，因為需要重新適應不同的數據來源和分析方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codeburn** | **ccusage** | **LiteLLM** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | ccusage 提供類似的 token 使用追蹤功能，但主要針對 Claude Code，缺乏 CodeBurn 的多工具支持和可視化功能。 | LiteLLM 專注於提供模型價格和性能數據，而 CodeBurn 則提供更全面的 token 使用分析和可視化。 |
> | 遷移成本 | - | low，因為功能相似，轉移數據和使用習慣不會有太大困難。 | medium，因為需要重新適應不同的數據來源和分析方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用 Claude Code，且不需要多工具 | 如果你只需要模型的價格信息，而不需要詳細的使用分析，Lite |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，尚不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在不同操作系統上可能會遇到路徑不一致的問題，導致無法正確讀取會話數據。
  - 解法：確保使用正確的路徑格式，或在文檔中查找系統特定的配置建議。
- **[HIGH]** 如果會話數據格式不正確，可能會導致解析錯誤。
  - 解法：定期檢查會話數據的完整性，並確保使用最新版本的工具。
- [MEDIUM] 在高負載情況下，儀表板的響應速度可能會變慢。
  - 解法：在使用高負載的情況下，考慮減少同時打開的儀表板數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊使用 AI 工具進行編碼 | 非常適合 | 能夠有效追蹤和分析團隊的 token 使用情況，幫助控制成本。 |
| 大型企業需要多工具支持的 token 追蹤 | 適合 | 雖然目前支持的工具有限，但未來擴展的潛力使其值得考慮。 |
| 個人開發者進行 AI 編碼實驗 | 非常適合 | 簡單的安裝和使用流程使得個人開發者能夠快速上手。 |
| 不需要追蹤 token 使用的開發者 | 不適合 | 這個工具的核心功能是追蹤 token 使用，對於不需要此功能的用戶來說沒有價值。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠有效追蹤 AI 工具的 token 使用，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅從本地文件讀取數據，無需存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AgentSeal--codeburn");
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
> const me = dv.page("Repos/AgentSeal--codeburn");
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
| Forks | 72 |
| Open Issues | 11 |
| Issue 解決率 | 42% (8 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-13 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AgentSeal/codeburn) |
| Topics | `ai-coding` `claude-code` `cli` `codex` `cost-tracking` `developer-tools` `observability` `terminal-ui` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `commander` `ink` `react` `@types/react` `tsup` `tsx` `typescript` `vitest`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AgentSeal](https://github.com/AgentSeal) | 33 |
> | [@rafaelcalleja](https://github.com/rafaelcalleja) | 6 |
> | [@BlairWelsh](https://github.com/BlairWelsh) | 5 |
> | [@AleBles](https://github.com/AleBles) | 1 |
> | [@oysteinkrog](https://github.com/oysteinkrog) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/AgentSeal/codeburn)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-14 ~ 2026-04-14）
> **活躍天數** 1 天 · **最新 commit** bump to 0.4.2: agent sessions, Codex cache fix, responsive dashboard, CSV injection fix

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/AgentSeal/codeburn/issues/11) | Subscription vs API Use | 3 | 1 |
> | [#12](https://github.com/AgentSeal/codeburn/issues/12) | Feature proposals from a power user (15+ projects, 170+ sess | 1 | 0 |
> | [#2](https://github.com/AgentSeal/codeburn/issues/2) | Feature: show token overhead from unused MCP tool definition | 1 | 0 |
> | [#31](https://github.com/AgentSeal/codeburn/issues/31) | Add support for KiloCode and OpenCode | 0 | 0 |

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
> By task type, tool, model, MCP server, and project. Supports **Claude Code** and **Codex** (OpenAI) with a provider plugin system. Tracks one-shot success rate per activity type so you can see where the AI nails it first try vs. burns tokens on edit/test/fix retries. Interactive TUI dashboard with gradient charts, responsive panels, and keyboard navigation. macOS menu bar widget via SwiftBar. CSV/JSON export.
> 
> Works by reading session transcripts directly from disk. No wrapper, no proxy, no API keys. Pricing from LiteLLM (auto-cached, all models supported).
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
> ### Requirements
> 
> - Node.js 20+
> - Claude Code (`~/.claude/projects/`) and/or Codex (`~/.codex/sessions/`)
> 
> ## Usage
> 
> ```bash
> codeburn                    # interactive dashboard (default: 7 days)
> codeburn today              # today's usage
> codeburn month              # this month's usage
> codeburn report -p 30days   # rolling 30-day window
> codeburn status             # compact one-liner (today + month)
> codeburn status --format json
> codeburn export             # CSV with today, 7 days, 30 days
> codeburn export -f json     # JSON export
> ```
> 
> Arrow keys switch between Today / 7 Days / 30 Days / Month. Press `q` to quit, `1` `2` `3` `4` as shortcuts.
> 
> ## Providers
> 
> CodeBurn auto-detects which AI coding tools you use. If both Claude Code and Codex have session data on disk, press `p` in the dashboard to toggle between them.
> 
> ```bash
> codeburn report                    # all providers combined (default)
> codeburn report --provider claude  # Claude Code only
> codeburn report --provider codex   # Codex only
> codeburn today --provider codex    # Codex today
> codeburn export --provider claude  # export Claude data only
> ```
> 
> The `--provider` flag works on all commands: `report`, `today`, `month`, `status`, `export`.
> 
> ### Supported providers
> 
> | Provider | Data location | Status |
> |----------|--------------|--------|
> | Claude Code | `~/.claude/projects/` | Supported |
> | Claude Desktop | `~/Library/Application Support/Claude/local-agent-mode-sessions/` | Supported |
> | Codex (OpenAI) | `~/.codex/sessions/` | Supported |
> | Pi, OpenCode, Amp | -- | Planned (provider plugin system) |
> 
> Codex tool names are normalized to match Claude's conventions (`exec_command` shows as `Bash`, `read_file` as `Read`, etc.) so the activity classifier and tool breakdown work across providers.
> 
> ### Adding a provider
> 
> The provider plugin system makes adding a new provider a single file. Each provider implements session discovery, JSONL parsing, tool normalization, and model display names. See `src/providers/codex.ts` for an example.
> 
> ## Currency
> 
> By default, costs are shown in USD. To display in a different currency:
> 
> ```bash
> codeburn currency GBP          # set to British Pounds
> codeburn currency AUD          # set to Australian Dollars
> codeburn currency JPY          # set to Japanese Yen
> codeburn currency              # show current setting
> codeburn currency --reset      # back to USD
> ```
> 
> Any [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) is supported (162 currencies). Exchange rates are fetched from [Frankfurter](https://www.frankfurter.app/) (European Central Bank data, free, no API key) and cached for 24 hours at `~/.cache/codeburn/`. Config is stored at `~/.config/codeburn/config.json`.
> 
> The currency setting applies everywhere: dashboard, status bar, menu bar widget, CSV/JSON exports, and JSON API output.
> 
> The menu bar widget includes a currency picker with 17 common currencies. For any currency not listed, use the CLI command above.
> 
> ## Menu Bar
> 
> ```bash
> codeburn install-menubar    # install SwiftBar/xbar plugin
> codeburn uninstall-menubar  # remove it
> ```
> 
> Requires [SwiftBar](https://github.com/swiftbar/SwiftBar) (`brew install --cask swiftbar`). Shows today's cost in the menu bar with a flame icon. Dropdown shows activity breakdown, model costs, token stats, per-provider cost breakdown, and a currency picker. Refreshes every 5 minutes.
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
> ## How it reads data
> 
> **Claude Code** stores session transcripts as JSONL at `~/.claude/projects//.jsonl`. Each assistant entry contains model name, token usage (input, output, cache read, cache write), tool_use blocks, and timestamps.
> 
> **Codex** stores sessions at `~/.codex/sessions/YYYY/MM/DD/rollout-*.jsonl` with `token_count` events containing per-call and cumulative token usage, and `function_call` entries for tool tracking.
> 
> CodeBurn reads these files, deduplicates messages (by API message ID for Claude, by cumulative token cross-check for Codex), filters by date range per entry, and classifies each turn.
> 
> ## Environment variables
> 
> | Variable | Description |
> |----------|-------------|
> | `CLAUDE_CONFIG_DIR` | Override Claude Code data directory (default: `~/.claude`) |
> | `CODEX_HOME` | Override Codex data directory (default: `~/.codex`) |
> 
> ## Project structure
> 
> ```
> src/
>   cli.ts          Commander.js entry point
>   dashboard.tsx   Ink TUI (React for terminals)
>   parser.ts       JSONL reader, dedup, date filter, provider orchestration
>   models.ts       LiteLLM pricing, cost calculation
>   classifier.ts   13-category task classifier
>   types.ts        Type definitions
>   format.ts       Text rendering (status bar)
>   menubar.ts      SwiftBar plugin generator
>   export.ts       CSV/JSON multi-period export
>   config.ts       Config file management (~/.config/codeburn/)
>   currency.ts     Currency conversion, exchange rates, Intl formatting
>   providers/
>     types.ts      Provider interface definitions
>     index.ts      Provider registry
>     claude.ts     Claude Code session discovery
>     codex.ts      Codex session discovery and JSONL parsing
> ```
> 
> ## License
> 
> MIT
> 
> ## Credits
> 
> Inspired by [ccusage](https://github.com/ryoppippi/ccusage). Pricing data from [LiteLLM](https://github.com/BerriAI/litellm). Exchange rates from [Frankfurter](https://www.frankfurter.app/).
> 
> Built by [AgentSeal](https://agentseal.org).

## 延伸閱讀

相關概念：[[成本追蹤]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/AgentSeal/codeburn)

## 相關收錄

> [!note]- 直接競品（同子分類：成本追蹤）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "成本追蹤" AND file.name != "AgentSeal--codeburn"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AgentSeal--codeburn"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "AgentSeal--codeburn" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "AgentSeal--codeburn"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["成本追蹤","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AgentSeal--codeburn" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AgentSeal--codeburn");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AgentSeal--codeburn" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AgentSeal" AND file.name != "AgentSeal--codeburn"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AgentSeal--codeburn");
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
> const me = dv.page("Repos/AgentSeal--codeburn");
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
> const me = dv.page("Repos/AgentSeal--codeburn");
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
> const me = dv.page("Repos/AgentSeal--codeburn");
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
> const me = dv.page("Repos/AgentSeal--codeburn");
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

> **2026-04-15** — 首次收錄
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

- [[2026-04-15|2026-04-15]] — 首次收錄，897 stars
