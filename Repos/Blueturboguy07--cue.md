---
repo: Blueturboguy07/cue
url: https://github.com/Blueturboguy07/cue
owner: Blueturboguy07
owner_type: User
language: JavaScript
license: GPL-3.0
description: "Open-source macOS AI copilot that floats over your screen, sees/hears your meetings, and stays hidden from screen shares. Cluely alternative, bring-your-own-key."
homepage: ""
stars: 727
stars_per_day: 104
forks: 157
open_issues: 8
created: 2026-07-15
pushed_at: 2026-07-21
first_seen: 2026-07-21
week: "2026-W30"
month: "2026-07"
category: "生產力"
subcategory: "AI 助手"
release_tag: "v0.2.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提供隱形的 AI 助手，協助用戶在會議中獲取即時建議，並隱藏於螢幕分享之外。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-29"
contributor_count: 5
engagement: "medium"
issue_close_rate: 27
repo_size_kb: 1145
readme_length: 9872
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-21"
star_history: "2026-07-21:666,2026-07-21:666,2026-07-22:704,2026-07-22:704,2026-07-23:727"
tags:
  - github
  - "category/生產力"
  - "lang/javascript"
aliases:
  - "cue"
  - "Blueturboguy07/cue"
  - "提供隱形的 AI 助手，協助用戶在會議中獲取即時建議，並隱藏於螢幕分享之外。"
---

# cue

**727** stars · **104** stars/天 · 建立 7 天前 · JavaScript · GPL-3.0

```dataviewjs
const me = dv.page("Repos/Blueturboguy07--cue");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.2.0`

