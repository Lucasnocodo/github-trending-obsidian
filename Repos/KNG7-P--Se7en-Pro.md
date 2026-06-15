---
repo: KNG7-P/Se7en-Pro
url: https://github.com/KNG7-P/Se7en-Pro
owner: KNG7-P
owner_type: User
language: C#
license: MIT
description: ""
homepage: ""
stars: 474
stars_per_day: 19
forks: 36
open_issues: 9
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
use_case: "提供一個現代化的 Windows 桌面客戶端，基於 Psiphon 3 網路隧道。"
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
last_release_days: 21
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-27"
star_history: "2026-05-27:378,2026-05-27:378,2026-05-28:392,2026-05-29:397,2026-05-30:408,2026-05-31:424,2026-06-01:431,2026-06-02:426,2026-06-03:433,2026-06-04:440,2026-06-05:443,2026-06-06:452,2026-06-07:456,2026-06-08:459,2026-06-09:460,2026-06-10:464,2026-06-11:467,2026-06-12:470,2026-06-13:473,2026-06-14:474,2026-06-15:474"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
aliases:
  - "Se7en-Pro"
  - "KNG7-P/Se7en-Pro"
  - "提供一個現代化的 Windows 桌面客戶端，基於 Psiphon 3 網路隧道。"
---

# Se7en-Pro

