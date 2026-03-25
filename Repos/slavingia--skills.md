---
repo: slavingia/skills
url: https://github.com/slavingia/skills
owner: slavingia
owner_type: User
language: N/A
license: N/A
description: "Claude Code skills based on The Minimalist Entrepreneur by Sahil Lavingia"
homepage: "https://minimalistentrepreneur.com"
stars: 1076
stars_per_day: 1076
forks: 78
open_issues: 2
created: 2026-03-23
pushed_at: 2026-03-23
first_seen: 2026-03-25
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "技能插件"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-25
use_case: "提供基於《極簡主義創業者》的 Claude Code 技能，幫助創業者有效驗證和推進商業想法。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 21
readme_length: 1851
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-25"
star_history: "2026-03-25:1076"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "skills"
  - "slavingia/skills"
  - "提供基於《極簡主義創業者》的 Claude Code 技能，幫助創業者有效驗證和推進商業想法。"
---

# skills

**1.1k** stars · **1.1k** stars/天 · 建立 1 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/slavingia--skills");
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
> 提供基於《極簡主義創業者》的 Claude Code 技能，幫助創業者有效驗證和推進商業想法。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要系統化創業指導的初創企業創辦人和產品經理。
> **一句話重點** 這個專案提供了一個系統化的創業技能工具，能夠幫助創業者在不同階段獲得具體的指導和支持。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/slavingia--skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能插件" && p.file.name !== "slavingia--skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能插件 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、1 小時整合，得到針對性強的創業指導，值得嘗試。

## 專案簡介

這個專案提供了一系列基於《極簡主義創業者》一書的 Claude Code 插件技能，旨在幫助創業者從找到社群到持續成長的每一步。使用者可以透過簡單的指令，如 `/find-community` 來尋找合適的商業社群，或是用 `/validate-idea` 測試商業想法的可行性。這些技能按照書中的進程設計，從社群建立、想法驗證到產品推出和市場擴展，提供了一個系統化的創業指導。這樣的設計不僅讓使用者能夠逐步實現商業目標，還能在每一步中進行反思和調整，確保創業過程的靈活性和適應性。這個工具的賣點在於其針對性強，能夠幫助創業者在不同階段獲得具體的指導和支持。

## 重點功能

- 社群尋找 — 使用 `/find-community` 指令來尋找合適的商業社群。
- 想法驗證 — 使用 `/validate-idea` 測試商業想法的可行性。
- 最小可行產品 — 使用 `/mvp` 指令來幫助確定產品範圍。
- 首次顧客獲取 — 使用 `/first-customers` 指令來找到前 100 位顧客。
- 定價策略 — 使用 `/pricing` 指令來設定和調整價格。
- 行銷計畫 — 使用 `/marketing-plan` 指令來制定行銷策略。
- 可持續增長 — 使用 `/grow-sustainably` 指令來做出支出和擴張決策。
- 公司文化 — 使用 `/company-values` 指令來定義企業文化。

## 快速開始

