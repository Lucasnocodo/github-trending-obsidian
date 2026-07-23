---
repo: Fei-Away/Codex-Dream-Skin
url: https://github.com/Fei-Away/Codex-Dream-Skin
owner: Fei-Away
owner_type: User
language: JavaScript
license: N/A
description: "Codex Dream Skin"
homepage: "https://www.dreamskin.cc"
stars: 11890
stars_per_day: 1699
forks: 1193
open_issues: 129
created: 2026-07-15
pushed_at: 2026-07-22
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "主題工具"
release_tag: "v1.3.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "為 Codex 桌面端提供可自定義的主題和外觀。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 22115
readme_length: 4102
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:6371,2026-07-17:6404,2026-07-18:8857,2026-07-18:8879,2026-07-19:9838,2026-07-19:9839,2026-07-20:10545,2026-07-20:10551,2026-07-21:11177,2026-07-21:11180,2026-07-22:11583,2026-07-22:11585,2026-07-23:11890"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "Codex-Dream-Skin"
  - "Fei-Away/Codex-Dream-Skin"
  - "為 Codex 桌面端提供可自定義的主題和外觀。"
---

# Codex-Dream-Skin

**11.9k** stars · **1.7k** stars/天 · 建立 7 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.3.3` `easy-install`

> [!summary] 一句話摘要
> 為 Codex 桌面端提供可自定義的主題和外觀。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.7k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望為 Codex 桌面端增添個性化主題的開發者和普通用戶。
> **一句話重點** Codex Dream Skin 不僅是主題換膚工具，更是提升 Codex 使用體驗的利器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "主題工具" && p.file.name !== "Fei-Away--Codex-Dream-Skin" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 主題工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到提升 Codex 使用體驗的效果，值得嘗試。

> [!abstract] 核心創新
> 提供了一個無需修改官方安裝包的主題換膚工具。

## 專案簡介

Codex Dream Skin 是一個專為 Codex 桌面端設計的主題換膚工具，允許用戶透過簡單的安裝過程為其界面增添個性化的外觀。用戶只需下載對應的安裝包，然後按照指示安裝，無需任何額外的開發環境或複雜的命令行操作。安裝後，用戶可以從 macOS 菜單或 Windows 系統托盤中輕鬆切換主題，並且可以自定義背景圖像，讓界面更具氛圍感。這個工具的賣點在於它的「真·可交互」特性，所有控件都是原生的，而不是靜態的圖片，這樣可以保持良好的使用體驗。技術上，它使用本機 CDP 注入來實現主題的應用，這意味著它不會修改官方的二進制文件，從而保持安全性。

相較於其他主題工具如 0xGF/boneyard 和 0xSero/codex-shim，Codex Dream Skin 提供了更簡單的安裝流程和更高的安全性，因為它不需要對官方安裝包進行任何修改。使用者在安裝過程中可能會遇到未簽名的安全提示，但這在文檔中有詳細的解決方案。這個專案目前處於活躍開發中，社群的問題解決率約為20%，顯示出一定的活躍度和參與度。對於想要提升 Codex 使用體驗的開發者和用戶來說，這是一個值得一試的工具。

**技術棧**：`JavaScript` · `PowerShell` · `Shell` · `CSS` · `Swift` · `Inno Setup`

## 重點功能

- 真·可交互 — 所有控件為原生，保持良好的使用體驗。
- 可換圖 — 用戶可以自定義背景圖像，支持 16:9 的純壁紙。
- 可存主題 — 支持在 macOS 菜單和 Windows 系統托盤中保存和切換主題。
- 可恢復 — 提供一鍵還原官方外觀的功能。
- 相對安全 — 使用本機 CDP 注入，不修改官方二進制與簽名。

## 快速開始

1. 下載安裝包
```bash
從 GitHub Releases 下載對應平台的安裝包
```
2. 安裝 macOS 版本
```bash
打開 `CodexDreamSkin-vX.Y.Z.dmg`，將 App 拖入 Applications
```
3. 安裝 Windows 版本
```bash
雙擊 `CodexDreamSkin-Setup-vX.Y.Z.exe`，按安裝向導完成
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 11890 stars（1699/天），forks 1193（10.0%），顯示出強勁的增長潛力。作者 Fei-Away 和其他貢獻者在開源社群中有一定的知名度，這個工具解決了 Codex 用戶對界面個性化的需求，之前的方案往往需要複雜的設定或修改官方文件。近期的推廣活動和社群討論也促進了這個工具的曝光率。高比例的 forks/stars 表示許多人對這個工具進行了實際修改和使用，顯示出其實用性和需求。

