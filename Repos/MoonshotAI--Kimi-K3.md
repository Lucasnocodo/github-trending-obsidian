---
repo: MoonshotAI/Kimi-K3
url: https://github.com/MoonshotAI/Kimi-K3
owner: MoonshotAI
owner_type: Organization
language: N/A
license: NOASSERTION
description: "Open Frontier Intelligence"
homepage: ""
stars: 1993
stars_per_day: 1993
forks: 150
open_issues: 6
created: 2026-07-27
pushed_at: 2026-07-28
first_seen: 2026-07-28
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-28
use_case: "提供開放的前沿智能模型，支持多模態和長上下文的推理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-31"
contributor_count: 1
engagement: "low"
issue_close_rate: 25
repo_size_kb: 2583
readme_length: 5417
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-28"
star_history: "2026-07-28:1993"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
  - easy_install
aliases:
  - "Kimi-K3"
  - "MoonshotAI/Kimi-K3"
  - "提供開放的前沿智能模型，支持多模態和長上下文的推理。"
---

# Kimi-K3

**2.0k** stars · **2.0k** stars/天 · 建立 1 天前 · N/A · NOASSERTION

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供開放的前沿智能模型，支持多模態和長上下文的推理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.0k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要開放多模態智能模型進行長期推理和知識工作的研究者和開發者。
> **一句話重點** Kimi K3 的開放性和多模態能力使其在前沿智能領域具備獨特的競爭優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--Kimi-K3");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "MoonshotAI--Kimi-K3" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 推論 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到強大的多模態推理能力，值得投入。

> [!abstract] 核心創新
> Kimi K3 是世界上首個開放的 3T 級模型，專為前沿智能設計。

## 專案簡介

Kimi K3 是一個開放權重的多模態智能模型，擁有 2.8 兆參數，專為長期編碼和知識工作設計。用戶可以通過配置 `reasoning_effort` 參數來調整推理強度，支持低、中、高和最大推理。這意味著用戶可以根據需求選擇推理的深度，從而影響模型的回應質量。其架構基於 Kimi Delta Attention 和 Attention Residuals，並採用 Mixture-of-Experts (MoE) 模式，能在 896 個專家中激活 16 個，這樣的設計提升了計算效率，並且在長期工程會話中表現出色。Kimi K3 支持 1 百萬 token 的上下文窗口，這使得它在處理大型資料集時能夠保持上下文的連貫性。

與其他模型相比，如 GPT-3，Kimi K3 的開放權重和多模態能力使其在研究和實際應用中更具靈活性。使用者可以通過 API 訪問 Kimi K3，並且它與 vLLM 和 SGLang 等推理引擎兼容，這為開發者提供了多樣的整合選擇。儘管目前的社群活動相對較新，但已經有一些熱門問題反映了用戶對於中文支持和硬體兼容性的需求。整體而言，Kimi K3 是一個具備高效能和靈活性的前沿智能模型，適合需要長期推理和多模態處理的應用場景。

**技術棧**：`Python` · `OpenAI API`

## 重點功能

- 新架構 — 基於 Kimi Delta Attention 和 Attention Residuals，提升計算效率。
- 長期編碼 — 能夠在長期會話中保持上下文，適合大型代碼庫的優化。
- 多模態支持 — 同時理解文本、圖像和視頻，適合多樣化的應用場景。
- 開放權重 — 完全開放的模型權重，促進研究和創新。
- 推理強度配置 — 透過 `reasoning_effort` 參數調整推理深度，滿足不同需求。

## 快速開始

1. 安裝依賴
```bash
pip install openai
```
2. 設置 API 密鑰
```bash
export OPENAI_API_KEY='your_api_key'
```
3. 運行範例程式
```bash
python your_script.py
```

## 程式碼範例

