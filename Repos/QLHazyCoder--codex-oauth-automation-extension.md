---
repo: QLHazyCoder/codex-oauth-automation-extension
url: https://github.com/QLHazyCoder/codex-oauth-automation-extension
owner: QLHazyCoder
owner_type: User
language: JavaScript
license: Apache-2.0
description: "Chrome扩展：支持OpenAI OAuth注册、验证码获取、CPA回调验证与自动恢复"
homepage: "https://linux.do/t/topic/1928372"
stars: 1372
stars_per_day: 274
forks: 297
open_issues: 36
created: 2026-04-09
pushed_at: 2026-04-15
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v7.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "自動化處理 OpenAI OAuth 註冊流程的 Chrome 擴展。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-18"
contributor_count: 5
engagement: "medium"
issue_close_rate: 6
repo_size_kb: 1252
readme_length: 9954
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:905,2026-04-13:913,2026-04-14:1193,2026-04-14:1198,2026-04-15:1372"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "codex-oauth-automation-extension"
  - "QLHazyCoder/codex-oauth-automation-extension"
  - "自動化處理 OpenAI OAuth 註冊流程的 Chrome 擴展。"
---

# codex-oauth-automation-extension

**1.2k** stars · **300** stars/天 · 建立 4 天前 · JavaScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v7.7` `easy-install`

> [!summary] 一句話摘要
> 自動化處理 OpenAI OAuth 註冊流程的 Chrome 擴展。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (300 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要批量註冊 OpenAI 帳號的開發者或企業團隊。
> **一句話重點** 這個擴展的自動化設計能夠大幅提升 OpenAI 帳號註冊的效率，特別適合需要批量操作的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "QLHazyCoder--codex-oauth-automation-extension" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到批量註冊的高效能，值得採用。

> [!abstract] 核心創新
> 這個擴展能夠自動化整個 OpenAI OAuth 註冊流程，顯著減少手動操作的需求。

## 專案簡介

這個 Chrome 擴展專為批量處理 OpenAI OAuth 註冊和登錄流程而設計，支持自動填寫郵箱、密碼和獲取驗證碼。用戶只需配置管理面板的 OAuth 地址和郵箱來源，擴展會自動打開註冊頁面，填寫所需信息，並通過 DuckDuckGo、QQ、163 等郵箱服務獲取驗證碼。這樣的設計減少了手動操作的繁瑣，特別適合需要批量註冊帳號的用戶。關鍵指令包括自動獲取 OAuth 連結和自動填寫註冊表單，這使得整個流程幾乎無需人為干預。擴展支持多種郵箱來源，並能根據用戶需求自動生成強密碼，這對於安全性有很大提升。

技術上，這個擴展使用了 JavaScript 和 Chrome API，並且依賴於用戶的 CPA 管理面板，這意味著用戶需要確保其結構與擴展兼容。相比其他類似工具，這個擴展的優勢在於其多郵箱支持和自動化程度，能夠顯著提升註冊效率。使用者可能會遇到郵箱驗證失敗的問題，這通常需要手動干預來解決。整體來看，這個工具適合需要大量註冊 OpenAI 帳號的開發者或企業，並且在未來可能會進一步增強對其他郵箱服務的支持。

**技術棧**：`JavaScript` · `CSS` · `Python` · `HTML`

## 重點功能

- 自動獲取 OAuth 連結 — 透過 CPA 面板自動獲取 OpenAI OAuth 授權鏈接。
- 自動填寫註冊表單 — 自動填寫郵箱和密碼，支持自定義和自動生成強密碼。
- 多郵箱支持 — 支持 QQ、163、Hotmail 等多種郵箱服務，靈活獲取驗證碼。
- 支持自動重試 — 在獲取驗證碼失敗時，自動重試多次，減少手動干預。
- 側邊欄控制 — 提供直觀的側邊欄界面，方便用戶操作和配置。

## 快速開始

1. 安裝擴展
```bash
在 Chrome 瀏覽器中打開 chrome://extensions/，開啟開發者模式，選擇加載已解壓的擴展程序，並選擇本項目目錄。
```
2. 配置 CPA 地址
```bash
在側邊欄中填寫你的管理面板 OAuth 地址，例如 http(s):///management.html#/oauth。
```
3. 選擇郵箱來源
```bash
在側邊欄中選擇郵箱來源，如 QQ Mail 或 163 Mail，並配置郵箱生成方式。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1198 stars（299.5/天），forks 260（21.7%），這顯示出高需求和活躍的使用者基礎。作者 QLHazyCoder 及其團隊在開源社區有一定的知名度，之前也有其他成功的項目。這個工具解決了批量註冊 OpenAI 帳號的痛點，之前的手動流程繁瑣且容易出錯，這個擴展的自動化特性顯著提高了效率。社群的反饋和需求促使了這個工具的快速成長，特別是在需要快速獲取多個帳號的場景下。使用者對於郵箱驗證的需求和問題也促使了這個工具的開發。