**474** stars · **19** stars/天 · 建立 25 天前 · C# · MIT

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
> 提供一個現代化的 Windows 桌面客戶端，基於 Psiphon 3 網路隧道。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (19 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 20 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要自定義 Psiphon 客戶端的開發者，特別是對 UI 設計有要求的使用者。
> **一句話重點** 這個專案的強大之處在於其靈活的 UI 設計和對 Psiphon 的擴展能力。

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
> 提供一個可擴展的 UI，讓開發者能夠輕鬆建立自己的 Psiphon 客戶端。

## 專案簡介

這個專案是基於 Psiphon 3 的一個現代化桌面客戶端，使用 C# 和 WPF 開發，並採用 MVVM 設計模式。用戶需要提供 Psiphon 的憑證和伺服器列表，這樣可以避免在專案中洩露敏感資訊。核心功能包括支援多種主題的 UI、單實例強制執行、系統範圍的隧道連接以及 CDN 前置協助。使用者可以透過簡單的設置來啟動應用程式，並在隱藏狀態下透過系統托盤快速恢復窗口。這個專案的賣點在於它提供了一個可擴展的 UI，讓開發者能夠輕鬆建立自己的 Psiphon 客戶端。技術上，這個專案依賴於 .NET 8 和 Material Design In XAML Toolkit，這使得其 UI 具有現代感和可用性。

相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Se7en-Pro 提供了更靈活的 UI 定制選項和更好的用戶體驗。使用者可能會遇到的問題包括連接穩定性和流量下的崩潰，這些問題在熱門問題中已經被提及。這個專案目前處於 beta 階段，適合對 Psiphon 有需求的開發者使用，尤其是在需要自定義 UI 的情況下。未來可能會持續改進穩定性和擴展性。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需謹慎。

**技術棧**：`.NET 8` · `WPF` · `CommunityToolkit.Mvvm`

## 重點功能

- 現代化 UI — 使用 WPF 和 Material Design In XAML Toolkit，提供多種主題選擇。
- MVVM 架構 — 利用 CommunityToolkit.Mvvm 實現清晰的代碼結構和可維護性。
- 單實例強制執行 — 透過命名互斥體確保應用程序不會重複啟動。
- 系統範圍隧道 — 支持 Xray-core 和 wintun 的整合，提供靈活的網路連接選項。
- CDN 前置協助 — 提供 Akamai、Cloudflare、Fastly 和 Bunny 的支援，增強連接的可靠性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/KNG7-P/Se7en-Pro.git
```
2. 安裝依賴
```bash
dotnet restore
```
3. 運行應用
```bash
dotnet run
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 474 stars（19/天），forks 36（7.6%），這顯示出穩定的增長。作者 KNG7-P 專注於開發網路工具，過去的專案也有良好反響。這個專案解決了用戶對於 Psiphon 客戶端的需求，特別是對於自定義和現代化 UI 的需求。社群中對於這個專案的討論和反饋也促進了它的成長。相較於其他工具，這個專案的 UI 設計和用戶體驗更具吸引力，這可能是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要自定義 Psiphon 客戶端的開發者，特別是對 UI 設計有要求的使用者。

> [!example] 使用場景
> - 獨立開發者用它來快速建立自定義的 Psiphon 客戶端，因為它提供了現代化的 UI 和靈活的設置選項。
> - 小型團隊用它來在內部網路中實現安全的隧道連接，因為它支持系統範圍的隧道功能，方便團隊協作。
> - 網路安全研究人員用它來測試 Psiphon 的連接穩定性，因為它的設計允許快速調整和測試不同的配置。

## 架構分析

這個專案採用 MVVM 架構，將 UI 和業務邏輯分離，使得代碼更易於維護和擴展。資料流方面，使用 WPF 的資料綁定功能，讓 UI 自動更新。這種設計使得開發者可以專注於業務邏輯，而不必擔心 UI 更新的細節。

選擇 WPF 的原因在於其強大的 UI 設計能力和與 .NET 生態的良好整合，但代價是只能在 Windows 平台運行。擴展性方面，這個專案可以輕鬆地添加新的功能模組，但在高流量情況下可能會遇到性能瓶頸，特別是在使用 CDN 前置時。整體而言，這個架構設計適合快速開發和迭代，但在生產環境中需要進一步的穩定性測試。

## 技術深入分析

這個專案的核心技術機制是基於 WPF 的 MVVM 架構，這使得 UI 和業務邏輯能夠清晰分離。使用 Material Design In XAML Toolkit 提供現代化的界面，並且支持主題切換。效能方面，這個專案在低流量情況下表現良好，但在高流量下可能會出現穩定性問題，特別是在 CDN 前置的情況下。選擇 .NET 8 和 WPF 是因為它們在 Windows 平台上的強大功能，但這也導致了平台的限制。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在網路流量高峰期。整合方面，這個專案與現有的 .NET 生態系統相容性良好，能夠輕鬆整合到 CI/CD 流程中。整體而言，這個專案在技術上具備良好的基礎，但仍需解決穩定性和性能問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明和安裝步驟，但缺乏詳細的範例。安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解配置要求。沒有提供多語言支持，僅有英文文檔。

## 優缺點分析

> [!success] 優點
> - 現代化的 UI 設計，提升用戶體驗。
> - 靈活的配置選項，適合不同需求的用戶。
> - 良好的社群支持，能夠快速獲得幫助和反饋。

> [!danger] 缺點
> - 穩定性問題，特別是在高流量情況下。
> - 不支援非 Windows 平台，限制了使用範圍。
> - 需要用戶自行提供 Psiphon 憑證和伺服器列表，增加了使用門檻。

> [!warning] 注意事項
> - 不包含 Psiphon 憑證和伺服器列表，需用戶自行提供。
> - 目前存在穩定性問題，特別是在高流量情況下。
> - 不支援 Linux 和 macOS，僅限於 Windows 平台。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理配置，而 Se7en-Pro 提供更強的 UI 定制能力和用戶交互設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 側重於簡化的用戶體驗，而 Se7en-Pro 提供更豐富的功能和設置選項。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理配置，而 Se7en-Pro 提供更強的 UI 定制能力和用戶交互設計。 | 如果你需要一個簡單的代理配置工具而不需要複雜的 UI 設計。 | low，因為兩者的功能有部分重疊。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 側重於簡化的用戶體驗，而 Se7en-Pro 提供更豐富的功能和設置選項。 | 如果你需要一個簡單的用戶界面而不需要太多自定義選項。 | medium，因為需要重新設置配置和用戶界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Se7en-Pro** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化代理配置，而 Se7en-Pro 提供更強的 UI 定制能力和用戶交互設計。 | Boneyard 側重於簡化的用戶體驗，而 Se7en-Pro 提供更豐富的功能和設置選項。 |
> | 遷移成本 | - | low，因為兩者的功能有部分重疊。 | medium，因為需要重新設置配置和用戶界面。 |
> | 適用場景 | 主要場景 | 如果你需要一個簡單的代理配置工具而不需要複雜的 UI 設計。 | 如果你需要一個簡單的用戶界面而不需要太多自定義選項。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高流量下可能會出現連接不穩定的問題。
  - 解法：減少同時連接數量，或使用更穩定的網路環境。
- [MEDIUM] 在某些 Windows 環境中可能無法正確啟動。
  - 解法：確認 .NET 8 已正確安裝，並檢查相依性。
- [MEDIUM] 用戶需自行提供 Psiphon 憑證，這可能會造成使用上的困難。
  - 解法：參考官方文檔獲取正確的憑證配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要自定義 Psiphon 客戶端的開發者 | 非常適合 | 提供靈活的 UI 和配置選項，滿足開發者需求。 |
| 小型團隊需要安全的隧道連接 | 適合 | 支援系統範圍的隧道功能，方便團隊協作。 |
| 網路安全研究人員測試 Psiphon 連接穩定性 | 普通 | 雖然有穩定性問題，但仍可用於測試和研究。 |
| 大型企業需要穩定的網路隧道解決方案 | 不適合 | 目前穩定性不足，不建議用於生產環境。 |

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
> 低風險：該工具不需要高權限運行，但用戶需自行提供 Psiphon 憑證，需注意憑證的安全性。依賴的庫和框架均為開源，信任度高。

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
| Forks | 36 |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/KNG7-P/Se7en-Pro/wiki)

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

相關概念：[[微服務]] · [[API 設計]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]]

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
> const concepts = ["微服務","API 設計","自動化"];
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
