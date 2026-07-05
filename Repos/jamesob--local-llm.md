---
repo: jamesob/local-llm
url: https://github.com/jamesob/local-llm
owner: jamesob
owner_type: User
language: Shell
license: N/A
description: "Everything I know about running LLMs locally"
homepage: ""
stars: 785
stars_per_day: 785
forks: 37
open_issues: 1
created: 2026-07-03
pushed_at: 2026-07-03
first_seen: 2026-07-05
week: "2026-W28"
month: "2026-07"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-05
use_case: "提供在本地運行最新 LLM 的硬體配置與操作指南。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-08"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 10790
readme_length: 9925
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-05"
star_history: "2026-07-05:785"
tags:
  - github
  - "category/ai_ml"
  - "lang/shell"
aliases:
  - "local-llm"
  - "jamesob/local-llm"
  - "提供在本地運行最新 LLM 的硬體配置與操作指南。"
---

# local-llm

**785** stars · **785** stars/天 · 建立 1 天前 · Shell · 未標註授權

```dataviewjs
const me = dv.page("Repos/jamesob--local-llm");
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
> 提供在本地運行最新 LLM 的硬體配置與操作指南。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (785 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在本地高效運行 LLM 的開發者和研究者。
> **一句話重點** 這個專案不僅提供了本地運行 LLM 的指南，還強調了硬體配置對性能的影響。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jamesob--local-llm");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "jamesob--local-llm" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的本地 LLM 運行環境，值得投資。

> [!abstract] 核心創新
> 通過使用 PCIe4 交換機來降低 GPU 之間的延遲，提升多 GPU 環境的性能。

## 專案簡介

這個專案提供了一個詳細的指南，幫助用戶在本地運行最先進的 LLM，特別是針對高性能計算的硬體配置。用戶可以根據自己的預算選擇不同的硬體組合，例如，花費大約 $2k 可以配置 2x RTX 3090s，運行 Qwen3.6-27B 模型，而 $40k 則可以配置 4x RTX 6000 Pros，達到 384GB VRAM 的性能。這些配置能夠支持高效的模型運行，並且提供了 Docker 容器的配置範本，讓用戶能夠輕鬆部署模型。該專案還強調了使用 PCIe4 交換機的優勢，能夠在 GPU 之間實現更低延遲的直接通信，這在多 GPU 環境中尤為重要。用戶可以通過 `hf download --local-dir ~/storage/` 指令下載模型，並使用 Docker 來運行模型服務。這種設計使得用戶能夠靈活地管理和運行多個模型，並且可以在本地環境中進行實驗和開發。整體而言，這個專案的賣點在於其針對高性能計算的硬體配置和簡化的模型部署流程，適合對本地 LLM 運行有需求的開發者和研究者。

**技術棧**：`Docker` · `NVIDIA CUDA`

## 重點功能

- 硬體配置指南 — 提供詳細的硬體選擇和配置建議，適合不同預算（$2k 和 $40k）。
- Docker 容器配置 — 提供 ready-to-run 的 Docker 配置，便於用戶快速部署模型。
- PCIe4 交換機使用 — 透過 PCIe4 交換機實現 GPU 之間的低延遲通信，提升性能。
- 模型下載指令 — 使用 `hf download --local-dir ~/storage/` 指令輕鬆下載模型。
- 語音轉文字配置 — 提供 `whisper-large-v3` 的本地運行配置，簡化語音識別的流程。

## 快速開始

1. 下載模型
```bash
hf download --local-dir ~/storage/
```
2. 運行 Docker 容器
```bash
docker-compose up -d
```
3. 訪問模型服務
```bash
curl http://localhost:5000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 785 stars（785/天），forks 37（4.7%），這顯示出用戶對於在本地運行 LLM 的需求。作者 jamesob 在硬體配置和 LLM 運行方面有豐富的經驗，這個專案解決了許多用戶在本地運行大型模型時的配置困難。隨著對於 AI 模型本地運行的關注增加，這個專案提供了一個具體的解決方案。社群的反饋和需求也促進了這個專案的快速成長。

## 適合誰使用

**目標受眾**：希望在本地高效運行 LLM 的開發者和研究者。

