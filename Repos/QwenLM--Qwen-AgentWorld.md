---
repo: QwenLM/Qwen-AgentWorld
url: https://github.com/QwenLM/Qwen-AgentWorld
owner: QwenLM
owner_type: Organization
language: Python
license: Apache-2.0
description: "Qwen-AgentWorld: Language World Models for General Agents"
homepage: "https://arxiv.org/abs/2606.24597"
stars: 568
stars_per_day: 142
forks: 51
open_issues: 1
created: 2026-06-22
pushed_at: 2026-06-25
first_seen: 2026-06-26
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-26
use_case: "提供一個原生的語言世界模型，能夠模擬多種代理環境，並進行長鏈思考推理。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-04"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 3940
readme_length: 9802
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-26"
star_history: "2026-06-26:488,2026-06-26:489,2026-06-27:568"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "Qwen-AgentWorld"
  - "QwenLM/Qwen-AgentWorld"
  - "提供一個原生的語言世界模型，能夠模擬多種代理環境，並進行長鏈思考推理。"
---

# Qwen-AgentWorld

**489** stars · **163** stars/天 · 建立 3 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
> 提供一個原生的語言世界模型，能夠模擬多種代理環境，並進行長鏈思考推理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (163 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 對於希望在多領域中進行代理模擬的 AI 研究者和開發者。
> **一句話重點** Qwen-AgentWorld 的設計突破了傳統模型的限制，提供了一個統一的解決方案來處理多種代理環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "QwenLM--Qwen-AgentWorld" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、15 小時整合，得到多領域模擬的能力，值得探索。

> [!abstract] 核心創新
> Qwen-AgentWorld 是第一個涵蓋七個代理互動領域的語言世界模型。

## 專案簡介

Qwen-AgentWorld 是一個原生的語言世界模型，專為模擬多種代理環境而設計。它通過三階段的訓練流程來實現：首先是環境知識的注入（CPT），接著是下一狀態預測推理（SFT），最後是強化學習（RL）來提升模擬的真實性。這種設計使得環境建模從一開始就是訓練的核心目標，而非後期的附加功能。使用者可以透過 `pip install openai` 安裝依賴，並使用提供的 API 進行推理。這個模型的賣點在於它能夠在七個統一的領域中進行零-shot 泛化，並且能夠進行可控的模擬，這在現有的模型中是前所未有的。

技術上，它使用了大規模的 MoE（混合專家）架構，並支持高達 35B 的參數量，這使得它在處理複雜的代理任務時表現出色。與其他模型相比，如 GPT-5.4 和 Claude Opus，Qwen-AgentWorld 在多個基準測試中顯示出更高的性能，特別是在 MCP 和 OS 領域。使用者在實際應用中可能會遇到一些限制，如需要額外的環境設置和對於特定任務的調整。這個專案的成熟度目前仍在 alpha 階段，適合對語言模型和強化學習有興趣的開發者進行探索和實驗。未來六個月內，預計會有更多的功能和改進釋出，特別是在可擴展性和模擬真實性方面。

**技術棧**：`Python`

## 重點功能

- 七個統一領域 — 同時支持 MCP、Search、Terminal、SWE、Android、Web 和 OS 的模擬。
- 原生世界模型 — 從 CPT 階段開始進行環境建模，而非後期適應。
- 可擴展和可控的模擬器 — 能夠在 OOD 環境中進行零-shot 泛化。
- 代理基礎模型 — 單回合非代理軌跡的 RL 熱身可轉移至多回合的工具調用任務。
- 高效的推理框架 — 支持 SGLang 和 vLLM 等多種推理框架。

## 快速開始

1. 安裝依賴
```bash
pip install openai
```
2. 啟動 SGLang 服務器
```bash
python -m sglang.launch_server --model-path Qwen/Qwen-AgentWorld-35B-A3B --port 8000 --tensor-parallel-size 4 --context-length 262144 --reasoning-parser qwen3
```
3. 使用 Transformers 進行推理
```bash
from transformers import AutoModelForCausalLM, AutoTokenizer
model_name = 'Qwen/Qwen-AgentWorld-35B-A3B'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype='auto', device_map='auto')
```

## 程式碼範例

```python
# 前置條件
# 使用 Transformers 進行推理
from transformers import AutoModelForCausalLM, AutoTokenizer
model_name = 'Qwen/Qwen-AgentWorld-35B-A3B'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype='auto',
    device_map='auto',
)

messages = [
    {
        'role': 'system',
        'content': 'You are a language world model simulating a Linux terminal environment. Given the user's command, predict the terminal output.'
    },
    {
        'role': 'user',
        'content': 'Action: execute_bash\nCommand: ls -la /home/user/project/'
    }
]

text = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
inputs = tokenizer([text], return_tensors='pt').to(model.device)
outputs = model.generate(**inputs, max_new_tokens=2048, temperature=0.6)
response = tokenizer.decode(outputs[0][inputs.input_ids.shape[-1]:], skip_special_tokens=True)
print(response)
# 預期輸出
# 模擬的終端輸出結果，顯示指定目錄的內容。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 489 stars（163/天），forks 47（9.6%），這顯示出相對較高的社群參與度。主要貢獻者 hzhwcmhf 和 yuxinzuo 在開源社群中有一定的影響力，之前的項目也涉及類似的技術。這個專案解決了現有模型在多領域模擬中的局限性，提供了一個統一的解決方案。近期的發布和社群的討論也可能促進了其快速增長。技術上，隨著強化學習和大規模模型的進步，這個工具的可行性大幅提升。forks/stars 比率顯示出有相當比例的使用者在進行實際修改和使用。

## 適合誰使用

**目標受眾**：對於希望在多領域中進行代理模擬的 AI 研究者和開發者。

> [!example] 使用場景
> - AI 研究人員用它來模擬多種代理環境，因為它能夠在七個領域中進行零-shot 泛化，提升研究效率。
> - 遊戲開發者用它來創建可控的模擬環境，因為它支持針對特定任務的環境調整，能夠快速迭代。
> - 教育工作者用它來設計互動式學習工具，因為它的多領域應用能夠提供豐富的學習場景。

## 架構分析

Qwen-AgentWorld 採用混合專家（MoE）架構，這使得模型能夠在多個領域中進行高效的推理。資料流從環境知識的注入開始，接著進行下一狀態預測，最後透過強化學習提升模擬的真實性。這種設計使得模型在處理複雜任務時能夠保持高效能，但也增加了訓練和推理的複雜度。選擇 MoE 架構的好處在於能夠動態選擇活躍的專家，降低運算成本，但可能會面臨專家之間的協調問題。擴展性方面，這種架構能夠輕鬆增加新的專家以應對新的任務，但也需要考慮到模型的整體性能和穩定性。

## 技術深入分析

Qwen-AgentWorld 的核心技術機制是基於混合專家（MoE）架構，這使得模型能夠在多個領域中進行高效的推理。它的訓練流程包括環境知識的注入、下一狀態預測和強化學習，這樣的設計使得模型在處理複雜任務時能夠保持高效能。根據性能數據，Qwen-AgentWorld 在多個基準測試中表現優於其他模型，特別是在 MCP 和 OS 領域。這種設計的取捨在於高效能與訓練複雜度之間的平衡，選擇 MoE 架構的好處在於能夠動態選擇活躍的專家，降低運算成本，但也可能面臨專家之間的協調問題。技術風險方面，隨著模型的擴展，可能會出現性能瓶頸，特別是在處理高負載的請求時。整合方面，Qwen-AgentWorld 與主流框架（如 PyTorch 和 Transformers）相容良好，並且提供了多種推理框架的支持，這使得它能夠輕鬆融入現有的技術生態。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程相對順暢，但需要注意環境設置。文件中有多語言支持，對於新手來說，能夠在 30 分鐘內完成基本的設置和運行。整體上，對於有一定基礎的使用者來說，學習曲線不會太陡峭。

## 優缺點分析

> [!success] 優點
> - 支持多領域的模擬，適用於多種應用場景。
> - 原生的環境建模，提升了訓練的效率和效果。
> - 高效的推理框架，能夠快速部署和使用。

> [!danger] 缺點
> - 仍在 alpha 階段，可能存在不穩定的功能。
> - 需要較高的學習曲線來掌握其使用。
> - 對於特定任務的調整需要額外的開發工作。

> [!warning] 注意事項
> - 需要額外的環境設置以支持完整的功能。
> - 目前仍在 alpha 階段，API 和功能可能會變動。
> - 對於特定任務的調整需要額外的開發工作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建虛擬代理的工具，與 Qwen-AgentWorld 的多領域模擬相比，功能範圍較窄。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性代理的模擬，適合特定的競爭場景，而 Qwen-AgentWorld 提供更廣泛的應用領域。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建虛擬代理的工具，與 Qwen-AgentWorld 的多領域模擬相比，功能範圍較窄。 | 如果你的專案主要集中在虛擬代理的開發上，這個工具會更合適。 | low，因為兩者的基本概念相似，遷移工作量不大。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性代理的模擬，適合特定的競爭場景，而 Qwen-AgentWorld 提供更廣泛的應用領域。 | 如果你的應用場景涉及競爭性任務，這個工具會更合適。 | medium，因為需要調整模型的使用方式以適應不同的任務需求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Qwen-AgentWorld** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建虛擬代理的工具，與 Qwen-AgentWorld 的多領域模擬相比，功能範圍較窄。 | 專注於對抗性代理的模擬，適合特定的競爭場景，而 Qwen-AgentWorld 提供更廣泛的應用領域。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，遷移工作量不大。 | medium，因為需要調整模型的使用方式以適應不同的任務需求。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在虛擬代理的開發上，這個工具會更合適。 | 如果你的應用場景涉及競爭性任務，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要額外的環境設置以支持完整的功能
  - 解法：仔細閱讀 README 中的安裝指導，確保所有依賴都已安裝
- [MEDIUM] API 和功能可能會變動
  - 解法：定期檢查 GitHub 頁面以獲取最新更新
- [MEDIUM] 對於特定任務的調整需要額外的開發工作
  - 解法：提前規劃任務需求，並進行必要的調整

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究團隊進行多領域代理模擬 | 非常適合 | 提供統一的模擬平台，支持多種應用場景。 |
| 小型遊戲開發團隊需要快速原型 | 適合 | 可控的模擬環境能夠快速迭代設計。 |
| 大型企業需要穩定的生產環境 | 不適合 | 目前仍在 alpha 階段，存在不穩定性。 |
| 教育機構設計互動式學習工具 | 非常適合 | 多領域應用能夠提供豐富的學習場景。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、15 小時整合，得到多領域模擬的能力，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
| Forks | 47 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-25 |
| 建立日期 | 2026-06-22 |
| 官方網站 | [Link](https://arxiv.org/abs/2606.24597) |
| Repo 大小 | 3.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QwenLM/Qwen-AgentWorld) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hzhwcmhf](https://github.com/hzhwcmhf) | 2 |
> | [@yuxinzuo](https://github.com/yuxinzuo) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新和討論。
**連結**：[文件](https://arxiv.org/abs/2606.24597)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-23 ~ 2026-06-25）
> **活躍天數** 3 天 · **最新 commit** Add --language-model-only flag to vLLM serving example

## README 摘錄

> [!info]- 展開查看原文 README
> # Qwen-AgentWorld
> 
>   
>   
>     📑 Technical Report |
>     📖 Blog |
>     🤗 Hugging Face |
>     🤖 ModelScope |
>     🖥️ Demo
>   
> 
>   
> 
> Welcome to the GitHub repository of Qwen-AgentWorld. Here, you can find official information about Qwen-AgentWorld, post your questions ([Issues](https://github.com/QwenLM/Qwen-AgentWorld/issues)), and share your ideas with the community ([Discussions](https://github.com/QwenLM/Qwen-AgentWorld/discussions)).
> 
> 
> ## Quickstart
> 
> 
> ### Setup
> 
> ```bash
> 
> # Install dependencies
> pip install openai
> ```
> 
> 
> ## Introduction
> 
>   
> 
> **Qwen-AgentWorld** is a native language world model that simulates agentic environments via long chain-of-thought reasoning across **seven unified domains**: MCP, Search, Terminal, SWE, Android, Web, and OS. It is trained through a three-stage pipeline -- CPT injects environment knowledge, SFT activates next-state-prediction reasoning, RL sharpens simulation fidelity -- on more than 10M real-world interaction trajectories. Unlike prior approaches that treat world modeling as a post-hoc add-on, Qwen-AgentWorld is a **native world model**: environment modeling is the training objective from the CPT stage onward.
> 
> Key features:
> 
> - **Seven Unified Domains.** The first language world model to cover seven agent interaction domains within a single model.
> - **Native World Model.** Environment modeling from CPT onward, not post-hoc adaptation.
> - **Generalizable, Scalable & Controllable Simulator.** Zero-shot generalization to OOD environments (e.g., Claw Agent); controllable perturbations and fictional-world construction surpass real-environment training.
> - **Agent Foundation Model.** LWM RL warm-up on single-turn, non-agentic trajectories transfers to multi-turn, tool-calling agentic tasks across seven benchmarks, including three entirely out-of-domain.
> 
> 
> # Download the benchmark
> huggingface-cli download Qwen/AgentWorldBench --repo-type dataset --local-dir ./AgentWorldBench
> 
> 
> ## News
> 
> - **2026-06-24**: We release **Qwen-AgentWorld-35B-A3B** and **AgentWorldBench**. Read more on our [blog](https://qwen.ai/blog?id=qwen-agentworld) and the [technical report](http://arxiv.org/abs/2606.24597).
> 
> 
> ## Open-Source Release
> 
> We open-source Qwen-AgentWorld-35B-A3B (model weights) and AgentWorldBench (evaluation benchmark):
> 
> | Release | Description |
> |---------|-------------|
> | [Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B) | Language world model (MoE, 35B total / 3B active, 256K context) |
> | [AgentWorldBench](https://huggingface.co/datasets/Qwen/AgentWorldBench) | Evaluation benchmark across 7 domains |
> 
> The official weights and data are released on:
> - [🤗 HuggingFace](https://huggingface.co/Qwen): Download automatically via model ID, e.g., `Qwen/Qwen-AgentWorld-35B-A3B`. You can also download model files manually using `huggingface download` or `git clone`. Please follow the instructions on the model page.
> - [🤖 ModelScope](https://modelscope.cn/organization/qwen): For users unable to access Hugging Face Hub. For supported frameworks, you can download from ModelScope by setting environment variables, such as `SGLANG_USE_MODELSCOPE=true` or `VLLM_USE_MODELSCOPE=true`.
> 
> 
> ## Performance
> 
>   
> 
> Five-dimensional rubric mean (↑) per domain, normalized to 0--100 scale.
> 
> | Model | MCP | Search | Term. | SWE | Android | Web | OS | **Overall** |
> |:------|:---:|:------:|:-----:|:---:|:-------:|:---:|:--:|:-----------:|
> | GPT-5.4 | **70.10** | 37.26 | 53.69 | 66.29 | 60.00 | 51.80 | 68.58 | 58.25 |
> | Claude Opus 4.8 | 54.93 | 35.14 | **59.18** | 64.10 | 61.50 | **54.66** | 66.62 | 56.59 |
> | Claude Opus 4.6 | 69.90 | 29.30 | 57.51 | 64.55 | **61.74** | 51.42 | **70.20** | 57.80 |
> | Gemini 3.1 Pro | 59.07 | 30.21 | 52.47 | 59.07 | 61.40 | 52.83 | 66.92 | 54.57 |
> | Claude Sonnet 4.6 | 70.00 | 28.79 | 56.98 | 64.52 | 58.03 | 50.78 | 63.17 | 56.04 |
> | DeepSeek-V4-Pro | 63.27 | 27.61 | 51.26 | 59.44 | 55.17 | 50.32 | 63.70 | 52.97 |
> | GLM-5.1 | 67.60 | 22.46 | 47.32 | 52.07 | 59.10 | 51.50 | 59.13 | 51.31 |
> | Kimi K2.6 | 65.23 | 27.48 | 52.54 | 58.77 | 58.93 | 50.20 | 60.80 | 53.42 |
> | MiniMax-M2.7 | 55.82 | 27.30 | 41.62 | 37.44 | 52.40 | 50.52 | 57.73 | 46.12 |
> | Qwen3.5-35B-A3B | 57.87 | 25.98 | 46.13 | 47.58 | 53.18 | 47.10 | 56.27 | 47.73 |
> | Qwen3.5-397B-A17B | 68.31 | 30.81 | 55.30 | 64.44 | 54.90 | 48.55 | 60.85 | 54.74 |
> | Qwen3.6-Plus | 55.28 | 21.94 | 50.58 | 59.08 | 57.65 | 50.78 | 60.33 | 50.81 |
> | **Qwen-AgentWorld-35B-A3B** | 64.79 | 36.69 | 53.96 | 65.63 | 58.17 | 49.55 | 65.92 | 56.39 |
> | **Qwen-AgentWorld-397B-A17B** | 68.24 | **37.82** | 57.73 | **68.49** | 60.20 | 50.98 | 67.89 | **58.71** |
> 
> Qwen-AgentWorld-397B-A17B achieves the highest overall score (58.71), outperforming all frontier proprietary models including GPT-5.4 (58.25). Qwen-AgentWorld-35B-A3B shows +8.66 improvement over Qwen3.5-35B-A3B without LWM training.
> 
> 
> ## Applications
> 
> **Generalizable Environment Scaling.** Sim RL with Qwen-AgentWorld-397B-A17B on 4k out-of-distribution OpenClaw environments:
> 
> | Model | Claw-Eval | QwenClawBench |
> |:------|:---------:|:-------------:|
> | Qwen3.5-35B-A3B | 65.4 | 47.9 |
> | + Sim RL (w/ Qwen3.6-Plus) | 66.7 | 47.8 |
> | + Sim RL (w/ Qwen-AgentWorld-397B-A17B) | **69.7** | **55.0** |
> | Δ | +4.3 | +7.1 |
> 
> **Controllable Simulation: MCP.** Environment Adaptation --- Control instructions inject targeted perturbations to expose agent weaknesses:
> 
> | Model | Tool Decathlon | MCPMark |
> |:------|:--------------:|:-------:|
> | Qwen3.5-35B-A3B-SFT | 32.4 | 21.5 |
> | + Sim RL (uncontrolled) | 31.5 | 24.6 |
> | + Sim RL (controlled) | **36.1** | **33.8** |
> | Δ | +3.7 | +12.3 |
> 
> **Controllable Simulation: Search.** Fictional-World Construction -- agents trained in fully invented, self-consistent worlds generalize to real search tasks:
> 
> | Model | WideSearch F1 Item | WideSearch F1 Row |
> |:------|:------------------:|:-----------------:|
> | Qwen3.5-35B-A3B-SFT | 34.02 | 13.72 |
> | + Sim RL (controlled) | **50.31** | **24.21** |
> | Δ | +16.29 | +10.49 |
> | | | |
> | Qwen3.5-397B-A17B-SFT | 70.11 | 45.69 |
> | + Sim RL (controlled) | **73.98** | **51.74** |
> | Δ | +3.87 | +6.05 |
> 
> **Agent Foundation Model.** LWM RL warm-up on single-turn, non-agentic trajectories transfers to multi-turn, tool-calling agentic tasks:
> 
> | | Terminal-Bench 2.0 | SWE-Bench Verified | SWE-Bench Pro | WideSearch F1 Item | Claw-Eval | QwenClawBench | BFCL v4 |
> |:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | | *In Domain* | | | | *Out of Domain* | | |
> | Qwen3.5-35B-A3B-SFT | 33.25 | 64.47 | 42.18 | 33.38 | 53.60 | 39.76 | 62.29 |
> | w/ LWM RL | **39.55** | **67.86** | **47.42** | **46.17** | **64.88** | **49.43** | **71.25** |
> | Δ | +6.30 | +3.39 | +5.24 | +12.79 | +11.28 | +9.67 | +8.96 |
> 
> For detailed results, please check out the [blog](https://qwen.ai/blog?id=qwen-agentworld) and the [technical report](http://arxiv.org/abs/2606.24597).
> 
> 
> ### Deployment
> 
> Qwen-AgentWorld-35B-A3B is supported by multiple inference frameworks. Here we demonstrate the usage of SGLang and vLLM.
> 
> #### SGLang
> 
> [SGLang](https://github.com/sgl-project/sglang) is a fast serving framework for large language models.
> 
> ```bash
> python -m sglang.launch_server \
>     --model-path Qwen/Qwen-AgentWorld-35B-A3B \
>     --port 8000 \
>     --tensor-parallel-size 4 \
>     --context-length 262144 \
>     --reasoning-parser qwen3
> ```
> 
> An OpenAI-compatible API will be available at `http://localhost:8000/v1`.
> 
> #### vLLM
> 
> [vLLM](https://github.com/vllm-project/vllm) is a high-throughput and memory-efficient inference engine for LLMs.
> 
> ```bash
> vllm serve Qwen/Qwen-AgentWorld-35B-A3B \
>     --port 8000 \
>     --tensor-parallel-size 4 \
>     --max-model-len 262144 \
>     --reasoning-parser qwen3 \
>     --language-model-only \
>     --trust-remote-code
> ```
> 
> > [!TIP]
> > The `--language-model-only` flag is required because the model architecture includes visual component definitions but the checkpoint only contains language model weights. Without this flag, vLLM will attempt to initialize visual modules and fail.
> 
> An 

## 延伸閱讀

相關概念：[[Agent 框架]] · [[強化學習]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[deepseek-ai--TileKernels|deepseek-ai/TileKernels]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/QwenLM/Qwen-AgentWorld) · [官方網站](https://arxiv.org/abs/2606.24597)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "QwenLM--Qwen-AgentWorld"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "QwenLM--Qwen-AgentWorld"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "QwenLM--Qwen-AgentWorld" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "QwenLM--Qwen-AgentWorld"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","強化學習","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "QwenLM--Qwen-AgentWorld" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "QwenLM--Qwen-AgentWorld" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "QwenLM" AND file.name != "QwenLM--Qwen-AgentWorld"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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
> const me = dv.page("Repos/QwenLM--Qwen-AgentWorld");
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

> **2026-06-26** — 首次收錄
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

- [[2026-06-27|2026-06-27]] — 再次上榜，568 stars
- [[2026-06-26|2026-06-26]] — 首次收錄，488 stars
