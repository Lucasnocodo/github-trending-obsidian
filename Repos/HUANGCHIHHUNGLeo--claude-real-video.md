---
repo: HUANGCHIHHUNGLeo/claude-real-video
url: https://github.com/HUANGCHIHHUNGLeo/claude-real-video
owner: HUANGCHIHHUNGLeo
owner_type: User
language: Python
license: MIT
description: "Let Claude (or any LLM) actually watch a video — scene-aware, deduplicated frames + transcript, from a URL or local file. Runs locally, MIT."
homepage: ""
stars: 1585
stars_per_day: 122
forks: 123
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-13
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "視頻處理"
release_tag: "v0.7.5"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-04
use_case: "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重幀和轉錄功能，支持從 URL 或本地文件導入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-10"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 2394
readme_length: 9840
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:569,2026-07-04:572,2026-07-05:768,2026-07-06:1029,2026-07-06:1034,2026-07-07:1276,2026-07-07:1276,2026-07-08:1370,2026-07-09:1424,2026-07-10:1458,2026-07-11:1479,2026-07-12:1519,2026-07-13:1565,2026-07-14:1585"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "claude-real-video"
  - "HUANGCHIHHUNGLeo/claude-real-video"
  - "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重幀和轉錄功能，支持從 URL 或本地文件導入。"
---

# claude-real-video

**1.6k** stars · **122** stars/天 · 建立 13 天前 · Python · MIT

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

`v0.7.5`

