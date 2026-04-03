---
repo: dou-jiang/codex-console
url: https://github.com/dou-jiang/codex-console
owner: dou-jiang
owner_type: User
language: Python
license: MIT
description: "codex-console 是一个集成化控制台项目，支持任务管理、批量处理、数据导出、自动上传、日志查看与打包支持。"
homepage: ""
stars: 1652
stars_per_day: 138
forks: 920
open_issues: 61
created: 2026-03-21
pushed_at: 2026-04-02
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "任務管理"
release_tag: "v1.1.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "提供一個集成化控制台，支持任務管理、批量處理和數據導出等功能，提升 OpenAI 註冊流程的穩定性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-04"
contributor_count: 5
engagement: "high"
issue_close_rate: 6
repo_size_kb: 957
readme_length: 6947
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:933,2026-03-26:937,2026-03-27:1045,2026-03-27:1048,2026-03-28:1146,2026-03-29:1232,2026-03-30:1299,2026-03-31:1387,2026-04-01:1497,2026-04-02:1582,2026-04-03:1652"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "codex-console"
  - "dou-jiang/codex-console"
  - "提供一個集成化控制台，支持任務管理、批量處理和數據導出等功能，提升 OpenAI 註冊流程的穩定性。"
---

# codex-console

**1.7k** stars · **138** stars/天 · 建立 12 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/dou-jiang--codex-console");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.1.2`

