---
repo: MoonshotAI/Kimi-K3
url: https://github.com/MoonshotAI/Kimi-K3
owner: MoonshotAI
owner_type: Organization
language: N/A
license: NOASSERTION
description: "Open Frontier Intelligence"
homepage: ""
stars: 2041
stars_per_day: 2041
forks: 153
open_issues: 6
created: 2026-07-27
pushed_at: 2026-07-28
first_seen: 2026-07-28
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-28
use_case: "提供開放的多模態智能模型，專注於長期推理和知識工作。"
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
star_history: "2026-07-28:1993,2026-07-28:2041"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
aliases:
  - "Kimi-K3"
  - "MoonshotAI/Kimi-K3"
  - "提供開放的多模態智能模型，專注於長期推理和知識工作。"
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

`ORG`

> [!summary] 一句話摘要
> 提供開放的多模態智能模型，專注於長期推理和知識工作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (2.0k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要開放多模態智能模型以進行長期推理和知識工作的開發者和研究者。
> **一句話重點** Kimi K3 的開放性和多模態能力使其在長期推理和知識工作中具備獨特優勢。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到強大的多模態推理能力，值得投入。

> [!abstract] 核心創新
> Kimi K3 是全球首個開放的 3T 級模型，專為邊界智能設計。

## 專案簡介

Kimi K3 是一個開放權重的多模態智能模型，擁有 2.8 兆參數，專為長期推理和知識工作而設計。用戶可以透過 API 進行多輪對話，並利用 `reasoning_effort` 參數來調整推理的深度，支援 `low`、`high` 和 `max` 三種模式。這個模型的架構基於 Kimi Delta Attention (KDA) 和 Attention Residuals (AttnRes)，並且具有 1 百萬 token 的上下文窗口，這使得它能夠在長時間的編程和知識工作中運行，並能夠處理文本、圖像和視頻資料。Kimi K3 的一大賣點是其開放的權重，這讓研究人員和開發者能夠自由使用和進一步創新。

與其他模型相比，如 OpenAI 的 GPT 系列，Kimi K3 在多模態處理和長期上下文管理方面具有明顯優勢，特別適合需要長期推理的應用場景。實際使用中，Kimi K3 能夠支持大規模的工程任務，並且在 GPU 核心優化和編譯器開發等方面表現出色。雖然目前的開發還在初期階段，但其潛力巨大，尤其是在開放權重的背景下，未來可能會吸引更多的開發者和研究者進行貢獻和改進。對於需要進行長期推理和多模態處理的團隊，Kimi K3 是一個值得考慮的選擇。

**技術棧**：`Kimi Delta Attention` · `Attention Residuals` · `MXFP4` · `MXFP8`

## 重點功能

- 新架構 — 基於 Kimi Delta Attention (KDA) 和 Attention Residuals (AttnRes)，提供 2.5 倍的效率提升。
- 長期編程 — 支援長時間的工程會話，能夠自動化複雜的編程任務。
- 多模態理解 — 同時處理文本、圖像和視頻，提供更豐富的交互體驗。
- 開放權重 — 完全開放的權重，促進研究和創新。
- 量化技術 — 使用 MXFP4 和 MXFP8 進行量化，提升硬體兼容性。

## 快速開始

1. 安裝依賴
```bash
pip install openai
```
2. 初始化模型
```bash
client = openai.OpenAI()
```
3. 發送請求
```bash
response = client.chat.completions.create(model='kimi-k3', messages=messages, reasoning_effort='max')
```

## 程式碼範例

```bash
{
  "前置條件": "需要安裝 openai 套件。",
  "程式碼": "response = client.chat.completions.create(\n    model=model_name,\n    messages=messages,\n    stream=False,\n    max_tokens=4096,\n    reasoning_effort='max',\n)",
  "預期輸出": "助手應該提到之前推理內容中的數字。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 2041 stars（2041/天），forks 153（7.5%），這顯示出強烈的興趣和活躍度。作者 bigeagle 在開源社群中有一定的影響力，過去可能參與過類似的 AI 項目。Kimi K3 解決了多模態智能模型在開放性和可擴展性上的不足，讓開發者能夠在不受限的情況下進行創新。這個模型的推出恰逢對開放 AI 模型需求上升的時期，社群對其功能和潛力表現出高度期待。forks/stars 比率為 7.5%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要開放多模態智能模型以進行長期推理和知識工作的開發者和研究者。

> [!example] 使用場景
> - AI 研究員用它來開發多模態智能應用，因為 Kimi K3 支援長達 1 百萬 token 的上下文，能夠處理複雜的數據集。
> - 後端工程師用它來優化 GPU 核心，因為 Kimi K3 的長期推理能力能夠自動化繁瑣的優化過程，節省開發時間。
> - 遊戲開發者用它來實現視覺交互，因為 Kimi K3 的多模態能力能夠同時處理圖像和文本，提升遊戲的互動性。

## 架構分析

Kimi K3 採用 Mixture-of-Experts (MoE) 架構，這使得模型在處理複雜任務時能夠動態選擇專家進行計算。這種設計的好處在於能夠在不增加計算成本的情況下提升模型的表現，然而，這也帶來了模型訓練和推理的複雜性。資料流方面，模型在推理時會根據上下文動態選擇激活的專家，這樣可以有效利用資源。選擇 MoE 而非傳統的全連接層，雖然能夠提升效率，但在某些情況下可能會導致專家之間的協調問題，影響推理的穩定性。擴展性方面，這種架構能夠輕鬆擴展到更大的模型，但在實際應用中，對硬體的需求也隨之增加。

## 技術深入分析

Kimi K3 的核心技術機制基於 Mixture-of-Experts (MoE) 架構，這使得模型能夠在推理時根據上下文動態選擇激活的專家，從而提高效率。這種設計允許模型在處理複雜任務時，能夠在不增加計算成本的情況下，提升表現。Kimi K3 能夠處理的資料量非常龐大，支持 1 百萬 token 的上下文，這在實際應用中能夠處理長期的對話和推理任務。選擇 KDA 和 AttnRes 作為注意力機制，能夠在推理速度和準確性之間取得良好的平衡，但這也意味著對硬體的需求會相對較高。這個模型的依賴樹相對複雜，尤其是在多模態處理上，可能需要額外的資源來支持其運行。技術風險方面，隨著模型的擴大，可能會面臨專家之間的協調問題，這在某些情況下可能影響推理的穩定性。整合方面，Kimi K3 與現有的開發工具鏈相容性良好，特別是在使用 CLI 工具時，能夠輕鬆集成到現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明，但缺乏詳細範例，可能對新手不夠友好。安裝過程相對順暢，但對於硬體要求的說明不夠明確。整體而言，對於新手來說，可能需要額外的學習時間來熟悉這個工具。

## 優缺點分析

> [!success] 優點
> - 開放權重，促進研究和創新。
> - 支持多模態處理，能夠同時理解文本和圖像。
> - 長期推理能力，適合複雜的知識工作。

> [!danger] 缺點
> - 需要高效能硬體支持，對於普通用戶可能不友好。
> - 使用上需要完整的消息傳遞，增加了複雜度。
> - 目前的文檔支持不足，非英語使用者可能面臨困難。

> [!warning] 注意事項
> - 目前不支援中文 README，可能影響非英語使用者的理解。
> - 對於大型模型的運行需求，可能需要高效能的硬體支持。
> - 在多輪對話中，需完整傳遞助手的消息，增加了使用的複雜度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理模型的創建，而 Kimi K3 更加強調多模態和長期推理的能力。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了簡化的 AI 模型，而 Kimi K3 則是針對高性能和多模態處理進行優化。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 專注於競爭性代理，而 Kimi K3 更加適合需要長期推理的應用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理模型的創建，提供簡化的開發流程，而 Kimi K3 則強調多模態和長期推理的能力。 | 如果你的專案需要快速開發代理模型，且不需要多模態處理，則可以選擇 agent-sprite-forge。 | medium，因為需要重新設計部分架構以適應不同的模型特性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡化的 AI 模型，適合快速開發，而 Kimi K3 則是針對高性能和多模態處理進行優化。 | 如果你的團隊需要快速原型開發，且不需要高性能的推理能力，可以考慮 boneyard。 | low，因為兩者在基本 API 設計上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Kimi-K3** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理模型的創建，提供簡化的開發流程，而 Kimi K3 則強調多模態和長期推理的能力。 | 提供簡化的 AI 模型，適合快速開發，而 Kimi K3 則是針對高性能和多模態處理進行優化。 |
> | 遷移成本 | - | medium，因為需要重新設計部分架構以適應不同的模型特性。 | low，因為兩者在基本 API 設計上有相似之處。 |
> | 適用場景 | 主要場景 | 如果你的專案需要快速開發代理模型，且不需要多模態處理，則可以 | 如果你的團隊需要快速原型開發，且不需要高性能的推理能力，可以 |

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

- **[HIGH]** 使用過程中可能會遇到推理內容不一致的情況，特別是在多輪對話中。
  - 解法：確保每次請求都傳遞完整的消息歷史。
- [MEDIUM] 對於大型模型的運行需求，可能需要高效能的硬體支持。
  - 解法：在雲端環境中運行，選擇適合的 GPU 配置。
- [MEDIUM] 文檔支持不足，非英語使用者可能面臨困難。
  - 解法：尋找社群翻譯或參考其他開源模型的文檔。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要長期推理的 AI 研究團隊 | 非常適合 | Kimi K3 的長期推理能力和多模態處理非常符合需求。 |
| 小型創業團隊進行快速原型開發 | 普通 | 雖然有開放權重，但可能需要較高的硬體支持。 |
| 大型企業進行知識工作自動化 | 適合 | Kimi K3 的多模態能力能夠提升工作效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到強大的多模態推理能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料，但使用時需確保 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Kimi K3 通常與開發工具如 VS Code 和 CI/CD 系統搭配使用，能夠在開發、建置和部署階段提供支持。在使用 Kimi Code CLI 時，可以輕鬆選擇 Kimi K3 作為模型，具體做法是執行 `/model` 命令。與 GitHub Actions 和 GitLab CI 的整合相對簡單，但在某些情況下可能需要額外的配置來適應不同的工作流。常見的整合問題包括對於硬體需求的理解不足，建議在整合前做好充分的準備。

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
| Forks | 153 |
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

**社群活躍度**：社群活躍度中等，最近有更新和回應，但解決率較低。
**連結**：[文件](https://platform.kimi.ai/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** update report

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/MoonshotAI/Kimi-K3/issues/6) | 这么一个强大的模型，真希望README.md是用中文来呈现的 | 5 | 0 |
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

相關概念：[[多模態]] · [[長期推理]] · [[量化技術]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[deepseek-ai--TileKernels|deepseek-ai/TileKernels]] · [[jamesob--local-llm|jamesob/local-llm]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]]

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
> const concepts = ["多模態","長期推理","量化技術"];
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
