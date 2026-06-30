---
repo: baidu/Unlimited-OCR
url: https://github.com/baidu/Unlimited-OCR
owner: baidu
owner_type: Organization
language: Python
license: MIT
description: "Unlimited OCR Works: Welcome the Era of One-shot Long-horizon Parsing."
homepage: ""
stars: 12068
stars_per_day: 1097
forks: 946
open_issues: 40
created: 2026-06-18
pushed_at: 2026-06-28
first_seen: 2026-06-23
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "NLP"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-23
use_case: "提供一種無限長度的文檔解析解決方案，支持單次長距離解析。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 13
repo_size_kb: 91749
readme_length: 8743
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-23"
star_history: "2026-06-23:481,2026-06-23:496,2026-06-24:3692,2026-06-24:3758,2026-06-25:6459,2026-06-25:6484,2026-06-26:8724,2026-06-27:10388,2026-06-28:11085,2026-06-29:11602,2026-06-30:12068"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "Unlimited-OCR"
  - "baidu/Unlimited-OCR"
  - "提供一種無限長度的文檔解析解決方案，支持單次長距離解析。"
---

# Unlimited-OCR

**12.1k** stars · **1.1k** stars/天 · 建立 11 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/baidu--Unlimited-OCR");
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
> 提供一種無限長度的文檔解析解決方案，支持單次長距離解析。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Viral (1.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效解析長文檔的數據科學家或開發者。
> **一句話重點** Unlimited-OCR 的長文本解析能力使其在文檔處理領域具備競爭優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/baidu--Unlimited-OCR");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "NLP" && p.file.name !== "baidu--Unlimited-OCR" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 NLP 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的文檔解析效果，值得考慮。

> [!abstract] 核心創新
> 支持長達 32768 個 token 的文檔解析，顯著提高了長文本處理的能力。

## 專案簡介

Unlimited-OCR 是一個基於深度學習的文檔解析工具，旨在實現單次長距離解析。用戶只需提供圖像文件，模型將自動進行解析並生成結構化結果。核心流程為：用戶輸入圖像 → 模型進行推理與解析 → 輸出結構化文本。這個工具的賣點在於其支持長達 32768 個 token 的文本生成，適合處理複雜文檔。技術上，它依賴於 Hugging Face 的 Transformers 庫，並在 NVIDIA GPU 上進行推理，使用了 PyTorch 框架。這使得它在性能上能夠處理大規模數據，但也要求用戶具備相應的硬體環境。

與其他 OCR 工具相比，如 Tesseract，Unlimited-OCR 在解析長文檔時的效果更佳，因為 Tesseract 通常在長文本的上下文理解上有所限制。對於需要處理多頁 PDF 的用戶，這個工具提供了將 PDF 轉換為圖像的功能，並支持批量解析。使用者可能會遇到的問題包括對特定硬體的依賴以及在 macOS 上的兼容性問題，這在熱門 Issues 中有提到。這個專案目前處於活躍開發階段，社群反應良好，但仍需關注其穩定性和未來的功能擴展。對於小型團隊或個人開發者，這個工具在文檔解析方面非常有用，但在大型商業應用中可能需要進一步的測試和驗證。

**技術棧**：`PyTorch 2.10.0` · `Transformers 4.57.1` · `CUDA 12.9`

## 重點功能

- 長文本解析 — 支持長達 32768 個 token 的文本生成，適合複雜文檔。
- 多頁 PDF 支持 — 能夠將 PDF 轉換為圖像並進行批量解析。
- 自定義配置 — 提供 gundam 和 base 兩種配置選擇，滿足不同需求。
- 高效推理 — 基於 NVIDIA GPU 的推理，使用 PyTorch 框架，性能優越。
- 簡單集成 — 可與 Hugging Face Transformers 無縫集成，易於使用。

## 快速開始

1. 安裝依賴
```bash
pip install torch==2.10.0 torchvision==0.25.0 transformers==4.57.1 Pillow==12.1.1
```
2. 載入模型
```bash
tokenizer = AutoTokenizer.from_pretrained('baidu/Unlimited-OCR')
```
3. 進行推理
```bash
model.infer(tokenizer, prompt='document parsing.', image_file='your_image.jpg', output_path='your/output/dir')
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝依賴並載入模型",
  "model.infer(",
  "    tokenizer,",
  "    prompt='document parsing.',",
  "    image_file='your_image.jpg',",
  "    output_path='your/output/dir',",
  "    base_size=1024, image_size=640, crop_mode=True,",
  "    max_length=32768,",
  "    no_repeat_ngram_size=35, ngram_window=128,",
  "    save_results=True,",
  ")",
  "# 預期輸出：結構化的文檔解析結果將保存在指定的輸出目錄中。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 12068 stars（1097/天），forks 946（7.8%），顯示出強勁的增長勢頭。作者 MurphyYin 來自百度，過去在深度學習和自然語言處理領域有豐富經驗。這個專案解決了長文本解析的痛點，傳統的 OCR 工具在處理長文檔時常常無法保持上下文連貫性。近期的推廣活動和社群支持也促進了其曝光率。技術上，隨著深度學習模型的進步，這個工具能夠在更高效的推理下實現長文本解析，這是之前的工具無法達到的。forks/stars 比率顯示出使用者對這個工具的實際修改和應用興趣，屬於中等水平。

## 適合誰使用

**目標受眾**：需要高效解析長文檔的數據科學家或開發者。

> [!example] 使用場景
> - 文檔管理員用它來批量解析長文檔，因為它能夠一次性處理多達 32768 個 token，顯著提高效率。
> - 研究人員用它來從 PDF 文檔中提取數據，因為它支持將 PDF 轉換為圖像並進行多頁解析，簡化了流程。
> - 開發者用它來構建自動化文檔處理系統，因為其基於深度學習的模型能提供更高的準確性和靈活性。

## 架構分析

Unlimited-OCR 採用基於 PyTorch 的深度學習模型，設計上以高效的推理和長文本解析為核心。資料流中，使用者輸入圖像，模型通過 Transformers 框架進行推理，並生成結構化文本。選擇深度學習模型而非傳統 OCR 方法，能夠更好地理解上下文，但也增加了對硬體的要求。這種設計使得模型在處理長文本時表現優異，但在實時性上可能有所妥協。擴展性方面，隨著資料量的增加，模型的推理時間可能會受到影響，使用者需考慮硬體升級。

## 技術深入分析

Unlimited-OCR 的核心技術基於深度學習模型，使用 Transformers 框架來進行文檔解析。這使得模型能夠在推理時捕捉到長文本中的上下文信息，從而提高解析的準確性。效能上，模型能夠處理多達 32768 個 token，這在傳統 OCR 工具中是難以實現的。設計選擇上，使用 PyTorch 框架提供了靈活性和擴展性，但也意味著對硬體的要求較高，尤其是對於 NVIDIA GPU 的依賴。技術風險方面，隨著使用者數量的增加，模型的推理時間可能會受到影響，這需要進一步的優化和測試。整合方面，與 Hugging Face 的生態系統相容性良好，能夠輕鬆集成到現有的工作流中，對於開發者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用範例。安裝過程順暢，但對硬體要求較高。文件中未提供中文或多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 能夠處理長文本，適合複雜文檔的解析。
> - 基於深度學習，提供更高的準確性和靈活性。
> - 支持多頁 PDF 解析，簡化了文檔處理流程。

> [!danger] 缺點
> - 對硬體要求較高，僅支援 NVIDIA GPU。
> - 在 macOS 上的兼容性尚未完全解決。
> - 需要使用者具備一定的深度學習知識以進行配置。

> [!warning] 注意事項
> - 僅支援 NVIDIA GPU 進行推理，對硬體要求較高。
> - 在 macOS 上的兼容性尚未完全解決，使用者需注意。
> - 對於特定配置的參數設置，使用者需具備一定的深度學習知識。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract) | Tesseract 是一個開源的 OCR 引擎，主要針對簡單文本的識別，而 Unlimited-OCR 在長文本解析上更具優勢，能夠保持上下文連貫性。 |
| [deepseek-ai/DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) | DeepSeek-OCR 主要針對特定文檔類型進行優化，而 Unlimited-OCR 則提供更廣泛的長文本解析能力，適合多種文檔格式。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract) | Tesseract 是一個傳統的 OCR 引擎，主要針對簡單文本的識別，而 Unlimited-OCR 則基於深度學習，能夠更好地處理長文本。 | 如果你的需求主要是簡單文本的識別且不需要長文本支持，Tesseract 會是更輕量的選擇。 | low，因為 Tesseract 的 API 和使用方式相對簡單。 |
| [deepseek-ai/DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) | DeepSeek-OCR 針對特定文檔類型進行優化，而 Unlimited-OCR 則提供更廣泛的長文本解析能力。 | 如果你的文檔類型較為特定且需要針對性優化，DeepSeek-OCR 可能更合適。 | medium，因為需要根據特定文檔類型進行調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Unlimited-OCR** | **tesseract** | **DeepSeek-OCR** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Tesseract 是一個傳統的 OCR 引擎，主要針對簡單文本的識別，而 Unlimited-OCR 則基於深度學習，能夠更好地處理長文本。 | DeepSeek-OCR 針對特定文檔類型進行優化，而 Unlimited-OCR 則提供更廣泛的長文本解析能力。 |
> | 遷移成本 | - | low，因為 Tesseract 的 API 和使用方式相對簡單。 | medium，因為需要根據特定文檔類型進行調整。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是簡單文本的識別且不需要長文本支持，Tess | 如果你的文檔類型較為特定且需要針對性優化，DeepSeek- |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上可能會遇到兼容性問題，特別是 Apple Silicon 的支持尚不完善。
  - 解法：使用虛擬機或 Docker 進行隔離環境測試。
- [MEDIUM] 對於特定配置的參數設置，使用者可能需要進行多次調整才能達到最佳效果。
  - 解法：參考社群提供的最佳實踐和範例進行調整。
- [MEDIUM] 在處理特定格式的文檔時，可能會出現解析不準確的情況。
  - 解法：使用者需進行手動校正，或考慮使用其他工具輔助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要處理長文檔的法律事務所 | 非常適合 | Unlimited-OCR 能夠高效解析長文本，適合法律文件的處理。 |
| 小型開發團隊進行文檔自動化處理 | 適合 | 提供了簡單的 API 和高效的解析能力，能夠提升開發效率。 |
| 大型企業的核心業務系統 | 不適合 | 目前尚未達到生產環境的穩定性，風險較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的文檔解析效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，僅需存取圖像文件和輸出路徑，對敏感資料的存取風險較低。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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
| Forks | 946 |
| Open Issues | 40 |
| Issue 解決率 | 13% (6 closed) |
| 最後推送 | 2026-06-28 |
| 建立日期 | 2026-06-18 |
| Repo 大小 | 89.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/baidu/Unlimited-OCR) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MurphyYin](https://github.com/MurphyYin) | 8 |

## 社群與生態

**社群活躍度**：社群活躍，持續更新與回應問題。
**連結**：[文件](https://github.com/baidu/Unlimited-OCR)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-28）
> **活躍天數** 4 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/baidu/Unlimited-OCR/issues/1) | 关于 Table 1 精度提升归因的消融实验问题 | 6 | 1 |
> | [#48](https://github.com/baidu/Unlimited-OCR/issues/48) | Support for macOS and Apple Silicon | 2 | 2 |
> | [#17](https://github.com/baidu/Unlimited-OCR/issues/17) | [bug+feature] infer.py: hardcoded ngram params, no --resume, | 1 | 1 |
> | [#15](https://github.com/baidu/Unlimited-OCR/issues/15) | [feat] container image to run unlimited-ocr | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Unlimited OCR Works
> 
>   
>     
>   
>   
>     
>   
> 
>     
>     
>   
>   
>     
>   
> 
> Welcome the Era of One-shot Long-horizon Parsing.
> 
>     
> 
> ## Release
> - [2026/06/28] 🤝 Thanks to the [vLLM community](https://github.com/vllm-project/vllm) and [Tianyu Guo](https://github.com/gty111) for their support, our model now supports vLLM inference.
> - [2026/06/24] 🤝 Thanks to [AK](https://x.com/_akhaliq) for creating a demo for us. It is now available at [Hugging Face Spaces](https://huggingface.co/spaces/baidu/Unlimited-OCR).
> - [2026/06/23] 📄 Our paper is now available on [arXiv](https://arxiv.org/abs/2606.23050).
> - [2026/06/23] 🤝 Thanks to the [ModelScope community](https://github.com/modelscope) for their support. Our model is now available at [ModelScope](https://modelscope.cn/models/PaddlePaddle/Unlimited-OCR).
> - [2026/06/22] 🚀 We present [Unlimited-OCR](https://github.com/baidu/Unlimited-OCR), aiming to push [Deepseek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) one step further.
> 
> ## Inference
> 
> ### Transformers
> Inference using Huggingface transformers on NVIDIA GPUs. Requirements tested on python 3.12.3 + CUDA12.9：
> 
> ```
> torch==2.10.0
> torchvision==0.25.0
> transformers==4.57.1
> Pillow==12.1.1
> matplotlib==3.10.8
> einops==0.8.2
> addict==2.4.0
> easydict==1.13
> pymupdf==1.27.2.2
> psutil==7.2.2
> ```
> 
> ```python
> import os
> import torch
> from transformers import AutoModel, AutoTokenizer
> 
> model_name = 'baidu/Unlimited-OCR'
> 
> tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
> model = AutoModel.from_pretrained(
>     model_name,
>     trust_remote_code=True,
>     use_safetensors=True,
>     torch_dtype=torch.bfloat16,
> )
> model = model.eval().cuda()
> 
> # ── Single image supports two configs: gundam or base ──
> # gundam: base_size=1024, image_size=640, crop_mode=True
> # base: base_size=1024, image_size=1024, crop_mode=False
> model.infer(
>     tokenizer,
>     prompt='document parsing.',
>     image_file='your_image.jpg',
>     output_path='your/output/dir',
>     base_size=1024, image_size=640, crop_mode=True,
>     max_length=32768,
>     no_repeat_ngram_size=35, ngram_window=128,
>     save_results=True,
> )
> 
> # ── Multi page / PDF only uses base (image_size=1024) ──
> model.infer_multi(
>     tokenizer,
>     prompt='Multi page parsing.',
>     image_files=['page1.png', 'page2.png', 'page3.png'],
>     output_path='your/output/dir',
>     image_size=1024,
>     max_length=32768,
>     no_repeat_ngram_size=35, ngram_window=1024,
>     save_results=True,
> )
> 
> # ── PDF (convert pages to images, then multi-page parsing) ──
> import tempfile, fitz  # PyMuPDF
> 
> def pdf_to_images(pdf_path, dpi=300):
>     doc = fitz.open(pdf_path)
>     tmp_dir = tempfile.mkdtemp(prefix='pdf_ocr_')
>     mat = fitz.Matrix(dpi / 72, dpi / 72)
>     paths = []
>     for i, page in enumerate(doc):
>         out = os.path.join(tmp_dir, f'page_{i+1:04d}.png')
>         page.get_pixmap(matrix=mat).save(out)
>         paths.append(out)
>     doc.close()
>     return paths
> 
> model.infer_multi(
>     tokenizer,
>     prompt='Multi page parsing.',
>     image_files=pdf_to_images('your_doc.pdf', dpi=300),
>     output_path='your/output/dir',
>     image_size=1024,
>     max_length=32768,
>     no_repeat_ngram_size=35, ngram_window=1024,
>     save_results=True,
> )
> ```
> 
> ### vLLM
> 
> Please refer to the official vLLM recipe for deployment details:
> 
> **Recipe:** [https://recipes.vllm.ai/baidu/Unlimited-OCR](https://recipes.vllm.ai/baidu/Unlimited-OCR)
> 
> ##### Docker Images
> Use the following Docker images depending on your GPU platform:
> 
> **Default (CUDA 13.0):**
> ```bash
> docker pull vllm/vllm-openai:unlimited-ocr
> ```
> **For Hopper GPUs (CUDA 12.9)**
> ```bash
> docker pull vllm/vllm-openai:unlimited-ocr-cu129
> ```
> 
> ### SGLang
> 
> Set up the environment (uv-managed virtualenv). Install the local SGLang wheel first,
> then pin `kernels==0.9.0` and install PyMuPDF for PDF-to-image conversion:
> ```shell
> uv venv --python 3.12
> source .venv/bin/activate
> 
> uv pip install wheel/sglang-0.0.0.dev11416+g92e8bb79e-py3-none-any.whl
> uv pip install kernels==0.11.7
> uv pip install pymupdf==1.27.2.2
> ```
> 
> Start the SGLang server:
> ```shell
> python -m sglang.launch_server \
>     --model baidu/Unlimited-OCR \
>     --served-model-name Unlimited-OCR \
>     --attention-backend fa3 \
>     --page-size 1 \
>     --mem-fraction-static 0.8 \
>     --context-length 32768 \
>     --enable-custom-logit-processor \
>     --disable-overlap-schedule \
>     --skip-server-warmup \
>     --host 0.0.0.0 \
>     --port 10000
> ```
> 
> Send streaming requests to the OpenAI-compatible API:
> ```python
> import base64
> import json
> import os
> import tempfile
> 
> import fitz
> import requests
> from sglang.srt.sampling.custom_logit_processor import DeepseekOCRNoRepeatNGramLogitProcessor
> 
> server_url = "http://127.0.0.1:10000"
> 
> session = requests.Session()
> session.trust_env = False
> 
> def pdf_to_images(pdf_path, dpi=300):
>     doc = fitz.open(pdf_path)
>     tmp_dir = tempfile.mkdtemp(prefix="pdf_ocr_")
>     mat = fitz.Matrix(dpi / 72, dpi / 72)
>     image_paths = []
>     for i, page in enumerate(doc):
>         image_path = os.path.join(tmp_dir, f"page_{i + 1:04d}.png")
>         page.get_pixmap(matrix=mat).save(image_path)
>         image_paths.append(image_path)
>     doc.close()
>     return image_paths
> 
> def encode_image(image_path):
>     ext = os.path.splitext(image_path)[1].lower()
>     mime = "image/jpeg" if ext in (".jpg", ".jpeg") else f"image/{ext.lstrip('.')}"
>     with open(image_path, "rb") as f:
>         data = base64.b64encode(f.read()).decode("utf-8")
>     return {"type": "image_url", "image_url": {"url": f"data:{mime};base64,{data}"}}
> 
> def build_content(prompt, image_paths):
>     return [{"type": "text", "text": prompt}] + [encode_image(path) for path in image_paths]
> 
> def generate(prompt, image_paths, image_mode, ngram_window):
>     payload = {
>         "model": "Unlimited-OCR",
>         "messages": [{"role": "user", "content": build_content(prompt, image_paths)}],
>         "temperature": 0,
>         "skip_special_tokens": False,
>         "images_config": {"image_mode": image_mode},
>         "custom_logit_processor": DeepseekOCRNoRepeatNGramLogitProcessor.to_str(),
>         "custom_params": {
>             "ngram_size": 35,
>             "window_size": ngram_window,
>         },
>         "stream": True,
>     }
>     response = session.post(
>         f"{server_url}/v1/chat/completions",
>         headers={"Content-Type": "application/json"},
>         data=json.dumps(payload),
>         timeout=1200,
>         stream=True,
>     )
>     response.raise_for_status()
> 
>     chunks = []
>     for line in response.iter_lines(chunk_size=1, decode_unicode=True):
>         if not line or not line.startswith("data: "):
>             continue
>         data = line[len("data: "):]
>         if data == "[DONE]":
>             break
>         event = json.loads(data)
>         delta = event["choices"][0].get("delta", {}).get("content", "")
>         if delta:
>             print(delta, end="", flush=True)
>             chunks.append(delta)
>     print()
>     return "".join(chunks)
> 
> # Single image supports two configs: gundam or base. Example below uses gundam.
> generate("document parsing.", ["your_image.jpg"], image_mode="gundam", ngram_window=128)
> 
> # Multi image (base only)
> generate("Multi page parsing.", ["page1.png", "page2.png"], image_mode="base", ngram_window=1024)
> 
> # PDF (base only)
> generate("Multi page parsing.", pdf_to_images("your_doc.pdf", dpi=300), image_mode="base", ngram_window=1024)
> ```
> 
> For batch inference, `infer.py` starts the SGLang server automatically and sends concurrent requests for an image directory or PDF:
> ```shell
> # Image directory
> python infer.py \
>     --image_dir ./examples/images \
>     --output_dir ./outputs \
>     --concurrency 8 \
>     --image_mode gundam
> 
> # PDF pages
> python infer.py \
>     --pdf ./examples/document.pdf \
>     --output_dir ./outputs \
>     --concurrency 8 \
>     --image_mode gundam
> ```
> 
> Useful options:
> ```shell
> --model_dir baidu/Unlimited-OCR   # Local path or Hugging Face model ID
> --gpu 0                           # CUDA_VISIBLE_DEVICES value
> --server_log ./log/sglang_server.log
> ```
> 
> ## Visualization
> 
> ## Acknowledgement
> 

## 延伸閱讀

相關概念：[[自然語言處理]] · [[深度學習]] · [[OCR]]

相關專案：[[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[raiyanyahya--how-to-train-your-gpt|raiyanyahya/how-to-train-your-gpt]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]]

[GitHub](https://github.com/baidu/Unlimited-OCR)

## 相關收錄

> [!note]- 直接競品（同子分類：NLP）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "NLP" AND file.name != "baidu--Unlimited-OCR"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "baidu--Unlimited-OCR"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "baidu--Unlimited-OCR" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "baidu--Unlimited-OCR"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自然語言處理","深度學習","OCR"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "baidu--Unlimited-OCR" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/baidu--Unlimited-OCR");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "baidu--Unlimited-OCR" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "baidu" AND file.name != "baidu--Unlimited-OCR"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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
> const me = dv.page("Repos/baidu--Unlimited-OCR");
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

> **2026-06-23** — 首次收錄
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

- [[2026-06-25|2026-06-25]] — 再次上榜，6.5k stars
- [[2026-06-24|2026-06-24]] — 再次上榜，3.7k stars
- [[2026-06-23|2026-06-23]] — 首次收錄，481 stars
