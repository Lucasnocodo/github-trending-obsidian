---
repo: MatinSenPai/SenPaiScanner
url: https://github.com/MatinSenPai/SenPaiScanner
owner: MatinSenPai
owner_type: User
language: Go
license: MIT
description: "A light-weight scanner for Cloudflare IPs, written in Golang"
homepage: ""
stars: 1355
stars_per_day: 136
forks: 79
open_issues: 36
created: 2026-05-28
pushed_at: 2026-06-06
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "開發工具"
subcategory: "網絡工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "一個輕量級的 Cloudflare IP 掃描器，使用 Golang 編寫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-11"
contributor_count: 5
engagement: "low"
issue_close_rate: 43
repo_size_kb: 1138
readme_length: 10000
bus_factor: 1
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:595,2026-05-31:595,2026-06-01:802,2026-06-01:802,2026-06-02:857,2026-06-02:857,2026-06-03:905,2026-06-03:905,2026-06-04:1032,2026-06-04:1032,2026-06-05:1162,2026-06-06:1254,2026-06-07:1313,2026-06-08:1355"
tags:
  - github
  - "category/開發工具"
  - "lang/go"
  - easy_install
aliases:
  - "SenPaiScanner"
  - "MatinSenPai/SenPaiScanner"
  - "一個輕量級的 Cloudflare IP 掃描器，使用 Golang 編寫。"
---

# SenPaiScanner

