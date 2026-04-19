---
repo: Mouseww/anything-analyzer
url: https://github.com/Mouseww/anything-analyzer
owner: Mouseww
owner_type: User
language: TypeScript
license: N/A
description: "全能协议分析工具：浏览器抓包 + MITM 代理 + 指纹伪装 + AI 分析 + MCP Server 无缝对接 AI Agent/IDE   |  All-in-one protocol analysis toolkit — built-in browser capture, MITM proxy, JS hooks, fingerprint spoofing, AI analysis & MCP server for agent integration"
homepage: ""
stars: 1353
stars_per_day: 226
forks: 311
open_issues: 3
created: 2026-04-12
pushed_at: 2026-04-18
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "協議分析"
release_tag: "v3.3.5"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "全能协议分析工具，支持浏览器抓包、MITM 代理、指纹伪装和 AI 分析。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-22"
contributor_count: 3
engagement: "medium"
issue_close_rate: 83
repo_size_kb: 680
readme_length: 6817
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:798,2026-04-16:799,2026-04-17:1042,2026-04-17:1048,2026-04-18:1276,2026-04-18:1277,2026-04-19:1350,2026-04-19:1353"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/2api"
  - "topic/ai_tools"
  - "topic/analysis_cli"
  - "topic/api_analysis"
  - "topic/automation_tools"
aliases:
  - "anything-analyzer"
  - "Mouseww/anything-analyzer"
  - "全能协议分析工具，支持浏览器抓包、MITM 代理、指纹伪装和 AI 分析。"
---

# anything-analyzer

**1.4k** stars · **226** stars/天 · 建立 6 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Mouseww--anything-analyzer");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v3.3.5`

`2api` `ai-tools` `analysis-cli` `api-analysis` `automation-tools` `blackbox-testing` `network-analysis` `protocol-analysis` `reverse-engineering` `traffic-analysis`

