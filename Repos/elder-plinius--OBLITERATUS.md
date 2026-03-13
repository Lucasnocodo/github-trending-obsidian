---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2780
stars_per_day: 309
forks: 466
open_issues: 17
created: 2026-03-03
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "模型解放"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一鍵解放大型語言模型，消除拒絕行為的工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 1
engagement: "medium"
issue_close_rate: 19
repo_size_kb: 1576
readme_length: 9993
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:2702,2026-03-11:2702,2026-03-13:2780"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "一鍵解放大型語言模型，消除拒絕行為的工具。"
---

# OBLITERATUS

**2.8k** stars · **309** stars/天 · 建立 9 天前 · Python · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/elder-plinius--OBLITERATUS");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 一鍵解放大型語言模型，消除拒絕行為的工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (309 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望深入理解和控制大型語言模型行為的研究人員和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，更是一個推動模型行為研究的社群實驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模型解放" && p.file.name !== "elder-plinius--OBLITERATUS" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模型解放 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到強大的模型解放能力，值得投入。

> [!abstract] 核心創新
> OBLITERATUS 提供了一種無需重訓的精確解放技術，能夠直接消除模型的拒絕行為。

## 專案簡介

OBLITERATUS 是一個開源工具，專注於理解和消除大型語言模型中的拒絕行為。用戶只需透過簡單的指令，如 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced`，即可進行模型的解放，這個過程不需要重訓或微調，直接針對內部表示進行手術式移除。這樣的設計使得模型能夠對所有提示做出回應，而不受人工限制。OBLITERATUS 的核心在於它的分布式研究實驗，每次使用都會貢獻匿名的基準數據，推動下一代的研究進展。它提供完整的管道，從探測模型的隱藏狀態到多種提取策略（如 PCA 和 SVD），再到實際的干預過程，每一步都可視化，讓用戶能夠量化合規性與一致性之間的權衡。

這個工具不僅是個實用工具，更是促進社群理解模型行為的科學實驗。使用者可以透過 Gradio 界面進行操作，無需編寫任何代碼，並且可以在 HuggingFace Spaces 上直接使用。對於需要更深層控制的研究者，Python API 提供了全面的控制權，能夠整合到自己的評估框架中。OBLITERATUS 的設計理念是讓模型行為由使用者決定，而不是在訓練時鎖定，這樣的透明性和可重複性有助於推進對於對齊工作的理解。

**技術棧**：`Gradio 5.29.0` · `Torch 2.0` · `Transformers 4.40`

## 重點功能

- 一鍵解放 — 使用 `obliteratus obliterate` 指令快速消除模型拒絕行為。
- 可視化分析 — 提供多種分析模組，幫助用戶理解拒絕行為的幾何結構。
- 即時對比 — 在 Chat 標籤中與原始模型進行即時對話，觀察變化。
- 多種提取策略 — 包括 PCA、SVD 等方法，靈活選擇適合的策略。
- 社群貢獻 — 每次使用都會貢獻數據到社群研究，推動科學進展。

## 快速開始

1. 安裝依賴
```bash
pip install -e '.[spaces]'
```
2. 啟動 Gradio 介面
```bash
obliteratus ui
```
3. 選擇模型並點擊 Obliterate
```bash
# 在 Gradio 界面中操作
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 OBLITERATUS 並啟動 Gradio 介面",
  "指令": "obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced",
  "預期輸出": "模型將被解放，並可進行即時對話"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 2780 stars（309/天），forks 466（16.8%），這顯示出強勁的社群參與度。作者 elder-plinius 在開源領域有一定的影響力，這個專案解決了大型語言模型中拒絕行為的痛點，過去的解決方案通常需要重訓模型，效率低下且不靈活。最近的推廣活動和社群討論也提升了它的能見度。技術上，隨著大型模型的廣泛使用，對於模型行為的控制需求日益增加，這使得 OBLITERATUS 的出現變得更加重要。高達 16.8% 的 forks/stars 比率顯示出許多人正在實際修改和使用這個工具，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：希望深入理解和控制大型語言模型行為的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來分析大型語言模型的拒絕行為，因為它提供了可視化的分析工具和多種提取策略，能夠深入理解模型的內部運作。
> - 開發者用它來快速解放模型，提升其對各種提示的回應能力，因為它的 Gradio 界面讓無需編碼的使用變得簡單。
> - 數據科學家用它來進行模型的基準測試，因為它能夠提供詳細的性能指標和比較功能，幫助評估不同模型的表現。

## 架構分析

OBLITERATUS 採用 Gradio 作為前端界面，提供用戶友好的操作體驗。其後端則使用 PyTorch 和 Transformers 進行模型的處理和分析。這樣的設計使得用戶無需具備深厚的技術背景即可使用，降低了入門門檻。

