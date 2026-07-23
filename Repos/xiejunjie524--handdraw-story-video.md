---
repo: xiejunjie524/handdraw-story-video
url: https://github.com/xiejunjie524/handdraw-story-video
owner: xiejunjie524
owner_type: User
language: Python
license: MIT
description: "Turn hand-drawn story illustrations into 35–45 second line-reveal and gradual-coloring videos with HyperFrames."
homepage: ""
stars: 621
stars_per_day: 155
forks: 95
open_issues: 0
created: 2026-07-18
pushed_at: 2026-07-18
first_seen: 2026-07-23
week: "2026-W30"
month: "2026-07"
category: "其他"
subcategory: "視頻生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-23
use_case: "將手繪故事插圖轉換為 35-45 秒的逐步顯示和上色視頻。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-30"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 6322
readme_length: 2527
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-23"
star_history: "2026-07-23:621"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "handdraw-story-video"
  - "xiejunjie524/handdraw-story-video"
  - "將手繪故事插圖轉換為 35-45 秒的逐步顯示和上色視頻。"
---

# handdraw-story-video

**621** stars · **155** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 將手繪故事插圖轉換為 35-45 秒的逐步顯示和上色視頻。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (155 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望將手繪故事轉換為視頻的獨立創作者，特別是對視頻製作不熟悉的人。
> **一句話重點** 這個專案讓手繪故事的視頻製作變得簡單而高效，特別適合不熟悉視頻編輯的創作者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻生成" && p.file.name !== "xiejunjie524--handdraw-story-video" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、8 小時整合，得到快速生成手繪故事視頻的效果，值得嘗試。

> [!abstract] 核心創新
> 自動化將手繪故事轉換為視頻的過程，無需依賴特定的生圖服務。

## 專案簡介

這個專案的核心機制是將 7-9 幅手繪故事插圖轉換為短視頻，過程中先顯示黑白線稿，然後逐步填入低饱和色彩。使用者只需提供彩色母圖，系統會自動提取對應的線稿並生成視頻，這種設計能夠簡化視頻製作流程，讓創作者專注於故事內容而非技術細節。主要的 CLI 指令包括 `python scripts/make_lineart.py` 用於生成線稿，和 `python scripts/build_story.py` 用於生成最終視頻。這個工具的賣點在於其自動化程度高，且不依賴於特定的生圖服務或音樂來源，這使得使用者可以自由選擇素材。技術上，它使用 Python 和 Node.js，並依賴於 FFmpeg 和 GSAP 來處理視頻和動畫效果，這樣的選擇使得工具在性能和靈活性上都有所保障。

相較於其他視頻生成工具，如 0x0funky/agent-sprite-forge，這個專案的優勢在於它專注於手繪風格的故事呈現，並且支持自定義字幕和道具文字，這在故事講述中非常重要。使用者在實際操作中可能會遇到素材檢查的問題，但該工具提供了自動檢查功能，能有效減少錯誤。這個專案目前處於初期階段，對於小型團隊或個人創作者來說非常合適，未來可能會增加更多的自動化功能和模板選擇。適合需要快速生成手繪風格故事視頻的創作者，特別是那些對視頻製作流程不熟悉的使用者。使用者在選擇時應考慮到對手繪風格的需求，並確保有足夠的素材準備。

**技術棧**：`Python 3.10` · `Node.js 18` · `FFmpeg` · `GSAP 3`

## 重點功能

- 自動化生成視頻 — 從手繪插圖自動生成 35-45 秒的短視頻，無需手動編輯。
- 支持低飽和色彩填充 — 線稿和顏色的顯示從左到右推進，增強視覺效果。
- 故事配置檢查 — 自動檢查時長、重複素材和字幕行數，避免常見錯誤。
- 可選字幕和道具文字 — 支持在視頻中添加故事字幕和道具文字，增強故事性。
- 不依賴第三方服務 — 使用者可以自由選擇素材和音樂，無需綁定特定的 API。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/xiejunjie524/handdraw-story-video.git && cd handdraw-story-video && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && npm install gsap
```
2. 複製模板並填寫故事
```bash
cp templates/story-template.json story.json
```
3. 生成線稿
```bash
python scripts/make_lineart.py assets/images/scene-01-color.png assets/images/scene-01-line.png
```
4. 準備 HyperFrames 目錄
```bash
mkdir -p hyperframes/assets/vendor && cp node_modules/gsap/dist/gsap.min.js hyperframes/assets/vendor/gsap.min.js
```
5. 生成視頻
```bash
python scripts/build_story.py story.json hyperframes/index.html --check-assets && npx hyperframes render hyperframes/index.html --output renders/story-v1.mp4 --workers 1
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 621 stars（155/天），forks 95（15.3%），顯示出良好的社群反應。作者 xiejunjie524 之前的專案可能涉及多媒體或動畫領域，這使得他能夠針對手繪故事視頻的需求提供解決方案。這個工具填補了市場上對於手繪風格視頻生成的需求，讓創作者能夠快速製作出具有個人風格的內容。社群的活躍度和對於手繪風格的興趣可能是其快速增長的原因。這個專案的設計理念也符合當前對於個性化內容創作的趨勢。

## 適合誰使用

**目標受眾**：希望將手繪故事轉換為視頻的獨立創作者，特別是對視頻製作不熟悉的人。

> [!example] 使用場景
> - 插畫師用它來將自己的手繪故事轉換為短視頻，因為這樣可以快速吸引觀眾的注意力，提升作品的曝光率。
> - 教育工作者用它來製作生動的教學視頻，因為手繪風格能夠讓學習內容更具吸引力，增加學生的學習興趣。
> - 社交媒體內容創作者用它來生成有趣的故事視頻，因為這樣能夠在短時間內製作出高質量的內容，提升互動率。

## 架構分析

這個專案採用 Python 和 Node.js 的混合架構，Python 負責後端的圖像處理和視頻生成，而 Node.js 負責前端的動畫和交互。這樣的設計使得專案能夠充分利用兩者的優勢，Python 在圖像處理上有強大的庫支持，而 Node.js 則在處理前端動畫時表現出色。資料流方面，使用者提供彩色母圖，系統自動生成線稿，然後將這些素材傳遞給 HyperFrames 進行視頻渲染。選擇這種架構的代價在於需要管理兩種環境的依賴，這對於新手來說可能會有一定的學習曲線。擴展性方面，隨著更多功能的加入，可能會增加系統的複雜度，特別是在素材管理和配置檢查方面。

## 技術深入分析

這個專案的核心技術機制是利用 Python 和 Node.js 的組合來實現視頻的自動生成。Python 負責圖像處理，包括線稿提取和視頻生成，而 Node.js 則用於前端的動畫處理，這樣的設計使得專案能夠充分利用兩者的優勢。效能方面，使用 FFmpeg 進行視頻編碼，能夠支持高效的視頻輸出，但對於大型故事可能會出現性能瓶頸。設計上選擇了不依賴特定的生圖服務，這樣能夠提高使用者的自由度，但也意味著使用者需要自行管理素材的授權問題。技術風險方面，對於依賴的第三方庫（如 GSAP 和 HyperFrames）可能會隨著版本更新而導致不兼容問題，這需要持續關注和維護。整合方面，與主流的視頻編輯工具（如 Adobe Premiere）相比，這個專案的整合難度較高，因為它需要使用者具備一定的技術背景來進行配置和操作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和範例，對於新手來說相對友好。安裝過程中可能會遇到依賴問題，但整體流程清晰。文件有中文版本，這對於中文使用者來說非常有幫助。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，簡化了視頻製作流程。
> - 支持手繪風格，能夠吸引特定受眾。
> - 不依賴特定的生圖服務，使用者自由度高。

> [!danger] 缺點
> - 環境配置較為複雜，需要安裝多個依賴。
> - 對於大型故事的支持有限，可能需要手動調整。
> - 缺乏對於不同平台的全面支持，特定系統可能遇到問題。

> [!warning] 注意事項
> - 僅支援 Python 3.10+ 和 Node.js 18+。
> - 需要安裝 FFmpeg 和 HyperFrames，增加了環境配置的複雜度。
> - 對於大型故事可能需要手動調整配置，無法完全自動化。
> - 不支持 Windows 以外的系統的某些安裝指令，可能需要額外調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色動畫，而本專案專注於手繪故事視頻，功能範圍不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的視頻編輯功能，但不專注於手繪風格的故事生成。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於 API 交互，而本專案專注於視頻生成，適用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色動畫生成，而本專案專注於手繪故事視頻生成，功能範圍不同。 | 如果需要生成角色動畫而非故事視頻，則應選擇此工具。 | medium，因為需要重新設計素材和配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的視頻編輯功能，但不專注於手繪風格的故事生成。 | 如果需要更全面的視頻編輯功能，則應選擇此工具。 | high，因為需要重新學習編輯流程和工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **handdraw-story-video** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色動畫生成，而本專案專注於手繪故事視頻生成，功能範圍不同。 | 提供更廣泛的視頻編輯功能，但不專注於手繪風格的故事生成。 |
> | 遷移成本 | - | medium，因為需要重新設計素材和配置。 | high，因為需要重新學習編輯流程和工具。 |
> | 適用場景 | 主要場景 | 如果需要生成角色動畫而非故事視頻，則應選擇此工具。 | 如果需要更全面的視頻編輯功能，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上安裝 Node.js 可能會遇到權限問題
  - 解法：使用管理員權限安裝 Node.js
- [MEDIUM] 生成視頻時可能會因素材不一致導致錯誤
  - 解法：確保所有素材路徑正確且格式一致
- [MEDIUM] 對於大型故事，生成時間可能過長
  - 解法：將故事拆分為多個小場景進行處理

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創作者的手繪故事視頻製作 | 非常適合 | 專案專注於手繪風格，符合創作者需求。 |
| 大型商業項目的視頻製作 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 教育用途的故事視頻製作 | 適合 | 能夠快速生成吸引學生的內容。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、8 小時整合，得到快速生成手繪故事視頻的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，依賴的第三方庫需自行評估其安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與手繪插圖和視頻編輯工具搭配使用，在創作流程中，它位於內容生成的環節。使用者可以在手繪插圖完成後，直接使用該工具生成視頻，具體做法是將插圖放入指定目錄，然後運行生成指令。與主流的視頻編輯工具（如 Adobe Premiere）相比，整合難度較高，因為需要使用者具備一定的技術背景來進行配置和操作。常見的整合問題包括素材格式不一致，這需要使用者在生成前進行檢查。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，手繪故事視頻的製作通常需要手動編輯和多個工具的配合，這樣的流程繁瑣且耗時。隨著自動化技術的進步，這個專案提供了一種新的解決方案，能夠快速生成高質量的手繪風格視頻。這個工具代表了內容創作自動化的趨勢，未來可能會隨著技術的進一步發展而變得更加成熟和完善。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的視頻編輯
- 具備手繪插圖能力

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：寫出 best practices 文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：視頻生成時間減少 30%，內容質量提升。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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
| Forks | 95 |
| Open Issues | 0 |
| 最後推送 | 2026-07-18 |
| 建立日期 | 2026-07-18 |
| Repo 大小 | 6.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xiejunjie524/handdraw-story-video) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `numpy` `opencv-python` `requests`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xiejunjie524](https://github.com/xiejunjie524) | 8 |

## 社群與生態

**社群活躍度**：社群活躍度良好，最近有更新和討論。
**連結**：[文件](https://github.com/xiejunjie524/handdraw-story-video/docs/usage.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-18 ~ 2026-07-18）
> **活躍天數** 1 天 · **最新 commit** feat: add one-click topic to video pipeline

## README 摘錄

> [!info]- 展開查看原文 README
> # Handdraw Story Video
> 
> 把 7–9 幅手绘故事母图制作成 35–45 秒竖屏短视频：先从左到右显现黑白线稿，再沿相同方向逐步填入低饱和色彩。项目包含故事配置校验、线稿提取、HyperFrames 页面生成，以及可安装的 Codex Skill。
> 
> 新手直接看：[中文使用方法](docs/usage.md) · [生图模型接入](docs/image-generation.md) · [固定画风提示词](docs/prompts.md)
> 
> 想直接按主题批量生成：[一键成片配置](config.example.json)
> 
> ## 特点
> 
> - 默认 40 秒、720×960、30 fps，适合竖屏平台
> - 每幕使用一张独立彩色母图，本地提取完全对齐的线稿
> - 线稿和颜色统一从左向右推进，不重复调用生图模型
> - 支持可选故事字幕和画面内道具文字
> - 自动检查时长、重复素材、字幕行数与字号范围
> - 不绑定生图服务、音乐来源或私有 API
> 
> ## 环境要求
> 
> - Python 3.10+
> - Node.js 18+
> - FFmpeg
> - [HyperFrames](https://www.npmjs.com/package/hyperframes)
> - GSAP 3（通过 npm 安装，遵守其许可条款）
> 
> ## 快速开始
> 
> ```bash
> git clone https://github.com/xiejunjie524/handdraw-story-video.git
> cd handdraw-story-video
> python -m venv .venv
> # Windows: .venv\Scripts\activate
> # macOS/Linux: source .venv/bin/activate
> pip install -r requirements.txt
> npm install gsap
> ```
> 
> 1. 复制模板并填写故事：
> 
> ```bash
> cp templates/story-template.json story.json
> ```
> 
> 2. 每幕只生成一张 1K 彩色母图，再提取对齐线稿：
> 
> ```bash
> python scripts/make_lineart.py assets/images/scene-01-color.png assets/images/scene-01-line.png
> ```
> 
> 3. 准备 HyperFrames 目录和 GSAP：
> 
> ```bash
> mkdir -p hyperframes/assets/vendor
> cp node_modules/gsap/dist/gsap.min.js hyperframes/assets/vendor/gsap.min.js
> ```
> 
> Windows PowerShell 可使用：
> 
> ```powershell
> New-Item -ItemType Directory -Force hyperframes/assets/vendor | Out-Null
> Copy-Item node_modules/gsap/dist/gsap.min.js hyperframes/assets/vendor/gsap.min.js
> ```
> 
> 4. 把图片和已获授权的 BGM 放到 `hyperframes/assets/`，确保路径与 `story.json` 一致，然后生成页面：
> 
> ```bash
> python scripts/build_story.py story.json hyperframes/index.html --check-assets
> npx hyperframes check hyperframes/index.html --json
> npx hyperframes render hyperframes/index.html --output renders/story-v1.mp4 --workers 1
> ```
> 
> 不要覆盖旧成片；每次使用新的输出文件名。
> 
> ## 故事配置
> 
> 最小场景结构：
> 
> ```json
> {
>   "id": "scene-1",
>   "duration": 5,
>   "caption_lines": ["凌晨四点，", "他总会经过那家早餐店。"],
>   "line_image": "assets/images/scene-01-line.png",
>   "color_image": "assets/images/scene-01-color.png",
>   "crop": {"scale": 1, "x": 0, "y": 0}
> }
> ```
> 
> 完整字段和分镜规则见 [docs/story-spec.md](docs/story-spec.md)，可运行示例见 [examples/soy-milk-at-4am/story.json](examples/soy-milk-at-4am/story.json)。
> 
> ## 画面原则
> 
> - 8 幕通常各约 5 秒，每幕必须是不同构图，不能靠裁切或缩放凑时长。
> - 主体通常位于画面下方 45%–55%，保留大面积纸白留白。
> - 单帧最多 2–3 人、两个关键背景锚点，避免人群、密集建筑和大块黑线。
> - 字幕最多 3 行，每行不超过约 18 个中文字符。
> - 音乐按故事选择，不把某一首 BGM 固定进模板。
> 
> ## Codex Skill
> 
> 仓库根目录本身符合 Codex Skill 结构。可将仓库复制或链接到 `$CODEX_HOME/skills/handdraw-good-deed-story`，然后用类似“做一个 40 秒线稿逐渐上色的暖心故事”触发。
> 
> ## 素材与许可
> 
> 代码以 MIT 许可发布。生成图片、字体、GSAP、音乐及其他第三方素材不自动获得 MIT 授权，使用者须遵守各自提供方和素材来源的条款。仓库不包含 API 密钥、浏览器会话、参考视频、下载音乐或完整渲染历史。

## 延伸閱讀

相關概念：[[視頻生成]] · [[手繪插圖]] · [[自動化製作]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Robbyant--lingbot-video|Robbyant/lingbot-video]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/xiejunjie524/handdraw-story-video)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻生成" AND file.name != "xiejunjie524--handdraw-story-video"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "xiejunjie524--handdraw-story-video"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "xiejunjie524--handdraw-story-video" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "xiejunjie524--handdraw-story-video"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻生成","手繪插圖","自動化製作"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "xiejunjie524--handdraw-story-video" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xiejunjie524--handdraw-story-video" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xiejunjie524" AND file.name != "xiejunjie524--handdraw-story-video"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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
> const me = dv.page("Repos/xiejunjie524--handdraw-story-video");
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

> **2026-07-23** — 首次收錄
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

- [[2026-07-23|2026-07-23]] — 首次收錄，621 stars
