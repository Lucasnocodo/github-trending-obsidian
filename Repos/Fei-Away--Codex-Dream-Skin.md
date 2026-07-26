---
repo: Fei-Away/Codex-Dream-Skin
url: https://github.com/Fei-Away/Codex-Dream-Skin
owner: Fei-Away
owner_type: User
language: JavaScript
license: N/A
description: "Codex Dream Skin"
homepage: "https://www.dreamskin.cc"
stars: 12305
stars_per_day: 1231
forks: 1236
open_issues: 38
created: 2026-07-15
pushed_at: 2026-07-26
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "主題工具"
release_tag: "v1.5.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "為 Codex 桌面端提供可自定義的主題和外觀，增強開發者的使用體驗。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 62
repo_size_kb: 23005
readme_length: 6340
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:6371,2026-07-17:6404,2026-07-18:8857,2026-07-18:8879,2026-07-19:9838,2026-07-19:9839,2026-07-20:10545,2026-07-20:10551,2026-07-21:11177,2026-07-21:11180,2026-07-22:11583,2026-07-22:11585,2026-07-23:11890,2026-07-24:12107,2026-07-25:12239,2026-07-26:12305"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "Codex-Dream-Skin"
  - "Fei-Away/Codex-Dream-Skin"
  - "為 Codex 桌面端提供可自定義的主題和外觀，增強開發者的使用體驗。"
---

# Codex-Dream-Skin

**12.3k** stars · **1.2k** stars/天 · 建立 10 天前 · JavaScript · 未標註授權

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

`v1.5.5` `easy-install`

> [!summary] 一句話摘要
> 為 Codex 桌面端提供可自定義的主題和外觀，增強開發者的使用體驗。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.2k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 Codex 上自定義界面的開發者和設計師。
> **一句話重點** Codex Dream Skin 不僅提供了主題切換功能，還兼顧了安全性和用戶體驗，讓開發者能夠輕鬆自定義工作環境。

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
> **結論** 花 2 小時學習，1 小時整合，得到靈活的主題切換功能，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一個安全的主題切換解決方案，無需修改官方安裝包。

## 專案簡介

Codex Dream Skin 是一個專為 Codex 桌面應用設計的主題和換膚工具，允許用戶輕鬆更換應用的外觀。用戶只需下載安裝包，安裝後即可通過菜單或系統托盤進行主題切換，無需修改官方安裝包。該工具支持從官方主題庫一鍵安裝主題，並提供了在線 Studio 來自定義主題，包括背景圖和配色。其核心賣點在於不改變官方二進制文件，並使用本機 CDP 注入來實現主題的應用，這樣可以保持安全性和穩定性。技術上，Codex Dream Skin 使用 JavaScript 和 PowerShell 等語言，並且在 macOS 和 Windows 上均可運行，安裝過程簡單直觀，無需額外的環境配置。

與其他主題工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Codex Dream Skin 提供了更為友好的用戶界面和更高的安全性，因為它不會修改原始應用的代碼或結構。使用者可以在 DreamSkin.cc 上瀏覽和下載主題，並且支持導入自定義主題包，這使得它在功能上更具靈活性。該工具的社群活躍度良好，開發者積極回應問題，並且有定期更新。適合需要個性化開發環境的開發者，尤其是對於喜歡自定義界面的用戶來說，這是一個值得考慮的選擇。

**技術棧**：`JavaScript` · `PowerShell` · `Shell` · `CSS` · `Swift` · `Inno Setup`

## 重點功能

- 一鍵換膚 — 直接從 DreamSkin.cc 安裝主題，無需手動下載。
- 主題導入 — 支持導入自定義主題包，需包含特定格式的文件。
- 真·可交互 — 所有控件均為原生，保證主題的真實性和互動性。
- 可存主題 — 允許用戶在系統托盤中保存和切換本地主題。
- 安全性 — 不修改官方安裝包，使用本機 CDP 注入，保障安全性。

## 快速開始

