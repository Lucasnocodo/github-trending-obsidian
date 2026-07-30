---
repo: MoonshotAI/Kimi-K3
url: https://github.com/MoonshotAI/Kimi-K3
owner: MoonshotAI
owner_type: Organization
language: N/A
license: NOASSERTION
description: "Open Frontier Intelligence"
homepage: ""
stars: 6201
stars_per_day: 3101
forks: 436
open_issues: 13
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
use_case: "提供強大的多模態智能模型，專注於長期編碼和知識工作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-02"
contributor_count: 1
engagement: "low"
issue_close_rate: 17
repo_size_kb: 5017
readme_length: 5417
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-28"
star_history: "2026-07-28:1993,2026-07-28:2041,2026-07-29:3586,2026-07-29:3593,2026-07-30:6201"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
aliases:
  - "Kimi-K3"
  - "MoonshotAI/Kimi-K3"
  - "提供強大的多模態智能模型，專注於長期編碼和知識工作。"
---

# Kimi-K3

**3.6k** stars · **3.6k** stars/天 · 建立 1 天前 · N/A · NOASSERTION

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
> 提供強大的多模態智能模型，專注於長期編碼和知識工作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.6k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在大型專案中進行長期編碼和知識工作的開發團隊。
> **一句話重點** Kimi K3 的設計讓它在長期編碼和知識工作中具備了強大的自動推理能力，這在目前的開源模型中是相對罕見的。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、12 小時整合，得到強大的推理能力，值得考慮。

> [!abstract] 核心創新
> Kimi K3 是全球首個開放的 3T 級模型，專為長期編碼和知識工作設計。

## 專案簡介

Kimi K3 是一個開放權重的多模態智能模型，擁有 2.8T 參數，基於 Kimi Delta Attention 和 Attention Residuals 架構。它的核心機制是能夠在多輪對話中保留思考歷史，並通過 `reasoning_effort` 參數來調整推理的深度，支持 'low', 'high', 'max' 等級。使用者可以通過 API 進行交互，並在多輪對話中傳遞完整的助手消息，這樣模型能夠更好地理解上下文，提供更連貫的回答。這樣的設計使得 Kimi K3 在長期編碼和知識工作的應用中表現出色，能夠在無需過多人工干預的情況下，處理複雜的任務。它的「一句話賣點」是：一個能在長期編碼和知識工作中自動推理的智能模型。

技術上，Kimi K3 使用了新的架構設計，並且在效率上比 Kimi K2 提升了約 2.5 倍，這使得它能夠在大規模資料處理時保持高效。與同類工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Kimi K3 的優勢在於其開放的參數設計和強大的推理能力，特別適合需要長期運行的編碼任務。實際使用中，Kimi K3 需要完整的上下文信息，這對於多輪對話的準確性至關重要，但也可能增加 API 調用的複雜性。這個專案目前處於初期階段，社群活躍度中等，未來可能會有更多功能和改進。適合需要在大型專案中進行長期編碼和知識工作的團隊，特別是那些希望減少人工干預的情況下自動化流程的團隊。

**技術棧**：`Kimi Delta Attention` · `Attention Residuals`

## 重點功能

- 新架構 — 基於 Kimi Delta Attention 和 Attention Residuals，提升了 2.5 倍的整體效率。
- 長期編碼 — 能夠在最小人為干預下持續進行長期編碼任務。
- 多模態能力 — 支持視覺輸入和結構化輸出，適用於多種應用場景。
- 推理深度調整 — 通過 `reasoning_effort` 參數調整推理深度，支持 'low', 'high', 'max'。
- 完整上下文處理 — 在多輪對話中保留完整的助手消息，提升回答的連貫性。

## 程式碼範例

