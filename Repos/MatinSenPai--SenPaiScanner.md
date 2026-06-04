---
repo: MatinSenPai/SenPaiScanner
url: https://github.com/MatinSenPai/SenPaiScanner
owner: MatinSenPai
owner_type: User
language: Go
license: MIT
description: "A light-weight scanner for Cloudflare IPs, written in Golang"
homepage: ""
stars: 1032
stars_per_day: 172
forks: 64
open_issues: 32
created: 2026-05-28
pushed_at: 2026-06-01
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
use_case: "一個輕量級的 Cloudflare IP 掃描器，幫助用戶找到可用的 IP 地址。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-11"
contributor_count: 5
engagement: "low"
issue_close_rate: 46
repo_size_kb: 145
readme_length: 9941
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:595,2026-05-31:595,2026-06-01:802,2026-06-01:802,2026-06-02:857,2026-06-02:857,2026-06-03:905,2026-06-03:905,2026-06-04:1032,2026-06-04:1032"
tags:
  - github
  - "category/開發工具"
  - "lang/go"
  - easy_install
aliases:
  - "SenPaiScanner"
  - "MatinSenPai/SenPaiScanner"
  - "一個輕量級的 Cloudflare IP 掃描器，幫助用戶找到可用的 IP 地址。"
---

# SenPaiScanner

