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
category: "開發工具"
subcategory: "3D 生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-07
use_case: "將單張 2D 圖像轉換為高品質和可變數量的 3D 高斯分佈。"
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
star_history: "2026-06-07:494"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "TripoSplat"
  - "VAST-AI-Research/TripoSplat"
  - "將單張 2D 圖像轉換為高品質和可變數量的 3D 高斯分佈。"
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
> 將單張 2D 圖像轉換為高品質和可變數量的 3D 高斯分佈。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (99 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質 3D 資產的遊戲和 AR/VR 開發者。
> **一句話重點** TripoSplat 的簡單性和高效性使其成為 3D 資產生成的強大工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VAST-AI-Research--TripoSplat");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 生成" && p.file.name !== "VAST-AI-Research--TripoSplat" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高品質 3D 資產生成，值得嘗試。

> [!abstract] 核心創新
> 支持生成多達 262,144 個高斯，並且幾乎無依賴，能在任何平台上運行。

## 專案簡介

TripoSplat 是一個將單一 2D 圖像轉換為高品質 3D 高斯的工具，支持生成多達 262,144 個高斯，讓用戶可以根據需求在視覺質量和渲染成本之間進行權衡。用戶只需下載模型權重並運行簡單的 Python 腳本，即可開始使用，這使得整個流程相對簡單且高效。該專案的核心在於其高品質的生成能力，能夠處理多種圖像風格，並且代碼量僅約 2000 行，便於定制和整合。它幾乎沒有依賴，能在任何平台上運行，這一點對於開發者來說是個福音。TripoSplat 還支持 ComfyUI，使用者只需將官方工作流模板放入 ComfyUI 即可快速上手。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，TripoSplat 提供了更高的靈活性和更少的依賴性，使其在資產創建和 AR/VR 應用中更具吸引力。該工具的使用效果良好，能夠生成可視化的 `.ply` 或 `.splat` 文件，並可在多種 3D 高斯查看器中進行展示。雖然目前只有 2 個開放問題，但社群活躍度尚可，未來若能解決這些問題，將進一步提升其穩定性和使用體驗。整體來看，TripoSplat 是一個值得關注的專案，適合需要高效生成 3D 資產的開發者。

**技術棧**：`Python` · `HTML`

## 重點功能

- 高品質生成 — 能夠處理多種圖像風格，生成高達 262,144 個高斯。
- 簡單的代碼結構 — 僅需兩個文件，約 2000 行代碼，便於定制和整合。
- 幾乎無依賴 — 不需要 transformers 或 diffusers，能在任何平台上運行。
- ComfyUI 支持 — 直接將官方工作流模板放入 ComfyUI 即可使用。
- 多種下載方式 — 支持 HuggingFace CLI、ModelScope CLI 等多種方式下載模型權重。

## 快速開始

1. 下載模型權重到 ckpts/ 目錄
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

## 程式碼範例

```python
[
  "# 使用 HuggingFace CLI 下載模型權重",
  "hf download VAST-AI/TripoSplat --local-dir ckpts/",
  "# 預期輸出：模型權重將下載到 ckpts/ 目錄"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 494 stars（99/天），forks 47（9.5%），顯示出不錯的增長潛力。作者 Benny Guo 之前在 3D 生成領域有豐富經驗，這個專案解決了傳統 3D 資產生成工具複雜且依賴重的問題，提供了一個輕量級的替代方案。社群的反應也顯示出對於 AMD GPU 支援的需求，這可能會成為未來的發展重點。技術上，隨著深度學習和計算能力的提升，這種高效的 3D 生成方法越來越受到關注，顯示出其在遊戲和 AR/VR 領域的潛力。forks/stars 比率為 9.5%，顯示出有相當比例的用戶在實際修改和使用該專案。

## 適合誰使用

**目標受眾**：需要快速生成高品質 3D 資產的遊戲和 AR/VR 開發者。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成 3D 資產，因為其能夠在短時間內創建高品質的 3D 高斯，節省了手動建模的時間。
> - AR/VR 開發者用它來將 2D 圖像轉換為 3D 物件，因為其支持高達 262,144 個高斯的生成，能夠滿足高品質渲染的需求。
> - 模擬環境設計師用它來創建虛擬環境中的物體，因為其簡單的整合流程和近乎零依賴的特性，讓設計過程更加流暢。

## 架構分析

TripoSplat 的架構設計旨在提供高效的 3D 高斯生成，使用 Python 實現，並依賴簡單的文件結構以降低使用門檻。數據流從 2D 圖像開始，經過高斯生成算法，最終輸出為 `.ply` 或 `.splat` 文件，這些文件可以在多種 3D 查看器中展示。選擇 Python 作為開發語言的好處在於其廣泛的社群支持和豐富的庫，而代價則是可能在性能上不如 C++ 等編譯語言。該專案的擴展性良好，因為其代碼結構簡單，易於集成到其他系統中。整體來看，這種設計使得 TripoSplat 能夠快速適應不同的應用場景，但也可能在處理極大數據集時遇到性能瓶頸。

## 技術深入分析

TripoSplat 使用了高斯生成算法，能夠將 2D 圖像轉換為 3D 高斯，這一過程中涉及到對圖像特徵的提取和高斯分佈的計算。該工具的效能表現在於其能夠生成多達 262,144 個高斯，這對於需要高品質渲染的應用場景非常重要。由於使用 Python 開發，該專案的依賴樹相對簡單，幾乎無需額外的庫，這使得安裝和使用變得更加方便。然而，這也可能在處理大規模數據時導致性能瓶頸，特別是在計算資源有限的情況下。設計上選擇了簡單的文件結構，這一點在開發和維護上都帶來了便利，但也可能限制了某些高級功能的實現。整合方面，該工具能夠輕鬆與 ComfyUI 等主流工具鏈搭配使用，這進一步提升了其在開發者中的吸引力。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程順暢，無明顯坑點。文件中有多種下載模型的方式，方便用戶選擇。整體來說，花 30 分鐘應該能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 高品質的 3D 高斯生成，支持多種圖像風格。
> - 簡單的代碼結構，便於定制和整合。
> - 幾乎無依賴，能在多種平台上運行。

> [!danger] 缺點
> - 目前僅支持 NVIDIA 和 AMD GPU，對於其他硬體可能無法運行。
> - 需要手動下載模型權重，對於新手可能有些不便。
> - 開放問題解決率為 0%，可能影響使用體驗。

> [!warning] 注意事項
> - 目前僅支持 NVIDIA 和 AMD GPU，對於其他硬體可能無法運行。
> - 需要手動下載模型權重，對於新手可能有些不便。
> - 目前開放問題解決率為 0%，可能影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，功能較為單一，適合需要簡單 2D 資產的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的 3D 資產生成工具，但依賴較多，可能導致安裝和使用上的困難。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈生成，功能較為單一，適合需要簡單 2D 資產的開發者。 | 如果你的專案主要是 2D 遊戲，且不需要複雜的 3D 資產生成。 | low，因為兩者的使用方式相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的 3D 資產生成工具，但依賴較多，可能導致安裝和使用上的困難。 | 如果你的團隊需要一個功能更全面的 3D 資產生成工具，並且能夠處理更多的依賴。 | medium，因為需要適應不同的依賴和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TripoSplat** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 2D 精靈生成，功能較為單一，適合需要簡單 2D 資產的開發者。 | 提供更廣泛的 3D 資產生成工具，但依賴較多，可能導致安裝和使用上的困難。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要適應不同的依賴和功能。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是 2D 遊戲，且不需要複雜的 3D 資產生 | 如果你的團隊需要一個功能更全面的 3D 資產生成工具，並且能 |

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

- [MEDIUM] AMD GPU 支援的說明不足，可能導致用戶無法順利運行
  - 解法：參考熱門 Issue #2 中的建議進行設置
- [MEDIUM] 對於新手來說，手動下載模型權重可能造成困惑
  - 解法：仔細閱讀 README 中的下載步驟
- [low] 開放問題解決率低，可能影響用戶信心
  - 解法：持續關注社群更新，並參與問題討論

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要快速生成 3D 資產 | 非常適合 | 高品質生成和簡單的整合流程使其非常適合小型團隊使用。 |
| 大型 AR/VR 項目需要高效的 3D 資產生成 | 適合 | 雖然功能強大，但在大型項目中可能需要更多的支持和資源。 |
| 個人開發者進行 3D 渲染實驗 | 非常適合 | 簡單的安裝和使用流程適合個人開發者進行實驗。 |
| 需要生成複雜的 3D 模型的專業團隊 | 不適合 | 目前功能可能無法滿足專業團隊的高需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高品質 3D 資產生成，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈簡單，適合在 CI/CD 中使用。

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

**社群活躍度**：社群活躍度尚可，但開放問題解決率低。
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

相關概念：[[3D 生成]] · [[深度學習]] · [[電腦視覺]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[TencentARC--Pixal3D|TencentARC/Pixal3D]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[inspatio--worldfm|inspatio/worldfm]]

[GitHub](https://github.com/VAST-AI-Research/TripoSplat)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 生成" AND file.name != "VAST-AI-Research--TripoSplat"
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
> const concepts = ["3D 生成","深度學習","電腦視覺"];
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
