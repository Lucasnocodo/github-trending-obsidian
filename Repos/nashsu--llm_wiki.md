---
repo: nashsu/llm_wiki
url: https://github.com/nashsu/llm_wiki
owner: nashsu
owner_type: User
language: TypeScript
license: NOASSERTION
description: "LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。"
homepage: ""
stars: 1135
stars_per_day: 227
forks: 123
open_issues: 7
created: 2026-04-08
pushed_at: 2026-04-12
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: "v0.3.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "自動將文檔轉換為有組織的知識庫，並持續更新。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-17"
contributor_count: 1
engagement: "medium"
issue_close_rate: 70
repo_size_kb: 12881
readme_length: 9954
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:923,2026-04-14:1135"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "llm_wiki"
  - "nashsu/llm_wiki"
  - "自動將文檔轉換為有組織的知識庫，並持續更新。"
---

# llm_wiki

**923** stars · **231** stars/天 · 建立 4 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/nashsu--llm_wiki");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.3.1`

> [!summary] 一句話摘要
> 自動將文檔轉換為有組織的知識庫，並持續更新。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (231 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要持續更新和管理大量文檔的研究團隊或企業。
> **一句話重點** 這個專案最厲害的不是功能，而是它證明了用 LLM 自動維護知識庫的可行性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nashsu--llm_wiki");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識管理" && p.file.name !== "nashsu--llm_wiki" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、8 小時整合，得到持續更新的知識庫，值得考慮。

> [!abstract] 核心創新
> LLM Wiki 提供了一個持續更新的知識庫，避免了傳統 RAG 模型的重複查詢問題。

## 專案簡介

LLM Wiki 是一個跨平台桌面應用程式，旨在將文檔轉換為有組織的知識庫。用戶只需導入文檔，LLM 會自動分析並生成結構化的 wiki 頁面，並持續更新，避免了傳統的每次查詢都重新檢索的問題。這個工具的核心賣點在於其兩步驟的思考鏈接入過程，首先進行分析，然後生成 wiki 頁面，這樣能夠提高內容的質量和準確性。使用者可以通過 CLI 指令 `npm run tauri dev` 啟動開發環境，並使用 `npm run tauri build` 進行生產環境的構建。技術上，LLM Wiki 採用了 TypeScript 和 Rust，並依賴於多個前端庫如 React 和 Vite，這使得它在性能和可擴展性上有不錯的表現。

與其他類似工具相比，LLM Wiki 的重要區別在於其持久的知識庫維護能力，這意味著用戶不需要每次查詢時都重新生成知識，而是可以依賴於一個持續更新的資料庫。這對於需要長期維護和查詢大量文檔的用戶來說，無疑是個巨大的優勢。使用者在使用過程中可能會遇到如文件夾選擇失敗或性能問題等常見問題，但社群的活躍度和開發者的回應能力相對較高，能夠及時解決這些問題。這個專案目前處於 beta 階段，對於需要持續更新知識庫的團隊來說，值得考慮使用。適合的使用場景包括研究團隊需要整理大量文獻，或是企業內部知識管理系統的構建。

**技術棧**：`TypeScript` · `Rust` · `React` · `Vite`

## 重點功能

- 兩步驟思考鏈接入 — 首先進行分析，然後生成 wiki 頁面，確保內容質量。
- 持久的知識庫維護 — 知識庫不需要每次查詢時重新生成，節省資源。
- 知識圖譜 — 自動分析知識結構，提供意外的連結和知識缺口。
- 支持多種文檔格式 — 可導入 PDF、DOCX、MD 等多種格式的文檔。
- 自動嵌入 — 新頁面在生成後自動進行向量嵌入，支持高效檢索。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/nashsu/llm_wiki.git && cd llm_wiki && npm install
```
2. 啟動開發環境
```bash
npm run tauri dev
```
3. 創建新專案並導入文檔
```bash
在應用內選擇模板並導入文檔
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 923 stars（231/天），forks 107（11.6%），這顯示出相對活躍的社群參與。作者 nashsu 之前有開發相關的開源專案，這次專案解決了傳統 RAG 模型的痛點，提供了一個持續更新的知識庫，這在文檔管理上是個顯著的進步。近期的推特討論和社群反饋也促進了這個專案的曝光度。技術上，隨著 LLM 和知識管理需求的增長，這個工具的出現正好滿足了市場需求。forks/stars 比率為 11.6%，這意味著許多用戶對其進行了修改和實驗，顯示出實際的使用需求。

## 適合誰使用

**目標受眾**：需要持續更新和管理大量文檔的研究團隊或企業。

> [!example] 使用場景
> - 研究人員用它來整理和查詢大量文獻，因為它能自動生成和更新知識庫，節省了手動整理的時間。
> - 企業內部團隊用它來建立和維護知識管理系統，因為它能持續更新並提供即時查詢功能，提升了團隊的工作效率。
> - 教育工作者用它來創建教學資源，因為它能自動分析和組織資料，讓教學內容更具結構性和可查詢性。

## 架構分析

LLM Wiki 採用三層架構設計，分為原始資料層、生成的 wiki 層和配置規則層。這樣的設計使得資料的不可變性和結構化生成得以實現。資料流從原始資料經過 LLM 的分析，生成結構化的 wiki 頁面，並持續更新。

選擇這種架構的原因在於能夠有效地管理和維護大量的知識資料，並且能夠在未來擴展新的功能。這種設計的代價在於需要較高的初始配置和學習成本，但長期來看能夠節省大量的維護時間。擴展性方面，隨著資料量的增加，系統的性能可能會受到影響，特別是在處理大型文檔時。

這需要進一步的優化和調整。

## 技術深入分析

LLM Wiki 的核心技術機制在於其兩步驟的思考鏈接入過程，這使得 LLM 能夠先進行資料分析，再生成結構化的 wiki 頁面。這樣的設計不僅提高了內容的質量，還能夠追溯來源，確保知識的準確性。效能方面，系統能夠處理多達數十萬的文檔，但在面對超大規模文檔時，性能可能會受到影響。選擇 TypeScript 和 Rust 作為開發語言，能夠在前端和後端都提供良好的性能，但也增加了學習曲線。依賴樹相對簡單，主要依賴於 React 和 Vite，這使得整合到現有的前端生態系統中相對容易。技術風險方面，隨著資料量的增加，系統的性能可能會成為瓶頸，特別是在並發處理時。整合方面，與主流的 CI/CD 工具和 IDE 的相容性良好，能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指引，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Node.js 和 Rust 的版本要求。文件中有多語言支持，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 自動生成和更新知識庫，節省手動整理時間。
> - 支持多種文檔格式，靈活性高。
> - 提供知識圖譜，幫助用戶發現意外的知識連結。

> [!danger] 缺點
> - 對大型文檔的性能支持尚需改進。
> - 需要用戶手動配置 LLM 提供者的 API 金鑰。
> - 初始學習成本較高，需熟悉操作界面。

> [!warning] 注意事項
> - 目前僅支持 Node.js 20+ 和 Rust 1.70+。
> - 在處理大型文檔（如超過 50 萬字的文檔）時性能可能會下降。
> - 需要手動配置 LLM 提供者的 API 金鑰和模型。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這是一個基於 CLI 的知識管理工具，與 LLM Wiki 的桌面應用相比，缺乏圖形界面和自動更新功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這個工具專注於數據隱私和安全性，而 LLM Wiki 更加注重知識的組織和查詢效率。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這是一個基於 CLI 的知識管理工具，與 LLM Wiki 的桌面應用相比，缺乏圖形界面和自動更新功能。 | 如果你需要一個輕量級的 CLI 工具來管理文檔，而不需要圖形界面的支持。 | low，因為 CLI 工具的使用方式相對簡單，容易上手。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這個工具專注於數據隱私和安全性，而 LLM Wiki 更加注重知識的組織和查詢效率。 | 如果你的主要需求是數據安全和隱私，而不是知識的組織和查詢。 | medium，因為需要重新配置資料結構和查詢邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **llm_wiki** | **boneyard** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這是一個基於 CLI 的知識管理工具，與 LLM Wiki 的桌面應用相比，缺乏圖形界面和自動更新功能。 | 這個工具專注於數據隱私和安全性，而 LLM Wiki 更加注重知識的組織和查詢效率。 |
> | 遷移成本 | - | low，因為 CLI 工具的使用方式相對簡單，容易上手。 | medium，因為需要重新配置資料結構和查詢邏輯。 |
> | 適用場景 | 主要場景 | 如果你需要一個輕量級的 CLI 工具來管理文檔，而不需要圖形 | 如果你的主要需求是數據安全和隱私，而不是知識的組織和查詢。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在導入大型文檔時，性能可能會下降，導致應用卡頓。
  - 解法：將文檔分割成小部分進行導入。
- [MEDIUM] 文件夾選擇功能在某些情況下無法正常工作。
  - 解法：手動選擇文件進行導入。
- **[HIGH]** API 金鑰配置不當會導致無法正常使用 LLM 功能。
  - 解法：仔細檢查 API 金鑰的配置步驟。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要整理內部知識庫 | 非常適合 | 能夠自動生成和更新知識庫，節省時間和人力成本。 |
| 大型研究團隊需要處理數十萬篇文獻 | 普通 | 性能在處理大型文檔時可能會下降。 |
| 教育機構需要建立教學資源庫 | 適合 | 支持多種文檔格式，能夠靈活導入資料。 |
| 小型團隊需要快速查詢知識 | 非常適合 | 提供即時查詢功能，提升工作效率。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、8 小時整合，得到持續更新的知識庫，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限操作，僅需存取用戶的文檔資料，依賴鏈中無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LLM Wiki 最常與文檔管理和知識管理工具搭配使用，處於知識生成和查詢的環節。在一個使用 React 和 Vite 的專案中，可以將 LLM Wiki 作為知識庫管理工具，具體做法是通過 API 將生成的 wiki 頁面與現有系統整合。支援 GitHub Actions 進行 CI/CD 流程，並與 VS Code 有良好的整合。整合的摩擦點主要在於需要手動配置 API 金鑰，這可能會對新手造成困擾。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 LLM Wiki 出現之前，許多文檔管理工具只能提供靜態的知識庫，無法自動更新。這使得用戶需要手動維護資料，效率低下。隨著 LLM 技術的進步，這種自動化的知識管理方式變得可行。

這個工具代表了知識管理的未來趨勢，未來可能會有更多類似的工具出現，進一步提升知識管理的效率。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nashsu--llm_wiki");
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
> const me = dv.page("Repos/nashsu--llm_wiki");
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
| Forks | 107 |
| Open Issues | 3 |
| Issue 解決率 | 70% (7 closed) |
| 最後推送 | 2026-04-12 |
| 建立日期 | 2026-04-08 |
| Repo 大小 | 12.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nashsu/llm_wiki) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@base-ui/react` `@fontsource-variable/geist` `@milkdown/kit` `@milkdown/plugin-math` `@milkdown/react` `@milkdown/theme-nord` `@react-sigma/core` `@tailwindcss/vite` `@tauri-apps/api` `@tauri-apps/plugin-dialog` `@tauri-apps/plugin-store` `class-variance-authority` `clsx` `graphology` `graphology-communities-louvain`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 68
>     "JavaScript" : 20
>     "Rust" : 11
>     "HTML" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nashsu](https://github.com/nashsu) | 251 |

**最新版本**：v0.3.1 — LLM Wiki v0.3.1 (2026-04-12)

> [!info]- Release Notes
> See the assets below for download links.

## 社群與生態

**社群活躍度**：社群活躍，問題解決率為 70%。
**連結**：[文件](https://github.com/nashsu/llm_wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-12）
> **活躍天數** 1 天 · **最新 commit** docs: remove RRF claims — ablation study shows no improvement with 2-lane setup

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/nashsu/llm_wiki/issues/11) | Analysis failed: Failed to fetch | 0 | 0 |
> | [#6](https://github.com/nashsu/llm_wiki/issues/6) | 文件夹无法选择 | 0 | 10 |
> | [#5](https://github.com/nashsu/llm_wiki/issues/5) | 咨询： 请问文件量比较大的情况下的性能如何？ 比如超过50w-80w的飞书文档 | 0 | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # LLM Wiki
> 
>   
> 
>   A personal knowledge base that builds itself.
>   LLM reads your documents, builds a structured wiki, and keeps it current.
> 
>   What is this? •
>   Features •
>   Tech Stack •
>   Installation •
>   Credits •
>   License
> 
>   English | 中文
> 
> ---
> 
>   
> 
> 
> ## Installation
> 
> 
> # Prerequisites: Node.js 20+, Rust 1.70+
> git clone https://github.com/nashsu/llm_wiki.git
> cd llm_wiki
> npm install
> npm run tauri dev      # Development
> npm run tauri build    # Production build
> ```
> 
> 
> ## Quick Start
> 
> 1. Launch the app → Create a new project (choose a template)
> 2. Go to **Settings** → Configure your LLM provider (API key + model)
> 3. Go to **Sources** → Import documents (PDF, DOCX, MD, etc.)
> 4. Watch the **Activity Panel** — LLM automatically builds wiki pages
> 5. Use **Chat** to query your knowledge base
> 6. Browse the **Knowledge Graph** to see connections
> 7. Check **Review** for items needing your attention
> 8. Run **Lint** periodically to maintain wiki health
> 
> 
> ## Features
> 
> - **Two-Step Chain-of-Thought Ingest** — LLM analyzes first, then generates wiki pages with source traceability and incremental cache
> - **4-Signal Knowledge Graph** — relevance model with direct links, source overlap, Adamic-Adar, and type affinity
> - **Louvain Community Detection** — automatic knowledge cluster discovery with cohesion scoring
> - **Graph Insights** — surprising connections and knowledge gaps with one-click Deep Research
> - **Vector Semantic Search** — optional embedding-based retrieval via LanceDB, supports any OpenAI-compatible endpoint
> - **Persistent Ingest Queue** — serial processing with crash recovery, cancel, retry, and progress visualization
> - **Folder Import** — recursive folder import preserving directory structure, folder context as LLM classification hint
> - **Deep Research** — LLM-optimized search topics, multi-query web search, auto-ingest results into wiki
> - **Async Review System** — LLM flags items for human judgment, predefined actions, pre-generated search queries
> - **Chrome Web Clipper** — one-click web page capture with auto-ingest into knowledge base
> 
> 
> ### 16. Configurable Context Window
> 
> Not in the original. Users can configure how much context the LLM receives:
> 
> - **Slider from 4K to 1M tokens** — adapts to different LLM capabilities
> - **Proportional budget allocation** — larger windows get proportionally more wiki content
> - **60/20/5/15 split** — wiki pages / chat history / index / system prompt
> 
> 
> ## What is this?
> 
> LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM **incrementally builds and maintains a persistent wiki** from your sources. Knowledge is compiled once and kept current, not re-derived on every query.
> 
> This project is based on [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — a methodology for building personal knowledge bases using LLMs. We implemented the core ideas as a full desktop application with significant enhancements.
> 
>   
> 
> 
> ## Credits
> 
> The foundational methodology comes from **Andrej Karpathy**'s [llm-wiki.md](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f), which describes the pattern of using LLMs to incrementally build and maintain a personal wiki. The original document is an abstract design pattern; this project is a concrete implementation with substantial extensions.
> 
> 
> ## What We Kept from the Original
> 
> The core architecture follows Karpathy's design faithfully:
> 
> - **Three-layer architecture**: Raw Sources (immutable) → Wiki (LLM-generated) → Schema (rules & config)
> - **Three core operations**: Ingest, Query, Lint
> - **index.md** as the content catalog and LLM navigation entry point
> - **log.md** as the chronological operation record with parseable format
> - **[[wikilink]]** syntax for cross-references
> - **YAML frontmatter** on every wiki page
> - **Obsidian compatibility** — the wiki directory works as an Obsidian vault
> - **Human curates, LLM maintains** — the fundamental role division
> 
>   
> 
> 
> ## What We Changed & Added
> 
> 
> ### 1. From CLI to Desktop Application
> 
> The original is an abstract pattern document designed to be copy-pasted to an LLM agent. We built it into a **full cross-platform desktop application** with:
> - **Three-column layout**: Knowledge Tree / File Tree (left) + Chat (center) + Preview (right)
> - **Icon sidebar** for switching between Wiki, Sources, Search, Graph, Lint, Review, Deep Research, Settings
> - **Custom resizable panels** — drag-to-resize left and right panels with min/max constraints
> - **Activity panel** — real-time processing status showing file-by-file ingest progress
> - **All state persisted** — conversations, settings, review items, project config survive restarts
> - **Scenario templates** — Research, Reading, Personal Growth, Business, General — each pre-configures purpose.md and schema.md
> 
> 
> ### 2. Purpose.md — The Wiki's Soul
> 
> The original has Schema (how the wiki works) but no formal place for **why** the wiki exists. We added `purpose.md`:
> - Defines goals, key questions, research scope, evolving thesis
> - LLM reads it during every ingest and query for context
> - LLM can suggest updates based on usage patterns
> - Different from schema — schema is structural rules, purpose is directional intent
> 
> 
> ### 3. Two-Step Chain-of-Thought Ingest
> 
> The original describes a single-step ingest where the LLM reads and writes simultaneously. We split it into **two sequential LLM calls** for significantly better quality:
> 
> ```
> Step 1 (Analysis): LLM reads source → structured analysis
>   - Key entities, concepts, arguments
>   - Connections to existing wiki content
>   - Contradictions & tensions with existing knowledge
>   - Recommendations for wiki structure
> 
> Step 2 (Generation): LLM takes analysis → generates wiki files
>   - Source summary with frontmatter (type, title, sources[])
>   - Entity pages, concept pages with cross-references
>   - Updated index.md, log.md, overview.md
>   - Review items for human judgment
>   - Search queries for Deep Research
> ```
> 
> Additional ingest enhancements beyond the original:
> - **SHA256 incremental cache** — source file content is hashed before ingest; unchanged files are skipped automatically, saving LLM tokens and time
> - **Persistent ingest queue** — serial processing prevents concurrent LLM calls; queue persisted to disk, survives app restart; failed tasks auto-retry up to 3 times
> - **Folder import** — recursive folder import preserving directory structure; folder path passed to LLM as classification context (e.g., "papers > energy" helps categorize content)
> - **Queue visualization** — Activity Panel shows progress bar, pending/processing/failed tasks with cancel and retry buttons
> - **Auto-embedding** — when vector search is enabled, new pages are automatically embedded after ingest
> - **Source traceability** — every generated wiki page includes a `sources: []` field in YAML frontmatter, linking back to the raw source files that contributed to it
> - **overview.md auto-update** — global summary page regenerated on every ingest to reflect the latest state of the wiki
> - **Guaranteed source summary** — fallback ensures a source summary page is always created, even if the LLM omits it
> - **Language-aware generation** — LLM responds in the user's configured language (English or Chinese)
> 
> 
> ### 4. Knowledge Graph with Relevance Model
> 
>   
> 
> The original mentions `[[wikilinks]]` for cross-references but has no graph analysis. We built a **full knowledge graph visualization and relevance engine**:
> 
> **4-Signal Relevance Model:**
> | Signal | Weight | Description |
> |--------|--------|-------------|
> | Direct link | ×3.0 | Pages linked via `[[wikilinks]]` |
> | Source overlap | ×4.0 | Pages sharing the same raw source (via frontmatter `sources[]`) |
> | Adamic-Adar | ×1.5 | Pages sharing common neighbors (weighted by neighbor degree) |
> | Type affinity | ×1.0 | Bonus for same page type (entity↔entity, c

## 延伸閱讀

相關概念：[[知識管理]] · [[向量資料庫]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[titanwings--colleague-skill|titanwings/colleague-skill]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/nashsu/llm_wiki)

## 相關收錄

> [!note]- 直接競品（同子分類：知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識管理" AND file.name != "nashsu--llm_wiki"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "nashsu--llm_wiki"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "nashsu--llm_wiki" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "nashsu--llm_wiki"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["知識管理","向量資料庫","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nashsu--llm_wiki" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nashsu--llm_wiki");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nashsu--llm_wiki" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nashsu" AND file.name != "nashsu--llm_wiki"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nashsu--llm_wiki");
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
> const me = dv.page("Repos/nashsu--llm_wiki");
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
> const me = dv.page("Repos/nashsu--llm_wiki");
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
> const me = dv.page("Repos/nashsu--llm_wiki");
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
> const me = dv.page("Repos/nashsu--llm_wiki");
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

> **2026-04-13** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 再次上榜，1.1k stars
- [[2026-04-13|2026-04-13]] — 首次收錄，923 stars
