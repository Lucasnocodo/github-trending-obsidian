---
repo: instructkr/claw-code
url: https://github.com/instructkr/claw-code
owner: instructkr
owner_type: Organization
language: Rust
license: N/A
description: "The fastest repo in history to surpass 50K stars ⭐, reaching the milestone in just 2 hours after publication. Better Harness Tools, not merely storing the archive of leaked Claude Code but also make real things done. Now rewriting in Rust."
homepage: ""
stars: 63551
stars_per_day: 63551
forks: 65130
open_issues: 1855
created: 2026-03-31
pushed_at: 2026-04-01
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "工具整合"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "提供一個快速且安全的工具，重寫 Claude Code 的功能，並支援多種工具整合。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 5264
readme_length: 7773
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:63551"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "claw-code"
  - "instructkr/claw-code"
  - "提供一個快速且安全的工具，重寫 Claude Code 的功能，並支援多種工具整合。"
---

# claw-code

**63.6k** stars · **63.6k** stars/天 · 建立 1 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/instructkr--claw-code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供一個快速且安全的工具，重寫 Claude Code 的功能，並支援多種工具整合。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (63.6k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要快速開發和測試工具整合的 AI 研究者和後端工程師。
> **一句話重點** 這個專案不僅是對 Claude Code 的重寫，更是對工具整合和安全性的全新探索。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/instructkr--claw-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "工具整合" && p.file.name !== "instructkr--claw-code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 工具整合 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的開發環境，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 Claude Code 的功能重寫為 Python，並計劃轉向 Rust，以提高性能和安全性。

## 專案簡介

這個專案的核心機制是將 Claude Code 的功能重寫為 Python，並計劃將其轉換為 Rust，以提供更快且安全的執行環境。使用者可以透過簡單的 CLI 指令來生成 Python 工作區的摘要或列出模組，這使得開發者能夠快速掌握當前的開發狀態。這個工具的賣點在於它不僅僅是存儲泄露的代碼，而是提供了一個可操作的框架，讓開發者能夠在此基礎上進行擴展和改進。專案使用了 `oh-my-codex` 進行工作流管理，這使得代碼的重寫過程更為高效。技術上，專案目前主要依賴 Python，但未來會轉向 Rust，以提高性能和安全性。

與其他類似工具相比，如 `AlpinDale/parsync` 和 `CoderLuii/HolyClaude`，本專案的優勢在於其強調的安全性和性能優化，並且提供了更為清晰的架構設計。實際使用中，開發者可以透過簡單的測試指令來驗證功能的正確性，但目前的 Python 版本仍未完全取代原有系統，這意味著在某些情況下可能會遇到功能不完整的問題。專案的社群活躍度較高，但目前的開發進度仍在初期階段，未來的版本可能會有更大的改進。對於需要快速開發和測試的團隊來說，這個工具是非常合適的選擇，但對於需要穩定和成熟解決方案的團隊，則可能需要再觀望一段時間。

**技術棧**：`Python` · `Rust`

## 重點功能

- Python 工作區 — 提供 `src/` 目錄，包含各種模組和工具的重寫。
- CLI 指令 — 使用 `python3 -m src.main summary` 生成當前工作區的摘要。
- 單元測試 — 使用 `python3 -m unittest discover -s tests -v` 來驗證功能正確性。
- 工具清單 — 使用 `python3 -m src.main commands` 列出當前的命令和工具庫。
- 未來的 Rust 版本 — 正在開發中，旨在提供更快且安全的執行環境。

## 快速開始

1. 生成 Python 工作區摘要
```bash
python3 -m src.main summary
```
2. 列出當前模組
```bash
python3 -m src.main subsystems --limit 16
```
3. 運行單元測試
```bash
python3 -m unittest discover -s tests -v
```

## 程式碼範例

```rust
{
  "前置條件": "確保 Python 環境已安裝。",
  "指令": "python3 -m src.main summary",
  "預期輸出": "顯示當前 Python 工作區的摘要。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 63551 stars（63551/天），forks 65130（102.5%），這是極端爆發式增長。作者 Yeachan-Heo 之前在 harness engineering 領域有豐富經驗，這次專案解決了開發者對於安全且高效工具的需求。社群對於 Claude Code 的興趣和需求驅動了這個專案的快速成長。技術上，Rust 的引入使得這個工具在性能上有了顯著的提升潛力。forks/stars 比率超過 100% 表示許多開發者對此專案進行了實際修改和擴展，顯示出強烈的參與意願。

## 適合誰使用

**目標受眾**：需要快速開發和測試工具整合的 AI 研究者和後端工程師。

> [!example] 使用場景
> - 後端工程師用它來重寫和擴展 Claude Code 的功能，因為這樣可以在不違反版權的情況下利用已有的架構。
> - AI 研究者用它來快速測試新的工具整合，因為它提供了清晰的架構和簡單的測試指令。
> - 開發團隊用它來建立安全的開發環境，因為 Rust 的引入能夠提供更高的安全性和性能。

## 架構分析

專案採用 Python 進行重寫，並計劃轉向 Rust，這樣的設計旨在提高執行效率和安全性。資料流方面，使用者可以透過 CLI 指令來執行各種操作，這樣的設計使得開發者能夠快速上手。選擇 Python 作為初期語言是因為其易於開發和測試，但未來轉向 Rust 將帶來更高的性能。這樣的選擇也意味著需要在開發過程中處理語言之間的轉換和兼容性問題。擴展性方面，Rust 的引入將使得專案在處理高並發和大規模數據時更具優勢。

## 技術深入分析

專案的核心技術機制是將 Claude Code 的功能重寫為 Python，並計劃轉向 Rust。這樣的設計使得開發者能夠在不違反版權的情況下，快速利用已有的架構進行擴展。效能方面，Python 的開發速度快，但在處理高並發時可能會出現瓶頸，未來轉向 Rust 將有助於解決這一問題。選擇 Python 是因為其生態系統成熟，開發者容易上手，但這也意味著在轉向 Rust 時需要處理語言之間的兼容性問題。技術風險方面，當前的開放問題數量較多，可能影響專案的穩定性。整合分析方面，專案與現有的開發工具鏈（如 GitHub Actions）相容性良好，能夠輕鬆融入現有的 CI/CD 流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了多個範例和指令；安裝過程相對順暢，但需要注意 Python 環境的配置；有良好的 getting started guide，適合新手快速上手；目前僅提供英文文件，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 快速的開發和測試流程，使用者可以快速上手。
> - 未來的 Rust 版本將提高性能和安全性。
> - 強調工具整合，適合需要多種工具的開發者。

> [!danger] 缺點
> - 目前的功能尚不完整，可能影響使用體驗。
> - 存在大量未解決的開放問題，社群支持尚不成熟。
> - Rust 版本尚在開發中，未來的穩定性和性能尚未確定。

> [!warning] 注意事項
> - 目前的 Python 版本尚未完全取代原有系統，功能可能不完整。
> - 存在大量未解決的開放問題（1855 個），可能影響使用體驗。
> - Rust 版本尚在開發中，未來的穩定性和性能尚未確定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，但缺乏對工具整合的支持，適合需要快速數據傳輸的場景。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供類似的功能，但未強調安全性和性能，適合小型專案的快速開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，使用 Go 語言實作，性能較高，但不支持工具整合。 | 如果你的專案主要需求是數據同步而非工具整合，則應選擇此工具。 | medium，因為需要重新設計數據流和同步邏輯。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供類似功能，但使用 JavaScript 實作，性能較低。 | 如果你的團隊已經在使用 JavaScript 並需要快速開發，則選擇此工具更為合適。 | low，因為可以直接使用現有的 JavaScript 代碼。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步，使用 Go 語言實作，性能較高，但不支持工具整合。 | 提供類似功能，但使用 JavaScript 實作，性能較低。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和同步邏輯。 | low，因為可以直接使用現有的 JavaScript 代碼。 |
> | 適用場景 | 主要場景 | 如果你的專案主要需求是數據同步而非工具整合，則應選擇此工具。 | 如果你的團隊已經在使用 JavaScript 並需要快速開發 |

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

- **[HIGH]** 目前的 Python 版本功能不完整，可能導致開發者無法使用某些功能
  - 解法：持續關注更新，並參與社群討論以獲取最新資訊
- [MEDIUM] 存在大量未解決的開放問題，可能影響使用體驗
  - 解法：在使用前檢查開放問題，並考慮使用穩定版本的替代方案
- [MEDIUM] Rust 版本尚在開發中，未來的穩定性和性能尚未確定
  - 解法：在使用時保持靈活，隨時準備切換到其他工具

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 開發專案 | 非常適合 | 提供快速開發和測試的環境，適合小型團隊的需求。 |
| 大型企業的核心系統開發 | 不適合 | 目前的功能尚不完整，無法滿足大型系統的穩定性需求。 |
| 個人開發者的實驗性專案 | 適合 | 提供靈活的開發環境，適合進行實驗和探索。 |
| 需要高性能的生產環境 | 不適合 | Rust 版本尚在開發中，無法提供穩定的性能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的開發環境，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料；依賴鏈的信任程度尚可，但需注意未審計的依賴項目。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/instructkr--claw-code");
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
> const me = dv.page("Repos/instructkr--claw-code");
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
| Forks | 65.1k |
| Open Issues | 1855 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 5.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/instructkr/claw-code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 88
>     "Python" : 12
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Yeachan-Heo](https://github.com/Yeachan-Heo) | 81 |

## 社群與生態

**社群活躍度**：社群活躍度高，經常有更新和討論。
**連結**：[文件](https://github.com/instructkr/claw-code) · [Discord](https://instruct.kr/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-01）
> **活躍天數** 1 天 · **最新 commit** feat: git integration, sandbox isolation, init command (merged from rcc branches)

## README 摘錄

> [!info]- 展開查看原文 README
> # Rewriting Project Claw Code
> 
>   ⭐ The fastest repo in history to surpass 50K stars, reaching the milestone in just 2 hours after publication ⭐
> 
>   
>     
>       
>       
>       
>     
>   
> 
>   
> 
>   Better Harness Tools, not merely storing the archive of leaked Claude Code
> 
>   
> 
> > [!IMPORTANT]
> > **Rust port is now in progress** on the [`dev/rust`](https://github.com/instructkr/claw-code/tree/dev/rust) branch and is expected to be merged into main today. The Rust implementation aims to deliver a faster, memory-safe harness runtime. Stay tuned — this will be the definitive version of the project.
> 
> > If you find this work useful, consider [sponsoring @instructkr on GitHub](https://github.com/sponsors/instructkr) to support continued open-source harness engineering research.
> 
> ---
> 
> ## Backstory
> 
> At 4 AM on March 31, 2026, I woke up to my phone blowing up with notifications. The Claude Code source had been exposed, and the entire dev community was in a frenzy. My girlfriend in Korea was genuinely worried I might face legal action from Anthropic just for having the code on my machine — so I did what any engineer would do under pressure: I sat down, ported the core features to Python from scratch, and pushed it before the sun came up.
> 
> The whole thing was orchestrated end-to-end using [oh-my-codex (OmX)](https://github.com/Yeachan-Heo/oh-my-codex) by [@bellman_ych](https://x.com/bellman_ych) — a workflow layer built on top of OpenAI's Codex ([@OpenAIDevs](https://x.com/OpenAIDevs)). I used `$team` mode for parallel code review and `$ralph` mode for persistent execution loops with architect-level verification. The entire porting session — from reading the original harness structure to producing a working Python tree with tests — was driven through OmX orchestration.
> 
> The result is a clean-room Python rewrite that captures the architectural patterns of Claude Code's agent harness without copying any proprietary source. I'm now actively collaborating with [@bellman_ych](https://x.com/bellman_ych) — the creator of OmX himself — to push this further. The basic Python foundation is already in place and functional, but we're just getting started. **Stay tuned — a much more capable version is on the way.**
> 
> https://github.com/instructkr/claw-code
> 
> ## The Creators Featured in Wall Street Journal For Avid Claude Code Fans
> 
> I've been deeply interested in **harness engineering** — studying how agent systems wire tools, orchestrate tasks, and manage runtime context. This isn't a sudden thing. The Wall Street Journal featured my work earlier this month, documenting how I've been one of the most active power users exploring these systems:
> 
> > AI startup worker Sigrid Jin, who attended the Seoul dinner, single-handedly used 25 billion of Claude Code tokens last year. At the time, usage limits were looser, allowing early enthusiasts to reach tens of billions of tokens at a very low cost.
> >
> > Despite his countless hours with Claude Code, Jin isn't faithful to any one AI lab. The tools available have different strengths and weaknesses, he said. Codex is better at reasoning, while Claude Code generates cleaner, more shareable code.
> >
> > Jin flew to San Francisco in February for Claude Code's first birthday party, where attendees waited in line to compare notes with Cherny. The crowd included a practicing cardiologist from Belgium who had built an app to help patients navigate care, and a California lawyer who made a tool for automating building permit approvals using Claude Code.
> >
> > "It was basically like a sharing party," Jin said. "There were lawyers, there were doctors, there were dentists. They did not have software engineering backgrounds."
> >
> > — *The Wall Street Journal*, March 21, 2026, [*"The Trillion Dollar Race to Automate Our Entire Lives"*](https://lnkd.in/gs9td3qd)
> 
> ---
> 
> ## Porting Status
> 
> The main source tree is now Python-first.
> 
> - `src/` contains the active Python porting workspace
> - `tests/` verifies the current Python workspace
> - the exposed snapshot is no longer part of the tracked repository state
> 
> The current Python workspace is not yet a complete one-to-one replacement for the original system, but the primary implementation surface is now Python.
> 
> ## Why this rewrite exists
> 
> I originally studied the exposed codebase to understand its harness, tool wiring, and agent workflow. After spending more time with the legal and ethical questions—and after reading the essay linked below—I did not want the exposed snapshot itself to remain the main tracked source tree.
> 
> This repository now focuses on Python porting work instead.
> 
> ## Repository Layout
> 
> ```text
> .
> ├── src/                                # Python porting workspace
> │   ├── __init__.py
> │   ├── commands.py
> │   ├── main.py
> │   ├── models.py
> │   ├── port_manifest.py
> │   ├── query_engine.py
> │   ├── task.py
> │   └── tools.py
> ├── tests/                              # Python verification
> ├── assets/omx/                         # OmX workflow screenshots
> ├── 2026-03-09-is-legal-the-same-as-legitimate-ai-reimplementation-and-the-erosion-of-copyleft.md
> └── README.md
> ```
> 
> ## Python Workspace Overview
> 
> The new Python `src/` tree currently provides:
> 
> - **`port_manifest.py`** — summarizes the current Python workspace structure
> - **`models.py`** — dataclasses for subsystems, modules, and backlog state
> - **`commands.py`** — Python-side command port metadata
> - **`tools.py`** — Python-side tool port metadata
> - **`query_engine.py`** — renders a Python porting summary from the active workspace
> - **`main.py`** — a CLI entrypoint for manifest and summary output
> 
> ## Quickstart
> 
> Render the Python porting summary:
> 
> ```bash
> python3 -m src.main summary
> ```
> 
> Print the current Python workspace manifest:
> 
> ```bash
> python3 -m src.main manifest
> ```
> 
> List the current Python modules:
> 
> ```bash
> python3 -m src.main subsystems --limit 16
> ```
> 
> Run verification:
> 
> ```bash
> python3 -m unittest discover -s tests -v
> ```
> 
> Run the parity audit against the local ignored archive (when present):
> 
> ```bash
> python3 -m src.main parity-audit
> ```
> 
> Inspect mirrored command/tool inventories:
> 
> ```bash
> python3 -m src.main commands --limit 10
> python3 -m src.main tools --limit 10
> ```
> 
> ## Current Parity Checkpoint
> 
> The port now mirrors the archived root-entry file surface, top-level subsystem names, and command/tool inventories much more closely than before. However, it is **not yet** a full runtime-equivalent replacement for the original TypeScript system; the Python tree still contains fewer executable runtime slices than the archived source.
> 
> ## Built with `oh-my-codex`
> 
> The restructuring and documentation work on this repository was AI-assisted and orchestrated with Yeachan Heo's [oh-my-codex (OmX)](https://github.com/Yeachan-Heo/oh-my-codex), layered on top of Codex.
> 
> - **`$team` mode:** used for coordinated parallel review and architectural feedback
> - **`$ralph` mode:** used for persistent execution, verification, and completion discipline
> - **Codex-driven workflow:** used to turn the main `src/` tree into a Python-first porting workspace
> 
> ### OmX workflow screenshots
> 
> *Ralph/team orchestration view while the README and essay context were being reviewed in terminal panes.*
> 
> *Split-pane review and verification flow during the final README wording pass.*
> 
> ## Community
> 
>   
> 
> Join the [**instructkr Discord**](https://instruct.kr/) — the best Korean language model community. Come chat about LLMs, harness engineering, agent workflows, and everything in between.
> 
> [](https://instruct.kr/)
> 
> ## Star History
> 
> See the chart at the top of this README.
> 
> ## Ownership / Affiliation Disclaimer
> 
> - This repository does **not** claim ownership of the original Claude Code source material.
> - This repository is **not affiliated with, endorsed by, or maintained by Anthropic**.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[工具整合]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--opencli|jackwener/opencli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/instructkr/claw-code)

## 相關收錄

> [!note]- 直接競品（同子分類：工具整合）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "工具整合" AND file.name != "instructkr--claw-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "instructkr--claw-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "instructkr--claw-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "instructkr--claw-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化測試","工具整合"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "instructkr--claw-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/instructkr--claw-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "instructkr--claw-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "instructkr" AND file.name != "instructkr--claw-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/instructkr--claw-code");
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
> const me = dv.page("Repos/instructkr--claw-code");
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
> const me = dv.page("Repos/instructkr--claw-code");
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
> const me = dv.page("Repos/instructkr--claw-code");
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
> const me = dv.page("Repos/instructkr--claw-code");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-01|2026-04-01]] — 首次收錄，63.6k stars
