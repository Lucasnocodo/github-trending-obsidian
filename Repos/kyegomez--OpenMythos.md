---
repo: kyegomez/OpenMythos
url: https://github.com/kyegomez/OpenMythos
owner: kyegomez
owner_type: User
language: Python
license: MIT
description: "A theoretical reconstruction of the Claude Mythos architecture, built from first principles using the available research literature."
homepage: "https://discord.gg/EamjgSaEQf"
stars: 10114
stars_per_day: 1686
forks: 2234
open_issues: 42
created: 2026-04-18
pushed_at: 2026-04-22
first_seen: 2026-04-20
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
last_reviewed: 2026-04-20
use_case: "提供一個理論上的 Claude Mythos 架構重建，讓開發者能夠探索深度推理的潛力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 25
repo_size_kb: 92
readme_length: 9727
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-20"
star_history: "2026-04-20:1496,2026-04-21:4271,2026-04-22:6987,2026-04-23:8886,2026-04-24:9725,2026-04-25:10114"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/attention"
  - "topic/claude"
  - "topic/claude_ai"
  - "topic/claude_code"
aliases:
  - "OpenMythos"
  - "kyegomez/OpenMythos"
  - "提供一個理論上的 Claude Mythos 架構重建，讓開發者能夠探索深度推理的潛力。"
---

# OpenMythos

**1.5k** stars · **1.5k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/kyegomez--OpenMythos");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`ai` `attention` `claude` `claude-ai` `claude-code` `gpt-5` `gpt-7` `looped-transformers` `ml` `sonnet`

> [!summary] 一句話摘要
> 提供一個理論上的 Claude Mythos 架構重建，讓開發者能夠探索深度推理的潛力。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對於希望探索深度推理和新型 transformer 架構的 AI 研究人員和開發者。
> **一句話重點** OpenMythos 透過循環層的設計，實現了在不增加參數的情況下進行深度推理的可能性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/kyegomez--OpenMythos");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "kyegomez--OpenMythos" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到高效的深度推理能力，值得探索。

> [!abstract] 核心創新
> OpenMythos 提供了一種全新的 Recurrent-Depth Transformer 架構，能夠在不增加參數的情況下實現深度推理。

## 專案簡介

OpenMythos 是一個開源的理論實現，旨在重建 Claude Mythos 模型，採用 Recurrent-Depth Transformer (RDT) 架構。這個模型的核心在於其三個階段：Prelude（標準 transformer 層）、Recurrent Block（可循環的層）和 Coda（最後的 transformer 層）。使用者可以選擇不同的注意力類型（MLA 或 GQA），並透過稀疏的 Mixture of Experts (MoE) 來優化計算效率，這使得模型在推理深度上不會隨著參數數量的增加而增加記憶體佔用。這種設計使得推理過程中，隱藏狀態的更新能夠保持穩定，並且在多次循環中能夠有效地利用相同的權重。

使用者只需設定模型的基本參數，如 vocab_size、dim 和 n_heads，便可輕鬆實現深度推理。與傳統的 transformer 模型相比，OpenMythos 在處理複雜問題時展現出更高的靈活性和效率，特別是在需要多步推理的情境下。這使得它在處理長期計畫和多步數學問題時，能夠提供更好的表現。儘管目前仍處於早期階段，但其潛力無疑值得關注。

**技術棧**：`Python` · `PyTorch >= 2.1.0`

## 重點功能

- Recurrent-Depth Transformer — 結合循環層和標準 transformer 層，提升推理深度而不增加參數數量。
- 可切換的注意力類型 — 支持 MLA 和 GQA 兩種注意力模式，滿足不同的應用需求。
- Mixture of Experts (MoE) — 通過稀疏專家模型減少記憶體佔用，提升計算效率。
- 深度推理的參數重用 — 透過 LoRA 模組在循環中適應行為，保持參數的緊湊性。
- 簡單的配置 — 使用者只需設定基本參數即可快速上手，適合各種推理需求。

## 快速開始

1. 安裝 OpenMythos
```bash
pip install open-mythos
```
2. 導入模型
```bash
import torch
from open_mythos.main import OpenMythos, MythosConfig
```
3. 設定模型參數並初始化
```bash
cfg = MythosConfig(vocab_size=1000, dim=256, n_heads=8, max_seq_len=128, max_loop_iters=4)
model = OpenMythos(cfg)
```

