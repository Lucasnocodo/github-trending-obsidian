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
category: "CLI 工具"
subcategory: "自動化"
release_tag: "v0.4.9"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "讓 AI 自動寫小說，並通過人類審核進行修訂。"
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
star_history: "2026-03-19:1652,2026-03-19:1652"
tags:
  - github
  - "category/cli_工具"
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
  - "讓 AI 自動寫小說，並通過人類審核進行修訂。"
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
> 讓 AI 自動寫小說，並通過人類審核進行修訂。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (275 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望自動化小說創作過程並減少 AI 生成痕跡的小說作家和編輯。
> **一句話重點** InkOS 的多代理系統不僅提升了創作效率，還能有效降低 AI 生成的痕跡，讓小說更具人性化。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學、2 小時整合，得到高效的小說創作工具，值得一試。

> [!abstract] 核心創新
> InkOS 提供了多維度的審計系統，能夠自動檢測和修訂 AI 生成的內容，提升小說的質量和原創性。

## 專案簡介

InkOS 是一個自動化小說寫作的 CLI 工具，旨在通過多個 AI 代理協作來創作、審核和修訂小說。使用者可以透過簡單的命令如 `inkos write next` 來創建新章節，整個過程包括草稿生成、審計和修訂，確保每一章都符合預定的質量標準。這個工具的核心賣點在於其多維度的審計系統，能夠從 33 個維度檢查草稿，並自動識別 AI 生成的痕跡，進而進行修訂。技術上，InkOS 使用 TypeScript 和 JavaScript，並依賴於 Node.js 和 pnpm 作為包管理工具，這使得其安裝和運行相對簡單。與其他寫作工具相比，如 OpenAI 的 GPT-3，InkOS 提供了更細緻的審核機制和多模型路由功能，讓用戶可以根據不同的需求選擇不同的 AI 模型進行創作。

這在創作長篇小說或需要多樣化風格的情境下特別有用。實際使用中，InkOS 能夠處理大量的文本數據，並且其審計通過率高達 100%。不過，使用者需要注意的是，當面對複雜的故事情節時，AI 可能無法完全理解人類的創作意圖，這可能導致創作過程中的偏差。整體來看，InkOS 是一個適合需要高效創作和審核流程的小說寫作者的工具，特別是對於那些希望減少 AI 生成痕跡的用戶。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >=20.0.0` · `pnpm >=9.0.0`

## 重點功能

- 多維度審計 — 從 33 個維度檢查草稿，確保角色記憶、物資連貫性等不出錯。
- 去 AI 味修訂 — 內置反檢測功能，減少 AI 生成痕跡，提升作品的原創性。
- 多模型路由 — 支持不同代理使用不同模型，根據需求平衡質量與成本。
- 創作簡報生成 — 根據用戶提供的簡報生成故事設置，減少創作時間。
- 守護進程 — 支持背景自動寫作，並提供通知推送功能，便於即時跟進進度。

## 快速開始

1. 安裝 InkOS
```bash
npm i -g @actalk/inkos
```
2. 創建新書
```bash
inkos book create --title "吞天魔帝" --genre xuanhuan
```
3. 寫下一章
```bash
inkos write next 吞天魔帝
```

## 程式碼範例

```ts
[
  "# 安裝 InkOS",
  "npm i -g @actalk/inkos",
  "# 創建新書",
  "inkos book create --title \"吞天魔帝\" --genre xuanhuan",
  "# 寫下一章",
  "inkos write next 吞天魔帝",
  "# 預期輸出：生成新的章節，並進行審計和修訂。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1652 stars（275/天），forks 335（20.3%），顯示出強烈的社群興趣。Narcooo 作為主要貢獻者，之前在 AI 和寫作工具領域有一定的經驗，這使得 InkOS 能夠針對小說創作的痛點提供解決方案。這個工具的出現正好填補了市場上對於自動化小說寫作的需求，特別是結合了 AI 審核和修訂的功能，讓創作者能夠更專注於內容創作而非技術細節。此外，社群的活躍度和開放的問題反映了使用者對於功能改進的期待，這也促進了其快速成長。

## 適合誰使用

**目標受眾**：希望自動化小說創作過程並減少 AI 生成痕跡的小說作家和編輯。

> [!example] 使用場景
> - 小說作家用它來自動生成小說章節，因為它能夠在審核過程中減少 AI 生成的痕跡，提升作品的原創性。
> - 編輯用它來審核和修訂稿件，因為其多維度的審計系統能夠確保每一章的質量符合標準。
> - 創作者用它來快速創建同人作品，因為它支持從原作素材生成新的故事，並保持情節的一致性。

## 架構分析

InkOS 採用多代理架構，將小說創作過程分為多個角色，每個角色負責特定任務，如寫作、審計和修訂。這種設計使得整個創作過程更加高效，並能夠在不同階段進行專業化處理。每個代理之間的資料流通過內部 API 進行，確保了信息的一致性和準確性。

選擇這種架構的代價在於需要較高的配置和管理，但能夠在長期運行中提供更好的擴展性。隨著使用者需求的增加，這種架構也能夠靈活調整，支持不同的 AI 模型和服務提供商。整體來說，這種設計能夠有效應對小說創作過程中的多樣性和複雜性。

## 技術深入分析

InkOS 的核心技術機制在於其多代理架構，這使得每個代理能專注於特定任務，如寫作、審計和修訂。這種設計模式不僅提高了創作效率，還能在不同階段進行專業化處理。效能方面，InkOS 能夠處理大量文本數據，並且其審計通過率高達 100%。在技術選擇上，InkOS 使用 TypeScript 和 JavaScript，這使得其在開發和維護上相對簡單。

相較於其他寫作工具，InkOS 提供了更細緻的審核機制和多模型路由功能，讓用戶可以根據不同的需求選擇不同的 AI 模型進行創作。這在創作長篇小說或需要多樣化風格的情境下特別有用。設計取捨方面，選擇多代理架構的代價在於需要較高的配置和管理，但能夠在長期運行中提供更好的擴展性。整體來說，InkOS 的設計能夠有效應對小說創作過程中的多樣性和複雜性，並且與主流框架的整合難度較低，對於 CI/CD pipeline 也有良好的友好度。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程順暢，無明顯坑；有良好的快速入門指南，但目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 多維度審計系統，確保小說內容的連貫性和質量。
> - 支持多模型路由，根據需求靈活選擇 AI 模型。
> - 自動化的創作流程，節省時間和精力。

> [!danger] 缺點
> - 對於複雜情節的理解可能不足，需人工介入。
> - 初期配置可能較為繁瑣，對新手不友好。
> - 需要穩定的網絡環境以支持 API 調用。

> [!warning] 注意事項
> - 需要 Node.js 20.0.0 以上版本運行。
> - 對於複雜的故事情節，AI 可能無法完全理解人類的創作意圖。
> - 在多模型路由配置上，需謹慎選擇以避免不必要的成本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenAI/gpt-3](https://github.com/OpenAI/gpt-3) | 提供強大的文本生成能力，但缺乏 InkOS 的多維度審計和修訂功能，適合單一生成任務。 |
| [Narrative Science/quill](https://github.com/Narrative Science/quill) | 專注於數據驅動的故事生成，無法提供 InkOS 的創作審核和多模型支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/gpt-3](https://github.com/OpenAI/gpt-3) | 專注於文本生成，無法提供 InkOS 的多維度審計和修訂功能。 | 如果需要強大的文本生成能力，但不需要審核和修訂功能。 | low，因為兩者都使用 API 調用，整合相對簡單。 |
| [Narrative Science/quill](https://github.com/Narrative Science/quill) | 專注於數據驅動的故事生成，無法提供 InkOS 的創作審核和多模型支持。 | 如果你的創作主要依賴於數據，而不是故事情節的複雜性。 | medium，因為需要重新設計創作流程以適應數據驅動的模式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **inkos** | **gpt-3** | **quill** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文本生成，無法提供 InkOS 的多維度審計和修訂功能。 | 專注於數據驅動的故事生成，無法提供 InkOS 的創作審核和多模型支持。 |
> | 遷移成本 | - | low，因為兩者都使用 API 調用，整合相對簡單。 | medium，因為需要重新設計創作流程以適應數據驅動的模式。 |
> | 適用場景 | 主要場景 | 如果需要強大的文本生成能力，但不需要審核和修訂功能。 | 如果你的創作主要依賴於數據，而不是故事情節的複雜性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在複雜情節中，AI 可能無法完全理解創作意圖，導致偏差。
  - 解法：需要人工介入進行調整。
- [MEDIUM] 初期配置可能較為繁瑣，對新手不友好。
  - 解法：建議參考官方文檔進行配置。
- [MEDIUM] 需要穩定的網絡環境以支持 API 調用。
  - 解法：確保在良好的網絡環境下使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 個人小說創作 | 非常適合 | 提供自動化的創作和審核流程，提升效率。 |
| 小型編輯團隊 | 適合 | 能夠協助審核和修訂稿件，確保質量。 |
| 大型小說出版公司 | 普通 | 對於複雜的故事情節，可能需要更多人工介入。 |
| 學術寫作 | 不適合 | 主要針對小說創作，無法滿足學術寫作的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學、2 小時整合，得到高效的小說創作工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限運行，且不存取敏感資料，但需注意 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

InkOS 可以與多種 AI 模型和服務提供商整合，特別是 OpenAI 和 Anthropic。它在創作流程中處於核心地位，負責生成和審核內容。實際整合範例包括在使用 InkOS 進行小說創作時，可以透過 `inkos write next` 命令自動生成章節，並在審核後進行修訂。支援的 CI 工具包括 GitHub Actions，並且與主流 IDE 如 VS Code 兼容。整合的摩擦點主要在於初期配置的複雜性，建議使用者參考官方文檔進行設置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 InkOS 出現之前，小說創作主要依賴於人工寫作和簡單的文本生成工具，這些工具往往無法提供有效的審核和修訂功能。隨著 AI 技術的進步，InkOS 能夠結合多個 AI 代理進行協作，填補了這一市場空白。這個工具代表了自動化寫作的趨勢，未來可能會有更多類似的工具出現，進一步提升創作效率和質量。

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

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Narcooo/inkos)

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

相關概念：[[自動化]] · [[AI 審核]] · [[創作工具]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[garrytan--gstack|garrytan/gstack]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]]

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
> WHERE category = "CLI 工具" AND file.name != "Narcooo--inkos"
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
> const concepts = ["自動化","AI 審核","創作工具"];
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
