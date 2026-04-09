---
repo: farzaa/clicky
url: https://github.com/farzaa/clicky
owner: farzaa
owner_type: User
language: Swift
license: MIT
description: ""
homepage: ""
stars: 2250
stars_per_day: 2250
forks: 413
open_issues: 25
created: 2026-04-07
pushed_at: 2026-04-08
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "語音助手"
release_tag: "v3"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "提供一個 AI 助手，能在螢幕旁邊即時協助使用者。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-12"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 11193
readme_length: 5504
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:2241,2026-04-09:2250"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
aliases:
  - "clicky"
  - "farzaa/clicky"
  - "提供一個 AI 助手，能在螢幕旁邊即時協助使用者。"
---

# clicky

**2.3k** stars · **2.3k** stars/天 · 建立 1 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/farzaa--clicky");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v3`

> [!summary] 一句話摘要
> 提供一個 AI 助手，能在螢幕旁邊即時協助使用者。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (2.3k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要即時語音助手來輔助開發的 Mac 使用者。
> **一句話重點** Clicky 的即時語音助手設計讓開發者能夠在工作時獲得即時的幫助，提升了開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "語音助手" && p.file.name !== "farzaa--clicky" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 語音助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到即時語音助手的效果，值得一試。

> [!abstract] 核心創新
> Clicky 提供即時語音助手，能在使用者的螢幕旁邊即時協助，並透過多個 API 進行互動。

## 專案簡介

Clicky 是一個 AI 助手，設計為在使用者的螢幕旁邊提供即時協助。它的核心功能是透過語音互動，使用者可以與 Clicky 進行對話，並請求它執行各種任務。使用者只需在終端機中輸入指令，Clicky 會自動克隆專案並引導使用者完成本地環境的設置。這樣的設計使得使用者能夠快速上手，並且能夠隨時與 Clicky 互動，進行功能擴展或錯誤修正。這個工具的賣點在於其即時性和互動性，讓使用者感覺像有一位實體老師在身邊。技術上，Clicky 使用 Swift 開發，並依賴多個 API 進行語音識別和合成，透過 Cloudflare Worker 來保護 API 金鑰。

這樣的架構設計使得 Clicky 能夠在不暴露敏感資訊的情況下運行。與其他類似工具相比，如 0xGF/boneyard 和 AlpinDale/parsync，Clicky 提供了更直觀的使用者介面和即時的語音互動，這使得它在使用體驗上有明顯的優勢。使用者需要 macOS 14.2 以上版本和 Xcode 15 以上版本，這可能限制了某些使用者的使用，但對於 Mac 使用者來說，安裝和設置過程相對簡單。這個專案目前仍在快速發展中，未來可能會增加更多功能和平台支援。對於需要即時語音助手的開發者和使用者來說，Clicky 是一個值得一試的選擇。

**技術棧**：`Swift` · `Node.js 18+` · `Cloudflare Worker`

## 重點功能

- 即時語音互動 — 使用者可以透過語音與 Clicky 進行對話，獲取即時反饋。
- Cloudflare Worker 支援 — API 金鑰透過 Cloudflare Worker 保護，避免敏感資訊洩漏。
- 多平台 API 整合 — 支援多個 API，如 Anthropic 和 AssemblyAI，提供語音識別和合成。
- 簡單的本地設置 — 使用者只需執行簡單的指令即可完成環境設置。
- 菜單欄應用 — Clicky 以菜單欄應用的形式運行，方便使用者隨時訪問。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/farzaa/clicky.git
```
2. 安裝 Cloudflare Worker 依賴
```bash
cd worker && npm install
```
3. 部署 Worker
```bash
npx wrangler deploy
```
4. 在 Xcode 中打開專案
```bash
open leanring-buddy.xcodeproj
```
5. 運行應用
```bash
在 Xcode 中按 Cmd + R
```

## 程式碼範例

```swift
# 前置條件
# 使用 Claude Code 進行設置
Hi Claude.
Clone https://github.com/farzaa/clicky.git into my current directory.
Then read the CLAUDE.md. I want to get Clicky running locally on my Mac.
Help me set up everything — the Cloudflare Worker with my own API keys, the proxy URLs, and getting it building in Xcode. Walk me through it.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 2250 stars（2250/天），forks 413（18.4%），這顯示出強烈的社群興趣。作者 farzaa 以其在 AI 領域的經驗推出這個專案，解決了使用者在開發過程中缺乏即時協助的痛點。之前的方案多數是靜態的文檔或不夠互動的工具，無法提供即時反饋。這個專案的快速增長可能與其在社群媒體上的宣傳有關，特別是原始推文引起了廣泛的關注。技術上，Clicky 的設計也受益於 Cloudflare Worker 的普及，讓開發者能夠輕鬆管理 API 金鑰的安全性。

## 適合誰使用

**目標受眾**：需要即時語音助手來輔助開發的 Mac 使用者。

> [!example] 使用場景
> - 前端開發者用它來即時獲取 API 使用建議，因為 Clicky 能透過語音互動快速提供解決方案。
> - 新手程式設計師用它來學習 Swift，因為 Clicky 能在他們編寫程式碼時提供即時的指導和建議。
> - 產品經理用它來快速查詢功能需求，因為 Clicky 可以即時回應問題並提供相關資料。

## 架構分析

Clicky 的架構設計為一個菜單欄應用，使用 Swift 開發，並包含兩個 NSPanel 窗口。應用的核心功能是透過 WebSocket 傳輸音訊，並將轉錄結果和螢幕截圖發送給 Claude。這樣的設計使得 Clicky 能夠在不暴露 API 金鑰的情況下運行，因為所有 API 請求都經由 Cloudflare Worker 處理。

這個架構的選擇使得 Clicky 能夠在使用者的螢幕旁邊即時提供幫助，並能夠快速反應使用者的需求。選擇使用 Swift 而非其他語言是因為其對 macOS 的原生支援，這樣能夠更好地整合系統功能。擴展性方面，Clicky 目前的設計能夠輕鬆添加新功能，但隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在同時處理多個請求時。

整體而言，這個架構在即時性和安全性上做出了良好的平衡。

## 技術深入分析

Clicky 的核心技術機制是透過 WebSocket 實現即時語音互動，並使用多個 API 進行語音識別和合成。這樣的設計使得 Clicky 能夠在使用者的螢幕旁邊即時提供幫助，並能夠快速反應使用者的需求。效能方面，Clicky 能夠處理多個請求，但隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在同時處理多個請求時。選擇 Swift 作為開發語言是因為其對 macOS 的原生支援，這樣能夠更好地整合系統功能。

依賴樹的複雜度中等，主要依賴於 Cloudflare Worker 來保護 API 金鑰，這降低了供應鏈風險。技術風險方面，Clicky 可能在擴展時面臨性能瓶頸，特別是在高並發的情況下。整合方面，Clicky 能夠與主流的開發工具鏈相容，但在設置過程中需要一定的學習成本，特別是對於新手來說。整體而言，Clicky 的設計在即時性和安全性上做出了良好的平衡，適合需要即時語音助手的開發者使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的設置步驟和範例，讓新手能夠輕鬆上手。安裝過程相對順暢，但需要注意 API 金鑰的設置。文件中提供了清晰的指導，對於新手來說非常友好。整體而言，花 30 分鐘能夠成功運行 Clicky。

## 優缺點分析

> [!success] 優點
> - 即時語音互動，提升使用者體驗。
> - 安全性高，API 金鑰不會暴露。
> - 簡單的設置過程，適合新手使用。
> - 多平台 API 整合，功能強大。

> [!danger] 缺點
> - 僅支援 macOS，限制了使用者範圍。
> - 需要多個 API 金鑰，設置繁瑣。
> - 社群活躍度尚需提升，Issue 解決率低。
> - 對於大型專案可能會面臨性能瓶頸。

> [!warning] 注意事項
> - 僅支援 macOS 14.2+ 和 Xcode 15+。
> - 需要多個 API 金鑰，設置過程相對繁瑣。
> - 目前不支援 Windows 平台，可能限制部分使用者。
> - 社群活躍度尚需提升，開放的 Issue 數量較多。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的語音助手功能，但缺乏即時互動的設計，使用者體驗較差。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於資料同步，並不具備 Clicky 的語音互動能力，適合不同的使用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的語音助手功能，但缺乏即時互動的設計，使用者體驗較差。 | 如果你需要一個更簡單的語音助手，且不需要即時反饋，可以考慮 Boneyard。 | medium，因為需要重新設置 API 和環境。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於資料同步，並不具備 Clicky 的語音互動能力，適合不同的使用場景。 | 如果你的需求主要是資料同步，而非語音助手功能，Parsync 會是更好的選擇。 | low，因為功能範圍不同，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clicky** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供類似的語音助手功能，但缺乏即時互動的設計，使用者體驗較差。 | Parsync 專注於資料同步，並不具備 Clicky 的語音互動能力，適合不同的使用場景。 |
> | 遷移成本 | - | medium，因為需要重新設置 API 和環境。 | low，因為功能範圍不同，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你需要一個更簡單的語音助手，且不需要即時反饋，可以考慮  | 如果你的需求主要是資料同步，而非語音助手功能，Parsync |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 14.2 上可能會遇到兼容性問題，特別是在使用 ScreenCaptureKit 時。
  - 解法：確保更新到最新的 macOS 版本以獲得最佳兼容性。
- [MEDIUM] API 金鑰設置過程繁瑣，容易出錯。
  - 解法：仔細按照 README 中的指示操作，並檢查每一步。
- [MEDIUM] 在高並發情況下，可能會出現性能瓶頸。
  - 解法：考慮減少同時請求數量，或優化 API 使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發環境 | 非常適合 | 即時語音助手能夠提升團隊的開發效率，特別是在快速迭代的情況下。 |
| 大型企業的核心產品開發 | 不適合 | 目前的 alpha 階段可能不穩定，且性能瓶頸會影響開發進度。 |
| 個人開發者的 side project | 適合 | 提供即時的幫助，能夠提升個人開發的效率。 |
| 教育機構的教學環境 | 普通 | 雖然 Clicky 提供了即時反饋，但可能需要更多的功能來滿足教學需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時語音助手的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Clicky 本身不需要高權限運行，但需要 API 金鑰來訪問外部服務。確保這些金鑰的安全性，並避免在公共代碼中暴露。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
| Forks | 413 |
| Open Issues | 25 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-08 |
| 建立日期 | 2026-04-07 |
| Repo 大小 | 10.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/farzaa/clicky) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 95
>     "Shell" : 4
>     "TypeScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@farzaa](https://github.com/farzaa) | 18 |

