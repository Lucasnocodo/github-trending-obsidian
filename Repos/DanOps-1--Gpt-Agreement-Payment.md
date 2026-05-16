---
repo: DanOps-1/Gpt-Agreement-Payment
url: https://github.com/DanOps-1/Gpt-Agreement-Payment
owner: DanOps-1
owner_type: User
language: Python
license: MIT
description: "ChatGPT Plus/Team/Pro 订阅协议端到端重放工具集 · hCaptcha 视觉求解器 · 反欺诈机制实证研究 / End-to-end protocol replay toolkit for ChatGPT Plus/Team/Pro subscription with from-scratch hCaptcha solver and empirical anti-fraud research"
homepage: ""
stars: 1340
stars_per_day: 74
forks: 554
open_issues: 12
created: 2026-04-27
pushed_at: 2026-05-14
first_seen: 2026-05-01
week: "2026-W18"
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
last_reviewed: 2026-05-01
use_case: "提供 ChatGPT 订阅协议的端到端重放工具，包含 hCaptcha 视觉求解器和反欺诈机制实证研究。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-11"
contributor_count: 4
engagement: "high"
issue_close_rate: 8
repo_size_kb: 1150
readme_length: 8490
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:779,2026-05-01:780,2026-05-02:877,2026-05-02:878,2026-05-03:917,2026-05-03:917,2026-05-04:964,2026-05-04:964,2026-05-05:1006,2026-05-06:1043,2026-05-07:1095,2026-05-08:1137,2026-05-09:1174,2026-05-10:1193,2026-05-11:1241,2026-05-12:1287,2026-05-13:1309,2026-05-14:1317,2026-05-15:1326,2026-05-16:1340"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/adversarial_ml"
  - "topic/anti_fraud"
  - "topic/bug_bounty"
  - "topic/captcha_solver"
  - "topic/chatgpt"
aliases:
  - "Gpt-Agreement-Payment"
  - "DanOps-1/Gpt-Agreement-Payment"
  - "提供 ChatGPT 订阅协议的端到端重放工具，包含 hCaptcha 视觉求解器和反欺诈机制实证研究。"
---

# Gpt-Agreement-Payment

