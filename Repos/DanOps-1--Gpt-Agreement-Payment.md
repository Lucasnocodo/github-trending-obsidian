---
repo: DanOps-1/Gpt-Agreement-Payment
url: https://github.com/DanOps-1/Gpt-Agreement-Payment
owner: DanOps-1
owner_type: User
language: Python
license: MIT
description: "ChatGPT Plus/Team/Pro 订阅协议端到端重放工具集 · hCaptcha 视觉求解器 · 反欺诈机制实证研究 / End-to-end protocol replay toolkit for ChatGPT Plus/Team/Pro subscription with from-scratch hCaptcha solver and empirical anti-fraud research"
homepage: ""
stars: 1095
stars_per_day: 122
forks: 478
open_issues: 7
created: 2026-04-27
pushed_at: 2026-05-06
first_seen: 2026-05-01
week: "2026-W18"
month: "2026-05"
category: "安全"
subcategory: "反欺詐"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-01
use_case: "提供 ChatGPT Plus/Team/Pro 订阅协议的端到端重放工具，並包含 hCaptcha 视觉求解器和反欺诈机制实证研究。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-11"
contributor_count: 3
engagement: "high"
issue_close_rate: 13
repo_size_kb: 631
readme_length: 6680
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:779,2026-05-01:780,2026-05-02:877,2026-05-02:878,2026-05-03:917,2026-05-03:917,2026-05-04:964,2026-05-04:964,2026-05-05:1006,2026-05-06:1043,2026-05-07:1095"
tags:
  - github
  - "category/安全"
  - "lang/python"
  - "topic/adversarial_ml"
  - "topic/anti_fraud"
  - "topic/bug_bounty"
  - "topic/captcha_solver"
  - "topic/chatgpt"
aliases:
  - "Gpt-Agreement-Payment"
  - "DanOps-1/Gpt-Agreement-Payment"
  - "提供 ChatGPT Plus/Team/Pro 订阅协议的端到端重放工具，並包含 hCaptcha 视觉求解器和反欺诈"
---

# Gpt-Agreement-Payment

**1.1k** stars · **122** stars/天 · 建立 9 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`adversarial-ml` `anti-fraud` `bug-bounty` `captcha-solver` `chatgpt` `ctf-tools` `hcaptcha-solver` `mitmproxy` `playwright` `protocol-replay` `stripe` `vlm`

