---
repo: danveloper/flash-moe
url: https://github.com/danveloper/flash-moe
owner: danveloper
owner_type: User
language: Objective-C
license: N/A
description: "Running a big model on a small laptop"
homepage: ""
stars: 3170
stars_per_day: 211
forks: 365
open_issues: 16
created: 2026-03-18
pushed_at: 2026-03-19
first_seen: 2026-03-23
week: "2026-W13"
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
last_reviewed: 2026-03-23
use_case: "在小型筆記型電腦上運行 3970 億參數的模型，實現高效能推論。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 16
repo_size_kb: 2139
readme_length: 7806
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:1220,2026-03-23:1233,2026-03-24:1672,2026-03-24:1678,2026-03-25:1864,2026-03-25:1864,2026-03-26:1994,2026-03-27:2059,2026-03-29:2180,2026-03-30:2237,2026-03-31:2570,2026-04-01:2955,2026-04-02:3092,2026-04-03:3170"
tags:
  - github
  - "category/ai_ml"
  - "lang/objective-c"
aliases:
  - "flash-moe"
  - "danveloper/flash-moe"
  - "在小型筆記型電腦上運行 3970 億參數的模型，實現高效能推論。"
---

# flash-moe

**3.2k** stars · **211** stars/天 · 建立 15 天前 · Objective-C · 未標註授權

