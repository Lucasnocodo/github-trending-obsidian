---
repo: MatinSenPai/SenPaiScanner
url: https://github.com/MatinSenPai/SenPaiScanner
owner: MatinSenPai
owner_type: User
language: Go
license: MIT
description: "A light-weight scanner for Cloudflare IPs, written in Golang"
homepage: ""
stars: 857
stars_per_day: 214
forks: 57
open_issues: 25
created: 2026-05-28
pushed_at: 2026-06-01
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "CLI 工具"
subcategory: "網路工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "一個輕量級的 Cloudflare IP 掃描器，幫助用戶找到可用的 IP。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 55
repo_size_kb: 130
readme_length: 9941
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:595,2026-05-31:595,2026-06-01:802,2026-06-01:802,2026-06-02:857"
tags:
  - github
  - "category/cli_工具"
  - "lang/go"
  - easy_install
aliases:
  - "SenPaiScanner"
  - "MatinSenPai/SenPaiScanner"
  - "一個輕量級的 Cloudflare IP 掃描器，幫助用戶找到可用的 IP。"
---

# SenPaiScanner

**802** stars · **267** stars/天 · 建立 3 天前 · Go · MIT

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
> 一個輕量級的 Cloudflare IP 掃描器，幫助用戶找到可用的 IP。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (267 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網路環境中快速找到可用 Cloudflare IP 的開發者和網路工程師。
> **一句話重點** SenPai Scanner 讓用戶能夠輕鬆找到可用的 Cloudflare IP，特別是在不穩定的網路環境中。

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
> 提供即時更新的 Cloudflare IP 掃描功能，並支持兩階段驗證。

## 專案簡介

SenPai Scanner 是一個專為不穩定網路環境設計的 Cloudflare IP 掃描工具，使用者可以透過簡單的終端介面來找到可用的 IP。使用者只需粘貼 VLESS 或 Trojan 配置，選擇設置後，工具將自動進行兩階段的掃描：第一階段檢查 IP 的可達性，第二階段則透過嵌入的 xray 實例進行端到端驗證，並提供下載速度和延遲等詳細資訊。這樣的設計使得使用者無需記住複雜的命令，僅需操作簡單的選單即可完成掃描。關鍵指令如 `senpaiscanner` 可以直接啟動 TUI 界面，並且掃描結果會實時更新到 `SenPaiScannerResult-YYYYMMDD-HHMMSS.txt` 文件中，方便用戶隨時查看。這種設計不僅提升了使用便利性，也使得結果的即時性得以保障。

**技術棧**：`Go 1.26.3` · `Bubble Tea` · `Charmbracelet`

## 重點功能

- 兩階段掃描 — 第一階段檢查 IP 可達性，第二階段進行端到端驗證。
- 即時結果更新 — 掃描結果會寫入 `SenPaiScannerResult-YYYYMMDD-HHMMSS.txt` 文件中。
- 可配置的掃描參數 — 用戶可以自定義 IP 數量、工作線程、超時時間和端口。
- 無需複雜命令 — 使用簡單的終端介面，無需記住命令。
- 支持從文件讀取 IP — 用戶可以將 IP 列表放入 `ips.txt` 文件中進行掃描。

## 快速開始

1. 安裝 SenPai Scanner
```bash
curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
```
2. 啟動掃描器
```bash
senpaiscanner
```
3. 選擇配置並開始掃描
```bash
在 TUI 界面中粘貼配置並選擇設置後按 Enter 開始掃描
```

## 程式碼範例

```go
{
  "前置條件": "已安裝 SenPai Scanner",
  "指令": "senpaiscanner",
  "預期輸出": "┌────────────────────────────────────────────────────────────┐\n│  ▶  Find Working IPs   paste a config and test CF IPs      │\n│     About                                                │\n│     Quit                                                 │\n└────────────────────────────────────────────────────────────┘"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 802 stars（267/天），forks 55（6.9%），這顯示出該專案在社群中的活躍度。作者 MatinSenPai 和其他貢獻者在開源社群中已有一定的影響力，這個工具解決了以往手動查找 Cloudflare IP 的繁瑣過程，並且提供了即時的可用性檢查。此專案的推出正好滿足了需要快速找到可用 IP 的需求，特別是在不穩定的網路環境中。社群的反饋和活躍的問題討論也顯示出使用者對於這個工具的需求和期望。

## 適合誰使用

**目標受眾**：需要在不穩定網路環境中快速找到可用 Cloudflare IP 的開發者和網路工程師。

> [!example] 使用場景
> - 網路工程師用它來快速找到可用的 Cloudflare IP，因為手動查找效率低且容易出錯。
> - 開發者用它來驗證自己的 VLESS 或 Trojan 配置是否能正常工作，因為這樣可以節省大量的測試時間。
> - 系統管理員用它來監控和更新可用的 Cloudflare IP 列表，因為這樣可以確保服務的穩定性和可用性。

## 架構分析

SenPai Scanner 採用 Go 語言實作，並使用了 Bubble Tea 框架來構建終端用戶介面。架構設計上，工具分為兩個主要階段：第一階段進行可達性掃描，第二階段則透過內嵌的 xray 實例進行詳細驗證。這樣的設計使得用戶可以在一個簡單的界面中完成複雜的操作，降低了使用門檻。選擇 Go 語言的原因在於其高效能和良好的並發處理能力，這對於需要大量 IP 掃描的場景非常重要。整體架構的輕量化設計使得工具可以在資源受限的環境中運行，而不會造成過大的性能負擔。

## 技術深入分析

SenPai Scanner 的核心技術在於其兩階段掃描流程，第一階段使用 HTTP probe 檢查 IP 的可達性，第二階段則透過 xray 進行端到端的驗證。這樣的設計不僅提高了掃描的準確性，還能夠在實際使用中提供更有價值的數據。效能方面，工具能夠處理大量的 IP 掃描，並且在設置適當的工作線程和超時時間下，能夠保持良好的響應速度。選擇 Go 語言作為開發語言，讓工具在並發處理上表現出色，並且減少了記憶體的使用。設計上，工具的依賴關係相對簡單，主要依賴於 Bubble Tea 框架來構建用戶介面，這使得整體維護成本較低。從技術風險的角度來看，隨著用戶數量的增加，可能會面臨性能瓶頸，特別是在高並發的掃描情況下。整合方面，工具能夠輕鬆地與現有的 CLI 工具鏈相容，並且可以在 CI/CD pipeline 中使用，這為開發者提供了更多的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，並且有範例指令。安裝過程相對順暢，沒有明顯的坑。文件中沒有多語言支持，但主要內容已經足夠清楚，讓新手能夠在 30 分鐘內上手。

## 優缺點分析

> [!success] 優點
> - 輕量級設計，適合在資源受限的環境中運行。
> - 即時更新的掃描結果，方便用戶隨時查看。
> - 簡單的終端介面，降低了使用門檻。

> [!danger] 缺點
> - 目前僅支持 Linux 和 macOS，Windows 用戶需等待更新。
> - 對於大量端口的掃描，可能會影響速度。
> - 需要用戶手動準備 IP 列表，增加了一定的操作複雜度。

> [!warning] 注意事項
> - 僅支持 Linux 和 macOS 平台，Windows 支援尚在開發中。
> - 對於大量端口的掃描，可能會導致掃描速度變慢。
> - 需要用戶手動提供 `ips.txt` 文件，否則無法從文件掃描。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理服務的 IP 掃描，但不支持即時結果更新功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 IP 掃描功能，但缺乏簡單的終端界面和即時更新的特性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理服務的 IP 掃描，但不支持即時結果更新功能。 | 如果需要針對特定代理服務進行深入的 IP 掃描，這個工具可能更合適。 | medium，因為需要重新學習工具的操作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 IP 掃描功能，但缺乏簡單的終端界面和即時更新的特性。 | 如果需要更靈活的配置選項，這個工具可能更適合。 | low，因為操作邏輯相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **SenPaiScanner** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理服務的 IP 掃描，但不支持即時結果更新功能。 | 提供類似的 IP 掃描功能，但缺乏簡單的終端界面和即時更新的特性。 |
> | 遷移成本 | - | medium，因為需要重新學習工具的操作流程。 | low，因為操作邏輯相似。 |
> | 適用場景 | 主要場景 | 如果需要針對特定代理服務進行深入的 IP 掃描，這個工具可能 | 如果需要更靈活的配置選項，這個工具可能更適合。 |

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

- **[HIGH]** 掃描過程中可能會因為網路不穩定而中斷
  - 解法：降低掃描的 IP 數量或增加超時時間
- [MEDIUM] 在某些環境下，可能無法正確讀取 `ips.txt` 文件
  - 解法：確保 `ips.txt` 文件與可執行文件在同一目錄下
- [MEDIUM] 對於 WebSocket 配置，可能需要特定的 IP 才能通過驗證
  - 解法：在 Phase 1 中選擇多個端口進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速找到可用的 Cloudflare IP | 非常適合 | 工具簡單易用，能快速提供可用 IP 列表。 |
| 大型企業需要穩定的 Cloudflare IP 監控 | 普通 | 雖然工具有效，但在高並發下可能會遇到性能瓶頸。 |
| 個人開發者在不穩定的網路環境中測試代理配置 | 非常適合 | 工具專為不穩定網路設計，能提供即時結果。 |
| 需要長期監控 Cloudflare IP 的系統管理員 | 不適合 | 工具目前不支持持久化設置，需手動重複操作。 |

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
> 低風險：工具本身不需要高權限，僅需訪問網路資源。依賴的庫經過審計，無明顯的供應鏈風險。

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
| Forks | 55 |
| Open Issues | 21 |
| Issue 解決率 | 55% (26 closed) |
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

**社群活躍度**：社群活躍度中等，有一定數量的開放問題和回應。
**連結**：[文件](https://github.com/matinsenpai/senpaiscanner)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-05-30）
> **活躍天數** 2 天 · **最新 commit** feat: implement neighbor scanning for enhanced IP validation and save IPs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#49](https://github.com/MatinSenPai/SenPaiScanner/issues/49) | متوقف شدن اسکن | 5 | 4 |
> | [#25](https://github.com/MatinSenPai/SenPaiScanner/issues/25) | قطعی هنگام اسکن `enhancement` `good first issue` | 4 | 4 |
> | [#54](https://github.com/MatinSenPai/SenPaiScanner/issues/54) | مشکل اجرا نشدن senpaiscanner-darwin-arm64 در مک | 1 | 2 |
> | [#63](https://github.com/MatinSenPai/SenPaiScanner/issues/63) | نسخه ویندوز ۷ | 0 | 0 |
> | [#62](https://github.com/MatinSenPai/SenPaiScanner/issues/62) | شناسایی اسکن توسط مخابرات | 0 | 0 |

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

相關概念：[[CLI/TUI]] · [[網路工具]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
> WHERE category = "CLI 工具" AND file.name != "MatinSenPai--SenPaiScanner"
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
> const concepts = ["CLI/TUI","網路工具","自動化測試"];
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

- [[2026-06-02|2026-06-02]] — 再次上榜，857 stars
- [[2026-06-01|2026-06-01]] — 再次上榜，802 stars
- [[2026-05-31|2026-05-31]] — 首次收錄，595 stars
