---
repo: DietrichGebert/ponytail
url: https://github.com/DietrichGebert/ponytail
owner: DietrichGebert
owner_type: User
language: JavaScript
license: MIT
description: "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote."
homepage: ""
stars: 16748
stars_per_day: 4187
forks: 703
open_issues: 12
created: 2026-06-12
pushed_at: 2026-06-16
first_seen: 2026-06-13
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: "v4.6.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-13
use_case: "讓 AI 代理像最懶的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-19"
contributor_count: 5
engagement: "low"
issue_close_rate: 68
repo_size_kb: 1553
readme_length: 7907
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-13"
star_history: "2026-06-13:939,2026-06-13:940,2026-06-14:1541,2026-06-14:1548,2026-06-15:8281,2026-06-15:8304,2026-06-16:16706,2026-06-16:16748"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/claude_code_plugin"
aliases:
  - "ponytail"
  - "DietrichGebert/ponytail"
  - "讓 AI 代理像最懶的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。"
---

# ponytail

**16.7k** stars · **4.2k** stars/天 · 建立 4 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/DietrichGebert--ponytail");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v4.6.0` `easy-install`

`agent-skills` `ai-agents` `claude` `claude-code` `claude-code-plugin` `cursor-rules` `developer-tools` `llm` `prompt-engineering` `yagni`

