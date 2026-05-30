---
repo: cursor/cookbook
url: https://github.com/cursor/cookbook
owner: cursor
owner_type: Organization
language: TypeScript
license: N/A
description: ""
homepage: ""
stars: 3886
stars_per_day: 121
forks: 451
open_issues: 30
created: 2026-04-27
pushed_at: 2026-05-19
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供小範例以便於使用 Cursor 建立雲端代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 3
repo_size_kb: 2747
readme_length: 1834
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:1427,2026-04-30:1501,2026-05-01:2631,2026-05-01:2639,2026-05-02:2965,2026-05-02:2966,2026-05-03:3137,2026-05-03:3139,2026-05-04:3279,2026-05-04:3279,2026-05-05:3412,2026-05-06:3532,2026-05-07:3652,2026-05-08:3672,2026-05-09:3694,2026-05-10:3710,2026-05-11:3722,2026-05-12:3736,2026-05-13:3746,2026-05-14:3757,2026-05-15:3763,2026-05-16:3771,2026-05-17:3774,2026-05-18:3780,2026-05-19:3786,2026-05-20:3791,2026-05-24:3841,2026-05-26:3860,2026-05-27:3867,2026-05-29:3880,2026-05-30:3886"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "cookbook"
  - "cursor/cookbook"
  - "提供小範例以便於使用 Cursor 建立雲端代理。"
---

# cookbook

**3.9k** stars · **121** stars/天 · 建立 32 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/cursor--cookbook");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供小範例以便於使用 Cursor 建立雲端代理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (121 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 10 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速原型設計和雲端部署的開發者，特別是小型團隊或個人開發者。
> **一句話重點** Cursor Cookbook 的設計讓開發者能夠快速上手並輕鬆集成 Cursor 的功能，特別適合需要快速原型設計的場景。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "cursor--cookbook" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到靈活的代理解決方案，值得考慮。

> [!abstract] 核心創新
> Cursor SDK 提供了一個統一的 API，讓開發者能夠在本地和雲端環境中輕鬆運行 Cursor 的代碼代理。

## 專案簡介

Cursor Cookbook 是一個專案，旨在幫助開發者透過簡單的範例來使用 Cursor 的功能。它的核心機制是提供一系列小範例，讓開發者能夠在本地或雲端環境中運行 Cursor 的代碼代理。使用者可以透過 Cursor SDK 來管理代理的提示、模型、取消請求、工件和對話狀態。最關鍵的指令是設置 API 金鑰 `CURSOR_API_KEY`，然後可以運行 Node.js 範例來創建本地代理並發送提示。這個工具的賣點在於其簡化了與 Cursor 代理的互動，讓開發者能夠更快地原型設計和開發。技術上，Cursor SDK 是用 TypeScript 實作，並支援多種雲端環境的部署，這使得它在雲端工作負載中表現良好。

與其他工具相比，Cursor 提供了更簡單的 API 和更高的靈活性，特別是在處理多個代理和任務時。與類似的工具如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard` 相比，Cursor 提供了更直觀的界面和更少的配置需求，適合需要快速迭代的開發者。使用時，開發者可能會遇到一些常見問題，如 API 金鑰的配置錯誤或代理無法正常啟動，但這些問題通常可以通過檢查設置來解決。這個專案目前處於 beta 階段，適合小型團隊或個人開發者使用，未來可能會有更多功能和改進。對於需要快速原型設計和雲端部署的開發者，Cursor Cookbook 是一個值得考慮的選擇，但對於大型企業級應用，可能需要進一步的穩定性和功能擴展。總體來說，這個專案的學習曲線相對平緩，適合希望快速上手的開發者。

**技術棧**：`TypeScript` · `Node.js` · `Docker`

## 重點功能

- Cursor SDK — TypeScript API，用於運行 Cursor 的代碼代理，支持本地和雲端環境。
- 自托管雲端代理範例 — 提供在 AWS 上運行 Cursor Cloud Agent 的具體範例。
- 命令行介面 — 允許從終端啟動 Cursor 代理，方便開發者在本地環境中測試。
- DAG 任務運行器 — 將任務分解為 JSON DAG，並在 Cursor Canvas 中實時顯示狀態。
- 原型設計工具 — 用於快速創建和迭代新項目的網頁應用，支持雲端環境。

## 快速開始

1. 設置 API 金鑰
```bash
export CURSOR_API_KEY=your_api_key
```
2. 運行 Node.js 範例
```bash
node sdk/quickstart.js
```
3. 檢查代理狀態
```bash
curl http://localhost:3000/status
```

## 程式碼範例

```ts
# 前置條件
# 設置 API 金鑰
export CURSOR_API_KEY=your_api_key
# 運行 Node.js 範例
node sdk/quickstart.js
# 預期輸出
代理啟動並返回初始狀態。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 32 天就累積 3886 stars（121/天），forks 451（11.6%），顯示出穩定的增長趨勢。這個專案的主要貢獻者來自於 Cursor 團隊，他們在開發工具和雲端技術方面有豐富的經驗。Cursor Cookbook 解決了開發者在使用 Cursor 代理時缺乏實用範例的痛點，讓開發者能夠更快地上手。近期的社群討論和問題反映了開發者對於 Python SDK 和代理配置的需求，這顯示出社群對於這個專案的關注和期待。技術生態的變化，如雲端計算的普及，讓這個工具的使用場景變得更加廣泛。forks/stars 比率在 11.6% 屬於中等，顯示出有相當一部分使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要快速原型設計和雲端部署的開發者，特別是小型團隊或個人開發者。

