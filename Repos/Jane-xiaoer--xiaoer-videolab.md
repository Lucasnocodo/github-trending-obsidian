---
repo: Jane-xiaoer/xiaoer-videolab
url: https://github.com/Jane-xiaoer/xiaoer-videolab
owner: Jane-xiaoer
owner_type: User
language: JavaScript
license: MIT
description: "One click on the toolbar grabs the current page's video into ~/Downloads — local yt-dlp daemon, 1800+ sites. 小耳抓视频：一键把当前页视频抓到本地。"
homepage: ""
stars: 513
stars_per_day: 64
forks: 78
open_issues: 1
created: 2026-06-04
pushed_at: 2026-06-07
first_seen: 2026-06-08
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "視頻下載"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-08
use_case: "一鍵將當前頁面視頻下載到本地，支持 1800 多個網站。"
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
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-08"
star_history: "2026-06-08:467,2026-06-08:467,2026-06-09:482,2026-06-09:482,2026-06-10:493,2026-06-10:493,2026-06-11:504,2026-06-12:511,2026-06-13:513"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - "topic/bilibili"
  - "topic/chrome_extension"
  - "topic/launchd"
  - "topic/macos"
  - "topic/manifest_v3"
aliases:
  - "xiaoer-videolab"
  - "Jane-xiaoer/xiaoer-videolab"
  - "一鍵將當前頁面視頻下載到本地，支持 1800 多個網站。"
---

# xiaoer-videolab

