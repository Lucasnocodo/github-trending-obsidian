---
repo: NanmiCoder/cc-haha
url: https://github.com/NanmiCoder/cc-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: N/A
description: "Claude Code 泄露源码 - 本地可运行版本"
homepage: ""
stars: 4548
stars_per_day: 1516
forks: 5159
open_issues: 19
created: 2026-03-31
pushed_at: 2026-04-03
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
contributor_count: 4
engagement: "high"
issue_close_rate: 37
repo_size_kb: 17004
readme_length: 7327
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045,2026-04-03:4069,2026-04-04:4548"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "cc-haha"
  - "NanmiCoder/cc-haha"
  - "提供本地可運行的 Claude Code 版本，支持多種 API 接入。"
---

# cc-haha

**4.5k** stars · **1.5k** stars/天 · 建立 3 天前 · TypeScript · 未標註授權

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
> 提供本地可運行的 Claude Code 版本，支持多種 API 接入。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** High
> **適合** 需要在本地運行 AI 模型並希望避免雲端依賴的開發者和研究者。
> **一句話重點** 這個專案不僅修復了原始源碼的問題，還提供了一個靈活的本地運行解決方案，適合需要控制數據的開發者。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，能夠在本地運行 AI 模型，值得考慮。

> [!abstract] 核心創新
> 本專案修復了 Claude Code 泄露源碼的多個阻塞問題，實現了完整的本地運行功能。

## 專案簡介

Claude Code Haha 是一個基於 Claude Code 泄露源碼的本地可運行版本，旨在解決原始源碼無法直接運行的問題。用戶可以透過簡單的 CLI 指令來啟動交互式 TUI 界面，並且支持無頭模式以便於腳本化使用。安裝過程中需要依賴 Bun 作為執行環境，並透過環境變數配置 API 鍵和模型。這個專案的賣點在於其完整的 Ink TUI 界面和對多種 API 的支持，包括 MCP 伺服器和自定義 API 端點。技術上，專案使用 TypeScript 和 React 結合 Ink 來實現終端界面，並且整合了多個第三方庫來處理 API 請求和數據流。

與其他類似工具相比，如 OpenAI 的 API，Claude Code Haha 提供了更靈活的本地運行選項，且不依賴於閉源的原生模塊，這使得它在 macOS 上的桌面控制功能更具可操作性。使用者在使用過程中可能會遇到 API 配置不當導致的錯誤，這需要仔細檢查環境變數設置。這個專案目前仍在活躍開發中，適合需要本地運行 AI 模型的開發者和研究者，特別是那些希望避免使用雲端服務的用戶。未來幾個月內，預期會有更多功能和修復更新。對於小型團隊或個人項目來說，這是一個值得考慮的選擇，尤其是在需要快速迭代和本地測試的情況下。

**技術棧**：`TypeScript` · `Python` · `JavaScript` · `Bun`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 一致的用戶體驗。
- 無頭模式支持 — 使用 `--print` 參數進行腳本化操作，適合 CI 環境。
- 支持 MCP 伺服器和插件 — 允許用戶擴展功能和集成其他服務。
- 自定義 API 端點 — 用戶可以配置不同的 API 端點以滿足需求。
- Computer Use 桌面控制 — 透過 Python bridge 實現對 macOS 桌面的控制功能。

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
# 確保有 Python 3 和 macOS 辅助功能/屏幕录制权限，然后直接使用：
./bin/claude-haha
> 帮我截个屏
> 打开网易云音乐搜索一首歌
# 預期輸出：截屏並打開應用程序。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 4548 stars（1516/天），forks 5159（113.4%），顯示出極高的社群興趣。作者 NanmiCoder 及其團隊專注於開源 AI 工具的開發，解決了原始 Claude Code 無法運行的痛點，提供了一個可操作的本地版本。這個專案的推出正好滿足了對本地 AI 解決方案的需求，尤其是在用戶對數據隱私和控制的關注上。社群的反饋和活躍的問題討論也表明了使用者對於這個工具的需求和期待。forks/stars 比率超過 100% 表示許多用戶在積極修改和擴展此專案，這是其受歡迎的另一個指標。

## 適合誰使用

**目標受眾**：需要在本地運行 AI 模型並希望避免雲端依賴的開發者和研究者。

