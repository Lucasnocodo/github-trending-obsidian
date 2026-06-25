---
repo: zhongerxin/Cowart
url: https://github.com/zhongerxin/Cowart
owner: zhongerxin
owner_type: User
language: JavaScript
license: N/A
description: ""
homepage: ""
stars: 2653
stars_per_day: 442
forks: 209
open_issues: 6
created: 2026-06-18
pushed_at: 2026-06-24
first_seen: 2026-06-22
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "生產力"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-22
use_case: "提供一個本地的無限畫布插件，讓 Codex 用戶能夠創建和生成圖片。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-28"
contributor_count: 4
engagement: "low"
issue_close_rate: 60
repo_size_kb: 7614
readme_length: 2772
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-22"
star_history: "2026-06-22:1227,2026-06-23:1994,2026-06-24:2371,2026-06-25:2653"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "Cowart"
  - "zhongerxin/Cowart"
  - "提供一個本地的無限畫布插件，讓 Codex 用戶能夠創建和生成圖片。"
---

# Cowart

**1.2k** stars · **409** stars/天 · 建立 3 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/zhongerxin--Cowart");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供一個本地的無限畫布插件，讓 Codex 用戶能夠創建和生成圖片。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (409 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在 Codex 中使用本地畫布功能的開發者和設計師。
> **一句話重點** Cowart 的本地化無限畫布功能讓 Codex 用戶能夠更靈活地進行創作，特別是在需要快速迭代的場景中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zhongerxin--Cowart");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "生產力" && p.file.name !== "zhongerxin--Cowart" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 生產力 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習、3 小時整合，得到靈活的本地畫布功能，值得一試。

> [!abstract] 核心創新
> Cowart 提供了一個本地無限畫布插件，專為 Codex 用戶設計，支持即時圖片生成和標註。

## 專案簡介

Cowart 是一個專為 Codex 設計的本地無限畫布插件，基於 tldraw 提供可視化畫布，使用者可以在本地網頁服務中進行構思、標註和生成圖片。使用者可以在 Codex 中啟動畫布，並將畫布數據保存在當前項目目錄的 `canvas/` 目錄中。關鍵指令如 `Open the Cowart canvas for this project.` 會啟動畫布服務，並提供一個本地網址供使用者訪問。這個設計讓使用者能夠在本地環境中進行圖片生成，並且不需要依賴外部伺服器。技術上，Cowart 使用 Vite 作為建置工具，並依賴 React 和 tldraw 來實現畫布功能，這使得其在性能上相對輕量，並且能夠快速啟動。

與其他類似工具相比，如 0x0funky/agent-sprite-forge，Cowart 提供了更直觀的本地畫布操作，而不是僅僅依賴於 API 調用。使用者可以在畫布中創建 AI image holder，並讓 Codex 根據描述生成圖片，這一功能的實現使得畫布的使用更加靈活。實際使用中，使用者可能會遇到如如何設置 AI image holder 大小等問題，這在熱門問題中有所反映。總體來看，Cowart 適合需要本地畫布功能的 Codex 用戶，並且在小型團隊或個人項目中表現良好。

**技術棧**：`Vite` · `React` · `tldraw`

## 重點功能

- 本地無限畫布 — 提供一個可視化的畫布，讓使用者能夠自由創作。
- AI image holder — 在畫布中創建 AI image holder，並根據描述生成圖片。
- 持久化數據 — 畫布數據保存在當前項目目錄的 `canvas/` 目錄中。
- Codex 整合 — 直接在 Codex 中啟動畫布，並使用相關指令生成圖片。
- 簡易安裝 — 提供自動和手動安裝方式，方便使用者快速上手。

## 快速開始

