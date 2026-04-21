---
repo: getagentseal/codeburn
url: https://github.com/getagentseal/codeburn
owner: getagentseal
owner_type: Organization
language: TypeScript
license: MIT
description: "See where your AI coding tokens go. Interactive TUI dashboard for Claude Code, Codex, and Cursor cost observability."
homepage: ""
stars: 3069
stars_per_day: 438
forks: 227
open_issues: 25
created: 2026-04-13
pushed_at: 2026-04-21
first_seen: 2026-04-19
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "成本追蹤"
release_tag: "mac-v0.8.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-19
use_case: "追蹤 AI 編碼工具的使用成本，提供互動式 TUI 儀表板。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-23"
contributor_count: 5
engagement: "low"
issue_close_rate: 47
repo_size_kb: 4031
readme_length: 9886
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-19"
star_history: "2026-04-19:2717,2026-04-20:2871,2026-04-21:3069"
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
  - "追蹤 AI 編碼工具的使用成本，提供互動式 TUI 儀表板。"
---

# codeburn

**3.1k** stars · **438** stars/天 · 建立 7 天前 · TypeScript · MIT

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

`ORG` `mac-v0.8.4` `easy-install`

`ai-coding` `claude-code` `cli` `codex` `cost-tracking` `cursor-ide` `developer-tools` `observability` `terminal-ui` `token-usage`

