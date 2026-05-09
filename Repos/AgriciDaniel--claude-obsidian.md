---
repo: AgriciDaniel/claude-obsidian
url: https://github.com/AgriciDaniel/claude-obsidian
owner: AgriciDaniel
owner_type: User
language: Python
license: MIT
description: "Claude + Obsidian knowledge companion. Persistent, compounding wiki vault based on Karpathy's LLM Wiki pattern. /wiki /save /autoresearch"
homepage: "https://agricidaniel.com/blog/claude-obsidian-ai-second-brain"
stars: 4552
stars_per_day: 147
forks: 510
open_issues: 25
created: 2026-04-07
pushed_at: 2026-04-24
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: "v1.6.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "建立一個持久的知識庫，讓 Claude 與 Obsidian 結合，實現自動化的知識管理。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 33722
readme_length: 9950
bus_factor: 1
last_release_days: 15
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:988,2026-04-14:989,2026-04-15:1184,2026-04-16:1364,2026-04-17:1488,2026-04-18:1696,2026-04-19:1915,2026-04-20:2134,2026-04-21:2308,2026-04-22:2685,2026-04-23:2902,2026-04-24:3114,2026-04-25:3257,2026-04-26:3330,2026-04-27:3415,2026-04-28:3516,2026-04-29:3616,2026-04-30:3707,2026-05-01:3778,2026-05-02:3905,2026-05-03:3981,2026-05-04:4094,2026-05-05:4179,2026-05-06:4272,2026-05-07:4411,2026-05-08:4491,2026-05-09:4552"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/claude_code"
  - "topic/claude_code_skill"
  - "topic/knowledge_management"
  - "topic/obsidian"
aliases:
  - "claude-obsidian"
  - "AgriciDaniel/claude-obsidian"
  - "建立一個持久的知識庫，讓 Claude 與 Obsidian 結合，實現自動化的知識管理。"
---

# claude-obsidian

**4.6k** stars · **147** stars/天 · 建立 31 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.6.0` `easy-install`

`ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain`

> [!summary] 一句話摘要
> 建立一個持久的知識庫，讓 Claude 與 Obsidian 結合，實現自動化的知識管理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (147 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 14 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要自動化知識管理的研究人員和學生。
> **一句話重點** 這個專案的核心在於自動化知識管理，讓使用者能夠輕鬆地整合和查詢資料。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識管理" && p.file.name !== "AgriciDaniel--claude-obsidian" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、1 小時整合，得到高效的知識管理工具，值得一試。

> [!abstract] 核心創新
> DragonScale 提供了多種記憶機制，增強了 LLM 知識庫的功能。

## 專案簡介

這個專案結合了 Claude 和 Obsidian，提供了一個持久的知識庫，能夠自動整合使用者的資料並進行查詢。使用者可以透過 `/wiki` 指令來查詢已經讀取的內容，並且所有新增的資料都會自動整合進去，讓知識像利息一樣增長。這個工具基於 Andrej Karpathy 的 LLM Wiki 模式，並且提供了 11 種技能，無需手動整理資料。使用者可以選擇啟用 DragonScale 記憶擴展，這個擴展提供了多種功能，如折疊滾動、確定性頁面地址等，進一步增強了知識庫的功能。安裝過程簡單，只需透過 `git clone` 和 `bash bin/setup-vault.sh` 指令即可完成初始設置，並且可以在 Obsidian 中直接使用。這個工具的賣點在於其自動化和持久性，能夠為需要長期管理知識的使用者提供便利。

**技術棧**：`Python` · `Shell` · `Makefile`

## 重點功能

- 自動整合資料 — 每次新增資料都會自動整合進知識庫，無需手動整理。
- DragonScale 記憶擴展 — 提供折疊滾動、確定性頁面地址等功能以增強知識庫的使用體驗。
- 多代理支持 — 允許多個代理同時使用，增強協作能力。
- 即時查詢 — 使用 `/wiki` 指令可快速查詢已讀取的內容。
- 簡單安裝 — 只需幾個指令即可完成設置，快速上手。

## 快速開始

1. 克隆專案並設置知識庫
```bash
git clone https://github.com/AgriciDaniel/claude-obsidian && cd claude-obsidian && bash bin/setup-vault.sh
```
2. 在 Obsidian 中打開資料夾
```bash
Manage Vaults → Open folder as vault → select 'claude-obsidian/'
```
3. 在 Claude Code 中使用
```bash
claude plugin install claude-obsidian@claude-obsidian-marketplace
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 31 天內累積 4552 stars（147/天），forks 510（11.2%），顯示出強勁的增長潛力。作者 AgriciDaniel 過去在知識管理和 AI 領域有豐富的經驗，這個專案解決了傳統筆記工具無法自動整合資料的痛點。之前的工具多依賴手動整理，效率低下，這個專案的出現讓知識管理變得更為高效。社群的反饋也顯示出使用者對於自動化功能的需求，特別是在知識增長的過程中。這個工具的設計使得使用者能夠輕鬆地管理和查詢資料，符合現代知識工作者的需求。

