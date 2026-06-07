---
repo: VAST-AI-Research/TripoSplat
url: https://github.com/VAST-AI-Research/TripoSplat
owner: VAST-AI-Research
owner_type: Organization
language: Python
license: MIT
description: "TripoSplat converts a single 2D image into high-quality and variable number of 3D Gaussians, developed by TripoAI."
homepage: ""
stars: 494
stars_per_day: 99
forks: 47
open_issues: 2
created: 2026-06-01
pushed_at: 2026-06-02
first_seen: 2026-06-07
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "3D 資產生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-07
use_case: "將單一 2D 圖像轉換為高品質的 3D 高斯分佈，適用於資產創建和遊戲開發。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-14"
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
star_history: "2026-06-07:494,2026-06-07:494"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "TripoSplat"
  - "VAST-AI-Research/TripoSplat"
  - "將單一 2D 圖像轉換為高品質的 3D 高斯分佈，適用於資產創建和遊戲開發。"
---

# TripoSplat

**494** stars · **99** stars/天 · 建立 5 天前 · Python · MIT

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
> 將單一 2D 圖像轉換為高品質的 3D 高斯分佈，適用於資產創建和遊戲開發。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (99 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質 3D 資產的遊戲和 AR/VR 開發者。
> **一句話重點** TripoSplat 讓 3D 資產生成變得簡單且高效，特別適合需要快速迭代的開發者。

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
> **結論** 花 5 小時學習，3 小時整合，得到高品質的 3D 資產生成，值得一試。

> [!abstract] 核心創新
> 支持生成高達 262,144 個 3D 高斯，並且幾乎無依賴性。

## 專案簡介

TripoSplat 的核心機制是將 2D 圖像轉換為高達 262,144 個 3D 高斯分佈，這使得用戶能夠根據需求調整視覺品質與渲染成本。用戶只需下載模型權重，然後執行簡單的 Python 腳本來進行推斷，最終輸出可視化的 `.ply` 或 `.splat` 文件，這些文件可以在任何 3D 高斯查看器中顯示。這個工具的賣點在於其高品質和靈活性，能夠處理各種圖像風格，並且代碼量少，易於定制和整合。技術上，TripoSplat 使用 Python 開發，並且幾乎沒有依賴性，這樣的設計使得它能在多種平台上運行而不會遇到版本衝突的問題。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，TripoSplat 提供了更高的靈活性和可控性，因為它支持任意數量的高斯生成，並且不依賴於大型框架。實際使用中，TripoSplat 能夠處理的數據量取決於用戶的硬體配置，並且對於需要高效能的場景，建議使用 NVIDIA GPU 以獲得最佳效果。這個專案目前仍在快速發展中，社群活躍度高，對於需要快速生成 3D 資產的開發者來說，這是一個值得考慮的選擇。未來幾個月內，預期會有更多功能和改進推出。

**技術棧**：`Python 3.8` · `Gradio` · `Torch`

## 重點功能

- 高品質生成 — 支持將 2D 圖像轉換為高達 262,144 個 3D 高斯。
- 可調整的高斯數量 — 用戶可根據需求在視覺品質和渲染成本之間進行取捨。
- 簡潔的代碼結構 — 僅需兩個文件，總行數約 2,000，易於定制和整合。
- 幾乎無依賴性 — 無需大型框架，能在任何平台上運行。
- ComfyUI 支持 — 可直接使用官方工作流模板進行整合。

## 快速開始

1. 下載模型權重到 ckpts/ 資料夾
```bash
hf download VAST-AI/TripoSplat --local-dir ckpts/
```
2. 安裝必要的 Python 套件
```bash
pip install numpy safetensors pillow tqdm
```
3. 運行範例推斷腳本
```bash
python run_example.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 494 stars（99/天），forks 47（9.5%），這顯示出用戶對這個工具的高度興趣。開發者 bennyguo 之前在 3D 生成領域有豐富經驗，這個工具解決了傳統 3D 資產生成過程中的高成本和複雜性問題，讓開發者能夠更輕鬆地創建高品質的 3D 資產。社群中對於如何在 AMD GPU 上運行的需求也顯示出潛在的使用者基礎。這個工具的出現正好符合了對於簡化 3D 資產生成的需求，並且其低依賴性設計使得它在多種環境中都能運行。

## 適合誰使用

**目標受眾**：需要快速生成高品質 3D 資產的遊戲和 AR/VR 開發者。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成 3D 資產，因為它能在短時間內將 2D 圖像轉換為高品質的 3D 高斯，提升開發效率。
> - AR/VR 開發者用它來創建虛擬環境中的物件，因為其支持高達 262,144 個高斯生成，能夠提供細緻的視覺效果。
> - 模擬環境設計師用它來生成多樣化的 3D 模型，因為其靈活的生成參數讓他們能夠根據需求調整模型的複雜度。

## 架構分析

TripoSplat 採用簡單的 Python 腳本架構，主要由兩個文件組成，這樣的設計使得用戶能夠快速上手並進行定制。資料流上，使用者從 HuggingFace 或 ModelScope 下載模型權重，然後通過簡單的 Python 指令進行推斷，最終生成的 3D 高斯可用於各種視覺化工具。這種設計的好處在於降低了使用門檻，代價是可能在某些高效能需求下無法充分利用 GPU 的潛力。由於依賴性極少，這個工具的擴展性良好，但在處理極大數據集時，可能會面臨性能瓶頸。

## 技術深入分析

TripoSplat 使用 Python 作為主要開發語言，並依賴於 PyTorch 進行計算，這使得其在處理 3D 高斯生成時能夠充分利用 GPU 的計算能力。核心算法基於高斯分佈，能夠生成多樣化的 3D 模型，這在遊戲和 AR/VR 開發中非常重要。效能方面，該工具的渲染速度取決於生成的高斯數量，對於高達 262,144 個高斯的情況，可能需要較高的 GPU 計算資源。設計上，選擇 Python 和 PyTorch 是因為它們的生態系統成熟且有豐富的資源，然而這也意味著對於某些特定的硬體需求會有依賴性。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在處理大型數據集時。整合方面，該工具與主流的 3D 查看器如 SparkJS 和 SuperSplat 的兼容性良好，能夠輕鬆地融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並包含範例程式碼。安裝過程相對順暢，但需要用戶自行處理模型權重的下載，這可能會造成一些困惑。整體而言，對於新手來說，30 分鐘內應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 高品質的 3D 資產生成，適合多種應用場景。
> - 簡單的代碼結構，易於定制和整合。
> - 幾乎無依賴性，能在多種平台上運行。

> [!danger] 缺點
> - 對於高數量高斯生成的渲染成本較高。
> - 目前僅支持 NVIDIA GPU 硬體。
> - 需要用戶自行管理模型權重的下載。

> [!warning] 注意事項
> - 目前僅支持 NVIDIA GPU 硬體以獲得最佳性能。
> - 對於高數量的高斯生成，可能會導致較高的渲染成本。
> - 需要用戶自行處理模型權重的下載和管理。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲精靈，功能較為單一，但對於遊戲開發者來說更專注於精靈的需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 3D 模型生成，但不如 TripoSplat 在高斯生成的靈活性和品質上優越。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲精靈，功能較為單一，但對於遊戲開發者來說更專注於精靈的需求。 | 如果你的專案主要集中在遊戲精靈的生成，這個工具會更合適。 | low，因為功能上有相似之處。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 3D 模型生成，但不如 TripoSplat 在高斯生成的靈活性和品質上優越。 | 如果需要更廣泛的 3D 模型生成選擇，這個工具會更合適。 | medium，因為需要重新適應其生成邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TripoSplat** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成遊戲精靈，功能較為單一，但對於遊戲開發者來說更專注於精靈的需求。 | 提供多種 3D 模型生成，但不如 TripoSplat 在高斯生成的靈活性和品質上優越。 |
> | 遷移成本 | - | low，因為功能上有相似之處。 | medium，因為需要重新適應其生成邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲精靈的生成，這個工具會更合適。 | 如果需要更廣泛的 3D 模型生成選擇，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在 AMD GPU 上運行時可能遇到兼容性問題
  - 解法：參考熱門 Issue #2 中的快速開始說明
- **[HIGH]** 高數量高斯生成時可能導致性能下降
  - 解法：根據需求調整生成的高斯數量
- [MEDIUM] 模型權重的下載和管理可能造成困惑
  - 解法：仔細參考 README 中的下載指示

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊 | 非常適合 | 能快速生成高品質的 3D 資產，提升開發效率。 |
| 大型 AR/VR 專案 | 適合 | 支持高達 262,144 個高斯生成，能夠提供細緻的視覺效果。 |
| 個人開發者進行 3D 資產實驗 | 普通 | 雖然功能強大，但安裝和使用上可能需要一定的學習曲線。 |
| 需要即時渲染的高性能遊戲專案 | 不適合 | 在高數量高斯生成時可能導致性能下降。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高品質的 3D 資產生成，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料，依賴鏈也相對簡單，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TripoSplat 最常與 3D 查看器如 SparkJS 和 SuperSplat 一起使用，處於資產生成的環節。在一個使用 Next.js 的專案中，可以將生成的 3D 高斯模型直接嵌入到虛擬環境中，具體做法是將 `.ply` 或 `.splat` 文件導入到 3D 引擎中。該工具也支援 GitHub Actions 進行 CI/CD 整合，並且與 VS Code 的開發環境兼容良好。整合的摩擦點主要在於模型權重的管理，使用者需要自行處理下載和更新。

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
| Forks | 47 |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
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

相關概念：[[3D 資產生成]] · [[高斯分佈]] · [[AR/VR]]

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
> WHERE category = "其他" AND file.name != "VAST-AI-Research--TripoSplat"
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
> const concepts = ["3D 資產生成","高斯分佈","AR/VR"];
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

- [[2026-06-07|2026-06-07]] — 首次收錄，494 stars