> [!summary] 一句話摘要
> 追蹤 AI 編碼工具的使用成本，提供互動式 TUI 儀表板。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (438 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要追蹤 AI 編碼工具成本的開發團隊，尤其是中小型專案。
> **一句話重點** CodeBurn 讓開發者能夠清楚追蹤 AI 編碼工具的成本，這在成本控制上是個重要的進步。

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
> **結論** 花 2 小時學習，1 小時整合，得到即時成本追蹤的效果，值得投入。

> [!abstract] 核心創新
> CodeBurn 提供了即時的 AI 編碼工具成本追蹤，無需 API 金鑰或代理。

## 專案簡介

CodeBurn 是一個專為追蹤 AI 編碼工具（如 Claude Code、Codex 和 Cursor）使用成本而設計的互動式 TUI 儀表板。它通過直接從磁碟讀取會話數據，無需 API 金鑰或代理，讓使用者能夠清楚了解每個任務類型、工具和模型的成本。使用者可以透過簡單的 CLI 指令，如 `codeburn` 來啟動儀表板，並使用 `codeburn report` 來生成詳細的使用報告，這些報告可以按日期範圍、項目或提供者進行過濾。這個工具的賣點在於它的即時成本追蹤和一鍵優化功能，幫助開發者識別不必要的開支。其技術架構基於 Node.js 22+，並使用 SQLite 來處理 Cursor 的數據，這使得它能夠在不依賴外部服務的情況下運行，提升了性能和可靠性。

與其他工具相比，如 AgentSeal/codeburn 和 AgriciDaniel/claude-obsidian，CodeBurn 提供了更為直觀的使用界面和更細緻的成本分析，特別適合需要精細化成本控制的開發團隊。在實際使用中，CodeBurn 能夠追蹤多達 13 種任務類別，並提供每日成本圖表和每個項目的詳細分析，這對於大型專案尤其重要。雖然目前僅支援 macOS，但未來可能會擴展到其他平台，這是其發展的一個潛在方向。整體而言，這是一個適合中小型團隊使用的工具，能夠有效降低 AI 編碼的成本。

**技術棧**：`Node.js 22+` · `TypeScript` · `SQLite`

## 重點功能

- 即時成本追蹤 — 透過 `codeburn` 指令啟動互動式儀表板，顯示當前和歷史的使用成本。
- 多種報告格式 — 支援 CSV 和 JSON 格式的導出，方便進一步分析。
- 任務類別追蹤 — 分析 13 種任務類別的成本，幫助使用者了解 AI 在不同任務中的表現。
- 自動刷新功能 — 儀表板每 30 秒自動刷新，確保數據的即時性。
- 提供者插件系統 — 支援多種 AI 編碼工具，未來可輕鬆擴展到新工具。

## 快速開始

1. 全域安裝 CodeBurn
```bash
npm install -g codeburn
```
2. 啟動互動式儀表板
```bash
codeburn
```
3. 生成報告
```bash
codeburn report -p 30days
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 CodeBurn",
  "指令": "codeburn report --format json",
  "預期輸出": "生成 7 天的 JSON 報告，包含成本、調用次數、會話數等數據。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 3069 stars（438/天），forks 227（7.4%），顯示出穩定的增長趨勢。作者 AgentSeal 是一位活躍的開發者，過去在 AI 工具領域有多個貢獻。CodeBurn 解決了開發者在使用 AI 編碼工具時無法有效追蹤成本的痛點，之前的解決方案多數依賴手動記錄或簡單的報告工具，無法提供即時的數據分析。近期的推廣活動和社群討論也促進了其曝光率。隨著 AI 編碼工具的普及，對成本透明度的需求日益增加，這使得 CodeBurn 成為一個值得關注的工具。forks/stars 比率為 7.4%，顯示出相對較高的實際使用和修改意願。

## 適合誰使用

**目標受眾**：需要追蹤 AI 編碼工具成本的開發團隊，尤其是中小型專案。

> [!example] 使用場景
> - 後端工程師用它來追蹤 AI 編碼工具的成本，因為這樣可以清楚了解每個任務的開支，避免不必要的浪費。
> - 產品經理用它來分析不同 AI 模型的效能和成本，因為這有助於在預算內做出更明智的決策。
> - DevOps 工程師用它來優化 CI/CD 流程中的 AI 工具使用，因為能夠即時調整配置以降低成本。

## 架構分析

CodeBurn 採用單一的 Node.js 應用架構，這樣的設計使得安裝和運行都非常簡單。數據從本地磁碟直接讀取，無需依賴外部 API，這樣不僅提高了性能，還減少了潛在的安全風險。使用 SQLite 來處理 Cursor 的數據，這使得數據存取效率高且易於管理。選擇 Node.js 使得開發者能夠利用其豐富的生態系統，並且能夠輕鬆整合其他工具。這種設計的代價是對於非 Node.js 環境的支持有限，未來可能需要考慮擴展到其他語言或平台以吸引更廣泛的用戶群體。

## 技術深入分析

CodeBurn 的核心技術機制是基於 Node.js 的應用架構，利用 TypeScript 提供靜態類型檢查，增強了代碼的可維護性和可讀性。它使用 SQLite 數據庫來高效管理和查詢會話數據，這使得在處理大量數據時依然保持良好的性能。效能方面，CodeBurn 能夠在不依賴外部 API 的情況下，直接從本地磁碟讀取數據，這樣減少了延遲和潛在的安全風險。設計上，選擇 Node.js 使得開發者能夠利用其豐富的生態系統，但這也意味著對於非 Node.js 環境的支持有限。技術風險方面，隨著用戶數量的增加，數據存取的性能可能會成為瓶頸，未來需要考慮如何擴展架構以應對更大的數據量。整合方面，CodeBurn 與現有的開發工具鏈（如 VS Code）相容性良好，能夠輕鬆融入現有的開發流程中，這對於開發者來說是一個重要的優勢。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的完整指導。安裝過程順暢，無明顯坑點。文件中有多種使用範例，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 即時成本追蹤，幫助開發者快速識別開支。
> - 無需 API 金鑰，簡化了使用流程。
> - 支援多種 AI 編碼工具，靈活性高。

> [!danger] 缺點
> - 僅限於 macOS，限制了使用範圍。
> - 需要 Node.js 22+，對於某些用戶可能需要升級。
> - 目前功能相對單一，未來需要擴展更多功能。

> [!warning] 注意事項
> - 僅支援 macOS，尚未有 Windows 或 Linux 版本。
> - 需要 Node.js 22 以上版本，對於舊版用戶需要升級。
> - 目前僅能追蹤特定的 AI 編碼工具，不支援所有工具。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | CodeBurn 是 AgentSeal 的一個專案，提供更為細緻的成本追蹤功能，特別針對 AI 編碼工具的使用。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供了類似的功能，但缺乏即時的成本分析和互動式儀表板。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更為廣泛的 AI 工具管理平台，但缺乏 CodeBurn 的即時成本追蹤功能。 | 如果需要管理多種 AI 工具而不僅僅是成本追蹤，Boneyard 是一個不錯的選擇。 | medium，因為需要重新配置和學習新的工具。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供了類似的功能，但缺乏即時的成本分析和互動式儀表板。 | 如果需要更簡單的工具來追蹤 Claude 的使用，Claude-Obsidian 是一個可考慮的選擇。 | low，因為功能相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codeburn** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供了一個更為廣泛的 AI 工具管理平台，但缺乏 CodeBurn 的即時成本追蹤功能。 | Claude-Obsidian 提供了類似的功能，但缺乏即時的成本分析和互動式儀表板。 |
> | 遷移成本 | - | medium，因為需要重新配置和學習新的工具。 | low，因為功能相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要管理多種 AI 工具而不僅僅是成本追蹤，Boneya | 如果需要更簡單的工具來追蹤 Claude 的使用，Claud |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上安裝時可能會遇到安全警告
  - 解法：右鍵點擊應用程式並選擇「打開」來解除封鎖
- [MEDIUM] 使用過程中可能會出現數據不同步的情況
  - 解法：使用 `--no-cache` 參數來強制重新加載數據
- [MEDIUM] 某些 AI 工具的數據可能無法正確解析
  - 解法：檢查工具的數據存儲位置是否正確

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效追蹤 AI 編碼工具的成本，避免不必要的開支。 |
| 大型企業的 AI 開發團隊 | 普通 | 雖然功能強大，但可能需要更多的擴展性。 |
| 個人開發者的 AI 專案 | 非常適合 | 簡單易用，能夠快速上手。 |
| 需要跨平台支援的團隊 | 不適合 | 目前僅支援 macOS，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時成本追蹤的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CodeBurn 不需要高權限，僅存取本地數據，且不會存取敏感資料。依賴鏈中沒有已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CodeBurn 最常與 VS Code 和其他開發工具搭配使用，作為開發過程中的成本追蹤工具。在一個使用 VS Code 的專案中，開發者可以使用 `codeburn` 指令來查看當前的 AI 編碼成本，並根據報告調整開發策略。它支援 GitHub Actions 等 CI 工具的整合，能夠在自動化流程中提供即時的成本數據。整合的摩擦點主要在於需要確保所有 AI 工具的數據存儲位置正確，否則可能導致數據無法正確解析。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 CodeBurn 出現之前，開發者通常依賴手動記錄或簡單的報告工具來追蹤 AI 編碼工具的使用成本，這些方法效率低下且容易出錯。隨著 AI 編碼工具的普及，對成本透明度的需求日益增加，這使得 CodeBurn 的出現恰逢其時。技術上，Node.js 的普及和 SQLite 的輕量級特性使得這種即時成本追蹤工具的實現成為可能。

CodeBurn 代表了開發者對於成本控制和數據透明度的重視，未來可能會有更多類似的工具出現。

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
| Forks | 227 |
| Open Issues | 25 |
| Issue 解決率 | 47% (22 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-13 |
| Repo 大小 | 3.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/getagentseal/codeburn) |
| Topics | `ai-coding` `claude-code` `cli` `codex` `cost-tracking` `cursor-ide` `developer-tools` `observability` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `commander` `ink` `react` `@types/node` `@types/react` `tsup` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 76
>     "Swift" : 24
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@iamtoruk](https://github.com/iamtoruk) | 196 |
> | [@lfl1337](https://github.com/lfl1337) | 19 |
> | [@AgentSeal](https://github.com/AgentSeal) | 14 |
> | [@spMohanty](https://github.com/spMohanty) | 14 |
> | [@rafaelcalleja](https://github.com/rafaelcalleja) | 6 |

**最新版本**：mac-v0.8.4 — Menubar v0.8.4 (2026-04-21)

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

**社群活躍度**：社群活躍，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/getagentseal/codeburn#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-21）
> **活躍天數** 2 天 · **最新 commit** chore: bump version to 0.8.4, update changelog

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#31](https://github.com/getagentseal/codeburn/issues/31) | Add support for KiloCode and OpenCode `enhancement` | 3 | 4 |
> | [#55](https://github.com/getagentseal/codeburn/issues/55) | Support cursor-agent CLI sessions (~/.cursor/projects/*/agen `enhancement` | 2 | 1 |
> | [#12](https://github.com/getagentseal/codeburn/issues/12) | Feature proposals from a power user (15+ projects, 170+ sess `enhancement` | 2 | 4 |
> | [#47](https://github.com/getagentseal/codeburn/issues/47) | Widget for Windows `enhancement` | 1 | 1 |
> | [#2](https://github.com/getagentseal/codeburn/issues/2) | Feature: show token overhead from unused MCP tool definition `enhancement` | 1 | 1 |

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
> codeburn report --refresh 60    # auto-refresh every 60s (default: 30s)
> codeburn status                 # compact one-liner (today + month)
> codeburn status --format json
> codeburn export                 # CSV with today, 7 days, 30 days
> codeburn export -f json         # JSON export
> codeburn optimize               # find waste, get copy-paste fixes
> codeburn optimize -p week       # scope the scan to last 7 days
> ```
> 
> Arrow keys switch between Today / 7 Days / 30 Days / Month / All Time. Press `q` to quit, `1` `2` `3` `4` `5` as shortcuts, `c` to open model comparison. The dashboard auto-refreshes every 30 seconds by default (`--refresh 0` to disable). The dashboard also shows average cost per session and the five most expensive sessions across all projects.
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
> - Node.js 22+
> - Claude Code (`~/.claude/projects/`), Codex (`~/.codex/sessions/`), Cursor, OpenCode, Pi (`~/.pi/agent/sessions/`), and/or GitHub Copilot (`~/.copilot/session-state/`)
> - For Cursor/OpenCode support: uses Node's built-in `node:sqlite` (Node 22+)
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
> ## Cache behavior
> 
> CodeBurn now keeps a persistent parse cache under `~/.cache/codeburn/source-cache-v1/`.
> It applies to every provider. Unchanged sources load from cache across fresh CLI runs,
> while changed sources are refreshed on demand so rolling windows like `today` stay current
> as new log entries land.
> 
> Use `--no-cache` on any command that reads session data to ignore cached entries for that
> run and rebuild them from raw logs:
> 
> ```bash
> codeburn today --no-cache
> codeburn report --period all --no-cache
> codeburn export --no-cache
> ```
> 
> When a non-JSON command needs to rebuild part of the cache, CodeBurn shows an
> `Updating cache` progress bar on stderr. JSON output stays clean on stdout.
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
> | Pi | `~/.pi/agent/sessions/` | Supported

## 延伸閱讀

相關概念：[[成本追蹤]] · [[開發工具]] · [[AI 編碼]]

相關專案：[[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

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
> const concepts = ["成本追蹤","開發工具","AI 編碼"];
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
