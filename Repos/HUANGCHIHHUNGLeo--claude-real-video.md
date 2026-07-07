---
repo: HUANGCHIHHUNGLeo/claude-real-video
url: https://github.com/HUANGCHIHHUNGLeo/claude-real-video
owner: HUANGCHIHHUNGLeo
owner_type: User
language: Python
license: MIT
description: "Let Claude (or any LLM) actually watch a video — scene-aware, deduplicated frames + transcript, from a URL or local file. Runs locally, MIT."
homepage: ""
stars: 1276
stars_per_day: 213
forks: 78
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-06
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "視頻分析"
release_tag: "v0.5.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-04
use_case: "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持從 URL 或本地文件導入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-10"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 1125
readme_length: 8923
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:569,2026-07-04:572,2026-07-05:768,2026-07-06:1029,2026-07-06:1034,2026-07-07:1276,2026-07-07:1276"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "claude-real-video"
  - "HUANGCHIHHUNGLeo/claude-real-video"
  - "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持從 URL 或本地文件導入。"
---

# claude-real-video

**1.3k** stars · **213** stars/天 · 建立 6 天前 · Python · MIT

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

`v0.5.4` `easy-install`

> [!summary] 一句話摘要
> 讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持從 URL 或本地文件導入。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (213 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在本地環境中分析視頻內容的開發者和研究人員。
> **一句話重點** 這個專案讓 LLM 能夠真正理解視頻內容，開創了視頻分析的新局面。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效的視頻分析工具，值得投資。

> [!abstract] 核心創新
> 這個專案的創新在於能夠讓 LLM 實際觀看視頻，而不僅僅是讀取轉錄文本。

## 專案簡介

這個專案的核心機制是讓 LLM 能夠實際分析視頻內容，而不僅僅是依賴文字轉錄。用戶可以將視頻的 URL 或本地文件輸入，系統會自動提取出重要幀，去除重複的幀，並轉錄音訊，最終生成一個可供 LLM 使用的整潔資料夾。這樣的設計使得 LLM 能夠更有效地理解視頻的內容，特別是快節奏的剪輯，因為它不再依賴固定的幀抽樣，而是根據場景變化來選擇幀。關鍵指令 `crv <video_url>` 便可啟動這一過程，並生成所需的幀和轉錄文本。

技術上，這個工具使用 Python 實作，依賴於 `yt-dlp` 來下載視頻，`Pillow` 用於圖像處理，並可選擇性使用 `openai-whisper` 進行音訊轉錄。這樣的選擇使得整體架構輕量且高效，且無需外部依賴，能夠完全在本地運行。



與其他視頻分析工具相比，這個專案的優勢在於其本地處理能力，避免了將視頻上傳到雲端的隱私風險。像是 OpenAI 的工具通常需要將視頻上傳並進行固定幀抽樣，這可能會導致重要信息的遺失，而 `claude-real-video` 則能夠保留每個場景的關鍵幀，並且生成的資料更為精簡。

在使用效果上，這個工具能夠處理各種格式的視頻，並且不受網路延遲影響，因為所有處理都是在本地進行。使用者可以期待快速的處理速度，尤其是在短視頻的情況下，並且能夠靈活地選擇需要提交給 LLM 的幀和文本。

這個專案目前處於穩定狀態，適合需要視頻分析的開發者，尤其是那些希望在本地環境中進行數據處理的團隊。未來可能會進一步擴展功能，例如增加對更多視頻格式的支持或改進轉錄準確性。

**技術棧**：`Python 3.10` · `yt-dlp` · `Pillow`

## 重點功能

- 場景感知幀提取 — 根據場景變化提取幀，避免固定抽樣的限制。
- 去重幀處理 — 自動去除重複幀，減少 LLM 處理的 token 數量。
- 本地處理 — 所有處理在本地進行，保護用戶隱私。
- 音訊轉錄 — 使用 `openai-whisper` 進行音訊轉錄，生成文本。
- 支持多種視頻來源 — 可從 URL 或本地文件導入視頻進行處理。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 運行視頻處理
```bash
crv <video_url>
```
3. 查看生成的幀和轉錄
```bash
在指定資料夾中查看幀和文本文件。
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝所有依賴。",
  "指令": "crv <video_url>",
  "預期輸出": "生成幀和轉錄文本，存放在指定資料夾中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1276 stars（213/天），forks 78（6.1%），這顯示出強烈的興趣和潛在的使用者基礎。作者 HUANGCHIHHUNGLeo 在開源社群中活躍，過去的專案也集中在 AI 和視頻處理領域，這使得他具備相關的技術背景。這個專案解決了現有 LLM 無法有效處理視頻的痛點，特別是在場景變化快速的情況下，提供了一個本地化的解決方案，避免了上傳視頻的隱私問題。社群的反饋和需求推動了這個工具的快速成長，並且在 HN 等平台上引起了討論。

## 適合誰使用

**目標受眾**：需要在本地環境中分析視頻內容的開發者和研究人員。

> [!example] 使用場景
> - 數據科學家用它來分析 YouTube 教學視頻，因為能夠快速提取關鍵幀和轉錄文本，減少手動標註的時間。
> - 內容創作者用它來生成視頻摘要，因為可以自動提取重要幀並生成文本，提升工作效率。
> - AI 研究員用它來訓練模型，因為能夠提供更豐富的視頻數據，幫助模型學習場景變化和音訊特徵。

## 架構分析

這個專案採用 Python 實作，架構上以模組化的方式設計，主要功能分為幀提取、音訊轉錄和資料輸出。幀提取部分使用 `yt-dlp` 下載視頻，然後利用 `Pillow` 進行圖像處理，確保只保留重要的幀。音訊轉錄則是可選的，使用 `openai-whisper` 進行音訊分析，這樣的設計使得整體運行效率高且無需依賴外部服務。選擇本地處理的方式，雖然增加了使用者的計算負擔，但卻大幅提升了隱私保護，因為所有數據都不會上傳。這樣的設計使得使用者能夠完全掌控自己的數據，並且在處理速度上也能夠獲得更好的體驗。

## 技術深入分析

這個專案的核心技術機制在於幀提取和音訊轉錄。幀提取使用 `yt-dlp` 下載視頻，然後利用 `Pillow` 進行圖像處理，確保提取的幀是根據場景變化而非固定時間間隔，這樣可以避免重要信息的遺失。音訊轉錄則是使用 `openai-whisper`，這使得音訊的轉錄準確性得以提升。整體效能方面，這個工具能夠處理多達數小時的視頻，但具體的處理時間會依賴於視頻的長度和複雜性。

選擇 Python 作為開發語言使得這個工具在開發和維護上都相對簡單，但也可能在性能上略遜於 C++ 等低階語言。這個專案的依賴關係相對簡單，主要依賴於 `yt-dlp` 和 `Pillow`，這使得整體安裝和使用都相對容易。技術風險方面，隨著視頻文件的增大，處理時間和資源消耗會顯著增加，這可能會影響使用者的體驗。整合方面，這個工具可以輕鬆地與現有的 Python 生態系統整合，並且可以在 CI/CD pipeline 中使用，這使得它在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並且包含了範例指令。安裝過程相對順暢，不會遇到太多坑。整體來說，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 本地處理，保護用戶隱私。
> - 能夠有效提取重要幀，減少無用數據。
> - 支持多種視頻來源，靈活性高。

> [!danger] 缺點
> - 需要一定的計算資源來處理視頻。
> - 不支持實時視頻流處理，僅限靜態視頻。
> - 對於大型視頻文件，處理時間可能較長。

> [!warning] 注意事項
> - 僅支持 Python 3.10 及以上版本。
> - 需要安裝 `yt-dlp` 和 `Pillow` 作為依賴。
> - 不支持實時視頻處理，僅能處理靜態視頻文件。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成視頻中的角色和物體，而非幀提取和轉錄，適合不同的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供視頻編輯功能，但不具備場景感知的幀提取能力，適合需要編輯而非分析的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成視頻中的角色和物體，而非幀提取和轉錄，適合不同的應用場景。 | 如果你的需求是生成視頻中的角色而非分析視頻內容，這個工具會更合適。 | medium，因為需要重新設計數據處理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供視頻編輯功能，但不具備場景感知的幀提取能力，適合需要編輯而非分析的用戶。 | 如果你的需求是對視頻進行編輯而非分析，這個工具會更合適。 | low，因為編輯和分析的需求有所不同，但數據格式可能需要調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-real-video** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成視頻中的角色和物體，而非幀提取和轉錄，適合不同的應用場景。 | 提供視頻編輯功能，但不具備場景感知的幀提取能力，適合需要編輯而非分析的用戶。 |
> | 遷移成本 | - | medium，因為需要重新設計數據處理流程。 | low，因為編輯和分析的需求有所不同，但數據格式可能需要調整。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成視頻中的角色而非分析視頻內容，這個工具會更 | 如果你的需求是對視頻進行編輯而非分析，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 處理大型視頻時可能會導致記憶體不足的問題。
  - 解法：分段處理視頻，避免一次性加載過多數據。
- [MEDIUM] 音訊轉錄的準確性可能受限於背景噪音。
  - 解法：在安靜環境下錄製視頻以提高轉錄質量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端視頻分析 | 非常適合 | 能夠在本地環境中快速處理視頻，保護數據隱私。 |
| 大型企業的視頻內容管理系統 | 普通 | 雖然功能強大，但處理大型視頻的性能可能成為瓶頸。 |
| 學術研究中的視頻數據分析 | 適合 | 能夠提供精確的幀和轉錄，適合需要高準確度的研究。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的視頻分析工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個工具本身不需要高權限運行，所有處理都在本地進行，並不存取敏感資料，整體安全性高。

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
| Forks | 78 |
| Open Issues | 0 |
| Issue 解決率 | 100% (2 closed) |
| 最後推送 | 2026-07-06 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HUANGCHIHHUNGLeo/claude-real-video) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 74
>     "HTML" : 26
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HUANGCHIHHUNGLeo](https://github.com/HUANGCHIHHUNGLeo) | 23 |
> | [@yuanwaizhang](https://github.com/yuanwaizhang) | 1 |

**最新版本**：v0.5.4 — v0.5.4 — --viewer lightbox: browse frames without leaving the page (2026-07-06)

> [!info]- Release Notes
> Clicking a keyframe thumbnail in `viewer.html` now opens an **in-page lightbox** instead of a new tab (#3): arrow keys or on-screen chevrons to move between frames, ESC / click-outside to close, filename + position caption. No dependencies, still works fully offline from `file://`.
> 
> Thanks @rpakishore for the request.

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高，回應迅速。
**連結**：[文件](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-05 ~ 2026-07-06）
> **活躍天數** 2 天 · **最新 commit** README: tighten 'local' wording — processing is local, frames you share go to your LLM provider

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
> # → crv-out/frames/*.jpg  +  crv-out/transcript.txt  +  crv-out/MANIFEST.txt
> ```
> 
> Then drop the frames + `MANIFEST.txt` into Claude / ChatGPT / Gemini and ask away.
> 
> Want to eyeball what the model will see first? Add `--viewer` — it writes a local `viewer.html` (video + keyframe grid + transcript) you can double-click open. No network, no extra installs.
> 
> **Slow-changing content** (animation tutorials, gradual morphs, slow pans): add `--adaptive` — frames are picked against their rolling neighbourhood instead of a fixed threshold, so a 2-3s squash-and-stretch that never spikes any single frame still gets captured.
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
> 3. **Dedup** — real pixel difference (downscaled RGB, not a perceptual hash — hashes
>    go blind on flat colours and equal-luma hue changes) against a **sliding window**
>    of the last `--dedup-window` kept frames, so an A-B-A cutaway doesn't re-send a
>    shot the model has already seen. `--report` writes `report.html` showing every
>    keep/drop decision with its diff %, for tuning.
> 4. **Text** — if the video **already has subtitles** (a sidecar `.srt`/`.vtt` next to a
>    local file, or an embedded subtitle track), those are used as the transcript —
>    faster and more accurate than re-transcribing. Only when there are no subtitles
>    does it fall back to **Whisper** on the audio (skipped 

## 延伸閱讀

相關概念：[[視頻分析]] · [[音訊轉錄]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

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
> const concepts = ["視頻分析","音訊轉錄","機器學習"];
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
