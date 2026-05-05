---
repo: AgriciDaniel/claude-obsidian
url: https://github.com/AgriciDaniel/claude-obsidian
owner: AgriciDaniel
owner_type: User
language: Python
license: MIT
description: "Claude + Obsidian knowledge companion. Persistent, compounding wiki vault based on Karpathy's LLM Wiki pattern. /wiki /save /autoresearch"
homepage: "https://agricidaniel.com/blog/claude-obsidian-ai-second-brain"
stars: 4179
stars_per_day: 155
forks: 471
open_issues: 21
created: 2026-04-07
pushed_at: 2026-04-24
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: "v1.6.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "結合 Claude 與 Obsidian 的知識伴侶，建立持久的 wiki 資料庫，讓知識像利息一樣增長。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 16
repo_size_kb: 33722
readme_length: 9950
bus_factor: 1
last_release_days: 11
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:988,2026-04-14:989,2026-04-15:1184,2026-04-16:1364,2026-04-17:1488,2026-04-18:1696,2026-04-19:1915,2026-04-20:2134,2026-04-21:2308,2026-04-22:2685,2026-04-23:2902,2026-04-24:3114,2026-04-25:3257,2026-04-26:3330,2026-04-27:3415,2026-04-28:3516,2026-04-29:3616,2026-04-30:3707,2026-05-01:3778,2026-05-02:3905,2026-05-03:3981,2026-05-04:4094,2026-05-05:4179"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/claude_code"
  - "topic/claude_code_skill"
  - "topic/knowledge_management"
  - "topic/obsidian"
aliases:
  - "claude-obsidian"
  - "AgriciDaniel/claude-obsidian"
  - "結合 Claude 與 Obsidian 的知識伴侶，建立持久的 wiki 資料庫，讓知識像利息一樣增長。"
---

# claude-obsidian

**4.2k** stars · **155** stars/天 · 建立 27 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.6.0` `easy-install`

`ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain`

> [!summary] 一句話摘要
> 結合 Claude 與 Obsidian 的知識伴侶，建立持久的 wiki 資料庫，讓知識像利息一樣增長。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (155 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 10 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效整合和管理知識的研究人員和開發者。
> **一句話重點** 這個專案的創新在於將 AI 和知識管理結合，讓知識的增長變得像利息一樣自動化。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識管理" && p.file.name !== "AgriciDaniel--claude-obsidian" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到高效的知識管理工具，值得嘗試。

> [!abstract] 核心創新
> DragonScale 記憶擴展提供了一種新的方式來持久化和增長知識庫，透過四種機制來提升資料整合效率。

## 專案簡介

claude-obsidian 是一個結合 Claude 和 Obsidian 的知識管理工具，旨在建立一個持久的 wiki 資料庫。用戶可以通過簡單的命令 `/wiki` 和 `/save` 將資料整合進入這個資料庫，並且每次提問都能從已讀取的資料中獲取答案。這個工具的核心賣點在於其基於 Andrej Karpathy 的 LLM Wiki 模式，支援多代理和無需手動整理的功能，並且提供可選的 DragonScale 記憶擴展，這使得知識的增長和管理變得更加高效。技術上，它使用 Python 和 Shell，並且透過簡單的安裝腳本 `setup-vault.sh` 來快速配置環境，這樣用戶可以在兩分鐘內完成設置。

與其他知識管理工具相比，claude-obsidian 的優勢在於其自動化程度高，並且能夠在多個代理之間共享知識，這在傳統的筆記工具中並不常見。相較於 Notion 和 Roam Research，claude-obsidian 提供了更靈活的資料整合方式，並且不需要依賴雲端服務，這對於隱私和資料安全有更好的保障。使用者在使用過程中可能會遇到一些命令未被自動發現的問題，這是目前社群中熱門的議題之一。整體來看，這個專案在知識管理領域提供了一個創新的解決方案，適合需要高效整合和管理知識的用戶。

**技術棧**：`Python` · `Shell` · `Makefile`

## 重點功能

- 自動化資料整合 — 使用 `/wiki` 和 `/save` 命令自動將資料整合進 wiki。
- DragonScale 記憶擴展 — 提供可選的記憶擴展功能，支援資料的持久化和增長。
- 多代理支援 — 允許多個代理同時訪問和更新知識庫，促進協作。
- 快速安裝 — 透過 `bash bin/setup-vault.sh` 指令在兩分鐘內完成設置。
- 無需手動整理 — 知識自動增長，無需用戶手動分類和整理資料。

## 快速開始

1. 克隆專案作為 vault
```bash
git clone https://github.com/AgriciDaniel/claude-obsidian
```
2. 進入專案資料夾
```bash
cd claude-obsidian
```
3. 執行安裝腳本
```bash
bash bin/setup-vault.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天就累積 4179 stars（155/天），forks 471（11.3%），這顯示出相當高的社群興趣。作者 AgriciDaniel 之前在知識管理和 AI 領域有過多個貢獻，這次專案解決了傳統筆記工具在知識整合和自動化方面的不足，讓用戶能夠更輕鬆地管理和擴展知識庫。近期的推廣活動和社群討論也促進了這個專案的曝光度，特別是在知識工作者和開發者之間。這個工具的設計使其能夠在當前 AI 和知識管理的熱潮中脫穎而出，並且其開源性質吸引了許多開發者的參與。

