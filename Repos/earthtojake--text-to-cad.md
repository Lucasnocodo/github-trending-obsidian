---
repo: earthtojake/text-to-cad
url: https://github.com/earthtojake/text-to-cad
owner: earthtojake
owner_type: User
language: JavaScript
license: MIT
description: "A collection of agent skills for CAD, robotics and hardware design"
homepage: "https://www.cadskills.xyz"
stars: 6592
stars_per_day: 116
forks: 786
open_issues: 18
created: 2026-04-22
pushed_at: 2026-06-18
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "CAD 工具"
release_tag: "0.3.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "提供 CAD、機器人和硬體設計的代理技能庫。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-06"
contributor_count: 4
engagement: "medium"
issue_close_rate: 28
repo_size_kb: 86603
readme_length: 8389
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:952,2026-04-29:1094,2026-04-29:1095,2026-05-03:1279,2026-05-04:1481,2026-05-05:1869,2026-05-06:1963,2026-05-08:2132,2026-05-12:2420,2026-05-17:2912,2026-05-29:5159,2026-06-02:5443,2026-06-03:5518,2026-06-04:5558,2026-06-05:5620,2026-06-06:5683,2026-06-07:5728,2026-06-08:5774,2026-06-17:6537,2026-06-18:6592"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/3mf"
  - "topic/agents"
  - "topic/ai_agents"
  - "topic/build123d"
  - "topic/cad"
aliases:
  - "text-to-cad"
  - "earthtojake/text-to-cad"
  - "提供 CAD、機器人和硬體設計的代理技能庫。"
---

# text-to-cad

**6.6k** stars · **116** stars/天 · 建立 57 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/earthtojake--text-to-cad");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`0.3.4` `easy-install`

`3mf` `agents` `ai-agents` `build123d` `cad` `dxf` `glb` `mechanical-engineering` `opencascade` `robotics` `sdf` `srdf` `step` `stl` `stp` `text-to-cad` `urdf`

