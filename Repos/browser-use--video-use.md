---
repo: browser-use/video-use
url: https://github.com/browser-use/video-use
owner: browser-use
owner_type: Organization
language: Python
license: N/A
description: "Edit videos with coding agents"
homepage: ""
stars: 5715
stars_per_day: 301
forks: 802
open_issues: 13
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
use_case: "讓編輯影片變得簡單，只需與 Claude Code 對話即可完成。"
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
star_history: "2026-04-18:950,2026-04-18:960,2026-04-19:1252,2026-04-19:1256,2026-04-20:1537,2026-04-21:1784,2026-04-22:2488,2026-04-23:3298,2026-04-24:3810,2026-04-25:4263,2026-04-26:4622,2026-04-27:4837,2026-04-28:5091,2026-04-29:5333,2026-04-30:5538,2026-05-01:5715"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "video-use"
  - "browser-use/video-use"
  - "讓編輯影片變得簡單，只需與 Claude Code 對話即可完成。"
---

# video-use

**5.7k** stars · **301** stars/天 · 建立 19 天前 · Python · 未標註授權

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
> 讓編輯影片變得簡單，只需與 Claude Code 對話即可完成。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (301 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 7 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要快速且高效編輯影片的內容創作者，尤其是對技術不太熟悉的使用者。
> **一句話重點** 這個專案的創新在於將對話式介面與影片編輯結合，讓編輯過程變得更加直觀和高效。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的影片編輯工具，值得嘗試。

> [!abstract] 核心創新
> 透過對話式介面實現自動化影片編輯，無需手動設定預設或選單。

## 專案簡介

video-use 是一個基於對話的影片編輯工具，使用者只需將原始影片放入資料夾，然後與 Claude Code 進行對話，最終會生成 `final.mp4`。這個工具的核心在於自動化編輯過程，包括去除填充詞（如 `umm`、`uh`）和死空間，並且能夠自動進行色彩調整。它還能在每個剪接點進行 30ms 的音頻淡入淡出，避免聽到突兀的聲音。使用者可以自定義字幕樣式，並且透過 Manim 等工具生成動畫覆蓋層。這些功能都在一個自我評估的循環中進行，確保每次輸出都符合預期。最重要的是，這個工具完全開源，並且不需要用戶手動設定預設或選單。使用者只需在 Claude Code 中輸入簡單的指令，即可完成整個編輯流程，這使得影片編輯變得更加直觀和高效。

**技術棧**：`Python 3.10` · `ffmpeg` · `librosa` · `matplotlib` · `pillow` · `numpy`

## 重點功能

- 自動去除填充詞 — 能夠識別並刪除影片中的填充詞和死空間。
- 自動色彩調整 — 提供多種色彩風格選擇，並可自定義 ffmpeg 鏈。
- 音頻淡入淡出 — 在每個剪接點自動進行 30ms 的音頻淡入淡出處理。
- 自動生成字幕 — 根據用戶自定義樣式自動生成字幕，支援 2 字元大寫塊。
- 生成動畫覆蓋層 — 支援透過 Manim 等工具生成動畫，並可並行處理。
- 自我評估功能 — 在每次剪接後自動檢查輸出，確保質量。
- 持久化會話記憶 — 將編輯過程中的重要資訊保存至 `project.md`。

## 快速開始

1. 克隆專案並進入資料夾
```bash
git clone https://github.com/browser-use/video-use ~/Developer/video-use
```
2. 安裝依賴
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
  "# 前置條件：已安裝並設定好環境",
  "cd /path/to/your/videos",
  "claude    # 或 codex, hermes 等",
  "# 預期輸出：編輯後的影片將生成於 /edit/final.mp4"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天內累積 5715 stars（301/天），forks 802（14.0%），這顯示出強烈的社群興趣。這個專案的主要貢獻者 gregpr07 和 antoinersx 在開源社群中有一定的影響力，並且這個工具解決了傳統影片編輯軟體操作繁瑣的痛點，讓用戶能夠透過對話進行編輯，這在過去是難以實現的。這種創新的編輯方式吸引了許多希望簡化工作流程的使用者。最近的 commit 活動顯示出活躍的開發進度，並且社群對於授權問題的討論也顯示出對商業整合的需求。

## 適合誰使用

**目標受眾**：需要快速且高效編輯影片的內容創作者，尤其是對技術不太熟悉的使用者。

> [!example] 使用場景
> - 影片創作者用它來快速編輯旅行影片，因為只需將素材放入資料夾並與 Claude Code 對話，能節省大量手動編輯時間。
> - 教育工作者用它來製作教學影片，因為自動去除填充詞和死空間的功能能讓影片內容更加精簡，提升學習效果。
> - 社交媒體經營者用它來編輯短片，因為能快速生成符合平台需求的影片，並且自動化的字幕生成提高了影片的可接觸性。

## 架構分析

video-use 採用了一種基於對話的編輯架構，核心在於將音頻和視覺資料進行結合，讓 LLM 能夠精確地進行剪接。其資料流包括將音頻轉錄為文字，並生成視覺化的時間軸圖像，這樣 LLM 可以在決策點進行參考。這種設計的好處是減少了對大量視覺資料的需求，僅需處理必要的圖像，從而降低了計算負擔。選擇使用 Python 作為主要開發語言，因為其在數據處理和機器學習方面的豐富生態系統。這樣的架構使得擴展性良好，但在處理高解析度影片時可能會面臨性能瓶頸。

## 技術深入分析

video-use 的核心技術機制在於利用音頻轉錄和視覺化資料來進行影片編輯，這樣 LLM 可以在不直接觀看影片的情況下進行精確剪接。它使用 ElevenLabs 的 Scribe API 來獲取音頻的時間戳和說話者識別，這樣可以確保剪接的準確性。效能上，這個工具能夠處理多個影片來源，但在高解析度影片的處理上可能會遇到性能瓶頸。選擇 Python 作為開發語言的好處在於其強大的數據處理能力，但也帶來了較高的依賴性。設計上，這個工具的自我評估機制能夠在每次剪接後檢查輸出質量，這樣可以減少後期修改的需求。整合到現有的工作流中相對簡單，但對於不熟悉命令行的使用者來說，可能需要一些學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，安裝過程相對順暢，但需要注意安裝 ffmpeg 的步驟。文件中有詳細的使用範例，幫助新手快速上手。整體來說，花 30 分鐘應該可以順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，節省編輯時間
> - 開源且可自定義，適合不同需求
> - 對話式介面降低了使用門檻

> [!danger] 缺點
> - 對於複雜編輯需求可能無法完全滿足
> - 需要額外安裝 ffmpeg，增加安裝複雜度
> - 目前功能仍在持續開發中，穩定性有待提升

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要安裝 ffmpeg 進行影片處理
> - 目前僅支援特定格式的影片輸入
> - 對於複雜的編輯需求，可能需要手動調整

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化編輯功能，但主要針對動畫生成，適合需要高互動性的使用者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於影片的內容分析和標記，適合需要深入分析影片內容的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體使用效率高，但插件生態不如 Python 豐富。 | 如果你的團隊需要高效能的影片編輯且對記憶體使用有嚴格要求。 | medium，因為需要重新學習 Rust 的生態系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於內容分析，提供更深入的影片分析功能，但不支援自動化編輯。 | 如果你的需求主要是對影片內容進行深度分析，而不是編輯。 | low，因為使用的技術相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **video-use** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體使用效率高，但插件生態不如 Python 豐富。 | 專注於內容分析，提供更深入的影片分析功能，但不支援自動化編輯。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 的生態系統。 | low，因為使用的技術相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效能的影片編輯且對記憶體使用有嚴格要求。 | 如果你的需求主要是對影片內容進行深度分析，而不是編輯。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人或小型專案試用，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高解析度影片處理時可能會遇到性能瓶頸
  - 解法：降低影片解析度以提高處理速度
- [MEDIUM] 需要手動安裝 ffmpeg，對新手不友好
  - 解法：提供安裝腳本以簡化流程
- [MEDIUM] 自我評估機制可能會導致編輯延遲
  - 解法：在非高峰時段進行編輯以減少等待時間

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的影片編輯需求 | 非常適合 | 自動化編輯流程能大幅提高效率，適合資源有限的團隊。 |
| 大型企業的專業影片製作 | 不適合 | 對於複雜的編輯需求，可能無法滿足專業標準。 |
| 教育機構的教學影片製作 | 適合 | 能快速生成精簡的教學內容，提升學習效果。 |
| 社交媒體內容創作者 | 非常適合 | 快速生成符合平台需求的影片，提升工作效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的影片編輯工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，僅需存取使用者的影片資料，且依賴的庫都來自於開源社群，信任度高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

video-use 最常與 Claude Code 等對話式 AI 工具搭配使用，處於影片編輯的自動化環節。在一個使用 Claude Code 的專案中，使用者可以透過簡單的指令將影片素材放入資料夾，然後進行對話編輯，具體做法是使用 `claude` 指令進入編輯會話。與主流 CI/CD 工具（如 GitHub Actions）相容，能輕鬆整合到現有的開發流程中。整合的摩擦點主要在於對話式介面的學習曲線，對於不熟悉命令行的使用者來說，可能需要一些額外的學習時間。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 video-use 出現之前，影片編輯多依賴於傳統的桌面應用程式，這些工具通常操作繁瑣且需要較高的技術門檻。隨著對話式 AI 的興起，這個工具利用 LLM 的能力，將影片編輯的流程簡化，讓更多非專業使用者能夠輕鬆創作影片。這個工具代表了自動化編輯的趨勢，未來可能會結合更多 AI 技術，進一步提升編輯效率和質量。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的 Python 知識
- 了解 ffmpeg 的基本操作

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在主要產品中進行實驗性使用。

**成功指標**：影片編輯時間減少 50%，提升內容質量。

> [!warning] 退出計畫
> 所有設定都以標準格式保存，若需退出可輕鬆轉移至其他編輯工具。

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
| Forks | 802 |
| Open Issues | 13 |
| Issue 解決率 | 13% (2 closed) |
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

**社群活躍度**：社群活躍度中等，最近有持續的開發和問題回應。
**連結**：[文件](https://github.com/browser-use/video-use#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-23）
> **活躍天數** 3 天 · **最新 commit** fix(subtitles): raise MarginV to 90 to clear vertical safe zones (#5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/browser-use/video-use/issues/20) | Add LICENSE file (Apache 2.0 or MIT) so commercial integrati | 1 | 0 |
> | [#19](https://github.com/browser-use/video-use/issues/19) | License file | 0 | 0 |

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

相關概念：[[自動化]] · [[影片編輯]] · [[對話式介面]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

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
> const concepts = ["自動化","影片編輯","對話式介面"];
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