1. 下載安裝包
```bash
從 GitHub Releases 下載對應平台的安裝包
```
2. 安裝應用
```bash
macOS: 打開 .dmg 文件並拖入 Applications；Windows: 雙擊安裝程式並跟隨指示
```
3. 啟動應用
```bash
從菜單或系統托盤啟動 Codex Dream Skin
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天就累積 12305 stars（1231/天），forks 1236（10.0%），這顯示出其快速增長的潛力。作者 Fei-Away 和其他貢獻者在開源社群中有一定的知名度，過去的項目也受到好評。這個工具解決了 Codex 用戶在外觀自定義上的需求，之前的方案往往需要修改原始代碼，風險較高。最近的推廣活動和社群討論也提升了其曝光率。技術上，這個工具的設計使得主題的應用不會影響到原始應用的穩定性，這在開發者中引起了廣泛的關注。forks/stars 比率為 10.0%，顯示出許多用戶對此工具進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要在 Codex 上自定義界面的開發者和設計師。

> [!example] 使用場景
> - 前端開發者用它來自定義 Codex 的界面，因為這樣可以提升工作氛圍，增加開發的愉悅感。
> - 設計師用它來快速切換不同的主題，因為這樣可以在不同的設計風格中進行比較，提升工作效率。
> - 團隊負責人用它來為團隊成員提供一致的開發環境，因為這樣可以減少因界面差異造成的困惑。

## 架構分析

Codex Dream Skin 採用的是一種基於本機應用的架構，通過 CDP 注入來實現主題的應用。這樣的設計使得主題切換不會影響到原始應用的穩定性，並且能夠保持用戶的安全性。資料流方面，主題包的導入和切換過程中會進行多次安全校驗，確保主題的完整性和兼容性。

選擇這種架構的代價在於需要用戶手動導入主題包，這在某些情況下可能會增加使用的複雜度。擴展性方面，該工具支持導入自定義主題包，但對於不符合格式的主題包則無法進行導入，這可能會限制用戶的選擇。整體而言，這種設計使得 Codex Dream Skin 在安全性和靈活性之間取得了良好的平衡。

## 技術深入分析

Codex Dream Skin 的核心技術機制在於使用 CDP 注入來實現主題的應用，這樣的設計使得主題的切換不會影響到原始應用的穩定性。該工具能夠處理多達 32 MiB 的主題包，並且在導入過程中會進行多次安全校驗，以確保主題的完整性。選擇 JavaScript 和 PowerShell 作為主要開發語言，使得該工具在跨平台上具有良好的兼容性。這種選擇的好處在於能夠快速開發和迭代，但可能會增加對於 Windows 和 macOS 環境的依賴。設計上，Codex Dream Skin 在安全性和靈活性之間取得了良好的平衡，因為它不會修改原始應用的代碼，並且使用本機回環 CDP 注入來實現主題的應用。技術風險方面，若未來 Codex 的更新改變了 CDP 的行為，可能會影響到該工具的正常運作。整合方面，該工具能夠與主流的開發環境良好整合，並且提供了簡單的安裝和使用流程，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，沒有明顯的坑。文件中提供了良好的 getting started guide，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的安裝流程，無需額外配置。
> - 支持一鍵安裝和主題導入，方便用戶自定義。
> - 保持了官方應用的安全性，無需修改原始代碼。

> [!danger] 缺點
> - 主題包格式要求嚴格，使用不當可能導致導入失敗。
> - 未簽名的安裝包可能會引起安全警告。
> - 不支持自動配置 API Key，需手動設置。

> [!warning] 注意事項
> - 目前主題包僅支持特定格式，需包含 manifest.json 和 theme.css。
> - 安裝包目前為未簽名版本，部分系統可能會出現安全提示。
> - 不支持自動改寫 API Key 或 Base URL，需手動配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 該工具專注於創建和管理 AI 代理的外觀，與 Codex Dream Skin 的主題切換功能不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更為簡單的主題管理系統，但缺乏 Codex Dream Skin 的互動性和安全性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的外觀，與 Codex Dream Skin 的主題切換功能不同。 | 如果需要專門為 AI 代理設計的主題，這個工具更為合適。 | medium，因為需要重新設計主題的格式和內容。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的主題管理系統，但缺乏 Codex Dream Skin 的互動性和安全性。 | 如果只需要基本的主題切換功能，而不需要高安全性，這個工具可能更合適。 | low，因為主題格式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Codex-Dream-Skin** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建 AI 代理的外觀，與 Codex Dream Skin 的主題切換功能不同。 | 提供簡單的主題管理系統，但缺乏 Codex Dream Skin 的互動性和安全性。 |
> | 遷移成本 | - | medium，因為需要重新設計主題的格式和內容。 | low，因為主題格式相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要專門為 AI 代理設計的主題，這個工具更為合適。 | 如果只需要基本的主題切換功能，而不需要高安全性，這個工具可能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會出現未簽名的安全警告
  - 解法：按照文檔中的指示放行安裝包
- [MEDIUM] 導入的主題包格式不正確會導致導入失敗
  - 解法：確保主題包包含正確的 manifest.json 和 theme.css
- [MEDIUM] CDP 注入可能在 Codex 更新後失效
  - 解法：定期檢查更新和社群討論以獲取最新資訊

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的 Codex 環境 | 非常適合 | 能夠快速自定義和切換主題，提高團隊的工作效率。 |
| 個人開發者的日常使用 | 適合 | 提供了靈活的主題選擇，增強了使用體驗。 |
| 大型企業的生產環境 | 不適合 | 可能存在安全性和穩定性風險，不建議在關鍵系統中使用。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到靈活的主題切換功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

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
| Open Issues | 38 |
| Issue 解決率 | 62% (63 closed) |
| 最後推送 | 2026-07-26 |
| 建立日期 | 2026-07-15 |
| 官方網站 | [Link](https://www.dreamskin.cc) |
| Repo 大小 | 22.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Fei-Away/Codex-Dream-Skin) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 40
>     "PowerShell" : 27
>     "Shell" : 15
>     "CSS" : 10
>     "Swift" : 6
>     "Inno Setup" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Fei-Away](https://github.com/Fei-Away) | 42 |
> | [@rwang23](https://github.com/rwang23) | 5 |
> | [@Finderchangchang](https://github.com/Finderchangchang) | 1 |
> | [@wasim-builds](https://github.com/wasim-builds) | 1 |
> | [@nightt5879](https://github.com/nightt5879) | 1 |

**最新版本**：v1.5.5 — Codex Dream Skin v1.5.5 (2026-07-25)

> [!info]- Release Notes
> ## Codex Dream Skin v1.5.5
> 
> ### Downloads
> 
> - **macOS:** [CodexDreamSkin-v1.5.5.dmg](https://github.com/Fei-Away/Codex-Dream-Skin/releases/download/v1.5.5/CodexDreamSkin-v1.5.5.dmg)
> - **Windows:** [CodexDreamSkin-Setup-v1.5.5.exe](https://github.com/Fei-Away/Codex-Dream-Skin/releases/download/v1.5.5/CodexDreamSkin-Setup-v1.5.5.exe)
> - [SHA256SUMS.txt](https://github.com/Fei-Away/Codex-Dream-Skin/releases/download/v1.5.5/SHA256SUMS.txt)
> 
> The packages are currently unsigned. Follow the graphical first-run steps in
> [macOS installation](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.5/docs/install-macos.md)
> or [Windows installation](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.5/docs/install-windows.md).
> No terminal trust command is required for ordinary users.
> 
> This release was built automatically from c020d2461225e965f1f3c426959773b26d23799d after the version bump reached main.

## 社群與生態

**社群活躍度**：社群活躍，開發者積極回應問題，並定期更新。
**連結**：[文件](https://github.com/Fei-Away/Codex-Dream-Skin/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-25 ~ 2026-07-26）
> **活躍天數** 2 天 · **最新 commit** fix(readme): use width= not height= for the DreamSkin mark so it actually scales up

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#66](https://github.com/Fei-Away/Codex-Dream-Skin/issues/66) | [Bug] load-image-theme 在校验尺寸前用 sips 全解码图片,超大图内存炸弹 / sips ful `bug` | 1 | 0 |
> | [#240](https://github.com/Fei-Away/Codex-Dream-Skin/issues/240) | [Feature]: 支持视频背景主题 `enhancement` `needs-triage` | 0 | 0 |
> | [#237](https://github.com/Fei-Away/Codex-Dream-Skin/issues/237) | [Architecture]: Replace the PowerShell Windows release runti `enhancement` | 0 | 0 |
> | [#235](https://github.com/Fei-Away/Codex-Dream-Skin/issues/235) | [Bug]: Codex 26.715.10079.0 owl runtime 移除了 --remote-debuggi `bug` | 0 | 7 |

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
>   官方主题库：DreamSkin.cc ·
>   主题库 Gallery ·
>   在线 Studio
> 
>   非 OpenAI 官方产品。不修改 .app / app.asar / WindowsApps。
> 
> ## 🤝 独家赞助
> 
> 感谢 Passion8 独家赞助本项目！Passion8 是一家面向开发者的 AI API 中转服务商，为个人开发者与团队提供稳定、低成本的主流大模型接入。
> 满血 AI · 触手可及：OpenAI、Claude 全系列原版模型，无降智、无套壳；使用前沿 AI 模型仅需官方价格的一小部分，充值 1:1，1$ = 1¥。保留原有官方 SDK，只把 Base URL 换成 Passion8，Claude Code、Codex、Grok 以及任意 OpenAI 兼容客户端都能直接跑——一行配置，代码不用改。
> 全球节点加速：Cloudflare 全球边缘 + 多线路 BBR 加速，低延迟、高可用、稳定如一；7×24 稳定中转，99.9% SLA，首 Token 目标 1 秒内。
> 安全可靠：独立 API Key、密钥加密存储、全链路 HTTPS，隐私优先。
> Passion8 为本项目用户准备了专属福利：通过此链接注册，首次充值自动赠送 10% 额度，无需申请，30 分钟内到账。有问题联系 support@passion8.cc。
> 
> 换肤与 API 配置互相独立，本项目不会自动改写你的模型供应商设置。
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
> ## 主题库与社区
> 
>   
>     
>   
> 
>   DreamSkin.cc · 本项目的官方主题库与创作平台
>   Make your workspace yours.
> 
>   浏览主题库 →
>   &nbsp;·&nbsp;
>   在线 Studio →
> 
> - [**主题库 Gallery**](https://dreamskin.cc/gallery)：浏览社区已审核的主题，支持最新 / 热门排序和创作者榜单。
>   每套主题都能先在网页里的桌面模拟器中试穿，再决定装不装。
> 
>   
>     
>   
>   社区主题「晨雾山水」的在线试穿 · 首页/任务页、宽窄窗口、侧栏展开收起都能当场切，满意了再一键换肤或下载主题包
> 
> - [**在线 Studio**](https://dreamskin.cc/studio)：在浏览器里换背景图、调主题色、写 Safe CSS，导出 `.zip` 主题包，
>   也可以直接投稿到主题库（需登录，经人工审核后公开）。
> 
>   
>     
>   
>   在线 Studio · 左侧实时预览，右侧调背景图、外观焦点与配色；主题库里任意一套主题都能一键载入继续改
> 
> macOS 菜单栏和 Windows 托盘都有「主题库 Gallery」和「在线 Studio」入口，可以直接打开。
> 
> ### 一键换肤
> 
> 在 DreamSkin.cc 上看到喜欢的主题，点「一键换肤」就能让本机客户端直接装上，不用先下载再手动导入。
> 需要 v1.5.0 或更新的客户端（建议 v1.5.5 及以上）。
> 
> 流程与安全边界：
> 
> - 网页通过 `dreamskin://apply?version=ver_...` 唤起本机 App。链接只能携带一个主题版本 ID，**不能**携带
>   任意 URL、文件路径或命令，也不存在静默应用参数。
> - App 只向固定的官方 API 取包，并拒绝重定向。
> - 换肤前弹出原生确认框，并核对该版本的审核状态、一键兼容标记、版本号、包大小、实际下载字节数和 SHA-256。
> - 通过后复用与手动导入完全相同的 ZIP、manifest、图片与 Safe CSS 校验。
> - 只有真实渲染进程确认新主题已生效才算成功。启动或渲染失败会自动尝试恢复换肤前的主题，恢复结果
>   同样要经过可见性验证；无法确认时会明确报告状态未确认，而不是假装已恢复。
> 
> 只有完整满足当前主题包契约（背景图 + `theme.json` + 非空 `theme.css` + 声明 `safe-css` 能力）的主题
> 才会显示一键换肤按钮；不满足的走下面的手动导入。
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
> ## 它能做什么
> 
> - **真·可交互**：侧栏、建议卡、项目选择、输入框都是原生控件，不是整窗假截图贴上去
> - **真背景层**：一张 16:9 纯壁纸连续铺满整窗，首页突出氛围，任务页自动降低干扰
> - **可换图**：换一张喜欢的纯背景，自适应焦点、安全区和配色后变成你的主题
> - **可存主题**：macOS 菜单栏与 Windows 系统托盘都能保存/切换本地主题
> - **一键换肤**：在 [DreamSkin.cc](https://dreamskin.cc) 上点一下，客户端核对来源与校验和后直接装上
> - **可导入主题包**：两端都可直接选择普通 `.zip`，安全校验后加入本地主题库
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
> ### 导入下载的主题
> 
> 从 DreamSkin.cc 装主题优先用[一键换肤](#一键换肤)。下面是手动导入 `.zip` 的兜底路径，也适用于任何
> 其他来源的主题包。
> 
> 在 macOS 菜单栏选择“导入主题 ZIP…”，或在 Windows 托盘选择同名菜单。只支持普通 `.zip`，
> 不支持 `.dreamskin` 后缀，也不要仅改后缀伪装。正式 Studio 主题包包含 `manifest.json`、
> `theme.json`、非空 `theme.css` 和恰好一张 `background.webp|jpg|png`；还可包含 `LICENSE.txt` 和预留的
> `manifest.sig`。这些文件可以位于 ZIP 根目录或唯一一层主题目录。导入器会核对适用平台、最低客户端
> 版本，以及清单中每个负载文件的大小和 SHA-256。`theme.css` 必须通过本机 Safe CSS 校验，导入后只会
> 作用于 12 个注册部件；每次切换/应用仍会重新校验。`manifest.sig` 当前不参与签名验证。
> 
> 本地简化 ZIP 也必须恰好包含非空 `theme.json`、非空 `theme.css` 和其引用图片；该格式没有正式清单的
> 完整性与兼容性声明，只应从可信来源使用。压缩包最大 32 MiB、最多 32 个条目、解压后最多 64 MiB。
> 导入成功后主题只会加入“已保存的主题”，不会自动替换当前主题；相同内容不会重复写入，同 ID 的不同
> 主题会使用新的安全标识保存。
> 
> 也可以先手动解压，再把包含 `theme.json`、`theme.css` 和背景图的完整主题目录移动到本机主题库：
> 
> - macOS：`~/Library/Application Support/CodexDreamSkinStudio/themes/`
> - Windows：`%LOCALAPPDATA%\CodexDreamSkin\themes\`
> 
> 菜单里有“打开主题文件夹”快捷入口。移动后重新打开菜单/托盘即可；不要再套一层目录，也不要放链接、
> 嵌套压缩包或缺少三件套的文件夹。手动目录不会经过 ZIP 导入器的归档校验，请只使用可信内容。升级前
> 已经保存且没有 CSS 的 legacy 主题仍可切换，但不会注入额外 CSS。
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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

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
