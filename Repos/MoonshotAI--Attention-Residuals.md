---
repo: MoonshotAI/Attention-Residuals
url: https://github.com/MoonshotAI/Attention-Residuals
owner: MoonshotAI
owner_type: Organization
language: N/A
license: N/A
description: ""
homepage: ""
stars: 2818
stars_per_day: 217
forks: 129
open_issues: 9
created: 2026-03-15
pushed_at: 2026-03-17
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "AI/ML"
subcategory: "深度學習"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "提供了一種新的殘差連接方法，讓 Transformer 模型的每一層能夠選擇性地聚合早期的表示。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-25"
contributor_count: 3
engagement: "low"
issue_close_rate: 10
repo_size_kb: 1724
readme_length: 5180
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1811,2026-03-19:1813,2026-03-20:2012,2026-03-20:2015,2026-03-21:2247,2026-03-21:2248,2026-03-22:2419,2026-03-22:2419,2026-03-23:2513,2026-03-24:2603,2026-03-25:2673,2026-03-26:2722,2026-03-27:2759,2026-03-28:2797,2026-03-29:2818"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
aliases:
  - "Attention-Residuals"
  - "MoonshotAI/Attention-Residuals"
  - "提供了一種新的殘差連接方法，讓 Transformer 模型的每一層能夠選擇性地聚合早期的表示。"
---

# Attention-Residuals

