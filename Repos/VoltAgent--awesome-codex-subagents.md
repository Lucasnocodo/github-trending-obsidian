---
repo: VoltAgent/awesome-codex-subagents
url: https://github.com/VoltAgent/awesome-codex-subagents
owner: VoltAgent
owner_type: Organization
language: N/A
license: MIT
description: "A collection of 130+ specialized Codex subagents covering a wide range of development use cases."
homepage: "https://github.com/VoltAgent/voltagent"
stars: 4392
stars_per_day: 98
forks: 513
open_issues: 9
created: 2026-03-17
pushed_at: 2026-03-20
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
use_case: "提供 130 多個專門的 Codex 子代理，涵蓋廣泛的開發用例。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-27"
contributor_count: 2
engagement: "medium"
issue_close_rate: 18
repo_size_kb: 241
readme_length: 9984
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-20"
star_history: "2026-03-20:1509,2026-03-20:1514,2026-03-21:1841,2026-03-21:1843,2026-03-22:1981,2026-03-22:1982,2026-03-23:2071,2026-03-23:2074,2026-03-24:2275,2026-03-24:2282,2026-03-25:2447,2026-03-26:2669,2026-03-27:2843,2026-03-28:2941,2026-03-29:3000,2026-03-30:3056,2026-03-31:3119,2026-04-01:3246,2026-04-02:3368,2026-04-03:3434,2026-04-04:3469,2026-04-05:3501,2026-04-06:3530,2026-04-07:3566,2026-04-08:3601,2026-04-09:3686,2026-04-10:3757,2026-04-11:3800,2026-04-12:3827,2026-04-13:3853,2026-04-14:3892,2026-04-15:3933,2026-04-16:3973,2026-04-17:4020,2026-04-18:4044,2026-04-19:4063,2026-04-20:4093,2026-04-21:4113,2026-04-22:4148,2026-04-23:4175,2026-04-24:4209,2026-04-25:4229,2026-04-26:4247,2026-04-27:4270,2026-04-28:4296,2026-04-29:4321,2026-04-30:4352,2026-05-01:4375,2026-05-02:4392"
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
  - "提供 130 多個專門的 Codex 子代理，涵蓋廣泛的開發用例。"
---

# awesome-codex-subagents