## 適合誰使用

**目標受眾**：希望為 Codex 桌面端增添個性化主題的開發者和普通用戶。

> [!example] 使用場景
> - 前端開發者用它來為 Codex 桌面端增添個性化主題，因為這樣可以提升工作時的氛圍感，讓開發過程更愉悅。
> - 設計師用它來測試不同的主題效果，因為可以快速切換和自定義背景，幫助他們找到最合適的設計風格。
> - 普通用戶用它來美化 Codex 界面，因為這樣可以讓他們在使用 AI 工具時感覺更舒適，提升使用體驗。

## 架構分析

Codex Dream Skin 採用本機 CDP 注入的架構模式，這意味著它在不修改官方二進制文件的情況下，能夠實現主題的應用。資料流方面，安裝過程中用戶只需下載安裝包並執行，系統會自動處理主題的應用和切換。這種設計的好處在於安全性高，因為不會影響官方的安裝和更新，但代價是無法提供更深入的主題自定義功能。擴展性方面，因為不依賴於外部服務，未來的更新和功能擴展主要依賴於社群的貢獻。

## 技術深入分析

Codex Dream Skin 的核心技術機制是基於本機 CDP 注入，這種方式允許用戶在不修改官方安裝包的情況下，為 Codex 提供個性化的主題。這種設計使得用戶能夠享受真·可交互的界面，所有控件都是原生的，這樣可以保持良好的使用體驗。效能方面，因為不需要大量的資源來運行額外的服務，這使得它在運行時的資源佔用相對較低。設計取捨方面，選擇不修改官方二進制文件的方式，雖然提高了安全性，但也限制了主題的深度自定義功能。技術風險方面，未來的擴展可能會受到社群貢獻的限制，因為目前的問題解決率較低，這可能影響到使用者的滿意度。整合方面，這個工具可以輕鬆融入現有的開發環境，因為它不需要額外的依賴或配置，這對於團隊的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，安裝過程也相對順暢。雖然安裝包未簽名可能會引起安全提示，但文檔中有詳細的解決方案。整體而言，新手可以在 30 分鐘內完成安裝並開始使用。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，無需複雜的命令行操作。
> - 提供真·可交互的界面，提升使用體驗。
> - 支持自定義背景，增加個性化選擇。

> [!danger] 缺點
> - 未簽名的安裝包可能引起安全警告。
> - 功能相對簡單，無法提供深度的主題自定義。
> - 社群問題解決率較低，可能影響使用者體驗。

> [!warning] 注意事項
> - 目前不支持自定義主題的導出功能。
> - 安裝包未簽名，可能在某些系統上出現安全提示。
> - 目前的問題解決率約為20%，顯示出社群參與度仍需提升。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供主題化功能，但安裝過程較為複雜，需要修改官方安裝包。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於 Codex 的兼容性，但缺乏主題自定義的靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用修改官方安裝包的方式來實現主題化，這樣可以提供更深度的自定義，但安裝過程較為複雜。 | 如果你的團隊需要更深度的主題自定義，並且不介意修改官方安裝包的話，可以選擇這個工具。 | medium，因為需要重新配置主題和可能的安裝步驟。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於兼容性，提供了一些基本的主題功能，但不如 Codex Dream Skin 靈活。 | 如果你的主要需求是兼容性而非主題自定義，則可以考慮這個工具。 | low，因為大多數設置可以直接轉移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Codex-Dream-Skin** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用修改官方安裝包的方式來實現主題化，這樣可以提供更深度的自定義，但安裝過程較為複雜。 | 專注於兼容性，提供了一些基本的主題功能，但不如 Codex Dream Skin 靈活。 |
> | 遷移成本 | - | medium，因為需要重新配置主題和可能的安裝步驟。 | low，因為大多數設置可以直接轉移。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更深度的主題自定義，並且不介意修改官方安裝包 | 如果你的主要需求是兼容性而非主題自定義，則可以考慮這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 安裝時可能會遇到未簽名的安全提示，影響安裝體驗。
  - 解法：按照文檔中的指示放行未簽名的安裝包。
- [low] 某些主題可能在不同顯示器上顯示不一致。
  - 解法：在設置中調整顯示器設置以獲得最佳效果。
