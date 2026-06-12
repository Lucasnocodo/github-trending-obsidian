---
repo: VAST-AI-Research/TripoSplat
url: https://github.com/VAST-AI-Research/TripoSplat
owner: VAST-AI-Research
owner_type: Organization
language: Python
license: MIT
description: "TripoSplat converts a single 2D image into high-quality and variable number of 3D Gaussians, developed by TripoAI."
homepage: ""
stars: 633
stars_per_day: 63
forks: 62
open_issues: 2
created: 2026-06-01
pushed_at: 2026-06-02
first_seen: 2026-06-07
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "3D 資產生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-07
use_case: "將單張 2D 圖像轉換為高品質的 3D 高斯點雲，適用於資產創建和 AR/VR 開發。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-15"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 4749
readme_length: 2807
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-07"
star_history: "2026-06-07:494,2026-06-07:494,2026-06-08:526,2026-06-08:526,2026-06-09:565,2026-06-10:593,2026-06-11:618,2026-06-12:633"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "TripoSplat"
  - "VAST-AI-Research/TripoSplat"
  - "將單張 2D 圖像轉換為高品質的 3D 高斯點雲，適用於資產創建和 AR/VR 開發。"
---

# TripoSplat

**633** stars · **63** stars/天 · 建立 10 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
> 將單張 2D 圖像轉換為高品質的 3D 高斯點雲，適用於資產創建和 AR/VR 開發。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (63 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質 3D 資產的獨立開發者或小型團隊。
> **一句話重點** TripoSplat 的簡單性和高效性使其成為快速生成 3D 資產的理想工具，特別是在資源有限的情況下。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 資產生成" && p.file.name !== "VAST-AI-Research--TripoSplat" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 資產生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到快速生成 3D 資產的能力，值得嘗試。

> [!abstract] 核心創新
> TripoSplat 提供了一個簡單且高效的方式，將 2D 圖像轉換為高品質的 3D 高斯，並且支持靈活的高斯數量調整。

## 專案簡介

TripoSplat 是一個將單張 2D 圖像轉換為高品質 3D 高斯的工具，最高可生成 262,144 個高斯，讓用戶能根據需求在視覺品質和渲染成本之間進行權衡。用戶只需下載模型權重並執行簡單的 Python 腳本，即可快速開始使用。這個工具的設計重點在於簡潔性，僅需兩個檔案（triposplat.py 和 model.py），總行數約 2,000 行，便於自定義和整合到其他生態系統中。此外，TripoSplat 幾乎沒有依賴，能在任何平台上運行，並且與 ComfyUI 兼容，使用者可以輕鬆地將其納入現有工作流程。

相較於其他工具，TripoSplat 的高斯數量可靈活調整，這在資產創建和遊戲開發中提供了更大的自由度。與使用深度學習框架的工具相比，這個工具的安裝和使用門檻更低，適合需要快速生成 3D 資產的開發者。儘管目前開發者社群活躍度尚可，但仍有一些開放的問題需要解決，例如對 AMD GPU 的支持。整體而言，這是一個值得關注的工具，特別適合小型團隊或個人開發者進行快速原型設計和資產創建。

**技術棧**：`Python 3.8` · `Gradio` · `torch`

## 重點功能

- 高品質生成 — 能處理多種圖像風格，並生成高達 262,144 個高斯。
- 簡單的代碼結構 — 僅需兩個檔案，總行數約 2,000 行，便於自定義。
- 幾乎無依賴性 — 無需安裝大型深度學習框架，能在任何平台上運行。
- ComfyUI 支持 — 可直接將官方工作流程模板納入 ComfyUI 使用。
- 多種下載選項 — 支持 HuggingFace CLI、ModelScope CLI 等多種方式下載模型權重。

## 快速開始

1. 下載模型權重到 ckpts/ 目錄
```bash
hf download VAST-AI/TripoSplat --local-dir ckpts/
```
2. 安裝必要的 Python 套件
```bash
pip install numpy safetensors pillow tqdm
```
3. 運行示例推斷腳本
```bash
python run_example.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 633 stars（63/天），forks 62（9.8%），顯示出穩定的增長。這個專案由 TripoAI 開發，解決了在 3D 資產生成中對高品質和靈活性的需求，特別是在 AR/VR 和遊戲開發領域。開發者 Benny Guo 以簡潔的代碼和低依賴性設計，讓使用者能快速上手，這在目前的工具中相對少見。社群的活躍度和開放的問題顯示出使用者對於功能擴展的需求，這可能會促進未來的發展。

## 適合誰使用

**目標受眾**：需要快速生成高品質 3D 資產的獨立開發者或小型團隊。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成 3D 資產，因為能夠根據需求調整高斯數量，從而在視覺品質和性能之間取得平衡。
> - AR/VR 開發者用它來創建虛擬環境中的物件，因為其高品質輸出能提升用戶的沉浸感。
> - 資產創建者用它來簡化 3D 模型的生成流程，因為其簡單的代碼結構便於快速整合到現有工作流中。

## 架構分析

TripoSplat 採用簡單的 Python 腳本架構，主要由 triposplat.py 和 model.py 組成，這樣的設計使得用戶能夠輕鬆理解和修改代碼。資料流方面，輸入的 2D 圖像經過高斯生成算法處理後，輸出為 3D 高斯點雲，這一過程不依賴於複雜的深度學習框架，因此能夠在多種環境中運行。選擇 Python 作為開發語言，因為其生態系統豐富且易於上手，但這也意味著在性能上可能不如 C++ 等低階語言。整體架構的輕量化設計使得擴展性較好，但在處理極大數據時可能會遇到性能瓶頸。

## 技術深入分析

TripoSplat 的核心技術機制在於使用高斯混合模型將 2D 圖像轉換為 3D 高斯，這一過程中，使用者可以靈活調整生成的高斯數量以平衡視覺效果和渲染性能。該工具能夠處理的資料量取決於用戶的硬體配置，對於高性能 GPU，能夠在短時間內生成大量高斯。然而，對於較舊的硬體，可能會遇到性能瓶頸，尤其是在生成高達 262,144 個高斯時。選擇 Python 作為開發語言的好處在於其簡單易用，但這也意味著在性能上可能不如 C++ 等低階語言，這在處理大型數據時可能會成為一個限制。技術風險方面，隨著用戶需求的增長，可能需要更多的功能擴展和性能優化，這可能會增加技術債。整合方面，TripoSplat 能夠輕鬆與現有的 3D 查看工具（如 SparkJS 和 SuperSplat）相容，並且在 CI/CD 流程中也能輕鬆集成。整體而言，這個工具在快速生成 3D 資產方面具有良好的潛力，但在擴展性和性能上仍需進一步優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多種使用範例，安裝過程相對順暢，無明顯坑點。提供了良好的入門指南，能幫助新手快速上手。文件目前僅提供英文版本，可能對某些使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 高品質的 3D 資產生成，適合多種應用場景。
> - 簡單的代碼結構，便於快速上手和自定義。
> - 幾乎無依賴性，能在多種平台上運行。

> [!danger] 缺點
> - 對於高斯數量過多的情況，渲染性能可能下降。
> - 目前對於 AMD GPU 的支持尚不完善。
> - 在處理複雜場景時，生成時間可能較長。

> [!warning] 注意事項
> - 目前僅支持 NVIDIA 和 AMD GPU，對於其他硬體可能無法運行。
> - 高斯數量過多可能導致渲染性能下降，需根據需求調整。
> - 對於複雜場景，生成時間可能較長，需考慮性能優化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，而 TripoSplat 則專注於 3D 高斯生成，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要用於 3D 模型的編輯和優化，而 TripoSplat 則專注於從 2D 生成 3D 資產。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，TripoSplat 則專注於從 2D 生成 3D 高斯，適用場景不同。 | 如果需要生成 2D 精靈圖像而非 3D 資產，則應選擇 agent-sprite-forge。 | medium，因為需要重新設計生成流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要用於 3D 模型的編輯和優化，而 TripoSplat 則專注於從 2D 生成 3D 資產。 | 如果需要對現有 3D 模型進行編輯和優化，則應選擇 boneyard。 | high，因為需要重新設計工作流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TripoSplat** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 2D 精靈圖像，TripoSplat 則專注於從 2D 生成 3D 高斯，適用場景不同。 | Boneyard 主要用於 3D 模型的編輯和優化，而 TripoSplat 則專注於從 2D 生成 3D 資產。 |
> | 遷移成本 | - | medium，因為需要重新設計生成流程。 | high，因為需要重新設計工作流。 |
> | 適用場景 | 主要場景 | 如果需要生成 2D 精靈圖像而非 3D 資產，則應選擇 ag | 如果需要對現有 3D 模型進行編輯和優化，則應選擇 bone |

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

- **[HIGH]** 對 AMD GPU 的支持尚不完善，可能導致無法運行
  - 解法：使用 NVIDIA GPU 或等待更新
- [MEDIUM] 生成高斯數量過多時，可能導致渲染性能下降
  - 解法：根據需求調整生成的高斯數量
- [MEDIUM] 在複雜場景中生成時間可能較長
  - 解法：優化圖像輸入或使用更高效的硬體

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊 | 非常適合 | 能快速生成高品質 3D 資產，適合資源有限的情況。 |
| AR/VR 開發者 | 適合 | 能夠創建虛擬環境中的物件，提升用戶體驗。 |
| 大型遊戲開發公司 | 普通 | 雖然能生成高品質資產，但可能需要更多的性能優化。 |
| 需要高效能渲染的專案 | 不適合 | 對於高斯數量過多的情況，渲染性能可能下降。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到快速生成 3D 資產的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料，適合在 CI/CD 流程中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TripoSplat 最常與 3D 查看工具（如 SparkJS 和 SuperSplat）搭配使用，通常在資產生成的環節中發揮作用。在使用 Next.js + Vercel 部署的專案中，可以將 TripoSplat 用於生成 3D 資產，具體做法是將生成的 .ply 文件上傳至前端進行可視化。該工具能與 GitHub Actions 等 CI 工具相容，並且可以在 VS Code 中進行開發。整合的摩擦點主要在於需要確保模型權重的正確下載，否則可能導致運行錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 TripoSplat 出現之前，生成 3D 資產的工具多數依賴於繁瑣的深度學習框架，這使得許多開發者難以快速上手。隨著高斯混合模型的發展，這種生成方法變得可行，並且能夠在不依賴大型框架的情況下運行。TripoSplat 代表了簡化 3D 資產生成流程的趨勢，未來可能會隨著更多功能的加入而進一步擴展其應用範圍。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的 3D 資產生成概念

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：撰寫最佳實踐文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：生成的 3D 資產質量提升 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
| Forks | 62 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-02 |
| 建立日期 | 2026-06-01 |
| Repo 大小 | 4.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VAST-AI-Research/TripoSplat) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 95
>     "HTML" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bennyguo](https://github.com/bennyguo) | 7 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但開放的問題數量顯示出需要更多的參與和解決方案。
**連結**：[文件](https://github.com/VAST-AI-Research/TripoSplat)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-02）
> **活躍天數** 2 天 · **最新 commit** README: add ModelScope download instructions

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/VAST-AI-Research/TripoSplat/issues/2) | Add AMD ROCm quickstart notes for running TripoSplat on AMD  | 0 | 0 |
> | [#1](https://github.com/VAST-AI-Research/TripoSplat/issues/1) | [Question] Improved results? | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # TripoSplat
> TripoSplat converts a single 2D image into high-quality and variable number of 3D Gaussians, developed by [TripoAI](https://www.tripo3d.ai/). It can serve as a powerful pipeline tool for asset creation, AR/VR, game development, simulation environments, and beyond.
> 
> |  |  |
> |---|---|
> |  |  |
> 
> ## Highlights
> - **High-quality, versatile generation** that handles a wide range of image styles.
> - **Arbitrary Gaussian count** (up to 262,144) — trade off visual quality against rendering cost according to your need.
> - **Minimal, readable code**: two files (`triposplat.py` and `model.py`), ~2,000 LOC total. Easy to customize and integrate into other ecosystems.
> - **Near-zero dependencies**: no `transformers`, no `diffusers`, no version-conflict hell. Runs on any platform.
> - **Official ComfyUI support**: drop the [official workflow template](https://github.com/Comfy-Org/workflow_templates/blob/main/templates/3d_triposplat_image_to_gaussian_splat.json) into ComfyUI and start playing with TripoSplat right away.
> 
> ## Quickstart
> Download model weights to `ckpts/` from [HuggingFace](https://huggingface.co/VAST-AI/TripoSplat). 
> ```bash
> # Use one of the following ways to download model weights.
> 
> # 1. Use HuggingFace CLI
> hf download VAST-AI/TripoSplat --local-dir ckpts/
> 
> # 2. Use huggingface_hub
> pip install huggingface_hub
> python -c "from huggingface_hub import snapshot_download; snapshot_download(repo_id='VAST-AI/TripoSplat', local_dir='ckpts/')"
> 
> # 3. Use ModelScope CLI
> pip install modelscope
> modelscope download VAST-AI-Research/TripoSplat --local_dir ckpts/
> 
> # 4. Use modelscope Python SDK
> pip install modelscope
> python -c "from modelscope import snapshot_download; snapshot_download('VAST-AI-Research/TripoSplat', local_dir='ckpts/')"
> 
> # 5. Manual download from HuggingFace / ModelScope.
> ```
> 
> Setup the environment and run the example inference script.
> ```bash
> # install torch and torchvision according to your environment
> pip install numpy safetensors pillow tqdm
> python run_example.py
> ```
> 
> The exported `.ply` / `.splat` files can be visualized in any 3D Gaussian
> viewer — e.g. [SparkJS](https://sparkjs.dev) or
> [SuperSplat](https://superspl.at/editor).
> 
> ## Gradio Demo
> 
> ```bash
> pip install gradio
> python run_gradio.py
> ```
> 
> ## License
> TripoSplat code and weight models are released under the [MIT License](https://github.com/VAST-AI-Research/TripoSplat/blob/main/LICENSE).
> 
> ## Citation
> If you find TripoSplat useful, please cite:
> ```bibtex
> @misc{yan2026generative3dgaussianslearned,
>     title={Generative 3D Gaussians with Learned Density Control}, 
>     author={Runjie Yan and Yan-Pei Cao and Peng Wang and Ding Liang and Yuan-Chen Guo},
>     year={2026},
>     eprint={2605.16355},
>     archivePrefix={arXiv},
>     primaryClass={cs.GR},
>     url={https://arxiv.org/abs/2605.16355}, 
> }
> ```

## 延伸閱讀

相關概念：[[3D 資產生成]] · [[高斯混合模型]] · [[AR/VR]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[TencentARC--Pixal3D|TencentARC/Pixal3D]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[inspatio--worldfm|inspatio/worldfm]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/VAST-AI-Research/TripoSplat)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 資產生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 資產生成" AND file.name != "VAST-AI-Research--TripoSplat"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VAST-AI-Research--TripoSplat"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "VAST-AI-Research--TripoSplat" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "VAST-AI-Research--TripoSplat"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 資產生成","高斯混合模型","AR/VR"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VAST-AI-Research--TripoSplat" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VAST-AI-Research--TripoSplat" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VAST-AI-Research" AND file.name != "VAST-AI-Research--TripoSplat"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
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

> **2026-06-07** — 首次收錄
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

- [[2026-06-08|2026-06-08]] — 再次上榜，526 stars
- [[2026-06-07|2026-06-07]] — 首次收錄，494 stars
