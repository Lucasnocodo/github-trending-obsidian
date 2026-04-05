---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: Apache-2.0
description: "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/"
homepage: "https://clianything.cc/"
stars: 28055
stars_per_day: 1039
forks: 2650
open_issues: 72
created: 2026-03-08
pushed_at: 2026-04-04
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
use_case: "將所有軟體轉變為可由 AI 代理使用的 CLI 工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 23
repo_size_kb: 23010
readme_length: 10000
bus_factor: 1
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381,2026-03-11:3472,2026-03-13:8931,2026-03-13:8970,2026-03-14:11721,2026-03-14:11739,2026-03-15:13789,2026-03-15:13796,2026-03-16:15263,2026-03-17:16691,2026-03-18:17798,2026-03-19:18612,2026-03-20:19370,2026-03-21:19980,2026-03-22:20536,2026-03-23:21234,2026-03-24:21928,2026-03-25:22505,2026-03-26:23083,2026-03-27:23598,2026-03-28:23940,2026-03-29:24338,2026-03-30:24723,2026-03-31:25202,2026-04-01:25643,2026-04-02:26275,2026-04-03:27144,2026-04-04:27697,2026-04-05:28055"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉變為可由 AI 代理使用的 CLI 工具。"
---

# CLI-Anything

**28.1k** stars · **1.0k** stars/天 · 建立 27 天前 · Python · Apache-2.0

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
> 將所有軟體轉變為可由 AI 代理使用的 CLI 工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.0k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將現有軟體轉換為 AI 代理可用 CLI 的開發者。
> **一句話重點** CLI-Anything 的最大優勢在於其能將各種軟體轉變為 AI 代理可用的 CLI，這在當前 AI 應用日益普及的環境中，具有重要的實用價值。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到快速生成 CLI 的能力，值得考慮。

> [!abstract] 核心創新
> CLI-Anything 提供了一個通用的 CLI 生成框架，能將各種軟體轉變為可由 AI 代理使用的工具。

## 專案簡介

CLI-Anything 的核心機制是將各種軟體轉換為可由 AI 代理操作的命令行介面（CLI）。用戶只需透過簡單的指令，如 `/cli-anything build a CLI for ./gimp`，便能生成相應的 CLI，這樣 AI 代理就能直接與這些軟體互動。這種設計的優勢在於，CLI 提供了一個結構化且可組合的介面，讓 AI 代理能夠更有效地執行複雜的工作流程，並且減少了對 GUI 的依賴。技術上，CLI-Anything 使用 Python 作為主要開發語言，並且支援多種 AI 編碼代理，如 Claude Code 和 OpenClaw，這使得它在不同平台上都能運行。

與其他類似工具相比，如 Codex 和 OpenClaw，CLI-Anything 提供了一個統一的 CLI，能夠將分散的 API 整合成一個命令，這樣用戶只需面對一個工具，而不是多個 API 調用，從而提高了效率。實際使用中，CLI-Anything 可以處理多達 258 個命令，並且可以在多種作業系統上運行，這使得它在跨平台的應用上具有優勢。雖然目前仍在 alpha 階段，但其社群活躍度高，且持續有新功能更新，未來可能會成為一個穩定的解決方案。對於需要快速生成 CLI 以便 AI 代理使用的開發者，CLI-Anything 是一個值得考慮的選擇，但對於不熟悉命令行操作的用戶，可能會需要一些學習成本。

**技術棧**：`Python 3.10+`

## 重點功能

