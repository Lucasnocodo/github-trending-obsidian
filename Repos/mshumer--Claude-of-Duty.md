---
repo: mshumer/Claude-of-Duty
url: https://github.com/mshumer/Claude-of-Duty
owner: mshumer
owner_type: User
language: JavaScript
license: MIT
description: "A Call of Duty-quality FPS in Three.js, built from a single prompt."
homepage: ""
stars: 1818
stars_per_day: 606
forks: 272
open_issues: 17
created: 2026-07-25
pushed_at: 2026-07-25
first_seen: 2026-07-27
week: "2026-W31"
month: "2026-07"
category: "遊戲"
subcategory: "第一人稱射擊"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-27
use_case: "在瀏覽器中構建的類 Call of Duty 的第一人稱射擊遊戲，完全依賴程序生成的資源。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 876
readme_length: 7071
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-27"
star_history: "2026-07-27:721,2026-07-28:1052,2026-07-29:1818"
tags:
  - github
  - "category/遊戲"
  - "lang/javascript"
  - easy_install
aliases:
  - "Claude-of-Duty"
  - "mshumer/Claude-of-Duty"
  - "在瀏覽器中構建的類 Call of Duty 的第一人稱射擊遊戲，完全依賴程序生成的資源。"
---

# Claude-of-Duty

**721** stars · **721** stars/天 · 建立 1 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/mshumer--Claude-of-Duty");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 在瀏覽器中構建的類 Call of Duty 的第一人稱射擊遊戲，完全依賴程序生成的資源。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (721 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對程序生成技術感興趣的獨立遊戲開發者和學生。
> **一句話重點** 這個專案展示了程序生成技術在遊戲開發中的潛力，但在視覺效果上仍有待改進。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "第一人稱射擊" && p.file.name !== "mshumer--Claude-of-Duty" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 第一人稱射擊 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到靈活的遊戲開發工具，值得嘗試。

> [!abstract] 核心創新
> 所有遊戲資源均由程序生成，無需任何預製資產。

## 專案簡介

Claude of Duty 是一款使用 Three.js 和 WebGL2 開發的第一人稱射擊遊戲，所有的資源（包括紋理、模型和音效）都是在加載時動態生成的，沒有使用任何預先製作的藝術資產。這意味著遊戲的每一個元素都是通過代碼生成，這不僅展示了程序生成技術的潛力，也使得遊戲在資源管理上非常輕量。核心指令包括 `npm run dev` 來啟動開發伺服器，並使用 WASD 鍵進行移動，LMB 開火，RMB 瞄準等。這種設計方式使得遊戲在資源使用上達到了極致，且能夠在不同的硬體上運行。技術上，這個專案使用了最新的 Three.js r180，並實現了多種高級圖形技術，如 HDR 管道、動態陰影和 GPU 粒子效果。與傳統的 FPS 遊戲相比，這個專案的獨特之處在於它完全依賴程序生成的資源，這使得它在資源使用上非常靈活，但也可能在視覺效果上有所妥協。

與其他 FPS 遊戲相比，如 Unreal Engine 或 Unity，這個專案的資源需求更低，但在視覺效果和物理模擬上可能不如這些成熟引擎。實際使用中，遊戲在高解析度下的幀率表現不穩定，經過優化後仍然只能達到 28-30 fps，這在競爭激烈的 FPS 環境中可能會影響遊戲體驗。這個專案目前處於早期階段，社群活躍度不高，開發者需要考慮到這一點。對於小型團隊或個人開發者來說，這是一個有趣的實驗，但在生產環境中使用時需謹慎。未來的發展方向可能會集中在進一步優化性能和增強視覺效果上。

**技術棧**：`Three.js 0.180.0` · `Vite 7.3.6` · `Playwright 1.61.1`

## 重點功能

