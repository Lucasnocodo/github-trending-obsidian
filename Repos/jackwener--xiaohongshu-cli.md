---
repo: jackwener/xiaohongshu-cli
url: https://github.com/jackwener/xiaohongshu-cli
owner: jackwener
owner_type: User
language: Python
license: N/A
description: "A CLI for Xiaohongshu (小红书) — search, read, interact via reverse-engineered API"
homepage: ""
stars: 786
stars_per_day: 197
forks: 77
open_issues: 8
created: 2026-03-08
pushed_at: 2026-03-12
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
use_case: "透過逆向工程的 API 來搜尋、閱讀及互動小紅書的 CLI 工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-20"
contributor_count: 2
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-11"
star_history: "2026-03-11:389,2026-03-13:786"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
aliases:
  - "xiaohongshu-cli"
  - "jackwener/xiaohongshu-cli"
  - "透過逆向工程的 API 來搜尋、閱讀及互動小紅書的 CLI 工具。"
---

# xiaohongshu-cli

**389** stars · **130** stars/天 · 建立 3 天前 · Python · 未標註授權

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
> 透過逆向工程的 API 來搜尋、閱讀及互動小紅書的 CLI 工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (130 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 CLI 環境下與小紅書互動的開發者或數據分析師。
> **一句話重點** 這個專案不僅提供了小紅書的基本互動功能，還考慮到了用戶的隱私和安全，這在類似工具中是相對少見的。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到穩定的社交媒體互動工具，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一個反向工程的 API 介面，讓用戶能夠在沒有官方支持的情況下與小紅書進行互動。

## 專案簡介

xiaohongshu-cli 是一個專為小紅書設計的命令列工具，允許用戶透過逆向工程的 API 進行搜尋、閱讀及互動。用戶可以使用 `xhs login` 指令自動提取瀏覽器的 cookies，或透過 QR 碼登錄，並使用 `xhs search` 指令搜尋特定關鍵字的筆記。這個工具的賣點在於其反偵測機制，透過高斯抖動和隨機延遲模擬自然瀏覽行為，降低被檢測的風險。技術上，該專案使用 Python，並依賴於 httpx、click 和 rich 等庫來實現 HTTP 請求和命令列介面。與其他類似工具相比，如 bilibili-cli 和 twitter-cli，xiaohongshu-cli 提供了更為細緻的社交互動功能，如關注、收藏和評論等，並且支持 YAML 和 JSON 格式的結構化輸出，便於與其他工具整合。使用者在使用過程中可能會遇到 API 限制和登錄問題，特別是在使用 QR 碼登錄時，這些問題在 GitHub 上的熱門 Issues 中有反映。整體來看，該專案仍處於 Alpha 階段，適合對小紅書有需求的開發者或數據分析師，但不建議在生產環境中使用，因為 API 可能隨時變更。

**技術棧**：`Python 3.10` · `httpx` · `click` · `rich`

## 重點功能

- 🔐 Auth — 自動提取瀏覽器 cookies，支持 QR 碼登錄和狀態檢查。
- 🔍 Search — 支持關鍵字搜尋、用戶搜尋和主題搜尋，並可排序和過濾。
- 📖 Reading — 查看筆記詳情、評論和用戶資料，支持 URL 自動提取。
- 👥 Social — 支持關注、取消關注和收藏功能。
- 👍 Interactions — 可以點讚、評論、回覆和刪除評論。
- 📊 Structured output — 支持 YAML 和 JSON 格式的結構化輸出，方便與其他工具整合。
- 🛡️ Anti-detection — 包含多種反偵測機制，降低被檢測的風險。

## 快速開始

1. 安裝依賴
```bash
uv sync
```
2. 使用 QR 碼登錄
```bash
xhs login --qrcode
```
3. 搜尋筆記
```bash
xhs search '美食'
```

## 程式碼範例

{
  "前置條件": "已安裝 xiaohongshu-cli 並完成登錄。",
  "指令": "xhs search '旅行' --sort popular",
  "預期輸出": "返回與 '旅行' 相關的熱門筆記列表。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 389 stars（130/天），forks 32（8.2%），顯示出不錯的增長潛力。作者 jackwener 過去有開發多個 CLI 工具，這個專案解決了小紅書用戶在缺乏官方 API 的情況下，無法有效互動的痛點。近期的推廣或社群討論可能引發了關注，具體事件尚不明確。這個工具的高 forks/stars 比率顯示出用戶對其進行實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要在 CLI 環境下與小紅書互動的開發者或數據分析師。

> [!example] 使用場景
> - 數據分析師用它來自動化提取小紅書上的熱門筆記，因為手動搜尋和整理資料效率低下。
> - 社交媒體經營者用它來監控競爭對手的動態，因為可以快速獲取他們的熱門內容和用戶互動。
> - 開發者用它來測試小紅書的 API 變更，因為可以快速驗證功能是否正常，並進行調整。

## 架構分析

這個專案採用 Python 作為主要開發語言，並使用 click 庫來構建命令列介面。架構上，所有的 API 請求都透過 httpx 進行，這使得請求的非同步處理變得更加高效。為了降低被檢測的風險，專案實施了多種反偵測技術，如高斯抖動和隨機延遲。

這些設計選擇使得工具在使用時能夠模擬自然的瀏覽行為，從而減少被平台檢測的機會。這樣的設計雖然增加了實作的複雜度，但對於需要長期穩定使用的用戶來說，這是值得的。整體架構的擴展性良好，能夠支持未來功能的增加。

## 技術深入分析

xiaohongshu-cli 的核心技術機制是基於 Python 的 HTTP 請求和命令列介面設計。使用 httpx 庫進行非同步請求，使得工具在處理多個請求時能夠保持高效。反偵測機制的實施是這個專案的一大亮點，透過高斯抖動和隨機延遲來模擬自然的用戶行為，這樣的設計不僅提升了使用體驗，也降低了被檢測的風險。該工具能夠處理小紅書上的大量數據，並且在使用過程中能夠自動刷新登錄狀態，這對於長期使用者來說是非常重要的。設計上選擇 Python 是因為其生態系統豐富，能夠快速開發和迭代，但這也帶來了依賴管理的挑戰。整體來看，這個工具在與其他 CLI 工具的整合上表現良好，能夠輕鬆融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了安裝和使用範例。安裝過程相對順暢，但需要注意 Python 版本要求。文件中有多語言支持，對於中文用戶友好。整體上，30 分鐘內可以順利跑起來。

## 優缺點分析

> [!success] 優點
> - 提供多種社交互動功能，適合小紅書用戶。
> - 反偵測機制有效，降低被檢測的風險。
> - 支持結構化輸出，便於與其他工具整合。

> [!danger] 缺點
> - 仍處於 Alpha 階段，穩定性有待提高。
> - API 可能隨時變更，需持續維護。
> - 登錄過程可能會遇到權限問題。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 在某些情況下，API 可能會返回權限錯誤。
> - 登錄 cookies 有效期為 7 天，過期後需重新登錄。
> - 目前仍處於 Alpha 階段，API 可能隨時變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | bilibili-cli 專注於 Bilibili 的視頻和用戶互動，而 xiaohongshu-cli 則針對小紅書的社交互動和筆記搜尋。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | twitter-cli 提供 Twitter 的時間線和書籤功能，而 xiaohongshu-cli 更加注重於小紅書的社交互動和內容創作。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | bilibili-cli 專注於視頻內容的互動，而 xiaohongshu-cli 則針對社交筆記的管理。 | 如果你的需求主要集中在視頻平台的內容管理，bilibili-cli 會更合適。 | low，因為兩者都是 CLI 工具，使用方式類似。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | twitter-cli 提供了社交媒體的即時互動，而 xiaohongshu-cli 更加注重於內容的搜尋和管理。 | 如果你的工作重心在即時社交互動，twitter-cli 會更適合。 | medium，因為功能和命令略有不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaohongshu-cli** | **bilibili-cli** | **twitter-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | bilibili-cli 專注於視頻內容的互動，而 xiaohongshu-cli 則針對社交筆記的管理。 | twitter-cli 提供了社交媒體的即時互動，而 xiaohongshu-cli 更加注重於內容的搜尋和管理。 |
> | 遷移成本 | - | low，因為兩者都是 CLI 工具，使用方式類似。 | medium，因為功能和命令略有不同。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在視頻平台的內容管理，bilibili- | 如果你的工作重心在即時社交互動，twitter-cli 會更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目和測試使用，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用 QR 碼登錄時，可能會遇到無法提取 cookies 的問題。
  - 解法：確保瀏覽器已正確安裝並且支持 QR 碼登錄。
- [MEDIUM] API 返回權限錯誤時，可能無法執行某些搜尋功能。
  - 解法：檢查登錄狀態，並重新登錄。
- [MEDIUM] 使用過程中可能會遇到 API 限制，導致請求失敗。
  - 解法：適當調整請求頻率，並使用自動重試機制。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的社交媒體管理 | 適合 | 提供了全面的社交互動功能，能夠有效管理多個用戶的內容。 |
| 個人開發者的數據分析專案 | 非常適合 | 能夠快速提取和分析小紅書上的熱門內容。 |
| 大型企業的社交媒體監控 | 普通 | 雖然功能強大，但在穩定性和 API 變更風險上需要謹慎。 |
| 對小紅書無需求的開發者 | 不適合 | 該工具專注於小紅書的互動，對於其他平台無法提供幫助。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到穩定的社交媒體互動工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，僅存取用戶的 cookies 和基本資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 環境中使用。

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
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 32 |
| Open Issues | 2 |
| 最後推送 | 2026-03-11 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 169 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/xiaohongshu-cli) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 46 |
> | [@Huanshere](https://github.com/Huanshere) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的更新和修復。
**連結**：[文件](https://github.com/jackwener/xiaohongshu-cli)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-11 ~ 2026-03-11）
> **活躍天數** 1 天 · **最新 commit** fix: CI fixes for PyPI publish (v0.3.5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/jackwener/xiaohongshu-cli/issues/5) | xhs login --qrcode Usage: xhs login [OPTIONS] Try 'xhs login `bug` | 0 | 3 |
> | [#4](https://github.com/jackwener/xiaohongshu-cli/issues/4) | login、feed、hot功能都正常，无法搜索，说没有权限访问，-104错误 | 0 | 2 |

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
> xhs login --qrcode                    # Scan QR with Xiaohongshu app (no browser needed)
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
> xhs read                      # Read a note
> xhs read "https://www.xiaohongshu.com/explore/xxx?xsec_token=yyy"  # Read by URL (auto-extracts xsec_token)
> xhs comments ""                   # View comments — paste URL to auto-extract xsec_token
> xhs comments "" --all             # Fetch ALL comments (auto-paginate all pages)
> xhs comments "" --all --json      # All comments as JSON
> xhs comments  --xsec-token T  # Use note_id + explicit xsec_token
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
> # ─── Social ───────────────────────────────────────
> xhs favorites                          # My bookmarked notes (current user)
> xhs favorites                 # Other user's bookmarked notes
> xhs follow                    # Follow a user
> xhs unfollow                  # Unfollow a user
> 
> 
> # ─── Interactions ─────────────────────────────────
> xhs like                      # Like a note
> xhs like  --undo             # Unlike
> xhs favorite                  # Favorite (bookmark)
> xhs unfavorite                # Unfavorite
> xhs comment  -c "好赞！"     # Post comment
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
> ```
> 
> 
> ## Authentication
> 
> xiaohongshu-cli supports multiple authentication methods:
> 
> 1. **Saved cookies** — loads from `~/.xiaohongshu-cli/cookies.json`
> 2. **Browser cookies** — auto-detects installed browsers and extracts cookies (supports Chrome, Arc, Edge, Firefox, Safari, Brave, Chromium, Opera, Vivaldi, and more)
> 3. **QR code login** — scan with Xiaohongshu app, no browser needed (`xhs login --qrcode`)
> 
> `xhs login` automatically tries all installed browsers and uses the first one with valid cookies.
> Use `--cookie-source ` to specify a browser explicitly, or `--qrcode` for QR code login.
> Other authenticated commands automatically retry once with fresh browser cookies when the saved session has expired.
> 
> 
> ### Cookie TTL
> 
> Saved cookies are valid for **7 days** by default. After that, the client automatically attempts to refresh from the browser. If browser extraction fails, the existing cookies are used with a warning.
> 
> 
> ## Environment Variables
> 
> | Variable | Default | Description |
> |----------|---------|-------------|
> | `OUTPUT` | `auto` | Output format: `json`, `yaml`, `rich`, or `auto` (→ YAML when non-TTY) |
> 
> 
> ## Rate Limiting & Anti-Detection
> 
> xiaohongshu-cli includes comprehensive anti-risk-control measures designed to minimize detection:
> 
> 
> ### Request Timing
> - **Gaussian jitter**: Delays between requests use a truncated Gaussian distribution (not fixed intervals) to mimic natural browsing patterns
> - **Random long pauses**: ~5% of requests include an additional 2-5 second delay simulating reading behavior
> - **Auto-retry**: Exponential backoff on HTTP 429/5xx and network errors (up to 3 retries)
> 
> 
> ### Browser Fingerprint Consistency
> - **UA/Platform alignment**: User-Agent, `sec-ch-ua`, `sec-ch-ua-platform`, and fingerprint fields are all consistent (macOS Chrome)
> - **Session-stable identity**: GPU, screen resolution, CPU cores, and other hardware fingerprint values are generated once per session and reused across all requests (real browsers don't change hardware mid-session)
> - **macOS-native values**: GPU vendors (Apple M1/M2/M3, Intel Iris), Retina screen resolutions, `MacIntel` platform — all matching a real macOS browser
> 
> 
> ### Captcha Cooldown
> - **Progressive backoff**: On captcha trigger (HTTP 461/471), automatically sleeps 5→10→20→30 seconds with increasing delays
> - **Adaptive rate limiting**: Request delay is permanently doubled after a captcha event t

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[CLI/TUI]]

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
> const concepts = ["自動化","API 設計","CLI/TUI"];
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

- [[2026-03-13|2026-03-13]] — 再次上榜，786 stars
- [[2026-03-11|2026-03-11]] — 首次收錄，389 stars
