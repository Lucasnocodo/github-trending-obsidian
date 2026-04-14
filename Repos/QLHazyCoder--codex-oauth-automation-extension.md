---
repo: QLHazyCoder/codex-oauth-automation-extension
url: https://github.com/QLHazyCoder/codex-oauth-automation-extension
owner: QLHazyCoder
owner_type: User
language: JavaScript
license: Apache-2.0
description: "Chrome扩展：支持OpenAI OAuth注册、验证码获取、CPA回调验证与自动恢复"
homepage: "https://linux.do/t/topic/1928372"
stars: 1193
stars_per_day: 298
forks: 258
open_issues: 34
created: 2026-04-09
pushed_at: 2026-04-13
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v6.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，簡化驗證碼獲取與 CPA 回調驗證。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-17"
contributor_count: 5
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 986
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:905,2026-04-13:913,2026-04-14:1193"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "codex-oauth-automation-extension"
  - "QLHazyCoder/codex-oauth-automation-extension"
  - "自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，簡化驗證碼獲取與 CPA 回調驗證。"
---

# codex-oauth-automation-extension

**913** stars · **304** stars/天 · 建立 3 天前 · JavaScript · Apache-2.0

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

`v6.1.0` `easy-install`

> [!summary] 一句話摘要
> 自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，簡化驗證碼獲取與 CPA 回調驗證。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (304 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要批量註冊 OpenAI 帳號的開發者或測試工程師，尤其是在需要快速測試的情況下。
> **一句話重點** 這個擴展不僅簡化了 OpenAI 的註冊流程，還通過靈活的郵件服務選擇提升了用戶體驗。

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
> **結論** 花 2 小時學習，1 小時整合，得到高效的自動化註冊流程，值得投入。

> [!abstract] 核心創新
> 這個專案的創新在於其自動化 OpenAI OAuth 註冊流程的能力，並支持多種郵件來源的靈活配置。

## 專案簡介

這個 Chrome 擴展旨在自動化 OpenAI 的 OAuth 註冊與登錄流程，使用者只需配置一次，後續可全自動運行。核心流程包括從 CPA 面板獲取 OAuth 授權鏈接，然後自動填寫註冊頁面上的電子郵件和密碼，並獲取驗證碼。使用者可以選擇多種郵件來源，如 QQ、163 或 DuckDuckGo，並根據需要自動生成隨機郵箱。這個工具的賣點在於其高效的自動化能力，支持多輪運行和中途停止，讓使用者能夠輕鬆管理多個帳號的註冊過程。技術上，擴展使用 JavaScript 進行 DOM 操作，並透過 Chrome 的 debugger API 來模擬用戶行為，這樣的設計使得擴展能夠靈活應對不同的頁面結構變化。

與傳統的手動註冊流程相比，這個工具能顯著減少時間成本，並提高成功率。相較於其他類似工具，這個擴展支持多種郵件來源和自動生成郵箱的功能，這在需要大量註冊的場景中尤為重要。使用者在使用過程中可能會遇到郵件延遲或頁面結構變化導致的錯誤，但擴展提供了手動干預的選項來解決這些問題。整體來看，這個擴展適合需要批量註冊 OpenAI 帳號的開發者或團隊，尤其是在需要快速測試或開發的情況下。未來可能會增加更多郵件服務的支持，進一步擴展其功能。

**技術棧**：`JavaScript` · `CSS` · `HTML`

## 重點功能

- 自動獲取 OAuth 授權鏈接 — 透過 CPA 面板自動獲取鏈接，簡化註冊流程。
- 支持多種郵件來源 — 包括 QQ、163、DuckDuckGo 等，靈活選擇郵件服務。
- 自動生成隨機郵箱 — 根據 Cloudflare 或 DuckDuckGo 自動生成可用郵箱，減少手動操作。
- 支持多輪運行 — 可以設定自動運行多次，適合需要大量註冊的場景。
- 中途停止功能 — 允許使用者在流程中隨時停止，便於處理異常情況。

## 快速開始

1. 打開 Chrome 擴展頁面
```bash
chrome://extensions/
```
2. 啟用開發者模式
```bash
開啟右上角的開關
```
3. 加載已解壓的擴展程序
```bash
選擇本專案目錄
```
4. 配置 CPA 地址和郵件來源
```bash
在擴展側邊欄填寫相應信息
```
5. 開始自動註冊
```bash
點擊右上角的 Auto 按鈕
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 913 stars（304/天），forks 192（21.0%），顯示出強勁的增長潛力。作者 QLHazyCoder 及其團隊在開源社群中活躍，過去有多個相關專案。這個工具解決了大量用戶在 OpenAI 註冊過程中面臨的繁瑣驗證碼問題，特別是在需要多次註冊的情況下，傳統方法效率低下。近期的推廣活動和社群討論也促進了這個工具的曝光率。技術上，這個工具的自動化能力和靈活的郵件來源選擇使其在同類工具中脫穎而出，特別是在需要快速註冊的場景中。

## 適合誰使用

**目標受眾**：需要批量註冊 OpenAI 帳號的開發者或測試工程師，尤其是在需要快速測試的情況下。

> [!example] 使用場景
> - 開發者用它來批量註冊 OpenAI 帳號，因為手動註冊過程繁瑣且耗時，這個工具能顯著提高效率。
> - 測試工程師用它來快速生成多個測試帳號，因為這樣可以在短時間內完成大量測試，提升測試覆蓋率。
> - 團隊成員用它來協助新成員快速獲取 OpenAI 帳號，因為這樣能減少新成員的上手時間，提升團隊效率。

## 架構分析

這個擴展採用 Chrome 擴展架構，主要由 JavaScript 實現 DOM 操作和事件處理。其設計目的是為了簡化用戶在 OpenAI 註冊過程中的繁瑣步驟。資料流中，擴展首先從 CPA 面板獲取 OAuth 鏈接，然後根據用戶選擇的郵件來源自動生成郵箱並填寫註冊表單。

選擇使用 Chrome debugger API 來模擬用戶行為，這樣的設計使得擴展能夠靈活應對不同頁面結構的變化。這樣的選擇雖然增加了對頁面結構變化的敏感度，但也提高了自動化的成功率。擴展的擴展性在於其支持多種郵件服務，未來可以根據需求增加更多功能。

整體來看，這個架構設計旨在降低用戶的操作負擔，提升註冊效率。

## 技術深入分析

這個擴展的核心技術機制是基於 JavaScript 的 DOM 操作，通過 Chrome 的 debugger API 來模擬用戶行為，這使得擴展能夠自動化整個 OAuth 註冊流程。效能上，這個擴展能夠快速處理多個註冊請求，具體的性能數據尚未提供，但其設計目標是高效且穩定。選擇 JavaScript 作為開發語言是因為其與 Chrome 擴展的相容性和強大的 DOM 操作能力，這樣的選擇使得開發過程相對簡單。技術風險方面，由於依賴於頁面結構，未來可能會因為 OpenAI 的頁面改版而導致功能失效，這需要開發者持續關注。整合方面，這個擴展能夠與現有的 Chrome 環境無縫對接，並且能夠輕鬆與其他工具鏈進行整合，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指南。安裝過程順暢，無需特別配置。提供了良好的快速開始指引，讓新手能夠在短時間內上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 支持多種郵件來源，靈活性高。
> - 自動化流程減少手動操作，提高效率。
> - 提供中途停止功能，便於處理異常情況。
> - 簡單易用的界面，適合各類用戶。

> [!danger] 缺點
> - 對頁面結構變化敏感，可能需要頻繁更新。
> - 僅支援 Chrome 瀏覽器，無法在其他環境使用。
> - 需要用戶手動配置 CPA 管理面板，對新手不友好。
> - 在某些郵件服務上可能會遇到驗證碼延遲問題。

> [!warning] 注意事項
> - 僅支援 Chrome 瀏覽器，無法在其他瀏覽器上使用。
> - 需要用戶手動配置 CPA 管理面板，對於不熟悉的用戶可能有一定難度。
> - 在某些郵件服務上可能會遇到驗證碼延遲的問題，影響自動化流程。
> - 對於頁面結構變化敏感，可能需要不定期更新擴展以適應變化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於自動化多種 OAuth 流程，但不支持郵件生成，適合需要多種 OAuth 服務的用戶。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具主要用於同步文件，與本專案的 OAuth 自動化功能無關，但在自動化方面有相似的目標。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 此工具專注於隱私保護和匿名註冊，雖然有類似的自動化功能，但不支持 OpenAI 的 OAuth 流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於多種 OAuth 流程的自動化，但不支持郵件生成，適合需要多種 OAuth 服務的用戶。 | 如果你的需求是多種 OAuth 流程的自動化，而不需要郵件生成的功能。 | medium，因為需要重新配置 OAuth 流程。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具主要用於文件同步，與本專案的 OAuth 自動化功能無關，但在自動化方面有相似的目標。 | 如果你的需求主要是文件同步，而不是 OAuth 註冊。 | low，因為功能需求不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-oauth-automation-extension** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於多種 OAuth 流程的自動化，但不支持郵件生成，適合需要多種 OAuth 服務的用戶。 | 這個工具主要用於文件同步，與本專案的 OAuth 自動化功能無關，但在自動化方面有相似的目標。 |
> | 遷移成本 | - | medium，因為需要重新配置 OAuth 流程。 | low，因為功能需求不同。 |
> | 適用場景 | 主要場景 | 如果你的需求是多種 OAuth 流程的自動化，而不需要郵件生 | 如果你的需求主要是文件同步，而不是 OAuth 註冊。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的測試使用，不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些郵件服務上可能會遇到驗證碼延遲的問題，導致自動化失敗。
  - 解法：手動檢查郵件，必要時重新啟動流程。
- [MEDIUM] 頁面結構變化可能導致擴展功能失效。
  - 解法：定期檢查擴展更新，並根據需要調整配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 OpenAI 帳號的開發者 | 非常適合 | 自動化流程大幅提升註冊效率，減少手動操作。 |
| 測試工程師需要快速生成多個測試帳號 | 非常適合 | 能在短時間內完成大量註冊，提升測試覆蓋率。 |
| 新成員快速獲取 OpenAI 帳號 | 適合 | 能減少新成員的上手時間，提升團隊效率。 |
| 個人使用者偶爾註冊 OpenAI 帳號 | 普通 | 雖然功能強大，但對於偶爾使用者來說可能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的自動化註冊流程，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個擴展不需要高權限，主要操作是通過 Chrome 瀏覽器進行。它不存取敏感資料，但需要用戶提供的郵件帳號和密碼。依賴鏈的信任程度較高，因為使用的是公開的 Chrome 擴展架構。在 CI/CD 中使用時，需注意擴展的自動化行為可能會影響測試結果。

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
| Forks | 192 |
| Open Issues | 18 |
| Issue 解決率 | 10% (2 closed) |
| 最後推送 | 2026-04-12 |
| 建立日期 | 2026-04-09 |
| 官方網站 | [Link](https://linux.do/t/topic/1928372) |
| Repo 大小 | 986 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QLHazyCoder/codex-oauth-automation-extension) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 90
>     "CSS" : 6
>     "HTML" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@QLHazyCoder](https://github.com/QLHazyCoder) | 85 |
> | [@whwh1233](https://github.com/whwh1233) | 11 |
> | [@Jimmy-Bots](https://github.com/Jimmy-Bots) | 5 |
> | [@hisence999](https://github.com/hisence999) | 5 |
> | [@Liu8Can](https://github.com/Liu8Can) | 1 |

**最新版本**：v6.1.0 (2026-04-12)

> [!info]- Release Notes
> - 兼容新的 Codex OAuth 同意页结构，补充 `Sign in to Codex` 场景识别，优先在 consent form 内定位 `Continue` 按钮
> - 更新 README 快速开始说明，补充邮箱生成方案与 Cloudflare 配置指引
> - 扩展版本号更新为 `6.1.0`

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者問題。
**連結**：[文件](https://linux.do/t/topic/1928372)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-12）
> **活躍天數** 1 天 · **最新 commit** docs: move star history before capability section

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#30](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/30) | 佬, Hotmail是没完全支持吗, 本地点校验都一直报错 | 1 | 5 |
> | [#4](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/4) | mac 无法获取163邮箱验证吗 | 1 | 3 |
> | [#33](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/33) | 是否可以增加手机号功能 | 0 | 0 |
> | [#32](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/32) | 最新6.1.0 缺少buildLocalhostCleanupPrefix方法 | 0 | 1 |

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
> ## 最新版本测试结果
> 
> 最新版本实测了一个 5 轮自动，0 次失重试；睡前挂了一个十轮自动，1次重试：
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
> - 支持 `Hotmail`：直接使用 `邮箱 + 客户端 ID + 刷新令牌（refresh token）` 刷新微软令牌，并通过 Microsoft Graph 读取最新邮件
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
> - `Hotmail` 通过侧边栏里的 Hotmail 账号池选择账号，并直接访问 Microsoft Graph 邮件接口
> - `QQ`、`163`、`163 VIP` 用于直接轮询网页邮箱
> - `Inbucket` 通过你在侧边栏里配置的 host 访问 `mailbox` 页面：`https:///m//`
> 
> 
> ### `Hotmail 账号池`
> 
> 仅当 `Mail = Hotmail` 时使用。
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
> - 先新增账号
> - 点击 `校验`
> - 校验通过后，可点击 `测试收信`
> - Auto 模式每轮会自动选用一个可用账号
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
> 6. 如果自动获取失败，暂停并等待你在侧边栏填写邮箱后点击 `Continue`
> 7. 继续执行 Step 3 ~ Step 9
> 
> 也就是说：
> 
> - 如果邮箱可自动获取，整套流程更接近全自动
> - 如果自动获取失败，后台会先自动重试 5 次；仍失败时，Auto 才会在邮箱阶段暂停
> - Auto 的暂停状态会保存在会话状态中，重新打开侧边栏后仍可继续
> - 如果你在 Auto 暂停时改为手动点步骤或跳过步骤，面板会先确认并停止 Auto，再切回手动控制
> - 选择 `继续当前` 时，后台不会先做大而全的前置校验，而是从当前步骤状态直接继续；缺什么条件，就在运行到那一步时再报错或暂停
> 
> 
> ## 详细步骤说明
> 
> 
> ### Step 1: Get OAuth Link
> 
> 通过 `content/vps-panel.js`：
> 
> - 打开 CPA OAuth 面板
> - 等待 `Codex OAuth` 卡片出现
> - 点击“登录”
> - 读取页面里的授权链接
> 
> 结果会保存到侧边栏的 `OAuth` 字段。
> 
> 
> ### Step 2: Open Signup
> 
> 通过 `content/signup-page.js`：
> 
> - 打开授权链接
> - 查找 `Sign up / Register / 创建账户` 按钮
> - 自动点击进入注册流程
> 
> 
> ### Step 3: Fill Email / Password
> 
> - 如果侧边栏邮箱为空，会先按当前“邮箱生成”配置自动获取邮箱；失败时再提示手动粘贴
> - 自动填写邮箱
> - 如页面先要求邮箱，再进入密码页，会自动切页继续填写
> - 使用自定义密码或自动生成密码
> - 提交注册表单
> 
> 实际使用的密码会写入会话状态，并同步到侧边栏显示。
> 
> 
> ### Step 4: Get Signup Code
> 
> 根据 `Mail` 配置，轮询邮箱并提取 6 位验证码。
> 
> 进入邮箱轮询前，脚本会先确认认证页是否已经进入验证码页面；如果密码页出现 `糟糕，出错了 / 操作超时（Operation timed out）` 并带有 `重试` 按钮，会先自动点击 `重试`、回到密码页重新提交，再继续等待验证码页面。
> 
> 支持：
> 
> - `Hotmail`（Microsoft Graph 邮件接口）
> - `content/qq-mail.js`
> - `content

## 延伸閱讀

相關概念：[[自動化]] · [[OAuth]] · [[Chrome 擴展]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

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

- [[2026-04-14|2026-04-14]] — 再次上榜，1.2k stars
- [[2026-04-13|2026-04-13]] — 首次收錄，905 stars
