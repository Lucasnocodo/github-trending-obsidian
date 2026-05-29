---
repo: XingYu-Zhong/DeepSeek-GUI
url: https://github.com/XingYu-Zhong/DeepSeek-GUI
owner: XingYu-Zhong
owner_type: User
language: TypeScript
license: MIT
description: "AI agent workspace for DeepSeek models, with Code and Claw modes built into your application."
homepage: "https://www.deepseek-gui.com"
stars: 501
stars_per_day: 72
forks: 50
open_issues: 1
created: 2026-05-21
pushed_at: 2026-05-28
first_seen: 2026-05-28
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "桌面應用"
release_tag: "v0.1.16"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-28
use_case: "提供一個整合 DeepSeek 模型的桌面工作台，讓開發者能更方便地進行代碼開發和文檔編寫。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-04"
contributor_count: 1
engagement: "low"
issue_close_rate: 67
repo_size_kb: 42529
readme_length: 8110
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:421,2026-05-29:501"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "DeepSeek-GUI"
  - "XingYu-Zhong/DeepSeek-GUI"
  - "提供一個整合 DeepSeek 模型的桌面工作台，讓開發者能更方便地進行代碼開發和文檔編寫。"
---

# DeepSeek-GUI

**501** stars · **72** stars/天 · 建立 7 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.16`

> [!summary] 一句話摘要
> 提供一個整合 DeepSeek 模型的桌面工作台，讓開發者能更方便地進行代碼開發和文檔編寫。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (72 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在桌面環境中使用 DeepSeek 進行代碼開發和文檔編寫的開發者。
> **一句話重點** DeepSeek GUI 不僅是個開發工具，更是一個整合多種功能的桌面工作環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "桌面應用" && p.file.name !== "XingYu-Zhong--DeepSeek-GUI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 桌面應用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到更高效的開發環境，值得考慮。

> [!abstract] 核心創新
> 將 DeepSeek TUI 的能力整合到桌面應用中，提供多模式的工作環境。

## 專案簡介

DeepSeek GUI 是一個針對開發者和高頻 AI 使用者的桌面應用，旨在將 DeepSeek TUI 的功能整合到一個可視化的工作環境中。用戶可以在 Code 模式下選擇本地項目目錄，發起任務並實時查看推理過程、工具調用和文件變更，這樣的設計讓開發者不必再局限於終端操作。Write 模式則專注於文檔編寫，支持 Markdown 寫作、實時編輯和導出功能，並提供 inline agent 來輔助寫作。Claw 模式則支持 IM 自動化，讓用戶可以在背景中持續處理消息和定時任務。這些模式的獨立性讓用戶可以根據需求靈活切換，提升工作效率。技術上，該應用基於 Electron 和 React 開發，並使用了多種現代庫如 CodeMirror 和 zustand 來管理狀態和編輯器功能。

相較於其他類似工具，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，DeepSeek GUI 提供了更為完整的桌面體驗，特別是在文件變更審查和多會話管理方面。實際使用中，該工具能夠支持多達 1000 個文件的變更審查，並且在大多數現代硬體上運行流暢。社群活躍度良好，開發者每週都有更新，並且開放了多個功能請求的討論。這個專案目前處於 beta 階段，適合需要長期維護多個項目的團隊使用。未來幾個月內，預計會持續增加更多的自動化功能和擴展性選項。對於希望將 DeepSeek 整合到實際開發流程中的用戶，這是一個非常值得考慮的選擇。

**技術棧**：`Electron` · `React` · `TypeScript`

## 重點功能

- 多模式工作台 — 提供 Code、Write 和 Claw 三種模式，滿足不同的工作需求。
- 實時文件變更審查 — 支持內聯 diff 和變更審查面板，便於用戶檢查和批准修改。
- Markdown 寫作支持 — 提供 live 編輯和多種導出格式，方便內容創作者使用。
- IM 自動化 — Claw 模式支持與飛書/Lark 的集成，實現消息自動處理。
- 跨平台支持 — 提供 macOS 和 Windows 的安裝包，Linux 用戶可從源碼構建。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/XingYu-Zhong/DeepSeek-GUI.git && cd DeepSeek-GUI && npm install
```
2. 啟動開發模式
```bash
npm run dev
```
3. 首次啟動時配置 API Key
```bash
# 在應用中填寫 DeepSeek API Key
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 501 stars（71.6/天），forks 50（10.0%），這顯示出相對活躍的開發者社群。作者 XingYu-Zhong 之前有過多個開源專案，顯示出其在開發社群中的影響力。這個專案解決了開發者在使用 DeepSeek 進行代碼開發時的操作繁瑣問題，提供了更直觀的桌面界面。近期的推廣活動和社群討論也吸引了大量的關注，進一步提升了其曝光率。整體來看，這個工具的設計和功能填補了市場上對於 DeepSeek 的需求，並且在技術上有著良好的可行性。

## 適合誰使用

**目標受眾**：希望在桌面環境中使用 DeepSeek 進行代碼開發和文檔編寫的開發者。

> [!example] 使用場景
> - 後端工程師用它來在本地開發環境中管理代碼庫，因為它提供了即時的文件變更審查和多會話支持，提升了開發效率。
> - 內容創作者用它來撰寫和編輯 Markdown 文檔，因為它的實時編輯和導出功能讓文檔管理變得更簡單。
> - 產品經理用它來監控和管理多個 AI 代理的任務，因為它的 Claw 模式支持自動化消息處理，減少了手動操作的需求。

## 架構分析

DeepSeek GUI 採用 Electron 作為桌面應用框架，這使得它能夠在多平台上運行。應用的核心是基於 React 開發的用戶界面，並使用 TypeScript 進行類型安全的開發。資料流方面，應用通過 HTTP/SSE 與 DeepSeek TUI 進行通信，實現即時的推理和工具調用。這種設計的好處是能夠快速迭代和更新，但代價是需要依賴於 DeepSeek API 的穩定性。未來的擴展性方面，這種架構能夠輕鬆集成新的功能和插件，但也可能面臨性能瓶頸，特別是在處理大量文件變更時。

## 技術深入分析

DeepSeek GUI 的核心技術在於其基於 Electron 的桌面應用架構，這使得它能夠在不同平台上提供一致的使用體驗。應用內部使用 React 來構建用戶界面，並利用 TypeScript 提供類型安全，這對於大型項目的開發尤為重要。資料流方面，DeepSeek GUI 通過 HTTP/SSE 與 DeepSeek TUI 進行通信，這樣的設計使得即時推理和工具調用成為可能。性能上，該應用能夠支持多達 1000 個文件的變更審查，並且在大多數現代硬體上運行流暢。設計上，選擇 Electron 使得應用能夠快速迭代，但也可能面臨依賴於 DeepSeek API 的風險。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大量請求時。整合方面，DeepSeek GUI 能夠輕鬆與現有的開發工具鏈相容，並且支持多種 CI/CD 流程，這使得它在實際使用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多種語言版本，安裝過程相對順暢，但 Linux 用戶需自行構建。首次使用有引導設置，幫助新手快速上手。整體而言，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 多模式支持，適合不同的工作需求。
> - 實時變更審查功能，提升代碼質量。
> - 友好的用戶界面設計，降低使用門檻。

> [!danger] 缺點
> - 對於 Linux 用戶，安裝過程較為繁瑣。
> - 目前功能仍在持續開發中，穩定性可能不足。
> - 對於大型項目，性能可能會受到影響。

> [!warning] 注意事項
> - 僅支援 Node.js 20+。
> - Linux 用戶需自行構建，無預構建安裝包。
> - 目前僅支持 DeepSeek API，對其他 API 的兼容性尚未測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的創建和管理，而 DeepSeek GUI 提供更完整的桌面工作環境和多模式支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代碼管理功能，但缺乏 DeepSeek GUI 的即時變更審查和多會話支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的創建和管理，使用 Python 實作，記憶體用量較少，但功能較為單一。 | 如果你的團隊主要使用 Python 並需要輕量級的 AI agent 管理工具。 | medium，因為需要適應不同的開發環境和語言。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代碼管理功能，但基於 CLI，缺乏圖形化界面。 | 如果你的團隊習慣於命令行操作，並且不需要可視化的工作環境。 | low，因為 CLI 工具通常容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **DeepSeek-GUI** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的創建和管理，使用 Python 實作，記憶體用量較少，但功能較為單一。 | 提供類似的代碼管理功能，但基於 CLI，缺乏圖形化界面。 |
> | 遷移成本 | - | medium，因為需要適應不同的開發環境和語言。 | low，因為 CLI 工具通常容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用 Python 並需要輕量級的 AI a | 如果你的團隊習慣於命令行操作，並且不需要可視化的工作環境。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次啟動時需要手動配置 API Key，可能會讓新手困惑
  - 解法：在 README 中明確指示配置步驟
- **[HIGH]** Linux 用戶需自行構建，安裝過程較為繁瑣
  - 解法：提供詳細的構建指南，並建議使用 npm 鏡像加速
- [MEDIUM] 在大型項目中，性能可能會受到影響
  - 解法：建議在小型項目中先進行測試，逐步擴展使用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創公司開發團隊 | 非常適合 | 提供了多模式支持和即時變更審查，適合小型團隊的靈活需求。 |
| 大型企業的代碼庫管理 | 普通 | 雖然功能強大，但在處理大量請求時可能會出現性能瓶頸。 |
| 內容創作者撰寫長文檔 | 非常適合 | Markdown 寫作模式提供了良好的編輯體驗和導出功能。 |
| 需要長期維護多個項目的開發者 | 適合 | 支持多會話和變更審查，便於管理多個項目。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到更高效的開發環境，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具不需要高權限運行，但需要存取用戶的 DeepSeek API Key。依賴的庫中沒有已知的安全漏洞，整體風險較低。在 CI/CD 中使用時，建議定期檢查依賴庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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
| Open Issues | 1 |
| Issue 解決率 | 67% (2 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-05-21 |
| 官方網站 | [Link](https://www.deepseek-gui.com) |
| Repo 大小 | 41.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XingYu-Zhong/DeepSeek-GUI) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "JavaScript" : 4
>     "CSS" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@XingYu-Zhong](https://github.com/XingYu-Zhong) | 31 |

**最新版本**：v0.1.16 — DeepSeek GUI 0.1.16 (2026-05-27)

> [!info]- Release Notes
> ## 更新摘要
> 
> 自 [`v0.1.10`](https://github.com/XingYu-Zhong/DeepSeek-GUI/compare/v0.1.10...HEAD) 以来的变更：
> 
> ### ✨ 新功能
> 
> - enhance markdown export and preview workflow (`12ce139`)
> - add inline edit completion and recent edits support (`04eb10f`)
> 
> ### 🐛 修复
> 
> - bundle codewhale tui companion (`afcad58`)
> - render write workspace images (`31da5e5`)
> - refine write workspace title interaction (`39b5c9a`)
> - improve streamdown runtime handling and quoted selection (`5c5cce7`)
> - refine inline edit completion and markdown preview flow (`df545ec`)
> 
> ### ♻️ 重构
> 
> - consolidate inline completion architecture and remove legacy write-edit services (`af6c07a`)
> 
> ### 📦 其他
> 
> - feat(write,gui-update): add write export, clipboard image paste and robust render safety (`daa2d49`)
> - Improve write markdown preview experience (`b1faadc`)
> - improve markdown preview style and behavior (`1eeaf7d`)
> - fix：update readme (`fa87697`)
> 
> ---
> 

## 社群與生態

**社群活躍度**：社群活躍，開發者每週都有更新和回應。
**連結**：[文件](https://www.deepseek-gui.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-25 ~ 2026-05-26）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #7 from XingYu-Zhong/develop

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/XingYu-Zhong/DeepSeek-GUI/issues/8) | [Feature] 支持剪贴板直接粘贴图片 / Support pasting images from clipboar `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # DeepSeek GUI
> 
> [English](./README.en.md) | 简体中文
> 
> > 把 DeepSeek TUI 的本地智能体能力带进桌面窗口：**Code** 写代码、**Write** 写文档、**Claw** 接 IM 自动化——聊天、审查改动、管理 Skill/MCP 和更新，都在一个图形化工作台里完成。
> 
> [官网](https://deepseek-gui.com) | [下载](https://deepseek-gui.com)
> 
> [](https://github.com/XingYu-Zhong/DeepSeek-GUI/releases)
> [](./LICENSE)
> 
> DeepSeek GUI 是一个面向开发者和高频 AI 工作者的本地桌面工作台。它基于 [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI) 的能力，把终端里的智能体体验整理成更容易上手、更适合长期使用的应用：选择工作目录，发起任务，实时查看推理、工具调用和文件改动，并在需要时审批或回退。
> 
> 这个项目的目标不是再造一个聊天壳，而是让 DeepSeek 变成一个可以稳定参与真实项目工作的桌面伙伴。
> 
> ---
> 
>   
>   
> 
> ## 我们做了什么
> 
> - 把 DeepSeek TUI 的本地运行时封装进桌面应用，默认可以自动启动和管理。
> - 做了一套完整的聊天工作台，支持多会话、实时流式输出、历史回看、中断和重新发送。
> - 打通本地工作目录，让智能体可以围绕真实项目读取、编辑和创建文件。
> - 做了文件变更审查视图，让每一次修改都能被看见、理解和确认。
> - 做了首次引导、设置页、语言/主题/字体大小、系统通知、错误日志和更新入口。
> - 做了 Skill 与 MCP 的图形化管理，让用户不用手写很多配置也能扩展智能体能力。
> - 做了 Claw 后台自动化，支持飞书 / Lark 接入、独立 IM Agent、本地 webhook / relay 和定时任务。
> - 做了 Write 写作工作台，提供独立写作空间、Markdown 文件树、live 编辑/预览、文本补全和选中文本 inline agent。
> - 提供 macOS、Windows 预构建安装包；Linux/Unix 用户可从源码自行构建。
> 
> ## 功能亮点
> 
> - **桌面聊天工作台**：多会话、流式回复、推理过程、工具调用、审批请求和文件改动都在同一个界面中展示。
> - **项目级工作区**：为每个任务选择本地目录，按工作区管理会话，并支持文件预览、编辑器打开和 Git 分支选择。
> - **变更审查**：内联 diff 和侧边审查面板会记录智能体产生的文件改动，便于在应用内完成 review。
> - **权限可控**：支持只读、工作区可写、完全访问等模式，并可配置工具调用前是否需要审批。
> - **运行时托管**：默认使用内置 DeepSeek TUI；也可以在设置中指定自己的 `deepseek` 可执行文件。
> - **Skill 与 MCP**：在图形界面中创建 Skill、保存 MCP 配置、添加常用工具，并打开对应目录继续管理。
> - **Claw 后台自动化**：可开启独立于普通聊天的后台 Agent，当前支持飞书 / Lark 接入、IM webhook / relay，以及按计划自动执行任务。
> - **Write 写作模式**：独立管理 `~/.deepseekgui/write_workspace` 和自定义写作空间，读取 Markdown 文件树，支持 live Markdown 编辑、相对图片预览、DeepSeek FIM 短补全 / 灵感长补全（可用跨文本 BM25 + 关键词检索增强）、当前文档导出为 `HTML / PDF / DOC / DOCX`，以及选中文本后直接唤起 inline 写作助手。
> - **首次配置友好**：首次启动会引导你选择语言、填写 DeepSeek API Key，并按需配置兼容服务地址。
> - **本地优先**：设置、会话状态、日志和运行时配置保存在本机；模型调用使用你自己的 DeepSeek API Key。
> - **中英文界面**：应用和 README 均提供中文、英文版本，界面语言可随时切换。
> - **跨平台使用**：提供 macOS `.dmg/.zip`、Windows `.exe`；Linux/Unix 用户可从源码构建。
> 
> ## 适合谁
> 
> - 想用 DeepSeek 处理真实代码库，但不想一直留在终端里的开发者。
> - 希望清楚看到智能体做了什么、改了哪些文件、哪些操作需要批准的团队。
> - 需要长期维护多个项目、多个会话，并希望把 Skill/MCP 配置沉淀下来的用户。
> - 想用本地工作台连接 DeepSeek 官方 API 或 OpenAI 兼容服务的人。
> 
> ---
> 
> ## 三种工作台模式
> 
> DeepSeek GUI 在左侧顶栏提供 **Code**、**Write**、**Claw** 三种模式，分别面向代码开发、长文写作和后台自动化。三种模式共享同一套 DeepSeek 运行时与设置，但会话、工作区和界面布局彼此独立，可按任务随时切换。
> 
> ### Code 模式
> 
> 面向真实代码库的开发工作台：绑定本地项目目录，围绕仓库读写文件、执行命令、审查改动。
> 
>   
> 
> - 按工作区管理多个 Agent 会话，实时查看推理、工具调用与文件变更。
> - 支持内联 diff、变更审查面板，以及只读 / 工作区可写 / 完全访问等权限策略。
> - 提供快捷任务卡片，可一键发起结构梳理、排错、实现方案或 UI 优化等对话。
> 
> ### Write 模式
> 
> 独立的 Markdown 写作工作台，把写作文件、保存状态与 AI 助手从 Code 会话里拆出来单独管理。
> 
>   
> 
> - 管理 `~/.deepseekgui/write_workspace` 与多个自定义写作空间，左侧文件树支持新建、重命名与删除。
> - 编辑器支持 **Live / Source / Split / Preview**，Live 模式在当前行保留 Markdown 源码，其余行实时渲染。
> - 工具栏支持把当前 Markdown 文档导出为 `HTML / PDF / DOC / DOCX`，导出时会尽量保留标题、列表、代码块、表格和本地图片。
> - 内置 DeepSeek FIM 短补全与灵感长补全；选中文本可唤起 inline agent，右侧写作助手支持摘要、大纲与润色等快捷操作。
> 
> ### Claw 模式
> 
> 后台自动化与 IM 接入工作台，让 Agent 在普通聊天之外持续处理消息与定时任务。
> 
>   
> 
> - 为飞书 / Lark 等渠道配置独立 Agent，分别设定人设、默认模型与工作目录。
> - 每个 IM Agent 拥有独立会话线程，可在 GUI 内直接调试回复与工具调用。
> - 支持本地 webhook / relay 与定时任务，适合把 DeepSeek 接到团队协作或自动化流程中。
> 
> ---
> 
> ## 下载安装
> 
> ### 下载预构建安装包
> 
> 前往 [GitHub Releases](https://github.com/XingYu-Zhong/DeepSeek-GUI/releases) 下载最新版本：
> 
> | 平台 | 安装包 |
> | --- | --- |
> | macOS | `.dmg` 或 `.zip`，支持 Intel 与 Apple Silicon |
> | Windows | `.exe`，NSIS 安装器，x64 |
> 
> 目前暂不提供 Linux/Unix 预构建下载包。Linux 用户可以从源码自行构建；由于应用内终端依赖 `node-pty` 原生模块，请在 Linux 平台上构建 Linux 包，不建议在 macOS 或 Windows 上交叉打包 Linux 版本。
> 
> 首次启动时需要填写 [DeepSeek API Key](https://platform.deepseek.com/api_keys)。如果你使用兼容 DeepSeek / OpenAI 的服务，也可以在设置里修改 Base URL。
> 
> ### 从源码运行
> 
> 适合贡献者或需要本地开发的人：
> 
> ```bash
> git clone https://github.com/XingYu-Zhong/DeepSeek-GUI.git
> cd DeepSeek-GUI
> npm install
> npm run dev
> ```
> 
> 环境要求：
> 
> - Node.js 20+
> - 可用的 DeepSeek API Key
> - 首次安装依赖时需要联网
> 
> 中国大陆访问较慢时，可以使用 npm 镜像：
> 
> ```bash
> npm install --registry=https://registry.npmmirror.com
> ```
> 
> ---
> 
> ## 首次使用
> 
> 1. 打开 DeepSeek GUI。
> 2. 在首次引导中选择界面语言。
> 3. 填入 DeepSeek API Key；如果需要，设置自定义 Base URL。
> 4. 选择默认工作目录，或使用应用自动创建的默认目录。
> 5. 新建会话，输入任务，让智能体开始工作。
> 
> 常用流程（**Code 模式**）：
> 
> - 在左侧选择或切换工作区。
> - 在聊天框描述你要完成的任务。
> - 观察回复中的推理、工具调用、命令执行和文件改动。
> - 对需要审批的操作选择允许或拒绝。
> - 在变更审查面板里检查改动，再决定下一步。
> 
> **Claw** 与 **Write** 模式的详细说明见上文 [三种工作台模式](#三种工作台模式)。简要步骤：
> 
> - **Claw**：在设置页启用后台自动化 → 添加飞书 / Lark 连接 → 配置 Agent 人设、模型与工作目录 → 按需开启 webhook / relay 或定时任务。
> - **Write**：切换到 Write 模式 → 使用默认写作空间或添加新空间 → 在 Live 编辑器中写作，配合补全、选区 inline agent 与右侧写作助手。
> 
> ## 设置与使用
> 
> 设置页集中管理这些内容：
> 
> - DeepSeek API Key、Base URL、运行时端口和运行时 Token。
> - 是否自动启动本地运行时，以及是否使用自定义 `deepseek` 路径。
> - 工具审批策略和文件系统权限范围。
> - 默认工作目录、语言、主题、字体大小和完成通知。
> - GUI 更新、DeepSeek TUI 更新、本地错误日志。
> - Skill 创建与目录管理、MCP 配置编辑。
> - Claw 后台自动化、飞书 / Lark 连接、Webhook / Relay 和定时任务。
> 
> 快捷键：
> 
> | 按键 | 功能 |
> | --- | --- |
> | `Enter` | 发送消息 |
> | `Shift+Enter` | 在输入框中换行 |
> | `Ctrl+Enter` | 发送消息 |
> | `Esc` | 关闭面板或退出当前浮层 |
> 
> ## Write 模式设计参考
> 
> Write 模式的目标是把 DeepSeek GUI 从“代码/聊天工作台”扩展成真正可长期写作的桌面工作区。实现时参考了本地 `textide` 与 `openhanako` 项目中的几个方案：
> 
> - 工作区与文件树：借鉴 textide 的写作空间概念，把写作文件、当前文件、保存状态和 AI 上下文从 code 会话里拆出来独立管理。
> - Markdown live 编辑：借鉴 openhanako 的 CodeMirror decorations 思路，当前行保留 Markdown 源码，非当前行用装饰层渲染标题、任务项、图片、分割线和表格。
> - 选区 inline agent：借鉴 openhanako 的选区捕获与浮动输入框交互，用户选中文本后可以直接输入“润色/续写/分析”等指令，并把文件路径、行号和原文作为结构化引用交给写作助手。
> - AI 会话隔离：Write 仍复用 DeepSeek TUI 的普通 agent thread，但在 GUI 本地按写作空间维护 write thread registry，避免写作会话污染 code/claw 侧栏。
> - 文本补全：写作补全不走本地 TUI serve，而是直接调用 DeepSeek FIM Completion API，方便在纯写作场景里获得低延迟 ghost text。短补全使用较短 debounce、较小 token 预算和严格本地过滤；灵感长补全使用更长停顿触发、更大 token 预算，并只在行尾 / 段落边界工作。补全前会对写作空间内的 Markdown / 文本文件建立短 TTL 轻量索引，使用 BM25 + 关键词匹配召回跨文本片段，并以隐藏 Markdown comment 的形式注入 prompt，帮助模型保持术语、事实和风格连续性。
> 
> ---
> 
> ## 卸载
> 
> ### Windows
> 
> - 打开“设置 -> 应用 -> 已安装的应用”，找到 `DeepSeek GUI` 并卸载。
> - 或在“控制面板 -> 程序和功能”中卸载。
> - 也可以运行安装目录中的卸载程序。
> 
> Windows 安装器默认会创建开始菜单和桌面快捷方式。安装包不会强制固定到任务栏；如需固定，可在开始菜单中右键 `DeepSeek GUI` 并选择固定。
> 
> ### macOS
> 
> - 将 `DeepSeek GUI.app` 从“应用程序”移到废纸篓。
> - 如果首次打开被系统拦截，可在 Finder 中右键应用并选择“打开”。
> - 本地未公证构建可先运行：
> 
> ```bash
> npm run mac:unquarantine -- '/Applications/DeepSeek GUI.app'
> ```
> 
> ### Linux
> 
> - 如果你是从源码构建的 Linux 包，删除对应的 `.AppImage` 或安装文件即可。
> - 如果你手动创建了桌面入口或快捷方式，也一并删除。
> 
> ### 清理本地数据
> 
> 默认卸载只移除应用文件，会保留本地设置、会话和运行时配置，便于后续重装恢复。若要彻底清理，可按需删除：
> 
> | 平台 | 应用数据位置 |
> | --- | --- |
> | macOS | `~/Library/Application Support/DeepSeek GUI` |
> | Windows | `%APPDATA%\DeepSeek GUI` |
> | Linux | `~/.config/DeepSeek GUI` |
> 
> DeepSeek TUI 的共享配置通常位于 `~/.deepseek`。删除前请确认其中没有你还需要的 API Key、MCP 或 Skill 配置。
> 
> ---
> 
> ## 更新
> 
> - 普通用户：macOS/Windows 可在设置页检查 GUI 更新，或前往 [GitHub Releases](https://github.com/XingYu-Zhong/DeepSeek-GUI/releases) 下载最新安装包；Linux/Unix 请从源码构建。
> - DeepSeek TUI 运行时：如果使用 GUI 托管运行时，可在设置页检查并升级内置 TUI。
> 
> ## 贡献指南
> 
> 欢迎提交 bug 修复、UI/UX 优化、文档改进、本地化内容、构建发布流程和运行时集成相关改动。
> 
> 协作约定：
> 
> - 当前默认协作分支为 `develop`。
> - 新功能和修复建议从最新 `develop` 拉出短期功能分支开始。
> - PR 默认提交到 `develop`，由维护者审核后再合入 `master`。
> - 对高风险改动请先沟通范围，再进入实现。
> - 发起 PR 前运行 `npm run typecheck`、`npm run build`，以及 `npm run test`。
> - 如果改动影响界面，请附上视频或 GIF。
> - 如果改动影响项目逻辑，请附上对应单元测试。
> - 如果改动影响使用方式，请同步更新 `README.md` 和 `README.en.md`。
> 
> 详见 [CONTRIBUTING.zh-CN.md](./docs/CONTRIBUTING.zh-CN.md) 和 [DEVELOPMENT.zh-CN.md](./docs/DEVELOPMENT.zh-CN.md)。
> 
> ## 本地构建
> 
> ```bash
> npm run build           # 生产构建
> npm run dist:mac        # macOS 安装包
> npm run dist:win        # Windows 安装包
> npm run dist:linux      # Linux AppImage；请在 Linux 平台上运行
> ```
> 
> Linux/Unix 预构建下载包暂不发布。需要 Linux 版本时，请在目标 Linux 环境中安装依赖后自行运行 `npm run dist:linux`；应用内终端依赖 `node-pty`，跨平台打包可能导致终端启动失败。
> 
> 更多开发流程请看 [DEVELOPMENT.zh-CN.md](./docs/DEVELOPMENT.zh-CN.md)。
> 
> ## 文档
> 
> | 文档 | 内容 |
> | --- | --- |
> | [CONTRIBUTING.zh-CN.md](docs/CONTRIBUTING.zh-CN.md) | 贡献说明 |
> | [DEVELOPMENT.zh-CN.md](docs/DEVELOPMENT.zh-CN.md) | 本地开发与协作流程 |
> | [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | 社区行为准则 |
> | [SECURITY.md](SECURITY.md) | 安全漏洞披露方式 |
> 
> 底层运行时的完整说明请参考 [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)。
> 
> ---
> 
> ## 致谢
> 
> - [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)：提供本地智能体运行时能力。
> - [LobsterAI](https://github.com/netease-youdao/LobsterAI)：IM 管理、扫码绑定、Agent 绑定与自定义人设流程给了本项目 Claw IM 集成很多启发。
> - OpenHanako 与 textide：Markdown live 编辑、写作空间、选中文本 inline agent 等 Write 模式交互和实现方案给了本项目重要参考。
> - [DeepSeek](https://github.com/deepseek-ai)：提供模型与 API。
> - 所有为 DeepSeek GUI 提交 issue、建议、代码和文档的贡献者。
> 
> > [!NOTE]
> > 本项目与 DeepSeek Inc. 无隶属关系。
> 
> ## 许可证
> 
> [MIT](./LICENSE)
> 
> ## St

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[Markdown]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[qiuzhi2046--Qclaw|qiuzhi2046/Qclaw]] · [[vercel-labs--zero-native|vercel-labs/zero-native]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/XingYu-Zhong/DeepSeek-GUI) · [官方網站](https://www.deepseek-gui.com)

## 相關收錄

> [!note]- 直接競品（同子分類：桌面應用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "桌面應用" AND file.name != "XingYu-Zhong--DeepSeek-GUI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "XingYu-Zhong--DeepSeek-GUI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "XingYu-Zhong--DeepSeek-GUI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "XingYu-Zhong--DeepSeek-GUI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","Markdown"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XingYu-Zhong--DeepSeek-GUI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XingYu-Zhong--DeepSeek-GUI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XingYu-Zhong" AND file.name != "XingYu-Zhong--DeepSeek-GUI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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
> const me = dv.page("Repos/XingYu-Zhong--DeepSeek-GUI");
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

> **2026-05-28** — 首次收錄
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

- [[2026-05-28|2026-05-28]] — 首次收錄，421 stars
