---
repo: Gitlawb/openclaude
url: https://github.com/Gitlawb/openclaude
owner: Gitlawb
owner_type: Organization
language: TypeScript
license: MIT
description: "Open Claude Is Open-source coding-agent CLI for OpenAI, Gemini, DeepSeek, Ollama, Codex, GitHub Models, and 200+ models via OpenAI-compatible APIs."
homepage: ""
stars: 14725
stars_per_day: 4908
forks: 5146
open_issues: 87
created: 2026-04-01
pushed_at: 2026-04-04
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
use_case: "提供一個統一的 CLI 介面，讓開發者可以使用多種 AI 模型進行編碼工作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-08"
contributor_count: 5
engagement: "high"
issue_close_rate: 56
repo_size_kb: 9443
readme_length: 7328
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3599,2026-04-02:3635,2026-04-03:7609,2026-04-03:7630,2026-04-04:11768,2026-04-04:11794,2026-04-05:14725"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "openclaude"
  - "Gitlawb/openclaude"
  - "提供一個統一的 CLI 介面，讓開發者可以使用多種 AI 模型進行編碼工作。"
---

# openclaude

**11.8k** stars · **5.9k** stars/天 · 建立 2 天前 · TypeScript · MIT

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
> 提供一個統一的 CLI 介面，讓開發者可以使用多種 AI 模型進行編碼工作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.9k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在多種 AI 模型之間快速切換以提升編碼效率的開發團隊。
> **一句話重點** OpenClaude 的強大之處在於其能夠統一管理多種 AI 模型，讓開發者在編碼過程中更加高效。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到高效的多模型支持，值得嘗試。

> [!abstract] 核心創新
> 提供一個統一的 CLI 介面，支持多種 AI 模型的即時切換和操作。

## 專案簡介

OpenClaude 是一個開源的編碼代理 CLI，支持超過 200 種模型，包括 OpenAI、Gemini、Codex 和 Ollama。用戶可以通過簡單的命令行指令來設置和使用不同的模型，並且可以在同一個會話中根據需求切換不同的 AI 提供者。核心賣點是其終端優先的工作流程，支持即時的工具調用和流式輸出，讓開發者能夠在編碼過程中更高效地使用 AI 助手。使用者只需執行 `openclaude` 指令，然後透過 `/provider` 指令進行模型設置，便可開始使用。這樣的設計使得開發者能夠在多個模型之間無縫切換，並且能夠根據不同的任務需求選擇最合適的模型。

技術上，OpenClaude 使用 TypeScript 和 JavaScript 實現，並依賴於多個 SDK 和工具，這使得其在功能上非常靈活。相較於其他工具，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，OpenClaude 提供了更廣泛的模型支持和更靈活的工作流程。實際使用中，開發者可能會遇到一些模型之間行為不一致的問題，這需要用戶根據具體情況進行調整。這個專案目前處於 beta 階段，適合需要在多個 AI 模型之間進行快速切換的開發團隊，尤其是那些需要高效編碼的團隊。未來六個月內，預計會有更多模型的支持和功能的完善。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js`

## 重點功能

- 多模型支持 — 支持 OpenAI、Gemini、Codex、Ollama 等 200+ 模型，使用統一的 CLI 介面進行操作。
- 即時流式輸出 — 提供實時的 token 輸出和工具進度，讓開發者能夠即時獲取結果。
- 工具驅動的工作流程 — 支持 bash、文件讀寫、grep 等工具，讓開發者能夠在熟悉的環境中工作。
- 代理路由 — 允許在同一會話中根據需求路由不同的 AI 代理，實現成本優化。
- 簡易設置 — 提供 `/provider` 指令進行模型設置，並支持環境變數配置。

## 快速開始

1. 安裝 OpenClaude
```bash
npm install -g @gitlawb/openclaude
```
2. 啟動 OpenClaude
```bash
openclaude
```
3. 設置模型提供者
```bash
/provider
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 OpenClaude",
  "指令": "openclaude",
  "預期輸出": "啟動 OpenClaude CLI，並顯示可用指令和設置選項。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 11794 stars（5897/天），forks 4176（35.4%），這顯示出強烈的社群需求和參與度。這個專案的主要貢獻者來自於多個背景，顯示出其多元化的開發團隊。OpenClaude 解決了開發者在使用不同 AI 模型時的繁瑣流程，過去開發者需要分別處理不同模型的 API，而 OpenClaude 提供了一個統一的 CLI 介面，簡化了這一過程。近期的推廣活動和社群討論也可能促進了其快速增長。技術生態的變化，如 AI 模型的普及和開源運動的推進，使得這個工具的需求日益增加。高達 35.4% 的 forks/stars 比率表明許多開發者正在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在多種 AI 模型之間快速切換以提升編碼效率的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來快速切換不同的 AI 模型進行代碼生成，因為這樣可以節省大量的時間和精力，特別是在需要多次測試不同模型的情況下。
