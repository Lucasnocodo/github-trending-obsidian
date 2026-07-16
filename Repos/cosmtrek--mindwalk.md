---
repo: cosmtrek/mindwalk
url: https://github.com/cosmtrek/mindwalk
owner: cosmtrek
owner_type: User
language: Go
license: MIT
description: "A visualization tool that replays coding-agent sessions on a 3D map of your codebase."
homepage: ""
stars: 706
stars_per_day: 118
forks: 42
open_issues: 6
created: 2026-07-09
pushed_at: 2026-07-15
first_seen: 2026-07-16
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "可視化工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-16
use_case: "在 3D 地圖上重播編碼代理會話，讓你可視化代碼庫的操作過程。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-23"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2927
readme_length: 5979
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-16"
star_history: "2026-07-16:706"
tags:
  - github
  - "category/開發工具"
  - "lang/go"
  - easy_install
aliases:
  - "mindwalk"
  - "cosmtrek/mindwalk"
  - "在 3D 地圖上重播編碼代理會話，讓你可視化代碼庫的操作過程。"
---

# mindwalk

**706** stars · **118** stars/天 · 建立 6 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/cosmtrek--mindwalk");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 在 3D 地圖上重播編碼代理會話，讓你可視化代碼庫的操作過程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (118 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要深入分析編碼代理行為的開發者和研究人員。
> **一句話重點** mindwalk 讓代碼庫的操作過程變得可視化，讓開發者能夠更直觀地理解編碼代理的行為。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cosmtrek--mindwalk");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "可視化工具" && p.file.name !== "cosmtrek--mindwalk" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 可視化工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，2 小時整合，得到直觀的可視化效果，值得一試。

> [!abstract] 核心創新
> 透過 3D 地圖可視化編碼代理的行為，提供比傳統日誌更直觀的理解方式。

## 專案簡介

mindwalk 是一個可視化工具，透過 3D 地圖重播編碼代理的會話，幫助用戶理解代理如何處理任務。用戶可以透過輸入 session 日誌，該工具會將其轉換為可視化的地圖，顯示代理在代碼庫中的探索路徑和編輯行為。這樣的設計使得用戶能夠直觀地看到代理的行為模式，並且可以快速識別哪些文件被訪問過、編輯過或未訪問。使用者只需執行 `mindwalk serve` 指令，即可啟動本地伺服器並在瀏覽器中查看可視化結果。這種可視化方式比單純查看 JSONL 日誌更具洞察力，因為它提供了代理行為的上下文。工具的後端使用 Go 實現，前端則基於 React 和 Three.js，這樣的選擇使得整體架構輕量且高效。

mindwalk 的設計強調了數據的可比性，因為同一個代碼庫生成的地圖是確定性的，這樣可以方便地進行不同會話的比較。與其他工具相比，mindwalk 不僅提供了代碼的靜態視圖，還能動態展示代理的行為，這在處理複雜的代碼庫時尤其有用。這個工具的使用效果良好，但目前仍在 alpha 階段，可能會遇到一些未解決的問題，如 #2 和 #5 的功能需求。對於需要深入分析代理行為的開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需謹慎。未來幾個月，隨著功能的增強和社群的活躍，mindwalk 可能會成為一個更成熟的可視化解決方案。

**技術棧**：`Go 1.25` · `React` · `Three.js`

## 重點功能

- 3D 地圖可視化 — 將代碼庫以 3D 地圖的形式呈現，顯示代理的探索路徑。
- 多種視圖模式 — 提供樹狀圖和地形圖兩種視圖，讓用戶可以選擇最適合的方式來查看代碼結構。
- 會話回放 — 支持回放代理的行為，並在時間軸上標記重要事件，方便用戶快速定位。
- 本地運行 — 所有數據處理在本地進行，保證用戶數據的安全性，並且不會將數據發送到外部伺服器。
- 評估功能 — 允許用戶使用本地的代理 CLI 來評估會話的效果，並生成報告。

## 快速開始

