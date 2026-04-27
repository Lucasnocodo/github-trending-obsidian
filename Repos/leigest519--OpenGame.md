---
repo: leigest519/OpenGame
url: https://github.com/leigest519/OpenGame
owner: leigest519
owner_type: User
language: TypeScript
license: Apache-2.0
description: "OpenGame: Open Agentic Coding for Games"
homepage: ""
stars: 1254
stars_per_day: 209
forks: 157
open_issues: 11
created: 2026-04-20
pushed_at: 2026-04-22
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "遊戲開發"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供一個開源框架，讓使用者能從提示創建完整的網頁遊戲。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-30"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 22439
readme_length: 9905
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1088,2026-04-27:1254"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "OpenGame"
  - "leigest519/OpenGame"
  - "提供一個開源框架，讓使用者能從提示創建完整的網頁遊戲。"
---

# OpenGame

**1.1k** stars · **218** stars/天 · 建立 5 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/leigest519--OpenGame");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供一個開源框架，讓使用者能從提示創建完整的網頁遊戲。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (218 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望利用 AI 自動化遊戲開發流程的遊戲開發者和創意工作者。
> **一句話重點** OpenGame 不僅是生成遊戲的工具，更是推動遊戲開發自動化的一個重要里程碑。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/leigest519--OpenGame");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "遊戲開發" && p.file.name !== "leigest519--OpenGame" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 遊戲開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到快速生成遊戲原型的效果，值得嘗試。

> [!abstract] 核心創新
> OpenGame 是首個專為從提示生成完整網頁遊戲而設計的開源框架。

## 專案簡介

OpenGame 是一個開源框架，專為從提示生成完整的網頁遊戲而設計。使用者只需提供一個簡單的提示，OpenGame 便能自動構建遊戲，這是透過一個名為 GameCoder-27B 的專用代碼 LLM 來實現的。這個框架的核心在於其能夠處理多文件間的邏輯一致性，避免了傳統 LLM 在生成遊戲時常見的錯誤。使用者可以透過 CLI 以無頭模式運行，並使用 `npm run dev` 指令啟動本地開發環境。這個工具的賣點在於其能夠從高層次設計生成可玩遊戲，這在遊戲開發中是前所未有的。

技術上，它結合了持續的預訓練、監督式微調和基於執行的強化學習，這使得生成的遊戲不僅具備可玩性，還能在多種場景下運行。與其他遊戲開發工具相比，如 Unity 或 Unreal Engine，OpenGame 的優勢在於其自動化程度高，並且能快速生成原型，特別適合需要快速迭代的開發環境。儘管如此，使用者仍需注意其目前的穩定性，因為該專案仍在快速發展中，並且有多個開放的問題需要解決。整體而言，OpenGame 是一個具潛力的工具，適合對遊戲開發有興趣的開發者，尤其是那些希望利用 AI 加速創作過程的人。

**技術棧**：`Node.js 20+` · `TypeScript` · `Docker`

## 重點功能

- 一鍵生成遊戲 — 只需提供簡單的提示，OpenGame 便能自動構建完整的遊戲。
- 多種遊戲類型支持 — 能生成多種風格的遊戲，如平台遊戲、卡牌遊戲等。
- CLI 操作 — 使用者可透過命令行介面進行操作，方便集成到現有的開發流程中。
- 可擴展性 — 支援用戶自定義設定，透過 `settings.json` 和環境變數進行配置。
- 即時預覽 — 提供可玩示範，讓使用者能即時查看生成的遊戲效果。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/leigest519/OpenGame.git && cd OpenGame && npm install
```
2. 構建專案
```bash
npm run build
```
3. 啟動開發伺服器
```bash
npm run dev
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 20+",
  "指令": "npm run dev",
  "預期輸出": "開啟 http://localhost:5173"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1088 stars（218/天），forks 129（11.9%），顯示出強勁的初期增長。這個專案的主要貢獻者來自 CUHK MMLab，這是一個在 AI 和遊戲開發領域有實力的團隊。OpenGame 解決了以往遊戲開發中，從高層次設計到實際可玩遊戲的過程中存在的多種問題，特別是在邏輯一致性和多文件管理上。這個框架的推出正好迎合了對於自動化遊戲開發需求的增長，並且在社群中引起了廣泛的討論，尤其是在 Hugging Face 上的相關發布。這些因素共同促成了 OpenGame 的快速增長。