**513** stars · **64** stars/天 · 建立 8 天前 · JavaScript · MIT

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
> 一鍵將當前頁面視頻下載到本地，支持 1800 多個網站。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (64 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在 macOS 或 Windows 上方便下載視頻的普通用戶，尤其是重視隱私的用戶。
> **一句話重點** 這個專案的設計重點在於用戶隱私和簡單性，提供了一個安全的本地視頻下載解決方案。

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
> **結論** 花 2 小時學習，1 小時整合，得到一個安全、隱私友好的視頻下載工具，值得使用。

> [!abstract] 核心創新
> 這個專案的創新在於提供一個安全、隱私友好的本地視頻下載解決方案，避免了許多擴展需要的高權限。

## 專案簡介

Xiaoer VideoLab 是一個簡單易用的工具，透過一個 Chrome 擴展按鈕，將當前頁面上的視頻下載到本地的 ~/Downloads 資料夾。用戶只需點擊工具欄按鈕，擴展會將當前頁面的 URL 發送到本地運行的 Python daemon，該 daemon 會調用 `yt-dlp` 進行下載，支持超過 1800 個視頻網站，如 YouTube 和 Bilibili。這種設計的好處在於，所有的下載過程都在本地進行，避免了許多擴展需要的高權限和潛在的隱私風險。安裝過程中，使用者需要安裝 Homebrew、`yt-dlp` 和 `ffmpeg`，這樣才能確保視頻的質量和完整性。

Xiaoer VideoLab 的特點在於它的簡單性和安全性，因為它不會從網頁中抓取內容，也不會將請求發送到遠端伺服器。與其他視頻下載工具相比，這個工具的設計更注重用戶隱私，並且使用本地處理來提高效率。使用者可以根據需要自定義下載的視頻高度和文件前綴，並且可以從多個瀏覽器中提取登錄 cookie，以便下載受限內容。這個工具特別適合需要經常下載視頻的用戶，尤其是在需要保護隱私的情況下。

**技術棧**：`Python` · `JavaScript` · `Shell`

## 重點功能

- 一鍵下載 — 點擊工具欄按鈕即可將當前頁視頻下載到本地。
- 支持 1800+ 網站 — 包括 YouTube、Bilibili、Vimeo 等主流視頻平台。
- 本地處理 — 下載過程完全在本地進行，無需上傳任何數據到伺服器。
- 自定義下載參數 — 可設置視頻高度、文件前綴等選項。
- 自動更新 — `yt-dlp` 每週自動更新，保持對新網站的支持。

## 快速開始

1. 安裝 Homebrew 和依賴
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

## 程式碼範例

```js
{
  "前置條件": "已安裝 Homebrew、yt-dlp 和 ffmpeg",
  "指令": "VIDEOLAB_MAX_HEIGHT=2160 VIDEOLAB_COOKIES_BROWSER=chrome VIDEOLAB_PREFIX=\"小耳-\" ./scripts/install.sh",
  "預期輸出": "✓ Daemon running at http://127.0.0.1:7788"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 513 stars（64 stars/天），forks 78（15.2%），顯示出相對穩定的增長。開發者 Jane-xiaoer 及其團隊專注於提供一個安全且易於使用的視頻下載解決方案，填補了市場上許多視頻下載工具的隱私漏洞。這個工具的出現正好符合用戶對隱私和簡單操作的需求，特別是在當前網絡環境中，許多擴展都要求過多的權限。社群的反饋和 GitHub 上的活躍度顯示出用戶對這個工具的需求和興趣。

## 適合誰使用

**目標受眾**：需要在 macOS 或 Windows 上方便下載視頻的普通用戶，尤其是重視隱私的用戶。

> [!example] 使用場景
> - 學生用它來下載在線課程視頻，因為這樣可以離線學習，避免網絡不穩定的問題。
> - 內容創作者用它來保存靈感來源的視頻，因為這樣可以隨時查看和引用，提升創作效率。
> - 普通用戶用它來保存喜歡的視頻，因為這樣可以隨時回顧，無需擔心網站的內容變動。

## 架構分析

Xiaoer VideoLab 採用一個輕量級的架構，主要由一個本地 Python daemon 和一個 Chrome 擴展組成。當用戶點擊擴展按鈕時，擴展會將當前頁面的 URL 發送到運行在本地的 daemon，daemon 再使用 `yt-dlp` 下載視頻。這種設計的優勢在於，所有數據都在本地處理，避免了將請求發送到遠端伺服器的風險。

選擇 Python 作為後端語言是因為其簡單易用和強大的庫支持，但這也意味著在高負載情況下可能會遇到性能瓶頸。擴展的設計則是基於 Chrome MV3，這使得它能夠在現代瀏覽器中運行，但也限制了其在某些舊版瀏覽器上的兼容性。整體而言，這個架構在安全性和易用性之間取得了良好的平衡。

## 技術深入分析

Xiaoer VideoLab 的核心技術在於其本地運行的 Python daemon，這個 daemon 使用標準庫的 `http.server` 模組來處理請求，並與 `yt-dlp` 進行交互。這種設計使得所有的下載過程都在用戶的機器上進行，避免了許多網絡安全問題。效能上，由於使用了輕量級的 Python 服務，對於一般的視頻下載需求來說是足夠的，但在高並發的情況下可能會出現瓶頸。選擇 Python 作為後端語言的好處在於其生態系統豐富，能夠輕鬆集成各種庫，但也可能導致較高的內存使用。技術風險方面，這個工具依賴於 `yt-dlp` 的穩定性和更新頻率，若 `yt-dlp` 停止更新，將影響到對新網站的支持。整合方面，這個工具與主流的 Chrome 瀏覽器無縫集成，並且安裝過程相對簡單，對於不熟悉技術的用戶也能輕鬆上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝步驟和使用說明。安裝過程相對順暢，但需要用戶具備基本的命令行操作能力。文件目前僅提供英文版，可能對非英語用戶造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需複雜的設置。
> - 強大的視頻下載支持，涵蓋多個主流網站。
> - 本地處理，保護用戶隱私。

> [!danger] 缺點
> - 需要安裝多個依賴，對新手有一定挑戰。
> - 不支持某些受限內容的下載。
> - 僅限於特定操作系統，限制了使用範圍。

> [!warning] 注意事項
> - 不支持下載 VIP 或 DRM 保護的內容。
> - 僅在 macOS 和 Windows 10/11 上運行，其他系統不支持。
> - 需要安裝 Homebrew 和其他依賴，對新手可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | yt-dlp 是核心下載引擎，提供更靈活的命令行選項，但不具備圖形界面，對於不熟悉命令行的用戶不太友好。 |
| [youtube-dl/youtube-dl](https://github.com/youtube-dl/youtube-dl) | youtube-dl 是一個成熟的視頻下載工具，但更新頻率較低，且對某些新網站的支持不如 yt-dlp。 |
| [4kdownload/4k-video-downloader](https://github.com/4kdownload/4k-video-downloader) | 4K Video Downloader 是一個商業工具，提供更豐富的功能和支持，但需要付費，且隱私性不如 Xiaoer VideoLab。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | yt-dlp 是一個命令行工具，提供強大的視頻下載功能，但缺乏圖形界面，對於不熟悉命令行的用戶來說不夠友好。 | 如果你的團隊已經熟悉命令行工具，並且需要更高的靈活性和自定義選項，則選擇 yt-dlp 更合適。 | medium，因為需要用戶熟悉命令行操作。 |
| [4kdownload/4k-video-downloader](https://github.com/4kdownload/4k-video-downloader) | 4K Video Downloader 是一個商業工具，提供更豐富的功能和支持，但需要付費，且隱私性不如 Xiaoer VideoLab。 | 如果需要一個功能更全面的商業解決方案，並且不介意支付費用，則可以考慮 4K Video Downloader。 | low，因為界面友好，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaoer-videolab** | **yt-dlp** | **4k-video-downloader** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | yt-dlp 是一個命令行工具，提供強大的視頻下載功能，但缺乏圖形界面，對於不熟悉命令行的用戶來說不夠友好。 | 4K Video Downloader 是一個商業工具，提供更豐富的功能和支持，但需要付費，且隱私性不如 Xiaoer VideoLab。 |
> | 遷移成本 | - | medium，因為需要用戶熟悉命令行操作。 | low，因為界面友好，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉命令行工具，並且需要更高的靈活性和自定義 | 如果需要一個功能更全面的商業解決方案，並且不介意支付費用，則 |

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

- [MEDIUM] 在某些網站上下載速度可能較慢，特別是高解析度視頻時。
  - 解法：可以嘗試降低視頻解析度來提高下載速度。
- **[HIGH]** 需要定期更新 `yt-dlp` 以支持新網站。
  - 解法：可以設置自動更新任務，確保工具保持最新。
- [MEDIUM] 在某些情況下，擴展可能無法正確獲取當前頁面的 URL。
  - 解法：確保當前頁面是視頻播放頁面，並刷新頁面後再試。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要下載教學視頻 | 非常適合 | 簡單易用，無需複雜設置，適合非技術用戶。 |
| 個人用戶希望保存社交媒體上的視頻 | 適合 | 支持多個視頻網站，能夠滿足大多數用戶需求。 |
| 大型企業需要批量下載視頻內容 | 不適合 | 對於高並發下載需求，性能可能不足。 |
| 開發者需要自定義視頻下載功能 | 普通 | 雖然可以自定義，但對於需要高靈活性的開發者來說，命令行工具可能更合適。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個安全、隱私友好的視頻下載工具，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個工具不需要高權限運行，所有操作都在本地進行，並且不會存取用戶的敏感資料。依賴鏈的信任程度較高，因為主要依賴於開源項目 `yt-dlp`，並且有定期的安全更新。

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
| Forks | 78 |
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

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/Jane-xiaoer/xiaoer-videolab#readme)

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

相關概念：[[視頻下載]] · [[隱私保護]] · [[自動化]]

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
> WHERE category = "其他" AND file.name != "Jane-xiaoer--xiaoer-videolab"
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
> const concepts = ["視頻下載","隱私保護","自動化"];
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
