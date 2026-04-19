---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 2099
stars_per_day: 51
forks: 296
open_issues: 6
created: 2026-03-08
pushed_at: 2026-03-27
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "醫療技能庫"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供開源醫療 AI 技能庫，讓開發者能快速整合醫療相關功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 77628
readme_length: 9977
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:950,2026-03-11:953,2026-03-13:1077,2026-03-13:1078,2026-03-14:1125,2026-03-14:1125,2026-03-15:1165,2026-03-15:1165,2026-03-16:1208,2026-03-17:1285,2026-03-18:1340,2026-03-19:1394,2026-03-20:1439,2026-03-21:1469,2026-03-22:1503,2026-03-23:1523,2026-03-24:1561,2026-03-25:1607,2026-03-26:1640,2026-03-27:1670,2026-03-28:1704,2026-03-29:1731,2026-03-30:1747,2026-03-31:1773,2026-04-01:1801,2026-04-02:1829,2026-04-03:1845,2026-04-04:1868,2026-04-05:1881,2026-04-06:1889,2026-04-07:1896,2026-04-08:1910,2026-04-09:1938,2026-04-10:1961,2026-04-11:1986,2026-04-12:1999,2026-04-13:2012,2026-04-14:2034,2026-04-15:2052,2026-04-16:2068,2026-04-17:2084,2026-04-18:2092,2026-04-19:2099"
tags:
  - github
  - "category/開發工具"
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
  - "提供開源醫療 AI 技能庫，讓開發者能快速整合醫療相關功能。"
---

# OpenClaw-Medical-Skills

