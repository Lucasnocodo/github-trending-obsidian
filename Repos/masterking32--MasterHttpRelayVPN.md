---
repo: masterking32/MasterHttpRelayVPN
url: https://github.com/masterking32/MasterHttpRelayVPN
owner: masterking32
owner_type: User
language: Python
license: MIT
description: "Domain-fronted HTTP/SOCKS5 proxy tunneling traffic through Google Apps Script with MITM TLS interception, HTTP/1-2 multiplexing, and DPI evasion."
homepage: "https://t.me/masterdnsvpn"
stars: 1390
stars_per_day: 232
forks: 137
open_issues: 9
created: 2026-04-20
pushed_at: 2026-04-26
first_seen: 2026-04-25
week: "2026-W17"
month: "2026-04"
category: "安全"
subcategory: "代理工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-25
use_case: "透過 Google Apps Script 隱藏流量，實現 HTTP/SOCKS5 代理，並支持 MITM TLS 攔截和 HTTP/1-2 多路復用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-30"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 277
readme_length: 9954
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-25"
star_history: "2026-04-25:1053,2026-04-26:1246,2026-04-27:1390"
tags:
  - github
  - "category/安全"
  - "lang/python"
  - easy_install
  - "topic/dpi"
  - "topic/http"
  - "topic/mitm"
  - "topic/proxy"
  - "topic/sni"
aliases:
  - "MasterHttpRelayVPN"
  - "masterking32/MasterHttpRelayVPN"
  - "透過 Google Apps Script 隱藏流量，實現 HTTP/SOCKS5 代理，並支持 MITM TLS 攔截"
---

# MasterHttpRelayVPN

**1.1k** stars · **263** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`dpi` `http` `mitm` `proxy` `sni` `vpn`

