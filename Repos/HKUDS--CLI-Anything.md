---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: Apache-2.0
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 21928
stars_per_day: 1462
forks: 1959
open_issues: 56
created: 2026-03-08
pushed_at: 2026-03-23
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將所有軟體轉變為代理原生的 CLI 工具，讓 AI 更容易操作各種應用程式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 25
repo_size_kb: 7056
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381,2026-03-11:3472,2026-03-13:8931,2026-03-13:8970,2026-03-14:11721,2026-03-14:11739,2026-03-15:13789,2026-03-15:13796,2026-03-16:15263,2026-03-17:16691,2026-03-18:17798,2026-03-19:18612,2026-03-20:19370,2026-03-21:19980,2026-03-22:20536,2026-03-23:21234,2026-03-24:21928"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉變為代理原生的 CLI 工具，讓 AI 更容易操作各種應用程式。"
---

# CLI-Anything

**21.9k** stars · **1.5k** stars/天 · 建立 15 天前 · Python · Apache-2.0

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將所有軟體轉變為代理原生的 CLI 工具，讓 AI 更容易操作各種應用程式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.5k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速將多種應用程式轉變為 AI 代理友好的 CLI 的開發者。
> **一句話重點** CLI-Anything 的設計讓 AI 代理能夠更有效地與各種軟體互動，這在開發過程中節省了大量時間和精力。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、5 小時整合，得到快速生成 CLI 的能力，值得一試。

> [!abstract] 核心創新
> CLI-Anything 提供了一個集中式的 CLI Hub，讓使用者能夠輕鬆找到和安裝所需的 CLI。

## 專案簡介

CLI-Anything 的核心機制是將各種軟體轉變為可被 AI 代理操作的命令行介面。使用者只需安裝 CLI-Anything 插件，然後透過簡單的命令來生成和管理 CLI，像是 `/cli-anything:cli-anything ./gimp`，這樣就能為 GIMP 生成完整的 CLI。這種設計讓 AI 代理能夠更有效地與軟體互動，因為 CLI 是結構化且可組合的，能夠簡化複雜的工作流程。技術上，CLI-Anything 依賴 Python 3.10+，並且支援多種 AI 編碼代理，如 Claude Code 和 OpenClaw，這使得它在多平台上都能運行，並且不需要額外的依賴。與傳統的 API 調用相比，CLI-Anything 將多個 API 整合為一個 CLI，這樣不僅減少了 token 的使用，還提高了操作的效率。

與其他類似工具相比，如 Codex 和 OpenClaw，CLI-Anything 提供了一個更統一的介面，能夠更好地處理多個應用程式的 CLI 生成。實際使用中，CLI-Anything 能夠處理的資料量取決於所生成的 CLI 數量，並且在性能上也能夠保持穩定。這個專案目前仍在快速發展中，社群活躍度高，並且有持續的更新與改進。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，特別是當需要快速整合多個應用程式時。未來六個月內，預計會有更多的 AI 編碼代理支援進入生態系統，進一步擴展其功能。

**技術棧**：`Python 3.10+`

## 重點功能