## 適合誰使用

**目標受眾**：希望利用 AI 自動化遊戲開發流程的遊戲開發者和創意工作者。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成遊戲原型，因為它能從簡單的提示自動構建完整的遊戲，節省了大量的開發時間。
> - 教育工作者用它來設計互動式學習遊戲，因為它能將學習內容轉化為有趣的遊戲形式，提升學生的學習動機。
> - 獨立開發者用它來測試創意遊戲概念，因為它的自動化程度高，能快速迭代和調整設計。

## 架構分析

OpenGame 採用模組化架構，允許用戶透過 CLI 進行操作，並能夠靈活配置。核心組件包括 GameCoder-27B，這是一個專為遊戲開發訓練的 LLM，能夠處理複雜的遊戲邏輯和多文件結構。資料流方面，使用者提供的提示會經過多個處理階段，最終生成可執行的遊戲。這樣的設計使得開發者能夠快速迭代和測試遊戲概念，但也可能導致在某些情況下的邏輯不一致。擴展性方面，雖然模組化設計提供了靈活性，但在大型專案中可能會面臨管理上的挑戰。

## 技術深入分析

OpenGame 的核心技術在於其 GameCoder-27B LLM，這是專為遊戲開發設計的代碼生成模型。它使用了監督式微調和強化學習的結合，能夠生成符合遊戲引擎需求的代碼，並且能夠在多個遊戲開發場景中運行。效能方面，OpenGame 能夠快速生成遊戲原型，但在處理複雜邏輯時可能會遇到挑戰。這個框架的設計選擇了 Node.js 作為後端，這使得它在處理 I/O 操作時表現良好，但也可能在 CPU 密集型操作中面臨瓶頸。技術風險方面，隨著使用者需求的增長，可能會出現性能瓶頸，特別是在大型遊戲專案中。整合方面，OpenGame 能夠與現有的開發工具鏈相容，但在某些情況下可能需要額外的適配。整體而言，OpenGame 提供了一個創新的解決方案，能夠在遊戲開發中引入自動化和智能化的元素。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例。安裝過程相對順暢，但對於新手來說，可能需要一些時間來熟悉命令行操作。文件目前僅提供英文版本，對於非英語使用者可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 高自動化程度，能快速生成遊戲原型。
> - 支持多種遊戲類型，靈活性高。
> - 開源社群活躍，持續更新和改進。

> [!danger] 缺點
> - 穩定性尚未完全保證，可能會遇到錯誤。
> - 對於新手來說，學習曲線可能較陡。
> - 開放的問題數量較多，影響使用體驗。

