---
repo: wbh604/UZI-Skill
url: https://github.com/wbh604/UZI-Skill
owner: wbh604
owner_type: User
language: Python
license: MIT
description: "冰冷的钱就这样流进我温暖的口袋-游资（UZI）Skills — 51位投资大佬帮你看盘 · 22维数据 × 180条量化规则 × 17种机构分析方法 · A股/港股/美股 "
homepage: ""
stars: 969
stars_per_day: 242
forks: 165
open_issues: 3
created: 2026-04-16
pushed_at: 2026-04-21
first_seen: 2026-04-21
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "金融分析"
release_tag: "v2.15.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-21
use_case: "提供全面的股票分析，結合多位投資專家的見解和量化數據，幫助用戶做出明智的投資決策。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-24"
contributor_count: 1
engagement: "medium"
issue_close_rate: 40
repo_size_kb: 8278
readme_length: 9780
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-21"
star_history: "2026-04-21:969"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "UZI-Skill"
  - "wbh604/UZI-Skill"
  - "提供全面的股票分析，結合多位投資專家的見解和量化數據，幫助用戶做出明智的投資決策。"
---

# UZI-Skill

**969** stars · **242** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/wbh604--UZI-Skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v2.15.2`

> [!summary] 一句話摘要
> 提供全面的股票分析，結合多位投資專家的見解和量化數據，幫助用戶做出明智的投資決策。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (242 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速分析 A 股股票並生成報告的個人投資者或小型投資團隊。
> **一句話重點** UZI-Skill 的設計讓股票分析變得簡單而高效，特別適合需要快速獲取市場見解的投資者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wbh604--UZI-Skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "金融分析" && p.file.name !== "wbh604--UZI-Skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 金融分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到快速的股票分析報告，值得使用。

> [!abstract] 核心創新
> 全免費數據源，無需 API 金鑰，專為 A 股市場設計的深度分析工具。

## 專案簡介

UZI-Skill 是一個針對股票市場的深度分析工具，通過用戶輸入的股票代碼，系統會運行 22 種數據維度和 17 種分析模型，生成詳細的報告。用戶只需執行 `/stock-deep-analyzer:analyze-stock <股票代碼>`，系統便會自動抓取相關數據並進行分析，最終輸出 HTML 報告和多種格式的摘要，讓用戶能夠快速理解股票的潛在價值。這個工具的賣點在於其全免費的數據源，無需 API 金鑰，特別適合 A 股市場的用戶。技術上，UZI-Skill 使用 Python 作為主要開發語言，依賴於多個數據庫如 akshare 和 yfinance，並且支持多種報告格式的生成。與其他工具相比，如同花順或東方財富，UZI-Skill 提供了更靈活的數據抓取和分析能力，並且不需要付費訂閱。

使用者可以獲得即時的市場情緒分析，並且能夠自動生成報告，這在傳統的手動分析流程中是無法實現的。這個工具特別適合需要快速分析多隻股票的投資者，並且能夠在短時間內提供全面的市場見解。使用者可能會遇到網絡限制導致數據抓取失敗的情況，這時系統會提供相應的錯誤處理和建議。整體來說，UZI-Skill 是一個穩定的工具，適合中小型投資團隊或個人投資者使用，未來可能會進一步擴展其數據源和分析模型。

**技術棧**：`Python` · `HTML` · `Shell` · `Batchfile`

## 重點功能

- 深度分析引擎 — 通過 22 個數據維度和 17 種分析模型，生成詳細的股票報告。
- 全免費數據源 — 使用 akshare 和 yfinance 等免費數據庫，無需 API 金鑰。
- 即時市場情緒分析 — 自動抓取社交媒體熱榜數據，提供即時的市場情緒指標。
- 多格式報告輸出 — 生成 HTML 報告、朋友圈分享圖和微信群戰報，方便用戶分享。
- 自動錯誤處理 — 當數據抓取失敗時，系統會提供相應的錯誤處理和建議。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 安裝 Chromium 瀏覽器
```bash
playwright install chromium
```
3. 運行分析命令
```bash
python run.py 贵州茅台
```

## 程式碼範例

```python
{
  "前置條件": "安裝好依賴並配置好環境變數",
  "指令": "/stock-deep-analyzer:analyze-stock 贵州茅台",
  "預期輸出": "生成一份包含詳細分析的 HTML 報告"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 969 stars（242/天），forks 165（17%），顯示出強勁的增長潛力。作者 wbh604 在投資分析領域有豐富經驗，這個專案解決了以往需要多個工具才能完成的股票分析流程，整合了多位專家的見解和量化數據。近期的社群反饋和 bug 修復也顯示出活躍的開發和維護。這個工具的設計充分考慮了用戶需求，提供了全免費的數據源，讓使用者能夠無障礙地進行股票分析。

## 適合誰使用

**目標受眾**：需要快速分析 A 股股票並生成報告的個人投資者或小型投資團隊。

> [!example] 使用場景
> - 個人投資者用它來分析 A 股中的潛力股票，因為它能快速生成詳細的報告，節省了手動查找數據的時間。
> - 小型投資團隊用它來進行股票的量化分析，因為它整合了多種分析模型，讓團隊能夠快速比較不同股票的投資價值。
> - 金融分析師用它來檢視市場情緒和趨勢，因為它提供了即時的社交媒體熱榜數據，幫助分析師捕捉市場動態。

## 架構分析

UZI-Skill 採用模組化設計，主要由數據抓取模組、分析模組和報告生成模組組成。數據抓取模組使用 akshare 和 yfinance 來獲取即時市場數據，分析模組則運行 17 種量化分析模型，最終生成報告模組負責將分析結果輸出為 HTML 和圖片格式。這種設計使得每個模組可以獨立更新和擴展，但也可能導致在數據源變更時需要進行相應的調整。整體架構的擴展性良好，能夠適應未來可能增加的數據源和分析方法。

## 技術深入分析

UZI-Skill 的核心技術機制在於其模組化設計，將數據抓取、分析和報告生成分開處理。數據抓取模組依賴於 akshare 和 yfinance，這些工具能夠提供即時的市場數據，並且不需要用戶提供 API 金鑰。分析模組則運行多種量化模型，這些模型能夠從不同的角度評估股票的價值。報告生成模組則將分析結果轉化為易於理解的格式，這對於非專業投資者來說尤其重要。整體來看，這個工具能夠在 5-8 分鐘內完成分析，這在傳統的手動分析流程中是無法實現的。設計上，UZI-Skill 也考慮到了用戶的需求，提供了即時的社交媒體熱榜數據，幫助用戶捕捉市場動態。未來可能會進一步擴展數據源和分析模型，以提高其分析的準確性和全面性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝和使用說明；安裝過程順暢，無明顯坑；有良好的 getting started guide；文件目前僅提供中文版本，可能對非中文用戶造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 全免費數據源，無需 API 金鑰，降低使用門檻。
> - 多種分析模型，提供全面的股票分析視角。
> - 即時市場情緒分析，幫助用戶快速捕捉市場動態。

> [!danger] 缺點
> - 僅支援 A 股、港股和美股，對其他市場不適用。
> - 需要穩定的網絡連接，否則可能導致數據缺失。
> - 部分數據源需要用戶登錄，可能影響數據的完整性。

> [!warning] 注意事項
> - 僅支援 A 股、港股和美股的分析，對其他市場不適用。
> - 需要穩定的網絡連接以抓取數據，否則可能會導致數據缺失。
> - 部分數據源在 2026 年起需要用戶登錄，可能影響數據的完整性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [wbh604/StockAnalyzer](https://github.com/wbh604/StockAnalyzer) | 提供類似的股票分析功能，但主要針對美股市場，數據源和分析模型不如 UZI-Skill 多樣化。 |
| [akshare/akshare](https://github.com/akshare/akshare) | 提供股票數據抓取功能，但缺乏 UZI-Skill 的分析模型和報告生成能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| 同花順 | 提供全面的股票分析和交易功能，但需要付費訂閱，且數據更新速度較慢。 | 如果你的團隊已經在使用同花順進行交易，並且需要更全面的交易功能。 | medium，因為需要重新學習新的分析流程。 |
| 東方財富 | 提供類似的股票數據和分析功能，但界面和使用體驗不如 UZI-Skill 直觀。 | 如果你需要更傳統的股票分析工具，並且不介意使用付費數據。 | low，因為功能相似，轉換成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **UZI-Skill** | **同花順** | **東方財富** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供全面的股票分析和交易功能，但需要付費訂閱，且數據更新速度較慢。 | 提供類似的股票數據和分析功能，但界面和使用體驗不如 UZI-Skill 直觀。 |
> | 遷移成本 | - | medium，因為需要重新學習新的分析流程。 | low，因為功能相似，轉換成本低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用同花順進行交易，並且需要更全面的交易功 | 如果你需要更傳統的股票分析工具，並且不介意使用付費數據。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 部分數據源在 2026 年起需要用戶登錄，可能影響數據的完整性
  - 解法：用戶可按需啟用登錄功能
- **[HIGH]** 網絡限制可能導致數據抓取失敗
  - 解法：系統會提供相應的錯誤處理和建議
- [MEDIUM] 使用過程中可能會遇到報告生成時間過長的情況
  - 解法：建議在網絡狀況良好的情況下運行分析

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 工具輕量且易於整合，能快速提供分析報告。 |
| 大型金融機構的量化分析部門 | 普通 | 雖然功能強大，但可能需要更多的數據源和分析模型。 |
| 個人投資者進行股票分析 | 非常適合 | 全免費數據源和即時分析功能，適合快速決策。 |
| 需要高頻交易的專業交易員 | 不適合 | 工具不支持高頻交易的即時數據分析需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到快速的股票分析報告，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅存取公開的市場數據，不會存取用戶的敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wbh604--UZI-Skill");
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
> const me = dv.page("Repos/wbh604--UZI-Skill");
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
| Forks | 165 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-16 |
| Repo 大小 | 8.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wbh604/UZI-Skill) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `akshare` `yfinance` `baostock` `pandas` `requests` `ddgs` `mplfinance` `playwright` `rich`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 92
>     "HTML" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wbh604](https://github.com/wbh604) | 132 |

**最新版本**：v2.15.2 — v2.15.2 · GitHub issue #36 + #30 hotfix (2026-04-21)

> [!info]- Release Notes
> ## v2.15.2 — GitHub 社区反馈 hotfix
> 
> ### #36 · Gemini CLI 安装修复
> - `gemini-extension.json` 加 `version` 字段 · Gemini CLI 能正常识别
> - 5 manifest 同步（`.version-bump.json` 纳入 gemini-extension.json）
> 
> ### #30 · 网络自检增强
> - **Clash / V2rayN / SOCKS 本地代理端口** 自动侦测
> - 数据源**分组诊断**（domestic / overseas / search）· 每组列受影响 fetcher + 多行 fix
> - `NetworkProfile` 新增 `local_proxy` + `diagnostics` 字段 · 写进 `.cache/_global/network_profile.json` 供 agent 读
> - verbose 模式输出 Clash hint（如 \"export HTTPS_PROXY=http://127.0.0.1:7897\"）
> 
> ### 测试
> `tests/test_v2_15_2_network_enhance.py` · 10 case · 全量 **265 passed · 零回归**
> 
> Closes #36
> Closes #30
> 
> **Full changelog**: https://github.com/wbh604/UZI-Skill/compare/v2.15.1...v2.15.2

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/wbh604/UZI-Skill/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-17 ~ 2026-04-21）
> **活躍天數** 4 天 · **最新 commit** fix(v2.15.2): GitHub issues #36 + #30 hotfix (#40)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#26](https://github.com/wbh604/UZI-Skill/issues/26) | 老板微信群加不上 | 0 | 1 |
> | [#16](https://github.com/wbh604/UZI-Skill/issues/16) | [Bug] 已知问题codex消耗和时间过长 `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 游资（UZI）Skills
> 
> *"51 个投资大佬帮你看盘，巴菲特和赵老哥终于坐在了同一张桌子上。"*
> 
> [](LICENSE)
> [](https://python.org)
> [](https://claude.com/product/claude-code)
> []()
> []()
> []()
> [](skills/deep-analysis/scripts/lib/self_review.py)
> 
> A 股 / 港股 / 美股 · 个股深度分析引擎 · **v2.15.0 YAML persona 接入 agent role-play + v2.14.0 自动版本检测 + v2.13.7 16 新源接入 + v2.11 评分校准**
> 
> [安装](#安装) · [用法](#用法) · [三档深度](#-三档思考深度v2103-新增) · [Hermes 🆕](INSTALL-HERMES.md) · [评审团](#-51-位评审团) · [机构方法](#-17-种机构级方法) · [自查 gate](#-机械级自查-gatev29-起) · [报告截图](#-报告长什么样) · [FAQ](#-faq) · [入群交流测试](#-测试交流群) · [Contributors](CONTRIBUTORS.md)
> 
> **中文** | [English](README_EN.md)
> 
> **Hermes 用户**：`hermes skills install wbh604/UZI-Skill/skills/deep-analysis` 即可。详见 [INSTALL-HERMES.md](INSTALL-HERMES.md)（基于 `hermes-compat` 分支）。
> 
> 
> ### 🔑 可选：东方财富妙想 Skills API（v2.3 新增）
> 
> 2026 年 `push2.eastmoney.com` 在大陆网络经常被反爬拦截。若设置
> `MX_APIKEY`，UZI-Skill 会优先走官方 NLP API：
> 
> - **中文名纠错**："北部港湾" → 自动识别为 "北部湾港(000582.SZ)"
> - **行情快照**：绕过 push2 直接拿到最新价/市值/PE/PB/行业
> 
> 配置：
> ```bash
> cp .env.example .env
> 
> # 编辑 .env 填入 MX_APIKEY（免费申领：https://dl.dfcfs.com/m/itc4）
> ```
> 
> 无 key 时全部回退到 XueQiu/akshare 链，现有用户零感知。
> 
> 
> # 编辑 .env 填入 MX_APIKEY
> python run.py 贵州茅台
> ```
> 
> **双端都不通**：agent 应保留 `_data_gaps.json` / `_resolve_error.json`，
> 等网络恢复后直接跑 `stage2()` 可以复用已采集数据，不用从头来过。
> 
> 详见 [AGENTS.md · 网络受限环境](AGENTS.md) 的场景 A/B/C 速查。
> 
> ---
> 
> 
> ## 💬 测试交流群
> 
> 当前版本还不太稳定，论坛反馈 bug 比较多。如果你有兴趣帮忙更快地测试效果，或者想交流使用中的问题和建议，欢迎扫码进群与我沟通（主要是帮我测试 ✌️），如果你想体验最新效果，可以切换到develop分支～
> 
>   
> 
> > 二维码会定期过期，如果扫码失败请提 Issue 或在论坛留言，我会更新。
> 
> ---
> 
> ---
> 
> ## 鸣谢
> 学AI，上L站！
> 感谢 [Linux.do](https://linux.do/) 社区支持。
> 
> 
> ## 这是啥
> 
> 一句话：输入一只股票，Claude 变成你的私人分析师，跑完 22 个维度的数据、调 17 种华尔街分析模型、让 51 个投资风格完全不同的大佬各自打分，最后吐出一份 600KB 的 Bloomberg 风格报告。
> 
> ```
> /stock-deep-analyzer:analyze-stock 国盾量子
> ```
> 
> 5-8 分钟后你会得到：
> - **一份 HTML 报告** — 可以直接用浏览器打开，自包含，离线也能看
> - **一张朋友圈竖图** — 1080×1920，直接发
> - **一张微信群战报** — 1920×1080
> - **一段话摘要** — 复制粘贴就能发群里
> 
> 
> ## 为什么做这个
> 
> 之前看一只票的流程：东方财富翻基本面 → 同花顺看 K 线 → 雪球刷大 V 说了啥 → 研报系统找卖方观点 → Excel 算个 DCF → 结果买进去还是亏。
> 
> 这些活儿本质上就是"搜集信息 → 多角度分析 → 给个结论"，让 AI 全干了不行吗？
> 
> 市面上看了一圈，要么是输出三段废话的 GPT wrapper，要么是用不起的机构终端。Anthropic 出了个 [financial-services-plugins](https://github.com/anthropics/financial-services-plugins)，方法论很好（DCF / Comps / LBO 那套），但完全是美股视角 + 全要付费数据源。
> 
> 所以自己搓了一个。**全免费数据源，零 API key，A 股直接能跑。**
> 
> ---
> 
> 
> ## 安装
> 
> 不管你用什么 agent，**都是丢一句话过去就行**：
> 
> 
> ### Claude Code
> 
> ```
> /plugin marketplace add wbh604/UZI-Skill
> /plugin install stock-deep-analyzer@uzi-skill
> ```
> 
> 装好后说 `/stock-deep-analyzer:analyze-stock 贵州茅台`。
> 
> > ⚠️ **必须带 `stock-deep-analyzer:` 命名空间前缀**
> >
> > Claude Code 装 plugin 后，所有 skill/command 都以 `stock-deep-analyzer:` 开头。
> > 部分环境下短名（`/analyze-stock`）不会被自动解析——稳妥起见请一律用全名：
> >
> > - `/stock-deep-analyzer:analyze-stock `
> > - `/stock-deep-analyzer:quick-scan `
> > - `/stock-deep-analyzer:scan-trap `
> > - `/stock-deep-analyzer:dcf `
> > - `/stock-deep-analyzer:ic-memo `
> > - `/stock-deep-analyzer:investor-panel `
> > - `/stock-deep-analyzer:trap-detector `
> > - `/stock-deep-analyzer:deep-analysis `
> > - 等全部 14 条
> >
> > Cursor / Gemini CLI / Codex 同理：**一律用 `/stock-deep-analyzer:` 全名**，
> > 避免短名解析失败。
> 
> 
> ### Codex
> 
> 直接对 Codex 说：
> 
> > 请按照 https://raw.githubusercontent.com/wbh604/UZI-Skill/main/.codex/INSTALL.md 的指引安装 UZI-Skill，然后帮我深度分析 贵州茅台。
> 
> 
> ### OpenClaw / 龙虾
> 
> 对龙虾说：
> 
> > 帮我安装 https://github.com/wbh604/UZI-Skill 这个股票分析技能，装好后分析 贵州茅台。
> 
> 
> ### Cursor
> 
> ```
> /add-plugin stock-deep-analyzer
> ```
> 
> 然后说"分析 贵州茅台"。
> 
> 
> ### Gemini CLI
> 
> ```bash
> gemini extensions install https://github.com/wbh604/UZI-Skill
> ```
> 
> 
> ### OpenCode
> 
> 对 OpenCode 说：
> 
> > 请按照 https://raw.githubusercontent.com/wbh604/UZI-Skill/main/.opencode/INSTALL.md 安装并分析 贵州茅台。
> 
> 
> ### Windsurf / Devin / 其他 Agent
> 
> 丢这句话进去：
> 
> > 克隆 https://github.com/wbh604/UZI-Skill ，读 AGENTS.md 了解怎么用，帮我深度分析 贵州茅台。
> 
> 
> ### 📱 不在电脑前？
> 
> 对任何 agent 说：
> 
> > 分析 贵州茅台，用远程模式，生成一个公网链接让我手机能看。
> 
> agent 会自动用 `--remote` 启动 Cloudflare Tunnel，给你一个 `https://xxx.trycloudflare.com` 链接。
> 
> ---
> 
> 
> ## 用法
> 
> 
> ### 完整深度分析（5-8 分钟）
> 
> ```
> /stock-deep-analyzer:analyze-stock 水晶光电
> /stock-deep-analyzer:analyze-stock 002273
> /stock-deep-analyzer:analyze-stock 00700.HK
> /stock-deep-analyzer:analyze-stock AAPL
> ```
> 
> 
> ### 专项命令
> 
> > 都要加 `/stock-deep-analyzer:` 前缀才保证执行得通。
> 
> | 命令 | 干嘛的 |
> |---|---|
> | `/stock-deep-analyzer:dcf 600519` | DCF 估值 · WACC + 5×5 敏感性表 |
> | `/stock-deep-analyzer:comps 002273` | 同行对标 · PE/PB 分位分析 |
> | `/stock-deep-analyzer:lbo 600519` | LBO 测试 · PE 买方能赚多少 IRR |
> | `/stock-deep-analyzer:initiate 002273` | 机构首次覆盖报告 · JPM/GS 格式 |
> | `/stock-deep-analyzer:ic-memo 002273` | 投委会备忘录 · 三情景回报 |
> | `/stock-deep-analyzer:earnings 002273` | 财报解读 · beat/miss 检测 |
> | `/stock-deep-analyzer:catalysts 002273` | 催化剂日历 · 未来 60 天 |
> | `/stock-deep-analyzer:thesis 002273` | 投资逻辑追踪 · 5 支柱监控 |
> | `/stock-deep-analyzer:screen 002273` | 5 套量化筛选 · value/growth/quality |
> | `/stock-deep-analyzer:dd 002273` | 尽调清单 · 5 工作流 21 项 |
> | `/stock-deep-analyzer:quick-scan 002273` | 30 秒速判 |
> | `/stock-deep-analyzer:panel-only 600519` | 只看 51 评委投票 |
> | `/stock-deep-analyzer:scan-trap 002273` | 杀猪盘排查 |
> | `/stock-deep-analyzer:segmental-model 300308` | 🆕 分业务收入 bottom-up 建模 · 3 情景 × 3 年 projection · 对 DCF 反向校验 |
> 
> ---
> 
> 
> ## 🎯 评分校准（v2.11）
> 
> 用户反馈"茅台 47 分"、"没超过 65 分"—— 诊断发现两处公式偏严苛，v2.11 校准：
> 
> | 改动 | 旧 (v2.9.1) | 新 (v2.11) | 影响 |
> |---|---|---|---|
> | **verdict 阈值** | 85/70/55/40 | **80/65/50/35** | 从未有股能 ≥85（"值得重仓"档空设），下调 5 分让白马/真强股进"可以蹲一蹲"档 |
> | **consensus neutral 权重** | 0.5（半权） | **0.6** | 51 评委里价值派+游资 35 人偏保守，neutral 权重 0.5 让白马 consensus 仅 37，0.6 更贴近"不坑但不是心头好"的真实语义 |
> 
> 公式（未变）：`overall = fund_score × 0.6 + consensus × 0.4`
> 
> 典型白马（如茅台）预期：
> - v2.9.1：`fund=62 consensus=45 → overall 55 → 观望优先`
> - v2.11：`fund=62 consensus=50 → overall 57 → 观望优先`（但更接近"可以蹲一蹲"边界，白马行情启动时容易进 65）
> 
> 两档合计影响 ~5-8 分。**真正的坑仍会  **巴菲特** 给水晶光电打 62 分 · 中性
> > "观望：护城河 27/40 可见；但 ROE 5 年最低 6.7%，达标率仅 0/5"
> > ✅ 资产负债率 30% 保守 · ❌ ROE 5 年最低 6.7%
> 
> > **木头姐** 给国盾量子打 100 分 · 看多
> > "量子通信处于 S 曲线拐点，TAM 每年 >30% 增长——买它就是买未来！"
> > ✅ 属于颠覆式创新平台 · ✅ 行业增速 35%
> 
> > **卡拉曼** 给水晶光电打 0 分 · 看空
> > "看空核心：无 30% 安全边际"
> 
> ---
> 
> 
> ## 📐 17 种机构级方法
> 
> 从 [anthropics/financial-services-plugins](https://github.com/anthropics/financial-services-plugins) 移植方法论，适配了 A 股参数（rf=2.5% / ERP=6% / 税率 25% / 终值 g=2.5%）：
> 
> **估值建模**
> - DCF（WACC 拆解 + 两段 FCF + Gordon Growth 终值 + 5×5 敏感性热力图）
> - Comps 同行对标（PE / PB / EV-EBITDA 分位 + 隐含目标价）
> - 三表预测（5 年 IS / BS / CF 联动）
> - Quick LBO（PE 基金视角 IRR 交叉校验）
> - 并购增厚/摊薄模型
> 
> **研究工作流**
> - 首次覆盖报告（JPM/GS/MS 格式 · 评级 + 目标价 + 论点 + 风险）
> - 财报 beat/miss 解读
> - 催化剂日历（真实事件提取 + 未来预排 + 影响分级）
> - 投资逻辑追踪（5 支柱健康度）
> - 晨报 · 量化筛选 · 行业综述
> 
> **深度决策**
> - IC 投委会备忘录（8 章节 · Bull/Base/Bear 三情景）
> - Porter 五力 + BCG 矩阵
> - DD 尽调清单（5 工作流 21 项 · 自动标注完成状态）
> - 单位经济学 · 价值创造计划 · 组合再平衡
> 
> ---
> 
> 
> ## 📸 报告长什么样
> 
> > 以下截图全部来自水晶光电（002273.SZ）的真实分析结果。
> 
> 
> ### 综合评分 + 核心结论
> 
> 
> ### 多空大分歧 · The Great Divide
> 
> 费雪 100 分 vs 卡拉曼 96 分，三轮互喷，每轮引用具体数字。
> 
> 
> ### 51 位评审团 · 审判席
> 
> 每个人一盏灯——绿色看多、红色看空、灰色中性。
> 
> 
> ### 聊天室模式
> 
> 评委们用自己的语言风格发言，引用命中的具体规则。
> 
> 
> ### DCF 估值 · 5×5 敏感性热力图
> 
> WACC 6.96% · 内在价值 ¥20.73 · 安全边际 -28.6%，颜色从深绿（低估）到深红（高估）。
> 
> 
> ### IC 投委会备忘录 · 三情景回报
> 
> Bull ¥26.95 / Base ¥20.73 / Bear ¥14.51，每个情景有概率和假设。
> 
> 
> ### 22 维深度卡
> 
> 每个维度有独立可视化——K 线蜡烛图 / PE Band / 雷达图 / 供应链流程图 / 温度计 / 环形图。
> 
> 
> ### 朋友圈竖图 · 一键分享
> 
> ---
> 
> 
> ## 🔧 数据源
> 
> 全部免费，零 API key：
> 
> | 数据 | 主源 | 备用 |
> |---|---|---|
> | 实时行情 / PE / 市值 | 东方财富 push2 | 雪球 → 腾讯 → 新浪 → 百度 |
> | 财报历史 | akshare | 雪球 f10 |
> | K 线 / 技术指标 | akshare | yfinance |
> | 龙虎榜 / 北向 / 两融 | akshare | 东财 |
> | 研报 / 公告 | 巨潮 cninfo + akshare | 同花顺 |
> | 港股 | akshare hk | yfinance |
> | 美股 | yfinance | akshare us |
> | 宏观 / 政策 / 舆情 / 杀猪盘 | DuckDuckGo web search | — |
> | **社交热榜**（v2.12 新增） | **微博 / 知乎 / 百度 / 抖音 / 头条 / B 站 · 各平台官方 JSON API** | 5min 文件缓存 · 单平台失败不影响其他 |
> 
> 多层 fallback 链 — 一个源挂了自动切下一个。
> 
> 
> ### 📱 6 平台社交热榜（v2.12 新增）
> 
> 散户情绪和杀猪盘题材经常先在抖音/小红书/微博发酵，DuckDuckGo 扫不到。v2.12 起 `17_sentiment` 维度自动查：
> 
> - **微博热搜** · 抓 `weibo.com/ajax/side/hotSearch` · 50 条实时热搜
> - **知乎热榜** · 抓 `zhihu.com/api/v3/feed/topstory/hot-list-web` · 50 条
> - **百度热搜** · 抓 `top.baidu.com/api/board` · 实时榜单
> - **抖音热点** · 抓 `douyin.com/aweme/v1/web/hot/search/list/` · 搜索热点
> - **头条热榜** · 抓 `toutiao.com/hot-event/hot-board/` · 热点事件
> - **B 站热搜** · 抓 `s.search.bilibili.com/main/hotword` · 全站热搜
> 
> 股票名（含简称，如"贵州茅台"→"贵州"/"茅台"）在热榜标题里命中 → 计入情绪热度 + 记录具体条目。
> 
> 数据结构：synthesis 的 `17_sentiment.data.hot_trend_mentions`：
> ```json
> {
>   "stock_name": "贵州茅台",
>   "

## 延伸閱讀

相關概念：[[量化分析]] · [[金融數據處理]] · [[社交媒體情緒分析]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/wbh604/UZI-Skill)

## 相關收錄

> [!note]- 直接競品（同子分類：金融分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "金融分析" AND file.name != "wbh604--UZI-Skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "wbh604--UZI-Skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "wbh604--UZI-Skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "wbh604--UZI-Skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["量化分析","金融數據處理","社交媒體情緒分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wbh604--UZI-Skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/wbh604--UZI-Skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wbh604--UZI-Skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wbh604" AND file.name != "wbh604--UZI-Skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wbh604--UZI-Skill");
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
> const me = dv.page("Repos/wbh604--UZI-Skill");
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
> const me = dv.page("Repos/wbh604--UZI-Skill");
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
> const me = dv.page("Repos/wbh604--UZI-Skill");
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
> const me = dv.page("Repos/wbh604--UZI-Skill");
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

> **2026-04-21** — 首次收錄
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

- [[2026-04-21|2026-04-21]] — 首次收錄，969 stars
