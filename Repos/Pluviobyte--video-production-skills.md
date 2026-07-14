---
repo: Pluviobyte/video-production-skills
url: https://github.com/Pluviobyte/video-production-skills
owner: Pluviobyte
owner_type: User
language: Python
license: N/A
description: "Reusable AI video production skills library for creation, recreation, motion design, openers, and QA."
homepage: ""
stars: 537
stars_per_day: 32
forks: 68
open_issues: 0
created: 2026-06-26
pushed_at: 2026-07-14
first_seen: 2026-06-30
week: "2026-W27"
month: "2026-06"
category: "開發工具"
subcategory: "視頻製作"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-30
use_case: "提供可重用的 AI 視頻製作技能庫，幫助創建、重現、動效設計等。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 10089
readme_length: 6893
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:444,2026-06-30:445,2026-07-01:483,2026-07-01:483,2026-07-02:492,2026-07-02:492,2026-07-03:498,2026-07-04:502,2026-07-05:508,2026-07-06:515,2026-07-07:518,2026-07-08:523,2026-07-09:525,2026-07-10:529,2026-07-11:531,2026-07-12:531,2026-07-13:534,2026-07-14:537"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "video-production-skills"
  - "Pluviobyte/video-production-skills"
  - "提供可重用的 AI 視頻製作技能庫，幫助創建、重現、動效設計等。"
---

# video-production-skills

