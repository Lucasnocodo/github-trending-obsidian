---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1855
stars_per_day: 206
forks: 157
open_issues: 7
created: 2026-03-05
pushed_at: 2026-03-14
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "社群媒體工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "在終端機中讀取 Twitter/X 的動態、書籤和用戶時間線。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "low"
issue_close_rate: 59
repo_size_kb: 541
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1703,2026-03-14:1754,2026-03-15:1855"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "twitter-cli"
  - "jackwener/twitter-cli"
  - "在終端機中讀取 Twitter/X 的動態、書籤和用戶時間線。"
---

# twitter-cli

**1.9k** stars · **206** stars/天 · 建立 9 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/jackwener--twitter-cli");
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
> 在終端機中讀取 Twitter/X 的動態、書籤和用戶時間線。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (206 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 希望在終端機中高效管理 Twitter 帳號的開發者和社群經理。
> **一句話重點** 這個工具讓 Twitter 的使用變得更加靈活，特別是對於終端機愛好者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--twitter-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社群媒體工具" && p.file.name !== "jackwener--twitter-cli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 社群媒體工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、1 小時整合，能夠快速訪問 Twitter 資料，值得一試。

> [!abstract] 核心創新
> 無需 API 金鑰即可訪問 Twitter 的 CLI 工具。

## 專案簡介

這個 CLI 工具讓使用者能夠在終端機中直接訪問 Twitter/X 的各種功能，包括讀取時間線、書籤和用戶資料，而不需要 API 金鑰。用戶可以透過簡單的指令如 `twitter feed` 來獲取動態，並且可以使用 `--full-text` 參數來顯示完整的推文內容。這個工具的賣點在於其無需 API 金鑰的設計，利用瀏覽器的 cookies 進行身份驗證，這樣的設計使得使用者能夠更方便地訪問 Twitter 的資料。技術上，這個專案使用 Python 實作，依賴於多個庫如 `click` 和 `rich` 來處理命令行介面和輸出格式。

相較於其他類似工具如 `tweepy`，這個工具不需要繁瑣的 API 設定，適合那些希望快速訪問 Twitter 資料的開發者。雖然功能強大，但目前仍處於 alpha 階段，可能會遇到一些穩定性問題。使用者在使用時需注意，這個工具對於高頻請求有一定的限制，建議使用代理來減少被封鎖的風險。整體來看，這是一個適合個人開發者和小型團隊使用的工具，未來可能會加入更多功能以擴展其應用場景。

**技術棧**：`Python 3.10` · `click` · `rich`

## 重點功能

- 時間線讀取 — 使用 `twitter feed` 指令獲取 `for-you` 和 `following` 動態。
- 書籤管理 — 使用 `twitter bookmarks` 指令列出保存的推文，並支持 `--full-text` 顯示完整內容。
- 推文搜尋 — 使用 `twitter search` 指令按關鍵字搜尋推文，並可指定篩選條件如時間和語言。
- 推文詳細資訊 — 使用 `twitter tweet <tweet_id>` 指令查看推文及其回覆，支持 `--full-text` 顯示完整內容。
- 用戶資料查詢 — 使用 `twitter user <username>` 指令獲取用戶資料、推文和喜歡的推文。

## 快速開始

1. 安裝工具
```bash
pipx install twitter-cli
```
2. 獲取動態
```bash
twitter feed
```
3. 搜尋推文
```bash
twitter search 'AI agent' --max 50
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 twitter-cli",
  "twitter feed --max 50 --full-text",
  "# 預期輸出：顯示最多 50 條完整的推文內容"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1855 stars（206/天），forks 157（8.5%），顯示出不錯的增長潛力。這個專案的作者 jackwener 之前有開發過其他 CLI 工具，這次專注於 Twitter 的需求，解決了使用者在沒有 API 金鑰的情況下無法輕鬆訪問 Twitter 的痛點。雖然目前還沒有明顯的觸發事件，但社群對於 CLI 工具的需求持續增長，這使得這個工具的出現恰逢其時。forks/stars 比率為 8.5%，顯示出有相當比例的用戶對此工具進行了實際修改或使用。

## 適合誰使用

**目標受眾**：希望在終端機中高效管理 Twitter 帳號的開發者和社群經理。

> [!example] 使用場景
> - 後端工程師用它來在終端機中快速檢索 Twitter 動態，因為不需要 API 金鑰，能夠節省設定時間。
> - 數據分析師用它來抓取特定主題的推文並導出為 JSON 格式，因為可以輕鬆整合到數據處理流程中。
> - 社群經理用它來管理 Twitter 帳號，包括發佈推文和查看書籤，因為可以在終端機中進行所有操作，提升工作效率。

## 架構分析

這個專案採用標準的 CLI 架構，使用 Python 的 click 庫來處理命令行參數和輸出。資料流上，工具通過瀏覽器 cookies 進行身份驗證，這樣的設計使得使用者能夠在不需要 API 金鑰的情況下訪問 Twitter 資料。選擇使用 cookies 而非 API 金鑰的好處在於簡化了使用流程，但可能會面臨安全性和穩定性挑戰。這個工具的擴展性主要依賴於 Python 的生態系統，未來可以透過增加更多功能來提升其實用性。

## 技術深入分析

這個 CLI 工具的核心技術在於使用 Python 的 click 庫來處理命令行介面，並利用瀏覽器 cookies 進行身份驗證，這樣的設計使得使用者能夠在不需要 API 金鑰的情況下訪問 Twitter 的資料。工具的效能取決於使用者的網路環境和 Twitter 的 API 響應速度，通常在正常情況下能夠快速獲取資料，但在高頻請求時可能會遇到 IP 被封鎖的風險。選擇 Python 作為開發語言的好處在於其生態系統豐富，能夠快速整合各種庫來擴展功能，但也可能帶來較大的依賴樹。技術風險方面，依賴於瀏覽器 cookies 進行身份驗證可能會在未來的 Twitter 政策變動中面臨挑戰，此外，對外部 API 的依賴程度也需持續關注。整合方面，這個工具可以輕鬆地與其他 Python 工具鏈進行整合，並且支持多種輸出格式，方便用於自動化流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，包含範例指令。安裝過程相對順暢，使用 pipx 安裝不會遇到太多問題。文件中有針對常見問題的解決方案，對於新手來說，能夠在 30 分鐘內上手。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，簡化使用流程。
> - 支持多種輸出格式，方便整合到其他工具中。
> - 提供豐富的功能，包括推文管理和用戶資料查詢。

> [!danger] 缺點
> - 目前仍在 alpha 階段，可能存在穩定性問題。
> - 對於高頻請求有一定的限制，需注意使用頻率。
> - 依賴瀏覽器 cookies，可能會面臨安全性風險。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要使用瀏覽器 cookies 進行身份驗證
> - 在高頻請求下可能會遇到 IP 被封鎖的風險

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [tweepy/tweepy](https://github.com/tweepy/tweepy) | tweepy 需要 API 金鑰進行身份驗證，適合需要完整 API 功能的開發者，但設定較為繁瑣。 |
| [benpoulton/tweet-cli](https://github.com/benpoulton/tweet-cli) | tweet-cli 提供類似功能，但主要集中於推文發佈，缺乏書籤和用戶資料管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [tweepy/tweepy](https://github.com/tweepy/tweepy) | tweepy 使用 Twitter API 進行身份驗證，提供完整的 API 功能，適合需要深入整合的開發者。 | 如果你的專案需要完整的 API 功能和更高的自定義能力，tweepy 是更好的選擇。 | medium，因為需要重新設計身份驗證和 API 請求邏輯。 |
| [benpoulton/tweet-cli](https://github.com/benpoulton/tweet-cli) | tweet-cli 專注於推文發佈，功能較為單一，適合只需要發佈推文的用戶。 | 如果你的需求僅限於發佈推文，tweet-cli 可能會更簡單易用。 | low，因為功能相似，轉換成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **twitter-cli** | **tweepy** | **tweet-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | tweepy 使用 Twitter API 進行身份驗證，提供完整的 API 功能，適合需要深入整合的開發者。 | tweet-cli 專注於推文發佈，功能較為單一，適合只需要發佈推文的用戶。 |
> | 遷移成本 | - | medium，因為需要重新設計身份驗證和 API 請求邏輯。 | low，因為功能相似，轉換成本不高。 |
> | 適用場景 | 主要場景 | 如果你的專案需要完整的 API 功能和更高的自定義能力，tw | 如果你的需求僅限於發佈推文，tweet-cli 可能會更簡單 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用時可能會遇到 cookie 過期問題，導致身份驗證失敗
  - 解法：重新登入 Twitter 並重試
- [MEDIUM] 高頻請求可能導致 IP 被封鎖
  - 解法：使用代理來降低風險
- [MEDIUM] 某些指令在特定情況下可能無法正常工作
  - 解法：檢查網路連接和 Twitter 的 API 狀態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的社群媒體管理 | 非常適合 | 提供全面的推文管理和用戶查詢功能，適合快速操作。 |
| 大型企業的數據分析需求 | 普通 | 雖然功能強大，但在高頻請求下可能不夠穩定。 |
| 個人開發者的快速原型開發 | 非常適合 | 無需 API 金鑰，快速上手，適合快速驗證想法。 |
| 需要高頻率數據抓取的專案 | 不適合 | 高頻請求可能導致 IP 被封鎖，影響穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，能夠快速訪問 Twitter 資料，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要使用瀏覽器 cookies 進行身份驗證，可能會存取用戶的敏感資料。依賴於外部 API，需注意安全性和穩定性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jackwener--twitter-cli");
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
> const me = dv.page("Repos/jackwener--twitter-cli");
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
| Forks | 157 |
| Open Issues | 7 |
| Issue 解決率 | 59% (10 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 541 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/twitter-cli) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 110 |
> | [@Pleasurecruise](https://github.com/Pleasurecruise) | 2 |
> | [@y0u-0](https://github.com/y0u-0) | 1 |
> | [@JackDKobe](https://github.com/JackDKobe) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放問題解決率約 59%。
**連結**：[文件](https://github.com/jackwener/twitter-cli)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-14 ~ 2026-03-14）
> **活躍天數** 1 天 · **最新 commit** build: bump twitter-cli version to 0.8.3 in uv.lock

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/jackwener/twitter-cli/issues/21) | Feature request: support official Twitter API v2 as an auth  `enhancement` `low priority` | 0 | 0 |
> | [#14](https://github.com/jackwener/twitter-cli/issues/14) | Security concerns over code execution `low priority` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # twitter-cli
> 
> [](https://github.com/jackwener/twitter-cli/actions/workflows/ci.yml)
> [](https://pypi.org/project/twitter-cli/)
> [](https://pypi.org/project/twitter-cli/)
> 
> A terminal-first CLI for Twitter/X: read timelines, bookmarks, and user profiles without API keys.
> 
> 
> ### Installation
> 
> ```bash
> 
> ### Quick Start
> 
> ```bash
> 
> # Install dev dependencies
> uv sync --extra dev
> 
> 
> ### Usage
> 
> ```bash
> 
> ### Features
> 
> **Read:**
> - Timeline: fetch `for-you` and `following` feeds
> - Bookmarks: list saved tweets from your account
> - Search: find tweets by keyword with Top/Latest/Photos/Videos tabs
> - Tweet detail: view a tweet and its replies; use `show ` to open tweet #N from the last list output
> - Article: fetch a Twitter Article and export it as Markdown
> - List timeline: fetch tweets from a Twitter List
> - User lookup: fetch user profile, tweets, likes, followers, and following
> - `--full-text`: disable tweet text truncation in rich table output
> - Structured output: export any data as YAML or JSON for scripting and AI agent integration
> - Optional scoring filter: rank tweets by engagement weights
> - Structured output contract: [SCHEMA.md](./SCHEMA.md)
> 
> > **AI Agent Tip:** Prefer `--yaml` for structured output unless a strict JSON parser is required. Non-TTY stdout defaults to YAML automatically. Use `--max` to limit results.
> 
> **Write:**
> - Post: create new tweets and replies, with optional image attachments (up to 4)
> - Quote: quote-tweet with optional images
> - Delete: remove your own tweets
> - Like / Unlike: manage tweet likes
> - Retweet / Unretweet: manage retweets
> - Bookmark: bookmark/unbookmark (`favorite/unfavorite` kept as compatibility aliases)
> - Write commands also support explicit `--json` / `--yaml` output now
> 
> **Auth & Anti-Detection:**
> - Cookie auth: use browser cookies or environment variables
> - Full cookie forwarding: extracts ALL browser cookies for richer browser context
> - TLS fingerprint impersonation: `curl_cffi` with dynamic Chrome version matching
> - `x-client-transaction-id` header generation
> - Request timing jitter to avoid pattern detection
> - Write operation delays (1.5–4s random) to mitigate rate limits
> - Proxy support via `TWITTER_PROXY` environment variable
> 
> 
> ### Configuration
> 
> Create `config.yaml` in your working directory:
> 
> ```yaml
> fetch:
>   count: 50
> 
> filter:
>   mode: "topN"          # "topN" | "score" | "all"
>   topN: 20
>   minScore: 50
>   lang: []
>   excludeRetweets: false
>   weights:
>     likes: 1.0
>     retweets: 3.0
>     replies: 2.0
>     bookmarks: 5.0
>     views_log: 0.5
> 
> rateLimit:
>   requestDelay: 2.5     # base delay between requests (randomized ×0.7–1.5)
>   maxRetries: 3          # retry count on rate limit (429)
>   retryBaseDelay: 5.0    # base delay for exponential backoff
>   maxCount: 200          # hard cap on fetched items
> ```
> 
> Fetch behavior:
> 
> - `fetch.count` is the default item count for read commands when `--max` is omitted
> - Rich table output truncates long tweet text by default; use `--full-text` to show full body text in list views
> 
> Filter behavior:
> 
> - Default behavior: no ranking filter unless `--filter` is passed
> - With `--filter`: tweets are scored/sorted using `config.filter`
> 
> Scoring formula:
> 
> ```text
> score = likes_w * likes
>       + retweets_w * retweets
>       + replies_w * replies
>       + bookmarks_w * bookmarks
>       + views_log_w * log10(max(views, 1))
> ```
> 
> Mode behavior:
> 
> - `mode: "topN"` keeps the highest `topN` tweets by score
> - `mode: "score"` keeps tweets where `score >= minScore`
> - `mode: "all"` returns all tweets after sorting by score
> 
> 
> ## More Tools
> 
> - [xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) — Xiaohongshu (小红书) CLI for notes and account workflows
> - [bilibili-cli](https://github.com/jackwener/bilibili-cli) — Bilibili CLI for videos, users, search, and feeds
> - [discord-cli](https://github.com/jackwener/discord-cli) — Discord CLI for local-first sync, search, and export
> - [tg-cli](https://github.com/jackwener/tg-cli) — Telegram CLI for local-first sync, search, and export
> 
> [English](#english) | [中文](#中文)
> 
> 
> ## English
> 
> 
> # Recommended: uv tool (fast, isolated)
> uv tool install twitter-cli
> 
> 
> # Alternative: pipx
> pipx install twitter-cli
> ```
> 
> Upgrade to the latest version:
> 
> ```bash
> uv tool upgrade twitter-cli
> 
> # Or: pipx upgrade twitter-cli
> ```
> 
> > **Tip:** Upgrade regularly to avoid unexpected errors from outdated API handling.
> 
> Install from source:
> 
> ```bash
> git clone git@github.com:jackwener/twitter-cli.git
> cd twitter-cli
> uv sync
> ```
> 
> 
> # Fetch home timeline (For You)
> twitter feed
> 
> 
> # Fetch Following timeline
> twitter feed -t following
> 
> 
> # Enable ranking filter explicitly
> twitter feed --filter
> ```
> 
> 
> # Feed
> twitter feed --max 50
> twitter feed --full-text
> twitter feed --output tweets.json
> twitter feed --input tweets.json
> twitter feed --json                    # Structured stdout for scripts/agents
> 
> 
> # Bookmarks
> twitter bookmarks
> twitter bookmarks --full-text
> twitter bookmarks --max 30 --yaml
> 
> 
> # Search
> twitter search "Claude Code"
> twitter search "AI agent" -t Latest --max 50
> twitter search "AI agent" --full-text
> twitter search "机器学习" --yaml
> twitter search "python" --from elonmusk --lang en --since 2026-01-01
> twitter search --from bbc --exclude retweets --has links
> twitter search "topic" -o results.json         # Save to file
> twitter search "trending" --filter              # Apply ranking filter
> 
> 
> # Tweet detail (view tweet + replies)
> twitter tweet 1234567890
> twitter tweet 1234567890 --full-text
> twitter tweet https://x.com/user/status/1234567890
> 
> 
> # Open tweet by index from last list output
> twitter show 2                         # Open tweet #2 from last feed/search
> twitter show 2 --full-text             # Full text in reply table
> twitter show 2 --json                  # Structured output
> 
> 
> # Twitter Article
> twitter article 1234567890
> twitter article https://x.com/user/article/1234567890 --json
> twitter article 1234567890 --markdown
> twitter article 1234567890 --output article.md
> 
> 
> # List timeline
> twitter list 1539453138322673664
> twitter list 1539453138322673664 --full-text
> 
> 
> # User
> twitter user elonmusk
> twitter user-posts elonmusk --max 20
> twitter user-posts elonmusk --full-text
> twitter user-posts elonmusk -o tweets.json
> twitter likes elonmusk --max 30          # ⚠️ own likes only (private since Jun 2024)
> twitter likes elonmusk --full-text
> twitter likes elonmusk -o likes.json
> twitter followers elonmusk --max 50
> twitter following elonmusk --max 50
> 
> 
> # Write operations
> twitter post "Hello from twitter-cli!"
> twitter post "Hello!" --image photo.jpg            # Post with image
> twitter post "Gallery" -i a.png -i b.jpg -i c.webp  # Up to 4 images
> twitter post "reply text" --reply-to 1234567890
> twitter reply 1234567890 "Nice!" -i screenshot.png  # Reply with image
> twitter quote 1234567890 "Look" -i chart.png        # Quote with image
> twitter post "Hello from twitter-cli!" --json
> twitter delete 1234567890
> twitter like 1234567890
> twitter like 1234567890 --yaml
> twitter unlike 1234567890
> twitter retweet 1234567890
> twitter unretweet 1234567890
> twitter bookmark 1234567890
> twitter unbookmark 1234567890
> twitter follow elonmusk --json
> ```
> 
> 
> ### Authentication
> 
> twitter-cli uses this auth priority:
> 
> 1. **Environment variables**: `TWITTER_AUTH_TOKEN` + `TWITTER_CT0`
> 2. **Browser cookies** (recommended): auto-extract from Arc/Chrome/Edge/Firefox/Brave
> 
> Browser extraction is recommended — it forwards ALL Twitter cookies (not just `auth_token` + `ct0`) and aligns request headers with your local runtime, which is closer to normal browser traffic than minimal cookie auth.
> 
> **Chrome multi-profile**: All Chrome profiles are scanned automatically. To specify a profile:
> 
> ```bash
> TWITTER_CHROME_PROFILE="Profile 2" twitter feed
> ```
> 
> After loading cookies, the CLI performs lightweight verification. Commands that require account access fail fast on clear auth errors (`401/403`).
> 
> 
> ### Proxy Support
> 
> Set `TWITTER_PROXY` to route all requests through a proxy:
> 
> ```bash
> 
> # HTTP proxy
> export TWITTER_PROXY=http://127.0.0.1:7890
> 
> 
> # SOCKS5 proxy
> export T

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[steipete--discrawl|steipete/discrawl]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/jackwener/twitter-cli)

## 相關收錄

> [!note]- 直接競品（同子分類：社群媒體工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社群媒體工具" AND file.name != "jackwener--twitter-cli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--twitter-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jackwener--twitter-cli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "jackwener--twitter-cli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","API 設計","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jackwener--twitter-cli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jackwener--twitter-cli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jackwener--twitter-cli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jackwener" AND file.name != "jackwener--twitter-cli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jackwener--twitter-cli");
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
> const me = dv.page("Repos/jackwener--twitter-cli");
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
> const me = dv.page("Repos/jackwener--twitter-cli");
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
> const me = dv.page("Repos/jackwener--twitter-cli");
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
> const me = dv.page("Repos/jackwener--twitter-cli");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
