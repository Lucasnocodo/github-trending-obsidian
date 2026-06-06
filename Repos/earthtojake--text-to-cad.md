---
repo: earthtojake/text-to-cad
url: https://github.com/earthtojake/text-to-cad
owner: earthtojake
owner_type: User
language: JavaScript
license: MIT
description: "A collection of agent skills for CAD, robotics and hardware design"
homepage: "https://www.cadskills.xyz"
stars: 5683
stars_per_day: 126
forks: 670
open_issues: 16
created: 2026-04-22
pushed_at: 2026-06-03
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "CAD 工具"
release_tag: "0.2.1"
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
contributor_count: 3
engagement: "medium"
issue_close_rate: 24
repo_size_kb: 76219
readme_length: 7916
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:952,2026-04-29:1094,2026-04-29:1095,2026-05-03:1279,2026-05-04:1481,2026-05-05:1869,2026-05-06:1963,2026-05-08:2132,2026-05-12:2420,2026-05-17:2912,2026-05-29:5159,2026-06-02:5443,2026-06-03:5518,2026-06-04:5558,2026-06-05:5620,2026-06-06:5683"
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

**5.7k** stars · **126** stars/天 · 建立 45 天前 · JavaScript · MIT

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

`0.2.1` `easy-install`

`3mf` `agents` `ai-agents` `build123d` `cad` `dxf` `glb` `mechanical-engineering` `opencascade` `robotics` `sdf` `srdf` `step` `stl` `stp` `text-to-cad` `urdf`

