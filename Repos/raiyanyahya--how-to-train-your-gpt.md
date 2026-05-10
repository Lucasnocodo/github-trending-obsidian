---
repo: raiyanyahya/how-to-train-your-gpt
url: https://github.com/raiyanyahya/how-to-train-your-gpt
owner: raiyanyahya
owner_type: User
language: Jupyter Notebook
license: MIT
description: "Build a modern LLM from scratch. Every line commented. Explained like we are five."
homepage: ""
stars: 790
stars_per_day: 132
forks: 107
open_issues: 0
created: 2026-05-03
pushed_at: 2026-05-07
first_seen: 2026-05-10
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "教育資源"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-10
use_case: "從零開始構建現代大型語言模型，適合對 GPT 架構感興趣的開發者。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-17"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 154
readme_length: 9510
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-10"
star_history: "2026-05-10:790"
tags:
  - github
  - "category/開發工具"
  - "lang/jupyter notebook"
  - "topic/attention_mechanism"
  - "topic/deep_learning"
  - "topic/educational"
  - "topic/from_scratch"
  - "topic/gpt"
aliases:
  - "how-to-train-your-gpt"
  - "raiyanyahya/how-to-train-your-gpt"
  - "從零開始構建現代大型語言模型，適合對 GPT 架構感興趣的開發者。"
---

# how-to-train-your-gpt

**790** stars · **132** stars/天 · 建立 6 天前 · Jupyter Notebook · MIT

```dataviewjs
const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`attention-mechanism` `deep-learning` `educational` `from-scratch` `gpt` `language-model` `llama` `llm` `machine-learning` `natural-language-processing` `python` `pytorch` `tokenisation` `transformers` `tutorial`

> [!summary] 一句話摘要
> 從零開始構建現代大型語言模型，適合對 GPT 架構感興趣的開發者。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (132 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 GPT 架構感興趣的 Python 開發者，尤其是那些希望從基礎開始學習機器學習的初學者。
> **一句話重點** 這個專案不僅教你如何構建 LLM，還讓你理解每個步驟背後的邏輯，適合所有想深入學習的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "教育資源" && p.file.name !== "raiyanyahya--how-to-train-your-gpt" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 教育資源 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** low
> **結論** 花 10 小時學習，5 小時整合，得到深入理解 LLM 的能力，值得投入。

> [!abstract] 核心創新
> 這個專案以簡單易懂的方式教學如何從零開始構建一個現代的語言模型，並提供詳細的註解和實例。

## 專案簡介

這個專案提供了一個完整的指南，教你如何從頭開始構建一個現代的語言模型，特別是 GPT 架構。整個過程分為 12 章，每章都遵循四步驟結構：類比、實例、註解代碼和圖示，讓即使是對機器學習毫無經驗的人也能輕鬆理解。使用者將學會如何處理 tokenization、embedding、注意力機制等核心概念，並在最後能夠運行自己的 GPT 模型。這個指南的賣點在於每一行代碼都有詳細的註解，讓學習者能夠理解每個決策背後的原因。技術上，這個專案使用了 PyTorch 進行深度學習，並採用了最新的技術如 RoPE 和 RMSNorm，這些技術在現代 LLM 中被廣泛使用。

與傳統的機器學習教程相比，這個專案不僅提供了理論知識，還讓使用者能夠實際編寫代碼，從而深入理解模型的內部運作。這個專案的設計使得學習者能夠在不需要高深數學背景的情況下，掌握複雜的概念，並能夠在實際應用中運用所學知識。對於希望深入了解 GPT 架構的開發者來說，這是一個非常有價值的資源。未來，隨著 LLM 技術的進步，這個專案可能會持續更新以反映最新的研究成果。

**技術棧**：`Python` · `Jupyter Notebook` · `PyTorch`

## 重點功能

- 逐步教學 — 每章節遵循類比、實例、註解代碼和圖示的結構，讓學習者能夠輕鬆理解複雜概念。
- 詳細註解 — 每行代碼都有註解，解釋其功能和背後的邏輯，適合零基礎學習者。
- 實作完整模型 — 包含從 tokenization 到訓練和推理的完整過程，讓學習者能夠實際運行自己的模型。
- 最新技術 — 採用 RoPE、RMSNorm 等現代技術，幫助學習者掌握當前 LLM 的最佳實踐。
- 互動式學習 — 提供 Jupyter Notebook 讓學習者可以實時運行代碼，觀察模型的學習過程。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/raiyanyahya/how-to-train-your-gpt.git
```
2. 創建虛擬環境
```bash
python -m venv gpt_env
```
3. 啟動虛擬環境
```bash
source gpt_env/bin/activate # Mac/Linux
```
4. 安裝依賴
```bash
pip install torch tiktoken datasets numpy matplotlib --index-url https://download.pytorch.org/whl/cpu
```
5. 開始閱讀
```bash
open chapters/00_overview.md
```