> [!summary] 一句話摘要
> 讓 AI 代理像最懶的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (4.2k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速開發和簡化代碼的開發團隊，特別是面對繁瑣任務的工程師。
> **一句話重點** Ponytail 不僅是一個工具，更是一種開發哲學，強調簡化和效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "DietrichGebert--ponytail" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到顯著的開發效率提升，值得嘗試。

> [!abstract] 核心創新
> Ponytail 透過 YAGNI 原則和自動化依賴管理，顯著減少開發者的程式碼負擔。

## 專案簡介

Ponytail 是一個旨在讓 AI 代理以最簡單的方式解決問題的工具，透過減少不必要的程式碼來提升效率。使用者只需輸入需求，Ponytail 會根據一系列的邏輯判斷來決定是否需要寫程式碼，並且優先使用標準庫或現有依賴，這樣可以達到 80-94% 的程式碼減少和 3-6 倍的執行速度提升。核心機制是透過一個多層次的檢查流程來確保每一行程式碼的必要性，並在必要時只寫出最簡單的解決方案。這樣的設計不僅減少了開發時間，也降低了維護成本。Ponytail 的安裝過程相對簡單，支持多種環境，包括 Claude Code 和 Codex，使用者只需執行簡單的命令即可完成安裝。

與其他 AI 代理相比，如 caveman，Ponytail 更加注重簡化程式碼的生成，並且在性能上也表現出色。實際使用中，Ponytail 可以有效減少過度工程的風險，並且在代碼審查時提供有價值的建議。這個工具適合任何希望減少開發負擔的團隊，尤其是那些面對繁瑣任務的開發者。隨著社群的活躍和持續的更新，Ponytail 的未來發展潛力巨大，值得關注。

**技術棧**：`Node.js`

## 重點功能

- 簡化代碼生成 — 透過 YAGNI 原則，減少 80-94% 的程式碼。
- 性能優化 — 在多個模型上測試，實現 3-6 倍的執行速度提升。
- 多平台支持 — 支援 Claude Code、Codex、Gemini CLI 等多種環境。
- 即時代碼審查 — 提供 `/ponytail-review` 命令，檢查當前代碼的過度工程問題。
- 自動化依賴管理 — 自動選擇標準庫或已安裝的依賴，減少不必要的代碼。

## 快速開始

1. 安裝 Ponytail 插件
```bash
/plugin marketplace add DietrichGebert/ponytail
```
2. 安裝 Ponytail
```bash
/plugin install ponytail@ponytail
```
3. 檢查安裝狀態
```bash
/ponytail-help
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 Ponytail 插件",
  "/ponytail ultra",
  "# 預期輸出：啟用超級模式，減少過度工程的代碼。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 16748 stars（4187/天），forks 703（4.2%），這顯示出強烈的興趣和使用潛力。作者 DietrichGebert 在開源社群中有一定的影響力，這個專案解決了開發者在日常工作中面對的過度工程問題，提供了一種簡化開發流程的創新方法。近期的推廣和社群討論也可能促進了這個專案的曝光率。這個工具的設計理念符合當前對於簡化開發流程的需求，尤其是在 AI 代理的應用上。forks/stars 比率為 4.2%，顯示出使用者對於這個專案的實際修改和應用的興趣。

## 適合誰使用

**目標受眾**：需要快速開發和簡化代碼的開發團隊，特別是面對繁瑣任務的工程師。

> [!example] 使用場景
> - 前端工程師用它來快速生成日期選擇器，因為 Ponytail 可以省去安裝和配置第三方庫的麻煩，直接生成簡潔的 HTML。
> - 後端開發者用它來優化 API 的代碼，因為 Ponytail 能夠自動檢查過度工程的部分並提供簡化建議，提升開發效率。
> - 數據科學家用它來快速處理 CSV 數據，因為 Ponytail 可以簡化數據處理的代碼，讓他們專注於數據分析而非編碼細節。

## 架構分析

Ponytail 的架構設計以簡化為核心，使用 Node.js 作為基礎，並透過插件系統與多個 AI 代理進行整合。資料流方面，使用者的請求會經過一系列的邏輯判斷，首先檢查需求是否必要，然後選擇最佳的解決方案。這樣的設計使得 Ponytail 能夠在不影響安全性和可用性的前提下，最大限度地減少代碼量。選擇 Node.js 是因為其輕量級和高效能，適合快速開發和迭代。這種架構的擴展性良好，但在面對特定複雜需求時，可能需要額外的手動調整。

## 技術深入分析

Ponytail 的核心技術機制是基於 YAGNI 原則，這意味著在開發過程中，開發者應該避免編寫不必要的程式碼。它使用 Node.js 作為後端，通過插件系統與多個 AI 代理進行整合，這使得它能夠在多種環境中運行。效能方面，Ponytail 在多個模型上進行了基準測試，顯示出其在執行速度和成本上的優勢。設計上，Ponytail 透過簡化的邏輯流程來決定是否需要寫程式碼，這樣的選擇使得它能夠快速響應使用者需求。技術風險方面，對於複雜需求的支持仍然有限，可能在未來的擴展中遇到挑戰。整合方面，Ponytail 能夠輕鬆地與主流開發工具鏈進行整合，並且提供了良好的 CI/CD 支援，這使得它在實際使用中非常方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體步驟；安裝過程相對順暢，沒有明顯的坑；有良好的入門指南，適合新手快速上手；文件目前僅提供英文版本，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 顯著減少程式碼量，提升開發效率。
> - 自動化檢查過度工程，減少維護負擔。
> - 支持多種 AI 代理環境，易於整合。

> [!danger] 缺點
> - 對於複雜需求的支持有限，可能無法完全自動化。
> - 過度依賴自動化可能影響代碼可讀性。
> - 僅限於特定的開發環境，對於其他環境的支持不足。

> [!warning] 注意事項
> - 僅支援特定的 AI 代理環境，如 Claude Code 和 Codex。
> - 對於非常複雜的需求，可能仍需手動介入。
> - 在某些情況下，過度依賴自動化可能導致代碼可讀性下降。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Caveman 主要透過簡單的邏輯處理來生成代碼，但不如 Ponytail 在減少代碼方面有效。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供更多的自定義選項，但在簡化代碼生成的效率上不及 Ponytail。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Caveman 主要依賴簡單的邏輯來生成代碼，但不如 Ponytail 在減少代碼方面有效。 | 如果你的團隊需要一個簡單的代碼生成工具，且不需要過多的自動化功能，Caveman 可能是更好的選擇。 | low，因為兩者的使用方式相似，轉換成本不高。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供更多的自定義選項，但在簡化代碼生成的效率上不及 Ponytail。 | 如果你的團隊需要高度自定義的代碼生成，Agent Sprite Forge 可能更合適。 | medium，因為需要重新調整開發流程以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ponytail** | **caveman** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Caveman 主要依賴簡單的邏輯來生成代碼，但不如 Ponytail 在減少代碼方面有效。 | Agent Sprite Forge 提供更多的自定義選項，但在簡化代碼生成的效率上不及 Ponytail。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似，轉換成本不高。 | medium，因為需要重新調整開發流程以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個簡單的代碼生成工具，且不需要過多的自動化 | 如果你的團隊需要高度自定義的代碼生成，Agent Sprit |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中安裝後無法正確啟動插件
  - 解法：確保 Node.js 在 PATH 中可用，或手動檢查環境變數設定。
- [MEDIUM] 過度依賴自動化可能導致代碼可讀性下降
  - 解法：定期進行代碼審查，確保代碼質量。
- [MEDIUM] 在複雜需求下可能無法自動生成所需代碼
  - 解法：在必要時手動介入，補充自動生成的代碼。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | Ponytail 能夠快速生成所需功能，減少開發時間。 |
| 大型企業的複雜系統開發 | 不適合 | 在複雜需求下，Ponytail 可能無法滿足所有需求。 |
| 需要快速原型開發的小型專案 | 非常適合 | Ponytail 的簡化特性能夠快速響應需求變更。 |
| 需要高度自定義的開發環境 | 普通 | 雖然 Ponytail 提供簡化，但在自定義方面可能不如其他工具靈活。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的開發效率提升，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Ponytail 本身不需要高權限運行，且不存取敏感資料，但仍需注意依賴的安全性和更新狀態。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Ponytail 最常與 Claude Code、Codex 等 AI 代理搭配使用，通常在開發過程中提供即時的代碼生成和審查功能。在實際整合中，使用者只需安裝插件並配置相應的環境變數即可。對於 CI/CD 流程，Ponytail 可以輕鬆集成到現有的工作流中，並且提供了良好的支援。常見的整合問題包括環境變數配置不當，這可能導致插件無法正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Ponytail 出現之前，開發者通常需要手動編寫大量的代碼，這導致了過度工程和維護成本的增加。隨著 AI 技術的進步，開發者開始尋求更高效的代碼生成工具。Ponytail 的出現正是滿足了這一需求，通過簡化代碼生成過程，讓開發者能夠專注於更重要的業務邏輯。

這個工具代表了開發工具向自動化和智能化的趨勢，未來可能會隨著 AI 技術的進一步發展而變得更加成熟。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的 JavaScript 知識
- 熟悉 Node.js 環境
- 了解 AI 代理的基本概念

> [!tip] 導入策略
> 第一週：在個人專案中試用 Ponytail。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋並進行調整。第四週：在主產品中逐步推廣使用。

**成功指標**：開發時間減少 30%，代碼質量提升。

> [!warning] 退出計畫
> 若需退出，所有設定均以標準 JSON 格式保存，可輕鬆轉換為其他工具的配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
| Forks | 703 |
| Open Issues | 12 |
| Issue 解決率 | 68% (25 closed) |
| 最後推送 | 2026-06-16 |
| 建立日期 | 2026-06-12 |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DietrichGebert/ponytail) |
| Topics | `agent-skills` `ai-agents` `claude` `claude-code` `claude-code-plugin` `cursor-rules` `developer-tools` `llm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 91
>     "Python" : 8
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DietrichGebert](https://github.com/DietrichGebert) | 47 |
> | [@ousamabenyounes](https://github.com/ousamabenyounes) | 2 |
> | [@ChindanaiNaKub](https://github.com/ChindanaiNaKub) | 2 |
> | [@apardawala](https://github.com/apardawala) | 1 |
> | [@rygel](https://github.com/rygel) | 1 |

**最新版本**：v4.6.0 — v4.6.0: help, reluctantly (2026-06-15)

> [!info]- Release Notes
> He has never explained a command in his life. You typed `/ponytail-help` and got
> nothing, because the file was never actually there, only the promise of it in the
> docs. The most senior-dev bug there is: works in the standup, missing from the repo.
> 
> Now it ships. `/ponytail-help` is wired up alongside the other commands on every
> skill-capable host (Claude Code, Codex, OpenCode, Gemini CLI, pi): one command that
> lists the rest. A new parity test makes sure no future command can be advertised
> without the files to back it. He hates writing documentation. He hates broken
> promises more.
> 
> **We benchmarked him on a tiny local model and shipped the flop.**
> 
> A contributor added an Ollama runner so you can test ponytail on local models. We
> ran it on llama3.2 (3B) and the lines-of-code win turned out to be noise: one run
> lands 17% under baseline, the next 50% over, the median shrugs. The skill is tuned
> for models that actually follow instructions. A 3B model nods along and writes the
> boilerplate anyway.
> 
> We published that instead of burying it. A benchmark you only show when it flatters
> you is an ad. The frontier numbers (80-94% less code on Haiku, Sonnet, Opus) still
> hold, and now there's an honest note on where they stop. Full reproduction in
> `benchmarks/results/`.
> 
> Swept up on the way out: a counter that scored unfenced code as zero, and a Unicode
> character that crashed the runner on Windows after the work was already done.
> 
> He'd call it a quiet release. Then he'd stop talking.

## 社群與生態

**社群活躍度**：社群活躍，持續更新和回應問題。
**連結**：[文件](https://github.com/DietrichGebert/ponytail)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-15 ~ 2026-06-15）
> **活躍天數** 1 天 · **最新 commit** docs: Antigravity CLI install, global default level, OpenCode absolute path (#73)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#65](https://github.com/DietrichGebert/ponytail/issues/65) | Impact on model performance? | 9 | 8 |
> | [#76](https://github.com/DietrichGebert/ponytail/issues/76) | Thought you might like this: I integrated Ponytail into a CL | 4 | 2 |
> | [#70](https://github.com/DietrichGebert/ponytail/issues/70) | ultimate form of ponytail: mcp prompt injection? | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Ponytail
> 
>   He says nothing. He writes one line. It works.
> 
>   
>   
>   
>   
> 
>   80-94% less code &middot; 3-6&times; faster &middot; 47-77% cheaper
>   Median of 10 runs across Haiku, Sonnet, and Opus. Reproduce it yourself.
> 
> ---
> 
> You know him. Long ponytail. Oval glasses. Has been at the company longer than the version control. You show him fifty lines; he looks at them, says nothing, and replaces them with one.
> 
> Ponytail puts him inside your AI agent.
> 
> ## Before / after
> 
> You ask for a date picker. Your agent installs flatpickr, writes a wrapper component, adds a stylesheet, and starts a discussion about timezones.
> 
> With ponytail:
> 
> ```html
> 
> ```
> 
> More survivors in [examples/](examples/).
> 
> ## Numbers
> 
> Five everyday tasks (email validator, debounce, CSV sum, countdown timer, rate limiter), three models, three arms: no skill, the [caveman](https://github.com/JuliusBrussee/caveman) skill, and ponytail. Ten runs per cell, median reported.
> 
>   
> 
> **80-94% less code, 47-77% less cost, and 3-6× faster than a no-skill agent, on every model.** Every shortcut ponytail takes is marked in the code with a `ponytail:` comment naming its upgrade path. Reproduce it yourself: `npx promptfoo eval -c benchmarks/promptfooconfig.yaml`. Method and raw numbers: [benchmarks/](benchmarks/). Production-grade tasks, where an unconstrained agent bloats far more, are written up in [benchmarks/results/](benchmarks/results/).
> 
> ## How it works
> 
> Before writing code, the agent stops at the first rung that holds:
> 
> ```
> 1. Does this need to exist?   → no: skip it (YAGNI)
> 2. Stdlib does it?            → use it
> 3. Native platform feature?   → use it
> 4. Installed dependency?      → use it
> 5. One line?                  → one line
> 6. Only then: the minimum that works
> ```
> 
> Lazy, not negligent: trust-boundary validation, data-loss handling, security, and accessibility are never on the chopping block.
> 
> ## Install
> 
> The most effort ponytail will ever ask of you:
> 
> The Claude Code and Codex plugins run two tiny Node.js lifecycle hooks, so `node` needs to be on your PATH (note for Nix/nvm users: it must be on the non-interactive shell's PATH). If it isn't, the skills still work, the always-on activation just stays quiet instead of erroring on every prompt.
> 
> ### Claude Code
> 
> ```
> /plugin marketplace add DietrichGebert/ponytail
> /plugin install ponytail@ponytail
> ```
> 
> ### Codex
> 
> ```bash
> codex plugin marketplace add DietrichGebert/ponytail
> codex
> ```
> 
> Open `/plugins`, select the Ponytail marketplace, and install Ponytail. Then
> open `/hooks`, review and trust its two lifecycle hooks, and start a new thread.
> 
> This same install also covers the Codex desktop app: restart the app after installing and it picks up the plugin.
> 
> ### GitHub Copilot CLI
> 
> ```bash
> copilot plugin marketplace add DietrichGebert/ponytail
> copilot plugin install ponytail@ponytail
> ```
> 
> In an interactive Copilot CLI session, use the slash equivalents:
> 
> ```
> /plugin marketplace add DietrichGebert/ponytail
> /plugin install ponytail@ponytail
> ```
> 
> Copilot CLI namespaces plugin commands by plugin name. For example:
> 
> ```text
> /ponytail:ponytail ultra
> /ponytail:ponytail-review
> ```
> 
> ### Pi agent harness
> 
> ```
> pi install git:github.com/DietrichGebert/ponytail
> ```
> 
> ### OpenCode
> 
> Run OpenCode from a checkout of this repo (the plugin reuses its `hooks/` and `skills/`), and add to `opencode.json`:
> 
> ```json
> { "plugin": ["./.opencode/plugins/ponytail.mjs"] }
> ```
> 
> Injects the ruleset every turn at the active level; adds the `/ponytail` commands (see [Commands](#commands)). OpenCode also auto-loads this repo's `AGENTS.md`, so the rules hold even without the plugin. The plugin adds the `lite/full/ultra/off` levels.
> 
> The `./` path resolves against your project's `opencode.json`; to share one checkout across projects, point it at the absolute path of the `.mjs` instead (it finds its `hooks/` and `skills/` relative to its own file).
> 
> ### Gemini CLI
> 
> ```bash
> gemini extensions install https://github.com/DietrichGebert/ponytail
> ```
> 
> Loads the ruleset as always-on context every session and registers the `/ponytail` commands; the `skills/` ship too, activated when a task needs them.
> 
> ### Antigravity CLI
> 
> Google is renaming Gemini CLI to Antigravity CLI (the `agy` binary); the same extension installs there:
> 
> ```bash
> agy plugin install https://github.com/DietrichGebert/ponytail
> ```
> 
> It reuses this repo's `gemini-extension.json`. One difference: Antigravity converts the `/ponytail` commands into skills, so you type them into the chat (e.g. `/ponytail-review` as a message) instead of picking them from a slash menu. Until the migration completes (around June 18, 2026), `gemini extensions install` still works too. To run it as an always-on rule instead, drop the ruleset into `.agents/rules/`.
> 
> That was it. He'd be proud. He won't say it.
> 
> Active every session, with a handful of commands (see [Commands](#commands)). `/ponytail ultra` exists for when the codebase has wronged you personally. Startup and mode-change text shows the current mode.
> 
> Set the level for every new session with the `PONYTAIL_DEFAULT_MODE` env var (`lite`/`full`/`ultra`/`off`), or a `defaultMode` field in `~/.config/ponytail/config.json` (`%APPDATA%\ponytail\config.json` on Windows). The default is `full`.
> 
> Cursor, Windsurf, Cline, GitHub Copilot (editor), Aider, Kiro: copy the matching rules file from this repo ([`.cursor/rules/`](.cursor/rules/), [`.windsurf/rules/`](.windsurf/rules/), [`.clinerules/`](.clinerules/), [`.github/copilot-instructions.md`](.github/copilot-instructions.md), [`AGENTS.md`](AGENTS.md), [`.kiro/steering/`](.kiro/steering/)).
> 
> Kiro: copy `.kiro/steering/ponytail.md` to `~/.kiro/steering/` (global) or `.kiro/steering/` in your project.
> 
> GitHub Copilot CLI fallback (instruction-only mode): it reads `AGENTS.md` and `.github/copilot-instructions.md` in a project, or copy the rules into `~/.copilot/copilot-instructions.md` to run ponytail in every project. This path keeps always-on guidance, but does not add plugin mode switches or hooks.
> 
> VS Code with the Codex extension reads `AGENTS.md`, which this repo ships, so it works from the repo root with no setup (`~/.codex/AGENTS.md` makes Codex global).
> 
> Which files map to which agent: [Agent portability](docs/agent-portability.md).
> 
> ## Commands
> 
> | Command | What it does |
> |---------|--------------|
> | `/ponytail [lite \| full \| ultra \| off]` | Set the intensity, or turn it off. No argument reports the current level. |
> | `/ponytail-review` | Review the current diff for over-engineering, hands back a delete-list. |
> | `/ponytail-audit` | Audit the whole repo for over-engineering, not just the diff. |
> | `/ponytail-debt` | Harvest the `ponytail:` shortcuts you've deferred into a ledger, so "later" doesn't become "never". |
> | `/ponytail-help` | Quick reference for the commands above. |
> 
> Commands need a skill-capable host (Claude Code, Codex, OpenCode, Gemini, pi). In Codex they're skills, invoke with `@` (`@ponytail-review`). The instruction-only adapters (Cursor, Windsurf, Cline, Copilot, Kiro, Antigravity) load the always-on ruleset without the commands.
> 
> ## Development
> 
> When changing the compact rule text, keep the agent copies aligned:
> 
> ```bash
> node scripts/check-rule-copies.js
> npm test
> ```
> 
> The correctness benchmark spawns Python for email and CSV checks; `python3` is tried before `python`. CSV checks need `pandas` installed locally.
> 
> ## FAQ
> 
> **Does it need a config file?**
> No. An optional `~/.config/ponytail/config.json` or `PONYTAIL_DEFAULT_MODE` env var can set the default level, but nothing is required.
> 
> **What if I really need the 120-line cache class?**
> You don't. Insist anyway and he'll build it. Slowly. Correctly. While looking at you.
> 
> **Does it scale?**
> The code you never wrote scales infinitely. Zero bugs, zero CVEs, 100% uptime since forever.
> 
> **Why "ponytail"?**
> You know exactly why.
> 
> ## License
> 
> [MIT](LICENSE). The shortest license that works.

## 延伸閱讀

相關概念：[[自動化]] · [[程式碼生成]] · [[YAGNI]]

相關專案：[[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/DietrichGebert/ponytail)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "DietrichGebert--ponytail" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","程式碼生成","YAGNI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DietrichGebert--ponytail" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DietrichGebert--ponytail" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DietrichGebert" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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

> **2026-06-13** — 首次收錄
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

- [[2026-06-16|2026-06-16]] — 再次上榜，16.7k stars
- [[2026-06-15|2026-06-15]] — 再次上榜，8.3k stars
- [[2026-06-14|2026-06-14]] — 再次上榜，1.5k stars
- [[2026-06-13|2026-06-13]] — 首次收錄，939 stars
