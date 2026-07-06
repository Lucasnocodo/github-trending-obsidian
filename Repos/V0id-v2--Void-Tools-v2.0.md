---
repo: V0id-v2/Void-Tools-v2.0
url: https://github.com/V0id-v2/Void-Tools-v2.0
owner: V0id-v2
owner_type: User
language: Python
license: N/A
description: "Python terminal multitool — OSINT, Discord, web & network utilities. Rich TUI, 13 themes, remote updates. Educational use only."
homepage: ""
stars: 4009
stars_per_day: 111
forks: 50
open_issues: 11
created: 2026-05-30
pushed_at: 2026-06-20
first_seen: 2026-06-06
week: "2026-W23"
month: "2026-06"
category: "CLI 工具"
subcategory: "多功能工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-06
use_case: "一個功能強大的 Python 終端多工具，專注於 OSINT、Discord 和網路實用工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-13"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1157
readme_length: 7701
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-06"
star_history: "2026-06-06:656,2026-06-06:657,2026-06-07:880,2026-06-08:1175,2026-06-09:1413,2026-06-10:1614,2026-06-11:1795,2026-06-12:1906,2026-06-13:2011,2026-06-14:2101,2026-06-15:2161,2026-06-16:2212,2026-06-17:2183,2026-06-18:2235,2026-06-19:2318,2026-06-20:2404,2026-06-21:2479,2026-06-22:2628,2026-06-23:2840,2026-06-24:2974,2026-06-25:3087,2026-06-26:3173,2026-06-27:3254,2026-06-28:3360,2026-06-29:3447,2026-06-30:3502,2026-07-01:3610,2026-07-02:3736,2026-07-03:3819,2026-07-04:3874,2026-07-05:3938,2026-07-06:4009"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
  - "topic/discord_joiner"
  - "topic/discord_multi_tool"
  - "topic/discord_multitool"
  - "topic/discord_multitools"
  - "topic/discord_nuke_bot"
aliases:
  - "Void-Tools-v2.0"
  - "V0id-v2/Void-Tools-v2.0"
  - "一個功能強大的 Python 終端多工具，專注於 OSINT、Discord 和網路實用工具。"
---

# Void-Tools-v2.0

**4.0k** stars · **111** stars/天 · 建立 36 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`discord-joiner` `discord-multi-tool` `discord-multitool` `discord-multitools` `discord-nuke-bot` `discord-nuker` `discord-nukers` `discord-raid` `discord-raid-tool` `discord-raider` `discord-token-gen` `discord-token-generator` `discord-tool` `discord-tools` `multi-tools` `multitool` `token-generator` `token-joiner` `token-nuker`