> [!summary] 一句話摘要
> 透過 Google Apps Script 隱藏流量，實現 HTTP/SOCKS5 代理，並支持 MITM TLS 攔截和 HTTP/1-2 多路復用。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (263 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在不使用 VPS 的情況下安全上網的普通用戶和開發者。
> **一句話重點** 這個專案展示了如何利用現有的雲服務來實現低成本的隱私保護解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理工具" && p.file.name !== "masterking32--MasterHttpRelayVPN" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到安全上網的效果，值得考慮。

> [!abstract] 核心創新
> 這個專案的創新在於利用 Google Apps Script 作為免費的代理中介，無需額外伺服器。

## 專案簡介

MasterHttpRelayVPN 是一款利用 Google Apps Script 進行 HTTP/SOCKS5 代理的工具，能夠隱藏用戶的網絡流量。用戶的瀏覽器將請求發送到本地代理，然後代理將流量偽裝成正常的 Google 流量，從而繞過防火牆。這個過程中，代理會通過 Google 的基礎設施轉發請求，最終獲取目標網站的內容。用戶只需提供 Google Apps Script 的部署 ID，並在首次運行時設置一個隨機密碼。關鍵指令包括 `python3 main.py` 來啟動代理，並可選擇使用 `--socks5-port` 參數來設置 SOCKS5 端口。這個工具的賣點在於無需 VPS 或伺服器，僅需一個免費的 Google 帳戶即可運行。

其技術實作上，使用 Python 和 JavaScript，並依賴 Google Apps Script 作為中介，這樣的設計使得用戶能夠輕鬆繞過地區限制和 DPI 檢測。這種方法的優勢在於簡化了設置過程，並且不需要額外的伺服器維護。相較於傳統的 VPN 方案，這個工具的成本更低，且不需要額外的硬體支持。使用者需要注意的是，這個工具的安全性依賴於用戶正確安裝 CA 證書，否則會出現 HTTPS 警告。整體來說，這個專案適合希望在不增加額外基礎設施的情況下，實現安全上網的用戶。

**技術棧**：`Python 3.10+` · `Google Apps Script`

## 重點功能

- HTTP/SOCKS5 代理 — 支持 HTTP 和 SOCKS5 代理協議，便於用戶靈活選擇。
- MITM TLS 攔截 — 能夠解密和重新加密 HTTPS 流量，確保用戶能夠訪問安全網站。
- 自動 CA 證書安裝 — 在啟動時自動檢查 CA 證書是否受信任，簡化用戶設置過程。
- 多路復用支持 — 使用 HTTP/2 多路復用技術，顯著提升流量傳輸速度。
- 簡單的配置過程 — 提供互動式配置嚮導，快速設置 Google Apps Script 部署 ID 和密碼。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/masterking32/MasterHttpRelayVPN.git && cd MasterHttpRelayVPN
```
2. 啟動代理
```bash
start.bat (Windows) 或 ./start.sh (Linux/macOS)
```
3. 配置 CA 證書
```bash
根據操作系統的指示安裝生成的 ca/ca.crt 證書
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝 Python 3.10+ 和相關依賴",
  "指令": "python3 main.py",
  "預期輸出": "HTTP proxy is running on 127.0.0.1:8085 and SOCKS5 on 127.0.0.1:1080"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1053 stars（263/天），forks 104（9.9%），這顯示出強烈的使用需求。作者 masterking32 及其團隊在開源社群中已有一定影響力，這個專案解決了用戶在無法自由訪問網絡時的痛點，特別是在高 DPI 檢測的環境中。隨著對隱私和自由上網需求的增加，這個工具的出現正好滿足了這一需求。高 forks/stars 比率顯示出許多人在實際修改和使用這個工具，而非僅僅觀望。

## 適合誰使用

**目標受眾**：希望在不使用 VPS 的情況下安全上網的普通用戶和開發者。

> [!example] 使用場景
> - 學生用它來繞過校園網絡限制，安全訪問被封鎖的學術資源，因為它不需要額外的伺服器或 VPN 設置。
> - 自由職業者用它來保護自己的網絡流量，避免被 ISP 監控，因為它能夠將流量偽裝成 Google 的正常流量。
> - 開發者用它來測試應用程序的網絡請求，確保在不同環境下的兼容性，因為它支持 HTTP/2 多路復用，提升了測試效率。

## 架構分析

這個專案的架構基於 Google Apps Script 作為中介，通過 HTTP/SOCKS5 協議與用戶的瀏覽器進行通信。用戶的請求首先發送到本地代理，然後代理將流量偽裝成 Google 流量，最終通過 Google 的基礎設施轉發到目標網站。這樣的設計使得用戶能夠在不需要額外伺服器的情況下，輕鬆繞過網絡限制。選擇 Google 作為中介的代價是依賴於其服務的穩定性和可用性，若 Google 改變政策，可能會影響工具的運作。整體來說，這種架構在小型用戶和開發者中具有良好的擴展性，但在大規模使用時可能會面臨性能瓶頸。

## 技術深入分析

MasterHttpRelayVPN 的核心技術機制是利用 Google Apps Script 作為流量中介，通過 HTTP/SOCKS5 協議與用戶的瀏覽器進行通信。這樣的設計使得用戶的流量看起來像是正常的 Google 流量，從而繞過防火牆和 DPI 檢測。效能方面，該工具可以支持多種編碼格式的解壓縮，並且在使用 HTTP/2 多路復用時能顯著提升速度。選擇 Python 作為主要開發語言，因為其在網絡編程中的靈活性和強大的庫支持，這樣的選擇使得專案的依賴樹相對簡單，降低了維護成本。技術風險方面，依賴 Google 的服務可能會在未來造成不穩定，特別是如果 Google 改變其 API 或服務政策。此外，對於大量用戶的支持，可能會面臨性能瓶頸，特別是在高流量情況下。整合方面，這個工具可以輕鬆與現有的開發環境整合，並且支持多種操作系統，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，安裝過程相對順暢，但需要用戶手動安裝 CA 證書。提供了良好的入門指南，幫助用戶快速上手。文件目前僅提供英文版本，可能對非英語用戶造成一定困難。

## 優缺點分析

> [!success] 優點
> - 無需 VPS 或伺服器，降低了使用成本。
> - 簡單的配置過程，適合非技術用戶。
> - 支持 HTTPS 流量的 MITM 攔截，提供更高的安全性。

> [!danger] 缺點
> - 依賴 Google 的服務，可能面臨政策風險。
> - 需要用戶手動安裝 CA 證書，增加了使用複雜度。
> - 在高流量情況下可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要手動安裝 CA 證書以避免 HTTPS 警告。
> - 在某些環境中可能需要管理員權限來安裝證書。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代理功能，但依賴於自建伺服器，對於不想維護伺服器的用戶不太友好。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的代理服務，適合需要 Telegram 代理的用戶，但不具備 HTTP/SOCKS5 的通用性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用自建伺服器提供代理服務，這樣的設計需要用戶維護伺服器，增加了使用的複雜性。 | 如果你的團隊已經有能力管理伺服器並需要更高的控制權，這個工具會更適合。 | medium，因為需要重構基礎設施和配置伺服器。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的代理服務，適合特定需求，但不具備廣泛的 HTTP/SOCKS5 代理功能。 | 如果你的主要需求是 Telegram 的代理，這個工具會更合適。 | low，因為主要是針對特定應用的配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MasterHttpRelayVPN** | **boneyard** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用自建伺服器提供代理服務，這樣的設計需要用戶維護伺服器，增加了使用的複雜性。 | 專注於 Telegram 的代理服務，適合特定需求，但不具備廣泛的 HTTP/SOCKS5 代理功能。 |
> | 遷移成本 | - | medium，因為需要重構基礎設施和配置伺服器。 | low，因為主要是針對特定應用的配置。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經有能力管理伺服器並需要更高的控制權，這個工具 | 如果你的主要需求是 Telegram 的代理，這個工具會更合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次運行時 CA 證書未自動安裝，導致 HTTPS 警告
  - 解法：手動安裝 CA 證書，或運行 python main.py --install-cert
- [MEDIUM] 在某些環境中需要管理員權限才能安裝證書
  - 解法：以管理員身份運行程序，或手動安裝證書
- [MEDIUM] 高流量情況下可能出現性能瓶頸
  - 解法：考慮使用更強大的硬體或減少同時連接數量

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發環境 | 非常適合 | 簡單的設置過程和低成本使其成為理想選擇。 |
| 需要高性能的商業應用 | 不適合 | 在高流量情況下可能出現性能瓶頸。 |
| 個人用戶希望安全上網 | 非常適合 | 無需額外伺服器，且能有效隱藏流量。 |
| 大型企業的網絡安全解決方案 | 不適合 | 缺乏企業級的支持和穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到安全上網的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，但需要安裝 CA 證書以進行 HTTPS 解密，這可能會帶來一定的安全風險。依賴於 Google 的基礎設施，需注意其服務的穩定性和合規性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MasterHttpRelayVPN 最常與 Google Apps Script 搭配使用，作為一個輕量級的代理解決方案。在開發過程中，該工具可以與現有的 CI/CD 流程整合，並且支持多種操作系統。用戶可以在本地開發環境中輕鬆設置，並通過簡單的命令啟動代理。與主流開發工具的相容性良好，但在某些情況下，可能需要額外的配置來確保無縫整合。常見的整合問題包括 CA 證書的安裝和配置，這需要用戶在初次使用時特別注意。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 MasterHttpRelayVPN 出現之前，用戶通常依賴於傳統的 VPN 服務來隱藏流量，但這些方案往往需要額外的伺服器和高昂的費用。隨著 Google Apps Script 的普及，這個工具的出現讓用戶能夠利用現有的雲服務來實現低成本的隱私保護。這個工具代表了利用雲基礎設施來解決網絡隱私問題的趨勢，未來可能會看到更多類似的解決方案出現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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
| Forks | 104 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-25 |
| 建立日期 | 2026-04-20 |
| 官方網站 | [Link](https://t.me/masterdnsvpn) |
| Repo 大小 | 277 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/masterking32/MasterHttpRelayVPN) |
| Topics | `dpi` `http` `mitm` `proxy` `sni` `vpn` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `cryptography` `h2` `certifi` `brotli` `zstandard`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 97
>     "JavaScript" : 2
>     "Batchfile" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@abolix](https://github.com/abolix) | 44 |
> | [@masterking32](https://github.com/masterking32) | 11 |
> | [@PK3NZO](https://github.com/PK3NZO) | 7 |
> | [@EmranHejazi](https://github.com/EmranHejazi) | 4 |
> | [@BOplaid](https://github.com/BOplaid) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新，但開放問題未解決。
**連結**：[文件](https://github.com/masterking32/MasterHttpRelayVPN)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-25）
> **活躍天數** 3 天 · **最新 commit** fix: implement H1 container keepalive to prevent cold starts when H2 is unavailable

## README 摘錄

> [!info]- 展開查看原文 README
> # MasterHttpRelayVPN
> 
> [](https://github.com/masterking32/MasterHttpRelayVPN)
> 
> **[🇮🇷 راهنمای فارسی (Persian)](README_FA.md)**
> 
> A free tool that lets you access the internet freely by hiding your traffic behind trusted websites like Google. No VPS or server needed — just a free Google account.
> 
> > **How it works in simple terms:** Your browser talks to this tool on your computer. This tool disguises your traffic to look like normal Google traffic. The firewall/filter sees "google.com" and lets it pass. Behind the scenes, a free Google Apps Script relay fetches the real website for you.
> 
> ---
> 
> 
> ## Quick Start (Recommended)
> 
> One command sets up a virtualenv, installs dependencies, launches an interactive
> config wizard, and starts the proxy.
> 
> **Windows:**
> ```cmd
> git clone https://github.com/masterking32/MasterHttpRelayVPN.git
> cd MasterHttpRelayVPN
> start.bat
> ```
> 
> **Linux / macOS:**
> ```bash
> git clone https://github.com/masterking32/MasterHttpRelayVPN.git
> cd MasterHttpRelayVPN
> chmod +x start.sh
> ./start.sh
> ```
> 
> The first time it runs, the wizard asks for your Google Apps Script Deployment ID
> and generates a strong random password for you. Follow the Apps Script deployment
> instructions in **Step 2** below before running the wizard so you have a
> Deployment ID ready.
> 
> After it's running, jump to **Step 5** (browser proxy) and **Step 6** (CA
> certificate).
> 
> ---
> 
> 
> ## Step-by-Step Setup Guide (Manual)
> 
> 
> ### Step 6: Install the CA Certificate (Required for HTTPS)
> 
> When using `apps_script` mode, the tool needs to decrypt and re-encrypt HTTPS traffic locally. It generates a CA certificate on first run. **You must install it** or you'll see security warnings on every website.
> 
> The certificate file is created at `ca/ca.crt` inside the project folder after the first run.
> 
> #### Windows
> 1. Double-click `ca/ca.crt`.
> 2. Click **Install Certificate**.
> 3. Choose **Current User** (or Local Machine for all users).
> 4. Select **Place all certificates in the following store** → click **Browse** → choose **Trusted Root Certification Authorities**.
> 5. Click **Next** → **Finish**.
> 6. Restart your browser.
> 
> #### macOS
> 1. Double-click `ca/ca.crt` — it opens in Keychain Access.
> 2. It goes into the **login** keychain.
> 3. Find the certificate, double-click it.
> 4. Expand **Trust** → set **When using this certificate** to **Always Trust**.
> 5. Close and enter your password. Restart your browser.
> 
> #### Linux (Ubuntu/Debian)
> ```bash
> sudo cp ca/ca.crt /usr/local/share/ca-certificates/masterhttp-relay.crt
> sudo update-ca-certificates
> ```
> Restart your browser.
> 
> #### Firefox (All Platforms)
> Firefox uses its own certificate store, so even after OS-level install you need to do this:
> 1. Go to **Settings** → **Privacy & Security** → **Certificates** → **View Certificates**.
> 2. Go to the **Authorities** tab → click **Import**.
> 3. Select `ca/ca.crt` from the project folder.
> 4. Check **Trust this CA to identify websites** → click **OK**.
> 
> > **Auto-install on startup:** When running in `apps_script` mode the proxy will automatically detect if the CA is not yet trusted and attempt to install it for you. If it succeeds you'll see a confirmation in the log; if it fails (e.g. needs administrator rights) it will print instructions. You can also run `python main.py --install-cert` at any time to (re-)install the certificate.
> 
> > ⚠️ **Security note:** This certificate only works locally on your machine. Don't share the `ca/` folder with anyone. If you want to start fresh, delete the `ca/` folder and the tool will generate a new one.
> 
> ---
> 
> 
> ## Modes Overview
> 
> This project focuses entirely on the **Apps Script** relay — a free Google account is all you need, no server, no VPS, no Cloudflare setup. Everything is configured out of the box for this mode.
> 
> ---
> 
> 
> ### Optional Financial Support 💸
> 
> - TON network:
> 
> `masterking32.ton`
> 
> - EVM-compatible networks (ETH and compatible chains):
> 
> `0x517f07305D6ED781A089322B6cD93d1461bF8652`
> 
> - TRC20 network (TRON):
> 
> `TLApdY8APWkFHHoxebxGY8JhMeChiETqFH`
> 
> Every contribution and every piece of feedback is appreciated. Support directly helps ongoing development and improvement.
> 
> ---
> 
> 
> ### Step 3: Configure
> 
> **Option A — interactive wizard (recommended):**
> ```bash
> python setup.py
> ```
> It'll prompt for your Deployment ID, generate a random `auth_key`, and write
> `config.json` for you.
> 
> **Option B — manual:**
> 
> 1. Copy the example config file:
>    ```bash
>    cp config.example.json config.json
>    ```
>    On Windows, you can also just copy & rename the file manually.
> 
> 2. Open `config.json` in any text editor and fill in your values:
>    ```json
>    {
>      "mode": "apps_script",
>      "google_ip": "216.239.38.120",
>      "front_domain": "www.google.com",
>      "script_id": "PASTE_YOUR_DEPLOYMENT_ID_HERE",
>      "auth_key": "your-secret-password-here",
>      "listen_host": "127.0.0.1",
>      "listen_port": 8085,
>      "socks5_enabled": true,
>      "socks5_port": 1080,
>      "log_level": "INFO",
>      "verify_ssl": true
>    }
>    ```
>    - `script_id` → Paste the Deployment ID from Step 2.
>    - `auth_key` → The **same password** you set in `Code.gs`.
> 
> 
> ## LAN Sharing (Optional)
> 
> By default, the proxy only listens on `127.0.0.1` (localhost), meaning only your computer can use it. To allow other devices on your local network (LAN) to use the proxy:
> 
> 1. Set `"lan_sharing": true` in your `config.json`
> 2. The proxy will automatically listen on all network interfaces (`0.0.0.0`)
> 3. The startup log will show your LAN IP addresses that other devices can connect to
> 
> **Example LAN configuration:**
> ```json
> {
>   "lan_sharing": true,
>   "listen_host": "0.0.0.0",
>   "listen_port": 8085
> }
> ```
> 
> **Security Warning:** When LAN sharing is enabled, anyone on your local network can use your proxy. Ensure your network is trusted and consider additional security measures.
> 
> **On other devices:** Configure them to use your computer's LAN IP (shown in the startup log) and port 8085 as the HTTP proxy.
> 
> ---
> 
> 
> ## Configuration Options
> 
> 
> ### Optional Dependencies
> 
> Install everything from [`requirements.txt`](requirements.txt). All listed packages are optional — the proxy runs with no third-party dependencies in basic modes, but without them you lose features:
> 
> | Package | Provides |
> |---------|----------|
> | `cryptography` | MITM TLS interception (required for `apps_script` mode with HTTPS sites) |
> | `h2` | HTTP/2 multiplexing to the Apps Script relay (significantly faster) |
> | `brotli` | Decompression of `Content-Encoding: br` responses |
> | `zstandard` | Decompression of `Content-Encoding: zstd` responses |
> 
> 
> ## Command Line Options
> 
> ```bash
> python3 main.py                          # Normal start
> python3 main.py -p 9090                  # Use HTTP port 9090 instead
> python3 main.py --socks5-port 1081       # Use SOCKS5 port 1081
> python3 main.py --disable-socks5         # Disable SOCKS5 listener
> python3 main.py --log-level DEBUG        # Show detailed logs
> python3 main.py -c /path/to/config.json  # Use a different config file
> python3 main.py --install-cert           # Install MITM CA certificate and exit
> python3 main.py --no-cert-check          # Skip automatic CA install check on startup
> python3 main.py --scan                   # Scan Google IPs and find the fastest one
> ```
> 
> > **Auto-install:** On startup (MITM mode), the proxy automatically checks if the CA certificate is trusted and attempts to install it. Use `--no-cert-check` to skip this. If auto-install fails (e.g. needs elevation), run `python main.py --install-cert` manually or follow Step 6 above.
> 
> 
> ## Announcement and Support Channel 📢
> 
> For the latest news, releases, and project updates, follow our Telegram channel: [Telegram Channel](https://t.me/masterdnsvpn)
> 
> ---
> 
> 
> ### If you like this project, please support it by starring it on GitHub (⭐). It helps the project get discovered.
> 
> ---
> 
> 
> ## Disclaimer
> 
> MasterHttpRelayVPN is provided for educational, testing, and research purposes only.
> 
> - **Provided without warranty:** This software is provided "AS IS", without express or implied war

## 延伸閱讀

相關概念：[[DPI]] · [[MITM]] · [[HTTP/2]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[openai--privacy-filter|openai/privacy-filter]]

[GitHub](https://github.com/masterking32/MasterHttpRelayVPN) · [官方網站](https://t.me/masterdnsvpn)

## 相關收錄

> [!note]- 直接競品（同子分類：代理工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理工具" AND file.name != "masterking32--MasterHttpRelayVPN"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "masterking32--MasterHttpRelayVPN"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "masterking32--MasterHttpRelayVPN" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "masterking32--MasterHttpRelayVPN"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["DPI","MITM","HTTP/2"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "masterking32--MasterHttpRelayVPN" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "masterking32--MasterHttpRelayVPN" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "masterking32" AND file.name != "masterking32--MasterHttpRelayVPN"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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
> const me = dv.page("Repos/masterking32--MasterHttpRelayVPN");
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

> **2026-04-25** — 首次收錄
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

- [[2026-04-27|2026-04-27]] — 再次上榜，1.4k stars
- [[2026-04-26|2026-04-26]] — 再次上榜，1.2k stars
- [[2026-04-25|2026-04-25]] — 首次收錄，1.1k stars
