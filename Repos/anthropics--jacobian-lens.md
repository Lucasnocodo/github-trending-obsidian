---
repo: anthropics/jacobian-lens
url: https://github.com/anthropics/jacobian-lens
owner: anthropics
owner_type: Organization
language: Python
license: Apache-2.0
description: " Companion code for the global workspace interpretability paper"
homepage: ""
stars: 894
stars_per_day: 149
forks: 131
open_issues: 3
created: 2026-07-02
pushed_at: 2026-07-02
first_seen: 2026-07-09
week: "2026-W28"
month: "2026-07"
category: "AI/ML"
subcategory: "模型解釋"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-09
use_case: "提供一個可解釋性工具，讓使用者能夠分析語言模型的內部激活與輸出之間的關係。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1930
readme_length: 3725
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-09"
star_history: "2026-07-09:891,2026-07-09:894"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "jacobian-lens"
  - "anthropics/jacobian-lens"
  - "提供一個可解釋性工具，讓使用者能夠分析語言模型的內部激活與輸出之間的關係。"
---

# jacobian-lens

**894** stars · **149** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/anthropics--jacobian-lens");
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
> 提供一個可解釋性工具，讓使用者能夠分析語言模型的內部激活與輸出之間的關係。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (149 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對語言模型內部運作有興趣的研究人員和開發者。
> **一句話重點** Jacobian lens 提供了一種深入理解語言模型內部運作的工具，特別適合對模型解釋性有需求的研究者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/anthropics--jacobian-lens");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模型解釋" && p.file.name !== "anthropics--jacobian-lens" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模型解釋 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，能夠獲得深入的模型解釋能力，值得投入。

> [!abstract] 核心創新
> 提供了一種新的方法來分析語言模型的內部激活與輸出之間的關係。

## 專案簡介

Jacobian lens 是一個用於分析語言模型內部激活的工具，透過將某一層的激活向量線性轉換到最終層的基底，並解碼成詞彙的排名列表。這個過程使用了模型的輸入-輸出雅可比矩陣的平均值，能夠揭示模型在特定層級的行為。使用者可以透過 `jlens.JacobianLens.from_pretrained` 來加載預訓練的 lens，並使用 `lens.apply` 方法來應用於特定的文本輸入，獲取每一層的 logits。這個工具的設計旨在幫助研究人員理解語言模型的內部運作，特別是在特定的層和位置上。技術上，它依賴於 PyTorch 和 Hugging Face 的 Transformers 庫，並且需要 Python 3.10 以上的環境。

與其他解釋性工具相比，Jacobian lens 提供了更細緻的層級分析，能夠在多層次上追蹤模型的決策過程。這樣的設計使得使用者能夠針對特定的詞彙或激活進行深入分析，從而理解模型的行為。雖然目前的實作是參考版本，並未進行優化，但對於學術研究和模型解釋仍然具備相當的價值。使用者需注意，這個工具的性能可能會受到模型大小和訓練數據的影響，並且在使用過程中需要一定的計算資源來支持模型的反向傳播。整體來說，這是一個針對語言模型內部運作的有力分析工具，適合對模型解釋性有需求的研究者和開發者。

**技術棧**：`Python 3.10` · `PyTorch` · `Transformers`

## 重點功能

- Jacobian lens 應用 — 使用 `lens.apply` 方法，能夠獲取特定文本輸入的每層 logits。
- 自定義模型適配 — 支援 Hugging Face 的模型，使用 `jlens.from_hf` 方法輕鬆加載。
- 模型擬合功能 — 使用 `jlens.fit` 方法，能夠在自己的模型上擬合 lens，並保存結果。
- 互動式可視化 — 提供可視化工具，讓使用者能夠在不同層級和位置上進行分析。
- 開源實作 — 提供 Apache-2.0 授權，使用者可以自由使用和修改。

## 快速開始

1. 安裝專案
```bash
pip install -e .
```
2. 加載模型和 tokenizer
```bash
hf = transformers.AutoModelForCausalLM.from_pretrained('org/model').cuda()
```
3. 應用預訓練的 lens
```bash
lens_logits, model_logits, _ = lens.apply(model, '你的文本輸入', positions=[-2])
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 transformers 和 jlens",
  "import transformers, jlens",
  "hf = transformers.AutoModelForCausalLM.from_pretrained('org/model').cuda()",
  "tok = transformers.AutoTokenizer.from_pretrained('org/model')",
  "model = jlens.from_hf(hf, tok)",
  "lens = jlens.JacobianLens.from_pretrained('org/lens-repo', filename='model/lens.pt')",
  "lens_logits, model_logits, _ = lens.apply(model, 'Fact: The currency used in the country shaped like a boot is', positions=[-2])",
  "for layer, logits in sorted(lens_logits.items()):",
  "    print(layer, [tok.decode([t]) for t in logits[0].topk(5).indices])",
  "# 預期輸出：每層的 top-5 詞彙及其排名"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 894 stars（149/天），forks 131（14.7%），顯示出不錯的社群關注度。這個專案的作者 mntss 之前在語言模型解釋性方面有過相關研究，這次的工具提供了一個之前缺乏的分析方法。該工具的出現正好填補了對語言模型內部運作理解的需求，特別是在學術界和開發者社群中。此專案的快速增長可能也受到相關論文的推廣影響。forks/stars 比率為 14.7%，顯示出相對較高的實際使用和修改意圖。

## 適合誰使用

**目標受眾**：對語言模型內部運作有興趣的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來分析語言模型在特定層的行為，因為它能提供每層激活對最終輸出的影響。
> - 機器學習工程師用它來調整模型參數，因為能夠清楚地看到哪些詞彙在不同層級的影響力。
> - 教育工作者用它來教學語言模型的內部運作，因為它提供了可視化的分析工具，幫助學生理解模型的決策過程。

## 架構分析

這個專案的架構主要基於 PyTorch 和 Hugging Face 的 Transformers 庫，設計上旨在提供一個可擴展的模型解釋工具。核心機制是透過雅可比矩陣來分析模型的內部激活，這樣的設計使得使用者能夠在不同層級上進行細緻的分析。資料流方面，使用者可以加載模型和 tokenizer，然後透過 `fit` 方法擬合 lens，最終使用 `apply` 方法來獲取每層的 logits。這種設計的代價在於需要較高的計算資源來進行模型的反向傳播，特別是在大型模型上。擴展性方面，這個工具能夠輕鬆適配 Hugging Face 的多種模型，但對於非 Hugging Face 的模型則無法使用，這可能會限制其應用範圍。

## 技術深入分析

Jacobian lens 的核心技術機制是透過雅可比矩陣來分析模型的內部激活，這使得使用者能夠在特定層和位置上追蹤模型的決策過程。這個工具能夠處理的資料量取決於模型的大小和訓練數據的質量，通常需要大量的樣本來達到良好的擬合效果。設計上選擇了 PyTorch 作為底層框架，這樣的選擇使得模型的訓練和推論能夠高效進行，但也帶來了對計算資源的高需求。由於目前的實作是參考版本，並未進行性能優化，因此在大型模型上可能會遇到瓶頸。這個工具的設計取捨在於提供強大的分析能力，但在性能和資源需求上可能會有所妥協。整合方面，與 Hugging Face 的模型整合良好，使用者可以輕鬆地將其納入現有的工作流中，並且能夠在 CI/CD pipeline 中進行測試和驗證。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含範例程式碼。安裝過程相對順暢，但需要注意 Python 版本的要求。文件中有提供入門指南，但缺乏多語言支持，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供細緻的層級分析，能夠揭示模型的內部運作。
> - 支援 Hugging Face 的多種模型，易於集成。
> - 開源且有良好的文檔支持，適合學術研究和開發者使用。

> [!danger] 缺點
> - 需要較高的計算資源，可能不適合資源有限的環境。
> - 目前版本未經過性能優化，對於大型模型的支持有限。
> - 不支援非 Hugging Face 的模型，限制了應用範圍。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要較高的計算資源來支援模型的反向傳播。
> - 目前版本未進行性能優化，可能在大型模型上運行緩慢。
> - 不支援非 Hugging Face 的模型。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了不同的模型解釋工具，專注於行為生成，而非內部激活分析。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於模型的安全性和穩定性，與本專案的解釋性分析有所不同。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供了多代理系統的解釋性工具，適合多代理環境下的分析需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於行為生成的模型解釋工具，與本專案的內部激活分析不同。 | 如果需要針對模型行為進行生成分析，這個工具會更合適。 | medium，因為需要重新調整分析的重點和方法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於模型的安全性和穩定性，與本專案的解釋性分析有所不同。 | 如果你的重點在於模型的安全性和穩定性，這個工具會更適合。 | low，因為主要是功能上的切換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **jacobian-lens** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於行為生成的模型解釋工具，與本專案的內部激活分析不同。 | 專注於模型的安全性和穩定性，與本專案的解釋性分析有所不同。 |
> | 遷移成本 | - | medium，因為需要重新調整分析的重點和方法。 | low，因為主要是功能上的切換。 |
> | 適用場景 | 主要場景 | 如果需要針對模型行為進行生成分析，這個工具會更合適。 | 如果你的重點在於模型的安全性和穩定性，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合學術研究和實驗性質的專案，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型模型上運行時可能會遇到性能瓶頸，特別是在擬合過程中。
  - 解法：考慮使用更小的模型或減少擬合樣本數。
- [MEDIUM] 不支援非 Hugging Face 的模型，限制了應用範圍。
  - 解法：使用 Hugging Face 的模型進行實驗。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 學術研究團隊分析語言模型的內部運作 | 非常適合 | 提供了深入的模型解釋工具，能夠揭示內部激活的影響。 |
| 小型創業團隊開發語言模型應用 | 適合 | 能夠幫助團隊理解模型的行為，進行調整和優化。 |
| 大型企業的生產環境 | 不適合 | 目前版本尚未穩定，且性能需求較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠獲得深入的模型解釋能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具本身不需要高權限，且不會存取敏感資料，但使用時需注意模型的授權和數據來源的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Jacobian lens 最常與 Hugging Face 的模型搭配使用，通常在模型分析和解釋的環節中。實際整合範例包括在使用 Hugging Face 的 Transformers 庫時，通過 `from_pretrained` 方法加載模型，然後使用 `jlens` 進行分析。與主流 CI 工具（如 GitHub Actions）相容，能夠在自動化測試中進行模型解釋的驗證。整合的摩擦點主要在於對模型的依賴性，使用者需確保使用的模型與工具相容。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/anthropics--jacobian-lens");
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
> const me = dv.page("Repos/anthropics--jacobian-lens");
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
| Forks | 131 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-02 |
| 建立日期 | 2026-07-02 |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/anthropics/jacobian-lens) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 63
>     "HTML" : 31
>     "Jupyter Notebook" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mntss](https://github.com/mntss) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放的問題數量不多，但解決率較低。
**連結**：[文件](https://transformer-circuits.pub/2026/workspace/index.html)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-01）
> **活躍天數** 1 天 · **最新 commit** Initial release

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/anthropics/jacobian-lens/issues/2) | Interest in a contributed swap-intervention implementation? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # jlens — Jacobian lens
> 
> > **Reference implementation.** Not maintained and not accepting contributions.
> 
> Companion code for [**Verbalizable Representations Form a Global Workspace in
> Language Models**](https://transformer-circuits.pub/2026/workspace/index.html).
> 
> The Jacobian lens reads out what an internal activation is disposed to make the
> model say. It linearly transports a residual-stream vector at any layer and
> position into the final-layer basis, then decodes it with the model's own
> unembedding into a ranked list of vocabulary tokens.
> 
> The transport is the average input–output Jacobian over a text corpus:
> 
> ```
> lens_l(h) = unembed( J_l @ h ), J_l = E[∂h_final / ∂h_l]
> ```
> 
> The expectation is over prompts, source positions, and all current-and-future
> target positions in a generic web-text corpus; the precise estimator
> (cotangents summed over target positions, then averaged over source positions)
> is documented in the [`jlens.fitting`](jlens/fitting.py) module docstring.
> 
> This repo fits the lens on open-weights decoder transformers, applies it, and
> renders the interactive layer × position view shown below. Examples use Qwen;
> other HuggingFace decoders adapt cleanly.
> 
> *The ASCII-face example: selecting the `^` (nose) position shows the lens
> reading out "nose" at mid layers, although the word never appears in the
> prompt.*
> 
> ## Install
> 
> ```bash
> pip install -e .
> ```
> 
> ## Usage
> 
> ### Apply
> 
> To apply a pre-fitted lens:
> 
> ```python
> import transformers, jlens
> 
> hf = transformers.AutoModelForCausalLM.from_pretrained("org/model").cuda()
> tok = transformers.AutoTokenizer.from_pretrained("org/model")
> model = jlens.from_hf(hf, tok)
> 
> lens = jlens.JacobianLens.from_pretrained("org/lens-repo", filename="model/lens.pt")
> lens_logits, model_logits, _ = lens.apply(
>     model, "Fact: The currency used in the country shaped like a boot is",
>     positions=[-2])
> for layer, logits in sorted(lens_logits.items()):
>     print(layer, [tok.decode([t]) for t in logits[0].topk(5).indices])
> ```
> 
> ### Fit
> 
> To fit a lens on your own model:
> 
> ```python
> lens = jlens.fit(model, prompts=my_prompts, checkpoint_path="out/ckpt.pt")
> lens.save("out/jacobian_lens.pt")
> ```
> 
> The paper's lenses use 1000 sequences of 128 tokens from a pretraining-like
> corpus. Quality saturates quickly (§9.3); ~100 prompts is usable. This is a
> reference implementation and is not optimized; fitting time is dominated by
> the model's own backward pass. Parallelize by running `fit()` on disjoint
> slices and combining with `JacobianLens.merge()`.
> 
> ## Walkthrough
> 
> [`walkthrough.ipynb`](walkthrough.ipynb) is the end-to-end notebook: load a
> model, load (or fit) a lens, apply it at a few layers, and render a slice page
> like the one above.
> 
> Reading a slice page:
> 
> - Each cell shows the lens top-1 word at that (position, layer); the
>   superscript is its rank over the full vocabulary.
> - Click a cell to select a (position, layer) and pin its top-1 token; pinned
>   tokens get rank-tracking charts and a rank heatmap.
> - The bottom row (`L = n_layers − 1`) is the model's actual output.
> 
> ## License and data
> 
> Code is released under the Apache License 2.0 — see [LICENSE](LICENSE).
> 
> The replication and lens-eval prompt sets in [`data/`](data/) are synthetic,
> authored by Anthropic, and released under the same Apache License 2.0 as the
> code. See the READMEs in [`data/experiments/`](data/experiments/) and
> [`data/evaluations/`](data/evaluations/) for what each set contains.
> 
> The slice-vis pages use [d3](https://github.com/d3/d3) (ISC license), loaded
> from the jsDelivr CDN with subresource integrity or inlined into
> self-contained pages.
> 
> No model weights or text corpora are bundled; models and datasets downloaded
> at run time are subject to their own licenses.

## 延伸閱讀

相關概念：[[模型解釋]] · [[深度學習]] · [[語言模型]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[baidu--Unlimited-OCR|baidu/Unlimited-OCR]] · [[raiyanyahya--how-to-train-your-gpt|raiyanyahya/how-to-train-your-gpt]]

[GitHub](https://github.com/anthropics/jacobian-lens)

## 相關收錄

> [!note]- 直接競品（同子分類：模型解釋）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模型解釋" AND file.name != "anthropics--jacobian-lens"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "anthropics--jacobian-lens"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "anthropics--jacobian-lens" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "anthropics--jacobian-lens"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["模型解釋","深度學習","語言模型"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "anthropics--jacobian-lens" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/anthropics--jacobian-lens");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "anthropics--jacobian-lens" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "anthropics" AND file.name != "anthropics--jacobian-lens"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/anthropics--jacobian-lens");
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
> const me = dv.page("Repos/anthropics--jacobian-lens");
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
> const me = dv.page("Repos/anthropics--jacobian-lens");
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
> const me = dv.page("Repos/anthropics--jacobian-lens");
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
> const me = dv.page("Repos/anthropics--jacobian-lens");
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

> **2026-07-09** — 首次收錄
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

- [[2026-07-09|2026-07-09]] — 首次收錄，891 stars
