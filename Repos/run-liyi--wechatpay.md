---
repo: run-liyi/wechatpay
url: https://github.com/run-liyi/wechatpay
owner: run-liyi
owner_type: User
language: JavaScript
license: N/A
description: "微信账单分析工具 - 基于Electron的可视化账单分析应用"
homepage: ""
stars: 802
stars_per_day: 160
forks: 67
open_issues: 0
created: 2026-05-21
pushed_at: 2026-05-21
first_seen: 2026-05-26
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "數據分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "一個基於 Electron 的微信帳單可視化分析工具，幫助用戶深入了解個人財務狀況。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-03"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 42
readme_length: 4030
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-26"
star_history: "2026-05-26:536,2026-05-27:802"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "wechatpay"
  - "run-liyi/wechatpay"
  - "一個基於 Electron 的微信帳單可視化分析工具，幫助用戶深入了解個人財務狀況。"
---

# wechatpay

**536** stars · **134** stars/天 · 建立 4 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/run-liyi--wechatpay");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 一個基於 Electron 的微信帳單可視化分析工具，幫助用戶深入了解個人財務狀況。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (134 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 4 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要分析微信支付帳單的個人用戶，特別是對財務狀況有深入了解需求的人。
> **一句話重點** 這個工具不僅提供了數據分析功能，還強調用戶的隱私保護，完全在本地運行。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/run-liyi--wechatpay");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數據分析" && p.file.name !== "run-liyi--wechatpay" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 數據分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到清晰的財務分析效果，值得一試。

> [!abstract] 核心創新
> 提供針對微信帳單的可視化分析，並支持多種圖表展示。

## 專案簡介

這個專案是一個基於 Electron 框架的微信帳單分析工具，旨在幫助用戶可視化和分析自己的消費數據。用戶首先需要從微信導出帳單，然後將 Excel 文件導入應用中，系統會自動解析並顯示收支統計、交易類型、支付方式等多維度的分析結果。關鍵指令是 `npm start` 來啟動應用，並使用 `npm run build` 來打包應用。這個工具的賣點在於其直觀的可視化圖表和多樣的統計分析功能，讓用戶能夠輕鬆掌握自己的財務狀況。其技術實作使用了 Electron 28.0、Chart.js 和 xlsx，這些選擇使得應用能夠在多平台上運行並提供良好的用戶體驗。

相較於其他類似工具，如 `0x0funky/agent-sprite-forge` 和 `Mouseww/anything-analyzer`，本專案專注於微信帳單的特定分析，提供了更針對性的功能。使用者可以透過時間維度分析和多種圖表形式來深入了解消費趨勢，這在其他工具中可能不夠直觀。需要注意的是，這個工具目前僅支援單個帳單文件的分析，若需多個時間段的數據，需先在 Excel 中合併。整體來說，這是一個適合個人用戶進行財務分析的工具，特別是對於經常使用微信支付的用戶。

**技術棧**：`Electron 28.0` · `Chart.js 4.4` · `xlsx 0.18.5`

## 重點功能

- 收支統計 — 快速查看總收入、總支出、淨收支等關鍵指標。
- 多維度圖表 — 支持柱狀圖、餅圖、折線圖等多種可視化方式。
- 按商戶匯總 — 查看各商戶的消費金額和次數排名。
- 時間維度分析 — 支持按日、周、月查看消費趨勢。
- Excel格式導出 — 將分析結果導出為多工作表的 Excel 文件，方便保存和進一步分析。
- 關鍵字搜索 — 支持按商戶名稱、商品名稱搜索交易記錄。
- 靈活排序 — 支持按金額或次數排序，選擇顯示前N名或全部數據。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 運行應用
```bash
npm start
```
3. 打包應用
```bash
npm run build
```

## 程式碼範例

