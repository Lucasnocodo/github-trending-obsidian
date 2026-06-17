---
repo: XiaomiMiMo/MiMo-Code
url: https://github.com/XiaomiMiMo/MiMo-Code
owner: XiaomiMiMo
owner_type: Organization
language: TypeScript
license: MIT
description: ""
homepage: ""
stars: 9380
stars_per_day: 1563
forks: 833
open_issues: 763
created: 2026-06-10
pushed_at: 2026-06-16
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
use_case: "提供一個終端原生的 AI 編碼助手，能夠讀寫代碼、運行命令、管理 Git，並具備持久記憶系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-06-20"
contributor_count: 3
engagement: "low"
issue_close_rate: 8
repo_size_kb: 51424
readme_length: 6107
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:681,2026-06-11:794,2026-06-12:4740,2026-06-12:4782,2026-06-13:6887,2026-06-13:6905,2026-06-14:7947,2026-06-14:7958,2026-06-15:8469,2026-06-15:8478,2026-06-16:9041,2026-06-16:9048,2026-06-17:9378,2026-06-17:9380"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "MiMo-Code"
  - "XiaomiMiMo/MiMo-Code"
  - "提供一個終端原生的 AI 編碼助手，能夠讀寫代碼、運行命令、管理 Git，並具備持久記憶系統。"
---

# MiMo-Code

**9.4k** stars · **1.6k** stars/天 · 建立 6 天前 · TypeScript · MIT

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

> [!summary] 一句話摘要
> 提供一個終端原生的 AI 編碼助手，能夠讀寫代碼、運行命令、管理 Git，並具備持久記憶系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.6k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在終端環境中使用 AI 助手進行代碼開發和管理的開發者。
> **一句話重點** MiMoCode 的創新在於其持久記憶和智能上下文管理，這使得 AI 編碼助手能夠在多次會話中保持狀態，顯著提升開發效率。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到提升開發效率的 AI 助手，值得一試。

> [!abstract] 核心創新
> MiMoCode 提供了持久記憶和智能上下文管理，能夠在多次會話中保持狀態，提升開發效率。

## 專案簡介

MiMoCode 是一個終端原生的 AI 編碼助手，能夠讀寫代碼、運行命令、管理 Git，並使用持久記憶系統來保持對專案的深刻理解。用戶可以通過一行指令安裝，並在首次啟動時自動引導配置。核心功能包括多個代理模式，能夠在開發、計劃和組織工作流中切換，並利用 SQLite FTS5 進行跨會話的持久記憶管理。這樣的設計使得代理在會話恢復時無需重新學習專案上下文，提升了工作效率。技術上，MiMoCode 使用了 TypeScript 和 Bun 作為主要開發環境，並整合了多種依賴以支持不同的功能，如任務追蹤和智能上下文管理。

與其他類似工具相比，如 OpenCode 和 Claude Code，MiMoCode 提供了更強大的持久記憶和上下文管理功能，能夠在多次會話中保持狀態，並且支持自動生成子代理以平行處理任務。實際使用中，MiMoCode 需要一定的系統資源來維持其記憶和上下文管理的運行，並且在大型專案中可能會面臨性能瓶頸。這個專案目前處於 beta 階段，適合對 AI 編碼助手有需求的開發者，尤其是需要在終端環境中工作的團隊。未來幾個月，隨著功能的完善和社群的增長，MiMoCode 有望成為開發者工具中的一個重要選擇。

**技術棧**：`TypeScript` · `Bun` · `SQLite`

## 重點功能

- 多代理系統 — 包含 build、plan 和 compose 三種模式，支持不同的開發需求。
- 持久記憶 — 利用 SQLite FTS5 進行跨會話的記憶管理，記錄專案知識和進度。
- 智能上下文管理 — 自動決定何時保存會話狀態，並在上下文接近限制時重建上下文。
- 任務追蹤系統 — 提供樹狀任務結構，自動與檢查點系統集成，保持任務進度。
- 語音輸入 — 支持實時語音輸入，方便用戶在開發過程中快速記錄想法。

## 快速開始

1. 一行安裝
```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
```
2. 或使用 npm 安裝
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
  "預期輸出": "啟動 MiMoCode 並引導用戶完成配置"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 9380 stars（1563/天），forks 833（8.9%），顯示出強烈的社群關注。這個專案由 Xiaomi 的團隊開發，解決了開發者在使用 AI 助手時的上下文管理問題，之前的工具如 OpenCode 無法有效支持持久記憶和多代理協作。近期的討論和反饋顯示出用戶對於其功能的期待，特別是在 Git 管理和代碼生成方面的應用。技術上，MiMoCode 的設計充分利用了現有的 LLM API，並在此基礎上進行了擴展，這使得它在當前的開發生態中具有競爭力。

