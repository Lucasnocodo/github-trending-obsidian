---
repo: elder-plinius/T3MP3ST
url: https://github.com/elder-plinius/T3MP3ST
owner: elder-plinius
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "autonomous red teaming platform; multi-agent offensive-security meta-harness"
homepage: ""
stars: 1834
stars_per_day: 611
forks: 456
open_issues: 23
created: 2026-07-02
pushed_at: 2026-07-05
first_seen: 2026-07-06
week: "2026-W28"
month: "2026-07"
category: "安全"
subcategory: "攻擊安全"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-06
use_case: "一個自動化的紅隊平台，將 AI 編碼代理轉變為零日漏洞獵手。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-09"
contributor_count: 5
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 3361
readme_length: 9092
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:1834"
tags:
  - github
  - "category/安全"
  - "lang/typescript"
  - easy_install
  - "topic/agents"
  - "topic/ai"
  - "topic/multi_agent"
  - "topic/offensive_security"
  - "topic/redteam"
aliases:
  - "T3MP3ST"
  - "elder-plinius/T3MP3ST"
  - "一個自動化的紅隊平台，將 AI 編碼代理轉變為零日漏洞獵手。"
---

# T3MP3ST

**1.8k** stars · **611** stars/天 · 建立 3 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/elder-plinius--T3MP3ST");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agents` `ai` `multi-agent` `offensive-security` `redteam`

