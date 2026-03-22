---
repo: cnlimiter/codex-manager
url: https://github.com/cnlimiter/codex-manager
owner: cnlimiter
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 1346
stars_per_day: 224
forks: 574
open_issues: 24
created: 2026-03-15
pushed_at: 2026-03-21
first_seen: 2026-03-22
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "帳號管理"
release_tag: "v1.0.9"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-22
use_case: "管理 OpenAI 帳號的 Web UI 系統，支持多種郵箱服務和批量註冊。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-25"
contributor_count: 5
engagement: "high"
issue_close_rate: 52
repo_size_kb: 567
readme_length: 8876
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-22"
star_history: "2026-03-22:1346"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "codex-manager"
  - "cnlimiter/codex-manager"
  - "管理 OpenAI 帳號的 Web UI 系統，支持多種郵箱服務和批量註冊。"
---

# codex-manager

**1.3k** stars · **224** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/cnlimiter--codex-manager");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.9`

> [!summary] 一句話摘要
> 管理 OpenAI 帳號的 Web UI 系統，支持多種郵箱服務和批量註冊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (224 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要批量管理 OpenAI 帳號的開發者和數據科學家。
> **一句話重點** Codex Manager 提供了一個高效的解決方案來管理 OpenAI 帳號，特別適合需要批量註冊的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cnlimiter--codex-manager");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "帳號管理" && p.file.name !== "cnlimiter--codex-manager" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 帳號管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的帳號管理工具，值得投入。

> [!abstract] 核心創新
> 支持多種郵箱服務的批量註冊和管理功能。

## 專案簡介

Codex Manager 是一個專門用於管理 OpenAI 帳號的 Web UI 系統，提供多種郵箱服務的支持，包括臨時郵箱和 Outlook 的批量註冊功能。用戶可以通過簡單的命令啟動服務，並使用 `./codex-register --port 8080` 指定端口，或使用 `--debug` 進入調試模式。這個系統的設計目的是為了簡化 OpenAI 帳號的註冊和管理流程，特別是對於需要大量帳號的用戶來說，這樣的工具可以顯著提高效率。系統支持的功能包括並發控制、實時監控和代理管理，這些功能使得用戶能夠靈活地管理註冊任務。技術上，Codex Manager 使用 FastAPI 作為 Web 框架，並依賴 SQLAlchemy 進行數據庫操作，支持 SQLite 和 PostgreSQL。

這樣的選擇使得系統在性能和擴展性上都有不錯的表現。與其他類似工具相比，如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy，Codex Manager 提供了更為全面的郵箱服務支持和更高的並發註冊能力，特別適合需要批量註冊的用戶。使用者在實際操作中可能會遇到如授權 Cookie 未解析的問題，這在熱門 Issues 中有提到，解決率為 52%。這個專案目前處於 beta 階段，適合中小型團隊或個人開發者使用，未來可能會持續增強功能和穩定性。

**技術棧**：`FastAPI` · `SQLAlchemy` · `Uvicorn` · `Jinja2`

## 重點功能

- 多郵箱服務支持 — 包括 Tempmail、Outlook 和自定義域名，支持批量導入。
- 並發控制 — 提供流水線模式和並行模式，最大並發數可自定義（1-50）。
- 實時監控 — WebSocket 實時日誌推送，支持跨頁面自動重連。
- 代理管理 — 支持動態代理和代理列表，隨機選取可用代理。
- 支付升級 — 自動生成 ChatGPT Plus 或 Team 訂閱支付鏈接，支持無痕模式。

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
  "# 使用 Docker 部署",
  "docker run -d \\",
  "  -p 1455:1455 \\",
  "  -e WEBUI_HOST=0.0.0.0 \\",
  "  -e WEBUI_PORT=1455 \\",
  "  -e WEBUI_ACCESS_PASSWORD=your_secure_password \\",
  "  -v $(pwd)/data:/app/data \\",
  "  --name codex-register \\",
  "  ghcr.io/yunxilyf/codex-register:latest",
  "# 預期輸出：啟動 Codex Manager 服務，並在 localhost:1455 提供 Web UI。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1346 stars（224/天），forks 574（42.6%），這顯示出強烈的社群參與。作者 cnlimiter 和其他貢獻者在開源社區有一定的影響力，之前可能有過相關的開發經驗。這個工具解決了批量註冊 OpenAI 帳號的痛點，之前用戶通常需要手動註冊，效率低下。最近的推廣活動和社群討論可能也促進了其快速增長。高 forks/stars 比率顯示出許多人在實際修改和使用這個工具，反映出其實用性和需求。

## 適合誰使用

**目標受眾**：需要批量管理 OpenAI 帳號的開發者和數據科學家。

> [!example] 使用場景
> - 數據科學家用它來批量註冊 OpenAI 帳號，因為手動註冊耗時且容易出錯。
> - 開發者用它來管理多個 OpenAI 帳號，因為它支持並發註冊和實時監控，能提高工作效率。
> - 小型團隊用它來生成 ChatGPT Plus 的支付鏈接，因為它提供了自動化的支付鏈接生成和管理功能。

## 架構分析

Codex Manager 採用 FastAPI 作為 Web 框架，並使用 SQLAlchemy 進行數據庫操作，這樣的選擇使得系統能夠快速響應並支持高並發。數據流從用戶的請求進入 FastAPI，經過路由處理後進入數據庫進行查詢或更新。這種設計使得系統在處理大量註冊請求時，能夠有效利用非同步 I/O 的優勢。選擇 SQLAlchemy 使得數據庫操作更為靈活，但也增加了學習成本。系統的擴展性良好，能夠根據需求增加新的郵箱服務或註冊模式。

## 技術深入分析

Codex Manager 的核心技術機制是基於 FastAPI 的非同步架構，這使得它能夠在高並發的情況下保持良好的性能。系統使用 SQLAlchemy 進行數據庫操作，支持 SQLite 和 PostgreSQL，這樣的選擇使得用戶可以根據需求選擇合適的數據存儲方案。系統的並發控制使用 asyncio 的 Semaphore 和 ThreadPoolExecutor，這樣的設計可以有效管理同時進行的註冊請求，避免過載。設計上，Codex Manager 需要考慮到用戶的安全性，特別是在處理敏感的帳號信息時，這要求系統必須有良好的數據保護措施。與主流框架的整合難度較低，因為 FastAPI 本身就是為了簡化 API 開發而設計的，適合快速開發和部署。整體而言，Codex Manager 在功能和性能上都表現出色，適合需要管理多個 OpenAI 帳號的用戶。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，包含範例指令。安裝過程相對順暢，但需要注意 Python 和 Docker 的環境配置。文檔目前僅提供英文版，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 支持多種郵箱服務，方便用戶選擇。
> - 提供並發控制功能，適合批量註冊需求。
> - 實時監控和日誌功能，便於管理和排錯。

> [!danger] 缺點
> - 安裝和配置過程相對複雜，需要一定的技術背景。
> - 在高並發情況下可能會遇到授權問題。
> - 缺乏詳細的中文文檔，對非英語使用者不友好。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 Docker 環境進行容器化部署。
> - 在高並發註冊時可能會遇到授權 Cookie 未解析的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不支持批量註冊和郵箱服務管理。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的 WebSocket 代理，與本專案的功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網絡代理和數據抓取，與 Codex Manager 的帳號管理功能不同。 | 如果你的需求主要是網絡代理和數據抓取，而不是帳號管理。 | medium，因為需要重新設計數據流和功能模塊。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的數據抓取，功能範圍較窄。 | 如果你的需求是針對特定醫療數據的抓取，而不是通用的帳號管理。 | high，因為需要重構整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-manager** | **Shadowbroker** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於網絡代理和數據抓取，與 Codex Manager 的帳號管理功能不同。 | 專注於醫療領域的數據抓取，功能範圍較窄。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和功能模塊。 | high，因為需要重構整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是網絡代理和數據抓取，而不是帳號管理。 | 如果你的需求是針對特定醫療數據的抓取，而不是通用的帳號管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊進行試用，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發註冊時可能會遇到授權 Cookie 未解析的問題。
  - 解法：減少同時註冊的數量，或檢查郵箱服務的配置。
- [MEDIUM] 使用 Docker 部署時，數據持久化配置不當會導致數據丟失。
  - 解法：確保正確設置 Docker 的 volume 挂載。
- [MEDIUM] 某些郵箱服務的 API 可能會不穩定，導致註冊失敗。
  - 解法：定期檢查郵箱服務的可用性，並根據需要調整配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 OpenAI 帳號的數據科學團隊 | 非常適合 | 提供高效的批量註冊和管理功能。 |
| 個人開發者希望快速測試 OpenAI API | 適合 | 能夠快速啟動和使用。 |
| 大型企業需要穩定的帳號管理系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的帳號管理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估中等，因為系統需要存取用戶的帳號信息和敏感資料。使用者需確保環境安全，並定期更新依賴庫以防止潛在的安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Codex Manager 可以與多種郵箱服務和數據庫系統整合，特別是與 PostgreSQL 的兼容性使得它在數據管理上更具靈活性。它可以與現有的 CI/CD 流程結合，通過 API 端點進行自動化操作。與主流的開發工具如 VS Code 和 GitHub Actions 的整合相對簡單，因為 FastAPI 提供了良好的 API 設計。常見的整合問題包括環境配置不當和依賴版本不匹配，這需要在部署前進行充分測試。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Codex Manager 出現之前，許多用戶使用手動註冊和管理 OpenAI 帳號，效率低下且容易出錯。隨著對 OpenAI 服務需求的增加，市場上對於自動化管理工具的需求也隨之上升。Codex Manager 的出現正好填補了這一空白，並且隨著技術的進步，能夠支持更高效的註冊和管理流程。

未來，這類工具可能會進一步整合更多的功能，提升用戶體驗。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解 Docker 基本操作
- 有 API 開發經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品中進行測試。

**成功指標**：註冊帳號的效率提高 50%。

> [!warning] 退出計畫
> 所有設定存儲在標準 JSON 格式中，可以輕鬆轉移到其他系統。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cnlimiter--codex-manager");
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
> const me = dv.page("Repos/cnlimiter--codex-manager");
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
| Forks | 574 |
| Open Issues | 24 |
| Issue 解決率 | 52% (26 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 567 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cnlimiter/codex-manager) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `certifi` `cffi` `curl_cffi` `pycparser` `pydantic` `pydantic-settings` `fastapi` `uvicorn` `jinja2` `python-multipart` `sqlalchemy` `aiosqlite` `psycopg`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 63
>     "JavaScript" : 23
>     "HTML" : 11
>     "CSS" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cnlimiter](https://github.com/cnlimiter) | 92 |
> | [@yunxilyf](https://github.com/yunxilyf) | 4 |
> | [@rockxsj](https://github.com/rockxsj) | 3 |
> | [@pigracing](https://github.com/pigracing) | 2 |
> | [@Senkoi](https://github.com/Senkoi) | 1 |

**最新版本**：v1.0.9 (2026-03-20)

> [!info]- Release Notes
> ## OpenAI 自动注册系统 v2
> 
> ### 下载说明
> | 平台 | 文件 |
> |------|------|
> | Windows x64 | `codex-register-windows-x64.exe` |
> | Linux x64 | `codex-register-linux-x64` |
> | macOS ARM64 | `codex-register-macos-arm64` |
> 
> ### 使用方法
> ```bash
> # Linux/macOS 需要先赋予执行权限
> chmod +x codex-register-*
> 
> # 启动 Web UI
> ./codex-register
> 
> # 指定端口
> ./codex-register --port 8080
> 
> # 调试模式（热重载）
> ./codex-register --debug
> 
> # 设置 Web UI 访问密钥
> ./codex-register --access-password mypassword
> ```
> 
> 
> ## What's Changed
> * feat: 支持 Docker 部署和环境变量配置 by @yunxilyf in https://github.com/cnlimiter/codex-manager/pull/44

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/cnlimiter/codex-manager)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-21）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#62](https://github.com/cnlimiter/codex-manager/issues/62) | 【解决找不到授权 Cookie 未解析出 workspace】官方拉闸了,这里给点提示 | 6 | 5 |
> | [#61](https://github.com/cnlimiter/codex-manager/issues/61) | 授权 Cookie 里没有 workspace 信息 | 1 | 1 |
> | [#24](https://github.com/cnlimiter/codex-manager/issues/24) | Team的订阅支付链接是否可以增加长连接托管模式？ `enhancement` | 1 | 3 |
> | [#60](https://github.com/cnlimiter/codex-manager/issues/60) | DuckMail create account error | 0 | 1 |
> | [#59](https://github.com/cnlimiter/codex-manager/issues/59) | 授权 Cookie 里没有 workspace 信息 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenAI 账号管理系统 v2
> 
> 管理 OpenAI 账号的 Web UI 系统，支持多种邮箱服务、并发批量注册、代理管理和账号管理。
> 
> # 官方拉闸了,改变了授权流程,各位自行研究吧  
> 
> > ⚠️ **免责声明**：本工具仅供学习和研究使用，使用本工具产生的一切后果由使用者自行承担。请遵守相关服务的使用条款，不要用于任何违法或不当用途。 如有侵权，请及时联系，会及时删除。
> 
> [](LICENSE)
> [](https://www.python.org/)
> 
> ## 功能特性
> 
> - **多邮箱服务支持**
>   - Tempmail.lol（临时邮箱，无需配置）
>   - Outlook（IMAP + XOAUTH2，支持批量导入）
>   - 自定义域名（两种子类型）
>     - **MoeMail**：标准 REST API，配置 API 地址 + API 密钥
>     - **TempMail**：自部署 Cloudflare Worker 临时邮箱，配置 Worker 地址 + Admin 密码
>   - DuckMail
>     - **DuckMail API**：兼容 DuckMail 接口，手动填写 API 地址、默认域名，可选 API Key
> 
> - **注册模式**
>   - 单次注册
>   - 批量注册（可配置数量和间隔时间）
>   - Outlook 批量注册（指定账户逐一注册）
> 
> - **并发控制**
>   - 流水线模式（Pipeline）：每隔 interval 秒启动新任务，限制最大并发数
>   - 并行模式（Parallel）：所有任务同时提交，Semaphore 控制最大并发
>   - 并发数可在 UI 自定义（1-50）
>   - 日志混合显示，带 `[任务N]` 前缀区分
> 
> - **实时监控**
>   - WebSocket 实时日志推送
>   - 跨页面导航后自动重连
>   - 降级轮询备用方案
> 
> - **代理管理**
>   - 动态代理（通过 API 每次获取新 IP）
>   - 代理列表（随机选取，支持设置默认代理，记录使用时间）
> 
> - **账号管理**
>   - 查看、删除、批量操作
>   - Token 刷新与验证
>   - 订阅状态管理（手动标记 / 自动检测 plus/team/free）
>   - 导出格式：JSON / CSV / CPA 格式 / Sub2API 格式
>     - 单个账号导出为独立 `.json` 文件
>     - 多个 CPA 账号打包为 `.zip`，每个账号一个独立文件
>     - Sub2API 格式所有账号合并为单个 JSON
>   - 上传目标（直连不走代理）：
>     - **CPA**：支持多服务配置，上传时选择目标服务，可按服务开关将账号实际代理写入 auth file 的 `proxy_url`
>     - **Sub2API**：支持多服务配置，标准 sub2api-data 格式
>     - **Team Manager**：支持多服务配置
> 
> - **支付升级**
>   - 为账号生成 ChatGPT Plus 或 Team 订阅支付链接
>   - 后端命令行以无痕模式自动打开 Chrome/Edge
>   - Team 套餐支持自定义工作区名称、座位数、计费周期
> 
> - **系统设置**
>   - 代理配置（动态代理 + 代理列表，支持设默认）
>   - CPA 服务列表管理（多服务，连接测试）
>   - Sub2API 服务列表管理（多服务，连接测试）
>   - Team Manager 服务列表管理（多服务，连接测试）
>   - Outlook OAuth 参数
>   - 注册参数（超时、重试、密码长度等）
>   - 验证码等待配置
>   - 数据库管理（备份、清理）
>   - 支持远程 PostgreSQL
> 
> ## 快速开始
> 
> ### 环境要求
> 
> - Python 3.10+
> - [uv](https://github.com/astral-sh/uv)（推荐）或 pip
> 
> ### 安装依赖
> 
> ```bash
> # 使用 uv（推荐）
> uv sync
> 
> # 或使用 pip
> pip install -r requirements.txt
> ```
> 
> ### 环境变量配置（可选）
> 
> 复制 `.env.example` 为 `.env`，按需填写：
> 
> ```bash
> cp .env.example .env
> ```
> 
> | 变量 | 说明 | 默认值 |
> |------|------|--------|
> | `APP_HOST` | 监听主机 | `0.0.0.0` |
> | `APP_PORT` | 监听端口 | `8000` |
> | `APP_ACCESS_PASSWORD` | Web UI 访问密钥 | `admin123` |
> | `APP_DATABASE_URL` | 数据库连接字符串 | `data/database.db` |
> 
> > 优先级：命令行参数 > 环境变量（`.env`）> 数据库设置 > 默认值
> 
> ### 启动 Web UI
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
> > `--access-password` 优先级高于数据库中保存的密钥设置，每次启动时生效。打包后的 exe 同样支持此参数：
> > ```bash
> > codex-register.exe --access-password mypassword
> > ```
> 
> ### Docker 部署
> 
> 项目支持通过 Docker 进行容器化部署。Docker 镜像已托管至 GitHub Container Registry (GHCR)。
> 
> #### 使用 docker-compose (推荐)
> 
> 在项目根目录下，直接使用 `docker-compose` 启动：
> 
> ```bash
> docker-compose up -d
> ```
> 你可以在 `docker-compose.yml` 中修改相关的环境变量，例如配置端口或者设置 `WEBUI_ACCESS_PASSWORD` 访问密码。
> 
> #### 直接使用 docker run
> 
> 如果你不想使用 docker-compose，也可以直接拉取并运行镜像：
> 
> ```bash
> docker run -d \
>   -p 1455:1455 \
>   -e WEBUI_HOST=0.0.0.0 \
>   -e WEBUI_PORT=1455 \
>   -e WEBUI_ACCESS_PASSWORD=your_secure_password \
>   -v $(pwd)/data:/app/data \
>   --name codex-register \
>   ghcr.io/yunxilyf/codex-register:latest
> ```
> 
> 环境变量说明：
> - `WEBUI_HOST`: 监听的主机地址 (默认 `0.0.0.0`)
> - `WEBUI_PORT`: 监听的端口 (默认 `1455`)
> - `WEBUI_ACCESS_PASSWORD`: 设置 Web UI 的访问密码
> - `DEBUG`: 设为 `1` 或 `true` 开启调试模式
> - `LOG_LEVEL`: 日志级别，如 `info`, `debug`
> 
> > **注意**：`-v $(pwd)/data:/app/data` 挂载参数非常重要，它确保了你的数据库文件和账户信息在容器重启或更新后不会丢失。
> 
> ### 使用远程 PostgreSQL
> 
> 通过环境变量指定数据库连接字符串：
> 
> ```bash
> export APP_DATABASE_URL="postgresql://user:password@host:5432/dbname"
> python webui.py
> ```
> 
> 也支持 `DATABASE_URL`，优先级低于 `APP_DATABASE_URL`。
> 
> 启动后访问 http://127.0.0.1:8000
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
> 打包后生成 `codex-register.exe`（Windows）或 `codex-register`（Unix），双击或直接运行即可，无需安装 Python 环境。
> 
> ## 项目结构
> 
> ```
> codex-register-v2/
> ├── webui.py            # Web UI 入口
> ├── build.bat           # Windows 打包脚本
> ├── build.sh            # Linux/macOS 打包脚本
> ├── src/
> │   ├── config/         # 配置管理（Pydantic Settings）
> │   ├── core/
> │   │   ├── openai/     # OAuth、Token 刷新、支付核心
> │   │   └── upload/     # CPA / Sub2API / Team Manager 上传模块
> │   ├── database/       # 数据库（SQLAlchemy + SQLite/PostgreSQL）
> │   ├── services/       # 邮箱服务实现
> │   └── web/
> │       ├── app.py      # 应用入口、路由挂载
> │       ├── task_manager.py  # 任务/日志/WebSocket 管理
> │       └── routes/     # API 路由
> │           └── upload/ # CPA / Sub2API / TM 服务管理路由
> ├── templates/          # Jinja2 HTML 模板
> ├── static/             # 静态资源（CSS / JS）
> └── data/               # 运行时数据目录（数据库、日志）
> ```
> 
> ## 技术栈
> 
> | 层级 | 技术 |
> |------|------|
> | Web 框架 | FastAPI + Uvicorn |
> | 数据库 | SQLAlchemy + SQLite / PostgreSQL |
> | 模板引擎 | Jinja2 |
> | HTTP 客户端 | curl_cffi（浏览器指纹模拟） |
> | 实时通信 | WebSocket |
> | 并发 | asyncio Semaphore + ThreadPoolExecutor |
> | 前端 | 原生 JavaScript（无框架） |
> | 打包 | PyInstaller |
> 
> ## API 端点
> 
> ### 注册任务
> 
> | 方法 | 路径 | 说明 |
> |------|------|------|
> | POST | `/api/registration/start` | 启动注册任务 |
> | GET | `/api/registration/tasks` | 任务列表 |
> | GET | `/api/registration/tasks/{uuid}/logs` | 任务日志 |
> | POST | `/api/registration/tasks/{uuid}/cancel` | 取消任务 |
> | GET | `/api/registration/available-services` | 可用邮箱服务 |
> 
> ### 账号管理
> 
> | 方法 | 路径 | 说明 |
> |------|------|------|
> | GET | `/api/accounts` | 账号列表（支持分页、筛选、搜索） |
> | GET | `/api/accounts/{id}` | 账号详情 |
> | PATCH | `/api/accounts/{id}` | 更新账号（状态/cookies） |
> | DELETE | `/api/accounts/{id}` | 删除账号 |
> | POST | `/api/accounts/batch-delete` | 批量删除 |
> | POST | `/api/accounts/export/json` | 导出 JSON |
> | POST | `/api/accounts/export/csv` | 导出 CSV |
> | POST | `/api/accounts/export/cpa` | 导出 CPA 格式（单文件或 ZIP） |
> | POST | `/api/accounts/export/sub2api` | 导出 Sub2API 格式 |
> | POST | `/api/accounts/{id}/refresh` | 刷新 Token |
> | POST | `/api/accounts/batch-refresh` | 批量刷新 Token |
> | POST | `/api/accounts/{id}/validate` | 验证 Token |
> | POST | `/api/accounts/batch-validate` | 批量验证 Token |
> | POST | `/api/accounts/{id}/upload-cpa` | 上传单账号到 CPA |
> | POST | `/api/accounts/batch-upload-cpa` | 批量上传到 CPA |
> | POST | `/api/accounts/{id}/upload-sub2api` | 上传单账号到 Sub2API |
> | POST | `/api/accounts/batch-upload-sub2api` | 批量上传到 Sub2API |
> 
> ### 支付升级
> 
> | 方法 | 路径 | 说明 |
> |------|------|------|
> | POST | `/api/payment/generate` | 生成 Plus/Team 支付链接 |
> | POST | `/api/payment/open` | 后端无痕模式打开浏览器 |
> | POST | `/api/payment/accounts/{id}/mark-subscription` | 手动标记订阅类型 |
> | POST | `/api/payment/accounts/batch-check-subscription` | 批量检测订阅状态 |
> | POST | `/api/payment/accounts/{id}/upload-tm` | 上传单账号到 Team Manager |
> | POST | `/api/payment/accounts/batch-upload-tm` | 批量上传到 Team Manager |
> 
> ### 邮箱服务
> 
> | 方法 | 路径 | 说明 |
> |------|------|------|
> | GET | `/api/email-services` | 服务列表 |
> | POST | `/api/email-services` | 添加服务 |
> | PATCH | `/api/email-services/{id}` | 更新服务 |
> | DELETE | `/api/email-services/{id}` | 删除服务 |
> | POST | `/api/email-services/{id}/test` | 测试服务 |
> | POST | `/api/email-services/outlook/batch-import` | 批量导入 Outlook |
> 
> ### 上传服务管理
> 
> | 方法 | 路径 | 说明 |
> |------|------|------|
> | GET/POST | `/api/cpa-services` | CPA 服务列表/创建 |
> | PUT/DELETE | `/api/cpa-services/{id}` | 更新/删除 CPA 服务 |
> | POST | `/api/cpa-services/{id}/test` | 测试 CPA 连接 |
> | GET/POST | `/api/sub2api-services` | Sub2API 服务列表/创建 |
> | PUT/DELETE | `/api/sub2api-services/{id}` | 更新/删除 Sub2API 服务 |
> | POST | `/api/sub2api-services/{id}/test` | 测试 Sub2API 连接 |
> | GET/POST | `/api/tm-services` | Team Manager 服务列表/创建 |
> | PUT/DELETE | `/api/tm-services/{id}` | 更新/删除 TM 服务 |
> | POST | `/api/tm-services/{id}/test` | 测试 TM 连接 |
> 
> ### 设置
> 
> | 方法 | 路径 | 说明 |
> |------|------|------|
> | GET | `/api/settings` | 获取所有设置 |
> | POST | `/api/settings/proxy/dynamic` | 更新动态代理设置 |
> | GET/POST/DELETE | `/api/settings/proxies` | 代理列表管理 |
> | POST | `/api/settings/proxies/{id}/set-default` | 设为默认代理 |
> | GET | `/api/settings/database` | 数据库信息 |
> 
> ### WebSocket
> 
> | 路径 | 说明 |
> |------|------|
> || `ws://host/api/ws/logs/{uuid}` | 实时日志流 |
> 
> ## Docker 部署
> 
> ### 环境要求
> 
> - Docker
> - Docker Compose
> 
> ### 快速部署
> 
> ```bash
> # 克隆项目
> git clone https://github.com/cnlimiter/codex-register.git
> cd codex-register
> 
> # 启动服务
> docker-compose up -d
> ```
> 
> 服务启动后访问 http://localhost:8000
> 
> ### 配置说明
> 
> **端口映射**：默认 

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[並發]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/cnlimiter/codex-manager)

## 相關收錄

> [!note]- 直接競品（同子分類：帳號管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "帳號管理" AND file.name != "cnlimiter--codex-manager"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cnlimiter--codex-manager"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "cnlimiter--codex-manager" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "cnlimiter--codex-manager"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","並發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cnlimiter--codex-manager" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cnlimiter--codex-manager");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cnlimiter--codex-manager" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cnlimiter" AND file.name != "cnlimiter--codex-manager"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cnlimiter--codex-manager");
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
> const me = dv.page("Repos/cnlimiter--codex-manager");
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
> const me = dv.page("Repos/cnlimiter--codex-manager");
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
> const me = dv.page("Repos/cnlimiter--codex-manager");
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
> const me = dv.page("Repos/cnlimiter--codex-manager");
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

> **2026-03-22** — 首次收錄
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

- [[2026-03-22|2026-03-22]] — 首次收錄，1.3k stars
