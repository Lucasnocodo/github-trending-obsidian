---
repo: TheTom/turboquant_plus
url: https://github.com/TheTom/turboquant_plus
owner: TheTom
owner_type: User
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 1887
stars_per_day: 315
forks: 168
open_issues: 17
created: 2026-03-25
pushed_at: 2026-03-30
first_seen: 2026-03-31
week: "2026-W14"
month: "2026-03"
category: "AI/ML"
subcategory: "推論優化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-31
use_case: "透過 KV 快取壓縮技術提升本地 LLM 推論效率。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-03"
contributor_count: 2
engagement: "low"
issue_close_rate: 63
repo_size_kb: 4772
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-31"
star_history: "2026-03-31:1887"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "turboquant_plus"
  - "TheTom/turboquant_plus"
  - "透過 KV 快取壓縮技術提升本地 LLM 推論效率。"
---

# turboquant_plus

**1.9k** stars · **315** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/TheTom--turboquant_plus");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 透過 KV 快取壓縮技術提升本地 LLM 推論效率。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (315 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在本地環境中高效運行 LLM 的開發者和研究者。
> **一句話重點** TurboQuant+ 不僅是壓縮工具，更是推論效率的提升方案，透過注意力感知的計算實現了更高的性能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TheTom--turboquant_plus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "TheTom--turboquant_plus" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 推論優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，能夠顯著提升 LLM 推論效率，值得投入。

> [!abstract] 核心創新
> 核心創新在於將 KV 快取優化從壓縮轉向注意力感知的計算。

## 專案簡介

TurboQuant+ 是一個針對本地 LLM 推論的 KV 快取壓縮實作，能夠將快取壓縮達到 3.8–6.4 倍，使用 PolarQuant 和 Walsh-Hadamard 旋轉技術。其核心機制是利用注意力加權的 KV 快取解碼（Sparse V），在推論過程中跳過低權重的 V 位置，從而提高解碼速度，最高可達 +22.8% 的解碼速度提升，且對於長上下文的影響微乎其微。這個工具的賣點在於它不僅僅是壓縮，還將計算優化轉向注意力感知的計算，這使得在推論時能更有效地利用資源。技術上，該專案依賴於 Python 和 C++，並使用了 NumPy 和 SciPy 進行數據處理，整體依賴較輕，適合快速部署。與其他壓縮工具相比，如 q8_0 和 q4_0，TurboQuant+ 在壓縮比和解碼速度上提供了更好的平衡，特別是在使用 Apple Silicon 時，能夠達到接近 q8_0 的預填速度。實際使用中，TurboQuant+ 在不同模型和上下文長度下的表現穩定，且社群測試結果顯示其在多種硬體上均有良好表現。這個專案目前處於 v1 完成階段，並計劃在未來進行更多改進，適合需要高效能推論的開發者和研究者使用。

**技術棧**：`Python 3.10` · `NumPy >= 1.24` · `SciPy >= 1.10`

## 重點功能

- KV 快取壓縮 — 壓縮比達到 3.8–6.4 倍，使用 PolarQuant 和 Walsh-Hadamard 旋轉技術。
- Sparse V 解碼 — 利用注意力權重跳過低權重 V 位置，解碼速度提升最高可達 +22.8%。
- 支持多種快取格式 — turbo2 (2-bit)、turbo3 (3-bit)、turbo4 (4-bit)，根據需求選擇合適的格式。
- 高效能在 Apple Silicon 上運行 — 針對 M1/M2/M3/M5 硬體進行優化，達到接近 q8_0 的預填速度。
- 社群測試 — 已有 10+ 測試者在多種硬體上進行測試，確保穩定性和效能。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/TheTom/turboquant_plus.git && cd turboquant_plus && python3 -m venv .venv && source .venv/bin/activate && pip install -e '.[dev]'
```
2. 運行壓縮演示
```bash
python3 benchmarks/demo.py
```
3. 運行測試以驗證安裝
```bash
python3 -m pytest tests/ -v
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 TurboQuant+ 並進入虛擬環境",
  "指令": "python3 benchmarks/demo.py",
  "預期輸出": "壓縮演示結果"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1887 stars（315/天），forks 168（8.9%），顯示出強勁的增長勢頭。作者 TheTom 和 seanrasch 在 AI 壓縮技術領域有豐富的背景，這個專案解決了本地 LLM 推論效率低下的問題，特別是 KV 快取的使用效率。之前的解決方案如 q8_0 雖然有效，但在壓縮比和速度上無法滿足所有需求。該專案的推出恰逢社群對於高效能 LLM 推論需求的上升，並且有多個社群成員積極參與測試和反饋，這進一步促進了其流行。forks/stars 比率為 8.9%，顯示出不少人對此專案進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要在本地環境中高效運行 LLM 的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來壓縮大型模型的 KV 快取，因為能夠在不顯著損失性能的情況下提高推論速度。
