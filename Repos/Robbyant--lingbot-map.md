---
repo: Robbyant/lingbot-map
url: https://github.com/Robbyant/lingbot-map
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "A feed-forward 3D foundation model for reconstructing scenes from streaming data"
homepage: ""
stars: 3911
stars_per_day: 652
forks: 343
open_issues: 29
created: 2026-04-15
pushed_at: 2026-04-21
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "3D 重建"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "從串流數據重建場景的前饋式 3D 基礎模型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-25"
contributor_count: 2
engagement: "low"
issue_close_rate: 19
repo_size_kb: 352455
readme_length: 9011
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:914,2026-04-18:922,2026-04-19:1903,2026-04-19:1910,2026-04-20:2652,2026-04-20:2657,2026-04-21:3272,2026-04-21:3283,2026-04-22:3905,2026-04-22:3911"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-map"
  - "Robbyant/lingbot-map"
  - "從串流數據重建場景的前饋式 3D 基礎模型。"
---

# lingbot-map

**3.9k** stars · **652** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Robbyant--lingbot-map");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 從串流數據重建場景的前饋式 3D 基礎模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (652 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在實時環境中進行 3D 重建的開發者和研究者。
> **一句話重點** LingBot-Map 的高效串流推理能力使其在即時 3D 重建領域中具有競爭優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-map");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 重建" && p.file.name !== "Robbyant--lingbot-map" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 重建 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，得到高效的即時 3D 重建能力，值得投入。

> [!abstract] 核心創新
> LingBot-Map 結合了幾何上下文變壓器，實現了高效的串流 3D 重建。

## 專案簡介

LingBot-Map 是一個專注於串流 3D 重建的前饋式模型，利用幾何上下文變壓器來統一坐標定位、密集幾何提示和長距離漂移修正。其架構設計使得在 518×378 的解析度下，能夠以約 20 FPS 的速度穩定推理，並能處理超過 10,000 幀的長序列。這一點使其在性能上優於現有的串流和基於迭代優化的方法。安裝過程中，使用者需要先建立 conda 環境並安裝 PyTorch，然後安裝 LingBot-Map 和可選的 FlashInfer，以獲得更高效的推理性能。這個模型的賣點在於其高效的串流推理能力，適合需要即時 3D 重建的應用場景。

與其他工具相比，如 DINOv2 和 VGGT，LingBot-Map 提供了更優的性能，特別是在長序列的處理上。實際使用中，使用者可能會遇到記憶體不足的問題，這時可以通過調整參數來減少內存使用。這個專案目前處於 alpha 階段，開發者應該在非生產環境中試用，並隨時關注未來的更新。適合需要即時視覺化和 3D 重建的開發者，特別是在處理長序列數據時。未來六個月內，預計會有更多功能和模型的更新。

**技術棧**：`Python 3.10` · `PyTorch 2.9.1` · `FlashInfer`

## 重點功能

- 幾何上下文變壓器 — 統一坐標定位、幾何提示和漂移修正於一個框架中。
- 高效串流推理 — 在 518×378 的解析度下以約 20 FPS 的速度進行推理。
- 支持長序列 — 能夠處理超過 10,000 幀的數據流。
- 可選的 FlashInfer — 提供頁面 KV 緩存注意力以提高推理效率。
- 即時視覺化 — 提供基於瀏覽器的 3D 視覺化工具，支持多種場景示例。

## 快速開始

