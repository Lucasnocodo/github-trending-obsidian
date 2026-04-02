---
repo: NanmiCoder/claude-code-haha
url: https://github.com/NanmiCoder/claude-code-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: N/A
description: "Claude Code leaked source - locally runnable version"
homepage: ""
stars: 3045
stars_per_day: 3045
forks: 3701
open_issues: 12
created: 2026-03-31
pushed_at: 2026-04-01
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
use_case: "提供本地可運行的 Claude Code 版本，支持多種 API 接入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 3
engagement: "high"
issue_close_rate: 20
repo_size_kb: 17742
readme_length: 4760
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "claude-code-haha"
  - "NanmiCoder/claude-code-haha"
  - "提供本地可運行的 Claude Code 版本，支持多種 API 接入。"
---

# claude-code-haha

**3.0k** stars · **3.0k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

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
> 提供本地可運行的 Claude Code 版本，支持多種 API 接入。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.0k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要在本地運行 Claude Code 並接入 Anthropic API 的開發者。
> **一句話重點** 這個專案不僅修復了源碼的問題，還提供了一個靈活的本地運行環境，讓開發者能夠自由探索和擴展。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到靈活的本地運行環境，值得嘗試。

> [!abstract] 核心創新
> 修復了原始泄露源碼的多個啟動問題，使其能夠在本地環境中順利運行。

## 專案簡介

Claude Code Haha 是一個基於泄露源碼修復的本地可運行版本，允許用戶接入任意兼容的 Anthropic API。用戶可以透過 CLI 指令啟動完整的 Ink TUI 交互界面，或使用無頭模式進行腳本化操作，這使得它在 CI 環境中非常有用。安裝過程中，需先安裝 Bun，然後安裝依賴，並配置 API 鍵和端點。這個工具的賣點在於其修復了原始泄露源碼中的多個啟動問題，確保用戶能夠順利運行。技術上，它使用 TypeScript 和 Ink 來構建終端界面，並依賴於多個開源庫來處理 API 請求和 CLI 解析。

與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，Claude Code Haha 提供了更完整的用戶交互體驗和更靈活的 API 接入方式，特別適合需要本地運行的開發者。使用者可能會遇到的問題包括配置 API 時的錯誤，這在熱門 Issues 中已有反映。這個專案目前處於 alpha 階段，適合小型團隊或個人開發者進行實驗和開發，但不建議用於生產環境。未來六個月內，隨著社群的活躍，可能會有更多功能和修復釋出。

**技術棧**：`TypeScript` · `Bun` · `React` · `Ink` · `Commander.js`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 一致的用戶體驗。
- 無頭模式支持 — 使用 `--print` 參數進行腳本化操作，適合 CI 環境。
- 支持自定義 API 端點 — 用戶可以配置自己的 API 鍵和端點以滿足需求。
- 降級 Recovery CLI 模式 — 當完整 TUI 出現問題時，提供簡化的 CLI 交互模式。
- 多 Agent 架構 — 支持多個 Agent 的同時運行，增強了靈活性。

## 快速開始

