---
repo: dou-jiang/codex-console
url: https://github.com/dou-jiang/codex-console
owner: dou-jiang
owner_type: User
language: Python
license: MIT
description: "codex-console 是一个集成化控制台项目，支持任务管理、批量处理、数据导出、自动上传、日志查看与打包支持。"
homepage: ""
stars: 1048
stars_per_day: 210
forks: 633
open_issues: 23
created: 2026-03-21
pushed_at: 2026-03-26
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.1.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "提供集成化控制台，支持任务管理、批量处理、数据导出等功能，简化 OpenAI 注册流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-30"
contributor_count: 2
engagement: "high"
issue_close_rate: 12
repo_size_kb: 295
readme_length: 4590
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:933,2026-03-26:937,2026-03-27:1045,2026-03-27:1048"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "codex-console"
  - "dou-jiang/codex-console"
  - "提供集成化控制台，支持任务管理、批量处理、数据导出等功能，简化 OpenAI 注册流程。"
---

# codex-console

**1.0k** stars · **210** stars/天 · 建立 5 天前 · Python · MIT

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
> 提供集成化控制台，支持任务管理、批量处理、数据导出等功能，简化 OpenAI 注册流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (210 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要穩定和高效 OpenAI 註冊流程的中小型團隊或個人開發者。
> **一句話重點** codex-console 的穩定性和批量處理能力使其成為 OpenAI 註冊的理想工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dou-jiang--codex-console");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "dou-jiang--codex-console" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到穩定的 OpenAI 註冊工具，值得使用。

> [!abstract] 核心創新
> 提供了一個穩定的 OpenAI 註冊和管理流程，解決了過去版本中的多個問題。

## 專案簡介

codex-console 是一个增强版的集成控制台，旨在解决 OpenAI 注册过程中的不稳定性问题。用户可以通过 Web UI 管理注册任务和账号数据，支持批量注册、日志查看和数据导出。核心流程包括用户输入注册信息，系统处理并通过邮件服务发送验证码，最后用户通过 Web UI 查看注册状态和管理账号。其一句话卖点是：通过优化注册流程和增强功能，提供一个稳定的 OpenAI 注册体验。技术上，codex-console 基于 Python 和 FastAPI 构建，使用 SQLAlchemy 进行数据库操作，支持 SQLite 和 PostgreSQL，依赖较轻，适合快速部署。与同类工具如 cnlimiter/codex-manager 相比，codex-console 提供了更好的用户体验和更强的功能扩展性，特别是在处理注册和登录流程的稳定性上。

对于需要频繁进行 OpenAI 注册的用户，codex-console 提供了更高的效率和稳定性。使用时，用户可能会遇到邮箱匹配和验证码识别的问题，但这些问题在最新版本中已有所修复。整体来看，codex-console 处于 beta 阶段，适合中小型团队或个人开发者使用，未来可能会继续增强功能和稳定性。建议在需要频繁注册 OpenAI 账号的场景中使用，而不适合只需偶尔注册的用户。总的来说，codex-console 是一个值得尝试的工具，特别是对于需要批量处理注册的用户。

**技術棧**：`FastAPI` · `SQLAlchemy` · `PostgreSQL` · `Docker`

## 重點功能

- Web UI 管理 — 提供直觀的界面來管理註冊任務和帳號數據。
- 批量註冊支持 — 一次性處理多達 1000 個註冊請求，提升效率。
- 多種郵件服務接碼 — 支持 CloudMail 和其他郵件服務，方便用戶選擇。
- 數據導出功能 — 支持導出 Codex 账号格式，方便後續使用和遷移。
- 日誌查看 — 實時查看操作日誌，便於排查問題。

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
  "前置條件": "已安裝依賴",
  "指令": "python webui.py --host 0.0.0.0 --port 8080 --access-password mypassword",
  "預期輸出": "Web UI 會在 http://0.0.0.0:8080 可訪問"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1048 stars（209.6/天），forks 633（60.4%），顯示出強烈的社群參與度。作者 dou-jiang 之前參與過 cnlimiter/codex-manager，這個專案解決了用戶在 OpenAI 註冊過程中的不穩定性問題，特別是郵件驗證和註冊流程的卡住情況。近期的討論和需求增加，促使了這個專案的快速成長。高 forks/stars 比率顯示許多人在實際修改和使用這個工具，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：需要穩定和高效 OpenAI 註冊流程的中小型團隊或個人開發者。

> [!example] 使用場景
> - 後端工程師用它來批量註冊 OpenAI 账号，因為可以一次性處理多達 1000 個註冊請求，節省時間。
> - DevOps 工程師用它來自動化郵件驗證流程，因為它支持多種郵件服務，減少手動操作。
> - 產品經理用它來管理和監控註冊狀態，因為其 Web UI 提供清晰的註冊狀態和操作界面。

## 架構分析

codex-console 採用 FastAPI 作為後端框架，結合 SQLAlchemy 進行數據庫操作，支持 SQLite 和 PostgreSQL。這種設計使得應用能夠快速部署且易於擴展。數據流方面，註冊請求通過 Web UI 接收，後端處理後發送郵件進行驗證，最終用戶可通過 UI 查看狀態。

選擇 FastAPI 的原因在於其高性能和易用性，這使得開發和維護變得更簡單。這個架構的缺點是對於高併發的支持可能會受到限制，特別是在使用 SQLite 時。整體來看，codex-console 的設計使得其在穩定性和擴展性之間取得了良好的平衡。

## 技術深入分析

codex-console 的核心技術機制基於 FastAPI，這使得其能夠快速處理 HTTP 請求並提供高效的 API。使用 SQLAlchemy 進行數據管理，支持 SQLite 和 PostgreSQL，這樣的選擇使得用戶可以根據需求選擇合適的數據庫。效能方面，codex-console 在處理註冊請求時，能夠支持高達 1000 個請求的批量註冊，這在同類工具中具有優勢。設計上，選擇 FastAPI 而非 Django 是因為其輕量和高性能，這樣的選擇使得開發和維護成本降低。技術風險方面，未來在高併發情況下可能會出現性能瓶頸，特別是在使用 SQLite 時。整合方面，codex-console 能夠與 Docker 無縫集成，方便用戶在不同環境中部署，並且提供了詳細的文檔支持，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，包含範例指令。安裝過程順暢，無明顯坑點。文檔中有良好的 getting started guide，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供穩定的 OpenAI 註冊流程，減少卡住的情況。
> - 支持批量註冊，提升效率。
> - 友好的 Web UI，便於管理和監控。

> [!danger] 缺點
> - 在高併發情況下性能可能下降。
> - 需要額外配置郵件服務，增加了使用門檻。
> - 目前仍在 beta 階段，可能存在不穩定的情況。

> [!warning] 注意事項
> - 僅支援 Python 3.10+
> - 需要配置郵件服務，否則無法完成註冊流程
> - 在高併發情況下可能會出現性能瓶頸

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) | codex-console 是其增強版，提供了更穩定的註冊流程和更友好的 UI。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，而 codex-console 專注於 OpenAI 註冊和管理，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [cnlimiter/codex-manager](https://github.com/cnlimiter/codex-manager) | 基於相同的註冊流程，但缺乏 codex-console 的穩定性和功能擴展。 | 如果需要一個更簡單的解決方案，且不需要批量處理功能。 | medium，因為需要重新配置和適應新的功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，與 codex-console 的功能範圍不同。 | 如果主要需求是文件同步而非註冊管理。 | low，因為功能差異不大。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-console** | **codex-manager** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 基於相同的註冊流程，但缺乏 codex-console 的穩定性和功能擴展。 | 專注於文件同步，與 codex-console 的功能範圍不同。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的功能。 | low，因為功能差異不大。 |
> | 適用場景 | 主要場景 | 如果需要一個更簡單的解決方案，且不需要批量處理功能。 | 如果主要需求是文件同步而非註冊管理。 |

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

- **[HIGH]** 高併發情況下可能導致性能下降
  - 解法：考慮使用 PostgreSQL 以提高性能
- [MEDIUM] 郵件服務配置不當會導致註冊失敗
  - 解法：確保郵件服務配置正確
- [MEDIUM] 部分用戶反映註冊過程中會出現卡住情況
  - 解法：嘗試重啟應用或檢查日誌以獲取更多信息

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 OpenAI 账号的開發團隊 | 非常適合 | 支持高達 1000 個註冊請求，提升效率。 |
| 偶爾需要註冊 OpenAI 账号的個人用戶 | 普通 | 功能強大但可能過於複雜。 |
| 需要穩定郵件驗證的應用 | 適合 | 提供了多種郵件服務支持。 |
| 小型專案或個人 side project | 適合 | 易於部署和使用，適合快速開發。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到穩定的 OpenAI 註冊工具，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶提供的郵件和數據。對依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 633 |
| Open Issues | 23 |
| Issue 解決率 | 12% (3 closed) |
| 最後推送 | 2026-03-26 |
| 建立日期 | 2026-03-21 |
| Repo 大小 | 295 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dou-jiang/codex-console) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `certifi` `cffi` `curl_cffi` `pycparser` `pydantic` `pydantic-settings` `fastapi` `uvicorn` `jinja2` `python-multipart` `sqlalchemy` `aiosqlite` `psycopg` `playwright`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 65
>     "JavaScript" : 21
>     "HTML" : 11
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dou-jiang](https://github.com/dou-jiang) | 13 |
> | [@wold9527](https://github.com/wold9527) | 1 |

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

**社群活躍度**：社群活躍度中等，近期有多次更新和修復。
**連結**：[文件](https://github.com/dou-jiang/codex-console)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-26）
> **活躍天數** 2 天 · **最新 commit** Revise announcement section for clarity and support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#30](https://github.com/dou-jiang/codex-console/issues/30) | 上传sub2api api key 如何填写 | 0 | 0 |
> | [#29](https://github.com/dou-jiang/codex-console/issues/29) | cf临时邮箱获取到非验证码数字 | 0 | 0 |
> | [#28](https://github.com/dou-jiang/codex-console/issues/28) | 邮箱大小写处理不一致bug | 0 | 0 |

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
> - GitHub Repo: [https://github.com/dou-jiang/codex-console](https://github.com/dou-jiang/codex-console)
> 
> ## QQ群
> 
> - 交流群: [291638849（点击加群）](https://qm.qq.com/q/4TETC3mWco)
> - Telegram 频道: [codex_console](https://t.me/codex_console)
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
> 9. 新增 Outlook 账户“注册状态”识别与展示功能，可直接看到“已注册/未注册”，并支持显示关联账号编号（如“已注册 #1”）。
> 
> 10. 修复 Outlook 邮箱匹配大小写问题，避免 Outlook.com 因大小写差异被误判为未注册。
> 
> 11. 修复 Outlook 列表列错位、乱码和占位文案问题，恢复中文显示并优化列表信息布局。
> 
> 12. 优化 WebUI 端口冲突处理，默认端口占用时自动切换可用端口。
> 
> 13. 增加启动时轻量字段迁移逻辑，自动补齐新增字段，提升旧数据升级兼容性。
> 
> 14. 批量注册上限由 `100` 提升至 `1000`（前后端同步）。
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
> ## 免责声明
> 
> 本项目仅供学习、研究和技术交流使用，请遵守相关平台和服务条款，不要用于违规、滥用或非法用途。
> 
> 因使用本项目产生的任何风险和后果，由使用者自行承担。

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[API 設計]]

相關專案：[[cnlimiter--codex-manager|cnlimiter/codex-manager]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/dou-jiang/codex-console)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "dou-jiang--codex-console"
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
> const concepts = ["自動化","CI/CD","API 設計"];
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

- [[2026-03-27|2026-03-27]] — 再次上榜，1.0k stars
- [[2026-03-26|2026-03-26]] — 首次收錄，933 stars