**4.4k** stars · **98** stars/天 · 建立 45 天前 · N/A · MIT

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
> 提供 130 多個專門的 Codex 子代理，涵蓋廣泛的開發用例。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (98 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 42 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在 Codex 中使用專業化子代理來提高開發效率的軟體工程師。
> **一句話重點** 這個專案的真正價值在於其提供的專業化子代理，能夠針對開發者的具體需求進行高效支持。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，能夠提升開發效率，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了專業化的 Codex 子代理，能夠針對特定開發任務提供精確的支持。

## 專案簡介

這個專案是一個集合，包含超過 130 個 Codex 子代理，專為特定開發任務設計。用戶可以將這些子代理放置在指定的目錄中，然後在 Codex 的提示中明確調用它們。每個子代理都有一個 `.toml` 格式的配置文件，定義了其名稱、描述、使用的模型及其操作模式。這樣的設計使得開發者能夠根據具體需求選擇合適的子代理，從而提高開發效率。使用者可以通過簡單的指令，例如 `cp categories/01-core-development/backend-developer.toml ~/.codex/agents/`，將所需的子代理配置到全域或專案特定的目錄中。

這些子代理的設計考量了不同的工作流需求，例如 PR 審查、錯誤調查和代碼規劃，並能夠在不同的情境下自動選擇合適的模型進行處理。這種靈活性使得開發者能夠在面對多樣化的任務時，快速調整和適應。相較於其他工具，這個專案的優勢在於其專業化的子代理設計，能夠針對特定任務提供更精確的支持，而不是單一的通用解決方案。使用者需要注意的是，這些子代理的配置和調用需要一定的學習曲線，特別是對於不熟悉 Codex 的開發者來說。整體而言，這是一個針對開發者的高效工具，適合需要多樣化開發任務支持的團隊。

## 重點功能

- 多樣化的子代理 — 包含 130 多個專門的 Codex 子代理，涵蓋各種開發任務。
- 靈活的配置 — 支持全域和專案特定的子代理配置，使用者可根據需要選擇。
- 自動模型路由 — 每個子代理根據任務自動選擇合適的模型，提升處理效率。
- 沙盒模式控制 — 透過 `sandbox_mode` 設定，控制子代理的檔案系統存取權限。
- 專業化任務支持 — 提供針對 PR 審查、錯誤調查和代碼規劃的專業子代理，提升工作效率。

## 快速開始

1. 克隆這個倉庫
```bash
git clone https://github.com/VoltAgent/awesome-codex-subagents.git
```
2. 將所需的子代理配置複製到全域目錄
```bash
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```
3. 重新啟動 Codex 會話
```bash
# 重新啟動或刷新 Codex 會話
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 45 天內累積 4392 stars（每天 98），forks 513（11.7%），顯示出穩定的增長潛力。主要貢獻者 necatiozmen 和 haoxianhan 在開源社群中活躍，這個專案解決了開發者在使用 Codex 時缺乏專業化子代理的痛點。之前，開發者可能需要手動配置和調整 Codex，而這個專案提供了一個現成的解決方案，讓使用者能夠快速上手。社群的反饋和需求也促進了這個專案的快速發展，尤其是在 GitHub 上的討論和分享。這樣的增長和活躍度顯示出開發者對於這個工具的需求和期待。

## 適合誰使用

**目標受眾**：需要在 Codex 中使用專業化子代理來提高開發效率的軟體工程師。

> [!example] 使用場景
> - 後端工程師用它來自動化 PR 審查流程，因為可以同時調用多個專門的子代理來檢查代碼的正確性和安全性。
> - 前端開發者用它來快速定位和修復 UI 問題，因為可以利用專門的 UI 修復子代理來提出最小的安全補丁。
> - 全棧開發者用它來進行代碼重構規劃，因為可以整合多個子代理來分析當前設計並提出具體的行動計劃。

## 架構分析

這個專案的架構基於 Codex 的子代理設計，使用 `.toml` 格式來定義每個子代理的屬性。這種設計允許開發者根據具體需求選擇和配置子代理，從而提高開發效率。每個子代理都有一個 `model` 字段，根據任務自動選擇合適的模型，這樣的設計考量了不同任務的需求，並能夠在不同情境下靈活應對。

選擇 `.toml` 格式的代價在於需要使用者具備一定的配置能力，但這也使得子代理的定制化程度更高。整體而言，這種架構模式能夠有效支持多樣化的開發任務，並且在面對不同的工作流時，能夠快速適應。擴展性方面，隨著子代理數量的增加，管理和配置的複雜度也會上升，這是使用者需要考量的潛在瓶頸。

## 技術深入分析

這個專案的核心技術機制在於使用 Codex 的子代理設計，透過 `.toml` 格式來定義每個子代理的屬性和行為。這種設計使得開發者可以根據具體的任務需求選擇合適的子代理，並且能夠靈活調整。效能方面，這些子代理能夠快速響應不同的開發任務，並且能夠在多個子代理之間並行處理，從而提高整體效率。設計取捨上，選擇 `.toml` 格式的好處在於其簡潔和可讀性，但對於不熟悉的開發者來說，可能會增加配置的難度。技術風險方面，隨著子代理數量的增加，管理和配置的複雜度也會上升，這可能會影響到整體的開發效率。整合方面，這個專案能夠與 Codex 無縫協作，但對於其他開發工具的整合可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但對於不熟悉 Codex 的使用者來說，可能會有一些挑戰。文件中沒有多語言支持，僅提供英文版本，這可能會對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 專業化的子代理設計，針對特定任務提供精確支持。
> - 靈活的配置選項，支持全域和專案特定的子代理。
> - 自動模型路由，根據任務自動選擇合適的模型，提升效率。

> [!danger] 缺點
> - 需要手動配置，對新手來說有學習曲線。
> - 不支持自動生成子代理，使用者必須明確調用。
> - 對於大型專案，管理大量子代理配置可能會變得複雜。

> [!warning] 注意事項
> - 需要手動配置子代理，對於不熟悉 Codex 的使用者可能有學習曲線。
> - 不支持自動生成子代理，使用者必須明確在提示中調用。
> - 對於大型專案，可能需要管理大量的子代理配置文件。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個框架來創建和管理 AI 代理，但不如本專案專注於 Codex 的子代理設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的實驗和開發，但缺乏本專案的多樣化任務支持和專業化子代理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個框架來創建和管理 AI 代理，但不如本專案專注於 Codex 的子代理設計。 | 如果你需要一個靈活的框架來創建自己的 AI 代理，而不僅僅是使用現成的子代理。 | medium，因為需要重新設計代理的配置和行為。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的實驗和開發，但缺乏本專案的多樣化任務支持和專業化子代理。 | 如果你的需求更偏向於 AI 代理的開發和實驗，而不是特定任務的支持。 | high，因為需要重新評估和調整開發流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-codex-subagents** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供一個框架來創建和管理 AI 代理，但不如本專案專注於 Codex 的子代理設計。 | 專注於 AI 代理的實驗和開發，但缺乏本專案的多樣化任務支持和專業化子代理。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的配置和行為。 | high，因為需要重新評估和調整開發流程。 |
> | 適用場景 | 主要場景 | 如果你需要一個靈活的框架來創建自己的 AI 代理，而不僅僅是 | 如果你的需求更偏向於 AI 代理的開發和實驗，而不是特定任務 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的開發實驗，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在配置子代理時，可能會遇到命名衝突，導致無法正確調用
  - 解法：確保子代理名稱唯一，或使用專案特定的配置目錄
- [MEDIUM] 對於大型專案，管理子代理的配置可能變得繁瑣
  - 解法：定期整理和清理不再使用的子代理配置
- [MEDIUM] 新手可能對 Codex 的使用不熟悉，導致配置錯誤
  - 解法：參考官方文檔，並尋求社群支持

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 能夠提供專業化的子代理支持，提升開發效率。 |
| 大型企業的多團隊協作專案 | 普通 | 雖然能提供多樣化的支持，但管理複雜度可能增加。 |
| 個人開發者的 side project | 非常適合 | 能夠快速配置和使用，提升開發效率。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，能夠提升開發效率，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度較高，適合在 CI/CD 中使用。

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
| Forks | 513 |
| Open Issues | 9 |
| Issue 解決率 | 18% (2 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-17 |
| 官方網站 | [Link](https://github.com/VoltAgent/voltagent) |
| Repo 大小 | 241 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-codex-subagents) |
| Topics | `ai-agents` `awesome-list` `chatgpt` `codex` `codex-skills` `codex-subagents` `subagents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 11 |
> | [@haoxianhan](https://github.com/haoxianhan) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率 18%。
**連結**：[文件](https://github.com/VoltAgent/awesome-codex-subagents)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-20）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #11 from haoxianhan/main

## README 摘錄

> [!info]- 展開查看原文 README
> The awesome collection of 136+ Codex subagents across 10 categories.
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
>     More awesome collections for developers
>     
>     
> 
> [](https://github.com/VoltAgent/awesome-agent-skills)
> [](https://github.com/VoltAgent/awesome-claude-code-subagents)
> [](https://github.com/VoltAgent/awesome-openclaw-skills)
> [](https://github.com/VoltAgent/awesome-ai-agent-papers)
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
> - [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ cross-platform mobile expert
> - [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go concurrency specialist
> - [**java-architect**](categories/02-language-specialists/java-architect.toml) - Enterprise Java expert
> - [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript development expert
> - [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Modern JVM language expert
> - [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP framework expert
> - [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ full-stack specialist
> - [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP web development expert
> - [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 and full .NET Framework automation specialist
> - [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Cross-platform PowerShell 7+ automation and modern .NET specialist
> - [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python ecosystem master
> - [**rails-expert**](categories/

## 延伸閱讀

相關概念：[[AI 助手]] · [[Codex]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

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