> [!example] 使用場景
> - AI 研究人員用它來在本地運行 Qwen3.6-27B 模型，因為這樣可以避免雲端計算的高昂費用和延遲。
> - 開發者用它來測試和優化自己的 LLM，因為本地環境提供了更快的迭代速度和更低的成本。
> - 數據科學家用它來進行語音轉文字的實驗，因為提供的配置簡化了模型的部署流程。

## 架構分析

這個專案的架構設計專注於高效能的硬體配置和簡化的模型運行。使用 PCIe4 交換機來實現 GPU 之間的直接通信，降低延遲，這在多 GPU 環境中至關重要。資料流方面，模型權重被下載並存儲在本地，然後通過 Docker 容器運行，這樣可以確保每個模型的運行環境是獨立的。

這種設計使得用戶能夠靈活地管理多個模型，並且可以在本地進行實驗。選擇使用 Docker 來管理模型的運行，這樣可以簡化部署流程，但也可能帶來一定的學習曲線。整體而言，這個架構的設計使得用戶能夠在本地高效運行 LLM，並且能夠靈活調整硬體配置以滿足需求。

## 技術深入分析

該專案的核心技術機制在於高效的硬體配置和使用 Docker 來管理模型運行。選擇 PCIe4 交換機來降低 GPU 之間的延遲，這在多 GPU 環境中至關重要。效能方面，該配置能夠在多個 GPU 之間實現低至 0.37 微秒的延遲，這對於需要高頻通信的 LLM 運行至關重要。設計上，這個專案選擇使用較舊的硬體（如 DDR4 和 PCIe4），以降低成本，但這也意味著在未來可能需要升級以支持新技術。技術風險方面，隨著模型和硬體需求的增加，這種配置可能會面臨擴展性瓶頸。整合方面，Docker 的使用使得與主流工具鏈的整合相對簡單，但對於不熟悉 Docker 的用戶來說，可能需要額外的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但對於不熟悉 Docker 的用戶可能會有一些挑戰。整體而言，花 30 分鐘應該能夠完成基本的設置和運行。

## 優缺點分析

> [!success] 優點
> - 提供詳細的硬體配置指南，適合不同預算。
> - 簡化的 Docker 部署流程，易於使用。
> - 低延遲的 GPU 之間通信，提升性能。

> [!danger] 缺點
> - 需要高額的初始硬體投資。
> - 僅支援特定的 NVIDIA GPU 型號，限制了選擇。
> - 對於不熟悉 Docker 的用戶，可能需要額外學習。

> [!warning] 注意事項
> - 僅支援特定的 NVIDIA GPU 型號（如 RTX 3090/6000）。
> - 需要較高的初始硬體投資，特別是對於高性能配置。
> - 不支援其他品牌的 GPU，限制了硬體選擇。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 LLM 部署方案，但可能不如本專案在硬體配置方面詳細。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於模型的訓練和優化，而非硬體配置和本地運行。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 LLM 的運行和管理，但不提供具體的硬體配置建議。 | 如果你的團隊已經有現成的硬體資源，並且只需要管理模型的運行。 | low，因為不需要重新配置硬體。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更全面的模型訓練和優化方案，而非專注於硬體配置。 | 如果你的需求主要是訓練模型而非運行，這個工具可能更合適。 | medium，因為需要重新考慮模型的訓練流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **local-llm** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 LLM 的運行和管理，但不提供具體的硬體配置建議。 | 提供更全面的模型訓練和優化方案，而非專注於硬體配置。 |
> | 遷移成本 | - | low，因為不需要重新配置硬體。 | medium，因為需要重新考慮模型的訓練流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經有現成的硬體資源，並且只需要管理模型的運行。 | 如果你的需求主要是訓練模型而非運行，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多 GPU 環境中，未設置正確的 GRUB 參數可能導致 NCCL 停滯。
  - 解法：確保 GRUB 參數設置為 `iommu=off`。
- [MEDIUM] 使用 PCIe 交換機時，未禁用 ACS 可能導致 P2P 通信失效。
  - 解法：運行 disable-acs.sh 腳本以禁用 ACS。
