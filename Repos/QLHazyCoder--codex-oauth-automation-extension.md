---
repo: QLHazyCoder/codex-oauth-automation-extension
url: https://github.com/QLHazyCoder/codex-oauth-automation-extension
owner: QLHazyCoder
owner_type: User
language: JavaScript
license: Apache-2.0
description: "Chrome扩展：支持OpenAI OAuth注册、验证码获取、CPA回调验证与自动恢复"
homepage: "https://linux.do/t/topic/1928372"
stars: 2117
stars_per_day: 192
forks: 443
open_issues: 65
created: 2026-04-09
pushed_at: 2026-04-20
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "Pro4.9"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，支持多種郵箱驗證。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-19"
contributor_count: 5
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 2289
readme_length: 9984
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:905,2026-04-13:913,2026-04-14:1193,2026-04-14:1198,2026-04-15:1372,2026-04-15:1376,2026-04-16:1520,2026-04-16:1523,2026-04-17:1738,2026-04-18:1890,2026-04-19:1994,2026-04-20:2081,2026-04-21:2117"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "codex-oauth-automation-extension"
  - "QLHazyCoder/codex-oauth-automation-extension"
  - "自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，支持多種郵箱驗證。"
---

# codex-oauth-automation-extension

**2.1k** stars · **192** stars/天 · 建立 11 天前 · JavaScript · Apache-2.0

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

`Pro4.9` `easy-install`

