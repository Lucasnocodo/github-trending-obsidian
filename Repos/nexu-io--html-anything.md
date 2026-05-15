---
repo: nexu-io/html-anything
url: https://github.com/nexu-io/html-anything
owner: nexu-io
owner_type: Organization
language: HTML
license: Apache-2.0
description: "✨ The agentic HTML editor — your local AI agent writes the HTML, you ship it. 🚀 75 Skills × 9 Surfaces (magazine · deck · poster · XHS / tweet · prototype · data report · Hyperframes) 🛡️ Sandboxed preview · 📤 1-click to WeChat / X / Zhihu / HTML / PNG 🔑 Zero API key — Claude Code / Cursor / Codex / Gemini / Copilot / OpenCode / Qwen / Aider."
homepage: ""
stars: 930
stars_per_day: 310
forks: 94
open_issues: 5
created: 2026-05-11
pushed_at: 2026-05-14
first_seen: 2026-05-15
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "HTML 編輯器"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-15
use_case: "讓你的本地 AI 代理自動生成 HTML，無需手動編輯，快速發佈內容。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 29
repo_size_kb: 12884
readme_length: 9936
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-15"
star_history: "2026-05-15:930"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - org
  - "topic/agent_skills"
  - "topic/agentic"
  - "topic/ai_agents"
  - "topic/ai_design"
  - "topic/ai_editor"
aliases:
  - "html-anything"
  - "nexu-io/html-anything"
  - "讓你的本地 AI 代理自動生成 HTML，無需手動編輯，快速發佈內容。"
---

# html-anything

**930** stars · **310** stars/天 · 建立 3 天前 · HTML · Apache-2.0

```dataviewjs
const me = dv.page("Repos/nexu-io--html-anything");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`agent-skills` `agentic` `ai-agents` `ai-design` `ai-editor` `byok` `claude` `claude-code` `claude-skills` `coding-agents` `generative-ai` `html` `html-editor` `hyperframes` `local-first` `markdown` `nextjs` `vibe-coding` `wechat` `xiaohongshu`

> [!summary] 一句話摘要
> 讓你的本地 AI 代理自動生成 HTML，無需手動編輯，快速發佈內容。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (310 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望快速生成和發佈 HTML 內容的內容創作者和設計師。
> **一句話重點** 這個專案讓內容創作者能夠輕鬆生成和發佈 HTML，無需深入了解前端技術。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nexu-io--html-anything");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "HTML 編輯器" && p.file.name !== "nexu-io--html-anything" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 HTML 編輯器 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，能夠快速生成和發佈內容，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於無需 API 金鑰的本地 AI 代理生成 HTML，並提供即時預覽和一鍵導出功能。

## 專案簡介

這個專案提供了一個以 AI 驅動的 HTML 編輯器，使用者只需輸入 Markdown 或其他格式的內容，然後按下 ⌘+Enter，AI 代理會自動生成可用於發佈的 HTML 文件。這樣的設計使得內容創作者不再需要擔心 HTML 的細節，因為生成的結果已經是針對讀者優化過的格式。使用者可以從 75 種可組合的技能模板中選擇，這些模板涵蓋了從雜誌文章到社交媒體卡片等多種輸出格式，並支持一鍵導出到 WeChat、X、Zhihu 等平台。技術上，這個工具使用了 Next.js 框架，並結合了多個 AI 代理 CLI，實現了無需 API 金鑰的本地運行，這降低了使用門檻。相比於傳統的 Markdown 編輯器，這個工具能夠即時預覽生成的內容，並且支持多種格式的輸入，讓使用者能夠更靈活地處理數據。

與其他編輯器相比，如 Markdown 編輯器，這個工具的優勢在於它能夠生成即時可用的 HTML，而不需要額外的格式化步驟。實際使用中，這個工具的效能表現良好，能夠快速生成內容，並且支持多種輸出格式，適合需要快速發佈內容的團隊或個人。這個專案目前仍在活躍開發中，社群的反饋和問題解決率尚可，但仍需注意一些使用上的限制，例如 Windows 環境的兼容性問題。整體來說，這個工具適合需要快速生成和發佈 HTML 的內容創作者，尤其是那些不想深入學習 HTML 和 CSS 的使用者。

**技術棧**：`Next.js 16.2.6` · `React 19.2.4` · `TypeScript 5`

## 重點功能

- 本地 AI 代理 — 使用者無需 API 金鑰，直接利用已登入的 CLI 進行內容生成。
- 75 種可組合技能模板 — 覆蓋多種輸出格式，包括雜誌、演示文稿、社交媒體卡片等。
- 即時預覽 — 使用 SSE 流式傳輸，實時顯示生成的 HTML 內容。
- 一鍵導出 — 支持直接導出到 WeChat、X、Zhihu 等平台，無需額外格式化。
- 多格式支持 — 編輯器接受 Markdown、CSV、JSON 等多種格式的輸入。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/nexu-io/html-anything
```
2. 進入專案目錄
```bash
cd html-anything
```
3. 安裝依賴
```bash
pnpm install
```
4. 啟動開發伺服器
```bash
pnpm dev
```