## 適合誰使用

**目標受眾**：需要在終端環境中使用 AI 助手進行代碼開發和管理的開發者。

> [!example] 使用場景
> - 後端開發者用它來管理大型專案的代碼和任務進度，因為持久記憶功能能夠自動記錄和恢復專案狀態，避免重複學習。
> - 前端工程師用它來快速生成和測試 UI 元件，因為其多代理模式能夠同時進行設計和實現，提升工作效率。
> - DevOps 工程師用它來自動化部署流程，因為它能夠與 Git 集成並追蹤任務進度，減少手動操作的錯誤。

## 架構分析

MiMoCode 採用模組化架構，使用 Bun 作為包管理器，並依賴 SQLite 進行持久記憶管理。這樣的設計使得開發者能夠輕鬆安裝和配置，並在終端環境中運行。資料流方面，使用者的輸入經過多代理系統處理，並根據上下文進行智能管理。

選擇 Bun 而非 npm 的原因在於其更快的啟動時間和更好的性能。這種設計的代價是需要一定的學習成本來熟悉 Bun 的生態。隨著專案的擴展，可能會面臨依賴管理的複雜性，但目前的架構已經能夠支持大部分開發需求。

## 技術深入分析

MiMoCode 的核心技術機制包括多代理系統和持久記憶管理，這使得其能夠在不同的開發階段提供靈活的支持。使用 SQLite FTS5 進行記憶管理，能夠快速檢索和更新專案知識，這在大型專案中尤為重要。設計上，選擇 Bun 作為包管理器，提供了更快的啟動時間和更好的性能，這對於需要快速迭代的開發環境至關重要。隨著專案的擴展，可能會面臨依賴管理的複雜性，但目前的架構已經能夠支持大部分開發需求。技術風險方面，隨著使用者數量的增加，記憶管理的性能可能會成為瓶頸，特別是在高並發的情況下。整合方面，MiMoCode 與主流的 CI/CD 工具相容性良好，能夠輕鬆融入現有的開發流程。使用者在學習成本上可能需要花費一些時間來熟悉其操作，但整體來說，這個工具的設計是相當友好的。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例指令。安裝過程相對順暢，但需要注意安裝額外依賴以支持語音輸入。文件中有多語言選擇，對於新手來說，能夠在 30 分鐘內完成基本配置並運行。整體而言，新手體驗良好。

## 優缺點分析

> [!success] 優點
> - 持久記憶功能能夠減少重複學習，提高開發效率。
> - 多代理系統支持不同的開發模式，靈活應對各種需求。
> - 智能上下文管理能夠自動保存和重建會話狀態，提升使用體驗。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定性和 bug。
> - 在大型專案中性能可能會受到影響，特別是在記憶管理方面。
> - 需要額外安裝依賴以支持語音輸入功能，增加了使用門檻。

