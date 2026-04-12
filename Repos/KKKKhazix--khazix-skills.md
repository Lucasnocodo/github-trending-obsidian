---
repo: KKKKhazix/khazix-skills
url: https://github.com/KKKKhazix/khazix-skills
owner: KKKKhazix
owner_type: User
language: N/A
license: MIT
description: "数字生命卡兹克开源的 AI Skills 合集"
homepage: ""
stars: 1585
stars_per_day: 317
forks: 337
open_issues: 3
created: 2026-04-06
pushed_at: 2026-04-06
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "AI Skills"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供可组合、可移植的 AI Skills，扩展 AI Agent 的能力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: 25
repo_size_kb: 47
readme_length: 989
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1585"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "khazix-skills"
  - "KKKKhazix/khazix-skills"
  - "提供可组合、可移植的 AI Skills，扩展 AI Agent 的能力。"
---

# khazix-skills

**1.6k** stars · **317** stars/天 · 建立 5 天前 · N/A · MIT

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
> 提供可组合、可移植的 AI Skills，扩展 AI Agent 的能力。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (317 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望快速擴展 AI Agent 功能的開發者，特別是在內容創作領域。
> **一句話重點** Khazix Skills 通过模块化和可组合的设计理念，为 AI Agent 的能力扩展提供了新的思路。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI Skills" && p.file.name !== "KKKKhazix--khazix-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI Skills 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、2 小時整合，得到擴展 AI 功能的能力，值得嘗試。

> [!abstract] 核心創新
> Skills 遵循 Agent Skills 开放标准，具备可组合、可移植、按需加载的设计理念。

## 專案簡介

Khazix Skills 是一套遵循 Agent Skills 开放标准的结构化指令集，旨在通过模块化的方式扩展 AI Agent 的能力。用户可以通过简单的指令 `/skill-name` 来调用特定的 Skill，或在相关场景下自动加载。其设计理念在于可组合性和可移植性，允许多个 Skills 协同工作，提升了 AI 在特定任务中的执行效率。当前已开源的 Skills 包含 kaizike-writer，专注于公众号长文写作，提供了详细的写作风格规则和内容方法论。技术上，这些 Skills 以文件夹结构组织，包含指令、脚本和参考资源，便于用户在不同工具中复用。

与其他工具相比，如 0xGF/boneyard 和 MiniMax-AI/skills，Khazix Skills 强调了按需加载和跨工具使用的灵活性。适合需要快速部署和扩展 AI 能力的团队，尤其是在内容创作领域。虽然目前只有一个 Skill，但其设计理念和结构提供了良好的扩展潜力。社区活跃度尚可，当前有 3 个开放问题，解决率为 25%。对于希望在 AI Agent 中实现特定功能的开发者来说，这是一种值得尝试的解决方案。

## 重點功能

- 可组合性 — 支持多个 Skills 协同工作，提升任务执行效率。
- 可移植性 — 同一 Skill 可在不同工具中复用，降低学习成本。
- 按需加载 — Skills 可根据场景自动加载，提升使用灵活性。
- 结构化指令集 — 通过文件夹组织指令、脚本和参考资源，便于管理和调用。
- 开源 — 允许用户自由修改和扩展，促进社区参与。

## 快速開始

1. 通过 Agent 安装 Skill
```bash
安装这个 skill：https://github.com/KKKKhazix/khazix-skills
```
2. 手动下载 Skill
```bash
在 Releases 页面下载对应 Skill 的 .skill 安装包
```
3. 拖动到对应工具的 Skills 目录
```bash
将 .skill 文件拖动到 ~/.claude/skills/ 或 ~/.openclaw/skills/ 等路径
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1585 stars（317/天），forks 337（21.3%），顯示出高活躍度。作者 KKKKhazix 透過長期打磨的 Skills，解決了 AI Agent 能力擴展的痛點，讓用戶能夠快速集成和使用。這些 Skills 的開源讓更多開發者能夠參與和貢獻，進一步推動了專案的發展。社群的反饋和使用情況也促進了專案的改進。

## 適合誰使用

**目標受眾**：希望快速擴展 AI Agent 功能的開發者，特別是在內容創作領域。

> [!example] 使用場景
> - 內容創作者用它來快速生成符合風格的長文，因為 kaizike-writer 提供了完整的寫作規範和自檢體系。
> - 開發者用它來擴展 AI Agent 的功能，因為可以輕鬆地將不同的 Skills 組合使用，提升工作效率。
> - 教育工作者用它來設計教學內容，因為 Skills 的可移植性允許在多個平台上使用相同的教學模組。

## 架構分析

Khazix Skills 采用模块化设计，允许用户根据需求组合和加载不同的 Skills。每个 Skill 以文件夹结构组织，包含指令、脚本和参考资源，便于管理和调用。这种设计使得用户能够在不同的 AI Agent 中复用相同的 Skill，提升了灵活性和效率。选择这种结构化方式的代价是初期可能需要更多的学习和适应，但长期来看，能够显著提高开发效率和代码复用率。由于当前仅有一个 Skill，扩展性尚待观察，但设计理念为未来的功能扩展提供了良好的基础。

## 技術深入分析

Khazix Skills 的核心技術機制在於其遵循 Agent Skills 開放標準，允許用戶透過結構化的指令集來擴展 AI Agent 的功能。每個 Skill 以文件夾形式組織，包含指令、腳本和參考資源，這樣的設計使得 Skills 可以在不同的工具中重複使用，提升了靈活性。效能方面，這些 Skills 的加載和執行速度取決於所使用的 Agent，但整體設計旨在減少不必要的資源消耗。選擇這種結構化的方式使得用戶能夠快速集成和使用，但也可能需要一定的學習成本。技術風險方面，隨著功能的擴展，可能會出現兼容性問題，特別是在不同 Agent 之間的整合。整合的摩擦點主要在於不同工具的 Skills 安裝路徑和格式，這需要用戶在使用前進行適當的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和使用範例；安裝過程相對順暢，無明顯坑；缺乏詳細的入門指南，可能需要用戶自行摸索；目前僅提供英文文檔，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 模块化设计，能够快速组合和扩展功能。
> - 支持多种 AI Agent，提升了使用的灵活性。
> - 开源社区活跃，便于用户参与和贡献。

> [!danger] 缺點
> - 目前功能较为单一，仅有一个 Skill。
> - 需要在特定的 Agent 中使用，限制了应用场景。
> - 文档和社区支持可能尚不完善，初学者需要额外学习。

> [!warning] 注意事項
> - 目前仅提供一个 kaizike-writer Skill，功能较为单一。
> - 需要在支持的 Agent 中使用，限制了适用范围。
> - 社区支持和文档可能尚不完善，初学者可能需要额外的学习时间。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多种 AI Skills，但缺乏 Khazix Skills 的模块化和可组合性。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 虽然也提供 AI Skills，但在按需加载和跨工具使用方面不如 Khazix Skills 灵活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 AI Skills，但缺乏 Khazix Skills 的模块化和可组合性。 | 如果需要多样化的 Skills 但不在意模块化设计，可以选择它。 | medium，因為需要重新適應不同的使用方式。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 虽然也提供 AI Skills，但在按需加载和跨工具使用方面不如 Khazix Skills 灵活。 | 如果需要更成熟的功能和社区支持，可以选择它。 | medium，因為需要重新學習其使用方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **khazix-skills** | **boneyard** | **skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供多種 AI Skills，但缺乏 Khazix Skills 的模块化和可组合性。 | 虽然也提供 AI Skills，但在按需加载和跨工具使用方面不如 Khazix Skills 灵活。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的使用方式。 | medium，因為需要重新學習其使用方法。 |
> | 適用場景 | 主要場景 | 如果需要多样化的 Skills 但不在意模块化设计，可以选择 | 如果需要更成熟的功能和社区支持，可以选择它。 |

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

- [MEDIUM] 在不同 Agent 中使用時，可能需要手動調整 Skills 安裝路徑
  - 解法：參考 README 中的安裝說明進行配置
- **[HIGH]** 目前只有一個 Skill，功能較為單一，可能無法滿足多樣化需求
  - 解法：等待未來的功能擴展或考慮其他替代方案
- [MEDIUM] 文檔可能不夠詳細，初學者可能需要額外的學習時間
  - 解法：參考社群討論或尋找其他資源

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 內容創作團隊需要快速生成長文 | 非常適合 | kaizike-writer 提供了完整的寫作規範，能夠提升創作效率。 |
| 小型開發團隊希望擴展 AI 功能 | 適合 | 模組化設計使得功能擴展變得簡單。 |
| 大型企業需要穩定的 AI 解決方案 | 不適合 | 目前功能單一，尚未成熟，無法滿足企業需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、2 小時整合，得到擴展 AI 功能的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但依賴的 Agent 可能有其安全性考量。

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
| Forks | 337 |
| Open Issues | 3 |
| Issue 解決率 | 25% (1 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 47 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/khazix-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，解決率為 25%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-06）
> **活躍天數** 1 天 · **最新 commit** Replace kaizike-writer with updated khazix-writer skill

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/KKKKhazix/khazix-skills/issues/3) | 朋友推荐过来的，我刚在本地workbuddy安装体验了。 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Khazix Skills
> 
> 数字生命卡兹克开源的 AI Skills 合集。
> 
> 这里是我自己在用的、经过长期打磨的 Skills，现在决定把它们完整地、一字不改地开源出来。
> 
> ## 什么是 Skill
> 
> Skill 是遵循 [Agent Skills](https://agentskills.io) 开放标准的结构化指令集，由包含指令、脚本和参考资源的文件夹组成，用于扩展 AI Agent 的能力边界。Agent 会在相关场景下自动加载对应的 Skill，你也可以通过 `/skill-name` 手动调用。
> 
> Skill 的设计理念是**可组合、可移植、按需加载**。多个 Skill 可以协同工作，同一个 Skill 可以跨工具使用。它让你能够把领域专业知识打包成 AI 可以复用的模块，在特定场景下按照这套方法论来执行任务。
> 
> ## 已开源的 Skills
> 
> | Skill | 说明 |
> |-------|------|
> | [**kaizike-writer**](./kaizike-writer/) | 卡兹克公众号长文写作 Skill，包含完整的写作风格规则、四层自检体系、内容方法论和风格示例库 |
> 
> ## 安装
> 
> ### 通过 Agent 安装
> 
> 在 Claude Code、Codex、OpenClaw 等支持 Skill 的 Agent 中，直接对话：
> 
> ```
> 安装这个 skill：https://github.com/KKKKhazix/khazix-skills
> ```
> 
> ### 手动安装
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

相關概念：[[Agent 框架]] · [[模組化設計]] · [[開放標準]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/KKKKhazix/khazix-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：AI Skills）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI Skills" AND file.name != "KKKKhazix--khazix-skills"
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
> WHERE language = "N/A" AND file.name != "KKKKhazix--khazix-skills" AND status != "archived"
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
> const concepts = ["Agent 框架","模組化設計","開放標準"];
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

- [[2026-04-12|2026-04-12]] — 首次收錄，1.6k stars