> [!example] 使用場景
> - 獨立開發者用它來在本地運行 Claude Code，因為這樣可以避免雲端服務的隱私問題。
> - AI 研究者用它來測試不同的模型和 API 接入，因為它支持多種兼容 API，方便進行實驗。
> - 小型團隊用它來開發內部工具，因為其本地運行的特性可以更好地控制資源和數據流。
> - DevOps 工程師用它來自動化 CI/CD 流程，因為它支持無頭模式，適合在自動化環境中使用。

## 架構分析

本專案採用 Bun 作為執行環境，這意味著它能夠快速啟動並提供高效的性能。整體架構分為多個模組，包括 CLI 主入口、TUI 界面、服務層和工具系統。數據流從用戶輸入經過 CLI 解析，進入服務層進行 API 請求，最後返回結果到 TUI 界面。

這種設計使得各個模組之間的耦合度低，便於維護和擴展。選擇 TypeScript 和 React 結合 Ink 來實現終端界面，能夠提供更好的用戶體驗和可擴展性。這種架構的代價在於需要用戶熟悉環境變數配置，並且對於某些功能的實現依賴於 Python bridge，這可能會在不同平台上造成兼容性問題。

整體來說，這個架構適合需要靈活性和可擴展性的開發者。

## 技術深入分析

Claude Code Haha 的核心技術機制在於它的多模組架構，使用 TypeScript 和 React 結合 Ink 來實現終端用戶界面，這使得開發者能夠快速構建和擴展功能。效能方面，因為使用了 Bun 作為執行環境，啟動時間和響應速度都相對較快。該專案能夠處理的請求數量取決於用戶的硬體配置，特別是在高並發的情況下，可能會出現性能瓶頸。選擇 Bun 而非傳統的 Node.js，雖然在性能上有優勢，但也增加了使用者的學習成本，因為需要熟悉 Bun 的生態和工具。技術風險方面，對於 Python bridge 的依賴可能會在不同平台上造成兼容性問題，這需要持續的維護和測試。整合方面，與主流的 CI/CD 工具鏈（如 GitHub Actions）相容性良好，但在某些功能上可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例。安裝過程相對順暢，但需要注意環境變數的配置。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 本地運行，避免了雲端依賴和數據隱私問題。
> - 支持多種 API 接入，靈活性高。
> - 完整的 TUI 界面，提供良好的用戶體驗。
> - 活躍的社群和持續的更新，能夠快速解決問題。

> [!danger] 缺點
> - 僅支援 macOS，Windows 用戶功能受限。
> - 安裝過程需要額外的環境配置，對新手不友好。
> - 仍在開發中，可能存在未解決的 bug。
> - 對於不熟悉 CLI 的用戶來說，使用門檻較高。

