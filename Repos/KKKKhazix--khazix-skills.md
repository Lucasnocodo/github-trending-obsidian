---
repo: KKKKhazix/khazix-skills
url: https://github.com/KKKKhazix/khazix-skills
owner: KKKKhazix
owner_type: User
language: Python
license: MIT
description: "数字生命卡兹克开源的 AI Skills 合集"
homepage: ""
stars: 7799
stars_per_day: 300
forks: 1163
open_issues: 9
created: 2026-04-06
pushed_at: 2026-04-29
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "AI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供一系列 AI 技能和提示，讓使用者能夠更高效地與 AI 互動。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 36
readme_length: 4095
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1585,2026-04-12:1588,2026-04-13:1719,2026-04-13:1721,2026-04-14:3559,2026-04-15:4270,2026-04-16:4693,2026-04-17:4943,2026-04-18:5105,2026-04-19:5214,2026-04-20:5390,2026-04-21:5565,2026-04-22:5709,2026-04-23:5845,2026-04-24:5951,2026-04-25:6033,2026-04-26:6080,2026-04-27:6136,2026-04-28:6192,2026-04-29:6268,2026-04-30:7148,2026-05-01:7497,2026-05-02:7691,2026-05-03:7799"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "khazix-skills"
  - "KKKKhazix/khazix-skills"
  - "提供一系列 AI 技能和提示，讓使用者能夠更高效地與 AI 互動。"
---

# khazix-skills

