---
repo: NanmiCoder/cc-haha
url: https://github.com/NanmiCoder/cc-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Claude Code 泄露源码 - 本地可运行版本（附带核心模块解析）"
homepage: "https://claudecode-haha.relakkesyang.org/"
stars: 5250
stars_per_day: 875
forks: 5738
open_issues: 23
created: 2026-03-31
pushed_at: 2026-04-06
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供本地可運行的 Claude Code 版本，解決原始碼無法啟動的問題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 5
engagement: "high"
issue_close_rate: 39
repo_size_kb: 69892
readme_length: 3570
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045,2026-04-03:4069,2026-04-04:4548,2026-04-05:4892,2026-04-06:5070,2026-04-07:5250"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "cc-haha"
  - "NanmiCoder/cc-haha"
  - "提供本地可運行的 Claude Code 版本，解決原始碼無法啟動的問題。"
---

# cc-haha

**5.3k** stars · **875** stars/天 · 建立 6 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/NanmiCoder--cc-haha");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供本地可運行的 Claude Code 版本，解決原始碼無法啟動的問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (875 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在本地運行 AI 模型並自定義 API 的開發者和團隊。
> **一句話重點** 這個專案不僅提供了本地運行的能力，還在多代理和記憶系統上展現了強大的擴展性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "NanmiCoder--cc-haha" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的本地運行能力，值得一試。

> [!abstract] 核心創新
> 這個專案提供了完整的本地運行版本，並解決了原始碼無法啟動的問題。

## 專案簡介

這個專案是基於 Claude Code 泄露的源碼，修復了多個啟動問題，讓用戶能在本地運行完整的 Ink TUI 交互界面。用戶可以接入任何兼容的 Anthropic API，並且支持無頭模式，適合自動化腳本和 CI 環境。主要功能包括記憶系統，支持跨會話持久化記憶，以及多代理系統，允許並行任務和團隊協作。這些設計使得用戶能夠靈活地擴展功能，並且通過 Telegram、Discord 等即時通訊工具遠程控制代理。CLI 模式的降級恢復功能也為用戶提供了額外的安全性。

這個工具的賣點在於其完整的功能和靈活性，特別適合需要自定義 API 和模型的開發者。技術上，專案使用了 Bun 作為運行時，並且依賴於多個現代 JavaScript 庫，如 Ink 和 Commander.js，這使得它在性能和可擴展性上表現良好。與其他類似工具相比，這個專案不僅支持多種 API，還提供了更為豐富的功能擴展性，尤其在多代理和記憶系統上有顯著優勢。使用者在實際運行中可能會遇到 API 錯誤或啟動問題，這些都在熱門 Issues 中有所反映。這個專案目前處於活躍開發階段，適合中小型團隊進行實驗和開發，未來可能會進一步增強功能和穩定性。

**技術棧**：`Bun` · `TypeScript` · `React` · `Ink` · `Commander.js` · `Anthropic SDK`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 一致的用戶體驗。
- --print 無頭模式 — 支持在腳本和 CI 環境中運行。
- 記憶系統 — 跨會話持久化記憶，增強用戶體驗。
- 多 Agent 系統 — 允許並行任務和團隊協作，提升工作效率。
- 支持自定義 API 端點和模型 — 提供靈活的擴展性。
- 降級 Recovery CLI 模式 — 提供額外的安全性和穩定性。

## 快速開始

1. 安裝 Bun
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 安裝依賴並配置
```bash
bun install; cp .env.example .env
```
3. 啟動交互模式
```bash
./bin/claude-haha
```

## 程式碼範例