> - 後端工程師用它來優化本地 LLM 的推論效率，因為 TurboQuant+ 提供了比傳統方法更高的壓縮比和解碼速度。
> - 開發者用它來在 Apple Silicon 硬體上運行 LLM，因為其針對該平台的優化能夠充分發揮硬體性能。

## 架構分析

TurboQuant+ 的架構設計重點在於高效的 KV 快取壓縮與解碼。使用 PolarQuant 和 Walsh-Hadamard 旋轉技術進行壓縮，並透過 Sparse V 解碼技術來優化推論過程。這種設計使得在推論時能夠跳過低權重的計算，從而提高整體速度。選擇這種架構的代價在於需要額外的計算資源來實現注意力感知的解碼。擴展性方面，該架構能夠支持多種快取格式，並且在不同硬體上均有良好表現，這使得它在實際應用中具有較高的靈活性。

## 技術深入分析

TurboQuant+ 的核心技術機制是基於 PolarQuant 和 Walsh-Hadamard 旋轉的 KV 快取壓縮，這使得它能夠在保持解碼速度的同時達到高壓縮比。該專案的效能特性在於能夠處理多達 32K 的上下文，並在 Apple Silicon 上達到接近 q8_0 的預填速度。設計上，選擇 Python 和 C++ 作為主要語言，這使得它能夠在數據處理和計算上達到較高的效率。依賴樹相對簡單，主要依賴於 NumPy 和 SciPy，這使得安裝和使用都相對輕鬆。技術風險方面，對於低位模型的支持可能會在實際使用中遇到挑戰，特別是在選擇快取配置時。整合方面，該專案能夠與主流的 LLM 框架兼容，並且在 CI/CD pipeline 中的使用也相對友好，這使得團隊能夠快速上手並進行實驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程中需要配置 C/C++ 編譯環境，這對於沒有經驗的使用者可能會有一定難度。整體來說，文件質量良好，能夠幫助使用者理解如何使用該工具。

## 優缺點分析

> [!success] 優點
> - 高效的 KV 快取壓縮，能顯著提升推論速度。
> - 注意力感知的解碼技術，能夠在不損失性能的情況下進一步優化計算。
> - 良好的社群支持和測試結果，確保穩定性和效能。

