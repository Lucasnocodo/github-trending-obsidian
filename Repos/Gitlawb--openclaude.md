---
repo: Gitlawb/openclaude
url: https://github.com/Gitlawb/openclaude
owner: Gitlawb
owner_type: Organization
language: TypeScript
license: NOASSERTION
description: "Open Claude Is Open-source coding-agent CLI for OpenAI, Gemini, DeepSeek, Ollama, Codex, GitHub Models, and 200+ models via OpenAI-compatible APIs."
homepage: ""
stars: 19109
stars_per_day: 3185
forks: 6719
open_issues: 104
created: 2026-04-01
pushed_at: 2026-04-07
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供一個統一的 CLI 工具，讓開發者能夠使用多種 AI 模型進行編碼和開發工作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-04-11"
contributor_count: 5
engagement: "high"
issue_close_rate: 59
repo_size_kb: 13029
readme_length: 9333
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3599,2026-04-02:3635,2026-04-03:7609,2026-04-03:7630,2026-04-04:11768,2026-04-04:11794,2026-04-05:14725,2026-04-05:14735,2026-04-06:16481,2026-04-06:16489,2026-04-07:18057,2026-04-08:19109"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "openclaude"
  - "Gitlawb/openclaude"
  - "提供一個統一的 CLI 工具，讓開發者能夠使用多種 AI 模型進行編碼和開發工作。"
---

# openclaude

