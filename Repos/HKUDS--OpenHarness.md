---
repo: HKUDS/OpenHarness
url: https://github.com/HKUDS/OpenHarness
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenHarness: Open Agent Harness with a Built-in Personal Agent--Ohmo!\""
homepage: ""
stars: 11058
stars_per_day: 503
forks: 1874
open_issues: 17
created: 2026-04-01
pushed_at: 2026-04-23
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "AI 代理"
release_tag: "v0.1.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供輕量級的代理基礎設施，讓 AI 代理能夠長時間有效運作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 83
repo_size_kb: 10775
readme_length: 10000
bus_factor: 1
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7142,2026-04-08:7164,2026-04-09:7764,2026-04-10:8224,2026-04-11:8613,2026-04-12:8807,2026-04-13:9045,2026-04-14:9341,2026-04-15:9616,2026-04-16:9857,2026-04-17:10038,2026-04-18:10213,2026-04-19:10346,2026-04-20:10451,2026-04-21:10594,2026-04-22:10732,2026-04-23:10904,2026-04-24:11058"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "OpenHarness"
  - "HKUDS/OpenHarness"
  - "提供輕量級的代理基礎設施，讓 AI 代理能夠長時間有效運作。"
---

# OpenHarness

**11.1k** stars · **503** stars/天 · 建立 22 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HKUDS--OpenHarness");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 提供輕量級的代理基礎設施，讓 AI 代理能夠長時間有效運作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (503 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在多平台上運行 AI 代理的開發者，特別是對於需要長時間運行的任務。
> **一句話重點** OpenHarness 不僅是一個工具，而是一個完整的框架，讓開發者能夠輕鬆構建和管理 AI 代理。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理" && p.file.name !== "HKUDS--OpenHarness" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、10 小時整合，得到高效的 AI 代理管理功能，值得投入。

> [!abstract] 核心創新
> OpenHarness 提供了一個完整的代理基礎設施，讓 AI 代理能夠長時間有效運作。

## 專案簡介

OpenHarness 是一個開源的 Python 實作，旨在提供一個完整的代理基礎設施，讓開發者能夠輕鬆整合和管理多個 AI 代理。使用者可以透過 `oh` 指令啟動 OpenHarness，並使用 `ohmo` 作為個人 AI 代理，這個代理可以在 Slack、Telegram 等平台上運行，並能夠自動執行任務，如分支、編碼、測試和開 PR。這個設計的核心在於提供一個簡單的命令行介面，讓開發者能夠快速上手，並利用現有的 Claude Code 或 Codex 訂閱，而不需要額外的 API 金鑰。技術上，OpenHarness 使用了多種依賴，包括 `anthropic` 和 `openai`，這使得它能夠支持多種 API 供應商，並且具備良好的擴展性。

與其他類似工具相比，如 `OpenClaw` 和 `nanobot`，OpenHarness 提供了更為完整的代理協調功能，並支援多種工具的並行執行。實際使用中，使用者可以透過 `oh --dry-run` 來預覽執行結果，這在開發過程中非常有用。這個專案的社群活躍度也相當高，解決率達到 83%。目前仍在 alpha 階段，但已經具備了相當的功能，適合對 AI 代理開發有興趣的開發者使用。

**技術棧**：`Python 3.10` · `TypeScript` · `Docker`

## 重點功能

- 多代理協調 — 支持子代理生成和任務管理，讓多個代理能夠協同工作。
- 即時工具調用 — 提供流式工具調用循環，並支持 API 重試和並行執行。
- 持久記憶 — 具備上下文壓縮和持久記憶功能，能夠在多日會話中保持狀態。
- 豐富的工具集 — 提供 43 種工具，包括文件、Shell 和網路工具，並支持插件生態系統。
- 安全治理 — 提供多層次的權限模式和互動式批准對話框，確保操作的安全性。

## 快速開始

1. 安裝 OpenHarness
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
```
2. 啟動 OpenHarness
```bash
oh
```
3. 設置 ohmo 代理
```bash
ohmo init
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 OpenHarness",
  "指令": "oh --dry-run -p \"Review this bug fix and grep for failing tests\"",
  "預期輸出": "預覽一個提示而不執行模型或工具的結果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 22 天就累積 11058 stars（503/天），forks 1874（16.9%），這顯示出極高的使用興趣。作者團隊由多位活躍的開發者組成，過去有多個成功的開源專案。這個專案解決了在多平台上整合 AI 代理的需求，之前的方案往往缺乏靈活性和擴展性。近期的推廣活動和社群討論也促進了其知名度的提升。高比例的 forks/stars 代表許多開發者在實際修改和使用這個工具，顯示出其實用性和潛力。

