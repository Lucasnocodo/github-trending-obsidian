---
repo: denuitt1/mhr-cfw
url: https://github.com/denuitt1/mhr-cfw
owner: denuitt1
owner_type: User
language: Python
license: MIT
description: "A Domain-Fronting Relay that routes traffic though GAS (Google Apps Script) and forwards it to Cloudflare Workers. Designed to bypass DPI."
homepage: ""
stars: 2707
stars_per_day: 246
forks: 258
open_issues: 81
created: 2026-04-27
pushed_at: 2026-05-08
first_seen: 2026-05-02
week: "2026-W18"
month: "2026-05"
category: "安全"
subcategory: "隱私保護"
release_tag: "v2.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-02
use_case: "一個透過 GAS 和 Cloudflare Workers 轉發流量的域名前置代理，旨在繞過 DPI 限制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-07"
contributor_count: 5
engagement: "low"
issue_close_rate: 35
repo_size_kb: 99
readme_length: 8930
bus_factor: 2
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-02"
star_history: "2026-05-02:1316,2026-05-02:1319,2026-05-03:1701,2026-05-03:1703,2026-05-04:1961,2026-05-04:1961,2026-05-05:2166,2026-05-06:2333,2026-05-07:2468,2026-05-08:2584,2026-05-09:2707"
tags:
  - github
  - "category/安全"
  - "lang/python"
  - "topic/cloudflare_workers"
  - "topic/domain_fronting"
  - "topic/dpi"
  - "topic/dpi_bypass"
  - "topic/google_apps_script"
aliases:
  - "mhr-cfw"
  - "denuitt1/mhr-cfw"
  - "一個透過 GAS 和 Cloudflare Workers 轉發流量的域名前置代理，旨在繞過 DPI 限制。"
---

# mhr-cfw

