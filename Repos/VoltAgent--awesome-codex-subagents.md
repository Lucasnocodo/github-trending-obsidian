---
repo: VoltAgent/awesome-codex-subagents
url: https://github.com/VoltAgent/awesome-codex-subagents
owner: VoltAgent
owner_type: Organization
language: N/A
license: MIT
description: "A collection of 130+ specialized Codex subagents covering a wide range of development use cases."
homepage: "https://github.com/VoltAgent/voltagent"
stars: 4959
stars_per_day: 69
forks: 563
open_issues: 2
created: 2026-03-17
pushed_at: 2026-05-27
first_seen: 2026-03-20
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "AI 助手"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-20
use_case: "提供超過 130 種專門的 Codex 子代理，涵蓋各種開發用例。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-27"
contributor_count: 5
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 160
readme_length: 9649
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-20"
star_history: "2026-03-20:1509,2026-03-20:1514,2026-03-21:1841,2026-03-21:1843,2026-03-22:1981,2026-03-22:1982,2026-03-23:2071,2026-03-23:2074,2026-03-24:2275,2026-03-24:2282,2026-03-25:2447,2026-03-26:2669,2026-03-27:2843,2026-03-28:2941,2026-03-29:3000,2026-03-30:3056,2026-03-31:3119,2026-04-01:3246,2026-04-02:3368,2026-04-03:3434,2026-04-04:3469,2026-04-05:3501,2026-04-06:3530,2026-04-07:3566,2026-04-08:3601,2026-04-09:3686,2026-04-10:3757,2026-04-11:3800,2026-04-12:3827,2026-04-13:3853,2026-04-14:3892,2026-04-15:3933,2026-04-16:3973,2026-04-17:4020,2026-04-18:4044,2026-04-19:4063,2026-04-20:4093,2026-04-21:4113,2026-04-22:4148,2026-04-23:4175,2026-04-24:4209,2026-04-25:4229,2026-04-26:4247,2026-04-27:4270,2026-04-28:4296,2026-04-29:4321,2026-04-30:4352,2026-05-01:4375,2026-05-02:4392,2026-05-03:4409,2026-05-04:4424,2026-05-05:4439,2026-05-06:4456,2026-05-07:4471,2026-05-08:4487,2026-05-09:4506,2026-05-10:4532,2026-05-11:4549,2026-05-12:4571,2026-05-13:4589,2026-05-14:4635,2026-05-15:4669,2026-05-16:4690,2026-05-17:4712,2026-05-18:4734,2026-05-19:4750,2026-05-20:4781,2026-05-21:4802,2026-05-22:4817,2026-05-23:4834,2026-05-24:4847,2026-05-25:4864,2026-05-26:4879,2026-05-27:4904,2026-05-29:4959"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - org
  - "topic/ai_agents"
  - "topic/awesome_list"
  - "topic/chatgpt"
  - "topic/codex"
  - "topic/codex_skills"
aliases:
  - "awesome-codex-subagents"
  - "VoltAgent/awesome-codex-subagents"
  - "提供超過 130 種專門的 Codex 子代理，涵蓋各種開發用例。"
---

# awesome-codex-subagents

**5.0k** stars · **69** stars/天 · 建立 72 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`ai-agents` `awesome-list` `chatgpt` `codex` `codex-skills` `codex-subagents` `subagents`

