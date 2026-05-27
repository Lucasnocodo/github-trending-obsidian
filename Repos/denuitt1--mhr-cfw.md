---
repo: denuitt1/mhr-cfw
url: https://github.com/denuitt1/mhr-cfw
owner: denuitt1
owner_type: User
language: Python
license: MIT
description: "A Domain-Fronting Relay that routes traffic though GAS (Google Apps Script) and forwards it to Cloudflare Workers. Designed to bypass DPI."
homepage: ""
stars: 4253
stars_per_day: 147
forks: 430
open_issues: 126
created: 2026-04-27
pushed_at: 2026-05-10
first_seen: 2026-05-02
week: "2026-W18"
month: "2026-05"
category: "基礎設施"
subcategory: "代理工具"
release_tag: "v2.0.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-02
use_case: "透過 GAS 和 Cloudflare Workers 繞過 DPI 的域名前置中繼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 37
repo_size_kb: 154
readme_length: 10000
bus_factor: 2
last_release_days: 17
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-02"
star_history: "2026-05-02:1316,2026-05-02:1319,2026-05-03:1701,2026-05-03:1703,2026-05-04:1961,2026-05-04:1961,2026-05-05:2166,2026-05-06:2333,2026-05-07:2468,2026-05-08:2584,2026-05-09:2707,2026-05-10:2879,2026-05-12:3194,2026-05-13:3310,2026-05-17:3615,2026-05-18:3665,2026-05-19:3708,2026-05-24:3959,2026-05-27:4253"
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
  - "透過 GAS 和 Cloudflare Workers 繞過 DPI 的域名前置中繼。"
---

# mhr-cfw

**4.3k** stars · **147** stars/天 · 建立 29 天前 · Python · MIT

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

`v2.0.2`

`cloudflare-workers` `domain-fronting` `dpi` `dpi-bypass` `google-apps-script` `http` `mitm` `proxy` `sni`