1. 建立 conda 環境
```bash
conda create -n lingbot-map python=3.10 -y
```
2. 安裝 PyTorch
```bash
pip install torch==2.9.1 torchvision==0.24.1 --index-url https://download.pytorch.org/whl/cu128
```
3. 安裝 lingbot-map
```bash
pip install -e .
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 lingbot-map 和 FlashInfer",
  "指令": "python demo.py --model_path /path/to/lingbot-map-long.pt --image_folder example/church --mask_sky",
  "預期輸出": "重建的 3D 場景將在瀏覽器中可視化。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 3911 stars（652/天），forks 343（8.8%），顯示出強勁的增長潛力。主要貢獻者 LinZhuoChen 和 justimyhxu 在 3D 重建和計算機視覺領域有豐富的經驗，這使得專案更具可信度。LingBot-Map 解決了在串流數據中進行即時 3D 重建的痛點，傳統方法往往需要長時間的計算和後處理，無法實現即時反饋。社群的活躍度和開放的問題反映了使用者對此工具的興趣和需求，尤其是對於 360 度視頻支持的需求。這些因素共同推動了專案的快速成長。

## 適合誰使用

**目標受眾**：需要在實時環境中進行 3D 重建的開發者和研究者。

> [!example] 使用場景
> - 3D 藝術家用它來即時重建虛擬場景，因為其高效的推理速度能夠支持長序列的即時視覺化。
> - 機器人開發者用它來實現實時環境感知，因為其幾何上下文變壓器能夠提供準確的場景重建。
> - 學術研究者用它來分析和優化 3D 重建算法，因為其開放的代碼和模型能夠輕鬆進行實驗和調整。

## 架構分析

LingBot-Map 採用前饋式架構，這使得其在推理時能夠快速響應。資料流從輸入的串流數據開始，經過幾何上下文變壓器進行處理，最終輸出重建的 3D 場景。這種設計使得模型能夠在長序列中保持穩定的推理性能，但也帶來了對 GPU 記憶體的高需求。選擇使用 FlashInfer 進一步提高推理效率，但如果未安裝，則會回退到 PyTorch 的原生注意力機制，這可能會影響性能。擴展性方面，模型在處理超過 10,000 幀的數據時，可能會遇到記憶體瓶頸，這需要使用者進行調整以適應不同的硬體環境。

## 技術深入分析

LingBot-Map 的核心技術機制是幾何上下文變壓器，這一設計使得模型能夠在串流數據中有效地進行 3D 重建。其使用了高效的注意力機制，並結合了 KV 緩存來提升推理速度。模型在處理長序列時，能夠保持穩定的性能，這對於即時應用至關重要。設計上，選擇 PyTorch 作為框架，因為其在深度學習領域的廣泛應用和支持，這也使得依賴樹相對簡單。技術風險方面，隨著數據量的增加，可能會出現記憶體瓶頸，這需要使用者根據實際情況進行調整。整合方面，LingBot-Map 能夠與主流的深度學習工具鏈良好兼容，並且在 CI/CD 流程中也能夠順利運行。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程中可能會遇到依賴問題，但整體順暢；有提供 demo 來幫助用戶快速上手；目前僅有英文文檔，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 高效的串流推理，適合即時應用
> - 支持長序列處理，超過 10,000 幀
> - 開放的代碼和模型，便於研究和實驗

> [!danger] 缺點
> - 需要高效的 GPU 硬體支持
> - 安裝過程相對複雜，需要配置多個依賴
> - 在長序列處理時可能會遇到記憶體不足問題

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要 CUDA 12.8 以獲得最佳性能
> - 在長序列處理時可能會遇到記憶體不足問題

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [facebookresearch/dinov2](https://github.com/facebookresearch/dinov2) | DINOv2 專注於圖像特徵提取，而 LingBot-Map 更加專注於即時 3D 重建，適合需要即時反饋的應用場景。 |
| [facebookresearch/vggt](https://github.com/facebookresearch/vggt) | VGGT 是一個基於圖像的 3D 重建工具，而 LingBot-Map 提供了更高效的串流推理和長序列處理能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [facebookresearch/dinov2](https://github.com/facebookresearch/dinov2) | DINOv2 專注於圖像特徵提取，主要用於靜態圖像分析，而 LingBot-Map 更加專注於即時 3D 重建，適合需要即時反饋的應用場景。 | 如果你的應用主要集中在靜態圖像分析和特徵提取，DINOv2 會是更好的選擇。 | medium，因為需要重構數據流和模型架構。 |
| [facebookresearch/vggt](https://github.com/facebookresearch/vggt) | VGGT 是一個基於圖像的 3D 重建工具，主要用於靜態場景的重建，而 LingBot-Map 提供了更高效的串流推理和長序列處理能力。 | 如果你的重建需求主要集中在靜態場景，VGGT 可能會更合適。 | high，因為需要全面調整模型和數據處理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-map** | **dinov2** | **vggt** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | DINOv2 專注於圖像特徵提取，主要用於靜態圖像分析，而 LingBot-Map 更加專注於即時 3D 重建，適合需要即時反饋的應用場景。 | VGGT 是一個基於圖像的 3D 重建工具，主要用於靜態場景的重建，而 LingBot-Map 提供了更高效的串流推理和長序列處理能力。 |
> | 遷移成本 | - | medium，因為需要重構數據流和模型架構。 | high，因為需要全面調整模型和數據處理流程。 |
> | 適用場景 | 主要場景 | 如果你的應用主要集中在靜態圖像分析和特徵提取，DINOv2  | 如果你的重建需求主要集中在靜態場景，VGGT 可能會更合適。 |

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

- **[HIGH]** 在長序列處理時，記憶體可能不足，導致推理失敗
  - 解法：使用 --offload_to_cpu 參數來減少 GPU 記憶體使用
- [MEDIUM] 安裝 FlashInfer 時可能會遇到版本不兼容問題
  - 解法：確保 PyTorch 和 CUDA 版本匹配
- [low] 在使用 demo 時，某些場景可能需要額外的數據集
  - 解法：提前下載所需的數據集，或使用提供的示例場景

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要即時 3D 重建的 AR 應用 | 非常適合 | 其高效的串流推理能力能夠支持即時反饋。 |
| 靜態場景的 3D 重建 | 不適合 | 專注於即時重建，靜態場景處理性能不如其他工具。 |
| 機器人導航系統 | 適合 | 能夠提供實時環境感知和場景重建。 |
| 學術研究中的 3D 重建算法比較 | 適合 | 開放的代碼和模型便於進行實驗和調整。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到高效的即時 3D 重建能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需注意依賴的外部庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-map");
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
> const me = dv.page("Repos/Robbyant--lingbot-map");
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
| Forks | 343 |
| Open Issues | 29 |
| Issue 解決率 | 19% (7 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 344.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Robbyant/lingbot-map) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LinZhuoChen](https://github.com/LinZhuoChen) | 35 |
> | [@justimyhxu](https://github.com/justimyhxu) | 10 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和問題回應。
**連結**：[文件](https://github.com/Robbyant/lingbot-map)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-21）
> **活躍天數** 2 天 · **最新 commit** update gct

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/Robbyant/lingbot-map/issues/10) | Question: 360 Video Support? | 9 | 0 |
> | [#33](https://github.com/Robbyant/lingbot-map/issues/33) | Request: Release Training Code for LingBot-Map | 1 | 0 |
> | [#22](https://github.com/Robbyant/lingbot-map/issues/22) | Security: Unsafe `torch.load()` without `weights_only=True`  | 1 | 0 |
> | [#38](https://github.com/Robbyant/lingbot-map/issues/38) | Oxford Spires Dataset Eval Sequences | 0 | 0 |
> | [#36](https://github.com/Robbyant/lingbot-map/issues/36) | how to implement real-time online 3D reconstruction from a l | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> LingBot-Map: Geometric Context Transformer for Streaming 3D Reconstruction
> 
> Robbyant Team
> 
> [](https://arxiv.org/abs/2604.14141)
> [](lingbot-map_paper.pdf)
> [](https://technology.robbyant.com/lingbot-map)
> [](https://huggingface.co/robbyant/lingbot-map)
> [](https://www.modelscope.cn/models/Robbyant/lingbot-map)
> [](LICENSE.txt)
> 
> https://github.com/user-attachments/assets/fe39e095-af2c-4ec9-b68d-a8ba97e505ab
> 
> -----
> 
> ### 🗺️ Meet LingBot-Map! We've built a feed-forward 3D foundation model for streaming 3D reconstruction! 🏗️🌍
> 
> LingBot-Map has focused on:
> 
> - **Geometric Context Transformer**: Architecturally unifies coordinate grounding, dense geometric cues, and long-range drift correction within a single streaming framework through anchor context, pose-reference window, and trajectory memory.
> - **High-Efficiency Streaming Inference**: A feed-forward architecture with paged KV cache attention, enabling stable inference at ~20 FPS on 518×378 resolution over long sequences exceeding 10,000 frames.
> - **State-of-the-Art Reconstruction**: Superior performance on diverse benchmarks compared to both existing streaming and iterative optimization-based approaches.
> 
> ---
> 
> # ⚙️ Quick Start
> 
> ## Installation
> 
> **1. Create conda environment**
> 
> ```bash
> conda create -n lingbot-map python=3.10 -y
> conda activate lingbot-map
> ```
> 
> **2. Install PyTorch (CUDA 12.8)**
> 
> ```bash
> pip install torch==2.9.1 torchvision==0.24.1 --index-url https://download.pytorch.org/whl/cu128
> ```
> 
> > For other CUDA versions, see [PyTorch Get Started](https://pytorch.org/get-started/locally/).
> 
> **3. Install lingbot-map**
> 
> ```bash
> pip install -e .
> ```
> 
> **4. Install FlashInfer (recommended)**
> 
> FlashInfer provides paged KV cache attention for efficient streaming inference:
> 
> ```bash
> # CUDA 12.8 + PyTorch 2.9
> pip install flashinfer-python -i https://flashinfer.ai/whl/cu128/torch2.9/
> ```
> 
> > For other CUDA/PyTorch combinations, see [FlashInfer installation](https://docs.flashinfer.ai/installation.html).
> > If FlashInfer is not installed, the model falls back to SDPA (PyTorch native attention) via `--use_sdpa`.
> 
> **5. Visualization dependencies (optional)**
> 
> ```bash
> pip install -e ".[vis]"
> ```
> 
> # 📦 Model Download
> 
> | Model Name | Huggingface Repository | ModelScope Repository | Description |
> | :--- | :--- | :--- | :--- |
> | lingbot-map-long | [robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map) | [Robbyant/lingbot-map](https://www.modelscope.cn/models/Robbyant/lingbot-map) | Better suited for long sequences and large scale scenes (Recommend). |
> | lingbot-map | [robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map) | [Robbyant/lingbot-map](https://www.modelscope.cn/models/Robbyant/lingbot-map) | Balanced checkpoint — trade off all-around performance across short and long sequences. |
> | lingbot-map-stage1 | [robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map) | [Robbyant/lingbot-map](https://www.modelscope.cn/models/Robbyant/lingbot-map) | Stage-1 training checkpoint of lingbot-map — can be loaded into the VGGT model for bidirectional inference. |
> 
> > 🚧 **Coming soon:** we're training an stronger model that supports longer sequences — stay tuned.
> 
> # 🎬 Demo
> 
> Run `demo.py` for interactive 3D visualization via a browser-based [viser](https://github.com/nerfstudio-project/viser) viewer (default `http://localhost:8080`).
> 
> ### Try the Example Scenes
> 
> We provide four example scenes in `example/` that you can run out of the box:
> ```bash
> # Church scene
> python demo.py --model_path /path/to/lingbot-map-long.pt \
>     --image_folder example/church --mask_sky
> ```
> 
> https://github.com/user-attachments/assets/aa10f7ab-8024-43c7-92f8-d56159ec85c8
> 
> ```bash
> # University scene
> python demo.py --model_path /path/to/lingbot-map-long.pt \
>     --image_folder example/university --mask_sky
> ```
> 
> https://github.com/user-attachments/assets/212a1744-6ff5-4ccf-9bd4-728608248b57
> 
> ```bash
> # Loop scene (loop closure trajectory)
> python demo.py --model_path /path/to/lingbot-map-long.pt \
>     --image_folder example/loop
> ```
> 
> https://github.com/user-attachments/assets/5ae0a292-b081-40c6-838c-b7c1a0538d75
> 
> ```bash
> # Oxford scene with sky masking (outdoor, large scale scene)
> python demo.py --model_path /path/to/lingbot-map-long.pt \
>     --image_folder example/oxford --mask_sky
> ```
> 
> https://github.com/user-attachments/assets/6b8daa95-9ed4-40b2-9902-7435779b886d
> 
> We will provide more examples in the follow-up.
> ### Streaming with Keyframe Interval
> 
> Use `--keyframe_interval` to reduce KV cache memory by only keeping every N-th frame as a keyframe. Non-keyframe frames still produce predictions but are not stored in the cache. This is useful for long sequences which exceed 320 frames (We train with video RoPE on 320 views, so performance degrades when the KV cache stores more than 320 views. Using a keyframe strategy allows inference over longer sequences.).
> 
> **Dataset:** Download the demo sequences from [robbyant/lingbot-map-demo](https://huggingface.co/datasets/robbyant/lingbot-map-demo/tree/main) on Hugging Face.
> 
> Example run on the `travel` sequence from the dataset above (sky masking on, 4 camera optimization iterations, keyframe every 2 frames):
> 
> ```bash
> python demo.py \
>     --image_folder /path/to/lingbot-map-demo/travel/ \
>     --model_path /path/to/lingbot-map-long.pt \
>     --mask_sky \
>     --camera_num_iterations 4 \
>     --keyframe_interval 2
> ```
> 
> https://github.com/user-attachments/assets/d350b590-d036-4363-af8c-7af3918338ef
> 
> ### Windowed Inference (for long sequences, >3000 frames)
> 
> ```bash
> python demo.py --model_path /path/to/lingbot-map-long.pt \
>     --video_path video.mp4 --fps 10 \
>     --mode windowed --window_size 128
> ```
> 
> ### Sky Masking
> 
> Sky masking uses an ONNX sky segmentation model to filter out sky points from the reconstructed point cloud, which improves visualization quality for outdoor scenes.
> 
> **Setup:**
> 
> ```bash
> # Install onnxruntime (required)
> pip install onnxruntime        # CPU
> # or
> pip install onnxruntime-gpu    # GPU (faster for large image sets)
> ```
> 
> The sky segmentation model (`skyseg.onnx`) will be automatically downloaded from [HuggingFace](https://huggingface.co/JianyuanWang/skyseg/resolve/main/skyseg.onnx) on first use.
> 
> **Usage:**
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder /path/to/images/ --mask_sky
> ```
> 
> Sky masks are cached in `_sky_masks/` so subsequent runs skip regeneration. You can also specify a custom cache directory with `--sky_mask_dir`, or save side-by-side mask visualizations with `--sky_mask_visualization_dir`:
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder /path/to/images/ --mask_sky \
>     --sky_mask_dir /path/to/cached_masks/ \
>     --sky_mask_visualization_dir /path/to/mask_viz/
> ```
> 
> ### Visualization Options
> 
> | Argument | Default | Description |
> |:---|:---|:---|
> | `--port` | `8080` | Viser viewer port |
> | `--conf_threshold` | `1.5` | Visibility threshold for filtering low-confidence points |
> | `--point_size` | `0.00001` | Point cloud point size |
> | `--downsample_factor` | `10` | Spatial downsampling for point cloud display |
> 
> ### Without FlashInfer (SDPA fallback)
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder /path/to/images/ --use_sdpa
> ```
> 
> ### Running on Limited GPU Memory
> 
> If you run into out-of-memory issues, try one (or both) of the following:
> 
> - **`--offload_to_cpu`** — offload per-frame predictions to CPU during inference (on by default; use `--no-offload_to_cpu` only if you have memory to spare).
> - **`--num_scale_frames 2`** — reduce the number of bidirectional scale frames from the default 8 down to 2, which shrinks the activation peak of the initial scale phase.
> 
> ### Faster Inference
> 
> Lower the number of iterative refinement steps in the camera head to trade a small amount of pose accuracy for wall-clock speed:
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder /path/to/images/ --camera_num_iterations 1
> ```
> 
> `--camera_num

## 延伸閱讀

相關概念：[[3D 重建]] · [[電腦視覺]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[inspatio--worldfm|inspatio/worldfm]]

[GitHub](https://github.com/Robbyant/lingbot-map)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 重建）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 重建" AND file.name != "Robbyant--lingbot-map"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Robbyant--lingbot-map"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Robbyant--lingbot-map" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "Robbyant--lingbot-map"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 重建","電腦視覺","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Robbyant--lingbot-map" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Robbyant--lingbot-map");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Robbyant--lingbot-map" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Robbyant" AND file.name != "Robbyant--lingbot-map"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-map");
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
> const me = dv.page("Repos/Robbyant--lingbot-map");
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
> const me = dv.page("Repos/Robbyant--lingbot-map");
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
> const me = dv.page("Repos/Robbyant--lingbot-map");
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
> const me = dv.page("Repos/Robbyant--lingbot-map");
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

> **2026-04-18** — 首次收錄
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

- [[2026-04-22|2026-04-22]] — 再次上榜，3.9k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，3.3k stars
- [[2026-04-20|2026-04-20]] — 再次上榜，2.7k stars
- [[2026-04-19|2026-04-19]] — 再次上榜，1.9k stars
- [[2026-04-18|2026-04-18]] — 首次收錄，914 stars