- 完全程序生成的資源 — 所有紋理、模型和音效都是在加載時生成，無需任何預製資產。
- 高級圖形技術 — 實現 HDR 管道、動態陰影和 GPU 粒子效果，提升遊戲視覺效果。
- 自定義控制 — 支持 WASD 移動、鼠標瞄準、LMB 開火等多種控制方式，增強遊戲體驗。
- 性能優化工具 — 提供多種工具來測試和優化遊戲性能，如 `tools/profile.mjs` 進行幀率分析。
- 模組化架構 — 由 11 個子系統組成，便於擴展和維護，適合團隊合作開發。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 在瀏覽器中訪問
```bash
http://127.0.0.1:5173
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Node.js 和 npm",
  "指令": "npm run dev",
  "預期輸出": "啟動開發伺服器，並在瀏覽器中顯示遊戲畫面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 721 stars（721/天），forks 146（20.2%），這顯示出極高的興趣和參與度。作者 mshumer 以其創新的程序生成技術聞名，這個專案展示了他在遊戲開發領域的探索。這個專案解決了傳統遊戲開發中資源管理的痛點，提供了一種全新的方式來創建遊戲內容，這在現有的遊戲開發工具中並不常見。社群的反應也顯示出對於這種新技術的好奇和期待。

## 適合誰使用

**目標受眾**：對程序生成技術感興趣的獨立遊戲開發者和學生。

> [!example] 使用場景
> - 獨立遊戲開發者用它來快速原型化 FPS 遊戲，因為它不需要任何藝術資產，所有內容都可程序生成。
> - 學生用它來學習 Three.js 和 WebGL 的應用，因為這個專案展示了如何在瀏覽器中實現複雜的圖形效果。
> - 小型團隊用它來探索程序生成技術在遊戲開發中的應用，因為它提供了可擴展的架構和工具。
> - 遊戲設計師用它來測試新的遊戲機制，因為可以快速迭代和修改遊戲內容。

## 架構分析

這個專案採用模組化架構，將遊戲分為 11 個子系統，每個子系統負責不同的功能，如渲染、物理、AI 等。這種設計使得開發和維護變得更加靈活，便於團隊合作。資料流方面，所有資源在加載時動態生成，這意味著遊戲可以在不佔用大量存儲空間的情況下運行。選擇這種架構的代價在於，可能在視覺效果上有所妥協，因為程序生成的資源難以達到預製資產的質量。擴展性方面，這種架構能夠輕鬆添加新功能，但可能會因為子系統間的依賴而增加複雜性。

## 技術深入分析

Claude of Duty 的核心技術機制在於其完全依賴程序生成的資源，這使得遊戲在資源管理上非常靈活。使用了 Three.js 和 WebGL2，實現了多種高級圖形技術，如 HDR 管道和動態陰影，這些技術能夠在瀏覽器中提供接近現代遊戲的視覺效果。效能方面，經過優化後，遊戲的幀率從 12-17 fps 提升至 28-30 fps，這顯示出在性能優化上的努力。設計取捨方面，選擇程序生成資源的好處在於減少了對存儲的需求，但也導致了視覺效果上的妥協，特別是在細節和真實感上。技術風險方面，程序生成的資源可能在某些情況下無法達到預期的效果，這需要不斷的調整和優化。整合分析方面，這個專案的模組化架構使得與其他工具和框架的整合變得更加靈活，但也可能因為子系統間的依賴而增加複雜性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但可能對於新手來說仍有一定的學習曲線。缺乏多語言支持，可能會影響非英語使用者的體驗。

## 優缺點分析

> [!success] 優點
> - 完全程序生成的資源，無需存儲大量資產。
> - 模組化架構，便於團隊合作和功能擴展。
> - 高級圖形技術，能夠在瀏覽器中實現複雜的視覺效果。

> [!danger] 缺點
> - 在高解析度下的幀率表現不穩定。
> - 視覺效果可能不如使用預製資產的遊戲。
> - 社群活躍度不高，缺乏支持和更新。

> [!warning] 注意事項
> - 遊戲在高解析度下的幀率表現不穩定，經過優化後仍然只能達到 28-30 fps。
> - 沒有使用任何預製藝術資產，可能在視覺效果上有所妥協。
> - 社群活躍度不高，可能缺乏及時的支持和更新。
> - 目前的版本仍在開發中，存在許多未解決的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色精靈，與本專案的程序生成技術互補，但不專注於 FPS 遊戲。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基於 WebGL 的遊戲開發框架，功能更全面，但需要預製資產。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多人對戰遊戲，與本專案的單人模式不同，適合不同的遊戲設計需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用預製資產和更全面的功能，提供更高的視覺效果，但需要更多的存儲空間。 | 如果需要更高的視覺效果和完整的資源庫，則應選擇這個工具。 | medium，因為需要將資源從程序生成轉換為預製資產。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多人對戰遊戲，與本專案的單人模式不同，適合不同的遊戲設計需求。 | 如果你的遊戲設計重點在於多人互動，則應選擇這個工具。 | low，因為可以直接使用類似的技術堆疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Claude-of-Duty** | **boneyard** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用預製資產和更全面的功能，提供更高的視覺效果，但需要更多的存儲空間。 | 專注於多人對戰遊戲，與本專案的單人模式不同，適合不同的遊戲設計需求。 |
> | 遷移成本 | - | medium，因為需要將資源從程序生成轉換為預製資產。 | low，因為可以直接使用類似的技術堆疊。 |
> | 適用場景 | 主要場景 | 如果需要更高的視覺效果和完整的資源庫，則應選擇這個工具。 | 如果你的遊戲設計重點在於多人互動，則應選擇這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，不建議用在生產環境中。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高解析度下幀率不穩定，可能影響遊戲體驗。
  - 解法：降低解析度或關閉某些圖形效果以提高幀率。
- [MEDIUM] 程序生成的資源在某些情況下無法達到預期效果。
  - 解法：不斷調整生成參數以獲得更好的結果。
- [MEDIUM] 社群活躍度不高，可能缺乏及時的支持和更新。
  - 解法：自行探索和實驗，或尋找其他資源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型獨立遊戲開發團隊 | 非常適合 | 完全程序生成的資源使得開發過程靈活且省時。 |
| 學生學習 Three.js | 適合 | 提供了實際的代碼範例和應用場景。 |
| 大型商業遊戲開發 | 不適合 | 在視覺效果和性能上可能無法滿足商業需求。 |
| 遊戲設計師探索新技術 | 非常適合 | 提供了創新的程序生成技術，適合實驗和學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到靈活的遊戲開發工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Claude of Duty 最常與 Three.js 和 Vite 搭配使用，作為一個基於瀏覽器的遊戲開發框架。在使用 Vite 作為開發伺服器的情況下，可以輕鬆啟動和測試遊戲。與主流 CI 工具如 GitHub Actions 的整合也相對簡單，因為可以直接使用 npm 指令來執行測試和構建。最常見的整合問題是性能優化，特別是在高解析度下運行時，這需要開發者進行額外的調整。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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
| Forks | 146 |
| Open Issues | 12 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-25 |
| 建立日期 | 2026-07-25 |
| Repo 大小 | 876 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mshumer/Claude-of-Duty) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `three` `playwright` `pngjs` `vite`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mshumer](https://github.com/mshumer) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度不高，開發者需要考慮到這一點。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-25 ~ 2026-07-25）
> **活躍天數** 1 天 · **最新 commit** Add updates link to README

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude of Duty
> 
> Get updates [here](https://shumer.dev/newsletter).
> 
> A first-person shooter built in the browser with Three.js r180 and WebGL2. Roughly
> 55k lines across 11 subsystems, written by a fleet of AI agents under orchestration.
> 
> **There are no art assets.** Every texture, mesh, animation and sound is generated
> procedurally at load time from code. No models, no HDRIs, no image files, no audio
> files. The only runtime dependency is `three`.
> 
> ```bash
> npm install
> npm run dev          # http://127.0.0.1:5173
> ```
> 
> Click the canvas to lock the cursor. WASD move, mouse aim, LMB fire, RMB ADS,
> R reload, Shift sprint, Ctrl crouch, Space jump, Q/E lean, Esc release.
> 
> ## What's in it
> 
> | subsystem | what it does |
> |---|---|
> | `render` | HDR pipeline, cascaded shadow maps in a `sampler2DArray` with texel snapping and PCSS contact hardening, MRT depth/normal/velocity prepass, GTAO, TAA with YCoCg variance clipping, tile-dilated motion blur, Karis bloom pyramid, GPU EV100 metering, procedural 33³ grade LUT, AgX composite |
> | `materials` | GPU texture forge: 19 procedural surfaces (concrete, brick, plaster, asphalt, sand, rusted/painted/brushed metal, wood, fabric, burlap, glass…), periodic noise so everything tiles seamlessly, Sobel height→normal, parallax occlusion mapping, triplanar projection, curvature-driven edge wear |
> | `sky` | Atmospheric scattering, time of day, PMREM environment generation, volumetric fog and light shafts |
> | `world` | ~120×120 m market street: modular building kit with real wall thickness, enterable interiors, several hundred instanced props |
> | `physics` | Written from scratch, no library. Binned-SAH BVH (29k tris → 14k nodes in 22 ms, 0.25 µs/raycast), swept-capsule character controller with a 5-plane crease stack, impulse rigid bodies with CCD, PBD ragdolls, multi-layer bullet penetration |
> | `player` | Movement state machine, slide/mantle/lean, camera feel |
> | `weapons` | Procedural weapon geometry, viewmodel rig, ADS, spring recoil, procedural reloads, ballistics with travel time and drop |
> | `fx` | GPU particles, decals, tracers, muzzle flash, explosions |
> | `ai` | Skinned soldiers, navmesh pathing, perception, cover behaviour, ragdoll death |
> | `ui` | DOM/CSS HUD: crosshair, hitmarkers, minimap, compass, killfeed |
> | `audio` | Web Audio synthesis — no sound files. Layered weapon fire, convolution reverb, HRTF spatialisation, occlusion |
> 
> `ARCHITECTURE.md` is the contract the agents worked against: subsystem interface,
> directory ownership, the cross-subsystem event vocabulary, and shared surface types.
> 
> ## Tooling
> 
> The interesting part of this repo is arguably the harness, not the game.
> 
> | tool | purpose |
> |---|---|
> | `tools/capture.mjs` | Screenshot one named shot via GPU-backed headless Chromium |
> | `tools/shotset.mjs` | All 11 shots in one session — fast review set |
> | `tools/baseline.mjs` | **Reproducible** capture: each shot in an isolated page, fixed frame budget. Bit-identical across runs |
> | `tools/imagediff.mjs` | Per-pixel gate. Exits non-zero if any pixel moved |
> | `tools/profile.mjs` | Gameplay profiler at real device pixel ratio. Frame-time *distribution* and hitch attribution via per-frame WebGL program counts |
> | `tools/playtest.mjs` | Scripted movement/fire smoke test |
> 
> Two findings worth recording, because both invalidated earlier measurements:
> 
> **Median frame time hides the actual problem.** A static-camera benchmark reported
> 94 fps while the game was unplayable. Real gameplay at Retina DPR (internal 3.34 MP,
> not 2.07) ran 12–17 fps with **728–1236 ms stalls** caused by 34+ WebGL programs
> compiling lazily mid-frame. `profile.mjs` reports p50/p95/p99 and attributes each
> hitch, which is what surfaced it.
> 
> **Captures were not reproducible.** `shotset.mjs` reuses one page across all 11
> shots, so particle age, decal buffers and exposure state leak forward — two identical
> runs differed on 10 of 11 shots. `baseline.mjs` isolates each shot in a fresh page,
> which is bit-identical and is what makes `imagediff.mjs` a usable gate.
> 
> ## Performance
> 
> Measured on an Apple silicon laptop at 1512×982, DPR 2 (3.34 MP internal), `ultra` preset,
> 3 runs, gameplay in motion with AI and firing active:
> 
> | | before optimization | after |
> |---|---|---|
> | fps p50 | 12–17 | **28–30** |
> | fps p99 | 4–9 | **14–17** |
> | worst frame | 728–1236 ms | **66–82 ms** |
> | shader compiles during play | 34–35 | **0** |
> | boot | ~9–12 s | **3.7–4.6 s** |
> 
> The optimization pass was constrained to produce **zero visual change**, enforced by
> `imagediff.mjs` rather than by assertion — the shipped build is bit-identical to its
> pre-optimization reference across all 11 shots.
> 
> Shader pre-warm (`src/core/prewarm.js`) is what removed the stalls. Making it
> *provably* pixel-neutral required first fixing subsystems that animated off
> `performance.now()` instead of the engine clock, since any change to boot duration
> otherwise shifted output.
> 
> ## Honest assessment
> 
> The goal was to match a modern Call of Duty. **It does not.**
> 
> Eleven independent adversarial critics scored the frames against that bar. Scores
> went 3.59 → 4.14 → 4.05 → **5.05** out of 10. Two shots reached "CLOSE"; the rest
> remain "AMATEUR". In a blind A/B, **every critic in every round picked the real Call
> of Duty frame.**
> 
> Where it falls short, specifically:
> 
> - **Hands.** Blocky finger slabs that don't convincingly grip the weapon.
> - **Material richness.** Surfaces read as procedural noise rather than photographed
>   reality at close range — the ceiling of generating texture from code.
> - **Characters.** Enemies read as mannequins at distance.
> - **Indirect light.** An approximation, not real GI.
> - **Frame rate.** 28–30 fps at Retina. The art passes tripled geometry cost
>   (5.9M → 11.3M triangles) and optimization recovered about half.
> 
> A known root cause remains unfixed: the viewmodel light rig in `render/index.js`
> delivers roughly 20× the irradiance per unit albedo that the world does — a plain
> *black* material in the view scene renders at L=110 against a background of 91,
> purely from F0=0.04. Every weapon albedo is cheated to a third of physical to
> compensate, which caps material separation on the most-looked-at object in the game.
> 
> ## Process note
> 
> Sequential single-owner passes beat parallel fan-out decisively. Three rounds of six
> agents each owning one directory moved the score +0.46 and left frame-ruining defects
> *higher* than they started (60 → 47 → 66), because tonemapping, sky and indirect light
> are one coupled system and isolated agents kept breaking each other's assumptions.
> One sequential pass with a single owner per coupled concern moved it +1.00 and cut
> defects 66 → 26.
> 
> The most valuable single result came from an agent contradicting its own brief. Every
> critic for three rounds reported the weapon as "untextured". It wasn't — it was
> specular-dominated, with the diffuse term measured at L=26 against a shipped L=67.
> Prior rounds had been crushing albedos to fight bright-part complaints, which killed
> diffuse and made it worse. The fix was the opposite of what was asked for.

## 延伸閱讀

相關概念：[[程序生成]] · [[WebGL]] · [[Three.js]] · [[遊戲開發]] · [[性能優化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[ammaarreshi--Generals-Mac-iOS-iPad|ammaarreshi/Generals-Mac-iOS-iPad]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]]

[GitHub](https://github.com/mshumer/Claude-of-Duty)

## 相關收錄

> [!note]- 直接競品（同子分類：第一人稱射擊）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "第一人稱射擊" AND file.name != "mshumer--Claude-of-Duty"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "mshumer--Claude-of-Duty"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "mshumer--Claude-of-Duty" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "mshumer--Claude-of-Duty"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["程序生成","WebGL","Three.js","遊戲開發","性能優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mshumer--Claude-of-Duty" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mshumer--Claude-of-Duty" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mshumer" AND file.name != "mshumer--Claude-of-Duty"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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
> const me = dv.page("Repos/mshumer--Claude-of-Duty");
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

> **2026-07-27** — 首次收錄
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

- [[2026-07-29|2026-07-29]] — 再次上榜，1.8k stars
- [[2026-07-28|2026-07-28]] — 再次上榜，1.1k stars
- [[2026-07-27|2026-07-27]] — 首次收錄，721 stars
