---
repo: vinhhien112/Three.js-Object-Sculptor-Codex-Plugin
url: https://github.com/vinhhien112/Three.js-Object-Sculptor-Codex-Plugin
owner: vinhhien112
owner_type: User
language: Python
license: MIT
description: "Codex plugin that turns attached object images into code-only, animation-ready procedural Three.js models."
homepage: ""
stars: 971
stars_per_day: 194
forks: 113
open_issues: 1
created: 2026-07-09
pushed_at: 2026-07-11
first_seen: 2026-07-13
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "3D 模型生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-13
use_case: "將附加的物件圖片轉換為僅包含代碼的、準備動畫的程序性 Three.js 模型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 5419
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-13"
star_history: "2026-07-13:672,2026-07-14:881,2026-07-15:971"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "Three.js-Object-Sculptor-Codex-Plugin"
  - "vinhhien112/Three.js-Object-Sculptor-Codex-Plugin"
  - "將附加的物件圖片轉換為僅包含代碼的、準備動畫的程序性 Three.js 模型。"
---

# Three.js-Object-Sculptor-Codex-Plugin

**672** stars · **224** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 將附加的物件圖片轉換為僅包含代碼的、準備動畫的程序性 Three.js 模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (224 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成動畫準備的 3D 模型的遊戲開發者或互動媒體設計師。
> **一句話重點** 這個插件展示了如何利用 Codex 的能力來自動化 3D 模型的生成，特別是在遊戲開發和互動媒體領域。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 模型生成" && p.file.name !== "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 模型生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，8 小時整合，得到快速生成 3D 模型的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將圖像轉換為程序性生成的 Three.js 模型，並提供分階段的構建流程以確保質量。

## 專案簡介

Three.js Object Sculptor 是一個 Codex 插件，旨在將用戶提供的圖像轉換為程序性生成的 Three.js 模型。用戶只需附加一張物件圖片，插件會引導 Codex 通過一系列步驟，包括檢查圖像適用性、生成詳細的物件雕刻規範、進行嚴格的驗證，最終生成一個代碼-only 的 Three.js 工廠模型。這種方法的賣點在於它不僅僅是生成一個網格，而是提供了一個分階段的構建流程，確保每個細節都符合原始物件的特徵。關鍵指令如 `python3 scripts/new_sculpt_spec.py` 和 `python3 scripts/generate_threejs_factory.py` 使得用戶能夠輕鬆生成所需的模型代碼。技術上，這個插件使用 Python 來處理圖像和生成代碼，並依賴於 Codex 的能力來進行自動化的模型創建。

這種設計使得用戶能夠在不依賴外部資源的情況下，快速生成動畫準備的 3D 物件，特別適合於遊戲開發和互動原型設計。與傳統的 3D 建模工具相比，這個插件更注重程序性生成和自動化，避免了手動建模的繁瑣過程。使用者在生成過程中可以進行多次自我檢查，確保最終輸出的模型符合預期的質量標準。這種方法的缺點是對於非常複雜的物件，可能仍然需要人工干預來達到最佳效果。整體而言，這個插件適合需要快速生成 3D 物件的開發者，尤其是在遊戲和互動媒體領域。

**技術棧**：`Python 3.10+` · `Three.js`

## 重點功能

- 圖像驗證 — 檢查附加圖像是否適合程序性 3D 重建。
- 預規範複雜度評估 — 在代碼生成之前進行複雜度評估。
- 生成物件雕刻規範 — 寫入包含層級結構、材質和動畫錨點的 `ObjectSculptSpec`。
- 分階段構建管道 — 包括粗略結構、材料通過和優化等多個步驟。
- 生成代碼-only 的 Three.js 工廠 — 從當前解鎖的雕刻階段生成代碼。

## 快速開始

1. 克隆插件源碼到本地插件文件夾
```bash
git clone REPOSITORY_URL ~/plugins/threejs-object-sculptor
```
2. 在 Codex 中安裝插件
```bash
codex plugin add threejs-object-sculptor@local
```
3. 在 Codex 中附加物件圖片並請求生成模型
```bash
Use Three.js Object Sculptor to turn the object in this attachment into a procedural Three.js model built entirely with code.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 672 stars（224/天），forks 83（12.4%），顯示出相對較高的使用興趣。作者 vinhhien112 之前可能有其他相關的開發經驗，這個插件解決了在 3D 建模中自動化生成的痛點，特別是對於需要快速生成動畫準備模型的開發者。沒有明顯的觸發事件，但這種自動化工具的需求隨著遊戲和互動媒體的增長而上升。forks/stars 比率為 12.4%，顯示出相對較高的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要快速生成動畫準備的 3D 模型的遊戲開發者或互動媒體設計師。

> [!example] 使用場景
> - 遊戲開發者用它來將遊戲中的物件圖片轉換為程序性生成的 3D 模型，因為這樣可以快速生成動畫準備的物件，節省手動建模的時間。
> - 互動媒體設計師用它來創建場景中的道具，因為生成的模型可以直接用於瀏覽器中，提升了開發效率。
> - 產品設計師用它來快速構建可視化的產品模型，因為這樣可以在不依賴外部資源的情況下，生成符合需求的 3D 物件。

## 架構分析

這個插件的架構主要基於 Python 和 Codex 的自動化能力。它通過一系列的腳本來處理圖像、生成代碼和進行驗證，這些腳本使用 Python 標準庫和 shell 工具來實現。資料流從用戶附加的圖像開始，經過驗證、評估、生成規範，最終輸出代碼。

這種設計使得用戶能夠在不依賴外部資源的情況下，快速生成 3D 模型。選擇 Python 是因為其在數據處理和自動化方面的強大能力，但這也意味著需要用戶具備一定的 Python 知識。整體架構的擴展性良好，但對於非常複雜的物件，可能需要進一步的優化和人工干預。

## 技術深入分析

Three.js Object Sculptor 使用了一系列 Python 腳本來實現從圖像到模型的轉換。核心技術機制包括圖像驗證、複雜度評估和模型生成，這些過程確保了生成的模型在質量和細節上都能達到預期。效能上，這個插件能夠處理多種圖像，並生成符合 Three.js 標準的代碼，具體的性能數據未提供，但從設計上看，這個插件適合中小型的 3D 模型生成需求。選擇 Python 作為開發語言是因為其強大的數據處理能力，但這也意味著需要用戶具備一定的編程基礎。這個插件的設計考量了用戶的使用習慣，提供了簡單的命令行介面來進行操作，降低了使用門檻。技術風險方面，對於非常複雜的物件，可能會出現生成不準確的情況，需要用戶進行手動調整。整體而言，這個插件在現有的 3D 開發生態中提供了一個創新的解決方案，能夠有效提升開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，整體質量良好。安裝過程相對順暢，沒有明顯的坑。文件中沒有多語言支持，但對於英語使用者來說，理解上沒有太大障礙。

## 優缺點分析

> [!success] 優點
> - 自動化生成 3D 模型，節省手動建模時間。
> - 提供分階段的構建流程，確保模型質量。
> - 生成的模型適合動畫和互動使用，提升開發效率。

> [!danger] 缺點
> - 對於非常複雜的物件，可能需要人工干預。
> - 不支持從單一圖像生成 GLB 文件，功能有限。
> - 需要用戶具備一定的 Python 知識，學習曲線存在。

> [!warning] 注意事項
> - 僅支援 Python 3.10 或更新版本。
> - 不支持從單一圖像生成 GLB 文件，主要輸出為代碼-only 的工廠。
> - 對於非常複雜的物件，仍然可能需要人工干預來達到最佳效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，而本專案專注於 3D 模型生成，適合不同的開發需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了更靈活的 3D 模型處理功能，但不具備自動化生成的流程，適合需要手動調整的場景。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於擴展 Codex 的功能，而本專案專注於特定的 3D 模型生成，功能定位不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，而本專案專注於 3D 模型生成，適合不同的開發需求。 | 如果你的專案主要是 2D 遊戲或應用，則可以選擇這個工具。 | low，因為兩者的使用方式相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了更靈活的 3D 模型處理功能，但不具備自動化生成的流程，適合需要手動調整的場景。 | 如果你的專案需要高度自定義的 3D 模型，則可以考慮這個工具。 | medium，因為需要重新調整工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Three.js-Object-Sculptor-Codex-Plugin** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 2D 精靈圖像，而本專案專注於 3D 模型生成，適合不同的開發需求。 | 提供了更靈活的 3D 模型處理功能，但不具備自動化生成的流程，適合需要手動調整的場景。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要重新調整工作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是 2D 遊戲或應用，則可以選擇這個工具。 | 如果你的專案需要高度自定義的 3D 模型，則可以考慮這個工具 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於非常複雜的物件，生成的模型可能不夠準確
  - 解法：需要用戶進行手動調整以達到最佳效果
- [MEDIUM] 生成的模型不支持 GLB 格式
  - 解法：需要額外的導出工具來轉換格式
- [MEDIUM] 安裝過程中可能需要配置 Python 環境
  - 解法：確保 Python 版本符合要求，並安裝必要的依賴

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要快速生成 3D 道具 | 非常適合 | 自動化生成模型的能力能夠大幅提升開發效率。 |
| 需要製作互動媒體的設計師 | 適合 | 生成的模型可以直接用於瀏覽器，符合需求。 |
| 大型遊戲開發公司需要高質量的 3D 模型 | 不適合 | 對於非常複雜的物件，可能需要人工干預，無法完全自動化。 |
| 產品設計師需要快速構建可視化模型 | 適合 | 能夠快速生成符合需求的 3D 物件。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到快速生成 3D 模型的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問本地文件系統，並不存取敏感資料。依賴的庫和模組為標準 Python 庫，信任程度高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Three.js Object Sculptor 主要與 Codex 和 Three.js 生態系統搭配使用。在典型的工作流中，它處於模型生成的環節，幫助開發者從圖像快速生成 3D 模型。具體來說，在一個使用 Three.js 的網頁專案中，用戶可以通過附加物件圖片來生成模型，然後將生成的代碼直接整合到專案中。這個插件與主流的 CI/CD 工具相容，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於需要確保 Python 環境的配置正確，否則可能會導致安裝失敗。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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
| Forks | 83 |
| Open Issues | 0 |
| 最後推送 | 2026-07-11 |
| 建立日期 | 2026-07-09 |
| Repo 大小 | 5.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vinhhien112/Three.js-Object-Sculptor-Codex-Plugin) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@vinhhien112](https://github.com/vinhhien112) | 9 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近 3 天有持續的更新和維護。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-09 ~ 2026-07-11）
> **活躍天數** 3 天 · **最新 commit** Add Ko-fi support button

## README 摘錄

> [!info]- 展開查看原文 README
> # Three.js Object Sculptor
> 
> Turn the object in an attached image into a quality-gated, animation-ready procedural Three.js model built entirely with code.
> 
> Three.js Object Sculptor is a Codex plugin for rebuilding the visible object in a user-provided attachment image as a code-only Three.js model. It does not try to do photogrammetry, download an art pack, or extract a perfect mesh from one image. Instead, it guides Codex through a sculpting workflow: validate the image, describe the object precisely, decompose it into geometry and material systems, build from blockout to detail, wire an animation-friendly hierarchy, then compare the browser render against the original reference.
> 
> 
> ## Install For Codex
> 
> Clone the plugin source into your local plugin folder. Replace `REPOSITORY_URL` with the Git URL for your copy of this repository:
> 
> ```bash
> mkdir -p ~/plugins
> git clone REPOSITORY_URL ~/plugins/threejs-object-sculptor
> ```
> 
> Make sure your local Codex marketplace has an entry for the plugin. If you already have `~/.agents/plugins/marketplace.json`, add this object to its `plugins` array:
> 
> ```json
> {
>   "name": "threejs-object-sculptor",
>   "source": {
>     "source": "local",
>     "path": "./plugins/threejs-object-sculptor"
>   },
>   "policy": {
>     "installation": "AVAILABLE",
>     "authentication": "ON_INSTALL"
>   },
>   "category": "Productivity"
> }
> ```
> 
> If you do not have a local marketplace file yet, create `~/.agents/plugins/marketplace.json` with:
> 
> ```json
> {
>   "name": "local",
>   "interface": {
>     "displayName": "Local Plugins"
>   },
>   "plugins": [
>     {
>       "name": "threejs-object-sculptor",
>       "source": {
>         "source": "local",
>         "path": "./plugins/threejs-object-sculptor"
>       },
>       "policy": {
>         "installation": "AVAILABLE",
>         "authentication": "ON_INSTALL"
>       },
>       "category": "Productivity"
>     }
>   ]
> }
> ```
> 
> Install it in Codex:
> 
> ```bash
> codex plugin add threejs-object-sculptor@local
> ```
> 
> Start a new Codex thread after installation so the plugin skill is loaded.
> 
> 
> ## Quick Start
> 
> In Codex, attach an object image and ask:
> 
> ```text
> Use Three.js Object Sculptor to turn the object in this attachment into a procedural Three.js model built entirely with code.
> ```
> 
> For best results, include the intended use:
> 
> ```text
> Make it a real-time browser prop, action-ready for animation, transformation, physics, and destruction.
> ```
> 
> The plugin will guide Codex through:
> 
> 1. Image suitability check.
> 2. Pre-spec complexity and quality contract.
> 3. Detailed object sculpt spec.
> 4. Strict validation.
> 5. Pass-by-pass Three.js factory generation.
> 6. Browser screenshot review.
> 7. AI vision comparison and self-correction.
> 
> 
> ## Demo
> 
> 
> ## What It Does
> 
> - Validates whether an image is suitable for procedural 3D reconstruction.
> - Creates a pre-spec complexity assessment before code generation.
> - Writes an `ObjectSculptSpec` with component hierarchy, materials, lighting, pivots, sockets, animation anchors, destruction anchors, and quality targets.
> - Enforces a staged build pipeline: blockout, structural pass, form refinement, material pass, surface pass, lighting pass, interaction pass, and optimization.
> - Generates a code-only Three.js factory skeleton from the current unlocked sculpt pass.
> - Designs the generated object as an action-ready hierarchy, so later animation, transformation, physics, or destruction requests have real pivots and attachment points to use.
> - Packages reference/render screenshots into one comparison sheet for AI vision review.
> - Records self-correction reviews with overall, layer, and critical feature scores.
> - Supports reference-derived procedural PBR evidence: albedo, roughness estimate, height, normal, and AO maps.
> 
> 
> ## Why This Exists
> 
> Procedural 3D generation can fail in a very specific way: the silhouette is "kind of right", but the object loses the details that make it recognizable. This plugin is designed to slow Codex down at the right moments:
> 
> - First understand what object class and complexity tier it is dealing with.
> - Define what "good enough" means for this specific object.
> - Build from coarse structure to fine surface response.
> - Fail a pass if an identity-defining feature is wrong, even when the overall score looks acceptable.
> 
> The result is less "one-shot generated mesh" and more "Codex as a procedural sculptor with checkpoints": block out the form, attach the moving parts correctly, layer the materials, then keep refining until the model reads like the object in the attachment.
> 
> 
> ### Tower Ship
> 
> [Open the live tower ship demo](https://3dship.harrysoftware.com)
> 
> This tower ship study shows the intended output shape: a browser-rendered, code-sculpted Three.js object rebuilt from an attached reference image, with procedural geometry, articulated parts, material work, and interactive controls.
> 
> 
> ### Ancient Autumn Tree
> 
> [Open the live ancient autumn tree demo](https://tree.harrysoftware.com/)
> 
> This botanical study reconstructs a complex ancient tree with procedural curves, deterministic branching, layered bark materials, dense autumn foliage, and an animation-ready hierarchy.
> 
> 
> ## At A Glance
> 
> - **Name:** Three.js Object Sculptor
> - **Category:** Codex plugin for image-to-procedural-3D workflows
> - **Input:** an attached object image, reference screenshot, or local image path
> - **Output:** a code-only procedural Three.js object factory, backed by an `ObjectSculptSpec`
> - **Primary goal:** recreate the target object's silhouette, component structure, materials, lighting response, and action-ready hierarchy in browser-friendly Three.js code
> - **Best for:** animation-ready real-time props, game objects, scene dressing, destructible objects, product-style objects, botanical objects, mechanical parts, and stylized reference reconstructions
> - **Not for:** photogrammetry, exact mesh extraction, scanned assets, downloaded art packs, or guaranteed production-perfect geometry from one image
> 
> 
> ## Use Cases
> 
> - Convert an attached object image into a procedural Three.js model generated entirely with TypeScript and geometry code.
> - Build animation-ready Three.js props with meaningful pivots, sockets, parent-child hierarchy, and transform anchors.
> - Recreate reference objects as browser-friendly procedural assets without relying on downloaded meshes or external art packs.
> - Generate a structured object spec before implementation, so Codex understands geometry, materials, lighting, local surface features, and interaction readiness.
> - Create destructible or transformable objects by planning detachable parts, fracture seams, colliders, and effect emitters before the model is coded.
> - Compare the rendered model against the original attachment with AI vision and block progress when critical features do not match.
> - Produce reusable procedural object factories for Three.js games, WebGPU demos, interactive prototypes, and visual experiments.
> 
> 
> ## Requirements
> 
> - Codex with local plugin support.
> - Python 3.10 or newer.
> - A browser project using Three.js when you want to implement the generated factory.
> - For visual acceptance: a screenshot from the rendered model and an AI vision reviewer.
> 
> The helper scripts use Python standard-library modules and shell image tooling when available. They do not require Playwright or a downloaded Chromium bundle.
> 
> 
> ## Recommended Workflow
> 
> Use the scripts from the plugin root.
> 
> Probe a reference image:
> 
> ```bash
> python3 scripts/probe_reference_image.py ./reference/oak-tree.png
> ```
> 
> Create a pre-spec assessment:
> 
> ```bash
> python3 scripts/new_pre_spec_assessment.py "Ancient Autumn Oak" \
>   --image ./reference/oak-tree.png \
>   --complexity complex \
>   --out assessment.json
> ```
> 
> Create a starter sculpt spec:
> 
> ```bash
> python3 scripts/new_sculpt_spec.py "Ancient Autumn Oak" \
>   --image ./reference/oak-tree.png \
>   --assessment assessment.json \
>   --out object-sculpt-spec.json
> ```
> 
> Validate the spec:
> 
> ```bash
> python3 scripts/validate_sculpt_spec.py object-sculpt-spec.json --strict-quality
> ```
> 
> Check which scul

## 延伸閱讀

相關概念：[[程序性生成]] · [[3D 模型設計]] · [[動畫準備]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[huangserva--3DCellForge|huangserva/3DCellForge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/vinhhien112/Three.js-Object-Sculptor-Codex-Plugin)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 模型生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 模型生成" AND file.name != "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["程序性生成","3D 模型設計","動畫準備"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vinhhien112" AND file.name != "vinhhien112--Three.js-Object-Sculptor-Codex-Plugin"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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
> const me = dv.page("Repos/vinhhien112--Three.js-Object-Sculptor-Codex-Plugin");
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

> **2026-07-13** — 首次收錄
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

- [[2026-07-15|2026-07-15]] — 再次上榜，971 stars
- [[2026-07-14|2026-07-14]] — 再次上榜，881 stars
- [[2026-07-13|2026-07-13]] — 首次收錄，672 stars
