---
repo: HUANGCHIHHUNGLeo/claude-real-video
url: https://github.com/HUANGCHIHHUNGLeo/claude-real-video
owner: HUANGCHIHHUNGLeo
owner_type: User
language: Python
license: MIT
description: "Let Claude (or any LLM) actually watch a video — scene-aware, deduplicated frames + transcript, from a URL or local file. Runs locally, MIT."
homepage: ""
stars: 1716
stars_per_day: 101
forks: 139
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-17
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "視頻分析"
release_tag: "v0.7.15"
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
contributor_count: 4
engagement: "low"
issue_close_rate: 100
repo_size_kb: 11318
readme_length: 9920
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:569,2026-07-04:572,2026-07-05:768,2026-07-06:1029,2026-07-06:1034,2026-07-07:1276,2026-07-07:1276,2026-07-08:1370,2026-07-09:1424,2026-07-10:1458,2026-07-11:1479,2026-07-12:1519,2026-07-13:1565,2026-07-14:1585,2026-07-15:1617,2026-07-16:1642,2026-07-17:1693,2026-07-18:1716"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/ffmpeg"
  - "topic/keyframe_extraction"
aliases:
  - "claude-real-video"
  - "HUANGCHIHHUNGLeo/claude-real-video"
  - "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持 URL 或本地文件。"
---

# claude-real-video

**1.7k** stars · **101** stars/天 · 建立 17 天前 · Python · MIT

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

`v0.7.15`

`claude` `claude-code` `cli` `ffmpeg` `keyframe-extraction` `llm` `multimodal` `python` `scene-detection` `transcription` `video-analysis` `whisper`

