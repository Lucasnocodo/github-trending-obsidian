---
repo: MayersScott/rkn-block-checker
url: https://github.com/MayersScott/rkn-block-checker
owner: MayersScott
owner_type: User
language: Python
license: MIT
description: "Diagnose RKN/TSPU internet blocks layer by layer (DNS, TCP, TLS, HTTP)"
homepage: ""
stars: 1262
stars_per_day: 84
forks: 55
open_issues: 2
created: 2026-05-03
pushed_at: 2026-05-09
first_seen: 2026-05-09
week: "2026-W19"
month: "2026-05"
category: "CLI 工具"
subcategory: "網路診斷"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-09
use_case: "診斷 RKN/TSPU 網路封鎖，逐層分析問題來源。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-17"
contributor_count: 3
engagement: "low"
issue_close_rate: 71
repo_size_kb: 116
readme_length: 10000
bus_factor: 1
last_release_days: 10
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-09"
star_history: "2026-05-09:796,2026-05-09:800,2026-05-10:969,2026-05-10:971,2026-05-11:1062,2026-05-12:1100,2026-05-13:1149,2026-05-14:1175,2026-05-15:1192,2026-05-16:1223,2026-05-17:1235,2026-05-18:1248,2026-05-19:1262"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
  - "topic/censorship"
  - "topic/cli"
  - "topic/dns"
  - "topic/dpi"
  - "topic/network_diagnostics"
aliases:
  - "rkn-block-checker"
  - "MayersScott/rkn-block-checker"
  - "診斷 RKN/TSPU 網路封鎖，逐層分析問題來源。"
---

# rkn-block-checker

**1.3k** stars · **84** stars/天 · 建立 15 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/MayersScott--rkn-block-checker");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.5.0` `easy-install`

`censorship` `cli` `dns` `dpi` `network-diagnostics` `networking` `python` `rkn` `tls` `tspu`