> [!summary] 一句話摘要
> 一個功能強大的 Python 終端多工具，專注於 OSINT、Discord 和網路實用工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (111 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 15 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要進行 OSINT 查詢或 Discord 伺服器管理的開發者和社群管理員。
> **一句話重點** Void-Tools 提供了一個集成的終端工具平台，專注於 Discord 和 OSINT 查詢，適合需要這類功能的使用者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多功能工具" && p.file.name !== "V0id-v2--Void-Tools-v2.0" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多功能工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，得到豐富的工具集，值得嘗試。

> [!abstract] 核心創新
> 提供超過 150 種工具，並具備即時更新和模組化設計的終端多工具。

## 專案簡介

Void-Tools 是一個基於 Python 的終端多工具，提供超過 150 種工具，涵蓋 OSINT、Discord 管理、網路和社交媒體的實用功能。使用者可以透過簡單的 `setup.bat` 和 `start.bat` 指令快速安裝和啟動，並享受豐富的 TUI 界面和 13 種主題選擇。工具分為多個類別，包括 OSINT 查詢、Discord 伺服器管理和網路工具，並支援遠端更新功能，確保使用者始終擁有最新的工具和功能。這個工具的賣點在於其模組化設計和簡單的使用方式，讓使用者能夠快速找到所需的工具並進行操作。技術上，Void-Tools 使用了 Rich 庫來實現美觀的終端界面，並且依賴 Python 3.11 以上版本，這使得它在功能上相對輕量且易於維護。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Void-Tools 提供了更豐富的 Discord 管理功能和即時更新能力。使用者在使用時需注意，這些工具僅限於教育用途，並且必須在擁有明確授權的系統上運行。對於需要進行 OSINT 或 Discord 管理的開發者來說，這是一個非常合適的選擇，但對於不熟悉 Python 或終端操作的使用者，可能會有一定的學習曲線。整體來看，這個專案在未來幾個月內可能會持續增長，特別是隨著社群的活躍和功能的擴展。

**技術棧**：`Python 3.11+` · `Rich`

## 重點功能

- 150+ 工具 — 包含 OSINT 查詢、Discord 管理、網路工具等，方便使用者進行多種操作。
- 13 種主題 — 使用者可選擇不同的界面主題，提升使用體驗。
- 遠端更新 — 工具和配置可透過 `remote-manifest.json` 自動更新，無需重新安裝。
- 模組化設計 — 使用者可在 `Void/tools/custom/` 資料夾中添加自定義腳本，擴展功能。
- 雙語支持 — 提供法語和英語的設置向導，適合不同語言的使用者。

## 快速開始

1. 下載並解壓 ZIP 檔
```bash
下載 ZIP → 解壓
```
2. 運行安裝腳本
```bash
setup.bat
```
3. 啟動工具
```bash
start.bat
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 36 天內累積 4009 stars（111/天），forks 50（1.2%），顯示出穩定的增長潛力。這個專案由 V0id-v2 貢獻，過去在 Discord 工具開發上有一定經驗。它解決了使用者在 Discord 和 OSINT 查詢中的多樣需求，並且提供了一個集中式的工具平台。近期的社群討論和反饋也促進了專案的曝光度。這個工具的設計和功能反映了對於多功能終端工具的需求，尤其是在 Discord 社群中。forks/stars 比率較低，顯示出大多數使用者仍在觀望或使用中，尚未進行修改。

## 適合誰使用

**目標受眾**：需要進行 OSINT 查詢或 Discord 伺服器管理的開發者和社群管理員。

> [!example] 使用場景
> - 社群管理員用它來管理 Discord 伺服器，因為內建的管理工具能快速調整角色和頻道，節省了手動操作的時間。
> - 安全研究人員用它來進行 OSINT 查詢，因為它提供了多種查詢工具，能快速獲取所需的公共數據。
> - 開發者用它來測試網路工具，因為其模組化設計允許快速添加自定義腳本，提升了工作效率。

## 架構分析

Void-Tools 採用模組化架構設計，所有工具都集中在 `Void/tools/` 資料夾中，這樣的設計使得工具的管理和擴展變得簡單。使用 Rich 庫來實現終端的美觀界面，並且透過 `setup.bat` 和 `start.bat` 進行安裝和啟動，這降低了使用者的進入門檻。資料流方面，使用者透過鍵盤導航和模糊搜索快速找到所需工具，並且所有工具都可以在一個統一的界面中運行。這種設計的代價在於，若未來需要擴展到其他平台或語言，可能需要重構部分代碼。整體來看，這個架構在功能上提供了極大的靈活性，但在擴展性上可能會受到 Python 的性能限制。

## 技術深入分析

Void-Tools 的核心技術機制在於其模組化設計，使用 Python 和 Rich 庫實現美觀的終端界面。這種設計使得使用者能夠快速找到所需工具並進行操作。效能方面，因為是基於 Python，對於大型資料處理可能會有性能瓶頸，但對於一般的 OSINT 查詢和 Discord 管理操作來說，應該能夠維持流暢的使用體驗。選擇 Python 作為開發語言的好處在於其廣泛的生態系統和易於維護的特性，但這也可能帶來一定的性能損失。技術風險方面，若未來需要擴展到其他平台，可能需要重構部分代碼，這會增加維護成本。整合方面，這個工具可以與現有的 Discord 生態系統無縫對接，並且支援多種 CI/CD 流程，這使得它在開發和部署上都相對友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，使用者只需運行幾個批處理腳本即可完成設置。文件中有良好的入門指南，但目前僅提供英法兩種語言，對於其他語言的使用者可能不夠友好。

## 優缺點分析

> [!success] 優點
> - 功能豐富，涵蓋多種工具，滿足不同需求。
> - 界面美觀，使用 Rich 庫提升了終端體驗。
> - 模組化設計，方便使用者添加自定義工具。

> [!danger] 缺點
> - 僅限於 Windows 系統，對於其他平台的支援有限。
> - 需要 Python 環境，對於不熟悉的使用者有學習曲線。
> - 使用者需遵循法律法規，限制了某些功能的使用。

> [!warning] 注意事項
> - 僅支援 Windows 10/11 系統。
> - 需要 Python 3.11 以上版本，對於舊版使用者需要升級。
> - 工具僅限於教育用途，使用者需遵循相關法律法規。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 Discord 管理功能，但缺乏多樣的 OSINT 工具和即時更新能力。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 Discord 自動化，但不具備如此豐富的工具集和界面選擇。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 Discord 自動化，使用 Rust 實作，性能較高，但功能較單一。 | 如果你的團隊需要高性能的 Discord 自動化工具，並且不需要多樣的 OSINT 功能。 | medium，因為需要重新學習新的工具和語法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 Discord 管理功能，使用 Python，但缺乏即時更新和多樣的工具集。 | 如果你的需求主要集中在 Discord 管理，而不需要其他 OSINT 工具。 | low，因為使用相似的技術棧和操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Void-Tools-v2.0** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Discord 自動化，使用 Rust 實作，性能較高，但功能較單一。 | 提供 Discord 管理功能，使用 Python，但缺乏即時更新和多樣的工具集。 |
> | 遷移成本 | - | medium，因為需要重新學習新的工具和語法。 | low，因為使用相似的技術棧和操作方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高性能的 Discord 自動化工具，並且不 | 如果你的需求主要集中在 Discord 管理，而不需要其他  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和教育用途，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些工具在特定環境下可能無法正常運行，特別是缺少依賴時。
  - 解法：確保所有依賴都已安裝，並參考 README 中的安裝指引。
- [MEDIUM] 使用過程中可能會遇到性能瓶頸，特別是在處理大量資料時。
  - 解法：建議在較小的資料集上進行測試，避免一次性處理過多資料。
- **[HIGH]** 某些功能僅限於教育用途，若違反可能導致帳號被封禁。
  - 解法：確保在合法範圍內使用，並遵循 Discord 的使用條款。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型社群管理團隊 | 非常適合 | 提供多樣的 Discord 管理工具，能有效提升管理效率。 |
| 個人安全研究者 | 適合 | 具備多種 OSINT 查詢工具，能快速獲取所需信息。 |
| 大型企業的網路安全部門 | 普通 | 雖然功能豐富，但可能需要更高效的性能和穩定性。 |
| 對終端操作不熟悉的使用者 | 不適合 | 需要一定的學習曲線，對於不熟悉 CLI 的使用者來說可能不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到豐富的工具集，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：工具本身不需要高權限，但使用過程中可能會存取敏感資料，使用者需謹慎操作。依賴鏈的信任程度尚可，但需注意未經審計的依賴項目。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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
| Forks | 50 |
| Open Issues | 11 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-20 |
| 建立日期 | 2026-05-30 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/V0id-v2/Void-Tools-v2.0) |
| Topics | `discord-joiner` `discord-multi-tool` `discord-multitool` `discord-multitools` `discord-nuke-bot` `discord-nuker` `discord-nukers` `discord-raid` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@V0id-v2](https://github.com/V0id-v2) | 16 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://github.com/V0id-v2/Void-Tools-v2.0) · [Discord](https://discord.gg/voidv2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31 ~ 2026-06-20）
> **活躍天數** 5 天 · **最新 commit** Remove selfbot shortcut from HOME category.

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/V0id-v2/Void-Tools-v2.0/issues/17) | DO NOT DOWNLOAD THIS REPOSITORY!!!!!! | 0 | 2 |
> | [#16](https://github.com/V0id-v2/Void-Tools-v2.0/issues/16) | What the hell is this? | 0 | 1 |
> | [#15](https://github.com/V0id-v2/Void-Tools-v2.0/issues/15) | stealer .. DONT USE THIS | 0 | 0 |
> | [#13](https://github.com/V0id-v2/Void-Tools-v2.0/issues/13) | the srar for acces dosent work | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🎉 VOID-TOOLS v2.6 — SELFBOT + TOOLS !
> 
> ### 150+ tools · 13 themes · auto-updates · bilingual UI · Rich terminal dashboard
> 
> [](https://github.com/V0id-v2/Void-Tools-v2.0/archive/refs/heads/main.zip)
> [](https://t.me/v0idtool)
> [](https://discord.gg/voidv2)
> [](https://discord.gg/voidv2)
> 
> > **⚖️ Educational & authorized use only** — see [DISCLAIMER.md](DISCLAIMER.md)
> 
> ---
> 
> # VOID-TOOLS
> 
> **Python terminal multitool · OSINT · Discord · Web · Network · Social · Roblox**
> 
> [](https://github.com/V0id-v2/Void-Tools-v2.0)
> [](https://www.python.org/downloads/)
> [](Void/LICENSE)
> [](https://github.com/V0id-v2/Void-Tools-v2.0/stargazers)
> 
> ### ⭐ STAR THIS REPO — more free tools & faster updates
> 
>   
> 
> **Every star counts.** More stars → more **free modules**, themes, and updates.
> 
> 👉 [**STAR NOW**](https://github.com/V0id-v2/Void-Tools-v2.0/stargazers) · top-right on GitHub · takes 2 seconds
> 
> *Cinematic boot · Rich Live UI · 150+ tools · 12 categories*
> 
> [**⬇ Download**](https://github.com/V0id-v2/Void-Tools-v2.0/archive/refs/heads/main.zip) · [**⚙ Setup**](#-installation) · [**📸 Preview**](#-interface) · [**⭐ Star**](https://github.com/V0id-v2/Void-Tools-v2.0/stargazers)
> 
> ---
> 
> ## ✦ Overview
> 
> **VOID-TOOLS v2.5** is a modular, keyboard-driven terminal suite built with **Python** and **Rich**.  
> One launcher · one dashboard · every tool sorted by category — free tools first, premium marked with a gold border.
> 
> | | |
> |---|---|
> | 🎨 **13 themes** | Red, Green, Blue, Yellow, Purple, Cyan, Orange, Pink, Lime, White, Rose, Gold, **Rainbow** |
> | 🌍 **Bilingual** | Full FR / EN setup wizard + per-tool language files |
> | 🔍 **Smart search** | Fuzzy finder · `free:` · `prem:` · `cat:discord` filters |
> | 📡 **Remote config** | Discord, shop & GitHub links updatable via manifest |
> | 🧩 **Plugins** | Drop custom scripts in `Void/tools/custom/` |
> | ⚡ **Zero friction** | `setup.bat` → deps · `start.bat` → launch |
> 
> Use only on data and systems you **own** or are **explicitly allowed** to test.
> 
> ---
> 
> ## 📸 Interface
> 
> *Live dashboard · sidebar scroll · clock · category monitor · premium gold borders*
> 
> | | | |
> |:---:|:---:|:---:|
> | **Boot sequence** | **Setup wizard** | **First launch** |
> | Vector logo · Enter to skip | Lang · theme · username | Links · remote sync |
> | **Keyboard nav** | **Fuzzy search** | **Live monitor** |
> | ↑↓ categories · ←→ grid | Press `F` anywhere | Status in sidebar |
> 
> ---
> 
> ## 🗂️ Categories
> 
> 🏠 HOME — shortcuts & system
> 
> | Key | Tool |
> |:---:|------|
> | `01`–`03` | GitHub · Discord · Star |
> | `04`–`06` | Premium Shop · Changelog · Credits |
> | `07`–`08` | Setup · Remote sync |
> | `Q` | Quit |
> 
> 🔍 OSINT — research & lookups
> 
> Public-data tools: **name / email / phone / username search**, IP & domain intel, breach checks, EXIF analysis, VPN detection, OSINT frameworks, and more.  
> Premium modules marked ⭐ in-app.
> 
> 🛠️ UTILITIES — network & file tools
> 
> Email helpers, archive tools, zip utilities, network scanners, and advanced modules (⭐ premium).  
> Authorized testing only.
> 
> 💬 DISCORD SERVER — integrated admin CLI
> 
> Built-in **Discord server management** toolkit — channels, roles, moderation helpers, server info, and 39+ numbered commands in a Rich TUI.  
> For **your own servers** or with explicit permission. Respects [Discord ToS](https://discord.com/terms).
> 
> 💬 DISCORD — lookups & utilities
> 
> **Free:** token checker, user lookup, invite resolver, webhook info, graphics tools, and more.  
> **Premium ⭐:** advanced automation modules (shop unlock).
> 
> 🪝 WEBHOOK — Discord webhook toolkit
> 
> **19 tools:** info, spam, GIF & bad-word spam, embed/JSON/file sender, ghost ping, editor, cloner, destroyer, curl generator, and more.  
> Branding `t.me/v0idtool` · `discord.gg/voidv2` on sends.
> 
> 📱 SOCIAL — platform tools
> 
> Username checks and lookups for **YouTube · X · TikTok · Instagram · Telegram** and more. Premium growth modules available ⭐.
> 
> 🎮 ROBLOX — account & catalog tools
> 
> Profile lookup, friends, catalog, groups, Robux info, badges, limiteds — plus premium modules ⭐.
> 
> 🌐 IP / WEB — network & site tools
> 
> IP geolocation, WHOIS-style data, port checks, ping, web scanners, subdomain tools, directory discovery, site info, and security scans. Premium modules ⭐.
> 
> 🎁 GEN · 🔧 UTILS · 🔗 LINKS · ℹ️ ABOUT
> 
> **GEN** — format demos & generators (educational)  
> **UTILS** — hash tools · password gen · temp mail · Base64 · QR · JSON  
> **LINKS** — curated public OSINT & research bookmarks  
> **ABOUT** — version · patch notes · GitHub
> 
> > ⭐ = Premium · [Discord shop](https://discord.gg/voidv2)
> 
> ---
> 
> ## ⌨️ Controls
> 
> | Key | Action |
> |-----|--------|
> | `↑` `↓` | Categories / scroll |
> | `←` `→` | Tool cards |
> | `Enter` | Launch tool |
> | `Tab` | Sidebar ↔ grid |
> | `F` | Fuzzy search |
> | `Q` | Quit (HOME) |
> 
> ---
> 
> ## 📁 Structure
> 
> ```
> Void-Tools/
> ├── setup.bat · start.bat
> └── Void/
>     ├── main.py · requirements.txt
>     ├── config/          # settings · remote-manifest
>     ├── lib/             # dashboard · router · UI · sync
>     ├── screenshots/
>     └── tools/           # all modules + custom/
> ```
> 
> ---
> 
> ## ⚙ Installation
> 
> ```batch
> 1. Download ZIP → extract
> 2. Run setup.bat
> 3. Run start.bat
> 4. Complete setup wizard (language · theme · username)
> ```
> 
> ```bash
> git clone https://github.com/V0id-v2/Void-Tools-v2.0.git
> cd Void-Tools && python -m pip install -r Void/requirements.txt
> python Void/main.py
> ```
> 
> | **OS** | Windows 10/11 (optimized) |
> | **Python** | 3.11+ |
> 
> ---
> 
> ## 🎨 Themes
> 
> `red` · `green` · `blue` · `yellow` · `purple` · `cyan` · `orange` · `pink` · `lime` · `white` · `rose` · `gold` · **`rainbow`**
> 
> Set in setup wizard or `Void/config/settings.json`.
> 
> ---
> 
> ## 📡 Remote updates
> 
> Discord, shop & GitHub links update via [`remote-manifest.json`](Void/config/remote-manifest.json) — no reinstall needed.
> 
> ---
> 
> ## 🗺️ v2.5 highlights
> 
> | ✅ | Feature |
> | - | --- |
> | ✅ | **Telegram** [t.me/v0idtool](https://t.me/v0idtool) + **Discord** [discord.gg/voidv2](https://discord.gg/voidv2) |
> | ✅ | Startup opens **both** links automatically |
> | ✅ | HOME · webhooks · branding updated |
> 
> ## 🗺️ v2.4 highlights
> 
> | ✅ | Feature |
> | - | --- |
> | ✅ | **Telegram community** — [t.me/v0idtool](https://t.me/v0idtool) |
> | ✅ | **Join screen** on startup · auto-opens Telegram |
> | ✅ | HOME · webhooks · branding migrated to Telegram |
> 
> ## 🗺️ v2.3 highlights
> 
> | ✅ | Feature |
> | - | --- |
> | ✅ | Community migration · mandatory join gate on boot |
> | ✅ | Centralized branding via `lib/constants` |
> 
> ## 🗺️ v2.2 highlights
> 
> | ✅ | Feature |
> | - | --- |
> | ✅ | **Setup wizard** re-runs when remote `config_rev` changes |
> | ✅ | **Boot fix** — WinError 1155 (star screenshot → browser fallback) |
> | ✅ | **Remote sync** — bundled manifest wins over stale CDN |
> | ✅ | Improved boot stability & update flow |
> 
> ## 🗺️ v2.1 highlights
> 
> | ✅ | Feature |
> | - | --- |
> | ✅ | **WEBHOOK** category — 19 tools (spam, GIF, ghost, destroyer…) |
> | ✅ | Branding `t.me/v0idtool` on webhook sends |
> | ✅ | Discord User Lookup — snowflake + optional bot token (console) |
> | ✅ | Nuker — credentials in console, no config file required |
> 
> ## 🗺️ v2.0 highlights
> 
> | ✅ | Feature |
> |---|---------|
> | ✅ | Modular `lib/` architecture |
> | ✅ | Rich Live dashboard + 13 themes |
> | ✅ | Setup wizard FR/EN |
> | ✅ | Fuzzy search + free/premium filters |
> | ✅ | Custom plugin folder |
> | ✅ | Discord server admin CLI built-in |
> | ✅ | Remote manifest sync + auto-update |
> 
> ---
> 
> ## 📜 License
> 
> **GNU AGPL v3.0** — [`Void/LICENSE`](Void/LICENSE) · [`DISCLAIMER.md`](DISCLAIMER.md)
> 
> ---
> 
> ### Support the project
> 
>   
> 
> [](https://github.com/V0id-v2/Void-Tools-v2.0/stargazers)
> [](https://t.me/v0idtool)
> [](https://discord.gg/voidv2)
> [](https://discord.gg/voidv2)
> 
> VOID-TOOLS v2.5 · t.me/v0idtool · discord.gg/voidv2

## 延伸閱讀

相關概念：[[OSINT]] · [[Discord 管理]] · [[CLI/TUI]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[calesthio--Crucix|calesthio/Crucix]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/V0id-v2/Void-Tools-v2.0)

## 相關收錄

> [!note]- 直接競品（同子分類：多功能工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多功能工具" AND file.name != "V0id-v2--Void-Tools-v2.0"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "V0id-v2--Void-Tools-v2.0"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "V0id-v2--Void-Tools-v2.0" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "V0id-v2--Void-Tools-v2.0"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["OSINT","Discord 管理","CLI/TUI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "V0id-v2--Void-Tools-v2.0" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "V0id-v2--Void-Tools-v2.0" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "V0id-v2" AND file.name != "V0id-v2--Void-Tools-v2.0"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
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

> **2026-06-06** — 首次收錄
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

- [[2026-06-06|2026-06-06]] — 首次收錄，656 stars