**2.1k** stars · **51** stars/天 · 建立 41 天前 · Python · 未標註授權

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
> 提供開源醫療 AI 技能庫，讓開發者能快速整合醫療相關功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (51 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 22 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要整合醫療 AI 功能的開發者，特別是在臨床和生物信息學領域的研究人員。
> **一句話重點** 這個專案不僅提供了技能，更是醫療 AI 應用開發的基石，能夠大幅提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "醫療技能庫" && p.file.name !== "FreedomIntelligence--OpenClaw-Medical-Skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 醫療技能庫 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，能快速獲得醫療 AI 技能，值得投資。

> [!abstract] 核心創新
> 提供了最大的開源醫療 AI 技能庫，涵蓋多個醫療領域的技能。

## 專案簡介

OpenClaw Medical Skills 是一個龐大的開源醫療 AI 技能庫，擁有 869 種經過策劃的技能，涵蓋臨床、基因組學、藥物發現等領域。用戶可以透過簡單的指令將技能安裝到本地或全域環境，例如使用 `cp -r skills/* ~/.openclaw/skills/` 來安裝所有技能，或是透過 OpenClaw CLI 進行單一技能的安裝。這些技能會在下次會話自動載入，無需重啟。設計上，這個庫的目的是為了讓開發者能夠快速集成醫療相關的 AI 功能，並且支持大規模的數據集成，這在傳統的醫療應用開發中是非常困難的。使用者可以根據需求選擇安裝特定的技能，這樣可以避免不必要的數據下載，特別是當某些技能包含大型數據文件時。這個工具的賣點在於其靈活性和擴展性，能夠滿足不同醫療領域的需求。

技術上，這個專案使用 Python 和多種其他語言，並且依賴 Git LFS 來處理大型文件，這使得它在安裝和使用上相對簡便，且不會因為數據量過大而影響性能。與其他醫療 AI 工具相比，如 0xGF/boneyard 和 GAIR-NLP/daVinci-MagiHuman，OpenClaw 提供了更為廣泛的技能覆蓋範圍，特別是在生物信息學和臨床數據處理方面。這使得它在需要快速開發和部署醫療應用的場景中，特別適合中小型團隊使用。儘管如此，使用者仍需注意 Git LFS 的配置問題，這可能會影響到某些技能的安裝過程。整體來看，這個專案在醫療 AI 領域提供了一個強大的工具，值得開發者投入時間學習和使用。

**技術棧**：`Python` · `Jupyter Notebook` · `TeX` · `Shell` · `R` · `HTML` · `JavaScript` · `CSS` · `Gherkin` · `TypeScript` · `Makefile` · `Common Workflow Language` · `WDL` · `Nextflow` · `Batchfile` · `Dockerfile`

## 重點功能

- 869 種策劃技能 — 涵蓋臨床、基因組學、藥物發現等多個領域。
- 支持 Git LFS — 方便管理大型數據文件，避免不必要的下載。
- 靈活的安裝選項 — 可選擇全域安裝或特定技能安裝，滿足不同需求。
- 自動載入技能 — 安裝後無需重啟，提升使用便利性。
- 多語言支持 — 包含 Python、R、JavaScript 等多種語言，適合不同開發環境。

## 快速開始

1. 安裝所有技能到全域環境
```bash
cp -r skills/* ~/.openclaw/skills/
```
2. 使用 OpenClaw CLI 安裝單一技能
```bash
openclaw plugins install
```
3. 配置本地技能目錄
```bash
echo '{ "plugins": { "local": ["/path/to/OpenClaw-Medical-Skills"] } }' > ~/.openclaw/openclaw.json
```

## 程式碼範例

```python
{
  "前置條件": "必須安裝 Git LFS 以處理大型數據文件。",
  "指令": "git clone https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git",
  "預期輸出": "克隆整個 OpenClaw-Medical-Skills 倉庫，包括所有技能和數據。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 41 天就累積 2099 stars（51/天），forks 296（14.1%），這顯示出相對穩定的增長。主要貢獻者 WangRongsheng 及其團隊在開源社群中有一定的影響力，之前也有類似的開源專案經驗。這個專案解決了醫療領域中技能整合的痛點，特別是在需要大量數據和複雜處理的情況下，傳統方法往往無法快速適應。近期的社群討論和需求也促使了這個專案的快速發展，尤其是對於長期技能生命週期管理的需求。這樣的需求在醫療領域中越來越受到重視，因為醫療技術的快速變化需要靈活的技能管理方案。forks/stars 比率為 14.1%，顯示出不少開發者對此專案有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：需要整合醫療 AI 功能的開發者，特別是在臨床和生物信息學領域的研究人員。

> [!example] 使用場景
> - 醫療開發者用它來快速整合臨床報告生成技能，因為這樣可以節省 30% 的開發時間，避免重複開發。
> - 生物信息學研究人員用它來分析基因組數據，因為提供的技能能夠自動化數據處理流程，提升效率。
> - 藥物研發團隊用它來建立藥物相互作用檢查工具，因為這樣可以快速獲得最新的研究數據，減少錯誤風險。

## 架構分析

OpenClaw Medical Skills 採用模組化架構，讓用戶可以根據需求選擇安裝特定的技能。這種設計使得技能的管理和更新變得更加靈活，特別是在醫療領域，需求變化快速。資料流方面，技能的安裝和使用都是通過 CLI 進行，這樣的設計可以減少 GUI 的複雜性，並且更適合開發者的工作流程。

選擇使用 Git LFS 來管理大型數據文件，這樣可以避免在初次安裝時下載過多不必要的數據，提升了安裝速度和用戶體驗。這種設計的代價是需要用戶額外配置 Git LFS，對於不熟悉的用戶來說可能會造成一些困擾。整體而言，這個架構設計在靈活性和使用便利性之間取得了良好的平衡，適合快速變化的醫療技術環境。

## 技術深入分析

OpenClaw Medical Skills 的核心技術機制是其模組化的技能庫設計，這使得用戶能夠根據需求靈活選擇和安裝技能。這些技能涵蓋了從臨床報告生成到生物信息學分析等多個領域，並且使用 Python 和其他多種語言實現，這樣的選擇使得它能夠在多種開發環境中運行。效能上，這個專案能夠處理大規模的醫療數據，並且通過 Git LFS 管理大型數據文件，這樣的設計能有效減少安裝和使用過程中的延遲。設計取捨方面，選擇使用 CLI 而非 GUI 使得開發者能夠更快速地進行操作，但對於不熟悉 CLI 的用戶來說，可能會造成一定的使用障礙。技術風險方面，隨著技能數量的增加，維護和更新的負擔可能會加重，特別是在快速變化的醫療技術環境中。整合方面，這個專案能夠輕鬆與現有的開發工具鏈結合，並且支持多種 CI/CD 流程，這使得它在團隊協作中表現出色。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，對於新手來說相對友好。安裝過程中需要配置 Git LFS，這對於不熟悉的用戶可能會造成困擾。整體來說，文件的多語言支持和詳細的指引使得新手能在 30 分鐘內完成安裝並運行起來。

## 優缺點分析

> [!success] 優點
> - 技能範圍廣泛，涵蓋多個醫療領域，能滿足不同需求。
> - 靈活的安裝選項，使用者可以選擇安裝所有技能或特定技能。
> - 支持 Git LFS，能有效管理大型數據文件，減少安裝時間。

> [!danger] 缺點
> - 需要額外安裝 Git LFS，對新手來說可能有學習曲線。
> - 某些技能可能需要特定的環境配置，增加使用門檻。
> - 社群活躍度相對較低，問題解決速度可能較慢。

> [!warning] 注意事項
> - 需要安裝 Git LFS 以處理大型數據文件。
> - 某些技能的使用可能需要特定的環境配置。
> - 對於不熟悉 CLI 的用戶，安裝過程可能略顯複雜。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一些醫療相關的技能，但技能數量和範圍不如 OpenClaw 廣泛，特別是在生物信息學方面。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 專注於自然語言處理的醫療應用，但缺乏 OpenClaw 提供的多樣技能和數據整合能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用 Python 實作，但技能數量和範圍不如 OpenClaw 廣泛，特別是在生物信息學方面。 | 如果你的需求較為簡單，且不需要大量的醫療技能，0xGF/boneyard 可能更適合。 | low，因為兩者都是基於 Python，轉換相對簡單。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 專注於自然語言處理的醫療應用，但缺乏 OpenClaw 提供的多樣技能和數據整合能力。 | 如果你的專案主要集中在 NLP 應用，GAIR-NLP/daVinci-MagiHuman 會是更好的選擇。 | medium，因為需要調整技能的整合方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenClaw-Medical-Skills** | **boneyard** | **daVinci-MagiHuman** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，但技能數量和範圍不如 OpenClaw 廣泛，特別是在生物信息學方面。 | 專注於自然語言處理的醫療應用，但缺乏 OpenClaw 提供的多樣技能和數據整合能力。 |
> | 遷移成本 | - | low，因為兩者都是基於 Python，轉換相對簡單。 | medium，因為需要調整技能的整合方式。 |
> | 適用場景 | 主要場景 | 如果你的需求較為簡單，且不需要大量的醫療技能，0xGF/bo | 如果你的專案主要集中在 NLP 應用，GAIR-NLP/da |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於研究和開發階段，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能因為 Git LFS 配置不當導致技能無法正確安裝
  - 解法：確保 Git LFS 正確安裝並配置
- [MEDIUM] 某些技能在特定環境下可能無法正常運行
  - 解法：檢查技能的依賴和環境要求
- [MEDIUM] 社群回應速度較慢，可能導致問題解決延遲
  - 解法：參考 GitHub 上的 Issues 和討論

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 中小型醫療開發團隊 | 非常適合 | 提供了多樣的技能選擇，能快速滿足開發需求。 |
| 大型醫療機構的核心系統開發 | 不適合 | 可能需要更穩定的解決方案，OpenClaw 仍在 beta 階段。 |
| 學術研究機構進行醫療 AI 相關研究 | 適合 | 技能的多樣性和開源特性能支持各種研究需求。 |
| 個人開發者進行醫療應用開發 | 非常適合 | 能夠快速整合多種技能，提升開發效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能快速獲得醫療 AI 技能，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要安裝 Git LFS，可能需要高權限操作；不存取敏感資料，但依賴的外部數據庫需謹慎評估安全性。

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
| Forks | 296 |
| Open Issues | 6 |
| Issue 解決率 | 50% (6 closed) |
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

**社群活躍度**：社群活躍度中等，近期有持續的更新和問題回應。
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

相關概念：[[醫療 AI]] · [[生物醫學]] · [[技能管理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]]

[GitHub](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 相關收錄

> [!note]- 直接競品（同子分類：醫療技能庫）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "醫療技能庫" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
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
> const concepts = ["醫療 AI","生物醫學","技能管理"];
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
