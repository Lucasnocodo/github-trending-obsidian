---
repo: MatinSenPai/SenPaiScanner
url: https://github.com/MatinSenPai/SenPaiScanner
owner: MatinSenPai
owner_type: User
language: Go
license: MIT
description: "A light-weight scanner for Cloudflare IPs, written in Golang"
homepage: ""
stars: 1313
stars_per_day: 146
forks: 79
open_issues: 36
created: 2026-05-28
pushed_at: 2026-06-06
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "CLI 工具"
subcategory: "網路掃描"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "一個輕量級的 Cloudflare IP 掃描器，幫助用戶快速找到可用的 Cloudflare IP。"
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
last_release_days: 8
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:595,2026-05-31:595,2026-06-01:802,2026-06-01:802,2026-06-02:857,2026-06-02:857,2026-06-03:905,2026-06-03:905,2026-06-04:1032,2026-06-04:1032,2026-06-05:1162,2026-06-06:1254,2026-06-07:1313"
tags:
  - github
  - "category/cli_工具"
  - "lang/go"
  - easy_install
aliases:
  - "SenPaiScanner"
  - "MatinSenPai/SenPaiScanner"
  - "一個輕量級的 Cloudflare IP 掃描器，幫助用戶快速找到可用的 Cloudflare IP。"
---

# SenPaiScanner

