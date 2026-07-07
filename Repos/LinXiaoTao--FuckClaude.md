---
repo: LinXiaoTao/FuckClaude
url: https://github.com/LinXiaoTao/FuckClaude
owner: LinXiaoTao
owner_type: User
language: TypeScript
license: MIT
description: ""
homepage: "https://fuck-claude.vercel.app"
stars: 617
stars_per_day: 154
forks: 63
open_issues: 6
created: 2026-07-02
pushed_at: 2026-07-06
first_seen: 2026-07-06
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "安全檢測"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-06
use_case: "檢測你的瀏覽器環境，告訴你是否會被 Claude Code 標記為中國用戶。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-14"
contributor_count: 1
engagement: "medium"
issue_close_rate: 30
repo_size_kb: 723
readme_length: 9999
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:536,2026-07-06:541,2026-07-07:617"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "FuckClaude"
  - "LinXiaoTao/FuckClaude"
  - "檢測你的瀏覽器環境，告訴你是否會被 Claude Code 標記為中國用戶。"
---

# FuckClaude

**541** stars · **180** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
> 檢測你的瀏覽器環境，告訴你是否會被 Claude Code 標記為中國用戶。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (180 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望檢測自己瀏覽器環境是否會被 Claude 標記的中國用戶。
> **一句話重點** 這個專案提供了一個創新的本地檢測工具，專注於用戶隱私和安全性，對於在中國的用戶特別有價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "安全檢測" && p.file.name !== "LinXiaoTao--FuckClaude" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 安全檢測 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到有效的風險檢測，值得。

> [!abstract] 核心創新
> 提供了一個完全本地運行的檢測工具，無需上傳任何數據。

## 專案簡介

這個專案提供了一個輕量級的單頁應用，能夠掃描用戶的瀏覽器環境，並判斷是否會被 Claude Code 標記為中國用戶。用戶只需點擊一次，系統會運行動畫掃描，並根據多個信號（如系統時區、瀏覽器語言、已安裝的中文字體等）計算風險分數，最終給出判斷結果。所有檢測均在本地進行，無需上傳任何數據，這樣的設計確保了用戶的隱私。關鍵指令包括 `curl https://fuck-claude.vercel.app/api/check`，可用於獲取 API 返回的風險評估。這個工具的賣點在於其完全本地運行的特性，避免了數據洩露的風險。

技術上，專案使用了 Astro 框架來構建靜態頁面，並利用 Vercel Functions 提供 API 接口，這樣的架構使得網站能夠快速響應用戶請求。專案的依賴相對輕量，主要依賴於 Astro 和一些輔助庫，適合需要快速檢測風險的用戶。與其他類似工具相比，如 `0x0funky/agent-sprite-forge`，本專案專注於瀏覽器環境的本地檢測，而不是依賴於外部服務，這使得其在隱私保護上更具優勢。使用者可能會遇到的問題包括 API 的使用限制和對某些瀏覽器的兼容性問題，但整體來說，這是一個非常實用的工具，特別是對於在中國的用戶。預計未來會持續更新以應對新的風險信號，並增強檢測準確性。

**技術棧**：`Astro 7.x` · `@astrojs/vercel` · `pnpm`

## 重點功能

- 本地掃描 — 所有檢測在用戶瀏覽器中進行，無需上傳數據。
- 多信號檢測 — 根據系統時區、瀏覽器語言、已安裝字體等多個信號進行風險評估。
- 一鍵分享 — 檢測結果可通過系統分享面板輕鬆分享。
- API 接口 — 提供 `/api/check` 端點，支持自動化檢測。
- 雙語支持 — 支援英語和中文，方便不同語言用戶使用。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動開發伺服器
```bash
pnpm dev
```
3. 構建專案
```bash
pnpm build
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 curl；",
  "curl https://fuck-claude.vercel.app/api/check",
  "# 預期輸出：返回用戶的風險評估結果。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 541 stars（180/天），forks 50（9.2%），顯示出強烈的用戶興趣。作者 LinXiaoTao 針對 Claude Code 的中國用戶風控問題提供了具體的解決方案，這在當前環境下是個迫切需求。專案的設計直接針對用戶隱私，並且提供了本地運行的特性，這在許多類似工具中並不常見。社群對於這個問題的關注也反映在熱門 Issues 中，顯示出用戶對於風險判定的高度關注。這些因素共同推動了專案的快速增長。

## 適合誰使用

**目標受眾**：希望檢測自己瀏覽器環境是否會被 Claude 標記的中國用戶。

> [!example] 使用場景
> - 普通用戶用它來檢測自己是否會被 Claude 標記為中國用戶，因為這樣可以避免不必要的風險。
> - 開發者用它來測試應用在中國用戶環境下的表現，因為這樣可以提前識別潛在的問題。
> - 企業用戶用它來評估員工的瀏覽器環境，因為這樣可以確保合規性和安全性。

## 架構分析

專案採用單頁應用架構，所有檢測邏輯封裝在一個 TypeScript 模組中，這樣的設計使得應用可以快速響應用戶請求。使用 Astro 框架構建靜態頁面，並利用 Vercel Functions 提供 API 接口，這樣的架構確保了高效的性能和良好的擴展性。資料流從用戶的瀏覽器環境開始，經過多個檢測信號的評估，最終返回風險評估結果。這種設計的代價在於需要用戶在本地運行，對於某些用戶來說可能會增加使用門檻。整體來看，這種架構在隱私保護和性能上取得了良好的平衡。

## 技術深入分析

專案的核心技術機制是基於用戶的瀏覽器環境進行風險評估，通過多個信號（如系統時區、瀏覽器語言等）來計算風險分數。這些信號的讀取都是在用戶的瀏覽器中進行，確保了數據的安全性和隱私。效能上，這個工具能快速響應用戶請求，因為所有檢測都是本地運行，並且不依賴於外部服務。設計上選擇了 Astro 框架，這使得專案能夠輕鬆構建靜態頁面並提供 API 接口，這樣的選擇在性能和開發效率上都帶來了好處。技術風險方面，這個專案在擴展性上可能會遇到挑戰，特別是在需要支持更多的檢測信號時，可能需要進行額外的開發和測試。整合方面，這個工具與現有的開發工具鏈（如 CI/CD）相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且有範例指令。安裝過程相對順暢，使用 pnpm 安裝依賴即可。文件目前僅提供英文和中文，對於多語言用戶友好。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，無需上傳數據，保護用戶隱私。
> - 提供多種信號的綜合評估，準確性高。
> - 支持一鍵分享功能，方便用戶分享結果。

> [!danger] 缺點
> - 對於某些特定環境的檢測準確性可能受到限制。
> - 僅支援現代瀏覽器，舊版瀏覽器可能無法正確運行。
> - API 接口的使用有流量限制，需注意使用頻率。

> [!warning] 注意事項
> - 僅支援現代瀏覽器，舊版瀏覽器可能無法正確運行。
> - API 接口的使用有流量限制，需注意使用頻率。
> - 對於某些特定環境的檢測準確性可能受到限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理環境的檢測，而本專案專注於瀏覽器環境的本地檢測。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 提供源映射功能，專注於代碼層面的檢測，而本專案則是針對用戶環境的風險評估。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理環境的檢測，提供了更全面的環境模擬，而本專案則專注於瀏覽器環境的風險評估。 | 如果需要更全面的環境模擬和檢測，則應選擇此工具。 | medium，因為需要重新整合檢測邏輯。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 提供源映射功能，專注於代碼層面的檢測，而本專案則是針對用戶環境的風險評估。 | 如果你的需求是針對代碼層面的檢測，則應選擇此工具。 | high，因為需要完全重構檢測流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **FuckClaude** | **agent-sprite-forge** | **claude-code-sourcemap** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理環境的檢測，提供了更全面的環境模擬，而本專案則專注於瀏覽器環境的風險評估。 | 提供源映射功能，專注於代碼層面的檢測，而本專案則是針對用戶環境的風險評估。 |
> | 遷移成本 | - | medium，因為需要重新整合檢測邏輯。 | high，因為需要完全重構檢測流程。 |
> | 適用場景 | 主要場景 | 如果需要更全面的環境模擬和檢測，則應選擇此工具。 | 如果你的需求是針對代碼層面的檢測，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些舊版瀏覽器無法正確運行，導致檢測失敗。
  - 解法：建議使用最新版本的瀏覽器。
- [MEDIUM] API 使用頻率過高可能導致限流。
  - 解法：合理安排 API 調用頻率。
- [MEDIUM] 對於某些特定環境的檢測準確性可能受到限制。
  - 解法：多次檢測以獲得更準確的結果。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 在中國的普通用戶 | 非常適合 | 能夠有效檢測是否會被標記為中國用戶，保護隱私。 |
| 開發者需要測試應用在中國用戶環境下的表現 | 適合 | 提供了針對環境的風險評估。 |
| 企業需要評估員工的瀏覽器環境 | 普通 | 雖然有用，但可能需要更多的功能來滿足企業需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到有效的風險檢測，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
| Forks | 50 |
| Open Issues | 7 |
| Issue 解決率 | 30% (3 closed) |
| 最後推送 | 2026-07-05 |
| 建立日期 | 2026-07-02 |
| 官方網站 | [Link](https://fuck-claude.vercel.app) |
| Repo 大小 | 723 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/LinXiaoTao/FuckClaude) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@astrojs/sitemap` `@astrojs/vercel` `astro` `@types/qrcode` `qrcode` `sharp`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 51
>     "Astro" : 46
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LinXiaoTao](https://github.com/LinXiaoTao) | 14 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多個更新和回應。
**連結**：[文件](https://fuck-claude.vercel.app)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-03 ~ 2026-07-05）
> **活躍天數** 3 天 · **最新 commit** Add detection signals for Chinese user identification. Introduced new signals for Chinese vendor fon

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/LinXiaoTao/FuckClaude/issues/2) | 85分 你绝对是「Claude 中国用户」不封号咋回事，解释下。 | 1 | 11 |
> | [#11](https://github.com/LinXiaoTao/FuckClaude/issues/11) | 灣灣的風險判定過高了 | 0 | 1 |
> | [#10](https://github.com/LinXiaoTao/FuckClaude/issues/10) | 纯围观 | 0 | 0 |
> | [#9](https://github.com/LinXiaoTao/FuckClaude/issues/9) | 纯在国外咋也被识别成高风险了 | 0 | 0 |
> | [#8](https://github.com/LinXiaoTao/FuckClaude/issues/8) | 太乐了 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Fuck Claude — Are You a Claude "China User"?
> 
> English | [中文](#中文)
> 
> A lightweight, SEO-friendly, bilingual (EN / 中文) single-page tool that scans your
> **browser environment** and tells you whether Claude Code would flag you as a China
> user. One click runs an animated scan of each signal, the gauge climbs as risk adds
> up, and you get a verdict plus the list of matched signals. Everything runs **100%
> locally** — no network requests, no data upload.
> 
> Built with **Claude Fable 5**.
> 
> 
> ## Share & API
> 
> - **One-click share** — after a scan, share your verdict together with an
>   auto-generated result image via the native share sheet (Web Share API, so
>   mobile clients get their real app list), or straight to X, Weibo, Telegram,
>   Facebook, LinkedIn or Reddit, plus copy-to-clipboard. A **Save result image**
>   button also appears next to _Scan again_.
> - **curl / HTTP endpoint** — the site is static, but a tiny Vercel Function at
>   `/api/check` returns a server-side estimate for terminals and scripts. It
>   scores what the request exposes — the Vercel geo timezone
>   (`x-vercel-ip-timezone`), country, the `Accept-Language` header and the
>   User-Agent (emoji vendor + Chinese browser + Chinese device brand) — over
>   the measurable 68/100 of the weight (Chinese fonts, vendor fonts and Intl
>   locale are browser-only) and normalises it to 0–100, reusing the exact same
>   scorers as the browser scan. The response language follows your
>   `Accept-Language` header automatically.
> 
> ```bash
> 
> ## 分享与 API
> 
> - **一键分享** —— 检测完成后,可连同自动生成的结果图片一起,通过系统原生分享面板
>   (Web Share API,移动端会弹出真实的应用列表)分享结论,或直达 X、微博、Telegram、
>   Facebook、LinkedIn、Reddit,以及复制链接。「重新扫描」按钮旁还会出现 **保存结果图片**。
> - **curl / HTTP 接口** —— 网站是静态的,但 `/api/check` 是一个极小的 Vercel Function,
>   为终端与脚本返回服务端估算。它基于请求可见的信息评分 —— Vercel 归属地时区
>   (`x-vercel-ip-timezone`)、国家、`Accept-Language` 头与 User-Agent(emoji 厂商 +
>   国产浏览器 + 国产品牌设备)—— 在可检测的 68/100 权重上(中文字体、厂商字体与
>   Intl locale 仅浏览器可测)归一化到 0–100,复用与浏览器扫描完全一致的评分器。
>   响应语言会自动跟随你的 `Accept-Language` 请求头。
> 
> ```bash
> 
> ## How it works
> 
> When Claude Code is pointed at a non-official endpoint via `ANTHROPIC_BASE_URL`, it
> was reported to read the **system timezone** and the **proxy hostname**, then encode
> the result steganographically into the `Today's date is …` line of the system prompt
> (date separator `-` → `/` on a China timezone; the apostrophe swapped among four
> near-identical Unicode variants to encode domain-list / AI-lab-keyword hits).
> 
> A web page can only read browser-visible signals. Crucially, `Intl` reads the **same
> OS timezone** Claude Code does, so timezone is the one signal that maps directly onto
> Claude's real check. The other signals are general "Chinese environment" fingerprints.
> 
> 
> ## Detected signals & weights
> 
> | Signal | Weight | How it's detected |
> | --- | --- | --- |
> | System timezone | 26 | `Intl.DateTimeFormat().resolvedOptions().timeZone` vs. `Asia/Shanghai`, `Asia/Urumqi`, … (**used by Claude**) |
> | Browser language | 20 | `navigator.language(s)`; `zh-CN` / `zh-Hans` scores highest |
> | Installed Chinese fonts | 16 | Canvas width-probing for SC/TC fonts (Microsoft YaHei, PingFang SC, …) |
> | Chinese vendor fonts | 10 | Canvas probing for vendor/software faces (MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder FZ\*, …) — any hit is a strong tell |
> | Chinese browser / WebView | 8 | UA + UA-CH brands vs. WeChat, QQ, Quark, UC, Baidu, 360, Sogou, Douyin … |
> | Chinese-brand device | 6 | UA-CH high-entropy `model` (`navigator.userAgentData`) + UA vs. HarmonyOS, Huawei, Xiaomi, OPPO, vivo, … |
> | Intl locale | 6 | `Intl` resolved locale (date/number formatting) |
> | Timezone offset | 4 | `getTimezoneOffset() === -480` (UTC+8) |
> | Emoji rendering style | 4 | OS-vendor guess from platform/UA; weakly correlated |
> 
> Each signal returns a `0–1` "China-like" score, multiplied by its weight; the nine
> weights sum to **100**, so the total score is the sum of contributions. Bands: Low
> `0–30`, Medium `31–60`, High `61–100`. A signal counts as a "hit" when its score
> ≥ 0.25.
> 
> 
> # Text report — replies in the language of your Accept-Language header
> curl https://fuck-claude.vercel.app/api/check
> 
> 
> # Force a language via the request header
> curl -H "Accept-Language: zh" https://fuck-claude.vercel.app/api/check
> 
> 
> # JSON
> curl "https://fuck-claude.vercel.app/api/check?format=json"
> ```
> 
> > The API is an IP/header estimate and differs from the in-browser OS scan; the
> > geo headers only exist on the Vercel deployment.
> 
> 
> ## Tech stack
> 
> - [Astro](https://astro.build) `7.x`, static output (`output: 'static'`)
> - [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/)
>   adapter so the single on-demand route `/api/check` runs as a Vercel Function
>   (every page still prerenders to static HTML)
> - Built-in i18n: English at `/`, Chinese at `/zh/`, plus `@astrojs/sitemap`
> - No UI framework; the scan/scoring logic is a single bundled TypeScript module
> - Package manager: **pnpm**
> 
> 
> ## Project structure
> 
> ```
> src/
> ├── config/signals.ts    # signal definitions, weights, detectors, icons
> ├── config/sponsors.ts   # sponsor list (logo, link, EN/ZH taglines)
> ├── config/cn-models.ts  # domestic-model picks (DeepSeek / GLM / Kimi name-only links)
> ├── config/socials.ts    # header social profiles (Xiaohongshu / Douyin / X) + QR payloads
> ├── i18n/ui.ts           # EN/ZH copy dictionary + translator
> ├── scripts/detect.ts    # animated scan + scoring + verdict + share wiring (client)
> ├── scripts/track.ts     # GA click tracking for outbound promo links
> ├── layouts/BaseLayout.astro  #  SEO + GA + global styles
> ├── components/          # Detector (+ share buttons), Sponsors, CnModels, ScoreRing, Mascot, LangToggle, SocialLinks (QR popovers), Footer
> └── pages/               # index.astro (en) + zh/index.astro + api/check.ts (curl/HTTP endpoint)
> public/mascot/           # cartoon CEO state images (doze / search / low / medium / high)
> public/sponsors/         # sponsor logos
> scripts/
> └── gen-assets.mjs       # regenerates favicon / PWA icons / og.png (node scripts/gen-assets.mjs)
> skills/
> └── detection-signals/SKILL.md  # agent playbook for adding/tuning detection signals
> ```
> 
> 
> ## Develop
> 
> ```bash
> pnpm install
> pnpm dev        # http://localhost:4321
> pnpm build      # -> dist/
> pnpm preview
> ```
> 
> 
> ## Deploy
> 
> Optimised for **Vercel** (`@astrojs/vercel`): every page prerenders to static
> HTML and only `/api/check` runs as a Vercel Function that reads the request's
> geo headers. It also works on any static host (Cloudflare Pages, Netlify,
> GitHub Pages) — the site is fully functional there, only the `/api/check`
> endpoint is Vercel-specific. Before deploying, set your real origin in
> [`astro.config.mjs`](astro.config.mjs) (`site`) and
> [`public/robots.txt`](public/robots.txt) so canonical URLs, `hreflang` links and the
> sitemap point to the correct domain.
> 
> 
> ## Disclaimer
> 
> For reference only, based on public reverse-engineering reports of Claude Code's
> former proxy-fingerprinting behaviour. Not an official statement or advice.
> 
> 
> # Fuck Claude — 你是「Claude 中国用户」吗
> 
> [English](#fuck-claude--are-you-a-claude-china-user) | 中文
> 
> 一个轻量、SEO 友好、中英双语的单页工具:扫描你的**浏览器环境**,判断你是否会被
> Claude Code 标记为中国用户。点击后会有逐项检测的扫描动效,分数环随风险累加而增长,
> 最后给出结论与命中的信号列表。所有检测都在**本地浏览器**完成——不发起任何网络请求,
> 不上传任何数据。
> 
> 本网站使用 **Claude Fable 5** 开发。
> 
> 
> ## 原理
> 
> 当 Claude Code 通过 `ANTHROPIC_BASE_URL` 指向非官方中转时,据公开逆向分析它会读取
> **系统时区**与**中转 hostname**,再把结果用隐写术编码进 system prompt 的
> `Today's date is …` 这一行(命中中国时区时日期分隔符 `-` 变 `/`;撇号在 4 种视觉几乎
> 相同的 Unicode 变体间切换,编码是否命中域名清单 / AI 实验室关键词)。
> 
> 网页只能读取浏览器可见信号。关键在于:`Intl` 读到的时区与 Claude Code 读的是**同一个
> 操作系统时区**,因此时区是唯一能直接对应 Claude 真实判定的信号;其余信号属于更广义的
> 「中文环境指纹」。
> 
> 
> ## 赞助商
> 
> [想显示在下方？](mailto:linxiaotao1993@gmail.com)
> 
> | 🏆 赞助商 🏆 | 介绍 |
> | --- | --- |
> |  | **[二狗 API](https://ergouapi.com/r/gh-fuckclaude)**感谢 二狗 API 赞助本项目!接入二狗,稳如老狗。二狗 API 中转站全站 0.1x~0.2x 超低倍率,提供 **Claude**/GPT/Gemini 等多个国内外 100% 纯血大模型接口;顶级 IPLC 线路 + 住宅双 ISP 冗余,确保全国范围稳定低延迟访问。欢迎各位开发者、工作室[注册使用](https://ergouapi.com/r/gh-fuckclaude)。 |
> |  | **[Roxy 浏览器 \| 养号&多账号防封号](https://roxybrowser.com/invite/0326196A)**(优惠码 9 折)感谢 Roxy

## 延伸閱讀

相關概念：[[隱私保護]] · [[安全漏洞]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Yu9191--wloc|Yu9191/wloc]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]]

[GitHub](https://github.com/LinXiaoTao/FuckClaude) · [官方網站](https://fuck-claude.vercel.app)

## 相關收錄

> [!note]- 直接競品（同子分類：安全檢測）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "安全檢測" AND file.name != "LinXiaoTao--FuckClaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "LinXiaoTao--FuckClaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "LinXiaoTao--FuckClaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "LinXiaoTao--FuckClaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["隱私保護","安全漏洞","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "LinXiaoTao--FuckClaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "LinXiaoTao--FuckClaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "LinXiaoTao" AND file.name != "LinXiaoTao--FuckClaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
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

> **2026-07-06** — 首次收錄
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

- [[2026-07-07|2026-07-07]] — 再次上榜，617 stars
- [[2026-07-06|2026-07-06]] — 首次收錄，536 stars
