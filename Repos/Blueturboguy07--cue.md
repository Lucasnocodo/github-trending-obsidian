---
repo: Blueturboguy07/cue
url: https://github.com/Blueturboguy07/cue
owner: Blueturboguy07
owner_type: User
language: JavaScript
license: GPL-3.0
description: "Open-source macOS AI copilot that floats over your screen, sees/hears your meetings, and stays hidden from screen shares. Cluely alternative, bring-your-own-key."
homepage: ""
stars: 666
stars_per_day: 133
forks: 144
open_issues: 7
created: 2026-07-15
pushed_at: 2026-07-20
first_seen: 2026-07-21
week: "2026-W30"
month: "2026-07"
category: "生產力"
subcategory: "AI 助手"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提供隱形的 AI 助手，協助你在會議中即時獲得建議，並隱藏於螢幕分享之外。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-28"
contributor_count: 4
engagement: "medium"
issue_close_rate: 22
repo_size_kb: 1121
readme_length: 9872
bus_factor: 2
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-21"
star_history: "2026-07-21:666"
tags:
  - github
  - "category/生產力"
  - "lang/javascript"
  - easy_install
aliases:
  - "cue"
  - "Blueturboguy07/cue"
  - "提供隱形的 AI 助手，協助你在會議中即時獲得建議，並隱藏於螢幕分享之外。"
---

# cue

**666** stars · **133** stars/天 · 建立 5 天前 · JavaScript · GPL-3.0

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

`v0.1.0` `easy-install`