**16.5k** stars · **4.1k** stars/天 · 建立 4 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Gitlawb--openclaude");
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
> 提供一個統一的 CLI 工具，讓開發者能夠使用多種 AI 模型進行編碼和開發工作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (4.1k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在多種 AI 模型間切換並整合開發工作流程的全端開發者。
> **一句話重點** OpenClaude 的設計讓開發者能夠無縫地在多種 AI 模型之間切換，提升了開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "Gitlawb--openclaude" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到靈活的多模型支持，值得一試。

> [!abstract] 核心創新
> OpenClaude 提供一個統一的 CLI 工具，讓開發者能夠使用多種 AI 模型進行編碼和開發工作。

## 專案簡介

OpenClaude 是一個開源的 CLI 工具，旨在統一各種 AI 模型的使用，無論是雲端還是本地模型。用戶可以透過 OpenAI 相容的 API、Gemini、Codex、Ollama 等多種後端進行編碼工作，並且保持一個終端優先的工作流程。其核心賣點在於提供一個簡單的指令介面，使用者只需執行 `openclaude` 即可進入 CLI 環境，並透過 `/provider` 指令進行模型設置，或使用 `/onboard-github` 進行 GitHub 模型的快速上手。技術上，OpenClaude 使用 TypeScript 和 JavaScript 實作，並依賴 Bun 作為執行環境，這使得其在性能上相對輕量且快速。

與其他類似工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，OpenClaude 提供了更為廣泛的模型支持和更靈活的工作流程設計，特別是在多步驟工具調用和即時響應方面。使用者可以在多種環境中運行，無論是本地伺服器還是雲端服務，並且支援多種編碼工具和命令，這使得它在開發過程中非常靈活。儘管如此，使用者可能會遇到一些模型之間行為不一致的問題，特別是當使用較小的本地模型時，這可能會影響多步驟工具流的效果。整體來看，OpenClaude 是一個值得考慮的工具，特別是對於需要整合多種 AI 模型的開發者來說，未來可能會進一步增強對新模型的支持，並改善使用者體驗。

**技術棧**：`TypeScript` · `JavaScript` · `Bun`

## 重點功能

- 統一 CLI 界面 — 支持 OpenAI、Gemini、Codex、Ollama 等多種模型，使用者只需一個工具即可操作。
- 即時響應 — 提供流式輸出，讓用戶能夠實時查看模型的回應和進度。
- 多步驟工具調用 — 支持複雜的工具調用流程，適合需要多次交互的編碼任務。
- 模型配置簡單 — 使用 `/provider` 指令輕鬆設置和管理模型配置。
- VS Code 擴展支持 — 提供 VS Code 擴展，便於在開發環境中直接使用。

## 快速開始

1. 全局安裝 OpenClaude
```bash
npm install -g @gitlawb/openclaude
```
2. 啟動 OpenClaude CLI
```bash
openclaude
```
3. 設置 OpenAI 模型環境變數
```bash
export CLAUDE_CODE_USE_OPENAI=1; export OPENAI_API_KEY=sk-your-key-here; export OPENAI_MODEL=gpt-4o; openclaude
```

## 程式碼範例

```ts
[
  "# 前置條件（需要安裝 OpenClaude）",
  "openclaude",
  "# 預期輸出：進入 OpenClaude CLI 環境，並可使用指令如 `/provider` 進行設置。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 16489 stars（4122/天），forks 5769（35.0%），這顯示出強烈的社群參與度。作者 kevincodex1 和其他貢獻者在開源社群中活躍，這個專案解決了開發者在使用多種 AI 模型時的整合問題，以前的解決方案往往需要多個工具來完成相同的任務。這個專案的推出引起了廣泛的討論，特別是在 GitHub Issues 和 Discussions 中，顯示出使用者對其功能的需求和期待。技術上，OpenClaude 的設計使得它能夠在多種環境中靈活運行，這在當前的開發生態中是非常重要的。

## 適合誰使用

**目標受眾**：需要在多種 AI 模型間切換並整合開發工作流程的全端開發者。

> [!example] 使用場景
> - 後端工程師用它來整合多種 AI 模型進行代碼生成，因為這樣可以節省時間並提高生產力，特別是在需要快速迭代的開發環境中。
> - 資料科學家用它來測試不同的模型效果，因為它支持多種本地和雲端模型，讓他們能夠快速比較和選擇最佳方案。
> - DevOps 工程師用它來自動化 CI/CD 流程中的代碼檢查，因為它的 CLI 工具可以輕鬆集成到現有的工作流程中。

## 架構分析

OpenClaude 採用模組化的架構，核心是用 TypeScript 實作的 CLI 工具，並使用 Bun 作為執行環境，這使得其在性能上相對輕量。資料流方面，使用者透過 CLI 指令與不同的 AI 模型進行交互，支持即時響應和多步驟工具調用。選擇 Bun 作為執行環境的好處在於其快速的啟動時間和輕量級的依賴，但可能在某些情況下限制了對其他 Node.js 生態系的支持。整體架構設計考量了使用者的靈活性和擴展性，未來可能會進一步增強對新模型的支持。

## 技術深入分析

OpenClaude 的核心技術機制是基於 CLI 的多模型支持，使用 TypeScript 和 Bun 作為開發語言和執行環境。其設計模式採用模組化架構，讓使用者能夠透過簡單的指令與不同的 AI 模型進行交互。效能方面，OpenClaude 能夠快速啟動並即時響應使用者的請求，這對於需要快速迭代的開發環境非常重要。選擇 Bun 作為執行環境的好處在於其輕量和快速，但可能在某些情況下限制了對其他 Node.js 生態系的支持。技術風險方面，對於小型模型的支持可能在未來的擴展中出現瓶頸，特別是在需要長時間運行的情況下。整合方面，OpenClaude 能夠與多種主流開發工具和 CI/CD 流程無縫對接，這使得它在現有的開發生態中具有良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並包含範例指令。安裝過程相對順暢，但需要注意額外依賴的安裝。提供了良好的入門指南，適合新手使用。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 支持多種 AI 模型，提供靈活的工作流程。
> - 即時響應功能，提升開發效率。
> - 簡單的 CLI 界面，降低使用門檻。

> [!danger] 缺點
> - 對於小型模型的支持可能不如大型模型穩定。
> - 某些功能在不同模型間表現不一致。
> - 需要額外安裝某些依賴（如 ripgrep）才能正常運行。

> [!warning] 注意事項
> - 對於較小的本地模型，可能在長多步驟工具流中表現不佳。
> - 某些提供者可能會對輸出進行限制，影響 CLI 的預設行為。
> - 使用者需自行安裝 ripgrep，否則可能會遇到啟動問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，而 OpenClaude 提供更廣泛的 AI 模型支持和編碼工具整合。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要針對特定模型進行優化，而 OpenClaude 支援多種模型，提供更靈活的工作流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，而 OpenClaude 提供更廣泛的 AI 模型支持和編碼工具整合。 | 如果你的主要需求是資料同步而非多模型支持，則可以選擇 AlpinDale/parsync。 | medium，因為需要重新設計工作流程以適應不同的工具。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要針對特定模型進行優化，而 OpenClaude 支援多種模型，提供更靈活的工作流程。 | 如果你的團隊已經在使用 HolyClaude 並且只需要一個特定模型的優化，則可以考慮繼續使用它。 | low，因為 HolyClaude 和 OpenClaude 的使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaude** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和傳輸，而 OpenClaude 提供更廣泛的 AI 模型支持和編碼工具整合。 | HolyClaude 主要針對特定模型進行優化，而 OpenClaude 支援多種模型，提供更靈活的工作流程。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程以適應不同的工具。 | low，因為 HolyClaude 和 OpenClaude 的使用方式相似。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是資料同步而非多模型支持，則可以選擇 Alp | 如果你的團隊已經在使用 HolyClaude 並且只需要一個 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用 GitHub 模型時可能遇到的 onboarding 失敗問題
  - 解法：檢查 API 權限設置，確保正確配置。
- [MEDIUM] CLI 崩潰的 TypeError 錯誤
  - 解法：確保所有依賴已正確安裝，並檢查使用的模型是否支持。
- [MEDIUM] 某些模型的工具質量可能不一致
  - 解法：選擇性能較好的模型進行關鍵任務。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供多種模型支持，能夠靈活應對不同需求。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性和性能尚未達到生產要求。 |
| 需要快速迭代的開發團隊 | 適合 | 即時響應和多步驟工具調用功能能夠提升開發效率。 |
| 資料科學研究團隊 | 普通 | 雖然支持多種模型，但對於特定模型的優化可能不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到靈活的多模型支持，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenClaude 本身不需要高權限，且不會存取敏感資料，但使用者需注意 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenClaude 最常與 VS Code 和其他 CLI 工具搭配使用，適合在開發和測試環境中進行集成。使用者可以在 VS Code 中安裝相應的擴展，並透過 CLI 指令進行操作。與主流 CI 工具如 GitHub Actions 兼容，能夠在自動化流程中輕鬆集成。整合過程中，使用者可能需要處理某些依賴問題，特別是在使用特定模型時，需確保所有必要的環境變數已正確設置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenClaude 出現之前，開發者通常需要使用多個工具來整合不同的 AI 模型，這樣的工作流程繁瑣且效率低下。隨著 AI 模型的多樣化和需求的增加，開發者迫切需要一個統一的解決方案。OpenClaude 的出現正好滿足了這一需求，並且其開源特性使得社群能夠持續改進和擴展功能。

未來，隨著 AI 技術的進步，OpenClaude 可能會進一步增強對新模型的支持，並改善使用者體驗。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 CLI 工具使用
- 基本的 JavaScript/TypeScript 知識

> [!tip] 導入策略
> 第一週：在個人專案中試用 OpenClaude。第二週：在小型團隊內部工具中導入。第三週：收集使用反饋並調整使用方式。第四週：在主要專案中進行實驗性使用。

**成功指標**：開發效率提升 30%，減少工具切換時間。

> [!warning] 退出計畫
> 若需退出，所有設定均存儲為 JSON 格式，便於轉換為其他工具的配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
| Forks | 5.8k |
| Open Issues | 82 |
| Issue 解決率 | 59% (119 closed) |
| 最後推送 | 2026-04-05 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 12.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gitlawb/openclaude) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kevincodex1](https://github.com/kevincodex1) | 104 |
> | [@gnanam1990](https://github.com/gnanam1990) | 44 |
> | [@Vasanthdev2004](https://github.com/Vasanthdev2004) | 36 |
> | [@auriti](https://github.com/auriti) | 23 |
> | [@anandh8x](https://github.com/anandh8x) | 16 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者問題。
**連結**：[文件](https://github.com/Gitlawb/openclaude/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-05）
> **活躍天數** 1 天 · **最新 commit** fix: coalesce consecutive same-role messages for strict template models (#241)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#297](https://github.com/Gitlawb/openclaude/issues/297) | agent mascot... | 6 | 1 |
> | [#363](https://github.com/Gitlawb/openclaude/issues/363) | I am still unable to type | 5 | 13 |
> | [#378](https://github.com/Gitlawb/openclaude/issues/378) | Feature Request: Add support for --channels flag (Telegram/M | 4 | 0 |
> | [#293](https://github.com/Gitlawb/openclaude/issues/293) | [Bug]: /onboard-github failure (invalid_scope) and CLI crash | 3 | 3 |
> | [#286](https://github.com/Gitlawb/openclaude/issues/286) | Add support for llama-swap and llama.cpp | 3 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaude
> 
> OpenClaude is an open-source coding-agent CLI for cloud and local model providers.
> 
> Use OpenAI-compatible APIs, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, and other supported backends while keeping one terminal-first workflow: prompts, tools, agents, MCP, slash commands, and streaming output.
> 
> [](https://github.com/Gitlawb/openclaude/actions/workflows/pr-checks.yml)
> [](https://github.com/Gitlawb/openclaude/tags)
> [](https://github.com/Gitlawb/openclaude/discussions)
> [](SECURITY.md)
> [](LICENSE)
> 
> [Quick Start](#quick-start) | [Setup Guides](#setup-guides) | [Providers](#supported-providers) | [Source Build](#source-build-and-local-development) | [VS Code Extension](#vs-code-extension) | [Community](#community)
> 
> ## Why OpenClaude
> 
> - Use one CLI across cloud APIs and local model backends
> - Save provider profiles inside the app with `/provider`
> - Run with OpenAI-compatible services, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, and other supported providers
> - Keep coding-agent workflows in one place: bash, file tools, grep, glob, agents, tasks, MCP, and web tools
> - Use the bundled VS Code extension for launch integration and theme support
> 
> ## Quick Start
> 
> ### Install
> 
> ```bash
> npm install -g @gitlawb/openclaude
> ```
> 
> If the install later reports `ripgrep not found`, install ripgrep system-wide and confirm `rg --version` works in the same terminal before starting OpenClaude.
> 
> ### Start
> 
> ```bash
> openclaude
> ```
> 
> Inside OpenClaude:
> 
> - run `/provider` for guided provider setup and saved profiles
> - run `/onboard-github` for GitHub Models onboarding
> 
> ### Fastest OpenAI setup
> 
> macOS / Linux:
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-your-key-here
> export OPENAI_MODEL=gpt-4o
> 
> openclaude
> ```
> 
> Windows PowerShell:
> 
> ```powershell
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_API_KEY="sk-your-key-here"
> $env:OPENAI_MODEL="gpt-4o"
> 
> openclaude
> ```
> 
> ### Fastest local Ollama setup
> 
> macOS / Linux:
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_BASE_URL=http://localhost:11434/v1
> export OPENAI_MODEL=qwen2.5-coder:7b
> 
> openclaude
> ```
> 
> Windows PowerShell:
> 
> ```powershell
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_BASE_URL="http://localhost:11434/v1"
> $env:OPENAI_MODEL="qwen2.5-coder:7b"
> 
> openclaude
> ```
> 
> ## Setup Guides
> 
> Beginner-friendly guides:
> 
> - [Non-Technical Setup](docs/non-technical-setup.md)
> - [Windows Quick Start](docs/quick-start-windows.md)
> - [macOS / Linux Quick Start](docs/quick-start-mac-linux.md)
> 
> Advanced and source-build guides:
> 
> - [Advanced Setup](docs/advanced-setup.md)
> - [Android Install](ANDROID_INSTALL.md)
> 
> ## Supported Providers
> 
> | Provider | Setup Path | Notes |
> | --- | --- | --- |
> | OpenAI-compatible | `/provider` or env vars | Works with OpenAI, OpenRouter, DeepSeek, Groq, Mistral, LM Studio, and other compatible `/v1` servers |
> | Gemini | `/provider` or env vars | Supports API key, access token, or local ADC workflow on current `main` |
> | GitHub Models | `/onboard-github` | Interactive onboarding with saved credentials |
> | Codex | `/provider` | Uses existing Codex credentials when available |
> | Ollama | `/provider` or env vars | Local inference with no API key |
> | Atomic Chat | advanced setup | Local Apple Silicon backend |
> | Bedrock / Vertex / Foundry | env vars | Additional provider integrations for supported environments |
> 
> ## What Works
> 
> - **Tool-driven coding workflows**: Bash, file read/write/edit, grep, glob, agents, tasks, MCP, and slash commands
> - **Streaming responses**: Real-time token output and tool progress
> - **Tool calling**: Multi-step tool loops with model calls, tool execution, and follow-up responses
> - **Images**: URL and base64 image inputs for providers that support vision
> - **Provider profiles**: Guided setup plus saved `.openclaude-profile.json` support
> - **Local and remote model backends**: Cloud APIs, local servers, and Apple Silicon local inference
> 
> ## Provider Notes
> 
> OpenClaude supports multiple providers, but behavior is not identical across all of them.
> 
> - Anthropic-specific features may not exist on other providers
> - Tool quality depends heavily on the selected model
> - Smaller local models can struggle with long multi-step tool flows
> - Some providers impose lower output caps than the CLI defaults, and OpenClaude adapts where possible
> 
> For best results, use models with strong tool/function calling support.
> 
> ## Agent Routing
> 
> OpenClaude can route different agents to different models through settings-based routing. This is useful for cost optimization or splitting work by model strength.
> 
> Add to `~/.claude/settings.json`:
> 
> ```json
> {
>   "agentModels": {
>     "deepseek-chat": {
>       "base_url": "https://api.deepseek.com/v1",
>       "api_key": "sk-your-key"
>     },
>     "gpt-4o": {
>       "base_url": "https://api.openai.com/v1",
>       "api_key": "sk-your-key"
>     }
>   },
>   "agentRouting": {
>     "Explore": "deepseek-chat",
>     "Plan": "gpt-4o",
>     "general-purpose": "gpt-4o",
>     "frontend-dev": "deepseek-chat",
>     "default": "gpt-4o"
>   }
> }
> ```
> 
> When no routing match is found, the global provider remains the fallback.
> 
> > **Note:** `api_key` values in `settings.json` are stored in plaintext. Keep this file private and do not commit it to version control.
> 
> ## Web Search and Fetch
> 
> By default, `WebSearch` works on non-Anthropic models using DuckDuckGo. This gives GPT-4o, DeepSeek, Gemini, Ollama, and other OpenAI-compatible providers a free web search path out of the box.
> 
> > **Note:** DuckDuckGo fallback works by scraping search results and may be rate-limited, blocked, or subject to DuckDuckGo's Terms of Service. If you want a more reliable supported option, configure Firecrawl.
> 
> For Anthropic-native backends and Codex responses, OpenClaude keeps the native provider web search behavior.
> 
> `WebFetch` works, but its basic HTTP plus HTML-to-markdown path can still fail on JavaScript-rendered sites or sites that block plain HTTP requests.
> 
> Set a [Firecrawl](https://firecrawl.dev) API key if you want Firecrawl-powered search/fetch behavior:
> 
> ```bash
> export FIRECRAWL_API_KEY=your-key-here
> ```
> 
> With Firecrawl enabled:
> 
> - `WebSearch` can use Firecrawl's search API while DuckDuckGo remains the default free path for non-Claude models
> - `WebFetch` uses Firecrawl's scrape endpoint instead of raw HTTP, handling JS-rendered pages correctly
> 
> Free tier at [firecrawl.dev](https://firecrawl.dev) includes 500 credits. The key is optional.
> 
> ## Source Build And Local Development
> 
> ```bash
> bun install
> bun run build
> node dist/cli.mjs
> ```
> 
> Helpful commands:
> 
> - `bun run dev`
> - `bun test`
> - `bun run test:coverage`
> - `bun run security:pr-scan -- --base origin/main`
> - `bun run smoke`
> - `bun run doctor:runtime`
> - `bun run verify:privacy`
> - focused `bun test ...` runs for the areas you touch
> 
> ## Testing And Coverage
> 
> OpenClaude uses Bun's built-in test runner for unit tests.
> 
> Run the full unit suite:
> 
> ```bash
> bun test
> ```
> 
> Generate unit test coverage:
> 
> ```bash
> bun run test:coverage
> ```
> 
> Open the visual coverage report:
> 
> ```bash
> open coverage/index.html
> ```
> 
> If you already have `coverage/lcov.info` and only want to rebuild the UI:
> 
> ```bash
> bun run test:coverage:ui
> ```
> 
> Use focused test runs when you only touch one area:
> 
> - `bun run test:provider`
> - `bun run test:provider-recommendation`
> - `bun test path/to/file.test.ts`
> 
> Recommended contributor validation before opening a PR:
> 
> - `bun run build`
> - `bun run smoke`
> - `bun run test:coverage` for broader unit coverage when your change affects shared runtime or provider logic
> - focused `bun test ...` runs for the files and flows you changed
> 
> Coverage output is written to `coverage/lcov.info`, and OpenClaude also generates a git-activity-style heatmap at `coverage/index.html`.
> ## Repository Structure
> 
> - `src/` - core CLI/runtime
> - `scripts/` - build, verification, and maintenance scripts
> - `docs/` - setup, contributor, and project documentation
> - `python/` - standalone Python helpers and their tests
> - `vscode-extension/openclaude-vscode/` - VS Code extension
> - `.github/` - 

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[wong2--weixin-agent-sdk|wong2/weixin-agent-sdk]]

[GitHub](https://github.com/Gitlawb/openclaude)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Gitlawb--openclaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Gitlawb--openclaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Gitlawb--openclaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Gitlawb--openclaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Gitlawb" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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

- [[2026-04-08|2026-04-08]] — 再次上榜，19.1k stars
- [[2026-04-07|2026-04-07]] — 再次上榜，18.1k stars
- [[2026-04-06|2026-04-06]] — 再次上榜，16.5k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，14.7k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，11.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.6k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，3.6k stars
