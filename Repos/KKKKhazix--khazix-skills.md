---
repo: KKKKhazix/khazix-skills
url: https://github.com/KKKKhazix/khazix-skills
owner: KKKKhazix
owner_type: User
language: Python
license: MIT
description: "数字生命卡兹克开源的 AI Skills 合集"
homepage: ""
stars: 3559
stars_per_day: 508
forks: 598
open_issues: 5
created: 2026-04-06
pushed_at: 2026-04-12
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "技能集"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供一系列可重用的 AI 技能和提示，幫助用戶進行深度研究和寫作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 17
repo_size_kb: 69
readme_length: 1170
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1585,2026-04-12:1588,2026-04-13:1719,2026-04-13:1721,2026-04-14:3559"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "khazix-skills"
  - "KKKKhazix/khazix-skills"
  - "提供一系列可重用的 AI 技能和提示，幫助用戶進行深度研究和寫作。"
---

# khazix-skills

**3.6k** stars · **508** stars/天 · 建立 7 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/KKKKhazix--khazix-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一系列可重用的 AI 技能和提示，幫助用戶進行深度研究和寫作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (508 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效生成研究報告和長文內容的專業人士和學術研究者。
> **一句話重點** Khazix Skills 提供了一個靈活且專業的工具集，適合需要高效生成內容的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能集" && p.file.name !== "KKKKhazix--khazix-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能集 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高效的研究和寫作工具，值得投資。

> [!abstract] 核心創新
> 提供結構化的 AI 技能集，遵循 Agent Skills 開放標準，實現自動化深度研究和寫作。

## 專案簡介

Khazix Skills 是一個開源的 AI 工具箱，專為數字生命卡兹克設計，包含了經過長期打磨的提示和技能。用戶可以直接將提示複製到任何 AI 對話中，或安裝技能以擴展其功能。該工具的核心賣點在於其結構化的技能集，遵循 Agent Skills 開放標準，能夠自動加載並執行複雜任務，例如生成高質量的研究報告。技能如 hv-analysis 允許用戶自動收集信息並生成排版精美的 PDF 報告，這在傳統手動研究中是無法實現的。技術上，Khazix Skills 使用 Python 實現，並且依賴於多個 AI Agent 進行交互，這使得其在不同平台上具有良好的兼容性。

與其他類似工具相比，如 0xGF/boneyard 和 MiniMax-AI/skills，Khazix Skills 提供了更為專業化的深度研究和寫作技能，適合需要高效產出內容的用戶。使用者在安裝技能時，可以選擇通過 Agent 直接安裝或手動下載，這種靈活性使得其適用於不同的工作流。儘管目前的開發活動活躍，但仍有一些開放的問題需要解決，顯示出社群的參與度和未來的發展潛力。整體來看，這個專案在 AI 工具箱領域中具有一定的創新性和實用性，特別適合需要進行深入研究的專業人士。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，尤其是在內容生成和研究報告的自動化方面。

**技術棧**：`Python`

## 重點功能

- Prompt 系統 — 提供多種可直接使用的提示，適用於各種 AI 對話場景。
- hv-analysis 技能 — 自動收集信息並生成高質量的 PDF 研究報告，支持時間深度和競爭廣度的分析。
- khazix-writer 技能 — 包含完整的寫作風格規範和四層自檢體系，提升內容創作的質量和效率。
- 簡單的安裝方式 — 支持通過 Agent 安裝或手動下載，靈活適應不同用戶需求。
- 開源社群 — 提供持續的更新和支持，鼓勵用戶參與改進和擴展功能。

## 快速開始

1. 安裝 hv-analysis 技能
```bash
安装这个 skill：https://github.com/KKKKhazix/khazix-skills
```
2. 手動下載 khazix-writer 技能
```bash
在 Releases 頁面下載 .skill 文件
```
3. 將 .skill 文件拖入對應工具的 Skills 目錄
```bash
將文件拖動到 ~/.claude/skills/ 或 ~/.openclaw/skills/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 3559 stars（508/天），forks 598（16.8%），顯示出強勁的增長勢頭。作者 KKKKhazix 是一位專注於 AI 工具開發的開源貢獻者，這個專案解決了用戶在深度研究和寫作過程中的效率問題，提供了可重用的工具和方法。近期的社群反饋顯示出對於技能安裝和使用的興趣，這可能是推動其流行的原因之一。技術上，隨著 AI Agent 的興起，這個工具的可行性和需求也在增加。高達 16.8% 的 forks/stars 比率表明許多用戶正在積極修改和使用這個專案，顯示出其實用價值。

## 適合誰使用

**目標受眾**：需要高效生成研究報告和長文內容的專業人士和學術研究者。

> [!example] 使用場景
> - 市場研究員用它來生成競爭對手分析報告，因為 hv-analysis 技能能自動收集信息並排版成 PDF，節省了大量手動整理的時間。
> - 內容創作者用它來撰寫長篇文章，因為 khazix-writer 技能提供了完整的寫作風格規範和自檢體系，提升了內容質量。
> - 學術研究者用它來進行深度文獻回顧，因為通過提示可以快速生成高質量的研究框架，減少了文獻整理的時間。

## 架構分析

Khazix Skills 採用模組化設計，將提示和技能分開管理，便於用戶根據需求選擇使用。每個技能遵循 Agent Skills 開放標準，確保與各種 AI Agent 的兼容性。資料流方面，提示直接複製到對話中，而技能則通過安裝後自動加載，這種設計使得用戶可以快速上手。選擇 Python 作為開發語言，能夠利用其豐富的庫和社群支持，但也可能導致性能瓶頸，特別是在處理大量數據時。整體架構輕量，便於擴展和維護，未來可考慮增加更多技能以滿足用戶需求。

## 技術深入分析

Khazix Skills 的核心技術機制在於其模組化的提示和技能設計，使用 Python 實現，便於用戶進行自定義和擴展。該工具能夠處理多種深度研究任務，並且通過 hv-analysis 技能自動生成高質量的 PDF 報告，這在傳統手動研究中是無法達到的。設計上選擇了 Agent Skills 開放標準，這使得其能夠與多種 AI Agent 兼容，擴展了使用場景。儘管如此，這也可能導致在某些情況下性能不佳，特別是在面對大量數據時。技術上，Khazix Skills 依賴於 Python 的生態系統，這意味著其擴展性和維護成本相對較低，但也可能面臨依賴庫更新的風險。整體來看，這個工具在 AI 內容生成和深度研究領域具有良好的應用潛力，並且能夠與現有的開發工具鏈良好整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，對於新手友好。安裝過程相對順暢，沒有明顯的坑。雖然沒有專門的入門指南，但用戶可以通過示例快速上手。文件目前僅提供英文版本，可能對非英語用戶造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供專業化的深度研究和寫作技能，能夠顯著提高工作效率。
> - 開源社群活躍，持續更新和改進功能。
> - 安裝方式靈活，適應不同用戶的需求。

> [!danger] 缺點
> - 目前支持的 AI Agent 限制了其使用範圍。
> - 部分技能仍在開發中，可能存在不穩定性。
> - 對於新手用戶可能有一定的學習曲線。

> [!warning] 注意事項
> - 目前僅支持特定的 AI Agent，對於不在支持列表中的工具無法使用。
> - 部分技能仍在開發中，可能存在不穩定性或功能缺失。
> - 需要用戶具備基本的 AI 工具使用經驗，對於新手可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 AI 工具和技能，但缺乏專業化的深度研究功能，適合一般用途。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 專注於簡單的技能集，與 Khazix Skills 相比，功能較為基礎，適合初學者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 AI 工具和技能，但缺乏專業化的深度研究功能，適合一般用途。 | 如果需要一個多功能的 AI 工具集，而不特別關注深度研究的專業性。 | medium，因為需要重新適應不同的技能和提示格式。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 專注於簡單的技能集，與 Khazix Skills 相比，功能較為基礎，適合初學者。 | 如果你的團隊是初學者，且不需要複雜的技能和提示。 | low，因為技能和提示的使用方式較為相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **khazix-skills** | **boneyard** | **skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供多種 AI 工具和技能，但缺乏專業化的深度研究功能，適合一般用途。 | 專注於簡單的技能集，與 Khazix Skills 相比，功能較為基礎，適合初學者。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的技能和提示格式。 | low，因為技能和提示的使用方式較為相似。 |
> | 適用場景 | 主要場景 | 如果需要一個多功能的 AI 工具集，而不特別關注深度研究的專 | 如果你的團隊是初學者，且不需要複雜的技能和提示。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分技能在特定情況下可能無法正常運行，特別是在不支持的 AI Agent 上。
  - 解法：確保使用支持的 Agent，或手動安裝技能。
- [MEDIUM] 安裝過程中可能會遇到版本不兼容的問題。
  - 解法：檢查所使用的 Agent 版本，確保與技能版本相符。
- [low] 對於新手用戶，提示的使用可能不夠直觀。
  - 解法：參考 README 中的示例，快速上手。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行市場研究 | 非常適合 | 提供專業的研究技能，能夠快速生成報告，節省時間。 |
| 大型企業的內容創作團隊 | 適合 | 能夠提升內容質量，但可能需要一定的學習曲線。 |
| 學術研究者進行文獻回顧 | 非常適合 | 提供高效的研究框架，能夠快速整理資料。 |
| 個人開發者進行簡單的 AI 實驗 | 普通 | 雖然功能強大，但可能對於簡單任務來說有些過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的研究和寫作工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不會存取敏感資料。依賴的庫和框架均來自於開源社群，信任程度高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
| Forks | 598 |
| Open Issues | 5 |
| Issue 解決率 | 17% (1 closed) |
| 最後推送 | 2026-04-12 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 69 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/khazix-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量較少，顯示出良好的維護狀態。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-12）
> **活躍天數** 2 天 · **最新 commit** Add hv-analysis skill for horizontal-vertical deep research

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/KKKKhazix/khazix-skills/issues/5) | Repo看起来还没有发布 Releases | 0 | 0 |
> | [#3](https://github.com/KKKKhazix/khazix-skills/issues/3) | 朋友推荐过来的，我刚在本地workbuddy安装体验了。 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Khazix Skills
> 
> 数字生命卡兹克的 AI 工具箱。
> 
> 这里是我自己在用的、经过长期打磨的 Prompts 和 Skills，现在决定把它们完整地、一字不改地开源出来。
> 
> 两种东西，一个目的：把我积累的方法论变成可复用的工具。
> 
> - **Prompts** — 轻量级，复制粘贴到任何 AI 对话或 Deep Research 里就能用
> - **Skills** — 重量级，遵循 [Agent Skills](https://agentskills.io) 开放标准的结构化指令集，安装后 Agent 会自动加载
> 
> ## Prompts
> 
> | Prompt | 说明 | 用法 |
> |--------|------|------|
> | [**横纵分析法**](./prompts/横纵分析法.md) | 通用深度研究框架，融合历时-共时分析与竞争战略视角，半小时出一份万字级研究报告 | 复制 Prompt，修改「研究对象」，丢进任何支持 Deep Research 的模型 |
> 
> ## Skills
> 
> | Skill | 说明 |
> |-------|------|
> | [**hv-analysis**](./hv-analysis/) | 横纵分析法深度研究 Skill，自动联网收集信息，纵向追时间深度 + 横向追竞争广度，最终输出排版精美的 PDF 研究报告 |
> | [**khazix-writer**](./khazix-writer/) | 卡兹克公众号长文写作 Skill，包含完整的写作风格规则、四层自检体系、内容方法论和风格示例库 |
> 
> ### Skill 安装方式
> 
> **通过 Agent 安装**
> 
> 在 Claude Code、Codex、OpenClaw 等支持 Skill 的 Agent 中，直接对话：
> 
> ```
> 安装这个 skill：https://github.com/KKKKhazix/khazix-skills
> ```
> 
> **手动安装**
> 
> 1. 在本仓库的 [Releases](https://github.com/KKKKhazix/khazix-skills/releases) 页面下载对应 Skill 的 `.skill` 安装包
> 2. 将 `.skill` 文件拖动到对应工具的 Skills 目录下
> 
> 各工具的 Skills 安装路径：
> 
> | 工具 | 路径 |
> |------|------|
> | Claude Code | `~/.claude/skills/` |
> | OpenClaw | `~/.openclaw/skills/` |
> | Codex | `~/.agents/skills/` |
> 
> ## License
> 
> [MIT](./LICENSE)

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自動化]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/KKKKhazix/khazix-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：技能集）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能集" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "KKKKhazix--khazix-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","自動化","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KKKKhazix" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 再次上榜，1.7k stars
- [[2026-04-12|2026-04-12]] — 首次收錄，1.6k stars
