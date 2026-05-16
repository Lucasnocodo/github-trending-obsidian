---
repo: ywnd1144/Gopay_plus_automatic
url: https://github.com/ywnd1144/Gopay_plus_automatic
owner: ywnd1144
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 876
stars_per_day: 292
forks: 531
open_issues: 5
created: 2026-05-12
pushed_at: 2026-05-13
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "自動化 ChatGPT Plus 訂閱工具，透過 GoPay 完成支付。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-19"
contributor_count: 1
engagement: "high"
issue_close_rate: 20
repo_size_kb: 52825
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:712,2026-05-15:793,2026-05-16:876"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "Gopay_plus_automatic"
  - "ywnd1144/Gopay_plus_automatic"
  - "自動化 ChatGPT Plus 訂閱工具，透過 GoPay 完成支付。"
---

# Gopay_plus_automatic

**712** stars · **712** stars/天 · 建立 1 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 自動化 ChatGPT Plus 訂閱工具，透過 GoPay 完成支付。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (712 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要自動化 ChatGPT Plus 訂閱流程的開發者，特別是熟悉 Python 和 gRPC 的使用者。
> **一句話重點** 這個專案展示了如何利用自動化技術簡化繁瑣的訂閱流程，特別是在特定市場中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "ywnd1144--Gopay_plus_automatic" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，能夠自動化訂閱流程，值得投入。

> [!abstract] 核心創新
> 專案提供了一個完整的自動化 ChatGPT Plus 訂閱解決方案，並支持多種 OTP 接收方式。

## 專案簡介

這個專案是為了自動化 ChatGPT Plus 的訂閱過程，使用者只需提供一個 ChatGPT 的 `access_token`，系統會在約 20 秒內完成從 Stripe 到 Midtrans 再到 GoPay 的支付流程。整個過程包括自動創建訂單、處理 OTP 驗證碼、輸入 GoPay PIN，最終將帳號升級為 ChatGPT Plus。這個工具的核心在於其編排器（orchestrator），它負責接收請求並協調支付流程，並且支持多號批量訂閱。技術上，專案依賴 Python 和 gRPC 進行支付處理，並且需要配置 SOCKS5 代理以確保 IP 地區符合要求。

與其他類似工具相比，如 `0x0funky/agent-sprite-forge`，這個專案專注於印尼市場的 GoPay 支付，並且提供了多種 OTP 接收方案，包括手動、SMS API 和 WhatsApp。這使得使用者能夠根據需求選擇最合適的方式來獲取 OTP，從而提高了靈活性。使用者在部署時需注意風控問題，例如 IP 限制和帳號的反欺詐檢查，這些都是在使用過程中可能遇到的挑戰。整體來看，這個專案適合有一定技術基礎的使用者，並不建議完全沒有經驗的使用者自行部署。

**技術棧**：`Python 3.10` · `gRPC` · `Node.js 18+`

## 重點功能

- 全自動訂閱流程 — 只需提供 `access_token`，系統自動完成支付和 OTP 驗證。
- 支持多號批量訂閱 — 可以同時處理多個帳號的訂閱請求。
- 靈活的 OTP 接收方案 — 支持手動、SMS API 和 WhatsApp 三種方式獲取 OTP。
- 基於 gRPC 的支付核心 — 提供高效的支付處理，支持快速響應。
- 詳細的配置選項 — 用戶可根據需求自定義配置，適應不同場景。

## 快速開始

1. 準備伺服器環境
```bash
apt update && apt upgrade -y && apt install -y python3 python3-pip curl git
```
2. 拉取專案代碼
```bash
git clone https://github.com/ywnd1144/Gopay_plus_automatic.git
```
3. 安裝 Python 依賴
```bash
pip install -r requirements.txt
```
4. 啟動編排器
```bash
python3 orchestrator.py
```

## 程式碼範例

```python
{
  "前置條件": "確保服務已啟動並運行。",
  "指令": "curl -X POST http://localhost:8800/subscribe -H \"Authorization: Bearer my-secret-token-123\" -d '{\"session_token\": \"eyJhbGciOiJSUzI1NiIs...\"}'",
  "預期輸出": "{\"ok\": true, \"charge_ref\": \"A1xxxxxxxxxxxxxxxxxxxxxxx\", \"elapsed_ms\": 19928}"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 712 stars（712/天），forks 459（64.5%），這顯示出極高的使用者參與度。專案的作者 ywnd1144 似乎專注於開源工具的開發，這個專案解決了在印尼市場中，使用 GoPay 進行 ChatGPT Plus 訂閱的需求，之前的解決方案往往需要手動操作，效率低下。此專案的推出正好填補了這一空白。社群的活躍度也反映在開放的 Issues 上，儘管解決率不高，但仍有使用者在積極交流。這樣的情況可能會吸引更多開發者參與改進和擴展功能。

## 適合誰使用

**目標受眾**：需要自動化 ChatGPT Plus 訂閱流程的開發者，特別是熟悉 Python 和 gRPC 的使用者。

> [!example] 使用場景
> - 後端工程師用它來自動化 ChatGPT Plus 訂閱流程，因為手動操作繁瑣且容易出錯。
> - 數據分析師用它來批量訂閱多個 ChatGPT 帳號，因為可以節省大量時間並提高效率。
> - 開發者用它來測試 ChatGPT Plus 的 API 整合，因為能快速獲得訂閱並進行功能測試。

## 架構分析

專案由三個主要服務組成：編排器（orchestrator）、支付核心（plus_gopay_links）和 OTP 來源。編排器負責接收請求並協調整個流程，支付核心使用 gRPC 處理支付請求，並根據配置選擇不同的 OTP 來源。這種架構設計使得整個系統能夠靈活應對不同的使用場景，並且能夠快速擴展。選擇 gRPC 作為通訊協議的優勢在於其高效的性能和低延遲，這對於支付處理至關重要。整體架構的可擴展性和靈活性使得未來可以輕鬆集成新的功能或服務。

## 技術深入分析

專案的核心在於其編排器和支付核心的設計。編排器使用 Python 實現，負責接收 HTTP 請求並協調整個訂閱流程，這使得使用者能夠通過簡單的 API 調用來完成複雜的操作。支付核心則使用 gRPC 進行高效的支付處理，這樣的選擇能夠降低延遲並提高整體性能。整個系統的設計考慮到了擴展性，未來可以根據需求增加新的 OTP 來源或支付方式。由於專案依賴於外部 API 和服務，這可能會帶來一定的風險，例如服務中斷或變更導致的功能失效。整合到現有的 CI/CD pipeline 中相對簡單，因為其提供了清晰的 API 接口，並且可以輕鬆地與其他工具鏈進行配合。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和配置步驟，對於有經驗的使用者來說相對清晰。安裝過程中可能會遇到一些依賴問題，但整體上是順暢的。文件中缺乏中文或多語言支持，可能會對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，節省時間和人力成本。
> - 支持多種 OTP 接收方式，靈活性強。
> - 使用 gRPC 提高了支付處理的效率。

> [!danger] 缺點
> - 需要一定的技術背景才能正確配置和使用。
> - 依賴於外部服務的穩定性，可能會受到影響。
> - 風控問題可能導致訂閱失敗，需謹慎處理。

> [!warning] 注意事項
> - 僅支援印尼 GoPay 帳號，其他地區的帳號無法使用。
> - 需要 SOCKS5 代理以確保 IP 地區符合要求。
> - 不建議沒有技術基礎的使用者自行部署。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化多種訂閱服務，但不專門針對 GoPay 支付。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的自動化功能，但主要針對其他支付平台。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多種訂閱服務的自動化，但不專門針對 GoPay 支付，可能需要更多的手動配置。 | 如果你的需求涉及多種支付平台的自動化，這個工具可能更合適。 | medium，因為需要重新配置和調整現有流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的自動化功能，但主要針對其他支付平台，使用上可能不如本專案方便。 | 如果你的業務主要集中在其他支付平台，這個工具可能更適合。 | high，因為需要重新設計整個支付流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Gopay_plus_automatic** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多種訂閱服務的自動化，但不專門針對 GoPay 支付，可能需要更多的手動配置。 | 提供類似的自動化功能，但主要針對其他支付平台，使用上可能不如本專案方便。 |
> | 遷移成本 | - | medium，因為需要重新配置和調整現有流程。 | high，因為需要重新設計整個支付流程。 |
> | 適用場景 | 主要場景 | 如果你的需求涉及多種支付平台的自動化，這個工具可能更合適。 | 如果你的業務主要集中在其他支付平台，這個工具可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合有技術背景的開發者進行實驗，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用過程中可能遇到 Cloudflare 限流問題，導致支付失敗。
  - 解法：使用提供的繞過腳本，或多次重試。
- **[HIGH]** Midtrans 反欺詐檢查可能導致訂閱失敗。
  - 解法：避免短時間內重複使用同一號碼進行訂閱。
- [MEDIUM] 需要確保使用的 IP 是日本或台灣地區的出口 IP。
  - 解法：使用 SOCKS5 代理進行連接。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要自動化多個 ChatGPT Plus 訂閱 | 非常適合 | 支持批量訂閱，能大幅提高效率。 |
| 個人開發者希望快速測試 ChatGPT API | 適合 | 能快速獲得訂閱，進行功能測試。 |
| 大型企業需要穩定的訂閱服務 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，能夠自動化訂閱流程，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：專案需要存取敏感資料（如 `access_token` 和 GoPay 帳號），使用時需謹慎管理這些資訊。依賴於外部 API 的安全性，需定期檢查是否有已知漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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
| Forks | 459 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-05-13 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 51.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ywnd1144/Gopay_plus_automatic) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `curl_cffi` `grpcio` `grpcio-tools` `protobuf`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 89
>     "JavaScript" : 9
>     "Shell" : 1
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ywnd1144](https://github.com/ywnd1144) | 23 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的 Issues 提供了使用者交流的空間。
**連結**：[文件](https://github.com/ywnd1144/Gopay_plus_automatic)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-13）
> **活躍天數** 2 天 · **最新 commit** chore: sync open-source release (JWT auth + SMS OTP channel + charge_ref multi-fallback)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/ywnd1144/Gopay_plus_automatic/issues/5) | 大佬，帮忙看下 | 0 | 1 |
> | [#4](https://github.com/ywnd1144/Gopay_plus_automatic/issues/4) | Service Type | 0 | 0 |
> | [#3](https://github.com/ywnd1144/Gopay_plus_automatic/issues/3) | 佬，可以帮我分析什么问题吗？ | 0 | 0 |
> | [#2](https://github.com/ywnd1144/Gopay_plus_automatic/issues/2) | 调用subscribe接口之后返回HTTP Error 401 | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GoPay Plus 自动订阅机
> 
> [](https://github.com/ywnd1144/Gopay_plus_automatic)
> [](https://github.com/ywnd1144/Gopay_plus_automatic)
> 
> > 项目地址：
> 
> 全自动 ChatGPT Plus 订阅工具。给定一个 ChatGPT `access_token`，本项目会在 **约 20 秒** 内通过 Stripe → Midtrans → GoPay 的 tokenization 支付链路自动完成 0 元首月订阅。
> 
> > ⚠️ **此项目将不会再进行更新，仅供研究、娱乐、学习，有能力者自行二开。**
> 
> **声明**：项目作者与任何渠道方无关，也不从事相关的服务行为。此项目仅为开源共享交流，研究仅为个人兴趣爱好。本项目为**免费开源**，收费售卖者自重。问题请发邮箱 `links-to@outlook.com`。作者不对任何使用者的行为负责，该项目仅供学习交流。
> 
> **不建议没有基础的用户自己部署**，请使用 GPT / Claude 的高级模型辅助部署，并根据具体场景调整。如果你只是想看看效果，推荐先用 `manual` 模式跑一次单号，确认链路打通再谈批量。
> 
> ---
> 
> 
> ### 方案二：`sms_api` 模式（接码平台自动获取）
> 
> 适合批量生产，全自动无人值守。
> 
> 原理：GoPay 把验证码通过 **SMS** 发到虚拟手机号，编排器自动调接码平台 API 查询并取回验证码。
> 
> **重要前提：GoPay linking 默认把 OTP 发到 WhatsApp，接码平台收不到。** 必须同时配置：
> 
> 1. `otp.mode` = `"sms_api"`
> 2. `gopay.otp_channel` = `"sms"`（让脚本在 consent 后切换 SMS 通道）
> 3. `orchestrator.otp_timeout` ≥ **120**（因为要等 30 秒倒计时 + SMS 送达）
> 
> 关键字段（合并摘录）：
> 
> ```json
> {
>   "gopay": {
>     "otp_channel": "sms",
>     "sms_switch_countdown_sec": 30,
>     "sms_switch_endpoint": ""
>   },
>   "orchestrator": { "otp_timeout": 120 },
>   "otp": {
>     "mode": "sms_api",
>     "sms_api": {
>       "api_key": "你的key",
>       "base_url": "https://api.你的平台.com"
>     }
>   }
> }
> ```
> 
> > `sms_switch_endpoint` 留空时使用内置默认。若 GoPay 调整了接口，抓一次 HAR（点 GoPay web 页"改用短信接收"时发出的请求），把 URL 填到 `sms_switch_endpoint`，附加字段填到 `sms_switch_body_extra`。
> 
> 接码平台对接：
> 
> 编排器默认请求：
> 
> ```
> GET {base_url}?action=get_sms&api_key={你的key}&phone={手机号}&country=id
> ```
> 
> 再从响应文本里自动提取 6 位数字（`\b\d{6}\b`）。
> 
> 如果你的平台 URL 格式不同，直接改 `orchestrator.py` 里 `_wait_sms_api_otp` 函数的 URL 构造即可，响应解析是通用的。
> 
> 常见平台参考：
> 
> ```
> HeroSMS:
>   GET https://api.herosms.com/api/get_sms?api_key=KEY&phone=PHONE
>   返回：{"sms": "Your verification code is 123456"}
> 
> 5sim:
>   GET https://5sim.net/v1/user/check/{order_id}
>   Header: Authorization: Bearer KEY
>   返回：{"sms": [{"text": "123456 is your code"}]}
> 
> sms-activate:
>   GET https://api.sms-activate.org/stubs/handler_api.php?api_key=KEY&action=getStatus&id=ORDER_ID
>   返回：STATUS_OK:123456
> ```
> 
> 批量流程示例：
> 
> ```
> 1. 接码平台买一个印尼号（假设 81234567890）
> 2. 用这个号在 Gojek 注册 GoPay，设 PIN 为 123456
> 3. curl -X POST http://localhost:8800/subscribe \
>      -H "Authorization: Bearer my-secret-token-123" \
>      -d '{"session_token":"eyJ...","phone_number":"81234567890","pin":"123456"}'
> 4. 编排器自动从接码平台取验证码，完成订阅
> 5. 换下一组 号 + access_token，继续
> ```
> 
> > 作者本人未逐一实测过每个接码平台，但原理一致（拉短信、提取 6 位码），用户需根据自己买的平台做小幅改造。
> 
> 
> ## 目录
> 
> 1. [它能做什么](#它能做什么)
> 2. [当前风控现状（必读）](#当前风控现状必读)
> 3. [使用前要准备什么](#使用前要准备什么)
> 4. [架构说明](#架构说明)
> 5. [安装步骤（从零开始）](#安装步骤从零开始)
> 6. [配置说明](#配置说明)
> 7. [使用方法](#使用方法)
> 8. [三种 OTP 接收方案](#三种-otp-接收方案)
> 9. [生产部署（systemd 自启动）](#生产部署systemd-自启动)
> 10. [常见问题](#常见问题)
> 11. [项目结构](#项目结构)
> 12. [免责声明](#免责声明)
> 
> ---
> 
> 
> ## 它能做什么
> 
> - 输入一个 ChatGPT `access_token`
> - 自动创建 IDR（印尼盾）订阅订单
> - 自动通过 Stripe + Midtrans + GoPay tokenization 完成付款
> - 自动接收并填写 OTP 验证码
> - 自动输入 GoPay PIN
> - 自动验证订阅状态
> - 最终结果：该账号变成 ChatGPT Plus（0 元首月试用）
> 
> 整个过程约 20 秒，全程无人工干预（配置好之后）。支持单号调试、多号批量、并发订阅。
> 
> ---
> 
> 
> ## 当前风控现状（必读）
> 
> 这部分必须先看，否则跑起来碰到风控你会以为是代码 bug。
> 
> 
> ### 1. CDN 层面的 "There's a technical error"
> 
> 遇到 `There's a technical error. Don't worry, we're working on it. Please try again.` 时，这是 Cloudflare 对 Midtrans linking 端点的限流。
> 
> **绕过方式**：项目根目录 `429/` 文件夹提供了基于 Chrome 指纹浏览器的绕过脚本（通过浏览器直接跑 linking，避免 SDK 指纹），多数情况下也可以通过**多次点击重试**触发 CDN 放行。
> 
> > 注：该脚本不在本仓库主流程中，仅作备用工具。
> 
> 
> ### 2. Midtrans 反欺诈（fraud_status=deny）
> 
> 当订阅返回 `charge: fraud_status=deny` 或出现 `Failed to proceed to GoPay. Please place your order again`：
> 
> - 这是 **Midtrans 对虚拟号/同一用户短时间内多次 linking 的反欺诈拦截**
> - 触发后**该号已无法再用于 GoPay 支付**，请换号
> - 正常使用（一号一订阅）不会触发
> - 调试阶段反复跑同一个号会触发，等几小时 ~ 1 天可恢复
> 
> 
> ### 3. 一号多绑已受限
> 
> 截止到 2026-05-12，单个 GoPay 号多绑 Plus 已行不通，目前实测最多能绑 1~3 个账号。两种策略：
> 
> - **一号一绑（推荐）**：每个 GoPay 号只绑一个 ChatGPT 账号，无需 WhatsApp，用 SMS 接码即可
> - **一号多绑**：在虚拟手机号期限内（一般接码平台号能保 10~60 分钟）多次接码多次绑定，或注册 WhatsApp 使用 WhatsApp OTP，但 WhatsApp 封号风险较大
> 
> 
> ### 4. IP 出口要求
> 
> - **必须**是日本出口 IP（实测 100% 可通过 ChatGPT 地区校验）或中国台湾地区 IP
> - 其他地区的代理拿不到 Plus 订阅资格
> 
> 
> ### 5. 账号邮箱要求
> 
> 目前已知可获取 Plus 资格的邮箱类型：
> 
> - Outlook / Hotmail
> - 域名邮箱（前提：需要给子域名加 `edu` 前缀，例如原域名 `abc.com`，需用 `edu.abc.com` 的邮箱）
> 
> 
> ### 6. GoPay / Gojek 账号需要自己注册
> 
> 本项目**不**自动化 GoPay/Gojek 的注册（自动化注册难度过高）。你需要：
> 
> 1. 用印尼虚拟号在接码平台买号
> 2. 手动注册 Gojek / GoPay（或用模拟器）
> 3. 设置 6 位 PIN
> 4. 拿到 "手机号 + PIN" 作为本项目的输入
> 
> 
> ### 7. 支付链路状态
> 
> - **支付链路百分百可行**，已在生产环境多次验证。
> - 支付失败（不是脚本错误）几乎都是：号状态异常、IP 被风控、账号侧触发反欺诈。
> 
> ---
> 
> 
> ## 使用前要准备什么
> 
> | 项目 | 说明 | 如何获取 |
> |---|---|---|
> | Linux 服务器 | 推荐 Debian / Ubuntu，1 核 1G 即可 | 任意云服务商 |
> | Python | 3.10 及以上 | `apt install python3 python3-pip` |
> | Node.js | 18+（**仅 `whatsapp` 模式需要**） | NodeSource 源 |
> | SOCKS5 代理 | **日本**出口 IP | 自建 / 购买 |
> | GoPay 账号 | 印尼号 + 6 位 PIN（**必须已开启 PIN**，否则无法支付） | 虚拟号 + Gojek APP 注册 |
> | ChatGPT access_token | 要订阅的账号凭证 | 见下文 |
> 
> 
> ### 如何获取 access_token
> 
> 1. 用浏览器登录 
> 2. 地址栏访问 
> 3. 页面返回 JSON，找到 `accessToken` 字段
> 4. 复制它的值（以 `eyJ` 开头的一长串，通常 1000+ 字符）
> 5. 这就是 `access_token`
> 
> > `access_token` 有效期约 24 小时，过期需重新获取。
> 
> 
> ### 如何注册 GoPay 账号
> 
> 1. 在接码平台（HeroSMS / 5sim / sms-activate 等）买一个印尼手机号
> 2. 下载 Gojek APP（或用模拟器 MuMu / 雷电等）
> 3. 用该印尼号注册 Gojek 账号
> 4. 注册过程会收到 SMS 验证码（从接码平台获取）
> 5. 在 APP 内设置 GoPay PIN（6 位数字；**强烈建议所有号统一用同一个 PIN**，方便批量）
> 6. 记录：`手机号 + PIN`
> 
> 批量订阅就重复上面步骤，准备多个 `手机号 + PIN` 对。
> 
> ---
> 
> 
> ## 架构说明
> 
> 项目由 3 个服务组成：
> 
> ```
>                     用户请求
>                        |
>                        v
> +--------------------------------------------------+
> |  orchestrator（编排器）        监听 :8800         |
> |  接收 /subscribe 请求，协调整个流程              |
> +--------------------------------------------------+
>            |                           |
>            v                           v
> +-------------------+        +-------------------+
> | plus_gopay_links  |        |  OTP 来源          |
> | 支付核心（gRPC）   |        |  (三选一)         |
> | 监听 :50051       |        |                   |
> | 执行完整支付流程   |        |  1. manual        |
> |                   |        |  2. sms_api       |
> |                   |        |  3. whatsapp      |
> +-------------------+        +-------------------+
> ```
> 
> 你不需要关心内部流程，只需：
> 
> 1. 配好 `config.json`
> 2. 启动两个服务（WhatsApp 模式多一个）
> 3. 通过 HTTP 调 `/subscribe`
> 
> ---
> 
> 
> ## 安装步骤（从零开始）
> 
> 
> ### 第一步：准备服务器
> 
> ```bash
> 
> # 以 root 登录 Linux 服务器
> apt update && apt upgrade -y
> 
> 
> # 安装 Python
> apt install -y python3 python3-pip curl git
> 
> 
> # 可选：仅 whatsapp 模式需要
> curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
> apt install -y nodejs
> ```
> 
> 
> ### 第二步：拉取项目
> 
> ```bash
> cd /opt
> git clone https://github.com/ywnd1144/Gopay_plus_automatic.git gopay-plus
> cd gopay-plus
> ```
> 
> 
> ### 第三步：安装 Python 依赖
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> 报错 `externally-managed-environment` 时：
> 
> ```bash
> pip install --break-system-packages -r requirements.txt
> ```
> 
> 
> ### 第四步：安装 Node.js 依赖（仅 WhatsApp 模式）
> 
> ```bash
> cd to_whatsapp && npm install && cd ..
> ```
> 
> 
> ### 第五步：复制配置模板
> 
> ```bash
> cp config.example.json config.json
> nano config.json     # 或 vim / vi
> ```
> 
> 字段说明见下一章。
> 
> 
> ### 第六步：启动
> 
> 一键脚本（Linux）：
> 
> ```bash
> chmod +x start.sh
> ./start.sh
> ```
> 
> 或手动启动（方便调试）：
> 
> ```bash
> 
> # 终端 1：支付核心
> cd plus_gopay_links
> python3 payment_server.py --config ../config.json --listen :50051
> 
> 
> # 终端 2：编排器
> cd /opt/gopay-plus
> python3 orchestrator.py
> 
> 
> # 终端 3（仅 whatsapp 模式）：WhatsApp Relay
> cd to_whatsapp
> WA_PAIRING_PHONE=62xxxxxxxxxx WA_PROXY_URL=socks5://127.0.0.1:1080 WA_GRPC_PORT=50056 node index.js
> ```
> 
> 
> ### 第七步：自检
> 
> ```bash
> curl http://localhost:8800/health
> 
> # {"ok": true, "service": "gopay-plus", "otp_mode": "manual"}
> ```
> 
> ---
> 
> 
> ## 配置说明
> 
> 打开 `config.example.json`，**复制成 `config.json`** 再改（改 example 跑不起）。
> 
> > JSON 不支持注释，实际 `config.json` 里不要留下面的 `//` 说明行。
> 
> ```jsonc
> {
>   "gopay": {
>     "country_code": "62",
>     // 印尼国家码，固定 62
> 
>     "phone_number": "81234567890",
>     // 默认 GoPay 手机号（不含国家码）
>     // 批量模式时这里填一个占位号，每次 /subscribe 可传 phone_number 覆盖
> 
>     "pin": "123456",
>     // 默认 6 位 PIN，批量建议统一
> 
>     "browser_locale": "zh-CN",
>     "pin_locale": "id",
> 
>     "otp_channel": "whatsapp",
>     // "whatsa

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[支付流程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/ywnd1144/Gopay_plus_automatic)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "ywnd1144--Gopay_plus_automatic"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ywnd1144--Gopay_plus_automatic"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "ywnd1144--Gopay_plus_automatic" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "ywnd1144--Gopay_plus_automatic"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","支付流程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ywnd1144--Gopay_plus_automatic" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ywnd1144--Gopay_plus_automatic" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ywnd1144" AND file.name != "ywnd1144--Gopay_plus_automatic"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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
> const me = dv.page("Repos/ywnd1144--Gopay_plus_automatic");
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

> **2026-05-14** — 首次收錄
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

- [[2026-05-16|2026-05-16]] — 再次上榜，876 stars
- [[2026-05-15|2026-05-15]] — 再次上榜，793 stars
- [[2026-05-14|2026-05-14]] — 首次收錄，712 stars
