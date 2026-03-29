---
repo: larksuite/cli
url: https://github.com/larksuite/cli
owner: larksuite
owner_type: Organization
language: Go
license: MIT
description: "A command-line tool for Lark/Feishu Open Platform — built for humans and AI Agents. Covers core business domains including Messenger, Docs, Base, Sheets, Calendar, Mail, Tasks, Meetings, and more, with 200+ commands and 19 AI Agent Skills."
homepage: ""
stars: 1710
stars_per_day: 570
forks: 79
open_issues: 30
created: 2026-03-25
pushed_at: 2026-03-28
first_seen: 2026-03-29
week: "2026-W14"
month: "2026-03"
category: "CLI 工具"
subcategory: "業務管理"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-29
use_case: "提供 Lark/Feishu 的命令行工具，讓用戶和 AI 代理輕鬆操作各種業務功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-01"
contributor_count: 4
engagement: "low"
issue_close_rate: 6
repo_size_kb: 1110
readme_length: 9975
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-29"
star_history: "2026-03-29:1710"
tags:
  - github
  - "category/cli_工具"
  - "lang/go"
  - org
  - easy_install
aliases:
  - "cli"
  - "larksuite/cli"
  - "提供 Lark/Feishu 的命令行工具，讓用戶和 AI 代理輕鬆操作各種業務功能。"
---

# cli