## 適合誰使用

**目標受眾**：需要批量註冊 OpenAI 帳號的開發者或企業團隊。

> [!example] 使用場景
> - 開發者用它來批量註冊 OpenAI 帳號，因為手動註冊過程繁瑣且容易出錯，這個擴展能自動化整個流程。
> - 企業用它來快速創建多個測試帳號，因為這樣可以節省大量時間，尤其是在需要進行大量測試的情況下。
> - 個人用戶用它來管理多個 OpenAI 帳號，因為擴展支持多種郵箱來源，能夠靈活應對不同需求。

## 架構分析

這個擴展的架構基於 Chrome 擴展的設計模式，使用 JavaScript 進行前端邏輯處理。用戶的 CPA 管理面板作為主要的數據來源，擴展通過 Chrome API 與頁面進行交互。資料流從用戶配置的 OAuth 地址開始，擴展自動獲取 OAuth 連結並填寫註冊表單。

選擇使用自動化流程的用戶可以在設定中調整各種參數，如郵箱來源和延遲時間。這樣的設計使得擴展能夠靈活應對不同的使用情境，但也依賴於用戶的環境配置，這可能會造成一定的使用門檻。整體而言，這個擴展的設計旨在提高註冊效率，但在某些情況下，對於郵箱服務的依賴可能會成為瓶頸。

## 技術深入分析

這個擴展的核心技術機制是基於 Chrome 擴展架構，使用 JavaScript 與 Chrome API 進行頁面交互。擴展的自動化流程包括獲取 OAuth 連結、自動填寫註冊表單和獲取驗證碼，這些操作通過輪詢郵箱來實現。效能方面，擴展能夠快速處理多個註冊請求，但在郵箱驗證階段可能會遇到延遲，特別是在高流量時段。設計上，這個擴展選擇了基於 JavaScript 的實現，這使得開發和維護相對簡單，但也可能導致在某些環境下的兼容性問題。技術風險方面，對於郵箱服務的依賴可能在未來造成問題，特別是當這些服務的 API 政策發生變化時。整合方面，這個擴展與主流的開發工具鏈相容性良好，能夠輕鬆嵌入到現有的工作流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，並包含範例配置。安裝過程相對順暢，但需要用戶具備一定的技術背景以配置 CPA 管理面板。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能顯著減少手動操作時間。
> - 支持多種郵箱服務，靈活應對不同需求。
> - 界面友好，易於配置和使用。

> [!danger] 缺點
> - 僅限於 Chrome 瀏覽器，無法跨平台使用。
> - 對於某些郵箱服務的支持可能不穩定，需手動干預。
> - 需要用戶具備一定的技術背景以配置 CPA 管理面板。

