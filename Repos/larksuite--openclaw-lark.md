---
repo: larksuite/openclaw-lark
url: https://github.com/larksuite/openclaw-lark
owner: larksuite
owner_type: Organization
language: TypeScript
license: MIT
description: "飞书官方出品的 OpenClaw 飞书/Lark Channel 插件"
homepage: ""
stars: 1004
stars_per_day: 167
forks: 78
open_issues: 113
created: 2026-03-09
pushed_at: 2026-03-14
first_seen: 2026-03-13
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-13
use_case: "讓 OpenClaw 與飛書無縫整合，實現消息、文檔、日曆等功能的自動化操作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-23"
contributor_count: 4
engagement: "low"
issue_close_rate: 5
repo_size_kb: 419
readme_length: 4878
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:746,2026-03-16:1004"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "openclaw-lark"
  - "larksuite/openclaw-lark"
  - "讓 OpenClaw 與飛書無縫整合，實現消息、文檔、日曆等功能的自動化操作。"
---

# openclaw-lark

**746** stars · **249** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/larksuite--openclaw-lark");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓 OpenClaw 與飛書無縫整合，實現消息、文檔、日曆等功能的自動化操作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (249 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在飛書上實現自動化操作的中小型團隊。
> **一句話重點** 這個插件的強大之處在於其能夠將多種工作流整合到飛書中，提升團隊的工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/larksuite--openclaw-lark");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "larksuite--openclaw-lark" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、2 小時整合，得到提升團隊效率的效果，值得投入。

> [!abstract] 核心創新
> 這個專案提供了飛書與 OpenClaw 的深度整合，實現多種自動化操作。

## 專案簡介

OpenClaw Lark/Feishu 插件提供了一個強大的接口，讓用戶能夠將 OpenClaw Agent 與飛書工作空間連接。使用者可以透過此插件直接讀取和寫入消息、文檔、日曆等資料，這樣的設計旨在提升工作效率，減少手動操作的需求。具體來說，使用者可以透過插件發送和回覆消息，創建和管理文檔、表格及任務，並且能夠查詢日曆事件。關鍵的 CLI 指令包括 `npm install @larksuite/openclaw-lark` 來安裝插件，並使用 `openclaw -v` 確認 OpenClaw 版本。這個插件的賣點在於其全面的功能整合，讓用戶能夠在一個平台上完成多種任務，從而提高工作流的效率。

技術上，這個插件使用 TypeScript 和 JavaScript 開發，依賴於 Lark/Feishu 的 API，並且使用了如 `@larksuiteoapi/node-sdk` 和 `zod` 等庫來簡化開發過程。這樣的選擇使得插件在功能上具有高度的靈活性和擴展性，並且能夠快速適應未來的需求變化。

與其他類似工具相比，如 `FreedomIntelligence/OpenClaw-Medical-Skills` 和 `BigBodyCobain/Shadowbroker`，這個插件的優勢在於其專注於飛書的整合，提供了更全面的功能支持。

相比之下，其他工具可能在特定功能上有所限制，或是缺乏對飛書的深度整合。

使用這個插件的效果是顯著的，特別是在需要頻繁操作飛書的團隊中，能夠顯著減少手動操作的時間。不過，使用者需要注意安全性問題，因為插件會接觸到敏感資料，建議在測試階段使用個人賬號，並避免在群組中使用以降低數據洩露風險。

這個專案目前處於 beta 階段，適合中小型團隊使用，特別是那些已經在使用飛書的團隊。未來六個月內，預計會有更多功能的增強和安全性改進。

具體建議是：如果你的團隊需要在飛書上進行大量的文檔和任務管理，這個插件將會非常適合；如果你的團隊不使用飛書，則這個工具的價值會大打折扣。整合的總成本預估在 5 小時的學習時間和 2 小時的整合時間，值得投入。

**技術棧**：`TypeScript` · `JavaScript` · `@larksuiteoapi/node-sdk`

## 重點功能

- 消息管理 — 讀取、發送和回覆飛書消息，支持群組和私聊。
- 文檔操作 — 創建、更新和讀取飛書文檔，支持多種格式。
- 任務管理 — 創建和管理任務及子任務，支持查詢和更新。
- 日曆整合 — 管理日曆事件，支持創建、查詢和更新。
- 互動卡片 — 實時狀態更新和確認按鈕，增強用戶交互體驗。

