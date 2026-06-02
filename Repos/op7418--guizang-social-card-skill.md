---
repo: op7418/guizang-social-card-skill
url: https://github.com/op7418/guizang-social-card-skill
owner: op7418
owner_type: User
language: HTML
license: AGPL-3.0
description: "🪧 Claude Code / Codex skill — generate Xiaohongshu carousels & WeChat 21:9+1:1 cover pairs. Editorial × Swiss visual systems, 28 layouts, 10 themes, single-file HTML → PNG. 小红书图文 + 公众号封面对"
homepage: "https://github.com/op7418/guizang-social-card-skill"
stars: 2423
stars_per_day: 485
forks: 245
open_issues: 2
created: 2026-05-27
pushed_at: 2026-05-27
first_seen: 2026-05-29
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "社交媒體工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-29
use_case: "生成小紅書和微信封面的圖文卡片，適合多種社交媒體需求。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-05"
contributor_count: 0
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 1933
readme_length: 9883
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-29"
star_history: "2026-05-29:783,2026-05-30:1168,2026-05-31:1625,2026-06-01:2062,2026-06-02:2423"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
  - "topic/agent_skill"
  - "topic/ai_agent"
  - "topic/anthropic"
  - "topic/claude_code"
  - "topic/claude_skill"
aliases:
  - "guizang-social-card-skill"
  - "op7418/guizang-social-card-skill"
  - "生成小紅書和微信封面的圖文卡片，適合多種社交媒體需求。"
---

# guizang-social-card-skill

