---
repo: tiantianGPU/reg-factory
url: https://github.com/tiantianGPU/reg-factory
owner: tiantianGPU
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 478
stars_per_day: 80
forks: 232
open_issues: 0
created: 2026-06-01
pushed_at: 2026-06-07
first_seen: 2026-06-08
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: "1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-08
use_case: "自動化註冊多個平台帳號，並導出可用的 cookie。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-15"
contributor_count: 1
engagement: "high"
issue_close_rate: -1
repo_size_kb: 261
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-08"
star_history: "2026-06-08:478"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "reg-factory"
  - "tiantianGPU/reg-factory"
  - "自動化註冊多個平台帳號，並導出可用的 cookie。"
---

# reg-factory

**478** stars · **80** stars/天 · 建立 6 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/tiantianGPU--reg-factory");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `1.0`

> [!summary] 一句話摘要
> 自動化註冊多個平台帳號，並導出可用的 cookie。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (80 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要批量註冊帳號並繞過地區限制的開發者。
> **一句話重點** 這個專案展示了自動化註冊流程的潛力，能夠有效解決繁瑣的手動操作問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tiantianGPU--reg-factory");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "tiantianGPU--reg-factory" && p.status !== "archived")
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
> **結論** 花 5 小時學、3 小時整合，得到高效的帳號註冊工具，值得嘗試。

> [!abstract] 核心創新
> 提供了一個全自動的帳號註冊流水線，能夠有效繞過地區限制和驗證風控。

## 專案簡介

reg-factory 是一個全自動的帳號註冊流水線，主要用於批量註冊 Outlook 郵箱，然後利用這些郵箱在 ChatGPT、Grok 和 Claude 等平台上自動註冊帳號。這個流程的核心在於使用比特瀏覽器進行指紋隔離，並透過 Clash Verge 進行節點切換以繞過地區封鎖和 Cloudflare 的風控。使用者只需執行 `python run_full_flow.py` 指令，即可完成從郵箱註冊到平台帳號註冊的全過程。這個工具的賣點在於其高效的自動化能力，能夠節省大量手動操作的時間。技術上，這個專案依賴 Playwright、Requests 和 Aiohttp 等庫來實現網絡請求和自動化操作，並且需要安裝 BitBrowser 和 Clash Verge 來支持其功能。

相較於其他工具如 `basketikun/chatgpt2api`，reg-factory 提供了更完整的註冊鏈路，並且能夠自動處理手機驗證等繁瑣步驟。使用者可以在多個平台上進行註冊，並且能夠導出已註冊帳號的 cookie，方便後續使用。這個專案的社群活躍度高，且在短短 6 天內就累積了 478 個 stars 和 232 個 forks，顯示出其受歡迎程度。適合需要批量註冊帳號的開發者，特別是在需要繞過地區限制的情況下。使用者需注意，這個工具僅供學習和授權測試使用，並不應用於違法用途。

**技術棧**：`Python 3.10+` · `Playwright` · `Requests` · `Aiohttp` · `BitBrowser` · `Clash Verge`

## 重點功能

- 全自動註冊流程 — 從 Outlook 郵箱註冊到 ChatGPT、Grok 和 Claude 平台的帳號註冊，僅需一條指令。
- 支持手機驗證 — 自動處理手機驗證，避免手動輸入繁瑣的驗證碼。
- 導出可用 cookie — 註冊成功後自動導出可用的 cookie，方便後續使用。
- 節點切換功能 — 利用 Clash Verge 進行節點切換，繞過地區限制和 Cloudflare 的風控。
- 指紋隔離 — 使用比特瀏覽器進行指紋隔離，提升註冊成功率。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 安裝 Chromium 瀏覽器
```bash
playwright install chromium
```
3. 運行全流程註冊
```bash
python run_full_flow.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 478 stars（每天 80），forks 232（48.5%），顯示出極高的使用興趣。作者 tiantianGPU 之前可能有相關的開源經驗，這個專案解決了批量註冊帳號的痛點，特別是在需要通過 Cloudflare 的情況下。這個工具的出現，正好滿足了對於自動化註冊的需求，尤其是在當前許多平台對於新帳號的驗證越來越嚴格的背景下。這個專案的高 forks/stars 比率（48.5%）表明許多使用者不僅在觀望，還在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要批量註冊帳號並繞過地區限制的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動註冊多個 ChatGPT 帳號，因為手動註冊繁瑣且容易被封鎖。
> - 測試人員用它來批量創建測試帳號，因為這樣可以快速進行功能測試，節省時間。
> - 開發者用它來獲取多個平台的 API token，因為這樣可以在開發過程中快速獲取所需的憑證。

## 架構分析

這個專案採用模組化設計，將各個功能拆分為獨立的腳本，便於維護和擴展。資料流從用戶輸入郵箱開始，經過比特瀏覽器進行指紋隔離，然後通過 Clash Verge 切換節點，最終在指定平台上註冊帳號。選擇使用 Python 是因為其擁有豐富的庫支持和社群資源，這使得開發過程更加高效。這個架構的代價是需要額外安裝和配置比特瀏覽器和 Clash Verge，對於新手來說可能會有一定的學習曲線。擴展性方面，這個設計可以輕鬆添加新的平台支持，但在高並發註冊時可能會遇到 API 限流的問題。

## 技術深入分析

reg-factory 的核心技術機制在於其自動化註冊流程，使用 Python 語言搭配 Playwright 進行網頁操作，並利用比特瀏覽器進行指紋隔離，這樣可以有效提高註冊成功率。效能方面，這個工具能夠在短時間內批量註冊多個帳號，但在高並發情況下可能會遇到 API 限流的問題。設計上選擇 Python 是因為其生態系統豐富，能夠快速整合各種庫來實現功能。這個專案的依賴樹相對簡單，但需要注意的是，使用比特瀏覽器和 Clash Verge 會增加安裝和配置的複雜度。技術風險方面，若未來平台對於自動化註冊的限制加強，可能會影響這個工具的有效性。整合方面，這個工具可以與現有的 CI/CD pipeline 結合，但需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件詳細說明了安裝和使用流程，提供了清晰的範例。安裝過程相對順暢，但需要注意比特瀏覽器和 Clash Verge 的配置。整體上，對於有一定技術基礎的使用者來說，30 分鐘內能夠完成基本的設置和運行。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，節省時間和人力成本。
> - 能夠有效繞過地區限制和驗證風控。
> - 支持多平台註冊，靈活性強。

> [!danger] 缺點
> - 需要額外安裝和配置比特瀏覽器和 Clash Verge。
> - 僅供學習與授權測試使用，商業用途風險高。
> - 對新手來說學習曲線較陡。

> [!warning] 注意事項
> - 僅支援 Python 3.10+
> - 需要安裝比特瀏覽器和 Clash Verge，並保持運行狀態
> - 不支援 Windows 以外的操作系統
> - 僅供學習與授權測試使用，請勿用於商業用途

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [basketikun/chatgpt2api](https://github.com/basketikun/chatgpt2api) | 提供 ChatGPT 的 API 接口，但不支持批量註冊和手機驗證功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於帳號安全檢測，無法自動註冊帳號。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了一個自動化的代理管理工具，但不支持批量註冊功能。 | 如果你的需求主要是代理管理，而不是帳號註冊，則可以選擇這個工具。 | low，因為兩者的功能範疇不同，無需大量修改。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於提供 GPT-2 的 API 接口，無法自動註冊帳號。 | 如果你的需求是使用 GPT-2 的 API，而不需要註冊帳號，則可以選擇這個工具。 | medium，因為需要重新設計整個註冊流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **reg-factory** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供了一個自動化的代理管理工具，但不支持批量註冊功能。 | 專注於提供 GPT-2 的 API 接口，無法自動註冊帳號。 |
> | 遷移成本 | - | low，因為兩者的功能範疇不同，無需大量修改。 | medium，因為需要重新設計整個註冊流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是代理管理，而不是帳號註冊，則可以選擇這個工 | 如果你的需求是使用 GPT-2 的 API，而不需要註冊帳號 |

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

- **[HIGH]** 在高並發註冊時可能會遇到 API 限流問題
  - 解法：減少同時註冊的帳號數量，分批進行。
- [MEDIUM] 比特瀏覽器和 Clash Verge 的配置可能會導致初次使用者困惑
  - 解法：參考 README 中的詳細配置步驟。
- **[HIGH]** 某些平台可能會對自動化註冊進行封鎖
  - 解法：定期更新註冊流程和使用的代理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速創建多個測試帳號，支持開發過程中的測試需求。 |
| 大型企業的帳號管理系統 | 不適合 | 可能會因為高並發註冊而遭遇 API 限流，影響業務運行。 |
| 需要快速獲取多個平台 API token 的開發者 | 非常適合 | 能夠自動化整個註冊流程，節省時間。 |
| 個人開發者的側項目 | 適合 | 能夠快速試用多個平台的功能，降低開發成本。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的帳號註冊工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，但需要配置 API 密鑰，需謹慎管理。對於存取的敏感資料，建議使用環境變數來保護。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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
| Forks | 232 |
| Open Issues | 0 |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-01 |
| Repo 大小 | 261 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tiantianGPU/reg-factory) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `playwright` `requests` `aiohttp` `curl_cffi` `Appium-Python-Client` `selenium`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "PowerShell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tiantianGPU](https://github.com/tiantianGPU) | 27 |

**最新版本**：1.0 (2026-06-06)

> [!info]- Release Notes
> 1.0

## 社群與生態

**社群活躍度**：社群活躍，短時間內獲得大量 stars 和 forks。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-05 ~ 2026-06-07）
> **活躍天數** 3 天 · **最新 commit** fix: chatgpt onboarding age 字段卡 30s + birthday 适配 + 提速

## README 摘錄

> [!info]- 展開查看原文 README
> # 🏭 reg-factory
> 
> 
> ### ② Clash Verge（开启 API 权限）
> - 安装 Clash Verge 并导入你的机场订阅，选一个节点并开启「系统代理 / Tun 模式」。
>   - 注册 Grok 需要能过 Cloudflare 的干净节点；脚本会在订阅节点里自动逐个试探可用节点。
> - **设置 → External Controller**：开启外部控制器 API，并**设置一个 secret**。
>   - 记下控制面端口（Clash Verge 默认 `9097`，mihomo 内核默认 `9090`）。
>   - 记下混合代理端口（mixed-port，默认 `7897`）。
> - 把 secret 填进 `.env` 的 `CLASH_SECRET`（见下）。
> 
> 
> # 2) Codex OAuth 授权 → 同时建到 SUB2API + 推 CPA（带真 refresh_token）
> python oauth_codex.py --manual-phone --keep          # 遇 add-phone 手动填号 + 输 WhatsApp 码
> 
> 
> ### ② Codex OAuth 授权 → SUB2API + CPA（带 refresh_token）
> 用已存 cookie 重登账号，走 Codex CLI OAuth 换取**带 `refresh_token` 的正式凭据**，同时建到
> SUB2API（type=oauth）并推到 CPA。授权时若遇 OpenAI 的 **add-phone** 手机验证：
> - 默认走接码平台自动过号；
> - `--manual-phone`：**手动模式**，脚本停在输号页，由你在浏览器里自己填号 + 输验证码
>   （**建议用 WhatsApp 可接码的号段**，OpenAI 对普通虚拟号风控严）。
> ```bash
> python oauth_codex.py                            # 默认最新 cookie，自动接码
> python oauth_codex.py --manual-phone --keep      # 手动填号 + 输 WhatsApp 码（推荐先用这个试号）
> python oauth_codex.py --cookie cookies/chatgpt/full_xxx.json --skip-cpa
> ```
> > 🔜 add-phone 全自动接码版本（WhatsApp 接码）后续提供。
> 
> 
> ### ③.5 普通 ChatGPT 网页号 → chatgpt2api
> 普通网页号（非 codex/OAuth 三件套）单独走 chatgpt2api（basketikun/chatgpt2api）。注册成功时
> 顺手落 `tokens/chatgpt/c2a-*.json`；上传两种方式：
> ```bash
> 
> # 方式 A：注册时即时导入（推荐，需先配 CHATGPT2API_URL/KEY）
> python register_chatgpt.py --count 5 --import-c2a
> python run_full_flow.py --platforms chatgpt --import-c2a
> 
> 
> ### ⑤ Gmail 注册机 → Google One 授权 → SUB2API / CPA 🔜
> 后续将加入完整链路：**Gmail 自动注册机 → Google One 授权 → SUB2API / CPA 导入**，
> 覆盖账号注册、订阅授权与下游中转接入。
> 
> ---
> 
> 
> ### Outlook · Gmail · ChatGPT · Grok · Claude · Gemini · Google One 全自动注册/授权机
> 
> **自动批量注册 Outlook / Gmail 邮箱 → 平台注册 / 订阅授权 → 导出 cookie 或导入 SUB2API / CPA**
> 
>   
>   &nbsp;
>   
>   &nbsp;
>   
>   &nbsp;
>   
>   &nbsp;
>   
>   &nbsp;
>   
>   &nbsp;
>   
> 
>   
> 
>   
>   
>   
>   
>   
> 
> ---
> 
> **reg-factory** 是一套全自动注册流水线：先自注册 **Outlook** 邮箱，再用同一邮箱在
> **ChatGPT / Grok / Claude** 上批量注册账号，并导出可直登的 cookie。底层用
> **比特浏览器(BitBrowser)** 做指纹隔离、**Clash Verge** 做节点切换绕区域封锁与 Cloudflare 风控、
> 接码/打码平台过手机号与验证码。
> 
> > 🔜 即将上新：**Gmail 注册机 → Google One 授权 → SUB2API / CPA 导入**完整链路。
> 
> > ⚠️ 仅供学习与授权测试使用。所有密钥通过环境变量提供，仓库内不含任何明文凭据。
> 
> ---
> 
> 
> ## 1. 前置条件
> 
> 
> ### ① 比特浏览器 BitBrowser
> - 安装并**启动**比特浏览器客户端，确保本地 API 在线（默认 `http://127.0.0.1:54345`）。
> - 客户端要保持运行——脚本通过该 API 创建/打开/关闭浏览器窗口。
> 
> 
> ### ③ Python
> - Python 3.10+。
> 
> 
> ### ④ 注册 Gmail / 谷歌邮箱时的 Android 环境（按需）
> - BlueStacks：用于运行 Gmail Android App，建议使用固定版本；Release 包可选择附带安装器。
> - Android Studio 或 Android SDK Platform Tools：至少需要 `adb` 可用。只安装 `platform-tools` 也可以，不强制完整安装 Android Studio。
> - Node.js 20+、Appium 2.x、Appium UiAutomator2 driver：用于驱动 Android UI 自动化。
> - 模拟器内需要安装 Gmail App，并开启 BlueStacks ADB，默认连接地址为 `127.0.0.1:5675`。
> - 相关脚本在 `gmail_android/scripts/` 下；小体积 zip 只包含代码和安装脚本，不包含 BlueStacks / Android SDK / Node / Appium 等大二进制。
> 
> ---
> 
> 
> ## 2. 安装
> 
> ```bash
> pip install -r requirements.txt
> playwright install chromium
> ```
> 
> ---
> 
> 
> ## 3. 配置（密钥走环境变量）
> 
> 复制模板并填写：
> 
> ```bash
> cp .env.example .env
> ```
> 
> `.env` 已被 `.gitignore` 忽略。真实的进程环境变量优先于 `.env`。
> 
> | 环境变量 | 说明 | 必填 |
> |---|---|---|
> | `CLASH_SECRET` | Clash Verge External Controller 的 secret | 走节点时必填 |
> | `CLASH_API` | Clash 控制面地址（默认 `http://127.0.0.1:9097`） | 否 |
> | `CLASH_PROXY` | Clash 混合端口代理（默认 `http://127.0.0.1:7897`） | 否 |
> | `CLASH_GROUP` | 切换出口的代理组名（默认 `GLOBAL`） | 否 |
> | `BITBROWSER_API` | 比特浏览器本地 API（默认 `http://127.0.0.1:54345`） | 否 |
> | `SMS_TOKEN` | 接码平台 firefox.fun 的 token | 需手机号时必填 |
> | `HERO_SMS_API_KEY` | 备用接码 hero-sms.com 的 api_key | 否 |
> | `CAPSOLVER_API_KEY` | CapSolver 打码 key | 按需 |
> | `EZCAPTCHA_API_KEY` | EZ-Captcha 打码 key | 按需 |
> | `OUTLOOK_CARD` | 闪客云邮箱卡密（接口批量取号用） | 用接口取号时填 |
> | `OUTLOOK_PROXIES` | Outlook 自注册住宅代理池，`user:pass@host:port`，换行/逗号分隔 | 否 |
> | `MAIL_*` | 备用域名邮箱（一般用不到） | 否 |
> 
> **Codex 订阅授权 / 标准 token 上传（按需启用，留空自动跳过）**
> 
> | 环境变量 | 说明 | 必填 |
> |---|---|---|
> | `BAXI_API` | Codex/Plus 订阅地址（默认 `https://baxigpt.com/`） | 开通 Plus 时 |
> | `BAXI_CARDS` | 激活码池（`BX-XXXXXXXX`，逗号/换行分隔，可多个） | 开通 Plus 时 |
> | `CLAUDE_SUB_URL` / `GROK_SUB_URL` | Claude / SuperGrok 订阅入口（CDK 激活流程 🔜 敬请期待） | 否 |
> | `CLAUDE_SUB_CDK` / `GROK_SUB_CDK` | Claude / SuperGrok 激活码 CDK 池（预留） | 否 |
> | `CPA_URL` / `CPA_MGMT_KEY` | CPA 管理接口（codex 授权文件导入） | 用 CPA 时 |
> | `SUB2API_URL` / `SUB2API_EMAIL` / `SUB2API_PASSWORD` | SUB2API 管理接口登录 | 用 SUB2API 时 |
> | `SUB2API_GROUP` | SUB2API 目标分组名（默认 `codex`，需后台先建好） | 否 |
> | `WEBCHAT2API_URL` / `WEBCHAT2API_KEY` | webchat2api（Grok sso 注入） | 用 Grok 时 |
> | `CHATGPT2API_URL` / `CHATGPT2API_KEY` | chatgpt2api 普通网页号导入（`POST /api/accounts`，Bearer admin key） | 用 `--import-c2a` 时 |
> | `SMS_PROJECT_ID_OPENAI` / `HERO_SMS_SERVICE_OPENAI` | ChatGPT add-phone 接码服务号 | 自动接码时 |
> 
> ---
> 
> 
> ## 4. 运行
> 
> 
> ### 端到端（注册邮箱 → 三平台注册）
> ```bash
> python run_full_flow.py                       # 注册 1 个 outlook 号后在 claude 上注册
> python run_full_flow.py --platforms claude chatgpt grok
> python run_full_flow.py --platforms chatgpt --import-c2a   # chatgpt 注册成功后即时导入 chatgpt2api
> python run_full_flow.py --skip-email --email a@outlook.com --password xxx
> python run_full_flow.py --dry-run             # 只打印将执行的命令
> ```
> > 自动注入 `HTTP(S)_PROXY` 与 `CLASH_API/SECRET/GROUP` 给子进程。
> > `--import-c2a` 逐层透传到 `register_chatgpt.py`，只对 chatgpt 平台生效，需先配 `CHATGPT2API_URL/KEY`。
> 
> 
> ### 仅三平台注册（已有邮箱池 emails.txt）
> ```bash
> python register_three_platforms.py --from-pool
> python register_three_platforms.py --email a@outlook.com --password xxx --token 
> python register_three_platforms.py --loop     # 常驻消费池
> ```
> 并行流水线模式下建议先起共享取码服务（避免三窗口并发登录同一邮箱）：
> ```bash
> python mailbox_broker.py --port 8765
> ```
> 
> 
> ### 仅养号（持续自注册 Outlook，写入 _outlook_pool/ 与 emails.txt）
> ```bash
> python outlook_reg_loop.py                     # 循环
> python outlook_reg_loop.py --count 20          # 注册 20 个后退出
> ```
> 
> 
> ### 导出已注册账号 cookie（供直登扩展使用）
> ```bash
> python export_accounts.py                      # 全部平台
> python export_accounts.py claude chatgpt       # 指定平台
> ```
> 
> 
> ### 批量解锁被锁的 Outlook 账号
> BitBrowser + Playwright,复用注册同款 PX 按压验证逻辑;按结果分类输出到
> `unlock_results/`(`unlocked_*` 成功 / `needs_phone_*` 需短信 / `failed_*` 失败)。
> 打码 key 走环境变量 `EZCAPTCHA_API_KEY`。
> ```bash
> python unlock_outlook.py                                       # 自动找最新的 locked 文件
> python unlock_outlook.py --input outlook_accounts/accounts.txt # 指定账号文件
> python unlock_outlook.py --input emails_locked.txt --concurrency 2
> python unlock_outlook.py --input accounts.txt --proxy-file proxies.txt
> ```
> > 输入每行 `email----password`（可带额外字段）。解锁后再跑下面的 token 提取。
> 
> 
> ### 提取 Outlook 的 Graph OAuth refresh_token
> 纯 `requests` 模拟 OAuth2 授权码流程（免浏览器），用账号密码换取
> Microsoft Graph 的 `refresh_token`，输出 `email----password----refresh_token----client_id`，
> 结果存到 `outlook_accounts/graph_tokens_.txt`。
> ```bash
> python extract_graph_tokens.py                                   # 自动扫 unlock_results/，跳过已提取
> python extract_graph_tokens.py outlook_accounts/accounts.txt     # 指定账号文件
> python extract_graph_tokens.py --email a@outlook.com --password xxx
> python extract_graph_tokens.py accounts.txt --concurrency 10     # 并发数(默认 5)
> ```
> > 走系统代理（Clash），避免 `account.live.com` 限流；账号文件每行 `email----password----...`。
> 
> 
> ### Clash 节点自检
> ```bash
> python -m common.proxy_switch list             # 列出 GLOBAL 组节点
> python _clash_verge.py ping                    # 控制面连通性
> ```
> 
> ---
> 
> ---
> 
> 
> ## Gmail Android / Appium 本地注册包
> 
> Gmail Android 模块位于 `gmail_android/`。它用于在本机 BlueStacks + Appium 环境里驱动 Gmail Android 注册流程，并把 Android 环境安装脚本一起打包，方便后续作为 GitHub Release 附件分发。
> 
> 安全边界：
> - 默认停在手机/SMS/CAPTCHA 或 Google 额外安全验证页，由人工完成。
> - `--resume-after-phone` 用于人工验证完成后续跑。
> - `--accept-terms` 只在操作者明确同意 Google Privacy and Terms 后使用。
> - `sms_provider.py` 只提供环境变量驱动的 provider 骨架，后续合并内部合规接码流程时复用；当前不默认接入 Gmail 安全验证自动化。
> 
> 
> ### GitHub Release 安装包
> 
> Release 上传建议：
> 
> ```text
> gmail-android-local-with-bluestacks.zip
> ```
> 
> 包内结构：
> 
> ```text
> gmail_android/
>   gmail_register_local.py
>   appium_api.py
>   config.py
>   sms_provider.py
>   .env.example
>   requirements.txt
>   scripts/
>     install_all_windows.ps1
>     install_bluestacks.ps1
>     install_windows.ps1
>     start_appium.ps1
>     check_env.ps1
>     run_gmail_register.ps1
>   offline/
>     bluestacks/
>       BlueStacksInstaller_*.exe   # 可选；推荐固定版本安装器
> ```
> 
> 当前脚本支持 BlueStacks 直接安装版：把固定版本 BlueStacks 安装器放入 `gmail_android/offline/bluestacks/`，用户解压后运行：
> 
> ```powe

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[網絡安全]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/tiantianGPU/reg-factory)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "tiantianGPU--reg-factory"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "tiantianGPU--reg-factory"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "tiantianGPU--reg-factory" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "tiantianGPU--reg-factory"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","網絡安全"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tiantianGPU--reg-factory" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tiantianGPU--reg-factory");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tiantianGPU--reg-factory" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tiantianGPU" AND file.name != "tiantianGPU--reg-factory"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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
> const me = dv.page("Repos/tiantianGPU--reg-factory");
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

> **2026-06-08** — 首次收錄
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

- [[2026-06-08|2026-06-08]] — 首次收錄，478 stars
