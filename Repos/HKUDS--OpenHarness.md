---
repo: HKUDS/OpenHarness
url: https://github.com/HKUDS/OpenHarness
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenHarness: Open Agent Harness with a Built-in Personal Agent--Ohmo!\""
homepage: ""
stars: 11300
stars_per_day: 452
forks: 1908
open_issues: 22
created: 2026-04-01
pushed_at: 2026-04-25
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "AI 工具"
release_tag: "v0.1.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供一個開源的 AI 代理架構，讓用戶能夠輕鬆整合和使用多種 AI 工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 80
repo_size_kb: 10800
readme_length: 10000
bus_factor: 1
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7142,2026-04-08:7164,2026-04-09:7764,2026-04-10:8224,2026-04-11:8613,2026-04-12:8807,2026-04-13:9045,2026-04-14:9341,2026-04-15:9616,2026-04-16:9857,2026-04-17:10038,2026-04-18:10213,2026-04-19:10346,2026-04-20:10451,2026-04-21:10594,2026-04-22:10732,2026-04-23:10904,2026-04-24:11058,2026-04-25:11141,2026-04-26:11213,2026-04-27:11300"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "OpenHarness"
  - "HKUDS/OpenHarness"
  - "提供一個開源的 AI 代理架構，讓用戶能夠輕鬆整合和使用多種 AI 工具。"
---

# OpenHarness