```ts
[
  "# 前置條件：安裝 Bun",
  "./bin/claude-haha                          # 交互 TUI 模式",
  "./bin/claude-haha -p \"your prompt here\"    # 無头模式",
  "./bin/claude-haha --help                   # 查看所有选项"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 5250 stars（875/天），forks 5738（109.3%），顯示出極高的用戶興趣。作者 NanmiCoder 和其他貢獻者在開源社群中活躍，這個專案解決了原始 Claude Code 源碼無法直接運行的問題，之前的解決方案往往需要較高的技術門檻或缺乏靈活性。近期的社群討論和需求推動了這個專案的快速增長，特別是在開發者對於本地運行 AI 模型的需求上升的背景下。高達 109.3% 的 forks/stars 比率顯示許多人在實際修改和使用這個專案，這是非常高的活躍度指標。

## 適合誰使用

**目標受眾**：需要在本地運行 AI 模型並自定義 API 的開發者和團隊。

> [!example] 使用場景
> - AI 開發者用它來在本地環境中運行 Claude Code，因為這樣可以避免依賴雲端服務，並且能夠自定義 API。
> - 系統管理員用它來自動化日常任務，因為無頭模式支持在 CI/CD 環境中運行，提升了工作效率。
> - 團隊協作成員用它來實現多代理系統，因為這樣可以並行處理多個任務，提升團隊的工作效率。

## 架構分析

這個專案採用了 Bun 作為運行時，這使得它在性能上有明顯優勢，因為 Bun 的啟動速度和執行效率都優於 Node.js。整體架構上，專案使用了 Ink 來構建終端 UI，這樣可以提供更好的用戶交互體驗。請求的生命周期管理使用了 Commander.js，這讓命令行參數的解析變得簡單。

多代理架構允許用戶同時運行多個代理，這在處理並行任務時非常有效。選擇這些技術的代價在於需要用戶安裝 Bun，這對於某些用戶來說可能增加了入門的難度。未來在擴展性方面，這個架構能夠支持更多的插件和功能，但也可能面臨性能瓶頸，特別是在高並發的情況下。

## 技術深入分析

專案的核心技術機制是基於 Bun 的運行時，這使得它在啟動速度和執行效率上優於傳統的 Node.js 應用。使用 Ink 構建的終端 UI 提供了良好的用戶交互體驗，並且支持多種命令行參數。專案的記憶系統允許用戶在多次會話中持久化數據，這對於需要長期記錄的應用場景非常重要。多代理系統的設計使得用戶能夠同時處理多個任務，這在團隊協作中尤為重要。選擇這些技術的代價在於需要用戶安裝 Bun，這對於某些用戶來說可能增加了入門的難度。未來在擴展性方面，這個架構能夠支持更多的插件和功能，但也可能面臨性能瓶頸，特別是在高並發的情況下。整合到現有的 CI/CD pipeline 中相對簡單，因為它支持無頭模式，這使得它能夠輕鬆地與現有的自動化工具鏈配合使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用指南，對新手友好。安裝過程中需要安裝 Bun，但整體流程順暢。文檔中有針對環境變數的詳細說明，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種 API 和模型，靈活性高。
> - 完整的交互界面，提升用戶體驗。
> - 多代理系統支持並行任務，提升效率。

> [!danger] 缺點
> - 需要安裝 Bun，增加了使用門檻。
> - 在高負載下可能會出現性能問題。
> - Windows 用戶需要額外的配置。

> [!warning] 注意事項
> - 需要安裝 Bun 作為運行時環境。
> - 目前僅支持 Linux 和 macOS，Windows 用戶需安裝 Git for Windows。
> - 記憶系統的性能可能會受到存儲方式的影響。
> - 在高負載情況下，可能會出現 API 錯誤或延遲。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於數據同步，而本專案則提供完整的 AI 交互界面。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | MiniMax-AI 提供的技能擴展較少，而本專案支持多種插件和自定義工作流。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要針對特定功能進行封裝，而本專案則提供更全面的功能和靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Claude AI | Claude AI 提供了雲端服務，而本專案則支持本地運行，讓用戶能夠更靈活地控制環境。 | 如果需要雲端計算資源和更高的可擴展性，則應選擇 Claude AI。 | medium，因為需要重新配置 API 和環境。 |
| OpenAI GPT | OpenAI GPT 提供了強大的模型，但主要依賴於雲端，而本專案則支持本地運行，適合對隱私有要求的用戶。 | 如果需要使用 OpenAI 的強大模型並且不介意雲端依賴，則應選擇 OpenAI GPT。 | high，因為需要重構應用邏輯以適應不同的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cc-haha** | **Claude AI** | **OpenAI GPT** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude AI 提供了雲端服務，而本專案則支持本地運行，讓用戶能夠更靈活地控制環境。 | OpenAI GPT 提供了強大的模型，但主要依賴於雲端，而本專案則支持本地運行，適合對隱私有要求的用戶。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 和環境。 | high，因為需要重構應用邏輯以適應不同的 API。 |
> | 適用場景 | 主要場景 | 如果需要雲端計算資源和更高的可擴展性，則應選擇 Claude | 如果需要使用 OpenAI 的強大模型並且不介意雲端依賴，則 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和實驗，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載下可能會出現 API 錯誤，導致無法正常啟動。
  - 解法：減少同時請求數量，或使用無頭模式。
- [MEDIUM] Windows 環境下需要安裝 Git for Windows，否則無法啟動。
  - 解法：確保安裝 Git for Windows，並在 PowerShell 中運行。
- [MEDIUM] 記憶系統的性能可能會受到存儲方式的影響，導致延遲。
  - 解法：使用快速的存儲解決方案，如 SSD。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要本地運行 AI 模型 | 非常適合 | 提供了靈活的 API 接入和多代理支持，適合團隊協作。 |
| 個人開發者想要自動化日常任務 | 適合 | 無頭模式支持在 CI/CD 環境中運行，提升了工作效率。 |
| 大型企業需要高可用的雲端服務 | 不適合 | 目前仍處於 alpha 階段，穩定性不足，不適合生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的本地運行能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，且不存取敏感資料。依賴的庫大多為知名開源項目，安全性較高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
| Forks | 5.7k |
| Open Issues | 23 |
| Issue 解決率 | 39% (15 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://claudecode-haha.relakkesyang.org/) |
| Repo 大小 | 68.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/cc-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 40 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@studyzy](https://github.com/studyzy) | 1 |
> | [@dhb52](https://github.com/dhb52) | 1 |
> | [@houseyyyy](https://github.com/houseyyyy) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，經常有新的問題和解決方案討論。
**連結**：[文件](https://claudecode-haha.relakkesyang.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-05）
> **活躍天數** 2 天 · **最新 commit** fix: unify anchor IDs between VitePress and GitHub with custom slugify

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#43](https://github.com/NanmiCoder/cc-haha/issues/43) | api 503错误咋解决 `question` | 1 | 2 |
> | [#30](https://github.com/NanmiCoder/cc-haha/issues/30) | 从0到1完整启动本项目的教程在此！ | 1 | 9 |
> | [#45](https://github.com/NanmiCoder/cc-haha/issues/45) | [BUG] `bug` | 0 | 2 |
> | [#42](https://github.com/NanmiCoder/cc-haha/issues/42) | [BUG] `bug` | 0 | 1 |
> | [#41](https://github.com/NanmiCoder/cc-haha/issues/41) | 401 {"error":{"code":402,"message":"纳米币余额不足","type":"invalid `question` | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Haha
> 
>   
> 
> [](https://github.com/NanmiCoder/cc-haha/stargazers)
> [](https://github.com/NanmiCoder/cc-haha/network/members)
> [](https://github.com/NanmiCoder/cc-haha/issues)
> [](https://github.com/NanmiCoder/cc-haha/pulls)
> [](https://github.com/NanmiCoder/cc-haha/blob/main/LICENSE)
> [](README.md)
> [](README.en.md)
> [](https://claudecode-haha.relakkesyang.org)
> 
> 基于 Claude Code 泄露源码修复的**本地可运行版本**，支持接入任意 Anthropic 兼容 API（如 MiniMax、OpenRouter 等）。
> 
> > 原始泄露源码无法直接运行。本仓库修复了启动链路中的多个阻塞问题，使完整的 Ink TUI 交互界面可以在本地工作。
> 
>   功能 · 架构概览 · 快速开始 · 环境变量 · FAQ · 全局使用 · 更多文档
> 
> ---
> 
> ## 功能
> 
> - 完整的 Ink TUI 交互界面（与官方 Claude Code 一致）
> - `--print` 无头模式（脚本/CI 场景）
> - 支持 MCP 服务器、插件、Skills
> - 支持自定义 API 端点和模型（[第三方模型使用指南](docs/guide/third-party-models.md)）
> - **记忆系统**（跨会话持久化记忆）— [使用指南](docs/memory/01-usage-guide.md)
> - **多 Agent 系统**（多代理编排、并行任务、Teams 协作）— [使用指南](docs/agent/01-usage-guide.md) | [实现原理](docs/agent/02-implementation.md)
> - **Skills 系统**（可扩展能力插件、自定义工作流）— [使用指南](docs/skills/01-usage-guide.md) | [实现原理](docs/skills/02-implementation.md)
> - **Channel 系统**（通过 Telegram/飞书/Discord 等 IM 远程控制 Agent）— [架构解析](docs/channel/01-channel-system.md)
> - **Computer Use 桌面控制** — [功能指南](docs/features/computer-use.md) | [架构解析](docs/features/computer-use-architecture.md)
> - 降级 Recovery CLI 模式（`CLAUDE_CODE_FORCE_RECOVERY_CLI=1 ./bin/claude-haha`）
> 
> ---
> 
> ## 架构概览
> 
>   
>     整体架构
>     请求生命周期
>     工具系统
>     多 Agent 架构
>   
>   
>     终端 UI
>     权限与安全
>     服务层
>     状态与数据流
>   
> 
> ---
> 
> ## 快速开始
> 
> ### 1. 安装 Bun
> 
> ```bash
> # macOS / Linux
> curl -fsSL https://bun.sh/install | bash
> 
> # macOS (Homebrew)
> brew install bun
> 
> # Windows (PowerShell)
> powershell -c "irm bun.sh/install.ps1 | iex"
> ```
> 
> > 精简版 Linux 如提示 `unzip is required`，先运行 `apt update && apt install -y unzip`
> 
> ### 2. 安装依赖并配置
> 
> ```bash
> bun install
> cp .env.example .env
> # 编辑 .env 填入你的 API Key，详见 docs/guide/env-vars.md
> ```
> 
> ### 3. 启动
> 
> #### macOS / Linux
> 
> ```bash
> ./bin/claude-haha                          # 交互 TUI 模式
> ./bin/claude-haha -p "your prompt here"    # 无头模式
> ./bin/claude-haha --help                   # 查看所有选项
> ```
> 
> #### Windows
> 
> > **前置要求**：必须安装 [Git for Windows](https://git-scm.com/download/win)
> 
> ```powershell
> # PowerShell / cmd 直接调用 Bun
> bun --env-file=.env ./src/entrypoints/cli.tsx
> 
> # 或在 Git Bash 中运行
> ./bin/claude-haha
> ```
> 
> ### 4. 全局使用（可选）
> 
> 将 `bin/` 加入 PATH 后可在任意目录启动，详见 [全局使用指南](docs/guide/global-usage.md)：
> 
> ```bash
> export PATH="$HOME/path/to/claude-code-haha/bin:$PATH"
> ```
> 
> ---
> 
> ## 技术栈
> 
> | 类别 | 技术 |
> |------|------|
> | 运行时 | [Bun](https://bun.sh) |
> | 语言 | TypeScript |
> | 终端 UI | React + [Ink](https://github.com/vadimdemedes/ink) |
> | CLI 解析 | Commander.js |
> | API | Anthropic SDK |
> | 协议 | MCP, LSP |
> 
> ---
> 
> ## 更多文档
> 
> | 文档 | 说明 |
> |------|------|
> | [环境变量](docs/guide/env-vars.md) | 完整环境变量参考和配置方式 |
> | [第三方模型](docs/guide/third-party-models.md) | 接入 OpenAI / DeepSeek / Ollama 等非 Anthropic 模型 |
> | [记忆系统](docs/memory/01-usage-guide.md) | 跨会话持久化记忆的使用与实现 |
> | [多 Agent 系统](docs/agent/01-usage-guide.md) | 多代理编排、并行任务执行与 Teams 协作 |
> | [Skills 系统](docs/skills/01-usage-guide.md) | 可扩展能力插件、自定义工作流与条件激活 |
> | [Channel 系统](docs/channel/01-channel-system.md) | 通过 Telegram/飞书/Discord 等 IM 平台远程控制 Agent |
> | [Computer Use](docs/features/computer-use.md) | 桌面控制功能（截屏、鼠标、键盘）— [架构解析](docs/features/computer-use-architecture.md) |
> | [全局使用](docs/guide/global-usage.md) | 在任意目录启动 claude-haha |
> | [常见问题](docs/guide/faq.md) | 常见错误排查 |
> | [源码修复记录](docs/reference/fixes.md) | 相对于原始泄露源码的修复内容 |
> | [项目结构](docs/reference/project-structure.md) | 代码目录结构说明 |
> 
> ---
> 
> ## Disclaimer
> 
> 本仓库基于 2026-03-31 从 Anthropic npm registry 泄露的 Claude Code 源码。所有原始源码版权归 [Anthropic](https://www.anthropic.com) 所有。仅供学习和研究用途。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]]

[GitHub](https://github.com/NanmiCoder/cc-haha) · [官方網站](https://claudecode-haha.relakkesyang.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "NanmiCoder--cc-haha" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","多模態","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NanmiCoder--cc-haha" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NanmiCoder--cc-haha" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NanmiCoder" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-02|2026-04-02]] — 首次收錄，3.0k stars
