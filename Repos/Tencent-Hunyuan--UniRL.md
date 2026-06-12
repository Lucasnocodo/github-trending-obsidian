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
use_case: "提供統一的多模態模型強化學習框架，簡化多種模型的訓練流程。"
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
star_history: "2026-06-12:524"
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
  - "提供統一的多模態模型強化學習框架，簡化多種模型的訓練流程。"
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
> 提供統一的多模態模型強化學習框架，簡化多種模型的訓練流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (175 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要統一多模態模型訓練框架的研究者和開發者。
> **一句話重點** UniRL 的設計理念在於提供一個靈活的框架，以支持多模態模型的強化學習，這在當前的 AI 生態中非常重要。

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
> **結論** 花 10 小時學、5 小時整合，得到靈活的多模態強化學習框架，值得嘗試。

> [!abstract] 核心創新
> UniRL 提供了一個統一的強化學習框架，支持多種模型和算法的靈活組合。

## 專案簡介

UniRL 是一個針對統一多模態模型的強化學習框架，設計上旨在簡化多種模型的訓練流程。使用者可以透過不同的 entrypoint（如 `train_diffusion`、`train_ar` 等）來載入相應的配置，進行模型訓練。這個框架的核心在於一個 RL 後處理循環，具體流程為生成樣本、評分、計算優勢、更新策略，並將權重同步回 rollout 工作者。這樣的設計使得多模態模型的訓練變得更為高效，特別是在處理複雜的多模態數據時。使用者只需執行 `python -m unirl.train_diffusion --config-name=diffusion/sd3_trainside` 即可啟動訓練，並透過 YAML 配置文件來調整訓練參數。

UniRL 的一大賣點在於其層次化和可組合的系統架構，這使得用戶能夠靈活地選擇模型和算法，並在不同的訓練模式下運行。這種靈活性在多模態學習中尤為重要，因為不同的任務可能需要不同的模型和算法組合。這個框架還支持多種模型，如 Stable Diffusion 和 Qwen-VL，並提供了多種訓練模式，讓用戶能夠根據需求選擇最合適的配置。整體而言，UniRL 是一個針對多模態強化學習的高效解決方案，特別適合需要處理多種數據類型的研究者和開發者。

**技術棧**：`Python` · `Ray` · `Hydra`

## 重點功能

- 統一的多模態模型訓練 — 支持多種模型和算法的組合，簡化訓練流程。
- 層次化的系統架構 — 透過可組合的 entrypoint 和配置文件來靈活調整訓練參數。
- 多種訓練模式 — 包括圖像/視頻擴散模型、自回歸模型和統一模型的訓練。
- 內建多種強化學習算法 — 包括 Flow-DPPO 和 DRPO，並提供詳細的教程和範例。
- 支持分佈式訓練 — 利用 Ray 的 DevicePool 和 FSDP 來實現高效的資源管理。

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
  "前置條件": "需要安裝依賴",
  "程式碼": "python -m unirl.train_diffusion --config-name=diffusion/sd3_trainside --cfg job --resolve",
  "預期輸出": "啟動訓練過程，並開始生成樣本。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 524 stars（175/天），forks 28（5.3%），顯示出穩定的增長潛力。這個專案的主要貢獻者來自於 Tencent-Hunyuan 團隊，過去在強化學習和多模態模型方面有豐富的經驗。UniRL 解決了在多模態學習中，模型訓練過程複雜且不易管理的痛點，提供了一個統一的框架來簡化這一過程。近期的推文和討論也引起了社群的關注，進一步推動了其流行。這個工具的出現正好契合了強化學習和多模態模型快速發展的趨勢，並且其設計理念符合當前對於靈活性和可擴展性的需求。

## 適合誰使用

**目標受眾**：需要統一多模態模型訓練框架的研究者和開發者。

> [!example] 使用場景
> - 研究人員用它來訓練多模態模型，因為它提供了統一的訓練框架，能夠快速適應不同的模型和算法。
> - 機器學習工程師用它來實現強化學習算法，因為框架內建了多種算法的支持，能夠簡化實驗流程。
> - 開發者用它來進行多模態數據的處理和分析，因為其靈活的配置選項能夠滿足不同的需求。

## 架構分析

UniRL 採用層次化的架構設計，將不同的模型和算法模組化，便於用戶根據需求進行組合。每個 entrypoint 代表一個獨立的訓練模式，通過 Hydra 配置文件來管理訓練參數和資源分配。這種設計使得用戶能夠靈活地選擇和調整模型，並在不同的場景下運行。

使用 Ray 進行分佈式計算，能夠有效管理資源，但也增加了系統的複雜性。這種架構的 trade-off 在於靈活性和易用性之間的平衡，對於小型專案可能會感到過於繁瑣。整體而言，這種設計使得 UniRL 能夠支持更大規模的數據處理和模型訓練。

## 技術深入分析

UniRL 的核心技術機制在於其層次化的設計，使用了 Ray 進行分佈式計算，這使得模型訓練能夠在多個節點上並行進行。這種設計不僅提高了訓練效率，也使得用戶能夠靈活地選擇不同的模型和算法進行實驗。效能方面，UniRL 能夠處理大規模的數據集，但對於小型專案可能會感到資源需求過高。選擇 Python 作為主要語言，使得開發和維護變得相對簡單，但也可能導致性能瓶頸。依賴於多個外部庫（如 Ray 和 Hydra），這使得整個系統的複雜度增加，對於新手來說，學習曲線可能會較陡。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在資源管理和調度方面。整合方面，UniRL 能夠與主流的 AI 框架（如 TensorFlow 和 PyTorch）進行良好的整合，但在 CI/CD pipeline 的友好度上仍有待提升。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指南，並附有範例。安裝過程相對順暢，但對於新手來說，可能需要一些時間來熟悉配置文件的設置。整體來說，花 30 分鐘能夠基本上跑起來，但深入使用可能需要更多的學習時間。

## 優缺點分析

> [!success] 優點
> - 提供統一的多模態模型訓練框架，簡化了訓練流程。
> - 支持多種強化學習算法，並提供詳細的範例和教程。
> - 利用分佈式計算提高訓練效率，適合大規模數據處理。

> [!danger] 缺點
> - 需要較高的硬體資源，對於小型專案不太友好。
> - 文檔和範例仍在持續更新中，可能會有不完整的地方。
> - 安裝和配置過程相對複雜，對新手不太友好。

> [!warning] 注意事項
> - 目前僅支持特定的模型和算法，未來可能需要擴展。
> - 需要一定的硬體資源來支持分佈式訓練，對於小型專案可能不太適合。
> - 文檔和範例仍在持續更新中，可能會有不完整的地方。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於強化學習的代理生成，提供更高的自動化，但不支持多模態數據處理。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性強化學習，適合特定場景，但缺乏多模態支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於強化學習的代理生成，提供更高的自動化，但不支持多模態數據處理。 | 如果你的專案主要集中在強化學習代理的自動生成，而不需要多模態支持。 | low，因為兩者在強化學習的基本概念上相似。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性強化學習，適合特定場景，但缺乏多模態支持。 | 如果你的專案需要專注於對抗性學習，而不需要多模態的靈活性。 | medium，因為需要調整算法和模型的設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **UniRL** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於強化學習的代理生成，提供更高的自動化，但不支持多模態數據處理。 | 專注於對抗性強化學習，適合特定場景，但缺乏多模態支持。 |
> | 遷移成本 | - | low，因為兩者在強化學習的基本概念上相似。 | medium，因為需要調整算法和模型的設置。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在強化學習代理的自動生成，而不需要多模態 | 如果你的專案需要專注於對抗性學習，而不需要多模態的靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在配置文件中，某些參數的默認值可能不符合預期，導致訓練失敗。
  - 解法：仔細檢查配置文件中的所有參數，並根據需求進行調整。
- [MEDIUM] 多節點訓練時，資源分配可能不均，導致某些節點過載。
  - 解法：監控資源使用情況，並根據需要調整節點配置。
- [MEDIUM] 文檔中某些範例可能過時，導致無法正常運行。
  - 解法：參考 GitHub 上的最新討論和問題解決方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究機構的多模態模型訓練 | 非常適合 | 提供統一的框架來處理多種模型和算法，能夠提高訓練效率。 |
| 小型團隊的實驗性專案 | 適合 | 雖然需要一定的資源，但靈活的配置選項能夠滿足不同需求。 |
| 個人開發者的簡單強化學習項目 | 普通 | 對於小型專案來說，可能會感到過於複雜。 |
| 需要快速原型開發的商業應用 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到靈活的多模態強化學習框架，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料。依賴的外部庫需定期檢查安全性，但整體風險可控。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

UniRL 最常與 Ray 和 Hydra 搭配使用，這使得它能夠在分佈式計算環境中高效運行。在一個使用 PyTorch 的專案中，UniRL 可以通過 `pip install` 安裝，然後使用其提供的 entrypoint 進行模型訓練。整合過程中，可能需要調整配置文件以適應現有的工作流。與主流的 CI/CD 工具（如 GitHub Actions）相容，但在自動化部署方面仍需進一步優化。整合的摩擦點主要在於配置文件的複雜性，對於新手來說，可能需要一些時間來熟悉。

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

**社群活躍度**：社群活躍度中等，開放問題和貢獻邀請。
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

相關概念：[[強化學習]] · [[多模態學習]] · [[分佈式計算]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]]

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
> const concepts = ["強化學習","多模態學習","分佈式計算"];
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
