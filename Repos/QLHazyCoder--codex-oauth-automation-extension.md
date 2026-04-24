---
repo: QLHazyCoder/codex-oauth-automation-extension
url: https://github.com/QLHazyCoder/codex-oauth-automation-extension
owner: QLHazyCoder
owner_type: User
language: JavaScript
license: Apache-2.0
description: "Chrome扩展：支持OpenAI OAuth注册、验证码获取、CPA回调验证与自动恢复"
homepage: "https://apikey.qzz.io"
stars: 2435
stars_per_day: 174
forks: 492
open_issues: 74
created: 2026-04-09
pushed_at: 2026-04-23
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "Pro7.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，支持多種郵箱服務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-19"
contributor_count: 5
engagement: "medium"
issue_close_rate: 17
repo_size_kb: 2298
readme_length: 9978
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:905,2026-04-13:913,2026-04-14:1193,2026-04-14:1198,2026-04-15:1372,2026-04-15:1376,2026-04-16:1520,2026-04-16:1523,2026-04-17:1738,2026-04-18:1890,2026-04-19:1994,2026-04-20:2081,2026-04-21:2117,2026-04-22:2214,2026-04-23:2312,2026-04-24:2435"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "codex-oauth-automation-extension"
  - "QLHazyCoder/codex-oauth-automation-extension"
  - "自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，支持多種郵箱服務。"
---

# codex-oauth-automation-extension

**2.4k** stars · **174** stars/天 · 建立 14 天前 · JavaScript · Apache-2.0

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

`Pro7.5` `easy-install`