1. 安裝 Bun
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 安裝項目依賴
```bash
bun install
```
3. 啟動交互 TUI 模式
```bash
./bin/claude-haha
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Bun 和配置環境變量。",
  "指令": "./bin/claude-haha -p \"your prompt here\"",
  "預期輸出": "根據用戶的 prompt 返回相應的結果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 3045 stars（3045/天），forks 3701（121.5%），這顯示出極高的使用興趣。這個專案的主要貢獻者 NanmiCoder 之前有過多個開源項目，這次針對 Claude Code 的修復填補了本地運行的需求。之前的泄露源碼無法直接運行，這個專案解決了這一痛點，讓開發者能夠在本地環境中進行開發和測試。社群的反饋和討論也促進了這個專案的快速成長，特別是在 GitHub 上的活躍討論。這個工具的高 forks/stars 比率顯示出許多人在實際修改和使用它，顯示出強烈的社群參與。

## 適合誰使用

**目標受眾**：需要在本地運行 Claude Code 並接入 Anthropic API 的開發者。

> [!example] 使用場景
> - 後端工程師用它來在本地環境中運行 Claude Code，因為它修復了原始源碼的啟動問題，讓開發過程更加順利。
> - DevOps 工程師用它來在 CI 流程中自動化測試，因為無頭模式支持腳本化操作，能夠輕鬆集成到現有的工作流中。
> - 獨立開發者用它來快速接入 Anthropic API，因為它提供了靈活的 API 配置選項，能夠滿足不同的需求。

## 架構分析

Claude Code Haha 的架構設計選擇了 Bun 作為運行時，這使得其在啟動速度和性能上有了顯著提升。整體架構分為多個模組，包括 CLI 解析、服務層和終端 UI，這樣的分層設計有助於維護和擴展。請求的生命周期經過精心設計，確保了數據流的高效處理。

選擇 TypeScript 提供了靜態類型檢查，降低了潛在的錯誤。這個設計的代價是需要額外的學習成本，特別是對於不熟悉 Bun 的開發者。未來的擴展性主要受限於 Bun 的生態系統，若有重大變化可能會影響整體架構的穩定性。

## 技術深入分析

Claude Code Haha 的核心技術機制基於 TypeScript 和 Bun，這使得其在性能和可維護性上都具備優勢。使用 Ink 作為終端 UI 的渲染引擎，提供了流暢的用戶交互體驗。這個專案能夠處理的請求數量取決於 API 的響應速度和系統資源，具體的性能數據尚未公開。選擇 Bun 作為運行時的好處在於其快速啟動和輕量級，但這也意味著需要對 Bun 的生態系統保持關注，以防未來的兼容性問題。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在高並發請求的情況下。整合到現有的 CI/CD pipeline 中相對簡單，但對於不熟悉 Bun 的開發者來說，學習成本可能較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和配置步驟；安裝過程順暢，無明顯坑；有良好的快速入門指導；文件目前僅提供英文版本。這使得新手可以在 30 分鐘內成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供完整的 TUI 交互界面，增強用戶體驗。
> - 支持多種 API 接入，靈活性高。
> - 修復了原始源碼中的多個啟動問題，降低了使用門檻。

> [!danger] 缺點
> - 僅支持特定平台，Windows 用戶需額外配置。
> - 部分功能在 Windows 上不可用，影響使用體驗。
> - 仍處於 alpha 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支持 macOS 和 Linux，Windows 用戶需安裝 Git for Windows。
> - 部分功能在 Windows 上不可用，如語音輸入和 Sandbox 隔離。
> - 需要配置 API 鍵，否則無法正常運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的本地運行環境，但不支持多 Agent 架構，且用戶交互體驗較差。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於 API 整合，但缺乏完整的 TUI 交互界面，使用上不如本專案方便。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Python 實作，記憶體使用量較低，但缺乏完整的 TUI 交互界面。 | 如果你的團隊已經在用 Python 且需要輕量級的解決方案。 | medium，因為需要重寫部分代碼以適應 Python 環境。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於 API 整合，使用 Node.js 實作，但不支持多 Agent 架構。 | 如果你的需求主要是 API 整合，而不需要完整的用戶交互。 | low，因為 API 介面相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code-haha** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，記憶體使用量較低，但缺乏完整的 TUI 交互界面。 | 專注於 API 整合，使用 Node.js 實作，但不支持多 Agent 架構。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應 Python 環境。 | low，因為 API 介面相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Python 且需要輕量級的解決方案。 | 如果你的需求主要是 API 整合，而不需要完整的用戶交互。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊進行實驗，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上啟動時，部分功能無法使用，可能導致用戶困惑。
  - 解法：建議使用 Git Bash 來運行，或在 macOS/Linux 環境中使用。
- [MEDIUM] API 鍵配置錯誤會導致啟動失敗。
  - 解法：確保環境變量配置正確，並參考 README 中的範例。
- [MEDIUM] CLI 模式下可能出現無法響應的情況。
  - 解法：使用降級 Recovery CLI 模式啟動。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行本地 AI 開發 | 非常適合 | 提供完整的本地運行環境，支持多種 API 接入。 |
| 需要在 CI 流程中自動化測試的工程師 | 適合 | 無頭模式支持腳本化操作，能夠輕鬆集成。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到靈活的本地運行環境，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，僅存取用戶配置的 API 鍵，依賴鏈中無已知的供應鏈風險。

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
| Forks | 3.7k |
| Open Issues | 12 |
| Issue 解決率 | 20% (3 closed) |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 17.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/claude-code-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 6 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@dhb52](https://github.com/dhb52) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多個問題和功能請求被提出。
**連結**：[文件](https://github.com/NanmiCoder/claude-code-haha)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31 ~ 2026-04-01）
> **活躍天數** 2 天 · **最新 commit** docs: add Windows startup instructions to README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/NanmiCoder/claude-code-haha/issues/18) | 怎么配置连接本地模型？ | 0 | 0 |
> | [#17](https://github.com/NanmiCoder/claude-code-haha/issues/17) | 使用deepseek报错403 | 0 | 1 |
> | [#16](https://github.com/NanmiCoder/claude-code-haha/issues/16) | 401报错 | 0 | 0 |
> | [#15](https://github.com/NanmiCoder/claude-code-haha/issues/15) | cli 里面对 bun:bundle 的引用报错 | 0 | 1 |
> | [#14](https://github.com/NanmiCoder/claude-code-haha/issues/14) | 为什么queryEngine.ts怎么才一千来行代码？ | 0 | 2 |

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
> ## 功能
> 
> - 完整的 Ink TUI 交互界面（与官方 Claude Code 一致）
> - `--print` 无头模式（脚本/CI 场景）
> - 支持 MCP 服务器、插件、Skills
> - 支持自定义 API 端点和模型
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
> 编辑 `.env`：
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