> [!summary] 一句話摘要
> 提供隱形的 AI 助手，協助用戶在會議中獲取即時建議，並隱藏於螢幕分享之外。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (104 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 macOS 上進行會議時獲得即時 AI 幫助的專業人士。
> **一句話重點** cue 代表了一種新的 AI 助手設計思路，專注於隱私和即時協助，適合在會議中使用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "Blueturboguy07--cue" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、1 小時整合，得到即時會議協助的效果，值得嘗試。

> [!abstract] 核心創新
> cue 是一個開源的 AI 助手，專為隱形設計，能在會議中提供即時建議而不被他人看到。

## 專案簡介

cue 是一款開源的 macOS AI 助手，設計為在用戶螢幕上浮動，能夠同時接收螢幕、麥克風和會議音頻的輸入，並利用 AI 模型提供即時建議。用戶可以透過快捷鍵 `⌘` `↵` 啟動助手，解決編碼問題或在會議中獲得建議。這種設計能夠讓用戶在不干擾他人的情況下獲得幫助，特別是在需要隱私的會議中。cue 使用 Electron 框架開發，所有處理都在本地進行，除了與選擇的 AI 提供者的 API 通信。這使得它在性能上相對輕量，並且不依賴於伺服器。

與 Cluely 相比，cue 允許用戶自帶 AI 金鑰，這樣用戶只需為實際使用的 API 付費，避免了額外的成本。對於需要在 Zoom 會議中使用的用戶，cue 提供了特定的設置來確保其隱形，這在其他工具中可能無法實現。使用者需注意，雖然設計上是隱形的，但在某些情況下仍可能被捕捉到，這是設計上的一個妥協。社群活躍度尚可，開發者們持續更新並解決問題，但目前仍有一些未解決的問題。整體而言，cue 是一個適合需要在會議中獲得即時幫助的開發者和專業人士的工具，特別是那些重視隱私的使用者。

**技術棧**：`Electron 33.2.1` · `Node.js 18+`

## 重點功能

- 即時協助 — 使用 `⌘` `↵` 快捷鍵獲得即時建議，無論是在編碼還是會議中。
- 螢幕和音頻捕捉 — 同時接收螢幕、麥克風和會議音頻的輸入，提供全面的上下文。
- 隱形設計 — 透過 macOS 的內容保護功能，避免在螢幕分享時被捕捉。
- 自帶 AI 金鑰 — 允許用戶自選 AI 提供者，並根據使用量付費，降低成本。
- 內建教學 — 首次啟動時提供快速上手教學，幫助用戶快速熟悉功能。

## 快速開始

1. 下載應用程式
```bash
從 Releases 頁面下載 cue-mac.zip
```
2. 安裝應用程式
```bash
將 cue.app 拖入 Applications 資料夾
```
3. 首次啟動
```bash
右鍵點擊 cue.app，選擇 Open 以繞過 macOS 的安全限制
```
4. 授權麥克風和螢幕錄影權限
```bash
在系統設定中啟用對 cue 的麥克風和螢幕錄影權限
```

## 程式碼範例

```js
{
  "前置條件": "需要在 macOS 上安裝 Node.js 18+。",
  "指令": "git clone https://github.com/Blueturboguy07/cue.git\ncd cue\nnpm install\nnpm start",
  "預期輸出": "啟動 cue 應用程式並顯示主界面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 727 stars（104/天），forks 157（21.6%），顯示出強烈的社群興趣。開發者 Blueturboguy07 及其團隊過去在開源社群中活躍，這個專案解決了許多用戶在會議中需要即時幫助但又不想被他人看到的痛點。特別是隱私問題，許多現有的工具無法在螢幕分享時保持隱形，這使得 cue 成為一個有吸引力的選擇。最近的社交媒體討論也可能促進了其知名度，讓更多人注意到這個工具的潛力。

## 適合誰使用

**目標受眾**：需要在 macOS 上進行會議時獲得即時 AI 幫助的專業人士。

> [!example] 使用場景
> - 軟體工程師用它來在 Zoom 會議中獲得即時建議，因為它能在不被其他參與者看到的情況下提供幫助。
> - 學生用它來在遠端學習中獲取即時的問題解答，因為它能同時聆聽課堂內容並提供相關的資訊。
> - 產品經理用它來在會議中記錄關鍵討論點，因為它能自動轉錄會議音頻並提供回顧功能。

## 架構分析

cue 使用 Electron 框架，所有功能在本地運行，除了與 AI 提供者的 API 通信。架構中包含三個主要輸入：螢幕捕捉、麥克風音頻和會議音頻，這些輸入被分開處理以避免混淆。音頻流使用 `getUserMedia` 和 `getDisplayMedia` 進行捕捉，並通過 AI 模型進行轉錄和分析。

選擇 Electron 使得跨平台開發變得簡單，但也帶來了較大的應用體積和依賴性。整體設計考量了用戶隱私，使用 macOS 的內容保護功能來隱藏應用，但這在某些情況下可能會失效，這是設計上的一個妥協。擴展性方面，未來可以考慮加入更多音頻處理功能或支持其他平台。

## 技術深入分析

cue 的核心技術機制基於 Electron 框架，利用其 desktopCapturer 和 getUserMedia API 來捕捉螢幕和音頻。這使得應用能夠在本地運行，減少延遲並提高性能。音頻流的處理使用了 OpenAI Whisper 和 Google Gemini 進行轉錄，這些模型能夠提供高效的語音識別。設計上，cue 需要用戶授權麥克風和螢幕錄影權限，這在初次使用時可能會造成一些困擾。選擇 Electron 使得開發跨平台應用變得簡單，但也增加了應用的體積和依賴性。技術風險方面，隱形設計的有效性在不同的 macOS 版本中可能會有所不同，這需要用戶在使用時保持警覺。整合到現有的工作流中相對簡單，因為它可以與大多數會議工具兼容，但在 Zoom 中需要特定設置以確保隱形，這可能會成為使用上的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程中可能會遇到 macOS 的安全限制，但提供了解決方案。首次啟動時有內建教學，幫助用戶快速上手。文件目前僅提供英文版本，對於非英語用戶可能有一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 提供即時的 AI 協助，適合會議和編碼問題。
> - 設計為隱形，保護用戶隱私。
> - 開源且自帶 AI 金鑰，降低使用成本。
> - 內建教學，快速上手。

> [!danger] 缺點
> - 僅支援 macOS，Windows 支援尚未完全測試。
> - 在某些情況下可能會被捕捉到，影響隱私。
> - 需要用戶自行提供 AI 金鑰，對於不熟悉 API 的用戶可能有一定的學習曲線。
> - 在 Zoom 中需要特定設置以確保隱形，否則可能會被捕捉。

> [!warning] 注意事項
> - 僅支援 macOS，Windows 支援尚未完全測試。
> - 在某些情況下，仍可能被捕捉到，特別是在 macOS 15.4+ 的環境中。
> - 需要用戶自行提供 AI 金鑰，對於不熟悉 API 的用戶可能有一定的學習曲線。
> - 在 Zoom 中需要特定設置以確保隱形，否則可能會被捕捉。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但不專注於隱形設計，適合需要可見輔助的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供會議輔助功能，但缺乏即時音頻處理能力，適合靜態資料分析。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但不專注於隱形設計，適合需要可見輔助的場景。 | 如果需要一個可見的助手來輔助工作，這個工具會是更好的選擇。 | medium，因為功能上有相似之處，但需要重新適應界面和操作方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供會議輔助功能，但缺乏即時音頻處理能力，適合靜態資料分析。 | 如果主要需求是靜態資料分析而非即時會議輔助，這個工具會更合適。 | low，因為功能上有明顯的差異，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cue** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 助手功能，但不專注於隱形設計，適合需要可見輔助的場景。 | 雖然也提供會議輔助功能，但缺乏即時音頻處理能力，適合靜態資料分析。 |
> | 遷移成本 | - | medium，因為功能上有相似之處，但需要重新適應界面和操作方式。 | low，因為功能上有明顯的差異，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果需要一個可見的助手來輔助工作，這個工具會是更好的選擇。 | 如果主要需求是靜態資料分析而非即時會議輔助，這個工具會更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，cue 可能會被 Zoom 捕捉到，特別是在未設置為隱形的情況下。
  - 解法：確保在 Zoom 設定中選擇 'Advanced capture with window filtering'。
- [MEDIUM] 首次使用時可能無法獲得麥克風或螢幕錄影權限。
  - 解法：在系統設定中手動授權 cue 的權限。
- **[HIGH]** 使用不支持音頻轉錄的 AI 金鑰會導致功能無法正常運作。
  - 解法：確保使用的金鑰具備音頻轉錄的權限。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的遠端團隊會議 | 非常適合 | 能夠在不干擾他人的情況下提供即時建議，提升會議效率。 |
| 需要在大型會議中記錄關鍵討論的專業人士 | 適合 | 隱形設計能夠保護隱私，適合在公開場合使用。 |
| 對音頻轉錄要求高的開發者 | 普通 | 雖然提供音頻轉錄，但在某些情況下可能會被捕捉，影響使用體驗。 |
| 需要在 Windows 環境中使用的團隊 | 不適合 | 目前僅完全支援 macOS，Windows 支援尚未完全測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到即時會議協助的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用本身無需高權限，僅需麥克風和螢幕錄影權限。所有數據僅在本地處理，沒有伺服器存儲，降低了數據洩露的風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
| Forks | 157 |
| Open Issues | 8 |
| Issue 解決率 | 27% (3 closed) |
| 最後推送 | 2026-07-21 |
| 建立日期 | 2026-07-15 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Blueturboguy07/cue) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@google/genai` `lucide-static` `openai` `electron` `electron-builder`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 73
>     "CSS" : 20
>     "HTML" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@deecod-dev](https://github.com/deecod-dev) | 9 |
> | [@Blueturboguy07](https://github.com/Blueturboguy07) | 4 |
> | [@Battikhah](https://github.com/Battikhah) | 1 |
> | [@gojodennis](https://github.com/gojodennis) | 1 |
> | [@kudala-bharani](https://github.com/kudala-bharani) | 1 |

**最新版本**：v0.2.0 — cue v0.2.0 - Windows Support, Custom Shortcuts, & CV Context (2026-07-21)

## 社群與生態

**社群活躍度**：社群活躍度尚可，開發者們持續更新並解決問題。
**連結**：[文件](https://github.com/Blueturboguy07/cue)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-21）
> **活躍天數** 5 天 · **最新 commit** fix: supply GH_TOKEN to electron-builder

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/Blueturboguy07/cue/issues/16) | windows | 0 | 0 |
> | [#13](https://github.com/Blueturboguy07/cue/issues/13) | Apple issue | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # cue
> 
> **An open-source AI copilot that floats over your screen — sees what you see, hears your meetings, and stays hidden from screen shares.**
> 
> A free, self-hosted alternative to Cluely. Bring your own AI key (OpenAI · Anthropic · Google Gemini).
> 
> ---
> 
> > [!IMPORTANT]
> > **Please read this first.** cue tries to stay out of screen recordings/shares, but this is **best-effort, not guaranteed** — on macOS 15.4+ Apple can let modern capture tools see it anyway, and a phone camera always can. Using a hidden assistant during a **proctored exam, job interview, or recorded meeting** may break that platform's rules and, in some places, consent laws. cue is built for legitimate uses — your own notes, studying, accessibility, and practice. **You are responsible for how you use it.**
> >
> > On Zoom specifically, whether cue is hidden depends on one setting — **Settings → Share Screen → Screen capture mode → "Advanced capture with window filtering."**
> >
> > 
> 
> ---
> 
> 
> ## Install
> 
> There are two ways to install cue. **If you're not a developer, use Option A.**
> 
> 
> ## First launch — the 1-minute setup
> 
> When cue opens the first time, a **built-in tutorial** walks you through everything below. You can reopen it anytime by clicking the **cue logo** (top-left of the pill). Here's the same thing in writing.
> 
> 
> ## How to use it
> 
> - **`⌘` `↵` — Assist.** The do-the-smart-thing key. On a coding problem it solves it; in a conversation it tells you what to say. Works from anywhere. Change this shortcut under **Settings → Keyboard shortcuts**.
> - **`⌘` `H` — Solve what's on screen.** Screenshots a coding problem and returns the approach, code, and time/space complexity.
> - **The `▢` button** (top bar) — start/stop **listening** to a meeting. The green dot means it's live.
> - **Type a question** in the box and press `↵` to ask about your screen or conversation.
> - **Smart** — flip it on for a smarter, more thorough model; off for fast and cheap.
> - **Hide** collapses the panel to just the top bar. Drag cue around by the **top pill**. Quit with `⌘` `⇧` `X`.
> 
> The panel is see-through and click-through — the empty space around it never blocks the app behind it.
> 
> ---
> 
> 
> ## What it does
> 
> cue floats a small glass panel on top of everything. It takes **three separate inputs** — your **screen**, your **microphone**, and your **meeting audio** (what the other person says) — and uses an AI model to help you in real time.
> 
> | Feature | How to trigger | What it uses |
> |---|---|---|
> | **Assist** | `⌘` `↵` by default (configurable) or the *Assist* button | your screen + recent conversation |
> | **What should I say?** | button | meeting audio + your mic |
> | **Follow-up questions** | button | the whole conversation |
> | **Recap** | button | the whole conversation |
> | **Ask anything** | type + `↵` | your screen + conversation |
> | **Solve a coding problem** | `⌘` `H` | your screen only |
> | **Smart** toggle | pill in the box | switches to a smarter (slower) model |
> 
> It's a copilot for **live meetings** ("what do I say to that?") and **coding problems** (screenshot → full solution), and it's designed to be **invisible in screen shares** so it stays your private assistant.
> 
> ---
> 
> 
> ### Features Open for Contribution
> - [ ] Upgrade audio capture pipeline for zero-latency streaming
> - [ ] Add optional Deepgram support for ultra-fast transcription
> 
> 
> ### Option A — Download the app (easiest)
> 
> 1. Go to the [**Releases**](../../releases) page and download **`cue-mac.zip`**.
> 2. Double-click the zip to unzip it. You'll get **`cue.app`**.
> 3. Drag **`cue.app`** into your **Applications** folder.
> 4. **First open (important):** because cue is a free app without a paid Apple certificate, macOS will refuse to open it normally the first time. Do this once:
>    - **Right-click** `cue.app` → **Open** → click **Open** in the dialog.
>    - If macOS instead says **"cue is damaged and can't be opened,"** open the **Terminal** app and paste this line, then press Return:
>      ```bash
>      xattr -cr /Applications/cue.app
>      ```
>      Then double-click cue.app again. (This just tells macOS "yes, I trust this app I downloaded." It's safe.)
> 
> After that, cue opens normally forever.
> 
> 
> ### Option B — Run from source (developers)
> 
> You need [Node.js](https://nodejs.org) 18+ installed. No Xcode required.
> 
> ```bash
> git clone https://github.com/Blueturboguy07/cue.git
> cd cue
> npm install
> npm start
> ```
> 
> To build your own `cue.app`:
> ```bash
> npm run pack      # creates dist/mac-arm64/cue.app
> ```
> > Note: the packaged app is **ad-hoc signed** (no paid Apple certificate). macOS ties permission grants to the exact build, so **rebuilding resets the mic/screen permissions** — you'll grant them again. For everyday use, build once and keep it.
> 
> ---
> 
> 
> ### Step 1 — Grant two macOS permissions
> 
> cue can't help until macOS lets it see and hear. When you first use a feature, macOS will prompt you — click **Allow**. If a prompt doesn't appear, add cue manually:
> 
> - **Microphone:** System Settings → **Privacy & Security** → **Microphone** → turn on **cue**.
> - **Screen Recording:** System Settings → **Privacy & Security** → **Screen Recording** → turn on **cue**. (This one grant covers both screenshots *and* meeting audio.) macOS may ask you to **quit & reopen** cue — let it.
> 
> 
> ### Step 2 — Add your AI key (bring your own)
> 
> cue uses **your own** API key, so it's free to run (you only pay your AI provider for what you use). Click the **`...`** button in the input box (or press `⌘` `,`) to open **Settings**, pick a provider, and paste your key:
> 
> | Provider | Get a key | Notes |
> |---|---|---|
> | **OpenAI** | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | One key does everything — **but** for the *listening* features the key must have **Whisper / audio** access (a "restricted" project key that only allows chat will give a 403 on transcription). |
> | **Anthropic (Claude)** | [console.anthropic.com](https://console.anthropic.com) | Great for screen & coding help. Claude has no speech-to-text, so add an OpenAI or Gemini key too if you want the listening features. |
> | **Google Gemini** | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) | One key does chat + transcription. |
> 
> Your key is stored **only on your computer** (in `cue-data.json`) and is sent **only** to that provider. cue has no server and collects nothing.
> 
> 
> ### Step 3 — The Zoom setting (only needed for Zoom)
> 
> cue is hidden from most screen-share tools automatically — **Google Meet, Microsoft Teams, and QuickTime need nothing.** **Zoom** has a specific setting that decides whether it respects cue's "don't capture me" flag:
> 
> > **Zoom → Settings → Share Screen → Advanced → Screen capture mode → choose "Advanced capture with window filtering."**
> 
> **Why:** the *"...with window filtering"* modes tell Zoom to leave out windows that mark themselves as private — which is exactly what cue does. The **"Advanced capture without window filtering"** mode grabs the raw screen and **will show cue**, so avoid it.
> 
> ---
> 
> 
> ## How it works (under the hood)
> 
> cue is an [Electron](https://www.electronjs.org/) app. Everything runs locally except the calls to your chosen AI provider.
> 
> **The three inputs are kept completely separate:**
> - **Screen** — captured with Electron's `desktopCapturer` (full-resolution screenshots, taken only when a feature needs one).
> - **Your mic ("You")** — `getUserMedia` → downsampled to 16 kHz audio → transcribed.
> - **Meeting audio ("Them")** — `getDisplayMedia` loopback capture of your system's output audio, kept on its own channel so cue knows *who* said what.
> 
> Both audio streams are transcribed (OpenAI Whisper or Gemini) and fed, with an optional screenshot, to your AI model. Responses **stream** into the panel word-by-word.
> 
> **The invisibility** is a single macOS window flag: `setContentProtection(true)`, which sets `NSWindowSharingNone`. This asks the window server to exclude cue from screen-capture streams. It's the same mechanism DRM apps and Zoom's own toolbar use. It is **not*

## 延伸閱讀

相關概念：[[AI 助手]] · [[即時通訊]] · [[音頻處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]] · [[farzaa--clicky|farzaa/clicky]] · [[calesthio--Crucix|calesthio/Crucix]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

[GitHub](https://github.com/Blueturboguy07/cue)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Blueturboguy07--cue" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 助手","即時通訊","音頻處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Blueturboguy07--cue" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Blueturboguy07--cue");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Blueturboguy07--cue" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Blueturboguy07" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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

> **2026-07-21** — 首次收錄
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

- [[2026-07-22|2026-07-22]] — 再次上榜，704 stars
- [[2026-07-21|2026-07-21]] — 首次收錄，666 stars