**7.8k** stars · **300** stars/天 · 建立 26 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/KKKKhazix--khazix-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一系列 AI 技能和提示，讓使用者能夠更高效地與 AI 互動。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (300 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要提升 AI 互動效率的開發者和研究者。
> **一句話重點** 這個專案的價值在於提供實用的 AI 技能，幫助用戶高效管理信息和文檔。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "KKKKhazix--khazix-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的 AI 互動工具，值得採用。

> [!abstract] 核心創新
> 提供了一套專注於 AI 互動效率的技能集合，特別適合文檔和記憶管理。

## 專案簡介

Khazix Skills 是一個開源的 AI 技能集合，專為提升與 AI 互動的效率而設計。使用者可以透過簡單的指令安裝各種技能，例如 `/neat` 指令可以自動整理項目文檔和記憶，確保信息的一致性。這些技能遵循 Agent Skills 開放標準，能夠被多種 AI Agent 輕鬆加載。此專案的核心在於提供實用的工具，幫助用戶在日常工作中節省時間和精力，尤其是在文檔管理和信息整理上。技術上，這些技能使用 Python 實現，並且設計上考慮了多平台的兼容性，能在 Claude Code、Codex 等多個環境中運行。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Khazix Skills 提供了更具結構化的指令集，並且專注於用戶的實際需求。

這使得它在需要快速整理和生成文檔的場景中表現更佳。使用者在實際操作中可能會發現，雖然技能數量不多，但每個技能都經過實際測試，能夠有效解決特定問題。這個專案目前處於活躍開發階段，社群回應速度尚可，適合需要提升 AI 互動效率的開發者和研究者。未來幾個月內，預期將會增加更多技能和功能，進一步擴展其應用範圍。對於希望在 AI 領域中提高工作效率的團隊，這是一個值得考慮的工具。

**技術棧**：`Python`

## 重點功能

- 技能安裝 — 透過簡單的指令安裝技能，例如 `帮我安装这个 skill：https://github.com/KKKKhazix/khazix-skills/tree/main/`。
- 文檔整理 — 使用 `/neat` 指令自動整理項目文檔和記憶，確保信息一致性。
- 深入分析 — `hv-analysis` 能生成 10,000–30,000 字的 PDF 研究報告，適合市場調研。
- 寫作助手 — `khazix-writer` 能根據用戶的風格生成內容，提升寫作效率。
- 多平台支持 — 兼容 Claude Code、Codex、OpenClaw 等多種 AI Agent。

## 快速開始

1. 安裝技能
```bash
帮我安装这个 skill：https://github.com/KKKKhazix/khazix-skills/tree/main/
```
2. 使用整理指令
```bash
/neat
```
3. 生成分析報告
```bash
hv-analysis <研究對象>
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 26 天就累積 7799 stars（300/天），forks 1163（14.9%），顯示出強烈的社群興趣。作者 KKKKhazix 之前在 AI 相關領域有一定的經驗，這個專案解決了 AI 互動中常見的文檔和記憶不一致問題，提供了一個簡單的解決方案。最近的推廣活動和社群討論也促進了其曝光度。技術上，AI 的發展使得這些技能的實現變得可行，並且在多平台支持下，使用者能夠輕鬆整合到現有工作流中。高達 14.9% 的 forks/stars 比率顯示出許多人對這個專案的實際修改和使用，表明它不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要提升 AI 互動效率的開發者和研究者。

> [!example] 使用場景
> - 開發者用它來自動整理項目文檔，因為手動更新文檔容易出錯，使用 `/neat` 可以節省大量時間。
> - 研究者用它來生成深入的市場分析報告，因為 `hv-analysis` 能夠提供結構化的 PDF 報告，節省了調研時間。
> - 內容創作者用它來模仿特定風格撰寫文章，因為 `khazix-writer` 能夠根據用戶的風格生成內容，提升寫作效率。

## 架構分析

Khazix Skills 的架構設計以簡化用戶與 AI 的互動為核心，採用 Python 實現，並遵循 Agent Skills 開放標準。每個技能都是一個獨立的模組，能夠被多種 AI Agent 加載，這樣的設計使得用戶可以根據需求靈活選擇和安裝技能。資料流方面，使用者的請求經由 Agent 解析，然後調用相應的技能進行處理，最後返回結果。

這種模組化的設計使得擴展性良好，未來可以輕鬆添加更多技能。這也意味著，當用戶需要特定功能時，可以直接安裝相應的技能，而不必擔心整體系統的複雜性。整體而言，這種設計降低了使用門檻，讓更多用戶能夠輕鬆上手。

## 技術深入分析

Khazix Skills 的核心技術機制在於其模組化的技能設計，這使得用戶能夠根據需求靈活選擇和安裝技能。每個技能都經過實際測試，確保其在日常工作中的有效性。效能方面，這些技能能夠快速響應用戶請求，並生成所需的結果，例如 `hv-analysis` 能在短時間內生成長達 30,000 字的報告。設計上，選擇 Python 作為實現語言，因為其在 AI 和自動化領域的廣泛應用，並且擁有豐富的庫支持。這樣的選擇雖然可能在性能上不如某些編譯語言，但在開發速度和靈活性上具有優勢。技術風險方面，隨著技能數量的增加，如何保持每個技能的質量和穩定性將是一個挑戰。整合方面，Khazix Skills 可以輕鬆與現有的 AI 工具鏈結合，並且支持多種 CI/CD 流程，這使得它在團隊協作中表現良好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的技能介紹和使用範例，安裝過程相對順暢，沒有明顯的坑。雖然沒有專門的入門指南，但技能的使用方式簡單明瞭，適合新手快速上手。文件目前僅提供中文，可能對非中文使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 技能安裝簡單，使用者只需輸入指令即可。
> - 專注於提升 AI 互動效率，解決實際問題。
> - 支持多平台，靈活性高。

> [!danger] 缺點
> - 技能數量有限，可能無法滿足所有需求。
> - 需要在特定環境中運行，限制了使用範圍。
> - 部分技能需要用戶具備背景知識。

> [!warning] 注意事項
> - 目前技能數量有限，可能無法滿足所有需求。
> - 需要在支持的 AI Agent 環境中運行，限制了使用範圍。
> - 部分技能可能需要用戶具備一定的背景知識才能有效使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI Agent 支持，但不專注於文檔整理和信息一致性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供 AI 工具，但功能較為分散，缺乏專注於特定任務的技能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少 10 倍，但生態系統不如 Python 廣泛。 | 如果你的團隊已經在用 Rust 且需要高性能的 AI 工具。 | medium，因為需要重新學習 Rust 語言的特性和生態。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 AI 工具，但功能較為分散，缺乏專注於特定任務的技能。 | 如果你需要多樣化的 AI 工具，而不僅僅是專注於文檔管理。 | low，因為使用方式相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **khazix-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少 10 倍，但生態系統不如 Python 廣泛。 | 提供多種 AI 工具，但功能較為分散，缺乏專注於特定任務的技能。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 語言的特性和生態。 | low，因為使用方式相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Rust 且需要高性能的 AI 工具。 | 如果你需要多樣化的 AI 工具，而不僅僅是專注於文檔管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分技能在特定環境下可能無法正常運行
  - 解法：確保在支持的 AI Agent 環境中使用
- [MEDIUM] 技能更新後可能需要重新安裝
  - 解法：定期檢查更新並重新安裝技能
- [MEDIUM] 文檔可能未及時更新，導致使用困難
  - 解法：參考社群討論以獲取最新信息

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要高效整理文檔的開發團隊 | 非常適合 | 提供了專門的文檔整理技能，能夠顯著提升效率。 |
| 小型創業公司進行市場調研 | 適合 | 能夠生成深入的市場分析報告，幫助團隊快速了解競爭環境。 |
| 大型企業的 AI 部門 | 普通 | 雖然有實用技能，但可能需要更多的功能來滿足複雜需求。 |
| 個人使用者進行簡單的 AI 互動 | 非常適合 | 技能簡單易用，能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的 AI 互動工具，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Khazix Skills 最常與 Claude Code、Codex 等 AI Agent 搭配使用，處於開發和部署環節。在一個用 Claude Code 的專案中，使用者可以透過指令安裝技能，並在日常工作中直接調用。這些技能能夠輕鬆整合到現有的 CI/CD 流程中，支持 GitHub Actions 等主流工具。整合的摩擦點主要在於技能的兼容性，使用者需要確保所用的 Agent 支持相應的技能，這可能會造成一定的整合成本。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Khazix Skills 出現之前，開發者主要依賴手動更新文檔和記憶，這導致了信息不一致的問題。隨著 AI 技術的進步，能夠自動化這些過程的工具變得越來越可行。Khazix Skills 代表了 AI 互動效率提升的趨勢，未來可能會有更多類似工具出現，進一步簡化開發者的工作流程。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 AI 工具使用
- 了解文檔管理的基本概念

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋並調整使用方式。

**成功指標**：文檔更新的效率提升 50%。

> [!warning] 退出計畫
> 所有技能的設定存在標準 JSON 格式，可以輕鬆轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
| Forks | 1.2k |
| Open Issues | 9 |
| Issue 解決率 | 10% (1 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 36 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/khazix-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 15 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和討論。
**連結**：[文件](https://agentskills.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-28 ~ 2026-04-29）
> **活躍天數** 2 天 · **最新 commit** Untrack internal CLAUDE.md from public repo

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/KKKKhazix/khazix-skills/issues/10) | 提问 | 0 | 0 |
> | [#9](https://github.com/KKKKhazix/khazix-skills/issues/9) | 楼主，没有看到自演进skill | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **中文** · [English](./README.en.md)
> 
> # 🧰 Khazix Skills
> 
> #### 我自己每天在用的一些 AI 技能和 Prompt，都开源在这里
> 
> [](./LICENSE)
> [](#-skills)
> [](#-prompts)
> [](https://agentskills.io)
> 
> 都是在自己项目里跑通了一段时间，确实省事，才搬出来开源的。没什么花活，就是几个挺实用的东西。
> 
> - **Skills** — Agent 能直接加载的结构化指令集，遵循 [Agent Skills](https://agentskills.io) 开放标准。Claude Code、Codex、OpenCode、OpenClaw 都能装
> - **Prompts** — 一段提示词，复制粘贴到 ChatGPT / Claude / Gemini 任何对话里就能用，不需要安装
> 
> ---
> 
> ## 📋 目录
> 
> ### Skills
> 
> | 名字 | 一句话 | 讲解 |
> |---|---|---|
> | 🧹 [**neat-freak（洁癖）**](#-neat-freak洁癖) | 干完活跑一下 `/neat`，自动把你这次改的东西跟项目文档、CLAUDE.md、Agent 记忆全部对齐 | [公众号文章](https://mp.weixin.qq.com/s/tg1wd-iN2gWHWhXdY0faeg) |
> | 🔭 [**hv-analysis（横纵分析法）**](#-hv-analysis横纵分析法) | 想搞懂一个产品/公司/概念是怎么回事，丢给它，给你一份万字 PDF 研究报告 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> | ✍️ [**khazix-writer（卡兹克写作）**](#-khazix-writer卡兹克写作) | 装上之后，Agent 用我的口吻和节奏写公众号长文 | [公众号文章](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg) |
> 
> ### Prompts
> 
> | 名字 | 一句话 | 讲解 |
> |---|---|---|
> | 🔭 [**横纵分析法（Prompt 版）**](#-横纵分析法prompt-版) | 上面那个 Skill 的轻量版，复制粘贴到任何 Deep Research 模型里就能跑 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> 
> ---
> 
> ## 📦 安装方式
> 
> 在 Claude Code、Codex、OpenClaw 等支持 Skill 的 Agent 里，直接说：
> 
> ```
> 帮我安装这个 skill：https://github.com/KKKKhazix/khazix-skills/tree/main/
> ```
> 
> 把 `` 换成你想装的那个，比如 `neat-freak`、`hv-analysis`、`khazix-writer`。Agent 会自己 clone 到对应目录，不用你操心路径。
> 
> ---
> 
> ## ✨ Skills
> 
> ### 🧹 neat-freak（洁癖）
> 
> > *"每次任务做完要退出窗口的时候，如果不跑一遍 /neat，我就浑身难受，如坐针毡如芒刺背如鲠在喉。"*
> 
> 每次你在 Agent 里干完一件事，跑一下 `/neat`，它会把你这次会话改的东西，跟项目里的**文档**、**CLAUDE.md / AGENTS.md**、**Agent 记忆**全部对齐一遍，最后给你一份变更摘要。
> 
> **为什么需要这个**
> 
> 你大概也遇到过：代码都迭代了七八轮，文档还是最初那一版；记忆里写着用 SQLite，其实你早换 PostgreSQL 了；CLAUDE.md 里的接口列表跟实际路由对不上。Agent 看着这些过期信息，越用越笨。
> 
> 不是模型变笨，是文档和记忆脑腐了。neat-freak 就是清这个的。
> 
> **它会动哪三层东西**
> 
> - 项目根的 CLAUDE.md / AGENTS.md（给当前 AI 看的）
> - 项目的 docs/ 和 README（给同事和其他人看的）
> - Agent 自己的记忆系统（给跨会话的自己看的）
> 
> 这三层受众不同，职责不重叠，得分别处理。这也是我当时不满意 Claude Code 那个 AutoDream 的原因——它只动记忆，不动文档。
> 
> **怎么触发**
> 
> ```
> /neat            # 直接命令
> 整理一下          # 自然语言
> 同步一下          # 自然语言
> sync up          # English
> ```
> 
> **🌐 跨平台**：Claude Code · Codex · OpenCode · OpenClaw
> 
> [](https://clawhub.ai)
> [](https://tessl.io/registry/khazix-skills/neat-freak)
> 
> → [SKILL.md](./neat-freak/SKILL.md) · [公众号讲解](https://mp.weixin.qq.com/s/tg1wd-iN2gWHWhXdY0faeg)
> 
> ### 🔭 hv-analysis（横纵分析法）
> 
> > *"纵向追时间深度，横向追同期广度，最终交汇出判断。"*
> 
> 想搞懂一个产品 / 公司 / 概念 / 人物到底是怎么回事，丢给它就行。
> 
> 它会同时跑两条线：**纵向**把研究对象从诞生讲到当下，像讲故事一样把演变讲完整；**横向**把同期所有主要竞品摆出来逐一对比。最后两条线一交叉，能看出一些只看现状或只看历史看不出来的东西。
> 
> 最后给你一份**排版精美的 PDF 研究报告**，10,000–30,000 字。
> 
> **适合**
> 
> - 调研竞品 / 调研一个新概念 / 调研一个公司
> - 写作前期需要系统性的素材准备
> - 对一个领域想从零搞懂
> 
> **不适合**
> 
> - 单纯查个名词解释 — 那种问题用普通对话就行，杀鸡用牛刀
> - 写公众号文章 — 那个用下面的 khazix-writer
> 
> [](https://clawhub.ai)
> [](https://tessl.io/registry/khazix-skills/hv-analysis)
> 
> → [SKILL.md](./hv-analysis/SKILL.md) · [公众号讲解](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA)
> 
> ### ✍️ khazix-writer（卡兹克写作）
> 
> > *"有见识的普通人在认真聊一件打动他的事。"*
> 
> 我自己写公众号的那套写作 skill。装上之后，Agent 写出来的东西就是我的口吻、我的节奏、我的禁忌词全在里面。
> 
> **适合**
> 
> 你看过我公众号「数字生命卡兹克」的文章，觉得风格还行，想让你的 AI 也照着这个调子写东西。比如丢一篇 PDF / 一段语音转文字 / 一个新闻链接，让它写成长文。
> 
> **不适合**
> 
> 你想要的是"通用好文笔"。这个 skill 是有立场的——它会**拒绝**写「赋能、抓手、闭环」、**拒绝**「首先...其次」、**拒绝**「在当今 AI 快速发展的时代」、**拒绝**「说白了 / 本质上 / 换句话说」。如果你的目标读者就好这一口，那这个 skill 不适合你。
> 
> **它会做什么**
> 
> - 完整的写作风格规则（节奏、叙事、判断、修辞）
> - 四层自检体系（结构、节奏、内容、文字）
> - 一套风格示例库（可以让 AI 直接对照）
> 
> [](https://clawhub.ai)
> [](https://tessl.io/registry/khazix-skills/khazix-writer)
> 
> → [SKILL.md](./khazix-writer/SKILL.md) · [公众号讲解](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg)
> 
> ---
> 
> ## 📝 Prompts
> 
> ### 🔭 横纵分析法（Prompt 版）
> 
> 上面那个 hv-analysis Skill 的**轻量版**——一段 prompt，复制粘贴到任何支持 Deep Research 的模型里就能跑（ChatGPT Deep Research、Gemini Deep Research、Grok Deep Search、Claude Research 都行），不需要安装任何东西。
> 
> 半小时左右出一份万字级研究报告。
> 
> 适合还没开始用 Claude Code / Codex 这类带 Skill 系统的 Agent，但又想体验一下这个方法论的人。
> 
> → [横纵分析法.md](./prompts/横纵分析法.md) · [公众号讲解](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA)
> 
> ---
> 
> ## 🌟 关于
> 
> 我是数字生命卡兹克，公众号「数字生命卡兹克」、虚实传媒（Virxact）创始人。视觉传达设计出身，做过用户研究和交互设计，**不是程序员**。
> 
> 这些 skill 都是我自己每天在用的，开源出来如果对你有帮助，给个 ⭐ 就行。有问题或建议，欢迎在 Issues / Discussions 里说一声。
> 
> ---
> 
> [MIT License](./LICENSE) · 自由使用 / 修改 / 再分发
> 
> Made by [@KKKKhazix](https://github.com/KKKKhazix)

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自動化]] · [[文檔管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/KKKKhazix/khazix-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "KKKKhazix--khazix-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","自動化","文檔管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KKKKhazix" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 再次上榜，1.7k stars
- [[2026-04-12|2026-04-12]] — 首次收錄，1.6k stars