## 適合誰使用

**目標受眾**：希望在多平台上運行 AI 代理的開發者，特別是對於需要長時間運行的任務。

> [!example] 使用場景
> - 後端工程師用它來在 Slack 中自動執行代碼測試，因為這樣可以節省手動測試的時間，並提高效率。
> - 產品經理用它來在 Discord 中管理多個 AI 代理的任務分配，因為它支持多代理協調，能夠簡化工作流程。
> - 開發者用它來快速整合不同的 AI 模型，因為它支持多種 API 供應商，讓模型切換變得方便。

## 架構分析

OpenHarness 採用模組化架構，將核心功能分為多個模組，這樣的設計使得擴展和維護變得更加容易。每個模組負責不同的功能，如工具調用、上下文管理和安全治理，這樣可以確保系統的穩定性和可擴展性。資料流方面，使用者的請求會經過一系列的處理，包括權限檢查、工具調用和結果返回。

這樣的設計使得每個功能都能獨立測試和優化。選擇 Python 作為主要語言，使得開發者能夠快速上手，但也帶來了性能上的挑戰，特別是在高併發的情況下。整體架構的擴展性良好，但在處理大量請求時可能會出現瓶頸，特別是當多個代理同時運行時。

## 技術深入分析

OpenHarness 的核心技術在於其模組化設計，這使得不同功能可以獨立開發和維護。它使用了多種依賴，如 `anthropic` 和 `openai`，這使得它能夠支持多種 API 供應商。效能方面，OpenHarness 能夠處理多個並行請求，但在高負載情況下可能會出現性能瓶頸。選擇 Python 作為主要語言，雖然開發速度快，但在性能上可能不如其他語言如 Go 或 Rust。設計上，OpenHarness 也考慮到了安全性，提供了多層次的權限控制和互動式批准機制，這在處理敏感資料時尤為重要。整合方面，OpenHarness 能夠輕鬆與現有的 CI/CD 流程結合，並且支持多種 IDE 的插件，這使得開發者能夠在熟悉的環境中工作。整體而言，OpenHarness 提供了一個靈活且強大的平台，適合對 AI 代理開發有興趣的團隊使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多個範例和安裝步驟。安裝過程相對順暢，但需要注意 Python 版本的要求。文件中有良好的入門指南，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 提供完整的代理基礎設施，支持多種 AI 模型。
> - 具備良好的擴展性和模組化設計，方便開發者自定義功能。
> - 社群活躍，問題解決率高，能夠快速獲得支持。

> [!danger] 缺點
> - 仍在 alpha 階段，API 可能會變動，穩定性尚待提高。
> - 需要一定的學習曲線，特別是對於新手使用者。
> - 在某些平台上可能會遇到性能問題。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要有效的 Claude Code 或 Codex 訂閱。
> - 在某些平台上可能會遇到性能問題，特別是在高負載情況下。
> - 目前仍在 alpha 階段，API 可能會變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 提供了類似的代理功能，但不如 OpenHarness 在多代理協調方面強大，適合較簡單的任務。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | nanobot 更專注於單一任務的自動化，而 OpenHarness 提供了更全面的代理管理和協調能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 提供了基本的代理功能，但不如 OpenHarness 在多代理協調方面強大。 | 如果你的需求較簡單，只需要單一代理的功能，OpenClaw 會是一個不錯的選擇。 | medium，因為需要重新設置代理的配置和環境。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | nanobot 更專注於單一任務的自動化，而 OpenHarness 提供了更全面的代理管理和協調能力。 | 如果你只需要快速自動化某個特定任務，nanobot 可能更合適。 | low，因為功能相對簡單，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenHarness** | **OpenClaw** | **nanobot** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 提供了基本的代理功能，但不如 OpenHarness 在多代理協調方面強大。 | nanobot 更專注於單一任務的自動化，而 OpenHarness 提供了更全面的代理管理和協調能力。 |
> | 遷移成本 | - | medium，因為需要重新設置代理的配置和環境。 | low，因為功能相對簡單，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的需求較簡單，只需要單一代理的功能，OpenClaw  | 如果你只需要快速自動化某個特定任務，nanobot 可能更合 |

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

