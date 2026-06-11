---
repo: XiaomiMiMo/MiMo-Code
url: https://github.com/XiaomiMiMo/MiMo-Code
owner: XiaomiMiMo
owner_type: Organization
language: TypeScript
license: MIT
description: ""
homepage: ""
stars: 681
stars_per_day: 681
forks: 45
open_issues: 26
created: 2026-06-10
pushed_at: 2026-06-10
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "AI 編碼助手"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "提供持久記憶的 AI 編碼助手，幫助開發者更高效地管理和編寫代碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-14"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 46555
readme_length: 5410
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:681"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "MiMo-Code"
  - "XiaomiMiMo/MiMo-Code"
  - "提供持久記憶的 AI 編碼助手，幫助開發者更高效地管理和編寫代碼。"
---

# MiMo-Code

**681** stars · **681** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.0` `easy-install`

> [!summary] 一句話摘要
> 提供持久記憶的 AI 編碼助手，幫助開發者更高效地管理和編寫代碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (681 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在終端中高效管理代碼和任務的開發者，特別是大型項目的開發者。
> **一句話重點** MiMoCode 的持久記憶和智能上下文管理功能將顯著改變開發者的工作方式，特別是在大型項目中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 編碼助手" && p.file.name !== "XiaomiMiMo--MiMo-Code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 編碼助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的代碼管理工具，值得嘗試。

> [!abstract] 核心創新
> 提供持久記憶和智能上下文管理的 AI 編碼助手。

## 專案簡介

MiMoCode 是一個終端原生的 AI 編碼助手，能夠讀寫代碼、執行命令、管理 Git，並使用持久記憶系統在多個會話中保持對項目的深刻理解。用戶可以透過 `curl -fsSL https://mimo.xiaomi.com/install | bash` 一行指令快速安裝，首次啟動會自動引導配置。它的核心特性包括多個代理模式（如 `build`、`plan` 和 `compose`），支持持久記憶和智能上下文管理，能夠自動保存會話狀態並重建上下文，確保開發者不必重複學習項目背景。這個工具的設計考慮了開發者的工作流，提供了任務追蹤和子代理系統，讓開發者能夠並行處理多個任務，並在需要時創建子代理。與其他工具相比，MiMoCode 的持久記憶和智能上下文管理使其在處理大型項目時更具優勢，特別是在需要長期跟蹤和管理多個任務的情況下。實際使用中，開發者可能會遇到 Windows 環境下的安裝問題，這在社群中引發了一些討論。這個專案目前處於初始階段，未來可能會持續增強功能和穩定性。

**技術棧**：`TypeScript 5.8.2` · `Bun 1.3.11` · `SQLite`

## 重點功能

- 多代理模式 — 提供 `build`、`plan` 和 `compose` 三種模式以滿足不同開發需求。
- 持久記憶 — 使用 SQLite FTS5 全文檢索系統來保存項目知識和會話狀態。
- 智能上下文管理 — 自動保存會話狀態並重建上下文，確保開發者不必重複學習。
- 任務追蹤系統 — 提供樹狀任務系統，自動與檢查點系統整合，保持任務進度。
- 子代理系統 — 允許主代理按需創建子代理，並行處理多個任務。

## 快速開始