- 統一 API — 將多個分散的 API 整合為一個 CLI，簡化操作流程。
- 多平台支援 — 支援 Python、C#、JavaScript 等多種語言，適用於不同開發環境。
- 簡單安裝 — 只需一行指令即可安裝並使用，降低使用門檻。
- 自動生成文檔 — 生成的 CLI 自帶 --help 標誌，提供自動文檔。
- 社群驅動 — 持續更新，並接受社群貢獻，功能不斷增強。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 為 GIMP 建立 CLI
```bash
@cli-anything build a CLI for ./gimp
```
3. 驗證 CLI
```bash
/cli-anything:validate ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天就累積 28055 stars（1039/天），forks 2650（9.4%），這顯示出強烈的社群興趣。作者 HKUDS 團隊在開源領域有多個成功專案，這次專案解決了將現有軟體轉換為 AI 代理可用 CLI 的痛點，之前的解決方案往往需要手動整合多個 API，效率低下。近期的推廣活動和社群貢獻也促進了其快速成長，特別是在 AI 代理日益普及的背景下，這使得 CLI-Anything 的需求急劇上升。

## 適合誰使用

**目標受眾**：需要將現有軟體轉換為 AI 代理可用 CLI 的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速為 GIMP 建立 CLI，因為這樣可以讓 AI 代理自動化圖像處理任務，節省手動操作的時間。
> - 產品經理用它來整合多個 API，生成一個統一的 CLI，因為這樣可以簡化測試流程，減少對多個工具的依賴。
> - AI 開發者用它來為自己的應用程式生成 CLI，因為這樣可以讓 AI 代理更容易地與應用程式互動，提升開發效率。

## 架構分析

CLI-Anything 採用插件架構，允許用戶將其安裝到不同的 AI 編碼代理中。這樣的設計使得 CLI-Anything 能夠在多個平台上運行，並且能夠快速集成新的功能。資料流方面，CLI-Anything 透過命令行指令接收用戶輸入，然後生成相應的 CLI，這些 CLI 會被 AI 代理使用。選擇這種架構的代價在於，可能需要用戶對命令行操作有一定的熟悉度。擴展性方面，由於其插件架構，未來可以加入更多的 AI 編碼代理，這樣能夠持續增強其功能。

## 技術深入分析

CLI-Anything 的核心技術在於其能夠將不同的軟體轉換為統一的 CLI，這是透過分析軟體的 API 和功能來實現的。這種方法使得 AI 代理能夠以結構化的方式與軟體互動，並且能夠生成自動化的工作流程。效能方面，CLI-Anything 能夠處理多達 258 個命令，並且在多種作業系統上運行，這使得它在跨平台的應用上具有優勢。設計取捨方面，選擇使用 Python 作為主要開發語言，使得其在開發上具有靈活性，但也可能導致在某些高效能需求的場景下表現不如其他語言。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大量並發請求時。整合分析方面，CLI-Anything 能夠與多種主流開發工具和 CI/CD 流程相容，這使得它能夠輕鬆融入現有的開發生態系統中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對簡單，但對於 Windows 用戶可能需要額外配置。文件目前僅提供英文，對於非英語使用者可能會有一定障礙。整體而言，花 30 分鐘能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 快速生成可操作的 CLI，提升開發效率。
> - 支援多種語言和平台，具有良好的通用性。
> - 社群活躍，持續更新和改進。

> [!danger] 缺點
> - 對於不熟悉命令行的用戶，學習曲線較陡。
> - 目前仍在 alpha 階段，可能存在不穩定性。
> - 需要安裝目標軟體，增加了使用前的準備工作。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要安裝目標軟體，如 GIMP 或 Blender。
> - 對於不熟悉命令行的用戶，可能需要額外學習時間。
> - 目前仍在 alpha 階段，功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Codex | Codex 專注於自然語言處理，而 CLI-Anything 將重點放在生成可操作的 CLI，適合需要直接與軟體互動的場景。 |
| OpenClaw | OpenClaw 提供的功能較為專一，而 CLI-Anything 則是通用的 CLI 生成工具，適合多種軟體。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Codex | Codex 專注於自然語言處理，主要用於生成程式碼，而 CLI-Anything 專注於生成可操作的 CLI，適合需要直接與軟體互動的場景。 | 如果你的團隊需要強大的自然語言處理能力來生成程式碼，而不僅僅是 CLI，則應選擇 Codex。 | medium，因為需要重新設計工作流程以適應 Codex 的使用方式。 |
| OpenClaw | OpenClaw 提供的功能較為專一，主要針對特定應用，而 CLI-Anything 則是通用的 CLI 生成工具，適合多種軟體。 | 如果你的專案需要針對特定應用進行深度整合，則 OpenClaw 可能更合適。 | low，因為兩者在某些功能上有重疊，轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **Codex** | **OpenClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 專注於自然語言處理，主要用於生成程式碼，而 CLI-Anything 專注於生成可操作的 CLI，適合需要直接與軟體互動的場景。 | OpenClaw 提供的功能較為專一，主要針對特定應用，而 CLI-Anything 則是通用的 CLI 生成工具，適合多種軟體。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程以適應 Codex 的使用方式。 | low，因為兩者在某些功能上有重疊，轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要強大的自然語言處理能力來生成程式碼，而不僅僅 | 如果你的專案需要針對特定應用進行深度整合，則 OpenCla |

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

- **[HIGH]** 在 Windows 上執行時，可能需要安裝 Git for Windows 以支持 bash 命令。
  - 解法：確保安裝 Git for Windows 或使用 WSL。
- [MEDIUM] 某些命令在不同平台上可能表現不一致。
  - 解法：測試命令在目標平台上的兼容性。
- [MEDIUM] CLI-Anything 目前仍在持續開發中，可能會有未解決的 bug。
  - 解法：定期檢查更新和社群討論以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能快速生成 CLI，提升開發效率，適合小團隊使用。 |
| 大型企業的核心系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 需要快速原型開發的團隊 | 適合 | 能快速生成可操作的 CLI，適合快速迭代。 |
| 對命令行不熟悉的用戶 | 普通 | 需要一定的學習成本，但功能強大。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到快速生成 CLI 的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CLI-Anything 本身不需要高權限，且不存取敏感資料，但使用者需注意生成的 CLI 是否有安全漏洞。

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
| Forks | 2.6k |
| Open Issues | 72 |
| Issue 解決率 | 23% (21 closed) |
| 最後推送 | 2026-04-04 |
| 建立日期 | 2026-03-08 |
| 官方網站 | [Link](https://clianything.cc/) |
| Repo 大小 | 22.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 95
>     "C#" : 4
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 121 |
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

**社群活躍度**：社群活躍，持續有新功能和修復更新。
**連結**：[文件](https://clianything.cc/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31 ~ 2026-04-03）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #170 from fabiomantel/add-wiremock-harness

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/HKUDS/CLI-Anything/issues/19) | Unknown skill: cli-anything `bug` `documentation` `compatibility` | 4 | 12 |
> | [#144](https://github.com/HKUDS/CLI-Anything/issues/144) | Zoom harness stores OAuth tokens without restrictive file pe | 1 | 0 |
> | [#34](https://github.com/HKUDS/CLI-Anything/issues/34) | can i use this for gemini-cli? `question` | 1 | 0 |
> | [#179](https://github.com/HKUDS/CLI-Anything/issues/179) | [Feature]: add Pi Coding Agent extension support | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
> 
> **🌐 [CLI-Hub](https://hkuds.github.io/CLI-Anything/)**: Explore all community-built CLIs and install with one command at the **[CLI-Hub](https://hkuds.github.io/CLI-Anything/)**. Want to add your own? [Open a PR](https://github.com/HKUDS/CLI-Anything/blob/main/CONTRIBUTING.md) — the hub updates instantly.
> 
> **🎬 [See Demos](#-real-world-demos)**: Watch AI agents use generated CLIs to produce real artifacts — diagrams, gameplay, subtitles, and more.
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
> ## 🎬 Real-World Demos
> 
> AI agents using generated CLIs to produce complete, useful artifacts — no GUI needed.
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
> - **2026-03-23** 🤖 Launched **CLI-Hub meta-skill** — agents can now discover and install CLIs autonomously via [`cli-hub-meta-skill/SKILL.md`](cli-

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/HKUDS/CLI-Anything) · [官方網站](https://clianything.cc/)

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
> const concepts = ["CLI/TUI","自動化","API 設計"];
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