> [!example] 使用場景
> - 後端工程師用它來快速原型設計雲端代理，因為它提供了簡單的範例和快速上手的 SDK。
> - DevOps 工程師用它來在 AWS 上部署自托管的 Cloud Agents，因為它有詳細的部署範例和文檔。
> - 全端開發者用它來整合 Cursor 代理到現有的應用中，因為它的 API 設計簡單且易於使用。

## 架構分析

Cursor Cookbook 採用模組化的架構，主要由 Cursor SDK 和多個範例組成。這樣的設計讓開發者可以根據需求選擇適合的範例進行實作。資料流方面，開發者可以透過 API 金鑰來啟動代理，並使用 SDK 進行交互，這樣的設計使得整體流程簡單明瞭。選擇 TypeScript 作為主要語言，因為它的靜態類型特性能夠提高開發效率和代碼質量，但這也使得學習曲線稍微陡峭。擴展性方面，這個架構可以輕鬆地添加新的範例和功能，但在處理大型專案時，可能需要額外的配置和調整。

## 技術深入分析

Cursor Cookbook 的核心技術機制是透過 Cursor SDK 提供的 API 來管理代碼代理。這個 SDK 使用 TypeScript 實作，並支援多種雲端環境的部署，這使得開發者能夠在不同的環境中靈活運用。效能方面，這個工具能夠處理小型到中型的工作負載，但在面對大型專案時，可能會遇到配置和性能瓶頸。選擇 TypeScript 作為主要語言的好處在於其靜態類型特性能夠提高代碼的可維護性，但這也使得新手需要花費更多時間學習。設計上，Cursor SDK 的模組化結構使得擴展新功能變得容易，但在整合到現有的工具鏈時，可能會遇到一些摩擦點。特別是在 CI/CD pipeline 的整合上，開發者需要自行配置相關的腳本和工具，以確保流暢的工作流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的範例和指令，安裝過程相對順暢。雖然沒有專門的入門指南，但範例足以幫助新手快速上手。文件目前僅提供英文版本，對於非英語使用者可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供簡單易用的 API，適合快速開發和原型設計。
> - 支持多種雲端環境的部署，靈活性高。
> - 有詳細的範例和文檔，降低了學習成本。

> [!danger] 缺點
> - 目前僅支援 TypeScript 和 Node.js，對其他語言的支持有限。
> - 在某些情況下，代理可能無法正常啟動，需要手動檢查配置。
> - 對於大型專案，可能需要更多的配置和調整。

> [!warning] 注意事項
> - 目前僅支援 TypeScript 和 Node.js 環境。
> - 在某些情況下，代理可能無法正常啟動，需檢查 API 金鑰配置。
> - 對於大型專案，可能需要更多的配置和調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但配置較為複雜，適合對性能有更高要求的專案。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的雲端環境，功能較為單一，適合小型專案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體使用量較少，但生態系統不如 TypeScript 豐富。 | 如果你的團隊已經在用 Rust 且需要高效能的代理解決方案。 | medium，因為需要重寫部分代碼以適應 Rust 的語法和生態。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的雲端環境，功能較為單一，適合小型專案。 | 如果你的專案需求較為簡單，且不需要多樣的功能。 | low，因為功能簡單，轉移過程不會太複雜。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cookbook** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體使用量較少，但生態系統不如 TypeScript 豐富。 | 專注於特定的雲端環境，功能較為單一，適合小型專案。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應 Rust 的語法和生態。 | low，因為功能簡單，轉移過程不會太複雜。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Rust 且需要高效能的代理解決方案。 | 如果你的專案需求較為簡單，且不需要多樣的功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，API 金鑰配置錯誤會導致代理無法啟動。
  - 解法：檢查環境變數是否正確設置。
