---
repo: DanOps-1/Gpt-Agreement-Payment
url: https://github.com/DanOps-1/Gpt-Agreement-Payment
owner: DanOps-1
owner_type: User
language: Python
license: MIT
description: "ChatGPT Plus/Team/Pro 订阅协议端到端重放工具集 · hCaptcha 视觉求解器 · 反欺诈机制实证研究 / End-to-end protocol replay toolkit for ChatGPT Plus/Team/Pro subscription with from-scratch hCaptcha solver and empirical anti-fraud research"
homepage: ""
stars: 779
stars_per_day: 260
forks: 357
open_issues: 1
created: 2026-04-27
pushed_at: 2026-04-30
first_seen: 2026-05-01
week: "2026-W18"
month: "2026-05"
category: "安全"
subcategory: "反欺诈"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-01
use_case: "提供 ChatGPT Plus/Team/Pro 订阅协议的端到端重放工具及反欺诈机制研究。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-04"
contributor_count: 1
engagement: "high"
issue_close_rate: 50
repo_size_kb: 567
readme_length: 6627
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:779"
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
  - "提供 ChatGPT Plus/Team/Pro 订阅协议的端到端重放工具及反欺诈机制研究。"
---

# Gpt-Agreement-Payment

**779** stars · **260** stars/天 · 建立 3 天前 · Python · MIT

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

`個人專案`

`adversarial-ml` `anti-fraud` `bug-bounty` `captcha-solver` `chatgpt` `ctf-tools` `hcaptcha-solver` `mitmproxy` `playwright` `protocol-replay` `stripe` `vlm`

