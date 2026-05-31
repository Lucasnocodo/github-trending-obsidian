---
repo: nv-tlabs/Gamma-World
url: https://github.com/nv-tlabs/Gamma-World
owner: nv-tlabs
owner_type: Organization
language: N/A
license: N/A
description: "Implementation of Gamma-World: Generative Multi-Agent World Modeling Beyond Two Players"
homepage: "https://research.nvidia.com/labs/sil/projects/gamma-world/"
stars: 430
stars_per_day: 86
forks: 2
open_issues: 1
created: 2026-05-25
pushed_at: 2026-05-28
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "AI/ML"
subcategory: "多代理系統"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "實現一個生成式多代理世界模型，支持超過兩個玩家的互動。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-07"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 25285
readme_length: 6087
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:430"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
  - "topic/aigc"
  - "topic/multi_agent"
  - "topic/robotics"
  - "topic/video_game"
  - "topic/worldmodel"
aliases:
  - "Gamma-World"
  - "nv-tlabs/Gamma-World"
  - "實現一個生成式多代理世界模型，支持超過兩個玩家的互動。"
---

# Gamma-World

**430** stars · **86** stars/天 · 建立 5 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/nv-tlabs--Gamma-World");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`aigc` `multi-agent` `robotics` `video-game` `worldmodel`