> [!summary] 一句話摘要
> 診斷 RKN/TSPU 網路封鎖，逐層分析問題來源。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (84 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要了解 RKN/TSPU 網路封鎖情況的技術用戶和網路工程師。
> **一句話重點** 這個專案不僅能檢查網站是否可訪問，更能詳細分析封鎖的具體原因，對於技術用戶來說非常有價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路診斷" && p.file.name !== "MayersScott--rkn-block-checker" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路診斷 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到詳細的網路診斷，值得。

> [!abstract] 核心創新
> 這個專案提供了逐層診斷網路封鎖的能力，能夠精確識別封鎖類型。

## 專案簡介

這個工具的核心機制是透過逐層檢查 DNS、TCP、TLS 和 HTTP 協議，來判斷當前網路連接是否受到 RKN/TSPU 的封鎖，以及封鎖的具體類型。使用者只需執行 `rkn-check`，工具會自動探測一組預設網站，並根據每一層的檢查結果報告問題所在。這種設計讓使用者能夠更清楚地了解連接問題的根源，而不僅僅是「無法訪問該網站」。技術上，這個工具使用 Python 實作，依賴 `requests` 套件進行網路請求，並且支持 Docker 部署，方便在不同環境中使用。相比於其他封鎖檢測工具，這個工具提供了更細緻的診斷，能夠分辨出 DNS 污染、TCP 重置、TLS DPI 和 HTTP 停止頁等不同的封鎖方式，這在面對複雜的網路環境時尤為重要。

使用者可以根據需要自定義檢查的網站列表，並且支持 JSON 輸出以便於後續分析。這些特性使得它在面對網路審查時，能夠提供更具體的應對策略。使用者在使用過程中可能會遇到 DNS 和 TLS 的檢查結果不一致的情況，這需要進一步的手動檢查來確認問題。整體來說，這是一個針對特定需求的工具，適合需要了解網路封鎖情況的技術用戶。

**技術棧**：`Python 3.10` · `requests>=2.31`

## 重點功能

- 逐層檢查 — 檢查 DNS、TCP、TLS 和 HTTP，報告具體的封鎖類型。
- 自動探測 — 內建網站列表，無需配置即可開始檢查。
- 自定義目標 — 支持使用者自定義檢查的網站列表，方便靈活應用。
- JSON 輸出 — 提供機器可讀的 JSON 格式輸出，便於後續分析。
- 多線程檢查 — 支持並行檢查，提升檢查效率。

## 快速開始

1. 安裝 rkn-block-checker
```bash
pip install rkn-block-checker
```
2. 執行檢查
```bash
rkn-check
```
3. 檢查單一 URL
```bash
rkn-check --url https://example.com
```

## 程式碼範例

```python
# 前置條件（安裝 rkn-block-checker）
# 執行檢查
rkn-check
# 預期輸出（顯示檢查結果）
======================================================================
  RKN Block Checker
======================================================================
  IP:       95.165.xxx.xxx
  ISP:      AS12389 Rostelecom
  Location: Moscow, Moscow, RU
----------------------------------------------------------------------

Whitelist (should always work)
  name          verdict                    TCP     TLS     PLT  status
  --------------------------------------------------------------------
  gosuslugi     ✓ OK                      18ms    42ms   380ms  200
  ...
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內已累積 1262 stars（每天 84），forks 55（4.4%），顯示出穩定的增長趨勢。這個專案的作者 MayersScott 具備相關經驗，並針對網路封鎖問題提出了一個具體的解決方案，填補了現有工具在診斷層面上的空白。沒有其他工具能夠如此細緻地分析每一層的封鎖情況，這使得它在特定社群中獲得了關注。社群對於網路審查的需求持續上升，這也促進了該工具的使用。

## 適合誰使用

**目標受眾**：需要了解 RKN/TSPU 網路封鎖情況的技術用戶和網路工程師。

> [!example] 使用場景
> - 網路工程師用它來檢查公司內部網路是否受 RKN 封鎖，因為這能幫助他們快速定位問題並採取措施。
> - 自由職業者用它來確保自己的 VPN 服務在特定地區不會被封鎖，因為這樣可以避免工作中斷。
> - 研究人員用它來分析特定網站在不同地區的可訪問性，因為這能提供有價值的數據支持其研究。
> - 普通用戶用它來檢查自己在家中網路的訪問狀況，因為這能幫助他們了解是否受到 ISP 的限制。

## 架構分析

這個工具採用 CLI 架構，設計目的是為了簡化使用者的操作流程。它通過逐層檢查 DNS、TCP、TLS 和 HTTP，來確定封鎖的具體類型。每一層的檢查都是獨立的，這意味著即使某一層失敗，工具也能繼續檢查下一層，這樣的設計使得使用者能夠獲得更全面的診斷結果。

選擇 Python 作為開發語言，因為它的簡單性和廣泛的庫支持，特別是 `requests` 庫在網路請求方面的便利性。這種設計使得工具能夠快速部署，並且易於維護。整體架構的擴展性良好，未來可以增加更多的檢查層或功能，而不會影響現有的檢查流程。

## 技術深入分析

這個工具的核心技術機制是逐層檢查網路協議，具體包括 DNS、TCP、TLS 和 HTTP。每一層的檢查都是獨立進行的，這樣的設計使得使用者能夠精確地定位問題所在。使用 `requests` 庫進行網路請求，這使得工具在處理 HTTP 和 HTTPS 請求時非常方便。效能上，該工具能夠快速檢查多個網站，並且支持多線程檢查，這樣在面對大量網站時能夠提高效率。

設計上選擇 Python 是因為其語言特性使得開發和維護變得簡單，並且有廣泛的社群支持。這個工具的依賴關係相對簡單，主要依賴 `requests`，這使得整體的安裝和使用成本低。技術風險方面，主要是對於某些封鎖類型的診斷可能不夠精確，這需要使用者在使用時保持警覺。整合方面，該工具可以輕鬆地與其他 CLI 工具結合使用，並且支持 JSON 輸出，方便與其他數據分析工具配合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用範例。安裝過程順暢，無明顯坑。文件中有簡單的使用指南，但缺乏多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 逐層檢查提供詳細的封鎖診斷。
> - 使用簡單，無需複雜配置。
> - 支持自定義目標列表，靈活性高。
> - JSON 輸出便於後續數據分析。

> [!danger] 缺點
> - 僅支援 Python 3.10+，限制了使用者範圍。
> - 對於某些封鎖類型，可能無法提供明確的診斷。
> - 需要網路連接，無法離線使用。
> - 在某些情況下，可能需要手動確認檢查結果。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要網路連接以進行檢查。
> - 對於某些封鎖類型，可能無法提供明確的診斷。
> - 在某些情況下，可能需要手動確認檢查結果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理伺服器的管理，而 rkn-block-checker 專注於網路封鎖診斷，適用場景不同。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 主要用於自然語言處理，與網路封鎖無關，而 rkn-block-checker 針對特定的網路問題提供解決方案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理伺服器的管理，而 rkn-block-checker 專注於網路封鎖診斷，適用場景不同。 | 如果需要管理多個代理伺服器並進行流量轉發，則選擇這個工具更合適。 | medium，因為需要重新學習不同的操作流程。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 主要用於自然語言處理，與網路封鎖無關，而 rkn-block-checker 針對特定的網路問題提供解決方案。 | 如果需要進行文本生成或處理，則選擇 gpt2api 更合適。 | low，因為兩者的使用場景完全不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **rkn-block-checker** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理伺服器的管理，而 rkn-block-checker 專注於網路封鎖診斷，適用場景不同。 | gpt2api 主要用於自然語言處理，與網路封鎖無關，而 rkn-block-checker 針對特定的網路問題提供解決方案。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的操作流程。 | low，因為兩者的使用場景完全不同。 |
> | 適用場景 | 主要場景 | 如果需要管理多個代理伺服器並進行流量轉發，則選擇這個工具更合 | 如果需要進行文本生成或處理，則選擇 gpt2api 更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些網路環境下，檢查結果可能不一致，特別是 DNS 檢查。
  - 解法：手動確認 DNS 設定和使用的 DNS 伺服器。
- **[HIGH]** 某些 ISP 可能會對檢查流量進行干擾，導致誤報。
  - 解法：使用 VPN 或其他代理工具進行檢查。
- [MEDIUM] 當前版本對於某些封鎖類型的診斷可能不夠精確。
  - 解法：結合其他工具進行綜合分析。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速診斷網路問題，幫助團隊解決訪問問題。 |
| 大型企業的網路監控系統 | 普通 | 雖然能提供詳細診斷，但可能需要更高的穩定性和準確性。 |
| 自由職業者的個人項目 | 非常適合 | 簡單易用，能快速獲得網路狀況。 |
| 學術研究中的網路封鎖分析 | 適合 | 提供詳細的封鎖類型分析，對研究有幫助。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到詳細的網路診斷，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料。依賴的 `requests` 庫在安全性上有良好的聲譽，使用時需注意網路環境的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與其他 CLI 工具搭配使用，特別是在網路診斷和監控的工作流中。舉例來說，在一個使用 Docker 部署的環境中，可以將此工具作為網路檢查的步驟，並將結果輸出到其他數據分析工具中。該工具支持與 GitHub Actions 等 CI 工具整合，方便在持續集成過程中進行網路狀況檢查。整合的摩擦點主要在於需要確保網路環境的穩定性，否則可能會影響檢查結果的準確性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，網路封鎖的檢查主要依賴於單一的網站可訪問性檢查，無法提供詳細的封鎖類型分析。隨著網路審查技術的進步，對於封鎖診斷的需求越來越高。這個工具的出現正好滿足了這一需求，並且在技術上能夠提供更精確的診斷結果。

未來，隨著網路環境的變化，這個工具可能會進一步擴展功能，以應對新的封鎖技術。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
| Forks | 55 |
| Open Issues | 2 |
| Issue 解決率 | 71% (5 closed) |
| 最後推送 | 2026-05-09 |
| 建立日期 | 2026-05-03 |
| Repo 大小 | 116 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MayersScott/rkn-block-checker) |
| Topics | `censorship` `cli` `dns` `dpi` `network-diagnostics` `networking` `python` `rkn` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MayersScott](https://github.com/MayersScott) | 51 |
> | [@tagantank](https://github.com/tagantank) | 2 |
> | [@vladon](https://github.com/vladon) | 1 |

**最新版本**：v0.5.0 (2026-05-09)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/MayersScott/rkn-block-checker/compare/v0.4.0...v0.5.0

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/MayersScott/rkn-block-checker)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-07 ~ 2026-05-09）
> **活躍天數** 2 天 · **最新 commit** chore: bump version to 0.5.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/MayersScott/rkn-block-checker/issues/9) | Добавить возможность пропуска DNS проверки. | 0 | 0 |
> | [#8](https://github.com/MayersScott/rkn-block-checker/issues/8) | FakeIP support | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # RKN Block Checker
> 
> [](https://pypi.org/project/rkn-block-checker/)
> [](https://github.com/MayersScott/rkn-block-checker/actions/workflows/ci.yml)
> [](https://www.python.org/downloads/)
> [](LICENSE)
> 
> A small CLI that figures out whether the connection you're sitting on is in
> an RKN/TSPU-blocked zone - and, more usefully, **what kind** of block it is
> (DNS poisoning, TCP reset, TLS DPI on SNI, or an ISP stub page).
> 
> The point isn't "site X doesn't open." Browsers already tell you that. The
> point is to look at each layer of the stack independently and report
> *where* it broke. That tells you a lot more about your situation than a
> generic "this site can't be reached" page.
> 
> 
> ## Quick start
> 
> ```bash
> pip install rkn-block-checker
> rkn-check
> ```
> 
> That's it. The tool probes a built-in list of sites, classifies each
> failure by layer, and prints a verdict. No config, no setup, nothing to
> edit.
> 
> 
> ## Install
> 
> Python 3.10+.
> 
> From PyPI:
> 
> ```bash
> pip install rkn-block-checker
> ```
> 
> From source:
> 
> ```bash
> git clone https://github.com/MayersScott/rkn-block-checker.git
> cd rkn-block-checker
> pip install -e .
> ```
> 
> For development (adds pytest and friends):
> 
> ```bash
> pip install -e ".[dev]"
> ```
> 
> 
> ## Example output
> 
> ```text
> ======================================================================
>   RKN Block Checker
> ======================================================================
>   IP:       95.165.xxx.xxx
>   ISP:      AS12389 Rostelecom
>   Location: Moscow, Moscow, RU
> ----------------------------------------------------------------------
> 
> Whitelist (should always work)
>   name          verdict                    TCP     TLS     PLT  status
>   --------------------------------------------------------------------
>   gosuslugi     ✓ OK                      18ms    42ms   380ms  200
>   yandex        ✓ OK                       8ms    25ms    95ms  200
>   sberbank      ✓ OK                      12ms    38ms   250ms  200
>   vk            ✓ OK                       9ms    28ms   180ms  200
>   ...
> 
> Blacklist (RKN-restricted)
>   name          verdict                    TCP     TLS     PLT  status
>   --------------------------------------------------------------------
>   instagram     ~ LIKELY TLS DPI          22ms       -       -  -
>     └ TLS reset right after ClientHello - consistent with SNI-based DPI
>   twitter/x     ~ LIKELY TLS DPI          24ms       -       -  -
>     └ TLS handshake silently dropped - consistent with DPI filtering
>   rutracker     ✗ HTTP STUB               18ms    45ms   120ms  200
>     └ response body matches a known ISP stub-page marker
>   protonvpn     ✗ DNS                        -       -       -  -
>     └ system DNS doesn't resolve, DoH does - consistent with DNS poisoning
> 
> ======================================================================
>   Summary
> ----------------------------------------------------------------------
>   Whitelist: 21/21 working
>   Blacklist: 3/15 open, 12/15 blocked
> 
>   → Likely in an RKN-blocked zone (medium confidence).
>     Most blacklist failures match censorship patterns (TLS DPI, TCP RST),
>     but those signals can also be caused by server-side issues. A control
>     vantage point would confirm.
> 
>   Block types in the blacklist:
>     ~ LIKELY TLS DPI: 8
>     ✗ DNS: 2
>     ✗ HTTP STUB: 2
> ======================================================================
> ```
> 
> Verdict labels are **calibrated by confidence**: `✗` means a high-confidence
> diagnosis (e.g. DNS poisoning confirmed by DoH, HTTP 451, a known stub-page
> marker), `~ LIKELY` means a known censorship pattern matched but a single
> signal can't rule out a server-side issue, and `?` means the symptom is
> ambiguous. The summary line says so plainly - "high confidence", "medium
> confidence", or "inconclusive" - and never claims more certainty than the
> underlying signals support.
> 
> 
> ## Usage
> 
> ```text
> rkn-check [-h] [--json] [--white] [--black]
>           [--white-file PATH] [--black-file PATH] [--url URL]
>           [--timeout TIMEOUT] [--workers WORKERS] [-v]
>           [--no-self-info] [--identify]
> ```
> 
> | flag | what it does |
> |------|--------------|
> | `--json` | emit machine-readable JSON instead of the colored report |
> | `--white` | check only the control (whitelist) targets |
> | `--black` | check only the blacklist targets |
> | `--white-file PATH` | replace the built-in whitelist with a `.txt` or `.json` file |
> | `--black-file PATH` | replace the built-in blacklist with a `.txt` or `.json` file |
> | `--url URL` | probe a single URL or hostname; repeat for several. Skips built-in lists |
> | `--timeout T` | per-probe timeout in seconds (default 5.0) |
> | `--workers N` | thread pool size for parallel checks (default 10) |
> | `--no-self-info` | skip the public-IP lookup at the top of the report |
> | `--identify` | send a self-identifying User-Agent instead of a generic Chrome one. See [Privacy](#privacy-and-threat-model) |
> | `-v` / `-vv` | logging at INFO / DEBUG |
> 
> `--white` and `--black` are mutually exclusive. `--url` cannot be combined
> with `--white`/`--black`/`--white-file`/`--black-file` - ad-hoc mode runs
> only the URLs you pass.
> 
> 
> ## Why this exists
> 
> If a site doesn't open, your browser tells you that. But if you want to
> *do* something about it - pick the right circumvention tool, file a useful
> bug report, or just understand what's happening to your traffic - you need
> to know which part of the network stack is actually being interfered with.
> 
> Different censorship mechanisms leave different fingerprints:
> 
> - **DNS poisoning** is the cheapest and oldest. The ISP's resolver lies
>   about a domain.
> - **TCP reset** is IP-level blackholing. Rare in practice - most ISPs
>   don't bother.
> - **TLS DPI on SNI** is the modern TSPU/RKN signature. The middlebox
>   watches for the SNI extension in the TLS ClientHello and tears the
>   connection down once it sees a blocked hostname.
> - **HTTP stub pages** are the polite kind: an ISP-controlled page served
>   back with a "blocked by RKN" body, often with status 200 or the
>   rarer-but-explicit 451.
> 
> `rkn-check` walks DNS → TCP → TLS → HTTP for each target and stops at the
> first thing that fails. Whichever layer broke becomes the verdict.
> 
> 
> ## Common scenarios
> 
> 
> ### Just diagnose the connection you're on
> 
> ```bash
> rkn-check
> ```
> 
> Probes the built-in lists (~21 control sites, ~15 RKN-restricted), prints
> a per-site report and a summary verdict.
> 
> 
> ### Check a single URL
> 
> ```bash
> rkn-check --url https://example.com
> rkn-check --url example.com --url google.com    # repeat for several
> ```
> 
> Skips the built-in lists entirely and runs an ad-hoc check against just
> the URLs you pass. No summary verdict - there's no control group to
> compare against. Use this when you want to know "did *this one site* come
> through?" without paying for a full scan.
> 
> 
> ### Pipe to `jq`
> 
> ```bash
> 
> # names of every blocked site
> rkn-check --json | jq -r '.blacklist[] | select(.verdict != "OK") | .name'
> 
> 
> # count by block type
> rkn-check --json | jq '.blacklist | group_by(.verdict)
>                        | map({verdict: .[0].verdict, count: length})'
> 
> 
> # only DPI-style blocks (TCP fine, TLS dies)
> rkn-check --json | jq '.blacklist[] | select(.verdict == "TLS_BLOCK" and .tcp_ok)'
> ```
> 
> 
> ### Use your own target lists
> 
> ```bash
> rkn-check --black-file my-list.txt
> rkn-check --white-file my-control.json --black-file my-targets.json
> ```
> 
> See [Custom target lists](#custom-target-lists) below for the file format.
> 
> 
> ### Run from cron and store JSON over time
> 
> ```bash
> rkn-check --json --no-self-info > "snapshots/$(date -I).json"
> ```
> 
> `--no-self-info` skips the public-IP lookup so the tool doesn't hit
> `ipinfo.io` on every cron tick (and so the resulting JSON doesn't carry
> your IP).
> 
> 
> ## How it works
> 
> For each target the tool walks DNS → TCP → TLS → HTTP and stops at the
> first thing that fails. Whichever layer broke becomes the verdict.
> 
> | layer | probe | what a failure means |
> |------:|-------|----------------------|
> | DNS  | system resolver vs Cloudflare DoH, full address sets compared | sets agree but the system fails alone → DNS poisonin

## 延伸閱讀

相關概念：[[網路診斷]] · [[DNS 污染]] · [[TLS DPI]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

[GitHub](https://github.com/MayersScott/rkn-block-checker)

## 相關收錄

> [!note]- 直接競品（同子分類：網路診斷）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路診斷" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "MayersScott--rkn-block-checker" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["網路診斷","DNS 污染","TLS DPI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MayersScott--rkn-block-checker" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MayersScott--rkn-block-checker" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MayersScott" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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

> **2026-05-09** — 首次收錄
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

- [[2026-05-10|2026-05-10]] — 再次上榜，969 stars
- [[2026-05-09|2026-05-09]] — 首次收錄，796 stars