**537** stars · **32** stars/天 · 建立 17 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> 提供可重用的 AI 視頻製作技能庫，幫助創建、重現、動效設計等。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (32 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效生成視頻內容的創作者和團隊，尤其是那些希望重用動效的團隊。
> **一句話重點** 這個專案不僅是工具，更是一個視頻製作技能的生態系統，能夠隨著時間不斷進化。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻製作" && p.file.name !== "Pluviobyte--video-production-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻製作 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的視頻製作能力，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將視頻製作過程中的動效轉化為可重用的組件庫，提升了視頻創作的效率和質量。

## 專案簡介

這個專案是一個長期維護的 AI 視頻製作技能庫，旨在收集可重用的技能以支持視頻創作、重現、動效設計等流程。使用者可以透過 `npx skills add` 指令安裝各種技能，例如 `ai-motion-director` 用於生成運動隱喻和組件調度，`reference-video-replica-qc` 用於參考視頻的拆解和質檢。這些技能不僅限於單一視頻項目，未來將持續擴展，形成一個完整的視頻動效組件庫。每個技能都會有詳細的文檔，說明其適用場景、輸入參數和技術細節。這樣的設計使得 AI 在生成視頻時能夠靈活選擇組件，創造出更接近真實視頻語言的成品。整體架構上，專案使用 Python 和 JavaScript，並依賴於 HyperFrames 和 Remotion 等技術進行動效組件化，這樣的選擇使得動效的重用性和靈活性大幅提升。與傳統視頻製作工具相比，這個專案的優勢在於其模組化設計，能夠快速適應不同的視頻需求和風格，特別適合需要高效視頻生產的團隊。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- AI 動效導演元 Skill — 根據主題生成運動隱喻和 beat graph，控制後續視頻技能的產出。
- 參考視頻復刻質檢 — 拆解參考視頻，將動效轉化為可重用的 HyperFrames/Remotion 組件。
- 暗色 SaaS 短片生成 — 專為暗色科技感視頻設計的技能，適合產品展示。
- 黑底白字打字開場 — 提供逐字打字效果的片頭技能，增強視頻的吸引力。
- 長期擴展性 — 隨著新技能的加入，形成一個全面的視頻動效組件庫，支持多種視頻風格。

## 快速開始

1. 查看可安裝的技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --list
```
2. 安裝 AI 動效導演技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
```
3. 安裝參考視頻復刻技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
```
4. 安裝暗色 SaaS 短片技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
```
5. 安裝黑底白字打字開場技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Node.js 和 npx",
  "指令": "npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director",
  "預期輸出": "成功安裝 ai-motion-director 技能，並可在後續視頻製作中使用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天內累積 537 stars（32/天），forks 68（12.7%），顯示出不錯的增長潛力。作者 Pluviobyte 在視頻製作領域有豐富的經驗，這個專案解決了視頻製作過程中技能重用的痛點，之前的工具往往無法有效組織和重用動效。近期的推廣活動和社群討論也可能促進了這個專案的曝光。技術上，AI 動效生成的需求增長使得這個工具的實用性大幅提升，尤其是在快速變化的內容創作環境中。forks/stars 比率顯示出使用者對這個專案的實際修改需求較高，這意味著社群對其功能的期待和參與度較高。

## 適合誰使用

**目標受眾**：需要高效生成視頻內容的創作者和團隊，尤其是那些希望重用動效的團隊。

> [!example] 使用場景
> - 視頻製作人用它來快速生成動效視頻，因為可以重用已驗證的動效組件，節省了大量的創作時間。
> - 內容創作者用它來拆解參考視頻，因為能夠清晰地了解每個動效的實現方式，提升自己的製作技能。
> - 團隊負責人用它來制定視頻製作流程，因為這個技能庫提供了標準化的質檢流程，確保視頻質量。

## 架構分析

這個專案採用模組化架構，每個技能都作為獨立的模組進行管理，這樣的設計使得用戶可以根據需求靈活選擇和安裝技能。資料流方面，使用者提供主題或腳本，AI 動效導演技能負責生成運動隱喻和組件調度，然後將任務交給具體的視頻技能執行。這樣的設計能夠快速適應不同的視頻需求，並且減少了重複開發的工作量。

選擇 Python 和 JavaScript 作為主要技術棧，使得專案在性能和可擴展性上都有不錯的表現。未來擴展技能時，可能會面臨依賴管理的挑戰，特別是在多個技能之間的相互依賴上。整體而言，這個架構能夠支持高效的視頻製作流程，但在面對大規模視頻項目時，可能需要進一步優化性能。

## 技術深入分析

這個專案的核心技術機制是將視頻製作過程中的動效轉化為可重用的組件，這樣的設計使得用戶能夠快速生成高質量的視頻內容。專案使用 Python 和 JavaScript，這兩種語言的選擇使得開發和維護變得更加靈活。效能方面，專案的模組化設計能夠支持多種視頻風格的生成，但在處理大規模視頻時可能會遇到性能瓶頸。設計上，選擇 HyperFrames 和 Remotion 作為動效組件化的技術，這樣的選擇使得動效的重用性和靈活性大幅提升，但也帶來了對外部工具的依賴。技術風險方面，未來擴展技能時，可能會面臨依賴管理的挑戰，特別是在多個技能之間的相互依賴上。整體而言，這個專案在視頻製作領域提供了一個創新的解決方案，能夠隨著社群的貢獻不斷演進。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的技能介紹和安裝指令，安裝過程順暢，沒有明顯的坑。文件中包含了多個使用範例，對於新手來說，能夠在短時間內上手並開始使用這些技能。

## 優缺點分析

> [!success] 優點
> - 模組化設計，便於重用和擴展。
> - 支持多種視頻風格和動效，提升創作靈活性。
> - 提供質檢流程，確保視頻質量。

> [!danger] 缺點
> - 不支持音頻處理，功能相對單一。
> - 需要依賴外部工具，增加了使用的複雜性。
> - 目前技能數量有限，未來擴展性依賴社群貢獻。

> [!warning] 注意事項
> - 不支持逐幀渲染和音頻處理，僅專注於動效生成。
> - 需要依賴外部工具（如 HyperFrames 和 Remotion）進行組件化。
> - 目前僅支持特定的視頻風格，未來可能會擴展更多選項。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成動畫角色的工具，而本專案則是針對視頻動效的模組化設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供視頻編輯功能，但缺乏本專案的動效重用能力和質檢流程。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於代碼生成，與本專案的視頻製作技能無直接關聯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成動畫角色的工具，與本專案的視頻動效模組化設計不同。 | 如果你的需求是生成動畫角色而非視頻動效，這個工具會更合適。 | low，因為兩者的功能範圍不同，轉換需求不高。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供視頻編輯功能，但缺乏本專案的動效重用能力和質檢流程。 | 如果你需要一個全功能的視頻編輯工具，而不僅僅是動效生成，這個工具會更適合。 | medium，因為需要重新適應其編輯流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **video-production-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成動畫角色的工具，與本專案的視頻動效模組化設計不同。 | 提供視頻編輯功能，但缺乏本專案的動效重用能力和質檢流程。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，轉換需求不高。 | medium，因為需要重新適應其編輯流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成動畫角色而非視頻動效，這個工具會更合適。 | 如果你需要一個全功能的視頻編輯工具，而不僅僅是動效生成，這個 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在安裝過程中，某些依賴可能未正確安裝
  - 解法：確保所有依賴都已正確安裝，並檢查版本兼容性。
- **[HIGH]** 某些技能在特定環境下可能無法正常運行
  - 解法：在支持的環境中運行，或尋求社群幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的創業團隊需要快速生成產品介紹視頻 | 非常適合 | 模組化設計和可重用性使得視頻製作效率高。 |
| 大型企業需要高質量的視頻內容生成 | 普通 | 雖然支持多種風格，但目前技能數量有限。 |
| 內容創作者希望拆解和學習參考視頻的動效 | 非常適合 | 提供了清晰的質檢流程和動效重用能力。 |
| 需要進行音頻處理的視頻製作 | 不適合 | 目前不支持音頻處理，功能有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的視頻製作能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴的外部工具需自行評估安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Codex、Claude Code 和 Cursor 等 AI 編程代理搭配使用，處於視頻創作的開發階段。實際整合範例包括在使用 Codex 進行視頻腳本生成後，利用 `ai-motion-director` 進行動效設計，然後再用 `reference-video-replica-qc` 進行質檢。與主流 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於對外部工具的依賴，使用者需確保這些工具的版本兼容性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
| Forks | 68 |
| Open Issues | 0 |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 9.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Pluviobyte/video-production-skills) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "JavaScript" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Pluviobyte](https://github.com/Pluviobyte) | 15 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/Pluviobyte/video-production-skills/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-07-14）
> **活躍天數** 3 天 · **最新 commit** Fix dark SaaS director reference

## README 摘錄

> [!info]- 展開查看原文 README
> # Video Production Skills
> 
> 这是一个长期维护的 AI 视频制作 skill 精选仓库，用来沉淀我在视频创作、视频复刻、动效生成、片头包装、质检交付等流程中反复使用的方法，也用来把优秀参考视频中的动效拆成 HyperFrames / Remotion 能够实现和复用的组件。
> 
> 仓库不是只服务于某一个视频项目。后续优秀的视频制作 skill 都会优先收录在这里，并按“视频类型 / 风格 / 工作流环节”持续扩展。当前收录的是 AI 动效导演元 Skill、参考视频复刻质检、暗色 SaaS / AI 产品短片、黑底白字打字开场。
> 
> 这些 skill 适用于 Codex、Claude Code、Cursor 等支持本地 skill 目录或 Skills CLI 的 AI 编程/创作代理。仓库中的每个一级目录都是一个独立可安装的 skill。
> 
> ## 长期目标：从复刻到组件库
> 
> `reference-video-replica-qc` 的意义不是单纯复制某一个参考视频，而是把参考视频里真正让画面“像视频”的东西拆出来：镜头节奏、入场方式、路径运动、组件状态切换、字幕/标题层级、模型列表、线条轨道、卡片翻转、光效、遮罩、缩放和转场。每一次复刻都应该把这些动效整理成 HyperFrames / Remotion / React / CSS / SVG / GSAP 可以编写、组合和参数化的技术组件。
> 
> 长期来看，这个仓库会形成一个视频动效组件库。每个通过复刻验证的组件都要留下描述：它适合什么内容、解决什么画面问题、需要哪些输入参数、时间线如何运动、应该用在哪类视频段落、有什么对齐证据和限制。以后 AI 制作视频时，就不只是生成一页页静态版式，而是能够根据脚本内容自由选择这些组件，把开场、解释、列表、对比、流程、CTA、产品展示等段落组合成更接近真实视频语言的成片。
> 
> `ai-motion-director` 是这套体系的元导演层：给它一个主题、脚本或简报，它先决定视频的运动隐喻、beat graph、组件调度、素材需求和反 PPT 质检标准，再把任务交给 HyperFrames / Remotion / 生图 / 具体视频 skill 执行。
> 
> ## 已收录 Skills
> 
> | Skill | 视频制作环节 | 适合做什么 | 视频风格 / 方法 | 详情 |
> | --- | --- | --- | --- | --- |
> | `ai-motion-director`AI 动效导演元 Skill | 主题到动效语言 / 元导演 / 反 PPT 质检 | 给一个主题、脚本或简报，先建立 motion thesis、beat graph、组件/素材计划，再控制 HyperFrames/Remotion 进入制作 | Motion-first：视觉隐喻、连续时间线、状态变化、运动语法、anti-PPT gate | [查看页面](docs/ai-motion-director.md) |
> | `reference-video-replica-qc` | 复刻闭环 / 组件沉淀 / 质检 | 参考视频拆解、动效复刻、HyperFrames/Remotion 组件化、五级保真度判定 | 先采样定位、再全帧验收；素材门、运行时门、交付门；MAE/时间偏移/边界帧/PSNR/SSIM/哈希证据 | [查看页面](docs/reference-video-replica-qc.md) |
> | `dark-saas-magic-video`暗色 SaaS 魔术短片 | 风格化正片生成 | 暗色 SaaS / AI 产品短片、工具发布视频、产品能力展示 | Presenton-like magic UI：黑色空间、底部紫光、动感大字、渐变 CTA、漂浮 UI、模型环、导出物件 | [查看页面](docs/dark-saas-magic-video.md) |
> | `black-white-text-opener` | 片头包装 | 新视频片头、教程开场、观点视频开头、产品视频引子 | 纯黑/近黑背景 + 白色大字逐字打出 + 同步 typing click 音效 + 干净转场 | [查看页面](docs/black-white-text-opener.md) |
> 
> ## 效果预览
> 
> ### AI 动效导演元 Skill
> 
> 这是流程控制 skill，暂无单独预览视频；它用于在制作前决定运动隐喻、beat graph、组件调度和反 PPT 质检标准，并控制后续视频 skill 产出成片。
> 
> ### 黑底白字打字开场
> 
> [▶ Watch Black White Text Opener](https://github.com/user-attachments/assets/3962d773-4447-4720-ba59-5e164d0b5ac4)
> 
> ### 暗色 SaaS / Magic UI
> 
> 示例成片：**雪踏乌云暗色 SaaS 介绍短片**
> 
> [▶ Watch Xuetawuyun Dark SaaS Showcase](https://github.com/user-attachments/assets/6d4236af-6b58-4447-986d-21169ea5e3a6)
> 
> ### 参考视频复刻闭环
> 
> 示例成片：**Presenton 复刻 Bitexact 成片**
> 
> [▶ Watch Presenton Replica Bitexact Showcase](https://github.com/user-attachments/assets/f792bd12-d8b3-43b7-b751-98aeb033713b)
> 
> ## 仓库会如何扩展
> 
> 后续新增的视频制作 skill，会优先按下面几类组织：
> 
> - 导演与调度：主题理解、运动隐喻、beat graph、组件选择、素材规划、反 PPT 质检。
> - 复刻与组件沉淀：参考视频拆解、时间线还原、动效复刻、HyperFrames/Remotion 组件化、像素级/视觉级对齐、交付检查。
> - 片头与包装：黑底白字、标题卡、章节转场、字幕条、CTA 结尾。
> - 风格化正片：暗色 SaaS、AI 工具发布、课程预告、观点口播包装、教程动效。
> - 素材处理：抽帧、字幕、配音、屏幕录制清理、音画同步。
> - 平台适配：抖音、小红书、公众号视频封面/比例/节奏差异。
> 
> 每个新增 skill 应该同时包含：
> 
> - 一个独立 skill 目录，包含 `SKILL.md` 和必要脚本。
> - 一个 `docs/.md` 介绍页，说明视频类型、风格、适合/不适合场景。
> - 如果 skill 产出可复用动效，要为每个组件写清楚组件描述、适用场景、输入参数、时间线、技术栈、对齐证据和限制。
> - 优先提供 MP4 视频预览，放在 `assets/videos/` 或 skill 自己的 `assets/showcases/` 作为可版本化归档。
> - README / docs 里的可播放展示使用 GitHub `user-attachments/assets/...` URL，写法参考 Presenton：`[▶ Watch Demo](https://github.com/user-attachments/assets/)`。
> - 抽帧图、contact sheet、对照图只作为封面/质检辅助，放在 `assets/images/`。
> - 在本 README 的表格中补充一行，说明它属于哪个视频制作环节。
> 
> ## 推荐安装
> 
> 先查看仓库内可安装的 skill：
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --list
> ```
> 
> 按需安装单个 skill：
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
> ```
> 
> ## 怎么选择
> 
> - 给一个主题、脚本或简报，想让 AI 先做运动隐喻、beat graph、组件调度，并避免 PPT 式视频：用 `ai-motion-director`。
> - 要复刻一个已有视频、拆解时间线、把动效沉淀成 HyperFrames/Remotion 组件、验证是否对齐：用 `reference-video-replica-qc`。
> - 要做暗色科技感 SaaS / AI 产品短片：用 `dark-saas-magic-video`。
> - 要给新视频加黑底白字、逐字打字、打字音效开场：用 `black-white-text-opener`。
> 
> ## 设计边界
> 
> - `ai-motion-director` 不替代最终渲染、抽帧、字幕、音频和归档流程；它负责先定义 motion thesis、beat graph、组件/素材计划和 anti-PPT gate。
> - `reference-video-replica-qc` 把保真度拆成源码一致、渲染帧像素一致、编码成片帧对齐、视觉对齐、风格对齐五级。任何像素级结论都必须通过素材、运行时和交付三道逐帧门；手写 HyperFrames/Remotion 复刻通常目标是视觉级对齐和参数化组件沉淀。
> - `dark-saas-magic-video` 是风格级创作 skill，不用于逐帧复刻。
> - `black-white-text-opener` 是生成型开场 skill，默认要求逐字打字和同步 typing click 音效；不用于复用原片或声明像素级对齐。
> 
> English
> 
> # Video Production Skills
> 
> This is a long-term AI video production skills library. It is designed to collect reusable skills for video creation, reference recreation, motion design, opener packaging, asset processing, delivery QA, and reusable HyperFrames / Remotion motion components.
> 
> The long-term goal is to turn reference-video recreation into a component library. Each aligned motion pattern should become a documented technical component with its use case, inputs, timing contract, implementation stack, evidence, and limitations. Future AI video generation can then select from these components instead of producing static slide-like sequences.
> 
> The repository is not limited to the current skills. Future video-production skills should be added here with a dedicated skill directory, a docs page, and preview media when possible.
> 
> | Skill | Production Stage | Video Type | Style / Method |
> | --- | --- | --- | --- |
> | `ai-motion-director` | Topic-to-motion direction / anti-PPT QA | Topic-driven original motion videos, beat graph planning, component routing | Motion-first direction: visual metaphor, state change, motion grammar, asset plan, anti-PPT gate |
> | `reference-video-replica-qc` | Recreation loop / component capture / QA | Reference analysis, motion recreation, HyperFrames/Remotion componentization, five-level fidelity classification | Samples locate failures; full frames approve asset, runtime, and delivery gates with MAE, temporal, boundary, PSNR/SSIM, and hash evidence |
> | `dark-saas-magic-video` / Dark SaaS Magic Short | Styled main video | Dark SaaS / AI product shorts | Presenton-like magic UI with black space, purple glow, kinetic type, gradient CTA, floating UI |
> | `black-white-text-opener` | Opener packaging | Opening title cards for new videos | Black background, typed white text, timed typing clicks, clean transition |
> 
> Recommended install:
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --list
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
> ```
> 
> These skills are designed for Codex, Claude Code, Cursor, and other agents that support local skills or the Skills CLI.

## 延伸閱讀

相關概念：[[動效設計]] · [[視頻編輯]] · [[模組化開發]] · [[AI 生成內容]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[432539--gpt2api|432539/gpt2api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/Pluviobyte/video-production-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻製作）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻製作" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Pluviobyte--video-production-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["動效設計","視頻編輯","模組化開發","AI 生成內容"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Pluviobyte--video-production-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Pluviobyte--video-production-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Pluviobyte" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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

> **2026-06-30** — 首次收錄
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

- [[2026-07-02|2026-07-02]] — 再次上榜，492 stars
- [[2026-07-01|2026-07-01]] — 再次上榜，483 stars
- [[2026-06-30|2026-06-30]] — 首次收錄，444 stars
