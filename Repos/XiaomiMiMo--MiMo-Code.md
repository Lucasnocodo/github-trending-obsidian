---
repo: XiaomiMiMo/MiMo-Code
url: https://github.com/XiaomiMiMo/MiMo-Code
owner: XiaomiMiMo
owner_type: Organization
language: TypeScript
license: MIT
description: "MiMo Code: Where Models and Agents Co-Evolve"
homepage: "https://mimo.xiaomi.com/mimocode"
stars: 10938
stars_per_day: 643
forks: 1048
open_issues: 646
created: 2026-06-10
pushed_at: 2026-06-27
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "AI 助手"
release_tag: "v0.1.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "提供一個終端原生的 AI 編碼助手，能夠讀寫代碼、管理 Git 並持續自我改進。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-06-20"
contributor_count: 5
engagement: "low"
issue_close_rate: 17
repo_size_kb: 51101
readme_length: 8833
bus_factor: 2
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:681,2026-06-11:794,2026-06-12:4740,2026-06-12:4782,2026-06-13:6887,2026-06-13:6905,2026-06-14:7947,2026-06-14:7958,2026-06-15:8469,2026-06-15:8478,2026-06-16:9041,2026-06-16:9048,2026-06-17:9378,2026-06-17:9380,2026-06-18:9596,2026-06-19:9794,2026-06-20:9948,2026-06-21:10087,2026-06-22:10194,2026-06-23:10358,2026-06-24:10497,2026-06-25:10624,2026-06-26:10751,2026-06-27:10867,2026-06-28:10938"
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
  - "提供一個終端原生的 AI 編碼助手，能夠讀寫代碼、管理 Git 並持續自我改進。"
---

# MiMo-Code

**10.9k** stars · **643** stars/天 · 建立 17 天前 · TypeScript · MIT

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

`ORG` `v0.1.3` `easy-install`

`ai` `ai-agents` `cli` `mimo` `mimo-code`

