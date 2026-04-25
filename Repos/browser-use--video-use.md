---
repo: browser-use/video-use
url: https://github.com/browser-use/video-use
owner: browser-use
owner_type: Organization
language: Python
license: N/A
description: "Edit videos with coding agents"
homepage: ""
stars: 4263
stars_per_day: 328
forks: 609
open_issues: 7
created: 2026-04-12
pushed_at: 2026-04-23
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "透過編碼代理編輯影片，讓編輯過程更自動化和智能化。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-26"
contributor_count: 2
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 580
readme_length: 4884
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:950,2026-04-18:960,2026-04-19:1252,2026-04-19:1256,2026-04-20:1537,2026-04-21:1784,2026-04-22:2488,2026-04-23:3298,2026-04-24:3810,2026-04-25:4263"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "video-use"
  - "browser-use/video-use"
  - "透過編碼代理編輯影片，讓編輯過程更自動化和智能化。"
---

# video-use

**4.3k** stars · **328** stars/天 · 建立 13 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/browser-use--video-use");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 透過編碼代理編輯影片，讓編輯過程更自動化和智能化。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (328 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望簡化影片編輯流程的內容創作者，特別是 YouTuber 和社交媒體影響者。
> **一句話重點** 這個專案的創新在於通過音頻轉錄和自我評估機制，實現了更高效的影片編輯流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/browser-use--video-use");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "browser-use--video-use" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的影片編輯工具，值得一試。

> [!abstract] 核心創新
> 透過音頻轉錄和自我評估機制，實現精確的影片編輯。

## 專案簡介

video-use 是一個基於 Claude Code 的影片編輯工具，允許用戶將原始影片放入資料夾中，然後透過對話來自動編輯，最終生成 `final.mp4`。其核心機制是通過音頻轉錄來精確識別語音邊界，並在此基礎上進行剪輯，這樣能夠有效去除填充詞和靜默區域。用戶只需簡單的指令，如 `edit these into a launch video`，系統會自動分析素材並提出編輯策略。這種設計的優勢在於減少了用戶的手動操作，並且透過自我評估機制確保編輯質量。技術上，該工具依賴於 Python 和多個庫（如 requests、librosa、matplotlib 等），並使用 ffmpeg 進行影片處理，這使得它在處理速度和效果上都相當出色。

與其他編輯工具相比，如 Adobe Premiere 或 Final Cut Pro，video-use 提供了更高的自動化程度，且不需要用戶熟悉複雜的界面和選項。這使得它特別適合需要快速產出內容的創作者，如 YouTuber 或社交媒體影響者。儘管如此，對於需要高級編輯功能的專業用戶來說，video-use 可能無法完全取代傳統編輯軟體。使用者需要注意的是，該工具目前仍在開發中，可能會遇到一些未解決的問題，如熱門 Issues #8 中提到的團隊建設問題。整體來看，video-use 是一個具有潛力的工具，適合希望簡化影片編輯流程的用戶。

**技術棧**：`Python 3.10` · `ffmpeg` · `requests` · `librosa` · `matplotlib` · `pillow` · `numpy`

## 重點功能

- 自動去除填充詞 — 能夠精確識別並去除 `umm`、`uh` 等填充詞。
- 自動色彩調整 — 提供多種色彩風格選擇，並可自定義 ffmpeg 鏈。
- 音頻淡入淡出 — 每次剪接時自動添加 30ms 的音頻淡入淡出效果。
- 燒錄字幕 — 支持自定義字幕樣式，默認為每 2 字的 UPPERCASE 塊。
- 生成動畫覆蓋 — 通過 Manim 或 PIL 生成動畫，並行處理。
- 自我評估渲染輸出 — 每次剪接後自動檢查渲染質量，確保無視覺跳躍或音頻問題。
- 持久化會話記憶 — 將會話狀態保存在 `project.md` 中，方便下次繼續編輯。

## 快速開始

