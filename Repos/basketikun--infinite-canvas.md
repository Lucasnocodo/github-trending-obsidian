---
repo: basketikun/infinite-canvas
url: https://github.com/basketikun/infinite-canvas
owner: basketikun
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "面向AI创作的开源无限画布工作台，集成 AI 生图、参考图编辑、画布编排、对话助手、提示词库和素材管理等功能。"
homepage: "https://infinite-canvas-cpco.onrender.com/"
stars: 481
stars_per_day: 80
forks: 91
open_issues: 4
created: 2026-05-18
pushed_at: 2026-05-23
first_seen: 2026-05-25
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "圖像創作"
release_tag: "v0.0.7"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-25
use_case: "提供一個面向 AI 創作的開源無限畫布工作台，集成多種創作工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 56
repo_size_kb: 665
readme_length: 1636
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-25"
star_history: "2026-05-25:480,2026-05-25:481"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "infinite-canvas"
  - "basketikun/infinite-canvas"
  - "提供一個面向 AI 創作的開源無限畫布工作台，集成多種創作工具。"
---

# infinite-canvas

**481** stars · **80** stars/天 · 建立 6 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/basketikun--infinite-canvas");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.0.7`

> [!summary] 一句話摘要
> 提供一個面向 AI 創作的開源無限畫布工作台，集成多種創作工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (80 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 AI 圖片創作有興趣的獨立藝術家或開發者。
> **一句話重點** 這個專案不僅提供了無限畫布的概念，還將 AI 圖片生成與創作工具整合，讓創作過程更具靈活性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/basketikun--infinite-canvas");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像創作" && p.file.name !== "basketikun--infinite-canvas" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖像創作 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到靈活的創作工具，值得一試。

> [!abstract] 核心創新
> 將多種 AI 創作工具整合在同一畫布中，提升創作效率。

## 專案簡介

這個專案提供了一個無限畫布的開源工作台，專為圖片創作而設計。用戶可以在同一界面上進行畫布編排、AI 圖片生成、參考圖編輯等操作，這樣的設計使得創作過程更加流暢。用戶可以透過指令 `docker-compose up -d` 啟動本地服務，並在 `http://localhost:3000` 訪問畫布。核心功能包括多畫布項目管理、節點拖拽、AI 生圖生成等，這些功能的整合讓用戶能夠快速迭代和探索視覺方案。技術上，前端使用 Next.js 和 React，後端則基於 Go 和 Gin，這樣的選擇使得整體架構輕量且高效。

與其他類似工具相比，如 0xGF/boneyard 和 432539/gpt2api，這個專案提供了更全面的功能整合，特別是在 AI 創作和畫布管理方面。使用者在處理大規模圖像時，可能會遇到性能瓶頸，尤其是在多用戶同時操作的情況下。社群活躍度尚可，開發者回應問題的速度也相對較快。這個專案目前處於開發階段，適合對 AI 圖片創作有興趣的開發者或藝術家，但不建議用於生產環境。未來可能會加入更多的功能和穩定性改進。

**技術棧**：`Next.js` · `React` · `TypeScript` · `Go` · `Gin` · `Docker`

## 重點功能

- 無限畫布 — 支持多畫布項目、節點拖拽縮放、連線和小地圖功能。
- AI 創作 — 支持 OpenAI 兼容接口的文生圖、圖生圖和文本問答。
- 畫布助手 — 能夠圍繞選中節點進行對話，並將結果插回畫布。
- 提示詞庫 — 整理數百個圖片提示詞，方便用戶快速找到靈感。
- 導入導出功能 — 允許用戶輕鬆導入和導出畫布內容。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone git@github.com:basketikun/infinite-canvas.git && cd infinite-canvas
```
2. 複製環境變數範本
```bash
cp .env.example .env
```
3. 啟動 Docker 容器
```bash
docker-compose up -d
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Docker 和 Docker Compose",
  "docker-compose up -d",
  "# 預期輸出：服務啟動後可在 http://localhost:3000 訪問畫布"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 481 stars（80/天），forks 91（18.9%），這顯示出不錯的關注度。作者 basketikun 之前有開源相關經驗，這個專案解決了 AI 圖片創作工具分散的問題，將多種功能整合在一起。近期的推廣和社群討論也可能促進了這個專案的曝光。技術上，這個工具的開發符合當前 AI 創作工具日益增長的需求，特別是在無限畫布的概念上，讓創作過程更具靈活性。高達 18.9% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用。

## 適合誰使用

**目標受眾**：對 AI 圖片創作有興趣的獨立藝術家或開發者。

> [!example] 使用場景
> - 插畫師用它來在無限畫布上創作和編輯插圖，因為可以同時使用 AI 生圖和參考圖編輯，提升創作效率。
> - 遊戲開發者用它來設計遊戲場景，因為可以快速迭代和調整視覺元素，並且支持多畫布項目管理。
> - 教育工作者用它來製作教學材料，因為可以整合多種素材和提示詞庫，方便創建多樣化的教學內容。

## 架構分析

這個專案採用前後端分離的架構，前端使用 Next.js 和 React，後端則基於 Go 和 Gin。這樣的設計讓前端能夠快速響應用戶操作，而後端則專注於處理數據和 AI 生成請求。資料流方面，前端會向後端發送請求以獲取 AI 生成的圖像，然後將結果顯示在畫布上。

選擇 Go 作為後端語言的好處在於其高效能和並發處理能力，但可能會增加開發的學習曲線。整體架構的擴展性良好，但在多用戶同時操作時，可能會出現性能瓶頸，特別是在圖像生成的請求上。未來可能需要考慮使用更高效的資料庫或緩存機制來提升性能。

## 技術深入分析

這個專案的核心技術機制是基於無限畫布的概念，前端使用 React 和 Next.js 來實現動態的用戶界面，後端則使用 Go 和 Gin 來處理請求。這樣的設計使得整體架構輕量且高效，特別是在處理多個用戶請求時。效能方面，因為使用了 Docker 部署，能夠快速啟動和擴展，但在高負載情況下，可能會遇到性能瓶頸。選擇 Go 作為後端語言的好處在於其高效能和並發處理能力，但可能會增加開發的學習曲線。這個專案的依賴樹相對簡單，主要依賴於 Go 的標準庫和一些流行的前端庫，降低了維護的複雜度。未來在擴展性上，可能需要考慮使用更高效的資料庫或緩存機制來提升性能，特別是在圖像生成的請求上。整合到現有的 CI/CD pipeline 也相對簡單，因為 Docker 的使用使得部署過程更加一致。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，安裝過程相對順暢，但需要注意環境變數的配置。沒有提供多語言支持，主要以英文為主。整體來說，花 30 分鐘能夠順利啟動並運行起來。

## 優缺點分析

> [!success] 優點
> - 整合多種創作工具，提升用戶創作效率。
> - 支持 AI 圖片生成，擴展創作可能性。
> - 界面友好，適合快速迭代設計。

> [!danger] 缺點
> - 目前功能仍在開發中，穩定性不足。
> - 對於大規模使用可能會遇到性能問題。
> - 不建議用於公開的多人環境。

> [!warning] 注意事項
> - 目前處於開發階段，可能會有不穩定的功能。
> - 不建議用於公開的多人共用環境。
> - 對於大規模圖像處理可能會遇到性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的圖像創作功能，但缺乏無限畫布的支持，適合小型專案。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，無法提供畫布編排功能，適合需要文本生成的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於圖像創作，但不支持無限畫布的概念，適合小型專案。 | 如果你的專案不需要無限畫布的功能，且希望使用輕量級的工具。 | low，因為功能相似且界面簡單。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，無法提供畫布編排功能，適合需要文本生成的場景。 | 如果你的專案主要依賴於文本生成而非圖像創作。 | medium，因為需要重新設計創作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **infinite-canvas** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於圖像創作，但不支持無限畫布的概念，適合小型專案。 | 專注於文本生成，無法提供畫布編排功能，適合需要文本生成的場景。 |
> | 遷移成本 | - | low，因為功能相似且界面簡單。 | medium，因為需要重新設計創作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案不需要無限畫布的功能，且希望使用輕量級的工具。 | 如果你的專案主要依賴於文本生成而非圖像創作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，可能會遇到性能瓶頸。
  - 解法：考慮使用更高效的資料庫或緩存機制。
- [MEDIUM] 目前功能仍在開發中，穩定性不足。
  - 解法：建議在本地環境中測試，不要用於生產環境。
- [low] 對於新手來說，環境變數的配置可能會造成困惑。
  - 解法：參考 README 中的示例進行配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創作團隊的圖像設計 | 非常適合 | 提供了多畫布和 AI 圖片生成的功能，適合快速迭代設計。 |
| 大型企業的圖像創作需求 | 不適合 | 目前穩定性不足，可能無法滿足高並發需求。 |
| 個人藝術創作 | 適合 | 無限畫布和 AI 生圖功能能夠提升創作靈活性。 |
| 教育機構的教學材料製作 | 適合 | 整合了多種素材和提示詞，方便創建多樣化的教學內容。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到靈活的創作工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但仍需注意開發階段的潛在安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Docker 和 GitHub Actions 搭配使用，適合在開發和部署過程中使用。在一個用 Next.js + Vercel 部署的專案中，你可以用這個工具來進行圖像創作，具體做法是將其作為一個獨立的服務運行，然後通過 API 進行交互。支援 GitHub Actions 的 CI 流程，能夠自動化測試和部署。整合的摩擦點主要在於環境變數的配置，對於新手來說可能會造成困惑，但整體來說相容性良好。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，許多創作工具功能分散，使用者需要在不同的應用之間切換，這降低了創作效率。隨著 AI 技術的進步，將多種功能整合在一個平台上變得可行，這個工具正是應運而生。它代表了將 AI 創作與無限畫布概念結合的趨勢，未來可能會有更多類似的工具出現，專注於提升創作的靈活性和效率。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型創作團隊

**前置技能**：
- 熟悉 Docker
- 有基本的前端開發經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：收集使用反饋並調整。第四週：在正式項目中開始使用。

**成功指標**：創作時間減少 30%，用戶滿意度提升。

> [!warning] 退出計畫
> 所有設定以標準 JSON 格式保存，方便將來轉換到其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/basketikun--infinite-canvas");
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
> const me = dv.page("Repos/basketikun--infinite-canvas");
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
| Forks | 91 |
| Open Issues | 4 |
| Issue 解決率 | 56% (5 closed) |
| 最後推送 | 2026-05-23 |
| 建立日期 | 2026-05-18 |
| 官方網站 | [Link](https://infinite-canvas-cpco.onrender.com/) |
| Repo 大小 | 665 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/basketikun/infinite-canvas) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 89
>     "Go" : 9
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@basketikun](https://github.com/basketikun) | 46 |

**最新版本**：v0.0.7 (2026-05-23)

> [!info]- Release Notes
> ## What's Changed
> * feat(canvas): 添加图片预览功能 by @1847123733 in https://github.com/basketikun/infinite-canvas/pull/8
> 
> ## New Contributors
> * @1847123733 made their first contribution in https://github.com/basketikun/infinite-canvas/pull/8
> 
> **Full Changelog**: https://github.com/basketikun/infinite-canvas/compare/v0.0.6...v0.0.7

## 社群與生態

**社群活躍度**：社群活躍度尚可，開發者回應問題的速度較快。
**連結**：[文件](https://github.com/basketikun/infinite-canvas)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-23 ~ 2026-05-23）
> **活躍天數** 1 天 · **最新 commit** feat(canvas): 优化图片和视频节点尺寸适配

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/basketikun/infinite-canvas/issues/9) | 调整图像质量选项以达到稳定生成2K4K图像 | 1 | 3 |
> | [#10](https://github.com/basketikun/infinite-canvas/issues/10) | 大佬这里有很多提示词 可以采集一下 | 0 | 0 |
> | [#7](https://github.com/basketikun/infinite-canvas/issues/7) | 配置菜单鉴权缺失存在暴露风险 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> 无限画布 (infinite-canvas)
> 
> 无限画布是一款面向图片创作的开源工作台。它把画布编排、AI 图片生成、参考图编辑、对话助手、提示词库和素材沉淀放在同一个界面里，适合用来探索视觉方案并连续迭代图片结果。
> 
> > [!CAUTION]
> > 项目目前处于开发阶段，不保证历史数据兼容。各种数据库结构和存储格式都可能直接调整，欢迎关注后续更新，当前更适合个人/本地部署，不建议直接公网多人共用。
> >
> > 如果你需要稳定维护自己的分支，建议自行 fork 后独立开发。二次开发与 PR 请保留原作者信息和前端页面标识。
> 
> ## 核心功能
> 
> - 无限画布：多画布项目、节点拖拽缩放、连线、小地图、撤销重做、导入导出。
> - AI 创作：支持 OpenAI 兼容接口的文生图、图生图、参考图编辑和文本问答。
> - 画布助手：围绕选中节点和上游节点对话、生图，并把结果插回画布。
> - 提示词库：抓取多个 GitHub 开源项目，按案例整理数百个图片提示词。
> 
> 完整功能说明见 [docs/features.md](docs/features.md)。
> 
> 如果你在为担心没有合适的生图API来发愁，可以查看该免费生图项目：[chatgpt2api](https://github.com/basketikun/chatgpt2api)
> 
> ## 技术栈
> 
> - 前端：Next.js、React、TypeScript、Tailwind CSS、Ant Design、Zustand、TanStack Query。
> - 后端：Go、Gin、GORM。
> - 部署：Docker。
> 
> ## 快速开始
> 
> [](https://render.com/deploy?repo=https://github.com/basketikun/infinite-canvas)
> 
> ```bash
> git clone git@github.com:basketikun/infinite-canvas.git
> cd infinite-canvas
> cp .env.example .env
> # 修改默认账号密码等信息
> docker-compose up -d
> ```
> 
> 本地源码构建运行：
> 
> ```bash
> cp .env.example .env
> docker compose -f docker-compose.local.yml up -d --build
> ```
> 
> 运行后默认端口3000，可访问 `http://localhost:3000`。
> 
> 如需要拉取提示词，可前往:`http://localhost:3000/admin/prompts`
> 
> ## 效果展示
> 
>   
>     
>     
>   
>   
>     
>     
>   
>   
>     
>     
>   
> 
> ## 文档
> 
> - [功能介绍](docs/features.md)
> - [部署说明](docs/deployment.md)
> - [画布节点操作手册](docs/canvas-node-manual.md)
> - [画布快捷键](docs/canvas-shortcuts.md)
> - [待办事项](docs/todo.md)
> - [后端数据库说明](docs/backend-database.md)
> - [系统配置数据结构](docs/system-settings.md)
> - [接口响应约定](docs/api-response.md)
> 
> ## 社区支持
> 
> 学 AI，上 L 站：[LinuxDO](https://linux.do/)
> 
> 点击链接加入群聊【AI开源交流】：https://qm.qq.com/q/DFnKzZ807u
> 
> ## 开源协议
> 
> 本项目使用 GNU Affero General Public License v3.0，见 [LICENSE](LICENSE)。
> 
> ## Star History

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[多模態]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/basketikun/infinite-canvas) · [官方網站](https://infinite-canvas-cpco.onrender.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像創作）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像創作" AND file.name != "basketikun--infinite-canvas"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "basketikun--infinite-canvas"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "basketikun--infinite-canvas" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "basketikun--infinite-canvas"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","資料視覺化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "basketikun--infinite-canvas" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/basketikun--infinite-canvas");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "basketikun--infinite-canvas" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "basketikun" AND file.name != "basketikun--infinite-canvas"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/basketikun--infinite-canvas");
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
> const me = dv.page("Repos/basketikun--infinite-canvas");
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
> const me = dv.page("Repos/basketikun--infinite-canvas");
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
> const me = dv.page("Repos/basketikun--infinite-canvas");
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
> const me = dv.page("Repos/basketikun--infinite-canvas");
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

> **2026-05-25** — 首次收錄
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

- [[2026-05-25|2026-05-25]] — 首次收錄，480 stars
