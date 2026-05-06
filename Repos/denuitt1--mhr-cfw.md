---
repo: denuitt1/mhr-cfw
url: https://github.com/denuitt1/mhr-cfw
owner: denuitt1
owner_type: User
language: Python
license: MIT
description: "A Domain-Fronting Relay that routes traffic though GAS (Google Apps Script) and forwards it to Cloudflare Workers. Designed to bypass DPI."
homepage: ""
stars: 2333
stars_per_day: 292
forks: 238
open_issues: 69
created: 2026-04-27
pushed_at: 2026-05-05
first_seen: 2026-05-02
week: "2026-W18"
month: "2026-05"
category: "基礎設施"
subcategory: "代理工具"
release_tag: "v2.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-02
use_case: "透過 Google Apps Script 和 Cloudflare Workers 轉發流量，設計用來繞過 DPI 限制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 31
repo_size_kb: 105
readme_length: 8433
bus_factor: 2
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-02"
star_history: "2026-05-02:1316,2026-05-02:1319,2026-05-03:1701,2026-05-03:1703,2026-05-04:1961,2026-05-04:1961,2026-05-05:2166,2026-05-06:2333"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - "topic/cloudflare_workers"
  - "topic/domain_fronting"
  - "topic/dpi"
  - "topic/dpi_bypass"
  - "topic/google_apps_script"
aliases:
  - "mhr-cfw"
  - "denuitt1/mhr-cfw"
  - "透過 Google Apps Script 和 Cloudflare Workers 轉發流量，設計用來繞過 DPI 限"
---

# mhr-cfw

**2.3k** stars · **292** stars/天 · 建立 8 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/denuitt1--mhr-cfw");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v2.0.1`

`cloudflare-workers` `domain-fronting` `dpi` `dpi-bypass` `google-apps-script` `http` `mitm` `proxy` `sni`

