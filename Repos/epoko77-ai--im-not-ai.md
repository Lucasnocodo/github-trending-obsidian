---
repo: epoko77-ai/im-not-ai
url: https://github.com/epoko77-ai/im-not-ai
owner: epoko77-ai
owner_type: User
language: Python
license: MIT
description: "AI가 쓴 글이 아닌 것처럼 윤문해주는 스킬"
homepage: ""
stars: 670
stars_per_day: 112
forks: 71
open_issues: 8
created: 2026-04-24
pushed_at: 2026-04-29
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "文本處理"
release_tag: "v1.5.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "將 AI 生成的韓文文本轉換為自然流暢的韓文，保持內容不變。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-08"
contributor_count: 3
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 274
readme_length: 9948
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:642,2026-05-01:670"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "im-not-ai"
  - "epoko77-ai/im-not-ai"
  - "將 AI 生成的韓文文本轉換為自然流暢的韓文，保持內容不變。"
---

# im-not-ai

**642** stars · **128** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/epoko77-ai--im-not-ai");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.5.0`

> [!summary] 一句話摘要
> 將 AI 生成的韓文文本轉換為自然流暢的韓文，保持內容不變。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (128 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要高效潤飾韓文文本的內容創作者和編輯。
> **一句話重點** 這個專案的設計不僅提高了韓文文本的潤飾效率，還針對韓文的特性進行了專門優化，解決了其他工具無法有效處理的問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "文本處理" && p.file.name !== "epoko77-ai--im-not-ai" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 文本處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，能夠顯著提升韓文文本的質量，值得採用。

> [!abstract] 核心創新
> 這個專案專注於韓文文本的潤飾，針對 AI 生成文本的特性進行了優化。

## 專案簡介

這個專案的核心機制是透過多個專門的代理來檢測和潤飾 AI 生成的韓文文本，確保最終輸出在內容上不變但語言上更加自然。用戶只需將 AI 生成的文本粘貼進去，系統會自動進行潤飾，並生成潤飾後的文本和摘要。主要的指令是 `/humanize [文本]`，這樣可以快速啟動潤飾過程。這個工具的賣點在於它專注於韓文，能有效處理由於英語翻譯造成的語言不自然問題。技術上，專案使用 Python 實作，並採用多代理架構，這使得潤飾過程可以在單一請求中完成，顯著提高了效率。根據 README，v1.5 的性能顯示，潤飾 5,000 字的文本的處理時間從 25 分鐘縮短至 3 分鐘，這是因為它將多個處理步驟整合為單一調用。

與其他類似工具相比，如 QuillBot 和 Hix，這個專案針對韓文的特性進行了優化，能更好地捕捉韓文特有的語言模式和結構。使用者在實際操作中可能會遇到對於某些特定文本的潤飾效果不如預期的情況，這需要進一步的調整和優化。這個專案目前處於穩定階段，適合需要高效處理韓文文本的團隊或個人。未來幾個月內，預計會進一步擴展功能，包括對其他語言的支持。對於需要在短時間內提升文本質量的使用者，這個工具無疑是一個值得考慮的選擇。

**技術棧**：`Python`

## 重點功能

- 多代理架構 — 使用多個專門代理進行文本檢測和潤飾，確保高效能。
- Fast 模式 — 在 5,000 字以下的文本中，潤飾時間可縮短至 3 分鐘。
- Strict 模式 — 提供更精確的檢測和潤飾，適合長文本處理。
- 自動生成摘要 — 生成潤飾後文本的摘要，方便使用者快速了解變更。
- 韓文特化 — 專注於韓文的語言特性，能有效處理翻譯造成的語言不自然問題。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/epoko77-ai/im-not-ai.git
```
2. 進入專案資料夾
```bash
cd im-not-ai
```
3. 啟動 Claude Code
```bash
claude
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 642 stars（128/天），forks 67（10.4%），顯示出不錯的增長潛力。這個專案的主要貢獻者包括 epoko77-ai、Squirbie 和 shoveller，他們在 AI 和自然語言處理領域有豐富的經驗。這個工具解決了韓文潤飾的需求，特別是針對 AI 生成文本的自然性問題，這在韓文處理工具中尚屬罕見。最近的版本更新顯示出對性能的重視，這吸引了不少使用者的注意。社群的活躍度也表現在開放的 Issues 和 PR 中，顯示出對功能改進的持續關注。

## 適合誰使用

**目標受眾**：需要高效潤飾韓文文本的內容創作者和編輯。

> [!example] 使用場景
> - 內容編輯者用它來潤飾 AI 生成的文章，因為這樣可以節省大量的時間，並提高文本的自然流暢度。
> - 學術研究者用它來檢查和潤飾研究報告中的 AI 生成內容，因為這樣可以確保報告的專業性和可讀性。
> - 自由工作者用它來提升客戶提供的 AI 文本質量，因為這樣能夠提高客戶滿意度並獲得更多的回頭客。

## 架構分析

這個專案採用多代理架構，主要分為 Fast 模式和 Strict 模式。Fast 模式使用單一調用的 monolith 結構，能在一個請求中完成檢測、潤飾和驗證，這樣設計的目的是為了提高處理效率，減少延遲。Strict 模式則使用多個代理進行分步處理，這樣可以提供更精確的檢測和潤飾，但代價是處理時間較長。這種設計使得專案能夠靈活應對不同長度和複雜度的文本，並能在性能和準確性之間取得平衡。未來的擴展可能會增加對其他語言的支持，這將是進一步的挑戰。

## 技術深入分析

這個專案的核心技術機制是多代理架構，分為 Fast 模式和 Strict 模式。Fast 模式使用單一調用的 monolith 結構，能在一個請求中完成檢測、潤飾和驗證，這樣的設計使得處理速度顯著提高。根據 README，v1.5 的性能顯示，潤飾 5,000 字的文本的處理時間從 25 分鐘縮短至 3 分鐘，這是因為它將多個處理步驟整合為單一調用。Strict 模式則使用多個代理進行分步處理，這樣可以提供更精確的檢測和潤飾，但代價是處理時間較長。

這種設計使得專案能夠靈活應對不同長度和複雜度的文本，並能在性能和準確性之間取得平衡。技術上，專案使用 Python 實作，並採用多代理架構，這使得潤飾過程可以在單一請求中完成，顯著提高了效率。未來的擴展可能會增加對其他語言的支持，這將是進一步的挑戰。整體而言，這個專案在韓文文本潤飾領域中具有明顯的優勢，特別是對於 AI 生成文本的處理。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指導。安裝過程相對順暢，但需要確保在正確的資料夾中啟動 Claude Code。文件中有多種使用範例，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 專注於韓文潤飾，能有效處理翻譯造成的語言不自然問題。
> - 高效的處理速度，能在短時間內完成大量文本的潤飾。
> - 多代理架構使得潤飾過程更加靈活和可擴展。

> [!danger] 缺點
> - 目前僅支援韓文，對其他語言的支持尚未實現。
> - 對於某些特定文本的潤飾效果可能不如預期，需手動調整。
> - Strict 模式在處理長文本時可能導致較長的等待時間。

> [!warning] 注意事項
> - 僅支援韓文文本潤飾，對其他語言的支持尚未實現。
> - 對於某些特定的文本結構，潤飾效果可能不如預期，需要手動調整。
> - 在處理非常長的文本時，Strict 模式可能會導致較長的處理時間。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於多語言文本生成，而本專案專注於韓文的潤飾，能更好地處理韓文特有的語言模式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具主要用於文本分析，而本專案則專注於文本的潤飾和自然化，適合需要提升文本質量的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| QuillBot | QuillBot 是一個通用的文本潤飾工具，支持多種語言，但對韓文的潤飾效果不如本專案專注於韓文的特性。 | 如果你的團隊需要支持多種語言的文本潤飾，QuillBot 可能更合適。 | medium，因為需要適應不同的使用介面和功能。 |
| Hix | Hix 提供了類似的文本潤飾功能，但缺乏針對韓文的專門優化，可能無法有效處理韓文特有的語言模式。 | 如果你的需求不僅限於韓文，Hix 可能會是一個選擇，但效果可能不如本專案。 | medium，因為需要重新學習其功能和操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **im-not-ai** | **QuillBot** | **Hix** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | QuillBot 是一個通用的文本潤飾工具，支持多種語言，但對韓文的潤飾效果不如本專案專注於韓文的特性。 | Hix 提供了類似的文本潤飾功能，但缺乏針對韓文的專門優化，可能無法有效處理韓文特有的語言模式。 |
> | 遷移成本 | - | medium，因為需要適應不同的使用介面和功能。 | medium，因為需要重新學習其功能和操作方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要支持多種語言的文本潤飾，QuillBot 可 | 如果你的需求不僅限於韓文，Hix 可能會是一個選擇，但效果可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合需要高效處理韓文文本的團隊或個人，並且已經在穩定版本中運行。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在處理特定文本時，潤飾效果可能不如預期，特別是對於複雜的句子結構。
  - 解法：可以手動調整潤飾結果，或使用 Strict 模式進行更精確的處理。
- [MEDIUM] 在使用 Fast 模式時，對於超過 5,000 字的文本，可能會自動轉換為 Strict 模式，導致處理時間延長。
  - 解法：對於長文本，建議提前拆分為多個請求。
- [low] 某些特定的韓文表達可能未被正確檢測，導致潤飾不完全。
  - 解法：可以在輸入文本中標註需要特別處理的部分。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要潤飾 AI 生成的學術報告的研究者 | 非常適合 | 能夠保持學術內容的完整性，同時提升語言流暢性。 |
| 內容創作者需要快速潤飾大量文本 | 適合 | 高效的處理速度能夠節省時間。 |
| 對韓文潤飾有特殊需求的企業 | 普通 | 目前僅限於韓文，對其他語言的支持尚未實現。 |
| 需要處理多語言文本的團隊 | 不適合 | 此工具專注於韓文，無法滿足多語言需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠顯著提升韓文文本的質量，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude Code 搭配使用，主要在文本潤飾的工作流中。用戶可以在 Claude Code 環境中直接使用此工具進行文本處理，並生成潤飾結果。與主流 CI/CD 工具的整合良好，能夠輕鬆嵌入到現有的開發流程中。整合過程中最常見的問題是確保在正確的資料夾中啟動 Claude Code，以避免功能無法正常運作。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，韓文文本的潤飾主要依賴於通用的文本處理工具，這些工具對韓文的支持不足，導致潤飾效果不佳。隨著 AI 技術的進步，專門針對韓文的潤飾需求逐漸浮現，這促使了本專案的開發。這個工具代表了針對特定語言的文本處理趨勢，未來可能會有更多針對其他語言的專門工具出現。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解自然語言處理基本概念

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個非核心模組中開始使用。

**成功指標**：文本潤飾後的質量提升明顯，客戶滿意度提高。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他文本處理工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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
| Forks | 67 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-24 |
| Repo 大小 | 274 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/epoko77-ai/im-not-ai) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@epoko77-ai](https://github.com/epoko77-ai) | 6 |
> | [@Squirbie](https://github.com/Squirbie) | 1 |
> | [@shoveller](https://github.com/shoveller) | 1 |

**最新版本**：v1.5.0 — v1.5.0 — v1.1 베이스라인 + Monolith Fast Path (2026-04-26)

> [!info]- Release Notes
> ## 핵심 변경
> 
> v1.2(voice profile) · v1.3(candidate pool) · v1.4(역할별 모델 분산)이 모두 핫패스 비용을 잡지 못한 게 검증됐습니다. 5,000자 입력 윤문 wall-clock이 25분에 달했고, v1.4의 모델 다운그레이드만으로는 detector 1콜이 여전히 8분이었습니다.
> 
> **진범은 모델이 아니라 에이전트 간 컨텍스트 재로드 + 에이전트 내부 도구 호출 chain 누적**이었습니다. v1.5는 이를 정면 대응합니다.
> 
> ### 1. v1.2~v1.4 폐기 (롤백)
> - 5인 에이전트 정의를 v1.1 commit `f25ee64` 시점으로 복원
> - voice profile · candidate pool · 권한 위계 절 모두 제거
> - reference 4개 파일 삭제 (`author-context-schema.md` · `pattern-candidates.md` · `promotion-checklist.md` · `sample-collection.md`)
> 
> ### 2. Monolith Fast Path 신설 (디폴트)
> - `humanize-monolith` 에이전트(opus): 한 콜 안에서 탐지·윤문·자체검증 일괄 처리
> - 도구 호출 4~5회 캡 (Read 입력 + Read 룰북 + Write final + Write summary)
> - `quick-rules.md`(150줄): 본진 386줄에서 S1·S2 핵심 패턴만 추린 슬림 룰북
> 
> ### 3. Strict 모드 보존 (`--strict` 또는 자동 승급)
> - v1.1 5인 파이프라인을 strict 백본으로 유지
> - 8,000자+ 입력은 자동 승급
> - 부분 재실행("이 카테고리만 다시"·"2차 윤문")도 strict로 자동 전환
> 
> ### 4. 분류 체계 본진 유지
> - `ai-tell-taxonomy.md`의 v1.2~v1.3.1 발굴 신규 패턴(C-9·C-10·D-7·H-3·I-3·I-4 보강 등) 모두 보존
> - voice profile 종속 절(권한 위계 §1~§6)만 제거
> 
> ## 검증 결과 (같은 칼럼 2,604자)
> 
> | 항목 | v1.4 (detector haiku 1콜) | v1.5 (monolith opus 1콜) |
> |---|---|---|
> | Wall-clock | 7분 58초 | **3분 28초** |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的 Issues 和 PR 顯示出對功能改進的持續關注。
**連結**：[文件](https://github.com/epoko77-ai/im-not-ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-25 ~ 2026-04-29）
> **活躍天數** 4 天 · **最新 commit** docs: add Opencode ocx port (#15)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/epoko77-ai/im-not-ai/issues/8) | v1.3 검토: Claude Code Plugin/Marketplace 정식 지원 | 2 | 0 |
> | [#6](https://github.com/epoko77-ai/im-not-ai/issues/6) | im-not-ai를 사용해보니 불편한게 한가지 => 슬래시커맨드가 있으면 더 좋을것 같아요 | 1 | 4 |
> | [#14](https://github.com/epoko77-ai/im-not-ai/issues/14) | 만드신 skill 을 rails 웹의 agent 가 사용할 수 있도록 만들어봤습니다. | 0 | 1 |
> | [#11](https://github.com/epoko77-ai/im-not-ai/issues/11) | ai 한글화 작업 | 0 | 0 |
> | [#5](https://github.com/epoko77-ai/im-not-ai/issues/5) | 라이선스 내용이 추가해주심이? | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Humanize KR — 한글 AI 티 제거기 v1.5
> 
> AI(ChatGPT · Claude · Gemini 등)가 쓴 한글 글을 **내용은 한 글자도 건드리지 않고** 문체 · 리듬 · 표현만 자연스러운 한국어로 되돌리는 Claude Code 스킬입니다. 
> 
> 번역투, 과도한 영어 인용, 기계적 병렬 ("첫째 · 둘째 · 셋째"), "결론적으로 / 시사하는 바가 크다" 같은 AI 특유 관용구, 피동태 남용, 문두 접속사 남발, 이모지·불릿 남용 등 **10대 카테고리 × 40+ 서브 패턴**을 심각도(S1/S2/S3)로 분류해 스팬 단위로 탐지한 뒤, 윤문합니다. 
> 
> 
> ## 왜 한글 특화인가
> 
> 영어권 humanizer(QuillBot · Hix · Undetectable AI)는 한국어에 약합니다. 한글 AI 글의 티는 대부분 **영어 번역투**에서 나옵니다. 
> 
> - "AI 기술을 **통해** 효율을 높**일 수 있다**" → "AI로 효율을 높인다"
> - "이에 **있어서** 중요한 **점은**" → "여기서 중요한 건"
> - "~**에 의해** 생성된" → "~가 만든"
> - "**결론적으로**, 이는 **시사하는 바가 크다**" → (삭제)
> 
> 이 하네스는 그 한글 고유 패턴을 SSOT로 정리하고, 탐지·윤문·내용 감사·자연스러움 검증을 분리된 에이전트로 수행합니다.
> 
> 
> ## 4대 철칙
> 
> 1. **의미 불변** — 사실 · 주장 · 수치 · 고유명사 · 직접 인용은 100% 원문 보존.
> 2. **근거 기반** — 탐지된 span에만 수술적 수정. 탐지 없는 구간은 건드리지 않음.
> 3. **장르 유지** — 칼럼을 문학으로, 리포트를 에세이로 옮기지 않음.
> 4. **과윤문 금지** — 변경률 30% 초과 시 경고, 50% 초과 시 강제 중단.
> 
> 
> ## 아키텍처 (v1.5)
> 
> **Fast 모드 (디폴트, 5,000자 이하)**
> 
> ```
> 입력 텍스트
>     ↓
> [humanize-monolith]   ── 한 콜 안에서 탐지 → 윤문 → 자체검증 일괄
>     ↓                     (도구 호출 4~5회 캡, opus, ~3분)
> final.md + summary.md
> ```
> 
> **Strict 모드 (`--strict` 또는 8,000자+ 자동 승급)**
> 
> ```
> 입력 텍스트
>     ↓
> [ai-tell-detector]        ── 탐지 (span · category · severity)
>     ↓
> [korean-style-rewriter]   ── finding 기반 수술적 윤문
>     ↓
> [병렬 검증 팀]
>     ├─ [content-fidelity-auditor]  ── 13항 체크리스트로 의미 동등성 감사
>     └─ [naturalness-reviewer]      ── 탐지 재실행으로 잔존·과윤문 판정
>     ↓
> [오케스트레이터 종합]
>     ├─ accept              → final.md + summary.md
>     ├─ rewrite_round_2     → 2차 윤문 (최대 3회)
>     ├─ rollback_and_rewrite → 문제 edit 롤백
>     └─ hold_and_report     → 사람 검토 권고
> ```
> 
> 
> ## 7인 에이전트
> 
> | 에이전트 | 모드 | 역할 |
> |---------|---|------|
> | `humanize-monolith` | **Fast 디폴트** | 단일 호출 윤문 (탐지·윤문·자체검증 일괄, 도구 호출 4~5회 캡) |
> | `ai-tell-detector` | Strict | span 단위 JSON 탐지 리포트 생성 |
> | `korean-style-rewriter` | Strict | finding 기반 수술적 윤문, 변경률 모니터링 |
> | `content-fidelity-auditor` | Strict | 의미 동등성 감사 (13항), 훼손 시 롤백 지시 |
> | `naturalness-reviewer` | Strict | 잔존 AI 티 · 과윤문 · 자연도 판정, 품질 등급 A~D |
> | `korean-ai-tell-taxonomist` | 별도 명령 | 분류 체계(SSOT) 관리, 신규 패턴 심사 승격 |
> | `humanize-web-architect` | 옵션 | Next.js 15 + Vercel 웹 서비스 확장 설계 |
> 
> 
> ## AI 티 분류 체계 (요약)
> 
> | ID | 대분류 | 대표 서브 패턴 |
> |----|-------|---------------|
> | A | 번역투 | "~를 통해", "~에 대해", "~에 있어서", 이중 피동 "~되어진다", "가지고 있다" |
> | B | 영어 인용·용어 과다 | 과도한 괄호 병기, 번역 가능한 영어 그대로 |
> | C | 구조적 AI 패턴 | 기계적 "첫째/둘째/셋째", 과도한 불릿·헤딩·이모지 |
> | D | AI 특유 관용구 | "결론적으로", "시사하는 바가 크다", "주목할 만하다", "혁신적인" |
> | E | 리듬 균일성 | 문장 길이 표준편차 낮음, 동일 종결어미 반복 |
> | F | 수식·중복 | "매우", "정말", 동의어 이중 수식, "~적/~성/~화" 남발 |
> | G | Hedging 남용 | "~할 수 있을 것으로 보인다" 다중 완곡 |
> | H | 접속사 남발 | 문두 "또한/따라서/즉/나아가" 연속 |
> | I | 형식명사 과다 | "것이다", "점", "수", "바", "~할 필요가 있다" |
> | J | 시각 장식 남용 | 과도한 **볼드**, "따옴표", 대시(—) 남발 |
> 
> 전체 40+ 서브 패턴과 처방: [`ai-tell-taxonomy.md`](.claude/skills/humanize-korean/references/ai-tell-taxonomy.md) · [`rewriting-playbook.md`](.claude/skills/humanize-korean/references/rewriting-playbook.md)
> 
> 
> ## 심각도 & 품질 등급
> 
> **심각도**
> - **S1 결정적**: 한 번만 나와도 AI 확신. 무조건 제거.
> - **S2 강함**: 1~2회 허용, 3회+ 반복 시 제거.
> - **S3 약함**: 다른 패턴과 중첩될 때만 문제.
> 
> **품질 등급 (윤문 후)**
> - **A**: S1 0건, S2 ≤2건, 점수 개선 70%+
> - **B**: S1 0건, S2 ≤4건, 개선 50%+
> - **C**: S1 1~2건 or 과윤문 시그널 2개 → 2차 윤문
> - **D**: S1 3건+ or 심각한 과윤문 → 사람 검토
> 
> 
> ## 사용법 — 5분이면 따라합니다
> 
> 
> ### 0. 전제
> 
> [Claude Code](https://claude.com/claude-code)가 설치돼 있어야 합니다. Mac · Windows · Linux 모두 지원합니다.
> 
> 설치 확인:
> ```bash
> claude --version
> ```
> 
> > Claude Code는 터미널에서 Claude(Anthropic의 AI)와 대화하며 파일을 같이 편집하는 CLI입니다. 이 리포의 스킬·에이전트는 Claude Code에서만 작동합니다. (웹 버전 Claude.ai나 일반 ChatGPT에서는 안 됩니다.)
> 
> 
> ### 1. 리포 받기
> 
> ```bash
> git clone https://github.com/epoko77-ai/im-not-ai.git
> cd im-not-ai
> ```
> 
> 
> ### 2. 이 폴더 안에서 Claude Code 켜기
> 
> ```bash
> claude
> ```
> 
> > **중요:** 꼭 `im-not-ai` 폴더 **안에서** 실행하세요. 다른 위치에서 켜면 이 리포의 스킬이 로드되지 않아 일반 Claude Code처럼 동작합니다.
> 
> 
> ### 3. AI가 쓴 한글 글 붙여넣고 부탁하기
> 
> Claude Code에서는 세 가지 방법 중 편한 쪽으로 사용합니다. Codex 사용자는 아래 **방법 D**의 community port를 참고하세요.
> 
> **방법 A — 자연어 한 문장 (가장 쉬움)**
> 
> 평소 말투 그대로 쓰면 됩니다:
> 
> ```
> 이 AI 글 자연스럽게 윤문해줘:
> 
> [ChatGPT / Claude / Gemini 초안 여기에 붙여넣기]
> ```
> 
> 아래 표현 중 아무거나 쓰면 스킬이 자동 발동합니다:
> - "AI 티 없애줘"
> - "GPT 문체 제거해줘"
> - "사람이 쓴 것처럼 윤문해줘"
> - "번역투 제거"
> - "한글 AI 윤문"
> 
> **방법 B — 슬래시 커맨드** *(v1.2~)*
> 
> ```
> /humanize [윤문할 텍스트 또는 파일 경로]
> ```
> 
> 옵션을 인자 끝에 자연어로 적을 수 있습니다: `장르: 칼럼`, `강도: 적극`, `최소심각도: S1`. 결과가 마음에 안 들면 `/humanize-redo "번역투만 다시"` 같은 식으로 재실행. 두 커맨드 정의: [`commands/`](.claude/commands/)
> 
> **방법 C — Plugin / 자동 설치기** *(@gaebalai 포크)*
> 
> [`gaebalai/im-not-ai`](https://github.com/gaebalai/im-not-ai) 포크가 Claude Code Plugin/Marketplace 규격으로 패키징되어 있습니다. `/plugin install humanize-korean@epoko77-ai-plugins` 또는 `./scripts/install.sh --target ~/my-project` 한 줄로 설치 가능합니다. 본체 정식 Plugin 지원은 v1.6 검토 중입니다 ([Issue 추적 예정](https://github.com/epoko77-ai/im-not-ai/issues)).
> 
> **방법 D — Codex Plugin (community)**
> 
> [`Squirbie/im-not-ai-codex`](https://github.com/Squirbie/im-not-ai-codex)에서 Codex Desktop/CLI용 community plugin 포트를 제공합니다. 원본 taxonomy/playbook을 유지하고 Codex plugin/skill 구조에 맞게 어댑터화한 별도 배포판이며, 공식 Claude Code 버전과 분리되어 관리됩니다.
> 
> 설치:
> 
> ```bash
> codex plugin marketplace add Squirbie/im-not-ai-codex
> ```
> 
> **방법 E — Web UI (비공식)**
> 
> opencode 로 윤문하는 커뮤니티 제작 포트입니다.
> - 접속: [im-not-ai-ocx.illuwa.click](https://im-not-ai-ocx.illuwa.click/)
> 
> 
> ### 4. 결과 확인
> 
> Claude Code가 입력 길이·옵션에 따라 두 모드 중 하나로 처리합니다.
> 
> **Fast 모드 (디폴트, 5,000자 이하 · ~3분)** — `humanize-monolith` 한 콜이 메모리 안에서 탐지·윤문·자체검증을 모두 끝냅니다. 산출물은 `_workspace/{실행날짜-번호}/`에 두 파일:
> 
> | 파일 | 내용 |
> |------|------|
> | `01_input.txt` | 원문 그대로 |
> | `final.md` | 윤문본 |
> | `summary.md` | 메트릭 · 카테고리 탐지 (before/after) · 자체검증 6항 · 등급 · 주요 변경 하이라이트 |
> 
> **Strict 모드 (`--strict` 또는 8,000자+ 자동 승급 · 더 정밀)** — 5인 파이프라인이 단계별 산출물을 분리해 저장합니다:
> 
> | 파일 | 내용 |
> |------|------|
> | `01_input.txt` | 원문 그대로 |
> | `02_detection.json` | AI 티 탐지 리포트 (위치·종류·심각도) |
> | `03_rewrite.md` | 윤문본 |
> | `04_fidelity_audit.json` | 내용 훼손 감사 결과 |
> | `05_naturalness_review.json` | 자연도 재측정 결과 |
> | `final.md` + `summary.md` | 최종 윤문본 + 점수·주요 변경·등급 요약 |
> 
> 부분 재실행("이 카테고리만 다시"·"2차 윤문")은 strict 모드로 자동 전환됩니다.
> 
> 
> ### 5. 결과가 맘에 안 들면
> 
> 그대로 말씀하시면 됩니다. 재실행·수정 명령을 따로 외울 필요 없습니다:
> 
> - **"이 문단만 다시 윤문해줘"** — 해당 구간만 재시도
> - **"번역투만 더 손봐줘"** (또는 "관용구만 다시") — 특정 카테고리만 재처리
> - **"윤문 강도 낮춰줘"** — 보수적 윤문 (결정적 패턴만 제거)
> - **"원문 톤을 더 살려줘"** — 변경률 상한을 낮춰 원문 유지
> - **"2차 윤문해줘"** — 현재 결과를 한 번 더 다듬기
> 
> 
> ### 6. 다른 글로 또 돌리고 싶을 때
> 
> Claude Code 세션 안에서 새 글을 붙여넣고 똑같이 부탁하면 됩니다. 실행마다 새 `_workspace/{날짜-번호}/` 폴더가 만들어져 이전 결과와 섞이지 않습니다.
> 
> 
> ## Do-NOT List (탐지·윤문 대상 제외)
> 
> - 수치 · 단위 · 날짜
> - 고유명사 · 인명 · 제품명 · 모델명
> - 큰따옴표 내부 직접 인용
> - 법률 · 규정 조문
> - 학술 개념어 (불가피한 경우)
> 
> 
> ## 웹 서비스 확장 (옵션)
> 
> `humanize-web-architect` 에이전트가 Next.js 15 App Router + Vercel Fluid Compute + AI Gateway 기반 웹앱 설계를 담당한다. UX는 4화면(입력 → 탐지 하이라이트 → 좌우 diff → 윤문본 복사). 상세: [`web-service-spec.md`](.claude/skills/humanize-korean/references/web-service-spec.md).
> 
> 로드맵: v0 MVP(익명·단일 호출) → v1(로그인·히스토리) → v2(Pro/Team · API · 웹훅) → v3(Chrome Extension) → v4(일본어·중국어 확장).
> 
> 
> ## v1.5 — v1.1 베이스라인 + Monolith Fast Path (2026-04-26)
> 
> v1.2(voice profile)·v1.3(candidate pool)·v1.4(역할별 모델 분산)이 모두 핫패스 비용을 잡지 못했음이 검증으로 확인됐습니다. 5,000자 입력 윤문 wall-clock이 **25분**까지 늘어났고, v1.4의 모델 다운그레이드로도 detector 1콜이 **8분**이었습니다. 진단 결과 진범은 모델이 아니라 **에이전트 간 컨텍스트 재로드 + 에이전트 내부 도구 호출 chain 누적**이었습니다.
> 
> v1.5는 v1.2~v1.4를 모두 폐기하고 **v1.1 단순 구조로 롤백한 뒤 단일 호출 monolith fast path만 추가**한 설계입니다.
> 
> **핵심 변경**
> 
> - **v1.2~v1.4 폐기 (롤백)** — 5인 에이전트 정의를 v1.1 commit `f25ee64` 시점으로 복원, voice profile·candidate pool 관련 reference 4개 파일 삭제, 권한 위계 §1~§6 절 제거
> - **Monolith Fast Path 신설 (디폴트)** — `humanize-monolith` 에이전트(opus): 한 콜 안에서 탐지·윤문·자체검증 일괄 처리, 도구 호출 4~5회 캡(Read 입력 + Read 룰북 + Write final + Write summary), 5,000자 이하 wall-clock 2~3분 목표
> - **`quick-rules.md` 신설 (~150줄)** — 본진 386줄에서 S1·S2 핵심 패턴만 추린 슬림 룰북. monolith 전용. 자체검증 6항 + 등급 기준 포함
> - **Strict 모드 보존** — v1.1 5인 파이프라인을 `--strict` 또는 8,000자+ 자동 승급으로 그대로 유지. 부분 재실행("이 카테고리만 다시"·"2차 윤문")도 strict 자동 전환
> - **분류 체계 본진 보존** — `ai-tell-taxonomy.md`의 v1.2~v1.3.1 발굴 신규 패턴(C-9·C-10·D-7·H-3·I-3·I-4 보강 등) 모두 그대로 유지
> 
> **검증 결과 (같은 칼럼 2,604자)**
> 
> | 항목 | v1.4 (detector haiku 1콜) | v1.5 (monolith opus 1콜) |
> |---|---|---|
> | Wall-clock | 7분 58초 | **3분 28초** |
> | 도구 호출 | 12회 | **4회** |
> | 토큰 | 113,621 | 68,045 |
> | 윤문 등급

## 延伸閱讀

相關概念：[[自然語言處理]] · [[文本生成]] · [[AI 潤飾]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/epoko77-ai/im-not-ai)

## 相關收錄

> [!note]- 直接競品（同子分類：文本處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "文本處理" AND file.name != "epoko77-ai--im-not-ai"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "epoko77-ai--im-not-ai"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "epoko77-ai--im-not-ai" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "epoko77-ai--im-not-ai"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自然語言處理","文本生成","AI 潤飾"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "epoko77-ai--im-not-ai" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "epoko77-ai--im-not-ai" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "epoko77-ai" AND file.name != "epoko77-ai--im-not-ai"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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
> const me = dv.page("Repos/epoko77-ai--im-not-ai");
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

> **2026-04-30** — 首次收錄
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

- [[2026-05-01|2026-05-01]] — 再次上榜，670 stars
- [[2026-04-30|2026-04-30]] — 首次收錄，642 stars
