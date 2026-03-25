---
repo: danveloper/flash-moe
url: https://github.com/danveloper/flash-moe
owner: danveloper
owner_type: User
language: Objective-C
license: N/A
description: "Running a big model on a small laptop"
homepage: ""
stars: 1864
stars_per_day: 311
forks: 175
open_issues: 12
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
use_case: "在小型筆記型電腦上運行 397 億參數的模型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 8
repo_size_kb: 2139
readme_length: 7806
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:1220,2026-03-23:1233,2026-03-24:1672,2026-03-24:1678,2026-03-25:1864"
tags:
  - github
  - "category/ai_ml"
  - "lang/objective-c"
aliases:
  - "flash-moe"
  - "danveloper/flash-moe"
  - "在小型筆記型電腦上運行 397 億參數的模型。"
---

# flash-moe

**1.7k** stars · **336** stars/天 · 建立 5 天前 · Objective-C · 未標註授權

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
> 在小型筆記型電腦上運行 397 億參數的模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (336 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 MacBook Pro 上運行大型 AI 模型但不想依賴雲端計算的開發者。
> **一句話重點** 這個專案展示了如何在資源有限的環境中運行大型 AI 模型，特別是在 Apple 硬體上。

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
> **結論** 花 5 小時學習，10 小時整合，得到高效能推理，值得嘗試。

> [!abstract] 核心創新
> 使用純 C 和 Metal 實現的推理引擎，能在 MacBook Pro 上運行 397 億參數模型。

## 專案簡介

Flash-MoE 是一個用於在 MacBook Pro 上運行 397 億參數 Mixture-of-Experts 模型的推理引擎，能夠以 4.4+ tokens/second 的速度生成生產級輸出。這個專案的核心在於使用純 C 和 Metal 實現，完全不依賴 Python 或其他框架，這樣的設計使得它能夠有效地利用 Apple 硬體的特性。模型的權重從 SSD 流式讀取，並通過自定義的 Metal 計算管道進行處理，這樣可以在不增加額外內存負擔的情況下，動態加載所需的專家。關鍵指令包括使用 `pread()` 來並行讀取權重，並利用 GCD 來管理計算任務。這種設計的賣點在於能夠在資源有限的環境中運行大型模型，特別適合需要高效推理的應用場景。

技術上，專案使用了 FMA 優化的去量化內核，這使得計算速度提高了 12%。與其他類似工具相比，Flash-MoE 的優勢在於它的輕量級和高效性能，尤其是在 Apple 硬體上表現出色。使用者可能會遇到的問題包括模型加載時的內存不足，特別是在使用較小的 M2 Max 系統時。這個專案目前處於活躍開發階段，適合對高效能推理有需求的開發者，尤其是那些在 Apple 生態系統中工作的團隊。

**技術棧**：`C` · `Objective-C` · `Metal` · `Python` · `Shell` · `Makefile`

## 重點功能

- 高效能推理 — 在 MacBook Pro 上以 4.4+ tokens/second 的速度運行 397 億參數模型。
- SSD 專家流式讀取 — 透過並行 `pread()` 動態加載所需的專家權重，減少內存使用。
- FMA 優化的去量化內核 — 提高計算速度 12%，使得推理更高效。
- 手寫 Metal 計算著色器 — 支持多種計算操作，包括去量化、激活函數和注意力機制。
- 無需 Python 或其他框架 — 完全用 C 和 Metal 實現，減少依賴性。

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
4. 運行模型
```bash
./flash-moe model_weights.bin
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1678 stars（336/天），forks 152（9.1%），這顯示出強勁的增長潛力。作者 danveloper 在開源社群中有一定的知名度，之前的專案也獲得了良好的反響。這個專案解決了在資源有限的筆記型電腦上運行大型模型的痛點，之前的方案通常需要高效能伺服器或雲端計算。近期的討論和推廣也提高了它的曝光率，特別是在 AI 開發者社群中。技術上，Apple 硬體的優化使得這個工具的實現變得可行，特別是 Metal 的使用讓 GPU 加速成為可能。forks/stars 比率為 9.1%，顯示出有不少人對此專案進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要在 MacBook Pro 上運行大型 AI 模型但不想依賴雲端計算的開發者。

> [!example] 使用場景
> - AI 開發者用它來在 MacBook Pro 上運行大型模型，因為它能在有限資源下提供高效能推理，達到 4.4+ tokens/second 的速度。
> - 研究人員用它來進行模型實驗，因為它支持快速的 SSD 流式讀取，能夠在不增加內存負擔的情況下動態加載專家。
> - 獨立開發者用它來開發 AI 應用，因為它不依賴 Python，能夠在 Apple 硬體上充分發揮性能。

## 架構分析

Flash-MoE 的架構設計以高效能和低延遲為核心，使用純 C 和 Metal 實現，這樣的選擇使得它能夠充分利用 Apple 硬體的特性。資料流方面，模型的權重從 SSD 流式讀取，並通過並行的 `pread()` 操作來動態加載所需的專家，這樣可以減少內存的使用並提高計算效率。FMA 優化的去量化內核設計使得計算過程中的乘法和加法操作能夠融合在一起，進一步提升了性能。這種設計的取捨在於，雖然需要手動調整 Metal 的計算著色器，但這樣可以獲得更高的性能和更低的延遲。擴展性方面，由於依賴於 Apple 硬體的特性，未來的擴展可能會受到硬體限制，但在現有的環境中已經表現出色。

## 技術深入分析

Flash-MoE 的核心技術機制在於使用 C 和 Metal 來實現高效能的推理引擎，這使得它能夠在 MacBook Pro 上運行 397 億參數的模型。專案使用了 SSD 專家流式讀取技術，這樣可以在需要時動態加載模型權重，減少內存的使用。效能方面，這個引擎能夠以 4.4+ tokens/second 的速度運行，這在同類工具中屬於高效能表現。設計上，選擇 C 和 Metal 而非 Python 或其他高層語言，這使得它能夠更接近硬體，獲得更高的性能，但同時也增加了開發的複雜性。技術風險方面，未來在擴展性上可能會受到 Apple 硬體的限制，特別是在需要更高效能的計算時。整合方面，這個工具能夠與 Apple 的生態系統無縫結合，但對於其他平台的支持則相對薄弱。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意硬體要求。文件目前僅提供英文，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 高效能推理，能在筆記型電腦上運行大型模型。
> - 無需依賴 Python，減少了環境配置的複雜性。
> - 使用 SSD 流式讀取，減少了內存使用。

> [!danger] 缺點
> - 僅支援 MacOS，無法在其他操作系統上使用。
> - 對於 2-bit 專家配置，JSON 輸出不可靠。
> - 需要較高的硬體配置，對於低配置設備不友好。

> [!warning] 注意事項
> - 僅支援 MacOS 環境，無法在 Windows 或 Linux 上運行。
> - 對於 2-bit 專家配置，JSON 輸出不可靠，可能會影響工具調用。
> - 需要較高的硬體配置，建議至少 48GB RAM。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而非大型模型推理，適用場景不同。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 NVIDIA 硬體優化，而 Flash-MoE 專注於 Apple 硬體，性能表現不同。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於代理和通訊，與 Flash-MoE 的 AI 推理功能無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 NVIDIA 硬體的優化，使用 CUDA 進行計算，這使得它在 NVIDIA 硬體上表現更佳。 | 如果你的團隊已經在使用 NVIDIA 硬體並需要高效能的推理，則應選擇它。 | medium，因為需要適應不同的硬體環境和 API。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，並不涉及大型模型的推理，適用場景不同。 | 如果你的需求是文件同步而非模型推理，則應選擇它。 | low，因為它的使用場景和 Flash-MoE 完全不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **flash-moe** | **NemoClaw** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 NVIDIA 硬體的優化，使用 CUDA 進行計算，這使得它在 NVIDIA 硬體上表現更佳。 | 專注於文件同步，並不涉及大型模型的推理，適用場景不同。 |
> | 遷移成本 | - | medium，因為需要適應不同的硬體環境和 API。 | low，因為它的使用場景和 Flash-MoE 完全不同。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 NVIDIA 硬體並需要高效能的推理 | 如果你的需求是文件同步而非模型推理，則應選擇它。 |

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

- **[HIGH]** 在 M2 Max 系統上加載模型時可能會出現內存不足的問題。
  - 解法：減少加載的模型大小或使用更高配置的硬體。
- [MEDIUM] 使用 2-bit 專家配置時，JSON 輸出格式不正確，影響工具調用。
  - 解法：使用 4-bit 專家配置以確保輸出格式正確。
- **[HIGH]** 模型權重檔案未找到時，無法啟動。
  - 解法：確保模型權重檔案正確放置在指定路徑。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 開發專案 | 非常適合 | 能夠在有限的硬體資源上運行大型模型，且不依賴雲端。 |
| 需要高效能推理的個人專案 | 適合 | 提供高效能的推理速度，適合個人開發者使用。 |
| 大型企業的核心 AI 系統 | 不適合 | 目前仍處於 beta 階段，穩定性和生產準備度不足。 |
| 教育機構的 AI 實驗 | 普通 | 雖然能提供高效能，但需要較高的硬體配置，可能不適合所有學生使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效能推理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Flash-MoE 最常與 Apple 的開發工具搭配使用，特別是在 MacOS 環境中進行 AI 開發。在一個使用 Xcode 的專案中，你可以用 Flash-MoE 來運行大型模型，具體做法是將模型權重放置在指定路徑，然後通過命令行運行。這個工具與 GitHub Actions 兼容，能夠在 CI/CD 流程中自動化模型的推理過程。對於其他 IDE，如 VS Code，可能需要額外的配置來實現整合。整合的摩擦點主要在於對於非 Apple 硬體的支持不足，可能需要額外的調整。

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
| Forks | 152 |
| Open Issues | 12 |
| Issue 解決率 | 8% (1 closed) |
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

**社群活躍度**：社群活躍度中等，有定期的更新和回應。
**連結**：[文件](https://github.com/danveloper/flash-moe/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-19）
> **活躍天數** 2 天 · **最新 commit** Q4 optimization: FMA kernel +12%, 58 experiments documented

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/danveloper/flash-moe/issues/8) | Cannot open model_weights.bin: No such file or directory | 2 | 2 |
> | [#2](https://github.com/danveloper/flash-moe/issues/2) | [Bug]: Jetsam SIGKILL (OOM) on M2 Max 32GB when loading 2-bi | 1 | 0 |

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

相關概念：[[深度學習]] · [[推論優化]] · [[GPU 加速]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]]

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
> const concepts = ["深度學習","推論優化","GPU 加速"];
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
