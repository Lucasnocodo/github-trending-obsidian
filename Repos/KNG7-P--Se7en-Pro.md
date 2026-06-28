---
repo: KNG7-P/Se7en-Pro
url: https://github.com/KNG7-P/Se7en-Pro
owner: KNG7-P
owner_type: User
language: C#
license: MIT
description: ""
homepage: ""
stars: 492
stars_per_day: 13
forks: 37
open_issues: 10
created: 2026-05-20
pushed_at: 2026-05-25
first_seen: 2026-05-27
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "UI 工具"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-27
use_case: "提供一個現代化的 Windows 桌面客戶端，讓使用者能夠輕鬆使用 Psiphon 網路隧道。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-03"
contributor_count: 1
engagement: "low"
issue_close_rate: 33
repo_size_kb: 47078
readme_length: 6991
bus_factor: 1
last_release_days: 34
release_cadence: "quarterly"
verdict: ""
ring_history: "assess@2026-05-27"
star_history: "2026-05-27:378,2026-05-27:378,2026-05-28:392,2026-05-29:397,2026-05-30:408,2026-05-31:424,2026-06-01:431,2026-06-02:426,2026-06-03:433,2026-06-04:440,2026-06-05:443,2026-06-06:452,2026-06-07:456,2026-06-08:459,2026-06-09:460,2026-06-10:464,2026-06-11:467,2026-06-12:470,2026-06-13:473,2026-06-14:474,2026-06-15:474,2026-06-16:474,2026-06-17:476,2026-06-18:478,2026-06-19:482,2026-06-20:482,2026-06-21:485,2026-06-22:485,2026-06-24:488,2026-06-25:489,2026-06-26:491,2026-06-27:492,2026-06-28:492"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
aliases:
  - "Se7en-Pro"
  - "KNG7-P/Se7en-Pro"
  - "提供一個現代化的 Windows 桌面客戶端，讓使用者能夠輕鬆使用 Psiphon 網路隧道。"
---

# Se7en-Pro

**492** stars · **13** stars/天 · 建立 38 天前 · C# · MIT

```dataviewjs
const me = dv.page("Repos/KNG7-P--Se7en-Pro");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.1`