> [!summary] 一句話摘要
> 讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重幀和轉錄功能，支持從 URL 或本地文件導入。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (122 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在本地環境中進行視頻分析的 AI 研究者和開發者。
> **一句話重點** 這個專案突破了 LLM 只能讀取文字的限制，讓 AI 真正能夠理解視頻內容。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻處理" && p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、5 小時整合，得到能夠快速分析視頻的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於讓 LLM 能夠真正觀看視頻，而不僅僅是依賴文字轉錄。

## 專案簡介

這個專案的核心機制是讓 LLM 能夠直接觀看視頻，而不僅僅是讀取文字轉錄。用戶可以將視頻的 URL 或本地文件作為輸入，系統會提取出實際不同的幀，並生成相應的轉錄文本。這樣的設計使得 AI 能夠更好地理解視頻內容，而不是僅僅依賴固定時間間隔的幀抽取。關鍵指令如 `crv <video_url>` 便可啟動這個過程，並且支持 `--grid` 參數來生成幀的聯絡表。這個工具的賣點在於其能夠去重幀，僅保留那些實際上有變化的幀，從而減少處理的 token 數量，提升效率。

技術上，這個專案使用 Python 實現，並依賴於 `yt-dlp` 來下載視頻，`Pillow` 來處理圖像。

這樣的選擇使得整體架構輕量且高效，並且能夠在本地運行，避免了上傳視頻到雲端的延遲和隱私問題。相較於其他類似工具，如 `Gemini`，它需要將視頻上傳至 Google 並以固定的 1 fps 進行幀抽取，這可能會導致快速剪接的內容被忽略，而 `claude-real-video` 則能夠精確提取每個場景的幀。

在實際使用中，這個工具可以處理各種格式的視頻，並生成時間戳的幀資料，這對於需要分析視頻內容的場景非常有用。社群活躍度高，所有開放的 issue 都已經解決，顯示出良好的維護狀態。這個專案目前處於 beta 階段，適合需要在本地環境中進行視頻分析的開發者和研究者。

如果你正在開發需要視頻理解的應用，這個工具將會是個不錯的選擇；但如果你的需求是大規模的視頻處理，可能需要考慮其他更專業的解決方案。

**技術棧**：`Python 3.10` · `yt-dlp` · `Pillow`

## 重點功能

- 場景感知幀提取 — 僅保留實際不同的幀，減少處理的 token 數量，提升效率。
- 本地運行 — 所有處理在本地完成，避免上傳視頻的延遲和隱私問題。
- 支持多種視頻來源 — 可以從 URL 或本地文件導入視頻，靈活性高。
- 生成時間戳幀資料 — 提供幀的時間戳信息，方便後續分析。
- 簡單的 CLI 操作 — 使用 `crv <video_url>` 指令即可啟動視頻處理。

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
cat frames.json
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝依賴和配置環境",
  "crv <video_url>",
  "# 預期輸出：生成的幀和轉錄信息"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 1585 stars（122/天），forks 123（7.8%），顯示出不錯的增長潛力。作者 HUANGCHIHHUNGLeo 之前有相關的開源經驗，這個專案解決了 LLM 不能直接觀看視頻的痛點，之前的工具多數只能依賴文字轉錄，無法真正理解視頻內容。近期在社群中引發討論，特別是在 AI 和視頻處理的交集上，這樣的需求越來越受到重視。這個工具的設計使得本地處理成為可能，避免了上傳視頻的延遲和隱私風險，符合當前對於數據隱私的重視。

## 適合誰使用

**目標受眾**：需要在本地環境中進行視頻分析的 AI 研究者和開發者。

> [!example] 使用場景
> - 數據科學家用它來分析 YouTube 教學視頻，提取關鍵幀和轉錄，因為這樣能夠更快速地獲取視頻中的重要信息，提升工作效率。
> - AI 研究員用它來訓練 LLM，讓模型學習視頻內容，因為這樣能夠提供更豐富的數據來源，增強模型的理解能力。
> - 開發者用它來構建視頻摘要工具，從視頻中提取重要幀和信息，因為這樣能夠幫助用戶快速了解視頻內容，提升用戶體驗。

## 架構分析

這個專案採用 Python 作為主要開發語言，並利用 `yt-dlp` 下載視頻，`Pillow` 處理幀。其架構設計上，所有處理都在本地進行，這樣的選擇使得用戶能夠保護隱私並減少延遲。數據流從視頻下載開始，然後提取幀，最後生成轉錄文本。選擇本地運行的架構，雖然提高了用戶的數據安全性，但也意味著需要用戶擁有足夠的計算資源來處理視頻。整體而言，這樣的設計使得工具在隱私和性能之間取得了良好的平衡。

## 技術深入分析

這個專案的核心技術在於幀的去重和場景感知。使用 `yt-dlp` 下載視頻後，系統會分析每一幀，僅保留那些實際上有變化的幀，這樣的設計使得 AI 能夠更有效地理解視頻內容。整體效能方面，因為所有處理都在本地進行，對於計算資源的需求會隨著視頻的長度和解析度增加而增加，特別是在處理高解析度視頻時，可能會出現性能瓶頸。選擇 Python 作為開發語言能夠快速迭代，但也可能導致在性能上不如 C++ 等編譯語言。對於依賴的庫，`yt-dlp` 和 `Pillow` 都是成熟的選擇，降低了潛在的 vendor lock-in 風險。技術風險方面，隨著用戶數量的增加，可能會出現對於資源的競爭，導致性能下降。整合方面，這個工具能夠輕鬆與現有的 Python 生態系統集成，特別是在數據科學和 AI 領域，對於 CI/CD pipeline 的友好度也相對較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要用戶自行配置一些依賴。文件中有基本的 getting started guide，對於新手來說能夠快速上手。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 能夠實際觀看視頻，提供更豐富的上下文理解。
> - 本地處理，保護用戶隱私。
> - 簡單易用的 CLI 接口，方便集成到現有工作流中。

> [!danger] 缺點
> - 需要用戶具備一定的技術背景來安裝和配置環境。
> - 目前功能相對基礎，未來可能需要更多的擴展。
> - 對於大型視頻文件的處理可能會有性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要安裝 ffmpeg 來處理視頻
> - 不支持 Windows 環境的完整功能
> - 目前僅有基本的幀提取功能，未來可能會增加更多分析功能

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於視頻編輯和處理，但不具備場景感知的幀提取功能，適合需要進行視頻剪輯的用戶。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於代碼生成和編輯，與視頻處理無關，適合需要代碼輔助的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成視頻中的角色和場景，而非幀的去重和分析，適合需要創建視頻內容的用戶。 | 如果你的需求是生成視頻內容而非分析現有視頻，這個工具會更合適。 | medium，因為需要重新設計數據流和處理邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多個代理協作處理視頻，但不具備場景感知的幀提取功能，適合需要多代理協作的場景。 | 如果你的應用需要多個代理同時處理視頻，這個工具會更合適。 | high，因為需要重新設計整個架構以支持多代理協作。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-real-video** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成視頻中的角色和場景，而非幀的去重和分析，適合需要創建視頻內容的用戶。 | 提供多個代理協作處理視頻，但不具備場景感知的幀提取功能，適合需要多代理協作的場景。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和處理邏輯。 | high，因為需要重新設計整個架構以支持多代理協作。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成視頻內容而非分析現有視頻，這個工具會更合適 | 如果你的應用需要多個代理同時處理視頻，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在處理高解析度視頻時，可能會導致性能瓶頸
  - 解法：降低視頻解析度或使用更高效的硬體
- [MEDIUM] 需要安裝 ffmpeg，對於新手可能有一定的學習曲線
  - 解法：參考官方文檔進行安裝
- [low] 目前功能相對基礎，未來可能需要更多的擴展
  - 解法：關注未來的版本更新以獲取新功能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要分析教學視頻 | 非常適合 | 能夠快速提取關鍵幀和轉錄，提升分析效率。 |
| 大型企業需要處理大量視頻數據 | 不適合 | 在處理高解析度視頻時可能會出現性能瓶頸。 |
| 個人開發者希望在本地環境中進行視頻分析 | 適合 | 本地運行保護隱私，且易於使用。 |
| 需要多代理協作處理視頻的應用 | 普通 | 雖然可以使用，但不具備多代理協作的功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、5 小時整合，得到能夠快速分析視頻的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，不需要高權限，且不存取敏感資料。依賴的庫都是開源且經過廣泛使用，供應鏈風險較低。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Python 生態系統中的數據處理和 AI 框架搭配使用，通常在數據分析和模型訓練的環節中使用。實際整合範例：在一個用 Pandas 處理數據的專案中，可以用這個工具來提取視頻中的關鍵幀，具體做法是使用 `crv <video_url>` 指令來獲取幀資料，然後與 Pandas 整合進行進一步分析。支援 GitHub Actions 的 CI 流程，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於依賴的安裝和配置，對於新手來說可能需要一些時間來熟悉。

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
| Forks | 123 |
| Open Issues | 0 |
| Issue 解決率 | 100% (4 closed) |
| 最後推送 | 2026-07-13 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HUANGCHIHHUNGLeo/claude-real-video) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 76
>     "HTML" : 13
>     "Shell" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HUANGCHIHHUNGLeo](https://github.com/HUANGCHIHHUNGLeo) | 39 |
> | [@yuanwaizhang](https://github.com/yuanwaizhang) | 1 |

**最新版本**：v0.7.5 — 0.7.5 — quiet Pro pointer (2026-07-12)

> [!info]- Release Notes
> One plain line after each run pointing to crv Pro (opt out with CRV_NO_HINT=1) and a low-key Pro link in the viewer header. No behaviour changes otherwise.

## 社群與生態

**社群活躍度**：社群活躍，所有開放的 issue 已經解決。
**連結**：[文件](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-10 ~ 2026-07-13）
> **活躍天數** 3 天 · **最新 commit** feat: preserve per-frame source timestamps through the whole pipeline (frames.json)

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-real-video
> 
> [](https://pypi.org/project/claude-real-video/) [](https://pypi.org/project/claude-real-video/) [](LICENSE) [](https://news.ycombinator.com/item?id=48766005)
> 
> **Let Claude — or any LLM — actually watch a video.**
> 
> > **Naming:** crv is the short name for claude-real-video (the PyPI package). The paid add-on, **crv Pro**, is sold on Capafy under the listing name "llm-real-video Pro".
> 
> > Same 58-second clip: fixed 1 fps sampling = **58 frames**. crv keeps the **26 that actually differ** — and `--grid` packs them into **3 contact sheets**. Fewer tokens, nothing missed.
> 
> > **This free version lets your AI *see* the video.** [crv Pro](https://leoaido.com/crv-pro/) lets it *understand* it — how it was shot (cut rhythm, camera moves) plus a timestamped timeline of what frames can't show: gestures, expressions, voice pitch shifts, emotion, sound events. One-time founder price $19 — [get it on Capafy](https://capafy.ai/agent/llm-real-video-pro-let-any-llm-watch-videos/5451082151).
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
> **Text-heavy content** (lecture slides, screen recordings, talking-head explainers): add `--text-anchors` — extra frames are forced at subtitle-cue timestamps, so each spoken segment gets a matching visual even when the scene barely changes. Needs a sidecar `.srt`/`.vtt` or an embedded subtitle track — captions burned into the pixels can't be detected. At most one forced frame per second; scene detection is untouched.
> 
> Not doing LLM work? It also works as a **general-purpose video keyframe extractor** —
> scene-change detection + dedup, no ML models to download.
> 
> **Using Claude Code?** Install it as a skill so Claude watches videos on its own
> (the `skills/` folder lives in the repo, not in the pip package — clone it first):
> 
> ```bash
> pip install "claude-real-video[whisper]"
> git clone https://github.com/HUANGCHIHHUNGLeo/claude-real-video.git
> mkdir -p ~/.claude/skills && cp -r claude-real-video/skills/claude-real-video ~/.claude/skills/
> ```
> 
> Then just paste a video link into Claude Code and ask about it.
> 
> **New in 0.3.0*

## 延伸閱讀

相關概念：[[視頻處理]] · [[AI 視覺]] · [[自然語言處理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻處理" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
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
> const concepts = ["視頻處理","AI 視覺","自然語言處理"];
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
