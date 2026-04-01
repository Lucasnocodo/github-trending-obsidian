---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: Apache-2.0
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 25643
stars_per_day: 1115
forks: 2298
open_issues: 71
created: 2026-03-08
pushed_at: 2026-03-30
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將所有軟體轉變為代理原生的 CLI 工具，讓 AI 更輕鬆地與各種應用互動。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 23
repo_size_kb: 17378
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381,2026-03-11:3472,2026-03-13:8931,2026-03-13:8970,2026-03-14:11721,2026-03-14:11739,2026-03-15:13789,2026-03-15:13796,2026-03-16:15263,2026-03-17:16691,2026-03-18:17798,2026-03-19:18612,2026-03-20:19370,2026-03-21:19980,2026-03-22:20536,2026-03-23:21234,2026-03-24:21928,2026-03-25:22505,2026-03-26:23083,2026-03-27:23598,2026-03-28:23940,2026-03-29:24338,2026-03-30:24723,2026-03-31:25202,2026-04-01:25643"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉變為代理原生的 CLI 工具，讓 AI 更輕鬆地與各種應用互動。"
---

# CLI-Anything

**25.6k** stars · **1.1k** stars/天 · 建立 23 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/HKUDS--CLI-Anything");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 將所有軟體轉變為代理原生的 CLI 工具，讓 AI 更輕鬆地與各種應用互動。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.1k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多種應用整合為統一 CLI 的開發者，尤其是在 AI 代理開發領域。
> **一句話重點** CLI-Anything 的設計讓 AI 代理能夠更輕鬆地與各種應用互動，開啟了自動化的新可能性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "HKUDS--CLI-Anything" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到快速生成 CLI 的能力，值得一試。

> [!abstract] 核心創新
> CLI-Anything 將所有軟體轉變為 AI 代理原生的 CLI 工具，簡化了與各種應用的互動。

## 專案簡介

CLI-Anything 的核心機制在於將各種軟體轉變為 AI 代理可以直接操作的 CLI 工具。用戶只需透過簡單的命令，如 `/cli-anything:cli-anything ./gimp`，便能生成針對特定應用的 CLI，這樣的設計使得 AI 代理能夠更有效率地執行任務，並且減少了人為操作的需求。這個工具的設計理念是將分散的 API 整合為一個統一的 CLI，讓使用者不再需要面對繁雜的 API 調用，而是透過簡單的命令來達成複雜的操作。技術上，CLI-Anything 使用 Python 和 JavaScript 實現，並且支援多種 AI 編碼代理，如 Claude Code 和 OpenClaw，這樣的選擇使得它能夠跨平台運行，並且不需要額外的依賴。與其他類似工具相比，CLI-Anything 的獨特之處在於它的代理優先設計，這意味著它的輸出是結構化的 JSON，這樣可以簡化 AI 代理的解析過程。

相較於傳統的 API 調用，這種方法能夠提供更高的可預測性和可靠性。使用者在實際操作中可能會遇到一些問題，例如在 Windows 環境下需要安裝 Git for Windows 以支持 bash 命令，這可能會對某些用戶造成困擾。這個專案目前仍在快速發展中，未來可能會增加更多的 AI 編碼代理支援。對於小型團隊或個人開發者來說，這是一個非常值得嘗試的工具，尤其是在需要快速整合多個應用時。若未來能夠進一步擴展功能和穩定性，將會吸引更多的開發者使用。

**技術棧**：`Python 3.10+` · `JavaScript` · `Shell` · `PowerShell`

## 重點功能

