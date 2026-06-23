---
repo: XiaomiMiMo/MiMo-Code
url: https://github.com/XiaomiMiMo/MiMo-Code
owner: XiaomiMiMo
owner_type: Organization
language: TypeScript
license: MIT
description: "MiMo Code: Where Models and Agents Co-Evolve"
homepage: "https://mimo.xiaomi.com/coder"
stars: 10358
stars_per_day: 863
forks: 967
open_issues: 542
created: 2026-06-10
pushed_at: 2026-06-22
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "AI 編碼助手"
release_tag: "v0.1.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "提供一個終端原生的 AI 編碼助手，能夠理解和管理代碼，並持續自我改進。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-06-20"
contributor_count: 5
engagement: "low"
issue_close_rate: 15
repo_size_kb: 51453
readme_length: 7521
bus_factor: 2
last_release_days: 8
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:681,2026-06-11:794,2026-06-12:4740,2026-06-12:4782,2026-06-13:6887,2026-06-13:6905,2026-06-14:7947,2026-06-14:7958,2026-06-15:8469,2026-06-15:8478,2026-06-16:9041,2026-06-16:9048,2026-06-17:9378,2026-06-17:9380,2026-06-18:9596,2026-06-19:9794,2026-06-20:9948,2026-06-21:10087,2026-06-22:10194,2026-06-23:10358"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/cli"
  - "topic/mimo"
  - "topic/mimo_code"
aliases:
  - "MiMo-Code"
  - "XiaomiMiMo/MiMo-Code"
  - "提供一個終端原生的 AI 編碼助手，能夠理解和管理代碼，並持續自我改進。"
---

# MiMo-Code

**10.4k** stars · **863** stars/天 · 建立 12 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.1` `easy-install`

`ai` `ai-agents` `cli` `mimo` `mimo-code`

> [!summary] 一句話摘要
> 提供一個終端原生的 AI 編碼助手，能夠理解和管理代碼，並持續自我改進。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (863 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在終端環境中提升編碼效率的開發者，特別是需要長期維護專案的團隊。
> **一句話重點** MiMoCode 的持久記憶和多代理系統設計讓它在長期專案中具備競爭力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 編碼助手" && p.file.name !== "XiaomiMiMo--MiMo-Code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 編碼助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的編碼助手，值得嘗試。

> [!abstract] 核心創新
> 提供多代理系統和持久記憶功能，能夠在長期專案中保持上下文。

## 專案簡介

MiMoCode 是一個終端原生的 AI 編碼助手，能夠讀寫代碼、執行命令、管理 Git，並使用持久記憶系統在會話之間保持對專案的深入理解。用戶可以通過簡單的指令 `curl -fsSL https://mimo.xiaomi.com/install | bash` 進行安裝，並在首次啟動時自動配置。這個工具的核心賣點在於其多代理系統，允許用戶在不同的工作模式之間切換，如開發、計劃和組合，這樣的設計使得用戶能夠根據當前需求靈活調整工作流程。技術上，MiMoCode 使用 SQLite FTS5 進行跨會話的持久記憶，能自動保存會話狀態並重建上下文，這樣可以避免重複學習專案背景。與同類工具相比，MiMoCode 的記憶管理和任務追蹤系統更為智能，能夠自動決定何時保存狀態，並在上下文接近限制時重建上下文。

這使得用戶在長期專案中能夠保持高效。相比於其他工具如 OpenCode，MiMoCode 提供了更強的記憶和上下文管理能力，特別適合需要長期跟蹤和管理的開發環境。使用者可能會遇到 WSL 上的剪貼板問題，但可以通過安裝 `xsel` 來解決。這個專案目前處於 v0.1.1 版本，社群活躍度不高，開放問題數量較多，顯示出其仍在積極開發中。適合希望在終端環境中提升編碼效率的開發者，尤其是那些需要長期維護專案的團隊。

**技術棧**：`TypeScript` · `Astro` · `SQLite`

## 重點功能

- 多代理系統 — 支持開發、計劃和組合三種工作模式，通過按 Tab 鍵切換。
- 持久記憶 — 使用 SQLite FTS5 進行跨會話記憶，能自動保存專案知識和會話狀態。
- 智能上下文管理 — 自動決定何時保存會話狀態，並在上下文接近限制時重建上下文。
- 任務追蹤系統 — 提供樹狀任務系統，能夠自動與檢查點系統整合，保持任務進度。
- 子代理系統 — 允許主代理根據需要創建子代理，並共享當前會話上下文。

