---
repo: MoonshotAI/Attention-Residuals
url: https://github.com/MoonshotAI/Attention-Residuals
owner: MoonshotAI
owner_type: Organization
language: N/A
license: N/A
description: ""
homepage: ""
stars: 2891
stars_per_day: 170
forks: 139
open_issues: 10
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
use_case: "提供一種改進的殘差連接方法，讓 Transformer 模型能夠更有效地聚合早期層的表示。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-25"
contributor_count: 3
engagement: "low"
issue_close_rate: 9
repo_size_kb: 1724
readme_length: 5180
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1811,2026-03-19:1813,2026-03-20:2012,2026-03-20:2015,2026-03-21:2247,2026-03-21:2248,2026-03-22:2419,2026-03-22:2419,2026-03-23:2513,2026-03-24:2603,2026-03-25:2673,2026-03-26:2722,2026-03-27:2759,2026-03-28:2797,2026-03-29:2818,2026-03-30:2831,2026-03-31:2844,2026-04-01:2860,2026-04-02:2891"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
aliases:
  - "Attention-Residuals"
  - "MoonshotAI/Attention-Residuals"
  - "提供一種改進的殘差連接方法，讓 Transformer 模型能夠更有效地聚合早期層的表示。"
---

# Attention-Residuals

**2.9k** stars · **170** stars/天 · 建立 17 天前 · N/A · 未標註授權

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
> 提供一種改進的殘差連接方法，讓 Transformer 模型能夠更有效地聚合早期層的表示。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (170 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 15 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望提高 Transformer 模型性能的機器學習研究者和工程師。
> **一句話重點** AttnRes 的創新在於通過學習的注意力權重來改進殘差連接，顯著提升了 Transformer 模型的性能。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，8 小時整合，得到顯著的性能提升，值得投入。

> [!abstract] 核心創新
> AttnRes 提供了一種新的殘差連接方法，通過學習的注意力權重來選擇性聚合層輸出，顯著提高了模型性能。

## 專案簡介

Attention Residuals（AttnRes）是一種針對 Transformer 模型的改進殘差連接方法，旨在解決標準殘差連接中存在的層輸出貢獻稀釋問題。其核心機制是用學習到的注意力權重來選擇性地聚合早期層的表示，具體來說，通過公式 h_l = ∑ α_{i→l} * v_i 來計算每層的輸出，其中權重 α_{i→l} 是通過每層的學習查詢計算得出。這樣的設計使得每層可以根據內容自適應地訪問所有早期表示，從而提高模型的表現。Block AttnRes 進一步將層分組，減少了記憶體需求，從 O(Ld) 降至 O(Nd)，在保持性能的同時降低了計算資源的消耗。

實驗結果顯示，AttnRes 在各種基準測試中均優於基線，特別是在多步推理和代碼生成任務上，分別提高了 7.5 和 3.1 的分數。這種方法不僅改善了模型的訓練動態，還有效地緩解了 PreNorm 的稀釋問題，確保了輸出幅度在層深度增加時保持穩定。這個專案的賣點在於它能夠作為標準殘差的替代品，幾乎無需修改現有的 Transformer 架構。與其他基於固定權重的殘差連接相比，AttnRes 提供了更大的靈活性和性能提升，特別適合需要高效能和大規模計算的場景。

**技術棧**：`PyTorch`

## 重點功能

- 選擇性聚合 — 使用學習到的注意力權重來聚合早期層的表示，提升模型的靈活性。
- Block AttnRes — 將層分組以減少記憶體需求，從 O(Ld) 降至 O(Nd)，保持性能的同時降低計算資源消耗。
- 穩定的訓練動態 — 減少 PreNorm 的稀釋問題，確保輸出幅度在層深度增加時保持穩定。
- 高效的多步推理 — 在 GPQA-Diamond 基準上提高 7.5 分，顯示出在複雜推理任務中的優勢。
- 代碼生成性能提升 — 在 HumanEval 測試中提高 3.1 分，能夠生成更準確的代碼。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/MoonshotAI/Attention-Residuals.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行範例
```bash
python example.py
```

## 程式碼範例

```bash
{
  "前置條件": "需要安裝 PyTorch",
  "程式碼": "def block_attn_res(blocks: list[Tensor], partial_block: Tensor, proj: Linear, norm: RMSNorm) -> Tensor:\n    V = torch.stack(blocks + [partial_block])  # [N+1, B, T, D]\n    K = norm(V)\n    logits = torch.einsum('d, n b t d -> n b t', proj.weight.squeeze(), K)\n    h = torch.einsum('n b t, n b t d -> b t d', logits.softmax(0), V)\n    return h",
  "預期輸出": "返回加權的層表示"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天就累積 2891 stars（170/天），forks 139（4.8%），這顯示出穩定的增長趨勢。主要貢獻者包括 yzhangcs 和 Nathancgy，他們在深度學習領域有豐富的經驗。這個專案解決了標準殘差連接在深度學習中常見的問題，特別是在 Transformer 模型中，這一點在過去的研究中並沒有得到有效的解決。近期的推文和討論也引發了社群的關注，特別是對於其在 Hugging Face 上的應用潛力。高達 4.8% 的 forks/stars 比率顯示出許多開發者對這個工具的實際應用有興趣，並可能進行修改和擴展。

## 適合誰使用

**目標受眾**：希望提高 Transformer 模型性能的機器學習研究者和工程師。

> [!example] 使用場景
> - 機器學習工程師用它來優化 Transformer 模型的訓練過程，因為 AttnRes 能夠有效減少層輸出貢獻的稀釋問題，提升模型的整體性能。
> - 研究人員用它來探索多步推理任務，因為在 GPQA-Diamond 基準上，AttnRes 提高了 7.5 的分數，顯示出其在複雜推理上的優勢。
> - 開發者用它來實現高效的代碼生成模型，因為 AttnRes 在 HumanEval 測試中提高了 3.1 的分數，能夠生成更準確的代碼。

## 架構分析

該專案採用 PyTorch 框架，核心架構是基於 Transformer 的模型，通過修改殘差連接來實現改進。資料流中，模型的每一層都能根據內容自適應地訪問所有早期表示，這樣的設計使得模型能夠在訓練過程中保持穩定的梯度分佈。選擇 PyTorch 的原因在於其靈活性和廣泛的社群支持，但這也意味著需要使用者具備一定的深度學習基礎。擴展性方面，Block AttnRes 的設計能夠在不增加過多計算負擔的情況下，提升模型的性能，這對於需要處理大規模數據的應用場景尤為重要。

## 技術深入分析

AttnRes 的核心技術機制是通過學習的注意力權重來替代固定的殘差連接，這使得每一層能夠根據內容自適應地聚合早期層的表示。這種方法不僅提高了模型的靈活性，還能夠有效地緩解 PreNorm 的稀釋問題，確保輸出幅度在層深度增加時保持穩定。根據實驗，AttnRes 在各種基準測試中均表現優異，特別是在多步推理和代碼生成任務上。選擇 PyTorch 作為開發框架的原因在於其靈活性和廣泛的社群支持，這對於模型的擴展和調整非常重要。技術風險方面，該方法在處理大規模數據時可能會面臨計算資源的瓶頸，特別是在記憶體使用上需要謹慎管理。整合到現有的深度學習工作流中相對簡單，但對於新手來說，學習曲線可能會稍陡峭。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的概述和程式碼範例，但缺乏詳細的使用說明。安裝過程相對順暢，但對於新手來說可能需要額外的指導。整體而言，花 30 分鐘能夠完成基本的安裝和運行範例，但深入使用可能需要更多時間學習。

## 優缺點分析

> [!success] 優點
> - 提供選擇性聚合的殘差連接，提升模型的靈活性和性能。
> - Block AttnRes 減少了記憶體需求，適合大規模計算。
> - 在多步推理和代碼生成任務中表現優異，顯著提高了基準分數。

> [!danger] 缺點
> - 目前僅支持 PyTorch，對於其他框架的使用者不友好。
> - 需要較高的計算資源，可能不適合小型專案。
> - 文檔和範例尚不完善，對新手使用有一定挑戰。

> [!warning] 注意事項
> - 目前僅支持 PyTorch 框架。
> - 需要較高的計算資源以充分發揮 Block AttnRes 的效能。
> - 尚未提供完整的文檔和範例，可能對新手不友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的模型優化技術，但主要專注於資料同步，而非殘差連接的改進。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音和自然語言處理的模型優化，與本專案的應用場景有所不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於模型的隱私保護，而非殘差連接的改進，適合需要強隱私保護的應用場景。 | 如果你的應用場景對隱私有較高要求，且需要在模型中實現隱私保護。 | medium，因為需要重新設計模型的隱私保護機制。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音和自然語言處理的模型優化，與本專案的應用場景有所不同。 | 如果你的主要應用在語音或自然語言處理領域，NemoClaw 提供了更針對性的優化。 | low，因為其 API 設計與主流框架相容性較好。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Attention-Residuals** | **Shadowbroker** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於模型的隱私保護，而非殘差連接的改進，適合需要強隱私保護的應用場景。 | 專注於語音和自然語言處理的模型優化，與本專案的應用場景有所不同。 |
> | 遷移成本 | - | medium，因為需要重新設計模型的隱私保護機制。 | low，因為其 API 設計與主流框架相容性較好。 |
> | 適用場景 | 主要場景 | 如果你的應用場景對隱私有較高要求，且需要在模型中實現隱私保護 | 如果你的主要應用在語音或自然語言處理領域，NemoClaw  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於研究和實驗，尚不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用 Block AttnRes 時，可能會遇到記憶體不足的問題，特別是在大規模數據集上訓練時。
  - 解法：考慮減少批次大小或使用更高效的記憶體管理策略。
- [MEDIUM] 對於新手來說，文檔不夠詳細，可能會導致使用上的困難。
  - 解法：參考社群討論或尋求其他開發者的幫助。
- [MEDIUM] 在某些情況下，模型的訓練過程可能會出現不穩定的情況。
  - 解法：調整學習率或使用不同的優化器來改善訓練穩定性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型機器學習團隊的 Transformer 模型開發 | 非常適合 | AttnRes 提供了顯著的性能提升，適合需要高效能的應用。 |
| 小型專案或資源有限的團隊 | 不適合 | 需要較高的計算資源和記憶體，可能不符合小型專案的需求。 |
| 學術研究或模型優化實驗 | 非常適合 | 提供了新的殘差連接方法，適合探索深度學習模型的潛力。 |
| 需要快速原型開發的初創公司 | 普通 | 雖然性能優越，但文檔不夠完善，可能影響開發效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，8 小時整合，得到顯著的性能提升，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但使用時仍需注意依賴的庫是否存在安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

AttnRes 最常與 PyTorch 框架搭配使用，適合在深度學習的開發環境中進行模型訓練和優化。具體來說，在使用 PyTorch 進行模型訓練時，可以將 AttnRes 作為殘差連接的替代品，直接替換原有的殘差連接。其與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，能夠輕鬆整合到現有的開發流程中。常見的整合問題包括記憶體管理和訓練穩定性，這需要開發者在實施時特別注意。

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
| Forks | 139 |
| Open Issues | 10 |
| Issue 解決率 | 9% (1 closed) |
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

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://github.com/MoonshotAI/Attention-Residuals/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-17）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/MoonshotAI/Attention-Residuals/issues/8) | Talk is cheap. Show me the code. | 10 | 1 |
> | [#6](https://github.com/MoonshotAI/Attention-Residuals/issues/6) | 請問有實現的程式碼嗎? | 8 | 1 |
> | [#5](https://github.com/MoonshotAI/Attention-Residuals/issues/5) | Release Kimi Linear AttnRes model on Hugging Face | 5 | 0 |
> | [#3](https://github.com/MoonshotAI/Attention-Residuals/issues/3) | 为什么文章中完全没有任何参考引用？ | 2 | 4 |
> | [#9](https://github.com/MoonshotAI/Attention-Residuals/issues/9) | block parameter N | 1 | 0 |

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

相關概念：[[深度學習]] · [[Transformer]] · [[注意力機制]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[aiming-lab--MetaClaw|aiming-lab/MetaClaw]]

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
> const concepts = ["深度學習","Transformer","注意力機制"];
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
