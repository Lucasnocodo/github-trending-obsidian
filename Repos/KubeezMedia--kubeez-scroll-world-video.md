---
repo: KubeezMedia/kubeez-scroll-world-video
url: https://github.com/KubeezMedia/kubeez-scroll-world-video
owner: KubeezMedia
owner_type: Organization
language: JavaScript
license: N/A
description: "Scroll-scrubbed 'fly through the world' burger demo, generated with Kubeez. Live: meepcastana.github.io/kubeez-scroll-world-video"
homepage: "https://kubeezmedia.github.io/kubeez-scroll-world-video/"
stars: 607
stars_per_day: 67
forks: 5
open_issues: 0
created: 2026-07-13
pushed_at: 2026-07-14
first_seen: 2026-07-20
week: "2026-W30"
month: "2026-07"
category: "Web 應用"
subcategory: "互動展示"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-20
use_case: "透過滾動滑動鏡頭，帶你飛越迷你漢堡世界的互動式展示。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-27"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 87953
readme_length: 5323
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-20"
star_history: "2026-07-20:660,2026-07-20:660,2026-07-21:632,2026-07-22:618,2026-07-23:607"
tags:
  - github
  - "category/web_應用"
  - "lang/javascript"
  - org
aliases:
  - "kubeez-scroll-world-video"
  - "KubeezMedia/kubeez-scroll-world-video"
  - "透過滾動滑動鏡頭，帶你飛越迷你漢堡世界的互動式展示。"
---

# kubeez-scroll-world-video

