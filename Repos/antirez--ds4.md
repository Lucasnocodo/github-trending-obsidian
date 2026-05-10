---
repo: antirez/ds4
url: https://github.com/antirez/ds4
owner: antirez
owner_type: User
language: C
license: MIT
description: "DeepSeek 4 Flash local inference engine for Metal"
homepage: ""
stars: 4506
stars_per_day: 1502
forks: 314
open_issues: 19
created: 2026-05-06
pushed_at: 2026-05-09
first_seen: 2026-05-09
week: "2026-W19"
month: "2026-05"
category: "AI/ML"
subcategory: "推論優化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-09
use_case: "提供針對 DeepSeek V4 Flash 模型的本地推理引擎，專為 Metal 設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-13"
contributor_count: 3
engagement: "low"
issue_close_rate: 54
repo_size_kb: 598
readme_length: 9900
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-09"
star_history: "2026-05-09:2460,2026-05-10:4506"
tags:
  - github
  - "category/ai_ml"
  - "lang/c"
aliases:
  - "ds4"
  - "antirez/ds4"
  - "提供針對 DeepSeek V4 Flash 模型的本地推理引擎，專為 Metal 設計。"
---

# ds4

**2.5k** stars · **1.2k** stars/天 · 建立 2 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/antirez--ds4");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供針對 DeepSeek V4 Flash 模型的本地推理引擎，專為 Metal 設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在 Mac 上進行高效本地推理的 AI 開發者，尤其是對 DeepSeek V4 Flash 模型感興趣的用戶。
> **一句話重點** ds4 將 KV 緩存視為磁碟的第一公民，這一創新設計使得長上下文推理成為可能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/antirez--ds4");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "antirez--ds4" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的本地推理能力，值得投入。

> [!abstract] 核心創新
> 這個專案的創新在於將 KV 緩存視為磁碟的第一公民，實現了高效的本地推理。

## 專案簡介

ds4 是一個針對 DeepSeek V4 Flash 模型的本地推理引擎，專注於 Metal 平台。用戶可以透過 `ds4-server` 啟動服務，並設置上下文限制，使用者只需提供模型和配置，就能進行高效的推理。這個引擎的賣點在於其能夠處理長達 100 萬個 tokens 的上下文，並且在推理過程中能夠利用壓縮的 KV 緩存，實現高效的本地推理。使用者可以透過 `--ctx` 參數來調整上下文大小，並且可以選擇使用 2-bit 量化來減少內存佔用。這個引擎的設計考量了高端個人電腦的性能，並且強調了 KV 緩存的磁碟持久性，這在當前的推理引擎中是相對少見的。它的開發受到 GPT 5.5 的強烈影響，並且專注於一個模型的深度整合，而非廣泛支持多個模型。這樣的設計使得 ds4 在處理複雜問題時，能夠提供更快的推理速度和更高的準確性。

**技術棧**：`C` · `Objective-C` · `Metal` · `Python` · `Shell` · `Makefile`

## 重點功能