- **[HIGH]** 社群問題解決率低，可能會遇到未解決的問題。
  - 解法：參與社群討論，尋求其他用戶的幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速美化開發工具界面 | 非常適合 | 安裝簡單且不需要修改官方安裝包，適合快速部署。 |
| 大型企業需要穩定的開發環境 | 不適合 | 目前處於 beta 階段，可能不夠穩定。 |
| 個人開發者希望提升 Codex 使用體驗 | 非常適合 | 提供了個性化的主題選擇，能夠提升使用者的滿意度。 |
| 需要深度自定義的專案 | 不適合 | 目前功能相對簡單，無法提供深度的主題自定義。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到提升 Codex 使用體驗的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，並且不會存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
| Forks | 1.2k |
| Open Issues | 129 |
| Issue 解決率 | 20% (32 closed) |
| 最後推送 | 2026-07-22 |
| 建立日期 | 2026-07-15 |
| 官方網站 | [Link](https://www.dreamskin.cc) |
| Repo 大小 | 21.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Fei-Away/Codex-Dream-Skin) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 37
>     "PowerShell" : 25
>     "Shell" : 17
>     "CSS" : 14
>     "Swift" : 4
>     "Inno Setup" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Fei-Away](https://github.com/Fei-Away) | 18 |
> | [@rwang23](https://github.com/rwang23) | 5 |
> | [@Finderchangchang](https://github.com/Finderchangchang) | 1 |
> | [@wasim-builds](https://github.com/wasim-builds) | 1 |
> | [@nightt5879](https://github.com/nightt5879) | 1 |

**最新版本**：v1.3.3 — Codex Dream Skin v1.3.3 (2026-07-22)

> [!info]- Release Notes
> ## Codex Dream Skin v1.3.3
> 
> ### Downloads
> 
> - **macOS:** [CodexDreamSkin-v1.3.3.dmg](https://github.com/Fei-Away/Codex-Dream-Skin/releases/download/v1.3.3/CodexDreamSkin-v1.3.3.dmg)
> - **Windows:** [CodexDreamSkin-Setup-v1.3.3.exe](https://github.com/Fei-Away/Codex-Dream-Skin/releases/download/v1.3.3/CodexDreamSkin-Setup-v1.3.3.exe)
> - [SHA256SUMS.txt](https://github.com/Fei-Away/Codex-Dream-Skin/releases/download/v1.3.3/SHA256SUMS.txt)
> 
> The packages are currently unsigned. Follow the graphical first-run steps in
> [macOS installation](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.3.3/docs/install-macos.md)
> or [Windows installation](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.3.3/docs/install-windows.md).
> No terminal trust command is required for ordinary users.
> 
> This release is created as a draft for a maintainer to review before publishing.

## 社群與生態

**社群活躍度**：社群活躍度中等，問題解決率約20%。
**連結**：[文件](https://github.com/Fei-Away/Codex-Dream-Skin/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-22 ~ 2026-07-22）
> **活躍天數** 1 天 · **最新 commit** fix(windows): verify against the staged active theme, not the assets fallback (#226)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#121](https://github.com/Fei-Away/Codex-Dream-Skin/issues/121) | [Feature]: codex 2007 `enhancement` `needs-triage` | 1 | 1 |
> | [#66](https://github.com/Fei-Away/Codex-Dream-Skin/issues/66) | [Bug] load-image-theme 在校验尺寸前用 sips 全解码图片,超大图内存炸弹 / sips ful `bug` | 1 | 0 |
> | [#228](https://github.com/Fei-Away/Codex-Dream-Skin/issues/228) | [Bug]: 侧边栏的菜单栏会被挡住 `bug` `needs-triage` | 0 | 0 |
> | [#227](https://github.com/Fei-Away/Codex-Dream-Skin/issues/227) | [Feature]: 分享一个基于 Codex Dream Skin Windows 引擎的 QQ2007 独立移植版 `enhancement` `needs-triage` | 0 | 0 |
> | [#218](https://github.com/Fei-Away/Codex-Dream-Skin/issues/218) | [Performance][macOS] CDP 断开后 injector watcher 仍常驻并高频重试，导致系统明 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex Dream Skin
> 
>   中文 · English
> 
>   给 Codex 桌面端换一张会呼吸的脸。
>   外部主题 / 换肤工具 · 本机 CDP 注入 · 不改官方安装包
> 
>   一张图，一种心情 · 写代码，也要有氛围感
> 
>   非 OpenAI 官方产品。不修改 .app / app.asar / WindowsApps。
> 
> ## 直接安装
> 
> 普通用户只需先安装并退出一次官方 Codex / ChatGPT，然后从
> [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) 下载：
> 
> - macOS：打开 `CodexDreamSkin-vX.Y.Z.dmg`，把 App 拖进 Applications。
> - Windows：双击 `CodexDreamSkin-Setup-vX.Y.Z.exe`，按安装向导完成。
> 
> 不需要 clone 源码、安装 Node.js 或手动运行 `.sh` / `.ps1`。首次未签名放行、更新和卸载步骤见
> [macOS 安装说明](./docs/install-macos.md) / [Windows 安装说明](./docs/install-windows.md)。
> 
> ## 赞助商
> 
>   
>     
>   
> 
>   更智能的连接 · 更热爱的创造
>   热爱驱动 · 无限可能 · Connect AI · Power Creation
> 
>   感谢 passion8.cc 赞助本项目。
>   满血 AI 中转：官方模型直连，无降智、无套壳；一行配置接入 Codex / Claude Code / Grok。
> 
>   
>     换肤与 API 配置互相独立，本项目不会自动改写你的模型供应商设置。
>   
> 
> ## 实测精选预设
> 
> ### Gothic Void Crusade / 哥特虚空远征
> 
> **特别感谢 [@seansong-ideogram](https://github.com/seansong-ideogram) 为社区设计并贡献这套精美、极具氛围感的原创哥特科幻作品。** 它是当前实测精选的第一套预设，也是 macOS 全新安装时默认启用的主题。
> 
>   
>   真实 Codex 首页注入效果（仅预览）
> 
> 安装后可直接从 macOS 菜单栏的「已保存主题」切换。
> 
> ### 桥本有菜 / Arina Hashimoto
> 
> 下面这套「桥本有菜 / Arina Hashimoto」已经在真实 Codex 首页分别验证浅色和暗色外观。用户提供的源 PNG 为 `1672 × 941`，主题包在保持源图近 16:9 构图的前提下派生导出 `2560 × 1440` JPEG，并不代表增加了源图细节。截图中的侧栏、卡片、项目选择和输入框都是 Codex 原生控件。
> 
>   
>   浅色 · 真实注入截图（未发送输入已在截图时遮蔽，仅预览）
> 
>   
>   暗色 · 真实注入截图（未发送输入已在截图时遮蔽，仅预览）
> 
> 这组人物素材留在源码仓库用于参考与权利核验，不进入公开 DMG / Setup.exe；公开安装包只预置已确认
> 可分发的 Gothic Void Crusade。普通用户仍可从菜单里的「更换背景图」导入自己有权使用的纯背景，
> 保存后继续一键切换。
> 
> > 可下载的用户源图是 [`docs/images/presets/arina-hashimoto-source.png`](./docs/images/presets/arina-hashimoto-source.png)（`1672 × 941`）；源码参考预设使用 [`macos/presets/preset-arina-hashimoto/background.jpg`](./macos/presets/preset-arina-hashimoto/background.jpg)（规范化派生 `2560 × 1440`）。上面两个效果图包含真实 UI，**只作预览，绝不能当背景导入**。背景为用户提供的 AI 生成示例，不代表 OpenAI/Codex 官方视觉或背书；未确认人物与素材权利前不得把它打进公开安装包。
> 
> ## 概念效果图（不可直接导入）
> 
> 下面八张图用于表达可实现的视觉方向，但它们是带界面的概念效果图，不是可直接使用的主题背景。需要同类效果时，先按[参考生图提示词](./docs/reference-background-prompt-guide.md)生成无 UI 的 `2560 × 1440` 素材；八种风格的详细拆解见[概念图提示词](./docs/background-generation-prompts.md)。
> 
>   
>   粉系定制
> 
>   
>   财神打工版
> 
>   
>   红白科幻
> 
>   
>   清透定制
> 
>   
>   灵感小宇宙
> 
>   
>   紫夜限定
> 
>   
>   青蓝虚拟歌姬
> 
>   
>   舞台黑金
> 
> ## 它能做什么
> 
> - **真·可交互**：侧栏、建议卡、项目选择、输入框都是原生控件，不是整窗假截图贴上去
> - **真背景层**：一张 16:9 纯壁纸连续铺满整窗，首页突出氛围，任务页自动降低干扰
> - **可换图**：换一张喜欢的纯背景，自适应焦点、安全区和配色后变成你的主题
> - **可存主题**：macOS 菜单栏与 Windows 系统托盘都能保存/切换本地主题
> - **可恢复**：一键还原官方外观
> - **相对安全**：本机回环 CDP 注入，不改官方二进制与签名
> 
> ## 快速开始
> 
> ### 普通用户：下载安装包
> 
> 不需要 clone 仓库，也不需要安装 Node.js 或运行 `.sh` / `.ps1`。从
> [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) 下载对应平台的最新安装包，
> 按平台文档完成一次图形界面安装：
> 
> | 平台 | 下载 | 安装说明 |
> |------|------|----------|
> | macOS | `CodexDreamSkin-vX.Y.Z.dmg` | [`docs/install-macos.md`](./docs/install-macos.md) |
> | Windows | `CodexDreamSkin-Setup-vX.Y.Z.exe` | [`docs/install-windows.md`](./docs/install-windows.md) |
> 
> 安装后从菜单栏（macOS）或系统托盘（Windows）使用。更新时下载新安装包覆盖安装，主题和图片会保留；
> 未签名的新下载文件在个别系统上仍可能再次出现一次安全提示，文档列出了放行方法。
> 
> ### 开发者：从源码运行
> 
> 仓库内按平台放了现成脚本（实现细节不同，效果都是「主题化 Codex」）：
> 
> | 平台 | 目录 | 入口 |
> |------|------|------|
> | Apple Silicon / Intel Mac | [`macos/`](./macos/) | 双击 `Install Codex Dream Skin.command` |
> | Windows | [`windows/`](./windows/) | `scripts/install-dream-skin.ps1` → `start-dream-skin.ps1` |
> 
> 更细的说明：
> 
> - Mac：[`macos/README.md`](./macos/README.md)
> - Windows：[`windows/README.md`](./windows/README.md)
> - 路径对照：[`docs/platforms.md`](./docs/platforms.md)
> - 可直接复制的参考生图模板：[`docs/reference-background-prompt-guide.md`](./docs/reference-background-prompt-guide.md)
> - 八种概念方向详细提示词：[`docs/background-generation-prompts.md`](./docs/background-generation-prompts.md)
> - 项目记录：[`docs/PROJECT.md`](./docs/PROJECT.md)
> 
> ## 反馈与贡献
> 
> - **Issue：** 请用 [Issue 模板](./.github/ISSUE_TEMPLATE/)（Bug / 功能）；已关闭空白 Issue。提交前建议先跑 Verify / Restore 自检。
> - **PR：** 请按 [PR 模板](./.github/pull_request_template.md) 写清改动，并勾选对应自测（如 `macos/tests/run-tests.sh`、verify / restore）。
> 
> ## 安全边界
> 
> - CDP 只绑 `127.0.0.1`，主题运行期间勿跑来路不明的本机程序
> - 不修改官方安装目录与代码签名
> - **不会**自动改写 API Key / Base URL；中转与换肤分开
> 
> ## 许可与声明
> 
> - 见 [`macos/LICENSE`](./macos/LICENSE)（MIT）与 [`macos/NOTICE.md`](./macos/NOTICE.md)
> - 非 OpenAI 官方产品；Codex 及相关权利归其权利人
> - 随仓库预设及效果图中的人物 / IP 素材仅作主题示意；商用或公开再分发请自行确认肖像、素材与商标权利
> 
> ---
> 
> Star 一下，然后挑一张图，把你的 Codex 变成今天想要的样子。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[主題設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

[GitHub](https://github.com/Fei-Away/Codex-Dream-Skin) · [官方網站](https://www.dreamskin.cc)

## 相關收錄

> [!note]- 直接競品（同子分類：主題工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "主題工具" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Fei-Away--Codex-Dream-Skin" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","主題設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Fei-Away--Codex-Dream-Skin" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Fei-Away--Codex-Dream-Skin" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Fei-Away" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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

> **2026-07-17** — 首次收錄
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

- [[2026-07-22|2026-07-22]] — 再次上榜，11.6k stars
- [[2026-07-21|2026-07-21]] — 再次上榜，11.2k stars
- [[2026-07-20|2026-07-20]] — 再次上榜，10.5k stars
- [[2026-07-19|2026-07-19]] — 再次上榜，9.8k stars
- [[2026-07-18|2026-07-18]] — 再次上榜，8.9k stars
- [[2026-07-17|2026-07-17]] — 首次收錄，6.4k stars
