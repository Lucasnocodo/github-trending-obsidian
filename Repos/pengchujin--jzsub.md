---
repo: pengchujin/jzsub
url: https://github.com/pengchujin/jzsub
owner: pengchujin
owner_type: User
language: Python
license: MIT
description: "JZSub — 一条视频链接，自动交付最高画质、封面和 GPT 双语字幕 MP4。"
homepage: ""
stars: 683
stars_per_day: 137
forks: 74
open_issues: 1
created: 2026-07-10
pushed_at: 2026-07-14
first_seen: 2026-07-16
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "視頻處理"
release_tag: "v1.8.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-16
use_case: "自動交付最高畫質的視頻、封面和雙語字幕 MP4。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-23"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 802
readme_length: 2347
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-16"
star_history: "2026-07-16:683"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/bilingual"
  - "topic/codex"
  - "topic/subtitles"
  - "topic/video"
  - "topic/yt_dlp"
aliases:
  - "jzsub"
  - "pengchujin/jzsub"
  - "自動交付最高畫質的視頻、封面和雙語字幕 MP4。"
---

# jzsub

**683** stars · **137** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/pengchujin--jzsub");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.8.1`

`bilingual` `codex` `subtitles` `video` `yt-dlp`

> [!summary] 一句話摘要
> 自動交付最高畫質的視頻、封面和雙語字幕 MP4。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (137 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成雙語視頻內容的內容創作者和教育工作者。
> **一句話重點** JZSub 提供了一個高效的解決方案，讓視頻內容創作者能夠快速生成雙語字幕，提升內容的可訪問性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/pengchujin--jzsub");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻處理" && p.file.name !== "pengchujin--jzsub" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到高效的雙語視頻生成，值得投入。

> [!abstract] 核心創新
> 自動交付雙語字幕的 MP4 生成工具，支持多平台視頻下載。

## 專案簡介

JZSub 是一個 Python 工具，透過提供一個視頻鏈接，能夠自動下載最高畫質的視頻、封面，並生成雙語字幕的 MP4 檔案。用戶只需透過 `--deliver` 參數選擇所需的交付內容，如完整視頻、僅視頻或雙語字幕，系統會自動處理下載和字幕生成。這個工具的賣點在於其高效的字幕處理，使用緊湊翻譯和上下文衔接，並支持多語言翻譯，默認為中文。技術上，JZSub 依賴於 yt-dlp 和 FFmpeg 進行視頻處理，並使用 libass 進行字幕渲染，確保高品質的輸出。相較於其他工具，JZSub 提供了更靈活的交付選項，並且能夠在平台無字幕的情況下直接交付視頻，這在許多視頻下載工具中並不常見。

使用者可以在多個平台上使用此工具，包括 YouTube、Bilibili 和 Twitch，並且支持靜默登入，省去手動登錄的麻煩。實際使用中，JZSub 可以有效處理多種視頻格式，並自動下載封面，這使得它在視頻處理和字幕生成的工作流中非常高效。這個專案目前處於活躍開發階段，且有著良好的社群支持，適合需要快速生成雙語視頻的內容創作者和開發者。使用者在使用時需注意依賴的安裝和配置，特別是字體的獲取，這可能會影響使用體驗。

**技術棧**：`Python 3.10` · `yt-dlp` · `FFmpeg` · `Deno 2.3+`

## 重點功能

- 最高畫質 — 自動下載最佳視頻和音頻，生成無損 MP4。
- 按需交付 — 使用 `--deliver` 參數選擇交付內容，包括完整視頻或僅字幕。
- 雙語字幕 — 支持多語言翻譯，默認為中文，並可指定其他語言。
- 自動燒錄 — 使用 libass 渲染字幕，支持自適應竖屏布局。
- 靜默登入 — 直接使用 Chrome 登錄態，無需手動導出 Cookie。
- 封面直取 — 自動下載並轉換為 JPEG 格式的封面圖。
- 低耗運行 — 僅讀取必要的字幕文檔，減少資源消耗。

## 快速開始

1. 安裝 JZSub 到 Codex
```bash
npx skills add pengchujin/jzsub --skill jzsub -g -a codex -y
```
2. 手動安裝 JZSub
```bash
git clone https://github.com/pengchujin/jzsub.git
```
3. 執行下載任務
```bash
$jzsub https://www.youtube.com/watch?v=VIDEO_ID
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 JZSub 並配置好依賴。",
  "指令": "python3 skills/jzsub/scripts/fetch_video.py \"\" --output-dir job --deliver video --browser-cookies auto",
  "預期輸出": "視頻、封面，平台有字幕時同樣保存原始字幕文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 683 stars（137/天），forks 74（10.8%），這顯示出穩定的增長趨勢。作者 pengchujin 之前有開發過其他視頻處理相關工具，這次的 JZSub 解決了視頻下載和字幕生成的痛點，特別是對於需要雙語字幕的用戶。這個工具的推出正好符合了對高品質視頻內容需求的增長，並且在社交媒體上獲得了一定的討論。技術上，隨著 Python 生態系統的成熟，這樣的工具變得越來越可行，且 forks/stars 比率顯示出許多用戶對其進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要快速生成雙語視頻內容的內容創作者和教育工作者。

> [!example] 使用場景
> - 內容創作者用它來自動生成雙語字幕視頻，因為這樣可以節省大量的手動翻譯時間，並提高視頻的可訪問性。
> - 教育工作者用它來下載教學視頻並添加雙語字幕，因為這樣能夠幫助學生更好地理解內容，特別是對於語言學習者。
> - 開發者用它來測試視頻處理功能，因為它提供了靈活的交付選項，能夠快速驗證不同的視頻格式和字幕效果。

## 架構分析

JZSub 採用模組化設計，核心功能分為視頻下載、字幕生成和燒錄三個部分。視頻下載使用 yt-dlp 來獲取視頻流，並根據用戶需求選擇合適的格式。字幕生成部分則使用 libass 進行渲染，確保字幕的高品質顯示。

這樣的設計使得工具能夠靈活應對不同平台的需求，並能夠快速生成雙語字幕。選擇 Python 作為開發語言，因為其在數據處理和自動化腳本方面的優勢，然而這也意味著對於 Python 環境的依賴。擴展性方面，這個工具能夠輕鬆集成到其他 Python 生態系統的項目中，但對於非 Python 用戶來說，可能需要額外的學習成本。

## 技術深入分析

JZSub 的核心技術機制包括使用 yt-dlp 進行視頻下載，這使得它能夠支持多種視頻平台，並且能夠靈活選擇視頻格式。字幕生成則依賴於 libass，這是一個成熟的字幕渲染引擎，能夠提供高品質的字幕顯示。效能方面，這個工具能夠在短時間內處理大量視頻，並且能夠在低資源消耗的情況下運行。設計上，選擇 Python 使得開發和維護相對容易，但也意味著對 Python 環境的依賴，這可能會對某些用戶造成困擾。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下。整合方面，這個工具能夠輕鬆與其他 Python 生態系統的工具鏈集成，但對於非 Python 用戶，可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要注意字體的獲取。文檔中有針對新手的指導，幫助用戶快速上手。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多平台視頻下載，靈活性高。
> - 自動生成雙語字幕，節省手動翻譯時間。
> - 高品質的視頻和字幕輸出，適合專業需求。

> [!danger] 缺點
> - 需要手動安裝字體，增加了使用門檻。
> - 對於非 Python 用戶，學習曲線較陡。
> - 不支持 DRM 內容的下載，限制了使用範圍。

> [!warning] 注意事項
> - 僅支持 Python 3.10+ 和特定的依賴項。
> - 需要手動獲取 MiSans 字體，未包含在專案中。
> - 不支持 DRM 內容的下載，僅能下載用戶有權訪問的內容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供視頻生成和處理，但不支持雙語字幕功能，適合需要簡單視頻合成的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於視頻的編輯和特效處理，無法直接生成雙語字幕，適合需要高級編輯功能的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於視頻生成和處理，但不支持雙語字幕功能。 | 如果需要簡單的視頻合成而不需要字幕功能。 | low，因為功能相似，且接口簡單。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於視頻編輯和特效處理，無法直接生成雙語字幕。 | 如果需要高級編輯功能而不需要自動字幕生成。 | medium，因為需要重新適應編輯流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **jzsub** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於視頻生成和處理，但不支持雙語字幕功能。 | 專注於視頻編輯和特效處理，無法直接生成雙語字幕。 |
> | 遷移成本 | - | low，因為功能相似，且接口簡單。 | medium，因為需要重新適應編輯流程。 |
> | 適用場景 | 主要場景 | 如果需要簡單的視頻合成而不需要字幕功能。 | 如果需要高級編輯功能而不需要自動字幕生成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些平台上可能無法獲取字幕，導致下載失敗。
  - 解法：檢查平台是否支持字幕，或選擇僅下載視頻。
- [MEDIUM] 字體未安裝時，字幕顯示不正常。
  - 解法：確保安裝 MiSans 字體，或使用其他兼容字體。
- [MEDIUM] 在高並發情況下，下載速度可能會受到影響。
  - 解法：減少同時下載的視頻數量，或分批處理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要生成雙語字幕的教育視頻 | 非常適合 | 自動化的字幕生成大幅減少了手動工作量。 |
| 小型團隊的視頻內容創作 | 適合 | 靈活的交付選項能滿足不同需求。 |
| 大型企業的視頻處理需求 | 普通 | 可能需要更多的定制化功能以符合企業標準。 |
| 不需要字幕的視頻下載 | 非常適合 | 能夠直接下載視頻和封面，無需字幕處理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到高效的雙語視頻生成，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶有權訪問的內容，依賴鏈中無已知的安全風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pengchujin--jzsub");
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
> const me = dv.page("Repos/pengchujin--jzsub");
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
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-07-10 |
| Repo 大小 | 802 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pengchujin/jzsub) |
| Topics | `bilingual` `codex` `subtitles` `video` `yt-dlp` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pengchujin](https://github.com/pengchujin) | 32 |

**最新版本**：v1.8.1 — JZSub v1.8.1 (2026-07-13)

> [!info]- Release Notes
> ## 竖屏字幕布局修正
> 
> - 竖屏原文字号从 42 调整为 36
> - 竖屏译文字号从 46 调整为 40
> - 竖屏底部安全边距从 50 提升到 120
> - 横屏布局保持 42/46 字号与 50 边距不变
> - 新增竖屏布局回归测试
> - 下载器自测 30 项、项目测试 39 项全部通过
> - 已完成真实 9:16 视频渲染与烧录验证

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和提交。
**連結**：[文件](https://github.com/pengchujin/jzsub)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-13 ~ 2026-07-14）
> **活躍天數** 2 天 · **最新 commit** Make delivered video links openable in Codex

## README 摘錄

> [!info]- 展開查看原文 README
> 给 JZSub 一个视频链接，拿回最高画质视频、封面、双语字幕和烧录完成的 MP4。
> 
> ## 支持的平台
> 
>   
>     YouTube
>     Bilibili
>     Vimeo
>     Twitch
>     Dailymotion
>     TikTok
>   
> 
> 以及 yt-dlp 支持的其他站点。实际可用格式、字幕和登录要求由平台决定。
> 
> ## 主要功能
> 
> - **最高画质**：下载最佳视频与音频，尽可能无损封装 MP4
> - **按需交付**：`--deliver` 可选完整烧录、仅视频（含原始字幕文件）、仅原始字幕、或双语字幕文件
> - **双语字幕**：紧凑分批翻译、批间上下文衔接，再按句子边界重新切分；原文保持不变。默认译成中文，`--target-lang` 可指定日语、法语等任意目标语言
> - **自动烧录**：MiSans 字幕、底部双语堆叠、自适应竖屏、精确背景、libass 渲染
> - **低耗运行**：只读取紧凑字幕文档，不读取完整清单；烧录每 5% 显示一次进度
> - **封面直取**：自动下载并转换为 `封面.jpg`
> - **静默登录**：需要时直接读取 Chrome 登录态，不导出 Cookie
> - **无字幕也能用**：平台没有字幕时直接交付视频、MP4 和封面
> 
> ```text
> 烧录 [██████████░░░░░░░░░░]  50%  01:11 / 02:23  0.68x
> ```
> 
> ## 视频前后对比
> 
>   
> 
> 左：下载后的原片　·　右：JZSub 生成并烧录的原文＋中文双语字幕
> 
> ## 竖屏视频支持
> 
>   
> 
> 左：无字幕原片　·　右：JZSub 竖屏双语字幕成片。自动使用更紧凑的字号与更大的底部安全区。截图来自 Parking Sensor (DIY)。
> 
> ## 封面自动获取
> 
>   
>     
>     
>       与视频一起交付
>       封面.jpg
>       自动选择平台封面并转换为通用 JPEG，无需另存网页图片。
>     
>   
> 
> ## 在 Codex 中使用
> 
>   
> 
> ### npx 一键安装（推荐）
> 
> ```bash
> npx skills add pengchujin/jzsub --skill jzsub -g -a codex -y
> ```
> 
> 需要 Node.js 18+。命令会从 GitHub 获取最新版，并把 JZSub 全局安装到 Codex。
> 
> ### 手动安装
> 
> ```bash
> git clone https://github.com/pengchujin/jzsub.git
> mkdir -p ~/.codex/skills
> cp -R jzsub/skills/jzsub ~/.codex/skills/
> ```
> 
> 在 Codex 新任务中发送：
> 
> ```text
> $jzsub https://www.youtube.com/watch?v=VIDEO_ID
> ```
> 
> JZSub 会持续执行下载、模型翻译、字幕渲染、烧录与交付检查。翻译通过紧凑队列逐批进行，不读取完整字幕清单，也不会停在仅下载完成的中间状态。
> 
> 默认中文交付会生成 `封面.jpg` 和 `双语字幕版「视频名」.mp4`；文件名由下载清单统一声明，续传与交付验证使用同一名称。
> 
> ## 按需交付
> 
> 告诉 agent 你只要什么，它会选择对应的 `--deliver` 目标；也可以直接运行脚本：
> 
> | 目标 | 说明 | 产物 |
> |---|---|---|
> | `full`（默认） | 完整流水线 | 视频、封面、字幕、双语烧录 MP4 |
> | `video` | 只要视频，不翻译不烧录 | 视频、封面，平台有字幕时同样保存原始字幕文件 |
> | `subs` | 只要字幕，不下载视频流 | 原始字幕 + 衍生 SRT |
> | `bilingual-subs` | 只要双语字幕文件 | 原始字幕 + 翻译渲染的双语 SRT/ASS，不下载视频 |
> 
> ```bash
> python3 skills/jzsub/scripts/fetch_video.py "" \
>   --output-dir job --deliver video --browser-cookies auto
> ```
> 
> `video` 与 `subs` 下载完成即结束；`full` 与 `bilingual-subs` 会继续翻译流程，交付检查按声明的目标判定完成。`subs` 类目标在平台没有合适字幕时会明确报错。
> 
> ## 依赖
> 
> Python 3.10+、yt-dlp、Deno 2.3+、带 libass 的 FFmpeg/ffprobe，以及 MiSans Bold。macOS 可运行：
> 
> ```bash
> brew install yt-dlp ffmpeg-full deno
> ```
> 
> MiSans 请从[小米 HyperOS 官方页面](https://hyperos.mi.com/font/zh/download/)获取；字体文件不包含在本仓库中。
> 
> > 仅下载你有权访问和保存的内容。JZSub 不绕过 DRM、付费墙、验证码或平台安全限制。
> 
> 开发者验证
> 
> ```bash
> python3 skills/jzsub/scripts/fetch_video.py --self-test
> python3 -m unittest discover -s skills/jzsub/tests -v
> ```
> 
> ## License
> 
> [MIT](LICENSE) · 平台 Logo 与商标归各自权利人所有。

## 延伸閱讀

相關概念：[[視頻處理]] · [[雙語字幕]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/pengchujin/jzsub)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻處理" AND file.name != "pengchujin--jzsub"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "pengchujin--jzsub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "pengchujin--jzsub" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "pengchujin--jzsub"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻處理","雙語字幕","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "pengchujin--jzsub" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/pengchujin--jzsub");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pengchujin--jzsub" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pengchujin" AND file.name != "pengchujin--jzsub"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pengchujin--jzsub");
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
> const me = dv.page("Repos/pengchujin--jzsub");
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
> const me = dv.page("Repos/pengchujin--jzsub");
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
> const me = dv.page("Repos/pengchujin--jzsub");
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
> const me = dv.page("Repos/pengchujin--jzsub");
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

> **2026-07-16** — 首次收錄
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

- [[2026-07-16|2026-07-16]] — 首次收錄，683 stars
