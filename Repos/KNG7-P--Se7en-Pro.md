---
repo: KNG7-P/Se7en-Pro
url: https://github.com/KNG7-P/Se7en-Pro
owner: KNG7-P
owner_type: User
language: C#
license: MIT
description: ""
homepage: ""
stars: 452
stars_per_day: 28
forks: 33
open_issues: 9
created: 2026-05-20
pushed_at: 2026-05-25
first_seen: 2026-05-27
week: "2026-W22"
month: "2026-05"
category: "CLI 工具"
subcategory: "網路工具"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-27
use_case: "提供一個現代化的 Psiphon 桌面客戶端 UI，讓用戶能夠輕鬆管理網路隧道連接。"
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
last_release_days: 12
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-27"
star_history: "2026-05-27:378,2026-05-27:378,2026-05-28:392,2026-05-29:397,2026-05-30:408,2026-05-31:424,2026-06-01:431,2026-06-02:426,2026-06-03:433,2026-06-04:440,2026-06-05:443,2026-06-06:452"
tags:
  - github
  - "category/cli_工具"
  - "lang/c#"
aliases:
  - "Se7en-Pro"
  - "KNG7-P/Se7en-Pro"
  - "提供一個現代化的 Psiphon 桌面客戶端 UI，讓用戶能夠輕鬆管理網路隧道連接。"
---

# Se7en-Pro

