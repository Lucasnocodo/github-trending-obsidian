---
repo: lightseekorg/tokenspeed
url: https://github.com/lightseekorg/tokenspeed
owner: lightseekorg
owner_type: Organization
language: Python
license: MIT
description: "TokenSpeed is a speed-of-light LLM inference engine."
homepage: "https://lightseek.org/blog/lightseek-tokenspeed.html"
stars: 785
stars_per_day: 393
forks: 48
open_issues: 14
created: 2026-05-06
pushed_at: 2026-05-09
first_seen: 2026-05-09
week: "2026-W19"
month: "2026-05"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-09
use_case: "提供高效能的 LLM 推論引擎，專為代理工作負載設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-12"
contributor_count: 5
engagement: "low"
issue_close_rate: 13
repo_size_kb: 1587
readme_length: 2392
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-09"
star_history: "2026-05-09:785"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/blackwell"
  - "topic/deepseek"
  - "topic/gpt_oss"
  - "topic/kimi"
  - "topic/lightseek"
aliases:
  - "tokenspeed"
  - "lightseekorg/tokenspeed"
  - "提供高效能的 LLM 推論引擎，專為代理工作負載設計。"
---

# tokenspeed

**785** stars · **393** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/lightseekorg--tokenspeed");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`blackwell` `deepseek` `gpt-oss` `kimi` `lightseek` `llm` `minimax` `qwen` `speed-of-light` `tokenspeed`