> - 全端開發者用它來整合多種 AI 工具進行自動化測試，因為可以在同一個 CLI 環境中進行多步驟的工具調用，提升工作效率。
> - 資料科學家用它來在本地環境中運行 Ollama 模型進行數據分析，因為這樣可以避免網絡延遲，並且能夠使用本地資源進行計算。

## 架構分析

OpenClaude 採用模組化設計，核心功能由 TypeScript 實現，並通過 Node.js 提供 CLI 介面。資料流方面，使用者透過命令行輸入指令，CLI 解析並調用相應的模型 API，然後將結果以流式方式返回給用戶。這種設計使得用戶能夠在不同模型之間快速切換，提升了使用的靈活性。

選擇 Node.js 作為後端語言，能夠充分利用其非同步特性，適合處理大量的即時請求。這樣的設計雖然帶來了較高的學習曲線，但也使得 OpenClaude 在功能上非常強大。擴展性方面，由於使用了模組化的架構，未來可以輕鬆添加新的模型支持或功能擴展。

## 技術深入分析

OpenClaude 的核心技術機制是其模組化設計，使用 TypeScript 和 Node.js 實現 CLI 工具，並支持多種 AI 模型的即時切換。其資料流設計允許用戶通過命令行指令直接調用不同的模型 API，並以流式方式返回結果，這在開發過程中提供了極大的便利。效能方面，OpenClaude 能夠處理多個即時請求，但在使用小型模型時，可能會遇到性能瓶頸。選擇 Node.js 作為後端語言，能夠充分利用其非同步特性，適合處理大量的即時請求，但這也意味著需要一定的學習成本。技術風險方面，隨著模型數量的增加，可能會出現整合上的挑戰，特別是在不同模型之間的行為一致性方面。整合方面，OpenClaude 能夠與主流開發工具鏈（如 VS Code）良好整合，並提供相應的擴展支持，這使得它在開發環境中更加友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含多個範例。安裝過程相對順暢，但需要注意額外依賴的安裝。文件中有針對不同操作系統的快速入門指南，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 支持多種 AI 模型，靈活性高。
> - 即時流式輸出，提升用戶體驗。
> - 簡單的設置流程，適合新手使用。

> [!danger] 缺點
> - 不同模型之間行為不一致，可能影響使用體驗。
> - 小型模型在處理複雜任務時表現不佳。
> - 需要額外安裝依賴（如 ripgrep）才能正常運行。

> [!warning] 注意事項
> - 某些模型在多步驟工具流中表現不佳，特別是較小的本地模型。
> - 不同提供者之間的行為不一致，可能需要用戶進行調整。
> - 某些提供者對輸出有上限，OpenClaude 會根據需要進行調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的 CLI 工具，但僅支持特定模型，功能上較為單一。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於特定的 AI 模型，缺乏 OpenClaude 的多模型支持和靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於特定模型的同步處理，功能較為單一。 | 如果你的團隊只需要處理特定模型的同步任務，這可能是個不錯的選擇。 | medium，因為需要重新調整工作流程以適應不同的工具。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於特定的 AI 模型，缺乏 OpenClaude 的多模型支持。 | 如果你的團隊已經在使用 HolyClaude，且不需要多模型支持，可以考慮繼續使用。 | low，因為只需轉移現有的工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaude** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定模型的同步處理，功能較為單一。 | 專注於特定的 AI 模型，缺乏 OpenClaude 的多模型支持。 |
> | 遷移成本 | - | medium，因為需要重新調整工作流程以適應不同的工具。 | low，因為只需轉移現有的工作流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊只需要處理特定模型的同步任務，這可能是個不錯的選 | 如果你的團隊已經在使用 HolyClaude，且不需要多模型 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些模型在多步驟工具流中表現不佳，可能導致結果不如預期。
  - 解法：使用較大的模型或簡化任務流程。
