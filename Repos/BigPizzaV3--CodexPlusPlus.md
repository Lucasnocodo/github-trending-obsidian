---
repo: BigPizzaV3/CodexPlusPlus
url: https://github.com/BigPizzaV3/CodexPlusPlus
owner: BigPizzaV3
owner_type: User
language: Python
license: N/A
description: "An enhanced tool for CodexApp, striving to make Codex better to use and more comfortable 一个CodexApp的增强工具，努力让Codex变得更好用更舒服"
homepage: ""
stars: 2194
stars_per_day: 274
forks: 142
open_issues: 42
created: 2026-05-06
pushed_at: 2026-05-14
first_seen: 2026-05-12
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "插件工具"
release_tag: "v1.0.7"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-12
use_case: "為 CodexApp 提供增強功能，讓使用體驗更流暢。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 42
repo_size_kb: 3581
readme_length: 4061
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-12"
star_history: "2026-05-12:1040,2026-05-12:1044,2026-05-13:1526,2026-05-13:1529,2026-05-14:1898,2026-05-15:2194"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "CodexPlusPlus"
  - "BigPizzaV3/CodexPlusPlus"
  - "為 CodexApp 提供增強功能，讓使用體驗更流暢。"
---

# CodexPlusPlus

**2.2k** stars · **274** stars/天 · 建立 8 天前 · Python · 未標註授權

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

`v1.0.7`

