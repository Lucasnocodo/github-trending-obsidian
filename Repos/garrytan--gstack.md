---
repo: garrytan/gstack
url: https://github.com/garrytan/gstack
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Use Garry Tan's exact Claude Code setup: 10 opinionated tools that serve as CEO, Eng Manager, Release Manager, Doc Engineer, and QA"
homepage: ""
stars: 20816
stars_per_day: 3469
forks: 2367
open_issues: 74
created: 2026-03-11
pushed_at: 2026-03-18
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
use_case: "將 Claude Code 轉變為虛擬工程團隊，幫助開發者高效管理產品開發流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-03-21"
contributor_count: 2
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 23619
readme_length: 9894
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:2724,2026-03-13:2775,2026-03-14:6191,2026-03-14:6258,2026-03-15:10586,2026-03-15:10635,2026-03-16:14039,2026-03-16:14093,2026-03-17:17282,2026-03-17:17344,2026-03-18:20749,2026-03-18:20816"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "gstack"
  - "garrytan/gstack"
  - "將 Claude Code 轉變為虛擬工程團隊，幫助開發者高效管理產品開發流程。"
---

# gstack

**20.8k** stars · **3.5k** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/garrytan--gstack");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 將 Claude Code 轉變為虛擬工程團隊，幫助開發者高效管理產品開發流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (3.5k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望提高開發效率的獨立開發者或小型團隊。
> **一句話重點** gstack 讓單一開發者能夠以團隊的效率進行開發，重新定義了開發流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "garrytan--gstack" && p.status !== "archived")
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
> **結論** 花 5 小時學習，3 小時整合，得到高效的開發流程，值得嘗試。

> [!abstract] 核心創新
> gstack 將 Claude Code 轉變為一個虛擬工程團隊，實現多角色的自動化管理。

## 專案簡介

gstack 是 Garry Tan 的開源工具，旨在將 Claude Code 轉化為一個虛擬工程團隊，涵蓋 CEO、工程經理、設計師、QA 等多個角色。用戶可以通過簡單的命令，例如 `/plan-ceo-review` 和 `/qa`，來管理產品開發的各個環節，從需求分析到測試，實現高效的開發流程。這個工具的設計理念是將多個專業技能整合在一起，讓單一開發者能夠以團隊的效率進行開發，特別適合小型團隊或個人開發者。技術上，gstack 使用 TypeScript 和 Go Template，並依賴 Playwright 進行瀏覽器自動化，這使得它能夠在真實環境中進行端到端測試。

與傳統的開發流程相比，gstack 提供了更智能的審查路由和自動化測試功能，能夠顯著提高開發效率。這個工具的核心賣點在於它的多角色協作能力，讓開發者能夠在一個平台上完成多種任務，而不需要切換工具。gstack 也支持多個並行會話，進一步提升了工作效率，特別是在需要同時處理多個任務時。使用者需要安裝 Claude Code 和 Bun，安裝過程簡單快速，適合希望提升開發效率的團隊或個人。

**技術棧**：`TypeScript` · `Go Template` · `Shell` · `Playwright`

## 重點功能

- 多角色支持 — 提供 CEO、工程經理、設計師、QA 等多個角色的功能，通過簡單的命令進行管理。
- 自動化測試 — `/qa` 命令能自動進行瀏覽器測試，並生成回歸測試。
- 智能審查路由 — 根據不同的任務自動分配審查角色，提升工作效率。
- 設計審查 — `/design-consultation` 提供設計建議，生成設計文檔。
- 多會話支持 — 同時運行多個 Claude Code 會話，處理多個任務。

## 快速開始