> [!danger] 缺點
> - 需要一定的硬體支持，特別是在 Apple Silicon 上才能發揮最佳效能。
> - 安裝過程中需要配置 C/C++ 編譯環境，對新手可能有一定挑戰。
> - 在某些低位模型上可能需要額外的配置調整。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要 C/C++ 編譯器來構建 llama.cpp
> - 在某些低位模型上可能需要進一步調整配置以獲得最佳性能

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的壓縮技術，但主要針對資料同步，無法直接應用於 LLM 推論的 KV 快取壓縮。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於資料隱私保護，並不涉及 KV 快取壓縮技術，適用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 LLM 的高效推論，但不專注於 KV 快取壓縮，適合需要快速推論的場景。 | 如果你的應用場景對於 KV 快取的壓縮需求不高，而更關注推論速度，則 HolyClaude 可能更適合。 | medium，因為需要重新調整模型的配置和使用方式。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於即時通訊的代理工具，與 TurboQuant+ 的應用場景不同。 | 如果你的需求是即時通訊而非 LLM 推論，則這個工具會更合適。 | low，因為功能和需求差異不大。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **turboquant_plus** | **HolyClaude** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 LLM 的高效推論，但不專注於 KV 快取壓縮，適合需要快速推論的場景。 | 主要用於即時通訊的代理工具，與 TurboQuant+ 的應用場景不同。 |
> | 遷移成本 | - | medium，因為需要重新調整模型的配置和使用方式。 | low，因為功能和需求差異不大。 |
> | 適用場景 | 主要場景 | 如果你的應用場景對於 KV 快取的壓縮需求不高，而更關注推論 | 如果你的需求是即時通訊而非 LLM 推論，則這個工具會更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在非關鍵的內部工具中試用，尚不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些低位模型上，使用不當的快取配置可能導致性能下降。
  - 解法：參考官方的配置建議，根據模型特性調整快取配置。
- [MEDIUM] 安裝過程中可能會遇到 C/C++ 編譯環境的配置問題。
  - 解法：確保已安裝 Xcode Command Line Tools 和 CMake，並遵循官方文檔進行配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在本地環境中運行大型 LLM 的研究團隊 | 非常適合 | TurboQuant+ 提供高效的 KV 快取壓縮，能顯著提升推論速度。 |
| 小型開發團隊希望在 Apple Silicon 上運行 LLM | 適合 | 該專案針對 Apple Silicon 進行了優化，能夠發揮硬體性能。 |
| 對推論速度要求極高的商業應用 | 普通 | 雖然性能優越，但仍需根據具體需求進行配置調整。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠顯著提升 LLM 推論效率，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料。依賴的庫如 NumPy 和 SciPy 也有良好的安全記錄，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TurboQuant+ 最常與 LLM 框架如 llama.cpp 搭配使用，主要在推論階段進行 KV 快取的優化。在一個使用 llama.cpp 的專案中，可以通過配置快取類型來使用 TurboQuant+ 進行壓縮。該專案支持與 GitHub Actions 等 CI 工具整合，並且在 VS Code 等 IDE 中也有良好的開發體驗。整合過程中，最常見的問題是快取配置不當，這可能會影響性能，建議使用者參考官方文檔進行配置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 TurboQuant+ 出現之前，KV 快取的壓縮主要依賴於傳統的量化技術，如 q8_0 和 q4_0，這些方法雖然有效，但在推論速度和壓縮比上無法滿足所有需求。隨著 LLM 的普及和對推論效率的需求上升，TurboQuant+ 的出現正好填補了這一空白。這個工具代表了推論優化技術的最新趨勢，未來可能會有更多基於注意力感知的計算方法被提出。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python 和 C++
- 了解 LLM 的基本運作原理
- 有一定的數據處理經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 TurboQuant+。第二週：在非關鍵的內部工具中導入，進行性能測試。第三週：根據測試結果調整配置，撰寫使用文檔。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：推論速度提升 30% 以上，且無明顯性能損失。