**1.7k** stars · **570** stars/天 · 建立 3 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/larksuite--cli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.0` `easy-install`

> [!summary] 一句話摘要
> 提供 Lark/Feishu 的命令行工具，讓用戶和 AI 代理輕鬆操作各種業務功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (570 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要高效管理 Lark/Feishu 的企業團隊和開發者。
> **一句話重點** 這個工具不僅方便了人類用戶，也讓 AI 代理能夠輕鬆操作 Lark 的各種功能，顯示出未來自動化的潛力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/larksuite--cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "業務管理" && p.file.name !== "larksuite--cli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 業務管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，能夠快速提升團隊的工作效率，值得投入。

> [!abstract] 核心創新
> 提供了針對 AI 代理的專屬技能和結構化命令，優化了 Lark API 的使用體驗。

## 專案簡介

lark-cli 是一個針對 Lark/Feishu 開放平台的命令行工具，設計目的是讓人類和 AI 代理都能輕鬆操作。用戶可以透過簡單的 CLI 指令來管理日曆、郵件、文件、任務等業務功能，並且支持超過 200 條命令和 19 種 AI 代理技能。安裝後，用戶只需執行 `lark-cli config init` 來進行一次性配置，隨後就能使用各種功能，如 `lark-cli calendar +agenda` 來查看日曆事件。這個工具的設計考量了 AI 代理的需求，提供了結構化的命令和智能默認值，從而提高了操作的成功率。

技術上，lark-cli 使用 Go 和 JavaScript 開發，並依賴於多個輕量級庫，如 Cobra 和 UUID，這使得它在性能上表現良好。與其他類似工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，lark-cli 提供了更為全面的業務功能覆蓋，並且特別針對 AI 代理進行了優化。使用者在實際操作中可能會遇到一些常見問題，如會議連接失敗或 API 認證問題，但這些都可以通過官方文檔或社群獲得幫助。整體來看，這是一個穩定且功能強大的工具，適合需要高效管理 Lark/Feishu 的團隊使用。

**技術棧**：`Go 1.23` · `JavaScript` · `Python 3`

## 重點功能

- 多業務域支持 — 覆蓋日曆、郵件、文件、任務等 11 個業務域。
- 200+ 命令 — 提供超過 200 條命令，滿足各種業務需求。
- AI 代理技能 — 內建 19 種 AI 代理技能，支持自動化操作。
- OAuth 認證 — 支持完整的 OAuth 認證流程，方便用戶管理權限。
- 三層命令系統 — 提供快捷操作、API 命令和原始 API 調用三層選擇。

## 快速開始

1. 從 npm 安裝 CLI
```bash
npm install -g @larksuite/cli
```
2. 配置應用憑證
```bash
lark-cli config init
```
3. 查看日曆事件
```bash
lark-cli calendar +agenda
```

## 程式碼範例

```go
{
  "前置條件": "已安裝 lark-cli 並完成配置",
  "指令": "lark-cli calendar events instance_view --params '{\"calendar_id\":\"primary\",\"start_time\":\"1700000000\",\"end_time\":\"1700086400\"}'",
  "預期輸出": "返回指定時間範圍內的日曆事件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1710 stars（570/天），forks 79（4.6%），顯示出穩定的增長潛力。這個專案由 Lark 官方團隊開發，解決了用戶在使用 Lark API 時的繁瑣操作問題，之前的解決方案多依賴於手動調用 API，效率低下。社群的反饋和需求推動了這個工具的快速發展，特別是對於 AI 代理的支持，使得它在現有工具中脫穎而出。這個工具的出現正好契合了企業對於自動化和高效協作的需求，並且其開源性質降低了使用門檻。

## 適合誰使用

**目標受眾**：需要高效管理 Lark/Feishu 的企業團隊和開發者。

> [!example] 使用場景
> - 後端工程師用它來快速查詢日曆事件，因為可以透過簡單的 CLI 命令快速獲取需要的資訊。
> - 產品經理用它來管理任務和進度，因為能夠輕鬆創建和更新任務，並且查看任務狀態。
> - AI 代理用它來自動化發送消息和管理會議，因為提供了結構化的 API 調用，減少了繁瑣的手動操作。

## 架構分析

lark-cli 採用三層架構設計，分為快捷操作、API 命令和原始 API 調用，這樣的設計使得用戶可以根據需求選擇合適的操作層級。使用 Go 和 JavaScript 開發，確保了高效的性能和良好的可擴展性。這種設計的代價是需要用戶在初次使用時進行配置，但這樣的配置過程是互動式的，降低了使用門檻。整體架構的擴展性良好，能夠支持未來更多的業務功能和 API 接口的整合。

## 技術深入分析

lark-cli 的核心技術機制是基於 Go 和 JavaScript 開發，使用了多個輕量級的庫來支持其功能，如 Cobra 用於命令解析，UUID 用於唯一識別。這使得它在性能上表現良好，能夠快速響應用戶的請求。該工具能夠處理的資料量取決於 Lark API 的限制，通常在高並發情況下可能會出現延遲。設計上選擇了三層架構，這樣的選擇使得用戶可以根據需求選擇合適的操作層級，但也增加了初次使用的學習成本。技術風險方面，API 的穩定性和未來的變更可能會影響工具的使用體驗。整合方面，lark-cli 與主流的 CI/CD 工具兼容性良好，能夠輕鬆融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並包含範例。安裝過程順暢，無明顯的坑。提供了良好的快速入門指南，並有中文版可供使用。

## 優缺點分析

> [!success] 優點
> - 操作簡單，支持多種業務功能。
> - 專為 AI 代理設計，提升自動化操作的成功率。
> - 開源且無使用門檻，容易上手。

> [!danger] 缺點
> - 目前僅支持 Lark/Feishu，無法擴展到其他平台。
> - 對於大型團隊的使用，可能需要額外的 API 限制管理。
> - 部分功能仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 目前僅支持 Lark/Feishu 平台，無法與其他平台整合。
> - 對於大型團隊的使用，可能需要額外的 API 限制管理。
> - 部分命令在高並發情況下可能會出現延遲。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於文件同步，而 lark-cli 專注於業務管理和 API 操作。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要針對 AI 生成內容，而 lark-cli 提供更全面的業務功能支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而 lark-cli 提供全面的業務功能支持。 | 如果你的主要需求是文件同步而非業務管理，則應選擇它。 | medium，因為需要重新設計工作流程。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要針對 AI 生成內容，而 lark-cli 提供更全面的業務功能支持。 | 如果你的專案主要集中在 AI 生成內容，則應選擇 HolyClaude。 | high，因為需要重構整個操作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cli** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，而 lark-cli 提供全面的業務功能支持。 | HolyClaude 主要針對 AI 生成內容，而 lark-cli 提供更全面的業務功能支持。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程。 | high，因為需要重構整個操作流程。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是文件同步而非業務管理，則應選擇它。 | 如果你的專案主要集中在 AI 生成內容，則應選擇 HolyC |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 會議連接失敗，無法通過 CLI 加入會議
  - 解法：手動通過 Lark 客戶端加入會議
- [MEDIUM] API 認證失敗，無法執行某些命令
  - 解法：檢查 OAuth 設定，確保已授權正確的範圍
- [MEDIUM] 某些命令返回的資料格式不一致
  - 解法：查看官方文檔，確認使用正確的參數

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 功能全面且易於使用，能快速上手。 |
| 大型企業的多部門協作 | 普通 | 雖然功能強大，但可能需要額外的 API 管理。 |
| 需要高效自動化的 AI 代理 | 非常適合 | 專為 AI 代理設計，能輕鬆實現自動化操作。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠快速提升團隊的工作效率，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶的 Lark 資料，並使用 OS-native keychain 存儲憑證，依賴鏈中無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/larksuite--cli");
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
> const me = dv.page("Repos/larksuite--cli");
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
| Forks | 79 |
| Open Issues | 30 |
| Issue 解決率 | 6% (2 closed) |
| 最後推送 | 2026-03-28 |
| 建立日期 | 2026-03-25 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/larksuite/cli) |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `module` `github.com/charmbracelet/huh` `github.com/charmbracelet/lipgloss` `github.com/gofrs/flock` `github.com/google/uuid` `github.com/larksuite/oapi-sdk-go/v3` `github.com/skip2/go-qrcode` `github.com/smartystreets/goconvey` `github.com/spf13/cobra` `github.com/zalando/go-keyring` `golang.org/x/net` `golang.org/x/sys` `golang.org/x/term` `golang.org/x/text` `github.com/atotto/clipboard`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@timzhong1024](https://github.com/timzhong1024) | 2 |
> | [@liuxinyanglxy](https://github.com/liuxinyanglxy) | 2 |
> | [@schumilin](https://github.com/schumilin) | 2 |
> | [@liangshuo-1](https://github.com/liangshuo-1) | 2 |

**最新版本**：v1.0.0 (2026-03-28)

> [!info]- Release Notes
> # Changelog
> 
> All notable changes to this project will be documented in this file.
> 
> ## [v1.0.0] - 2026-03-28
> 
> ### Initial Release
> 
> The first open-source release of **Lark CLI** — the official command-line interface for [Lark/Feishu](https://www.larksuite.com/).
> 
> ### Features
> 
> #### Core Commands
> 
> - **`lark api`** — Make arbitrary Lark Open API calls directly from the terminal with flexible parameter support.
> - **`lark auth`** — Complete OAuth authentication flow, including interactive login, logout, token status, and scope management.
> - **`lark config`** — Manage CLI configuration, including `init` for guided setup and `default-as` for switching contexts.
> - **`lark schema`** — Inspect available API services and resource schemas.
> - **`lark doctor`** — Run diagnostic checks on CLI configuration and environment.
> 
> 
> #### Service Shortcuts
> 
> Built-in shortcuts for commonly used Lark APIs, enabling concise commands like `lark im send` or `lark drive upload`:
> 
> - **IM (Messaging)** — Send messages, manage chats, and more.
> - **Drive** — Upload, download, and manage cloud documents.
> - **Docs** — Work with Lark documents.
> - **Sheets** — Interact with spreadsheets.
> - **Base (Bitable)** — Manage multi-dimensional tables.

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量約 30，解決率約 6%。
**連結**：[文件](https://www.larksuite.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-03-28）
> **活躍天數** 1 天 · **最新 commit** docs: rename user-facing Bitable references to Base (#11)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/larksuite/cli/issues/1) | Can I join the meeting via CLI? `enhancement` | 2 | 1 |
> | [#42](https://github.com/larksuite/cli/issues/42) | 希望能支持飞书审批 | 0 | 0 |
> | [#41](https://github.com/larksuite/cli/issues/41) | lark-cli api --as bot ignored inside pipe (while read loop) | 0 | 0 |
> | [#39](https://github.com/larksuite/cli/issues/39) | 在群里发消息一直调试不成功 | 0 | 1 |
> | [#38](https://github.com/larksuite/cli/issues/38) | Feature request: 目前只支持飞书任务，不支持飞书项目，希望能支持飞书项目的功能 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # lark-cli
> 
> [](https://opensource.org/licenses/MIT)
> [](https://go.dev/)
> [](https://www.npmjs.com/package/@larksuite/cli)
> 
> [中文版](./README.zh.md) | [English](./README.md)
> 
> A command-line tool for [Lark/Feishu](https://www.larksuite.com/) Open Platform — built for humans and AI Agents. Covers core business domains including Messenger, Docs, Base, Sheets, Calendar, Mail, Tasks, Meetings, and more, with 200+ commands and 19 AI Agent [Skills](./skills/).
> 
> [Install](#installation--quick-start) · [AI Agent Skills](#agent-skills) · [Auth](#authentication) · [Commands](#three-layer-command-system) · [Advanced](#advanced-usage) · [Security](#security--risk-warnings-read-before-use) · [Contributing](#contributing)
> 
> 
> ## Installation & Quick Start
> 
> 
> ### Quick Start (Human Users)
> 
> > **Note for AI assistants:** If you are an AI Agent helping the user with installation, jump directly to [Quick Start (AI Agent)](#quick-start-ai-agent), which contains all the steps you need to complete.
> 
> #### Install
> 
> Choose **one** of the following methods:
> 
> **Option 1 — From npm (recommended):**
> 
> ```bash
> 
> # Install CLI
> npm install -g @larksuite/cli
> 
> 
> # Install CLI SKILL (required)
> npx skills add larksuite/cli -y -g
> ```
> 
> **Option 2 — From source:**
> 
> Requires Go `v1.23`+ and Python 3.
> 
> ```bash
> git clone https://github.com/larksuite/cli.git
> cd cli
> make install
> 
> 
> # Install CLI SKILL (required)
> npx skills add larksuite/cli -y -g
> ```
> 
> #### Configure & Use
> 
> ```bash
> 
> # 1. Configure app credentials (one-time, interactive guided setup)
> lark-cli config init
> 
> 
> ## Quick Start (AI Agent)
> 
> > The following steps are for AI Agents. Some steps require the user to complete actions in a browser.
> 
> **Step 1 — Install**
> 
> ```bash
> 
> # Install CLI
> npm install -g @larksuite/cli
> 
> 
> # Install CLI SKILL (required)
> npx skills add larksuite/cli -y -g
> ```
> 
> **Step 2 — Configure app credentials**
> 
> > Run this command in the background. It will output an authorization URL — extract it and send it to the user. The command exits automatically after the user completes the setup in the browser.
> 
> ```bash
> lark-cli config init --new
> ```
> 
> **Step 3 — Login**
> 
> > Same as above: run in the background, extract the authorization URL and send it to the user.
> 
> ```bash
> lark-cli auth login --recommend
> ```
> 
> **Step 4 — Verify**
> 
> ```bash
> lark-cli auth status
> ```
> 
> 
> ## Advanced Usage
> 
> 
> ## Features
> 
> | Category      | Capabilities                                                                        |
> | ------------- | ----------------------------------------------------------------------------------- |
> | 📅 Calendar   | View agenda, create events, invite attendees, check free/busy status, time suggestions |
> | 💬 Messenger  | Send/reply messages, create and manage group chats, view chat history & threads, search messages, download media |
> | 📄 Docs       | Create, read, update, and search documents, read/write media & whiteboards          |
> | 📁 Drive      | Upload and download files, search docs & wiki, manage comments                      |
> | 📊 Base       | Create and manage tables, fields, records, views, dashboards, data aggregation & analytics |
> | 📈 Sheets     | Create, read, write, append, find, and export spreadsheet data                      |
> | ✅ Tasks      | Create, query, update, and complete tasks; manage task lists, subtasks, comments & reminders |
> | 📚 Wiki       | Create and manage knowledge spaces, nodes, and documents                            |
> | 👤 Contact    | Search users by name/email/phone, get user profiles                                 |
> | 📧 Mail       | Browse, search, read emails, send, reply, forward, manage drafts, watch new mail    |
> | 🎥 Meetings   | Search meeting records, query meeting minutes & recordings                          |
> 
> 
> ### 2. API Commands
> 
> Auto-generated from Lark OAPI metadata, curated through evaluation and quality gates — 100+ commands mapped 1:1 to platform endpoints.
> 
> ```bash
> lark-cli calendar calendars list
> lark-cli calendar events instance_view --params '{"calendar_id":"primary","start_time":"1700000000","end_time":"1700086400"}'
> ```
> 
> 
> ### 3. Raw API Calls
> 
> Call any Lark Open Platform endpoint directly, covering 2500+ APIs.
> 
> ```bash
> lark-cli api GET /open-apis/calendar/v4/calendars
> lark-cli api POST /open-apis/im/v1/messages --params '{"receive_id_type":"chat_id"}' --body '{"receive_id":"oc_xxx","msg_type":"text","content":"{\"text\":\"Hello\"}"}'
> ```
> 
> 
> ## Why lark-cli?
> 
> - **Agent-Native Design** — 19 structured [Skills](./skills/) out of the box, compatible with popular AI tools — Agents can operate Lark with zero extra setup
> - **Wide Coverage** — 11 business domains, 200+ curated commands, 19 AI Agent [Skills](./skills/)
> - **AI-Friendly & Optimized** — Every command is tested with real Agents, featuring concise parameters, smart defaults, and structured output to maximize Agent call success rates
> - **Open Source, Zero Barriers** — MIT license, ready to use, just `npm install`
> - **Up and Running in 3 Minutes** — One-click app creation, interactive login, from install to first API call in just 3 steps
> - **Secure & Controllable** — Input injection protection, terminal output sanitization, OS-native keychain credential storage
> - **Three-Layer Architecture** — Shortcuts (human & AI friendly) → API Commands (platform-synced) → Raw API (full coverage), choose the right granularity
> 
> 
> ### Requirements
> 
> Before you start, make sure you have:
> 
> - Node.js (`npm`/`npx`)
> - Go `v1.23`+ and Python 3 (only required for building from source)
> 
> 
> # 2. Log in (--recommend auto-selects commonly used scopes)
> lark-cli auth login --recommend
> 
> 
> # 3. Start using
> lark-cli calendar +agenda
> ```
> 
> 
> ## Agent Skills
> 
> | Skill                           | Description                                                                           |
> | ------------------------------- | ------------------------------------------------------------------------------------- |
> | `lark-shared`                   | App config, auth login, identity switching, scope management, security rules (auto-loaded by all other skills) |
> | `lark-calendar`                 | Calendar events, agenda view, free/busy queries, time suggestions                     |
> | `lark-im`                       | Send/reply messages, group chat management, message search, upload/download images & files, reactions |
> | `lark-doc`                      | Create, read, update, search documents (Markdown-based)                               |
> | `lark-drive`                    | Upload, download files, manage permissions & comments                                 |
> | `lark-sheets`                   | Create, read, write, append, find, export spreadsheets                                |
> | `lark-base`                     | Tables, fields, records, views, dashboards, data aggregation & analytics              |
> | `lark-task`                     | Tasks, task lists, subtasks, reminders, member assignment                              |
> | `lark-mail`                     | Browse, search, read emails, send, reply, forward, draft management, watch new mail   |
> | `lark-contact`                  | Search users by name/email/phone, get user profiles                                   |
> | `lark-wiki`                     | Knowledge spaces, nodes, documents                                                    |
> | `lark-event`                    | Real-time event subscriptions (WebSocket), regex routing & agent-friendly format       |
> | `lark-vc`                       | Search meeting records, query meeting minutes (summary, todos, transcript)             |
> | `lark-whiteboard`               | Whiteboard/chart DSL rendering                                                        |
> | `lark-minutes`                  | Minutes metadata & AI artifacts (summary, todos, chapters)                            |
> | `lark-openapi-explorer`         | Explore underlying APIs from official docs                                            |
> | `lark-skill-maker`              | Custom skill creation framework  

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Narcooo--inkos|Narcooo/inkos]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/larksuite/cli)

## 相關收錄

> [!note]- 直接競品（同子分類：業務管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "業務管理" AND file.name != "larksuite--cli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "larksuite--cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "larksuite--cli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "larksuite--cli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "larksuite--cli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/larksuite--cli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "larksuite--cli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "larksuite" AND file.name != "larksuite--cli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/larksuite--cli");
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
> const me = dv.page("Repos/larksuite--cli");
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
> const me = dv.page("Repos/larksuite--cli");
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
> const me = dv.page("Repos/larksuite--cli");
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
> const me = dv.page("Repos/larksuite--cli");
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

> **2026-03-29** — 首次收錄
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

- [[2026-03-29|2026-03-29]] — 首次收錄，1.7k stars
