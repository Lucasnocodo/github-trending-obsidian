---
repo: Tencent-Hunyuan/UniRL
url: https://github.com/Tencent-Hunyuan/UniRL
owner: Tencent-Hunyuan
owner_type: Organization
language: Python
license: NOASSERTION
description: "UniRL is a Framework for Unified Multimodal Model Reinforcement Learning"
homepage: "https://unirl-project.github.io/unirl/"
stars: 524
stars_per_day: 175
forks: 28
open_issues: 10
created: 2026-06-08
pushed_at: 2026-06-11
first_seen: 2026-06-12
week: "2026-W24"
month: "2026-06"
category: "AI/ML"
subcategory: "強化學習"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-12
use_case: "提供一個統一的多模態強化學習框架，簡化模型訓練流程。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-19"
contributor_count: 5
engagement: "low"
issue_close_rate: 17
repo_size_kb: 29908
readme_length: 7622
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-12"
star_history: "2026-06-12:524,2026-06-12:524"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/ai_infrastructure"
  - "topic/reinforcement_learning"
  - "topic/sglang"
  - "topic/vllm"
aliases:
  - "UniRL"
  - "Tencent-Hunyuan/UniRL"
  - "提供一個統一的多模態強化學習框架，簡化模型訓練流程。"
---

# UniRL

**524** stars · **175** stars/天 · 建立 3 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`ai-infrastructure` `reinforcement-learning` `sglang` `vllm`

