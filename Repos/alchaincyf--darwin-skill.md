---
repo: alchaincyf/darwin-skill
url: https://github.com/alchaincyf/darwin-skill
owner: alchaincyf
owner_type: User
language: HTML
license: N/A
description: "达尔文.skill —— 一个让你的Skill无限进化的系统：评估→改进→测试→保留或回滚 | Autoresearch-inspired autonomous skill optimization for Claude Code. Evaluate, improve, test, keep or revert."
homepage: ""
stars: 966
stars_per_day: 322
forks: 111
open_issues: 2
created: 2026-04-13
pushed_at: 2026-04-14
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "技能優化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "一個讓你的技能自動優化的系統，透過評估、改進、測試來保留或回滾變更。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-20"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1812
readme_length: 2838
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:816,2026-04-16:819,2026-04-17:966"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "darwin-skill"
  - "alchaincyf/darwin-skill"
  - "一個讓你的技能自動優化的系統，透過評估、改進、測試來保留或回滾變更。"
---

# darwin-skill

**819** stars · **410** stars/天 · 建立 2 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> 一個讓你的技能自動優化的系統，透過評估、改進、測試來保留或回滾變更。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (410 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要管理和優化大量技能的 AI 開發者和團隊。
> **一句話重點** 達爾文.skill 將自主實驗循環應用於技能優化，讓技能管理變得更高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--darwin-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能優化" && p.file.name !== "alchaincyf--darwin-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，能夠顯著提升技能管理效率，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新點在於將自主實驗循環應用於技能優化，並結合人類確認機制。

## 專案簡介

達爾文.skill 的核心機制是將自主實驗循環應用於技能優化，透過評估、改進和測試來確保技能的持續提升。使用者可以透過 `npx skills add alchaincyf/darwin-skill` 指令安裝，並在支持的 Agent 工具中啟動優化過程。系統會依據結構質量和實際效果進行雙重評估，並只保留那些能夠帶來實質改進的變更。這樣的設計不僅提高了技能的質量，還避免了因為不良變更而導致的退步，確保了技能的持續進化。技術上，這個專案受到了 Karpathy 的 autoresearch 啟發，使用了類似的評估和優化方法。

與傳統的技能審查相比，達爾文.skill 不僅關注格式的正確性，還重視實際效果，這使得它在處理大量技能時更具效率。與其他工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，達爾文.skill 提供了更為全面的優化循環，特別是在需要人類確認的環節上，這樣的設計使得使用者能夠更好地掌控技能的質量。這個系統在處理 60+ 個技能時特別有效，因為它能夠自動化繁瑣的維護工作，讓使用者專注於更高層次的創新。整體而言，達爾文.skill 是一個針對技能優化的高效解決方案，適合需要管理大量技能的開發者和團隊。

**技術棧**：`HTML` · `JavaScript`

## 重點功能

- 雙重評估 — 結構質量和實際效果的綜合評估，確保技能的高質量。
- 棘輪機制 — 只保留改進，避免因不良變更導致的退步。
- 人類確認 — 每次優化後需要用戶確認，確保技能的可靠性。
- 8 維度評估 — 包括結構和效果的多維度評分，提供全面的優化指導。
- 自動回滾 — 當新版本效果不佳時，自動回滾到最佳版本，保證系統穩定。

## 快速開始

1. 安裝達爾文.skill
```bash
npx skills add alchaincyf/darwin-skill
```
2. 啟動技能優化
```bash
在支持的 Agent 工具中說「優化所有skills」或「優化某個skill」
```
3. 手動確認改進
```bash
每次優化後查看 diff 和分數變化，進行確認
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 819 stars（410/天），forks 100（12.2%），顯示出強勁的增長潛力。作者 alchaincyf 之前有多個相關專案，這次的專案解決了在技能數量增加時，如何有效管理和優化的痛點。這個工具的出現正好填補了市場上對於技能優化系統的需求，尤其是在自動化和人類確認的結合方面。社群的反饋也顯示出對於這個工具的興趣，尤其是在技能管理的效率上。forks/stars 比率的 12.2% 表明許多人正在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要管理和優化大量技能的 AI 開發者和團隊。

> [!example] 使用場景
> - AI 開發者用它來優化多個 Agent 的技能，因為在技能數量超過 60 個時，手動維護變得極為繁瑣。
> - 產品經理用它來確保每個技能的效果持續提升，因為這樣能夠減少用戶流失率，提升用戶滿意度。
> - 測試工程師用它來驗證技能的改進效果，因為這樣能夠快速回滾不良變更，保證系統穩定性。

## 架構分析

達爾文.skill 的架構設計基於自主實驗循環，使用者可以透過簡單的指令安裝並啟動。系統的核心是評估和優化循環，這個循環包括結構評估和效果驗證，並在每次優化後需要用戶確認。這樣的設計確保了技能的質量不會因為自動化而下降。系統的擴展性良好，能夠處理大量技能，但在小型專案中可能顯得過於複雜。整體而言，這個架構能夠有效支持技能的持續進化。

## 技術深入分析

達爾文.skill 的核心技術機制是將自主實驗循環應用於技能優化，這意味著每次的改進都是基於可量化的評估結果。系統使用 8 維度評估來確保技能的結構和效果都能達到高標準。這樣的設計使得每次的改進都是可追溯的，並且能夠自動回滾不良變更。由於這個系統需要用戶的確認，這在一定程度上減少了完全自動化可能帶來的風險。技術上，這個工具的依賴性較低，主要基於 HTML 和 JavaScript，這使得它的安裝和使用都相對簡單。隨著技能數量的增加，這個系統能夠有效減少手動維護的工作量，特別適合大型團隊使用。整體而言，這個工具在技能優化方面提供了一個創新的解決方案，能夠有效提升技能的質量和管理效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指令和使用範例，整體品質良好。安裝過程相對順暢，沒有明顯的坑。文件中有多語言支持，方便不同語言的使用者。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 能夠自動化技能的優化過程，減少人力投入。
> - 提供雙重評估機制，確保技能質量。
> - 棘輪機制避免了不良變更的影響。

> [!danger] 缺點
> - 需要用戶手動確認每次的優化結果，可能影響效率。
> - 對於小型團隊或技能數量少的情況，可能顯得過於複雜。
> - 目前僅支持 SKILL.md 格式的技能，限制了靈活性。

> [!warning] 注意事項
> - 目前僅支持 SKILL.md 格式的技能。
> - 需要用戶手動確認每次的優化結果，可能影響效率。
> - 對於小型團隊或技能數量少的情況，可能顯得過於複雜。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於技能的版本控制，但不提供自動化優化功能。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供技能的安全性檢查，但缺乏全面的優化循環。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 針對特定技能的優化，但不支持多維度評估。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於技能的版本控制，但不提供自動化優化功能。 | 如果你的團隊需要強調版本控制而非自動化優化，則應選擇它。 | low，因為它的使用方式相對簡單，且不需要重大的改變。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供技能的安全性檢查，但缺乏全面的優化循環。 | 如果你的主要需求是安全性檢查而非優化，則這是更好的選擇。 | medium，因為需要重新考慮安全性策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **darwin-skill** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於技能的版本控制，但不提供自動化優化功能。 | 提供技能的安全性檢查，但缺乏全面的優化循環。 |
> | 遷移成本 | - | low，因為它的使用方式相對簡單，且不需要重大的改變。 | medium，因為需要重新考慮安全性策略。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要強調版本控制而非自動化優化，則應選擇它。 | 如果你的主要需求是安全性檢查而非優化，則這是更好的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在技能數量過多時，可能導致性能下降。
  - 解法：定期清理不必要的技能，保持系統輕量。
- **[HIGH]** 用戶確認過程可能影響優化效率。
  - 解法：在確認時集中處理多個技能的變更。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 團隊需要管理 100+ 個技能 | 非常適合 | 系統能夠自動化繁瑣的維護工作，提升效率。 |
| 小型團隊僅有 10 個技能 | 不適合 | 系統的複雜性可能超過實際需求。 |
| 需要快速驗證技能效果的測試工程師 | 適合 | 能夠快速回滾不良變更，保證系統穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠顯著提升技能管理效率，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不存取敏感資料，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

達爾文.skill 可以與多種 AI 開發工具搭配使用，特別是在技能優化的環節。實際整合範例包括在使用 Claude Code 的專案中，透過 `npx skills add alchaincyf/darwin-skill` 指令安裝後，便可開始優化技能。這個工具與主流 CI/CD 工具如 GitHub Actions 兼容，能夠輕鬆融入現有的開發流程。整合時最常見的問題是需要用戶手動確認，這可能會影響整體效率，但整體而言，與現有工具鏈的相容性良好。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在達爾文.skill 出現之前，技能的管理和優化主要依賴手動維護，這在技能數量增加時變得非常繁瑣。隨著 AI 技術的進步，對於技能的自動化優化需求日益增加。這個工具的出現正好填補了這一市場空白，提供了一個高效的解決方案。

未來，隨著 AI 技術的進一步發展，這類工具將會變得越來越重要，並可能引領技能管理的趨勢。

## 團隊採用指南

**建議團隊規模**：5-10 人的中型團隊

**前置技能**：
- 熟悉 JavaScript
- 了解 Git 基本操作

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫最佳實踐文檔，分享給團隊成員。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：技能的效果提升 30%，用戶滿意度提高。

> [!warning] 退出計畫
> 所有設定以標準格式保存，便於未來轉換至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
| Forks | 100 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-13 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/darwin-skill) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 13 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有多次提交和討論。
**連結**：[文件](https://skills.sh)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-13 ~ 2026-04-14）
> **活躍天數** 2 天 · **最新 commit** add: dark achievement + white gold result card templates

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/alchaincyf/darwin-skill/issues/1) | [建议] 能否适配一下Antigravity?或开源一个claude skill转 antigravity skill的 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **[English](README_EN.md)** | 中文
> 
> # 达尔文.skill
> 
> **像训练模型一样优化你的 Agent Skills。**
> 
> 受 [Andrej Karpathy 的 autoresearch](https://github.com/karpathy/autoresearch) 启发，将自主实验循环从模型训练搬到 Skill 优化领域。一个只能向前转的棘轮。
> 
> [](LICENSE)
> [](https://skills.sh)
> [](https://skills.sh)
> 
> ```
> npx skills add alchaincyf/darwin-skill
> ```
> 
> ---
> 
> ## 核心循环
> 
> ---
> 
> ## 为什么做这个
> 
> Agent Skill 生态在快速扩张。Claude Code、Codex、OpenClaw、Trae、CodeBuddy 等工具都支持 SKILL.md 格式。当你有 10 个 Skills 时可以手动维护；当你有 60+ 个 Skills 时，你需要一个系统。
> 
> 传统的 Skill 审查是**纯结构性的**：检查格式对不对、步骤有没有编号、路径能不能访问。但一个格式完美的 Skill，跑出来的效果可能很差。
> 
> 达尔文.skill 同时评估**结构质量**和**实际效果**，然后只保留真正有改进的修改。
> 
> ---
> 
> ## 从 autoresearch 到 Skill Optimizer
> 
> 这个项目直接受 Karpathy autoresearch 启发。autoresearch 的做法是：写一个 `program.md` 定义目标和约束，让 agent 自主生成和测试代码变更，只保留可测量的改进。
> 
> 我们把同样的思路搬到了 Skill 优化：
> 
> | autoresearch | 达尔文.skill | 为什么这样映射 |
> |:---|:---|:---|
> | `program.md` | 本 SKILL.md | 定义评估标准和约束规则 |
> | `train.py` | 每个待优化的 SKILL.md | 被优化的资产，每次实验只改它 |
> | `val_bpb` | 8 维加权总分（满分100） | 可量化的优化目标 |
> | `git ratchet` | keep / revert 机制 | 只保留有改进的 commit |
> | `test set` | test-prompts.json | 验证改进是否真的有效 |
> | 全自主运行 | **人在回路** | Skill 的好坏比 loss 更微妙，需要人的判断 |
> 
> ---
> 
> ## 五条核心原则
> 
> | # | 原则 | 说明 |
> |:---|:---|:---|
> | 01 | **单一可编辑资产** | 每次只改一个 SKILL.md，变量可控，改进可归因 |
> | 02 | **双重评估** | 结构评分（静态分析）+ 效果验证（跑测试看输出） |
> | 03 | **棘轮机制** | 只保留改进，自动回滚退步，分数只升不降 |
> | 04 | **独立评分** | 评分用子 agent，避免「自己改自己评」的偏差 |
> | 05 | **人在回路** | 每个 Skill 优化完后暂停，用户确认再继续下一个 |
> 
> ---
> 
> ## 8 维度评估体系
> 
> 总分 100。结构维度靠静态分析（60分），效果维度必须实测（40分）。
> 
> > 实测表现权重最高（25分）。Skill 写得再漂亮，跑出来效果不好就是零。
> 
> ---
> 
> ## 优化循环：5 个阶段
> 
> 系统在每个阶段内自主运行，但在阶段之间暂停等待人类确认。
> 
> **Phase 2 的核心逻辑**：
> 
> 1. 找出得分最低的维度
> 2. 针对该维度生成 1 个具体改进方案
> 3. 编辑 SKILL.md，git commit
> 4. 子 agent 独立重新评分
> 5. 新分 > 旧分 → 保留；否则 → git revert
> 6. 每个 Skill 完成后暂停，展示 diff + 分数变化，等用户确认
> 
> ---
> 
> ## 棘轮机制
> 
> 分数只能上升。每一轮要么改进 Skill，要么干净地回滚。不会随时间积累局部退化。
> 
> 轮次 2 的 75 分低于当前最优的 78 分，被自动回滚。有效基线始终锁定在 78，后续改进从 78 继续。
> 
> ---
> 
> ## 快速开始
> 
> ```bash
> npx skills add alchaincyf/darwin-skill
> ```
> 
> 安装后在任何支持 Skill 的 Agent 工具中说「优化所有skills」或「优化某个skill」就行。
> 
> 无法访问 GitHub 的朋友，可以直接下载 zip 包：[darwin-skill.zip](https://pub-161ae4b5ed0644c4a43b5c6412287e03.r2.dev/skills/darwin-skill.zip)，解压后把 SKILL.md 放到 `~/.claude/skills/darwin-skill/` 目录即可。
> 
> ---
> 
> ## 设计灵感
> 
> 这个项目的设计直接受 **Andrej Karpathy 的 [autoresearch](https://github.com/karpathy/autoresearch)** 启发。
> 
> 核心机制完全相同：**只保留可测量的改进，其余全部回滚。**
> 
> ---
> 
> ## 关于作者
> 
> | | |
> |:---|:---|
> | 🌐 官网 | [bookai.top](https://bookai.top) · [huasheng.ai](https://www.huasheng.ai) |
> | 𝕏 Twitter | [@AlchainHust](https://x.com/AlchainHust) |
> | 📺 B站 | [花叔](https://space.bilibili.com/14097567) |
> | ▶️ YouTube | [@Alchain](https://www.youtube.com/@Alchain) |
> | 📕 小红书 | [花叔](https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf) |
> | 💬 公众号 | 微信搜「花叔」 |
> 
> ---
> 
> ## 许可证
> 
> MIT
> 
> ---
> 
> **[女娲](https://github.com/alchaincyf/nuwa-skill)** 造 Skill。
> **达尔文** 让 Skill 进化。
> *只保留改进，时间就站在你这边。*
> 
> MIT License © [花叔 Huashu](https://github.com/alchaincyf)

## 延伸閱讀

相關概念：[[自動化]] · [[技能管理]] · [[性能優化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/alchaincyf/darwin-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：技能優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能優化" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "alchaincyf--darwin-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","技能管理","性能優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--darwin-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--darwin-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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

> **2026-04-16** — 首次收錄
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

- [[2026-04-17|2026-04-17]] — 再次上榜，966 stars
- [[2026-04-16|2026-04-16]] — 首次收錄，816 stars
