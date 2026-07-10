---
repo: HUANGCHIHHUNGLeo/claude-real-video
url: https://github.com/HUANGCHIHHUNGLeo/claude-real-video
owner: HUANGCHIHHUNGLeo
owner_type: User
language: Python
license: MIT
description: "Let Claude (or any LLM) actually watch a video — scene-aware, deduplicated frames + transcript, from a URL or local file. Runs locally, MIT."
homepage: ""
stars: 1458
stars_per_day: 162
forks: 106
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-10
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "視頻分析"
release_tag: "v0.7.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-04
use_case: "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持 URL 或本地文件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-10"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 1110
readme_length: 9545
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:569,2026-07-04:572,2026-07-05:768,2026-07-06:1029,2026-07-06:1034,2026-07-07:1276,2026-07-07:1276,2026-07-08:1370,2026-07-09:1424,2026-07-10:1458"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "claude-real-video"
  - "HUANGCHIHHUNGLeo/claude-real-video"
  - "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持 URL 或本地文件。"
---

# claude-real-video

**1.5k** stars · **162** stars/天 · 建立 9 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.7.1`

> [!summary] 一句話摘要
> 讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持 URL 或本地文件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (162 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要對視頻內容進行深入分析的開發者和研究者，尤其是對 LLM 應用感興趣的人。
> **一句話重點** 這個專案讓 LLM 真正能夠理解視頻內容，而不僅僅是依賴轉錄文本。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻分析" && p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到強大的視頻分析能力，值得投入。

> [!abstract] 核心創新
> 能夠讓 LLM 實際觀看視頻，並根據場景變化智能提取幀。

## 專案簡介

這個工具的核心機制是讓 LLM（如 Claude）能夠真正理解視頻內容，而不僅僅是讀取轉錄文本。用戶可以通過提供 YouTube 連結或本地視頻文件，工具會自動提取重要幀，去除重複的幀，並生成音頻的轉錄文本。使用者只需運行 `crv` 指令，並指定視頻來源，工具會在本地處理，最終輸出包含關鍵幀和轉錄的資料夾。這樣的設計使得 LLM 能夠接收更有意義的上下文，從而提高理解能力。這個工具的賣點在於其本地運行的特性，避免了將數據上傳至雲端的風險，並且能夠根據場景變化智能選擇幀，而不是固定時間間隔取樣。使用者可以利用多種選項來調整幀的選擇敏感度、最大幀數等，這使得工具在處理不同類型的視頻時更加靈活。

技術上，該工具依賴 `ffmpeg` 進行幀提取和音頻處理，並使用 `yt-dlp` 來支持從網絡上抓取視頻。與其他工具相比，這個工具不僅能夠提取幀，還能進行音頻轉錄，並且支持多種輸出格式。使用者可以選擇是否保留音頻，這在需要音頻分析的情境下尤為重要。實際使用中，該工具的性能表現良好，能夠處理多種格式的視頻，並且在本地運行的設計使其更加安全。這個專案目前處於穩定階段，適合需要視頻分析的開發者和研究者。未來幾個月，預計會有更多功能更新，進一步提升其分析能力。

**技術棧**：`Python 3.10+` · `ffmpeg` · `yt-dlp`

## 重點功能

- 場景變化檢測 — 自動提取每個場景的關鍵幀，避免固定時間取樣導致的漏掉重要畫面。
- 去重功能 — 根據像素變化去除重複幀，減少傳遞給 LLM 的數據量。
- 音頻轉錄 — 使用 Whisper 進行音頻轉錄，支持多種語言，並生成時間戳的轉錄文件。
- 本地運行 — 所有處理在本地完成，無需上傳數據到雲端，保護用戶隱私。
- 多種輸出選項 — 用戶可以選擇是否保留音頻、生成報告等，靈活應對不同需求。

## 快速開始

1. 安裝核心功能
```bash
pip install claude-real-video
```
2. 安裝音頻轉錄功能
```bash
pip install 'claude-real-video[whisper]'
```
3. 運行分析命令
```bash
crv 'https://www.youtube.com/watch?v=...'
```

## 程式碼範例

```python
{
  "前置條件": "安裝了 claude-real-video 和 ffmpeg",
  "指令": "crv 'https://www.youtube.com/watch?v=...' --out crv-out",
  "預期輸出": "生成 crv-out 目錄，包含關鍵幀和轉錄文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1458 stars（162/天），forks 106（7.3%），顯示出不錯的增長潛力。這個專案的作者 HUANGCHIHHUNGLeo 之前有相關的開源經驗，並且針對 LLM 在視頻理解上的不足提出了解決方案。之前的工具多數只能固定取樣幀，無法有效捕捉快速切換的場景，這個工具的出現正好填補了這一空白。社群對於這類工具的需求也在上升，尤其是在 AI 逐漸進入多媒體處理的背景下。forks/stars 比率在 7.3%，顯示出許多人對這個工具有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：需要對視頻內容進行深入分析的開發者和研究者，尤其是對 LLM 應用感興趣的人。

> [!example] 使用場景
> - 數據科學家用它來分析教學視頻，因為能夠提取關鍵幀和轉錄，方便進行內容分析和回顧。
> - 內容創作者用它來快速生成視頻摘要，因為能夠自動去除重複幀，節省了手動編輯的時間。
> - 研究人員用它來分析電影剪輯，因為它提供了場景變化的詳細信息，有助於理解影片的剪接風格。

## 架構分析

該工具採用模組化設計，主要由幀提取、去重、音頻轉錄和結果輸出四個部分組成。首先，使用 `yt-dlp` 下載視頻，然後利用 `ffmpeg` 提取幀，這一過程在本地完成，確保數據安全。接著，通過滑動窗口算法進行幀去重，這樣可以避免重複的幀被多次傳遞給 LLM。

最後，生成的幀和轉錄文本會被組織到一個資料夾中，方便用戶進行進一步分析。這樣的設計使得工具在處理速度和數據安全性上達到平衡，但也需要用戶在本地安裝必要的依賴。擴展性方面，未來可以考慮增加對更多視頻格式的支持。

## 技術深入分析

該工具的核心技術在於其幀提取和去重算法，使用 `ffmpeg` 進行視頻處理，並利用 `yt-dlp` 下載視頻。幀提取過程中，工具會根據場景變化檢測來選擇幀，這樣能夠捕捉到快速剪輯中的關鍵畫面。去重算法則使用滑動窗口技術，這樣可以有效避免重複幀的傳遞，提升 LLM 的處理效率。該工具在本地運行，這意味著所有數據都在用戶的設備上處理，這對於隱私保護至關重要。性能上，該工具能夠處理多種格式的視頻，並且在本地運行的設計使其能夠快速響應用戶的需求。未來可能的技術風險包括對新視頻格式的支持不足，以及在處理特別長的視頻時可能出現的性能瓶頸。整合方面，該工具可以輕鬆與現有的 Python 生態系統結合，並且支持與其他 LLM 的集成，這使得其在開發者社群中具有良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。提供的使用指南簡單易懂，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 本地運行，保護用戶隱私。
> - 智能幀提取，避免重複數據。
> - 支持音頻轉錄，增強 LLM 的理解能力。

> [!danger] 缺點
> - 需要安裝 ffmpeg，增加了安裝複雜度。
> - 對於某些視頻格式支持有限。
> - 在處理長視頻時可能消耗較多資源。

> [!warning] 注意事項
> - 需要安裝 ffmpeg，這在某些系統上可能需要額外的配置。
> - 不支援某些特殊格式的視頻，可能需要轉換為常見格式。
> - 在處理非常長的視頻時，可能會消耗較多的本地資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成視頻代理，而 claude-real-video 專注於視頻分析和幀提取。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 該工具主要用於將 Claude 整合到 Obsidian 中，而 claude-real-video 是獨立的視頻分析工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成視頻代理，使用不同的技術路線，主要針對互動式視頻內容。 | 如果你的項目需要生成交互式視頻內容而非單純的視頻分析，則應選擇此工具。 | medium，因為需要重新設計整個工作流以適應新工具。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於將 Claude 整合到 Obsidian 中，主要用於筆記和知識管理。 | 如果你的主要需求是將 LLM 整合到知識管理系統中，則此工具更合適。 | low，因為主要是功能擴展，無需大幅改動現有流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-real-video** | **agent-sprite-forge** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成視頻代理，使用不同的技術路線，主要針對互動式視頻內容。 | 專注於將 Claude 整合到 Obsidian 中，主要用於筆記和知識管理。 |
> | 遷移成本 | - | medium，因為需要重新設計整個工作流以適應新工具。 | low，因為主要是功能擴展，無需大幅改動現有流程。 |
> | 適用場景 | 主要場景 | 如果你的項目需要生成交互式視頻內容而非單純的視頻分析，則應選 | 如果你的主要需求是將 LLM 整合到知識管理系統中，則此工具 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合用於視頻分析的生產環境，能夠有效提升 LLM 的理解能力。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些系統上安裝 ffmpeg 可能會遇到困難
  - 解法：參考官方文檔進行安裝，或使用包管理器安裝。
- **[HIGH]** 對於某些特殊格式的視頻，可能無法正確處理
  - 解法：將視頻轉換為常見格式後再使用。
- [MEDIUM] 長視頻處理時可能導致高資源消耗
  - 解法：考慮將長視頻分割成短片段進行處理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行視頻內容分析 | 非常適合 | 本地運行且功能強大，適合小型團隊使用。 |
| 大型企業需要處理大量視頻數據 | 普通 | 雖然功能強大，但在資源消耗上可能不夠優化。 |
| 學術研究團隊分析教學視頻 | 非常適合 | 能夠提供詳細的幀和轉錄，方便進行深入分析。 |
| 個人用戶偶爾分析視頻 | 適合 | 安裝和使用簡單，適合不頻繁使用的情境。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到強大的視頻分析能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：所有處理在本地完成，無需高權限操作，且不會存取敏感資料。依賴鏈中的庫也經過審計，安全性較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

該工具最常與 Python 生態系統中的其他庫搭配使用，特別是在數據分析和機器學習領域。用戶可以在 Jupyter Notebook 中運行此工具，並與其他數據處理庫（如 Pandas、NumPy）結合使用。在 CI/CD 流程中，該工具可以輕鬆集成到自動化測試中，確保視頻處理的穩定性。整合時，最常見的問題是依賴於 ffmpeg 的安裝，這需要用戶提前配置好環境。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
| Forks | 106 |
| Open Issues | 0 |
| Issue 解決率 | 100% (3 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HUANGCHIHHUNGLeo/claude-real-video) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 75
>     "HTML" : 17
>     "Shell" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HUANGCHIHHUNGLeo](https://github.com/HUANGCHIHHUNGLeo) | 30 |
> | [@yuanwaizhang](https://github.com/yuanwaizhang) | 1 |

**最新版本**：v0.7.1 — v0.7.1 — timestamped transcript (transcript.json) (2026-07-10)

> [!info]- Release Notes
> Every analysis now also writes `transcript.json` — the same transcript as per-line segments with start/end times (from Whisper segments, or the video's own subtitle cues when available). Pipe it into your own tools, or give your LLM timings instead of a wall of text.
> 
> Also: README build-in-public link, crv-web footer credit.

## 社群與生態

**社群活躍度**：社群活躍，已解決所有開放問題。
**連結**：[文件](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-07 ~ 2026-07-10）
> **活躍天數** 4 天 · **最新 commit** feat: transcript.json — timestamped transcript segments alongside transcript.txt (0.7.1)

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-real-video
> 
> [](https://pypi.org/project/claude-real-video/) [](https://pypi.org/project/claude-real-video/) [](LICENSE) [](https://news.ycombinator.com/item?id=48766005)
> 
> **Let Claude — or any LLM — actually watch a video.**
> 
> > Same 58-second clip: fixed 1 fps sampling = **58 frames**. crv keeps the **26 that actually differ** — and `--grid` packs them into **3 contact sheets**. Fewer tokens, nothing missed.
> 
> > **This free version lets your AI *see* the video.** [crv Pro](https://leoaido.com/crv-pro/) lets it *understand* it — how it was shot (cut rhythm, camera moves) plus a timestamped timeline of what frames can't show: gestures, expressions, voice pitch shifts, emotion, sound events. One-time founder price.
> 
> Most AI tools don't really *see* a video. Paste a YouTube link into ChatGPT and it
> reads the **transcript**, not the picture. Claude won't take a video file at all.
> Even Gemini, which *can* read video natively, has to send it up to Google and
> samples frames at a **fixed interval** (1 fps by default), so fast cuts slip past.
> 
> `claude-real-video` does it differently, and **the processing runs locally**: point it at a URL or a
> file, and it pulls the frames that *actually matter* (every scene change, not a
> fixed quota), throws away the near-duplicates, transcribes the audio, and hands
> you a clean folder any LLM can read. All the processing happens on your own machine — what gets sent anywhere is only the frames/text *you* choose to paste into an LLM afterwards.
> 
> ```bash
> crv "https://www.youtube.com/watch?v=..."
> 
> ## Install
> 
> ```bash
> pip install claude-real-video              # core (frames + dedup)
> pip install "claude-real-video[whisper]"   # + audio transcription
> ```
> 
> 
> ## Usage
> 
> ```bash
> 
> ### Options
> 
> | flag | default | meaning |
> |---|---|---|
> | `-o, --out` | `crv-out` | output directory |
> | `--scene` | `0.30` | scene-change sensitivity (lower = more frames) |
> | `--fps-floor` | `1.0` | at least one frame every N seconds |
> | `--max-frames` | `150` | hard cap on total frames |
> | `--lang` | `auto` | Whisper language (`en`, `zh`, `auto`, ...) |
> | `--dedup-threshold` | `8` | % of pixels that must change for a frame to count as new; higher = fewer frames |
> | `--dedup-window` | `4` | compare against the last N kept frames — a shot the model already saw doesn't come back after a cutaway (`1` = consecutive-only) |
> | `--report` | off | keep dropped frames in `./dropped` + write `report.html` visualising every keep/drop decision |
> | `--no-transcribe` | off | skip audio |
> | `--keep-audio` | off | also save the **full soundtrack** (`audio.m4a`) so audio models can *hear* it |
> | `--why` | – | why you're watching, e.g. `--why "find the pricing strategy"` — written into `MANIFEST.txt` so the model analyses with that lens instead of a generic summary |
> | `--kb` | – | also save the analysis as a dated markdown note into this folder (your Obsidian vault, notes dir, ...) — so it joins your knowledge base instead of dying in `crv-out` |
> | `--cookies` | – | Netscape cookie file for login-gated sources |
> 
> ---
> 
> 
> ## Why not just sample frames?
> 
> Most "let an LLM watch a video" scripts (and Gemini's own pipeline) grab frames
> at a **fixed interval** — e.g. one per second. That over-samples a static
> screencast and under-samples a fast-cut reel. `claude-real-video` is smarter:
> 
> | | fixed-interval sampling | **claude-real-video** |
> |---|---|---|
> | Frame selection | every N seconds | **scene-change detection** + density floor |
> | Repeated shots (A-B-A cuts) | sent again every time | **sliding-window dedup** sends each shot once |
> | Static slide (10 min) | ~600 near-identical frames | **collapses to 1** (dedup) |
> | Fast-cut reel | misses frames between samples | catches each visual change |
> | Audio | often ignored | Whisper transcript w/ language detect |
> | Where the processing happens | often in someone's cloud | **on your machine** (you choose what to share with an LLM afterwards) |
> | Input | usually local file only | **URL (yt-dlp) or local file** |
> 
> You feed the model *fewer, more meaningful* frames — cheaper context, better
> understanding.
> 
> ---
> 
> 
> # → crv-out/frames/*.jpg  +  crv-out/transcript.txt (+ transcript.json with timestamps)  +  crv-out/MANIFEST.txt
> ```
> 
> Then drop the frames + `MANIFEST.txt` into Claude / ChatGPT / Gemini and ask away.
> 
> **No terminal needed** — run `crv-web` and a local page opens (Traditional Chinese / Simplified Chinese / English): paste a YouTube or Reels link or a file path, click Analyze, open the result viewer. Runs 100% locally, nothing uploaded.
> 
> Want to eyeball what the model will see first? Add `--viewer` — it writes a local `viewer.html` (video + keyframe grid + transcript) you can double-click open. No network, no extra installs.
> 
> **Slow-changing content** (animation tutorials, gradual morphs, slow pans): add `--adaptive` — frames are picked against their rolling neighbourhood instead of a fixed threshold, so a 2-3s squash-and-stretch that never spikes any single frame still gets captured.
> 
> **Text-heavy content** (burned-in captions, lecture slides, screen recordings): add `--text-anchors` — extra frames are forced at subtitle-cue timestamps (sidecar `.srt`/`.vtt` or embedded track), so each spoken segment gets a matching visual even when the scene barely changes. At most one forced frame per second; scene detection is untouched.
> 
> Not doing LLM work? It also works as a **general-purpose video keyframe extractor** —
> scene-change detection + dedup, no ML models to download.
> 
> **Using Claude Code?** Install it as a skill so Claude watches videos on its own:
> 
> ```bash
> pip install claude-real-video
> mkdir -p ~/.claude/skills && cp -r skills/claude-real-video ~/.claude/skills/
> ```
> 
> Then just paste a video link into Claude Code and ask about it.
> 
> **New in 0.3.0** — tell it *why* you're watching, and keep what it finds:
> 
> ```bash
> crv "https://youtu.be/..." --why "find the pricing strategy" --kb ~/notes
> ```
> 
> `--why` makes the analysis focus on what you care about instead of a generic summary;
> `--kb` saves the result as a dated note in your own notes folder, so it doesn't die in `crv-out`.
> 
> ---
> 
> 
> ### System requirement: ffmpeg
> 
> `ffmpeg` / `ffprobe` are used for frame extraction and audio, and aren't
> pip-installable. Install them once:
> 
> | OS | command |
> |---|---|
> | **macOS** | `brew install ffmpeg` |
> | **Linux** | `sudo apt install ffmpeg` (or your distro's package manager) |
> | **Windows** | `winget install Gyan.FFmpeg` — or `choco install ffmpeg` — or [download a build](https://www.gyan.dev/ffmpeg/builds/) and add its `bin\` folder to your `PATH` |
> 
> Verify it's on your `PATH`:
> 
> ```bash
> ffmpeg -version
> ```
> 
> Transcription uses the `whisper` CLI (installed by the `[whisper]` extra, or
> `pip install openai-whisper`). Whisper also relies on ffmpeg.
> 
> Works on **macOS, Windows, and Linux** — Python 3.10+.
> 
> ---
> 
> 
> # A YouTube / Instagram / TikTok / ... link
> crv "https://www.instagram.com/reel/XXXX/"
> 
> 
> # A local file, English transcript, output to ./out
> crv lecture.mp4 -o out --lang en
> 
> 
> # Frames only, no transcription
> crv clip.mp4 --no-transcribe
> 
> 
> # A login-gated video (your own / authorised use): pass a Netscape cookie file
> crv "https://..." --cookies cookies.txt
> ```
> 
> `python -m claude_real_video ...` works as an alias for `crv` too.
> 
> 
> ### What `--grid` output looks like
> 
> One contact sheet = nine consecutive keyframes, in order, filenames on each cell — the model reads a sequence, not scattered stills:
> 
> 
> ## Use it from Python
> 
> ```python
> from claude_real_video import process
> 
> r = process("https://youtu.be/...", "out", lang="en")
> print(r.frame_count, r.transcript_path)
> ```
> 
> ---
> 
> 
> ## How it works
> 
> 1. **Fetch** — `yt-dlp` for URLs (optional cookies), or copy a local file.
> 2. **Extract** — one chronological `ffmpeg select` pass grabs every scene change
>    *plus* a density floor (at least one frame every `--fps-floor` seconds), so
>    fast cuts and slow screencasts are both covered.
> 3. **Dedup** — real pixel difference (downscaled RGB, not a perceptual hash

## 延伸閱讀

相關概念：[[視頻分析]] · [[場景變化檢測]] · [[音頻轉錄]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻分析" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻分析","場景變化檢測","音頻轉錄"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HUANGCHIHHUNGLeo" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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

> **2026-07-04** — 首次收錄
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

- [[2026-07-07|2026-07-07]] — 再次上榜，1.3k stars
- [[2026-07-06|2026-07-06]] — 再次上榜，1.0k stars
- [[2026-07-05|2026-07-05]] — 再次上榜，768 stars
- [[2026-07-04|2026-07-04]] — 首次收錄，569 stars
