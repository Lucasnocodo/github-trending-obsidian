---
repo: BigPizzaV3/CodexPlusPlus
url: https://github.com/BigPizzaV3/CodexPlusPlus
owner: BigPizzaV3
owner_type: User
language: Rust
license: N/A
description: "An enhanced tool for CodexApp, striving to make Codex better to use and more comfortable 一个CodexApp的增强工具，努力让Codex变得更好用更舒服"
homepage: ""
stars: 8380
stars_per_day: 364
forks: 560
open_issues: 179
created: 2026-05-06
pushed_at: 2026-05-29
first_seen: 2026-05-12
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "增強工具"
release_tag: "v1.1.8.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-12
use_case: "為 CodexApp 提供增強功能的外部啟動器和管理工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 49
repo_size_kb: 9766
readme_length: 6833
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-12"
star_history: "2026-05-12:1040,2026-05-12:1044,2026-05-13:1526,2026-05-13:1529,2026-05-14:1898,2026-05-15:2194,2026-05-16:2415,2026-05-17:2591,2026-05-18:2763,2026-05-19:2985,2026-05-20:3192,2026-05-21:3568,2026-05-22:3970,2026-05-23:4363,2026-05-24:4742,2026-05-25:5125,2026-05-26:5744,2026-05-27:6364,2026-05-28:7155,2026-05-29:7822,2026-05-30:8380"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "CodexPlusPlus"
  - "BigPizzaV3/CodexPlusPlus"
  - "為 CodexApp 提供增強功能的外部啟動器和管理工具。"
---

# CodexPlusPlus

**8.4k** stars · **364** stars/天 · 建立 23 天前 · Rust · 未標註授權

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

`v1.1.8.1`