> [!summary] 一句話摘要
> 提供 ChatGPT Plus/Team/Pro 订阅协议的端到端重放工具，並包含 hCaptcha 视觉求解器和反欺诈机制实证研究。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (122 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要進行支付協議重放和安全研究的開發者和安全研究人員。
> **一句話重點** 這個專案不僅提供了支付協議的重放工具，還深入研究了反欺詐機制，對於安全研究者來說非常有價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "反欺詐" && p.file.name !== "DanOps-1--Gpt-Agreement-Payment" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 反欺詐 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到強大的支付協議重放和反欺詐研究能力，值得投入。

> [!abstract] 核心創新
> 提供了一個完整的支付協議重放工具，並包含從零實現的 hCaptcha 视觉求解器。

## 專案簡介

這個專案提供了一個完整的端到端重放工具，專注於 ChatGPT 的訂閱協議，從 Stripe Checkout 到 PayPal 授權，並最終獲取 OAuth refresh token。使用者只需提供一個有效的支付憑證和代理，整個流程能在 5 分鐘內完成。專案的亮點包括一個從零開始實現的 hCaptcha 视觉求解器，能夠處理 12 種已知題型，並且具有自愈功能的 daemon 模式，能夠無人值守運行數周。技術上，這個工具使用了 Python 和多種庫如 Playwright 和 mitmproxy，並依賴於 Camoufox 進行瀏覽器自動化，這使得它在處理複雜的網絡請求時非常高效。與其他類似工具相比，如 0x0funky/agent-sprite-forge，這個專案提供了更全面的支付流程重放，而不是僅僅專注於單一的 hCaptcha 求解。

它的設計考量了反欺詐機制，並提供了實證數據，這在同類工具中是相對少見的。使用者需要注意的是，這個工具並非開箱即用，首次配置可能需要 1-3 小時的時間，並且需要特定的環境設置。對於需要進行安全研究或合法 CTF 的使用者來說，這是一個強大的工具，但不建議用於非法用途，因為使用者需承擔所有法律責任。整體來說，這個專案適合有一定技術基礎的開發者和安全研究人員，並且在未來可能會持續更新以適應不斷變化的支付協議。

**技術棧**：`Python` · `Vue` · `JavaScript` · `TypeScript` · `CSS` · `HTML`

## 重點功能

- 端到端重放工具 — 支持從 Stripe Checkout 到 PayPal 授權的完整流程，使用者只需提供支付憑證。
- hCaptcha 视觉求解器 — 獨立可用，能夠處理 12 種已知題型，並使用 Playwright 進行自動化操作。
- 自愈環 daemon — 能夠無人值守運行數周，支持自動換 IP 和清理 DNS 配額。
- 反欺诈机制实证数据 — 提供詳細的反欺诈研究數據，幫助使用者理解和應對潛在的風險。
- 多種運行模式 — 支持單次、批量、自我交易和 daemon 模式，滿足不同使用場景的需求。

## 快速開始

1. 安裝後端依賴
```bash
pip install -r webui/requirements.txt
```
2. 構建前端
```bash
cd webui/frontend && pnpm i && pnpm build && cd ../..
```
3. 啟動服務器
```bash
python -m webui.server
```

## 程式碼範例

```python
[
  "# 先安裝依賴",
  "pip install requests curl_cffi playwright camoufox browserforge mitmproxy pybase64",
  "# 啟動單次完整流程",
  "xvfb-run -a python pipeline.py --config CTF-pay/config.paypal.json --paypal",
  "# 預期輸出：獲取 OAuth refresh_token"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案在建立 9 天內累積了 1095 stars（每天 122），forks 478（43.7%），顯示出強勁的社群參與度。主要貢獻者 DanOps-1 在安全研究和自動化領域有豐富的經驗，這使得專案的技術基礎非常穩固。它解決了在支付過程中自動化和反欺詐的痛點，這在市場上是相對缺乏的。專案的設計考量了多種支付方式和反欺詐機制，這使得它在功能上具有獨特性。社群的活躍度和開發者的背景都是推動這個專案受歡迎的重要因素。

## 適合誰使用

**目標受眾**：需要進行支付協議重放和安全研究的開發者和安全研究人員。

> [!example] 使用場景
> - 安全研究員用它來重放 ChatGPT 的訂閱流程，因為這能幫助他們測試和驗證支付系統的安全性，並且能夠快速獲取所需的 OAuth token。
> - 開發者用它來自動化 hCaptcha 的求解過程，因為這樣可以節省大量的手動操作時間，並且提高了成功率。
> - CTF 參賽者用它來研究和分析反欺詐機制，因為這提供了實證數據和有效的工具，幫助他們在比賽中獲得優勢。

## 架構分析

這個專案的架構設計為一個多層次的協議重放系統，主要由 pipeline.py 負責整體流程控制。每個子系統如 CTF-reg 和 CTF-pay 負責不同的協議階段，這樣的設計使得系統能夠靈活應對不同的支付流程。資料流從用戶的支付請求開始，經過 Stripe 和 PayPal 的授權，最終獲得 OAuth token。這樣的架構使得每個部分可以獨立測試和維護，但也帶來了整體系統的複雜性，特別是在配置和調試階段。擴展性方面，使用者可以根據需要添加新的支付方式或反欺詐機制，但這需要一定的技術能力和時間投入。

## 技術深入分析

這個專案的核心技術機制是基於多層次的協議重放系統，使用 Python 和多種庫如 Playwright 和 mitmproxy 進行自動化操作。它的 hCaptcha 视觉求解器使用了 CLIP 和 OpenCV 進行題型識別，這使得它在處理複雜的 captcha 時具有優勢。效能方面，整個流程在 daemon 模式下能夠持續運行數周，並且每次的 pipeline 運行時間約 5 分鐘。設計上，這個工具偏向於研究性質，代碼可讀性不高，這對於新手來說可能是一個挑戰。

選擇 Python 作為開發語言使得它在資料處理和自動化方面具有靈活性，但也可能導致性能瓶頸，特別是在高並發請求的情況下。技術風險方面，對於支付流程的變更，使用者需要及時更新代碼以適應新的協議，這可能會導致一定的維護負擔。整合方面，這個工具能夠與現有的 CI/CD pipeline 進行整合，但需要一定的適配工作。總體來說，這個專案在技術上具有挑戰性，適合有經驗的開發者和安全研究人員。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，但對於新手來說，理解整個流程可能需要一些時間。安裝過程中需要配置多個依賴，這可能會造成一些困難。整體來說，對於有一定技術基礎的使用者，能在 30 分鐘內完成基本配置並運行起來。

## 優缺點分析

> [!success] 優點
> - 提供完整的支付流程重放，適合需要進行安全測試的開發者。
> - 獨立的 hCaptcha 求解器，能夠處理多種題型，提升自動化效率。
> - 自愈環設計，能夠無人值守運行，減少人力成本。

> [!danger] 缺點
> - 首次配置需要較長時間，對新手不太友好。
> - 代碼風格較粗放，缺乏清晰的文檔和註釋。
> - 不支持免費帳號，限制了使用範圍。

> [!warning] 注意事項
> - PayPal 目前僅在 EU 開通，無法在其他地區使用。
> - 批量註冊的存活率約 2%，受限於 ChatGPT 的反欺詐機制。
> - 目前不支持免費帳號的路徑，需使用付費帳號進行測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化和安全測試的工具，但不提供完整的支付流程重放功能，適合單一功能的需求。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，但不涉及支付和反欺詐的功能，適合需要簡單 API 的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化和安全測試的工具，但不提供完整的支付流程重放功能，適合單一功能的需求。 | 如果你的需求僅限於自動化測試而不涉及支付流程的重放，這個工具會是更簡單的選擇。 | low，因為功能範圍較小，遷移成本低。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，但不涉及支付和反欺詐的功能，適合需要簡單 API 的開發者。 | 如果你只需要一個簡單的 GPT-2 接口，而不需要支付相關的功能，這個工具會更合適。 | low，因為兩者功能差異明顯，切換成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Gpt-Agreement-Payment** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化和安全測試的工具，但不提供完整的支付流程重放功能，適合單一功能的需求。 | 提供 GPT-2 的 API 接口，但不涉及支付和反欺詐的功能，適合需要簡單 API 的開發者。 |
> | 遷移成本 | - | low，因為功能範圍較小，遷移成本低。 | low，因為兩者功能差異明顯，切換成本低。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於自動化測試而不涉及支付流程的重放，這個工具 | 如果你只需要一個簡單的 GPT-2 接口，而不需要支付相關的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合進行安全研究和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次配置過程中可能需要手動處理 PayPal 的 OTP 驗證，這可能會導致延遲。
  - 解法：提前準備好可用的 PayPal 帳號，並確保能夠接收 OTP。
- [MEDIUM] 批量註冊的存活率低，可能導致大量帳號被封禁。
  - 解法：控制註冊速度，並定期檢查帳號狀態。
- [MEDIUM] hCaptcha 題型未覆蓋時，可能導致求解失敗。
  - 解法：在未覆蓋的情況下，使用 VLM 進行兜底處理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 對於需要進行支付協議重放的安全研究團隊 | 非常適合 | 這個工具提供了完整的支付流程和反欺詐研究數據，能夠滿足他們的需求。 |
| 小型開發團隊進行自動化測試 | 普通 | 雖然提供了自動化功能，但配置過程較為複雜，可能不適合小型團隊。 |
| 個人開發者進行簡單的安全測試 | 不適合 | 這個工具的配置和運行要求較高，對於個人開發者來說可能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到強大的支付協議重放和反欺詐研究能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個工具本身不需要高權限，但使用過程中可能會存取敏感資料如支付憑證。對於依賴的庫和工具，需注意其安全性和更新頻率，建議在受控環境中使用。整體來說，安全風險中等，使用時需謹慎。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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
| Forks | 478 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 631 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DanOps-1/Gpt-Agreement-Payment) |
| Topics | `adversarial-ml` `anti-fraud` `bug-bounty` `captcha-solver` `chatgpt` `ctf-tools` `hcaptcha-solver` `mitmproxy` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 85
>     "Vue" : 12
>     "JavaScript" : 2
>     "TypeScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DanOps-1](https://github.com/DanOps-1) | 23 |
> | [@DragonBaiMo](https://github.com/DragonBaiMo) | 1 |
> | [@Lium-7768](https://github.com/Lium-7768) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，主要透過 GitHub Issues 和 LINUX DO 進行討論。
**連結**：[文件](https://github.com/DanOps-1/Gpt-Agreement-Payment)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-03 ~ 2026-05-06）
> **活躍天數** 4 天 · **最新 commit** fix(tests): 去掉硬编码 /home/kali 绝对路径过 secret-scan

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/8) | feat(whatsapp): 删除 whatsapp_relay sidecar，加 POST /api/whatsa `enhancement` `help wanted` | 0 | 0 |
> | [#7](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/7) | fix(backend): preflight 异常风格 + 日志格式统一 `enhancement` `help wanted` `good first issue` | 0 | 0 |
> | [#6](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/6) | chore(infra): Dockerfile + docker-compose 一键部署 `enhancement` `help wanted` | 0 | 0 |
> | [#5](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/5) | feat(i18n): webui 前端国际化基础设施（vue-i18n 中英双语） `enhancement` `help wanted` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Gpt-Agreement-Payment
> 
> ChatGPT Team 订阅协议的端到端重放工具，附带从零实现的 hCaptcha 视觉求解器，以及一组真实运行采集的反欺诈机制实证数据。
> 
> [](LICENSE)
> [](https://www.python.org/)
> [](https://github.com/DanOps-1/Gpt-Agreement-Payment/actions)
> [](#法律边界)
> 
> > [!CAUTION]
> > **使用本项目即视为同意 [`NOTICE`](NOTICE) 的全部条款。** 项目按 AS IS 提供、无任何担保、维护者不负任何责任。仅限你拥有的系统 / 合法 CTF / 授权 bug bounty 项目 in-scope 资产 / 安全研究。**严禁**用于欺诈、规避支付、批量造号转售、违反第三方 ToS、未授权目标。一切法律责任由使用者自负。不接受条款就**不要使用**。
> 
> ---
> 
> ## 这是什么
> 
> 从抓包逆出 `Stripe Checkout → PayPal billing agreement → ChatGPT manual-approval → Codex OAuth + PKCE` 整条链路并实现成可运行客户端。给一个干净代理 + 一个支付凭证，命令跑完拿到 OAuth `refresh_token`。
> 
> 三个值得看的点：
> 
> - **hCaptcha 视觉求解器**（`CTF-pay/hcaptcha_auto_solver.py`，约 4000 行，独立可用）。VLM 主路径 + CLIP/OpenCV 启发式回退 + Playwright 人类动作合成，覆盖 12 种已知 hCaptcha 题型。
> - **反欺诈机制实证数据**。IP 字符串级精确指纹、批次关联延迟封禁、probe 层 vs ban 层分离。45 个号 24 小时存活率约 2% 的实测样本，含修正模型。详见 [`docs/anti-fraud-research.md`](docs/anti-fraud-research.md)。
> - **十二路自愈环 daemon**（`pipeline.py::daemon()`）。Webshare API 自动换 IP、CF DNS 配额清理、tmpfs 孤儿回收、gost 中继看门狗、DataDome 滑块自动拖拽等。设计目标是无人值守跑数周。
> 
> ---
> 
> ## 架构
> 
> ```mermaid
> flowchart LR
>     A[pipeline.py] --> B[CTF-reg/browser_register.pyCamoufox + Turnstile]
>     B --> C[CTF-pay/card.pyStripe Checkout 重放]
>     C --> D[Stripe confirm+ ChatGPT /approve]
>     D --> E[Camoufox PayPal协议授权]
>     E --> F[Stripe pollstate=succeeded]
>     F --> G[Camoufox 二次登录Codex OAuth + PKCE]
>     G --> H[refresh_tokenoutput/webui.db &#40;SQLite&#41;]
> ```
> 
> 详细子系统拆解、文件分工、协议链路细节看 [`docs/architecture.md`](docs/architecture.md)。
> 
> ---
> 
> ## 现状与门槛
> 
> 实事求是讲，这不是个开箱即用的工具。要把整条链路跑通，至少需要：
> 
> - 一个真实可登录的 PayPal 账号，第一次跑要人肉过一次邮箱 OTP 2FA
> - 一个出口在 EU / US 的代理（PayPal 锁地区，Stripe 锁国家）
> - 一个 Cloudflare zone（用于开 catch-all 子域注册邮箱）
> - 一台能跑 Camoufox + Playwright 的 Linux（约 5 GB 磁盘 + 2 GB 内存）
> - （可选）一个 OpenAI 兼容的 VLM API key，hCaptcha 求解用；家宽 / 伪家宽出口通常不会触发 hCaptcha，无 VLM 时也会降级到 CLIP
> - （可选）一个兼容 createTask/getTaskResult 协议的打码平台 API key，作为浏览器 passive captcha 的兜底
> 
> 第一次完整跑通通常要花 1–3 小时调通配置。daemon 模式跑稳后，单次 pipeline 约 5 分钟。
> 
> 代码偏研究性质，不追求可读性最大化。`CTF-pay/card.py` 是单文件 8000 行，按协议阶段而不是按抽象层分区。
> 
> ---
> 
> ## 上手
> 
> ### 新手路径：webui 配置向导（推荐）
> 
> 把 1–3 小时的手动调配压到 ~15 分钟。14 步 wizard + 实时 preflight 自检 + 内置运行控制器（SSE 日志流），生成 `CTF-pay/config.auto.json` + `CTF-reg/config.paypal-proxy.json` 两份配置。
> 
> ```bash
> # 1. 后端依赖
> pip install -r webui/requirements.txt
> 
> # 2. 前端构建（一次性）
> cd webui/frontend && pnpm i && pnpm build && cd ../..
> 
> # 3. 启动
> python -m webui.server
> # 浏览器打开 http://127.0.0.1:8765 ，首次访问跳 /setup 建管理员
> ```
> 
> 支持 Plus 和 Team 双订阅路径，公网访问通过 nginx 反代见 [`webui/README.md`](webui/README.md)。
> 
> ### 装
> 
> ```bash
> git clone https://github.com/DanOps-1/Gpt-Agreement-Payment
> cd Gpt-Agreement-Payment
> pip install requests curl_cffi playwright camoufox browserforge mitmproxy pybase64
> playwright install firefox
> camoufox fetch
> ```
> 
> hCaptcha 求解器的 ML 依赖（torch / transformers / opencv）建议单独装到 venv，约 4 GB：
> 
> ```bash
> python -m venv ~/.venvs/ctfml
> ~/.venvs/ctfml/bin/pip install torch transformers opencv-python pillow numpy
> ```
> 
> 完整依赖清单和系统包看 [`docs/installation.md`](docs/installation.md)。
> 
> ### 配
> 
> 复制模板，填值：
> 
> ```bash
> cp CTF-pay/config.paypal.example.json     CTF-pay/config.paypal.json
> cp CTF-reg/config.paypal-proxy.example.json   CTF-reg/config.paypal-proxy.json
> ```
> 
> 字段含义和 schema 看 [`docs/configuration.md`](docs/configuration.md)。
> 
> ### 跑
> 
> ```bash
> # 单次完整流程
> xvfb-run -a python pipeline.py --config CTF-pay/config.paypal.json --paypal
> 
> # 持续维护补号池
> xvfb-run -a python pipeline.py --config CTF-pay/config.paypal.json --paypal --daemon
> ```
> 
> 四种运行模式（单次 / 批量 / self-dealer / daemon）的差异和参数看 [`docs/operating-modes.md`](docs/operating-modes.md)。
> 
> ---
> 
> ## 文档
> 
> | 文档 | 内容 |
> |---|---|
> | [`docs/installation.md`](docs/installation.md) | 系统依赖、Python 包、ML venv、gost 中继、第一次登 PayPal |
> | [`docs/configuration.md`](docs/configuration.md) | 所有 JSON 字段、环境变量、CF API token 申请 |
> | [`docs/architecture.md`](docs/architecture.md) | 子系统、文件组织、协议链路细节 |
> | [`docs/operating-modes.md`](docs/operating-modes.md) | 单次 / 批量 / self-dealer / daemon 详细参数 |
> | [`docs/hcaptcha-solver.md`](docs/hcaptcha-solver.md) | 三层决策、12 题型、独立调用、扩展新题型 |
> | [`docs/daemon-mode.md`](docs/daemon-mode.md) | 12 路自愈环触发条件与状态机 |
> | [`docs/anti-fraud-research.md`](docs/anti-fraud-research.md) | 反欺诈实证完整数据与修正模型 |
> | [`docs/debugging.md`](docs/debugging.md) | 常见异常、产物路径、排错命令 |
> 
> ---
> 
> ## 已知限制
> 
> - **PayPal 仅 EU 开通**。Stripe 账号限制，只能以 IE 等欧盟身份下单。
> - **批量注册次日存活率约 2%**。这是 ChatGPT 反欺诈机制的批次关联效应导致的，不是工具本身的问题。详见 [`docs/anti-fraud-research.md`](docs/anti-fraud-research.md)。
> - **免费账号路径目前不通**。OpenAI 改了 free 账号二次登录流程，重定向到 `/add-phone` 没真实手机号绕不过；ChatGPT-Web client 的 access_token 调 Codex API audience 不匹配。
> - **Stripe runtime 指纹会漂**。`runtime.version` / `js_checksum` / `rv_timestamp` 大约几周一次需要重新对齐。
> - **hCaptcha 题型覆盖不全**。当前 12 种常见题，未覆盖时由 VLM 直出坐标兜底，不保证成功率。
> - **代码风格偏粗放**。`card.py` 单文件 8000 行，注释混中英文，不适合作为 Python 工程范例。
> 
> ---
> 
> ## 贡献
> 
> 最有价值的贡献按影响力排序：
> 
> 1. 新的 hCaptcha 题型 solver
> 2. Stripe / PayPal / OpenAI 出 breaking change 时的协议适配
> 3. 实战中观察到的新失败模式的 daemon 自愈分支（带日志）
> 4. 反欺诈实证数据补充（脱敏方式参考现有写法）
> 5. 文档完善 / 翻译
> 
> > ⚠️ **维护者无法手动复现 PR**。所以提 PR 时请按 [PR 模板](.github/PULL_REQUEST_TEMPLATE.md) 提供**详细说明 + 跑通证据**（按改动类型不同要求不同：solver 题型要 round JSON、协议适配要抓包对比、daemon 自愈要触发日志和恢复日志）。证据缺了 PR 直接关，不解释。
> 
> 完整工作流、代码风格、研究内容贡献的脱敏清单看 [`CONTRIBUTING.md`](CONTRIBUTING.md)。
> 社区准则看 [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)。
> 安全问题别公开提 issue，看 [`SECURITY.md`](SECURITY.md)。
> 
> ---
> 
> ## 致谢
> 
> 工具链上的几个核心依赖：
> 
> - [Camoufox](https://github.com/daijro/camoufox) — antidetect Firefox build，整个浏览器自动化层的基础
> - [mitmproxy](https://mitmproxy.org/) — 协议抓包
> - [Playwright](https://playwright.dev/) — 浏览器自动化
> - [curl_cffi](https://github.com/lexiforest/curl_cffi) — TLS 指纹模拟
> - [OpenAI CLIP](https://github.com/openai/CLIP) — 启发式 solver 的视觉骨架
> - [gost](https://github.com/go-gost/gost) — SOCKS5 中继
> 
> ## 社区
> 
> | 渠道 | 用途 |
> |---|---|
> | [**LINUX DO**](https://linux.do/) | 主要技术讨论、协议研究反馈、长期记录 |
> | QQ 群 **`1028722105`** | 中文圈实时交流 |
> | GitHub Issues | bug 报告与 PR（主入口） |
> 
> 特别感谢 LINUX DO 社区 —— 本项目最早的反馈来源、实测者、协议变化通报者都来自这里。
> 
> ---
> 
> ## 赞赏
> 
> 如果这个项目对你有帮助，欢迎请作者喝杯咖啡 ☕
> 
>   
> 
> ---
> 
> ## Star History
> 
>   
>     
>     
>     
>   
> 
> ---
> 
> ## 免责声明
> 
> > [!IMPORTANT]
> > **使用本项目即视为你已完整阅读、完全理解、并明确接受 [`NOTICE`](NOTICE) 的全部条款。** 不能接受 —— 不要使用本项目，删除所有副本。
> 
> License 是 [MIT](LICENSE)，但 License 本身不是免责的全部。完整免责条款在 [`NOTICE`](NOTICE)，下面是关键摘要：
> 
> **本项目按"现状（AS IS）"提供，不附任何形式的担保。** 包括但不限于适销性、适用于特定用途、不侵权、安全性、稳定性、与第三方服务的持续兼容性。你独自承担使用本项目的一切风险。
> 
> **仅限授权范围内使用。** 允许：你拥有的系统、合法 CTF、授权 bug bounty 项目内 in-scope 资产、安全研究。**禁止**：欺诈、规避支付、批量造号转售、违反第三方平台 ToS、未授权目标。
> 
> **法律责任完全由使用者承担。** 包括但不限于账号封禁、付款损失、刑事责任、民事赔偿、行政处罚、第三方索赔、声誉损失、商业损失。可能适用的法律包括美国 CFAA、欧盟 GDPR、英国 CMA、中国《刑法》第 285/286/287 条等。具体看 [`NOTICE`](NOTICE) 第 4 节。
> 
> **维护者无义务回复 issue、审查 PR、修复 bug、维护可用性、做协议适配。** 保留任何时候归档、删除、改名、停止维护本项目的权利，不需要事先通知。
> 
> **本项目不属于、不附属于、不被授权于、不被赞助于** OpenAI、Stripe、PayPal、Cloudflare、hCaptcha 或任何提及的第三方服务。所有商标归各自所有者。
> 
> 不确定使用是否合法 —— **不要运行**。先问律师，或者先跟目标平台的安全团队聊。

## 延伸閱讀

相關概念：[[反欺詐]] · [[自動化測試]] · [[安全研究]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[masterking32--MasterHttpRelayVPN|masterking32/MasterHttpRelayVPN]]

[GitHub](https://github.com/DanOps-1/Gpt-Agreement-Payment)

## 相關收錄

> [!note]- 直接競品（同子分類：反欺詐）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "反欺詐" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "DanOps-1--Gpt-Agreement-Payment" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["反欺詐","自動化測試","安全研究"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DanOps-1--Gpt-Agreement-Payment" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DanOps-1--Gpt-Agreement-Payment" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DanOps-1" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
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

> **2026-05-01** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 再次上榜，964 stars
- [[2026-05-03|2026-05-03]] — 再次上榜，917 stars
- [[2026-05-02|2026-05-02]] — 再次上榜，877 stars
- [[2026-05-01|2026-05-01]] — 首次收錄，779 stars
