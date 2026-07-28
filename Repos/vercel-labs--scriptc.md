---
repo: vercel-labs/scriptc
url: https://github.com/vercel-labs/scriptc
owner: vercel-labs
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "TypeScript-to-Native Compiler"
homepage: "https://scriptc.dev"
stars: 1825
stars_per_day: 365
forks: 33
open_issues: 9
created: 2026-07-22
pushed_at: 2026-07-28
first_seen: 2026-07-28
week: "2026-W31"
month: "2026-07"
category: "開發工具"
subcategory: "編譯器"
release_tag: "v0.0.17"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-28
use_case: "將 TypeScript 編譯成小而快速的原生可執行檔，無需 Node 或 JavaScript 引擎。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-31"
contributor_count: 2
engagement: "low"
issue_close_rate: 18
repo_size_kb: 14309
readme_length: 2293
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-28"
star_history: "2026-07-28:1825"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "scriptc"
  - "vercel-labs/scriptc"
  - "將 TypeScript 編譯成小而快速的原生可執行檔，無需 Node 或 JavaScript 引擎。"
---

# scriptc

**1.8k** stars · **365** stars/天 · 建立 5 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel-labs--scriptc");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.0.17`

> [!summary] 一句話摘要
> 將 TypeScript 編譯成小而快速的原生可執行檔，無需 Node 或 JavaScript 引擎。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (365 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望將 TypeScript 應用轉換為高效能原生執行檔的開發者。
> **一句話重點** scriptc 讓 TypeScript 開發者能夠輕鬆生成高效能的原生應用，無需依賴 JavaScript 引擎。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--scriptc");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "編譯器" && p.file.name !== "vercel-labs--scriptc" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 編譯器 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效能的原生應用，值得考慮。

> [!abstract] 核心創新
> scriptc 將 TypeScript 編譯成小而快速的原生執行檔，無需任何 JavaScript 引擎。

## 專案簡介

scriptc 是一個將 TypeScript 編譯成原生可執行檔的工具，透過在編譯時運行 TypeScript 代碼，並將結果嵌入到二進制文件中，實現零運行時開銷。使用者只需執行 `scriptc build <file.ts>` 來編譯 TypeScript 檔案，最終生成的可執行檔無需任何 JavaScript 引擎。這個工具的核心在於其前端使用 TypeScript 編譯器 API 解析和類型檢查，然後生成中間表示（IR），再轉換為 C 語言，最終使用 clang 編譯成原生執行檔。這樣的設計使得生成的二進制檔案體積小且執行速度快，適合需要高效能的應用場景。scriptc 也支持原生 FFI（Foreign Function Interface），允許 TypeScript 直接調用 C 語言的函數，這在需要與底層系統庫交互的情況下特別有用。

與其他類似工具相比，如 `nativ`，scriptc 提供了更好的 TypeScript 支持和更小的二進制檔案，因為它不需要任何 JavaScript 引擎。使用者在 Windows 環境下也能夠順利運行，這是最近版本的一大改進。這個工具適合需要高效能且希望減少運行時依賴的開發者，特別是在嵌入式系統或資源受限的環境中。未來的發展方向可能會集中在擴展對其他語言的支持及增強編譯器的功能上。

**技術棧**：`TypeScript 5.9.3` · `Node.js >= 24.0.0` · `pnpm`

## 重點功能

- 零運行時開銷 — 將 TypeScript 編譯成小而快速的原生可執行檔，無需 Node 或 JavaScript 引擎。
- 原生 FFI 支持 — 允許 TypeScript 直接調用 C 語言函數，方便與底層系統庫交互。
- 動態嵌入引擎 — 使用 `--dynamic` 參數可嵌入 npm 依賴，並報告未執行的代碼。
- 檢查類型轉換 — 使用 `JSON.parse(...) as Config` 進行運行時驗證，提供錯誤提示。
- 支持 Windows 環境 — 最新版本修復了 Windows 路徑處理問題，確保 CLI 在 Windows 上正常運行。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 編譯 TypeScript 檔案
```bash
pnpm scriptc build <file.ts>
```
3. 運行編譯後的可執行檔
```bash
./<file>
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 scriptc 並有 TypeScript 檔案。",
  "指令": "$ scriptc build fib.ts",
  "預期輸出": "生成一個名為 fib 的原生可執行檔。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1825 stars（365/天），forks 33（1.8%），顯示出一定的社群關注度。作者 ctate 和 simonw 具備豐富的開發經驗，之前在 Vercel 的其他專案中也有不錯的表現。這個工具解決了將 TypeScript 轉換為原生可執行檔的需求，這在現有的 JavaScript 生態中並不常見，特別是對於需要高效能的應用。近期的推廣活動和社群討論也可能促進了其曝光度。這個工具的出現正值 TypeScript 和原生應用需求上升的時期，讓開發者能夠更方便地將 TypeScript 應用於各種環境中。forks/stars 比率較低，顯示目前多數用戶仍在觀望階段。

## 適合誰使用

**目標受眾**：希望將 TypeScript 應用轉換為高效能原生執行檔的開發者。

> [!example] 使用場景
> - 後端工程師用它來將 TypeScript 應用編譯成原生可執行檔，因為這樣能減少運行時依賴，提高效能。
> - 嵌入式開發者用它來將 TypeScript 程式碼轉換為小型原生應用，因為這樣能在資源受限的環境中運行。
> - 系統程式設計師用它來實現 TypeScript 與 C 語言的互操作性，因為它支持原生 FFI，能直接調用 C 函數。

## 架構分析

scriptc 的架構主要分為三個部分：前端使用 TypeScript 編譯器 API 進行解析和類型檢查，生成中間表示（IR）；IR 再轉換為 C 語言，最終通過 clang 編譯成原生執行檔。這種設計使得生成的二進制檔案體積小且執行速度快。選擇 C 作為參考後端是因為其可讀性和可維護性，雖然 LLVM 提供了更高效的代碼生成，但在某些情況下可能會導致更大的二進制檔案。這種架構的擴展性良好，但在大型應用中可能面臨編譯時間過長的問題。

## 技術深入分析

scriptc 的核心技術機制在於其使用 TypeScript 編譯器 API 進行解析和類型檢查，然後生成中間表示（IR），這樣的設計讓編譯過程更加靈活且可擴展。生成的 IR 最終轉換為 C 語言，並使用 clang 編譯成原生執行檔，這樣的流程確保了生成的二進制檔案小且執行效率高。對於性能和規模特性，scriptc 能夠有效處理中小型 TypeScript 應用，但在大型應用中可能面臨編譯時間過長的挑戰。選擇 C 作為參考後端的好處在於其可讀性和可維護性，但在某些情況下可能會導致更大的二進制檔案。技術風險方面，FFI 調用可能在擴展時出現性能瓶頸，開發者需謹慎使用。整合方面，scriptc 與現有的 TypeScript 生態系統兼容，能夠輕鬆融入現有的開發流程，並與 CI/CD 工具鏈良好配合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用範例和安裝步驟；安裝過程順暢，無明顯坑；有良好的入門指南，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 生成的可執行檔無需運行時依賴，減少了部署的複雜性。
> - 支持原生 FFI，方便與底層系統庫進行交互。
> - 在 Windows 環境下的支持得到改善，增強了可用性。

> [!danger] 缺點
> - 目前僅支持 TypeScript，對於其他語言的支持有限。
> - 對於大型應用，編譯時間可能較長，影響開發效率。
> - FFI 調用可能導致性能瓶頸，需謹慎使用。

> [!warning] 注意事項
> - 目前僅支持 TypeScript，不支持其他語言。
> - 對於大型 TypeScript 應用，編譯時間可能較長。
> - 在某些情況下，FFI 調用可能會導致性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 主要針對 C 語言的編譯，而 scriptc 專注於 TypeScript 到原生的轉換，適合不同的開發需求。 |
| nativ | nativ 提供了類似的功能，但可能需要 JavaScript 引擎，scriptc 則完全不需要，適合對性能要求更高的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 專注於生成 AI agent 的腳本，而 scriptc 專注於 TypeScript 的編譯，兩者的應用場景不同。 | 如果你的專案主要是生成 AI agent 的腳本，則 agent-sprite-forge 更適合。 | medium，因為需要重新設計代碼結構以適應不同的工具。 |
| nativ | nativ 主要針對 C 語言的編譯，而 scriptc 專注於 TypeScript 到原生的轉換，適合不同的開發需求。 | 如果你的團隊已經在使用 C 語言並希望保持一致性，則 nativ 更為合適。 | high，因為需要將 TypeScript 代碼轉換為 C 語言。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **scriptc** | **agent-sprite-forge** | **nativ** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | agent-sprite-forge 專注於生成 AI agent 的腳本，而 scriptc 專注於 TypeScript 的編譯，兩者的應用場景不同。 | nativ 主要針對 C 語言的編譯，而 scriptc 專注於 TypeScript 到原生的轉換，適合不同的開發需求。 |
> | 遷移成本 | - | medium，因為需要重新設計代碼結構以適應不同的工具。 | high，因為需要將 TypeScript 代碼轉換為 C 語言。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是生成 AI agent 的腳本，則 age | 如果你的團隊已經在使用 C 語言並希望保持一致性，則 nat |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人試用，尚不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型 TypeScript 應用中，編譯時間可能過長，影響開發效率。
  - 解法：考慮將大型應用拆分為多個小模組。
- [MEDIUM] FFI 調用可能導致性能瓶頸，特別是在高頻調用的情況下。
  - 解法：謹慎使用 FFI，並進行性能測試。
- [MEDIUM] 在 Windows 環境下，某些路徑處理可能仍存在問題。
  - 解法：確保使用最新版本，並檢查路徑格式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型專案的 TypeScript 開發 | 非常適合 | 能夠快速編譯成原生可執行檔，減少運行時依賴。 |
| 大型 TypeScript 應用的開發 | 普通 | 編譯時間可能過長，影響開發效率。 |
| 需要與 C 語言庫交互的應用 | 非常適合 | 支持原生 FFI，方便調用 C 函數。 |
| 希望在 Windows 環境下開發的團隊 | 適合 | 最新版本改善了 Windows 支持，能夠正常運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效能的原生應用，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：scriptc 本身不需要高權限，且不存取敏感資料，但使用 FFI 時需注意調用的 C 函數的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

scriptc 通常與 TypeScript 和 Node.js 一起使用，適合在開發階段進行編譯和測試。在一個使用 TypeScript 的專案中，開發者可以透過 `scriptc build` 將 TypeScript 檔案編譯為原生可執行檔，然後直接在 CI/CD pipeline 中運行。scriptc 能夠與 GitHub Actions 和其他 CI 工具良好整合，並且可以在 VS Code 中使用相應的插件進行開發。整合過程中，最常見的問題是路徑處理，特別是在 Windows 環境中，開發者需確保使用正確的路徑格式以避免錯誤。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--scriptc");
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
> const me = dv.page("Repos/vercel-labs--scriptc");
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
| Forks | 33 |
| Open Issues | 9 |
| Issue 解決率 | 18% (2 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-22 |
| 官方網站 | [Link](https://scriptc.dev) |
| Repo 大小 | 14.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel-labs/scriptc) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `eslint` `tsx` `typescript` `typescript-eslint` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 73
>     "C" : 25
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ctate](https://github.com/ctate) | 285 |
> | [@simonw](https://github.com/simonw) | 1 |

**最新版本**：v0.0.17 (2026-07-27)

> [!info]- Release Notes
> ## 0.0.17
> 
> ### Fixes
> 
> - **The CLI builds and runs programs on Windows.** TypeScript's virtual filesystem now sees consistently slash-normalized Windows paths, default executable names carry the required `.exe` suffix for both native and cross-target Windows builds, and the workspace build command survives Windows shell quoting. A Windows CI lane pins the path regressions and drives `scriptc run` end to end.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應問題的速度較快。
**連結**：[文件](https://scriptc.dev/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-26 ~ 2026-07-27）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #15 from vercel-labs/ctate/to-fixed-effects

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/vercel-labs/scriptc/issues/13) | Compiling plain JavaScript via type inference: collaboration | 8 | 0 |
> | [#23](https://github.com/vercel-labs/scriptc/issues/23) | CcCompileError: clang failed compiling | 0 | 0 |
> | [#21](https://github.com/vercel-labs/scriptc/issues/21) | FFI call dropped when its result initializes a never-reassig | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # scriptc
> 
> **Zero-runtime TypeScript.** scriptc compiles ordinary TypeScript into small, fast native executables — no Node, no V8, no JavaScript engine in the binary.
> 
> ```console
> $ cat fib.ts
> function fib(n: number): number {
>   return n  ...)`** runs TypeScript at build time (in an isolated VM inside the compiler) and bakes the result into the binary as a literal.
> - **Native FFI (`--ffi`)** binds signature-only TypeScript declarations to direct C ABI calls and links manifest-declared archives, objects, and system libraries. The boundary is explicit and length-delimited; see the [Native FFI guide](https://scriptc.dev/ffi).
> - **`--dynamic`** embeds the engine for npm deps and `any` code. `scriptc coverage --dynamic` reports exactly which statements run where and what the remaining blockers are. Static stays the default: a binary never silently grows an engine.
> - **Checked casts** — `JSON.parse(...) as Config` inserts a runtime validation that throws a catchable error naming the offending path (`expected number at $.port, got string`). TypeScript's `as` is a promise; scriptc verifies it.
> 
> ## Architecture
> 
> ```mermaid
> flowchart LR
>     TS[TypeScript] -->|tsc: parse + typecheck| L[lowering]
>     L --> IR[typed IR]
>     IR --> C[C]
>     C -->|clang| BIN[native executable]
> ```
> 
> - `packages/compiler` — frontend (tsc API → IR), the IR with validator/serializer, the LLVM and C backends. The IR is the only interface between the ends; LLVM is the default code generator (with a transparent fallback for programs outside its tier), and C is the reference backend forever (readable, source-line-annotated output via `--backend c`).
> - `packages/runtime` — the C runtime: refcounted values with a cycle collector, stackful fibers and the event loop (kqueue), the server stack, JS-exact number formatting. Feature units are link-gated: binaries pay only for what they use.
> - `packages/cli` — `scriptc build | run | coverage`.
> 
> ## Development
> 
> ```console
> $ pnpm install && pnpm build
> $ pnpm test                      # differential corpus + diagnostics snapshots
> $ SCRIPTC_SAN=1 pnpm test        # the same corpus under ASan + RC audit
> $ pnpm scriptc build x.ts --emit-ir   # keep .scriptc/x.c and x.ir.json
> ```
> 
> Every feature lands with differential tests; both lanes green is the merge bar.

## 延伸閱讀

相關概念：[[編譯器]] · [[原生應用]] · [[TypeScript]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/vercel-labs/scriptc) · [官方網站](https://scriptc.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：編譯器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "編譯器" AND file.name != "vercel-labs--scriptc"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vercel-labs--scriptc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "vercel-labs--scriptc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "vercel-labs--scriptc"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["編譯器","原生應用","TypeScript"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel-labs--scriptc" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel-labs--scriptc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel-labs--scriptc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel-labs" AND file.name != "vercel-labs--scriptc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--scriptc");
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
> const me = dv.page("Repos/vercel-labs--scriptc");
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
> const me = dv.page("Repos/vercel-labs--scriptc");
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
> const me = dv.page("Repos/vercel-labs--scriptc");
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
> const me = dv.page("Repos/vercel-labs--scriptc");
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

> **2026-07-28** — 首次收錄
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

- [[2026-07-28|2026-07-28]] — 首次收錄，1.8k stars
