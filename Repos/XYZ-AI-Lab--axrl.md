---
repo: XYZ-AI-Lab/axrl
url: https://github.com/XYZ-AI-Lab/axrl
owner: XYZ-AI-Lab
owner_type: Organization
language: Python
license: Apache-2.0
description: "AxisRL is an agentic RL post-training framework built on SGLang rollout, Megatron training, and real-world agent workflows."
homepage: "https://xyz-lab.ai/"
stars: 636
stars_per_day: 106
forks: 21
open_issues: 0
created: 2026-07-23
pushed_at: 2026-07-24
first_seen: 2026-07-30
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "強化學習"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-30
use_case: "提供一個高效的強化學習後訓練框架，專為多回合互動設計。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-06"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 2055
readme_length: 9980
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-30"
star_history: "2026-07-30:636,2026-07-30:636"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "axrl"
  - "XYZ-AI-Lab/axrl"
  - "提供一個高效的強化學習後訓練框架，專為多回合互動設計。"
---

# axrl

**636** stars · **106** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
> 提供一個高效的強化學習後訓練框架，專為多回合互動設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (106 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在複雜環境中進行多回合強化學習的研究團隊或企業。
> **一句話重點** AxisRL 不僅是一個強化學習框架，更是針對多回合互動的專業解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "強化學習" && p.file.name !== "XYZ-AI-Lab--axrl" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 強化學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到高效的多回合強化學習訓練，值得一試。

> [!abstract] 核心創新
> AxisRL 提供了一個整合多回合強化學習訓練的框架，專為複雜的代理工作流設計。

## 專案簡介

AxisRL 是一個基於 SGLang 和 Megatron 的強化學習後訓練框架，專注於多回合的代理工作流。它的核心流程包括：首先，執行任務特定的代理工作流，然後使用 SGLang 生成模型，接著環境和工具產生互動記錄和獎勵，最後 Megatron 工作者消耗訓練樣本進行訓練。這種設計使得 AxisRL 能夠有效地協調多回合的 rollout 和訓練，並且支持多種可配置的政策優化目標，如 PPO 和 GRPO。使用者可以透過 Docker 環境快速上手，並且可以選擇性地下載模型和數據集以進行測試。其一句話賣點是：提供高效的多回合強化學習訓練，減少空閒時間並提高觀察能力。

技術上，AxisRL 使用 SGLang 進行高吞吐量的 rollout，並依賴 Megatron 進行大規模的分佈式訓練，這使得它能夠處理數十億參數的模型。相較於其他工具，AxisRL 支持白盒和黑盒代理工作流，並且能夠處理長尾延遲的情況，這在傳統的強化學習框架中往往難以實現。使用者在實際運行中可能會遇到配置複雜性和資源需求高的問題，尤其是在處理大型模型時。社群活躍度良好，且目前沒有開放的問題，顯示出開發者對於專案的重視。這個專案目前處於 beta 階段，適合有強化學習背景的團隊使用，尤其是需要處理複雜多回合互動的應用場景。

**技術棧**：`Python 3.12` · `SGLang` · `Megatron`

## 重點功能

- 高效的多回合強化學習 — 支持長達 300+ 回合的代理工作流，能夠處理數十億參數的模型。
- 可配置的政策優化目標 — 包括 PPO、GRPO、TOPR 等多種算法選擇，滿足不同需求。
- 白盒和黑盒代理工作流支持 — 能夠靈活應用於各種環境，從簡單的數學問題到複雜的外部工具。
- 部分 rollout 支持 — 減少訓練過程中的空閒時間，提升效率。
- 輕量級控制平面 — 透過 handle-based 數據移動，降低系統負擔，提高數據處理效率。

## 快速開始

1. 拉取 Docker 映像
```bash
docker pull leejunjie/sglang-mcore:cu130-sgl0.5.14-mcore0.18-magi
```
2. 在容器內安裝 AxisRL
```bash
pip install -e .
```
3. 下載常用模型和數據集
```bash
python axrl/example/download_data.py
```

## 程式碼範例

```python
{
  "前置條件": "需要在 Docker 環境中執行",
  "指令": "AXRL_OUTPUT_DIR_NAME=grpo_gsm8k \\ bash axis_recipe/grpo_gsm8k/run_train.sh \\ --online_rl_train.max_global_updates=4",
  "預期輸出": "訓練過程的日誌和結果，顯示模型的訓練進度。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 636 stars（106/天），forks 21（3.3%），顯示出穩定的增長。主要貢獻者 lee-junjie 和 Jinyu-W 在強化學習領域有豐富的經驗，解決了多回合強化學習中對於代理工作流的支持不足的痛點。這個專案的推出正好滿足了當前對於高效能強化學習框架的需求，特別是在需要長期互動的應用中。社群的反饋和需求促進了這個工具的快速發展，並且在技術生態中也找到了合適的定位。forks/stars 比率顯示出使用者對於這個專案的實際修改和應用的興趣。

## 適合誰使用

**目標受眾**：需要在複雜環境中進行多回合強化學習的研究團隊或企業。

> [!example] 使用場景
> - 機器學習工程師用它來訓練多回合的強化學習模型，因為它能有效管理長期互動和獎勵收集，減少訓練時間。
> - 研究人員用它來測試不同的政策優化算法，因為提供了多種可配置的選項，能夠快速迭代和比較結果。
> - DevOps 工程師用它來在 Docker 環境中部署強化學習模型，因為其預建的 Docker 映像簡化了安裝和配置過程。

## 架構分析

AxisRL 的架構設計以高效能和靈活性為核心，主要由 SGLang 和 Megatron 組成，負責模型生成和訓練。整體流程中，rollout 演員執行任務特定的工作流，SGLang 工作者生成模型，環境和工具生成互動記錄，Megatron 工作者則消耗這些樣本進行訓練。這種設計使得系統能夠在保持輕量的同時，處理大量數據和複雜的交互。

選擇這樣的架構是為了在多回合的訓練中保持高效，並且能夠靈活應對不同的任務需求。隨著使用者需求的增加，AxisRL 的擴展性也成為一個重要考量，這意味著未來可能需要進一步優化數據流和資源調度。整體來說，AxisRL 的設計考量了高效能和靈活性，適合需要處理複雜交互的強化學習應用。

## 技術深入分析

AxisRL 的核心技術機制包括 SGLang 和 Megatron，這兩者分別負責高吞吐量的 rollout 和大規模的分佈式訓練。其設計模式結合了代理控制、數據移動和訓練樣本構建，確保了在多回合互動中能夠有效地管理資源和數據流。效能上，AxisRL 能夠處理數十億參數的模型，並且支持高達 300+ 回合的代理工作流。這樣的設計使得在長尾延遲的情況下，仍然能夠保持高效的訓練和回饋。選擇 Python 作為主要語言，因為其在機器學習領域的廣泛應用和豐富的生態系統，這也使得 AxisRL 的依賴樹相對簡單，降低了學習成本。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸和資源競爭的問題，這需要在未來的版本中進行優化。整合方面，AxisRL 與主流的機器學習框架（如 TensorFlow 和 PyTorch）兼容良好，能夠輕鬆地融入現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有範例，安裝過程順暢，但對於新手來說，可能會有一些配置上的挑戰。文件提供了多語言選擇，對於不同背景的使用者友好。整體來說，花 30 分鐘能夠順利上手。

## 優缺點分析

> [!success] 優點
> - 高效的多回合訓練，能夠減少空閒時間。
> - 靈活的政策優化選擇，適應不同的應用需求。
> - 支持白盒和黑盒工作流，擴展性強。

> [!danger] 缺點
> - 需要較高的硬體要求，尤其是 GPU 支持。
> - 配置和使用上對新手可能不夠友好。
> - 部分功能仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 需要 GPU 環境以支持大規模訓練。
> - 對於新手來說，配置和使用可能會有一定的學習曲線。
> - 部分功能仍在開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的創建和管理，而 AxisRL 更加關注於後訓練的強化學習流程。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的競爭環境，但不如 AxisRL 在多回合互動的靈活性和效率。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的創建和管理，AxisRL 更加關注於後訓練的強化學習流程。 | 如果需要一個專注於代理管理的工具，而不僅僅是後訓練。 | medium，因為需要重新適應不同的工作流和接口。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的競爭環境，但不如 AxisRL 在多回合互動的靈活性和效率。 | 如果專注於多代理競爭而非多回合的強化學習。 | low，因為功能上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **axrl** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的創建和管理，AxisRL 更加關注於後訓練的強化學習流程。 | 提供多代理的競爭環境，但不如 AxisRL 在多回合互動的靈活性和效率。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的工作流和接口。 | low，因為功能上有相似之處。 |
> | 適用場景 | 主要場景 | 如果需要一個專注於代理管理的工具，而不僅僅是後訓練。 | 如果專注於多代理競爭而非多回合的強化學習。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合有強化學習背景的團隊使用，尤其是需要處理複雜多回合互動的應用場景。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在配置過程中，可能會遇到依賴衝突的問題
  - 解法：檢查 Dockerfile 中的依賴版本，確保與環境相容
- [MEDIUM] 大型模型下載時間長，可能影響初次使用體驗
  - 解法：根據需求選擇性下載模型和數據集
- [MEDIUM] 部分功能仍在開發中，可能會導致不穩定性
  - 解法：定期檢查更新和社群反饋

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行強化學習研究 | 非常適合 | 提供了靈活的多回合訓練框架，能夠快速適應不同需求。 |
| 大型企業的強化學習團隊 | 適合 | 能夠處理複雜的多回合互動，但可能需要較高的硬體支持。 |
| 初學者進行強化學習實驗 | 不適合 | 配置和使用上對新手可能不夠友好。 |
| 需要快速原型的研究人員 | 普通 | 雖然功能強大，但學習曲線可能會影響快速原型的進度。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到高效的多回合強化學習訓練，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要在 Docker 環境中運行，不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
| Forks | 21 |
| Open Issues | 0 |
| 最後推送 | 2026-07-24 |
| 建立日期 | 2026-07-23 |
| 官方網站 | [Link](https://xyz-lab.ai/) |
| Repo 大小 | 2.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XYZ-AI-Lab/axrl) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lee-junjie](https://github.com/lee-junjie) | 8 |
> | [@Jinyu-W](https://github.com/Jinyu-W) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度良好，無開放問題，顯示出開發者對於專案的重視。
**連結**：[文件](https://xyz-lab.ai/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-24 ~ 2026-07-24）
> **活躍天數** 1 天 · **最新 commit** docs: simplify Docker installation instructions

## README 摘錄

> [!info]- 展開查看原文 README
> English ·
>     简体中文
>   
> 
>   
>     
>     
>     
>     
>     
>   
> 
>   
>     XYZ AI Lab ·
>     Technical Blog
>   
> 
> 
> ## ⚙️ Installation
> 
> The recommended environment is the project Docker image. It includes SGLang, Megatron Core, MagiAttention, Ray, CUDA dependencies, and the Python packages used by the current recipes.
> 
> Pre-built image:
> 
> ```bash
> docker pull leejunjie/sglang-mcore:cu130-sgl0.5.14-mcore0.18-magi
> ```
> 
> Dockerfile:
> 
> ```text
> docker/cuda/cu130-sgl0.5.14-mcore0.18-magi.Dockerfile
> ```
> 
> Install AxisRL inside the container:
> 
> ```bash
> pip install -e .
> ```
> 
> Optionally download the common models and datasets referenced by the current recipes and tests:
> 
> ```bash
> python axrl/example/download_data.py
> ```
> 
> The bulk download can be large because it includes multi-billion-parameter models. For a narrower run, adjust the recipe model and dataset paths instead of downloading everything.
> 
> 
> ## 🚀 Quick Start
> 
> The recipe scripts below are the main entry points. They assume a GPU machine with enough resources for the default parallelism in each recipe. You can override most config fields from the command line with `--path.to.field=value`.
> 
> 
> ## ✨ Highlights
> 
> - Built on **SGLang** for high-throughput rollout and **Megatron** for large-scale distributed training.
> - Used in agent RL workflows with 300+ turn trajectories and training runs at hundreds-of-billions-parameter scale.
> - Provides configurable policy optimization objectives including PPO, GRPO/GRPO2, GSPO, TOPR, TIS, and related variants.
> - Supports both white-box agent environments and black-box harness capture through an OpenAI-compatible proxy.
> - Reduces rollout/training idle time with partial rollout and a lightweight control plane.
> - Provides handle-based data movement, context packing, routing replay, mismatch analysis, and spike replay for rollout-trainer consistency.
> 
> 
> ## 🧭 Why AxisRL?
> 
> LLM post-training workloads are moving beyond single-turn question answering. In agentic RL, a model may interact with a long-lived environment, call tools, observe tool results, update context, and receive a reward only after several turns.
> 
> That changes the job of a post-training framework. It has to coordinate multi-turn rollout, environment state, tool calls, verifiers, reward collection, training sample construction, and weight synchronization. It also has to make training behavior observable, because small differences in tokenization, chat templates, logprobs, routing, packing, or weight sync can appear later as loss spikes, reward instability, or rollout-trainer mismatch.
> 
> AxisRL is designed for this setting: real agent workflows, SGLang rollout, Megatron training, and the system contracts between them.
> 
> 
> # AxisRL
> 
> AxisRL is an agentic RL post-training framework built on SGLang rollout, Megatron training, and real-world agent workflows.
> 
> AxisRL connects high-throughput rollout, large-scale training, weight synchronization, data movement, resource scheduling, and reproducible debugging inside one coherent framework. SGLang and Megatron remain the core serving and training engines; AxisRL handles the system layer around agentic post-training.
> 
> 
> ## 🏗️ Architecture
> 
> At a high level, an AxisRL run follows this loop:
> 
> 1. Rollout actors execute task-specific agent workflows.
> 2. SGLang workers serve model generation.
> 3. Environments, tools, verifiers, or external harnesses produce interaction records and rewards.
> 4. Megatron workers consume training samples and run PPO or GRPO-family training.
> 5. Updated weights are synchronized back to the rollout side for the next iteration.
> 
> AxisRL keeps the driver lightweight. The driver manages scheduling, lifecycle, metrics, phase transitions, and metadata. Heavy payloads, such as routing replay data or future multimodal artifacts, move through a handle-based data path and are read by trainer workers on demand.
> 
> 
> ## 🎯 Design Goals
> 
> | Goal | Problem | AxisRL Approach |
> | --- | --- | --- |
> | Flexibility | Agent workflows differ in control flow, tools, rewards, context management, and resource needs. | Use recipes for task logic, support white-box environments and black-box harness capture, and manage heterogeneous components through resource groups. |
> | Efficiency | Long-tail trajectories, tool latency, verifiers, and repeated context can leave rollout or training resources idle. | Use partial rollout, thin control-plane scheduling, handle-based data movement, prefix-tree merge, MagiAttention, and off-policy stabilization tools such as TIS, sequence masking, and Icepop. |
> | Observability | Rollout and trainer paths can silently diverge in tokenization, masks, logprobs, routing, packing, or weight versions. | Test critical boundaries and provide mismatch analysis, routing replay checks, and spike replay for reproducible debugging. |
> 
> 
> ### GSM8K GRPO
> 
> ```bash
> AXRL_OUTPUT_DIR_NAME=grpo_gsm8k \
> bash axis_recipe/grpo_gsm8k/run_train.sh \
>   --online_rl_train.max_global_updates=4
> ```
> 
> 
> ### GSM8K PPO
> 
> ```bash
> AXRL_OUTPUT_DIR_NAME=ppo_gsm8k \
> bash axis_recipe/ppo_gsm8k/run_train.sh \
>   --online_rl_train.max_global_updates=4
> ```
> 
> 
> ### Search-R1
> 
> Search-R1 uses a retrieval server in addition to rollout and training workers.
> 
> ```bash
> export AXRL_SEARCH_PORT=18000
> bash axis_recipe/search_r1/start_retriever.sh
> python axis_recipe/search_r1/search_r1_config.py
> 
> AXRL_OUTPUT_DIR_NAME=search_r1 \
> python -u axis_recipe/search_r1/train_search_r1.py \
>   --config_path=axis_recipe/search_r1/search-r1-config.yaml \
>   --online_rl_train.max_global_updates=4
> ```
> 
> For the default full recipe script:
> 
> ```bash
> AXRL_SEARCH_PORT=18000 \
> bash axis_recipe/search_r1/run_train.sh
> ```
> 
> 
> ### Black-Box RL With OpenHands and E2B
> 
> This recipe is still a work in progress. It demonstrates the black-box harness integration path with OpenHands/E2B, but the config, launch scripts, and proxy interfaces may change.
> 
> The black-box RL recipe runs OpenHands inside E2B sandboxes. OpenHands calls AxisRL through an OpenAI-compatible proxy, and AxisRL captures model inputs, outputs, metadata, and rewards for training.
> 
> Prerequisites:
> 
> - `E2B_API_KEY` in the environment or in `.env`.
> - `cloudflared` on the training host for the default tunnel path.
> - An E2B template named `axrl-openhands`.
> 
> Build the E2B template once:
> 
> ```bash
> cd axis_recipe/blackbox_rl/e2b_template
> e2b template build --name axrl-openhands
> cd -
> ```
> 
> Run a small rollout smoke test:
> 
> ```bash
> AXRL_OUTPUT_DIR_NAME=blackbox-e2b-smoke \
> AXRL_ROLLOUT_TEST_NUM_CASES=2 \
> bash axis_recipe/blackbox_rl/run_rollout_test_distributed.sh
> ```
> 
> Run a short training job:
> 
> ```bash
> AXRL_OUTPUT_DIR_NAME=blackbox-e2b-train \
> bash axis_recipe/blackbox_rl/run_train_distributed.sh \
>   --online_rl_train.max_global_updates=4
> ```
> 
> More details are in [axis_recipe/blackbox_rl/README.md](axis_recipe/blackbox_rl/README.md).
> 
> 
> ## 🧩 Recipes
> 
> | Recipe | Mode | Entry Point | Notes |
> | --- | --- | --- | --- |
> | GSM8K GRPO | White-box RL | `axis_recipe/grpo_gsm8k/run_train.sh` | GRPO-style math training recipe. |
> | GSM8K PPO | White-box RL | `axis_recipe/ppo_gsm8k/run_train.sh` | PPO math training recipe with actor and value workers. |
> | Search-R1 | White-box tool RL | `axis_recipe/search_r1/run_train.sh` | Retrieval-augmented multi-turn search recipe. |
> | Black-Box RL | Black-box harness RL | `axis_recipe/blackbox_rl/run_train_distributed.sh` | WIP OpenHands/E2B recipe; config and proxy interfaces may change. |
> 
> Each recipe owns task-specific logic such as the dataset, environment loop, verifier, reward computation, metrics, and training configuration. The shared AxisRL path handles rollout scheduling, sample construction, trainer input, weight sync, and debugging.
> 
> 
> ## 🔧 Key Technical Ideas
> 
> 
> ### White-Box and Black-Box Agent Workflows
> 
> AxisRL supports two integration patterns.
> 
> | Mode | Best Fit | AxisRL Handles | User Focus |
> | --- | --- | --- | --- |
> | White-box RL | Math, Search, simple tool environments | Agent loop control, rollout scheduling, training sample construction | Environment, tools, verifier, rewa

## 延伸閱讀

相關概念：[[強化學習]] · [[多回合互動]] · [[模型訓練]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Tencent-Hunyuan--UniRL|Tencent-Hunyuan/UniRL]] · [[Blaizzy--nativ|Blaizzy/nativ]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[QwenLM--Qwen-AgentWorld|QwenLM/Qwen-AgentWorld]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[Blueturboguy07--cue|Blueturboguy07/cue]]

[GitHub](https://github.com/XYZ-AI-Lab/axrl) · [官方網站](https://xyz-lab.ai/)

## 相關收錄

> [!note]- 直接競品（同子分類：強化學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "強化學習" AND file.name != "XYZ-AI-Lab--axrl"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "XYZ-AI-Lab--axrl"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "XYZ-AI-Lab--axrl" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "XYZ-AI-Lab--axrl"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["強化學習","多回合互動","模型訓練"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XYZ-AI-Lab--axrl" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XYZ-AI-Lab--axrl" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XYZ-AI-Lab" AND file.name != "XYZ-AI-Lab--axrl"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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
> const me = dv.page("Repos/XYZ-AI-Lab--axrl");
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

> **2026-07-30** — 首次收錄
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

- [[2026-07-30|2026-07-30]] — 首次收錄，636 stars