> [!summary] 一句話摘要
> 自動化 OpenAI OAuth 註冊流程的 Chrome 擴展，支持多種郵箱服務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (174 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要批量註冊 OpenAI 帳號的開發者或測試工程師。
> **一句話重點** 這個擴展讓批量註冊 OpenAI 帳號變得前所未有的簡單和高效。

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
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速批量註冊的效果，值得投入。

> [!abstract] 核心創新
> 支持多種郵箱服務的自動化註冊流程，並提供自定義郵箱池功能。

## 專案簡介

這個 Chrome 擴展專注於自動化 OpenAI 的 OAuth 註冊與登錄流程，讓用戶能夠批量處理註冊帳號。用戶只需配置管理面板的 OAuth 地址，選擇郵箱來源（如 QQ、163、Hotmail 等），然後插件會自動填寫註冊信息、獲取驗證碼並完成註冊。核心賣點在於其支持多種郵箱服務和自定義郵箱池，這使得用戶能夠靈活選擇郵箱來源，並在失敗時自動切換郵箱進行重試。技術上，這個擴展使用 JavaScript 進行頁面操作，並通過 Chrome 的 API 來注入腳本和管理頁面切換。

與其他類似工具相比，如 0xGF/boneyard 和 432539/gpt2api，這個擴展提供了更全面的郵箱服務支持和自動化流程，特別適合需要大量註冊帳號的開發者或測試人員。使用者在實際操作中可能會遇到如網頁結構變更導致的錯誤，這需要定期更新擴展以保持兼容性。這個工具目前處於穩定版本，適合中小型團隊使用，尤其是那些需要快速創建多個 OpenAI 帳號的場景。未來可能會增加更多郵箱服務的支持和更智能的錯誤處理機制。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Python`

## 重點功能

- 多郵箱服務支持 — 支持 QQ、163、Hotmail 等多種郵箱服務，靈活選擇。
- 自定義郵箱池 — 用戶可以自定義郵箱池，按順序分配郵箱進行註冊。
- 自動獲取驗證碼 — 自動從郵箱中獲取註冊和登錄的驗證碼，減少手動操作。
- 多輪自動運行 — 支持多輪自動運行，能夠根據郵箱池的長度自動調整運行次數。
- 詳細日誌記錄 — 提供郵箱記錄面板，展示每個郵箱的狀態和重試次數。

## 快速開始

1. 打開 Chrome 擴展頁面
```bash
chrome://extensions/
```
2. 啟用開發者模式
```bash
開啟開發者模式
```
3. 加載已解壓的擴展程序
```bash
選擇本項目目錄
```
4. 配置管理面板 OAuth 地址
```bash
填寫你的管理面板 OAuth 地址
```
5. 選擇郵箱服務
```bash
選擇 QQ Mail 或 163 Mail
```

## 程式碼範例

```js
{
  "前置條件": "用戶已配置好管理面板的 OAuth 地址",
  "指令": "自動填寫註冊信息並獲取驗證碼",
  "預期輸出": "成功創建 OpenAI 帳號並顯示驗證碼"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天就累積 2435 stars（174/天），forks 492（20.2%），這顯示出強勁的用戶需求。作者 QLHazyCoder 及其團隊在開源社群中有一定的知名度，這個工具解決了以往需要手動註冊多個帳號的繁瑣過程，特別是對於開發者和測試者來說，這是一個極大的提升。社群中對於自動化工具的需求日益增加，尤其是在 AI 領域，這使得這個工具的推出時機恰到好處。forks/stars 比率為 20.2%，顯示出許多用戶對其進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要批量註冊 OpenAI 帳號的開發者或測試工程師。

> [!example] 使用場景
> - 測試工程師用它來批量註冊 OpenAI 帳號，因為手動註冊耗時且容易出錯。
> - 開發者用它來自動化 OAuth 流程，因為這樣可以節省大量時間並減少人為錯誤。
> - 產品經理用它來快速創建多個測試帳號，因為這樣可以更有效地進行用戶體驗測試。

## 架構分析

這個擴展使用了 Chrome 的擴展 API 來注入腳本並控制頁面行為。其架構模式為單頁應用，所有操作均在 Chrome 瀏覽器內部完成。資料流從用戶配置的 OAuth 地址開始，經過郵箱服務的選擇和驗證碼的獲取，最終完成註冊。選擇 JavaScript 作為主要語言，因為它能夠直接與瀏覽器的 DOM 進行交互，這樣可以實現更流暢的用戶體驗。這種設計使得擴展能夠快速響應用戶操作，但也意味著需要定期更新以應對網站結構的變化。

## 技術深入分析

這個擴展的核心技術在於利用 Chrome 擴展 API 進行頁面操作，通過 JavaScript 來自動填寫表單和獲取驗證碼。其設計模式為單頁應用，所有操作都在用戶的瀏覽器內部完成，這樣可以實現更快的響應時間和更流暢的用戶體驗。擴展的效能在於能夠同時處理多個帳號的註冊，並且支持多輪自動運行，這對於需要大量帳號的用戶來說是非常有價值的。選擇 JavaScript 作為主要語言是因為它能夠直接與瀏覽器的 DOM 進行交互，這樣可以實現更流暢的用戶體驗。設計上，擴展需要定期更新以應對 OpenAI 網站結構的變化，這可能會帶來一定的技術債務。對於依賴外部郵箱服務的功能，擴展的穩定性可能會受到影響，特別是在郵箱服務的 API 發生變更的情況下。整合方面，擴展與主流的郵箱服務（如 QQ、163）有良好的兼容性，但在某些情況下可能需要用戶手動調整配置以確保正常運行。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用指南，安裝過程較為順暢，沒有明顯的坑。文件中有清晰的配置說明和範例，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種郵箱服務，靈活性高。
> - 自動化流程減少手動操作，提高效率。
> - 詳細的日誌記錄便於問題排查。

> [!danger] 缺點
> - 僅支持 Chrome 瀏覽器，無法跨平台使用。
> - 需要用戶手動配置郵箱服務，增加了使用門檻。
> - 對於某些郵箱服務的支持可能不夠穩定。

> [!warning] 注意事項
> - 僅支持 Chrome 瀏覽器
> - 需要用戶手動配置郵箱服務
> - 對於某些郵箱服務可能存在延遲

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於批量處理 OAuth 流程，但不支持多種郵箱服務。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 調用，無法自動化註冊流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用 Python 實作，記憶體用量較少，但功能上不如本專案全面。 | 如果你的團隊已經在使用 Python 且需要更輕量的解決方案。 | medium，因為需要重新適應不同的技術棧。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 調用，無法自動化註冊流程，適合需要直接調用 API 的用戶。 | 如果你的需求是直接與 OpenAI API 交互，而不是註冊帳號。 | low，因為 API 調用的概念相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-oauth-automation-extension** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，記憶體用量較少，但功能上不如本專案全面。 | 專注於 API 調用，無法自動化註冊流程，適合需要直接調用 API 的用戶。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的技術棧。 | low，因為 API 調用的概念相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 且需要更輕量的解決方案 | 如果你的需求是直接與 OpenAI API 交互，而不是註冊 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合中小型團隊使用，特別是需要快速創建多個 OpenAI 帳號的場景。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些郵箱服務中，驗證碼可能會延遲到達
  - 解法：手動刷新郵箱頁面以獲取最新郵件
- **[HIGH]** 如果 OpenAI 網站結構變更，擴展可能無法正常工作
  - 解法：定期檢查擴展更新以保持兼容性
- [MEDIUM] 自定義郵箱池中的郵箱格式不正確可能導致註冊失敗
  - 解法：確保郵箱格式正確且可用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 50 個 OpenAI 帳號的測試團隊 | 非常適合 | 自動化流程能大幅提高效率，減少手動操作。 |
| 小型開發團隊需要快速創建測試帳號 | 適合 | 支持多種郵箱服務，靈活性高。 |
| 大型企業需要穩定的帳號註冊流程 | 普通 | 可能需要定期更新以應對網站變更。 |
| 個人開發者偶爾需要註冊帳號 | 不適合 | 對於偶爾使用者來說，手動註冊更為簡單。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速批量註冊的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：擴展需要訪問用戶的郵箱，可能會存取敏感信息。用戶需確保郵箱服務的安全性，並定期檢查擴展的權限設置。

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
| Forks | 492 |
| Open Issues | 74 |
| Issue 解決率 | 17% (15 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-09 |
| 官方網站 | [Link](https://apikey.qzz.io) |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QLHazyCoder/codex-oauth-automation-extension) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 94
>     "CSS" : 3
>     "HTML" : 2
>     "Python" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@QLHazyCoder](https://github.com/QLHazyCoder) | 313 |
> | [@q3cc](https://github.com/q3cc) | 18 |
> | [@whwh1233](https://github.com/whwh1233) | 11 |
> | [@Jimmy-Bots](https://github.com/Jimmy-Bots) | 5 |
> | [@hisence999](https://github.com/hisence999) | 5 |

**最新版本**：Pro7.5 (2026-04-23)

> [!info]- Release Notes
> ## Pro7.5
> 
> ### 更新内容
> - 新增自定义邮箱池生成方式，可按轮次分配预置注册邮箱，并让自动轮数跟随邮箱池长度
> - 新增“邮箱服务 = 自定义邮箱”的自定义号池，Auto 会按号池分配邮箱；普通失败继续复用当前邮箱，只有成功或出现手机号验证时才切到下一个邮箱
> - Step 8 的自定义邮箱手动确认弹窗新增“出现手机号验证”按钮，可直接按 add-phone 致命错误处理并继续下一邮箱
> - 侧边栏补充贡献更新提示与自动前提醒，并补充 QQ 邮箱切换 / 扩展更新相关使用教程
> 
> ### 修复与优化
> - 优化 Step 3 收尾阶段的页面切换与内容脚本重连，减少提交后通信超时带来的误判
> - 优化自动运行控制器、标签页运行时与验证码流程的超时预算处理，保持手机号验证 fatal 分支的日志与状态一致
> - 同步更新 README、使用教程、完整链路说明、文件结构说明，并补充相关回归测试

## 社群與生態

**社群活躍度**：社群活躍，有定期更新和回應。
**連結**：[文件](https://apikey.qzz.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-23）
> **活躍天數** 1 天 · **最新 commit** chore(release): bump version to Pro7.5

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#78](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/78) | v9.4.0提出新的 第八步回调 修改意见 | 2 | 1 |
> | [#83](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/83) | 第五步填完姓名和生日后卡主不动 | 2 | 17 |
> | [#57](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/57) | 请求添加openai相关页面新开无痕窗口进行处理 | 2 | 0 |
> | [#105](https://github.com/QLHazyCoder/codex-oauth-automation-extension/issues/105) | 卡在第四步 获取注册验证码 Route Error (405 Method Not Allowed) | 1 | 7 |

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
> ### 方案 C：`Codex2API + QQ / 163 / 163 VIP`
> 
> 1. `来源` 选择 `Codex2API`
> 2. 填好 `Codex2API` 后台地址、管理密钥
> 3. `Mail` 与 `邮箱生成` 的配置方式同方案 A
> 4. Step 7 会直接通过 Codex2API 协议 `/api/admin/oauth/generate-auth-url` 生成 OAuth 链接
> 5. Step 10 会把 localhost 回调中的 `code / state` 通过 `/api/admin/oauth/exchange-code` 直接提交给 Codex2API
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
> ### `Codex2API`
> 
> 当 `来源 = Codex2API` 时，需要配置：
> 
> - `Codex2API`：后台账号管理页地址，默认 `http://localhost:8080/admin/accounts`
> - `管理密钥`：Codex2API 的 `Admin Secret`
> 
> 插件会在：
> 
> - Step 7 调用 `POST /api/admin/oauth/generate-auth-url` 生成授权链接
> - Step 10 调用 `POST /api/admin/oauth/exchange-code` 完成 localhost callback 的授权码交换并创建账号
> 
> 这条来源是协议直连，不依赖 Codex2API 后台页面的“添加账号 / OAuth 授权 / 生成授权链接”按钮 DOM。
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
> 2. 开启“开发者模式”
> 3. 点击“加载已解压的扩展程序”
> 4. 选择本项目目录
> 5. 打开扩展侧边栏
> 
> 
> ## 2026-04-17 更新补充：Gmail / 2925 别名邮箱
> 
> 本次版本对 `Gmail` 与 `2925 provide` 的注册邮箱逻辑做了统一整理：
> 
> - `Gmail` 与 `2925 provide` 现在都走同一套“别名邮箱”逻辑。
> - 两者都不再使用“只填前缀再特殊拼接”的界面交互。
> - 两者都要求先填写“基邮箱”：
>   - `Gmail`：例如 `name@gmail.com`
>   - `2925`（仅 provide 模式）：例如 `name@2925.com`
> - 侧边栏里的“注册邮箱”输入框对这两种模式都已开放，可直接手动填写完整邮箱。
> - 侧边栏里的 `获取 / 生成` 按钮对这两种模式也可用，行为与 Duck / Cloudflare 一样，都是“可自动生成，也可手动覆盖”。
> - 当 `Mail = 2925` 且模式切到 `接收邮箱` 时，不再走别名基邮箱链路，而是回退到普通“邮箱生成 / 手动填写注册邮箱”路线，2925 只负责后续收信。
> 
> 具体行为：
> 
> - `Gmail` 会基于完整基邮箱生成 `name+tag@gmail.com`
> - `2925` 仅在 provide 模式下会基于完整基邮箱生成 `name123456@2925.com`
> - 如果当前“注册邮箱”里已经是与当前基邮箱兼容的完整邮箱，流程会优先复用，不会强行重新生成
> 
> 注意：
> 
> - `2925` 旧的“只填前缀”使用方式已经不再推荐，应该改为填写完整基邮箱
> - 如果你手动填写了与当前 `Gmail / 2925 provide` 基邮箱不匹配的完整邮箱，侧边栏会在保存或执行 Step 3 时拦截
> 
> 
> ## 2026-04-23 更新补充：自定义邮箱池
> 
> 本次版本新增 `自定义邮箱池` 生成方式，用于把一批已经准备好的邮箱按顺序分配给自动流程：
> 
> - 在 `邮箱生成` 中选择 `自定义邮箱池`
> - 在新出现的 `邮箱池` 文本框里按“每行一个邮箱”填写
> - `Auto` 运行次数会自动跟随邮箱池数量，无需再手动对齐轮数
> - 同一目标轮次的失败重试会继续复用当前轮邮箱，不会提前跳到下一个
> - 实际收码仍然走当前 `Mail` 对应的邮箱服务，因此应保证邮箱池里的地址与当前收码链路匹配
> 
> 
> ## 2026-04-23 更新补充：自定义邮箱服务号池
> 
> 当 `Mail = 自定义邮箱` 时，现在也可以直接维护一组“自定义号池”：
> 
> - 在 `邮箱服务` 选择 `自定义邮箱`
> - 在新出现的 `自定义号池` 文本框里按“每行一个邮箱”填写
> - `Auto` 运行次数会自动跟随号池数量
> - 只要当前邮箱还没成功认证、也没出现手机号验证，就会持续复用这个邮箱重试
> - 只有成功认证，或明确出现 `add-phone / 手机号验证` 时，才会切换到号池中的下一个邮箱
> - 这条链路只负责分配注册邮箱；第 `4 / 8` 步仍然保持手动输入验证码，不会改成自动轮询邮箱
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
> 3. `邮箱生成` 选择 `DuckDuckGo`、`Cloudflare` 或 `自定义邮箱池`
> 4. 若你选择 `Cloudflare`，先按下文把 Cloudflare Email Routing 配好
> 5. 若你选择 `自定义邮箱池`，就在 `邮箱池` 中按行填入邮箱；否则点击 `获取` 生成邮箱，或手动粘贴一个你能收信的邮箱
> 6. 先单步验证 `Step 1 ~ Step 4`
> 7. 验证没问题后再点右上角 `Auto`
> 
> 
> ### 方案 D：`Hotmail 账号池`
> 
> 1. `Mail` 选择 `Hotmail`
> 2. 在 `Hotmail 账号池` 中添加 `邮箱 / Client ID / Refresh Token`
> 3. 先点 `校验`，再点 `测试收信`
> 4. 通过后再执行步骤或 `Auto`
> 5. 当前项目中，`Mail = Hotmail` 时会直接使用账号池里的邮箱作为注册邮箱，不再走 `Duck / Cloudflare` 自动生成
> 
> 
> ### 方案 E：`2925 账号池`
> 
> 1. `Mail` 选择 `2925`
> 2. 在 `2925 账号池` 中添加 `邮箱 / 密码`
> 3. 先根据你的用途选择 `2925 模式`
>    - `提供邮箱`：注册邮箱本身就是 2925 别名，会显示“别名基邮箱”输入
>    - `接收邮箱`：注册邮箱回退到普通“邮箱生成 / 手动填写”路线，2925 只负责收信
> 4. `2925 号池` 现在是独立配置行；开启 `号池` 后可从下拉框中选择当前 2925 账号。若当前处于 `提供邮箱` 模式，这个账号也会同步作为别名基邮箱
> 5. 可先点 `使用此账号` 让当前 2925 账号切到这条记录，再点 `登录` 手动验证网页邮箱登录态
> 6. 只有在 `号池` 开关开启时，自动流程执行到 Step 4 / Step 8 前才会自动检查 2925 登录态；如果未登录，会先清理登录 cookie、等待 `3 秒`，再打开登录页，并在页面打开后再等待 `3 秒`，然后使用当前账号自动登录；填写完账号密码后会额外等待 `1 秒` 再点击登录，点击后若 `40 秒`内仍未进入收件箱，则会判定当前登录失败
> 7. 当 Step 4 / Step 8 轮询邮箱时遇到“子邮箱已达上限邮箱”，扩展会记录当前时间；如果还有下一个可用账号，就禁用当前账号 24 小时并自动切换登录；如果没有下一个可用账号，或当前未启用号池模式，则会直接复用现有“手动暂停 / 停止”逻辑终止自动流程
> 8. 如果你同时开启了 `Auto` 的自动重试，当前尝试结束后会按现有逻辑自动进入下一次尝试，不需要再手动介入
> 9. 只有 `Mail = 2925` 且模式为 `提供邮箱` 时，才会继续走 Gmail / 2925 共用的别名邮箱链路；例如 `name@2925.com -> name123456@2925.com`
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
> - 按当前生成方式自动生成或分配邮箱（DuckDuckGo / Cloudflare / 自定义邮箱池）
> 
> 注意：
> 
> - 若 `邮箱生成 = Cloudflare`，插件里只需要维护 `CF 域名`
> - 若 `邮箱生成 = 自定义邮箱池`，需要在 `邮箱池` 文本框中按行维护邮箱列表
> - 若 `Mail = 自定义邮箱` 且你希望多轮自动跑不同邮箱，可直接在 `自定义号池` 文本框中按行维护邮箱列表
> - `CF 域名` 支持保存多个，并通过下拉框切换当前要生成的域名
> - Cloudflare 侧的转发规则、Catch-all、路由目标邮箱等，都需要你自己提前在 Cloudflare 后台配置好
> - 当 `Mail = Hotmail` 时，这个输入框由账号池自动同步当前账号邮箱
> - 当 `Mail = Hotmail` 时，Step 3 会直接使用 Hotmail 账号池里的邮箱；`Duck / Cloudflare` 不参与自动邮

## 延伸閱讀

相關概念：[[自動化]] · [[OAuth]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/QLHazyCoder/codex-oauth-automation-extension) · [官方網站](https://apikey.qzz.io)

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