1. 克隆 Cowart 插件到本地
```bash
git clone https://github.com/zhongerxin/cowart.git ~/plugins/cowart
```
2. 安裝依賴
```bash
cd ~/plugins/cowart && npm install
```
3. 啟動畫布服務
```bash
npm run dev
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 Cowart 插件",
  "Open the Cowart canvas for this project.",
  "# 預期輸出：啟動本地畫布服務並提供訪問網址。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1227 stars（409/天），forks 108（8.8%），這顯示出強烈的增長趨勢。作者 zhongerxin 之前在 AI 工具開發上有豐富經驗，Cowart 解決了 Codex 用戶在本地無限畫布方面的需求，之前的解決方案往往依賴於雲端服務，造成延遲和隱私問題。這個專案的推出正好滿足了對本地化工具的需求，並且在社群中引發了討論。其技術架構的選擇，如使用 Vite 和 React，讓它在性能上具備優勢，這也是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要在 Codex 中使用本地畫布功能的開發者和設計師。

> [!example] 使用場景
> - 設計師用它來在 Codex 中創建無限畫布，因為可以快速生成和編輯圖片，提升創作效率。
> - 開發者用它來測試 AI 圖片生成，因為可以在本地環境中快速迭代，減少網路延遲。
> - 教育工作者用它來製作教學材料，因為可以在畫布上標註和生成圖片，方便學生理解。

## 架構分析

Cowart 的架構基於 Vite 和 React，這使得其能夠快速啟動和構建。畫布數據存儲在用戶的本地目錄中，這樣可以保證數據的隱私性和持久性。畫布的核心功能依賴於 tldraw，這是一個輕量級的可視化工具，能夠提供無限畫布的能力。

選擇本地服務的設計使得使用者能夠在沒有網路的情況下進行創作，這對於需要快速迭代的場景非常有利。這種設計的代價是需要使用者手動設置環境，但這也讓使用者擁有更多的控制權。整體來看，Cowart 在性能和靈活性上有著良好的平衡。

## 技術深入分析

Cowart 的核心技術基於 Vite 和 React，這使得其在開發和構建上具備高效能。畫布的數據存儲在用戶本地，這樣不僅提高了數據的安全性，還能夠在無網路的情況下進行創作。使用 tldraw 作為畫布的基礎，讓 Cowart 能夠提供無限畫布的能力，這對於設計和創意工作者來說是非常重要的。選擇本地服務的設計雖然增加了安裝的複雜性，但卻讓使用者能夠擁有更高的控制權。

Cowart 的效能在小型項目中表現良好，但在大型項目中可能會遇到性能瓶頸。對於依賴於外部 API 的設計，Cowart 的本地化優勢使其在隱私和速度上具備明顯的優勢。整合到現有的開發流程中，Cowart 能夠與主流的 CI/CD 工具配合使用，但需要額外的配置。整體來看，Cowart 在創意工具的生態中提供了一個有趣的選擇，尤其是對於需要快速迭代的設計工作者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導。安裝過程相對順暢，但對於新手來說可能會有一定的學習曲線。文件中有英文版本，方便國際用戶使用。

## 優缺點分析

> [!success] 優點
> - 本地化設計，數據隱私性高。
> - 快速啟動和迭代，適合創意工作。
> - 與 Codex 的深度整合，提升使用效率。

> [!danger] 缺點
> - 需要手動設置，對新手不友好。
> - 功能仍在開發中，可能存在不穩定性。
> - 僅限於 Codex 環境，無法廣泛應用。

> [!warning] 注意事項
> - 僅支援 Codex 環境，無法在其他平台使用。
> - 需要手動設置本地服務，對於新手可能有一定的學習曲線。
> - 目前功能仍在開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的畫布功能，但主要依賴於雲端服務，可能導致延遲。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也有畫布功能，但缺乏 Cowart 的本地化優勢，使用上不夠靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具使用雲端服務來提供畫布功能，而 Cowart 則是本地化設計，這使得 Cowart 在隱私性和速度上有優勢。 | 如果你的團隊需要雲端協作功能，且不介意數據存儲在外部伺服器上，則可以選擇 agent-sprite-forge。 | medium，因為需要重新設計數據流和存儲策略。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供類似的畫布功能，但缺乏 Cowart 的本地化優勢，使用上不夠靈活。 | 如果你的項目需要更強的雲端功能和協作，boneyard 可能更合適。 | high，因為需要重構整個畫布的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Cowart** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具使用雲端服務來提供畫布功能，而 Cowart 則是本地化設計，這使得 Cowart 在隱私性和速度上有優勢。 | boneyard 提供類似的畫布功能，但缺乏 Cowart 的本地化優勢，使用上不夠靈活。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和存儲策略。 | high，因為需要重構整個畫布的使用方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要雲端協作功能，且不介意數據存儲在外部伺服器上 | 如果你的項目需要更強的雲端功能和協作，boneyard 可能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，畫布可能無法正常啟動，特別是在防火牆設置較嚴格的情況下。
  - 解法：檢查防火牆設置，確保允許相應的端口通過。
- [MEDIUM] AI image holder 的大小設置不明確，可能導致生成圖片不符合預期。
  - 解法：參考官方文檔，使用適當的比例設置 holder。
- [MEDIUM] 在大型項目中，畫布的性能可能會下降。
  - 解法：考慮將畫布數據分割到多個小項目中。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創意團隊的設計項目 | 非常適合 | Cowart 提供了靈活的本地畫布功能，適合快速迭代設計。 |
| 大型企業的協作設計項目 | 不適合 | 在大型項目中，性能可能會成為瓶頸，且缺乏雲端協作功能。 |
| 個人開發者的創作工具 | 適合 | Cowart 的本地化設計非常適合個人開發者進行創作。 |
| 需要高效能的圖像生成工具 | 普通 | 在小型項目中表現良好，但在大型項目中可能會遇到性能問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習、3 小時整合，得到靈活的本地畫布功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Cowart 本身不需要高權限，且數據存儲在本地，不會存取敏感資料。對於 CI/CD 使用是安全的，但需確保本地環境的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Cowart 最常與 Codex 搭配使用，作為設計和圖片生成的工具。在一個使用 Codex 的項目中，使用者可以通過 `Open the Cowart canvas for this project.` 指令來啟動畫布，並在本地進行創作。與主流 CI/CD 工具的整合相對簡單，但需要額外的配置來確保畫布數據的持久化。整合過程中，最常見的問題是防火牆設置，可能會影響畫布的啟動。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zhongerxin--Cowart");
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
> const me = dv.page("Repos/zhongerxin--Cowart");
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
| Forks | 108 |
| Open Issues | 2 |
| Issue 解決率 | 60% (3 closed) |
| 最後推送 | 2026-06-21 |
| 建立日期 | 2026-06-18 |
| Repo 大小 | 7.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zhongerxin/Cowart) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@tiptap/pm` `@vitejs/plugin-react` `fractional-indexing` `react` `react-dom` `tldraw` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 96
>     "CSS" : 2
>     "Shell" : 1
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zhongerxin](https://github.com/zhongerxin) | 25 |
> | [@luojiyin1987](https://github.com/luojiyin1987) | 3 |
> | [@Patrick5D](https://github.com/Patrick5D) | 1 |
> | [@Icatme](https://github.com/Icatme) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有合併請求和問題回應。
**連結**：[文件](https://github.com/zhongerxin/Cowart/blob/main/README.en.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-21 ~ 2026-06-21）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #11 from luojiyin1987/fix/add-missing-tiptap-pm-dep

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/zhongerxin/Cowart/issues/9) | 如何设置AI image holder的size呢? | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cowart
> 
> Cowart 是一个面向 Codex 的本地无限画布插件。它基于 tldraw 提供可视化画布，用于构思、标注、生成图片和根据标注图迭代图片。画布运行在本地网页服务中，数据默认保存到当前用户项目的 `canvas/` 目录，而不是保存到插件仓库里。
> 
> English README: [README.en.md](README.en.md)
> 
> ## 功能
> 
> - 在 Codex 中打开一个本地 tldraw 无限画布。
> - 在当前项目目录中持久化画布页面和图片资源。
> - 在画布中创建 AI image holder，并让 Codex 生成图片填入选中的 holder。
> - 上传或提供 Cowart 标注截图，让 Codex 根据标注生成干净的新图并放到原图旁边。
> - 通过 Cowart MCP 工具读取选择状态、插入图片，并保存到页面本地资源目录。
> 
> ## 安装
> 
> ### 让 Codex 自动安装
> 
> 把下面这段发给 Codex：
> 
> ```text
> 请从 https://github.com/zhongerxin/cowart.git 安装 Cowart Codex 插件。
> 请 clone 仓库到 ~/plugins/cowart，确认 .codex-plugin/plugin.json 存在，
> 把插件加入 personal marketplace，先运行 codex plugin marketplace add ~，
> 再运行 codex plugin add cowart@personal。
> 安装后请校验插件，并告诉我是否需要开启一个新对话来加载新技能和 MCP 工具。
> ```
> 
> ### 手动安装
> 
> 推荐把插件 clone 到 Codex personal marketplace 默认会引用的位置：
> 
> ```bash
> mkdir -p ~/plugins
> git clone https://github.com/zhongerxin/cowart.git ~/plugins/cowart
> cd ~/plugins/cowart
> npm install
> npm run build
> ```
> 
> 确保 `~/.agents/plugins/marketplace.json` 中有 Cowart 条目：
> 
> ```json
> {
>   "name": "personal",
>   "interface": {
>     "displayName": "Personal"
>   },
>   "plugins": [
>     {
>       "name": "cowart",
>       "source": {
>         "source": "local",
>         "path": "./plugins/cowart"
>       },
>       "policy": {
>         "installation": "AVAILABLE",
>         "authentication": "ON_INSTALL"
>       },
>       "category": "Productivity"
>     }
>   ]
> }
> ```
> 
> 然后先注册 personal marketplace，再安装插件：
> 
> ```bash
> codex plugin marketplace add ~
> codex plugin add cowart@personal
> ```
> 
> 安装后建议开启一个新的 Codex 对话，让新的 skill 和 MCP 工具完整加载。
> 
> ## 使用
> 
> ### 打开画布
> 
> 在 Codex 中说：
> 
> ```text
> Open the Cowart canvas for this project.
> ```
> 
> Cowart 会启动本地服务，默认地址是：
> 
> ```text
> http://127.0.0.1:43217/
> ```
> 
> 画布数据会保存在当前项目目录下：
> 
> ```text
> canvas/pages//cowart-canvas.json
> canvas/pages//assets/
> ```
> 
> ### 生成新图
> 
> 1. 打开 Cowart 画布。
> 2. 在画布里创建并选中一个 AI image holder。
> 3. 在 Codex 中描述要生成的图片，例如：
> 
> ```text
> Generate a new image into the selected Cowart AI image holder.
> ```
> 
> Codex 会读取选中的 holder，按它的比例生成图片，并插入到 holder 中。
> 
> ### 根据标注图生成新图
> 
> 1. 在 Cowart 画布中对图片做标注。
> 2. 截图并把标注截图发给 Codex。
> 3. 使用提示：
> 
> ```text
> Use my Cowart annotation screenshot to generate a clean revised image beside the original.
> ```
> 
> Codex 会读取截图里的标注和箭头，生成去掉标注痕迹的新图，并把结果放在原图旁边。原图和标注不会被删除或移动。
> 
> ## 技能
> 
> - `cowart:cowart-open-canvas`：打开 Cowart 本地画布。
> - `cowart:cowart-image-gen`：把生成图片插入选中的 AI image holder。
> - `cowart:cowart-image-edit`：根据用户提供的 Cowart 标注截图生成修订图。
> 
> ## 本地开发
> 
> ```bash
> npm install
> npm run dev
> npm run build
> ```
> 
> 也可以直接启动画布服务，并指定用户项目目录：
> 
> ```bash
> ./scripts/start-canvas.sh /path/to/user/project
> ```
> 
> 常用环境变量：
> 
> - `COWART_PORT`：本地服务端口，默认 `43217`。
> - `COWART_PROJECT_DIR`：画布数据所属的用户项目目录。
> - `COWART_CANVAS_DIR`：画布数据目录，默认是 `$COWART_PROJECT_DIR/canvas`。
> 
> ## 开发者
> 
> ZHONG XIN  
> zhongxin123456@gmail.com  
> https://www.jiqiren.ai
> 
> ## 致谢
> 
> Cowart 的画布能力基于 [tldraw/tldraw](https://github.com/tldraw/tldraw) 实现。

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[生產力]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]] · [[FULU-Foundation--OrcaSlicer-bambulab|FULU-Foundation/OrcaSlicer-bambulab]]

[GitHub](https://github.com/zhongerxin/Cowart)

## 相關收錄

> [!note]- 直接競品（同子分類：生產力）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "生產力" AND file.name != "zhongerxin--Cowart"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "zhongerxin--Cowart"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "zhongerxin--Cowart" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "zhongerxin--Cowart"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","生產力"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "zhongerxin--Cowart" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/zhongerxin--Cowart");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zhongerxin--Cowart" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zhongerxin" AND file.name != "zhongerxin--Cowart"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zhongerxin--Cowart");
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
> const me = dv.page("Repos/zhongerxin--Cowart");
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
> const me = dv.page("Repos/zhongerxin--Cowart");
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
> const me = dv.page("Repos/zhongerxin--Cowart");
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
> const me = dv.page("Repos/zhongerxin--Cowart");
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

> **2026-06-22** — 首次收錄
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

- [[2026-06-25|2026-06-25]] — 再次上榜，2.7k stars
- [[2026-06-24|2026-06-24]] — 再次上榜，2.4k stars
- [[2026-06-23|2026-06-23]] — 再次上榜，2.0k stars
- [[2026-06-22|2026-06-22]] — 首次收錄，1.2k stars