- 統一 API — 將多個應用程式的 API 整合為一個 CLI，簡化操作流程。
- 即時安裝 — 使用 `/plugin install cli-anything` 命令快速安裝插件。
- 多平台支援 — 支援多種 AI 編碼代理，如 Claude Code 和 OpenClaw。
- 自動化文檔生成 — CLI 生成的命令自帶 --help 文檔，方便使用者查詢。
- 增量式改進 — 使用 `/cli-anything:refine` 命令逐步擴展 CLI 功能，無需重複操作。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 為 GIMP 生成 CLI
```bash
/cli-anything:cli-anything ./gimp
```
3. 驗證 GIMP CLI 功能
```bash
/cli-anything:validate ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 21928 stars（1462/天），forks 1959（8.9%），這顯示出極高的使用興趣。作者 yuh-yang 和其他貢獻者在開源社群中活躍，解決了將各種軟體轉變為 AI 代理友好的 CLI 的需求，這在過去的工具中並不常見。特別是，CLI-Anything 提供了一個集中式的 CLI Hub，讓使用者能夠輕鬆找到和安裝所需的 CLI，這在傳統的 API 調用中是無法實現的。社群的貢獻和持續的更新也顯示出這個專案的活力和潛力。

## 適合誰使用

**目標受眾**：需要快速將多種應用程式轉變為 AI 代理友好的 CLI 的開發者。

> [!example] 使用場景
> - 後端工程師用它來為 GIMP 生成 CLI，因為這樣可以讓 AI 代理自動化圖像編輯流程，節省手動操作的時間。
> - AI 開發者用它來整合多個應用程式的 CLI，因為這樣可以用一個統一的介面來管理不同的工具，減少學習成本。
> - 產品經理用它來快速驗證不同應用程式的功能，因為 CLI-Anything 能夠自動生成測試命令，提升測試效率。

## 架構分析

CLI-Anything 採用插件架構，使用者可以透過簡單的命令安裝和管理 CLI。這種設計使得 CLI-Anything 能夠快速擴展，支援多種 AI 編碼代理。資料流方面，使用者輸入命令後，CLI-Anything 會自動生成相應的 CLI，並將其安裝到指定的環境中。

這樣的設計使得使用者在操作上更為便捷，減少了繁瑣的設置過程。選擇插件架構的代價是需要使用者對不同的代理有一定的了解，但這也讓整個系統的擴展性更強。未來可能會面臨的瓶頸是如何保持不同代理之間的相容性，尤其是在快速迭代的情況下。

## 技術深入分析

CLI-Anything 的核心技術機制是將各種應用程式轉變為可被 AI 代理操作的命令行介面。這是透過插件架構實現的，使用者可以透過簡單的命令生成和管理 CLI。效能上，CLI-Anything 能夠處理多個應用程式的 CLI 生成，並且在性能上保持穩定。選擇 Python 作為主要開發語言的好處在於其廣泛的社群支援和豐富的庫，但這也使得專案對於 Python 版本的依賴較高。技術風險方面，未來可能會面臨不同代理之間的相容性問題，特別是在快速迭代的情況下。整合分析方面，CLI-Anything 能夠與主流的開發工具鏈良好整合，並且支援 CI/CD 流程，這使得它在實際開發中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含多種範例，安裝過程相對順暢。提供了良好的入門指南，並且有中文和日文文件可供參考。

## 優缺點分析

> [!success] 優點
> - 快速生成 CLI，減少手動設置的時間。
> - 支援多種 AI 編碼代理，提升靈活性。
> - 集中式的 CLI Hub 方便使用者查找和安裝所需的 CLI。

> [!danger] 缺點
> - 目前僅支援 Python 3.10+，對於其他語言的支援有限。
> - 需要使用者對目標軟體有一定的了解。
> - 在 Windows 環境下的安裝過程可能較為繁瑣。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要安裝目標軟體，如 GIMP、Blender 等。
> - 在 Windows 環境下需要安裝 Git for Windows 或使用 WSL。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 專注於 AI 代理的開發，而 CLI-Anything 提供了更廣泛的 CLI 生成能力，適用於多種應用程式。 |
| [HenryXiaoYang/wechat-access-unqclawed](https://github.com/HenryXiaoYang/wechat-access-unqclawed) | 此工具專注於特定應用的 API 接入，而 CLI-Anything 則提供了通用的 CLI 生成解決方案。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | MiniMax-AI 的技能庫較為專一，而 CLI-Anything 則提供了多種應用的 CLI 整合，具有更高的靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Codex | Codex 專注於自然語言到程式碼的轉換，而 CLI-Anything 提供了更廣泛的 CLI 生成能力，適用於多種應用程式。 | 如果你的團隊已經在使用 Codex 並需要自然語言生成程式碼的功能，則應選擇 Codex。 | medium，因為需要重新設計 CLI 的生成邏輯。 |
| OpenClaw | OpenClaw 專注於 AI 代理的開發，而 CLI-Anything 提供了更廣泛的 CLI 生成能力，適用於多種應用程式。 | 如果你的專案主要集中在 AI 代理的開發，則應選擇 OpenClaw。 | high，因為需要重新設計整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **Codex** | **OpenClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 專注於自然語言到程式碼的轉換，而 CLI-Anything 提供了更廣泛的 CLI 生成能力，適用於多種應用程式。 | OpenClaw 專注於 AI 代理的開發，而 CLI-Anything 提供了更廣泛的 CLI 生成能力，適用於多種應用程式。 |
> | 遷移成本 | - | medium，因為需要重新設計 CLI 的生成邏輯。 | high，因為需要重新設計整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Codex 並需要自然語言生成程式碼 | 如果你的專案主要集中在 AI 代理的開發，則應選擇 Open |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下，安裝過程可能會遇到 bash 命令無法執行的問題。
  - 解法：確保安裝 Git for Windows 或使用 WSL。
- [MEDIUM] 某些 CLI 生成的命令可能無法正確執行。
  - 解法：檢查生成的命令是否符合目標軟體的要求。
- [MEDIUM] 在多個代理間切換時，可能會遇到相容性問題。
  - 解法：確保所有代理均為最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發專案 | 非常適合 | 能夠快速生成和管理多個應用程式的 CLI，提升開發效率。 |
| 大型企業的核心系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 個人開發者的 side project | 適合 | 能夠快速整合多種工具，減少開發時間。 |
| 需要高穩定性的生產環境 | 不適合 | 存在 breaking changes 的風險，可能影響系統運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、5 小時整合，得到快速生成 CLI 的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CLI-Anything 本身不需要高權限，並且不會存取敏感資料。依賴鏈的信任程度高，適合在 CI/CD 中使用。

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
| Forks | 2.0k |
| Open Issues | 56 |
| Issue 解決率 | 25% (19 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 6.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 86 |
> | [@omerarslan0](https://github.com/omerarslan0) | 19 |
> | [@Bortlesboat](https://github.com/Bortlesboat) | 17 |
> | [@furkankoykiran](https://github.com/furkankoykiran) | 15 |
> | [@panxiaojun233](https://github.com/panxiaojun233) | 11 |

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和改進。
**連結**：[文件](https://hkuds.github.io/CLI-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-23 ~ 2026-03-23）
> **活躍天數** 1 天 · **最新 commit** fix cli-hub-skill

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/HKUDS/CLI-Anything/issues/19) | Unknown skill: cli-anything `bug` `documentation` `compatibility` | 4 | 8 |
> | [#34](https://github.com/HKUDS/CLI-Anything/issues/34) | can i use this for gemini-cli? `question` | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
> 
> **🌐 [CLI-Hub](https://hkuds.github.io/CLI-Anything/)**: Browse & install all community CLIs in one place. Have a CLI for a new software? [Open a PR](https://github.com/HKUDS/CLI-Anything/blob/main/CONTRIBUTING.md) — the hub updates instantly.
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
> # Example: agent needs to edit images
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
> - **2026-03-23** 🤖 Launched **CLI-Hub meta-skill** — agents can now discover and install CLIs autonomously via [`cli-hub-skill/SKILL.md`](cli-hub-skill/SKILL.md). The catalog auto-updates from `registry.json` via GitHub Actions, making the entire marketplace agent-native.
> 
> - **2026-03-22** 🎵 **MuseScore CLI** merged with transpose, export, and instrument management. Community contributions continue expanding domain coverage.
> 
> - **2026-03-21** 🔧 Infrastructure improvements — refined test harnesses and documentation across multiple CLIs. Enhanced Windows compatibility for several backends.
> 
> - **2026-03-20** 🌐 **Novita AI** CLI added for OpenAI-compatible API access. Registry metadata improvements for better hub discovery.
> 
> - **2026-03-19** 📦 Package structure refinements across harnesses. Improved SKILL.md generation with better command documentation.
> 
> - **2026-03-18** 🧪 Test coverage expansion — additional E2E scenarios and edge case validation across multiple CLIs.
> 
> - **2026-03-17** 🌐 Launched the **[CLI-Hub](https://hkuds.github.io/CLI-Anything/)** — a central registry where you can browse, search, and install any CLI with a single `pip` command. Contributors can add new CLIs or update existing ones by simply opening a PR with a `registry.json` entry. The hub updates automatically on merge.
> 
> Earlier news
> 
> - **2026-03-16** 🤖 Added **SKILL.md generation** (Phase 6.5) — every generated CLI now ships with an AI-discoverable skill definition inside the Python package. ReplSkin auto-detects the skill file after `pip install`, and the REPL banner displays the absolute path for agents. Includes `skill_generator.py`, Jinja2 template, `package_data` in all setup.py files, and 51 new tests.
> 
> - **2026-03-15** 🐾 Support for **OpenClaw** from the community! Merged Windows `cygpath` guard to ensure CLI-Anything work

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[karpathy--agenthub|karpathy/agenthub]]

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