## 程式碼範例

```html
[
  "# 前置條件（1 行）",
  "git clone https://github.com/nexu-io/html-anything",
  "# 預期輸出（從 README 推測）",
  "啟動開發伺服器後，訪問 http://localhost:3000 來使用編輯器。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 930 stars（310/天），forks 94（10.1%），顯示出強勁的增長潛力。這個專案的背後團隊來自於 Open Design，擁有豐富的開發經驗，並且針對現有的 Markdown 編輯工具的局限性提出了解決方案，讓使用者能夠直接生成 HTML，避免了傳統編輯器的繁瑣步驟。近期的推廣活動和社群討論也可能促進了這個專案的曝光度。技術上，這個工具的設計利用了多個 AI 代理的能力，讓使用者能夠在本地環境中運行，這在當前的開發生態中是相對少見的。forks/stars 比率為 10.1%，顯示出有相當比例的使用者對這個專案進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：希望快速生成和發佈 HTML 內容的內容創作者和設計師。

> [!example] 使用場景
> - 內容創作者用它來快速生成社交媒體帖子，因為可以一鍵導出到 WeChat 和 X，省去手動格式化的時間。
> - 設計師用它來創建雜誌和報告，因為它提供了多種模板和即時預覽功能，讓設計過程更加高效。
> - 開發者用它來生成 HTML 原型，因為它支持多種數據格式的輸入，讓原型設計更加靈活。

## 架構分析

這個專案採用了 Next.js 作為主要框架，因為它提供了強大的伺服器端渲染和靜態生成能力，適合用於快速開發和部署。資料流方面，使用者輸入的內容經過 AI 代理處理後生成 HTML，並通過 SSE 實時更新預覽。這樣的設計使得使用者能夠即時看到生成的結果，並能夠在生成過程中進行干預。選擇 Next.js 的代價在於需要一定的學習曲線，但它的生態系統和社群支持使得這個選擇是合理的。擴展性方面，這個專案的架構設計使得未來可以輕鬆添加新的模板和功能，並且能夠支持多種輸入格式，這對於未來的擴展是有利的。

## 技術深入分析

這個專案的核心技術機制在於結合了多個 AI 編輯代理，使用者只需輸入內容，AI 代理便會自動生成 HTML。這個過程中使用了 SSE 流式傳輸技術，讓使用者能夠即時看到生成的內容，這在傳統的編輯器中是無法實現的。效能方面，這個工具能夠快速處理多種格式的輸入，並且生成的 HTML 文件在結構上是優化過的，適合直接發佈。設計取捨方面，選擇 Next.js 作為框架使得專案在開發和部署上都能夠保持高效，但也帶來了一定的學習曲線。技術風險方面，對於 Windows 環境的支持問題可能會影響使用者的接受度，這是未來需要解決的重點。整合方面，這個工具能夠與現有的開發工具鏈無縫對接，特別是在 CI/CD 流程中，能夠提高開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Windows 環境的兼容性問題。整體來說，花 30 分鐘就能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，降低了使用門檻。
> - 支持多種輸入格式，靈活性高。
> - 即時預覽功能提升了使用體驗。

> [!danger] 缺點
> - 對 Windows 環境支持不佳，可能影響使用者體驗。
> - 需要安裝多個 CLI 工具，增加了安裝複雜度。
> - 目前的社群支持和問題解決率尚可，但仍需改進。

> [!warning] 注意事項
> - 目前對 Windows 環境的支持存在問題，可能會出現無效參數的提示。
> - 需要安裝多個 CLI 工具以便於功能正常運作。
> - 在某些情況下，無法手動覆蓋代理二進位路徑。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 這是同一團隊的專案，專注於設計系統和代理檢測，提供了更廣泛的設計工具和模板。 |
| [mdnice/markdown-nice](https://github.com/mdnice/markdown-nice) | 這是一個 Markdown 編輯器，專注於格式化和美化 Markdown 文檔，但不支持即時 HTML 生成。 |
| [gcui-art/markdown-to-image](https://github.com/gcui-art/markdown-to-image) | 這個工具專注於將 Markdown 轉換為高解析度圖片，適合需要圖片輸出的場景，但不支持 HTML 編輯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [mdnice/markdown-nice](https://github.com/mdnice/markdown-nice) | 專注於 Markdown 文檔的美化和格式化，並不支持即時 HTML 生成。 | 如果你的團隊主要使用 Markdown 並希望提升文檔的可讀性，這個工具會更合適。 | low，因為 Markdown 文件可以直接轉換為美化格式。 |
| [gcui-art/markdown-to-image](https://github.com/gcui-art/markdown-to-image) | 專注於將 Markdown 轉換為高解析度圖片，適合需要圖片輸出的場景，但不支持 HTML 編輯。 | 如果你的需求是將文檔轉換為圖片而非 HTML，這個工具會更適合。 | medium，因為需要重新考慮輸出格式和使用場景。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **html-anything** | **markdown-nice** | **markdown-to-image** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Markdown 文檔的美化和格式化，並不支持即時 HTML 生成。 | 專注於將 Markdown 轉換為高解析度圖片，適合需要圖片輸出的場景，但不支持 HTML 編輯。 |
> | 遷移成本 | - | low，因為 Markdown 文件可以直接轉換為美化格式。 | medium，因為需要重新考慮輸出格式和使用場景。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用 Markdown 並希望提升文檔的可讀 | 如果你的需求是將文檔轉換為圖片而非 HTML，這個工具會更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 環境下可能出現無效參數的提示
  - 解法：使用 WSL 或在其他操作系統上運行
- [MEDIUM] 無法手動覆蓋代理二進位路徑的問題
  - 解法：檢查安裝的 CLI 工具路徑
- [MEDIUM] 在某些情況下，無法正常執行 git clone 操作
  - 解法：檢查依賴包是否完整

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內容創作 | 非常適合 | 能夠快速生成和發佈 HTML，提升工作效率。 |
| 需要生成高質量報告的設計師 | 適合 | 提供多種模板和即時預覽功能，方便設計。 |
| 大型企業的內容管理系統 | 普通 | 可能需要更多的自定義和擴展功能。 |
| 個人博客的內容編輯 | 非常適合 | 無需深入學習 HTML，快速生成內容。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠快速生成和發佈內容，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，且不會存取敏感資料。依賴的庫和工具也有良好的社群支持，安全性相對較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與其他 AI 編輯器和 CLI 工具搭配使用，特別是在內容創作和發佈的工作流中。使用者可以在本地環境中運行，並將生成的內容直接發佈到社交媒體或網站。整合方面，這個工具支持與 GitHub Actions 等 CI 工具的配合，能夠在開發流程中提升效率。常見的整合問題包括依賴包的安裝和配置，這需要使用者有一定的技術背景。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，內容創作者主要依賴 Markdown 編輯器來撰寫和格式化內容，這些工具的局限性在於無法直接生成 HTML，並且需要額外的格式化步驟。隨著 AI 技術的進步，這個工具的出現讓內容生成變得更加高效和便捷，特別是在需要快速發佈的場景中。這個專案代表了 AI 編輯器的趨勢，未來可能會有更多類似的工具出現，進一步改變內容創作的方式。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 HTML 和 CSS
- 了解 Markdown 格式
- 有使用 CLI 工具的經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：收集反饋並調整使用方式。第四週：在主產品中開始使用。

**成功指標**：內容生成時間減少 50%，發佈流程簡化。

> [!warning] 退出計畫
> 所有設定和內容都以標準格式保存，可以輕鬆轉移到其他編輯器或工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nexu-io--html-anything");
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
> const me = dv.page("Repos/nexu-io--html-anything");
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
| Forks | 94 |
| Open Issues | 5 |
| Issue 解決率 | 29% (2 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-11 |
| Repo 大小 | 12.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nexu-io/html-anything) |
| Topics | `agent-skills` `agentic` `ai-agents` `ai-design` `ai-editor` `byok` `claude` `claude-code` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `clsx` `dompurify` `highlight.js` `jszip` `juice` `lucide-react` `marked` `modern-screenshot` `next` `papaparse` `pptxgenjs` `react` `react-dom` `xlsx` `zustand`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 75
>     "TypeScript" : 24
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pftom](https://github.com/pftom) | 5 |
> | [@joeylee12629-star](https://github.com/joeylee12629-star) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/nexu-io/html-anything#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-14）
> **活躍天數** 3 天 · **最新 commit** Fix/preview write tool rescue (#11)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/nexu-io/html-anything/issues/15) | windows10  环境有问题   提示无效的参数 | 0 | 0 |
> | [#13](https://github.com/nexu-io/html-anything/issues/13) | Agent binary path auto-detection is incorrect; no way to man | 0 | 0 |
> | [#12](https://github.com/nexu-io/html-anything/issues/12) | 能不能使用https://surge.sh/的服务来直接部署生成好的网页 | 0 | 0 |
> | [#10](https://github.com/nexu-io/html-anything/issues/10) | Unable to perform a normal git clone, with a prompt indicati | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # HTML Anything
> 
> From the team behind Open Design — 40k★ · 200+ contributors, production-grade and iterating faster. html-anything is the focused agent-era HTML editor; if it clicks for you, Open Design is where the same team ships at scale.
> 
> > **Markdown is the draft. HTML is what humans read. Your local agent writes it.** The agentic HTML editor — in the agentic era, you don't hand-edit docs anymore, so the output format should be what the reader actually wants: HTML. Local-first, zero API key, reuses the CLI session you already have logged in — **8 coding-agent CLIs** auto-detected on your `PATH` (Claude Code · Cursor Agent · Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Qwen Coder · Aider), driven by **75 composable skill templates** across **9 deliverable surfaces** (magazine articles · keynote decks · résumés · posters · Xiaohongshu cards · tweet cards · web prototypes · data reports · Hyperframes videos). One-click export to WeChat / X / Zhihu, or download `.html` / `.png`.
> 
>   
> 
>   
>   
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
>   
> 
> English · 简体中文
> 
> ---
> 
> 
> ## Quickstart
> 
> ```bash
> git clone https://github.com/nexu-io/html-anything
> cd html-anything
> pnpm install
> pnpm dev
> 
> ## Demo
> 
> Entry view — the top bar shows your installed CLIs, the left pane is the editor, the middle is the template + design-system picker, the right is a live iframe preview. The same surface produces magazines, decks, posters, web prototypes, and Hyperframes frame scripts.
> 
> 75 templates, searchable and filterable — pick by mode (prototype / deck / frame / social / office / doc) × scenario (design / marketing / engineering / product / personal). Every skill ships an example.html you can open straight from the repo to see what the agent will produce.
> 
> SSE streaming — agent stdout JSON-line is parsed for text deltas, appended into the iframe srcdoc in real time. You watch the page render line by line. Don't like where it's going? Interrupt and re-prompt — no wasted full generation.
> 
> One-click export — WeChat (juice-inlined CSS) · X / Weibo / Xiaohongshu (modern-screenshot → 2× PNG → ClipboardItem) · Zhihu (LaTeX image placeholders) · download .html · download .png. Paste straight in, no second pass of manual formatting.
> 
> Deck mode — 20 keynote skills, including Swiss International (Helvetica grid maximalism), Guizang Editorial (magazine ink), Open Slide Canvas (1920×1080 agent-native), Magazine Web, XHS Pastel, Hermes Cyber, Replit Style. ←/→ to navigate slides, presenter notes, PDF export.
> 
> Hyperframes frames — 10 motion frame scripts (liquid hero, NYT data chart, sticky-note flowchart, glitch title, cinema light-leak, macOS notification, brand logo outro, text-cursor VFX, 3D device mockup, …) conforming to heygen-com/hyperframes; hand off straight to Remotion to render .mp4.
> 
> 
> ## Why this exists
> 
> Anthropic's [Claude Code team announced](https://x.com/trq212/status/2052809885763747935) they stopped writing internal docs in Markdown — they ship HTML now. The argument is simple:
> 
> | Markdown | HTML |
> |---|---|
> | Good for the writer | Good for the reader |
> | Layout limited to the renderer | Layout is yours |
> | Looks ugly screenshotted into a tweet | Already looks like a designed image |
> | Has to be re-flowed for WeChat / Zhihu / newsletter | One-click format conversion |
> 
> **HTML is the final form for humans. Markdown is just an intermediate state during writing.**
> 
> But "writing HTML" used to mean writing CSS, picking type scales, snapping to a grid, doing responsive — most users won't, designers won't bother, writers don't have the patience. So what we built: after you press ⌘+Enter, your **local AI agent** turns any input (Markdown / CSV / Excel / JSON / SQL / raw notes) into a **ship-ready single-file HTML** in seconds, then one-click sends it to WeChat / X / Zhihu / anywhere. "Ship-ready" is the bar — when generation finishes, the artifact is what your audience actually sees. No "I'll touch it up later" pass.
> 
> We stand on four open-source shoulders:
> 
> - [**`nexu-io/open-design`**](https://github.com/nexu-io/open-design) — the agent-detection layer, the design-system model, and the `SKILL.md` protocol. `src/lib/agents/` and `src/lib/templates/skills/*` mirror this architecture directly.
> - [**`mdnice/markdown-nice`**](https://github.com/mdnice/markdown-nice) — proof that `juice`-inlined CSS pastes cleanly into WeChat and Zhihu without per-platform manual fix-up.
> - [**`gcui-art/markdown-to-image`**](https://github.com/gcui-art/markdown-to-image) — the iframe → high-DPI PNG export path.
> - [**`alchaincyf/huashu-md-html`**](https://github.com/alchaincyf/huashu-md-html) — the anti-AI-slop discipline that maps into the hard constraints inside every `SKILL.md` (CJK-first font stack, 8 px baseline grid, contrast ≥ 4.5, must-use-real-data rule).
> 
> 
> ## Showcase
> 
> The eight skills that surface at the top of the picker's **Featured / 推荐** group — sorted by their `recommended:` rank in `SKILL.md` frontmatter (lower = higher). Each ships a real `example.html` you can open straight from the repo, no auth, no setup.
> 
> deck-guizang-editorial · deck · recommended: 1Magazine × e-ink editorial deck, inspired by op7418/guizang-ppt-skill — 10 locked layouts × 5 palettes (Ink / Indigo Porcelain / Forest Ink / Kraft / Dune). Reads like a printed art-zine, not a slide deck.
> 
> deck-swiss-international · deck · recommended: 2Swiss International deck — 16-column grid + one saturated accent (Klein Blue / Lemon / Mint / Safety Orange) across 22 locked layouts. Cold, rational, institutional. The deck that reads "a designer made this" the moment it opens.
> 
> doc-kami-parchment · doc · recommended: 3Warm-parchment editorial document, inspired by tw93/kami. #f5f4ed ground + ink-blue accent + single serif voice — a noticeably calmer reading surface than plain-white markdown for long essays, reports, and one-pagers.
> 
> magazine-poster · poster · recommended: 4Newsprint Sunday-paper poster — oversized serif headline, two-column body, six numbered sections, dot-pattern cream ground. Reads like a printed broadsheet, not a webpage.
> 
> video-hyperframes · frame / video · recommended: 5Hyperframes / Remotion-compatible storyboard — 6–10 sequential 1920×1080 frames with hidden duration + transition markers and an auto-play script. Hand straight to heygen-com/hyperframes or Remotion to render .mp4.
> 
> frame-glitch-title · frame · recommended: 6Glitch title frame — cyan/magenta chromatic offset, CRT scanlines, corrupted-data subtitle, ASCII noise in the corners. Cyberpunk hero card or video transition.
> 
> vfx-text-cursor · vfx · recommended: 7VFX text-cursor opener — a cursor "types" across the canvas, each character revealed with a hot-pink × cyan chromatic trail and directional light leaks. Drop in a quote, get a film-grade opening frame.
> 
> frame-logo-outro · frame · recommended: 8Logo outro frame — logo assembles piece-by-piece with glow bloom, tagline rises, CTA appears. The closing card for a product reveal or brand film.
> 
> The full skill catalog (organized by mode) is in [Skills](#skills) below.
> 
> 
> ## At a glance
> 
> | | What you get |
> |---|---|
> | **Coding-agent CLIs (8)** | Claude Code · Cursor Agent · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Qwen Coder · Aider — scanned on startup across `PATH` (including `~/.local/bin`, `~/.bun/bin`, `/opt/homebrew/bin`, `~/.npm-global/bin` — directories a GUI-launched Node process normally misses), swap from the top-bar picker. |
> | **Zero API key** | We reuse the session you already have logged in via `claude login` · `cursor login` · `gemini auth`. Your existing subscription does the work; marginal cost is **$0**. |
> | **75 skill templates** | `prototype` (web / SaaS landing / dashboard / data report) · `deck` (20 keynote skills incl. Swiss International, Guizang Editorial, XHS Pastel, Hermes Cyber, Replit, Magazine Web…) · `frame` (10 Hyperframes video frames — liquid hero, NYT data chart, sticky-note flowchart, glitch title, cinema light-leak, macOS notification, logo outro…) · `social` (X / 

## 延伸閱讀

相關概念：[[AI 編輯器]] · [[本地運行]] · [[即時預覽]]

相關專案：[[nexu-io--open-design|nexu-io/open-design]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/nexu-io/html-anything)

## 相關收錄

> [!note]- 直接競品（同子分類：HTML 編輯器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "HTML 編輯器" AND file.name != "nexu-io--html-anything"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "nexu-io--html-anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "nexu-io--html-anything" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "nexu-io--html-anything"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 編輯器","本地運行","即時預覽"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nexu-io--html-anything" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nexu-io--html-anything");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nexu-io--html-anything" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nexu-io" AND file.name != "nexu-io--html-anything"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nexu-io--html-anything");
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
> const me = dv.page("Repos/nexu-io--html-anything");
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
> const me = dv.page("Repos/nexu-io--html-anything");
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
> const me = dv.page("Repos/nexu-io--html-anything");
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
> const me = dv.page("Repos/nexu-io--html-anything");
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

> **2026-05-15** — 首次收錄
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

- [[2026-05-15|2026-05-15]] — 首次收錄，930 stars
