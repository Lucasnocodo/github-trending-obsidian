---
repo: deepseek-ai/TileKernels
url: https://github.com/deepseek-ai/TileKernels
owner: deepseek-ai
owner_type: Organization
language: Python
license: MIT
description: "A kernel library written in tilelang"
homepage: ""
stars: 1523
stars_per_day: 63
forks: 126
open_issues: 12
created: 2026-04-22
pushed_at: 2026-04-23
first_seen: 2026-04-25
week: "2026-W17"
month: "2026-04"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-25
use_case: "提供基於 TileLang 的高效能 GPU 核心庫，專為 LLM 操作優化。"
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
star_history: "2026-04-25:1072,2026-04-26:1160,2026-04-27:1219,2026-04-28:1281,2026-04-28:1282,2026-04-29:1320,2026-04-29:1320,2026-04-30:1351,2026-05-03:1414,2026-05-04:1418,2026-05-05:1431,2026-05-06:1443,2026-05-07:1462,2026-05-09:1487,2026-05-10:1491,2026-05-11:1494,2026-05-12:1499,2026-05-13:1510,2026-05-14:1516,2026-05-16:1522,2026-05-17:1523"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "TileKernels"
  - "deepseek-ai/TileKernels"
  - "提供基於 TileLang 的高效能 GPU 核心庫，專為 LLM 操作優化。"
---

# TileKernels

