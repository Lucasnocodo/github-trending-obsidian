---
repo: asz798838958/aBaiAutoplus
url: https://github.com/asz798838958/aBaiAutoplus
owner: asz798838958
owner_type: User
language: Python
license: AGPL-3.0
description: "多平台 AI 账号自动注册与管理 · 协议化付款一键开通 ChatGPT Plus"
homepage: ""
stars: 1401
stars_per_day: 467
forks: 657
open_issues: 4
created: 2026-05-31
pushed_at: 2026-06-02
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
use_case: "提供多平台 AI 账号自动注册与管理，支持协议化付款一键开通 ChatGPT Plus。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-07"
contributor_count: 1
engagement: "high"
issue_close_rate: 33
repo_size_kb: 2966
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-02"
star_history: "2026-06-02:652,2026-06-02:660,2026-06-03:1049,2026-06-03:1057,2026-06-04:1398,2026-06-04:1401"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "aBaiAutoplus"
  - "asz798838958/aBaiAutoplus"
  - "提供多平台 AI 账号自动注册与管理，支持协议化付款一键开通 ChatGPT Plus。"
---

# aBaiAutoplus

**1.4k** stars · **467** stars/天 · 建立 3 天前 · Python · AGPL-3.0

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

`個人專案`

> [!summary] 一句話摘要
> 提供多平台 AI 账号自动注册与管理，支持协议化付款一键开通 ChatGPT Plus。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (467 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要快速註冊和管理多個 AI 账号的開發者或團隊，特別是在印尼市場。
> **一句話重點** 這個專案的最大優勢在於其自動化的註冊和付款流程，特別適合需要快速註冊多個 AI 账号的開發者。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的多平台註冊和管理功能，值得投入。

> [!abstract] 核心創新
> 支持印尼 GoPay 协议化付款，自动完成 ChatGPT Plus 订阅的全链路。

## 專案簡介

aBaiAutoplus 是一個多平台的 AI 账号自动注册与管理工具，主要功能是通过协议化付款一键开通 ChatGPT Plus。用户可以选择 PayPal 或 GoPay 进行付款，系统会自动处理注册和付款流程。具体来说，用户输入所需的 ChatGPT 账号信息，系统会通过调用相应的 API 生成付款链接，并使用浏览器自动化工具完成支付。该工具支持多种邮箱服务和接码服务，确保用户能够顺利接收验证码并完成注册。其一句话卖点是：通过自动化流程，用户可以快速注册和管理多个 AI 账号，节省大量时间和精力。

技术上，后端使用 FastAPI 和 SQLite，前端则是 React 和 TypeScript，支持无头和有头浏览器模式，确保灵活性和扩展性。相较于其他工具，如 lxf746/any-auto-register，该项目在支付方式和接码渠道上提供了更多选择，特别是 GoPay 的支持，使其在印尼市场更具竞争力。虽然功能丰富，但用户需要注意配置环境变量和 API 密钥，确保系统正常运行。该项目适合需要批量注册 AI 账号的开发者或团队，尤其是在需要快速切换支付方式的场景下。未来可能会进一步扩展支持的支付渠道和平台，增强用户体验。

**技術棧**：`FastAPI` · `SQLite` · `React` · `TypeScript` · `Playwright`

## 重點功能

- 多平台支持 — 支持 ChatGPT、Cursor、Kiro 等多個平台的自動註冊。
- 協議化付款 — 支持 PayPal 和 GoPay 進行自動付款，簡化支付流程。
- 接碼服務擴展 — 支持多種接碼渠道，如 SMS-Activate 和 HeroSMS，確保註冊過程順利。
- 實時日誌 — 提供 SSE 實時推送註冊日誌，方便用戶追蹤註冊進度。
- 註冊成功率儀表盤 — 按平台和天數統計註冊成功率，幫助用戶分析和優化註冊策略。

## 快速開始

1. 克隆项目
```bash
git clone https://github.com/asz798838958/aBaiAutoplus.git
```
2. 创建虚拟环境并激活
```bash
python3 -m venv .venv && source .venv/bin/activate
```
3. 安装后端依赖
```bash
pip install -r requirements.txt
```
4. 构建前端
```bash
cd frontend && npm install && npm run build
```
5. 启动后端服务
```bash
.venv/bin/python3 -m uvicorn main:app --port 8000
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 FastAPI 和相關依賴",
  "指令": "uvicorn main:app --host 0.0.0.0 --port 8000",
  "預期輸出": "應用運行在 http://localhost:8000"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 1401 stars（467/天），forks 657（46.9%），顯示出強烈的社群參與度。作者 asz798838958 之前在開源社區活躍，這個專案解決了多平台 AI 账号管理的痛點，特別是支付流程的自動化。該專案的推出正值 AI 服務需求上升的時期，吸引了大量開發者關注。高 forks/stars 比率顯示許多人在實際修改和使用這個工具，反映出其實用性和需求。

## 適合誰使用

**目標受眾**：需要快速註冊和管理多個 AI 账号的開發者或團隊，特別是在印尼市場。

> [!example] 使用場景
> - 後端工程師用它來批量註冊 ChatGPT 账号，因為手動註冊耗時且容易出錯。
> - 產品經理用它來快速測試不同平台的 AI 服務，因為它支持多平台自動化註冊和付款。
> - 獨立開發者用它來管理多個 AI 账号，因為它提供了便捷的付款選擇和自動化流程。

## 架構分析

aBaiAutoplus 的架構設計以 FastAPI 為後端框架，搭配 SQLite 作為資料庫，確保輕量且易於部署。前端使用 React 和 TypeScript，提供良好的用戶體驗。系統支持無頭和有頭瀏覽器模式，利用 Playwright 進行自動化操作。

這樣的設計使得用戶可以靈活選擇執行模式，適應不同的使用場景。選擇 FastAPI 是因為其高性能和簡單的 API 設計，這對於需要快速響應的註冊流程至關重要。整體架構的擴展性良好，未來可以添加更多支付方式或平台支持，但在高並發情況下可能需要進一步優化資料庫性能。

## 技術深入分析

aBaiAutoplus 的核心技術機制是利用 FastAPI 提供高效的 RESTful API，並結合 SQLite 作為資料存儲，確保資料的持久性和快速存取。前端使用 React 和 TypeScript，提供動態的用戶界面，並通過 Vite 加速開發流程。系統的設計考慮到多平台支持，通過插件化架構實現擴展性，讓用戶可以根據需要添加新的平台或支付方式。效能方面，系統能夠處理多個並發註冊請求，但在高流量情況下可能需要進一步優化資料庫查詢效率。選擇 Playwright 進行瀏覽器自動化是因為其強大的功能和良好的文檔支持，這使得開發者能夠快速實現複雜的自動化任務。整體來看，該專案在設計上考慮到了用戶的實際需求，並提供了靈活的配置選項，但在使用過程中仍需注意 API 密钥的管理和安全性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了豐富的安裝和使用範例。安裝過程相對順暢，但需要注意環境變數的配置。文件中有針對不同操作系統的安裝指導，對於新手來說，花 30 分鐘可以順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多平台註冊，滿足不同用戶需求。
> - 自動化付款流程，節省時間和精力。
> - 靈活的接碼服務選擇，確保註冊成功率。

> [!danger] 缺點
> - 需要配置多個第三方 API 密钥，增加使用門檻。
> - Docker 部署需要額外的網路配置，對新手不友好。
> - 在高並發情況下可能面臨性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 Node.js 18+
> - 需要配置第三方 API 密钥，否則無法正常運行
> - Docker 部署需要額外配置網路和端口

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [lxf746/any-auto-register](https://github.com/lxf746/any-auto-register) | 本專案在支付方式上提供了更多選擇，特別是 GoPay 的支持，使其在印尼市場更具競爭力。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 此工具專注於代理管理和自動化，而 aBaiAutoplus 更加專注於多平台的註冊和付款流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [lxf746/any-auto-register](https://github.com/lxf746/any-auto-register) | 使用相似的自動註冊框架，但不支持 GoPay 付款，僅限於 PayPal。 | 如果只需要簡單的註冊功能且不涉及印尼市場，這個工具更為簡單。 | medium，因為需要重新配置支付流程和接碼服務。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理管理和自動化，適合需要高代理使用率的場景。 | 如果你的主要需求是代理管理而非多平台註冊，這個工具會更合適。 | low，因為主要功能不同，遷移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aBaiAutoplus** | **any-auto-register** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用相似的自動註冊框架，但不支持 GoPay 付款，僅限於 PayPal。 | 專注於代理管理和自動化，適合需要高代理使用率的場景。 |
> | 遷移成本 | - | medium，因為需要重新配置支付流程和接碼服務。 | low，因為主要功能不同，遷移成本低。 |
> | 適用場景 | 主要場景 | 如果只需要簡單的註冊功能且不涉及印尼市場，這個工具更為簡單。 | 如果你的主要需求是代理管理而非多平台註冊，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行測試和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發註冊時，可能會遇到資料庫鎖定問題
  - 解法：減少同時註冊的數量，或優化資料庫查詢
- [MEDIUM] GoPay 付款流程中可能出現 API 限制
  - 解法：確保 API 密鑰的有效性，並檢查 GoPay 的使用條款
- [MEDIUM] 部分接碼服務可能會不穩定
  - 解法：使用多個接碼服務進行備援

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速註冊 10 個以上的 ChatGPT 账号的開發團隊 | 非常適合 | 自動化流程大幅提高註冊效率。 |
| 小型創業公司需要管理少量 AI 账号 | 適合 | 雖然功能強大，但對於少量帳號管理可能過於複雜。 |
| 需要在印尼市場進行支付的開發者 | 非常適合 | GoPay 的支持使其在當地市場具有競爭力。 |
| 希望使用簡單的註冊工具的個人用戶 | 不適合 | 功能過於複雜，對於個人用戶來說不必要。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的多平台註冊和管理功能，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具本身不需要高權限，但需要配置多個第三方 API 密钥，需注意密钥的安全管理。對於使用者的敏感資料有一定的存取風險，建議在安全的環境中運行。

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
| Forks | 657 |
| Open Issues | 4 |
| Issue 解決率 | 33% (2 closed) |
| 最後推送 | 2026-06-02 |
| 建立日期 | 2026-05-31 |
| Repo 大小 | 2.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/asz798838958/aBaiAutoplus) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `sqlmodel` `curl_cffi` `requests` `playwright` `pydantic` `jwcrypto` `cbor2` `camoufox` `aiofiles` `patchright` `quart` `rich` `pyinstaller`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 52
>     "HTML" : 41
>     "TypeScript" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@asz798838958](https://github.com/asz798838958) | 12 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和問題回覆。
**連結**：[文件](https://github.com/asz798838958/aBaiAutoplus#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31 ~ 2026-06-02）
> **活躍天數** 3 天 · **最新 commit** 更新gopay协议全流程

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
>   ChatGPT plus的AI 平台账号自动注册与管理
>   协议 / 浏览器双模式 · PayPal浏览器注册+内置 GoPay 协议付款 ChatGPT Plus · Mac / Windows 桌面版一键启动
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
> - **多邮箱服务**：MoeMail（自建）、Laoudo、DuckMail、Testmail、Cloudflare Worker 自建邮箱、Freemail、TempMail.lol、Temp-Mail Web、DuckDuckGo Email
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
> | ChatGPT       |    ✅    |     ✅     |  ✅   | Plus 支付链接 / PayPal 结账  |
> | Cursor        |    ✅    |     ✅     |  ✅   | 需手机验证                   |
> | Kiro          |    ✅    |     ✅     |  ✅   | 支持账号切换                 |
> | Trae.ai       |    ✅    |     ✅     |  ✅   | Pro 升级链接生成             |
> | Grok          |    ✅    |     ✅     |  ✅   |                              |
> | Windsurf      |    ✅    |     ✅     |  ✅   | Trial 链接生成               |
> | Tavily        |    ✅    |     ✅     |  ✅   |                              |
> | Blink         |    ✅    |     ✅     |  ✅   |                              |
> | Cerebras      |    ✅    |     ✅     |  ✅   |                              |
> | OpenBlockLabs |    ✅    |     ✅     |  ✅   |                              |
> | GoPay         |    ✅    |     —      |  —    | 印尼 GoPay，手机 + PIN，付款 Plus |
> | Anything      |    ✅    |     ✅     |  —    | 通用适配器，配置即接入新平台 |
> 
> > 各平台实际支持的执行器以插件 `supported_executors` 声明为准，可在 Web UI「平台能力」页查看与覆盖。
> 
> 
> ## 界面预览
> 
> > 📸 _截图将随版本迭代持续更新。_
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
> 3. **协议** — 用 GoPay 账号调用 `GoPayPayment.pay(midtrans_url, account)` 完成 14 步 Midtrans 

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[多租戶]]

相關專案：[[lxf746--any-auto-register|lxf746/any-auto-register]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
> const concepts = ["自動化","API 設計","多租戶"];
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

- [[2026-06-04|2026-06-04]] — 再次上榜，1.4k stars
- [[2026-06-03|2026-06-03]] — 再次上榜，1.0k stars
- [[2026-06-02|2026-06-02]] — 首次收錄，652 stars