## 快速開始

1. 安裝插件
```bash
npm install @larksuite/openclaw-lark
```
2. 確認 OpenClaw 版本
```bash
openclaw -v
```
3. 啟動插件
```bash
openclaw start
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 OpenClaw 和 Node.js。",
  "指令": "npm install @larksuite/openclaw-lark",
  "預期輸出": "插件成功安裝，並可在 OpenClaw 中使用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 746 stars（249/天），forks 50（6.7%），這顯示出強勁的增長潛力。開發者 PerfectPan 和團隊過去在開源社區有良好的聲譽，這個插件解決了飛書用戶在自動化操作上的需求，之前的解決方案往往功能不全或整合不佳。社群對於這個插件的需求也在增長，尤其是在遠端工作和團隊協作日益增加的背景下。forks/stars 比率在中等範圍，顯示出有相當比例的用戶在進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要在飛書上實現自動化操作的中小型團隊。

> [!example] 使用場景
> - 產品經理用它來自動化日常任務管理，因為可以直接在飛書中創建和更新任務，節省了手動操作的時間。
> - 開發者用它來整合飛書消息通知到 CI/CD 流程中，因為可以即時接收構建狀態更新，提升了反應速度。
> - 團隊領導用它來管理會議日程，因為能夠直接查詢日曆並安排會議，減少了溝通成本。

## 架構分析

OpenClaw Lark 插件採用模組化設計，主要由 TypeScript 和 JavaScript 開發，這使得插件在功能上具有高度的靈活性。資料流方面，插件通過 Lark/Feishu API 進行數據交互，使用者的請求會被轉換為 API 調用，然後返回結果。這樣的設計使得插件能夠快速響應用戶需求，但也依賴於 Lark/Feishu 的 API 穩定性。選擇這種設計的代價是需要持續關注 API 的變更，否則可能導致功能失效。擴展性方面，插件的架構允許未來添加更多功能，但隨著功能增多，維護的複雜度也會上升。

## 技術深入分析

OpenClaw Lark 插件的核心技術機制在於其與 Lark/Feishu API 的深度整合，使用 TypeScript 和 JavaScript 開發，這使得開發者能夠利用現有的生態系統進行快速開發。插件的效能特性取決於 Lark/Feishu API 的響應速度，理論上可以支持大規模的數據操作，但實際上可能因 API 限制而受到影響。設計上選擇了模組化的架構，這樣可以方便未來的功能擴展，但也增加了維護的複雜度。技術風險方面，依賴於外部 API 可能導致不穩定，特別是在高流量的情況下，可能會出現延遲或錯誤。整合方面，這個插件能夠與現有的 CI/CD 流程無縫對接，並且能夠在多種開發環境中使用，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多種語言版本，安裝過程順暢，沒有明顯的坑。使用指南提供了詳細的操作步驟，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 全面的功能整合，支持多種操作。
> - 模組化設計，便於未來擴展。
> - 良好的社群支持，能夠快速獲得幫助。

> [!danger] 缺點
> - 安全性風險，需謹慎使用。
> - 依賴於 Lark/Feishu 的 API 穩定性。
> - 在群組中使用可能導致數據洩露。

> [!warning] 注意事項
> - 需要 Node.js v22 或更高版本。
> - 必須使用 OpenClaw 2026.2.26 或更高版本。
> - 在群組中使用時可能存在數據安全風險。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，功能較為專一，適合醫療團隊使用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的消息整合方案，但缺乏對飛書的專門支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，提供特定功能支持。 | 如果你的團隊在醫療行業，這個工具會更適合。 | medium，因為需要調整業務邏輯以符合醫療需求。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的消息整合方案，但缺乏對飛書的專門支持。 | 如果需要更通用的消息整合，這個工具會更合適。 | high，需要重新設計整合流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaw-lark** | **OpenClaw-Medical-Skills** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的 OpenClaw 應用，提供特定功能支持。 | 提供更廣泛的消息整合方案，但缺乏對飛書的專門支持。 |
> | 遷移成本 | - | medium，因為需要調整業務邏輯以符合醫療需求。 | high，需要重新設計整合流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊在醫療行業，這個工具會更適合。 | 如果需要更通用的消息整合，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊試用，尚不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用過程中可能會遇到 API 限制導致的功能失效
  - 解法：定期檢查 API 文檔以獲取最新信息
- **[HIGH]** 在群組中使用時可能導致數據洩露
  - 解法：建議僅在私聊中使用
- [MEDIUM] 插件安裝後可能需要重啟 OpenClaw 才能生效
  - 解法：安裝後務必重啟 OpenClaw

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司使用飛書進行日常協作 | 非常適合 | 能夠有效整合多種功能，提升工作效率。 |
| 大型企業需要在飛書中進行數據管理 | 普通 | 雖然功能全面，但安全性風險需謹慎考量。 |
| 不使用飛書的團隊 | 不適合 | 無法發揮插件的功能優勢。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、2 小時整合，得到提升團隊效率的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：插件需要訪問工作數據，使用時需遵循組織的數據安全政策，避免在群組中使用以降低數據洩露風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/larksuite--openclaw-lark");
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
> const me = dv.page("Repos/larksuite--openclaw-lark");
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
| Forks | 50 |
| Open Issues | 61 |
| Issue 解決率 | 5% (3 closed) |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-09 |
| Repo 大小 | 419 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/larksuite/openclaw-lark) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@larksuiteoapi/node-sdk` `@sinclair/typebox` `image-size` `zod` `@types/node` `@types/qrcode` `@typescript-eslint/eslint-plugin` `@typescript-eslint/parser` `eslint` `eslint-plugin-import` `eslint-plugin-n` `execa` `fs-extra` `minimist` `openclaw`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@PerfectPan](https://github.com/PerfectPan) | 1 |
> | [@anxinfeng](https://github.com/anxinfeng) | 1 |
> | [@elinxz](https://github.com/elinxz) | 1 |
> | [@oss-bd](https://github.com/oss-bd) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在多個開放的 Issue 和 Pull Request。
**連結**：[文件](https://www.npmjs.com/package/@larksuite/openclaw-lark)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-09 ~ 2026-03-12）
> **活躍天數** 3 天 · **最新 commit** fix: simplify account config merge and align plugin id (#26)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#31](https://github.com/larksuite/openclaw-lark/issues/31) | Feature: Add ACP Thread-Binding，just like Discord threads/ch | 3 | 1 |
> | [#25](https://github.com/larksuite/openclaw-lark/issues/25) | 插件 ID 不匹配 | 3 | 5 |
> | [#40](https://github.com/larksuite/openclaw-lark/issues/40) | 启动最新插件时日志一堆plugin id mismatch的警告 | 2 | 0 |
> | [#5](https://github.com/larksuite/openclaw-lark/issues/5) | 非Owner无法使用机器人操作文档 | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaw Lark/Feishu Plugin
> 
> [](https://opensource.org/licenses/MIT)
> [](https://www.npmjs.com/package/@larksuite/openclaw-lark)
> [](https://nodejs.org/)
> 
> [中文版](./README.zh.md) | English
> 
> This is the official Lark/Feishu plugin for OpenClaw, developed and maintained by the Lark/Feishu Open Platform team. It seamlessly connects your OpenClaw Agent to your Lark/Feishu workspace, enabling it to directly read from and write to messages, docs, bases, calendars, tasks, and more.
> 
> ## Features
> 
> This plugin provides comprehensive Lark/Feishu integration for OpenClaw, including:
> 
> | Category | Capabilities |
> |------|------|
> | 💬 Messenger | Read messages (group/DM history, thread replies), send messages, reply to messages, search messages, download images/files |
> | 📄 Docs | Create, update, and read documents |
> | 📊 Base | Create/manage bases, tables, fields, records (CRUD, batch operations, advanced filtering), views |
> | 📈 Sheets | Create, edit, and view spreadsheets |
> | 📅 Calendar | Manage calendars and events (create/query/update/delete/search), manage attendees, check free/busy status |
> | ✅ Tasks | Manage tasks (create/query/update/complete), manage task lists, subtasks, and comments |
> 
> Additionally, the plugin supports:
> - **📱 Interactive Cards**: Real-time status updates (Thinking/Generating/Complete), plus confirmation buttons for sensitive operations
> - **🌊 Streaming Responses**: Live streaming text directly within message cards
> - **🔒 Permission Policies**: Flexible access control policies for DMs and group chats
> - **⚙️ Advanced Group Configuration**: Per-group settings including allowlists, skill bindings, and custom system prompts
> 
> ## Security & Risk Warnings (Read Before Use)
> 
> **Core risk:** This plugin connects to your work data via Lark/Feishu APIs—messages, docs, calendars, contacts. Anything the AI can read could theoretically be leaked. While we have implemented security protections, AI systems are not yet mature or stable enough to guarantee absolute safety.
> 
> **Strong recommendations:**
> - Use a personal account for evaluation and testing at this stage.
> - Use the related Lark/Feishu apps personally, and avoid deploying to large numbers of users.
> - Avoid using it in group chats to reduce the risk of data exposure.
> - Using this bot for multiple users and/or with a company Feishu account may introduce data security and privacy risks. Make sure you comply with your organization’s internal data security and privacy requirements to avoid data leakage, privilege escalation, privacy violations, or related consequences.
> 
> **Other operational risks**
> - AI is not perfect and may hallucinate: It may sometimes misunderstand your intent or generate content that appears reasonable but is inaccurate.
> - Some operations are irreversible: For example, messages sent by the AI on your behalf are sent in your name and cannot be undone once sent.
> - **Mitigation advice:** For important operations involving sending, modifying, or writing data, always **preview first, then confirm**. Never allow the AI to operate in a fully autonomous mode without human oversight.
> 
> **Disclaimer:**
> 
> This software is licensed under the MIT License. When running, it calls Lark/Feishu Open Platform APIs. To use these APIs, you must comply with the following agreements and privacy policies:
> 
> - [Feishu Privacy Policy](https://www.feishu.cn/en/privacy?from=openclaw_plugin_readme)
> - [Feishu User Terms of Service](https://www.feishu.cn/en/terms?from=openclaw_plugin_readme)
> - [Feishu Store App Service Provider Security Management Specifications](https://open.larkoffice.com/document/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/management-practice/app-service-provider-security-management-specifications)
> 
> - [Lark Privacy Policy](https://www.larksuite.com/user-terms-of-service)
> - [Lark User Terms of Service](https://www.larksuite.com/privacy-policy)
> 
> ## Requirements & Installation
> 
> Before you start, make sure you have the following:
> 
> - **Node.js**: `v22` or higher.
> - **OpenClaw**: OpenClaw is installed and works properly. For details, visit the [OpenClaw official website](https://openclaw.ai).
> 
> > **Note**: OpenClaw version must be **2026.2.26** or higher. Check with `openclaw -v`. If below this version, you may encounter issues. Upgrade with:
> > ```bash
> > npm install -g openclaw
> > ```
> 
> ## Usage Guide
> 
> [How to Use the Official Lark/Feishu Plugin for OpenClaw](https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh)
> 
> ## Contributing
> 
> Community contributions are welcome! If you find a bug or have feature suggestions, please submit an [Issue](https://github.com/larksuite/openclaw-larksuite/issues) or a [Pull Request](https://github.com/larksuite/openclaw-larksuite/pulls).
> 
> For major changes, we recommend discussing with us first via an Issue.
> 
> ## License
> 
> This project is licensed under the **MIT License**. See [LICENSE](./LICENSE.md) for details.

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[微服務]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/larksuite/openclaw-lark)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "larksuite--openclaw-lark"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "larksuite--openclaw-lark"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "larksuite--openclaw-lark" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "larksuite--openclaw-lark"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","微服務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "larksuite--openclaw-lark" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/larksuite--openclaw-lark");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "larksuite--openclaw-lark" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "larksuite" AND file.name != "larksuite--openclaw-lark"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/larksuite--openclaw-lark");
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
> const me = dv.page("Repos/larksuite--openclaw-lark");
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
> const me = dv.page("Repos/larksuite--openclaw-lark");
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
> const me = dv.page("Repos/larksuite--openclaw-lark");
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
> const me = dv.page("Repos/larksuite--openclaw-lark");
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

> **2026-03-13** — 首次收錄
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

- [[2026-03-16|2026-03-16]] — 再次上榜，1.0k stars
- [[2026-03-13|2026-03-13]] — 首次收錄，746 stars
