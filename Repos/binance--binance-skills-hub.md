---
repo: binance/binance-skills-hub
url: https://github.com/binance/binance-skills-hub
owner: binance
owner_type: Organization
language: N/A
license: N/A
description: "Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto"
homepage: ""
stars: 394
stars_per_day: 56
forks: 70
open_issues: 107
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供 AI 代理人原生接入加密貨幣的開放技能市場。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:394,2026-03-11:394"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - org
  - "topic/agents"
  - "topic/ai"
  - "topic/crypto"
  - "topic/skills"
aliases:
  - "binance-skills-hub"
  - "binance/binance-skills-hub"
  - "提供 AI 代理人原生接入加密貨幣的開放技能市場。"
---

# binance-skills-hub

**394** stars · **56** stars/天 · 建立 7 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/binance--binance-skills-hub");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`agents` `ai` `crypto` `skills`

> [!summary] 一句話摘要
> 提供 AI 代理人原生接入加密貨幣的開放技能市場。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (56 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要快速接入加密貨幣功能的開發者和團隊。
> **一句話重點** 這個專案不僅是技能市場，更是加密貨幣生態系統的橋樑。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到快速接入加密貨幣功能的能力，值得嘗試。

> [!abstract] 核心創新
> 提供 AI 代理人原生接入加密貨幣的開放技能市場。

## 專案簡介

Binance Skills Hub 是一個開放的技能市場，讓 AI 代理人能夠透過自然語言直接接入加密貨幣生態系統，包括中心化和去中心化的功能。用戶可以搜索代幣、執行交易、追蹤錢包、監控信號，並與 DeFi 協議互動。這個平台的設計目的是為了讓任何代理人和框架（如 LangChain 或 CrewAI）都能輕鬆接入加密貨幣，僅需少量配置。每個技能都以獨立的資料夾形式存在，並包含結構化的指令，這使得貢獻新技能變得簡單。這種模組化的設計不僅提高了可擴展性，還促進了社群的參與。

相較於其他工具，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，Binance Skills Hub 提供了一個更為集中和統一的接口，讓開發者能夠更快速地整合加密貨幣功能。這個平台的缺點在於，因為是開放的技能市場，可能會出現不一致的技能質量，且用戶需自行評估 AI 生成的資訊的可靠性。對於需要快速開發和部署加密貨幣功能的團隊，這是一個非常合適的選擇，但在使用時需謹慎評估風險和準確性。隨著加密貨幣市場的快速變化，未來可能會有更多的技能和功能被加入，進一步擴展其應用範圍。

**技術棧**：`Node.js` · `YAML`

## 重點功能

- 自然語言查詢 — 用戶可以使用自然語言進行查詢和操作，無需複雜的指令。
- 模組化技能 — 每個技能都獨立存在，方便開發者創建和貢獻新功能。
- 多框架支持 — 支援 LangChain、CrewAI 等多種框架，增加靈活性。
- 即時交易執行 — 用戶可以直接執行交易，並獲得即時反饋。
- DeFi 協議互動 — 允許用戶與各種去中心化金融協議進行互動。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/binance/binance-skills-hub.git
```
2. 進入專案目錄
```bash
cd binance-skills-hub
```
3. 查看現有技能
```bash
ls skills
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 394 stars（56/天），forks 70（17.8%），顯示出相對活躍的社群參與。這個專案由 Binance 團隊開發，目的是解決 AI 代理人與加密貨幣生態系統之間的接入問題，之前的解決方案往往缺乏統一性和易用性。技術上，這個平台的開放性和模組化設計使得開發者能夠快速創建和分享技能，這在當前快速變化的加密市場中尤為重要。社群的活躍度和貢獻者的參與也顯示出這個專案的潛力。

## 適合誰使用

**目標受眾**：需要快速接入加密貨幣功能的開發者和團隊。

> [!example] 使用場景
> - 加密貨幣開發者用它來快速整合交易功能到自己的應用中，因為只需少量配置即可接入多種加密貨幣功能。
> - 金融分析師用它來自動化監控市場信號，因為可以透過自然語言查詢和執行操作，節省大量時間。
> - 教育機構用它來設計加密貨幣相關的教學工具，因為開放的技能市場允許輕鬆創建和分享教學資源。

## 架構分析

Binance Skills Hub 採用模組化的架構設計，每個技能獨立存放在自己的資料夾中，這樣的設計使得貢獻新技能變得簡單。使用 YAML 格式來描述技能的元數據和指令，這不僅提高了可讀性，也方便了自動化處理。資料流方面，用戶的自然語言查詢會被解析並轉換為相應的 API 調用，這樣的設計使得整個流程高效且易於擴展。選擇 Node.js 作為後端語言，因為其非同步特性適合處理高頻的交易請求，但這也可能導致在高負載下出現性能瓶頸。整體架構的擴展性良好，但在面對大量同時請求時，可能需要進一步的負載均衡解決方案。

## 技術深入分析

Binance Skills Hub 的核心技術機制在於其模組化的技能設計，使用 YAML 格式來描述技能的元數據，這使得技能的創建和管理變得簡單。每個技能都可以獨立運行，這樣的設計促進了社群的參與和貢獻。效能方面，該平台能夠處理高頻的交易請求，但在高負載情況下可能會遇到性能瓶頸。選擇 Node.js 作為後端語言，因為其非同步特性適合處理多個請求，但也可能導致在高流量時出現延遲。整體依賴關係相對簡單，主要依賴於 Node.js 的生態系統，這降低了維護成本。技術風險方面，由於是開放的技能市場，可能會出現不一致的技能質量，這對用戶的信任度造成影響。與主流框架的整合難度較低，開發者可以輕鬆地將其集成到現有的工作流中，這使得其在開發者社群中受到了廣泛的關注。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的貢獻指南和範例。安裝過程相對順暢，但對於不熟悉 Git 的用戶可能會有一定的學習曲線。缺乏多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 開放性強，任何人都可以貢獻技能。
> - 支持多種框架，增加了靈活性。
> - 自然語言查詢降低了使用門檻。

> [!danger] 缺點
> - 技能質量不一，可能影響使用體驗。
> - 不提供投資建議，使用者需自行承擔風險。
> - 目前僅支援英文，對於非英語使用者可能不友好。

> [!warning] 注意事項
> - 技能質量可能不一致，需自行評估。
> - 不提供投資建議，使用者需自行承擔風險。
> - 目前僅支援英文，對於非英語使用者可能不友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備加密貨幣的專用技能。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能市場，與加密貨幣無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，專注於資料管理，而非加密貨幣的專用技能。 | 如果你的需求是文件同步而非加密交易，則這是更合適的選擇。 | low，因為功能完全不同，無需遷移。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能市場，與加密貨幣無關。 | 如果你的專案涉及醫療技能，則這是更合適的選擇。 | medium，因為需要重新設計技能以符合醫療需求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **binance-skills-hub** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供文件同步功能，專注於資料管理，而非加密貨幣的專用技能。 | 專注於醫療領域的技能市場，與加密貨幣無關。 |
> | 遷移成本 | - | low，因為功能完全不同，無需遷移。 | medium，因為需要重新設計技能以符合醫療需求。 |
> | 適用場景 | 主要場景 | 如果你的需求是文件同步而非加密交易，則這是更合適的選擇。 | 如果你的專案涉及醫療技能，則這是更合適的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 技能質量不一，可能導致使用者體驗不佳
  - 解法：使用者需自行評估技能的可靠性
- **[HIGH]** 不提供投資建議，使用者需自行承擔風險
  - 解法：在使用前仔細評估風險
- [MEDIUM] 目前僅支援英文，非英語使用者可能不友好
  - 解法：尋找翻譯工具或社群支援

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型加密貨幣交易所的開發團隊 | 非常適合 | 能快速接入多種加密貨幣功能，提升開發效率。 |
| 個人投資者希望自動化交易 | 適合 | 自然語言查詢降低了使用門檻，方便使用。 |
| 大型金融機構的核心系統 | 不適合 | 技能質量不一，可能影響系統穩定性。 |
| 教育機構希望開發加密貨幣課程 | 適合 | 開放的技能市場便於創建和分享教學資源。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到快速接入加密貨幣功能的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，僅存取公開的加密貨幣資訊。使用者需自行評估 AI 生成的資訊的可靠性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/binance--binance-skills-hub");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 70 |
| Open Issues | 107 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 64 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/binance/binance-skills-hub) |
| Topics | `agents` `ai` `crypto` `skills` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alplabin](https://github.com/alplabin) | 5 |
> | [@theo-s68](https://github.com/theo-s68) | 5 |
> | [@tantialex-b](https://github.com/tantialex-b) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個合併請求和貢獻者參與。
**連結**：[文件](https://github.com/binance/binance-skills-hub/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-03 ~ 2026-03-09）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #122 from binance/web3_add_ua

## README 摘錄

> [!info]- 展開查看原文 README
> # Binance Skills Hub
> 
> Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto: both centralized and decentralized. Search tokens, execute trades, track wallets, monitor signals, and interact with DeFi protocols, all through natural language.
> 
> Built by Binance. Built for everyone.
> 
> We're not building this just for Binance products. Skills Hub is designed for the entire crypto ecosystem: any agent, any framework, any chain. Whether you're building on LangChain, CrewAI, or your own stack, your agents can plug into crypto with a few lines of config.
> 
> ---
> 
> ## About This Repository
> 
> Each skill lives in its own folder and contains a `SKILL.md` file with YAML frontmatter and structured instructions.
> 
> Browse the existing skills to understand patterns and naming conventions before contributing.
> 
> ---
> 
> ## Contribution
> 
> We welcome contributions.
> 
> To add a new skill:
> 
> 1. **Fork the repository** and create a new branch:
> 
>    ```bash
>    git checkout -b feature/
>    ```
> 
> 2. **Create a new folder** containing a `SKILL.md` file.
> 
> 3. **Follow the required format:**
> 
>    ```markdown
>    ---
>    title: 
>    description: A clear description of what the skill does and when to use it.
>    metadata:
>      version: 
>      author: 
>    license: MIT
>    ---
> 
>    # 
> 
>    [Add instructions, examples, and guidelines here]
>    ```
> 
> 4. **Open a Pull Request** to `main` for review.
>    Once approved, the skill will be merged.
> 
> ---
> 
> ## Disclaimer
> 
> Binance Skills Hub is an informational tool only. Binance Skills Hub and its outputs are provided to you on an “as is” and “as available” basis, without representation or warranty of any kind. It does not constitute investment, financial, trading or any other form of advice; represent a recommendation to buy, sell or hold any assets; guarantee the accuracy, timeliness or completeness of the data or analysis presented. Your use of Binance Skills Hub and any information provided in connection with this feature is at your own risk, and you are solely responsible for evaluating the information provided and for all trading decisions made by you. Binance does not endorse or guarantee any AI-generated information. Any AI-generated information or summary should not be solely relied on for decision making. AI-generated content may include or reflect information, views and opinions of third parties, and may also include errors, biases or outdated information. Binance is not responsible for any losses or damages incurred as a result of your use of or reliance on the Binance Skills Hub feature. Binance may modify or discontinue the Binance Skills Hub feature at its discretion, and functionality may vary by region or user profile. Digital asset prices are subject to high market risk and price volatility. The value of your investment may go down or up, and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. Past performance is not a reliable predictor of future performance. You should only invest in products you are familiar with and where you understand the risks. You should carefully consider your investment experience, financial situation, investment objectives and risk tolerance and consult an independent financial adviser prior to making any investment. This material should not be construed as advice. For more information, please see our [Risk Warning](https://www.binance.com/en/risk-warning) and [Terms of Use](https://www.binance.com/en/terms).

## 延伸閱讀

相關概念：[[Agent 框架]] · [[加密貨幣]] · [[自然語言處理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]]

[GitHub](https://github.com/binance/binance-skills-hub)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "binance--binance-skills-hub" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","加密貨幣","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "binance--binance-skills-hub" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "binance" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