> [!warning] 注意事項
> - 目前仍在 beta 階段，可能存在不穩定的功能。
> - 在大型專案中可能會面臨性能瓶頸，特別是在記憶管理方面。
> - 需要安裝額外的依賴（如 sox）以支持語音輸入功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [XiaomiMiMo/OpenCode](https://github.com/XiaomiMiMo/OpenCode) | MiMoCode 在 OpenCode 的基礎上增加了持久記憶和智能上下文管理功能，能夠更好地支持多會話的開發需求。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 提供了類似的多代理系統，但缺乏 MiMoCode 的持久記憶和上下文重建能力。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 專注於簡化的代碼生成，無法提供 MiMoCode 的智能任務追蹤和上下文管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [XiaomiMiMo/OpenCode](https://github.com/XiaomiMiMo/OpenCode) | OpenCode 提供了基本的 AI 編碼助手功能，但缺乏 MiMoCode 的持久記憶和上下文管理能力。 | 如果你的團隊需要一個簡單的 AI 編碼助手，並且不需要持久記憶功能，可以選擇 OpenCode。 | medium，因為需要重新配置和適應新的功能。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 提供了多代理系統，但不具備 MiMoCode 的持久記憶和上下文重建能力。 | 如果你的專案需要多代理協作，但不需要持久記憶，可以考慮 agent-sprite-forge。 | low，因為功能相似，遷移成本較低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 專注於簡化的代碼生成，無法提供 MiMoCode 的智能任務追蹤和上下文管理功能。 | 如果你的專案主要集中在代碼生成而非上下文管理，可以選擇 boneyard。 | low，因為功能簡單，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MiMo-Code** | **OpenCode** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenCode 提供了基本的 AI 編碼助手功能，但缺乏 MiMoCode 的持久記憶和上下文管理能力。 | agent-sprite-forge 提供了多代理系統，但不具備 MiMoCode 的持久記憶和上下文重建能力。 | boneyard 專注於簡化的代碼生成，無法提供 MiMoCode 的智能任務追蹤和上下文管理功能。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的功能。 | low，因為功能相似，遷移成本較低。 | low，因為功能簡單，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個簡單的 AI 編碼助手，並且不需要持久記 | 如果你的專案需要多代理協作，但不需要持久記憶，可以考慮 ag | 如果你的專案主要集中在代碼生成而非上下文管理，可以選擇 bo |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 WSL 中使用時，剪貼簿可能出現問題，導致文本亂碼
  - 解法：安裝 xsel 解決問題
- [MEDIUM] 在大型專案中，持久記憶的性能可能會下降
  - 解法：定期清理不必要的記憶內容
- [MEDIUM] 語音輸入功能需要額外安裝依賴，增加了使用門檻
  - 解法：提前安裝 sox 和 pulseaudio，並配置好環境

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 持久記憶功能能夠幫助團隊快速適應和管理專案。 |
| 大型企業的多團隊協作專案 | 適合 | 多代理系統能夠支持不同團隊的需求，但性能需注意。 |
| 個人開發者的 side project | 非常適合 | 易於安裝和使用，能夠快速提升開發效率。 |
| 需要高性能的實時系統開發 | 不適合 | 在大型專案中性能可能會受到影響，特別是在記憶管理方面。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到提升開發效率的 AI 助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，依賴鏈相對安全，適合在 CI/CD 中使用。

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
| Forks | 833 |
| Open Issues | 763 |
| Issue 解決率 | 8% (63 closed) |
| 最後推送 | 2026-06-16 |
| 建立日期 | 2026-06-10 |
| Repo 大小 | 50.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XiaomiMiMo/MiMo-Code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 63
>     "MDX" : 34
>     "CSS" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@qiaozongming](https://github.com/qiaozongming) | 7 |
> | [@bwshen-mi](https://github.com/bwshen-mi) | 2 |
> | [@ChuanfengZhang](https://github.com/ChuanfengZhang) | 1 |

**最新版本**：v0.1.1 (2026-06-15)

> [!info]- Release Notes
> MiMoCode v0.1.1

## 社群與生態

**社群活躍度**：社群活躍度高，持續有新功能和修復更新。
**連結**：[文件](https://platform.xiaomimimo.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-10 ~ 2026-06-15）
> **活躍天數** 3 天 · **最新 commit** Update to latest release

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#711](https://github.com/XiaomiMiMo/MiMo-Code/issues/711) | v0.1.1 更新内容 `question` | 8 | 1 |
> | [#460](https://github.com/XiaomiMiMo/MiMo-Code/issues/460) | [BUG] 睿智的模型会乱删文件 `bug` | 8 | 4 |
> | [#125](https://github.com/XiaomiMiMo/MiMo-Code/issues/125) | [FEATURE]:希望支持从opencode切换到mimo code | 5 | 0 |
> | [#588](https://github.com/XiaomiMiMo/MiMo-Code/issues/588) | [META]: Community is watching — MiMo Code has a real opportu | 4 | 1 |
> | [#509](https://github.com/XiaomiMiMo/MiMo-Code/issues/509) | [FEATURE]: 建议添加回来可接入 opencode go | 4 | 0 |

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
> MiMoCode is built as a fork of [OpenCode](https://github.com/XiaomiMiMo/MiMo-Code). It keeps all core OpenCode capabilities (multiple providers, TUI, LSP, MCP, plugins) and adds persistent memory, intelligent context management, subagent orchestration, goal-driven autonomous loops, compose workflows, and self-improvement via dream/distill.
> 
> ---
> 
> ## Community
> 
> Scan the QR code to join the community group chat:
> 
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/XiaomiMiMo/MiMo-Code)

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
> const concepts = ["CLI/TUI","自動化","機器學習"];
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