- 統一 API 整合 — 將多個應用的 API 整合為一個 CLI，簡化操作流程。
- 多平台支援 — 支援 Python 3.10+ 和多種 AI 編碼代理，能夠在不同環境中運行。
- 自動生成 CLI — 透過簡單命令生成針對特定應用的 CLI，提升開發效率。
- 結構化輸出 — 生成的 CLI 輸出為 JSON 格式，簡化 AI 代理的解析過程。
- 即時更新 — 社群貢獻的 CLI 隨時可用，保持工具的最新狀態。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 為 GIMP 建立 CLI
```bash
/cli-anything:cli-anything ./gimp
```
3. 驗證 GIMP CLI
```bash
/cli-anything:validate ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 23 天就累積 25643 stars（1115/天），forks 2298（9.0%），顯示出強勁的增長勢頭。這個專案的主要貢獻者來自於 HKUDS 團隊，他們在開源社群中有著豐富的經驗。CLI-Anything 解決了將不同軟體整合為統一 CLI 的痛點，這在過去是透過繁瑣的 API 調用來實現的，效率低下且容易出錯。隨著 AI 技術的進步，這樣的工具越來越受到重視，尤其是在需要快速開發和部署的環境中。社群的活躍度也反映在其開放的問題和持續的更新中，這顯示出開發者對於這個專案的關注和支持。

## 適合誰使用

**目標受眾**：需要將多種應用整合為統一 CLI 的開發者，尤其是在 AI 代理開發領域。

> [!example] 使用場景
> - 後端工程師用它來為 GIMP 建立 CLI，因為這樣可以快速整合圖像處理功能，省去繁瑣的 API 調用。
> - AI 開發者用它來生成針對 LibreOffice 的 CLI，因為這樣能夠讓 AI 代理自動化文檔處理，提升工作效率。
> - 產品經理用它來整合多個應用的 CLI，因為這樣可以簡化內部工具的使用流程，降低學習成本。

## 架構分析

CLI-Anything 採用模組化設計，允許用戶透過簡單的命令來生成和管理 CLI。每個 CLI 由一組命令和參數組成，這些命令可直接由 AI 代理調用。這種設計使得 CLI 能夠快速適應不同的應用需求，並且支持即時更新。

資料流方面，CLI-Anything 的命令會被解析為 JSON 格式，這樣可以簡化 AI 代理的解析過程。選擇這種結構化輸出格式的原因在於它能夠提供更高的可預測性和可靠性。擴展性方面，CLI-Anything 目前支持多種 AI 編碼代理，未來可能會增加更多的支援。

這樣的設計使得 CLI-Anything 在面對不同應用時，能夠快速調整和擴展功能。

## 技術深入分析

CLI-Anything 的核心技術在於其模組化的 CLI 生成機制，這使得用戶可以透過簡單的命令來創建和管理 CLI。這些 CLI 是基於 JSON 格式的結構化輸出，這樣的設計不僅提升了可預測性，還簡化了 AI 代理的解析過程。效能方面，CLI-Anything 能夠快速生成 CLI，並且支援多種應用，這使得它在處理大量資料時表現良好。選擇 Python 和 JavaScript 作為主要技術棧，讓它能夠跨平台運行，並且不需要額外的依賴。這樣的選擇雖然提升了靈活性，但也可能帶來一定的技術債。未來在擴展性方面，CLI-Anything 可能會面臨如何保持穩定性和功能擴展之間的平衡。整合方面，CLI-Anything 能夠與多種 AI 編碼代理無縫對接，這使得它在現有的開發流程中能夠輕鬆融入，並且提升了整體的開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意 Windows 環境的特殊要求，這可能會造成一些困擾。整體來說，花 30 分鐘應該能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 簡化多種應用的整合過程，提升開發效率。
> - 支援多種 AI 編碼代理，具備良好的擴展性。
> - 結構化輸出格式，簡化 AI 代理的解析過程。
> - 社群活躍，持續更新和改進功能。

> [!danger] 缺點
> - 目前仍在快速開發中，可能存在不穩定性。
> - Windows 環境下需要額外安裝工具，增加使用門檻。
> - 對於某些應用的支援可能不完全，功能尚在開發中。
> - 使用者需具備一定的 CLI 操作經驗。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - Windows 環境下需要安裝 Git for Windows 或 WSL。
> - 對於某些應用的支援可能仍在開發中，功能不完全。
> - 目前仍在快速開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 提供了一個開放的 AI 代理平台，但不如 CLI-Anything 專注於 CLI 工具的整合。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 是針對 Claude Code 的專用工具，而 CLI-Anything 提供更廣泛的應用支援。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 專注於資料隱私，而 CLI-Anything 更加關注於整合多種應用的 CLI。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於資料同步，而 CLI-Anything 更加關注於將應用轉變為 CLI 工具。 | 如果你的需求主要是資料同步，parsync 會是一個更合適的選擇。 | medium，因為需要重新設計資料流和命令結構。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw-Medical-Skills 專注於醫療領域的 AI 應用，而 CLI-Anything 則是通用的 CLI 工具。 | 如果你的應用場景是醫療領域，OpenClaw-Medical-Skills 會提供更專業的功能。 | low，因為可以直接使用 OpenClaw 的架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於資料同步，而 CLI-Anything 更加關注於將應用轉變為 CLI 工具。 | OpenClaw-Medical-Skills 專注於醫療領域的 AI 應用，而 CLI-Anything 則是通用的 CLI 工具。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和命令結構。 | low，因為可以直接使用 OpenClaw 的架構。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步，parsync 會是一個更合適的 | 如果你的應用場景是醫療領域，OpenClaw-Medical |

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

- **[HIGH]** 在 Windows 環境下，使用 bash 命令時可能會遇到路徑問題。
  - 解法：確保安裝 Git for Windows 或使用 WSL。
- [MEDIUM] 某些 CLI 功能可能尚未完全開發，導致使用時出現錯誤。
  - 解法：定期檢查更新，並參考社群討論。
- [MEDIUM] 在安裝過程中，可能需要手動配置某些環境變數。
  - 解法：參考 README 中的安裝說明，確保配置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速整合多個應用的 CLI | 非常適合 | CLI-Anything 能夠快速生成 CLI，提升開發效率。 |
| 大型企業的核心系統整合 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 個人開發者希望探索 AI 代理的應用 | 適合 | 提供簡單的 CLI 生成方式，降低學習門檻。 |
| 需要高可靠性的生產環境 | 不適合 | 目前尚未達到生產就緒的標準。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到快速生成 CLI 的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CLI-Anything 本身不需要高權限操作，但使用過程中可能會存取應用的敏感資料，建議在安全的環境中運行。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
| Forks | 2.3k |
| Open Issues | 71 |
| Issue 解決率 | 23% (21 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 17.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 111 |
> | [@omerarslan0](https://github.com/omerarslan0) | 19 |
> | [@Bortlesboat](https://github.com/Bortlesboat) | 17 |
> | [@furkankoykiran](https://github.com/furkankoykiran) | 15 |
> | [@zhangxilong-43](https://github.com/zhangxilong-43) | 11 |

**最新版本**：v0.2.0 (2026-03-30)

> [!info]- Release Notes
> ## What's Changed
> * Add AnyGen OpenAPI CLI harness by @koltyu-anygen in https://github.com/HKUDS/CLI-Anything/pull/6
> * Add Draw.io CLI harness for agent-native diagram creation by @zhangxilong-43 in https://github.com/HKUDS/CLI-Anything/pull/9
> * docs: clean up stale build.md references after merge into cli-anything.md by @JasonZhaoWW in https://github.com/HKUDS/CLI-Anything/pull/7
> * Add /cli-anything:list command and update documentation by @Lin-Jiong-HDU in https://github.com/HKUDS/CLI-Anything/pull/8
> * feat: add zoom harness by @zhangxilong-43 in https://github.com/HKUDS/CLI-Anything/pull/25
> * fix: replace placeholder URLs with correct HKUDS/CLI-Anything URL by @Jah-yee in https://github.com/HKUDS/CLI-Anything/pull/26
> * fix: [shotcut] add missing lxml dependency to shotcut/agent-harness/setup.py by @jarrodcolburn in https://github.com/HKUDS/CLI-Anything/pull/13
> * fix(shotcut): add auto-save option for one-shot mode by @Jah-yee in https://github.com/HKUDS/CLI-Anything/pull/15
> * fix(libreoffice): enable real LibreOffice backend on Windows and macOS by @Laplace5079 in https://github.com/HKUDS/CLI-Anything/pull/18
> * Add Codex skill integration by @morty-z in https://github.com/HKUDS/CLI-Anything/pull/38
> * Feat/qoder plugin support by @panxiaojun233 in https://github.com/HKUDS/CLI-Anything/pull/43
> * Add PowerShell installer for Codex skill by @0xCyberBerserker in https://github.com/HKUDS/CLI-Anything/pull/55
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和問題解決。
**連結**：[文件](https://hkuds.github.io/CLI-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-03-30）
> **活躍天數** 2 天 · **最新 commit** Add 'clibrowser' entry to registry.json

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/HKUDS/CLI-Anything/issues/19) | Unknown skill: cli-anything `bug` `documentation` `compatibility` | 4 | 8 |
> | [#144](https://github.com/HKUDS/CLI-Anything/issues/144) | Zoom harness stores OAuth tokens without restrictive file pe | 1 | 0 |
> | [#34](https://github.com/HKUDS/CLI-Anything/issues/34) | can i use this for gemini-cli? `question` | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
> 
> **🌐 [CLI-Hub](https://hkuds.github.io/CLI-Anything/)**: Explore all community-built CLIs and install with one command at the **[CLI-Hub](https://hkuds.github.io/CLI-Anything/)**. Want to add your own? [Open a PR](https://github.com/HKUDS/CLI-Anything/blob/main/CONTRIBUTING.md) — the hub updates instantly.
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
> **One Command Line**: Make any software agent-ready for OpenClaw, nanobot, Cursor, Claude Code, etc.&nbsp;&nbsp;[**中文文档**](README_CN.md) | [**日本語ドキュメント**](README_JA.md)
> 
>   
> 
>   
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> 
> ### Prerequisites
> 
> - **Python 3.10+**
> - Target software installed (e.g., GIMP, Blender, LibreOffice, or your own application)
> - A supported AI coding agent: [Claude Code](#-claude-code) | [OpenClaw](#-openclaw) | [OpenCode](#-opencode) | [Codex](#-codex) | [Qodercli](#-qodercli) | [GitHub Copilot CLI](#-github-copilot-cli) | [More Platforms](#-more-platforms-coming-soon)
> 
> 
> # Install the cli-anything plugin from the marketplace
> /plugin install cli-anything
> ```
> 
> That's it. The plugin is now available in your Claude Code session.
> 
> > **Note for Win Users:** Claude Code runs shell commands via `bash`. On Windows, install Git for Windows (includes `bash` and
> `cygpath`) or use WSL; otherwise commands may fail with `cygpath: command not found`.
> 
> **Step 3: Build a CLI in One Command**
> 
> ```bash
> 
> # Global install (available in all projects)
> cp CLI-Anything/opencode-commands/*.md ~/.config/opencode/commands/
> cp CLI-Anything/cli-anything-plugin/HARNESS.md ~/.config/opencode/commands/
> 
> 
> # Or project-level install
> cp CLI-Anything/opencode-commands/*.md .opencode/commands/
> cp CLI-Anything/cli-anything-plugin/HARNESS.md .opencode/commands/
> ```
> 
> > **Note:** `HARNESS.md` is the methodology spec that all commands reference. It must be in the same directory as the commands.
> 
> This adds 5 slash commands: `/cli-anything`, `/cli-anything-refine`, `/cli-anything-test`, `/cli-anything-validate`, and `/cli-anything-list`.
> 
> **Step 2: Build a CLI in One Command**
> 
> ```bash
> 
> # Install to the global skills folder
> mkdir -p ~/.openclaw/skills/cli-anything
> cp CLI-Anything/openclaw-skill/SKILL.md ~/.openclaw/skills/cli-anything/SKILL.md
> ```
> 
> **Step 2: Build a CLI**
> 
> Now you can invoke the skill inside OpenClaw:
> 
> `@cli-anything build a CLI for ./gimp`
> 
> The skill follows the same 7-phase methodology as Claude Code and OpenCode.
> 
> ⚡ Codex Experimental Community
> 
> **Step 1: Install the Skill**
> 
> Run the bundled installer:
> 
> ```bash
> 
> # Install the skill
> bash CLI-Anything/codex-skill/scripts/install.sh
> ```
> 
> On Windows PowerShell, use:
> 
> ```powershell
> .\CLI-Anything\codex-skill\scripts\install.ps1
> ```
> 
> This installs the skill to `$CODEX_HOME/skills/cli-anything` (or `~/.codex/skills/cli-anything` if `CODEX_HOME` is unset).
> 
> Restart Codex after installation so it is discovered.
> 
> **Step 2: Use CLI-Anything from Codex**
> 
> Describe the task in natural language, for example:
> 
> ```text
> Use CLI-Anything to build a harness for ./gimp
> Use CLI-Anything to refine ./shotcut for picture-in-picture workflows
> Use CLI-Anything to validate ./libreoffice
> ```
> 
> The Codex skill adapts the same methodology used by the Claude Code plugin and
> OpenCode commands, while keeping the generated Python harness format unchanged.
> 
> ⚡ GitHub Copilot CLI Community
> 
> **Step 1: Install the Plugin**
> 
> ```bash
> git clone https://github.com/HKUDS/CLI-Anything.git
> cd CLI-Anything
> copilot plugin install ./cli-anything-plugin
> ```
> 
> This installs the CLI-Anything plugin to GitHub Copilot CLI. The plugin should now be available in your GitHub Copilot CLI session.
> 
> **Step 2: Use CLI-Anything from GitHub Copilot CLI**
> 
> ```bash
> /cli-anything:cli-anything ./gimp
> /cli-anything:refine ./gimp "batch processing and filters"
> /cli-anything:validate ./gimp
> ```
> 
> 🔮 More Platforms (Coming Soon)
> 
> CLI-Anything is designed to be platform-agnostic. Support for more AI coding agents is planned:
> 
> - **Codex** — available via the bundled skill in `codex-skill/`
> - **Cursor** — coming soon
> - **Windsurf** — coming soon
> - **Your favorite tool** — contributions welcome! See the `opencode-commands/` directory for a reference implementation.
> 
> 
> # Install to PATH
> cd gimp/agent-harness && pip install -e .
> 
> 
> ### 📦 Zero-Config Installation
> Simple pip install -e . puts cli-anything- directly on PATH. Agents discover tools via standard which commands. No setup, no wrappers.
> 
> 
> ## 📦 Installation & Usage
> 
> 
> # Add marketplace & install (recommended)
> /plugin marketplace add HKUDS/CLI-Anything
> /plugin install cli-anything
> 
> 
> # Install any generated CLI
> cd /agent-harness
> pip install -e .
> 
> 
> # Force-installed mode (recommended for validation)
> CLI_ANYTHING_FORCE_INSTALLED=1 python3 -m pytest cli_anything//tests/ -v -s
> ```
> 
> ---
> 
> 
> ## 🎬 Demonstrations
> 
> 
> ### Examples
> 
> ```bash
> 
> ## 🎮 Demo: Using a Generated CLI
> 
> Here's what an agent can do with `cli-anything-libreoffice`:
> 
> ```bash
> 
> ## CLI-Anything's Key Features
> 
> 
> ### 🔗 Unify Scattered APIs into One CLI
> 
> Tired of juggling fragmented web service APIs? Feed the docs or SDK manuscripts to `/cli-anything` and your agents get a **powerful, stateful CLI** that wraps those individual endpoints into coherent command groups. One tool instead of dozens of raw API calls — stronger capabilities while saving tokens.
> 
> 
> ## 🤔 Why CLI?
> 
> CLI is the universal interface for both humans and AI agents:
> 
> • **Structured & Composable** - Text commands match LLM format and chain for complex workflows
> 
> • **Lightweight & Universal** - Minimal overhead, works across all systems without dependencies
> 
> • **Self-Describing** - --help flags provide automatic documentation agents can discover
> 
> • **Proven Success** - Claude Code runs thousands of real workflows through CLI daily
> 
> • **Agent-First Design** - Structured JSON output eliminates parsing complexity
> 
> • **Deterministic & Reliable** - Consistent results enable predictable agent behavior
> 
> 
> ## 📰 News
> 
> > Thanks to all invaluable efforts from the community! More updates continuously on the way everyday..
> 
> - **2026-03-30** 🏗️ **CLI-Anything v0.2.0** — HARNESS.md progressive disclosure redesign. Detailed guides (MCP backend, filter translation, timecode, session locking, PyPI publishing, SKILL.md generation) extracted into `guides/` for on-demand loading. Phases 1–7 now contiguous. Key Principles and Rules merged into a single authoritative section. Added Guides Reference routing table. Renamed "Critical Lessons Learned" to "Architecture Patterns & Pitfalls."
> 
> - **2026-03-29** 📐 Blender skill docs updated — enforce absolute render paths and correct prerequisites.
> 
> - **2026-03-28** 🌐 **CLIBrowser** added to CLI-Hub registry for agent-accessible browser automation.
> 
> - **2026-03-27** 📚 Zotero SKILL.md enhanced with agent-facing constraints; REPL config and executable resolution fixes.
> 
> - **2026-03-26** 📖 **Zotero CLI** harness landed for Zotero desktop (library management, collections, citations). Draw.io custom ID bugfix (#132) and registry.json syntax fix.
> 
> - **2026-03-25** 🎮 **RenderDoc CLI** merged for GPU frame capture analysis (PSO compute, REPL capture cache). FreeCAD updated for v1.1 (new datum system, tapping, simulation). Blender EEVEE engine name corrected. Zoom token permissions hardened.
> 
> - **2026-03-24** 🏭 **FreeCAD CLI** added with 258 commands across 17 groups. **iTerm2** and **Teltonika RMS** harnesses added to registry. CLI-Hub frontend and README install URLs updated.
> 
> - **2026-03-23** 🤖 Launched **CLI-Hub meta-skill** — agents can now discover and install CLIs autonomously via [`cli-hub-meta-skill/SKILL.md`](cli-hub-meta-skill/SKILL.md). **Krita CLI** harness merged for digital painting. DOMShell MCP parameter mismatches and connection model fixed.
> 
> Earlier news (Mar 17–22)
> 
> - **2026-03-22** 🎵 **MuseScore CLI** merged with transpose, export, and instrument managem

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[多模態]]

相關專案：[[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/HKUDS/CLI-Anything)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--CLI-Anything" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--CLI-Anything" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--CLI-Anything" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-15|2026-03-15]] — 再次上榜，13.8k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，11.7k stars
- [[2026-03-13|2026-03-13]] — 再次上榜，8.9k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，2.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