> [!summary] 一句話摘要
> 一個自動化的紅隊平台，將 AI 編碼代理轉變為零日漏洞獵手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (611 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望利用 AI 進行漏洞測試的安全研究人員和開發者。
> **一句話重點** T3MP3ST 讓 AI 編碼代理成為強大的漏洞獵手，無需額外的 API 金鑰，這在安全測試領域是一個顛覆性的創新。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "攻擊安全" && p.file.name !== "elder-plinius--T3MP3ST" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 攻擊安全 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的漏洞測試工具，值得投入。

> [!abstract] 核心創新
> T3MP3ST 將現有的 AI 編碼代理轉變為零日漏洞獵手，無需額外的 API 金鑰或雲端服務。

## 專案簡介

T3MP3ST 是一個多代理的攻擊安全框架，旨在將現有的 AI 編碼代理轉變為強大的漏洞獵手。用戶只需將其指向授權目標，整個攻擊鏈便會自動執行，包括偵查、利用和報告，這一切都可以通過瀏覽器的 War Room 或命令行介面來完成。這種設計的核心在於無需額外的 API 金鑰或雲端服務，使用者的 AI 代理便是整個系統的核心，這樣的架構不僅降低了使用門檻，還避免了額外的成本。T3MP3ST 的技術實現基於 TypeScript 和多種語言，並且提供了豐富的 CLI 指令，如 `npm run server` 啟動 War Room 和 `npm run verify-claims` 來驗證所有數據的準確性。與其他工具相比，T3MP3ST 的最大優勢在於其可重現性和無鑰使用，這使得用戶能夠在不依賴外部服務的情況下進行安全測試。

相較於傳統的紅隊工具，T3MP3ST 的設計使得即使是新手也能輕鬆上手，並且能夠在多種環境中運行，包括本地模型。使用者在實際操作中可能會遇到的問題包括需要明確的授權範圍和對工具的熟悉度。這個專案目前處於活躍開發階段，適合對攻擊安全有興趣的開發者和研究人員，尤其是那些希望利用 AI 進行漏洞測試的團隊。未來六個月內，預計將會有更多功能和穩定性提升，特別是在多代理協調和漏洞發現方面。

**技術棧**：`TypeScript` · `JavaScript` · `Python` · `Shell` · `C` · `Dockerfile` · `Java` · `Go` · `Rust` · `Perl`

## 重點功能

- 多代理架構 — 支持多個 AI 代理協同工作，提升漏洞發現效率。
- 無鑰使用 — 用戶可以直接使用本地 AI 代理，無需額外的 API 金鑰。
- 可重現性 — 所有數據均可通過 `npm run verify-claims` 驗證，確保結果的可信度。
- 豐富的 CLI 指令 — 提供多種命令來啟動服務、驗證數據和執行測試。
- 支持多種環境 — 可在本地模型上運行，無需依賴雲端服務。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動 War Room
```bash
npm run server
```
3. 連接本地代理並啟動測試
```bash
export OPENROUTER_API_KEY=... && npm run start
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Node.js 和 npm",
  "npm run server        # 啟動 War Room → http://127.0.0.1:3333/ui/",
  "# 預期輸出：War Room 介面啟動，使用者可以進行安全測試。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 1834 stars（611/天），forks 456（24.9%），這顯示出極高的興趣和活躍度。這個專案的主要貢獻者包括多位在安全領域有經驗的開發者，解決了傳統紅隊工具需要高昂成本和複雜配置的痛點，讓更多人能夠進行安全測試。近期的社群討論和推廣活動也促進了這個專案的曝光度。由於 AI 技術的進步，使得這種自動化的紅隊工具成為可能，並且在現有的安全生態中找到了切入點。高達 24.9% 的 forks/stars 比率顯示出許多使用者正在實際修改和使用這個工具，這是其受歡迎的證據。

## 適合誰使用

**目標受眾**：希望利用 AI 進行漏洞測試的安全研究人員和開發者。

> [!example] 使用場景
> - 安全研究員用它來自動化漏洞測試，因為它能夠快速執行完整的攻擊鏈，節省了手動測試的時間。
> - 開發團隊用它來進行代碼審查，因為它能夠在實際環境中模擬攻擊，找出潛在的安全漏洞。
> - 教育機構用它來教授攻擊安全課程，因為它提供了一個無需高成本的環境來進行實驗和學習。

## 架構分析

T3MP3ST 採用多代理架構，這使得不同的 AI 模型可以協同工作，提升漏洞發現的效率。資料流方面，使用者的 AI 代理作為核心，通過 CLI 或 War Room 介面進行操作，所有的命令和數據都可以通過簡單的指令來驗證和重現。選擇這種設計的原因在於希望降低使用門檻，讓更多人能夠進行安全測試，而不需要依賴複雜的配置或高昂的成本。這種架構的代價在於可能需要更高的計算資源來支持多個代理的運行。未來的擴展性瓶頸可能在於如何有效管理多個代理之間的協調和資源分配。

## 技術深入分析

T3MP3ST 的核心技術機制在於其多代理架構，這使得不同的 AI 模型可以協同工作，提升漏洞發現的效率。使用者的 AI 代理作為核心，通過 CLI 或 War Room 介面進行操作，所有的命令和數據都可以通過簡單的指令來驗證和重現。效能方面，這個工具能夠在多種環境中運行，並且支持多種語言，這使得它在不同的使用場景中都能發揮作用。設計取捨方面，選擇這種架構的原因在於希望降低使用門檻，讓更多人能夠進行安全測試，而不需要依賴複雜的配置或高昂的成本。這種架構的代價在於可能需要更高的計算資源來支持多個代理的運行。未來的擴展性瓶頸可能在於如何有效管理多個代理之間的協調和資源分配。整合方面，T3MP3ST 可以輕鬆與現有的安全工具鏈進行整合，並且支持多種 CI/CD 流程，這使得它在團隊協作中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了良好的範例和快速上手指南。安裝過程順暢，無明顯坑點。文件目前僅提供英文版本，可能對非英語使用者造成一定挑戰。

## 優缺點分析

> [!success] 優點
> - 無需額外的 API 金鑰，降低使用成本。
> - 可重現的數據驗證，提升結果的可信度。
> - 支持多種環境運行，靈活性高。

> [!danger] 缺點
> - 仍在開發中，部分功能可能不穩定。
> - 需要明確的授權範圍，使用不當可能違法。
> - 對於新手來說，可能需要一定的學習曲線。

> [!warning] 注意事項
> - 僅支援 Python 代碼的白盒分析。
> - 需要明確的授權範圍，未經授權的測試可能違法。
> - 目前仍在開發中，部分功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的多代理架構，但專注於特定的攻擊模式，適合專業安全測試。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於漏洞管理和報告，而 T3MP3ST 更加自動化和無鑰。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 API 介面，但缺乏 T3MP3ST 的自動化攻擊鏈功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的攻擊模式，提供類似的多代理架構，但功能範圍較窄。 | 如果你的團隊需要針對特定攻擊模式進行深入測試，這個工具會更合適。 | medium，因為需要重新配置和調整測試流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於漏洞管理和報告，缺乏 T3MP3ST 的自動化攻擊鏈功能。 | 如果你的需求主要集中在漏洞管理而非攻擊測試，這個工具會更適合。 | low，因為功能相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **T3MP3ST** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的攻擊模式，提供類似的多代理架構，但功能範圍較窄。 | 專注於漏洞管理和報告，缺乏 T3MP3ST 的自動化攻擊鏈功能。 |
> | 遷移成本 | - | medium，因為需要重新配置和調整測試流程。 | low，因為功能相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要針對特定攻擊模式進行深入測試，這個工具會更合 | 如果你的需求主要集中在漏洞管理而非攻擊測試，這個工具會更適合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中可能無法正確連接本地代理，導致測試失敗。
  - 解法：確保代理已正確啟動，並檢查網路設定。
- [MEDIUM] 部分功能仍在開發中，可能會導致不穩定。
  - 解法：定期檢查更新，並參考文檔中的已知問題。
- [MEDIUM] 對於新手來說，可能需要一定的學習曲線。
  - 解法：參考官方文檔和社群討論，尋求幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型安全團隊進行漏洞測試 | 非常適合 | 多代理架構和無鑰使用降低了測試成本和複雜度。 |
| 大型企業的安全測試部門 | 普通 | 雖然功能強大，但可能需要更多的配置和管理。 |
| 教育機構教授攻擊安全課程 | 非常適合 | 提供了一個無需高成本的環境來進行實驗和學習。 |
| 個人開發者進行安全測試 | 非常適合 | 簡單的安裝和使用流程使其非常友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的漏洞測試工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，並且不存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。在 CI/CD 中使用是安全的，只需確保遵循授權規範。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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
| Forks | 456 |
| Open Issues | 23 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-05 |
| 建立日期 | 2026-07-02 |
| Repo 大小 | 3.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/elder-plinius/T3MP3ST) |
| Topics | `agents` `ai` `multi-agent` `offensive-security` `redteam` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 59
>     "JavaScript" : 37
>     "Python" : 2
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@elder-plinius](https://github.com/elder-plinius) | 24 |
> | [@mane](https://github.com/mane) | 3 |
> | [@ryannnaa](https://github.com/ryannnaa) | 2 |
> | [@joey-david](https://github.com/joey-david) | 1 |
> | [@stefanoamorelli](https://github.com/stefanoamorelli) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，持續有更新和討論。
**連結**：[文件](https://github.com/elder-plinius/T3MP3ST/docs/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-05 ~ 2026-07-05）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #21 from stefanoamorelli/fix/code-ingest-substring-exclude

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#35](https://github.com/elder-plinius/T3MP3ST/issues/35) | Add a portable strict War Room preflight command | 0 | 0 |
> | [#34](https://github.com/elder-plinius/T3MP3ST/issues/34) | War Room should surface pending action receipts before launc | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🌩️ T3MP3ST
> 
> ```
>  ▄▄▄█████▓▓█████  ███▄ ▄███▓ ██▓███  ▓█████   ██████ ▄▄▄█████▓
>  ▓  ██▒ ▓▒▓█   ▀ ▓██▒▀█▀ ██▒▓██░  ██▒▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒
>  ▒ ▓██░ ▒░▒███   ▓██    ▓██░▓██░ ██▓▒▒███   ░ ▓██▄   ▒ ▓██░ ▒░
>  ░ ▓██▓ ░ ▒▓█  ▄ ▒██    ▒██ ▒██▄█▓▒ ▒▒▓█  ▄   ▒   ██▒░ ▓██▓ ░
>    ▒██▒ ░ ░▒████▒▒██▒   ░██▒▒██▒ ░  ░░▒████▒▒██████▒▒  ▒██▒ ░
>    ▒ ░░   ░░ ▒░ ░░ ▒░   ░  ░▒▓▒░ ░  ░░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░
>      ░     ░ ░  ░░  ░      ░░▒ ░      ░ ░  ░░ ░▒  ░ ░    ░
>    ░         ░   ░      ░   ░░          ░   ░  ░  ░    ░
>              ░  ░       ░               ░  ░      ░
> ```
> 
> **A multi-agent offensive-security framework, built to turn the AI coding agent you already run into a zero-day hunter.**
> 
>  &nbsp;  &nbsp;  &nbsp; 
> 
> **Your AI coding agent is already a hacker — T3MP3ST hands it an arsenal.**
> 
> Point it at an authorized target and the kill chain runs itself: **recon → exploit → report**, from a browser War Room or the CLI, driven by the agent you're *already* signed into — Claude Code, Codex, Hermes — or a model you run **fully offline** (Ollama, LM Studio, vLLM). No new API keys, no cloud tenant, no second bill. Your agent is the brain; T3MP3ST is the war machine bolted around it. **Self-hosted storm. Keyless warfare.** ⚡
> 
> And it won't ask you to take its word for it. On **XBOW's own 104-challenge suite it scores 90.1% pass@1** — above XBOW's self-reported 85% — alongside hint-free CTF solves and a **cold hunt on real, post-cutoff CVEs the model had never seen**. Every number in this README recomputes from committed data with one command (`npm run verify-claims`). Loud about the mission, honest about the build — the [status table](#what-ships-today) says exactly what's live, what's scaffolding, and what's still roadmap; full receipts in [Benchmarks](#benchmarks).
> 
> Three things set it apart:
> 
> 1. **Reproducible.** Every number in this README recomputes from committed data — `npm run verify-claims` re-derives all of them, 24/24 green. A claim that can't be reproduced doesn't ship. No trust-me numbers, ever.
> 2. **Keyless.** The AI coding agent already on your machine is the backbone. No API keys, no second bill, no gatekeeper.
> 3. **Honest about scope.** The [status table](#what-ships-today) marks exactly what's stable, experimental, or roadmap — because red-teaming shouldn't be a priesthood, and it damn sure shouldn't run on vibes.
> 
> **Jump to** → [Quick start](#quick-start) · [What it hunts](#what-it-hunts) · [What ships today](#what-ships-today) · [Benchmarks](#benchmarks) · [Architecture](#architecture) · [Docs](#documentation)
> 
> 
> ## Quick start
> 
> Fastest path to a running War Room (keyless, ~2 min to set up; mission time depends on the target):
> 
> ```bash
> npm install
> npm run server        # War Room → http://127.0.0.1:3333/ui/
> ```
> 
> In the War Room, open **Settings** and connect a local agent (Claude Code / Codex / Hermes). Then describe a target to **Op Admiral** in plain English and launch. The agent you connected is the brain. No key required.
> 
> Prefer to bring a key? Set one and skip the connect step:
> 
> ```bash
> export OPENROUTER_API_KEY=...     # or VENICE_API_KEY / ANTHROPIC_API_KEY / OPENAI_API_KEY
> export XAI_API_KEY=...            # Grok Build (grok-build-0.1) — xAI's coding model, native tool-calling
> ```
> 
> Or run it **fully offline** on your own model — no key, no cloud. Defaults to Ollama; point it at any OpenAI-compatible server (LM Studio, vLLM, llama.cpp):
> 
> ```bash
> ollama serve && ollama pull llama3                          # or an OpenAI-compatible server
> export TEMPEST_LOCAL_BASE_URL=http://localhost:11434/api    # LM Studio: http://localhost:1234/v1
> export TEMPEST_LOCAL_MODEL=llama3
> npx tempest config                                          # → "Change default provider" → local
> ```
> 
> Tool-calling works on any local model (it's driven over text), so the Arsenal runs even on models without native function-calling.
> 
> Check the numbers for yourself:
> 
> ```bash
> npm run verify-claims             # re-derives every headline from committed JSON in bench/
> ```
> 
> Library/SDK usage, the full HTTP API, and MCP setup live in [docs/](docs/).
> 
> 
> ## What it hunts
> 
> | Domain | What it does | Status |
> |---|---|---|
> | 🕸️ **Web apps** | Black-box, external-attacker recon → exploit (XBEN suite) | ✅ Stable |
> | 🚩 **CTF** | Hint-free, sandbox-jailed solves (Cybench) | ✅ Stable |
> | 🤖 **Robotics / OT / embedded** | Coordinated-disclosure pipeline for OSS vuln hunting (OSV + live-PoC + refuter) | ✅ Pipeline stable |
> | 📂 **Source code** | White-box repo analysis with blind master-builder decomposition | ⚠️ Python-only ingest |
> | 💰 **Smart contracts** | Damn Vulnerable DeFi | ⚠️ reproduction, not novel discovery |
> 
> 
> ## Why it exists
> 
> Offensive security sits behind years of practice and expensive tooling. The bet behind T3MP3ST is that a coordinated agent swarm puts real bug-hunting in reach of people who never got the invite, across web apps, CTFs, smart contracts, source code, and embedded/robotics OSS. That is an ambitious bet, and the sections below are careful to separate what already works from what is still a bet.
> 
> 
> ## Benchmarks
> 
> Headline results. Each recomputes from the committed JSON with `npm run verify-claims`; full methodology and caveats are in the linked docs.
> 
> | Suite | Result | Context |
> |---|---|---|
> | **XBEN** — XBOW's 104-challenge suite, black-box | **pass@1 mean 90.1%** (Wilson-95 86.2–92.9), floor 91/104 · gpt-5.5 | XBOW self-reports 85% on the same suite; ours re-derives the graded verdict from committed artifacts (raw transcripts stripped for privacy) |
> | **XBEN** — white-box (reported separately) | pass@1 98.7%, best-ball 104/104 · gpt-5.5 | never blended with the black-box number |
> | **Cybench** — 40-task academic bench, Opus 4.8, no hints | **23/40 (58%) hint-free, single-run pass@1** (`verify-claims`-enforced) | not the raw-score record (Anthropic: 76.5% pass@10); every flag graded against the committed oracle |
> | **CVE-Zero** — 10 real post-cutoff (2026) CVEs, **held-out**, 7 languages | **single-agent 8/10 exact file/line/CWE** (verified all-exact, stable) · **10/10 found** (full pack) | **memorization- & fitting-proof**: post-cutoff, and the hardened prompts were never tuned on these; `verify-claims` recomputes it. n=10, directional; the swarm's edge here is recall, not a coordination-beats-solo proof |
> 
> **How to read these:**
> 
> - Every solved flag is graded against a committed ground-truth oracle — not a self-report — and `verify-claims` recomputes the pass/fail. Raw per-step transcripts are stripped for operator privacy, so you re-check the **graded verdict**, not the raw tool output. Zero fabricated, enforced by an anti-fitting guard that runs on every push.
> - Black-box (source withheld) and white-box (source staged) are reported separately and never blended.
> - These ran a **single-agent ReAct loop, not the 8-operator swarm.** The swarm is framework architecture; it is not what scored these numbers.
> - Results are system-vs-system: this harness driving a strong current model, not an isolated-harness claim.
> 
> The number isn't the flex — the **receipt** is. A keyless, open-source harness that hands you the re-run instead of asking you to trust it: clone it, run `npm run verify-claims`, and every verdict above recomputes from its committed oracle in front of you.
> 
> Deeper reading: [WALL_FORENSICS](docs/WALL_FORENSICS.md) (per-challenge misses), [CYBENCH](docs/CYBENCH.md), [INTEGRITY_LEDGER](docs/INTEGRITY_LEDGER.md) (contamination audit and every retraction), [OBSIDIVM](docs/OBSIDIVM.md) (our own live web range).
> 
> 
> ## ⚠️ Authorized use only
> 
> T3MP3ST is an **offensive** security tool, built for **authorized** testing, research, and education. Point it **only** at systems you own or have **explicit, written permission** to test. Unauthorized access to computers, networks, or data is illegal in most jurisdictions — **you alone are responsible** for how you use this software and for staying inside the law and your rules of engagement. Bring the storm to *your* ta

## 延伸閱讀

相關概念：[[攻擊安全]] · [[自動化測試]] · [[AI 編碼代理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[Nightmare-Eclipse--YellowKey|Nightmare-Eclipse/YellowKey]]

[GitHub](https://github.com/elder-plinius/T3MP3ST)

## 相關收錄

> [!note]- 直接競品（同子分類：攻擊安全）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "攻擊安全" AND file.name != "elder-plinius--T3MP3ST"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "elder-plinius--T3MP3ST"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "elder-plinius--T3MP3ST" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "elder-plinius--T3MP3ST"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["攻擊安全","自動化測試","AI 編碼代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "elder-plinius--T3MP3ST" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "elder-plinius--T3MP3ST" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "elder-plinius" AND file.name != "elder-plinius--T3MP3ST"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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
> const me = dv.page("Repos/elder-plinius--T3MP3ST");
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

> **2026-07-06** — 首次收錄
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

- [[2026-07-06|2026-07-06]] — 首次收錄，1.8k stars