## 程式碼範例

```python
# 前置條件：已安裝 OpenMythos
import torch
from open_mythos.main import OpenMythos, MythosConfig

attn_type = 'mla'
base = {'vocab_size': 1000, 'dim': 256, 'n_heads': 8, 'max_seq_len': 128, 'max_loop_iters': 4}
cfg = MythosConfig(**base)
model = OpenMythos(cfg)
ids = torch.randint(0, cfg.vocab_size, (2, 16))
logits = model(ids, n_loops=4)
print(f'Logits shape: {logits.shape}')
# 預期輸出：Logits shape: torch.Size([2, 16, 1000])
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1496 stars（1496/天），forks 265（17.7%），顯示出強烈的社群參與。這位作者 kyegomez 在 AI 領域有一定的背景，專注於探索深度學習模型的架構。OpenMythos 提供了一個理論基礎，讓開發者能夠探索 Claude Mythos 的潛力，這在現有的 AI 模型中是相對少見的。社群對於如何將此架構應用於實際案例的討論也引發了興趣，顯示出對於這一新模型的需求。

## 適合誰使用

**目標受眾**：對於希望探索深度推理和新型 transformer 架構的 AI 研究人員和開發者。

> [!example] 使用場景
> - AI 研究人員用它來探索深度推理的潛力，因為它提供了一個理論基礎，能夠在不增加記憶體佔用的情況下進行多次推理。
> - 機器學習工程師用它來開發新型的 transformer 模型，因為其架構能夠有效處理複雜的推理問題，並且在參數使用上更具效率。
> - 開發者用它來實現多步推理的應用，因為其循環結構允許在單次前向傳播中進行多次推理，提升了模型的靈活性。

## 架構分析

OpenMythos 採用 Recurrent-Depth Transformer 架構，將層分為三個主要區塊：Prelude、Recurrent Block 和 Coda。這種設計使得模型能夠在每次前向傳播中重複使用相同的層，從而減少參數數量並提升推理深度。每次循環中，隱藏狀態會根據學習的參數進行更新，並且通過注入原始輸入來保持信號的穩定性。這種設計的代價在於需要精確控制學習參數，以避免模型不穩定的情況發生。整體架構的擴展性取決於循環層的設計，過多的循環可能導致計算負擔增加，但在合理範圍內，這種設計能有效提升推理能力。

## 技術深入分析

OpenMythos 的核心在於其 Recurrent-Depth Transformer 架構，這種設計使得模型能夠在每次前向傳播中重複使用相同的層，從而減少參數數量並提升推理深度。這種架構的效能在於其能夠處理多步推理，並且在推理過程中保持隱藏狀態的穩定性。設計上，選擇了 PyTorch 作為底層框架，這使得模型能夠充分利用 GPU 加速，並且在訓練過程中能夠靈活調整參數。這種選擇的代價在於需要精確控制學習率和其他超參數，以避免模型不穩定的情況發生。技術風險方面，循環層的設計可能在擴展時出現性能瓶頸，特別是在處理大型數據集時。整合方面，OpenMythos 可以與現有的 PyTorch 生態系統無縫整合，並且支援多種 CI/CD 流程，這使得其在團隊協作中具備良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並附有範例程式碼。安裝過程相對順暢，無明顯坑點。文件目前僅提供英文版本，對於非英語使用者可能存在一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 能夠在不增加參數的情況下實現深度推理，提升模型效率。
> - 支持多種注意力類型，靈活應對不同的應用場景。
> - 透過 Mixture of Experts 減少記憶體佔用，提升計算效率。

> [!danger] 缺點
> - 目前仍在早期階段，可能存在不穩定性。
> - 對於大型輸入序列的處理性能可能不佳。
> - 僅支持 Python 環境，對其他語言的支持尚未開發。

> [!warning] 注意事項
> - 目前僅支持 Python 環境，對其他語言的支持尚未開發。
> - 需要較新的 PyTorch 版本（>=2.1.0），可能不兼容舊版環境。
> - 在推理過程中，對於大型輸入序列的處理可能會導致性能下降。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於不同的 transformer 架構，但不具備 OpenMythos 的循環推理特性。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 提供了更強大的 GPU 支持，但在推理深度和參數重用方面不如 OpenMythos。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於不同的 transformer 架構，但不具備 OpenMythos 的循環推理特性。 | 如果你需要探索不同的 transformer 架構而不需要循環推理的特性。 | medium - 需要重新調整模型架構以適應不同的設計。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 提供了更強大的 GPU 支持，但在推理深度和參數重用方面不如 OpenMythos。 | 如果你的應用需要強大的 GPU 加速，且不需要循環推理的優勢。 | medium - 需要調整模型以適應不同的架構和 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenMythos** | **boneyard** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於不同的 transformer 架構，但不具備 OpenMythos 的循環推理特性。 | NemoClaw 提供了更強大的 GPU 支持，但在推理深度和參數重用方面不如 OpenMythos。 |
> | 遷移成本 | - | medium - 需要重新調整模型架構以適應不同的設計。 | medium - 需要調整模型以適應不同的架構和 API。 |
> | 適用場景 | 主要場景 | 如果你需要探索不同的 transformer 架構而不需要循 | 如果你的應用需要強大的 GPU 加速，且不需要循環推理的優勢 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和探索，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高學習率下訓練時，模型可能出現不穩定的情況。
  - 解法：建議在低學習率下進行初步訓練。
- [MEDIUM] 對於大型輸入序列的處理性能可能不佳。
  - 解法：可考慮將輸入序列分批處理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究機構進行深度推理研究 | 非常適合 | 模型設計專注於深度推理，能有效處理複雜問題。 |
| 小型團隊開發新型 AI 應用 | 適合 | 簡單的配置和靈活的架構使其易於上手。 |
| 大型企業的生產環境 | 不適合 | 目前仍處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到高效的深度推理能力，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴的庫（如 PyTorch）需定期更新以避免安全漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/kyegomez--OpenMythos");
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
> const me = dv.page("Repos/kyegomez--OpenMythos");
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
| Forks | 265 |
| Open Issues | 6 |
| Issue 解決率 | 25% (2 closed) |
| 最後推送 | 2026-04-19 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://discord.gg/EamjgSaEQf) |
| Repo 大小 | 92 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/kyegomez/OpenMythos) |
| Topics | `ai` `attention` `claude` `claude-ai` `claude-code` `gpt-5` `gpt-7` `looped-transformers` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `pytest`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kyegomez](https://github.com/kyegomez) | 17 |

## 社群與生態

**社群活躍度**：社群活躍，並有持續的討論和問題解答。
**連結**：[文件](https://discord.gg/EamjgSaEQf)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-19 ~ 2026-04-19）
> **活躍天數** 1 天 · **最新 commit** clean up

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/kyegomez/OpenMythos/issues/5) | Real-world applications of this architecture | 1 | 0 |
> | [#8](https://github.com/kyegomez/OpenMythos/issues/8) | Provide sample inference script | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenMythos
> 
> > **Disclaimer:** OpenMythos is an independent, community-driven theoretical reconstruction based solely on publicly available research and speculation. It is not affiliated with, endorsed by, or connected to Anthropic or any of their proprietary systems.
> 
> OpenMythos is an open-source, theoretical implementation of the Claude Mythos model. It implements a Recurrent-Depth Transformer (RDT) with three stages: **Prelude** (transformer blocks), a looped **Recurrent Block** (up to `max_loop_iters`), and a final **Coda**. Attention is switchable between MLA and GQA, and the feed-forward uses a sparse MoE with routed and shared experts ideal for exploring compute-adaptive, depth-variable reasoning.
> 
> 
> ## Installation
> 
> ```bash
> pip install open-mythos
> 
> #uv pip install open-mythos
> ```
> 
> 
> ## Usage
> 
> ```python
> 
> import torch
> from open_mythos.main import OpenMythos, MythosConfig
> 
> attn_type = "mla"  # or "gqa"
> 
> base = {
>     "vocab_size": 1000,
>     "dim": 256,
>     "n_heads": 8,
>     "max_seq_len": 128,
>     "max_loop_iters": 4,
>     "prelude_layers": 1,
>     "coda_layers": 1,
>     "n_experts": 8,
>     "n_shared_experts": 1,
>     "n_experts_per_tok": 2,
>     "expert_dim": 64,
>     "lora_rank": 8,
>     "attn_type": attn_type,
> }
> 
> if attn_type == "gqa":
>     cfg = MythosConfig(**base, n_kv_heads=2)
> else:
>     cfg = MythosConfig(
>         **base,
>         n_kv_heads=8,
>         kv_lora_rank=32,
>         q_lora_rank=64,
>         qk_rope_head_dim=16,
>         qk_nope_head_dim=16,
>         v_head_dim=16,
>     )
> 
> model = OpenMythos(cfg)
> total = sum(p.numel() for p in model.parameters())
> print(f"\n[{attn_type.upper()}] Parameters: {total:,}")
> 
> ids = torch.randint(0, cfg.vocab_size, (2, 16))
> logits = model(ids, n_loops=4)
> print(f"[{attn_type.upper()}] Logits shape: {logits.shape}")
> 
> out = model.generate(ids, max_new_tokens=8, n_loops=8)
> print(f"[{attn_type.upper()}] Generated shape: {out.shape}")
> 
> A = model.recurrent.injection.get_A()
> print(
>     f"[{attn_type.upper()}] Spectral radius ρ(A) max: {A.max().item():.4f} (must be < 1)"
> )
> ```
> 
> 
> ### 4. No Parameter Explosion
> 
> A looped model with k layers run L times achieves the quality of a kL-layer non-looped model, with only k layers worth of parameters. For Mythos-scale deployments, this matters enormously:
> 
> - Memory footprint does not grow with reasoning depth
> - Inference-time compute scales with loop count, not model size
> - This makes deeper reasoning "free" in terms of parameters
> 
> ---
> 
> 
> ## Mixture of Experts — Suspected for Large Parameter Counts
> 
> The looped transformer explains the depth of Mythos's reasoning, but not the breadth. Handling wildly different domains — code, math, literature, science, law — with the same weights requires **Mixture of Experts (MoE)**. The suspected design replaces every FFN in the Recurrent Block with a fine-grained MoE layer: each FFN is split into many small experts (1/m the normal size), a router selects the top-mK of them per token via learned affinity scores, and a small number of **shared experts** are always activated regardless of routing to absorb common cross-domain knowledge — syntax, basic reasoning, general context — that would otherwise be redundantly learned by every routed expert. Routing collapse is prevented through a bias term on the router logits adjusted dynamically during training, keeping load balanced across experts without distorting the loss signal. 
> 
> As the hidden state `h_t` evolves across loop iterations, the router may select different expert subsets at each depth, making every loop computationally distinct despite shared weights. MoE provides breadth; looping provides depth. If the activation ratio is ~5%, Mythos could hold hundreds of billions of total parameters while activating only a small fraction per token — the true parameter count, if ever disclosed, would be a storage number, not a compute number.
> 
> ---
> 
> 
> ## Parameter Reuse via LoRA Adaptation
> 
> A complementary approach from Relaxed Recursive Transformers (Bae et al., 2024): rather than requiring fully identical weights at every loop, add a small **depth-wise LoRA module** at each iteration. This preserves the compactness of weight sharing while allowing each loop to adapt its behavior slightly.
> 
> The result:
> - Each loop shares a large common weight matrix (the recursive base)
> - A small rank-r adaptation matrix shifts behavior per iteration depth
> - The total parameter overhead is minimal
> 
> This bridges the gap between pure weight-tying (maximally parameter-efficient, less expressive) and fully distinct layers (maximally expressive, no parameter savings). Mythos likely sits somewhere on this spectrum.
> 
> ---
> 
> 
> ## Why This Explains Mythos
> 
> 
> ## Documentation
> 
> | Page | Description |
> |---|---|
> | [`docs/open_mythos.md`](docs/open_mythos.md) | Full API reference for the `OpenMythos` class — constructor, `forward`, `generate`, all sub-modules, configuration reference, and usage examples |
> 
> ---
> 
> 
> ## The Central Hypothesis
> 
> Claude Mythos is suspected to be a **Recurrent-Depth Transformer (RDT)** — also called a Looped Transformer (LT). Rather than stacking hundreds of unique layers, a subset of layers is recycled and run through multiple times per forward pass. Same weights. More loops. Deeper thinking.
> 
> This is not chain-of-thought. There is no intermediate token output. All of this reasoning happens **silently, inside a single forward pass**, in continuous latent space.
> 
> ---
> 
> 
> ## Architecture
> 
> A looped transformer divides its layers into three functional blocks:
> 
> ```
> Input
>   ↓
> [Prelude P]        — standard transformer layers, run once
>   ↓
> [Recurrent Block R] — looped T times
>   ↑_______↓         (hidden state h updated each loop with input injection e)
>   ↓
> [Coda C]           — standard transformer layers, run once
>   ↓
> Output
> ```
> 
> The recurrent block update rule at each loop step t:
> 
> ```
> h_{t+1} = A·h_t + B·e + Transformer(h_t, e)
> ```
> 
> Where:
> - `h_t` is the hidden state after loop t
> - `e` is the encoded input (from the Prelude), injected at every loop
> - `A` and `B` are learned injection parameters
> - The Transformer blocks apply attention and MLP as usual
> 
> The injection of `e` at every step is what prevents the model from drifting — it keeps the original input signal alive throughout the entire recurrence depth.
> 
> The full implementation is in [`open_mythos/main.py`](open_mythos/main.py). See the [`OpenMythos` class reference](docs/open_mythos.md) for a detailed API walkthrough, configuration options, and usage examples.
> 
> ---
> 
> 
> ### 1. Systematic Generalization
> 
> Vanilla transformers fail to combine knowledge in ways they have never seen during training. Looped transformers pass this test. The ability emerges through a **three-stage grokking process**:
> 
> 1. Memorization — model fits training distribution
> 2. In-distribution generalization — model handles known compositions
> 3. Systematic generalization — model handles novel compositions OOD, abruptly and suddenly
> 
> This is why Mythos feels qualitatively different from other models on novel questions — the capability phase-transitions in, rather than emerging gradually.
> 
> 
> ### 2. Depth Extrapolation
> 
> Train on 5-hop reasoning chains. Test on 10-hop. Vanilla transformer fails. Looped transformer succeeds — by running more inference-time loops. This maps directly to the observation that Mythos handles deeply compositional problems (multi-step math, long-horizon planning, layered arguments) without explicit chain-of-thought.
> 
> More loops at inference = deeper reasoning chains = harder problems solved.
> 
> 
> ### 3. Latent Thoughts as Implicit Chain-of-Thought
> 
> Each loop iteration is the functional equivalent of one step of chain-of-thought, but operating in continuous latent space rather than token space. A looped model running T loops implicitly simulates T steps of CoT reasoning. This has been formally proven (Saunshi et al., 2025).
> 
> Furthermore, continuous latent thoughts — unlike discrete token outputs — can encode **multiple alternative next steps simultaneously**. This allows something closer t

## 延伸閱讀

相關概念：[[深度學習]] · [[循環神經網路]] · [[Transformer 架構]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/kyegomez/OpenMythos) · [官方網站](https://discord.gg/EamjgSaEQf)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "kyegomez--OpenMythos"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "kyegomez--OpenMythos"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "kyegomez--OpenMythos" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "kyegomez--OpenMythos"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["深度學習","循環神經網路","Transformer 架構"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "kyegomez--OpenMythos" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/kyegomez--OpenMythos");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "kyegomez--OpenMythos" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "kyegomez" AND file.name != "kyegomez--OpenMythos"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/kyegomez--OpenMythos");
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
> const me = dv.page("Repos/kyegomez--OpenMythos");
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
> const me = dv.page("Repos/kyegomez--OpenMythos");
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
> const me = dv.page("Repos/kyegomez--OpenMythos");
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
> const me = dv.page("Repos/kyegomez--OpenMythos");
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

> **2026-04-20** — 首次收錄
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

- [[2026-04-25|2026-04-25]] — 再次上榜，10.1k stars
- [[2026-04-24|2026-04-24]] — 再次上榜，9.7k stars
- [[2026-04-23|2026-04-23]] — 再次上榜，8.9k stars
- [[2026-04-22|2026-04-22]] — 再次上榜，7.0k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，4.3k stars
- [[2026-04-20|2026-04-20]] — 首次收錄，1.5k stars