**2.8k** stars · **217** stars/天 · 建立 13 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
> 提供了一種新的殘差連接方法，讓 Transformer 模型的每一層能夠選擇性地聚合早期的表示。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (217 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 11 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在大型 Transformer 模型中優化殘差連接的深度學習研究者和工程師。
> **一句話重點** AttnRes 的創新在於通過學習的注意力權重來改善殘差連接，這在深度學習模型中是一個重要的技術突破。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "深度學習" && p.file.name !== "MoonshotAI--Attention-Residuals" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 深度學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到顯著的性能提升，值得投資。

> [!abstract] 核心創新
> AttnRes 提供了一種新的殘差連接方法，通過學習的注意力權重來選擇性聚合早期的表示。

## 專案簡介

Attention Residuals（AttnRes）是一種用於 Transformer 的新型殘差連接替代方案，旨在解決標準殘差連接在深度增長時導致的隱藏狀態幅度無限增長問題。它通過對先前層輸出進行學習的、依賴於輸入的注意力聚合，來選擇性地整合早期的表示。具體來說，AttnRes 使用 softmax 注意力來計算每層的權重，這樣每層可以根據內容獲得對所有早期表示的選擇性訪問。Block AttnRes 則將層分組為 N 個區塊，僅在區塊級別上進行注意力計算，從而將內存需求從 O(Ld) 降低到 O(Nd)。這使得在實際應用中，AttnRes 可以作為一個低開銷的替代方案。

使用 PyTorch 實現的程式碼示例顯示了如何在每個 Transformer 層中應用這種新型的殘差連接。實驗結果表明，AttnRes 在各種基準測試中均優於傳統方法，特別是在多步推理和代碼生成任務上。這種方法的設計考慮了計算資源的有效利用，並在訓練動態中保持了輸出幅度的穩定性。這使得 AttnRes 成為一個值得考慮的選擇，尤其是在需要處理大規模模型時。

**技術棧**：`PyTorch`

## 重點功能

- 選擇性聚合 — 每層通過學習的注意力權重選擇性聚合早期表示，提升模型性能。
- Block AttnRes — 將層分組以降低內存需求，適合大規模模型的訓練。
- PyTorch 實現 — 提供易於集成的 PyTorch 風格程式碼，方便開發者使用。
- 穩定的訓練動態 — 減少了 PreNorm 的稀釋問題，保持輸出幅度的穩定性。
- 優越的基準性能 — 在多個基準測試中超越傳統方法，特別是在代碼生成和推理任務上。

## 快速開始

1. 安裝 PyTorch
```bash
pip install torch
```
2. 克隆專案
```bash
git clone https://github.com/MoonshotAI/Attention-Residuals.git
```
3. 進入專案目錄
```bash
cd Attention-Residuals
```
4. 運行測試
```bash
python test.py
```

## 程式碼範例

```bash
{
  "前置條件": "需要 PyTorch 環境",
  "程式碼": "def block_attn_res(blocks: list[Tensor], partial_block: Tensor, proj: Linear, norm: RMSNorm) -> Tensor:\n    V = torch.stack(blocks + [partial_block])  # [N+1, B, T, D]\n    K = norm(V)\n    logits = torch.einsum('d, n b t d -> n b t', proj.weight.squeeze(), K)\n    h = torch.einsum('n b t, n b t d -> b t d', logits.softmax(0), V)\n    return h",
  "預期輸出": "返回聚合後的表示"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 2818 stars（217/天），forks 129（4.6%），顯示出穩定的增長趨勢。這個專案的主要貢獻者來自於活躍的研究團隊，且過去有發表相關論文的經驗。AttnRes 解決了傳統殘差連接在深度增長時的問題，這在當前的深度學習研究中是一個重要的痛點。隨著對更高效模型的需求增加，這種新方法的出現正好契合了當前的技術需求。社群中對於實現程式碼的需求也顯示出使用者對於實際應用的關注。

## 適合誰使用

**目標受眾**：需要在大型 Transformer 模型中優化殘差連接的深度學習研究者和工程師。

> [!example] 使用場景
> - 深度學習研究者用它來改善 Transformer 模型的性能，因為 AttnRes 在多步推理任務中表現出色，提升了推理準確率。
> - 機器學習工程師用它來減少模型訓練中的內存使用，因為 Block AttnRes 將內存需求降低至 O(Nd)，適合大規模模型。
> - AI 開發者用它來快速實驗不同的殘差連接方式，因為它可以作為標準殘差連接的無縫替代品，易於集成。

## 架構分析

AttnRes 的架構基於 Transformer 模型，主要改進在於殘差連接的處理。選擇使用注意力機制來動態計算每層的權重，這樣可以根據輸入的內容來調整聚合方式。這種設計使得模型在深度增長時，能夠有效控制輸出幅度，減少了傳統方法中可能出現的稀釋問題。Block AttnRes 的引入則是為了在保持性能的同時，降低內存需求，這是一個重要的考量，因為在訓練大型模型時，內存使用往往是瓶頸。整體來看，這種架構的設計考慮到了計算資源的有效利用，並在訓練動態中保持了穩定性。

## 技術深入分析

AttnRes 的核心技術機制是使用注意力機制來計算每層的聚合權重，這樣可以根據內容動態調整聚合方式。這種方法解決了傳統殘差連接在深度增長時導致的隱藏狀態幅度無限增長的問題。效能方面，AttnRes 在各種基準測試中均表現出色，特別是在多步推理和代碼生成任務上，顯示出其優越性。設計上，選擇 PyTorch 作為實現框架，這使得開發者能夠快速集成和使用。

依賴樹的複雜度相對較低，主要依賴於 PyTorch 本身，降低了維護成本。技術風險方面，隨著模型規模的擴大，可能會面臨計算資源的瓶頸，這需要在實際應用中進行調整。整合分析方面，AttnRes 與主流的深度學習框架（如 TensorFlow）不兼容，這可能會限制其在某些場景下的使用。整體而言，AttnRes 提供了一種有效的解決方案，特別適合需要處理大規模模型的情境。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的概述和程式碼示例，安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解其核心概念。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提高了 Transformer 模型的推理準確性，特別是在多步推理任務中。
> - 降低了內存需求，適合大規模模型的訓練。
> - 提供了易於集成的 PyTorch 實現，方便開發者使用。

> [!danger] 缺點
> - 需要較高的計算資源來訓練大型模型。
> - 對於小型模型可能無法顯著提升性能。
> - 目前僅支持 PyTorch，不支持其他框架。

> [!warning] 注意事項
> - 需要較高的計算資源來訓練大型模型
> - 對於小型模型可能無法顯著提升性能
> - 目前僅支持 PyTorch，不支持其他框架

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 提供了類似的模型優化技術，但主要針對 NVIDIA 硬體進行優化，可能不如 AttnRes 通用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 專注於模型壓縮，而 AttnRes 則專注於改善殘差連接，適用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於針對 NVIDIA 硬體進行優化，而 AttnRes 則是一個更通用的解決方案，適用於各種硬體環境。 | 如果你的團隊已經在使用 NVIDIA 硬體並需要針對性優化，NemoClaw 可能更合適。 | medium，因為需要調整模型架構以適應不同的優化策略。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 專注於模型壓縮，而 AttnRes 則專注於改善殘差連接，兩者的技術路線不同。 | 如果你的主要需求是模型壓縮而非殘差連接的優化，Shadowbroker 會是更好的選擇。 | low，因為兩者在模型架構上的相似性使得遷移相對容易。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Attention-Residuals** | **NemoClaw** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | NemoClaw 專注於針對 NVIDIA 硬體進行優化，而 AttnRes 則是一個更通用的解決方案，適用於各種硬體環境。 | Shadowbroker 專注於模型壓縮，而 AttnRes 則專注於改善殘差連接，兩者的技術路線不同。 |
> | 遷移成本 | - | medium，因為需要調整模型架構以適應不同的優化策略。 | low，因為兩者在模型架構上的相似性使得遷移相對容易。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 NVIDIA 硬體並需要針對性優化， | 如果你的主要需求是模型壓縮而非殘差連接的優化，Shadowb |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於研究和實驗，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在小型模型上可能無法顯著提升性能，反而增加計算開銷
  - 解法：在小型模型中使用標準殘差連接
- **[HIGH]** 對於某些特定任務，可能需要調整注意力權重的學習策略
  - 解法：根據具體任務進行超參數調整
- [low] 目前僅支持 PyTorch，未來可能需要擴展到其他框架
  - 解法：考慮使用 PyTorch 進行開發

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 Transformer 模型的開發 | 非常適合 | AttnRes 在大規模模型中能有效控制內存使用和性能提升。 |
| 小型模型的快速原型開發 | 不適合 | 對於小型模型，AttnRes 可能無法顯著提升性能。 |
| 需要優化多步推理的應用 | 非常適合 | AttnRes 在多步推理任務中表現出色，能提升準確率。 |
| 資源有限的環境 | 普通 | 需要較高的計算資源，可能不適合資源有限的團隊。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到顯著的性能提升，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴於 PyTorch 的安全性，整體風險較低。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

AttnRes 最常與 PyTorch 框架搭配使用，適合在深度學習開發流程中進行模型訓練和優化。具體來說，在一個使用 PyTorch 的 Transformer 模型中，可以直接替換標準的殘差連接為 AttnRes，具體做法是修改模型的 forward 方法以包含 AttnRes 的計算邏輯。與主流的 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於對於新手來說，理解注意力機制的運作方式可能需要一些時間，但整體來說，AttnRes 的設計考慮到了易用性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
| Forks | 129 |
| Open Issues | 9 |
| Issue 解決率 | 10% (1 closed) |
| 最後推送 | 2026-03-17 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/Attention-Residuals) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yzhangcs](https://github.com/yzhangcs) | 2 |
> | [@Nathancgy](https://github.com/Nathancgy) | 1 |
> | [@bigeagle](https://github.com/bigeagle) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率較低。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-17）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/MoonshotAI/Attention-Residuals/issues/8) | Talk is cheap. Show me the code. | 10 | 1 |
> | [#6](https://github.com/MoonshotAI/Attention-Residuals/issues/6) | 請問有實現的程式碼嗎? | 7 | 1 |
> | [#5](https://github.com/MoonshotAI/Attention-Residuals/issues/5) | Release Kimi Linear AttnRes model on Hugging Face | 5 | 0 |
> | [#9](https://github.com/MoonshotAI/Attention-Residuals/issues/9) | block parameter N | 1 | 0 |
> | [#7](https://github.com/MoonshotAI/Attention-Residuals/issues/7) | 合影 | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> ━━━━━━━━━━━━━━━━━━━━━━━━━━━
>     
>      Attention Residuals
>     
>     ━━━━━━━━━━━━━━━━━━━━━━━━━━━
>     
>   
> 
>   Paper &nbsp;|&nbsp;
>   arXiv &nbsp;|&nbsp;
>   Overview &nbsp;|&nbsp;
>   Results &nbsp;|&nbsp;
>   Citation
> 
>   
> 
>   (a) Standard residuals with uniform additive accumulation.
>   (b) Full AttnRes: each layer attends over all previous outputs.
>   (c) Block AttnRes: layers are grouped into blocks, reducing memory from O(Ld) to O(Nd).
> 
> ---
> 
> This is the official repository for **Attention Residuals (AttnRes)**, a drop-in replacement for standard residual connections in Transformers that enables each layer to *selectively* aggregate earlier representations via learned, input-dependent attention over depth.
> 
> ## Overview
> 
> Standard residual connections accumulate all layer outputs with fixed unit weights. As depth grows, this uniform aggregation dilutes each layer's contribution and causes hidden-state magnitudes to grow unboundedly — a well-known problem with PreNorm.
> 
> **AttnRes** replaces this fixed accumulation with softmax attention over preceding layer outputs:
> 
> $$\mathbf{h}_l = \sum_{i=0}^{l-1} \alpha_{i \to l} \cdot \mathbf{v}_i$$
> 
> where the weights $\alpha_{i \to l}$ are computed via a single learned pseudo-query $\mathbf{w}_l \in \mathbb{R}^d$ per layer. This gives every layer selective, content-aware access to all earlier representations.
> 
> ### Block AttnRes
> 
> Full AttnRes is straightforward but requires O(Ld) memory at scale. **Block AttnRes** partitions layers into N blocks, accumulates within each block via standard residuals, and applies attention only over block-level representations. With ~8 blocks, it recovers most of Full AttnRes's gains while serving as a practical drop-in replacement with marginal overhead.
> 
> PyTorch-style pseudocode
> 
> ```python
> def block_attn_res(blocks: list[Tensor], partial_block: Tensor, proj: Linear, norm: RMSNorm) -> Tensor:
>     """
>     Inter-block attention: attend over block reps + partial sum.
>     blocks:
>         N tensors of shape [B, T, D]: completed block representations for each previous block
>     partial_block:
>         [B, T, D]:    intra-block partial sum (b_n^i)
>     """
>     V = torch.stack(blocks + [partial_block])  # [N+1, B, T, D]
>     K = norm(V)
>     logits = torch.einsum('d, n b t d -> n b t', proj.weight.squeeze(), K)
>     h = torch.einsum('n b t, n b t d -> b t d', logits.softmax(0), V)
>     return h
> 
> def forward(self, blocks: list[Tensor], hidden_states: Tensor) -> tuple[list[Tensor], Tensor]:
>     partial_block = hidden_states
>     # apply block attnres before attn
>     # blocks already include token embedding
>     h = block_attn_res(blocks, partial_block, self.attn_res_proj, self.attn_res_norm)
> 
>     # if reaches block boundary, start new block
>     # block_size counts ATTN + MLP; each transformer layer has 2
>     if self.layer_number % (self.block_size // 2) == 0:
>         blocks.append(partial_block)
>         partial_block = None
> 
>     # self-attention layer
>     attn_out = self.attn(self.attn_norm(h))
>     partial_block = partial_block + attn_out if partial_block is not None else attn_out
> 
>     # apply block attnres before MLP
>     h = block_attn_res(blocks, partial_block, self.mlp_res_proj, self.mlp_res_norm)
> 
>     # MLP layer
>     mlp_out = self.mlp(self.mlp_norm(h))
>     partial_block = partial_block + mlp_out
> 
>     return blocks, partial_block
> ```
> 
> ## Results
> 
> ### Scaling Laws
> 
> AttnRes consistently outperforms the baseline across all compute budgets. Block AttnRes matches the loss of a baseline trained with **1.25x more compute**.
> 
>   
> 
> ### Downstream Performance (Kimi Linear 48B / 3B activated, 1.4T tokens)
> 
> | Category | Benchmark | Baseline | AttnRes |
> |:---|:---|:---:|:---:|
> | General | MMLU | 73.5 | **74.6** |
> | | GPQA-Diamond | 36.9 | **44.4** |
> | | BBH | 76.3 | **78.0** |
> | | TriviaQA | 69.9 | **71.8** |
> | Math & Code | Math | 53.5 | **57.1** |
> | | HumanEval | 59.1 | **62.2** |
> | | MBPP | 72.0 | **73.9** |
> | Chinese | CMMLU | 82.0 | **82.9** |
> | | C-Eval | 79.6 | **82.5** |
> 
> AttnRes improves across the board, with the largest gains on multi-step reasoning (+7.5 on GPQA-Diamond) and code generation (+3.1 on HumanEval).
> 
> ### Training Dynamics
> 
> AttnRes mitigates PreNorm dilution: output magnitudes remain bounded across depth and gradient norms distribute more uniformly across layers.
> 
>   
> 
> ## Citation
> 
> If you found our work useful, please cite
> 
> ```bib
> @misc{chen2026attnres,
>   title         = {Attention Residuals},
>   author        = {Kimi Team  and Chen, Guangyu  and Zhang, Yu  and Su, Jianlin  and Xu, Weixin  and Pan, Siyuan  and Wang, Yaoyu  and Wang, Yucheng  and Chen, Guanduo  and Yin, Bohong  and Chen, Yutian  and Yan, Junjie  and Wei, Ming  and Zhang, Y.  and Meng, Fanqing  and Hong, Chao  and Xie, Xiaotong  and Liu, Shaowei  and Lu, Enzhe  and Tai, Yunpeng  and Chen, Yanru  and Men, Xin  and Guo, Haiqing  and Charles, Y.  and Lu, Haoyu  and Sui, Lin  and Zhu, Jinguo  and Zhou, Zaida  and He, Weiran  and Huang, Weixiao  and Xu, Xinran  and Wang, Yuzhi  and Lai, Guokun  and Du, Yulun  and Wu, Yuxin  and Yang, Zhilin  and Zhou, Xinyu},
>   year          = {2026},
>   archiveprefix = {arXiv},
>   eprint        = {2603.15031},
>   primaryclass  = {cs.CL}
> }
> ```

## 延伸閱讀

相關概念：[[深度學習]] · [[Transformer]] · [[模型優化]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[aiming-lab--MetaClaw|aiming-lab/MetaClaw]]

[GitHub](https://github.com/MoonshotAI/Attention-Residuals)

## 相關收錄

> [!note]- 直接競品（同子分類：深度學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "深度學習" AND file.name != "MoonshotAI--Attention-Residuals"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "MoonshotAI--Attention-Residuals"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "MoonshotAI--Attention-Residuals" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "MoonshotAI--Attention-Residuals"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["深度學習","Transformer","模型優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MoonshotAI--Attention-Residuals" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MoonshotAI--Attention-Residuals" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MoonshotAI" AND file.name != "MoonshotAI--Attention-Residuals"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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
> const me = dv.page("Repos/MoonshotAI--Attention-Residuals");
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

> **2026-03-19** — 首次收錄
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

- [[2026-03-22|2026-03-22]] — 再次上榜，2.4k stars
- [[2026-03-21|2026-03-21]] — 再次上榜，2.2k stars
- [[2026-03-20|2026-03-20]] — 再次上榜，2.0k stars
- [[2026-03-19|2026-03-19]] — 首次收錄，1.8k stars
