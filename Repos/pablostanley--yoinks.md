---
repo: pablostanley/yoinks
url: https://github.com/pablostanley/yoinks
owner: pablostanley
owner_type: User
language: TypeScript
license: MIT
description: "yoink any video from your terminal. no shady ads."
homepage: ""
stars: 1053
stars_per_day: 176
forks: 104
open_issues: 9
created: 2026-07-16
pushed_at: 2026-07-17
first_seen: 2026-07-20
week: "2026-W30"
month: "2026-07"
category: "CLI 工具"
subcategory: "視頻下載"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-20
use_case: "從終端機下載視頻，無廣告、無惡意重定向。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-30"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 342
readme_length: 2841
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-20"
star_history: "2026-07-20:776,2026-07-21:878,2026-07-22:970,2026-07-23:1053"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "yoinks"
  - "pablostanley/yoinks"
  - "從終端機下載視頻，無廣告、無惡意重定向。"
---

# yoinks

**776** stars · **259** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/pablostanley--yoinks");
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
> 從終端機下載視頻，無廣告、無惡意重定向。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (259 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速從終端機下載視頻而不想面對廣告的開發者和內容創作者。
> **一句話重點** yoinks 讓視頻下載變得簡單且無廣告，適合需要快速獲取視頻的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/pablostanley--yoinks");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻下載" && p.file.name !== "pablostanley--yoinks" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻下載 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速下載視頻的便利，值得使用。

> [!abstract] 核心創新
> yoinks 提供了一個無廣告的終端視頻下載體驗，並且支持多平台。

## 專案簡介

yoinks 是一個終端機工具，允許用戶從 YouTube、Twitter、Instagram、Threads 等 1800 多個網站下載視頻。用戶只需粘貼網址，選擇解析度（或僅音頻 mp3），即可完成下載。這個工具的賣點在於其簡潔的使用流程，無需彈出窗口或虛假下載按鈕，並且支持全屏、可點擊的用戶界面。安裝非常簡單，只需執行 `npm install -g yoinks`，或使用 `npx yoinks` 直接運行。yoinks 使用了 yt-dlp 來處理視頻下載，並且會自動下載所需的二進制文件，無需用戶手動安裝 Python。

它還使用 ffmpeg 來合併高解析度流和提取 mp3。這個工具的 UI 是基於 Ink 框架，提供了一個 React 風格的終端界面，讓用戶能夠通過上下鍵或鼠標選擇格式。相較於其他下載工具，yoinks 的全屏界面和自動主題適應功能使其在用戶體驗上更為友好。使用者可以通過 `yoinks --theme light` 來強制使用淺色主題，並且在下載完成後，文件會自動保存在 `~/Downloads` 目錄中。這個工具的設計考慮到了用戶的便利性，並且未來計劃增加更多功能，如支持播放列表和自動檢測剪貼板中的網址等。

**技術棧**：`TypeScript 7.0.2` · `Node.js 18+` · `Ink 7.1.0` · `ffmpeg-static 5.3.0`

## 重點功能

- 多平台支持 — 從 YouTube、Twitter、Instagram 等 1800 多個網站下載視頻。
- 簡單的命令行操作 — 使用 `yoinks <url>` 直接下載，或使用 `yoinks` 進入提示模式。
- 全屏 UI — 提供直觀的格式選擇界面，支持鍵盤和鼠標操作。
- 自動主題適應 — 根據終端的主題自動切換，使用 `--theme` 參數可手動設置主題。
- 自動下載依賴 — 首次運行時自動下載 yt-dlp 和 ffmpeg，無需手動安裝。

## 快速開始

1. 全局安裝 yoinks
```bash
npm install -g yoinks
```
2. 直接使用 npx 運行
```bash
npx yoinks
```
3. 下載視頻
```bash
yoinks https://youtu.be/dQw4w9WgXcQ
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Node.js 18+",
  "$ yoinks https://youtu.be/dQw4w9WgXcQ    # 直接進入格式選擇",
  "# 預期輸出：選擇解析度後，視頻將下載到 ~/Downloads"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 776 stars（259/天），forks 81（10.4%），顯示出相當高的使用者興趣。作者 Pablo Stanley 在開源社區有一定的影響力，並且過去有多個成功的專案。這個工具解決了用戶在終端機下載視頻時的繁瑣流程，提供了一個簡單而直觀的解決方案。近期的推廣活動和社群討論可能也促進了其知名度，特別是在開發者中。高比例的 forks 表示許多人在積極修改或使用這個工具，顯示出其實用性和潛力。

## 適合誰使用

**目標受眾**：需要快速從終端機下載視頻而不想面對廣告的開發者和內容創作者。

> [!example] 使用場景
> - 後端工程師用它來從終端機快速下載 YouTube 視頻，因為這樣可以避免使用瀏覽器中的廣告和彈出窗口。
> - 內容創作者用它來下載社交媒體上的視頻素材，因為它支持多種平台，並且能夠快速選擇解析度。
> - 學生用它來下載教學視頻，因為它提供了簡單的命令行界面，讓他們能夠輕鬆獲取學習資源。

## 架構分析

yoinks 採用單一的 CLI 工具架構，使用 TypeScript 和 Ink 框架來構建終端用戶界面。資料流方面，使用者輸入網址後，yoinks 會調用 yt-dlp 下載視頻，並通過 ffmpeg 進行格式轉換。這樣的設計使得用戶無需關心底層實現，專注於簡單的操作。選擇 Ink 作為 UI 框架的好處在於能夠利用 React 的組件化特性，提供直觀的用戶體驗，但代價是需要用戶有一定的終端操作基礎。擴展性方面，未來可以通過增加更多的下載選項和支持更多平台來進一步提升功能。

## 技術深入分析

yoinks 的核心技術機制是基於 yt-dlp 和 ffmpeg，這使得它能夠高效地處理視頻下載和格式轉換。yt-dlp 是一個強大的視頻下載工具，支持多種網站，而 ffmpeg 則用於合併和轉換視頻格式。這樣的組合使得 yoinks 在處理高解析度視頻和音頻提取時非常靈活。效能方面，yoinks 可以快速下載單個視頻，但在未來的版本中需要考慮如何優化批量下載的性能。選擇 TypeScript 和 Ink 作為技術棧的好處在於能夠利用現有的 JavaScript 生態系統，但可能會增加學習曲線。技術風險方面，依賴於外部的 yt-dlp 和 ffmpeg 可能會導致未來的兼容性問題，特別是在這些工具更新時。整合方面，yoinks 可以輕鬆地融入現有的開發流程，特別是對於已經使用 Node.js 的團隊來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例。安裝過程順暢，無需特別配置。文件目前僅提供英文，未來可考慮增加多語言支持。

## 優缺點分析

> [!success] 優點
> - 簡單易用的命令行界面，適合快速下載視頻。
> - 支持多種視頻平台，功能覆蓋面廣。
> - 無廣告體驗，提升用戶下載效率。

> [!danger] 缺點
> - 目前不支持批量下載或播放列表功能。
> - 需要 Node.js 和 ffmpeg 的環境配置。
> - 社群活躍度尚待提高，解決問題的速度可能較慢。

> [!warning] 注意事項
> - 僅支持 Node.js 18 以上版本。
> - 需要 ffmpeg 在系統 PATH 中可用，否則會使用內建的 ffmpeg-static。
> - 目前不支持播放列表或多視頻下載功能（未來計劃中）。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建和管理代理，而 yoinks 專注於視頻下載，功能範圍不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了更廣泛的數據處理功能，而 yoinks 專注於簡單的視頻下載流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | yt-dlp 是一個功能更全面的視頻下載工具，支持更多的選項和配置，而 yoinks 專注於簡化用戶體驗。 | 如果需要更高的自定義和多樣化的下載選項，應選擇 yt-dlp。 | medium，因為需要重新學習命令行選項和配置。 |
| [youtube-dl/youtube-dl](https://github.com/youtube-dl/youtube-dl) | youtube-dl 是一個成熟的視頻下載工具，功能強大，但界面不如 yoinks 直觀。 | 如果需要穩定且功能強大的下載工具，youtube-dl 是更好的選擇。 | medium，因為需要適應不同的命令行語法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **yoinks** | **yt-dlp** | **youtube-dl** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | yt-dlp 是一個功能更全面的視頻下載工具，支持更多的選項和配置，而 yoinks 專注於簡化用戶體驗。 | youtube-dl 是一個成熟的視頻下載工具，功能強大，但界面不如 yoinks 直觀。 |
> | 遷移成本 | - | medium，因為需要重新學習命令行選項和配置。 | medium，因為需要適應不同的命令行語法。 |
> | 適用場景 | 主要場景 | 如果需要更高的自定義和多樣化的下載選項，應選擇 yt-dlp | 如果需要穩定且功能強大的下載工具，youtube-dl 是更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些終端中，顏色主題可能無法正確顯示。
  - 解法：嘗試手動設置主題，使用 `--theme` 參數。
- [MEDIUM] 首次運行時可能需要時間下載 yt-dlp，導致初次使用體驗不佳。
  - 解法：建議在有穩定網路的環境下運行。
- **[HIGH]** 某些視頻格式可能不支持，導致下載失敗。
  - 解法：檢查視頻來源的支持格式，選擇其他可用格式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 個人開發者的視頻下載工具 | 非常適合 | 簡單易用，無需複雜配置，適合快速下載視頻。 |
| 需要批量下載視頻的團隊 | 不適合 | 目前不支持批量下載功能，無法滿足需求。 |
| 內容創作者需要快速獲取素材 | 適合 | 支持多平台下載，能快速獲取所需視頻。 |
| 對 CLI 工具不熟悉的用戶 | 普通 | 雖然界面友好，但仍需一定的命令行基礎。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速下載視頻的便利，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，僅需訪問用戶的下載目錄，且不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pablostanley--yoinks");
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
> const me = dv.page("Repos/pablostanley--yoinks");
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
| Forks | 81 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-17 |
| 建立日期 | 2026-07-16 |
| Repo 大小 | 342 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pablostanley/yoinks) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `ffmpeg-static` `ink` `ink-select-input` `ink-spinner` `react` `@types/node` `@types/react` `tsup` `tsx` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pablostanley](https://github.com/pablostanley) | 29 |

## 社群與生態

**社群活躍度**：最近 2 天有活躍的 commit，但 Issue 解決率為 0%。
**連結**：[文件](https://github.com/pablostanley/yoinks#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-16 ~ 2026-07-17）
> **活躍天數** 2 天 · **最新 commit** fix: stop dim auto-theme button from splitting into bands

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/pablostanley/yoinks/issues/6) | add a final name parameter | 0 | 0 |
> | [#3](https://github.com/pablostanley/yoinks/issues/3) | Time Stamps. | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # yoinks
> 
>   
>   
> 
> yoink any video. paste. yoink. done.
> 
> Download videos from YouTube, X/Twitter, Instagram, Threads, TikTok and
> 1,800+ other sites — right from your terminal. Paste a url, pick a
> resolution (or audio-only mp3), done. No popups, no fake download buttons,
> no sketchy redirects.
> 
> ## Install
> 
> ```sh
> npm install -g yoinks
> ```
> 
> Or try it without installing anything:
> 
> ```sh
> npx yoinks
> ```
> 
> Requires Node 18+. Everything else (yt-dlp, ffmpeg) is fetched or bundled
> automatically.
> 
> ## Usage
> 
> ```sh
> $ yoinks https://youtu.be/dQw4w9WgXcQ    # straight to the format picker
> $ yoinks                                 # prompts for a url
> $ yoinks --theme light                   # force the light palette
> ```
> 
> yoinks takes over the terminal (full-screen, centered — and restores your
> scrollback on exit). Pick a format with ↑/↓ (or j/k, or number keys) and
> hit enter. `esc` goes back, `^c` quits. Or just use the mouse — the yoink
> button, the format list and the footer hints are all clickable, and
> clicking the logo takes you back home. Files are saved to `~/Downloads`,
> and the file path is printed to your terminal when you're done.
> 
> The default `auto` theme uses your terminal's own foreground and background,
> so it follows light and dark terminal themes without guessing. Press `^t` or
> click the theme control in the footer to cycle through `auto`, `light`, and
> `dark` for the current session. Use `--theme auto`, `--theme light`, or
> `--theme dark` to choose the starting theme for one launch.
> 
> ## How it works
> 
> - Powered by [yt-dlp](https://github.com/yt-dlp/yt-dlp). On first run,
>   yoinks downloads the standalone yt-dlp binary to `~/.yoinks/bin` —
>   no Python required. If you already have yt-dlp installed, it uses yours.
> - ffmpeg (needed for merging high-res streams and mp3 extraction) is found
>   on your PATH, with `ffmpeg-static` as a bundled fallback.
> - The UI is [Ink](https://github.com/vadimdemedes/ink) — React for the
>   terminal.
> 
> ## Development
> 
> ```sh
> npm install
> npm run build        # bundle to dist/ with tsup
> npm run dev          # rebuild on change
> node dist/cli.js 
> npm run typecheck
> ```
> 
> To try it as a global command without publishing: `npm link`, then run
> `yoinks` anywhere.
> 
> ## Roadmap
> 
> - [ ] `--best` / `--mp3` flags to skip the picker (scriptable mode)
> - [ ] `-o ` to choose the output folder
> - [ ] Playlist / thread-with-multiple-videos support
> - [ ] Clipboard detection: launch bare and auto-suggest the url you copied
> - [ ] Self-update for the bundled yt-dlp binary (`yt-dlp -U`)
> - [x] Publish to npm (`npm i -g yoinks` / `npx yoinks`)
> - [ ] `curl yoinks.sh | sh` installer
> 
> ## A note on fair use
> 
> yoinks is a personal-archiving tool. Downloading content may violate a
> platform's terms of service — only download what you have the right to
> keep, and be excellent to creators.
> 
> ## License
> 
> [MIT](LICENSE)

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[視頻處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[514-labs--dnsglobe|514-labs/dnsglobe]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/pablostanley/yoinks)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻下載）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻下載" AND file.name != "pablostanley--yoinks"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "pablostanley--yoinks"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "pablostanley--yoinks" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "pablostanley--yoinks"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","視頻處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "pablostanley--yoinks" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/pablostanley--yoinks");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pablostanley--yoinks" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pablostanley" AND file.name != "pablostanley--yoinks"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pablostanley--yoinks");
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
> const me = dv.page("Repos/pablostanley--yoinks");
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
> const me = dv.page("Repos/pablostanley--yoinks");
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
> const me = dv.page("Repos/pablostanley--yoinks");
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
> const me = dv.page("Repos/pablostanley--yoinks");
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

> **2026-07-20** — 首次收錄
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

- [[2026-07-23|2026-07-23]] — 再次上榜，1.1k stars
- [[2026-07-22|2026-07-22]] — 再次上榜，970 stars
- [[2026-07-21|2026-07-21]] — 再次上榜，878 stars
- [[2026-07-20|2026-07-20]] — 首次收錄，776 stars