**2.7k** stars · **246** stars/天 · 建立 11 天前 · Python · MIT

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
> 一個透過 GAS 和 Cloudflare Workers 轉發流量的域名前置代理，旨在繞過 DPI 限制。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (246 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在受限網路環境中安全隱藏流量的開發者和網路安全專家。
> **一句話重點** 這個專案展示了如何利用現有的雲服務來隱藏流量，為用戶提供了一個靈活的解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/denuitt1--mhr-cfw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "隱私保護" && p.file.name !== "denuitt1--mhr-cfw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 隱私保護 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到有效的流量隱藏效果，值得考慮。

> [!abstract] 核心創新
> 這個專案的創新在於結合 Google Apps Script 和 Cloudflare Workers 來隱藏流量，提供一個高效的域名前置代理解決方案。

## 專案簡介

MHR-CFW 是一個域名前置代理，能夠將流量通過 Google Apps Script (GAS) 和 Cloudflare Workers 進行轉發，從而隱藏實際的流量目的地。用戶的瀏覽器將請求發送到本地代理，該代理再通過 Google 的基礎設施轉發請求，讓網路只看到正常的 Google 流量。這樣的設計使得使用者可以在受到深度包檢測 (DPI) 的環境中繞過限制，實現隱私保護。主要的操作指令包括 `git clone` 和 `pip install -r requirements.txt`，這些步驟簡化了安裝過程。技術上，這個專案使用 Python 和 JavaScript，並依賴 Google Apps Script 和 Cloudflare Workers 進行流量轉發，這樣的選擇使得它能夠利用這些平台的穩定性和可擴展性。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 Flowseal/tg-ws-proxy，MHR-CFW 的優勢在於其能夠使用 Google 的基礎設施來隱藏流量，這在某些情況下比直接的 VPN 或代理服務更有效。實際使用中，這個工具能夠處理多達數百個並發請求，但在設置過程中需要注意 Cloudflare 和 Google 的配置細節。社群活躍度中等，開放問題的解決率約 35%，顯示出仍有改進空間。此專案目前處於 beta 階段，適合對隱私有高需求的用戶，尤其是在需要繞過網路限制的情況下。未來幾個月，隨著社群的增長和功能的擴展，這個專案有潛力成為更成熟的解決方案。

**技術棧**：`Python 3.10` · `JavaScript` · `Google Apps Script` · `Cloudflare Workers`

## 重點功能

- 域名前置代理 — 通過 Google Apps Script 和 Cloudflare Workers 隱藏實際流量目的地。
- 支持多種配置 — 用戶可以選擇不同的轉發模式，如自託管上游轉發器。
- 簡易安裝 — 只需幾個命令即可完成安裝和配置。
- 高並發處理 — 能夠處理數百個並發請求，適合高流量需求。
- 跨平台支持 — 兼容 Windows、Linux 和 macOS，無需 C 編譯器。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/denuitt1/mhr-cfw.git && cd mhr-cfw && pip install -r requirements.txt
```
2. 設置 Cloudflare Worker
```bash
在 Cloudflare Dashboard 創建應用並部署 worker.js
```
3. 設置 Google Relay
```bash
在 Google Apps Script 創建新專案並部署 Code.gs
```

## 程式碼範例

```python
[
  "# 前置條件：已設置 Cloudflare Worker 和 Google Apps Script",
  "const WORKER_URL = \"myworker.workers.dev\"; // 在 worker.js 中設置",
  "// 預期輸出：將請求轉發到指定的 Cloudflare Worker"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 2707 stars（246/天），forks 258（9.5%），顯示出強烈的使用需求。作者 denuitt1 及其團隊在開源社群中有一定的知名度，之前也有其他成功的專案。這個工具解決了在受到 DPI 限制的環境中，如何安全隱藏流量的痛點，之前的解決方案往往無法有效應對這種需求。近期的推廣和社群討論可能也促進了其快速增長。技術上，隨著 Google Apps Script 和 Cloudflare Workers 的普及，這種基於雲的解決方案變得越來越可行，進一步推動了這個工具的受歡迎程度。

## 適合誰使用

**目標受眾**：需要在受限網路環境中安全隱藏流量的開發者和網路安全專家。

> [!example] 使用場景
> - 網路安全研究員用它來測試企業網路的 DPI 防護，因為能夠隱藏流量來源，避免被檢測。
> - 隱私意識強的用戶用它來繞過地區限制，安全訪問被封鎖的網站，因為它能夠利用 Google 的基礎設施來隱藏請求。
> - 開發者用它來測試應用程式在不同網路環境下的表現，因為它提供了一個靈活的流量轉發解決方案。

## 架構分析

MHR-CFW 採用 GAS 和 Cloudflare Workers 的結合架構，這樣的設計使得流量能夠在 Google 的基礎設施上進行轉發，從而隱藏實際的流量目的地。資料流從客戶端發送到本地代理，再通過 Google 的基礎設施轉發，最終到達 Cloudflare Worker。這樣的設計選擇使得流量看起來像是正常的 Google 請求，這在受到 DPI 檢測的環境中尤為重要。選擇這種架構的代價在於需要用戶對 Google 和 Cloudflare 的配置有一定的了解，並且在某些情況下可能會遇到配置上的挑戰。擴展性方面，這種架構能夠支持多個並發請求，但在高流量情況下可能會受到 Google 的流量限制影響。

## 技術深入分析

MHR-CFW 的核心技術機制是將流量通過 Google Apps Script 和 Cloudflare Workers 進行轉發，這樣的設計使得流量能夠在 Google 的基礎設施上進行處理，從而隱藏實際的目的地。這個架構能夠有效地處理多達數百個並發請求，並且在設置上相對簡單，使用者只需遵循幾個步驟即可完成安裝。選擇 Python 和 JavaScript 作為主要開發語言，讓這個專案能夠在多個平台上運行，並且依賴於 Google 和 Cloudflare 的穩定性。設計上，這個工具的依賴樹相對簡單，核心功能不需要外部依賴，這降低了使用的門檻。然而，隨著使用者數量的增加，可能會面臨 Google 的流量限制，這是未來需要考慮的風險。整合方面，這個工具可以與現有的開發環境無縫對接，並且支持多種平台，這使得它在實際使用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有詳細的安裝步驟，提供了必要的範例和說明。安裝過程相對順暢，但用戶需要注意 Google 和 Cloudflare 的配置細節。整體來說，對於有一定技術背景的用戶來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 能夠有效隱藏流量，繞過 DPI 檢測。
> - 支持高並發請求，適合流量需求大的用戶。
> - 安裝簡單，適合各種平台使用。

> [!danger] 缺點
> - 需要用戶具備一定的配置知識。
> - 在某些網路環境下可能無法正常運作。
> - 社群支持和文檔仍有待加強。

> [!warning] 注意事項
> - 僅支援 Python 3.10+
> - 需要正確配置 Cloudflare 和 Google Apps Script
> - 在某些網路環境下可能會受到額外的限制

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具使用不同的代理技術來隱藏流量，但不支持 GAS 和 Cloudflare 的組合，可能在某些環境下效果不如 MHR-CFW。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 這個工具專注於 Telegram 的代理需求，功能較為單一，適合特定場景，而 MHR-CFW 提供更廣泛的流量隱藏能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具使用不同的代理技術來隱藏流量，但不支持 GAS 和 Cloudflare 的組合，可能在某些環境下效果不如 MHR-CFW。 | 如果你的需求不需要使用 Google 的基礎設施，並且希望使用其他代理技術。 | medium，因為需要重新配置和適應新的工具。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 這個工具專注於 Telegram 的代理需求，功能較為單一，適合特定場景，而 MHR-CFW 提供更廣泛的流量隱藏能力。 | 如果你的主要需求是 Telegram 的代理，而不是通用的流量隱藏。 | low，因為功能較為單一，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mhr-cfw** | **agent-sprite-forge** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具使用不同的代理技術來隱藏流量，但不支持 GAS 和 Cloudflare 的組合，可能在某些環境下效果不如 MHR-CFW。 | 這個工具專注於 Telegram 的代理需求，功能較為單一，適合特定場景，而 MHR-CFW 提供更廣泛的流量隱藏能力。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的工具。 | low，因為功能較為單一，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的需求不需要使用 Google 的基礎設施，並且希望使 | 如果你的主要需求是 Telegram 的代理，而不是通用的流 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對隱私有高需求的用戶，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境下可能無法正常運作，特別是受到嚴格 DPI 檢測的情況下。
  - 解法：嘗試更改代理設置或使用不同的網路環境。
- [MEDIUM] Cloudflare Worker 配置不當可能導致請求失敗。
  - 解法：仔細檢查 worker.js 的配置，確保 URL 和密碼正確。
- [MEDIUM] 在安裝過程中可能會遇到依賴問題，特別是在不同平台上。
  - 解法：確保使用正確的 Python 版本和依賴包，必要時使用虛擬環境。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在受限網路環境中安全隱藏流量的開發者 | 非常適合 | 提供了有效的流量隱藏解決方案，能夠繞過 DPI 檢測。 |
| 對隱私有高需求的用戶 | 適合 | 能夠隱藏實際流量目的地，保護用戶隱私。 |
| 小型團隊或個人專案 | 普通 | 雖然功能強大，但設置和配置可能需要一定的技術背景。 |
| 大型企業的核心網路流量管理 | 不適合 | 目前仍處於 beta 階段，穩定性和支持可能不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到有效的流量隱藏效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，但需要存取 Google 和 Cloudflare 的 API，需妥善管理憑證和密碼。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 258 |
| Open Issues | 81 |
| Issue 解決率 | 35% (43 closed) |
| 最後推送 | 2026-05-08 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 99 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/denuitt1/mhr-cfw) |
| Topics | `cloudflare-workers` `domain-fronting` `dpi` `dpi-bypass` `google-apps-script` `http` `mitm` `proxy` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `cryptography` `h2` `certifi` `brotli` `zstandard`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 94
>     "JavaScript" : 5
>     "Batchfile" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@denuitt1](https://github.com/denuitt1) | 50 |
> | [@cpog72031](https://github.com/cpog72031) | 38 |
> | [@loada2204](https://github.com/loada2204) | 17 |
> | [@onlymaj](https://github.com/onlymaj) | 4 |
> | [@hrnrxb](https://github.com/hrnrxb) | 1 |

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

**社群活躍度**：社群活躍度中等，開放問題解決率約 35%。
**連結**：[文件](https://github.com/denuitt1/mhr-cfw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-08）
> **活躍天數** 3 天 · **最新 commit** Revise README for clarity and additional information

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#62](https://github.com/denuitt1/mhr-cfw/issues/62) | Socks not working on lan sharing ios | 5 | 1 |
> | [#3](https://github.com/denuitt1/mhr-cfw/issues/3) | 502 Bad JSON: | 4 | 9 |
> | [#73](https://github.com/denuitt1/mhr-cfw/issues/73) | آپلود مجدد فیلم آموزشی | 3 | 1 |
> | [#68](https://github.com/denuitt1/mhr-cfw/issues/68) | -1ms - lan sharing problem | 3 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MHR-CFW
> 
> ### MITM Domain-Fronted HTTP Relay + Cloudflare Worker Exit
> 
> [](https://github.com/denuitt1/mhr-cfw)
> 
> 
> | [English](README.md) | [Persian](README_FA.md) |
> | :---: | :---: |
> 
> ---
> 
> ## How It Works
> 
> ### 1 - GAS + Cloudflare Worker Exit
> ```
> Client -> Local Relay -> Google/CDN Front -> GAS (Google Apps Script) Relay -> Cloudflare Worker -> Exit
>             |
>             +-> Shows www.google.com to network DPI filter
> ```
> 
> ### 2 - GAS + Cloudflare Worker Middle + Self-Hosted Upstream Forwarder Relay Exit
> ```
> Client -> Local Relay -> Google/CDN Front -> GAS (Google Apps Script) Relay -> Cloudflare Worker -> Self-Hosted Upstream Forwarder -> Exit
>             |
>             +-> Shows www.google.com to network DPI filter
> ```
> 
> In normal use, the browser sends traffic to the proxy running on your computer.
> The proxy sends that traffic through Google-facing infrastructure so the network only sees an allowed domain such as `www.google.com`.
> Your deployed relay then fetches the real website through cloudflare worker and sends the response back through the same path.
> 
> This means the filter sees normal-looking Google traffic, while the actual destination stays hidden inside the relay request.
> 
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
> 5. Open the [`worker.js`](deploy/cloudflare-worker/worker.js) file from this project (under `deploy/`), **copy everything**, and paste it into the Apps Script editor.
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
> 4. Open the [`Code.gs`](deploy/gas/Code.gs) file from this project (under `deploy/`), **copy everything**, and paste it into the Apps Script editor.
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
> The reference implementation is [`deploy/upstream-forwarder/upstream_forwarder.js`](deploy/upstream-forwarder/upstream_forwarder.js).
> It needs Node 18+ and no dependencies. Run it behind Caddy or nginx with TLS —
> the Worker rejects non-HTTPS forwarder URLs.
> 
> ```bash
> # On your VPS (Ubuntu/Debian example):
> sudo apt install -y nodejs   # must be 18+
> export AUTH_KEY="some-long-random-string-at-least-32-chars"
> export PORT=8787
> node deploy/upstream-forwarder/upstream_forwarder.js
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
> Browse `https://httpbin.org/ip` through the proxy — you should see the **VPS's IP**, not Cloudflare's. Then revisit a CAPTCHA-protected site that wasn't working — the challenge should now validate.
> 
> > The forwarder must require auth. Without `AUTH_KEY` it refuses to start. Anyone with the URL and key can use it as a relay, so keep both secret.
> 
> ---
> 
> ## Disclaimer
> 
> `MHR-CFW` is provided for educational, testing, and research purposes only.
> 
> - **Provided without warranty:** This software is provided "AS IS", without express or implied warranty, including merchantability, fitness for a particular purpose, and non-infringement.
> - **Limitation of liability:** The developers and contributors are not responsible for any direct, indirect, incidental, consequential, or other damages resulting from the use of this project or the inability to use it.
> - **User responsibility:** Running this project outside controlled test environments may af

## 延伸閱讀

相關概念：[[隱私保護]] · [[DPI]] · [[代理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

[GitHub](https://github.com/denuitt1/mhr-cfw)

## 相關收錄

> [!note]- 直接競品（同子分類：隱私保護）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "隱私保護" AND file.name != "denuitt1--mhr-cfw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "denuitt1--mhr-cfw"
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
> const concepts = ["隱私保護","DPI","代理"];
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
