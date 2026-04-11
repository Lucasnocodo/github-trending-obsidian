---
repo: jackwener/xiaohongshu-cli
url: https://github.com/jackwener/xiaohongshu-cli
owner: jackwener
owner_type: User
language: Python
license: N/A
description: "A CLI for Xiaohongshu (小红书) — search, read, interact via reverse-engineered API"
homepage: ""
stars: 1597
stars_per_day: 48
forks: 162
open_issues: 20
created: 2026-03-08
pushed_at: 2026-03-21
first_seen: 2026-03-11
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "社交媒體工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-11
use_case: "提供小紅書的 CLI 工具，讓用戶能夠透過反向工程的 API 進行搜尋、閱讀和互動。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 39
repo_size_kb: 172
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-11"
star_history: "2026-03-11:389,2026-03-13:786,2026-03-13:791,2026-03-14:921,2026-03-14:923,2026-03-15:1080,2026-03-15:1082,2026-03-16:1177,2026-03-18:1268,2026-03-19:1304,2026-03-20:1331,2026-03-21:1343,2026-03-22:1370,2026-03-24:1402,2026-03-25:1418,2026-04-07:1551,2026-04-08:1561,2026-04-10:1580,2026-04-11:1597"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
aliases:
  - "xiaohongshu-cli"
  - "jackwener/xiaohongshu-cli"
  - "提供小紅書的 CLI 工具，讓用戶能夠透過反向工程的 API 進行搜尋、閱讀和互動。"
---

# xiaohongshu-cli