```bash
{
  "前置條件": "需要安裝 openai 套件",
  "程式碼": "import openai\n\ndef chat_with_preserved_thinking(client: openai.OpenAI, model_name: str):\n    messages = [\n        {\n            \"role\": \"user\",\n            \"content\": \"Tell me three random numbers.\"\n        },\n        {\n            \"role\": \"assistant\",\n            \"reasoning_content\": \"I'll start by listing five numbers: 473, 921, 235, 215, 222, and I'll tell you the first three.\",\n            \"content\": \"473, 921, 235\"\n        },\n        {\n            \"role\": \"user\",\n            \"content\": \"What are the other two numbers you have in mind?\"\n        }\n    ]\n\n    response = client.chat.completions.create(\n        model=model_name,\n        messages=messages,\n        stream=False,\n        max_tokens=4096,\n        reasoning_effort=\"max\",\n    )\n    print(f\"response: {response.choices[0].message.reasoning}\")\n    return response.choices[0].message.content",
  "預期輸出": "應該提及先前推理內容中的 215 和 222。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 3593 stars（3593/天），forks 295（8.2%），這顯示出強烈的市場需求。作者 bigeagle 在開源社群中有一定的影響力，過去參與過多個相關專案。Kimi K3 解決了多模態智能模型在長期編碼和知識工作中的應用痛點，之前的模型往往無法有效處理長期上下文。近期的推廣活動和社群討論也促進了其快速增長。技術上，隨著計算能力的提升，這種大型模型的開發變得可行，並且社群對開放模型的需求日益增加。這樣的 forks/stars 比率顯示出許多人對這個專案進行實際修改和使用，反映出其潛在的實用性。

## 適合誰使用

**目標受眾**：需要在大型專案中進行長期編碼和知識工作的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來在大型專案中自動化長期編碼任務，因為它能夠在無需過多人工干預的情況下，處理複雜的編碼邏輯。
> - 數據科學家用它來進行深度研究，因為 Kimi K3 的推理能力能夠幫助他們快速獲取所需的資料和分析結果。
> - 遊戲開發者用它來優化遊戲中的 GPU 核心，因為它能夠在長時間的編碼過程中保持高效的運行。

## 架構分析

Kimi K3 採用新型架構，結合 Kimi Delta Attention 和 Attention Residuals，這使得它在處理長期編碼和知識工作時具備更高的效率。資料流方面，模型在接收用戶請求後，會根據 `reasoning_effort` 參數調整推理深度，並在多輪對話中保留完整的上下文信息。這樣的設計使得模型能夠在長期運行中保持一致性，但也增加了 API 的複雜性。

選擇這種架構的代價在於需要更多的計算資源來支持其高效運行，特別是在大規模資料處理時。擴展性方面，隨著使用者需求的增加，可能需要進一步優化模型的運行效率和資源使用。這些設計決策使得 Kimi K3 在多模態智能應用中具備了良好的應用潛力。

## 技術深入分析

Kimi K3 的核心技術機制是基於 Kimi Delta Attention 和 Attention Residuals，這使得它在處理多模態輸入和長期編碼任務時具備了更高的效率。模型的設計選擇使得它能夠在長期運行中保持一致性，這對於需要多輪對話的應用場景至關重要。效能方面，Kimi K3 能夠處理大規模資料，並且在推理過程中能夠保持高效的運行。設計取捨方面，選擇這種新型架構的代價在於需要更多的計算資源，這可能會在資源有限的環境中造成瓶頸。技術風險方面，隨著使用者需求的增加，模型的運行效率和資源使用可能需要進一步優化。整合方面，Kimi K3 能夠與現有的開發工具鏈進行良好的整合，特別是在長期編碼和知識工作中，能夠提供良好的支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質較低，缺乏詳細的使用範例和指導。安裝過程可能存在一定的挑戰，特別是對於不熟悉開源模型的使用者。建議在未來提供更清晰的入門指南和範例，以提升新手體驗。

## 優缺點分析

> [!success] 優點
> - 開放權重，便於社群使用和修改。
> - 強大的推理能力，適合複雜的長期編碼任務。
> - 支持多模態輸入，擴展了應用場景。

> [!danger] 缺點
> - README 資訊不足，使用者需自行摸索。
> - 需要完整的上下文信息，增加了使用複雜性。
> - 目前尚未在 Hugging Face 上發布，部署門檻較高。

> [!warning] 注意事項
> - 目前 README 資訊不足，無法提供詳細的使用指導。
> - 需要完整的上下文信息，這可能增加 API 調用的複雜性。
> - 尚未在 Hugging Face 上發布，使用者需自行部署。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於簡化多模態智能代理的開發，而 Kimi K3 提供更強大的推理能力和長期編碼支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要針對資料處理和分析，而 Kimi K3 更加專注於長期編碼和知識工作。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於簡化多模態智能代理的開發，提供了更易於使用的接口。 | 如果你的團隊需要快速開發多模態智能代理，而不需要過多的推理能力。 | low，因為接口設計較為直觀。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要針對資料處理和分析，提供了針對性強的功能。 | 如果你的專案主要集中在資料分析，而不需要長期編碼的支持。 | medium，因為需要調整資料流和處理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Kimi-K3** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於簡化多模態智能代理的開發，提供了更易於使用的接口。 | 主要針對資料處理和分析，提供了針對性強的功能。 |
> | 遷移成本 | - | low，因為接口設計較為直觀。 | medium，因為需要調整資料流和處理邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速開發多模態智能代理，而不需要過多的推理能 | 如果你的專案主要集中在資料分析，而不需要長期編碼的支持。 |

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

- **[HIGH]** 使用者可能會發現推理過程中需要完整的上下文信息，否則模型無法正確回答。
  - 解法：確保在每次 API 調用時都傳遞完整的消息上下文。
- [MEDIUM] 目前 README 缺乏詳細的使用指導，可能導致使用者摸索不清。
  - 解法：建議參考官方文檔和社群討論以獲得幫助。
- [MEDIUM] 尚未在 Hugging Face 上發布，使用者需自行部署，增加了使用門檻。
  - 解法：考慮使用其他開源模型作為替代，或等待官方發布。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 其自動推理能力能夠顯著減少人力成本，提升開發效率。 |
| 大型企業的數據分析團隊 | 普通 | 雖然具備強大的推理能力，但可能不符合所有數據處理需求。 |
| 遊戲開發團隊進行長期編碼 | 非常適合 | 其長期編碼能力能夠幫助開發者高效管理複雜的遊戲邏輯。 |
| 個人開發者進行小型專案 | 不適合 | 對於小型專案而言，使用這樣的模型可能過於複雜且資源需求高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、12 小時整合，得到強大的推理能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度尚未完全評估，但目前未發現明顯的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Kimi K3 最常與開發工具如 VS Code 和 CI/CD 工具搭配使用，特別是在長期編碼和知識工作中。實際整合範例包括在一個使用 GitHub Actions 的專案中，通過 API 調用 Kimi K3 來自動生成代碼。與主流工具鏈的相容性良好，但可能需要針對特定場景進行調整。最常見的整合問題是需要確保 API 調用的上下文完整性，這對於多輪對話至關重要。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Kimi K3 出現之前，開源社群主要依賴較小的模型進行多模態任務，這些模型在長期上下文處理上存在明顯的不足。隨著計算能力的提升和對開放模型需求的增加，Kimi K3 的開發成為可能。這個工具代表了開源多模態智能模型的一個重要進步，未來可能會引領更多類似的技術創新。

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
| Forks | 295 |
| Open Issues | 10 |
| Issue 解決率 | 17% (2 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-27 |
| Repo 大小 | 4.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/Kimi-K3) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bigeagle](https://github.com/bigeagle) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個討論和問題提出。
**連結**：[文件](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** update report file

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/MoonshotAI/Kimi-K3/issues/6) | 这么一个强大的模型，真希望README.md是用中文来呈现的 | 42 | 53 |
> | [#13](https://github.com/MoonshotAI/Kimi-K3/issues/13) | Release Kimi K3 on Hugging Face | 1 | 0 |
> | [#12](https://github.com/MoonshotAI/Kimi-K3/issues/12) | K3 tool call error repeat and repeat | 0 | 0 |
> | [#11](https://github.com/MoonshotAI/Kimi-K3/issues/11) | Provider availability and pricing for the K3 API (verified 2 | 0 | 0 |
> | [#10](https://github.com/MoonshotAI/Kimi-K3/issues/10) | 基于中间层隐状态读取的内生安全通路——替代外挂护栏与参数对齐的第三种架构 | 0 | 3 |

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

相關概念：[[多模態]] · [[推理能力]] · [[長期編碼]]

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
> const concepts = ["多模態","推理能力","長期編碼"];
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

- [[2026-07-30|2026-07-30]] — 再次上榜，6.2k stars
- [[2026-07-29|2026-07-29]] — 再次上榜，3.6k stars
- [[2026-07-28|2026-07-28]] — 首次收錄，2.0k stars
