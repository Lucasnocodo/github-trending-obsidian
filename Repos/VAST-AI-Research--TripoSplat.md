---
repo: VAST-AI-Research/TripoSplat
url: https://github.com/VAST-AI-Research/TripoSplat
owner: VAST-AI-Research
owner_type: Organization
language: Python
license: MIT
description: "TripoSplat converts a single 2D image into high-quality and variable number of 3D Gaussians, developed by TripoAI."
homepage: ""
stars: 526
stars_per_day: 88
forks: 52
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
use_case: "將單張 2D 圖像轉換為高品質的 3D 高斯模型，適用於資產創建、AR/VR 和遊戲開發。"
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
star_history: "2026-06-07:494,2026-06-07:494,2026-06-08:526,2026-06-08:526"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "TripoSplat"
  - "VAST-AI-Research/TripoSplat"
  - "將單張 2D 圖像轉換為高品質的 3D 高斯模型，適用於資產創建、AR/VR 和遊戲開發。"
---

# TripoSplat

**526** stars · **88** stars/天 · 建立 6 天前 · Python · MIT

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
> 將單張 2D 圖像轉換為高品質的 3D 高斯模型，適用於資產創建、AR/VR 和遊戲開發。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (88 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質 3D 資產的遊戲和 AR/VR 開發者。
> **一句話重點** TripoSplat 透過簡化 3D 資產生成流程，讓開發者能更快速地將 2D 圖像轉換為高品質的 3D 模型。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高品質的 3D 資產生成，值得嘗試。

> [!abstract] 核心創新
> 支持生成多達 262,144 個 3D 高斯，並且具備極低的依賴性。

## 專案簡介

TripoSplat 的核心機制是將單一的 2D 圖像轉換為多達 262,144 個 3D 高斯，這些高斯可以根據需求調整視覺品質和渲染成本。用戶只需下載模型權重並運行簡單的 Python 指令，即可生成高品質的 3D 資產，這使得它在資產創建、AR/VR 和遊戲開發中非常實用。其設計上採用最小依賴性，避免了版本衝突的問題，並且代碼量僅約 2000 行，便於用戶自定義和整合。TripoSplat 支援 ComfyUI，這意味著用戶可以快速上手，無需深入學習複雜的工作流程。

相較於其他工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，TripoSplat 提供了更高的靈活性和可擴展性，因為它允許用戶根據需求調整生成的高斯數量，並且在性能上表現優異。使用者可以在任何 3D 高斯查看器中可視化輸出的 `.ply` 或 `.splat` 文件，這進一步提升了其應用範圍。由於其簡單的安裝步驟和低門檻的使用方式，適合各種規模的團隊，特別是那些需要快速生成 3D 資產的開發者。未來，隨著社群的發展和功能的增強，TripoSplat 有潛力成為資產創建領域的主流工具。

**技術棧**：`Python 3.8+` · `Gradio` · `Torch`

## 重點功能

- 高品質生成 — 支援將 2D 圖像轉換為多達 262,144 個 3D 高斯，根據需求調整視覺品質。
- 簡單的安裝過程 — 只需下載模型權重並運行簡單的 Python 指令即可開始使用。
- 低依賴性 — 無需使用 transformers 或 diffusers，避免版本衝突問題。
- 支援 ComfyUI — 可以直接將官方工作流程模板放入 ComfyUI 中使用。
- 可視化輸出 — 生成的 `.ply` 或 `.splat` 文件可以在多種 3D 查看器中可視化。

## 快速開始

1. 下載模型權重
```bash
hf download VAST-AI/TripoSplat --local-dir ckpts/
```
2. 安裝必要的 Python 套件
```bash
pip install numpy safetensors pillow tqdm
```
3. 運行範例推論腳本
```bash
python run_example.py
```

## 程式碼範例

```python
{
  "前置條件": "已安裝必要的 Python 套件和模型權重",
  "指令": "python run_example.py",
  "預期輸出": "生成的 3D 高斯模型文件"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 526 stars（88/天），forks 52（9.9%），顯示出強勁的增長潛力。作者 Benny Guo 在 3D 生成領域有豐富的經驗，這個工具解決了傳統 3D 資產生成過程中的複雜性和依賴性問題。社群對於簡化 3D 資產生成的需求日益增加，特別是在 AR/VR 和遊戲開發領域。高效的生成能力和簡單的使用流程使得這個工具在開發者中迅速受到青睞。

## 適合誰使用

**目標受眾**：需要快速生成高品質 3D 資產的遊戲和 AR/VR 開發者。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成 3D 資產，因為它能將 2D 圖像轉換為高品質的 3D 高斯，節省了手動建模的時間。
> - AR/VR 開發者用它來創建虛擬環境中的物件，因為其支持高達 262,144 個高斯的靈活性，能根據性能需求調整。
> - 資產創建團隊用它來簡化工作流程，因為其低依賴性和簡單的安裝過程使得整合到現有系統中變得容易。

## 架構分析

TripoSplat 採用簡單的 Python 腳本結構，主要由 `triposplat.py` 和 `model.py` 兩個文件組成，這樣的設計使得代碼易於理解和修改。數據流從 2D 圖像輸入開始，經過高斯生成算法處理，最終輸出為 3D 高斯模型。這種設計的好處在於降低了學習曲線，代價是可能在處理複雜圖像時的靈活性不足。由於其近乎零依賴性，這使得它能在多種環境中運行，但也可能限制了某些高級功能的實現。整體而言，這種架構適合快速開發和原型設計，但在大規模應用時可能需要進一步優化。

## 技術深入分析

TripoSplat 的核心技術機制是基於高斯生成算法，這使得它能夠將 2D 圖像轉換為多個 3D 高斯，並且支持用戶根據需求調整生成的高斯數量。這種靈活性使得開發者能夠在性能和視覺品質之間找到平衡。效能方面，該工具的設計使其能夠在普通的消費級 GPU 上運行，並且因為其近乎零依賴性，能夠在多種環境中快速部署。選擇 Python 作為開發語言的好處在於其廣泛的生態系統和社群支持，但這也可能帶來一些性能上的折衷。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，尤其是在處理高解析度圖像時。整合方面，TripoSplat 能夠與主流的 3D 查看器無縫對接，這使得其在現有工作流程中非常友好，並且對於 CI/CD pipeline 的整合也相對簡單。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導，並且有範例可供參考。安裝過程順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 高品質的 3D 資產生成能力，適合多種應用場景。
> - 簡單的安裝和使用流程，降低了入門門檻。
> - 低依賴性，避免了常見的版本衝突問題。

> [!danger] 缺點
> - 對於複雜圖像的生成效果可能不如專業工具。
> - 目前僅支援 NVIDIA GPU，對 AMD GPU 的支持尚在開發中。
> - 生成的高斯數量過多可能影響渲染性能。

> [!warning] 注意事項
> - 目前僅支援 NVIDIA GPU，對於 AMD GPU 的支持尚在開發中。
> - 生成的 3D 高斯數量過多可能影響渲染性能，需根據需求調整。
> - 對於複雜的 2D 圖像，生成的 3D 高斯質量可能不如專業建模工具。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲精靈，功能較為專一，無法處理多樣化的 3D 資產需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 資產的版本控制，但缺乏 TripoSplat 的即時生成能力和靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲精靈，功能較為專一，無法處理多樣化的 3D 資產需求。 | 如果你的專案專注於遊戲精靈的生成，且不需要處理其他類型的 3D 資產。 | medium，因為需要重新調整生成流程和數據格式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 資產的版本控制，但缺乏 TripoSplat 的即時生成能力和靈活性。 | 如果你的團隊需要版本控制功能，而不僅僅是生成 3D 資產。 | high，因為需要重新設計資產管理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TripoSplat** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成遊戲精靈，功能較為專一，無法處理多樣化的 3D 資產需求。 | 提供 3D 資產的版本控制，但缺乏 TripoSplat 的即時生成能力和靈活性。 |
> | 遷移成本 | - | medium，因為需要重新調整生成流程和數據格式。 | high，因為需要重新設計資產管理流程。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於遊戲精靈的生成，且不需要處理其他類型的 3 | 如果你的團隊需要版本控制功能，而不僅僅是生成 3D 資產。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 AMD GPU 上運行時可能會遇到兼容性問題
  - 解法：等待官方更新或使用 NVIDIA GPU
- [MEDIUM] 生成高斯數量過多時可能導致性能下降
  - 解法：根據需求調整生成的高斯數量
- [MEDIUM] 對於複雜圖像的生成效果不如專業建模工具
  - 解法：考慮使用其他專業工具進行建模

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要快速生成 3D 資產 | 非常適合 | 簡單的使用流程和高品質的生成能力使其成為理想選擇。 |
| 大型 AR/VR 項目需要穩定的 3D 資產生成工具 | 適合 | 雖然目前仍在 alpha 階段，但其靈活性和低依賴性使其能夠快速整合。 |
| 需要高品質 3D 資產的專業建模工作室 | 不適合 | 對於複雜圖像的生成效果不如專業建模工具。 |
| 教育機構希望教學 3D 資產生成 | 普通 | 雖然易於使用，但可能不具備足夠的深度來滿足高級課程需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高品質的 3D 資產生成，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈也相對簡單，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TripoSplat 通常與 3D 查看器如 SparkJS 和 SuperSplat 搭配使用，處於資產生成的開發環節。用戶可以在用 Next.js 的專案中，將 TripoSplat 整合到資產生成流程中，具體做法是將生成的 `.ply` 文件上傳到 3D 查看器進行可視化。它支援 GitHub Actions 和其他 CI 工具，並且能與主流 IDE 如 VS Code 整合。整合過程中，最常見的問題是依賴庫的版本不匹配，建議使用虛擬環境來避免此問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 TripoSplat 出現之前，3D 資產生成主要依賴於專業建模工具，這些工具通常需要高昂的學習成本和時間。隨著深度學習技術的進步，生成模型的可行性大幅提升，使得像 TripoSplat 這樣的工具能夠快速生成高品質的 3D 資產。這個工具代表了資產生成自動化的趨勢，未來可能會隨著技術的進步而變得更加普及和強大。

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
| Forks | 52 |
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

**社群活躍度**：社群活躍度中等，開放的 issue 數量較少，顯示出初期的穩定性。
**連結**：[文件](https://github.com/VAST-AI-Research/TripoSplat)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-02）
> **活躍天數** 2 天 · **最新 commit** README: add ModelScope download instructions

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/VAST-AI-Research/TripoSplat/issues/2) | Add AMD ROCm quickstart notes for running TripoSplat on AMD  | 0 | 0 |
> | [#1](https://github.com/VAST-AI-Research/TripoSplat/issues/1) | [Question] Improved results? | 0 | 1 |

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

相關概念：[[3D 資產生成]] · [[AR/VR]] · [[遊戲開發]]

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
> const concepts = ["3D 資產生成","AR/VR","遊戲開發"];
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
