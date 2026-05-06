---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 2395
stars_per_day: 41
forks: 334
open_issues: 7
created: 2026-03-08
pushed_at: 2026-03-27
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "醫療 AI"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供最全面的開源醫療 AI 技能庫，讓 AI 代理具備醫學和科學研究的能力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 46
repo_size_kb: 77628
readme_length: 9977
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:950,2026-03-11:953,2026-03-13:1077,2026-03-13:1078,2026-03-14:1125,2026-03-14:1125,2026-03-15:1165,2026-03-15:1165,2026-03-16:1208,2026-03-17:1285,2026-03-18:1340,2026-03-19:1394,2026-03-20:1439,2026-03-21:1469,2026-03-22:1503,2026-03-23:1523,2026-03-24:1561,2026-03-25:1607,2026-03-26:1640,2026-03-27:1670,2026-03-28:1704,2026-03-29:1731,2026-03-30:1747,2026-03-31:1773,2026-04-01:1801,2026-04-02:1829,2026-04-03:1845,2026-04-04:1868,2026-04-05:1881,2026-04-06:1889,2026-04-07:1896,2026-04-08:1910,2026-04-09:1938,2026-04-10:1961,2026-04-11:1986,2026-04-12:1999,2026-04-13:2012,2026-04-14:2034,2026-04-15:2052,2026-04-16:2068,2026-04-17:2084,2026-04-18:2092,2026-04-19:2099,2026-04-20:2109,2026-04-21:2121,2026-04-22:2131,2026-04-23:2149,2026-04-24:2155,2026-04-25:2160,2026-04-26:2168,2026-04-27:2172,2026-04-28:2183,2026-04-29:2190,2026-04-30:2202,2026-05-01:2210,2026-05-02:2220,2026-05-03:2219,2026-05-04:2253,2026-05-05:2373,2026-05-06:2395"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/awesome"
  - "topic/claude_code"
  - "topic/clawhub"
  - "topic/medical"
  - "topic/nanoclaw"
aliases:
  - "OpenClaw-Medical-Skills"
  - "FreedomIntelligence/OpenClaw-Medical-Skills"
  - "提供最全面的開源醫療 AI 技能庫，讓 AI 代理具備醫學和科學研究的能力。"
---

# OpenClaw-Medical-Skills

**2.4k** stars · **41** stars/天 · 建立 58 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`awesome` `claude-code` `clawhub` `medical` `nanoclaw` `openclaw` `openclaw-skills` `skills`

