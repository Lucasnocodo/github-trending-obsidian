---
repo: NanmiCoder/claude-code-haha
url: https://github.com/NanmiCoder/claude-code-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: N/A
description: "Claude Code leaked source - locally runnable version"
homepage: ""
stars: 4069
stars_per_day: 2035
forks: 4698
open_issues: 16
created: 2026-03-31
pushed_at: 2026-04-02
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
use_case: "提供本地可運行的 Claude Code 版本，支持多種 Anthropic 兼容 API。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 4
engagement: "high"
issue_close_rate: 33
repo_size_kb: 11603
readme_length: 6535
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045,2026-04-03:4069"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "claude-code-haha"
  - "NanmiCoder/claude-code-haha"
  - "提供本地可運行的 Claude Code 版本，支持多種 Anthropic 兼容 API。"
---

# claude-code-haha

**4.1k** stars · **2.0k** stars/天 · 建立 2 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/NanmiCoder--claude-code-haha");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供本地可運行的 Claude Code 版本，支持多種 Anthropic 兼容 API。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (2.0k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** High
> **適合** 需要在本地環境中運行 AI 代理並希望靈活配置 API 的開發者。
> **一句話重點** 這個專案的價值在於提供了一個可運行的本地版本，讓開發者能夠靈活地測試和使用 AI 模型。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "NanmiCoder--claude-code-haha" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的本地 AI 代理運行環境，值得投入。

> [!abstract] 核心創新
> 提供了一個基於泄露源碼修復的本地可運行版本，支持靈活的 API 接入。

## 專案簡介

Claude Code Haha 是一個基於泄露源碼修復的本地可運行版本，旨在讓用戶能夠在本地環境中運行 Claude Code。用戶可以透過配置環境變數來接入各種兼容的 API，並使用完整的 Ink TUI 交互界面進行操作。安裝過程中，使用者需要安裝 Bun 作為運行時，並通過 `bun install` 安裝所有依賴。啟動時，使用者可以選擇交互模式或無頭模式，並且支持管道輸入。這個工具的賣點在於其對於原始泄露源碼的修復，解決了多個啟動問題，並提供了完整的功能集。

技術上，它使用 TypeScript 和 React 結合 Ink 來實現終端界面，並且依賴於多個開源庫來處理 API 請求和 CLI 解析。與其他類似工具相比，如 OpenAI 的 API，Claude Code Haha 提供了更靈活的 API 端點配置，並且支持多種模型的自定義設置。使用者在使用過程中可能會遇到環境變數配置不當的問題，這會導致 API 請求失敗。這個專案目前處於 beta 階段，適合對本地 AI 代理有需求的開發者，尤其是在需要快速測試和迭代的情況下。未來可能會增加對更多 API 的支持，並改善用戶體驗。

**技術棧**：`TypeScript` · `Bun` · `React` · `Ink` · `Commander.js`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 相同的用戶體驗。
- --print 無頭模式 — 適合腳本和 CI 場景，支持單次問答。
- 支持 MCP 伺服器、插件和 Skills — 擴展性強，能夠接入多種功能。
- 自定義 API 端點和模型 — 用戶可以靈活配置 API，支持多種模型。
- 降級 Recovery CLI 模式 — 當 TUI 出現問題時，可以使用簡化版 CLI 進行操作。

## 快速開始

