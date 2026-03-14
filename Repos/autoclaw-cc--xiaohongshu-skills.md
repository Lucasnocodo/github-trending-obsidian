---
repo: autoclaw-cc/xiaohongshu-skills
url: https://github.com/autoclaw-cc/xiaohongshu-skills
owner: autoclaw-cc
owner_type: Organization
language: Python
license: MIT
description: "xiaohongshu-skills"
homepage: ""
stars: 527
stars_per_day: 53
forks: 71
open_issues: 18
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
use_case: "自動化小紅書操作的技能集，基於 CDP 瀏覽器自動化技術。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 269
readme_length: 6434
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:432,2026-03-11:433,2026-03-13:497,2026-03-14:527"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "xiaohongshu-skills"
  - "autoclaw-cc/xiaohongshu-skills"
  - "自動化小紅書操作的技能集，基於 CDP 瀏覽器自動化技術。"
---

# xiaohongshu-skills

**527** stars · **53** stars/天 · 建立 10 天前 · Python · MIT

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
> 自動化小紅書操作的技能集，基於 CDP 瀏覽器自動化技術。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (53 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在小紅書上進行自動化操作的開發者和數據分析師。
> **一句話重點** 這個專案最厲害的不是功能，而是它證明了用自然語言就能實現複雜的自動化操作。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到自動化小紅書操作的能力，值得嘗試。

> [!abstract] 核心創新
> 支持連貫操作的自動化技能集，能夠用自然語言指令執行複雜任務。

## 專案簡介

xiaohongshu-skills 是一個基於 Python 的自動化工具，專為小紅書平台設計。用戶可以透過自然語言指令與 AI Agent 互動，執行如內容發布、社交互動及內容探索等多種操作。這個工具的核心賣點在於其支持連貫操作，能夠自動串聯多個技能來完成複雜任務，例如用戶可以發出「搜索刺客信條最火的圖文帖子，收藏它，然後告訴我講了什麼」的指令，Agent 會自動執行所有步驟。技術上，該專案使用了 Chrome DevTools Protocol (CDP) 來控制瀏覽器，並內建反檢測機制以模擬人類行為，這使得自動化操作更為隱蔽。與其他工具相比，如 OpenClaw，xiaohongshu-skills 提供了更為專注於小紅書的功能，並且能夠處理更複雜的用戶需求。

這個專案的依賴相對輕量，主要依賴 requests 和 websockets，適合快速部署和使用。使用者在實際操作中可能會遇到 Windows 環境下的兼容性問題，這在熱門 Issues 中有反映。該專案目前處於初始階段，功能尚在持續增強中，未來可能會加入更多的社交互動功能和數據分析能力。對於需要在小紅書上進行自動化操作的開發者來說，這是一個值得關注的工具，但在生產環境中使用時需謹慎考量其穩定性。

**技術棧**：`Python 3.11` · `requests >=2.28.0` · `websockets >=12.0`

## 重點功能

- 多帳號管理 — 支持用戶在不同帳號之間快速切換，方便管理多個小紅書賬號。
- 內容發布 — 支持圖文、視頻和長文的發布，並提供分步預覽功能，確保內容質量。
- 社交互動 — 提供評論、點讚和收藏功能，能夠自動化社交互動過程。
- 內容探索 — 支持關鍵字搜索和筆記詳情查看，幫助用戶快速找到所需內容。
- 反檢測保護 — 內建反檢測機制，模擬人類行為，降低被平台檢測的風險。

## 快速開始

1. 下載 ZIP 安裝
```bash
cd /skills/ && git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
```
2. 安裝 Python 依賴
```bash
cd xiaohongshu-skills && uv sync
```
3. 啟動 Chrome 瀏覽器
```bash
python scripts/chrome_launcher.py
```

## 程式碼範例

```python
[
  "# 启动 Chrome",
  "python scripts/chrome_launcher.py",
  "# 检查登录状态（已登录时返回用户昵称和小红书号）",
  "python scripts/cli.py check-login",
  "# 搜索笔记",
  "python scripts/cli.py search-feeds --keyword '关键词'",
  "# 发布内容",
  "python scripts/cli.py fill-publish --title-file title.txt --content-file content.txt --images '/abs/path/pic1.jpg' '/abs/path/pic2.jpg'"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 527 stars（53/天），forks 71（13.5%），顯示出相對活躍的社群參與。這個專案由 Angiin 和其他貢獻者共同開發，解決了小紅書自動化操作的需求，之前的解決方案往往缺乏針對性和靈活性。近期的更新和功能優化也吸引了不少使用者的關注。技術上，CDP 的使用使得這個工具能夠更好地模擬人類行為，這在自動化領域是個重要的突破。forks/stars 比率為 13.5%，顯示出有相當比例的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在小紅書上進行自動化操作的開發者和數據分析師。

> [!example] 使用場景
> - 社交媒體經營者用它來自動發布小紅書內容，因為可以節省大量手動操作時間，並且能夠確保內容按時發布。
> - 數據分析師用它來收集小紅書上的競品數據，因為可以自動化提取和分析大量用戶生成內容，提升市場洞察能力。
> - 開發者用它來測試小紅書的 API 和功能，因為其 CLI 工具能夠快速集成到現有的測試流程中。

## 架構分析

該專案採用雙層設計，將用戶意圖通過 AI Agent 路由到具體技能，並由 CDP 引擎控制 Chrome 瀏覽器執行操作。這樣的設計使得技能的擴展性和可維護性大幅提升，因為所有技能都集中在 skills 目錄下，易於管理和更新。數據提取使用了小紅書的前端框架，確保了操作的準確性。反檢測機制的實現則是通過隨機延遲和真實事件模擬來降低被檢測的風險，這在自動化領域是個重要考量。整體架構的設計使得未來的擴展和功能增強變得更加靈活，能夠快速響應用戶需求。

## 技術深入分析

xiaohongshu-skills 的核心技術機制是基於 Chrome DevTools Protocol (CDP)，這使得它能夠直接控制瀏覽器執行自動化任務。該專案的資料流設計清晰，通過 SKILL.md 文件定義的技能來路由用戶的意圖，並將其轉換為具體的 CLI 命令。這樣的設計使得用戶可以用自然語言進行操作，提升了使用的便利性。效能上，該工具能夠處理大量的用戶請求，但在高併發情況下可能會面臨性能瓶頸，尤其是在網絡延遲較高的環境中。

選擇 Python 作為開發語言的好處在於其生態系統豐富，能夠快速集成各種庫，但也可能帶來一定的性能損失。依賴樹相對簡單，主要依賴 requests 和 websockets，這使得整體安裝和維護成本較低。技術風險方面，未來隨著小紅書平台的更新，可能會影響到工具的穩定性和功能可用性。整合方面，該工具能夠輕鬆與現有的 Python 環境集成，但在 CI/CD 流程中可能需要額外的配置來確保穩定運行。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意 Python 版本和依賴管理，這可能會對某些用戶造成困擾。整體上，文件清晰易懂，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種內容發布方式，靈活性高
> - 內建反檢測機制，降低被平台檢測的風險
> - 能夠自動化複雜操作，提升工作效率

> [!danger] 缺點
> - 目前功能仍在持續增強中，穩定性尚待觀察
> - 在 Windows 環境下可能存在兼容性問題
> - 需要一定的技術背景來進行安裝和配置

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本
> - 需要 Google Chrome 瀏覽器
> - 在 Windows 環境下可能存在兼容性問題
> - 目前功能仍在持續增強中，穩定性尚待觀察

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [autoclaw-cc/OpenClaw](https://github.com/autoclaw-cc/OpenClaw) | OpenClaw 提供了一個更廣泛的自動化框架，但缺乏針對小紅書的專門功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要針對社交媒體的數據抓取，但不支持小紅書的內容發布功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenClaw | OpenClaw 提供了一個更廣泛的自動化框架，支持多種平台，但缺乏針對小紅書的專門功能。 | 如果需要一個多平台的自動化解決方案，OpenClaw 會是更好的選擇。 | medium，因為需要重新適配特定平台的功能。 |
| Shadowbroker | Shadowbroker 主要針對社交媒體的數據抓取，但不支持小紅書的內容發布功能。 | 如果主要需求是數據抓取而非內容發布，Shadowbroker 會更合適。 | low，因為功能相似，且使用的技術棧相近。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaohongshu-skills** | **OpenClaw** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 提供了一個更廣泛的自動化框架，支持多種平台，但缺乏針對小紅書的專門功能。 | Shadowbroker 主要針對社交媒體的數據抓取，但不支持小紅書的內容發布功能。 |
> | 遷移成本 | - | medium，因為需要重新適配特定平台的功能。 | low，因為功能相似，且使用的技術棧相近。 |
> | 適用場景 | 主要場景 | 如果需要一個多平台的自動化解決方案，OpenClaw 會是更 | 如果主要需求是數據抓取而非內容發布，Shadowbroker |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下可能無法正常運行，特別是 Chrome 啟動問題
  - 解法：建議使用 WSL 或在 Linux 環境中運行
- [MEDIUM] 未提供詳細的虛擬環境配置說明，可能導致依賴安裝失敗
  - 解法：使用 .venv 環境執行 Python 腳本
- [MEDIUM] 在高併發情況下可能會出現性能瓶頸
  - 解法：考慮分散請求或增加延遲

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 功能簡單易用，適合小型團隊快速上手。 |
| 大型企業的社交媒體管理 | 不適合 | 目前功能尚不夠穩定，無法滿足高需求。 |
| 需要自動化小紅書內容發布的個人開發者 | 非常適合 | 提供了針對小紅書的專門功能，能夠提升工作效率。 |
| 數據分析團隊進行競品分析 | 適合 | 能夠自動化數據收集過程，提升分析效率。 |

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
> 該工具本身不需要高權限，但需注意在使用過程中可能會存取用戶的敏感資料，如登錄憑證。依賴的庫中未發現已知的安全漏洞，但仍需定期檢查依賴更新以降低風險。

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
| Forks | 71 |
| Open Issues | 18 |
| Issue 解決率 | 33% (9 closed) |
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

**社群活躍度**：社群活躍度中等，近期有持續更新和問題回應。
**連結**：[文件](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-08 ~ 2026-03-09）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #33 from autoclaw-cc/fix/stealth-anti-detection

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/28) | 可以加上任务记录日志，让模型不要重复去读一些读过的笔记 | 1 | 0 |
> | [#12](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/12) | 没有商品绑定功能 | 1 | 0 |
> | [#41](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/41) | Windows下的无法使用吗？ | 0 | 3 |
> | [#40](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/40) | 一个小小的建议：在文档里说明需要使用虚拟环境.venv执行skill中的python脚本 | 0 | 1 |

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

相關概念：[[自動化]] · [[CDP]] · [[社交媒體]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

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
> const concepts = ["自動化","CDP","社交媒體"];
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
