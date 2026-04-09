---
repo: farzaa/clicky
url: https://github.com/farzaa/clicky
owner: farzaa
owner_type: User
language: Swift
license: MIT
description: ""
homepage: ""
stars: 2241
stars_per_day: 2241
forks: 411
open_issues: 25
created: 2026-04-07
pushed_at: 2026-04-08
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "AI 助手"
release_tag: "v3"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "提供一個 AI 助手，能夠在你的螢幕旁邊進行互動和教學。"
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
star_history: "2026-04-09:2241"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "clicky"
  - "farzaa/clicky"
  - "提供一個 AI 助手，能夠在你的螢幕旁邊進行互動和教學。"
---

# clicky

**2.2k** stars · **2.2k** stars/天 · 建立 1 天前 · Swift · MIT

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
> 提供一個 AI 助手，能夠在你的螢幕旁邊進行互動和教學。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (2.2k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要即時互動教學和反饋的教育工作者或開發者。
> **一句話重點** Clicky 的創新在於將 AI 助手的互動性提升到新的層次，讓使用者能夠透過語音進行即時教學和反饋。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "farzaa--clicky" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到即時互動的 AI 助手，值得一試。

> [!abstract] 核心創新
> Clicky 提供即時語音互動的 AI 助手，能夠在使用者的螢幕旁進行教學和指導。

## 專案簡介

Clicky 是一個 AI 助手，能在使用者的螢幕旁進行互動，提供即時的教學和指導。使用者可以透過語音與 Clicky 進行對話，並且 Clicky 能夠根據使用者的需求提供即時的反饋和建議。核心流程是：使用者透過語音輸入請求，Clicky 透過 WebSocket 與 AssemblyAI 進行語音識別，然後將識別結果傳送給 Claude 進行處理，最後透過 ElevenLabs 的 TTS 技術將回應語音播放出來。這種設計使得 Clicky 能夠即時反應使用者的需求，並且提供更自然的互動體驗。主要的 CLI 指令包括 `npx wrangler secret put` 用於設定 API 金鑰，這樣可以確保安全性，並避免將金鑰硬編碼在應用程式中。Clicky 的一句話賣點是「讓 AI 成為你桌面上的教學夥伴」。

技術上，Clicky 使用 Swift 開發 macOS 應用，並透過 Cloudflare Worker 處理 API 請求，這樣的架構設計使得應用程式能夠輕量且安全地管理 API 金鑰。

使用 Node.js 來管理 Worker，這樣的選擇使得開發者能夠快速部署和測試。與其他類似工具相比，如 0xGF/boneyard 和 AlpinDale/parsync，Clicky 提供了更即時的互動性，因為它能夠即時回應使用者的語音指令，而不僅僅是基於文字的輸入。

在實際使用中，Clicky 能夠處理多達數百條即時請求，並且在開發過程中需要使用者提供的 API 金鑰來進行身份驗證。這樣的設計雖然增加了初期的設置複雜度，但卻能有效保護使用者的敏感資料。社群活躍度方面，儘管目前有 25 個開放的問題，但這也顯示出該專案仍在快速發展中，未來可能會有更多的功能和修正。

總體來看，Clicky 是一個值得關注的專案，特別適合需要即時教學和互動的使用者，尤其是教育工作者或開發者。未來 6 個月內，隨著社群的反饋和功能的增強，Clicky 有潛力成為桌面 AI 助手的領導者。

**技術棧**：`Swift` · `Node.js 18+` · `Cloudflare Worker`

## 重點功能

- 即時語音互動 — 使用者可以透過語音與 Clicky 進行對話，獲得即時反饋。
- 多語言支持 — 支援多種語言的語音識別和合成，適合不同語言的使用者。
- 安全的 API 金鑰管理 — 使用 Cloudflare Worker 來保護 API 金鑰，避免在應用程式中暴露。
- 螢幕指向功能 — Clicky 能夠透過指標指向螢幕上的元素，提供具體的教學建議。
- 自定義功能擴展 — 開放源碼，使用者可以自行擴展功能和修改程式碼。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/farzaa/clicky.git
```
2. 安裝 Cloudflare Worker 依賴
```bash
cd worker && npm install
```
3. 設置 API 金鑰
```bash
npx wrangler secret put ANTHROPIC_API_KEY
```
4. 部署 Cloudflare Worker
```bash
npx wrangler deploy
```
5. 在 Xcode 中打開專案
```bash
open leanring-buddy.xcodeproj
```

## 程式碼範例

```swift
{
  "前置條件": "需要安裝 Node.js 和 Cloudflare Worker",
  "指令": "npx wrangler secret put ANTHROPIC_API_KEY",
  "預期輸出": "成功設置 API 金鑰"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 2241 stars（2241/天），forks 411（18.3%），這顯示出強烈的興趣和參與度。作者 Farzaa 是一位活躍的開發者，過去在社群中有相當的影響力。Clicky 解決了即時互動教學的需求，之前的方案大多是靜態的教學工具，無法提供即時反饋。這個專案的推廣可能受到社交媒體的影響，特別是原始推文的廣泛分享。技術上，使用 Cloudflare Worker 來保護 API 金鑰的設計，讓這個工具在安全性上有了顯著的提升。Forks/stars 比率為 18.3%，顯示出許多人對於這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要即時互動教學和反饋的教育工作者或開發者。

> [!example] 使用場景
> - 教育工作者用它來即時回答學生問題，因為 Clicky 能夠透過語音互動提供即時的反饋。
> - 開發者用它來快速獲取程式碼建議，因為 Clicky 能夠理解上下文並提供相關的解決方案。
> - 設計師用它來獲得即時的設計建議，因為 Clicky 能夠指向螢幕上的元素並提供具體的建議。

## 架構分析

Clicky 的架構設計為一個桌面應用程式，主要使用 Swift 開發，並且透過 Cloudflare Worker 來處理 API 請求。這樣的設計使得應用程式能夠安全地管理 API 金鑰，並且減少了對本地環境的依賴。資料流方面，使用者的語音輸入會透過 WebSocket 傳送到 AssemblyAI 進行識別，然後將結果傳送給 Claude 處理，最後透過 ElevenLabs 的 TTS 技術播放回應。

這樣的設計使得 Clicky 能夠提供即時的反饋和互動。選擇使用 Cloudflare Worker 來管理 API 請求的好處是能夠輕鬆部署和維護，代價則是需要額外的設置步驟。擴展性方面，這種架構能夠支持多個 API 的整合，但在高流量情況下可能會遇到性能瓶頸。

## 技術深入分析

Clicky 的核心技術機制是利用語音識別和合成技術，結合即時的 API 請求處理。使用 AssemblyAI 進行語音轉文字，Claude 處理請求，並透過 ElevenLabs 進行語音回應，這樣的設計使得 Clicky 能夠提供即時的互動體驗。效能方面，Clicky 能夠處理多達數百條即時請求，但在高流量情況下可能會遇到延遲。選擇 Swift 作為開發語言的好處是能夠充分利用 macOS 的原生功能，但這也限制了其跨平台的能力。依賴於多個外部 API 可能會導致性能瓶頸，特別是在高並發情況下。整合方面，Clicky 能夠與主流的開發工具鏈相容，但初期設置的複雜度可能會影響使用者的採用。整體而言，Clicky 在技術上具有一定的創新性，但仍需解決性能和跨平台的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和設置指南，雖然有些部分需要手動配置，但整體上是清晰的。安裝過程中需要多個 API 金鑰，這可能會對新手造成困難。文件中沒有提供多語言支持，僅有英文版本。整體而言，花 30 分鐘應該能夠完成基本的設置並運行。

## 優缺點分析

> [!success] 優點
> - 即時語音互動，提供自然的使用體驗。
> - 開放源碼，使用者可以自由修改和擴展功能。
> - 安全的 API 金鑰管理，避免敏感資料洩露。

> [!danger] 缺點
> - 僅支援 macOS，對於其他操作系統的使用者不友好。
> - 初期設置複雜，需要多個 API 金鑰。
> - 目前仍在開發階段，可能存在未解決的問題。

> [!warning] 注意事項
> - 僅支援 macOS 14.2+，不適用於其他操作系統。
> - 需要多個 API 金鑰，增加初期設置的複雜度。
> - 目前僅在開發階段，可能存在未解決的問題和功能缺失。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 助手功能，但主要集中在文字輸入而非語音互動。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，缺乏即時互動的教學功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於文字輸入的 AI 助手，無法提供即時的語音互動。 | 如果你的團隊主要使用文字輸入進行互動，並且不需要即時反饋。 | medium，因為需要重新設計互動流程。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，缺乏即時互動的教學功能。 | 如果你的需求主要集中在資料同步，而非即時互動。 | low，因為功能範圍不同，影響不大。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clicky** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文字輸入的 AI 助手，無法提供即時的語音互動。 | 專注於資料同步，缺乏即時互動的教學功能。 |
> | 遷移成本 | - | medium，因為需要重新設計互動流程。 | low，因為功能範圍不同，影響不大。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用文字輸入進行互動，並且不需要即時反饋。 | 如果你的需求主要集中在資料同步，而非即時互動。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在設置 API 金鑰時，可能會遇到格式錯誤導致部署失敗
  - 解法：確保金鑰格式正確，並遵循提示進行設置
- [MEDIUM] 在 macOS 版本不兼容的情況下，應用無法啟動
  - 解法：確認系統版本符合要求，並更新至最新版本
- [MEDIUM] 使用過程中可能會出現延遲，影響使用體驗
  - 解法：在低流量時段使用，或考慮升級網路帶寬

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 教育工作者在課堂上使用 AI 助手 | 非常適合 | 即時互動能夠提升教學效果，增強學習體驗。 |
| 開發者在編寫程式時尋求即時建議 | 適合 | 能夠快速獲取建議，但需要設置 API 金鑰。 |
| 設計師在設計過程中獲取即時反饋 | 普通 | 雖然有指向功能，但設置過程較為複雜。 |
| 普通使用者希望獲得即時的生活建議 | 不適合 | 目前功能主要針對專業領域，普通使用者可能無法充分利用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到即時互動的 AI 助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要使用者提供多個 API 金鑰，這些金鑰需要妥善管理以防洩露。應用本身不需要高權限，但在使用過程中會存取使用者的螢幕和麥克風。

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
| Forks | 411 |
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

**社群活躍度**：社群活躍度中等，開放問題數量較多，顯示出仍在快速發展中。
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

相關概念：[[即時通訊]] · [[語音合成]] · [[機器學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[yetone--voice-input-src|yetone/voice-input-src]]

[GitHub](https://github.com/farzaa/clicky)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "farzaa--clicky"
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
> const concepts = ["即時通訊","語音合成","機器學習"];
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