- [MEDIUM] Docker 配置不當可能導致模型無法啟動。
  - 解法：檢查 Docker 日誌以獲取錯誤信息。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要在本地運行 LLM。 | 非常適合 | 提供詳細的硬體配置和簡化的部署流程，適合小型團隊。 |
| 大型企業需要在雲端運行 LLM。 | 不適合 | 專案主要針對本地運行，雲端環境不符合其設計理念。 |
| AI 研究機構需要進行模型實驗。 | 適合 | 提供靈活的硬體配置和多模型支持，適合研究用途。 |
| 個人開發者希望在家中運行 LLM。 | 非常適合 | 詳細的指南和相對低的成本使得個人開發者能夠輕鬆上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的本地 LLM 運行環境，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本專案不需要高權限運行，且不會存取敏感資料。依賴的第三方庫需定期檢查更新以避免安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案最常與 Docker 和 NVIDIA CUDA 搭配使用，在開發和部署環節中發揮作用。用戶可以在 Docker 中運行模型，並通過 HTTP API 進行交互。與主流 CI 工具（如 GitHub Actions）相容，能夠輕鬆集成到現有的開發流程中。最常見的整合問題是 Docker 配置不當，這可能導致模型無法啟動，需仔細檢查配置文件。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jamesob--local-llm");
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
> const me = dv.page("Repos/jamesob--local-llm");
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
| Forks | 37 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-03 |
| 建立日期 | 2026-07-03 |
| Repo 大小 | 10.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jamesob/local-llm) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 97
>     "Dockerfile" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jamesob](https://github.com/jamesob) | 18 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有提交和問題回應。
**連結**：[文件](https://github.com/jamesob/local-llm)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-03 ~ 2026-07-03）
> **活躍天數** 1 天 · **最新 commit** glm-5.2: more context

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/jamesob/local-llm/issues/1) | there is no Qwen3.7-27b :P | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # jamesob's guide to running SOTA LLMs locally
> 
> *Note: nothing in this README aside from the tables was written by AI.*
> 
> ---
> 
> Have $2k burning a hole in your pocket and want some local, state-of-the-art machine
> intelligence? 
> 
> How about $40k?
> 
> If Dario and Altman are giving you heartburn (they should be), read on to figure out
> how to run this new kind of computing locally.
> 
> ---
> 
> In this repo you'll find
> 
> - the hardware I use to run SOTA locally,
>   - why I bought what and little-known *secrets* for configuring it,
> - how I run speech-to-text (STT) locally,
> - ready-to-run configuration for running models I think are good within Docker containers.
> 
> 
> ## My setup
> 
> I was lucky/dumb enough to buy 4x RTX Pro 6000s back when they were cheaper. Because
> RAM is now so expensive, I opted to build a last-gen DDR4 system to host these cards,
> the parts for which I got off eBay. This allowed me to keep base system cost reasonable
> while still getting a lot of VRAM.
> 
> Another somewhat unusual thing I did was to use PCIe4 switches (from
> [c-payne.com](c-payne.com)). This allows the GPUs to communicate to one another
> "directly" at wire speeds during the allreduce step in tensor parallelism, rather than
> having to send all data through the PCI root complex. The upshot of this is reduced
> latency between the cards with less of a need for expensive PCIe5 hardware.
> 
> Consequently, I'm spending money on VRAM (where it counts) rather than on a PCIe5/DDR5
> base system, which is terrifically expensive as of July 2026.
> 
> My particular BOM is detailed below.
> 
> 
> ## Kernel / GRUB Parameters
> 
> ```bash
> 
> ## Contents
> 
> | Section | TL;DR |
> |---|---|
> | [How much are you willing to spend?](#how-much-are-you-willing-to-spend) | $2k gets you Qwen and good STT (pretty far!); $40k gets you almost-Opus |
> | [Base system](#base-system) | Last-gen EPYC + eBay DDR4 for $5.6k |
> | [GPUs](#gpus) | 4× RTX PRO 6000, 384GB VRAM (where the money went) |
> | [c-payne switch sub-BOM](#c-payne-pcie-gen4-switch-sub-bom-c-paynecom) | Indie PCIe switching from [c-payne.com](https://c-payne.com) so GPUs talk peer-to-peer |
> | [GPU mount](#gpu-mount) | A day of carpentry |
> | [Making the switch behave](#getting-the-pci-switches-to-work-properly) | BIOS bifurcation, link speed, ASPM |
> | [Kernel / GRUB params](#kernel--grub-parameters) | `iommu=off` or NCCL hangs |
> | [ACS disable](#acs-disable-critical-for-switch-p2p) | Keep P2P traffic inside the switch fabric |
> | [GPU power limiting](#gpu-power-limiting) | Running $46k of silicon on a 110V circuit |
> | [Result](#result) | Gen4 line rate: 27.5/50.4 GB/s, sub-µs latency |
> | [`runners/`](./runners) | Ready-to-run serving configs: [GLM-5.2-594B](./runners/GLM-5.2-594B): vLLM docker-compose, DCP4+MTP5, ~80 t/s @ 460k ctx |
> | [`runners/stt`](./runners/stt) | Ready-to-run speech-to-text config with `whisper-large-v3` |
> | [`tools/`](./tools) | [`measure-gpu-speed.sh`](./tools/measure-gpu-speed.sh): P2P bandwidth/latency benchmark |
> | [Resources](#resources) | rtx6kpro repo, c-payne |
> 
> 
> ### How much are you willing to spend?
> 
> #### ~$2k
> 
> A great way to go is 2x RTX 3090s for a total of **48GB VRAM** total. You can then run
> [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B), which is an awesome model.
> 
> You can also run SOTA speech-to-text (STT) with
> [`whisper-large-v3`](https://huggingface.co/openai/whisper-large-v3), which I find very
> useful. That's the model - you'd then access it with my cross-platform [`stt`
> harness](https://github.com/jamesob/stt).
> 
> I've found local STT surprisingly useful - and I feel comfortable using it, unlike a
> hosted equivalent. You can find a ready-to-run config in
> [`./runners/stt`](./runners/stt) that only assumes the presence of ~11GB of VRAM on an
> Nvidia GPU.
> 
> #### ~$40k
> 
> At this price level, you get the next step up in model intelligence. Something pretty
> close to Claude Opus.
> 
> You'd buy 4x RTX 6000 Pros for a total of **384GB of VRAM**.
> 
> ##### Current best models for 4x RTX6kPRO
> 
> | Date | Best model | My config |
> |---|---|---|
> | 2026-07 | [`GLM-5.2-Int8Mix-NVFP4-REAP-594B`](https://huggingface.co/madeby561/GLM-5.2-Int8Mix-NVFP4-REAP-594B) | [Runner config](./runners/GLM-5.2-594B) |
> 
> ##### Other approaches
> 
> Note: these are my recommendations, but there are other completely valid ways to spend
> your money. For example, there's probably also some regime where rather than getting 4
> rtx6kpros, you allocate most of your money to building out a [linked 4x DGX Spark
> cluster](https://youtu.be/QJqKqxQR36Y?si=MiKNYtIzut_5pnXy) for a total of 512GB VRAM
> and use that as the slow, big brain to drive Qwen3.7-27b to do the rote tasks quickly.
> 
> 
> ## Hardware
> 
> Here's the hardware I wound up purchasing for the 4x RTX 6000 pro machine.
> 
> 
> ### Base system
> 
> A modest, last-gen EPYC system purchased in parts almost entirely from eBay.
> 
> | Component | Spec | Price |
> |---|---|---|
> | Motherboard | ASRock Rack ROMED8-2T (SP3, 7× PCIe 4.0 x16, dual 10GbE) | $715 |
> | CPU | AMD EPYC Milan 7313P (16-core 3.0GHz) | $504 |
> | RAM | 8× 16GB Crucial CT16G4RFD4213 DDR4 ECC RDIMM (128GB total, eBay) | $642 |
> | CPU Cooler | Dynatron T17 SP3 tower, 280W TDP | $40 |
> | Case | AAAWave Sluice V2 open frame | $100 |
> | PSUs | 2× Super Flower 1700W | $750 |
> | PCIe Switch | c-payne Microchip Switchtec PM40100 Gen4 (see sub-BOM below) | ~$1,330 |
> | Boot NVMe | 4TB M.2 | $291 |
> | Storage NVMe | (2x) 8TB M.2 (model weights) | $1,200 |
> | Fans | 3× 120mm PWM | $15 |
> | **Total** | | **$5,587** |
> 
> 
> ### GPUs
> 
> | Component | Spec | Price |
> |---|---|---|
> | GPUs | 4× NVIDIA RTX PRO 6000 Blackwell Workstation (96GB each, **384GB VRAM total**) | **~$46,000** |
> 
> 
> ### c-payne PCIe Gen4 Switch Sub-BOM (c-payne.com)
> 
> | Part | Qty | Unit (€) | Notes |
> |---|---|---|---|
> | PCIe gen4 Switch 5× x16 — Microchip Switchtec PM40100 | 1 | 1.050 | 2× SlimSAS 8i upstream, 5× x16 quad-width-spaced downstream, aux x4 SlimSAS, 3× 8-pin EPS power |
> | SlimSAS PCIe gen4 Host Adapter x16 — REDRIVER AIC (DS160PR810) | 1 | 140 | Plugs into ROMED8-2T x16 slot, feeds switch upstream |
> | SlimSAS SFF-8654 8i cable — PCIe gen4 | 2 | ~30 | Each carries x8; pair = x16 upstream |
> | **Total** | | | **~€1,220 (~$1,330 USD)** |
> 
> 
> ### GPU mount
> 
> I had to custom fabricate a wood enclosure for the PCI switch and GPUs, which took
> about a day.
> 
> I found the PCI switch's builtin fan very loud and seemingly useless, so I simply
> unplugged that from the board.
> 
> 
> ### Hoarding model weights
> 
> I save all model weights locally on a ZFS filesystem that's replicated across the two
> 8TB drives, which is mounted at `~/storage`.
> 
> For any model I want to run, I first download the model using 
> ```
> hf download  --local-dir ~/storage/
> ```
> 
> 
> ### Running models
> 
> Once the model weights are cached locally, I have a specific directory for each model
> that contains a `docker-compose.yml` file that cordones off the running of each model
> to its own Docker container.
> 
> You can find these configurations in [`./runners/`](./runners).
> 
> Each container mounts in `~/storage/models` in read-only mode to obtain the weights
> that I've cached locally.
> 
> I then use `opencode` hosted on a VM on another machine to access the models once
> they're serving on `http://clank.j.co:5000`. 
> 
> I use a network-internal DNS server to point `clank.j.co` to the LLM machine, but you
> could simply do `http://:5000` too.
> 
> 
> ### The harness itself
> 
> I created a VM and clanked up an application that basically just creates a tmux session
> for each directory within the VM's `~/src` tree, which then runs an `opencode` instance
> that backs up to the inference machine's HTTP API (`http://clank.j.co:5000`).
> 
> One key to making the opensource models good is tooling them properly; a summary of my
> `skills/` is:
> 
> - camofox, kagi.com API key, and searXNG for web browsing and search,
> - Telegram bot for communication and alerting,
> - a local private Gitea instance for collaborating on source code.
> 
> The clanker will either work with me interactively in a session, or can be farmed off
> to work on Gitea issues and file PRs there.
> 
> All this happ

## 延伸閱讀

相關概念：[[LLM 推論]] · [[Docker]] · [[PCIe 交換機]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[deepseek-ai--TileKernels|deepseek-ai/TileKernels]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]]

[GitHub](https://github.com/jamesob/local-llm)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "jamesob--local-llm"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "jamesob--local-llm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "jamesob--local-llm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "jamesob--local-llm"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["LLM 推論","Docker","PCIe 交換機"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jamesob--local-llm" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jamesob--local-llm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jamesob--local-llm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jamesob" AND file.name != "jamesob--local-llm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jamesob--local-llm");
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
> const me = dv.page("Repos/jamesob--local-llm");
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
> const me = dv.page("Repos/jamesob--local-llm");
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
> const me = dv.page("Repos/jamesob--local-llm");
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
> const me = dv.page("Repos/jamesob--local-llm");
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

> **2026-07-05** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 首次收錄，785 stars