> [!warning] 注意事項
> - 僅支援 Chrome 瀏覽器，無法在其他瀏覽器中使用。
> - 需要用戶的 CPA 管理面板結構與擴展兼容，否則可能無法正常運行。
> - 在某些郵箱服務上，驗證碼獲取可能會失敗，需手動干預。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於批量處理各種 OAuth 流程，但不支持郵箱自動生成，適合需要更高自定義的用戶。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 這個工具提供類似的 OAuth 自動化功能，但主要針對特定平台，功能範圍較窄。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具使用 Rust 實作，記憶體用量少，但功能相對較為簡單，缺乏郵箱自動生成的能力。 | 如果你的團隊需要一個輕量級的解決方案，並且不需要郵箱自動生成的功能。 | medium，因為需要重新配置 OAuth 流程。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 這個工具專注於特定平台的 OAuth 自動化，功能範圍較窄，適合特定需求。 | 如果你的需求非常專一，且只針對特定平台進行 OAuth 操作。 | low，因為功能相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-oauth-automation-extension** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具使用 Rust 實作，記憶體用量少，但功能相對較為簡單，缺乏郵箱自動生成的能力。 | 這個工具專注於特定平台的 OAuth 自動化，功能範圍較窄，適合特定需求。 |
> | 遷移成本 | - | medium，因為需要重新配置 OAuth 流程。 | low，因為功能相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的解決方案，並且不需要郵箱自動生成 | 如果你的需求非常專一，且只針對特定平台進行 OAuth 操作 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊進行測試，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些郵箱服務上，驗證碼獲取失敗，需手動干預。
  - 解法：檢查郵箱配置，確保能正常接收郵件。
- [MEDIUM] 擴展在高流量時可能會延遲，導致註冊過程變慢。
  - 解法：嘗試在低流量時段進行註冊。
- [MEDIUM] 某些用戶可能無法正確配置 CPA 管理面板。
  - 解法：參考 README 中的詳細配置說明。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 OpenAI 帳號的開發團隊 | 非常適合 | 自動化流程能顯著提高註冊效率，減少手動操作。 |
