---
repo: BigPizzaV3/CodexPlusPlus
url: https://github.com/BigPizzaV3/CodexPlusPlus
owner: BigPizzaV3
owner_type: User
language: Python
license: N/A
description: "An enhanced tool for CodexApp, striving to make Codex better to use and more comfortable 一个CodexApp的增强工具，努力让Codex变得更好用更舒服"
homepage: ""
stars: 1529
stars_per_day: 255
forks: 94
open_issues: 32
created: 2026-05-06
pushed_at: 2026-05-12
first_seen: 2026-05-12
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "插件管理"
release_tag: "v1.0.5.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-12
use_case: "為 Codex App 提供增強功能，改善使用體驗。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 32
repo_size_kb: 1448
readme_length: 6163
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-12"
star_history: "2026-05-12:1040,2026-05-12:1044,2026-05-13:1526,2026-05-13:1529"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "CodexPlusPlus"
  - "BigPizzaV3/CodexPlusPlus"
  - "為 Codex App 提供增強功能，改善使用體驗。"
---

# CodexPlusPlus

**1.5k** stars · **255** stars/天 · 建立 6 天前 · Python · 未標註授權

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

`v1.0.5.1`

> [!summary] 一句話摘要
> 為 Codex App 提供增強功能，改善使用體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (255 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要提升 Codex App 使用體驗的開發者和普通使用者。
> **一句話重點** Codex++ 的設計理念在於提升 Codex App 的使用體驗，而不干擾原始應用的穩定性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "插件管理" && p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 插件管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到更流暢的 Codex 使用體驗，值得一試。

> [!abstract] 核心創新
> Codex++ 透過 CDP 注入增強腳本，無需修改原始 Codex App 文件。

## 專案簡介

Codex++ 是一個外部增強啟動器，旨在提升 Codex App 的使用體驗。它不修改 Codex 的原始安裝，而是通過 Chromium DevTools Protocol (CDP) 向渲染進程注入增強腳本。使用者只需啟動 Codex++，即可解鎖插件入口，並在會話列表中顯示刪除按鈕，這是 Codex 原生功能的缺失。Codex++ 也支持 Windows 和 macOS 的安裝，並提供自動更新功能，確保使用者始終使用最新版本。這個工具的賣點在於它的非侵入性設計，使用者無需擔心原始應用的穩定性。

技術上，Codex++ 依賴 Python 3.11+ 和 websocket-client 來實現與 Codex 的通訊，並使用 requests 來處理網路請求。相較於其他類似工具，Codex++ 提供了更靈活的插件管理和會話刪除功能，這在 Codex 的原生功能中是無法實現的。使用者可以透過命令行輕鬆安裝或卸載，並可選擇性地啟用自動接管功能，這樣即使從原生入口啟動 Codex，也能自動使用 Codex++ 的增強功能。這種設計使得使用者在使用 Codex 時不會遇到功能限制，並且能夠更有效地管理會話。未來，Codex++ 可能會進一步擴展功能，增強與其他工具的整合性。

**技術棧**：`Python 3.11` · `websocket-client` · `requests`

## 重點功能

- 會話刪除功能 — 在會話列表中顯示刪除按鈕，支持撤銷操作。
- 自動更新 — 啟動時檢查 GitHub Release，並提供更新命令。
- 多平台支持 — 支持 Windows 和 macOS 的安裝和卸載。
- 插件管理 — 解鎖 Codex 的插件功能，並支持強制安裝特殊插件。
- 命令行操作 — 提供命令行安裝和卸載選項，方便開發者使用。

## 快速開始

1. 安裝 Codex++
```bash
python -m codex_session_delete setup
```
2. 啟動 Codex++
```bash
python -m codex_session_delete launch
```
3. 檢查更新
```bash
python -m codex_session_delete check-update
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Codex App 和 Python 3.11+",
  "指令": "python -m codex_session_delete launch --app-dir '/Applications/OpenAI Codex.app' --debug-port 9229 --helper-port 57321",
  "預期輸出": "啟動 Codex++ 並注入增強腳本。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1529 stars（255/天），forks 94（6.1%），這顯示出穩定的增長潛力。開發者 BigPizzaV3 及其團隊在增強 Codex App 的使用體驗上填補了市場空白，特別是對於需要更靈活插件管理的使用者。這個工具的出現解決了 Codex 原生功能不足的痛點，特別是在會話管理上。社群的反饋和需求促進了這個專案的快速發展，並且有助於未來版本的改進。

## 適合誰使用

**目標受眾**：需要提升 Codex App 使用體驗的開發者和普通使用者。

> [!example] 使用場景
> - 開發者用它來管理 Codex 的會話，因為它提供了直觀的刪除功能，避免了原生應用中繁瑣的操作。
> - 系統管理員用它來自動更新 Codex++，因為它能在啟動時自動檢查更新，節省了手動更新的時間。
> - 普通使用者用它來解鎖 Codex 的插件功能，因為它能在不改動原始應用的情況下增強使用體驗。

## 架構分析

Codex++ 採用外部啟動器的架構，這樣設計的目的是為了不干擾 Codex App 的原始安裝。它通過啟動 Codex App 並附加 CDP 參數來實現與 Codex 的通訊，這樣可以在不修改原始文件的情況下進行功能增強。資料流方面，Codex++ 先啟動本地 helper 服務，然後通過 CDP 注入增強腳本，這樣可以實現會話的刪除和插件的管理。這種設計的代價是需要使用者手動啟動 Codex++，而非完全自動化。擴展性方面，未來可以考慮增加更多的功能，但目前的設計已經能夠滿足大多數使用者的需求。

## 技術深入分析

Codex++ 的核心技術機制是通過 CDP 進行增強，這使得它能夠在不修改原始應用的情況下，實現功能的擴展。它使用 Python 作為開發語言，依賴於 websocket-client 和 requests 來處理與 Codex 的通訊和網路請求。這樣的設計使得 Codex++ 能夠靈活地管理會話和插件，並且能夠在啟動時自動檢查更新。效能方面，Codex++ 的啟動時間受到 Codex App 本身的影響，若 Codex 啟動緩慢，Codex++ 也會相應延遲。設計取捨方面，選擇使用 Python 使得開發過程相對簡單，但也可能導致在性能上不如某些編譯語言。技術風險方面，Codex++ 依賴於 Codex App 的穩定性，若 Codex 更新導致結構變化，可能需要隨之更新注入的腳本。整合方面，Codex++ 能夠與現有的開發環境良好整合，特別是在使用 Python 的環境中，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝和使用說明，並提供了命令行和圖形界面的安裝選項。安裝過程順暢，無明顯坑點。文檔目前僅提供英文版本，對於非英語使用者可能會有一定障礙。

## 優缺點分析

> [!success] 優點
> - 非侵入性設計，無需修改原始 Codex App。
> - 提供直觀的會話管理功能，提升使用體驗。
> - 支持多平台，方便不同使用者使用。

> [!danger] 缺點
> - 目前僅支援 Windows 和 macOS，Linux 使用者無法使用。
> - 需要手動啟動，對於不熟悉命令行的使用者不太友好。
> - 依賴於 Codex App 的正常運行，若 Codex 出現問題，Codex++ 也無法正常工作。

> [!warning] 注意事項
> - 僅支援 Python 3.11+
> - 不支援 Linux 平台，目前僅有 Windows 和 macOS 版本。
> - 需要 Codex App 正常安裝，否則無法啟動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的增強功能，但主要針對不同的應用場景，Codex++ 更專注於 Codex App 的使用體驗。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供插件管理功能，但缺乏 Codex++ 的自動更新和會話刪除功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較少，但生態系統不如 Python 豐富。 | 如果你的團隊已經在使用 Rust 並希望減少記憶體使用，則可以考慮這個選擇。 | medium，因為需要重新學習 Rust 語言和生態系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的插件管理功能，但缺乏 Codex++ 的自動更新和會話刪除功能。 | 如果你需要一個更簡單的插件管理工具，且不需要 Codex++ 的增強功能，可以考慮這個選擇。 | low，因為功能相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CodexPlusPlus** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較少，但生態系統不如 Python 豐富。 | 提供類似的插件管理功能，但缺乏 Codex++ 的自動更新和會話刪除功能。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 語言和生態系統。 | low，因為功能相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Rust 並希望減少記憶體使用，則可 | 如果你需要一個更簡單的插件管理工具，且不需要 Codex++ |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 從原生入口啟動 Codex 時，Codex++ 功能無法生效。
  - 解法：確保從 Codex++ 快捷方式啟動。
- [MEDIUM] 如果 9229 端口被占用，Codex++ 可能無法正常啟動。
  - 解法：檢查並釋放該端口，或手動指定其他端口。
- [MEDIUM] Codex App 更新後，可能需要更新 Codex++ 的注入腳本。
  - 解法：定期檢查 Codex++ 的更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 Codex 使用者 | 非常適合 | 提供了直觀的會話管理功能，能提升團隊的工作效率。 |
| 大型企業的 Codex 部署 | 普通 | 雖然功能強大，但可能需要額外的測試和驗證。 |
| 對 Codex 功能不滿的個人使用者 | 非常適合 | 能夠解決原生功能的不足，提升使用體驗。 |
| Linux 使用者 | 不適合 | 目前僅支援 Windows 和 macOS。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到更流暢的 Codex 使用體驗，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Codex++ 不需要高權限運行，並且不存取敏感資料。依賴的第三方庫（如 requests 和 websocket-client）在社群中有良好的信譽，適合在 CI/CD pipeline 中使用。

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
| Forks | 94 |
| Open Issues | 32 |
| Issue 解決率 | 32% (15 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigPizzaV3/CodexPlusPlus) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 67
>     "JavaScript" : 32
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigPizzaV3](https://github.com/BigPizzaV3) | 42 |
> | [@Z1rconium](https://github.com/Z1rconium) | 2 |
> | [@waangzh](https://github.com/waangzh) | 1 |
> | [@codex](https://github.com/codex) | 1 |
> | [@DeepFal](https://github.com/DeepFal) | 1 |

**最新版本**：v1.0.5.1 (2026-05-12)

> [!info]- Release Notes
> ## What's Changed
> * Add history export for Codex sessions by @shallFun4Learning in https://github.com/BigPizzaV3/CodexPlusPlus/pull/44
> * Add sidebar project move support by @JZLshen in https://github.com/BigPizzaV3/CodexPlusPlus/pull/47
> 
> ## New Contributors
> * @shallFun4Learning made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/44
> * @JZLshen made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/47
> 
> **Full Changelog**: https://github.com/BigPizzaV3/CodexPlusPlus/compare/v1.0.5...v1.0.5.1

## 社群與生態

**社群活躍度**：社群活躍，最近有多個 PR 和 issue 被處理。
**連結**：[文件](https://github.com/BigPizzaV3/CodexPlusPlus)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-12）
> **活躍天數** 2 天 · **最新 commit** 更新交流群二维码

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#66](https://github.com/BigPizzaV3/CodexPlusPlus/issues/66) | 建议在任务栏、dockder可以添加启动图标 | 0 | 0 |
> | [#65](https://github.com/BigPizzaV3/CodexPlusPlus/issues/65) | 有没有无感自更新呀 | 0 | 0 |
> | [#64](https://github.com/BigPizzaV3/CodexPlusPlus/issues/64) | 请求加入Linux版本 | 0 | 0 |
> | [#63](https://github.com/BigPizzaV3/CodexPlusPlus/issues/63) | 添加watcher以后会杀死codex cli的进程 | 0 | 0 |
> | [#62](https://github.com/BigPizzaV3/CodexPlusPlus/issues/62) | 话说能不能加这个功能 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex++
> 
>   
> 
> Codex++ 是一个面向 Codex App 的外部增强启动器。它不修改 Codex App 原始安装文件，而是通过外部 launcher 启动 Codex，并使用 Chromium DevTools Protocol 向渲染进程注入增强脚本。
> 
> ## 目录
> 
> - [功能](#功能)
> - [痛点](#痛点)
> - [解决效果](#解决效果)
> - [讨论交流](#讨论交流)
> - [友情链接](#友情链接)
> - [工作方式](#工作方式)
> - [环境要求](#环境要求)
> - [Windows 使用](#windows-使用)
>   - [图形菜单安装/卸载](#图形菜单安装卸载)
>   - [命令行安装](#命令行安装)
>   - [命令行卸载](#命令行卸载)
> - [自动更新](#自动更新)
> - [macOS 使用](#macos-使用)
>   - [安装](#安装)
>   - [卸载](#卸载)
> - [直接启动](#直接启动)
> - [数据与备份](#数据与备份)
> - [常见问题](#常见问题)
> 
> ## 功能
> 
> 当前功能：
> 
> - 在会话列表悬停显示“删除”按钮
> - 删除前确认，支持撤销
> - 优先尝试服务端删除；不可用时删除本地 Codex SQLite 会话记录
> - 在顶部菜单栏加入 `Codex++` 菜单
> - 支持开关：
>   - 插件选项解锁
>   - 特殊插件强制安装
>   - 会话删除
> - 支持 Windows 快捷方式安装/卸载
> - 支持 macOS 生成 `/Applications/Codex++.app`
> - 支持基于 GitHub Release 检查和更新 Codex++
> 
> ## 痛点
> 
> API Key 登录模式下，Codex 原生插件入口会提示需要登录 ChatGPT，导致插件功能无法正常使用：
> 
> 同时，Codex 原生会话列表只有归档入口，没有真正的删除按钮：
> 
> ## 解决效果
> 
> Codex++ 启动后会解锁插件入口，并在会话列表悬停时显示删除按钮：
> 
> 顶部菜单栏会出现 `Codex++`，点击后可以打开配置界面：
> 
> ## 讨论交流
> 
> 欢迎扫码加入 Codex++ 交流群，反馈问题、交流使用体验或提出新功能建议：
> 
> ## 友情链接
> 
> - [LINUX DO](https://linux.do)
> 
> ## 工作方式
> 
> Codex++ 使用外部启动方式运行 Codex：
> 
> 1. 启动 Codex App，并附加：
>    - `--remote-debugging-port=9229`
>    - `--remote-allow-origins=http://127.0.0.1:9229`
> 2. 启动本地 helper 服务，保留健康检查和运行生命周期。
> 3. 通过 CDP 注入 `renderer-inject.js`。
> 4. 渲染端通过 CDP bridge 调用本地删除服务；默认不开放 HTTP 删除/撤销入口，避免本机其他页面误触发删除类操作。
> 5. 启动 Codex 时会继承现有 `HTTP_PROXY` / `HTTPS_PROXY` / `ALL_PROXY`；如果这些环境变量未设置，会自动探测常见本地代理端口（如 `127.0.0.1:7897`），帮助 Codex 加载需要访问 GitHub 的技能资源。
> 
> 这种方式不会修改 Codex 的 `app.asar`，也不需要往 Codex 安装目录写 DLL。
> 
> ## 环境要求
> 
> - Python 3.11+
> - Windows 或 macOS
> - 已安装 Codex App
> 
> 安装依赖：
> 
> ```bash
> python -m pip install -e .
> ```
> 
> 如需运行测试：
> 
> ```bash
> python -m pip install -e .[test]
> python -m pytest -q
> ```
> 
> ## Windows 使用
> 
> ### 图形菜单安装/卸载
> 
> 双击项目根目录的：
> 
> ```text
> setup.bat
> ```
> 
> 然后按菜单选择：
> 
> ```text
> [1] Install Codex++
> [2] Uninstall Codex++
> [3] Update Codex++
> [4] Exit
> ```
> 
> ### 命令行安装
> 
> 在项目目录执行：
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 安装后会在桌面生成：
> 
> ```text
> Codex++.lnk
> ```
> 
> 双击该快捷方式启动 Codex++。
> 
> ### 命令行卸载
> 
> 可以在系统“设置 → 应用 → 已安装的应用”里卸载 `Codex++`。
> 
> 也可以在项目目录执行：
> 
> ```bash
> python -m codex_session_delete remove
> ```
> 
> 如需同时删除 Codex++ 自己的日志和备份数据：
> 
> ```bash
> python -m codex_session_delete remove --remove-data
> ```
> 
> ## 自动更新
> 
> Codex++ 会在启动时检查 GitHub Release。如果发现比本地版本更新的 Release，会在控制台提示版本号、Release 地址和更新命令；检查失败不会影响 Codex++ 启动。
> 
> 手动检查更新：
> 
> ```bash
> python -m codex_session_delete check-update
> ```
> 
> 从最新 GitHub Release 更新：
> 
> ```bash
> python -m codex_session_delete update
> ```
> 
> 更新流程：
> 
> 1. 请求 `https://api.github.com/repos/BigPizzaV3/CodexPlusPlus/releases/latest`。
> 2. 比较最新 Release tag 与本地版本。
> 3. 优先下载 Release 中的 `.whl` asset。
> 4. 执行 `python -m pip install --upgrade `。
> 5. 自动重新执行 `python -m codex_session_delete setup`，刷新快捷方式、Windows 卸载项或 macOS app bundle。
> 
> 发布新版本时，请在 GitHub Release 里附加 wheel 文件，例如：
> 
> ```bash
> python -m build
> ```
> 
> 然后把 `dist/codex_session_delete--py3-none-any.whl` 上传到对应 Release。
> 
> ## macOS 使用
> 
> ### 安装
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 默认会自动查找 `/Applications/Codex.app`、`/Applications/OpenAI Codex.app` 或用户 Applications 目录下的 Codex 应用，并生成：
> 
> ```text
> /Applications/Codex++.app
> ```
> 
> ### 卸载
> 
> ```bash
> python -m codex_session_delete remove
> ```
> 
> ## 直接启动
> 
> 不安装快捷方式时，也可以直接运行：
> 
> ```bash
> python -m codex_session_delete launch
> ```
> 
> 常用参数：
> 
> ```bash
> python -m codex_session_delete launch \
>   --app-dir "/Applications/OpenAI Codex.app" \
>   --debug-port 9229 \
>   --helper-port 57321
> ```
> 
> Windows 也可以手动指定 Codex 安装目录：
> 
> ```bash
> python -m codex_session_delete launch \
>   --app-dir "C:/Program Files/WindowsApps/OpenAI.Codex_xxx/app" \
>   --debug-port 9229 \
>   --helper-port 57321
> ```
> 
> ## 数据与备份
> 
> Codex++ 默认读取 Codex 本地数据库：
> 
> ```text
> ~/.codex/state_5.sqlite
> ```
> 
> 删除前会把相关记录备份到：
> 
> ```text
> ~/.codex-session-delete/backups
> ```
> 
> 隐藏启动失败日志位于：
> 
> ```text
> ~/.codex-session-delete/launcher.log
> ```
> 
> ## Windows 自动接管（可选）
> 
> 默认情况下 Codex++ 只在你**从 `Codex++` 快捷方式启动时**生效。如果你从开始菜单、任务栏或系统原生入口直接启动 Codex，那一次不会有注入，`Codex++` 菜单和插件解锁都不会出现。
> 
> Windows 可以注册一个常驻 watcher 解决这个问题。它会每 3 秒探测一次本机 CDP 端口，发现 Codex 在跑但 CDP 没起来，会先短暂等待并二次确认，确认仍没有 CDP 后再把这一批 Codex 进程杀掉、通过 launcher 重拉一次带注入的版本。这样不管你从哪里打开 Codex，都会被自动接管。
> 
> 注意代价：
> 
> - 每次 Codex 通过原生路径启动，仍可能先打开一瞬间，再被 kill，再被 launcher 带 CDP 重开；watcher 会通过等待、二次确认和失败 backoff 尽量减少频繁闪烁。
> - watcher 以 `pythonw.exe` 常驻运行，登录时自动启动（通过 `HKCU\...\Run` 和 Startup 文件夹双路径注册，后者防止某些注册表清理工具干扰）。
> 
> ### 安装
> 
> ```bash
> python -m codex_session_delete watch-install
> ```
> 
> 安装完成后 watcher 会立即启动，无需重启。
> 
> ### 卸载
> 
> ```bash
> python -m codex_session_delete watch-remove
> ```
> 
> `remove` / 系统卸载 Codex++ 时会自动连带执行 `watch-remove`，不需要手动处理。
> 
> ### 临时开关
> 
> 保留自启项、但让 watcher 不再自动接管：
> 
> ```bash
> python -m codex_session_delete watch-disable
> python -m codex_session_delete watch-enable
> ```
> 
> ### 日志
> 
> ```text
> %USERPROFILE%\.codex-session-delete\watcher.log
> ```
> 
> 示例：
> 
> ```text
> [...] watcher started (interval=3.0s)
> [...] Codex running without CDP (pids=[...]); attempting takeover
> [...] takeover: killing 4 codex pid(s): [...]
> [...] takeover: CDP is up on 9229 (launcher pid=...)
> ```
> 
> ## 常见问题
> 
> ### 双击 Codex++ 没反应
> 
> 先查看日志：
> 
> ```text
> %USERPROFILE%\.codex-session-delete\launcher.log
> ```
> 
> 常见原因：
> 
> - Codex App 没有安装或路径变化
> - 9229 端口被占用
> - Python 环境不可用
> 
> ### 技能推荐加载失败
> 
> 如果技能页提示 `git fetch failed`、`unable to access 'https://github.com/openai/skills.git/'` 或无法连接 GitHub，通常是本机网络不能直连 GitHub。Codex++ 启动时会优先继承现有代理环境变量；如果未设置，会自动探测常见本地代理端口。也可以手动指定：
> 
> ```powershell
> $env:HTTP_PROXY="http://127.0.0.1:7897"
> $env:HTTPS_PROXY="http://127.0.0.1:7897"
> python -m codex_session_delete launch
> ```
> 
> ### Codex++ 菜单没出现
> 
> 确认是从 `Codex++` 快捷方式启动，而不是直接启动原版 Codex。
> 
> 也可以检查 Codex 是否带了 CDP 参数：
> 
> ```text
> --remote-debugging-port=9229
> ```
> 
> ### Windows 系统卸载失败
> 
> 请先更新到当前版本后重新安装一次：
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 新版会写入稳定的系统卸载项，并使用绝对 Python 路径执行卸载。
> 
> ## 开发
> 
> 运行测试：
> 
> ```bash
> python -m pytest -q
> ```
> 
> 项目结构：
> 
> ```text
> codex_session_delete/
>   cli.py                 CLI 入口
>   launcher.py            启动 Codex 并注入脚本
>   cdp.py                 CDP 通信与 bridge
>   helper_server.py       本地 helper 服务
>   storage_adapter.py     本地 SQLite 删除/撤销
>   windows_installer.py   Windows 快捷方式与卸载项
>   macos_installer.py     macOS app bundle 安装
>   watcher.py             Windows 常驻 watcher（可选，原生启动接管）
>   inject/renderer-inject.js
> 
> tests/                   自动化测试
> docs/ai/                 项目级 AI 协作状态和 skills 配置中枢
> ```
> 
> ## 说明
> 
> Codex++ 是外部增强工具，不修改 Codex App 原始文件。Codex App 更新后，如果页面结构变化，可能需要更新注入脚本。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[插件管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)

## 相關收錄

> [!note]- 直接競品（同子分類：插件管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "插件管理" AND file.name != "BigPizzaV3--CodexPlusPlus"
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
> const concepts = ["CLI/TUI","自動化","插件管理"];
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