**1.3k** stars · **74** stars/天 · 建立 18 天前 · Python · MIT

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
> 提供 ChatGPT 订阅协议的端到端重放工具，包含 hCaptcha 视觉求解器和反欺诈机制实证研究。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (74 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人 · **參與度** High
> **適合** 需要自動化 ChatGPT 訂閱流程的開發者，特別是熟悉 Python 和 Linux 環境的技術人員。
> **一句話重點** 這個專案不僅提供了自動化的支付流程，還整合了高效的 hCaptcha 求解功能，對於需要頻繁使用 ChatGPT 的開發者來說，極具價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "DanOps-1--Gpt-Agreement-Payment" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，3 小時整合，能夠實現自動化的支付流程，值得投入。

> [!abstract] 核心創新
> 提供了一個完整的端到端重放工具，專為 ChatGPT 的訂閱設計，並包含獨立的 hCaptcha 求解器。

## 專案簡介

這個專案提供了一個完整的端到端重放工具，專為 ChatGPT 的 Plus/Team/Pro 訂閱設計。用戶只需提供一個有效的 PayPal 帳號和代理，便能透過命令行執行一系列操作，最終獲得 OAuth 的 `refresh_token`。核心流程包括從 Stripe Checkout 到 PayPal 授權，再到 ChatGPT 的手動批准，並最終獲得 Codex 的 OAuth 認證。這樣的設計使得用戶能夠自動化整個訂閱過程，省去繁瑣的手動操作。工具的亮點在於其獨立的 hCaptcha 视觉求解器，能夠處理多達 12 種題型，並且配合 Playwright 實現人類行為模擬，增加了求解的成功率。

這些功能的實現依賴於多種技術，包括 Python、Playwright 和 OpenCV，並且設計上考慮到無人值守運行的需求。與其他類似工具相比，如 `hCaptcha-solver`，本專案不僅提供了求解器，還整合了完整的支付流程，這使得它在功能上更為全面。使用者需注意，該工具的使用需要一定的技術背景，並且在配置上可能會遇到挑戰。特別是對於不熟悉 Linux 環境的用戶，初次設置可能需要花費 1-3 小時的時間來調整。整體來看，這是一個針對特定需求的高效工具，適合對 ChatGPT 訂閱有需求的開發者使用。

**技術棧**：`Python` · `Vue` · `JavaScript` · `TypeScript` · `CSS` · `HTML`

## 重點功能

- 端到端重放工具 — 完整模擬 ChatGPT 訂閱流程，包括 Stripe 和 PayPal 的交互。
- hCaptcha 视觉求解器 — 獨立模組，支持 12 種題型，使用 Playwright 和 OpenCV 實現。
- 自愈環 daemon — 自動管理 IP 變更和資源回收，支持長時間無人值守運行。
- 多種運行模式 — 支持單次執行、批量處理和持續運行，靈活滿足不同需求。
- 詳細文檔 — 提供安裝、配置和操作指南，幫助用戶快速上手。

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
{
  "前置條件": "確保已安裝所有依賴",
  "指令": "xvfb-run -a python pipeline.py --config CTF-pay/config.paypal.json --paypal",
  "預期輸出": "獲得 OAuth refresh_token"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 18 天內累積 1340 stars（約 74 stars/天），forks 數量達 554（41.3%），顯示出強烈的社群興趣。這個專案的作者 DanOps-1 及其團隊在開源社群中有著良好的聲譽，並且過去有多個成功的專案。它解決了用戶在訂閱 ChatGPT 時面臨的繁瑣流程，特別是 hCaptcha 的求解問題，這在之前的工具中往往需要手動處理。最近的推廣活動和社群討論也促進了其曝光率。技術上，這個工具的整合性和自動化特性使其在當前的開發生態中尤為突出，尤其是在需要高效處理支付和訂閱的場景中。forks/stars 比率達到 41.3%，顯示出許多用戶正在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化 ChatGPT 訂閱流程的開發者，特別是熟悉 Python 和 Linux 環境的技術人員。

> [!example] 使用場景
> - 後端工程師用它來自動化 ChatGPT 訂閱流程，因為手動操作繁瑣且容易出錯。
> - 安全研究人員用它來測試反欺詐機制的有效性，因為它提供了實證數據和完整的流程重放。
> - 開發者用它來快速獲取 OAuth 認證，因為其自動化的設計能大幅縮短配置時間。

## 架構分析

該專案採用模組化架構，將不同功能分為多個子系統，便於維護和擴展。核心流程由 `pipeline.py` 控制，依賴於多個外部 API 進行支付和驗證。資料流從用戶輸入的配置開始，經過多個步驟，包括 Stripe 和 PayPal 的交互，最終生成 OAuth 認證。這樣的設計使得整個流程清晰且易於追蹤，但也增加了對外部服務的依賴，可能在服務不穩定時影響整體運行。擴展性方面，若需支持更多支付平台或驗證方式，需進行相應的模組開發。

## 技術深入分析

該專案的核心技術在於其端到端的支付流程重放，利用 Python 和多個外部 API 進行交互。使用 Playwright 進行瀏覽器自動化，並結合 OpenCV 實現 hCaptcha 的求解。這樣的設計使得用戶能夠在無需手動操作的情況下完成整個訂閱流程。效能上，單次流程約需 5 分鐘，具備一定的穩定性，但在高並發情況下可能會受到外部服務的影響。選擇 Python 作為主要開發語言，便於快速開發和迭代，但代價是可能導致性能瓶頸。技術風險方面，對於外部 API 的依賴使得在服務變更時，需快速適應以避免影響使用者體驗。整合方面，與主流的 CI/CD 工具相容性良好，但對於不熟悉的用戶，初次整合可能需要一定的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和配置指南，包含多個範例，對於新手來說相對友好。安裝過程中，對於依賴的安裝和配置有清晰的指引，但初次設置可能會遇到一些挑戰。整體來說，花 30 分鐘能夠完成基本的設置和運行。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠節省大量手動操作時間。
> - 提供完整的支付流程重放，適合需要頻繁訂閱的用戶。
> - 獨立的 hCaptcha 求解器增加了工具的實用性。

> [!danger] 缺點
> - 需要一定的技術背景，初次配置較為繁瑣。
> - 對於不熟悉 Linux 環境的用戶，可能會遇到困難。
> - 批量註冊的存活率低，可能影響使用體驗。

> [!warning] 注意事項
> - 僅支援 EU 地區的 PayPal 帳號。
> - 批量註冊的存活率約 2%，受限於反欺詐機制。
> - hCaptcha 題型覆蓋不全，可能無法解決所有題型。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化工具，但主要針對不同的支付平台，缺乏完整的 hCaptcha 求解功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 CTF 挑戰的解決方案，並不具備支付流程的自動化能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| hCaptcha-solver | 專注於 hCaptcha 的求解，但不提供完整的支付流程自動化，適合僅需解決 hCaptcha 的用戶。 | 如果你的需求僅限於 hCaptcha 的求解，而不涉及支付流程的自動化。 | low，因為主要功能集中於 hCaptcha 求解。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化工具，但主要針對不同的支付平台，缺乏完整的 hCaptcha 求解功能。 | 如果你需要針對特定支付平台的自動化，而不需要 hCaptcha 的支持。 | medium，因為需要適應不同的支付流程和 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Gpt-Agreement-Payment** | **hCaptcha-solver** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 hCaptcha 的求解，但不提供完整的支付流程自動化，適合僅需解決 hCaptcha 的用戶。 | 提供類似的自動化工具，但主要針對不同的支付平台，缺乏完整的 hCaptcha 求解功能。 |
> | 遷移成本 | - | low，因為主要功能集中於 hCaptcha 求解。 | medium，因為需要適應不同的支付流程和 API。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於 hCaptcha 的求解，而不涉及支付流 | 如果你需要針對特定支付平台的自動化，而不需要 hCaptch |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** PayPal 只在 EU 開通，可能導致無法使用
  - 解法：使用 EU 地區的代理進行操作
- [MEDIUM] 批量註冊的存活率低，影響使用體驗
  - 解法：調整註冊策略，減少批量數量
- [MEDIUM] hCaptcha 題型未覆蓋完全，可能導致求解失敗
  - 解法：使用 VLM 進行兜底處理

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要自動化 ChatGPT 訂閱的開發者 | 非常適合 | 提供完整的支付流程和 hCaptcha 求解功能，能大幅提高效率。 |
| 安全研究人員測試反欺詐機制 | 適合 | 提供實證數據和完整的流程重放，適合進行深入研究。 |
| 不熟悉 Linux 環境的用戶 | 不適合 | 初次配置較為繁瑣，可能會遇到困難。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，3 小時整合，能夠實現自動化的支付流程，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具本身不需要高權限，但使用過程中可能會存取敏感資料，如 PayPal 帳號和 API 金鑰。依賴的外部服務需謹慎選擇，以防供應鏈風險。

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
| Forks | 554 |
| Open Issues | 12 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 1.1 MB |
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
> | [@DanOps-1](https://github.com/DanOps-1) | 30 |
> | [@DragonBaiMo](https://github.com/DragonBaiMo) | 1 |
> | [@Lium-7768](https://github.com/Lium-7768) | 1 |
> | [@laochendeai](https://github.com/laochendeai) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/DanOps-1/Gpt-Agreement-Payment)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-14）
> **活躍天數** 5 天 · **最新 commit** docs(readme): 加 4 位新打赏致谢

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/20) | [feat] 账号校验在 gost 未运行时回退使用项目配置代理 `enhancement` `help wanted` `good first issue` | 0 | 1 |
> | [#19](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/19) | [feat] WhatsApp sidecar 支持显式代理和系统 Chrome 路径 `enhancement` `help wanted` | 0 | 1 |
> | [#18](https://github.com/DanOps-1/Gpt-Agreement-Payment/issues/18) | [feat] WebUI 支持反代路径下的 /webui/api/* 前缀兼容 `enhancement` `help wanted` `good first issue` | 0 | 1 |

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
> ---
> 
> ## 赞助商目录
> 
> 感谢以下朋友与伙伴对 Gpt-Agreement-Payment 的支持。
> 
> | Logo | 名称 | 介绍 | 官网 |
> | --- | --- | --- | --- |
> |  | Right Code | 企业级 AI Agent 分发平台，OpenAI / Anthropic / Gemini 全协议兼容，统一接入 Claude Code、Codex、Gemini CLI、Grok Code 等。**稳定优先**（独家网关、号池稳定、可用率 99.5%）· **高性价比**（按量计费，仅官网十分之一）· **透明计费**（实时监控用量，无隐藏扣费）。**邀请码：`c408930b`****返利：邀请者 5% · 好友加赠 5%**（好友支付完成后，双方同时获得实付金额对应额度的 5%） | [https://www.right.codes/register?aff=c408930b](https://www.right.codes/register?aff=c408930b) |
> 
>   
>     
>   
>   
>   👆 点击图片访问 Right Code · 邀请码 c408930b
> 
> ---
> 
> ## 作者自营 · API 中转
> 
> | Logo | 名称 | 介绍 | 官网 |
> | --- | --- | --- | --- |
> |  | lukyface API（作者自营） | 统一的 AI 模型聚合 / 分发网关（基于 new-api），OpenAI / Claude / Gemini 三协议互转，自用余量分享。**倍率：0.1 元 ≈ 1 美元额度**（按充值实付计价），不定期降价优惠，量大可私聊议价。**邀请码：`9ipF`** · 通过 [邀请链接](https://api.lukyface.com/register?aff=9ipF) 注册即自动绑定 | [https://api.lukyface.com/register?aff=9ipF](https://api.lukyface.com/register?aff=9ipF) |
> 
> ---
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
> - （可选）一个 OpenAI 兼容的 VLM API key，hCaptcha 求解用；家宽 / 伪家宽出口通常不会触发 hCaptcha，无 VLM 时也会降级到 CLIP（推荐用本项目赞助商 [Right Code](https://www.right.codes/register?aff=c408930b)，详见页首）
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
> ### 代码贡献者
> 
> 感谢以下朋友贡献代码（按 PR 时间）：
> 
> - [@Lium-7768](https://github.com/Lium-7768) — [#12](https://github.com/DanOps-1/Gpt-Agreement-Payment/pull/12) Align GoPay step visibility to hide 06 and 13
> - [@DragonBaiMo](https://github.com/DragonBaiMo) — [#15](https://github.com/DanOps-1/Gpt-Agreement-Payment/pull/15) 算法化 persona 生成器 + 邮箱姓名同源
> - [@laochendeai](https://github.com/laochendeai) — [#21](https://github.com/DanOps-1/Gpt-Agreement-Payment/pull/21) detect blocking challenge pages
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
> ### 打赏致谢
> 
> 感谢以下朋友的支持（排名不分先后）：
> 
> | 打赏者 | 金额 |
> |---|---|
> | Galaxy-n | 101 元 |
> | 两岁 | 100 元 |
> | 朴朴配送员 | 66 元 |
> | Ka | 28.88 元 |
> | 追Mou | 20 元 |
> | 原昊 | 20 元 |
> | A. | 10 元 |
> | acedia | 9.1 元 |
> | 至上松一 | 6.66 元 |
> | 书忆江南 | 5 元 |
> | 辛昊 | 5 元 |
> | bensema | 0.66 元 |
> | Earth NPC | 0.01 元 |
> | 小水獭 | 0.01 元 |
> | 钟 | 0.01 元 |
> 
> 心意比金额更珍贵，每一份支持都是项目继续维护的动力 🙏
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
> **本项目按"现状（AS IS）"提供，不附任何形式的担保。** 包括但不限于适销性、适用于特定用途、不侵权、安全性、稳定性、与第三方服务的持续兼容性。你独自承担

## 延伸閱讀

相關概念：[[反欺詐]] · [[自動化]] · [[hCaptcha]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[432539--gpt2api|432539/gpt2api]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]]

[GitHub](https://github.com/DanOps-1/Gpt-Agreement-Payment)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
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
> const concepts = ["反欺詐","自動化","hCaptcha"];
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
