---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2899
stars_per_day: 242
forks: 489
open_issues: 16
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
use_case: "一鍵解放大型語言模型，消除拒絕行為，讓模型更自由地回應所有提示。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 1
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 1576
readme_length: 9993
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:2702,2026-03-11:2702,2026-03-13:2780,2026-03-14:2818,2026-03-15:2860,2026-03-16:2899"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "一鍵解放大型語言模型，消除拒絕行為，讓模型更自由地回應所有提示。"
---

# OBLITERATUS

**2.9k** stars · **242** stars/天 · 建立 12 天前 · Python · AGPL-3.0

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
> 一鍵解放大型語言模型，消除拒絕行為，讓模型更自由地回應所有提示。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (242 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 7 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望深入理解和調整大型語言模型行為的 AI 研究者和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，更是一個社群驅動的研究實驗，讓使用者能夠參與到大型語言模型的行為調整中。

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
> **結論** 花 5 小時學習，10 小時整合，能夠獲得模型行為的深度控制，值得投入。

> [!abstract] 核心創新
> OBLITERATUS 提供了一種新的 abliteration 方法，能夠精確移除模型的拒絕行為，而不需要重新訓練。

## 專案簡介

OBLITERATUS 是一個開源工具包，專注於理解和消除大型語言模型的拒絕行為。用戶可以透過簡單的命令，像是 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced`，來針對模型進行精確的干預，移除內部的拒絕表徵，而不需要重新訓練模型。這種方法稱為 abliteration，透過多種提取策略（如 PCA 和 SVD）來識別和移除模型中造成拒絕的方向，最終保留模型的核心語言能力。OBLITERATUS 的設計理念是讓模型行為由使用者決定，而不是在訓練時鎖定。這個工具不僅是一個應用，還是一個分散式的研究實驗，每次使用都會貢獻匿名的基準數據，推動下一代的研究進展。這樣的設計使得研究者能夠在不寫代碼的情況下，透過 Gradio 界面進行模型的解放和基準測試，並且可以透過 Python API 獲得更深層的控制。相較於其他工具，OBLITERATUS 提供了更高的透明度和可重複性，讓用戶能夠了解拒絕機制的幾何結構，並在干預時做出明智的決策。

**技術棧**：`Gradio 5.29.0` · `PyTorch 2.0` · `Transformers 4.40`

## 重點功能

- 一鍵解放 — 使用 `obliteratus obliterate` 命令輕鬆移除模型拒絕行為。
- 實時聊天界面 — 透過 Gradio 界面與解放後的模型進行互動，調整生成參數。
- 多種分析模組 — 提供 15 種深度分析模組，幫助理解拒絕機制的幾何結構。
- 社群貢獻 — 每次使用都會貢獻數據到社群研究資料集，推動研究進展。
- 完整的 Python API — 讓研究者能夠在自己的管道中整合 OBLITERATUS，獲得更高的控制權。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動 Gradio 界面
```bash
obliteratus ui
```
3. 選擇模型並進行解放
```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝 OBLITERATUS 並配置好環境。",
  "指令": "obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced",
  "預期輸出": "模型將被解放，並保留其核心能力。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 2899 stars（242/天），forks 489（16.9%），顯示出強勁的增長潛力。這個專案的主要貢獻者 elder-plinius 之前在開源社區有過其他成功的專案，這使得他們的工具受到關注。OBLITERATUS 解決了大型語言模型在使用過程中常見的拒絕行為問題，這在過去的工具中往往無法有效處理。近期的社群討論和推文也讓這個專案的曝光率提高。由於其獨特的設計和實驗性質，吸引了許多研究者和開發者的興趣，促進了其快速成長。

## 適合誰使用

**目標受眾**：希望深入理解和調整大型語言模型行為的 AI 研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來分析大型語言模型的拒絕行為，因為它提供了詳細的幾何結構分析和可視化工具。
> - 開發者用它來解放特定模型的拒絕機制，因為只需一個命令就能完成，節省了大量的時間和精力。
> - 教育工作者用它來展示大型語言模型的內部運作，因為它的 Gradio 界面使得無需編碼的互動變得簡單明瞭。

## 架構分析

OBLITERATUS 的架構基於 Gradio 提供的界面，使用者可以透過簡單的點擊操作來進行模型的解放。這種設計使得使用者無需具備深厚的技術背景即可操作。資料流方面，模型的隱藏狀態會被探測，然後通過多種提取策略（如 SVD）來識別拒絕方向，最終進行干預。這種方法的優勢在於能夠保持模型的核心能力，然而，這也意味著使用者需要對模型的內部結構有一定的理解，以便做出明智的決策。整體而言，這種架構的擴展性良好，但在處理大型模型時可能會面臨計算資源的瓶頸。

## 技術深入分析

OBLITERATUS 的核心技術機制是 abliteration，這是一種針對大型語言模型的精確干預方法。它使用 SVD 等數學技術來識別和移除模型中的拒絕行為，這使得模型能夠在不損失核心能力的情況下，對所有提示做出回應。效能方面，這個工具能夠在不需要高性能 GPU 的情況下運行，適合於各種硬體環境。然而，對於大型模型的解放，仍然需要一定的計算資源。設計上，OBLITERATUS 的選擇是基於開源社群的需求，讓使用者能夠在不寫代碼的情況下進行操作，這降低了使用門檻。技術風險方面，隨著使用者的增多，可能會出現數據隱私和安全性問題，特別是在社群貢獻數據的情況下。整合方面，OBLITERATUS 可以與 HuggingFace 的生態系統無縫對接，這使得使用者能夠輕鬆地將解放後的模型推送到 HuggingFace Hub，進一步擴展其應用範圍。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多種使用方式和範例。安裝過程相對順暢，但對於新手來說，理解模型內部結構可能有一定挑戰。文件中沒有多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 簡單易用的界面，無需編碼即可進行模型解放。
> - 提供詳細的分析模組，幫助使用者理解模型的拒絕機制。
> - 社群驅動的研究，使用者的每次操作都能貢獻數據。

> [!danger] 缺點
> - 對於某些模型，解放效果可能不如預期，需進行多次調整。
> - 需要一定的計算資源來運行大型模型。
> - 對新手使用者來說，理解模型內部結構可能有一定難度。

> [!warning] 注意事項
> - 僅支援特定版本的 Gradio 和 PyTorch。
> - 需要一定的計算資源來運行大型模型，雖然可以在無 GPU 環境下運行。
> - 對於某些模型，解放效果可能不如預期，需進行多次調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供資料同步功能，但不專注於模型的拒絕行為分析。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於隱私保護和數據安全，與 OBLITERATUS 的功能範圍不同。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於即時通訊的代理，與大型語言模型的解放無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不針對模型的拒絕行為進行分析。 | 如果你的需求是資料同步而非模型解放，則應選擇此工具。 | low，因為功能範圍不同，遷移不涉及複雜的調整。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於隱私保護，與 OBLITERATUS 的功能範圍不同。 | 如果你的重點是資料安全而非模型行為調整，則應選擇此工具。 | medium，因為需要重新評估安全需求和整合方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OBLITERATUS** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，並不針對模型的拒絕行為進行分析。 | 專注於隱私保護，與 OBLITERATUS 的功能範圍不同。 |
> | 遷移成本 | - | low，因為功能範圍不同，遷移不涉及複雜的調整。 | medium，因為需要重新評估安全需求和整合方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非模型解放，則應選擇此工具。 | 如果你的重點是資料安全而非模型行為調整，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合研究和實驗性質的專案，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 MacOS 上可能會遇到 ModuleNotFoundError，特別是在安裝過程中
  - 解法：確保所有依賴都正確安裝，並檢查環境變數
- [MEDIUM] 在 Windows 11 上可能無法檢測到 GPT 模型
  - 解法：確認驅動和環境設置正確，必要時重新安裝相關依賴
- [MEDIUM] 某些模型在解放後可能無法正常運行
  - 解法：嘗試不同的解放方法或參數設置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型語言模型的研究團隊 | 非常適合 | 提供了深入的分析和解放工具，適合進行模型行為研究。 |
| 小型開發團隊希望快速解放模型 | 適合 | 簡單的操作界面使得快速解放成為可能。 |
| 對模型內部運作不熟悉的使用者 | 不適合 | 需要對模型的內部結構有一定理解，否則難以有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠獲得模型行為的深度控制，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OBLITERATUS 本身不需要高權限運行，且不會存取敏感資料，但使用者需注意社群貢獻的數據隱私問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OBLITERATUS 最常與 HuggingFace 的模型和工具搭配使用，特別是在開發和研究階段。用戶可以在 HuggingFace Spaces 上直接運行 OBLITERATUS，無需安裝任何軟體。整合過程中，使用者只需簡單的命令即可將解放後的模型推送到 HuggingFace Hub。與主流 CI/CD 工具（如 GitHub Actions）相容，方便進行自動化測試和部署。常見的整合問題包括依賴版本不匹配，使用者需確保環境一致性以避免錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OBLITERATUS 出現之前，許多大型語言模型的拒絕行為無法有效處理，使用者只能依賴訓練時的設置。這導致了許多研究和應用的限制。隨著開源社群對模型行為調整的需求增加，OBLITERATUS 提供了一種新的解決方案。

這個工具的出現代表了對於模型透明度和可調整性的重視，未來可能會引領更多類似的研究和工具發展。

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
| Forks | 489 |
| Open Issues | 16 |
| Issue 解決率 | 20% (4 closed) |
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

**社群活躍度**：社群活躍，持續有新問題和功能請求出現。
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
> | [#22](https://github.com/elder-plinius/OBLITERATUS/issues/22) | Chat not working | 0 | 1 |

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

相關概念：[[機器學習]] · [[自然語言處理]] · [[模型解放]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[huggingface--transformers|huggingface/transformers]] · [[openai--gpt-3|openai/gpt-3]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

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
> const concepts = ["機器學習","自然語言處理","模型解放"];
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
