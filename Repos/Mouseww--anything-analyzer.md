---
repo: Mouseww/anything-analyzer
url: https://github.com/Mouseww/anything-analyzer
owner: Mouseww
owner_type: User
language: TypeScript
license: N/A
description: "利用 browser + CDP capture + AI analysis  傻瓜式生成 注册机 | 2API | 其他浏览器或应用行为 的协议分析文档"
homepage: ""
stars: 1048
stars_per_day: 262
forks: 258
open_issues: 9
created: 2026-04-12
pushed_at: 2026-04-17
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "協議分析"
release_tag: "v3.1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "傻瓜式生成注册机、API 和其他应用行为的协议分析文档。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-20"
contributor_count: 1
engagement: "medium"
issue_close_rate: 44
repo_size_kb: 559
readme_length: 6764
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:798,2026-04-16:799,2026-04-17:1042,2026-04-17:1048"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "anything-analyzer"
  - "Mouseww/anything-analyzer"
  - "傻瓜式生成注册机、API 和其他应用行为的协议分析文档。"
---

# anything-analyzer

**1.0k** stars · **262** stars/天 · 建立 4 天前 · TypeScript · 未標註授權

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

`個人專案` `v3.1.0`

> [!summary] 一句話摘要
> 傻瓜式生成注册机、API 和其他应用行为的协议分析文档。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (262 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速分析和逆向網路協議的開發者和安全工程師。
> **一句話重點** 這個專案不僅提供抓包功能，還能自動生成分析報告，顯著提升了開發者的工作效率。

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
> **成熟度** Stable (可用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，能夠快速獲得 API 信息，值得採用。

> [!abstract] 核心創新
> 提供全場景抓包和 AI 智能分析的集成解決方案。

## 專案簡介

Anything Analyzer 是一款集成浏览器和 AI 分析的全场景抓包工具，旨在简化网络协议的逆向分析。用户可以通过内嵌浏览器直接操作网页，或使用 MITM 代理抓取桌面应用、终端命令和移动设备的流量。抓取的请求会统一汇入一个会话，AI 将对其进行智能分析，生成 API 文档、鉴权流程和安全审计报告。核心功能包括两阶段分析、支持多种流量来源和实时流式输出。使用者只需配置 LLM API Key，创建会话并开始抓包，AI 分析便可自动进行。

该工具支持多种平台，包括 Windows、macOS 和 Linux，且具有良好的用户界面和操作体验。其技术架构基于 Electron、React 和 TypeScript，使用 Chrome DevTools Protocol 进行抓包，依赖于内置的 MITM 代理进行 HTTPS 流量捕获。与传统工具相比，Anything Analyzer 通过集成多种抓包方式，消除了手动分析的繁琐，适合需要快速获取 API 信息和进行安全审计的开发者。尽管如此，使用者需注意其对网络环境的依赖和可能的 SSL 证书问题。该项目目前处于稳定阶段，适合小型团队和个人开发者使用，未来可能会进一步扩展 AI 分析能力和支持更多协议。

**技術棧**：`Electron 35` · `React 19` · `TypeScript 5.7.0` · `better-sqlite3`

## 重點功能

- 全場景抓包 — 支持內嵌瀏覽器、MITM 代理等多種流量來源。
- AI 智能分析 — 提供兩階段分析，能自動識別 API 和安全漏洞。
- MCP 生態集成 — 支持與外部 AI Agent 的連接，擴展分析能力。
- 多平台支持 — 可在 Windows、macOS 和 Linux 上運行。
- 實時流式輸出 — 分析報告可即時顯示，支持多輪追問。

## 快速開始

1. 下載並安裝應用
```bash
從 Releases 下載對應平台的安裝包
```
2. 配置 LLM API
```bash
Settings → LLM，填入 API Key
```
3. 新建 Session
```bash
輸入名稱和目標 URL，然後點擊 Start Capture
```
4. 進行抓包
```bash
在內嵌瀏覽器中操作網站
```
5. 分析數據
```bash
停止捕獲後點擊 Analyze，選擇分析模式
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 CA 证书并启用 MITM 代理",
  "指令": "curl -x http://127.0.0.1:8888 https://api.example.com/data",
  "預期輸出": "返回 API 的响应数据"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1048 stars（262/天），forks 258（24.6%），顯示出相對活躍的社群參與。作者 Mouseww 之前有開發類似工具，這次的專案解決了傳統抓包工具各自為政的痛點，提供了一個全方位的解決方案。近期的推廣活動和社群討論也可能促進了這個專案的曝光率。高達 24.6% 的 forks/stars 比率顯示許多使用者對此工具進行了實際修改或擴展，這是社群活躍的良好指標。

## 適合誰使用

**目標受眾**：需要快速分析和逆向網路協議的開發者和安全工程師。

> [!example] 使用場景
> - 安全工程師用它來分析網站 API 的安全性，因為它能自動生成 API 文檔和鑑權流程，節省了手動分析的時間。
> - 後端開發者用它來逆向移動應用的隱藏 API，因為它集成了多種抓包方式，能快速捕獲和分析流量。
> - 測試工程師用它來進行安全審計，因為它能檢測 Token 泄露和 CSRF 漏洞，並提供詳細的分析報告。

## 架構分析

專案採用 Electron 作為桌面應用框架，利用 Chrome DevTools Protocol 進行抓包，並通過內置的 MITM 代理捕獲 HTTPS 流量。架構設計上，抓包引擎和 AI 分析模組分開，便於擴展和維護。資料流經過內嵌瀏覽器和 MITM 代理，最終統一匯入同一會話進行分析。選擇 Electron 的原因在於其跨平台特性，代價是可能會增加應用的體積和啟動時間。擴展性方面，未來可通過 MCP 協議進一步擴展 AI 分析能力。

## 技術深入分析

Anything Analyzer 的核心技術在於其全場景抓包能力，通過內嵌的瀏覽器和 MITM 代理，能夠捕獲各類應用的網絡流量。其 AI 分析模組則基於多種分析模式，能夠自動識別和解釋請求，並生成詳細的報告。效能方面，該工具能夠處理大部分常見的 HTTP 請求，但在高流量情況下可能會出現延遲。選擇 Electron 作為框架使得應用具有良好的跨平台特性，但也可能導致應用體積較大。技術風險方面，依賴於外部 API 的穩定性，若 API 發生變更，可能會影響分析結果。整合方面，與主流工具鏈的兼容性良好，能夠輕鬆嵌入到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導。安裝過程順暢，但需要注意 CA 证书的安裝。文檔目前僅提供中文，可能對非中文使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 集成多種抓包方式，支持全場景應用。
> - AI 分析能力強大，能自動生成報告。
> - 跨平台支持，適合多種操作系統。

> [!danger] 缺點
> - 需要安裝 CA 证书，初次配置較繁瑣。
> - 在某些網路環境下可能會遇到 SSL 問題。
> - 對於大型流量的處理可能會有性能瓶頸。

> [!warning] 注意事項
> - 不支持非法获取或修改计算机数据的功能。
> - 需要安装 CA 证书才能抓取 HTTPS 流量。
> - 在某些网络环境下可能会遇到 SSL 证书问题。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的抓包功能，但主要針對特定協議，適合需要深入協議分析的用戶。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於自動化測試和安全審計，適合需要集成到 CI/CD 流程的團隊。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 針對數據同步和傳輸的工具，適合需要高效數據處理的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Fiddler | Fiddler 主要針對 HTTP/HTTPS 流量進行抓包，而 Anything Analyzer 則支持多種流量來源，包括桌面應用和移動設備。 | 如果你的團隊已經在使用 Fiddler 進行 HTTP 抓包，並且不需要多場景支持，則可選擇它。 | medium，因為需要重新學習界面和功能。 |
| Wireshark | Wireshark 是一款功能強大的網絡分析工具，但主要針對低層協議，對於高層應用協議的分析不如 Anything Analyzer 方便。 | 如果需要深入分析網絡層的數據包，Wireshark 是更合適的選擇。 | high，因為需要掌握不同的分析方法和工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **anything-analyzer** | **Fiddler** | **Wireshark** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Fiddler 主要針對 HTTP/HTTPS 流量進行抓包，而 Anything Analyzer 則支持多種流量來源，包括桌面應用和移動設備。 | Wireshark 是一款功能強大的網絡分析工具，但主要針對低層協議，對於高層應用協議的分析不如 Anything Analyzer 方便。 |
> | 遷移成本 | - | medium，因為需要重新學習界面和功能。 | high，因為需要掌握不同的分析方法和工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Fiddler 進行 HTTP 抓包 | 如果需要深入分析網絡層的數據包，Wireshark 是更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合小型團隊和個人開發者使用，能夠有效提升開發效率。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次安裝需要管理員權限，可能會造成安裝失敗
  - 解法：確保以管理員身份運行安裝程序
- [MEDIUM] 在某些網絡環境下可能會遇到 SSL 证书問題
  - 解法：檢查網絡設置或使用其他網絡環境
- [MEDIUM] 抓包過程中可能會因為流量過大導致性能下降
  - 解法：適當調整抓包範圍或過濾不必要的請求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 API 逆向 | 非常適合 | 集成多種抓包方式，能快速獲取 API 信息。 |
| 安全測試團隊進行漏洞掃描 | 適合 | 提供安全審計功能，能檢測常見漏洞。 |
| 大型企業進行網絡流量分析 | 普通 | 在高流量情況下可能會出現性能瓶頸。 |
| 個人開發者進行小型專案測試 | 非常適合 | 簡單易用，能快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠快速獲得 API 信息，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的第三方庫需定期更新以避免安全漏洞。

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
| Forks | 258 |
| Open Issues | 9 |
| Issue 解決率 | 44% (7 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 559 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Mouseww/anything-analyzer) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@ant-design/icons` `@modelcontextprotocol/sdk` `@vscode/sudo-prompt` `antd` `better-sqlite3` `electron-updater` `node-forge` `react` `react-dom` `react-markdown` `rehype-highlight` `remark-gfm` `uuid` `zod` `@types/better-sqlite3`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Mouseww](https://github.com/Mouseww) | 3 |

**最新版本**：v3.1.0 (2026-04-16)

> [!info]- Release Notes
> # Anything Analyzer v3.1.0
> 
> ## 新功能：暂停/恢复抓包
> 
> - **Pause → Resume 切换** — 点击 Pause 暂停抓包后，按钮自动变为 Resume，再次点击即可恢复抓包，无需重新开始会话
> - **MCP 工具支持** — 新增 `resume_capture` MCP tool，外部 AI Agent 可通过 MCP 控制暂停/恢复
> 
> ## 改进：LLM 连接错误诊断
> 
> 之前点击分析失败时只显示 `fetch failed`，用户无法判断原因。现在会根据错误类型给出具体的中文诊断信息：
> 
> | 错误场景 | 提示信息 |
> |---------|---------|
> | API 地址写错 | DNS 解析失败：无法解析 xxx。请检查 API 地址拼写是否正确 |
> | 本地中转服务未启动 | 连接被拒绝：xxx 未在监听。请确认该服务已启动 |
> | 网络不通 / 被墙 | 网络请求失败：无法连接到 xxx。常见原因：API 地址错误、需科学上网、本地服务未启动 |
> | 请求超时 | 连接超时：xxx 在 120 秒内未响应 |
> | SSL 证书问题 | SSL 证书错误：无法与 xxx 建立安全连接 |
> | 连接被重置 | 连接被重置：可能是代理不稳定或 API 限流 |
> 
> ## 下载
> 
> | 平台 | 文件 |
> |------|------|
> | Windows | `Anything-Analyzer-Setup-3.1.0.exe` |
> | macOS (Apple Silicon) | `Anything-Analyzer-3.1.0-arm64.dmg` |
> | macOS (Intel) | `Anything-Analyzer-3.1.0-x64.dmg` |
> | Linux | `Anything-Analyzer-3.1.0.AppImage` |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和討論。
**連結**：[文件](https://github.com/Mouseww/anything-analyzer)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-14 ~ 2026-04-17）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #13 from furkankoykiran/docs/readme-english

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/Mouseww/anything-analyzer/issues/16) | 窗口大小无法托业大小，浏览器的窗口。上下拖曳大小。 | 0 | 2 |
> | [#15](https://github.com/Mouseww/anything-analyzer/issues/15) | 请问能支持对一些电商平台注册账号的手机验证码协议进行分析吗？ | 0 | 1 |
> | [#12](https://github.com/Mouseww/anything-analyzer/issues/12) | Add English README for global audience | 0 | 2 |

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

相關概念：[[MCP Protocol]] · [[自動化測試]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

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
> const concepts = ["MCP Protocol","自動化測試","API 設計"];
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

- [[2026-04-17|2026-04-17]] — 再次上榜，1.0k stars
- [[2026-04-16|2026-04-16]] — 首次收錄，798 stars