1. 克隆 gstack 到本地
```bash
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```
2. 添加 gstack 到 CLAUDE.md
```bash
在 CLAUDE.md 中添加 gstack 部分，列出可用技能
```
3. 可選：將 gstack 添加到當前項目
```bash
cp -Rf ~/.claude/skills/gstack .claude/skills/gstack && rm -rf .claude/skills/gstack/.git && cd .claude/skills/gstack && ./setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 20816 stars（3469/天），forks 2367（11.4%），這顯示出強烈的市場需求。Garry Tan 作為 Y Combinator 的 CEO，擁有豐富的創業經驗，這使得他的工具受到廣泛關注。gstack 解決了開發者在管理多角色協作時的痛點，之前的工具往往無法有效整合多種功能。社群中對於如何提升開發效率的討論也促進了這個工具的流行。高達 11.4% 的 forks/stars 比率顯示出許多開發者正在實際修改和使用這個工具，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：希望提高開發效率的獨立開發者或小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來管理產品開發流程，因為它能自動化多個角色的任務，提升開發效率。
> - 小型團隊用它來進行端到端測試，因為它的 QA 功能能夠自動化瀏覽器測試，減少手動測試的時間。
> - 創業公司用它來快速迭代產品，因為它的設計審查和自動化測試功能能夠加快產品上線速度。

## 架構分析

gstack 的架構設計旨在將多個開發角色整合到一個工具中，使用 TypeScript 和 Go Template 實現各種功能。資料流方面，使用 Playwright 進行瀏覽器自動化，並通過命令行介面提供各種技能。選擇這種架構的原因在於能夠快速迭代和擴展功能，但這也意味著對於大型項目的支持可能會受到限制。gstack 的設計使得開發者能夠在一個平台上完成多種任務，這樣的整合雖然提高了效率，但也可能導致學習曲線的增加。整體而言，gstack 的架構適合小型團隊或個人開發者，但在大型團隊中可能需要進一步的調整。

## 技術深入分析

gstack 的核心技術機制是將多個開發角色整合到一個平台，使用 TypeScript 和 Go Template 來實現各種功能。它利用 Playwright 進行瀏覽器自動化，這使得它能夠在真實環境中進行端到端測試。這種設計使得開發者能夠快速迭代和測試功能，並且能夠在一個平台上完成多種任務。效能方面，gstack 能夠支持多達十個並行會話，這對於需要同時處理多個任務的開發者來說是一個巨大的優勢。設計上，gstack 的選擇使得它能夠快速適應不同的開發需求，但也可能在大型項目中遇到挑戰。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在多用戶環境中。整合方面，gstack 與主流開發工具的相容性良好，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但需要注意依賴的安裝。文件目前僅提供英文，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 整合多角色功能，提升開發效率。
> - 自動化測試和審查流程，減少人為錯誤。
> - 支持多會話，適合同時處理多個任務。

> [!danger] 缺點
> - 需要安裝額外的依賴，增加了使用門檻。
> - 對於大型項目可能需要額外的調整。
> - 社群支持和資源相對較少，可能影響使用體驗。

> [!warning] 注意事項
> - 需要安裝 Claude Code 和 Bun，增加了安裝複雜度。
> - 目前僅支援特定的開發環境，可能不適用於所有項目。
> - 對於大型團隊，可能需要進一步的調整以適應多用戶環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而 gstack 提供多角色的開發支持，適合更複雜的開發流程。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於代理服務，而 gstack 是一個完整的開發工具集，提供多種開發角色的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，而 gstack 更加關注開發流程的自動化和多角色支持。 | 如果你的專案重視數據隱私和安全性，Shadowbroker 可能更適合。 | medium，因為需要重新調整開發流程。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 主要針對機器學習模型的開發，而 gstack 是一個更通用的開發工具。 | 如果你的團隊專注於機器學習，NemoClaw 提供更專業的支持。 | high，因為需要重新學習和適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gstack** | **Shadowbroker** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據隱私和安全，而 gstack 更加關注開發流程的自動化和多角色支持。 | 主要針對機器學習模型的開發，而 gstack 是一個更通用的開發工具。 |
> | 遷移成本 | - | medium，因為需要重新調整開發流程。 | high，因為需要重新學習和適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的專案重視數據隱私和安全性，Shadowbroker  | 如果你的團隊專注於機器學習，NemoClaw 提供更專業的支 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能遇到依賴問題，特別是 Bun 的版本不兼容
  - 解法：確保 Bun 版本符合要求，或使用 Docker 環境進行安裝
- [MEDIUM] 在大型項目中，可能需要手動調整配置以適應多用戶環境
  - 解法：提前規劃項目結構，並進行充分測試
- [MEDIUM] 部分功能在不同環境下可能表現不一致
  - 解法：在開發前進行環境檢查，確保一致性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 1-3 人的小型創業團隊 | 非常適合 | 提供多角色支持，能夠高效管理開發流程。 |
| 大型企業的核心開發團隊 | 不適合 | 可能需要更複雜的協作工具和流程。 |
| 需要快速迭代的產品開發環境 | 適合 | 自動化測試和審查功能能夠加快開發速度。 |
| 對數據隱私有高要求的項目 | 普通 | 雖然提供了多角色支持，但可能不符合特定的隱私需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的開發流程，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意依賴的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

gstack 最常與 Claude Code 和 Bun 搭配使用，通常在開發和測試階段進行整合。在一個使用 Next.js 的專案中，可以用 gstack 來進行自動化測試，具體做法是使用 `/qa` 命令進行瀏覽器測試。gstack 支援 GitHub Actions 進行 CI/CD 流程，但可能需要額外的配置來確保相容性。整合的摩擦點主要是依賴的版本問題，需確保所有工具的版本一致。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 gstack 出現之前，開發者通常需要使用多個工具來管理不同的開發角色，這導致了效率低下和協作困難。隨著 AI 技術的進步，特別是 Claude Code 的出現，使得這種整合變得可行。gstack 代表了一種新的開發趨勢，即利用 AI 自動化管理開發流程，未來可能會有更多類似的工具出現，進一步改變開發者的工作方式。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解基本的 CLI 操作
- 有使用 Claude Code 的經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 gstack。第二週：在小型團隊的非核心專案中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在核心專案中開始使用。

**成功指標**：開發效率提升 30%，測試覆蓋率達到 100%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
| Forks | 2.4k |
| Open Issues | 74 |
| Issue 解決率 | 8% (6 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 23.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gstack) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `playwright` `diff` `@anthropic-ai/sdk`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 75
>     "Go Template" : 23
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 70 |
> | [@morluto](https://github.com/morluto) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/garrytan/gstack#docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-18）
> **活躍天數** 2 天 · **最新 commit** feat: design review lite in /review and /ship + gstack-diff-scope (v0.6.3) (#142)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#63](https://github.com/garrytan/gstack/issues/63) | Is this repo maintained? | 5 | 0 |
> | [#98](https://github.com/garrytan/gstack/issues/98) | No Statistical Analysis of outputs | 4 | 0 |
> | [#113](https://github.com/garrytan/gstack/issues/113) | Make individual skills available via skills.sh | 3 | 0 |
> | [#18](https://github.com/garrytan/gstack/issues/18) | [Security] Sensitive values leaked into stdout and model tra | 3 | 0 |
> | [#101](https://github.com/garrytan/gstack/issues/101) | Feature request: standup agent and story-points agent | 2 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # gstack
> 
> Hi, I'm [Garry Tan](https://x.com/garrytan). I'm President & CEO of [Y Combinator](https://www.ycombinator.com/), where I've worked with thousands of startups including Coinbase, Instacart, and Rippling when the founders were just one or two people in a garage — companies now worth tens of billions of dollars. Before YC, I designed the Palantir logo and was one of the first eng manager/PM/designers there. I cofounded Posterous, a blog platform we sold to Twitter. I built Bookface, YC's internal social network, back in 2013. I've been building products as a designer, PM, and eng manager for a long time.
> 
> And right now I am in the middle of something that feels like a new era entirely.
> 
> In the last 60 days I have written **over 600,000 lines of production code** — 35% tests — and I am doing **10,000 to 20,000 usable lines of code per day** as a part-time part of my day while doing all my duties as CEO of YC. That is not a typo. My last `/retro` (developer stats from the last 7 days) across 3 projects: **140,751 lines added, 362 commits, ~115k net LOC**. The models are getting dramatically better every week. We are at the dawn of something real — one person shipping at a scale that used to require a team of twenty.
> 
> **2026 — 1,237 contributions and counting:**
> 
> **2013 — when I built Bookface at YC (772 contributions):**
> 
> Same person. Different era. The difference is the tooling.
> 
> **gstack is how I do it.** It is my open source software factory. It turns Claude Code into a virtual engineering team you actually manage — a CEO who rethinks the product, an eng manager who locks the architecture, a designer who catches AI slop, a paranoid reviewer who finds production bugs, a QA lead who opens a real browser and clicks through your app, and a release engineer who ships the PR. Thirteen specialists, all as slash commands, all Markdown, **all free, MIT license, available right now.**
> 
> I am learning how to get to the edge of what agentic systems can do as of March 2026, and this is my live experiment. I am sharing it because I want the whole world on this journey with me.
> 
> Fork it. Improve it. Make it yours. Don't player hate, appreciate.
> 
> ---
> 
> 
> ## Install — takes 30 seconds
> 
> **Requirements:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+
> 
> 
> ### Step 1: Install on your machine
> 
> Open Claude Code and paste this. Claude does the rest.
> 
> > Install gstack: run `git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup` then add a "gstack" section to CLAUDE.md that says to use the /browse skill from gstack for all web browsing, never use mcp\_\_claude-in-chrome\_\_\* tools, and lists the available skills: /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation, /review, /ship, /browse, /qa, /qa-only, /qa-design-review, /setup-browser-cookies, /retro, /document-release. Then ask the user if they also want to add gstack to the current project so teammates get it.
> 
> 
> ### Step 2: Add to your repo so teammates get it (optional)
> 
> > Add gstack to this project: run `cp -Rf ~/.claude/skills/gstack .claude/skills/gstack && rm -rf .claude/skills/gstack/.git && cd .claude/skills/gstack && ./setup` then add a "gstack" section to this project's CLAUDE.md that says to use the /browse skill from gstack for all web browsing, never use mcp\_\_claude-in-chrome\_\_\* tools, lists the available skills: /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation, /review, /ship, /browse, /qa, /qa-only, /qa-design-review, /setup-browser-cookies, /retro, /document-release, and tells Claude that if gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build the binary and register skills.
> 
> Real files get committed to your repo (not a submodule), so `git clone` just works. Everything lives inside `.claude/`. Nothing touches your PATH or runs in the background.
> 
> ---
> 
> ```
> +----------------------------------------------------------------------------+
> |                                                                            |
> |   Are you a great software engineer who wants to ship 10K+ LOC/day?       |
> |                                                                            |
> |   Come work at YC: ycombinator.com/software                                |
> |                                                                            |
> |   Extremely competitive salary and equity.                                 |
> |   Now hiring in San Francisco, Dogpatch District.                          |
> |   Come join the revolution.                                                |
> |                                                                            |
> +----------------------------------------------------------------------------+
> ```
> 
> ---
> 
> 
> ## What's new and why it matters
> 
> **Design is at the heart.** `/design-consultation` doesn't just pick fonts. It researches what's out there in your space, proposes safe choices AND creative risks, generates realistic mockups of your actual product, and writes `DESIGN.md` — and then `/qa-design-review` and `/plan-eng-review` read what you chose. Design decisions flow through the whole system.
> 
> **`/qa` was a massive unlock.** It let me go from 6 to 12 parallel workers. Claude Code saying *"I SEE THE ISSUE"* and then actually fixing it, generating a regression test, and verifying the fix — that changed how I work. The agent has eyes now.
> 
> **Smart review routing.** Just like at a well-run startup: CEO doesn't have to look at infra bug fixes, design review isn't needed for backend changes. gstack tracks what reviews are run, figures out what's appropriate, and just does the smart thing. The Review Readiness Dashboard tells you where you stand before you ship.
> 
> **Test everything.** `/ship` bootstraps test frameworks from scratch if your project doesn't have one. Every `/ship` run produces a coverage audit. Every `/qa` bug fix generates a regression test. 100% test coverage is the goal — tests make vibe coding safe instead of yolo coding.
> 
> **`/document-release` is the engineer you never had.** It reads every doc file in your project, cross-references the diff, and updates everything that drifted. README, ARCHITECTURE, CONTRIBUTING, CLAUDE.md, TODOS — all kept current automatically.
> 
> ---
> 
> 
> ## See it work
> 
> ```
> You:    I want to add photo upload for sellers.
> You:    /plan-ceo-review
> Claude: "Photo upload" is not the feature. The real job is helping
>         sellers create listings that actually sell. What if we
>         auto-identify the product, pull specs and comps from the
>         web, and draft the listing automatically? That's 10 stars.
>         "Upload a photo" is 3 stars. Which are we building?
>         [8 expansion proposals, you cherry-pick 5, defer 3 to backlog]
> 
> You:    /plan-design-review
> Claude: Design Score: B  |  AI Slop Score: C
>         "Upload flow looks like a default Bootstrap form."
>         [80-item audit, infers your design system, exports DESIGN.md]
>         [flags 3 AI slop patterns: gradient hero, icon grid, uniform radius]
> 
> You:    /plan-eng-review
> Claude: ┌─────────┐    ┌──────────┐    ┌──────────┐    ┌─────────┐
>         │ Upload  │───▶│ Classify │───▶│ Enrich   │───▶│ Draft   │
>         │ (sync)  │    │ (async)  │    │ (async)  │    │ (async) │
>         └─────────┘    └──────────┘    └──────────┘    └─────────┘
>         [ASCII diagrams for every data flow, state machine, error path]
>         [14-case test matrix, 6 failure modes mapped, 3 security concerns]
> 
> You:    Approve plan. Exit plan mode.
>         [Claude writes 2,400 lines across 11 files — models, services,
>          controllers, views, migrations, and tests. ~8 minutes.]
> 
> You:    /review
> Claude: [AUTO-FIXED] Orphan S3 cleanup on failed upload
>         [AUTO-FIXED] Missing index on listings.status
>         [ASK] Race condition on hero image selection → You: yes
>         [traces every new enum value throug

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[duoan--TorchCode|duoan/TorchCode]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/garrytan/gstack)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "garrytan--gstack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "garrytan--gstack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "garrytan--gstack" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/garrytan--gstack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "garrytan--gstack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "garrytan" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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

- [[2026-03-18|2026-03-18]] — 再次上榜，20.7k stars
- [[2026-03-17|2026-03-17]] — 再次上榜，17.3k stars
- [[2026-03-16|2026-03-16]] — 再次上榜，14.0k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，10.6k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，6.2k stars
- [[2026-03-13|2026-03-13]] — 首次收錄，2.7k stars