**11.3k** stars · **452** stars/天 · 建立 25 天前 · Python · MIT

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
> 提供一個開源的 AI 代理架構，讓用戶能夠輕鬆整合和使用多種 AI 工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (452 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在團隊中整合多種 AI 工具的開發者和產品經理。
> **一句話重點** OpenHarness 提供了一個靈活且可擴展的 AI 代理架構，讓開發者能夠輕鬆整合多種 AI 工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "HKUDS--OpenHarness" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的 AI 代理架構，值得投入。

> [!abstract] 核心創新
> 提供一個開源的 AI 代理架構，支持多種 AI 工具的整合和協作。

## 專案簡介

OpenHarness 是一個開源的 AI 代理架構，旨在為用戶提供一個可擴展的環境來整合多種 AI 工具和服務。用戶可以透過簡單的 CLI 指令 `oh` 啟動 OpenHarness，並使用 `ohmo` 來設置個人 AI 代理，支持在 Slack、Telegram 等平台上運行。這個架構的核心在於其多代理協調能力，能夠實現工具的串聯使用、技能加載和上下文記憶等功能，讓 AI 代理能夠在長時間的會話中持續工作。技術上，OpenHarness 使用 Python 實現，並依賴多個庫如 `anthropic` 和 `openai` 來支持不同的 AI 模型，這使得它能夠靈活地與各種 API 進行交互。

與其他工具相比，例如 `0xGF/boneyard` 和 `Einsia/OpenChronicle`，OpenHarness 提供了更為完整的代理架構，並且支持多種 API 的兼容性，讓用戶能夠根據需求選擇合適的模型。使用者在使用過程中可能會遇到配置問題，特別是在 API 鑑權和環境設置上，但社群的活躍度和文檔的完整性能夠幫助解決這些問題。這個專案目前處於 beta 階段，適合對 AI 代理開發有興趣的開發者，尤其是那些希望在現有工具中整合 AI 功能的團隊。預計未來會持續增強對新模型的支持和擴展功能。

**技術棧**：`Python 3.10` · `TypeScript` · `Docker`

## 重點功能

- 多代理協調 — 支持同時運行多個 AI 代理，實現任務分配和協作。
- 即時工具調用 — 提供流式工具調用循環，支持 API 重試和並行執行。
- 上下文記憶 — 自動壓縮上下文，支持持久記憶和會話恢復。
- 靈活的插件生態系統 — 支持自定義插件和技能加載，擴展功能。
- 多種 API 兼容性 — 支持多個 AI 服務提供商的 API，無需額外的 API 鑰匙。

## 快速開始

1. 安裝 OpenHarness
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
```
2. 初始化 ohmo 代理
```bash
ohmo init
```
3. 啟動 ohmo 代理
```bash
ohmo gateway start
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 OpenHarness",
  "ohmo init             # 初始化 ~/.ohmo 工作區",
  "ohmo config           # 配置渠道和提供者",
  "ohmo gateway start    # 啟動網關 — ohmo 現在在你的聊天應用中運行"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 11300 stars（452/天），forks 1908（16.9%），顯示出強勁的社群關注度。這個專案的主要貢獻者來自於多個活躍的開源社群，過去在 AI 和開發工具領域有豐富的經驗。它解決了現有 AI 工具整合的複雜性問題，讓用戶能夠在一個統一的框架下使用多種 AI 服務。最近的推廣活動和社群討論也促進了其曝光率，吸引了開發者的注意。這個工具的出現正好填補了市場上對於靈活且可擴展的 AI 代理架構的需求，尤其是在多種 API 的整合上。forks/stars 比率為 16.9%，顯示出許多開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在團隊中整合多種 AI 工具的開發者和產品經理。

> [!example] 使用場景
> - 後端工程師用它來整合多種 AI 服務於現有的應用中，因為它支持多種 API 並且易於配置。
> - AI 研究者用它來測試不同的 AI 模型和工具，因為它提供了靈活的插件生態系統和多代理協調能力。
> - 產品經理用它來快速生成和測試產品文檔，因為它能夠在 Slack 等平台上直接與 AI 代理互動。

## 架構分析

OpenHarness 採用模組化的設計，將核心代理功能與具體的 AI 工具解耦。這樣的設計使得用戶可以根據需求選擇不同的 AI 服務，並通過統一的接口進行交互。資料流方面，OpenHarness 透過 API 調用和插件系統來實現工具的串聯，並支持上下文記憶的持久化。選擇這種架構的代價在於需要用戶對 API 的配置有一定的了解，但這也使得系統的擴展性和靈活性大大提高。未來擴展性方面，隨著更多 AI 服務的出現，OpenHarness 可以輕鬆地通過插件系統進行擴展。

## 技術深入分析

OpenHarness 的核心技術機制在於其模組化的設計，使用 Python 作為主要開發語言，並依賴多個庫來支持不同的 AI 模型。這使得它能夠靈活地與各種 API 進行交互，並提供即時的工具調用和上下文記憶。效能方面，OpenHarness 能夠處理多個並行的 API 調用，並支持長時間的會話，這對於需要持續交互的應用場景非常重要。選擇 Python 作為開發語言的好處在於其豐富的生態系統和社群支持，但也可能帶來性能上的瓶頸。技術風險方面，隨著使用者數量的增加，可能會出現 API 鑑權和配置的問題，這需要持續的維護和更新。整合方面，OpenHarness 與主流的開發工具鏈（如 GitHub、Slack）相容性良好，能夠輕鬆嵌入到現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝和使用範例，安裝過程相對順暢，沒有明顯的坑。文檔提供了多語言支持，對於新手來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 靈活的插件生態系統，支持多種 AI 工具的整合。
> - 簡單的 CLI 操作，降低了使用門檻。
> - 強大的上下文記憶功能，支持長時間的會話。
> - 活躍的社群支持，能夠快速解決問題。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定性。
> - 需要有效的 AI 服務訂閱，增加了使用成本。
> - 配置 API 時可能會遇到鑑權問題，對新手不友好。
> - 功能尚未完全成熟，缺乏某些高級特性。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要有效的 AI 服務訂閱（如 Claude Code 或 Codex）
> - 在配置 API 時可能會遇到鑑權問題
> - 目前仍在 beta 階段，可能會有不穩定的情況

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 代理功能，但缺乏 OpenHarness 的多代理協調能力和靈活的插件生態系統。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | 專注於特定的 AI 應用場景，而 OpenHarness 提供更廣泛的工具整合和多種 API 支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用 Rust 實作，記憶體使用量較少，但生態系統不如 Python 豐富。 | 如果你的團隊需要高效能且資源有限的解決方案，且不依賴於 Python 生態系統。 | medium，因為需要重寫部分代碼以適應 Rust 語言特性。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | 專注於特定的 AI 應用場景，功能較為單一。 | 如果你的需求非常專注於某一特定的 AI 應用，而不需要多種工具的整合。 | low，因為功能相對簡單，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenHarness** | **boneyard** | **OpenChronicle** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體使用量較少，但生態系統不如 Python 豐富。 | 專注於特定的 AI 應用場景，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應 Rust 語言特性。 | low，因為功能相對簡單，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效能且資源有限的解決方案，且不依賴於 Py | 如果你的需求非常專注於某一特定的 AI 應用，而不需要多種工 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境中，PowerShell 的某些命令可能會因為權限問題而失敗
  - 解法：確保以管理員身份運行 PowerShell
- [MEDIUM] API 鑑權配置不當可能導致無法連接到 AI 服務
  - 解法：仔細檢查 API 鑰匙和配置文件
- [MEDIUM] 在長時間運行的會話中，可能會遇到上下文丟失的問題
  - 解法：定期保存會話狀態以防丟失

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊希望整合 AI 助手進行日常任務 | 非常適合 | 提供了簡單的設置流程和多種工具的支持，適合小型團隊使用。 |
| 大型企業需要穩定的 AI 代理解決方案 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| AI 研究者希望測試不同的 AI 模型 | 適合 | 支持多種 API 的整合，方便進行實驗。 |
| 需要快速生成產品文檔的產品經理 | 非常適合 | 能夠直接在 Slack 等平台上與 AI 代理互動，提升效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的 AI 代理架構，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 鑰匙進行服務訪問，依賴鏈中的庫有良好的安全性評估。

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
| Open Issues | 22 |
| Issue 解決率 | 80% (88 closed) |
| 最後推送 | 2026-04-25 |
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
> | [@tjb-tech](https://github.com/tjb-tech) | 196 |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/HKUDS/OpenHarness/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-22 ~ 2026-04-25）
> **活躍天數** 4 天 · **最新 commit** fix(plugins): defer tool imports for disabled plugins

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/HKUDS/OpenHarness/issues/40) | 是否会支持ACP协议？ `enhancement` | 1 | 0 |
> | [#18](https://github.com/HKUDS/OpenHarness/issues/18) | [Discussion] Run-level evidence layer: structured archive fo | 1 | 1 |
> | [#199](https://github.com/HKUDS/OpenHarness/issues/199) | Compaction + context: llama.cpp errors, n_ctx, and multimoda | 0 | 1 |

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

相關概念：[[Agent 框架]] · [[API 設計]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/HKUDS/OpenHarness)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "HKUDS--OpenHarness"
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
> const concepts = ["Agent 框架","API 設計","自動化測試"];
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
