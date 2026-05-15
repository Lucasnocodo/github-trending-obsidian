---
repo: haydenbleasel/files-sdk
url: https://github.com/haydenbleasel/files-sdk
owner: haydenbleasel
owner_type: User
language: TypeScript
license: MIT
description: "A unified storage SDK for object and blob backends. One small, honest API. Web-standards I/O."
homepage: "https://files-sdk.dev/"
stars: 667
stars_per_day: 111
forks: 16
open_issues: 3
created: 2026-05-08
pushed_at: 2026-05-15
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "API 工具"
release_tag: "files-sdk@1.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "提供統一的物件和 blob 存儲 SDK，簡化不同後端的操作。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-22"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2694
readme_length: 2279
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:645,2026-05-15:667"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/agents"
  - "topic/blob"
  - "topic/cloudflare"
  - "topic/files"
  - "topic/google"
aliases:
  - "files-sdk"
  - "haydenbleasel/files-sdk"
  - "提供統一的物件和 blob 存儲 SDK，簡化不同後端的操作。"
---

# files-sdk

**645** stars · **129** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/haydenbleasel--files-sdk");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`files-sdk@1.2.0` `easy-install`

`agents` `blob` `cloudflare` `files` `google` `minio` `r2` `s3` `storage` `vercel`

> [!summary] 一句話摘要
> 提供統一的物件和 blob 存儲 SDK，簡化不同後端的操作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (129 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在多個雲存儲服務之間進行文件操作的全端開發者。
> **一句話重點** Files SDK 的設計理念是簡化多雲存儲的操作，讓開發者能夠專注於業務邏輯，而不是處理不同存儲服務的差異。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/haydenbleasel--files-sdk");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "haydenbleasel--files-sdk" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到統一的存儲 API，值得考慮。

> [!abstract] 核心創新
> 提供一個統一的 API 來操作多個物件和 blob 存儲後端。

## 專案簡介

Files SDK 是一個統一的存儲 SDK，支持多種物件和 blob 後端，讓開發者可以使用相同的 API 進行上傳、下載、刪除等操作。使用者只需指定適配器（如 S3、GCS、Azure 等），其餘代碼保持不變，這樣的設計讓開發者能夠快速切換不同的存儲提供商。核心 API 包括 `upload`、`download`、`delete` 等，並且所有操作都遵循 Web 標準輸入輸出，避免了特定提供商類型的混入。這意味著開發者可以使用 `Blob`、`File`、`ReadableStream` 等標準類型進行操作，提升了代碼的可維護性和可讀性。每個適配器都是獨立的入口點，這樣可以實現樹搖晃，僅打包所需的部分，減少了最終包的大小。

這個 SDK 還提供了一個逃生閥，讓開發者可以直接訪問每個適配器的原生客戶端，這對於需要使用特定功能的情況非常有用。使用者可以透過 `npm install files-sdk` 來安裝，並且快速上手，這對於需要快速開發的團隊來說非常友好。整體來看，Files SDK 提供了一個簡單而強大的解決方案，適合需要跨多個雲存儲服務的開發者。這個工具的設計理念是簡化操作，並提供一致的使用體驗，這在多雲環境中尤為重要。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 統一 API — 支持 `upload`、`download`、`delete` 等操作，無論是 S3、GCS 還是本地文件系統，API 統一。
- Web 標準 I/O — 支持 `Blob`、`File`、`ReadableStream` 等標準類型，避免特定提供商類型的混入。
- 逃生閥 — 每個適配器都可以訪問其原生客戶端，方便使用特定功能。
- 樹搖晃 — 每個適配器是獨立的入口點，僅打包所需的部分，減少最終包的大小。
- AI 工具集成 — 提供與 Vercel AI SDK 等的集成，簡化 AI 應用的文件操作。

## 快速開始

1. 安裝 SDK
```bash
npm install files-sdk
```
2. 導入 Files 和適配器
```bash
import { Files } from 'files-sdk'; import { s3 } from 'files-sdk/s3';
```
3. 初始化 Files 實例並上傳文件
```bash
const files = new Files({ adapter: s3({ bucket: 'uploads' }) }); await files.upload('avatars/abc.png', file, { contentType: 'image/png' });
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 files-sdk",
  "程式碼": "import { Files } from 'files-sdk';\nimport { s3 } from 'files-sdk/s3';\n\nconst files = new Files({ adapter: s3({ bucket: 'uploads' }) });\n\nawait files.upload('avatars/abc.png', file, { contentType: 'image/png' });\nconst got = await files.download('avatars/abc.png');",
  "預期輸出": "返回下載的文件內容"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 645 stars（129/天），forks 15（2.3%），顯示出穩定的增長潛力。作者 Hayden Bleasel 過去在開源社群中活躍，這個專案解決了多雲存儲整合的痛點，讓開發者不必為不同的存儲後端撰寫重複的代碼。這個工具的出現正好符合了現代應用對於靈活性和可擴展性的需求，特別是在雲計算日益普及的背景下。Forks/stars 比率相對較低，顯示出使用者對於這個專案的觀望態度，可能還在評估其穩定性和適用性。

## 適合誰使用

**目標受眾**：需要在多個雲存儲服務之間進行文件操作的全端開發者。

> [!example] 使用場景
> - 後端工程師用它來統一管理多個雲存儲服務的文件，因為只需一套 API 就能適配不同的存儲提供商，簡化了開發流程。
> - 資料科學家用它來快速上傳和下載大型數據集，因為它支持標準的 Blob 和 File 類型，無需轉換數據格式。
> - 全端開發者用它來在 Vercel 部署的應用中處理文件上傳，因為它的 API 設計簡潔，能快速集成到現有的工作流中。

## 架構分析

Files SDK 的架構設計為模組化，允許開發者根據需要選擇適配器，這樣的設計使得 SDK 可以輕鬆擴展到新的存儲服務。每個適配器都是獨立的入口點，這樣可以實現樹搖晃，僅打包所需的部分，減少最終包的大小。資料流方面，所有操作都遵循 Web 標準，這樣可以確保不同環境下的兼容性。選擇 TypeScript 作為開發語言，這樣可以提高代碼的可維護性和可讀性。整體架構的設計考量了擴展性和靈活性，能夠快速適應不同的存儲需求。

## 技術深入分析

Files SDK 的核心機制是提供一個統一的 API，讓開發者可以在不同的雲存儲服務之間無縫切換。這個 SDK 使用 TypeScript 開發，這樣可以提高代碼的可維護性和可讀性。每個適配器都是獨立的模組，這樣可以實現樹搖晃，僅打包所需的部分，減少最終包的大小。效能方面，這個 SDK 可以處理多種標準類型的資料，如 `Blob`、`File`、`ReadableStream` 等，這樣可以確保在不同環境下的兼容性。設計上，選擇了模組化的架構，使得 SDK 可以快速擴展到新的存儲服務，這對於快速變化的雲計算環境來說是非常重要的。技術風險方面，這個 SDK 依賴於外部的雲存儲服務，這可能在服務中斷時影響應用的可用性。整合方面，這個 SDK 可以輕鬆與現有的 Node.js 應用整合，並且支持與主流的 CI/CD 工具鏈相容，這使得開發者可以快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和快速入門指南，並且有範例代碼。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 統一 API，簡化多雲存儲操作。
> - 支持 Web 標準類型，提升代碼可維護性。
> - 模組化設計，支持樹搖晃，減少包大小。

> [!danger] 缺點
> - 目前僅支持特定的雲存儲服務。
> - 需要 Node.js 環境，無法在瀏覽器端使用。
> - 對於大型文件上傳，可能需要考慮網絡帶寬問題。

> [!warning] 注意事項
> - 目前僅支持指定的雲存儲服務，對於其他服務可能無法使用。
> - 需要 Node.js 環境，無法在瀏覽器端直接使用。
> - 對於大型文件上傳，可能需要考慮網絡帶寬和延遲問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的文件處理功能，但專注於 AI agent 的文件生成，適合需要生成文件的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於文件存儲和檢索，但缺乏統一的 API，使用上不如本專案方便。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的文件生成，提供特定的功能，但不如本專案通用。 | 如果你的專案需要生成和處理 AI agent 的文件，這個工具會更合適。 | medium，因為需要重新設計 API 調用的邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於文件存儲和檢索，但缺乏統一的 API，使用上不如本專案方便。 | 如果你的專案只需要簡單的文件存儲功能，這個工具會更簡單。 | low，因為 API 較為簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **files-sdk** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的文件生成，提供特定的功能，但不如本專案通用。 | 專注於文件存儲和檢索，但缺乏統一的 API，使用上不如本專案方便。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 調用的邏輯。 | low，因為 API 較為簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的專案需要生成和處理 AI agent 的文件，這個工 | 如果你的專案只需要簡單的文件存儲功能，這個工具會更簡單。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些雲存儲服務上，文件上傳速度可能不穩定。
  - 解法：考慮使用分片上傳來提高穩定性。
- **[HIGH]** 對於大型文件，可能需要額外的網絡帶寬。
  - 解法：在上傳前壓縮文件以減少大小。
- [MEDIUM] 目前對於某些適配器的支持可能不完全。
  - 解法：查看官方文檔以獲取最新的適配器支持情況。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 統一的 API 可以大幅減少開發時間，適合快速迭代的環境。 |
| 需要處理大量文件的資料科學團隊 | 適合 | 支持多種標準類型，方便進行數據處理。 |
| 大型企業的核心存儲系統 | 不適合 | 目前處於 alpha 階段，穩定性不足，不建議用於生產環境。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到統一的存儲 API，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但依賴外部雲存儲服務的安全性需要注意。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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
| Forks | 15 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-10 |
| 建立日期 | 2026-05-08 |
| 官方網站 | [Link](https://files-sdk.dev/) |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/haydenbleasel/files-sdk) |
| Topics | `agents` `blob` `cloudflare` `files` `google` `minio` `r2` `s3` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@shikijs/langs` `@shikijs/themes` `@changesets/cli` `husky` `oxfmt` `oxlint` `turbo` `typescript` `ultracite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@haydenbleasel](https://github.com/haydenbleasel) | 114 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 8 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 5 |
> | [@bensabic](https://github.com/bensabic) | 2 |

**最新版本**：files-sdk@1.2.0 (2026-05-10)

> [!info]- Release Notes
> ### Minor Changes
> 
> -   9758347: Add AI SDK tools subpath (`files-sdk/ai-sdk`) exporting `createFileTools(...)` — wraps a configured `Files` instance as a set of Vercel AI SDK tools (`listFiles`, `getFileMetadata`, `downloadFile`, `getFileUrl`, `uploadFile`, `deleteFile`, `copyFile`, `signUploadUrl`) ready to plug into `generateText` / `streamText` / any agent. Mirrors `@github-tools/sdk`'s ergonomics: write tools require approval by default (configurable globally or per-tool via `requireApproval`), `readOnly: true` strips writes entirely, and `overrides` lets callers patch tool descriptions/titles/etc. without touching `execute`. Individual tool factories (`uploadFile`, `downloadFile`, …) are also exported for cherry-picking. `ai` and `zod` are optional peer dependencies — only required when consuming the new subpath.
> 
> -   2d811b1: Add Claude Agent SDK tools subpath (`files-sdk/claude`) exporting `createClaudeFileTools(...)` — wraps a configured `Files` instance as an in-process MCP server ready to drop into `query()` from [`@anthropic-ai/claude-agent-sdk`](https://docs.claude.com/en/api/agent-sdk/overview) (the renamed Claude Code SDK).
> 
>     The Claude Agent SDK consumes tools differently than the OpenAI/Vercel adapters: tools are bundled into an `SdkMcpServer` and surfaced to the agent via `mcpServers` + `allowedTools`, with approval enforced through a top-level `canUseTool` callback. The factory returns all four pieces:
> 
>     ```ts
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者可以在官方網站找到詳細文檔。
**連結**：[文件](https://files-sdk.dev/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-05-10）
> **活躍天數** 1 天 · **最新 commit** Version Packages (#19)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/haydenbleasel/files-sdk/issues/24) | Add support for a file handle API via Files#file() `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Files SDK
> 
> A unified storage SDK for object and blob backends. One small, honest API. Web-standards I/O. An escape hatch when you need the native client.
> 
> ## Install
> 
> ```sh
> npm install files-sdk
> ```
> 
> ## Quick start
> 
> ```ts
> import { Files } from "files-sdk";
> import { s3 } from "files-sdk/s3";
> 
> const files = new Files({
>   adapter: s3({ bucket: "uploads" }),
> });
> 
> await files.upload("avatars/abc.png", file, { contentType: "image/png" });
> const got = await files.download("avatars/abc.png");
> ```
> 
> Swap the adapter import (`files-sdk/r2`, `files-sdk/gcs`, `files-sdk/azure`, …) and the rest of your code stays the same.
> 
> ## What you get
> 
> - **One API across providers** — `upload`, `download`, `head`, `delete`, `copy`, `list`, `url`, `signedUploadUrl`. The shape is the same on S3, GCS, Azure, Vercel Blob, the local filesystem, and consumer providers like Dropbox.
> - **Web-standard I/O** — bodies are `Blob`, `File`, `ReadableStream`, `Uint8Array`, `ArrayBuffer`, or `string`. No provider-specific types leak into your code.
> - **Escape hatch** — every adapter exposes its native client at `files.raw`, so provider-specific features are one property access away.
> - **Tree-shakeable** — each adapter is a separate entry point. You only bundle what you import.
> 
> ## Adapters
> 
> A growing catalog covering S3 and S3-compatible stores, the major cloud blob platforms, edge/serverless blob services, the local filesystem, and consumer file providers. See [files-sdk.dev](https://files-sdk.dev) for the current list and per-adapter setup.
> 
> ## AI tools
> 
> A growing set of subpaths wrap a configured `Files` instance as ready-made tools for popular AI SDKs — currently the [Vercel AI SDK](https://ai-sdk.dev) (`files-sdk/ai-sdk`), OpenAI's [Responses API](https://platform.openai.com/docs/api-reference/responses) and [Agents SDK](https://openai.github.io/openai-agents-js/) (`files-sdk/openai`), and Anthropic's [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) (`files-sdk/claude`). All share the same file operations and approval-gating defaults, so models can browse, read, and (optionally) mutate your bucket through the same unified surface as your application code. See [files-sdk.dev](https://files-sdk.dev) for the current list and per-SDK setup.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[API 設計]] · [[雲存儲]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[aattaran--deepclaude|aattaran/deepclaude]]

[GitHub](https://github.com/haydenbleasel/files-sdk) · [官方網站](https://files-sdk.dev/)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "haydenbleasel--files-sdk"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "haydenbleasel--files-sdk"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "haydenbleasel--files-sdk" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "haydenbleasel--files-sdk"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","雲存儲","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "haydenbleasel--files-sdk" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/haydenbleasel--files-sdk");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "haydenbleasel--files-sdk" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "haydenbleasel" AND file.name != "haydenbleasel--files-sdk"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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
> const me = dv.page("Repos/haydenbleasel--files-sdk");
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

> **2026-05-14** — 首次收錄
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

- [[2026-05-15|2026-05-15]] — 再次上榜，667 stars
- [[2026-05-14|2026-05-14]] — 首次收錄，645 stars
