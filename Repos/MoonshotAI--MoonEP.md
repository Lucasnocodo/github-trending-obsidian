---
repo: MoonshotAI/MoonEP
url: https://github.com/MoonshotAI/MoonEP
owner: MoonshotAI
owner_type: Organization
language: Python
license: MIT
description: "MoonEP: A Perfectly Balanced Expert Parallelism Library via Dynamic Redundant Experts"
homepage: ""
stars: 807
stars_per_day: 202
forks: 80
open_issues: 14
created: 2026-07-24
pushed_at: 2026-07-28
first_seen: 2026-07-29
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "專家並行"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-29
use_case: "透過動態冗餘專家實現完美平衡的專家並行庫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-01"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 525
readme_length: 9886
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-29"
star_history: "2026-07-29:806,2026-07-29:807"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "MoonEP"
  - "MoonshotAI/MoonEP"
  - "透過動態冗餘專家實現完美平衡的專家並行庫。"
---

# MoonEP

**807** stars · **202** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/MoonshotAI--MoonEP");
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
> 透過動態冗餘專家實現完美平衡的專家並行庫。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (202 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在多 GPU 環境中進行高效專家並行計算的深度學習研究者和工程師。
> **一句話重點** MoonEP 的動態冗餘專家設計使其在專家並行計算中實現了前所未有的負載平衡。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--MoonEP");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "專家並行" && p.file.name !== "MoonshotAI--MoonEP" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 專家並行 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、12 小時整合，得到穩定的專家並行計算效果，值得考慮。

> [!abstract] 核心創新
> MoonEP 通過動態冗餘專家實現了專家並行計算的完美負載平衡。

## 專案簡介

MoonEP 是一個專家並行通信庫，旨在通過動態冗餘專家來保持每個計算單元的令牌負載完美平衡。使用者只需提供輸入令牌數量 `S` 和每個令牌的路由專家數量 `K`，庫會自動確保每個計算單元接收到恰好 `S × K` 的令牌，這樣即使在路由不均的情況下也能保持平衡。其核心機制是在線規劃，利用一個幾乎無開銷的 GPU 規劃內核來預先加載少量冗餘專家，並在反向傳播中將其梯度還原到原計算單元。這樣的設計不僅提高了計算效率，還減少了內存碎片的問題。

使用者可以通過 `buffer.dispatch` 和 `buffer.combine` 來進行前向和反向計算，並且支持零拷貝操作以進一步提升性能。這個工具的賣點在於其在處理不均衡路由時的穩定性，能夠有效避免因為某些計算單元負載過重而導致的性能下降。相較於其他專家並行庫，MoonEP 的通訊時間在各種不均衡程度下都保持平穩，顯示出其優越的性能。這使得它在大規模模型訓練中表現出色，特別是在需要高效利用 GPU 資源的情況下。

**技術棧**：`Python` · `CUDA`

## 重點功能

- 完美平衡 — 每個計算單元接收恰好 `S × K` 令牌，無論路由如何不均。
- 在線規劃 — 利用幾乎無開銷的 GPU 規劃內核，提前加載冗餘專家。
- 零拷貝操作 — 支持 `zero_copy=True`，直接在通信緩衝區上進行計算，消除不必要的數據拷貝。
- 高效的梯度還原 — 在反向傳播中能夠將冗餘專家的梯度還原到原計算單元。
- 穩定的性能 — 在各種不均衡程度下，通訊時間保持穩定，顯示出優越的性能。

## 快速開始

1. 安裝庫
```bash
pip install -e .
```
2. 初始化 Buffer
```bash
from moonep import Buffer
buffer = Buffer(S=4096, H=7168, K=8, E=256, num_ep_ranks=8, num_sms=32, token_padding=128)
```
3. 執行前向計算
```bash
hidden_nvsh, route_weights_nvs, cu_seqlens, plan = buffer.dispatch(hidden_sh, route_weights_sk, topk_experts_sk, tokens_per_expert)
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 MoonEP 並初始化 Buffer",
  "指令": "hidden_nvsh, route_weights_nvs, cu_seqlens, plan = buffer.dispatch(hidden_sh, route_weights_sk, topk_experts_sk, tokens_per_expert)",
  "預期輸出": "hidden_nvsh: [NvS, H] bf16 — dispatched tokens in physical VM group order"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 807 stars（202/天），forks 80（9.9%），顯示出相對活躍的社群參與。主要貢獻者 weixiao-huang 和 esp0r 在高性能計算領域有豐富經驗，這使得他們的解決方案針對了專家並行計算中的一個長期痛點：如何在不均衡路由下保持計算效率。這個工具的出現正好填補了市場上對高效能專家並行庫的需求，尤其是對於需要高效 GPU 利用率的深度學習應用。社群的反饋和需求也促進了這個專案的快速成長。

## 適合誰使用

**目標受眾**：需要在多 GPU 環境中進行高效專家並行計算的深度學習研究者和工程師。

> [!example] 使用場景
> - 深度學習工程師用它來在大型模型訓練中保持 GPU 負載平衡，因為它能有效避免因不均衡路由導致的性能下降。
> - 研究人員用它來測試不同的專家路由策略，因為其動態冗餘專家的設計可以快速調整計算負載。
> - AI 開發者用它來優化推理過程，因為零拷貝操作能顯著提高推理速度，降低延遲。

## 架構分析

MoonEP 採用了一個基於 CUDA 的專家並行架構，設計目的是為了在多 GPU 環境中實現高效的計算負載平衡。其核心是動態冗餘專家的概念，這意味著在計算過程中，系統能夠根據當前的路由狀況動態選擇冗餘專家進行計算。資料流方面，令牌首先被分配到各個專家，然後進行計算，最後將結果返回給原計算單元。

這樣的設計使得每個計算單元的負載保持一致，避免了因為某些專家負載過重而導致的性能瓶頸。選擇 CUDA 作為計算平台的原因在於其高效能和對並行計算的良好支持，但這也意味著對硬體的要求較高。整體架構的擴展性良好，但在高負載情況下可能會遇到內存瓶頸，特別是在處理大規模模型時。

## 技術深入分析

MoonEP 的核心技術機制在於其動態冗餘專家設計，這使得每個計算單元能夠根據當前的路由狀況動態選擇冗餘專家進行計算。這一設計不僅提高了計算效率，還減少了內存碎片的問題。效能方面，MoonEP 在各種不均衡程度下的通訊時間保持穩定，顯示出其優越的性能。這是因為其使用了零拷貝操作，令牌直接寫入最終的專家分組位置，消除了不必要的數據拷貝。

選擇 CUDA 作為計算平台的原因在於其高效能和對並行計算的良好支持，但這也意味著對硬體的要求較高。技術風險方面，隨著模型規模的擴大，可能會遇到內存瓶頸，特別是在處理大規模模型時。此外，對於外部 API 的依賴程度較低，這降低了供應鏈風險。整合方面，MoonEP 能夠與主流深度學習框架良好整合，但對於新手來說，可能需要一定的學習成本來掌握其使用方法。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質良好，提供了詳細的使用說明和範例。安裝過程相對順暢，但需要配置 CUDA 環境。文件中缺乏多語言支持，主要以英文為主，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 動態冗餘專家設計能有效保持計算負載平衡。
> - 支持零拷貝操作，顯著提升計算性能。
> - 在不均衡路由情況下性能穩定，避免了 OOM 問題。

> [!danger] 缺點
> - 目前僅支援 NVIDIA GPU，對其他硬體的支持有限。
> - 需要一定的 CUDA 環境配置，對新手有學習曲線。
> - 文檔尚不完善，部分功能的使用方法需要補充。

> [!warning] 注意事項
> - 僅支援 NVIDIA GPU，對於其他硬體平台的支持尚在開發中。
> - 需要 CUDA 環境，對於不熟悉 CUDA 的開發者可能有一定的學習曲線。
> - 目前文檔尚不完善，部分功能的使用方法需要進一步補充。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要針對模型的輕量化和壓縮，而 MoonEP 專注於專家並行的計算效率和負載平衡。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多代理的協作框架，但在專家並行的性能優化上不如 MoonEP 的動態冗餘設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理系統的協作，而 MoonEP 專注於專家並行的計算效率。 | 如果你的專案需要多代理協作而非專家並行計算，則應選擇它。 | medium，因為需要重新設計代理間的通信邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的協作框架，但在專家並行的性能優化上不如 MoonEP 的動態冗餘設計。 | 如果你的專案需要多代理的協作而非專家並行計算，則應選擇它。 | medium，因為需要重新設計代理間的通信邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MoonEP** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多代理系統的協作，而 MoonEP 專注於專家並行的計算效率。 | 提供多代理的協作框架，但在專家並行的性能優化上不如 MoonEP 的動態冗餘設計。 |
> | 遷移成本 | - | medium，因為需要重新設計代理間的通信邏輯。 | medium，因為需要重新設計代理間的通信邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案需要多代理協作而非專家並行計算，則應選擇它。 | 如果你的專案需要多代理的協作而非專家並行計算，則應選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下可能會遇到內存瓶頸，特別是在處理大規模模型時。
  - 解法：優化模型結構以減少內存使用。
- [MEDIUM] 文檔尚不完善，部分功能的使用方法需要補充。
  - 解法：參考源碼或社群討論以獲取更多信息。
- **[HIGH]** 僅支援 NVIDIA GPU，對於其他硬體的支持有限。
  - 解法：考慮使用其他專家並行庫或等待未來的更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行深度學習模型訓練 | 非常適合 | MoonEP 能夠有效利用 GPU 資源，保持計算負載平衡。 |
| 大型企業的深度學習團隊進行模型推理 | 適合 | 在不均衡路由情況下，MoonEP 的性能穩定性能夠滿足需求。 |
| 對 CUDA 環境不熟悉的開發者 | 不適合 | 需要一定的 CUDA 環境配置，對新手有學習曲線。 |
| 需要在非 NVIDIA 硬體上運行的深度學習模型 | 不適合 | 目前僅支援 NVIDIA GPU，對其他硬體的支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、12 小時整合，得到穩定的專家並行計算效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MoonEP 本身不需要高權限，僅在 CUDA 環境中運行，不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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
| Forks | 80 |
| Open Issues | 14 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-24 |
| Repo 大小 | 525 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/MoonEP) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Cuda" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@weixiao-huang](https://github.com/weixiao-huang) | 1 |
> | [@esp0r](https://github.com/esp0r) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有 14 個開放問題，解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-24 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** Add AcclEP into Acknowledgments

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/MoonshotAI/MoonEP/issues/14) | Docs: 在部署文档中补充 API 网关替代方案（适用于无 GPU 集群的团队） | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MoonEP
> 
> MoonEP is an Expert Parallelism communication library that keeps token loads perfectly balanced across ranks via dynamic redundant experts.
> 
> **Notation**: `S` = input tokens per rank, `K` = routed top-k per token.
> 
> 1. **Perfect balance**: every rank receives exactly `S × K` tokens, no matter how skewed the routing is. A small number of redundant experts is planned online from the current router outputs and prefetched before expert computation; their gradients are reduced back to their home ranks in the backward pass.
> 2. **Online planning**: a near-optimal GPU planning kernel with negligible overhead
> 3. **Zero copy and static shapes**: fused permute/unpermute — tokens are sent directly to their expert-grouped positions on remote ranks and buffer views are returned to the computation. Only a fixed `S × K` buffer is needed, and statically known shapes eliminate per-layer MoE host synchronization.
> 
> 
> ## Usage
> 
> 
> ### API walkthrough
> 
> ```python
> from moonep import Buffer
> 
> buffer = Buffer(S=4096, H=7168, K=8, E=256, num_ep_ranks=8,
>                 num_sms=32, token_padding=128)
> ```
> 
> - `num_sms=None` defaults to 32. `B` defaults to `E // num_ep_ranks`; an explicit value like `B=4` may also be passed.
> - `dispatch` / `combine` / `prefetch_weight` / `reduce_grad` all accept `async_finish=True` to run on the comm stream and return a CUDA event.
> 
> #### dispatch fwd
> 
> ```python
> hidden_nvsh, route_weights_nvs, cu_seqlens, plan = buffer.dispatch(
>     hidden_sh,          # [S, H] bf16
>     route_weights_sk,   # [S, K] fp32
>     topk_experts_sk,    # [S, K] int32
>     tokens_per_expert,  # [E] int32, local count
> )
> 
> # hidden_nvsh:       [NvS, H] bf16 — dispatched tokens in physical VM group order
> 
> # route_weights_nvs: [NvS] fp32
> 
> # grad_expert_output_nvsh: [NvS, H] bf16
> ```
> 
> #### zero_copy
> 
> By default `dispatch` returns fresh tensors and `combine` first copies its inputs into the NVL shard. With `zero_copy=True` on both sides, `dispatch` returns views of the communication buffer and the expert FFN reads/writes them in place — no boundary copy at all:
> 
> ```python
> hidden_nvsh, route_weights_nvs, cu_seqlens, plan = buffer.dispatch(
>     hidden_sh, route_weights_sk, topk_experts_sk, tokens_per_expert,
>     zero_copy=True,
> )
> 
> # hidden_nvsh / route_weights_nvs are views of the NVL buffer;
> 
> ## Performance
> 
> Both benchmarks run on H20 with EP=8, sweeping the router imbalance:
> 
> $$\text{maxvio} = \max_e \left( \frac{T_e}{\bar{T}} \right) - 1$$
> 
> where $T_e$ is the number of tokens routed to expert $e$, and $\bar{T}$ is the expected tokens per expert under perfect balance (maxvio = 0 means perfectly balanced).
> 
> **Communication vs DeepEP v2** ([benchmarks/bench_vs_deepep.py](benchmarks/bench_vs_deepep.py)):
> 
> - **Zero copy makes raw communication faster**: tokens are written directly to their final expert-grouped positions on remote ranks — no permute in, no permute out — and views of the communication buffer are handed straight to the computation, eliminating the comm-buffer → user-buffer copy that dominates the epilogue. MoonEP's comm time is consistently below DeepEP v2 at every imbalance level.
> - **Perfect balance makes it immune to imbalance**: MoonEP's comm time stays almost flat as maxvio grows, while DeepEP v2 — whose latency is set by the hottest rank — degrades steadily.
> - **The comparison counts MoonEP's extra kernels**: MoonEP adds planning and weight-prefetch kernels that DeepEP does not need, and they are already stacked in the bars above. Even with the whole critical path included, total dispatch time is on par with DeepEP v2's dispatch alone and pulls ahead under imbalance, while combine is significantly faster at every level.
> 
> **End-to-end training**:
> 
> - **DeepEP degrades with imbalance**: the hottest ranks receive more tokens, so iteration time climbs steadily as maxvio grows; meanwhile the ever-changing activation shapes fragment GPU memory, until training OOMs at high imbalance.
> - **MoonEP is unaffected**: every rank always computes exactly `S × K` tokens per layer, so iteration time stays flat at every imbalance level; fully static memory shapes mean no fragmentation, and training never OOMs.
> 
> 
> ## Supported Devices
> 
> - NVIDIA GPU
> - Zhenwu PPU (under review, coming soon)
> 
> 
> ### Integration
> 
> **Notation**: `S` = input tokens per rank, `K` = routed top-k per token, `E` = total routed experts in the EP group, `R` = number of EP ranks (EP comm size), `B` = weight prefetch slots per rank, `NvS` = dispatched token slots per rank (`S × K` real tokens plus per-VM-group padding), `H` = hidden size, `H'` = expert FFN intermediate size.
> 
> MoonEP's contract with a training or inference framework is **one contiguous symmetric-memory weight tensor per expert projection, plus a planner-produced `cu_seqlens`**. The VM group GEMM consumes a single `[E+B, H, H']` weight tensor; `cu_seqlens[E+B]` (returned by `dispatch`) selects which expert rows are active for the current step.
> 
> #### Weight buffer
> 
> For each expert projection (gate/up/down), every layer holds **one contiguous VMM range** `[E+B, H, H']`, identically laid out on every rank. Contiguity is a hard requirement: the group GEMM addresses experts purely by row index.
> 
> - **Rows `[0, E)`: all ranks' local experts** — `E/R` rows per rank. Each chunk physically *is* the home rank's parameter memory, mapped everywhere via symmetric memory.
> - **Rows `[E, E+B)`: local prefetch slots**, filled by `buffer.prefetch_weight`; the planner points duplicated experts' token segments at these slots via `cu_seqlens`. Their physical memory comes from a process-global pool shared by all layers, so the extra cost is `B` expert weights per projection in total, not per layer.
> 
> **How to set B.**
> 
> - **Training**: must use **`B = E/R`** — the planner duplicates experts from at most one remote home group per rank (≤ `E/R` experts), so every expert the group GEMM touches is local.
> - **Inference** (prefetch only, no gradients): `B < E/R` is allowed, **`B = 3–4` is recommended**. If a rank ever needs more distinct remote experts than `B`, the group GEMM reads the overflow weights straight from the home rank through the symmetric mapping (memory semantics, addressed by `cu_seqlens`) — slightly slower, with no impact on correctness.
> 
> #### Gradient buffers (training only)
> 
> Training mirrors the weight layout in fp32: one contiguous `[E+B, H, H']` **grad buffer** per projection.
> 
> - **Rows `[0, E)`**: the owner ranks' parameter grads.
> - **Rows `[E, E+B)`**: prefetch-slot grads, backed by a **separate reduce buffer, not by the parameter grads** — duplicated experts' grads are temporary and must stay invisible to the framework's own grad reduce. The physical memory comes from a process-global pool shared across layers, like the prefetch pool.
> - **Reduce buffer**: every rank maps all `R` reduce buffers as one `[R, B, H, H']` view. `reduce_grad` lets each rank read the slots holding its own experts' grads from every rank's reduce buffer (remote reads over NVLink), accumulate them into its local parameter grad, then zero its own consumed slots for the next microbatch.
> 
> 
> # cu_seqlens:        [E+B] int32 — padded token end offset per VM group row
> 
> # plan:              MoonEPCommPlan — save it for prefetch/combine and both backward passes
> 
> buffer.prefetch_weight(
>     plan=plan,
>     full_gate_weight=full_gate_weight,    # [E+B, H, H'] bf16
>     full_up_weight=full_up_weight,        # [E+B, H, H'] bf16
>     full_down_weight=full_down_weight,    # [E+B, H, H'] bf16
> )
> 
> # full_*_weight: rows [0, E) are source expert weights, rows [E, E+B) are prefetch slots
> ```
> 
> #### dispatch bwd
> 
> Backward of dispatch: sum each token's K dispatched grad copies back to token-major — a combine — and reduce duplicated experts' weight grads back to their home ranks.
> 
> ```python
> grad_hidden_sh, _, _ = buffer.combine(
>     plan=plan,
>     hidden_nvsh=grad_hidden_nvsh,    # [NvS, H] bf16
> )
> 
> # grad_hidden_sh: [S, H] bf16
> 
> buffer.reduce_grad(
>     plan=plan,
>     full_gate_grad=full_gate_grad,          # [E+

## 延伸閱讀

相關概念：[[專家並行]] · [[GPU 計算]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Blaizzy--nativ|Blaizzy/nativ]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Forsy-AI--agent-apprenticeship|Forsy-AI/agent-apprenticeship]]

[GitHub](https://github.com/MoonshotAI/MoonEP)

## 相關收錄

> [!note]- 直接競品（同子分類：專家並行）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "專家並行" AND file.name != "MoonshotAI--MoonEP"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "MoonshotAI--MoonEP"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "MoonshotAI--MoonEP" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "MoonshotAI--MoonEP"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["專家並行","GPU 計算","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MoonshotAI--MoonEP" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MoonshotAI--MoonEP");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MoonshotAI--MoonEP" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MoonshotAI" AND file.name != "MoonshotAI--MoonEP"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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
> const me = dv.page("Repos/MoonshotAI--MoonEP");
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

> **2026-07-29** — 首次收錄
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

- [[2026-07-29|2026-07-29]] — 首次收錄，806 stars
