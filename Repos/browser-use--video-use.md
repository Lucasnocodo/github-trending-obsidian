---
repo: browser-use/video-use
url: https://github.com/browser-use/video-use
owner: browser-use
owner_type: Organization
language: Python
license: N/A
description: "Edit videos with coding agents"
homepage: ""
stars: 3810
stars_per_day: 318
forks: 543
open_issues: 5
created: 2026-04-12
pushed_at: 2026-04-23
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "影片編輯"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "透過編碼代理編輯影片，讓影片剪接變得更簡單。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-26"
contributor_count: 2
engagement: "medium"
issue_close_rate: 17
repo_size_kb: 580
readme_length: 4884
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:950,2026-04-18:960,2026-04-19:1252,2026-04-19:1256,2026-04-20:1537,2026-04-21:1784,2026-04-22:2488,2026-04-23:3298,2026-04-24:3810"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "video-use"
  - "browser-use/video-use"
  - "透過編碼代理編輯影片，讓影片剪接變得更簡單。"
---

# video-use

**3.8k** stars · **318** stars/天 · 建立 12 天前 · Python · 未標註授權

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
> 透過編碼代理編輯影片，讓影片剪接變得更簡單。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (318 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要快速編輯影片但不想學習複雜工具的內容創作者。
> **一句話重點** video-use 將 AI 自動化與影片編輯結合，讓創作者能夠更專注於內容而非技術細節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/browser-use--video-use");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "影片編輯" && p.file.name !== "browser-use--video-use" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 影片編輯 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到自動化編輯的便利，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於將對話式 AI 與影片編輯結合，實現無需手動操作的自動化編輯流程。

## 專案簡介

video-use 是一個開源的影片編輯工具，利用 Claude Code 等 LLM 進行對話式編輯。用戶只需將原始影片放入指定資料夾，然後與代理對話，例如輸入「編輯這些成為一個發佈影片」，系統會自動分析素材並生成最終影片 `edit/final.mp4`。這個工具的賣點在於其無需預設或菜單，能夠自動剪除填充詞和死空間，並且在每個切割點自動進行音頻淡入淡出，避免聽到突兀的聲音。它還支援自動色彩調整和燒錄字幕，並能生成動畫覆蓋層，這些都可以通過 Manim 等庫實現。

技術上，這個工具依賴 Python 的多個庫，如 requests 和 numpy，並且需要 ffmpeg 進行影片處理，這使得它在處理速度和效能上有良好的表現。與傳統的影片編輯工具相比，video-use 的優勢在於其自動化程度高，並且能夠在對話中即時調整編輯策略，這對於需要快速產出內容的創作者來說非常有幫助。使用者需要注意的是，這個工具目前仍在開發中，社群活躍度中等，解決問題的速度也有待提升。對於小型團隊或個人創作者來說，這是一個值得嘗試的工具，尤其是對於需要快速編輯和自動化處理的需求。

**技術棧**：`Python 3.10` · `requests` · `librosa` · `matplotlib` · `pillow` · `numpy`

## 重點功能

- 自動剪輯 — 剪除填充詞（如 'umm' 和 'uh'）及死空間，提升影片流暢度。
- 自動色彩調整 — 提供多種色彩風格選擇，並支援自定義 ffmpeg 鏈。
- 音頻淡入淡出 — 每個切割點自動添加 30ms 的淡入淡出，避免聲音突兀。
- 燒錄字幕 — 以自定義風格燒錄字幕，預設為 2 字元大寫塊。
- 動畫覆蓋層 — 通過 Manim 等庫生成動畫，並行處理多個動畫。
- 自我評估 — 在每個切割點自我評估渲染結果，確保輸出品質。
- 持久化會話記憶 — 將會話記錄保存在 `project.md`，方便下次繼續編輯。

## 快速開始

1. 克隆專案並連結到代理的技能目錄
```bash
git clone https://github.com/browser-use/video-use ~/Developer/video-use
```
2. 安裝依賴項
```bash
cd ~/Developer/video-use && pip install -e .
```
3. 安裝 ffmpeg
```bash
brew install ffmpeg
```
4. 設定 ElevenLabs API 金鑰
```bash
cp .env.example .env && $EDITOR .env
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 ffmpeg 和設置好 API 金鑰",
  "cd /path/to/your/videos",
  "claude    # 或 codex, hermes 等",
  "# 預期輸出：生成 `edit/final.mp4` 影片"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 3810 stars（318/天），forks 543（14.3%），顯示出其受歡迎程度。這個專案的主要貢獻者是 gregpr07 和 antoinersx，兩位在開源社群中活躍，過去有多個相關專案。video-use 解決了傳統影片編輯工具繁瑣的操作流程，讓用戶能夠透過簡單的對話來進行編輯，這在以往的工具中並不常見。這個專案的推出可能與當前對自動化和 AI 工具需求的增加有關。forks/stars 比率為 14.3%，顯示出許多用戶在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要快速編輯影片但不想學習複雜工具的內容創作者。

> [!example] 使用場景
> - 內容創作者用它來快速編輯旅行影片，因為它能自動剪除不必要的片段，節省了大量的手動編輯時間。
> - 社交媒體經營者用它來製作短片，因為它的自動化功能讓他們能夠在短時間內產出高品質的內容。
> - 教育工作者用它來編輯教學影片，因為它能夠自動燒錄字幕，讓學生更容易理解內容。

## 架構分析

video-use 的架構設計以 LLM 為核心，通過自然語言處理來理解用戶的編輯需求。資料流從用戶輸入的指令開始，經過 LLM 的解析，然後調用 ffmpeg 進行影片處理。這種設計使得編輯過程高度自動化，但也依賴於 LLM 的準確性和效能。

選擇 Python 作為開發語言，因為其擁有豐富的資料處理庫，能夠快速實現功能。這也帶來了相對較高的依賴性，使用者需要確保所有依賴項都正確安裝。擴展性方面，若要處理更大規模的影片項目，可能需要考慮效能瓶頸，特別是在多個動畫生成的情況下。

## 技術深入分析

video-use 的核心技術機制是利用 LLM 進行自然語言處理，將用戶的編輯需求轉化為具體的影片處理指令。這個過程中，LLM 透過解析用戶的語言來理解影片內容，並調用 ffmpeg 進行實際的影片編輯。效能方面，這個工具在處理小型影片項目時表現良好，但隨著影片長度和複雜度的增加，處理時間可能會顯著增加。設計上選擇 Python 作為開發語言，因為其擁有強大的資料處理能力和豐富的庫支持，但這也意味著使用者需要安裝多個依賴，增加了使用門檻。在技術風險方面，LLM 的準確性和效能直接影響編輯結果，若 LLM 的表現不佳，可能導致編輯品質下降。整合方面，這個工具能夠與現有的影片編輯流程無縫結合，特別是對於需要快速產出內容的創作者來說，提供了良好的使用體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，對於新手來說相對友好。安裝過程中需要注意依賴項的安裝，可能會有一些小坑。整體上，文件的結構合理，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 高自動化程度，減少手動編輯時間。
> - 支援多種影片風格和自定義選項。
> - 持久化會話記憶，方便長期使用。

> [!danger] 缺點
> - 目前功能仍在開發中，可能不穩定。
> - 需要安裝多個依賴，對新手有一定門檻。
> - 對於大型項目處理時間較長，可能影響工作流。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要安裝 ffmpeg 進行影片處理
> - 目前仍在開發中，功能可能不穩定
> - 對於大型影片項目，處理時間可能較長

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供更傳統的影片編輯功能，適合需要精細調整的專業編輯，而 video-use 更專注於自動化和快速編輯。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | claude-obsidian 是一個筆記管理工具，雖然也使用 LLM，但不具備影片編輯功能，適用於不同的使用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Adobe Premiere Pro | Premiere Pro 提供全面的影片編輯功能，適合專業用戶，而 video-use 更加自動化，適合快速編輯需求。 | 如果需要高級編輯功能和精細調整，Premiere Pro 是更好的選擇。 | medium，因為需要重新學習工具的操作方式。 |
| DaVinci Resolve | DaVinci Resolve 提供強大的色彩調整和編輯功能，適合專業編輯，而 video-use 則專注於自動化編輯。 | 如果需要專業的色彩調整和編輯功能，DaVinci Resolve 更適合。 | medium，因為需要時間適應新的工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **video-use** | **Adobe Premiere Pro** | **DaVinci Resolve** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Premiere Pro 提供全面的影片編輯功能，適合專業用戶，而 video-use 更加自動化，適合快速編輯需求。 | DaVinci Resolve 提供強大的色彩調整和編輯功能，適合專業編輯，而 video-use 則專注於自動化編輯。 |
> | 遷移成本 | - | medium，因為需要重新學習工具的操作方式。 | medium，因為需要時間適應新的工作流程。 |
> | 適用場景 | 主要場景 | 如果需要高級編輯功能和精細調整，Premiere Pro 是 | 如果需要專業的色彩調整和編輯功能，DaVinci Resol |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型影片項目中，處理時間可能過長
  - 解法：考慮將影片分段處理，減少單次處理的負擔
- [MEDIUM] 某些依賴項安裝過程中可能出現問題
  - 解法：仔細檢查安裝步驟，確保所有依賴項正確安裝
- **[HIGH]** LLM 解析不準確可能導致編輯失敗
  - 解法：在編輯前確認指令的正確性，必要時手動調整

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內容創作 | 非常適合 | 自動化編輯功能能夠顯著提高工作效率。 |
| 大型影片製作公司 | 不適合 | 可能無法滿足對編輯精度的高要求。 |
| 社交媒體經營者 | 適合 | 能快速產出短片，符合快速變化的需求。 |
| 教育機構的教學影片製作 | 非常適合 | 自動燒錄字幕和簡化編輯流程能夠提高效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到自動化編輯的便利，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，僅需存取本地檔案系統。依賴的庫大多為開源且經過社群審核，安全性相對較高。

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
| Forks | 543 |
| Open Issues | 5 |
| Issue 解決率 | 17% (1 closed) |
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

**社群活躍度**：社群活躍度中等，解決問題的速度有待提升。
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

相關概念：[[自動化]] · [[影片編輯]] · [[自然語言處理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[xstongxue--best-skills|xstongxue/best-skills]]

[GitHub](https://github.com/browser-use/video-use)

## 相關收錄

> [!note]- 直接競品（同子分類：影片編輯）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "影片編輯" AND file.name != "browser-use--video-use"
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
> const concepts = ["自動化","影片編輯","自然語言處理"];
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