> [!warning] 注意事項
> - 目前仍在快速開發中，穩定性尚未完全保證。
> - 需要 Node.js 20 以上版本，對於舊版環境的兼容性較差。
> - 開放的問題數量仍然較多，可能影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於遊戲資源的管理，而 OpenGame 更加專注於從提示生成完整的遊戲。 |
| [Minecraft-Community-Edition/client](https://github.com/Minecraft-Community-Edition/client) | Minecraft 社群版提供了遊戲的開放性和擴展性，但 OpenGame 提供的是從設計到實現的自動化流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Unity | Unity 提供了一個全面的遊戲開發環境，支持多平台發佈，而 OpenGame 專注於從提示生成遊戲，適合快速原型開發。 | 如果你的團隊需要一個完整的遊戲開發環境，並且希望支持多平台發佈，Unity 是更好的選擇。 | medium，因為需要將設計思路轉換為 Unity 的開發流程。 |
| Godot | Godot 是一個開源的遊戲引擎，提供了靈活的腳本系統，而 OpenGame 則專注於自動化生成遊戲，適合快速原型開發。 | 如果你需要一個開源的遊戲引擎，並且希望有更大的控制權，Godot 是更好的選擇。 | low，因為 Godot 的開發流程與 OpenGame 有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenGame** | **Unity** | **Godot** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Unity 提供了一個全面的遊戲開發環境，支持多平台發佈，而 OpenGame 專注於從提示生成遊戲，適合快速原型開發。 | Godot 是一個開源的遊戲引擎，提供了靈活的腳本系統，而 OpenGame 則專注於自動化生成遊戲，適合快速原型開發。 |
> | 遷移成本 | - | medium，因為需要將設計思路轉換為 Unity 的開發流程。 | low，因為 Godot 的開發流程與 OpenGame 有相似之處。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個完整的遊戲開發環境，並且希望支持多平台發 | 如果你需要一個開源的遊戲引擎，並且希望有更大的控制權，God |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些提示下生成的遊戲可能存在邏輯不一致的問題
  - 解法：需要手動調整生成的遊戲邏輯
- [MEDIUM] 安裝過程中可能會遇到 Node.js 版本不兼容的問題
  - 解法：確保使用 Node.js 20 以上版本
- [MEDIUM] 生成的遊戲在某些瀏覽器中可能無法正常運行
  - 解法：建議使用最新版本的 Chrome 或 Firefox 瀏覽器

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊希望快速生成遊戲原型 | 非常適合 | OpenGame 的自動化特性能大幅縮短開發時間。 |
| 教育機構希望開發互動式學習遊戲 | 適合 | 能夠將教學內容轉化為遊戲形式，提升學習動機。 |
| 大型遊戲開發公司需要穩定的遊戲引擎 | 不適合 | 目前仍在快速開發中，穩定性尚未完全保證。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到快速生成遊戲原型的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenGame 本身不需要高權限操作，但需注意依賴的第三方庫的安全性。使用時建議定期檢查依賴的安全性更新。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/leigest519--OpenGame");
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
> const me = dv.page("Repos/leigest519--OpenGame");
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
| Forks | 129 |
| Open Issues | 10 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-22 |
| 建立日期 | 2026-04-20 |
| Repo 大小 | 21.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/leigest519/OpenGame) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "JavaScript" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@YelonLFT](https://github.com/YelonLFT) | 6 |
> | [@leigest519](https://github.com/leigest519) | 6 |
> | [@xqy1111111](https://github.com/xqy1111111) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和討論。
**連結**：[文件](https://www.opengame-project-page.com/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-22）
> **活躍天數** 3 天 · **最新 commit** Update demo source links to main branch

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/leigest519/OpenGame/issues/5) | Release GameCoder-27B and OpenGame-Bench on Hugging Face | 2 | 0 |
> | [#11](https://github.com/leigest519/OpenGame/issues/11) | Release Failed for v0.6.0-nightly.20260425.c54307e || "N/A"  | 0 | 0 |
> | [#10](https://github.com/leigest519/OpenGame/issues/10) | Release Failed for v0.6.0-nightly.20260424.c54307e || "N/A"  | 0 | 0 |
> | [#9](https://github.com/leigest519/OpenGame/issues/9) | nnkkkkk | 0 | 0 |
> | [#8](https://github.com/leigest519/OpenGame/issues/8) | Release Failed for v0.6.0-nightly.20260423.c54307e || "N/A"  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenGame: Open Agentic Coding for Games
> 
> Yilei Jiang, Jinyuan Hu, Qianyin Xiao, Yaozhi Zheng, Ruize Ma, Kaituo Feng,
> Jiaming Han, Tianshuo Peng, Kaixuan Fan, Manyuan Zhang, Xiangyu Yue*
> 
> *CUHK MMLab*
> `yljiang@link.cuhk.edu.hk`, `xyyue@ie.cuhk.edu.hk`
> *\*Corresponding author*
> 
> [](https://www.opengame-project-page.com/)
> [](https://arxiv.org/abs/2604.18394)
> [](https://huggingface.co/papers/2604.18394)
> [](https://nodejs.org/)
> 
> **An open-source agentic framework for end-to-end web game creation from a prompt.**
> 
>   
> 
> 
> ## Installation
> 
> #### Prerequisites
> 
> ```bash
> 
> ## Quick Start
> 
> OpenGame is currently driven from the command line in **headless mode** —
> you give it a one-shot prompt and it builds the game end-to-end.
> 
> ```bash
> 
> ## Playable Demos
> 
> A curated gallery of web games generated end-to-end by OpenGame from a single prompt. Hover any tile to preview the gameplay; click through for the live build or the full source archive used by the agent.
> 
>   
>     
>       Marvel Avengers: Infinity Strike
>       
>       
>       
>         Prompt: "Build an epic side-scrolling action platformer starring the Avengers. I want to select between Iron Man (lasers & flight), Thor (hammer melee & lightning), or Hulk (smash attacks) to fight through 3 distinct levels: a ruined City, a SHIELD Helicarrier, and finally Titan. Each hero needs a basic attack, a special skill, and a screen-clearing Ultimate move. The final boss must be Thanos using Infinity Stone powers. The art style should be hardcore 90s Capcom arcade pixel art, not cute/chibi."
>         Intro: Choose your superhero. Clear stages with epic beatdowns and crush the mastermind.选择你的超级英雄，清除关卡并击败Boss。
>       
>       
>         ▶&nbsp;&nbsp;Live Demo
>         &nbsp;&nbsp;·&nbsp;&nbsp;
>         ↓&nbsp;&nbsp;Source
>       
>       
>     
>     
>       Harry Potter: Arithmancy Academy
>       
>       
>       
>         Prompt: "Create a turn-based card battle game set in a pixel art Hogwarts. I want to play as a wizard student dueling a rival in the Dueling Club. The twist is that magic requires knowledge: to cast spell cards like 'Expelliarmus' or 'Stupefy', I must answer trivia questions (Math/Science) correctly. Include a 'Magic Resonance' combo system where getting consecutive right answers boosts my spell damage. The style should be atmospheric Gothic fantasy pixel art with parchment-style UI and magical particle effects."
>         Intro: Cast spell cards by answering trivia correctly. Chain combos for bonus damage.正确答题释放魔法卡牌，连续答对触发魔力共振连击。
>       
>       
>         ▶&nbsp;&nbsp;Live Demo
>         &nbsp;&nbsp;·&nbsp;&nbsp;
>         ↓&nbsp;&nbsp;Source
>       
>       
>     
>   
>   
>     
>       K.O.F: Celestial Showdown
>       
>       
>       
>         Prompt: "Make a local 2-player quiz fighting game that looks and feels like a classic 90s SNK retro arcade fighter (like The King of Fighters). Instead of punching, players fight by racing to hit a 'Buzzer Key' to answer physics questions. If you answer fast and correctly, you deal damage; if you're wrong, you take self-damage. The setting is a grand fighting tournament stage located in a majestic 'Heavenly Court' (Chinese celestial realm), complete with ancient jade gates, floating auspicious clouds, and golden traditional motifs. Include dramatic health bars, screen shake on hits, and a 'K.O.' sequence. Visuals should be highly detailed 16-bit pixel art, typical of 90s arcade cabinets."
>         Intro: Two players race to buzz in and answer physics questions. Right answers deal damage; wrong answers backfire.双人抢答物理题，答对造成伤害，答错反噬自身。
>       
>       
>         ▶&nbsp;&nbsp;Live Demo
>         &nbsp;&nbsp;·&nbsp;&nbsp;
>         ↓&nbsp;&nbsp;Source
>       
>       
>     
>     
>       Hajimi Defense: The Tuna Crisis
>       
>       
>       
>         Prompt: "Make a hilarious tower defense game called 'Hajimi Defense' where cute cats defend a 'Golden Tuna Can' from an invasion of household pests (Cucumbers and Vacuums). The towers should be funny cat memes: a spitting Tabby, a sniper Siamese, and a fat orange cat that throws buns for AOE damage. Include a mechanic where players can click to break obstacles (like boxes) to free up building space. The art style should be hand-drawn, pastel, and super cute (Kawaii)."
>         Intro: Deploy cat towers to defend the Golden Tuna Can from waves of household invaders.部署猫猫炮塔，保卫金枪鱼罐头抵御入侵者。
>       
>       
>         ▶&nbsp;&nbsp;Live Demo
>         &nbsp;&nbsp;·&nbsp;&nbsp;
>         ↓&nbsp;&nbsp;Source
>       
>       
>     
>   
>   
>     
>       StarWars: Mandalorian Protocol
>       
>       
>       
>         Prompt: "Create a high-intensity top-down action RPG shooter set in the Star Wars universe. Play as The Mandalorian fighting through an Imperial Base to rescue Grogu. The gameplay should be a Twin-Stick Shooter style where I can use a Blaster (ranged), a Beskar Spear (melee), and a Jetpack Dash to dodge. Include Stormtrooper enemies and a tactical depth system where characters can walk behind crates and walls. The visuals should be metallic sci-fi pixel art."
>         Intro: Fight through the Imperial Base as the Mandalorian. Shoot, slash, and dash to rescue Grogu.扮演曼达洛人突入帝国基地，射击、喷射闪避，营救古古。
>       
>       
>         ▶&nbsp;&nbsp;Live Demo
>         &nbsp;&nbsp;·&nbsp;&nbsp;
>         ↓&nbsp;&nbsp;Source
>       
>       
>     
>     
>       Squid Game: Red Light, Green Light
>       
>       
>       
>         Prompt: "Recreate the intense 'Red Light, Green Light' scene from Squid Game as a survival reflex game. The player controls a character in a green tracksuit running across a sandy field towards a finish line. There is a Giant Robot Doll on the right; when she sings, we run; when she turns her head, we must stop instantly or get shot. Crucial visual detail: Dead bodies and blood pools should NOT disappear, they must pile up on the field to create a chaotic atmosphere. Use a gritty, realistic 16-bit pixel art style."
>         Intro: Run when she sings, freeze when she turns. One wrong move and you're eliminated.她唱歌时跑，她转头时定住。一步走错，当场淘汰。
>       
>       
>         ▶&nbsp;&nbsp;Live Demo
>         &nbsp;&nbsp;·&nbsp;&nbsp;
>         ↓&nbsp;&nbsp;Source
>       
>       
>     
>   
> 
> **To run a demo locally:**
> 
> ```bash
> unzip demo_*.zip && cd demo_*
> npm install
> npm run dev   # opens at http://localhost:5173
> ```
> 
> 
> ## Configuration
> 
> OpenGame can be configured via `settings.json`, environment variables, and CLI flags.
> 
> - **User settings**: `~/.qwen/settings.json`
> - **Project settings**: `.qwen/settings.json`
> 
> > The on-disk settings directory is currently still named `.qwen` for backward compatibility with the upstream agent runtime. We plan to migrate this to `.opengame` in a future release.
> 
> 
> ## Abstract
> 
> > Game development sits at the intersection of creative design and intricate software engineering, demanding the joint orchestration of game engines, real-time loops, and tightly coupled state across many files. While Large Language Models (LLMs) and code agents now solve isolated programming tasks with ease, they consistently stumble when asked to produce a fully playable game from a high-level design, collapsing under cross-file inconsistencies, broken scene wiring, and logical incoherence. We bridge this gap with **OpenGame**, the first open-source agentic framework explicitly designed for end-to-end web game creation. At its core lies **Game Skill**, a reusable, evolving capability composed of a *Template Skill* that grows a library of project skeletons from experience and a *Debug Skill* that maintains a living protocol of verified fixes—together enabling the agent to scaffold stable architectures and systematically repair integration errors rather than patch isolated syntax bugs. Powering this framework is **GameCoder-27B**, a code LLM specialized for game engine mastery through a three-stage pipeline of continual pre-training, supervised fine-tuning, and execution-grounded reinforcement learning. Since verifying interactive playability is fundamentally harder than checking static code, we further introduce **OpenGame-Bench**, an evaluation pipeline t

## 延伸閱讀

相關概念：[[遊戲開發]] · [[自動化]] · [[強化學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[facebookresearch--HyperAgents|facebookresearch/HyperAgents]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/leigest519/OpenGame)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲開發" AND file.name != "leigest519--OpenGame"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "leigest519--OpenGame"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "leigest519--OpenGame" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "leigest519--OpenGame"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲開發","自動化","強化學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "leigest519--OpenGame" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/leigest519--OpenGame");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "leigest519--OpenGame" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "leigest519" AND file.name != "leigest519--OpenGame"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/leigest519--OpenGame");
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
> const me = dv.page("Repos/leigest519--OpenGame");
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
> const me = dv.page("Repos/leigest519--OpenGame");
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
> const me = dv.page("Repos/leigest519--OpenGame");
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
> const me = dv.page("Repos/leigest519--OpenGame");
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

> **2026-04-26** — 首次收錄
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

- [[2026-04-27|2026-04-27]] — 再次上榜，1.3k stars
- [[2026-04-26|2026-04-26]] — 首次收錄，1.1k stars