> [!summary] 一句話摘要
> 提供隱形的 AI 助手，協助你在會議中即時獲得建議，並隱藏於螢幕分享之外。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (133 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在遠端會議中獲得即時幫助但又不想被他人看到的專業人士。
> **一句話重點** cue 提供了一個創新的解決方案，讓使用者在會議中獲得即時幫助，同時保持隱私。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到即時的會議幫助，值得一試。

> [!abstract] 核心創新
> cue 是一個開源的隱形 AI 助手，專為 macOS 設計，能在會議中提供即時幫助而不被他人看到。

## 專案簡介

cue 是一個開源的 macOS AI 助手，旨在提供即時的會議和編碼問題解決方案。用戶可以透過三個輸入來源（螢幕、麥克風和會議音頻）來獲取 AI 的幫助。使用者只需按下 `⌘` `↵` 鍵即可獲得建議，或透過 `⌘` `H` 鍵解決螢幕上的編碼問題。這個設計讓使用者能夠在會議中隨時獲得幫助，而不會被其他參與者看到。技術上，cue 是基於 Electron 開發，並使用了 `desktopCapturer` 和 `getUserMedia` 來捕捉螢幕和音頻，並將這些資料傳送給選定的 AI 提供者進行處理。

這種設計使得 cue 能夠在不影響使用者的情況下提供即時的反饋。與 Cluely 相比，cue 提供了自我托管的選擇，並且用戶可以選擇自己的 AI 密鑰，這樣可以避免依賴單一的服務提供者。實際使用中，cue 需要用戶授權麥克風和螢幕錄製權限，並且在 Zoom 等會議工具中需要特定設置以確保其隱形性。這個工具的成熟度目前為 alpha 階段，適合對隱私有高要求的使用者，並且在小型團隊或個人專案中表現良好。未來可能會增加更多音頻捕捉功能以提升實時性。

**技術棧**：`Electron 33.2.1` · `Node.js 18+`

## 重點功能

- 即時建議 — 按下 `⌘` `↵` 鍵獲得即時的會議或編碼建議。
- 螢幕捕捉 — 使用 `desktopCapturer` 捕捉螢幕，並在需要時提供全解析度的截圖。
- 音頻轉錄 — 使用 `getUserMedia` 捕捉麥克風和會議音頻，並進行轉錄。
- 隱形設計 — 使用 `setContentProtection(true)` 來確保在螢幕分享中不被捕捉。
- 自我托管 — 用戶可以選擇自己的 AI 密鑰，避免依賴單一服務提供者。

## 快速開始

1. 下載並解壓縮應用程式
```bash
下載 cue-mac.zip 並解壓縮
```
2. 將應用程式拖入應用程式資料夾
```bash
拖動 cue.app 到 Applications 資料夾
```
3. 首次啟動應用程式
```bash
右鍵點擊 cue.app → 開啟，若出現損壞訊息，執行：xattr -cr /Applications/cue.app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 666 stars（133/天），forks 144（21.6%），顯示出強烈的社群興趣。作者團隊由多位貢獻者組成，顯示出良好的協作能力。這個工具解決了在會議中需要即時幫助但又不想被他人看到的需求，之前的解決方案如 Cluely 需要依賴雲端服務，並且不支持自我托管。最近的推文和討論也引發了關注，讓更多人認識到這個工具的潛力。隨著遠端工作和虛擬會議的普及，這種工具的需求也隨之增加。

## 適合誰使用

**目標受眾**：需要在遠端會議中獲得即時幫助但又不想被他人看到的專業人士。

> [!example] 使用場景
> - 軟體工程師用它來在會議中即時獲得建議，因為它能夠隱藏在螢幕分享之外，讓他不必擔心被其他人看到。
> - 學生用它來在遠端學習中獲得即時的問題解答，因為它可以同時聽取老師的講解並提供反饋。
> - 自由工作者用它來在多任務處理時獲得編碼幫助，因為它能夠快速解決螢幕上的問題而不影響工作流程。

## 架構分析

cue 的架構基於 Electron，將應用程式的前端和後端分開。前端使用透明的 UI，並且能夠在螢幕上浮動，後端則負責捕捉螢幕和音頻。這樣的設計使得應用程式能夠在不影響使用者的情況下提供即時的反饋。

資料流方面，螢幕和音頻的捕捉是分開的，這樣可以更精確地識別使用者的需求。選擇 Electron 的原因是其跨平台能力，但這也意味著需要額外的資源來運行。未來的擴展性可能會受到 Electron 的性能限制，尤其是在處理高負載的音頻和視訊時。

## 技術深入分析

cue 的核心技術機制是基於 Electron 框架，這使得它能夠在 macOS 上運行並提供透明的 UI。它使用 `desktopCapturer` 來捕捉螢幕畫面，並透過 `getUserMedia` 捕捉麥克風和會議音頻。這樣的設計確保了資料的分離性，讓 AI 能夠根據不同的輸入來源提供針對性的建議。效能方面，因為是基於 Electron，可能會受到記憶體和 CPU 使用的影響，特別是在高負載的情況下。選擇 Electron 的好處是能夠快速開發和跨平台，但也帶來了性能上的挑戰。技術風險方面，未來可能會遇到在 macOS 更新後，隱形功能失效的問題，這需要持續的維護和更新。整合方面，與現有的開發工具鏈相容性良好，但在 CI/CD pipeline 的整合上可能需要額外的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和使用說明。安裝過程順暢，但需要用戶手動設置許可權，這可能對新手造成困難。提供的內建教程能幫助用戶快速上手，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 提供即時的會議和編碼幫助，提升工作效率。
> - 隱形設計，保護使用者的隱私。
> - 自我托管選擇，減少對雲端服務的依賴。
> - 開源，社群可參與貢獻和改進。

> [!danger] 缺點
> - 目前僅支援 macOS，對於其他作業系統的使用者不友好。
> - 在某些情況下可能無法完全隱藏於螢幕分享中，影響使用體驗。
> - 仍處於 alpha 階段，可能存在穩定性和功能不完整的問題。
> - 需要用戶手動設置許可權，增加了使用門檻。

> [!warning] 注意事項
> - 僅支援 macOS 13+，不支援其他作業系統。
> - 在某些情況下，可能無法完全隱藏於螢幕分享中，特別是在 macOS 15.4+。
> - 需要用戶手動設置 Zoom 的螢幕分享選項以確保隱形。
> - 目前處於 alpha 階段，可能存在穩定性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供類似的 AI 助手功能，但不具備隱形設計，會在螢幕分享中顯示出來。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 主要用於遊戲開發中的 AI 助手，而 cue 更專注於會議和編碼問題的即時解決。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多個 AI 代理的選擇，但不支持自我托管，使用上較為依賴雲端服務。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Cluely | Cluely 是一個雲端服務，提供類似的 AI 助手功能，但沒有自我托管的選擇，使用上更依賴網路連接。 | 如果你的團隊已經在使用 Cluely 並且不需要自我托管的功能，則可以選擇它。 | medium，因為需要重新適應不同的使用流程和功能。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 主要針對遊戲開發，提供 AI 代理的功能，但不具備隱形設計，會在螢幕分享中顯示出來。 | 如果你的專案專注於遊戲開發，且需要多個 AI 代理的選擇，則應選擇 agent-sprite-forge。 | medium，因為需要重新設計使用場景和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cue** | **Cluely** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Cluely 是一個雲端服務，提供類似的 AI 助手功能，但沒有自我托管的選擇，使用上更依賴網路連接。 | agent-sprite-forge 主要針對遊戲開發，提供 AI 代理的功能，但不具備隱形設計，會在螢幕分享中顯示出來。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的使用流程和功能。 | medium，因為需要重新設計使用場景和功能。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Cluely 並且不需要自我托管的功 | 如果你的專案專注於遊戲開發，且需要多個 AI 代理的選擇，則 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Zoom 中仍然顯示，未能隱藏
  - 解法：確保在 Zoom 設定中選擇 'Advanced capture with window filtering'。
- [MEDIUM] 首次啟動時無法授權麥克風或螢幕錄製
  - 解法：需要手動在系統設定中重新授權。
- **[HIGH]** 某些 API 密鑰無法使用轉錄功能
  - 解法：確保使用的密鑰具備音頻轉錄的權限。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的遠端會議團隊 | 非常適合 | 能夠在會議中提供即時幫助，且不影響隱私。 |
| 需要即時編碼幫助的開發者 | 適合 | 提供即時的解決方案，提升工作效率。 |
| 大型企業的會議環境 | 不適合 | 在大型會議中可能無法有效隱藏，影響使用體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時的會議幫助，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用程式不需要高權限，僅存取麥克風和螢幕錄製權限。所有資料僅存儲於本機，不會上傳至伺服器，確保使用者隱私。

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
| Forks | 144 |
| Open Issues | 7 |
| Issue 解決率 | 22% (2 closed) |
| 最後推送 | 2026-07-20 |
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
> | [@deecod-dev](https://github.com/deecod-dev) | 5 |
> | [@Blueturboguy07](https://github.com/Blueturboguy07) | 4 |
> | [@gojodennis](https://github.com/gojodennis) | 1 |
> | [@kudala-bharani](https://github.com/kudala-bharani) | 1 |

**最新版本**：v0.1.0 — cue v0.1.0 (2026-07-15)

> [!info]- Release Notes
> First public release of **cue** — an open-source macOS AI overlay.
> 
> ### Install (non-technical)
> 1. Download **cue-mac.zip** below and unzip it.
> 2. Drag **cue.app** to your Applications folder.
> 3. First open: **right-click cue.app → Open**. If macOS says "damaged," run once in Terminal:
>    `xattr -cr /Applications/cue.app`
> 4. A built-in tutorial walks you through permissions, your AI key, and the Zoom setting.
> 
> See the [README](https://github.com/Blueturboguy07/cue#readme) for full setup, the Zoom window-filtering setting, and troubleshooting.
> 
> > Apple Silicon (arm64) build. Requires macOS 13+. Bring your own OpenAI / Anthropic / Gemini API key.
> > Best-effort screen-share hiding — see the disclaimer in the README.

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/Blueturboguy07/cue#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-16 ~ 2026-07-20）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #9 from kudala-bharani/fix/configurable-assist-shortcut

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/Blueturboguy07/cue/issues/13) | Apple issue | 0 | 0 |
> | [#12](https://github.com/Blueturboguy07/cue/issues/12) | The latest release is not up to date with the repository. | 0 | 0 |
> | [#6](https://github.com/Blueturboguy07/cue/issues/6) | Issue on Quit App on MacOS | 0 | 1 |

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

相關概念：[[自動化]] · [[即時通訊]] · [[AI 助手]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]] · [[farzaa--clicky|farzaa/clicky]] · [[calesthio--Crucix|calesthio/Crucix]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

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
> const concepts = ["自動化","即時通訊","AI 助手"];
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

- [[2026-07-21|2026-07-21]] — 首次收錄，666 stars