## 適合誰使用

**目標受眾**：需要高效整合和管理知識的研究人員和開發者。

> [!example] 使用場景
> - 知識工作者用它來自動整合和管理研究資料，因為它能夠快速從多個來源提取信息，節省了手動整理的時間。
> - 開發者用它來建立技術文檔和維護知識庫，因為其自動化的特性能夠減少維護成本，並且支持多代理協作。
> - 學生用它來記錄課堂筆記和學習資料，因為其持久的 wiki 結構能夠幫助他們隨時查閱和擴展知識。

## 架構分析

這個專案採用模組化設計，主要由 Claude 和 Obsidian 組成，Claude 負責處理用戶的請求和資料整合，而 Obsidian 則用於資料的可視化和管理。資料流從用戶輸入命令開始，Claude 解析命令並從資料庫中提取相關信息，然後將結果返回給用戶。選擇這種架構的原因在於能夠充分利用 Claude 的 AI 能力來進行資料整合，而 Obsidian 則提供了靈活的資料視覺化選項。

這樣的設計使得用戶能夠在一個平台上完成所有的知識管理任務，降低了使用的複雜度。擴展性方面，這種模組化設計允許未來添加更多的功能和擴展，而不會影響現有的系統運行。整體來看，這個架構在功能和使用體驗上都取得了良好的平衡。

## 技術深入分析

claude-obsidian 的核心技術機制基於 LLM Wiki 模式，利用 Claude 的 AI 能力來自動整合和管理資料。這個工具的設計使得用戶能夠輕鬆地將資料整合進入 wiki，並且每次提問都能從已讀取的資料中獲取答案。效能方面，雖然在小型資料庫中表現良好，但在處理大型資料庫時可能會出現性能瓶頸，特別是在資料整合過程中。選擇 Python 和 Shell 作為主要技術棧，使得開發和維護變得相對簡單，但也可能導致在某些環境下的兼容性問題。這個專案的依賴樹相對簡單，主要依賴於 Claude 和 Obsidian 的 API，這降低了使用者的學習成本。技術風險方面，隨著資料量的增加，可能會出現性能下降的問題，這需要未來的版本進行優化。整合方面，這個工具能夠與主流的知識管理工具無縫對接，並且在 CI/CD pipeline 中的應用也相對簡單，適合快速迭代的開發環境。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，讓新手能夠快速上手。安裝過程相對順暢，並且有詳細的設定步驟。文件中沒有多語言支持，但英文內容易於理解，適合大多數開發者。整體來說，花 30 分鐘就能順利運行。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，減少手動整理的時間。
> - 支持多代理協作，促進知識共享。
> - 快速安裝和配置，適合快速上手的用戶。