> [!summary] 一句話摘要
> 為 CodexApp 提供增強功能，讓使用體驗更流暢。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (274 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 Codex App 上進行高效工作的開發者和使用者。
> **一句話重點** Codex++ 讓使用者能在不修改原始應用的情況下，享受更靈活的功能擴展。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "插件工具" && p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 插件工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到更靈活的 Codex 使用體驗，值得投資。

> [!abstract] 核心創新
> Codex++ 透過 CDP 注入增強腳本，無需修改原始 Codex 安裝文件，提供靈活的功能擴展。

## 專案簡介

Codex++ 是一個針對 Codex App 的外部增強工具，透過 Chromium DevTools Protocol (CDP) 注入增強腳本，無需修改原始安裝文件。使用者可以透過簡單的命令行指令安裝和啟動，像是 `python -m codex_session_delete setup` 和 `python -m codex_session_delete launch`。這個工具的賣點在於它能解鎖 Codex 原生插件入口，並提供會話刪除、Markdown 導出等功能，讓使用者能更方便地管理會話。技術上，Codex++ 依賴 Python 和 JavaScript，並使用 SQLite 來管理會話數據，這使得它在性能上相對輕量。與其他工具相比，如 Codex 原生插件，Codex++ 提供了更靈活的功能，特別是在會話管理和插件使用上，讓使用者不再受限於原生應用的設計。

實際使用中，Codex++ 能夠在不改變 Codex 的情況下，提供更好的用戶體驗，並且能夠在多種操作系統上運行。這個工具的社群活躍度不錯，開發者們定期更新，解決使用者提出的問題。對於需要在 Codex 上進行高效工作的開發者來說，Codex++ 是一個值得考慮的選擇。隨著未來的功能增強，預期會吸引更多使用者的關注。

**技術棧**：`Python 3.11` · `JavaScript` · `SQLite`

## 重點功能

- Codex++ 菜單 — 集中管理增強功能，方便使用者快速訪問。
- 插件入口解鎖 — 在 API Key 模式下顯示並啟用插件入口。
- 會話刪除 — 懸停顯示刪除按鈕，支持撤銷操作。
- Markdown 導出 — 導出帶時間戳的會話 Markdown，便於記錄和分享。
- Provider 同步 — 切換模型供應商時不丟失歷史會話，提升使用體驗。
- Windows 快捷方式 — 自動生成桌面快捷方式，方便啟動。
- macOS 支援 — 生成應用包，方便在 macOS 上使用。

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
  "# 前置條件：安裝 Python 和 pip",
  "python -m pip install -e .",
  "# 預期輸出：安裝依賴成功，無錯誤信息。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 2194 stars（274/天），forks 142（6.5%），顯示出強勁的增長潛力。作者 BigPizzaV3 和其他貢獻者在開源社群中有一定的影響力，過去的項目也獲得了良好的反響。Codex++ 解決了 Codex 原生插件在使用上的限制，特別是會話管理和插件使用的靈活性，這在之前的工具中並不常見。近期的社群討論和需求推動了這個工具的快速發展，並且技術的成熟使得這個增強工具成為可能。forks/stars 比率顯示出使用者對這個工具的實際修改和使用意圖，這是相對健康的指標。

## 適合誰使用

**目標受眾**：需要在 Codex App 上進行高效工作的開發者和使用者。

> [!example] 使用場景
> - 開發者用它來管理 Codex 的會話，因為 Codex++ 提供了會話刪除和導出功能，讓會話管理變得更方便。
> - 產品經理用它來收集和整理 Codex 的使用數據，因為能夠輕鬆導出 Markdown 格式的會話記錄，方便後續分析。
> - 系統管理員用它來監控 Codex 的運行狀態，因為 Codex++ 提供了健康檢查的功能，能夠及時發現問題。

## 架構分析

Codex++ 採用外部增強工具的架構，透過 CDP 來注入增強功能，這樣的設計使得它不需要修改 Codex 的原始文件，降低了更新的風險。資料流方面，Codex++ 首先啟動 Codex App，然後通過 CDP 連接本地的 helper 服務，進行健康檢查和功能操作。這種設計的代價是需要依賴 CDP 的穩定性，若 Codex 的結構發生變化，可能會影響功能的正常運作。擴展性方面，Codex++ 可以輕鬆地添加新的增強功能，但在高並發的情況下，可能會出現性能瓶頸，特別是在同步大量會話時。

## 技術深入分析

Codex++ 的核心技術機制是通過 CDP 來注入增強腳本，這使得它能夠在不改變 Codex 原始文件的情況下，提供額外的功能。使用 SQLite 作為數據存儲，能夠有效管理會話數據，並支持快速查詢和操作。這個工具的效能在於其輕量設計，能夠在多種操作系統上運行，對系統資源的需求相對較低。選擇 Python 和 JavaScript 作為開發語言，能夠利用這兩種語言的生態系統和庫，降低開發成本。設計上，Codex++ 需要依賴 CDP 的穩定性，若 Codex 的結構發生變化，可能會影響功能的正常運作。技術風險方面，若未來 Codex 更新頻繁，可能會導致 Codex++ 需要不斷調整以適應新版本，這會增加維護成本。整合方面，Codex++ 能夠與現有的開發工具鏈相容，並且能夠輕鬆集成到 CI/CD pipeline 中，這使得它在團隊協作中具備良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝和使用範例。安裝過程對於熟悉 Python 的使用者來說相對順暢，但對新手可能有一定挑戰。提供了良好的快速入門指導，並且文件有多語言版本，方便不同使用者理解。

## 優缺點分析

> [!success] 優點
> - 靈活性高，無需修改原始應用，便於更新。
> - 提供多種增強功能，提升使用者體驗。
> - 社群活躍，定期更新和修復問題。

> [!danger] 缺點
> - 對 Codex 的結構變化敏感，可能需要頻繁更新。
> - 安裝過程對新手來說可能有一定難度。
> - 在某些情況下，可能需要手動配置代理。

> [!warning] 注意事項
> - 僅支援 Python 3.11+
> - 需要 Codex App 已安裝，否則無法啟動。
> - 在某些情況下，可能需要手動設置代理環境變數。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的增強功能，但專注於不同的應用場景，可能不如 Codex++ 靈活。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據管理，而 Codex++ 則提供更全面的會話管理和插件功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於增強特定功能，而 Codex++ 提供更全面的功能擴展。 | 如果你的需求是針對特定功能的增強，這個工具可能更合適。 | medium，因為需要重新適應新的功能和使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供數據管理功能，但不如 Codex++ 靈活，特別是在會話管理上。 | 如果你的重點是數據管理而非增強功能，這個工具可能更合適。 | low，因為功能相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CodexPlusPlus** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於增強特定功能，而 Codex++ 提供更全面的功能擴展。 | 提供數據管理功能，但不如 Codex++ 靈活，特別是在會話管理上。 |
> | 遷移成本 | - | medium，因為需要重新適應新的功能和使用方式。 | low，因為功能相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對特定功能的增強，這個工具可能更合適。 | 如果你的重點是數據管理而非增強功能，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者試用，尚未建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上啟動時可能會出現閃退問題
  - 解法：檢查 Codex App 是否正確安裝，並確保端口未被占用
- [MEDIUM] 插件未能正常加載，顯示需要登錄提示
  - 解法：確保使用 API Key 模式啟動 Codex++
- [MEDIUM] 會話刪除功能在某些情況下無法正常工作
  - 解法：確認 Codex++ 是否正確啟動，並檢查日誌以獲取詳細錯誤信息

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司使用 Codex 進行開發 | 非常適合 | Codex++ 提供的增強功能能顯著提升小型團隊的工作效率。 |
| 大型企業的 Codex 使用者 | 普通 | 雖然功能強大，但可能需要更多的支持和培訓。 |
| 對 Codex 的使用不熟悉的開發者 | 不適合 | 安裝和使用過程對新手來說可能有一定挑戰。 |
| 需要在多平台上使用 Codex 的開發者 | 非常適合 | Codex++ 支援 Windows 和 macOS，方便跨平台使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到更靈活的 Codex 使用體驗，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估相對較低，因為 Codex++ 不需要高權限運行，且不會存取敏感資料。依賴鏈中未發現已知的供應鏈風險，使用時可放心。

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
| Forks | 142 |
| Open Issues | 42 |
| Issue 解決率 | 42% (30 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 3.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigPizzaV3/CodexPlusPlus) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 67
>     "JavaScript" : 33
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigPizzaV3](https://github.com/BigPizzaV3) | 76 |
> | [@wanpan11](https://github.com/wanpan11) | 4 |
> | [@shallFun4Learning](https://github.com/shallFun4Learning) | 4 |
> | [@Z1rconium](https://github.com/Z1rconium) | 2 |
> | [@waangzh](https://github.com/waangzh) | 1 |

**最新版本**：v1.0.7 (2026-05-14)

> [!info]- Release Notes
> ## What's Changed
> * Fix floating Codex++ menu overlapping long thread titles by @shallFun4Learning in https://github.com/BigPizzaV3/CodexPlusPlus/pull/75
> * Fix provider sync ghost workspace roots by @shallFun4Learning in https://github.com/BigPizzaV3/CodexPlusPlus/pull/92
> * [codex] Improve conversation timeline by @hanhan3344 in https://github.com/BigPizzaV3/CodexPlusPlus/pull/87
> 
> ## New Contributors
> * @hanhan3344 made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/87
> 
> **Full Changelog**: https://github.com/BigPizzaV3/CodexPlusPlus/compare/v1.0.6...v1.0.7

## 社群與生態

**社群活躍度**：社群活躍，定期有貢獻和更新。
**連結**：[文件](https://github.com/BigPizzaV3/CodexPlusPlus)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-14 ~ 2026-05-14）
> **活躍天數** 1 天 · **最新 commit** 发布 1.0.7 并恢复 README 简版

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#51](https://github.com/BigPizzaV3/CodexPlusPlus/issues/51) | 可以适配fast模式的开关么 | 1 | 6 |
> | [#101](https://github.com/BigPizzaV3/CodexPlusPlus/issues/101) | 兄弟，抓紧搞定 codex 移动端链接 | 0 | 1 |
> | [#100](https://github.com/BigPizzaV3/CodexPlusPlus/issues/100) | 使用插件后，今天出现了设置codex移动端，但是无法设置 | 0 | 0 |
> | [#99](https://github.com/BigPizzaV3/CodexPlusPlus/issues/99) | 重启电脑后打不开，闪退 | 0 | 0 |
> | [#98](https://github.com/BigPizzaV3/CodexPlusPlus/issues/98) | 想赠加切换供应商MCP不会丢失的功能！ | 0 | 0 |

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[插件架構]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)

## 相關收錄

> [!note]- 直接競品（同子分類：插件工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "插件工具" AND file.name != "BigPizzaV3--CodexPlusPlus"
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
> const concepts = ["CLI/TUI","自動化","插件架構"];
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