```bash
{
  "前置條件": "需要安裝 openai 套件並設置 API 密鑰。",
  "指令": "response = client.chat.completions.create(\n    model=model_name,\n    messages=messages,\n    stream=False,\n    max_tokens=4096,\n    reasoning_effort=\"max\",\n)",
  "預期輸出": "assistant should mention 215 and 222 that appear in the prior reasoning content."
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1993 stars（1993/天），forks 150（7.5%），這顯示出強烈的初期興趣。作者 bigeagle 在開源社群中有一定的影響力，這個模型解決了多模態推理和長上下文處理的需求，特別是在開放權重的背景下，讓研究者能夠自由探索。近期的社群討論集中在中文支持和硬體兼容性上，顯示出用戶對於這些功能的期待。技術上，隨著多模態模型的興起，Kimi K3 的設計理念符合當前的技術趨勢，並且其開放性使得它在學術界和業界都具備潛在的應用價值。

## 適合誰使用

**目標受眾**：需要開放多模態智能模型進行長期推理和知識工作的研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來開發新的多模態應用，因為 Kimi K3 的開放權重和高效能支持快速實驗和迭代。
> - 軟體工程師用它來優化大型代碼庫，因為 Kimi K3 能夠在長期會話中保持上下文，幫助理解複雜邏輯。
> - 數據科學家用它來進行深度研究，因為 Kimi K3 支持互動式可視化和長上下文處理，能夠生成更深入的分析報告。

## 架構分析

Kimi K3 採用 Mixture-of-Experts (MoE) 架構，這使得模型能夠在多個專家中選擇最合適的進行推理，從而提高了效率。其 Kimi Delta Attention 和 Attention Residuals 的設計，讓模型在處理長上下文時能夠保持高效能。這種設計的代價在於需要較高的計算資源，尤其是在激活多個專家的情況下。隨著模型規模的擴大，可能會面臨記憶體和計算瓶頸，特別是在推理過程中需要大量的上下文資料時。整體而言，Kimi K3 的架構設計旨在平衡性能和計算效率，適合需要長期推理的應用場景。

## 技術深入分析

Kimi K3 的核心技術機制基於 Mixture-of-Experts (MoE) 架構，這使得模型能夠在多個專家中選擇最合適的進行推理。這種設計不僅提高了計算效率，還能在長期會話中保持上下文的連貫性。模型的效能特性顯示，Kimi K3 能夠處理高達 1 百萬 token 的上下文，這對於大型資料集的分析至關重要。選擇 Kimi Delta Attention 和 Attention Residuals 作為基礎架構，這使得模型在推理過程中能夠有效地管理記憶體和計算資源。

技術上，這種選擇的代價在於需要較高的計算資源，尤其是在激活多個專家的情況下。隨著模型的擴大，可能會面臨記憶體和計算瓶頸，特別是在推理過程中需要大量的上下文資料時。整合 Kimi K3 到現有的技術生態中，開發者可以利用其 API 與多種推理引擎（如 vLLM 和 SGLang）進行整合，這為開發者提供了靈活的選擇。整體而言，Kimi K3 的設計理念符合當前的技術趨勢，並且其開放性使得它在學術界和業界都具備潛在的應用價值。

## 新手體驗

> [!info] 上手難度評估
> README 文件質量尚可，但缺乏範例和中文支持。安裝過程相對順暢，沒有明顯的坑。缺乏詳細的入門指南，可能對新手造成困難。

## 優缺點分析

> [!success] 優點
> - 開放權重，促進研究和創新。
> - 支持長上下文，適合複雜應用。
> - 多模態能力，能處理文本、圖像和視頻。

> [!danger] 缺點
> - 目前缺乏中文支持，影響非英語使用者。
> - 尚未針對 Apple Silicon 提供支持計劃。
> - 量化技術尚在探索階段，可能影響性能。

> [!warning] 注意事項
> - 目前 README 缺乏中文支持，可能影響非英語使用者的理解。
> - 尚未提供針對 Apple Silicon 的支持計劃，可能影響某些開發者的使用。
> - 模型的量化技術尚在探索階段，對於低位數量化的需求尚未完全滿足。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 此工具專注於代理模型的開發，而 Kimi K3 更加注重多模態和長上下文的推理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個輕量級的推理框架，適合小型專案，而 Kimi K3 的設計則針對大型應用和深度推理。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | Codex Shim 主要針對代碼生成，Kimi K3 則支持文本、圖像和視頻的多模態處理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理模型的開發，Kimi K3 更加注重多模態和長上下文的推理。 | 如果你的專案需要專注於代理模型的開發，而不是多模態處理。 | medium，因為需要重構部分應用邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供輕量級的推理框架，適合小型專案，而 Kimi K3 的設計則針對大型應用。 | 如果你的專案較小，並且需要快速實現基本功能。 | low，因為框架相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Kimi-K3** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理模型的開發，Kimi K3 更加注重多模態和長上下文的推理。 | 提供輕量級的推理框架，適合小型專案，而 Kimi K3 的設計則針對大型應用。 |
> | 遷移成本 | - | medium，因為需要重構部分應用邏輯。 | low，因為框架相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的專案需要專注於代理模型的開發，而不是多模態處理。 | 如果你的專案較小，並且需要快速實現基本功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 目前缺乏中文支持，非英語使用者可能會遇到理解困難。
  - 解法：使用翻譯工具輔助理解。
- [MEDIUM] 對 Apple Silicon 的支持尚未明確，可能導致無法在某些設備上運行。
  - 解法：使用其他硬體或等待官方支持。
- [MEDIUM] 量化技術尚在探索階段，可能影響性能。
  - 解法：在使用前進行性能測試以評估影響。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究團隊進行多模態分析 | 非常適合 | Kimi K3 的多模態支持和長上下文能力非常符合需求。 |
| 小型專案的快速開發 | 普通 | 雖然功能強大，但可能過於複雜，對小型專案來說不必要。 |
| 需要長期推理的工程項目 | 非常適合 | Kimi K3 在長期會話中的表現優異，能夠保持上下文的連貫性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的多模態推理能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈的信任程度尚可，無已知的供應鏈風險。

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
| Forks | 150 |
| Open Issues | 6 |
| Issue 解決率 | 25% (2 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-27 |
| Repo 大小 | 2.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/Kimi-K3) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bigeagle](https://github.com/bigeagle) | 2 |

## 社群與生態

**社群活躍度**：社群活動剛起步，活躍度尚可，但問題解決率偏低。
**連結**：[文件](https://platform.kimi.ai/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** update report

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/MoonshotAI/Kimi-K3/issues/6) | 这么一个强大的模型，真希望README.md是用中文来呈现的 | 4 | 0 |
> | [#7](https://github.com/MoonshotAI/Kimi-K3/issues/7) | 是否考虑出个27b或70B的？ | 0 | 0 |
> | [#5](https://github.com/MoonshotAI/Kimi-K3/issues/5) | [Request] Apple Silicon / MLX / EXO support roadmap | 0 | 0 |
> | [#4](https://github.com/MoonshotAI/Kimi-K3/issues/4) | 这得需要什么样的量化技术啊??? 2位 1位都扛不住! 要往1位以下发展了啊. | 0 | 1 |

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

相關概念：[[多模態]] · [[推理優化]] · [[量化技術]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[deepseek-ai--TileKernels|deepseek-ai/TileKernels]] · [[jamesob--local-llm|jamesob/local-llm]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]]

[GitHub](https://github.com/MoonshotAI/Kimi-K3)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "MoonshotAI--Kimi-K3"
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
> const concepts = ["多模態","推理優化","量化技術"];
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

- [[2026-07-28|2026-07-28]] — 首次收錄，2.0k stars
