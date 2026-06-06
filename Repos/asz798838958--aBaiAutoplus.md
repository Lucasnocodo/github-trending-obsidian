---
repo: asz798838958/aBaiAutoplus
url: https://github.com/asz798838958/aBaiAutoplus
owner: asz798838958
owner_type: User
language: Python
license: AGPL-3.0
description: "多平台 AI 账号自动注册与管理 · 协议化付款一键开通 ChatGPT Plus"
homepage: ""
stars: 1533
stars_per_day: 307
forks: 695
open_issues: 3
created: 2026-05-31
pushed_at: 2026-06-05
first_seen: 2026-06-02
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-02
use_case: "多平台 AI 账号自动注册与管理，支持协议化付款一键开通 ChatGPT Plus。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-09"
contributor_count: 2
engagement: "high"
issue_close_rate: 40
repo_size_kb: 10603
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-02"
star_history: "2026-06-02:652,2026-06-02:660,2026-06-03:1049,2026-06-03:1057,2026-06-04:1398,2026-06-04:1401,2026-06-05:1484,2026-06-05:1485,2026-06-06:1533,2026-06-06:1533"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "aBaiAutoplus"
  - "asz798838958/aBaiAutoplus"
  - "多平台 AI 账号自动注册与管理，支持协议化付款一键开通 ChatGPT Plus。"
---

# aBaiAutoplus

**1.5k** stars · **307** stars/天 · 建立 5 天前 · Python · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/asz798838958--aBaiAutoplus");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 多平台 AI 账号自动注册与管理，支持协议化付款一键开通 ChatGPT Plus。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (307 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要批量管理 AI 账号並希望自動化註冊流程的開發者和團隊。
> **一句話重點** 這個專案不僅提供了自動註冊的功能，還針對特定市場的支付需求進行了深入的設計。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "asz798838958--aBaiAutoplus" && p.status !== "archived")
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
> **結論** 花 5 小時學、10 小時整合，得到高效的自動註冊和管理功能，值得嘗試。

> [!abstract] 核心創新
> 支持通过 GoPay 协议化付款一键开通 ChatGPT Plus。

## 專案簡介

aBaiAutoplus 是一個多平台的 AI 账号自动注册与管理工具，支持通过 PayPal 和 GoPay 协议化付款一键开通 ChatGPT Plus。用戶可以通過 API 或浏览器模式進行注册，並自動將成功注册的账号推送到 Any2API 网关。其核心功能包括多平台支持、并发注册、实时日志、账号生命周期管理等，特別適合需要批量管理 AI 账号的開發者。技術上，後端使用 FastAPI 和 SQLite，前端則基於 React 和 TypeScript，並且支持 Docker 部署，這使得其在不同環境下的安裝和運行都相對簡單。

與其他類似工具相比，如 lxf746/any-auto-register，aBaiAutoplus 在支付方式和接码渠道上提供了更豐富的選擇，特別是針對印尼市場的 GoPay 支持。這使得它在需要快速註冊和管理多個帳戶的場景中表現優異。使用者可以透過 Web UI 或 API 進行操作，並且可以自定義插件擴展功能，這對於需要特定功能的用戶來說非常重要。整體而言，這是一個功能強大且靈活的工具，適合需要自動化註冊和管理 AI 服務的開發者和團隊。

**技術棧**：`FastAPI` · `SQLite` · `React` · `TypeScript` · `Playwright`

## 重點功能

- 多平台支持 — 支持 ChatGPT、Cursor、Kiro、Grok 等多個平台的自动注册。
- 并发注册 — 可配置并发数，支持同时注册多个账号，提升效率。
- 实时日志 — SSE 实时推送注册日志到前端，便于监控和调试。
- 账号生命周期管理 — 定时有效性检测、token 自动续期、trial 过期预警。
- Any2API 联动 — 注册完成后自动推送账号到 Any2API 网关，实现即用。

## 快速開始

1. 克隆项目
```bash
git clone https://github.com/asz798838958/aBaiAutoplus.git
```
2. 创建虚拟环境并安装依赖
```bash
python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
```
3. 启动服务
```bash
.venv/bin/python3 -m uvicorn main:app --port 8000
```

## 程式碼範例

