---
repo: anthropics/jacobian-lens
url: https://github.com/anthropics/jacobian-lens
owner: anthropics
owner_type: Organization
language: Python
license: Apache-2.0
description: " Companion code for the global workspace interpretability paper"
homepage: ""
stars: 1146
stars_per_day: 127
forks: 163
open_issues: 3
created: 2026-07-02
pushed_at: 2026-07-02
first_seen: 2026-07-09
week: "2026-W28"
month: "2026-07"
category: "AI/ML"
subcategory: "可解釋性"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-09
use_case: "提供語言模型內部激活的可解釋性工具，幫助理解模型的決策過程。"
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
star_history: "2026-07-09:891,2026-07-09:894,2026-07-10:1006,2026-07-11:1062,2026-07-12:1146"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "jacobian-lens"
  - "anthropics/jacobian-lens"
  - "提供語言模型內部激活的可解釋性工具，幫助理解模型的決策過程。"
---

# jacobian-lens

**1.1k** stars · **127** stars/天 · 建立 9 天前 · Python · Apache-2.0

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供語言模型內部激活的可解釋性工具，幫助理解模型的決策過程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (127 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要深入理解語言模型內部運作的研究人員和開發者。
> **一句話重點** Jacobian lens 提供了一個強大的工具來分析語言模型的內部運作，對於研究者來說是理解模型行為的重要資源。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/anthropics--jacobian-lens");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "可解釋性" && p.file.name !== "anthropics--jacobian-lens" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 可解釋性 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到強大的模型分析工具，值得投入。

> [!abstract] 核心創新
> 這個專案提供了一個參考實現，用於分析語言模型的內部激活，並能夠直觀地展示模型的決策過程。

## 專案簡介

Jacobian lens 是一個用於解釋語言模型內部激活的工具，通過將任意層和位置的殘差流向最終層的基底進行線性轉換，並利用模型的反嵌入將其解碼為詞彙令牌的排名列表。這種方法的核心在於計算輸入-輸出雅可比矩陣的平均值，從而能夠在不同的層和位置上查看模型的反應。使用者可以透過簡單的 Python 指令來應用預先擬合的 lens，或在自己的模型上擬合新的 lens，這使得它在研究和實驗中非常靈活。特別是，這個工具可以幫助研究者理解模型如何處理特定的輸入，並提供對模型內部運作的可視化。這個專案的賣點在於它的參考實現，雖然不再維護，但仍然提供了強大的功能來分析語言模型的行為。使用者可以透過 `jlens.fit()` 方法來擬合 lens，並使用 `lens.apply()` 方法來查看不同層的輸出。這樣的設計使得研究者能夠在實驗中快速獲取模型的內部狀態，並進行深入分析。

**技術棧**：`Python 3.10` · `torch` · `transformers>=5.5` · `numpy`

## 重點功能

- 線性轉換 — 將任意層和位置的激活轉換為最終層的基底，幫助理解模型的決策。
- 預擬合 lens 應用 — 使用 `lens.apply()` 方法輕鬆應用預先擬合的 lens，快速獲取模型的內部狀態。
- 自定義擬合 — 使用 `jlens.fit()` 方法在自己的模型上擬合 lens，支持自定義提示和檢查點。
- 可視化工具 — 提供交互式的層×位置視圖，幫助用戶直觀理解模型的反應。
- 支持 HuggingFace 模型 — 能夠與 HuggingFace 的解碼器模型無縫整合，擴展性強。

## 快速開始

1. 安裝專案
```bash
pip install -e .
```
2. 應用預擬合的 lens
```bash
lens_logits, model_logits, _ = lens.apply(model, 'Fact: The currency used in the country shaped like a boot is', positions=[-2])
```
3. 擬合自己的 lens
```bash
lens = jlens.fit(model, prompts=my_prompts, checkpoint_path='out/ckpt.pt')
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 transformers 和 jlens 模組",
  "程式碼": "import transformers, jlens\n\nhf = transformers.AutoModelForCausalLM.from_pretrained('org/model').cuda()\ntok = transformers.AutoTokenizer.from_pretrained('org/model')\nmodel = jlens.from_hf(hf, tok)\n\nlens = jlens.JacobianLens.from_pretrained('org/lens-repo', filename='model/lens.pt')\nlens_logits, model_logits, _ = lens.apply(model, 'Fact: The currency used in the country shaped like a boot is', positions=[-2])\nfor layer, logits in sorted(lens_logits.items()):\n    print(layer, [tok.decode([t]) for t in logits[0].topk(5).indices])",
  "預期輸出": "將顯示每一層的 top-5 預測詞彙"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1146 stars（127/天），forks 163（14.2%），這顯示出該工具在學術界的快速關注。作者 mntss 是一位活躍的研究者，專注於語言模型的可解釋性，這個專案解決了語言模型內部運作不透明的痛點，之前的工具往往無法提供這樣的細緻分析。該專案的推出正值對 AI 模型解釋性需求上升的時期，並且在社群中引發了討論。由於其簡單的使用方式和強大的功能，吸引了許多研究者和開發者的關注。forks/stars 比率為 14.2%，顯示出有相當比例的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要深入理解語言模型內部運作的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來分析語言模型在特定輸入下的反應，因為它能夠提供模型內部激活的可視化，幫助理解模型的決策過程。
> - 開發者用它來擬合自定義的 lens，並在自己的模型上進行實驗，因為這樣可以快速獲得模型的內部狀態並進行調整。
> - 教育工作者用它來展示語言模型的運作原理，因為它提供了直觀的視覺化工具，讓學生更容易理解複雜的概念。

## 架構分析

Jacobian lens 的架構設計重點在於其可擴展性和靈活性。它使用了 PyTorch 框架來實現模型的前向和反向傳播，並利用 HuggingFace 的 transformers 庫來加載和操作語言模型。資料流從模型的激活開始，通過雅可比矩陣計算進行轉換，最終輸出為可視化的詞彙排名。

這種設計使得使用者能夠在不同層次上分析模型的行為，並提供了良好的性能。選擇 PyTorch 作為底層框架的好處在於其強大的自動微分功能，但這也意味著對於較大的模型，計算資源需求較高。整體架構的擴展性良好，能夠支持多種不同的 HuggingFace 模型，但在處理特定大型模型時，可能會面臨記憶體瓶頸。

## 技術深入分析

Jacobian lens 的核心技術機制在於計算雅可比矩陣，這使得它能夠在不同層和位置上分析模型的激活。使用 PyTorch 框架進行模型的前向和反向傳播，並利用 HuggingFace 的 transformers 庫來加載模型，這樣的設計使得它能夠快速適應不同的語言模型。效能方面，這個工具能夠處理多個層的激活，但在大型模型上可能會遇到記憶體瓶頸，特別是在擬合過程中需要大量的計算資源。選擇 PyTorch 的好處在於其強大的自動微分功能，但這也意味著在某些情況下，對於較大的模型，計算資源需求會增加。技術風險方面，隨著模型規模的擴大，雅可比矩陣的計算可能會變得更加複雜，這可能會影響到整體性能。整合方面，這個工具能夠與主流的深度學習框架良好兼容，但在實際使用中，可能需要進行一些調整以適應特定的模型結構。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了範例，安裝過程相對順暢，但對於新手來說，理解其背後的數學原理可能需要額外的學習。沒有多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 提供直觀的模型內部激活可視化，幫助理解模型的決策過程。
> - 支持自定義擬合，靈活性高，能夠適應不同的模型需求。
> - 基於 PyTorch 和 HuggingFace，易於整合到現有的深度學習工作流中。

> [!danger] 缺點
> - 不再維護，可能存在未解決的問題和漏洞。
> - 對於大型模型的計算需求較高，可能需要較強的硬體支持。
> - 僅支援 Python 3.10 以上版本，限制了使用者的選擇。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要 CUDA 支援以運行模型
> - 不再維護，可能存在未解決的問題

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成和管理 AI agent，而不是解釋模型內部運作，因此不適合用於可解釋性分析。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具提供了模型的可視化，但不具備 Jacobian lens 的深度解釋能力，適合不同的使用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理 AI agent，並不提供模型內部解釋的功能。 | 如果你需要一個強大的 agent 管理工具，而不是模型解釋工具。 | low，因為這兩者的功能定位不同，轉換不需要太多調整。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供模型的可視化，但不具備 Jacobian lens 的深度解釋能力。 | 如果你需要簡單的模型可視化，而不需要深入的可解釋性分析。 | medium，因為需要重新調整使用方式以適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **jacobian-lens** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和管理 AI agent，並不提供模型內部解釋的功能。 | 提供模型的可視化，但不具備 Jacobian lens 的深度解釋能力。 |
> | 遷移成本 | - | low，因為這兩者的功能定位不同，轉換不需要太多調整。 | medium，因為需要重新調整使用方式以適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果你需要一個強大的 agent 管理工具，而不是模型解釋工 | 如果你需要簡單的模型可視化，而不需要深入的可解釋性分析。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合研究用途，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型模型上擬合時可能會遇到記憶體不足的問題
  - 解法：考慮使用更小的模型或增加硬體資源
- [MEDIUM] 不再維護，可能存在未解決的問題
  - 解法：使用時需自行評估風險，並考慮其他替代方案
- [MEDIUM] 安裝過程中可能需要手動解決依賴問題
  - 解法：確保所有依賴都已正確安裝，並檢查版本相容性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 研究機構的語言模型分析專案 | 非常適合 | 提供深入的可解釋性分析工具，適合學術研究。 |
| 小型開發團隊的語言模型應用 | 適合 | 能夠快速集成並提供模型內部狀態的可視化。 |
| 大型企業的生產環境 | 不適合 | 不再維護，存在潛在的風險和不穩定性。 |
| 教育機構的語言模型教學 | 非常適合 | 提供直觀的可視化，有助於學生理解複雜的模型運作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的模型分析工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但在使用過程中需注意依賴的庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Jacobian lens 最常與 HuggingFace 的 transformers 庫搭配使用，通常在模型的分析和可視化階段進行整合。在一個使用 HuggingFace 的 NLP 專案中，使用者可以透過 `from_hf()` 方法輕鬆加載模型，然後使用 `apply()` 方法進行分析。這樣的整合方式使得它能夠快速適應現有的工作流。支援的 CI 工具包括 GitHub Actions，並且可以與 VS Code 等 IDE 進行整合。最常見的整合問題是依賴版本不相容，使用者需確保所有依賴的版本正確。

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
| Forks | 163 |
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

**社群活躍度**：社群活躍度中等，開放問題尚未解決。
**連結**：[文件](https://github.com/anthropics/jacobian-lens)

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

相關概念：[[可解釋性]] · [[深度學習]] · [[模型分析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[baidu--Unlimited-OCR|baidu/Unlimited-OCR]] · [[raiyanyahya--how-to-train-your-gpt|raiyanyahya/how-to-train-your-gpt]]

[GitHub](https://github.com/anthropics/jacobian-lens)

## 相關收錄

> [!note]- 直接競品（同子分類：可解釋性）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "可解釋性" AND file.name != "anthropics--jacobian-lens"
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
> const concepts = ["可解釋性","深度學習","模型分析"];
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
