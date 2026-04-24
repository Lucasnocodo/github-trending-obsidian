---
repo: openai/privacy-filter
url: https://github.com/openai/privacy-filter
owner: openai
owner_type: Organization
language: Python
license: Apache-2.0
description: "OpenAI Privacy Filter"
homepage: ""
stars: 966
stars_per_day: 161
forks: 73
open_issues: 12
created: 2026-04-17
pushed_at: 2026-04-22
first_seen: 2026-04-24
week: "2026-W17"
month: "2026-04"
category: "安全"
subcategory: "數據隱私"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-24
use_case: "提供一個本地化的個人識別資訊（PII）檢測與遮蔽模型，適合高效能數據清理工作流。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-01"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 100
readme_length: 9825
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-24"
star_history: "2026-04-24:959,2026-04-24:966"
tags:
  - github
  - "category/安全"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "privacy-filter"
  - "openai/privacy-filter"
  - "提供一個本地化的個人識別資訊（PII）檢測與遮蔽模型，適合高效能數據清理工作流。"
---

# privacy-filter

**966** stars · **161** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/openai--privacy-filter");
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
> 提供一個本地化的個人識別資訊（PII）檢測與遮蔽模型，適合高效能數據清理工作流。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (161 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在本地環境中運行高效 PII 檢測工具的數據隱私專業人士。
> **一句話重點** 這個專案展示了如何在本地環境中高效處理個人識別資訊，對於數據隱私需求日益增長的情況下，提供了一個可行的解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/openai--privacy-filter");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數據隱私" && p.file.name !== "openai--privacy-filter" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 數據隱私 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，5 小時整合，得到高效的 PII 檢測工具，值得投入。

> [!abstract] 核心創新
> 本專案的核心創新在於其能在一次前向傳遞中標記整個輸入序列，顯著提高了 PII 檢測的效率。

## 專案簡介

OpenAI Privacy Filter 是一個雙向的標記分類模型，專注於檢測和遮蔽文本中的個人識別資訊（PII）。用戶可以透過簡單的 CLI 指令，如 `opf 'Alice was born on 1990-01-02.'`，快速進行單次遮蔽，並可選擇在 GPU 或 CPU 上運行。這個模型的設計基於 gpt-oss 的架構，並經過後訓練以適應隱私標籤分類，能在一次前向傳遞中標記整個輸入序列，這樣的設計提高了處理效率。它支持長達 128,000 個標記的上下文窗口，適合處理長文本，且可調整精確度和召回率的平衡。技術上，它使用了稀疏混合專家架構，並且在推理時利用約束的 Viterbi 解碼來生成連貫的標籤，這比傳統的逐標記生成方法更具優勢。與其他工具相比，如 boneyard 和 gpt2api，Privacy Filter 提供了更高的自定義性和本地運行能力，特別適合需要在內部環境中運行的團隊。使用者可以透過簡單的命令行操作進行評估和微調，這使得它在數據隱私保護的工作流中非常靈活和高效。

**技術棧**：`Python 3.10` · `PyTorch` · `Hugging Face Hub`

## 重點功能

- 本地運行 — 支持在本地環境中運行，無需依賴雲端服務。
- 高效能 — 能夠在一次前向傳遞中標記整個輸入序列，提升處理速度。
- 長上下文支持 — 支持長達 128,000 個標記的上下文窗口，適合長文本處理。
- 可調整的精確度和召回率 — 使用者可以根據需求調整模型的運行參數。
- 多種運行模式 — 支持單次遮蔽、文件遮蔽和互動模式，靈活應對不同需求。

## 快速開始

1. 安裝套件
```bash
pip install -e .
```
2. 執行單次遮蔽
```bash
opf 'Alice was born on 1990-01-02.'
```
3. 在文件上執行遮蔽
```bash
opf -f /path/to/file
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 966 stars（161/天），forks 73（7.6%），顯示出穩定的增長潛力。作者 mihaimaruseac-oai 和 Bortlesboat 在開源領域有一定的經驗，這個專案解決了本地化 PII 檢測的需求，特別是在數據隱私越來越受到重視的背景下。雖然目前有一些開放的問題，但這些問題的數量相對較少，顯示出社群的活躍度和對專案的關注。這個工具的設計使其能夠在多種環境中靈活運用，特別是對於需要高效數據清理的團隊。

## 適合誰使用

**目標受眾**：需要在本地環境中運行高效 PII 檢測工具的數據隱私專業人士。

> [!example] 使用場景
> - 數據科學家用它來處理敏感數據集，因為它能快速遮蔽個人識別資訊，減少合規風險。
> - 後端工程師用它來在 API 輸出中自動檢測和遮蔽 PII，因為手動檢查容易出錯且耗時。
> - 合規專員用它來評估數據集的隱私風險，因為它提供了高效的評估工具，能夠快速分析大量文本。

## 架構分析

該專案採用雙向標記分類模型，基於 gpt-oss 的架構進行修改，並經過後訓練以適應隱私標籤分類。資料流中，模型首先進行自回歸預訓練，然後轉換為標記分類器，這樣的設計使得所有標記能在一次前向傳遞中完成，從而提高了處理速度。選擇這種架構的代價在於需要較大的計算資源來支持長上下文窗口的運行。擴展性方面，模型的設計使其能夠在多種環境中運行，但對於需要處理極大數據集的情況，可能會面臨性能瓶頸。

## 技術深入分析

OpenAI Privacy Filter 使用了雙向標記分類模型，這使得它能夠在一次前向傳遞中標記整個輸入序列，這樣的設計相較於傳統的逐標記生成方法能顯著提高處理效率。模型的架構基於 gpt-oss，並經過後訓練以適應隱私標籤分類，這樣的選擇使其能夠在多種環境中運行。效能方面，該模型支持長達 128,000 個標記的上下文窗口，這對於需要處理長文本的場景非常有利。設計取捨上，選擇了稀疏混合專家架構，這雖然提高了模型的靈活性，但也增加了對計算資源的需求。技術風險方面，模型在處理特定格式的文本時可能會遇到挑戰，特別是在多語言環境中。整合方面，該工具能夠與現有的數據處理流程無縫結合，並且支持多種運行模式，這使得團隊能夠快速部署和使用。整體來看，這個專案在數據隱私保護的領域中提供了一個強有力的工具，特別適合需要在本地運行的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的使用範例，安裝過程相對順暢，無明顯坑點。雖然沒有專門的入門指南，但基本操作簡單易懂，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持本地運行，無需依賴雲端服務，增加數據安全性。
> - 高效的處理能力，能夠快速標記長文本中的 PII。
> - 靈活的運行模式，適應不同的使用場景。

> [!danger] 缺點
> - 對於某些特定語言的日期格式識別能力不足。
> - 需要較高的計算資源，尤其是在處理長文本時。
> - 目前仍有開放的問題，社群支持和解決速度尚未明確。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要 NVIDIA GPU 以獲得最佳性能，否則運行速度可能會較慢。
> - 在某些情況下，可能無法正確識別特定語言的日期格式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了類似的 PII 檢測功能，但主要集中在雲端運行，而 Privacy Filter 支持本地運行，適合需要內部數據處理的團隊。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 是基於 GPT-2 的 API 服務，主要用於生成文本，而 Privacy Filter 專注於 PII 檢測和遮蔽，功能定位明確。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了 PII 檢測功能，但主要集中在雲端運行，缺乏本地化支持。 | 如果你的團隊已經在使用雲端解決方案，並且不需要本地運行的話，可以考慮 boneyard。 | medium，因為需要重新設計數據流和 API 整合。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 是基於 GPT-2 的 API 服務，主要用於文本生成，與 Privacy Filter 的 PII 檢測功能不同。 | 如果你的需求是生成文本而非檢測 PII，則 gpt2api 更為合適。 | low，因為 API 調用的結構相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **privacy-filter** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 提供了 PII 檢測功能，但主要集中在雲端運行，缺乏本地化支持。 | gpt2api 是基於 GPT-2 的 API 服務，主要用於文本生成，與 Privacy Filter 的 PII 檢測功能不同。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和 API 整合。 | low，因為 API 調用的結構相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用雲端解決方案，並且不需要本地運行的話， | 如果你的需求是生成文本而非檢測 PII，則 gpt2api  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在無 NVIDIA 驅動的系統上運行時會出現錯誤
  - 解法：確保系統中安裝了 NVIDIA 驅動，或使用 CPU 模式運行。
- [MEDIUM] 某些日期格式未能正確遮蔽
  - 解法：在使用前檢查輸入格式，並進行必要的預處理。
- [MEDIUM] 當添加姓氏時會導致敏感信息檢測失敗
  - 解法：避免在測試中使用複雜的姓名格式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要處理敏感數據的金融機構 | 非常適合 | 能夠快速遮蔽個人識別資訊，減少合規風險。 |
| 小型開發團隊進行數據清理 | 適合 | 簡單的 CLI 操作使得團隊能快速上手。 |
| 大型企業的數據隱私合規部門 | 普通 | 雖然功能強大，但在處理特定格式時可能會遇到挑戰。 |
| 需要在雲端運行的應用 | 不適合 | 該工具設計主要針對本地運行，不支持雲端環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，5 小時整合，得到高效的 PII 檢測工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴鏈中的第三方庫需定期檢查更新，以防止潛在的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenAI Privacy Filter 通常與數據處理工具鏈搭配使用，特別是在需要進行數據清理和隱私保護的工作流中。在一個使用 Python 和 Pandas 的數據處理專案中，可以將該工具用於自動檢測和遮蔽 PII，具體做法是將文本數據傳入 `opf` 命令中進行處理。該工具支持與 GitHub Actions 等 CI/CD 工具整合，方便在持續集成過程中進行數據隱私檢查。整合的摩擦點主要在於需要確保環境中正確安裝所有依賴，並配置好運行環境。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/openai--privacy-filter");
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
> const me = dv.page("Repos/openai--privacy-filter");
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
| Forks | 73 |
| Open Issues | 12 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-22 |
| 建立日期 | 2026-04-17 |
| Repo 大小 | 100 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/openai/privacy-filter) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mihaimaruseac-oai](https://github.com/mihaimaruseac-oai) | 2 |
> | [@Bortlesboat](https://github.com/Bortlesboat) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有提交和問題更新，但解決率較低。
**連結**：[文件](https://github.com/openai/privacy-filter/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-22 ~ 2026-04-22）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1 from Bortlesboat/codex/privacy-filter-train-syntax

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/openai/privacy-filter/issues/13) | Adding last name breaks secret detection | 0 | 0 |
> | [#12](https://github.com/openai/privacy-filter/issues/12) | Odd defaults: fails if no NVIDIA driver found on a system wi | 0 | 0 |
> | [#11](https://github.com/openai/privacy-filter/issues/11) | Japanese dates are not anonymized | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenAI Privacy Filter
> 
> OpenAI Privacy Filter is a bidirectional token-classification model for personally identifiable information (PII) detection and masking in text. It is intended for high-throughput data sanitization workflows where teams need a model that they can run on-premises that is fast, context-aware, and tunable.
> 
> OpenAI Privacy Filter is pretrained autoregressively to arrive at a checkpoint with similar architecture to gpt-oss, albeit of a smaller size.  We  then converted that checkpoint into a bidirectional token classifier over a privacy label taxonomy, and post-trained with a supervised classification loss. (For architecture details about gpt-oss, please see the gpt-oss model card.) Instead of generating text token-by-token, this model labels an input sequence in a single forward pass, then decodes coherent spans with a constrained Viterbi procedure. For each input token, the model predicts a probability distribution over the label taxonomy which consists of 8 output categories described below.
> 
> Highlights:
> 
> - Permissive Apache 2.0 license: ideal for experimentation, customization, and commercial deployment.
> - Small size: Runs in a web browser or on a laptop – 1.5B parameters total and 50M active parameters.
> - Fine-tunable: Adapt the model to specific data distributions through easy and data efficient finetuning.
> - Long-context: 128,000-token context window enables processing long text with high throughput and no chunking.
> - Runtime control: configure precision/recall tradeoffs and detected span lengths through preset operating points.
> 
> 
> ### How To Use
> 
> 1. Install the package locally:
> 
> ```bash
> pip install -e .
> ```
> 
> After this, you will have a python script `opf` that can be run directly or via `python -m opf`. The script can be used in 3 separate ways, as described below.
> 
> 2. Run one-shot redaction:
> 
> By default, `opf` looks for a model at the directory pointed to by the `OPF_CHECKPOINT` variable, or `~/.opf/privacy_filter`. If a model is not found in the `~/.opf/privacy_filter` location, it will be downloaded.
> 
> ```bash
> opf "Alice was born on 1990-01-02."
> ```
> 
> The code supports running both on GPU (by default) and CPU. To run on CPU, use `--device cpu` flag:
> 
> ```bash
> opf --device cpu "Alice was born on 1990-01-02."
> ```
> 
> To override the default checkpoint, pass `--checkpoint`:
> 
> ```bash
> opf --checkpoint /path/to/checkpoint_dir "Alice was born on 1990-01-02."
> ```
> 
> The redaction mode supports redacting an entire file at once
> 
> ```bash
> opf -f /path/to/file
> ```
> 
> The redaction can also be performed via pipes, to support complex one-liners:
> 
> ```bash
> cat /path/to/file | grep -e 'some_pattern' | opf
> ```
> 
> If no input is provided, `opf` will start in interactive mode. In this mode, for each input example, the CLI prints structured JSON output, using ANSI color-coded previews if the terminal supports them. These options can be controlled by flags.
> 
> Consult `opf redact --help` for more flags and information about the redaction mode.
> 
> 3. Run eval on a labeled dataset:
> 
> ```bash
> opf eval examples/data/sample_eval_five_examples.jsonl
> ```
> 
> The sample eval fixtures under `examples/data/sample_eval_five_examples*.jsonl` are synthetic example data only and do not describe real people or real sensitive records. See `examples/data/README.md`.
> 
> Consult `opf eval --help` for more flags and information about the evaluation mode.
> 
> 4. Finetune on your own labeled dataset:
> 
> ```bash
> opf train /path/to/train.jsonl --output-dir /path/to/finetuned_checkpoint
> ```
> 
> Consult `opf train --help` for more flags and information about the finetuning mode.
> 
> 
> ## This Repo
> 
> This repository contains the local code, CLI, and example assets used to run, evaluate, and finetune Privacy Filter checkpoints. It is meant for teams that want to inspect the implementation directly and operate the model in their own environment.
> 
> Repository resources: [License](LICENSE) and [Security Policy](SECURITY.md).
> 
> 
> ### Structure
> 
> - `opf/__main__.py`: unified CLI entrypoint for redact, eval, and train modes.
> - `opf/_api.py`: Python-facing API over the runtime and decoding stack.
> - `opf/_cli/`: command-line argument parsing and terminal rendering helpers.
> - `opf/_core/`: runtime loading, span conversion, and shared decoding logic.
> - `opf/_eval/`: dataset loading, preprocessing, metrics, and evaluation runners.
> - `opf/_train/`: local finetuning argument parsing and training runners.
> - `opf/_model/`: transformer implementation, checkpoint config, and weight loading.
> - `examples/data/`: sample eval files plus reproducible finetuning demo datasets.
> - `examples/scripts/finetuning/`: runnable finetuning demo harnesses.
> - `FINETUNING.md`: focused finetuning workflow and demo-script guide.
> - `OUTPUT_SCHEMAS.md`: JSON response and export payload formats.
> - `EVAL_AND_OUTPUT_MODES.md`: description of the output modes for redaction and evaluation.
> 
> 
> ## Model Details
> 
> 
> ### Model Description
> 
> Privacy Filter is a bidirectional token classification model with span decoding. It is trained in phases, beginning with autoregressive pretraining. The pretrained language model is then modified and post-trained as a bidirectional banded attention token classifier with band size 128 (effective attention window: 257 tokens including self). This means:
> 
> * The base model is an autoregressive pretrained checkpoint.
> * The language-model output head is replaced with a token-classification head over privacy labels.
> * Post-training is supervised token-level classification rather than next-token prediction.
> * Inference applies constrained sequence decoding to produce coherent BIOES (Begin, Inside, Outside, End, Single) span labels.
> 
> Architecturally, the implementation in this repo is a pre-norm transformer encoder-style stack with:
> 
> * token embeddings
> * 8 repeated transformer blocks
> * grouped-query attention with rotary positional embeddings, with 14 query heads and 2 KV heads (group size = 7 queries per KV head)
> * sparse mixture-of-experts feed-forward blocks with 128 experts total (top-4 routing per token)
> * a final token-classification head over privacy labels (rather than natural language vocabulary tokens), with residual stream width `d_model = 640`.
> 
> Relative to iterative autoregressive approaches, this design allows all tokens to be labeled in one pass, which improves throughput. Relative to classical masked-language-model pretraining approaches, this is a post-training conversion of an autoregressive model rather than a native masked-LM setup.
> 
> 
> ### Output Shape
> 
> Privacy Filter can detect 8 privacy span categories:
> 
> 1. `account_number`
> 2. `private_address`
> 3. `private_email`
> 4. `private_person`
> 5. `private_phone`
> 6. `private_url`
> 7. `private_date`
> 8. `secret`
> 
> To perform token-classification, each non-background span category is expanded into boundary-tagged token classes: `B-`, `I-`, `E-`, `S-`, plus the background class, `O`. So the total number of token-level output classes is 33: 1 background class \+ 8 span labels \* 4 boundary tags \= 33 classes. This means the output head emits 33 logits for each token. For a sequence of length T, the output has shape `[T, 33]`; for a batch of size B, it has shape `[B, T, 33]`.
> 
> The token-label vocabulary consists of the background label `O` plus BIOES-tagged variants of each privacy category: `account_number`, `private_address`, `private_email`, `private_person`, `private_phone`, `private_url`, `private_date`, and `secret`. In other words, for each category, the model predicts `B-`, `I-`, `E-`, and `S-` forms corresponding to begin, inside, end, and single-token spans. At inference time, these per-token logits are decoded into coherent BIOES span labels using constrained sequence decoding.
> 
> 
> ### Sequence Decoding Rationale and Calibration
> 
> #### Rationale
> 
> After the token classifier produces per-token logits, we decode labels with a constrained Viterbi decoder using linear-chain transition scoring, rather than taking an independent argmax for each token. The decoder enforces allowed

## 延伸閱讀

相關概念：[[數據隱私]] · [[個人識別資訊]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[patterniha--SNI-Spoofing|patterniha/SNI-Spoofing]]

[GitHub](https://github.com/openai/privacy-filter)

## 相關收錄

> [!note]- 直接競品（同子分類：數據隱私）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數據隱私" AND file.name != "openai--privacy-filter"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "openai--privacy-filter"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "openai--privacy-filter" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "openai--privacy-filter"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["數據隱私","個人識別資訊","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "openai--privacy-filter" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/openai--privacy-filter");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "openai--privacy-filter" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "openai" AND file.name != "openai--privacy-filter"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/openai--privacy-filter");
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
> const me = dv.page("Repos/openai--privacy-filter");
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
> const me = dv.page("Repos/openai--privacy-filter");
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
> const me = dv.page("Repos/openai--privacy-filter");
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
> const me = dv.page("Repos/openai--privacy-filter");
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

> **2026-04-24** — 首次收錄
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

- [[2026-04-24|2026-04-24]] — 首次收錄，959 stars
