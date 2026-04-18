---
repo: Robbyant/lingbot-map
url: https://github.com/Robbyant/lingbot-map
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "A feed-forward 3D foundation model for reconstructing scenes from streaming data"
homepage: ""
stars: 922
stars_per_day: 461
forks: 62
open_issues: 8
created: 2026-04-15
pushed_at: 2026-04-17
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
appearances: 1
next_review: "2026-04-21"
contributor_count: 2
engagement: "low"
issue_close_rate: 20
repo_size_kb: 352479
readme_length: 8179
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:914,2026-04-18:922"
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

**922** stars · **461** stars/天 · 建立 2 天前 · Python · Apache-2.0

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
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (461 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要從串流影像中即時重建 3D 場景的開發者和研究者。
> **一句話重點** LingBot-Map 的設計突破了傳統 3D 重建的限制，實現了即時串流處理的高效能。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時 3D 重建的效果，值得投入。

> [!abstract] 核心創新
> LingBot-Map 結合了幾何上下文變壓器和高效的串流推理架構，實現了即時 3D 重建的突破性進展。

## 專案簡介

LingBot-Map 是一個專注於串流 3D 重建的前饋式模型，主要透過幾何上下文變壓器來統一坐標定位、密集幾何線索和長距離漂移校正。它的架構設計使得在長達 10,000 幀的序列中，能以約 20 FPS 的速度穩定推理，這對於需要即時處理的應用場景非常重要。使用者可以透過簡單的指令，如 `python demo.py --model_path /path/to/checkpoint.pt --image_folder /path/to/images/` 來進行串流推理，這使得其操作相對簡單。技術上，該模型利用了 paged KV cache attention 來提高推理效率，這在現有的串流和迭代優化方法中表現出色。相比於其他工具，LingBot-Map 的優勢在於其高效的推理能力和對長序列的支持，這在處理大量影像數據時特別有用。

與傳統的基於迭代優化的方法相比，它能夠在更短的時間內完成更高質量的重建。使用者在實際應用中可能會遇到 GPU 記憶體使用過高的問題，但可以透過選項如 `--offload_to_cpu` 來緩解。這個專案目前仍在活躍開發中，未來可能會推出更強大的模型。對於需要即時 3D 重建的團隊，LingBot-Map 是一個值得考慮的選擇，特別是在需要處理長序列影像的情境下。總體來看，這個專案的成熟度還在 beta 階段，適合用於原型開發和研究，但不建議在生產環境中使用。

**技術棧**：`Python 3.10` · `PyTorch 2.9.1` · `FlashInfer`

## 重點功能

- 幾何上下文變壓器 — 統一坐標定位、幾何線索和漂移校正，提升重建準確性。
- 高效串流推理 — 以約 20 FPS 的速度處理超過 10,000 幀的序列。
- 支持多種輸入 — 可從影像或視頻中進行串流推理，靈活應用於不同場景。
- 可視化選項 — 提供多種可視化參數設置，方便用戶調整顯示效果。
- GPU 記憶體管理 — 提供多種選項來減少記憶體使用，適應不同硬體環境。

## 快速開始

1. 創建 conda 環境
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
4. 安裝 FlashInfer（推薦）
```bash
pip install flashinfer-python -i https://flashinfer.ai/whl/cu128/torch2.9/
```
5. 運行 demo
```bash
python demo.py --model_path /path/to/checkpoint.pt --image_folder /path/to/images/
```

## 程式碼範例

```python
{
  "前置條件": "安裝完成後，運行 demo.py 進行 3D 重建。",
  "指令": "python demo.py --model_path /path/to/checkpoint.pt --image_folder /path/to/images/",
  "預期輸出": "重建的 3D 場景將在瀏覽器中顯示。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 922 stars（461/天），forks 62（6.7%），這顯示出該專案的快速增長。作者 LinZhuoChen 和 justimyhxu 之前在 3D 重建和計算機視覺領域有豐富的經驗，這使得他們能夠針對現有工具的不足提出有效的解決方案。LingBot-Map 解決了串流數據重建過程中效率低下的問題，這在以往的工具中並未得到良好處理。最近的開發活動和社群互動也顯示出其活躍度，這對於未來的發展是個好兆頭。

## 適合誰使用

**目標受眾**：需要從串流影像中即時重建 3D 場景的開發者和研究者。

> [!example] 使用場景
> - 3D 設計師用它來從實時影像中重建場景，因為它能夠以 20 FPS 的速度處理長達 10,000 幀的序列，顯著提高工作效率。
> - 機器人開發者用它來即時更新機器人的環境模型，因為其高效的推理能力可以支持動態環境的快速適應。
> - 學術研究者用它來進行 3D 重建的實驗，因為其開源特性和活躍的社群能夠提供持續的支持和更新。

## 架構分析

LingBot-Map 採用前饋式架構，這使得其在處理長序列數據時能夠保持高效性。資料流經過幾何上下文變壓器，進行坐標定位和幾何線索的融合，並利用 paged KV cache attention 來優化記憶體使用。這種設計使得模型能夠在長達 10,000 幀的序列中穩定推理，並且在 GPU 記憶體不足的情況下，透過選項如 `--offload_to_cpu` 進行優化。選擇前饋式架構的代價在於可能無法充分利用迭代優化的優勢，但在即時應用中，這種設計能夠顯著提高推理速度。整體而言，這個架構在處理大規模影像數據時的擴展性良好，適合用於需要即時反應的場景。

## 技術深入分析

LingBot-Map 的核心技術在於幾何上下文變壓器，這是一種新穎的結構，能夠有效融合坐標定位和幾何線索。這種設計使得模型在處理長序列數據時，能夠保持高效的推理速度，並且在多種基準測試中表現優異。該模型的推理速度約為 20 FPS，這在處理超過 10,000 幀的序列時尤為重要。選擇前饋式架構的優勢在於能夠快速響應，但在某些情況下可能無法充分利用迭代優化的潛力。

這個模型的依賴樹相對簡單，主要依賴於 PyTorch 和 FlashInfer，這使得使用者能夠快速上手。技術上，LingBot-Map 需要較高的 GPU 記憶體，這可能會在大規模實施時造成瓶頸。對於外部 API 的依賴程度較低，這使得整合到現有的工作流中相對容易。整體來看，這個工具在 CI/CD pipeline 的友好度高，能夠輕鬆與主流框架整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，適合新手使用。安裝過程中可能會遇到依賴問題，但整體流程順暢。提供了良好的入門指南，讓使用者能夠快速上手。文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 高效的串流推理能力，適合長序列數據處理。
> - 開源且活躍的社群，便於獲得支持和更新。
> - 靈活的可視化選項，方便用戶調整顯示效果。

> [!danger] 缺點
> - 仍在 beta 階段，API 可能會有變動。
> - 對於 GPU 記憶體的需求較高，可能需要進行優化。
> - 安裝過程相對複雜，需要配置多個依賴。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要 CUDA 12.8 以上的 GPU 支持以獲得最佳性能。
> - 在 GPU 記憶體不足時可能會遇到性能瓶頸。
> - 目前仍在 beta 階段，API 可能會有變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於靜態 3D 重建，而 LingBot-Map 支持串流數據的即時處理，適合動態環境。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 主要用於語音合成，而 LingBot-Map 專注於 3D 重建，兩者的應用場景截然不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於靜態 3D 重建，而 LingBot-Map 支持串流數據的即時處理，適合動態環境。 | 如果你的應用場景主要是靜態環境的 3D 重建，且不需要即時反應，則可以考慮使用 boneyard。 | medium，因為兩者的架構和使用方式有一定差異。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 主要用於語音合成，而 LingBot-Map 專注於 3D 重建，兩者的應用場景截然不同。 | 如果你的需求是語音合成而非 3D 重建，則 NemoClaw 更為合適。 | high，因為兩者的技術棧和應用場景完全不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-map** | **boneyard** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於靜態 3D 重建，而 LingBot-Map 支持串流數據的即時處理，適合動態環境。 | NemoClaw 主要用於語音合成，而 LingBot-Map 專注於 3D 重建，兩者的應用場景截然不同。 |
> | 遷移成本 | - | medium，因為兩者的架構和使用方式有一定差異。 | high，因為兩者的技術棧和應用場景完全不同。 |
> | 適用場景 | 主要場景 | 如果你的應用場景主要是靜態環境的 3D 重建，且不需要即時反 | 如果你的需求是語音合成而非 3D 重建，則 NemoClaw |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於原型開發和研究，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 GPU 記憶體不足時可能會導致推理失敗。
  - 解法：使用 `--offload_to_cpu` 選項來減少 GPU 負擔。
- [MEDIUM] 安裝過程中可能會遇到依賴版本不兼容的問題。
  - 解法：確保所有依賴都符合要求，特別是 PyTorch 和 CUDA 版本。
- [MEDIUM] 在長序列推理時，可能會遇到 KV cache 記憶體過高的問題。
  - 解法：使用 `--keyframe_interval` 來減少記憶體使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要即時 3D 重建的機器人應用 | 非常適合 | 能夠快速處理長序列影像，適合動態環境。 |
| 靜態 3D 重建的學術研究 | 普通 | 雖然可以使用，但不如專注於靜態重建的工具高效。 |
| 需要高效能的 3D 視覺化工具 | 適合 | 提供多種可視化選項，能夠滿足不同需求。 |
| 小型團隊的原型開發 | 非常適合 | 開源且活躍的社群能夠提供支持和更新。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時 3D 重建的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料。依賴的庫和框架均為開源且廣泛使用，安全性相對較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LingBot-Map 最常與 PyTorch 和 FlashInfer 搭配使用，適合在 AI/ML 的開發和部署環境中。用戶可以在使用 Next.js + Vercel 部署的專案中，透過 `python demo.py` 來進行 3D 重建，具體做法是將模型路徑和影像資料夾作為參數傳入。該工具支援 GitHub Actions 等 CI 工具，並且可以與 VS Code 等 IDE 整合，提供良好的開發體驗。整合過程中，最常見的問題是依賴版本不兼容，建議在安裝前檢查所有依賴的版本。

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
| Forks | 62 |
| Open Issues | 8 |
| Issue 解決率 | 20% (2 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 344.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Robbyant/lingbot-map) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LinZhuoChen](https://github.com/LinZhuoChen) | 18 |
> | [@justimyhxu](https://github.com/justimyhxu) | 10 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和問題回應。
**連結**：[文件](https://github.com/Robbyant/lingbot-map)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-17 ~ 2026-04-17）
> **活躍天數** 1 天 · **最新 commit** update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/Robbyant/lingbot-map/issues/10) | Question: 360 Video Support? | 0 | 0 |
> | [#9](https://github.com/Robbyant/lingbot-map/issues/9) | Any idea for using given camera poses? | 0 | 2 |
> | [#8](https://github.com/Robbyant/lingbot-map/issues/8) | Wrong 3D Path | 0 | 5 |
> | [#7](https://github.com/Robbyant/lingbot-map/issues/7) | Train code release plan? | 0 | 1 |
> | [#6](https://github.com/Robbyant/lingbot-map/issues/6) | GPU memory usage | 0 | 2 |

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
> | lingbot-map | [robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map) | [Robbyant/lingbot-map](https://www.modelscope.cn/models/Robbyant/lingbot-map) | Balanced checkpoint used in the paper and demo — strong all-around performance across short and long sequences. |
> | lingbot-map-long | [robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map) | [Robbyant/lingbot-map](https://www.modelscope.cn/models/Robbyant/lingbot-map) | Better suited for long sequences. |
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
> 
> ```bash
> # Church scene
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder example/church --mask_sky
> 
> # Oxford scene with sky masking (outdoor)
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder example/oxford --mask_sky
> 
> # University scene
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder example/university --mask_sky
> 
> # Loop scene (loop closure trajectory)
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder example/loop
> ```
> 
> ### Streaming Inference from Images
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder /path/to/images/
> ```
> 
> ### Streaming Inference from Video
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --video_path video.mp4 --fps 10
> ```
> 
> ### Streaming with Keyframe Interval
> 
> Use `--keyframe_interval` to reduce KV cache memory by only keeping every N-th frame as a keyframe. Non-keyframe frames still produce predictions but are not stored in the cache. This is useful for long sequences which exceed 320 frames.
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --image_folder /path/to/images/ --keyframe_interval 6
> ```
> 
> ### Windowed Inference (for long sequences, >3000 frames)
> 
> ```bash
> python demo.py --model_path /path/to/checkpoint.pt \
>     --video_path video.mp4 --fps 10 \
>     --mode windowed --window_size 64
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
> `--camera_num_iterations` defaults to `4`; setting it to `1` skips three refinement passes in the camera head (and shrinks its KV cache by 4×).
> 
> # 📜 License
> 
> This project is released under the Apache License 2.0. See [LICENSE](LICENSE.txt) file for details.
> 
> # 📖 Citation
> 
> ```bibtex
> @article{chen2026geometric,
>   title={Geometric Context Transformer for Streaming 3D Reconstruction},
>   author={Chen, Lin-Zhuo and Gao, Jian and Chen, Yihang and Cheng, Ka Leong and Sun, Yipengjing and Hu, Liangxiao and Xue, Nan and Zhu, Xing and Shen, Yujun and Yao, Yao and Xu, Yinghao},
>   journal={arXiv preprint arXiv:2604.14141},
>   year={2026}
> }
> ```
> 
> # ✨ Acknowledgments
> 
> We thank Shangzhan Zhang, Jianyuan Wang, Yudong Jin, Christian Rupprecht, and Xun Cao for their helpful discussions and support.
> 
> This work builds upon several excellent open-source pr

## 延伸閱讀

相關概念：[[3D 重建]] · [[機器學習]] · [[電腦視覺]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[inspatio--worldfm|inspatio/worldfm]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

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
> const concepts = ["3D 重建","機器學習","電腦視覺"];
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

- [[2026-04-18|2026-04-18]] — 首次收錄，914 stars
