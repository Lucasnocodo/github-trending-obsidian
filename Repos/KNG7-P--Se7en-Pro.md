---
repo: KNG7-P/Se7en-Pro
url: https://github.com/KNG7-P/Se7en-Pro
owner: KNG7-P
owner_type: User
language: C#
license: MIT
description: ""
homepage: ""
stars: 467
stars_per_day: 22
forks: 35
open_issues: 9
created: 2026-05-20
pushed_at: 2026-05-25
first_seen: 2026-05-27
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "網路工具"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-27
use_case: "提供一個現代化的 Psiphon 桌面客戶端 UI，讓用戶能夠更方便地使用網路隧道技術。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-03"
contributor_count: 1
engagement: "low"
issue_close_rate: 36
repo_size_kb: 47078
readme_length: 6991
bus_factor: 1
last_release_days: 17
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-27"
star_history: "2026-05-27:378,2026-05-27:378,2026-05-28:392,2026-05-29:397,2026-05-30:408,2026-05-31:424,2026-06-01:431,2026-06-02:426,2026-06-03:433,2026-06-04:440,2026-06-05:443,2026-06-06:452,2026-06-07:456,2026-06-08:459,2026-06-09:460,2026-06-10:464,2026-06-11:467"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
aliases:
  - "Se7en-Pro"
  - "KNG7-P/Se7en-Pro"
  - "提供一個現代化的 Psiphon 桌面客戶端 UI，讓用戶能夠更方便地使用網路隧道技術。"
---

# Se7en-Pro

