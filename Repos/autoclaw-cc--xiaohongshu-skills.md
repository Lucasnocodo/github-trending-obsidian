---
repo: autoclaw-cc/xiaohongshu-skills
url: https://github.com/autoclaw-cc/xiaohongshu-skills
owner: autoclaw-cc
owner_type: Organization
language: Python
license: MIT
description: "xiaohongshu-skills"
homepage: ""
stars: 719
stars_per_day: 38
forks: 98
open_issues: 32
created: 2026-03-03
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.0-c26fa98"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "自動化操作小紅書的技能集，基於 Python CDP 瀏覽器自動化引擎。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 22
repo_size_kb: 269
readme_length: 6434
bus_factor: 1
last_release_days: 14
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:432,2026-03-11:433,2026-03-13:497,2026-03-14:527,2026-03-15:549,2026-03-16:567,2026-03-17:597,2026-03-18:628,2026-03-19:642,2026-03-20:667,2026-03-21:686,2026-03-22:701,2026-03-23:719"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "xiaohongshu-skills"
  - "autoclaw-cc/xiaohongshu-skills"
  - "自動化操作小紅書的技能集，基於 Python CDP 瀏覽器自動化引擎。"
---

# xiaohongshu-skills

**719** stars · **38** stars/天 · 建立 19 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.0-c26fa98` `easy-install`

> [!summary] 一句話摘要
> 自動化操作小紅書的技能集，基於 Python CDP 瀏覽器自動化引擎。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (38 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 13 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要自動化小紅書操作的開發者或社交媒體經營者。
> **一句話重點** 這個專案的創新在於將自然語言處理與瀏覽器自動化結合，讓小紅書的操作變得更簡單。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "autoclaw-cc--xiaohongshu-skills" && p.status !== "archived")
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
> **結論** 花 5 小時學、3 小時整合，得到自動化小紅書操作的能力，值得嘗試。

> [!abstract] 核心創新
> 支持自然語言指令的複合操作，讓用戶能夠更靈活地進行小紅書的自動化管理。

## 專案簡介

xiaohongshu-skills 是一個專為小紅書設計的自動化技能集，利用 Python 的 CDP（Chrome DevTools Protocol）來控制瀏覽器。使用者可以透過自然語言指令來執行多種操作，如內容發布、社交互動和內容探索。這個工具的核心賣點在於其支持複合操作，使用者可以一次性下達多個指令，Agent 會自動處理整個流程，例如：搜索、收藏和總結內容。技術上，該專案依賴於 requests 和 websockets 來進行網絡請求和實時通訊，並且設計了反檢測機制以避免被小紅書識別。

與其他類似工具相比，如 OpenClaw，xiaohongshu-skills 提供了更為細緻的操作能力和自然語言處理的支持，讓使用者能夠更靈活地進行內容管理。該專案目前仍在活躍開發中，開發者需要 Python 3.11 以上版本和 Google Chrome 瀏覽器。使用者可能會遇到的問題包括商品綁定功能缺失和執行問題，這些都是社群中熱門的討論話題。整體而言，這是一個適合需要自動化小紅書操作的開發者的工具，但在穩定性和功能上仍有待進一步完善。

**技術棧**：`Python 3.11` · `requests 2.28.0` · `websockets 12.0`

## 重點功能

- xhs-auth — 支持多帳號登錄和檢查登錄狀態，方便用戶管理多個小紅書帳號。
- xhs-publish — 支持圖文、視頻和長文的發布，並提供預覽和定時發布功能。
- xhs-explore — 提供關鍵字搜索和用戶頁面瀏覽功能，幫助用戶快速找到感興趣的內容。
- xhs-interact — 支持對筆記的評論、點讚和收藏，增強社交互動能力。
- 連貫操作 — 允許用戶用自然語言下達複合指令，Agent 自動串聯多個技能完成任務。

## 快速開始

1. 下載 ZIP 安裝
```bash
在 GitHub 頁面點擊 Code → Download ZIP
```
2. 解壓到 skills 目錄下
```bash
解壓到 /skills/xiaohongshu-skills/
```
3. 安裝 Python 依賴
```bash
cd xiaohongshu-skills && uv sync
```

## 程式碼範例

```python
[
  "# 启动 Chrome",
  "python scripts/chrome_launcher.py",
  "# 预期输出：启动 Chrome 浏览器"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天內累積 719 stars（38/天），forks 98（13.6%），顯示出一定的社群關注度。作者 Angiin 和其他貢獻者在自動化和 AI Agent 領域有一定經驗，這個工具解決了小紅書操作繁瑣的問題，尤其是在內容發布和社交互動方面。社群的反饋和需求驅動了這個專案的發展，特別是對於複合操作的需求。技術上，CDP 的使用讓這個工具能夠直接控制瀏覽器，這在過去的工具中並不常見。forks/stars 比率為 13.6%，顯示出有不少開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化小紅書操作的開發者或社交媒體經營者。

> [!example] 使用場景
> - 社交媒體經營者用它來自動發布小紅書內容，因為可以節省手動操作時間，提升發布效率。
> - 數據分析師用它來批量收集小紅書上的用戶互動數據，因為可以快速獲取大量資料進行分析。
> - 內容創作者用它來定時發布圖文和視頻，因為可以確保內容在最佳時間點曝光，增加互動率。

## 架構分析

該專案採用雙層設計，分為 Skills 層和引擎層。Skills 層定義了 AI Agent 的能力，通過 SKILL.md 來路由用戶的意圖；引擎層則是基於 Python 的 CDP 自動化引擎，直接控制 Chrome 瀏覽器。這樣的設計使得功能擴展變得簡單，因為只需在 Skills 層添加新的技能即可。

資料流從用戶的自然語言指令開始，經過意圖路由，最終由引擎層執行具體的瀏覽器操作。這種架構的代價在於需要一定的學習曲線來理解如何定義和使用技能，但這也使得整體系統具備了高度的靈活性和可擴展性。擴展性瓶頸主要在於 CDP 的性能限制，當操作過於頻繁時可能會導致性能下降。

## 技術深入分析

xiaohongshu-skills 的核心技術在於使用 Chrome DevTools Protocol 來控制瀏覽器，這使得它能夠直接與小紅書的前端進行交互。該專案的資料提取方式是通過 `window.__INITIAL_STATE__` 來獲取頁面數據，這樣的設計與小紅書的前端框架高度對齊，能夠有效地提取所需資訊。反檢測機制的實現則是通過 Stealth JS 注入和模擬真實用戶行為來避免被識別，這在自動化工具中是相對少見的。該專案能夠處理的資料量取決於 Chrome 瀏覽器的性能，冷啟動時間和記憶體佔用會隨著操作的頻繁程度而變化。選擇 Python 作為開發語言是因為其在自動化和網絡請求方面的強大生態系統，然而這也導致了對 Python 環境的依賴。技術風險主要在於 CDP 的穩定性，當小紅書的前端改版時，可能會導致工具的功能失效。整合方面，該專案與主流的 CI/CD 工具鏈相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且有實際的範例。安裝過程相對順暢，但需要確保 Python 和 Chrome 的版本符合要求。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 支持自然語言操作，使用者體驗友好
> - 功能模組化，易於擴展和維護
> - 提供反檢測機制，增強使用安全性

> [!danger] 缺點
> - 功能尚未完全穩定，可能會遇到 bug
> - 依賴於 Chrome 瀏覽器，無法在其他瀏覽器上運行
> - 需要一定的技術背景來配置和使用

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本
> - 需要 Google Chrome 瀏覽器
> - 目前不支持商品綁定功能
> - 功能仍在開發中，穩定性有待加強

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [autoclaw-cc/openclaw](https://github.com/autoclaw-cc/openclaw) | OpenClaw 提供了基本的自動化功能，但不支持複合操作，使用者需手動執行多個步驟。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | xiaohongshu-cli 主要提供 CLI 操作，而本專案則支持自然語言交互，使用上更為便捷。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenClaw | OpenClaw 提供了基本的自動化功能，但不支持複合操作，使用者需手動執行多個步驟。 | 如果需要一個簡單的自動化工具，且不需要複雜的操作流程。 | low，因為功能相似，轉換成本不高。 |
| xiaohongshu-cli | xiaohongshu-cli 主要提供 CLI 操作，而本專案則支持自然語言交互，使用上更為便捷。 | 如果你的團隊已經習慣使用 CLI 工具，且不需要自然語言處理功能。 | medium，因為需要調整使用習慣和操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaohongshu-skills** | **OpenClaw** | **xiaohongshu-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 提供了基本的自動化功能，但不支持複合操作，使用者需手動執行多個步驟。 | xiaohongshu-cli 主要提供 CLI 操作，而本專案則支持自然語言交互，使用上更為便捷。 |
> | 遷移成本 | - | low，因為功能相似，轉換成本不高。 | medium，因為需要調整使用習慣和操作方式。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的自動化工具，且不需要複雜的操作流程。 | 如果你的團隊已經習慣使用 CLI 工具，且不需要自然語言處理 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 商品綁定功能缺失，無法直接關聯商品
  - 解法：手動處理商品綁定
- [MEDIUM] 執行過程中可能會遇到反檢測失敗的情況
  - 解法：檢查網絡環境或使用不同的登錄方式
- [MEDIUM] 多帳號管理時可能會出現登錄狀態不一致的問題
  - 解法：定期檢查和更新登錄狀態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 社交媒體經營者需要自動化內容發布 | 非常適合 | 支持多種內容格式的發布，並且可以定時發布 |
| 數據分析師需要批量收集用戶互動數據 | 適合 | 能夠快速獲取大量資料進行分析 |
| 小型團隊需要簡單的自動化工具 | 普通 | 功能尚未完全穩定，可能會遇到 bug |
| 大型企業需要穩定的自動化解決方案 | 不適合 | 目前仍在開發中，穩定性有待加強 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到自動化小紅書操作的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要操作為瀏覽器自動化，不存取敏感資料。依賴鏈的信任程度較高，但仍需注意外部 API 的變化對功能的影響。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

xiaohongshu-skills 最常與 OpenClaw 和其他支持 SKILL.md 的 AI Agent 平台搭配使用，通常在開發和部署階段進行整合。在使用中，開發者可以將該工具放入其 skills 目錄，並通過自然語言與 Agent 進行交互。與主流 CI/CD 工具（如 GitHub Actions）相容性良好，能夠輕鬆集成到現有的開發流程中。最常見的整合問題是需要確保 Chrome 瀏覽器的版本與工具相容，否則可能會導致功能失效。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 xiaohongshu-skills 出現之前，自動化小紅書的工具多數功能單一，缺乏靈活性。使用者通常需要手動執行多個步驟，這導致了效率低下。隨著 CDP 技術的成熟，這個工具的出現使得複雜的操作變得簡單可行。

未來，隨著 AI 和自動化技術的進步，這類工具將會越來越普及，並可能引入更多智能化的功能。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的自動化原理

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品中逐步使用。

**成功指標**：自動化操作時間減少 50%，提高內容發布效率。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他平台的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
| Forks | 98 |
| Open Issues | 32 |
| Issue 解決率 | 22% (9 closed) |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 269 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/autoclaw-cc/xiaohongshu-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Angiin](https://github.com/Angiin) | 32 |
> | [@xpzouying](https://github.com/xpzouying) | 10 |
> | [@cu1ch3n](https://github.com/cu1ch3n) | 1 |

**最新版本**：v0.1.0-c26fa98 (2026-03-09)

> [!info]- Release Notes
> ## What's Changed
> * perf: 浏览器反检测模块全面优化 - 动态平台适配与指纹一致性 by @xpzouying in https://github.com/autoclaw-cc/xiaohongshu-skills/pull/33
> 
> 
> **Full Changelog**: https://github.com/autoclaw-cc/xiaohongshu-skills/compare/v0.1.0-41c2e11...v0.1.0-c26fa98

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題
**連結**：[文件](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-08 ~ 2026-03-09）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #33 from autoclaw-cc/fix/stealth-anti-detection

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/12) | 没有商品绑定功能 | 2 | 0 |
> | [#28](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/28) | 可以加上任务记录日志，让模型不要重复去读一些读过的笔记 | 1 | 0 |
> | [#57](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/57) | openclaw执行问题 | 0 | 0 |
> | [#56](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/56) | nanobot 支持吗 | 0 | 1 |
> | [#55](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/55) | 成功使用该skill发布了2篇了； | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # xiaohongshu-skills
> 
> 小红书自动化 Skills，基于 Python CDP 浏览器自动化引擎。
> 
> 支持 [OpenClaw](https://github.com/anthropics/openclaw) 及所有兼容 `SKILL.md` 格式的 AI Agent 平台（如 Claude Code）。
> 
> ## 功能概览
> 
> | 技能 | 说明 | 核心能力 |
> |------|------|----------|
> | **xhs-auth** | 认证管理 | 登录检查、扫码登录、多账号切换 |
> | **xhs-publish** | 内容发布 | 图文 / 视频 / 长文发布、定时发布、分步预览 |
> | **xhs-explore** | 内容发现 | 关键词搜索、笔记详情、用户主页、首页推荐 |
> | **xhs-interact** | 社交互动 | 评论、回复、点赞、收藏 |
> | **xhs-content-ops** | 复合运营 | 竞品分析、热点追踪、批量互动、内容创作 |
> 
> 支持**连贯操作** — 你可以用自然语言下达复合指令，Agent 会自动串联多个技能完成任务。例如：
> 
> > "搜索刺客信条最火的图文帖子，收藏它，然后告诉我讲了什么"
> 
> Agent 会自动执行：搜索 → 筛选图文 → 按点赞排序 → 收藏 → 获取详情 → 总结内容。
> 
> ## 安装
> 
> ### 前置条件
> 
> - Python >= 3.11
> - [uv](https://docs.astral.sh/uv/) 包管理器
> - Google Chrome 浏览器
> 
> ### 方法一：下载 ZIP 安装（推荐）
> 
> 最简单稳妥的方式，适用于 OpenClaw 及所有支持 `SKILL.md` 的 Agent 平台。
> 
> 1. 在 GitHub 仓库页面点击 **Code → Download ZIP**，下载项目压缩包。
> 2. 解压到你的 Agent 的 skills 目录下：
> 
> ```
> # OpenClaw 示例
> /skills/xiaohongshu-skills/
> 
> # Claude Code 示例
> /.claude/skills/xiaohongshu-skills/
> ```
> 
> 3. 安装 Python 依赖：
> 
> ```bash
> cd xiaohongshu-skills
> uv sync
> ```
> 
> 安装完成后，Agent 会自动识别 `SKILL.md` 并加载小红书技能。
> 
> ### 方法二：Git Clone
> 
> ```bash
> # 进入 skills 目录
> cd /skills/
> 
> # 克隆项目
> git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
> cd xiaohongshu-skills
> 
> # 安装依赖
> uv sync
> ```
> 
> > 其他支持 SKILL.md 格式的 Agent 框架安装方式类似 — 将本项目放入其 skills 目录即可。
> 
> ## 使用方式
> 
> ### 作为 AI Agent 技能使用（推荐）
> 
> 安装到 skills 目录后，直接用自然语言与 Agent 对话即可。Agent 会根据你的意图自动路由到对应技能。
> 
> **认证登录：**
> > "登录小红书" / "检查登录状态"
> 
> **搜索浏览：**
> > "搜索关于露营的笔记" / "查看这条笔记的详情"
> 
> **发布内容：**
> > "帮我发一条图文笔记，标题是…，配图是…"
> 
> **社交互动：**
> > "给这条笔记点赞" / "收藏这条帖子" / "评论：写得太好了"
> 
> **复合操作：**
> > "搜索竞品账号最近的爆款笔记，分析他们的选题方向"
> 
> ### 作为 CLI 工具使用
> 
> 所有功能也可以通过命令行直接调用，输出 JSON 格式，便于脚本集成。
> 
> #### 1. 启动 Chrome
> 
> ```bash
> # 有窗口模式（首次登录必须）
> python scripts/chrome_launcher.py
> 
> # 无头模式
> python scripts/chrome_launcher.py --headless
> ```
> 
> #### 2. 登录
> 
> ```bash
> # 检查登录状态（已登录时返回用户昵称和小红书号）
> python scripts/cli.py check-login
> 
> # 扫码登录
> python scripts/cli.py login
> ```
> 
> #### 3. 搜索笔记
> 
> ```bash
> python scripts/cli.py search-feeds --keyword "关键词"
> 
> # 带筛选条件
> python scripts/cli.py search-feeds \
>   --keyword "关键词" \
>   --sort-by "最多点赞" \
>   --note-type "图文"
> ```
> 
> #### 4. 查看笔记详情
> 
> ```bash
> python scripts/cli.py get-feed-detail \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> ```
> 
> #### 5. 发布内容
> 
> ```bash
> # 图文发布（分步：填写 → 预览 → 确认发布）
> python scripts/cli.py fill-publish \
>   --title-file title.txt \
>   --content-file content.txt \
>   --images "/abs/path/pic1.jpg" "/abs/path/pic2.jpg"
> 
> # 用户在浏览器中预览确认后
> python scripts/cli.py click-publish
> 
> # 或保存为草稿
> python scripts/cli.py save-draft
> 
> # 视频发布
> python scripts/cli.py publish-video \
>   --title-file title.txt \
>   --content-file content.txt \
>   --video "/abs/path/video.mp4"
> 
> # 长文发布
> python scripts/cli.py long-article \
>   --title-file title.txt \
>   --content-file content.txt
> ```
> 
> #### 6. 社交互动
> 
> ```bash
> # 评论
> python scripts/cli.py post-comment \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN \
>   --content "评论内容"
> 
> # 点赞
> python scripts/cli.py like-feed \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> 
> # 收藏
> python scripts/cli.py favorite-feed \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> ```
> 
> ## CLI 命令参考
> 
> 全局选项：
> - `--host HOST` — Chrome 调试主机（默认 127.0.0.1）
> - `--port PORT` — Chrome 调试端口（默认 9222）
> - `--account NAME` — 指定账号
> 
> | 子命令 | 说明 |
> |--------|------|
> | `check-login` | 检查登录状态，返回用户昵称和小红书号 |
> | `login` | 获取登录二维码，等待扫码，登录后返回用户信息 |
> | `delete-cookies` | 清除 cookies（退出/切换账号） |
> | `list-feeds` | 获取首页推荐 Feed |
> | `search-feeds` | 关键词搜索笔记（支持排序/类型/时间/范围/位置筛选） |
> | `get-feed-detail` | 获取笔记完整内容和评论 |
> | `user-profile` | 获取用户主页信息和帖子列表 |
> | `post-comment` | 对笔记发表评论 |
> | `reply-comment` | 回复指定评论 |
> | `like-feed` | 点赞 / 取消点赞 |
> | `favorite-feed` | 收藏 / 取消收藏 |
> | `publish` | 一步发布图文 |
> | `publish-video` | 一步发布视频 |
> | `fill-publish` | 填写图文表单（不发布，供预览） |
> | `fill-publish-video` | 填写视频表单（不发布，供预览） |
> | `click-publish` | 确认发布（点击发布按钮） |
> | `save-draft` | 保存为草稿 |
> | `long-article` | 长文模式：填写 + 一键排版 |
> | `select-template` | 选择长文排版模板 |
> | `next-step` | 长文下一步 + 填写描述 |
> 
> 退出码：`0` 成功 · `1` 未登录 · `2` 错误
> 
> ## 项目结构
> 
> ```
> xiaohongshu-skills/
> ├── scripts/                        # Python CDP 自动化引擎
> │   ├── xhs/                        # 核心自动化包
> │   │   ├── cdp.py                  # CDP WebSocket 客户端
> │   │   ├── stealth.py              # 反检测保护
> │   │   ├── selectors.py            # CSS 选择器（集中管理，改版时只改此文件）
> │   │   ├── login.py                # 登录 + 用户信息获取
> │   │   ├── feeds.py                # 首页 Feed
> │   │   ├── search.py               # 搜索 + 筛选
> │   │   ├── feed_detail.py          # 笔记详情 + 评论加载
> │   │   ├── user_profile.py         # 用户主页
> │   │   ├── comment.py              # 评论、回复
> │   │   ├── like_favorite.py        # 点赞、收藏
> │   │   ├── publish.py              # 图文发布
> │   │   ├── publish_video.py        # 视频发布
> │   │   ├── publish_long_article.py # 长文发布
> │   │   ├── types.py                # 数据类型
> │   │   ├── errors.py               # 异常体系
> │   │   ├── urls.py                 # URL 常量
> │   │   ├── cookies.py              # Cookie 持久化
> │   │   └── human.py                # 人类行为模拟
> │   ├── cli.py                      # 统一 CLI 入口（20 个子命令）
> │   ├── chrome_launcher.py          # Chrome 进程管理
> │   ├── account_manager.py          # 多账号管理
> │   ├── image_downloader.py         # 媒体下载（SHA256 缓存）
> │   ├── title_utils.py              # UTF-16 标题长度计算
> │   ├── run_lock.py                 # 单实例锁
> │   └── publish_pipeline.py         # 发布编排器
> ├── skills/                         # Claude Code Skills 定义
> │   ├── xhs-auth/SKILL.md
> │   ├── xhs-publish/SKILL.md
> │   ├── xhs-explore/SKILL.md
> │   ├── xhs-interact/SKILL.md
> │   └── xhs-content-ops/SKILL.md
> ├── SKILL.md                        # 技能统一入口（路由到子技能）
> ├── CLAUDE.md                       # 项目开发指南
> ├── pyproject.toml                  # uv 项目配置
> └── README.md
> ```
> 
> ## 技术架构
> 
> ### 双层设计
> 
> ```
> 用户 ──→ AI Agent ──→ SKILL.md（意图路由）──→ CLI ──→ CDP 引擎 ──→ Chrome ──→ 小红书
> ```
> 
> 1. **Skills 层**（`skills/` + `SKILL.md`）— AI Agent 的能力定义，描述何时触发、如何调用、如何处理失败。Agent 读取 SKILL.md 后自动获得小红书操作能力。
> 
> 2. **引擎层**（`scripts/`）— Python CDP 自动化引擎，通过 Chrome DevTools Protocol 直接控制浏览器。内置反检测保护、人类行为模拟、JSON 结构化输出。
> 
> ### 关键设计
> 
> - **数据提取**：通过 `window.__INITIAL_STATE__` 读取页面数据，与小红书前端框架对齐
> - **反检测**：Stealth JS 注入 + CDP 真实输入事件（`isTrusted=true`）+ 随机延迟
> - **选择器集中管理**：所有 CSS 选择器在 `xhs/selectors.py` 统一维护，小红书改版时只需改一个文件
> - **分步发布**：fill → 预览 → confirm 三步流程，确保用户始终掌控发布内容
> 
> ## 开发
> 
> ```bash
> uv sync                    # 安装依赖
> uv run ruff check .        # Lint 检查
> uv run ruff format .       # 代码格式化
> uv run pytest              # 运行测试
> ```
> 
> ## License
> 
> MIT
> 
> ## Trend
> 
> ## Star History
> 
> [](https://www.star-history.com/?repos=autoclaw-cc%2Fxiaohongshu-skills&type=date&legend=top-left)

## 延伸閱讀

相關概念：[[自動化]] · [[AI Agent]] · [[CDP]]

相關專案：[[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "autoclaw-cc--xiaohongshu-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI Agent","CDP"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "autoclaw-cc--xiaohongshu-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "autoclaw-cc--xiaohongshu-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "autoclaw-cc" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，401 stars
