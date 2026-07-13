---
repo: LinXiaoTao/FuckClaude
url: https://github.com/LinXiaoTao/FuckClaude
owner: LinXiaoTao
owner_type: User
language: TypeScript
license: MIT
description: ""
homepage: "https://fuck-claude.vercel.app"
stars: 757
stars_per_day: 76
forks: 74
open_issues: 6
created: 2026-07-02
pushed_at: 2026-07-07
first_seen: 2026-07-06
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "安全工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-06
use_case: "檢測你的瀏覽器環境是否會被 Claude 標記為中國用戶。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-14"
contributor_count: 1
engagement: "low"
issue_close_rate: 50
repo_size_kb: 754
readme_length: 9983
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:536,2026-07-06:541,2026-07-07:617,2026-07-07:619,2026-07-08:663,2026-07-09:700,2026-07-10:723,2026-07-11:738,2026-07-12:749,2026-07-13:757"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "FuckClaude"
  - "LinXiaoTao/FuckClaude"
  - "檢測你的瀏覽器環境是否會被 Claude 標記為中國用戶。"
---

# FuckClaude

**757** stars · **76** stars/天 · 建立 10 天前 · TypeScript · MIT

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
> 檢測你的瀏覽器環境是否會被 Claude 標記為中國用戶。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (76 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 對於需要檢測瀏覽器環境以避免被 Claude 標記的用戶，尤其是中國用戶。
> **一句話重點** Fuck Claude 不僅是一個檢測工具，更是對用戶隱私的重視和保護。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/LinXiaoTao--FuckClaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "安全工具" && p.file.name !== "LinXiaoTao--FuckClaude" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 安全工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速檢測結果，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於其完全本地化的環境檢測，無需上傳任何數據。

## 專案簡介

Fuck Claude 是一個輕量級的單頁應用，旨在檢測用戶的瀏覽器環境，並告訴用戶是否會被 Claude Code 標記為中國用戶。用戶只需點擊一次，應用會執行一系列信號掃描，並根據檢測結果給出風險評分和詳細信號列表。所有檢測都在本地進行，無需網絡請求或數據上傳，這樣的設計確保了用戶隱私。核心技術使用了 Astro 框架，並利用了 Web Share API 來實現一鍵分享功能，讓用戶可以輕鬆分享檢測結果。此工具的賣點在於其簡易性和隱私保護，特別適合對於網絡安全和隱私有高要求的用戶。

其技術架構以靜態輸出為主，僅在 Vercel 上運行一個小型 API 來進行服務端估算，這使得整體架構輕量且高效。與其他類似工具相比，如 `agent-sprite-forge` 和 `claude-code-sourcemap`，Fuck Claude 更加專注於用戶端的隱私保護，並且不依賴於外部服務進行數據處理。實際使用中，這個工具能夠快速提供結果，並且支持多語言，對於需要快速檢測的用戶來說非常方便。對於使用者來說，可能會遇到的問題包括 API 限制和檢測信號的準確性，這些都需要在使用過程中注意。總體來看，這是一個適合個人用戶和小型團隊的工具，未來可能會隨著用戶需求的增加而進一步擴展功能。

**技術棧**：`Astro 7.x` · `@astrojs/vercel`

## 重點功能

- 本地掃描 — 所有檢測在用戶瀏覽器中進行，無需上傳數據。
- 一鍵分享 — 支持通過 Web Share API 分享檢測結果及圖片。
- 多語言支持 — 同時支持英語和中文，方便不同語言用戶使用。
- API 接口 — 提供 `/api/check` 端點，支持終端和腳本調用。
- 信號檢測 — 根據多個信號（如時區、語言、字體等）計算風險分數。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動開發伺服器
```bash
pnpm dev
```
3. 構建生產版本
```bash
pnpm build
```
4. 預覽構建結果
```bash
pnpm preview
```

## 程式碼範例

```ts
{
  "前置條件": "使用 curl 命令行工具",
  "指令": "curl https://fuck-claude.vercel.app/api/check",
  "預期輸出": "返回用戶的風險評分及相關信號列表。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天就累積 757 stars（76/天），forks 74（9.8%），這顯示出相對較高的使用興趣。作者 LinXiaoTao 之前有過相關開發經驗，這個工具解決了用戶在使用 Claude 時可能面臨的風險識別問題，特別是在中國用戶中。這個工具的推出引起了社群的關注，尤其是在抖音上的演示視頻獲得了 20 萬以上的播放量，進一步推動了它的流行。

## 適合誰使用

**目標受眾**：對於需要檢測瀏覽器環境以避免被 Claude 標記的用戶，尤其是中國用戶。

> [!example] 使用場景
> - 網絡安全專家用它來檢測瀏覽器環境，確保不會被 Claude 標記為中國用戶，因為這能幫助他們保護用戶隱私。
> - 開發者用它來測試其應用的用戶端行為，確保不會因為環境問題而影響用戶體驗，因為這樣可以及早發現潛在的風險。
> - 普通用戶用它來了解自己的瀏覽器設置是否安全，因為這能幫助他們避免不必要的風險和封號問題。

## 架構分析

這個專案採用了 Astro 框架來構建靜態網站，所有頁面預渲染為靜態 HTML，僅有一個小型的 Vercel Function 用於處理 API 請求。這樣的設計使得整體架構輕量且高效，能夠快速響應用戶請求。資料流方面，檢測信號的計算完全在用戶端進行，這樣可以保護用戶隱私，避免數據洩露。選擇 Astro 框架的好處在於其靜態輸出特性，能夠提高加載速度，但代價是無法進行動態數據處理。整體而言，這個架構非常適合需要高效能和隱私保護的應用場景。

## 技術深入分析

Fuck Claude 的核心技術機制在於其本地環境檢測，使用了多個信號來評估用戶是否會被 Claude 標記。這些信號包括系統時區、瀏覽器語言、已安裝的中文字體等，這些信號的權重設計使得最終的風險評分能夠準確反映用戶的環境。效能方面，因為所有檢測都在用戶端進行，對伺服器的負擔相對較小，冷啟動時間幾乎為零，記憶體佔用也非常低。選擇 Astro 框架的原因在於其靜態輸出特性，這使得網站能夠快速加載，但也限制了動態數據的處理能力。技術風險方面，隨著用戶量的增加，可能會面臨 API 限制的挑戰，這需要在未來的版本中進行優化。整合方面，這個工具可以輕鬆融入到現有的開發流程中，對於使用現代前端框架的開發者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指示和範例，安裝過程順暢，無明顯坑點。文檔支持中英文，對於不同語言的用戶都很友好。

## 優缺點分析

> [!success] 優點
> - 本地檢測，無需數據上傳，保護用戶隱私。
> - 簡單易用，點擊即可獲得結果。
> - 支持多語言，適合不同用戶群體。

> [!danger] 缺點
> - 僅支持現代瀏覽器，兼容性有限。
> - API 限制可能影響高頻次檢測的用戶體驗。
> - 對於某些特殊環境，檢測結果可能不準確。

> [!warning] 注意事項
> - 僅支持現代瀏覽器，舊版瀏覽器可能無法正確運行。
> - API 限制可能影響高頻次檢測的用戶體驗。
> - 對於某些特殊環境，檢測結果可能不準確。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成 AI 代理，而 Fuck Claude 更加專注於檢測用戶環境的風險。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 此工具主要用於源代碼映射，而 Fuck Claude 專注於用戶端的隱私檢測。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成 AI 代理，而 Fuck Claude 更加專注於檢測用戶環境的風險。 | 如果你的需求是生成 AI 代理而非環境檢測，則應選擇此工具。 | medium，因為需要重新設計整個流程。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 此工具主要用於源代碼映射，而 Fuck Claude 專注於用戶端的隱私檢測。 | 如果你的需求是進行源代碼分析，則應選擇此工具。 | high，因為需要重新設計整個架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **FuckClaude** | **agent-sprite-forge** | **claude-code-sourcemap** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於生成 AI 代理，而 Fuck Claude 更加專注於檢測用戶環境的風險。 | 此工具主要用於源代碼映射，而 Fuck Claude 專注於用戶端的隱私檢測。 |
> | 遷移成本 | - | medium，因為需要重新設計整個流程。 | high，因為需要重新設計整個架構。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成 AI 代理而非環境檢測，則應選擇此工具。 | 如果你的需求是進行源代碼分析，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些舊版瀏覽器上無法正確運行
  - 解法：建議使用現代瀏覽器
- [MEDIUM] API 限制可能影響高頻次檢測
  - 解法：減少檢測頻率或使用本地測試
- [MEDIUM] 檢測結果在特殊環境下可能不準確
  - 解法：在不同環境下進行多次檢測以獲得準確結果

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的網絡安全檢測 | 非常適合 | 因為其本地檢測特性能有效保護用戶隱私。 |
| 大型企業的數據分析 | 普通 | 雖然功能強大，但可能不符合企業的數據處理需求。 |
| 個人用戶的隱私檢測 | 非常適合 | 能快速提供結果且保護用戶隱私。 |
| 需要高頻次檢測的應用 | 不適合 | API 限制可能影響使用體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速檢測結果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，且不存取敏感資料，依賴鏈相對簡單，適合在 CI/CD 中使用。

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
| Forks | 74 |
| Open Issues | 6 |
| Issue 解決率 | 50% (6 closed) |
| 最後推送 | 2026-07-07 |
| 建立日期 | 2026-07-02 |
| 官方網站 | [Link](https://fuck-claude.vercel.app) |
| Repo 大小 | 754 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/LinXiaoTao/FuckClaude) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@astrojs/sitemap` `@astrojs/vercel` `astro` `@types/qrcode` `qrcode` `sharp`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 52
>     "Astro" : 46
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LinXiaoTao](https://github.com/LinXiaoTao) | 18 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在一些開放的問題和反饋。
**連結**：[文件](https://fuck-claude.vercel.app)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-04 ~ 2026-07-07）
> **活躍天數** 4 天 · **最新 commit** Reorder CN models to list Kimi first.

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/LinXiaoTao/FuckClaude/issues/6) | 抖音上做了这个网站的演示视频.20w+播放了 | 2 | 0 |
> | [#2](https://github.com/LinXiaoTao/FuckClaude/issues/2) | 85分 你绝对是「Claude 中国用户」不封号咋回事，解释下。 | 1 | 11 |
> | [#10](https://github.com/LinXiaoTao/FuckClaude/issues/10) | 纯围观 | 0 | 0 |
> | [#9](https://github.com/LinXiaoTao/FuckClaude/issues/9) | 纯在国外咋也被识别成高风险了 | 0 | 1 |
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
> |  | **[Roxy 浏览器 \| 养号&多账号防封号](https://roxybrowser.cn/invite/0326196A)**(优惠码 9 折)感谢 Roxy 

## 延伸閱讀

相關概念：[[隱私保護]] · [[網絡安全]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Yu9191--wloc|Yu9191/wloc]] · [[0xGF--boneyard|0xGF/boneyard]]

[GitHub](https://github.com/LinXiaoTao/FuckClaude) · [官方網站](https://fuck-claude.vercel.app)

## 相關收錄

> [!note]- 直接競品（同子分類：安全工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "安全工具" AND file.name != "LinXiaoTao--FuckClaude"
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
> const concepts = ["隱私保護","網絡安全","API 設計"];
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