> [!danger] 缺點
> - 目前僅支援 Linux 和 macOS，Windows 用戶需額外配置。
> - 某些命令可能需要手動設定，增加了使用難度。
> - 對於大型資料庫的性能優化尚待加強。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS 系統，Windows 用戶需額外配置。
> - 某些命令在 git clone 後未自動發現，需手動設定。
> - 對於大型資料庫，性能可能會受到影響，特別是在資料整合時。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的知識管理功能，但缺乏自動化整合的能力，適合需要手動操作的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料的可視化展示，而非知識的自動增長，適合需要圖形化界面的用戶。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供基於 GPT-2 的 API 接口，但不具備完整的 wiki 結構和自動化功能，適合開發者進行 API 整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Notion | Notion 提供了強大的可視化和協作功能，但缺乏自動化整合的能力，使用者需要手動整理資料。 | 如果你的團隊需要強大的可視化和協作功能，且不介意手動整理資料，Notion 是更好的選擇。 | medium，因為需要將資料從一個平台轉移到另一個。 |
| Roam Research | Roam Research 提供了類似的雙向連結功能，但不具備自動化的資料整合，使用者仍需手動管理。 | 如果你的團隊重視雙向連結和非線性思維，Roam Research 可能更符合需求。 | medium，因為需要將資料從一個平台轉移到另一個。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-obsidian** | **Notion** | **Roam Research** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Notion 提供了強大的可視化和協作功能，但缺乏自動化整合的能力，使用者需要手動整理資料。 | Roam Research 提供了類似的雙向連結功能，但不具備自動化的資料整合，使用者仍需手動管理。 |
> | 遷移成本 | - | medium，因為需要將資料從一個平台轉移到另一個。 | medium，因為需要將資料從一個平台轉移到另一個。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要強大的可視化和協作功能，且不介意手動整理資料 | 如果你的團隊重視雙向連結和非線性思維，Roam Resear |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些命令在 git clone 後未自動發現，需手動設定。
  - 解法：檢查 README 中的安裝指導，確保所有步驟都已執行。
- **[HIGH]** 在大型資料庫中性能可能下降。
  - 解法：考慮將資料分割成多個小型 vault 以提高性能。
- [MEDIUM] Windows 用戶需額外配置，可能導致安裝困難。
  - 解法：使用 WSL 或在虛擬機中運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化程度高，能夠快速整合和管理知識。 |
| 大型企業的知識管理系統 | 普通 | 在大型資料庫中性能可能下降。 |
| 個人研究者的筆記管理 | 非常適合 | 支持多代理協作，適合個人知識擴展。 |
| 需要強大可視化的團隊協作工具 | 不適合 | 缺乏 Notion 或 Roam Research 的可視化功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高效的知識管理工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料。依賴的庫和 API 也經過審計，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