> [!summary] 一句話摘要
> 讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持 URL 或本地文件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (101 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在本地環境中分析視頻並使用 LLM 的開發者。
> **一句話重點** 這個專案讓 LLM 能夠真正理解視頻內容，開創了視頻分析的新方式。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的視頻分析工具，值得投入。

> [!abstract] 核心創新
> 這個專案的創新在於讓 LLM 能夠真正理解視頻內容，而不僅僅是依賴於文本轉錄。

## 專案簡介

這個專案的核心機制是讓 LLM（如 Claude）能夠實際觀看視頻，而不僅僅是讀取其轉錄文本。用戶可以通過提供視頻的 URL 或本地文件，工具會自動提取重要幀，去除重複的幀，並轉錄音頻，最終生成一個清晰的資料夾，供 LLM 使用。使用者只需執行 `crv "<video_url>"`，便能獲得所需的分析結果。這樣的設計使得 LLM 不再局限於靜態的文字轉錄，而是能夠理解視頻的視覺內容，這在許多 AI 工具中是無法實現的。這個工具的技術實作基於 Python，並依賴於 `yt-dlp` 進行視頻下載和 `Whisper` 進行音頻轉錄，這樣的選擇讓處理過程能夠在本地運行，避免了將數據上傳至雲端的風險。

與其他工具相比，如 Gemini，這個工具不僅能夠更精確地捕捉視頻中的變化，還能在本地處理，讓用戶能夠控制數據的隱私。實際使用中，這個工具能夠處理多達 150 幀的視頻，並且支持多種語言的轉錄，這對於需要分析多語言內容的用戶來說非常有用。這個專案的成熟度相對較高，已經有 100% 的問題解決率，社群活躍度也不錯。未來可能會進一步擴展功能，例如支持更多的視頻格式或增強的分析能力。對於需要在視頻分析中使用 LLM 的開發者來說，這是一個值得考慮的工具，但對於不需要這種功能的用戶則可能顯得過於複雜。

**技術棧**：`Python 3.10` · `yt-dlp` · `Whisper`

## 重點功能

- 場景感知幀提取 — 根據場景變化自動提取幀，避免重複幀，提升分析效率。
- 音頻轉錄功能 — 使用 Whisper 進行音頻轉錄，支持多種語言。
- 本地處理 — 所有數據處理在本地進行，保護用戶隱私。
- 自適應場景檢測 — 能夠捕捉慢速變化的場景，保證不漏掉重要信息。
- 多種輸出選項 — 支持輸出幀、轉錄文本、報告等多種格式，方便用戶使用。

## 快速開始

1. 安裝核心功能
```bash
pip install claude-real-video
```
2. 安裝轉錄功能
```bash
pip install "claude-real-video[whisper]"
```
3. 執行視頻分析
```bash
crv "<video_url>"
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 claude-real-video",
  "指令": "crv \"https://www.youtube.com/watch?v=...\"",
  "預期輸出": "提取的幀和轉錄文本將保存在指定的輸出目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天內累積 1716 stars（101/天），forks 139（8.1%），顯示出不錯的增長潛力。作者 HUANGCHIHHUNGLeo 之前的專案涉及 AI 和視頻處理，這讓他在這個領域有一定的經驗。這個工具解決了 LLM 在視頻分析上的痛點，因為大多數工具只能處理文本而無法真正理解視頻內容。最近的社群討論和反饋也促進了這個專案的快速迭代。技術上，隨著本地處理能力的提升，這個工具能夠在不依賴雲端的情況下運行，這是其受歡迎的原因之一。forks/stars 比率為 8.1%，顯示出有相當比例的用戶在進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要在本地環境中分析視頻並使用 LLM 的開發者。

> [!example] 使用場景
> - 數據科學家用它來分析 YouTube 教學視頻，因為能夠提取重要幀和轉錄音頻，節省了手動查看的時間。
> - 內容創作者用它來快速生成視頻摘要，因為能夠自動去除重複幀，讓摘要更加精簡。
> - 教育工作者用它來製作課程材料，因為能夠將視頻中的關鍵信息提取出來，方便學生理解。
> - 市場分析師用它來分析競爭對手的視頻廣告，因為能夠捕捉到快速變化的場景，提供更準確的數據支持。

## 架構分析

這個專案採用 Python 作為主要開發語言，並使用 `yt-dlp` 進行視頻下載，`Whisper` 進行音頻轉錄。整個架構設計為本地處理，這樣用戶能夠控制數據的隱私和安全。數據流中，視頻首先被下載，然後提取幀，接著進行去重，最後進行音頻轉錄，所有處理都在用戶的機器上進行。

這樣的設計使得用戶能夠獲得更高的效率和更低的延遲，但也意味著需要用戶擁有一定的計算資源。選擇本地處理而非雲端處理的代價是需要用戶自行管理所有的依賴和環境配置。整體上，這個架構在處理速度和數據隱私之間取得了良好的平衡。

## 技術深入分析

這個專案的核心技術機制是基於 Python 的視頻處理和音頻轉錄。使用 `yt-dlp` 下載視頻，然後通過自動化的幀提取和去重算法來獲取重要的幀。音頻部分則使用 Whisper 進行轉錄，支持多種語言，這使得它在多語言環境中表現出色。效能方面，這個工具能夠處理高達 150 幀的視頻，並且能夠根據用戶的需求進行自適應場景檢測。

設計上選擇了本地處理而非雲端處理，這樣不僅保護了用戶的數據隱私，還能提高處理速度。這樣的選擇雖然增加了用戶的安裝和配置成本，但卻能提供更高的靈活性和控制權。技術風險方面，隨著視頻處理需求的增加，可能會出現性能瓶頸，特別是在處理大型視頻時。整合方面，這個工具能夠與多種 LLM 兼容，並且支持 CLI 操作，這使得它在現有的開發流程中能夠輕鬆集成。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並附有範例。安裝過程相對順暢，但對於新手來說可能需要一些時間來理解依賴配置。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 能夠本地處理視頻，保護用戶隱私。
> - 自動去重幀，提升分析效率。
> - 支持多種語言的音頻轉錄，擴展應用場景。
> - 提供多種輸出格式，方便用戶使用。

> [!danger] 缺點
> - 需要用戶自行安裝和配置依賴，對新手不太友好。
> - 對於某些視頻格式的支持有限，可能需要額外的處理。
> - 在處理大型視頻時可能需要較高的計算資源。
> - 不支持 Windows 系統的某些功能，可能需要 WSL。

> [!warning] 注意事項
> - 僅支援 Python 3.10 及以上版本。
> - 需要安裝額外的依賴包以啟用音頻轉錄功能。
> - 對於某些視頻格式可能無法正確處理。
> - 不支持 Windows 系統的某些功能，可能需要 WSL。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成多模態代理，而不是視頻分析，適合需要創建交互式代理的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具主要用於數據清理和處理，並不專注於視頻內容的分析，適合需要處理雜亂數據的情境。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 這個工具是針對代碼生成的，而非視頻分析，適合需要生成代碼的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成多模態代理，而不是視頻分析，適合需要創建交互式代理的場景。 | 如果你的團隊需要創建多模態代理並且不專注於視頻分析，這是更合適的選擇。 | low，因為兩者的接口和使用方式有相似之處。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具主要用於數據清理和處理，並不專注於視頻內容的分析，適合需要處理雜亂數據的情境。 | 如果你的需求主要集中在數據清理而非視頻分析，這是更好的選擇。 | medium，因為需要重新調整工作流程以適應不同的功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-real-video** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於生成多模態代理，而不是視頻分析，適合需要創建交互式代理的場景。 | 這個工具主要用於數據清理和處理，並不專注於視頻內容的分析，適合需要處理雜亂數據的情境。 |
> | 遷移成本 | - | low，因為兩者的接口和使用方式有相似之處。 | medium，因為需要重新調整工作流程以適應不同的功能。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要創建多模態代理並且不專注於視頻分析，這是更合 | 如果你的需求主要集中在數據清理而非視頻分析，這是更好的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些視頻格式可能無法正確處理，特別是較少見的格式。
  - 解法：轉換視頻格式為常見格式如 MP4 再進行處理。
- [MEDIUM] 在處理大型視頻時，可能會出現性能瓶頸。
  - 解法：考慮將視頻分割成小段進行處理。
- [MEDIUM] 安裝過程中可能會遇到依賴版本不兼容的問題。
  - 解法：確保所有依賴包的版本符合要求，必要時手動調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊進行視頻內容分析 | 非常適合 | 能夠高效提取關鍵幀和轉錄音頻，提升工作效率。 |
| 大型企業的視頻數據處理 | 普通 | 雖然功能強大，但可能需要較高的計算資源。 |
| 教育機構用於教學視頻分析 | 非常適合 | 能夠自動提取和轉錄，方便學生理解。 |
| 個人開發者進行視頻分析 | 適合 | 功能豐富，能夠滿足個人項目的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的視頻分析工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具在本地運行，不需要高權限，並且不會存取敏感資料。依賴鏈的信任程度較高，沒有已知的供應鏈風險。

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
| Forks | 139 |
| Open Issues | 0 |
| Issue 解決率 | 100% (5 closed) |
| 最後推送 | 2026-07-17 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 11.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HUANGCHIHHUNGLeo/claude-real-video) |
| Topics | `claude` `claude-code` `cli` `ffmpeg` `keyframe-extraction` `llm` `multimodal` `python` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 82
>     "HTML" : 10
>     "Shell" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HUANGCHIHHUNGLeo](https://github.com/HUANGCHIHHUNGLeo) | 59 |
> | [@yuanwaizhang](https://github.com/yuanwaizhang) | 1 |
> | [@jiunhan1101](https://github.com/jiunhan1101) | 1 |
> | [@johnmarius-cloud](https://github.com/johnmarius-cloud) | 1 |

**最新版本**：v0.7.15 — v0.7.15 — typed gate verdicts (community-suggested) (2026-07-17)

> [!info]- Release Notes
> Refactor from r/ClaudeAI feedback on [the VAD-gate post](https://www.reddit.com/r/ClaudeAI/comments/1uyusdm/): the transcription gate now returns typed statuses — `accepted` / `no_signal` / `error` — and only `error` may enter the whisper-CLI fallback path. A valid empty result (music-only audio) structurally cannot re-trigger the ungated engine anymore; with the sentinel from 0.7.13 that invariant relied on discipline, now it's the type system. Suggested by u/_suren — thanks.

## 社群與生態

**社群活躍度**：社群活躍度不錯，問題解決率為 100%。
**連結**：[文件](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-17）
> **活躍天數** 1 天 · **最新 commit** docs: add Lemon Squeezy card checkout link alongside Capafy

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-real-video
> 
> [](https://pypi.org/project/claude-real-video/) [](https://pypi.org/project/claude-real-video/) [](LICENSE) [](https://news.ycombinator.com/item?id=48766005)
> 
> **Let Claude — or any LLM — actually watch a video.**
> 
> ```bash
> pip install "claude-real-video[whisper]"
> npx skills add HUANGCHIHHUNGLeo/claude-real-video   # one command, installs the skill into Claude Code, Cursor, Codex, Copilot, Gemini CLI & 50+ agent hosts
> ```
> 
> Then paste a video link into your agent and ask about it. (CLI-only use? `crv ""` works with just the pip install.)
> 
> > **Naming:** crv is the short name for claude-real-video (the PyPI package). The paid add-on, **crv Pro**, is sold on Capafy under the listing name "llm-real-video Pro".
> 
> > Same 58-second clip: fixed 1 fps sampling = **58 frames**. crv keeps the **26 that actually differ** — and `--grid` packs them into **3 contact sheets**. Fewer tokens, nothing missed.
> 
> > **This free version lets your AI *see* the video.** [crv Pro](https://leoaido.com/crv-pro/) lets it *understand* it — how it was shot (cut rhythm, camera moves) plus a timestamped timeline of what frames can't show: gestures, expressions, voice pitch shifts, emotion, sound events. One-time founder price $19 through July 31 ($29 from August 1) — [get it on Capafy](https://capafy.ai/agent/llm-real-video-pro-let-any-llm-watch-videos/5451082151) or [buy with card via Lemon Squeezy](https://leoaido.lemonsqueezy.com/checkout/buy/ff552000-adc0-49f1-8eec-5e8ada1905a1).
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
> pip install "claude-real-video[whisper]"   # recommended: frames + dedup + audio transcription
> pip install claude-real-video              # core only (frames + dedup)
> ```
> 
> pip extras never install themselves — without `[whisper]` there is **no speech-to-text**
> (videos that ship their own subtitles still get a transcript).
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
> | `--overwrite` | off | replace a previous analysis living in the output directory (without this, a non-empty output dir is refused to avoid mixing videos) |
> | `--scene` | `0.30` | scene-change sensitivity (lower = more frames) |
> | `--fps-floor` | `1.0` | at least one frame every N seconds |
> | `--max-frames` | `150` | hard cap on total frames |
> | `--adaptive` | off | adaptive scene detection: catches slow morphs (2-3s squash/stretch, gradual pans) a fixed threshold misses, by comparing each frame against its rolling neighbourhood |
> | `--text-anchors` | off | force extra frames at subtitle-cue timestamps (sidecar `.srt`/`.vtt` or embedded track) — for videos where meaning changes faster than pixels; at most one forced frame per second |
> | `--speakers` | off | label every transcript line with the speaker (`[SPEAKER_00]` …) via local diarization — needs `pip install "claude-real-video[speakers]"`, 45 MB model downloads once |
> | `--lang` | `auto` | Whisper language (`en`, `zh`, `auto`, ...) |
> | `--whisper-model` | `base` | Whisper model for transcription (`tiny`/`base`/`small`/`medium`/`large`/`turbo` — base is fast; **want sharper transcripts? `--whisper-model turbo` is one flag away**: close to large-v2 accuracy at ~8x the speed, one-time 1.6GB download, ~6GB memory) |
> | `--dedup-threshold` | `8` | % of pixels that must change for a frame to count as new; higher = fewer frames (the settled-local detector's gate scales with it too) |
> | `--dedup-window` | `4` | compare against the last N kept frames — a shot the model already saw doesn't come back after a cutaway (`1` = consecutive-only) |
> | `--report` | off | keep dropped frames in `./dropped` + write `report.html` visualising every keep/drop decision |
> | `--no-transcribe` | off | skip audio |
> | `--keep-audio` | off | also save the **full soundtrack** (`audio.m4a`) so audio models can *hear* it |
> | `--viewer` | off | also write `viewer.html` — browse the video, keyframes and transcript in one local page (double-click to open) |
> | `--grid` | off | also tile the kept frames into 3x3 contact sheets (`./grids`) — consecutive frames side by side help the model follow motion and progression |
> | `--why` | – | why you're watching, e.g. `--why "find the pricing strategy"` — written into `MANIFEST.txt` so the model analyses with that lens instead of a generic summary |
> | `--kb` | – | also save the analysis as a dated markdown note into this folder (your Obsidian vault, notes dir, ...) — so it joins your knowledge base instead of dying in `crv-out` |
> | `--cookies` | – | Netscape cookie file for login-gated sources |
> | `--cookies-from-browser` | – | read login cookies straight from your own browser — `chrome`, `safari`, `firefox` or `edge` (your own account only) |
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
> # → crv-out/frames/*.jpg  +  frames.json (per-frame timestamps)  +  transcript.txt/.json  +  MANIFEST.txt
> ```
> 
> Then drop the frames + `MANIFEST.txt` into Claude / ChatGPT / Gemini and ask away.
> 
> **No terminal needed** — run `crv-web` and a local page opens (Traditional Chinese / Simplified Chinese / English): paste a YouTube or Reels link or a file path, click Analyze, open the result viewer. Video analysis and output generation run on your machine — the source video never gets uploaded. (If you then paste the extracted frames or transcript into a cloud LLM, that data goes to that provider.)
> 
> Want to eyeball what the model will see first? Add `--viewer` — it writes a local `viewer.html` (video + keyframe grid + transcript) you can double-click open. No network, no extra installs.
> 
> **Slow-changing content** (animation tutorials, gradual morphs, slow pans): add `--adaptive` — frames are picked against their rolling neighbourhood instead of a fixed threshold, so a 2-3s squash-and-stretch that never spikes any single frame still gets captured.
> 
> **Text-heavy content** (lecture slides, screen recordings, talking-head explainers): add `--text-anchors` — extra frames are forced at subtitle-cue timestamps, so each spoken segment gets a matching visual even when the scene barely changes. Needs a sidecar `.srt`/`.vtt` or an embedded subtitle track — captions burned into the pixels can't be detected. 

## 延伸閱讀

相關概念：[[多模態]] · [[視頻分析]] · [[音頻轉錄]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

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
> const concepts = ["多模態","視頻分析","音頻轉錄"];
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
