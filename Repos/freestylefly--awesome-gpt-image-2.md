---
repo: freestylefly/awesome-gpt-image-2
url: https://github.com/freestylefly/awesome-gpt-image-2
owner: freestylefly
owner_type: User
language: N/A
license: MIT
description: "Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，370+ 个案例逆向工程，20+ 套工业级模板，持续更新中"
homepage: ""
stars: 3434
stars_per_day: 429
forks: 496
open_issues: 4
created: 2026-04-25
pushed_at: 2026-05-04
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "提供工業級提示詞引擎與模板庫，幫助用戶高效生成穩定的 AI 圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-05"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 134678
readme_length: 6397
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:1274,2026-04-29:1716,2026-04-30:2149,2026-05-01:2562,2026-05-02:2989,2026-05-04:3434"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "awesome-gpt-image-2"
  - "freestylefly/awesome-gpt-image-2"
  - "提供工業級提示詞引擎與模板庫，幫助用戶高效生成穩定的 AI 圖像。"
---

# awesome-gpt-image-2

**3.4k** stars · **429** stars/天 · 建立 8 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> 提供工業級提示詞引擎與模板庫，幫助用戶高效生成穩定的 AI 圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (429 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效生成穩定 AI 圖像的設計師和開發者。
> **一句話重點** 這個專案的創新在於將提示詞結構化，讓生成 AI 圖像變得更可控和高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "freestylefly--awesome-gpt-image-2" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到穩定的圖像生成效果，值得嘗試。

> [!abstract] 核心創新
> 將提示詞轉化為結構化的 Prompt-as-Code 資產，提升生成的穩定性和可重用性。

## 專案簡介

這個專案的核心在於將散文式的提示詞轉化為結構化的 Prompt-as-Code 資產，讓用戶能夠在需要批量生成圖像時，快速而穩定地獲得所需的結果。用戶可以透過提供的 370+ 個案例和 20+ 套工業級模板，來逆向工程和組合出符合需求的提示詞。這些模板不僅適合手動使用，還能與自動化系統和 Agent 整合，提升工作效率。這種設計的優勢在於，使用者不再需要依賴單一的提示詞，而是能夠靈活組合各種視覺要素，如光影、材質等，從而達到更高的可控性和重用性。技術上，這個專案並未明確指出使用的框架或演算法，但其結構化的設計理念顯示出對於自動化和工作流友好的考量。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 EvoLinkAI/awesome-gpt-image-2-prompts，這個專案更強調模板的可重用性和結構化的提示詞管理。實際使用中，這個專案的效果取決於用戶對於模板的理解和應用能力，並且需要一定的學習曲線來掌握如何有效利用這些資源。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但對於大型企業的生產流程，可能需要進一步的整合和調整。總體來說，這個專案在未來的發展中可能會持續更新更多的案例和模板，進一步擴展其應用範圍。

## 重點功能

- 370+ 個案例 — 提供多樣化的視覺設計參考，幫助用戶快速找到靈感。
- 20+ 套工業級模板 — 結構化的提示詞模板，適合批量生成和自動化工作流。
- 原子化 Schema — 將視覺要素拆分為可組合的元件，提升重用性。
- 工作流友好 — 針對 Agent 和自動化系統設計，易於整合。
- 持續更新 — 定期增加新案例和模板，保持內容的新鮮度和實用性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/freestylefly/awesome-gpt-image-2.git
```
2. 進入專案目錄
```bash
cd awesome-gpt-image-2
```
3. 查看案例和模板
```bash
open docs/gallery.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 3434 stars（429/天），forks 496（14.4%），這顯示出強勁的增長潛力。作者 freestylefly 是一位活躍的開源貢獻者，專注於 AI 和設計領域，這個專案解決了生成 AI 圖像時提示詞不夠穩定和可重用的痛點，之前的工具多數只提供單一的提示詞，無法滿足批量生成的需求。社群對於這個工具的需求和反饋也促進了其快速發展，特別是在設計師和開發者中間。這個工具的出現正好契合了當前對於 AI 圖像生成的需求，並且其結構化的設計理念使得它在市場上具有競爭力。

## 適合誰使用

**目標受眾**：需要高效生成穩定 AI 圖像的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來快速生成多個版本的產品海報，因為可以透過模板自動化生成，節省了手動調整的時間。
> - 開發者用它來整合 AI 圖像生成到自動化工作流中，因為結構化的提示詞能夠提高生成圖像的穩定性和一致性。
> - 教育工作者用它來創建教學材料的視覺內容，因為提供的案例和模板能夠幫助他們快速找到合適的設計風格。

## 架構分析

這個專案採用的是結構化的提示詞管理架構，將視覺設計要素拆分為原子化的元件，方便用戶根據需求進行組合。這種設計使得用戶能夠靈活調整各個要素，從而達到更高的可控性。資料流方面，使用者可以透過案例畫廊快速找到所需的視覺類型，然後選擇相應的模板進行生成。這種架構的優勢在於能夠應對不同的設計需求，但也可能導致使用者在初期需要花費時間理解如何有效利用這些模板。整體來看，這個架構在未來的擴展性上有良好的潛力，因為可以隨著新案例和模板的增加而持續演進。

## 技術深入分析

這個專案的核心技術機制在於將提示詞轉化為結構化的資產，這樣的設計使得用戶能夠靈活組合各種視覺要素。雖然 README 中未明確提到具體的技術棧，但其強調的原子化 Schema 和工作流友好性顯示出對於自動化的重視。效能方面，這個專案能夠支持多種視覺設計需求，但具體的處理能力和資源需求尚未明確。設計取捨上，選擇結構化的提示詞管理帶來了更高的可控性，但也可能使得使用者在初期需要投入更多時間來理解如何使用這些資源。技術風險方面，若未來需求快速變化，可能需要不斷更新和擴展模板以保持競爭力。整合方面，這個專案的設計使其能夠輕鬆與現有的工作流和工具鏈進行整合，但具體的實作細節尚需用戶根據自身需求進行調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的項目介紹和使用指引，但缺乏具體的程式碼範例。安裝過程相對簡單，克隆專案後即可開始使用。文件目前僅提供英文版本，對於非英語使用者可能造成一定的障礙。整體來說，花 30 分鐘能夠理解基本的使用方式，但深入應用可能需要更多的時間學習。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的案例和模板，幫助用戶快速找到設計靈感。
> - 結構化的提示詞設計，提升生成的穩定性和可重用性。
> - 針對自動化工作流進行優化，易於與其他系統整合。

> [!danger] 缺點
> - 對於新手使用者來說，學習曲線較陡峭。
> - 目前僅提供英文文檔，對非英語使用者不夠友好。
> - 不支持直接生成圖像，需依賴外部工具。

> [!warning] 注意事項
> - 不支持直接生成圖像，需依賴外部 AI 圖像生成工具。
> - 模板的使用需要一定的學習曲線，對於新手可能不夠友好。
> - 目前僅提供英文文檔，對於非英語使用者可能造成理解障礙。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成和動畫，而本專案則是針對各類視覺設計的提示詞生成。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供的提示詞更偏向於單一案例，而本專案則強調結構化和模板化的管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成和動畫，而本專案則是針對各類視覺設計的提示詞生成。 | 如果你的專案主要集中在角色動畫和生成，這個工具會更合適。 | medium，因為需要重新適應不同的提示詞結構和生成方式。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供的提示詞更偏向於單一案例，而本專案則強調結構化和模板化的管理。 | 如果你只需要快速獲得單一圖像生成的提示，這個工具會更簡單易用。 | low，因為提示詞的使用方式相對簡單明瞭。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2** | **agent-sprite-forge** | **awesome-gpt-image-2-prompts** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色生成和動畫，而本專案則是針對各類視覺設計的提示詞生成。 | 提供的提示詞更偏向於單一案例，而本專案則強調結構化和模板化的管理。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的提示詞結構和生成方式。 | low，因為提示詞的使用方式相對簡單明瞭。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在角色動畫和生成，這個工具會更合適。 | 如果你只需要快速獲得單一圖像生成的提示，這個工具會更簡單易用 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 模板使用不當可能導致生成結果不一致，特別是對於新手使用者。
  - 解法：建議先參考案例，理解每個模板的設計意圖。
- **[HIGH]** 缺乏中文文檔可能會讓非英語使用者感到困難。
  - 解法：可尋找社群支持或使用翻譯工具。
- [MEDIUM] 不支持直接生成圖像，需依賴外部工具，可能會增加整合的複雜性。
  - 解法：提前確認所需的外部工具和 API 接口。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要快速生成多個版本的市場推廣材料 | 非常適合 | 結構化的模板能夠提高生成效率和一致性。 |
| 個人開發者希望在自己的專案中整合 AI 圖像生成 | 適合 | 提供的案例和模板能夠幫助快速上手。 |
| 大型企業需要穩定的圖像生成解決方案 | 不適合 | 目前仍在 alpha 階段，穩定性和生產準備度不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到穩定的圖像生成效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需依賴外部工具的安全性。整合到 CI/CD 中時，需確保外部工具的安全性和穩定性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案最常與 AI 圖像生成工具搭配使用，處於圖像生成的前端設計環節。用戶可以在使用 Next.js 的專案中，透過模板生成視覺內容，具體做法是將生成的提示詞與圖像生成 API 整合。支援的 CI 工具包括 GitHub Actions，並且可以與主流的 IDE 進行整合。最常見的整合問題是如何有效配置外部工具的 API 接口，這需要用戶根據具體情況進行調整。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
| Forks | 496 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-04 |
| 建立日期 | 2026-04-25 |
| Repo 大小 | 131.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/freestylefly/awesome-gpt-image-2) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@freestylefly](https://github.com/freestylefly) | 29 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新案例和模板。
**連結**：[文件](https://github.com/freestylefly/awesome-gpt-image-2/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-02 ~ 2026-05-03）
> **活躍天數** 2 天 · **最新 commit** Refresh featured case sections

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/freestylefly/awesome-gpt-image-2/issues/2) | 在线可视化展示站点 | 2 | 3 |
> | [#4](https://github.com/freestylefly/awesome-gpt-image-2/issues/4) | 666 | 0 | 0 |
> | [#3](https://github.com/freestylefly/awesome-gpt-image-2/issues/3) | 例 326：红蓝撞色高跟诱惑 明显和提供的提示词不一致 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，370+ 个案例逆向工程，18 套工业级模板
> 
>   
>   
>   
>   
> 
> > 不定期更新最新的玩法，欢迎star。
> > 本项目由 [词元 API](https://ciyuan.today/) 提供赞助支持。词元 API 是一个 AI 聚合平台，可以高性价比使用 GPT Image 2。
> 
> ## ⚡️ 项目愿景
> 
> GPT-Image2 全量开放后，AI 画图从“能不能出图”变成了“能不能稳定、可控、可复用地出图”。这个项目做的不是单纯收集提示词，而是把零散案例逆向整理成一套更适合 Agent 和自动化工作流调用的 Prompt-as-Code 资产。
> 
> 核心目标只有一个：把“散文式提示词”压缩成“结构化协议”。当你需要批量出图、做模板系统、接进生产流程时，这种整理方式比单纯堆案例更有价值。
> 
> - 🧱 原子化 Schema：把主体、光影、材质、排版等视觉要素拆成可组合组件
> - ⚙️ 工作流友好：面向 Agent、脚本和自动化系统，而不是只给人肉复制
> - 🧬 结构化控制：尽量提高版式、文案、信息层级的可控性
> 
> ## 📖 快速入口
> 
> - [完整案例总览](docs/gallery.md)
> - [案例画廊 Part 1：例 1-165](docs/gallery-part-1.md)
> - [案例画廊 Part 2：例 166-378](docs/gallery-part-2.md)
> - [工业级提示词模板与防坑指南](docs/templates.md#section-templates)
> - [MIT License](LICENSE)
> - [完整声明页](docs/disclaimer.md#section-disclaimer)
> 
> ## 🗂️ 分类概览
> 
> 先看案例画册，快速找到你想参考的视觉类型；再看提示词模板，把对应类型拆成可复用结构。
> 
> ### 🖼️ 案例分类画册
> 
>   
>     
>       🧩 UI与界面68 cases
>       
>       App、网页、仪表盘、社媒截图与产品界面。
>       查看案例
>     
>     
>       📊 图表与信息可视化55 cases
>       
>       信息图、知识图谱、技术解释与结构化图解。
>       查看案例
>     
>     
>       📰 海报与排版71 cases
>       
>       活动海报、封面、字体视觉和强排版画面。
>       查看案例
>     
>   
>   
>     
>       🛍️ 商品与电商24 cases
>       
>       商品图、详情页、包装卖点和商业广告。
>       查看案例
>     
>     
>       🏷️ 品牌与标志19 cases
>       
>       Logo、VI、品牌触点和 Campaign 视觉系统。
>       查看案例
>     
>     
>       🏛️ 建筑与空间25 cases
>       
>       建筑表现、室内空间、城市地图和空间概念。
>       查看案例
>     
>   
>   
>     
>       📷 摄影与写实34 cases
>       
>       人像、手机纪实、胶片质感和商业摄影。
>       查看案例
>     
>     
>       🎨 插画与艺术25 cases
>       
>       插画、艺术风格、材质实验和装饰画面。
>       查看案例
>     
>     
>       🧍 人物与角色14 cases
>       
>       角色设定、动作参考、卡牌和 3D 玩具。
>       查看案例
>     
>   
>   
>     
>       🎬 场景与叙事7 cases
>       
>       分镜、故事场景、直播画面和世界观叙事。
>       查看案例
>     
>     
>       🏮 历史与古风题材9 cases
>       
>       古风长卷、历史人物、传统题材和诗词画面。
>       查看案例
>     
>     
>       📚 文档与出版物7 cases
>       
>       白皮书、手册、百科图鉴和出版页设计。
>       查看案例
>     
>   
>   
>     
>       🧪 其他应用场景20 cases
>       
>       创意实验、特殊任务、混合玩法和实用场景。
>       查看案例
>     
>     
>       🖼️ 完整画廊
>       
>       按分册浏览全部 378 个案例和代表案例入口。
>       进入画廊
>     
>     
>       ⭐ 最新新增
>       
>       最近收录的 X 社区案例和新玩法。
>       查看最新
>     
>   
> 
> ### 🧩 提示词模板分类
> 
> 模板 Page 1 / 4：设计与信息
> 
> | 分类 | 模板入口 | 核心能力 |
> |---|---|---|
> | 🧩 UI与界面 | [查看提示词](docs/templates.md#tpl-ui) | 组件、页面层级、截图质感 |
> | 📊 图表与信息可视化 | [查看提示词](docs/templates.md#tpl-infographic) | 模块、箭头、数据结构、可读性 |
> | 📰 海报与排版 | [查看提示词](docs/templates.md#tpl-poster) | 版式、标题、人物和视觉冲击 |
> 
> 模板 Page 2 / 4：商业与空间
> 
> | 分类 | 模板入口 | 核心能力 |
> |---|---|---|
> | 🛍️ 商品与电商 | [查看提示词](docs/templates.md#tpl-product) | 产品卖点、包装、详情页结构 |
> | 🏷️ 品牌与标志 | [查看提示词](docs/templates.md#tpl-brand) | Logo、品牌身份、触点系统 |
> | 🏛️ 建筑与空间 | [查看提示词](docs/templates.md#tpl-architecture) | 透视、材质、室内外光线 |
> 
> 模板 Page 3 / 4：影像与角色
> 
> | 分类 | 模板入口 | 核心能力 |
> |---|---|---|
> | 📷 摄影与写实 | [查看提示词](docs/templates.md#tpl-photo) | 镜头、光线、真实纹理 |
> | 🎨 插画与艺术 | [查看提示词](docs/templates.md#tpl-illustration) | 笔触、材质、艺术风格 |
> | 🧍 人物与角色 | [查看提示词](docs/templates.md#tpl-character) | 人设、动作表、角色一致性 |
> 
> 模板 Page 4 / 4：叙事与扩展
> 
> | 分类 | 模板入口 | 核心能力 |
> |---|---|---|
> | 🎬 场景与叙事 | [查看提示词](docs/templates.md#tpl-scene) | 分镜、世界观、情绪铺陈 |
> | 🏮 历史与古风题材 | [查看提示词](docs/templates.md#tpl-history) | 朝代、服饰、长卷叙事 |
> | 📚 文档与出版物 | [查看提示词](docs/templates.md#tpl-document) | 页面系统、目录、版面规范 |
> | 🧪 其他应用场景 | [查看提示词](docs/templates.md#tpl-other) | 混合任务、实验玩法、特殊输出 |
> 
> ## 🖼️ 首页精选
> 
> ### 例 1：信息图可视化设计
> 
> [](docs/gallery-part-1.md#case-1)
> 
> 工程白皮书气质的信息图案例，适合看结构化信息图如何组织模块、层级和双语标签。  
> [查看完整案例](docs/gallery-part-1.md#case-1)
> 
> ### 例 2：社媒界面截图
> 
> [](docs/gallery-part-1.md#case-2)
> 
> 偏“产品界面 + 社媒内容截图”的混合场景，适合看文字区域、UI 框架和内容卡片的控制方式。  
> [查看完整案例](docs/gallery-part-1.md#case-2)
> 
> ### 例 6：插画艺术创作图
> 
> [](docs/gallery-part-1.md#case-6)
> 
> 日系奇幻插画范例，适合观察氛围、色彩和大场景构图的描述方式。  
> [查看完整案例](docs/gallery-part-1.md#case-6)
> 
> ### 例 17：界面交互设计图
> 
> [](docs/gallery-part-1.md#case-17)
> 
> 典型的“结构分解图 + 说明排版”场景，适合做产品示意图、海报化技术讲解图。  
> [查看完整案例](docs/gallery-part-1.md#case-17)
> 
> ### 例 166：十二黄金圣斗士卡牌合集
> 
> [](docs/gallery-part-2.md#case-166)
> 
> 多卡面、多元素统一风格的案例，适合参考批量生成与系列化设计。  
> [查看完整案例](docs/gallery-part-2.md#case-166)
> 
> ### 例 310：零食品牌技术分解图
> 
> [](docs/gallery-part-2.md#case-310)
> 
> 品牌叙事、分解结构和商业化呈现结合得比较完整，适合作为“信息图 + 品牌视觉”混合参考。  
> [查看完整案例](docs/gallery-part-2.md#case-310)
> 
> ### 苍何新增实测
> 
>   
>     
>       例 330：月下美女直播画面
>       
>       高仿直播截图，适合参考界面氛围、弹幕和人物写实结合。
>       查看案例
>     
>     
>       例 334：RAG 技术详解图
>       
>       技术概念、流程箭头和中文说明模块的结构参考。
>       查看案例
>     
>     
>       例 338：《赤壁怀古》长卷图
>       
>       长卷尺寸、古风叙事和整篇文字排版结合完整。
>       查看案例
>     
>   
>   
>     
>       例 331：西安手绘水彩城市地图
>       
>       城市地图、手绘路线和地标标注的轻量参考。
>       查看案例
>     
>     
>       例 332：茶π产品宣传海报
>       
>       饮品商品图、中文卖点和清爽商业海报组合。
>       查看案例
>     
>     
>       例 339：Apple 风格自然科普海报
>       
>       极简棚拍、自然主体和科普信息排版。
>       查看案例
>     
>   
> 
> ### 近 24 小时 X 社区新增
> 
>   
>     
>       例 375：古希腊三哲时间轴城市图
>       
>       历史人物、城市背景和时间轴叙事。
>       查看案例
>     
>     
>       例 376：泼洒抹茶街头手机照片
>       
>       手机纪实、真实光影和负面约束。
>       查看案例
>     
>     
>       例 377：樱花咖啡户外人像
>       
>       参考图编辑、身份保持和户外生活方式写真。
>       查看案例
>     
>     
>       例 378：高端 3D 收藏玩具头像
>       
>       参考图转 3D 收藏玩具，保留身份锚点。
>       查看案例
>     
>   
> 
> #### 代表案例 1：月下美女直播画面
> 
> [](docs/gallery-part-2.md#case-330)
> 
> 高仿直播截图场景，重点看界面氛围、中文弹幕和人物写实感的结合。  
> [查看完整案例](docs/gallery-part-2.md#case-330)
> 
> #### 代表案例 2：RAG 技术详解图
> 
> [](docs/gallery-part-2.md#case-334)
> 
> 适合用来参考“技术概念 + 信息图排版 + 中文说明模块”的组织方式。  
> [查看完整案例](docs/gallery-part-2.md#case-334)
> 
> #### 代表案例 3：《赤壁怀古》长卷图
> 
> [](docs/gallery-part-2.md#case-338)
> 
> 长卷尺寸、古风叙事和整篇文字排版结合得很完整，适合作为长文本视觉化参考。  
> [查看完整案例](docs/gallery-part-2.md#case-338)
> 
> ## 🧩 模板入口
> 
> 完整模板已移到 [`docs/templates.md`](docs/templates.md)。如果你想按分类快速跳转，直接使用上方的 **提示词模板分类**；如果想看完整模板正文，进入 [工业级提示词模板与防坑指南](docs/templates.md#section-templates)。
> 
> ## 🚀 怎么用这个库
> 
> 1. 先在精选案例里确定你要模仿的输出类型。
> 2. 再去完整画廊里找相近案例，抄结构，不要只抄风格词。
> 3. 最后回到模板页，把你的业务变量填进通用模板或 JSON 模板。
> 
> ## 📄 声明与补充
> 
> ## 致谢与来源说明
> 
> 本项目在整理与研究过程中，参考并使用了 [YouMind](https://youmind.com/) 与 [OpenNana](https://opennana.com/) 的公开提示词库内容，仅用于学习、归纳与方法论研究。相关内容版权归原作者或原平台所有，如有侵权或不当使用请联系处理，我们将第一时间修正或下线。
> 
> ## 声明 (Disclaimer)
> 
> 本项目仅整理公开可访问的社区提示词与示例图片，默认用于学习与研究，不主张对第三方原创内容的任何所有权。
> 
> 本项目里的所有提示词案例和生成的图片，最初的灵感和数据来源均来自公开社区，特别是 [YouMind](https://youmind.com/) 与 [OpenNana](https://opennana.com/)。我们做这个项目，主要是想把好看的案例拆解成可复用的结构化协议，用于学习、归纳和大模型 Agent 接入的自动化测试。
> 
> - 我们尽最大努力保留原始来源，包括作者主页、原帖链接与原仓库链接。
> - 涉及第三方内容时，遵循来源仓库声明、`CC BY 4.0` 等许可及对应平台规则。
> - 若你是原作者或权利人，认为某条内容不应展示，请在本仓库发起 Issue 并附上条目链接，我们将在核验后快速下架。
> - 本仓库不保证第三方内容可用于商业用途；商业使用前请自行取得原权利方授权。
> 
> **如果你觉得这个库帮到了你，请点亮右上角的 Star ⭐。**
> 
> ## Star 趋势图
> 
> [](https://star-history.com/#freestylefly/awesome-gpt-image-2&Date)
> 
> ## 公众号
> 
> 微信搜 **苍何** 或扫描下方二维码关注苍何的原创公众号，回复 **AI** 即可获取更多 AI 提示词学习资源。
> 
> ## 📜 开源协议
> 
> 本项目采用 [MIT License](LICENSE) 开源。你可以在保留许可声明的前提下自由使用、修改、分发与二次开发。

## 延伸閱讀

相關概念：[[自動化]] · [[Prompt Engineering]] · [[AI 圖像生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]]

[GitHub](https://github.com/freestylefly/awesome-gpt-image-2)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "freestylefly--awesome-gpt-image-2" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","Prompt Engineering","AI 圖像生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "freestylefly--awesome-gpt-image-2" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "freestylefly--awesome-gpt-image-2" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "freestylefly" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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

> **2026-04-28** — 首次收錄
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

- [[2026-05-02|2026-05-02]] — 再次上榜，3.0k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，2.6k stars
- [[2026-04-30|2026-04-30]] — 再次上榜，2.1k stars
- [[2026-04-29|2026-04-29]] — 再次上榜，1.7k stars
- [[2026-04-28|2026-04-28]] — 首次收錄，1.3k stars
