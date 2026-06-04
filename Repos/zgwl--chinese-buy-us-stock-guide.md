---
repo: zgwl/chinese-buy-us-stock-guide
url: https://github.com/zgwl/chinese-buy-us-stock-guide
owner: zgwl
owner_type: User
language: N/A
license: N/A
description: "美股指南"
homepage: ""
stars: 1068
stars_per_day: 267
forks: 168
open_issues: 3
created: 2026-05-30
pushed_at: 2026-05-31
first_seen: 2026-06-04
week: "2026-W23"
month: "2026-06"
category: "其他"
subcategory: "投資指南"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-04
use_case: "提供中國投資者全面的美股投資指南，涵蓋開戶、稅務和合規等重要步驟。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-07"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 400
readme_length: 1013
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-04"
star_history: "2026-06-04:1068"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "chinese-buy-us-stock-guide"
  - "zgwl/chinese-buy-us-stock-guide"
  - "提供中國投資者全面的美股投資指南，涵蓋開戶、稅務和合規等重要步驟。"
---

# chinese-buy-us-stock-guide

**1.1k** stars · **267** stars/天 · 建立 4 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
> 提供中國投資者全面的美股投資指南，涵蓋開戶、稅務和合規等重要步驟。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (267 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在美股市場投資但缺乏相關知識的中國大陸投資者。
> **一句話重點** 這份指南不僅提供了實用的投資知識，還強調了合規的重要性，對於中國投資者來說是不可或缺的資源。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "投資指南" && p.file.name !== "zgwl--chinese-buy-us-stock-guide" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 投資指南 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，得到全面的美股投資知識，值得一試。

> [!abstract] 核心創新
> 這份指南專為中國大陸投資者設計，填補了美股投資資訊的空白。

## 專案簡介

這個專案是專為中國大陸投資者設計的美股投資指南，從開戶、稅務到合規等各個方面進行詳細說明。使用者可以透過指導文檔了解如何開設銀行和券商帳戶，並掌握相關的稅務知識和合規要求。具體來說，使用者可以從第一篇章節開始，了解開戶的基本要求，然後逐步深入到稅務和合規的複雜性，最終學會如何安全地進行資金的進出。這種循序漸進的方式有助於降低新手的學習曲線，讓他們在進行投資前能夠充分理解風險。整個指南強調了合規的重要性，尤其是在美國的稅務環境下，並提供了實用的建議，如如何獲取美國稅號（ITIN）以擴大可開設的帳戶範圍。

這個專案的賣點在於其針對性和全面性，能夠幫助中國投資者在複雜的美股市場中找到合適的投資路徑。相較於其他類似的指南，這個專案提供了更詳細的合規風險評估，讓使用者在選擇投資路徑時能夠更具信心。使用者在實際操作中可能會遇到的問題包括如何選擇合適的券商和銀行，以及如何處理出金的合規風險等，這些都在指南中有清晰的解釋。對於希望進一步了解美股市場的中國投資者來說，這個指南無疑是一個重要的資源。未來，隨著美股市場的變化，這個專案可能會持續更新，以反映最新的政策和市場動態。

## 重點功能

- 全面的開戶指導 — 包括銀行和券商帳戶的開設步驟，幫助使用者快速上手。
- 詳細的稅務解釋 — 涵蓋 CRS 和 FATCA 機制，讓使用者了解稅務風險。
- 合規風險評估 — 根據風險接受度提供不同的投資路徑選擇。
- 券商選擇指南 — 分析不同券商的優缺點，幫助使用者做出明智選擇。
- 加密入金方案 — 提供加密貨幣入金的進階玩法，適合有特定需求的投資者。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/zgwl/chinese-buy-us-stock-guide.git
```
2. 查看開戶指南
```bash
open 美股指南（一）开户.md
```
3. 了解稅務要求
```bash
open 美股指南（二）税务.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1068 stars（267/天），forks 168（15.7%），顯示出強烈的需求。作者 xingchen 專注於中國投資者的需求，填補了市場上對美股投資資訊的空白。這個專案的出現正好解決了許多中國投資者在進入美股市場時面臨的合規和稅務問題，提供了清晰的指導。社群的反應熱烈，顯示出這個主題的關注度。這些因素共同促成了這個專案的快速成長。

## 適合誰使用

**目標受眾**：希望在美股市場投資但缺乏相關知識的中國大陸投資者。

> [!example] 使用場景
> - 新手投資者用它來了解美股開戶流程，因為這份指南提供了詳細的步驟和注意事項，降低了進入門檻。
> - 有經驗的投資者用它來確認合規要求，因為指南中對稅務和合規的深入分析能幫助他們避免法律風險。
> - 希望使用加密貨幣進行入金的投資者用它來學習進階技巧，因為指南中提供了小眾但有效的加密入金方案。

## 架構分析

這個專案的架構是以文檔為主，通過多篇章節來系統性地介紹美股投資的各個方面。每個章節都針對特定主題進行深入探討，這樣的設計使得使用者可以根據自己的需求選擇閱讀的內容。資料流從開戶到稅務，再到合規，形成了一個完整的學習路徑。

這種結構化的方式有助於使用者逐步建立對美股市場的理解。選擇文檔作為主要形式的代價在於，使用者需要主動尋找和閱讀相關內容，對於不習慣自學的人來說，可能會有一定的挑戰。整體上，這個專案的擴展性良好，未來可以根據市場變化持續更新內容。

## 技術深入分析

這個專案的核心技術機制是通過文檔形式系統性地介紹美股投資的各個方面，特別針對中國投資者的需求進行設計。每個章節都涵蓋了特定的主題，如開戶、稅務和合規，這樣的結構使得使用者能夠逐步理解複雜的投資流程。雖然目前沒有具體的效能數據，但這種文檔形式的優勢在於其靈活性和可擴展性，未來可以根據市場變化進行更新。選擇文檔作為主要形式的代價在於，使用者需要主動尋找和閱讀相關內容，對於不習慣自學的人來說，可能會有一定的挑戰。這個專案的設計取捨在於平衡資訊的全面性和可讀性，雖然內容豐富，但對於新手來說仍然可能有一定的難度。整體上，這個專案的擴展性良好，未來可以根據市場變化持續更新內容，並且隨著社群的發展，可能會增加更多的互動性和實用性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構良好，提供了詳細的章節指引。安裝過程簡單，只需克隆專案即可開始使用。雖然沒有專門的入門指南，但章節安排合理，能夠幫助新手逐步上手。文件目前僅提供中文，對於非中文使用者可能不太友好。

## 優缺點分析

> [!success] 優點
> - 針對中國投資者的需求，提供了專業的美股投資指導。
> - 內容結構清晰，易於理解和操作。
> - 涵蓋了合規和稅務等重要主題，幫助使用者降低風險。

> [!danger] 缺點
> - 資訊可能隨政策變化而過時，需自行核實。
> - 不提供具體的投資建議，僅為科普性質。
> - 部分章節可能對於新手來說仍然有一定的難度。

> [!warning] 注意事項
> - 不提供具體的投資建議，僅為科普性質。
> - 部分資訊可能隨政策變化而過時，使用者需自行核實。
> - 不涵蓋所有券商的詳細資料，僅提供部分推薦。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人學習和了解美股市場，但不建議用於實際投資決策。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分資訊可能隨政策變化而過時，使用者需自行核實
  - 解法：定期查閱官方資訊或相關網站以獲取最新政策
- [MEDIUM] 不提供具體的投資建議，僅為科普性質，可能導致誤解
  - 解法：使用者需自行判斷投資風險，並尋求專業建議
- [MEDIUM] 對於新手來說，部分章節仍然有一定的難度
  - 解法：建議新手從簡單的章節開始，逐步深入

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 剛入行的投資者希望了解美股市場 | 非常適合 | 提供了全面的入門指導，適合新手學習。 |
| 已經有一定投資經驗的使用者想要了解合規問題 | 適合 | 涵蓋了合規和稅務等重要主題，能幫助使用者降低風險。 |
| 希望使用加密貨幣進行入金的投資者 | 普通 | 提供了加密入金的進階玩法，但理解門檻較高。 |
| 希望快速找到具體的投資建議的使用者 | 不適合 | 不提供具體的投資建議，僅為科普性質。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到全面的美股投資知識，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該指南不需要高權限，僅提供資訊，無需存取敏感資料。使用者在實際操作中需注意合規風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-31 |
| 建立日期 | 2026-05-30 |
| Repo 大小 | 400 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zgwl/chinese-buy-us-stock-guide) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xingchen](https://github.com/xingchen) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新但問題解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31）
> **活躍天數** 1 天 · **最新 commit** docs: 中国人投资美股指南

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/zgwl/chinese-buy-us-stock-guide/issues/3) | 牛逼 | 0 | 0 |
> | [#2](https://github.com/zgwl/chinese-buy-us-stock-guide/issues/2) | 生动形象呀 老铁 | 0 | 0 |
> | [#1](https://github.com/zgwl/chinese-buy-us-stock-guide/issues/1) | 有itin后直接飞美国需要租个地址收卡吗？还是可以当场下卡啊 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 中国人投资美股指南
> 
> 一份写给中国大陆投资者的美股科普，从开户、税务、合规，一直讲到选券商、入金和出金，尽量把每一步的来龙去脉和背后的风险讲清楚。
> 
> *本系列只是个人科普，不构成任何投资、税务或法律建议。这块的政策变得很快，文中不少信息可能已经过时，动手前请自己再核实一遍。*
> 
> *最后校订：2026 年 5 月*
> 
> ## 目录
> 
> | # | 篇章 | 内容简介 |
> |---|------|----------|
> | 一 | [开户](美股指南（一）开户.md) | 总览：银行账户和券商账户分别怎么开 |
> | 二 | [税务](美股指南（二）税务.md) | CRS、FATCA 机制与税务系统的"三层视野" |
> | 三 | [合规](美股指南（三）合规.md) | 按风险接受度分低、中、高三类的投资路径 |
> | 四 | [美国券商](美股指南（四）美国券商.md) | 券商怎么分层、受谁监管、怎么挑 |
> | 五 | [银行入金](美股指南（五）银行入金.md) | 港、美银行远程开户与汇款入金 |
> | 六 | [加密入金](美股指南（六）加密入金.md) | 加密货币入金的进阶玩法（小众） |
> | 七 | [出金](美股指南（七）出金.md) | 终身持有、消费、汇回、加密等出金路径 |
> | 八 | [美国税号](美股指南（八）美国税号.md) | ITIN 怎么申请、办下来后能多开哪些户 |
> | 九 | [总结](美股指南（九）总结.md) | 三条路线的取舍与给普通人的最终建议 |
> 
> ## 阅读建议
> 
> 九篇大致按"先搞懂规则、再把钱投进去、最后安全取回来"的顺序展开，也可以挑着看：
> 
> - 新手建议先看完 **二（税务）** 和 **三（合规）**。搞清楚国家怎么征税、自己能接受多大风险，比急着开户重要得多。
> - 想动手开户，看 **一（开户）**、**四（美国券商）** 和 **五（银行入金）**，传统的"银行转券商"这条路就走通了。
> - 嫌能开的户太少，可以读 **八（美国税号）**。有些银行和券商本来就对中国人开放，办下 ITIN 之后能开的更多。
> - 传统渠道走不通，再考虑 **六（加密入金）**。这是进阶方案，理解门槛和合规风险都偏高，多数人用不上。
> - 准备把钱拿回来，看 **七（出金）**，重点是遗产税和各条出金路径的合规风险。
> - 只想看结论，直接翻 **九（总结）**。

## 延伸閱讀

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/zgwl/chinese-buy-us-stock-guide)

## 相關收錄

> [!note]- 直接競品（同子分類：投資指南）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "投資指南" AND file.name != "zgwl--chinese-buy-us-stock-guide"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "zgwl--chinese-buy-us-stock-guide"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "zgwl--chinese-buy-us-stock-guide" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "zgwl--chinese-buy-us-stock-guide"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zgwl--chinese-buy-us-stock-guide" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zgwl" AND file.name != "zgwl--chinese-buy-us-stock-guide"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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
> const me = dv.page("Repos/zgwl--chinese-buy-us-stock-guide");
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

> **2026-06-04** — 首次收錄
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

- [[2026-06-04|2026-06-04]] — 首次收錄，1.1k stars