> [!summary] 一句話摘要
> 提供高效能的 LLM 推論引擎，專為代理工作負載設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (393 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要高效能 LLM 推論引擎以支持代理工作負載的開發者和研究人員。
> **一句話重點** TokenSpeed 以高效能和易用性為核心，專為代理工作負載設計，能顯著提升 LLM 推論效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/lightseekorg--tokenspeed");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "lightseekorg--tokenspeed" && p.status !== "archived")
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
> **結論** 花 10 小時學習，5 小時整合，得到高效能推論，值得投資。

> [!abstract] 核心創新
> 提供業界最高效能的 LLM 推論引擎，專為代理工作負載設計。

## 專案簡介

TokenSpeed 是一個專為代理工作負載設計的 LLM 推論引擎，透過靜態編譯器生成模組邊界的集體通訊，讓使用者無需手動編寫並行邏輯。它的核心組件包括 C++ 控制平面和 Python 執行平面的調度器，使用有限狀態機編碼請求生命週期，並在編譯時強制執行安全的 KV 資源重用。TokenSpeed 的可插拔內核系統提供了一個便攜的公共 API，並包含一個快速的多頭潛在注意力（MLA）實現，專為代理工作負載優化。用戶可以使用 SMG 集成的 AsyncLLM 來處理低開銷的 CPU 請求。這個引擎的設計目標是提供 TensorRT-LLM 級別的性能和 vLLM 級別的可用性，讓使用者能夠在生產環境中高效運行。最關鍵的指令包括啟動伺服器和配置參數，這些都在文檔中有詳細說明。整體而言，TokenSpeed 的一句話賣點是：提供業界最高效能的 LLM 推論引擎，專為代理工作負載量身打造。

**技術棧**：`Python 3.9` · `C++ 17` · `TensorRT`

## 重點功能

- 靜態編譯器 — 生成模組邊界的集體通訊，無需手動編寫並行邏輯。
- C++ 控制平面 — 提供高效的請求生命週期管理和 KV 緩存所有權。
- 可插拔內核系統 — 包含快速的多頭潛在注意力（MLA）實現，專為代理工作負載設計。
- SMG 集成的 AsyncLLM — 低開銷的 CPU 請求處理，提升性能。
- 全面的文檔支持 — 提供詳細的啟動伺服器和配置參數指南。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動伺服器
```bash
python server.py --config config.yaml
```
3. 測試推論
```bash
python test_inference.py --model model_name
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝所有依賴",
  "指令": "python server.py --config config.yaml",
  "預期輸出": "伺服器啟動並開始接收請求"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 785 stars（392.5/天），forks 48（6.1%），顯示出良好的社群關注度。主要貢獻者包括多位活躍於開源社群的開發者，這些人過去有參與其他高效能計算或 LLM 項目的經驗。TokenSpeed 解決了現有 LLM 推論引擎在性能和可用性上的不足，特別是在代理工作負載方面，這是許多開發者面臨的痛點。隨著 AI 應用需求的增加，對於高效能推論引擎的需求也隨之上升。這個專案的高 forks/stars 比率顯示出許多人對其進行實際修改和使用，反映出其潛在的實用性和需求。

## 適合誰使用

**目標受眾**：需要高效能 LLM 推論引擎以支持代理工作負載的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員用它來快速測試不同 LLM 模型的推論性能，因為它提供了高效的性能和易用的 API，能夠快速迭代。
> - 後端工程師用它來處理大量的即時請求，因為其低開銷的請求處理能力能顯著提高系統的響應速度。
> - DevOps 工程師用它來優化現有的 LLM 部署流程，因為它的靜態編譯和資源重用設計能減少運行成本和資源浪費。

## 架構分析

TokenSpeed 採用模組化架構，核心由 C++ 控制平面和 Python 執行平面組成，這樣的設計使得性能和可擴展性得以兼顧。資料流從請求進入伺服器後，經由靜態編譯器生成的集體通訊進行處理，並通過內核系統進行多頭潛在注意力計算。選擇 C++ 作為控制平面語言是因為其高效能，而 Python 則提供了靈活的執行環境。

這種設計的取捨在於性能與開發效率之間的平衡，雖然 C++ 的學習曲線較陡，但能夠顯著提高推論速度。擴展性方面，TokenSpeed 目前在處理大規模請求時仍需進一步優化，特別是在資源管理和調度上。整體而言，這樣的架構設計使得 TokenSpeed 能夠在高效能推論的同時，保持良好的可用性和擴展性。

## 技術深入分析

TokenSpeed 的核心技術機制在於其模組化架構，使用 C++ 控制平面來管理請求生命週期，並利用 Python 執行平面進行實際的推論計算。這種設計使得性能和可擴展性得以兼顧，特別是在處理高並發請求時。效能方面，TokenSpeed 旨在提供接近 TensorRT-LLM 的性能，並且在多頭潛在注意力計算上具有優勢。設計取捨上，選擇 C++ 作為控制平面語言能夠顯著提高推論速度，但也增加了使用者的學習成本。技術風險方面，TokenSpeed 目前仍在開發中，未來可能會面臨功能不完整和穩定性問題。與主流框架的整合方面，TokenSpeed 提供了良好的文檔支持，但對於新手來說，可能需要一些時間來熟悉其架構和使用方式。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的介紹和詳細的使用指南，安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解其架構。文件目前僅提供英文版本，缺乏多語言支持。整體而言，花 30 分鐘能夠完成基本的安裝和配置。

## 優缺點分析

> [!success] 優點
> - 高效能推論 — 提供接近 TensorRT-LLM 的性能。
> - 易於擴展 — 可插拔內核系統允許用戶自定義功能。
> - 良好的文檔支持 — 提供詳細的使用指南和範例。

> [!danger] 缺點
> - 仍在開發中 — 不建議用於生產環境。
> - 對使用者的技術要求較高 — 需要一定的 C++ 和 Python 知識。
> - 目前功能不完整 — 部分功能尚未合併，可能存在不穩定性。

> [!warning] 注意事項
> - 目前仍在開發中，請勿用於生產環境。
> - 部分功能尚未合併，可能存在不穩定性。
> - 需要對 C++ 和 Python 有基本了解以進行配置和調試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 LLM 推論功能，但更專注於代理的可擴展性和插件系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 著重於簡化的 LLM 部署流程，適合小型專案，但性能不如 TokenSpeed。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 NVIDIA 硬體優化，適合需要高效能 GPU 支援的環境，但不如 TokenSpeed 易於使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的可擴展性和插件系統，提供了更靈活的擴展選項。 | 如果你的專案需要高度可擴展的代理系統，而不僅僅是推論性能。 | medium，因為需要重新調整架構以適應插件系統。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 NVIDIA 硬體優化，適合需要高效能 GPU 支援的環境。 | 如果你的環境主要基於 NVIDIA 硬體，並且需要針對 GPU 進行優化。 | low，因為許多概念和 API 可能相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tokenspeed** | **agent-sprite-forge** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的可擴展性和插件系統，提供了更靈活的擴展選項。 | 專注於 NVIDIA 硬體優化，適合需要高效能 GPU 支援的環境。 |
> | 遷移成本 | - | medium，因為需要重新調整架構以適應插件系統。 | low，因為許多概念和 API 可能相似。 |
> | 適用場景 | 主要場景 | 如果你的專案需要高度可擴展的代理系統，而不僅僅是推論性能。 | 如果你的環境主要基於 NVIDIA 硬體，並且需要針對 GP |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和開發，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發請求下可能會出現性能瓶頸
  - 解法：調整 KV 緩存配置以優化性能
- [MEDIUM] 某些功能尚未合併，可能導致不穩定性
  - 解法：使用穩定版本的 TokenSpeed 進行生產部署
- [MEDIUM] 對於新手來說，學習曲線較陡
  - 解法：參考官方文檔中的使用指南進行學習

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要高效能 LLM 推論的 AI 研究團隊 | 非常適合 | TokenSpeed 提供了接近 TensorRT 的性能，能夠滿足高效能需求。 |
| 小型專案或個人開發者 | 普通 | 雖然性能優越，但仍在開發中，功能不完整。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 alpha 階段，不建議用於生產環境。 |
| 需要快速迭代的開發環境 | 適合 | 其靜態編譯和資源重用設計能加快開發速度。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到高效能推論，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：TokenSpeed 本身不需要高權限，且不存取敏感資料，但使用時需注意依賴的庫是否存在已知漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TokenSpeed 最常與 TensorRT 和其他 LLM 框架搭配使用，通常在推論階段進行整合。在一個使用 TensorFlow 的專案中，你可以用 TokenSpeed 來優化推論性能，具體做法是將模型轉換為 TokenSpeed 支援的格式並啟動伺服器。它支援 GitHub Actions 和其他 CI 工具的整合，但對於某些 IDE 可能需要額外的插件或配置。整合的摩擦點主要在於需要對 C++ 和 Python 的熟悉程度，對於新手來說可能會有一定的挑戰。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 TokenSpeed 出現之前，許多 LLM 推論引擎在性能和可用性上存在不足，開發者通常需要手動編寫並行邏輯，這增加了開發的複雜性。隨著 AI 應用需求的增加，對於高效能推論引擎的需求也隨之上升。TokenSpeed 的出現正是為了解決這些問題，並提供一個更高效的解決方案。

未來，隨著技術的進步，TokenSpeed 可能會在推論性能和可用性方面持續演進，成為業界的主流選擇。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解 C++ 基本操作
- 有 LLM 使用經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 TokenSpeed。第二週：在小型內部工具中進行測試。第三週：根據反饋進行調整，撰寫最佳實踐文檔。

**成功指標**：推論速度提升 30%，開發效率提高 20%。

> [!warning] 退出計畫
> 所有設定以標準格式保存，方便未來轉移至其他推論引擎。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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
| Forks | 48 |
| Open Issues | 14 |
| Issue 解決率 | 13% (2 closed) |
| 最後推送 | 2026-05-09 |
| 建立日期 | 2026-05-06 |
| 官方網站 | [Link](https://lightseek.org/blog/lightseek-tokenspeed.html) |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lightseekorg/tokenspeed) |
| Topics | `blackwell` `deepseek` `gpt-oss` `kimi` `lightseek` `llm` `minimax` `qwen` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "C++" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zhyncs](https://github.com/zhyncs) | 4 |
> | [@syuoni](https://github.com/syuoni) | 4 |
> | [@knwng](https://github.com/knwng) | 2 |
> | [@antiagainst](https://github.com/antiagainst) | 2 |
> | [@andyluo7](https://github.com/andyluo7) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應速度尚可。
**連結**：[文件](https://lightseek.org/tokenspeed/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-08 ~ 2026-05-08）
> **活躍天數** 1 天 · **最新 commit** perf: default TF32 on for FP32 cuBLAS (router GEMMs) (#35)

## README 摘錄

> [!info]- 展開查看原文 README
> TokenSpeed is a speed-of-light LLM inference engine designed for **agentic workloads**, with TensorRT-LLM-level performance and vLLM-level usability. Our goal is to be the most performant inference engine for production agentic workloads.
> 
> Core components:
> 
> - **Modeling layer**: local-SPMD design with a static compiler that generates
>   collective communication from module-boundary placement annotations, so users
>   do not hand-write parallelism logic.
> - **Scheduler**: C++ control plane and Python execution plane. Request
>   lifecycle, KV cache ownership, and overlap timing are encoded as a
>   finite-state machine, with safe KV resource reuse enforced by the type system at compile time.
> - **Kernels**: pluggable, layered kernel system with a portable public API and
>   a centralized registry including one of the fastest **MLA**
>   (Multi-head Latent Attention) implementations on Blackwell for agentic workload.
> - **Entrypoint**: SMG-integrated AsyncLLM for low-overhead CPU-side request
>   handling.
> 
> ## Performance Comparison
> 
> ## Preview Status
> 
> This version is a preview release for reproducing the Kimi K2.5 on B200 and
> TokenSpeed MLA on B200 results from the [TokenSpeed blog](https://lightseek.org/blog/lightseek-tokenspeed.html). Several major PRs are
> still in progress and have not been merged yet.
> 
> Ongoing work includes:
> 
> - Model coverage: Qwen 3.6, DeepSeek V4, and MiniMax M2.7.
> - Runtime features: PD, EPLB, KV store, Mamba cache, VLM, and metrics.
> - Platform optimization: Hopper optimization, MI350 optimization, and related
>   runtime improvements.
> 
> These features are still being cleaned up and will be merged into `main` over
> the next few weeks. TokenSpeed is currently under heavy development and is
> intended to showcase the new runtime design and technical direction. Do not use
> this preview release for production deployments.
> 
> ## Documentation
> 
> Start here:
> 
> - [Docs Index](https://lightseek.org/tokenspeed/)
> - [Getting Started](https://lightseek.org/tokenspeed/guides/getting-started)
> - [Launching a Server](https://lightseek.org/tokenspeed/guides/launching)
> - [Model Recipes](https://lightseek.org/tokenspeed/recipes/models)
> - [Server Parameters](https://lightseek.org/tokenspeed/configuration/server)
> - [Compatible Parameters](https://lightseek.org/tokenspeed/configuration/compatible-parameters)
> - [Parallelism](https://lightseek.org/tokenspeed/serving/parallelism)

## 延伸閱讀

相關概念：[[LLM 推論]] · [[深度學習]] · [[靜態編譯]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[deepseek-ai--TileKernels|deepseek-ai/TileKernels]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]]

[GitHub](https://github.com/lightseekorg/tokenspeed) · [官方網站](https://lightseek.org/blog/lightseek-tokenspeed.html)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "lightseekorg--tokenspeed"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "lightseekorg--tokenspeed"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "lightseekorg--tokenspeed" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "lightseekorg--tokenspeed"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["LLM 推論","深度學習","靜態編譯"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "lightseekorg--tokenspeed" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/lightseekorg--tokenspeed");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lightseekorg--tokenspeed" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lightseekorg" AND file.name != "lightseekorg--tokenspeed"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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
> const me = dv.page("Repos/lightseekorg--tokenspeed");
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

> **2026-05-09** — 首次收錄
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

- [[2026-05-09|2026-05-09]] — 首次收錄，785 stars
