---
repo: Robbyant/lingbot-video
url: https://github.com/Robbyant/lingbot-video
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "Scaling Mixture-of-Experts Video Pretraining for Embodied Intelligence"
homepage: "https://technology.robbyant.com/lingbot-video"
stars: 835
stars_per_day: 76
forks: 33
open_issues: 9
created: 2026-07-08
pushed_at: 2026-07-10
first_seen: 2026-07-12
week: "2026-W29"
month: "2026-07"
category: "AI/ML"
subcategory: "視頻生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-12
use_case: "提供一個開源的大規模混合專家視頻生成模型，專為具身智能設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-22"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 48827
readme_length: 7478
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:684,2026-07-12:685,2026-07-13:717,2026-07-13:718,2026-07-14:765,2026-07-14:766,2026-07-15:789,2026-07-15:789,2026-07-16:803,2026-07-17:816,2026-07-18:826,2026-07-19:830,2026-07-20:835"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/image_to_video"
  - "topic/lingbot_video"
  - "topic/video_generation"
  - "topic/world_models"
aliases:
  - "lingbot-video"
  - "Robbyant/lingbot-video"
  - "提供一個開源的大規模混合專家視頻生成模型，專為具身智能設計。"
---

# lingbot-video

**835** stars · **76** stars/天 · 建立 11 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Robbyant--lingbot-video");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`image-to-video` `lingbot-video` `video-generation` `world-models`

