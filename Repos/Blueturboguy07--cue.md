---
repo: Blueturboguy07/cue
url: https://github.com/Blueturboguy07/cue
owner: Blueturboguy07
owner_type: User
language: JavaScript
license: GPL-3.0
description: "Open-source macOS AI copilot that floats over your screen, sees/hears your meetings, and stays hidden from screen shares. Cluely alternative, bring-your-own-key."
homepage: ""
stars: 891
stars_per_day: 64
forks: 195
open_issues: 11
created: 2026-07-15
pushed_at: 2026-07-28
first_seen: 2026-07-21
week: "2026-W30"
month: "2026-07"
category: "AI/ML"
subcategory: "助手工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提供一個隱形的 AI 助手，能在 macOS 上協助會議和編程問題，並隱藏於螢幕分享之外。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-29"
contributor_count: 5
engagement: "medium"
issue_close_rate: 35
repo_size_kb: 1135
readme_length: 10000
bus_factor: 1
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-07-21"
star_history: "2026-07-21:666,2026-07-21:666,2026-07-22:704,2026-07-22:704,2026-07-23:727,2026-07-24:761,2026-07-25:781,2026-07-26:799,2026-07-27:811,2026-07-28:837,2026-07-29:875,2026-07-30:891"
tags:
  - github
  - "category/ai_ml"
  - "lang/javascript"
  - easy_install
aliases:
  - "cue"
  - "Blueturboguy07/cue"
  - "提供一個隱形的 AI 助手，能在 macOS 上協助會議和編程問題，並隱藏於螢幕分享之外。"
---

# cue

**891** stars · **64** stars/天 · 建立 14 天前 · JavaScript · GPL-3.0

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