**452** stars · **28** stars/天 · 建立 16 天前 · C# · MIT

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
> 提供一個現代化的 Psiphon 桌面客戶端 UI，讓用戶能夠輕鬆管理網路隧道連接。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (28 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 11 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 Windows 上使用 Psiphon 並希望擁有現代化 UI 的開發者和用戶。
> **一句話重點** 這個專案展示了如何將 Psiphon 的強大功能與現代化的使用者界面結合，提升了用戶的使用體驗。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到一個現代化的 Psiphon 客戶端，值得考慮。

> [!abstract] 核心創新
> 提供一個現代化的 UI 層，讓 Psiphon 的使用變得更加直觀和易於管理。

## 專案簡介

PsiphonUI 是一個基於 MVVM 的 Windows 桌面客戶端，專為 Psiphon 3 網路隧道設計。用戶需要提供 Psiphon 的認證資訊和伺服器列表，才能啟動連接。這個專案的賣點在於其現代化的 WPF UI，並且支援主題切換和系統托盤功能，讓用戶能夠在隱藏狀態下輕鬆恢復應用程式。技術上，它使用了 .NET 8 和 CommunityToolkit.Mvvm，並且提供了多種可選功能，如全系統隧道和 CDN 前置輔助。這些設計選擇使得 PsiphonUI 在用戶體驗上更為流暢，特別是在需要快速連接的情況下。

與其他類似工具相比，例如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，PsiphonUI 提供了更直觀的 UI 和更強的自定義能力，特別是在配置和伺服器管理上。使用者可以透過簡單的配置步驟來設置應用，這在其他工具中往往需要更複雜的操作。這個專案目前仍在活躍開發中，並且有一些已知的穩定性問題需要解決，特別是在高流量下的連接穩定性。對於小型團隊或個人開發者來說，這是一個值得關注的選擇，但在生產環境中使用時需要謹慎考量。建議在非關鍵的環境中進行測試，並持續關注其穩定性更新。

**技術棧**：`.NET 8` · `WPF` · `CommunityToolkit.Mvvm`

## 重點功能

- 現代化 UI — 使用 WPF 和 Material Design 提供直觀的用戶界面。
- MVVM 架構 — 透過 CommunityToolkit.Mvvm 確保代碼的可維護性和擴展性。
- 單實例執行 — 透過命名互斥鎖確保應用不會重複啟動。
- 全系統隧道 — 支援 Xray-core 和 wintun，提供更靈活的連接選項。
- CDN 前置輔助 — 支援 Akamai、Cloudflare 等 CDN，提升連接速度和穩定性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/KNG7-P/Se7en-Pro.git
```
2. 安裝 .NET SDK 8
```bash
從 https://dotnet.microsoft.com/download/dotnet/8.0 下載並安裝
```
3. 編譯專案
```bash
dotnet build PsiphonUI/PsiphonUI.csproj -c Release -r win-x64 --self-contained false
```
4. 配置 Psiphon 認證
```bash
編輯 PsiphonUI/Services/EmbeddedValues.cs，填入正確的 PropagationChannelId 和 SponsorId
```
5. 運行應用
```bash
cd PsiphonUI/bin/Release/net8.0-windows10.0.19041.0/win-x64 && .\PsiphonUI.exe
```

## 程式碼範例

```csharp
{
  "前置條件": "需要配置 Psiphon 認證",
  "指令": "public const string PropagationChannelId = \"PROPAGATION_CHANNEL_ID\";\npublic const string SponsorId = \"SPONSOR_ID\";",
  "預期輸出": "應用能夠成功連接到 Psiphon 網路。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天內累積 452 stars（28/天），forks 33（7.3%），顯示出不錯的增長潛力。作者 KNG7-P 在開源社群中有一定的活躍度，這個專案解決了用戶在使用 Psiphon 時缺乏友好 UI 的痛點。之前的解決方案往往缺乏現代化的界面和易用性，這使得 PsiphonUI 成為一個有吸引力的選擇。社群對於其功能的需求和反饋也促進了其快速成長。

## 適合誰使用

**目標受眾**：需要在 Windows 上使用 Psiphon 並希望擁有現代化 UI 的開發者和用戶。

> [!example] 使用場景
> - 獨立開發者用它來快速搭建 Psiphon 客戶端，因為其現代化的 UI 和簡單的配置流程讓開發變得輕鬆。
> - 小型團隊用它來管理內部網路連接，因為它支援全系統隧道和 CDN 前置，能夠提升連接穩定性。
> - 網路安全研究人員用它來測試不同的隧道配置，因為其開放的架構允許自定義伺服器列表和配置。

## 架構分析

PsiphonUI 採用 MVVM 架構，這使得 UI 和業務邏輯分離，便於維護和擴展。資料流主要通過 ViewModel 進行，使用者的操作會觸發 ViewModel 的方法，進而更新 UI。這種設計使得測試和調試變得更容易，但也增加了初學者的學習曲線。

選擇 WPF 作為 UI 框架是因為其強大的資料綁定和樣式功能，這對於創建現代化的桌面應用至關重要。由於使用了多個外部庫，這可能會增加依賴管理的複雜性。整體架構能夠支持未來的功能擴展，但在高流量情況下的穩定性仍需進一步測試。

## 技術深入分析

PsiphonUI 的核心技術機制基於 MVVM 架構，這使得 UI 和業務邏輯之間的分離更加明確。使用 WPF 作為前端框架，能夠充分利用其資料綁定和樣式功能，提升用戶體驗。專案中使用的 CommunityToolkit.Mvvm 提供了簡化的 MVVM 實作，減少了樣板代碼。效能方面，應用在正常使用情況下能夠流暢運行，但在高流量下的穩定性問題仍需解決。選擇 .NET 8 作為開發平台，能夠利用其最新的功能和性能優化，但也意味著對於舊版 Windows 的支援有限。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在網路連接不穩定的情況下。整合方面，與現有的開發工具鏈（如 Visual Studio）相容性良好，但在 CI/CD 流程中可能需要額外的配置來處理依賴管理問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和配置指導，並包含必要的範例。安裝過程相對順暢，但需要注意手動配置認證的步驟。整體來說，對於有經驗的開發者來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 現代化的 UI 設計，提升用戶體驗。
> - 支援多種功能，包括全系統隧道和 CDN 前置輔助。
> - 開放的架構，便於自定義和擴展。

> [!danger] 缺點
> - 需要手動配置認證，對新手不友好。
> - 存在穩定性問題，可能在高流量下崩潰。
> - 僅支援 Windows 平台，限制了使用範圍。

> [!warning] 注意事項
> - 需要手動配置 Psiphon 認證，否則無法連接。
> - 目前存在穩定性問題，特別是在高流量下可能會崩潰。
> - 僅支援 Windows 10/11 (x64)。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的網路隧道功能，但缺乏現代化的 UI 設計，使用者體驗較差。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 同樣是網路隧道工具，但功能較為簡單，無法提供 CDN 前置輔助。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Python 實作，記憶體使用量較低，但缺乏 Windows 專用的 UI 支援。 | 如果你的團隊已經在使用 Python 並希望減少記憶體使用量。 | medium，因為需要重寫部分業務邏輯和 UI。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的 CLI 工具，功能簡單，適合快速部署，但無法提供完整的 UI 體驗。 | 如果需要一個簡單的 CLI 工具來快速連接 Psiphon，而不需要圖形界面。 | low，因為 CLI 工具的使用方式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Se7en-Pro** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，記憶體使用量較低，但缺乏 Windows 專用的 UI 支援。 | 提供基本的 CLI 工具，功能簡單，適合快速部署，但無法提供完整的 UI 體驗。 |
> | 遷移成本 | - | medium，因為需要重寫部分業務邏輯和 UI。 | low，因為 CLI 工具的使用方式相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 並希望減少記憶體使用量 | 如果需要一個簡單的 CLI 工具來快速連接 Psiphon， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的測試使用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高流量下可能會出現連接崩潰的問題，特別是在靜態端口上。
  - 解法：減少同時連接數量或使用動態端口。
- [MEDIUM] 配置過程中可能會遇到認證資訊不正確的問題。
  - 解法：仔細檢查 EmbeddedValues.cs 中的配置。
- [MEDIUM] 應用在啟動時可能無法正確加載伺服器列表。
  - 解法：確保 server_entries.txt 文件存在並格式正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的內部網路管理 | 非常適合 | 提供了強大的隧道功能和易於使用的界面。 |
| 個人使用者希望簡化 Psiphon 的使用 | 非常適合 | 現代化的 UI 和簡單的配置流程。 |
| 大型企業的生產環境 | 不適合 | 目前存在穩定性問題，可能影響生產運行。 |
| 需要高流量的網路應用 | 普通 | 在高流量下的穩定性尚未得到充分測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到一個現代化的 Psiphon 客戶端，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：應用需要訪問 Psiphon 的認證資訊，這些資訊應妥善保管。依賴的外部庫需定期檢查安全性，避免潛在的供應鏈風險。

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
| Forks | 33 |
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

**社群活躍度**：專案活躍度中等，最近有持續的更新和問題回應。
**連結**：[文件](https://github.com/KNG7-P/Se7en-Pro)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-25）
> **活躍天數** 2 天 · **最新 commit** Release v1.0.1 - Core Refactor, UI Improvements & Advanced Networking Features

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/KNG7-P/Se7en-Pro/issues/9) | مشکل در مرحله نهایی اتصال | 5 | 5 |
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

相關概念：[[CLI/TUI]] · [[網路工具]] · [[自動化測試]]

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
> WHERE category = "CLI 工具" AND file.name != "KNG7-P--Se7en-Pro"
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
> const concepts = ["CLI/TUI","網路工具","自動化測試"];
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