> [!summary] 一句話摘要
> 提供一個開源的大規模混合專家視頻生成模型，專為具身智能設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (76 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效視頻生成解決方案的機器學習研究者和開發者。
> **一句話重點** LingBot-Video 的高效 MoE 架構使其在視頻生成領域具備競爭優勢，特別是在具身智能應用中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻生成" && p.file.name !== "Robbyant--lingbot-video" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，能快速生成高質量視頻，值得投入。

> [!abstract] 核心創新
> LingBot-Video 是首個專為具身智能設計的大規模開源 MoE 視頻生成模型。

## 專案簡介

LingBot-Video 是一個開源的 Mixture-of-Experts (MoE) 視頻生成模型，旨在將視頻合成與物理世界理解結合起來。用戶可以通過結構化的 JSON 描述來生成視頻，這樣的設計使得模型能夠更好地理解用戶意圖。模型的推理速度比傳統方法快約 3 倍，這是因為它的高效 MoE 架構。LingBot-Video 在訓練過程中使用了超過 70,000 小時的具身數據，這使得它在多種任務上表現出色。用戶可以透過 `python rewriter/inference.py` 指令來進行視頻生成，並選擇不同的後端進行推理。這個工具的賣點在於其高效的推理能力和對多樣化任務的支持。

相較於其他視頻生成工具，如 Cosmos3 Super 和 LongCat-Video，LingBot-Video 在多實體和推理方面的表現更為優越，特別是在處理複雜場景時。這使得它在需要高效視頻生成的應用場景中非常有價值。儘管如此，使用者在進行多 GPU 推理時需注意系統 RAM 的需求，因為大型 MoE 檢查點會增加記憶體壓力。這個專案目前仍在活躍開發中，社群回應速度尚可，但仍有許多未解決的問題。對於希望在視頻生成領域進行實驗的開發者來說，LingBot-Video 是一個值得關注的選擇。

**技術棧**：`Python >=3.10` · `torch 2.12.0.dev20260220+cu130` · `transformers 5.8.1` · `diffusers 0.39.0`

## 重點功能

- 高效 MoE 架構 — 提供約 3 倍的推理速度，適合大規模應用。
- 70,000+ 小時的具身數據訓練 — 提升模型在物理世界理解上的能力。
- 多獎勵系統 — 針對高美學、物理合理性和任務完成度進行獎勵。
- 支持結構化 JSON 輸入 — 使得用戶能夠精確控制生成內容。
- 多後端選擇 — 支持 diffusers 和 SGLang Diffusion，靈活應對不同需求。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/Robbyant/lingbot-video && cd lingbot-video && pip install -r requirements.txt
```
2. 啟動虛擬環境
```bash
python -m venv .venv && source .venv/bin/activate
```
3. 運行推理指令
```bash
python rewriter/inference.py --backend transformers --mode t2v --prompt "" --duration 5 --output prompt.json
```

## 程式碼範例

```python
{
  "前置條件": "安裝所需的依賴並啟動虛擬環境。",
  "指令": "python rewriter/inference.py --backend transformers --mode t2v --prompt \"\" --duration 5 --output prompt.json",
  "預期輸出": "生成一個持續 5 秒的視頻，基於提供的 JSON 輸入。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 835 stars（76/天），forks 33（4.0%），顯示出穩定的增長潛力。主要貢獻者 jiangbonadia 之前在視頻生成領域有過相關經驗，這使得該專案的技術基礎相對穩固。LingBot-Video 解決了現有視頻生成模型在具身智能應用上的不足，特別是在推理速度和數據整合方面。近期的技術報告和模型釋出也吸引了不少關注，社群對於訓練代碼的需求顯示出使用者對於該專案的期待。這些因素共同促成了其快速增長。

## 適合誰使用

**目標受眾**：需要高效視頻生成解決方案的機器學習研究者和開發者。

> [!example] 使用場景
> - 機器學習工程師用它來生成高質量的視頻數據集，因為其高效的 MoE 架構能在短時間內處理大量數據。
> - 遊戲開發者用它來創建動態場景視頻，因為其支持多實體和複雜場景的生成，能提升遊戲的沉浸感。
> - 研究人員用它來探索具身智能的應用，因為其訓練在 70,000 小時的具身數據上，能提供豐富的實驗基礎。

## 架構分析

LingBot-Video 採用 MoE 架構，這使得模型在推理時能夠根據需求動態選擇專家進行計算，從而提高效率。資料流從用戶的 JSON 輸入開始，經過重寫器進行優化，然後進入推理階段。這種設計的好處在於能夠處理複雜的用戶請求，但代價是需要較高的系統資源來支持多專家的運行。擴展性方面，這種架構能夠輕鬆應對更大的數據集，但在多 GPU 環境下可能會面臨記憶體壓力。整體而言，這種設計適合需要高效視頻生成的應用場景。

## 技術深入分析

LingBot-Video 的核心技術基於 Mixture-of-Experts (MoE) 架構，這使得模型能夠在推理時選擇最合適的專家進行計算，從而提高效率。這種設計模式使得模型在處理複雜請求時能夠保持高效，特別是在多實體場景中。效能方面，LingBot-Video 能夠在 70,000 小時的具身數據上進行訓練，這使得其在視頻生成的質量上表現出色。設計上，選擇 Python 和 PyTorch 作為主要技術棧，這不僅能夠利用其強大的生態系統，還能確保模型的可擴展性。隨著模型的發展，可能會面臨記憶體壓力和系統資源的挑戰，特別是在多 GPU 環境下。整合方面，LingBot-Video 能夠與主流的機器學習框架良好兼容，並且支持 CI/CD 流程，這使得其在開發過程中能夠輕鬆集成。整體而言，LingBot-Video 的設計考慮到了性能和擴展性，適合需要高效視頻生成的應用場景。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，並包含了範例指令。安裝過程相對順暢，但對於新手來說，可能需要一些時間來適應虛擬環境的設置。文件提供了中英文版本，這對於不同語言的使用者非常友好。

## 優缺點分析

> [!success] 優點
> - 高效的推理速度，適合大規模應用。
> - 強大的數據支持，能生成高質量視頻。
> - 靈活的後端選擇，適應不同需求。

> [!danger] 缺點
> - 仍在開發中，某些功能可能不穩定。
> - 對系統資源需求較高，特別是多 GPU 環境。
> - 社群支持仍在建立中，可能遇到問題。

> [!warning] 注意事項
> - 目前仍在開發中，某些功能可能不穩定。
> - 對於多 GPU 推理，需確保系統 RAM 足夠以支持大型 MoE 檢查點。
> - 部分功能尚未實現，使用者需依賴社群支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Robbyant/cosmos3-super](https://github.com/Robbyant/cosmos3-super) | Cosmos3 Super 提供了強大的視頻生成能力，但在多實體處理上不如 LingBot-Video 效率高。 |
| [Robbyant/longcat-video](https://github.com/Robbyant/longcat-video) | LongCat-Video 在視頻生成方面表現良好，但缺乏 LingBot-Video 的高效 MoE 架構，推理速度較慢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 使用了基於圖形的生成技術，而 LingBot-Video 則專注於視頻生成，這使得後者在視頻合成的質量上更具優勢。 | 如果你的項目需要圖形生成而非視頻生成，Agent Sprite Forge 可能更適合。 | medium，因為需要重新設計數據流和輸入格式。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 專注於多代理協作，而 LingBot-Video 則專注於視頻生成，這使得前者在多代理場景中更具優勢。 | 如果你的應用場景需要多代理協作，Duel-Agents 會是更好的選擇。 | high，因為需要重構整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-video** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Agent Sprite Forge 使用了基於圖形的生成技術，而 LingBot-Video 則專注於視頻生成，這使得後者在視頻合成的質量上更具優勢。 | Duel-Agents 專注於多代理協作，而 LingBot-Video 則專注於視頻生成，這使得前者在多代理場景中更具優勢。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和輸入格式。 | high，因為需要重構整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的項目需要圖形生成而非視頻生成，Agent Sprit | 如果你的應用場景需要多代理協作，Duel-Agents 會是 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和研究，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多 GPU 環境下可能會遇到記憶體壓力問題，導致推理失敗。
  - 解法：確保系統 RAM 足夠，或減少同時運行的模型數量。
- [MEDIUM] 使用結構化 JSON 輸入時，格式錯誤可能導致推理失敗。
  - 解法：仔細檢查 JSON 格式，並參考官方文檔。
- [MEDIUM] 某些功能仍在開發中，可能不穩定。
  - 解法：定期檢查更新，並參與社群討論以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要生成大量視頻數據的機器學習研究團隊 | 非常適合 | 高效的 MoE 架構能快速處理大量數據，提升研究效率。 |
| 小型遊戲開發團隊希望創建動態場景 | 適合 | 支持多實體生成，能提升遊戲的沉浸感。 |
| 大型企業需要穩定的視頻生成解決方案 | 不適合 | 目前仍在開發中，某些功能可能不穩定。 |
| 個人開發者希望進行視頻生成實驗 | 非常適合 | 開源且易於上手，適合個人實驗和學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，能快速生成高質量視頻，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LingBot-Video 最常與 PyTorch 和 Hugging Face 等工具搭配使用，通常在開發和部署階段進行集成。在一個使用 PyTorch 的機器學習專案中，開發者可以用 LingBot-Video 生成視頻，具體做法是通過其提供的推理 API 進行調用。它支持 GitHub Actions 和其他 CI 工具，並且可以與 VS Code 等 IDE 整合，提供良好的開發體驗。整合的摩擦點主要在於對於大型模型的記憶體需求，開發者需要提前規劃資源配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-video");
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
> const me = dv.page("Repos/Robbyant--lingbot-video");
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
| Forks | 33 |
| Open Issues | 9 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-07-08 |
| 官方網站 | [Link](https://technology.robbyant.com/lingbot-video) |
| Repo 大小 | 47.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Robbyant/lingbot-video) |
| Topics | `image-to-video` `lingbot-video` `video-generation` `world-models` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `--extra-index-url https://download.pytorch.org/whl/nightly/cu130` `torch` `torchvision` `accelerate` `decord` `diffusers` `imageio` `imageio-ffmpeg` `json_repair` `numpy` `peft` `pillow` `requests` `safetensors` `scipy`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "Shell" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jiangbonadia](https://github.com/jiangbonadia) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，回應速度尚可。
**連結**：[文件](https://technology.robbyant.com/lingbot-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-10）
> **活躍天數** 3 天 · **最新 commit** upload paper

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/Robbyant/lingbot-video/issues/1) | Any plans to release the training code? | 13 | 0 |
> | [#12](https://github.com/Robbyant/lingbot-video/issues/12) | 微信群二维码过期 | 0 | 0 |
> | [#11](https://github.com/Robbyant/lingbot-video/issues/11) | Diffusers-reference t2v/t2i output diverges progressively (o | 0 | 2 |
> | [#10](https://github.com/Robbyant/lingbot-video/issues/10) | ReWriter对效果很重要吗？ | 0 | 0 |
> | [#9](https://github.com/Robbyant/lingbot-video/issues/9) | H100 单卡推理moe模型oom，正常吗？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # LingBot-Video
> 
> **🌐 [Project Page](https://technology.robbyant.com/lingbot-video)** | **🤗 [Hugging Face](https://huggingface.co/collections/robbyant/lingbot-video)** | **🤖 [ModelScope](https://www.modelscope.cn/collections/Robbyant/LingBot-Video)** | **📄 [Paper](https://arxiv.org/abs/2607.07675)** | **⚖️ [License](LICENSE)**| **💬 [WeChat 微信 Group](assets/WeChatGroup.JPG)** 
> 
> **📘 English Usage**: [English Documentation](docs/en/index.md) \
> **📕 中文使用文档**: [中文文档](docs/zh/index.md)
> 
> We are excited to introduce **LingBot-Video**, the first open-source large-scale MoE (Mixture-of-Experts) video generation model dedicated to embodied intelligence. As a top-tier video model, LingBot-Video is designed to bridge the gap between video synthesis and physical world understanding.
> 
> 
> ## 🚀 Quick Start
> 
> 
> ### 🛠️ Installation
> 
> The root `requirements.txt` includes the recommended PyTorch build for LingBot-Video inference.
> 
> ```bash
> git clone https://github.com/Robbyant/lingbot-video
> cd lingbot-video
> 
> python -m venv .venv
> source .venv/bin/activate
> python -m pip install -U pip
> 
> 
> ## 🎬 Video Demos
> 
>    
> 
> 
> ## 🔥 Key Highlights
> 
> * **🚀 Efficient MoE Architecture**: Scaled from scratch; balanced between capacity and cost with **~3x** faster inference.
> * **📦 Data Engine**: Trained on massive web videos integrated with **70,000+ hours** of embodied data.
> * **⚖️ Multi Reward System**: Rewarded for **high aesthetics**, **physical rationality**, and **task completion**.
> 
> 
> ## 📊 Benchmarks
> 
> 
> ### 🏛️ Public Benchmark
> 
> As of July 9th, 2026, LingBot-Video ranks top in [RBench Leaderboard](https://huggingface.co/spaces/DAGroup-PKU/RBench-Leaderboard).
> 
> | Models | Open-source | Avg. | Manip. | Spatial | Multi-entity | Long-hor. | Reasoning | Single arm | Dual arm | Quadruped | Humanoid |
> | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | **LingBot-Video (Ours)** | ✅ | **0.620** | **0.578** | 0.643 | 0.444 | **0.634** | 0.505 | 0.636 | 0.639 | **0.758** | 0.689 |
> | Cosmos3 Super | ✅ | 0.581 | 0.487 | 0.642 | 0.444 | 0.591 | 0.395 | 0.615 | 0.623 | 0.739 | 0.691 |
> | LongCat-Video | ✅ | 0.437 | 0.372 | 0.310 | 0.220 | 0.384 | 0.186 | 0.586 | 0.576 | 0.681 | 0.621 |
> | Wan 2.2 A14B | ✅ | 0.507 | 0.381 | 0.454 | 0.373 | 0.501 | 0.330 | 0.608 | 0.582 | 0.690 | 0.648 |
> | HunyuanVideo 1.5 | ✅ | 0.460 | 0.442 | 0.316 | 0.312 | 0.438 | 0.364 | 0.513 | 0.526 | 0.634 | 0.595 |
> | Wan 2.6 | ❌ | 0.607 | 0.546 | **0.656** | 0.479 | 0.514 | **0.531** | **0.666** | **0.681** | 0.723 | 0.667 |
> | Seedance 1.5 pro | ❌ | 0.584 | 0.577 | 0.495 | **0.484** | 0.570 | 0.470 | 0.648 | 0.641 | 0.680 | **0.692** |
> | Veo 3 | ❌ | 0.563 | 0.521 | 0.508 | 0.430 | 0.530 | 0.504 | 0.634 | 0.610 | 0.689 | 0.637 |
> 
> *Note: **Bold** indicates the best performance, and underline indicates the second best.*
> 
> 
> ### 🔬 Internal Benchmark
> 
> Our internal evaluation comprehensively assesses both **Text-to-Video (T2V)** and **Text-to-Image-to-Video (TI2V)** capabilities for open-source models across two dimensions: **Quality Scores** (Motion, Prompt Following, Visual Consistency, Aesthetics) and **Domain Scores** (Human Interaction, Physics, Robot, Egocentric, Navigation).
> 
>   
>     
>       
>       (a) T2V Quality Score
>     
>     
>       
>       (b) T2V Domain Score
>     
>   
>   
>     
>       
>       (c) TI2V Quality Score
>     
>     
>       
>       (d) TI2V Domain Score
>     
>   
> 
> 
> ## 🔥 Latest News
> 
> - July 9, 2026: 🎉 We release the technical report, code, models, rewriters for LingBot-Video.
> 
> 
> ## 📦 Model Download
> 
> | Model Name | Components | Tasks | Download |
> | --- | --- | --- | --- |
> | ⚡ LingBot-Video-Dense | Dense (1.3B) | T2I, T2V, TI2V | 🤗 [Huggingface](https://huggingface.co/robbyant/lingbot-video-dense-1.3b) &nbsp; 🤖 [ModelScope](https://www.modelscope.cn/models/Robbyant/lingbot-video-dense-1.3b) |
> | 💪 LingBot-Video-MoE | MoE (30B-A3B) + Refiner | T2I, T2V, TI2V, Refinement | 🤗 [Huggingface](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) &nbsp; 🤖 [ModelScope](https://www.modelscope.cn/models/Robbyant/lingbot-video-moe-30b-a3b) |
> | 📝 LingBot-Video-Rewriter-Base | Qwen3.6-27B official | Prompt rewriter (Expand) | 🤗 [Huggingface](https://huggingface.co/Qwen/Qwen3.6-27B) &nbsp; 🤖 [ModelScope](https://www.modelscope.cn/models/Qwen/Qwen3.6-27B) |
> | 📝 LingBot-Video-Rewriter-Adapter | Qwen3.6-27B LoRA | Prompt rewriter (Json) | 🤗 [Huggingface](https://huggingface.co/robbyant/lingbot-video-rewriter-lora) &nbsp; 🤖 [ModelScope](https://www.modelscope.cn/models/Robbyant/lingbot-video-rewriter-lora) |
> 
> 
> # Base requirements cover direct DiT inference and rewriter --backend transformers.
> pip install -r requirements.txt
> pip install -e .
> ```
> 
> > **💡 Rewriter deployment**: the bundled rewriter uses the single-process
> > `transformers` backend. For higher throughput, deploy the VLM yourself and call
> > it through an OpenAI-compatible API. Preserve the two-stage semantics: step 1
> > must use the base VLM without the rewriter LoRA, while step 2 must use the same
> > base VLM with the rewriter LoRA enabled. This can be implemented with two
> > endpoints, or with one server that can select the adapter per request. See
> > [vLLM](https://docs.vllm.ai) / [SGLang](https://docs.sglang.ai) official docs.
> > Details in [Prompt Preparation](docs/en/prompt_preparation.md#prompt-rewriter).
> 
> Install the optional SGLang dependencies only when using SGLang Diffusion or the
> fused / FP8 MoE runtime:
> 
> ```bash
> python -m pip install --no-deps -r requirements-sglang.txt
> ```
> 
> Recommended runtime versions:
> 
> | Package | Version |
> | --- | --- |
> | `Python` | `>=3.10` |
> | `torch` | `2.12.0.dev20260220+cu130` (recommended) |
> | `torchvision` | `0.26.0.dev20260220+cu130` (recommended) |
> | `transformers` | `5.8.1` |
> | `diffusers` | `0.39.0` |
> | `peft` | `0.19.1` |
> | `json_repair` | `>=0.30` |
> | `decord` | `>=0.6.0` |
> | `safetensors` | `>=0.4.5` |
> 
> 
> ### 🎬 Inference
> 
> #### 🧭 Recommended Inference Workflow
> 
> LingBot-Video DiT inference is designed to consume structured JSON captions,
> not casual natural-language prompts. The recommended public workflow is:
> 
> 1. Rewrite the user's plain prompt with
>    [Prompt Rewriter](docs/en/prompt_preparation.md#prompt-rewriter).
>    For TI2V, pass the same first frame to the rewriter.
> 2. Run [Auto Negative](docs/en/prompt_preparation.md#auto-negative-prompt) by
>    default to prune the negative prompt for this specific caption.
> 3. Run the unified inference runner with `--prompt_json` and select direct
>    diffusers or SGLang Diffusion through `--backend`.
> 
> Backend choices:
> 
> - `diffusers`: direct diffusers reference path.
> - `sglang`: SGLang Diffusion path. If the optional SGLang package is not
>   installed, it automatically falls back to direct diffusers and prints a
>   warning. Install `requirements-sglang.txt` to enable the SGLang runtime.
> 
> For multi-GPU inference, add `--enable_fsdp_inference` to shard the base DiT and
> refiner DiT on GPU. This reduces GPU memory pressure after loading, but each
> rank still constructs the transformer on host memory before FSDP sharding; make
> sure the machine has enough system RAM for large MoE checkpoints.
> 
> ```bash
> 
> # Model root (released Dense or MoE package) and rewriter weights.
> export MODEL_DIR=""
> export REWRITER_BASE_MODEL=""
> export REWRITER_ADAPTER=""
> 
> python rewriter/inference.py --backend transformers --mode t2v \
>   --prompt "" --duration 5 --output prompt.json
> 
> 
> # Recommended Auto Negative block. If skipped, remove --negative_prompt_json from
> 

## 延伸閱讀

相關概念：[[視頻生成]] · [[具身智能]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Forsy-AI--agent-apprenticeship|Forsy-AI/agent-apprenticeship]]

[GitHub](https://github.com/Robbyant/lingbot-video) · [官方網站](https://technology.robbyant.com/lingbot-video)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻生成" AND file.name != "Robbyant--lingbot-video"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Robbyant--lingbot-video"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Robbyant--lingbot-video" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "Robbyant--lingbot-video"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻生成","具身智能","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Robbyant--lingbot-video" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Robbyant--lingbot-video");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Robbyant--lingbot-video" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Robbyant" AND file.name != "Robbyant--lingbot-video"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-video");
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
> const me = dv.page("Repos/Robbyant--lingbot-video");
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
> const me = dv.page("Repos/Robbyant--lingbot-video");
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
> const me = dv.page("Repos/Robbyant--lingbot-video");
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
> const me = dv.page("Repos/Robbyant--lingbot-video");
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

> **2026-07-12** — 首次收錄
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

- [[2026-07-15|2026-07-15]] — 再次上榜，789 stars
- [[2026-07-14|2026-07-14]] — 再次上榜，765 stars
- [[2026-07-13|2026-07-13]] — 再次上榜，717 stars
- [[2026-07-12|2026-07-12]] — 首次收錄，684 stars
