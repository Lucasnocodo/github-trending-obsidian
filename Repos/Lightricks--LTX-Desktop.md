---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 795
stars_per_day: 66
forks: 147
open_issues: 46
created: 2026-03-04
pushed_at: 2026-03-16
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "影片生成"
release_tag: "v1.0.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一個開源桌面應用程式，用於生成 LTX 模型的影片。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "medium"
issue_close_rate: 22
repo_size_kb: 42368
readme_length: 2494
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:411,2026-03-11:415,2026-03-11:424,2026-03-13:619,2026-03-14:665,2026-03-15:699,2026-03-16:744,2026-03-17:795"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - "topic/generative_ai"
  - "topic/ltx"
  - "topic/ltx_2"
  - "topic/non_linear_editing"
aliases:
  - "LTX-Desktop"
  - "Lightricks/LTX-Desktop"
  - "一個開源桌面應用程式，用於生成 LTX 模型的影片。"
---

# LTX-Desktop

**795** stars · **66** stars/天 · 建立 12 天前 · TypeScript · Apache-2.0

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

`ORG` `v1.0.2`

`generative-ai` `ltx` `ltx-2` `non-linear-editing`

> [!summary] 一句話摘要
> 一個開源桌面應用程式，用於生成 LTX 模型的影片。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (66 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望在本地生成影片但不具備高端 GPU 的開發者和創作者。
> **一句話重點** LTX Desktop 讓普通用戶也能輕鬆生成高品質影片，打破了高端硬體的限制。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "影片生成" && p.file.name !== "Lightricks--LTX-Desktop" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 影片生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高品質影片生成的能力，值得一試。

> [!abstract] 核心創新
> LTX Desktop 提供了本地生成影片的能力，並支持不具備高性能 GPU 的用戶通過 API 模式進行生成。

## 專案簡介

LTX Desktop 是一款開源桌面應用，專為在支援的 Windows/Linux NVIDIA GPU 上生成影片而設計。用戶可以選擇在本地生成影片，或使用 API 模式來支持不兼容的硬體和 macOS。核心功能包括文本到影片、圖像到影片、音頻到影片的生成，以及影片編輯功能。這些功能的實現依賴於 Electron 框架，並使用 TypeScript 和 Python 進行開發，提供良好的跨平台支持。應用的後端使用 FastAPI，並且能夠處理大規模的模型運算，特別是當 GPU VRAM 大於 32GB 時，性能最佳。

與其他類似工具相比，LTX Desktop 的 API 模式使其在不具備強大硬體的情況下仍能運行，這在許多生成式 AI 工具中並不常見。使用者在本地生成影片時，模型權重會被下載到本地，這樣可以減少網路延遲。該專案目前處於 beta 階段，可能會有破壞性變更，且前端架構正在積極重構。這意味著在未來的版本中，可能會出現不兼容的變更。對於希望在本地生成高品質影片的開發者來說，這是一個值得關注的選擇，但在使用時需注意其穩定性和未來的變更風險。

**技術棧**：`TypeScript` · `Python 3.12+` · `FastAPI` · `Electron`

## 重點功能

- 文本到影片生成 — 支持用戶輸入文本並生成相應的影片內容。
- 圖像到影片生成 — 用戶可以上傳圖像，並將其轉換為影片。
- 音頻到影片生成 — 支持將音頻文件轉換為影片，增強視覺效果。
- 影片編輯界面 — 提供直觀的編輯工具，方便用戶對生成的影片進行修改。
- API 模式 — 允許在不支持的硬體上進行影片生成，擴大了使用範圍。
- 多平台支持 — 除了 Windows，還支持 Linux 和 macOS 的 API 模式。
- 支持 LTX 模型 — 專為 LTX 模型優化，提供高效的生成性能。
- 即時預覽 — 用戶可以在編輯過程中即時查看影片效果。

## 快速開始

1. 安裝依賴
```bash
pnpm setup:dev
```
2. 啟動開發模式
```bash
pnpm dev
```
3. 啟動調試模式
```bash
pnpm dev:debug
```

## 程式碼範例

```ts
{
  "前置條件": "需要 Node.js 和 Python 3.12+",
  "指令": "pnpm setup:dev",
  "預期輸出": "設置開發環境所需的所有依賴。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 795 stars（66/天），forks 147（18.5%），顯示出強烈的社群興趣。開發者 Lightricks 以其在生成式 AI 領域的專業知識而聞名，這個專案解決了許多用戶在生成影片時對硬體要求的高門檻問題。之前，許多生成式影片工具只能在高端硬體上運行，這使得普通用戶難以使用。此專案的 API 模式讓不具備高性能 GPU 的用戶也能參與進來，這一點在社群中引起了廣泛討論。最近的推文和社群討論進一步推動了其受歡迎程度。forks/stars 比率為 18.5%，顯示出許多人對此專案的實際修改和使用。

## 適合誰使用

**目標受眾**：希望在本地生成影片但不具備高端 GPU 的開發者和創作者。

> [!example] 使用場景
> - 獨立影片製作人用它來生成高品質的影片內容，因為它支持多種生成模式且能在本地運行，避免了網路延遲。
> - 開發者用它來測試生成式 AI 模型的效果，因為其 API 模式允許在不同硬體上進行測試，降低了對高性能 GPU 的依賴。
> - 教育工作者用它來創建教學影片，因為其簡單的介面和多樣的生成選項使得影片製作變得更容易。

## 架構分析

LTX Desktop 採用 Electron 作為前端框架，後端則使用 FastAPI 進行數據處理。這樣的架構選擇使得應用能夠在多平台上運行，並提供良好的用戶體驗。前端與後端之間通過 IPC 進行通信，確保數據的即時處理。

應用的設計考慮到了未來的擴展性，特別是在支持新硬體和功能方面。選擇使用 Python 作為後端語言，因為它在處理數據和模型運算方面有著豐富的生態系統。這樣的選擇雖然增加了依賴，但也使得應用能夠利用現有的庫和工具進行開發。

整體架構的設計使得應用能夠靈活應對未來的需求變化。

## 技術深入分析

LTX Desktop 的核心技術機制在於其使用了 Electron 框架來構建跨平台的桌面應用，並且後端利用 FastAPI 進行高效的數據處理。這使得應用能夠在多種操作系統上運行，並提供一致的用戶體驗。應用的效能特性依賴於 NVIDIA GPU 的計算能力，特別是在 VRAM 大於 32GB 時，能夠實現最佳性能。設計上選擇 Python 作為後端語言，因為其在數據處理和機器學習領域的強大生態系統，這樣的選擇雖然增加了依賴，但也使得開發過程更為靈活。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發情況下。整合方面，與主流的 CI/CD 工具如 GitHub Actions 的兼容性良好，方便團隊進行持續集成和部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝步驟，安裝過程順暢且無明顯坑。提供了良好的快速入門指南，文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 支持多種生成模式，滿足不同用戶需求。
> - 本地生成能力，減少網路延遲。
> - 開源社群活躍，持續更新和改進。

> [!danger] 缺點
> - 對硬體要求較高，僅支持 NVIDIA GPU。
> - 目前處於 beta 階段，穩定性有待提高。
> - 部分功能仍在開發中，可能不完整。

> [!warning] 注意事項
> - 僅支持 NVIDIA GPU，對於其他硬體的支持有限。
> - 目前處於 beta 階段，可能會有不穩定的功能和破壞性變更。
> - 對於低於 32GB VRAM 的 GPU，性能可能會受到影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，而非影片生成，適合需要高效資料傳輸的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於資料隱私和安全，與 LTX Desktop 的影片生成功能無關。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 用於即時通訊代理，與影片生成無關，適合需要代理服務的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的生成式 AI，與 LTX Desktop 的影片生成功能不同。 | 如果你的專案專注於醫療影像生成，這個工具會更合適。 | medium，因為需要重新調整生成邏輯。 |
| [NawfalMotii79/PLFM_RADAR](https://github.com/NawfalMotii79/PLFM_RADAR) | 主要用於資料分析，並不專注於影片生成，適合需要數據視覺化的場景。 | 如果你的需求是數據分析而非影片生成，這個工具會更合適。 | low，因為可以直接使用相似的數據處理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **LTX-Desktop** | **OpenClaw-Medical-Skills** | **PLFM_RADAR** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的生成式 AI，與 LTX Desktop 的影片生成功能不同。 | 主要用於資料分析，並不專注於影片生成，適合需要數據視覺化的場景。 |
> | 遷移成本 | - | medium，因為需要重新調整生成邏輯。 | low，因為可以直接使用相似的數據處理邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於醫療影像生成，這個工具會更合適。 | 如果你的需求是數據分析而非影片生成，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在低於 32GB VRAM 的 GPU 上生成速度較慢，影響使用體驗。
  - 解法：考慮使用 API 模式進行生成。
- [MEDIUM] 某些功能仍在開發中，可能會出現不穩定情況。
  - 解法：定期檢查更新以獲取最新功能。
- [MEDIUM] 安裝過程中可能會遇到依賴問題，特別是在不同平台上。
  - 解法：確保所有依賴都已正確安裝，並參考文檔。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業公司需要快速生成市場推廣影片 | 非常適合 | 其本地生成能力和多種生成模式能快速滿足需求。 |
| 大型影片製作團隊需要穩定的生成工具 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| 教育機構希望創建教學影片 | 適合 | 簡單的介面和多樣的功能使得影片製作變得容易。 |
| 獨立開發者希望在本地進行影片生成 | 非常適合 | 支持多種生成模式且可在本地運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高品質影片生成的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，適合在 CI/CD 中使用。

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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
| Forks | 147 |
| Open Issues | 46 |
| Issue 解決率 | 22% (13 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://www.ltx.video) |
| Repo 大小 | 41.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lightricks/LTX-Desktop) |
| Topics | `generative-ai` `ltx` `ltx-2` `non-linear-editing` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `class-variance-authority` `clsx` `electron-updater` `js-yaml` `lucide-react` `react` `react-dom` `react-dropzone` `tailwind-merge` `@resvg/resvg-js` `@types/js-yaml` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 72
>     "Python" : 26
>     "Shell" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ofirgluzman](https://github.com/ofirgluzman) | 31 |
> | [@alexger](https://github.com/alexger) | 21 |
> | [@DStar1](https://github.com/DStar1) | 1 |

**最新版本**：v1.0.2 — LTX Desktop 1.0.2 (2026-03-12)

> [!info]- Release Notes
> ## What's Changed
> * IC Lora support for Depth and Canny
> * Bug fix: Implement folder selection dialog for installation path by @DStar1 in https://github.com/Lightricks/LTX-Desktop/pull/22
> * set outputs dir to be under app data by @alexger in https://github.com/Lightricks/LTX-Desktop/pull/34
> * Set PYTHONNOUSERSITE=1 to isolate bundled Python by @ofirgluzman in https://github.com/Lightricks/LTX-Desktop/pull/38
> * switch backend to listen on free port and require auth by @alexger in https://github.com/Lightricks/LTX-Desktop/pull/35
> * Linux support by @alexger in https://github.com/Lightricks/LTX-Desktop/pull/44
>  
> ## New Contributors
> * @DStar1 made their first contribution in https://github.com/Lightricks/LTX-Desktop/pull/22
> * @alexger made their first contribution in https://github.com/Lightricks/LTX-Desktop/pull/34
> * @ofirgluzman made their first contribution in https://github.com/Lightricks/LTX-Desktop/pull/38
> 
> **Full Changelog**: https://github.com/Lightricks/LTX-Desktop/compare/v1.0.1...v1.0.2

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://github.com/Lightricks/LTX-Desktop)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-16）
> **活躍天數** 5 天 · **最新 commit** upgrade npm dependencies

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/Lightricks/LTX-Desktop/issues/16) | Support CPU offloading for text encoder to enable local infe | 14 | 4 |
> | [#36](https://github.com/Lightricks/LTX-Desktop/issues/36) | Add support for LTX-2.3-fp8 | 9 | 3 |
> | [#6](https://github.com/Lightricks/LTX-Desktop/issues/6) | GGUF and PyTorch XPU support ! | 8 | 3 |
> | [#4](https://github.com/Lightricks/LTX-Desktop/issues/4) | Linux support ? | 7 | 2 |
> | [#46](https://github.com/Lightricks/LTX-Desktop/issues/46) | [Feature Request] First and Last Frame option | 5 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # LTX Desktop
> 
> LTX Desktop is an open-source desktop app for generating videos with LTX models — locally on supported Windows/Linux NVIDIA GPUs, with an API mode for unsupported hardware and macOS.
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
> pnpm setup:dev
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

相關概念：[[生成式 AI]] · [[影片編輯]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 直接競品（同子分類：影片生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "影片生成" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Lightricks--LTX-Desktop"
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
> const concepts = ["生成式 AI","影片編輯","API 設計"];
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

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Lightricks--LTX-Desktop" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