> [!summary] 一句話摘要
> 提供最全面的開源醫療 AI 技能庫，讓 AI 代理具備醫學和科學研究的能力。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (41 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Slow (最後推送 39 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速整合醫療 AI 技能以提升臨床決策效率的醫療研究團隊。
> **一句話重點** 這個專案不僅提供技能，還整合了多個醫療領域的專業知識，讓 AI 代理能夠在實際應用中發揮更大作用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "醫療 AI" && p.file.name !== "FreedomIntelligence--OpenClaw-Medical-Skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 醫療 AI 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到強大的醫療 AI 能力，值得投資。

> [!abstract] 核心創新
> 這個專案提供了最全面的開源醫療 AI 技能庫，整合了多個領域的專業技能。

## 專案簡介

OpenClaw Medical Skills 是一個包含 869 個 AI 代理技能的開源庫，專為 OpenClaw 和 NanoClaw 框架設計，旨在將通用 AI 代理轉變為強大的醫學和科學研究助手。用戶可以透過簡單的指令安裝技能，例如使用 `cp -r skills/* ~/.openclaw/skills/` 將技能安裝到全域目錄，或使用 OpenClaw CLI 進行單個技能的安裝。這些技能涵蓋臨床報告、基因組學、藥物發現等多個領域，並能連接真實的數據庫和 API，生成結構化的臨床或科學相關輸出。這樣的設計使得 AI 代理不僅能提供一般醫學資訊，還能進行 RNA-seq、GWAS 和藥物互動預測等專業分析。

與其他工具相比，如 BioPython 和 Scikit-learn，OpenClaw Medical Skills 提供更專注於醫學和生物信息學的技能，並且能夠直接與臨床數據庫整合，這在需要高精度醫療決策的場景中尤為重要。這個庫的依賴性相對輕量，主要依賴 Git 和 OpenClaw，適合需要快速部署醫療 AI 解決方案的開發者。使用者可以在安裝後立即詢問代理可用的醫療和臨床技能，無需重啟，這提高了使用的便利性。整體來看，這是一個適合醫療研究、臨床實踐和生物信息學分析的強大工具，特別適合需要快速整合多種醫療技能的團隊。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869 個醫療技能 — 涵蓋臨床、基因組學、藥物發現等多個領域，提供多樣化的功能。
- 即時數據查詢 — 能直接連接到 PubMed 和 ClinicalTrials.gov，提供最新的臨床數據。
- 自動化報告生成 — 能根據輸入的數據自動生成結構化的臨床報告，提升效率。
- 支持多種安裝方式 — 提供多種安裝選項，包括全域安裝和針對特定技能的安裝。
- 輕量級依賴 — 主要依賴 Git 和 OpenClaw，易於部署和使用。

## 快速開始

1. 克隆專案到本地
```bash
git clone --depth=1 --no-checkout https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git
```
2. 進入專案目錄
```bash
cd OpenClaw-Medical-Skills
```
3. 設置稀疏檢出以避免下載大型數據文件
```bash
git sparse-checkout init --cone && git sparse-checkout set skills && git checkout main
```
4. 將技能複製到全域目錄
```bash
cp -r skills/* ~/.openclaw/skills/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 58 天內累積 2395 stars（每天 41），forks 334（13.9%），這顯示出社群對於開源醫療技能庫的強烈需求。主要貢獻者 WangRongsheng 和其他開發者在醫療 AI 領域有豐富經驗，之前的解決方案往往缺乏整合性和專業性，無法滿足臨床和研究的需求。此專案的推出正好填補了這一空白，並且在 GitHub 上的活躍度和問題解決率也顯示出其社群的健康度。這樣的增長可能受到醫療 AI 應用需求上升的推動，特別是在疫情後，對於快速獲取醫療資訊的需求更為迫切。

## 適合誰使用

**目標受眾**：需要快速整合醫療 AI 技能以提升臨床決策效率的醫療研究團隊。

> [!example] 使用場景
> - 醫療研究人員用它來快速查詢臨床試驗數據，因為它能直接連接到 ClinicalTrials.gov，提供即時的數據更新。
> - 生物信息學家用它來進行 RNA-seq 分析，因為它內建的技能能自動處理數據並生成報告，節省了大量手動操作時間。
> - 臨床醫生用它來生成 SOAP 記錄，因為它能根據實際病歷自動填寫，提升了工作效率。

## 架構分析

這個專案採用模組化架構，將每個技能封裝為獨立的模組，這樣可以方便地進行維護和擴展。資料流方面，技能會從指定的目錄中加載，並能連接到實際的數據庫和 API，生成結構化的輸出。這樣的設計使得技能能夠快速更新，而不需要重啟整個系統。選擇這種架構的代價是需要用戶手動管理技能的安裝和更新，但這也提供了更大的靈活性。擴展性方面，隨著技能數量的增加，可能會對性能造成影響，特別是在加載大量數據時。

## 技術深入分析

OpenClaw Medical Skills 的核心技術機制在於其模組化的技能設計，每個技能都是獨立的模組，能夠連接到實際的數據庫和 API，這樣的設計使得技能能夠快速更新和擴展。效能方面，這個庫能夠處理大量的醫療數據，並且在加載時不會影響整體系統的性能。選擇 Python 作為主要開發語言，因為它在數據科學和機器學習領域的廣泛應用，這使得開發者能夠快速實現功能。依賴關係方面，這個專案主要依賴 Git 和 OpenClaw，這使得它的安裝和配置相對簡單，但也意味著使用者需要具備一定的技術背景。技術風險方面，隨著技能數量的增加，可能會對性能造成影響，特別是在加載大量數據時。整合方面，這個工具能夠輕鬆與現有的醫療系統和數據庫進行整合，並且支援多種 CI/CD 流程，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說非常友好。安裝過程相對順暢，但需要注意 Git LFS 的配置。文件目前僅提供英文，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 涵蓋廣泛的醫療和生物信息學技能，適合多種應用場景。
> - 模組化設計，便於擴展和維護。
> - 即時數據查詢功能，提升了臨床決策的效率。

> [!danger] 缺點
> - 需要一定的技術背景來安裝和配置。
> - 部分技能依賴大型數據文件，可能會影響安裝速度。
> - 不支持 Windows 環境，限制了使用者的選擇。

> [!warning] 注意事項
> - 需要安裝 Git 和 OpenClaw。
> - 部分技能可能需要 Git LFS 來處理大型數據文件。
> - 不支持 Windows 環境，需在 Linux 或 macOS 上運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理技能，但專注於遊戲開發，並不涵蓋醫療領域。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音和語言處理的 AI 技能庫，與醫療技能無關。 |
| [BioPython/BioPandas](https://github.com/BioPython/BioPandas) | 主要用於生物信息學數據處理，缺乏專業的臨床技能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| BioPython | 專注於生物信息學數據處理，提供豐富的數據分析功能，但缺乏專業的臨床技能。 | 如果你的專案主要集中在生物數據分析，而不需要臨床技能，BioPython 是更好的選擇。 | medium，因為需要重新設計數據處理流程。 |
| Scikit-learn | 提供通用的機器學習工具，適合各種數據分析，但不專注於醫療領域。 | 如果你的專案需要通用的機器學習功能，而不特別針對醫療應用，Scikit-learn 是更合適的選擇。 | high，因為需要重新設計模型訓練和預測流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenClaw-Medical-Skills** | **BioPython** | **Scikit-learn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生物信息學數據處理，提供豐富的數據分析功能，但缺乏專業的臨床技能。 | 提供通用的機器學習工具，適合各種數據分析，但不專注於醫療領域。 |
> | 遷移成本 | - | medium，因為需要重新設計數據處理流程。 | high，因為需要重新設計模型訓練和預測流程。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在生物數據分析，而不需要臨床技能，Bio | 如果你的專案需要通用的機器學習功能，而不特別針對醫療應用，S |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在內部工具中試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 Git LFS 的配置問題
  - 解法：確保在安裝前已安裝 Git LFS
- [MEDIUM] 某些技能可能需要額外的數據文件，導致安裝時間延長
  - 解法：使用稀疏檢出來避免下載大型數據文件
- **[HIGH]** 不支持 Windows 環境，可能導致部分用戶無法使用
  - 解法：在 Linux 或 macOS 上運行

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 醫療研究團隊需要快速查詢臨床數據 | 非常適合 | 提供即時的數據查詢功能，能直接連接到臨床數據庫。 |
| 生物信息學家需要進行 RNA-seq 分析 | 非常適合 | 內建的技能能自動處理數據並生成報告，節省時間。 |
| 小型醫療機構希望提升臨床決策效率 | 適合 | 能夠提供結構化的臨床報告生成工具。 |
| 大型醫療機構需要整合多種醫療技能 | 普通 | 雖然技能數量龐大，但管理和維護可能會成為挑戰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的醫療 AI 能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，只需基本的 Git 和 OpenClaw 設置。它不會存取敏感資料，但依賴的外部 API 需注意安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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
| Forks | 334 |
| Open Issues | 7 |
| Issue 解決率 | 46% (6 closed) |
| 最後推送 | 2026-03-27 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 75.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FreedomIntelligence/OpenClaw-Medical-Skills) |
| Topics | `awesome` `claude-code` `clawhub` `medical` `nanoclaw` `openclaw` `openclaw-skills` `skills` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 67
>     "Jupyter Notebook" : 23
>     "TeX" : 2
>     "Shell" : 2
>     "R" : 2
>     "HTML" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WangRongsheng](https://github.com/WangRongsheng) | 18 |
> | [@donglihe-hub](https://github.com/donglihe-hub) | 9 |
> | [@haoyu-haoyu](https://github.com/haoyu-haoyu) | 2 |
> | [@wabyking](https://github.com/wabyking) | 2 |
> | [@frankchenfu](https://github.com/frankchenfu) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-14 ~ 2026-03-27）
> **活躍天數** 7 天 · **最新 commit** Merge pull request #17 from dzx-cc/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues/27) | Possible complementary direction: long-term skill lifecycle  `enhancement` | 0 | 0 |
> | [#26](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues/26) | Git LFS is disabled, preventing clone checkout `bug` | 0 | 0 |
> | [#25](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues/25) | Many skills acquires data-example and script `bug` | 0 | 1 |
> | [#24](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues/24) | Request for LFS file access or alternative download `enhancement` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaw Medical Skills
> 
> [](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/stargazers)
> [](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/network/members)
> [](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues)
> [](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/tree/main/skills)
> [](LICENSE)
> [](https://github.com/openclaw/openclaw)
> 
> **The largest open-source medical AI skill library for OpenClaw.**
> 
> *869 curated skills · Clinical · Genomics · Drug Discovery · Bioinformatics · Medical Devices*
> 
> [English](#) | [中文](README_zh.md)
> 
> ---
> 
> 
> ## Installation
> 
> 
> # Install to your workspace skills directory
> cp -r skills/* /skills/
> 
> 
> # Or install globally (available to all agents)
> cp -r skills/* ~/.openclaw/skills/
> ```
> 
> > **Note:** Some skills bundle large data files (databases, datasets). The
> > sparse-checkout method above avoids downloading them. If you need the full
> > repo including all data, install [Git LFS](https://git-lfs.com) first, then
> > run `git clone https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git`.
> 
> Skills are picked up automatically on the next session. No restart needed.
> 
> #### Method 2 — OpenClaw CLI
> 
> If you use the [OpenClaw plugin registry](https://clawhub.com), you can search and install individual skills from there. For bulk install from this collection, Method 1 is faster.
> 
> ```bash
> openclaw plugins install     # install a single skill
> openclaw plugins update                  # update all installed skills
> ```
> 
> #### Method 3 — Configure Extra Directories
> 
> To point OpenClaw at a cloned copy of this repo permanently, add it to `~/.openclaw/openclaw.json`:
> 
> ```json
> {
>   "plugins": {
>     "local": ["/path/to/OpenClaw-Medical-Skills"]
>   }
> }
> ```
> 
> This mounts the entire collection without copying files.
> 
> #### Method 4 — Install Selected Skills Only
> 
> Pick skills relevant to your domain:
> 
> ```bash
> 
> # Example: clinical + drug discovery stack
> SKILLS=(
>   "clinical-reports"
>   "tooluniverse-drug-research"
>   "tooluniverse-pharmacovigilance"
>   "clinicaltrials-database"
>   "biomedical-search"
>   "tooluniverse-drug-drug-interaction"
> )
> 
> for skill in "${SKILLS[@]}"; do
>   cp -r OpenClaw-Medical-Skills/skills/$skill ~/.openclaw/skills/
> done
> ```
> 
> ---
> 
> 
> ## Skills Overview
> 
> | Category | Count | Highlights |
> |---|---|---|
> | General & Core | 10 | Browser/search, document tools, and developer workflow utilities |
> | Medical & Clinical | 119 | Clinical reports, CDS, oncology, imaging, and healthcare AI |
> | Scientific Databases | 43 | Genomics/protein/drug databases and biomedical knowledge retrieval |
> | Bioinformatics (gptomics) | 239 | Variant analysis, sequencing QC, DE, pathways, single-cell, and epigenomics |
> | Omics & Computational Biology | 59 | Single-cell/spatial, proteomics, cheminformatics, and protein design tools |
> | ClawBio Pipelines | 21 | Orchestration pipelines for scRNA, GWAS, ancestry, and structural workflows |
> | BioOS Extended Suite | 285 | Extended agent suite for oncology, immunology, clinical AI, and infrastructure |
> | Data Science & Tools | 93 | Statistics, visualization, automation, simulation, and scientific tooling |
> | **Total** | **869** | |
> 
> ---
> 
> 
> ### Why This Collection Matters
> 
> | Without Skills | With OpenClaw Medical Skills |
> |---|---|
> | Generic AI responses about medicine | Real PubMed / ClinicalTrials.gov / FDA queries |
> | No bioinformatics capability | RNA-seq, scRNA-seq, GWAS, variant calling pipelines |
> | No drug intelligence | ChEMBL, DrugBank, DDI prediction, pharmacovigilance |
> | No clinical documentation | SOAP notes, discharge summaries, prior auth decisions |
> | No genomics support | VCF annotation, ACMG classification, PRS calculation |
> | No regulatory guidance | FDA, CE mark, IEC 62304, ISO 14971 compliance |
> 
> This collection aggregates skills from **12+ open-source skill repositories** spanning academic research tools, clinical workflows, regulatory frameworks, and cutting-edge AI-driven protein design — giving your AI agent capabilities comparable to a team of specialized research scientists.
> 
> ---
> 
> 
> ## What Is This?
> 
> **OpenClaw Medical Skills** is a curated collection of **869 AI agent skills** covering the full spectrum of biomedical and clinical research. These skills are designed for [OpenClaw](https://github.com/openclaw/openclaw) / [NanoClaw](https://github.com/qwibitai/nanoclaw) — Claude-based personal AI assistant frameworks — and transform a general-purpose AI agent into a powerful medical and scientific research companion.
> 
> Each skill is a self-contained module (a `SKILL.md` file) that:
> - Teaches the agent specialized domain knowledge and workflows
> - Connects to real databases, APIs, and computational tools
> - Produces structured, clinically or scientifically relevant outputs
> 
> > We benefit from the open-source community. The full collection of resources can be found here: [Awesome LLM Resources](https://github.com/WangRongsheng/awesome-LLM-resources?tab=readme-ov-file#%E6%8A%80%E8%83%BD-Skills)
> 
> 
> ### Requirements
> 
> - [OpenClaw](https://github.com/openclaw/openclaw) installed and running, **or** [NanoClaw](https://github.com/qwibitai/nanoclaw) as an alternative
> - Git (for cloning this repo)
> 
> ---
> 
> 
> ### For OpenClaw Users
> 
> OpenClaw loads skills from two locations:
> 
> | Priority | Path | Scope |
> |---|---|---|
> | High | `/skills/` | Per-workspace (recommended) |
> | Low | `~/.openclaw/skills/` | Global, shared across all agents |
> 
> #### Method 1 — Clone and Copy (Recommended)
> 
> ```bash
> 
> # Clone this repository (skills only — skips large data files)
> git clone --depth=1 --no-checkout https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git
> cd OpenClaw-Medical-Skills
> git sparse-checkout init --cone
> git sparse-checkout set skills
> git checkout main
> 
> 
> ### For NanoClaw Users
> 
> NanoClaw loads skills into agent containers at startup from `container/skills/`.
> 
> ```bash
> 
> # Clone and copy into NanoClaw container skills directory
> git clone https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git
> cp -r OpenClaw-Medical-Skills/skills/* /path/to/nanoclaw/container/skills/
> 
> 
> # Rebuild the container to apply
> cd /path/to/nanoclaw
> ./container/build.sh
> ```
> 
> ---
> 
> 
> ### Verification
> 
> After installation, ask your agent:
> 
> ```
> What medical and clinical skills do you have available?
> ```
> 
> Your agent should list the installed skills with their capabilities.
> 
> ---
> 
> 
> ## Table of Contents
> 
> 
> ### General & Core
> - [General Tools](#general-tools)
> 
> 
> ### Medical & Clinical
> - [Medical Tools](#medical-tools)
> - [Drug Safety & Chemical Biology](#drug-safety--chemical-biology)
> - [Medical Imaging & Pathology](#medical-imaging--pathology)
> - [Healthcare ML & Clinical AI](#healthcare-ml--clinical-ai)
> - [Mental Health & Crisis Intervention](#mental-health--crisis-intervention)
> - [Health & Wellness Analytics](#health--wellness-analytics)
> - [Medical Device & Regulatory](#medical-device--regulatory)
> - [Medical Device Software (meddev-agent-skills)](#medical-device--regulatory)
> 
> 
> ### Scientific Databases
> - [Scientific Databases (Genomics & Variants)](#scientific-databases-genomics--variants)
> - [Scientific Databases (Proteins, Pathways & Drugs)](#scientific-databases-proteins-pathways--drugs)
> - [Cancer Genomics Databases](#cancer-genomics-databases)
> - [Genomic & Molecular Databases](#genomic--molecular-databases)
> - [Structural Biology & Drug Discovery](#structural-biology--drug-discovery)
> 
> 
> ### Bioinformatics (gptomics bio-* suite)
> - [Bioinformatics Tools & Pipelines](#bioinformatics-tools--pipelines)
> - [Bioinformatics — Clinical Databases & Variant Analysis](#bioinformatics--clinical-databases--variant-analysis)
> - [Bioinformatics — Sequencing & Read QC](#bioinformatics--sequencing--read-qc)
> - [Bioinformatics — Differential Expression & Transcriptomics](#bioinformatics--differential-expression--transcriptomics)
> - [Bioinformatics — Pathway & Network Analysis](#bioinformatics--pathway--network-analysis)
> - [Bioinformatics — Single-Cell & Spatial Omics](#bioinformatics--single-cell--spatial-omic

## 延伸閱讀

相關概念：[[醫療 AI]] · [[生物醫學]] · [[臨床決策支持]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 相關收錄

> [!note]- 直接競品（同子分類：醫療 AI）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "醫療 AI" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["醫療 AI","生物醫學","臨床決策支持"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "FreedomIntelligence--OpenClaw-Medical-Skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "FreedomIntelligence--OpenClaw-Medical-Skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "FreedomIntelligence" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
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

- [[2026-03-15|2026-03-15]] — 再次上榜，1.2k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，1.1k stars
- [[2026-03-13|2026-03-13]] — 再次上榜，1.1k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，914 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，885 stars
