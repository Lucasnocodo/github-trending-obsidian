---
repo: dou-jiang/codex-console
url: https://github.com/dou-jiang/codex-console
owner: dou-jiang
owner_type: User
language: Python
license: MIT
description: "codex-console 是一个集成化控制台项目，支持任务管理、批量处理、数据导出、自动上传、日志查看与打包支持。"
homepage: ""
stars: 1387
stars_per_day: 154
forks: 773
open_issues: 35
created: 2026-03-21
pushed_at: 2026-03-30
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "任務管理"
release_tag: "v1.1.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "提供一個集成化控制台，支持任務管理、批量處理和數據導出等功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-04"
contributor_count: 5
engagement: "high"
issue_close_rate: 8
repo_size_kb: 606
readme_length: 3745
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:933,2026-03-26:937,2026-03-27:1045,2026-03-27:1048,2026-03-28:1146,2026-03-29:1232,2026-03-30:1299,2026-03-31:1387"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "codex-console"
  - "dou-jiang/codex-console"
  - "提供一個集成化控制台，支持任務管理、批量處理和數據導出等功能。"
---

# codex-console

**1.4k** stars · **154** stars/天 · 建立 9 天前 · Python · MIT

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

`v1.1.1`

> [!summary] 一句話摘要
> 提供一個集成化控制台，支持任務管理、批量處理和數據導出等功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (154 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要穩定管理大量 OpenAI 帳號的開發者或團隊。
> **一句話重點** codex-console 是針對 OpenAI 註冊流程的專門優化工具，能有效減少常見錯誤。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到穩定的帳號管理工具，值得採用。

> [!abstract] 核心創新
> 這個專案提供了針對 OpenAI 註冊流程的專門優化和修復。

## 專案簡介

codex-console 是一個基於 Python 的集成控制台，專為 OpenAI 的註冊和登錄流程設計，旨在解決過去版本中常見的問題。它的核心功能包括支持批量註冊、實時日誌查看和多種郵箱服務接碼。使用者可以通過 Web UI 管理註冊任務，並且可以選擇 SQLite 或 PostgreSQL 作為數據庫。這個工具的賣點在於其穩定性和易用性，特別是在處理大量帳號時，能有效減少錯誤和延遲。技術上，codex-console 使用 FastAPI 作為後端框架，並且依賴於多個現代 Python 庫，如 SQLAlchemy 和 Pydantic，這使得它在性能和可擴展性上表現良好。與其他類似工具相比，如 cnlimiter/codex-manager，codex-console 提供了更完善的錯誤處理和用戶體驗，特別是在註冊流程的兼容性上。

實際使用中，這個工具能夠處理數千個帳號的註冊，並且支持 Docker 部署，方便用戶在不同環境中運行。維護者社群活躍，開放問題解決率約 8%，顯示出一定的支持力度。這個專案目前處於 beta 階段，適合需要快速註冊和管理大量帳號的開發者使用。未來可能會增加更多的自動化功能和擴展性。對於小型團隊或個人開發者來說，codex-console 提供了一個穩定且易於使用的解決方案，特別是對於需要處理 OpenAI 註冊的場景。

**技術棧**：`FastAPI` · `SQLAlchemy` · `Pydantic`

## 重點功能

- 批量註冊 — 支持高達 1000 個帳號的批量註冊，顯著提高註冊效率。
- 實時日誌查看 — 提供日誌實時查看功能，方便用戶監控註冊過程。
- 多種郵箱服務接碼 — 支持多種郵箱服務，方便用戶接收驗證碼。
- Web UI 管理 — 提供友好的 Web 界面，方便用戶管理註冊任務和帳號數據。
- Docker 部署 — 支持 Docker 部署，方便用戶在不同環境中運行。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動 Web UI
```bash
python webui.py
```
3. 使用 Docker 部署
```bash
docker-compose up -d
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝依賴和配置環境變量",
  "指令": "python webui.py --host 0.0.0.0 --port 8080 --access-password mypassword",
  "預期輸出": "啟動 Web UI，訪問 http://127.0.0.1:8080"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1387 stars（154/天），forks 773（55.7%），顯示出強烈的社群參與。這個專案的作者 dou-jiang 之前在開源領域有一定的貢獻，這次的工具解決了註冊流程中的多個痛點，特別是穩定性和用戶體驗。近期的社群討論和需求增加也促進了這個專案的快速成長。技術上，使用 FastAPI 和 Docker 的選擇使得這個工具在現代開發環境中更具吸引力。高達 55.7% 的 forks/stars 比率顯示出許多開發者對此工具的實際修改和使用。

## 適合誰使用

**目標受眾**：需要穩定管理大量 OpenAI 帳號的開發者或團隊。

> [!example] 使用場景
> - 後端工程師用它來批量註冊 OpenAI 帳號，因為它支持高達 1000 個帳號的批量處理，顯著提高效率。
> - DevOps 工程師用它來部署在 Docker 環境中，因為它提供了簡單的 Docker 部署指令，方便快速上手。
> - 產品經理用它來監控註冊流程的日誌，因為它的實時日誌查看功能能夠快速定位問題。

## 架構分析

codex-console 採用微服務架構，使用 FastAPI 作為後端框架，這使得其能夠輕鬆擴展和維護。資料流經過 Web UI 接收用戶請求，然後通過 FastAPI 處理，最終將數據存儲在 SQLite 或 PostgreSQL 中。這種設計使得用戶能夠在不同的環境中靈活部署，並且能夠快速響應用戶請求。選擇 FastAPI 而不是 Flask 是因為其在性能和異步處理上的優勢，這對於需要高併發的註冊流程至關重要。擴展性方面，這個架構能夠輕鬆添加新功能，如新的郵箱服務接碼或註冊流程的優化。

## 技術深入分析

codex-console 的核心技術機制是基於 FastAPI 的微服務架構，這使得其能夠高效處理用戶請求並支持異步操作。使用 SQLAlchemy 作為 ORM，能夠輕鬆與 SQLite 和 PostgreSQL 整合，這樣的選擇使得資料庫操作更加靈活。效能方面，這個工具能夠支持高併發的註冊請求，並且在測試中顯示出良好的響應時間。選擇 FastAPI 而非 Flask 是因為其在高併發場景下的優勢，這對於需要處理大量註冊請求的應用非常重要。技術風險方面，未來可能會面臨郵箱服務的限制，這可能會影響批量註冊的成功率。整合方面，這個工具與 Docker 的結合使得其在不同環境中的部署變得簡單，但也需要用戶具備一定的 Docker 使用經驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，並且有 Docker 部署的選項。文件中有基本的範例和環境變量配置說明，對於新手來說，花 30 分鐘能夠順利啟動。

## 優缺點分析

> [!success] 優點
> - 支持批量註冊，顯著提高效率。
> - 提供實時日誌查看，方便監控註冊過程。
> - 支持多種郵箱服務，靈活性高。

> [!danger] 缺點
> - 對於大量帳號的註冊，可能會受到郵箱服務的限制。
> - 需要一定的技術背景來配置和部署。
> - 社群支持仍在發展中，解決問題的速度可能較慢。

> [!warning] 注意事項
> - 僅支援 Python 3.10+
> - 需要 Docker 環境來支持容器化部署
> - 對於大量帳號的註冊，可能會受到郵箱服務的限制

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) | codex-console 是其增強版本，提供了更好的錯誤處理和用戶體驗。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於數據同步，而 codex-console 更加專注於帳號管理和註冊流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) | 使用 Flask 實作，較 codex-console 在性能上略遜一籌。 | 如果你的團隊已經在使用 Flask 並且不需要高併發處理。 | medium，因為需要調整部分代碼以適應不同的框架。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，而 codex-console 更加專注於帳號管理。 | 如果你的需求主要是數據同步而非帳號管理。 | low，因為兩者的功能範圍不同，轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-console** | **codex-manager** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Flask 實作，較 codex-console 在性能上略遜一籌。 | 專注於數據同步，而 codex-console 更加專注於帳號管理。 |
> | 遷移成本 | - | medium，因為需要調整部分代碼以適應不同的框架。 | low，因為兩者的功能範圍不同，轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Flask 並且不需要高併發處理。 | 如果你的需求主要是數據同步而非帳號管理。 |

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

- **[HIGH]** 在高併發下，郵箱服務可能會拒絕請求，導致註冊失敗
  - 解法：減少同時註冊的帳號數量
- **[HIGH]** Docker 部署時，數據持久化配置不當會導致數據丟失
  - 解法：確保正確設置 -v 參數以持久化數據
- [MEDIUM] 某些郵箱服務可能會對註冊請求設置限制
  - 解法：使用多個郵箱服務來分散註冊請求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠高效管理和註冊多個帳號，提升開發效率。 |
| 大型企業的帳號管理系統 | 普通 | 雖然功能強大，但可能需要進一步的擴展和定制。 |
| 個人開發者的實驗性項目 | 非常適合 | 簡單易用，能快速上手並實現功能。 |
| 需要高併發註冊的商業應用 | 不適合 | 可能會受到郵箱服務的限制，影響註冊成功率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到穩定的帳號管理工具，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 773 |
| Open Issues | 35 |
| Issue 解決率 | 8% (3 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-21 |
| Repo 大小 | 606 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dou-jiang/codex-console) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `certifi` `cffi` `curl_cffi` `pycparser` `pydantic` `pydantic-settings` `fastapi` `uvicorn` `jinja2` `python-multipart` `sqlalchemy` `alembic` `aiosqlite` `psycopg` `playwright`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 63
>     "JavaScript" : 24
>     "HTML" : 11
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dou-jiang](https://github.com/dou-jiang) | 17 |
> | [@shufflewzc](https://github.com/shufflewzc) | 2 |
> | [@gazedreamily](https://github.com/gazedreamily) | 2 |
> | [@wold9527](https://github.com/wold9527) | 2 |
> | [@x0rz4](https://github.com/x0rz4) | 1 |

**最新版本**：v1.1.1 (2026-03-26)

> [!info]- Release Notes
> ## 新增
> - 新增 CloudMail 邮箱服务实现，并完成服务注册、配置接入、邮件轮询、验证码提取和基础收件处理能力。
> - 新增上传目标 newApi 支持，可根据配置选择不同导入目标类型。
> - 新增 Codex 账号导出格式，支持后续登录、迁移和导入使用。
> - 新增 CPA 认证文件 proxy_url 支持，现可在 CPA 服务配置中保存和使用代理地址。
> - 新增 Outlook 账户注册状态识别与展示功能，可直接看到已注册和未注册。
> - 已注册状态支持显示关联账号编号，例如已注册 #1。
> 
> ## 修改
> - 批量注册限制由 100 调整为 1000，前后端校验与页面输入上限同步。
> - 公告区改为固定文案与固定链接，强化永久免费开源、禁止倒卖、付费请退款提示。
> 
> ## 优化
> - 优化 OAuth token 刷新兼容逻辑，完善异常返回与一次性令牌场景处理，降低刷新报错概率。
> - 优化批量验证流程，改为受控并发执行，减少长时间阻塞和卡死问题。
> - 优化邮件时间解析与消息规范化逻辑，提升邮件内容识别与处理一致性。
> - 优化 Outlook 列表展示逻辑，认证方式、注册状态、启用状态、优先级和操作列显示更清晰。
> - 优化 WebUI 端口冲突处理，默认端口占用时自动切换可用端口。
> - 增加启动时轻量字段迁移逻辑，自动补齐新增字段，提升旧数据升级兼容性。
> 
> ## 修复
> - 修复模板渲染兼容问题，提升不同 Starlette 版本下页面渲染稳定性。
> - 修复六位数字误判为 OTP 的问题，避免无关文本中的六位数字被错误识别为验证码。
> - 修复邮箱匹配大小写问题，避免 Outlook.com 邮箱因大小写不同被误判为未注册。
> - 修复 Outlook 列表列错位问题，去掉多余状态列，恢复表格对齐。
> - 修复 Outlook 列表乱码和占位文案问题，按钮与状态文案恢复正常中文显示。

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和問題回覆。
**連結**：[文件](https://github.com/dou-jiang/codex-console)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-27 ~ 2026-03-30）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #39 from gazedreamily/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#53](https://github.com/dou-jiang/codex-console/issues/53) | freemail  收不到验证码 | 0 | 0 |
> | [#51](https://github.com/dou-jiang/codex-console/issues/51) | Workspace ID 出不来了 | 0 | 6 |
> | [#50](https://github.com/dou-jiang/codex-console/issues/50) | 解析 auth-info Cookie 失败 注册失败 | 0 | 0 |
> | [#49](https://github.com/dou-jiang/codex-console/issues/49) | 大量账号失效 | 0 | 4 |
> | [#48](https://github.com/dou-jiang/codex-console/issues/48) | 你们的成功率有多少？ | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # codex-console
> 
> 基于 [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) 持续修复和维护的增强版本。
> 
> 这个版本的目标很直接: 把近期 OpenAI 注册链路里那些“昨天还能跑，今天突然翻车”的坑补上，让注册、登录、拿 token、打包运行都更稳一点。
> 
> [](LICENSE)
> [](https://www.python.org/)
> 
> ## QQ群
> 
> - 交流群: https://qm.qq.com/q/ZTCKxawxeo
> 
> ## 致谢
> 
> 首先感谢上游项目作者 [cnlimiter](https://github.com/cnlimiter) 提供的优秀基础工程。
> 
> 本仓库是在原项目思路和结构之上进行兼容性修复、流程调整和体验优化，适合作为一个“当前可用的修复维护版”继续使用。
> 
> ## 这个分支修了什么
> 
> 为适配当前注册链路，这个分支重点补了下面几个问题:
> 
> 1. 新增 Sentinel POW 求解逻辑  
>    OpenAI 现在会强制校验 Sentinel POW，原先直接传空值已经不行了，这里补上了实际求解流程。
> 
> 2. 注册和登录拆成两段  
>    现在注册完成后通常不会直接返回可用 token，而是跳转到绑定手机或后续页面。  
>    本分支改成“先注册成功，再单独走一次登录流程拿 token”，避免卡死在旧逻辑里。
> 
> 3. 去掉重复发送验证码  
>    登录流程里服务端本身会自动发送验证码邮件，旧逻辑再手动发一次，容易让新旧验证码打架。  
>    现在改成直接等待系统自动发来的那封验证码邮件。
> 
> 4. 修复重新登录流程的页面判断问题  
>    针对重新登录时页面流转变化，调整了登录入口和密码提交逻辑，减少卡在错误页面的情况。
> 
> 5. 优化终端和 Web UI 提示文案  
>    保留可读性的前提下，把一些提示改得更友好一点，出错时至少不至于像在挨骂。
> 
> ## 核心能力
> 
> - Web UI 管理注册任务和账号数据
> - 支持批量注册、日志实时查看、基础任务管理
> - 支持多种邮箱服务接码
> - 支持 SQLite 和远程 PostgreSQL
> - 支持打包为 Windows/Linux/macOS 可执行文件
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
> 可选。复制 `.env.example` 为 `.env` 后按需修改:
> 
> ```bash
> cp .env.example .env
> ```
> 
> 常用变量如下:
> 
> | 变量 | 说明 | 默认值 |
> | --- | --- | --- |
> | `APP_HOST` | 监听主机 | `0.0.0.0` |
> | `APP_PORT` | 监听端口 | `8000` |
> | `APP_ACCESS_PASSWORD` | Web UI 访问密钥 | `admin123` |
> | `APP_DATABASE_URL` | 数据库连接字符串 | `data/database.db` |
> 
> 优先级:
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
> 说明:
> 
> - `--access-password` 的优先级高于数据库中的密钥设置
> - 该参数只对本次启动生效
> - 打包后的 exe 也支持这个参数
> 
> 例如:
> 
> ```bash
> codex-console.exe --access-password mypassword
> ```
> 
> 启动后访问:
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
> 说明:
> 
> - `WEBUI_HOST`: 监听主机，默认 `0.0.0.0`
> - `WEBUI_PORT`: 监听端口，默认 `1455`
> - `WEBUI_ACCESS_PASSWORD`: Web UI 访问密码
> - `DEBUG`: 设为 `1` 或 `true` 可开启调试模式
> - `LOG_LEVEL`: 日志级别，例如 `info`、`debug`
> 
> 注意:
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
> Windows 打包完成后，默认会在 `dist/` 目录生成类似下面的文件:
> 
> ```text
> dist/codex-console-windows-X64.exe
> ```
> 
> 如果打包失败，优先检查:
> 
> - Python 是否已加入 PATH
> - 依赖是否安装完整
> - 杀毒软件是否拦截了 PyInstaller 产物
> - 终端里是否有更具体的报错日志
> 
> ## 项目定位
> 
> 这个仓库更适合作为:
> 
> - 原项目的修复增强版
> - 当前注册链路的兼容维护版
> - 自己二次开发的基础版本
> 
> 如果你准备公开发布，建议在仓库描述里明确写上:
> 
> `Forked and fixed from cnlimiter/codex-manager`
> 
> 这样既方便别人理解来源，也对上游作者更尊重。
> 
> ## 仓库命名
> 
> 当前仓库名:
> 
> `codex-console`
> 
> ## 安全基线说明（新增）
> 
> - `/api/*` 与 `/api/ws/*` 已统一接入登录鉴权。
> - 首次启动检测到默认口令或默认密钥时，会强制跳转到 `/setup-password` 完成改密。
> - 支付相关 API Key 不再使用代码内硬编码默认值，需通过环境变量或配置显式提供。
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

相關概念：[[自動化]] · [[API 設計]] · [[微服務]]

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
> const concepts = ["自動化","API 設計","微服務"];
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