> [!summary] 一句話摘要
> 提供一個現代化的 Windows 桌面客戶端，讓使用者能夠輕鬆使用 Psiphon 網路隧道。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (13 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 33 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要自定義 Psiphon 客戶端的開發者和技術愛好者。
> **一句話重點** 這個專案展示了如何將 Psiphon 的強大功能與現代化的用戶界面相結合，提供了更多的自定義選擇。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "UI 工具" && p.file.name !== "KNG7-P--Se7en-Pro" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 UI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的 Psiphon 客戶端，值得嘗試。

> [!abstract] 核心創新
> 提供了一個現代化的 UI 層，讓 Psiphon 的使用變得更加友好和可定制。

## 專案簡介

這個專案是基於 Psiphon 3 的一個現代化 Windows 桌面客戶端，使用 C# 和 WPF 實現。核心機制是通過 MVVM 模式來組織 UI，並提供一個用於配置和啟動 Psiphon 隧道的界面。用戶需要手動填寫 Psiphon 所需的配置參數，如 PropagationChannelId 和 SponsorId，這些參數不會隨專案一起提供。這意味著用戶必須從官方 Psiphon 客戶端或自己的部署中獲取這些值。專案的賣點在於提供了一個可擴展的 UI，並支持多種主題和系統設置選項，如啟動時最小化到系統托盤。

技術上，專案使用了 .NET 8 和 Material Design In XAML Toolkit，並且可以選擇性地集成 Xray-core 進行系統範圍的隧道。與其他類似工具相比，如 Psiphon 的官方客戶端，這個專案提供了更靈活的 UI 和自定義選項，但需要用戶自行配置必要的連接參數。實際使用中，使用者可能會遇到配置不當導致無法連接的問題，這需要仔細檢查配置文件。專案目前處於 beta 階段，社群活躍度中等，解決問題的速度也相對較慢。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需謹慎考量其穩定性和配置的複雜性。

**技術棧**：`C#` · `.NET 8` · `WPF`

## 重點功能

- MVVM 架構 — 使用 CommunityToolkit.Mvvm 來實現清晰的代碼結構和可維護性。
- 主題支持 — 提供多種主題選擇，包括深色和淺色模式，使用 Material Design 風格。
- 單實例強制 — 使用命名互斥鎖來確保應用程序的單一實例運行。
- 系統範圍隧道 — 可選擇集成 Xray-core 進行系統範圍的隧道設置。
- CDN 前端支持 — 提供 Akamai、Cloudflare 等 CDN 前端的幫助功能。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/KNG7-P/Se7en-Pro.git
```
2. 安裝 .NET SDK 8
```bash
從 https://dotnet.microsoft.com/download/dotnet/8.0 下載並安裝
```
3. 構建專案
```bash
dotnet build PsiphonUI/PsiphonUI.csproj -c Release -r win-x64 --self-contained false
```
4. 運行應用
```bash
cd PsiphonUI/bin/Release/net8.0-windows10.0.19041.0/win-x64 && .\PsiphonUI.exe
```

## 程式碼範例

```csharp
{
  "前置條件": "需要填寫 EmbeddedValues.cs 中的配置參數",
  "指令": "public const string PropagationChannelId = \"PROPAGATION_CHANNEL_ID\";\npublic const string SponsorId = \"SPONSOR_ID\";",
  "預期輸出": "應用將能夠成功連接到 Psiphon 網路。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 38 天內累積 492 stars（約 13 stars/天），forks 數量為 37（7.5%），顯示出一定的社群關注度。作者 KNG7-P 似乎專注於開發與 Psiphon 相關的工具，這個專案填補了使用 Psiphon 的 UI 需求，因為官方客戶端的 UI 可能不夠靈活。最近的 commit 活躍度也顯示出開發者對於改進和修復問題的持續投入。社群中出現了一些熱門問題，顯示出使用者在配置和穩定性方面的挑戰，這可能促使更多人關注這個專案。

## 適合誰使用

**目標受眾**：需要自定義 Psiphon 客戶端的開發者和技術愛好者。

> [!example] 使用場景
> - 獨立開發者用它來構建自定義的 Psiphon 客戶端，因為它提供了靈活的 UI 和配置選項，能夠滿足個性化需求。
> - 小型企業的 IT 管理員用它來設置安全的網路隧道，因為它支持系統範圍的隧道配置，能夠保護整個網路流量。
> - 技術愛好者用它來學習和實驗 Psiphon 的工作原理，因為它的開源性質和可擴展性使得深入研究變得容易。

## 架構分析

這個專案採用了 MVVM 架構，這使得 UI 和業務邏輯分離，便於維護和擴展。資料流方面，使用 WPF 來構建用戶界面，並通過服務層來管理 Psiphon 隧道的啟動和配置。選擇 .NET 8 作為開發平台，因為它提供了最新的功能和性能優化，但也意味著需要用戶安裝最新的 SDK。這個架構的代價是對於不熟悉 MVVM 模式的開發者來說，學習曲線可能會稍微陡峭。擴展性方面，由於使用了開源的 Xray-core，未來可以輕鬆集成更多的功能和服務。

## 技術深入分析

這個專案的核心技術機制是基於 MVVM 模式，使用 WPF 來構建用戶界面，這使得 UI 和業務邏輯的分離變得簡單。效能方面，由於使用了 .NET 8，應用在啟動和運行時的性能都有所提升，但具體的效能數據尚未提供。設計上選擇了開源的 Xray-core 來支持系統範圍的隧道，這樣的選擇使得應用能夠靈活應對不同的網路需求，但也增加了配置的複雜性。技術風險方面，由於專案仍在 beta 階段，未來可能會面臨穩定性和兼容性問題。與主流框架的整合難度相對較低，但對於不熟悉 WPF 的開發者來說，學習成本可能會增加。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，但缺乏具體的範例和詳細的配置說明。安裝過程相對順暢，但對於新手來說，可能需要額外的學習時間來理解配置步驟。整體上，花 30 分鐘應該能夠成功運行起來，但配置可能需要更多的時間。

## 優缺點分析

> [!success] 優點
> - 現代化的 UI 設計，提供良好的用戶體驗。
> - 靈活的配置選項，支持多種主題和功能擴展。
> - 開源專案，社群支持和可定制性強。

> [!danger] 缺點
> - 配置過程相對複雜，對於新手不友好。
> - 目前仍在 beta 階段，可能存在穩定性問題。
> - 缺乏完整的文檔和使用範例。

> [!warning] 注意事項
> - 需要手動配置 Psiphon 的連接參數，否則無法連接。
> - 目前僅支援 Windows 10/11 (x64)。
> - 對於非技術用戶來說，配置過程可能過於複雜。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Psiphon-Labs/psiphon-windows](https://github.com/Psiphon-Labs/psiphon-windows) | 官方客戶端提供完整功能，但缺乏自定義 UI 和擴展性。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的隧道功能，但主要針對不同的用戶界面設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Psiphon-Labs/psiphon-windows](https://github.com/Psiphon-Labs/psiphon-windows) | 官方客戶端提供完整的功能和穩定性，但缺乏自定義的 UI 和擴展性。 | 如果需要一個穩定且功能完整的 Psiphon 客戶端，這是更好的選擇。 | low，因為用戶只需下載並安裝即可。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的隧道功能，但主要針對不同的用戶界面設計。 | 如果需要一個簡單的界面和快速的設置，這可能是更好的選擇。 | medium，因為需要重新配置和適應新的界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Se7en-Pro** | **psiphon-windows** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 官方客戶端提供完整的功能和穩定性，但缺乏自定義的 UI 和擴展性。 | 提供類似的隧道功能，但主要針對不同的用戶界面設計。 |
> | 遷移成本 | - | low，因為用戶只需下載並安裝即可。 | medium，因為需要重新配置和適應新的界面。 |
> | 適用場景 | 主要場景 | 如果需要一個穩定且功能完整的 Psiphon 客戶端，這是更 | 如果需要一個簡單的界面和快速的設置，這可能是更好的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 配置文件中的參數未正確填寫，導致無法連接。
  - 解法：仔細檢查 EmbeddedValues.cs 中的參數是否正確。
- [MEDIUM] 在高流量情況下可能會崩潰。
  - 解法：減少同時連接數量，或考慮使用 CDN 前端。
- [MEDIUM] 缺少詳細的文檔和範例，可能導致使用者困惑。
  - 解法：參考官方 Psiphon 文檔以獲取更多配置資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內部工具開發 | 適合 | 提供靈活的 UI 和自定義選項，適合快速迭代。 |
| 大型企業的安全網路設置 | 不適合 | 配置過程複雜，對於非技術用戶不友好。 |
| 個人項目或實驗性專案 | 非常適合 | 開源且可擴展，適合技術愛好者探索。 |
| 需要穩定的商業應用 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的 Psiphon 客戶端，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：應用不需要高權限，但需要用戶提供敏感的 Psiphon 參數。對於 CI/CD 使用需謹慎，確保不將敏感信息公開。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Windows 環境搭配使用，特別是在需要網路隧道的情境中。實際整合範例包括在使用 Visual Studio 開發的應用中，將 PsiphonUI 作為網路連接的 UI 層。與主流 CI 工具如 GitHub Actions 的相容性尚未明確，但由於其開源性質，未來可能會有插件或擴展出現。整合的摩擦點主要在於配置過程的複雜性，特別是對於不熟悉 Psiphon 的用戶來說。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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
| Forks | 37 |
| Open Issues | 10 |
| Issue 解決率 | 33% (5 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-20 |
| Repo 大小 | 46.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KNG7-P/Se7en-Pro) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C#" : 95
>     "Python" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KNG7-P](https://github.com/KNG7-P) | 3 |

**最新版本**：v1.0.1 — Se7enPro v1.0.1 (2026-05-25)

## 社群與生態

**社群活躍度**：社群活躍度中等，解決問題的速度較慢。
**連結**：[文件](https://github.com/KNG7-P/Se7en-Pro/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-25）
> **活躍天數** 2 天 · **最新 commit** Release v1.0.1 - Core Refactor, UI Improvements & Advanced Networking Features

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/KNG7-P/Se7en-Pro/issues/9) | مشکل در مرحله نهایی اتصال | 5 | 5 |
> | [#10](https://github.com/KNG7-P/Se7en-Pro/issues/10) | درخواست از سازنده | 1 | 1 |
> | [#15](https://github.com/KNG7-P/Se7en-Pro/issues/15) | please update the software and add new options | 0 | 0 |
> | [#14](https://github.com/KNG7-P/Se7en-Pro/issues/14) | add conduit connection  | 0 | 0 |
> | [#13](https://github.com/KNG7-P/Se7en-Pro/issues/13) | Stability issues in v1.0.1: Connection loop on static ports, | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # PsiphonUI
> 
> A modern, MVVM-based Windows desktop client built on top of the official
> [Psiphon 3](https://github.com/Psiphon-Inc/psiphon-windows) network tunnel.
> This project provides only the UI / orchestration layer in C# / WPF /
> [.NET 8](https://dotnet.microsoft.com/) — it does **not** include any
> Psiphon credentials, server lists, or sponsor identifiers. Those are
> provided by you (see [Configuration](#configuration) below).
> 
> The repo is published as a clean starting point for anyone who wants to
> build their own Windows UI around `psiphon-tunnel-core.exe`.
> 
> ---
> 
> ## Features
> 
> - WPF + [Material Design In XAML Toolkit](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit)
>   (Material Design 3) UI, dark / light / themed palettes
> - MVVM with [CommunityToolkit.Mvvm](https://github.com/CommunityToolkit/dotnet)
> - Single-instance enforcement via a named mutex; re-launching the .exe while
>   the app is hidden in the tray restores the window via a named
>   `EventWaitHandle` signal
> - Pages: Home, Settings, Logs, About, IP Scanner
> - Optional system-wide tunneling via [Xray-core](https://github.com/XTLS/Xray-core)
>   + [wintun](https://www.wintun.net/)
> - Optional CDN-fronting helpers (Akamai / Cloudflare / Fastly / Bunny)
> - Start with Windows, minimize to tray, allow LAN connections, etc.
> 
> ---
> 
> ## Project layout
> 
> ```
> PsiphonUI/
>   Assets/                       application icon
>   Converters/                   value converters used in XAML
>   Models/                       plain DTOs (UserSettings, Notice, …)
>   Resources/
>     Flags/                      country flag PNGs
>     akamai_seed_ips.txt         curated Akamai CDN seed IPs (embedded resource)
>     psiphon-tunnel-core.exe     bundled - Psiphon-Labs/psiphon-tunnel-core (GPLv3)
>     server_entries.txt          (optional) you provide — Psiphon embedded server list
>     xray/
>       xray.exe                  bundled - XTLS/Xray-core (MPL-2.0)
>       wintun.dll                bundled - wintun.net (GPLv2)
>       geosite.dat / geoip.dat   bundled - Loyalsoldier/v2ray-rules-dat
>   Services/                     app services (TunnelCoreManager, SettingsService, …)
>   Themes/                       ResourceDictionaries for the Material palettes
>   ViewModels/                   one VM per page + the main shell VM
>   Views/                        .xaml + .xaml.cs (one per page)
>   App.xaml / App.xaml.cs        DI host, single-instance, tray glue
>   PsiphonUI.csproj
> ```
> 
> ---
> 
> ## Build
> 
> Requirements:
> 
> - Windows 10 / 11 (x64)
> - [.NET SDK 8](https://dotnet.microsoft.com/download/dotnet/8.0)
> - Visual Studio 2022 (17.8+) or the `dotnet` CLI
> 
> From the repo root:
> 
> ```bash
> dotnet build PsiphonUI\PsiphonUI.csproj -c Release -r win-x64 --self-contained false
> ```
> 
> Or open `PsiphonUI.sln` in Visual Studio 2022 → press F5.
> 
> The app starts and shows a connect button, but **it will not actually
> connect** until you complete [Configuration](#configuration) below — the
> bundled `psiphon-tunnel-core.exe` is real but it has no
> `PropagationChannelId` / `SponsorId` to authenticate with.
> 
> ---
> 
> ## Configuration
> 
> The values that Psiphon needs in order to talk to its network are NOT
> shipped in this repo. To make the app connect you have to provide them
> yourself, from the official Psiphon distribution or your own Psiphon
> network deployment.
> 
> ### 1. Fill in `EmbeddedValues`
> 
> Open `PsiphonUI/Services/EmbeddedValues.cs`. Every constant is currently
> a placeholder:
> 
> ```csharp
> public const string PropagationChannelId = "PROPAGATION_CHANNEL_ID";
> public const string SponsorId           = "SPONSOR_ID";
> // public RSA / Ed25519 keys, fronted URL lists, feedback upload URLs, …
> ```
> 
> Replace each placeholder with the matching value from the official
> Psiphon 3 client (look in `psiphon-windows/src/embeddedvalues.h` upstream)
> or from your own propagation channel / sponsor configuration. The
> property names line up 1:1 with the C++ build's `embeddedvalues.h` and
> with `psiphon-tunnel-core`'s `tunnel-core-config.json` schema, so any
> upstream `embeddedvalues.h` should drop in cleanly.
> 
> > **Important:** never commit real `PropagationChannelId` / `SponsorId`
> > / fronted URL lists to a public repository. Keep your real values in
> > a private fork or use a build-time secret-injection step.
> 
> ### 2. (Optional) Provide an embedded server list
> 
> The redistributable binaries (`psiphon-tunnel-core.exe`, `xray.exe`,
> `wintun.dll`, `geosite.dat`, `geoip.dat`) are already bundled under
> `PsiphonUI/Resources/`, so the project builds and runs out of the box.
> 
> The only file you might want to add yourself is
> `PsiphonUI/Resources/server_entries.txt` — a plain-text list of pre-known
> Psiphon servers (one JSON entry per line) used for the initial bootstrap
> before tunnel-core can fetch a fresh remote server list. Without it,
> tunnel-core will rely entirely on the fronted remote server list URLs
> you configured in `EmbeddedValues.cs`.
> 
> The `.csproj` uses `Condition="Exists(...)"` for `server_entries.txt`,
> so the project still compiles whether or not the file is present.
> 
> ### 3. (Optional) Rebrand
> 
> The csproj `Product` / `Company`, the window titles, the tray text, the
> single-instance mutex name, and the registry value used for "Start with
> Windows" all currently read `PsiphonUI`. Search for `PsiphonUI` and replace
> it with your product name if you publish a downstream build.
> 
> ---
> 
> ## Run
> 
> ```bash
> cd PsiphonUI\bin\Release\net8.0-windows10.0.19041.0\win-x64
> .\PsiphonUI.exe
> ```
> 
> On first run the app creates `%LOCALAPPDATA%\PsiphonUI\` for settings and
> uses `%LOCALAPPDATA%\Psiphon\tunnel-core\` as the data directory for the
> underlying tunnel-core process (same path the official Psiphon Windows
> client uses, so logs and server state are interchangeable).
> 
> ---
> 
> ## License
> 
> The **C# / XAML source code** in this repository is published under the
> MIT License — see [LICENSE](LICENSE).
> 
> The binaries bundled under `PsiphonUI/Resources/` are **not** MIT-licensed.
> They are redistributed unmodified under their original licenses, listed
> below with links to the upstream source. If you fork or repackage this
> project, you must continue to honor each of those licenses.
> 
> | Bundled file                       | Upstream                                                                                       | License |
> | ---------------------------------- | ---------------------------------------------------------------------------------------------- | ------- |
> | `psiphon-tunnel-core.exe`          | [Psiphon-Labs/psiphon-tunnel-core](https://github.com/Psiphon-Labs/psiphon-tunnel-core)        | GPLv3   |
> | `xray/xray.exe`                    | [XTLS/Xray-core](https://github.com/XTLS/Xray-core)                                            | MPL-2.0 |
> | `xray/wintun.dll`                  | [wintun.net](https://www.wintun.net/)                                                          | GPLv2   |
> | `xray/geosite.dat`, `geoip.dat`    | [Loyalsoldier/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)                | per upstream |

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[網路安全]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]]

[GitHub](https://github.com/KNG7-P/Se7en-Pro)

## 相關收錄

> [!note]- 直接競品（同子分類：UI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "UI 工具" AND file.name != "KNG7-P--Se7en-Pro"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "KNG7-P--Se7en-Pro"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C#" AND file.name != "KNG7-P--Se7en-Pro" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "KNG7-P--Se7en-Pro"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","網路安全"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "KNG7-P--Se7en-Pro" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KNG7-P--Se7en-Pro" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KNG7-P" AND file.name != "KNG7-P--Se7en-Pro"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
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

> **2026-05-27** — 首次收錄
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

- [[2026-05-27|2026-05-27]] — 首次收錄，378 stars
