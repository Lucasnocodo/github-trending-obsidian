---
repo: XiaomiMiMo/MiMo-Code
url: https://github.com/XiaomiMiMo/MiMo-Code
owner: XiaomiMiMo
owner_type: Organization
language: TypeScript
license: MIT
description: "MiMo Code: Where Models and Agents Co-Evolve"
homepage: "https://mimo.xiaomi.com/coder"
stars: 10497
stars_per_day: 807
forks: 984
open_issues: 561
created: 2026-06-10
pushed_at: 2026-06-24
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "AI 助手"
release_tag: "v0.1.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "提供一個具持久記憶的 AI 編碼助手，能夠讀寫代碼、管理 Git 並自我改進。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-06-20"
contributor_count: 5
engagement: "low"
issue_close_rate: 15
repo_size_kb: 51837
readme_length: 7521
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:681,2026-06-11:794,2026-06-12:4740,2026-06-12:4782,2026-06-13:6887,2026-06-13:6905,2026-06-14:7947,2026-06-14:7958,2026-06-15:8469,2026-06-15:8478,2026-06-16:9041,2026-06-16:9048,2026-06-17:9378,2026-06-17:9380,2026-06-18:9596,2026-06-19:9794,2026-06-20:9948,2026-06-21:10087,2026-06-22:10194,2026-06-23:10358,2026-06-24:10497"
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
  - "提供一個具持久記憶的 AI 編碼助手，能夠讀寫代碼、管理 Git 並自我改進。"
---

# MiMo-Code

**10.5k** stars · **807** stars/天 · 建立 13 天前 · TypeScript · MIT

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

`ORG` `v0.1.2` `easy-install`

`ai` `ai-agents` `cli` `mimo` `mimo-code`

