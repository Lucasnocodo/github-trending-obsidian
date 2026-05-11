---
repo: yaojingang/yao-open-prompts
url: https://github.com/yaojingang/yao-open-prompts
owner: yaojingang
owner_type: User
language: Python
license: NOASSERTION
description: "Yao Open Prompts：中文 AI 提示词库，覆盖工作、学习、内容、营销和生活场景"
homepage: "https://yaojingang.github.io/yao-open-prompts/"
stars: 1555
stars_per_day: 389
forks: 247
open_issues: 0
created: 2026-05-06
pushed_at: 2026-05-07
first_seen: 2026-05-08
week: "2026-W19"
month: "2026-05"
category: "AI/ML"
subcategory: "提示詞庫"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-08
use_case: "提供多場景的中文 AI 提示詞庫，適用於工作、學習、內容創作等。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-14"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 1016
readme_length: 3215
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-08"
star_history: "2026-05-08:1131,2026-05-09:1374,2026-05-10:1490,2026-05-11:1555"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/chinese_prompts"
  - "topic/geo"
  - "topic/prompt_engineering"
  - "topic/prompts"
aliases:
  - "yao-open-prompts"
  - "yaojingang/yao-open-prompts"
  - "提供多場景的中文 AI 提示詞庫，適用於工作、學習、內容創作等。"
---

# yao-open-prompts

**1.1k** stars · **1.1k** stars/天 · 建立 1 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/yaojingang--yao-open-prompts");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`ai` `chinese-prompts` `geo` `prompt-engineering` `prompts`

> [!summary] 一句話摘要
> 提供多場景的中文 AI 提示詞庫，適用於工作、學習、內容創作等。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要中文 AI 提示詞以提升工作效率的內容創作者和市場營銷專員。
> **一句話重點** 這個專案填補了中文 AI 提示詞的市場需求，特別是在內容創作和營銷方面。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "提示詞庫" && p.file.name !== "yaojingang--yao-open-prompts" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 提示詞庫 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的提示詞庫，值得採用。

> [!abstract] 核心創新
> 提供針對多場景的中文 AI 提示詞庫，填補市場需求。

## 專案簡介

Yao Open Prompts 是一個專注於中文 AI 提示詞的開源庫，涵蓋工作、學習、內容創作、營銷和生活等多個場景。用戶可以在 CATALOG.md 中找到各種提示詞，並直接複製使用。每個提示詞都經過整理，保留可複製的正文，去除了不必要的內容，這樣的設計使得使用者能夠快速找到所需的提示詞並進行實驗。這個庫的核心賣點在於其針對特定場景的分類，讓使用者能夠針對性地獲取所需的提示詞，從而提高工作效率。技術上，這個庫使用 Python 作為主要語言，並且包含了多個腳本來維護和生成提示詞目錄，這樣的設計使得更新和維護變得更加高效。

與其他類似工具相比，如 0xGF/boneyard 和 AgriciDaniel/claude-obsidian，Yao Open Prompts 更加專注於中文提示詞的整理和應用，並且提供了更為細緻的分類和範例，適合需要中文 AI 提示詞的用戶。實際使用中，這個庫的提示詞數量和質量都能夠滿足大多數用戶的需求，特別是在內容創作和營銷方面。這個專案的社群活躍度高，因為在短短一天內就獲得了 1131 顆星，顯示出其受歡迎程度。對於希望快速上手的用戶，這個庫的 README 提供了清晰的使用指引，並且有持續更新的機制，適合各種規模的團隊使用。

**技術棧**：`Python`

## 重點功能

- 多場景分類 — 提供工作、學習、內容創作等多場景的提示詞，方便用戶快速找到所需。
- 可複製的提示詞 — 每個提示詞均保留可直接複製的正文，方便用戶使用。
- 持續更新機制 — 定期更新提示詞，並提供版本管理，確保內容的時效性。
- 專題合集 — 將系列型內容合併成主題合集，避免零散提示詞影響使用體驗。
- 智能元提示詞生成系統 — 提供基於 RTF 框架的提示詞生成流程，幫助用戶創建高質量提示詞。

## 快速開始

