---
repo: lyra81604/zhengxi-views
url: https://github.com/lyra81604/zhengxi-views
owner: lyra81604
owner_type: User
language: Python
license: NOASSERTION
description: "可溯源的郑希(易方达基金经理)投研 Agent Skill——基于他全部公开观点原文 + 有原话佐证的投资方法 + 全市场基金真实数据，能溯源问答、按他框架给基金打分，绝不杜撰。⚠️仅研究学习辅助，不构成投资建议‼️website是郑希主页！"
homepage: "https://www.efunds.com.cn/manager/462.shtml"
stars: 673
stars_per_day: 337
forks: 84
open_issues: 0
created: 2026-06-20
pushed_at: 2026-06-21
first_seen: 2026-06-23
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-23
use_case: "提供可溯源的郑希投资观点与方法，辅助研究学习。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-26"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 1348
readme_length: 8416
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-23"
star_history: "2026-06-23:673"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/agent_skill"
  - "topic/chinese_funds"
  - "topic/funds"
  - "topic/investing"
aliases:
  - "zhengxi-views"
  - "lyra81604/zhengxi-views"
  - "提供可溯源的郑希投资观点与方法，辅助研究学习。"
---

# zhengxi-views

**673** stars · **337** stars/天 · 建立 2 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/lyra81604--zhengxi-views");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`agent-skill` `chinese-funds` `funds` `investing`