> [!warning] 注意事項
> - 僅支援 macOS，Windows 上部分功能不可用。
> - 需要安裝 Bun 作為執行環境，增加了安裝步驟。
> - 對於不熟悉環境變數配置的用戶可能會造成困難。
> - 目前仍在開發中，可能存在未解決的 bug。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenAI/openai](https://github.com/OpenAI/openai) | OpenAI 的 API 提供了強大的模型，但需要雲端訪問，無法本地運行。 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | LiteLLM 提供了協議轉換功能，但不支持本地運行，且依賴於其他服務。 |
| [ClaudeCode/claude-code](https://github.com/ClaudeCode/claude-code) | 原始的 Claude Code 需要依賴私有模塊，無法直接運行，而本專案修復了這些問題。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/openai](https://github.com/OpenAI/openai) | OpenAI 提供的 API 需要雲端訪問，無法本地運行，適合需要高性能模型的場景。 | 如果你的團隊已經在使用 OpenAI 的服務，並且不需要本地運行的靈活性。 | medium，因為需要重新設計 API 調用的邏輯。 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | LiteLLM 提供協議轉換功能，但不支持本地運行，依賴於其他服務。 | 如果你的模型供應商不支持 Anthropic 協議，並需要進行協議轉換。 | low，因為 LiteLLM 提供了簡單的配置和使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cc-haha** | **openai** | **litellm** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenAI 提供的 API 需要雲端訪問，無法本地運行，適合需要高性能模型的場景。 | LiteLLM 提供協議轉換功能，但不支持本地運行，依賴於其他服務。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 調用的邏輯。 | low，因為 LiteLLM 提供了簡單的配置和使用方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 OpenAI 的服務，並且不需要本地 | 如果你的模型供應商不支持 Anthropic 協議，並需要進 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性項目，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上部分功能無法使用，特別是桌面控制功能
  - 解法：使用 macOS 或在 Linux 環境中運行
- [MEDIUM] 環境變數配置不當可能導致啟動失敗
  - 解法：確保所有必需的環境變數都已正確設置
- **[HIGH]** API 請求返回格式不正確可能導致運行時錯誤
  - 解法：檢查 ANTHROPIC_BASE_URL 是否正確指向兼容的 API 端點

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 本地運行可以更好地控制數據和資源。 |
| 大型企業的核心 AI 系統 | 不適合 | 目前仍在開發中，穩定性不足。 |
| 需要快速迭代的 AI 研究項目 | 適合 | 靈活的本地運行和多種 API 接入支持。 |
| 對數據隱私有高要求的應用 | 非常適合 | 本地運行避免了數據上傳至雲端的風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠在本地運行 AI 模型，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 本工具不需要高權限，僅需配置 API 鍵和環境變數。對於敏感資料的存取相對安全，但仍需注意依賴的第三方庫的安全性。整體來說，將其用於 CI/CD pipeline 中是安全的。

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
| Forks | 5.2k |
| Open Issues | 19 |
| Issue 解決率 | 37% (11 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 16.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/cc-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 15 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@studyzy](https://github.com/studyzy) | 1 |
> | [@dhb52](https://github.com/dhb52) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://github.com/NanmiCoder/cc-haha)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-02 ~ 2026-04-03）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #35 from NanmiCoder/feature/enable-computer-use

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#30](https://github.com/NanmiCoder/cc-haha/issues/30) | 从0到1完整启动本项目的教程在此！ | 1 | 3 |
> | [#36](https://github.com/NanmiCoder/cc-haha/issues/36) | [问题] windows上怎么接入MCP呢？ `question` | 0 | 1 |
> | [#34](https://github.com/NanmiCoder/cc-haha/issues/34) | [问题] 如何连接到本地ollma模型 `question` | 0 | 4 |
> | [#29](https://github.com/NanmiCoder/cc-haha/issues/29) | deepseek api的Max Token 是128k,和Claude的不匹配，Claude code貌似是写死了 | 0 | 0 |
> | [#28](https://github.com/NanmiCoder/cc-haha/issues/28) | 没有宠物功能，我跑起来后发现不能识别这个SKILLS | 0 | 2 |

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
> - [Computer Use 桌面控制](#computer-use-桌面控制)
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
> - **Computer Use 桌面控制**（截屏、鼠标、键盘、应用管理）— [使用指南](docs/computer-use.md)
> - 降级 Recovery CLI 模式
> 
> > **Computer Use 说明**：本项目包含**魔改版的 Computer Use** 功能。官方实现依赖 Anthropic 私有原生模块，我们替换了整个底层操作层，使用 Python bridge（`pyautogui` + `mss` + `pyobjc`）实现，使得任何人都可以在 macOS 上使用。详见 [Computer Use 功能指南](docs/computer-use.md)。
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
> ## Computer Use 桌面控制
> 
> 本项目启用并改造了 Claude Code 的 Computer Use 功能（内部代号 "Chicago"），让 AI 模型可以直接控制你的 macOS 桌面——截屏、鼠标点击、键盘输入、应用管理。
> 
> **底层改造**：官方实现依赖 Anthropic 私有原生模块（`@ant/computer-use-swift`、`@ant/computer-use-input`），本项目用 Python bridge 完全替代，使用 `pyautogui`（鼠标键盘）、`mss`（截图）、`pyobjc`（macOS API），无需任何闭源二进制。
> 
> ```bash
> # 确保有 Python 3 和 macOS 辅助功能/屏幕录制权限，然后直接使用：
> ./bin/claude-haha
> > 帮我截个屏
> > 打开网易云音乐搜索一首歌
> ```
> 
> 详细说明、支持的设备列表、技术架构和尝试过的方案请参考：**[Computer Use 功能指南](docs/computer-use.md)**
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

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[claude-code-best--claude-code|claude-code-best/claude-code]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]]

[GitHub](https://github.com/NanmiCoder/cc-haha)

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
> const concepts = ["CLI/TUI","API 設計","自動化"];
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
