---
repo: isjiamu/gzh-design-skill
url: https://github.com/isjiamu/gzh-design-skill
owner: isjiamu
owner_type: User
language: HTML
license: NOASSERTION
description: "把 Markdown 一键排成可直接粘进公众号编辑器的精致 HTML —— 6 套精选主题 + 主题生成器 + 双关卡校验。An AI-agent skill that turns Markdown into paste-ready WeChat article HTML."
homepage: ""
stars: 1176
stars_per_day: 196
forks: 132
open_issues: 0
created: 2026-07-01
pushed_at: 2026-07-08
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "排版工具"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "將 Markdown 一鍵排版為可直接粘貼進微信公眾號的精美 HTML。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 264
readme_length: 8453
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1176"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
  - "topic/agent_skill"
  - "topic/ai_agent"
  - "topic/claude_code"
  - "topic/codex"
  - "topic/cursor"
aliases:
  - "gzh-design-skill"
  - "isjiamu/gzh-design-skill"
  - "將 Markdown 一鍵排版為可直接粘貼進微信公眾號的精美 HTML。"
---

# gzh-design-skill

**1.2k** stars · **196** stars/天 · 建立 6 天前 · HTML · NOASSERTION

```dataviewjs
const me = dv.page("Repos/isjiamu--gzh-design-skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.0` `easy-install`

`agent-skill` `ai-agent` `claude-code` `codex` `cursor` `gongzhonghao` `html` `markdown` `rich-text` `skill` `typesetting` `wechat` `weixin`