> [!summary] 一句話摘要
> 全能协议分析工具，支持浏览器抓包、MITM 代理、指纹伪装和 AI 分析。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (226 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要全面抓包和分析多種流量來源的開發者和安全研究員。
> **一句話重點** 這個工具不僅是抓包工具，更是結合 AI 的全能分析平台，能大幅提升開發和安全研究的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Mouseww--anything-analyzer");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "協議分析" && p.file.name !== "Mouseww--anything-analyzer" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 協議分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到全面的抓包和分析能力，值得嘗試。

> [!abstract] 核心創新
> 提供全場景抓包和 AI 智能分析的綜合解決方案。

## 專案簡介

Anything Analyzer 是一款集成了浏览器抓包、MITM 代理、指纹伪装和 AI 分析的全能协议分析工具。用户可以通过内嵌浏览器直接操作网站，捕获所有 HTTP 请求，或使用 MITM 代理捕获桌面应用和移动设备的流量。所有请求会统一汇入同一个会话，AI 分析则提供协议逆向、安全审计和加密分析等功能，极大地简化了手动分析的复杂性。其一键生成的报告支持多轮追问，实时流式输出，提升了分析效率。该工具使用 Electron 框架构建，前端采用 React 和 TypeScript，后端则依赖于 better-sqlite3 进行数据存储，确保了高效的性能和良好的用户体验。

与传统工具相比，Anything Analyzer 不仅支持浏览器，还能处理桌面应用、终端命令和移动设备的流量，适合需要全面抓包和分析的开发者。相较于 Fiddler 和 Charles，Anything Analyzer 提供了更为直观的用户界面和更强大的 AI 分析能力，尤其在处理 HTTPS 流量时表现出色。该工具适合中小型团队或独立开发者，能够在多种场景下应用，如逆向网站 API、调试 CLI 工具和进行安全审计等。使用时需注意 CA 证书的安装和配置，确保能够顺利捕获流量。整体来看，Anything Analyzer 是一款功能强大且易于使用的协议分析工具，值得开发者尝试。

**技術棧**：`Electron 35` · `React 19` · `TypeScript 5.7.0` · `better-sqlite3` · `node-forge`

## 重點功能

- 全場景抓包 — 支持內嵌瀏覽器、MITM 代理、終端命令等多種流量來源。
- AI 智能分析 — 提供自動識別、API 逆向、安全審計等多種分析模式。
- 會話管理 — 所有來源的請求統一匯入同一會話，便於集中分析。
- 多標籤頁支持 — 自動捕獲彈窗，方便 OAuth 流程的處理。
- CA 證書管理 — 一鍵安裝和管理 CA 證書，確保 HTTPS 流量的捕獲。

## 快速開始

1. 下載並安裝應用
```bash
從 Releases 頁面下載對應平台的安裝包
```
2. 配置 LLM API Key
```bash
Settings → LLM，填入 API Key
```
3. 新建 Session 並開始抓包
```bash
輸入名稱和目標 URL，然後點擊 Start Capture
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 CA 證書並啟用 MITM 代理",
  "curl -x http://127.0.0.1:8888 https://api.example.com/data",
  "# 預期輸出：返回 API 的 JSON 數據"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1353 stars（226/天），forks 311（23.0%），這顯示出強烈的社群關注。作者 Mouseww 擁有豐富的開發經驗，這個工具解決了傳統抓包工具各自為政的問題，提供了一個全能的解決方案。近期的推廣活動和社群討論也加速了其知名度的提升。技術上，這個工具的多功能性和 AI 分析能力在當前市場上是相對稀缺的，吸引了許多開發者的目光。forks/stars 比率高達 23.0%，顯示出許多用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要全面抓包和分析多種流量來源的開發者和安全研究員。

> [!example] 使用場景
> - 後端工程師用它來逆向網站 API，因為它能自動生成 API 文檔和 Python 代碼，節省了手動分析的時間。
> - 安全研究員用它來進行安全審計，因為它能快速識別 Token 泄露和 CSRF 漏洞，提升了審計效率。
> - 移動開發者用它來調試 App 的隱藏 API，因為它支持 MITM 代理，能捕獲和分析移動設備的流量。

## 架構分析

Anything Analyzer 採用 Electron 框架，前端使用 React 和 TypeScript，後端則依賴於 better-sqlite3 進行數據存儲。其架構設計旨在支持多種流量來源的捕獲，並通過統一的會話管理來簡化分析過程。MITM 代理和內嵌瀏覽器的雙通道捕獲模式，確保了對各種請求的全面捕獲。

選擇 Electron 使得跨平台部署變得簡單，但也帶來了相對較大的應用包體積。這種設計使得工具能夠在多種環境中運行，但在高流量場景下可能會面臨性能瓶頸。整體而言，這種架構能夠靈活應對多樣化的抓包需求，並提供強大的分析能力。

## 技術深入分析

Anything Analyzer 的核心技術機制在於其雙通道捕獲架構，通過內嵌瀏覽器和 MITM 代理來捕獲各種流量。這種設計使得用戶能夠在同一會話中處理來自不同來源的請求，並利用 AI 進行智能分析。其 AI 分析流程分為兩個階段，首先過濾噪聲請求，然後進行深度分析，這樣的設計能夠有效提升分析效率。性能方面，該工具在處理大量請求時可能會遇到瓶頸，特別是在高流量環境下，可能需要更多的資源來維持流暢的操作。選擇 Electron 作為開發框架，使得工具能夠跨平台運行，但也帶來了相對較大的應用包體積。整體而言，這個工具的設計考量了多種使用場景，並提供了靈活的擴展性，未來可能會進一步整合更多的 AI 模型和分析功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的使用說明和範例；安裝過程順暢，但需要注意 CA 證書的安裝；提供了良好的快速開始指南，文件目前僅有英文版。整體上，花 30 分鐘應該能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 全能抓包能力，支持多種流量來源。
> - AI 分析功能強大，能自動生成報告。
> - 用戶界面友好，易於上手。

> [!danger] 缺點
> - 首次安裝需要管理員權限，可能造成不便。
> - 對於高流量場景性能可能不足。
> - 需要用戶自行配置 LLM，增加了使用門檻。

> [!warning] 注意事項
> - 僅支援 HTTPS 流量捕獲，HTTP 流量無法處理。
> - 需要安裝 CA 證書，首次安裝需管理員權限。
> - MITM 代理僅支援只讀捕獲，不修改請求/響應內容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的抓包功能，但主要針對特定協議，功能範圍較窄。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於 API 測試和逆向，缺乏全面的抓包和分析能力。 |
| [Fiddler/FiddlerCore](https://github.com/Fiddler/FiddlerCore) | 傳統抓包工具，功能強大但界面較為複雜，使用上不如本專案直觀。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Fiddler/FiddlerCore](https://github.com/Fiddler/FiddlerCore) | 傳統抓包工具，功能強大但界面較為複雜，使用上不如本專案直觀。 | 如果需要更深入的 HTTP 流量分析和調試功能，且不介意較高的學習曲線。 | medium，因為需要重新適應工具的界面和功能。 |
| [CharlesProxy/Charles](https://github.com/CharlesProxy/Charles) | 專注於 HTTP/HTTPS 流量的抓包，功能相對單一，缺乏 AI 分析能力。 | 如果只需要一個簡單的 HTTP 代理工具，且不需要 AI 分析。 | low，因為界面和功能相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **anything-analyzer** | **FiddlerCore** | **Charles** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 傳統抓包工具，功能強大但界面較為複雜，使用上不如本專案直觀。 | 專注於 HTTP/HTTPS 流量的抓包，功能相對單一，缺乏 AI 分析能力。 |
> | 遷移成本 | - | medium，因為需要重新適應工具的界面和功能。 | low，因為界面和功能相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果需要更深入的 HTTP 流量分析和調試功能，且不介意較高 | 如果只需要一個簡單的 HTTP 代理工具，且不需要 AI 分 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次安裝 CA 證書時需要管理員權限，可能導致安裝失敗
  - 解法：確保以管理員身份運行安裝程序
- [MEDIUM] 在高流量環境下可能會遇到性能瓶頸
  - 解法：考慮使用更高效的硬體或優化流量捕獲設置
- [low] MITM 代理僅支持只讀捕獲，無法修改請求/響應內容
  - 解法：確保在使用前了解其限制

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創公司進行 API 逆向 | 非常適合 | 工具功能全面，能快速生成 API 文檔和代碼。 |
| 大型企業的安全審計團隊 | 普通 | 雖然功能強大，但可能需要更多的資源來支持高流量。 |
| 個人開發者進行小型專案的流量分析 | 非常適合 | 界面友好，易於上手，適合快速開發和測試。 |
| 需要長期穩定運行的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性和性能可能不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到全面的抓包和分析能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，僅需安裝 CA 證書來捕獲 HTTPS 流量；不存取敏感資料，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
| Forks | 311 |
| Open Issues | 3 |
| Issue 解決率 | 83% (15 closed) |
| 最後推送 | 2026-04-18 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 680 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Mouseww/anything-analyzer) |
| Topics | `2api` `ai-tools` `analysis-cli` `api-analysis` `automation-tools` `blackbox-testing` `network-analysis` `protocol-analysis` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@ant-design/icons` `@modelcontextprotocol/sdk` `@vscode/sudo-prompt` `antd` `better-sqlite3` `electron-updater` `node-forge` `react` `react-dom` `react-markdown` `react-window` `rehype-highlight` `remark-gfm` `uuid` `zod`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 88
>     "CSS" : 12
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Mouseww](https://github.com/Mouseww) | 7 |
> | [@furkankoykiran](https://github.com/furkankoykiran) | 2 |
> | [@captain686](https://github.com/captain686) | 2 |

**最新版本**：v3.3.5 (2026-04-18)

> [!info]- Release Notes
> # Anything Analyzer v3.3.5
> 
> ## 新功能
> 
> - **Per-session Tab Groups** — 每个 session 独享自己的 tab 集合，切换 session 时隐藏旧 tab 并恢复新 session 的 tab，页面状态完整保留（登录态、表单、滚动位置等）
> - **浏览器数据完全隔离** — 各 session 通过 Electron partition 实现 cookies/localStorage/cache 独立，Session A 的登录不会泄露到 Session B
> 
> ## 改进
> 
> - 首次访问 session 自动导航到 target_url；返回已有 tab 的 session 不强制跳转
> - 导航决策移入 main process，消除 renderer ↔ main IPC 往返的时序问题
> - 删除 session 时同步清理对应的 tab group 及浏览器数据
> - App 退出时正确清理所有 session group 的 tab 资源

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達 83%。
**連結**：[文件](https://github.com/Mouseww/anything-analyzer)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-17 ~ 2026-04-18）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #20 from octo-patch/feature/add-minimax-provider

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/Mouseww/anything-analyzer/issues/18) | 稍微有点反爬，就歇菜了 | 1 | 4 |
> | [#21](https://github.com/Mouseww/anything-analyzer/issues/21) | 追问失败 | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Anything Analyzer
> 
> [简体中文](README.md) | [English](README.en.md)
> 
> > **网页、桌面应用、终端命令、Python 脚本、手机 App —— 不管流量从哪来，抓到就能让 AI 自动逆向分析。**
> 
> [](https://www.electronjs.org/)
> [](https://react.dev/)
> [](https://www.typescriptlang.org/)
> [](LICENSE)
> 
> ---
> 
> ## 为什么用 Anything Analyzer？
> 
> 传统工具各管一摊：DevTools 只看浏览器、Fiddler/Charles 只做代理、Wireshark 看不了 HTTPS。抓完包还得自己翻几百条请求，手动分析。
> 
> **Anything Analyzer 不一样 —— 全场景抓包 + AI 自动分析：**
> 
> ```
>   网页          桌面应用         终端            脚本          手机/IoT
>   Chrome       Postman         curl/wget      Python        App / 小程序
>     │          Electron          │             Node.js          │
>     │            │               │               │              │
>     ▼            ▼               ▼               ▼              ▼
>  ┌──────────┐ ┌─────────────────────────────────────────────────────┐
>  │ 内嵌浏览器 │ │              MITM 代理 (端口 8888)                   │
>  │   (CDP)   │ │   系统代理 / 手动指定 / Wi-Fi 代理                    │
>  └─────┬─────┘ └──────────────────────┬──────────────────────────────┘
>        │                              │
>        └──────────┬───────────────────┘
>                   ▼
>         ┌─────────────────┐
>         │  统一会话 Session  │  ← 所有来源的请求汇入同一个会话
>         └────────┬────────┘
>                  ▼
>         ┌─────────────────┐
>         │   AI 智能分析     │  ← 一键生成协议逆向 / 安全审计 / 加密分析报告
>         └─────────────────┘
> ```
> 
> ---
> 
> ## 三大核心能力
> 
> ### 1. 全场景抓包 — Anything，不止浏览器
> 
> | 抓包对象 | 怎么抓 | 典型场景 |
> |---------|--------|---------|
> | **网页** | 内嵌浏览器直接操作 | 网站 API 逆向、OAuth 登录、前端加密 |
> | **桌面应用** | MITM 代理 + 系统代理 | Postman、Electron 应用、游戏客户端 |
> | **终端命令** | MITM 代理 + 环境变量 | curl、wget、httpie |
> | **脚本程序** | MITM 代理 + 代码配置 | Python requests、Node.js fetch、Go http |
> | **手机 / 平板** | MITM 代理 + Wi-Fi 代理 | iOS/Android App、小程序、H5 |
> | **IoT / 其他设备** | MITM 代理 + 网关代理 | 智能家居、嵌入式设备的 HTTP 通信 |
> 
> 所有来源的请求**统一汇入同一个 Session**，AI 分析时一并处理。
> 
> ### 2. AI 智能分析 — 不只是抓包，是自动理解协议
> 
> - **两阶段分析** — Phase 1 智能过滤噪声请求 → Phase 2 聚焦深度分析
> - **5 种分析模式** — 自动识别 / API 逆向 / 安全审计 / 性能分析 / JS 加密逆向
> - **JS Hook 注入** — 自动拦截 fetch、XHR、crypto.subtle、CryptoJS、SM2/3/4 等加密调用
> - **加密代码提取** — 从 JS 文件中自动提取加密相关代码片段
> - **流式输出 + 多轮追问** — 报告实时流式显示，可继续追问细节
> 
> ### 3. MCP 生态集成 — AI Agent 的抓包工具
> 
> - **MCP Client** — 接入外部 MCP Server（stdio + StreamableHTTP），扩展 AI 分析能力
> - **内置 MCP Server** — 将抓包和分析能力暴露为 MCP 工具，可被 Claude Desktop、Cursor 等直接调用
> 
> ---
> 
> ## 使用场景
> 
> | 场景 | 流量来源 | 你能得到什么 |
> |------|---------|-------------|
> | **逆向网站 API** | 内嵌浏览器 | API 端点文档 + 鉴权流程 + Python 复现代码 |
> | **逆向 App 协议** | 手机 Wi-Fi 代理 | App 的隐藏 API + 请求签名逻辑 |
> | **JS 加密逆向** | 内嵌浏览器 + JS Hook | 加密算法识别 + 流程还原 + Python 实现 |
> | **安全审计** | 浏览器 + 代理混合 | Token 泄露、CSRF/XSS 漏洞、敏感数据暴露 |
> | **调试 CLI 工具** | 终端 curl/httpie | 完整请求/响应记录 + AI 解读每一步 |
> | **调试微服务** | 脚本 + 环境变量代理 | 服务间调用链路 + 认证流转分析 |
> 
> ---
> 
> ## Anything Analyzer — 使用说明
> 
> [使用说明](USAGE.md) 
> 
> ---
> 
> ## 快速开始
> 
> ### 下载安装
> 
> 从 [Releases](https://github.com/Mouseww/anything-analyzer/releases) 下载对应平台安装包：
> 
> | 平台 | 文件 |
> |------|------|
> | Windows | `Anything-Analyzer-Setup-x.x.x.exe` |
> | macOS (Apple Silicon) | `Anything-Analyzer-x.x.x-arm64.dmg` |
> | macOS (Intel) | `Anything-Analyzer-x.x.x-x64.dmg` |
> | Linux | `Anything-Analyzer-x.x.x.AppImage` |
> 
> ### 抓网页 — 内嵌浏览器
> 
> 1. **配置 LLM** — Settings → LLM，填入 API Key（支持 OpenAI / Anthropic / 任何兼容 API）
> 2. **新建 Session** — 输入名称和目标 URL
> 3. **操作抓包** — 在内嵌浏览器中操作网站，点击 Start Capture
> 4. **AI 分析** — 停止捕获，点击 Analyze，选择分析模式
> 
> ### 抓应用/终端/手机 — MITM 代理
> 
> 1. Settings → MITM 代理 → **安装 CA 证书**
> 2. **启用代理**（默认端口 `8888`）
> 3. 根据场景配置代理：
> 
> ```bash
> # ---- 终端命令 ----
> curl -x http://127.0.0.1:8888 https://api.example.com/data
> 
> # ---- Python 脚本 ----
> proxies = {"http": "http://127.0.0.1:8888", "https": "http://127.0.0.1:8888"}
> requests.get("https://api.example.com/data", proxies=proxies)
> 
> # ---- Node.js ----
> HTTP_PROXY=http://127.0.0.1:8888 HTTPS_PROXY=http://127.0.0.1:8888 node app.js
> 
> # ---- 系统全局（桌面应用自动走代理）----
> # Settings 中一键开启「设为系统代理」
> 
> # ---- 手机 / 平板 ----
> # Wi-Fi 设置 → HTTP 代理 → 手动 → 填入电脑 IP + 端口 8888
> # 然后用手机浏览器访问代理地址下载并安装 CA 证书
> ```
> 
> 4. 新建 Session（URL 可留空）→ Start Capture → 外部应用流量自动汇入
> 
> CA 证书详细说明
> 
> - 证书存储：`%APPDATA%/anything-analyzer/certs/`（Windows）/ `~/Library/Application Support/anything-analyzer/certs/`（macOS）
> - 首次安装需管理员权限（Windows UAC / macOS 密码）
> - Settings 中可随时卸载、重新生成或导出证书
> - 根 CA 有效期 10 年，子证书 825 天（符合 Apple 要求）
> - MITM 代理为**只读捕获**，不修改请求/响应内容
> - WebSocket 流量隧道转发，不做解密
> - 单个 body 上限 1MB，二进制内容自动跳过
> 
> ---
> 
> ## 全部功能
> 
> 展开查看完整功能列表
> 
> **抓包引擎**
> - 全量网络捕获 — CDP Fetch 拦截，所有 HTTP 请求/响应（含 headers、body）
> - MITM 代理 — 内置 HTTPS 中间人代理，自动签发 TLS 证书，按域名 LRU 缓存
> - 双通道捕获 — 浏览器 CDP + MITM 代理，统一汇入同一会话
> - SSE / WebSocket 识别 — 自动检测流式通信和 WebSocket 升级请求
> - 存储快照 — 定时采集 Cookie、localStorage、sessionStorage 变化
> - Domain 过滤 — 请求列表按域名分组过滤，支持部分匹配搜索
> - 请求来源标记 — 区分「CDP」和「代理」来源
> - 导出请求 — 原始请求数据导出为 JSON 文件
> 
> **浏览器**
> - 多标签页 — 支持弹窗自动捕获为内部标签（OAuth 流程友好）
> - 标签页防护 — 阻止 `window.close()` 关闭标签页，最后一个标签页被意外销毁时自动恢复
> - 一键清除环境 — Cookies、localStorage、sessionStorage、缓存一键清空
> 
> **AI 分析**
> - 两阶段分析 — Phase 1 智能过滤 → Phase 2 深度分析，AI 按需查看请求详情
> - 手动多选分析 — 勾选指定请求直接分析，跳过预过滤
> - 自定义 Prompt 模板 — 内置多种模板，支持自定义
> - 流式输出 + 追问 — 报告实时显示，支持多轮对话
> 
> **系统**
> - 系统代理集成 — 一键设为系统代理（Windows 注册表 / macOS networksetup / Linux gsettings）
> - CA 证书管理 — 安装 / 卸载 / 重新生成 / 导出，跨平台支持
> - 全局代理 — 支持 SOCKS5/HTTP/HTTPS 代理
> - 自动更新 — 内置 electron-updater
> - 暗色主题 — 基于 Ant Design 的现代界面
> 
> ---
> 
> ## 从源码构建
> 
> ```bash
> git clone https://github.com/MouseWW/anything-analyzer.git
> cd anything-analyzer
> pnpm install
> pnpm dev        # 开发模式
> pnpm test       # 运行测试
> pnpm build && npx electron-builder --win  # 构建 Windows 安装包
> ```
> 
> **环境要求：** Node.js >= 18 · pnpm · Visual Studio Build Tools (Windows)
> 
> ## Tech Stack
> 
> | Layer | Technology |
> |-------|-----------|
> | Framework | Electron 35 + electron-vite |
> | Frontend | React 19 + Ant Design 5 + TypeScript |
> | Database | better-sqlite3 (local SQLite) |
> | Protocol | Chrome DevTools Protocol (CDP) |
> | Proxy | 内置 MITM HTTPS 代理（node-forge TLS） |
> | AI | OpenAI / Anthropic / Custom LLM（Chat Completions + Responses API） |
> | AI 扩展 | MCP Client（stdio + StreamableHTTP）+ 内置 MCP Server |
> 
> 项目结构
> 
> ```
> src/
> ├── main/                    # Electron main process
> │   ├── ai/                  # AI 分析流水线（两阶段编排、prompt、LLM 路由）
> │   ├── capture/             # 抓包引擎（CDP Fetch + JS Hook + 存储快照）
> │   ├── cdp/                 # Chrome DevTools Protocol 管理
> │   ├── proxy/               # MITM 代理（CA 管理、证书签发、系统代理）
> │   ├── mcp/                 # MCP Client + 内置 MCP Server
> │   ├── db/                  # SQLite 数据层
> │   └── session/             # 会话生命周期管理
> ├── preload/                 # Context bridge + Hook 注入脚本
> ├── renderer/                # React UI（组件 + Hooks）
> └── shared/                  # 共享类型定义
> ```
> 
> ---
> 
> 本项目`不具备`以下能力：
> - 不具备【非法获取计算机数据】的功能
> - 不具备【非法修改计算机数据】的功能
> - 不具备【非法控制计算机系统】的功能
> - 不具备【破坏计算机系统】的功能
> - 不具备【内置AI模型】（AI 模型由用户自行配置，请按照《生成式人工智能服务管理暂行办法》合规使用大模型）
> 
> **务必不要使用本工具进行任何违反中国法律的行为！！！**
> 
> ---
> 
> Thanks to everyone on [LinuxDo](https://linux.do/) for their support!
> 
> ## Star History
> 
> [](https://star-history.com/#Mouseww/anything-analyzer&Date)
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[MITM 代理]] · [[API 逆向]] · [[安全審計]] · [[流量分析]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/Mouseww/anything-analyzer)

## 相關收錄

> [!note]- 直接競品（同子分類：協議分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "協議分析" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Mouseww--anything-analyzer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MITM 代理","API 逆向","安全審計","流量分析","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Mouseww--anything-analyzer" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Mouseww--anything-analyzer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Mouseww" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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

> **2026-04-16** — 首次收錄
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

- [[2026-04-19|2026-04-19]] — 再次上榜，1.4k stars
- [[2026-04-18|2026-04-18]] — 再次上榜，1.3k stars
- [[2026-04-17|2026-04-17]] — 再次上榜，1.0k stars
- [[2026-04-16|2026-04-16]] — 首次收錄，798 stars