## 程式碼範例

```jupyter notebook
{
  "前置條件": "安裝了 PyTorch 和相關依賴",
  "指令": "python main.py",
  "預期輸出": "訓練模型的過程將在終端中顯示。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 790 stars（132/天），forks 107（13.5%），顯示出強烈的社群興趣。這位作者 raiyanyahya 以教育為主題，過去的作品也專注於簡化機器學習的複雜性，這次的專案解決了許多新手在學習 LLM 時的困惑，提供了清晰的步驟和豐富的註解。這個專案的出現正好填補了市場上對於深入理解 LLM 架構的需求，特別是對於那些希望從基礎開始學習的開發者來說。社群的反應熱烈，顯示出這種學習方式的有效性。

## 適合誰使用

**目標受眾**：對 GPT 架構感興趣的 Python 開發者，尤其是那些希望從基礎開始學習機器學習的初學者。

> [!example] 使用場景
> - Python 開發者用它來從零開始構建自己的 GPT 模型，因為這個指南提供了詳細的步驟和註解，讓他們能夠理解每個部分的運作原理。
> - 學生用它來深入理解 Transformer 架構，因為這個專案不僅提供了代碼，還有豐富的解釋和實例，幫助他們掌握複雜的概念。
> - 工程師用它來評估 LLM 架構的優缺點，因為這個專案涵蓋了最新的技術和設計決策，讓他們能夠做出更明智的選擇。

## 架構分析

這個專案採用的是解碼器為主的 Transformer 架構，設計上強調可讀性和可理解性。每個章節都針對特定的概念進行深入探討，並提供實際的代碼示例。資料流從 tokenization 開始，經過 embedding、注意力計算，最終到達模型的訓練和推理階段。

選擇這種架構的原因在於其在 NLP 任務中的有效性和靈活性，並且能夠輕鬆地擴展到更大的模型。這個設計的代價是需要較高的計算資源，特別是在訓練階段，對於大型模型來說，可能需要使用 GPU 來加速計算。整體而言，這個架構的擴展性良好，但在處理極大規模資料時可能會遇到瓶頸。

## 技術深入分析

這個專案的核心技術機制是基於 Transformer 架構，特別是解碼器部分。它使用了 RoPE 和 RMSNorm 等現代技術來提高模型的性能和穩定性。這些技術的選擇使得模型在訓練過程中能夠更快收斂，並且在推理時能夠保持高效。效能上，這個專案的模型可以在 CPU 上運行，但對於大型模型，建議使用 GPU 以獲得更好的性能。設計上，這個專案的代碼結構清晰，易於理解，並且每個部分都有詳細的註解，這對於學習者來說是非常友好的。技術上，這個專案的依賴關係相對簡單，主要依賴於 PyTorch 和相關的數據處理庫，這降低了學習和整合的難度。整體而言，這個專案在技術上是穩定的，但隨著使用者對模型的需求增加，可能需要進一步的優化和擴展。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質高，結構清晰且有豐富的範例；安裝過程順暢，沒有明顯的坑；提供了良好的入門指南，適合新手學習；目前僅有英文文件，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供詳細的註解，適合初學者理解。
> - 涵蓋最新的 LLM 技術，保持與時俱進。
> - 互動式學習方式，能夠實時觀察模型的學習過程。

> [!danger] 缺點
> - 對於完全沒有編程經驗的人來說，仍然有一定的學習曲線。
> - 需要較高的計算資源來訓練大型模型。
> - 專案可能會隨著技術進步而需要更新，維護成本較高。

> [!warning] 注意事項
> - 僅支援 CPU 和 GPU 環境，對於某些使用者可能需要額外配置。
> - 需要基本的 Python 知識，對於完全沒有編程經驗的人來說可能有一定難度。
> - 訓練大型模型需要較高的計算資源，對於普通電腦可能無法完成。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個專案專注於構建 AI agent，而本專案則專注於從零開始構建 LLM，適合對模型架構有興趣的開發者。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 這個專案提供 GPT-2 的 API 接口，而本專案則教學如何從頭構建一個類似的模型，適合想深入了解內部運作的學習者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個專案專注於構建 AI agent，使用了不同的設計模式和架構，與本專案的 LLM 教學有明顯的區別。 | 如果你的目標是構建一個可以自主行動的 AI agent，而不僅僅是語言模型，則這個專案更合適。 | medium，因為需要重新學習不同的架構和設計模式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 這個專案提供 GPT-2 的 API 接口，主要用於快速調用，而本專案則著重於從零開始構建模型，適合深入學習。 | 如果你需要快速集成 GPT-2 的功能，而不需要深入了解其內部運作，則這個專案更合適。 | low，因為可以直接使用 API 而無需修改代碼。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **how-to-train-your-gpt** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個專案專注於構建 AI agent，使用了不同的設計模式和架構，與本專案的 LLM 教學有明顯的區別。 | 這個專案提供 GPT-2 的 API 接口，主要用於快速調用，而本專案則著重於從零開始構建模型，適合深入學習。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的架構和設計模式。 | low，因為可以直接使用 API 而無需修改代碼。 |
> | 適用場景 | 主要場景 | 如果你的目標是構建一個可以自主行動的 AI agent，而不 | 如果你需要快速集成 GPT-2 的功能，而不需要深入了解其內 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和實驗，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，安裝依賴可能會出現衝突，特別是 PyTorch 的版本問題。
  - 解法：確保使用正確的 Python 版本和虛擬環境，並根據官方文檔安裝相應的 PyTorch 版本。
- [MEDIUM] 對於大型模型，訓練時間可能會非常長，特別是在 CPU 上。
  - 解法：建議使用 GPU 進行訓練，以提高效率。
- [MEDIUM] 初學者可能會在理解注意力機制時遇到困難。
  - 解法：可以參考其他資源或視頻教程來補充理解。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 NLP 專案 | 非常適合 | 這個專案提供了從零開始的完整教學，適合小型團隊進行原型開發。 |
| 大型企業的生產環境 | 不適合 | 目前仍處於 alpha 階段，穩定性和性能尚未達到生產要求。 |
| 教育機構的課程設計 | 非常適合 | 這個專案的教學方式非常適合用於教學，能夠幫助學生深入理解 LLM 的運作。 |
| 個人學習和實驗 | 非常適合 | 對於希望深入了解 LLM 的開發者來說，這是一個極好的學習資源。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到深入理解 LLM 的能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個專案不需要高權限，且不會存取敏感資料，使用時的安全性相對較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案主要與 Python 和 Jupyter Notebook 生態系統整合，適合用於教育和研究環境。在典型的工作流中，它可以作為教學工具，幫助學生理解 LLM 的運作。整合時，使用者可以直接在 Jupyter Notebook 中運行代碼，觀察模型的學習過程。與主流的 IDE（如 VS Code）相容性良好，並且可以輕鬆地在 CI/CD pipeline 中進行測試和部署。整合的摩擦點主要在於需要確保正確的環境配置，特別是在安裝依賴時可能會遇到問題。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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
| Forks | 107 |
| Open Issues | 0 |
| 最後推送 | 2026-05-07 |
| 建立日期 | 2026-05-03 |
| Repo 大小 | 154 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/raiyanyahya/how-to-train-your-gpt) |
| Topics | `attention-mechanism` `deep-learning` `educational` `from-scratch` `gpt` `language-model` `llama` `llm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Jupyter Notebook" : 85
>     "Python" : 15
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@raiyanyahya](https://github.com/raiyanyahya) | 20 |

## 社群與生態

**社群活躍度**：社群活躍度高，經常有更新和互動。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-05 ~ 2026-05-07）
> **活躍天數** 3 天 · **最新 commit** fix line count to reflect the new actual count

## README 摘錄

> [!info]- 展開查看原文 README
> # 🧠 How to Train Your GPT
> 
> > *A guide to building a world-class language model from absolute scratch. Taught like you're five. Built like you're an engineer.*
> >
> > *I made this with the goal of learning something I didn't understand completely. Specifically the attention part. I use AI a lot to understand key concepts and verifying them.*
> 
>   
>   
>   
>   
>   
>   
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> ```bash
> 
> # 3. Install dependencies (CPU version — for GPU see below)
> pip install torch tiktoken datasets numpy matplotlib --index-url https://download.pytorch.org/whl/cpu
> 
> 
> # Install everything you need
> pip install jupyter tiktoken torch numpy datasets matplotlib --index-url https://download.pytorch.org/whl/cpu
> 
> 
> ## 📖 How to Read
> 
> Each chapter follows the same **4-step structure**:
> 
> | Step | Format | Purpose |
> |---|---|---|
> | 1️⃣ **Analogy** | Plain English, 5-year-old level | Build intuition before math |
> | 2️⃣ **Worked Example** | Real numbers traced through | See exactly what happens |
> | 3️⃣ **Annotated Code** | Every line: `WHAT` + `WHY` | Understand every decision |
> | 4️⃣ **Diagram** | Mermaid flowchart or ASCII | Visualize data flow |
> 
> > 💡 **Tip:** Lost in the code? Jump back to the analogy. Confused by the math? Skip to the worked example.
> 
> ---
> 
> 
> # 4. Verify GPU (optional but recommended)
> python -c "import torch; print(f'CUDA: {torch.cuda.is_available()}')"
> 
> 
> ## 🤔 Why This Exists
> 
> Most ML tutorials fall into one of two traps:
> 
> | ❌ Too Shallow | ❌ Too Academic | ✅ This Guide |
> |---|---|---|
> | `model = GPT().fit(data)` | 40-page papers, dense notation | 5-year-old analogies → full working code |
> | You learn to call APIs | Assumes PhD in ML | Zero ML experience required |
> | No understanding of internals | No worked examples | Every line annotated with WHAT & WHY |
> 
> **The goal:** After finishing, you won't just know that attention "works". You'll understand the variance argument behind `1/√d_k`. How RoPE captures relative position through rotation. Why pre-norm beats post-norm for deep networks. And exactly where every gradient flows during backpropagation.
> 
> ---
> 
> 
> ## 📖 What Is This?
> 
> This is a **12-chapter, 3,900+ line interactive textbook** that teaches you how to build, train and run a modern language model from absolute scratch. The same family of architecture behind ChatGPT, Claude, LLaMA and Mistral.
> 
> You won't just read about Transformers. You'll **write every line yourself**: tokenizer, embeddings, attention, training loop, inference engine. Every single line annotated to explain **what** it does and **why** it's there.
> 
> ---
> 
> 
> ## 👥 Who Is This For?
> 
> | 🧑‍💻 You Are... | 📚 You Need... |
> |---|---|
> | A Python developer curious about how ChatGPT actually works | Basic Python (functions, classes, lists). No ML experience |
> | A student who wants to deeply understand Transformers | Willingness to read ~3,500 lines of commented code |
> | An engineer evaluating LLM architectures | Understanding of tradeoffs (RoPE vs learned, RMSNorm vs LayerNorm) |
> | Someone who got lost at "attention" in other tutorials | Party analogy + worked numeric example with real numbers |
> 
> **🔧 Prerequisites:** Python basics (variables, functions, classes, `pip install`). That's it. No calculus, no linear algebra, no PyTorch experience required. We teach those as we go.
> 
> ---
> 
> 
> ## 🗺️ Chapters
> 
> | Chapter | What You'll Learn |
> |---|---|
> | **[0: Overview](chapters/00_overview.md)** | What is a GPT? The big picture |
> | **[1: Setup](chapters/01_setup.md)** | Install tools, GPU vs CPU, venv, PyTorch basics |
> | **[2: Tokenization](chapters/02_tokenization.md)** | BPE walkthrough: how "unbelievably" becomes tokens |
> | **[3: Embeddings](chapters/03_embeddings.md)** | How numbers become meaning. king − man + woman = queen |
> | **[4: Positional Encoding](chapters/04_positional_encoding.md)** | RoPE: why LLaMA rotates vectors, not adds numbers |
> | **[5: Attention](chapters/05_attention.md)** | ⭐ THE CORE. Q,K,V, scaling, causal mask, 8-step walkthrough |
> | **[6: Transformer Block](chapters/06_transformer_block.md)** | RMSNorm, SwiGLU, residuals, pre-norm vs post-norm |
> | **[7: Complete GPT Model](chapters/07_gpt_model.md)** | 151M parameter model (with SwiGLU), weight tying, logits explained |
> | **[8: Training Pipeline](chapters/08_training.md)** | Cross-entropy, backprop, AdamW, cosine warmup, mixed precision |
> | **[9: Inference](chapters/09_inference.md)** | KV cache, temperature, top-k/p, beam search, repetition penalty |
> | **[10: Full Script](chapters/10_full_script.md)** | Runnable `main.py`: everything in one file |
> | **[11: Glossary](chapters/11_glossary.md)** | Architecture provenance table, parameter breakdown |
> 
> > ⭐ **Start with [Chapter 0](chapters/00_overview.md) and read sequentially.** Each builds on the previous.
> 
> ---
> 
> 
> ## 🏗️ What You'll Build
> 
> | 🧩 Component | 📝 Lines | 💡 What You'll Understand |
> |---|---|---|
> | **BPE Tokenizer** | ~60 | How GPT-4 splits "unbelievably" → "un" + "believ" + "ably" |
> | **Embeddings** | ~30 | How "cat" and "dog" end up near each other in 768D space |
> | **RoPE** | ~70 | Why LLaMA rotates vectors instead of adding position numbers |
> | **Multi-Head Attention** | ~120 | The exact 8-step computation behind every modern LLM |
> | **Transformer Block** | ~50 | Why residual connections are the "gradient highway" |
> | **Full GPT Model** | ~200 | 151M parameter model with SwiGLU, weight tying and pre-norm |
> | **Training Pipeline** | ~250 | AdamW, cosine warmup, mixed precision, gradient accumulation |
> | **Inference Engine** | ~80 | KV cache, temperature, top-k/p, beam search |
> 
> > 💎 **~860 lines of core model code, ~2,600 lines of explanation and diagrams**
> 
> ---
> 
> 
> ## 🏛️ Architecture
> 
> This guide implements the **latest publicly-documented** decoder-only Transformer:
> 
> | 🧬 Technique | 📦 Source Model | ⚡ Why It Matters |
> |---|---|---|
> | **RoPE** | LLaMA, Mistral, Qwen | Relative position without learned parameters |
> | **RMSNorm** | LLaMA, Mistral, Gemma | 15% faster than LayerNorm, equally effective |
> | **SwiGLU** | PaLM, LLaMA, Gemini | Learns which information to pass or block |
> | **Pre-Norm** | GPT-3, all modern | Stable training at 100+ layers |
> | **AdamW** | GPT-3+ | Better generalization than vanilla Adam |
> | **BPE** | GPT-2/3/4 | Handles any text. Even unseen words and emoji |
> | **Weight Tying** | GPT-2/3 | Saves 30% parameters, improves training signal |
> | **Mixed Precision** | All production LLMs | 2× speed, half memory, same quality |
> 
> > ℹ️ GPT-4 and Claude architectures are proprietary/undisclosed. This teaches the best publicly-confirmed architecture: what LLaMA 3, Mistral and Qwen 2.5 use.
> 
> ---
> 
> 
> # 1. Clone
> git clone https://github.com/raiyanyahya/how-to-train-your-gpt.git
> cd how-to-train-your-gpt
> 
> 
> # 2. Create environment
> python -m venv gpt_env
> source gpt_env/bin/activate          # Mac/Linux
> 
> # gpt_env\Scripts\activate           # Windows
> 
> 
> # 5. Start reading!
> open chapters/00_overview.md
> ```
> 
> Run the training script:
> 
> ```bash
> python main.py
> ```
> 
> This uses the tiny config (d_model=256, 4 layers) by default. Training takes a few minutes on CPU. For the GPT-2 scale config (151M params, 768 dims, 12 layers), edit the config in main.py and uncomment the larger configuration.
> 
> > 💻 The default config uses a tiny model (d_model=256, 4 layers, 17M params) that runs in minutes on CPU. For the full GPT-2 scale (151M params, 768 dims, 12 layers), edit the config in `main.py` and uncomment the larger configuration. You'll need a GPU for that one.
> 
> ---
> 
> 
> ## 📓 Jupyter Notebooks
> 
> Alongside the textbook, each chapter has a companion notebook you can run live. These strip away the explanations and give you pure, clean code that executes from top to bottom. If the textbook teaches you why, the notebooks let you see it happen.
> 
> We're going to run this whole project on a very small dataset so you can watch training happen in minutes rather than weeks. Every notebook is self-contained — open it, run all cells, and you'll see the model learn in real time.
> 
> ```bash
> 
> # Star

## 延伸閱讀

相關概念：[[Transformer]] · [[深度學習]] · [[自然語言處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[mattpocock--dictionary-of-ai-coding|mattpocock/dictionary-of-ai-coding]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/raiyanyahya/how-to-train-your-gpt)

## 相關收錄

> [!note]- 直接競品（同子分類：教育資源）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "教育資源" AND file.name != "raiyanyahya--how-to-train-your-gpt"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "raiyanyahya--how-to-train-your-gpt"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Jupyter Notebook" AND file.name != "raiyanyahya--how-to-train-your-gpt" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "raiyanyahya--how-to-train-your-gpt"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Transformer","深度學習","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "raiyanyahya--how-to-train-your-gpt" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "raiyanyahya--how-to-train-your-gpt" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "raiyanyahya" AND file.name != "raiyanyahya--how-to-train-your-gpt"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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
> const me = dv.page("Repos/raiyanyahya--how-to-train-your-gpt");
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

> **2026-05-10** — 首次收錄
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

- [[2026-05-10|2026-05-10]] — 首次收錄，790 stars
