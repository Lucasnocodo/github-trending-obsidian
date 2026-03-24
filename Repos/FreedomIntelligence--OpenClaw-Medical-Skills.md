---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 1561
stars_per_day: 104
forks: 204
open_issues: 0
created: 2026-03-08
pushed_at: 2026-03-21
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "醫療AI"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供869個醫療AI技能，讓OpenClaw成為強大的醫學和科學研究助手。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 79331
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:950,2026-03-11:953,2026-03-13:1077,2026-03-13:1078,2026-03-14:1125,2026-03-14:1125,2026-03-15:1165,2026-03-15:1165,2026-03-16:1208,2026-03-17:1285,2026-03-18:1340,2026-03-19:1394,2026-03-20:1439,2026-03-21:1469,2026-03-22:1503,2026-03-23:1523,2026-03-24:1561"
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
  - "提供869個醫療AI技能，讓OpenClaw成為強大的醫學和科學研究助手。"
---

# OpenClaw-Medical-Skills

**1.6k** stars · **104** stars/天 · 建立 15 天前 · Python · 未標註授權

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
> 提供869個醫療AI技能，讓OpenClaw成為強大的醫學和科學研究助手。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (104 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在醫療和科學研究中使用AI技能的開發者和研究人員。
> **一句話重點** 這個專案不僅提供技能，還整合了大量醫療和科學數據，讓AI能夠進行專業的醫學研究。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "醫療AI" && p.file.name !== "FreedomIntelligence--OpenClaw-Medical-Skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 醫療AI 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花5小時學習，3小時整合，能獲得強大的醫療AI技能，值得投資。

> [!abstract] 核心創新
> 這個專案是最大的開源醫療AI技能庫，提供869個技能，涵蓋廣泛的醫療和科學領域。

## 專案簡介

OpenClaw Medical Skills是一個包含869個醫療AI技能的開源庫，專為OpenClaw和NanoClaw設計。用戶可以通過簡單的指令將這些技能安裝到自己的工作區或全局環境中，例如使用`cp -r skills/* ~/.openclaw/skills/`指令。這些技能涵蓋了臨床報告、基因組學、藥物發現等領域，並能連接到真實的數據庫和API，提供結構化的臨床或科學相關輸出。這樣的設計使得一般的AI代理能夠擁有專業的醫學和科學研究能力，類似於一個專業研究團隊。技術上，這個庫的技能模組化設計使得每個技能都能獨立運作，並且可以輕鬆地進行更新和擴展。

與其他醫療AI工具相比，如AlpinDale/parsync和MiniMax-AI/skills，OpenClaw的優勢在於其龐大的技能庫和開源社群的支持，這使得用戶能夠快速獲取最新的醫療知識和工具。對於需要進行醫學研究或臨床應用的開發者來說，這個庫提供了豐富的資源，能夠顯著提高工作效率。使用者在安裝和使用過程中幾乎不需要重啟代理，這樣的設計提升了用戶體驗。整體來說，這是一個針對醫療和科學領域的強大工具，適合需要快速獲取醫療知識的研究者和開發者。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869個醫療AI技能 — 涵蓋臨床、基因組學、藥物發現等多個領域。
- 模組化設計 — 每個技能都是獨立的模組，易於安裝和更新。
- 支持多種安裝方式 — 包括全局安裝和工作區安裝，靈活性高。
- 連接真實數據庫 — 直接從PubMed、FDA等獲取數據，提供即時查詢。
- 開源社群支持 — 依賴於活躍的開源社群，持續更新和維護。

## 快速開始

1. 克隆庫並安裝技能
```bash
git clone --depth=1 --no-checkout https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills.git
```
2. 進入資料夾並設置稀疏檢出
```bash
cd OpenClaw-Medical-Skills && git sparse-checkout init --cone && git sparse-checkout set skills && git checkout main
```
3. 將技能複製到全局目錄
```bash
cp -r skills/* ~/.openclaw/skills/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立15天內累積1561 stars（104/天），forks 204（13.1%），顯示出強烈的社群興趣。主要貢獻者包括WangRongsheng等，這些貢獻者在開源社群中有良好的聲譽。這個專案解決了醫療AI技能不足的問題，之前開發者需要手動整合多個資源，而這個庫提供了一個集中化的解決方案。社群的活躍度和高解決率（100%）也顯示出其穩定性和可靠性。

## 適合誰使用

**目標受眾**：需要在醫療和科學研究中使用AI技能的開發者和研究人員。

> [!example] 使用場景
> - 醫療研究人員用它來快速查詢臨床試驗數據，因為它能直接連接到ClinicalTrials.gov，提供即時的數據查詢。
> - 生物資訊學家用它來執行RNA-seq分析，因為它提供了完整的變異分析和質量控制工具，節省了大量的開發時間。
> - 藥物開發者用它來獲取藥物相互作用資訊，因為它整合了ChEMBL和DrugBank數據庫，能夠快速獲得準確的藥物資訊。

## 架構分析

OpenClaw Medical Skills的架構基於模組化設計，每個技能都是獨立的模組，這樣的設計使得用戶可以根據需求選擇安裝特定技能。技能可以從多個來源加載，包括本地和全局目錄，這提供了靈活性。資料流方面，技能通過API連接到真實的數據庫，並能夠生成結構化的輸出。

這樣的設計使得用戶能夠快速獲取所需的醫療資訊，並且能夠隨時更新技能。選擇這種模組化架構的代價是需要用戶對技能的管理有一定的了解，否則可能會導致技能重複或衝突。整體而言，這種設計提升了擴展性，能夠應對未來可能增加的技能需求。

## 技術深入分析

OpenClaw Medical Skills的核心技術機制在於其模組化的技能設計，每個技能都是一個獨立的模組，能夠連接到各種數據庫和API。這樣的設計使得用戶可以根據自己的需求選擇安裝特定的技能，並且能夠隨時更新。效能方面，這個庫能夠處理大量的醫療數據，並且支持多種查詢方式，能夠快速返回結果。選擇Python作為主要開發語言，因為其在數據科學和機器學習領域的廣泛應用，這使得開發者能夠輕鬆整合各種數據處理和分析工具。依賴樹方面，這個專案的依賴相對輕量，主要依賴於Python的標準庫和一些常用的數據處理庫。技術風險方面，隨著技能數量的增加，可能會出現技能之間的衝突，這需要用戶有一定的管理能力。整合方面，這個庫能夠與主流的AI框架如OpenAI和HuggingFace進行整合，並且支持CI/CD流程的自動化，這使得它在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README文件提供了清晰的安裝步驟和使用說明，對新手非常友好。安裝過程相對順暢，但對於不熟悉命令行的用戶來說，可能需要一些學習時間。整體來說，花30分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 龐大的技能庫，涵蓋多個醫療和科學領域。
> - 模組化設計，易於安裝和更新。
> - 開源社群支持，持續更新和維護。

> [!danger] 缺點
> - 需要安裝OpenClaw或NanoClaw，增加了安裝複雜度。
> - 某些技能可能需要額外的數據下載，增加了使用成本。
> - 對不熟悉命令行的用戶來說，安裝過程可能有挑戰。

> [!warning] 注意事項
> - 需要安裝OpenClaw或NanoClaw才能運行。
> - 某些技能可能包含大型數據文件，需使用Git LFS下載。
> - 對於不熟悉命令行的用戶，安裝過程可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync專注於數據同步，而OpenClaw則提供醫療AI技能的全面解決方案，功能範圍更廣。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | MiniMax-AI/skills提供的技能數量較少，無法與OpenClaw的869個技能相比。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync專注於數據同步，而OpenClaw則提供醫療AI技能的全面解決方案。 | 如果你的需求主要是數據同步而非醫療AI技能，則選擇AlpinDale/parsync會更合適。 | low，因為兩者的使用場景不同，遷移成本低。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | MiniMax-AI/skills提供的技能數量較少，無法與OpenClaw的869個技能相比。 | 如果你的需求相對簡單，且不需要龐大的技能庫，則可以選擇MiniMax-AI/skills。 | medium，因為需要重新評估技能的適用性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenClaw-Medical-Skills** | **parsync** | **skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | AlpinDale/parsync專注於數據同步，而OpenClaw則提供醫療AI技能的全面解決方案。 | MiniMax-AI/skills提供的技能數量較少，無法與OpenClaw的869個技能相比。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，遷移成本低。 | medium，因為需要重新評估技能的適用性。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步而非醫療AI技能，則選擇Alpin | 如果你的需求相對簡單，且不需要龐大的技能庫，則可以選擇Min |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合進行醫療AI研究的開發者試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些技能在安裝時需要額外的數據下載，可能導致安裝失敗
  - 解法：確保安裝Git LFS以避免問題
- [MEDIUM] 技能之間可能會有衝突，導致功能無法正常運作
  - 解法：定期檢查和更新技能以避免衝突
- [MEDIUM] 對於不熟悉命令行的用戶，安裝過程可能會感到困難
  - 解法：建議參考官方文檔和社群支持

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10人以下的新創公司進行醫療AI研究 | 非常適合 | 提供豐富的醫療AI技能，能快速提升研究效率。 |
| 大型醫療機構需要整合多種醫療數據 | 適合 | 擁有龐大的技能庫，能應對多樣化的需求。 |
| 個人開發者進行簡單的醫療查詢 | 普通 | 雖然功能強大，但安裝過程可能對新手有挑戰。 |
| 不需要醫療AI技能的開發者 | 不適合 | 該工具專注於醫療領域，對其他領域支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花5小時學習，3小時整合，能獲得強大的醫療AI技能，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不存取敏感資料。依賴的庫和工具都是開源的，信任度高。

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
| Forks | 204 |
| Open Issues | 0 |
| Issue 解決率 | 100% (4 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 77.5 MB |
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
> | [@WangRongsheng](https://github.com/WangRongsheng) | 16 |
> | [@donglihe-hub](https://github.com/donglihe-hub) | 9 |
> | [@haoyu-haoyu](https://github.com/haoyu-haoyu) | 2 |
> | [@wabyking](https://github.com/wabyking) | 2 |
> | [@frankchenfu](https://github.com/frankchenfu) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，解決率100%。
**連結**：[文件](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-11 ~ 2026-03-21）
> **活躍天數** 5 天 · **最新 commit** Merge pull request #13 from frankchenfu/patch-1

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
> #### Method 2 — ClawHub CLI
> 
> If you use the [ClawHub registry](https://clawhub.com), you can search and install individual skills from there. For bulk install from this collection, Method 1 is faster.
> 
> ```bash
> npm install -g clawhub
> clawhub install     # install a single skill
> clawhub update --all            # update all installed skills
> ```
> 
> #### Method 3 — Configure Extra Directories
> 
> To point OpenClaw at a cloned copy of this repo permanently, add it to `~/.openclaw/openclaw.json`:
> 
> ```json
> {
>   "skills": {
>     "load": {
>       "extraDirs": ["/path/to/OpenClaw-Medical-Skills/skills"]
>     }
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
> - [Bioinformatics — Single-Cell & Spatial Omics](#bioinformatic

## 延伸閱讀

相關概念：[[生物資訊學]] · [[醫療AI]] · [[數據庫查詢]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 相關收錄

> [!note]- 直接競品（同子分類：醫療AI）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "醫療AI" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
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
> const concepts = ["生物資訊學","醫療AI","數據庫查詢"];
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