1. 安裝 mindwalk
```bash
curl -fsSL https://raw.githubusercontent.com/cosmtrek/mindwalk/master/scripts/install.sh | sh
```
2. 將安裝路徑加入環境變數
```bash
export PATH="$HOME/.local/bin:$PATH"
```
3. 啟動 mindwalk 伺服器
```bash
mindwalk
```

## 程式碼範例

```go
[
  "# 前置條件：已安裝 mindwalk",
  "mindwalk serve [--port N] [--no-open] [--claude-dir DIR] [--codex-dir DIR]",
  "# 預期輸出：啟動本地伺服器並在瀏覽器中打開可視化界面"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 706 stars（118/天），forks 42（5.9%），顯示出良好的增長潛力。作者 cosmtrek 是一位活躍的開發者，過去有多個開源貢獻。mindwalk 解決了傳統日誌記錄無法提供上下文的痛點，讓開發者能夠更直觀地理解代理的行為。最近的推廣活動和社群討論也為其吸引了注意。隨著開源生態的發展，這類可視化工具的需求逐漸上升，特別是在代碼複雜度增加的情況下。forks/stars 比率在中等範圍，顯示出一些用戶正在實際修改和使用此工具。

## 適合誰使用

**目標受眾**：需要深入分析編碼代理行為的開發者和研究人員。

> [!example] 使用場景
> - 後端開發者用它來重播和分析代碼代理的行為，因為這能幫助他們理解代理在處理複雜任務時的思考過程。
> - DevOps 工程師用它來可視化 CI/CD 流程中的代碼變更，因為這樣能更快地識別問題和優化流程。
> - 研究人員用它來分析不同編碼代理的表現，因為這能提供更具體的數據支持他們的研究結論。

## 架構分析

mindwalk 採用單一 Go binary 作為後端伺服器，這樣的設計使得部署和運行變得簡單。前端使用 React 和 Three.js 來實現可視化，這樣的選擇提供了良好的性能和用戶體驗。數據流方面，會話日誌經過適配器轉換為標準化的事件流，然後生成可視化的城市地圖，這樣的架構使得不同格式的日誌都能被支持。

選擇 Go 作為後端語言使得整體應用的性能優越，但也可能導致開發者需要熟悉 Go 的生態系統。整體架構的擴展性良好，但在處理非常大的代碼庫時，可能會遇到性能瓶頸，特別是在生成城市地圖的過程中。這種設計的代價是需要額外的時間來處理和轉換數據，但最終的可視化效果是值得的。

## 技術深入分析

mindwalk 的核心技術機制是將編碼代理的會話日誌轉換為可視化的 3D 地圖，這一過程涉及到對 JSONL 日誌的解析和事件的標準化。使用 React 和 Three.js 來實現前端可視化，這使得用戶能夠在瀏覽器中流暢地查看代碼庫的操作過程。效能方面，該工具能夠處理中小型代碼庫，但在大型代碼庫中可能會遇到性能瓶頸，特別是在生成城市地圖時，可能需要較長的時間。設計上選擇 Go 作為後端語言，這使得整體應用的性能優越，但也要求開發者具備一定的 Go 知識。mindwalk 的依賴樹相對簡單，主要依賴於 Go 的標準庫和一些前端框架，這降低了使用的複雜度。技術風險方面，隨著用戶數據量的增加，可能會出現性能下降的問題，特別是在處理大量會話日誌時。整合方面，mindwalk 可以與現有的開發工具鏈相容，但在 CI/CD 流程中可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中包含了基本的使用說明，但缺乏更詳細的入門指南。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供直觀的可視化界面，幫助用戶理解代理行為。
> - 支持本地運行，保證數據安全性。
> - 多種視圖模式，滿足不同用戶需求。

> [!danger] 缺點
> - 仍在 alpha 階段，可能存在不穩定性。
> - 對於大型代碼庫的支持可能不夠理想。
> - 需要用戶手動設置評估功能，使用上略顯繁瑣。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，可能存在不穩定性。
> - 僅支援 Claude 和 Codex 的 session 日誌，對其他格式的支持有限。
> - 需要用戶手動設置評估功能，否則不會自動運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的可視化功能，但更專注於代理的行為模擬，而非實際的代碼庫可視化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼庫的靜態分析，而非動態的行為回放，適合不同的使用場景。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於 Codex 的接口調整，並不提供可視化功能，適合需要調整接口的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的行為模擬，提供不同的視覺化方式，但不支持代碼庫的 3D 地圖展示。 | 如果你的需求是模擬代理行為而非實際代碼庫的可視化，則可以選擇此工具。 | medium，因為需要重新適應不同的視覺化方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於靜態代碼分析，提供代碼質量檢查功能，與 mindwalk 的動態可視化形成對比。 | 如果你的重點在於代碼質量而非行為可視化，這個工具會更合適。 | low，因為主要功能不同，轉換成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mindwalk** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的行為模擬，提供不同的視覺化方式，但不支持代碼庫的 3D 地圖展示。 | 專注於靜態代碼分析，提供代碼質量檢查功能，與 mindwalk 的動態可視化形成對比。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的視覺化方式。 | low，因為主要功能不同，轉換成本不高。 |
> | 適用場景 | 主要場景 | 如果你的需求是模擬代理行為而非實際代碼庫的可視化，則可以選擇 | 如果你的重點在於代碼質量而非行為可視化，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型代碼庫中生成城市地圖時可能會遇到性能問題。
  - 解法：考慮將代碼庫拆分為更小的模組進行分析。
- [MEDIUM] 使用評估功能時，需手動設置，否則不會自動運行。
  - 解法：仔細閱讀文檔，確保正確配置。
- [MEDIUM] 在某些環境下，安裝過程可能會出現權限問題。
  - 解法：確保以適當的權限執行安裝指令。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊需要分析代碼代理行為 | 非常適合 | mindwalk 提供直觀的可視化，幫助小團隊快速理解代理行為。 |
| 大型企業的代碼庫分析 | 普通 | 在大型代碼庫中可能會遇到性能瓶頸，但仍可提供一定的可視化幫助。 |
| 學術研究需要分析編碼代理的行為 | 非常適合 | mindwalk 能夠提供詳細的行為記錄和可視化，適合研究用途。 |
| 需要即時監控代碼變更的 DevOps 團隊 | 不適合 | 該工具不專注於即時監控，可能不符合需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到直觀的可視化效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具在本地運行，不需要高權限，且不會存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cosmtrek--mindwalk");
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
> const me = dv.page("Repos/cosmtrek--mindwalk");
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
| Forks | 42 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-15 |
| 建立日期 | 2026-07-09 |
| Repo 大小 | 2.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cosmtrek/mindwalk) |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `module`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 52
>     "TypeScript" : 38
>     "CSS" : 8
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cosmtrek](https://github.com/cosmtrek) | 41 |
> | [@yearth](https://github.com/yearth) | 3 |
> | [@jinwik](https://github.com/jinwik) | 1 |
> | [@tcsenpai](https://github.com/tcsenpai) | 1 |

**最新版本**：v0.2.0 (2026-07-15)

> [!info]- Release Notes
> ## Changelog
> * f1a598c1a7eb2082007b14ddcc894462e8f7e226 fix: mark Codex spawn_agent calls as subagents (#9)
> * 0d863c1d78c38f1e83c8f690654dda6bf886022b ui: rework the transport deck layout
> * 2105a634548e36f84043297a4b46b59ba385987f docs: fix star history chart links in README
> * 3744eae3152183d91633ed7172e74e56b64842fb docs: add star history section to README
> * e689c6c954a4338364e6b2ce74f05e024ccea27d Single-trace evaluation: LLM judge, report panel, and a registry-driven dock (#7)
> * b88c4660f3e7c5ef3153adbc2dc674c54e220238 Merge pull request #8 from yearth/fix/codex-exec-apply-patch
> * 5572d190b24d264f53fbc86c7dcda41dc603fea1 fix: detect nested apply_patch in Codex exec events
> * 97a543c2272b38cb5b8ea9b1b067b21e8ac039cb docs: refresh the verify skill for the map and video-export features
> * 7da448b2fe9b68d0eb271382b46b6f7b8de70770 docs: change demo link in README
> * 4ea9d52ad086a2a7657e376a95569765c1dd9e46 docs: add MIT license
> * 9836950b82999aa05920ed6c8f85ec9519eaf21c feat: static full-repo map and client-side video export (#1)
> * e81cd802ca02884fd08cb6f16585725864816759 docs: embed hosted demo video as the README hero
> * 7a884c839df5172152d30375369d8aef1fc33453 docs: state the tagline as a direct tool definition
> * ed57be09113b1d026f2f0523ccdcf3b0b2356118 docs: mark Codex support as shipped in AGENTS.md
> * 29298b92ff8416355c5a4f4ae49cab40f9313f51 docs: restructure README as problem/idea/usage pitch

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://github.com/cosmtrek/mindwalk)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-14 ~ 2026-07-15）
> **活躍天數** 2 天 · **最新 commit** fix: drop removed Codex judge feature flag (#10)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/cosmtrek/mindwalk/issues/2) | Feature: Add git / fs adapter | 1 | 1 |
> | [#5](https://github.com/cosmtrek/mindwalk/issues/5) | Comparison mode needs a task outcome denominator | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> #  mindwalk
> 
> A visualization tool that replays coding-agent sessions on a 3D map of your codebase.
> 
> https://github.com/user-attachments/assets/20ecdc3b-9bc2-469b-ba99-607f3c1d5e0c
> 
> *The 30-second demo — sound on.*
> 
> ## The problem
> 
> A session log records what an agent did, but not how it understood the task:
> which parts of the repo it treated as relevant, where it explored before it
> acted, whether its footprint matched the scope you had in mind. Reading the
> raw JSONL line by line doesn't answer any of that.
> 
> ## The idea
> 
> Draw the repository as a night map, and play the session back as light moving
> through it: where the agent searched, read, and edited, the map glows —
> everything else stays dark. The agent's understanding of the task becomes a
> shape you can see at a glance. One Go binary reads Claude Code and Codex
> session logs, fully local; viewing sends nothing anywhere. The one exception
> is the optional session evaluation: when you explicitly run it, a summary of
> that session (task wording, file paths, event digests) is sent to the model
> behind your own `claude` or `codex` CLI — see
> [Session evaluation](#session-evaluation).
> 
> ## Quick start
> 
> ```sh
> curl -fsSL https://raw.githubusercontent.com/cosmtrek/mindwalk/master/scripts/install.sh | sh
> export PATH="$HOME/.local/bin:$PATH"
> mindwalk
> ```
> 
> The installer verifies the binary against `checksums.txt` and installs to
> `~/.local/bin` (override with `INSTALL_DIR`; pin a release with `VERSION`).
> Windows archives are on [GitHub Releases](https://github.com/cosmtrek/mindwalk/releases).
> To build from source: `make setup && make build` → `bin/mindwalk`.
> 
> With no arguments, mindwalk scans `~/.claude/projects` and `~/.codex/sessions`,
> serves the UI on a random local port, and opens a browser:
> 
> ```text
> mindwalk serve [--port N] [--no-open] [--claude-dir DIR] [--codex-dir DIR]
> mindwalk open [--no-open]    open one specific session
> mindwalk build  [-o out]              write the repository citymap JSON
> mindwalk trace  [-o out]           write the normalized trace JSON
> mindwalk analyze  [--judge claude|codex] [--model name]
>                                             evaluate one session (see below)
> ```
> 
> ## Reading the picture
> 
> - **Tree / Terrain views** — the repo as a radial tree or a treemap plain;
>   glow ∝ how deeply and how often a file was touched.
> - **Touch states** — each file keeps its deepest touch: seen (moss green),
>   read (moon white), edited (warm amber), unvisited (dark). The HUD folds
>   friction signals — error rate, churned files, edits after the last verify —
>   into a review strip.
> - **Playback deck** — scrub or play the session over a bucketed histogram of
>   the run. Bars sit on a cool/warm spectrum: observation stays cool (search,
>   read, exec), mutation glows warm (edit, verify), so editing phases jump out
>   at a glance.
> - **Timeline marks** — `◇` context compactions, `○` subagent launches,
>   `›` user turns; every mark is a click-to-jump target.
> - **Inspector** — click a file to pin its visit history; click a visit row to
>   jump the playhead to that moment.
> - **Evaluate** — ask a local agent CLI to judge the session's trajectory;
>   session rows carry the evaluation state as a quiet badge. See
>   [Session evaluation](#session-evaluation).
> 
> Keyboard: `Space` play/pause · `←`/`→` step (`⇧` ×10) · `Home`/`End` ends ·
> `S` speed · `E` next edit · `X` next error · `M` next mark · `⌘B` session rail.
> 
> ## Session evaluation
> 
> The evaluate panel (and `mindwalk analyze`) asks a local agent CLI to judge
> how the session went — exploration, scope, wandering, verification — with
> every finding anchored to timeline events you can click through to. Pick the
> judge (any installed CLI) and its model in the panel; the report records who
> actually judged.
> 
> **What leaves your machine, and only when you ask:** evaluation runs your own
> `claude` or `codex` CLI, which sends that session's summary — the user
> messages' wording, file paths, and one-line event digests — to the model
> behind your account. Nothing is sent while viewing sessions, and no other
> session is included. The judge subprocess runs sealed: no tools, no MCP
> servers, no user or project settings, and no session persistence.
> 
> Reports are cached in `~/.mindwalk/reports`, one per session; a report goes
> stale (never auto-reruns) when the session's content changes.
> 
> ## Under the hood
> 
> Three artifacts, kept deliberately separate:
> 
> 1. a **trace** — the session log normalized into an ordered stream of
>    file-touch events (`internal/adapter`, one adapter per agent format);
> 2. a **citymap** — a deterministic layout of the repository
>    (`internal/citymap`); the same tree always produces the same map, so
>    replays are comparable across sessions;
> 3. a **report** — an LLM judge's evidence-anchored findings about one
>    session (`internal/judge`); the judge only contributes findings, verdicts
>    are always rolled up mechanically, so reports stay comparable too.
> 
> A local Go server (`internal/server`) joins them and serves the
> React/Three.js frontend (`web`). `schema/` mirrors the exported JSON contracts.
> 
> ## Contributing
> 
> Issues and pull requests are welcome. To get a working dev setup:
> 
> ```sh
> make setup   # install frontend dependencies
> make serve   # dev server on :8765, serving web/dist from the working tree
> make test    # go test + frontend build — run before sending a PR
> make build   # regenerate embedded assets and bin/mindwalk
> ```
> 
> Ground rules (see [AGENTS.md](AGENTS.md) for the full architecture notes):
> 
> - Keep the boundaries: adapters don't know about rendering, citymap generation
>   doesn't depend on playback, the judge reads only the normalized trace, and
>   the server just connects the pieces.
> - Keep Go code `gofmt`-ed; never hand-edit `internal/server/static` —
>   regenerate it with `make build`.
> - When trace, citymap, or report JSON shapes change, update `schema/` and the
>   relevant tests in the same change.
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ## License
> 
> [MIT](LICENSE) © 2026 Ricko Yu

## 延伸閱讀

相關概念：[[可視化工具]] · [[編碼代理]] · [[數據分析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/cosmtrek/mindwalk)

## 相關收錄

> [!note]- 直接競品（同子分類：可視化工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "可視化工具" AND file.name != "cosmtrek--mindwalk"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cosmtrek--mindwalk"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "cosmtrek--mindwalk" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "cosmtrek--mindwalk"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["可視化工具","編碼代理","數據分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cosmtrek--mindwalk" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cosmtrek--mindwalk");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cosmtrek--mindwalk" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cosmtrek" AND file.name != "cosmtrek--mindwalk"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cosmtrek--mindwalk");
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
> const me = dv.page("Repos/cosmtrek--mindwalk");
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
> const me = dv.page("Repos/cosmtrek--mindwalk");
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
> const me = dv.page("Repos/cosmtrek--mindwalk");
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
> const me = dv.page("Repos/cosmtrek--mindwalk");
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

> **2026-07-16** — 首次收錄
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

- [[2026-07-16|2026-07-16]] — 首次收錄，706 stars
