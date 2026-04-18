---
repo: browser-use/video-use
url: https://github.com/browser-use/video-use
owner: browser-use
owner_type: Organization
language: Python
license: N/A
description: ""
homepage: ""
stars: 960
stars_per_day: 160
forks: 88
open_issues: 0
created: 2026-04-12
pushed_at: 2026-04-15
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
use_case: "透過對話驅動的方式，自動編輯影片，省去繁瑣的手動操作。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-25"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 582
readme_length: 3830
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:950,2026-04-18:960"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "video-use"
  - "browser-use/video-use"
  - "透過對話驅動的方式，自動編輯影片，省去繁瑣的手動操作。"
---

# video-use

**960** stars · **160** stars/天 · 建立 6 天前 · Python · 未標註授權

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
> 透過對話驅動的方式，自動編輯影片，省去繁瑣的手動操作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (160 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望快速編輯影片但不想學習複雜工具的內容創作者。
> **一句話重點** 這個專案展示了如何利用對話驅動的方式來簡化影片編輯流程，讓使用者能夠專注於內容而非工具。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的影片編輯工具，值得一試。

> [!abstract] 核心創新
> 透過對話驅動的方式，實現精確的影片編輯，無需手動操作。

## 專案簡介

這個專案 **video-use** 是一個基於 Claude Code 的對話驅動影片編輯工具，使用者只需將原始影片放入指定資料夾，然後透過對話指令來編輯，最終生成 `final.mp4`。其核心機制是透過音訊轉錄來獲得逐字時間戳，並利用這些資訊來精確剪輯，避免了傳統編輯中常見的噪音和無效片段。使用者可以透過 `claude` 命令來啟動編輯過程，並在會話中輸入編輯指令，如「編輯成一個發佈影片」。這樣的設計讓編輯過程變得直觀且高效，特別適合不熟悉傳統編輯軟體的使用者。

具體來說，這個工具能自動去除填充詞和死空間，並進行自動色彩調整，還能生成自訂的字幕和動畫覆蓋，這些都可以通過簡單的指令來完成。其設計理念是以音訊為主，視覺輔助，並且在每次剪輯後進行自我評估，確保輸出品質。這樣的方式不僅提高了編輯效率，也減少了使用者的操作負擔。整體而言，video-use 的一句話賣點是：讓使用者透過對話來輕鬆編輯影片，無需繁瑣的設定或選單操作。

**技術棧**：`Python 3.10` · `requests` · `librosa` · `matplotlib` · `pillow` · `numpy`

## 重點功能

- 自動去除填充詞 — 能夠識別並剪輯掉 `umm`、`uh` 等無效語音。
- 自動色彩調整 — 提供多種色彩風格選擇，並可自訂 ffmpeg 鏈。
- 音訊淡入淡出 — 在每次剪輯時自動添加 30ms 的音訊淡入淡出，避免聽到突兀的聲音。
- 自動生成字幕 — 以自訂風格生成字幕，預設為每 2 個字的 UPPERCASE 顯示。
- 動畫覆蓋生成 — 支援使用 Manim 和 PIL 生成動畫，並可並行處理。
- 自我評估功能 — 在每次剪輯後自動檢查輸出品質，確保無視覺跳躍或音訊問題。
- 會話記憶 — 將會話記錄保存在 `project.md` 中，方便下次繼續編輯。

## 快速開始

1. 克隆專案並建立符號連結到 Claude Code 的技能目錄
```bash
git clone https://github.com/browser-use/video-use
cd video-use
ln -s "$(pwd)" ~/.claude/skills/video-use
```
2. 安裝依賴
```bash
pip install -e .
brew install ffmpeg
```
3. 添加 ElevenLabs API 金鑰
```bash
cp .env.example .env
$EDITOR .env
```

## 程式碼範例

```python
{
  "前置條件": "已安裝並配置 Claude Code",
  "程式碼": "claude\nedit these into a launch video",
  "預期輸出": "生成 `edit/final.mp4` 影片，包含編輯後的內容。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 960 stars（160/天），forks 88（9.2%），顯示出不錯的使用者興趣。這位主要貢獻者 gregpr07 在開源社群中有一定的影響力，過去可能有相關的專案經驗。這個專案解決了傳統影片編輯工具複雜的操作流程，讓使用者能夠透過對話進行編輯，這在過去是難以實現的。隨著 AI 和 LLM 技術的進步，這種對話驅動的編輯方式變得可行。forks/stars 比率為 9.2%，顯示出有相當一部分使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望快速編輯影片但不想學習複雜工具的內容創作者。

> [!example] 使用場景
> - 影片創作者用它來快速編輯旅行影片，因為可以自動去除多餘的對話和空白，節省了大量的編輯時間。
> - 教育工作者用它來製作教學影片，因為能夠自動生成字幕，讓學生更容易理解內容。
> - 行銷團隊用它來編輯產品宣傳影片，因為可以透過對話指令快速調整影片內容，提升工作效率。

## 架構分析

這個專案採用了一個以對話驅動的編輯架構，主要分為音訊轉錄和視覺合成兩個層次。音訊轉錄層使用 ElevenLabs Scribe 來獲取逐字時間戳和說話者識別，這樣的設計使得編輯過程能夠精確到每個字的邊界。視覺合成層則在決策點上生成影片的縮圖和波形圖，這樣的設計避免了傳統編輯中可能出現的噪音問題。這種架構的好處是減少了對大量影像數據的處理需求，僅需處理小型的文本和圖像資料。這樣的設計使得編輯過程更為高效，但可能在處理非常大型的影片時出現瓶頸，因為仍需依賴於音訊的準確性和視覺的即時生成。

## 技術深入分析

video-use 的核心技術機制是基於音訊轉錄和視覺合成的雙層架構。音訊轉錄層使用 ElevenLabs Scribe 來獲取逐字時間戳，這使得編輯過程能夠精確到每個字的邊界，並且能夠識別說話者的情緒和反應。視覺合成層則在決策點生成影片的縮圖和波形圖，這樣的設計避免了傳統編輯中可能出現的噪音問題。這種架構的效能特性在於能夠快速處理小型的文本和圖像資料，但在處理大型影片時可能會出現瓶頸，因為仍需依賴於音訊的準確性和視覺的即時生成。選擇 Python 作為開發語言使得專案在資料處理和機器學習方面有良好的支持，但也帶來了依賴管理的複雜性。這個專案的技術風險在於對外部 API 的依賴程度，若 API 變更或失效，將直接影響到編輯功能的穩定性。整合方面，與現有的 CI/CD 流程相容性良好，能夠輕鬆融入到現有的開發環境中，對於團隊的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要安裝多個依賴，可能會對新手造成一些困難。文件中有詳細的 getting started guide，能夠幫助使用者快速上手。文件目前僅提供英文版本，對於非英語使用者可能會有障礙。

## 優缺點分析

> [!success] 優點
> - 對話驅動的編輯方式，降低了使用門檻。
> - 自動化處理填充詞和死空間，提高編輯效率。
> - 自我評估功能確保輸出品質，減少後期修正。
> - 支持多種動畫生成，增強影片表現力。

> [!danger] 缺點
> - 目前僅支援 macOS 和 Linux，Windows 使用者無法使用。
> - 需要安裝多個依賴，對新手可能有些複雜。
> - 功能仍在開發中，可能會有不穩定的情況。
> - 對於高級編輯需求可能無法滿足，仍需手動調整。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要安裝 ffmpeg 以進行影片處理。
> - 目前不支援 Windows 系統，僅適用於 macOS 和 Linux。
> - 功能仍在開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案專注於影片編輯的自動化，但不提供對話驅動的功能，適合需要更傳統編輯方式的使用者。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供類似的影片編輯功能，但缺乏自我評估和記憶功能，適合對編輯流程有更多控制需求的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於影片編輯的自動化，但不提供對話驅動的功能，使用者需要手動設定編輯參數。 | 如果你的團隊已經在使用傳統的影片編輯工具，並且需要更多的控制和自訂選項，這個工具會更合適。 | medium，因為需要重新學習編輯流程和工具的使用。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供類似的影片編輯功能，但缺乏自我評估和記憶功能，使用者需要手動確認每一步的編輯。 | 如果你的團隊需要更多的手動控制和自訂功能，這個工具會更適合。 | low，因為編輯流程相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **video-use** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於影片編輯的自動化，但不提供對話驅動的功能，使用者需要手動設定編輯參數。 | 提供類似的影片編輯功能，但缺乏自我評估和記憶功能，使用者需要手動確認每一步的編輯。 |
> | 遷移成本 | - | medium，因為需要重新學習編輯流程和工具的使用。 | low，因為編輯流程相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用傳統的影片編輯工具，並且需要更多的控制 | 如果你的團隊需要更多的手動控制和自訂功能，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在處理大型影片時可能會出現性能瓶頸，導致編輯過程變慢。
  - 解法：將影片分割成小段進行編輯。
- [MEDIUM] 對於某些特殊的音訊格式，可能無法正確轉錄。
  - 解法：確保使用標準的音訊格式，如 WAV 或 MP3。
- [MEDIUM] 在某些情況下，字幕生成可能會出現錯誤。
  - 解法：手動檢查並修正生成的字幕。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的行銷影片製作 | 非常適合 | 簡化了編輯流程，能快速生成高品質影片。 |
| 教育機構的教學影片製作 | 適合 | 自動生成字幕功能能提高學生的學習效率。 |
| 大型企業的專業影片製作 | 普通 | 對於高級編輯需求可能無法完全滿足。 |
| 個人內容創作者的日常影片編輯 | 非常適合 | 對話驅動的編輯方式降低了使用門檻，適合新手使用。 |

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
> 低風險：該工具不需要高權限，僅需訪問本地檔案系統。依賴的外部 API 需確保安全性，避免敏感資料洩露。

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
| Forks | 88 |
| Open Issues | 0 |
| 最後推送 | 2026-04-15 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 582 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/video-use) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 75
>     "HTML" : 24
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gregpr07](https://github.com/gregpr07) | 7 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和活躍的討論。
**連結**：[文件](https://github.com/browser-use/video-use)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-15）
> **活躍天數** 2 天 · **最新 commit** add what-it-does section to readme

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
> ## Get started
> 
> ```bash
> # 1. Clone and symlink into Claude Code's skills directory
> git clone https://github.com/browser-use/video-use
> cd video-use
> ln -s "$(pwd)" ~/.claude/skills/video-use
> 
> # 2. Install deps
> pip install -e .
> brew install ffmpeg           # required
> brew install yt-dlp            # optional, for downloading online sources
> 
> # 3. Add your ElevenLabs API key
> cp .env.example .env
> $EDITOR .env                   # ELEVENLABS_API_KEY=...
> ```
> 
> Then point Claude Code at a folder of raw takes:
> 
> ```bash
> cd /path/to/your/videos
> claude
> ```
> 
> And in the session:
> 
> > edit these into a launch video
> 
> It inventories the sources, proposes a strategy, waits for your OK, then produces `edit/final.mp4` next to your sources. All outputs live in `/edit/` — the skill directory stays clean.
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

相關概念：[[自動化]] · [[機器學習]] · [[自然語言處理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[xstongxue--best-skills|xstongxue/best-skills]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
> const concepts = ["自動化","機器學習","自然語言處理"];
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

- [[2026-04-18|2026-04-18]] — 首次收錄，950 stars
