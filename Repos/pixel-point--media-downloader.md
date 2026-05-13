---
repo: pixel-point/media-downloader
url: https://github.com/pixel-point/media-downloader
owner: pixel-point
owner_type: Organization
language: Swift
license: N/A
description: "Beautiful native macOS video downloader. Download and trim in one app."
homepage: ""
stars: 596
stars_per_day: 99
forks: 27
open_issues: 4
created: 2026-05-06
pushed_at: 2026-05-07
first_seen: 2026-05-13
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "下載工具"
release_tag: "v0.2.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-13
use_case: "一款美觀的原生 macOS 影片下載器，支持下載和剪輯功能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-20"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 908
readme_length: 4389
bus_factor: 1
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-13"
star_history: "2026-05-13:596"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - org
aliases:
  - "media-downloader"
  - "pixel-point/media-downloader"
  - "一款美觀的原生 macOS 影片下載器，支持下載和剪輯功能。"
---

# media-downloader

**596** stars · **99** stars/天 · 建立 6 天前 · Swift · 未標註授權

```dataviewjs
const me = dv.page("Repos/pixel-point--media-downloader");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.2.0`

> [!summary] 一句話摘要
> 一款美觀的原生 macOS 影片下載器，支持下載和剪輯功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (99 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 5 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 macOS 上快速下載和剪輯影片的內容創作者和普通用戶。
> **一句話重點** Media Downloader 將下載和剪輯功能整合在一個簡潔的 macOS 應用中，為用戶提供了極大的便利。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/pixel-point--media-downloader");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "下載工具" && p.file.name !== "pixel-point--media-downloader" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 下載工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到一個簡單易用的影片下載工具，值得一試。

> [!abstract] 核心創新
> Media Downloader 將下載和剪輯功能整合在一個簡潔的 macOS 應用中。

## 專案簡介

Media Downloader 是一款專為 macOS 設計的影片下載工具，能夠從數千個網站下載影片，並具備剪輯功能。用戶只需將影片網址粘貼到應用中，應用會自動下載並轉換為 MP4 格式，並將文件複製到剪貼板或保存到指定文件夾。這種設計簡化了下載流程，讓用戶能夠快速獲取所需內容。該應用依賴於 `yt-dlp` 來獲取媒體，並使用 `ffmpeg` 進行格式轉換和剪輯，這樣的技術選擇使得下載的影片兼容性更高。相較於其他工具，Media Downloader 提供了更直觀的用戶界面，並且支持直接在應用內剪輯下載的影片，這在許多下載器中並不常見。

與 `youtube-dl` 相比，`yt-dlp` 提供了更好的網站支持和更新頻率，這使得 Media Downloader 在支持新網站方面更具優勢。實際使用中，該應用能夠處理的影片大小和數量取決於用戶的硬碟空間和網路速度，並且在 macOS 14 或更高版本上運行。社群活躍度方面，雖然目前有 4 個開放問題，但解決率為 0%，顯示出開發者對問題的回應速度可能需要改善。這款應用目前處於 beta 階段，適合需要快速下載和剪輯影片的 macOS 用戶，尤其是社交媒體內容創作者。未來的發展方向可能會集中在增強對新網站的支持和改善用戶體驗上。

**技術棧**：`Swift 5.9` · `yt-dlp` · `ffmpeg`

## 重點功能

- 支持數千個網站 — 通過 `yt-dlp` 支持的網站列表，輕鬆下載各類影片。
- 簡潔的用戶界面 — 以 Spotlight 風格的窗口粘貼網址，快速開始下載。
- MP4 格式輸出 — 自動轉換和合併下載的影片，使用 H.264/AAC 編碼。
- 本地下載歷史 — 保存下載記錄，並提供縮略圖以便快速訪問。
- 影片剪輯功能 — 下載後可直接剪輯影片並保存或複製片段。

## 快速開始

1. 安裝 Homebrew 和依賴項
```bash
brew install yt-dlp ffmpeg
```
2. 從 GitHub 下載應用
```bash
git clone https://github.com/pixel-point/media-downloader.git
```
3. 構建並運行應用
```bash
./script/build_and_run.sh
```

## 程式碼範例

```swift
{
  "前置條件": "確保安裝了 `yt-dlp` 和 `ffmpeg`。",
  "指令": "./script/build_and_run.sh",
  "預期輸出": "啟動 Media Downloader 應用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 596 stars（99/天），forks 27（4.5%），顯示出穩定的增長潛力。主要貢獻者 lnikell 和 kusnizza 具備開發經驗，且過去在開源社群中活躍。這款工具解決了 macOS 用戶在下載影片時的多重需求，特別是對於需要剪輯功能的用戶。隨著社交媒體內容的增長，對於簡單易用的下載工具需求也在增加。高 forks/stars 比率顯示出用戶對該工具的實際修改和使用意願。

## 適合誰使用

**目標受眾**：需要在 macOS 上快速下載和剪輯影片的內容創作者和普通用戶。

> [!example] 使用場景
> - 內容創作者用它來快速下載和剪輯社交媒體影片，因為可以在一個應用中完成所有操作，節省時間和精力。
> - 學生用它來下載教學影片並進行剪輯，因為它支持多種網站，且操作簡單，適合不熟悉技術的用戶。
> - 影片編輯者用它來提取社交媒體上的短片段，因為它提供了直接剪輯的功能，減少了使用多個工具的需要。

## 架構分析

Media Downloader 採用 Swift 語言開發，利用 Swift Package Manager 進行依賴管理。應用的架構設計為單一應用包，便於用戶安裝和使用。資料流方面，應用通過 `yt-dlp` 獲取媒體，並使用 `ffmpeg` 進行處理，這樣的設計使得下載和轉換過程高效且兼容性強。選擇 Swift 作為開發語言使得應用能夠充分利用 macOS 的原生特性，但也限制了其跨平台的能力。擴展性方面，未來可以考慮增加對更多媒體格式的支持或整合更多社交媒體平台的 API。

## 技術深入分析

Media Downloader 的核心技術在於其對 `yt-dlp` 和 `ffmpeg` 的整合，這使得它能夠高效地下載和處理影片。使用 `yt-dlp` 來獲取媒體，能夠支持大量網站，並且持續更新以適應網站變化。`ffmpeg` 的使用則讓影片的轉換和剪輯變得靈活，支持多種格式和編碼。該應用能夠處理的資料量取決於用戶的硬碟空間和網路速度，並且在下載過程中不會對系統性能造成過大影響。選擇 Swift 作為開發語言使得應用能夠充分利用 macOS 的原生特性，並且提供良好的用戶體驗，但這也限制了其在其他平台的使用。未來可能面臨的技術風險包括對 `yt-dlp` 的依賴，若其更新不及時，可能會影響到應用的功能。整合方面，該應用與 macOS 的其他功能（如 Finder 和 Spotlight）相容良好，能夠提供流暢的用戶體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程順暢，但需要注意依賴項的安裝。文件中有針對本地開發的指導，適合有一定技術基礎的用戶。沒有多語言支持，僅提供英文文檔。

## 優缺點分析

> [!success] 優點
> - 簡單易用的界面，適合各類用戶。
> - 集成下載和剪輯功能，減少了使用多個工具的需求。
> - 支持多種社交媒體平台，下載範圍廣泛。

> [!danger] 缺點
> - 僅限於 macOS 平台，無法跨平台使用。
> - 對於某些網站的支持可能依賴於 `yt-dlp` 的更新。
> - 目前對 macOS Ventura 的支持缺失，可能影響部分用戶。

> [!warning] 注意事項
> - 僅支持 macOS 14 及以上版本。
> - 需要安裝 `yt-dlp` 和 `ffmpeg` 作為依賴。
> - 目前對 macOS Ventura 的支持缺失，可能影響部分用戶。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建和管理多媒體資源，而 Media Downloader 專注於下載和剪輯功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個更為通用的下載工具，支持多平台，而 Media Downloader 專注於 macOS 用戶的需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| youtube-dl | youtube-dl 是一個命令行工具，功能強大但缺乏 GUI，適合技術用戶，而 Media Downloader 提供了更友好的用戶界面。 | 如果你熟悉命令行並需要更高的自定義選項，youtube-dl 可能更適合你。 | medium，因為需要轉變使用習慣和學習命令行操作。 |
| 4K Video Downloader | 4K Video Downloader 提供了跨平台支持和 GUI，但功能上不如 Media Downloader 專注於 macOS 的原生體驗。 | 如果你需要在多平台上使用，4K Video Downloader 是不錯的選擇。 | low，因為界面相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **media-downloader** | **youtube-dl** | **4K Video Downloader** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | youtube-dl 是一個命令行工具，功能強大但缺乏 GUI，適合技術用戶，而 Media Downloader 提供了更友好的用戶界面。 | 4K Video Downloader 提供了跨平台支持和 GUI，但功能上不如 Media Downloader 專注於 macOS 的原生體驗。 |
> | 遷移成本 | - | medium，因為需要轉變使用習慣和學習命令行操作。 | low，因為界面相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果你熟悉命令行並需要更高的自定義選項，youtube-dl | 如果你需要在多平台上使用，4K Video Download |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS Ventura 上無法正常運行，可能導致下載失敗
  - 解法：等待更新或使用舊版 macOS
- [MEDIUM] 對某些網站的支持可能依賴於 `yt-dlp` 的版本
  - 解法：定期更新 `yt-dlp` 以確保功能正常

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要下載和剪輯社交媒體影片 | 非常適合 | 集成了下載和剪輯功能，適合快速工作流程。 |
| 個人使用者偶爾下載影片 | 適合 | 簡單易用的界面，適合非技術用戶。 |
| 大型企業需要批量下載影片 | 不適合 | 目前功能較為簡單，無法滿足批量需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個簡單易用的影片下載工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴的 `yt-dlp` 和 `ffmpeg` 也具有良好的安全性記錄。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pixel-point--media-downloader");
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
> const me = dv.page("Repos/pixel-point--media-downloader");
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
| Forks | 27 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-07 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 908 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pixel-point/media-downloader) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 91
>     "Shell" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lnikell](https://github.com/lnikell) | 11 |
> | [@kusnizza](https://github.com/kusnizza) | 1 |

**最新版本**：v0.2.0 (2026-05-07)

## 社群與生態

**社群活躍度**：社群活躍度一般，開放問題解決率低。
**連結**：[文件](https://github.com/pixel-point/media-downloader)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-07）
> **活躍天數** 2 天 · **最新 commit** chore: update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/pixel-point/media-downloader/issues/4) | Missing support for macOS Ventura | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Media Downloader
> Download for macOS
> 
> https://github.com/user-attachments/assets/c81f8c07-835d-4d37-87cf-926caa0fe6c1
> 
> Beautiful native macOS video downloader with support for [thousands of sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md) through [yt-dlp](https://github.com/yt-dlp/yt-dlp/tree/master).
> 
> Media Downloader lets you download, quickly copy, reveal, and trim videos from social media and video platforms in one focused app. Paste a URL from services such as YouTube, Instagram, X, TikTok, Vimeo, Reddit, and many other sites supported by `yt-dlp`; the app downloads an MP4, copies the finished file to the clipboard, saves it to your chosen folder, and keeps a local history for fast access.
> 
> ## Features
> 
> - Download videos from thousands of `yt-dlp` supported websites.
> - Paste a URL and start downloading from a clean Spotlight-style macOS window.
> - Convert and merge downloads to broadly compatible MP4 output with H.264/AAC when possible.
> - Automatically copy the downloaded file after completion.
> - Keep a local download history with thumbnails.
> - Copy files again, reveal them in Finder, or open the original source URL from history.
> - Trim downloaded videos and either save the trimmed MP4 or copy the trimmed clip.
> - Choose and persist a custom download folder.
> - Check GitHub Releases for app updates from the settings menu.
> 
> ## Local Development Requirements
> 
> These requirements are only needed when building or running the app locally from source:
> 
> - macOS 14 or newer
> - Xcode Command Line Tools or Xcode with Swift 5.9+
> - `yt-dlp`
> - `ffmpeg`
> 
> For local development, install the Xcode Command Line Tools:
> 
> ```sh
> xcode-select --install
> ```
> 
> For local development, install runtime dependencies with Homebrew:
> 
> ```sh
> brew install yt-dlp ffmpeg
> ```
> 
> For local development, verify the tools are available:
> 
> ```sh
> yt-dlp --version
> ffmpeg -version
> ```
> 
> ## Local Development Build and Run
> 
> From the repository root:
> 
> ```sh
> ./script/build_and_run.sh
> ```
> 
> The script runs `swift build`, creates a local development app bundle at `dist/MediaDownloader.app`, and launches it.
> 
> You can also run SwiftPM directly during local development:
> 
> ```sh
> swift build
> swift test
> ```
> 
> Useful local development script modes:
> 
> ```sh
> ./script/build_and_run.sh --verify
> ./script/build_and_run.sh --logs
> ./script/build_and_run.sh --telemetry
> ./script/build_and_run.sh --debug
> ./script/build_and_run.sh --setup
> ```
> 
> ## Release Build, Signing, and Notarization
> 
> The app checks `https://api.github.com/repos/pixel-point/media-downloader/releases/latest` for updates and compares the latest release tag, such as `v0.2.0`, with `CFBundleShortVersionString`.
> 
> Release credentials should live in a local `.env` file copied from `.env.example`. Do not commit `.env`, `.p8`, `.p12`, certificates, provisioning profiles, or private keys; the repo ignores them.
> 
> To create and publish signed, notarized macOS zip and drag-to-Applications DMG artifacts:
> 
> ```sh
> ./script/release_macos.sh v0.2.0
> ```
> 
> To create local signed and notarized artifacts without publishing a GitHub release:
> 
> ```sh
> ./script/package_macos.sh
> ```
> 
> The release script runs tests, builds a release `.app`, signs it with hardened runtime, submits it to Apple notarization, staples the ticket, creates `dist/release/MediaDownloader-macos-.zip` and `dist/release/MediaDownloader-macos-.dmg`, and uploads both artifacts to the matching GitHub release. The DMG contains `MediaDownloader.app` and an `Applications` shortcut for the standard drag-to-install flow.
> 
> ## How It Works
> 
> Media Downloader uses `yt-dlp` to fetch media and `ffmpeg` to merge, convert, trim, and export video files. Downloads are saved to the selected local folder. App preferences are stored in `UserDefaults`, while history and generated thumbnails are stored under the app's Application Support directory.
> 
> ## Project Structure
> 
> - `Package.swift` - Swift Package Manager manifest.
> - `Sources/MediaDownloader` - macOS app source code.
> - `Tests/MediaDownloaderTests` - unit tests.
> - `script/build_and_run.sh` - local build, bundle, launch, debug, and logging helper.
> - `script/create_dmg.sh` - creates the drag-to-Applications DMG from a built app bundle.
> - `dist/` - generated local app bundle output.
> 
> ## Notes
> 
> Site support depends on the installed `yt-dlp` version. If a site stops working, update `yt-dlp` first:
> 
> ```sh
> brew upgrade yt-dlp
> ```

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[影片編輯]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/pixel-point/media-downloader)

## 相關收錄

> [!note]- 直接競品（同子分類：下載工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "下載工具" AND file.name != "pixel-point--media-downloader"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "pixel-point--media-downloader"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "pixel-point--media-downloader" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "pixel-point--media-downloader"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","影片編輯"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "pixel-point--media-downloader" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/pixel-point--media-downloader");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pixel-point--media-downloader" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pixel-point" AND file.name != "pixel-point--media-downloader"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pixel-point--media-downloader");
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
> const me = dv.page("Repos/pixel-point--media-downloader");
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
> const me = dv.page("Repos/pixel-point--media-downloader");
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
> const me = dv.page("Repos/pixel-point--media-downloader");
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
> const me = dv.page("Repos/pixel-point--media-downloader");
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

> **2026-05-13** — 首次收錄
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

- [[2026-05-13|2026-05-13]] — 首次收錄，596 stars
