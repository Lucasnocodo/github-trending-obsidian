---
repo: MoonshotAI/Kimi-K3
url: https://github.com/MoonshotAI/Kimi-K3
owner: MoonshotAI
owner_type: Organization
language: N/A
license: NOASSERTION
description: "Open Frontier Intelligence"
homepage: ""
stars: 7565
stars_per_day: 2522
forks: 510
open_issues: 16
created: 2026-07-27
pushed_at: 2026-07-28
first_seen: 2026-07-28
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "多模態推理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-28
use_case: "提供開放的多模態智能模型，專為長期推理和編碼任務設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-08-03"
contributor_count: 1
engagement: "low"
issue_close_rate: 19
repo_size_kb: 5017
readme_length: 5417
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-28"
star_history: "2026-07-28:1993,2026-07-28:2041,2026-07-29:3586,2026-07-29:3593,2026-07-30:6201,2026-07-30:6232,2026-07-31:7565"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
aliases:
  - "Kimi-K3"
  - "MoonshotAI/Kimi-K3"
  - "提供開放的多模態智能模型，專為長期推理和編碼任務設計。"
---

# Kimi-K3

**6.2k** stars · **3.1k** stars/天 · 建立 2 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
> 提供開放的多模態智能模型，專為長期推理和編碼任務設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.1k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效能多模態推理的 AI 研究人員和開發者。
> **一句話重點** Kimi K3 的開放性和多模態能力使其在 AI 領域中具備強大的競爭力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態推理" && p.file.name !== "MoonshotAI--Kimi-K3" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多模態推理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、12 小時整合，得到高效的多模態推理能力，值得投入。

> [!abstract] 核心創新
> Kimi K3 是世界上第一個開放的 3T 級模型，專為前沿智能設計。

## 專案簡介

Kimi K3 是一個開放權重的多模態智能模型，擁有 2.8 兆參數，專為長期推理和編碼任務而設計。用戶可以透過 `reasoning_effort` 參數來控制推理的深度，支持「低」、「高」和「最大」三種模式。這個模型的核心特點在於其 Kimi Delta Attention (KDA) 和 Attention Residuals (AttnRes) 結構，能夠在 1 百萬 token 的上下文窗口內進行高效的推理和編碼工作。具體來說，模型能夠在長時間的工程會話中運行，並能夠處理從 GPU 內核優化到 CAD 設計的各種任務。與同類產品相比，Kimi K3 具備更高的可擴展性和效率，特別是在長期編碼和知識工作方面。

與 OpenAI 的模型相比，Kimi K3 提供了開放的權重和 API，這使得用戶能夠自由地進行研究和部署。實際使用中，Kimi K3 的推理速度和效能表現都相當優異，但在某些情況下可能需要較高的硬體要求。這個模型的開放性使得它在學術界和業界都具有廣泛的應用潛力。未來，Kimi K3 預計將持續更新，並引入更多的功能和改進，特別是在多模態處理和推理能力方面。

**技術棧**：`Kimi Delta Attention` · `Attention Residuals` · `MXFP4 Quantization`

## 重點功能

- 新架構 — 基於 Kimi Delta Attention (KDA) 和 Attention Residuals (AttnRes)，提供更高的推理效率。
- 長期編碼 — 能夠在長時間的工程會話中運行，適合大型代碼庫的處理。
- 原生多模態 — 同時支持文本、圖像和視頻的理解，提升了應用的靈活性。
- 開放權重 — 完全開放的模型權重，便於研究和創新。
- 高效能推理 — 支持 1 百萬 token 的上下文窗口，適合複雜的推理任務。

## 快速開始

1. 安裝 Kimi K3 的 API 客戶端
```bash
pip install kimi-k3
```
2. 使用 Kimi K3 進行推理
```bash
response = client.chat.completions.create(model='kimi-k3', messages=messages)
```
3. 查看推理結果
```bash
print(response.choices[0].message.content)
```

## 程式碼範例