**1.6k** stars · **48** stars/天 · 建立 33 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/jackwener--xiaohongshu-cli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供小紅書的 CLI 工具，讓用戶能夠透過反向工程的 API 進行搜尋、閱讀和互動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (48 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 20 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在小紅書上進行自動化互動的社交媒體經營者或內容創作者。
> **一句話重點** 這個工具不僅提供了小紅書的基本互動功能，還考慮到了用戶的使用便利性和安全性，特別適合需要頻繁互動的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社交媒體工具" && p.file.name !== "jackwener--xiaohongshu-cli" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到便捷的社交媒體管理工具，值得投資。

> [!abstract] 核心創新
> 支持多種登入方式，包括自動提取瀏覽器 cookies 和 QR 碼登入，提升使用便利性。

## 專案簡介

xiaohongshu-cli 是一個用於小紅書的命令列工具，允許用戶透過反向工程的 API 進行搜尋、閱讀和互動。用戶可以使用 `xhs login` 自動提取瀏覽器的 cookies 或使用 QR 碼登入，並透過 `xhs search` 來搜尋特定關鍵字的筆記，支持多種排序和過濾選項。這個工具的賣點在於其強大的社交互動功能，像是追蹤用戶、點讚、評論等，並且提供了結構化的輸出格式（如 YAML 和 JSON），方便用戶進行後續處理。技術上，這個 CLI 使用 Python 開發，依賴於 `httpx` 和 `click` 等庫，並且設計上考慮了反檢測機制，使用高斯抖動來模擬自然瀏覽行為，降低被檢測的風險。

與其他類似工具相比，如 `bilibili-cli` 和 `twitter-cli`，xiaohongshu-cli 提供了更為細緻的社交互動功能，特別是在用戶生成內容的管理上。這使得它在需要頻繁互動的場景下表現優異，但在大規模資料處理時可能會遇到效能瓶頸。社群活躍度中等，開發者對於問題回應速度尚可，但仍有 20 個開放的問題需要解決。整體來看，這是一個適合小型團隊或個人使用的工具，特別是對於需要頻繁與小紅書互動的用戶。

**技術棧**：`Python 3.10` · `httpx` · `click` · `rich`

## 重點功能

- 自動登入 — 支持從瀏覽器提取 cookies 或使用 QR 碼登入，簡化身份驗證過程。
- 搜尋功能 — 使用 `xhs search` 指令搜尋筆記，支持關鍵字、用戶和主題搜尋，並可排序和過濾。
- 社交互動 — 提供點讚、收藏、評論等功能，使用 `xhs like`、`xhs comment` 等指令進行互動。
- 結構化輸出 — 支持 `--yaml` 和 `--json` 輸出格式，方便用戶進行後續處理。
- 反檢測機制 — 使用高斯抖動和自動重試機制，降低被檢測的風險。

## 快速開始

1. 克隆專案
```bash
git clone git@github.com:jackwener/xiaohongshu-cli.git
```
2. 安裝依賴
```bash
uv sync
```
3. 登入小紅書
```bash
xhs login
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 33 天就累積 1597 stars（48/天），forks 162（10.1%），這顯示出穩定的增長。作者 jackwener 過去有開發多個 CLI 工具，這次針對小紅書的需求填補了市場上缺乏的工具。之前的方案多數依賴於官方應用，無法靈活進行自動化操作，這個工具的出現讓用戶能夠更方便地進行內容管理和互動。社群中對於如何處理 captcha 的討論也顯示出用戶對於這個工具的需求和期待。整體來說，這個工具的增長是由於其獨特的功能和用戶需求的驅動。

## 適合誰使用

**目標受眾**：需要在小紅書上進行自動化互動的社交媒體經營者或內容創作者。

> [!example] 使用場景
> - 社交媒體經營者用它來自動化管理小紅書帳號，因為可以快速搜尋和互動，提升內容曝光率。
> - 數據分析師用它來提取小紅書上的熱門話題和趨勢，因為可以輕鬆獲取結構化的數據進行分析。
> - 內容創作者用它來管理自己的筆記和互動，因為能夠快速發布和刪除內容，提升創作效率。

## 架構分析

這個專案採用 Python 開發，主要使用 `httpx` 進行 HTTP 請求，並利用 `click` 提供命令列介面。架構上，所有 API 請求都經過反向工程處理，確保能夠穩定運行。資料流方面，使用者的請求首先經過身份驗證，然後發送到小紅書的 API，並根據返回的數據進行處理。選擇 Python 作為開發語言，因為其生態系統豐富且易於快速開發，但也可能導致在高並發時的效能瓶頸。整體架構設計考量了反檢測機制，使用高斯抖動來模擬自然行為，降低被檢測的風險，但這也增加了開發的複雜度。

## 技術深入分析

xiaohongshu-cli 的核心技術機制在於其反向工程的 API 設計，使用 `httpx` 進行非同步請求，並利用 `click` 提供直觀的命令列介面。這使得用戶可以輕鬆地進行各種操作，如搜尋、閱讀和互動。效能上，該工具在處理小規模請求時表現良好，但在高頻率的互動下可能會遇到瓶頸，特別是在 API 限制和 captcha 驗證的情況下。設計上，選擇 Python 是因為其開發效率高，但在高並發的場景下，可能需要考慮使用更高效的語言或框架。技術風險方面，API 的穩定性和未來的變更可能會影響工具的持續運行，特別是對於依賴於小紅書的 API 的功能。整合方面，該工具可以與現有的 CI/CD 流程結合，但需要額外的配置來處理身份驗證和 API 請求的安全性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝和使用說明，包含範例指令。安裝過程相對順暢，但在某些環境下可能會遇到 captcha 問題。文件目前僅提供英文，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 功能全面，支持多種社交互動操作，適合小紅書的使用場景。
> - 結構化輸出格式，方便用戶進行數據處理和分析。
> - 反檢測機制設計良好，降低被檢測的風險。

> [!danger] 缺點
> - 在某些環境下可能會遇到 captcha 驗證問題，影響使用體驗。
> - 對於大量資料的操作可能會遇到效能瓶頸。
> - 需要一定的技術背景才能有效使用 CLI 工具。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 在某些環境下可能會遇到 captcha 驗證問題，需手動處理。
> - 對於大量資料的操作可能會遇到效能瓶頸，特別是在高頻率互動時。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | 專注於 Bilibili 的視頻和用戶管理，功能上更偏向於視頻內容，而非社交互動。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 針對 Twitter 的時間線和書籤管理，適合需要快速發布和互動的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據提取和分析，使用 Python 開發，但不支持社交互動功能。 | 如果你的需求主要是數據提取而非社交互動，這是更合適的選擇。 | medium，因為需要重新適應不同的 API 和功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Go 語言實現，專注於高效的資料同步，性能優於 Python，但功能較為單一。 | 如果你的團隊已經在使用 Go 並需要高效能的資料處理，這是更好的選擇。 | high，因為需要重寫大部分的操作邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaohongshu-cli** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據提取和分析，使用 Python 開發，但不支持社交互動功能。 | 使用 Go 語言實現，專注於高效的資料同步，性能優於 Python，但功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的 API 和功能。 | high，因為需要重寫大部分的操作邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據提取而非社交互動，這是更合適的選擇。 | 如果你的團隊已經在使用 Go 並需要高效能的資料處理，這是更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下可能會遇到 captcha 驗證問題，導致無法正常使用。
  - 解法：手動處理 captcha，或降低請求頻率。
- [MEDIUM] Windows 環境下可能出現 Unicode 編碼錯誤，導致崩潰。
  - 解法：使用支持 UTF-8 的終端或調整編碼設置。
- **[HIGH]** API 變更可能導致某些功能失效，特別是對於依賴於特定端點的操作。
  - 解法：定期檢查更新，並保持工具版本最新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的社交媒體管理 | 非常適合 | 提供全面的社交互動功能，適合日常管理。 |
| 個人內容創作者 | 適合 | 能夠快速發布和管理內容，提升創作效率。 |
| 大型企業的社交媒體分析 | 普通 | 雖然功能強大，但在高頻率互動下可能會遇到效能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到便捷的社交媒體管理工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要存取用戶的 cookies 和基本資料，依賴鏈中無已知的安全風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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
| Forks | 162 |
| Open Issues | 20 |
| Issue 解決率 | 39% (13 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 172 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/xiaohongshu-cli) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 83 |
> | [@Huanshere](https://github.com/Huanshere) | 4 |
> | [@sjhddh](https://github.com/sjhddh) | 1 |
> | [@KangbingZhao](https://github.com/KangbingZhao) | 1 |
> | [@AlanSmith111](https://github.com/AlanSmith111) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度尚可。
**連結**：[文件](https://github.com/jackwener/xiaohongshu-cli)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-13 ~ 2026-03-21）
> **活躍天數** 4 天 · **最新 commit** feat: parse hashtags from body and support multiple --topic flags (#28)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#45](https://github.com/jackwener/xiaohongshu-cli/issues/45) | 请问在服务器环境部署的项目如何解决captcha问题？ | 1 | 0 |
> | [#43](https://github.com/jackwener/xiaohongshu-cli/issues/43) | xhs login --qrcode 在 Windows GBK 终端崩溃（UnicodeEncodeError: em | 0 | 1 |
> | [#42](https://github.com/jackwener/xiaohongshu-cli/issues/42) | Chrome 127+ App-Bound Encryption 导致 xhs login Cookie 提取失败，且错 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # xiaohongshu-cli
> 
> [](https://github.com/jackwener/xiaohongshu-cli/actions/workflows/ci.yml)
> [](https://pypi.org/project/xiaohongshu-cli/)
> [](https://pypi.org/project/xiaohongshu-cli/)
> 
> A CLI for Xiaohongshu (小红书) — search, read, interact, and post via reverse-engineered API 📕
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
> git clone git@github.com:jackwener/xiaohongshu-cli.git .agents/skills/xiaohongshu-cli
> ```
> 
> 
> # Install dependencies
> uv sync
> 
> 
> ## Usage
> 
> ```bash
> 
> ## Features
> 
> - 🔐 **Auth** — auto-extract browser cookies, QR code login, status check, whoami
> - 🔍 **Search** — notes by keyword, user search, topic search
> - 📖 **Reading** — note detail, comments, sub-comments, user profiles
> - 🔢 **Short-index navigation** — open recent list results with `xhs read 1` or `xhs comments 1`
> - 📰 **Feed** — recommendation feed, hot/trending by category
> - 👥 **Social** — follow/unfollow, favorites
> - 👍 **Interactions** — like, favorite, comment, reply, delete
> - ✍️ **Creator** — post image notes, my-notes list, delete
> - 🔔 **Notifications** — unread count, mentions, likes, new followers
> - 🛡️ **Anti-detection** — consistent macOS Chrome fingerprint, `sec-ch-ua` alignment, session-stable browser identity, Gaussian jitter, captcha cooldown, exponential backoff
> - 📊 **Structured output** — commands support `--yaml` and `--json`; non-TTY stdout defaults to YAML
> - 📦 **Stable envelope** — see [SCHEMA.md](./SCHEMA.md) for `ok/schema_version/data/error`
> 
> > **AI Agent Tip:** Prefer `--yaml` for structured output unless strict JSON is required. Non-TTY stdout defaults to YAML automatically.
> 
> 
> ## More Tools
> 
> - [bilibili-cli](https://github.com/jackwener/bilibili-cli) — Bilibili CLI for videos, users, search, and feeds
> - [twitter-cli](https://github.com/jackwener/twitter-cli) — Twitter/X CLI for timelines, bookmarks, and posting
> - [discord-cli](https://github.com/jackwener/discord-cli) — Discord CLI for local-first sync, search, and export
> - [tg-cli](https://github.com/jackwener/tg-cli) — Telegram CLI for local-first sync, search, and export
> 
> 
> # Recommended: uv tool (fast, isolated)
> uv tool install xiaohongshu-cli
> 
> 
> # Or: pipx
> pipx install xiaohongshu-cli
> ```
> 
> Upgrade to the latest version:
> 
> ```bash
> uv tool upgrade xiaohongshu-cli
> 
> # Or: pipx upgrade xiaohongshu-cli
> ```
> 
> > **Tip:** Upgrade regularly to avoid unexpected errors from outdated API handling.
> 
> From source:
> 
> ```bash
> git clone git@github.com:jackwener/xiaohongshu-cli.git
> cd xiaohongshu-cli
> uv sync
> ```
> 
> 
> # ─── Auth ─────────────────────────────────────────
> xhs login                             # Extract cookies from browser
> xhs login --qrcode                    # Browser-assisted QR login, scan in terminal
> xhs status                            # Check login status
> xhs whoami                            # Detailed profile (fans, likes, etc)
> xhs whoami --json                     # Structured JSON envelope
> xhs logout                            # Clear saved cookies
> 
> 
> # ─── Search ───────────────────────────────────────
> xhs search "美食"                      # Search notes
> xhs search "旅行" --sort popular       # Sort: general, popular, latest
> xhs search "穿搭" --type video         # Filter: all, video, image
> xhs search "AI" --page 2              # Pagination
> xhs search-user "用户名"               # Search users
> xhs topics "美食"                      # Search hashtags/topics
> 
> 
> # ─── Reading ──────────────────────────────────────
> xhs read 1                             # Read the 1st result from the last list command
> xhs read                      # Read a note (API only)
> xhs read "https://www.xiaohongshu.com/explore/xxx?xsec_token=yyy"  # Read by URL (uses URL token)
> xhs comments 1                         # Read comments for the 1st result from the last list command
> xhs comments ""                   # View comments — paste URL to cache/reuse xsec_token
> xhs comments "" --all             # Fetch ALL comments (auto-paginate all pages)
> xhs comments "" --all --json      # All comments as JSON
> xhs comments  --xsec-token T  # Use note_id + explicit xsec_token
> xhs comments                  # Reuse cached token if available
> xhs sub-comments     # View replies to a comment
> xhs user                      # User profile
> xhs user-posts               # User's published notes
> xhs user-posts  --cursor X   # Paginate with cursor
> 
> 
> # ─── Feed & Discovery ────────────────────────────
> xhs feed                              # Recommendation feed
> xhs hot                               # Hot notes (default: food)
> xhs hot -c fashion                    # Categories: fashion, food, cosmetics,
>                                       #   movie, career, love, home, gaming,
>                                       #   travel, fitness
> 
> 
> # Short index works after list commands such as search/feed/hot/user-posts/favorites/my-notes
> xhs search "黑丝"
> xhs read 1
> xhs comments 1
> xhs like 1
> xhs favorite 1
> 
> 
> # ─── Social ───────────────────────────────────────
> xhs favorites                          # My bookmarked notes (current user)
> xhs favorites                 # Other user's bookmarked notes
> xhs likes                             # My liked notes (current user)
> xhs likes                    # Other user's liked notes
> xhs follow                    # Follow a user
> xhs unfollow                  # Unfollow a user
> 
> 
> # ─── Interactions ─────────────────────────────────
> xhs like 1                             # Like the 1st result from the latest note listing
> xhs like                      # Like a note
> xhs like  --undo             # Unlike
> xhs favorite 1                         # Favorite the 1st result from the latest note listing
> xhs favorite                  # Favorite (bookmark)
> xhs unfavorite 1                       # Unfavorite the 1st result from the latest note listing
> xhs unfavorite                # Unfavorite
> xhs comment 1 -c "好赞！"              # Comment on the 1st result from the latest note listing
> xhs comment  -c "好赞！"     # Post comment
> xhs reply 1 --comment-id X -c "回复"   # Reply on the 1st result from the latest note listing
> xhs reply  --comment-id X -c "回复"  # Reply to comment
> xhs delete-comment   # Delete own comment
> 
> 
> # ─── Creator ─────────────────────────────────────
> xhs my-notes                           # List own notes (v2 creator endpoint)
> xhs my-notes --page 1                 # Next page
> xhs post --title "标题" --body "正文" --images img.jpg  # Post note
> xhs delete                    # Delete note
> xhs delete  -y               # Skip confirmation
> 
> 
> # ─── Notifications ────────────────────────────────
> xhs unread                             # Unread counts (likes, mentions, follows)
> xhs notifications                      # 评论和@ notifications
> xhs notifications --type likes        # 赞和收藏 notifications
> xhs notifications --type connections   # 新增关注 notifications
> 
> ```
> 
> 
> ## Authentication
> 
> xiaohongshu-cli supports multiple authentication methods:
> 
> 1. **Saved cookies** — loads from `~/.xiaohongshu-cli/cookies.json`
> 2. **Browser cookies** — auto-detects installed browsers and extracts cookies (supports Chrome, Arc, Edge, Firefox, Safari, Brave, Chromium, Opera, Vivaldi, and more)
> 3. **QR code login** — browser-assisted login with terminal QR output (`xhs login --qrcode`)
> 
> `xhs login` automatically tries all installed browsers and uses the first one with valid cookies.
> Use `--cookie-source ` to specify a browser explicitly, or `--qrcode` for browser-assisted QR login.
> Other authenticated commands automatically retry once with fresh browser cookies when the saved session has expired.
> 
> 
> ### Cookie TTL
> 
> Saved cookies are valid for **7 days** by default. After that, the client automatically attempts to refresh from the browser. If browser extraction fails, the existing cookies are used with a warning.
> 
> 
> ### Short-Index Navigation
> 
> After any listing command such as `search`, `feed`, `hot`, `user-posts`, `favorites`, or `my-notes`, the CLI stores the latest ordered note list in `~/.xiaohongshu-cli/index_cache.jso

## 延伸閱讀

相關概念：[[自動化測試]] · [[CLI/TUI]] · [[社交媒體]]

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[steipete--discrawl|steipete/discrawl]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]]

[GitHub](https://github.com/jackwener/xiaohongshu-cli)

## 相關收錄

> [!note]- 直接競品（同子分類：社交媒體工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社交媒體工具" AND file.name != "jackwener--xiaohongshu-cli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--xiaohongshu-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jackwener--xiaohongshu-cli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "jackwener--xiaohongshu-cli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CLI/TUI","社交媒體"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jackwener--xiaohongshu-cli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jackwener--xiaohongshu-cli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jackwener" AND file.name != "jackwener--xiaohongshu-cli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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
> const me = dv.page("Repos/jackwener--xiaohongshu-cli");
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

> **2026-03-11** — 首次收錄
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

- [[2026-03-15|2026-03-15]] — 再次上榜，1.1k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，921 stars
- [[2026-03-13|2026-03-13]] — 再次上榜，786 stars
- [[2026-03-11|2026-03-11]] — 首次收錄，389 stars