**最新版本**：v3 (2026-04-07)

> [!info]- Release Notes
> - Fixed issues with websocket.

## 社群與生態

**社群活躍度**：社群活躍度尚需提升，開放的 Issue 數量較多。
**連結**：[文件](https://www.clicky.so/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-08）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/farzaa/clicky/issues/21) | add Windows version | 3 | 3 |
> | [#22](https://github.com/farzaa/clicky/issues/22) | Anthropic API key committed | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Hi, this is Clicky.
> It's an AI teacher that lives as a buddy next to your cursor. It can see your screen, talk to you, and even point at stuff. Kinda like having a real teacher next to you.
> 
> Download it [here](https://www.clicky.so/) for free.
> 
> Here's the [original tweet](https://x.com/FarzaTV/status/2041314633978659092) that kinda blew up for a demo for more context.
> 
> This is the open-source version of Clicky for those that want to hack on it, build their own features, or just see how it works under the hood.
> 
> ## Get started with Claude Code
> 
> The fastest way to get this running is with [Claude Code](https://docs.anthropic.com/en/docs/claude-code).
> 
> Once you get Claude running, paste this:
> 
> ```
> Hi Claude.
> 
> Clone https://github.com/farzaa/clicky.git into my current directory.
> 
> Then read the CLAUDE.md. I want to get Clicky running locally on my Mac.
> 
> Help me set up everything — the Cloudflare Worker with my own API keys, the proxy URLs, and getting it building in Xcode. Walk me through it.
> ```
> 
> That's it. It'll clone the repo, read the docs, and walk you through the whole setup. Once you're running you can just keep talking to it — build features, fix bugs, whatever. Go crazy.
> 
> ## Manual setup
> 
> If you want to do it yourself, here's the deal.
> 
> ### Prerequisites
> 
> - macOS 14.2+ (for ScreenCaptureKit)
> - Xcode 15+
> - Node.js 18+ (for the Cloudflare Worker)
> - A [Cloudflare](https://cloudflare.com) account (free tier works)
> - API keys for: [Anthropic](https://console.anthropic.com), [AssemblyAI](https://www.assemblyai.com), [ElevenLabs](https://elevenlabs.io)
> 
> ### 1. Set up the Cloudflare Worker
> 
> The Worker is a tiny proxy that holds your API keys. The app talks to the Worker, the Worker talks to the APIs. This way your keys never ship in the app binary.
> 
> ```bash
> cd worker
> npm install
> ```
> 
> Now add your secrets. Wrangler will prompt you to paste each one:
> 
> ```bash
> npx wrangler secret put ANTHROPIC_API_KEY
> npx wrangler secret put ASSEMBLYAI_API_KEY
> npx wrangler secret put ELEVENLABS_API_KEY
> ```
> 
> For the ElevenLabs voice ID, open `wrangler.toml` and set it there (it's not sensitive):
> 
> ```toml
> [vars]
> ELEVENLABS_VOICE_ID = "your-voice-id-here"
> ```
> 
> Deploy it:
> 
> ```bash
> npx wrangler deploy
> ```
> 
> It'll give you a URL like `https://your-worker-name.your-subdomain.workers.dev`. Copy that.
> 
> ### 2. Run the Worker locally (for development)
> 
> If you want to test changes to the Worker without deploying:
> 
> ```bash
> cd worker
> npx wrangler dev
> ```
> 
> This starts a local server (usually `http://localhost:8787`) that behaves exactly like the deployed Worker. You'll need to create a `.dev.vars` file in the `worker/` directory with your keys:
> 
> ```
> ANTHROPIC_API_KEY=sk-ant-...
> ASSEMBLYAI_API_KEY=...
> ELEVENLABS_API_KEY=...
> ELEVENLABS_VOICE_ID=...
> ```
> 
> Then update the proxy URLs in the Swift code to point to `http://localhost:8787` instead of the deployed Worker URL while developing. Grep for `clicky-proxy` to find them all.
> 
> ### 3. Update the proxy URLs in the app
> 
> The app has the Worker URL hardcoded in a few places. Search for `your-worker-name.your-subdomain.workers.dev` and replace it with your Worker URL:
> 
> ```bash
> grep -r "clicky-proxy" leanring-buddy/
> ```
> 
> You'll find it in:
> - `CompanionManager.swift` — Claude chat + ElevenLabs TTS
> - `AssemblyAIStreamingTranscriptionProvider.swift` — AssemblyAI token endpoint
> 
> ### 4. Open in Xcode and run
> 
> ```bash
> open leanring-buddy.xcodeproj
> ```
> 
> In Xcode:
> 1. Select the `leanring-buddy` scheme (yes, the typo is intentional, long story)
> 2. Set your signing team under Signing & Capabilities
> 3. Hit **Cmd + R** to build and run
> 
> The app will appear in your menu bar (not the dock). Click the icon to open the panel, grant the permissions it asks for, and you're good.
> 
> ### Permissions the app needs
> 
> - **Microphone** — for push-to-talk voice capture
> - **Accessibility** — for the global keyboard shortcut (Control + Option)
> - **Screen Recording** — for taking screenshots when you use the hotkey
> - **Screen Content** — for ScreenCaptureKit access
> 
> ## Architecture
> 
> If you want the full technical breakdown, read `CLAUDE.md`. But here's the short version:
> 
> **Menu bar app** (no dock icon) with two `NSPanel` windows — one for the control panel dropdown, one for the full-screen transparent cursor overlay. Push-to-talk streams audio over a websocket to AssemblyAI, sends the transcript + screenshot to Claude via streaming SSE, and plays the response through ElevenLabs TTS. Claude can embed `[POINT:x,y:label:screenN]` tags in its responses to make the cursor fly to specific UI elements across multiple monitors. All three APIs are proxied through a Cloudflare Worker.
> 
> ## Project structure
> 
> ```
> leanring-buddy/          # Swift source (yes, the typo stays)
>   CompanionManager.swift    # Central state machine
>   CompanionPanelView.swift  # Menu bar panel UI
>   ClaudeAPI.swift           # Claude streaming client
>   ElevenLabsTTSClient.swift # Text-to-speech playback
>   OverlayWindow.swift       # Blue cursor overlay
>   AssemblyAI*.swift         # Real-time transcription
>   BuddyDictation*.swift     # Push-to-talk pipeline
> worker/                  # Cloudflare Worker proxy
>   src/index.ts              # Three routes: /chat, /tts, /transcribe-token
> CLAUDE.md                # Full architecture doc (agents read this)
> ```
> 
> ## Contributing
> 
> PRs welcome. If you're using Claude Code, it already knows the codebase — just tell it what you want to build and point it at `CLAUDE.md`.
> 
> Got feedback? DM me on X [@farzatv](https://x.com/farzatv).

## 延伸閱讀

相關概念：[[語音合成]] · [[即時通訊]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[yetone--voice-input-src|yetone/voice-input-src]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/farzaa/clicky)

## 相關收錄

> [!note]- 直接競品（同子分類：語音助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "語音助手" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "farzaa--clicky"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "farzaa--clicky" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["語音合成","即時通訊","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "farzaa--clicky" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/farzaa--clicky");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "farzaa--clicky" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "farzaa" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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

> **2026-04-09** — 首次收錄
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

- [[2026-04-09|2026-04-09]] — 首次收錄，2.2k stars