> [!warning] 退出計畫
> 如果需要退出該工具，所有配置均為標準 JSON 格式，可以輕鬆轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TheTom--turboquant_plus");
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
> const me = dv.page("Repos/TheTom--turboquant_plus");
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
| Forks | 168 |
| Open Issues | 17 |
| Issue 解決率 | 63% (29 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-25 |
| Repo 大小 | 4.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TheTom/turboquant_plus) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 97
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@TheTom](https://github.com/TheTom) | 172 |
> | [@seanrasch](https://github.com/seanrasch) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，已有多位測試者參與反饋。
**連結**：[文件](https://github.com/TheTom/turboquant_plus#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-29 ~ 2026-03-30）
> **活躍天數** 2 天 · **最新 commit** Add block-size experiment paper and update docs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/TheTom/turboquant_plus/issues/27) | Upstream: TurboQuant discussion + contribution requirements  `type:port` `P2` | 2 | 0 |
> | [#42](https://github.com/TheTom/turboquant_plus/issues/42) | Enable sparse V dequant on pre-M5 hardware after verificatio | 1 | 0 |
> | [#49](https://github.com/TheTom/turboquant_plus/issues/49) | feat: GPU as async dequant coprocessor for CPU-primary infer | 0 | 0 |
> | [#48](https://github.com/TheTom/turboquant_plus/issues/48) | No Difference in tokens/sec - Ministral3 8B Q5_K_M | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # TurboQuant+
> 
> Implementation of [TurboQuant](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/) (ICLR 2026) — KV cache compression for local LLM inference, with planned extensions beyond the paper.
> 
> > **Why "Plus"?** The base TurboQuant paper is v1. I have ideas for improvements coming post-v1 — adaptive bit allocation, temporal decay compression, expert-aware MoE compression, and more. The "plus" is what comes next.
> 
> Compresses transformer KV cache **3.8–6.4x** using PolarQuant + Walsh-Hadamard rotation. Near q8_0 prefill speed and ~0.9x decode throughput at long context (Apple Silicon). Full format family: turbo2 (2-bit, 6.4x), turbo3 (3-bit, 4.6–5.1x), turbo4 (4-bit, 3.8x). turbo3 compression depends on storage block size; see [block size study](docs/papers/block-size-experiment.md).
> 
> **Key contribution:** Attention-gated KV cache decoding ("Sparse V") that skips low-weight V positions during inference. up to +22.8% decode speed at 32K context, validated on wikitext-103 (50 chunks, CI ±0.021) with no measurable PPL change. Sparse V uses attention weights as a gating signal for computation, skipping work that contributes negligibly to the output.
> 
> > **Core idea:** shift KV cache optimization from compression to attention-aware computation.
> 
> ~1% perplexity increase vs q8_0 due to compression; sparse V introduces no measurable additional degradation. Sparse V ON/OFF delta = 0.000 across all tested contexts and formats.
> 
> **Not TurboQuant-specific** — Sparse V was validated across q8_0, q4_0, and turbo3 KV formats.
> 
> Validated end-to-end on Qwen 3.5 35B-A3B (MoE) on M5 Max via llama.cpp Metal.
> 
> 
> ## Getting Started
> 
> 
> ### Prerequisites
> 
> - **Python** >= 3.10
> - **NumPy** >= 1.24, **SciPy** >= 1.10
> - **cmake** + C/C++ compiler (for llama.cpp build)
> - **Xcode Command Line Tools** (macOS Metal build)
> - **Optional**: `torch`, `transformers`, `accelerate` (~4GB download, for real model validation)
> 
> 
> ### Install the Python Prototype
> 
> ```bash
> git clone https://github.com/TheTom/turboquant_plus.git
> cd turboquant_plus
> python3 -m venv .venv && source .venv/bin/activate
> pip install -e ".[dev]"
> 
> 
> ### Run the Demo
> 
> ```bash
> 
> # Quick compression demo (no model needed)
> python3 benchmarks/demo.py
> 
> 
> ### KL Divergence vs f16
> 
> | Cache | Mean KLD | Δp RMS | Same top-p % |
> |-------|----------|--------|-------------|
> | q8_0 | 0.001549 | 1.23% | 98.43% |
> | **turbo4** | **0.009633** | **2.71%** | **95.98%** |
> | q4_0 | 0.008091 | 2.75% | 95.83% |
> | turbo3 | 0.016145 | 4.09% | 94.31% |
> 
> turbo4 KLD is 40% lower than turbo3. Same top-p agreement matches q4_0.
> 
> 
> ## Status: v1 Complete, Speed Optimized, Community-Tested
> 
> - 511+ Python tests, 100% code coverage on diagnostics
> - C port integrated into llama.cpp with Metal GPU kernels
> - `--cache-type-k turbo3 --cache-type-v turbo3` works on Apple Silicon (turbo2/turbo3/turbo4 all supported)
> - **turbo2 Metal support**: 2-bit, 6.4x compression, +6.48% PPL — for extreme memory pressure or asymmetric K/V
> - **q8_0 prefill speed parity achieved** (2747 vs 2694 tok/s)
> - **Norm correction**: PPL beats q8_0 on CUDA (-1.17%), +1.1% on Metal (ported from @spiritbuun)
> - **4-mag LUT**: auto-detected on M1/M2/M3/M4, +38-45% decode at long context
> - **Layer-adaptive mode 2**: q8_0 quality at 3.5x compression (last 8 layers at q8_0)
> - **Temporal decay**: 30-34% memory savings at long context (experiment branch)
> - **NIAH retrieval**: 9/9 single needle with sparse V (vs 7/9 baseline), 100% multi-key through 32K
> - **14 decode approaches tested** on M2 Pro — comprehensive hardware analysis
> - Community: 10+ testers across M1/M2/M5 Mac, RTX 3090/4090/5090, AMD 6800 XT/9070
> - Rotation Gaussianization validated on real Qwen3 KV tensors (kurtosis 900 → 2.9)
> 
> ---
> 
> 
> ## Quality and Speed (M5 Max 128GB)
> 
> 
> ### Top-of-Tree Results
> 
> | Cache Type | Bits/val | Compression | PPL (wikitext-2, 512c) | vs q8_0 |
> |------------|----------|-------------|----------------------|---------|
> | f16 | 16.0 | 1.0x | 6.121 | -0.16% |
> | q8_0 | 8.5 | 1.9x | 6.111 | baseline |
> | **turbo4** | **4.25** | **3.8x** | **6.125** | **+0.23%** |
> | q4_0 | 4.5 | 3.6x | 6.142 | +0.52% |
> | turbo3 | 3.5† | 4.6x† | 6.176 | +1.06% |
> | turbo2 | 2.5 | 6.4x | 6.507 | +6.48% |
> 
> turbo4 (4-bit PolarQuant) has the best quality after q8_0 — closer to q8_0 than q4_0, at better compression. turbo3 trades quality for maximum compression. turbo2 (2-bit) trades more quality for extreme compression — best used asymmetrically.
> 
> > †turbo3 at default block_size=32. At block_size=128, turbo3 achieves 3.125 bits/val and 5.12x compression with identical PPL, validated on Metal across 3 model architectures, 3 context lengths (512–32K), and 2 Apple Silicon platforms. Tested on both asymmetric (`q8_0-K + turbo3-V`) and symmetric (`turbo3/turbo3`) paths. On the tested M2 Pro setup (Qwen2.5-1.5B, `q8_0-K + turbo3-V`), block_size=128 also improved decode by 3–7%; this gain was not observed on M5 Max. Earlier turbo3 figures (4.6x) reflect the block_size=32 default. CUDA not yet validated. See [block size study](docs/papers/block-size-experiment.md).
> 
> > **Important: choosing the right config for your model.** TurboQuant quality depends on your base weight quantization. Models with Q8_0+ weights work well with symmetric turbo (e.g., `-ctk turbo3 -ctv turbo3`). Some low-bit models with Q4_K_M weights may benefit from asymmetric K/V: use `-ctk q8_0 -ctv turbo4` to keep K precision high while compressing V (tested on Qwen2.5-7B Q4_K_M). K precision is the dominant quality factor because it controls attention routing via softmax. Note: not all Q4_K_M models are sensitive to this — Mistral-24B Q4_K_M works fine with symmetric turbo. Validate on your specific model. See **[Configuration Recommendations](docs/turboquant-recommendations.md)** for the full tested matrix and practical guidance.
> >
> > Validated on Metal (Apple Silicon). CUDA mixed q8_0 × turbo parity is not yet verified.
> 
> 
> ### Asymmetric K/V (NEW)
> 
> TurboQuant supports independent K and V cache types. In current testing, keeping K at q8_0 while compressing V with turbo rescues quality on low-bit models where symmetric turbo degrades:
> 
> | Model (weights) | K | V | PPL | vs q8_0 |
> |-----------------|---|---|------|---------|
> | Qwen2.5-7B (Q4_K_M) | q8_0 | turbo4 | 6.64 | +1.0% |
> | Qwen2.5-7B (Q4_K_M) | q8_0 | turbo3 | 6.71 | +2.0% |
> | Qwen2.5-7B (Q4_K_M) | turbo3 | turbo3 | 3556 | catastrophic |
> 
> ```bash
> 
> # Validated starting point for low-bit models
> 
> # (tested on Qwen2.5-7B Q4_K_M; not all Q4_K_M models need this)
> llama-server -m model-Q4_K_M.gguf -ctk q8_0 -ctv turbo4 -fa 1
> ```
> 
> 
> ### Prefill Context Scaling (Verified 2K-32K)
> 
> | Context | turbo4 tok/s | turbo3 tok/s | q8_0 tok/s | turbo4/q8_0 | turbo3/q8_0 |
> |---------|-------------|-------------|-----------|------------|------------|
> | 2K | 2682 | 2708 | 2665 | 1.01x | 1.02x |
> | 4K | 2370 | 2289 | 2255 | 1.05x | 1.01x |
> | 8K | 2041 | 2054 | 2002 | 1.02x | 1.03x |
> | 16K | 1621 | 1698 | 1605 | 1.01x | 1.06x |
> | 32K | 1141 | 1204 | 1098 | 1.04x | 1.10x |
> 
> **Prefill: both turbo3 and turbo4 match or exceed q8_0 speed.** Compressed cache uses less bandwidth.
> 
> 
> ### Decode Speed — MoE (M5 Max 128GB, Qwen3.5-35B-A3B, Sparse V)
> 
> | Config | Short (tg128) | pp32768+tg128 | Short vs q8_0 |
> |--------|--------------|---------------|--------------|
> | q8_0 | 85.71 tok/s | 1173.91 tok/s | — |
> | **turbo4** | **79.87 tok/s** | **1060.12 tok/s** | **0.93x** |
> | turbo3 | 76.84 tok/s | 1141.74 tok/s | 0.90x |
> 
> turbo4 decode is faster than turbo3 due to simpler nibble packing and direct-extract dequant.
> 
> **Real-world server benchmark (70-page PDF, ~24K context):**
> 
> | Config | Prefill tok/s | Decode tok/s | Decode vs q8_0 |
> |--------|-------------|-------------|---------------|
> | q8_0 | 1449.9 | 68.2 | — |
> | turbo4 | 1405.9 | 63.7 | 0.93x |
> | turbo3 | 1417.8 | 53.3 | 0.78x |
> 
> 
> ### NIAH Retrieval (turbo4)
> 
> | Test | q8_0 | turbo4 | turbo3 + sparse V |
> |------|------|--------|-------------------|
> | Single needle (33 p

## 延伸閱讀

相關概念：[[KV 快取]] · [[模型壓縮]] · [[推論優化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[danveloper--flash-moe|danveloper/flash-moe]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]]

[GitHub](https://github.com/TheTom/turboquant_plus)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "TheTom--turboquant_plus"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "TheTom--turboquant_plus"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "TheTom--turboquant_plus" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "TheTom--turboquant_plus"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["KV 快取","模型壓縮","推論優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "TheTom--turboquant_plus" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/TheTom--turboquant_plus");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "TheTom--turboquant_plus" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "TheTom" AND file.name != "TheTom--turboquant_plus"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TheTom--turboquant_plus");
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
> const me = dv.page("Repos/TheTom--turboquant_plus");
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
> const me = dv.page("Repos/TheTom--turboquant_plus");
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
> const me = dv.page("Repos/TheTom--turboquant_plus");
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
> const me = dv.page("Repos/TheTom--turboquant_plus");
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

> **2026-03-31** — 首次收錄
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

- [[2026-03-31|2026-03-31]] — 首次收錄，1.9k stars