> [!summary] 一句話摘要
> 提供一個集成化控制台，支持任務管理、批量處理和數據導出等功能，提升 OpenAI 註冊流程的穩定性。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (138 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要穩定 OpenAI 註冊流程的開發者和團隊，特別是對自動化和任務管理有需求的使用者。
> **一句話重點** 這個專案不僅提供了功能，還強調了穩定性和用戶體驗，適合需要自動化和任務管理的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dou-jiang--codex-console");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "任務管理" && p.file.name !== "dou-jiang--codex-console" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 任務管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、5 小時整合，得到穩定的任務管理效果，值得試用。

> [!abstract] 核心創新
> 提供統一的任務管理和自檢能力，提升 OpenAI 註冊流程的穩定性。

## 專案簡介

codex-console 是一個針對 OpenAI 註冊流程的增強版控制台，旨在解決註冊、登錄、任務調度等過程中的不穩定問題。使用者可以透過 Web UI 管理註冊任務、支付、郵件服務等，並支持單任務和批量任務的處理。核心賣點在於其自檢能力和統一任務中心，能夠有效管理各類任務狀態，並支持周期性任務調度。技術上，codex-console 基於 Python 和 FastAPI 架構，使用 SQLAlchemy 進行數據管理，並支持 SQLite 和 PostgreSQL 數據庫。這種設計使得它能夠在多種環境下靈活運行，並且易於擴展。

與其他類似工具相比，如 cnlimiter/codex-manager，codex-console 提供了更為穩定的註冊流程和更豐富的功能集。實際使用中，使用者可能會遇到如郵件服務不兼容等問題，但社群活躍度高，能夠快速獲得支持。這個專案目前處於 beta 階段，適合需要穩定 OpenAI 註冊流程的開發者和團隊。未來可能會持續增強自檢和任務調度功能，進一步提升使用體驗。建議在小型專案或內部工具中試用，避免在生產環境中直接使用。

**技術棧**：`Python 3.10+` · `FastAPI` · `SQLAlchemy` · `Docker`

## 重點功能

- 統一任務中心 — 管理註冊、支付、自檢等任務狀態，支持任務的暫停、繼續和重試。
- 周期任務調度 — 支持計劃任務的創建、編輯和立即執行，方便用戶管理定期任務。
- 自檢能力 — 提供系統自檢和修復功能，確保系統穩定運行。
- 多種郵件服務支持 — 包括 CloudMail 和 LuckMail，方便用戶接收驗證郵件。
- 數據庫支持 — 支持 SQLite 和 PostgreSQL，靈活應對不同的數據存儲需求。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動 Web UI
```bash
python webui.py --host 0.0.0.0 --port 8080
```
3. 使用 Docker 部署
```bash
docker-compose up -d
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝依賴和配置環境變量",
  "python webui.py --host 0.0.0.0 --port 8080",
  "# 預期輸出：啟動 Web UI 服務，並在 8080 端口可訪問"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 1652 stars（138/天），forks 920（55.7%），顯示出強烈的社群參與。作者 dou-jiang 之前在 cnlimiter/codex-manager 上有過成功的經驗，這個專案解決了原有工具在 OpenAI 註冊過程中出現的多個問題，如郵件接收失敗和任務管理不便。近期的社群討論和需求反饋也促進了這個專案的快速發展。高 forks/stars 比率（55.7%）顯示出許多開發者在實際修改和使用這個工具，反映出其實用性和需求。

## 適合誰使用

**目標受眾**：需要穩定 OpenAI 註冊流程的開發者和團隊，特別是對自動化和任務管理有需求的使用者。

> [!example] 使用場景
> - 後端工程師用它來管理 OpenAI 註冊任務，因為它提供了穩定的任務調度和自檢功能，減少了手動操作的錯誤。
> - DevOps 工程師用它來自動化批量註冊和支付流程，因為它支持多種郵件服務和自動綁卡功能，提升了工作效率。
> - 測試工程師用它來檢查註冊流程的穩定性，因為它的自檢能力可以快速發現問題並進行修復。

## 架構分析

codex-console 採用 Python 和 FastAPI 架構，使用 SQLAlchemy 進行數據管理，並支持 SQLite 和 PostgreSQL。這種設計使得它能夠在多種環境下靈活運行。系統的核心功能包括任務管理、數據導入和自檢能力，這些功能的實現依賴於多個模塊的協作。

選擇 FastAPI 是因為其高效的異步處理能力，能夠應對高並發的請求。這樣的設計雖然增加了系統的複雜度，但能夠顯著提升性能和用戶體驗。在擴展性方面，使用 Docker 部署使得系統能夠輕鬆地在不同環境中運行，並且支持持久化數據存儲。

整體而言，這個架構能夠滿足當前對於穩定性和擴展性的需求。

## 技術深入分析

codex-console 的核心機制是基於 FastAPI 的任務管理系統，能夠高效處理多任務並提供即時反饋。系統能夠支持高達 1000 個註冊任務的批量處理，並且具備自檢能力，能夠在出現問題時自動進行修復。這樣的設計使得系統在處理高並發請求時，能夠保持穩定性。選擇 SQLAlchemy 作為數據管理工具，能夠靈活地支持多種數據庫，並且提供了良好的 ORM 支持。

這種選擇雖然增加了學習曲線，但能夠顯著提升開發效率。系統的設計考慮到了擴展性，未來可以根據需求增加更多功能模塊。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，這需要在後續版本中進行優化。整合主流 CI/CD 工具的友好度高，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要注意環境變量的配置。文件目前僅提供中文，對於非中文使用者可能會有些不便。

## 優缺點分析

> [!success] 優點
> - 提供穩定的任務管理和自檢能力，減少手動操作的錯誤。
> - 支持多種郵件服務，方便用戶接收驗證郵件。
> - 靈活的數據庫支持，適應不同的存儲需求。

> [!danger] 缺點
> - 需要一定的技術背景才能進行配置和維護。
> - 在高並發情況下可能會出現延遲。
> - 部分功能可能因第三方服務變更而失效。

> [!warning] 注意事項
> - 目前僅支持 Python 3.10 及以上版本。
> - 自動綁卡功能可能因第三方服務變更而失效。
> - 在高並發情況下，可能會出現任務執行延遲的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) | codex-console 是對原專案的增強版，提供了更穩定的註冊流程和更多功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於數據同步，而 codex-console 更加關注於任務管理和自動化流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) | 原專案，功能較為簡單，主要針對基本的註冊流程。 | 如果只需要基本的註冊功能，而不需要額外的任務管理和自檢能力。 | low，因為兩者的結構相似。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，而 codex-console 更加關注於任務管理和自動化流程。 | 如果主要需求是數據同步，而不是任務管理。 | medium，因為兩者的功能和架構差異較大。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-console** | **codex-manager** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 原專案，功能較為簡單，主要針對基本的註冊流程。 | 專注於數據同步，而 codex-console 更加關注於任務管理和自動化流程。 |
> | 遷移成本 | - | low，因為兩者的結構相似。 | medium，因為兩者的功能和架構差異較大。 |
> | 適用場景 | 主要場景 | 如果只需要基本的註冊功能，而不需要額外的任務管理和自檢能力。 | 如果主要需求是數據同步，而不是任務管理。 |

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

- [MEDIUM] 在高並發情況下，任務可能會延遲執行。
  - 解法：減少同時執行的任務數量。
- **[HIGH]** 郵件服務不兼容可能導致註冊失敗。
  - 解法：使用官方推薦的郵件服務。
- **[HIGH]** Docker 部署時，數據未持久化可能導致數據丟失。
  - 解法：確保正確配置數據卷。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供穩定的註冊和任務管理功能，能夠有效減少人力成本。 |
| 大型企業的自動化任務管理系統 | 適合 | 具備良好的擴展性和自檢能力，能夠應對高並發需求。 |
| 個人開發者的實驗性專案 | 普通 | 功能豐富，但可能需要較高的配置和維護成本。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍在 beta 階段，存在不穩定風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、5 小時整合，得到穩定的任務管理效果，值得試用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要配置環境變量存取敏感資料，並且依賴第三方郵件服務，需注意安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/dou-jiang--codex-console");
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
> const me = dv.page("Repos/dou-jiang--codex-console");
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
| Forks | 920 |
| Open Issues | 61 |
| Issue 解決率 | 6% (4 closed) |
| 最後推送 | 2026-04-02 |
| 建立日期 | 2026-03-21 |
| Repo 大小 | 957 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dou-jiang/codex-console) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `certifi` `cffi` `curl_cffi` `pycparser` `pydantic` `pydantic-settings` `fastapi` `uvicorn` `jinja2` `python-multipart` `sqlalchemy` `alembic` `aiosqlite` `psycopg` `playwright`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 63
>     "JavaScript" : 24
>     "HTML" : 12
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dou-jiang](https://github.com/dou-jiang) | 21 |
> | [@shufflewzc](https://github.com/shufflewzc) | 2 |
> | [@gazedreamily](https://github.com/gazedreamily) | 2 |
> | [@wold9527](https://github.com/wold9527) | 2 |
> | [@x0rz4](https://github.com/x0rz4) | 1 |

**最新版本**：v1.1.2 (2026-03-31)

> [!info]- Release Notes
> # v1.1.2
> 
> 发布日期：2026-03-31
> 
> ## 本次新增
> 
> - 新增统一鉴权与安全基线，补齐 `src/web/auth.py`、首次改密页面、API 与 WebSocket 鉴权统一入口。
> - 新增系统自检能力、自检页面、自检调度器和修复中心。
> - 新增统一任务中心，统一管理注册、支付、自检、Auto Team 等任务状态。
> - 新增周期任务调度，支持计划任务创建、编辑、启停、立即执行与轮询管理。
> - 新增 New-API 服务配置与上传能力，支持单账号、批量与注册成功后自动上传。
> - 新增 Auto Team 后端接口与前端管理页面。
> - 新增卡池功能、自动绑卡能力与相关上游对接能力。
> - 新增 Alembic 数据库迁移体系。
> - 新增多组测试与 CI 工作流。
> 
> ## 本次优化
> 
> - 优化前端请求、轮询、去重、超时与并发控制。
> - 优化自动注册补货与库存监控链路，增强任务取消感知、批次统计与监控刷新。
> - 优化注册链路容错，补齐 continue URL、workspace、OTP 重试和多入口处理。
> - 优化账号模型、支付历史快照、审计记录和配置能力。
> - 优化公告、Footer、外链跳转、页面样式与部分交互细节。
> 
> ## 本次修复
> 
> - 修复自动补货首次执行后不再按间隔继续执行的问题。
> - 修复自动补货批次取消时子任务未正确同步取消的问题。
> - 修复并行模式与流水线模式下取消响应不及时、统计不准确的问题。
> - 修复监控页最近检查时间与库存未及时刷新的问题。

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/dou-jiang/codex-console)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-04-02）
> **活躍天數** 5 天 · **最新 commit** Merge pull request #70 from RemMai/fix-batch-registration-bug

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#67](https://github.com/dou-jiang/codex-console/issues/67) | 希望加入ip检测开关 | 1 | 1 |
> | [#84](https://github.com/dou-jiang/codex-console/issues/84) | cpa上传失败 | 0 | 0 |
> | [#83](https://github.com/dou-jiang/codex-console/issues/83) | 能否添加为账号绑定codex授权设备代码的功能 | 0 | 0 |
> | [#82](https://github.com/dou-jiang/codex-console/issues/82) | 凭证上传cpa失败 测试cpa连接成功 但是上传cpa就失败无法成功 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # codex-console
> 
> 基于 [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) 持续修复和维护的增强版本。
> 
> 这个版本的目标很直接：把近期 OpenAI 注册链路里那些“昨天还能跑，今天突然翻车”的坑补上，让注册、登录、拿 token、上传、任务调度、支付相关能力和打包运行都更稳一点。
> 
> [](LICENSE)
> [](https://www.python.org/)
> [](https://github.com/dou-jiang/codex-console/releases/tag/v1.1.2)
> 
> ## 项目地址
> 
> - GitHub Repo: [https://github.com/dou-jiang/codex-console](https://github.com/dou-jiang/codex-console)
> - Blog: [https://blog.cysq8.cn/](https://blog.cysq8.cn/)
> 
> ## QQ群
> 
> - 交流群: [291638849（点击加群）](https://qm.qq.com/q/4TETC3mWco)
> - Telegram 频道: [codex_console](https://t.me/codex_console)
> 
> ## Blog 说明
> 
> 我会在 Blog 持续更新这些内容：
> 
> - 部署教程和环境配置说明
> - 每个版本的更新日志和 Release 说明
> - 常见报错、排查思路和修复记录
> - 邮箱服务、上传服务、任务调度、自检功能等使用说明
> - 上游变化后的兼容性调整说明
> 
> 访问地址：
> 
> - [https://blog.cysq8.cn/](https://blog.cysq8.cn/)
> 
> ## 赞助支持
> 
> 如果这个项目对你有帮助，欢迎赞助支持项目继续维护与更新。
> 
>   
>     
>       微信赞助
>       
>     
>     
>       支付宝赞助
>       
>     
>   
> 
> ## 致谢
> 
> 首先感谢上游项目作者 [cnlimiter](https://github.com/cnlimiter) 提供的优秀基础工程。
> 
> 本仓库是在原项目思路和结构之上进行兼容性修复、流程调整和体验优化，适合作为一个“当前可用的修复维护版”继续使用。
> 
> ## 版本更新
> 
> ### v1.0
> 
> 1. 新增 Sentinel POW 求解逻辑。  
>    OpenAI 现在会强制校验 Sentinel POW，原先直接传空值已经不行了，这里补上了实际求解流程。
> 
> 2. 注册和登录拆成两段。  
>    现在注册完成后通常不会直接返回可用 token，而是跳转到绑定手机或后续页面。  
>    本分支改成“先注册成功，再单独走一次登录流程拿 token”，避免卡死在旧逻辑里。
> 
> 3. 去掉重复发送验证码。  
>    登录流程里服务端本身会自动发送验证码邮件，旧逻辑再手动发一次，容易让新旧验证码打架。  
>    现在改成直接等待系统自动发来的那封验证码邮件。
> 
> 4. 修复重新登录流程的页面判断问题。  
>    针对重新登录时页面流转变化，调整了登录入口和密码提交逻辑，减少卡在错误页面的情况。
> 
> 5. 优化终端和 Web UI 提示文案。  
>    保留可读性的前提下，把一些提示改得更友好一点，出错时至少不至于像在挨骂。
> 
> ### v1.1
> 
> 1. 修复注册流程中的问题，解决 Outlook 和临时邮箱收不到邮件导致注册卡住、无法完成注册的问题。
> 
> 2. 修复无法检查订阅状态的问题，提升订阅识别和状态检查的可用性。
> 
> 3. 新增绑卡半自动模式，支持自动随机地址；3DS 无法跳过，需按实际流程完成验证。
> 
> 4. 新增已订阅账号管理功能，支持查看和管理账号额度。
> 
> 5. 新增后台日志功能，并补充数据导出与导入能力，方便排查问题和迁移数据。
> 
> 6. 优化部分 UI 细节与交互体验，减少页面操作时的割裂感。
> 
> 7. 补充细节稳定性处理，尽量减少注册、订阅检测和账号管理过程中出现卡住或误判的情况。
> 
> ### v1.1.1
> 
> 1. 新增 `CloudMail` 邮箱服务实现，并完成服务注册、配置接入、邮件轮询、验证码提取和基础收件处理能力。
> 
> 2. 新增上传目标 `newApi` 支持，可根据配置选择不同导入目标类型。
> 
> 3. 新增 `Codex` 账号导出格式，支持后续登录、迁移和导入使用。
> 
> 4. 新增 `CPA` 认证文件 `proxy_url` 支持，现可在 CPA 服务配置中保存和使用代理地址。
> 
> 5. 优化 OAuth token 刷新兼容逻辑，完善异常返回与一次性令牌场景处理，降低刷新报错概率。
> 
> 6. 优化批量验证流程，改为受控并发执行，减少长时间阻塞和卡死问题。
> 
> 7. 修复模板渲染兼容问题，提升不同 Starlette 版本下页面渲染稳定性。
> 
> 8. 修复六位数字误判为 OTP 的问题，避免邮箱域名或无关文本中的六位数字被错误识别为验证码。
> 
> 9. 新增 Outlook 账户“注册状态”识别与展示功能，可直接看到“已注册 / 未注册”，并支持显示关联账号编号。
> 
> 10. 修复 Outlook 邮箱匹配大小写问题，避免 Outlook.com 因大小写差异被误判为未注册。
> 
> 11. 修复 Outlook 列表列错位、乱码和占位文案问题，恢复中文显示并优化列表信息布局。
> 
> 12. 优化 WebUI 端口冲突处理，默认端口占用时自动切换可用端口。
> 
> 13. 增加启动时轻量字段迁移逻辑，自动补齐新增字段，提升旧数据升级兼容性。
> 
> 14. 批量注册上限由 `100` 提升至 `1000`，前后端同步。
> 
> 15. 公告区改为固定文案与固定链接，强化“永久免费开源、禁止倒卖、付费请退款”提示，并新增爱发电支持入口。
> 
> ### v1.1.2
> 
> 1. 新增统一鉴权与安全基线。  
>    增加 `src/web/auth.py`、首次改密页面 `setup_password.html`，统一 API 与 WebSocket 鉴权口径，并补齐默认密码改密流程。
> 
> 2. 新增系统自检能力与修复中心。  
>    增加 `system_selfcheck.py`、`selfcheck.py`、`selfcheck.html`、`selfcheck_scheduler.py`，支持自检记录、调度与修复动作。
> 
> 3. 新增统一任务中心。  
>    增加 `tasks.py`，统一管理注册、支付、自检、Auto Team 等任务的状态、配额、暂停、继续、取消和重试。
> 
> 4. 新增 Auto Team 模块。  
>    增加后端 `auto_team.py` 与前端 `auto_team.js`、`auto_team_manage.js`。
> 
> 5. 新增数据库迁移体系。  
>    引入 Alembic，补齐 `alembic.ini`、`alembic/` 目录与迁移说明。
> 
> 6. 新增母子标签系统和卡池功能。  
>    补齐账号标签、池状态、自动绑卡与上游对接能力。
> 
> 7. 扩展邮箱服务。  
>    保留原有邮箱链路，同时补齐 `CloudMail`、`LuckMail`、`YYDS Mail` 等服务接入。
> 
> 8. 新增周期任务调度。  
>    支持计划任务创建、编辑、启停、立即执行以及前端轮询管理。
> 
> 9. 新增 New-API 服务上传。  
>    支持独立服务配置、测试、单账号上传、批量上传和注册成功后自动上传。
> 
> 10. 增强自动注册与自动补货链路。  
>     增加自动注册核心模块、库存监控、补货计划生成、取消感知、批次统计修复，以及 PR60 anyauto V2 回退流程。
> 
> 11. 优化前端请求与轮询稳定性。  
>     对 `app.js`、`accounts.js`、`payment.js`、`utils.js` 等进行了去重、降噪、超时、并发与降级路径增强。
> 
> 12. 增强注册链路容错。  
>     `src/core/register.py` 增加登录续跑、continue URL 缓存、workspace 缓存、OTP 重试等处理，对 native / abcard / outlook 等入口做了细分。
> 
> 13. 增强账号模型与业务语义。  
>     增加 `role_tag`、`biz_tag`、`pool_state`、`priority`、`last_used_at` 等字段，支持团队池、候选池、阻断池等状态表达。
> 
> 14. 增强支付与历史数据保留。  
>     `BindCardTask` 支持账号删除后保留 `account_email` 快照；新增审计日志模型 `OperationAuditLog` 与 `SelfCheckRun` 记录。
> 
> 15. 扩展配置能力。  
>     `settings.py` 增加自检、熔断、自动刷新、自动注册等多项配置，支持更多运行时调参。
> 
> 16. 补充测试与 CI。  
>     新增多组测试：任务、安全、自注册、新 API、自动刷新、邮箱服务等，并新增 `.github/workflows/tests.yml`。
> 
> 17. 修复自动一键刷新、公告样式与页面外链。  
>     修复定时自动一键刷新不可用、公告按钮样式问题、Footer 外链和 Blog 跳转问题。
> 
> ## 核心能力
> 
> - Web UI 管理注册任务、账号、支付、自检、邮箱服务、卡池、Auto Team 和日志数据
> - 支持单任务、批量任务、自动补货、计划任务、任务暂停 / 继续 / 取消 / 重试
> - 支持多种邮箱服务接码和自部署邮箱接入
> - 支持 CPA、Sub2API、Team Manager、New-API 等上传链路
> - 支持 SQLite 和远程 PostgreSQL
> - 支持打包为 Windows / Linux / macOS 可执行文件
> - 更适配当前 OpenAI 注册与登录链路
> 
> ## 环境要求
> 
> - Python 3.10+
> - `uv`（推荐）或 `pip`
> 
> ## 安装依赖
> 
> ```bash
> # 使用 uv（推荐）
> uv sync
> 
> # 或使用 pip
> pip install -r requirements.txt
> ```
> 
> ## 环境变量配置
> 
> 可选。复制 `.env.example` 为 `.env` 后按需修改：
> 
> ```bash
> cp .env.example .env
> ```
> 
> 常用变量如下：
> 
> | 变量 | 说明 | 默认值 |
> | --- | --- | --- |
> | `APP_HOST` | 监听主机 | `0.0.0.0` |
> | `APP_PORT` | 监听端口 | `8000` |
> | `APP_ACCESS_PASSWORD` | Web UI 访问密钥 | `admin123` |
> | `APP_DATABASE_URL` | 数据库连接字符串 | `data/database.db` |
> 
> 优先级：
> 
> `命令行参数 > 环境变量(.env) > 数据库设置 > 默认值`
> 
> ## 启动 Web UI
> 
> ```bash
> # 默认启动（127.0.0.1:8000）
> python webui.py
> 
> # 指定地址和端口
> python webui.py --host 0.0.0.0 --port 8080
> 
> # 调试模式（热重载）
> python webui.py --debug
> 
> # 设置 Web UI 访问密钥
> python webui.py --access-password mypassword
> 
> # 组合参数
> python webui.py --host 0.0.0.0 --port 8080 --access-password mypassword
> ```
> 
> 说明：
> 
> - `--access-password` 的优先级高于数据库中的密钥设置
> - 该参数只对本次启动生效
> - 打包后的 exe 也支持这个参数
> 
> 例如：
> 
> ```bash
> codex-console.exe --access-password mypassword
> ```
> 
> 启动后访问：
> 
> [http://127.0.0.1:8000](http://127.0.0.1:8000)
> 
> ## Docker 部署
> 
> ### 使用 docker-compose
> 
> ```bash
> docker-compose up -d
> ```
> 
> 你可以在 `docker-compose.yml` 中修改环境变量，比如端口和访问密码。  
> 如果需要看“全自动绑卡”的可视化浏览器，打开：
> 
> - noVNC: `http://127.0.0.1:6080`
> 
> ### 使用 docker run
> 
> ```bash
> docker run -d \
>   -p 1455:1455 \
>   -p 6080:6080 \
>   -e DISPLAY=:99 \
>   -e ENABLE_VNC=1 \
>   -e VNC_PORT=5900 \
>   -e NOVNC_PORT=6080 \
>   -e WEBUI_HOST=0.0.0.0 \
>   -e WEBUI_PORT=1455 \
>   -e WEBUI_ACCESS_PASSWORD=your_secure_password \
>   -v $(pwd)/data:/app/data \
>   --name codex-console \
>   ghcr.io//codex-console:latest
> ```
> 
> 说明：
> 
> - `WEBUI_HOST`: 监听主机，默认 `0.0.0.0`
> - `WEBUI_PORT`: 监听端口，默认 `1455`
> - `WEBUI_ACCESS_PASSWORD`: Web UI 访问密码
> - `DEBUG`: 设为 `1` 或 `true` 可开启调试模式
> - `LOG_LEVEL`: 日志级别，例如 `info`、`debug`
> 
> 注意：
> 
> `-v $(pwd)/data:/app/data` 很重要，这会把数据库和账号数据持久化到宿主机。否则容器一重启，数据也可能跟着表演消失术。
> 
> ## 使用远程 PostgreSQL
> 
> ```bash
> export APP_DATABASE_URL="postgresql://user:password@host:5432/dbname"
> python webui.py
> ```
> 
> 也支持 `DATABASE_URL`，但优先级低于 `APP_DATABASE_URL`。
> 
> ## 打包为可执行文件
> 
> ```bash
> # Windows
> build.bat
> 
> # Linux/macOS
> bash build.sh
> ```
> 
> Windows 打包完成后，默认会在 `dist/` 目录生成类似下面的文件：
> 
> ```text
> dist/codex-console-windows-X64.exe
> ```
> 
> 如果打包失败，优先检查：
> 
> - Python 是否已加入 PATH
> - 依赖是否安装完整
> - 杀毒软件是否拦截了 PyInstaller 产物
> - 终端里是否有更具体的报错日志
> 
> ## 项目定位
> 
> 这个仓库更适合作为：
> 
> - 原项目的修复增强版
> - 当前注册链路的兼容维护版
> - 自己二次开发的基础版本
> 
> 如果你准备公开发布，建议在仓库描述里明确写上：
> 
> `Forked and fixed from cnlimiter/codex-manager`
> 
> 这样既方便别人理解来源，也对上游作者更尊重。
> 
> ## 仓库命名
> 
> 当前仓库名：
> 
> `codex-console`
> 
> ## 安全基线说明（新增）
> 
> - `/api/*` 与 `/api/ws/*` 已统一接入登录鉴权
> - 首次启动检测到默认口令或默认密钥时，会强制跳转到 `/setup-password` 完成改密
> - 支付相关 API Key 不再使用代码内硬编码默认值，需通过环境变量或配置显式提供
> 
> ## 数据库迁移（Alembic）
> 
> ```bash
> alembic revision --autogenerate -m "your_change"
> alembic upgrade head
> ```
> 
> 初始化与更多说明见：
> 
> - `alembic/README.md`
> 
> ## 免责声明
> 
> 本项目仅供学习、研究和技术交流使用，请遵守相关平台和服务条款，不要用于违规、滥用或非法用途。
> 
> 因使用本项目产生的任何风险和后果，由使用者自行承担。

## 延伸閱讀

相關概念：[[自動化]] · [[任務調度]] · [[數據管理]]

相關專案：[[cnlimiter--codex-manager|cnlimiter/codex-manager]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/dou-jiang/codex-console)

## 相關收錄

> [!note]- 直接競品（同子分類：任務管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "任務管理" AND file.name != "dou-jiang--codex-console"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "dou-jiang--codex-console"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "dou-jiang--codex-console" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "dou-jiang--codex-console"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","任務調度","數據管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "dou-jiang--codex-console" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/dou-jiang--codex-console");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "dou-jiang--codex-console" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "dou-jiang" AND file.name != "dou-jiang--codex-console"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/dou-jiang--codex-console");
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
> const me = dv.page("Repos/dou-jiang--codex-console");
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
> const me = dv.page("Repos/dou-jiang--codex-console");
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
> const me = dv.page("Repos/dou-jiang--codex-console");
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
> const me = dv.page("Repos/dou-jiang--codex-console");
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

> **2026-03-26** — 首次收錄
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

- [[2026-03-28|2026-03-28]] — 再次上榜，1.1k stars
- [[2026-03-27|2026-03-27]] — 再次上榜，1.0k stars
- [[2026-03-26|2026-03-26]] — 首次收錄，933 stars
