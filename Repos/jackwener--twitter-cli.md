---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1703
stars_per_day: 243
forks: 144
open_issues: 4
created: 2026-03-05
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "社交媒體工具"
release_tag: "v0.6.4"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "在終端機中訪問 Twitter/X 的時間線、書籤和用戶資料。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 3
engagement: "low"
issue_close_rate: 69
repo_size_kb: 268
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1703"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
aliases:
  - "twitter-cli"
  - "jackwener/twitter-cli"
  - "在終端機中訪問 Twitter/X 的時間線、書籤和用戶資料。"
---

# twitter-cli

**1.7k** stars · **243** stars/天 · 建立 7 天前 · Python · Apache-2.0

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

`v0.6.4`

> [!summary] 一句話摘要
> 在終端機中訪問 Twitter/X 的時間線、書籤和用戶資料。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (243 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在終端機中高效訪問 Twitter 資源的開發者和社交媒體專業人士。
> **一句話重點** 這個專案的設計讓用戶能夠在終端機中輕鬆訪問 Twitter 資源，省去繁瑣的 API 設定。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--twitter-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社交媒體工具" && p.file.name !== "jackwener--twitter-cli" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到高效的 Twitter 管理工具，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於使用瀏覽器 cookies 進行身份驗證，簡化了用戶的使用流程。

## 專案簡介

twitter-cli 是一個專為終端機設計的 Twitter/X CLI 工具，允許用戶在不需要 API 金鑰的情況下，直接從終端機讀取時間線、書籤和用戶資料。用戶可以通過簡單的命令如 `twitter feed` 來獲取個人化的時間線，並使用 `--full-text` 參數來顯示完整的推文內容。這個工具的賣點在於它的無縫整合能力，能夠使用瀏覽器的 cookies 進行身份驗證，這樣用戶可以避免繁瑣的 API 設定。技術上，這個專案使用了 Python 和多個依賴庫，如 `click` 和 `rich`，來提供一個友好的命令行介面。

相較於其他類似工具，如 `t` 和 `twurl`，twitter-cli 提供了更豐富的功能，如書籤管理和推文詳細查看，並且支持 YAML 和 JSON 輸出格式，方便用於腳本和 AI 集成。這個工具的使用者需要注意的是，它的身份驗證依賴於瀏覽器的 cookies，這可能會在某些環境中造成限制。這個專案目前處於 alpha 階段，適合開發者和技術愛好者使用，但不建議在生產環境中使用。未來六個月內，預計會有更多功能增強和錯誤修復，特別是在用戶反饋的基礎上進行改進。

**技術棧**：`Python 3.10` · `click` · `rich`

## 重點功能

- 時間線讀取 — 使用 `twitter feed` 命令獲取個人化的時間線，支持 `--full-text` 參數顯示完整推文。
- 書籤管理 — 使用 `twitter bookmarks` 命令列出保存的推文，並支持 YAML 和 JSON 輸出。
- 推文詳細查看 — 使用 `twitter tweet <tweet_id>` 命令查看推文及其回覆，支持 `--full-text` 參數。
- 用戶資料查詢 — 使用 `twitter user <username>` 命令獲取用戶資料和推文歷史。
- 身份驗證 — 支持使用瀏覽器 cookies 進行身份驗證，避免 API 金鑰的繁瑣設定。
- 代理支持 — 可通過設置 `TWITTER_PROXY` 環境變數來使用代理，減少 IP 限制風險。
- 自定義配置 — 使用 `config.yaml` 文件來設置抓取行為和過濾條件，靈活調整使用體驗。
- 診斷工具 — 使用 `twitter doctor` 命令輸出診斷報告，幫助用戶排查問題。

## 快速開始

1. 安裝 dev 依賴
```bash
uv sync --extra dev
```
2. 獲取主時間線
```bash
twitter feed
```
3. 獲取書籤
```bash
twitter bookmarks
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 twitter-cli 並進行身份驗證",
  "指令": "twitter feed --max 50 --full-text --output tweets.json",
  "預期輸出": "將最多 50 條推文以完整文本格式輸出到 tweets.json 文件中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 1703 stars（243/天），forks 144（8.5%），這顯示出穩定的增長趨勢。作者 jackwener 之前有多個成功的 CLI 工具專案，這使得他在開發此工具時具備豐富的經驗。這個工具解決了許多用戶在使用 Twitter API 時遇到的繁瑣身份驗證問題，讓用戶能夠更輕鬆地訪問 Twitter 資源。最近的討論和需求也促進了這個專案的發展，特別是對於功能擴展的需求，如支持視頻媒體上傳。技術上，這個工具的設計考慮到了用戶的隱私和安全性，通過使用 cookies 來進行身份驗證，這在目前的技術環境中是相對安全的。forks/stars 比率為 8.5%，顯示出有相當比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在終端機中高效訪問 Twitter 資源的開發者和社交媒體專業人士。

> [!example] 使用場景
> - 社交媒體經理用它來在終端機中快速檢查 Twitter 時間線，因為這樣可以避免在瀏覽器中切換，提升工作效率。
> - 開發者用它來自動化推文發佈，因為它支持多種輸出格式，方便與其他工具集成。
> - 數據分析師用它來提取 Twitter 數據進行分析，因為它可以將數據以 YAML 或 JSON 格式輸出，便於後續處理。

## 架構分析

twitter-cli 採用 Python 作為主要開發語言，並使用多個輕量級庫來構建命令行介面。其架構設計重點在於提供簡單易用的命令，並通過瀏覽器 cookies 進行身份驗證，這樣用戶無需繁瑣的 API 設定。資料流方面，命令會通過 HTTP 請求與 Twitter 的 GraphQL 接口進行交互，並根據用戶的需求返回相應的數據。選擇使用 cookies 而非 API 金鑰的好處在於提高了使用的便利性，但也可能在某些環境中造成限制。擴展性方面，這個工具的設計允許用戶通過配置文件自定義抓取行為，這對於需要特定數據的用戶來說非常有用。

## 技術深入分析

twitter-cli 的核心技術機制基於 Python，利用 `click` 庫來構建命令行介面，並使用 `rich` 庫來提供美觀的輸出格式。該工具能夠處理大量的 Twitter 數據，並通過 HTTP 請求與 Twitter 的 GraphQL 接口進行交互，這使得用戶能夠快速獲取所需信息。設計上，選擇使用瀏覽器 cookies 進行身份驗證，這不僅提高了使用的便利性，還能夠更好地模擬正常的瀏覽器行為。這種設計的代價在於可能對某些環境造成限制，特別是在沒有瀏覽器支持的情況下。技術風險方面，這個工具依賴於 Twitter 的 API，若其接口發生變化，可能會影響工具的正常運行。整合方面，twitter-cli 可以輕鬆與其他 CLI 工具和腳本進行集成，這對於需要自動化的用戶來說非常方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的範例。安裝過程相對順暢，但需要注意瀏覽器 cookies 的提取。文件有中英文版本，對於不同語言的用戶都很友好。

## 優缺點分析

> [!success] 優點
> - 簡化的身份驗證流程，無需 API 金鑰。
> - 支持多種輸出格式，便於與其他工具集成。
> - 豐富的功能，涵蓋了推文讀取、發佈和管理等多個方面。

> [!danger] 缺點
> - 對於某些環境可能不支持瀏覽器 cookies 的提取。
> - 目前處於 alpha 階段，功能和穩定性可能不夠完善。
> - 缺乏視頻媒體上傳的支持，這是用戶需求的熱門話題。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要有效的瀏覽器 cookies 進行身份驗證，對於某些環境可能不適用。
> - 目前不支持視頻媒體的上傳功能，這是用戶反饋的熱門需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| t | t 是一個輕量級的 Twitter CLI 工具，專注於基本的推文讀取和發佈功能，但不支持書籤和詳細推文查看。 |
| twurl | twurl 是 Twitter 的官方 CLI 工具，提供完整的 API 訪問，但需要 API 金鑰，使用上較為繁瑣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| t | t 是一個輕量級的 Twitter CLI 工具，專注於基本的推文讀取和發佈功能，但不支持書籤和詳細推文查看。 | 如果你只需要基本的推文讀取功能，且不需要其他附加功能，t 會是一個更簡單的選擇。 | low，因為命令行介面相似，易於上手。 |
| twurl | twurl 是 Twitter 的官方 CLI 工具，提供完整的 API 訪問，但需要 API 金鑰，使用上較為繁瑣。 | 如果你需要完整的 API 功能並且不介意使用 API 金鑰，twurl 是一個不錯的選擇。 | medium，因為需要重新配置 API 金鑰和命令格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **twitter-cli** | **t** | **twurl** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | t 是一個輕量級的 Twitter CLI 工具，專注於基本的推文讀取和發佈功能，但不支持書籤和詳細推文查看。 | twurl 是 Twitter 的官方 CLI 工具，提供完整的 API 訪問，但需要 API 金鑰，使用上較為繁瑣。 |
> | 遷移成本 | - | low，因為命令行介面相似，易於上手。 | medium，因為需要重新配置 API 金鑰和命令格式。 |
> | 適用場景 | 主要場景 | 如果你只需要基本的推文讀取功能，且不需要其他附加功能，t 會 | 如果你需要完整的 API 功能並且不介意使用 API 金鑰， |

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

- **[HIGH]** 在某些環境中無法提取瀏覽器 cookies，導致身份驗證失敗
  - 解法：手動設置環境變數 TWITTER_AUTH_TOKEN 和 TWITTER_CT0
- [MEDIUM] 使用過程中可能遇到 API 錯誤，特別是當 GraphQL 查詢 ID 變更時
  - 解法：重試命令，客戶端會自動嘗試查詢 ID 的回退
- **[HIGH]** macOS Keychain 許可權問題，導致 cookie 提取失敗
  - 解法：確保終端應用在 Keychain 中有訪問權限

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 社交媒體經理需要快速檢查多個帳號的推文 | 非常適合 | 提供了快速訪問和多帳號支持的功能。 |
| 開發者需要自動化推文發佈 | 適合 | 支持多種輸出格式，便於與其他工具集成。 |
| 數據分析師需要提取 Twitter 數據進行分析 | 普通 | 雖然支持數據提取，但功能尚不夠完善。 |
| 普通用戶希望在終端機中使用 Twitter | 不適合 | 對於不熟悉命令行的用戶，使用門檻較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到高效的 Twitter 管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具需要訪問瀏覽器的 cookies，可能會涉及用戶的敏感資料。使用時需注意安全性，特別是在公共或不安全的網絡環境中。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

twitter-cli 最常與其他 CLI 工具搭配使用，特別是在開發和自動化工作流中。用戶可以在使用 Git 或其他版本控制工具時，通過 twitter-cli 獲取推文數據，並將其整合到 CI/CD pipeline 中。這個工具與主流的編輯器如 VS Code 也有良好的相容性，能夠在終端中直接使用。常見的整合問題包括 cookie 提取失敗和 API 錯誤，這些都可以通過診斷命令進行排查。

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
| Forks | 144 |
| Open Issues | 4 |
| Issue 解決率 | 69% (9 closed) |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 268 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/twitter-cli) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 93 |
> | [@y0u-0](https://github.com/y0u-0) | 1 |
> | [@aidiff-kobe](https://github.com/aidiff-kobe) | 1 |

**最新版本**：v0.6.4 (2026-03-11)

> [!info]- Release Notes
> ## What's Changed
> 
> ### Bug Fixes
> - **Fix `twitter likes` returning 0 results** (#8): Updated stale GraphQL queryId and fixed response path (`timeline_v2` → `timeline`)
> 
> ### New Features
> - **`twitter doctor` diagnostic command**: Outputs version, OS, browser detection, Keychain status, and cookie extraction results — useful for troubleshooting and bug reports
> - **Improved cookie extraction error messages** (#11): Detects macOS Keychain permission issues (especially in SSH sessions) and provides actionable fix suggestions
> 
> ### Improvements
> - Enhanced bug report template with browser/access method dropdowns and `twitter doctor` diagnostics field
> - Expanded README troubleshooting section (EN+CN) with Keychain/SSH solutions

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次更新和問題解決。
**連結**：[文件](https://github.com/jackwener/twitter-cli)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-11 ~ 2026-03-12）
> **活躍天數** 2 天 · **最新 commit** docs: update README and SKILL.md with image upload support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/jackwener/twitter-cli/issues/14) | Security concerns over code execution `low priority` | 0 | 0 |
> | [#13](https://github.com/jackwener/twitter-cli/issues/13) | Feature request: support video media upload when posting `enhancement` | 0 | 3 |
> | [#9](https://github.com/jackwener/twitter-cli/issues/9) | [feature] Extend your CLI tool as a Python library `enhancement` | 0 | 1 |

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
> - Tweet detail: view a tweet and its replies
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
> export TWITTER_PROXY=socks5://127.0.0.1:1080
> ```
> 
> Using a proxy can help reduce IP-based rate limiting risks.
> 
> 
> ### Best Practices (Avoiding Bans)
> 
> - **Use a proxy** — set `TWITTER_PROXY` to avoid direct IP exposure
> - **Keep request volumes low** — use `--max 20` instead of `--max 500`
> - **Don't run too frequen

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[steipete--discrawl|steipete/discrawl]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/jackwener/twitter-cli)

## 相關收錄

> [!note]- 直接競品（同子分類：社交媒體工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社交媒體工具" AND file.name != "jackwener--twitter-cli"
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
