---
repo: public-clis/twitter-cli
url: https://github.com/public-clis/twitter-cli
owner: public-clis
owner_type: Organization
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 2216
stars_per_day: 65
forks: 195
open_issues: 14
created: 2026-03-05
pushed_at: 2026-03-21
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
use_case: "讓你在終端機中輕鬆讀取 Twitter/X 的動態、書籤和用戶時間線。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "low"
issue_close_rate: 52
repo_size_kb: 323
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1703,2026-03-14:1754,2026-03-15:1855,2026-03-16:1908,2026-03-17:1959,2026-03-18:1998,2026-03-19:2031,2026-03-20:2042,2026-03-21:2058,2026-03-22:2070,2026-03-24:2096,2026-03-25:2102,2026-03-26:2108,2026-03-29:2127,2026-03-31:2134,2026-04-07:2194,2026-04-08:2205,2026-04-09:2216"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "twitter-cli"
  - "public-clis/twitter-cli"
  - "讓你在終端機中輕鬆讀取 Twitter/X 的動態、書籤和用戶時間線。"
---

# twitter-cli

**2.2k** stars · **65** stars/天 · 建立 34 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/public-clis--twitter-cli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓你在終端機中輕鬆讀取 Twitter/X 的動態、書籤和用戶時間線。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (65 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 18 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在終端機中操作 Twitter 並且不想使用 API 金鑰的開發者。
> **一句話重點** 這個工具讓 Twitter 的操作變得更加靈活，特別是對於喜歡在終端機中工作的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/public-clis--twitter-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社交媒體工具" && p.file.name !== "public-clis--twitter-cli" && p.status !== "archived")
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
> **結論** 花 2 小時學、1 小時整合，得到快速操作 Twitter 的能力，值得。

> [!abstract] 核心創新
> 這個專案的創新之處在於它不需要 API 金鑰，讓用戶能夠更輕鬆地在終端機中操作 Twitter。

## 專案簡介

這個 CLI 工具讓使用者能夠在終端機中直接訪問 Twitter/X 的各種功能，包括讀取時間線、書籤和用戶資料，而不需要 API 金鑰。使用者可以透過簡單的指令，例如 `twitter feed` 來獲取動態，並且可以使用 `--full-text` 參數來顯示完整的推文內容。這樣的設計使得用戶能夠快速獲取資訊，特別適合那些喜歡在命令行環境中工作的開發者。技術上，這個專案使用 Python 實作，並依賴於多個庫如 `click` 和 `rich` 來處理命令行介面和輸出格式。這些選擇使得專案在功能上相對輕量，並且易於維護。

與其他類似工具相比，如 `tweepy` 和 `twurl`，這個 CLI 工具不需要 API 金鑰，這降低了使用門檻，特別適合快速查詢和操作推文。使用者可以透過 `--yaml` 或 `--json` 輸出格式來整合到其他腳本或 AI agent 中，這使得它在自動化任務中也非常有用。儘管如此，使用者需要注意，這個工具在 Windows 環境下的 cookie 提取功能存在問題，這可能會影響某些用戶的體驗。總體來說，這是一個功能強大且易於使用的工具，適合那些希望在終端機中高效操作 Twitter 的用戶。

**技術棧**：`Python 3.10` · `Click` · `Rich`

## 重點功能

- 時間線讀取 — 使用 `twitter feed` 指令獲取 `for-you` 和 `following` 動態。
- 書籤管理 — 使用 `twitter bookmarks` 指令列出保存的推文。
- 推文詳細查看 — 使用 `twitter tweet <tweet_id>` 指令查看推文及其回覆。
- 結構化輸出 — 使用 `--yaml` 或 `--json` 參數將資料輸出為 YAML 或 JSON 格式，便於腳本整合。
- 用戶資料查詢 — 使用 `twitter user <username>` 指令獲取用戶的推文、喜好和關注者資料。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 獲取首頁動態
```bash
twitter feed
```
3. 查看書籤
```bash
twitter bookmarks
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 twitter-cli",
  "twitter feed --max 50 --full-text --output tweets.json",
  "# 預期輸出：將前 50 條推文的完整內容輸出到 tweets.json"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 34 天就累積 2216 stars（65/天），forks 195（8.8%），顯示出穩定的增長。作者 jackwener 之前有開發其他 CLI 工具，這次專案解決了用戶在終端機中使用 Twitter 的需求，特別是對於不想使用 API 金鑰的開發者。這個工具的出現正好符合了許多開發者希望在 CLI 環境中進行社交媒體互動的需求，並且在 GitHub 上的討論也逐漸增多，進一步促進了它的流行。這個工具的設計充分考慮了用戶的使用習慣，並且提供了多種輸出格式，讓它在自動化和腳本化操作中變得更加靈活。

## 適合誰使用

**目標受眾**：希望在終端機中操作 Twitter 並且不想使用 API 金鑰的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 CI 中自動獲取 Twitter 動態，因為這樣可以快速整合社交媒體反饋到開發流程中。
> - 數據分析師用它來提取特定主題的推文，因為它支持多種過濾和排序選項，能夠快速獲得所需資料。
> - 內容創作者用它來管理自己的推文和書籤，因為可以直接在終端機中進行操作，提升工作效率。

## 架構分析

這個專案採用 Python 作為主要開發語言，並使用 Click 框架來處理命令行介面。資料流從用戶輸入指令開始，經過各種處理後，最終輸出到終端或文件。選擇 Python 使得開發過程簡單且擴展性高，但也可能在高併發請求時面臨性能瓶頸。使用者可以透過配置文件來調整請求行為，這樣的設計使得用戶能夠根據自身需求進行調整。整體架構相對輕量，適合快速部署和使用，但在高流量時可能需要考慮使用代理來減少 IP 被封的風險。

## 技術深入分析

這個專案的核心技術機制是使用 Python 和 Click 框架來構建命令行介面，並且依賴多個庫來處理 HTTP 請求和數據格式。效能上，這個工具能夠快速處理用戶請求，但在高併發情況下可能會面臨 API 限制的挑戰。選擇 Python 使得開發和維護變得簡單，但也可能在性能上不如其他編譯語言。依賴樹相對簡單，主要依賴於幾個輕量級的庫，這降低了維護成本。技術風險方面，隨著使用者數量的增加，可能會面臨更嚴格的 API 限制，這需要在設計上考慮到適當的重試和延遲機制。整合方面，這個工具可以輕鬆與其他 CLI 工具鏈結合，並且支持 YAML 和 JSON 輸出，這使得它在自動化任務中非常有用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指南，並且包含了多個範例。安裝過程相對順暢，使用者只需執行簡單的命令即可完成安裝。文件中沒有提供多語言支持，但整體結構清晰，易於理解。

## 優缺點分析

> [!success] 優點
> - 不需要 API 金鑰，降低使用門檻。
> - 支持多種輸出格式，便於整合到其他工具中。
> - 命令行操作直觀，適合開發者使用。

> [!danger] 缺點
> - 在 Windows 環境下的 cookie 提取功能可能存在問題。
> - 對於高頻請求可能會受到 API 限制影響。
> - 目前仍處於 alpha 階段，穩定性有待提升。

> [!warning] 注意事項
> - 僅支援 Python 3.10 及以上版本。
> - 在 Windows 環境下 cookie 提取功能可能會失敗。
> - API 限制可能導致請求失敗，需要適當的重試機制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [tweepy/tweepy](https://github.com/tweepy/tweepy) | tweepy 需要使用 API 金鑰來訪問 Twitter，而 twitter-cli 則不需要，這使得它在使用上更為便捷。 |
| [twurl/twurl](https://github.com/twurl/twurl) | twurl 主要用於 API 測試，而 twitter-cli 提供了更全面的 CLI 操作，適合日常使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [tweepy/tweepy](https://github.com/tweepy/tweepy) | tweepy 使用 Twitter API 進行操作，需要 API 金鑰，而 twitter-cli 則不需要，這使得它在使用上更為便捷。 | 如果你的團隊已經在使用 Twitter API 並且需要更細緻的控制，則應選擇 tweepy。 | medium，因為需要重新設計 API 調用方式。 |
| [twurl/twurl](https://github.com/twurl/twurl) | twurl 主要用於 API 測試，而 twitter-cli 提供了更全面的 CLI 操作，適合日常使用。 | 如果你需要進行 API 測試和調試，twurl 會是更好的選擇。 | low，因為兩者的操作方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **twitter-cli** | **tweepy** | **twurl** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | tweepy 使用 Twitter API 進行操作，需要 API 金鑰，而 twitter-cli 則不需要，這使得它在使用上更為便捷。 | twurl 主要用於 API 測試，而 twitter-cli 提供了更全面的 CLI 操作，適合日常使用。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 調用方式。 | low，因為兩者的操作方式相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Twitter API 並且需要更細 | 如果你需要進行 API 測試和調試，twurl 會是更好的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 上 cookie 提取失敗，導致無法正常使用
  - 解法：使用其他環境或手動設置環境變數
- [MEDIUM] API 限制導致請求失敗
  - 解法：調整請求頻率或使用代理
- [MEDIUM] 部分功能在高流量下可能不穩定
  - 解法：適當調整使用方式，避免高頻請求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的社交媒體管理 | 非常適合 | 工具簡單易用，能夠快速獲取和管理推文。 |
| 大型企業的社交媒體分析 | 普通 | 雖然功能強大，但在高流量下可能會受到 API 限制影響。 |
| 個人開發者的日常使用 | 非常適合 | 不需要 API 金鑰，使用方便。 |
| 需要高頻率推文操作的用戶 | 不適合 | 可能會面臨 API 限制，影響使用體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到快速操作 Twitter 的能力，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，主要依賴於用戶的 Twitter 帳號和瀏覽器 cookie。它不會存取敏感資料，但使用者需確保環境變數的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/public-clis--twitter-cli");
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
> const me = dv.page("Repos/public-clis--twitter-cli");
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
| Forks | 195 |
| Open Issues | 14 |
| Issue 解決率 | 52% (15 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 323 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/public-clis/twitter-cli) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 124 |
> | [@alextuan1024](https://github.com/alextuan1024) | 3 |
> | [@Pleasurecruise](https://github.com/Pleasurecruise) | 2 |
> | [@y0u-0](https://github.com/y0u-0) | 1 |
> | [@tao-bai](https://github.com/tao-bai) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多個合併請求和問題回應。
**連結**：[文件](https://github.com/jackwener/twitter-cli)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-21）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #44 from alextuan1024/fix/article-inline-hyperlinks

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/public-clis/twitter-cli/issues/28) | [Bug] Windows: browser cookie extraction fails (Unable to ge | 1 | 1 |
> | [#50](https://github.com/public-clis/twitter-cli/issues/50) | Pagination limited to 500 users despite X.com API supporting | 0 | 1 |

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
> **Browser priority:** If you have multiple browsers, set `TWITTER_BROWSER` to try a specific browser first:
> 
> ```bash
> TWITTER_BROWSER=chrome twitter feed    # Supported: arc, chrome, edge, firefox, brave
> ```
> 
> After loading cookies, the CLI performs lightweight verification. Commands that require account access fail fa

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/public-clis/twitter-cli)

## 相關收錄

> [!note]- 直接競品（同子分類：社交媒體工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社交媒體工具" AND file.name != "public-clis--twitter-cli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "public-clis--twitter-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "public-clis--twitter-cli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "public-clis--twitter-cli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "public-clis--twitter-cli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/public-clis--twitter-cli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "public-clis--twitter-cli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "public-clis" AND file.name != "public-clis--twitter-cli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/public-clis--twitter-cli");
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
> const me = dv.page("Repos/public-clis--twitter-cli");
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
> const me = dv.page("Repos/public-clis--twitter-cli");
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
> const me = dv.page("Repos/public-clis--twitter-cli");
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
> const me = dv.page("Repos/public-clis--twitter-cli");
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
