---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 3022
stars_per_day: 232
forks: 526
open_issues: 19
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
use_case: "一鍵解放大型語言模型，消除拒絕行為的束縛。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 1
engagement: "medium"
issue_close_rate: 17
repo_size_kb: 1576
readme_length: 9993
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:2702,2026-03-11:2702,2026-03-13:2780,2026-03-14:2818,2026-03-15:2860,2026-03-16:2899,2026-03-17:3022"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "一鍵解放大型語言模型，消除拒絕行為的束縛。"
---

# OBLITERATUS

**3.0k** stars · **232** stars/天 · 建立 13 天前 · Python · AGPL-3.0

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
> 一鍵解放大型語言模型，消除拒絕行為的束縛。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (232 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Moderate (最後推送 8 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望深入理解和控制大型語言模型行為的研究者和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，而是一個社群驅動的研究平台，讓使用者能夠參與到大型語言模型的行為研究中。

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
> **結論** 花 5 小時學習，10 小時整合，得到強大的模型解放能力，值得投資。

> [!abstract] 核心創新
> OBLITERATUS 提供了一種全新的方法來精確去除大型語言模型中的拒絕行為，並且每次使用都能貢獻到社群研究中。

## 專案簡介

OBLITERATUS 是一個開源工具包，旨在理解和去除大型語言模型中的拒絕行為。使用者可以透過簡單的命令來進行模型的解放，實現對模型拒絕內容的精確干預，而不需要重新訓練。核心流程包括加載模型、收集激活數據、提取拒絕方向、進行手術性投影，並驗證模型能力的完整性。這樣的設計使得模型能夠在不失去語言能力的情況下，去除人工設置的拒絕機制。OBLITERATUS 提供了完整的 Gradio 界面，使用者無需編寫代碼即可進行模型的解放和基準測試。

對於需要更深層控制的研究者，Python API 允許用戶訪問每個中間結果，從而進行更細緻的分析和集成。這個工具的獨特之處在於它不僅是一個工具，還是一個分散式的研究實驗，使用者的每一次操作都會貢獻到一個不斷增長的數據集，推動未來的研究進展。與傳統的模型微調方法相比，OBLITERATUS 的方法更加透明和可重複，並且能夠在不影響模型核心能力的情況下，精確地去除拒絕行為。這使得它在進行創意寫作、研究和安全測試時，提供了更大的靈活性和控制力。

**技術棧**：`Gradio 5.29.0` · `Torch 2.0` · `Transformers 4.40` · `Datasets 2.14`

## 重點功能

- 一鍵解放 — 使用命令 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 進行模型解放。
- 完整的 Gradio 界面 — 無需編碼，通過網頁界面進行模型的解放和基準測試。
- 社群驅動的研究 — 每次操作都會貢獻到一個不斷增長的數據集，推動未來的研究。
- 多種分析模組 — 提供 15 種深度分析工具，幫助用戶理解拒絕行為的幾何結構。
- Python API — 允許用戶訪問中間結果，進行更細緻的分析和集成。

## 快速開始

1. 安裝依賴
```bash
pip install -e '.[spaces]'
```
2. 啟動 Gradio 界面
```bash
obliteratus ui
```
3. 選擇模型和方法，點擊解放
```bash
# 在網頁界面操作
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 3022 stars（232/天），forks 526（17.4%），顯示出強烈的社群參與。作者 elder-plinius 之前在開源社群有良好聲譽，這個專案解決了大型語言模型中拒絕行為的痛點，這在許多應用中都是一個常見問題。該工具的設計使得使用者能夠在不需要高端硬體的情況下進行實驗，這降低了進入門檻。社群的活躍度和開放的研究實驗模式吸引了許多研究者和開發者的關注。

## 適合誰使用

**目標受眾**：希望深入理解和控制大型語言模型行為的研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來分析大型語言模型的拒絕行為，因為它提供了精確的可視化工具和數據分析功能，幫助理解模型的內部運作。
> - 創意寫作者用它來解放模型，讓其能夠生成更自由的內容，因為傳統的拒絕機制往往限制了創意表達。
> - 安全測試人員用它來測試模型的安全性，因為它能夠去除不必要的拒絕行為，讓測試更加全面和有效。

## 架構分析

OBLITERATUS 採用 Gradio 作為前端界面，提供用戶友好的操作體驗。後端則使用 PyTorch 和 Transformers 框架來處理模型的加載和操作。整體架構設計上，選擇了模組化的設計，使得每個步驟都可以獨立進行，這樣的設計使得用戶可以靈活地選擇不同的操作流程。

數據流從模型加載開始，經過激活數據收集、拒絕方向提取、手術性投影，最後生成解放後的模型。這樣的設計使得用戶能夠在每個步驟中進行觀察和調整，提供了更高的透明度和控制力。選擇 Gradio 作為界面框架的代價是需要依賴額外的前端技術，但這也使得使用者能夠快速上手。

整體上，該架構在性能和可擴展性上表現良好，能夠支持多種模型的操作。

## 技術深入分析

OBLITERATUS 的核心技術機制在於使用 SVD 分解來提取模型中的拒絕方向，這種方法使得用戶能夠精確地識別和去除不必要的拒絕行為。整體架構基於 PyTorch 和 Gradio，這使得模型的加載和操作變得高效且靈活。該工具能夠處理的模型大小取決於用戶的硬體配置，通常建議使用 GPU 來獲得最佳性能。設計上，OBLITERATUS 旨在提供透明的操作流程，讓用戶能夠在每一步中進行觀察和調整。選擇 Gradio 作為前端框架的好處在於能夠快速上手，但也帶來了額外的依賴。技術風險方面，隨著社群的擴大，數據集的質量和完整性將成為未來的一個挑戰。整合方面，OBLITERATUS 與主流的機器學習框架（如 PyTorch）相容性良好，並且可以輕鬆集成到現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解各種參數的意義。整體上，花 30 分鐘應該能夠順利啟動並進行基本操作。

## 優缺點分析

> [!success] 優點
> - 提供透明的模型解放過程，讓用戶能夠理解每一步的影響。
> - 社群驅動的研究模式，使用者的每次操作都能貢獻到更大的研究數據集中。
> - 支持多種模型和方法的比較，幫助用戶選擇最佳方案。

> [!danger] 缺點
> - 需要一定的硬體支持，對於低端設備可能不夠友好。
> - 目前的功能和支持的模型仍在擴展中，可能不夠成熟。
> - 社群貢獻的數據集可能存在不完整的情況，影響結果的準確性。

> [!warning] 注意事項
> - 需要一定的硬體支持，建議使用 GPU 以獲得最佳性能。
> - 目前僅支持特定的模型架構，對於其他架構可能無法正常工作。
> - 社群貢獻的數據集仍在擴展中，可能存在不完整的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，而 OBLITERATUS 專注於模型的拒絕行為解放，功能範圍不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據隱私保護，而 OBLITERATUS 針對模型行為的透明化和可控性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私保護，而 OBLITERATUS 專注於模型的拒絕行為解放，功能範圍不同。 | 如果你的主要需求是數據隱私而非模型行為的調整，則可以選擇 Shadowbroker。 | medium，因為兩者的功能和使用場景有所不同。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，而 OBLITERATUS 專注於模型的拒絕行為解放，功能範圍不同。 | 如果你的需求是數據同步而非模型解放，則可以選擇 parsync。 | low，因為主要是功能的替代，操作方式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OBLITERATUS** | **Shadowbroker** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據隱私保護，而 OBLITERATUS 專注於模型的拒絕行為解放，功能範圍不同。 | 專注於數據同步，而 OBLITERATUS 專注於模型的拒絕行為解放，功能範圍不同。 |
> | 遷移成本 | - | medium，因為兩者的功能和使用場景有所不同。 | low，因為主要是功能的替代，操作方式相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是數據隱私而非模型行為的調整，則可以選擇 S | 如果你的需求是數據同步而非模型解放，則可以選擇 parsyn |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合研究和實驗使用，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 MacOS 上可能會遇到 ModuleNotFoundError 錯誤
  - 解法：檢查依賴是否正確安裝，或考慮使用虛擬環境
- [MEDIUM] 某些模型的高級解放操作可能無法正常工作
  - 解法：檢查模型的兼容性，或使用預設方法

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型語言模型的研究團隊 | 非常適合 | 提供了精確的工具來分析和改進模型行為。 |
| 創意寫作的開發者 | 適合 | 能夠去除模型的拒絕行為，促進創意表達。 |
| 安全測試專家 | 非常適合 | 提供了全面的測試工具，能夠分析模型的安全性。 |
| 小型團隊或個人開發者 | 普通 | 雖然功能強大，但可能需要較高的硬體要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的模型解放能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不會存取敏感資料，但使用者需注意依賴的庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OBLITERATUS 最常與 Hugging Face 的模型和數據集搭配使用，適合在機器學習的開發和研究環境中使用。用戶可以在 Hugging Face Spaces 上快速啟動，無需安裝，並能直接進行模型的解放和基準測試。與主流的 CI/CD 工具（如 GitHub Actions）相容良好，並且可以輕鬆集成到現有的工作流中。整合過程中，使用者可能需要處理依賴問題，特別是在不同環境下運行時。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OBLITERATUS 出現之前，對於大型語言模型的拒絕行為主要依賴於微調和重訓練，這些方法往往耗時且不透明。隨著對模型行為理解的需求增加，OBLITERATUS 提供了一種新的解決方案，讓使用者能夠在不改變模型核心能力的情況下，精確去除拒絕行為。這一變化使得模型的應用場景更加廣泛，並促進了對模型行為的深入研究。

## 團隊採用指南

**建議團隊規模**：3-5 人的研究團隊

**前置技能**：
- 熟悉 Python
- 了解機器學習基本概念
- 有使用 Hugging Face 的經驗

> [!tip] 導入策略
> 第一週：在小型項目中試用。第二週：在內部工具中進行實驗。第三週：撰寫使用文檔和最佳實踐。第四週：在主要項目中進行應用。

**成功指標**：模型的拒絕率降低 50%，並且用戶滿意度提高。

> [!warning] 退出計畫
> 所有設定和數據都可以導出為標準格式，便於轉移到其他工具或平台。

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
| Forks | 526 |
| Open Issues | 19 |
| Issue 解決率 | 17% (4 closed) |
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

**社群活躍度**：社群活躍，開放的研究模式促進了大量的討論和貢獻。
**連結**：[文件](https://huggingface.co/spaces/pliny-the-prompter/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-08）
> **活躍天數** 2 天 · **最新 commit** Create .gitignore

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/elder-plinius/OBLITERATUS/issues/5) | [MacOS] ModuleNotFoundError: No module named 'app' | 2 | 3 |
> | [#16](https://github.com/elder-plinius/OBLITERATUS/issues/16) | Qwen2.5-Coder-7B-Instruct loads correctly but advanced excis | 1 | 0 |
> | [#15](https://github.com/elder-plinius/OBLITERATUS/issues/15) | Support native NVFP4 / ModelOpt checkpoints (e.g. Qwen3.5-9B | 1 | 2 |

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

相關概念：[[機器學習]] · [[自然語言處理]] · [[模型微調]]

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
> const concepts = ["機器學習","自然語言處理","模型微調"];
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
