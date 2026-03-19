---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 18612
stars_per_day: 1861
forks: 1601
open_issues: 48
created: 2026-03-08
pushed_at: 2026-03-18
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
use_case: "將所有軟體轉變為可由 AI 代理使用的命令列介面。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 23
repo_size_kb: 6876
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381,2026-03-11:3472,2026-03-13:8931,2026-03-13:8970,2026-03-14:11721,2026-03-14:11739,2026-03-15:13789,2026-03-15:13796,2026-03-16:15263,2026-03-17:16691,2026-03-18:17798,2026-03-19:18612"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉變為可由 AI 代理使用的命令列介面。"
---

# CLI-Anything

**18.6k** stars · **1.9k** stars/天 · 建立 10 天前 · Python · 未標註授權

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
> 將所有軟體轉變為可由 AI 代理使用的命令列介面。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.9k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多種應用轉換為 AI 代理可用 CLI 的開發者和團隊。
> **一句話重點** CLI-Anything 讓開發者能夠輕鬆將軟體轉換為 AI 代理可用的 CLI，顯著提高了開發效率。

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
> CLI-Anything 提供了一種將所有軟體轉變為 AI 代理可用的命令列介面的全新方法。

## 專案簡介

CLI-Anything 的核心機制是將任何軟體轉換為 AI 代理可用的命令列介面（CLI），這樣可以讓 AI 代理更有效地與各種應用程式互動。使用者只需透過簡單的命令，如 `/cli-anything ./gimp`，就能生成完整的 CLI，並自動執行分析、設計、實作等七個階段的流程。這樣的設計不僅簡化了 AI 代理的使用方式，還提高了其操作的靈活性和效率。技術上，CLI-Anything 使用 Python 3.10+，並依賴於現有的 AI 編碼代理如 Claude Code 和 OpenClaw，這使得它能夠在多平台上運行，並且無需額外的依賴。與傳統的 API 交互方式相比，CLI-Anything 透過統一的命令列介面減少了多個 API 調用的複雜性，讓使用者能夠以更簡單的方式進行操作。與其他工具如 OpenClaw 和 Codex 相比，CLI-Anything 提供了更為直觀的 CLI 生成過程，並且支持多種應用程式，這使得它在多樣化的使用場景中更具優勢。

實際使用中，CLI-Anything 能夠處理各種應用的 CLI 生成，並且支持即時的功能擴展，這對於需要快速迭代的開發環境尤為重要。這個專案目前處於活躍開發階段，社群參與度高，並且有不斷的更新和改進。適合已經在使用 AI 代理的開發者，尤其是需要快速集成多種應用的團隊。對於小型專案或初學者來說，可能需要一些時間來熟悉其命令和工作流程。總體而言，CLI-Anything 是一個值得關注的工具，尤其是在未來 AI 代理將成為主流的背景下。

**技術棧**：`Python 3.10+` · `Shell` · `PowerShell`

## 重點功能

- 一鍵生成 CLI — 透過簡單命令，如 `/cli-anything ./gimp`，自動生成完整的 CLI。
- 統一 API 接口 — 將多個分散的 API 轉換為一個統一的命令列介面，減少操作複雜性。
- 即時功能擴展 — 支持 CLI 的即時擴展，讓開發者能夠快速迭代功能。
- 多平台支持 — 兼容多種 AI 編碼代理，如 Claude Code 和 OpenClaw，無需額外依賴。
- 自動文檔生成 — CLI 自帶 `--help` 標誌，提供自動文檔，方便代理發現功能。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 為 GIMP 生成 CLI
```bash
/cli-anything ./gimp
```
3. 安裝到 PATH
```bash
pip install -e .
```

## 程式碼範例