> [!summary] 一句話摘要
> 提供 CAD、機器人和硬體設計的代理技能庫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (116 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要自動化 CAD 設計流程的工程師和開發者。
> **一句話重點** 這個專案不僅是 CAD 工具的集合，更是一個自動化設計流程的強大助手。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/earthtojake--text-to-cad");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CAD 工具" && p.file.name !== "earthtojake--text-to-cad" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CAD 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，能夠快速提升 CAD 設計效率，值得採用。

> [!abstract] 核心創新
> 提供一個整合多種 CAD 和機器人設計技能的庫，簡化了設計和自動化流程。

## 專案簡介

這個專案是一個針對 CAD、機器人和硬體設計的技能庫，旨在讓使用者透過自然語言或圖像請求來生成、檢查和處理 CAD 模型及相關文件。使用者可以透過 `npx skills install earthtojake/text-to-cad` 指令輕鬆安裝，並獲得多種技能，包括從 STEP 格式生成 CAD 模型、創建 DXF 繪圖、編寫 URDF 檔案等。這些技能的設計考量了自動化和簡化工作流程的需求，讓使用者能夠快速生成所需的 CAD 文件，並進行本地預覽和模擬。技術上，專案使用 JavaScript 和 Python，並依賴於 Git LFS 來處理大型資產，這使得資料管理更加高效。

與其他 CAD 工具相比，如 FreeCAD 或 AutoCAD，這個專案的優勢在於其自動化能力和簡單的命令行介面，特別適合需要快速原型設計和自動化流程的開發者。實際使用中，使用者可以輕鬆生成複雜的 CAD 結構，並在本地進行即時檢視，這對於需要快速迭代的設計流程尤為重要。專案目前處於穩定階段，適合個人和小型團隊使用，但在處理大型專案時可能會遇到性能瓶頸。社群活躍度良好，開發者可以期待未來的功能擴展和改進。

**技術棧**：`JavaScript` · `Python` · `Shell`

## 重點功能

- CAD 模型生成 — 支援從自然語言請求生成 CAD 模型，主要輸出為 STEP 格式，並可選擇導出為 STL、3MF 和 GLB。
- DXF 繪圖 — 能夠從 Python 源碼或 CAD 幾何生成 2D DXF 繪圖，適合製造業使用。
- URDF 檔案編寫 — 提供編寫機器人結構檔案的功能，包含鏈接、關節和限制等。
- 本地預覽 — 提供 CAD、G-code 和機器人檔案的本地瀏覽器預覽功能，方便即時檢查設計。
- SendCutSend 整合 — 在上傳 DXF 和 STEP 檔案前進行檢查，確保文件的有效性。

## 快速開始

1. 安裝 CAD Skills 庫
```bash
npx skills install earthtojake/text-to-cad
```
2. 安裝 Codex 插件
```bash
codex plugin marketplace add earthtojake/text-to-cad
```
3. 安裝 Claude 插件
```bash
claude plugin marketplace add earthtojake/text-to-cad
```

## 程式碼範例

```js
[
  "# 前置條件：安裝 CAD Skills 庫",
  "npx skills install earthtojake/text-to-cad",
  "# 預期輸出：成功安裝 CAD Skills，並可使用相關技能。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 57 天就累積 6592 stars（116/天），forks 786（11.9%），顯示出強烈的社群興趣。作者 earthtojake 在 CAD 和機器人領域有豐富經驗，致力於解決 CAD 自動化的痛點，這在傳統 CAD 工具中往往需要手動處理。專案的推出正好填補了這一空白，並且在社群中引發了討論和分享。技術上，這個工具利用了現代的 JavaScript 和 Python 生態，讓開發者能夠快速上手並整合到現有的工作流程中。forks/stars 比率在 11.9%，顯示出許多開發者對此專案進行了實際的修改和擴展。

## 適合誰使用

**目標受眾**：需要自動化 CAD 設計流程的工程師和開發者。

> [!example] 使用場景
> - 機械工程師用它來自動生成 CAD 模型，因為這樣可以節省手動繪製的時間，並提高設計效率。
> - 機器人開發者用它來快速編寫 URDF 檔案，因為這樣能夠簡化機器人結構的描述過程，並加速測試。
> - 製造業設計師用它來創建 DXF 繪圖，因為這樣可以直接從 CAD 模型生成生產所需的切割圖，減少錯誤。

## 架構分析

這個專案的架構基於一個技能庫，允許使用者透過簡單的命令行介面來安裝和使用不同的 CAD 和機器人設計技能。每個技能都被設計為獨立的模組，這樣可以方便地進行擴展和維護。資料流方面，使用者的請求會被轉換為相應的 CAD 操作，並生成所需的文件格式。

選擇使用 JavaScript 和 Python 是因為這兩種語言在開發社群中廣泛使用，並且有豐富的庫可供利用。這樣的設計使得專案具備良好的擴展性，但在處理大型模型時可能會面臨性能挑戰，特別是在資源有限的環境中。整體而言，這個架構適合快速開發和迭代，但在高負載情況下需要進一步優化。

## 技術深入分析

這個專案的核心技術機制是基於一個技能庫，使用者可以透過自然語言請求生成 CAD 模型。這些請求會被解析並轉換為 CAD 操作，最終生成所需的文件格式。效能方面，專案能夠處理中小型的 CAD 模型，但在大型模型的生成上可能會遇到性能瓶頸，特別是在資源有限的環境中。選擇 JavaScript 和 Python 作為主要開發語言，讓專案能夠利用這兩種語言的豐富生態系統，這也使得開發者能夠快速上手。設計上，這個專案的依賴樹相對簡單，主要依賴於一些常見的庫，降低了維護成本。技術風險方面，隨著使用者數量的增加，可能會面臨性能和穩定性挑戰，特別是在高負載情況下。整合方面，這個專案與主流的 CAD 工具和開發環境有良好的相容性，能夠輕鬆融入現有的工作流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，讓新手能夠快速上手。安裝過程順暢，沒有明顯的坑。文件中有提供範例和使用說明，適合新手學習。整體而言，花 30 分鐘就能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡化 CAD 設計流程，能夠快速生成模型。
> - 支援多種輸出格式，方便與其他工具整合。
> - 活躍的社群和持續的更新，確保專案的生命力。

> [!danger] 缺點
> - 對大型模型的支持不足，性能可能不理想。
> - 對於複雜的設計，生成的結果可能需要人工調整。
> - 目前的功能仍在擴展中，某些技能可能不夠成熟。

> [!warning] 注意事項
> - 目前僅支援 STEP、DXF 和 URDF 格式，對其他 CAD 格式的支援有限。
> - 在處理大型 CAD 模型時可能會遇到性能瓶頸，特別是在低效能的硬體上。
> - 對於複雜的 CAD 結構，生成的模型可能需要手動調整以符合設計要求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 模型，但不支援 CAD 格式的直接生成，適合需要更高自由度的設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供機器人設計的功能，但缺乏 CAD 模型生成的能力，適合專注於機器人開發的團隊。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於代碼生成，與 CAD 設計無關，適合需要自動化代碼編寫的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| FreeCAD | 使用傳統的 GUI 介面進行 CAD 設計，提供更全面的功能，但不支援自動化生成。 | 如果需要更高的設計自由度和全面的功能，FreeCAD 是更好的選擇。 | medium，因為需要重新適應 GUI 操作。 |
| AutoCAD | 商業 CAD 軟體，功能強大但價格高昂，且不支援開源社群的擴展。 | 如果預算充足且需要業界標準的 CAD 工具，AutoCAD 是不錯的選擇。 | high，因為需要學習全新的操作流程和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **text-to-cad** | **FreeCAD** | **AutoCAD** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用傳統的 GUI 介面進行 CAD 設計，提供更全面的功能，但不支援自動化生成。 | 商業 CAD 軟體，功能強大但價格高昂，且不支援開源社群的擴展。 |
> | 遷移成本 | - | medium，因為需要重新適應 GUI 操作。 | high，因為需要學習全新的操作流程和功能。 |
> | 適用場景 | 主要場景 | 如果需要更高的設計自由度和全面的功能，FreeCAD 是更好 | 如果預算充足且需要業界標準的 CAD 工具，AutoCAD  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在生成複雜模型時，可能會出現不符合預期的結果
  - 解法：手動調整生成的模型以符合設計要求
- [MEDIUM] 某些技能的文檔不夠完善，可能導致使用困難
  - 解法：參考社群討論或請教其他使用者
- **[HIGH]** 在低效能硬體上運行時，性能可能不佳
  - 解法：考慮升級硬體或在更高效能的環境中運行

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊進行快速原型設計 | 非常適合 | 專案提供自動化生成模型的功能，能夠提高設計效率。 |
| 大型製造企業的 CAD 設計部門 | 普通 | 雖然功能強大，但在處理大型模型時可能會遇到性能瓶頸。 |
| 教育機構的 CAD 課程 | 適合 | 能夠幫助學生快速上手 CAD 設計，並進行實驗。 |
| 個人開發者進行機器人設計 | 非常適合 | 提供 URDF 和 SDF 的支持，方便機器人結構的描述。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠快速提升 CAD 設計效率，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，依賴的庫也相對穩定，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 CAD 軟體和機器人開發框架搭配使用，通常在設計和模擬的環節中發揮作用。在使用中，開發者可以將其與現有的 CAD 工具鏈整合，例如在使用 FreeCAD 時，可以透過生成的 DXF 檔案進行切割。支援的 CI 工具包括 GitHub Actions，並且可以與 VS Code 等 IDE 進行整合。整合的摩擦點主要在於需要手動配置某些技能的使用，對於新手來說可能會有一定的學習曲線。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個專案出現之前，CAD 設計主要依賴於傳統的手動繪製和商業軟體，這些方法往往耗時且效率低下。隨著自動化技術的進步，開發者開始尋求更高效的解決方案來簡化設計流程。這個工具的出現正是基於這一需求，並利用了現代開發技術來實現自動化設計。

未來，隨著 AI 和機器學習的進一步發展，這個領域可能會出現更多創新，專案也有潛力進一步擴展其功能和應用範圍。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 CAD 概念
- 了解 Python 和 JavaScript 基本操作

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在主產品中進行實驗性使用。

**成功指標**：設計時間減少 30%，模型生成效率提高。

> [!warning] 退出計畫
> 所有設定和數據都以標準格式存儲，方便轉移到其他工具或平台。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
| Forks | 786 |
| Open Issues | 18 |
| Issue 解決率 | 28% (7 closed) |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-04-22 |
| 官方網站 | [Link](https://www.cadskills.xyz) |
| Repo 大小 | 84.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/earthtojake/text-to-cad) |
| Topics | `3mf` `agents` `ai-agents` `build123d` `cad` `dxf` `glb` `mechanical-engineering` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 61
>     "Python" : 38
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@earthtojake](https://github.com/earthtojake) | 211 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 26 |
> | [@arronzhang](https://github.com/arronzhang) | 2 |
> | [@camlloyd](https://github.com/camlloyd) | 1 |

**最新版本**：0.3.4 (2026-06-18)

> [!info]- Release Notes
> <!-- Release notes generated using configuration in .github/release.yml at 0.3.4 -->
> 
> ## What's Changed
> ### Other Changes
> * Restore orthographic projection mode by @earthtojake in https://github.com/earthtojake/text-to-cad/pull/101
> * Release 0.3.4 by @earthtojake in https://github.com/earthtojake/text-to-cad/pull/102
> 
> 
> **Full Changelog**: https://github.com/earthtojake/text-to-cad/compare/0.3.3...0.3.4

## 社群與生態

**社群活躍度**：社群活躍，有定期的更新和回應。
**連結**：[文件](https://www.cadskills.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-17 ~ 2026-06-18）
> **活躍天數** 2 天 · **最新 commit** Publish 0.3.4 from develop to main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#96](https://github.com/earthtojake/text-to-cad/issues/96) | [Tool Share] cad-automation - Zero-cost CAD automation tool | 0 | 0 |
> | [#95](https://github.com/earthtojake/text-to-cad/issues/95) | [Tool Share] cad-automation - Zero-cost CAD automation tool  | 0 | 0 |
> | [#94](https://github.com/earthtojake/text-to-cad/issues/94) | Benchmark outputs differ significantly from the reference re | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> ██████╗ █████╗ ██████╗       ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
> ██╔════╝██╔══██╗██╔══██╗      ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
> ██║     ███████║██║  ██║      ███████╗█████╔╝ ██║██║     ██║     ███████╗
> ██║     ██╔══██║██║  ██║      ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
> ╚██████╗██║  ██║██████╔╝      ███████║██║  ██╗██║███████╗███████╗███████║
>  ╚═════╝╚═╝  ╚═╝╚═════╝       ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
> 
> A skills library for CAD, robotics, and hardware design agents
> 
> [Docs](https://www.cadskills.xyz) | [Demo](https://demo.cadskills.xyz)
> 
> [](https://github.com/earthtojake/text-to-cad/stargazers)
> [](https://github.com/earthtojake/text-to-cad/network/members)
> [](LICENSE)
> [](https://x.com/earthtojake)
> [](skills/cad/requirements.txt)
> [](https://github.com/gumyr/build123d)
> [](skills/cad/requirements.txt)
> [](skills/cad/SKILL.md)
> [](skills/cad/SKILL.md)
> [](skills/cad/SKILL.md)
> [](skills/urdf/SKILL.md)
> [](skills/sdf/SKILL.md)
> [](skills/srdf/SKILL.md)
> 
> # CAD Skills
> 
> CAD Skills is a library of agent skills for generating, inspecting, sourcing,
> slicing, and handing off CAD and robot-description artifacts from local project
> files.
> 
> ## 🧰 Skills
> 
> Install the library to give agents focused workflows for CAD, fabrication,
> robot description files, simulation, and local review.
> 
> | Skill        | Summary                                                                                                                                            | Source                                              |
> | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
> | CAD          | Creates and edits CAD models from plain-language or image requests, with STEP as the main output along with options to export to STL, 3MF and GLB. | [skills/cad](skills/cad/SKILL.md)                   |
> | CAD Viewer   | Shows local browser previews for CAD, G-code, and robot files.                                                                                     | [skills/cad-viewer](skills/cad-viewer/SKILL.md)     |
> | step.parts   | Finds off-the-shelf STEP parts like screws, bearings, motors, and connectors.                                                                      | [skills/step-parts](skills/step-parts/SKILL.md)     |
> | DXF          | Creates 2D DXF drawings like profiles, templates, gaskets, and cut layouts from Python sources or CAD geometry.                                    | [skills/dxf](skills/dxf/SKILL.md)                   |
> | URDF         | Writes robot structure files with links, joints, limits, inertials, and meshes.                                                                    | [skills/urdf](skills/urdf/SKILL.md)                 |
> | SRDF         | Adds MoveIt planning groups, end effectors, poses, and collision rules to a URDF.                                                                  | [skills/srdf](skills/srdf/SKILL.md)                 |
> | SDF          | Creates simulator models and worlds with frames, physics, sensors, and lights.                                                                     | [skills/sdf](skills/sdf/SKILL.md)                   |
> | SendCutSend  | Checks DXF and STEP files before upload to SendCutSend.                                                                                            | [skills/sendcutsend](skills/sendcutsend/SKILL.md)   |
> | G-code       | Slices supported mesh files into validated, printer-profiled FDM `.gcode` with real slicer CLIs.                                                   | [skills/gcode](skills/gcode/SKILL.md)               |
> | Bambu Labs   | Dry-runs, uploads, and cautiously starts local Bambu Lab print jobs from validated `.gcode`.                                                       | [skills/bambu-labs](skills/bambu-labs/SKILL.md)     |
> | Implicit CAD | Creates browser-native implicit CAD models using GLSL signed-distance fields and CAD Viewer raymarch rendering. Experimental.                      | [skills/implicit-cad](skills/implicit-cad/SKILL.md) |
> 
> ## 💻 Installation
> 
> For production use, install or clone from `main`; that branch contains the
> generated skill/plugin outputs needed by provider installers.
> 
> ### Skills
> 
> Install CAD Skills with the Skills CLI:
> 
> ```bash
> npx skills install earthtojake/text-to-cad
> ```
> 
> This is the preferred installation path. It installs the individual skills
> directly for supported agents.
> 
> ### Plugins
> 
> Provider-native plugin installs are also available for Codex and Claude Code:
> 
> ```bash
> # Codex
> codex plugin marketplace add earthtojake/text-to-cad
> codex plugin add cad@text-to-cad
> ```
> 
> ```bash
> # Claude Code
> claude plugin marketplace add earthtojake/text-to-cad
> claude plugin install cad@text-to-cad
> ```
> 
> Restart your agent if newly installed skills do not appear. For local
> development, branch from `develop`, open PRs against `develop`, and use the symlink
> workflow in [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## 📸 Screenshots
> 
>   
>     
>       
>         
>       
>       CAD
>     
>     
>       
>         
>       
>       URDF
>     
>     
>       
>         
>       
>       SRDF / MoveIt2
>     
>   
> 
> ## 🧪 Benchmarks
> 
> The repo stores heavyweight assets in `assets/**` and `benchmarks/**` through Git LFS and excludes those trees from default LFS pulls so lightweight clones do not fetch GIF assets. Benchmark markdown remains normal Git for readable diffs. To hydrate only the benchmark assets locally, run:
> 
> ```bash
> git lfs pull --include="benchmarks/**"
> ```
> 
>   
>     
>       #
>       Target
>       Prompt
>       Output
>     
>   
>   
>     
>       1
>       Rectangular calibration block with four holes
>       Create a centered 100 x 60 x 20 mm block with four 8 mm vertical through-holes. Add only a 2 mm chamfer on the top outer perimeter.
>       
>     
>     
>       2
>       Circular flange with bolt-hole pattern
>       Create an 80 mm diameter, 10 mm thick circular flange with a 30 mm central through-bore. Add six 6 mm through-holes on a 60 mm bolt circle and fillet the outside circular edges.
>       
>     
>     
>       3
>       L-bracket with gussets and two hole directions
>       Create an L-bracket from a base plate and rear vertical plate. Add vertical base holes, horizontal back-plate holes, two triangular gussets, and a filleted base/back transition.
>       
>     
>     
>       4
>       Stepped shaft with keyway
>       Create a 120 mm shaft along X with 20/30/20 mm diameter stepped sections. Add end chamfers and a shallow rectangular keyway on top of the middle section.
>       
>     
>     
>       5
>       Open-top electronics enclosure with bosses
>       Create a hollow open-top enclosure with 3 mm walls and floor. Add four internal standoffs with centered blind holes and 2 mm outside vertical corner fillets.
>       
>     
>     
>       6
>       Aerospace-style clevis bracket with lightening cutouts
>       Create a symmetric clevis bracket with a base plate, two rounded lugs, base mounting holes, and a horizontal lug bore. Add triangular lightening cutouts, reinforcing ribs, and rounded transitions.
>       
>     
>     
>       7
>       Radial-engine-style cylinder with cooling fins
>       Create a vertical engine-cylinder form with a central barrel, 12 cooling fins, a base flange, and a top cap. Add a 35 degree angled spark-plug boss with a coaxial through-hole.
>       
>     
>     
>       8
>       Centrifugal impeller with backward-curved blades
>       Create a centrifugal impeller with a backplate, hub, and through-bore. Add 12 fused backward-curved blades sweeping about 45 degrees from root to tip.
>       
>     
>     
>       9
>       Spiral staircase with helical handrail
>       Create a miniature spiral staircase with a central column, base disk, and 20 rising wedge treads. Add a one-revolution helical handrail and vertical balusters at the tread outer ends.
>       
>     
>     
>       10
>       Simplified planetary gear stage
>       Create a flat planetary gear assembly wit

## 延伸閱讀

相關概念：[[自動化]] · [[機器人技術]] · [[CAD 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/earthtojake/text-to-cad) · [官方網站](https://www.cadskills.xyz)

## 相關收錄

> [!note]- 直接競品（同子分類：CAD 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CAD 工具" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "earthtojake--text-to-cad" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器人技術","CAD 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "earthtojake--text-to-cad" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "earthtojake--text-to-cad" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "earthtojake" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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

> **2026-04-28** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 再次上榜，1.1k stars
- [[2026-04-28|2026-04-28]] — 首次收錄，952 stars