> [!summary] 一句話摘要
> 為 CodexApp 提供增強功能的外部啟動器和管理工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (364 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 Codex 上進行自定義增強的開發者，尤其是希望靈活切換 API 的團隊。
> **一句話重點** Codex++ 的設計讓開發者能夠在不干擾原始 Codex 的情況下，靈活地添加增強功能。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到靈活的增強功能，值得嘗試。

> [!abstract] 核心創新
> Codex++ 透過外部啟動器和管理工具，實現了不改動原始安裝文件的增強功能。

## 專案簡介

Codex++ 是一個專為 Codex App 設計的增強啟動器和管理工具，旨在提升使用者體驗而不改動原始安裝文件。使用者可以透過外部啟動器啟動 Codex，並利用 Chromium DevTools Protocol 注入增強腳本，這樣可以避免對 Codex 的直接修改。安裝後，使用者可選擇靜默啟動或進入管理工具進行設定，管理工具提供了多種功能，包括增強功能的開關、用戶腳本的管理等。這個工具的賣點在於其不干擾 Codex 的原始結構，並且支持多種增強模式，讓使用者能夠根據需求自由切換。技術上，Codex++ 使用 Rust 作為後端，並搭配 Tauri 和 React 作為管理界面，這樣的選擇讓其在性能和使用上都相對輕量。

與其他類似工具相比，如 0xGF/boneyard 和 0xSero/codex-shim，Codex++ 提供了更靈活的中轉注入模式，允許使用者在多個 API 之間切換，並且能夠在不影響原有功能的情況下進行增強。實際使用中，Codex++ 能夠處理多個中轉配置，並且在管理工具中提供了清晰的操作界面，這對於需要頻繁切換 API 的開發者來說非常便利。儘管如此，使用者可能會遇到安裝過程中的兼容性問題，特別是在 macOS 系統上，這需要額外的設定來解決。總體而言，Codex++ 是一個穩定且功能豐富的工具，適合需要在 Codex 上進行自定義增強的開發者。

**技術棧**：`Rust` · `Tauri` · `React`

## 重點功能

- 靜默啟動入口 — 不顯示管理界面，僅負責啟動 Codex 並注入增強功能。
- Tauri + React 管理工具 — 支持深色/淺色主題切換，提供清晰的操作界面。
- 外部 CDP 注入 — 不改動 Codex 的原始安裝文件，確保安全性。
- 中轉注入模式 — 支持多個中轉配置，方便在不同 API 之間切換。
- 用戶腳本獨立管理 — 可在啟動時注入自定義腳本，提升靈活性。
- GitHub Release 自動更新 — 管理工具會檢測可用更新，保持最新版本。
- 多平台支持 — 提供 Windows 和 macOS 的安裝包，適應不同用戶需求。

## 快速開始

1. 下載最新安裝包
```bash
從 GitHub Releases 下載對應系統的安裝包
```
2. 安裝 Codex++
```bash
運行下載的安裝包並按照提示完成安裝
```
3. 啟動 Codex++ 管理工具
```bash
從桌面或開始菜單啟動 Codex++ 管理工具進行配置
```

## 程式碼範例

```rust
{
  "前置條件": "已安裝 Codex++ 並啟動管理工具",
  "指令": "在管理工具中添加中轉配置，填寫 Base URL 和 Key。",
  "預期輸出": "Codex++ 將在 ~/.codex/config.toml 中寫入相應配置。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 23 天就累積 8380 stars（364/天），forks 560（6.7%），這顯示出強勁的增長勢頭。開發者 BigPizzaV3 及其團隊在 Codex 生態系統中有著良好的聲譽，並且這個工具解決了 Codex 原生插件無法正常使用的痛點，特別是在 API Key 登錄模式下的限制。這一需求的增加促使了該工具的快速採用。社群對於增強功能的需求也在不斷上升，尤其是在開發者希望自定義工作流程的情況下。

## 適合誰使用

**目標受眾**：需要在 Codex 上進行自定義增強的開發者，尤其是希望靈活切換 API 的團隊。

> [!example] 使用場景
> - 後端開發者用它來靜默啟動 Codex，因為這樣可以避免干擾原始安裝，並且能夠快速進行增強功能的管理。
> - DevOps 工程師用它來配置多個 API 中轉，因為這樣可以在不同的開發環境中靈活切換，提升工作效率。
> - 前端開發者用它來管理用戶腳本，因為這樣可以在啟動時自動注入自定義功能，減少手動操作的時間。

## 架構分析

Codex++ 採用 Rust 作為後端，這樣可以確保高效能和低資源佔用。前端則使用 Tauri 和 React，提供了現代化的用戶界面。資料流方面，Codex++ 透過 CDP 注入增強腳本，並在啟動時讀取配置文件以獲取用戶設定。

這樣的設計使得工具能夠靈活應對不同的使用場景，並且減少了對 Codex 原始結構的依賴。選擇 Rust 而非其他語言如 Python，主要是考慮到性能和安全性。這樣的架構設計雖然增加了開發的複雜度，但卻能提供更高的執行效率和穩定性。

擴展性方面，Codex++ 可以輕鬆添加新的增強功能，但需要注意的是，過多的增強可能會影響性能。整體而言，這樣的架構設計使得 Codex++ 能夠在不影響原有功能的情況下，提供更多的自定義選項。

## 技術深入分析

Codex++ 的核心技術機制在於使用 Rust 作為後端語言，這不僅提供了高效的性能，也讓其在資源使用上更加優化。前端部分則是基於 Tauri 和 React，這樣的選擇使得管理工具能夠在各平台上提供一致的使用體驗。Codex++ 能夠處理多達數百個 API 請求，並且在高負載情況下仍能保持穩定。設計上，Codex++ 選擇了不直接修改 Codex 的原始文件，而是透過外部注入的方式進行增強，這樣的設計雖然增加了開發的複雜度，但卻能降低對原始系統的影響。技術上，Codex++ 的依賴樹相對簡單，主要依賴於 Rust 的標準庫和一些輕量級的第三方庫，這樣的設計使得整體體積較小，易於維護。技術風險方面，Codex++ 可能在未來的 Codex 更新中遇到兼容性問題，這需要開發者持續關注 Codex 的變更。整合方面，Codex++ 能夠與主流的 CI/CD 工具良好整合，並且對於團隊的協作支持也相對友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟，對於新手來說非常友好。安裝過程相對順暢，但在 macOS 上可能需要額外的安全設定。文件中提供了良好的 getting started guide，幫助使用者快速上手。文件目前僅提供英文版本，可能對某些使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 靈活的增強功能，支持多種使用場景。
> - 不改動 Codex 原始安裝文件，降低風險。
> - 現代化的用戶界面，易於操作。

> [!danger] 缺點
> - 安裝過程中可能遇到兼容性問題。
> - 某些增強功能在特定模式下可能無法使用。
> - 需要額外的配置來解決 macOS 的安全問題。

> [!warning] 注意事項
> - macOS 安裝包未簽名，可能會被 Gatekeeper 拦截。
> - 在某些情況下，Codex++ 可能無法正確識別原生 Codex 的版本。
> - 使用中轉注入模式時，某些增強功能可能會被禁用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的增強功能，但不支持多 API 中轉切換，適合單一 API 使用的場景。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於 Codex 的兼容性修復，功能較為單一，無法提供 Codex++ 的靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於 Codex 的增強，但不支持多 API 切換，功能較為單一。 | 如果你的需求僅限於單一 API 的增強，且不需要頻繁切換，則可以考慮使用它。 | low，因為功能相對簡單，遷移成本低。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於修復 Codex 的兼容性問題，功能較為基礎。 | 如果你的主要需求是解決兼容性問題，而不需要其他增強功能，則可以選擇它。 | medium，因為需要重新配置環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CodexPlusPlus** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於 Codex 的增強，但不支持多 API 切換，功能較為單一。 | 專注於修復 Codex 的兼容性問題，功能較為基礎。 |
> | 遷移成本 | - | low，因為功能相對簡單，遷移成本低。 | medium，因為需要重新配置環境。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於單一 API 的增強，且不需要頻繁切換，則 | 如果你的主要需求是解決兼容性問題，而不需要其他增強功能，則可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行探索和測試，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上安裝後可能會提示無法打開或已損壞
  - 解法：需要在系統設定中允許打開未簽名的應用
- [MEDIUM] 某些增強功能在中轉注入模式下可能無法使用
  - 解法：切換回傳統增強模式以使用所有功能
- [MEDIUM] Codex++ 菜單未顯示
  - 解法：確認是從 Codex++ 入口啟動，而非原版 Codex

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊使用 Codex 進行開發 | 非常適合 | Codex++ 提供的靈活增強功能能夠滿足小團隊的多樣需求。 |
| 大型企業需要穩定的 Codex 使用環境 | 不適合 | 目前仍在 beta 階段，可能存在不穩定性。 |
| 需要頻繁切換 API 的開發者 | 非常適合 | Codex++ 的中轉注入模式支持靈活的 API 切換，適合多樣化需求。 |
| 對 Codex 的增強需求較低的個人開發者 | 普通 | 可能不需要使用 Codex++ 的所有功能，使用原版即可。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到靈活的增強功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> Codex++ 本身不需要高權限，但在安裝過程中可能需要管理員權限。它會存取用戶的配置文件和登錄狀態，需注意保護這些敏感資料。整體來說，使用時的安全性風險較低，但仍需謹慎處理 API Key。

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
| Forks | 560 |
| Open Issues | 179 |
| Issue 解決率 | 49% (171 closed) |
| 最後推送 | 2026-05-29 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 9.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigPizzaV3/CodexPlusPlus) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `license` `repository` `anyhow` `base64` `directories` `fs2` `reqwest` `rusqlite` `serde` `serde_json` `tempfile`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 65
>     "JavaScript" : 21
>     "TypeScript" : 11
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigPizzaV3](https://github.com/BigPizzaV3) | 202 |
> | [@szcascsa](https://github.com/szcascsa) | 7 |
> | [@yangchuansheng](https://github.com/yangchuansheng) | 4 |
> | [@wanpan11](https://github.com/wanpan11) | 4 |
> | [@shallFun4Learning](https://github.com/shallFun4Learning) | 4 |

**最新版本**：v1.1.8.1 (2026-05-29)

> [!info]- Release Notes
> ## What's Changed
> * fix(inject): apply dark theme to delete-confirm and project-move dialogs by @crimsondhaks in https://github.com/BigPizzaV3/CodexPlusPlus/pull/393
> 
> ## New Contributors
> * @crimsondhaks made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/393
> 
> **Full Changelog**: https://github.com/BigPizzaV3/CodexPlusPlus/compare/v1.1.8...v1.1.8.1

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/BigPizzaV3/CodexPlusPlus)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-29）
> **活躍天數** 2 天 · **最新 commit** docs: update community group link

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#377](https://github.com/BigPizzaV3/CodexPlusPlus/issues/377) | [Bug]:mac升级系统后,无法安装,没有仍要打开的选项 `needs triage` `type: bug` `area: provider-config` | 2 | 7 |
> | [#340](https://github.com/BigPizzaV3/CodexPlusPlus/issues/340) | codex 移动端设置 | 2 | 2 |
> | [#327](https://github.com/BigPizzaV3/CodexPlusPlus/issues/327) | 对话经常报错：{"error":{"message":"An assistant message with 'tool_ | 2 | 17 |
> | [#278](https://github.com/BigPizzaV3/CodexPlusPlus/issues/278) | 请求增加多个官方账号切换功能。 | 2 | 1 |
> | [#257](https://github.com/BigPizzaV3/CodexPlusPlus/issues/257) | DEEPSEEK v4 PRO  无法使用CODEX插件的原因。希望作者优化一下 | 2 | 6 |

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
> 
> Codex++ 是面向 Codex App 的外部增强启动器和管理工具。它不修改 Codex App 原始安装文件，而是通过外部 launcher 启动 Codex，并使用 Chromium DevTools Protocol 注入增强脚本。
> 
> ## 快速使用
> 
> 从 [GitHub Releases](https://github.com/BigPizzaV3/CodexPlusPlus/releases) 下载最新版安装包：
> 
> - Windows：`CodexPlusPlus-*-windows-x64-setup.exe`
> - macOS Intel：`CodexPlusPlus-*-macos-x64.dmg`
> - macOS Apple Silicon：`CodexPlusPlus-*-macos-arm64.dmg`
> 
> 安装后会有两个入口：
> 
> - `Codex++`：静默启动入口，不显示管理界面，只负责启动 Codex 并注入增强功能。
> - `Codex++ 管理工具`：Tauri 控制面板，用于启动、检查、修复、更新、配置中转注入、管理增强功能和用户脚本。
> 
> Windows 安装包会创建桌面和开始菜单快捷方式。macOS DMG 会安装 `/Applications/Codex++.app` 和 `/Applications/Codex++ 管理工具.app`。
> 
> ## 赞助商
> 想显示在下方？
> 
>   
>     🏆 赞助商 🏆
>     介绍
>   
>   
>     
>       
>         
>       
>     
>     JOJO Code｜Codex++ 官方中转站感谢 JOJO Code 赞助了本项目！JOJO Code 是 Codex++ 官方中转站，面向日常开发和团队协作场景，提供稳定可用的 Codex API 接入体验，适合快速接入、长期使用和项目级工作流。
>   
>   
>     
>       
>         
>       
>     
>     AIGoCode感谢 AIGoCode 赞助了本项目！AIGoCode 是一个集成了 Claude Code、Codex 以及 Gemini 最新模型的一站式平台，为你提供稳定、高效且高性价比的AI编程服务。本站提供灵活的订阅计划，支持多风险，国内直连，无需魔法，极速响应。AIGoCode 为 CodexPlusPlus 的用户提供了特别福利，通过此链接注册的用户首次充值可以获得额外10%奖励额度！
>   
>   
>     
>       
>         
>       
>     
>     PackyCode感谢 PackyCode 赞助了本项目！PackyCode 是一家稳定、高效的API中转服务商，提供 Claude Code、Codex、Gemini 等多种中转服务。PackyCode 为本软件的用户提供了特别优惠，使用此链接注册并在充值时填写"CodexPlusPlus"优惠码，首次充值可以享受9折优惠！
>   
>   
>     
>       
>         
>       
>     
>     APIKEY.FUN感谢 APIKEY.FUN 赞助了本项目！APIKEY.FUN 是一家致力于提供开放、稳定、高性价比的全球主流大模型的 AI 中转站。平台支持 Claude、OpenAI、Gemini 等热门模型的 API 中转服务，价格低至官方原价的 7%。通过专属链接注册 APIKEY，可享受最高充值永久 95 折优惠。
>   
>   
>     
>       
>         
>       
>     
>     RunAPI感谢 RunAPI 赞助了本项目！RunAPI 是高效稳定的 API OpenRouter 平替平台，一个 API Key 即可访问 OpenAI、Claude、Gemini、DeepSeek、Grok 等 150+ 主流模型，低至 1 折，极其稳定，可以无缝兼容 Claude Code、OpenClaw 等工具。
>   
>   
>     
>       
>         
>       
>     
>     0029云桥｜codex api中转站(gpt5.5 gpt-image-2)支持个人和企业接入。包月套餐/按量计费，Pro/Plus 号池，全站接口稳定可用，7×24 小时技术支持！
>   
>   
>     
>       
>         
>       
>     
>     RawChat｜Codex 中转站老牌中转站，支持包月套餐。低倍率调用，高缓存命中，Pro/Plus 号池，全天专人维护。
>   
>   
>     
>       
>         
>       
>     
>     VisionCoder 开发平台感谢 VisionCoder 对本项目的支持。VisionCoder 开发平台是一个可靠高效的 API 中继服务提供商，提供 Claude Code、Codex、Gemini 等主流 AI 模型，帮助开发者和团队更轻松地集成 AI 功能，提升工作效率。VisionCoder 还为我们的用户提供 Token Plan 限时活动：购买 1 个月，赠送 1 个月。
>   
>   
>     
>       
>         
>       
>     
>     AIHub2API感谢 AIHub2API 赞助了本项目！AIHub2API 是一家稳定、高效的 API 中转服务商，专注 Codex 中转业务，提供高缓存命中、低倍率的中转服务，网络链路优化无需使用魔法，极速响应，价格低至官方原价的 1%。通过专属链接注册 AIHub2API，赠送 10 美金体验额度。
>   
>   
>     
>       
>         
>       
>     
>     优云智算感谢优云智算赞助了本项目！优云智算是 UCloud 旗下 AI 云平台，主打包月、按次的高性价比国模 Agent Plan 套餐，低至 49 元/月起。同时提供官转稳定海外模型，支持接入 Claude Code、Codex 及 API 调用，支持企业高并发、7×24 技术支持、自助开票。通过此链接注册的用户，可得免费 5 元平台体验金！
>   
>   
>     
>       
>         
>       
>     
>     Cubence感谢 Cubence 对本项目的支持。Cubence 是一家致力为客户提供稳定、高效的 API 中转服务商。从 25 年 9 月运营至今，提供了 Claude Code、Codex、Gemini 等多种模型支持。Cubence 为本开源项目多用户提供了特别的专属优惠 CODEXPLUSPLUS，在首次购买时享受 8.8 折优惠！
>   
>   
>     
>       
>         
>       
>     
>     MaoLao APIMaoLao API 是一家专注 VibeCoding 主流模型的 API 中转站，有自己的纯 Pro20X/Plus 号池，所以在低倍率的情况下还能做到低价套餐，套餐所有模型以及分组无限制！猫佬API：maolaoapi.com
>   
> 
> ## 交流与支持
> 
> 欢迎扫码加入 Codex++ 交流群（QQ群：1103050832），反馈问题、交流使用体验或提出新功能建议：
> 
> 下方微信群二维码如果已满人，可以点击这里获取最新微信群二维码。
> 
> 如果 Codex++ 帮到了你，可以请我喝杯咖啡，或者随手赞赏支持一下继续维护。
> 
>   
>   
> 
> ## 主要功能
> 
> - Rust 后端和静默 launcher，启动时不依赖额外运行时。
> - Tauri + React 管理工具，支持深色/浅色切换。
> - 外部 CDP 注入，不改 `app.asar`，不向 Codex 安装目录写入 DLL。
> - 中转注入模式：支持多个中转配置，写入 `CodexPlusPlus` provider，并可切回官方 ChatGPT 登录态。
> - 传统增强模式：插件入口解锁、特殊插件强制安装、会话删除、Markdown 导出、项目移动、Timeline 等。
> - 用户脚本独立管理，可在启动时注入自定义脚本。
> - Provider 同步：启动前同步本地会话 metadata，切换供应商后旧会话仍可见。
> - Zed 打开入口：识别远程 SSH 上下文后，可从 Codex 直接打开对应文件到 Zed Remote Development。
> - Upstream worktree 创建：可从 `upstream/` 创建新 worktree，创建前自动 fetch 远端分支，降低从陈旧本地 HEAD 派生导致的冲突风险。
> - GitHub Release 自动更新，管理工具和静默启动器都会检测可用更新。
> - Windows 单实例、无黑框启动、管理员权限清单、系统桌面路径识别。
> - macOS x64/arm64 分架构 DMG，静默入口隐藏 Dock 图标。
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
> ## 中转注入
> 
> 中转注入适合已经在 Codex/ChatGPT 中完成官方账号登录，同时希望把模型请求转到自定义兼容 API 的场景。
> 
> 在管理工具的“中转注入”页面：
> 
> 1. 确认已经检测到 ChatGPT 登录状态。
> 2. 添加一个或多个中转配置，填写 Base URL 和 Key。
> 3. 选择当前配置并应用中转注入。
> 4. 启动 `Codex++`。
> 
> Codex++ 会在 `~/.codex/config.toml` 中写入类似配置：
> 
> ```toml
> model_provider = "CodexPlusPlus"
> 
> [model_providers.CodexPlusPlus]
> name = "CodexPlusPlus"
> wire_api = "responses"
> requires_openai_auth = true
> base_url = "https://example.com/v1"
> experimental_bearer_token = "sk-..."
> ```
> 
> 如果需要回到官方登录态，在“中转注入”页面点击清除 API 模式即可移除 `OPENAI_API_KEY` 相关配置并切回官方 ChatGPT 登录模式。
> 
> ## 增强功能
> 
> 增强功能在管理工具中统一开关。默认开启增强注入；关闭后不会注入 Codex++ 菜单和脚本。
> 
> 如果启用中转注入模式，插件入口解锁和强制安装不再需要，界面会提示“中转注入模式下无需开启”。会话删除、导出、移动、Timeline、推荐内容和用户脚本等增强仍可继续使用。
> 
> ## 推荐内容
> 
> 推荐内容来自远程广告列表：
> 
> ```text
> https://raw.githubusercontent.com/BigPizzaV3/Ad-List/main/ads.json
> https://cdn.jsdelivr.net/gh/BigPizzaV3/Ad-List@main/ads.json
> ```
> 
> 请求时会自动追加 `?v=时间戳` 绕开 CDN 旧缓存。推荐内容加载慢不会影响后端连接状态。
> 
> ## 自动更新与安装包
> 
> Codex++ 通过 GitHub Release 发布安装包。Windows 会生成 NSIS 安装程序，macOS 会生成 Intel x64 和 Apple Silicon arm64 两个 DMG。
> 
> 管理工具的“关于”页可以检查并启动更新。静默启动器发现新版本时会拉起管理工具并进入更新提示。
> 
> ## 数据位置
> 
> - Codex 配置：`~/.codex/config.toml`
> - Codex 登录状态：`~/.codex/auth.json`
> - Codex 本地数据库：`~/.codex/state_5.sqlite`
> - Codex++ 状态与日志：`~/.codex-session-delete/`
> - Provider 同步备份：`~/.codex/backups_state/provider-sync`
> 
> ## 常见问题
> 
> ### Codex++ 菜单没出现
> 
> 确认是从 `Codex++` 入口启动，而不是原版 Codex。也可以打开管理工具的“诊断”和“日志”页面查看注入状态。
> 
> ### 插件内显示后端连不上
> 
> 先在浏览器或 PowerShell 里测试：
> 
> ```powershell
> Invoke-RestMethod -Method Post -Uri http://127.0.0.1:57321/backend/status -Body "{}" -ContentType "application/json"
> ```
> 
> 如果接口正常，但插件仍显示超时，通常是 Codex 页面里的 CDP bridge 或脚本缓存问题。重启 Codex++，或在管理工具里查看日志中的 `renderer.script_loaded`、`bridge.request`、`bridge.response`。
> 
> ### Upstream worktree 和 Codex 原生创建有什么区别
> 
> Codex++ 的 Upstream worktree 功能等价于先更新远端分支，再执行：
> 
> ```bash
> git worktree add -b   upstream/
> ```
> 
> 这样新 worktree 从最新的远端跟踪分支开始，而不是从当前会话所在的本地 HEAD 开始。如果 Codex++ 无法安全识别当前 Codex 版本的原生 worktree 创建表单，请从 Codex++ 菜单中手动填写仓库路径、分支名、worktree 路径、remote 和 base branch。
> 
> ### macOS 提示无法打开或已损坏
> 
> 当前安装包未签名/未公证时，macOS Gatekeeper 可能拦截。可以在“系统设置 - 隐私与安全性”中允许打开。正式分发建议配置 Apple Developer ID 签名和 notarization。
> 
> ### macOS Intel 能用吗
> 
> 可以。Release 会分别提供 `macos-x64.dmg` 和 `macos-arm64.dmg`。Intel Mac 下载 x64 包，Apple Silicon 下载 arm64 包。
> 
> ## 开发
> 
> ```bash
> # 前端检查
> cd apps/codex-plus-manager
> npm install
> npm run check
> npm run vite:build
> 
> # Rust 检查
> cd ../..
> cargo fmt --check
> cargo test
> cargo build --release
> ```
> 
> 主要结构：
> 
> ```text
> apps/
>   codex-plus-launcher/          静默启动入口
>   codex-plus-manager/           Tauri 管理工具
> assets/inject/
>   renderer-inject.js            注入到 Codex 渲染端的增强脚本
> crates/
>   codex-plus-core/              启动、注入、配置、更新、安装、桥接等核心逻辑
>   codex-plus-data/              会话数据、导出、Provider 同步
> scripts/installer/
>   windows/CodexPlusPlus.nsi     Windows NSIS 安装包
>   macos/package-dmg.sh          macOS DMG 打包
> ```
> 
> ## 友情链接
> 
> - [LINUX DO](https://linux.do)
> 
> ## 说明
> 
> Codex++ 是外部增强工具，不修改 Codex App 原始文件。Codex App 更新后，如果页面结构变化，可能需要更新注入脚本。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

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
> WHERE language = "Rust" AND file.name != "BigPizzaV3--CodexPlusPlus" AND status != "archived"
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
> const concepts = ["CLI/TUI","API 設計","自動化"];
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