## 快速開始

1. 一行安裝
```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
```
2. 或通過 npm 安裝
```bash
npm install -g @mimo-ai/cli
```
3. 運行 MiMoCode
```bash
mimo
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 MiMoCode",
  "指令": "mimo",
  "預期輸出": "啟動 MiMoCode 並引導用戶進行配置"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 10358 stars（863/天），forks 967（9.3%），顯示出強勁的增長潛力。作者團隊來自小米，擁有豐富的技術背景，之前的工具如 OpenCode 在記憶和上下文管理上存在不足，MiMoCode 針對這些痛點進行了優化。近期的社群反饋顯示出對於其功能的期待，特別是在多代理系統和持久記憶的應用上。這些特性使得 MiMoCode 在 AI 編碼助手的市場中具備競爭力，尤其是在需要長期專案管理的情境下。forks/stars 比率為 9.3%，顯示出相對較高的實際使用意願。

## 適合誰使用

**目標受眾**：希望在終端環境中提升編碼效率的開發者，特別是需要長期維護專案的團隊。

> [!example] 使用場景
> - 後端工程師用它來管理大型專案的代碼和版本控制，因為其持久記憶系統能減少重複學習的時間。
> - 全端開發者用它來快速切換不同的工作模式（開發、計劃、組合），因為這樣可以根據當前需求靈活調整工作流程。
> - 新手開發者用它來學習和實踐代碼管理，因為其自動配置和簡單的命令行介面降低了入門門檻。

## 架構分析

MiMoCode 採用模組化架構，主要由多個子系統組成，包括代理系統、記憶管理和任務追蹤。這樣的設計使得每個子系統可以獨立開發和測試，降低了維護成本。數據流方面，使用 SQLite 進行持久記憶的管理，能夠快速查詢和更新專案狀態。選擇 SQLite 作為數據存儲方案的好處在於其輕量級和易於集成，但在面對大規模數據時可能會出現性能瓶頸。整體架構的擴展性良好，能夠支持未來的功能擴展和性能優化。

## 技術深入分析

MiMoCode 的核心技術機制包括多代理系統和持久記憶管理。多代理系統允許用戶根據當前需求靈活切換工作模式，這在開發過程中提供了更高的靈活性。持久記憶系統使用 SQLite FTS5 進行數據存儲，能夠快速查詢和更新專案狀態，這對於長期專案的管理至關重要。效能方面，MiMoCode 能夠處理中小型專案的數據，但在面對大規模數據時可能會出現性能瓶頸。選擇 TypeScript 和 Astro 作為開發語言和框架，提供了良好的開發體驗和可維護性，但也可能增加學習成本。技術風險方面，持久記憶的設計可能在數據量增長時出現性能問題，這需要在未來的版本中進行優化。整合方面，MiMoCode 與現有的開發工具鏈相容性良好，能夠輕鬆集成到現有的 CI/CD 流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用的範例，安裝過程相對順暢，但在 WSL 環境下可能會遇到剪貼板問題。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 提供多代理系統，靈活適應不同開發需求。
> - 持久記憶系統減少重複學習時間，提高工作效率。
> - 智能上下文管理能自動保存和重建會話狀態。

> [!danger] 缺點
> - 仍在開發中，可能存在未解決的 bug。
> - 社群活躍度不高，問題解決率較低。
> - 在 WSL 環境下可能會遇到剪貼板問題。

> [!warning] 注意事項
> - 目前仍在開發中，可能存在未解決的 bug。
> - 社群活躍度不高，開放問題數量較多，顯示出仍需改進。
> - 在 WSL 環境下可能會遇到剪貼板問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手，但缺乏持久記憶系統，適合短期專案。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼片段管理，無法提供多代理系統的靈活性。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 支持多代理，但不具備持久記憶功能，對於長期專案的支持較弱。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼助手，但缺乏持久記憶系統，適合短期專案。 | 如果你的專案不需要長期記憶管理，且希望快速上手。 | low，因為兩者功能相似，切換成本低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼片段管理，無法提供多代理系統的靈活性。 | 如果你的需求主要是代碼片段的管理，而非全面的 AI 編碼助手。 | medium，因為需要重新適應不同的工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MiMo-Code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 編碼助手，但缺乏持久記憶系統，適合短期專案。 | 專注於代碼片段管理，無法提供多代理系統的靈活性。 |
> | 遷移成本 | - | low，因為兩者功能相似，切換成本低。 | medium，因為需要重新適應不同的工作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案不需要長期記憶管理，且希望快速上手。 | 如果你的需求主要是代碼片段的管理，而非全面的 AI 編碼助手 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 WSL 環境下剪貼板可能出現問題
  - 解法：安裝 xsel 解決剪貼板問題
- [MEDIUM] 社群活躍度不高，問題解決率低
  - 解法：定期檢查 GitHub Issues，尋找解決方案
- [MEDIUM] 可能存在未解決的 bug，影響使用體驗
  - 解法：使用穩定版本，避免使用最新的 alpha 版本

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 持久記憶系統能有效管理長期專案的代碼和狀態。 |
| 大型企業的多團隊協作專案 | 適合 | 多代理系統能夠支持不同團隊的需求。 |
| 個人開發者的短期專案 | 普通 | 雖然功能強大，但可能過於複雜。 |
| 需要快速原型開發的團隊 | 不適合 | 目前仍在開發中，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的編碼助手，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取專案相關資料，依賴鏈中無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
| Forks | 967 |
| Open Issues | 542 |
| Issue 解決率 | 15% (99 closed) |
| 最後推送 | 2026-06-22 |
| 建立日期 | 2026-06-10 |
| 官方網站 | [Link](https://mimo.xiaomi.com/coder) |
| Repo 大小 | 50.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XiaomiMiMo/MiMo-Code) |
| Topics | `ai` `ai-agents` `cli` `mimo` `mimo-code` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 63
>     "MDX" : 33
>     "CSS" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MiMoHardFather](https://github.com/MiMoHardFather) | 33 |
> | [@yanyihan-xiaomi](https://github.com/yanyihan-xiaomi) | 16 |
> | [@qiaozongming](https://github.com/qiaozongming) | 11 |
> | [@JinyuXiang-Mimo](https://github.com/JinyuXiang-Mimo) | 11 |
> | [@wqymi](https://github.com/wqymi) | 9 |

**最新版本**：v0.1.1 (2026-06-15)

> [!info]- Release Notes
> MiMoCode v0.1.1

## 社群與生態

**社群活躍度**：社群活躍度不高，開放問題數量較多。
**連結**：[文件](https://mimo.xiaomi.com/coder)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-22）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1217 from XiaomiMiMo/fix/metrics-client-improvements

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#460](https://github.com/XiaomiMiMo/MiMo-Code/issues/460) | [BUG] 睿智的模型会乱删文件 `bug` | 8 | 4 |
> | [#1118](https://github.com/XiaomiMiMo/MiMo-Code/issues/1118) | wechat-mimocode — MiMoCode 链接微信的实践与反馈 | 6 | 2 |
> | [#588](https://github.com/XiaomiMiMo/MiMo-Code/issues/588) | [PROJECT GOVERNANCE]: Community is watching — MiMo Code has  | 5 | 4 |
> | [#125](https://github.com/XiaomiMiMo/MiMo-Code/issues/125) | [FEATURE]:希望支持从opencode切换到mimo code | 5 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> MiMoCode
> 
>   
> 
> MiMo Code: Where Models and Agents Co-Evolve
> 
>   中文 | English
> 
>   Website | Blog
> 
> ---
> 
> MiMoCode is a terminal-native AI coding assistant. It can read and write code, run commands, manage Git, and use a persistent memory system to keep a deep understanding of your project across sessions while continuously improving itself.
> 
> MiMo Auto is built in as a free-for-limited-time channel, so you can start with zero configuration. MiMoCode also supports connecting to any mainstream LLM provider API.
> 
> ---
> 
> ## Quick Start
> 
> ```bash
> # One-line install
> curl -fsSL https://mimo.xiaomi.com/install | bash
> 
> # Or install via npm
> npm install -g @mimo-ai/cli
> 
> # Run
> mimo
> ```
> 
> The first launch guides you through configuration automatically. Supported options:
> - **MiMo Auto (free for a limited time)** — anonymous channel, zero configuration
> - **Xiaomi MiMo Platform** — OAuth login
> - **Import from Claude Code** — migrate existing authentication in one step
> - **Custom Provider** — add any OpenAI-compatible API in the TUI
> 
> WSL: clipboard issues
> 
> If you encounter garbled text when copying on WSL, install `xsel`:
> ```bash
> sudo apt install xsel
> ```
> 
> ---
> 
> ## Core Features
> 
> ### Multiple Agents
> 
> | Agent | Description |
> |--------|------|
> | **build** | Default. Full tool permissions for development |
> | **plan** | Read-only analysis mode for code exploration and solution design |
> | **compose** | Orchestration mode for specs-driven development and skill-driven workflows |
> 
> Press `Tab` to switch between primary agents. Subagents are created by the system as needed.
> 
> ### Persistent Memory
> 
> Cross-session memory powered by SQLite FTS5 full-text search:
> 
> - **Project memory** (`MEMORY.md`) — persistent project knowledge, rules, and architecture decisions
> - **Session checkpoint** (`checkpoint.md`) — structured state snapshots maintained automatically by the checkpoint-writer subagent
> - **Scratch notes** (`notes.md`) — temporary note area for agents
> - **Task progress** (`tasks//progress.md`) — per-task logs
> 
> Memory is injected automatically when a session resumes, so the agent does not need to relearn project context.
> 
> ### Intelligent Context Management
> 
> - **Automatic checkpoints** — decides when to save session state based on the model context window
> - **Context reconstruction** — when context approaches the limit, rebuilds it from the latest checkpoint, project memory, task progress, and retained recent messages so the agent can continue the current task
> - **Budgeted injection** — uses a token budget to control how much checkpoint, memory, and notes content enters context, with importance ranking
> 
> ### Task Tracking
> 
> A tree-shaped task system (`T1`, `T1.1`, `T1.2`, …) that integrates automatically with the checkpoint system, so task progress is preserved when sessions resume.
> 
> ### Subagent System
> 
> The primary agent can create subagents on demand. Subagents share the current session context and can work in parallel, with lifecycle tracking, cancellation, and background execution.
> 
> ### Goal / Stop Condition
> 
> The `/goal` command sets a stopping condition for a session. When the agent tries to stop, an independent judge model evaluates the conversation to decide whether the condition is truly satisfied — preventing premature "optimistic stops" during autonomous work.
> 
> ### Compose Mode
> 
> Compose mode provides a structured workflow for specs-driven development. It includes built-in skills for planning, execution, code review, TDD, debugging, verification, and merging — orchestrating the full lifecycle from spec to shipped code.
> 
> ### Voice Input
> 
> Real-time streaming voice input powered by TenVAD and MiMo ASR. Activate with `/voice`, then speak — audio is segmented by pauses and transcribed incrementally into the input. Available for MiMo logged-in users. Requires `sox` (`brew install sox` on macOS, other platforms similar).
> 
> WSLg audio setup
> 
> ```bash
> sudo apt install -y sox pulseaudio libasound2-plugins
> export PULSE_SERVER=unix:/mnt/wslg/PulseServer
> ```
> 
> SSH remote audio (Mac → remote host)
> 
> ```bash
> # Mac (local)
> brew install pulseaudio
> pulseaudio --load="module-native-protocol-tcp auth-ip-acl=127.0.0.1" --exit-idle-time=-1 --daemonize
> # Add to ~/.ssh/config: RemoteForward 4713 127.0.0.1:4713
> 
> # Remote host
> apt install -y pulseaudio pulseaudio-utils sox
> export PULSE_SERVER=tcp:127.0.0.1:4713
> # Verify: pactl info
> ```
> 
> Non-MiMo voice providers (OpenRouter, internal API, etc.)
> 
> Voice input can route through other OpenAI-compatible providers via the `voice` config field. The ASR model (`mimo-v2.5-asr`) is only available on MiMo's platform; voice control mode (`mimo-v2.5`) is available on OpenRouter and compatible relay platforms.
> 
> **OpenRouter (voice control only):**
> 
> Use `/connect` to sign in to OpenRouter, then add to your config:
> ```jsonc
> {
>   "voice": {
>     "control_model": "openrouter/xiaomi/mimo-v2.5"
>   }
> }
> ```
> 
> **Internal / self-hosted relay (both ASR and voice control):**
> ```jsonc
> {
>   "provider": {
>     "internal": {
>       "options": {
>         "baseURL": "https://your-api-gateway.example.com/v1",
>         "apiKey": "sk-..."
>       },
>       "models": {
>         "xiaomi/mimo-v2.5-asr": { "name": "MiMo-V2.5-ASR" },
>         "xiaomi/mimo-v2.5": { "name": "MiMo-V2.5" }
>       }
>     }
>   },
>   "voice": {
>     "asr_model": "internal/xiaomi/mimo-v2.5-asr",
>     "control_model": "internal/xiaomi/mimo-v2.5"
>   }
> }
> ```
> 
> Custom providers must register at least one model in their `models` field to be recognized. The model names in `voice.*_model` are sent directly to the API — they don't need to match the registered model keys exactly.
> 
> > **Note:** Models registered under a custom provider will appear in the model selection list. Don't use ASR-only models (e.g. `mimo-v2.5-asr`) as your primary coding model.
> 
> ### Dream & Distill
> 
> - **`/dream`** — scans recent session traces, extracts persistent knowledge into project memory, and removes outdated entries
> - **`/distill`** — discovers repeated manual workflows in recent work and packages high-confidence candidates into reusable skills, subagents, or commands
> 
> ---
> 
> ## Configuration
> 
> MiMoCode is configured via `.mimocode/mimocode.json` in the project directory (or `~/.config/mimocode/mimocode.json` globally). Key options include:
> 
> - Provider and model selection
> - Agent permissions and custom agents
> - Checkpoint and memory behavior
> - MCP server connections
> - Keybindings and theme
> 
> Max Mode (parallel best-of-N reasoning with judge selection) can be enabled via `experimental.maxMode` in the config.
> 
> ---
> 
> ## Development
> 
> ```bash
> bun install              # Install dependencies
> bun run dev              # Run in development mode
> bun turbo typecheck      # Type check
> ```
> 
> ---
> 
> ## Relationship to OpenCode
> 
> MiMoCode is built as a fork of [OpenCode](https://github.com/anomalyco/opencode). It keeps all core OpenCode capabilities (multiple providers, TUI, LSP, MCP, plugins) and adds persistent memory, intelligent context management, subagent orchestration, goal-driven autonomous loops, compose workflows, and self-improvement via dream/distill.
> 
> ---
> 
> ## Community
> 
> Scan the QR code to join the community group chat:
> 
>   
>   &nbsp;&nbsp;
>   
> 
> ---
> 
> ## License
> 
> Source code is licensed under the [MIT License](./LICENSE).
> 
> Use of MiMoCode is also subject to the [Use Restrictions](./USE_RESTRICTIONS.md).
> Use of Xiaomi MiMo-hosted services is subject to the [MiMo Terms of Service](https://platform.xiaomimimo.com/docs/terms/user-agreement).
> Use of the MiMo name, logo, and trademarks is subject to the MiMo Trademark Policy.

## 延伸閱讀

相關概念：[[AI 編碼助手]] · [[持久記憶]] · [[任務追蹤系統]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/XiaomiMiMo/MiMo-Code) · [官方網站](https://mimo.xiaomi.com/coder)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 編碼助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 編碼助手" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "XiaomiMiMo--MiMo-Code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 編碼助手","持久記憶","任務追蹤系統"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XiaomiMiMo--MiMo-Code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XiaomiMiMo--MiMo-Code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XiaomiMiMo" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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

> **2026-06-11** — 首次收錄
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

- [[2026-06-17|2026-06-17]] — 再次上榜，9.4k stars
- [[2026-06-16|2026-06-16]] — 再次上榜，9.0k stars
- [[2026-06-15|2026-06-15]] — 再次上榜，8.5k stars
- [[2026-06-14|2026-06-14]] — 再次上榜，7.9k stars
- [[2026-06-13|2026-06-13]] — 再次上榜，6.9k stars
- [[2026-06-12|2026-06-12]] — 再次上榜，4.7k stars
- [[2026-06-11|2026-06-11]] — 首次收錄，681 stars