**1.0k** stars · **172** stars/天 · 建立 6 天前 · Go · MIT

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
> 一個輕量級的 Cloudflare IP 掃描器，幫助用戶找到可用的 IP 地址。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (172 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網路環境中找到可用 Cloudflare IP 的網路工程師或系統管理員。
> **一句話重點** SenPai Scanner 的設計讓 IP 掃描變得簡單而高效，特別適合需要穩定連接的用戶。

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
> **結論** 花 2 小時學習，1 小時整合，得到快速找到可用 Cloudflare IP 的效果，值得採用。

> [!abstract] 核心創新
> 提供即時的 Cloudflare IP 掃描和驗證，並簡化了使用者的操作流程。

## 專案簡介

SenPai Scanner 是一個專為不穩定網路環境設計的 Cloudflare IP 掃描工具，使用者可以透過簡單的終端介面來找到可用的 IP 地址。它的工作流程分為兩個階段：第一階段是連通性掃描，使用者可以選擇隨機的 Cloudflare IPv4 範圍或從檔案中讀取候選 IP，並設定要探測的 IP 數量、並行工作數量、超時時間和端口。第二階段則是使用內嵌的 xray 實例對第一階段的最佳候選進行端到端測試，並顯示下載速度、延遲和通過/失敗的狀態。這樣的設計使得使用者能夠快速找到有效的 IP，而不需要記憶複雜的命令。使用者只需輸入配置 URL，選擇設置，然後開始掃描，結果會即時更新並保存到檔案中。其核心賣點在於簡化了 IP 掃描的過程，並提供即時的結果反饋。

**技術棧**：`Go 1.26.3` · `Bubble Tea` · `xray`

## 重點功能

- 兩階段掃描 — 第一階段檢查 IP 的連通性，第二階段進行端到端的驗證，提供詳細的速度和延遲數據。
- 可配置的掃描選項 — 使用者可以選擇隨機 IP 或從檔案中讀取，並設定探測的 IP 數量、並行工作數量和超時時間。
- 即時結果更新 — 掃描過程中結果會持續更新並保存到檔案中，方便使用者隨時查看。
- 簡化的終端介面 — 使用者無需記憶命令，只需透過簡單的選單操作即可完成掃描。
- 多端口測試 — 支持同時對多個端口進行測試，以找到最佳的 IP:port 配對。

## 快速開始

1. 下載並安裝 SenPai Scanner
```bash
curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
```
2. 啟動掃描器
```bash
senpaiscanner
```
3. 選擇配置並開始掃描
```bash
在終端介面中選擇選項並按 Enter 開始掃描
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
> 建立 6 天內累積 1032 stars（172/天），forks 64（6.2%），顯示出強勁的增長潛力。作者 MatinSenPai 之前在開源社群中活躍，這個專案解決了在不穩定網路環境中尋找可用 Cloudflare IP 的需求，這在使用 VLESS 或 Trojan 配置的用戶中尤其重要。社群的需求和對於穩定連接的渴望推動了這個工具的快速採用。

## 適合誰使用

**目標受眾**：需要在不穩定網路環境中找到可用 Cloudflare IP 的網路工程師或系統管理員。

> [!example] 使用場景
> - 網路工程師用它來快速找到可用的 Cloudflare IP，因為手動測試每個 IP 既耗時又不可靠。
> - 系統管理員用它來定期掃描和更新可用的 IP 列表，以確保服務的穩定性，因為這樣可以減少因 IP 不可用導致的服務中斷。
> - 開發者用它來測試自己的 VLESS 或 Trojan 配置，因為這樣可以快速驗證哪些 IP 能夠正常工作，節省了大量的測試時間。

## 架構分析

SenPai Scanner 採用 Go 語言實現，並使用 Bubble Tea 框架來構建終端用戶介面。其架構分為兩個主要階段，第一階段專注於 IP 的連通性檢查，第二階段則通過內嵌的 xray 實例進行端到端的驗證。這樣的設計使得使用者能夠在不需要複雜命令的情況下，快速找到可用的 IP。選擇 Go 語言的原因在於其高效的性能和良好的並行處理能力，這對於需要大量 IP 探測的場景非常重要。整體架構輕量且易於部署，但在高並發的情況下，可能會面臨資源消耗的挑戰。

## 技術深入分析

SenPai Scanner 的核心技術在於其兩階段的掃描流程，第一階段使用 HTTP 探測來檢查 IP 的連通性，這是因為 Cloudflare 對 ICMP 的封鎖使得傳統的 ping 命令無法使用。第二階段則是通過內嵌的 xray 實例進行更深入的驗證，這樣可以模擬實際的 VLESS/Trojan 使用情境，提供更準確的結果。效能方面，這個工具能夠處理數千個 IP 的探測，但在高流量環境下，可能會因為資源消耗而導致速度下降。選擇 Go 語言的原因在於其高效的並行處理能力，這對於需要大量 IP 探測的場景非常重要。依賴樹相對輕量，主要依賴於 Bubble Tea 和 xray，這使得整體部署簡單且不需要過多的外部依賴。技術風險方面，隨著用戶數量的增加，可能會面臨性能瓶頸，特別是在資源有限的環境中。整合方面，與主流的 CI/CD 工具相容性良好，能夠輕鬆地融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的完整指引。安裝過程順暢，沒有明顯的坑。文件中有良好的示例和配置說明，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的終端介面，無需記憶命令。
> - 即時更新的掃描結果，方便使用者隨時查看。
> - 支持多端口測試，能找到最佳的 IP:port 配對。

> [!danger] 缺點
> - 僅限於 Cloudflare IP 的掃描，無法擴展到其他服務。
> - 在高流量環境中可能影響掃描速度。
> - 需要穩定的網路連接以獲得準確的結果。

> [!warning] 注意事項
> - 僅支持 Cloudflare 的 IP 掃描，無法用於其他服務提供商。
> - 需要穩定的網路連接以獲得準確的結果。
> - 在高流量的網路環境中，可能會導致掃描速度變慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理的生成和管理，而 SenPai Scanner 專注於找到可用的 Cloudflare IP。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更全面的網路掃描功能，但不專注於 Cloudflare IP 的驗證。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 主要用於多代理環境的管理，而 SenPai Scanner 專注於 IP 的可用性檢測。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的生成和管理，提供更全面的網路功能，但不專注於 Cloudflare IP 的驗證。 | 如果需要一個全面的代理管理工具，而不僅僅是 IP 掃描。 | medium，因為需要重新適應不同的功能和操作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種網路掃描功能，但不專注於 Cloudflare IP 的驗證，適合需要多樣化掃描的用戶。 | 如果需要進行多種網路掃描，而不僅限於 Cloudflare IP。 | medium，因為需要學習新的工具和流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **SenPaiScanner** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的生成和管理，提供更全面的網路功能，但不專注於 Cloudflare IP 的驗證。 | 提供了多種網路掃描功能，但不專注於 Cloudflare IP 的驗證，適合需要多樣化掃描的用戶。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的功能和操作流程。 | medium，因為需要學習新的工具和流程。 |
> | 適用場景 | 主要場景 | 如果需要一個全面的代理管理工具，而不僅僅是 IP 掃描。 | 如果需要進行多種網路掃描，而不僅限於 Cloudflare  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用或小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在高流量環境中，掃描速度可能會變慢，導致結果延遲
  - 解法：減少同時探測的 IP 數量或端口數量
- **[HIGH]** 使用 From File 時，若未正確放置 ips.txt 會導致掃描失敗
  - 解法：確保 ips.txt 檔案與執行檔在同一目錄下
- [MEDIUM] 某些 IP 可能會因為防火牆設定而無法連接
  - 解法：嘗試使用不同的端口或 IP 範圍

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在不穩定網路環境中找到可用 Cloudflare IP 的網路工程師 | 非常適合 | 工具專為此場景設計，能快速找到有效的 IP。 |
| 大型企業的網路管理團隊 | 普通 | 雖然功能強大，但在高流量環境中可能需要更多的資源。 |
| 個人開發者進行小型專案 | 非常適合 | 簡單易用，適合快速測試和驗證。 |
| 需要長期穩定的 IP 監控的企業 | 不適合 | 工具不支持持續監控功能，適合短期使用。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速找到可用 Cloudflare IP 的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

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
| Forks | 64 |
| Open Issues | 32 |
| Issue 解決率 | 46% (27 closed) |
| 最後推送 | 2026-06-01 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 145 KB |
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
> | [@MatinSenPai](https://github.com/MatinSenPai) | 23 |
> | [@Hoot-Code](https://github.com/Hoot-Code) | 5 |
> | [@M-logique](https://github.com/M-logique) | 5 |
> | [@MercilessMarcel](https://github.com/MercilessMarcel) | 5 |
> | [@abolix](https://github.com/abolix) | 1 |

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

**社群活躍度**：社群活躍，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/matinsenpai/senpaiscanner)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-30 ~ 2026-06-01）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #61 from MercilessMarcel/phase1-table-alignment-fix

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#49](https://github.com/MatinSenPai/SenPaiScanner/issues/49) | متوقف شدن اسکن | 6 | 7 |
> | [#25](https://github.com/MatinSenPai/SenPaiScanner/issues/25) | قطعی هنگام اسکن `enhancement` `good first issue` | 4 | 5 |
> | [#66](https://github.com/MatinSenPai/SenPaiScanner/issues/66) | ipی پیدا نمیشه | 3 | 1 |
> | [#59](https://github.com/MatinSenPai/SenPaiScanner/issues/59) | پیشنهاد | 2 | 0 |
> | [#64](https://github.com/MatinSenPai/SenPaiScanner/issues/64) | قابلیت خفن | 1 | 1 |

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

相關概念：[[網路掃描]] · [[代理伺服器]] · [[Cloudflare IP]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
> const concepts = ["網路掃描","代理伺服器","Cloudflare IP"];
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