- 高效的 Metal 推理引擎 — 專為 DeepSeek V4 Flash 設計，能夠充分利用 Mac 的硬體性能。
- 支持長達 1M tokens 的上下文 — 使得複雜問題的推理變得可行。
- KV 緩存的磁碟持久性 — 允許在本地計算機上進行長上下文推理，並在磁碟上持久化緩存。
- 2-bit 量化支持 — 使得在內存有限的情況下仍能運行大型模型。
- HTTP API 支持 — 方便與其他應用集成，支持 OpenAI 兼容的聊天完成。
- 靈活的上下文和輸出限制設置 — 用戶可根據系統性能調整參數以獲得最佳效果。
- 簡單的配置文件 — 用戶只需編輯 JSON 配置即可快速上手。
- 強大的性能數據 — 提供詳細的性能指標，幫助用戶選擇合適的硬體配置。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/antirez/ds4.git
```
2. 進入專案目錄
```bash
cd ds4
```
3. 啟動推理服務器
```bash
./ds4-server --ctx 100000 --kv-disk-dir /tmp/ds4-kv --kv-disk-space-mb 8192
```

## 程式碼範例

```c
[
  "# 前置條件：已安裝 ds4",
  "./ds4-server --ctx 100000 --kv-disk-dir /tmp/ds4-kv --kv-disk-space-mb 8192",
  "# 預期輸出：啟動服務器並設置上下文限制"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 2460 stars（1230/天），forks 146（5.9%），顯示出強勁的增長潛力。這個專案的作者 antirez 以開源社群中的知名度和過去的貢獻而聞名，特別是在性能優化和本地推理引擎方面。DeepSeek V4 Flash 模型的推出填補了市場上對高效能本地推理引擎的需求，尤其是在 Mac 環境下。這個專案的設計理念是針對特定模型進行深度優化，而不是廣泛支持多個模型，這在當前的推理引擎中是相對少見的。最近的社群討論和需求也促進了這個專案的關注度，特別是對於 Metal 4 Tensor API 和 AMD GPU 支持的需求。forks/stars 比率為 5.9%，顯示出有相當比例的用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在 Mac 上進行高效本地推理的 AI 開發者，尤其是對 DeepSeek V4 Flash 模型感興趣的用戶。

> [!example] 使用場景
> - 機器學習工程師用它來在本地環境中快速部署 DeepSeek V4 Flash 模型，因為它能夠有效利用 128GB RAM 的 MacBook 進行長上下文推理。
> - 開發者用它來測試和驗證 AI 模型的推理性能，因為它提供了 HTTP API 和簡單的配置選項，便於集成。
> - 研究人員用它來探索大型語言模型的推理行為，因為它支持高達 1M tokens 的上下文，能夠處理複雜的問題。

## 架構分析

ds4 的架構專注於 Metal 推理，並且設計為一個專用的推理引擎。這種設計使得它能夠充分利用 Mac 的硬體性能，尤其是在處理長上下文時。資料流方面，推理引擎通過 Metal API 直接與硬體交互，並使用壓縮的 KV 緩存來提高性能。這樣的設計選擇使得 ds4 在處理複雜問題時能夠提供更快的推理速度，但也意味著它對硬體的要求較高。擴展性方面，專案目前僅支持 Metal，未來可能會考慮添加 CUDA 支持，但這會增加開發的複雜性。

## 技術深入分析

ds4 的核心技術機制是基於 Metal 的推理引擎，專為 DeepSeek V4 Flash 模型設計。它利用了壓縮 KV 緩存，這使得在本地計算機上進行長上下文推理成為可能。效能方面，ds4 能夠在 MacBook Pro M3 Max 上達到每秒 468.03 tokens 的生成速度，這在處理複雜問題時顯示出其優越性。設計取捨方面，選擇 Metal 作為主要推理路徑使得性能優化更為明顯，但也限制了其跨平台的能力。技術風險方面，當前版本存在穩定性問題，特別是在 CPU 路徑上，可能會導致系統崩潰。整合分析方面，ds4 與主流的開發工具鏈相容性良好，但對於沒有 Metal 支持的環境，使用者需要尋找其他替代方案。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用指引和範例，安裝過程相對順暢，但需要注意高端硬體的要求。整體上，對於有經驗的開發者來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 針對 DeepSeek V4 Flash 模型進行了深度優化，性能卓越。
> - 支持長達 1M tokens 的上下文，適合複雜推理。
> - KV 緩存的磁碟持久性，提升了推理效率。
> - 簡單的配置和使用方式，易於上手。

> [!danger] 缺點
> - 僅支持 Metal，對於其他平台的支持有限。
> - 存在穩定性問題，適合實驗性質的使用。
> - 需要高端硬體，對於一般用戶來說門檻較高。
> - 目前處於 alpha 階段，功能和性能可能不穩定。

> [!warning] 注意事項
> - 目前僅支持 Metal，不支持 CUDA。
> - 當前 macOS 版本存在虛擬內存實現的 bug，可能導致 CPU 路徑崩潰。
> - 需要高端硬體支持，建議至少 128GB RAM。
> - 目前處於 alpha 階段，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多模型支持，而 ds4 專注於單一模型的深度優化，適合需要多樣化模型的用戶。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 針對 NVIDIA 硬體進行優化，而 ds4 專注於 Metal，適合在 Mac 環境下使用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的模型支持，但缺乏 ds4 在長上下文推理方面的專業化優化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具支持多模型的推理，而 ds4 專注於單一模型的深度優化，適合需要多樣化模型的用戶。 | 如果你的團隊需要同時運行多個模型，並且不想受限於單一模型的性能。 | medium，因為需要重新配置多個模型的環境。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 針對 NVIDIA 硬體進行優化，而 ds4 專注於 Metal，適合在 Mac 環境下使用。 | 如果你的團隊已經在使用 NVIDIA 硬體並需要針對其進行優化的推理。 | low，因為大多數環境已經支持 NVIDIA 硬體。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的模型支持，但缺乏 ds4 在長上下文推理方面的專業化優化。 | 如果你需要支持多種模型而不僅僅是 DeepSeek V4 Flash。 | medium，因為需要重新配置多個模型的環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ds4** | **agent-sprite-forge** | **NemoClaw** | **boneyard** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具支持多模型的推理，而 ds4 專注於單一模型的深度優化，適合需要多樣化模型的用戶。 | 針對 NVIDIA 硬體進行優化，而 ds4 專注於 Metal，適合在 Mac 環境下使用。 | 提供更廣泛的模型支持，但缺乏 ds4 在長上下文推理方面的專業化優化。 |
> | 遷移成本 | - | medium，因為需要重新配置多個模型的環境。 | low，因為大多數環境已經支持 NVIDIA 硬體。 | medium，因為需要重新配置多個模型的環境。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要同時運行多個模型，並且不想受限於單一模型的性 | 如果你的團隊已經在使用 NVIDIA 硬體並需要針對其進行優 | 如果你需要支持多種模型而不僅僅是 DeepSeek V4 F |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和測試，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上運行 CPU 路徑可能導致系統崩潰
  - 解法：避免使用 CPU 路徑，僅使用 Metal 路徑進行推理
- [MEDIUM] 需要高端硬體支持，對於低配系統無法運行
  - 解法：確保系統至少有 128GB RAM
- [MEDIUM] 目前處於 alpha 階段，功能和性能可能不穩定
  - 解法：在非關鍵環境中進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的小型團隊進行 AI 模型開發 | 非常適合 | ds4 提供了高效的本地推理能力，適合小型團隊的需求。 |
| 需要在低配系統上運行的 AI 應用 | 不適合 | 對硬體要求高，至少需要 128GB RAM。 |
| 大型企業的 AI 模型推理 | 普通 | 雖然性能優越，但目前不穩定，可能不適合生產環境。 |
| 研究機構進行 AI 模型性能測試 | 適合 | 支持長上下文推理，適合複雜問題的測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的本地推理能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ds4 本身不需要高權限，僅在本地運行，不會存取敏感資料。對於依賴的庫和框架需保持更新，以避免潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ds4 最常與 Mac 硬體搭配使用，特別是在高端配置下。它在開發過程中可以與其他 AI 工具鏈（如 TensorFlow、PyTorch）進行整合，但目前僅支持 Metal。具體整合範例包括在使用 Xcode 開發的專案中，將 ds4 作為推理引擎，通過 HTTP API 與前端應用進行交互。整合過程中，可能會遇到與 Metal 兼容性的問題，特別是在較舊的 macOS 版本上。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 ds4 出現之前，許多本地推理引擎都無法有效處理長上下文的推理，且大多數工具缺乏對特定模型的深度優化。隨著 Metal 和高效能硬體的普及，ds4 的設計理念使其能夠在本地環境中提供高效的推理能力。這個專案代表了本地推理引擎的未來趨勢，特別是在高端個人電腦上，未來可能會有更多針對特定模型的專用引擎出現。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 C 和 Objective-C
- 了解 Metal 開發
- 有 AI 模型推理經驗

> [!tip] 導入策略
> 第一週：在個人環境中測試 ds4。第二週：在小型專案中進行集成。第三週：撰寫使用文檔和最佳實踐。第四週：在更大的專案中進行實驗性使用。

**成功指標**：推理速度提升 30%，並且能夠處理更長的上下文。

> [!warning] 退出計畫
> 如果需要退出，所有配置均為標準 JSON 格式，可以輕鬆轉移至其他推理引擎。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/antirez--ds4");
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
> const me = dv.page("Repos/antirez--ds4");
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
| Forks | 146 |
| Open Issues | 6 |
| Issue 解決率 | 54% (7 closed) |
| 最後推送 | 2026-05-08 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 598 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/antirez/ds4) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 56
>     "Objective-C" : 30
>     "Metal" : 14
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@antirez](https://github.com/antirez) | 7 |
> | [@mitsuhiko](https://github.com/mitsuhiko) | 3 |
> | [@enilsen16](https://github.com/enilsen16) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和問題回應。
**連結**：[文件](https://github.com/antirez/ds4)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-07 ~ 2026-05-08）
> **活躍天數** 2 天 · **最新 commit** Show curl progress while downloading models

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/antirez/ds4/issues/14) | Feature Request: Support for Metal 4 Tensor APIs for Apple M | 2 | 0 |
> | [#16](https://github.com/antirez/ds4/issues/16) | Support for AMD GPU (ROCm/HIP) backend | 1 | 2 |
> | [#17](https://github.com/antirez/ds4/issues/17) | SSD tree cache KV cache | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ds4.c
> 
> `ds4.c` is a small native inference engine for DeepSeek V4 Flash. It is
> intentionally narrow: not a generic GGUF runner, not a wrapper around another
> runtime, and not a framework. The main path is a DeepSeek V4 Flash-specific
> Metal graph executor with DS4-specific loading, prompt rendering, KV state, and
> server API glue.
> 
> This project would not exist without **llama.cpp and GGML**, make sure to read
> the acknowledgements section, a big thank you to Georgi Gerganov and all the
> other contributors.
> 
> Now, back at this project. Why we believe DeepSeek v4 Flash to be a pretty special
> model deserving a stand alone engine? Because after comparing it with powerful smaller
> dense models, we can report that:
> 
> 1. DeepSeek v4 Flash is faster because of less active parameters.
> 2. In thinking mode, if you avoid *max thinking*, it produces a thinking section that is a lot shorter than other models, even 1/5 of other models in many cases, and crucially, the thinking section length is **proportional to the problem complexity**. This makes DeepSeek v4 Flash usable with thinking enabled when other models are practically impossible to use in the same conditions.
> 3. The model features a context window of **1 million tokens**.
> 4. Being so large, it knows more things if you go sampling at the edge of knowledge. For instance asking about Italian show or political questions soon uncovers that 284B parameters are a lot more than 27B or 35B parameters.
> 5. It writes much better English and Italian. It *feels* a quasi-frontier model.
> 6. The KV cache is incredibly compress, allowing long context inference on local computers and **on disk KV cache persistence**.
> 7. It works well with 2-bit quantization, if quantized in a special way (read later). This allows to run it in MacBooks with 128GB of RAM.
> 8. We expect DeepSeek to release **updated versions of v4 Flash** in the future, even better than the current one.
> 
> That said, a few important things about this project:
> 
> * The local inference landscape contains many excellent projects, but new models are released continuously, and the attention immediately gets captured by the next model to implement. This project takes a deliberately narrow bet: one model at a time, official-vector validation (logits obtained with the official implementation), long-context tests, and enough agent integration to know if it really works. The exact model may change as the landscape evolves, but the constraint remains: local inference credible on high end personal machines or Mac Studios, starting from 128GB of memory.
> * This software is developed with **strong assistance from GPT 5.5** and with humans leading the ideas, testing, and debugging. We say this openly because it shaped how the project was built. If you are not happy with AI-developed code, this software is not for you. The acknowledgement below is equally important: this would not exist without `llama.cpp` and GGML, largely written by hand.
> * This implementation is based on the idea that compressed KV caches like the one of DeepSeek v4 and the fast SSD disks of modern MacBooks should change our idea that KV cache belongs to RAM. **The KV cache It is actually a first class disk citizen**.
> * Our vision is that local inference should be a set of three things working well together, out of the box: A) inference engine with HTTP API + B) GGUF specially crafted to run well under a given engine and given assumptions + C) testing and validation with coding agents implementations. This inference engine only runs with the GGUF files provided. It gets tested against officially obtained logits at different context sizes. This project exists because we wanted to make one local model feel finished end to end, not just runnable. However this is just alpha quality code, so probably we are not still there.
> * This is **Metal-only**, may implement CUDA support in the future? Perhaps, but nothing more. The CPU path is only for correctness check, but **warning: current macOS versions have a bug in the virtual memory implementation that will crash the kernel** if you try to run the CPU code. Remember? Software sucks. I was not possible to fix the CPU inference to avoid crashing, since each time there is to restart the computer, which is not funny. Help us, if you have the guts.
> 
> 
> ### Agent Client Usage
> 
> `ds4-server` can be used by local coding agents that speak OpenAI-compatible
> chat completions. Start the server first, and set the client context limit no
> higher than the `--ctx` value you started the server with:
> 
> ```sh
> ./ds4-server --ctx 100000 --kv-disk-dir /tmp/ds4-kv --kv-disk-space-mb 8192
> ```
> 
> You can use larger context and larger cache if you wish. Full context of
> 1M tokens is going to use more or less 26GB of memory (compressed indexer
> alone will be like 22GB), so configure a context which makes sense in
> your system. With 128GB of RAM you would run the 2-bit quants, which are
> already 81GB, 26GB are going to be likely too much, so a context window
> of 100~300k tokens is wiser.
> 
> The `384000` output limit below avoids token caps since the model is able
> to generate very long replies otherwise (up to 384k tokens). The server
> still stops when the configured context window is full.
> 
> For **opencode**, add a provider and agent entry to
> `~/.config/opencode/opencode.json`:
> 
> ```json
> {
>   "$schema": "https://opencode.ai/config.json",
>   "provider": {
>     "ds4": {
>       "name": "ds4.c (local)",
>       "npm": "@ai-sdk/openai-compatible",
>       "options": {
>         "baseURL": "http://127.0.0.1:8000/v1",
>         "apiKey": "dsv4-local"
>       },
>       "models": {
>         "deepseek-v4-flash": {
>           "name": "DeepSeek V4 Flash (ds4.c local)",
>           "limit": {
>             "context": 100000,
>             "output": 384000
>           }
>         }
>       }
>     }
>   },
>   "agent": {
>     "ds4": {
>       "description": "DeepSeek V4 Flash served by local ds4-server",
>       "model": "ds4/deepseek-v4-flash",
>       "temperature": 0
>     }
>   }
> }
> ```
> 
> For **Pi**, add a provider to `~/.pi/agent/models.json`:
> 
> ```json
> {
>   "providers": {
>     "ds4": {
>       "name": "ds4.c local",
>       "baseUrl": "http://127.0.0.1:8000/v1",
>       "api": "openai-completions",
>       "apiKey": "dsv4-local",
>       "compat": {
>         "supportsStore": false,
>         "supportsDeveloperRole": false,
>         "supportsReasoningEffort": true,
>         "supportsUsageInStreaming": true,
>         "maxTokensField": "max_tokens",
>         "supportsStrictMode": false,
>         "thinkingFormat": "deepseek",
>         "requiresReasoningContentOnAssistantMessages": true
>       },
>       "models": [
>         {
>           "id": "deepseek-v4-flash",
>           "name": "DeepSeek V4 Flash (ds4.c local)",
>           "reasoning": true,
>           "thinkingLevelMap": {
>             "off": null,
>             "minimal": "low",
>             "low": "low",
>             "medium": "medium",
>             "high": "high",
>             "xhigh": "xhigh"
>           },
>           "input": ["text"],
>           "contextWindow": 100000,
>           "maxTokens": 384000,
>           "cost": {
>             "input": 0,
>             "output": 0,
>             "cacheRead": 0,
>             "cacheWrite": 0
>           }
>         }
>       ]
>     }
>   }
> }
> ```
> 
> Optionally make it the default Pi model in `~/.pi/agent/settings.json`:
> 
> ```json
> {
>   "defaultProvider": "ds4",
>   "defaultModel": "deepseek-v4-flash"
> }
> ```
> 
> For **Claude Code**, use the Anthropic-compatible endpoint. A wrapper like this
> matches the local `~/bin/claude-ds4` setup:
> 
> ```sh
> #!/bin/sh
> unset ANTHROPIC_API_KEY
> 
> export ANTHROPIC_BASE_URL="${DS4_ANTHROPIC_BASE_URL:-http://127.0.0.1:8000}"
> export ANTHROPIC_AUTH_TOKEN="${DS4_API_KEY:-dsv4-local}"
> export ANTHROPIC_MODEL="deepseek-v4-flash"
> 
> export ANTHROPIC_CUSTOM_MODEL_OPTION="deepseek-v4-flash"
> export ANTHROPIC_CUSTOM_MODEL_OPTION_NAME="DeepSeek V4 Flash local ds4"
> export ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION="ds4.c local GGUF"
> 
> export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-flash"
> export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek

## 延伸閱讀

相關概念：[[KV 緩存]] · [[推論優化]] · [[Metal]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]] · [[danveloper--flash-moe|danveloper/flash-moe]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]]

[GitHub](https://github.com/antirez/ds4)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "antirez--ds4"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "antirez--ds4"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "antirez--ds4" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "antirez--ds4"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["KV 緩存","推論優化","Metal"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "antirez--ds4" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/antirez--ds4");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "antirez--ds4" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "antirez" AND file.name != "antirez--ds4"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/antirez--ds4");
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
> const me = dv.page("Repos/antirez--ds4");
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
> const me = dv.page("Repos/antirez--ds4");
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
> const me = dv.page("Repos/antirez--ds4");
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
> const me = dv.page("Repos/antirez--ds4");
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

- [[2026-05-10|2026-05-10]] — 再次上榜，4.5k stars
- [[2026-05-09|2026-05-09]] — 首次收錄，2.5k stars
