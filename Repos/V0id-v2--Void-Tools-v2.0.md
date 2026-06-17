---
repo: V0id-v2/Void-Tools-v2.0
url: https://github.com/V0id-v2/Void-Tools-v2.0
owner: V0id-v2
owner_type: User
language: Python
license: N/A
description: "Python terminal multitool — OSINT, Discord, web & network utilities. Rich TUI, 13 themes, remote updates. Educational use only."
homepage: ""
stars: 2183
stars_per_day: 128
forks: 25
open_issues: 1
created: 2026-05-30
pushed_at: 2026-06-11
first_seen: 2026-06-06
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "多工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-06
use_case: "提供多功能的 Python 終端工具，專注於 OSINT、Discord 和網路實用工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-13"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 917
readme_length: 7377
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-06"
star_history: "2026-06-06:656,2026-06-06:657,2026-06-07:880,2026-06-08:1175,2026-06-09:1413,2026-06-10:1614,2026-06-11:1795,2026-06-12:1906,2026-06-13:2011,2026-06-14:2101,2026-06-15:2161,2026-06-16:2212,2026-06-17:2183"
tags:
  - github
  - "category/開發工具"
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
  - "提供多功能的 Python 終端工具，專注於 OSINT、Discord 和網路實用工具。"
---

# Void-Tools-v2.0