1. 安裝 Bun
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 安裝項目依賴
```bash
bun install
```
3. 配置環境變數
```bash
cp .env.example .env
```
4. 啟動交互模式
```bash
./bin/claude-haha
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Bun 和項目依賴",
  "./bin/claude-haha -p \"your prompt here\"",
  "# 預期輸出：根據提供的 prompt 返回相應的結果。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 4069 stars（2035/天），forks 4698（115.5%），這顯示出極高的用戶興趣。這個專案的作者 NanmiCoder 及其團隊針對 Claude Code 的泄露源碼進行了修復，提供了一個可運行的本地版本，解決了原始源碼無法運行的問題。這樣的修復在當前市場上是相對稀缺的，因為許多開發者希望能夠在本地環境中運行類似的 AI 代理。社群的反饋也促進了這個專案的快速增長，尤其是在 AI 開發者社群中。這個工具的出現正好填補了市場上對於本地可運行 AI 代理的需求，並且提供了靈活的 API 接入選項。

## 適合誰使用

**目標受眾**：需要在本地環境中運行 AI 代理並希望靈活配置 API 的開發者。

> [!example] 使用場景
> - 後端開發者用它來在本地環境中測試和調試 AI 代理，因為它支持多種 API 和模型配置，能夠快速迭代。
> - DevOps 工程師用它來集成 AI 功能到 CI/CD 流程中，因為它的無頭模式適合自動化測試和部署。
> - AI 研究者用它來探索不同的模型和 API 配置，因為它提供了靈活的環境變數設置和多種功能支持。

## 架構分析

這個專案採用 Bun 作為運行時，因為它提供了快速的啟動時間和輕量級的依賴管理。整體架構由多個模組組成，包括 CLI 主入口、TUI 主邏輯和服務層。請求生命周期中，使用者的輸入會經過 CLI 解析，然後傳遞到服務層進行 API 請求。

這樣的設計使得用戶可以靈活地切換不同的 API 端點和模型。選擇 TypeScript 和 React 結合 Ink 來實現終端界面，這樣可以利用 React 的組件化優勢來構建複雜的 UI。這個架構的代價是需要額外的學習成本來熟悉 Bun 和 Ink 的用法。

擴展性方面，這個架構支持多 Agent 模型，但在處理大量請求時可能會遇到性能瓶頸。

## 技術深入分析

Claude Code Haha 的核心技術機制是基於 TypeScript 和 React 的 Ink 來構建終端用戶界面，這使得它能夠提供豐富的交互體驗。它的請求生命周期設計允許用戶在 CLI 中輸入命令，並通過服務層發送 API 請求，這樣的設計使得用戶可以靈活地選擇不同的 API 端點。效能方面，因為使用了 Bun 作為運行時，啟動時間相對較快，但在處理高並發請求時可能會遇到瓶頸。選擇 Ink 而非傳統的終端庫，能夠利用 React 的組件化優勢，但也帶來了額外的學習成本。這個專案的依賴樹相對簡單，主要依賴於 Bun 和幾個開源庫，降低了維護的複雜度。技術風險方面，主要是依賴於 Bun 的穩定性，若未來 Bun 出現重大變更，可能會影響到專案的運行。整合方面，這個工具可以輕鬆與現有的 CI/CD 流程結合，但對於不熟悉 Bun 的開發者來說，學習成本可能會較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝步驟和範例；安裝過程順暢，但需要安裝 Bun 這一額外步驟；有良好的快速開始指南，幫助新手快速上手；文件目前僅提供英文版本，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 靈活的 API 配置，支持多種模型和端點。
> - 完整的 TUI 界面，提供良好的用戶體驗。
> - 支持無頭模式，適合自動化和 CI/CD 流程。

> [!danger] 缺點
> - 僅支持 Anthropic 協議，限制了模型的選擇。
> - 在 Windows 上部分功能不可用，影響使用體驗。
> - 需要安裝 Bun，增加了使用門檻。

> [!warning] 注意事項
> - 僅支持 Anthropic 協議，無法直接接入 OpenAI 模型。
> - 部分功能在 Windows 上不可用，如語音輸入和 Sandbox 隔離。
> - 需要安裝 Bun 這一運行時，增加了安裝步驟。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenAI/openai-api](https://github.com/OpenAI/openai-api) | OpenAI API 提供了強大的模型支持，但不支持本地運行，且配置較為固定。 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | LiteLLM 可以進行協議轉換，但需要額外的配置和代理設置。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/openai-api](https://github.com/OpenAI/openai-api) | OpenAI API 提供了強大的模型支持，但不支持本地運行，且配置較為固定。 | 如果你的團隊已經在使用 OpenAI 並且需要穩定的雲端服務，則選擇 OpenAI API 會更合適。 | medium，因為需要重新設計 API 請求的邏輯。 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | LiteLLM 可以進行協議轉換，但需要額外的配置和代理設置。 | 如果需要接入非 Anthropic 模型，且願意進行額外的配置，則選擇 LiteLLM 會更合適。 | high，因為需要重新設計整個請求流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code-haha** | **openai-api** | **litellm** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenAI API 提供了強大的模型支持，但不支持本地運行，且配置較為固定。 | LiteLLM 可以進行協議轉換，但需要額外的配置和代理設置。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 請求的邏輯。 | high，因為需要重新設計整個請求流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 OpenAI 並且需要穩定的雲端服務 | 如果需要接入非 Anthropic 模型，且願意進行額外的配 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和測試用途，不建議用於生產環境的關鍵路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 如果環境變數配置不正確，會導致 API 請求失敗。
  - 解法：確保 ANTHROPIC_BASE_URL 指向正確的 API 端點。
- [MEDIUM] 在 Windows 上部分功能不可用，可能影響使用體驗。
  - 解法：使用 macOS 或 Linux 環境運行。
- [MEDIUM] Bun 版本過低會導致某些功能無法使用。
  - 解法：升級 Bun 到最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 AI 代理開發 | 非常適合 | 提供靈活的 API 配置和本地運行能力，適合快速迭代和測試。 |
| 大型企業的生產環境 | 不適合 | 目前處於 beta 階段，穩定性和支持度不足。 |
| 個人開發者進行 AI 研究 | 適合 | 支持多種模型和 API，能夠靈活配置，適合探索性研究。 |
| 教育機構的課堂教學 | 普通 | 雖然功能強大，但需要一定的技術背景才能有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的本地 AI 代理運行環境，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：本工具需要配置 API Key，需妥善保管；依賴於外部 API，需注意安全性；在 CI/CD 中使用時需確保環境變數不被洩露。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Claude Code Haha 最常與 Bun 和 Ink 搭配使用，處於開發和測試的環節。實際整合範例是，在一個用 Bun 构建的專案中，你可以用這個工具來快速測試 AI 代理，具體做法是通過 CLI 輸入指令。支援 GitHub Actions 和其他 CI 工具的整合，但對於不熟悉 Bun 的開發者來說，學習成本可能會較高。最常見的整合問題是環境變數配置不當，這需要用戶仔細檢查配置文件。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
| Forks | 4.7k |
| Open Issues | 16 |
| Issue 解決率 | 33% (8 closed) |
| 最後推送 | 2026-04-02 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 11.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/claude-code-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 10 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@studyzy](https://github.com/studyzy) | 1 |
> | [@dhb52](https://github.com/dhb52) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/NanmiCoder/claude-code-haha)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-02）
> **活躍天數** 2 天 · **最新 commit** docs: add table of contents with anchor links to READMEs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/NanmiCoder/claude-code-haha/issues/28) | 没有宠物功能，我跑起来后发现不能识别这个SKILLS | 0 | 0 |
> | [#26](https://github.com/NanmiCoder/claude-code-haha/issues/26) | 用不了 ● undefined is not an object (evaluating 'usage.input_to | 0 | 1 |
> | [#25](https://github.com/NanmiCoder/claude-code-haha/issues/25) | Failed to install Anthropic marketplace · Will retry on next | 0 | 0 |
> | [#24](https://github.com/NanmiCoder/claude-code-haha/issues/24) | 我引用的是千问的 但是401 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Haha
> 
> 中文 | English
> 
> 基于 Claude Code 泄露源码修复的**本地可运行版本**，支持接入任意 Anthropic 兼容 API（如 MiniMax、OpenRouter 等）。
> 
> > 原始泄露源码无法直接运行。本仓库修复了启动链路中的多个阻塞问题，使完整的 Ink TUI 交互界面可以在本地工作。
> 
>   
> 
> ## 目录
> 
> - [功能](#功能)
> - [架构概览](#架构概览)
> - [快速开始](#快速开始)
> - [环境变量说明](#环境变量说明)
> - [降级模式](#降级模式)
> - [常见问题](#常见问题)
> - [相对于原始泄露源码的修复](#相对于原始泄露源码的修复)
> - [项目结构](#项目结构)
> - [技术栈](#技术栈)
> 
> ---
> 
> ## 功能
> 
> - 完整的 Ink TUI 交互界面（与官方 Claude Code 一致）
> - `--print` 无头模式（脚本/CI 场景）
> - 支持 MCP 服务器、插件、Skills
> - 支持自定义 API 端点和模型（[第三方模型使用指南](docs/third-party-models.md)）
> - 降级 Recovery CLI 模式
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
> 本项目运行依赖 [Bun](https://bun.sh)。如果你的电脑还没有安装 Bun，可以先执行下面任一方式：
> 
> ```bash
> # macOS / Linux（官方安装脚本）
> curl -fsSL https://bun.sh/install | bash
> ```
> 
> 如果在精简版 Linux 环境里提示 `unzip is required to install bun`，先安装 `unzip`：
> 
> ```bash
> # Ubuntu / Debian
> apt update && apt install -y unzip
> ```
> 
> ```bash
> # macOS（Homebrew）
> brew install bun
> ```
> 
> ```powershell
> # Windows（PowerShell）
> powershell -c "irm bun.sh/install.ps1 | iex"
> ```
> 
> 安装完成后，重新打开终端并确认：
> 
> ```bash
> bun --version
> ```
> 
> ### 2. 安装项目依赖
> 
> ```bash
> bun install
> ```
> 
> ### 3. 配置环境变量
> 
> 复制示例文件并填入你的 API Key：
> 
> ```bash
> cp .env.example .env
> ```
> 
> 编辑 `.env`（以下示例使用 [MiniMax](https://platform.minimaxi.com/subscribe/token-plan?code=1TG2Cseab2&source=link) 作为 API 提供商，也可替换为其他兼容服务）：
> 
> ```env
> # API 认证（二选一）
> ANTHROPIC_API_KEY=sk-xxx          # 标准 API Key（x-api-key 头）
> ANTHROPIC_AUTH_TOKEN=sk-xxx       # Bearer Token（Authorization 头）
> 
> # API 端点（可选，默认 Anthropic 官方）
> ANTHROPIC_BASE_URL=https://api.minimaxi.com/anthropic
> 
> # 模型配置
> ANTHROPIC_MODEL=MiniMax-M2.7-highspeed
> ANTHROPIC_DEFAULT_SONNET_MODEL=MiniMax-M2.7-highspeed
> ANTHROPIC_DEFAULT_HAIKU_MODEL=MiniMax-M2.7-highspeed
> ANTHROPIC_DEFAULT_OPUS_MODEL=MiniMax-M2.7-highspeed
> 
> # 超时（毫秒）
> API_TIMEOUT_MS=3000000
> 
> # 禁用遥测和非必要网络请求
> DISABLE_TELEMETRY=1
> CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
> ```
> 
> > **提示**：除了 `.env` 文件，你也可以通过 `~/.claude/settings.json` 的 `env` 字段配置环境变量。这与官方 Claude Code 的配置方式一致：
> >
> > ```json
> > {
> >   "env": {
> >     "ANTHROPIC_AUTH_TOKEN": "sk-xxx",
> >     "ANTHROPIC_BASE_URL": "https://api.minimaxi.com/anthropic",
> >     "ANTHROPIC_MODEL": "MiniMax-M2.7-highspeed"
> >   }
> > }
> > ```
> >
> > 配置优先级：环境变量 > `.env` 文件 > `~/.claude/settings.json`
> 
> ### 4. 启动
> 
> #### macOS / Linux
> 
> ```bash
> # 交互 TUI 模式（完整界面）
> ./bin/claude-haha
> 
> # 无头模式（单次问答）
> ./bin/claude-haha -p "your prompt here"
> 
> # 管道输入
> echo "explain this code" | ./bin/claude-haha -p
> 
> # 查看所有选项
> ./bin/claude-haha --help
> ```
> 
> #### Windows
> 
> > **前置要求**：必须安装 [Git for Windows](https://git-scm.com/download/win)（提供 Git Bash，项目内部 Shell 执行依赖它）。
> 
> Windows 下启动脚本 `bin/claude-haha` 是 bash 脚本，无法在 cmd / PowerShell 中直接运行。请使用以下方式：
> 
> **方式一：PowerShell / cmd 直接调用 Bun（推荐）**
> 
> ```powershell
> # 交互 TUI 模式
> bun --env-file=.env ./src/entrypoints/cli.tsx
> 
> # 无头模式
> bun --env-file=.env ./src/entrypoints/cli.tsx -p "your prompt here"
> 
> # 降级 Recovery CLI
> bun --env-file=.env ./src/localRecoveryCli.ts
> ```
> 
> **方式二：Git Bash 中运行**
> 
> ```bash
> # 在 Git Bash 终端中，与 macOS/Linux 用法一致
> ./bin/claude-haha
> ```
> 
> > **注意**：部分功能（语音输入、Computer Use、Sandbox 隔离等）在 Windows 上不可用，不影响核心 TUI 交互。
> 
> ---
> 
> ## 环境变量说明
> 
> | 变量 | 必填 | 说明 |
> |------|------|------|
> | `ANTHROPIC_API_KEY` | 二选一 | API Key，通过 `x-api-key` 头发送 |
> | `ANTHROPIC_AUTH_TOKEN` | 二选一 | Auth Token，通过 `Authorization: Bearer` 头发送 |
> | `ANTHROPIC_BASE_URL` | 否 | 自定义 API 端点，默认 Anthropic 官方 |
> | `ANTHROPIC_MODEL` | 否 | 默认模型 |
> | `ANTHROPIC_DEFAULT_SONNET_MODEL` | 否 | Sonnet 级别模型映射 |
> | `ANTHROPIC_DEFAULT_HAIKU_MODEL` | 否 | Haiku 级别模型映射 |
> | `ANTHROPIC_DEFAULT_OPUS_MODEL` | 否 | Opus 级别模型映射 |
> | `API_TIMEOUT_MS` | 否 | API 请求超时，默认 600000 (10min) |
> | `DISABLE_TELEMETRY` | 否 | 设为 `1` 禁用遥测 |
> | `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | 否 | 设为 `1` 禁用非必要网络请求 |
> 
> ---
> 
> ## 降级模式
> 
> 如果完整 TUI 出现问题，可以使用简化版 readline 交互模式：
> 
> ```bash
> CLAUDE_CODE_FORCE_RECOVERY_CLI=1 ./bin/claude-haha
> ```
> 
> ---
> 
> ## 相对于原始泄露源码的修复
> 
> 泄露的源码无法直接运行，主要修复了以下问题：
> 
> | 问题 | 根因 | 修复 |
> |------|------|------|
> | TUI 不启动 | 入口脚本把无参数启动路由到了 recovery CLI | 恢复走 `cli.tsx` 完整入口 |
> | 启动卡死 | `verify` skill 导入缺失的 `.md` 文件，Bun text loader 无限挂起 | 创建 stub `.md` 文件 |
> | `--print` 卡死 | `filePersistence/types.ts` 缺失 | 创建类型桩文件 |
> | `--print` 卡死 | `ultraplan/prompt.txt` 缺失 | 创建资源桩文件 |
> | **Enter 键无响应** | `modifiers-napi` native 包缺失，`isModifierPressed()` 抛异常导致 `handleEnter` 中断，`onSubmit` 永远不执行 | 加 try-catch 容错 |
> | setup 被跳过 | `preload.ts` 自动设置 `LOCAL_RECOVERY=1` 跳过全部初始化 | 移除默认设置 |
> 
> ---
> 
> ## 项目结构
> 
> ```
> bin/claude-haha          # 入口脚本
> preload.ts               # Bun preload（设置 MACRO 全局变量）
> .env.example             # 环境变量模板
> src/
> ├── entrypoints/cli.tsx  # CLI 主入口
> ├── main.tsx             # TUI 主逻辑（Commander.js + React/Ink）
> ├── localRecoveryCli.ts  # 降级 Recovery CLI
> ├── setup.ts             # 启动初始化
> ├── screens/REPL.tsx     # 交互 REPL 界面
> ├── ink/                 # Ink 终端渲染引擎
> ├── components/          # UI 组件
> ├── tools/               # Agent 工具（Bash, Edit, Grep 等）
> ├── commands/            # 斜杠命令（/commit, /review 等）
> ├── skills/              # Skill 系统
> ├── services/            # 服务层（API, MCP, OAuth 等）
> ├── hooks/               # React hooks
> └── utils/               # 工具函数
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
> ## 常见问题
> 
> ### Q: `undefined is not an object (evaluating 'usage.input_tokens')`
> 
> **原因**：`ANTHROPIC_BASE_URL` 配置不正确，API 端点返回的不是 Anthropic 协议格式的 JSON，而是 HTML 页面或其他格式。
> 
> 本项目使用 **Anthropic Messages API 协议**，`ANTHROPIC_BASE_URL` 必须指向一个兼容 Anthropic `/v1/messages` 接口的端点。Anthropic SDK 会自动在 base URL 后面拼接 `/v1/messages`，所以：
> 
> - MiniMax：`ANTHROPIC_BASE_URL=https://api.minimaxi.com/anthropic` ✅
> - OpenRouter：`ANTHROPIC_BASE_URL=https://openrouter.ai/api` ✅
> - OpenRouter 错误写法：`ANTHROPIC_BASE_URL=https://openrouter.ai/anthropic` ❌（返回 HTML）
> 
> 如果你的模型供应商只支持 OpenAI 协议，需要通过 LiteLLM 等代理做协议转换，详见 [第三方模型使用指南](docs/third-party-models.md)。
> 
> ### Q: `Cannot find package 'bundle'`
> 
> ```
> error: Cannot find package 'bundle' from '.../claude-code-haha/src/entrypoints/cli.tsx'
> ```
> 
> **原因**：Bun 版本过低，不支持项目所需的 `bun:bundle` 等内置模块。
> 
> **解决**：升级 Bun 到最新版本：
> 
> ```bash
> bun upgrade
> ```
> 
> ### Q: 怎么接入 OpenAI / DeepSeek / Ollama 等非 Anthropic 模型？
> 
> 本项目只支持 Anthropic 协议。如果模型供应商不直接支持 Anthropic 协议，需要用 [LiteLLM](https://github.com/BerriAI/litellm) 等代理做协议转换（OpenAI → Anthropic）。
> 
> 详细配置步骤请参考：[第三方模型使用指南](docs/third-party-models.md)
> 
> ---
> 
> ## Disclaimer
> 
> 本仓库基于 2026-03-31 从 Anthropic npm registry 泄露的 Claude Code 源码。所有原始源码版权归 [Anthropic](https://www.anthropic.com) 所有。仅供学习和研究用途。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[claude-code-best--claude-code|claude-code-best/claude-code]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]]

[GitHub](https://github.com/NanmiCoder/claude-code-haha)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "NanmiCoder--claude-code-haha"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "NanmiCoder--claude-code-haha"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "NanmiCoder--claude-code-haha" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "NanmiCoder--claude-code-haha"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","API 設計","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NanmiCoder--claude-code-haha" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NanmiCoder--claude-code-haha" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NanmiCoder" AND file.name != "NanmiCoder--claude-code-haha"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
> const me = dv.page("Repos/NanmiCoder--claude-code-haha");
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