> [!summary] 一句話摘要
> 透過 Google Apps Script 和 Cloudflare Workers 轉發流量，設計用來繞過 DPI 限制。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (292 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要匿名訪問並且熟悉網絡技術的開發者和安全研究人員。
> **一句話重點** 這個專案提供了一個簡單的解決方案來繞過 DPI，適合需要匿名訪問的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/denuitt1--mhr-cfw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理工具" && p.file.name !== "denuitt1--mhr-cfw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到匿名訪問的能力，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於它能夠有效地繞過深度包檢測，隱藏實際的流量來源。

## 專案簡介

MHR-CFW 是一個域名前置代理工具，能夠將用戶的流量通過 Google 的基礎設施轉發到 Cloudflare Workers，從而隱藏實際的目標網站。用戶的請求首先發送到本地代理，然後經過 Google 的基礎設施，最終由 Cloudflare Worker 轉發到目標網站。這樣的設計使得網絡過濾器只能看到正常的 Google 流量，實際的請求內容則保持隱藏。這個工具的賣點在於其能夠有效繞過深度包檢測（DPI），適合需要匿名訪問的用戶。技術上，它使用 Python 和 JavaScript，並依賴 Google Apps Script 來處理請求，這樣的選擇使得它能夠利用 Google 的廣泛基礎設施來隱藏流量來源。

與其他類似工具相比，如 Shadowsocks 或 V2Ray，MHR-CFW 提供了一個更簡單的設置過程，因為它不需要用戶自行管理伺服器，且能夠利用 Cloudflare 的邊緣計算能力來提高性能。實際使用中，這個工具能夠處理多種網絡環境，但對於需要穩定出口 IP 的用戶，可能需要額外配置上游轉發器。這個工具的社群活躍度中等，開放問題數量相對較高，顯示出仍有許多使用者在探索和解決問題。整體來看，這是一個適合技術熟練的用戶，尤其是需要匿名訪問的開發者和研究人員使用的工具。

**技術棧**：`Python 3.10` · `Google Apps Script` · `Cloudflare Workers`

## 重點功能

- 域名前置代理 — 通過 Google Apps Script 和 Cloudflare Workers 隱藏實際流量來源。
- 支持多種網絡環境 — 能夠在不同的網絡環境中有效運行，適用於多種設備。
- 簡單的設置過程 — 用戶只需按照步驟配置 Google Apps Script 和 Cloudflare Worker。
- 可選的穩定出口 IP — 透過上游轉發器配置，解決 CAPTCHA 驗證問題。
- 支持多種編碼格式 — 包括 Brotli 和 Zstandard，適應現代網站的需求。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/denuitt1/mhr-cfw.git && cd mhr-cfw && pip install -r requirements.txt
```
2. 設置 Cloudflare Worker
```bash
在 Cloudflare Dashboard 中創建應用並部署 worker.js
```
3. 設置 Google Relay
```bash
在 Google Apps Script 中創建新專案並部署 Code.gs
```

## 程式碼範例

```python
{
  "前置條件": "已經設置好 Cloudflare Worker 和 Google Apps Script",
  "指令": "curl -X POST https://forwarder.example.com/fwd -H \"x-upstream-auth: $AUTH_KEY\" -H \"content-type: application/json\" -d '{\"u\":\"https://httpbin.org/ip\",\"m\":\"GET\",\"h\":{}}'",
  "預期輸出": "應該顯示 VPS 的 IP 地址。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 2333 stars（292/天），forks 238（10.2%），顯示出強勁的增長勢頭。這個專案的作者 denuitt1 和其他貢獻者在開源社群中有一定的知名度，並且解決了以往工具在隱私和匿名性方面的不足。特別是，這個工具提供了一個相對簡單的解決方案來繞過 DPI，這在當前的網絡環境中是非常有需求的。社群的討論和反饋也促進了這個專案的快速迭代，進一步吸引了使用者的注意。

## 適合誰使用

**目標受眾**：需要匿名訪問並且熟悉網絡技術的開發者和安全研究人員。

> [!example] 使用場景
> - 網絡安全研究人員用它來隱藏流量來源，因為這樣可以在不被檢測的情況下進行測試。
> - 開發者用它來測試應用程式在不同地區的可用性，因為它能夠繞過地區限制，模擬真實用戶行為。
> - 需要匿名訪問的用戶用它來訪問被封鎖的網站，因為它能夠有效隱藏實際的請求來源。

## 架構分析

MHR-CFW 的架構基於一個本地代理，該代理將請求轉發至 Google 的基礎設施，然後由 Cloudflare Worker 處理。這種設計使得用戶的實際請求不會被網絡過濾器檢測到。資料流從用戶端發送到本地代理，然後經過 Google 的基礎設施，再由 Cloudflare Worker 獲取實際的網站內容。

這樣的設計選擇使得用戶無需管理伺服器，簡化了使用流程，但也意味著對 Google 和 Cloudflare 的依賴。這種依賴可能在某些情況下造成性能瓶頸，特別是在高流量時期。整體架構的可擴展性取決於 Google 和 Cloudflare 的基礎設施，對於需要高可用性的商業應用可能不夠理想。

## 技術深入分析

MHR-CFW 的核心技術機制在於利用 Google Apps Script 和 Cloudflare Workers 來隱藏流量來源。它使用了 HTTP/2 協議來提高性能，並且支持多種編碼格式以適應現代網站的需求。效能方面，這個工具能夠處理大量的請求，但在高流量情況下可能會受到 Google 和 Cloudflare 的基礎設施限制。設計上選擇 Python 和 JavaScript 作為主要語言，這樣的選擇使得開發和維護相對簡單，但也可能導致依賴樹的複雜性增加。技術風險方面，這個工具對 Google 和 Cloudflare 的依賴可能在未來的變化中造成問題，特別是如果這些平台改變了其 API 或使用政策。整合方面，這個工具可以與主流的開發框架無縫協作，但對於沒有經驗的用戶來說，仍然需要一定的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的設置步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但對於某些用戶來說，可能需要額外的配置。整體來說，這個專案的上手難度適中，適合有一定技術基礎的用戶。

## 優缺點分析

> [!success] 優點
> - 簡單易用的設置過程，適合技術新手。
> - 能夠有效繞過 DPI，隱藏流量來源。
> - 支持多種編碼格式，適應現代網站需求。

> [!danger] 缺點
> - 對於需要穩定出口 IP 的用戶，配置較為繁瑣。
> - 依賴 Google 和 Cloudflare 的基礎設施，可能存在性能瓶頸。
> - 社群活躍度中等，開放問題數量較高。

> [!warning] 注意事項
> - 僅支援 Python 3.10+
> - 需要穩定的 VPS 來配置上游轉發器以解決 CAPTCHA 問題
> - 不支援 Windows 環境的 TLS 驗證

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但主要針對遊戲流量，設計上更為專注於遊戲環境。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這是一個更為輕量的代理工具，適合快速設置，但不具備域名前置的能力。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 的代理，但不支持 DPI 繞過，適合需要 API 訪問的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Shadowsocks | Shadowsocks 使用加密的代理技術來隱藏流量，但不具備域名前置的能力。 | 如果你的需求是加密流量並且不需要隱藏實際的目標網站，Shadowsocks 是一個不錯的選擇。 | medium，因為需要重新配置代理設置和客戶端。 |
| V2Ray | V2Ray 提供了更靈活的配置選項和多種代理方式，但設置過程相對複雜。 | 如果你需要更高的靈活性和多種協議支持，V2Ray 是更好的選擇。 | high，因為需要重新學習配置和使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mhr-cfw** | **Shadowsocks** | **V2Ray** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 使用加密的代理技術來隱藏流量，但不具備域名前置的能力。 | V2Ray 提供了更靈活的配置選項和多種代理方式，但設置過程相對複雜。 |
> | 遷移成本 | - | medium，因為需要重新配置代理設置和客戶端。 | high，因為需要重新學習配置和使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是加密流量並且不需要隱藏實際的目標網站，Shad | 如果你需要更高的靈活性和多種協議支持，V2Ray 是更好的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人測試和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網絡環境中，可能無法穩定連接到 Google Apps Script。
  - 解法：嘗試更換網絡或使用 VPN 來穩定連接。
- [MEDIUM] CAPTCHA 驗證可能會因為 IP 變化而失敗。
  - 解法：配置上游轉發器以獲得穩定的出口 IP。
- [MEDIUM] 在 Windows 環境中，TLS 驗證可能會出現問題。
  - 解法：使用 Linux 或 macOS 環境來運行該工具。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要匿名訪問的個人用戶 | 非常適合 | 能夠有效隱藏流量來源，適合需要保護隱私的用戶。 |
| 小型開發團隊進行網絡測試 | 適合 | 簡單的設置過程和良好的性能使其適合小型團隊使用。 |
| 大型企業需要穩定的出口 IP | 不適合 | 對於需要穩定 IP 的場景，配置較為繁瑣且不夠穩定。 |
| 學術研究需要匿名訪問特定網站 | 非常適合 | 能夠有效繞過網絡過濾，適合學術研究使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到匿名訪問的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估中等，該工具不需要高權限，但使用過程中需注意保護 AUTH_KEY 和其他敏感資料的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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
| Forks | 238 |
| Open Issues | 69 |
| Issue 解決率 | 31% (31 closed) |
| 最後推送 | 2026-05-05 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 105 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/denuitt1/mhr-cfw) |
| Topics | `cloudflare-workers` `domain-fronting` `dpi` `dpi-bypass` `google-apps-script` `http` `mitm` `proxy` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `cryptography` `h2` `certifi` `brotli` `zstandard`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 94
>     "JavaScript" : 4
>     "Batchfile" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cpog72031](https://github.com/cpog72031) | 38 |
> | [@denuitt1](https://github.com/denuitt1) | 38 |
> | [@loada2204](https://github.com/loada2204) | 8 |
> | [@hrnrxb](https://github.com/hrnrxb) | 1 |
> | [@onlymaj](https://github.com/onlymaj) | 1 |

**最新版本**：v2.0.1 (2026-05-03)

> [!info]- Release Notes
> ## What's Changed
> * Complate README_FA.md by @MatinSenpai and @0xRadikal in https://github.com/denuitt1/mhr-cfw/pull/20
> * feat(be): optional upstream forwarder for stable worker exit IP by @onlymaj in https://github.com/denuitt1/mhr-cfw/pull/80
> * multiple parallel script_ids formatting fixed in farsi readme.md by @hrnrxb in https://github.com/denuitt1/mhr-cfw/pull/71
> 
> ## New Contributors
> * @0xRadikal made their first contribution in https://github.com/denuitt1/mhr-cfw/pull/20
> * @onlymaj made their first contribution in https://github.com/denuitt1/mhr-cfw/pull/80
> * @hrnrxb made their first contribution in https://github.com/denuitt1/mhr-cfw/pull/71
> 
> **Full Changelog**: https://github.com/denuitt1/mhr-cfw/compare/v2.0.0...v2.0.1

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量較高，顯示出仍有許多使用者在探索和解決問題。
**連結**：[文件](https://github.com/denuitt1/mhr-cfw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-03 ~ 2026-05-05）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#62](https://github.com/denuitt1/mhr-cfw/issues/62) | Socks not working on lan sharing ios | 5 | 1 |
> | [#3](https://github.com/denuitt1/mhr-cfw/issues/3) | 502 Bad JSON: | 4 | 9 |
> | [#98](https://github.com/denuitt1/mhr-cfw/issues/98) | Mobile support, any plans or workarounds? | 3 | 2 |
> | [#73](https://github.com/denuitt1/mhr-cfw/issues/73) | آپلود مجدد فیلم آموزشی | 3 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MHR-CFW - MITM Domain-Fronted HTTP Relay + Cloudflare Worker Exit
> 
> [](https://github.com/denuitt1/mhr-cfw)
> 
> 
> | [English](README.md) | [Persian](README_FA.md) |
> | :---: | :---: |
> 
> ## Disclaimer
> 
> `mhr-cfw` is provided for educational, testing, and research purposes only.
> 
> - **Provided without warranty:** This software is provided "AS IS", without express or implied warranty, including merchantability, fitness for a particular purpose, and non-infringement.
> - **Limitation of liability:** The developers and contributors are not responsible for any direct, indirect, incidental, consequential, or other damages resulting from the use of this project or the inability to use it.
> - **User responsibility:** Running this project outside controlled test environments may affect networks, accounts, proxies, certificates, or connected systems. You are solely responsible for installation, configuration, and use.
> - **Legal compliance:** You are responsible for complying with all local, national, and international laws and regulations before using this software.
> - **Google services compliance:** If you use Google Apps Script or other Google services with this project, you are responsible for complying with Google's Terms of Service, acceptable use rules, quotas, and platform policies. Misuse may lead to suspension or termination of your Google account or deployments.
> - **License terms:** Use, copying, distribution, and modification of this software are governed by the repository license. Any use outside those terms is prohibited.
> 
> ---
> 
> ## How It Works
> 
> ```
> Client -> Local Proxy -> Google/CDN front -> GoogleAppsScript (GAS) Relay -> Cloudflare Worker -> Target website
>              |
>              +-> shows www.google.com to the network DPI filter
> ```
> In normal use, the browser sends traffic to the proxy running on your computer.
> The proxy sends that traffic through Google-facing infrastructure so the network only sees an allowed domain such as `www.google.com`.
> Your deployed relay then fetches the real website through cloudflare worker and sends the response back through the same path.
> 
> This means the filter sees normal-looking Google traffic, while the actual destination stays hidden inside the relay request.
> 
> --- 
> 
> ## How to Use
> 
> ### 1 - Download project and extract 
> 
> ```bash
> git clone https://github.com/denuitt1/mhr-cfw.git
> cd mhr-cfw
> pip install -r requirements.txt
> ```
> > **Can't reach PyPI directly?** Use this mirror instead:
> > ```bash
> > pip install -r requirements.txt -i https://mirror-pypi.runflare.com/simple/ --trusted-host mirror-pypi.runflare.com
> > ```
> 
> 
> ### 2 - Set Up the Cloudflare Worker (worker.js)
> 
> 1. Open [Cloudflare Dashboard](https://dash.cloudflare.com/) and sign in with your Cloudflare account.
> 2. From the sidebar, navigate to **Compute > Workers & Pages**
> 3. Click **Create Application**, Choose **Start with Hello World** and click on **Deploy**
> 4. Click on **Edit code** and **Delete** all the default code in the editor.
> 5. Open the [`worker.js`](script/worker.js) file from this project (under `script/`), **copy everything**, and paste it into the Apps Script editor.
> 6. **Important:** Change the worker on this line to the worker you created:
>    ```javascript
>    const WORKER_URL = "myworker.workers.dev";
>    ```
> 7. Click **Deploy**.
> 
> ### 3 - Set Up the Google Relay (Code.gs)
> 
> 1. Open [Google Apps Script](https://script.google.com/) and sign in with your Google account.
> 2. Click **New project**.
> 3. **Delete** all the default code in the editor.
> 4. Open the [`Code.gs`](script/Code.gs) file from this project (under `script/`), **copy everything**, and paste it into the Apps Script editor.
> 5. **Important:** Change the password on this line to something only you know, also replace the worker url with your cloudflare worker:
>    ```javascript
>    const AUTH_KEY = "your-secret-password-here";
>    const WORKER_URL = "https://myworker.workers.dev";
>    ```
> 6. Click **Deploy** → **New deployment**.
> 7. Choose **Web app** as the type.
> 8. Set:
>    - **Execute as:** Me
>    - **Who has access:** Anyone
> 9. Click **Deploy**.
> 10. **Copy the Deployment ID** (it looks like a long random string). You'll need it in the next step.
> 
> > ⚠️ Remember the password you set in step 3. You'll use the same password in the config file below.
> 
> ### 4 - Run
> 
> Click on the `run.bat` file (on windows) or `run.sh` file (on linux) to start the relay.
> 
> If you're running for the first time it will prompt a setup wizard where you have to enter the AUTH_KEY and Google Apps Script Deployment ID.
> You should see a message saying the HTTP proxy is running on `127.0.0.1:8085`
> 
> ### 5 - Usage
> 
> We recommend using [v2rayN client](https://github.com/2dust/v2rayn) and configuring a socks5 proxy.
> 
> You can also use [FoxyProxy](https://getfoxyproxy.org/)'s [Chrome extension](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp?hl=en) or [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) to use this proxy in your browser.
> 
> ### 6 - Test your connection
> 
> Open [ipleak.net](https://ipleak.net) in your browser, you should see your ip address set as cloudflare's.
> 
> 
> 
> 
> ---
> 
> ## Optional: Stable Exit IP via Upstream Forwarder
> 
> CAPTCHAs (Cloudflare Turnstile/bot challenge, reCAPTCHA, hCaptcha) bind tokens
> to the IP that solved the challenge. Cloudflare Workers exit through different
> edge IPs per request, so verification on the target site fails even when you
> solve the challenge. This optional add-on lets the Worker forward all `fetch()`
> calls through a small Node server you run on a VPS with a stable IP — giving
> the target site one consistent exit address.
> 
> ### When you need this
> 
> - Sites behind Cloudflare's bot challenge keep looping you back to the challenge page.
> - Login forms reject you after solving a reCAPTCHA/hCaptcha.
> - You need cookie continuity across requests (e.g. `cf_clearance`).
> 
> If you don't hit these, leave it unconfigured — the Worker behaves exactly as before.
> 
> ### Why a separate server is required
> 
> Cloudflare Workers don't expose a stable outbound IP — `fetch()` exits through a rotating pool of Cloudflare edge IPs, which is exactly what breaks IP-bound CAPTCHA tokens. Cloudflare's static-egress options (BYOIP, Egress Workers) are Enterprise-tier, so a small VPS with a static IP is the practical workaround. The forwarder is just a thin proxy that re-issues the `fetch()` from a stable address.
> 
> ### 1. Deploy the forwarder on a VPS
> 
> The reference implementation is [`script/upstream_forwarder.js`](script/upstream_forwarder.js).
> It needs Node 18+ and no dependencies. Run it behind Caddy or nginx with TLS —
> the Worker rejects non-HTTPS forwarder URLs.
> 
> ```bash
> # On your VPS (Ubuntu/Debian example):
> sudo apt install -y nodejs   # must be 18+
> export AUTH_KEY="some-long-random-string-at-least-32-chars"
> export PORT=8787
> node script/upstream_forwarder.js
> ```
> 
> Front it with Caddy for auto-TLS:
> 
> ```
> forwarder.example.com {
>     reverse_proxy 127.0.0.1:8787
> }
> ```
> 
> Quick smoke test:
> 
> ```bash
> curl -X POST https://forwarder.example.com/fwd \
>   -H "x-upstream-auth: $AUTH_KEY" \
>   -H "content-type: application/json" \
>   -d '{"u":"https://httpbin.org/ip","m":"GET","h":{}}'
> ```
> 
> The decoded response body should show the **VPS's IP**.
> 
> ### 2. Wire the Worker to the forwarder
> 
> In the Cloudflare dashboard → your Worker → **Settings → Variables and Secrets**:
> 
> | Name | Type | Value |
> |---|---|---|
> | `UPSTREAM_FORWARDER_URL` | Secret | `https://forwarder.example.com/fwd` |
> | `UPSTREAM_AUTH_KEY` | Secret | the same `AUTH_KEY` you set on the VPS |
> | `UPSTREAM_FAIL_MODE` | Variable | `closed` (default) — return 502 on forwarder failure. Use `open` to fall back to direct fetch. |
> | `UPSTREAM_TIMEOUT_MS` | Variable (optional) | default `25000` |
> 
> Save and redeploy the Worker.
> 
> ### 3. Verify
> 
> Browse `

## 延伸閱讀

相關概念：[[DPI]] · [[代理工具]] · [[Cloudflare Workers]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

[GitHub](https://github.com/denuitt1/mhr-cfw)

## 相關收錄

> [!note]- 直接競品（同子分類：代理工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理工具" AND file.name != "denuitt1--mhr-cfw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "denuitt1--mhr-cfw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "denuitt1--mhr-cfw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "denuitt1--mhr-cfw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["DPI","代理工具","Cloudflare Workers"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "denuitt1--mhr-cfw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/denuitt1--mhr-cfw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "denuitt1--mhr-cfw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "denuitt1" AND file.name != "denuitt1--mhr-cfw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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
> const me = dv.page("Repos/denuitt1--mhr-cfw");
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

> **2026-05-02** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 再次上榜，2.0k stars
- [[2026-05-03|2026-05-03]] — 再次上榜，1.7k stars
- [[2026-05-02|2026-05-02]] — 首次收錄，1.3k stars