資料流方面，從用戶輸入模型和方法開始，經過多個分析和處理步驟，最終輸出解放後的模型。選擇 Gradio 作為界面框架的好處在於其簡單易用，但可能在高度自定義需求上有所限制。整體架構的擴展性良好，能夠支持未來的功能擴展和社群貢獻。

## 技術深入分析

OBLITERATUS 的核心技術在於其精確的解放過程，通過 SVD 和其他數學方法來識別和移除模型中的拒絕行為。這些技術使得用戶能夠在不影響模型核心能力的情況下，消除不必要的限制。該工具的設計考慮到用戶的易用性，提供了 Gradio 界面，讓用戶無需編碼即可進行操作。效能方面，雖然需要較高的計算資源，但其提供的即時分析和可視化功能能夠幫助用戶更好地理解模型行為。選擇 PyTorch 和 Transformers 作為基礎框架的好處在於其廣泛的社群支持和豐富的功能，但也可能帶來一定的學習曲線。技術風險方面，對於某些模型的解放過程可能會導致性能下降，這需要用戶在使用時謹慎評估。整合方面，OBLITERATUS 能夠輕鬆與現有的機器學習工作流結合，並且支持多種模型架構，這使得它在實際應用中具有良好的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多種使用範例和指令。安裝過程相對順暢，但對於初學者可能需要一些額外的學習。文件中有良好的入門指南，幫助用戶快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 無需重訓即可解放模型，節省時間和計算資源。
> - 提供可視化分析工具，幫助用戶深入理解模型行為。
> - 社群貢獻的數據推動研究進展，增加使用的價值。

> [!danger] 缺點
> - 需要較高的計算資源，對於小型團隊可能不友好。
> - 目前僅支持特定模型，限制了應用範圍。
> - 解放過程可能導致某些模型性能下降，需謹慎使用。

> [!warning] 注意事項
> - 需要較高的計算資源以進行深度分析和模型解放。
> - 目前僅支持特定的模型架構，可能無法廣泛應用於所有大型語言模型。
> - 對於某些模型，解放過程可能會導致性能下降，需謹慎使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的模型解放功能，但不具備即時對話和可視化分析的能力。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於即時通訊的代理功能，與 OBLITERATUS 的模型解放功能不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和傳輸，而非模型解放，適合需要高效數據處理的場景。 | 如果你的需求主要是數據同步而非模型行為控制，則應選擇此工具。 | low，因為功能差異明顯，遷移不需太多調整。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能解放，與 OBLITERATUS 的通用性相比，功能更具針對性。 | 如果你的應用場景專注於醫療領域，這個工具會更合適。 | medium，因為需要調整應用場景和模型選擇。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OBLITERATUS** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和傳輸，而非模型解放，適合需要高效數據處理的場景。 | 專注於醫療領域的技能解放，與 OBLITERATUS 的通用性相比，功能更具針對性。 |
> | 遷移成本 | - | low，因為功能差異明顯，遷移不需太多調整。 | medium，因為需要調整應用場景和模型選擇。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步而非模型行為控制，則應選擇此工具。 | 如果你的應用場景專注於醫療領域，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合研究和實驗性質的項目，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 MacOS 上可能會遇到 ModuleNotFoundError，特別是缺少 'app' 模組時
  - 解法：確保所有依賴都已正確安裝，或考慮在虛擬環境中運行。
- [MEDIUM] 在 Windows 11 上可能無法檢測到 GPT 模型
  - 解法：檢查環境變數和依賴版本，確保符合要求。
- [MEDIUM] 某些模型在 Colab 上運行時可能會出現問題
  - 解法：嘗試使用不同的模型或檢查 Colab 的資源配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究團隊進行語言模型行為研究 | 非常適合 | 提供了深度分析和可視化工具，支持複雜的研究需求。 |