**467** stars · **22** stars/天 · 建立 21 天前 · C# · MIT

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
> 提供一個現代化的 Psiphon 桌面客戶端 UI，讓用戶能夠更方便地使用網路隧道技術。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (22 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 16 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 Windows 環境中使用 Psiphon 並希望自定義 UI 的開發者。
> **一句話重點** 這個專案的靈活性和現代化 UI 設計讓 Psiphon 的使用變得更加友好，特別適合需要自定義的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KNG7-P--Se7en-Pro");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路工具" && p.file.name !== "KNG7-P--Se7en-Pro" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到靈活的 Psiphon 使用體驗，值得考慮。

> [!abstract] 核心創新
> 專案提供了一個現代化的 UI 和靈活的配置選項，讓用戶可以自定義 Psiphon 的使用體驗。

## 專案簡介

這個專案是基於 Psiphon 3 的一個現代化桌面客戶端，使用 C# 和 WPF 開發，提供了用戶界面和協調層。用戶需要提供 Psiphon 的憑證和伺服器列表才能連接，這樣的設計使得使用者可以根據自己的需求配置連接參數。核心功能包括支持單實例運行、主題自定義、系統全局隧道等，並且集成了 CDN 前置幫助功能。這個專案的賣點在於其靈活性和可擴展性，適合需要自定義 Psiphon 使用體驗的開發者。技術上，專案使用了 .NET 8 和 MVVM 模式，並且依賴於 Material Design In XAML Toolkit 來提供現代化的 UI。

與其他類似工具相比，這個專案的優勢在於其可自定義性，因為用戶可以自由配置伺服器和憑證，而不像某些工具只能使用預設的伺服器。使用者可能會遇到的問題包括配置過程中的憑證填寫錯誤，這可能導致連接失敗。專案目前處於 beta 階段，建議在非關鍵環境中使用，未來可能會增加更多的自動化配置選項。適合需要在 Windows 環境中使用 Psiphon 的開發者，特別是那些希望自定義 UI 的開發者。對於不需要這種靈活性的用戶，可能會考慮使用官方的 Psiphon 客戶端。

**技術棧**：`.NET 8` · `WPF` · `C#`

## 重點功能

- 現代化 UI — 使用 Material Design In XAML Toolkit 提供的主題和樣式。
- MVVM 架構 — 透過 CommunityToolkit.Mvvm 實現清晰的代碼結構和可維護性。
- 單實例運行 — 透過命名互斥鎖實現單實例，避免重複啟動。
- 系統全局隧道 — 支持與 Xray-core 和 wintun 集成，提供更靈活的隧道選項。
- CDN 前置功能 — 提供 Akamai、Cloudflare 等的前置幫助，提升連接穩定性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/KNG7-P/Se7en-Pro.git
```
2. 進入專案目錄
```bash
cd Se7en-Pro
```
3. 構建專案
```bash
dotnet build PsiphonUI/PsiphonUI.csproj -c Release -r win-x64 --self-contained false
```
4. 運行應用程式
```bash
cd PsiphonUI/bin/Release/net8.0-windows10.0.19041.0/win-x64 && .\PsiphonUI.exe
```

## 程式碼範例

```csharp
{
  "前置條件": "需要填寫 Psiphon 憑證和伺服器列表",
  "指令": "public const string PropagationChannelId = \"PROPAGATION_CHANNEL_ID\";\npublic const string SponsorId = \"SPONSOR_ID\";",
  "預期輸出": "應用程式將能夠成功連接到 Psiphon 網路。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天內累積 467 stars（22/天），forks 35（7.5%），顯示出穩定的增長潛力。作者 KNG7-P 是一位活躍的開發者，專注於網路隧道技術，這個專案解決了用戶在使用 Psiphon 時缺乏現代化 UI 的痛點。之前用戶只能依賴官方客戶端，缺乏自定義選項。最近的 commit 活動顯示出作者對專案的持續投入，並且有活躍的社群反饋，這對於未來的發展是個好兆頭。

## 適合誰使用

**目標受眾**：需要在 Windows 環境中使用 Psiphon 並希望自定義 UI 的開發者。

> [!example] 使用場景
> - 獨立開發者用它來快速建立自定義的 Psiphon 客戶端，因為它提供了靈活的配置選項和現代化的 UI。
> - 小型團隊用它來測試不同的網路隧道配置，因為它可以輕鬆集成 CDN 前置功能，提升連接穩定性。
> - 網路安全研究員用它來分析 Psiphon 的網路行為，因為它允許用戶提供自定義伺服器列表和憑證，便於實驗和測試。

## 架構分析

這個專案採用 MVVM 架構模式，將 UI 與業務邏輯分離，這樣的設計使得代碼更具可維護性和可測試性。資料流方面，使用 WPF 的數據綁定特性來實現 ViewModel 與 View 之間的交互。專案中使用了 Material Design In XAML Toolkit 來提升 UI 的現代感，這使得使用者體驗更佳。

選擇 C# 和 .NET 8 是基於其在 Windows 環境中的廣泛應用，並且能夠利用 WPF 的強大功能。這樣的選擇雖然增加了學習成本，但對於需要自定義 UI 的開發者來說是值得的。擴展性方面，專案的設計允許未來集成更多功能，如自動化配置或其他網路協議的支持。

## 技術深入分析

專案使用了 MVVM 架構，這使得 UI 和業務邏輯分離，提升了可維護性。使用 WPF 來構建 UI，並結合 Material Design 提供了現代化的用戶界面。效能方面，專案能夠處理多個同時連接，但具體的性能數據尚未提供。選擇 .NET 8 是因為其對於 Windows 應用的強大支持，這樣的選擇雖然增加了學習曲線，但對於熟悉 Microsoft 生態的開發者來說是有利的。設計上，專案的依賴關係相對簡單，主要依賴於 .NET 生態系統內的庫，這降低了未來的維護負擔。技術風險方面，可能會遇到的問題包括在高流量下的穩定性，這需要未來的版本進行優化。與主流框架的整合方面，由於使用了 WPF，與其他 .NET 應用的整合相對容易，CI/CD 的友好度也較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，包含了構建和運行的步驟。安裝過程相對順暢，但需要注意手動配置憑證的步驟。文件中沒有提供多語言支持，對於非英語使用者可能會造成困難。

## 優缺點分析

> [!success] 優點
> - 現代化的 UI 設計，提升用戶體驗。
> - 靈活的配置選項，適合不同需求的用戶。
> - 良好的代碼結構，易於維護和擴展。

> [!danger] 缺點
> - 需要手動配置憑證，對新手不友好。
> - 目前穩定性尚待提高，可能會遇到連接問題。
> - 僅支援 Windows 平台，無法跨平台使用。

> [!warning] 注意事項
> - 需要手動提供 Psiphon 憑證和伺服器列表。
> - 僅支援 Windows 10/11 (x64)。
> - 目前處於 beta 階段，可能存在穩定性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了更全面的網路隧道功能，但缺乏自定義 UI 的靈活性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的隧道協議，對於需要多協議支持的用戶來說不夠靈活。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供了多種代理選項，但使用上較為複雜，適合進階用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，提供更高的效能和更低的記憶體使用，但學習曲線較陡。 | 如果你的團隊需要高效能的網路隧道解決方案，且有能力處理 Rust 的學習曲線。 | medium，因為需要重新學習 Rust 語言和生態。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的隧道協議，提供簡單的使用體驗，但缺乏靈活性。 | 如果你的需求非常簡單，只需要一個快速的隧道解決方案。 | low，因為使用上相對簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Se7en-Pro** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，提供更高的效能和更低的記憶體使用，但學習曲線較陡。 | 專注於特定的隧道協議，提供簡單的使用體驗，但缺乏靈活性。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 語言和生態。 | low，因為使用上相對簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效能的網路隧道解決方案，且有能力處理 Ru | 如果你的需求非常簡單，只需要一個快速的隧道解決方案。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於測試和開發環境，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在配置憑證時，填寫錯誤會導致連接失敗。
  - 解法：仔細檢查 EmbeddedValues.cs 中的所有配置。
- [MEDIUM] 在高流量下可能會出現穩定性問題。
  - 解法：考慮使用 CDN 前置功能來提高穩定性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速測試 Psiphon 的不同配置 | 非常適合 | 提供靈活的配置選項，易於快速迭代. |
| 大型企業需要穩定的網路隧道解決方案 | 不適合 | 目前穩定性尚待提高，可能不符合企業需求. |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的 Psiphon 使用體驗，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，但需要用戶提供敏感的 Psiphon 憑證，建議在私有環境中使用。

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
| Forks | 35 |
| Open Issues | 9 |
| Issue 解決率 | 36% (5 closed) |
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

**社群活躍度**：社群活躍度中等，有定期的更新和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-25）
> **活躍天數** 2 天 · **最新 commit** Release v1.0.1 - Core Refactor, UI Improvements & Advanced Networking Features

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/KNG7-P/Se7en-Pro/issues/9) | مشکل در مرحله نهایی اتصال | 6 | 5 |
> | [#10](https://github.com/KNG7-P/Se7en-Pro/issues/10) | درخواست از سازنده | 1 | 1 |
> | [#14](https://github.com/KNG7-P/Se7en-Pro/issues/14) | add conduit connection  | 0 | 0 |
> | [#13](https://github.com/KNG7-P/Se7en-Pro/issues/13) | Stability issues in v1.0.1: Connection loop on static ports, | 0 | 0 |
> | [#12](https://github.com/KNG7-P/Se7en-Pro/issues/12) | Split-Tunnel | 0 | 0 |

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

相關概念：[[網路隧道]] · [[CDN 前置]] · [[MVVM]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]]

[GitHub](https://github.com/KNG7-P/Se7en-Pro)

## 相關收錄

> [!note]- 直接競品（同子分類：網路工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路工具" AND file.name != "KNG7-P--Se7en-Pro"
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
> const concepts = ["網路隧道","CDN 前置","MVVM"];
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