> [!summary] 一句話摘要
> 提供超過 130 種專門的 Codex 子代理，涵蓋各種開發用例。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (69 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 Codex 中使用專業子代理來提升開發效率的軟體工程師。
> **一句話重點** 這個專案的強大之處在於其專業化的子代理設計，能夠大幅提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "VoltAgent--awesome-codex-subagents" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的開發支持，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了超過 130 種專門的 Codex 子代理，能夠針對特定開發任務提供專業支持。

## 專案簡介

這個專案是一個集合，包含超過 130 種 Codex 子代理，專為特定開發任務設計。用戶可以透過將 `.toml` 配置文件放入指定目錄來自定義這些子代理，並在 Codex 中使用它們。這些代理能夠在不同的開發場景中提供專業的協助，例如 PR 審查、錯誤調查和代碼規劃等。這樣的設計使得開發者能夠更有效率地處理複雜的任務，因為每個子代理都針對特定的任務進行優化。使用者只需在提示中明確指定要使用的子代理，Codex 會根據需求自動調用相應的模型。這個工具的賣點在於其靈活性和專業性，能夠根據不同的開發需求提供合適的解決方案。

每個子代理的設計考慮到了性能和成本的平衡，使用不同的模型來處理不同的任務，這樣能夠在保證質量的同時降低開發成本。相較於其他開發工具，這個專案的優勢在於其專注於子代理的多樣性和專業性，能夠針對特定的開發需求提供更精確的支持。使用者在實際操作中可能會遇到配置上的挑戰，特別是在多代理協作的情境下，但這些問題通常可以通過仔細的配置和測試來解決。這個專案目前處於穩定階段，值得開發者在日常開發中使用，特別是對於需要多樣化開發支持的團隊。未來幾個月內，預期會有更多的子代理加入，進一步擴展其功能和應用場景。

## 重點功能

- 多樣化子代理 — 超過 130 種專門的 Codex 子代理，涵蓋各種開發任務。
- 靈活配置 — 使用者可以自定義子代理配置，並根據需求選擇合適的代理。
- 智能模型路由 — 根據任務自動選擇合適的模型，平衡質量與成本。
- 沙盒模式 — 根據子代理的角色設定不同的文件系統訪問權限。
- 示範工作流程 — 提供多種實際工作流程範例，幫助使用者快速上手。

## 快速開始

1. 克隆此倉庫
```bash
git clone https://github.com/VoltAgent/awesome-codex-subagents.git
```
2. 將所需的 .toml 文件複製到指定目錄
```bash
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```
3. 重啟 Codex 會話以應用更改
```bash
重新啟動 Codex
```

## 程式碼範例

```bash
{
  "前置條件": "使用者已經安裝並配置好 Codex。",
  "指令": "mkdir -p ~/.codex/agents\ncp categories/01-core-development/backend-developer.toml ~/.codex/agents/",
  "預期輸出": "將 backend-developer 子代理添加到 Codex 的代理列表中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 72 天內累積 4959 stars（69/天），forks 563（11.4%），顯示出穩定的增長潛力。作者團隊由多位貢獻者組成，這些貢獻者在 AI 和開發工具領域有著豐富的經驗。這個專案解決了開發者在使用 Codex 時缺乏專業子代理的痛點，讓開發者能夠更高效地完成特定任務。最近的 commit 活動顯示出活躍的維護和更新，這對於使用者來說是個好消息。社群的反饋和需求也促進了這個專案的快速發展。

## 適合誰使用

**目標受眾**：需要在 Codex 中使用專業子代理來提升開發效率的軟體工程師。

> [!example] 使用場景
> - 後端工程師用它來自動化 PR 審查流程，因為可以同時調用多個子代理來檢查代碼的正確性和安全性。
> - 前端開發者用它來快速調查錯誤，因為可以利用專門的子代理來追蹤代碼路徑和重現問題。
> - 全端開發者用它來規劃新功能，因為可以整合多個子代理來分析設計和提出重構計劃。

## 架構分析

這個專案的架構基於 Codex 的子代理設計，允許開發者根據不同的任務需求來配置和使用子代理。每個子代理都使用 `.toml` 格式進行定義，這樣的設計使得配置變得簡單且易於管理。子代理的智能路由功能能夠根據任務自動選擇合適的模型，這樣的設計能夠在保證性能的同時降低成本。選擇使用 Codex 作為基礎，因為它已經具備強大的語言理解能力，這樣可以更好地支持開發者的需求。未來可能的擴展性瓶頸在於如何管理和維護大量的子代理，特別是在用戶需求快速變化的情況下。

## 技術深入分析

這個專案的核心技術機制在於使用 Codex 的子代理架構，這些子代理被設計為專門針對特定任務的 AI 助手。每個子代理都使用 `.toml` 格式進行配置，這樣的設計使得使用者能夠輕鬆地管理和調整代理的行為。效能方面，這些子代理能夠快速響應並處理多種開發任務，具體的性能數據雖然未提供，但預期能夠在實際使用中達到良好的效果。設計取捨方面，選擇 Codex 作為基礎是因為其強大的語言理解能力，這樣可以更好地支持開發者的需求。依賴樹的複雜度相對較低，因為主要依賴於 Codex 的 API，這降低了維護成本。技術風險方面，隨著子代理數量的增加，可能會面臨管理和維護上的挑戰，特別是在用戶需求快速變化的情況下。整合方面，與主流開發工具的兼容性良好，能夠輕鬆融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意配置的細節。文件中沒有提供多語言支持，可能對非英語使用者造成一定困難。整體而言，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的專業子代理，能夠針對特定任務提供精確支持。
> - 靈活的配置選項，讓開發者能夠根據需求自定義代理。
> - 智能模型路由功能，能夠平衡性能和成本。

> [!danger] 缺點
> - 需要手動配置，對新手來說可能有一定的學習曲線。
> - 在多代理協作時可能會遇到配置衝突。
> - 不支援自動生成子代理，必須手動指定。

> [!warning] 注意事項
> - 需要手動配置每個子代理，對新手來說可能有一定的學習曲線。
> - 在多代理協作時，可能會遇到配置衝突的問題。
> - 不支援自動生成子代理，必須手動指定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理多個 AI 代理，而本專案專注於提供專業的子代理以增強 Codex 的功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一個開放的代理生態系統，但缺乏本專案的專業化和針對性。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 Codex 的輕量級封裝，但不具備本專案的多樣化子代理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理多個 AI 代理，而本專案專注於提供專業的子代理以增強 Codex 的功能。 | 如果需要一個靈活的代理管理系統，適合大型專案或多代理協作的情境。 | medium，因為需要重新配置代理的行為和任務。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一個開放的代理生態系統，但缺乏本專案的專業化和針對性。 | 如果需要一個開放的生態系統來探索不同的代理選項。 | low，因為可以直接使用現有的代理設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-codex-subagents** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理多個 AI 代理，而本專案專注於提供專業的子代理以增強 Codex 的功能。 | 提供一個開放的代理生態系統，但缺乏本專案的專業化和針對性。 |
> | 遷移成本 | - | medium，因為需要重新配置代理的行為和任務。 | low，因為可以直接使用現有的代理設置。 |
> | 適用場景 | 主要場景 | 如果需要一個靈活的代理管理系統，適合大型專案或多代理協作的情 | 如果需要一個開放的生態系統來探索不同的代理選項。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多代理協作時，可能會遇到配置衝突的問題
  - 解法：仔細檢查代理配置，確保不重複定義相同的功能
- [MEDIUM] 新手可能會對 .toml 配置格式感到困惑
  - 解法：參考官方文檔中的範例，逐步學習配置方法

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 能夠快速配置專業代理以支持多樣化的開發任務。 |
| 大型企業的多團隊協作 | 適合 | 提供靈活的代理管理，但需要注意配置衝突。 |
| 個人開發者的學習專案 | 非常適合 | 能夠幫助新手快速上手並提高開發效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的開發支持，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，主要依賴於 Codex 的 API，並不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
| Forks | 563 |
| Open Issues | 2 |
| Issue 解決率 | 50% (2 closed) |
| 最後推送 | 2026-05-27 |
| 建立日期 | 2026-03-17 |
| 官方網站 | [Link](https://github.com/VoltAgent/voltagent) |
| Repo 大小 | 160 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-codex-subagents) |
| Topics | `ai-agents` `awesome-list` `chatgpt` `codex` `codex-skills` `codex-subagents` `subagents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 17 |
> | [@BASILAHAMED](https://github.com/BASILAHAMED) | 1 |
> | [@deusmar](https://github.com/deusmar) | 1 |
> | [@MohamedAbdallah-14](https://github.com/MohamedAbdallah-14) | 1 |
> | [@haoxianhan](https://github.com/haoxianhan) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回覆問題。
**連結**：[文件](https://github.com/VoltAgent/awesome-codex-subagents) · [Discord](https://discord.gg/voltagent)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-05-27）
> **活躍天數** 6 天 · **最新 commit** Add ecosystem tools section

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/VoltAgent/awesome-codex-subagents/issues/24) | Multi-agent scheduling problem | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> The awesome collection of 166+ Codex subagents across 13 categories.
>     
>     
> 
>    
> 
>     
> [](https://awesome.re)
> 
> [](https://github.com/VoltAgent/awesome-codex-subagents)
> [](https://s.voltagent.dev/discord)
> 
> 
> ## Installation
> 
> Use Codex custom agent directories exactly as documented:
> 
> - `~/.codex/agents/` for global agents (available in all projects)
> - `.codex/agents/` for project-specific agents (higher precedence in that repo)
> 
> 1. Clone this repository.
> 2. Copy the `.toml` agent files you want into one of the directories above.
> 3. Restart or refresh your Codex session if needed.
> 4. Delegate explicitly in prompts (Codex does not auto-spawn custom subagents).
> 
> Examples:
> ```bash
> mkdir -p ~/.codex/agents
> cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
> ```
> 
> ```bash
> mkdir -p .codex/agents
> cp categories/04-quality-security/reviewer.toml .codex/agents/
> ```
> 
> If you use agent configuration in Codex, keep it in `.codex/config.toml` under `[agents]` as described in the official docs.
> 
> 
> ### Example Workflows
> 
> **PR review workflow:**
> ```text
> Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
> ```
> 
> **Bug investigation workflow:**
> ```text
> Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
> ```
> 
> **Repo exploration and planning workflow:**
> ```text
> Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
> ```
> 
> # Awesome Codex Subagents
> 
> This repository serves as the definitive collection of [Codex Subagents](https://developers.openai.com/codex/subagents), specialized AI assistants designed for specific development tasks. Written specifically for Codex and aligned with the official docs.
> 
> 
> ### Subagent Storage Locations
> 
> | Type | Path | Availability | Precedence |
> |------|------|--------------|------------|
> | Project Subagents | `.codex/agents/` | Current project only | Higher |
> | Global Subagents | `~/.codex/agents/` | All projects | Lower |
> 
> Note: When naming conflicts occur, project-specific subagents override global ones.
> 
> 
> ## Subagent Structure
> 
> Each subagent uses a Codex-native `.toml` format:
> 
> ```toml
> name = "subagent-name"
> description = "When this agent should be invoked"
> model = "gpt-5.3-codex-spark"
> model_reasoning_effort = "medium"
> sandbox_mode = "read-only"
> 
> [instructions]
> text = """
> You are a [role description and expertise areas]...
> 
> [Agent-specific checklists, patterns, and guidelines]...
> """
> ```
> 
> 
> ### Smart Model Routing
> 
> Each subagent includes a `model` field that automatically routes it to the right model -- balancing quality and cost:
> 
> | Model | When It's Used | Examples |
> |-------|----------------|----------|
> | `gpt-5.4` | Deep reasoning -- architecture reviews, security audits, financial logic | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
> | `gpt-5.3-codex-spark` | Fast scanning, synthesis, and lighter research tasks | `search-specialist`, `docs-researcher`, `agent-installer` |
> 
> 
> ### Sandbox Mode Philosophy
> 
> Each subagent's `sandbox_mode` field controls filesystem access:
> - **Read-only agents** (reviewers, auditors): `sandbox_mode = "read-only"` - analyze without modifying
> - **Workspace-write agents** (developers, engineers): `sandbox_mode = "workspace-write"` - create and modify files
> 
> 
> ## Ecosystem Tools
> 
> Tools, platforms, and services for building 
> 
>  - If you're building AI agents in TypeScript, VoltAgent gives you tool use, memory, and multi-agent coordination out of the box.
> 
>     
>     
>     
> 
> 👉 You can feature your product here and reach developers using AI coding agents like Claude Code, Codex, Gemini, and more.
>      
> 
> 
> ## Categories
> 
> 
> ### [01. Core Development](categories/01-core-development/)
> 
> Essential development subagents for everyday coding tasks.
> 
> - [**api-designer**](categories/01-core-development/api-designer.toml) - REST and GraphQL API architect
> - [**backend-developer**](categories/01-core-development/backend-developer.toml) - Server-side expert for scalable APIs
> - [**code-mapper**](categories/01-core-development/code-mapper.toml) - Code path mapping and ownership boundary analysis
> - [**electron-pro**](categories/01-core-development/electron-pro.toml) - Desktop application expert
> - [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - UI/UX specialist for React, Vue, and Angular
> - [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - End-to-end feature development
> - [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL schema and federation expert
> - [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Distributed systems designer
> - [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Cross-platform mobile specialist
> - [**ui-designer**](categories/01-core-development/ui-designer.toml) - Visual design and interaction specialist
> - [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Smallest safe patch for reproduced UI issues
> - [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Real-time communication specialist
> 
> 
> ### [02. Language Specialists](categories/02-language-specialists/)
> 
> Language-specific experts with deep framework knowledge.
> - [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular 15+ enterprise patterns expert
> - [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++ performance expert
> - [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET ecosystem specialist
> - [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django 4+ web development expert
> - [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET 8 cross-platform specialist
> - [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET Framework legacy enterprise specialist
> - [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir and OTP fault-tolerant systems expert
> - [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP and rebar3 engineering expert
> - [**expo-react-native-expert**](categories/02-language-specialists/expo-react-native-expert.toml) - Expo and React Native mobile development expert
> - [**fastapi-developer**](categories/02-language-specialists/fastapi-developer.toml) - Modern async Python API framework expert
> - [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ cross-platform mobile expert
> - [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go concurrency specialist
> - [**java-architect**](categories/02-language-specialists/java-architect.toml) - Enterprise Java expert
> - [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript development expert
> - [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Modern JVM language expert
> - [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP framework expert
> - [**symfony-specialist**](categories/02-language-specialists/symfony-specialist.toml) - Symfony application and Doctrine specialist
> - [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ full-stack specialist
> - [**node-specialist**](categories/02-language-specialists/node-specialist.to

## 延伸閱讀

相關概念：[[AI 助手]] · [[Codex]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]]

[GitHub](https://github.com/VoltAgent/awesome-codex-subagents) · [官方網站](https://github.com/VoltAgent/voltagent)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "VoltAgent--awesome-codex-subagents" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 助手","Codex","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VoltAgent--awesome-codex-subagents" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VoltAgent--awesome-codex-subagents" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VoltAgent" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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

> **2026-03-20** — 首次收錄
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

- [[2026-03-24|2026-03-24]] — 再次上榜，2.3k stars
- [[2026-03-23|2026-03-23]] — 再次上榜，2.1k stars
- [[2026-03-22|2026-03-22]] — 再次上榜，2.0k stars
- [[2026-03-21|2026-03-21]] — 再次上榜，1.8k stars
- [[2026-03-20|2026-03-20]] — 首次收錄，1.5k stars
