---
repo: Narcooo/inkos
url: https://github.com/Narcooo/inkos
owner: Narcooo
owner_type: User
language: TypeScript
license: MIT
description: "Autonomous novel writing CLI agent — AI agents write, audit, and revise novels with human review gates"
homepage: ""
stars: 1652
stars_per_day: 275
forks: 335
open_issues: 37
created: 2026-03-12
pushed_at: 2026-03-18
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.4.9"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "讓 AI 自動寫小說，並透過人類審核確保品質。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 27
repo_size_kb: 1471
readme_length: 8100
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1652"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/agent"
  - "topic/ai_writing"
  - "topic/aigc_detection"
  - "topic/automated_storytelling"
  - "topic/chinese_novel"
aliases:
  - "inkos"
  - "Narcooo/inkos"
  - "讓 AI 自動寫小說，並透過人類審核確保品質。"
---

# inkos

**1.7k** stars · **275** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Narcooo--inkos");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.4.9` `easy-install`

`agent` `ai-writing` `aigc-detection` `automated-storytelling` `chinese-novel` `cli-tool` `creative-writing-ai` `novel-generation`

> [!summary] 一句話摘要
> 讓 AI 自動寫小說，並透過人類審核確保品質。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (275 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望利用 AI 助手提升小說創作效率的作家和編劇。
> **一句話重點** InkOS 不僅僅是寫作工具，而是一個完整的創作生態系統，能夠自動化處理小說創作的各個環節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Narcooo--inkos");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "Narcooo--inkos" && p.status !== "archived")
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
> **結論** 花 5 小時學、3 小時整合，得到高效的小說創作工具，值得投資。

> [!abstract] 核心創新
> InkOS 是一個多代理協作的小說創作系統，能夠自動生成、審計和修訂小說內容。

## 專案簡介

InkOS 是一個自動化小說寫作的 CLI 工具，透過多個 AI 代理協作完成小說創作。用戶可以透過簡單的指令，如 `inkos write next`，來生成下一章，這個過程中包含草稿生成、審計和修訂。每一章的創作由五個不同的代理負責，包括雷達（分析市場趨勢）、建築師（規劃結構）、寫手（生成內容）、審計員（檢查一致性）和修訂者（修正問題）。這樣的設計確保了創作的多樣性和一致性，並且能夠自動檢測和修正 AI 生成的痕跡，提升作品的原創性。

技術上，InkOS 使用 TypeScript 和 JavaScript，並依賴 Node.js 和 pnpm 作為包管理工具，這使得它在安裝和運行上相對輕量。與其他小說生成工具相比，如 OpenAI 的 GPT-3，InkOS 提供了更強的審計和修訂功能，能夠在多個維度上檢查草稿的質量，並且支持多模型路由，讓用戶可以根據需求選擇不同的 AI 模型進行創作。實際使用中，InkOS 能夠處理大規模的文本生成，並且提供了詳細的狀態追蹤和審計報告，這對於長篇小說的創作尤為重要。這個工具的成熟度目前為 beta 階段，適合對小說創作有需求的開發者或作家，尤其是那些希望結合 AI 助手進行創作的團隊。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >=20.0.0` · `pnpm >=9.0.0`

## 重點功能

- 多模型路由 — 支持為不同代理配置不同的 AI 模型，根據需求選擇最佳生成策略。
- 自動審計 — 透過 33 個維度檢查草稿，確保故事的一致性和質量。
- 創作簡報 — 能夠根據用戶提供的簡報自動生成故事設置和創作規則。
- 續寫功能 — 支持從已有文本導入章節，無縫接續創作。
- 同人創作支持 — 提供多種模式創建同人作品，並確保設置不矛盾。

## 快速開始

1. 全局安裝 InkOS
```bash
npm i -g @actalk/inkos
```
2. 初始化新書
```bash
inkos book create --title "吞天魔帝" --genre xuanhuan
```
3. 寫下一章
```bash
inkos write next 吞天魔帝
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 InkOS 並初始化新書",
  "指令": "inkos write next 吞天魔帝",
  "預期輸出": "生成下一章的草稿，並進行審計和修訂。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1652 stars（275/天），forks 335（20.3%），顯示出強烈的社群參與。這個專案由 Narcooo 開發，他在 AI 和寫作工具方面有豐富的經驗。InkOS 解決了傳統小說創作過程中的多重挑戰，特別是在質量控制和創作效率方面，這在以往的工具中並不常見。近期的推廣和社群討論也促進了它的曝光度，特別是在 AI 寫作的熱潮中。這個工具的設計使得它能夠靈活應對不同的寫作需求和風格，並且能夠在多個平台上運行，進一步擴大了其適用範圍。

## 適合誰使用

**目標受眾**：希望利用 AI 助手提升小說創作效率的作家和編劇。

> [!example] 使用場景
> - 小說作家用它來自動生成小說章節，因為它能夠在保持故事一致性的同時提高創作效率。
> - 編劇用它來審核和修訂劇本，因為它的多維度審計功能能夠檢查劇情的連貫性和角色發展。
> - 創業團隊用它來快速生成市場趨勢分析報告，因為它的雷達代理能夠即時提供讀者偏好的數據支持。

## 架構分析

InkOS 採用多代理架構，每個代理負責特定任務，這樣的設計提高了系統的靈活性和擴展性。資料流從用戶輸入開始，經過雷達代理分析市場趨勢，建築師規劃結構，寫手生成內容，審計員檢查質量，最後由修訂者進行修正。這種分工使得每個代理可以專注於自己的任務，提高了整體效率。選擇這種架構的代價是需要更多的配置和管理，但這樣的設計能夠在長期使用中提供更高的質量保證。擴展性方面，隨著新代理的加入，系統能夠輕鬆適應新的需求和功能。

## 技術深入分析

InkOS 的核心技術機制是基於多代理協作的設計，每個代理專注於特定任務，如市場分析、內容生成和質量檢查。這種設計模式使得系統能夠靈活應對不同的創作需求，並且提高了創作的效率和質量。效能方面，InkOS 能夠處理大量文本生成，並且提供詳細的審計報告，這對於長篇小說的創作尤為重要。選擇 TypeScript 和 JavaScript 作為開發語言，讓開發者能夠快速上手並且易於維護，但也帶來了對 Node.js 和 pnpm 的依賴。技術風險方面，隨著用戶數量的增加，系統的穩定性和性能可能會受到挑戰，特別是在高並發的情況下。整合方面，InkOS 與現有的開發工具鏈（如 VS Code）相容性良好，並且能夠輕鬆集成到 CI/CD 流程中，這使得它在團隊合作中具備良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且包含範例。安裝過程相對順暢，但需要注意 Node.js 和 pnpm 的版本要求。文件目前僅提供英文和中文版本，對於多語言用戶來說是個加分項。

## 優缺點分析

> [!success] 優點
> - 多代理協作提高創作效率，確保質量。
> - 自動化審計功能能夠檢查多個維度，減少人為錯誤。
> - 支持多模型路由，靈活應對不同需求。

> [!danger] 缺點
> - 需要一定的技術背景才能有效配置和使用。
> - 對於不熟悉 CLI 的用戶來說，學習曲線較陡。
> - 目前功能仍在持續開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 需要 Node.js 20.0.0 或以上版本。
> - 依賴 pnpm 作為包管理工具，可能對不熟悉的用戶造成學習成本。
> - 目前僅支持 OpenAI 兼容的接口，對於其他模型的支持可能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Narcooo/OpenClaw](https://github.com/Narcooo/OpenClaw) | OpenClaw 提供了更廣泛的 AI 代理功能，但缺乏 InkOS 的專注於小說創作的審計和修訂流程。 |
| [OpenAI/gpt-3](https://github.com/OpenAI/gpt-3) | GPT-3 提供強大的文本生成能力，但缺乏 InkOS 的多代理協作和質量控制功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/gpt-3](https://github.com/OpenAI/gpt-3) | GPT-3 提供強大的文本生成能力，但缺乏 InkOS 的多代理協作和質量控制功能。 | 如果需要更強的文本生成能力，且不在意質量控制的話，可以選擇 GPT-3。 | medium - 需要重新設計創作流程以適應 GPT-3 的 API。 |
| [Narcooo/OpenClaw](https://github.com/Narcooo/OpenClaw) | OpenClaw 提供了更廣泛的 AI 代理功能，但缺乏 InkOS 的專注於小說創作的審計和修訂流程。 | 如果需要更靈活的 AI 代理功能，可以考慮使用 OpenClaw。 | low - 兩者之間的 API 和使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **inkos** | **gpt-3** | **OpenClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | GPT-3 提供強大的文本生成能力，但缺乏 InkOS 的多代理協作和質量控制功能。 | OpenClaw 提供了更廣泛的 AI 代理功能，但缺乏 InkOS 的專注於小說創作的審計和修訂流程。 |
> | 遷移成本 | - | medium - 需要重新設計創作流程以適應 GPT-3 的 API。 | low - 兩者之間的 API 和使用方式相似。 |
> | 適用場景 | 主要場景 | 如果需要更強的文本生成能力，且不在意質量控制的話，可以選擇  | 如果需要更靈活的 AI 代理功能，可以考慮使用 OpenCl |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對小說創作有需求的開發者或作家，尤其是希望結合 AI 助手進行創作的團隊。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下，可能會出現性能瓶頸，導致生成速度變慢。
  - 解法：減少同時運行的請求數量。
- [MEDIUM] 某些 AI 模型的兼容性問題，可能導致生成內容不符合預期。
  - 解法：確保使用的模型與 InkOS 兼容。
- [MEDIUM] 在使用過程中，可能會遇到配置錯誤導致的運行失敗。
  - 解法：使用 `inkos doctor` 命令檢查配置問題。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速生成和審核內容，適合小型團隊的靈活需求。 |
| 大型小說創作團隊 | 非常適合 | 多代理協作能夠有效管理和提升創作質量。 |
| 個人作家希望提高創作效率 | 適合 | 自動化的流程能夠節省大量時間。 |
| 對於不熟悉 CLI 的用戶 | 不適合 | 需要一定的技術背景才能有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的小說創作工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：InkOS 本身不需要高權限運行，主要依賴於 API 認證來訪問外部服務。對於敏感資料的存取有一定的安全性考量，但仍需注意 API 密鑰的保護。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
| Forks | 335 |
| Open Issues | 37 |
| Issue 解決率 | 27% (14 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-12 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Narcooo/inkos) |
| Topics | `agent` `ai-writing` `aigc-detection` `automated-storytelling` `chinese-novel` `cli-tool` `creative-writing-ai` `novel-generation` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Narcooo](https://github.com/Narcooo) | 104 |

**最新版本**：v0.4.9 (2026-03-17)

> [!info]- Release Notes
> - fix(test): increase npm pack test timeout for slow CI (ffb8146)
> - chore: bump version to 0.4.9 (16ccdf7)
> - fix(ci): use relative path for core import smoke test (03f7fcc)
> - fix(pnpm): keep workspace deps in source manifests (0a1ebae)
> - docs(skill): add multi-model routing section and set-model/show-models to command table (7e90ec5)
> - chore: bump version to 0.4.8 (3ee8a0a)
> - docs: add multi-model routing example to Configure section (CN + EN) (eac25de)
> - fix(release): stage canary publish before latest (2f60481)
> - fix(ci): use npm publish to ensure workspace:* replacement (#48) (816aacb)
> - docs: sync English README OpenClaw section with Chinese version (emoji + Claw branding) (4fe7dba)
> - docs: update OpenClaw section branding — use Claw naming and emoji (2c60547)
> - docs: fix OpenClaw section — npm users also have local skill, remove invalid clawhub install ./skills (6dff745)
> - docs: add local skill path to OpenClaw section, bump SKILL.md to v1.4.0 (b8b7f7f)
> - docs: replace hardcoded OpenAI examples with provider-agnostic placeholders (a111169)
> 
> **Full Changelog**: https://github.com/Narcooo/inkos/compare/v0.4.6...v0.4.9

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者積極回應問題。
**連結**：[文件](https://github.com/Narcooo/inkos#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-18）
> **活躍天數** 2 天 · **最新 commit** fix: English language pipeline across all agents

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#35](https://github.com/Narcooo/inkos/issues/35) | 建议：增强日志系统功能 | 1 | 3 |
> | [#53](https://github.com/Narcooo/inkos/issues/53) | agent模式并不能修改大纲文件 `bug` | 0 | 0 |
> | [#52](https://github.com/Narcooo/inkos/issues/52) | 长篇创作中 story 状态会被局部钩子污染，audit 虽能发现问题但无法纠偏，导致 writer 持续跑偏 | 0 | 1 |
> | [#51](https://github.com/Narcooo/inkos/issues/51) | [critical] 系统错误: 审稿输出格式异常，无法解析 `bug` | 0 | 1 |
> | [#50](https://github.com/Narcooo/inkos/issues/50) | 吞天魔帝方便发出来看看吗 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 自动化小说写作 CLI Agent
> 
>   
>   
>   
>   
> 
>   中文 | English
> 
> ---
> 
> Agent 写小说。写、审、改，全程接管。
> 
> ## 快速开始
> 
> ### 安装
> 
> ```bash
> npm i -g @actalk/inkos
> ```
> 
> ### 通过 OpenClaw 使用 🦞
> 
> InkOS 已发布为 [OpenClaw](https://clawhub.ai) Skill，可被任何兼容 Agent（Claude Code、OpenClaw 等）直接调用：
> 
> ```bash
> clawhub install inkos          # 从 ClawHub 安装 InkOS Skill
> ```
> 
> 通过 npm 安装或克隆本项目时，`skills/SKILL.md` 已包含在内，🦞 可直接读取——无需额外从 ClawHub 安装。
> 
> 安装后，Claw 可通过 `exec` 调用 InkOS 的所有原子命令（`draft`/`audit`/`revise`/`write next`），`--json` 输出结构化数据供 Claw 解析决策。也可以在 [ClawHub](https://clawhub.ai) 搜索 `inkos` 在线查看。
> 
> ### 配置
> 
> **方式一：全局配置（推荐，只需一次）**
> 
> ```bash
> inkos config set-global \
>   --provider  \
>   --base-url  \
>   --api-key  \
>   --model 
> 
> # 示例：OpenAI
> # inkos config set-global --provider openai --base-url https://api.openai.com/v1 --api-key sk-xxx --model gpt-4o
> # 示例：国内中转站 / 兼容接口
> # inkos config set-global --provider custom --base-url https://your-proxy.com/v1 --api-key sk-xxx --model gpt-4o
> # 示例：Anthropic
> # inkos config set-global --provider anthropic --base-url https://api.anthropic.com --api-key sk-ant-xxx --model claude-sonnet-4-20250514
> ```
> 
> 配置保存在 `~/.inkos/.env`，所有项目共享。之后新建项目不用再配。
> 
> **方式二：项目级 `.env`**
> 
> ```bash
> inkos init my-novel     # 初始化项目
> # 编辑 my-novel/.env
> ```
> 
> ```bash
> # 必填
> INKOS_LLM_PROVIDER=                               # openai / anthropic / custom（兼容 OpenAI 接口的都选 custom）
> INKOS_LLM_BASE_URL=                               # API 地址（支持中转站、智谱、Gemini 等）
> INKOS_LLM_API_KEY=                                 # API Key
> INKOS_LLM_MODEL=                                   # 模型名
> 
> # 可选
> # INKOS_LLM_TEMPERATURE=0.7                       # 温度
> # INKOS_LLM_MAX_TOKENS=8192                        # 最大输出 token
> # INKOS_LLM_THINKING_BUDGET=0                      # Anthropic 扩展思考预算
> ```
> 
> 项目 `.env` 会覆盖全局配置。不需要覆盖时可以不写。
> 
> **方式三：多模型路由（可选）**
> 
> 给不同 Agent 分配不同模型，按需平衡质量与成本：
> 
> ```bash
> # Writer 用 Claude（创意强），Auditor 用 GPT-4o（便宜快速）
> inkos config set-model writer claude-sonnet-4-20250514 --provider anthropic --base-url https://api.anthropic.com --api-key-env ANTHROPIC_API_KEY
> inkos config set-model auditor gpt-4o --provider openai
> inkos config show-models        # 查看当前路由
> ```
> 
> 未单独配置的 Agent 自动使用全局模型。
> 
> ### 写第一本书
> 
> ```bash
> inkos book create --title "吞天魔帝" --genre xuanhuan  # 创建新书
> inkos write next 吞天魔帝      # 写下一章（完整管线：草稿 → 审计 → 修订）
> inkos status                   # 查看状态
> inkos review list 吞天魔帝     # 审阅草稿
> inkos review approve-all 吞天魔帝  # 批量通过
> inkos export 吞天魔帝          # 导出全书
> inkos export 吞天魔帝 --format epub  # 导出 EPUB（手机/Kindle 阅读）
> ```
> 
>   
> 
> ---
> 
> ## 核心特性
> 
> ### 多维度审计 + 去 AI 味
> 
> 连续性审计员从 33 个维度检查每一章草稿：角色记忆、物资连续性、伏笔回收、大纲偏离、叙事节奏、情感弧线等。内置 AI 痕迹检测维度，自动识别"LLM 味"表达（高频词、句式单调、过度总结），审计不通过自动进入修订循环。
> 
> 去 AI 味规则内置于写手 agent 的 prompt 层——词汇疲劳词表、禁用句式、文风指纹注入，从源头减少 AI 生成痕迹。`revise --mode anti-detect` 可对已有章节做专门的反检测改写。
> 
> ### 文风仿写
> 
> `inkos style analyze` 分析参考文本，提取统计指纹（句长分布、词频特征、节奏模式）和 LLM 风格指南。`inkos style import` 将指纹注入指定书籍，后续所有章节自动采用该风格，修订者也会用风格标准做审计。
> 
> ### 创作简报
> 
> `inkos book create --brief my-ideas.md` 传入你的脑洞、世界观设定、人设文档。建筑师 agent 会基于简报生成故事设定（story_bible.md）和创作规则（book_rules.md），而非凭空创作。
> 
> ### 续写已有作品
> 
> `inkos import chapters` 从已有小说文本导入章节，自动逆向工程 7 个真相文件（世界状态、角色矩阵、资源账本、伏笔钩子等），支持 `第X章` 和自定义分割模式、断点续导。导入后 `inkos write next` 无缝接续创作。
> 
> ### 同人创作
> 
> `inkos fanfic init --from source.txt --mode canon` 从原作素材创建同人书。支持四种模式：canon（正典延续）、au（架空世界）、ooc（性格重塑）、cp（CP 向）。内置正典导入器、同人专属审计维度和信息边界管控——确保设定不矛盾。
> 
> ### 多模型路由
> 
> 不同 Agent 可以走不同模型和 Provider。写手用 Claude（创意强），审计用 GPT-4o（便宜快速），雷达用本地模型（零成本）。`inkos config set-model` 按 agent 粒度配置，未配置的自动回退全局模型。
> 
> ### 守护进程 + 通知推送
> 
> `inkos up` 启动后台循环自动写章。管线对非关键问题全自动运行，关键问题暂停等人工审核。通知推送支持 Telegram、飞书、企业微信、Webhook（HMAC-SHA256 签名 + 事件过滤）。日志写入 `inkos.log`（JSON Lines），`-q` 静默模式。
> 
> ### 本地模型兼容
> 
> 支持任何 OpenAI 兼容接口（`--provider custom`）。Stream 自动降级——中转站不支持 SSE 时自动回退 sync。Fallback 解析器处理小模型不规范输出，流中断时自动恢复部分内容。
> 
> ### 可靠性保障
> 
> 每章自动创建状态快照，`inkos write rewrite` 可回滚任意章节。写手动笔前输出自检表（上下文、资源、伏笔、风险），写完输出结算表，审计员交叉验证。文件锁防止并发写入。写后验证器 11 条硬规则自动 spot-fix。
> 
> ---
> 
> ## 工作原理
> 
> 每一章由五个 Agent 接力完成：
> 
>   
> 
> | Agent | 职责 |
> |-------|------|
> | **雷达 Radar** | 扫描平台趋势和读者偏好，指导故事方向（可插拔，可跳过） |
> | **建筑师 Architect** | 规划章节结构：大纲、场景节拍、节奏控制 |
> | **写手 Writer** | 根据大纲 + 当前世界状态生成正文（两阶段：创意写作 → 状态结算） |
> | **连续性审计员 Auditor** | 对照 7 个真相文件验证草稿，33 维度检查 |
> | **修订者 Reviser** | 修复审计发现的问题 — 关键问题自动修复，其他标记给人工审核 |
> 
> 如果审计不通过，管线自动进入"修订 → 再审计"循环，直到所有关键问题清零。
> 
> ### 长期记忆
> 
> 每本书维护 7 个真相文件作为唯一事实来源：
> 
> | 文件 | 用途 |
> |------|------|
> | `current_state.md` | 世界状态：角色位置、关系网络、已知信息、情感弧线 |
> | `particle_ledger.md` | 资源账本：物品、金钱、物资数量及衰减追踪 |
> | `pending_hooks.md` | 未闭合伏笔：铺垫、对读者的承诺、未解决冲突 |
> | `chapter_summaries.md` | 各章摘要：出场人物、关键事件、状态变化、伏笔动态 |
> | `subplot_board.md` | 支线进度板：A/B/C 线状态、停滞检测 |
> | `emotional_arcs.md` | 情感弧线：按角色追踪情绪变化和成长 |
> | `character_matrix.md` | 角色交互矩阵：相遇记录、信息边界 |
> 
> 连续性审计员对照这些文件检查每一章草稿。如果角色"记起"了从未亲眼见过的事，或者拿出了两章前已经丢失的武器，审计员会捕捉到。
> 
>   
> 
> ### 创作规则体系
> 
> 写手 agent 内置 ~25 条通用创作规则（人物塑造、叙事技法、逻辑自洽、语言约束、去 AI 味），适用于所有题材。
> 
> 在此基础上，每个题材有专属规则（禁忌、语言约束、节奏、审计维度），每本书有独立的 `book_rules.md`（主角人设、数值上限、自定义禁令）和 `story_bible.md`（世界观设定），由建筑师 agent 创建书籍时自动生成。
> 
> ## 使用模式
> 
> InkOS 提供三种交互方式，底层共享同一组原子操作：
> 
> ### 1. 完整管线（一键式）
> 
> ```bash
> inkos write next 吞天魔帝          # 写草稿 → 审计 → 自动修订，一步到位
> inkos write next 吞天魔帝 --count 5 # 连续写 5 章
> ```
> 
> ### 2. 原子命令（可组合，适合外部 Agent 调用）
> 
> ```bash
> inkos draft 吞天魔帝 --context "本章重点写师徒矛盾" --json
> inkos audit 吞天魔帝 31 --json
> inkos revise 吞天魔帝 31 --json
> ```
> 
> 每个命令独立执行单一操作，`--json` 输出结构化数据。可被外部 AI Agent 通过 `exec` 调用，也可用于脚本编排。
> 
> ### 3. 自然语言 Agent 模式
> 
> ```bash
> inkos agent "帮我写一本都市修仙，主角是个程序员"
> inkos agent "写下一章，重点写师徒矛盾"
> inkos agent "先扫描市场趋势，然后根据结果创建一本新书"
> ```
> 
> 内置 13 个工具（write_draft、audit_chapter、revise_chapter、scan_market、create_book、get_book_status、read_truth_files、list_books、write_full_pipeline、web_fetch、import_style、import_canon、import_chapters），LLM 通过 tool-use 决定调用顺序。
> 
> ## 实测数据
> 
> 用 InkOS 全自动跑了一本玄幻题材的《吞天魔帝》：
> 
>   
> 
> | 指标 | 数据 |
> |------|------|
> | 已完成章节 | 31 章 |
> | 总字数 | 452,191 字 |
> | 平均章字数 | ~14,500 字 |
> | 审计通过率 | 100% |
> | 资源追踪项 | 48 个 |
> | 活跃伏笔 | 20 条 |
> | 已回收伏笔 | 10 条 |
> 
> ## 命令参考
> 
> | 命令 | 说明 |
> |------|------|
> | `inkos init [name]` | 初始化项目（省略 name 在当前目录初始化） |
> | `inkos book create` | 创建新书（`--genre`、`--platform`、`--chapter-words`、`--target-chapters`、`--brief ` 传入创作简报） |
> | `inkos book update [id]` | 修改书设置（`--chapter-words`、`--target-chapters`、`--status`） |
> | `inkos book list` | 列出所有书籍 |
> | `inkos genre list/show/copy/create` | 查看、复制、创建题材 |
> | `inkos write next [id]` | 完整管线写下一章（`--words` 覆盖字数，`--count` 连写，`-q` 静默模式） |
> | `inkos write rewrite [id] ` | 重写第 N 章（恢复状态快照，`--force` 跳过确认，`--words` 覆盖字数） |
> | `inkos draft [id]` | 只写草稿（`--words` 覆盖字数，`-q` 静默模式） |
> | `inkos audit [id] [n]` | 审计指定章节 |
> | `inkos revise [id] [n]` | 修订指定章节 |
> | `inkos agent ` | 自然语言 Agent 模式 |
> | `inkos review list [id]` | 审阅草稿 |
> | `inkos review approve-all [id]` | 批量通过 |
> | `inkos status [id]` | 项目状态 |
> | `inkos export [id]` | 导出书籍（`--format txt/md/epub`、`--output `、`--approved-only`） |
> | `inkos radar scan` | 扫描平台趋势 |
> | `inkos fanfic init` | 从原作素材创建同人书（`--from`、`--mode canon/au/ooc/cp`） |
> | `inkos config set-global` | 设置全局 LLM 配置（~/.inkos/.env） |
> | `inkos config show-global` | 查看全局配置 |
> | `inkos config set/show` | 查看/更新项目配置 |
> | `inkos config set-model  ` | 为指定 agent 设置模型覆盖（`--base-url`、`--provider`、`--api-key-env` 支持多 Provider 路由） |
> | `inkos config remove-model ` | 移除 agent 模型覆盖（回退到默认） |
> | `inkos config show-models` | 查看当前模型路由 |
> | `inkos doctor` | 诊断配置问题（含 API 连通性测试 + 提供商兼容性提示） |
> | `inkos detect [id] [n]` | AIGC 检测（`--all` 全部章节，`--stats` 统计） |
> | `inkos style analyze ` | 分析参考文本提取文风指纹 |
> | `inkos style import  [id]` | 导入文风指纹到指定书 |
> | `inkos import canon [id] --from ` | 导入正传正典到番外书 |
> | `inkos import chapters [id] --from ` | 导入已有章节续写（`--split`、`--resume-from`） |
> | `inkos analytics [id]` / `inkos stats [id]` | 书籍数据分析（审计通过率、高频问题、章节排名、token 用量） |
> | `inkos update` | 更新到最新版本 |
> | `inkos up / down` | 启动/停止守护进程（`-q` 静默模式，自动写入 `inkos.log`） |
> 
> `[id]` 参数在项目只有一本书时可省略，自动检测。所有命令支持 `--json` 输出结构化数据。`draft`/`write next` 支持 `--context` 传入创作指导，`--words` 覆盖每章字数。`book create` 支持 `--brief ` 传入创作简报（你的脑洞/设定文档），Architect 会基于此生成设定而非凭空创作。
> 
> ## 路线图
> 
> - [ ] `packages/studio` Web UI 审阅编辑界面（Vite + React + Hono）
> - [ ] 局部干预（重写半章 + 级联更新后续 truth 文件）
> - [ ] 自定义 agent 插件系统
> - [ ] 平台格式导出（起点、番茄等）
> 
> ## 参与贡献
> 
> 欢迎贡献代码。提 issue 或 PR。
> 
> ```bash
> pnpm install
> pn

## 延伸閱讀

相關概念：[[自動化]] · [[AI 寫作]] · [[多模態]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[garrytan--gstack|garrytan/gstack]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]]

[GitHub](https://github.com/Narcooo/inkos)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Narcooo--inkos" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 寫作","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Narcooo--inkos" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Narcooo--inkos");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Narcooo--inkos" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Narcooo" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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

> **2026-03-19** — 首次收錄
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

- [[2026-03-19|2026-03-19]] — 首次收錄，1.7k stars