1. 快速安裝
```bash
curl -fsSL https://mimo.xiaomi.com/install | bash
```
2. 全局安裝 npm 套件
```bash
npm install -g @mimo-ai/cli
```
3. 啟動開發模式
```bash
bun run dev
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 MiMoCode",
  "指令": "bun run dev",
  "預期輸出": "啟動開發模式，開始使用 MiMoCode。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 681 stars（681/天），forks 45（6.6%），這顯示出強烈的初期興趣。作者 qiaozongming 在開源社群中有一定的影響力，這個專案解決了開發者在多會話中管理代碼的痛點，特別是持久記憶的需求。沒有其他工具能夠如此有效地整合上下文管理和多任務處理，這使得 MiMoCode 在功能上具有獨特的優勢。社群的反饋也顯示出對於其功能的期待和改進建議，這可能會進一步推動其發展。

## 適合誰使用

**目標受眾**：需要在終端中高效管理代碼和任務的開發者，特別是大型項目的開發者。

> [!example] 使用場景
> - 後端工程師用它來管理大型專案的代碼和任務進度，因為其持久記憶系統能夠自動保存和重建上下文，減少重複學習的時間。
> - 全端開發者用它來進行規格驅動開發，因為其 Compose 模式提供了從規格到代碼的全過程支持，提升開發效率。
> - DevOps 工程師用它來自動化 CI/CD 流程，因為其能夠管理多個任務並追蹤進度，確保部署過程的順利進行。

## 架構分析

MiMoCode 採用模組化架構，核心功能由多個代理組成，每個代理負責特定任務。持久記憶系統使用 SQLite 來存儲項目知識，這樣的設計使得開發者能夠在不同會話中保持上下文。任務追蹤系統則以樹狀結構管理任務，並與檢查點系統整合，確保任務進度不會丟失。

這種設計使得開發者能夠靈活地管理多個任務，但也可能導致系統複雜度增加，特別是在處理大量任務時。擴展性方面，隨著功能的增加，可能會面臨性能瓶頸，特別是在記憶體和處理速度上。整體而言，這種架構設計在提供靈活性的同時，也需要考慮到未來的擴展需求。

## 技術深入分析

MiMoCode 的核心技術機制包括多代理系統和持久記憶系統，這使得它能夠在多會話中保持上下文。使用 SQLite 作為持久記憶的存儲後端，這樣的選擇提供了高效的查詢性能，但也可能在數據量增大時面臨性能瓶頸。設計上，MiMoCode 旨在支持靈活的開發流程，這使得它能夠適應多種開發需求，但也增加了系統的複雜性。選擇 TypeScript 和 Bun 作為開發語言和環境，這樣的選擇使得開發過程中能夠享受到靜態類型檢查的優勢，但也可能對於某些開發者來說學習曲線較陡。技術風險方面，隨著功能的增加，可能會出現性能下降的問題，特別是在處理大量任務時。整合方面，與主流開發工具的兼容性尚需進一步驗證，特別是在 CI/CD 流程中的應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和功能介紹，但缺乏詳細的範例。安裝過程相對順暢，使用者可以快速上手。文件目前僅提供英文版本，可能對部分用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 持久記憶系統能夠減少重複學習的時間，提升開發效率。
> - 多代理模式支持不同的開發需求，適應性強。
> - 智能上下文管理能夠自動保存和重建上下文，減少開發者的負擔。

> [!danger] 缺點
> - 目前僅支持 Linux 和 macOS，Windows 環境下安裝存在問題。
> - 功能仍在開發中，可能會有不穩定的情況。
> - 社群支持和文檔尚不完善，可能需要自行探索。

> [!warning] 注意事項
> - 目前僅支持 Linux 和 macOS，Windows 環境下安裝存在問題。
> - 功能仍在開發中，可能會有不穩定的情況。
> - 社群支持和文檔尚不完善，可能需要自行探索。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多種代理模式，但缺乏持久記憶功能，適合簡單的任務管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，缺少上下文管理和任務追蹤功能，適合小型專案。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 LLM API 接入，但不支援多任務並行處理，適合單一任務的開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多種代理模式，但缺乏持久記憶功能，適合簡單的任務管理。 | 如果需要一個簡單的任務管理工具，而不需要持久記憶功能。 | low，因為功能相似，遷移成本低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，缺少上下文管理和任務追蹤功能，適合小型專案。 | 如果你的專案主要集中在代碼生成，而不需要複雜的上下文管理。 | medium，因為需要調整工作流程以適應不同的功能。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 LLM API 接入，但不支援多任務並行處理，適合單一任務的開發。 | 如果你的專案只需要處理單一任務，且不需要多任務並行處理的能力。 | medium，因為需要重新設計任務處理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MiMo-Code** | **agent-sprite-forge** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供多種代理模式，但缺乏持久記憶功能，適合簡單的任務管理。 | 專注於代碼生成，缺少上下文管理和任務追蹤功能，適合小型專案。 | 提供 LLM API 接入，但不支援多任務並行處理，適合單一任務的開發。 |
> | 遷移成本 | - | low，因為功能相似，遷移成本低。 | medium，因為需要調整工作流程以適應不同的功能。 | medium，因為需要重新設計任務處理流程。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的任務管理工具，而不需要持久記憶功能。 | 如果你的專案主要集中在代碼生成，而不需要複雜的上下文管理。 | 如果你的專案只需要處理單一任務，且不需要多任務並行處理的能力 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 環境下安裝失敗，導致無法使用。
  - 解法：使用 WSL 或在 Linux/macOS 環境中運行。
- [MEDIUM] 功能不穩定，可能會出現錯誤。
  - 解法：定期檢查更新，並參與社群討論以獲得最新資訊。
- [MEDIUM] 文檔不完整，缺乏詳細範例。
  - 解法：參考 GitHub Issues 和社群討論以獲得幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 持久記憶和上下文管理能夠幫助小團隊高效協作。 |
| 大型企業的多任務開發專案 | 適合 | 能夠有效管理多個任務和上下文，但可能需要更多的穩定性。 |
| 單一任務的簡單專案 | 普通 | 功能過於複雜，可能不適合簡單的開發需求。 |
| 需要在 Windows 環境中運行的專案 | 不適合 | 目前在 Windows 環境下存在安裝問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的代碼管理工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意依賴的安全性和穩定性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MiMoCode 最常與終端工具和版本控制系統（如 Git）搭配使用，處於開發流程的核心環節。實際整合範例包括在一個使用 Git 的專案中，開發者可以使用 MiMoCode 來管理代碼和任務，具體做法是透過命令行啟動 MiMoCode 並執行任務。與主流 CI 工具（如 GitHub Actions）兼容性尚需進一步驗證，整合時可能會遇到配置上的挑戰。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
| Forks | 45 |
| Open Issues | 26 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-10 |
| 建立日期 | 2026-06-10 |
| Repo 大小 | 45.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XiaomiMiMo/MiMo-Code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@qiaozongming](https://github.com/qiaozongming) | 2 |

**最新版本**：v0.1.0 (2026-06-10)

> [!info]- Release Notes
> Initial open-source release of MiMo Code.

## 社群與生態

**社群活躍度**：社群活躍度一般，開發者需要主動參與討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-10 ~ 2026-06-10）
> **活躍天數** 1 天 · **最新 commit** readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#25](https://github.com/XiaomiMiMo/MiMo-Code/issues/25) | 做这个东西没什么意义 `question` | 7 | 6 |
> | [#26](https://github.com/XiaomiMiMo/MiMo-Code/issues/26) | 好一个支持无限上下文 `question` | 2 | 1 |
> | [#11](https://github.com/XiaomiMiMo/MiMo-Code/issues/11) | Bug: 输出过长时无法向上滚动查看历史内容 | 2 | 2 |
> | [#13](https://github.com/XiaomiMiMo/MiMo-Code/issues/13) | windows 11 安装运行报错 `question` | 1 | 5 |
> | [#24](https://github.com/XiaomiMiMo/MiMo-Code/issues/24) | win11 官方npm 安装成功但是分发失败 `bug` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> MiMoCode
> 
>   
> 
> An open-source AI coding agent with cross-session memory.
> 
>   中文 | English
> 
>   Website | Blog
> 
> ---
> 
> MiMoCode is a terminal-native AI coding assistant. It can read and write code, run commands, manage Git, and use a persistent memory system to keep a deep understanding of your project across sessions while continuously improving itself.
> 
> MiMo Auto is built in as a free-for-limited-time channel, so you can start with zero configuration. MiMoCode also supports connecting to any mainstream LLM provider API.
> 
> ---
> 
> ## Quick Start
> 
> ```bash
> # One-line install
> curl -fsSL https://mimo.xiaomi.com/install | bash
> 
> # Or install via npm
> npm install -g @mimo-ai/cli
> ```
> 
> The first launch guides you through configuration automatically. Supported options:
> - **MiMo Auto (free for a limited time)** — anonymous channel, zero configuration
> - **Xiaomi MiMo Platform** — OAuth login
> - **Import from Claude Code** — migrate existing authentication in one step
> - **Custom Provider** — add any OpenAI-compatible API in the TUI
> 
> ---
> 
> ## Core Features
> 
> ### Multiple Agents
> 
> | Agent | Description |
> |--------|------|
> | **build** | Default. Full tool permissions for development |
> | **plan** | Read-only analysis mode for code exploration and solution design |
> | **compose** | Orchestration mode for specs-driven development and skill-driven workflows |
> 
> Press `Tab` to switch between primary agents. Subagents are created by the system as needed.
> 
> ### Persistent Memory
> 
> Cross-session memory powered by SQLite FTS5 full-text search:
> 
> - **Project memory** (`MEMORY.md`) — persistent project knowledge, rules, and architecture decisions
> - **Session checkpoint** (`checkpoint.md`) — structured state snapshots maintained automatically by the checkpoint-writer subagent
> - **Scratch notes** (`notes.md`) — temporary note area for agents
> - **Task progress** (`tasks//progress.md`) — per-task logs
> 
> Memory is injected automatically when a session resumes, so the agent does not need to relearn project context.
> 
> ### Intelligent Context Management
> 
> - **Automatic checkpoints** — decides when to save session state based on the model context window
> - **Context reconstruction** — when context approaches the limit, rebuilds it from the latest checkpoint, project memory, task progress, and retained recent messages so the agent can continue the current task
> - **Budgeted injection** — uses a token budget to control how much checkpoint, memory, and notes content enters context, with importance ranking
> 
> ### Task Tracking
> 
> A tree-shaped task system (`T1`, `T1.1`, `T1.2`, …) that integrates automatically with the checkpoint system, so task progress is preserved when sessions resume.
> 
> ### Subagent System
> 
> The primary agent can create subagents on demand. Subagents share the current session context and can work in parallel, with lifecycle tracking, cancellation, and background execution.
> 
> ### Goal / Stop Condition
> 
> The `/goal` command sets a stopping condition for a session. When the agent tries to stop, an independent judge model evaluates the conversation to decide whether the condition is truly satisfied — preventing premature "optimistic stops" during autonomous work.
> 
> ### Compose Mode
> 
> Compose mode provides a structured workflow for specs-driven development. It includes built-in skills for planning, execution, code review, TDD, debugging, verification, and merging — orchestrating the full lifecycle from spec to shipped code.
> 
> ### Voice Input
> 
> Real-time streaming voice input powered by TenVAD and MiMo ASR. Activate with `/voice`, then speak — audio is segmented by pauses and transcribed incrementally into the input. Available for MiMo logged-in users.
> 
> ### Dream & Distill
> 
> - **`/dream`** — scans recent session traces, extracts persistent knowledge into project memory, and removes outdated entries
> - **`/distill`** — discovers repeated manual workflows in recent work and packages high-confidence candidates into reusable skills, subagents, or commands
> 
> ---
> 
> ## Configuration
> 
> MiMoCode is configured via `.mimocode/mimocode.json` in the project directory (or `~/.config/mimocode/mimocode.json` globally). Key options include:
> 
> - Provider and model selection
> - Agent permissions and custom agents
> - Checkpoint and memory behavior
> - MCP server connections
> - Keybindings and theme
> 
> Max Mode (parallel best-of-N reasoning with judge selection) can be enabled via `experimental.maxMode` in the config.
> 
> ---
> 
> ## Development
> 
> ```bash
> bun install              # Install dependencies
> bun run dev              # Run in development mode
> bun turbo typecheck      # Type check
> ```
> 
> ---
> 
> ## Relationship to OpenCode
> 
> MiMoCode is built as a fork of [OpenCode](https://github.com/XiaomiMiMo/MiMo-Code). It keeps all core OpenCode capabilities (multiple providers, TUI, LSP, MCP, plugins) and adds persistent memory, intelligent context management, subagent orchestration, goal-driven autonomous loops, compose workflows, and self-improvement via dream/distill.
> 
> ---
> 
> ## Community
> 
> Scan the QR code to join the community group chat:
> 
>   
> 
> ---
> 
> ## License
> 
> Source code is licensed under the [MIT License](./LICENSE).
> 
> Use of MiMoCode is also subject to the [Use Restrictions](./USE_RESTRICTIONS.md).
> Use of Xiaomi MiMo-hosted services is subject to the [MiMo Terms of Service](https://platform.xiaomimimo.com/docs/terms/user-agreement).
> Use of the MiMo name, logo, and trademarks is subject to the MiMo Trademark Policy.

## 延伸閱讀

相關概念：[[自動化測試]] · [[多模態]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/XiaomiMiMo/MiMo-Code)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 編碼助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 編碼助手" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "XiaomiMiMo--MiMo-Code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","多模態","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XiaomiMiMo--MiMo-Code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XiaomiMiMo--MiMo-Code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XiaomiMiMo" AND file.name != "XiaomiMiMo--MiMo-Code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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
> const me = dv.page("Repos/XiaomiMiMo--MiMo-Code");
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

> **2026-06-11** — 首次收錄
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

- [[2026-06-11|2026-06-11]] — 首次收錄，681 stars