> [!summary] 一句話摘要
> 實現一個生成式多代理世界模型，支持超過兩個玩家的互動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (86 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 專注於多代理系統開發的研究人員和工程師，尤其是在遊戲和機器人領域。
> **一句話重點** Gamma-World 的創新在於其能夠支持多代理的互動生成，這在當前的生成模型中是相對少見的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多代理系統" && p.file.name !== "nv-tlabs--Gamma-World" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多代理系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到一個高效的多代理生成模型，值得在研究中試用。

> [!abstract] 核心創新
> Gamma-World 提出了基於 Simplex Rotary Agent Encoding 的多代理生成模型，能夠在無需額外訓練的情況下支持多達四個玩家的互動。

## 專案簡介

Gamma-World 是一個生成式多代理世界模型，旨在支持多個獨立控制的代理在共享環境中進行互動。它的核心機制是通過同步觀察和行動來生成未來的多代理展開，並利用 Simplex Rotary Agent Encoding 來確保代理的身份是可交換的，這樣可以在不需要額外訓練的情況下實現從兩個玩家擴展到四個玩家的能力。該模型還引入了 Sparse Hub Attention，這種方法通過學習的中心令牌來減少代理之間的交互成本，將計算複雜度從平方級別降低到線性。此外，Gamma-World 能夠以每秒 24 幀的速度進行實時生成，這是通過將完整上下文的擴散教師轉化為因果學生來實現的。這個工具的賣點在於其高效的多代理互動生成，適用於從虛擬遊戲到實際的多機器人協調場景。

## 重點功能

- 多代理互動 — 支持多達四個獨立控制的代理，無需額外訓練。
- Simplex Rotary Agent Encoding — 以參數自由的方式表示代理，確保身份的可交換性。
- Sparse Hub Attention — 通過學習的中心令牌來減少代理之間的交互成本，計算複雜度從 O(N²) 降到 O(N)。
- 實時生成 — 以每秒 24 幀的速度生成未來的多代理展開，適合互動應用。
- 擴展性 — 能夠從虛擬環境擴展到實際的多機器人協調場景。

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 430 stars（86/天），forks 2（0.5%），顯示出一定的關注度。這個專案由 NVIDIA 的研究團隊開發，解決了多代理互動生成的需求，之前的模型大多集中於單代理設定，無法有效處理多代理的複雜性。最近的發佈可能引起了社群的興趣，特別是在多代理系統和機器人協調的應用領域。forks/stars 比率較低，顯示出目前大多數人仍在觀望階段。

## 適合誰使用

**目標受眾**：專注於多代理系統開發的研究人員和工程師，尤其是在遊戲和機器人領域。

> [!example] 使用場景
> - 遊戲開發者用它來創建支持多玩家的互動遊戲環境，因為它能夠在不增加訓練成本的情況下擴展到多達四個玩家。
> - 機器人研究者用它來模擬多機器人協作任務，因為它提供了一個一致的共享世界模型，便於實驗和測試。
> - AI 研究者用它來探索多代理系統的行為模式，因為其生成的環境能夠真實反映多代理互動的複雜性。

## 架構分析

Gamma-World 的架構設計旨在支持多代理的互動生成，核心在於使用 Simplex Rotary Agent Encoding 來確保代理的身份可交換性，這樣可以避免傳統模型中對代理身份的固定依賴。資料流方面，模型從多個代理的同步觀察和行動中獲取輸入，通過共享的視覺和行動編碼器進行處理，然後生成未來的多代理展開。Sparse Hub Attention 的引入使得代理之間的交互成本大幅降低，這在多代理系統中是至關重要的，因為隨著代理數量的增加，傳統的全對全注意力機制會導致計算資源的浪費。這種設計使得 Gamma-World 在處理多代理互動時更具擴展性，特別是在需要即時生成的應用場景中。

## 技術深入分析

Gamma-World 的核心技術機制在於其生成式多代理世界模型，使用了 Simplex Rotary Agent Encoding 來確保代理身份的可交換性，這樣的設計使得模型能夠在不增加訓練成本的情況下擴展到多達四個玩家。Sparse Hub Attention 的引入則是為了解決多代理系統中常見的計算瓶頸，將交互成本從 O(N²) 降到 O(N)，這在代理數量增加時尤為重要。該模型的效能特性尚未完全披露，但其設計目標是實現實時生成，這意味著在資源使用上必須非常高效。選擇這種架構的好處在於能夠快速響應多代理的行動，而代價則是需要精心設計的注意力機制來保持高效性。技術風險方面，隨著代理數量的增加，系統的穩定性和性能可能會受到挑戰，特別是在高負載情況下。整合方面，該模型的使用可能需要特定的環境設置，與主流框架的相容性尚未明確。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的專案介紹，但缺乏具體的安裝和使用範例。安裝過程的詳細步驟尚未提供，可能會讓新手感到困惑。整體而言，對於想要快速上手的使用者來說，這個專案的入門體驗並不理想。

## 優缺點分析

> [!success] 優點
> - 支持多達四個代理的獨立控制，無需額外訓練。
> - 高效的 Sparse Hub Attention 機制降低了計算複雜度。
> - 能夠實時生成互動環境，適合遊戲和機器人應用。

> [!danger] 缺點
> - 目前僅釋出初步的模型和資料，缺乏完整的實作細節。
> - 社群參與度低，僅有一個開放的 issue。
> - 尚未確認對於更大規模代理的支持能力。

> [!warning] 注意事項
> - 目前僅支持多達四個代理的互動，未來擴展的能力尚未確認。
> - 缺乏完整的代碼和數據集工具，尚未釋出。
> - 目前只有一個開放的 issue，顯示出社群參與度較低。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合研究和實驗用途，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 目前僅釋出初步的模型和資料，缺乏完整的實作細節，可能導致使用者無法快速上手。
  - 解法：持續關注官方更新，等待完整代碼和文檔的釋出。
- [MEDIUM] 社群參與度低，僅有一個開放的 issue，可能影響使用者的支持和資源獲取。
  - 解法：考慮加入相關的研究社群以獲取更多資源和支持。
- [MEDIUM] 尚未確認對於更大規模代理的支持能力，可能會限制其應用範圍。
  - 解法：在小規模環境中進行實驗，觀察其性能和穩定性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 遊戲開發團隊需要一個支持多玩家互動的引擎 | 非常適合 | Gamma-World 能夠在不增加訓練成本的情況下支持多達四個玩家的互動。 |
| 機器人協作研究小組需要模擬多機器人環境 | 適合 | 該模型提供了一個一致的共享世界模型，適合進行多機器人協作的實驗。 |
| 單一代理的遊戲開發者希望擴展到多代理互動 | 普通 | 雖然支持多代理，但可能需要額外的調整和實驗。 |
| 大型企業需要穩定的多代理系統 | 不適合 | 目前處於 alpha 階段，尚未準備好用於生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到一個高效的多代理生成模型，值得在研究中試用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Gamma-World 本身不需要高權限，且不存取敏感資料，但在使用過程中需注意依賴的庫和資源的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Gamma-World 目前尚未提供詳細的生態系統整合指南，但其設計目標是能夠與現有的多代理系統和機器人協作框架相容。未來可能會與主流的遊戲引擎和機器人控制系統進行整合。整合的摩擦點可能在於需要特定的環境設置和依賴，這可能會影響快速部署的能力。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Gamma-World 出現之前，多代理互動的生成模型大多集中於單一代理的設計，無法有效處理多代理的複雜性。隨著多代理系統在遊戲和機器人領域的需求增加，Gamma-World 提供了一個新的解決方案，能夠在共享環境中支持多個代理的互動。這一技術趨勢顯示出未來在多代理協作和互動生成方面的潛力，預計在未來幾個月內會有更多的應用案例和改進。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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
| Forks | 2 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-05-25 |
| 官方網站 | [Link](https://research.nvidia.com/labs/sil/projects/gamma-world/) |
| Repo 大小 | 24.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nv-tlabs/Gamma-World) |
| Topics | `aigc` `multi-agent` `robotics` `video-game` `worldmodel` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liuff19](https://github.com/liuff19) | 3 |

## 社群與生態

**社群活躍度**：目前社群活躍度較低，僅有一個開放的 issue。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-27 ~ 2026-05-28）
> **活躍天數** 2 天 · **最新 commit** Update README: link arXiv 2605.28816

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/nv-tlabs/Gamma-World/issues/1) | Release Gamma-World artifacts (models, dataset tools) on Hug | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> ✨Gamma-World: Generative Multi-Agent World Modeling
>     Beyond Two Players✨
> 
>     Fangfu Liu1,2*&nbsp;&nbsp;&nbsp;&nbsp;
>     Kai He1,3,4*&nbsp;&nbsp;&nbsp;&nbsp;
>     Tianchang Shen1&nbsp;&nbsp;&nbsp;&nbsp;
>     Tianshi Cao1&nbsp;&nbsp;&nbsp;&nbsp;
>     Sanja Fidler1,3,4&nbsp;&nbsp;&nbsp;&nbsp;
>     Yueqi Duan2&nbsp;&nbsp;&nbsp;&nbsp;
>     Jun Gao1
>     
>     Igor Gilitschenski3,4†&nbsp;&nbsp;&nbsp;&nbsp;
>     Zian Wang1†&nbsp;&nbsp;&nbsp;&nbsp;
>     Xuanchi Ren1†
>     
>     
>     1NVIDIA&nbsp;&nbsp;&nbsp;&nbsp;
>     2Tsinghua University&nbsp;&nbsp;&nbsp;&nbsp;
>     3University of Toronto&nbsp;&nbsp;&nbsp;&nbsp;
>     4Vector Institute
> 
>  &nbsp;&nbsp;&nbsp;&nbsp;
>  &nbsp;&nbsp;&nbsp;&nbsp;
>  &nbsp;&nbsp;&nbsp;&nbsp;
> 
> γ-World: We introduce a generative multi-agent world model that rolls out a single shared environment for multiple independently controllable agents. γ-World supports permutation-symmetric agent conditioning with Simplex Rotary Agent Encoding, efficient cross-agent communication with Sparse Hub Attention, real-time 24 FPS streaming with a distilled block-causal student, and zero-shot generalization from two to four players.
> 
> ## 📢 News
> 
> - 🚀[05/28/2026] We release γ-World with the project page, paper, videos, qualitative results, and method overview.
> - 🔜[Coming Soon] We will release the code and distilled streaming checkpoints with KV cache support.
> - ⏳[Planned] Training scripts and dataset preparation tools will be released in a future update.
> 
> ## 🌟 Overview
> 
> γ-World interactively generates coherent future frames from multi-agent actions while preserving shared-world consistency, scaling from multiplayer virtual games to real-world multi-robot environments.
> 
> https://github.com/user-attachments/assets/11a81855-5b51-4117-bfcd-ef07246e0a4e
> 
> ## 📖 Abstract
> 
> World models for interactive video generation have largely focused on single-agent settings, where future observations are generated from a single control signal. However, many generated environments require multi-agent interaction: multiple players, robots, or embodied agents act simultaneously within a shared space. Scaling world models to such settings requires a principled multi-agent design: agents should remain independently controllable, permutation-symmetric, and support efficient inference while maintaining consistency across time and perspectives.
> 
> We present γ-World, a generative multi-agent world model for interactive simulation. γ-World introduces Simplex Rotary Agent Encoding, a parameter-free extension of 3D RoPE that represents agents as vertices of a regular simplex in rotary angle space. This gives each agent a distinct phase while making all agents permutation-equivalent, enabling scalable agent identity without learned per-slot identities or a fixed agent ordering.
> 
> To avoid dense all-to-all attention across agents, we further propose Sparse Hub Attention, where learnable hub tokens mediate token interaction across agents, reducing cross-agent attention cost from quadratic to linear in the number of agents. For real-time rollout, we distill a full-context diffusion teacher into a causal student that generates temporal blocks sequentially with KV caching, enabling action-responsive generation at 24 FPS.
> 
> ## 🖼️ Gallery
> 
> ### Two-Agent Interaction
> 
> Each agent is independently controllable while sharing the same evolving world.
> 
> ### Four-Agent Generalization
> 
> Benefiting from the permutation-symmetric simplex agent encoding, γ-World generalizes from two to four players without additional training.
> 
> ### Real-World Robotics Coordination
> 
> γ-World extends to real-world multi-robot coordination scenarios, demonstrating applicability beyond virtual environments.
> 
> ## 🧠 Method
> 
> γ-World takes synchronized observations and actions from multiple agents as input, tokenizes each agent stream with shared visual and action encoders, and generates future multi-agent rollouts with a causal multi-agent DiT. The model formulates the input with an explicit synchronized agent axis, encodes exchangeable agent identity using Simplex Rotary Agent Encoding, and routes cross-agent information through Sparse Hub Attention. During streaming inference, the causal student uses KV caches for past visual tokens and hub states to preserve block-causal generation while scaling efficiently with the number of agents.
> 
> ### Simplex Rotary Agent Encoding
> 
> Simplex Rotary Agent Encoding is a parameter-free extension of 3D RoPE. Instead of assigning agents scalar indices or learned identity vectors, γ-World places them at the vertices of a regular simplex in rotary angle space. All agents have equal pairwise distances, so every pair is permutation-equivalent while each agent retains a distinct rotary phase.
> 
> ### Sparse Hub Attention
> 
> Sparse Hub Attention routes cross-agent communication through a small set of learnable hub tokens. Agent tokens attend to their own stream and to the hubs; the hubs aggregate information across agents and broadcast it back. This preserves a shared communication pathway without dense pairwise interaction, reducing cross-agent attention from O(N²) to O(N).
> 
> ### Efficiency
> 
> Sparse Hub Attention achieves significantly lower latency and FLOPs as the number of agents increases, making γ-World more scalable beyond two players.
> 
> ## 📚 Citation
> 
> If you find γ-World useful for your research or applications, please cite our paper:
> 
> ```bibtex
> @article{gammaworld2026,
>     title={Gamma-World: Generative Multi-Agent World Modeling Beyond Two Players},
>     author={Fangfu Liu and Kai He and Tianchang Shen and Tianshi Cao and
>             Sanja Fidler and Yueqi Duan and Jun Gao and Igor Gilitschenski and
>             Zian Wang and Xuanchi Ren},
>     journal={arXiv preprint arXiv:2605.28816},
>     year={2026}
> }
> ```
> 
> ## Acknowledgements
> 
> The authors would like to thank Product Managers Aditya Mahajan and Matt Cragun for their valuable support and guidance, Jingnan Gao for proof discussion, and Yixin Hong for demo creation.
> 
> ## License
> 
> γ-World will be released under the Apache License 2.0. Final license terms will be confirmed at the code release.

## 延伸閱讀

相關概念：[[多模態]] · [[機器學習]] · [[強化學習]]

相關專案：[[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[WenyuChiou--awesome-agentic-ai-zh|WenyuChiou/awesome-agentic-ai-zh]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[facebookresearch--HyperAgents|facebookresearch/HyperAgents]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/nv-tlabs/Gamma-World) · [官方網站](https://research.nvidia.com/labs/sil/projects/gamma-world/)

## 相關收錄

> [!note]- 直接競品（同子分類：多代理系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多代理系統" AND file.name != "nv-tlabs--Gamma-World"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "nv-tlabs--Gamma-World"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "nv-tlabs--Gamma-World" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "nv-tlabs--Gamma-World"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","機器學習","強化學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nv-tlabs--Gamma-World" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nv-tlabs--Gamma-World" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nv-tlabs" AND file.name != "nv-tlabs--Gamma-World"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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
> const me = dv.page("Repos/nv-tlabs--Gamma-World");
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

> **2026-05-31** — 首次收錄
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

- [[2026-05-31|2026-05-31]] — 首次收錄，430 stars