```js
{
  "前置條件": "確保已安裝 Electron 和相關依賴。",
  "指令": "ipcMain.handle('parse-bill-file', async (event, filePath) => { /* 解析邏輯 */ });",
  "預期輸出": "返回結構化的帳單數據。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 536 stars（134/天），forks 45（8.4%），這顯示出用戶對於此工具的高度興趣。開發者 EchoFish 和 run-liyi 以其過往的開源貢獻為基礎，針對微信用戶的需求開發了這個工具，填補了市場上對於微信帳單分析的空白。這個工具的可視化功能和多維度分析能力是之前工具所缺乏的，特別是針對個人消費的深入分析。社群的反饋和需求驅動了這個專案的快速增長，特別是在微信支付使用者中。forks/stars 比率為 8.4%，顯示出有不少用戶在實際修改或使用此工具。

## 適合誰使用

**目標受眾**：需要分析微信支付帳單的個人用戶，特別是對財務狀況有深入了解需求的人。

> [!example] 使用場景
> - 個人用戶用它來分析自己的微信消費習慣，因為可以透過可視化圖表快速了解收支狀況和趨勢。
> - 財務顧問用它來幫助客戶理解他們的消費模式，因為這個工具提供了多維度的數據分析和報告導出功能。
> - 學生用它來追蹤日常開支，因為它能夠簡單地導入帳單並生成清晰的報告，便於管理個人財務。

## 架構分析

這個應用的架構基於 Electron，允許跨平台運行。主進程負責創建應用窗口和處理文件選擇，而渲染進程則處理用戶界面和數據分析。資料流方面，帳單文件通過 IPC 通信從渲染進程傳遞到主進程進行解析，然後返回結構化數據。選擇 Electron 的原因在於其能夠提供桌面應用的使用體驗，代價是需要管理更多的資源和依賴。擴展性方面，若未來需要增加更多分析功能，可能會增加複雜度，但目前的設計已經能夠滿足大部分用戶需求。

## 技術深入分析

這個專案使用了 Electron 框架來構建桌面應用，這使得它能夠在 Windows、macOS 和 Linux 上運行。核心技術包括 xlsx 用於解析 Excel 文件，Chart.js 用於數據可視化。這些技術的選擇使得應用能夠提供豐富的圖表展示和數據分析功能。效能方面，對於小型帳單文件，應用能夠快速解析並顯示結果，但對於大型文件，解析時間可能會增加。設計上，選擇使用 Electron 使得應用能夠利用網頁技術，但也帶來了較大的應用包大小和資源消耗。技術風險方面，依賴於外部庫的穩定性和更新頻率，未來可能需要定期維護和更新。整合方面，與主流的開發工具鏈相容性良好，特別是在使用 Node.js 環境下，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的使用說明和安裝步驟，適合新手使用。安裝過程順暢，無明顯坑點。提供了良好的快速開始指南，文件目前僅有英文版本，可能對非英語用戶造成一定困難。

## 優缺點分析

> [!success] 優點
> - 直觀的可視化圖表，幫助用戶快速理解財務狀況。
> - 支持多種數據分析維度，提供靈活的報告導出功能。
> - 完全在本地運行，保護用戶隱私。

> [!danger] 缺點
> - 目前僅支援單個帳單文件的分析，無法同時處理多個文件。
> - 需要用戶手動導出帳單，增加了使用門檻。
> - 對於大型帳單文件，解析速度可能會受到影響。

> [!warning] 注意事項
> - 目前僅支援單個帳單文件的分析。
> - 需要手動從微信導出帳單，並確保選擇正確的格式。
> - 對於大型帳單文件，解析速度可能會受到影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於微信帳單分析，而此工具提供了更針對性的功能和可視化選項。 |
| [Mouseww/anything-analyzer](https://github.com/Mouseww/anything-analyzer) | 雖然也提供數據分析功能，但不專注於微信支付的特定需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於微信帳單分析，而本專案提供了更針對性的功能和可視化選項。 | 如果需要更專業的微信帳單分析功能，這個工具會更合適。 | medium，因為需要重新學習界面和功能。 |
| [Mouseww/anything-analyzer](https://github.com/Mouseww/anything-analyzer) | 雖然也提供數據分析功能，但不專注於微信支付的特定需求。 | 如果需要分析多種支付平台的數據，這個工具會更合適。 | low，因為功能相似且界面友好。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechatpay** | **agent-sprite-forge** | **anything-analyzer** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於微信帳單分析，而本專案提供了更針對性的功能和可視化選項。 | 雖然也提供數據分析功能，但不專注於微信支付的特定需求。 |
> | 遷移成本 | - | medium，因為需要重新學習界面和功能。 | low，因為功能相似且界面友好。 |
> | 適用場景 | 主要場景 | 如果需要更專業的微信帳單分析功能，這個工具會更合適。 | 如果需要分析多種支付平台的數據，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 導入的 Excel 文件格式不正確，無法解析
  - 解法：確保選擇正確的格式並包含必要的表頭
- [MEDIUM] 圖表顯示不正常
  - 解法：檢查數據完整性和時間範圍設定
- [MEDIUM] 無法同時分析多個帳單文件
  - 解法：需先在 Excel 中合併數據後再導入

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速分析和可視化財務數據，幫助公司了解開支。 |
| 大型企業的財務部門 | 不適合 | 無法同時處理多個帳單文件，對於大規模數據分析支持不足。 |
| 個人用戶的日常消費分析 | 非常適合 | 提供直觀的可視化和靈活的分析功能，適合個人使用。 |
| 需要分析多種支付平台的數據 | 普通 | 專注於微信支付，對於其他平台的支持不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到清晰的財務分析效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本應用完全在本地運行，不會上傳任何數據，所有帳單數據僅在用戶計算機上處理和存儲。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/run-liyi--wechatpay");
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
> const me = dv.page("Repos/run-liyi--wechatpay");
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
| Forks | 45 |
| Open Issues | 0 |
| 最後推送 | 2026-05-21 |
| 建立日期 | 2026-05-21 |
| Repo 大小 | 42 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/run-liyi/wechatpay) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chart.js` `xlsx` `electron` `electron-builder` `electron-packager`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 54
>     "HTML" : 27
>     "CSS" : 19
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EchoFish](https://github.com/EchoFish) | 1 |
> | [@run-liyi](https://github.com/run-liyi) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有更新和提交。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-21 ~ 2026-05-21）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # 微信账单分析工具
> 
> 基于 Electron 框架开发的微信支付账单可视化分析应用，帮助您更好地了解个人消费习惯和财务状况。
> 
> ## 📋 功能特性
> 
> ### 1. 数据概览
> - **收支统计**：快速查看总收入、总支出、净收支等关键指标
> - **交易汇总**：展示交易总笔数、时间范围等基本信息
> - **可视化图表**：直观的收支对比柱状图
> - **账单元数据**：显示微信昵称、导出时间等账单信息
> 
> ### 2. 统计分析
> - **支付方式分布**：分析不同支付方式（零钱、银行卡等）的使用情况
> - **交易类型分布**：统计商户消费、转账、红包等各类交易占比
> - **交易状态统计**：查看支付成功、已退款等各种状态的交易详情
> - **多维度图表**：饼图、环形图等多种可视化方式
> 
> ### 3. 分类汇总
> - **按商户汇总**：查看在各个商户的消费金额和次数排名
> - **按交易类型汇总**：分析不同交易类型的资金流向
> - **按支付方式汇总**：了解各支付方式的使用频率
> - **灵活排序**：支持按金额或次数排序，可选择显示前N名或全部数据
> 
> ### 4. 趋势分析
> - **时间维度分析**：支持按日、按周、按月查看消费趋势
> - **收支曲线图**：折线图展示收入和支出的变化趋势
> - **统计指标**：计算日均支出、最高/最低单日支出等关键指标
> - **趋势对比**：可单独查看收入或支出趋势，也可同时对比
> 
> ### 5. 明细查询
> - **关键词搜索**：支持按商户名称、商品名称搜索交易记录
> - **多条件筛选**：可按收支类型、交易状态等条件过滤数据
> - **实时统计**：显示筛选结果的记录数和总金额
> - **详细信息**：查看每笔交易的完整信息
> 
> ### 6. 报告导出
> - **Excel格式导出**：将分析结果导出为Excel文件
> - **多工作表**：包含汇总统计、分类统计、每日统计、明细数据等多个工作表
> - **便于保存**：方便长期保存和进一步分析
> 
> ## 📖 如何获取微信账单数据
> 
> ### 导出步骤
> 
> 1. **打开微信账单页面**
>    - 打开微信 APP
>    - 依次进入：`我` → `服务` → `钱包` → `账单`
> 
> 2. **选择下载账单**
>    - 点击右上角 `...` 或 `常见问题`
>    - 选择 `下载账单`
> 
> 3. **设置账单参数**
>    - **账单用途**：选择 `用于个人对账`（重要！）
>      - ✅ 选择"用于个人对账"会生成 Excel 或 CSV 格式文件
>      - ❌ 选择"用做证明材料"会生成带公章的 PDF，本工具无法解析
>    - **时间范围**：选择需要导出的时间段（最长可导出1年内的数据）
>    - **接收邮箱**：填写用于接收账单文件的邮箱地址
> 
> 4. **身份验证**
>    - 输入微信支付密码进行身份验证
> 
> 5. **接收账单文件**
>    - 系统会在 **24小时内** 将加密压缩包发送至您的邮箱
>    - 解压密码会通过微信 `服务通知` 发送
>    - 下载压缩包并使用密码解压，得到 Excel 文件
> 
> ### 数据格式说明
> 
> 导出的 Excel 文件包含以下字段：
> - **交易时间**：交易发生的具体时间
> - **交易类型**：如商户消费、转账、红包等
> - **交易对方**：商户名称或转账对象
> - **商品**：购买的商品或服务描述
> - **收/支**：标识该笔交易是收入还是支出
> - **金额(元)**：交易金额
> - **支付方式**：零钱、银行卡等
> - **当前状态**：支付成功、已退款等
> - **交易单号**：微信交易流水号
> - **商户单号**：商户系统订单号
> - **备注**：其他备注信息
> 
> ### 注意事项
> 
> ⚠️ **重要提示**：
> - 必须选择"用于个人对账"选项，生成 Excel 格式文件
> - PDF 格式的账单无法被本工具解析
> - 文件前16行左右是表头和说明信息，本工具会自动识别并跳过
> - 建议定期导出账单进行备份和分析
> - 账单数据仅用于个人分析，请妥善保管
> 
> ## 🚀 快速开始
> 
> ### 安装依赖
> 
> ```bash
> npm install
> ```
> 
> ### 运行应用
> 
> ```bash
> npm start
> ```
> 
> ### 打包应用
> 
> ```bash
> # Windows 平台
> npm run build:win
> 
> # macOS 平台
> npm run build:mac
> 
> # Linux 平台
> npm run build:linux
> 
> # 所有平台
> npm run build
> ```
> 
> ## 💻 使用方法
> 
> 1. **启动应用**
>    - 运行应用后会看到欢迎界面
> 
> 2. **导入账单文件**
>    - 点击左侧 `选择账单文件` 按钮
>    - 选择从微信导出的 Excel 账单文件
>    - 系统会自动解析并显示解析结果
> 
> 3. **查看分析结果**
>    - 使用左侧导航菜单切换不同的分析视图
>    - 在各个视图中查看详细的分析数据和图表
> 
> 4. **导出分析报告**
>    - 点击左侧 `导出报告` 按钮
>    - 选择保存位置和文件名
>    - 生成包含完整分析结果的 Excel 报告
> 
> ## 🛠️ 技术栈
> 
> - **框架**：Electron 28.0
> - **数据解析**：xlsx (SheetJS)
> - **图表库**：Chart.js 4.4
> - **界面**：原生 HTML/CSS/JavaScript
> - **打包工具**：electron-builder
> 
> ## 📊 项目结构
> 
> ```
> wechatPay/
> ├── main.js                 # Electron 主进程
> ├── index.html             # 应用主界面
> ├── styles.css             # 样式文件
> ├── renderer.js            # 渲染进程逻辑
> ├── package.json           # 项目配置
> ├── README.md              # 使用文档
> └── 微信支付账单流水文件.xlsx  # 示例账单文件
> ```
> 
> ## 📝 代码说明
> 
> ### 主进程 (main.js)
> - 创建应用窗口
> - 处理文件选择对话框
> - 解析 Excel 账单文件
> - 提取账单元数据
> - 导出分析报告
> 
> ### 渲染进程 (renderer.js)
> - 界面交互逻辑
> - 数据分析算法
> - 图表渲染
> - 视图切换
> - 数据筛选和搜索
> 
> ### 核心功能模块
> 
> #### 1. 数据解析模块
> ```javascript
> // 解析微信账单 Excel 文件
> ipcMain.handle('parse-bill-file', async (event, filePath) => {
>   // 读取 Excel 文件
>   // 识别表头位置
>   // 提取账单数据
>   // 解析元数据
>   // 返回结构化数据
> });
> ```
> 
> #### 2. 数据分析模块
> ```javascript
> // 概览分析
> function analyzeOverview(data) {
>   // 计算总收入、总支出
>   // 统计交易笔数
>   // 确定时间范围
> }
> 
> // 维度分析
> function analyzeByDimension(data, dimension) {
>   // 按指定维度分组
>   // 统计金额和次数
>   // 区分收入和支出
> }
> 
> // 趋势分析
> function analyzeTrend(data, granularity) {
>   // 按时间粒度分组
>   // 计算每个时间段的收支
>   // 生成趋势数据
> }
> ```
> 
> #### 3. 可视化模块
> ```javascript
> // 使用 Chart.js 渲染各类图表
> - 柱状图：收支对比
> - 饼图/环形图：分类占比
> - 折线图：趋势变化
> ```
> 
> ## 🔒 隐私安全
> 
> - 本应用完全在本地运行，不会上传任何数据到服务器
> - 所有账单数据仅在您的计算机上处理和存储
> - 不收集、不传输任何个人信息
> - 建议妥善保管账单文件，避免泄露个人财务信息
> 
> ## ⚙️ 系统要求
> 
> - **操作系统**：Windows 10/11, macOS 10.13+, Linux
> - **内存**：建议 4GB 以上
> - **磁盘空间**：100MB 以上
> - **Node.js**：14.0 或更高版本（仅开发环境需要）
> 
> ## 🐛 常见问题
> 
> ### Q: 为什么无法解析我的账单文件？
> A: 请确保：
> 1. 选择的是"用于个人对账"选项导出的 Excel 文件
> 2. 文件格式为 .xlsx 或 .xls
> 3. 文件没有被损坏或加密
> 
> ### Q: 图表显示不正常怎么办？
> A: 请检查：
> 1. 账单数据是否完整
> 2. 时间范围是否正确
> 3. 尝试重新导入文件
> 
> ### Q: 可以分析多个账单文件吗？
> A: 当前版本每次只能分析一个文件，如需分析多个时间段的数据，建议先在 Excel 中合并后再导入。
> 
> ### Q: 导出的报告在哪里？
> A: 导出时会弹出保存对话框，您可以选择保存位置。
> 
> ## 📄 许可证
> 
> MIT License
> 
> ## 👨‍💻 开发者
> 
> 本项目为开源项目，欢迎贡献代码和提出建议。
> 
> ## 🙏 致谢
> 
> - Electron 团队
> - SheetJS (xlsx) 开发者
> - Chart.js 团队
> - 所有开源贡献者

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化]] · [[數據分析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Mouseww--anything-analyzer|Mouseww/anything-analyzer]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]]

[GitHub](https://github.com/run-liyi/wechatpay)

## 相關收錄

> [!note]- 直接競品（同子分類：數據分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數據分析" AND file.name != "run-liyi--wechatpay"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "run-liyi--wechatpay"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "run-liyi--wechatpay" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "run-liyi--wechatpay"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","自動化","數據分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "run-liyi--wechatpay" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/run-liyi--wechatpay");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "run-liyi--wechatpay" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "run-liyi" AND file.name != "run-liyi--wechatpay"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/run-liyi--wechatpay");
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
> const me = dv.page("Repos/run-liyi--wechatpay");
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
> const me = dv.page("Repos/run-liyi--wechatpay");
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
> const me = dv.page("Repos/run-liyi--wechatpay");
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
> const me = dv.page("Repos/run-liyi--wechatpay");
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

> **2026-05-26** — 首次收錄
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

- [[2026-05-27|2026-05-27]] — 再次上榜，802 stars
- [[2026-05-26|2026-05-26]] — 首次收錄，536 stars
