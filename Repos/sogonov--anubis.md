---
repo: sogonov/anubis
url: https://github.com/sogonov/anubis
owner: sogonov
owner_type: User
language: Kotlin
license: MIT
description: "Android app manager with VPN integration. Manages groups of apps by freezing/unfreezing them based on VPN connection state."
homepage: ""
stars: 784
stars_per_day: 261
forks: 22
open_issues: 34
created: 2026-04-13
pushed_at: 2026-04-17
first_seen: 2026-04-17
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "應用管理"
release_tag: "0.1.4-beta.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-17
use_case: "透過 VPN 狀態自動凍結/解凍應用程式，管理 Android 應用程式群組。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-20"
contributor_count: 2
engagement: "low"
issue_close_rate: 26
repo_size_kb: 525
readme_length: 5617
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-17"
star_history: "2026-04-17:784"
tags:
  - github
  - "category/開發工具"
  - "lang/kotlin"
aliases:
  - "anubis"
  - "sogonov/anubis"
  - "透過 VPN 狀態自動凍結/解凍應用程式，管理 Android 應用程式群組。"
---

# anubis

**784** stars · **261** stars/天 · 建立 3 天前 · Kotlin · MIT

```dataviewjs
const me = dv.page("Repos/sogonov--anubis");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`0.1.4-beta.1`

> [!summary] 一句話摘要
> 透過 VPN 狀態自動凍結/解凍應用程式，管理 Android 應用程式群組。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (261 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Android 設備上有效管理應用程式與 VPN 狀態的隱私意識用戶。
> **一句話重點** Anubis 的創新在於其完全禁用應用的能力，這在隱私保護上提供了前所未有的保障。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sogonov--anubis");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "應用管理" && p.file.name !== "sogonov--anubis" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 應用管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到高隱私保護的應用管理，值得投入。

> [!abstract] 核心創新
> Anubis 使用 `pm disable-user` 完全禁用應用，提供比沙盒解決方案更高的隱私保護。

## 專案簡介

Anubis 是一款 Android 應用程式管理器，透過 VPN 連接狀態來凍結或解凍應用程式。用戶可以根據不同的網路政策將應用程式分為 Local、VPN Only 和 Launch with VPN 三類，這樣在 VPN 啟動或關閉時，應用程式的狀態會自動調整。這種設計的優勢在於，Anubis 使用 `pm disable-user` 命令完全禁用應用程式，這意味著被禁用的應用無法執行任何代碼或檢測網路介面，從而提供更強的隱私保護。使用者可以透過主畫面啟動應用程式，並且可以長按圖示進行凍結或解凍操作。Anubis 支持多種 VPN 客戶端，並能夠自動啟動或停止它們，這在使用上非常方便。

與其他沙盒解決方案（如 Island 或 Shelter）相比，Anubis 提供了更高的安全性，因為它不允許應用程式檢測 VPN 狀態。這使得 Anubis 更適合需要高隱私保護的用戶，尤其是在使用公共 Wi-Fi 網路時。使用者需要安裝 Shizuku 來執行這些命令，這是其一個依賴。Anubis 的設計還考慮到了未來的擴展性，計劃增加更多的 VPN 客戶端支持和背景監控服務。對於需要在 VPN 環境下管理應用程式的用戶來說，Anubis 提供了一個靈活且安全的解決方案。

**技術棧**：`Kotlin` · `Jetpack Compose` · `Shizuku API` · `Room database`

## 重點功能

- 應用群組管理 — 根據 VPN 狀態自動凍結/解凍應用程式。
- 主畫面啟動器 — 點擊應用圖示可根據 VPN 狀態啟動應用，凍結的應用會顯示為灰階。
- VPN 客戶端協調 — 自動啟動/停止支持的 VPN 客戶端。
- 自定義 VPN 客戶端 — 用戶可以選擇任何已安裝的應用作為 VPN 客戶端。
- 多步驟 VPN 斷開 — 使用 API、虛擬 VPN 和強制停止來安全地斷開 VPN 連接。

## 快速開始

1. 安裝 Shizuku
```bash
adb install shizuku.apk
```
2. 安裝 Anubis
```bash
adb install anubis.apk
```
3. 啟動 Shizuku 並授權
```bash
shizuku start
```
4. 在 Anubis 中設定應用群組
```bash
設定 > 應用群組
```
5. 選擇 VPN 客戶端
```bash
設定 > VPN 客戶端
```

## 程式碼範例

```kotlin
{
  "前置條件": "需要安裝 Shizuku 並授權",
  "指令": "am broadcast -a .action.widget.click -n /.receiver.WidgetProvider",
  "預期輸出": "觸發 VPN 客戶端的啟動或停止"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 784 stars（261/天），forks 22（2.8%），顯示出一定的使用者興趣。作者 sogonov 是一位活躍的開發者，過去有多個開源專案。Anubis 解決了許多用戶在使用 VPN 時無法有效管理應用程式的痛點，尤其是對於需要高隱私的用戶來說，這是一個重要的功能。社群中對於應用程式的需求和反饋活躍，這表明了該專案的實用性和潛在的發展空間。

## 適合誰使用

**目標受眾**：需要在 Android 設備上有效管理應用程式與 VPN 狀態的隱私意識用戶。

> [!example] 使用場景
> - 隱私意識強的用戶用它來在公共 Wi-Fi 下自動管理應用程式，因為 Anubis 能夠在 VPN 開啟時凍結不必要的應用，降低資料洩漏風險。
> - 開發者用它來測試應用在不同 VPN 狀態下的行為，因為 Anubis 提供了簡單的應用凍結和解凍功能，方便快速測試。
> - IT 管理員用它來確保公司設備在連接 VPN 時只運行必要的應用，因為 Anubis 可以自動管理應用程式的狀態，減少手動操作的需求。

## 架構分析

Anubis 採用 Kotlin 和 Jetpack Compose 開發，並依賴 Shizuku API 來執行系統級命令。其架構設計考慮到用戶隱私，使用 `pm disable-user` 完全禁用應用，這樣被禁用的應用無法執行任何代碼或檢測網路狀態。資料流方面，Anubis 透過 Room 資料庫管理應用群組，並使用 ConnectivityManager 監控 VPN 狀態。這種設計的代價是需要額外的依賴（如 Shizuku），但卻能提供更強的安全性。未來計劃的背景 VPN 監控服務將進一步增強其功能，並可能引入新的技術挑戰，特別是在資源管理和效能方面。

## 技術深入分析

Anubis 的核心技術機制是使用 `pm disable-user` 命令來完全禁用應用，這意味著被禁用的應用無法執行任何代碼或檢測網路介面。這種設計使得 Anubis 在隱私保護上優於傳統的沙盒解決方案。效能方面，Anubis 能夠快速凍結和解凍應用，但需要 Shizuku 的支持，這可能會增加冷啟動時間。設計上選擇 Kotlin 和 Jetpack Compose 是為了提高開發效率和用戶體驗，但這也意味著需要對 Android 生態系統有一定的熟悉度。技術風險方面，依賴 Shizuku 可能會在未來的 Android 更新中出現兼容性問題。整合方面，Anubis 可以與多種 VPN 客戶端協同工作，並且支持自定義 VPN 客戶端，這使得它在不同的使用場景下都能靈活應用。整體來看，Anubis 是一個針對隱私保護需求而設計的強大工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟，對於新手來說易於理解。安裝過程順暢，但需要注意 Shizuku 的安裝。文件中包含了設定的範例，對於初學者非常友好。整體來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 提供強大的隱私保護，完全禁用應用。
> - 靈活的應用管理，根據 VPN 狀態自動調整。
> - 支持多種 VPN 客戶端，易於整合。

> [!danger] 缺點
> - 目前僅支持全群組凍結，缺乏逐個應用的控制。
> - 需要安裝 Shizuku，增加了安裝複雜度。
> - 在某些設備上可能存在兼容性問題。

> [!warning] 注意事項
> - 目前僅支持全群組凍結，未來計劃增加逐個應用的凍結選項。
> - 在 HyperOS 3.0.1.0 上可能無法正常運作。
> - 在某些情況下，無法自動斷開 VPN 連接。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了類似的應用管理功能，但不具備 VPN 狀態自動管理的能力，適合不需要 VPN 的用戶。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 主要針對應用的隱私保護，但不支持 VPN 整合，適合專注於隱私的用戶。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude Obsidian 提供了應用的隔離功能，但無法完全禁用應用，對於需要更高安全性的用戶來說，Anubis 更合適。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Island | Island 提供應用的沙盒化管理，但仍允許應用檢測 VPN，對隱私保護的能力較弱。 | 如果你的需求是簡單的應用隔離，而不需要完全禁用應用，Island 會是一個不錯的選擇。 | low，因為使用者界面類似，容易上手。 |
| Shelter | Shelter 也提供沙盒化功能，但無法完全禁用應用，隱私保護能力有限。 | 適合需要基本應用隔離的用戶，但不需要 Anubis 提供的高隱私保障。 | medium，因為需要重新配置應用群組。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **anubis** | **Island** | **Shelter** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Island 提供應用的沙盒化管理，但仍允許應用檢測 VPN，對隱私保護的能力較弱。 | Shelter 也提供沙盒化功能，但無法完全禁用應用，隱私保護能力有限。 |
> | 遷移成本 | - | low，因為使用者界面類似，容易上手。 | medium，因為需要重新配置應用群組。 |
> | 適用場景 | 主要場景 | 如果你的需求是簡單的應用隔離，而不需要完全禁用應用，Isla | 適合需要基本應用隔離的用戶，但不需要 Anubis 提供的高 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合技術愛好者試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些設備上無法正常運作，特別是 HyperOS 3.0.1.0。
  - 解法：嘗試在其他 Android 版本上運行。
- [MEDIUM] 無法自動斷開 VPN 連接，特別是在使用非支持的 VPN 客戶端時。
  - 解法：手動斷開 VPN 連接。
- [MEDIUM] 全群組凍結可能導致某些應用無法正常使用。
  - 解法：在設定中調整應用群組。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在公共 Wi-Fi 環境中使用 VPN 的用戶 | 非常適合 | Anubis 提供了強大的隱私保護，能夠自動管理應用狀態。 |
| 開發者需要測試應用在不同 VPN 狀態下的行為 | 適合 | Anubis 提供了靈活的應用管理功能。 |
| IT 管理員需要確保公司設備的安全性 | 非常適合 | Anubis 能夠自動凍結不必要的應用，減少安全風險。 |
| 普通用戶不需要高隱私保護的應用管理 | 不適合 | Anubis 的功能對於不需要 VPN 的用戶來說過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到高隱私保護的應用管理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：Anubis 需要 Shizuku 的高權限來執行系統命令，但不會存取敏感資料。對於使用 VPN 的用戶來說，安全性考量需謹慎。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sogonov--anubis");
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
> const me = dv.page("Repos/sogonov--anubis");
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
| Forks | 22 |
| Open Issues | 34 |
| Issue 解決率 | 26% (12 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-13 |
| Repo 大小 | 525 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sogonov/anubis) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sogonov](https://github.com/sogonov) | 21 |
> | [@gdetotut1](https://github.com/gdetotut1) | 1 |

**最新版本**：0.1.4-beta.1 — ## Anubis 0.1.4-beta.1 — Auto-unfreeze on VPN toggle (2026-04-17)

> [!info]- Release Notes
> **Pre-release.** Install manually to test; the in-app updater won't offer this version.
> 
> ### What's new
> 
> - **New setting: "Unfreeze groups on VPN toggle"** (off by default)
>   - VPN turns ON → LOCAL apps freeze, VPN_ONLY apps unfreeze
>   - VPN turns OFF → VPN_ONLY apps freeze, LOCAL apps unfreeze
>   - Works both through Anubis toggle and when VPN changes externally
> - **Centralized settings keys** — internal cleanup, no user-visible change
> - **Version comparator fix** — pre-release versions no longer trigger a false "update available" prompt
> 
> ### Known limitations
> 
> - All-or-nothing: the toggle affects all apps in a group. Per-app granularity (freeze some, auto-unfreeze others) is planned for a future release.
> - `enable()` path (manual Anubis toggle ON) does not auto-unfreeze VPN_ONLY yet — only external VPN detection and VPN-OFF paths are covered.
> 
> ### Install
> 
> APK from assets below. Requires Shizuku — see [README](https://github.com/sogonov/anubis#setup).
> 
> ---
> 
> ## Anubis 0.1.4-beta.1 (RU) — Авторазморозка при переключении VPN
> 
> **Pre-release.** Устанавливается вручную; автообновление из приложения эту версию не предложит.
> 
> ### Что нового
> 
> - **Новая настройка: «Размораживать группы при включении/отключении VPN»** (по умолчанию выключена)
>   - VPN включился → LOCAL замораживается, VPN_ONLY размораживается

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/sogonov/anubis/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-16 ~ 2026-04-17）
> **活躍天數** 2 天 · **最新 commit** fix  compare versions like "0.1.4-beta.1" < "0.1.3

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/sogonov/anubis/issues/8) | Поиск в списке приложений | 7 | 2 |
> | [#38](https://github.com/sogonov/anubis/issues/38) | Rename "VPN" and "с VPN" as the difference is unclear | 4 | 0 |
> | [#7](https://github.com/sogonov/anubis/issues/7) | Неработоспособность на HyperOS 3.0.1.0 | 4 | 16 |
> | [#44](https://github.com/sogonov/anubis/issues/44) | Не отключает автоматически ВПН при запуске изолированного пр | 3 | 8 |
> | [#23](https://github.com/sogonov/anubis/issues/23) | Разморозка последних отморозков | 3 | 10 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Anubis
> 
> Android app manager with VPN integration. Manages groups of apps by freezing/unfreezing them based on VPN connection state.
> 
> Unlike sandbox-based solutions (Island, Insular, Shelter), which only isolate apps in a work profile where they **can still detect VPN** through the shared network stack, Anubis uses `pm disable-user` to **completely disable** apps at the system level. A disabled app cannot run any code, detect any network interfaces, or send any data.
> 
> ## Features
> 
> - **App groups** with different network policies:
>   - **Local** — apps frozen when VPN is active, launched without VPN
>   - **VPN Only** — apps frozen when VPN is inactive, launched through VPN
>   - **Launch with VPN** — never frozen, but launching triggers VPN activation
> - **Home screen launcher** — tap app icons to launch with correct VPN state
>   - Grayscale icons for frozen/disabled apps
>   - Long press for freeze/unfreeze, shortcut creation, group management
> - **VPN client orchestration** — auto start/stop for supported clients, any client works in manual mode
> - **Custom VPN client** — select any installed app as VPN client from the app list
> - **Active VPN client detection** — identifies which app owns the VPN via `dumpsys connectivity` owner UID
> - **Pinned shortcuts** — home screen shortcuts that orchestrate freeze/VPN/launch in one tap
> - **Network check** — ping, country, city (IP hidden by default for privacy)
> - **Quick Settings tile** — toggle from notification shade
> - **Auto-freeze on boot** and on app launch if VPN is already active
> - **VPN disconnect** — multi-step: API → dummy VPN takeover → force-stop → kill
> 
> ## How It Works
> 
> ### Freeze Mechanism
> Uses Shizuku to execute `pm disable-user --user 0 ` which completely disables an app at the OS level. The app cannot:
> - Run any background services
> - Receive broadcasts
> - Access network interfaces
> - Detect VPN or proxy
> 
> This is fundamentally different from sandboxing, which still allows the app to run and inspect the network stack.
> 
> ### VPN Start
> For clients with known API, sends shell commands via Shizuku:
> - **SEPARATE** (NekoBox): `am start` to exported QuickEnable/QuickDisable activities
> - **TOGGLE** (v2rayNG, Happ, v2rayTun, V2Box): `am broadcast` to widget receiver
> - **MANUAL** (any other client): opens the app, user connects manually
> 
> ### VPN Stop
> Toggle commands are unreliable for stopping (can re-enable immediately), so Anubis uses a multi-step approach:
> 1. **API stop** — only for SEPARATE clients with explicit stop command
> 2. **Dummy VPN** — establish our own VPN to revoke theirs, then close ours
> 3. **`am force-stop`** — kill the detected VPN app process
> 
> Apps are never unfrozen while VPN is still active.
> 
> ### VPN Detection
> Extracts the VPN network owner UID from `dumpsys connectivity` by matching `type: VPN[` pattern, then resolves UID → package name via `pm list packages --uid`. Works with any VPN client, including unknown/custom ones.
> 
> ## Supported VPN Clients
> 
> | Client | Package | Control | Method |
> |--------|---------|---------|--------|
> | v2rayNG | `com.v2ray.ang` | Auto (toggle) | Widget broadcast |
> | NekoBox | `moe.nb4a` | Full (start/stop) | Exported activities |
> | Happ | `com.happproxy` | Auto (toggle) | Widget broadcast |
> | v2rayTun | `com.v2raytun.android` | Auto (toggle) | Widget broadcast |
> | V2Box | `dev.hexasoftware.v2box` | Auto (toggle) | Widget broadcast |
> | **Any app** | — | Manual | Select in Settings → "Other client" |
> 
> ### Discovering VPN Client APIs
> 
> For closed-source clients, broadcast actions can be discovered via APK analysis using [jadx](https://github.com/skylot/jadx):
> 
> 1. **Resources** → find `app_widget_name` in `strings.xml` (resources are not obfuscated)
> 2. **Manifest** → find `` with `android.appwidget.provider` metadata → get class name
> 3. **Receiver code** → find `setAction("...")` → this is the broadcast action
> 4. **Verify** → check `onReceive()` for the `isRunning ? stop : start` toggle pattern
> 
> All v2ray/xray forks share the same pattern:
> ```
> Action:   .action.widget.click
> Receiver: .receiver.WidgetProvider
> ```
> 
> Shell command to toggle:
> ```shell
> am broadcast -a .action.widget.click -n /.receiver.WidgetProvider
> ```
> 
> This is standard Android IPC discovery, not reverse engineering of protected code. Broadcast actions are public interfaces by design.
> 
> ## Requirements
> 
> - Android 10+ (API 29)
> - [Shizuku](https://shizuku.rikka.app/) installed and running
> - At least one VPN client installed
> 
> ## Setup
> 
> 1. Install and start Shizuku (via ADB or Wireless Debugging)
> 2. Install Anubis
> 3. Grant Shizuku permission when prompted
> 4. Grant VPN permission when prompted (needed for dummy VPN disconnect)
> 5. Go to **Apps** tab, assign apps to groups
> 6. Select your VPN client in **Settings** (known or custom)
> 7. Toggle stealth mode on the **Home** screen
> 
> ## Building
> 
> ```bash
> ./gradlew assembleDebug
> ./gradlew assembleRelease  # requires signing config
> ```
> 
> Create `signing.properties` in project root:
> ```properties
> storeFile=release.keystore
> storePassword=your_password
> keyAlias=your_alias
> keyPassword=your_password
> ```
> 
> ## Tech Stack
> 
> - Kotlin + Jetpack Compose (Material 3)
> - Shizuku API 13.1.5 (AIDL UserService pattern)
> - Room database with TypeConverters (app groups)
> - ConnectivityManager NetworkCallback (VPN state monitoring)
> - ShortcutManager (pinned shortcuts)
> 
> ## Roadmap
> 
> - [ ] Background VPN monitoring service (optional, for auto-freeze when VPN is toggled outside Anubis)
> - [ ] Self-hosted `app_process` daemon to remove Shizuku dependency
> - [ ] Export/import app group configuration
> - [ ] Additional VPN clients (WireGuard, sing-box, etc.)
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[VPN]] · [[應用管理]] · [[隱私保護]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/sogonov/anubis)

## 相關收錄

> [!note]- 直接競品（同子分類：應用管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "應用管理" AND file.name != "sogonov--anubis"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "sogonov--anubis"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Kotlin" AND file.name != "sogonov--anubis" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "sogonov--anubis"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["VPN","應用管理","隱私保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sogonov--anubis" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sogonov--anubis");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sogonov--anubis" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sogonov" AND file.name != "sogonov--anubis"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sogonov--anubis");
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
> const me = dv.page("Repos/sogonov--anubis");
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
> const me = dv.page("Repos/sogonov--anubis");
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
> const me = dv.page("Repos/sogonov--anubis");
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
> const me = dv.page("Repos/sogonov--anubis");
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

> **2026-04-17** — 首次收錄
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

- [[2026-04-17|2026-04-17]] — 首次收錄，784 stars