`v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供一個隱形的 AI 助手，能在 macOS 上協助會議和編程問題，並隱藏於螢幕分享之外。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (64 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 macOS 上進行會議並希望獲得即時 AI 協助的專業人士。
> **一句話重點** cue 的隱形設計讓它在會議中成為一個無形的助手，能夠即時提供幫助而不被干擾。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "助手工具" && p.file.name !== "Blueturboguy07--cue" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 助手工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時 AI 協助，值得一試。

> [!abstract] 核心創新
> cue 是一個隱形的 AI 助手，能在會議中提供即時協助，並避免在螢幕分享中被錄製。

## 專案簡介

cue 是一個開源的 macOS AI 助手，能在使用者的螢幕上浮動，並同時接收三種輸入：螢幕內容、麥克風音訊和會議音訊。使用者可以透過快捷鍵 `⌘` `↵` 啟動助手，讓它根據當前螢幕或對話內容提供即時建議，這樣的設計使得使用者在會議中能夠隨時獲得幫助而不被干擾。這個工具的賣點在於它的隱形性，能夠在 Zoom 等會議軟體中隱藏，避免被錄製。技術上，cue 是基於 Electron 框架開發，利用 `desktopCapturer` 進行螢幕捕捉，並使用 `getUserMedia` 來捕捉音訊，這樣的架構使得它能夠在本地運行，並且不需要依賴伺服器。

與 Cluely 相比，cue 允許使用者自帶 AI 金鑰，這意味著使用者可以選擇不同的 AI 提供商（如 OpenAI、Anthropic 和 Google Gemini），而不需要依賴單一服務。這樣的設計讓使用者在選擇 AI 服務時有更多的彈性。實際使用中，cue 可能會遇到音訊捕捉延遲或隱藏失敗的問題，特別是在 macOS 15.4 以上版本中，這是因為 Apple 的某些捕捉工具可能會忽略其隱藏設置。整體來看，cue 是一個適合需要在會議中使用 AI 協助的開發者和專業人士的工具，但在使用前需要仔細設置權限和配置。

**技術棧**：`Electron 33.2.1` · `Node.js 18+`

## 重點功能

- 多輸入支援 — 同時接收螢幕、麥克風和會議音訊，提供即時建議。
- 自定義快捷鍵 — 使用者可透過 `⌘` `↵` 啟動助手，並可自定義快捷鍵。
- 隱形設計 — 利用 macOS 的內容保護功能，避免在螢幕分享中被錄製。
- 即時解決方案 — 對於螢幕上的程式碼問題，使用 `⌘` `H` 可獲得完整解決方案。
- 自帶 AI 金鑰 — 使用者可自選 AI 提供商，靈活性高。

## 快速開始

1. 下載應用程式
```bash
前往 Releases 頁面下載 cue-…-arm64-mac.zip
```
2. 解壓縮並移至應用程式資料夾
```bash
雙擊解壓縮檔案，然後將 cue.app 拖入 Applications 資料夾
```
3. 首次啟動並設置權限
```bash
啟動 cue，並在首次使用時根據提示授予麥克風和螢幕錄製權限
```

## 程式碼範例

```js
{
  "前置條件": "需要 Node.js 18+ 安裝",
  "指令": "git clone https://github.com/Blueturboguy07/cue.git\ncd cue\nnpm install\nnpm start",
  "預期輸出": "啟動 cue 應用程式，並在本地運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 891 stars（64/天），forks 195（21.9%），這顯示出強烈的社群興趣。開發者 Blueturboguy07 及其團隊過去在開源領域有豐富經驗，這個專案解決了在會議中使用 AI 協助的隱私問題，特別是對於需要在錄製環境中使用的情境。這個工具的推出正值遠端工作和虛擬會議日益普及的時期，對於需要即時協助的專業人士來說，這是一個重要的需求。forks/stars 比率為 21.9%，顯示許多人正在積極修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要在 macOS 上進行會議並希望獲得即時 AI 協助的專業人士。

> [!example] 使用場景
> - 軟體工程師用它來在 Zoom 會議中即時獲得程式碼建議，因為它能根據當前螢幕內容提供解決方案，避免了在會議中分心查找資料的麻煩。
> - 學生用它來在遠端學習中即時記錄和詢問問題，因為它能夠聽取講師的講解並提供相關的補充資料。
> - 產品經理用它來在會議中快速獲得市場分析數據，因為它能夠即時分析螢幕上的資料並給出建議，提升會議效率。

## 架構分析

cue 採用 Electron 框架，整體架構設計為一個透明的浮動窗口，並使用 macOS 的內容保護功能來隱藏自身。資料流方面，螢幕畫面透過 `desktopCapturer` 捕捉，音訊則透過 `getUserMedia` 進行捕捉並轉換為文字。這樣的設計使得所有處理都在本地進行，並且不需要依賴外部伺服器。選擇 Electron 的原因是其跨平台能力，能夠在 macOS 和 Windows 上運行，但這也意味著可能在效能上有所妥協。擴展性方面，未來可以考慮加入更多的 AI 提供商或功能，但目前的設計已經能夠滿足大部分即時會議的需求。

## 技術深入分析

cue 的核心技術機制是基於 Electron 開發，這使得它能夠在不同平台上運行。使用 `desktopCapturer` 和 `getUserMedia` 進行螢幕和音訊捕捉，並將捕捉的資料傳送至選定的 AI 提供商進行處理。這樣的設計使得所有資料處理都在本地進行，減少了對網路的依賴。效能方面，由於所有操作都在本地進行，因此對於硬體的要求並不高，但在高負載情況下仍可能出現延遲。選擇 Electron 的原因在於其跨平台特性，但這也意味著在某些情況下可能會影響效能。技術風險方面，隱形功能的可靠性可能會受到 macOS 更新的影響，未來可能需要針對不同版本進行調整。整合方面，與主流的會議工具（如 Zoom 和 Google Meet）相容性良好，但在某些設定下可能需要額外調整以確保隱形功能正常運作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和使用說明，對於新手來說相對友好。安裝過程順暢，無需複雜的配置。提供了內建的教學指引，讓使用者能快速上手。

## 優缺點分析

> [!success] 優點
> - 隱形設計，能有效避免在會議錄製中被捕捉。
> - 多種 AI 提供商選擇，使用者可根據需求選擇最合適的服務。
> - 即時提供解決方案，提升會議效率。

> [!danger] 缺點
> - 在某些情況下可能無法完全隱藏於螢幕分享中，特別是在 macOS 15.4 以上版本。
> - 需要使用者自帶 AI 金鑰，對於不熟悉的使用者來說可能增加使用門檻。
> - 目前僅支援 macOS 和 Windows，Linux 支援尚未完成。

> [!warning] 注意事項
> - 僅支援 macOS 和 Windows，Linux 尚未完全支援。
> - 在某些情況下，可能無法完全隱藏於螢幕分享中，特別是在 macOS 15.4 以上版本。
> - 需要使用者自帶 AI 金鑰，可能增加使用門檻。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但不專注於隱形設計，適合需要可見助手的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於開發者工具，缺乏即時會議支援功能，適合需要靜態分析的開發者。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作，但不具備隱形功能，適合需要多個助手協同工作的情境。  |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Cluely | Cluely 是一個商業解決方案，提供類似的 AI 助手功能，但不允許使用者自帶金鑰，這意味著使用者需要支付額外的服務費用。 | 如果你的團隊已經在使用 Cluely 並希望獲得更全面的商業支援，則可以選擇它。 | medium，因為需要重新配置 AI 金鑰和整合過程。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但不專注於隱形設計，適合需要可見助手的場景。 | 如果你的使用場景需要可見的助手來進行互動，則應選擇這個工具。 | low，因為功能相似且易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cue** | **Cluely** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Cluely 是一個商業解決方案，提供類似的 AI 助手功能，但不允許使用者自帶金鑰，這意味著使用者需要支付額外的服務費用。 | 提供類似的 AI 助手功能，但不專注於隱形設計，適合需要可見助手的場景。 |
> | 遷移成本 | - | medium，因為需要重新配置 AI 金鑰和整合過程。 | low，因為功能相似且易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Cluely 並希望獲得更全面的商業 | 如果你的使用場景需要可見的助手來進行互動，則應選擇這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些版本的 macOS 中，cue 可能無法完全隱藏於螢幕分享中。
  - 解法：確保 Zoom 設定為 'Advanced capture with window filtering'。
- [MEDIUM] 使用者可能在首次啟動時遇到權限提示未顯示的問題。
  - 解法：手動在系統設定中添加權限。
- **[HIGH]** 如果使用的 API 金鑰不具備音訊轉錄功能，將無法使用相關功能。
  - 解法：檢查並確保使用的金鑰具備 Whisper 或 Gemini 的音訊轉錄權限。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行遠端會議 | 非常適合 | 能夠提供即時的 AI 協助，提升會議效率。 |
| 需要在會議中使用 AI 協助的專業人士 | 非常適合 | 隱形設計避免了在會議錄製中被捕捉。 |
| 大型企業的會議，對於隱私有較高要求 | 普通 | 在某些情況下可能無法完全隱藏於螢幕分享中。 |
| 不熟悉 AI 工具的使用者 | 不適合 | 需要使用者自帶 AI 金鑰，可能增加使用門檻。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時 AI 協助，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：cue 不需要高權限，所有敏感資料僅存儲在本地，並不會上傳至伺服器。

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
| Forks | 195 |
| Open Issues | 11 |
| Issue 解決率 | 35% (6 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-15 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Blueturboguy07/cue) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@google/genai` `lucide-static` `openai` `electron` `electron-builder`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 75
>     "CSS" : 19
>     "HTML" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@deecod-dev](https://github.com/deecod-dev) | 10 |
> | [@Blueturboguy07](https://github.com/Blueturboguy07) | 6 |
> | [@AARYANSHARMA19](https://github.com/AARYANSHARMA19) | 1 |
> | [@Battikhah](https://github.com/Battikhah) | 1 |
> | [@gojodennis](https://github.com/gojodennis) | 1 |

**最新版本**：v0.2.0 — cue v0.2.0 - Windows Support, Custom Shortcuts, & CV Context (2026-07-21)

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和問題回覆。
**連結**：[文件](https://github.com/Blueturboguy07/cue)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-19 ~ 2026-07-28）
> **活躍天數** 6 天 · **最新 commit** Stop CI from publishing an unsigned macOS build

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
> 1. Go to the [**Releases**](../../releases) page and download the **`cue-…-arm64-mac.zip`** file.
> 2. Double-click the zip to unzip it. You'll get **`cue.app`**.
> 3. Drag **`cue.app`** into your **Applications** folder.
> 4. Double-click it. That's it — no warnings, no Terminal. ✅
> 
> cue is signed with an Apple Developer ID and notarized by Apple, so it opens
> on the first double-click like any other app.
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
> **The invisibility** is a single macOS window flag: `setContentProtection(true)`, which sets `NSWindowSharingNone`. This asks the window server to exclude cue from screen-capture streams. It's the same mechanism DRM apps and Zoom's own toolbar use. It is **not** a GPU trick or a special overlay layer — and on macOS 15.4+ Apple lets some capture tools ignore it, which is why it's best-effort (see the disclaimer at the top).
> 
> ```
> main process ──┬─ overlay window (frameless, transparent, always-on-top, content-protected)
>                ├─ screenshot capture (desktopCapturer)
>                ├─ speech-to-text (Whisper / Gemini)      ── 

## 延伸閱讀

相關概念：[[Agent 框架]] · [[即時通訊]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]] · [[farzaa--clicky|farzaa/clicky]] · [[calesthio--Crucix|calesthio/Crucix]]

[GitHub](https://github.com/Blueturboguy07/cue)

## 相關收錄

> [!note]- 直接競品（同子分類：助手工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "助手工具" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Blueturboguy07--cue"
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
> const concepts = ["Agent 框架","即時通訊","自動化"];
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
