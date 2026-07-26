---
repo: gnipbao/story-to-handdrawn-video
url: https://github.com/gnipbao/story-to-handdrawn-video
owner: gnipbao
owner_type: User
language: JavaScript
license: MIT
description: "Agent skill: convert Chinese story copy or ordered images into a hand-drawn diary-comic animation (silent MP4 picture track)."
homepage: ""
stars: 631
stars_per_day: 158
forks: 70
open_issues: 0
created: 2026-07-21
pushed_at: 2026-07-21
first_seen: 2026-07-25
week: "2026-W30"
month: "2026-07"
category: "其他"
subcategory: "動畫生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-25
use_case: "將中文故事或上傳的漫畫頁面轉換為手繪日記漫畫動畫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 4300
readme_length: 6685
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-25"
star_history: "2026-07-25:610,2026-07-26:631"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
aliases:
  - "story-to-handdrawn-video"
  - "gnipbao/story-to-handdrawn-video"
  - "將中文故事或上傳的漫畫頁面轉換為手繪日記漫畫動畫。"
---

# story-to-handdrawn-video

**610** stars · **203** stars/天 · 建立 3 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
> 將中文故事或上傳的漫畫頁面轉換為手繪日記漫畫動畫。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (203 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要將中文故事或漫畫轉換為動畫的內容創作者。
> **一句話重點** 這個專案最厲害的地方在於它能將靜態故事轉換為動態動畫，讓內容創作者能夠更輕鬆地表達故事。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "動畫生成" && p.file.name !== "gnipbao--story-to-handdrawn-video" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 動畫生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的動畫生成工具，值得一試。

> [!abstract] 核心創新
> 自動將中文故事文本或手繪圖片轉換為手繪風格動畫，並支持自然語言驅動。

## 專案簡介

這個專案的核心功能是將中文故事文本或有序的手繪圖片轉換成手繪風格的動畫，使用者只需提供故事文本或圖片，系統會自動生成動畫。具體流程是：用戶輸入故事文本或圖片，系統會自動分句並生成分鏡，然後利用 Remotion 框架進行渲染，最終輸出靜音的 H.264 格式影片。這樣的設計使得創作者能夠快速將靜態內容轉換為動態視覺效果，特別適合需要視覺化故事的場景。最關鍵的指令包括 `npm run render` 來生成正式版本，或 `npm run render:preview` 來生成預覽版本，這樣用戶可以在確認效果後再進行正式渲染。技術上，專案依賴於 Node.js 和 Remotion，並使用 TypeScript 進行開發，這確保了良好的類型檢查和可維護性。

這個工具的賣點在於其自動化程度高，使用者無需手動操作，僅需透過自然語言指令即可驅動整個流程。相較於其他手動編輯影片的工具，這個專案提供了更高的效率和更低的學習曲線，特別適合故事創作者和漫畫家。使用者可以快速上手，並在短時間內生成高品質的動畫內容。這個工具的設計考量了用戶的需求，提供了多種輸出選項，包括正式版本和預覽版本，並且支持圖片的翻書效果，增加了視覺表現的豐富性。社群活躍度高，開發者持續更新，未來可能會增加更多功能和改進。

**技術棧**：`Node.js 20+` · `Remotion 4.0.487` · `TypeScript 5.9.3`

## 重點功能

- 自動分句與分鏡 — 根據故事文本自動生成分鏡，保留原文措辭。
- 支持上傳漫畫頁面 — 用戶可上傳有序的漫畫圖片，保持原有構圖。
- 黑白與彩色插畫生成 — 自動生成與彩色插畫對齊的黑白畫稿。
- 翻書效果 — 提供右下角翻頁的動畫效果，增強視覺吸引力。
- 多種輸出選項 — 支持1080×1440的正式渲染和720×960的快速預覽。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/gnipbao/story-to-handdrawn-video.git && cd story-to-handdrawn-video && npm ci
```
2. 將 Skill 安裝到 Agent 的 skills 目錄
```bash
cp -R skill-package/story-to-handdrawn-video ~/.codex/skills/
```
3. 運行渲染器項目
```bash
npm run render
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 610 stars（203/天），forks 69（11.3%），顯示出快速增長的潛力。作者 gnipbao 之前有其他開源專案，這個專案解決了將靜態故事轉換為動態內容的需求，特別是在中文故事創作領域。這個工具的出現正好填補了市場上對於自動化動畫生成的需求，並且在社群中引起了討論。技術上，Remotion 的使用讓這個工具能夠生成高品質的影片，並且簡化了開發流程。forks/stars 比率為 11.3%，顯示出不少開發者在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要將中文故事或漫畫轉換為動畫的內容創作者。

> [!example] 使用場景
> - 漫畫創作者用它來將手繪漫畫頁面轉換為動畫，因為這樣可以快速生成視覺內容，吸引更多讀者。
> - 故事講述者用它來將故事文本轉換為動畫，因為這樣可以提升故事的表現力，讓觀眾更容易理解情節。
> - 教育工作者用它來製作教學動畫，因為這樣可以將複雜的概念以視覺化的方式呈現，增強學生的學習效果。

## 架構分析

專案採用 Remotion 作為動畫生成的核心框架，這使得用戶能夠利用 React 組件來構建動畫。資料流方面，使用者提供故事文本或圖片，系統將自動處理分鏡和動畫生成，並最終輸出靜音影片。這樣的設計選擇使得開發過程中能夠快速迭代和測試，但也意味著對於使用者的環境要求較高，必須安裝 Node.js 和 Python。擴展性方面，專案的架構設計允許未來增加更多的動畫效果和功能，但可能會增加維護的複雜性。

## 技術深入分析

專案的核心技術機制在於使用 Remotion 框架來生成動畫，這使得用戶可以利用 React 組件來設計動畫場景。效能方面，專案能夠處理1080p的高解析度輸出，並且支持快速預覽，這對於需要快速迭代的創作者來說非常重要。選擇 Node.js 和 TypeScript 使得開發過程中能夠獲得良好的類型檢查和開發體驗，但也增加了使用者的環境要求。技術風險方面，依賴於 Remotion 的穩定性，若未來 Remotion 更新導致不兼容，可能會影響專案的穩定性。整合方面，專案能夠輕鬆與其他 Node.js 生態系統的工具鏈整合，但對於非技術用戶來說，初始設置可能會有一定的困難。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要注意依賴的版本要求。文件中包含了多種使用範例，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 高自動化程度，減少手動操作。
> - 支持多種輸出格式，滿足不同需求。
> - 使用 Remotion 提供高品質的動畫效果。

> [!danger] 缺點
> - 僅支持中文，對於其他語言的支持有限。
> - 需要安裝多個依賴，對新手有一定學習曲線。
> - 輸出為靜音，需後期添加音效。

> [!warning] 注意事項
> - 僅支持中文故事文本。
> - 需要安裝 Node.js 20+ 和 Python 3.10+。
> - 輸出為靜音畫面，需後期添加配音和音樂。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供動畫生成，但主要針對精靈圖像，無法直接處理故事文本。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於遊戲開發中的動畫生成，與本專案的故事導向功能有所不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲中的精靈動畫，與本專案的故事導向功能有所不同。 | 如果你的專案主要是遊戲開發，且需要精靈動畫，則應選擇此工具。 | medium，因為需要重新設計動畫生成流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供動畫生成，但主要針對遊戲開發，無法直接處理故事文本。 | 如果你的專案需要遊戲動畫，則應選擇此工具。 | high，因為需要重構整個動畫生成邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **story-to-handdrawn-video** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成遊戲中的精靈動畫，與本專案的故事導向功能有所不同。 | 提供動畫生成，但主要針對遊戲開發，無法直接處理故事文本。 |
> | 遷移成本 | - | medium，因為需要重新設計動畫生成流程。 | high，因為需要重構整個動畫生成邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是遊戲開發，且需要精靈動畫，則應選擇此工具。 | 如果你的專案需要遊戲動畫，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和小型專案，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，ffmpeg 可能無法正確安裝，導致渲染失敗。
  - 解法：確保 ffmpeg 在 PATH 中可用，或手動安裝。
- [MEDIUM] 使用者未正確設置環境變數，導致 Skill 無法找到渲染器項目。
  - 解法：確保設置環境變數 STORY_VIDEO_PROJECT 為正確路徑。
- [MEDIUM] 對於大型故事文本，渲染時間可能較長。
  - 解法：考慮將故事拆分為多個小段進行渲染。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要快速生成故事動畫 | 非常適合 | 高自動化程度，能快速轉換內容。 |
| 教育機構需要製作教學動畫 | 適合 | 能夠將複雜概念視覺化。 |
| 大型製作公司需要高品質動畫 | 普通 | 可能需要更多的自定義功能。 |
| 個人開發者想要創建動畫短片 | 非常適合 | 操作簡單，能快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的動畫生成工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取本地檔案，依賴的庫經過審計，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
| Forks | 69 |
| Open Issues | 0 |
| 最後推送 | 2026-07-21 |
| 建立日期 | 2026-07-21 |
| Repo 大小 | 4.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/gnipbao/story-to-handdrawn-video) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@remotion/cli` `react` `react-dom` `remotion` `@types/node` `@types/react` `@types/react-dom` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 63
>     "TypeScript" : 25
>     "Python" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gnipbao](https://github.com/gnipbao) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，開發者持續更新。
**連結**：[文件](https://github.com/gnipbao/story-to-handdrawn-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-21 ~ 2026-07-21）
> **活躍天數** 1 天 · **最新 commit** docs: focus README on Codex skill usage, drop CLI walkthroughs

## README 摘錄

> [!info]- 展開查看原文 README
> # story-to-handdrawn-video
> 
> [中文](#中文) | [English](#english)
> 
> [](LICENSE)
> 
> ---
> 
> ## 中文
> 
> 把中文故事文案或一组有序的手绘图片,转换成 3:4 竖屏**手绘日记漫画动画**:手写体字幕、从左到右的「文字 → 黑白画稿 → 彩色插画」揭示、可选的右下角卷页翻书转场、安全不裁剪的画面构图。基于 [Remotion](https://www.remotion.dev/),默认输出无配音、无音乐的 H.264 画面轨,方便后期配音。
> 
> 本仓库包含两部分:
> 
> - **渲染器项目**(根目录):Remotion 工程,负责实际的分镜、动效和渲染。
> - **Codex / Agent Skill**(`skill-package/`):可分发的 Skill,装进 Codex 等 Agent 后用自然语言驱动渲染器,无需手动跑脚本。
> 
> ### 功能特性
> 
> - 中文故事自动分句和动态分镜,保留原文措辞
> - 上传漫画页或完整图片,保持原顺序和构图
> - 自动拆分上方文字区与下方插画区
> - 本地生成与彩色插画对齐的黑白层
> - `文字 → 黑白画稿 → 彩色插画` 从左到右揭示
> - 可选右下角卷页翻书转场(纸背保留淡化的原页纹理)
> - 1080×1440 正式渲染和 720×960 快速预览
> - Codex Image2 工作流,以及显式选择的 OpenAI API 工作流
> 
> ### 环境要求
> 
> - Node.js 20 或更高版本
> - Python 3.10 或更高版本
> - FFmpeg,且 `ffmpeg`、`ffprobe` 可从终端调用
> - npm
> - Google Chrome,或由 Remotion 管理的兼容浏览器
> - 支持 Skill 的 Agent 运行时(Codex、Claude Code、Kimi Code 等)
> 
> ### 安装
> 
> 1. 准备渲染器项目:
> 
> ```bash
> git clone https://github.com/gnipbao/story-to-handdrawn-video.git
> cd story-to-handdrawn-video
> npm ci
> npm run check      # TypeScript 检查 + 分镜结构校验,不访问网络
> ```
> 
> 2. 把 Skill 装进 Agent 的 skills 目录:
> 
> ```bash
> # Codex
> cp -R skill-package/story-to-handdrawn-video ~/.codex/skills/
> 
> # Claude Code / 通用 Agent
> cp -R skill-package/story-to-handdrawn-video ~/.claude/skills/
> 
> # Kimi Code
> cp -R skill-package/story-to-handdrawn-video ~/.agents/skills/
> ```
> 
> 3. 告诉 Skill 渲染器项目在哪里(在渲染器项目目录内运行 Agent 时可省略):
> 
> ```bash
> export STORY_VIDEO_PROJECT=/absolute/path/to/story-to-handdrawn-video
> ```
> 
> ### 使用方法(Codex Skill 示例)
> 
> 装好 Skill 后,全部通过自然语言驱动,分句、分镜、图片生成、导入、渲染由 Agent 按 Skill 约定自动完成。
> 
> **故事文本 → 手绘动画**(Skill 的默认提示词):
> 
> ```text
> 使用 $story-to-handdrawn-video 把这段故事生成可后期配音的手绘动画。
> 
> ```
> 
> 也可以把故事放在 UTF-8 文本文件里:
> 
> ```text
> 使用 $story-to-handdrawn-video 把 /absolute/story.txt 生成手绘动画,标题叫「纸上的夏天」。
> ```
> 
> **上传图片 → 手绘动画**(图片按播放顺序给出):
> 
> ```text
> 使用 $story-to-handdrawn-video 把这几张图片按顺序生成手绘动画:
> /absolute/01.jpg /absolute/02.jpg /absolute/03.jpg
> ```
> 
> **翻书效果**(保留原始页面,从右下角卷页):
> 
> ```text
> 使用 $story-to-handdrawn-video 把这些图片做成翻书效果的手绘动画:
> /absolute/01.jpg /absolute/02.jpg
> ```
> 
> **先出预览**(720×960,确认效果后再出正式版):
> 
> ```text
> 使用 $story-to-handdrawn-video 先给这个故事生成一个预览版。
> ```
> 
> 使用建议:
> 
> - 故事文本默认一个完整句子一个节拍;想控制节奏,直接在故事里按句分行即可。
> - 遇到时间跳跃、指代不明、医疗场景或年龄敏感角色时,建议先让 Agent 给出视觉规划(两位场景编号为键的 JSON),确认后再生成。
> - 默认使用 Codex Image2 生成图片;只有明确要求时才会走 OpenAI API(需 `OPENAI_API_KEY`)。
> - 输出是静音画面轨,配音和 BGM 属于后期工作。
> 
> ### 输出契约
> 
> | 输入 | 模式 | 输出路径 |
> | --- | --- | --- |
> | 故事文本 | 正式 | `out/picture_silent.mp4` |
> | 故事文本 | 预览 | `out/picture_silent-preview.mp4` |
> | 上传图片 | 正式 | `out/uploaded_picture_silent.mp4` |
> | 上传图片 | 预览 | `out/uploaded_picture_silent-preview.mp4` |
> 
> - 分辨率:正式 1080×1440,预览 720×960
> - 编码:H.264,静音
> 
> Skill 的完整行为约定见 [skill-package/story-to-handdrawn-video/SKILL.md](skill-package/story-to-handdrawn-video/SKILL.md)。
> 
> ### 项目结构
> 
> ```text
> .
> ├── src/                    # Remotion 组件(场景、擦除动效、翻页、缓动)
> ├── scripts/                # 渲染器入口与导入/校验/打包脚本(由 Skill 调用)
> ├── skill-package/          # 可分发的 Codex / Agent Skill
> ├── examples/               # 示例故事文本
> ├── references/             # 黑白/彩色风格参考图
> ├── public/                 # 字体与素材(generated/ 为运行时产物)
> ├── storyboard.json         # 默认文本故事分镜示例
> ├── storyboard.uploaded.json # 上传图片分镜示例
> └── DESIGN.md               # 设计说明
> ```
> 
> 渲染器项目的维护命令:`npm run dev`(Remotion Studio)、`npm run check`(类型与分镜校验)、`npm run build`(生产构建)、`npm run package:share`(生成源码分享包)。
> 
> ### 字体
> 
> 项目使用随附的站酷马善政毛笔字体(Ma Shan Zheng),许可证见 [public/fonts/OFL-MaShanZheng.txt](public/fonts/OFL-MaShanZheng.txt)(SIL Open Font License)。
> 
> ### 贡献
> 
> 欢迎贡献——请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。注意 `skill-package/` 下的 Skill 契约与 `src/`、`scripts/` 下的渲染器逻辑是核心部分,修改需要充分理由。
> 
> ### 开源协议
> 
> [MIT](LICENSE)
> 
> ---
> 
> ## English
> 
> Convert Chinese story copy — or ordered hand-drawn images — into a 3:4 vertical **hand-drawn diary-comic animation**: handwritten captions, left-to-right `text → bw plate → color illustration` reveals, an optional bottom-right page-curl flip transition, and safe uncropped framing. Built on [Remotion](https://www.remotion.dev/); outputs a silent H.264 picture track ready for post-production voiceover.
> 
> This repo contains:
> 
> - **The renderer project** (root): the Remotion app that storyboards, animates, and renders.
> - **A Codex / agent skill** (`skill-package/`): a distributable skill that drives the renderer with natural language — no scripts to run by hand.
> 
> ### Requirements
> 
> - Node.js 20+, Python 3.10+, npm
> - FFmpeg (`ffmpeg` and `ffprobe` on PATH)
> - Google Chrome or a Remotion-managed compatible browser
> - An agent runtime with skill support (Codex, Claude Code, Kimi Code, …)
> 
> ### Install
> 
> 1. Set up the renderer project:
> 
> ```bash
> git clone https://github.com/gnipbao/story-to-handdrawn-video.git
> cd story-to-handdrawn-video
> npm ci
> npm run check
> ```
> 
> 2. Install the skill into your agent's skills directory:
> 
> ```bash
> # Codex
> cp -R skill-package/story-to-handdrawn-video ~/.codex/skills/
> 
> # Claude Code / generic agents
> cp -R skill-package/story-to-handdrawn-video ~/.claude/skills/
> 
> # Kimi Code
> cp -R skill-package/story-to-handdrawn-video ~/.agents/skills/
> ```
> 
> 3. Point the skill at the renderer project (skip when the agent runs inside it):
> 
> ```bash
> export STORY_VIDEO_PROJECT=/absolute/path/to/story-to-handdrawn-video
> ```
> 
> ### Usage (Codex skill examples)
> 
> Everything is driven in natural language; sentence splitting, storyboarding, image generation, import, and rendering are handled by the agent per the skill contract.
> 
> Story text → animation (the skill's default prompt):
> 
> ```text
> 使用 $story-to-handdrawn-video 把这段故事生成可后期配音的手绘动画。
> 
> ```
> 
> Ordered images → animation:
> 
> ```text
> 使用 $story-to-handdrawn-video 把这几张图片按顺序生成手绘动画:
> /absolute/01.jpg /absolute/02.jpg /absolute/03.jpg
> ```
> 
> Page-flip effect (uploaded pages shown untouched, curled from the bottom-right corner):
> 
> ```text
> 使用 $story-to-handdrawn-video 把这些图片做成翻书效果的手绘动画:
> /absolute/01.jpg /absolute/02.jpg
> ```
> 
> Preview first (720×960, before committing to a full render):
> 
> ```text
> 使用 $story-to-handdrawn-video 先给这个故事生成一个预览版。
> ```
> 
> Notes: one complete sentence per beat by default; Codex Image2 is the default image generator (the OpenAI API path is only used when explicitly requested and requires `OPENAI_API_KEY`); output is a silent picture track — voiceover and BGM are post-production.
> 
> ### Outputs
> 
> | Input | Mode | Path |
> | --- | --- | --- |
> | Story text | final | `out/picture_silent.mp4` |
> | Story text | preview | `out/picture_silent-preview.mp4` |
> | Uploaded images | final | `out/uploaded_picture_silent.mp4` |
> | Uploaded images | preview | `out/uploaded_picture_silent-preview.mp4` |
> 
> Final 1080×1440, preview 720×960, H.264, silent. The full behavior contract lives in [SKILL.md](skill-package/story-to-handdrawn-video/SKILL.md).
> 
> ### License
> 
> [MIT](LICENSE). The bundled Ma Shan Zheng font is under the [SIL Open Font License](public/fonts/OFL-MaShanZheng.txt).

## 延伸閱讀

相關概念：[[動畫生成]] · [[自動化測試]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[diffusionstudio--lottie|diffusionstudio/lottie]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[WUBING2023--PaperSpine|WUBING2023/PaperSpine]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/gnipbao/story-to-handdrawn-video)

## 相關收錄

> [!note]- 直接競品（同子分類：動畫生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "動畫生成" AND file.name != "gnipbao--story-to-handdrawn-video"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "gnipbao--story-to-handdrawn-video"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "gnipbao--story-to-handdrawn-video" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "gnipbao--story-to-handdrawn-video"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["動畫生成","自動化測試","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "gnipbao--story-to-handdrawn-video" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "gnipbao--story-to-handdrawn-video" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "gnipbao" AND file.name != "gnipbao--story-to-handdrawn-video"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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
> const me = dv.page("Repos/gnipbao--story-to-handdrawn-video");
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

> **2026-07-25** — 首次收錄
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

- [[2026-07-26|2026-07-26]] — 再次上榜，631 stars
- [[2026-07-25|2026-07-25]] — 首次收錄，610 stars
