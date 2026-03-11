---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 424
stars_per_day: 71
forks: 84
open_issues: 39
created: 2026-03-04
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "生成式視頻"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一款開源桌面應用程式，用於生成 LTX 模型的視頻。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:411,2026-03-11:415,2026-03-11:424"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - org
  - "topic/generative_ai"
  - "topic/ltx"
  - "topic/ltx_2"
  - "topic/non_linear_editing"
aliases:
  - "LTX-Desktop"
  - "Lightricks/LTX-Desktop"
  - "一款開源桌面應用程式，用於生成 LTX 模型的視頻。"
---

# LTX-Desktop

**424** stars · **71** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Lightricks--LTX-Desktop");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.1`

`generative-ai` `ltx` `ltx-2` `non-linear-editing`

> [!summary] 一句話摘要
> 一款開源桌面應用程式，用於生成 LTX 模型的視頻。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (71 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在本地生成視頻但又不想依賴雲端服務的創作者和開發者。
> **一句話重點** LTX Desktop 的本地生成能力和多樣化的生成模式使其在視頻生成工具中脫穎而出。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到高效的視頻生成工具，值得一試。

> [!abstract] 核心創新
> LTX Desktop 提供本地視頻生成的能力，特別針對高性能 GPU 進行優化。

## 專案簡介

LTX Desktop 是一款開源桌面應用，專為在支援的 Windows NVIDIA GPU 上生成視頻而設計，並提供 API 模式以支援不支援的硬體和 macOS。用戶可以透過文本、圖像或音頻生成視頻，並且具備視頻編輯功能。這款應用的核心賣點在於能夠在本地生成視頻，尤其是對於擁有 32GB VRAM 以上的 GPU 用戶，能夠直接下載模型權重並進行高效生成。應用的前端架構正在進行重構，這意味著未來可能會有重大變更。開發者可以使用 `pnpm dev` 命令啟動開發模式，並且支援多平台的安裝和運行。

技術上，這個專案使用了 Electron 作為桌面應用框架，並結合了 FastAPI 作為後端服務。這樣的選擇使得應用能夠在本地和 API 模式之間靈活切換，並且能夠利用 GPU 加速視頻生成。與其他視頻生成工具相比，LTX Desktop 允許用戶在本地生成視頻，這樣可以減少延遲並提高隱私性。當前的熱門問題包括對於低於 32GB VRAM 的 GPU 支援和 Linux 的兼容性，這顯示出用戶對於硬體要求的關注。整體來看，這是一個適合對視頻生成有需求的開發者和創作者的工具，但仍在 beta 階段，使用時需注意可能的破壞性變更。

**技術棧**：`Electron` · `FastAPI` · `TypeScript` · `Python 3.12+`

## 重點功能

- 文本生成視頻 — 支援將文本轉換為視頻內容。
- 圖像生成視頻 — 允許用戶上傳圖像並生成相應的視頻。
- 音頻生成視頻 — 用戶可以將音頻文件轉換為視頻。
- 視頻編輯功能 — 提供用於編輯生成視頻的界面。
- API 模式 — 支援不支援的硬體進行視頻生成。
- 多平台支援 — 同時支援 Windows 和 macOS 系統。

## 快速開始

1. 安裝依賴
```bash
pnpm setup:dev:mac
```
2. 啟動開發模式
```bash
pnpm dev
```
3. 執行後端測試
```bash
pnpm backend:test
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 424 stars（71/天），forks 84（19.8%），顯示出強勁的增長潛力。這個專案由 Lightricks 團隊開發，專注於生成視頻的需求，解決了許多現有工具在性能和隱私上的不足。特別是對於高性能 GPU 的支持，讓用戶能夠在本地生成視頻，這在市場上是相對少見的。社群對於硬體支持的需求也促進了討論，進一步提升了專案的曝光率。這個工具的出現正好契合了生成式 AI 的熱潮，並且在技術上具備了靈活的架構設計。forks/stars 比率接近 20%，顯示出許多開發者對於這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要在本地生成視頻但又不想依賴雲端服務的創作者和開發者。

> [!example] 使用場景
> - 視頻創作者用它來生成高品質的視頻內容，因為它能夠利用本地 GPU 加速生成，減少了生成時間。
> - 開發者用它來測試不同的 LTX 模型，因為它提供了靈活的 API 模式，能夠在不同硬體上運行。
> - 教育工作者用它來創建教學視頻，因為它的視頻編輯功能可以幫助他們快速編輯和生成內容。

## 架構分析

LTX Desktop 採用 Electron 作為桌面應用框架，這使得它能夠在多平台上運行。前端使用 TypeScript 和 React，後端則基於 FastAPI，這樣的架構設計使得應用能夠快速響應用戶操作。數據流方面，前端通過 IPC 與後端進行通信，後端則負責處理視頻生成的請求。

選擇 FastAPI 是因為它能夠提供高效的 API 支援，並且易於擴展。這樣的設計雖然增加了開發的複雜度，但也使得應用的功能更加靈活。未來可能會面臨的擴展瓶頸在於對於不同硬體的支援，尤其是對於低於 32GB VRAM 的 GPU，這可能會影響到用戶的使用體驗。

## 技術深入分析

LTX Desktop 的核心技術機制是基於 Electron 和 FastAPI 的架構，這使得它能夠在多平台上運行並提供高效的 API 支援。前端使用 TypeScript 和 React，這樣的選擇使得開發者能夠快速構建和維護 UI。應用能夠處理多種生成請求，包括文本、圖像和音頻，並且能夠在本地 GPU 上進行加速。效能方面，對於擁有 32GB VRAM 的 GPU，生成速度非常快，但對於低於這個標準的硬體，性能會受到限制。設計上選擇 FastAPI 是因為其高效的請求處理能力，這對於需要即時響應的視頻生成應用來說至關重要。技術風險方面，對於低性能硬體的支援不足可能會導致用戶流失，這是未來需要解決的問題。整合方面，這個工具能夠與現有的開發環境（如 VS Code）良好整合，並且支援 CI/CD 流程，這對於團隊協作非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝和使用範例。安裝過程相對順暢，但需要注意安裝 Node.js 和 Python 的版本。提供了良好的快速入門指南，文件目前僅有英文版。

## 優缺點分析

> [!success] 優點
> - 本地生成視頻，減少延遲並提高隱私性。
> - 支援多種生成模式（文本、圖像、音頻），功能多樣。
> - 活躍的社群和開發者支持，能夠快速解決問題。

> [!danger] 缺點
> - 仍在 beta 階段，可能會有不穩定的情況。
> - 對於低於 32GB VRAM 的 GPU 支援有限，使用者需要高性能硬體。
> - Linux 支援尚未實現，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Windows 和 macOS，對於 Linux 的支援尚未實現。
> - 需要 NVIDIA GPU 以實現本地生成，對於低於 32GB VRAM 的 GPU 支援有限。
> - 目前仍在 beta 階段，可能會有破壞性變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步而非視頻生成，適合需要高效文件管理的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據抓取，並不具備視頻生成能力，適合數據分析的需求。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 針對即時通訊的代理工具，與視頻生成無關，適合需要網絡代理的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據抓取和處理，並不具備視頻生成能力。 | 如果你的需求是數據分析而非視頻生成，這個工具更合適。 | low，因為兩者的功能範疇不同。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，適合需要高效文件管理的場景。 | 如果你的需求是文件管理而非視頻生成，這個工具會更適合。 | low，因為兩者的功能範疇不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **LTX-Desktop** | **Shadowbroker** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據抓取和處理，並不具備視頻生成能力。 | 專注於文件同步，適合需要高效文件管理的場景。 |
> | 遷移成本 | - | low，因為兩者的功能範疇不同。 | low，因為兩者的功能範疇不同。 |
> | 適用場景 | 主要場景 | 如果你的需求是數據分析而非視頻生成，這個工具更合適。 | 如果你的需求是文件管理而非視頻生成，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於低於 32GB VRAM 的 GPU，性能不佳，可能無法正常工作。
  - 解法：考慮使用支持的高性能 GPU。
- **[HIGH]** Linux 支援尚未實現，無法在 Linux 環境中運行。
  - 解法：目前無法解決，需等待未來更新。
- [MEDIUM] 在某些情況下，安裝過程可能會出現錯誤，特別是依賴項未正確安裝。
  - 解法：確保所有依賴項正確安裝，並檢查版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要生成視頻內容 | 非常適合 | 能夠利用本地 GPU 加速生成，提升效率。 |
| 大型企業需要穩定的視頻生成工具 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 教育機構需要創建教學視頻 | 適合 | 具備多種生成模式，能夠滿足不同需求。 |
| 獨立開發者希望快速生成視頻原型 | 非常適合 | 支持多種生成模式，且能夠快速迭代。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高效的視頻生成工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 84 |
| Open Issues | 39 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://www.ltx.video) |
| Repo 大小 | 60.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lightricks/LTX-Desktop) |
| Topics | `generative-ai` `ltx` `ltx-2` `non-linear-editing` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `class-variance-authority` `clsx` `electron-updater` `js-yaml` `lucide-react` `react` `react-dom` `react-dropzone` `tailwind-merge` `@resvg/resvg-js` `@types/js-yaml` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 74
>     "Python" : 24
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ofirgluzman](https://github.com/ofirgluzman) | 26 |
> | [@alexger](https://github.com/alexger) | 6 |
> | [@DStar1](https://github.com/DStar1) | 1 |

**最新版本**：v1.0.1 — LTX Desktop 1.0.1 (2026-03-05)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/Lightricks/ltx-desktop/compare/v1.0.0...v1.0.1

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://www.ltx.video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-09）
> **活躍天數** 3 天 · **最新 commit** Add delete button to video assets in Gen Space and make it subtle

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/Lightricks/LTX-Desktop/issues/16) | Support CPU offloading for text encoder to enable local infe | 13 | 4 |
> | [#36](https://github.com/Lightricks/LTX-Desktop/issues/36) | Add support for LTX-2.3-fp8 | 8 | 3 |
> | [#6](https://github.com/Lightricks/LTX-Desktop/issues/6) | GGUF and PyTorch XPU support ! | 8 | 3 |
> | [#4](https://github.com/Lightricks/LTX-Desktop/issues/4) | Linux support ? | 7 | 2 |
> | [#14](https://github.com/Lightricks/LTX-Desktop/issues/14) | LTX Destkop Cant change install models folder | 5 | 10 |

## README 摘錄

> [!info]- 展開查看原文 README
> # LTX Desktop
> 
> LTX Desktop is an open-source desktop app for generating videos with LTX models — locally on supported Windows NVIDIA GPUs, with an API mode for unsupported hardware and macOS.
> 
> > **Status: Beta.** Expect breaking changes.
> > Frontend architecture is under active refactor; large UI PRs may be declined for now (see [`CONTRIBUTING.md`](docs/CONTRIBUTING.md)).
> 
>   
> 
>   
> 
>   
> 
> ## Features
> 
> - Text-to-video generation
> - Image-to-video generation
> - Audio-to-video generation
> - Video edit generation (Retake)
> - Video Editor Interface
> - Video Editing Projects
> 
> ## Local vs API mode
> 
> | Platform / hardware | Generation mode | Notes |
> | --- | --- | --- |
> | Windows + CUDA GPU with **≥32GB VRAM** | Local generation | Downloads model weights locally |
> | Windows (no CUDA, |HTTP: localhost:8000| BE["Backend (FastAPI + Python)"]
>   UI -->|IPC via preload: window.electronAPI| EL["Electron main (TS)"]
>   EL --> OS["OS integration (files, dialogs, ffmpeg, process mgmt)"]
>   BE --> GPU["Local models + GPU (when supported)"]
>   BE --> EXT["External APIs (only for API-backed features)"]
>   EL --> DATA["App data folder (settings/models/logs)"]
>   BE --> DATA
> ```
> 
> ## Development (quickstart)
> 
> Prereqs:
> 
> - Node.js
> - `uv` (Python package manager)
> - Python 3.12+
> - Git
> 
> Setup:
> 
> ```bash
> # macOS
> pnpm setup:dev:mac
> 
> # Windows
> pnpm setup:dev:win
> ```
> 
> Run:
> 
> ```bash
> pnpm dev
> ```
> 
> Debug:
> 
> ```bash
> pnpm dev:debug
> ```
> 
> `dev:debug` starts Electron with inspector enabled and starts the Python backend with `debugpy`.
> 
> Typecheck:
> 
> ```bash
> pnpm typecheck
> ```
> 
> Backend tests:
> 
> ```bash
> pnpm backend:test
> ```
> 
> Building installers:
> - See [`INSTALLER.md`](docs/INSTALLER.md)
> 
> ## Telemetry
> 
> LTX Desktop collects minimal, anonymous usage analytics (app version, platform, and a random installation ID) to help prioritize development. No personal information or generated content is collected. Analytics is enabled by default and can be disabled in **Settings > General > Anonymous Analytics**. See [`TELEMETRY.md`](docs/TELEMETRY.md) for details.
> 
> ## Docs
> 
> - [`INSTALLER.md`](docs/INSTALLER.md) — building installers
> - [`TELEMETRY.md`](docs/TELEMETRY.md) — telemetry and privacy
> - [`backend/architecture.md`](backend/architecture.md) — backend architecture
> 
> ## Contributing
> 
> See [`CONTRIBUTING.md`](docs/CONTRIBUTING.md).
> 
> ## License
> 
> Apache-2.0 — see [`LICENSE.txt`](LICENSE.txt).
> 
> Third-party notices (including model licenses/terms): [`NOTICES.md`](NOTICES.md).
> 
> Model weights are downloaded separately and may be governed by additional licenses/terms.

## 延伸閱讀

相關概念：[[生成式 AI]] · [[視頻編輯]] · [[本地推論]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 直接競品（同子分類：生成式視頻）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "生成式視頻" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Lightricks--LTX-Desktop" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["生成式 AI","視頻編輯","本地推論"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Lightricks--LTX-Desktop" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "Lightricks" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，411 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
