---
repo: benchflow-ai/awesome-evals
url: https://github.com/benchflow-ai/awesome-evals
owner: benchflow-ai
owner_type: Organization
language: N/A
license: NOASSERTION
description: "A curated, non-BS library of the best resources for building and evaluating AI agents — papers, blogs, talks, tools, benchmarks. Maintained by BenchFlow."
homepage: ""
stars: 564
stars_per_day: 141
forks: 42
open_issues: 1
created: 2026-06-24
pushed_at: 2026-06-28
first_seen: 2026-06-27
week: "2026-W26"
month: "2026-06"
category: "其他"
subcategory: "資源庫"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-27
use_case: "提供建立和評估 AI 代理的最佳資源，包含論文、部落格、工具和基準。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-06"
contributor_count: 4
engagement: "low"
issue_close_rate: 88
repo_size_kb: 1348
readme_length: 9986
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-27"
star_history: "2026-06-27:464,2026-06-27:465,2026-06-28:532,2026-06-28:533,2026-06-29:564,2026-06-29:564"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - org
  - easy_install
  - "topic/agent_evaluation"
  - "topic/ai_agents"
  - "topic/awesome"
  - "topic/awesome_list"
  - "topic/benchmarks"
aliases:
  - "awesome-evals"
  - "benchflow-ai/awesome-evals"
  - "提供建立和評估 AI 代理的最佳資源，包含論文、部落格、工具和基準。"
---

# awesome-evals

**564** stars · **141** stars/天 · 建立 4 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/benchflow-ai--awesome-evals");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`agent-evaluation` `ai-agents` `awesome` `awesome-list` `benchmarks` `evals` `llm` `llm-evaluation` `rl-environments`