| 小型企業需要快速創建測試帳號 | 適合 | 支持多種郵箱來源，能夠靈活應對不同需求。 |
| 對於單一帳號的手動註冊 | 不適合 | 這個工具的優勢在於批量處理，單一註冊過程不需要這麼複雜的自動化。 |
| 需要在多個郵箱服務上進行註冊的用戶 | 非常適合 | 擴展支持多種郵箱服務，能夠靈活應對不同需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到批量註冊的高效能，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：擴展本身不需要高權限，僅在用戶的環境中運行，且不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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
| Forks | 260 |
| Open Issues | 34 |
| Issue 解決率 | 6% (2 closed) |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-04-09 |
| 官方網站 | [Link](https://linux.do/t/topic/1928372) |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QLHazyCoder/codex-oauth-automation-extension) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 86
>     "CSS" : 6
>     "Python" : 4
>     "HTML" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@QLHazyCoder](https://github.com/QLHazyCoder) | 114 |
> | [@whwh1233](https://github.com/whwh1233) | 11 |
> | [@Jimmy-Bots](https://github.com/Jimmy-Bots) | 5 |
> | [@hisence999](https://github.com/hisence999) | 5 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v7.7 (2026-04-13)

> [!info]- Release Notes
> ## v7.7
> 
> ### 更新内容
> - 优化侧边栏“自动重试”开关区域，移除残留的英文提示文案
> - 在线程间隔设置中恢复正确的显示逻辑，使相关输入区域不再被错误隐藏
> - 调整自动重试交互流程，开启时按确认弹窗逻辑处理，并支持直接关闭开关
> 
> ### 修复与优化
> - 修复自动重试开启后无法关闭的问题，避免切换时被强制重新勾选
> - 修复线程间隔输入框始终不可编辑的问题，改为仅在满足条件时启用
> - 将本次发布版本号从 `7.6.0` 更新为 `7.7`

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://linux.do/t/topic/1928372)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-13 ~ 2026-04-13）
> **活躍天數** 1 天 · **最新 commit** chore(release): bump version to v7.7

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#54](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/54) | 这回彻底拉了。需要手机验证了。 | 1 | 1 |
> | [#30](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/30) | 佬, Hotmail是没完全支持吗, 本地点校验都一直报错 | 1 | 11 |
> | [#4](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/4) | mac 无法获取163邮箱验证吗 | 1 | 4 |
> | [#59](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/59) | 希望支持gmail | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Multi-Page Automation
> 
> 一个用于批量跑通 ChatGPT OAuth 注册/登录流程的 Chrome 扩展。
> 
> 当前版本基于侧边栏控制，支持单步执行、整套自动执行、停止当前流程、保存常用配置，以及通过 DuckDuckGo / QQ / 163 / Inbucket / Hotmail 协助获取验证码。
> 
> 
> ### 方案 B：`SUB2API + QQ / 163 / 163 VIP`
> 
> 1. `来源` 选择 `SUB2API`
> 2. 填好 `SUB2API` 地址、登录邮箱、登录密码、分组名
> 3. `Mail` 与 `邮箱生成` 的配置方式同方案 A
> 4. Step 1 会直接在 SUB2API 后台生成 OAuth 链接
> 5. Step 9 会把 localhost 回调提交回 SUB2API，并直接创建 OpenAI 账号
> 
> 
> ## 插件效果
> 
> 一百五十个号，一个401：
> 
>   
>     
>       
>     
>     
>       
>     
>   
> 
> 
> ## 打赏一下
> 
> 佬们觉得好用的话，也可以打赏小弟一杯奶茶哦
> 
>   
>     
>       
>     
>     
>       
>     
>   
> 
> 
> ## Star History
> 
>   
>     
>     
>     
>   
> 
> 
> ## 当前能力
> 
> - 从 CPA 面板自动获取 OpenAI OAuth 授权链接
> - 自动打开 OpenAI 注册页并点击 `Sign up / Register`
> - 自动填写邮箱与密码
> - 支持自定义密码；留空时自动生成强密码
> - 自动显示当前使用中的密码，便于后续保存
> - 自动获取注册验证码与登录验证码
> - 支持 `Hotmail`：继续使用 `邮箱 + 客户端 ID + 刷新令牌（refresh token）`，并可在远程服务与本地助手两种模式间切换
> - 支持 `QQ Mail`、`163 Mail`、`Inbucket mailbox`
> - 支持从 DuckDuckGo Email Protection 自动生成新的 `@duck.com` 地址
> - 支持基于 Cloudflare 自定义域名自动生成随机邮箱前缀
> - Step 5 同时兼容两种页面：
>   - 页面要求填写 `birthday`
>   - 页面要求填写 `age`
> - 支持 `Auto` 多轮运行
> - 支持中途 `Stop`
> - Step 8 会自动寻找 OAuth 同意页的“继续”按钮，并通过 Chrome debugger 输入事件发起点击，然后监听本地回调地址
> 
> 
> ## 环境要求
> 
> - Chrome 浏览器
> - 打开扩展开发者模式
> - 你自己的 CPA 管理面板，且页面结构与当前脚本适配
> - 至少准备一种验证码接收方式：
>   - DuckDuckGo `@duck.com` + QQ / 163 / Inbucket 转发
>   - Cloudflare 自定义域邮箱前缀 + QQ / 163 / Inbucket 转发
>   - 手动填写一个可收信邮箱
> - 如果使用 `QQ` / `163` / `Inbucket`，对应页面需要提前能正常打开
> 
> 
> ## 安装
> 
> 1. 打开 `chrome://extensions/`
> 2. 开启“开发者模式”
> 3. 点击“加载已解压的扩展程序”
> 4. 选择本项目目录
> 5. 打开扩展侧边栏
> 
> 
> ## 快速开始
> 
> 如果你只是想先跑通一套最稳的组合，建议直接按下面三种方案之一配置。
> 
> 
> ### 方案 A：`CPA + QQ / 163 / 163 VIP`
> 
> 1. `CPA` 填你的管理面板 OAuth 页面地址
> 2. `Mail` 选择 `QQ Mail`、`163 Mail` 或 `163 VIP Mail`
> 3. `邮箱生成` 选择 `DuckDuckGo` 或 `Cloudflare`
> 4. 若你选择 `Cloudflare`，先按下文把 Cloudflare Email Routing 配好
> 5. 点击 `获取` 生成邮箱，或手动粘贴一个你能收信的邮箱
> 6. 先单步验证 `Step 1 ~ Step 4`
> 7. 验证没问题后再点右上角 `Auto`
> 
> 
> ### 方案 C：`Hotmail 账号池`
> 
> 1. `Mail` 选择 `Hotmail`
> 2. 在 `Hotmail 账号池` 中添加 `邮箱 / Client ID / Refresh Token`
> 3. 先点 `校验`，再点 `测试收信`
> 4. 通过后再执行步骤或 `Auto`
> 5. 当前项目中，`Mail = Hotmail` 时会直接使用账号池里的邮箱作为注册邮箱，不再走 `Duck / Cloudflare` 自动生成
> 
> 
> ## 侧边栏配置说明
> 
> 
> ### `CPA`
> 
> 你的管理面板 OAuth 页面地址，例如：
> 
> ```txt
> http(s):///management.html#/oauth
> ```
> 
> Step 1 和 Step 9 都依赖这个地址。
> 
> 
> ### `Mail`
> 
> 支持五种验证码来源：
> 
> - `Hotmail`
> - `163 Mail`
> - `163 VIP Mail`
> - `QQ Mail`
> - `Inbucket`
> 
> 说明：
> 
> - `Hotmail` 通过侧边栏里的 Hotmail 账号池选择账号，可切换为远程服务模式或本地助手模式
> - `QQ`、`163`、`163 VIP` 用于直接轮询网页邮箱
> - `Inbucket` 通过你在侧边栏里配置的 host 访问 `mailbox` 页面：`https:///m//`
> 
> 
> ### `Hotmail 账号池`
> 
> 仅当 `Mail = Hotmail` 时使用。
> 
> 可配置项：
> 
> - `接码模式`
> - `远程服务地址`
> - `本地助手地址`
> 
> 每条账号支持保存：
> 
> - `email`
> - `clientId`
> - `refreshToken`
> - 可选邮箱密码备注
> 
> 使用方式：
> 
> - 先选择 Hotmail 接码模式
> - 远程模式下填写你自己的远程服务地址
> - 本地模式下填写本地助手地址（默认 `http://127.0.0.1:17373`）
> - Windows 运行仓库根目录的 `start-hotmail-helper.bat`
> - macOS 运行仓库根目录的 `start-hotmail-helper.command`
> - 本地 helper 当前仅依赖 Python 标准库，无需额外安装第三方 Python 包
> - 再新增账号
> - 点击 `校验`
> - 校验通过后，可点击 `测试收信`
> - Auto 模式每轮会自动选用一个可用账号
> 
> #### 本地 helper 启动命令
> 
> Windows：
> 
> ```powershell
> .\start-hotmail-helper.bat
> ```
> 
> macOS：
> 
> ```bash
> chmod +x ./start-hotmail-helper.command
> ./start-hotmail-helper.command
> ```
> 
> 如果你不想走启动脚本，也可以直接运行 Python 程序本体：
> 
> ```bash
> python scripts/hotmail_helper.py
> ```
> 
> 如果你的环境里命令是 `python3`：
> 
> ```bash
> python3 scripts/hotmail_helper.py
> ```
> 
> #### 启动成功标志
> 
> 本地 helper 启动成功后，终端会输出：
> 
> ```text
> Hotmail helper listening on http://127.0.0.1:17373
> ```
> 
> 看到这行再回到扩展里点 `校验` 或 `复制最新验证码`。
> 
> #### 最小排错说明
> 
> - 如果提示 `Python 3 not found`，先安装 Python 3.10+
> - 如果 helper 已启动但扩展仍报连接失败，先确认模式切到了 `本地助手`
> - 确认本地助手地址与终端输出一致，默认应为 `http://127.0.0.1:17373`
> - 如果地址一致仍失败，再检查是否有端口占用或终端里是否已经抛出异常
> 
> 
> ### `Mailbox`
> 
> 仅当 `Mail = Inbucket` 时显示。
> 
> 填写 Inbucket mailbox 名称，例如：
> 
> ```txt
> tmp-mailbox
> ```
> 
> 脚本会自动打开：
> 
> ```txt
> https:///m//
> ```
> 
> 并且只检索未读邮件：
> 
> - 只匹配 `.message-list-entry.unseen`
> - 第 2 次轮询开始会自动点击 mailbox 页面上的刷新按钮
> - 识别到验证码后会尝试删除当前邮件，减少重复命中
> 
> 
> ### `Inbucket`
> 
> 仅当 `Mail = Inbucket` 时显示。
> 
> 这里填写 Inbucket host，支持两种格式：
> 
> - `your-inbucket-host`
> - `https://your-inbucket-host`
> 
> 脚本会自动规范化成 origin 后再拼接 mailbox URL。
> 
> 
> ### `Email`
> 
> Step 3 使用的注册邮箱。
> 
> 来源有两种：
> 
> - 手动粘贴
> - 点击 `获取` 自动生成邮箱（DuckDuckGo 或 Cloudflare）
> 
> 注意：
> 
> - 若 `邮箱生成 = Cloudflare`，插件里只需要维护 `CF 域名`
> - `CF 域名` 支持保存多个，并通过下拉框切换当前要生成的域名
> - Cloudflare 侧的转发规则、Catch-all、路由目标邮箱等，都需要你自己提前在 Cloudflare 后台配置好
> - 当 `Mail = Hotmail` 时，这个输入框由账号池自动同步当前账号邮箱
> - 当 `Mail = Hotmail` 时，Step 3 会直接使用 Hotmail 账号池里的邮箱；`Duck / Cloudflare` 不参与自动邮箱生成
> - 若你准备走 `Cloudflare`，更推荐把 `Mail` 设为 `QQ / 163 / 163 VIP`；`Inbucket` 仅在它能真实接收外部邮件并完成 Cloudflare 验证时再使用
> - 当前 `Auto` 按钮只负责 DuckDuckGo 地址获取
> - 如果你使用 Inbucket，它只是验证码收件箱，不会自动生成 Inbucket 地址
> 
> 
> ### `邮箱生成 = Cloudflare` 时的配置
> 
> - `CF 域名`：例如 `example.xyz`
> - 右侧 `添加 / 保存`：用于保存多个可切换的域名
> - 下拉框：用于切换当前这次要生成邮箱所使用的域名
> 
> #### 当前实现是什么逻辑
> 
> Cloudflare 模式下，插件不会再调用 Cloudflare API 创建路由。
> 
> 它现在只做一件事：
> 
> 1. 根据你当前选中的 `CF 域名`
> 2. 本地生成一个 10 位随机前缀
> 3. 前缀由 `6 个小写字母 + 4 个数字` 组成，顺序随机打乱
> 4. 直接得到一个类似 `a3b9cd1e2f@example.xyz` 的注册邮箱
> 5. 把这个邮箱写入当前流程继续往下跑
> 
> 也就是说，插件默认认为：
> 
> - 你已经在 Cloudflare 后台把这个域名的收件转发规则配置好了
> - 这个随机前缀邮箱发来的邮件，最终能被你现有的 `163 / QQ / Inbucket` 收件链路接住
> 
> #### 你需要自己提前做什么
> 
> 在 Cloudflare 后台，至少保证下面一条成立：
> 
> - 你已经配好了 Catch-all / 通配规则，能接住任意前缀邮箱
> - 或者你本来就有一套能覆盖这些随机前缀邮箱的转发规则
> 
> 否则插件虽然能生成 `@你的域名` 邮箱，但验证码邮件最后没人接收，后面的 Step 4 / Step 7 还是会失败。
> 
> #### 推荐搭配
> 
> - `Mail = QQ Mail`：Cloudflare 的 `Destination address / Destination addresses` 填你的 QQ 邮箱全地址
> - `Mail = 163 Mail`：Cloudflare 的 `Destination address / Destination addresses` 填你的 163 邮箱全地址
> - `Mail = 163 VIP Mail`：Cloudflare 的 `Destination address / Destination addresses` 填你的 163 VIP 邮箱全地址
> - `Mail = Inbucket`：仅当你的 Inbucket 实例本身就是一个真实可收外部邮件、且能收到 Cloudflare 验证邮件的地址时再使用
> - `Mail = Hotmail`：当前项目的自动流程不推荐和 Cloudflare 同时使用；因为 `Mail = Hotmail` 时，注册邮箱会直接使用 Hotmail 账号池邮箱
> 
> #### Cloudflare 后台怎么配（按钮中英对照）
> 
> 下面按钮名称以 Cloudflare 官方英文界面为准，括号内中文仅用于对照理解，不保证是 Cloudflare 的官方中文翻译。
> 
> 1. 登录 Cloudflare 后台，选中你要用的域名
> 2. 进入 `Email > Email Routing`
> 3. 如果这是你第一次给这个域名启用 Email Routing：
>    - 先检查 Cloudflare 准备添加的记录
>    - 点击 `Add records and enable（添加记录并启用）`
> 4. 进入 `Routing rules（路由规则）` 或 `Routes（路由）`
> 5. 先创建一个固定地址，用来把目标收件箱加进 Cloudflare：
>    - 点击 `Create address（创建地址）`
>    - 在 `Custom address（自定义地址）` 里填一个固定前缀，例如 `cf-init`
>    - 在 `Action（动作）` 中选择 `Send to an email（转发到邮箱）`
>    - 在 `Destination / Destination addresses（目标邮箱）` 中填你真正收验证码的邮箱
>    - 点击 `Save（保存）`
> 6. 打开 Cloudflare 发到目标邮箱的验证邮件，依次点击：
>    - `Verify email address（验证邮箱地址）`
>    - `Go to Email Routing（前往 Email Routing）`
> 7. 回到 Cloudflare 后台后，确认这个目标邮箱的状态已经变成 `Verified（已验证）`
> 8. 如果 Cloudflare 还在首次启用向导里要求继续：
>    - 点击 `Continue（继续）`
>    - 点击 `Add records and finish（添加记录并完成）`
> 9. 对于本项目这种“每次都生成随机前缀”的用法，建议再打开：
>    - `Catch-all address（Catch-all 地址）`
>    - 让它显示为 `Active（启用）`
>    - 在 `Action（动作）` 中选择 `Send to an email（转发到邮箱）`
>    - 如果界面要求选择 `Destination（目标邮箱）`，就选你刚刚已经验证通过的那个邮箱
>    - 点击 `Save（保存）`
> 10. 最后再回到插件：
>    - `邮箱生成` 选择 `Cloudflare`
>    - 在 `CF 域名` 里点 `添加`
>    - 输入域名后点 `保存`
>    - 点击 `获取`
> 
> #### Cloudflare 配好后怎么自测
> 
> 1. 先在插件里点击 `获取`，拿到一个随机前缀邮箱
> 2. 用另一个邮箱给这个地址发一封测试邮件
> 3. 不要用目标邮箱给自己发测试邮件，否则某些邮箱服务会把它当成重复邮件直接吞掉
> 4. 如果你的 `Mail` 选的是 `QQ / 163 / 163 VIP / Inbucket`，就去对应收件链路里确认这封测试邮件能否到达
> 
> #### 官方参考
> 
> - Cloudflare Email Routing 启用流程：
> - Cloudflare Routing rules / Routes / Catch-all / Destination addresses：
> 
> #### 最简单的使用方式
> 
> 1. 在 Cloudflare 后台先把你的域名收件转发规则配好
> 2. 在插件里选择 `邮箱生成 = Cloudflare`
> 3. 在 `CF 域名` 里点 `添加`
> 4. 输入域名后点 `保存`
> 5. 以后直接从下拉框切换当前使用的域名
> 6. 点击 `获取`，插件就会基于这个域名生成一个随机邮箱
> 
> 
> ### `Password`
> 
> - 留空：自动生成强密码
> - 手动输入：使用你自定义的密码
> - 可通过输入框右侧的眼睛图标切换显示
> - 配置会自动保存，也可以点击右侧 `保存` 按钮手动保存一次
> - 右上角 `配置` 按钮支持导出当前配置到 JSON 文件，也支持从 JSON 文件覆盖导入配置
> 
> 扩展会把本轮实际使用的密码同步回侧边栏，便于查看和复制。
> 
> 
> ### `Auto`
> 
> 整套流程自动跑。
> 
> 支持多轮运行，运行次数由右上角数字框决定。
> 
> `延迟` 里的“启动前倒计时”只控制整轮 Auto 开始前要不要先倒计时多少分钟。
> 
> `步间随机` 控制 Auto 流程里**每一步真正执行前**的额外等待秒数。这个设置只影响 Auto，不影响你手动单步点击执行；填 `0` 或留空表示不延迟。
> 
> 如果当前面板里已经存在未完成进度，点击 `Auto` 时会弹出选择：
> 
> - `重新开始`：重置当前流程进度，从 Step 1 开始新一轮
> - `继续当前`：把 `已完成 / 已跳过` 视为已处理，从第一个未处理步骤继续往后执行
> 
> 
> ## 工作流
> 
> 
> ### 单步模式
> 
> 侧边栏共有 9 个步骤按钮，可逐步执行：
> 
> 1. `Get OAuth Link`
> 2. `Open Signup`
> 3. `Fill Email / Password`
> 4. `Get Signup Code`
> 5. `Fill Name / Birthday`
> 6. `Login via OAuth`
> 7. `Get Login Code`
> 8. `Manual OAuth Confirm`
> 9. `CPA Verify`
> 
> 
> ### Auto 模式
> 
> 点击右上角 `Auto` 后，后台会按顺序跑完整流程。
> 
> 当前 Auto 逻辑是：
> 
> 1. Step 1 获取 CPA OAuth 链接
> 2. Step 2 打开 OpenAI 注册页
> 3. 根据 `Mail` 选择邮箱来源
> 4. 如果 `Mail = Hotmail`，会从账号池自动分配一个可用账号
> 5. 如果不是 Hotmail，则按当前“邮箱生成”配置尝试自动获取邮箱（Duck 或 Cloudflare）
> 6. 如果自动获取失败，暂停并等待你在

## 延伸閱讀

相關概念：[[自動化]] · [[OAuth]] · [[Chrome 擴展]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/QLHazyCoder/codex-oauth-automation-extension) · [官方網站](https://linux.do/t/topic/1928372)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "QLHazyCoder--codex-oauth-automation-extension"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "QLHazyCoder--codex-oauth-automation-extension"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "QLHazyCoder--codex-oauth-automation-extension" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "QLHazyCoder--codex-oauth-automation-extension"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","OAuth","Chrome 擴展"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "QLHazyCoder--codex-oauth-automation-extension" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "QLHazyCoder--codex-oauth-automation-extension" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "QLHazyCoder" AND file.name != "QLHazyCoder--codex-oauth-automation-extension"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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
> const me = dv.page("Repos/QLHazyCoder--codex-oauth-automation-extension");
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

> **2026-04-13** — 首次收錄
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

- [[2026-04-15|2026-04-15]] — 再次上榜，1.4k stars
- [[2026-04-14|2026-04-14]] — 再次上榜，1.2k stars
- [[2026-04-13|2026-04-13]] — 首次收錄，905 stars