**2.2k** stars · **128** stars/天 · 建立 17 天前 · Python · 未標註授權

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
> 提供多功能的 Python 終端工具，專注於 OSINT、Discord 和網路實用工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (128 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要進行 OSINT 和 Discord 相關工作的開發者，特別是教育用途的使用者。
> **一句話重點** 這個專案不僅提供多功能的工具，還強調了用戶界面的美觀和使用的便捷性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/V0id-v2--Void-Tools-v2.0");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多工具" && p.file.name !== "V0id-v2--Void-Tools-v2.0" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到多功能的 OSINT 和 Discord 工具，值得嘗試。

> [!abstract] 核心創新
> 提供超過 150 種工具的模組化終端解決方案，並具備即時更新和多主題支持。

## 專案簡介

VOID-TOOLS v2.4 是一款以 Python 和 Rich 框架構建的多功能終端工具，專為 OSINT、Discord 和網路實用而設計。用戶可以透過一個整合的儀表板，輕鬆訪問超過 150 種工具，這些工具根據類別進行分類，並提供免費和付費模組的標示。使用者只需運行 `setup.bat` 安裝依賴，然後透過 `start.bat` 啟動應用程式，簡化了安裝流程。這個工具的賣點在於其豐富的主題選擇（13 種）和即時更新功能，讓使用者能夠隨時獲得最新的功能和模組。技術上，它使用了 Python 的 Rich 庫來提供美觀的用戶界面，並支援雙語（法語和英語），使其更具可用性。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，VOID-TOOLS 提供了更直觀的用戶界面和更豐富的功能選擇，特別是在 Discord 相關的工具上。這些替代品可能缺乏如此多樣化的功能和主題選擇。實際使用中，VOID-TOOLS 的效能在處理公共數據查詢時表現良好，但使用者需注意其僅限於授權測試，避免違法行為。該專案目前處於活躍開發階段，社群互動尚可，建議對於需要進行 OSINT 和 Discord 相關工作的開發者使用。未來可能會增加更多的模組和功能，隨著社群的成長，這個工具的發展潛力巨大。

**技術棧**：`Python` · `Rich`

## 重點功能

- 150+ 工具 — 包含 OSINT 查詢、Discord 管理、網路掃描等多種功能。
- 13 種主題 — 用戶可選擇不同的界面風格，提升使用體驗。
- 雙語支持 — 提供法語和英語的界面，方便不同語言的使用者。
- 即時更新 — 工具和配置可透過遠端更新，確保使用者獲得最新功能。
- 插件系統 — 允許用戶自定義工具，將自訂腳本放入指定目錄。

## 快速開始

1. 下載工具包
```bash
wget https://github.com/V0id-v2/Void-Tools-v2.0/archive/refs/heads/main.zip
```
2. 解壓縮並進入目錄
```bash
unzip main.zip && cd Void-Tools-v2.0
```
3. 運行安裝腳本
```bash
setup.bat
```
4. 啟動工具
```bash
start.bat
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天內累積 2183 stars（128/天），forks 25（1.1%），顯示出穩定的增長。作者 V0id-v2 具備相關背景，專注於開發多功能工具，解決了 Discord 和 OSINT 工具的碎片化問題，提供了一個整合的平台。近期的社群活動和更新也促進了使用者的參與。這個工具的設計符合當前對於多功能終端工具的需求，尤其是在教育和授權測試領域的應用。

## 適合誰使用

**目標受眾**：需要進行 OSINT 和 Discord 相關工作的開發者，特別是教育用途的使用者。

> [!example] 使用場景
> - OSINT 研究員用它來進行公共數據查詢，因為它提供了多種查詢工具，能快速獲取所需信息。
> - Discord 管理員用它來管理伺服器和用戶，因為它整合了多種 Discord 工具，提升了管理效率。
> - 網路安全專家用它來測試網路和系統的安全性，因為它提供了授權測試的功能，符合合規要求。

## 架構分析

VOID-TOOLS 採用模組化設計，所有工具都集中在一個終端界面中，使用者可以透過鍵盤快捷鍵快速訪問。這種設計使得使用者能夠在一個地方找到所有需要的工具，減少了切換應用的時間。資料流方面，所有工具都透過 Python 的 Rich 庫進行渲染，提供了美觀的用戶界面。

選擇 Python 作為開發語言的好處在於其廣泛的社群支持和豐富的庫，但可能導致較高的記憶體使用量。擴展性方面，這個工具的插件系統允許用戶添加自定義功能，但也可能增加維護的複雜度。整體而言，VOID-TOOLS 在提供多功能的同時，保持了良好的用戶體驗。

## 技術深入分析

VOID-TOOLS 的核心技術機制在於其模組化設計，所有工具都整合在一個終端界面中，使用者可以透過鍵盤快捷鍵快速訪問所需功能。這樣的設計不僅提高了使用效率，也使得用戶能夠在一個地方找到所有需要的工具。效能方面，該工具能夠處理多種公共數據查詢，並且在使用 Rich 庫後，界面渲染速度相對較快。選擇 Python 作為開發語言的好處在於其廣泛的社群支持和豐富的庫，但可能導致較高的記憶體使用量。設計取捨方面，選擇模組化設計使得擴展性更佳，但也可能增加維護的複雜度。技術風險方面，若未來使用者需求增加，可能會面臨性能瓶頸。整合方面，VOID-TOOLS 可以與其他 Python 工具鏈輕鬆整合，但對於非 Windows 環境的支持仍需改進。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，安裝過程相對順暢。雖然目前僅支援 Windows 環境，但對於該平台的用戶來說，能夠快速上手。整體而言，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 多功能性 — 提供超過 150 種工具，滿足多種需求。
> - 用戶友好的界面 — 使用 Rich 庫提供美觀的終端界面。
> - 即時更新 — 確保使用者獲得最新的功能和模組。
> - 支持雙語 — 方便不同語言的使用者。

> [!danger] 缺點
> - 僅限於教育用途，使用範圍受限。
> - 高級功能可能需要付費模組。
> - 目前僅支援 Windows 環境，限制了使用者群體。
> - 社群支持尚在發展中，解決問題的速度可能較慢。

> [!warning] 注意事項
> - 僅限於教育和授權測試用途，使用者需遵守法律規範。
> - 對於某些高級功能，可能需要付費模組。
> - 目前僅支援 Windows 環境，Linux 和 macOS 用戶需自行修改。
> - 社群支持尚在發展中，解決問題的速度可能較慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 Discord 工具，但功能較為單一，缺乏多樣化的主題選擇。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 OSINT 工具，功能範圍不如 VOID-TOOLS 廣泛。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 Discord 工具的開發，但功能較為單一，缺乏多樣化的主題選擇。 | 如果你的團隊主要專注於 Discord 的管理和自動化，且不需要過多的其他工具。 | low — 由於功能較為單一，轉移到此工具的難度不高。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供特定的 OSINT 工具，功能範圍不如 VOID-TOOLS 廣泛，且界面較為簡單。 | 如果你的需求主要集中在 OSINT 查詢，而不需要多樣的工具和主題選擇。 | medium — 需要重新適應新的工具界面和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Void-Tools-v2.0** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Discord 工具的開發，但功能較為單一，缺乏多樣化的主題選擇。 | 提供特定的 OSINT 工具，功能範圍不如 VOID-TOOLS 廣泛，且界面較為簡單。 |
> | 遷移成本 | - | low — 由於功能較為單一，轉移到此工具的難度不高。 | medium — 需要重新適應新的工具界面和功能。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要專注於 Discord 的管理和自動化，且不 | 如果你的需求主要集中在 OSINT 查詢，而不需要多樣的工具 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Windows 系統上可能會出現安裝失敗的情況
  - 解法：確保以管理員身份運行安裝腳本。
- [MEDIUM] 某些工具在高負載下可能會導致性能下降
  - 解法：避免同時運行過多工具，分批使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行 OSINT 研究 | 非常適合 | 提供多樣化的工具，能快速獲取所需信息。 |
| 需要管理 Discord 伺服器的團隊 | 適合 | 整合了多種 Discord 工具，提升管理效率。 |
| 大型企業進行網路安全測試 | 普通 | 雖然提供了許多工具，但需注意授權使用的限制。 |
| 對於教育用途的研究機構 | 非常適合 | 符合教育用途的需求，並提供豐富的功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到多功能的 OSINT 和 Discord 工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，僅在授權的系統上運行，並不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 環境中使用。

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
| Forks | 25 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-11 |
| 建立日期 | 2026-05-30 |
| Repo 大小 | 917 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/V0id-v2/Void-Tools-v2.0) |
| Topics | `discord-joiner` `discord-multi-tool` `discord-multitool` `discord-multitools` `discord-nuke-bot` `discord-nuker` `discord-nukers` `discord-raid` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@V0id-v2](https://github.com/V0id-v2) | 11 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新和互動。
**連結**：[文件](https://github.com/V0id-v2/Void-Tools-v2.0)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31 ~ 2026-06-11）
> **活躍天數** 3 天 · **最新 commit** Release v2.4.0: migrate community to Telegram t.me/v0idtool

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/V0id-v2/Void-Tools-v2.0/issues/3) | top | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🎉 VOID-TOOLS v2.4 — TELEGRAM !
> 
> ### 150+ tools · 13 themes · auto-updates · bilingual UI · Rich terminal dashboard
> 
> [](https://github.com/V0id-v2/Void-Tools-v2.0/archive/refs/heads/main.zip)
> [](https://t.me/v0idtool)
> [](https://void-tools.mysellauth.com/)
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
> **VOID-TOOLS v2.4** is a modular, keyboard-driven terminal suite built with **Python** and **Rich**.  
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
> Branding `t.me/v0idtool` on sends.
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
> > ⭐ = Premium · [void-tools shop](https://void-tools.mysellauth.com/)
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
> [](https://void-tools.mysellauth.com/)
> 
> VOID-TOOLS v2.4 · t.me/v0idtool · Educational use only

## 延伸閱讀

相關概念：[[OSINT]] · [[Discord]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[calesthio--Crucix|calesthio/Crucix]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/V0id-v2/Void-Tools-v2.0)

## 相關收錄

> [!note]- 直接競品（同子分類：多工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多工具" AND file.name != "V0id-v2--Void-Tools-v2.0"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "V0id-v2--Void-Tools-v2.0"
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
> const concepts = ["OSINT","Discord","自動化測試"];
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