> [!summary] 一句話摘要
> 透過 GAS 和 Cloudflare Workers 繞過 DPI 的域名前置中繼。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (147 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 16 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在高限制網路環境中保持匿名的開發者和網路工程師。
> **一句話重點** MHR-CFW 的設計使得在高限制環境中保持匿名變得更加容易，尤其是對於需要穩定出口的應用。

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
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 透過 Google Apps Script 和 Cloudflare Workers 提供穩定的出口 IP，實現高效的流量轉發。

## 專案簡介

MHR-CFW 是一個專為繞過深度封包檢測（DPI）而設計的中繼工具，透過 Google Apps Script（GAS）和 Cloudflare Workers 將流量轉發。用戶可以透過設定 SOCKS5 代理來使用此中繼，並且支持在虛擬機或本地網路中共享。這個工具的關鍵賣點在於其能夠隱藏流量來源，並且提供穩定的出口 IP，特別適合需要穩定連接的應用場景。使用者只需設置 `http_proxy` 和 `https_proxy` 環境變數即可開始使用，並可透過 `curl` 測試其功能。技術上，MHR-CFW 使用 Python 和 JavaScript 實現，並依賴於 Google Apps Script 進行流量轉發，這使得其在無需額外伺服器的情況下，能夠有效地繞過網路限制。

相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，MHR-CFW 提供了更為簡單的設置流程和更高的穩定性，尤其在處理 SSL 檢查時。這使得它在需要高匿名性和穩定性的情境下表現更佳。使用者可能會遇到的問題包括上游 HTTP 403 錯誤，這通常與 GAS 的配置有關。這個專案目前處於活躍開發中，社群也相對活躍，解決率為 37%。對於需要穩定出口 IP 的使用者，這是一個值得考慮的選擇。

**技術棧**：`Python 3.10+` · `Node.js 18+` · `Google Apps Script`

## 重點功能

- 域名前置 — 使用 Google Apps Script 和 Cloudflare Workers 繞過 DPI。
- 簡單的 SOCKS5 代理設置 — 只需設置環境變數即可使用。
- 穩定的出口 IP — 透過上游轉發器提供一致的出口地址。
- 虛擬機支持 — 提供詳細的虛擬機配置指南。
- 本地網路共享 — 支持在同一網路中的設備共享代理。

## 快速開始

1. 安裝必要依賴
```bash
pip install -r requirements.txt
```
2. 設置代理環境變數
```bash
export http_proxy='http://localhost:8085'
```
3. 啟動轉發器
```bash
node deploy/upstream-forwarder/upstream_forwarder.js
```

## 程式碼範例

```python
{
  "前置條件": "需要 Node.js 18+ 和 Python 3.10+",
  "指令": "curl -X POST https://forwarder.example.com/fwd -H 'x-upstream-auth: $AUTH_KEY' -H 'content-type: application/json' -d '{\"u\":\"https://httpbin.org/ip\",\"m\":\"GET\",\"h\":{}}'",
  "預期輸出": "應該顯示 VPS 的 IP 地址。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天就累積 4253 stars（147/天），forks 430（10.1%），顯示出強烈的社群關注。作者 denuitt1 之前有多個相關專案，這個專案解決了在高限制環境下的流量轉發問題，之前的解決方案往往需要複雜的設置或不夠穩定。近期的社交媒體討論和技術論壇的分享也促進了其曝光。技術上，隨著 Google Apps Script 的普及，這個工具的可行性大幅提升。高達 10.1% 的 forks/stars 比率顯示出許多開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在高限制網路環境中保持匿名的開發者和網路工程師。

> [!example] 使用場景
> - 網路工程師用它來在受限環境中測試應用，因為它能有效繞過 DPI，保證測試的連貫性。
> - 開發者用它來在虛擬機中配置代理，因為它提供簡單的設置方法，減少了配置時間。
> - 安全研究人員用它來分析流量，因為它能隱藏真實的流量來源，提供更真實的測試環境。

## 架構分析

MHR-CFW 採用 Google Apps Script 作為流量轉發的核心，這使得其能夠在不需要額外伺服器的情況下運行。流量首先經由 GAS 接收，然後轉發至 Cloudflare Workers，這樣的設計使得其能夠有效繞過網路限制。由於使用了 Node.js 來處理上游轉發，這提供了更高的靈活性和擴展性。

然而，這也意味著使用者需要一定的技術背景來配置和維護這個系統。這種架構的主要瓶頸在於 GAS 的限制，可能會影響到流量的處理速度和穩定性。整體而言，這個架構適合需要高匿名性和穩定性的應用場景，但對於不熟悉這些技術的使用者來說，可能會有一定的學習曲線。

## 技術深入分析

MHR-CFW 的核心技術機制在於使用 Google Apps Script 作為流量轉發的中介，這樣的設計使得其能夠在不需要額外伺服器的情況下運行。流量首先經由 GAS 接收，然後轉發至 Cloudflare Workers，這樣的架構不僅提高了靈活性，也能有效繞過各種網路限制。效能方面，這個工具能夠處理相對較大的流量，但在高負載情況下，GAS 的限制可能會成為瓶頸。選擇 Python 和 Node.js 作為主要技術棧，這使得開發者能夠利用現有的生態系統，但也意味著需要一定的學習曲線。設計上的取捨在於，選擇了簡單的設置和高匿名性，但可能會犧牲一些性能。對於需要高匿名性和穩定性的應用場景，這個工具提供了一個不錯的解決方案，但在大規模使用時，可能需要考慮到 GAS 的限制和性能瓶頸。整合方面，這個工具與現有的代理工具鏈相容性良好，能夠輕鬆融入到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用指導和範例。安裝過程相對順暢，但需要注意依賴的版本要求。文件中有針對虛擬機和本地網路共享的具體指南，對新手友好。整體來說，花 30 分鐘能夠成功運行。

## 優缺點分析

> [!success] 優點
> - 提供穩定的出口 IP，適合需要一致性連接的應用。
> - 簡單的設置流程，降低了使用門檻。
> - 支持在虛擬機和本地網路中共享，增加了靈活性。

> [!danger] 缺點
> - 需要一定的技術背景來配置和維護。
> - 可能會遇到 GAS 的限制，影響流量處理速度。
> - 在某些環境下需要額外的 CA 憑證，增加了配置複雜度。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 Google Apps Script 的配置，可能會遇到 HTTP 403 錯誤。
> - 在某些環境下可能需要安裝額外的 CA 憑證以避免 SSL 錯誤。
> - 不支援 Windows 的某些功能，需使用系統證書存儲。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但依賴於更複雜的設置和配置，適合高級用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於隱私保護，但不支持穩定的出口 IP，適合對匿名性要求較高的場景。 |

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
| Forks | 430 |
| Open Issues | 126 |
| Issue 解決率 | 37% (74 closed) |
| 最後推送 | 2026-05-10 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 154 KB |
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
> | [@denuitt1](https://github.com/denuitt1) | 57 |
> | [@cpog72031](https://github.com/cpog72031) | 38 |
> | [@loada2204](https://github.com/loada2204) | 20 |
> | [@onlymaj](https://github.com/onlymaj) | 6 |
> | [@dwrrio](https://github.com/dwrrio) | 3 |

**最新版本**：v2.0.2 (2026-05-10)

> [!info]- Release Notes
> ## What's Changed
> * chore: add GitHub issue templates by @onlymaj in https://github.com/denuitt1/mhr-cfw/pull/120
> * New Video link added by @NTcompanyYT in https://github.com/denuitt1/mhr-cfw/pull/161
> * feat(forwarder): scope upstream forwarder via forwarder_hosts config by @onlymaj in https://github.com/denuitt1/mhr-cfw/pull/160
> * fix(relay): rotate script IDs when one returns a bad response by @onlymaj in https://github.com/denuitt1/mhr-cfw/pull/157
> * add VM and LAN sharing guides by @AryaAhmadii in https://github.com/denuitt1/mhr-cfw/pull/165
> 
> ## New Contributors
> * @NTcompanyYT made their first contribution in https://github.com/denuitt1/mhr-cfw/pull/161
> * @AryaAhmadii made their first contribution in https://github.com/denuitt1/mhr-cfw/pull/165
> 
> **Full Changelog**: https://github.com/denuitt1/mhr-cfw/compare/v2.0.1...v2.0.2

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和問題回應。
**連結**：[文件](https://github.com/denuitt1/mhr-cfw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-05-10）
> **活躍天數** 1 天 · **最新 commit** Update TODO.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#146](https://github.com/denuitt1/mhr-cfw/issues/146) | feat: مشکل نیاوردن تلگرام `enhancement` | 6 | 0 |
> | [#216](https://github.com/denuitt1/mhr-cfw/issues/216) | bug: Relay error: upstream HTTP 403 from script WLHT_C8h `bug` | 5 | 10 |
> | [#154](https://github.com/denuitt1/mhr-cfw/issues/154) | feat: GUI `enhancement` | 5 | 0 |
> | [#166](https://github.com/denuitt1/mhr-cfw/issues/166) | bug: Relay error: upstream HTTP 403 from script gnN1zFHg `bug` | 4 | 4 |
> | [#201](https://github.com/denuitt1/mhr-cfw/issues/201) | نحوه کانفیگ forwarder | 3 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MHR-CFW
> 
> 
> ## How to Use
> 
> 
> ### 5 - Usage
> 
> We recommend using [v2rayN client](https://github.com/2dust/v2rayn) and configuring a socks5 proxy.
> 
> You can also use [FoxyProxy](https://getfoxyproxy.org/)'s [Chrome extension](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp?hl=en) or [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) to use this proxy in your browser.
> 
> 
> ### 7 - Additional Usage Guides
>  
> #### Using the Proxy Inside a Virtual Machine
>  
> When you run a virtual machine (VM), it operates in an isolated network environment separate from the host. By default, the VM cannot directly access services running on `localhost` of the host machine — including this proxy.
>  
> To fix this, you need to find the gateway IP that your hypervisor assigns to the host, then use it instead of `localhost` when configuring the proxy inside the VM.
>  
> **Example: VirtualBox (NAT mode)**
>  
> The host is always reachable from inside the VM at `10.0.2.2`. Set the proxy:
>  
> ```bash
> export http_proxy="http://10.0.2.2:8085"
> export https_proxy="http://10.0.2.2:8085"
> export all_proxy="socks5://10.0.2.2:8085"
> ```
>  
> To make this permanent, add the lines above to `~/.bashrc` and run `source ~/.bashrc`.
>  
> Since this proxy performs SSL inspection, you may see certificate errors. Install the included `ca.crt` to fix them:
>  
> ```bash
> sudo cp ca.crt /usr/local/share/ca-certificates/ && sudo update-ca-certificates
> ```
>  
> ---
>  
> #### Sharing the Proxy Over a Local Network (e.g. Mobile Devices)
>  
> You can use this proxy on your phone or any other device on the same network — no extra software needed.
>  
> **1. Find your host IP**
>  
> ```bash
> 
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
> 
> ### 4. Scope the forwarder to specific hosts (optional)
> 
> By default every request the Worker handles routes through the forwarder, so unrelated traffic also burns VPS bandwidth. To send only the sites that need a stable exit IP through the VPS, list them in `forwarder_hosts` in `config.json` — same syntax as `bypass_hosts` (exact hostname or `.suffix`). Anything not matched falls back to direct `fetch()` on the Worker.
> 
> ```json
> {
>    ...
>    "forwarder_hosts": [
>        "example.com",
>        ".cf-protected-suffix"
>    ]
>    ...
> }
> ```
> 
> Leave the list empty (or remove the key) to keep the historical "forward everything" behavior.
> 
> ---
> 
> 
> ### Why a separate server is required
> 
> Cloudflare Workers don't expose a stable outbound IP — `fetch()` exits through a rotating pool of Cloudflare edge IPs, which is exactly what breaks IP-bound CAPTCHA tokens. Cloudflare's static-egress options (BYOIP, Egress Workers) are Enterprise-tier, so a small VPS with a static IP is the practical workaround. The forwarder is just a thin proxy that re-issues the `fetch()` from a stable address.
> 
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
> 
> ## How It Works
> 
> 
> ### 1 - GAS + Cloudflare Worker Exit
> ```
> Client -> Local Relay -> Google/CDN Front -> GAS (Google Apps Script) Relay -> Cloudflare Worker -> Exit
>             |
>             +-> Shows www.google.com to network DPI filter
> ```
> 
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
> 
> ### 4 - Run
> 
> Click on the `run.bat` file (on windows) or `run.sh` file (on linux) to start the relay.
> 
> If you're running for the first time it will prompt a setup wizard where you have to enter the AUTH_KEY and Google Apps Script Deployment ID.
> You should see a message saying the HTTP proxy is running on `127.0.0.1:8085`
> 
> 
> ### 6 - Test your connection
> 
> Open [ipleak.net](https://ipleak.net) in your browser, you should see your ip address set as cloudflare's.
> 
> 
> 
> 
> 
> # Windows
> ipconfig
>  
> 
> # Linux / macOS
> ip addr
> ```
>  
> Look for the IP of the adapter connected to your router (e.g. `192.168.1.8`).
>  
> **2. Forward the port (Windows only, if the service is bound to localhost)**
>  
> Run

## 延伸閱讀

相關概念：[[DPI]] · [[代理工具]] · [[Google Apps Script]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[432539--gpt2api|432539/gpt2api]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

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
> const concepts = ["DPI","代理工具","Google Apps Script"];
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