> [!summary] 一句話摘要
> 自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，支持多種郵箱驗證。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (192 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要批量註冊 OpenAI 帳號的開發者或團隊。
> **一句話重點** 這個擴展不僅簡化了註冊流程，還提供了靈活的帳號管理功能，讓批量註冊變得輕鬆。

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
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到高效的批量註冊效果，值得採用。

> [!abstract] 核心創新
> 這個專案提供了一個全面的自動化解決方案，專注於批量處理 OpenAI OAuth 註冊流程。

## 專案簡介

這個 Chrome 擴展專為批量處理 ChatGPT OAuth 註冊和登錄流程而設計，核心功能包括自動獲取授權鏈接、填寫郵箱與密碼、獲取註冊和登錄驗證碼。用戶可以透過 DuckDuckGo、QQ、163 等郵箱服務來接收驗證碼，並支持多個帳號池的管理，這樣可以在遇到限制時自動切換帳號。擴展的設計使得用戶能夠在側邊欄中逐步執行或自動運行整個流程，並且支持中途停止和保存配置，這樣用戶可以根據需求靈活調整。最重要的是，這個工具能夠自動處理登錄會話管理，確保在需要時自動清理 cookie 並重新登錄。其一句話賣點是：讓你輕鬆批量註冊 OpenAI 帳號，省去手動操作的繁瑣。

技術上，這個擴展使用 JavaScript 和 Chrome API 來實現自動化流程，並依賴於多種郵件服務來獲取驗證碼，這樣的設計使得整體流程更加高效和穩定。相較於其他類似工具，如 0xGF/boneyard 和 AgentSeal/codeburn，這個擴展提供了更為直觀的操作界面和多帳號池的支持，適合需要大量註冊的用戶。使用過程中可能會遇到一些常見問題，如獲取驗證碼失敗或登錄卡住，這些問題在社群中已有討論並提供了解決方案。這個擴展目前處於穩定版本，值得在需要批量註冊的場景中使用。對於小型團隊或個人開發者來說，這是一個非常合適的工具，尤其是在需要快速獲取多個 OpenAI 帳號的情況下。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Python`

## 重點功能

- 自動獲取 OpenAI OAuth 授權鏈接 — 透過 CPA 面板自動生成鏈接。
- 支持多種郵箱服務 — 包括 QQ、163、DuckDuckGo 等，方便獲取驗證碼。
- 多帳號池管理 — 支持添加、編輯、禁用帳號，並自動切換以避免限制。
- 自動登錄會話管理 — 自動檢查登錄狀態，必要時清理 cookie 並重新登錄。
- 支持多輪自動運行 — 用戶可以設定自動運行次數和延遲時間，靈活控制流程。

## 快速開始

1. 打開 Chrome 擴展頁面
```bash
chrome://extensions/
```
2. 啟用開發者模式
```bash
開啟右上角的開發者模式選項
```
3. 加載已解壓的擴展程序
```bash
選擇本專案目錄
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 2117 stars（192/天），forks 443（20.9%），這顯示出用戶對於這個工具的強烈需求。作者 QLHazyCoder 和團隊在開源領域有一定的影響力，過去也有其他成功的專案。這個工具解決了在 OpenAI 註冊過程中，手動操作繁瑣、驗證碼獲取困難的問題，特別是在需要大量註冊的情況下，之前的手動方式效率低下。最近的社群討論和需求也促使這個工具的快速增長，特別是在開發者社群中。整體來看，這個工具的流行是因為它填補了市場上的一個空白，並且提供了實用的自動化解決方案。

## 適合誰使用

**目標受眾**：需要批量註冊 OpenAI 帳號的開發者或團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化註冊 OpenAI 帳號，因為手動註冊過程繁瑣且容易出錯。
> - 數據科學家用它來快速獲取多個 OpenAI 帳號進行實驗，因為這樣可以節省大量的時間和精力。
> - 開發者用它來批量創建測試帳號，因為這樣可以在測試環境中快速模擬多用戶場景。

## 架構分析

這個擴展採用 Chrome 擴展架構，利用 JavaScript 和 Chrome API 來實現自動化流程。用戶界面設計為側邊欄，便於用戶逐步執行或自動運行整個流程。資料流方面，擴展會根據用戶配置的 CPA 地址自動生成 OAuth 鏈接，並通過郵箱服務獲取驗證碼。選擇這種設計是為了提供更直觀的操作體驗，代價是需要用戶自行配置郵箱接收方式。擴展的可擴展性良好，但在高流量使用時可能會遇到服務器限制。

## 技術深入分析

這個擴展的核心技術機制是基於 Chrome 擴展架構，使用 JavaScript 來實現自動化的 OAuth 註冊流程。擴展通過 Chrome API 來控制瀏覽器行為，並利用多種郵件服務來獲取驗證碼。效能方面，這個擴展能夠快速處理多個註冊請求，但在高流量時可能會遇到服務器的限制，影響註冊速度。設計上選擇 JavaScript 是因為它在瀏覽器中的執行效率高，並且能夠直接與用戶界面互動。依賴樹相對簡單，主要依賴於 Chrome API 和郵件服務的 API，沒有過多的外部依賴。技術風險方面，若郵件服務的 API 發生變更，可能會影響擴展的正常運行。整合方面，這個擴展與 Chrome 瀏覽器的整合非常緊密，使用者只需簡單的配置即可開始使用，對於現有的開發工具鏈也相對友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的使用步驟，安裝過程順暢，無明顯坑點。提供了良好的快速開始指南，文件目前僅有英文版本，可能對非英語用戶造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠節省大量時間。
> - 支持多種郵箱服務，靈活性強。
> - 用戶界面友好，易於操作。

> [!danger] 缺點
> - 僅限於 Chrome 瀏覽器使用。
> - 需要用戶自行處理郵箱配置。
> - 可能會遇到服務器限制，影響使用體驗。

> [!warning] 注意事項
> - 僅支援 Chrome 瀏覽器。
> - 需要用戶自行配置郵箱接收方式。
> - 對於某些郵箱服務可能存在驗證碼延遲的問題。
> - 在高流量時段可能會遇到服務器限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具主要用於批量處理 OAuth 流程，但不支持多帳號池管理，適合少量註冊的場景。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 這個工具專注於安全性和隱私保護，但在自動化流程上不如本專案直觀。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具主要用於批量處理 OAuth 流程，但不支持多帳號池管理，適合少量註冊的場景。 | 如果你的需求是少量註冊且不需要多帳號管理，這個工具會更簡單。 | low，因為功能相似，遷移過程中只需調整配置。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 這個工具專注於安全性和隱私保護，但在自動化流程上不如本專案直觀。 | 如果你的主要需求是安全性，這個工具可能更合適。 | medium，因為需要重新學習其操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-oauth-automation-extension** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具主要用於批量處理 OAuth 流程，但不支持多帳號池管理，適合少量註冊的場景。 | 這個工具專注於安全性和隱私保護，但在自動化流程上不如本專案直觀。 |
> | 遷移成本 | - | low，因為功能相似，遷移過程中只需調整配置。 | medium，因為需要重新學習其操作方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是少量註冊且不需要多帳號管理，這個工具會更簡單。 | 如果你的主要需求是安全性，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合用於生產環境，特別是需要批量註冊的場景。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高流量時段可能會遇到服務器限制，導致註冊失敗。
  - 解法：嘗試在非高峰時段進行註冊。
- [MEDIUM] 獲取驗證碼時可能會出現延遲。
  - 解法：檢查郵箱配置是否正確，並嘗試手動刷新郵箱。
- [MEDIUM] 某些郵箱服務可能不支持自動生成的隨機郵箱。
  - 解法：使用已知的郵箱地址進行註冊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 OpenAI 帳號的開發團隊 | 非常適合 | 這個工具專為批量註冊設計，能顯著提高效率。 |
| 個人開發者偶爾需要註冊幾個帳號 | 普通 | 雖然功能強大，但對於偶爾使用者來說可能過於複雜。 |
| 需要高安全性註冊的場景 | 不適合 | 這個工具的重點在於自動化，而非安全性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到高效的批量註冊效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個工具本身不需要高權限操作，但會存取用戶的郵箱資訊，需確保郵箱服務的安全性。依賴的郵件服務需確認其信任度，避免使用不明來源的郵件服務。

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
| Forks | 443 |
| Open Issues | 65 |
| Issue 解決率 | 13% (10 closed) |
| 最後推送 | 2026-04-20 |
| 建立日期 | 2026-04-09 |
| 官方網站 | [Link](https://linux.do/t/topic/1928372) |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QLHazyCoder/codex-oauth-automation-extension) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 93
>     "CSS" : 3
>     "HTML" : 2
>     "Python" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@QLHazyCoder](https://github.com/QLHazyCoder) | 258 |
> | [@q3cc](https://github.com/q3cc) | 13 |
> | [@whwh1233](https://github.com/whwh1233) | 11 |
> | [@Jimmy-Bots](https://github.com/Jimmy-Bots) | 5 |
> | [@hisence999](https://github.com/hisence999) | 5 |

**最新版本**：Pro4.9 (2026-04-20)

> [!info]- Release Notes
> ## Pro4.9
> 
> ### 更新内容
> - 新增 2925 账号池：侧边栏支持添加、导入、编辑、删除、启用/禁用 2925 账号，并可在号池模式下直接选择当前基邮箱。
> - 2925 自动流程补上登录会话管理：步骤 4/8 前可自动检查登录态，必要时清理登录相关 cookie 后重新登录，并记录当前使用账号。
> - 贡献模式昵称现在允许留空；留空时不再默认回填当前邮箱，而是按匿名贡献者方式上报。
> 
> ### 修复与优化
> - 2925 收码前会先尝试清空历史邮件，减少旧验证码干扰；命中“子邮箱已达上限”等限制时，会自动禁用当前账号 24 小时并切换到下一个可用账号。
> - 2925 登录页与邮箱页识别增强，补上协议勾选、登录表单定位、登录结果等待和失败停机逻辑，提升重登录与账号切换稳定性。
> - 注册流程新增 `user_already_exists` 识别；自动运行命中该错误时不再在同一轮反复重试，而是直接结束当前轮并进入下一轮或停止。

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和問題討論。
**連結**：[文件](https://linux.do/t/topic/1928372)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-20）
> **活躍天數** 1 天 · **最新 commit** chore(release): bump version to Pro4.9

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#92](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/92) | 2925邮箱注册，第七步骤的时候，获取验证码，一直刷新也是拿不到，建议点一下重新发送电子邮件按钮 | 3 | 7 |
> | [#78](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/78) | v9.4.0提出新的 第八步回调 修改意见 | 2 | 1 |
> | [#83](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/83) | 第五步填完姓名和生日后卡主不动 | 2 | 17 |
> | [#57](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/57) | 请求添加openai相关页面新开无痕窗口进行处理 | 2 | 0 |

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
> 5. Step 10 会把 localhost 回调提交回 SUB2API，并直接创建 OpenAI 账号
> 
> 
> ### `SUB2API`
> 
> 当 `来源 = SUB2API` 时，需要配置：
> 
> - `SUB2API`：后台账号管理页地址
> - `账号 / 密码`：SUB2API 管理员登录信息
> - `分组`：目标 OpenAI 分组，留空时默认 `codex`
> - `默认代理`：可选，填写代理名称或代理 ID；留空时不使用代理
> 
> 插件会在 Step 1 和 Step 10 自动从 `/api/v1/admin/proxies/all` 解析这个代理，并在 OAuth 链接生成、授权码交换和账号创建请求中附带 `proxy_id`。如果名称匹配到多个代理，请改填代理 ID；留空则不会发送 `proxy_id`。
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
> - 支持 `2925`：新增多账号池、自动登录登出、Step 4 / Step 8 命中“子邮箱已达上限邮箱”后的 24 小时禁用与自动切号
> - 支持 `QQ Mail`、`163 Mail`、`Inbucket mailbox`
> - 支持从 DuckDuckGo Email Protection 自动生成新的 `@duck.com` 地址
> - 支持基于 Cloudflare 自定义域名自动生成随机邮箱前缀
> - Step 5 同时兼容两种页面：
>   - 页面要求填写 `birthday`
>   - 页面要求填写 `age`
> - 支持 `Auto` 多轮运行
> - 支持中途 `Stop`
> - 支持通过日志区的 `记录` 按钮查看邮箱记录面板，按邮箱展示最终状态、时间、失败标签和重试次数
> - 支持将邮箱记录完整快照同步到本地 helper，便于开发者直接查看 `data/account-run-history.json`
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
> 
> 
> ## 2026-04-17 更新补充：Gmail / 2925 别名邮箱
> 
> 本次版本对 `Gmail` 与 `2925` 的注册邮箱逻辑做了统一整理：
> 
> - `Gmail` 与 `2925` 现在都走同一套“别名邮箱”逻辑。
> - 两者都不再使用“只填前缀再特殊拼接”的界面交互。
> - 两者都要求先填写“基邮箱”：
>   - `Gmail`：例如 `name@gmail.com`
>   - `2925`：例如 `name@2925.com`
> - 侧边栏里的“注册邮箱”输入框对这两种模式都已开放，可直接手动填写完整邮箱。
> - 侧边栏里的 `获取 / 生成` 按钮对这两种模式也可用，行为与 Duck / Cloudflare 一样，都是“可自动生成，也可手动覆盖”。
> 
> 具体行为：
> 
> - `Gmail` 会基于完整基邮箱生成 `name+tag@gmail.com`
> - `2925` 会基于完整基邮箱生成 `name123456@2925.com`
> - 如果当前“注册邮箱”里已经是与当前基邮箱兼容的完整邮箱，流程会优先复用，不会强行重新生成
> 
> 注意：
> 
> - `2925` 旧的“只填前缀”使用方式已经不再推荐，应该改为填写完整基邮箱
> - 如果你手动填写了与当前 `Gmail / 2925` 基邮箱不匹配的完整邮箱，侧边栏会在保存或执行 Step 3 时拦截
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
> ### 方案 D：`2925 账号池`
> 
> 1. `Mail` 选择 `2925`
> 2. 在 `2925 账号池` 中添加 `邮箱 / 密码`
> 3. 在“2925 基邮箱”右侧打开 `号池` 开关后，基邮箱输入框会切成下拉框，只能从 2925 账号池中选择邮箱；关闭开关则回退到原来的手填基邮箱路线
> 4. 可先点 `使用此账号` 让当前别名基邮箱切到这条 2925 账号，再点 `登录` 手动验证网页邮箱登录态
> 5. 只有在 `号池` 开关开启时，自动流程执行到 Step 4 / Step 8 前才会自动检查 2925 登录态；如果未登录，会先清理登录 cookie、等待 `3 秒`，再打开登录页，并在页面打开后再等待 `3 秒`，然后使用当前账号自动登录；点击登录后若 `20 秒`内仍未进入收件箱，则会判定当前登录失败
> 6. 当 Step 4 / Step 8 轮询邮箱时遇到“子邮箱已达上限邮箱”，扩展会记录当前时间；如果还有下一个可用账号，就禁用当前账号 24 小时并自动切换登录；如果没有下一个可用账号，或当前未启用号池模式，则会直接复用现有“手动暂停 / 停止”逻辑终止自动流程
> 7. 如果你同时开启了 `Auto` 的自动重试，当前尝试结束后会按现有逻辑自动进入下一次尝试，不需要再手动介入
> 8. `Mail = 2925` 仍然走 Gmail / 2925 共用的别名邮箱链路；实际注册邮箱会基于当前 2925 账号邮箱生成，例如 `name@2925.com -> name123456@2925.com`
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
> Step 1 和 Step 10 都依赖这个地址。
> 
> 
> ### `Mail`
> 
> 支持五种验证码来源：
> 
> - `Hotmail`
> - `2925`
> - `163 Mail`
> - `163 VIP Mail`
> - `QQ Mail`
> - `Inbucket`
> 
> 说明：
> 
> - `Hotmail` 通过侧边栏里的 Hotmail 账号池选择账号，可切换为远程服务模式或本地助手模式
> - `2925` 通过侧边栏里的 2925 账号池选择账号，并在 Step 4 / Step 8 前自动校验网页邮箱登录态
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
> 
> ### `2925 账号池`
> 
> 仅当 `Mail = 2925` 时使用。
> 
> 每条账号支持保存：
> 
> - `email`
> - `password`
> 
> 使用方式：
> 
> - 添加一个或多个 `2925.com` 账号
> - 点击 `使用此账号` 可以切换当前别名基邮箱来源
> - 点击 `登录` 可以让扩展直接打开 / 复用 2925 邮箱标签页，并使用当前账号自动登录
> - 如果账号因为“子邮箱已达上限邮箱”被临时禁用，列表里会展示上限记录时间和恢复时间
> - 命中冷却的账号可手动 `清冷却`，也可以等待 24 小时后自动恢复可用
> - Auto 模式在生成 2925 别名邮箱前，会自动分配当前可用账号；若 Step 4 / Step 8 命中上限，会自动切到下一个账号
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
> 同时还会输出本地邮箱记录快照文件路径。看到这些输出后，再回到扩展里点 `校验`、`复制最新验证码`，或开启邮箱记录本地同步。
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
>    - 点击 `Create address（创建地址

## 延伸閱讀

相關概念：[[自動化]] · [[OAuth]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]]

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
> const concepts = ["自動化","OAuth","API 設計"];
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

- [[2026-04-16|2026-04-16]] — 再次上榜，1.5k stars
- [[2026-04-15|2026-04-15]] — 再次上榜，1.4k stars
- [[2026-04-14|2026-04-14]] — 再次上榜，1.2k stars
- [[2026-04-13|2026-04-13]] — 首次收錄，905 stars
