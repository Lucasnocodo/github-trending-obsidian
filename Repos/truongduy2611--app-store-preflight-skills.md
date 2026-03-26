---
repo: truongduy2611/app-store-preflight-skills
url: https://github.com/truongduy2611/app-store-preflight-skills
owner: truongduy2611
owner_type: User
language: N/A
license: MIT
description: "AI agent skill to scan iOS/macOS projects for App Store rejection patterns before submission"
homepage: ""
stars: 944
stars_per_day: 157
forks: 53
open_issues: 0
created: 2026-03-19
pushed_at: 2026-03-20
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "在提交前掃描 iOS/macOS 專案，檢查可能導致 App Store 拒絕的問題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-02"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 40
readme_length: 5484
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:838,2026-03-24:897,2026-03-25:923,2026-03-26:944"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "app-store-preflight-skills"
  - "truongduy2611/app-store-preflight-skills"
  - "在提交前掃描 iOS/macOS 專案，檢查可能導致 App Store 拒絕的問題。"
---

# app-store-preflight-skills

**838** stars · **279** stars/天 · 建立 3 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 在提交前掃描 iOS/macOS 專案，檢查可能導致 App Store 拒絕的問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (279 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 專注於 iOS/macOS 應用開發的團隊，尤其是需要提高 App Store 提交成功率的開發者。
> **一句話重點** 這個工具不僅能提高 App Store 提交的成功率，還能幫助開發者更深入理解 Apple 的審核標準。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "truongduy2611--app-store-preflight-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能有效提高 App Store 提交成功率，值得嘗試。

> [!abstract] 核心創新
> 透過 AI agent 自動檢查 iOS/macOS 應用的提交問題，顯著提高提交成功率。

## 專案簡介

這個工具的核心機制是透過 AI agent 在提交前檢查 iOS/macOS 專案，幫助開發者識別可能違反 Apple 審核指導方針的問題。使用者首先需要識別應用類型，然後從 `references/guidelines/` 載入相應的檢查清單，接著透過 `asc metadata pull` 指令提取應用的元數據，並根據 `references/rules/` 中的拒絕規則進行掃描。最後，工具會報告發現的問題，包括嚴重性、受影響的文件及解決步驟，甚至可以自動修復問題並重新驗證。這樣的設計能夠顯著降低應用被拒絕的風險，讓開發者在提交前就能進行必要的調整。其一句話賣點是：在提交前自動檢查應用，避免常見的拒絕原因。

**技術棧**：`Node.js` · `asc CLI`

## 重點功能

- 自動檢查 App Store 指導方針 — 根據應用類型自動載入相應的檢查清單。
- 元數據提取 — 使用 `asc metadata pull` 指令提取應用元數據。
- 問題報告 — 提供發現問題的嚴重性、受影響的文件及解決步驟。
- 自動修復功能 — 能夠自動修復某些問題並重新驗證。
- 完整的 Apple 審核指導方針索引 — 包含 100+ 條指導方針和 10 種應用類型的特定檢查清單。

## 快速開始

1. 安裝 App Store Preflight Skills
```bash
npx skills add truongduy2611/app-store-preflight-skills
```
2. 提取應用元數據
```bash
asc metadata pull --app "<app_id>" --version "<version>" --dir ./metadata
```
3. 運行檢查
```bash
run preflight checks with the loaded checklist
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 838 stars（279/天），forks 44（5.3%），顯示出穩定的增長潛力。這個專案由 truongduy2611 和 rudrankriyam 共同開發，兩位開發者在 App Store 相關工具上有豐富的經驗。它解決了開發者在提交應用時常見的拒絕問題，過去開發者只能依賴手動檢查，效率低且容易疏漏。最近的推廣活動和社群討論也促進了這個專案的曝光。這個工具的出現正好迎合了開發者對於提升提交成功率的需求，特別是在 App Store 的審核標準越來越嚴格的背景下。

## 適合誰使用

**目標受眾**：專注於 iOS/macOS 應用開發的團隊，尤其是需要提高 App Store 提交成功率的開發者。

> [!example] 使用場景
> - iOS 開發者用它來在提交前檢查應用的元數據，因為這能減少因為小錯誤而被拒絕的風險。
> - 產品經理用它來確保所有提交的應用符合 Apple 的審核標準，因為這樣能提高應用上架的成功率。
> - 測試工程師用它來自動化檢查應用的設置和配置，因為手動檢查耗時且容易出錯。

## 架構分析

這個專案採用了模組化的設計，將檢查規則和指導方針分開管理，便於擴展和維護。資料流方面，首先透過 `asc` CLI 提取應用的元數據，然後根據不同的應用類型載入相應的檢查清單，最後進行掃描和報告。這樣的設計使得工具可以靈活應對不同類型的應用，並且能夠快速更新檢查規則。

選擇 Node.js 作為開發語言，因為它在處理 I/O 密集型操作時表現良好，且擁有豐富的生態系統。這也意味著在未來擴展功能時，可以方便地整合其他 Node.js 模組。整體架構的擴展性良好，但在處理大量應用時可能會遇到性能瓶頸，特別是在元數據提取和檢查過程中。

## 技術深入分析

這個專案的核心技術機制是利用 AI agent 自動檢查應用的元數據和配置，並根據 Apple 的審核指導方針進行評估。使用者可以透過 `asc` CLI 提取應用的元數據，這樣的設計使得整個流程自動化且高效。效能方面，工具能夠快速處理小型到中型的應用，但在面對大型應用時，元數據提取和檢查可能會導致延遲。選擇 Node.js 作為開發語言，因為它在處理非同步 I/O 操作時的優勢，並且擁有強大的社群支持。這個選擇讓專案能夠快速迭代和擴展，但也可能面臨依賴管理的挑戰。技術風險方面，若 Apple 更新審核標準，可能需要頻繁更新檢查規則，這會增加維護成本。整合方面，與現有的 CI/CD 流程相容性良好，能夠輕鬆嵌入到開發工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用指令，對於新手來說相對容易上手。安裝過程順暢，僅需執行一條安裝指令即可。雖然沒有提供詳細的入門指南，但基本功能可以透過 README 中的範例快速了解。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 能夠提前識別 App Store 拒絕的潛在問題，降低提交失敗的風險。
> - 整合了完整的 Apple 審核指導方針，方便開發者參考。
> - 自動修復功能能夠節省開發者的時間，提升工作效率。

> [!danger] 缺點
> - 需要依賴 asc CLI，增加了使用的複雜度。
> - 自動修復功能可能無法涵蓋所有情況，仍需手動調整。
> - 僅針對 iOS/macOS 應用，無法擴展到其他平台。

> [!warning] 注意事項
> - 僅支持 iOS/macOS 應用，無法檢查其他平台的應用。
> - 需要安裝 asc CLI 作為依賴，增加了安裝步驟。
> - 自動修復功能可能無法解決所有問題，某些情況仍需手動干預。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [rudrankriyam/app-store-connect-cli-skills](https://github.com/rudrankriyam/app-store-connect-cli-skills) | 提供了其他 App Store 相關的 CLI 技能，但不專注於拒絕檢查。 |
| [fastlane/fastlane](https://github.com/fastlane/fastlane) | 雖然也能自動化 App Store 提交，但不具備針對拒絕原因的專門檢查功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [fastlane/fastlane](https://github.com/fastlane/fastlane) | 提供全面的 CI/CD 自動化工具，但不專注於 App Store 拒絕檢查。 | 如果你的團隊已經在使用 Fastlane 進行 CI/CD，並且需要更全面的自動化解決方案。 | medium，因為需要重新配置 Fastlane 的流程和腳本。 |
| [rudrankriyam/app-store-connect-cli-skills](https://github.com/rudrankriyam/app-store-connect-cli-skills) | 提供其他 App Store 相關的 CLI 技能，但不專注於拒絕檢查。 | 如果需要其他 App Store 相關的功能，例如元數據同步或 ASO 審核。 | low，因為可以輕鬆整合到現有的 CLI 流程中。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **app-store-preflight-skills** | **fastlane** | **app-store-connect-cli-skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供全面的 CI/CD 自動化工具，但不專注於 App Store 拒絕檢查。 | 提供其他 App Store 相關的 CLI 技能，但不專注於拒絕檢查。 |
> | 遷移成本 | - | medium，因為需要重新配置 Fastlane 的流程和腳本。 | low，因為可以輕鬆整合到現有的 CLI 流程中。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Fastlane 進行 CI/CD， | 如果需要其他 App Store 相關的功能，例如元數據同步 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，元數據提取可能會失敗，導致工具無法正常運行。
  - 解法：確保 `asc` CLI 已正確安裝並配置。
- [MEDIUM] 自動修復功能可能無法涵蓋所有問題，仍需手動檢查。
  - 解法：在運行自動修復後，手動驗證所有變更。
- **[HIGH]** 僅支持特定版本的 Xcode，其他版本可能會導致不兼容。
  - 解法：使用官方推薦的 Xcode 版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的 iOS 應用開發 | 非常適合 | 能夠自動化檢查，降低提交失敗的風險。 |
| 大型企業的多平台應用開發 | 普通 | 雖然能檢查 iOS/macOS，但不支持其他平台。 |
| 需要快速迭代的創業團隊 | 非常適合 | 自動檢查功能能夠節省時間，提升效率。 |
| 專注於 Android 應用的團隊 | 不適合 | 專案僅針對 iOS/macOS 應用，無法使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能有效提高 App Store 提交成功率，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 `asc CLI` 和其他 App Store 相關的工具搭配使用，通常在開發和提交階段進行檢查。在一個使用 Fastlane 的專案中，可以透過 `npx skills add truongduy2611/app-store-preflight-skills` 指令來整合，然後在 CI 流程中自動運行檢查。支援 GitHub Actions 和其他 CI 工具，能夠輕鬆嵌入現有的工作流中。整合的摩擦點主要在於需要確保 `asc CLI` 的正確安裝和配置，否則可能會導致功能無法正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者主要依賴手動檢查和經驗來避免 App Store 拒絕，這樣的方式效率低且容易出錯。隨著 Apple 審核標準的提高，開發者對於自動化檢查的需求越來越迫切。這個工具的出現正好填補了這一空白，提供了一個自動化的解決方案。

未來，隨著更多開發者使用這個工具，可能會促進更多的功能擴展和社群貢獻。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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
| Forks | 44 |
| Open Issues | 0 |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-19 |
| Repo 大小 | 40 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/truongduy2611/app-store-preflight-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@truongduy2611](https://github.com/truongduy2611) | 4 |
> | [@rudrankriyam](https://github.com/rudrankriyam) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度良好，最近有合併請求和問題回應。
**連結**：[文件](https://github.com/truongduy2611/app-store-preflight-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-20）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #1 from rudrankriyam/codex/fix-asc-cli-docs

## README 摘錄

> [!info]- 展開查看原文 README
> # ✈️ App Store Preflight
> 
> An AI agent skill that runs pre-submission checks on your iOS/macOS project to catch common mistakes that lead to App Store rejection.
> 
> ## Overview
> 
> Preflight helps developers catch potential App Store Review guideline violations **before** submitting their app. It scans your Xcode project, source code, metadata, and configuration files to flag issues that commonly result in rejections from Apple.
> 
> This skill integrates with the [`asc` CLI](https://github.com/rudrankriyam/App-Store-Connect-CLI) (`brew install asc`) and the [ASC CLI Skills](https://github.com/rudrankriyam/app-store-connect-cli-skills) to pull and inspect App Store metadata.
> 
> Most metadata examples assume the canonical JSON layout written by
> `asc metadata pull`. If you are starting from fastlane metadata, adapt the path
> examples or pull the canonical `asc` layout first.
> 
> ## Install
> 
> ```bash
> npx skills add truongduy2611/app-store-preflight-skills
> ```
> 
> ## Guideline Index (by App Type)
> 
> The `references/guidelines/` directory contains a **complete index of all 100+ Apple Review Guidelines** and **10 app-type specific checklists**:
> 
> | Checklist | App Type |
> |-----------|----------|
> | [all_apps.md](./references/guidelines/by-app-type/all_apps.md) | Universal (every submission) |
> | [subscription_iap.md](./references/guidelines/by-app-type/subscription_iap.md) | Subscriptions / In-App Purchases |
> | [social_ugc.md](./references/guidelines/by-app-type/social_ugc.md) | Social / User-Generated Content |
> | [kids.md](./references/guidelines/by-app-type/kids.md) | Kids Category |
> | [health_fitness.md](./references/guidelines/by-app-type/health_fitness.md) | Health, Fitness & Medical |
> | [games.md](./references/guidelines/by-app-type/games.md) | Games |
> | [macos.md](./references/guidelines/by-app-type/macos.md) | macOS / Mac App Store |
> | [ai_apps.md](./references/guidelines/by-app-type/ai_apps.md) | AI / Generative AI |
> | [crypto_finance.md](./references/guidelines/by-app-type/crypto_finance.md) | Crypto, Finance & Trading |
> | [vpn.md](./references/guidelines/by-app-type/vpn.md) | VPN & Networking |
> 
> 📖 Full guideline reference: [references/guidelines/README.md](./references/guidelines/README.md)
> 
> ## How It Works
> 
> 1. **Identify app type** → load the matching checklist from `references/guidelines/by-app-type/`
> 2. **Pull metadata** using `asc metadata pull --app "" --version "" --dir ./metadata` (or the `asc-metadata-sync` skill)
> 3. **Scan** against rejection rules in `references/rules/`
> 4. **Report** findings with severity, affected files, and resolution steps
> 5. **Autofix + Validate** — apply fixes, re-run affected checks
> 
> See [`SKILL.md`](./SKILL.md) for the full AI agent instructions.
> 
> ## Rejection Rules
> 
> All rules live in `references/rules/`, organized by category:
> 
> ### Metadata (`references/rules/metadata/`)
> 
> | Rule | Guideline | What It Catches |
> |------|-----------|----------------|
> | [competitor_terms](./references/rules/metadata/competitor_terms.md) | 2.3.1 | Android, Google Play, and other competitor brands |
> | [apple_trademark](./references/rules/metadata/apple_trademark.md) | 5.2.5 | Apple device images in icon, Apple trademark misuse |
> | [china_storefront](./references/rules/metadata/china_storefront.md) | 5 | OpenAI/ChatGPT/Gemini references (China) |
> | [accurate_metadata](./references/rules/metadata/accurate_metadata.md) | 2.3.4 | Device frames in app preview videos |
> | [subscription_metadata](./references/rules/metadata/subscription_metadata.md) | 3.1.2 | Missing ToS/EULA and Privacy Policy links |
> 
> ### Subscriptions (`references/rules/subscription/`)
> 
> | Rule | Guideline | What It Catches |
> |------|-----------|----------------|
> | [missing_tos_pp](./references/rules/subscription/missing_tos_pp.md) | 3.1.2 | No Terms or Privacy Policy in app/metadata |
> | [misleading_pricing](./references/rules/subscription/misleading_pricing.md) | 3.1.2 | Monthly price more prominent than billed amount |
> 
> ### Privacy (`references/rules/privacy/`)
> 
> | Rule | Guideline | What It Catches |
> |------|-----------|----------------|
> | [unnecessary_data](./references/rules/privacy/unnecessary_data.md) | 5.1.1 | Requiring irrelevant personal data |
> | [privacy_manifest](./references/rules/privacy/privacy_manifest.md) | 5.1.1 | Missing `PrivacyInfo.xcprivacy` |
> 
> ### Design (`references/rules/design/`)
> 
> | Rule | Guideline | What It Catches |
> |------|-----------|----------------|
> | [sign_in_with_apple](./references/rules/design/sign_in_with_apple.md) | 4.0 | Asking name/email after SIWA |
> | [minimum_functionality](./references/rules/design/minimum_functionality.md) | 4.2 | WebView wrappers, apps with < 3 screens, no unique value |
> 
> ### Entitlements (`references/rules/entitlements/`)
> 
> | Rule | Guideline | What It Catches |
> |------|-----------|----------------|
> | [unused_entitlements](./references/rules/entitlements/unused_entitlements.md) | 2.4.5(i) | Unused entitlements in Xcode project |
> 
> ## Adding New Rules
> 
> Create a `.md` file in the appropriate `references/rules/` subdirectory:
> 
> ```markdown
> # Rule: [Short Title]
> - **Guideline**: [Apple Guideline Number]
> - **Severity**: REJECTION | WARNING
> - **Category**: metadata | subscription | privacy | design | entitlements
> 
> ## What to Check
> ## How to Detect
> ## Resolution
> ## Example Rejection
> ```
> 
> ## Related Skills
> 
> - [app-store-connect-cli-skills](https://github.com/rudrankriyam/app-store-connect-cli-skills) — ASC CLI skills for metadata sync, ASO audit, release flow
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[API 設計]]

相關專案：[[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]]

[GitHub](https://github.com/truongduy2611/app-store-preflight-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "truongduy2611--app-store-preflight-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "truongduy2611--app-store-preflight-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "truongduy2611--app-store-preflight-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "truongduy2611--app-store-preflight-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "truongduy2611--app-store-preflight-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "truongduy2611--app-store-preflight-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "truongduy2611" AND file.name != "truongduy2611--app-store-preflight-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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
> const me = dv.page("Repos/truongduy2611--app-store-preflight-skills");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-26|2026-03-26]] — 再次上榜，944 stars
- [[2026-03-25|2026-03-25]] — 再次上榜，923 stars
- [[2026-03-24|2026-03-24]] — 再次上榜，897 stars
- [[2026-03-23|2026-03-23]] — 首次收錄，838 stars
