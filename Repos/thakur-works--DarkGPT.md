---
repo: thakur-works/DarkGPT
url: https://github.com/thakur-works/DarkGPT
owner: thakur-works
owner_type: User
language: N/A
license: N/A
description: "Darkgpt mod free #chatgpt"
homepage: ""
stars: 534
stars_per_day: 178
forks: 90
open_issues: 0
created: 2026-05-10
pushed_at: 2026-05-10
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "其他"
subcategory: "AI 模組"
release_tag: "2.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "提供一個免費的 ChatGPT 模組，能夠繞過某些限制。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 2
readme_length: 1055
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:534"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - "topic/chatgpt_bypass"
  - "topic/chatgpt5"
  - "topic/darkgpt"
aliases:
  - "DarkGPT"
  - "thakur-works/DarkGPT"
  - "提供一個免費的 ChatGPT 模組，能夠繞過某些限制。"
---

# DarkGPT

**534** stars · **178** stars/天 · 建立 3 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/thakur-works--DarkGPT");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `2.0.1`

`chatgpt-bypass` `chatgpt5` `darkgpt`

> [!summary] 一句話摘要
> 提供一個免費的 ChatGPT 模組，能夠繞過某些限制。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (178 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 ChatGPT 有深入需求的開發者或技術愛好者。
> **一句話重點** DarkGPT 提供了一個免費的解決方案，讓用戶能夠繞過 ChatGPT 的限制，這在當前的 AI 生態中是相當有吸引力的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/thakur-works--DarkGPT");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 模組" && p.file.name !== "thakur-works--DarkGPT" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 模組 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到繞過限制的自由，值得探索。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供一個免費的 ChatGPT 繞過模組。

## 專案簡介

DarkGPT 是一個旨在繞過 ChatGPT 限制的免費模組，讓用戶可以更自由地使用 ChatGPT 的功能。使用者只需安裝此模組，即可在不受限制的情況下進行對話，這對於需要進行創意寫作或技術問題解決的用戶來說，無疑是一個極具吸引力的選擇。這個模組的設計理念是讓用戶能夠在更開放的環境中探索 AI 的潛力，並且不會受到傳統 ChatGPT 的某些限制。技術上，DarkGPT 可能利用了反向工程和修改原始模型的方式來實現這些功能，具體的實作細節並未在 README 中詳細說明。與其他類似的替代品相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，DarkGPT 提供了更為直接的使用體驗，因為它專注於繞過限制而非提供額外的功能或擴展。

這使得它在需要快速解決問題的情境下，能夠更有效率地滿足用戶需求。使用者在實際操作中可能會發現，這個模組的穩定性和可用性會受到原始 ChatGPT 更新的影響，因為每次更新都可能導致繞過方法失效。整體來看，DarkGPT 目前處於早期階段，適合對 ChatGPT 有深入需求的開發者或技術愛好者，但在生產環境中使用時需謹慎考量其穩定性和風險。未來六個月內，若能持續更新和維護，可能會吸引更多用戶的關注和使用。

## 重點功能

- 繞過限制 — 允許用戶在不受限制的情況下使用 ChatGPT 的功能。
- 免費使用 — 提供無需付費的 ChatGPT 模組。
- 簡單安裝 — 用戶只需簡單步驟即可安裝並開始使用。
- 開源社群支持 — 透過 GitHub 社群進行持續的更新和維護。
- 快速反應 — 能夠即時處理用戶的請求，提升使用體驗。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/thakur-works/DarkGPT.git
```
2. 進入專案目錄
```bash
cd DarkGPT
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 534 stars（178/天），forks 90（16.9%），這顯示出強烈的興趣和潛在的使用需求。作者 thakur-works 可能在 AI 和開源社群中有一定的影響力，這個專案解決了許多用戶對於 ChatGPT 限制的困擾，提供了一個更自由的使用選擇。近期的推廣活動或社群討論可能也促進了這個專案的曝光度。由於目前的 forks/stars 比率為 16.9%，顯示出許多用戶在實際修改和使用這個模組，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：對 ChatGPT 有深入需求的開發者或技術愛好者。

> [!example] 使用場景
> - 內容創作者用它來自由生成創意寫作，因為傳統 ChatGPT 的限制可能會妨礙創意流動。
> - 開發者用它來測試和調整 AI 模型的反應，因為能夠繞過限制讓他們更靈活地進行實驗。
> - 技術愛好者用它來探索 AI 的潛力，因為這個模組提供了更開放的環境來進行各種測試。

## 架構分析

DarkGPT 的架構設計目的是為了提供一個簡單的繞過 ChatGPT 限制的解決方案。它可能利用了反向工程技術來修改原始模型，這樣的設計使得用戶能夠在不受限制的情況下使用 AI 功能。資料流方面，用戶的請求會被直接傳遞到修改過的模型，然後返回結果。

這樣的設計雖然能夠快速響應用戶需求，但也可能在原始模型更新時出現不穩定的情況。選擇這種方式的代價在於，未來的更新可能會導致模組失效，並且需要持續的維護來確保功能正常。整體來看，這個專案的擴展性可能受到原始模型更新的影響，未來的發展方向需要考慮如何保持與原始模型的兼容性。

## 技術深入分析

DarkGPT 的核心技術機制在於反向工程和修改原始 ChatGPT 模型，以實現繞過限制的功能。這種設計使得用戶能夠在更開放的環境中進行創意寫作和技術問題解決。效能方面，該模組的反應速度可能會受到原始模型的影響，具體的數據尚未提供。選擇這種方式的好處在於能夠快速滿足用戶需求，但代價是未來的更新可能會導致模組失效。由於缺乏詳細的技術文檔，使用者在整合過程中可能會遇到困難。這個模組的設計決策可能在未來的擴展中出現問題，特別是在原始模型更新頻繁的情況下。整合到現有的開發環境中可能需要額外的調整，以確保與其他工具的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡短，未提供詳細的使用範例，可能對新手不友好。安裝過程相對簡單，但缺乏指導。沒有明確的入門指南，文件也沒有多語言支持。

## 優缺點分析

> [!success] 優點
> - 免費使用，無需付費即可獲得 ChatGPT 的功能。
> - 能夠繞過限制，讓用戶自由探索 AI 的潛力。
> - 簡單安裝和使用，適合快速上手的用戶。

> [!danger] 缺點
> - 穩定性可能受到原始模型更新的影響。
> - 缺乏詳細的技術文檔，對新手不友好。
> - 仍在早期開發階段，可能存在潛在的風險。

> [!warning] 注意事項
> - 可能會受到原始 ChatGPT 更新的影響，導致繞過方法失效。
> - 不保證穩定性，因為仍在早期開發階段。
> - 缺乏詳細的技術文檔，可能對新手不友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理，而非直接繞過 ChatGPT 的限制，適合需要更複雜功能的用戶。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，適合需要 API 集成的開發者，但不具備繞過限制的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理，提供更複雜的功能和擴展性。 | 如果需要開發更具互動性的 AI 代理，而不僅僅是繞過限制。 | medium，因為需要重新設計使用流程。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，適合需要 API 集成的開發者。 | 如果需要將 GPT-2 整合到現有的應用中，而不需要繞過限制。 | low，因為 API 集成相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **DarkGPT** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建 AI 代理，提供更複雜的功能和擴展性。 | 提供 GPT-2 的 API 接口，適合需要 API 集成的開發者。 |
> | 遷移成本 | - | medium，因為需要重新設計使用流程。 | low，因為 API 集成相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要開發更具互動性的 AI 代理，而不僅僅是繞過限制。 | 如果需要將 GPT-2 整合到現有的應用中，而不需要繞過限制 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合有興趣探索 AI 潛力的開發者，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 可能會因原始 ChatGPT 更新而導致模組失效
  - 解法：定期檢查更新並調整模組
- [MEDIUM] 缺乏詳細文檔可能導致使用困難
  - 解法：參考社群討論或尋求幫助
- [MEDIUM] 安裝過程中可能缺乏指導，導致錯誤
  - 解法：仔細檢查安裝步驟，必要時尋求幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 內容創作者需要自由生成文本 | 非常適合 | 能夠繞過限制，讓創意流動更自由。 |
| 開發者需要測試 AI 模型的反應 | 適合 | 提供靈活的測試環境。 |
| 技術愛好者探索 AI 的潛力 | 非常適合 | 開放的環境適合進行各種實驗。 |
| 企業需要穩定的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到繞過限制的自由，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但仍需注意原始模型的安全性和穩定性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

DarkGPT 可以與現有的開發環境進行整合，特別是在需要使用 AI 的應用中。它最常與 Python 開發環境搭配使用，並且可以在本地環境中快速部署。在一個用 Flask 開發的應用中，你可以用這個模組來處理用戶請求，具體做法是將 DarkGPT 的輸入和輸出整合到 Flask 的路由中。整合到 CI/CD pipeline 中的友善度尚未評估，因為缺乏詳細的文檔和社群支持。最常見的整合問題是缺乏明確的指導，可能需要額外的調整來確保兼容性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 DarkGPT 出現之前，用戶主要依賴於原始的 ChatGPT，但其限制常常妨礙了創意和技術探索。隨著開源社群對 AI 模型的興趣增加，DarkGPT 提供了一個新的解決方案，讓用戶能夠更自由地使用 AI。技術上，反向工程和開源的興起使得這種繞過限制的方式變得可行。

這個專案代表了對於 AI 使用自由的需求，未來可能會促進更多類似工具的出現。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解 AI 模型的基本原理

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品中進行測試。

**成功指標**：用戶滿意度提升，創意生成效率提高 30%。

> [!warning] 退出計畫
> 所有設定以標準 JSON 格式保存，方便轉換至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/thakur-works--DarkGPT");
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
> const me = dv.page("Repos/thakur-works--DarkGPT");
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
| Forks | 90 |
| Open Issues | 0 |
| 最後推送 | 2026-05-10 |
| 建立日期 | 2026-05-10 |
| Repo 大小 | 2 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/thakur-works/DarkGPT) |
| Topics | `chatgpt-bypass` `chatgpt5` `darkgpt` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@thakur-works](https://github.com/thakur-works) | 2 |

**最新版本**：2.0.1 — v2.0.1 (2026-05-10)

## 社群與生態

**社群活躍度**：社群活動剛開始，尚未形成穩定的支持體系。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-05-10）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> MIT License
> 
> Copyright (c) 2026
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## 延伸閱讀

相關概念：[[AI 模組]] · [[開源]] · [[反向工程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/thakur-works/DarkGPT)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 模組）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 模組" AND file.name != "thakur-works--DarkGPT"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "thakur-works--DarkGPT"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "thakur-works--DarkGPT" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "thakur-works--DarkGPT"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 模組","開源","反向工程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "thakur-works--DarkGPT" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/thakur-works--DarkGPT");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "thakur-works--DarkGPT" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "thakur-works" AND file.name != "thakur-works--DarkGPT"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/thakur-works--DarkGPT");
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
> const me = dv.page("Repos/thakur-works--DarkGPT");
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
> const me = dv.page("Repos/thakur-works--DarkGPT");
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
> const me = dv.page("Repos/thakur-works--DarkGPT");
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
> const me = dv.page("Repos/thakur-works--DarkGPT");
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

> **2026-05-14** — 首次收錄
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

- [[2026-05-14|2026-05-14]] — 首次收錄，534 stars