1. 找到提示詞
```bash
在 CATALOG.md 中按場景找到提示詞
```
2. 複製提示詞
```bash
打開對應 Markdown 文件，複製 Prompt 區域
```
3. 測試輸出
```bash
在目標模型中測試輸出，並根據結果記錄版本迭代
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1131 stars（1131/天），forks 177（15.6%），這顯示出其快速增長的潛力。作者 Yaojingang 在提示詞和 AI 工具方面有一定的背景，這使得他能夠針對市場需求提供實用的解決方案。這個庫解決了中文提示詞資源匱乏的問題，特別是在工作和學習場景中，之前的解決方案往往缺乏針對性和系統性。隨著 AI 應用的普及，對於高質量提示詞的需求也在增加，這使得 Yao Open Prompts 的出現恰逢其時。forks/stars 比率為 15.6%，顯示出許多用戶對此專案有實際的修改和應用需求。

## 適合誰使用

**目標受眾**：需要中文 AI 提示詞以提升工作效率的內容創作者和市場營銷專員。

> [!example] 使用場景
> - 內容創作者用它來快速生成短視頻文案，因為它提供了針對性的提示詞，能夠提高創作效率。
> - 市場營銷專員用它來生成 GEO 營銷模板，因為這些模板能夠幫助他們更好地定位目標客戶。
> - 學生用它來獲取學習方法和記憶術提示，因為這些提示能夠幫助他們更有效地掌握知識。

## 架構分析

Yao Open Prompts 採用簡單的文件結構來組織提示詞，這樣的設計使得用戶能夠快速找到所需的內容。每個提示詞文件都包含統一的 frontmatter，這樣的設計便於後續的維護和更新。使用 Python 腳本來生成目錄和檢查質量，這樣的自動化流程提高了效率。選擇 Markdown 格式來存儲提示詞，這樣的選擇使得內容易於編輯和分享。雖然這種結構簡單，但在擴展性上可能會受到限制，特別是當提示詞數量大幅增加時，可能需要重新考慮資料組織方式。

## 技術深入分析

Yao Open Prompts 的核心技術機制是基於 Markdown 格式的提示詞整理，這使得提示詞易於編輯和分享。每個提示詞文件都包含統一的 frontmatter，這樣的設計便於後續的維護和更新。使用 Python 腳本來生成目錄和檢查質量，這樣的自動化流程提高了效率。這個庫能夠處理的資料量相對較小，主要依賴於用戶的具體需求和場景。

雖然這種結構簡單，但在擴展性上可能會受到限制，特別是當提示詞數量大幅增加時，可能需要重新考慮資料組織方式。選擇 Markdown 格式來存儲提示詞，這樣的選擇使得內容易於編輯和分享，並且能夠方便地與其他工具鏈整合。與主流框架的整合難度較低，因為 Markdown 格式在多數開發環境中都能夠被支持。整體而言，這個專案的設計考量了用戶的使用便捷性，並且提供了良好的擴展性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用指引和範例。安裝過程順暢，無明顯坑。文件主要為中文，對於中文用戶友好，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 易於使用的提示詞庫，適合快速查找和應用。
> - 持續更新的機制，確保內容的時效性和相關性。
> - 針對多場景的分類，滿足不同用戶需求。

> [!danger] 缺點
> - 目前僅支持中文提示詞，對於非中文用戶不友好。
> - 提示詞的質量依賴於具體應用場景，可能需要調整。
> - 缺乏針對特定行業的深度提示詞，可能不適合所有專業領域。

> [!warning] 注意事項
> - 目前僅支持中文提示詞，對於非中文用戶可能不太友好。
> - 提示詞的質量和效果依賴於用戶的具體應用場景，可能需要進一步調整。
> - 缺乏針對特定行業的深度提示詞，可能不適合所有專業領域。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種提示詞，但主要針對英文用戶，缺乏中文支持。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的 AI 應用場景，但提示詞的範圍不如本專案廣泛。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於英文提示詞，提供多種提示詞，但缺乏中文支持。 | 如果你的團隊主要使用英文，且需要多樣化的提示詞選擇。 | medium，因為需要重新適應不同的提示詞格式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的 AI 應用場景，但提示詞的範圍不如本專案廣泛。 | 如果你的需求集中在特定的 AI 應用，並且需要深度的提示詞支持。 | low，因為提示詞格式相似，容易轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **yao-open-prompts** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於英文提示詞，提供多種提示詞，但缺乏中文支持。 | 專注於特定的 AI 應用場景，但提示詞的範圍不如本專案廣泛。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的提示詞格式。 | low，因為提示詞格式相似，容易轉換。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用英文，且需要多樣化的提示詞選擇。 | 如果你的需求集中在特定的 AI 應用，並且需要深度的提示詞支 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 提示詞的效果可能因場景不同而異，使用時需注意調整。
  - 解法：根據實際需求調整提示詞內容。
- [MEDIUM] 部分提示詞可能缺乏具體案例，使用時需自行補充。
  - 解法：參考其他資源或自行創建案例。
- [low] 更新頻率可能不穩定，需定期檢查新內容。
  - 解法：定期訪問 GitHub 頁面以獲取最新更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 內容創作團隊 | 非常適合 | 提供多樣化的提示詞，能夠滿足不同創作需求。 |
| 市場營銷部門 | 非常適合 | 針對 GEO 營銷提供專業模板，能夠提升工作效率。 |
| 學術研究者 | 普通 | 雖然有學習相關的提示詞，但深度不夠。 |
| 非中文用戶 | 不適合 | 目前僅支持中文提示詞，對於非中文用戶不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的提示詞庫，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Yao Open Prompts 可以與多種開發環境和工具鏈整合，特別是 Markdown 編輯器和 Python 環境。在一個使用 Jupyter Notebook 的專案中，可以直接將提示詞複製到代碼單元中進行測試。此工具也可與 GitHub Actions 整合，實現自動化的提示詞更新流程。

與主流 IDE（如 VS Code）相容性良好，無需額外的插件或適配器。整合過程中，最常見的問題是提示詞格式的兼容性，但由於使用 Markdown 格式，這一問題相對較少。整體而言，這個專案能夠輕鬆融入現有的技術生態。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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
| Forks | 177 |
| Open Issues | 0 |
| 最後推送 | 2026-05-07 |
| 建立日期 | 2026-05-06 |
| 官方網站 | [Link](https://yaojingang.github.io/yao-open-prompts/) |
| Repo 大小 | 1016 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yaojingang/yao-open-prompts) |
| Topics | `ai` `chinese-prompts` `geo` `prompt-engineering` `prompts` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yaojingang](https://github.com/yaojingang) | 15 |

## 社群與生態

**社群活躍度**：社群活躍，短時間內獲得大量 stars。
**連結**：[文件](https://yaojingang.github.io/yao-open-prompts/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-07）
> **活躍天數** 2 天 · **最新 commit** Expand English prompt mirror

## README 摘錄

> [!info]- 展開查看原文 README
> # Yao Open Prompts
> 
> [网页导航](https://yaojingang.github.io/yao-open-prompts/) · [完整目录](CATALOG.md) · [English README](README.en.md) · [英文提示词](prompts-en/README.md) · [GitHub 仓库](https://github.com/yaojingang/yao-open-prompts)
> 
> 《姚金刚提示词合集》的开源版本，一个面向真实工作、学习、内容、营销和生活场景的中文 AI 提示词库。
> 
> 本仓库从原始合集文档和后续提示词目录中整理出 **116** 个中文提示词文件，并按场景重新分类。每个提示词保留可复制的正文，去除了原文中不适合放入开源仓库主体的教程推广、效果截图、视频附件说明和 HTML 样式残留。
> 
> 系列型内容会优先合并成主题合集，例如 `50个 Nano Banana 创意提示词` 和 `Nano Banana PPT 场景提示词合集`，避免仓库目录被大量零散短提示词打散。
> 
> 近期补充重点来自 `05-Prompts/Generators`、`05-Prompts/Meta`、`05-Prompts/GEO`、`05-Prompts/Scenarios/Learning`、`05-Prompts/Products` 和《AI营销：从SEO到GEO》提示词合集：新增了合同生成、产品原型、网页 PPT V3、公众号 HTML、Schema.org GEO、网页逆向、费曼提问学习、批判思维、36 个内容与运营类实战提示词，以及 25 个 GEO 营销实战模板。
> 
> ## 重点推荐
> 
> **[智能元提示词生成系统 V0.6](prompts/01-ai-methods/rtf-meta-prompt-system-v06.md)**：基于 RTF 框架，把需求分析、角色工程、任务架构、格式规范和质量评估串成一套可复用流程，适合作为生成高质量提示词的起点。
> 
> ## 专题入口
> 
> **[36 个内容与运营提示词](prompts/06-ai-content/README.md)**：新增提示词已直接并入 `prompts/06-ai-content/`，采用与仓库其他提示词一致的文件命名方式，覆盖短视频文案、人设风格、平台运营、行业内容、直播转化、私域成交、AI 绘画、数据复盘和爆款重构。
> 
> **[25 个 GEO 营销实战模板](prompts/08-ai-marketing/README.md)**：从《AI营销：从SEO到GEO》提示词合集拆分，覆盖机会判断、原理分析、内容工程、信源建设、数据监测、增长诊断和合规风险。
> 
> **[English README](README.en.md)**：英文说明文档入口，对应导航到 [116 个英文提示词](prompts-en/README.md)，英文提示词按 `prompts/` 的相同路径完整镜像在 `prompts-en/` 下。
> 
> ## 仓库结构
> 
> ```text
> prompts/                # 按场景分类的提示词正文
> prompts-en/             # 英文同步版提示词
> references/             # 推荐资源、第三方内容和外部项目索引
> templates/              # 新增提示词模板
> maintenance/            # 维护、评审、发布检查清单
> scripts/                # 目录生成和仓库质量检查脚本
> docs/                   # 提示词类型与代表提示词网页
> README.en.md            # 英文说明文档
> CATALOG.md              # 全量提示词索引
> CHANGELOG.md            # 更新记录
> CONTRIBUTING.md         # 贡献和持续迭代规则
> ```
> 
> ## 分类
> 
> | 分类 | 数量 | 说明 |
> | --- | ---: | --- |
> | AI方法 | 8 | 元提示词、反编译、网页逆向和提示词工程方法。 |
> | AI工作 | 10 | 面向企业、合同、销售、客服、产品原型、PPT、网页等生产力场景。 |
> | AI学习 | 11 | 学习方法、记忆术、费曼提问、习惯养成和学习助理。 |
> | AI生活 | 2 | 健康、亲子歌曲等生活场景。 |
> | AI教育 | 4 | 儿童教育、互动学习页面和小游戏创作。 |
> | AI内容 | 49 | 写作、润色、标题、公众号 HTML、短视频、内容运营、图像和 PPT 创意。 |
> | AI编程 | 1 | 架构设计和编程协作。 |
> | AI营销 | 28 | GEO 内容生成、结构化数据、信源建设、数据监测、增长诊断和合规风险。 |
> | AI思考 | 3 | 批判思维、记忆、标题和思维类灵感提示词。 |
> 
> 完整目录见 [CATALOG.md](CATALOG.md)。
> 
> ## 使用方式
> 
> 1. 在 [CATALOG.md](CATALOG.md) 中按场景找到提示词。
> 2. 打开对应 Markdown 文件，复制 `Prompt` 区域。
> 3. 将 `{{变量}}`、`[占位符]` 或示例内容替换为你的真实任务信息。
> 4. 在目标模型中测试输出，并根据结果记录版本迭代。
> 
> ## 提示词文件规范
> 
> 每个提示词文件包含统一 frontmatter：
> 
> ```yaml
> title: 提示词标题
> category: 一级分类
> subcategory: 子类
> source_section: 原合集章节号
> author: 作者或来源
> version: 提示词版本
> created: 创建日期
> status: active | draft | third-party-review
> tags: 标签列表
> ```
> 
> 正文只保留三部分：标题、简介、Prompt。需要展示案例、评测截图、教程链接或长说明时，优先放到 `references/` 或后续的案例目录，不和可复制提示词正文混在一起。
> 
> ## 持续更新机制
> 
> - 新增提示词：复制 [prompt-file-template.md](templates/prompt-file-template.md)，放到对应分类目录。
> - 更新提示词：优先在原文件内提升 `version`，并在 [CHANGELOG.md](CHANGELOG.md) 记录变更。
> - 调整分类：同步更新 frontmatter 的 `category/subcategory/tags`，然后重新生成目录。
> - 质量检查：运行 `python3 scripts/check_repo.py`。
> - 重建目录：运行 `python3 scripts/generate_catalog.py`。
> - 重建网页：运行 `python3 scripts/generate_webpage.py`。
> - 发布节奏：建议使用日期版本，如 `v2026.05.1`，每次发布前走 [release-checklist.md](maintenance/release-checklist.md)。
> 
> ## 开源与来源策略
> 
> 本仓库采用 **CC BY 4.0** 作为提示词内容许可；如果后续加入脚本或工具代码，可单独使用 MIT。明显第三方或转载内容不直接并入主提示词库，先放在 `references/` 或标记为 `third-party-review`，确认授权后再发布。

## 延伸閱讀

相關概念：[[提示工程]] · [[內容生成]] · [[AI 應用]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MemPalace--mempalace|MemPalace/mempalace]]

[GitHub](https://github.com/yaojingang/yao-open-prompts) · [官方網站](https://yaojingang.github.io/yao-open-prompts/)

## 相關收錄

> [!note]- 直接競品（同子分類：提示詞庫）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "提示詞庫" AND file.name != "yaojingang--yao-open-prompts"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "yaojingang--yao-open-prompts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "yaojingang--yao-open-prompts" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "yaojingang--yao-open-prompts"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["提示工程","內容生成","AI 應用"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yaojingang--yao-open-prompts" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yaojingang--yao-open-prompts" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yaojingang" AND file.name != "yaojingang--yao-open-prompts"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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
> const me = dv.page("Repos/yaojingang--yao-open-prompts");
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

> **2026-05-08** — 首次收錄
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

- [[2026-05-11|2026-05-11]] — 再次上榜，1.6k stars
- [[2026-05-10|2026-05-10]] — 再次上榜，1.5k stars
- [[2026-05-09|2026-05-09]] — 再次上榜，1.4k stars
- [[2026-05-08|2026-05-08]] — 首次收錄，1.1k stars
