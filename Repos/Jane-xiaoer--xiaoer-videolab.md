---
repo: Jane-xiaoer/xiaoer-videolab
url: https://github.com/Jane-xiaoer/xiaoer-videolab
owner: Jane-xiaoer
owner_type: User
language: JavaScript
license: MIT
description: "One click on the toolbar grabs the current page's video into ~/Downloads — local yt-dlp daemon, 1800+ sites. 小耳抓视频：一键把当前页视频抓到本地。"
homepage: ""
stars: 561
stars_per_day: 19
forks: 83
open_issues: 1
created: 2026-06-04
pushed_at: 2026-06-07
first_seen: 2026-06-08
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "視頻下載"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-08
use_case: "一鍵將當前頁面視頻下載到本地，支持1800多個網站。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 849
readme_length: 9998
bus_factor: 1
last_release_days: 30
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-08"
star_history: "2026-06-08:467,2026-06-08:467,2026-06-09:482,2026-06-09:482,2026-06-10:493,2026-06-10:493,2026-06-11:504,2026-06-12:511,2026-06-13:513,2026-06-14:516,2026-06-15:518,2026-06-16:520,2026-06-17:522,2026-06-18:523,2026-06-19:523,2026-06-20:525,2026-06-21:525,2026-06-22:525,2026-06-23:527,2026-06-24:529,2026-06-25:531,2026-06-26:530,2026-06-27:543,2026-06-28:546,2026-06-29:548,2026-06-30:549,2026-07-01:550,2026-07-02:551,2026-07-03:558,2026-07-04:561"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - "topic/bilibili"
  - "topic/chrome_extension"
  - "topic/launchd"
  - "topic/macos"
  - "topic/manifest_v3"
aliases:
  - "xiaoer-videolab"
  - "Jane-xiaoer/xiaoer-videolab"
  - "一鍵將當前頁面視頻下載到本地，支持1800多個網站。"
---

# xiaoer-videolab

**561** stars · **19** stars/天 · 建立 29 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.1`

`bilibili` `chrome-extension` `launchd` `macos` `manifest-v3` `privacy-friendly` `video-downloader` `youtube-dl` `yt-dlp`

> [!summary] 一句話摘要
> 一鍵將當前頁面視頻下載到本地，支持1800多個網站。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (19 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 27 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要方便下載視頻的普通用戶，特別是對隱私有較高要求的人士
> **一句話重點** Xiaoer VideoLab 的設計理念是將視頻下載過程本地化，這不僅提升了用戶的隱私保護，還簡化了操作流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻下載" && p.file.name !== "Jane-xiaoer--xiaoer-videolab" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，獲得簡單易用的視頻下載工具，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新點在於將視頻下載過程完全本地化，減少了隱私風險。

## 專案簡介

Xiaoer VideoLab 透過一個簡單的瀏覽器擴展，將當前頁面上的視頻下載到本地，依賴於一個本地的 yt-dlp 守護進程。用戶只需點擊工具欄按鈕，擴展會將當前頁面的 URL 發送到本地守護進程，然後由 yt-dlp 下載視頻到指定的下載目錄（預設為 ~/Downloads）。這種設計的好處是下載過程完全在本地進行，減少了隱私風險，並且用戶可以隨時審核下載的內容。最關鍵的指令是 `curl http://127.0.0.1:7788/health` 用於檢查守護進程是否運行。這個工具的賣點在於其簡單易用和強大的兼容性，支持超過 1800 個視頻網站，包括 YouTube 和 Bilibili。

**技術棧**：`JavaScript` · `Python` · `Shell` · `CSS` · `PowerShell` · `HTML`

## 重點功能

- 一鍵下載 — 點擊工具欄按鈕即可將當前頁面視頻下載到本地
- 支持 1800+ 網站 — 包括 YouTube、Bilibili、Twitter 等
- 本地守護進程 — 下載過程完全在本地進行，無需上傳任何數據
- 自動更新 — yt-dlp 每週自動更新，確保兼容性
- 簡單配置 — 透過環境變數輕鬆設置下載參數

## 快速開始

