---
repo: lxf746/any-auto-register
url: https://github.com/lxf746/any-auto-register
owner: lxf746
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 982
stars_per_day: 246
forks: 492
open_issues: 13
created: 2026-03-18
pushed_at: 2026-03-20
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.0.3"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供多平台帳號自動註冊與管理的系統，支持插件擴展與多種郵箱服務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-26"
contributor_count: 0
engagement: "high"
issue_close_rate: 19
repo_size_kb: 586
readme_length: 4369
bus_factor: 0
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:982"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "any-auto-register"
  - "lxf746/any-auto-register"
  - "提供多平台帳號自動註冊與管理的系統，支持插件擴展與多種郵箱服務。"
---

# any-auto-register

**982** stars · **246** stars/天 · 建立 4 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/lxf746--any-auto-register");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.3`

> [!summary] 一句話摘要
> 提供多平台帳號自動註冊與管理的系統，支持插件擴展與多種郵箱服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (246 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要快速註冊多個帳號的開發者或測試人員。
> **一句話重點** 這個專案的靈活性和擴展性使其在自動化帳號註冊的領域中具有競爭力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/lxf746--any-auto-register");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "lxf746--any-auto-register" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到高效的自動註冊功能，值得一試。

> [!abstract] 核心創新
> 支持多平台帳號自動註冊與管理，並提供插件化擴展能力。

## 專案簡介

Any Auto Register 是一個多平台帳號自動註冊與管理系統，能夠透過 API 或無頭/有頭瀏覽器模式進行註冊。用戶可以選擇多種郵箱服務來接收驗證碼，並且系統內建代理池管理，能自動輪詢與禁用失效代理。這個工具的賣點在於其插件化設計，允許用戶為不同平台自定義操作，並且支持並發註冊，提升效率。後端使用 FastAPI 和 SQLite，前端則是基於 React 和 TypeScript，這樣的選擇讓整體架構輕量且高效。相較於傳統的手動註冊，這個系統能大幅減少時間成本，特別是在需要大量註冊帳號的情境下。

與其他類似工具相比，如 AlpinDale/parsync 或 Flowseal/tg-ws-proxy，Any Auto Register 提供了更靈活的插件擴展能力和多樣的郵箱服務選擇，適合需要快速註冊多個帳號的開發者或測試人員。使用者可以透過 SSE 實時查看註冊日誌，這在調試過程中非常有用。雖然目前仍在開發中，但其功能已經相當完整，適合中小型團隊進行試用。未來可能會加入更多的自動化功能，進一步提升使用體驗。

**技術棧**：`FastAPI` · `SQLite` · `React` · `TypeScript` · `Playwright`

## 重點功能

- 多平台支持 — 支持 Trae.ai、Tavily、Cursor、Kiro、ChatGPT 等平台，並可自定義插件擴展。
- 多郵箱服務 — 內建 MoeMail、Laoudo、DuckMail 等多種郵箱服務，方便接收驗證碼。
- 並發註冊 — 可配置並發數，提升註冊效率。
- 代理池管理 — 自動輪詢與禁用失效代理，確保註冊過程穩定。
- 實時日誌 — 使用 SSE 實時推送註冊日誌到前端，便於監控註冊狀態。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/lxf746/any-auto-register.git
```
2. 安裝後端依賴
```bash
pip install -r requirements.txt
```
3. 啟動服務
```bash
.venv/bin/python3 -m uvicorn main:app --port 8000
```

## 程式碼範例

```python
[
  "# 前置條件：安裝 Playwright 瀏覽器",
  "python3 -m playwright install chromium",
  "# 預期輸出：安裝 Chromium 瀏覽器以支援無頭模式"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 982 stars（246/天），forks 492（50.1%），顯示出強烈的社群關注。作者在 GitHub 上有其他開源專案，這表明他在這個領域有一定的經驗。這個工具解決了多平台帳號註冊的繁瑣過程，之前的工具多數無法支持多郵箱服務或插件擴展，使用者往往需要手動處理驗證碼，效率低下。最近的推廣活動和社群討論也可能促進了這個專案的曝光率。高達 50.1% 的 forks/stars 比率顯示出不少用戶在實際修改或擴展這個工具，這是社群活躍的指標。

## 適合誰使用

**目標受眾**：需要快速註冊多個帳號的開發者或測試人員。

> [!example] 使用場景
> - 測試工程師用它來快速註冊多個測試帳號，因為手動註冊耗時且容易出錯。
> - 開發者用它來自動化註冊過程，因為這樣能節省大量時間，特別是在進行 API 測試時。
> - 產品經理用它來管理多個平台的帳號，因為其插件化設計讓他們能輕鬆擴展功能。

## 架構分析

Any Auto Register 採用微服務架構，後端使用 FastAPI 提供 API 接口，前端則是基於 React 和 TypeScript。這樣的設計使得前後端分離，便於維護和擴展。資料存儲使用 SQLite，適合小型專案，未來可考慮切換到更強大的資料庫。

整體架構輕量，能快速部署，但在高並發情況下可能會成為瓶頸。選擇 Playwright 進行瀏覽器自動化，能夠提供更靈活的操作，但也增加了系統的複雜度。整合過程中，前端與後端的溝通需要良好的 API 設計，以避免未來的擴展困難。

## 技術深入分析

Any Auto Register 的核心技術機制是基於 FastAPI 的 RESTful API 設計，這使得後端能夠快速響應請求並處理多個註冊任務。使用 SQLite 作為資料庫，雖然在小型專案中表現良好，但在高並發情況下可能會遇到性能瓶頸。前端使用 React 和 TypeScript，這樣的選擇讓開發者能夠快速構建動態用戶界面。Playwright 被選為瀏覽器自動化工具，提供了靈活的操作能力，但也增加了系統的複雜度。設計上，選擇了插件化架構，這使得未來擴展新平台變得簡單，但也要求開發者具備一定的技術能力。整體而言，這個專案的設計考量了可擴展性與靈活性，但在實際使用中，對於依賴的穩定性和性能仍需進一步觀察。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和功能介紹，對新手友好。安裝過程相對順暢，但需注意環境要求。文件中有針對不同作業系統的安裝指導，適合各種使用者。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 支持多平台與郵箱服務，靈活性高。
> - 插件化設計，易於擴展功能。
> - 實時日誌功能，便於監控註冊狀態。

> [!danger] 缺點
> - 目前功能尚不完整，無頭模式尚未實現。
> - 依賴多個外部服務，可能影響穩定性。
> - 對於大型專案，SQLite 可能無法滿足需求。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 Node.js 18+。
> - 無頭瀏覽器模式尚未實現，功能有限。
> - 目前僅支持部分平台，其他平台需自行開發插件。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要針對檔案同步，無法進行帳號註冊自動化，適用場景不同。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 代理，無法提供多平台帳號註冊功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網路代理與流量轉發，無法提供帳號註冊功能。 | 如果你的需求是流量轉發而非帳號註冊，則應選擇此工具。 | low，因為功能範圍不同，無需遷移。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 針對特定平台的自動化工具，功能較為單一。 | 如果只需針對特定平台進行自動化，則此工具更為合適。 | medium，需重新調整使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **any-auto-register** | **Shadowbroker** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於網路代理與流量轉發，無法提供帳號註冊功能。 | 針對特定平台的自動化工具，功能較為單一。 |
> | 遷移成本 | - | low，因為功能範圍不同，無需遷移。 | medium，需重新調整使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是流量轉發而非帳號註冊，則應選擇此工具。 | 如果只需針對特定平台進行自動化，則此工具更為合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些平台上註冊時可能會遇到驗證碼失敗的問題
  - 解法：嘗試更換郵箱服務或使用本地解碼器
- [MEDIUM] 代理池管理可能會導致註冊失敗
  - 解法：手動禁用失效代理
- [low] 某些平台的插件尚未完全實現
  - 解法：使用已有的插件或等待更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速註冊多個帳號的測試團隊 | 非常適合 | 具備高效的並發註冊能力，能大幅減少時間成本。 |
| 小型開發團隊進行專案測試 | 適合 | 靈活的插件設計能滿足多樣化需求。 |
| 大型企業進行帳號管理 | 不適合 | SQLite 可能無法滿足高並發需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高效的自動註冊功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取郵箱服務和驗證碼，依賴的外部服務需自行評估安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lxf746--any-auto-register");
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
> const me = dv.page("Repos/lxf746--any-auto-register");
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
| Forks | 492 |
| Open Issues | 13 |
| Issue 解決率 | 19% (3 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-18 |
| Repo 大小 | 586 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lxf746/any-auto-register) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `sqlmodel` `curl_cffi` `requests` `playwright` `pydantic` `jwcrypto` `cbor2` `camoufox` `aiofiles` `pyinstaller`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 83
>     "TypeScript" : 14
>     "CSS" : 1
>     "JavaScript" : 1
> ```

**最新版本**：v1.0.3 (2026-03-20)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/lxf746/any-auto-register/compare/v1.0.2...v1.0.3

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交與討論。
**連結**：[文件](https://github.com/lxf746/any-auto-register)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-20）
> **活躍天數** 2 天 · **最新 commit** 定义code_pattern接口

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/lxf746/any-auto-register/issues/17) | GPT试了还是不行，另外临时邮箱后面是不是有办法收验证码呢，后续如要收有什么办法吗 | 0 | 1 |
> | [#16](https://github.com/lxf746/any-auto-register/issues/16) | 某gpt替代方案 | 0 | 1 |
> | [#15](https://github.com/lxf746/any-auto-register/issues/15) | chatgpt 好像不行了 | 0 | 0 |
> | [#13](https://github.com/lxf746/any-auto-register/issues/13) | GPT 注册 workid 获取失败 | 0 | 0 |
> | [#12](https://github.com/lxf746/any-auto-register/issues/12) | 可以支持下IP池 动态获取代理IP | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Any Auto Register
> 
> > ⚠️ **免责声明**：本项目仅供学习和研究使用，不得用于任何商业用途。使用本项目所产生的一切后果由使用者自行承担。
> 
> 多平台账号自动注册与管理系统，支持插件化扩展，内置 Web UI。
> 
> ## 功能特性
> 
> - **多平台支持**：Trae.ai、Tavily、Cursor、Kiro、ChatGPT、OpenBlockLabs，支持自定义插件扩展
> - **多邮箱服务**：MoeMail（自建）、Laoudo、DuckMail、Cloudflare Worker 自建邮箱
> - **多执行模式**：API 协议（无浏览器）、无头浏览器（待实现）、有头浏览器（待实现）（各平台按需支持）
> - **验证码服务**：YesCaptcha、2Captcha、本地 Solver（Camoufox）
> - **代理池管理**：自动轮询、成功率统计、自动禁用失效代理
> - **并发注册**：可配置并发数
> - **实时日志**：SSE 实时推送注册日志到前端
> - **平台扩展操作**：各平台可自定义操作（如 Kiro 账号切换、Trae Pro 升级链接生成）
> 
> ## 技术栈
> 
> | 层级 | 技术 |
> |------|------|
> | 后端 | FastAPI + SQLite（SQLModel）|
> | 前端 | React + TypeScript + Vite + TailwindCSS |
> | HTTP | curl_cffi（浏览器指纹伪装）|
> | 浏览器自动化 | Playwright / Camoufox |
> 
> ## 快速开始
> 
> ### 环境要求
> 
> - Python 3.11+
> - Node.js 18+
> 
> ### 安装
> 
> #### macOS / Linux
> 
> ```bash
> # 克隆项目
> git clone 
> cd account_manager
> 
> # 创建虚拟环境
> python3 -m venv .venv
> source .venv/bin/activate
> 
> # 安装后端依赖
> pip install -r requirements.txt
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
> git clone 
> cd account_manager
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
> ### 安装浏览器（可选，无头/有头浏览器模式需要）
> 
> ```bash
> # Playwright 浏览器
> python3 -m playwright install chromium
> 
> # Camoufox（用于本地 Turnstile Solver）
> python3 -m camoufox fetch
> ```
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
> 浏览器访问 `http://localhost:5173`
> 
> ### 开发模式（前端热更新）
> 
> ```bash
> cd frontend
> npm run dev
> # 访问 http://localhost:5173
> ```
> 
> ## 邮箱服务配置
> 
> 注册时需要选择一种邮箱服务用于接收验证码。
> 
> ### MoeMail（推荐）
> 
> 基于开源项目 [cloudflare_temp_email](https://github.com/dreamhunter2333/cloudflare_temp_email) 自建的临时邮箱服务，无需配置任何参数，系统自动注册临时账号并生成邮箱。
> 
> 在注册页选择 **MoeMail**，填写你部署的实例地址（默认使用公共实例）。
> 
> ### Laoudo
> 
> 使用固定的自有域名邮箱，稳定性最高，适合长期使用。
> 
> | 参数 | 说明 |
> |------|------|
> | 邮箱地址 | 完整邮箱地址，如 `user@example.com` |
> | Account ID | 邮箱账号 ID（在 Laoudo 面板查看）|
> | JWT Token | 登录后从浏览器 Cookie 或接口获取的认证 Token |
> 
> ### Cloudflare Worker 自建邮箱
> 
> 基于 [cloudflare_temp_email](https://github.com/dreamhunter2333/cloudflare_temp_email) 自行部署的邮箱服务，完全自主可控。
> 
> **部署步骤**：参考项目文档，部署 Cloudflare Worker + D1 数据库 + Email Routing。
> 
> | 参数 | 说明 |
> |------|------|
> | API URL | Worker 的后端 API 地址，如 `https://api.your-domain.com` |
> | Admin Token | 管理员密码，在 Worker 环境变量 `ADMIN_PASSWORDS` 中配置 |
> | 域名 | 收件邮箱的域名，如 `your-domain.com`（需配置 MX 记录指向 Cloudflare）|
> | Fingerprint | 可选，Worker 开启 fingerprint 验证时填写 |
> 
> ### DuckMail
> 
> 公共临时邮箱服务，无需配置，直接使用。部分地区需要代理。
> 
> ## 验证码服务配置
> 
> | 服务 | 说明 |
> |------|------|
> | YesCaptcha | 需填写 Client Key，在 [yescaptcha.com](https://yescaptcha.com) 注册获取 |
> | 本地 Solver | 使用 Camoufox 本地解码，需先执行 `python3 -m camoufox fetch` |
> 
> ## 项目结构
> 
> ```
> account_manager/
> ├── main.py                 # FastAPI 入口
> ├── api/                    # HTTP 接口层
> │   ├── accounts.py         # 账号 CRUD
> │   ├── tasks.py            # 注册任务（SSE 日志）
> │   ├── actions.py          # 平台操作（通用接口）
> │   ├── config.py           # 全局配置持久化
> │   └── proxies.py          # 代理管理
> ├── core/                   # 基础设施层
> │   ├── base_platform.py    # 平台基类
> │   ├── base_mailbox.py     # 邮箱服务基类 + 工厂方法
> │   ├── base_captcha.py     # 验证码服务基类
> │   ├── db.py               # 数据模型
> │   ├── proxy_pool.py       # 代理池
> │   ├── registry.py         # 平台插件注册表
> │   └── scheduler.py        # 定时任务
> ├── platforms/              # 平台插件层
> │   └── {platform}/
> │       ├── plugin.py       # 平台适配层
> │       ├── core.py         # 注册协议核心逻辑
> │       └── switch.py       # 账号切换逻辑
> ├── services/               # 后台服务
> │   ├── solver_manager.py   # Turnstile Solver 进程管理
> │   └── turnstile_solver/   # 本地 Camoufox Solver
> └── frontend/               # React 前端
> ```
> 
> ## 插件开发
> 
> 添加新平台只需在 `platforms/` 下新建目录，实现 `plugin.py`：
> 
> ```python
> from core.base_platform import BasePlatform, Account, AccountStatus, RegisterConfig
> from core.registry import register
> 
> @register
> class MyPlatform(BasePlatform):
>     name = "myplatform"
>     display_name = "My Platform"
>     version = "1.0.0"
>     supported_executors = ["protocol"]
> 
>     def register(self, email: str, password: str = None) -> Account:
>         # 用 self.mailbox.get_email() 获取邮箱
>         # 用 self.mailbox.wait_for_code() 收验证码
>         ...
> 
>     def check_valid(self, account: Account) -> bool:
>         ...
> ```
> 
> ## Star History
> 
> [](https://star-history.com/#lxf746/any-auto-register&Date)
> 
> ## License
> 
> MIT License — 仅供学习研究，禁止商业使用。

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[插件架構]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]]

[GitHub](https://github.com/lxf746/any-auto-register)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "lxf746--any-auto-register"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "lxf746--any-auto-register"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "lxf746--any-auto-register" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "lxf746--any-auto-register"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","插件架構"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "lxf746--any-auto-register" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/lxf746--any-auto-register");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lxf746--any-auto-register" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lxf746" AND file.name != "lxf746--any-auto-register"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lxf746--any-auto-register");
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
> const me = dv.page("Repos/lxf746--any-auto-register");
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
> const me = dv.page("Repos/lxf746--any-auto-register");
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
> const me = dv.page("Repos/lxf746--any-auto-register");
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
> const me = dv.page("Repos/lxf746--any-auto-register");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-23|2026-03-23]] — 首次收錄，982 stars
