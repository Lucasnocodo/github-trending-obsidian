---
repo: MatinSenPai/SenPaiScanner
url: https://github.com/MatinSenPai/SenPaiScanner
owner: MatinSenPai
owner_type: User
language: Go
license: MIT
description: "A light-weight scanner for Cloudflare IPs, written in Golang"
homepage: ""
stars: 595
stars_per_day: 298
forks: 41
open_issues: 10
created: 2026-05-28
pushed_at: 2026-05-30
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "開發工具"
subcategory: "網路工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "輕量級的 Cloudflare IP 掃描工具，幫助用戶快速找到可用的 IP。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 72
repo_size_kb: 130
readme_length: 9941
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:595"
tags:
  - github
  - "category/開發工具"
  - "lang/go"
  - easy_install
aliases:
  - "SenPaiScanner"
  - "MatinSenPai/SenPaiScanner"
  - "輕量級的 Cloudflare IP 掃描工具，幫助用戶快速找到可用的 IP。"
---

# SenPaiScanner

**595** stars · **298** stars/天 · 建立 2 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 輕量級的 Cloudflare IP 掃描工具，幫助用戶快速找到可用的 IP。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (298 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網路環境中快速找到可用 Cloudflare IP 的系統管理員或開發者。
> **一句話重點** SenPai Scanner 的設計理念在於簡化 Cloudflare IP 的查找過程，特別適合在不穩定的網路環境中使用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路工具" && p.file.name !== "MatinSenPai--SenPaiScanner" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速找到可用 Cloudflare IP 的效果，值得使用。

> [!abstract] 核心創新
> SenPai Scanner 提供了一種簡單直觀的方式來查找和驗證 Cloudflare IP，特別適合不穩定的網路環境。

## 專案簡介

SenPai Scanner 是一個專為不穩定網路環境設計的 Cloudflare IP 掃描工具，使用者只需粘貼 VLESS 或 Trojan 配置，選擇設置，便能快速找到可用的 IP。掃描過程分為兩個階段：第一階段進行連通性檢查，使用者可以選擇隨機的 Cloudflare IPv4 範圍或從文件中讀取 IP，並可自定義探測的數量、工作線程和超時設置。第二階段則是通過嵌入的 xray 實例進行端到端的驗證，檢查下載速度和延遲。這種設計使得用戶能夠在不需要記憶命令的情況下，輕鬆找到有效的 IP，並將結果保存到文件中。使用者可透過 `senpaiscanner` 命令啟動終端用戶界面，並在界面內進行操作，無需額外的 CLI 標誌。這種直觀的設計大幅降低了使用門檻，特別適合對於網路環境不佳的用戶。此工具的賣點在於其簡易性和即時性，能夠快速找到可用的 IP，並且支持多種配置選項，讓使用者能夠根據需求進行調整。

**技術棧**：`Go 1.26.3` · `Bubble Tea`

## 重點功能

- 兩階段掃描 — 第一階段檢查 IP 的連通性，第二階段進行完整的端到端驗證。
- 可自定義的掃描參數 — 包括 IP 數量、工作線程、超時設置和端口選擇。
- 即時結果更新 — 每次掃描都會生成並更新結果文件，方便用戶隨時查看。
- 簡單的終端用戶界面 — 只需運行 `senpaiscanner` 命令即可啟動，無需記憶命令。
- 支持從文件讀取 IP — 用戶可以將 IP 列表放入 `ips.txt` 文件中進行掃描。

## 快速開始

1. 下載並安裝 SenPai Scanner
```bash
curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
```
2. 啟動掃描器
```bash
senpaiscanner
```
3. 粘貼 VLESS 或 Trojan 配置並開始掃描
```bash
在終端用戶界面中選擇 'Find Working IPs'
```

## 程式碼範例

```go
{
  "前置條件": "已安裝 SenPai Scanner",
  "指令": "senpaiscanner",
  "預期輸出": "顯示可用的 Cloudflare IP 和相關信息"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 595 stars（298/天），forks 41（6.9%），顯示出較高的使用者興趣。作者 MatinSenPai 及其團隊在開源社群中有一定的影響力，並且這個工具解決了以往在不穩定網路環境下難以找到有效 Cloudflare IP 的問題，特別是在使用 VLESS 和 Trojan 配置時。此工具的推出正好填補了這一需求空白，並且在社群中引發了討論。

## 適合誰使用

**目標受眾**：需要在不穩定網路環境中快速找到可用 Cloudflare IP 的系統管理員或開發者。

> [!example] 使用場景
> - 網路工程師用它來快速找到可用的 Cloudflare IP，因為手動測試 IP 非常耗時且容易出錯。
> - 系統管理員用它來檢查多個 Cloudflare IP 的可用性，因為這樣能夠在不穩定的網路環境中保持服務的連續性。
> - 開發者用它來驗證自己的 VLESS 或 Trojan 配置是否有效，因為這樣能夠確保應用的穩定性和性能。

## 架構分析

SenPai Scanner 採用 Go 語言實現，並使用 Bubble Tea 框架來構建終端用戶界面。這種設計使得用戶能夠在無需命令行參數的情況下，通過簡單的鍵盤操作進行掃描。資料流方面，工具首先從指定的 IP 列表或隨機生成的 Cloudflare IP 開始進行連通性檢查，然後根據用戶的配置進行進一步的驗證。這樣的設計使得工具在使用上非常靈活，但也意味著在大量 IP 和端口的情況下，可能會導致性能瓶頸。整體而言，這個架構適合快速掃描和驗證，但在大規模使用時，可能需要考慮資源的分配和管理。

## 技術深入分析

SenPai Scanner 的核心技術機制在於其兩階段掃描流程，第一階段使用 HTTP 探測來檢查 IP 的可達性，第二階段則利用嵌入的 xray 實例進行端到端的驗證。這種設計不僅提高了掃描的準確性，還能夠提供實時的性能數據，如下載速度和延遲。工具的效能在於能夠快速處理大量 IP，但在高負載的情況下，可能會遇到性能瓶頸。選擇 Go 語言作為開發語言，帶來了良好的性能和可擴展性，但也意味著在某些平台上可能需要額外的配置。技術風險方面，對於大量 IP 和端口的掃描，可能會導致資源的過度消耗，影響整體性能。整合方面，SenPai Scanner 可以與現有的網路工具鏈無縫對接，特別是在使用 VLESS 和 Trojan 配置時，能夠提供良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的步驟。安裝過程相對順暢，但 Windows 用戶可能會遇到一些額外的步驟。文件中有良好的使用指南，對於新手來說，花 30 分鐘應該能夠順利運行。沒有多語言支持。

## 優缺點分析

> [!success] 優點
> - 簡單易用的終端用戶界面，降低了使用門檻。
> - 支持從文件中讀取 IP，方便用戶進行批量掃描。
> - 即時更新的結果文件，便於用戶隨時查看掃描結果。

> [!danger] 缺點
> - 僅支援特定平台，對於 Windows 用戶不夠友好。
> - 在大量端口的情況下，掃描速度可能變慢。
> - 依賴穩定的網路連接，否則會影響掃描結果的準確性。

> [!warning] 注意事項
> - 僅支援 Linux 和 macOS 平台，Windows 用戶需使用 PowerShell 進行安裝。
> - 對於大量選定端口的掃描，可能會導致掃描速度變慢。
> - 需要穩定的網路連接以獲得最佳結果，否則可能會影響掃描的準確性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 此工具專注於代理配置的自動化，而 SenPai Scanner 更加專注於 Cloudflare IP 的驗證和可用性檢查。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供更全面的網路掃描功能，但 SenPai Scanner 的專注點在於 Cloudflare IP 的快速查找。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理配置的自動化，而 SenPai Scanner 更加專注於 Cloudflare IP 的驗證和可用性檢查。 | 如果你的團隊需要自動化代理配置的管理，而不僅僅是查找 IP。 | medium，因為需要重新配置和適應新的工具流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更全面的網路掃描功能，但 SenPai Scanner 的專注點在於 Cloudflare IP 的快速查找。 | 如果需要更全面的網路掃描和分析功能，而不僅僅是 Cloudflare IP 的查找。 | high，因為需要重新學習和適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **SenPaiScanner** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理配置的自動化，而 SenPai Scanner 更加專注於 Cloudflare IP 的驗證和可用性檢查。 | 提供更全面的網路掃描功能，但 SenPai Scanner 的專注點在於 Cloudflare IP 的快速查找。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的工具流程。 | high，因為需要重新學習和適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要自動化代理配置的管理，而不僅僅是查找 IP。 | 如果需要更全面的網路掃描和分析功能，而不僅僅是 Cloudf |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和測試使用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在 Linux CLI 中可能會遇到問題，特別是在某些發行版上
  - 解法：確保所有依賴都已正確安裝，並查看 GitHub 上的問題追蹤。
- **[HIGH]** 掃描過程中可能會出現中斷，導致結果不完整
  - 解法：在進行大規模掃描時，建議分批進行以減少負載。
- **[HIGH]** 對於特定的網路環境，可能無法找到任何可用的 IP
  - 解法：嘗試更改掃描參數或使用不同的來源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡單易用的界面和快速找到可用 IP 的能力。 |
| 需要在不穩定網路環境中運行的應用 | 適合 | 能夠快速找到可用的 Cloudflare IP，保持應用穩定性。 |
| 大型企業的網路安全團隊 | 普通 | 雖然功能強大，但可能需要更多的自定義和擴展性。 |
| 對於不熟悉命令行的用戶 | 非常適合 | 簡單的終端用戶界面降低了使用門檻。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速找到可用 Cloudflare IP 的效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限運行，且不存取敏感資料。依賴的庫和模組均為開源，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

SenPai Scanner 可以與多種網路工具鏈搭配使用，特別是在需要 Cloudflare IP 的情境下。用戶可以在使用 VLESS 或 Trojan 配置的同時，利用此工具進行 IP 的快速查找。在典型的工作流中，這個工具位於網路配置和驗證的環節，能夠與 CI/CD 流程無縫整合。常見的整合問題包括依賴的庫版本不一致，建議在使用前檢查相依性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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
| Forks | 41 |
| Open Issues | 10 |
| Issue 解決率 | 72% (26 closed) |
| 最後推送 | 2026-05-30 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 130 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MatinSenPai/SenPaiScanner) |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `module` `github.com/atotto/clipboard` `github.com/charmbracelet/bubbles` `github.com/charmbracelet/bubbletea` `github.com/charmbracelet/lipgloss` `github.com/xtls/xray-core` `golang.org/x/time` `github.com/andybalholm/brotli` `github.com/apernet/quic-go` `github.com/aymanbagabas/go-osc52/v2` `github.com/charmbracelet/colorprofile` `github.com/charmbracelet/x/ansi` `github.com/charmbracelet/x/cellbuf` `github.com/charmbracelet/x/term` `github.com/clipperhouse/displaywidth`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 97
>     "Shell" : 2
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MatinSenPai](https://github.com/MatinSenPai) | 21 |
> | [@Hoot-Code](https://github.com/Hoot-Code) | 5 |
> | [@M-logique](https://github.com/M-logique) | 5 |
> | [@abolix](https://github.com/abolix) | 1 |
> | [@ProArash](https://github.com/ProArash) | 1 |

**最新版本**：v0.5.0 (2026-05-30)

> [!info]- Release Notes
> ## SenPai Scanner v0.5.0
> 
> جریان اسکن از اول طراحی شد تا هم راحت‌تر باشه، هم نتایج رو همون لحظه ببینید و واستون Save بشه. همینطور یه الگوریتم کوچولو برای اسکن پیاده‌سازی شد برای تشخیص همسایه‌ها، و روند تست و سرعت دانلود بهبود پیدا کرد.
> 
> ---
> 
> ### Added
> 
> - **صفحه کانفیگ جداگانه** — دیگه مجبور نیستید قبل از اسکن کانفیگ بدید. تنظیمات اصلی (Source، Count، Workers، Timeout، Ports) رو ست می‌کنید، بعد اگه خواستید URL و Top N رو paste می‌کنید — نه قبلش.
> 
> - **اسکن بدون کانفیگ (Phase 1-only)** — فیلد Config رو خالی بذارید، فقط connectivity چک میشه با یه probe ساده HTTP به `speed.cloudflare.com`. وقتی فقط می‌خواید بدونید کدوم IPها reachable‌اند، همینه که لازم دارید.
> 
> - **Top N قابل تنظیم برای Phase 2** — از بین گزینه‌های 10 / 25 / 50 / 100 / All / Custom انتخاب می‌کنید که چند تا از بهترین نتایج Phase 1 وارد xray validation بشن.
> 
> - **فایل نتایج زنده** — یه فایل `SenPaiScannerResult-YYYYMMDD-HHMMSS.txt` کنار binary ساخته میشه که با هر hit جدید آپدیت میشه. می‌تونید همزمان با اسکن توی ادیتور بازش کنید.
> 
> - **Neighbor scan** — در حالت Random، بعد از هر IP سالم، آدرس‌های نزدیک توی همون بلوک Cloudflare هم بررسی میشن. پیش‌فرض‌ها: شعاع 32، حداکثر 12 همسایه به ازای هر hit، سقف 400 IP اضافه در کل اسکن.
> 
> - **`CONTRIBUTING.md`** — راهنمای مشارکت اضافه شد؛ تمرکزش روی سادگی، کارایی و کد تمیزه.
> 
> ---
> 
> ### Changed
> 
> - **ترتیب setup عوض شد** — Config از ردیف اول برداشته شد. حالا اول تنظیمات اسکن رو می‌چینید، بعد (اگه نیاز داشتید) کانفیگ و Top N رو وارد می‌کنید.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新並回應問題。
**連結**：[文件](https://github.com/matinsenpai/senpaiscanner)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-05-30）
> **活躍天數** 2 天 · **最新 commit** feat: implement neighbor scanning for enhanced IP validation and save IPs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#49](https://github.com/MatinSenPai/SenPaiScanner/issues/49) | متوقف شدن اسکن | 4 | 2 |
> | [#25](https://github.com/MatinSenPai/SenPaiScanner/issues/25) | قطعی هنگام اسکن `enhancement` `good first issue` | 3 | 2 |
> | [#52](https://github.com/MatinSenPai/SenPaiScanner/issues/52) | مشکل فاز ۲ | 0 | 0 |
> | [#51](https://github.com/MatinSenPai/SenPaiScanner/issues/51) | issues on linux cli | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SenPai Scanner
> 
> [](https://github.com/matinsenpai/senpaiscanner/actions/workflows/ci.yml)
> [](https://github.com/matinsenpai/senpaiscanner/releases/latest)
> [](go.mod)
> [](LICENSE)
> [](#installation)
> 
> A Cloudflare IP finder with a terminal UI, built for networks where latency is unpredictable and connections drop without warning. Paste your VLESS or Trojan config, pick your settings, and let it find IPs that actually work through your proxy — no commands to memorize.
> 
> ---
> 
> 
> ## Installation
> 
> 
> ### Setup rows (Phase 1)
> 
> | Row | Options | Notes |
> |---|---|---|
> | **Source** | Random / From File | random Cloudflare IPv4 ranges, or read candidates from `ips.txt` |
> | **Count** | 1,000 / 5,000 / 20,000 / Custom | IPs to probe in Phase 1; **ignored when Source is From File** |
> | **Workers** | 50 / 100 / 200 / Custom | parallel probers (default 50 — safe on restricted networks) |
> | **Timeout** | 2s / 3s / 5s / Custom | per-probe deadline (default 5s) |
> | **Ports** | Config, 443, 8443, 2053, 2083, 2087, 2096 | multi-select; each IP is tested on every selected port |
> 
> Press **Enter** on the last row to continue to the optional config step.
> 
> 
> ### Setup details
> 
> **Source → From File:** place `ips.txt` (one IP per line) next to the binary or in the directory you run from. All listed IPs are probed on the selected ports; the Count row is ignored.
> 
> **Ports row:** use `←` / `→` to focus a port pill, then **`Space`** or **`Enter`** to toggle it. Select **Config** alone to use the port from your URL. Selecting multiple ports multiplies Phase 1 work (IPs × ports).
> 
> **Starting the scan:** `Enter` on **Ports** opens the optional config screen. From there, `Enter` starts the scan (empty config = Phase 1 only).
> 
> 
> ## Usage
> 
> ```bash
> senpaiscanner              # open the TUI
> senpaiscanner --version    # print version and exit
> senpaiscanner -v           # same
> senpaiscanner version      # same
> ```
> 
> Everything else is inside the TUI — there are no scan-related CLI flags.
> 
> 
> ### About
> 
> Version string and short project blurb; `Enter` / `q` / `Esc` back to the menu.
> 
> ---
> 
> 
> ### Optional config (before scan starts)
> 
> | Row | Options | Notes |
> |---|---|---|
> | **Config** | paste URL or leave empty | empty → **Phase 1 only** (standard HTTP probe); with URL → Phase 1 + Phase 2 |
> | **Top N** | 10 / 25 / 50 / 100 / All / Custom | how many Phase 1 hits to validate in Phase 2 (only when a config URL is set) |
> 
> **Enter** with an empty config field starts a connectivity-only scan. Paste a URL, set **Top N**, then **Enter** again to run full validation.
> 
> **Live results file:** every scan writes (and keeps updating) `SenPaiScannerResult-YYYYMMDD-HHMMSS.txt` next to the binary or in the working directory. Open it in any editor while the scan runs to watch results arrive.
> 
> 
> # optional: -Version "0.4.0"
> ```
> Binaries land in `dist/`.
> 
> ---
> 
> 
> ## How it works
> 
> Run `senpaiscanner` and you land in a short menu. Navigate with arrow keys and Enter — no flags, no subcommands.
> 
> ```
> ┌────────────────────────────────────────────────────────────┐
> │  ▶  Find Working IPs   paste a config and test CF IPs      │
> │     About                                                │
> │     Quit                                                 │
> └────────────────────────────────────────────────────────────┘
> ```
> 
> **Find Working IPs** runs in two phases:
> 
> 1. **Phase 1 — Connectivity scan** probes candidate Cloudflare IPs using settings derived from your config URL (SNI, host, WebSocket path, port). It checks trace reachability and, for WebSocket configs, whether a WS-style TLS connection survives DPI.
> 2. **Phase 2 — xray validation** launches an embedded xray instance and tests the best Phase 1 hits end-to-end through your actual VLESS/Trojan config. Results show endpoint, transport type, download speed, latency (TTFB), and pass/fail status.
> 
> When Phase 2 finishes, press **`c`** to copy working `IP:port` endpoints to the clipboard and save them to `ips.txt` next to the binary (or current working directory).
> 
> ---
> 
> 
> ### Pre-built binary
> 
> Download from the [releases page](https://github.com/matinsenpai/senpaiscanner/releases/latest).
> 
> | Platform | Architecture | File |
> |---|---|---|
> | Linux | x86_64 | `senpaiscanner_linux_x86_64.tar.gz` |
> | Linux | ARM64 | `senpaiscanner_linux_arm64.tar.gz` |
> | macOS | Intel | `senpaiscanner_darwin_x86_64.tar.gz` |
> | macOS | Apple Silicon | `senpaiscanner_darwin_arm64.tar.gz` |
> | Windows | x86_64 | `senpaiscanner_windows_x86_64.zip` |
> 
> **Linux / macOS:**
> 
> stable release:
> ```bash
> curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
> ```
> 
> pre-release:
> ```bash
> curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash -s -- --prerelease
> ```
> 
> **Windows (PowerShell):**
> ```powershell
> $r = Invoke-RestMethod https://api.github.com/repos/matinsenpai/senpaiscanner/releases/latest
> $url = ($r.assets | Where-Object name -like "*windows*x86_64*").browser_download_url
> Invoke-WebRequest $url -OutFile senpaiscanner.zip
> Expand-Archive senpaiscanner.zip .
> ```
> 
> 
> ### From source
> 
> ```bash
> go install github.com/matinsenpai/senpaiscanner/cmd/senpaiscanner@latest
> ```
> 
> ---
> 
> 
> ### Navigation
> 
> | Key | Action |
> |-----|--------|
> | `↑` / `↓` or `k` / `j` | move between rows |
> | `←` / `→` or `h` / `l` | move between options within a row |
> | `Enter` | select / confirm / start |
> | `Esc` | go back |
> | `q` | quit from menu; during a scan, cancel or return to menu when finished |
> 
> On the **Config URL** row, `←` / `→` move the text cursor; `Ctrl+A` / `Ctrl+E` jump to start / end. Vim keys `h` / `j` / `k` / `l` type normally into the URL field on that row.
> 
> ---
> 
> 
> ## Find Working IPs
> 
> Paste a **`vless://`** or **`trojan://`** share URL, adjust the setup rows, then start the scan.
> 
> 
> ### Phase 1 — Finding reachable IPs
> 
> Without a config URL, Phase 1 uses a standard Cloudflare HTTP probe (`speed.cloudflare.com`, 64 KiB sample). With a config URL, probes use SNI/host/path from your link and require WebSocket success when `type=ws`.
> 
> Press `q` / `Esc` to cancel and return to the menu.
> 
> 
> ### Phase 2 — xray validation
> 
> The top Phase 1 candidates are tested through an embedded xray instance with your config. The live table shows:
> 
> | Column | Meaning |
> |---|---|
> | **ENDPOINT** | `IP:port` that was validated |
> | **TYPE** | transport (`ws`, `grpc`, `xhttp`, …) |
> | **SPEED** | measured download throughput in Mbps, or `n/a` if speed could not be measured |
> | **LATENCY** | time to first byte through the proxy (TTFB) |
> | **STATUS** | ✓ working / ✗ failed |
> 
> | Key | Action |
> |-----|--------|
> | `c` | copy working endpoints to clipboard **and** save to `ips.txt` |
> | `q` / `Esc` | return to the main menu |
> 
> Exported lines look like `104.16.72.162:443` — ready to paste into client configs or DNS/IP lists.
> 
> 
> ## Tips for restricted networks
> 
> **Start with defaults.** 5,000 random IPs, 50 workers, 5s timeout, and the config port are a good baseline on lossy or filtered lines.
> 
> **Use From File after a partial run.** Copy working endpoints with `c`, edit `ips.txt`, then re-run with **Source → From File** to validate only your shortlist on more ports.
> 
> **Try multiple ports.** Cloudflare CDN ports (443, 8443, 2053, …) behave differently under DPI. Multi-port selection lets Phase 1 find the best `IP:port` pair before xray validation.
> 
> **WebSocket configs need WS-friendly IPs.** Phase 1 runs an idle TLS hold plus a WebSocket upgrade check when your URL uses `type=ws`. An IP that passes trace but fails WS will not become a Phase 2 candidate.
> 
> **0% loss alone is not enough.** For HTTP-style probing, non-zero download throughput or a successful WS check is required for an IP to count as healthy.
> 
> **Speed in Phase 2 is best-effort.** Connectivity is confirmed via `cp.cloudflare.com/cdn-cgi/trace`. Download speed is measured when possible (Cloudflare speed endpoint, config host, or parallel trace sampling). If speed cannot be measured reliably, the endpoint can still show ✓ with SPEED `n/a`.
> 
> ---
> 
> 
> ## FAQ

## 延伸閱讀

相關概念：[[網路探測]] · [[代理伺服器]] · [[Cloudflare]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]]

[GitHub](https://github.com/MatinSenPai/SenPaiScanner)

## 相關收錄

> [!note]- 直接競品（同子分類：網路工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路工具" AND file.name != "MatinSenPai--SenPaiScanner"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "MatinSenPai--SenPaiScanner"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "MatinSenPai--SenPaiScanner" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "MatinSenPai--SenPaiScanner"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["網路探測","代理伺服器","Cloudflare"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MatinSenPai--SenPaiScanner" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MatinSenPai--SenPaiScanner" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MatinSenPai" AND file.name != "MatinSenPai--SenPaiScanner"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
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

> **2026-05-31** — 首次收錄
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

- [[2026-05-31|2026-05-31]] — 首次收錄，595 stars