**783** stars · **783** stars/天 · 建立 1 天前 · HTML · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/op7418--guizang-social-card-skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent-skill` `ai-agent` `anthropic` `claude-code` `claude-skill` `codex` `editorial-design` `html-template` `image-generation` `playwright` `rednote` `social-cards` `swiss-design` `wechat` `xiaohongshu`

> [!summary] 一句話摘要
> 生成小紅書和微信封面的圖文卡片，適合多種社交媒體需求。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (783 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成小紅書和微信圖文內容的社交媒體經營者和內容創作者。
> **一句話重點** 這個專案的核心價值在於簡化社交媒體內容生成的流程，讓用戶能夠快速產出高質量的圖文內容。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社交媒體工具" && p.file.name !== "op7418--guizang-social-card-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 社交媒體工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速生成社交媒體內容的能力，值得採用。

> [!abstract] 核心創新
> 使用單文件 HTML 生成 PNG，簡化了圖文生成的流程。

## 專案簡介

Guizang Social Card Skill 是一個專為生成小紅書和微信封面設計的工具，能夠從文章、圖片和其他內容生成視覺吸引力強的圖文卡片。用戶只需提供素材，選擇風格和主題，系統會自動生成符合要求的圖文，並支持多種尺寸和版式。這個工具的核心賣點在於其雙視覺系統：電子雜誌風格適合敘事和生活方式內容，而瑞士風格則專注於數據和結構化信息。使用者可以通過簡單的指令，如 `帮我基于这篇文章做一套瑞士风小红书图文,5 张,IKB 蓝`，快速生成所需內容。技術上，這個專案使用了 Playwright 來進行渲染，並且不需要複雜的前端構建鏈，這使得生成過程簡單高效。與其他類似工具相比，如 guizang-ppt-skill，這個專案專注於靜態圖文生成，而不是動態演示，適合需要高質量圖文內容的社交媒體管理者。整體而言，這個工具非常適合需要快速生成社交媒體內容的用戶，尤其是在小紅書和微信平台上。

**技術棧**：`HTML` · `JavaScript` · `Playwright`

## 重點功能

- 雙視覺系統 — 提供電子雜誌風和瑞士風兩種風格，適合不同內容需求。
- 多種畫板尺寸 — 支持 3:4、21:9 和 1:1 尺寸，滿足小紅書和微信的不同要求。
- 28 個版式骨架 — 包含多種設計模板，方便用戶快速選擇和修改。
- 10 套主題預設 — 提供多種色彩主題，保證視覺一致性。
- 自動圖源工作流 — 支持從 Unsplash、Pexels 等多個來源自動取圖，簡化素材準備過程。

## 快速開始

1. 安裝技能
```bash
npx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill
```
2. 更新技能
```bash
git pull ~/.claude/skills/guizang-social-card-skill
```
3. 生成圖文
```bash
node render.mjs
```

## 程式碼範例

```html
[
  "# 前置條件：安裝完成後，使用以下指令生成圖文",
  "node render.mjs",
  "# 預期輸出：生成的 PNG 圖片將保存在 output 目錄中"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 783 stars（783/天），forks 101（12.9%），顯示出強烈的需求和使用興趣。這個專案的作者在設計上解決了社交媒體內容生成的痛點，特別是在視覺設計和排版方面，提供了一個簡單的解決方案。之前的工具往往需要較高的設置成本或不夠靈活，而這個專案則通過簡化流程來提高效率。社交媒體內容的需求持續增長，這使得這個工具在市場上具備了良好的發展潛力。

## 適合誰使用

**目標受眾**：需要快速生成小紅書和微信圖文內容的社交媒體經營者和內容創作者。

> [!example] 使用場景
> - 社交媒體經營者用它來快速生成小紅書圖文，因為它提供了多種版式和主題選擇，能夠在短時間內產出高質量內容。
> - 內容創作者用它來製作微信封面，因為它的雙視覺系統能夠滿足不同風格需求，提升內容的吸引力。
> - 市場行銷專員用它來生成產品測評的社交卡片，因為它支持從多個圖源自動取圖，節省了尋找素材的時間。

## 架構分析

該專案採用單文件 HTML 結構，使用 Playwright 進行渲染，這樣的設計使得用戶無需複雜的前端構建流程。資料流從用戶輸入素材開始，經過風格選擇、版式選擇、資源準備等步驟，最終生成 PNG 圖片。這種設計的好處在於簡化了使用流程，降低了技術門檻，但也意味著在自定義設計上有所限制。擴展性方面，因為依賴於 Playwright，未來可能需要考慮其版本更新對功能的影響。

## 技術深入分析

Guizang Social Card Skill 的核心技術在於其使用 Playwright 進行渲染，這使得生成的內容可以精確控制排版和視覺效果。該專案能夠處理多種尺寸的輸出，並且支持從多個圖源自動取圖，這在社交媒體內容生成中是非常重要的。使用者在選擇風格和主題時，系統提供了多種預設選項，這樣的設計能夠保證生成內容的視覺一致性。由於專案依賴於 Playwright，這意味著在未來的擴展中可能需要考慮其版本更新的影響。整體而言，這個專案在社交媒體內容生成的效率和質量上都具備了優勢，但在設計靈活性上有所妥協。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程相對順暢，沒有明顯的坑。文件中有良好的示例和說明，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速生成高質量的社交媒體內容。
> - 雙視覺系統滿足不同風格需求，適用於多種場合。
> - 自動圖源工作流節省了素材準備的時間。

> [!danger] 缺點
> - 不支持自定義顏色，限制了設計靈活性。
> - 不適合需要動態內容的場景。
> - 對於高解析度需求的用戶，可能需要額外設置。

> [!warning] 注意事項
> - 不支持自定義顏色，只能選擇預設主題。
> - 不適合生成動態內容或橫向翻頁的 PPT。
> - 對於需要高解析度輸出的場合，可能需要額外的設置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 專注於橫向翻頁的 PPT 生成，適合演示需求，而本專案專注於靜態圖文內容。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更為靈活的圖像生成選項，但缺乏專門針對社交媒體的版式設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成靜態圖像，使用 Python 實作，記憶體用量較少，但缺乏針對社交媒體的專門設計。 | 如果你的團隊已經在用 Python 並需要靜態圖像生成，這個工具會更合適。 | medium，因為需要重新學習 API 和功能。 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 專注於 PPT 的生成，使用相似的設計原則，但不支持社交媒體內容的靜態圖文生成。 | 如果你的需求是生成動態 PPT，這個工具會更合適。 | low，因為兩者有相似的使用流程和設計理念。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guizang-social-card-skill** | **agent-sprite-forge** | **guizang-ppt-skill** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成靜態圖像，使用 Python 實作，記憶體用量較少，但缺乏針對社交媒體的專門設計。 | 專注於 PPT 的生成，使用相似的設計原則，但不支持社交媒體內容的靜態圖文生成。 |
> | 遷移成本 | - | medium，因為需要重新學習 API 和功能。 | low，因為兩者有相似的使用流程和設計理念。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Python 並需要靜態圖像生成，這個 | 如果你的需求是生成動態 PPT，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Playwright 可能無法正確渲染，導致輸出錯誤
  - 解法：確保安裝了正確版本的 Playwright，並檢查依賴是否完整
- [MEDIUM] 生成的圖像尺寸不符合預期，可能是因為選擇的版式不正確
  - 解法：檢查選擇的版式和尺寸設置，確保符合需求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的社交媒體內容生成 | 非常適合 | 簡單易用，能快速生成高質量內容，適合小型團隊的需求。 |
| 大型企業的社交媒體管理 | 普通 | 雖然功能強大，但在自定義設計上有所限制，可能不符合大型企業的需求。 |
| 個人內容創作者的圖文生成 | 非常適合 | 能快速生成吸引人的圖文內容，提升個人品牌形象。 |
| 需要動態內容的社交媒體活動 | 不適合 | 不支持生成動態內容，僅限靜態圖文。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成社交媒體內容的能力，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時注意依賴的 Playwright 版本安全性即可。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Guizang Social Card Skill 可以與 Claude Code 和 Codex 等 AI Agent 無縫整合，適合在社交媒體內容生成的工作流中使用。用戶可以在本地環境中安裝並運行，並通過簡單的指令生成內容。與主流 CI/CD 工具的整合相對簡單，但需要注意 Playwright 的版本兼容性。整合過程中，最常見的問題是依賴的庫版本不一致，建議在安裝前檢查依賴。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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
| Forks | 101 |
| Open Issues | 0 |
| 最後推送 | 2026-05-27 |
| 建立日期 | 2026-05-27 |
| 官方網站 | [Link](https://github.com/op7418/guizang-social-card-skill) |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/op7418/guizang-social-card-skill) |
| Topics | `agent-skill` `ai-agent` `anthropic` `claude-code` `claude-skill` `codex` `editorial-design` `html-template` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `playwright`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 73
>     "JavaScript" : 27
> ```

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和維護。
**連結**：[文件](https://github.com/op7418/guizang-social-card-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-27 ~ 2026-05-27）
> **活躍天數** 1 天 · **最新 commit** chore: switch license from MIT-custom to AGPL-3.0

## README 摘錄

> [!info]- 展開查看原文 README
> # Guizang Social Card Skill · 小红书图文 / 公众号封面对
> 
> [English README](./README.en.md)
> 
> 一个适配 Claude Code / Codex 等 Agent 环境的图文卡片技能,用于从文章、文案、截图、产品笔记、字幕或照片生成**小红书 / Rednote 图文组图**与**公众号 21:9 + 1:1 封面对**。
> 
> 内置两套视觉系统,共用一份图文工作流:
> 
> - **电子杂志风(Editorial)**。像 *Monocle* / *Kinfolk* / *Cereal* 那样克制的版面,适合叙事、生活方式、旅行、阅读、影视、个人观察。
> - **瑞士国际主义(Swiss)**。网格、单一锚点色、直角发丝线、极致字号对比,适合产品测评、数据、方法论、教程、AI 工具。
> 
> > 这个 Skill 是 [guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) 的姊妹项目,共享美学语言但独立维护。PPT 解决"横向翻页演讲",这里解决"静态信息流图文"。
> 
> 
> ## 30 秒开始
> 
> ```bash
> npx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill
> ```
> 
> 也可以直接把这段话发给有 shell 权限的 AI Agent:
> 
> ```text
> 帮我安装 guizang-social-card-skill。请把 https://github.com/op7418/guizang-social-card-skill 克隆到 ~/.claude/skills/guizang-social-card-skill,安装完成后检查 SKILL.md、assets/、references/ 是否存在。
> ```
> 
> 已经安装过的话,用这段话更新:
> 
> ```text
> 帮我更新 guizang-social-card-skill。请进入 ~/.claude/skills/guizang-social-card-skill 执行 git pull,然后告诉我当前最新 commit。
> ```
> 
> 安装后直接对 Agent 说:
> 
> ```text
> 帮我基于这篇文章做一套瑞士风小红书图文,5 张,IKB 蓝。
> ```
> 
> 也可以试这些请求:
> 
> ```text
> 基于这份产品测评做一套小红书 3:4,标题用电子杂志风。
> 帮我把这篇文章做成公众号封面对:21:9 头图 + 1:1 分享卡,视觉保持一致。
> 我有 3 张露营照片,帮我做一套全图风格的小红书图文。
> 把这段游戏攻略文案做成一套小红书图文,需要从 wallhaven 拿点游戏原画。
> ```
> 
> 
> ## 效果
> 
> - 🖋 **双视觉系统**:电子杂志风做氛围与叙事,瑞士风做事实与结构,两套共用同一份工作流
> - 📐 **3 个画板尺寸**:`.poster.xhs` 1080×1440(小红书 3:4)、`.poster.wide` 2100×900(公众号 21:9)、`.poster.square` 1080×1080(公众号 1:1)
> - 🧩 **28 个版式骨架**:Editorial 16 个(`M01-M16`,含 Image-Led Cover、Pipeline、Before/After 等)+ Swiss 12 个(`S01-S12`,含 KPI Tower、H-Bar Chart、Matrix + Hero 等)
> - 🎨 **10 套主题预设**:Editorial 6 套(墨水经典、靛蓝瓷、森林墨、牛皮纸、沙丘、**Midnight Ink** 暗色)+ Swiss 4 套锚点色(IKB Klein Blue、柠檬黄、柠檬绿、安全橙)
> - 🖼 **图源工作流**:用户图优先;无图时按 Unsplash → Pexels → Flickr CC → Wallhaven → 直接搜索的优先级取图,落本地 + 自动写 `SOURCES.md`
> - 🌫 **WebGL 墨流背景**:杂志风 hero 页可挂动态墨流;低性能或截图时可禁用
> - 🪧 **图片底图遮罩 + 人脸避让**:满铺图必须叠遮罩,文字落点要避开主体,`references/image-overlay.md` 给硬规则
> - 🧰 **截图美化资产**:9 张 WebP 真实材质背景(Editorial 5 / Swiss 4),配套 `.frame-shot` / `.device-browser` / `.device-phone` 工具类
> - 🗺 **地图组件**:MapLibre + OSM 真实瓦片,支持多 pin + 连线,适合旅行攻略
> - ✅ **校验脚本**:`validate-social-deck.mjs` 自动检测溢出、字号上限、4 横带密度、footer 碰撞
> - 📄 **单文件 HTML + Playwright 渲染**:不需要前端构建链,`node render.mjs` 直接出 PNG
> 
> 
> ## 适合 / 不适合
> 
> **✅ 合适**:小红书图文组图 / 公众号封面对 / 微信朋友圈封面 / 视频号封面 / 文章配图 / 教程拆页 / 数据回顾 / 旅行攻略 / 产品测评 / 截图说明
> 
> **❌ 不合适**:横向翻页 PPT(用 [guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill))/ 长视频生成 / 纯图片修图 / 无版式诉求的纯文字编辑
> 
> 
> ## 11 个小红书品类适配
> 
> 按"能力圈"分三档,详见 [`references/category-cookbook.md`](./references/category-cookbook.md):
> 
> **端到端强势**(文 / 结构 / 图都在能力圈内):
> 
> - 旅行、职场、推荐(指定子类后)
> 
> **文与结构强势,图依赖用户或搜图源:**
> 
> - 游戏、影视、美食(食谱方向)、彩妆(教程方向)、健身、家居、穿搭(精选方向)
> 
> **能力圈外,主动说清**(不强行接):
> 
> - OOTD 实拍流 / 梦核 / 仿胶片调色 / 真实测肤美妆等强烈依赖摄影或后期的细分赛道
> 
> 
> ## 常见使用场景
> 
> | 任务 | 推荐方式 |
> |------|---------|
> | 长文章 → 小红书图文 | 抽核心观点,Editorial 走叙事节奏,Swiss 走拆条数据 |
> | 产品测评 / 工具回顾 | Swiss + IKB 蓝,优先 `S09 KPI Tower` / `S10 H-Bar Chart` |
> | 旅行 / 生活方式分享 | Editorial + Midnight Ink 或 Dune,`M16 Image-Led Cover` 满铺主图 |
> | 公众号封面对 | 同一份内容渲两块:`.poster.wide` 21:9 + `.poster.square` 1:1,视觉一致 |
> | 截图教程 / 工具说明 | `.frame-shot` + `.device-browser` 包壳,优先 Swiss 网格底 |
> | 游戏攻略 / 影视回顾 | Editorial + Midnight Ink,从 Wallhaven 取游戏原画做满铺 |
> | 数据回顾 / 年终总结 | Swiss + Lemon 或 Safety Orange,矩阵 + ledger 组合 |
> 
> 
> ## 为什么是单文件 HTML 渲 PNG
> 
> - **Agent 友好**:HTML + CSS 是文本,Agent 能直接写、读、改、验证
> - **版式精确**:CSS Grid + 严格字号 / 留白 / 网格,远超 Markdown 排版能力
> - **图源开放**:可以接 Unsplash / Pexels / Wallhaven / Mapbox / OSM 等任意网络资源
> - **质量可校验**:`validate-social-deck.mjs` 用 Playwright 跑真实 DOM 测量,不是猜
> - **交付简单**:`output/*.png` 直接发,不需要部署、不需要导出工具
> 
> 
> ## 平台支持
> 
> | 平台 | 状态 | 说明 |
> |------|------|------|
> | Claude Code | 支持 | 原生 Skill 工作流,适合生成 + 迭代图文 |
> | Codex | 支持 | 适合长流程图文生成、调用图片源、做视觉检查 |
> | Cursor / 其他本地 Agent | 可用 | 需要能读写文件 + 执行 shell |
> | 普通 Chatbot | 不推荐 | 没有文件系统和渲染管线时无法稳定出图 |
> 
> 
> ## 安装
> 
> 
> ### 方式一:一行命令安装(推荐)
> 
> ```bash
> npx skills add https://github.com/op7418/guizang-social-card-skill --skill guizang-social-card-skill
> ```
> 
> 
> ### 方式二:把下面这段话直接发给 AI
> 
> > 帮我安装 `guizang-social-card-skill` 这个 Claude Code skill。请按下面步骤做:
> >
> > 1. 确保 `~/.claude/skills/` 目录存在(不存在就创建)
> > 2. 执行 `git clone https://github.com/op7418/guizang-social-card-skill.git ~/.claude/skills/guizang-social-card-skill`
> > 3. 验证:`ls ~/.claude/skills/guizang-social-card-skill/` 应该看到 `SKILL.md`、`assets/`、`references/` 三项
> > 4. 告诉我装好了,之后我说"做一套小红书图文"之类的话就会触发这个 skill
> 
> 把这段话复制粘贴给 Claude Code / Cursor / 任何有 shell 权限的 AI Agent,它会自动完成安装。
> 
> 
> ### 方式三:手动命令行
> 
> ```bash
> git clone https://github.com/op7418/guizang-social-card-skill.git ~/.claude/skills/guizang-social-card-skill
> ```
> 
> 
> ### 触发方式
> 
> 装好后,Claude Code 会自动发现并调用这个 skill。触发关键词:
> 
> - "帮我做一套小红书图文 / Xiaohongshu 图文"
> - "帮我做一套 Rednote 卡片"
> - "做一个公众号 21:9 头图 + 1:1 分享卡"
> - "生成一套 social cards / 杂志风社交卡片"
> - "把这篇文章做成轮播图文 / 教程拆页"
> - "做一套瑞士风的小红书测评 / IKB 风格图文"
> 
> 
> ## 使用流程
> 
> Skill 本身是结构化工作流,Agent 会按 7 步走:
> 
> 1. **Intake** — 抓 4 件事:目标平台 / 风格 / 内容素材 / 用户图。无图时一次性给 A/B/C 三选(自己拍图 / AI 生图 / 网络取图),不二次劝导
> 2. **Style & Theme** — 选 Editorial 还是 Swiss,再从 10 套预设里选主题色。不允许自定义 hex
> 3. **Layout Selection** — 根据内容结构从 28 个版式骨架里挑、粘、改文案。Editorial 16 个 / Swiss 12 个
> 4. **Asset Prep** — 取图(Unsplash / Pexels / Flickr CC / Wallhaven / 直接搜索),落本地 + 写 `SOURCES.md`;问用户要不要标来源
> 5. **Compose & Render** — 拷种子模板 → 替换 `` → `node render.mjs`
> 6. **Deliver & Review** — 先把 PNG 给用户看,询问"你自己看还是我先帮你跑 validator",默认不自动核查
> 7. **Iterate** — 用户提反馈,改 inline 样式或 swap 版式 / 替图,重渲
> 
> 详细说明见 [`SKILL.md`](./SKILL.md)。深度细节去看对应 `references/*.md`。
> 
> 
> ## 校验脚本
> 
> ```bash
> node validate-social-deck.mjs path/to/task-dir
> ```
> 
> 6 条规则,基于 Playwright 真实渲染测量,不是静态扫描:
> 
> - **R1** Overflow — 任何 section 超出 `.poster` 立刻报错
> - **R2** Type Caps — `.h-xl` / `.h-display` 字号 + 字重组合超出种子定义
> - **R3** Footer Collision — 内容压到底部 footer / page-number
> - **R4** 4-Band Density — 1440 高画布切 4 横带,每带应有内容或主动留白理由
> - **R5** Frame Overflow — `.frame-img` / `.frame-shot` 子元素溢出框
> - **R6** Swiss Identity — Swiss 模板里 inline `font-weight >= 700` 警告(违反"越大越细")
> 
> `SKILL.md` 第 7 步明确**默认不自动跑** validator —— 等用户先看完图再问,避免每轮多花数十秒。
> 
> 
> ## 主题色预设
> 
> 从 [`references/theme-presets.md`](./references/theme-presets.md) 里选一套——**不允许自定义 hex 值**,保护美学比给自由更重要。
> 
> 
> ### Editorial 6 套
> 
> | 主题 | 色调 | 适合场景 |
> |------|------|---------|
> | 🖋 **墨水经典 Ink Classic** | `#0a0a0b` / `#f1efea` | 通用默认、商业话题、不知道选啥时最稳 |
> | 🌊 **靛蓝瓷 Indigo Porcelain** | `#0a1f3d` / `#f1f3f5` | 科技、研究、AI、技术分享 |
> | 🌿 **森林墨 Forest Ink** | `#1a2e1f` / `#f5f1e8` | 自然、可持续、户外、非虚构 |
> | 🍂 **牛皮纸 Kraft Paper** | `#2a1e13` / `#eedfc7` | 怀旧、人文、阅读、文学 |
> | 🌙 **沙丘 Dune** | `#1f1a14` / `#f0e6d2` | 艺术、设计、创意、时尚 |
> | ⚫ **午夜墨 Midnight Ink** | `#0e0d0c` / `#ece2cf` / `#d4a04a` | 游戏 key art / 夜景 / 影调封面 / 黑神话 · 艾尔登法环类深色题材 |
> 
> 
> ### Swiss 4 套
> 
> | 主题 | 锚点色 | 适合场景 |
> |------|--------|---------|
> | 🔵 **克莱因蓝 IKB** | `#002FA7` | 通用默认、商业发布、AI 产品、方法论 |
> | 🟡 **柠檬黄 Lemon** | `#FFD500` | 年轻、运动、零售、消费品、Y2K |
> | 🟢 **柠檬绿 Lemon Green** | `#C5E803` | 生态、健康、Z 世代、绿色品牌 |
> | 🟠 **安全橙 Safety Orange** | `#FF6B35` | 警示、新闻、工业、活力主题 |
> 
> 切主题只需替换种子模板的 `` 属性,所有 CSS 走 `var(--...)`。
> 
> 
> ## 目录结构
> 
> ```
> guizang-social-card-skill/
> ├── SKILL.md                              ← Skill 主文件:7 步工作流
> ├── README.md                             ← 本文件
> ├── HANDOFF.md                            ← 交接文档:事实 + 版本历史
> ├── PRODUCT.md                            ← 产品文档:思考 + 决策 + roadmap
> ├── validate-social-deck.mjs              ← Playwright 版式校验脚本
> ├── assets/
> │   ├── template-editorial-card.html      ← Editorial 种子(6 主题 / 3 画板)
> │   ├── template-swiss-card.html          ← Swiss 种子(4 accent / 3 画板)
> │   ├── magazine-bg-webgl.js              ← WebGL 墨流背景
> │   └── screenshot-backgrounds/           ← 9 张截图舞台底(WebP)
> │       ├── style-a/                      ←   Editorial 5 套
> │       └── style-b/                      ←   Swiss 4 套
> └── references/
>     ├── platform-specs.md                 ← 平台 × 分辨率 × 命名
>     ├── style-system.md                   ← 两种风格的硬规则与反模式
>     ├── theme-presets.md                  ← 10 套色票详解
>     ├── layout-recipes.md                 ← 28 个版式骨架(M01-M16 + S01-S12)
>     ├── components.md                     ← 字体 / 卡片 / 间距 / 图标
>     ├── background-systems.md             ← 墨流 / 网格 / 纸纹层
>     ├── portrait-fill.md                  ← 3:4 板的留白对策
>     ├── content-planning.md            

## 延伸閱讀

相關概念：[[自動化]] · [[社交媒體]] · [[圖像生成]]

相關專案：[[op7418--guizang-ppt-skill|op7418/guizang-ppt-skill]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/op7418/guizang-social-card-skill) · [官方網站](https://github.com/op7418/guizang-social-card-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：社交媒體工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社交媒體工具" AND file.name != "op7418--guizang-social-card-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "op7418--guizang-social-card-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "op7418--guizang-social-card-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "op7418--guizang-social-card-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","社交媒體","圖像生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "op7418--guizang-social-card-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "op7418--guizang-social-card-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "op7418" AND file.name != "op7418--guizang-social-card-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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
> const me = dv.page("Repos/op7418--guizang-social-card-skill");
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

> **2026-05-29** — 首次收錄
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

- [[2026-06-02|2026-06-02]] — 再次上榜，2.4k stars
- [[2026-06-01|2026-06-01]] — 再次上榜，2.1k stars
- [[2026-05-31|2026-05-31]] — 再次上榜，1.6k stars
- [[2026-05-30|2026-05-30]] — 再次上榜，1.2k stars
- [[2026-05-29|2026-05-29]] — 首次收錄，783 stars