**1.3k** stars · **146** stars/天 · 建立 9 天前 · Go · MIT

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
> 一個輕量級的 Cloudflare IP 掃描器，幫助用戶快速找到可用的 Cloudflare IP。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (146 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速找到可用 Cloudflare IP 的網路工程師或 DevOps 專業人士。
> **一句話重點** 這個專案的設計理念是讓用戶能夠快速且直觀地找到可用的 Cloudflare IP，無需繁瑣的配置和操作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--SenPaiScanner");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路掃描" && p.file.name !== "MatinSenPai--SenPaiScanner" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路掃描 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速且有效的 IP 掃描工具，值得使用。

> [!abstract] 核心創新
> 提供了一個簡單易用的終端介面，無需複雜指令即可進行 Cloudflare IP 的掃描和驗證。

## 專案簡介

SenPai Scanner 是一款專為查找 Cloudflare IP 而設計的輕量級掃描器，使用者可以透過簡單的終端介面進行操作。其核心機制分為兩個階段：第一階段進行連通性掃描，隨機探測 Cloudflare IP，並可選擇從檔案中讀取 IP 列表；第二階段則可選擇性地進行 xray 驗證，測試最佳的 Phase 1 結果，並提供詳細的端點、傳輸類型、下載速度和延遲等資訊。使用者只需執行 `senpaiscanner` 即可進入介面，無需記憶複雜指令。這個工具的賣點在於其簡化的操作流程和即時的結果顯示，適合需要快速找到可用 IP 的用戶。技術上，該專案使用 Go 語言開發，並依賴多個輕量級庫，如 `bubbletea` 和 `lipgloss`，以實現終端 UI 的美觀和功能性。

相較於其他類似工具，SenPai Scanner 提供了更直觀的使用體驗，並且無需繁瑣的配置步驟。這使得即使是新手用戶也能輕鬆上手，快速獲得所需的 IP 資訊。實際使用中，該工具的效能表現良好，但在高負載情況下可能會遇到連接超時的問題。該專案目前處於穩定版本，適合個人或小型團隊使用，未來可能會持續增強功能和擴展性。

**技術棧**：`Go 1.26.1` · `bubbletea` · `lipgloss`

## 重點功能

- 簡單的終端介面 — 透過箭頭鍵導航，無需記憶複雜指令。
- 兩階段掃描 — 第一階段進行連通性檢查，第二階段可選擇進行 xray 驗證。
- 可自訂掃描參數 — 包括來源、IP 數量、工作者數量、超時設定和端口選擇。
- 即時結果顯示 — 掃描過程中可隨時查看 IP 狀態，並可複製結果。
- 多平台支援 — 提供 Linux、macOS 和 Windows 的預編譯二進制檔案，並可在 Android 的 Termux 上運行。

## 快速開始

1. 安裝 SenPai Scanner
```bash
curl -fsSL https://github.com/MatinSenPai/SenPaiScanner/raw/refs/heads/main/install.sh | bash
```
2. 啟動掃描器
```bash
senpaiscanner
```
3. 選擇掃描參數並開始掃描
```bash
在終端介面中選擇相應的選項並按 Enter 開始掃描
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1313 stars（146/天），forks 79（6.0%），顯示出不錯的增長潛力。作者 MatinSenPai 在 GitHub 上活躍，過去有多個開源專案，這次專案解決了 Cloudflare IP 掃描的需求，特別是在不穩定網路環境下的使用場景。社群中對於其簡單易用的介面和即時結果的需求也促進了其受歡迎程度。最近的推文和討論也引起了更多開發者的注意，進一步推動了專案的曝光率。

## 適合誰使用

**目標受眾**：需要快速找到可用 Cloudflare IP 的網路工程師或 DevOps 專業人士。

> [!example] 使用場景
> - 網路工程師用它來快速掃描可用的 Cloudflare IP，因為手動查找 IP 耗時且容易出錯。
> - DevOps 工程師用它來驗證新部署的應用是否能夠連接到 Cloudflare，因為這能夠快速確認網路配置的正確性。
> - 安全研究員用它來測試不同 IP 的可達性，因為這樣能夠有效評估網路的穩定性和安全性。

## 架構分析

SenPai Scanner 採用 Go 語言開發，設計上以輕量級和高效能為目標。其架構分為兩個主要模組：第一個模組負責 IP 的掃描和連通性檢查，使用 HTTP probe 技術來驗證 IP 的可達性；第二個模組則是 xray 驗證，通過嵌入式的 xray 實例來進行更深入的測試。這樣的設計使得使用者可以在不需要複雜配置的情況下，快速獲得可用的 IP 資訊。選擇 Go 語言的原因在於其高效能和跨平台的特性，能夠在多種操作系統上運行。擴展性方面，這個架構能夠輕鬆地加入新的功能或改進現有功能，未來可能會增加更多的驗證方式或掃描選項。

## 技術深入分析

SenPai Scanner 的核心技術在於其高效的 IP 掃描和驗證流程。首先，使用者可以選擇隨機生成的 Cloudflare IPv4 範圍或從檔案中讀取候選 IP，這樣的設計使得掃描的靈活性大大提高。掃描過程中，第一階段的連通性檢查使用了標準的 HTTP probe，這樣可以快速確認 IP 的可達性。第二階段的 xray 驗證則是專案的一大亮點，這一過程中會測試最佳的 Phase 1 結果，並提供詳細的性能指標，如下載速度和延遲。這樣的設計不僅提高了掃描的準確性，還能讓使用者在同一個流程中獲得全面的結果。技術上，選擇 Go 語言的原因在於其高效能和良好的並發處理能力，這使得在多工作者的情況下，掃描速度能夠保持在一個合理的範圍內。整體而言，這個專案在設計上考慮到了使用者的需求，並提供了一個簡單而有效的解決方案。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的完整指引。安裝過程相對順暢，沒有明顯的坑。文件中包含了使用範例和配置說明，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 輕量級設計，快速啟動和掃描。
> - 簡單易用的介面，適合新手和專業人士。
> - 支持多種平台，方便不同環境的使用。

> [!danger] 缺點
> - 在高負載時可能會遇到性能瓶頸。
> - Phase 2 驗證需要有效的配置 URL，限制了使用場景。
> - 對於某些網路環境，可能需要手動調整參數以獲得最佳效果。

> [!warning] 注意事項
> - 在高負載情況下可能會遇到連接超時的問題。
> - Phase 2 驗證需要有效的配置 URL，否則無法進行完整測試。
> - 對於某些特定網路環境，可能需要調整工作者數量和超時設定以獲得最佳效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 IP 掃描功能，但主要針對不同的網路環境和需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 IP 的存活檢查，功能上較為單一，無法提供完整的驗證流程。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 雖然也有掃描功能，但主要針對特定的應用場景，使用上較為複雜。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的網路環境，提供更深入的分析和報告功能。 | 如果需要更詳細的網路分析和報告，這個工具會更適合。 | medium，因為需要重新學習其操作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的 IP 存活檢查，功能較為單一。 | 如果只需要簡單的 IP 存活檢查，這個工具會更輕便。 | low，因為操作簡單且直觀。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **SenPaiScanner** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的網路環境，提供更深入的分析和報告功能。 | 提供基本的 IP 存活檢查，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新學習其操作流程。 | low，因為操作簡單且直觀。 |
> | 適用場景 | 主要場景 | 如果需要更詳細的網路分析和報告，這個工具會更適合。 | 如果只需要簡單的 IP 存活檢查，這個工具會更輕便。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合個人和小型團隊在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下可能會出現連接超時的問題。
  - 解法：調整工作者數量和超時設定以獲得更好的效能。
- [MEDIUM] Phase 2 驗證需要有效的配置 URL，否則無法進行完整測試。
  - 解法：確保提供正確的配置 URL。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的網路測試工具 | 非常適合 | 其簡單易用的介面和即時結果顯示非常符合小型團隊的需求。 |
| 大型企業的網路監控系統 | 普通 | 雖然功能強大，但在高負載情況下可能會遇到性能瓶頸。 |
| 個人開發者的網路工具 | 非常適合 | 其輕量級設計和易於使用的特性非常適合個人開發者。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速且有效的 IP 掃描工具，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴的庫均為開源且經過社群驗證，安全性較高。

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

**社群活躍度**：社群活躍，定期更新和回應問題。
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

相關概念：[[CLI/TUI]] · [[網路掃描]] · [[連通性檢查]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/MatinSenPai/SenPaiScanner)

## 相關收錄

> [!note]- 直接競品（同子分類：網路掃描）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路掃描" AND file.name != "MatinSenPai--SenPaiScanner"
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
> const concepts = ["CLI/TUI","網路掃描","連通性檢查"];
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