> [!summary] 一句話摘要
> 提供一個終端原生的 AI 編碼助手，能夠讀寫代碼、管理 Git 並持續自我改進。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (643 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要一個能夠持續學習和適應的 AI 編碼助手的全端開發者。
> **一句話重點** MiMo Code 的核心優勢在於其持久記憶和智能上下文管理，讓 AI 助手在長期專案中表現出色。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "XiaomiMiMo--MiMo-Code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的 AI 編碼助手，值得投資。

> [!abstract] 核心創新
> MiMo Code 提供持久記憶和智能上下文管理，讓 AI 助手能夠在多次會話中持續學習和適應。

## 專案簡介

MiMo Code 是一個終端原生的 AI 編碼助手，能夠讀寫代碼、執行命令、管理 Git，並使用持久記憶系統在多次會話間保持對專案的深刻理解。使用者可以透過簡單的命令 `curl -fsSL https://mimo.xiaomi.com/install | bash` 來安裝，並在首次啟動時自動引導配置。其核心機制包括多個代理模式（如 `build`、`plan` 和 `compose`），讓使用者在不同的開發階段選擇適合的模式。持久記憶功能透過 SQLite FTS5 全文檢索來實現，能夠在會話間保留專案知識和進度，並自動生成檢查點以防止資料遺失。這種設計使得使用者不必每次都重新學習專案上下文，提升了開發效率。

與同類工具相比，MiMo Code 提供了更智能的上下文管理和任務追蹤系統，能夠自動決定何時保存會話狀態，並在上下文接近限制時重建上下文。這讓它在處理大型專案時表現更佳。使用者可透過 `/goal` 命令設定會話的停止條件，並利用 `dream` 和 `distill` 命令進行知識提煉和技能包裝。這些功能使得 MiMo Code 在自動化開發流程中具備強大的靈活性和擴展性。

**技術棧**：`TypeScript` · `Astro` · `Docker`

## 重點功能

- 多代理模式 — 提供 `build`、`plan` 和 `compose` 三種模式以適應不同開發需求。
- 持久記憶 — 使用 SQLite FTS5 進行跨會話記憶，保留專案知識和進度。
- 智能上下文管理 — 自動決定何時保存會話狀態，並在上下文接近限制時重建上下文。
- 任務追蹤系統 — 自動化的樹狀任務系統，保留會話進度。
- 語音輸入 — 支持實時語音輸入，提升開發效率。

## 快速開始

1. 安裝 MiMo Code
```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
```
2. 透過 npm 安裝
```bash
npm install -g @mimo-ai/cli
```
3. 啟動 MiMo Code
```bash
mimo
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天內累積 10938 stars（643/天），forks 1048（9.6%），這顯示出強烈的社群關注。作者團隊來自小米，具備豐富的 AI 和開發經驗，這使得他們能夠針對開發者的需求提供切合的解決方案。MiMo Code 解決了傳統開發工具缺乏持久記憶和智能上下文管理的痛點，讓開發者能夠更高效地管理代碼和專案。社群中關於功能和使用的討論也顯示出用戶對於該工具的期待和需求。技術生態的進步，特別是在 AI 和自動化領域，讓這個工具的實現變得可行。高達 9.6% 的 forks/stars 比率顯示出許多開發者正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要一個能夠持續學習和適應的 AI 編碼助手的全端開發者。

> [!example] 使用場景
> - 後端工程師用它來自動化代碼生成和管理版本控制，因為它能夠持續記憶專案上下文，減少重複工作。
> - 前端開發者用它來進行代碼審查和測試驅動開發，因為它提供了多種代理模式以適應不同的開發需求。
> - DevOps 工程師用它來追蹤任務進度和自動化部署流程，因為它的任務追蹤系統能夠保留會話狀態，提升工作效率。

## 架構分析

MiMo Code 採用模組化架構，核心功能由多個代理組成，這些代理能夠根據需求動態創建子代理。這種設計使得系統能夠靈活應對不同的開發任務，並能夠在多個會話中保持上下文。持久記憶系統使用 SQLite FTS5 來實現高效的資料檢索，這使得在大型專案中能夠快速查找和更新專案知識。選擇這種架構的代價是需要額外的配置和管理，特別是在記憶體和上下文管理上。系統的擴展性良好，但在處理大量資料時可能會遇到效能瓶頸，特別是在上下文重建的過程中。

## 技術深入分析

MiMo Code 的核心技術機制基於多代理架構，這些代理能夠根據開發需求動態創建子代理，並共享當前會話上下文。這種設計使得開發者能夠在不同的開發階段選擇最適合的代理模式。持久記憶系統使用 SQLite FTS5 來實現高效的資料檢索，能夠快速查找和更新專案知識。這樣的設計使得在大型專案中能夠保持高效的上下文管理。

選擇 TypeScript 作為開發語言，提升了代碼的可維護性和可讀性，並且與現有的 JavaScript 生態系統兼容。這個選擇的代價是需要額外的學習成本，特別是對於不熟悉 TypeScript 的開發者。技術風險方面，持久記憶系統的實現可能在資料量增大時遇到效能瓶頸，特別是在上下文重建過程中。整合方面，MiMo Code 與主流開發工具（如 VS Code）兼容良好，但在 CI/CD pipeline 的整合上仍需進一步優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但對於某些功能的配置可能需要額外的學習。文件目前僅提供英文版本，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 持久記憶系統能夠在多次會話中保持上下文，提高開發效率。
> - 多代理模式提供靈活的開發選擇，適應不同的開發需求。
> - 智能上下文管理能夠自動保存會話狀態，減少資料遺失的風險。

> [!danger] 缺點
> - 安裝和配置過程對新手來說可能較為複雜。
> - 某些功能依賴於額外的系統設置，增加了使用門檻。
> - 目前僅支援特定平台，對於 Windows 用戶不夠友好。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 用戶需透過 WSL 使用。
> - 持久記憶功能需要額外的配置和管理，對於新手可能有一定的學習曲線。
> - 某些功能（如語音輸入）需要額外安裝依賴，增加了配置的複雜度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但缺乏持久記憶系統，對於長期專案的支持不如 MiMo Code。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，但不具備智能上下文管理功能，可能導致開發過程中的上下文丟失。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理系統，但沒有 MiMo Code 的持久記憶和任務追蹤功能，對於複雜專案支持不足。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但缺乏持久記憶系統，對於長期專案的支持不如 MiMo Code。 | 如果你需要一個輕量級的 AI 助手，且不需要持久記憶功能。 | medium，因為需要重新配置和適應新的工作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，但不具備智能上下文管理功能，可能導致開發過程中的上下文丟失。 | 如果你的專案主要集中在代碼生成，而不需要上下文管理。 | low，因為功能較為單一，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MiMo-Code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 助手功能，但缺乏持久記憶系統，對於長期專案的支持不如 MiMo Code。 | 專注於代碼生成，但不具備智能上下文管理功能，可能導致開發過程中的上下文丟失。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的工作流程。 | low，因為功能較為單一，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你需要一個輕量級的 AI 助手，且不需要持久記憶功能。 | 如果你的專案主要集中在代碼生成，而不需要上下文管理。 |

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

- **[HIGH]** 在 WSL 中使用時，複製文本可能會出現亂碼問題。
  - 解法：安裝 xsel 解決此問題。
- [MEDIUM] 持久記憶功能在大型專案中可能導致效能瓶頸。
  - 解法：定期清理不必要的記憶資料。
- [MEDIUM] 某些功能需要額外的系統設置，可能導致使用障礙。
  - 解法：參考官方文檔進行配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 持久記憶和智能上下文管理能夠提升開發效率。 |
| 大型企業的多專案管理 | 普通 | 雖然功能強大，但可能在效能上遇到瓶頸。 |
| 個人開發者的 side project | 非常適合 | 輕量級的安裝和配置讓新手能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的 AI 編碼助手，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MiMo Code 本身不需要高權限，但在使用持久記憶和外部 API 時需注意資料安全性，建議在受控環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MiMo Code 最常與 Git 和各種 LLM 提供者搭配使用，處於開發流程的核心環節。實際整合範例包括在一個使用 Git 進行版本控制的專案中，開發者可以使用 MiMo Code 來自動生成代碼和管理版本，具體做法是透過命令 `mimo` 啟動 AI 助手。與主流 CI 工具（如 GitHub Actions）兼容良好，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於某些功能需要額外的系統設置，可能會影響使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 MiMo Code 出現之前，開發者主要依賴傳統的 IDE 和代碼生成工具，這些工具往往缺乏持久記憶和智能上下文管理的能力，導致開發過程中上下文丟失。隨著 AI 技術的進步，特別是在自然語言處理和自動化領域，這種新型的 AI 編碼助手變得可行。MiMo Code 代表了開發工具向智能化和自動化的趨勢，未來可能會在開發流程中扮演越來越重要的角色。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Git
- 了解基本的 AI 概念
- 有 CLI 工具使用經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個模組中開始使用。

**成功指標**：開發效率提升 30%，錯誤率降低 20%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他工具的配置。

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
| Forks | 1.0k |
| Open Issues | 646 |
| Issue 解決率 | 17% (131 closed) |
| 最後推送 | 2026-06-27 |
| 建立日期 | 2026-06-10 |
| 官方網站 | [Link](https://mimo.xiaomi.com/mimocode) |
| Repo 大小 | 49.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XiaomiMiMo/MiMo-Code) |
| Topics | `ai` `ai-agents` `cli` `mimo` `mimo-code` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 64
>     "MDX" : 33
>     "CSS" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wqymi](https://github.com/wqymi) | 87 |
> | [@MiMoHardFather](https://github.com/MiMoHardFather) | 59 |
> | [@JinyuXiang-Mimo](https://github.com/JinyuXiang-Mimo) | 30 |
> | [@yanyihan-xiaomi](https://github.com/yanyihan-xiaomi) | 26 |
> | [@qiaozongming](https://github.com/qiaozongming) | 16 |

**最新版本**：v0.1.3 (2026-06-24)

> [!info]- Release Notes
> MiMoCode v0.1.3

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者問題。
**連結**：[文件](https://mimo.xiaomi.com/mimocode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-27 ~ 2026-06-27）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1407 from XiaomiMiMo/refactor/agent-system-prompt

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1228](https://github.com/XiaomiMiMo/MiMo-Code/issues/1228) | 提示✗ Request blocked by risk control status 400 · non-retryab | 8 | 21 |
> | [#460](https://github.com/XiaomiMiMo/MiMo-Code/issues/460) | [BUG] 睿智的模型会乱删文件 `bug` | 8 | 4 |
> | [#588](https://github.com/XiaomiMiMo/MiMo-Code/issues/588) | [PROJECT GOVERNANCE]: Community is watching — MiMo Code has  | 7 | 5 |
> | [#1118](https://github.com/XiaomiMiMo/MiMo-Code/issues/1118) | wechat-mimocode — MiMoCode 链接微信的实践与反馈 | 6 | 2 |
> | [#1367](https://github.com/XiaomiMiMo/MiMo-Code/issues/1367) | Community Plugins: Claude Code & Codex integrations | 5 | 0 |

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
> Allowing the system temp directory (/tmp)
> 
> By default, reading or writing files outside the project working directory triggers an
> `external_directory` permission prompt — including the system temp directory. This is
> intentional: MiMoCode does not silently widen permissions, so you stay in control of what
> the model can touch outside your project.
> 
> The temp directory comes up often because most models reach for it as scratch space (e.g.
> a quick script, a throwaway data file). If you trust your environment and would rather not
> be prompted each time, you can opt in by allowing it in your config:
> 
> ```json title=".mimocode/mimocode.json"
> {
>   "$schema": "https://opencode.ai/config.json",
>   "permission": {
>     "external_directory": {
>       "/tmp/**": "allow"
>     }
>   }
> }
> ```
> 
> **This setting has known risks — use it at your own risk.** The temp directory is
> world-writable and shared with every other process and user on the machine. Auto-allowing
> it means the model can read and write there without confirmation, which widens your exposure
> to predictable temp-path / symlink tricks (e.g. another process pre-creating `/tmp/foo` as a
> symlink to a sensitive file). For that reason it is only recommended for single-user,
> controlled environments or inside a container. Keep the allowlist as narrow as possible.
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
> ## Relatio

## 延伸閱讀

相關概念：[[自動化測試]] · [[程式碼生成]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/XiaomiMiMo/MiMo-Code) · [官方網站](https://mimo.xiaomi.com/mimocode)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "XiaomiMiMo--MiMo-Code"
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
> const concepts = ["自動化測試","程式碼生成","多模態"];
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