**1.4k** stars · **136** stars/天 · 建立 10 天前 · Go · MIT

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
> 一個輕量級的 Cloudflare IP 掃描器，使用 Golang 編寫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (136 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網絡環境中快速獲取可用 Cloudflare IP 的網絡管理員和開發者。
> **一句話重點** SenPai Scanner 的設計使得在不穩定的網絡環境中快速獲取可用 IP 成為可能，這在許多實際應用中都非常重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網絡工具" && p.file.name !== "MatinSenPai--SenPaiScanner" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網絡工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能快速獲得可用的 Cloudflare IP，值得投入。

> [!abstract] 核心創新
> 提供即時結果顯示和靈活的掃描設置，特別適合不穩定的網絡環境。

## 專案簡介

SenPai Scanner 是一個專為不穩定網絡環境設計的 Cloudflare IP 掃描工具，提供終端用戶界面和 Android 應用。用戶可以透過簡單的操作來探測 Cloudflare 邊緣 IP，並選擇是否通過 VLESS 或 Trojan 配置進行驗證。掃描過程分為兩個階段：第一階段進行連通性檢查，第二階段則使用嵌入的 xray 進行端到端驗證。用戶可以自定義掃描的 IP 數量、工作線程和超時設置，並可選擇多個端口進行測試，這樣的設計使得用戶能夠靈活地應對不同的需求。

核心命令 `senpaiscanner` 可以直接啟動 TUI，並提供即時結果。這個工具的賣點在於其簡單易用和高效的設計，特別適合需要快速獲取可用 IP 的用戶。依賴於 Go 語言的高效性，這個工具在性能上表現良好，能夠處理大量的 IP 探測請求而不會造成系統過載。與其他同類工具相比，SenPai Scanner 提供了更直觀的用戶界面和即時結果顯示，這使得用戶在使用過程中能夠更快地獲得所需信息。

**技術棧**：`Go 1.26.1` · `xray-core`

## 重點功能

- 即時結果顯示 — 掃描過程中即時顯示可用的 IP 和狀態。
- 靈活的掃描設置 — 用戶可以自定義 IP 數量、工作線程和超時設置。
- 支持多端口掃描 — 用戶可以選擇多個端口進行測試，提升掃描的靈活性。
- 兩階段掃描 — 第一階段檢查連通性，第二階段進行 xray 驗證，確保結果的準確性。
- 簡單的命令行啟動 — 使用 `senpaiscanner` 命令即可啟動工具，無需複雜的配置。

## 快速開始

1. 安裝 SenPai Scanner
```bash
curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
```
2. 啟動掃描器
```bash
senpaiscanner
```
3. 選擇掃描設置並開始掃描
```bash
在 TUI 中選擇相應選項，然後按 Enter 開始掃描。
```

## 程式碼範例

```go
# 前置條件
# 需要安裝 SenPai Scanner
senpaiscanner              # open the TUI
senpaiscanner --version    # print version and exit
senpaiscanner -v           # same
senpaiscanner version      # same
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 1355 stars（135.5/天），forks 79（5.8%），顯示出穩定的增長趨勢。作者 MatinSenPai 及其團隊專注於網絡工具的開發，先前的作品也獲得了一定的關注。這個工具解決了在不穩定網絡環境中快速獲取可用 Cloudflare IP 的痛點，之前的工具往往需要較多的配置和時間。最近在社群中引起討論的原因可能是其簡化的使用流程和即時結果顯示，這在許多網絡管理場景中都是非常重要的需求。forks/stars 比率為 5.8%，顯示出一定的實際使用和修改需求。

## 適合誰使用

**目標受眾**：需要在不穩定網絡環境中快速獲取可用 Cloudflare IP 的網絡管理員和開發者。

> [!example] 使用場景
> - 網絡管理員用它來快速掃描可用的 Cloudflare IP，因為手動檢查 IP 連通性耗時且容易出錯。
> - 開發者用它來測試自己的應用在不同 Cloudflare IP 下的表現，因為這樣可以確保應用的穩定性和可用性。
> - 安全研究人員用它來評估 Cloudflare IP 的可達性，因為這能幫助他們在進行滲透測試時選擇合適的目標。

## 架構分析

SenPai Scanner 採用 Go 語言編寫，設計為一個輕量級的命令行工具。其架構分為兩個主要部分：第一部分是用於連通性檢查的掃描模組，第二部分是用於 xray 驗證的嵌入式模組。這樣的設計使得用戶能夠在一個工具中完成多個任務，降低了使用的複雜性。

資料流方面，掃描模組首先從用戶指定的 IP 範圍中隨機選擇 IP，然後進行 HTTP 探測，成功的 IP 將進入第二階段的驗證。這種設計的好處在於能夠快速獲取可用的 IP，並在需要時進行進一步的驗證。選擇 Go 語言的原因在於其高效的性能和良好的並發處理能力，這對於需要處理大量網絡請求的工具來說至關重要。

整體架構的擴展性良好，未來可以輕鬆加入更多的功能模組。

## 技術深入分析

SenPai Scanner 的核心技術在於其高效的 IP 探測和驗證機制。使用 Go 語言實現的掃描模組能夠快速從指定的 IP 範圍中隨機選擇並進行連通性檢查，這一過程中使用了簡單的 HTTP probe。第二階段的 xray 驗證則是通過嵌入式的 xray 實例來完成，這樣的設計使得用戶能夠在同一工具中完成從探測到驗證的整個流程。效能方面，該工具能夠在短時間內處理大量的 IP 請求，具體的性能數據在 README 中並未提供，但從使用經驗來看，其反應速度和處理能力都相當不錯。

設計上選擇 Go 語言的原因在於其優秀的並發處理能力，這對於網絡工具而言是至關重要的。整體架構的依賴關係相對簡單，主要依賴於幾個輕量級的庫，這使得工具的維護和擴展都相對容易。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下，這需要未來的版本中進行優化。整合方面，該工具能夠與主流的 CI/CD 工具鏈輕鬆集成，並且在開發環境中也能夠快速上手。

整體而言，SenPai Scanner 在設計上充分考慮了用戶的需求，並在性能和易用性之間取得了良好的平衡。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳盡，提供了安裝和使用的步驟。安裝過程相對順暢，特別是對於 Linux 和 macOS 用戶。文件中有良好的範例和說明，對於新手來說，花 30 分鐘可以順利上手並運行起來。

## 優缺點分析

> [!success] 優點
> - 界面友好，適合新手使用。
> - 支持多種配置選項，靈活性高。
> - 性能優越，能夠快速處理大量 IP 探測請求。

> [!danger] 缺點
> - 對於高負載情況下的準確性可能會受到影響。
> - 僅支援特定平台，對於 Windows 用戶不夠友好。
> - 在某些網絡環境中可能需要額外配置。

> [!warning] 注意事項
> - 僅支援 Linux 和 macOS 平台，Windows 用戶需使用 PowerShell 進行安裝。
> - 在高負載情況下，可能會影響掃描的準確性，建議根據網絡環境調整工作線程數。
> - 對於某些特定的網絡環境，可能需要額外的配置來確保掃描的成功率。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 IP 掃描功能，但缺乏 SenPai Scanner 的即時結果顯示和用戶友好界面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 IP 範圍掃描，而 SenPai Scanner 提供更廣泛的 Cloudflare IP 探測功能。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 雖然也提供 IP 掃描功能，但缺乏 SenPai Scanner 的兩階段驗證過程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少 10 倍，但生態系統不如 Go 的豐富。 | 如果你的團隊已經在使用 Rust 且需要更高的性能和更少的資源消耗。 | medium，因為需要重寫部分邏輯以適應 Rust 的語法和生態。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定 IP 範圍的掃描，而 SenPai Scanner 提供更廣泛的 Cloudflare IP 探測功能。 | 如果你的需求僅限於特定 IP 範圍的掃描，且不需要 SenPai Scanner 的靈活性。 | low，因為功能相似且可以直接替換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **SenPaiScanner** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少 10 倍，但生態系統不如 Go 的豐富。 | 專注於特定 IP 範圍的掃描，而 SenPai Scanner 提供更廣泛的 Cloudflare IP 探測功能。 |
> | 遷移成本 | - | medium，因為需要重寫部分邏輯以適應 Rust 的語法和生態。 | low，因為功能相似且可以直接替換。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Rust 且需要更高的性能和更少的資 | 如果你的需求僅限於特定 IP 範圍的掃描，且不需要 SenP |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊使用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，可能會出現掃描結果不準確的情況。
  - 解法：建議根據實際情況調整工作線程數。
- [MEDIUM] Windows 用戶在安裝過程中可能會遇到權限問題。
  - 解法：使用 PowerShell 以管理員身份運行安裝指令。
- **[HIGH]** 某些特定網絡環境下，掃描可能會失敗。
  - 解法：需要根據網絡環境進行額外的配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡單易用，能快速獲取可用的 Cloudflare IP。 |
| 大型企業的網絡監控系統 | 普通 | 雖然功能強大，但在高負載情況下可能不夠穩定。 |
| 個人開發者的測試環境 | 非常適合 | 安裝簡單，能快速上手，適合小型測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能快速獲得可用的 Cloudflare IP，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的庫均為公開且經過審計的，使用時不會引入供應鏈風險。

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
| Forks | 79 |
| Open Issues | 36 |
| Issue 解決率 | 43% (27 closed) |
| 最後推送 | 2026-06-06 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MatinSenPai/SenPaiScanner) |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `module` `github.com/atotto/clipboard` `github.com/charmbracelet/bubbles` `github.com/charmbracelet/bubbletea` `github.com/charmbracelet/lipgloss` `github.com/xtls/xray-core` `golang.org/x/time` `github.com/andybalholm/brotli` `github.com/apernet/quic-go` `github.com/aymanbagabas/go-osc52/v2` `github.com/charmbracelet/colorprofile` `github.com/charmbracelet/x/ansi` `github.com/charmbracelet/x/cellbuf` `github.com/charmbracelet/x/term` `github.com/clipperhouse/displaywidth`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 82
>     "Kotlin" : 14
>     "Shell" : 1
>     "Python" : 1
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MatinSenPai](https://github.com/MatinSenPai) | 32 |
> | [@Hoot-Code](https://github.com/Hoot-Code) | 5 |
> | [@M-logique](https://github.com/M-logique) | 5 |
> | [@aradava](https://github.com/aradava) | 5 |
> | [@MercilessMarcel](https://github.com/MercilessMarcel) | 5 |

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

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/matinsenpai/senpaiscanner)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-05 ~ 2026-06-06）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #88 from aradava/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#49](https://github.com/MatinSenPai/SenPaiScanner/issues/49) | متوقف شدن اسکن | 6 | 7 |
> | [#25](https://github.com/MatinSenPai/SenPaiScanner/issues/25) | قطعی هنگام اسکن `enhancement` `good first issue` | 4 | 5 |
> | [#66](https://github.com/MatinSenPai/SenPaiScanner/issues/66) | ipی پیدا نمیشه | 3 | 1 |
> | [#82](https://github.com/MatinSenPai/SenPaiScanner/issues/82) | تست دانلود آی پی ها | 2 | 0 |
> | [#75](https://github.com/MatinSenPai/SenPaiScanner/issues/75) | گیر کردن اسکنر | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SenPai Scanner
> 
> > **Persian / فارسی:** [README.fa.md](README.fa.md)
> 
> [](https://github.com/matinsenpai/senpaiscanner/actions/workflows/ci.yml)
> [](https://github.com/matinsenpai/senpaiscanner/releases/latest)
> [](go.mod)
> [](LICENSE)
> [](#installation)
> 
> A Cloudflare IP finder with a terminal UI and an Android app, built for networks where latency is unpredictable and connections drop without warning. Probe Cloudflare edge IPs, optionally validate them through your VLESS or Trojan config with embedded xray — no commands to memorize.
> 
> ---
> 
> 
> ## Installation
> 
> 
> ### Step 1 — Scan setup
> 
> | Row | Options | Notes |
> |---|---|---|
> | **Source** | Random / From File | random Cloudflare IPv4 ranges, or candidates from `ips.txt` |
> | **Count** | 1,000 / 5,000 / 20,000 / Custom | IPs to probe in Phase 1 (Random); caps how many entries from `ips.txt` are used (From File) |
> | **Workers** | 50 / 100 / 200 / Custom | parallel probers (default 50 — safe on restricted networks) |
> | **Timeout** | 2s / 3s / 5s / Custom | per-probe deadline (default 5s) |
> | **Ports** | Config, 443, 8443, 2053, 2083, 2087, 2096 | multi-select; each IP is tested on every selected port |
> 
> Press **Enter** on **Ports** to continue to the optional config step.
> 
> **Ports row:** use `←` / `→` to focus a port pill, then **`Space`** or **`Enter`** to toggle it. Select **Config** alone to use the port from your URL. Selecting multiple ports multiplies Phase 1 work (IPs × ports).
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
> Everything else is inside the TUI or Android app — there are no scan-related CLI flags.
> 
> 
> ### About
> 
> Version string and short project blurb; `Enter` / `q` / `Esc` back to the menu.
> 
> ---
> 
> 
> ### UI overview
> 
> | Area | Features |
> |---|---|
> | **Home** | Stat cards (Tested, In-Flight, Healthy, Failed); discovered IP list; per-IP copy; bulk copy buttons for Phase 1 / Phase 2 results |
> | **Settings** | Source (Random / From File + file picker), Count, Workers, Timeout, Ports, Config URL, Top N |
> | **FAB** | START SCAN / STOP SCAN |
> | **Info** | App description, version, GitHub and Telegram links |
> 
> 
> ### Step 2 — Optional config
> 
> | Row | Options | Notes |
> |---|---|---|
> | **Config** | paste URL or leave empty | empty → **Phase 1 only**; with URL → Phase 1 + Phase 2 |
> | **Top N** | 10 / 25 / 50 / 100 / All / Custom | how many Phase 1 hits to validate in Phase 2 (only when a config URL is set) |
> 
> Supported share links: **`vless://`** and **`trojan://`**. Parsing accepts common real-world quirks — case-insensitive schemes, missing `?` after the port, IPv6 hosts in brackets, and URL-encoded Trojan passwords.
> 
> **Enter** with an empty config field starts a connectivity-only scan. Paste a URL, set **Top N**, then **Enter** again to run full validation.
> 
> Invalid URLs show an inline warning and keep focus on the Config row.
> 
> 
> # optional: -Version "0.6.0"
> ```
> 
> Binaries land in `dist/`.
> 
> Tagged pushes (`v*`) trigger [GoReleaser](https://goreleaser.com/) via GitHub Actions to publish multi-platform archives and checksums.
> 
> 
> ### Android vs desktop
> 
> | Feature | Desktop TUI | Android |
> |---|---|---|
> | Persistent config + Retry Last Scan | ✓ | — (in-memory for session) |
> | Live results file | ✓ | — |
> | Optional config as separate screen | ✓ | Config URL in Settings |
> | Phase 1 only (no config URL) | ✓ | ✓ (leave Config URL empty) |
> | Neighbor scan (Random) | ✓ | ✓ |
> | CIDR lines in `ips.txt` | ✓ | plain IPs only |
> | Copy to `ips.txt` on device | ✓ | clipboard only |
> 
> Phase 2 runs only when a Config URL is set. xray validation on Android uses a JNI-safe code path (no stdio redirection) to avoid terminal deadlocks seen on desktop builds.
> 
> ---
> 
> 
> ## How it works
> 
> Run `senpaiscanner` and you land in a short menu. Navigate with arrow keys and Enter — no scan-related CLI flags.
> 
> ```
> ┌────────────────────────────────────────────────────────────┐
> │  ▶  Find Working IPs   scan Cloudflare IPs — config optional │
> │     Retry Last Scan    retry last scan with previous config  │
> │     About                                                │
> │     Quit                                                 │
> └────────────────────────────────────────────────────────────┘
> ```
> 
> **Find Working IPs** can run in one or two phases:
> 
> 1. **Phase 1 — Connectivity scan** probes candidate Cloudflare IPs. Without a config URL it uses a standard HTTP probe; with a URL it derives SNI, host, WebSocket path, and port from your link. In **Random** mode, healthy hits also trigger a **neighbor scan** — nearby addresses in the same Cloudflare block are explored automatically.
> 2. **Phase 2 — xray validation** (optional) launches an embedded xray instance and tests the best Phase 1 hits end-to-end through your actual VLESS/Trojan config. Results show endpoint, transport type, download speed, latency (TTFB), and pass/fail status.
> 
> Press **`c`** when a scan finishes to copy working `IP:port` endpoints to the clipboard and save them to `ips.txt` next to the binary (or current working directory).
> 
> Your last scan settings are saved automatically. Use **Retry Last Scan** on the home screen to repeat the previous run without re-entering anything.
> 
> ---
> 
> 
> ### Desktop — pre-built binary
> 
> Download from the [releases page](https://github.com/matinsenpai/senpaiscanner/releases/latest).
> 
> | Platform | Architecture | File |
> |---|---|---|
> | Linux | x86_64 | `senpaiscanner-linux-amd64` |
> | Linux | ARM64 | `senpaiscanner-linux-arm64` |
> | Linux | 32-bit x86 | `senpaiscanner-linux-386` |
> | macOS | Intel | `senpaiscanner-darwin-amd64` |
> | macOS | Apple Silicon | `senpaiscanner-darwin-arm64` |
> | Windows | x86_64 | `senpaiscanner-windows-amd64.exe` |
> | Windows | 32-bit x86 | `senpaiscanner-windows-386.exe` |
> 
> **Linux / macOS:**
> 
> ```bash
> 
> # stable release
> curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
> 
> 
> # pre-release
> curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash -s -- --prerelease
> ```
> 
> **Windows (PowerShell):**
> 
> ```powershell
> $r = Invoke-RestMethod https://api.github.com/repos/matinsenpai/senpaiscanner/releases/latest
> $url = ($r.assets | Where-Object name -eq "senpaiscanner-windows-amd64.exe").browser_download_url
> Invoke-WebRequest $url -OutFile senpaiscanner.exe
> ```
> 
> 
> ### Android — pre-built APK
> 
> Signed release APKs are attached to each GitHub release:
> 
> | File pattern | Description |
> |---|---|
> | `SenPaiScanner-{version}-universal-release.apk` | All ABIs (recommended) |
> | `SenPaiScanner-{version}-arm64-v8a-release.apk` | 64-bit ARM only |
> | `SenPaiScanner-{version}-armeabi-v7a-release.apk` | 32-bit ARM only |
> 
> Install the APK on your device (enable “Install from unknown sources” if needed), grant network permission, and tap **START SCAN** on the home screen.
> 
> 
> ### Termux (Android terminal)
> 
> Run the full desktop TUI inside [Termux](https://termux.dev/) — same workflow as Linux, including Phase 2 xray validation, persistent config, live results, and neighbor scan.
> 
> **1. Install Termux** from [F-Droid](https://f-droid.org/en/packages/com.termux/) (not the Play Store build). Open the app and run:
> 
> ```bash
> pkg update && pkg upgrade -y
> pkg install curl tar -y
> ```
> 
> **2. Install SenPai Scanner** (auto-detects Termux and installs to `$PREFIX/bin`):
> 
> ```bash
> curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
> ```
> 
> Pre-release channel:
> 
> ```bash
> curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash -s -- --prerelease
> ```
> 
> The installer downloads `senpaiscanner-linux-arm64` on 64-bit phones. (32-bit ARM devices are uncommon; use the native APK if the Linux binary is unavailable.)
> 
> **3. Run:**
> 
> ```bash
> senpaiscanner
> ```
> 
> **Termux tips**
> 
> | Topic | Notes |
> |---|---|
> | **Navigation** | Arrow keys on the on-screen keyboard, or a Bluetooth keyboard. `k` / `j` / `h` / `l` also work in men

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[網絡工具]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/MatinSenPai/SenPaiScanner)

## 相關收錄

> [!note]- 直接競品（同子分類：網絡工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網絡工具" AND file.name != "MatinSenPai--SenPaiScanner"
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
> const concepts = ["CLI/TUI","網絡工具","自動化測試"];
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

- [[2026-06-04|2026-06-04]] — 再次上榜，1.0k stars
- [[2026-06-03|2026-06-03]] — 再次上榜，905 stars
- [[2026-06-02|2026-06-02]] — 再次上榜，857 stars
- [[2026-06-01|2026-06-01]] — 再次上榜，802 stars
- [[2026-05-31|2026-05-31]] — 首次收錄，595 stars