```python
# 前置條件：安裝依賴並啟動服務
POST /api/tasks/gopay-pay-chatgpt
{
  "chatgpt_account_ids": ["1", "2"],
  "gopay_account_id": "your_gopay_id",
  "register_count": 1
}
# 預期輸出：成功創建付款任務，返回任務 ID。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1533 stars（307/天），forks 695（45.3%），這顯示出極高的使用興趣。作者 asz798838958 和 P0me1oo 在開源社群中有一定的影響力，並且這個專案解決了在多平台上自動註冊和管理 AI 账号的需求，特別是針對 ChatGPT Plus 的付款問題。之前的解決方案往往缺乏針對特定市場的支付支持，這使得 aBaiAutoplus 成為一個受歡迎的選擇。社群的活躍度也反映在開發者對於功能擴展和問題解決的積極參與上。

## 適合誰使用

**目標受眾**：需要批量管理 AI 账号並希望自動化註冊流程的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來自動註冊多個 ChatGPT 账号，因為手動註冊耗時且容易出錯。
> - 產品經理用它來測試不同平台的 AI 服務，因為它支持多平台的快速註冊和管理。
> - DevOps 工程師用它來整合 AI 服務到 CI/CD 流程中，因為它提供 API 接口和自動化功能。

## 架構分析

aBaiAutoplus 採用微服務架構，後端使用 FastAPI 提供 RESTful API，前端則使用 React 進行用戶界面構建。數據存儲使用 SQLite，這使得部署和維護都相對簡單。整體架構支持插件化擴展，允許用戶根據需求添加新的平台支持。這種設計使得系統具有良好的擴展性，但在高並發場景下可能會遇到性能瓶頸，特別是在數據庫操作上。使用 Docker 部署可以簡化環境配置，但需要注意容器間的網路配置和數據持久化問題。

## 技術深入分析

aBaiAutoplus 的核心技術機制基於 FastAPI 和 SQLite，這使得其在處理 RESTful API 請求時具備高效能和靈活性。使用 Playwright 進行瀏覽器自動化，能夠有效地處理複雜的註冊流程，特別是在需要人機交互的場景中。該專案的設計考慮到了多平台的兼容性，並且支持插件化擴展，這意味著用戶可以根據需求添加新的功能。性能方面，SQLite 在小型專案中表現良好，但在高並發的情況下可能會成為瓶頸，特別是在數據寫入操作上。選擇 FastAPI 而非 Django 等框架，主要是因為其輕量級和高效能的特性，這使得開發和部署都更加靈活。整體而言，這個專案在技術選型上做出了合理的取捨，能夠在多種環境下運行，但在面對大規模用戶時仍需注意性能優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但對於新手來說，可能需要一些額外的配置。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多平台的自动注册和管理，适合需要批量处理的场景。
> - 提供实时日志和注册成功率仪表盘，便于监控和调试。
> - 支持多种支付方式，特别是针对印尼市场的 GoPay 支持。

> [!danger] 缺點
> - 对接码服务依赖较大，可能导致注册失败率上升。
> - 需要一定的技术背景才能进行配置和使用。
> - 在高并发场景下可能会遇到性能瓶颈。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 Node.js 18+。
> - 需要印尼手机号接码进行 GoPay 账号注册。
> - 使用 Docker 部署时需配置安全组放行特定端口。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [lxf746/any-auto-register](https://github.com/lxf746/any-auto-register) | 本專案在支付方式和接码渠道上提供了更多選擇，特別是針對印尼市場的 GoPay 支持。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 該工具專注於 AI agent 的生成，而本專案則重點在於帳號的自動註冊和管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [lxf746/any-auto-register](https://github.com/lxf746/any-auto-register) | 主要專注於自動註冊功能，而本專案在支付和多平台支持上有更全面的設計。 | 如果只需要基本的自動註冊功能，而不需要支付集成，則可以選擇它。 | medium，因為需要重新配置支付和平台支持。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的生成，而本專案則重點在於帳號的自動註冊和管理。 | 如果你的需求主要是生成 AI agent，而不是註冊帳號，則可以選擇它。 | low，因為功能範圍不同，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aBaiAutoplus** | **any-auto-register** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 主要專注於自動註冊功能，而本專案在支付和多平台支持上有更全面的設計。 | 專注於 AI agent 的生成，而本專案則重點在於帳號的自動註冊和管理。 |
> | 遷移成本 | - | medium，因為需要重新配置支付和平台支持。 | low，因為功能範圍不同，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果只需要基本的自動註冊功能，而不需要支付集成，則可以選擇它 | 如果你的需求主要是生成 AI agent，而不是註冊帳號，則 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和學習，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** GoPay 付款時可能因接码服务不稳定导致注册失败
  - 解法：使用多个接码渠道进行轮换
- [MEDIUM] 在高并发情况下，SQLite 可能成为性能瓶颈
  - 解法：考虑使用更强大的数据库如 PostgreSQL

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量注册 ChatGPT 账号的团队 | 非常适合 | 具备高效的自动注册和管理功能，支持并发操作。 |
| 小型开发者希望快速测试多个 AI 服务 | 适合 | 支持多平台注册，便于快速迭代。 |
| 大型企业需要稳定的账号管理系统 | 不适合 | 目前仍处于 alpha 阶段，稳定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到高效的自動註冊和管理功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具不需要高權限運行，但需要配置多個 API key，使用時需注意保護這些敏感信息。整體來說，將其集成到 CI/CD 流程中是安全的，但需確保 API key 的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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
| Forks | 695 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-06-05 |
| 建立日期 | 2026-05-31 |
| Repo 大小 | 10.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/asz798838958/aBaiAutoplus) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `sqlmodel` `curl_cffi` `requests` `playwright` `pydantic` `jwcrypto` `cbor2` `camoufox` `aiofiles` `patchright` `quart` `rich` `pyinstaller`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 53
>     "HTML" : 39
>     "TypeScript" : 7
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@asz798838958](https://github.com/asz798838958) | 17 |
> | [@P0me1oo](https://github.com/P0me1oo) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度高，開發者積極參與問題解決和功能擴展。
**連結**：[文件](https://github.com/asz798838958/aBaiAutoplus#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-05）
> **活躍天數** 4 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/asz798838958/aBaiAutoplus/issues/2) | 协议注册的gopay怎么才能自动送1rp？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # aBaiAutoplus
> 
>   多平台 AI 账号自动注册与管理 · 协议化付款一键开通 ChatGPT Plus
> 
>   
>   
>   
>   
> 
>   全程vibe coding，代码质量有所欠缺
>   ChatGPT plus的AI 平台账号自动注册与管理
>   协议 / 浏览器双模式 · PayPal浏览器注册+内置 GoPay 协议付款 ChatGPT Plus 
> 
> > ⚠️ **免责声明**：本项目仅供学习和研究使用，不得用于任何商业用途，也不得用于违反目标平台服务条款（ToS）的行为。使用本项目所产生的一切后果由使用者自行承担。
> 
> > 🙏 **致谢**：本项目基于 [`lxf746/any-auto-register`](https://github.com/lxf746/any-auto-register) 二次开发，在其插件化注册框架之上扩展了**PayPal 浏览器注册ChatGPT Plus** **GoPay 协议注册ChatGPT Plus** 等能力。感谢原作者的开源工作。本仓库与上游各自独立维护。
> 
> 多平台账号自动注册与管理系统，支持插件化扩展，内置 Web UI 与桌面客户端。
> 
> 
> ## Any2API 联动
> 
> 配合 [Any2API](https://github.com/lxf746/any2api) 项目使用，注册完成后自动推送账号到网关，实现注册即可用。
> 
> 在全局配置中设置 `any2api_url`（如 `http://localhost:8099`）和 `any2api_password` 后，每次注册成功会自动推送：
> 
> | 平台     | 推送目标                  |
> | -------- | ------------------------- |
> | Kiro     | `kiroAccounts` 账号池     |
> | Grok     | `grokTokens` token 池     |
> | Cursor   | `cursorConfig` cookie     |
> | ChatGPT  | `chatgptConfig` token     |
> | Blink    | `blinkConfig` 凭证        |
> | Windsurf | `windsurfAccounts` 账号池 |
> 
> 未配置 `any2api_url` 时此功能静默跳过。也可手动导出：
> 
> - `POST /api/accounts/export/any2api` — 导出为 Any2API admin.json 格式
> - `POST /api/accounts/export/kiro-go` — 导出为 Kiro-Go config.json 格式
> 
> 
> ## 目录
> 
> - [相比上游的新增能力](#相比上游的新增能力)
> - [功能特性](#功能特性)
> - [支持的平台](#支持的平台)
> - [界面预览](#界面预览)
> - [技术栈](#技术栈)
> - [快速开始](#快速开始)
> - [桌面版下载](#桌面版下载)
> - [Docker 部署](#docker-部署)
> - [GoPay 付款 ChatGPT Plus](#gopay-付款-chatgpt-plus)
> - [邮箱服务配置](#邮箱服务配置)
> - [验证码服务配置](#验证码服务配置)
> - [代理池配置](#代理池配置)
> - [接码服务配置](#接码服务配置)
> - [账号生命周期管理](#账号生命周期管理)
> - [注册成功率仪表盘](#注册成功率仪表盘)
> - [Any2API 联动](#any2api-联动)
> - [项目结构](#项目结构)
> - [插件开发](#插件开发)
> - [安全说明](#安全说明)
> - [常见问题](#常见问题)
> - [参与贡献](#参与贡献)
> - [License](#license)
> 
> 
> ## 相比上游的新增能力
> 
> 本项目在 [`any-auto-register`](https://github.com/lxf746/any-auto-register) 基础上重点扩展：
> 
> | 新增能力                       | 说明                                                                          |
> | ------------------------------ | ----------------------------------------------------------------------------- |
> | � **PayPal日区/美区 付款 ChatGPT Plus** | PayPal浏览器多线程付款，自动完成 ChatGPT Plus 订阅全链路 |
> | � **GoPay 付款 ChatGPT Plus** | 印尼 GoPay 协议化付款，自动完成 ChatGPT Plus 订阅的「生成支付链接 → Midtrans 收银台 → GoPay 14 步 API 付款」全链路 |
> | � **GoPay 账号自动注册**      | 印尼手机号 + PIN 协议注册 GoPay 账号，支持接码渠道轮换                         |
> | 🧾 **接码渠道扩展**            | 在原有 SMS-Activate / HeroSMS 之外，新增 SMSPool、SMSBower 渠道                |
> | 🌐 **C 端 / 管理端独立 API**   | `customer_portal_api/` 提供可独立部署的多租户门户后端                          |
> 
> > 其余平台注册、邮箱 / 验证码 / 代理 provider、生命周期管理、成功率仪表盘等能力沿用并兼容上游框架。
> 
> 
> ## 功能特性
> 
> - **多平台支持**：ChatGPT、Cursor、Kiro、Trae.ai、Tavily、Grok、Blink、Cerebras、OpenBlockLabs、Windsurf、GoPay，支持自定义插件扩展（Anything 通用适配器）
> - **多邮箱服务**：MoeMail（自建）、Laoudo、DuckMail、Testmail、outlookEmail、Cloudflare Worker 自建邮箱、Freemail、TempMail.lol、Temp-Mail Web、DuckDuckGo Email
> - **多执行模式**：API 协议（无浏览器）、无头浏览器、有头浏览器（各平台按需支持）
> - **验证码服务**：YesCaptcha、2Captcha、本地 Solver（Camoufox）
> - **接码服务**：SMS-Activate、HeroSMS、SMSPool、SMSBower
> - **代理池管理**：静态代理轮询 + 动态代理 API 提取 + 旋转网关代理，成功率统计、自动禁用失效代理
> - **账号生命周期**：定时有效性检测、token 自动续期、trial 过期预警
> - **注册成功率仪表盘**：按平台、按天、按代理的成功率统计，错误聚合分析
> - **并发注册**：可配置并发数
> - **实时日志**：SSE 实时推送注册日志到前端
> - **账号导出**：支持 JSON、CSV、CPA、Sub2API、Kiro-Go、Any2API 多种格式
> - **Any2API 联动**：注册完成后自动推送账号到 Any2API 网关，注册即可用
> - **平台扩展操作**：各平台可自定义操作（如 Kiro 账号切换、Trae Pro 升级链接生成、GoPay 付款 Plus）
> 
> 
> ## 支持的平台
> 
> | 平台          | 协议模式 | 浏览器模式 | OAuth | 备注                         |
> | ------------- | :------: | :--------: | :---: | ---------------------------- |
> | ChatGPT       |    ✅    |    ✅     |  ✅   | Plus 支付链接 / PayPal 结账  |
> | Cursor        |    -    |     ✅     |  -   | 需手机验证                   |
> | Kiro          |    -    |     ✅     |  -   | 支持账号切换                 |
> | Trae.ai       |    -    |     ✅     |  -   | Pro 升级链接生成             |
> | Grok          |    -    |     ✅     |  -   |                              |
> | Windsurf      |    -    |     ✅     |  -   | Trial 链接生成               |
> | Tavily        |    -    |     ✅     |  -   |                              |
> | Blink         |    -    |     ✅     |  -   |                              |
> | Cerebras      |    -    |     ✅     |  -   |                              |
> | OpenBlockLabs |    -    |     ✅     |  -   |                              |
> | GoPay         |    ✅    |     —      |  —    | 印尼 GoPay，手机 + PIN，付款 Plus |
> | Anything      |    -    |     ✅     |  —    | 通用适配器，配置即接入新平台 |
> 
> > 各平台实际支持的执行器以插件 `supported_executors` 声明为准，可在 Web UI「平台能力」页查看与覆盖。
> 
> 
> ## 界面预览
> 
> > 📸 _截图将随版本迭代持续更新。_
> 
> ### 交流联系方式
> 
> 
> ### gopay注册生成gptplus
> 
> 
> ### PayPal注册gptplus
> 
> 
> ### PayPal注册gptplus
> 
> 
> ### 设置
> 
> 
> ## 技术栈
> 
> | 层级         | 技术                                    |
> | ------------ | --------------------------------------- |
> | 后端         | FastAPI + SQLite（SQLModel）            |
> | 前端         | React + TypeScript + Vite + TailwindCSS |
> | HTTP         | curl_cffi / tls_client（浏览器指纹伪装） |
> | 浏览器自动化 | Playwright / Camoufox / BitBrowser      |
> | 桌面端       | Electron（内置后端 + 前端）             |
> 
> 
> ## 快速开始
> 
> 
> ### 环境要求
> 
> - Python 3.11+
> - Node.js 18+
> 
> 
> ### 安装
> 
> #### macOS / Linux
> 
> ```bash
> 
> # 克隆项目
> git clone https://github.com/asz798838958/aBaiAutoplus.git
> cd aBaiAutoplus
> 
> 
> # 创建虚拟环境
> python3 -m venv .venv
> source .venv/bin/activate
> 
> 
> # 安装后端依赖
> pip install -r requirements.txt
> 
> 
> # 构建前端
> cd frontend
> npm install
> npm run build
> cd ..
> ```
> 
> #### Windows
> 
> ```bat
> :: 克隆项目
> git clone https://github.com/asz798838958/aBaiAutoplus.git
> cd aBaiAutoplus
> 
> :: 创建虚拟环境
> python -m venv .venv
> .venv\Scripts\activate
> 
> :: 安装后端依赖
> pip install -r requirements.txt
> 
> :: 构建前端
> cd frontend
> npm install
> npm run build
> cd ..
> ```
> 
> 
> ### 安装浏览器（可选，无头/有头浏览器模式需要）
> 
> ```bash
> 
> # Playwright 浏览器
> python3 -m playwright install chromium
> 
> 
> # Camoufox（用于本地 Turnstile Solver）
> python3 -m camoufox fetch
> ```
> 
> 
> ### 配置环境变量（可选）
> 
> 复制示例文件并按需填写：
> 
> ```bash
> cp .env.example .env
> ```
> 
> 所有第三方 API key（接码、验证码、代理）均通过环境变量或 Web UI 配置，**仓库内不包含任何真实密钥**。
> 
> 
> ### 启动
> 
> #### macOS / Linux
> 
> ```bash
> .venv/bin/python3 -m uvicorn main:app --port 8000
> ```
> 
> #### Windows
> 
> ```bat
> .venv\Scripts\python -m uvicorn main:app --port 8000
> ```
> 
> 浏览器访问 `http://localhost:8000`
> 
> 说明：
> 
> - 启动入口统一为 `main:app`
> - 后端接口统一位于 `/api/*`
> - 生产模式下前端构建产物由后端直接托管，访问 `http://localhost:8000` 即可
> - 开发模式下前端独立运行在 `http://localhost:5173`，通过 Vite 代理转发 API 请求
> - C 端 / 管理端独立 API 项目见 [customer_portal_api/README.md](customer_portal_api/README.md)
> 
> 
> ### 开发模式（前端热更新）
> 
> ```bash
> cd frontend
> npm run dev
> 
> # 访问 http://localhost:5173
> ```
> 
> 
> ## 桌面版下载
> 
> 暂不提供安装包使用，没办法开箱即用
> 
> 如需源码运行或自行打包，参考上方 [快速开始](#快速开始) 与 `electron/` 目录。
> 
> 
> ## Docker 部署
> 
> 
> ### 从源码构建
> 
> ```bash
> git clone https://github.com/asz798838958/aBaiAutoplus.git
> cd aBaiAutoplus
> docker compose up -d --build
> ```
> 
> `docker-compose.yml` 示例：
> 
> ```yaml
> services:
>   app:
>     build: .
>     ports:
>       - "8000:8000"   # FastAPI / Web UI
>       - "6080:6080"   # noVNC (headed 浏览器预览)
>       - "8889:8889"   # Turnstile Solver
>     environment:
>       - DISPLAY=:99
>       - ACCOUNT_MANAGER_DATABASE_URL=sqlite:////app/data/account_manager.db
>       # 可选：设置访问密码，不设置则无密码保护
>       # - APP_PASSWORD=changeme
>       # 可选：设置 VNC 密码
>       # - VNC_PASSWORD=changeme
>     volumes:
>       - ./data:/app/data   # 持久化 SQLite 数据库
>     restart: unless-stopped
> ```
> 
> 
> ### 访问地址
> 
> | 服务   | 地址                             | 说明                        |
> | ------ | -------------------------------- | --------------------------- |
> | Web UI | `http://localhost:8000`          | 主界面                      |
> | noVNC  | `http://localhost:6080/vnc.html` | 可视化浏览器（headed 模式） |
> | Solver | `http://localhost:8889`          | Turnstile 验证码求解器      |
> 
> > 云服务器部署时，请确保安全组/防火墙放行 8000、6080、8889 端口；公网部署务必设置 `APP_PASSWORD` 访问密码。
> 
> 
> ### 常用命令
> 
> ```bash
> docker compose logs -f      # 查看日志
> docker compose restart      # 重启
> docker compose down         # 停止
> ```
> 
> 
> ## GoPay 付款 ChatGPT Plus
> 
> 这是本项目相对上游的核心扩展功能：用印尼 GoPay 协议化付款，自动完成 ChatGPT Plus 订阅。
> 
> 
> ### 流水线
> 
> 整条链路分三步（实现见 `application/gopay_pay_chatgpt.py`）：
> 
> 1. **协议** — 调用 `generate_plus_link(country=ID, currency=IDR)` 拿到 ChatGPT 的 `cashier_url`（Stripe hosted checkout）
> 2. **浏览器** — 打开 `cashier_url`，等页面跳转到 Midtrans 收银台域，抓取 `midtrans_url`
> 3. **协议** — 用 GoPay 账号调用 `GoPayPayment.pay(midtrans_url, a

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[多模態]]

相關專案：[[lxf746--any-auto-register|lxf746/any-auto-register]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/asz798838958/aBaiAutoplus)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "asz798838958--aBaiAutoplus"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "asz798838958--aBaiAutoplus"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "asz798838958--aBaiAutoplus" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "asz798838958--aBaiAutoplus"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "asz798838958--aBaiAutoplus" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "asz798838958--aBaiAutoplus" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "asz798838958" AND file.name != "asz798838958--aBaiAutoplus"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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
> const me = dv.page("Repos/asz798838958--aBaiAutoplus");
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

> **2026-06-02** — 首次收錄
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

- [[2026-06-06|2026-06-06]] — 再次上榜，1.5k stars
- [[2026-06-05|2026-06-05]] — 再次上榜，1.5k stars
- [[2026-06-04|2026-06-04]] — 再次上榜，1.4k stars
- [[2026-06-03|2026-06-03]] — 再次上榜，1.0k stars
- [[2026-06-02|2026-06-02]] — 首次收錄，652 stars