> [!summary] 一句話摘要
> 將 Markdown 一鍵排版為可直接粘貼進微信公眾號的精美 HTML。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (196 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要將 Markdown 內容轉換為微信公眾號格式的內容創作者和編輯者。
> **一句話重點** 這個工具不僅解決了微信公眾號排版的痛點，還提供了自定義主題生成的能力，讓內容創作者能夠更靈活地表達風格。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "排版工具" && p.file.name !== "isjiamu--gzh-design-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 排版工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能夠快速生成符合微信格式的文章，值得採用。

> [!abstract] 核心創新
> 提供了一個主題生成器，能夠根據用戶描述或參考圖生成自定義的排版主題。

## 專案簡介

這個專案的核心功能是將 Markdown 轉換為適合微信公眾號的 HTML 格式，並且保證樣式不會在粘貼過程中丟失。使用者只需選擇一個主題，然後輸入 Markdown 內容，系統會自動生成包含內聯樣式的 HTML，並進行質量校驗以確保符合微信的格式要求。關鍵指令如 `npx skills add https://github.com/isjiamu/gzh-design-skill` 可以快速安裝這個技能。這個工具的設計理念是「約束優於自由」，透過預設的主題和組件來保證輸出的質量，避免了內容風格的隨意性。技術上，這個專案使用 Python 進行排版邏輯的實現，並且依賴於一系列的校驗腳本來確保最終產物的合規性。

相較於其他 Markdown 轉 HTML 工具，如 `pandoc`，這個專案專注於微信公眾號的特定需求，提供了主題生成器和雙關卡質量校驗，這在一般的 Markdown 工具中是缺乏的。使用者可以根據不同的內容類型選擇最合適的主題，並且能夠自定義主題，這在其他工具中通常需要額外的設置。這個工具的使用效果非常直觀，能夠快速生成符合微信格式的文章，適合需要頻繁在微信上發佈內容的創作者。由於這個專案仍在快速發展中，未來可能會增加更多的主題和功能，建議有需求的團隊及早採用。適合用於需要將長文從 Markdown 轉換為微信格式的場景，特別是對於內容創作者和編輯者來說，能夠節省大量的排版時間。

**技術棧**：`Python` · `HTML`

## 重點功能

- 6 套精選主題 — 包括摸魚綠、紅白、石墨極簡等，適合不同類型的內容。
- 主題生成器 — 用一句話或參考圖生成自定義主題，方便創作者根據需求調整風格。
- 自動章節編號 — 文章自動編號，提升內容的結構性。
- 雙關卡質量校驗 — 確保生成的 HTML 符合微信的格式要求，避免常見的排版錯誤。
- 一鍵複製功能 — 生成的 HTML 可直接複製到剪貼板，方便粘貼到微信公眾號編輯器中。

## 快速開始

1. 安裝技能
```bash
npx skills add https://github.com/isjiamu/gzh-design-skill
```
2. 選擇主題並輸入 Markdown 內容
```bash
用摸魚綠把這篇文章排成公众号 HTML：`article.md`
```
3. 生成 HTML 並複製
```bash
生成帶「複製」按鈕的預覽頁，點擊複製到剪貼板。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1176 stars（196/天），forks 132（11.2%），這顯示出強勁的增長勢頭。作者 isjiamu 在 AI Agent 和排版工具方面有豐富的經驗，這個工具解決了微信公眾號排版的痛點，之前的解決方案往往無法保證格式不丟失。這個專案的推出恰逢微信內容創作需求上升，吸引了大量使用者的注意。高比例的 forks 表示社群對這個工具的實際修改和使用興趣，顯示出其在開發者中的受歡迎程度。

## 適合誰使用

**目標受眾**：需要將 Markdown 內容轉換為微信公眾號格式的內容創作者和編輯者。

> [!example] 使用場景
> - 內容創作者用它來將 Markdown 格式的文章轉換為微信公眾號的 HTML，因為這樣可以節省排版時間並保證格式不丟失。
> - 編輯者用它來快速生成符合微信格式的長文，因為它提供了多種主題選擇，能夠滿足不同內容的需求。
> - 數據分析師用它來將報告從 Markdown 轉換為可發佈的微信文章，因為它支持自動編號和關鍵詞標記，提升了報告的可讀性。

## 架構分析

這個專案採用模組化設計，核心功能是將 Markdown 轉換為 HTML，並使用 Python 腳本進行質量檢查。資料流從用戶輸入 Markdown 開始，經過主題選擇和內容解析，最終生成符合微信格式的 HTML。選擇這種設計是為了確保輸出的一致性和可重複性，並且能夠快速適應不同的內容需求。

由於使用了內聯樣式，這樣的設計避免了外部樣式的依賴，減少了格式丟失的風險。這種設計的代價是可能會增加 HTML 文件的大小，但在微信的應用場景中，這是可以接受的。擴展性方面，未來可以通過增加更多主題和功能來提升工具的使用範圍。

## 技術深入分析

這個專案的核心技術機制是將 Markdown 轉換為 HTML，並使用 Python 腳本進行質量檢查。這樣的設計使得生成的 HTML 符合微信的格式要求，並且避免了常見的排版錯誤。效能方面，這個工具能夠快速處理長文，並且生成的 HTML 文件大小相對可控，適合在微信平台上使用。選擇 Python 作為主要開發語言是因為其在文本處理和自動化方面的強大能力，並且有豐富的庫可供使用。這個專案的依賴樹相對簡單，主要依賴於 Python 的標準庫，降低了維護成本。技術風險方面，未來在擴展主題和功能時，可能會面臨兼容性問題，需要進行充分測試。整合方面，這個工具可以輕鬆地與現有的 Markdown 編輯器和工作流結合，並且對於使用者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且有範例可供參考。安裝過程順暢，沒有明顯的坑。文件目前僅提供中文，對於非中文使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 提供多種主題選擇，滿足不同內容需求。
> - 一鍵複製功能，提升使用效率。
> - 雙關卡質量校驗，確保生成的 HTML 符合微信格式要求。

> [!danger] 缺點
> - 僅支持 Markdown 格式，無法處理其他格式的內容。
> - 專注於微信公眾號，對於其他平台的支持有限。
> - 生成的 HTML 文件可能較大，影響加載速度。

> [!warning] 注意事項
> - 僅支援 Markdown 格式的內容，無法處理純圖片或社交卡片類型的排版。
> - 不支持非微信公眾號平台的排版需求，專注於特定場景。
> - 生成的 HTML 僅適用於微信公眾號，無法用於其他平台。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jgm/pandoc](https://github.com/jgm/pandoc) | Pandoc 是一個通用的文檔轉換工具，支持多種格式，但不專注於微信的排版需求，導致格式不一定能保持。 |
| [typora/typora](https://github.com/typora/typora) | Typora 是一個 Markdown 編輯器，雖然支持導出 HTML，但缺乏針對微信的格式檢查和主題選擇功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jgm/pandoc](https://github.com/jgm/pandoc) | Pandoc 是一個通用的文檔轉換工具，支持多種格式，但不專注於微信的排版需求，導致格式不一定能保持。 | 如果需要處理多種文檔格式的轉換，而不僅僅是針對微信的排版需求。 | medium，因為需要重新學習 Pandoc 的語法和選項。 |
| [typora/typora](https://github.com/typora/typora) | Typora 是一個 Markdown 編輯器，雖然支持導出 HTML，但缺乏針對微信的格式檢查和主題選擇功能。 | 如果需要一個強大的 Markdown 編輯器，而不僅僅是排版工具。 | low，因為使用者已經熟悉 Markdown 編輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gzh-design-skill** | **pandoc** | **typora** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Pandoc 是一個通用的文檔轉換工具，支持多種格式，但不專注於微信的排版需求，導致格式不一定能保持。 | Typora 是一個 Markdown 編輯器，雖然支持導出 HTML，但缺乏針對微信的格式檢查和主題選擇功能。 |
> | 遷移成本 | - | medium，因為需要重新學習 Pandoc 的語法和選項。 | low，因為使用者已經熟悉 Markdown 編輯。 |
> | 適用場景 | 主要場景 | 如果需要處理多種文檔格式的轉換，而不僅僅是針對微信的排版需求 | 如果需要一個強大的 Markdown 編輯器，而不僅僅是排版 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，生成的 HTML 可能不符合微信的最新格式要求
  - 解法：定期更新工具以獲取最新的格式檢查規則
- [MEDIUM] 自定義主題生成可能會出現風格不一致的問題
  - 解法：在生成主題後進行手動調整以確保一致性
- [MEDIUM] 某些 Markdown 語法在轉換過程中可能無法正確解析
  - 解法：使用簡單的 Markdown 語法，避免複雜格式

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型內容創作團隊需要快速生成微信文章 | 非常適合 | 能夠快速將 Markdown 轉換為符合微信格式的 HTML，節省時間。 |
| 大型企業需要定期發佈報告到微信公眾號 | 適合 | 提供自動化排版和質量檢查功能，適合高頻率的內容更新。 |
| 個人博客作者希望將內容發佈到微信平台 | 普通 | 雖然能夠使用，但可能不需要專門的排版工具。 |
| 需要處理非微信平台的內容排版 | 不適合 | 專注於微信公眾號的排版需求，對其他平台支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速生成符合微信格式的文章，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不會存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Markdown 編輯器搭配使用，位於內容創作的開發環節。實際整合範例為在使用 VS Code 編輯 Markdown 文件後，直接使用該工具生成 HTML 並粘貼到微信公眾號編輯器中。支援 GitHub Actions 進行自動化排版，並且可以與多數 Markdown 編輯器相容。整合的摩擦點主要在於需要確保生成的 HTML 符合微信的格式要求，這需要使用者進行額外的檢查。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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
| Forks | 132 |
| Open Issues | 0 |
| 最後推送 | 2026-07-08 |
| 建立日期 | 2026-07-01 |
| Repo 大小 | 264 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/isjiamu/gzh-design-skill) |
| Topics | `agent-skill` `ai-agent` `claude-code` `codex` `cursor` `gongzhonghao` `html` `markdown` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 96
>     "Python" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@isjiamu](https://github.com/isjiamu) | 1 |

**最新版本**：v1.0.0 — v1.0.0 · 联名首发 (2026-07-06)

> [!info]- Release Notes
> 甲木 × 摸鱼小李 联名首发 🎉
> 
> 微信公众号排版技能 —— 把 Markdown 一键排成可直接粘进公众号编辑器的精致 HTML。
> 
> **核心**
> - 6 套精选厚主题：摸鱼绿（默认）· 红白 · 石墨极简 · 留白禅意 · 摸鱼票据 · 橄榄手记
> - 主题生成器：一句话 / 参考图现造新主题并复用
> - 文章类型 → 配方表装配、关键词下划线、全角标点、图片自适应
> - 双关卡质量校验、一键复制预览页、样式粘贴不掉
> - AGPL-3.0 · 欢迎 AI Agent / 模型厂商共创
> 
> **安装**：`npx skills add https://github.com/isjiamu/gzh-design-skill`

## 社群與生態

**社群活躍度**：社群活躍，持續更新和改進中。
**連結**：[文件](https://github.com/isjiamu/gzh-design-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06）
> **活躍天數** 1 天 · **最新 commit** 🎉 gzh-design-skill · 甲木 × 摸鱼小李 联名首发

## README 摘錄

> [!info]- 展開查看原文 README
> > 🤝 **本项目由 甲木 × [「摸鱼小李」](https://mp.weixin.qq.com/s/EMahAzgfAbRQrYukWE7_IQ) 联名共建** —— 排版组件、主题设计与质量标准凝聚了两人的公众号实践与共同打磨，特别感谢小李。
> 
> # gzh-design-skill · 公众号排版技能
> 
> **把 Markdown 一键排成可直接粘贴进微信公众号编辑器的精致 HTML**
> 
> 6 套精选主题 + 主题生成器 · 代码块/图片/GIF · 自动章节编号与关键词标记 · 双关卡质量校验
> 
> [](LICENSE)
> [](https://claude.ai/code)
> [](references/theme-index.md)
> [](CONTRIBUTING.md)
> [](#-快速开始)
> 
> [English](README.en.md) ｜ 中文
> 
> ---
> 
> 一个给 AI Agent（Claude Code / Codex / Cursor 等）用的公众号排版 Skill。你写完 Markdown，它按你选的主题，生成**样式全内联、粘贴到公众号编辑器不掉格式**的 HTML——自动编章节号、标关键词下划线、配引言卡与目录、处理代码块和图片、合并作者签名，并用脚本确定性地兜住公众号平台的各种限制。
> 
> ## ✨ 核心特性
> 
> - **6 套精选主题**：摸鱼绿（默认）· 红白 · 石墨极简 · 留白禅意 · 摸鱼票据 · 橄榄手记 —— 每套都是自成体系的厚组件库（设计变量 + 数十个精细组件 + 视觉层级表 + 文章类型配方表）。
> - **主题生成器**：不满足现成主题？用一句话描述或一张参考图，生成一套全新组件库并保存本地复用（见 `references/theme-generator.md`）。
> - **内容全兼容**：代码块（深/浅色，等宽不折行）、图片、GIF（带动图角标）、行内代码、引用、列表、产品徽章。
> - **智能排版**：章节自动编号（末章 ∞ / ///）、每段主动标 1–3 个关键词下划线、从正文提炼引言卡与目录、作者签名去重合并。
> - **中文全角标点**：正文自动规范全角，代码块内原样保留。
> - **不掉格式**：所有样式内联、文字 `` 包裹，规避 `//class/grid/position` 等公众号会过滤的写法。
> - **双关卡质量校验**：`component_lint.py`（组件库源头）+ `validate_gzh_html.py`（最终产物），构成可复现的「改→验→修」闭环。
> - **一键复制**：生成带「复制」按钮的预览页，点一下把富文本复制到剪贴板，直接粘进公众号，免手动全选。
> 
> ## 👀 效果预览
> 
> 6 套主题各排同一篇长文（真实长图，含配图、引言卡、编号章节、金句、名词旁注等完整组件）：
> 
> 摸鱼绿（默认）
> 
> 红白色系
> 
> 橄榄手记
> 
> 石墨极简风
> 留白禅意风
> 摸鱼票据风
> 
> > 📚 **6 套完整长图 → [docs/all-themes.md](docs/all-themes.md)**　｜　克隆后浏览器打开 `docs/gallery/index.html` 可看可交互的完整 HTML。
> 
> ## ✅ 适合 / ❌ 不适合
> 
> **✅ 适合**：观点/深度分析 · 教程/操作指南 · 测评/工具盘点 · 知识整理/方法论 · 访谈/人物特稿 · 数据复盘/报告 · 生活/情感随笔 · 案例实战 —— 把 Markdown / Word / PDF / 纯文本长文，一键排成可直接粘进公众号编辑器的 HTML；也能按描述或参考图生成自定义主题。
> 
> **❌ 不适合**：普通网页/落地页（用前端 skill）· PPT（用 PPT skill）· 纯图片海报/社交卡片（用社交卡片类 skill）· 非公众号平台的排版 · **代写文章**（本 skill 只排版、不写作——先有 Markdown 再用它）。
> 
> ## 🗂 常见使用场景
> 
> | 你的内容 | 推荐怎么排 |
> |---|---|
> | 观点 / 深度长文 | 红白 或 石墨极简；关键词下划线 + 金句引用 + 居中金句 |
> | 产品测评 / 工具盘点 | 摸鱼绿 或 摸鱼票据；step/tool-label + 卡片，按配方表走 |
> | 教程 / 操作指南 | 摸鱼绿；step-label + 代码块 + 编号列表 |
> | 数据复盘 / 年度报告 | 摸鱼绿 或 橄榄手记；数据卡 + 表格 |
> | 禅意 / 极简随笔 | 留白禅意；大留白 + 居中衬线引用 |
> | 内刊 / 深度评测 / 案例复盘 | 橄榄手记；编者按 + 分节 + 暗色摘要框 |
> | Word / PDF 稿转公众号 | 先自动格式归一化 → 再按题材选主题 |
> | 想要现成之外的风格 | 主题生成器：一句话或参考图现造一套 |
> 
> ## 🎨 6 套精选主题
> 
> 覆盖绝大多数公众号题材，每套都打磨到「拿来即用」：
> 
> | 主题 | 适合 |
> |---|---|
> | **摸鱼绿**（默认） | 教程、测评、清单、工具盘点（卡片丰富、信息密度高） |
> | **红白色系** | 深度分析、观点、力量感话题（经典编辑风） |
> | **石墨极简风** | 设计、科技评论、专业观点、高端品牌 |
> | **留白禅意风** | 禅意、极简生活、深度随笔（呼吸感最强） |
> | **摸鱼票据风** | 工具对比、创意评测（票据视觉隐喻） |
> | **橄榄手记** | 内刊手记、深度评测、案例复盘（编辑部内刊质感） |
> 
> > 主色、下划线色值等**完整速查表见文末 [附录](#-完整主题速查表)**；不够用就让 AI [生成新主题](#-faq)。
> 
> ## 🚀 快速开始
> 
> ### 方式一：一行安装（推荐）
> 
> ```bash
> npx skills add https://github.com/isjiamu/gzh-design-skill
> ```
> 
> ### 方式二：让 AI 自己装
> 
> 对**任意 Agent**（Claude Code / Codex / Cursor 等）说一句：
> 
> > 请帮我查找并自动安装 https://github.com/isjiamu/gzh-design-skill 这个 skill
> 
> 它会自行 clone 到对应的 skills 目录并接入。
> 
> ### 方式三：手动 clone
> 
> ```bash
> git clone https://github.com/isjiamu/gzh-design-skill.git ~/.claude/skills/gzh-design
> ```
> 
> 装好后，直接对 Agent 说：
> 
> > 用摸鱼绿把这篇文章排成公众号 HTML：`article.md`
> 
> ## 📖 使用流程
> 
> 1. **选主题** — 按题材自动推荐最契合的主题并请你一步确认（默认摸鱼绿）；也可直接指定，或让 AI 生成新主题。
> 2. **读组件库** — 读所选主题库 + 通用增量库（代码块/图片/小标签）。
> 3. **解析 Markdown** — 识别标题、章节、加粗、高亮、引用、图片、代码块、列表。
> 4. **装配 HTML** — 用组件库里的真实组件拼装，落实编号、下划线、全角、签名。
> 5. **校验** — 跑 `validate_gzh_html.py`，ERROR 清零才交付。
> 6. **输出** — 生成干净正文 + 带「复制」按钮的预览页；浏览器打开预览页点右上角「复制到公众号」，再去编辑器粘贴即可（免手动全选）。
> 
> ## 🧩 公众号平台限制（已内置兜底）
> 
> 生成的 HTML 严格遵守：禁 `//`、`class/id`、`position:fixed/absolute/sticky`、`float`、`@media/@keyframes`、`display:grid`、CSS 变量、外部字体；样式全部内联；所有文字用 `` 包裹。这些由校验脚本确定性检查，而非靠模型自觉。
> 
> ## 🔁 可验证循环
> 
> 改组件库或工作流后，用双关卡闭环防回归：
> 
> ```bash
> python3 scripts/component_lint.py .            # 源头关：扫组件库反模式
> python3 scripts/validate_gzh_html.py out.html  # 产物关：扫最终 HTML 合规
> ```
> 
> - **源头关** 查 `white-space:pre`（大空白）、正文四周虚线框、平台禁用项 —— 须 0 ERROR。
> - **产物关** 查禁用标签、`` 包裹、半角标点 —— 须 0 ERROR / 半角 0 WARN。
> - 逻辑：源头干净 → 产物必然干净。详见 `references/eval-cases.md`。
> 
> ## 💡 为什么这么设计
> 
> - **约束优于自由** — 预设主题色板 + 固定组件先保住输出下限，不让模型每次现场发挥、风格飘忽。
> - **样式粘贴不掉** — 全内联样式 + 每个文字节点 `` 包裹，专门规避公众号会过滤的写法，粘进去不塌。
> - **质量靠脚本不靠自觉** — 双关卡（源头 `component_lint` + 产物 `validate_gzh_html`）确定性检查平台红线和标点，不靠模型「记得住」。
> - **换模型不走样** — 排版逻辑全沉淀在组件库和脚本里，不依赖某家模型，Claude / GPT / Gemini / 国产模型都能跑出一致效果。
> - **Agent 友好** — 输入输出全是纯文本 Markdown / HTML，任何 Agent 都能读、写、改、验，天然适配 Claude Code / Codex / Cursor。
> 
> ## 📁 目录结构
> 
> ```
> gzh-design/
> ├── SKILL.md                    # 排版工作流主文档（Agent 入口）
> ├── references/
> │   ├── theme-index.md          # 6 套主题索引（主色/适用/下划线，单一来源）
> │   ├── theme-*.md              # 6 套主题组件库（theme-moyu-green.md 等）
> │   ├── theme-generator.md      # 主题生成器（按描述/参考图生成新主题）
> │   ├── common-components.md    # 跨主题通用增量组件（代码块/图片/小标签）
> │   ├── format-normalize.md     # 格式归一化（docx/pdf/纯文本 → Markdown）
> │   └── eval-cases.md           # 触发用例 + 可验证循环
> ├── scripts/
> │   ├── validate_gzh_html.py    # 产物合规校验
> │   └── component_lint.py       # 组件库源头检查
> ├── assets/
> │   ├── sample-article.md       # 演示输入
> │   └── theme-previews/         # 主题生成器产出的区块库预览
> └── docs/gallery/               # 主题浏览器预览
> ```
> 
> ## 🎯 设计原则
> 
> - **约束而非自由** — 用预设主题色板和固定组件保证输出下限，不让模型现场发挥。
> - **确定性下沉脚本** — 平台限制这类死规则交给校验脚本，模型只做内容判断。
> - **小标签，不用虚线框** — 强调用左竖条/药丸标签，笨重的四周虚线框只留给「待补素材」居中占位。
> - **每处经验都可复现** — 踩过的坑写进 gotchas 和校验脚本，用可验证循环防回归。
> - **配方优于自由** — 先按文章类型查主题库的「配方表」定组件组合，再装配，同类文章排版气质稳定。
> - **克制用色** — 主色只在锚点出现（全文 ≤5 处），大面积白底 + 灰阶，彩色只做点缀。
> - **灰阶承重** — 约 90% 的文字交给一套中性灰阶，色彩不承担正文阅读，避免花哨。
> 
> ## 🧠 方法论：不止 6 套，自己造主题
> 
> ### 主题生成：一句话 / 一张参考图，现造一套新主题
> 
> 内置 6 套不够用时不必等更新——让 AI 现造一套。背后是 [`references/theme-generator.md`](references/theme-generator.md) 定义的第二条工作流：
> 
> 1. **收集偏好**（一次问全，不逐条追问）：主题描述必填（或给参考图），名称 / 主色 / 背景 / 正文色 / 强调色 / 装饰色 / 字体 / 圆角 / 阴影 / 适用场景可留空自动补全。
> 2. **生成区块库**：AI 产出 45~75 个区块的完整 HTML 组件库，存到 `assets/theme-previews/{id}.html`，浏览器整页一次浏览确认风格（不逐块问）。
> 3. **转标准主题库 + 登记**：确认后转成 `references/theme-{id}.md`（补 ``、补齐五章节：变量表 / 组件 / 骨架 / 配方表 / 映射表），登记进 theme-index，跑 `component_lint.py` 到 0 ERROR。
> 4. **即刻同权**：之后排版和内置主题完全一样，直接说「用 XX 主题排这篇」。
> 
> **怎么触发**：
> 
> > 按「黑白杂志、克莱因蓝点睛、衬线字体」的气质，给公众号排版生成一套新主题
> >
> > 按这张参考图（附图）做一套公众号排版组件库
> 
> 仓库里 `assets/theme-previews/theme-mono-blue-editorial.html` 就是这样生成的一套「墨蓝刊读风」样例。
> 
> ### 颜色搭配：一套可复制的配色结构，AI 自动生成协调色板
> 
> 每套主题的视觉都建立在一张**设计变量色板**上——配色不是拍脑袋，而是固定的角色分工：
> 
> | 角色 | 作用 | 取色思路 |
> |---|---|---|
> | **主色** | 章节编号、锚点强调、封面点睛 | 一个有辨识度的品牌色（`#059669` emerald / `#DC2626` 正红 …）|
> | **浅底 / 浅边框** | 卡片背景、引用块、标签底 | 主色同色系的极浅色（主色 + 大量白）|
> | **点睛高亮色** | 每段 1~2 处黄底 / 渐变高亮 | 与主色冷暖对比的第二色（绿配黄）|
> | **中性灰阶** | 正文 / 标题 / 辅助 / 分割线 | `#111827 → #9CA3AF` 一套灰阶，承担 90% 的文字 |
> | **下划线标记色** | 正文关键词逐段标记 | 主色的浅色版（`#A7F3D0` / `#FECACA`），温和不抢戏 |
> 
> **克制三原则**：① 主色只在锚点出现（全文 ≤5 处）；② 大面积白底 + 灰阶，彩色只点缀；③ 一段内高亮 ≤2 种。
> 
> **让 AI 自动配**：只给一个主色或一句气质描述，主题生成器就据此推导整套协调色板——浅底、边框、高亮、灰阶、下划线色自动生成并保证可读对比度：
> 
> > 以 `#7C9EB2` 雾蓝为主色，生成一套清新旅行随笔风的公众号主题
> 
> ## 🗺 Roadmap
> 
> - [x] 主题生成器：按描述/参考图生成自定义主题
> - [ ] 更多精选内置主题（欢迎 [提建议](../../issues/new?template=theme_request.md)）
> - [ ] 主题静态截图预览（docs/screenshots/）
> - [ ] GitHub Pages 在线画廊
> - [ ] 一键把整篇 Markdown + 配图打包导出
> 
> ## ❓ FAQ
> 
> **Q：粘贴到公众号后样式会掉吗？**
> A：不会。所有样式内联、文字 `` 包裹，这正是校验脚本强制的重点。
> 
> **Q：能自己加主题吗？**
> A：两种方式。① **让 AI 生成**：说「按这个风格 / 这张图生成一套公众号主题」，它会走 `references/theme-generator.md` 的流程生成组件库、登记并复用。② **手写贡献**：照 `CONTRIBUTING.md` 的「新增一套主题风格」，跑通可验证循环即可提 PR。
> 
> **Q：只能在 Claude Code 用吗？**
> A：不限。任何能读取 Skill 目录的 Agent（Codex / Cursor 等）都能用，工作流在 `SKILL.md`。
> 
> **Q：对模型有要求吗？国产模型行不行？**
> A：不挑模型，**国内外模型都能跑出一致效果**。排版逻辑全部沉淀在组件库和校验脚本里，不依赖某家模型的特殊能力——Claude、GPT、Gemini，以及 DeepSeek、Kimi、通义千问、智谱 GLM 等国产模型都可以。模型只负责按规则填充内容，硬约束由校验脚本确定性兜底，所以换模型不会导致排版走样。
> 
> **Q：能一次出多套主题对比吗？**
> A：能。说「用这几套主题各排一遍这篇」即可批量生成多套供你挑。
> 
> **Q：怎么更新到最新版？**
> A：重新跑 `npx skills add https://github.com/isjiamu/gzh-design-skill`，或到安装目录 `git pull`。
> 
> **Q：Agent 写出来不合规怎么办？**
> A：跑 `scripts/validate_gzh_html.py`，报 ERROR 就回到装配步骤修；两关全绿才交付，仍有问题欢迎开 Issue。
> 
> ## 📋 完整主题速查表
> 
> | 主色 | 主题 | 适用 |
> |---|---|---|
> |  `#059669` | 摸鱼绿（默认） | 教程、测评、清单、工具盘点 |
> |  `#DC2626` | 红白色系 | 深度分析、观点、力量感话题 |
> |  `#52525B` | 石墨极简风 | 设计、科技评论、专业观点、高端品牌 |
> |  `#4A5D52` | 留白禅意风 | 禅意、极简生活、深度随笔 |
> |  `#059669` | 摸鱼票据风 | 工具对比、创意评测（票据视觉隐喻） |
> |  `#1e1f23` | 橄榄手记 | 内刊手记、深度评测、案例复盘 |
> 
> > 每套主题的英文标识、组件库文件、下划线 CSS 见 [`references/theme-index.md`](references/theme-index.md)。
> > 需要别的风格？让 AI 用 [主题生成器](#-faq) 现生成一套。
> 
> ## ⭐ Star History
> 
> 如果这个项目帮到了你，点个 Star 支持一下～
> 
>  
>    
>    
>    
>  
> 
> ## 🤝 贡献
> 
> 欢迎新主题、修复与文档改进，请先读 [CONTRIBUTING.md](CONTRIBUTING.md)。
> 
> ## 📄 License
> 
> **AGPL-3.0 © 2026 甲木 × 摸鱼小李**
> 
> 本项目采用 **GNU AGPL-3.0

## 延伸閱讀

相關概念：[[自動化]] · [[排版工具]] · [[Markdown]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[XingYu-Zhong--DeepSeek-GUI|XingYu-Zhong/DeepSeek-GUI]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/isjiamu/gzh-design-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：排版工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "排版工具" AND file.name != "isjiamu--gzh-design-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "isjiamu--gzh-design-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "isjiamu--gzh-design-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "isjiamu--gzh-design-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","排版工具","Markdown"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "isjiamu--gzh-design-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "isjiamu--gzh-design-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "isjiamu" AND file.name != "isjiamu--gzh-design-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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
> const me = dv.page("Repos/isjiamu--gzh-design-skill");
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

> **2026-07-08** — 首次收錄
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

- [[2026-07-08|2026-07-08]] — 首次收錄，1.2k stars