**607** stars · **67** stars/天 · 建立 9 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
> 透過滾動滑動鏡頭，帶你飛越迷你漢堡世界的互動式展示。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (67 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望創建互動式網頁展示的前端開發者和設計師。
> **一句話重點** 這個專案展示了如何利用滾動行為創造出引人入勝的互動式網頁體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "互動展示" && p.file.name !== "KubeezMedia--kubeez-scroll-world-video" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 互動展示 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到一個引人入勝的互動展示，值得投資。

> [!abstract] 核心創新
> 這個專案的創新在於將滾動行為與影片播放無縫結合，創造出沉浸式的互動體驗。

## 專案簡介

這個專案提供了一個獨特的互動式網頁體驗，使用者透過滾動滑動鏡頭，讓預先渲染的影片在迷你漢堡世界中流暢移動。每個場景都是透過 Kubeez 平台生成的，並以連續的方式呈現，沒有明顯的切換。核心機制是將滾動位置映射到影片的 `currentTime`，使得滾動動作直接驅動鏡頭前進。使用者在滾動時會看到市場、烤架、櫃檯和漢堡等場景，並且每個場景之間有專門的過渡片段，這樣整個體驗看起來就像是一個連續的飛行。這種設計使得使用者能夠沉浸在這個虛擬世界中，並且感受到流暢的視覺效果。技術上，這個專案使用了 JavaScript 和 HTML 來構建，並利用 Python 來提供本地伺服器支持。

這樣的架構使得專案能夠在靜態主機上運行，並且支持平滑的影片加載和播放。與其他類似工具相比，例如 0x0funky/agent-sprite-forge，這個專案的獨特之處在於其無縫的場景過渡和互動性，這使得它在展示上更具吸引力。實際使用中，這個專案能夠處理多個場景的影片，並且在性能上表現良好，適合用於各種行業的展示需求。對於需要創造沉浸式體驗的團隊來說，這是一個值得考慮的選擇。未來，隨著技術的進步，這個專案可能會進一步擴展其功能，支持更多的自定義選項和場景。

**技術棧**：`JavaScript` · `HTML` · `Python`

## 重點功能

- 滾動驅動鏡頭 — 使用者滾動頁面時，鏡頭隨著滾動位置在影片中移動。
- 無縫過渡效果 — 每個場景之間有專門的過渡片段，確保流暢的視覺體驗。
- 完全自動化生成 — 所有場景和影片均由 Kubeez 平台自動生成，無需外部工具。
- 支援多場景展示 — 可輕鬆添加多個場景，適用於不同主題的展示需求。
- 簡易本地運行 — 使用 Python 提供的 HTTP 伺服器可輕鬆在本地測試。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/KubeezMedia/kubeez-scroll-world-video.git && cd kubeez-scroll-world-video
```
2. 啟動本地伺服器
```bash
python -m http.server 8080
```
3. 在瀏覽器中打開
```bash
open http://localhost:8080
```

## 程式碼範例

```js
{
  "前置條件": "確保已經安裝 Kubeez 並配置好環境。",
  "指令": "mountKubeezWorld(document.getElementById('world'), { brand: { name: 'Smash & Co.' }, sections: [ /* market, grill, counter, burger — copy + accent per scene */ ], connectors: [ 'assets/vid/conn1.mp4', 'assets/vid/conn2.mp4', 'assets/vid/conn3.mp4' ], });",
  "預期輸出": "將在指定的 DOM 元素中渲染出互動式的漢堡世界展示。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 607 stars（67/天），forks 5（0.8%），這顯示出穩定的增長。作者 MeepCastana 之前有其他相關作品，這個專案解決了傳統網頁展示的沉悶問題，提供了一種新的互動方式。社群對於這種創新的展示方式反應熱烈，可能是因為它結合了視覺藝術與技術，吸引了許多設計師和開發者的注意。技術上，這樣的互動展示在現今的網頁設計中越來越受重視，尤其是在需要吸引觀眾的行業中。

## 適合誰使用

**目標受眾**：希望創建互動式網頁展示的前端開發者和設計師。

> [!example] 使用場景
> - 網頁設計師用它來創建互動式產品展示，因為這種方式能有效吸引訪客的注意力，提升轉換率。
> - 行銷團隊用它來展示品牌故事，因為流暢的視覺效果能讓觀眾更容易記住品牌。
> - 教育工作者用它來製作互動式教學內容，因為這種沉浸式的學習方式能提高學生的參與感。

## 架構分析

這個專案的架構基於一個簡單的 JavaScript 引擎，負責處理滾動事件和影片播放。選擇使用原生 JavaScript 而非框架，因為這樣可以減少依賴，提升性能。資料流方面，影片作為 Blob 加載，這樣即使在靜態主機上也能實現平滑播放。這種設計的代價是需要用戶在本地伺服器上運行，而無法直接在檔案系統中運行。擴展性方面，這個架構能夠輕鬆添加新的場景和過渡效果，但在處理大量影片時可能會遇到性能瓶頸。

## 技術深入分析

這個專案的核心技術在於將滾動事件與影片播放進行映射，使用者的每一次滾動都直接影響影片的播放進度。這種設計使得使用者能夠在互動中感受到流暢的視覺效果。影片的生成使用了 Kubeez 平台，這意味著所有的內容都可以在一個統一的環境中創建，減少了對外部工具的依賴。效能方面，由於使用 Blob 加載影片，這使得即使在靜態主機上也能實現平滑的播放體驗。設計上選擇了原生 JavaScript，這樣可以避免引入額外的框架，降低了學習曲線和維護成本。技術風險方面，對於大量影片的處理可能會導致性能瓶頸，尤其是在低性能設備上。整合方面，這個專案可以輕鬆與現有的網頁設計流程結合，並且對於 CI/CD pipeline 的友好度也相對較高，因為它的依賴性很低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的使用說明和範例。安裝過程相對順暢，但需要注意必須在 HTTP 環境下運行。文件目前僅提供英文，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供沉浸式的互動體驗，吸引使用者注意。
> - 無需外部工具，所有內容均可在 Kubeez 平台上生成。
> - 流暢的場景過渡，提升整體視覺效果。

> [!danger] 缺點
> - 需要 Kubeez 帳號，對於不想註冊的使用者來說不方便。
> - 影片生成過程可能消耗較多的資源和時間。
> - 僅支援 HTTP 環境，限制了使用場景。

> [!warning] 注意事項
> - 僅支援在 HTTP 環境下運行，無法直接在本地檔案系統中運行。
> - 需要 Kubeez 帳號來生成和管理內容。
> - 影片生成過程可能需要消耗相對較多的 Kubeez 積分。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成動畫角色，而本專案則是針對互動式場景展示，適合不同的使用情境。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供的是靜態的場景展示，而本專案的互動性和流暢性使其更具吸引力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成動畫角色，使用的是基於圖形的渲染，而本專案則是針對互動式場景展示，使用影片作為主要媒介。 | 如果你的專案需要創建動畫角色而非場景展示，則應選擇這個工具。 | medium，因為需要重新設計內容生成的流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供靜態的場景展示，主要依賴於圖像而非影片，而本專案則提供流暢的互動體驗。 | 如果你的需求是靜態展示而非互動體驗，則可以考慮這個工具。 | low，因為可以直接使用靜態資源。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **kubeez-scroll-world-video** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於生成動畫角色，使用的是基於圖形的渲染，而本專案則是針對互動式場景展示，使用影片作為主要媒介。 | boneyard 提供靜態的場景展示，主要依賴於圖像而非影片，而本專案則提供流暢的互動體驗。 |
> | 遷移成本 | - | medium，因為需要重新設計內容生成的流程。 | low，因為可以直接使用靜態資源。 |
> | 適用場景 | 主要場景 | 如果你的專案需要創建動畫角色而非場景展示，則應選擇這個工具。 | 如果你的需求是靜態展示而非互動體驗，則可以考慮這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於小型專案或實驗性質的展示，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些瀏覽器中，影片加載速度可能較慢，影響使用體驗。
  - 解法：確保使用最新版本的瀏覽器，並提前加載影片。
- [MEDIUM] 過渡效果在某些設備上可能不夠流暢。
  - 解法：調整過渡的持續時間，確保其平滑。
- **[HIGH]** 需要確保所有影片都已正確生成，否則會導致顯示錯誤。
  - 解法：在生成影片後進行測試，確保每個場景都能正常播放。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要創建互動式產品展示的行銷團隊 | 非常適合 | 因為流暢的視覺效果能有效吸引觀眾注意。 |
| 希望展示品牌故事的設計師 | 適合 | 這種互動方式能讓觀眾更容易記住品牌。 |
| 教育機構希望提升學生參與感的教師 | 普通 | 雖然有趣，但可能不適合所有教學內容。 |
| 需要靜態展示的企業 | 不適合 | 這個工具專注於互動性，靜態展示效果不佳。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個引人入勝的互動展示，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度高，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
| Forks | 5 |
| Open Issues | 0 |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-07-13 |
| 官方網站 | [Link](https://kubeezmedia.github.io/kubeez-scroll-world-video/) |
| Repo 大小 | 85.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KubeezMedia/kubeez-scroll-world-video) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 86
>     "HTML" : 9
>     "Python" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MeepCastana](https://github.com/MeepCastana) | 6 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和維護。
**連結**：[文件](https://kubeezmedia.github.io/kubeez-scroll-world-video/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-13 ~ 2026-07-14）
> **活躍天數** 2 天 · **最新 commit** docs: 10MB showcase video + auto-looping GIF preview; drop the desktop-scroll note

## README 摘錄

> [!info]- 展開查看原文 README
> # 🍔 Kubeez Scroll-World-Video — *Smash & Co.* demo
> 
> > A scroll‑scrubbed **"fly through the world"** landing page. As you scroll, a pre‑rendered
> > camera glides forward through a miniature clay **burger world** — market → grill → counter →
> > the burger — as one continuous shot, no cuts. **Every frame was generated with
> > [Kubeez](https://kubeez.com).**
> 
> ### ▶️ **[Live demo → kubeezmedia.github.io/kubeez-scroll-world-video](https://kubeezmedia.github.io/kubeez-scroll-world-video/)**
> 
> ▶ **[Watch the full 20-second video](https://kubeezmedia.github.io/kubeez-scroll-world-video/img/showcase.mp4)** · or scroll the **[live demo](https://kubeezmedia.github.io/kubeez-scroll-world-video/)** yourself.
> 
> ---
> 
> ## What it is
> 
> Scroll doesn't move a page here — it **drives a camera**. Each scene is a short pre‑rendered
> video; the engine maps your scroll position to the video's `currentTime`, so scrolling scrubs
> the camera forward through the world. Between scenes, dedicated **transition clips** glide the
> camera from one place to the next, so the whole journey reads as a single continuous flight.
> 
> | The world | Landing (Market) | The Counter | The Burger |
> |---|---|---|---|
> |  |  |  |  |
> 
> ---
> 
> ## How it was built (the tutorial)
> 
> The entire thing — stills, motion, everything — was generated on the **Kubeez** platform. No
> external tools. Here's the pipeline:
> 
> ### 1. Stills — one coherent world
> - A **master world still** (`gpt-image-2`, text‑to‑image) sets the palette, angle and light.
> - Each **scene still** (Market, Grill, Counter, Hero Burger) is derived from the master with
>   **image‑to‑image** so they all share one look.
> 
> ### 2. Dive clips — fly into each scene
> - Each scene still is animated with **Seedance 2 Fast (720p)**, `image-to-video`: the camera
>   begins high and wide, then glides forward and descends into the scene.
> 
> ### 3. Transitions — the part that makes it feel continuous ✨
> This is the technique that matters. For each pair of consecutive dives:
> 
> ```
> transition.firstFrame = the ACTUAL last frame of dive N   (extracted from the rendered mp4)
> transition.lastFrame  = the ACTUAL first frame of dive N+1 (extracted from the rendered mp4)
> ```
> 
> Feed those two real frames to **Seedance 2** as keyframes with a **gentle forward‑glide**
> prompt, and it fills the in‑between. Because the transition *starts* on dive N's real last
> frame and *ends* on dive N+1's real first frame, **the seams are frame‑exact** — the engine
> plays `dive1 → transition1 → dive2 …`, so scrolling off the end of a dive kicks off its
> transition with no visible cut.
> 
> > **The one rule:** keep the transition a **low, continuous forward glide.** Do *not* prompt
> > it to "pull up / rise into the sky / fly to a map view" — that camera reversal reads as a
> > jarring *jump* when scrubbed, even with perfect seams. If two scenes are far apart, give the
> > transition a **longer duration** (7–10s) so the move stays slow and smooth.
> 
> ### 4. Encode for smooth scrubbing
> - Native resolution, `crf 20`, small GOP (`-g 8`), light sharpen, no audio, faststart.
> - The engine loads each clip as a **Blob** and scrubs `currentTime`, so smooth seeking works
>   even on static hosts (like GitHub Pages) that don't serve HTTP byte ranges.
> 
> ### 5. Wire the engine
> The whole page is one config object passed to a portable, dependency‑free vanilla‑JS engine:
> 
> ```html
> 
>   mountKubeezWorld(document.getElementById('world'), {
>     brand: { name: 'Smash & Co.' },
>     sections: [ /* market, grill, counter, burger — copy + accent per scene */ ],
>     connectors: [ 'assets/vid/conn1.mp4', 'assets/vid/conn2.mp4', 'assets/vid/conn3.mp4' ],
>   });
> 
> ```
> 
> The engine handles scroll→time mapping, blob loading, lazy prefetch, frame‑matched crossfades,
> pinned per‑section copy, the route rail, `prefers-reduced-motion`, and phone hardening.
> 
> ---
> 
> ## The clips
> 
> | Section | Model | Notes |
> |---|---|---|
> | Market / Grill / Counter / Burger dives | Seedance 2 Fast · 720p | `image-to-video` from each scene still |
> | Transitions (×3) | Seedance 2 Fast · 720p | keyframed from real boundary frames; conn3 is 7s |
> | Stills | gpt‑image‑2 | master + image‑to‑image scenes |
> 
> Roughly ~1,150 Kubeez credits for the full 720p build.
> 
> ---
> 
> ## Build your own — install the skill
> 
> This demo was produced by the **`scroll-world-video`** skill, which interviews you for your
> topic + brand, generates the world, and wires this exact engine — for *any* business.
> 
> **Claude Code** (installs the plugin and auto-wires the Kubeez MCP):
> ```
> /plugin marketplace add KubeezMedia/kubeez-scroll-world-video
> /plugin install scroll-world-video@kubeez
> /scroll-world-video
> ```
> 
> **Codex / Cursor / other agents:** point your agent at
> [`skills/scroll-world-video/SKILL.md`](skills/scroll-world-video/SKILL.md) and connect the
> Kubeez MCP — see [`AGENTS.md`](AGENTS.md).
> 
> > ⚡ **Powered by Kubeez.** The scroll engine and method are open, but the skill generates
> > *only* through the [Kubeez](https://kubeez.com) platform (`mcp.kubeez.com/mcp`) — that's what
> > turns your idea into a world. Sign in with a Kubeez account to run it.
> 
> ## Run it locally
> 
> The engine fetches clips as blobs, so serve over HTTP (not `file://`):
> 
> ```bash
> python -m http.server 8080
> # open http://localhost:8080
> ```
> 
> ---
> 
> Made with [Kubeez](https://kubeez.com). All imagery and motion generated on the Kubeez platform.

## 延伸閱讀

相關概念：[[互動展示]] · [[視覺效果]] · [[網頁設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]]

[GitHub](https://github.com/KubeezMedia/kubeez-scroll-world-video) · [官方網站](https://kubeezmedia.github.io/kubeez-scroll-world-video/)

## 相關收錄

> [!note]- 直接競品（同子分類：互動展示）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "互動展示" AND file.name != "KubeezMedia--kubeez-scroll-world-video"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Web 應用" AND file.name != "KubeezMedia--kubeez-scroll-world-video"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "KubeezMedia--kubeez-scroll-world-video" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "KubeezMedia--kubeez-scroll-world-video"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["互動展示","視覺效果","網頁設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "KubeezMedia--kubeez-scroll-world-video" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KubeezMedia--kubeez-scroll-world-video" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KubeezMedia" AND file.name != "KubeezMedia--kubeez-scroll-world-video"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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
> const me = dv.page("Repos/KubeezMedia--kubeez-scroll-world-video");
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

> **2026-07-20** — 首次收錄
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

- [[2026-07-20|2026-07-20]] — 首次收錄，660 stars