```dataviewjs
const me = dv.page("Repos/danveloper--flash-moe");
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
> 在小型筆記型電腦上運行 3970 億參數的模型，實現高效能推論。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (211 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 14 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 MacBook Pro 上運行大型 AI 模型但不想使用 Python 的開發者。
> **一句話重點** 這個專案展示了如何在有限的硬體上運行大型模型，並且不依賴於傳統的 Python 環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/danveloper--flash-moe");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "danveloper--flash-moe" && p.status !== "archived")
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
> **結論** 花 5 小時學習，3 小時整合，得到高效能推論，值得一試。

> [!abstract] 核心創新
> 使用純 C 和 Metal 實現的推論引擎，能在小型筆記型電腦上運行 397B 參數模型。

## 專案簡介

Flash-MoE 是一個用於在 MacBook Pro 上運行 3970 億參數 Mixture-of-Experts 模型的推論引擎，能達到每秒 4.4+ 個 token 的速度。這個專案的核心在於使用純 C 和 Metal 實現，避免了 Python 和其他框架的依賴，這樣的設計使得性能更為優化，尤其是在 SSD 流式讀取和 GPU 計算方面。具體來說，模型的權重從 NVMe SSD 讀取，並通過 GCD 並行處理，僅加載每層的 K=4 個活躍專家，這樣的設計減少了記憶體的使用。使用 4-bit 專家配置時，性能達到 4.36 tok/s，並且支持完整的工具調用。技術上，這個專案利用了 FMA 優化的去量化內核，並且手動編寫 Metal compute shaders 來進行矩陣向量乘法和注意力計算，這些都顯著提升了運算效率。

與其他類似工具相比，Flash-MoE 的優勢在於其高效的資源利用和無需額外的 Python 環境，適合需要在有限硬體上運行大型模型的開發者。實際使用中，使用者可能會遇到模型權重文件缺失的問題，這在 GitHub Issues 中有反映。整體來看，這是一個適合對性能有高要求的開發者使用的專案，尤其是在小型團隊或個人項目中。預計未來會持續優化性能和擴展功能。

**技術棧**：`C` · `Objective-C` · `Metal` · `Python` · `Shell`

## 重點功能

- SSD 專家流式讀取 — 專家權重從 NVMe SSD 按需讀取，僅加載活躍專家，減少記憶體使用。
- FMA 優化的去量化內核 — 內部運算重組以提升性能，達到 12% 的速度提升。
- 手動編寫的 Metal compute shaders — 包含多種優化的矩陣向量乘法和注意力計算，提升運算效率。
- 支持完整工具調用 — 在 4-bit 配置下，能夠進行高品質的工具調用。
- 高效能推論 — 在 MacBook Pro 上達到每秒 4.4+ 個 token 的速度，適合實際應用。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/danveloper/flash-moe.git
```
2. 進入專案目錄
```bash
cd flash-moe
```
3. 編譯專案
```bash
make
```
4. 運行推論
```bash
./flash-moe model_weights.bin
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 3170 stars（211/天），forks 365（11.5%），顯示出強烈的社群興趣。這個專案由 danveloper 開發，他在 AI 和高效能計算領域有豐富經驗。Flash-MoE 解決了在小型硬體上運行大型模型的痛點，之前的方案往往需要高性能伺服器或複雜的環境設置。近期的推文和討論也引起了廣泛的關注，特別是在開源社群中。技術上，Apple 的硬體架構和 Metal API 的進步使得這樣的實現成為可能。高達 11.5% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要在 MacBook Pro 上運行大型 AI 模型但不想使用 Python 的開發者。

> [!example] 使用場景
> - AI 研究者用它來在 MacBook Pro 上運行大型語言模型，因為它能在不依賴 Python 的情況下提供高效能推論。
> - 獨立開發者用它來測試 Mixture-of-Experts 模型的性能，因為它能在 48GB RAM 的環境下運行 397B 參數模型。
> - 小型團隊用它來開發 AI 驅動的應用，因為它的設計使得在筆記型電腦上運行大型模型變得可行且高效。

## 架構分析

Flash-MoE 採用純 C 和 Metal 的架構，設計目標是實現高效能推論，特別是在 MacBook Pro 上。模型的權重從 SSD 流式讀取，利用 GCD 並行處理，這樣的設計減少了記憶體的使用並提高了性能。每層的 K=4 個活躍專家按需加載，這樣的流式設計使得整體運行效率更高。

選擇 Metal 作為計算框架的原因在於其對 Apple 硬體的優化，這樣可以充分利用 GPU 的計算能力。這樣的設計雖然提高了性能，但也增加了開發的複雜度，因為需要手動編寫計算著色器。整體架構的擴展性受到硬體限制，未來可能需要考慮更高效的硬體支持以進一步提升性能。

## 技術深入分析

Flash-MoE 的核心技術機制在於其使用純 C 和 Metal 實現的推論引擎，這使得它能夠在 MacBook Pro 上運行 397B 參數的模型。模型的架構包含 60 層 transformer，並且每層有 512 個專家，這樣的設計使得模型能夠在每次推論中動態選擇 K=4 個活躍專家。效能上，這個專案能達到每秒 4.4+ 個 token 的速度，這在小型硬體上是相當驚人的。選擇 Metal 作為計算框架是因為它能夠充分發揮 Apple 硬體的性能，這樣的選擇雖然增加了開發的複雜度，但也帶來了更高的運算效率。設計上，這個專案的依賴樹相對簡單，主要依賴於 C 和 Metal，這使得它在部署時不需要額外的庫或框架。技術風險方面，未來在擴展性上可能會遇到瓶頸，尤其是在硬體資源有限的情況下。整合方面，這個專案與現有的開發工具鏈相容性良好，但在 CI/CD pipeline 的整合上可能需要額外的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了必要的安裝步驟和使用範例。安裝過程相對順暢，但對於新手來說，可能會遇到一些配置上的挑戰。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 高效能推論，能在小型筆記型電腦上運行大型模型。
> - 無需 Python 環境，減少了依賴性和配置複雜度。
> - 手動優化的計算內核，提供更快的運算速度。
> - 支持完整的工具調用功能，適合實際應用。

> [!danger] 缺點
> - 僅支援特定硬體，對於其他平台無法運行。
> - 需要較高的記憶體配置，限制了使用範圍。
> - 缺乏詳細的使用文檔，對新手不友好。
> - 在 2-bit 配置下的 JSON 輸出不可靠，影響工具調用。

> [!warning] 注意事項
> - 僅支援 MacBook Pro 硬體，對於其他平台可能無法運行。
> - 需要 48GB RAM，對於低於此配置的設備無法運行。
> - 2-bit 配置下的 JSON 輸出不可靠，可能影響工具調用功能。
> - 目前缺乏詳細的使用文檔，可能對新手造成困難。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，而非大型模型推論，適合不同場景。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 使用 NVIDIA 硬體優化，對於需要 GPU 加速的場景更為合適。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供不同的模型架構，適合需要多樣化模型的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 使用 NVIDIA 硬體優化，專注於 GPU 加速的推論，適合需要高性能的場景。 | 如果你的團隊已經在使用 NVIDIA 硬體並需要進行大規模推論，這個工具會更合適。 | medium，因為需要重新調整模型和環境配置。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供不同的模型架構，專注於多樣化的模型選擇，適合需要多樣化模型的使用者。 | 如果你的應用需要多種模型架構的支持，這個工具會更適合。 | low，因為它的設計較為靈活，易於整合。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **flash-moe** | **NemoClaw** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 NVIDIA 硬體優化，專注於 GPU 加速的推論，適合需要高性能的場景。 | 提供不同的模型架構，專注於多樣化的模型選擇，適合需要多樣化模型的使用者。 |
> | 遷移成本 | - | medium，因為需要重新調整模型和環境配置。 | low，因為它的設計較為靈活，易於整合。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 NVIDIA 硬體並需要進行大規模推 | 如果你的應用需要多種模型架構的支持，這個工具會更適合。 |

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

- **[HIGH]** 模型權重文件缺失，導致無法運行
  - 解法：確保模型權重文件存在於正確路徑
- [MEDIUM] 2-bit 配置下的 JSON 輸出不可靠
  - 解法：使用 4-bit 配置以確保工具調用的可靠性
- [MEDIUM] 缺乏詳細的使用文檔，可能造成使用困難
  - 解法：參考 GitHub Issues 中的討論以獲取解決方案

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 驅動的應用 | 非常適合 | 能在有限硬體上運行大型模型，適合小型團隊的需求。 |
| 個人開發者進行 AI 研究 | 適合 | 提供高效能推論，能在筆記型電腦上運行大型模型。 |
| 大型企業的生產環境 | 不適合 | 目前尚未達到生產環境的穩定性和可靠性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效能推論，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/danveloper--flash-moe");
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
> const me = dv.page("Repos/danveloper--flash-moe");
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
| Forks | 365 |
| Open Issues | 16 |
| Issue 解決率 | 16% (3 closed) |
| 最後推送 | 2026-03-19 |
| 建立日期 | 2026-03-18 |
| Repo 大小 | 2.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/danveloper/flash-moe) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Objective-C" : 59
>     "C" : 14
>     "TeX" : 10
>     "Python" : 9
>     "Metal" : 7
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@danveloper](https://github.com/danveloper) | 144 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在一些未解決的問題和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-19）
> **活躍天數** 2 天 · **最新 commit** Q4 optimization: FMA kernel +12%, 58 experiments documented

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/danveloper/flash-moe/issues/19) | Please add a license to this repo | 2 | 0 |
> | [#15](https://github.com/danveloper/flash-moe/issues/15) | I did get it working, with a lot of pain, if your interested | 2 | 3 |
> | [#8](https://github.com/danveloper/flash-moe/issues/8) | Cannot open model_weights.bin: No such file or directory | 2 | 2 |
> | [#20](https://github.com/danveloper/flash-moe/issues/20) | Other Qwen models | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Flash-MoE: Running a 397B Parameter Model on a Laptop
> 
> > **[Read the paper](paper/flash_moe.pdf)** — Full technical details, 90+ experiments, and the story of how an AI and a human built this in 24 hours.
> 
> Pure C/Metal inference engine that runs **Qwen3.5-397B-A17B** (a 397 billion parameter Mixture-of-Experts model) on a MacBook Pro with 48GB RAM at **4.4+ tokens/second** with production-quality output including tool calling.
> 
> The entire 209GB model streams from SSD through a custom Metal compute pipeline. No Python. No frameworks. Just C, Objective-C, and hand-tuned Metal shaders.
> 
> ## Results
> 
> | Configuration | tok/s | Quality | Notes |
> |--------------|-------|---------|-------|
> | 4-bit experts, FMA kernel | **4.36** | Excellent | Current best. Full tool calling. 209GB on disk. |
> | 4-bit experts, baseline | 3.90 | Excellent | Before FMA kernel optimization. |
> | 2-bit experts, trust OS | 5.74 | Good* | 120GB on disk. *Breaks JSON/tool calling. |
> | 2-bit peak single token | 7.05 | Good* | Warm cache burst. *Not suitable for tool use. |
> 
> *2-bit quantization produces `\name\` instead of `"name"` in JSON output, making tool calling unreliable. 4-bit is the production configuration.
> 
> ## Hardware
> 
> - **Machine**: MacBook Pro, Apple M3 Max
> - **Chip**: 16-core CPU (12P + 4E), 40-core GPU, 16-core ANE
> - **Memory**: 48 GB unified (~400 GB/s bandwidth)
> - **SSD**: 1TB Apple Fabric, **17.5 GB/s sequential read** (measured)
> - **macOS**: 26.2 (Darwin 25.2.0)
> 
> ## Architecture
> 
> The model has 60 transformer layers: 45 GatedDeltaNet (linear attention) + 15 standard full attention. Each layer has 512 experts, of which K=4 are activated per token (plus one shared expert). Hidden dimension is 4096.
> 
> ### Key Techniques
> 
> 1. **SSD Expert Streaming** — Expert weights (209GB at 4-bit) are read from NVMe SSD on demand via parallel `pread()` with GCD dispatch groups. Only the K=4 active experts per layer are loaded (~6.75MB each). The OS page cache manages caching — no custom cache needed ("Trust the OS" principle). Inspired by Apple's "LLM in a Flash" paper.
> 
> 2. **FMA-Optimized Dequant Kernel** — The inner loop of the 4-bit dequantized matrix-vector multiply rearranges the math from `(nibble * scale + bias) * x` to `fma(nibble, scale*x, bias*x)`. Pre-computing `scale*x` and `bias*x` lets the GPU fused multiply-add unit do dequant+multiply in one instruction. 12% faster than the naive formulation.
> 
> 3. **Metal Compute Shaders** — Hand-written Metal kernels for:
>    - 4-bit and 2-bit dequantized matrix-vector multiply (tiled, SIMD-reduced, shared input cache, FMA-optimized)
>    - Fused SwiGLU activation
>    - RMS normalization (two-pass: sum-of-squares reduction + apply)
>    - Batched GPU attention (Q@K^T, softmax, scores@V) for full attention layers
>    - GPU RoPE (fused with Q deinterleave and K normalization)
>    - MoE combine + residual + sigmoid gate (fused kernel)
> 
> 4. **Deferred GPU Expert Compute** — CMD3 (expert forward pass) is submitted without waiting. The GPU executes it while the CPU prepares the next layer. The combine + residual + norm are also on GPU, feeding directly into the next layer's attention projections.
> 
> 5. **Accelerate BLAS for Linear Attention** — The GatedDeltaNet recurrence uses `cblas_sscal`, `cblas_sgemv`, and `cblas_sger` for the 64-head × 128×128 state matrix update. 64% faster than scalar code.
> 
> 6. **Trust the OS** — No custom expert cache. The OS page cache (~35GB) manages expert data caching via standard LRU. Every custom caching approach we tested (Metal LRU, malloc cache, LZ4 compressed cache) was slower due to GPU memory pressure or overhead. The page cache achieves ~71% hit rate naturally.
> 
> ### Pipeline Per Layer (4.28ms average at 4-bit)
> 
> ```
> CMD3(prev) → CMD1: attention projections + delta-net  [1.22ms GPU]
>            → CPU: flush results                       [0.01ms CPU]
>            → CMD2: o_proj + norm + routing + shared    [0.55ms GPU]
>            → CPU: softmax + topK routing               [0.003ms]
>            → I/O: parallel pread K=4 experts           [2.41ms SSD]
>            → CMD3: expert forward + combine + norm     [0.04ms encode, DEFERRED]
> ```
> 
> ### Unified Memory Constraint
> 
> On Apple Silicon, SSD DMA and GPU compute share the same memory controller and cannot be profitably overlapped. The GPU's dequant kernels are bandwidth-saturated at ~418 GiB/s. Even small background SSD DMA causes disproportionate GPU latency spikes through memory controller arbitration. The serial pipeline (GPU → SSD → GPU) is hardware-optimal.
> 
> ## Quick Start
> 
> ```bash
> cd metal_infer
> make
> # 4-bit inference (needs packed_experts/ directory)
> ./infer --prompt "Explain quantum computing" --tokens 100
> 
> # 2-bit inference (faster but breaks tool calling)
> ./infer --prompt "Explain quantum computing" --tokens 100 --2bit
> 
> # Interactive chat with tool calling
> ./chat
> 
> # Per-layer timing breakdown
> ./infer --prompt "Hello" --tokens 20 --timing
> ```
> 
> ## Project Structure
> 
> ```
> metal_infer/
>   infer.m              # Complete inference engine (~7000 lines)
>   shaders.metal        # Metal compute kernels (~1200 lines)
>   chat.m               # Interactive chat TUI with tool calling
>   tokenizer.h          # C BPE tokenizer (single-header, 449 lines)
>   main.m               # MoE-only benchmark
>   Makefile             # Build system
>   extract_weights.py   # Creates model_weights.bin from safetensors
>   repack_experts_2bit.py  # 4-bit → 2-bit expert requantization
>   train_predictor.py   # Expert routing prediction analysis
>   model_weights.bin    # Non-expert weights (5.5GB, mmap'd)
>   model_weights.json   # Tensor manifest
>   vocab.bin            # Vocabulary for token decoding
>   tokenizer.bin        # Pre-exported BPE tokenizer data
> 
> repack_experts.py      # 4-bit expert packing from safetensors
> progress.py            # Results visualization (Q2/Q4 tracks)
> results.tsv            # Experiment log (58 experiments)
> ```
> 
> ## What We Tried (and What Worked)
> 
> ### Kept
> | Approach | Result | Impact |
> |----------|--------|--------|
> | FMA dequant kernel | GPU compute -12% | **+12% tok/s** |
> | Trust OS page cache | Deleted Metal LRU → +38% | **Foundational** |
> | GPU combine+norm in CMD3 | Eliminates CPU round-trip | **Pipeline** |
> | BLAS delta-net (Accelerate) | cpu_attn 0.78→0.28ms | **+64% attn** |
> | F_NOCACHE for 2-bit | +3% from avoiding page thrash | **2-bit only** |
> | GPU fused attention (RoPE) | +2% for full-attn layers | **Small** |
> | C BPE tokenizer | 180ms vs 3500ms startup | **20x startup** |
> | Deferred CMD3 execution | GPU/CPU overlap | **Pipeline** |
> 
> ### Discarded (58 experiments, highlights)
> | Approach | Result | Why |
> |----------|--------|-----|
> | LZ4 expert compression | -13% | Decompress overhead > warm cache savings |
> | F_RDADVISE prefetch | net 0% | Unified memory: SSD DMA slows GPU -73% |
> | Temporal expert prediction | -18% | 25% hit rate, SSD bandwidth waste |
> | MLP routing predictor | 31% accuracy | Worse than temporal baseline |
> | GPU LUT dequant kernel | -2% | Indirect register access serializes |
> | GPU private buffer compression | -20% pipeline | Blit cost 4×7MB > matvec savings |
> | Spin-poll GPU wait | -23% | CPU thermal competes with GPU |
> | Expert file clustering | 0% | NVMe ignores scatter at 7MB granularity |
> | dispatch_io | -70% | dispatch_data management overhead |
> | mmap expert files | -5x | Per-page fault overhead on cold data |
> | Speculative early routing | -38% | Cache pollution + overhead |
> | MTP speculative decoding | break-even | MoE I/O scales per-token (unlike dense) |
> 
> ## Safety
> 
> This is a primary development machine. The engine explicitly controls memory:
> - Non-expert weights: 5.5GB (mmap'd, read-only)
> - Metal scratch buffers: ~200MB
> - Total: ~6GB, leaving 42GB for OS + page cache
> - No OOM risk. Expert data streams from SSD on demand.
> - No custom caches. Trust the OS.

## 延伸閱讀

相關概念：[[深度學習]] · [[推論優化]] · [[Mixture-of-Experts]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]]

[GitHub](https://github.com/danveloper/flash-moe)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "danveloper--flash-moe"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "danveloper--flash-moe"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Objective-C" AND file.name != "danveloper--flash-moe" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "danveloper--flash-moe"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["深度學習","推論優化","Mixture-of-Experts"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "danveloper--flash-moe" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/danveloper--flash-moe");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "danveloper--flash-moe" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "danveloper" AND file.name != "danveloper--flash-moe"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/danveloper--flash-moe");
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
> const me = dv.page("Repos/danveloper--flash-moe");
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
> const me = dv.page("Repos/danveloper--flash-moe");
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
> const me = dv.page("Repos/danveloper--flash-moe");
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
> const me = dv.page("Repos/danveloper--flash-moe");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-25|2026-03-25]] — 再次上榜，1.9k stars
- [[2026-03-24|2026-03-24]] — 再次上榜，1.7k stars
- [[2026-03-23|2026-03-23]] — 首次收錄，1.2k stars
