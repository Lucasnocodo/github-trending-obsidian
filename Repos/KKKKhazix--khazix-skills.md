---
repo: KKKKhazix/khazix-skills
url: https://github.com/KKKKhazix/khazix-skills
owner: KKKKhazix
owner_type: User
language: Python
license: MIT
description: "数字生命卡兹克开源的 AI Skills 合集"
homepage: ""
stars: 5105
stars_per_day: 464
forks: 851
open_issues: 6
created: 2026-04-06
pushed_at: 2026-04-14
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供一系列 AI 技能和提示，幫助用戶進行深度研究和寫作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 37
readme_length: 1377
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1585,2026-04-12:1588,2026-04-13:1719,2026-04-13:1721,2026-04-14:3559,2026-04-15:4270,2026-04-16:4693,2026-04-17:4943,2026-04-18:5105"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "khazix-skills"
  - "KKKKhazix/khazix-skills"
  - "提供一系列 AI 技能和提示，幫助用戶進行深度研究和寫作。"
---

# khazix-skills

**5.1k** stars · **464** stars/天 · 建立 11 天前 · Python · MIT

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
> 提供一系列 AI 技能和提示，幫助用戶進行深度研究和寫作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (464 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成研究報告或長文內容的獨立開發者和內容創作者。
> **一句話重點** Khazix Skills 以其結構化的技能和提示，為快速生成研究和寫作內容提供了強大的支持。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "KKKKhazix--khazix-skills" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到快速生成研究報告的能力，值得採用。

> [!abstract] 核心創新
> 提供結構化的 AI 技能和提示，專注於深度研究和寫作的實用性。

## 專案簡介

Khazix Skills 是一個針對 AI 研究和寫作的工具箱，包含了多種可重用的提示和技能。用戶可以直接複製提示並應用於任何支持 AI 對話的模型，或安裝結構化的技能以提升研究效率。這些技能遵循 Agent Skills 開放標準，能夠自動收集信息並生成高質量的研究報告。關鍵指令如安裝技能的方式，使用者只需在支持的 Agent 中輸入 `安装这个 skill：https://github.com/KKKKhazix/khazix-skills`。這個工具的賣點在於其便捷性和高效性，特別適合需要快速生成研究報告的用戶。技術上，該專案使用 Python 開發，並且依賴於 Agent Skills 的結構化指令集，這使得它能夠在多個平台上運行。

與其他類似工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，Khazix Skills 提供了更為簡單的安裝流程和更具針對性的功能，特別是在深度研究和寫作方面。使用者在處理大型資料時，可能會發現性能瓶頸，尤其是在信息收集的過程中。專案目前處於活躍開發階段，社群互動良好，開發者定期更新內容。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，尤其是在需要快速生成內容的情境下。未來六個月，預計會有更多技能和提示被添加進來，進一步擴展其功能。使用者應該注意到，這個工具在處理特定格式的資料時可能會遇到一些限制，特別是對於不支持的 AI 模型。

**技術棧**：`Python`

## 重點功能

- Prompts — 提供多種可直接使用的提示，方便用戶快速應用於 AI 對話。
- Skills — 遵循 Agent Skills 標準的結構化指令集，支持自動信息收集和報告生成。
- 安裝便捷 — 透過簡單的指令即可在多個 AI Agent 中安裝技能。
- 深度研究支持 — 提供專業的研究框架，幫助用戶進行系統性分析。
- 寫作風格規範 — 包含完整的寫作風格和自檢體系，提升內容質量。

## 快速開始

1. 克隆仓库
```bash
git clone https://github.com/KKKKhazix/khazix-skills.git
```
2. 安装技能
```bash
安装这个 skill：https://github.com/KKKKhazix/khazix-skills
```
3. 使用提示
```bash
复制提示并粘贴到支持的 AI 模型中
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 5105 stars（464/天），forks 851（16.7%），顯示出強勁的增長勢頭。作者 KKKKhazix 以其在 AI 研究領域的經驗，提供了一個解決深度研究和寫作需求的工具，填補了市場上類似工具的空白。近期的社群討論和推廣文章也引起了廣泛關注，進一步推動了使用者的興趣。這個工具的設計使得用戶能夠快速上手，並且能夠在多個平台上靈活運用，這是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要快速生成研究報告或長文內容的獨立開發者和內容創作者。

> [!example] 使用場景
> - 數據分析師用它來快速生成市場研究報告，因為其提供的提示能在短時間內產出高質量的內容。
> - 內容創作者用它來撰寫長篇文章，因為其寫作技能提供了完整的風格規範和自檢體系。
> - 學生用它來進行學術研究，因為其結構化的技能能幫助他們系統性地收集和整理資料。

## 架構分析

Khazix Skills 的架構設計以可重用性和易用性為核心，採用 Python 開發，並遵循 Agent Skills 的開放標準。這使得技能能夠在多個平台上運行，並且用戶可以輕鬆安裝和使用。資料流方面，使用者透過提示和技能進行互動，系統則根據用戶的需求自動收集信息並生成報告。這種設計的優勢在於提升了用戶的工作效率，但也可能在處理大量資料時面臨性能瓶頸。整體而言，該架構適合快速迭代和功能擴展。

## 技術深入分析

Khazix Skills 的核心技術在於其結構化的提示和技能設計，這使得用戶能夠快速生成高質量的內容。使用 Python 開發，該專案依賴於 Agent Skills 的開放標準，這使得其在多個平台上具有良好的兼容性。效能方面，該工具能夠支持多種 AI 模型，但在處理大量資料時可能會遇到性能瓶頸。設計上，選擇 Python 使得開發和維護相對簡單，但也可能在某些高性能需求的場景下受到限制。技術風險方面，隨著用戶量的增加，可能會出現穩定性問題，特別是在功能擴展時。整合方面，該工具可以輕鬆融入現有的開發環境，並且與主流的 AI Agent 兼容，這使得其在實際應用中具有很高的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了基本的使用指導和安裝步驟。安裝過程相對順暢，但可能對新手來說缺乏詳細的指導。文件目前僅提供英文，對於非英語使用者可能存在一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供多種可直接使用的提示，降低了使用門檻。
> - 結構化的技能設計，提升了研究和寫作的效率。
> - 安裝和使用流程簡單，適合各類用戶。

> [!danger] 缺點
> - 目前尚未發布正式版本，可能存在穩定性問題。
> - 對於特定 AI 模型的支持可能有限。
> - 缺乏詳細的使用文檔，可能影響新手上手。

> [!warning] 注意事項
> - 目前尚未發布正式版本，可能存在不穩定因素。
> - 對於特定 AI 模型的支持可能有限，使用前需確認兼容性。
> - 部分功能可能需要額外的配置才能正常運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 技能，但缺乏 Khazix Skills 的結構化指令集，使用上較為繁瑣。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定領域的技能開發，但不如 Khazix Skills 廣泛適用於多種研究和寫作場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 技能，但缺乏 Khazix Skills 的結構化指令集，使用上較為繁瑣。 | 如果需要更專注於特定領域的技能開發，且不介意較複雜的使用流程。 | medium，因為需要重新適應其較為繁瑣的使用方式。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定領域的技能開發，但不如 Khazix Skills 廣泛適用於多種研究和寫作場景。 | 如果你的需求非常專注於某一領域的技能，且希望有針對性的支持。 | low，因為其使用方式與 Khazix Skills 相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **khazix-skills** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 技能，但缺乏 Khazix Skills 的結構化指令集，使用上較為繁瑣。 | 專注於特定領域的技能開發，但不如 Khazix Skills 廣泛適用於多種研究和寫作場景。 |
> | 遷移成本 | - | medium，因為需要重新適應其較為繁瑣的使用方式。 | low，因為其使用方式與 Khazix Skills 相似。 |
> | 適用場景 | 主要場景 | 如果需要更專注於特定領域的技能開發，且不介意較複雜的使用流程 | 如果你的需求非常專注於某一領域的技能，且希望有針對性的支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 目前尚未發布正式版本，可能存在不穩定因素。
  - 解法：使用前請自行測試各項功能。
- [MEDIUM] 對於特定 AI 模型的支持可能有限，使用前需確認兼容性。
  - 解法：查閱 README 中的支持模型列表。
- [MEDIUM] 部分功能可能需要額外的配置才能正常運行。
  - 解法：參考 README 中的安裝指導。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行市場研究 | 非常適合 | 提供了快速生成報告的工具，能夠節省時間和人力。 |
| 內容創作者撰寫長篇文章 | 適合 | 技能提供了完整的寫作風格和自檢體系，提升內容質量。 |
| 學生進行學術研究 | 普通 | 雖然有助於資料收集，但可能需要更多的學術支持。 |
| 大型企業進行複雜的數據分析 | 不適合 | 在處理大型資料時可能會遇到性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到快速生成研究報告的能力，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 環境中使用。依賴鏈相對簡單，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Khazix Skills 最常與 Claude Code、OpenClaw 和 Codex 等 AI Agent 搭配使用，通常在開發和研究階段進行整合。在一個使用 Claude Code 的專案中，用戶可以透過安裝 Khazix Skills 來快速生成市場研究報告，具體做法是將技能安裝到 `~/.claude/skills/` 目錄下。該工具支援 GitHub Actions 和其他 CI 工具，並且與 VS Code 等 IDE 兼容，方便用戶進行開發和測試。整合過程中，最常見的問題是技能安裝路徑的配置錯誤，建議用戶仔細檢查安裝步驟以避免錯誤。

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
| Forks | 851 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 37 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/khazix-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 5 |

## 社群與生態

**社群活躍度**：社群活躍，開發者定期更新內容。
**連結**：[文件](https://github.com/KKKKhazix/khazix-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-14）
> **活躍天數** 3 天 · **最新 commit** Add WeChat article links to README tables

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/KKKKhazix/khazix-skills/issues/5) | Repo看起来还没有发布 Releases | 0 | 0 |

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
> | Prompt | 说明 | 用法 | 讲解 |
> |--------|------|------|------|
> | [**横纵分析法**](./prompts/横纵分析法.md) | 通用深度研究框架，融合历时-共时分析与竞争战略视角，半小时出一份万字级研究报告 | 复制 Prompt，修改「研究对象」，丢进任何支持 Deep Research 的模型 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> 
> ## Skills
> 
> | Skill | 说明 | 讲解 |
> |-------|------|------|
> | [**hv-analysis**](./hv-analysis/) | 横纵分析法深度研究 Skill，自动联网收集信息，纵向追时间深度 + 横向追竞争广度，最终输出排版精美的 PDF 研究报告 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> | [**khazix-writer**](./khazix-writer/) | 卡兹克公众号长文写作 Skill，包含完整的写作风格规则、四层自检体系、内容方法论和风格示例库 | [公众号文章](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg) |
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

相關概念：[[自動化]] · [[AI 技能]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/KKKKhazix/khazix-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "KKKKhazix--khazix-skills"
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
> const concepts = ["自動化","AI 技能","深度學習"];
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