> [!summary] 一句話摘要
> 提供 CAD、機器人和硬體設計的代理技能庫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (126 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要快速生成和處理 CAD 模型的機械工程師和機器人開發者。
> **一句話重點** 這個專案讓 CAD 和機器人設計變得更容易，特別是對於不熟悉專業工具的開發者。

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
> **結論** 花 5 小時學習，10 小時整合，得到快速生成 CAD 模型的能力，值得嘗試。

> [!abstract] 核心創新
> 提供了一個集成的技能庫，專注於 CAD 和機器人設計的自動化生成。

## 專案簡介

這個專案提供了一個技能庫，專注於 CAD、機器人和硬體設計，讓開發者能夠通過簡單的指令生成、檢查和處理 CAD 及機器人描述檔案。用戶可以透過 `npx skills install earthtojake/text-to-cad` 安裝這個庫，並使用如 CAD、URDF、SDF 等技能，這些技能能夠從自然語言請求生成 CAD 模型，並支持多種輸出格式（如 STEP、STL、3MF）。這樣的設計使得用戶不需要深入了解 CAD 軟體的複雜性，能夠專注於設計本身。技術上，這個專案使用 JavaScript 和 Python，並且依賴於 Git LFS 來管理大型資產，這樣可以保持輕量的克隆。

相較於其他 CAD 工具，如 OpenSCAD 或 FreeCAD，這個專案的優勢在於它的自動化和簡化流程，特別適合需要快速原型設計的開發者。使用者可以利用這些技能進行快速的 CAD 模型生成，並且能夠在本地瀏覽器中預覽 CAD 和 G-code 文件。這個專案的社群活躍度良好，開發者能夠在 GitHub 上找到問題解決和功能擴展的支持。整體來說，這是一個適合中小型團隊或個人開發者的工具，尤其是那些需要快速生成 CAD 模型的使用者。

**技術棧**：`JavaScript` · `Python` · `Shell`

## 重點功能

- CAD 生成 — 從自然語言或圖像請求生成 CAD 模型，支持 STEP、STL、3MF 等多種格式。
- CAD 查看器 — 在本地瀏覽器中預覽 CAD、G-code 和機器人文件。
- URDF 生成 — 自動生成機器人結構文件，包含連接、關節和限制。
- SDF 模型創建 — 創建模擬器模型和世界，支持物理、傳感器和燈光。
- G-code 切片 — 將支持的網格文件切片為經過驗證的 FDM `.gcode` 文件。

## 快速開始

1. 安裝 CAD 技能庫
```bash
npx skills install earthtojake/text-to-cad
```
2. 使用 Codex 插件安裝
```bash
codex plugin marketplace add earthtojake/text-to-cad
```
3. 使用 Claude 插件安裝
```bash
claude plugin marketplace add earthtojake/text-to-cad
```

## 程式碼範例

```js
{
  "前置條件": "安裝了 text-to-cad 庫",
  "指令": "npx skills install earthtojake/text-to-cad",
  "預期輸出": "成功安裝 CAD 技能庫，並可以使用各種 CAD 生成技能。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 45 天內累積 5683 stars（126/天），forks 670（11.8%），顯示出穩定的增長趨勢。作者 earthtojake 之前在 CAD 和機器人領域有豐富的經驗，這個專案解決了傳統 CAD 軟體學習曲線陡峭的問題，讓開發者能夠更輕鬆地進行設計。近期的推廣活動和社群討論也可能促進了這個專案的曝光。技術上，這個工具利用了現代 JavaScript 和 Python 的優勢，讓開發者能夠快速集成到現有的工作流中。高達 11.8% 的 forks/stars 比率表明許多人在實際使用和修改這個專案，這是活躍社群的良好指標。

## 適合誰使用

**目標受眾**：需要快速生成和處理 CAD 模型的機械工程師和機器人開發者。

> [!example] 使用場景
> - 機械工程師用它來生成 CAD 模型，因為可以快速從自然語言描述生成設計，節省了大量手動建模時間。
> - 機器人開發者用它來創建 URDF 文件，因為這能簡化機器人結構的描述，並且自動化生成過程。
> - 設計師用它來檢查和預覽 CAD 文件，因為內建的 CAD 查看器能夠快速顯示設計，避免了使用繁瑣的 CAD 軟體。

## 架構分析

這個專案採用模組化的架構，將不同的技能分為獨立的模組，這樣可以讓用戶根據需要選擇安裝。資料流方面，使用者的請求會通過 CLI 工具進行處理，然後調用相應的技能模組來生成 CAD 模型或文件。這樣的設計使得擴展新的技能變得簡單，但也可能導致依賴管理的複雜性增加。選擇 JavaScript 和 Python 作為主要語言，能夠利用這兩種語言的生態系統和社群支持。整體架構的可擴展性良好，但在處理大型 CAD 文件時可能會遇到性能瓶頸。

## 技術深入分析

這個專案的核心技術機制是將 CAD 和機器人設計的技能模組化，讓用戶可以根據需求選擇安裝和使用。使用 JavaScript 和 Python 的組合，能夠在前端和後端之間實現良好的協作。效能方面，對於小型 CAD 文件的生成速度相對較快，但在處理大型文件時可能會出現延遲。選擇這兩種語言的好處是能夠利用廣泛的生態系統，但也可能帶來依賴管理的挑戰。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發請求的情況下。整合方面，這個專案能夠與主流的開發工具鏈良好配合，但在 CI/CD 流程中可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟和範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，對於新手友好，但目前僅有英文文件。

## 優缺點分析

> [!success] 優點
> - 快速生成 CAD 模型，節省設計時間。
> - 支持多種輸出格式，靈活性高。
> - 模組化設計，易於擴展和維護。

> [!danger] 缺點
> - 對於不熟悉 JavaScript 的用戶有學習曲線。
> - 部分功能依賴於外部工具，可能會增加整合複雜度。
> - 目前支持的 CAD 格式有限，對於某些用戶需求可能不夠。

> [!warning] 注意事項
> - 目前僅支持 STEP、STL、3MF 等格式，對於其他 CAD 格式的支持有限。
> - 需要 Node.js 環境，對於不熟悉 JavaScript 的用戶可能有學習曲線。
> - 部分技能可能需要額外的依賴安裝，增加了使用的複雜度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 CAD 生成能力，但更專注於遊戲開發中的資產生成。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於機器人設計，提供更細緻的機器人模型生成，但不支持 CAD 文件的直接生成。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多種代理技能，但在 CAD 和機器人設計方面的專業性不如本專案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenSCAD | 使用專門的腳本語言來描述 CAD 模型，提供更高的靈活性，但學習曲線較陡。 | 如果需要精細控制 CAD 模型的生成過程，並且不介意學習新的語言。 | medium，因為需要重新學習語言和轉換現有模型。 |
| FreeCAD | 提供圖形界面的 CAD 工具，適合視覺化設計，但不支持自動化生成。 | 如果需要一個功能全面的 CAD 工具，並且不需要自動化生成。 | low，因為可以直接使用現有的 CAD 文件。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **text-to-cad** | **OpenSCAD** | **FreeCAD** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用專門的腳本語言來描述 CAD 模型，提供更高的靈活性，但學習曲線較陡。 | 提供圖形界面的 CAD 工具，適合視覺化設計，但不支持自動化生成。 |
> | 遷移成本 | - | medium，因為需要重新學習語言和轉換現有模型。 | low，因為可以直接使用現有的 CAD 文件。 |
> | 適用場景 | 主要場景 | 如果需要精細控制 CAD 模型的生成過程，並且不介意學習新的 | 如果需要一個功能全面的 CAD 工具，並且不需要自動化生成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性項目，不建議用在生產環境的核心功能上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝過程可能會因依賴問題失敗
  - 解法：確保所有依賴都已正確安裝
- [MEDIUM] 生成大型 CAD 文件時可能會導致性能下降
  - 解法：分割文件或減少請求的複雜度

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊進行快速原型設計 | 非常適合 | 能夠快速生成 CAD 模型，適合快速迭代的工作流程。 |
| 大型企業的 CAD 部門 | 不適合 | 目前功能和性能可能無法滿足高需求的商業環境。 |
| 教育機構用於教學 | 適合 | 簡化的使用流程適合學生學習 CAD 基礎。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到快速生成 CAD 模型的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

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
| Forks | 670 |
| Open Issues | 16 |
| Issue 解決率 | 24% (5 closed) |
| 最後推送 | 2026-06-03 |
| 建立日期 | 2026-04-22 |
| 官方網站 | [Link](https://www.cadskills.xyz) |
| Repo 大小 | 74.4 MB |
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
> | [@earthtojake](https://github.com/earthtojake) | 90 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 5 |
> | [@arronzhang](https://github.com/arronzhang) | 2 |

**最新版本**：0.2.1 (2026-06-04)

> [!info]- Release Notes
> <!-- Release notes generated using configuration in .github/release.yml at 0.2.1 -->
> 
> ## What's Changed
> ### Other Changes
> * [codex] Use STEP hashes for artifact staleness by @earthtojake in https://github.com/earthtojake/text-to-cad/pull/37
> * [codex] Split implicit CAD runtime into implicitjs by @earthtojake in https://github.com/earthtojake/text-to-cad/pull/27
> * Install implicitjs dependencies during publish by @earthtojake in https://github.com/earthtojake/text-to-cad/pull/43
> * Release 0.2.1 by @earthtojake in https://github.com/earthtojake/text-to-cad/pull/44
> 
> 
> **Full Changelog**: https://github.com/earthtojake/text-to-cad/compare/0.2.0...0.2.1

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://www.cadskills.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31 ~ 2026-06-01）
> **活躍天數** 2 天 · **最新 commit** Publish 0.2.1 from develop to main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#48](https://github.com/earthtojake/text-to-cad/issues/48) | CAD Viewer: DXF LWPOLYLINE bulges throw 'Failed to load DXF  | 0 | 0 |

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
> | Skill       | Summary                                                                                                                                            | Source                                            |
> | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
> | CAD         | Creates and edits CAD models from plain-language or image requests, with STEP as the main output along with options to export to STL, 3MF and GLB. | [skills/cad](skills/cad/SKILL.md)                 |
> | CAD Viewer  | Shows local browser previews for CAD, G-code, and robot files.                                                                                     | [skills/cad-viewer](skills/cad-viewer/SKILL.md)   |
> | step.parts  | Finds off-the-shelf STEP parts like screws, bearings, motors, and connectors.                                                                      | [skills/step-parts](skills/step-parts/SKILL.md)   |
> | URDF        | Writes robot structure files with links, joints, limits, inertials, and meshes.                                                                    | [skills/urdf](skills/urdf/SKILL.md)               |
> | SRDF        | Adds MoveIt planning groups, end effectors, poses, and collision rules to a URDF.                                                                  | [skills/srdf](skills/srdf/SKILL.md)               |
> | SDF         | Creates simulator models and worlds with frames, physics, sensors, and lights.                                                                     | [skills/sdf](skills/sdf/SKILL.md)                 |
> | SendCutSend | Checks DXF and STEP files before upload to SendCutSend.                                                                                            | [skills/sendcutsend](skills/sendcutsend/SKILL.md) |
> | G-code      | Slices supported mesh files into validated, printer-profiled FDM `.gcode` with real slicer CLIs.                                                   | [skills/gcode](skills/gcode/SKILL.md)             |
> | Bambu Labs  | Dry-runs, uploads, and cautiously starts local Bambu Lab print jobs from validated `.gcode`.                                                       | [skills/bambu-labs](skills/bambu-labs/SKILL.md)   |
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
>       Create a flat planetary gear assembly with separate sun, planet, ring, carrier, and pin bodies. Use simplified trapezoidal teeth and place three planets around the sun on a 42 mm radius circle.
>       
>     
>   
> 
> ## 🛠️ Contributing
> 
> Development happens from the `develop` branch; open PRs against `develop`, not `main`.
> For local contribution workflow, skill linking, and validation guidance, see
> [CONTRIBUTING.md](CONTRIBUTING.md).

## 延伸閱讀

相關概念：[[CAD]] · [[機器人設計]] · [[自動化設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

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
> const concepts = ["CAD","機器人設計","自動化設計"];
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