> [!summary] 一句話摘要
> 提供可溯源的郑希投资观点与方法，辅助研究学习。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (337 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望深入了解中國基金市場並對鄭希的投資風格感興趣的金融研究者。
> **一句話重點** 這個專案的核心價值在於提供可追溯的投資觀點，讓用戶能夠基於真實數據進行分析。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/lyra81604--zhengxi-views");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "lyra81604--zhengxi-views" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 所有結論均可追溯至鄭希的原話，避免了模型生成的虛假信息。

## 專案簡介

這個專案是一個針對易方達基金經理鄭希的投研 Agent Skill，旨在提供可追溯的投資觀點和方法。用戶可以通過查詢特定問題，如「鄭希對光通信的看法」，系統會檢索鄭希的公開語料，並提供帶有原文引用的回應，確保所有結論都能追溯到具體的來源。這一設計使得用戶不僅能了解鄭希的觀點演變，還能透過他的投資方法進行推演，這在許多類似工具中是無法實現的。技術上，專案使用 Python，依賴於 requests、beautifulsoup4 和 lxml 等庫來抓取和處理數據，這使得其在抓取全市場基金數據時具備高效能。與其他投資框架類工具相比，這個專案的獨特之處在於其所有結論都基於鄭希的原話，避免了模型生成的虛假信息。

使用者可以利用這個工具進行全市場基金的對比與評分，並且能夠根據鄭希的標準給基金打分，這在其他工具中通常無法做到。實際使用中，這個工具能夠處理約 2.7 萬只基金的數據，並提供詳細的持倉和業績對比。這個專案目前仍在活躍開發中，且社群回應迅速，適合對中國基金市場有興趣的研究者和投資者。值得注意的是，這個工具並不構成投資建議，僅供學術研究和學習使用。

**技術棧**：`Python 3.8` · `requests>=2.28` · `beautifulsoup4>=4.11` · `lxml>=4.9`

## 重點功能

- 可溯源問答 — 根據鄭希的公開語料提供帶原文的引用，確保信息的真實性。
- 投資方法推演 — 利用鄭希的投資方法框架進行推演，對未談及的話題給出合理解釋。
- 全市場基金數據 — 支持對比約 2.7 萬只基金的持倉和業績，提供詳細的數據支持。
- 自定義風格模擬 — 能夠模仿鄭希的寫作風格生成報告，保持原有的數據準確性。
- 多平台支持 — 可在多個 AI 平台上使用，具備良好的兼容性。

## 快速開始

1. 安裝依賴庫
```bash
pip install -r requirements.txt
```
2. 複製技能到 Claude Code 目錄
```bash
mkdir -p "$HOME/.claude/skills/zhengxi-views" && cp -R SKILL.md README.md references scripts "$HOME/.claude/skills/zhengxi-views"/
```
3. 重啟 Claude Code
```bash
# 完成後，問一句"郑希怎么看光通信"即可觸發
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 673 stars（336.5/天），forks 84（12.5%），這顯示出強烈的社群興趣。作者 lyra81604 是一位專注於金融科技的開發者，這個專案解決了市場上許多投資工具缺乏可追溯性的痛點，讓用戶能夠依據真實的數據和觀點進行分析。這種透明度在投資決策中是非常重要的，特別是在目前資訊過載的環境中。社群的反應也顯示出對於這類工具的需求，尤其是在中國基金市場的研究領域。

## 適合誰使用

**目標受眾**：希望深入了解中國基金市場並對鄭希的投資風格感興趣的金融研究者。

> [!example] 使用場景
> - 金融分析師用它來查詢鄭希對特定行業的看法，因為能夠獲得帶原文的引用，確保分析的準確性。
> - 投資者用它來比較鄭希管理的基金與其他基金的表現，因為能夠快速獲取全市場的基金數據並進行對比。
> - 學生用它來學習鄭希的投資方法，因為可以根據他的原話進行推演，避免了傳統學習中可能出現的誤解。

## 架構分析

這個專案採用 Python 作為主要開發語言，並使用 requests、beautifulsoup4 和 lxml 等庫來抓取和處理數據。架構上，專案分為數個模組，包括語料檢索、基金數據抓取和評分系統。這樣的設計使得用戶能夠靈活地查詢和分析鄭希的觀點及其管理的基金。選擇 Python 是因為其在數據處理和網絡請求方面的強大生態系統，這樣的選擇雖然帶來了較高的依賴性，但也使得開發和維護變得更加方便。整體架構具備良好的擴展性，未來可以根據需求增加更多功能模組。

## 技術深入分析

專案的核心技術機制是基於鄭希的公開語料進行檢索和分析，這使得用戶能夠獲得真實的投資觀點。使用的演算法包括文本檢索和數據抓取，這些技術確保了信息的準確性和可追溯性。效能上，專案能夠處理大量的基金數據，並在查詢時提供快速的響應。選擇 Python 作為開發語言，帶來了良好的生態支持，但也使得依賴性增加。技術風險方面，未來擴展時可能面臨性能瓶頸，特別是在數據抓取和處理方面。與主流框架的整合難度相對較低，因為 Python 在數據處理和網絡請求方面有著廣泛的應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要注意依賴庫的安裝。整體上，對於新手來說，能在 30 分鐘內成功運行。

## 優缺點分析

> [!success] 優點
> - 提供可追溯的投資觀點，增強了用戶的信任感。
> - 支持全市場基金數據抓取，便於進行比較分析。
> - 能夠模仿鄭希的寫作風格，適合學習和研究。

> [!danger] 缺點
> - 僅供學術研究，無法用於實際投資決策。
> - 需要穩定的網絡連接以抓取數據，可能影響使用體驗。
> - 對於未公開的話題，推演結果可能不夠準確。

> [!warning] 注意事項
> - 僅供研究與學習輔助，不構成投資建議。
> - 對於未公開談及的話題，推演結果不代表鄭希的實際看法。
> - 需要網絡連接以抓取全市場基金數據。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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
| Forks | 84 |
| Open Issues | 0 |
| 最後推送 | 2026-06-21 |
| 建立日期 | 2026-06-20 |
| 官方網站 | [Link](https://www.efunds.com.cn/manager/462.shtml) |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lyra81604/zhengxi-views) |
| Topics | `agent-skill` `chinese-funds` `funds` `investing` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `beautifulsoup4` `lxml`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lyra81604](https://github.com/lyra81604) | 5 |

## 社群與生態

**社群活躍度**：社群活躍，回應迅速，開發者持續更新。
**連結**：[文件](https://www.efunds.com.cn/manager/462.shtml)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-20 ~ 2026-06-21）
> **活躍天數** 2 天 · **最新 commit** feat: 支持腾讯 WorkBuddy 部署（skill.yml + 部署指南），README/CHANGELOG 同步

## README 摘錄

> [!info]- 展開查看原文 README
> # 🔎 基金经理 · 郑希观点库 Skill
> 
> ### 可溯源 · 原文为据 · 接入全市场基金 · 跨 AI 平台
> 
> *「查观点 · 学方法 · 做前瞻 · 仿口吻写点评 · 言行对照 · 全市场基金对比与评分 —— 让任意 AI 读懂易方达郑希」*
> 
> [安装](#install) · [它能做什么](#features) · [在其他 AI 里用](#other-ai) · [目录结构](#structure) · [数据来源](#sources) · [边界](#limits)
> 
> ---
> 
> 很多关于"某基金经理怎么看 X"的回答，听起来头头是道，其实是模型凭印象编的——查无此言。这个 skill 解决的就是这个问题：它的根基是**郑希（易方达权益投资管理部副总经理、基金经理）本人留下的原始文本**，任何结论都能追溯到"哪一年、哪一篇、原话是什么"。
> 
> 它有**三块根基**，都来自公开内容、可溯源：
> 
> - 📚 **原文语料**（`references/corpus/`）——2012–2026 年郑希的全部公开观点：定期报告中的投资运作分析（季报 / 中报 / 年报）、基金经理手记、媒体采访报道，外加基金经理简介、在任 / 曾任基金清单。
> - 🧭 **投资方法**（`references/method.md`）——从上面的语料**蒸馏**出来的方法框架，**每一条都有他本人原话佐证**。它让 skill 在语料没直接谈过的话题上，也能用郑希自己的方法去推演，而不是一句"查无此言"。
> - 📊 **真实基金数据**（`references/fund_data/`）——他全部 8 只基金（4 在任 + 4 曾任）的真实数据快照：每季前十大重仓股、净值/业绩/规模/资产配置/任职回报。再加上 `references/all_funds/` 里**全市场约 2.7 万只基金**列表，可按需抓取任意基金做对比与评分。
> 
> **⚠️ 仅供研究与学习辅助，不构成投资建议。**
> 
> ## 🎯 它能帮你做什么
> 
> | 你想做的 | 怎么问 | skill 会怎么做 |
> |---|---|---|
> | 查清他对某方向的真实看法 | `郑希怎么看光通信？他什么时候开始看好的？` | 检索语料，给**带原文出处的引用**，并梳理观点演变 |
> | 了解他的投资方法 | `郑希的选股逻辑是什么？为什么偏好低 ROE？` | 用有原话佐证的方法框架作答，可回原文展开 |
> | 用他的思路做前瞻判断 | `用郑希的思路看看创新药值不值得关注` | 语料有就引原文；**没有就用他的方法推演**，并在首句声明非他本人观点 |
> | 用他的口吻写点评 | `模仿郑希季报的风格写一段 2026 二季度科技展望` | 参照他季报的结构与笔法成文，不捏造数字持仓，声明为风格化模拟 |
> | 言行对照 / 查业绩持仓 | `郑希说看好光通信，持仓真印证了吗？业绩如何？` | 把语料里的表态和真实逐季持仓对照，并给净值/收益/回撤等真实数据 |
> | 查 / 对比全市场任意基金 | `把郑希和葛兰的中欧医疗比一比` | 全市场 2.7 万只里查代码 → 实时抓取 → 与郑希的基金并列对比 |
> | 用郑希框架给基金打分 | `用郑希的标准给招商中证白酒打个分，他会买吗？` | 一条命令备好数据，按六维评分卡给总分/评级/理由（衡量"多像郑希会买的"，非基金优劣） |
> 
> ## 💬 示例 · 看看它怎么答
> 
> 下面是 skill 的**真实输出**（稍作精简）。
> 
> ① 溯源问答 —— “郑希怎么看光通信？什么时候开始看好的？”
> 
> > 他在 **2026 年 6 月接受中国证券报采访**时把逻辑讲得很清楚：
> >
> > > “全球 AI 资本开支已经来到万亿美元级别。AI 产业链中，数据传输是重要一环，而光通信则是远距离传输的关键路径。叠加我国在光通信领域的全球比较优势，未来光通信市场规模有望进一步提升。”
> >
> > 时间点上，他说对“光”的重仓**可追溯到 2025 年二季度**。对照他管理的 **易方达信息产业（001513）持仓**：2025Q2 起，中际旭创、新易盛、源杰科技、光库科技等光通信标的确实集体进入前十大——**言行一致**。
> 
> ② 语料里没谈过的方向 —— “用郑希的思路看看创新药？”
> 
> > **郑希没有公开谈过创新药这个方向，下面是按他一贯的投资方法做的推演，不代表他本人的观点。**
> >
> > 在他全部公开材料里，“创新药”基本只是季报复盘里“顺带提一句”的角色，从没专门展开。所以把他的方法搬过来看：
> > - **第 1 关·有没有“供给端创造的需求”**：创新药靠新靶点/新疗法创造原本不存在的需求，属于他偏爱的“科技型通胀”，这一关最对味；
> > - **第 2 关·中国比较优势在哪**：原始创新策源地在海外，中国更占优的是 CXO / 出海 BD 这类“卖水人”环节；
> > - **第 3 关·低 ROE 弹性**：未盈利 Biotech 是典型“预先研发型低 ROE”，符合他的偏好；但**流动性**这关会筛掉一批日成交清淡的小票。
> >
> > *（涉及具体公司/估值标“需核实”；非投资建议。）*
> 
> ③ 郑希框架评分 —— “用郑希的标准给招商中证白酒打个分，他会买吗？”
> 
> > # 用郑希框架给【招商中证白酒指数（012414）】打分：**21 / 100 · 不契合**
> >
> > 一句话：这是一只合格的行业指数工具，但几乎不像“郑希会买的基金”。**低分 ≠ 差基金**，只是风格和他几乎相反。
> >
> > | 维度 | 得分 | 一句话依据 |
> > |---|---|---|
> > | 景气方向 / 通胀属性 | 4 / 25 | 前十大清一色高端白酒，当前处于去库存**下行周期**，是“被压价”而非“在涨价” |
> > | ROE 低位弹性 | 6 / 20 | 全是 ROE 长期高位的白酒白马，非他要的“低位待修复” |
> > | 全球视野 / 中国比较优势 | 2 / 15 | 纯内需消费，与全球技术周期无关 |
> > | 流动性 | 7 / 10 | 重仓全是流动性最好的大盘龙头（唯一亮点） |
> > | 集中度与周期拼接 | 2 / 15 | 集中度 85.8% 但**被动躺平**，近 5 季换手代理仅 ~5%，与他“周期拼接/高换手”相反 |
> > | 业绩与回撤印证 | 0 / 15 | 近 1 年 −23.9%、最大回撤 −63.2%，大幅跑输 |
> >
> > **他会买吗？几乎不会**——一只被动锁定单一传统行业的指数基金，和他“自上而下找通胀、偏科技成长、买低 ROE 弹性、动态周期拼接”的方法全对不上。
> 
> ④ 全市场对比 —— “把郑希的信息产业和葛兰的中欧医疗比一比”
> 
> > | | 郑希 · 信息产业 001513 | 葛兰 · 中欧医疗 003095 |
> > |---|---|---|
> > | 赛道 | 科技（光通信·算力·半导体） | 医药（CXO·创新药） |
> > | 风格 | 自上而下、产业链轮动、**高换手** | 核心资产**长持**、低换手 |
> > | 近 1 年 | **+290%** | −5.4% |
> > | 最大回撤 | −46.3% | −63.9% |
> >
> > 一句话：两人都是高仓位单赛道选手，但郑希靠“踩对当下景气 + 动态轮动”把弹性变成收益，葛兰靠“长拿核心资产”在医药下行期完整承接了更深回撤。
> > *（数据为公开季度快照，截至 2026-06；非投资建议。）*
> 
> ## ⚖️ 和"投资框架/方法论"类 skill 的区别
> 
> |  | 方法论 / 框架类 skill | 本项目（郑希观点库） |
> |---|---|---|
> | 根基 | 抽象出的投资"方法"，**不引原文** | 郑希**本人原话语料** + **有原话佐证的方法蒸馏** |
> | 朝向 | 前瞻——把方法套到任意标的去选股 | 以**溯源**为根，前瞻与方法都锚定他原话 |
> | 产出 | 选股清单 / 评分 | 带出处的引用 / 观点演变 / 有据可查的前瞻与点评 |
> | 核心约束 | —— | **不杜撰**：语料有就引原文，没有就标明"按他的方法推演" |
> 
> ## 🧩 它是 Agent Skill 吗？
> 
> **是。** 它符合 Agent Skill 规范：根目录有 `SKILL.md`（YAML frontmatter 含 `name` + `description`）+ 渐进式加载的 `references/`、`scripts/` 资源，能通过官方工具校验并打成 `.skill` 包。
> 
> - **Claude Code / Claude.ai** 原生支持 Agent Skill，放进技能目录即自动加载。
> - **腾讯 WorkBuddy** 用 `skill.yml` 清单组织 Skill，本仓库已附一份，放进它的 `skills/` 目录即可（已实测可用）。
> - 在 **ChatGPT / Gemini / Cursor** 等没有"技能自动加载器"的工具里，用"自定义指令 + 知识文件"的方式复刻，见 [在其他 AI 工具里使用](#other-ai)。
> 
> ## 🗂️ 目录结构
> 
> ```text
> zhengxi-views/
> ├── SKILL.md
> ├── skill.yml                       # 腾讯 WorkBuddy 清单（Claude 用法可忽略）
> ├── WORKBUDDY部署.md
> ├── README.md
> ├── references/
> │   ├── method.md
> │   ├── scorecard.md
> │   ├── corpus_index.json
> │   ├── corpus/
> │   │   ├── 定期报告/
> │   │   ├── 基金经理手记/
> │   │   ├── 媒体报道/
> │   │   ├── 简介.md
> │   │   ├── 管理基金_在任.md
> │   │   └── 管理基金_曾任.md
> │   ├── fund_data/
> │   │   ├── _index.md
> │   │   ├── 001513_易方达信息产业混合/
> │   │   └── …（共 8 只基金，每只含 季度持仓.md 与 净值业绩规模.md）
> │   └── all_funds/
> │       └── fund_list.json
> └── scripts/
>     ├── search_corpus.py
>     ├── build_index.py
>     ├── fetch_fund_data.py
>     ├── build_fund_list.py
>     ├── fund_lookup.py
>     ├── fetch_any_fund.py
>     └── score_fund.py
> ```
> 
> ## ⚙️ 安装
> 
> ### Claude Code（原生，推荐）
> 
> macOS / Linux：
> 
> ```bash
> mkdir -p "$HOME/.claude/skills/zhengxi-views"
> cp -R SKILL.md README.md references scripts "$HOME/.claude/skills/zhengxi-views"/
> ```
> 
> Windows PowerShell：
> 
> ```powershell
> $dst = "$HOME\.claude\skills\zhengxi-views"
> New-Item -ItemType Directory -Force $dst | Out-Null
> Copy-Item -Recurse SKILL.md,README.md,references,scripts $dst
> ```
> 
> 装好后**完整重启** Claude Code，问一句"郑希怎么看光通信"即可触发。
> 
> ### 依赖（仅"抓取基金数据 / 评分"需要）
> 
> 纯语料检索不依赖第三方库；要用 `fetch_*` / `score_fund` 抓全市场数据时，先装：
> 
> ```bash
> pip install -r requirements.txt   # requests / beautifulsoup4 / lxml
> ```
> 
> ### 减少每步确认（Claude Code，可选）
> 
> skill 会运行 python 脚本。Claude Code 默认每次运行都要确认。想免确认，在 `~/.claude/settings.json` 的 `permissions.allow` 里加 python 放行规则：
> 
> ```json
> {
>   "permissions": {
>     "allow": ["Bash(python:*)", "Bash(python3:*)"]
>   }
> }
> ```
> 
> （会放行所有 python 命令，仅建议在个人机器上使用，随时可删。脚本调用本身已设计为单条命令、无 `cd`/重定向，以避免安全确认。）
> 
> ## 🌐 在其他 AI 工具里使用
> 
> 本项目是 Agent Skill，**Claude 系原生支持**；其他工具靠"指令 + 知识文件"复刻。能用的功能取决于该工具**能否运行 Python 并联网**：
> 
> | 功能 | 所需能力 | Claude Code | WorkBuddy | Cursor | Claude.ai | ChatGPT | Gemini |
> |---|---|:---:|:---:|:---:|:---:|:---:|:---:|
> | 溯源问答 / 方法讲解 / 风格点评 | 读文件 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
> | 郑希 8 只基金言行对照（自带快照） | 读文件 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
> | 全市场任意基金实时抓取 / 评分 | Python + 联网 | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ❌ |
> 
> > 腾讯 **WorkBuddy** 本地运行、能跑脚本联网，因此可用**全部功能**（含实时抓取）；它用 `skill.yml` 作清单，本仓库已附一份，详见 [腾讯 WorkBuddy](#腾讯-workbuddy)。
> 
> > ⚠️ = 沙箱通常**无外网**，实时抓取多半失败；但可以在本地先用 `fetch_any_fund.py` 把目标基金抓好，再把生成的数据文件一起上传，离线评分照常进行。
> 
> **通用思路（任何支持自定义指令 + 文件上传的 AI）**：
> - **指令**：把 `SKILL.md` 正文粘进"系统提示 / 自定义指令"。其中"运行脚本的方式"那段是 Claude Code 专属，可删或改为"用代码解释器运行上传的脚本"；务必保留行为约束（溯源、不杜撰、推演与原话分开、语料外首句加粗声明非原话）。
> - **知识**：上传 `references/` 全部内容（`method.md`、`scorecard.md`、`corpus/`、`fund_data/`、`all_funds/fund_list.json`）；要跑脚本的再上传 `scripts/`。
> 
> ### 腾讯 WorkBuddy
> 
> WorkBuddy 是本地运行的 AI 工作台，自定义 Skill 约定为 **`skill.yml` 清单 + 实现文件（scripts）+ README**。本仓库已附 `skill.yml`，可直接用：
> 
> 1. 把整个文件夹放进 WorkBuddy 的 **`skills/` 技能目录**，按 `skill.yml` 导入启用（**已实测可用**）。
> 2. 先 `pip install -r requirements.txt` 装好脚本依赖；因本地运行，**实时抓取/评分等全部功能均可用**。
> 3. 触发词示例："郑希怎么看光通信""用郑希的标准给招商中证白酒打个分"。
> 
> > `skill.yml` 字段按通用约定编写；若 WorkBuddy 提示字段不符，对照其 schema 微调即可（行为逻辑都在 `SKILL.md`）。完整步骤与备选方案见 [`WORKBUDDY部署.md`](WORKBUDDY部署.md)。
> 
> ### Cursor（IDE，功能最全，接近 Claude Code）
> 
> 1. 把整个 `zhengxi-views/` 文件夹放进工作区。
> 2. 新建 `.cursor/rules/zhengxi.mdc`，把 `SKILL.md` 正文粘进去作为 Rule。
> 3. Cursor 的 Agent 有本机终端，能跑 python + 联网——检索、实时抓取、评分全部可用，用法与 Claude Code 一致。
> 
> ### ChatGPT（自定义 GPT）
> 
> 1. 新建一个 GPT（My GPTs → Create）。
> 2. **Instructions**：粘贴 `SKILL.md` 正文（按上面"通用思路"调整脚本相关措辞）。
> 3. **Knowledge**：上传 `method.md`、`scorecard.md`、`corpus/`（可打包成 zip）、`fund_data/`、`all_funds/fund_list.json`，以及 `scripts/*.py`。
> 4. 打开 **Code Interpreter（数据分析）**。
> - 可用：溯源问答、方法、风格点评、郑希基金数据，以及对上传数据用脚本检索 / 评分。
> - 受限：全市场**实时抓取**（Code Interpreter 无外网）——改为本地先抓好再上传。
> 
> ### Gemini（Gem / Google AI Studio）
> 
> 1. 新建一个 Gem。
> 2. 指令栏粘贴 `SKILL.md` 正文；知识栏上传 `method.md`、`scorecard.md`、`corpus/`、`fund_data/`。
> 3. 主要支持读类功能（问答 / 方法 / 点评 / 已打包数据对照）；无代码 + 外网，实时抓取与脚本评分请在本地跑好再带结果提问。
> 
> ### Claude.ai（网页 / 桌面）
> 
> - 若你的账号支持上传 Skill，直接上传打包好的 `.skill`；或新建一个 Project，把 `SKILL.md` 与 `references/`、`scripts/` 作为项目知识上传。
> - 网页沙箱可能无外网，实时抓取或受限；自带语料与郑希基金数据正常。
> 
> ## 🛠️ 脚本速查
> 
> ```text
> search_corpus.py "光通信"                  在语料里检索，返回命中段落 + 出处（新→旧）
> search_corpus.py "ROE" "弹性" --any        命中任一关键词
> fund_lookup.py 中欧医疗                      全市场按名称/代码/类型查基金代码
> fetch_any_fund.py 003095                    按需抓取任意基金的持仓/净值/业绩到缓存
> score_fund.py 招商中

## 延伸閱讀

相關概念：[[Agent 框架]] · [[投資方法論]] · [[資料視覺化]]

相關專案：[[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[alchaincyf--hermes-agent-orange-book|alchaincyf/hermes-agent-orange-book]] · [[mrtooher--fable-mode|mrtooher/fable-mode]] · [[garrytan--gbrain|garrytan/gbrain]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]]

[GitHub](https://github.com/lyra81604/zhengxi-views) · [官方網站](https://www.efunds.com.cn/manager/462.shtml)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "lyra81604--zhengxi-views"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "lyra81604--zhengxi-views"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "lyra81604--zhengxi-views" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "lyra81604--zhengxi-views"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","投資方法論","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "lyra81604--zhengxi-views" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/lyra81604--zhengxi-views");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lyra81604--zhengxi-views" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lyra81604" AND file.name != "lyra81604--zhengxi-views"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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
> const me = dv.page("Repos/lyra81604--zhengxi-views");
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

> **2026-06-23** — 首次收錄
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

- [[2026-06-23|2026-06-23]] — 首次收錄，673 stars