1. 克隆專案至本地
```bash
git clone https://github.com/slavingia/skills.git ~/.claude/plugins/skills
```
2. 在 Claude Code 中安裝插件
```bash
/plugin install ~/.claude/plugins/skills
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1076 stars（1076/天），forks 78（7.2%），這是相對活躍的增長。作者 Sahil Lavingia 是《極簡主義創業者》的作者，這本書在創業圈內有一定影響力，提供了實用的創業框架。這個專案解決了創業者在早期階段缺乏指導的痛點，讓他們能夠快速獲得實用的技能和建議。社群對這個專案的反應熱烈，顯示出對於創業支持工具的需求。此工具的設計基於實用性，讓使用者能夠在實際操作中獲得即時的反饋和支持。

## 適合誰使用

**目標受眾**：需要系統化創業指導的初創企業創辦人和產品經理。

> [!example] 使用場景
> - 創業者用它來找到合適的商業社群，因為這能幫助他們獲得支持和靈感，快速進入市場。
> - 產品經理用它來驗證商業想法的可行性，因為這樣能夠降低風險，節省資源。
> - 市場行銷專員用它來制定有效的行銷計畫，因為這能幫助他們在產品市場契合後快速擴展。
> - 小型企業主用它來設定合理的價格，因為這能提高利潤並吸引更多顧客。

## 架構分析

這個專案的架構相對簡單，主要是作為 Claude Code 的插件，使用者只需通過命令行安裝。這樣的設計使得安裝和使用都非常直觀，降低了使用門檻。每個技能都是獨立的命令，使用者可以根據需要選擇使用。這種模組化的設計讓使用者能夠靈活地選擇所需的功能，而不必面對一個龐大的系統。這樣的架構也便於未來擴展，若有新的技能需求，可以輕鬆添加新的命令。

## 技術深入分析

這個專案的核心技術機制是作為 Claude Code 的插件，使用者可以透過簡單的命令來獲得創業指導。每個技能都是獨立的命令，這樣的設計使得使用者能夠靈活地選擇所需的功能。由於專案的設計是基於《極簡主義創業者》一書的內容，因此其內容和指導是經過實踐驗證的，能夠幫助創業者在實際操作中獲得即時的反饋。這個工具的效能主要依賴於使用者的商業想法和執行力，無法單純依賴工具本身。由於目前僅支援 Claude Code 環境，這可能會限制其使用範圍，但對於已經在使用 Claude Code 的用戶來說，這是一個非常實用的工具。整體來看，這個專案的設計是為了簡化創業過程，讓使用者能夠在每一步中獲得具體的指導和支持，這在創業初期是非常重要的。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和指令，但缺乏詳細的範例。安裝過程相對順暢，使用者只需執行幾個簡單的命令即可完成安裝。整體上，對於熟悉命令行的使用者來說，學習曲線較低，但對於新手可能需要一些額外的指導。

## 優缺點分析

> [!success] 優點
> - 提供針對性強的創業指導，幫助使用者在不同階段獲得具體建議。
> - 安裝簡單，使用者只需簡單的命令行操作即可開始使用。
> - 技能模組化設計，使用者可以根據需求選擇使用的功能。

> [!danger] 缺點
> - 目前僅限於 Claude Code 環境，無法在其他平台使用。
> - 功能依賴於使用者的商業想法和執行力，無法保證成功。
> - 缺乏豐富的文檔和範例，可能對新手不夠友好。

> [!warning] 注意事項
> - 目前僅支援 Claude Code 環境。
> - 需要用戶具備基本的命令行操作能力。
> - 插件功能依賴於使用者的商業想法和執行力。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合創業者在早期階段試用，但不建議用在生產環境的核心路徑上。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 剛起步的創業團隊 | 非常適合 | 提供了針對性的技能來幫助團隊在早期階段獲得支持和指導。 |
| 已經有產品但需要擴展的企業 | 適合 | 能夠幫助企業制定行銷計畫和獲取顧客。 |
| 需要系統化創業指導的個人創業者 | 非常適合 | 提供了從社群建立到產品推出的全過程指導。 |
| 大型企業的創新團隊 | 普通 | 可能需要更複雜的工具來支持其運作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到針對性強的創業指導，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，不存取敏感資料，且依賴於使用者的商業想法和執行力。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/slavingia--skills");
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
> const me = dv.page("Repos/slavingia--skills");
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
| Forks | 78 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-23 |
| 官方網站 | [Link](https://minimalistentrepreneur.com) |
| Repo 大小 | 21 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/slavingia/skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@slavingia](https://github.com/slavingia) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但目前只有 2 個開放問題，解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-23 ~ 2026-03-23）
> **活躍天數** 1 天 · **最新 commit** Update install instructions — clone locally first

## README 摘錄

> [!info]- 展開查看原文 README
> # The Minimalist Entrepreneur — Claude Code Skills
> 
> Claude Code skills based on [The Minimalist Entrepreneur](https://www.minimalistentrepreneur.com/) by Sahil Lavingia.
> 
> ## Installation
> 
> Clone the repo locally, then install as a Claude Code plugin:
> 
> ```bash
> git clone https://github.com/slavingia/skills.git ~/.claude/plugins/skills
> ```
> 
> Then in Claude Code:
> 
> ```
> /plugin install ~/.claude/plugins/skills
> ```
> 
> ## Skills
> 
> | Skill | Command | When to use |
> |-------|---------|-------------|
> | **Find Community** | `/find-community` | Looking for a business idea, trying to find your community |
> | **Validate Idea** | `/validate-idea` | Testing if a business idea is worth pursuing |
> | **MVP** | `/mvp` | Ready to build your first product, struggling with scope |
> | **First Customers** | `/first-customers` | Have a product, need to find your first 100 customers |
> | **Pricing** | `/pricing` | Setting prices, considering price changes |
> | **Marketing Plan** | `/marketing-plan` | Have product-market fit, ready to scale with content |
> | **Grow Sustainably** | `/grow-sustainably` | Making decisions about spending, hiring, or scaling |
> | **Company Values** | `/company-values` | Defining culture, preparing to hire |
> | **Minimalist Review** | `/minimalist-review` | Gut-checking any business decision |
> 
> ## The Minimalist Entrepreneur Journey
> 
> The skills follow the book's progression:
> 
> 1. **Community** — Start by finding your people
> 2. **Validate** — Make sure the problem is worth solving
> 3. **Build** — Ship a manual process, then productize it
> 4. **Sell** — Get to 100 customers one by one
> 5. **Price** — Charge something from day one
> 6. **Market** — Build an audience through content
> 7. **Grow** — Stay profitable, grow sustainably
> 8. **Culture** — Build the house you want to live in
> 9. **Review** — Apply minimalist principles to every decision

## 延伸閱讀

相關概念：[[創業]] · [[產品管理]] · [[行銷策略]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/slavingia/skills) · [官方網站](https://minimalistentrepreneur.com)

## 相關收錄

> [!note]- 直接競品（同子分類：技能插件）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能插件" AND file.name != "slavingia--skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "slavingia--skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "slavingia--skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "slavingia--skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["創業","產品管理","行銷策略"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "slavingia--skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/slavingia--skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "slavingia--skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "slavingia" AND file.name != "slavingia--skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/slavingia--skills");
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
> const me = dv.page("Repos/slavingia--skills");
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
> const me = dv.page("Repos/slavingia--skills");
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
> const me = dv.page("Repos/slavingia--skills");
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
> const me = dv.page("Repos/slavingia--skills");
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

> **2026-03-25** — 首次收錄
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

- [[2026-03-25|2026-03-25]] — 首次收錄，1.1k stars