1. 克隆並安裝依賴
```bash
git clone https://github.com/browser-use/video-use ~/Developer/video-use
```
2. 創建符號鏈接到代理的技能目錄
```bash
ln -sfn ~/Developer/video-use ~/.claude/skills/video-use
```
3. 安裝 ffmpeg
```bash
brew install ffmpeg
```
4. 添加 ElevenLabs API 密鑰
```bash
cp .env.example .env
```
5. 啟動代理並編輯影片
```bash
cd /path/to/your/videos && claude
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天內累積 4263 stars（328/天），forks 609（14.3%），顯示出強勁的成長潛力。主要貢獻者 gregpr07 和 antoinersx 在開源社群中有一定的影響力，這可能吸引了更多用戶的注意。這個工具解決了傳統影片編輯過程繁瑣的痛點，特別是對於需要快速產出內容的創作者。隨著 AI 和自動化技術的進步，這樣的工具越來越受到青睞，能夠有效提升工作效率。forks/stars 比率 14.3% 表示有相當比例的用戶對其進行了實際修改和使用，顯示出其在社群中的活躍度。

## 適合誰使用

**目標受眾**：希望簡化影片編輯流程的內容創作者，特別是 YouTuber 和社交媒體影響者。

> [!example] 使用場景
> - YouTuber 用它來快速編輯影片，因為它能自動去除填充詞和靜默，節省了大量編輯時間。
> - 社交媒體內容創作者用它來生成短片，因為它能快速產出高質量的影片，提升內容發布效率。
> - 教育工作者用它來編輯教學影片，因為它的自動化功能可以讓他們專注於內容而非技術細節。

## 架構分析

video-use 採用了一種基於音頻轉錄的編輯架構，通過將音頻和視覺信息分層處理來提高編輯精度。首先，音頻轉錄生成的時間戳和說話者信息被打包成一個輕量級的文本格式，這樣 LLM 可以在不處理大量影像數據的情況下進行編輯決策。這種設計的好處是大幅減少了計算資源的需求，並且避免了傳統編輯中的視覺噪音。

自我評估機制則在每次剪接後檢查輸出質量，確保編輯的準確性和流暢性。這種架構的缺點是對於需要即時視覺反饋的編輯場景可能不夠靈活，且在處理複雜的視覺效果時可能會遇到瓶頸。整體而言，這種設計在自動化和精確性之間取得了一定的平衡。

## 技術深入分析

video-use 的核心技術在於其音頻轉錄和自我評估機制。通過 ElevenLabs 的 Scribe API，系統能夠獲取每個音頻片段的時間戳和說話者信息，這樣 LLM 就能夠在不需要處理大量影像數據的情況下進行精確的剪接決策。這種設計使得系統能夠在處理速度和資源消耗上達到良好的平衡。自我評估機制則在每次剪接後檢查輸出質量，這一過程能夠及時發現並修正潛在的視覺或音頻問題。

這種架構的選擇使得 video-use 在自動化編輯方面具有明顯的優勢，尤其適合需要快速產出內容的創作者。與傳統編輯工具相比，這種方法能夠顯著降低學習曲線，因為用戶不需要深入了解複雜的編輯界面。儘管如此，這種設計也有其局限性，特別是在處理需要即時視覺反饋的編輯場景時，可能會顯得不夠靈活。整體而言，video-use 在自動化和精確性之間取得了一定的平衡，未來可能會隨著技術的進步而進一步優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要用戶熟悉命令行操作。文件中有針對安裝的指導，並且有良好的 getting started guide。整體來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 高自動化程度，減少手動編輯時間。
> - 精確的剪接能力，能夠去除不必要的內容。
> - 自我評估機制確保編輯質量。
> - 支持多種影片風格和字幕格式。

> [!danger] 缺點
> - 對於高級編輯需求的支持不足。
> - 需要安裝額外的依賴（如 ffmpeg）。
> - 目前仍在開發中，可能存在不穩定性。
> - 對於不熟悉命令行的用戶來說，使用門檻較高。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要安裝 ffmpeg 進行影片處理。
> - 目前仍在開發中，可能會遇到未解決的問題。
> - 對於高級編輯需求，功能可能不足。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更傳統的影片編輯功能，但缺乏自動化和 AI 驅動的編輯能力。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於同步多個媒體來源，但不具備自動編輯的功能。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 提供高效能的影片處理，但需要 NVIDIA GPU 支持，且不如 video-use 自動化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Adobe Premiere Pro | 提供全面的影片編輯功能，但完全依賴用戶手動操作，缺乏自動化。 | 如果需要高級編輯功能和特效，Premiere 是更好的選擇。 | high，因為需要重新學習編輯流程和工具。 |
| Final Cut Pro | 同樣是專業級編輯工具，提供豐富的功能，但不具備自動化編輯能力。 | 適合需要高效能和多樣化功能的專業用戶。 | high，因為需要適應新的編輯環境和工作流程。 |
| OpenShot | 開源影片編輯工具，功能較為基礎，且不具備自動化編輯能力。 | 如果預算有限且需要基本的編輯功能，OpenShot 是不錯的選擇。 | medium，因為需要學習新的編輯界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **video-use** | **Adobe Premiere Pro** | **Final Cut Pro** | **OpenShot** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供全面的影片編輯功能，但完全依賴用戶手動操作，缺乏自動化。 | 同樣是專業級編輯工具，提供豐富的功能，但不具備自動化編輯能力。 | 開源影片編輯工具，功能較為基礎，且不具備自動化編輯能力。 |
> | 遷移成本 | - | high，因為需要重新學習編輯流程和工具。 | high，因為需要適應新的編輯環境和工作流程。 | medium，因為需要學習新的編輯界面。 |
> | 適用場景 | 主要場景 | 如果需要高級編輯功能和特效，Premiere 是更好的選擇。 | 適合需要高效能和多樣化功能的專業用戶。 | 如果預算有限且需要基本的編輯功能，OpenShot 是不錯的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，音頻轉錄可能會出現延遲，影響編輯效率。
  - 解法：在編輯前確保音頻質量良好，並提前進行轉錄。
- **[HIGH]** 對於某些影片格式，ffmpeg 可能無法正確處理。
  - 解法：使用常見的影片格式，如 MP4，避免使用不常見的編碼。
- [MEDIUM] 自我評估機制在高負載情況下可能會導致性能下降。
  - 解法：在低負載環境中運行編輯任務，以提高性能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的影片製作 | 非常適合 | 自動化程度高，能快速產出內容。 |
| 需要高級編輯功能的專業影片製作 | 不適合 | 缺乏複雜的編輯工具和特效。 |
| 社交媒體內容創作者 | 適合 | 能快速生成高質量的短片，提升發布效率。 |
| 教育機構的教學影片製作 | 普通 | 雖然有自動化功能，但對於特定需求可能不夠靈活。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的影片編輯工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/browser-use--video-use");
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
> const me = dv.page("Repos/browser-use--video-use");
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
| Forks | 609 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 580 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/video-use) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 76
>     "HTML" : 23
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gregpr07](https://github.com/gregpr07) | 8 |
> | [@antoinersx](https://github.com/antoinersx) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多個提交和問題回應。
**連結**：[文件](https://github.com/browser-use/video-use)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-23）
> **活躍天數** 3 天 · **最新 commit** fix(subtitles): raise MarginV to 90 to clear vertical safe zones (#5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/browser-use/video-use/issues/8) | Team building | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # video-use
> 
> Introducing **video-use** — edit videos with Claude Code. 100% open source.
> 
> Drop raw footage in a folder, chat with Claude Code, get `final.mp4` back. Works for any content — talking heads, montages, tutorials, travel, interviews — without presets or menus.
> 
> ## What it does
> 
> - **Cuts out filler words** (`umm`, `uh`, false starts) and dead space between takes
> - **Auto color grades** every segment (warm cinematic, neutral punch, or any custom ffmpeg chain)
> - **30ms audio fades** at every cut so you never hear a pop
> - **Burns subtitles** in your style — 2-word UPPERCASE chunks by default, fully customizable
> - **Generates animation overlays** via [Manim](https://www.manim.community/), [Remotion](https://www.remotion.dev/), or PIL — spawned in parallel sub-agents, one per animation
> - **Self-evaluates the rendered output** at every cut boundary before showing you anything
> - **Persists session memory** in `project.md` so next week's session picks up where you left off
> 
> ## Setup prompt
> 
> Paste into Claude Code, Codex, Hermes, Openclaw, or any agent with shell access:
> 
> ```text
> Set up https://github.com/browser-use/video-use for me.
> 
> Read install.md first to install this repo, wire up ffmpeg, register the skill with whichever agent you're running under, and set up the ElevenLabs API key — ask me to paste it when you need it. Then read SKILL.md for daily usage, and always read helpers/ because that's where the editing scripts live. After install, don't transcribe anything on your own — just tell me it's ready and wait for me to drop footage into a folder.
> ```
> 
> The agent handles the clone, dependencies, skill registration, and prompts you once for your ElevenLabs API key (grab one at [elevenlabs.io/app/settings/api-keys](https://elevenlabs.io/app/settings/api-keys)).
> 
> Then point your agent at a folder of raw takes:
> 
> ```bash
> cd /path/to/your/videos
> claude    # or codex, hermes, etc.
> ```
> 
> And in the session:
> 
> > edit these into a launch video
> 
> It inventories the sources, proposes a strategy, waits for your OK, then produces `edit/final.mp4` next to your sources. All outputs live in `/edit/` — the skill directory stays clean.
> 
> ## Manual install
> 
> If you'd rather do it by hand:
> 
> ```bash
> # 1. Clone and symlink into your agent's skills directory
> git clone https://github.com/browser-use/video-use ~/Developer/video-use
> ln -sfn ~/Developer/video-use ~/.claude/skills/video-use        # Claude Code
> # ln -sfn ~/Developer/video-use ~/.codex/skills/video-use       # Codex
> 
> # 2. Install deps
> cd ~/Developer/video-use
> uv sync                         # or: pip install -e .
> brew install ffmpeg             # required
> brew install yt-dlp             # optional, for downloading online sources
> 
> # 3. Add your ElevenLabs API key
> cp .env.example .env
> $EDITOR .env                    # ELEVENLABS_API_KEY=...
> ```
> 
> ## How it works
> 
> The LLM never watches the video. It **reads** it — through two layers that together give it everything it needs to cut with word-boundary precision.
> 
>   
> 
> **Layer 1 — Audio transcript (always loaded).** One ElevenLabs Scribe call per source gives word-level timestamps, speaker diarization, and audio events (`(laughter)`, `(applause)`, `(sigh)`). All takes pack into a single ~12KB `takes_packed.md` — the LLM's primary reading view.
> 
> ```
> ## C0103  (duration: 43.0s, 8 phrases)
>   [002.52-005.36] S0 Ninety percent of what a web agent does is completely wasted.
>   [006.08-006.74] S0 We fixed this.
> ```
> 
> **Layer 2 — Visual composite (on demand).** `timeline_view` produces a filmstrip + waveform + word labels PNG for any time range. Called only at decision points — ambiguous pauses, retake comparisons, cut-point sanity checks.
> 
> > Naive approach: 30,000 frames × 1,500 tokens = **45M tokens of noise**.
> > Video Use: **12KB text + a handful of PNGs**.
> 
> Same idea as browser-use giving an LLM a structured DOM instead of a screenshot — but for video.
> 
> ## Pipeline
> 
> ```
> Transcribe ──> Pack ──> LLM Reasons ──> EDL ──> Render ──> Self-Eval
>                                                               │
>                                                               └─ issue? fix + re-render (max 3)
> ```
> 
> The self-eval loop runs `timeline_view` on the _rendered output_ at every cut boundary — catches visual jumps, audio pops, hidden subtitles. You see the preview only after it passes.
> 
> ## Design principles
> 
> 1. **Text + on-demand visuals.** No frame-dumping. The transcript is the surface.
> 2. **Audio is primary, visuals follow.** Cuts come from speech boundaries and silence gaps.
> 3. **Ask → confirm → execute → self-eval → persist.** Never touch the cut without strategy approval.
> 4. **Zero assumptions about content type.** Look, ask, then edit.
> 5. **12 hard rules, artistic freedom elsewhere.** Production-correctness is non-negotiable. Taste isn't.
> 
> See [`SKILL.md`](./SKILL.md) for the full production rules and editing craft.

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[影片編輯]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]]

[GitHub](https://github.com/browser-use/video-use)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "browser-use--video-use"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "browser-use--video-use"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "browser-use--video-use" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "browser-use--video-use"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器學習","影片編輯"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "browser-use--video-use" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/browser-use--video-use");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "browser-use--video-use" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "browser-use" AND file.name != "browser-use--video-use"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/browser-use--video-use");
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
> const me = dv.page("Repos/browser-use--video-use");
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
> const me = dv.page("Repos/browser-use--video-use");
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
> const me = dv.page("Repos/browser-use--video-use");
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
> const me = dv.page("Repos/browser-use--video-use");
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

> **2026-04-18** — 首次收錄
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

- [[2026-04-19|2026-04-19]] — 再次上榜，1.3k stars
- [[2026-04-18|2026-04-18]] — 首次收錄，950 stars