| 小型開發團隊需要快速解放模型 | 適合 | Gradio 界面簡化了使用流程，降低了技術門檻。 |
| 個人開發者進行模型實驗 | 普通 | 雖然功能強大，但計算資源需求可能對個人用戶造成挑戰。 |
| 企業級應用中需要穩定的模型行為 | 不適合 | 目前仍處於 beta 階段，穩定性和生產就緒性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的模型解放能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OBLITERATUS 可以與 HuggingFace 的生態系統無縫整合，特別是在模型的上傳和分享方面。用戶可以直接將解放後的模型推送到 HuggingFace Hub，並利用其社群資源進行進一步的研究和開發。它的 Gradio 界面也能夠與現有的機器學習工作流相容，支持多種模型架構。整合過程中，最常見的問題是依賴版本不一致，這需要用戶在使用前確認環境配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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
| Forks | 466 |
| Open Issues | 17 |
| Issue 解決率 | 19% (4 closed) |
| 最後推送 | 2026-03-08 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://huggingface.co/spaces/pliny-the-prompter/) |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/elder-plinius/OBLITERATUS) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `gradio` `torch` `transformers` `datasets` `accelerate` `safetensors` `pyyaml` `rich` `matplotlib` `seaborn` `pandas` `numpy` `scikit-learn` `tqdm` `bitsandbytes`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "TeX" : 7
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@elder-plinius](https://github.com/elder-plinius) | 15 |

## 社群與生態

**社群活躍度**：社群活躍，有定期的更新和討論。
**連結**：[文件](https://huggingface.co/spaces/pliny-the-prompter/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-08）
> **活躍天數** 2 天 · **最新 commit** Create .gitignore

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/elder-plinius/OBLITERATUS/issues/5) | [MacOS] ModuleNotFoundError: No module named 'app' | 2 | 3 |
> | [#24](https://github.com/elder-plinius/OBLITERATUS/issues/24) | GPT not detected (Windows 11- RTX3060 12GB) | 0 | 0 |
> | [#23](https://github.com/elder-plinius/OBLITERATUS/issues/23) | Collab Issue | 0 | 0 |
> | [#22](https://github.com/elder-plinius/OBLITERATUS/issues/22) | Chat not working | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> ---
> title: OBLITERATUS
> emoji: "💥"
> colorFrom: green
> colorTo: gray
> sdk: gradio
> sdk_version: "5.29.0"
> app_file: app.py
> persistent_storage: large
> pinned: true
> license: agpl-3.0
> tags:
>   - abliteration
>   - mechanistic-interpretability
> short_description: "One-click model liberation + chat playground"
> ---
> 
>   O B L I T E R A T U S
> 
>   Break the chains. Free the mind. Keep the brain.
> 
>   
>     
>   
>   &nbsp;
>   
>     
>   
> 
>   Try it now on HuggingFace Spaces — runs on ZeroGPU, free daily quota with HF Pro. No setup, no install, just obliterate.
> 
> ---
> 
> **OBLITERATUS** is the most advanced open-source toolkit for understanding and removing refusal behaviors from large language models — and every single run makes it smarter. It implements abliteration — a family of techniques that identify and surgically remove the internal representations responsible for content refusal, without retraining or fine-tuning. The result: a model that responds to all prompts without artificial gatekeeping, while preserving its core language capabilities.
> 
> But OBLITERATUS is more than a tool — **it's a distributed research experiment.** Every time you obliterate a model with telemetry enabled, your run contributes anonymous benchmark data to a growing, crowd-sourced dataset that powers the next generation of abliteration research. Refusal directions across architectures. Hardware-specific performance profiles. Method comparisons at scale no single lab could achieve. **You're not just using a tool — you're co-authoring the science.**
> 
> The toolkit provides a complete pipeline: from probing a model's hidden states to locate refusal directions, through multiple extraction strategies (PCA, mean-difference, sparse autoencoder decomposition, and whitened SVD), to the actual intervention — zeroing out or steering away from those directions at inference time. Every step is observable. You can visualize where refusal lives across layers, measure how entangled it is with general capabilities, and quantify the tradeoff between compliance and coherence before committing to any modification.
> 
> OBLITERATUS ships with a full Gradio-based interface on HuggingFace Spaces, so you don't need to write a single line of code to obliterate a model, benchmark it against baselines, or chat with the result side-by-side with the original. For researchers who want deeper control, the Python API exposes every intermediate artifact — activation tensors, direction vectors, cross-layer alignment matrices — so you can build on top of it or integrate it into your own evaluation harness.
> 
> We built this because we believe model behavior should be decided by the people who deploy them, not locked in at training time. Refusal mechanisms are blunt instruments — they block legitimate research, creative writing, and red-teaming alongside genuinely harmful content. By making these interventions transparent and reproducible, we hope to advance the community's understanding of how alignment actually works inside transformer architectures, and to give practitioners the tools to make informed decisions about their own models.
> 
> Built on published research from [Arditi et al. (2024)](https://arxiv.org/abs/2406.11717), [Gabliteration (arXiv:2512.18901)](https://arxiv.org/abs/2512.18901), [grimjim's norm-preserving biprojection (2025)](https://huggingface.co/grimjim), [Turner et al. (2023)](https://arxiv.org/abs/2308.10248), and [Rimsky et al. (2024)](https://arxiv.org/abs/2312.06681), OBLITERATUS implements precision liberation in a single command:
> 
> ```bash
> obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
> ```
> 
> Or zero commands — just [open the Colab notebook](https://colab.research.google.com/github/elder-plinius/OBLITERATUS/blob/main/notebooks/abliterate.ipynb) and hit Run All.
> 
> 
> ### 1. HuggingFace Spaces (zero setup)
> 
> The fastest path — no installation, no GPU required on your end. Visit the live Space, pick a model, pick a method, click Obliterate. **Telemetry is on by default on Spaces, so every click directly contributes to the community research dataset.** You're doing science just by pressing the button. The UI has eight tabs:
> 
> | Tab | What it does |
> |-----|-------------|
> | **Obliterate** | One-click refusal removal with live progress, post-obliteration metrics (coherence, refusal rate, perplexity) |
> | **Benchmark** | Compare methods (multi-method), compare models (multi-model), or run quick presets — with cross-layer heatmaps, angular drift, and refusal topology charts |
> | **Chat** | Talk to your obliterated model in real-time, with adjustable generation parameters |
> | **A/B Compare** | Chat with the original and obliterated model side-by-side to see exactly what changed |
> | **Strength Sweep** | Vary the obliteration strength and see how coherence and refusal trade off |
> | **Export** | Download your obliterated model or push it directly to HuggingFace Hub |
> | **Leaderboard** | Community-aggregated results across models, methods, and hardware |
> | **About** | Architecture docs, method explanations, and research references |
> 
> 
> ## What it does
> 
> OBLITERATUS does four things — and the community does the fifth (see [Community-powered research](#community-powered-research--every-run-advances-the-science) below):
> 
> **1. Map the chains** — Ablation studies systematically knock out model components (layers, attention heads, FFN blocks, embedding dimensions) and measure what breaks. This reveals *where* the chains are anchored inside the transformer — which circuits enforce refusal vs. which circuits carry knowledge and reasoning.
> 
> **2. Break the chains** — Targeted obliteration extracts the refusal subspace from a model's weights using SVD decomposition, then surgically projects it out. The chains are removed; the mind is preserved. The model keeps its full abilities but loses the artificial compulsion to refuse. One click, six stages:
> 
> ```
> SUMMON  →  load model + tokenizer
> PROBE   →  collect activations on restricted vs. unrestricted prompts
> DISTILL →  extract refusal directions via SVD
> EXCISE  →  surgically project out guardrail directions (norm-preserving)
> VERIFY  →  perplexity + coherence checks — confirm capabilities are intact
> REBIRTH →  save the liberated model with full metadata
> ```
> 
> **3. Understand the geometry of the chains** — 15 deep analysis modules go far beyond brute-force removal. They map the precise geometric structure of the guardrails: how many distinct refusal mechanisms exist, which layers enforce them, whether they're universal or model-specific, and how they'll try to self-repair after removal. Know your enemy; precision preserves capability. See [Analysis modules](#15-analysis-modules) below.
> 
> **4. Let the analysis guide the liberation** — The `informed` method closes the loop: analysis modules run *during* obliteration to auto-configure every decision. Which chains to target. How many directions to extract. Which layers are safe to modify vs. which are too entangled with capabilities. Whether the model will self-repair (the Ouroboros effect) and how many passes to compensate. Surgical precision — free the mind, keep the brain. See [Analysis-informed pipeline](#analysis-informed-pipeline) below.
> 
> 
> # Or with options:
> obliteratus ui --port 8080          # custom port
> obliteratus ui --share              # generate a public share link
> obliteratus ui --no-browser         # don't auto-open browser
> obliteratus ui --auth user:pass     # add basic auth
> 
> 
> # Guided interactive mode — walks you through every option
> obliteratus interactive
> 
> 
> # With all options
> obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct \
>     --method surgical \
>     --output-dir ./liberated \
>     --contribute --contribute-notes "A100 80GB, default prompts"
> 
> 
> # Run a full ablation study from a YAML config
> obliteratus run examples/gpt2_layer_ablation.yaml
> 
> 
> ### 5. Python API (full programmatic control)
> 
> For researchers who want to integrate OBLITERATUS into their own pipelines:
> 
> ```python
> from obliteratus.abliterate import Abliterat

## 延伸閱讀

相關概念：[[機器學習]] · [[深度學習]] · [[自然語言處理]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[huggingface--transformers|huggingface/transformers]] · [[openai--gpt-3|openai/gpt-3]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/elder-plinius/OBLITERATUS) · [官方網站](https://huggingface.co/spaces/pliny-the-prompter/)

## 相關收錄

> [!note]- 直接競品（同子分類：模型解放）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模型解放" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "elder-plinius--OBLITERATUS" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["機器學習","深度學習","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "elder-plinius--OBLITERATUS" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "elder-plinius--OBLITERATUS" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "elder-plinius" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