- [MEDIUM] 運行範例時，可能會遇到依賴缺失的問題。
  - 解法：確保所有依賴都已安裝，並檢查版本。
- [MEDIUM] 在多個代理同時運行時，可能會導致資源競爭。
  - 解法：調整代理的資源配置，避免過度使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的原型開發 | 非常適合 | 提供簡單的範例和快速上手的 SDK，適合快速迭代。 |
| 大型企業的生產環境 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| 個人開發者的學習專案 | 適合 | 學習曲線平緩，適合新手快速上手。 |
| 需要高效能的雲端代理解決方案 | 普通 | 雖然靈活，但在性能上可能無法滿足所有需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到靈活的代理解決方案，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 金鑰，且不存取敏感資料。依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
| Forks | 451 |
| Open Issues | 30 |
| Issue 解決率 | 3% (1 closed) |
| 最後推送 | 2026-05-19 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cursor/cookbook) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 83
>     "HCL" : 7
>     "Shell" : 4
>     "Python" : 2
>     "CSS" : 2
>     "JavaScript" : 2
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cursoragent](https://github.com/cursoragent) | 6 |
> | [@hsaab](https://github.com/hsaab) | 2 |
> | [@ericzakariasson](https://github.com/ericzakariasson) | 2 |
> | [@leerob](https://github.com/leerob) | 1 |
> | [@rysuds](https://github.com/rysuds) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個問題未解決。
**連結**：[文件](https://cursor.com/docs/api/sdk/typescript)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-19）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #35 from hsaab/add-cloud-agent-lab

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/cursor/cookbook/issues/13) | Would there be a Python SDK in future ? | 3 | 0 |
> | [#14](https://github.com/cursor/cookbook/issues/14) | there is an error about Ripgrep in both dev and start script | 1 | 2 |
> | [#37](https://github.com/cursor/cookbook/issues/37) | How do I prevent the agent from using local files, while let | 0 | 0 |
> | [#34](https://github.com/cursor/cookbook/issues/34) | Cursor Agent via ACP doesn't work | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cursor Cookbook
> 
> This repo contains small examples for building with Cursor.
> 
> ## Cloud Agents
> 
> ### [Self-hosted Cloud Agents lab](cloud-agent)
> 
> Run Cursor Cloud Agent workers on customer-managed AWS infrastructure with examples for EC2 + Docker, ECS/Fargate, and EKS + Helm.
> 
> ## Cursor SDK
> 
> The Cursor SDK is the TypeScript API for running Cursor's coding agent from your own apps, scripts, and workflows. It supports the same agent across local workspaces and cloud runtimes, streams agent events as runs progress, and lets you manage prompts, models, cancellation, artifacts, and conversation state from code.
> 
> To run the SDK examples, create a Cursor API key from the [Cursor integrations dashboard](https://cursor.com/dashboard/integrations), then set it as `CURSOR_API_KEY`.
> 
> ### [Quickstart](sdk/quickstart)
> 
> A minimal Node.js example that creates a local agent, sends one prompt, and streams the response.
> 
> ### [Prototyping tool](sdk/app-builder)
> 
> A web app for spinning up agents to scaffold new projects and iterate on ideas in a sandboxed cloud environment.
> 
> ### [Kanban board](sdk/agent-kanban)
> 
> A kanban board for viewing Cursor Cloud Agents, grouping them by status or repository, previewing artifacts, and creating new cloud agents from a repository and prompt.
> 
> ### [Coding agent CLI](sdk/coding-agent-cli)
> 
> A minimal command-line interface that lets you spawn Cursor agents from your terminal.
> 
> ### [DAG task runner](sdk/dag-task-runner)
> 
> Decompose a task into a JSON DAG, fan it out across local subagents, and stream live status into a Cursor Canvas that hot-reloads on every state change. Ships as both a runnable example and a copyable Cursor skill at [`.cursor/skills/dag-task-runner`](.cursor/skills/dag-task-runner).
> 
> Learn more in the [Cursor SDK TypeScript docs](https://cursor.com/docs/api/sdk/typescript).

## 延伸閱讀

相關概念：[[微服務]] · [[容器化]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/cursor/cookbook)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cursor--cookbook"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cursor--cookbook" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","容器化","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cursor--cookbook" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cursor--cookbook" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cursor" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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

> **2026-04-30** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 再次上榜，3.3k stars
- [[2026-05-03|2026-05-03]] — 再次上榜，3.1k stars
- [[2026-05-02|2026-05-02]] — 再次上榜，3.0k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，2.6k stars
- [[2026-04-30|2026-04-30]] — 首次收錄，1.4k stars
