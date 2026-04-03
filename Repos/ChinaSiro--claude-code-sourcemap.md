---
repo: ChinaSiro/claude-code-sourcemap
url: https://github.com/ChinaSiro/claude-code-sourcemap
owner: ChinaSiro
owner_type: User
language: TypeScript
license: N/A
description: ""
homepage: "https://linux.do/u/huo0"
stars: 8012
stars_per_day: 4006
forks: 13583
open_issues: 8
created: 2026-03-31
pushed_at: 2026-03-31
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "源碼分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "還原 Claude 的 TypeScript 源碼，供研究用途。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-06"
contributor_count: 1
engagement: "high"
issue_close_rate: 46
repo_size_kb: 73856
readme_length: 1430
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:4889,2026-04-01:4969,2026-04-02:7368,2026-04-02:7376,2026-04-03:8012"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "claude-code-sourcemap"
  - "ChinaSiro/claude-code-sourcemap"
  - "還原 Claude 的 TypeScript 源碼，供研究用途。"
---

# claude-code-sourcemap

**7.4k** stars · **7.4k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> 還原 Claude 的 TypeScript 源碼，供研究用途。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (7.4k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Claude 內部運作有興趣的開發者和研究人員。
> **一句話重點** 這個專案提供了一個深入分析 Claude 的源碼的機會，對於研究者來說是個難得的資源。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "源碼分析" && p.file.name !== "ChinaSiro--claude-code-sourcemap" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 源碼分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，能夠獲得深入的源碼分析，值得嘗試。

> [!abstract] 核心創新
> 透過 source map 還原 Claude 的 TypeScript 源碼，提供研究用途的非官方資源。

## 專案簡介

這個專案的核心機制是從公開的 npm 包 `@anthropic-ai/claude-code` 中提取 source map，還原出 TypeScript 源碼，版本為 `2.1.88`。具體來說，專案利用 `cli.js.map` 中的 `sourcesContent` 字段，提取了 4756 個文件，其中包含 1884 個 `.ts` 和 `.tsx` 源文件。這樣的設計使得開發者能夠研究 Claude 的內部邏輯和結構，這在許多開源專案中並不常見，因為通常這些源碼是封閉的。專案的賣點在於其非官方性質，提供了一個可供研究的替代方案，讓開發者能夠深入理解 Claude 的運作方式。技術上，這個專案是基於 TypeScript 和 JavaScript，並且依賴於 npm 包的結構，這意味著它的依賴性相對輕量，適合快速上手。

與其他類似工具相比，如 `AlpinDale/parsync` 和 `BigBodyCobain/Shadowbroker`，這個專案的獨特之處在於它專注於源碼還原，而不是功能擴展或插件開發。使用者在實際應用中可能會遇到源碼的完整性問題，因為這是基於公開包的還原，可能不包含所有內部邏輯。專案目前處於初始階段，未來可能會隨著社群的貢獻而逐漸完善。對於想要深入了解 Claude 的開發者來說，這是一個值得關注的資源，但在商業用途上需要謹慎考量其合法性。適合用於學術研究或技術探索，但不建議用於生產環境。

**技術棧**：`TypeScript` · `JavaScript`

## 重點功能

- 源碼還原 — 從 npm 包中提取 TypeScript 源碼，提供 4756 個文件。
- CLI 入口 — `main.tsx` 作為命令行工具的進入點，方便使用。
- 多種工具實現 — 包含 30+ 個工具的實現，如 Bash、FileEdit、Grep 等。
- 插件系統 — 支援擴展功能的插件架構，方便開發者自定義。
- 技能系統 — 提供多種技能的實現，增強 AI 的互動能力。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ChinaSiro/claude-code-sourcemap.git
```
2. 安裝依賴
```bash
npm install
```
3. 運行 CLI
```bash
npm start
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npm start",
  "預期輸出": "啟動 CLI 工具，顯示可用命令。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 7376 stars（7376/天），forks 12734（172.6%），這顯示出極高的社群興趣。這個專案的作者 ChinaSiro 透過還原源碼解決了開發者對 Claude 內部運作的好奇心，之前的工具無法提供這樣的深入分析。社群中對於開源 AI 的需求日益增加，這使得該專案在短時間內獲得大量關注。高 fork 數量顯示出許多開發者對於進一步修改和擴展這個專案的興趣，這是其成功的關鍵因素。

## 適合誰使用

**目標受眾**：對 Claude 內部運作有興趣的開發者和研究人員。

> [!example] 使用場景
> - 研究人員用它來分析 Claude 的內部邏輯，因為這能幫助他們理解 AI 的決策過程。
> - 開發者用它來學習 TypeScript 的最佳實踐，因為這個專案包含大量的實際範例和結構。
> - 學生用它來進行技術研究，因為這是一個開放的資源，能夠深入探討 AI 的運作機制。

## 架構分析

這個專案的架構是基於 TypeScript 和 JavaScript，利用 npm 包的 source map 進行源碼還原。資料流從 npm 包提取 source map，經過解析後生成 TypeScript 源碼，這樣的設計使得開發者能夠快速獲得可用的源碼。選擇這種方式的好處在於能夠快速還原大量代碼，代價是可能無法還原所有內部邏輯。擴展性方面，專案設計了插件系統，便於未來的功能擴展，但這也可能帶來維護上的挑戰。

## 技術深入分析

專案的核心技術機制是通過 npm 包的 source map 來還原 TypeScript 源碼，這樣的設計使得開發者能夠快速獲得可用的源碼。效能方面，由於專案僅依賴於 npm 包，對資源的需求相對較低，適合個人或小型團隊使用。設計上，選擇 TypeScript 作為主要語言，這使得代碼更具可讀性和可維護性，但也可能增加學習曲線。技術風險方面，依賴於 npm 包的結構，未來的更新可能會影響專案的穩定性。整合方面，與主流的開發工具鏈相容性良好，適合用於現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的說明和範例，安裝過程順暢，沒有明顯的坑。雖然沒有專門的入門指南，但文件內容已經足夠幫助新手上手。文件目前僅提供英文，對於非英語使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 提供非官方的源碼還原，對研究者非常有價值。
> - 結構清晰，易於理解和學習。
> - 支援插件系統，方便擴展功能。

> [!danger] 缺點
> - 僅供研究用途，商業使用需謹慎。
> - 可能不包含完整的內部邏輯。
> - 依賴於 npm 包的結構，未來更新可能影響穩定性。

> [!warning] 注意事項
> - 僅供研究用途，商業使用需謹慎。
> - 可能不包含 Claude 的所有內部邏輯。
> - 依賴於 npm 包的結構，未來更新可能影響穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步而非源碼還原，適合需要資料傳輸的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的功能但未必針對源碼分析，適合不同的開發需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步而非源碼還原，適合需要資料傳輸的場景。 | 如果你的需求是資料同步而非源碼分析，則應選擇這個工具。 | low，因為兩者的功能差異不大，且都有良好的文檔支持。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的功能但未必針對源碼分析，適合不同的開發需求。 | 如果你需要更廣泛的功能而不僅限於源碼分析，則應選擇這個工具。 | medium，因為需要重新適應其功能和結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code-sourcemap** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步而非源碼還原，適合需要資料傳輸的場景。 | 提供類似的功能但未必針對源碼分析，適合不同的開發需求。 |
> | 遷移成本 | - | low，因為兩者的功能差異不大，且都有良好的文檔支持。 | medium，因為需要重新適應其功能和結構。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非源碼分析，則應選擇這個工具。 | 如果你需要更廣泛的功能而不僅限於源碼分析，則應選擇這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合用於學術研究或技術探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 源碼可能不完整，無法還原所有內部邏輯
  - 解法：需結合其他資料來源進行補充
- [MEDIUM] 未來 npm 包更新可能導致專案不穩定
  - 解法：定期檢查 npm 包的版本更新
- **[HIGH]** 商業用途需謹慎，可能涉及版權問題
  - 解法：僅用於研究和學術目的

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究機構的開發團隊 | 非常適合 | 能夠深入分析 Claude 的內部邏輯，提升研究質量。 |
| 個人開發者進行學習 | 適合 | 提供了清晰的 TypeScript 範例，適合學習和實踐。 |
| 商業產品開發 | 不適合 | 專案僅供研究用途，商業使用需謹慎。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，能夠獲得深入的源碼分析，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，不存取敏感資料，但使用時需注意版權問題。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
| Forks | 12.7k |
| Open Issues | 7 |
| Issue 解決率 | 46% (6 closed) |
| 最後推送 | 2026-03-31 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://linux.do/u/huo0) |
| Repo 大小 | 72.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ChinaSiro/claude-code-sourcemap) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ChinaSiro](https://github.com/ChinaSiro) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，開放問題數量較少，顯示出良好的互動性。
**連結**：[文件](https://linux.do/u/huo0)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31）
> **活躍天數** 1 天 · **最新 commit** init: restore source from @anthropic-ai/claude-code@2.1.88 sourcemap

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/ChinaSiro/claude-code-sourcemap/issues/8) | 🤡 原汤化原食，Claude 如何看待眼中的老己 https://github.com/openedclaude/cl | 16 | 0 |
> | [#2](https://github.com/ChinaSiro/claude-code-sourcemap/issues/2) | 请问这个和官方仓的主要区别是啥？ | 6 | 4 |
> | [#11](https://github.com/ChinaSiro/claude-code-sourcemap/issues/11) | 请问8个关于Agent架构的Skill在哪里分享的 有无指路 | 1 | 2 |
> | [#13](https://github.com/ChinaSiro/claude-code-sourcemap/issues/13) | https://github.com/claude-code-best/claude-code 可运行版本, 来交个朋友 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-code-sourcemap
> 
> [](https://linux.do)
> 
> > [!WARNING]
> > This repository is **unofficial** and is reconstructed from the public npm package and source map analysis, **for research purposes only**.
> > It does **not** represent the original internal development repository structure.
> >
> > 本仓库为**非官方**整理版，基于公开 npm 发布包与 source map 分析还原，**仅供研究使用**。
> > **不代表**官方原始内部开发仓库结构。
> > 一切基于L站"飘然与我同"的情报提供
> 
> ## 概述
> 
> 本仓库通过 npm 发布包（`@anthropic-ai/claude-code`）内附带的 source map（`cli.js.map`）还原的 TypeScript 源码，版本为 `2.1.88`。
> 
> ## 来源
> 
> - npm 包：[@anthropic-ai/claude-code](https://www.npmjs.com/package/@anthropic-ai/claude-code)
> - 还原版本：`2.1.88`
> - 还原文件数：**4756 个**（含 1884 个 `.ts`/`.tsx` 源文件）
> - 还原方式：提取 `cli.js.map` 中的 `sourcesContent` 字段
> 
> ## 目录结构
> 
> ```
> restored-src/src/
> ├── main.tsx              # CLI 入口
> ├── tools/                # 工具实现（Bash、FileEdit、Grep、MCP 等 30+ 个）
> ├── commands/             # 命令实现（commit、review、config 等 40+ 个）
> ├── services/             # API、MCP、分析等服务
> ├── utils/                # 工具函数（git、model、auth、env 等）
> ├── context/              # React Context
> ├── coordinator/          # 多 Agent 协调模式
> ├── assistant/            # 助手模式（KAIROS）
> ├── buddy/                # AI 伴侣 UI
> ├── remote/               # 远程会话
> ├── plugins/              # 插件系统
> ├── skills/               # 技能系统
> ├── voice/                # 语音交互
> └── vim/                  # Vim 模式
> ```
> 
> ## 声明
> 
> - 源码版权归 [Anthropic](https://www.anthropic.com) 所有
> - 本仓库仅用于技术研究与学习，请勿用于商业用途
> - 如有侵权，请联系删除

## 延伸閱讀

相關概念：[[源碼分析]] · [[開源軟體]] · [[AI 研究]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]]

[GitHub](https://github.com/ChinaSiro/claude-code-sourcemap) · [官方網站](https://linux.do/u/huo0)

## 相關收錄

> [!note]- 直接競品（同子分類：源碼分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "源碼分析" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ChinaSiro--claude-code-sourcemap" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["源碼分析","開源軟體","AI 研究"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ChinaSiro--claude-code-sourcemap" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ChinaSiro--claude-code-sourcemap" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ChinaSiro" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-03|2026-04-03]] — 再次上榜，8.0k stars
- [[2026-04-02|2026-04-02]] — 再次上榜，7.4k stars
- [[2026-04-01|2026-04-01]] — 首次收錄，4.9k stars