claude-obsidian 可以與 Obsidian 的核心插件無縫整合，特別是在資料的可視化和管理方面。用戶可以在 Obsidian 中直接使用這個工具進行資料整合，具體做法是透過 `claude plugin install` 指令安裝插件。這個工具也能與主流的 CI/CD 工具如 GitHub Actions 整合，方便在開發過程中自動化知識管理。整合的摩擦點主要在於某些命令需要手動設定，這可能會影響新手的使用體驗。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
| Forks | 471 |
| Open Issues | 21 |
| Issue 解決率 | 16% (4 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-07 |
| 官方網站 | [Link](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) |
| Repo 大小 | 32.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AgriciDaniel/claude-obsidian) |
| Topics | `ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 69
>     "Shell" : 29
>     "Makefile" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AgriciDaniel](https://github.com/AgriciDaniel) | 155 |

**最新版本**：v1.6.0 — v1.6 (2026-04-24)

> [!info]- Release Notes
> > DragonScale is now a four-mechanism, opt-in memory layer for LLM wiki vaults.
> 
> ![DragonScale Memory mechanism overview](https://raw.githubusercontent.com/AgriciDaniel/claude-obsidian/main/wiki/meta/dragonscale-mechanism-overview.png)
> 
> ## TL;DR
> 
> - Shipped: DragonScale now has fold rollups, deterministic page addresses, semantic tiling lint, and boundary-first autoresearch.
> - Gated on: `bash bin/setup-dragonscale.sh`, plus local dependencies per mechanism.
> - Did not ship: fold-of-folds, calibrated tiling thresholds, hosted mode, or multi-vault rollup.
> 
> ## Same-day release sequence
> 
> The plugin version is `1.6.0` and the annotated tag `v1.6.0` points at the release commit on `main`.
> 
> The narrative below includes `1.5.0`, `1.5.1`, and `1.6.0` because 2026-04-24 bundled three local release states into one cycle.
> 
> `1.5.0` was Phase 3.5.
> It hardened the DragonScale base.
> It added the installer, test harness, changelog, Makefile targets, and opt-in wiring for the first three mechanisms.
> It also synced plugin metadata to `1.5.0`.
> 
> `1.5.1` was Phase 3.6.
> It fixed five narrow issues before Phase 4.
> Those fixes covered tiling report path confinement, rollout baseline date, AGENTS wording, `.raw/` manifest wording, and install-guide version drift.
> 
> `1.6.0` was Phase 4.
> It shipped Mechanism 4: boundary-first autoresearch.
> It added `scripts/boundary-score.py`, wired no-topic `/autoresearch` into frontier suggestions, added boundary-score tests, and bumped the DragonScale spec to v0.4.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-24）
> **活躍天數** 1 天 · **最新 commit** docs: fix v1.6.0 release body rendering on GitHub

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/AgriciDaniel/claude-obsidian/issues/2) | Commands (/wiki, /save) not discovered out of box when using | 8 | 2 |
> | [#7](https://github.com/AgriciDaniel/claude-obsidian/issues/7) | SessionStart:resume and PostCompact prompt-type hooks fail w | 1 | 3 |
> | [#33](https://github.com/AgriciDaniel/claude-obsidian/issues/33) | Feature request: incremental ingest with source tracking (av | 0 | 0 |
> | [#32](https://github.com/AgriciDaniel/claude-obsidian/issues/32) | How to change an existing vault into wiki? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-obsidian
> 
>   
> 
> [](https://github.com/AgriciDaniel/claude-obsidian/stargazers)
> [](LICENSE)
> [](https://code.claude.com/docs/en/discover-plugins)
> [](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)
> 
> Claude + Obsidian knowledge companion. A running notetaker that builds and maintains a persistent, compounding wiki vault. Every source you add gets integrated. Every question you ask pulls from everything that has been read. Knowledge compounds like interest.
> 
> Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). **11 skills. Zero manual filing. Multi-agent support. Optional [DragonScale Memory](docs/dragonscale-guide.md) extension** (log folds, deterministic page addresses, semantic tiling lint, boundary-first autoresearch).
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ### Option 1: Clone as vault (recommended: full setup in 2 minutes)
> 
> ```bash
> git clone https://github.com/AgriciDaniel/claude-obsidian
> cd claude-obsidian
> bash bin/setup-vault.sh
> ```
> 
> Open the folder in Obsidian: **Manage Vaults → Open folder as vault → select `claude-obsidian/`**
> 
> Open Claude Code in the same folder. Type `/wiki`.
> 
> > `setup-vault.sh` configures `graph.json` (filter + colors), `app.json` (excludes plugin dirs), and `appearance.json` (enables CSS). Run it once before the first Obsidian open. You get the fully pre-configured graph view, color scheme, and wiki structure out of the box.
> 
> ---
> 
> 
> ### Option 2: Install as Claude Code plugin
> 
> Plugin installation is a two-step process in Claude Code. First add the marketplace catalog, then install the plugin from it.
> 
> ```bash
> 
> # Step 2: install the plugin
> claude plugin install claude-obsidian@claude-obsidian-marketplace
> ```
> 
> In any Claude Code session: `/wiki`. Claude walks you through vault setup.
> 
> To check it worked:
> ```bash
> claude plugin list
> ```
> 
> ---
> 
> 
> ## MCP Setup (Optional)
> 
> MCP lets Claude read and write vault notes directly without copy-paste.
> 
> Option A (REST API based):
> 1. Install the Local REST API plugin in Obsidian
> 2. Copy your API key
> 3. Run:
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "uvx",
>   "args": ["mcp-obsidian"],
>   "env": {
>     "OBSIDIAN_API_KEY": "your-key",
>     "OBSIDIAN_HOST": "127.0.0.1",
>     "OBSIDIAN_PORT": "27124",
>     "NODE_TLS_REJECT_UNAUTHORIZED": "0"
>   }
> }' --scope user
> ```
> 
> Option B (filesystem based, no plugin needed):
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "npx",
>   "args": ["-y", "@bitbonsai/mcpvault@latest", "/path/to/your/vault"]
> }' --scope user
> ```
> 
> ---
> 
> 
> ### Core Plugins (built into Obsidian: no install needed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Bases** | Powers `wiki/meta/dashboard.base`: native database views. Available since Obsidian v1.9.10 (August 2025). **Replaces Dataview for the primary dashboard.** |
> | **Properties** | Visual frontmatter editor |
> | **Backlinks**, **Outline**, **Graph view** | Standard navigation |
> 
> 
> ### Pre-installed Community Plugins (ship with this vault)
> 
> Enable in **Settings → Community Plugins → enable**:
> 
> | Plugin | Purpose | Notes |
> |--------|---------|-------|
> | **Calendar** | Right-sidebar calendar with word count + task dots | Pre-installed |
> | **Thino** | Quick memo capture panel | Pre-installed |
> | **Excalidraw** | Freehand drawing canvas, annotate images | Pre-installed* |
> | **Banners** | Notion-style header image via `banner:` frontmatter | Pre-installed |
> 
> \* Excalidraw `main.js` (8MB) is downloaded automatically by `setup-vault.sh`. It is not tracked in git.
> 
> 
> ### Also install from Community Plugins (not pre-installed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Templater** | Auto-fills frontmatter from `_templates/` |
> | **Obsidian Git** | Auto-commits vault every 15 minutes |
> | **Dataview** *(optional/legacy)* | Only needed for the legacy `wiki/meta/dashboard.md` queries. The primary dashboard now uses Bases. |
> 
> Also install the **[Obsidian Web Clipper](https://obsidian.md/clipper)** browser extension. Sends web pages to `.raw/` in one click.
> 
> ---
> 
> 
> ## CSS Snippets (auto-enabled by setup-vault.sh)
> 
> Three snippets ship with the vault and are enabled automatically:
> 
> | Snippet | Effect |
> |---------|--------|
> | `vault-colors` | Color-codes `wiki/` folders by type in the file explorer (blue = concepts, green = sources, purple = entities) |
> | `ITS-Dataview-Cards` | Turns Dataview `TABLE` queries into visual card grids: use ` ```dataviewjs ` with `.cards` class |
> | `ITS-Image-Adjustments` | Fine-grained image sizing in notes: append `\|100` to any image embed |
> 
> ---
> 
> 
> ### [Youtube Demo](https://www.youtube.com/watch?v=a2hgayvr-H4)
> 
>   
> 
> You drop sources. Claude reads them, extracts entities and concepts, updates cross-references, and files everything into a structured Obsidian vault. The wiki gets richer with every ingest.
> 
> You ask questions. Claude reads the hot cache (recent context), scans the index, drills into relevant pages, and synthesizes an answer. It cites specific wiki pages, not training data.
> 
> You lint. Claude finds orphans, dead links, stale claims, and missing cross-references. Your wiki stays healthy without manual cleanup.
> 
> At the end of every session, Claude updates a hot cache. The next session starts with full recent context, no recap needed.
> 
>   
>   
> 
> ---
> 
> 
> ## What It Does
> 
> ### Option 3: Add to an existing vault
> 
> Copy `WIKI.md` into your vault root. Paste into Claude:
> 
> ```
> Read WIKI.md in this project. Then:
> 1. Check if Obsidian is installed. If not, install it.
> 2. Check if the Local REST API plugin is running on port 27124.
> 3. Configure the MCP server.
> 4. Ask me ONE question: "What is this vault for?"
> Then scaffold the full wiki structure.
> ```
> 
> ---
> 
> 
> ## Why claude-obsidian?
> 
> Most Obsidian AI plugins are chat interfaces - they answer questions about your existing notes. claude-obsidian is a knowledge engine - it creates, organizes, maintains, and evolves your notes autonomously.
> 
> | Capability | claude-obsidian | Smart Connections | Copilot |
> |---|---|---|---|
> | **Auto-organize notes** | Creates entities, concepts, cross-references | No | No |
> | **Contradiction flagging** | `[!contradiction]` callouts with sources | No | No |
> | **Session memory** | Hot cache persists between conversations | No | No |
> | **Vault maintenance** | 8-category lint (orphans, dead links, gaps) | No | No |
> | **Autonomous research** | 3-round web research with gap-filling | No | No |
> | **Multi-model support** | Claude, Gemini, Codex, Cursor, Windsurf | Claude only | Multiple |
> | **Visual canvas** | Via [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) companion | No | No |
> | **Query with citations** | Cites specific wiki pages | Cites similar notes | Cites notes |
> | **Batch ingestion** | Parallel agents for multiple sources | No | No |
> | **Open source** | MIT | MIT | Freemium |
> 
> > **Deep dive:** [I Turned Obsidian Into a Self-Organizing AI Brain](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) - full breakdown with data visualizations, market context, and workflow demos.
> 
> ---
> 
> 
> # Step 1: add the marketplace
> claude plugin marketplace add AgriciDaniel/claude-obsidian
> 
> 
> ## Commands
> 
> | You say | Claude does |
> |---------|------------|
> | `/wiki` | Setup check, scaffold, or continue where you left off |
> | `ingest [file]` | Read source, create 8-15 wiki pages, update index and log |
> | `ingest all of these` | Batch process multiple sources, then cross-reference |
> | `what do you know about X?` | Read index > relevant pages > synthesize answer |
> | `/save` | File the current conversation as a wiki note |
> | `/save [name]` | Save with a specific title (skips the naming question) |
> | `/autoresearch [topic]` | Run the autonomous research loop: search, fetch, synthesize, file |
> | `/canvas` | Open or create the visual canvas, list zones and nodes |
> | `/canvas add image [path]` | Add an image (URL or local path) to the canvas with auto-layout |
> | `/canvas add text [content]` | Add a markdown text card to the canvas 

## 延伸閱讀

相關概念：[[知識管理]] · [[自動化]] · [[多代理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[nashsu--llm_wiki|nashsu/llm_wiki]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/AgriciDaniel/claude-obsidian) · [官方網站](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 相關收錄

> [!note]- 直接競品（同子分類：知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識管理" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "AgriciDaniel--claude-obsidian" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["知識管理","自動化","多代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AgriciDaniel--claude-obsidian" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AgriciDaniel--claude-obsidian" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AgriciDaniel" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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

> **2026-04-14** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 首次收錄，988 stars