> [!summary] 一句話摘要
> 提供 ChatGPT Plus/Team/Pro 订阅协议的端到端重放工具及反欺诈机制研究。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (260 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要對 ChatGPT 訂閱協議進行安全測試和研究的安全專家或開發者。
> **一句話重點** 這個專案不僅提供了支付協議的重放工具，還深入研究了反欺诈機制，對安全研究者來說具有重要價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DanOps-1--Gpt-Agreement-Payment");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "反欺诈" && p.file.name !== "DanOps-1--Gpt-Agreement-Payment" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 反欺诈 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到自動化支付測試的能力，值得考慮。

> [!abstract] 核心創新
> 提供一個完整的端到端支付協議重放工具，並集成了從零實現的 hCaptcha 求解器。

## 專案簡介

這個專案是一個針對 ChatGPT Plus/Team/Pro 訂閱協議的端到端重放工具，能夠從 Stripe Checkout 到 PayPal 協議的整個流程進行重放。使用者只需提供一個有效的支付憑證和代理，便可獲得 OAuth 的 refresh_token。專案的亮點包括一個從零實現的 hCaptcha 视觉求解器，能夠處理 12 種不同的 hCaptcha 題型，並且提供了反欺诈機制的實證數據，顯示批量註冊的存活率僅為 2%。此外，專案還設計了一個自愈環的 daemon，能夠自動管理 IP 變更和資源回收，實現長時間無人值守運行。

這些設計選擇使得該工具在面對反欺诈機制時具有一定的韌性，能夠持續運行並收集數據。相較於其他類似工具，這個專案的獨特之處在於其深度的協議重放和自動化能力，特別是在處理支付和身份驗證的複雜流程上。使用者需要具備一定的技術背景，因為這不是一個開箱即用的工具，初次配置可能需要 1-3 小時。整體來看，這個專案適合對反欺诈和支付協議有深入研究需求的開發者。

**技術棧**：`Python` · `Vue` · `TypeScript` · `CSS` · `HTML`

## 重點功能

- 端到端重放 — 支持從 Stripe Checkout 到 ChatGPT 的整個支付流程重放，獲得 OAuth refresh_token。
- hCaptcha 视觉求解器 — 獨立實現的求解器，支持 12 種題型，使用 CLIP/OpenCV 和 Playwright。
- 自愈環 daemon — 自動管理 IP 變更和資源回收，設計目標是無人值守運行數周。
- 反欺诈實證數據 — 提供批量註冊的存活率數據，幫助分析反欺诈機制的有效性。
- 多種運行模式 — 支持單次、批量、自我交易和 daemon 模式，靈活應對不同需求。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/DanOps-1/Gpt-Agreement-Payment && cd Gpt-Agreement-Payment && pip install -r requirements.txt
```
2. 啟動後端服務
```bash
python -m webui.server
```
3. 在瀏覽器中打開配置向導
```bash
http://127.0.0.1:8765
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 779 stars（260/天），forks 高達 357（45.8%），顯示出強烈的社群參與。作者 DanOps-1 似乎專注於安全研究和反欺诈技術，這個專案解決了在現有支付系統中進行自動化測試和研究的需求，特別是在 hCaptcha 和 Stripe 的使用場景中。最近的社群討論和實證數據的分享也可能促進了這個專案的曝光度。高 forks/stars 比率顯示出許多開發者正在積極修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要對 ChatGPT 訂閱協議進行安全測試和研究的安全專家或開發者。

> [!example] 使用場景
> - 安全研究員用它來測試 ChatGPT 的支付流程，因為能夠重放整個協議鏈路，獲得更深入的安全見解。
> - 開發者用它來驗證反欺诈機制的有效性，因為提供了實證數據和自動化測試工具，能夠快速迭代。
> - CTF 參賽者用它來收集和分析 hCaptcha 的題型，因為其 hCaptcha 求解器能夠自動處理多種題型，節省時間。

## 架構分析

專案採用模組化設計，將各個功能模組分開，便於維護和擴展。核心流程由 pipeline.py 控制，通過不同的子模組處理支付和身份驗證。資料流從 Stripe Checkout 開始，經過多個步驟，最終獲得 refresh_token。

這樣的設計使得每個模組可以獨立測試和更新，但也可能導致整體流程的複雜性增加。選擇 Python 作為主要語言，因為其在自動化和網絡請求方面的強大支持，但這也意味著對於性能要求較高的場景可能不如其他語言（如 Go 或 Rust）。整體架構的擴展性取決於各個模組的獨立性，未來可能需要考慮如何優化性能和降低耦合度。

## 技術深入分析

專案的核心技術機制是基於 Python 的端到端重放工具，能夠模擬整個支付流程。使用了 Playwright 進行瀏覽器自動化，並結合 hCaptcha 求解器來處理視覺挑戰。效能方面，整個流程的冷啟動時間約為 1-3 小時，單次執行約需 5 分鐘。選擇 Python 作為開發語言是因為其在自動化和網絡請求方面的強大支持，但在性能上可能不如其他語言。設計取捨方面，專案的模組化設計使得各個功能可以獨立開發和測試，但也可能導致整體流程的複雜性增加。技術風險方面，批量註冊的存活率低可能會影響使用者的測試結果，未來需要進一步優化。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，但可能需要額外的配置來滿足特定需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和配置步驟，但對於新手來說仍然需要一定的技術背景。安裝過程中可能會遇到一些配置問題，特別是在代理和支付帳號的設置上。整體來說，花 30 分鐘能夠完成基本的配置，但要完全跑通可能需要更長的時間。

## 優缺點分析

> [!success] 優點
> - 提供完整的支付協議重放功能，能夠深入分析支付流程。
> - 集成的 hCaptcha 求解器能夠自動處理多種題型，提升效率。
> - 自愈環設計能夠實現長時間無人值守運行，適合持續測試。

> [!danger] 缺點
> - 配置過程繁瑣，需要一定的技術背景。
> - 批量註冊的存活率低，受限於反欺诈機制。
> - 代碼風格不夠整潔，可能影響可讀性和維護性。

> [!warning] 注意事項
> - 僅限於 EU 和 US 的 PayPal 服務。
> - 批量註冊的存活率約 2%，受限於反欺诈機制。
> - 不支持免費帳號的路徑，需使用有效的付費帳號。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化攻擊和防禦測試，但不提供完整的支付協議重放功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 CTF 工具，但缺乏針對 hCaptcha 的專門求解器。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化攻擊和防禦測試，但不提供完整的支付協議重放功能。 | 如果你的需求是針對攻擊和防禦測試，而不是支付流程的重放。 | medium，因為需要重新設計測試流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 CTF 工具，但缺乏針對 hCaptcha 的專門求解器。 | 如果你的需求是多樣化的 CTF 工具，而不僅僅是針對支付流程。 | low，因為可以直接使用現有的 CTF 工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Gpt-Agreement-Payment** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化攻擊和防禦測試，但不提供完整的支付協議重放功能。 | 提供多種 CTF 工具，但缺乏針對 hCaptcha 的專門求解器。 |
> | 遷移成本 | - | medium，因為需要重新設計測試流程。 | low，因為可以直接使用現有的 CTF 工具。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對攻擊和防禦測試，而不是支付流程的重放。 | 如果你的需求是多樣化的 CTF 工具，而不僅僅是針對支付流程 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和測試，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** PayPal 服務僅限於 EU 地區，可能導致無法使用。
  - 解法：使用 EU 地區的代理。
- [MEDIUM] 批量註冊的存活率低，可能影響測試結果。
  - 解法：減少批量註冊的數量，增加單次測試。
- [low] 代碼風格不夠整潔，可能影響可讀性。
  - 解法：在使用前進行必要的代碼重構。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 安全研究團隊進行支付流程測試 | 非常適合 | 提供完整的支付協議重放功能，能夠深入分析支付流程。 |
| CTF 參賽者需要自動化 hCaptcha 求解 | 適合 | 集成的 hCaptcha 求解器能夠自動處理多種題型。 |
| 小型開發團隊進行支付系統集成 | 普通 | 需要一定的技術背景和配置時間，可能不適合小型團隊。 |
| 大型企業進行安全測試 | 不適合 | 批量註冊的存活率低，可能影響測試結果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到自動化支付測試的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，但使用時需注意支付憑證和個人資料的安全性。依賴鏈中有一些未審計的依賴，使用時需謹慎。

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
| Forks | 357 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-04-30 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 567 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DanOps-1/Gpt-Agreement-Payment) |
| Topics | `adversarial-ml` `anti-fraud` `bug-bounty` `captcha-solver` `chatgpt` `ctf-tools` `hcaptcha-solver` `mitmproxy` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "Vue" : 9
>     "TypeScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DanOps-1](https://github.com/DanOps-1) | 8 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://github.com/DanOps-1/Gpt-Agreement-Payment)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-27 ~ 2026-04-30）
> **活躍天數** 3 天 · **最新 commit** docs: URL slug 再切回 Gpt-Agreement-Payment（GitHub 侧已 gh repo rename 完）

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
>     G --> H[refresh_tokenoutput/results.jsonl]
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

相關概念：[[反欺诈]] · [[hCaptcha]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

[GitHub](https://github.com/DanOps-1/Gpt-Agreement-Payment)

## 相關收錄

> [!note]- 直接競品（同子分類：反欺诈）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "反欺诈" AND file.name != "DanOps-1--Gpt-Agreement-Payment"
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
> const concepts = ["反欺诈","hCaptcha","自動化測試"];
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

- [[2026-05-01|2026-05-01]] — 首次收錄，779 stars