- [MEDIUM] 在不同操作系統上安裝過程可能會遇到依賴問題。
  - 解法：確保所有必要的依賴都已安裝，並參考官方文檔。
- [MEDIUM] 某些提供者的輸出上限可能會影響結果。
  - 解法：根據需求調整模型選擇，使用更強大的模型。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速切換不同的 AI 模型進行代碼生成，提升開發效率。 |
| 大型企業的多團隊協作開發 | 適合 | 支持多模型的切換，能夠根據不同團隊需求進行調整。 |
| 個人開發者的側邊項目 | 非常適合 | 簡單的設置和使用流程，適合快速實驗和開發。 |
| 需要高性能的 AI 模型進行實時處理的應用 | 不適合 | 小型模型在處理複雜任務時表現不佳，可能影響效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到高效的多模型支持，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意 API 金鑰的安全性，避免洩露。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenClaude 最常與 VS Code 和其他 CLI 工具搭配使用，通常在開發和測試環節中發揮作用。在一個使用 Node.js 的專案中，可以通過 `npm install -g @gitlawb/openclaude` 安裝，然後使用 `openclaude` 啟動 CLI，並透過 `/provider` 指令設置模型。與主流 CI 工具（如 GitHub Actions）相容，能夠輕鬆整合到現有的開發流程中。整合過程中，最常見的問題是依賴安裝不全，建議在安裝前檢查所有必要的依賴。

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
| Forks | 4.2k |
| Open Issues | 70 |
| Issue 解決率 | 56% (88 closed) |
| 最後推送 | 2026-04-04 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 9.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gitlawb/openclaude) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kevincodex1](https://github.com/kevincodex1) | 101 |
> | [@gnanam1990](https://github.com/gnanam1990) | 35 |
> | [@Vasanthdev2004](https://github.com/Vasanthdev2004) | 31 |
> | [@auriti](https://github.com/auriti) | 19 |
> | [@rajrasane](https://github.com/rajrasane) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度高，定期有更新和討論。
**連結**：[文件](https://github.com/Gitlawb/openclaude/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-03 ~ 2026-04-04）
> **活躍天數** 2 天 · **最新 commit** Limit auto-mode classifier transcript growth (#277)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#205](https://github.com/Gitlawb/openclaude/issues/205) | Unable to type | 3 | 4 |
> | [#297](https://github.com/Gitlawb/openclaude/issues/297) | agent mascot... | 2 | 0 |
> | [#232](https://github.com/Gitlawb/openclaude/issues/232) | 💡 Proposal: How openclaude can reach 20k+ stars — 出海增长策略 | 2 | 3 |
> | [#300](https://github.com/Gitlawb/openclaude/issues/300) | 
# Bug: OpenClaude ignora OPENAI_MODEL e tenta usar gemini-2 | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaude
> 
> OpenClaude is an open-source coding-agent CLI that works with more than one model provider.
> 
> Use OpenAI-compatible APIs, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, and other supported backends while keeping the same terminal-first workflow: prompts, tools, agents, MCP, slash commands, and streaming output.
> 
> ## Why OpenClaude
> 
> - Use one CLI across cloud and local model providers
> - Save provider profiles inside the app with `/provider`
> - Run locally with Ollama or Atomic Chat
> - Keep core coding-agent workflows: bash, file tools, grep, glob, agents, tasks, MCP, and web tools
> 
> ---
> 
> ## Quick Start
> 
> ### Install
> 
> ```bash
> npm install -g @gitlawb/openclaude
> ```
> 
> If the npm install path later reports `ripgrep not found`, install ripgrep system-wide and confirm `rg --version` works in the same terminal before starting OpenClaude.
> 
> ### Start
> 
> ```bash
> openclaude
> ```
> 
> Inside OpenClaude:
> 
> - run `/provider` for guided setup of OpenAI-compatible, Gemini, Ollama, or Codex profiles
> - run `/onboard-github` for GitHub Models setup
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
> ---
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
> ---
> 
> ## Supported Providers
> 
> | Provider | Setup Path | Notes |
> | --- | --- | --- |
> | OpenAI-compatible | `/provider` or env vars | Works with OpenAI, OpenRouter, DeepSeek, Groq, Mistral, LM Studio, and compatible local `/v1` servers |
> | Gemini | `/provider` or env vars | Google Gemini support through the runtime provider layer |
> | GitHub Models | `/onboard-github` | Interactive onboarding with saved credentials |
> | Codex | `/provider` | Uses existing Codex credentials when available |
> | Ollama | `/provider` or env vars | Local inference with no API key |
> | Atomic Chat | advanced setup | Local Apple Silicon backend |
> | Bedrock / Vertex / Foundry | env vars | Additional provider integrations for supported environments |
> 
> ---
> 
> ## What Works
> 
> - Tool-driven coding workflows
>   Bash, file read/write/edit, grep, glob, agents, tasks, MCP, and slash commands
> - Streaming responses
>   Real-time token output and tool progress
> - Tool calling
>   Multi-step tool loops with model calls, tool execution, and follow-up responses
> - Images
>   URL and base64 image inputs for providers that support vision
> - Provider profiles
>   Guided setup plus saved `.openclaude-profile.json` support
> - Local and remote model backends
>   Cloud APIs, local servers, and Apple Silicon local inference
> 
> ---
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
> ---
> 
> ## Agent Routing
> 
> Route different agents to different AI providers within the same session. Useful for cost optimization (cheap model for code review, powerful model for complex coding) or leveraging model strengths.
> 
> ### Configuration
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
> ### How It Works
> 
> - **agentModels**: Maps model names to OpenAI-compatible API endpoints
> - **agentRouting**: Maps agent types or team member names to model names
> - **Priority**: `name` > `subagent_type` > `"default"` > global provider
> - **Matching**: Case-insensitive, hyphen/underscore equivalent (`general-purpose` = `general_purpose`)
> - **Teams**: Team members are routed by their `name` — no extra config needed
> 
> When no routing match is found, the global provider (env vars) is used as fallback.
> 
> > **Note:** `api_key` values in `settings.json` are stored in plaintext. Keep this file private and do not commit it to version control.
> 
> ---
> 
> ## Web Search and Fetch
> 
> By default, `WebSearch` now works on non-Anthropic models using DuckDuckGo. This gives GPT-4o, DeepSeek, Gemini, Ollama, and other OpenAI-compatible providers a free web search path out of the box.
> 
> >**Note:** DuckDuckGo fallback works by scraping search results and may be rate-limited, blocked, or subject to DuckDuckGo's Terms of Service. If you want a more reliable supported option, configure Firecrawl.
> 
> For Anthropic-native backends (Anthropic/Vertex/Foundry) and Codex responses, OpenClaude keeps the native provider web search behavior.
> 
> `WebFetch` works but uses basic HTTP plus HTML-to-markdown conversion. That fails on JavaScript-rendered pages (React, Next.js, Vue SPAs) and sites that block plain HTTP requests.
> 
> Set a [Firecrawl](https://firecrawl.dev) API key if you want Firecrawl-powered search/fetch behavior:
> 
> ```bash
> export FIRECRAWL_API_KEY=your-key-here
> ```
> 
> With Firecrawl enabled:
> 
> - `WebSearch` can use Firecrawl's search API (while DuckDuckGo remains the default free path for non-Claude models)
> - `WebFetch` uses Firecrawl's scrape endpoint instead of raw HTTP, handling JS-rendered pages correctly
> 
> Free tier at [firecrawl.dev](https://firecrawl.dev) includes 500 credits. The key is optional.
> 
> ---
> 
> ## Source Build
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
> - `bun run smoke`
> - `bun run doctor:runtime`
> 
> ---
> 
> ## VS Code Extension
> 
> The repo includes a VS Code extension in [`vscode-extension/openclaude-vscode`](vscode-extension/openclaude-vscode) for OpenClaude launch integration and theme support.
> 
> ---
> 
> ## Security
> 
> If you believe you found a security issue, see [SECURITY.md](SECURITY.md).
> 
> ---
> 
> ## Contributing
> 
> Contributions are welcome.
> 
> For larger changes, open an issue first so the scope is clear before implementation. Helpful validation commands include:
> 
> - `bun run build`
> - `bun run smoke`
> - focused `bun test ...` runs for touched areas
> 
> ---
> 
> ## Disclaimer
> 
> OpenClaude is an independent community project and is not affiliated with, endorsed by, or sponsored by Anthropic.
> 
> "Claude" and "Claude Code" are trademarks of Anthropic.
> 
> ---
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化]]

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
> const concepts = ["CLI/TUI","多模態","自動化"];
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

- [[2026-04-05|2026-04-05]] — 再次上榜，14.7k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，11.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.6k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，3.6k stars
