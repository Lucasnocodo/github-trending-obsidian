---
repo: jackwener/bilibili-cli
url: https://github.com/jackwener/bilibili-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Bilibili — browse videos, users, search, and feeds from the terminal"
homepage: ""
stars: 490
stars_per_day: 45
forks: 49
open_issues: 1
created: 2026-03-04
pushed_at: 2026-03-14
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "社交媒體工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "讓你透過終端機瀏覽 Bilibili 的影片、用戶和動態。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 75
repo_size_kb: 1108
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:361,2026-03-13:408,2026-03-14:421,2026-03-15:457,2026-03-16:490"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "bilibili-cli"
  - "jackwener/bilibili-cli"
  - "讓你透過終端機瀏覽 Bilibili 的影片、用戶和動態。"
---

# bilibili-cli

**490** stars · **45** stars/天 · 建立 11 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/jackwener--bilibili-cli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 讓你透過終端機瀏覽 Bilibili 的影片、用戶和動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (45 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在終端機上方便操作 Bilibili 的用戶，特別是開發者和數據分析師。
> **一句話重點** 這個專案讓終端機用戶能夠方便地使用 Bilibili，並且提供了結構化的數據輸出，適合與 AI agent 整合。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--bilibili-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社交媒體工具" && p.file.name !== "jackwener--bilibili-cli" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能夠快速獲得 Bilibili 的數據，值得使用。

> [!abstract] 核心創新
> 提供結構化的輸出格式，支持 YAML 和 JSON，方便與 AI agent 整合。

## 專案簡介

bilibili-cli 是一個用於 Bilibili 的命令列介面，讓使用者能夠直接在終端機上瀏覽影片、用戶資料、搜尋和動態更新。使用者可以透過簡單的指令來獲取影片詳細資訊（如 `bili video BV1ABcsztEcY`）、用戶資料（如 `bili user 946974`）以及熱門影片（如 `bili hot`）。這個工具的賣點在於它提供了結構化的輸出格式，支持 YAML 和 JSON，方便與其他工具或 AI agent 整合。技術上，這個專案使用 Python 實作，依賴於 `bilibili-api-python` 和 `aiohttp` 等庫來進行網絡請求和數據處理，這使得它能夠高效地與 Bilibili 的 API 進行交互。

相較於其他類似工具，bilibili-cli 提供了更為豐富的功能，如自動提取瀏覽器的 cookies 進行登錄、音訊提取和分割等，這在其他 CLI 工具中並不常見。使用者可以輕鬆地進行喜愛影片的管理和互動（如點讚、給幣），這些功能在其他 CLI 工具中可能需要額外的步驟來實現。雖然目前專案仍在 alpha 階段，但其活躍的開發和社群支持顯示出未來的潛力。對於需要在終端機上操作 Bilibili 的用戶，這是一個值得考慮的工具，但在生產環境中使用時需謹慎，因為 API 變更可能會影響功能的穩定性。

**技術棧**：`Python 3.10` · `bilibili-api-python` · `aiohttp` · `click` · `rich`

## 重點功能

- 影片查詢 — 使用 `bili video BV1ABcsztEcY` 獲取影片詳細資訊，包括字幕和評論。
- 用戶資料 — 使用 `bili user 946974` 獲取用戶的影片列表和關注者資訊。
- 熱門影片 — 使用 `bili hot` 查詢當前熱門影片，支持分頁查詢。
- 音訊提取 — 使用 `bili audio BV1ABcsztEcY` 下載影片音訊並分割成 WAV 檔案。
- 結構化輸出 — 支持 `--yaml` 和 `--json` 格式的輸出，方便與其他工具整合。

## 快速開始

1. 安裝 bilibili-cli
```bash
pipx install bilibili-cli
```
2. 登錄 Bilibili 帳號
```bash
bili login
```
3. 查詢熱門影片
```bash
bili hot
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 bilibili-cli 並登錄帳號",
  "指令": "bili video BV1ABcsztEcY --subtitle --comments --json",
  "預期輸出": "返回影片的詳細資訊、字幕和評論的 JSON 格式數據"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 490 stars（45/天），forks 49（10.0%），顯示出相對健康的社群參與度。作者 jackwener 過去有開發多個 CLI 工具，這次專案解決了終端機用戶無法方便地使用 Bilibili 的痛點，之前用戶通常需要透過瀏覽器來訪問。這個工具的推出可能受到社群對於 CLI 工具需求的增加影響，並且其功能的多樣性和易用性吸引了不少用戶關注。forks/stars 比率為 10.0%，顯示出有不少用戶在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在終端機上方便操作 Bilibili 的用戶，特別是開發者和數據分析師。

> [!example] 使用場景
> - 後端工程師用它來快速獲取 Bilibili 上的熱門影片列表，因為可以直接在終端機中使用 `bili hot` 指令，節省了在瀏覽器中搜索的時間。
> - 數據分析師用它來提取特定影片的字幕和評論，因為可以使用 `bili video BV1ABcsztEcY --subtitle` 和 `--comments` 指令，方便進行文本分析。
> - 內容創作者用它來管理自己的 Bilibili 動態和喜愛影片，因為可以透過 `bili my-dynamics` 和 `bili favorites` 指令快速查看和操作。

## 架構分析

bilibili-cli 採用 Python 作為主要開發語言，並使用多個庫來處理 HTTP 請求和命令行介面。其架構設計上，CLI 工具的命令和功能被模組化，方便擴展和維護。資料流方面，使用者的請求經由 `bili_cli.cli` 模組處理，並通過 `bilibili-api-python` 庫與 Bilibili 的 API 進行交互。選擇 Python 的好處在於其簡單易用和廣泛的社群支持，但可能在性能上不如某些編譯語言。整體而言，這個工具的設計使得用戶能夠快速獲取所需資訊，但在高併發請求時可能會受到 API 限制的影響。

## 技術深入分析

bilibili-cli 的核心技術機制是基於 Python 的命令行介面，使用 `click` 庫來處理命令行參數和選項。它的資料結構和通訊模式主要依賴於 `bilibili-api-python`，這使得它能夠高效地與 Bilibili 的 API 進行交互。效能上，這個工具能夠快速響應用戶的請求，但在高併發的情況下，可能會受到 Bilibili 的 API 限制影響。設計上，選擇 Python 使得開發和維護變得簡單，但在性能上可能不如其他編譯語言。這個工具的依賴樹相對簡單，主要依賴於幾個流行的 Python 庫，這降低了使用者的學習成本。技術風險方面，未來可能會因為 Bilibili API 的變更而影響功能的穩定性，使用者需定期更新工具以避免錯誤。整合方面，這個工具與主流的 CI/CD 工具鏈相容性良好，能夠輕鬆地融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，安裝過程順暢，使用者可以快速上手。文件目前僅提供英文和中文版本，對於不同語言的使用者友好。

## 優缺點分析

> [!success] 優點
> - 操作簡單，使用者可以透過簡單的指令獲取豐富的資訊。
> - 支持結構化輸出，方便與其他工具或 AI agent 整合。
> - 提供音訊提取功能，對於需要音訊資料的用戶非常實用。

> [!danger] 缺點
> - 目前仍在 alpha 階段，功能和穩定性可能不如成熟工具。
> - 某些功能需要登錄，限制了無法登錄用戶的使用體驗。
> - 在高頻請求時可能會受到 Bilibili 的反爬蟲機制影響。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 某些功能需要登錄才能使用，如喜愛影片和互動操作
> - 在高頻請求時可能會受到 Bilibili 的反爬蟲機制影響

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的 CLI 工具，提供類似的社交媒體互動功能，但不支持 Bilibili 的影音內容。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 針對 Twitter 的 CLI 工具，雖然功能上有相似之處，但專注於推特的社交媒體互動。 |
| [jackwener/discord-cli](https://github.com/jackwener/discord-cli) | Discord 的 CLI 工具，專注於即時通訊和社交互動，與 Bilibili 的影音內容無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的 CLI 工具，提供類似的社交媒體互動功能，但不支持 Bilibili 的影音內容。 | 如果你的需求主要集中在小紅書的內容管理和互動，這個工具會更合適。 | low，因為兩者都使用類似的命令行介面設計。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 針對 Twitter 的 CLI 工具，雖然功能上有相似之處，但專注於推特的社交媒體互動。 | 如果你的主要需求是管理 Twitter 帳號和互動，則這個工具會更合適。 | medium，因為需要適應不同的 API 和命令設計。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **bilibili-cli** | **xiaohongshu-cli** | **twitter-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於小紅書的 CLI 工具，提供類似的社交媒體互動功能，但不支持 Bilibili 的影音內容。 | 針對 Twitter 的 CLI 工具，雖然功能上有相似之處，但專注於推特的社交媒體互動。 |
> | 遷移成本 | - | low，因為兩者都使用類似的命令行介面設計。 | medium，因為需要適應不同的 API 和命令設計。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在小紅書的內容管理和互動，這個工具會更合 | 如果你的主要需求是管理 Twitter 帳號和互動，則這個工 |

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

- **[HIGH]** 在高頻請求時可能會遭遇 Bilibili 的反爬蟲機制，導致請求失敗
  - 解法：減少請求頻率或使用 `--max` 限制返回數量
- [MEDIUM] 某些功能需要登錄才能使用，未登錄用戶無法訪問
  - 解法：使用 `bili login` 指令進行登錄
- [MEDIUM] 音訊提取功能需要額外安裝依賴，未安裝時會報錯
  - 解法：確保安裝 `av` 依賴，使用 `pipx install 'bilibili-cli[audio]'`

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在終端機上管理 Bilibili 帳號的內容創作者 | 非常適合 | 提供了豐富的功能來管理和互動。 |
| 希望快速獲取 Bilibili 上的熱門影片的數據分析師 | 適合 | 能夠快速查詢熱門影片並獲取結構化數據。 |
| 不常使用 Bilibili 的普通用戶 | 不適合 | 對於不熟悉命令行的用戶，使用門檻較高。 |
| 需要在高頻率下進行 Bilibili 數據抓取的開發者 | 普通 | 可能會受到 API 限制影響，需謹慎使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速獲得 Bilibili 的數據，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要通過 API 進行操作，並且不會存取敏感資料。依賴的庫都來自於知名的開源社群，信任度高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jackwener--bilibili-cli");
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
> const me = dv.page("Repos/jackwener--bilibili-cli");
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
| Forks | 49 |
| Open Issues | 1 |
| Issue 解決率 | 75% (3 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/bilibili-cli) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 79 |
> | [@fkysly](https://github.com/fkysly) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和問題回應。
**連結**：[文件](https://github.com/jackwener/bilibili-cli)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-14）
> **活躍天數** 4 天 · **最新 commit** ci: remove deprecated ClawHub publish workflow

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/jackwener/bilibili-cli/issues/5) | 希望能增加获取视频章节信息的功能 `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # bilibili-cli
> 
> [](https://github.com/jackwener/bilibili-cli/actions/workflows/ci.yml)
> [](https://pypi.org/project/bilibili-cli/)
> [](https://pypi.org/project/bilibili-cli/)
> [](./LICENSE)
> 
> A CLI for Bilibili — browse videos, users, favorites from the terminal 📺
> 
> [English](#features) | [中文](#功能特性)
> 
> 
> ## Installation
> 
> ```bash
> 
> ### Manual Install
> 
> ```bash
> mkdir -p .agents/skills
> git clone git@github.com:jackwener/bilibili-cli.git .agents/skills/bilibili-cli
> ```
> 
> Once added, AI agents that support the `.agents/skills/` convention will automatically discover and use bilibili-cli commands.
> 
> 
> ## Usage
> 
> ```bash
> 
> ## Features
> 
> - 🎬 **Video** — details, subtitles, AI summary, comments, related videos
> - 🎵 **Audio** — extract audio and split into ASR-ready WAV segments
> - 👤 **User** — profile, video list, following list
> - 🔍 **Search** — search users or videos by keyword
> - 🔥 **Trending** — hot videos and site-wide ranking
> - 📰 **Feed** — dynamic timeline from your follows
> - 📂 **Favorites** — browse favorite folders, watch-later, and watch history
> - 👍 **Interactions** — like, coin, triple (一键三连)
> - 🔐 **Smart auth** — auto-extracts cookies from Chrome/Firefox, or QR code login
> - 📊 **Structured output** — major query commands support `--yaml` and `--json`
> - 🤖 **Agent-friendly defaults** — non-TTY stdout defaults to YAML; override with `OUTPUT=yaml|json|rich|auto`
> - 📦 **Stable envelope** — see [SCHEMA.md](./SCHEMA.md) for `ok/schema_version/data/error`
> - 🧱 **Normalized payloads** — command-layer output is normalized instead of leaking raw upstream SDK responses
> 
> 
> ## More Projects
> 
> - [xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) — Xiaohongshu (小红书) CLI for notes and account workflows
> - [twitter-cli](https://github.com/jackwener/twitter-cli) — Twitter/X CLI tooling
> - [discord-cli](https://github.com/jackwener/discord-cli) — Discord CLI for local-first chat sync and search
> - [tg-cli](https://github.com/jackwener/tg-cli) — Telegram CLI for local-first sync, search, and export
> 
> 
> # Recommended: uv tool (fast, isolated)
> uv tool install bilibili-cli
> 
> 
> # Or: pipx
> pipx install bilibili-cli
> 
> 
> # If you need audio extraction support
> uv tool install "bilibili-cli[audio]"
> 
> # or
> pipx install "bilibili-cli[audio]"
> ```
> 
> Upgrade to the latest version:
> 
> ```bash
> uv tool upgrade bilibili-cli
> 
> # Or: pipx upgrade bilibili-cli
> ```
> 
> > **Tip:** Upgrade regularly to avoid unexpected errors from outdated API handling.
> 
> Or from source:
> 
> ```bash
> git clone git@github.com:jackwener/bilibili-cli.git
> cd bilibili-cli
> uv sync
> ```
> 
> Run tests in the project environment:
> 
> ```bash
> uv sync --extra dev
> uv run pytest -q
> uv run ruff check .
> uv run python -m mypy bili_cli
> ```
> 
> If the project directory was moved and stale virtualenv wrappers remain, rerun:
> 
> ```bash
> uv sync --extra dev --reinstall
> ```
> 
> 
> # Login & account
> bili status                    # Check login status
> bili status --yaml             # Structured auth status
> bili login                     # QR code login
> bili whoami                    # Detailed profile (level, coins, followers)
> bili whoami --yaml             # Structured profile
> 
> 
> # Videos
> bili video BV1ABcsztEcY                 # Video details
> bili video BV1ABcsztEcY --subtitle      # With subtitles (plain text)
> bili video BV1ABcsztEcY --subtitle-timeline        # With timeline
> bili video BV1ABcsztEcY -st --subtitle-format srt  # Export as SRT
> bili video BV1ABcsztEcY --ai            # AI summary
> bili video BV1ABcsztEcY --comments      # Top comments
> bili video BV1ABcsztEcY --related       # Related videos
> bili video BV1ABcsztEcY --yaml          # Agent-friendly YAML
> bili video BV1ABcsztEcY --json          # Normalized JSON envelope
> bili video BV1ABcsztEcY --subtitle-timeline --comments --json  # Extras in one payload
> 
> 
> # Users
> bili user 946974                        # UP profile
> bili user "影视飓风"                     # Search by name
> bili user-videos 946974 --max 20        # Video list
> 
> 
> # Discovery
> bili hot                                # Trending videos (page 1)
> bili hot --page 2 --max 10              # Page 2, top 10
> bili rank                               # Site-wide ranking (3-day)
> bili rank --day 7 --max 30              # 7-day ranking, top 30
> bili search "关键词"                     # Search users
> bili search "关键词" --type video --max 5 # Search videos (top 5)
> bili search "关键词" --page 2            # Next page
> bili feed                               # Dynamic timeline
> bili feed --offset 1234567890           # Next page via returned cursor
> bili my-dynamics                         # My posted dynamics
> bili dynamic-post "抽个奖，明天开奖"       # Publish text dynamic
> bili dynamic-delete 123456789012345678   # Delete one dynamic
> 
> 
> # Collections
> bili favorites                          # Favorite folders
> bili favorites  --page 2            # Videos in a folder
> bili following                          # Following list
> bili watch-later                        # Watch later
> bili history                            # Watch history
> 
> 
> # Audio extraction
> bili audio BV1ABcsztEcY                 # Download + split into 25s WAV segments
> bili audio BV1ABcsztEcY --segment 60    # 60s per segment
> bili audio BV1ABcsztEcY --no-split      # Full m4a, no splitting
> bili audio BV1ABcsztEcY -o ~/data/      # Custom output directory
> 
> 
> # Interactions
> bili like BV1ABcsztEcY                  # Like
> bili coin BV1ABcsztEcY                  # Give coin
> bili triple BV1ABcsztEcY                # 一键三连 🎉
> bili unfollow 946974                    # Unfollow by UID
> bili like BV1ABcsztEcY --json           # Structured write result
> bili coin BV1ABcsztEcY --yaml           # Structured write result
> ```
> 
> 
> ## Authentication
> 
> bilibili-cli uses a 3-tier authentication strategy:
> 
> 1. **Saved credential** — loads from `~/.bilibili-cli/credential.json`
> 2. **Browser cookies** — auto-extracts from Chrome, Firefox, Edge, or Brave
> 3. **QR code login** — `bili login` displays a QR code in the terminal
> 
> Credentials are validated on use for authenticated commands. Expired cookies are automatically cleared, while transient network validation failures keep local credentials for best-effort fallback.
> `bili status` exits with code `0` only when authenticated; otherwise it exits with `1`.
> 
> Most commands work without login. Subtitles, favorites/following/watch-later/history, feed, my-dynamics, and interactions require authentication. Write actions (like/coin/triple/unfollow/dynamic-post/dynamic-delete) require write-capable credential (`bili_jct`).
> 
> Audio extraction requires the optional `audio` dependency group (`av`).
> 
> 
> ## Structured Output
> 
> All `--json` / `--yaml` output uses the shared envelope from [SCHEMA.md](./SCHEMA.md).
> Major commands now emit normalized payloads instead of raw upstream SDK blobs:
> 
> - `bili video` → `data.video`, `data.subtitle`, `data.ai_summary`, `data.comments`, `data.related`, `data.warnings`
> - `bili hot` / `bili rank` → `data.items`
> - `bili search` → normalized user/video lists
> - `bili like` / `bili coin` / `bili triple` / `bili unfollow` → normalized write-action results
> 
> Structured errors now use more specific codes such as `not_authenticated`, `permission_denied`, `invalid_input`, `network_error`, `upstream_error`, and `not_found`.
> 
> 
> ## Use as AI Agent Skill
> 
> bilibili-cli ships with a [`SKILL.md`](./SKILL.md) that teaches AI agents how to use it.
> 
> 
> ### Agent Output Recommendation
> 
> If an AI agent needs machine-readable output, prefer `--yaml` first:
> 
> - `--yaml` is usually more token-efficient than pretty-printed JSON
> - It is still easy to parse for agents and scripts
> - Keep `--json` for `jq`, strict JSON-only tooling, or exact downstream schemas
> - Non-TTY stdout defaults to YAML automatically
> - Use `OUTPUT=yaml|json|rich|auto` to override the default mode
> 
> Examples:
> 
> ```bash
> bili status --yaml
> bili video BV1ABcsztEcY --yaml
> bili hot --max 5 --yaml
> bili user-videos 946974 --max 3 --yaml
> ```
> 
> For agent usage, also prefer narrower queries (`--max`, `--page`, `--offset`) to avoid wasting context on oversized payl

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[社交媒體]] · [[音訊處理]]

相關專案：[[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[sanbuphy--nanoAgent|sanbuphy/nanoAgent]] · [[steipete--discrawl|steipete/discrawl]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/jackwener/bilibili-cli)

## 相關收錄

> [!note]- 直接競品（同子分類：社交媒體工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社交媒體工具" AND file.name != "jackwener--bilibili-cli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--bilibili-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jackwener--bilibili-cli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "jackwener--bilibili-cli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","社交媒體","音訊處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jackwener--bilibili-cli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jackwener--bilibili-cli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jackwener--bilibili-cli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jackwener" AND file.name != "jackwener--bilibili-cli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jackwener--bilibili-cli");
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
> const me = dv.page("Repos/jackwener--bilibili-cli");
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
> const me = dv.page("Repos/jackwener--bilibili-cli");
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
> const me = dv.page("Repos/jackwener--bilibili-cli");
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
> const me = dv.page("Repos/jackwener--bilibili-cli");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，361 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