## 適合誰使用

**目標受眾**：需要自動化知識管理的研究人員和學生。

> [!example] 使用場景
> - 研究人員用它來自動整理和查詢文獻資料，因為這樣可以節省大量手動整理的時間。
> - 學生用它來記錄和管理課堂筆記，因為自動整合功能可以幫助他們快速找到所需資訊。
> - 寫作者用它來構建故事大綱，因為持久的知識庫能夠隨時查詢靈感和資料。

## 架構分析

這個專案採用模組化設計，核心功能由 Claude 和 Obsidian 組成，並透過 DragonScale 擴展進一步增強。資料流方面，使用者透過指令與系統互動，系統則將資料整合進知識庫，並在查詢時提供即時回應。選擇這種設計是為了提高使用者的便利性和系統的擴展性，但也可能導致初學者在設置時遇到困難。擴展性方面，DragonScale 的設計使得未來可以輕鬆添加更多功能，但目前仍需解決穩定性問題。

## 技術深入分析

這個專案的核心技術在於結合了 Claude 的 AI 能力與 Obsidian 的知識管理功能，使用者可以透過簡單的指令來管理和查詢資料。DragonScale 擴展進一步增強了這個功能，提供了多種記憶機制以支持知識的持久性和增長。效能方面，這個系統能夠處理大量資料，並且在查詢時能夠提供即時回應。選擇 Python 作為主要開發語言使得這個專案在資料處理和 AI 整合上具備良好的性能，但也可能導致較高的學習曲線。設計上，這個專案的模組化架構使得未來的擴展變得更加容易，但也需要注意穩定性和兼容性問題。整合到現有的工具鏈中，使用者只需簡單的指令即可完成設置，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢。雖然有些功能需要額外配置，但整體上對新手友好。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化資料整合，節省時間和精力。
> - 簡單的安裝過程，快速上手。
> - 支持多種功能擴展，靈活性高。

> [!danger] 缺點
> - 目前僅支援特定操作系統，使用範圍有限。
> - 部分功能仍在開發中，可能不夠穩定。
> - 初學者可能在設置上遇到困難。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 用戶需額外配置。
> - DragonScale 記憶擴展需要額外的設置，初學者可能會感到困難。
> - 部分功能仍在開發中，可能存在穩定性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的知識管理功能，但不具備自動整合資料的能力，適合需要手動管理的使用者。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 AI 生成內容，缺乏持久的知識庫功能，適合需要即時生成的場景。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於資料同步，無法提供自動化的知識管理功能，適合需要資料備份的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於知識管理，但不具備自動化整合功能，使用者需手動管理資料。 | 如果需要更靈活的手動管理功能，且不介意花時間整理資料。 | medium，因為需要重新設置資料結構。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 AI 生成內容，無法提供持久的知識庫功能。 | 如果主要需求是即時生成內容而非長期知識管理。 | low，因為主要使用 API 進行互動。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-obsidian** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於知識管理，但不具備自動化整合功能，使用者需手動管理資料。 | 專注於 AI 生成內容，無法提供持久的知識庫功能。 |
> | 遷移成本 | - | medium，因為需要重新設置資料結構。 | low，因為主要使用 API 進行互動。 |
> | 適用場景 | 主要場景 | 如果需要更靈活的手動管理功能，且不介意花時間整理資料。 | 如果主要需求是即時生成內容而非長期知識管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用 git clone 後，部分指令無法自動發現
  - 解法：需手動運行設定腳本以解決問題