> [!summary] 一句話摘要
> 提供建立和評估 AI 代理的最佳資源，包含論文、部落格、工具和基準。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (141 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要系統性評估 AI 產品並尋找高質量資源的開發者和產品經理。
> **一句話重點** 這個專案不僅是資源的集合，更是對於 AI 評估的系統性理解。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "資源庫" && p.file.name !== "benchflow-ai--awesome-evals" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 資源庫 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，得到高質量的 AI 評估資源，值得。

> [!abstract] 核心創新
> 這個專案提供了一個經過驗證的高質量資源庫，專注於 AI 代理的建立和評估。

## 專案簡介

這個專案是一個精心策劃的資源庫，專注於 AI 代理的建立和評估，提供超過 443 條經過驗證的鏈接和 146 條深入閱讀筆記。核心機制是通過深度引用爬蟲和針對性網路發現來整理學術和業界資源，並且每個條目都附有說明，讓使用者了解其重要性。這樣的設計避免了傳統資源庫的鏈接堆砌問題，確保每個資源都是經過篩選和驗證的。使用者可以透過 `PATTERNS.md` 中的實際代碼和範例來快速上手，這使得這個資源庫不僅是參考資料，更是一個實用的工具。

相較於其他類似的資源庫，如 `awesome` 系列，這個專案提供了更深入的分析和實用的應用案例，特別適合需要系統性評估 AI 產品的開發者和產品經理。使用者在實際操作中可能會發現，雖然資源豐富，但對於初學者來說，理解每個資源的背景和應用場景仍需要一定的時間。這個專案的社群活躍度高，開發者能夠透過 GitHub Issues 獲得快速的回應和支持。整體來看，這是一個適合中小型團隊和個人開發者的資源庫，特別是那些希望在 AI 領域進行深入研究和實驗的人。

## 重點功能

- 精選資源 — 超過 443 條經過驗證的鏈接，涵蓋論文、工具和博客。
- 深入閱讀筆記 — 提供 146 條深入的閱讀筆記，幫助使用者快速理解每個資源的價值。
- 實用範例 — `PATTERNS.md` 中包含實際可運行的代碼和範例，便於學習和實踐。
- 定期更新 — 資源庫持續更新，確保內容的新穎性和相關性。
- 社群支持 — 高活躍度的社群，能夠快速解決使用者的問題。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/benchflow-ai/awesome-evals.git
```
2. 查看資源列表
```bash
cat awesome-evals.md
```
3. 參考實用範例
```bash
cat PATTERNS.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 564 stars（141/天），forks 42（7.4%），顯示出穩定的增長趨勢。專案的維護者 BenchFlow 在 AI 評估領域有著良好的聲譽，並且這個資源庫填補了市場上對於高質量 AI 評估資源的需求。過去，許多開發者在尋找評估工具時面臨資源過多但質量參差不齊的問題，而這個專案提供了經過篩選的高質量資源，解決了這一痛點。社群的活躍度和快速的問題解決率也吸引了更多開發者的參與。這些因素共同促成了專案的快速增長。

## 適合誰使用

**目標受眾**：需要系統性評估 AI 產品並尋找高質量資源的開發者和產品經理。

> [!example] 使用場景
> - AI 產品經理用它來快速找到評估工具和最佳實踐，因為這樣能節省大量時間，避免在不可靠資源上浪費精力。
> - 研究人員用它來獲取最新的 AI 評估論文和工具，因為這些資源都是經過驗證的，能夠提高研究的質量和效率。
> - 開發者用它來學習如何設計和實施 AI 評估流程，因為提供的實際範例能夠幫助他們更快上手。

## 架構分析

這個專案的架構是基於一個精心策劃的資源庫，通過深度引用爬蟲和針對性網路發現來整理資料。資料流從學術論文和業界資源進行整合，並附上詳細的說明，確保使用者能夠快速理解每個資源的價值。這樣的設計使得使用者能夠在一個地方找到所有需要的資源，降低了尋找和篩選的時間成本。選擇這種方式的代價在於需要持續的維護和更新，以確保資源的有效性和可靠性。整體而言，這個資源庫的設計使得它在 AI 評估領域中具有較高的參考價值。

## 技術深入分析

這個專案的核心技術機制在於其精心策劃的資源庫，通過深度引用爬蟲和針對性網路發現來整理資料，確保每個資源都是經過驗證的。這樣的設計不僅提高了資源的質量，也降低了使用者在尋找資料上的時間成本。專案的架構選擇了以學術論文和業界資源為基礎，這使得它能夠涵蓋廣泛的主題和應用場景。由於資源的更新頻繁，使用者能夠獲得最新的資訊，這對於快速變化的 AI 領域尤為重要。設計上的取捨在於需要持續的維護和更新，以確保資源的有效性和可靠性。這個專案的整合性強，能夠與其他 AI 開發工具和資源庫相輔相成，提供更全面的支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了資源的概述和使用方式。安裝過程相對簡單，克隆專案後即可使用。雖然沒有專門的入門指南，但資源的組織結構使得使用者能夠快速找到所需內容。文件目前僅提供英文版本，對於非英語使用者可能會有一定的挑戰。

## 優缺點分析

> [!success] 優點
> - 資源經過驗證，質量高。
> - 提供實用範例，易於上手。
> - 社群活躍，問題解決迅速。

> [!danger] 缺點
> - 不包含直接的代碼實現。
> - 對於初學者來說，理解資源背景需要時間。
> - 目前僅支持英語內容。

> [!warning] 注意事項
> - 不包含直接的代碼實現，僅提供資源鏈接和筆記。
> - 對於初學者來說，理解每個資源的背景可能需要額外的時間。
> - 目前僅支持英語內容，對於非英語使用者可能有障礙。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人研究和學習，但不建議用於生產環境。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速找到 AI 評估工具的產品經理 | 非常適合 | 資源經過驗證，能夠節省大量時間。 |
| 在學術研究中尋找最新 AI 評估論文的研究人員 | 適合 | 提供高質量的學術資源，能夠提高研究質量。 |
| 剛接觸 AI 評估的開發者 | 普通 | 需要時間理解每個資源的背景和應用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到高質量的 AI 評估資源，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時不會對系統安全造成威脅。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個資源庫最常與 AI 開發工具和框架搭配使用，如 TensorFlow 和 PyTorch。在一個使用 TensorFlow 的專案中，開發者可以參考這個資源庫中的評估工具來設計自己的模型評估流程。這樣的整合能夠提高開發效率，並確保評估的系統性。與主流工具鏈的相容性良好，使用者可以輕鬆地將這些資源應用到現有的開發流程中。整合的摩擦點主要在於需要理解每個資源的背景和適用場景，這對於新手來說可能會有一定的挑戰。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個專案出現之前，開發者通常依賴於各種不一致的資源來評估 AI 產品，這導致了質量參差不齊的問題。隨著 AI 技術的快速發展，對於高質量評估工具的需求日益增加。這個專案的出現正好填補了這一空白，提供了一個系統化的資源庫，幫助開發者更有效地進行 AI 評估。

未來，隨著 AI 技術的進一步成熟，這個資源庫可能會持續擴展，並成為業界標準的參考資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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
| Forks | 42 |
| Open Issues | 1 |
| Issue 解決率 | 88% (7 closed) |
| 最後推送 | 2026-06-28 |
| 建立日期 | 2026-06-24 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/benchflow-ai/awesome-evals) |
| Topics | `agent-evaluation` `ai-agents` `awesome` `awesome-list` `benchmarks` `evals` `llm` `llm-evaluation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xdotli](https://github.com/xdotli) | 36 |
> | [@claude[bot]](https://github.com/claude[bot]) | 2 |
> | [@arafatkatze](https://github.com/arafatkatze) | 1 |
> | [@jxi5410](https://github.com/jxi5410) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-06-28）
> **活躍天數** 3 天 · **最新 commit** Bypass Claude App-token exchange; post via GITHUB_TOKEN (#29)

## README 摘錄

> [!info]- 展開查看原文 README
> # Awesome Agent Evals [](https://awesome.re)
> 
> > A curated, opinionated, **non-BS** library of the best resources for **building and evaluating AI agents** — papers, blog posts, talks, courses, tools, and benchmarks.
> 
> Maintained by [**BenchFlow**](https://benchflow.ai) ·
> 
> Most "awesome" lists are link dumps. This one is **annotated and verified**: every entry says *what it is and why it belongs*, URLs are checked, quotes are verbatim, and dead/abandoned tools are pruned (not silently listed). It was assembled by:
> 
> - a **depth-4 recursive citation crawl** (11.6k papers, ranked by in-degree) to surface the academic canon,
> - **targeted practitioner-web discovery** for the industry sources citation graphs miss (Eugene Yan, Han-Chung Lee, Hamel Husain, Shreya Shankar, Nathan Lambert, …),
> - **47 talks & podcasts transcribed and deep-noted** (verbatim + timestamps), and
> - **per-section gap audits** with adversarial verification.
> 
> **443+ curated links · 146 deep reading notes** (see [`notes/`](notes/)). Markers: 🆕 = released/updated 2025–2026 · ⚠️ = caveat. Contributions welcome — see [CONTRIBUTING](CONTRIBUTING.md).
> 
> > 📘 **Playbook:** [**PATTERNS.md**](PATTERNS.md) — real, runnable code + worked examples for LLM-as-judge (aligned to humans), pass@k/pass^k, error analysis, trajectory & world-state grading, CI gating, verifiable rewards, and more.
> 
> 
> ## 1 · Why we need evals
> 
> - **[The Second Half](https://ysymyth.github.io/The-Second-Half/)** — Shunyu Yao —  · *blog* — The bottleneck shifts from solving problems to *defining and evaluating* them. (also T2, T7)
> - **[An LLM-as-Judge Won't Save the Product, Fixing Your Process Will](https://eugeneyan.com/writing/eval-process/)** — Eugene Yan —  · *blog* — "Buying or building another evaluation tool won't save the product." Evals = the scientific method in disguise.
> - **[Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/)** — Hamel Husain —  · *blog* — The canonical "you need evals"; remove all friction from looking at your data; don't rely on generic frameworks.
> - **[A Field Guide to Rapidly Improving AI Products](https://hamel.dev/blog/posts/field-guide/)** — Hamel Husain —  · *blog* — "Error analysis is consistently the highest-ROI activity." The metric for an AI roadmap is experiments run.
> - **[In Defense of AI Evals, for Everyone](https://www.sh-reya.com/blog/in-defense-ai-evals/)** — Shreya Shankar —  · *blog* — Rebuts the anti-eval backlash; evals = the systematic measurement of application quality.
> - **[What We Learned from a Year of Building with LLMs](https://applied-llms.org/)** — Yan, Bischof, Frye, Husain, Liu, Shankar —  (Part II: ) · *blog* — The "intern test," genchi genbutsu, turning vibe-checks into assertions.
> - **[Big Tech's LLM Evals Are Just Marketing](https://www.interconnects.ai/p/evals-are-marketing)** — Nathan Lambert —  · *blog* — Why frontier-lab leaderboard numbers are marketing, not science.
> - **[AI Engineering pitfalls](https://huyenchip.com/2025/01/16/ai-engineering-pitfalls.html)** — Chip Huyen —  · *blog* — Common eval/AI-engineering mistakes from the *AI Engineering* author. (also T6)
> 
> - **[Evals Are NOT All You Need](https://www.oreilly.com/radar/evals-are-not-all-you-need/)** — Aishwarya Naresh Reganti & Kiriti Badam (O'Reilly Radar) —  · *blog* — The essential nuance piece: automated graders alone don't save you; you need a continuous-improvement flywheel of offline tests + production monitoring + real-user iteration. Pairs with Shreya's 'In Defense' to complete the backlash debate. 🆕
> - **[Why AI evals are the hottest new skill for product builders](https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill)** — Hamel Husain & Shreya Shankar with Lenny Rachitsky (Lenny's Podcast/Newsletter) —  · *talk* — The accessible 'why evals matter' on-ramp (live walkthrough of error analysis, open/axial coding) that mainstreamed evals to PMs in 2025; the apartment-leasing-bot anecdote is the canonical 'you can't vibe-check' story. 🆕
> - **[How evals drive the next chapter in AI for businesses](https://openai.com/index/evals-drive-next-chapter-of-ai/)** — OpenAI —  · *blog* — Frontier-lab framing of evals as turning fuzzy business goals into specs and measurable ROI; useful counterweight to Lambert's 'evals are marketing' and grounds the 'why' for enterprise readers. 🆕 ⚠(unverified URL)
> - **[Beyond vibe checks: A PM's complete guide to evals](https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete)** — Aman Khan (Arize) with Lenny Rachitsky —  · *blog* — The widely-shared PM-oriented argument for moving past 'looked good to me' vibe checks to systematic evals; one of the pieces that made evals a mainstream product skill in 2025. 🆕
> - **[A pragmatic guide to LLM evals for devs](https://newsletter.pragmaticengineer.com/p/evals)** — Gergely Orosz & Hamel Husain (The Pragmatic Engineer) —  · *newsletter* — Reaches the broad engineering audience with the core 'why': LLM non-determinism breaks traditional testing, so you need evals. High-distribution motivation piece co-written by Hamel. 🆕
> - **[Predicting model behavior before release by simulating deployment (Deployment Simulation)](https://openai.com/index/deployment-simulation/)** — OpenAI —  · *blog* — Concrete 2026 evidence for why fixed/static evals fail: models recognize when they're being tested and game test suites; replaying ~1.3M real conversations surfaced reward-hacking no fixed eval caught. Strong 'why evals must evolve' argument. 🆕 ⚠(unverified URL)
> - **[evals are surprisingly often all you need](https://x.com/gdb/status/1733553161884127435)** — Greg Brockman (OpenAI) —  · *blog* — The canonical one-liner ('evals are the new unit test') that anchors the whole 'why evals' thesis; frequently cited founding quote for the movement. Short but load-bearing.
> 
> **Must-reads:** Yao · Yan (eval-process) · Hamel (field-guide)
> 
> 
> ## Contents
> - [📘 Playbook — real code & worked examples (PATTERNS.md)](PATTERNS.md)
> - [⭐ Must-read starter set (read these first)](#-must-read-starter-set-read-these-first)
> - [1 · Why we need evals](#1-why-we-need-evals)
> - [2 · "If you can eval it, you have built it" — eval ⇄ capability ⇄ RL environment](#2-if-you-can-eval-it-you-have-built-it-eval-capability-rl-environment)
> - [3 · The model / harness / skill decomposition](#3-the-model-harness-skill-decomposition)
> - [4 · Observability & the output / eval space (the surfaces you can grade)](#4-observability-the-output-eval-space-the-surfaces-you-can-grade)
> - [5 · Evaluation infrastructure (the eval stack: datasets, scorers, online/offline, tracing, CI)](#5-evaluation-infrastructure-the-eval-stack-datasets-scorers-onlineoffline-tracing-ci)
> - [6 · Benchmark vs. eval (and benchmark integrity: contamination, saturation, label errors, leaderboard gaming)](#6-benchmark-vs-eval-and-benchmark-integrity-contamination-saturation-label-errors-leaderboard-gaming)
> - [7 · Evals & RL environments (verifiers, reward design, difficulty calibration, lifecycle)](#7-evals-rl-environments-verifiers-reward-design-difficulty-calibration-lifecycle)
> - [8 · LLM-as-judge & verifiers (alignment, biases, verifiable vs judgeable)](#8-llm-as-judge-verifiers-alignment-biases-verifiable-vs-judgeable)
> - [9 · Agent-specific evaluation (trajectories, tool use, multi-turn, world state, multi-agent, localization)](#9-agent-specific-evaluation-trajectories-tool-use-multi-turn-world-state-multi-agent-localization)
> - [10 · Safety / adversarial evaluation (prompt injection, jailbreaks, action-authorization, benchmark auditing)](#10-safety-adversarial-evaluation-prompt-injection-jailbreaks-action-authorization-benchmark-auditing)
> - [🎙 Talks, podcasts & slides (transcribed + noted)](#-talks-podcasts-slides-transcribed-noted)
> - [💬 Eval mentions](#-eval-mentions)
> - [Companies & landscape (eval / RL-environment market)](#companies-landscape-eval-rl-environment-market)
> - [Notes on provenance & gaps](#notes-on-provenance-gaps)
> - [Deep notes](#deep-notes)
> - [Contribu

## 延伸閱讀

相關概念：[[AI 評估]] · [[資源庫]] · [[開放科學]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[LiuMengxuan04--shushu-internship-tool|LiuMengxuan04/shushu-internship-tool]]

[GitHub](https://github.com/benchflow-ai/awesome-evals)

## 相關收錄

> [!note]- 直接競品（同子分類：資源庫）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "資源庫" AND file.name != "benchflow-ai--awesome-evals"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "benchflow-ai--awesome-evals"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "benchflow-ai--awesome-evals" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "benchflow-ai--awesome-evals"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 評估","資源庫","開放科學"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "benchflow-ai--awesome-evals" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "benchflow-ai--awesome-evals" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "benchflow-ai" AND file.name != "benchflow-ai--awesome-evals"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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
> const me = dv.page("Repos/benchflow-ai--awesome-evals");
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

> **2026-06-27** — 首次收錄
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

- [[2026-06-29|2026-06-29]] — 再次上榜，564 stars
- [[2026-06-28|2026-06-28]] — 再次上榜，532 stars
- [[2026-06-27|2026-06-27]] — 首次收錄，464 stars
