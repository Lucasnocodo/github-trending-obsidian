---
repo: wrongly-cuddly-obsession/NTSB_FOIA_MU5735
url: https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735
owner: wrongly-cuddly-obsession
owner_type: User
language: N/A
license: N/A
description: ""
homepage: ""
stars: 811
stars_per_day: 270
forks: 298
open_issues: 15
created: 2026-04-30
pushed_at: 2026-05-03
first_seen: 2026-05-04
week: "2026-W19"
month: "2026-05"
category: "其他"
subcategory: "資料存檔"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-04
use_case: "提供 MU5735 調查的 FOIA 請求資料，並包含中文翻譯。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-07"
contributor_count: 1
engagement: "high"
issue_close_rate: 17
repo_size_kb: 147868
readme_length: 1476
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-04"
star_history: "2026-05-04:811"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "NTSB_FOIA_MU5735"
  - "wrongly-cuddly-obsession/NTSB_FOIA_MU5735"
  - "提供 MU5735 調查的 FOIA 請求資料，並包含中文翻譯。"
---

# NTSB_FOIA_MU5735

**811** stars · **270** stars/天 · 建立 3 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供 MU5735 調查的 FOIA 請求資料，並包含中文翻譯。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (270 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要查閱 MU5735 飛機事故調查資料的研究者和專業人士。
> **一句話重點** 這個專案提供了 MU5735 調查的資料存檔和翻譯，讓使用者能夠更方便地獲取相關資訊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "資料存檔" && p.file.name !== "wrongly-cuddly-obsession--NTSB_FOIA_MU5735" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 資料存檔 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案提供了 MU5735 調查的資料存檔和翻譯，讓使用者能夠更方便地獲取相關資訊。

## 專案簡介

這個專案是對 MU5735 飛機事故調查的 FOIA 請求資料的存檔，目的是保留原始資料以供後續查閱。使用者可以在此找到與 NTSB 相關的資料，包括非官方的中文翻譯報告。該專案的設計考量是為了保護原始資料提供者的隱私，因為原始資料已被刪除或設為私有。使用者可以直接從 NTSB 網站下載最新的資料，這樣的設計使得資料的獲取更為方便。關鍵的 CLI 指令是訪問資料的鏈接，並且提供了中文翻譯的連結，這對於中文使用者特別有幫助。這個專案的「一句話賣點」是：提供 MU5735 調查的資料存檔和翻譯，讓使用者能夠更方便地獲取相關資訊。

技術上，這個專案並未使用複雜的框架或演算法，主要依賴 GitHub 的版本控制功能來管理資料。相較於其他資料庫，這個專案的獨特之處在於它專注於特定事件的資料存檔，並且提供了中文翻譯，這在同類專案中並不常見。使用者可能會遇到的問題包括資料的更新速度和原始資料的可用性，這些都取決於 NTSB 的發布進度。這個專案目前處於活躍狀態，社群的回應速度也相對較快，特別是在熱門問題上。對於需要查閱 MU5735 事件資料的研究者或關心該事件的人來說，這是一個值得使用的資源。未來幾個月，該專案可能會隨著 NTSB 的更新而持續增長，並且可能會吸引更多的使用者來參與資料的討論和補充。

## 重點功能

- 資料存檔 — 提供 MU5735 調查的 FOIA 請求資料，方便查閱。
- 中文翻譯 — 提供 NTSB 記錄器報告的非官方中文翻譯，方便中文使用者理解。
- 直接下載鏈接 — 提供從 NTSB 網站直接下載資料的鏈接，方便使用者獲取最新資訊。
- 社群互動 — 支持使用者在 Issues 中討論和提問，促進資料的理解和補充。
- 隱私保護 — 重新上傳資料以保護原始資料提供者的隱私。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735.git
```
2. 訪問 NTSB 的資料下載鏈接
```bash
https://securefoia.ntsb.gov/app/AddAttachment.aspx?docid=66&ispaldoc=F
```
3. 查看中文翻譯報告
```bash
https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/blob/main/MU5735_NTSB_Recorder_Report_CN/MU5735_NTSB_Recorder_Report_Chinese.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 811 stars（270/天），forks 298（36.7%），這顯示出極高的使用者關注度。專案的主要貢獻者是 wrongly-cuddly-obsession，這位使用者過去在資料存檔方面有一定的經驗。這個專案解決了資料存取的問題，因為之前的資料已經被刪除，使用者無法獲取。NTSB 的資料發布也促進了這個專案的興起，因為它提供了更方便的資料獲取方式。社群的反應和討論也顯示出使用者對於該事件的關注，特別是在熱門問題中有許多討論。這個專案的 forks/stars 比率高達 36.7%，代表著許多人在實際修改和使用這個專案，顯示出其實用性和需求。

## 適合誰使用

**目標受眾**：需要查閱 MU5735 飛機事故調查資料的研究者和專業人士。

> [!example] 使用場景
> - 研究人員用它來查閱 MU5735 事件的 FOIA 請求資料，因為這些資料提供了事故調查的詳細背景。
> - 航空業專業人士用它來分析事故原因，因為資料的可獲取性有助於行業內的安全改進。
> - 翻譯工作者用它來獲取 NTSB 報告的中文翻譯，因為這樣能夠更好地服務於中文讀者的需求。

## 架構分析

這個專案的架構相對簡單，主要依賴 GitHub 的版本控制系統來管理資料。資料以文件的形式存儲，使用者可以通過訪問鏈接來獲取資料。這樣的設計使得資料的存取變得方便，但也意味著資料的更新和維護需要依賴外部來源。由於專案的主要功能是資料存檔，因此在擴展性方面並沒有特別的考量，未來的更新主要取決於 NTSB 的資料發布情況。

## 技術深入分析

這個專案的核心技術機制是利用 GitHub 的版本控制功能來存儲和管理資料，這使得資料的查閱和更新變得方便。由於專案主要是資料存檔，因此在效能和規模特性方面並不需要考慮複雜的架構或高效能的計算。資料的更新和維護主要依賴於 NTSB 的資料發布，這意味著使用者需要定期檢查資料的可用性。選擇 GitHub 作為資料存儲平台的好處是其社群互動性，使用者可以在 Issues 中討論資料的內容和解釋。

這樣的設計也使得資料的存取變得透明，但也可能帶來資料更新的不穩定性。未來的擴展性主要取決於 NTSB 的資料發布情況，若 NTSB 更新資料頻繁，則專案將持續保持活躍。整合到現有的工具鏈中相對簡單，使用者只需訪問資料鏈接即可獲取所需資訊，並不需要額外的配置或安裝。整體而言，這個專案在資料存取方面提供了便利，但在資料更新的穩定性上可能存在挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，提供了必要的資料鏈接和中文翻譯的連結。安裝過程非常順暢，只需克隆專案或訪問鏈接即可。文件沒有提供多語言版本，但中文翻譯的存在對於中文使用者來說是個加分項。整體上，花 30 分鐘能夠順利獲取所需資料。

## 優缺點分析

> [!success] 優點
> - 提供 MU5735 調查的 FOIA 請求資料，方便查閱。
> - 包含非官方中文翻譯，對於中文使用者特別友好。
> - 社群互動活躍，使用者可以在 Issues 中討論和提問。

> [!danger] 缺點
> - 資料更新依賴於 NTSB 的發布進度，可能會有延遲。
> - 中文翻譯為非官方版本，可能存在翻譯不準確的風險。
> - 直接下載資料可能需要使用美國 IP 地址，對於國際使用者來說可能造成障礙。

> [!warning] 注意事項
> - 資料更新依賴於 NTSB 的發布進度，可能會有延遲。
> - 中文翻譯為非官方版本，可能存在翻譯不準確的風險。
> - 直接下載資料可能需要使用美國 IP 地址，對於國際使用者來說可能造成障礙。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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
| Forks | 298 |
| Open Issues | 15 |
| Issue 解決率 | 17% (3 closed) |
| 最後推送 | 2026-05-03 |
| 建立日期 | 2026-04-30 |
| Repo 大小 | 144.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wrongly-cuddly-obsession](https://github.com/wrongly-cuddly-obsession) | 6 |

## 社群與生態

**社群活躍度**：社群活躍，特別是在熱門問題上有許多討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-30 ~ 2026-05-03）
> **活躍天數** 2 天 · **最新 commit** Add info that NTSB has directly published the data on its website

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/1) | 感谢 | 17 | 0 |
> | [#11](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/11) | 关于一些异常数据的解释与补充 | 13 | 3 |
> | [#8](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/8) | （机组试图挽救飞机故障）机务相关行业内人员的解读讨论 （本人仅转发且未核实） | 5 | 105 |
> | [#2](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/2) | 美国人真是太坏了！！！ | 5 | 7 |
> | [#15](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/15) | 基于此仓库优化并补充了调查报告的翻译 | 4 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NTSB FOIA MU5735
> 
> This repository contains files originally shared by another GitHub user related to FOIA requests on the MU5735 investigation.
> 
> The original repository has since been deleted or made private by its owner. To protect their privacy, the files have been re-uploaded here without preserving the original commit history.
> 
> This repository serves as an archive to maintain access to those materials.
> 
> An unofficial Chinese translation of the NTSB recorder report is available at:
> https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/blob/main/MU5735_NTSB_Recorder_Report_CN/MU5735_NTSB_Recorder_Report_Chinese.md
> 
> NTSB记录器报告的非官方中文译文可在以下链接查看：
> https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/blob/main/MU5735_NTSB_Recorder_Report_CN/MU5735_NTSB_Recorder_Report_Chinese.md
> 
> NTSB has now published data related to MU5735 on its website. You can download it [here](https://securefoia.ntsb.gov/app/AddAttachment.aspx?docid=66&ispaldoc=F). Direct download from the NTSB website may require a U.S. IP address. Thanks to [@SunsetMkt](https://github.com/SunsetMkt) for providing this information via [Issue #14](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/14).
> 
> NTSB已在其网站上发布了与MU5735相关的数据。你可以在[此处](https://securefoia.ntsb.gov/app/AddAttachment.aspx?docid=66&ispaldoc=F)下载。从NTSB网站直接下载可能需要使用美国IP地址。感谢[@SunsetMkt](https://github.com/SunsetMkt)通过[Issue #14](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735/issues/14)提供的信息。

## 延伸閱讀

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[alchaincyf--zhangxuefeng-skill|alchaincyf/zhangxuefeng-skill]]

[GitHub](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735)

## 相關收錄

> [!note]- 直接競品（同子分類：資料存檔）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "資料存檔" AND file.name != "wrongly-cuddly-obsession--NTSB_FOIA_MU5735"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "wrongly-cuddly-obsession--NTSB_FOIA_MU5735"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "wrongly-cuddly-obsession--NTSB_FOIA_MU5735" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "wrongly-cuddly-obsession--NTSB_FOIA_MU5735"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wrongly-cuddly-obsession--NTSB_FOIA_MU5735" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wrongly-cuddly-obsession" AND file.name != "wrongly-cuddly-obsession--NTSB_FOIA_MU5735"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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
> const me = dv.page("Repos/wrongly-cuddly-obsession--NTSB_FOIA_MU5735");
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

> **2026-05-04** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 首次收錄，811 stars