- [MEDIUM] 在 PowerShell 中使用 backspace 鍵時出現問題，無法正常刪除文字。
  - 解法：使用其他終端或更新 PowerShell 版本。
- **[HIGH]** 某些 API 供應商的兼容性問題，可能導致功能無法正常運作。
  - 解法：檢查 API 設定，確保使用正確的端點。
- **[HIGH]** 在高負載情況下，性能可能下降，導致延遲。
  - 解法：考慮調整代理的數量或優化請求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供完整的代理管理功能，能夠簡化開發流程。 |
| 大型企業的 AI 代理系統 | 普通 | 雖然功能強大，但仍在 alpha 階段，穩定性不足。 |
| 個人開發者的 AI 實驗專案 | 非常適合 | 開源且易於上手，適合快速實驗和開發。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍在 alpha 階段，可能會有不穩定的情況。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到高效的 AI 代理管理功能，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈中有部分未審計的依賴，但整體風險可控。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
| Forks | 1.9k |
| Open Issues | 17 |
| Issue 解決率 | 83% (86 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 10.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/OpenHarness) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "TypeScript" : 5
>     "Shell" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 193 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 32 |
> | [@glitch-ux](https://github.com/glitch-ux) | 13 |
> | [@yl-jiang](https://github.com/yl-jiang) | 9 |
> | [@siaochuan](https://github.com/siaochuan) | 9 |

**最新版本**：v0.1.7 — v0.1.7 — TUI Polish & Safer Install (2026-04-18)

> [!info]- Release Notes
> Highlights for 0.1.7
> 
> - Safer install flow: `scripts/install.sh` now links `oh`, `ohmo`, and `openharness` into `~/.local/bin` instead of prepending the virtualenv `bin` directory to `PATH`, which avoids clobbering Conda-managed shells.
> - Better React TUI input: `Shift+Enter` now inserts a newline while plain `Enter` still submits.
> - Quieter busy-state animation: the extra pseudo-animation line was removed, and Windows terminals now use conservative ASCII spinner frames to reduce flashing.
> - PyPI package published: `openharness-ai==0.1.7`.
> 
> 
> ## What's Changed
> * feat(tui): pair tool-call and tool-result rows for cleaner transcript by @yl-jiang in https://github.com/HKUDS/OpenHarness/pull/111
> * fix(auth): cache keyring probe and rename misleading encrypt/decrypt by @glitch-ux in https://github.com/HKUDS/OpenHarness/pull/106
> * feat(providers): add built-in Google Gemini provider profile by @glitch-ux in https://github.com/HKUDS/OpenHarness/pull/105
> * fix: regenerate system prompt on checkpoint restore by @JiangweiYe76 in https://github.com/HKUDS/OpenHarness/pull/104
> * fix(tui): keep busy spinner active throughout agent turn by @yl-jiang in https://github.com/HKUDS/OpenHarness/pull/116
> * fix(config): strip ANSI escape sequences from model names by @jiakeboge in https://github.com/HKUDS/OpenHarness/pull/114
> * fix(ui): show effective runtime model in header by @siaochuan in https://github.com/HKUDS/OpenHarness/pull/95
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和問題解決。
**連結**：[文件](https://github.com/HKUDS/OpenHarness)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-23）
> **活躍天數** 4 天 · **最新 commit** fix(tui): complete slash commands without cursor drift (#185)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/HKUDS/OpenHarness/issues/40) | 是否会支持ACP协议？ `enhancement` | 1 | 0 |
> | [#18](https://github.com/HKUDS/OpenHarness/issues/18) | [Discussion] Run-level evidence layer: structured archive fo | 1 | 1 |
> | [#190](https://github.com/HKUDS/OpenHarness/issues/190) | [QA] Why I can't using backspace on powershell when running  | 0 | 0 |
> | [#102](https://github.com/HKUDS/OpenHarness/issues/102) | 建立 OpenClaw 内部后台任务数据模型 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp;&nbsp;
>   
>   
>   oh — OpenHarness &amp; ohmo
> 
>   English ·
>   简体中文
> 
> **OpenHarness** delivers core lightweight agent infrastructure: tool-use, skills, memory, and multi-agent coordination.
> 
> **ohmo** is a personal AI agent built on OpenHarness — not another chatbot, but an assistant that actually works for you over long sessions. Chat with ohmo in Feishu / Slack / Telegram / Discord, and it forks branches, writes code, runs tests, and opens PRs on its own. ohmo runs on your existing Claude Code or Codex subscription — no extra API key needed.
> 
> **Join the community**: contribute **Harness** for open agent development.
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
>   
>   
>   
>   
> 
> One Command (**oh**) to Launch **OpenHarness** and Unlock All Agent Harnesses. 
> 
> Supports CLI agent integration including OpenClaw, nanobot, Cursor, and more.
> 
>   
> 
> ---
> 
> ## 🚀 Quick Start
> 
> 
> ### 1. Install
> 
> #### Linux / macOS / WSL
> 
> ```bash
> 
> # One-click install
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
> 
> 
> # One-click install (PowerShell)
> iex (Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.ps1')
> 
> 
> # On Windows PowerShell, use: openh setup
> ```
> 
> Supports **Claude / OpenAI / Copilot / Codex / Moonshot(Kimi) / GLM / MiniMax** and any compatible endpoint.
> 
> 
> # Preview an interactive session setup
> oh --dry-run
> 
> 
> # Development setup
> git clone https://github.com/HKUDS/OpenHarness.git
> cd OpenHarness
> uv sync --extra dev
> uv run pytest -q  # Verify everything works
> ```
> 
> Useful contributor entry points:
> 
> - [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup, checks, and PR expectations
> - [`CHANGELOG.md`](CHANGELOG.md) for user-visible changes
> - [`docs/SHOWCASE.md`](docs/SHOWCASE.md) for real-world usage patterns worth documenting
> 
> ---
> 
> 
> ## ✨ OpenHarness's Key Harness Features
> 
> 🔄 Agent Loop
> 
>   
> 
> • Streaming Tool-Call Cycle
> • API Retry with Exponential Backoff
> • Parallel Tool Execution
> • Token Counting & Cost Tracking
> 
> 🔧 Harness Toolkit
> 
>   
> 
> • 43 Tools (File, Shell, Search, Web, MCP)
> • On-Demand Skill Loading (.md)
> • Plugin Ecosystem (Skills + Hooks + Agents)
> • Compatible with anthropics/skills & plugins
> 
> 🧠 Context & Memory
> 
>   
> 
> • CLAUDE.md Discovery & Injection
> • Context Compression (Auto-Compact)
> • MEMORY.md Persistent Memory
> • Session Resume & History
> 
> 🛡️ Governance
> 
>   
> 
> • Multi-Level Permission Modes
> • Path-Level & Command Rules
> • PreToolUse / PostToolUse Hooks
> • Interactive Approval Dialogs
> 
> 🤝 Swarm Coordination
> 
>   
> 
> • Subagent Spawning & Delegation
> • Team Registry & Task Management
> • Background Task Lifecycle
> • ClawTeam Integration (Roadmap)
> 
> ---
> 
> 
> ## ✨ Features
> 
> 
> ### 2. Configure
> 
> ```bash
> oh setup    # interactive wizard — pick a provider, authenticate, done
> 
> ### Compatible API Families
> 
> #### Anthropic-Compatible API
> 
> Typical examples:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **Claude official** | `https://api.anthropic.com` | `claude-sonnet-4-6`, `claude-opus-4-6` |
> | **Moonshot / Kimi** | `https://api.moonshot.cn/anthropic` | `kimi-k2.5` |
> | **Zhipu / GLM** | custom Anthropic-compatible endpoint | `glm-4.5` |
> | **MiniMax** | custom Anthropic-compatible endpoint | `minimax-m1` |
> 
> #### OpenAI-Compatible API
> 
> Any provider implementing the OpenAI `/v1/chat/completions` style API works:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **OpenAI** | `https://api.openai.com/v1` | `gpt-5.4`, `gpt-4.1` |
> | **OpenRouter** | `https://openrouter.ai/api/v1` | provider-specific |
> | **Alibaba DashScope** | `https://dashscope.aliyuncs.com/compatible-mode/v1` | `qwen3.5-flash`, `qwen3-max`, `deepseek-r1` |
> | **DeepSeek** | `https://api.deepseek.com` | `deepseek-chat`, `deepseek-reasoner` |
> | **GitHub Models** | `https://models.inference.ai.azure.com` | `gpt-4o`, `Meta-Llama-3.1-405B-Instruct` |
> | **SiliconFlow** | `https://api.siliconflow.cn/v1` | `deepseek-ai/DeepSeek-V3` |
> | **Google Gemini** | `https://generativelanguage.googleapis.com/v1beta/openai` | `gemini-2.5-flash`, `gemini-2.5-pro` |
> | **Groq** | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
> | **Ollama (local)** | `http://localhost:11434/v1` | any local model |
> 
> 
> ### GitHub Copilot Format (`--api-format copilot`)
> 
> Use your existing GitHub Copilot subscription as the LLM backend. Authentication uses GitHub's OAuth device flow — no API keys needed.
> 
> ```bash
> 
> # Configure gateway channels and pick a provider profile
> ohmo config
> 
> 
> ## 🤔 What is an Agent Harness?
> 
> An **Agent Harness** is the complete infrastructure that wraps around an LLM to make it a functional agent. The model provides intelligence; the harness provides **hands, eyes, memory, and safety boundaries**.
> 
>   
> 
> OpenHarness is an open-source Python implementation designed for **researchers, builders, and the community**:
> 
> - **Understand** how production AI agents work under the hood
> - **Experiment** with cutting-edge tools, skills, and agent coordination patterns
> - **Extend** the harness with custom plugins, providers, and domain knowledge
> - **Build** specialized agents on top of proven architecture
> 
> ---
> 
> 
> ## 📰 What's New
> 
> - **Unreleased** 🔍 **Dry-run safe preview**:
>   - `oh --dry-run` previews resolved runtime settings, auth state, skills, commands, tools, and configured MCP servers without executing the model, tools, or subagents.
>   - Dry-run now reports a `ready` / `warning` / `blocked` readiness verdict with concrete next-step suggestions such as fixing auth, fixing MCP config, or running the prompt directly.
>   - Prompt previews include likely matching skills and tools, while slash-command previews show whether the command is mostly read-only or stateful.
> - **2026-04-18** ⚙️ **v0.1.7** — Packaging & TUI polish:
>   - Install script now links `oh`, `ohmo`, and `openharness` into `~/.local/bin` instead of prepending the virtualenv `bin` directory to `PATH`, which avoids clobbering Conda-managed shells.
>   - React TUI now supports `Shift+Enter` to insert a newline while keeping plain `Enter` as submit.
>   - Busy-state animation in the React TUI is quieter and less error-prone on Windows terminals, with conservative spinner frames and reduced flashing.
> - **2026-04-10** 🧠 **v0.1.6** — Auto-Compaction & Markdown TUI:
>   - Auto-Compaction preserves task state and channel logs across context compression — agents can run multi-day sessions without manual compact/clear
>   - Subprocess teammates run in headless worker mode; agent team creation stabilized
>   - Assistant messages now render full Markdown in the React TUI
>   - `ohmo` gains channel slash commands and multimodal attachment support
> - **2026-04-08** 🔌 **v0.1.5** — MCP HTTP transport & Swarm polling:
>   - MCP protocol adds HTTP transport, auto-reconnect on disconnect, and tool-only server compatibility
>   - JSON Schema types inferred for MCP tool inputs — no manual type mapping needed
>   - `ohmo` channels support file attachments and multimodal gateway messages
>   - Subprocess agents are now pollable in real runs; permission modals serialized to prevent input swallowing
> - **2026-04-08** 🌙 **v0.1.4** — Multi-provider auth & Moonshot/Kimi:
>   - Native Moonshot/Kimi provider with `reasoning_content` support for thinking models
>   - Auth overhaul: fixed provider-switching key mismatch, `OPENAI_BASE_URL` env override, profile-scoped credential priority
>   - MCP gracefully handles disconnected servers in `call_tool` / `read_resource`
>   - Security: built-in sensitive-path protection in PermissionChecker, hardened `web_fetch` URL validation
>   - Stability: EIO crash recovery in Ink TUI, `--debug` logging, Windows cmd flash fix
> - **2026-04-06** 🚀 **v0.1.2** — Unified setup flows and `ohmo` personal-agent app:
>   - `oh setup` now guides provider selection as workflows instead of exposing raw auth/provider internals
>   - Compatible API setup is now profile-scoped, so Anthropic/OpenAI-compatible endpoints can keep separate keys
>   - `ohmo` ships as a packaged app with `~/.ohmo` workspace

## 延伸閱讀

相關概念：[[Agent 框架]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/HKUDS/OpenHarness)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--OpenHarness" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--OpenHarness" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--OpenHarness" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 首次收錄，7.1k stars