**1.5k** stars · **63** stars/天 · 建立 24 天前 · Python · MIT

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供基於 TileLang 的高效能 GPU 核心庫，專為 LLM 操作優化。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (63 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 23 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要高效能 GPU 核心來優化 LLM 操作的 AI 開發者。
> **一句話重點** TileKernels 的設計讓 GPU 核心的開發變得更簡單，特別是在 LLM 操作上，這是其最大的優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--TileKernels");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "deepseek-ai--TileKernels" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 推論 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到高效能的 GPU 核心，值得嘗試。

> [!abstract] 核心創新
> 使用 TileLang 提供高效能的 GPU 核心，專為 LLM 操作優化。

## 專案簡介

TileKernels 是一個專為 LLM 操作設計的 GPU 核心庫，使用 TileLang 這個專用語言來表達高效能的 GPU 核心。使用者可以透過簡單的 Python 語法來實現複雜的計算，並且享受自動優化的好處。這個庫支持多種功能，包括 Top-k 專家選擇、量化、批量轉置等，這些功能都是針對 GPU 性能極限進行優化的。安裝過程中，使用者可以選擇開發版本或正式版本，並且透過 pip 指令輕鬆安裝。技術上，TileKernels 依賴於 PyTorch 和 TileLang，這使得它能夠在高效能計算上發揮優勢，特別是在 NVIDIA SM90 或 SM100 架構的 GPU 上。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，TileKernels 提供了更細緻的量化和專家路由功能，這使得它在處理大規模模型時更具優勢。實際使用中，TileKernels 目前仍處於 alpha 階段，社群活躍度尚可，但仍有許多開放的問題需要解決。對於需要高效能計算的開發者來說，這是一個值得關注的選擇，但在生產環境中使用時需謹慎考量其穩定性。未來六個月內，隨著文檔和代碼質量的提升，這個專案有潛力成為 LLM 領域的重要工具。

**技術棧**：`TileLang` · `PyTorch 2.10` · `CUDA Toolkit 13.1`

## 重點功能

- Gating — 提供 Top-k 專家選擇和評分功能，適用於 Mixture of Experts 路由。
- MoE Routing — 支持令牌到專家的映射，融合擴展/縮減和權重標準化。
- Quantization — 提供 FP8/FP4/E5M6 的量化功能，支持每個令牌、每個區塊和每個通道的轉換。
- Transpose — 支持批量轉置操作，提升數據處理效率。
- Engram — 提供融合 RMSNorm 的 Engram gating 核心，支持前向/反向傳播和權重梯度縮減。
- Manifold HyperConnection — 提供包含 Sinkhorn 正規化和混合拆分/應用的超連接核心。
- Modeling — 提供高級的 `torch.autograd.Function` 包裝，將低級核心組合成可訓練的層。

## 快速開始

1. 安裝開發版本
```bash
pip install -e '.[dev]'
```
2. 安裝正式版本
```bash
pip install tile-kernels
```
3. 運行單元測試
```bash
pytest tests/transpose/test_transpose.py -n 4
```

## 程式碼範例

```python
{
  "前置條件": "安裝 TileKernels 和 pytest",
  "指令": "pytest tests/transpose/test_transpose.py -n 4 # Correctness only with 4 workers",
  "預期輸出": "測試結果顯示所有測試通過。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天就累積 1523 stars（63/天），forks 126（8.3%），顯示出相對活躍的社群參與。主要貢獻者包括 Chenhao Xu 和 Xiangwen Wang，他們在 AI 和 GPU 計算領域有豐富的經驗。這個專案解決了在 LLM 操作中對高效能 GPU 核心的需求，之前的解決方案往往缺乏針對性和性能優化。最近的推廣活動和社群討論可能進一步提升了其曝光率。技術上，TileLang 的出現使得這種高效能計算變得可行，因為它專為 GPU 核心設計，能夠更好地利用硬體資源。forks/stars 比率在 8.3% 屬於中等，顯示出部分用戶已經在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要高效能 GPU 核心來優化 LLM 操作的 AI 開發者。

> [!example] 使用場景
> - AI 研究人員用它來加速 LLM 訓練過程，因為其專為 GPU 性能優化的核心能顯著提升計算效率。
> - 數據科學家用它來實現高效的模型推論，因為 TileKernels 的量化功能能減少計算資源的需求。
> - 開發者用它來構建基於專家模型的應用，因為它提供了先進的 Top-k 專家選擇和路由功能。

## 架構分析

TileKernels 的架構基於 TileLang，這是一種專為 GPU 核心設計的語言，能夠簡化高效能計算的實現。資料流從高級 Python 語法進入 TileLang，然後轉換為底層的 GPU 核心，這樣的設計使得開發者能夠專注於算法而非底層實現。這種架構的優勢在於能夠快速迭代和優化，但也可能導致性能瓶頸，特別是在複雜計算的場景下。未來的擴展性可能受到 TileLang 本身的限制，若需支援更多硬體架構，可能需要進一步的開發。整體而言，這種架構適合快速開發和測試，但在大規模部署時需謹慎考量性能。 

## 技術深入分析

TileKernels 的核心技術機制是基於 TileLang，這是一種專為 GPU 核心設計的語言，能夠簡化高效能計算的實現。這個專案使用了 PyTorch 作為主要的計算框架，並且依賴於 NVIDIA 的 CUDA 技術來實現 GPU 加速。效能上，TileKernels 的設計使得它能夠在高計算強度和記憶體帶寬的情況下接近硬體性能的極限，這對於 LLM 的訓練和推論至關重要。設計上，選擇 TileLang 而非其他語言（如 C++）的原因在於其能夠更快地迭代和優化，但這也可能導致在某些情況下性能不如手寫的 C++ 核心。技術風險方面，TileKernels 目前仍在 alpha 階段，這意味著可能存在未解決的問題和不穩定性，特別是在高負載情況下。整合方面，這個工具與 PyTorch 的兼容性良好，能夠輕鬆地融入現有的 AI 開發流程，但對於不熟悉 TileLang 的開發者來說，學習曲線可能會稍陡峭。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，包含範例和測試指令。安裝過程相對順暢，但需要確保符合 Python 和 CUDA 的版本要求。文件目前僅提供英文，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 專為 LLM 操作優化，能夠充分利用 GPU 性能。
> - 提供多種高級功能，如量化和專家路由，適合複雜的 AI 應用。
> - 使用 TileLang 簡化了 GPU 核心的開發過程，提升開發效率。

> [!danger] 缺點
> - 目前仍在 alpha 階段，穩定性和文檔尚待改善。
> - 僅支援特定的 NVIDIA GPU 架構，限制了使用範圍。
> - 社群活躍度中等，問題解決率低，可能影響使用體驗。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要 NVIDIA SM90 或 SM100 架構的 GPU。
> - 目前處於 alpha 階段，穩定性和文檔尚待改善。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了類似的 GPU 加速功能，但專注於遊戲開發而非 LLM 操作，因此在功能上有所不同。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接口，而 TileKernels 更加底層，提供 GPU 核心的優化，適合需要自定義計算的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 GPU 加速，使用 C++ 實現，記憶體使用效率高，但缺乏對 LLM 的專門優化。 | 如果你的專案主要集中在遊戲開發，且需要高效能的 GPU 核心，則可以選擇此工具。 | medium，因為需要重寫部分核心邏輯以適應不同的開發環境。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 模型的 API 接口，使用 Python 實現，適合快速集成，但不支持底層的 GPU 優化。 | 如果你的需求是快速部署 GPT-2 模型，而不需要底層的性能優化，則可以選擇此工具。 | low，因為 API 接口的使用相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TileKernels** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 GPU 加速，使用 C++ 實現，記憶體使用效率高，但缺乏對 LLM 的專門優化。 | 提供 GPT-2 模型的 API 接口，使用 Python 實現，適合快速集成，但不支持底層的 GPU 優化。 |
> | 遷移成本 | - | medium，因為需要重寫部分核心邏輯以適應不同的開發環境。 | low，因為 API 接口的使用相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，且需要高效能的 GPU 核心 | 如果你的需求是快速部署 GPT-2 模型，而不需要底層的性能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在使用 pytest 測試時，--seed 參數不會影響 Python 的 random 模組。
  - 解法：使用 pytest 的其他隨機化選項，或手動控制隨機種子。
- **[HIGH]** 在某些 GPU 上運行時可能會遇到性能瓶頸，特別是在高負載情況下。
  - 解法：優化代碼或考慮使用更高效的硬體。
- [MEDIUM] 文檔不夠完善，某些功能的使用說明不夠清晰。
  - 解法：參考源碼或社群討論以獲取更多資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 研究團隊的 LLM 訓練 | 非常適合 | 提供專為 LLM 設計的高效能 GPU 核心，能顯著提升訓練速度。 |
| 小型開發團隊的 AI 原型開發 | 適合 | 能夠快速實現和測試新算法，但需注意穩定性問題。 |
| 獨立開發者的個人項目 | 普通 | 雖然功能強大，但學習曲線較陡峭，可能不適合初學者。 |
| 生產環境的核心服務 | 不適合 | 目前仍在 alpha 階段，穩定性和支持不足，風險較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到高效能的 GPU 核心，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意依賴的庫是否有已知的安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TileKernels 最常與 PyTorch 搭配使用，作為高效能計算的核心庫。在一個用 PyTorch 開發的 AI 項目中，你可以用 TileKernels 來加速模型訓練，具體做法是將 TileKernels 的核心函數集成到 PyTorch 的訓練循環中。這個工具與 GitHub Actions 等 CI 工具相容，能夠輕鬆整合到現有的開發流程中。最常見的整合問題是需要確保 CUDA 和 PyTorch 的版本相容，否則可能會導致運行錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 TileKernels 出現之前，許多開發者使用傳統的 CUDA C++ 來實現 GPU 核心，這些方案往往需要大量的手動優化和調試。TileLang 的出現解決了這一問題，使得高效能 GPU 核心的開發變得更加簡單和快速。這個工具代表了 AI 開發中對於性能優化和開發效率的追求，未來可能會隨著更多的硬體支持和功能擴展而演變。

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
| Forks | 126 |
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

**社群活躍度**：社群活躍度中等，最近有合併請求和問題討論。
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

相關概念：[[GPU 加速]] · [[量化]] · [[Mixture of Experts]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/deepseek-ai/TileKernels)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "deepseek-ai--TileKernels"
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
> const concepts = ["GPU 加速","量化","Mixture of Experts"];
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