> [!summary] 一句話摘要
> 提供一個具持久記憶的 AI 編碼助手，能夠讀寫代碼、管理 Git 並自我改進。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (807 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在終端環境中高效開發並希望利用 AI 提升生產力的開發者。
> **一句話重點** MiMoCode 的持久記憶和智能上下文管理功能使其在 AI 編碼助手中脫穎而出。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到高效的 AI 編碼助手，值得一試。

> [!abstract] 核心創新
> MiMoCode 是一個具持久記憶的 AI 編碼助手，能夠在多次會話中保持對專案的深刻理解。

## 專案簡介

MiMoCode 是一個終端原生的 AI 編碼助手，設計用來提升開發者的生產力。它的核心功能包括讀寫代碼、執行命令、管理 Git，並利用持久記憶系統在多次會話中保持對專案的深刻理解。使用者可以透過簡單的命令 `mimo` 啟動，並在首次啟動時自動引導配置。這個工具的賣點在於其持久記憶功能，能夠自動保存專案知識和會話狀態，避免重複學習。技術上，MiMoCode 使用 SQLite FTS5 進行全文本搜索，並且支持多個代理模式，如 `build`、`plan` 和 `compose`，以適應不同的開發需求。

與同類工具相比，如 OpenCode，MiMoCode 在持久記憶和智能上下文管理上有顯著提升，能夠自動決定何時保存會話狀態，並在上下文接近限制時重建上下文。這使得開發者在多次會話中能夠無縫接續工作。使用者可以透過 `/goal` 命令設置會話的停止條件，並利用 `/dream` 和 `/distill` 命令進行知識提煉和技能包裝。這些功能使得 MiMoCode 在大型專案和長期開發中表現優異，特別是對於需要持續學習和自我改進的 AI 助手。對於需要快速上手的開發者，MiMoCode 提供了零配置的 MiMo Auto 模式，降低了使用門檻。

**技術棧**：`TypeScript 5.8.2` · `Bun 1.3.11` · `SQLite`

## 重點功能

- 持久記憶 — 使用 SQLite FTS5 保存專案知識和會話狀態，避免重複學習。
- 多代理模式 — 提供 `build`、`plan` 和 `compose` 三種模式以適應不同開發需求。
- 智能上下文管理 — 自動決定何時保存會話狀態，並在上下文接近限制時重建上下文。
- 任務追蹤系統 — 樹狀任務系統自動與檢查點系統整合，保存任務進度。
- 語音輸入 — 實時流式語音輸入，支持在開發過程中進行語音控制。

## 快速開始

1. 一行安裝
```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
```
2. 或透過 npm 安裝
```bash
npm install -g @mimo-ai/cli
```
3. 啟動 MiMoCode
```bash
mimo
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天內累積 10497 stars（807/天），forks 984（9.4%），顯示出強勁的增長勢頭。這個專案由小米團隊開發，解決了開發者在多次會話中無法保持上下文的痛點，之前的解決方案如 OpenCode 雖然功能強大，但缺乏持久記憶和智能上下文管理。近期的社群討論也表明，MiMoCode 在開源社群中引起了廣泛關注，尤其是在 GitHub 上的活躍度高。這個工具的出現正好填補了市場上對高效 AI 編碼助手的需求，並且技術上具備了許多創新特性。

## 適合誰使用

**目標受眾**：需要在終端環境中高效開發並希望利用 AI 提升生產力的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動生成 API 文檔，因為 MiMoCode 的持久記憶能夠記錄專案的結構和需求，避免重複工作。
> - 全端開發者用它來管理多個 Git 分支，因為它能夠自動追蹤任務進度，並在會話中保持上下文。
> - AI 研究員用它來測試不同的模型，因為 MiMoCode 的智能上下文管理能夠快速切換不同的實驗設置。

## 架構分析

MiMoCode 採用模組化架構，主要由多個代理和持久記憶系統組成。每個代理負責不同的任務，並能夠根據需要創建子代理。持久記憶系統使用 SQLite 來存儲專案知識和會話狀態，這樣的設計使得開發者可以在多次會話中無縫接續工作。選擇 SQLite 作為存儲解決方案的好處在於其輕量和高效，但在處理大型專案時可能會遇到性能瓶頸。整體架構的擴展性良好，能夠支持多種 LLM 提供者，並且可以根據需求調整代理的行為和權限。

## 技術深入分析

MiMoCode 的核心技術機制在於其持久記憶和多代理系統。持久記憶系統使用 SQLite FTS5 進行全文本搜索，能夠高效地存儲和檢索專案知識。多代理系統允許用戶根據需求選擇不同的工作模式，這樣的設計使得開發者可以靈活應對不同的開發任務。效能上，MiMoCode 能夠處理中小型專案的需求，但對於大型專案，SQLite 的性能可能會成為瓶頸。

選擇 TypeScript 和 Bun 作為開發語言和環境，提供了良好的開發體驗和高效的執行效率。這些選擇使得 MiMoCode 能夠快速迭代和更新。技術風險方面，持久記憶的設計可能在擴展時面臨挑戰，特別是在存儲和檢索大量數據時。整合方面，MiMoCode 與主流的 LLM 提供者相容性良好，能夠輕鬆接入現有的開發工具鏈。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和使用範例，對於新手來說非常友好。安裝過程順暢，無明顯坑點。提供了良好的入門指南，幫助使用者快速上手。

## 優缺點分析

> [!success] 優點
> - 持久記憶功能能夠有效減少重複學習的時間。
> - 多代理模式提供靈活的開發方式，適應不同的開發需求。
> - 智能上下文管理系統能夠自動保存和重建上下文，提升工作效率。

> [!danger] 缺點
> - 目前僅支援 Linux 和 macOS，Windows 用戶需透過 WSL 使用。
> - 對於大型專案，SQLite 的性能可能成為瓶頸。
> - 某些功能需要額外安裝依賴，增加了使用的複雜性。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 用戶需透過 WSL 使用。
> - 持久記憶功能依賴 SQLite，對於大型專案可能會有性能瓶頸。
> - 某些功能如語音輸入需要額外安裝依賴，如 sox。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理協作，但缺乏持久記憶功能，適合短期任務。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的 AI 助手功能，但不支持多種代理模式，適合簡單的開發需求。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於代碼生成，缺乏上下文管理和持久記憶，適合小型專案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理協作，但缺乏持久記憶功能，適合短期任務。 | 如果需要快速協作的多代理環境，且不需要持久記憶。 | medium，因為需要重新設計任務管理和上下文處理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的 AI 助手功能，但不支持多種代理模式，適合簡單的開發需求。 | 如果專案需求簡單，且不需要多代理協作。 | low，因為功能相似且易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MiMo-Code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多代理協作，但缺乏持久記憶功能，適合短期任務。 | 提供基本的 AI 助手功能，但不支持多種代理模式，適合簡單的開發需求。 |
> | 遷移成本 | - | medium，因為需要重新設計任務管理和上下文處理。 | low，因為功能相似且易於轉換。 |
> | 適用場景 | 主要場景 | 如果需要快速協作的多代理環境，且不需要持久記憶。 | 如果專案需求簡單，且不需要多代理協作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議用於生產環境的核心路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 WSL 中使用時，複製的文本可能會出現亂碼問題。
  - 解法：安裝 xsel 以解決剪貼簿問題。
- [MEDIUM] 持久記憶功能在大型專案中可能會導致性能下降。
  - 解法：定期清理不必要的記憶數據。
- [MEDIUM] 某些功能需要額外安裝依賴，增加了使用的複雜性。
  - 解法：仔細閱讀文檔以確保所有依賴都已安裝。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的專案管理 | 非常適合 | 持久記憶和任務追蹤功能能夠有效提升團隊協作效率。 |
| 大型企業的長期開發專案 | 普通 | 持久記憶在大型專案中可能會遇到性能瓶頸。 |
| 個人開發者的日常編碼 | 非常適合 | 零配置的 MiMo Auto 模式降低了使用門檻。 |
| 需要高效語音控制的開發環境 | 適合 | 語音輸入功能提供了額外的便利性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高效的 AI 編碼助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取專案相關資料。依賴的庫需定期更新以避免安全漏洞，整體風險可控。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MiMoCode 最常與 Git 和其他開發工具搭配使用，處於開發和測試的環節。在一個使用 GitHub 的專案中，開發者可以用 MiMoCode 來自動生成代碼和管理任務，具體做法是透過 `mimo` 命令啟動並配置 Git 連接。支援 GitHub Actions 和其他 CI 工具，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於需要確保所有依賴正確安裝，並且對於大型專案，持久記憶的性能可能成為問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 MiMoCode 出現之前，開發者主要依賴傳統的編碼工具和 IDE，這些工具通常缺乏智能上下文管理和持久記憶功能。隨著 AI 技術的進步，開發者對於能夠自我學習和適應的工具需求增加。MiMoCode 的出現正好滿足了這一需求，並且在技術上實現了許多創新，代表了 AI 編碼助手的未來趨勢。

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
| Forks | 984 |
| Open Issues | 561 |
| Issue 解決率 | 15% (100 closed) |
| 最後推送 | 2026-06-24 |
| 建立日期 | 2026-06-10 |
| 官方網站 | [Link](https://mimo.xiaomi.com/coder) |
| Repo 大小 | 50.6 MB |
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
> | [@MiMoHardFather](https://github.com/MiMoHardFather) | 41 |
> | [@wqymi](https://github.com/wqymi) | 33 |
> | [@JinyuXiang-Mimo](https://github.com/JinyuXiang-Mimo) | 23 |
> | [@yanyihan-xiaomi](https://github.com/yanyihan-xiaomi) | 16 |
> | [@qiaozongming](https://github.com/qiaozongming) | 14 |

**最新版本**：v0.1.2 (2026-06-23)

> [!info]- Release Notes
> MiMoCode v0.1.2

## 社群與生態

**社群活躍度**：社群活躍度高，定期更新和回應問題。
**連結**：[文件](https://mimo.xiaomi.com/coder)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-23 ~ 2026-06-23）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1256 from XiaomiMiMo/test/fix-tmpdir-git-isolation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#460](https://github.com/XiaomiMiMo/MiMo-Code/issues/460) | [BUG] 睿智的模型会乱删文件 `bug` | 8 | 4 |
> | [#1118](https://github.com/XiaomiMiMo/MiMo-Code/issues/1118) | wechat-mimocode — MiMoCode 链接微信的实践与反馈 | 6 | 2 |
> | [#588](https://github.com/XiaomiMiMo/MiMo-Code/issues/588) | [PROJECT GOVERNANCE]: Community is watching — MiMo Code has  | 6 | 5 |
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

相關概念：[[AI 助手]] · [[持久記憶]] · [[上下文工程]] · [[多代理系統]] · [[語音控制]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/XiaomiMiMo/MiMo-Code) · [官方網站](https://mimo.xiaomi.com/coder)

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
> const concepts = ["AI 助手","持久記憶","上下文工程","多代理系統","語音控制"];
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
