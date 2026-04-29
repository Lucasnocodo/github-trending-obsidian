---
repo: deepseek-ai/TileKernels
url: https://github.com/deepseek-ai/TileKernels
owner: deepseek-ai
owner_type: Organization
language: Python
license: MIT
description: "A kernel library written in tilelang"
homepage: ""
stars: 1320
stars_per_day: 220
forks: 111
open_issues: 12
created: 2026-04-22
pushed_at: 2026-04-23
first_seen: 2026-04-25
week: "2026-W17"
month: "2026-04"
category: "AI/ML"
subcategory: "LLM 訓練"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-25
use_case: "提供針對 LLM 操作的優化 GPU 核心，使用 TileLang 開發。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-02"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 146
readme_length: 2939
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-25"
star_history: "2026-04-25:1072,2026-04-26:1160,2026-04-27:1219,2026-04-28:1281,2026-04-28:1282,2026-04-29:1320,2026-04-29:1320"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "TileKernels"
  - "deepseek-ai/TileKernels"
  - "提供針對 LLM 操作的優化 GPU 核心，使用 TileLang 開發。"
---

# TileKernels

**1.3k** stars · **220** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/deepseek-ai--TileKernels");
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
> 提供針對 LLM 操作的優化 GPU 核心，使用 TileLang 開發。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (220 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在高效能 GPU 上進行 LLM 訓練和推論的研究團隊或開發者。
> **一句話重點** TileKernels 透過 TileLang 提供了一種新的方式來優化 GPU 核心，特別適合 LLM 的需求。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--TileKernels");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 訓練" && p.file.name !== "deepseek-ai--TileKernels" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 訓練 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，4 小時整合，得到高效能的 GPU 核心，值得一試。

> [!abstract] 核心創新
> 使用 TileLang 表達高效能 GPU 核心，實現自動優化。

## 專案簡介

TileKernels 是一個專為 LLM 操作優化的 GPU 核心庫，使用 TileLang 這個專用語言來表達高效能的 GPU 核心。用戶可以透過簡單的 Python 語法來調用這些核心，並享受自動優化的優勢。核心功能包括 Top-k 專家選擇、量化、批量轉置等，這些功能使得在訓練和推論過程中能夠達到接近硬體性能的極限。使用者只需安裝相應的依賴，並透過 `pip install tile-kernels` 來安裝，便可輕鬆上手。這個專案的賣點在於其高效能的 GPU 核心設計，特別適合需要大量計算的 AI 應用。

技術上，專案依賴於 PyTorch 和 TileLang，並要求 NVIDIA SM90 或 SM100 架構的 GPU，這使得它在高效能計算上具有優勢。與其他類似工具相比，如 NVIDIA 的 CUDA 核心，TileKernels 提供了更高層次的抽象，讓開發者能夠更快速地進行開發和測試。雖然目前專案仍在 Alpha 階段，且有 12 個開放問題，但其活躍的開發和社群支持顯示出未來的潛力。對於需要進行大規模 AI 訓練的團隊來說，這是一個值得關注的選擇。

**技術棧**：`TileLang` · `PyTorch 2.10` · `CUDA Toolkit 13.1`

## 重點功能

- Gating — 提供 Top-k 專家選擇和評分功能，適合 Mixture of Experts 路由。
- MoE Routing — 支持 Token-to-expert 映射，融合擴展/縮減和權重正規化。
- Quantization — 支持 FP8/FP4/E5M6 的量化，並結合 SwiGLU 操作。
- Transpose — 支持批量轉置操作，提升數據處理效率。
- Engram — 提供融合 RMSNorm 的 Engram gating 核心，支持前向/反向傳遞。
- Manifold HyperConnection — 支持 Sinkhorn 正規化和混合拆分/應用的超連接核心。
- Modeling — 提供高層次的 `torch.autograd.Function` 包裝，將低層次核心組合成可訓練層。

## 快速開始

1. 安裝開發版本
```bash
pip install -e '.[dev]'
```
2. 安裝正式版本
```bash
pip install tile-kernels
```
3. 運行測試
```bash
pytest tests/transpose/test_transpose.py -n 4
```

## 程式碼範例

```python
{
  "前置條件": "安裝 TileKernels 和 PyTorch。",
  "指令": "pytest tests/transpose/test_transpose.py -n 4 # 正確性測試，使用 4 個工作者",
  "預期輸出": "測試結果顯示所有測試通過。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1320 stars（220/天），forks 111（8.4%），顯示出強勁的增長潛力。這個專案的主要貢獻者來自 DeepSeek 團隊，專注於 AI 和高效能計算領域。TileKernels 解決了在 GPU 上高效執行 LLM 操作的需求，之前的解決方案往往缺乏針對性和性能優化。最近的推文和社群討論也引發了對這個工具的興趣。隨著 AI 訓練需求的上升，這個工具的出現正好滿足了市場的需求。forks/stars 比率為 8.4%，顯示出有相當比例的用戶在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在高效能 GPU 上進行 LLM 訓練和推論的研究團隊或開發者。

> [!example] 使用場景
> - AI 研究人員用它來優化 LLM 的訓練過程，因為其提供的 GPU 核心能夠顯著提高計算效率。
> - 後端工程師用它來實現高效的模型推論，因為 TileKernels 的設計可以減少延遲並提高吞吐量。
> - 數據科學家用它來進行大規模數據處理，因為其量化和轉置功能能夠加速數據流轉和計算。

## 架構分析

TileKernels 採用模組化架構，將不同功能的核心分為多個子目錄，如量化、轉置和 MoE 路由。這樣的設計使得每個子模組可以獨立開發和測試，降低了整體系統的複雜性。資料流方面，使用 TileLang 來描述 GPU 核心，並透過 PyTorch 的 autograd 系統來實現高層次的模型組合。

選擇 TileLang 而非傳統 CUDA 直接編程，能夠提高開發效率，但可能在性能上有些微損失。擴展性方面，隨著需求的增加，未來可以考慮加入更多的核心功能或優化現有的核心。整體而言，這個架構設計使得開發者能夠快速迭代和測試，適應快速變化的 AI 領域。

## 技術深入分析

TileKernels 的核心技術在於使用 TileLang 來描述 GPU 核心，這使得開發者能夠以更高層次的抽象來編寫高效能計算代碼。專案中的每個核心模組都針對特定的計算需求進行優化，例如 MoE 路由和量化，這些都是當前 AI 訓練中的關鍵技術。效能方面，這些核心能夠充分利用 NVIDIA GPU 的計算能力，並在內部訓練和推論中已經顯示出良好的性能。設計上，選擇 TileLang 而非傳統的 CUDA 編程，能夠提高開發效率，但可能在某些情況下影響性能。依賴關係方面，專案依賴於 PyTorch 和 TileLang，這使得整體架構相對簡單，但也可能面臨版本兼容性問題。隨著專案的發展，可能需要不斷更新這些依賴以保持最佳性能。整合方面，TileKernels 可以輕鬆與現有的 PyTorch 生態系統結合，並且支持與其他工具鏈的整合，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，並包含了測試範例，對於新手來說非常友好。安裝過程相對順暢，但需要注意 GPU 硬體的要求。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供高效能的 GPU 核心，適合 LLM 訓練和推論。
> - 使用 TileLang 進行開發，簡化了 GPU 核心的編寫過程。
> - 模組化設計使得功能擴展和維護更加方便。

> [!danger] 缺點
> - 仍在 Alpha 階段，可能存在穩定性問題。
> - 需要特定的 NVIDIA GPU 硬體支持，限制了使用範圍。
> - 開放問題數量較多，可能影響使用體驗。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要 NVIDIA SM90 或 SM100 架構的 GPU。
> - 目前仍在 Alpha 階段，API 可能不穩定。
> - 開放問題數量較多，可能影響穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，TileKernels 更專注於 GPU 核心優化。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 提供更全面的 AI 模型訓練框架，而 TileKernels 專注於性能優化的核心。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於高效能計算的核心，但不如 TileKernels 提供的功能全面。 | 如果需要一個簡單的高效能計算核心，而不需要 TileKernels 的多樣化功能。 | low，因為 API 設計相對簡單，易於上手。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 提供全面的 AI 訓練框架，TileKernels 更專注於性能優化的核心。 | 如果需要一個完整的 AI 訓練解決方案，而不僅僅是核心優化。 | medium，因為需要重新調整模型架構以適應不同的框架。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TileKernels** | **boneyard** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於高效能計算的核心，但不如 TileKernels 提供的功能全面。 | 提供全面的 AI 訓練框架，TileKernels 更專注於性能優化的核心。 |
> | 遷移成本 | - | low，因為 API 設計相對簡單，易於上手。 | medium，因為需要重新調整模型架構以適應不同的框架。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的高效能計算核心，而不需要 TileKern | 如果需要一個完整的 AI 訓練解決方案，而不僅僅是核心優化。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在使用 pytest 測試時，--seed 參數無法正確設置 Python 的隨機模組。
  - 解法：手動設置隨機種子以確保測試的一致性。
- **[HIGH]** 某些核心在特定硬體上可能無法達到預期性能。
  - 解法：確保使用符合要求的 NVIDIA GPU。
- [MEDIUM] 文檔中部分功能描述不夠清晰，可能導致誤解。
  - 解法：參考源碼以獲取更準確的功能實現。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 訓練團隊 | 非常適合 | 提供高效能的 GPU 核心，能夠滿足大規模訓練需求。 |
| 小型專案或個人開發者 | 適合 | 易於上手，適合快速開發和測試。 |
| 需要穩定生產環境的企業 | 不適合 | 仍在 Alpha 階段，穩定性不足。 |
| 對 GPU 硬體要求不高的應用 | 普通 | 需要特定的 NVIDIA GPU 硬體支持，限制了使用範圍。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，4 小時整合，得到高效能的 GPU 核心，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，主要依賴於已知的開源庫，無需存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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
| Forks | 111 |
| Open Issues | 12 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-22 |
| Repo 大小 | 146 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/deepseek-ai/TileKernels) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bucket-xv](https://github.com/bucket-xv) | 2 |
> | [@tianr22](https://github.com/tianr22) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題尚未解決。
**連結**：[文件](https://github.com/deepseek-ai/TileKernels)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-23）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1 from tianr22/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/deepseek-ai/TileKernels/issues/11) | tests/pytest_random_plugin.py: --seed does not seed Python's | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Tile Kernels
> 
> Optimized GPU kernels for LLM operations, built with [TileLang](https://github.com/tile-ai/tilelang). TileLang is a domain-specific language for expressing high-performance GPU kernels in Python, featuring easy migration, agile development, and automatic optimization.
> 
> Most kernels in this project approach the limit of hardware performance regarding the compute intensity and memory bandwidth. Some of them have already been used in internal training and inference scenarios. However, they do not represent best practices and we are actively working on improving the code quality and documentation.
> 
> ## Features
> 
> - **Gating** — Top-k expert selection and scoring for Mixture of Experts routing
> - **MoE Routing** — Token-to-expert mapping, fused expansion/reduction and weight normalization
> - **Quantization** — Per-token, per-block, and per-channel FP8/FP4/E5M6 casting with fused SwiGLU+quantization ops
> - **Transpose** — Batched transpose operations
> - **Engram** — Engram gating kernels with fused RMSNorm, forward/backward passes and weight gradient reduction
> - **Manifold HyperConnection** — Hyper-connection kernels including Sinkhorn normalization and mix splitting/application
> - **Modeling** — High-level `torch.autograd.Function` wrappers composing low-level kernels into trainable layers (engram gate, mHC pipeline)
> 
> ## Requirements
> 
> - Python 3.10 or higher
> - PyTorch 2.10 or higher
> - TileLang 0.1.9 or higher
> - NVIDIA SM90 or SM100 architecture GPU
> - CUDA Toolkit 13.1 or higher
> 
> ## Installation
> 
> ### Install a local development version
> 
> ```bash
> pip install -e ".[dev]"
> ```
> 
> ### Install a release version
> 
> ```bash
> pip install tile-kernels
> ```
> 
> ## Testing
> 
> Tests using pytest:
> 
> ### Test single test file
> 
> ```bash
> pytest tests/transpose/test_transpose.py -n 4 # Correctness only with 4 workers
> pytest tests/transpose/test_transpose.py --run-benchmark # Correctness + Benchmarking
> ```
> 
> ### Pressure test
> 
> ```bash
> TK_FULL_TEST=1 pytest -n 4 --count 2
> ```
> 
> ## Project Structure
> 
> ```txt
> tile_kernels/
> ├── moe/        # Mixture of Experts routing related kernels
> ├── quant/      # FP8/FP4/E5M6 quantization
> ├── transpose/  # Batched transpose
> ├── engram/     # Engram gating kernels
> ├── mhc/        # Manifold HyperConnection kernels
> ├── modeling/   # High-level autograd modeling layers (engram, mHC)
> ├── torch/      # PyTorch reference implementations
> └── testing/    # Test and benchmark utilities
> ```
> 
> ## Acknowledgement
> 
> This project is built on [TileLang](https://github.com/tile-ai/tilelang). Thanks and respect to the developers!
> 
> ## License
> 
> This code repository is released under [the MIT License](LICENSE).
> 
> ## Citation
> 
> ```bibtex
> @misc{tilekernels,
>       title={TileKernels},
>       author={Xiangwen Wang, Chenhao Xu, Huanqi Cao, Rui Tian, Weilin Zhao, Kuai Yu and Chenggang Zhao},
>       year={2026},
>       publisher = {GitHub},
>       howpublished = {\url{https://github.com/deepseek-ai/TileKernels}},
> }
> ```

## 延伸閱讀

相關概念：[[GPU 加速]] · [[量化技術]] · [[高效能計算]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/deepseek-ai/TileKernels)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 訓練）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 訓練" AND file.name != "deepseek-ai--TileKernels"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "deepseek-ai--TileKernels"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "deepseek-ai--TileKernels" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "deepseek-ai--TileKernels"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["GPU 加速","量化技術","高效能計算"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "deepseek-ai--TileKernels" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/deepseek-ai--TileKernels");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "deepseek-ai--TileKernels" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "deepseek-ai" AND file.name != "deepseek-ai--TileKernels"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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
> const me = dv.page("Repos/deepseek-ai--TileKernels");
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

> **2026-04-25** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 再次上榜，1.3k stars
- [[2026-04-28|2026-04-28]] — 再次上榜，1.3k stars
- [[2026-04-27|2026-04-27]] — 再次上榜，1.2k stars
- [[2026-04-26|2026-04-26]] — 再次上榜，1.2k stars
- [[2026-04-25|2026-04-25]] — 首次收錄，1.1k stars
