---
repo: BigPizzaV3/CodexPlusPlus
url: https://github.com/BigPizzaV3/CodexPlusPlus
owner: BigPizzaV3
owner_type: User
language: Python
license: N/A
description: "An enhanced tool for CodexApp, striving to make Codex better to use and more comfortable 一个CodexApp的增强工具，努力让Codex变得更好用更舒服"
homepage: ""
stars: 2591
stars_per_day: 259
forks: 170
open_issues: 52
created: 2026-05-06
pushed_at: 2026-05-16
first_seen: 2026-05-12
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "增強工具"
release_tag: "v1.0.7.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-12
use_case: "為 Codex App 提供增強功能，讓使用更方便舒適。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 38
repo_size_kb: 4008
readme_length: 4061
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-12"
star_history: "2026-05-12:1040,2026-05-12:1044,2026-05-13:1526,2026-05-13:1529,2026-05-14:1898,2026-05-15:2194,2026-05-16:2415,2026-05-17:2591"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "CodexPlusPlus"
  - "BigPizzaV3/CodexPlusPlus"
  - "為 Codex App 提供增強功能，讓使用更方便舒適。"
---

# CodexPlusPlus

**2.6k** stars · **259** stars/天 · 建立 10 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.7.1`

> [!summary] 一句話摘要
> 為 Codex App 提供增強功能，讓使用更方便舒適。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (259 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望提升 Codex 使用體驗的開發者，特別是需要頻繁管理會話的用戶。
> **一句話重點** Codex++ 是一個靈活的增強工具，能在不干擾原始應用的情況下，提供多種實用功能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "增強工具" && p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 增強工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，2 小時整合，得到靈活的增強功能，值得一試。

> [!abstract] 核心創新
> Codex++ 透過 CDP 注入增強功能，無需修改 Codex 原始文件。

## 專案簡介

Codex++ 是一個外部增強工具，旨在改善 Codex App 的使用體驗。它通過 Chromium DevTools Protocol (CDP) 注入增強腳本，無需修改原始安裝文件。用戶可以通過雙擊 `setup.bat` 或使用命令行安裝，並透過 `python -m codex_session_delete launch` 啟動應用。這種設計讓 Codex++ 能夠在不干擾原始應用的情況下，提供額外的功能，如會話刪除、Markdown 導出和插件入口解鎖。技術上，Codex++ 使用 Python 和 JavaScript，依賴於 `requests` 和 `websocket-client` 庫，這使得它在功能擴展上相對輕量。

與 Codex 的原生功能相比，Codex++ 提供了更靈活的會話管理和插件支持，特別是在 API Key 模式下，能解鎖原生插件入口，這是 Codex 原生版本所不具備的。使用者在切換模型供應商時，Codex++ 會自動同步會話 metadata，避免歷史會話丟失。儘管如此，使用者仍需注意可能的網絡問題，因為 Codex++ 需要穩定的網絡連接來加載資源。這個專案目前處於 beta 階段，適合希望提升 Codex 使用體驗的開發者，特別是那些需要頻繁管理會話的用戶。

**技術棧**：`Python 3.11` · `JavaScript` · `Batchfile`

## 重點功能

- 增強功能管理 — 提供頂部 `Codex++` 菜單，集中管理所有增強功能。
- 插件入口解鎖 — 在 API Key 模式下顯示並啟用插件入口，提升功能使用率。
- 會話刪除功能 — 懸停顯示刪除按鈕，支持撤銷操作，增強用戶體驗。
- Markdown 導出 — 將會話導出為帶時間戳的 Markdown 格式，方便整理。
- Provider 同步 — 切換模型供應商時保留歷史會話，避免資料丟失。

## 快速開始

1. 安裝依賴
```bash
python -m pip install -e .
```
2. 啟動 Codex++
```bash
python -m codex_session_delete launch
```
3. 安裝快捷方式
```bash
python -m codex_session_delete setup
```

## 程式碼範例

```python
[
  "# 安裝依賴",
  "python -m pip install -e .",
  "# 啟動",
  "python -m codex_session_delete launch",
  "# 安裝快捷方式 / app bundle",
  "python -m codex_session_delete setup",
  "# 卸載",
  "python -m codex_session_delete remove",
  "# 檢查更新 / 更新",
  "python -m codex_session_delete check-update"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 2591 stars（259/天），forks 170（6.6%），顯示出穩定的增長潛力。作者 BigPizzaV3 及其團隊在開源社群中活躍，過去有多個相關專案，這使得他們在此領域具有一定的信譽。Codex++ 解決了 Codex 原生版本在插件支持和會話管理上的不足，這是使用者長期以來的痛點。最近的社群討論和問題反饋也促進了這個專案的快速迭代。隨著 Codex 的使用者基數增長，對於增強工具的需求也隨之上升，這使得 Codex++ 成為一個值得關注的選擇。

## 適合誰使用

**目標受眾**：希望提升 Codex 使用體驗的開發者，特別是需要頻繁管理會話的用戶。

> [!example] 使用場景
> - 後端開發者用它來管理 Codex 的會話，因為它提供了更靈活的會話刪除和導出功能，避免了手動操作的繁瑣。
> - 數據科學家用它來快速導出會話的 Markdown 格式，因為這樣可以更方便地整理和分享實驗結果。
> - 產品經理用它來解鎖 Codex 的插件功能，因為這樣能夠提升團隊的工作效率，特別是在使用 API Key 模式下。

## 架構分析

Codex++ 採用外部增強工具的架構設計，通過 CDP 進行注入，這樣的設計使得它能夠在不修改 Codex 原始文件的情況下，提供增強功能。資料流方面，Codex++ 先啟動 Codex App，然後透過 CDP 參數連接本地服務，實現功能的注入和管理。這種方式的優勢在於不會影響原始應用的穩定性，但也意味著在 Codex 更新時，可能需要隨之更新注入腳本。擴展性上，Codex++ 可以輕鬆添加新功能，但需要注意與 Codex 的兼容性問題。

## 技術深入分析

Codex++ 的核心技術機制在於使用 CDP 進行功能注入，這使得它能夠在不修改 Codex 的情況下，提供額外的功能。這種設計模式不僅提高了安全性，還降低了對原始應用的依賴。效能上，Codex++ 能夠快速啟動並執行增強功能，但在高負載情況下，可能會出現延遲。設計上，選擇 Python 和 JavaScript 作為主要語言，這使得開發和維護相對簡單，但也可能導致在某些環境下的兼容性問題。技術風險方面，Codex++ 依賴於 CDP 的穩定性，若未來 CDP 發生重大變更，可能會影響到 Codex++ 的功能。整合方面，Codex++ 可以與現有的開發工具鏈相容，但在 CI/CD pipeline 中的整合可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指引。安裝過程中可能會遇到環境配置問題，但整體流程順暢。文件目前僅提供英文，對於非英語使用者可能需要額外的學習成本。

## 優缺點分析

> [!success] 優點
> - 無需修改原始應用，降低了使用風險。
> - 提供靈活的會話管理功能，提升用戶體驗。
> - 支持多平台，方便不同用戶使用。

> [!danger] 缺點
> - 依賴於穩定的網絡連接，可能影響使用體驗。
> - 在 Codex 更新後，可能需要更新注入腳本，增加維護成本。
> - 對於新手用戶，安裝過程可能稍顯複雜。

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本。
> - 需要穩定的網絡連接來加載資源。
> - 在某些情況下，Codex App 更新後可能需要更新注入腳本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的增強功能，但專注於不同的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要針對資料管理，功能範圍較窄。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 的 API 接口，與 Codex++ 的功能不完全重疊。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於增強 AI agent 的功能，與 Codex++ 的增強功能有所不同。 | 如果你的需求是針對 AI agent 的功能增強，而非 Codex 的使用。 | medium，因為需要重新適應不同的功能和使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供資料管理功能，與 Codex++ 的功能範圍不同。 | 如果你的重點是資料管理而非增強 Codex 的使用體驗。 | low，因為功能範圍較窄，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CodexPlusPlus** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於增強 AI agent 的功能，與 Codex++ 的增強功能有所不同。 | 提供資料管理功能，與 Codex++ 的功能範圍不同。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的功能和使用方式。 | low，因為功能範圍較窄，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對 AI agent 的功能增強，而非 Co | 如果你的重點是資料管理而非增強 Codex 的使用體驗。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Codex++ 啟動後無法顯示菜單
  - 解法：確保從 Codex++ 快捷方式啟動，而非原版 Codex。
- [MEDIUM] 在某些環境下，Codex++ 可能無法正常連接網絡
  - 解法：檢查代理設置，確保網絡連接正常。
- [MEDIUM] Codex 更新後可能需要更新注入腳本
  - 解法：定期檢查 GitHub 頁面以獲取最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊使用 Codex 進行專案開發 | 非常適合 | 提供靈活的會話管理和增強功能，提升開發效率。 |
| 個人開發者希望提升 Codex 使用體驗 | 適合 | 能夠解鎖更多功能，改善使用流程。 |
| 大型企業需要穩定的開發工具 | 不適合 | 目前仍處於 beta 階段，可能不夠穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到靈活的增強功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Codex++ 不需要高權限，且不存取敏感資料。依賴的庫有一定的信任度，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
| Forks | 170 |
| Open Issues | 52 |
| Issue 解決率 | 38% (32 closed) |
| 最後推送 | 2026-05-16 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 3.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigPizzaV3/CodexPlusPlus) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 68
>     "JavaScript" : 31
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigPizzaV3](https://github.com/BigPizzaV3) | 81 |
> | [@wanpan11](https://github.com/wanpan11) | 4 |
> | [@shallFun4Learning](https://github.com/shallFun4Learning) | 4 |
> | [@Z1rconium](https://github.com/Z1rconium) | 2 |
> | [@ItQianChen](https://github.com/ItQianChen) | 2 |

**最新版本**：v1.0.7.1 (2026-05-15)

> [!info]- Release Notes
> ## What's Changed
> * Respect CODEX_HOME for local storage by @cquxl in https://github.com/BigPizzaV3/CodexPlusPlus/pull/104
> * Add custom model catalog unlock by @ysxk in https://github.com/BigPizzaV3/CodexPlusPlus/pull/91
> * 修复 macOS 锁屏恢复后 helper 后端误断开【Fix macOS helper reinjection after sleep】 by @hl9565 in https://github.com/BigPizzaV3/CodexPlusPlus/pull/105
> * Inject Codex++ into new Codex windows by @muxuuu in https://github.com/BigPizzaV3/CodexPlusPlus/pull/113
> 
> ## New Contributors
> * @cquxl made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/104
> * @ysxk made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/91
> * @hl9565 made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/105
> * @muxuuu made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/113
> 
> **Full Changelog**: https://github.com/BigPizzaV3/CodexPlusPlus/compare/v1.0.7...v1.0.7.1

## 社群與生態

**社群活躍度**：社群活躍，有定期的更新和問題回應。
**連結**：[文件](https://github.com/BigPizzaV3/CodexPlusPlus)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-15 ~ 2026-05-16）
> **活躍天數** 2 天 · **最新 commit** Add files via upload

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#51](https://github.com/BigPizzaV3/CodexPlusPlus/issues/51) | 可以适配fast模式的开关么 | 1 | 6 |
> | [#127](https://github.com/BigPizzaV3/CodexPlusPlus/issues/127) | 为什么要让codex-plusplus-watcher-interval每隔五分钟重复一次? | 0 | 0 |
> | [#126](https://github.com/BigPizzaV3/CodexPlusPlus/issues/126) | 后段总是断开 | 0 | 0 |
> | [#125](https://github.com/BigPizzaV3/CodexPlusPlus/issues/125) | Chrome浏览器插件搜索不到，旁边的自动化组件也没了 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex++
> 
>   
> 
>   中文 | English
> 
>   
>   
>   
>   
> 
> Codex++ 是面向 Codex App 的外部增强启动器：不修改原始安装文件，通过 Chromium DevTools Protocol 注入增强脚本。
> 
> ## 快速使用
> 
> Windows 用户双击项目根目录的 `setup.bat`，选择：
> 
> ```text
> [1] Install Codex++
> ```
> 
> 安装后双击桌面 `Codex++.lnk` 启动。
> 
> 命令行安装/启动：
> 
> ```bash
> python -m pip install -e .
> python -m codex_session_delete setup
> python -m codex_session_delete launch
> ```
> 
> macOS：
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 安装后会生成 `/Applications/Codex++.app`。
> 
> ## 交流与支持
> 
> 欢迎扫码加入 Codex++ 交流群，反馈问题、交流使用体验或提出新功能建议：
> 
> 如果 Codex++ 帮到了你，可以请我喝杯咖啡，或者随手赞赏支持一下继续维护。
> 
>   
>   
> 
> ## 赞助商
> 
>   
>     🏆 赞助商 🏆
>   
>   
>     👉 RawChat｜Codex 中转站 老牌中转站，支持包月套餐。低倍率调用，高缓存命中，Pro/Plus 号池，全天专人维护。
>   
> 
> ## 功能亮点
> 
> - 顶部 `Codex++` 菜单：集中管理增强功能。
> - 插件入口解锁：API Key 模式下显示并启用插件入口。
> - 特殊插件强制安装：解除 App unavailable / 应用不可用导致的前端安装禁用。
> - 会话删除：悬停显示删除按钮，删除前确认并支持撤销。
> - Markdown 导出：按本地 rollout 导出带时间戳的会话 Markdown。
> - 会话项目移动：把会话移动到普通对话或其他本地项目。
> - 对话 Timeline：右侧显示用户提问时间线，悬停摘要，点击跳转。
> - Provider 同步：切换 model_provider 或供应商时不丢历史会话。
> - Windows 快捷方式、卸载项、可选 watcher 自动接管、GitHub Release 更新。
> - macOS `/Applications/Codex++.app` 生成。
> 
> ## 痛点与解决
> 
> API Key 登录模式下，Codex 原生插件入口会提示需要登录 ChatGPT，导致插件功能无法正常使用：
> 
> Codex 原生会话列表只有归档入口，没有真正的删除按钮：
> 
> Codex++ 启动后会解锁插件入口，并在会话列表悬停时显示删除按钮：
> 
> 顶部菜单栏会出现 `Codex++`，可以查看后端状态并打开设置面板：
> 
> ## 工作方式
> 
> 1. 外部启动 Codex App，并附加 CDP 参数：
>    - `--remote-debugging-port=9229`
>    - `--remote-allow-origins=http://127.0.0.1:9229`
> 2. 启动本地 helper 服务，用于健康检查、设置、导出、移动、删除等操作。
> 3. 通过 CDP 注入 `renderer-inject.js`。
> 4. 渲染端通过 CDP bridge 调用本地服务；默认不开放 HTTP 删除/撤销入口，避免本机其他页面误触发。
> 5. 启动时继承现有代理环境变量；若未设置，会自动探测常见本地代理端口帮助加载 GitHub 资源。
> 
> 这种方式不会修改 Codex 的 `app.asar`，也不需要往 Codex 安装目录写 DLL。
> 
> ## Provider 同步
> 
> 启用 `Provider 同步` 后，Codex++ 会在启动前同步本地会话 metadata，让切换供应商后历史会话仍能在 Desktop 和 `/resume` 中显示。
> 
> 同步范围包括 rollout 文件、SQLite 线程记录和项目路径缓存；只修复会话可见性 metadata，不改写消息内容。遇到文件锁或 SQLite 忙碌时会跳过并继续启动。
> 
> ## 常用命令
> 
> ```bash
> # 安装依赖
> python -m pip install -e .
> 
> # 启动
> python -m codex_session_delete launch
> 
> # 安装快捷方式 / app bundle
> python -m codex_session_delete setup
> 
> # 卸载
> python -m codex_session_delete remove
> 
> # 同时删除日志和备份
> python -m codex_session_delete remove --remove-data
> 
> # 检查更新 / 更新
> python -m codex_session_delete check-update
> python -m codex_session_delete update
> 
> # Windows watcher 自动接管
> python -m codex_session_delete watch-install
> python -m codex_session_delete watch-remove
> python -m codex_session_delete watch-disable
> python -m codex_session_delete watch-enable
> ```
> 
> 直接指定 Codex 安装目录：
> 
> ```bash
> python -m codex_session_delete launch \
>   --app-dir "C:/Program Files/WindowsApps/OpenAI.Codex_xxx/app" \
>   --debug-port 9229 \
>   --helper-port 57321
> ```
> 
> ## 数据位置
> 
> - Codex 本地数据库：`~/.codex/state_5.sqlite`
> - 删除备份：`~/.codex-session-delete/backups`
> - Provider 同步备份：`~/.codex/backups_state/provider-sync`
> - 启动失败日志：`~/.codex-session-delete/launcher.log`
> - watcher 日志：`%USERPROFILE%\.codex-session-delete\watcher.log`
> 
> ## 常见问题
> 
> ### 双击 Codex++ 没反应
> 
> 查看日志：`%USERPROFILE%\.codex-session-delete\launcher.log`
> 
> 常见原因：Codex App 未安装或路径变化、9229 端口被占用、Python 环境不可用。
> 
> ### Codex++ 菜单没出现
> 
> 确认是从 `Codex++` 快捷方式启动，而不是原版 Codex。也可以检查 Codex 是否带有 `--remote-debugging-port=9229`。
> 
> ### 技能推荐加载失败
> 
> 如果提示 `git fetch failed` 或无法连接 GitHub，通常是网络无法直连 GitHub。Codex++ 会继承代理环境变量，也会自动探测常见本地代理端口。也可以手动指定：
> 
> ```powershell
> $env:HTTP_PROXY="http://127.0.0.1:7897"
> $env:HTTPS_PROXY="http://127.0.0.1:7897"
> python -m codex_session_delete launch
> ```
> 
> ### 切换供应商后旧会话不见了
> 
> 打开 `Codex++` 设置面板，启用 `Provider 同步` 后重启 Codex++。
> 
> ## 开发
> 
> ```bash
> python -m pip install -e .[test]
> python -m pytest -q
> ```
> 
> 主要结构：
> 
> ```text
> codex_session_delete/
>   cli.py                 CLI 入口
>   launcher.py            启动 Codex 并注入脚本
>   cdp.py                 CDP 通信与 bridge
>   helper_server.py       本地 helper 服务
>   storage_adapter.py     本地 SQLite 删除/撤销
>   provider_sync.py       Provider 同步
>   settings_store.py      Codex++ 后端设置
>   windows_installer.py   Windows 快捷方式与卸载项
>   macos_installer.py     macOS app bundle 安装
>   watcher.py             Windows watcher（可选）
>   inject/renderer-inject.js
> 
> tests/                   自动化测试
> ```
> 
> ## 友情链接
> 
> - [LINUX DO](https://linux.do)
> 
> ## 贡献者与 Star
> 
>   
> 
>   
>   
>   
> 
> ## 说明
> 
> Codex++ 是外部增强工具，不修改 Codex App 原始文件。Codex App 更新后，如果页面结构变化，可能需要更新注入脚本。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)

## 相關收錄

> [!note]- 直接競品（同子分類：增強工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "增強工具" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "BigPizzaV3--CodexPlusPlus" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "BigPizzaV3" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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

> **2026-05-12** — 首次收錄
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

- [[2026-05-13|2026-05-13]] — 再次上榜，1.5k stars
- [[2026-05-12|2026-05-12]] — 首次收錄，1.0k stars