```python
[
  "# 前置條件：安裝 Python 3.10+ 和目標軟體",
  "cp CLI-Anything/opencode-commands/*.md ~/.config/opencode/commands/",
  "# 預期輸出：生成的 CLI 將可用於 GIMP 的操作"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 18612 stars（1861/天），forks 1601（8.6%），顯示出強勁的增長潛力。主要貢獻者 yuh-yang 和其他開發者在 AI 工具和命令列介面領域有豐富的經驗。這個專案解決了傳統軟體與 AI 代理之間的互動障礙，讓開發者能夠更輕鬆地將現有軟體轉換為可由 AI 使用的 CLI。近期的社群活動和功能更新也促進了其受歡迎程度，特別是 CLI-Hub 的推出，讓用戶能夠更方便地瀏覽和安裝各種 CLI。這些因素共同推動了其快速增長。

## 適合誰使用

**目標受眾**：需要將多種應用轉換為 AI 代理可用 CLI 的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來為 GIMP 生成 CLI，因為這樣可以讓 AI 代理更好地執行圖像處理任務，節省手動操作的時間。
> - 產品經理用它來整合多個應用的 API，因為 CLI-Anything 可以將分散的 API 轉換為統一的命令，簡化了開發流程。
> - AI 開發者用它來快速迭代 CLI 功能，因為它支持即時的功能擴展，讓開發者能夠快速響應市場需求。

## 架構分析

CLI-Anything 採用模組化設計，允許用戶通過簡單的命令生成 CLI。每個 CLI 生成過程遵循七個階段，包括分析、設計、實作等，這樣的設計使得整個過程高效且可擴展。資料流方面，使用者輸入命令後，系統會自動分析源碼並映射 GUI 操作，然後生成相應的 CLI。選擇這種方式的好處是能夠快速適應不同應用的需求，但代價是需要用戶對命令列操作有一定的了解。擴展性方面，CLI-Anything 能夠支持多種 AI 編碼代理，這使得它在未來的應用場景中具有很大的潛力。

## 技術深入分析

CLI-Anything 的核心技術在於其模組化的 CLI 生成過程，這使得用戶能夠通過簡單的命令快速生成所需的 CLI。這個過程涉及多個階段，包括分析源碼、設計命令結構、實作 CLI 等，這些都依賴於 Python 的靈活性和強大的庫支持。效能方面，CLI-Anything 能夠快速處理各種應用，並且支持即時的功能擴展，這對於需要快速迭代的開發環境尤為重要。設計上，選擇 Python 作為主要開發語言，因為其擁有廣泛的生態系統和良好的可讀性，這使得開發者能夠快速上手。技術風險方面，CLI-Anything 目前依賴於特定的 AI 編碼代理，這可能在未來的擴展中造成一定的限制。整合方面，CLI-Anything 與主流的開發工具鏈相容性良好，能夠輕鬆整合到現有的 CI/CD 流程中，這對於團隊的協作非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要注意 Windows 環境下的依賴問題。文件目前僅提供英文版，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡化了 AI 代理與軟體的互動流程。
> - 支持多種應用，具有廣泛的適用性。
> - 即時功能擴展，能快速響應需求。

> [!danger] 缺點
> - 目前僅支持特定版本的 Python 和目標軟體。
> - 對於新手來說，命令列操作可能有一定的學習曲線。
> - 社群支持仍在發展中，部分功能可能不夠穩定。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要安裝目標軟體，如 GIMP、Blender 等。
> - 目前僅支持特定的 AI 編碼代理，其他平台尚在開發中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 AI 代理，CLI-Anything 更加通用，支持多種應用。 |
| [HenryXiaoYang/wechat-access-unqclawed](https://github.com/HenryXiaoYang/wechat-access-unqclawed) | 專注於微信的 CLI 工具，CLI-Anything 提供更廣泛的應用支持。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NVIDIA 的專案針對特定的 AI 應用，CLI-Anything 則是通用的 CLI 生成工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步的 CLI 工具，CLI-Anything 提供更廣泛的應用支持。 | 如果你的需求僅限於文件同步，parsync 會更簡單直接。 | low，因為功能範圍較小，轉移成本低。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 針對 Telegram 的 WebSocket 代理，CLI-Anything 則是通用的 CLI 生成工具。 | 如果你的專案專注於 Telegram 的功能，tg-ws-proxy 會更合適。 | medium，因為需要重新設計命令結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步的 CLI 工具，CLI-Anything 提供更廣泛的應用支持。 | 針對 Telegram 的 WebSocket 代理，CLI-Anything 則是通用的 CLI 生成工具。 |
> | 遷移成本 | - | low，因為功能範圍較小，轉移成本低。 | medium，因為需要重新設計命令結構。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於文件同步，parsync 會更簡單直接。 | 如果你的專案專注於 Telegram 的功能，tg-ws-p |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行實驗和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 使用者可能會遇到 `cygpath` 找不到的問題
  - 解法：安裝 Git for Windows 或使用 WSL。
- [MEDIUM] 某些命令在特定版本的 AI 代理中可能不兼容
  - 解法：確保使用最新版本的 AI 代理。
- [MEDIUM] 生成的 CLI 可能需要手動調整以滿足特定需求
  - 解法：使用 `refine` 命令進行優化。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | CLI-Anything 能快速生成所需的 CLI，提升開發效率。 |
| 大型企業的多應用整合 | 適合 | 能夠統一多個 API，簡化操作流程。 |
| 個人開發者的實驗性專案 | 普通 | 對於新手來說，命令列操作可能有學習曲線。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍在 beta 階段，可能存在不穩定性。 |

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
> 低風險：CLI-Anything 不需要高權限運行，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

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
| Forks | 1.6k |
| Open Issues | 48 |
| Issue 解決率 | 23% (14 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 6.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 52 |
> | [@Bortlesboat](https://github.com/Bortlesboat) | 17 |
> | [@panxiaojun233](https://github.com/panxiaojun233) | 11 |
> | [@sehawq](https://github.com/sehawq) | 7 |
> | [@Lin-Jiong-HDU](https://github.com/Lin-Jiong-HDU) | 6 |

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和貢獻。
**連結**：[文件](https://hkuds.github.io/CLI-Anything/hub/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-18）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #98 from pyxl-dev/feat/adguardhome-clean

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
> **🌐 [CLI-Hub](https://hkuds.github.io/CLI-Anything/hub/)**: Browse & install all community CLIs in one place. Have a CLI for a new software? [Open a PR](https://github.com/HKUDS/CLI-Anything/blob/main/CONTRIBUTING.md) — the hub updates instantly.
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
> - A supported AI coding agent: [Claude Code](#-claude-code) | [OpenClaw](#-openclaw) | [OpenCode](#-opencode) | [Codex](#-codex) | [Qodercli](#-qodercli) | [More Platforms](#-more-platforms-coming-soon)
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
> - **2026-03-17** 🌐 Launched the **[CLI-Hub](https://hkuds.github.io/CLI-Anything/hub/)** — a central registry where you can browse, search, and install any CLI with a single `pip` command. Contributors can add new CLIs or update existing ones by simply opening a PR with a `registry.json` entry. The hub updates automatically on merge.
> 
> - **2026-03-16** 🤖 Added **SKILL.md generation** (Phase 6.5) — every generated CLI now ships with an AI-discoverable skill definition inside the Python package. ReplSkin auto-detects the skill file after `pip install`, and the REPL banner displays the absolute path for agents. Includes `skill_generator.py`, Jinja2 template, `package_data` in all setup.py files, and 51 new tests.
> 
> - **2026-03-15** 🐾 Support for **OpenClaw** from the community! Merged Windows `cygpath` guard to ensure CLI-Anything works reliably in Windows bash environments. Community contributions continue to strengthen cross-platform support.
> 
> - **2026-03-14** 🔒 Fixed a GIMP Script-Fu path injection vulnerability and added **Japanese README** translation. OpenCode version requirements documented alongside several Windows compatibility improvements.
> 
> Earlier news
> 
> - **2026-03-13** 🔌 **Qodercli** plugin officially merged as a community contribution with dedicated setup scripts. Codex skill gained a Windows install script, and placeholder URLs were cleaned up across the project.
> 
> - **2026-03-12** 📦 **Codex skill** integration landed, bringing CLI-Anything to yet another AI coding platform. Qodercli support was also introduced, and documentation was updated with limitations and experimental labels.
> 
> - **2026-03-11** 📞 **Zoom** video conferencing harness added as the 11th supported application. Multiple community fixes shipped for Shotcut auto-save, LibreOffice Windows/macOS backend, and OpenCode support.
> 
> ---
> 
> 
> ### Pick Your Platform
> 
> ⚡ Claude Code
> 
> **Step 1: Add the Marketplace**
> 
> CLI-Anything is distributed as a Claude Code plugin marketplace hosted on GitHub.
> 
> ```bash
> 
> # Add the CLI-Anything marketplace
> /plugin marketplace add HKUDS/CLI-Anything
> ```
> 
> **Step 2: Install the Plugin**
> 
> ```bash
> 
> # /cli-anything:cli-anything 
> 
> # Generate a complete CLI for GIMP (all 7 phases)
> /cli-anything:cli-anything ./gimp
> 
> 
> # Note: If your Claude Code is under 2.x, use "/cli-anything" instead.
> ```
> 
> This runs the full pipeline:
> 1. 🔍 **Analyze** — Scans source code, maps GUI actions to APIs
> 2. 📐 **Design** —

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[Agent 框架]] · [[自動化]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[karpathy--agenthub|karpathy/agenthub]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[openai--cli-toolkit|openai/cli-toolkit]]

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
> const concepts = ["CLI/TUI","Agent 框架","自動化"];
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
