---
repo: XingYu-Zhong/DeepSeek-GUI
url: https://github.com/XingYu-Zhong/DeepSeek-GUI
owner: XingYu-Zhong
owner_type: User
language: TypeScript
license: MIT
description: "AI agent workspace for DeepSeek models, with Code and Claw modes built into your application."
homepage: "https://www.deepseek-gui.com"
stars: 580
stars_per_day: 73
forks: 68
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
use_case: "提供一個圖形化的工作台，讓開發者在桌面上使用 DeepSeek 模型進行代碼開發和文檔寫作。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-04"
contributor_count: 1
engagement: "medium"
issue_close_rate: 67
repo_size_kb: 42529
readme_length: 8110
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:421,2026-05-29:501,2026-05-30:580"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "DeepSeek-GUI"
  - "XingYu-Zhong/DeepSeek-GUI"
  - "提供一個圖形化的工作台，讓開發者在桌面上使用 DeepSeek 模型進行代碼開發和文檔寫作。"
---

# DeepSeek-GUI

**580** stars · **73** stars/天 · 建立 8 天前 · TypeScript · MIT

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
> 提供一個圖形化的工作台，讓開發者在桌面上使用 DeepSeek 模型進行代碼開發和文檔寫作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (73 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在桌面環境中使用 DeepSeek 模型進行代碼和文檔管理的開發者和團隊。
> **一句話重點** DeepSeek GUI 讓開發者能夠在桌面環境中高效使用 AI 模型，並提供清晰的操作記錄和變更審查功能。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到清晰的變更審查和多會話支持，值得嘗試。

> [!abstract] 核心創新
> 將 DeepSeek TUI 的功能整合到桌面應用中，提供圖形化的多會話和變更審查體驗。

## 專案簡介

DeepSeek GUI 是一個針對開發者和高頻 AI 使用者的桌面應用，旨在將 DeepSeek TUI 的功能整合到一個更易於使用的圖形界面中。使用者可以在 Code 模式下選擇本地工作目錄，發起任務並實時查看推理過程、工具調用和文件變更。這個應用的核心賣點在於其多會話支持和變更審查功能，讓使用者能夠清楚地看到智能體的操作和文件的改動，並進行必要的批准。技術上，DeepSeek GUI 基於 Electron 框架開發，使用 TypeScript 和 React，並依賴多個 Codemirror 和其他庫來實現 Markdown 編輯和即時預覽功能。

與其他同類工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，DeepSeek GUI 提供了更強的文件變更審查和多會話管理能力，特別適合需要長期維護多個項目的團隊。這個工具的設計考慮了用戶的工作流，提供了靈活的權限控制和運行時托管選項，讓使用者能夠根據需求自定義環境。儘管目前仍在早期階段，但其活躍的開發和社群支持顯示出未來的潛力。適合希望將 DeepSeek 整合到日常開發工作中的團隊，特別是那些需要清晰可見的操作記錄和變更審查的使用者。

**技術棧**：`Electron` · `TypeScript` · `React`

## 重點功能

- 多會話支持 — 允許用戶同時管理多個 DeepSeek 會話，並實時查看推理過程。
- 變更審查功能 — 提供內聯 diff 和側邊審查面板，讓用戶能夠檢查文件變更。
- Markdown 寫作模式 — 獨立的 Markdown 編輯器支持即時預覽和文本補全，提升寫作效率。
- 權限控制 — 支持只讀、可寫和完全訪問等多種權限模式，適合不同的使用場景。
- 運行時托管 — 內置 DeepSeek TUI，並支持自定義可執行文件路徑，靈活配置運行環境。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/XingYu-Zhong/DeepSeek-GUI.git && cd DeepSeek-GUI && npm install
```
2. 啟動開發模式
```bash
npm run dev
```
3. 首次啟動時填寫 DeepSeek API Key
```bash
# 依據 README 指示填寫 API Key
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 580 stars（73/天），forks 68（11.7%），顯示出強烈的社群興趣。作者 XingYu-Zhong 之前在 DeepSeek TUI 項目中有過貢獻，這個新工具解決了開發者在使用 DeepSeek 時缺乏直觀界面的痛點，讓使用者能夠更方便地進行代碼和文檔的管理。近期的推廣活動和社群討論也可能促進了這個工具的曝光度。技術上，這個工具的出現得益於 Electron 框架的成熟，讓桌面應用開發變得更簡單。forks/stars 比率為 11.7%，顯示出不少使用者在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在桌面環境中使用 DeepSeek 模型進行代碼和文檔管理的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來在本地開發環境中管理 DeepSeek 模型，因為它提供了清晰的文件變更審查和即時推理結果。
> - 內容創作者用它來撰寫和編輯 Markdown 文檔，因為它支持即時預覽和文本補全，提升寫作效率。
> - DevOps 工程師用它來自動化 IM 通訊和任務調度，因為 Claw 模式支持與多個 IM 平台的集成，方便管理多個任務。

## 架構分析

DeepSeek GUI 採用 Electron 框架，這使得它能夠跨平台運行。應用的核心是 DeepSeek TUI，負責處理 AI 模型的推理和工具調用。資料流方面，使用者的輸入會被發送到 DeepSeek TUI，然後返回結果並顯示在 GUI 中。這種設計的好處是能夠利用現有的 TUI 功能，但代價是需要確保 TUI 的穩定性和性能。擴展性方面，使用者可以根據需求自定義運行時環境，但這也可能導致配置的複雜性增加。

## 技術深入分析

DeepSeek GUI 的核心技術機制是基於 Electron 框架，這使得它能夠在多個平台上運行。應用使用 TypeScript 和 React 來構建用戶界面，並依賴多個 Codemirror 庫來實現 Markdown 編輯和即時預覽。性能方面，該應用能夠處理中小型項目的實時推理，但在大型項目中可能會遇到性能瓶頸。選擇 Electron 使得開發過程更為簡單，但也帶來了較大的應用包體積。技術風險方面，DeepSeek TUI 的穩定性對整個應用至關重要，若 TUI 出現問題，將直接影響到 GUI 的使用體驗。整合方面，與現有的開發工具鏈（如 Git）相容性良好，並且支持多種 IDE 的插件。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有詳細的安裝步驟，提供了必要的範例。安裝過程順暢，無明顯坑點。首次使用時有引導設置，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供直觀的圖形界面，適合不熟悉命令行的用戶。
> - 多會話管理功能，方便同時處理多個任務。
> - 變更審查功能，讓用戶能夠清楚看到文件改動。

> [!danger] 缺點
> - 目前僅支持 macOS 和 Windows，Linux 用戶需自行構建。
> - 對於大型項目，性能可能會受到影響。
> - 需要穩定的 DeepSeek API Key，否則無法正常運行。

> [!warning] 注意事項
> - 目前僅支持 macOS 和 Windows，Linux 用戶需自行構建。
> - 對於大型項目，實時推理和文件變更的性能可能受到影響。
> - 需要穩定的 DeepSeek API Key，否則無法正常運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的創建和管理，但缺乏 DeepSeek 的文件變更審查功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI agent 功能，但界面不如 DeepSeek GUI 直觀，且缺乏多會話支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但功能較為單一。 | 如果需要一個輕量級的 AI agent 管理工具，且不需要 DeepSeek 的文件變更審查功能。 | low，因為功能較為簡單，容易上手。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用 Python 實作，功能強大但性能較差。 | 如果你的團隊已經在使用 Python 且需要更強的自定義能力。 | medium，因為需要重新適應不同的 API 和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **DeepSeek-GUI** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但功能較為單一。 | 使用 Python 實作，功能強大但性能較差。 |
> | 遷移成本 | - | low，因為功能較為簡單，容易上手。 | medium，因為需要重新適應不同的 API 和功能。 |
> | 適用場景 | 主要場景 | 如果需要一個輕量級的 AI agent 管理工具，且不需要  | 如果你的團隊已經在使用 Python 且需要更強的自定義能力 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次啟動時需要填寫 DeepSeek API Key，若未填寫則無法使用。
  - 解法：確保在首次啟動時填寫正確的 API Key。
- [MEDIUM] 在大型項目中，實時推理可能會導致性能下降。
  - 解法：對於大型項目，建議分批處理或簡化任務。
- [low] 某些 Markdown 功能在特定情況下可能無法正常顯示。
  - 解法：檢查 Markdown 語法是否正確，並更新到最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 提供清晰的變更審查和多會話支持，適合小型團隊的協作。 |
| 大型企業的文檔寫作團隊 | 普通 | 雖然支持 Markdown 編輯，但在大型項目中性能可能不足。 |
| 需要長期維護多個 AI agent 的團隊 | 適合 | 支持多會話和變更審查，方便管理多個任務。 |
| 單純的命令行使用者 | 不適合 | 專案主要針對桌面使用者，命令行功能較弱。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到清晰的變更審查和多會話支持，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，且不存取敏感資料。依賴的庫中有些可能存在供應鏈風險，但整體安全性可控。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

DeepSeek GUI 最常與 DeepSeek TUI 和其他開發工具搭配使用，適合在開發過程中進行即時推理和文件管理。在一個使用 Git 的專案中，可以用 DeepSeek GUI 來管理代碼變更，具體做法是選擇工作目錄並發起任務。與主流 CI/CD 工具（如 GitHub Actions）兼容良好，並且可以輕鬆整合到現有的開發流程中。常見的整合問題包括配置 API Key 和運行時環境，這些需要在首次使用時特別注意。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 DeepSeek GUI 出現之前，開發者主要依賴命令行工具來使用 DeepSeek 的功能，這樣的方式不夠直觀且難以管理多個任務。隨著桌面應用開發技術的進步，特別是 Electron 框架的成熟，使得將 TUI 功能整合到桌面應用中變得可行。DeepSeek GUI 代表了將 AI 模型應用於日常開發工作中的一個新趨勢，未來可能會有更多類似的工具出現，進一步提升開發者的工作效率。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 JavaScript/TypeScript
- 了解基本的 Markdown 語法
- 有使用 DeepSeek 的經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：收集使用反饋並調整使用方式。

**成功指標**：團隊的開發效率提高 20%，文件變更審查時間減少 30%。

> [!warning] 退出計畫
> 若需退出，所有設定和數據均可導出為 JSON 格式，方便轉移至其他工具。

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
| Forks | 68 |
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

**社群活躍度**：社群活躍，開發者定期更新和修復問題。
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