1. 安裝 Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. 安裝 yt-dlp 和 ffmpeg
```bash
brew install yt-dlp ffmpeg
```
3. 克隆專案並安裝
```bash
git clone https://github.com/Jane-xiaoer/xiaoer-videolab.git && cd xiaoer-videolab && ./scripts/install.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天內累積 561 stars（每天約 19 stars），forks 數量為 83（14.8%），顯示出相對活躍的社群參與。Jane-xiaoer 是這個專案的主要貢獻者，過去在開源社群中有一定的影響力。這個工具解決了許多視頻下載工具的隱私問題，因為它不需要過多的權限，並且所有下載操作都在本地進行。最近的 GitHub Actions 更新和安全加固措施進一步提升了其可靠性。

## 適合誰使用

**目標受眾**：需要方便下載視頻的普通用戶，特別是對隱私有較高要求的人士

> [!example] 使用場景
> - 學生用它來下載在線課程視頻，因為可以輕鬆獲取學習資源而不需要擔心隱私問題
> - 內容創作者用它來下載社交媒體上的視頻片段，因為它支持多種平台，方便後期剪輯
> - 普通用戶用它來保存喜愛的視頻，因為只需一鍵操作，無需複雜的設置

## 架構分析

Xiaoer VideoLab 的架構由一個本地的 Python 守護進程和一個 Chrome 擴展組成。守護進程使用 Python 的標準庫 `http.server` 來監聽本地請求，並將 URL 發送給 yt-dlp 進行下載。這種設計使得所有下載操作都在本地進行，避免了對用戶隱私的潛在威脅。

選擇使用本地守護進程而非雲端服務的好處是用戶可以完全控制下載過程，但代價是需要用戶手動安裝和配置。擴展的簡單性使得用戶可以快速上手，但也可能限制了更高級的功能。整體而言，這個架構適合需要高隱私保護的用戶，但在某些情況下可能需要更多的配置和調整。

## 技術深入分析

Xiaoer VideoLab 的核心技術在於其本地守護進程，這個守護進程使用 Python 標準庫的 `http.server` 來處理請求，並將 URL 發送給 yt-dlp 進行下載。這種設計使得所有的下載操作都在用戶的本地機器上進行，避免了將數據上傳到雲端的風險。守護進程的性能依賴於 Python 的 I/O 處理能力，對於大多數用戶來說，這樣的性能是足夠的。選擇使用本地守護進程而非雲端服務的好處是用戶可以完全控制下載過程，但代價是需要用戶手動安裝和配置。這個工具的依賴樹相對簡單，主要依賴於 Python 和 yt-dlp，這使得它在安裝和維護上相對輕鬆。技術風險方面，未來如果 yt-dlp 停止更新，將會影響到這個工具的長期使用。整合到現有的開發環境中也相對容易，因為它的設計不會與主流的開發工具鏈產生衝突。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和配置選項。安裝過程相對順暢，但需要注意依賴的安裝。文件目前僅提供英文版本，可能對非英語用戶造成一定困難。整體而言，對於有基本命令行經驗的用戶來說，花 30 分鐘能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合所有技術水平的用戶
> - 強大的網站支持，涵蓋主流視頻平台
> - 下載過程完全本地化，保護用戶隱私
> - 自動更新功能，確保長期使用的穩定性

> [!danger] 缺點
> - 需要安裝多個依賴，對新手有一定學習曲線
> - 不支持 DRM 受限內容的下載
> - 某些網站的支持可能不穩定，依賴於 yt-dlp 的更新
> - 目前僅支持 macOS 和 Windows，Linux 用戶無法使用

> [!warning] 注意事項
> - 僅支援 macOS 和 Windows 10/11
> - 不支持 DRM 保護的視頻下載
> - 某些網站（如微博、知乎）不推薦使用，因為無法獲取單一視頻的 URL
> - 需要安裝 Homebrew 和其他依賴，對新手可能有一定學習曲線

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | yt-dlp 是底層的視頻下載工具，提供更高的靈活性和配置選項，但沒有 GUI，使用上較為複雜。 |
| [youtube-dl/youtube-dl](https://github.com/youtube-dl/youtube-dl) | youtube-dl 是 yt-dlp 的前身，功能相似但更新頻率較低，支持的網站數量較少。 |
| [jdownloader/jdownloader](https://github.com/jdownloader/jdownloader) | JDownloader 是一個完整的下載管理器，支持多種文件類型，但相對較重，並且需要更多的配置。 |
| [4kdownload/4k-video-downloader](https://github.com/4kdownload/4k-video-downloader) | 4K Video Downloader 提供 GUI 界面，適合不熟悉命令行的用戶，但功能和網站支持範圍有限。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | yt-dlp 是一個命令行工具，提供更高的靈活性和配置選項，但沒有 GUI，使用上較為複雜。 | 如果你的團隊需要高度自定義的下載選項，並且不介意使用命令行工具，則應選擇 yt-dlp。 | medium，因為需要轉換到命令行操作，並且配置會有所不同。 |
| [youtube-dl/youtube-dl](https://github.com/youtube-dl/youtube-dl) | youtube-dl 是 yt-dlp 的前身，功能相似但更新頻率較低，支持的網站數量較少。 | 如果你需要一個成熟的工具且不介意較少的更新，youtube-dl 可能是合適的選擇。 | low，因為兩者的命令行參數相似，轉換相對容易。 |
| [jdownloader/jdownloader](https://github.com/jdownloader/jdownloader) | JDownloader 是一個完整的下載管理器，支持多種文件類型，但相對較重，並且需要更多的配置。 | 如果你需要一個功能全面的下載管理器，並且不介意較高的資源消耗，則應選擇 JDownloader。 | high，因為 JDownloader 的使用方式和配置與本專案有很大不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaoer-videolab** | **yt-dlp** | **youtube-dl** | **jdownloader** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | yt-dlp 是一個命令行工具，提供更高的靈活性和配置選項，但沒有 GUI，使用上較為複雜。 | youtube-dl 是 yt-dlp 的前身，功能相似但更新頻率較低，支持的網站數量較少。 | JDownloader 是一個完整的下載管理器，支持多種文件類型，但相對較重，並且需要更多的配置。 |
> | 遷移成本 | - | medium，因為需要轉換到命令行操作，並且配置會有所不同。 | low，因為兩者的命令行參數相似，轉換相對容易。 | high，因為 JDownloader 的使用方式和配置與本專案有很大不同。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高度自定義的下載選項，並且不介意使用命令行工 | 如果你需要一個成熟的工具且不介意較少的更新，youtube- | 如果你需要一個功能全面的下載管理器，並且不介意較高的資源消耗 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網站上，視頻可能無法下載，因為需要特定的登錄憑證
  - 解法：確保在配置中設置正確的瀏覽器以提取登錄 cookie
- [MEDIUM] 如果守護進程未啟動，將無法下載視頻
  - 解法：檢查守護進程是否運行，使用 curl 命令確認
- **[HIGH]** 某些網站的視頻可能因為 DRM 保護而無法下載
  - 解法：避免使用受 DRM 保護的網站，尋找其他可下載的內容

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的視頻內容創作 | 非常適合 | 簡單易用，能快速獲取所需視頻素材 |
| 需要大量下載視頻的教育機構 | 適合 | 支持多種網站，方便獲取教學資源 |
| 個人用戶偶爾下載視頻 | 普通 | 雖然簡單，但需要安裝依賴，對新手有一定挑戰 |
| 需要高頻率下載的商業用戶 | 不適合 | 可能需要更穩定的解決方案，且不支持 DRM 內容 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，獲得簡單易用的視頻下載工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，所有操作均在本地進行，並且不存取敏感資料。依賴的 yt-dlp 也經過廣泛使用，安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Xiaoer VideoLab 最常與 Chromium 基礎的瀏覽器搭配使用，特別是在 macOS 環境中，透過 `launchd` 啟動守護進程。用戶可以在 Chrome 擴展頁面手動加載擴展，這樣的設計使得它能夠輕鬆融入現有的開發環境。與主流的 CI/CD 工具（如 GitHub Actions）相容，能夠在開發流程中進行自動化測試。整合的摩擦點主要在於依賴的安裝和配置，對於不熟悉命令行的用戶來說，可能需要額外的幫助。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Xiaoer VideoLab 出現之前，許多視頻下載工具都需要用戶提供過多的權限，並且經常涉及到隱私問題。這些工具通常依賴於雲端服務，導致用戶的數據可能被泄露。隨著對隱私的重視增加，Xiaoer VideoLab 提供了一個本地化的解決方案，讓用戶可以在不擔心隱私的情況下下載視頻。

這個工具的出現反映了用戶對於簡單、安全的視頻下載需求的增長，未來可能會看到更多類似的工具出現。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本命令行操作
- 了解視頻下載的基本概念

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：收集反饋並進行調整。

**成功指標**：成功下載的視頻數量和用戶滿意度

> [!warning] 退出計畫
> 如果需要退出，所有配置都可以手動刪除，並且不會影響其他系統設置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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
| Forks | 83 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-04 |
| Repo 大小 | 849 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Jane-xiaoer/xiaoer-videolab) |
| Topics | `bilibili` `chrome-extension` `launchd` `macos` `manifest-v3` `privacy-friendly` `video-downloader` `youtube-dl` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 37
>     "Python" : 33
>     "Shell" : 11
>     "CSS" : 8
>     "PowerShell" : 7
>     "HTML" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jane-xiaoer](https://github.com/Jane-xiaoer) | 31 |
> | [@ttmouse](https://github.com/ttmouse) | 2 |
> | [@jzq1212](https://github.com/jzq1212) | 1 |

**最新版本**：v1.0.1 — v1.0.1 — Security hardening + CI 🔒 (2026-06-04)

> [!info]- Release Notes
> 安全加固 + 持续集成 · Security hardening + CI 🔒
> 
> ### 🔒 安全 / Security
> - **杜绝偷偷下载（drive-by download）**：`/download` 现在会拒绝任何带 `http(s)` `Origin` 头的请求——你访问的恶意网页的 JavaScript 再也没法背着你让 daemon 下文件。扩展（`chrome-extension://`）和命令行调用（无 Origin）不受影响。
> - `/download` now rejects requests carrying an `http(s)` `Origin` header, blocking drive-by downloads from malicious web pages. Extension and CLI calls are unaffected.
> 
> ### ✅ 持续集成 / CI
> - 新增 GitHub Actions：每次 push 自动跑代码语法检查（Python / bash / JS / JSON）+ macOS 上真实启动 daemon 的冒烟测试（含安全闸门校验）。
> - GitHub Actions now lints the code and smoke-tests the daemon (boot + endpoint behavior, including the Origin guard) on every push.
> 
> ### 📖 文档 / Docs
> - 说明：更改 `VIDEOLAB_PORT` 时需同步修改扩展的端口。
> - Note that changing `VIDEOLAB_PORT` also requires editing the extension.
> 
> ---
> 
> 升级方式 / Upgrade: `git pull && ./scripts/install.sh`
> 
> MIT © 2026 Jane（小耳 / Xiaoer）

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和修復。
**連結**：[文件](https://github.com/Jane-xiaoer/xiaoer-videolab/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-07）
> **活躍天數** 2 天 · **最新 commit** feat: yt-dlp 每周自动更新 (launchd) + README 标注微博/知乎不推荐

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/Jane-xiaoer/xiaoer-videolab/issues/5) | 安装报错 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🎬 Xiaoer VideoLab
> 
> 
> ## Installation — step by step
> 
> First time? Follow every step below. It takes about 5 minutes and you only do it once.
> 
> 
> ### Part A · Install the engine (one-time)
> 
> This tool is a friendly button in front of [`yt-dlp`](https://github.com/yt-dlp/yt-dlp), the open-source
> downloader that does the real work. So you install that first.
> 
> **A1.** Open the **Terminal** app. (Press `⌘ Space`, type `Terminal`, hit Enter.)
> 
> **A2.** Install **Homebrew** (a package manager for Mac). If you already have it, skip to A3.
> Paste this into Terminal and press Enter, then follow its prompts:
> 
> ```bash
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> ```
> 
> **A3.** Install `yt-dlp` and `ffmpeg`:
> 
> ```bash
> brew install yt-dlp ffmpeg
> ```
> 
> > `ffmpeg` matters — without it some sites give you audio-only or low quality, because the video and
> > audio come as separate streams that `ffmpeg` merges back together.
> 
> 
> ### Part B · Install Xiaoer VideoLab
> 
> **B1.** Still in Terminal, paste these three lines:
> 
> ```bash
> git clone https://github.com/Jane-xiaoer/xiaoer-videolab.git
> cd xiaoer-videolab
> ./scripts/install.sh
> ```
> 
> **B2.** When it works, the last lines you see will look like this:
> 
> ```
> ✓ Daemon running at http://127.0.0.1:7788
>   Log: ~/Library/Logs/xiaoer-videolab.log
> 
> Next: load the browser extension
>   1. Open chrome://extensions/
>   ...
> ```
> 
> That means the background downloader is installed and will start automatically every time you log in.
> You never touch the Terminal again.
> 
> 
> # uninstall the service
> ./scripts/uninstall.sh
> ```
> 
> > 🔄 **The yt-dlp engine auto-updates weekly** (a `launchd` job, Sundays ~4am — log: `~/Library/Logs/xiaoer-videolab-ytdlp-update.log`), so fast-moving sites keep working without you doing anything. Run `bash scripts/auto-update-ytdlp.sh` any time to update it now. (Code updates to VideoLab itself stay manual via `./scripts/update.sh`.)
> 
> 
> # example: 4K, pull login cookies from Chrome, brand the filenames
> VIDEOLAB_MAX_HEIGHT=2160 VIDEOLAB_COOKIES_BROWSER=chrome VIDEOLAB_PREFIX="小耳-" ./scripts/install.sh
> ```
> 
> 
> ## Configuration
> 
> All optional — set them and re-run `./scripts/install.sh` to bake them into the service:
> 
> | Variable | Default | What it does |
> |---|---|---|
> | `VIDEOLAB_PORT` | `7788` | daemon port — ⚠️ if you change it, also edit `extension/background.js` (`DAEMON`) **and** `extension/manifest.json` (`host_permissions`) to the same port, or the button can't reach the daemon |
> | `VIDEOLAB_DOWNLOADS` | `~/Downloads` | where files land |
> | `VIDEOLAB_YT_DLP` | auto-detect | path to the `yt-dlp` binary (auto-detect prefers a `yt-dlp-nightly` build if one is installed — see FAQ on `HTTP Error 412`) |
> | `VIDEOLAB_PREFIX` | _(none)_ | filename prefix, e.g. `小耳-` |
> | `VIDEOLAB_MAX_HEIGHT` | `1080` | max video height (set `2160` for 4K) |
> | `VIDEOLAB_COOKIES_BROWSER` | _(off)_ | pull cookies from a browser (`chrome`/`brave`/`firefox`/`edge`/`safari`) for **login-gated / private** videos |
> | `VIDEOLAB_APP_NAME` | `Xiaoer VideoLab` | name in notifications |
> 
> ```bash
> 
> # self-contained nightly binary (macOS) — VideoLab picks it up automatically, no config needed
> mkdir -p ~/.local/bin
> curl -L -o ~/.local/bin/yt-dlp-nightly \
>   https://github.com/yt-dlp/yt-dlp-nightly-builds/releases/latest/download/yt-dlp_macos
> chmod +x ~/.local/bin/yt-dlp-nightly
> 
> ## Why
> 
> Browser video downloaders are a swamp of sketchy extensions that beg for "read everything on every site"
> permissions and phone home. Xiaoer VideoLab takes the opposite bet:
> 
> - **The extension does almost nothing.** It only reads the *current tab's URL* when you click it, and POSTs
>   that one string to `127.0.0.1`. No page scraping, no content scripts, no remote servers.
> - **The download happens locally.** A small Python daemon hands the URL to `yt-dlp`, the
>   battle-tested open-source downloader. All the smarts live in a tool you can audit.
> - **Nothing leaves your machine** except the request `yt-dlp` makes to fetch the video you asked for.
> 
> 
> ### One click. Any video. Local.
> 
> Press one toolbar button and the video on the current page lands in your `~/Downloads`.
> Powered by a tiny local [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) daemon — **1800+ sites** out of the box
> (YouTube · Bilibili · X/Twitter · TikTok · Vimeo · Twitch · Weibo …).
> 
> [](https://github.com/Jane-xiaoer/xiaoer-videolab/actions/workflows/ci.yml)
> [](LICENSE)
> 
> [](README.md)&nbsp;
> [](README.zh-CN.md)
> 
> ---
> 
> 
> ## How it works
> 
> ```
>  ┌─────────────────────┐   click    ┌──────────────────────────┐         ┌──────────┐
>  │  Browser toolbar     │ ─────────► │  daemon @ 127.0.0.1:7788 │ ──────► │  yt-dlp  │ ──► ~/Downloads
>  │  (Chrome MV3 ext.)   │  POST url  │  (Python stdlib, launchd)│  spawn  └──────────┘        │
>  └─────────────────────┘            └──────────────────────────┘                              ▼
>         ▲   badge: … ✓ ✕ !                       │                                   macOS notification
>         └───────────────────────────────────────┘                                     "✅ "
> ```
> 
> - **daemon** — Python standard-library `http.server`, listens on `127.0.0.1:7788`, started at login by `launchd`.
> - **extension** — Chrome MV3, a single toolbar button, grabs `tab.url` and POSTs it to the daemon.
> - **output** — `~/Downloads/__.mp4` (≤1080p mp4 by default; configurable).
> - **log** — `~/Library/Logs/xiaoer-videolab.log`
> 
> 
> ## ✅ What you can download
> 
> Powered by yt-dlp's **1872 extractors** — most video sites work. A practical map:
> 
> | | Sites |
> |---|---|
> | **✅ Tested & confirmed** | **YouTube · Vimeo · Bilibili (B站) · Douyin (抖音) · Xiaohongshu (小红书)** |
> | **✅ Supported** (yt-dlp extractor, same path) | X/Twitter · Ixigua (西瓜) · Instagram · Reddit · Dailymotion · Facebook · TikTok\* · …and ~1860 more |
> | **⚠️ Free content only** | Youku (优酷) · iQiyi (爱奇艺) — VIP / DRM-protected episodes can't be downloaded |
> | **🚫 Not recommended** | **Weibo (微博) · Zhihu (知乎)** — see note below |
> | **❌ Not supported** | Kuaishou (快手) & Tencent Video (腾讯视频) — no extractor; **WeChat Channels (视频号)** — in-app & encrypted |
> 
> > 🚫 **Weibo / Zhihu — not recommended.** Their web pages are combined SPA feeds (much like TikTok): the video is just one small part of a big page, and you usually **can't open a single video on its own URL**. With no clean per-video address to grab, the button has nothing reliable to work with — so we suggest skipping them.
> >
> > \* **TikTok / overseas sites** need a network that can reach them (a proxy in mainland China; note some datacenter IPs are blocked by TikTok's API).
> >
> > 🎯 **视频号 / 快手 / 小程序 / 直播流?** Those live inside apps and need packet-sniffing — use [**res-downloader**](https://github.com/putyy/res-downloader) for them. This tool focuses on the yt-dlp universe.
> 
> > **抖音 & 小红书** use a special in-page grabber (yt-dlp can't read them), so click the button **while the video is open/playing** on the page.
> 
> Notes: 平台 (platform) and 标题 (title) are auto-detected for the filename; 日期 (date) is the download day.
> 
> 
> ## TL;DR (if you've done this before)
> 
> ```bash
> brew install yt-dlp ffmpeg
> git clone https://github.com/Jane-xiaoer/xiaoer-videolab.git
> cd xiaoer-videolab && ./scripts/install.sh
> 
> # then load extension/ as an unpacked extension at chrome://extensions/
> ```
> 
> ---
> 
> 
> ### What you need
> 
> - **macOS** (background service via `launchd`) **or Windows 10/11** (via Task Scheduler).
> - A Chromium-based browser — Chrome, Arc, Edge, Brave, or Dia.
> - About 5 minutes.
> 
> > **On Windows?** Parts A & B below are for macOS. Jump to **[🪟 On Windows](#-on-windows-do-this-instead-of-parts-a--b)**, then come back for Part C.
> 
> You do **not** need to know how to code. You will copy-paste a few commands.
> 
> 
> ### 🪟 On Windows? (do this instead of Parts A & B)
> 
> The browser steps (Part C & D) are identical on every OS — only the engine + service install differs.
> 
> **W1.** Install the engine. Open **PowerShell** and run (uses [winget](https://aka.ms/getwinget), built into Win 10/11):
> 
> ```powershell

## 延伸閱讀

相關概念：[[視頻下載]] · [[隱私保護]] · [[自動化下載]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[momenbasel--PureMac|momenbasel/PureMac]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/Jane-xiaoer/xiaoer-videolab)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻下載）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻下載" AND file.name != "Jane-xiaoer--xiaoer-videolab"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Jane-xiaoer--xiaoer-videolab"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Jane-xiaoer--xiaoer-videolab" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "Jane-xiaoer--xiaoer-videolab"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻下載","隱私保護","自動化下載"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Jane-xiaoer--xiaoer-videolab" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Jane-xiaoer--xiaoer-videolab" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Jane-xiaoer" AND file.name != "Jane-xiaoer--xiaoer-videolab"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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
> const me = dv.page("Repos/Jane-xiaoer--xiaoer-videolab");
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

> **2026-06-08** — 首次收錄
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

- [[2026-06-10|2026-06-10]] — 再次上榜，493 stars
- [[2026-06-09|2026-06-09]] — 再次上榜，482 stars
- [[2026-06-08|2026-06-08]] — 首次收錄，467 stars