- [MEDIUM] 在使用 Obsidian Web Clipper 時可能遇到保存失敗
  - 解法：檢查 API 設定是否正確
- [MEDIUM] 某些提示類型的鉤子可能會失敗
  - 解法：確保正確配置 ToolUseContext

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化資料整合能提高團隊效率。 |
| 大型研究機構的知識管理系統 | 適合 | 能夠處理大量資料並提供即時查詢。 |
| 個人使用的筆記工具 | 非常適合 | 簡單的安裝和使用流程，適合個人知識管理。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到高效的知識管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。依賴的庫和插件需定期檢查以確保安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
| Forks | 510 |
| Open Issues | 25 |
| Issue 解決率 | 14% (4 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-07 |
| 官方網站 | [Link](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) |
| Repo 大小 | 32.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AgriciDaniel/claude-obsidian) |
| Topics | `ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 69
>     "Shell" : 29
>     "Makefile" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AgriciDaniel](https://github.com/AgriciDaniel) | 155 |

**最新版本**：v1.6.0 — v1.6 (2026-04-24)

> [!info]- Release Notes
> > DragonScale is now a four-mechanism, opt-in memory layer for LLM wiki vaults.
> 
> ![DragonScale Memory mechanism overview](https://raw.githubusercontent.com/AgriciDaniel/claude-obsidian/main/wiki/meta/dragonscale-mechanism-overview.png)
> 
> ## TL;DR
> 
> - Shipped: DragonScale now has fold rollups, deterministic page addresses, semantic tiling lint, and boundary-first autoresearch.
> - Gated on: `bash bin/setup-dragonscale.sh`, plus local dependencies per mechanism.
> - Did not ship: fold-of-folds, calibrated tiling thresholds, hosted mode, or multi-vault rollup.
> 
> ## Same-day release sequence
> 
> The plugin version is `1.6.0` and the annotated tag `v1.6.0` points at the release commit on `main`.
> 
> The narrative below includes `1.5.0`, `1.5.1`, and `1.6.0` because 2026-04-24 bundled three local release states into one cycle.
> 
> `1.5.0` was Phase 3.5.
> It hardened the DragonScale base.
> It added the installer, test harness, changelog, Makefile targets, and opt-in wiring for the first three mechanisms.
> It also synced plugin metadata to `1.5.0`.
> 
> `1.5.1` was Phase 3.6.
> It fixed five narrow issues before Phase 4.
> Those fixes covered tiling report path confinement, rollout baseline date, AGENTS wording, `.raw/` manifest wording, and install-guide version drift.
> 
> `1.6.0` was Phase 4.
> It shipped Mechanism 4: boundary-first autoresearch.
> It added `scripts/boundary-score.py`, wired no-topic `/autoresearch` into frontier suggestions, added boundary-score tests, and bumped the DragonScale spec to v0.4.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-24）
> **活躍天數** 1 天 · **最新 commit** docs: fix v1.6.0 release body rendering on GitHub

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/AgriciDaniel/claude-obsidian/issues/2) | Commands (/wiki, /save) not discovered out of box when using | 9 | 2 |
> | [#36](https://github.com/AgriciDaniel/claude-obsidian/issues/36) | How to using Obsidian Web Clipper save to Obsidian | 1 | 0 |
> | [#29](https://github.com/AgriciDaniel/claude-obsidian/issues/29) | SessionStart prompt-type hook fails with 'ToolUseContext is  | 1 | 3 |
> | [#7](https://github.com/AgriciDaniel/claude-obsidian/issues/7) | SessionStart:resume and PostCompact prompt-type hooks fail w | 1 | 3 |
> | [#37](https://github.com/AgriciDaniel/claude-obsidian/issues/37) | Question on real-world ingestion friction | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-obsidian
> 
>   
> 
> [](https://github.com/AgriciDaniel/claude-obsidian/stargazers)
> [](LICENSE)
> [](https://code.claude.com/docs/en/discover-plugins)
> [](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)
> 
> Claude + Obsidian knowledge companion. A running notetaker that builds and maintains a persistent, compounding wiki vault. Every source you add gets integrated. Every question you ask pulls from everything that has been read. Knowledge compounds like interest.
> 
> Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). **11 skills. Zero manual filing. Multi-agent support. Optional [DragonScale Memory](docs/dragonscale-guide.md) extension** (log folds, deterministic page addresses, semantic tiling lint, boundary-first autoresearch).
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ### Option 1: Clone as vault (recommended: full setup in 2 minutes)
> 
> ```bash
> git clone https://github.com/AgriciDaniel/claude-obsidian
> cd claude-obsidian
> bash bin/setup-vault.sh
> ```
> 
> Open the folder in Obsidian: **Manage Vaults → Open folder as vault → select `claude-obsidian/`**
> 
> Open Claude Code in the same folder. Type `/wiki`.
> 
> > `setup-vault.sh` configures `graph.json` (filter + colors), `app.json` (excludes plugin dirs), and `appearance.json` (enables CSS). Run it once before the first Obsidian open. You get the fully pre-configured graph view, color scheme, and wiki structure out of the box.
> 
> ---
> 
> 
> ### Option 2: Install as Claude Code plugin
> 
> Plugin installation is a two-step process in Claude Code. First add the marketplace catalog, then install the plugin from it.
> 
> ```bash
> 
> # Step 2: install the plugin
> claude plugin install claude-obsidian@claude-obsidian-marketplace
> ```
> 
> In any Claude Code session: `/wiki`. Claude walks you through vault setup.
> 
> To check it worked:
> ```bash
> claude plugin list
> ```
> 
> ---
> 
> 
> ## MCP Setup (Optional)
> 
> MCP lets Claude read and write vault notes directly without copy-paste.
> 
> Option A (REST API based):
> 1. Install the Local REST API plugin in Obsidian
> 2. Copy your API key
> 3. Run:
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "uvx",
>   "args": ["mcp-obsidian"],
>   "env": {
>     "OBSIDIAN_API_KEY": "your-key",
>     "OBSIDIAN_HOST": "127.0.0.1",
>     "OBSIDIAN_PORT": "27124",
>     "NODE_TLS_REJECT_UNAUTHORIZED": "0"
>   }
> }' --scope user
> ```
> 
> Option B (filesystem based, no plugin needed):
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "npx",
>   "args": ["-y", "@bitbonsai/mcpvault@latest", "/path/to/your/vault"]
> }' --scope user
> ```
> 
> ---
> 
> 
> ### Core Plugins (built into Obsidian: no install needed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Bases** | Powers `wiki/meta/dashboard.base`: native database views. Available since Obsidian v1.9.10 (August 2025). **Replaces Dataview for the primary dashboard.** |
> | **Properties** | Visual frontmatter editor |
> | **Backlinks**, **Outline**, **Graph view** | Standard navigation |
> 
> 
> ### Pre-installed Community Plugins (ship with this vault)
> 
> Enable in **Settings → Community Plugins → enable**:
> 
> | Plugin | Purpose | Notes |
> |--------|---------|-------|
> | **Calendar** | Right-sidebar calendar with word count + task dots | Pre-installed |
> | **Thino** | Quick memo capture panel | Pre-installed |
> | **Excalidraw** | Freehand drawing canvas, annotate images | Pre-installed* |
> | **Banners** | Notion-style header image via `banner:` frontmatter | Pre-installed |
> 
> \* Excalidraw `main.js` (8MB) is downloaded automatically by `setup-vault.sh`. It is not tracked in git.
> 
> 
> ### Also install from Community Plugins (not pre-installed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Templater** | Auto-fills frontmatter from `_templates/` |
> | **Obsidian Git** | Auto-commits vault every 15 minutes |
> | **Dataview** *(optional/legacy)* | Only needed for the legacy `wiki/meta/dashboard.md` queries. The primary dashboard now uses Bases. |
> 
> Also install the **[Obsidian Web Clipper](https://obsidian.md/clipper)** browser extension. Sends web pages to `.raw/` in one click.
> 
> ---
> 
> 
> ## CSS Snippets (auto-enabled by setup-vault.sh)
> 
> Three snippets ship with the vault and are enabled automatically:
> 
> | Snippet | Effect |
> |---------|--------|
> | `vault-colors` | Color-codes `wiki/` folders by type in the file explorer (blue = concepts, green = sources, purple = entities) |
> | `ITS-Dataview-Cards` | Turns Dataview `TABLE` queries into visual card grids: use ` ```dataviewjs ` with `.cards` class |
> | `ITS-Image-Adjustments` | Fine-grained image sizing in notes: append `\|100` to any image embed |
> 
> ---
> 
> 
> ### [Youtube Demo](https://www.youtube.com/watch?v=a2hgayvr-H4)
> 
>   
> 
> You drop sources. Claude reads them, extracts entities and concepts, updates cross-references, and files everything into a structured Obsidian vault. The wiki gets richer with every ingest.
> 
> You ask questions. Claude reads the hot cache (recent context), scans the index, drills into relevant pages, and synthesizes an answer. It cites specific wiki pages, not training data.
> 
> You lint. Claude finds orphans, dead links, stale claims, and missing cross-references. Your wiki stays healthy without manual cleanup.
> 
> At the end of every session, Claude updates a hot cache. The next session starts with full recent context, no recap needed.
> 
>   
>   
> 
> ---
> 
> 
> ## What It Does
> 
> ### Option 3: Add to an existing vault
> 
> Copy `WIKI.md` into your vault root. Paste into Claude:
> 
> ```
> Read WIKI.md in this project. Then:
> 1. Check if Obsidian is installed. If not, install it.
> 2. Check if the Local REST API plugin is running on port 27124.
> 3. Configure the MCP server.
> 4. Ask me ONE question: "What is this vault for?"
> Then scaffold the full wiki structure.
> ```
> 
> ---
> 
> 
> ## Why claude-obsidian?
> 
> Most Obsidian AI plugins are chat interfaces - they answer questions about your existing notes. claude-obsidian is a knowledge engine - it creates, organizes, maintains, and evolves your notes autonomously.
> 
> | Capability | claude-obsidian | Smart Connections | Copilot |
> |---|---|---|---|
> | **Auto-organize notes** | Creates entities, concepts, cross-references | No | No |
> | **Contradiction flagging** | `[!contradiction]` callouts with sources | No | No |
> | **Session memory** | Hot cache persists between conversations | No | No |
> | **Vault maintenance** | 8-category lint (orphans, dead links, gaps) | No | No |
> | **Autonomous research** | 3-round web research with gap-filling | No | No |
> | **Multi-model support** | Claude, Gemini, Codex, Cursor, Windsurf | Claude only | Multiple |
> | **Visual canvas** | Via [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) companion | No | No |
> | **Query with citations** | Cites specific wiki pages | Cites similar notes | Cites notes |
> | **Batch ingestion** | Parallel agents for multiple sources | No | No |
> | **Open source** | MIT | MIT | Freemium |
> 
> > **Deep dive:** [I Turned Obsidian Into a Self-Organizing AI Brain](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) - full breakdown with data visualizations, market context, and workflow demos.
> 
> ---
> 
> 
> # Step 1: add the marketplace
> claude plugin marketplace add AgriciDaniel/claude-obsidian
> 
> 
> ## Commands
> 
> | You say | Claude does |
> |---------|------------|
> | `/wiki` | Setup check, scaffold, or continue where you left off |
> | `ingest [file]` | Read source, create 8-15 wiki pages, update index and log |
> | `ingest all of these` | Batch process multiple sources, then cross-reference |
> | `what do you know about X?` | Read index > relevant pages > synthesize answer |
> | `/save` | File the current conversation as a wiki note |
> | `/save [name]` | Save with a specific title (skips the naming question) |
> | `/autoresearch [topic]` | Run the autonomous research loop: search, fetch, synthesize, file |
> | `/canvas` | Open or create the visual canvas, list zones and nodes |
> | `/canvas add image [path]` | Add an image (URL or local path) to the canvas with auto-layout |
> | `/canvas add text [content]` | Add a markdown text card to the canvas 

## 延伸閱讀

相關概念：[[知識管理]] · [[自動化]] · [[第二大腦]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[nashsu--llm_wiki|nashsu/llm_wiki]]

[GitHub](https://github.com/AgriciDaniel/claude-obsidian) · [官方網站](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 相關收錄

> [!note]- 直接競品（同子分類：知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識管理" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "AgriciDaniel--claude-obsidian" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["知識管理","自動化","第二大腦"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AgriciDaniel--claude-obsidian" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AgriciDaniel--claude-obsidian" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AgriciDaniel" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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

> **2026-04-14** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 首次收錄，988 stars