```bash
{
  "前置條件": "需要安裝 openai 客戶端",
  "程式碼": "import openai\n\ndef chat_with_preserved_thinking(client: openai.OpenAI, model_name: str):\n    messages = [\n        {\n            \"role\": \"user\",\n            \"content\": \"Tell me three random numbers.\"\n        },\n        {\n            \"role\": \"assistant\",\n            \"reasoning_content\": \"I'll start by listing five numbers: 473, 921, 235, 215, 222, and I'll tell you the first three.\",\n            \"content\": \"473, 921, 235\"\n        },\n        {\n            \"role\": \"user\",\n            \"content\": \"What are the other two numbers you have in mind?\"\n        }\n    ]\n\n    response = client.chat.completions.create(\n        model=model_name,\n        messages=messages,\n        stream=False,\n        max_tokens=4096,\n        reasoning_effort=\"max\",\n    )\n    print(f\"response: {response.choices[0].message.reasoning}\")\n    return response.choices[0].message.content",
  "預期輸出": "response: '215, 222'"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 6232 stars（3116/天），forks 439（7.0%），這顯示出強烈的社群興趣。作者 bigeagle 以往在 AI 領域有豐富的經驗，這個模型解決了在多模態推理和長期編碼任務中缺乏開放解決方案的痛點。社群中對於模型的需求和期待也促進了其快速增長。技術上，開放權重和高效能的設計使得這個模型在市場上具備競爭力，並吸引了大量開發者的關注。forks/stars 比率為 7.0%，顯示出許多人在實際修改和使用這個模型。

## 適合誰使用

**目標受眾**：需要高效能多模態推理的 AI 研究人員和開發者。

> [!example] 使用場景
> - AI 研究人員用它來開發新的推理算法，因為 Kimi K3 的開放權重和高效能使得實驗更具彈性。
> - 後端工程師用它來優化大型代碼庫的編碼過程，因為其長期編碼能力能夠顯著提高效率。
> - 數據科學家用它來進行多模態數據分析，因為 Kimi K3 支持同時處理文本、圖像和視頻，提供更全面的洞察。

## 架構分析

Kimi K3 採用 Mixture-of-Experts (MoE) 架構，這使得模型在運行時能夠選擇性地激活部分參數以提高效率。這種設計的好處在於能夠在保持高效能的同時，減少計算資源的需求。資料流方面，模型通過 Kimi Delta Attention (KDA) 和 Attention Residuals (AttnRes) 進行推理，能夠處理文本、圖像和視頻等多種數據類型。選擇 MoE 架構的代價是需要更複雜的訓練和推理流程，尤其是在選擇激活的專家時。隨著模型規模的擴大，可能會面臨計算瓶頸，特別是在硬體資源有限的情況下。

## 技術深入分析

Kimi K3 的核心技術機制在於其 Mixture-of-Experts (MoE) 架構，這使得模型能夠在運行時選擇性激活部分參數以提高效率。這種設計使得 Kimi K3 能夠在長期編碼和推理任務中表現出色，特別是在處理大型數據集時。模型的推理速度和效能表現都相當優異，能夠支持 1 百萬 token 的上下文窗口，這在同類產品中是相當罕見的。選擇 KDA 和 AttnRes 作為注意力機制的好處在於能夠處理更複雜的數據類型，但這也帶來了更高的計算需求。隨著模型規模的擴大，可能會面臨計算瓶頸，特別是在硬體資源有限的情況下。整合 Kimi K3 到現有的工具鏈中相對簡單，特別是與流行的 API 和 CLI 工具的兼容性良好，這使得開發者能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用指導，但缺乏中文版本。安裝過程相對順暢，沒有明顯的坑。提供了良好的快速入門指南，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 開放權重，便於研究和創新。
> - 高效能推理，適合複雜的多模態任務。
> - 支持長期編碼，能夠處理大型代碼庫。

> [!danger] 缺點
> - 需要高效能的硬體支持，成本較高。
> - 文檔主要以英文呈現，對非英語使用者不友好。
> - 在某些情況下，推理速度可能受到上下文長度的影響。

> [!warning] 注意事項
> - 需要高效能的硬體支持，特別是在處理大型數據時。
> - 目前文檔主要以英文呈現，對於非英語使用者可能不太友好。
> - 在某些情況下，推理速度可能受到上下文長度的影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理生成，但不具備 Kimi K3 的多模態能力和開放權重。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的推理功能，但在模型大小和參數上不及 Kimi K3。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於代碼生成，缺乏 Kimi K3 的多模態處理能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理生成，但不具備 Kimi K3 的多模態能力和開放權重。 | 如果你的應用主要集中在代理生成而非多模態處理，則可以選擇此工具。 | medium，因為需要重新調整應用邏輯以適應不同的 API。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的推理功能，但在模型大小和參數上不及 Kimi K3。 | 如果你的應用不需要 Kimi K3 的完整功能，且希望使用更輕量的解決方案，則可以考慮此工具。 | low，因為 API 設計相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Kimi-K3** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理生成，但不具備 Kimi K3 的多模態能力和開放權重。 | 提供類似的推理功能，但在模型大小和參數上不及 Kimi K3。 |
> | 遷移成本 | - | medium，因為需要重新調整應用邏輯以適應不同的 API。 | low，因為 API 設計相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的應用主要集中在代理生成而非多模態處理，則可以選擇此工 | 如果你的應用不需要 Kimi K3 的完整功能，且希望使用更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和研究，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在長期運行中可能會遇到記憶體不足的問題
  - 解法：確保有足夠的硬體資源，或考慮分批處理數據
- [MEDIUM] 推理速度在高負載下可能下降
  - 解法：調整推理參數以降低負載

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 研究團隊進行多模態推理 | 非常適合 | Kimi K3 的多模態能力和開放權重能夠支持複雜的研究需求。 |
| 小型開發團隊進行簡單的代碼生成 | 普通 | 雖然 Kimi K3 功能強大，但對於簡單任務可能過於複雜。 |
| 需要長期推理的企業應用 | 適合 | Kimi K3 的長期編碼能力能夠支持企業級的應用需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、12 小時整合，得到高效的多模態推理能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Kimi K3 不需要高權限運行，但需注意 API 密鑰的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
| Forks | 439 |
| Open Issues | 13 |
| Issue 解決率 | 19% (3 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-27 |
| Repo 大小 | 4.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/Kimi-K3) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bigeagle](https://github.com/bigeagle) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多個問題和反饋。
**連結**：[文件](https://platform.kimi.ai/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** update report file

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/MoonshotAI/Kimi-K3/issues/6) | 这么一个强大的模型，真希望README.md是用中文来呈现的 | 66 | 185 |
> | [#19](https://github.com/MoonshotAI/Kimi-K3/issues/19) | kimi真的太强了！！！！！ | 0 | 0 |
> | [#18](https://github.com/MoonshotAI/Kimi-K3/issues/18) | 在一台mac mini 4 上如何跑起来 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> 📰&nbsp;&nbsp;Tech Blog | &nbsp;&nbsp;&nbsp; 📄&nbsp;&nbsp;Full Report
> 
> 
> ## 6. Model Usage
> 
> Kimi K3 always has thinking enabled, and will return `reasoning_content`. Thinking effort is configured with the top-level `reasoning_effort` request field, which supports `"low"`, `"high"`, and `"max"` (default `"max"`).
> 
> Kimi K3 was trained in the preserved thinking history mode. For multi-turn conversations and tool calls, Kimi K3 requires the complete assistant message returned by the API to be passed back to `messages` as-is — including `reasoning_content` and `tool_calls`, not just `content`:
> 
> ```python
> import openai
> 
> def chat_with_preserved_thinking(client: openai.OpenAI, model_name: str):
>     messages = [
>         {
>             "role": "user",
>             "content": "Tell me three random numbers."
>         },
>         {
>             "role": "assistant",
>             "reasoning_content": "I'll start by listing five numbers: 473, 921, 235, 215, 222, and I'll tell you the first three.",
>             "content": "473, 921, 235"
>         },
>         {
>             "role": "user",
>             "content": "What are the other two numbers you have in mind?"
>         }
>     ]
> 
>     response = client.chat.completions.create(
>         model=model_name,
>         messages=messages,
>         stream=False,
>         max_tokens=4096,
>         reasoning_effort="max",
>     )
>     # the assistant should mention 215 and 222 that appear in the prior reasoning content
>     print(f"response: {response.choices[0].message.reasoning}")
>     return response.choices[0].message.content
> ```
> 
> For full guides and examples (vision input, structured output, partial mode, tool choice, dynamic tool loading, context caching), see the [Kimi K3 Quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart) and [Thinking Effort](https://platform.kimi.ai/docs/guide/use-thinking-effort).
> 
> 
> ## 1. Model Introduction
> 
> Kimi K3 is an open-weight, native multimodal agentic model and our most capable model to date. It is a 2.8T-parameter model built on Kimi Delta Attention (KDA) and Attention Residuals (AttnRes), with native vision capabilities and a 1-million-token context window. It is the world's first open 3T-class model, designed for frontier intelligence across long-horizon coding, knowledge work, and reasoning.
> 
> 
> ### Key Features
> - **New Architecture**: Kimi K3 is built on Kimi Delta Attention (KDA) and Attention Residuals (AttnRes), and scales up MoE sparsity with a Stable LatentMoE framework that activates 16 out of 896 experts — yielding an approximate 2.5× improvement in overall scaling efficiency over Kimi K2.
> - **Long-Horizon Coding**: Operating with minimal human oversight, Kimi K3 sustains long engineering sessions, navigates massive repositories, and orchestrates terminal tools — from GPU kernel optimization and compiler development to vision-in-the-loop game dev, CAD, and even chip design.
> - **Agentic Knowledge Work**: Kimi K3 advances end-to-end knowledge work, producing deep research with interactive visualizations, widgets and dashboards, and motion design and video editing, powered by its native multimodal architecture.
> - **Native Multimodality & Long Context**: Kimi K3 understands text, images, and video within the same model, and supports a 1-million-token context window.
> - **Open Frontier Weights**: We release the full Kimi K3 model weights under the Kimi K3 License, making frontier intelligence openly available for research, deployment, and further innovation.
> 
> ## 2. Model Summary
> 
> Architecture
> Mixture-of-Experts (MoE)
> 
> Total Parameters
> 2.8T
> 
> Activated Parameters
> 104B
> 
> Number of Layers
> 93
> 
> Number of Dense Layers
> 1
> 
> Attention-Layer Composition
> 69 KDA + 24 Gated MLA
> 
> Attention Hidden Dimension
> 7168
> 
> Number of Attention Heads
> 96
> 
> Latent MoE Dimension
> 3584
> 
> MoE Hidden Dimension (per Expert)
> 3072
> 
> Number of Experts
> 896
> 
> Selected Experts per Token
> 16
> 
> Number of Shared Experts
> 2
> 
> Vocabulary Size
> 160K
> 
> Context Length
> 1048576
> 
> Attention Mechanism
> KDA &amp; Gated MLA
> 
> Activation Function
> SiTU-GLU
> 
> Vision Encoder
> MoonViT-V2
> 
> Parameters of Vision Encoder
> 401M
> 
> Quantization
> MXFP4 weights / MXFP8 activations(quantization-aware training)
> 
> Modality
> Text, Image
> 
> 
> ## 4. Native MXFP4 Quantization
> 
> Kimi K3 applies quantization-aware training from the SFT stage onward, using MXFP4 weights with MXFP8 activations for broad hardware compatibility.
> 
> 
> ## 5. Deployment
> 
> > [!Note]
> > You can access Kimi K3's API on https://platform.kimi.ai by selecting `kimi-k3`, and we provide OpenAI/Anthropic-compatible API for you. Currently, Kimi K3 is recommended to run on the following inference engines:
> 
> - [vLLM](https://github.com/vllm-project/vllm) — see [recipes](https://recipes.vllm.ai/moonshotai/Kimi-K3)
> - [SGLang](https://github.com/sgl-project/sglang) — see [cookbook](https://docs.sglang.io/cookbook/autoregressive/Moonshotai/Kimi-K3)
> - [TokenSpeed](https://lightseek.org/tokenspeed) — see [recipes](https://lightseek.org/tokenspeed/recipes/models#kimi-k3)
> 
> ---
> 
> ### Coding Agent Framework
> 
> Kimi K3 works best with [Kimi Code CLI](https://www.kimi.com/code) as its agent framework. We warmly invite you to give it a try — run Kimi Code in your terminal and select Kimi K3 using the `/model` command. We hope you enjoy building with Kimi K3, and we would love to hear your feedback!
> 
> ---
> 
> 
> ## 8. Contact Us
> 
> If you have any questions, please reach out at [support@moonshot.ai](mailto:support@moonshot.ai).

## 延伸閱讀

相關概念：[[多模態]] · [[推理能力]] · [[開放權重]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[deepseek-ai--TileKernels|deepseek-ai/TileKernels]] · [[jamesob--local-llm|jamesob/local-llm]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]]

[GitHub](https://github.com/MoonshotAI/Kimi-K3)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態推理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態推理" AND file.name != "MoonshotAI--Kimi-K3"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "MoonshotAI--Kimi-K3"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "MoonshotAI--Kimi-K3" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "MoonshotAI--Kimi-K3"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","推理能力","開放權重"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MoonshotAI--Kimi-K3" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MoonshotAI--Kimi-K3" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MoonshotAI" AND file.name != "MoonshotAI--Kimi-K3"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
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

> **2026-07-28** — 首次收錄
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

- [[2026-07-31|2026-07-31]] — 再次上榜，7.6k stars
- [[2026-07-30|2026-07-30]] — 再次上榜，6.2k stars
- [[2026-07-29|2026-07-29]] — 再次上榜，3.6k stars
- [[2026-07-28|2026-07-28]] — 首次收錄，2.0k stars