> [!summary] 一句話摘要
> 提供一個統一的多模態強化學習框架，簡化模型訓練流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (175 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在多模態環境中進行強化學習實驗的研究者和開發者。
> **一句話重點** UniRL 的設計讓多模態強化學習變得更加簡單和靈活，特別適合快速原型和實驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "強化學習" && p.file.name !== "Tencent-Hunyuan--UniRL" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到靈活的多模態強化學習框架，值得考慮。

> [!abstract] 核心創新
> UniRL 提供了一個統一的強化學習框架，支持多種模態和算法的靈活組合。

## 專案簡介

UniRL 是一個針對多模態模型的強化學習框架，旨在簡化訓練過程。使用者可以透過單一的 RL 循環來生成樣本、計算優勢、更新策略，並將權重同步回 rollout 工作者。這個框架的設計是層次化且可組合的，使用者可以選擇不同的入口點（如 `train_diffusion`、`train_ar` 等），並透過 Hydra 配置來定義模型、算法和獎勵服務等。這樣的設計使得 UniRL 能夠支持多種模型和算法的組合，提供靈活性。UniRL 的核心技術依賴於 Ray 分散式運算框架，這使得它能夠有效地管理計算資源，並支持大規模訓練。

與其他強化學習框架相比，UniRL 的優勢在於其對多模態模型的廣泛支持，並且能夠靈活地擴展到新的模型和算法。實際使用中，UniRL 需要安裝多個依賴包，並且對於大型模型的訓練，資源需求較高。社群活躍度中等，開發者可以透過 GitHub Issues 來反饋問題或需求。這個專案目前仍在發展中，未來可能會增加更多的模型和算法支持。適合需要在多模態環境中進行強化學習的研究者和開發者，特別是那些希望快速原型化和實驗的團隊。

**技術棧**：`Python` · `Ray` · `Hydra`

## 重點功能

- 統一的多模態模型訓練 — 支持多種模型和算法的組合，簡化訓練流程。
- 層次化的系統架構 — 透過 Hydra 配置來定義模型和算法，靈活性高。
- 分散式運算支持 — 基於 Ray 的運算框架，能夠有效管理計算資源。
- 多種算法支持 — 包含 Flow-DPPO 和 DRPO 等自家開發的算法，並提供詳細的教程。
- 即時更新和擴展 — 社群活躍，持續增加新的模型和算法支持。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt --no-build-isolation
```
2. 啟動訓練
```bash
python -m unirl.train_diffusion --config-name=diffusion/sd3_trainside --cfg job --resolve
```
3. 運行實驗
```bash
bash examples/run_experiment_single_node.sh diffusion/sd3_trainside
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝所有依賴包",
  "指令": "python -m unirl.train_diffusion --config-name=diffusion/sd3_trainside --cfg job --resolve",
  "預期輸出": "啟動訓練過程，並在終端顯示訓練進度和結果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 524 stars（175/天），forks 28（5.3%），這顯示出一定的社群關注度。開發者主要來自 Tencent-Hunyuan 團隊，這些人對於強化學習和多模態模型有深厚的背景。UniRL 解決了多模態模型訓練的複雜性，提供了一個統一的框架，讓研究者能夠更容易地進行實驗。近期的發佈和算法更新可能吸引了更多的使用者關注。這個工具的出現正好契合了強化學習和多模態模型日益增長的需求，特別是在 AI 基礎設施領域。forks/stars 比率顯示出使用者對於修改和擴展的興趣，這是社群活躍的指標。

## 適合誰使用

**目標受眾**：希望在多模態環境中進行強化學習實驗的研究者和開發者。

> [!example] 使用場景
> - 研究人員用它來訓練多模態強化學習模型，因為它提供了統一的框架和多種算法選擇，能夠快速進行實驗。
> - 開發者用它來整合不同的模型和算法，因為其靈活的配置方式讓他們能夠輕鬆地調整訓練流程。
> - 數據科學家用它來探索新型的強化學習算法，因為框架內建的教程和範例讓他們能夠快速上手。

## 架構分析

UniRL 採用層次化的架構設計，主要由多個入口點組成，這些入口點對應不同的模型和算法。每個入口點都能透過 Hydra 配置來定義訓練過程，並使用 Ray 進行分散式運算。這樣的設計使得框架能夠輕鬆擴展到新的模型和算法，並且能夠在多個計算節點上運行。選擇這種架構的代價在於需要較高的計算資源和複雜的依賴管理，但這也使得 UniRL 能夠支持大規模的訓練和實驗。擴展性方面，隨著模型和算法的增加，可能會面臨性能瓶頸，特別是在資源有限的情況下。

## 技術深入分析

UniRL 的核心機制是基於強化學習的訓練循環，這個循環包括生成樣本、計算優勢、更新策略等步驟。它使用了 Ray 作為分散式運算框架，這使得它能夠在多個計算節點上進行高效的訓練。框架的設計模式是層次化的，這意味著使用者可以根據需求選擇不同的模型和算法。這種設計的好處在於靈活性和可擴展性，但代價是需要較高的計算資源和複雜的依賴管理。技術風險方面，隨著模型和算法的增加，可能會面臨性能瓶頸，特別是在資源有限的情況下。整合方面，UniRL 可以與主流的深度學習框架（如 PyTorch）無縫協作，但對於 CI/CD 的整合可能需要額外的配置和調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含範例。安裝過程相對順暢，但需要注意依賴的管理。文件中有詳細的入門指南，對於新手來說友好度較高。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 支持多模態模型的靈活訓練，能夠滿足不同需求。
> - 內建多種算法和詳細的教程，降低了使用門檻。
> - 基於 Ray 的分散式運算，能夠有效利用計算資源。

> [!danger] 缺點
> - 需要較高的計算資源，對於小型團隊可能不友好。
> - 社群活躍度中等，問題回應速度可能較慢。
> - 目前支持的模型和算法仍在擴展中，可能不涵蓋所有需求。

> [!warning] 注意事項
> - 需要較高的計算資源，特別是對於大型模型的訓練。
> - 目前支持的模型和算法仍在擴展中，可能不涵蓋所有需求。
> - 社群活躍度中等，可能對於問題的回應速度較慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供強化學習的框架，但主要針對單一模態，無法像 UniRL 一樣靈活處理多模態。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性強化學習，與 UniRL 的多模態支持有所不同。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 雖然也涉及強化學習，但主要針對文本生成，無法處理影像或視頻。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於單一模態的強化學習，無法像 UniRL 一樣靈活處理多模態。 | 如果你的專案僅需處理單一模態的強化學習，這個工具可能更簡單易用。 | low，因為兩者的基本概念相似，遷移相對容易。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 主要針對文本生成的強化學習，無法處理影像或視頻。 | 如果你的專案專注於文本生成，這個工具可能更合適。 | medium，因為需要調整模型的結構和訓練流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **UniRL** | **agent-sprite-forge** | **daVinci-MagiHuman** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於單一模態的強化學習，無法像 UniRL 一樣靈活處理多模態。 | 主要針對文本生成的強化學習，無法處理影像或視頻。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，遷移相對容易。 | medium，因為需要調整模型的結構和訓練流程。 |
> | 適用場景 | 主要場景 | 如果你的專案僅需處理單一模態的強化學習，這個工具可能更簡單易 | 如果你的專案專注於文本生成，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合研究和實驗，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下安裝依賴時可能會出現衝突
  - 解法：確保使用虛擬環境進行安裝
- [MEDIUM] 使用大型模型時可能導致記憶體不足
  - 解法：調整模型大小或使用更強的硬體
- [MEDIUM] 某些算法的文檔不夠詳細，可能導致使用困難
  - 解法：參考社群討論或開啟 Issues 尋求幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究團隊進行多模態強化學習實驗 | 非常適合 | 框架的靈活性和擴展性能夠滿足多樣化需求。 |
| 小型團隊需要快速原型化 | 適合 | 提供了多種算法和範例，能夠快速上手。 |
| 個人開發者進行小型項目 | 普通 | 雖然框架功能強大，但資源需求可能超出個人能力。 |
| 企業生產環境中的核心應用 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到靈活的多模態強化學習框架，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，不存取敏感資料，但依賴的庫可能存在已知漏洞，建議定期檢查依賴的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

UniRL 最常與 PyTorch 和 Ray 搭配使用，通常在模型訓練和實驗階段進行整合。在一個使用 PyTorch 的專案中，可以透過 UniRL 來訓練多模態模型，具體做法是使用 `python -m unirl.train_diffusion` 指令來啟動訓練。對於 CI/CD，UniRL 可以與 GitHub Actions 整合，但可能需要額外的配置來確保依賴正確安裝。整合的摩擦點主要在於依賴管理和環境配置，特別是在使用不同版本的庫時。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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
| Forks | 28 |
| Open Issues | 10 |
| Issue 解決率 | 17% (2 closed) |
| 最後推送 | 2026-06-11 |
| 建立日期 | 2026-06-08 |
| 官方網站 | [Link](https://unirl-project.github.io/unirl/) |
| Repo 大小 | 29.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Tencent-Hunyuan/UniRL) |
| Topics | `ai-infrastructure` `reinforcement-learning` `sglang` `vllm` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `accelerate` `aiohttp` `diffusers` `easyocr` `hydra-core` `numpy` `omegaconf` `peft` `Pillow` `psutil` `ray` `requests` `safetensors` `sglang` `tensordict`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@celve](https://github.com/celve) | 7 |
> | [@Jayce-Ping](https://github.com/Jayce-Ping) | 2 |
> | [@CjhHa1](https://github.com/CjhHa1) | 2 |
> | [@haonan3](https://github.com/haonan3) | 2 |
> | [@Maekami](https://github.com/Maekami) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者可以透過 GitHub Issues 反饋問題或需求。
**連結**：[文件](https://unirl-project.github.io/unirl/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-10 ~ 2026-06-11）
> **活躍天數** 2 天 · **最新 commit** feat: per-phase step timing (perf/<phase>_time_s) via a logger-side hook (#37)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#25](https://github.com/Tencent-Hunyuan/UniRL/issues/25) | UniRL Roadmap Q2 2026 `feature` | 2 | 0 |
> | [#13](https://github.com/Tencent-Hunyuan/UniRL/issues/13) | Question about RL for Unified Models | 2 | 3 |
> | [#27](https://github.com/Tencent-Hunyuan/UniRL/issues/27) | Release Flow-DPPO aligned checkpoints on Hugging Face | 1 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> ### A Reinforcement Learning Framework for Unified Multimodal Models
> 
> **U**(you)·**ni**(need)·**RL** for unified multimodal intelligence
> 
> [](pyproject.toml)
> [](LICENSE)
> [](https://unirl-project.github.io/unirl/)
> [](assets/wechat_qr.jpg)
> 
> ## News 🚀
> 
> - **[2026-05]** **DRPO** released — *"Rethinking the Divergence Regularization in LLM RL"* ([arXiv](https://arxiv.org/abs/2606.09821)).
> - **[2026-06]** **Flow-DPPO** released — *"FlowDPPO: Divergence Proximal Policy Optimization for Flow Matching Models"* ([arXiv](https://arxiv.org/abs/2606.11025)).
> 
> ## About 💡
> 
> UniRL applies one RL post-training loop — generate samples, score them, compute
> advantages, update the policy, and sync weights back to rollout workers —
> across multimodal model families.
> 
>   
> 
> UniRL is a layered, composable system. Each **entrypoint** (`train_diffusion`,
> `train_ar`, `train_pe`, `train_unified_model`) loads a **Hydra example config**
> covering model, algorithm, rollout, reward, placement, and sync, then creates the
> matching domain **trainer** (`DiffusionTrainer`, `ARTrainer`, `PETrainer`,
> `UnifiedModelTrainer`). The trainer coordinates the RL loop across pluggable
> **rollout engines**, **algorithms**, **model bundles**, **reward services**, and
> the shared **distributed runtime**: Ray `DevicePool`, FSDP, Transfer
> Queue (TQ), and LoRA/full-weight sync. See [`unirl/README.md`](unirl/README.md) for the
> runtime loop, deployment modes, and module map.
> 
> ## Team-Proposed Algorithms 🌟
> 
> > **🌟 These algorithms are proposed by our team — the highlight of UniRL.** Each
> > algorithm's folder holds a step-by-step tutorial and a runnable example recipe.
> > We highly recommend trying them in our framework!
> 
> | Algorithm | Paper | Tutorial | Notes |
> |---|---|---|---|
> | **Flow-DPPO** | [*"Flow-DPPO: Divergence Proximal Policy Optimization for Flow Matching Models"*](https://arxiv.org/abs/2606.11025) | [FlowDPPO/](FlowDPPO/) | Diffusion/flow RL with an exact divergence-based trust-region mask. |
> | **DRPO** | [*"Rethinking the Divergence Regularization in LLM RL"*](https://arxiv.org/abs/2606.09821) | [DRPO/](DRPO/) | Token-level LLM RL with a smooth advantage-weighted quadratic regularizer. |
> 
> UniRL also wires in standard reference algorithms — **(LLM's)GRPO**, **DiffusionNFT**,
> **DanceGRPO**, and **MixGRPO** — in [`unirl/algorithms/`](unirl/algorithms/README.md).
> 
> ## Model Support 🎨
> 
> Model and algorithm support are **two independent dimensions** that compose within
> a domain: any diffusion algorithm (see above) runs on a diffusion
> model, AR algorithms on AR models — so UniRL covers many more model × algorithm
> combinations than the shipped example recipes alone. The table below is the model
> dimension; all listed models are supported (✅).
> 
> | Model | Category | Modality | Status |
> |---|---|---|---|
> | Stable Diffusion 3 / 3.5 | Image diffusion | Text → Image | ✅ |
> | Qwen-Image | Image diffusion | Text → Image | ✅ |
> | FLUX.2-Klein | Image diffusion | Text → Image | ✅ |
> | WAN 2.1 | Video diffusion | Text / Image → Video | ✅ |
> | WAN 2.2 | Video diffusion | Text / Image → Video | ✅ |
> | HunyuanVideo 1.0 / 1.5 | Video diffusion | Text → Video | ✅ |
> | Qwen-VL | Vision-language AR | Text + Image → Text | ✅ |
> | Qwen3 | LLM AR | Text → Text | ✅ |
> | Prompt-Enhancer | LLM + diffusion | Text → Text → Image | ✅ |
> | HunyuanImage3 | Unified AR + diffusion | Text → Image | ✅ |
> | Bagel | Unified AR + diffusion | Text → Image | ✅ |
> 
> Each model maps to a domain entrypoint (`train_diffusion`, `train_ar`, `train_pe`,
> `train_unified_model`); see **Getting Started** below to run any of them.
> 
> ## Training Modes 🧩
> 
> UniRL unifies four training modes, one Hydra example bucket and entrypoint each.
> Examples are self-contained YAML files selected with
> `--config-name=/`:
> 
> | Domain | Trains | Entrypoint | Example |
> |---|---|---|---|
> | `diffusion/` | Image / video diffusion models | `train_diffusion` | `diffusion/sd3_sglang_rollout_colocate` |
> | `ar/` | Autoregressive models — vision-language (VLM) + text-only (LLM) | `train_ar` | `ar/qwen_vl_grpo_geo3k_mc_4x8`, `ar/qwen3_drpo_4b_base_dapo_sglang` |
> | `pe/` | Prompt-enhancer (AR rewriter + diffusion reward) | `train_pe` | `pe/pe_sglang_full_pickscore` |
> | `unified_model/` | Unified AR + diffusion models | `train_unified_model` | `unified_model/hi3_vllmomni` |
> 
> See [`examples/README.md`](examples/README.md) for the full launch guide, naming
> schema, and how to add a recipe.
> 
> ## Getting Started ⚡
> 
> Install dependencies first — see [INSTALL.md](INSTALL.md).
> 
> ```bash
> # compose-check, then launch a single-node example
> python -m unirl.train_diffusion --config-name=diffusion/sd3_trainside --cfg job --resolve
> bash examples/run_experiment_single_node.sh diffusion/sd3_trainside
> ```
> 
> Full [launch guide](examples/README.md#running-a-recipe) — multi-node, every entrypoint, mooncake.
> 
> ## Roadmap 🗺️
> 
> We are actively expanding model and algorithm coverage. Near-term directions:
> 
> - Broaden algorithm coverage for the newer model families — FLUX.2-Klein,
>   HunyuanVideo 1.0 / 1.5, and Bagel.
> - Extend the team-proposed algorithms (Flow-DPPO, DRPO) to more model families.
> - Broaden reward backends and rollout-engine coverage across domains.
> 
> Want a model or algorithm prioritized? [Open an issue](https://github.com/Tencent-Hunyuan/UniRL/issues) to discuss.
> 
> ## Contributing 🤝
> 
> Contributions and questions are welcome. Before opening a pull request, read the
> repository conventions in [`AGENTS.md`](AGENTS.md), run the
> [pre-PR checks](examples/README.md#adding-or-editing-a-recipe) for the files you
> touched, and fill in the [pull request template](.github/pull_request_template.md).
> For questions, bug reports, and feature requests,
> [open an issue](https://github.com/Tencent-Hunyuan/UniRL/issues).
> 
> ## Acknowledgement 🙏
> 
> UniRL builds on ideas and infrastructure from the open-source RL and inference
> ecosystem. We especially thank
> [vLLM](https://github.com/vllm-project/vllm),
> [SGLang](https://github.com/sgl-project/sglang),
> [slime](https://github.com/THUDM/slime), and
> [verl](https://github.com/volcengine/verl).
> 
> ## Citation 📚
> 
> If you find UniRL helpful, please cite:
> 
> ```bibtex
> @misc{unirl_github,
>   title        = {{UniRL: A Reinforcement Learning Framework for Unified Multimodal Models}},
>   author       = {Haonan Wang and Linyu Wu and Qian Qiu and Lewei Jin and Bowen Ping and Jianghai Chen and Yiheng Du and Guangxin He and Yu Shi and Yongguang Lin and Zhuoxin Zhou and Zhanchao Zhou and Keming Wu and Rizhen Hu and Xuefei Ning and Lvfang Tao and Feiyu Hu and Xiangyan Liu and Siqi Kou and Jiarui Yao and Xiangxin Zhou and Liefeng Bo and Wenxi Zhu and Tianyu Pang},
>   year         = {2026},
>   howpublished = {\url{https://github.com/Tencent-Hunyuan/UniRL}},
>   urldate      = {2026-06-05}
> }
> ```
> 
> If you use DRPO, please also cite:
> 
> ```bibtex
> @misc{yao2026drpo,
>   title         = {{Rethinking the Divergence Regularization in LLM RL}},
>   author        = {Jiarui Yao and Xiangxin Zhou and Penghui Qi and Wee Sun Lee and Liefeng Bo and Tianyu Pang},
>   year          = {2026},
>   eprint        = {2606.09821},
>   archivePrefix = {arXiv},
>   primaryClass  = {cs.LG},
>   url           = {https://arxiv.org/abs/2606.09821}
> }
> ```
> 
> If you use Flow-DPPO, please also cite:
> 
> ```bibtex
> @misc{ping2026flowdppo,
>   title         = {{Flow-DPPO: Divergence Proximal Policy Optimization for Flow Matching Models}},
>   author        = {Bowen Ping and Xiangxin Zhou and Penghui Qi and Minnan Luo and Liefeng Bo and Tianyu Pang},
>   year          = {2026},
>   eprint        = {2606.11025},
>   archivePrefix = {arXiv},
>   primaryClass  = {cs.LG},
>   url           = {https://arxiv.org/abs/2606.11025}
> }
> ```

## 延伸閱讀

相關概念：[[強化學習]] · [[多模態]] · [[分散式運算]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/Tencent-Hunyuan/UniRL) · [官方網站](https://unirl-project.github.io/unirl/)

## 相關收錄

> [!note]- 直接競品（同子分類：強化學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "強化學習" AND file.name != "Tencent-Hunyuan--UniRL"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Tencent-Hunyuan--UniRL"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Tencent-Hunyuan--UniRL" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "Tencent-Hunyuan--UniRL"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["強化學習","多模態","分散式運算"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Tencent-Hunyuan--UniRL" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Tencent-Hunyuan--UniRL" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Tencent-Hunyuan" AND file.name != "Tencent-Hunyuan--UniRL"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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
> const me = dv.page("Repos/Tencent-Hunyuan--UniRL");
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

> **2026-06-12** — 首次收錄
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

- [[2026-06-12|2026-06-12]] — 首次收錄，524 stars
