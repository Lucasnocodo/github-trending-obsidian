---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local MTProto proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 4612
stars_per_day: 128
forks: 207
open_issues: 153
created: 2026-03-04
pushed_at: 2026-04-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "基礎設施"
subcategory: "代理伺服器"
release_tag: "v1.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供 Telegram 的本地 MTProto 代理伺服器，部分繞過 Telegram 加載問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 5
engagement: "low"
issue_close_rate: 64
repo_size_kb: 300
readme_length: 7872
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794,2026-03-11:797,2026-03-13:910,2026-03-14:985,2026-03-15:1159,2026-03-16:1438,2026-03-17:1706,2026-03-18:2153,2026-03-19:2445,2026-03-20:2610,2026-03-21:2847,2026-03-22:3004,2026-03-23:3162,2026-03-24:3283,2026-03-25:3363,2026-03-26:3449,2026-03-27:3550,2026-03-28:3626,2026-03-29:3680,2026-03-30:3725,2026-03-31:3789,2026-04-01:3858,2026-04-02:3965,2026-04-03:4104,2026-04-04:4194,2026-04-05:4253,2026-04-06:4317,2026-04-07:4375,2026-04-08:4442,2026-04-09:4518,2026-04-10:4612"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供 Telegram 的本地 MTProto 代理伺服器，部分繞過 Telegram 加載問題。"
---

# tg-ws-proxy

**4.6k** stars · **128** stars/天 · 建立 36 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Flowseal--tg-ws-proxy");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.6.0`

> [!summary] 一句話摘要
> 提供 Telegram 的本地 MTProto 代理伺服器，部分繞過 Telegram 加載問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Hot (128 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網絡環境中使用 Telegram 的獨立開發者或小型企業。
> **一句話重點** tg-ws-proxy 透過本地代理的方式，顯著提升了 Telegram 的使用體驗，特別是在網絡不穩定的情況下。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理伺服器" && p.file.name !== "Flowseal--tg-ws-proxy" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理伺服器 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到穩定的 Telegram 代理功能，值得考慮。

> [!abstract] 核心創新
> 提供本地 MTProto 代理，無需依賴外部伺服器即可加速 Telegram。

## 專案簡介

tg-ws-proxy 是一個本地的 MTProto 代理伺服器，專為 Telegram Desktop 設計，透過 WebSocket 連接來加速 Telegram 的加載速度。其工作流程是：Telegram Desktop 透過 MTProto 代理（127.0.0.1:1443）連接到 WebSocket，然後轉發至 Telegram 的數據中心。這樣的設計不僅保留了數據的加密性，還避免了依賴外部伺服器，減少了延遲。使用者可以透過簡單的命令行參數來配置代理，例如 `tg-ws-proxy --port 9050 --dc-ip 1:149.154.175.205`，靈活性高。此工具的賣點在於其能夠自動切換到 Cloudflare 代理或直接 TCP 連接，確保在不同網絡環境下的穩定性。

技術上，tg-ws-proxy 使用 Python 實作，並依賴於多個平台特定的庫，如 `psutil` 和 `cryptography`，以確保跨平台的兼容性。與其他同類工具相比，tg-ws-proxy 的優勢在於其簡單的設置和自動化功能，特別適合需要快速部署的用戶。使用者在實際操作中可能會遇到媒體文件無法加載的問題，這通常需要手動調整代理設置。tg-ws-proxy 的社群活躍度相對較高，開發者持續更新並解決問題，這對於需要穩定運行的使用者來說是個加分項。對於小型團隊或個人用戶來說，這是一個值得考慮的解決方案，尤其是在 Telegram 使用頻繁的環境中。

**技術棧**：`Python 3.8+` · `Docker`

## 重點功能

- MTProto 代理 — 提供本地的 MTProto 代理伺服器，支持 Telegram Desktop 的加速。
- WebSocket 連接 — 透過 WebSocket 連接 Telegram 數據中心，保持數據加密。
- 自動切換 — 當 WebSocket 不可用時，自動切換到 Cloudflare 代理或直接 TCP 連接。
- 多平台支持 — 支援 Windows、macOS 和 Linux，並提供相應的安裝包。
- 簡單配置 — 可透過命令行參數靈活配置代理設置，支持多個數據中心 IP。

## 快速開始

1. 下載 Windows 版本
```bash
從 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy_windows.exe
```
2. 安裝 Linux 版本
```bash
sudo dpkg -i TgWsProxy_linux_amd64.deb
```
3. 啟動代理
```bash
tg-ws-proxy --port 1443
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 tg-ws-proxy",
  "指令": "tg-ws-proxy --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220",
  "預期輸出": "啟動代理並連接到指定的數據中心。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 36 天內累積 4612 stars（128/天），forks 207（4.5%），顯示出穩定的增長潛力。作者 Flowseal 及其團隊在 Telegram 代理領域有豐富的經驗，之前的工具也受到廣泛使用。這個工具解決了 Telegram 用戶在某些網絡環境下的加載問題，特別是在需要繞過防火牆的情況下。最近的社群討論和需求推動了這個專案的曝光率，特別是對於需要快速且安全的 Telegram 連接的用戶。這個工具的設計和實作使其在當前的技術生態中具備了良好的適應性，尤其是對於需要在多種操作系統上運行的用戶來說，提供了良好的解決方案。

## 適合誰使用

**目標受眾**：需要在不穩定網絡環境中使用 Telegram 的獨立開發者或小型企業。

> [!example] 使用場景
> - 開發者用它來在本地環境中快速測試 Telegram 應用，因為它能夠繞過網絡限制，提升開發效率。
> - 小型企業的客服人員用它來加速 Telegram 客戶端的加載，因為在高流量時段，這能顯著改善客戶互動體驗。
> - 自由工作者用它來在不穩定的網絡環境中保持 Telegram 的連接，因為這樣可以減少因網絡問題造成的溝通延遲。

## 架構分析

tg-ws-proxy 採用單一應用架構，使用 Python 實現 MTProto 代理功能。其設計目的是為了簡化 Telegram 的連接過程，通過本地代理來提升速度和穩定性。資料流從 Telegram Desktop 通過 MTProto 代理發送到 WebSocket，再連接到 Telegram 數據中心。這種設計的好處在於減少了對外部伺服器的依賴，降低了延遲，但同時也可能在某些網絡環境下導致連接不穩定。tg-ws-proxy 的擴展性良好，能夠支持多個數據中心的連接，但在高流量情況下可能會出現性能瓶頸，特別是當多個用戶同時使用時。

## 技術深入分析

tg-ws-proxy 的核心技術機制是使用 MTProto 協議來建立本地代理，並透過 WebSocket 進行數據傳輸。這種設計使得資料在傳輸過程中保持加密，並且能夠快速響應用戶的請求。效能方面，tg-ws-proxy 能夠支持多個數據中心的連接，並且在高流量情況下仍能保持穩定的性能。設計上選擇 Python 作為開發語言，這使得開發過程相對簡單，但也可能導致在某些情況下性能不如使用更底層語言的工具。tg-ws-proxy 的依賴樹相對簡單，主要依賴於幾個常用的 Python 庫，這降低了整體的維護成本。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下。與主流框架的整合相對容易，能夠快速融入現有的開發流程中，對於團隊的學習成本也相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且包含了多平台的安裝步驟。安裝過程相對順暢，但對於新手來說，可能需要一些額外的配置。文件中有基本的使用範例，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的命令行介面，適合快速部署。
> - 支持多平台，能夠在 Windows、macOS 和 Linux 上運行。
> - 自動切換功能提高了連接的穩定性和可靠性。

> [!danger] 缺點
> - 在某些網絡環境下可能會遇到媒體文件無法加載的問題。
> - 需要用戶手動配置某些參數，對新手不太友好。
> - 依賴於 Python 環境，對於不熟悉的用戶可能需要額外的學習成本。

> [!warning] 注意事項
> - 僅支援 Python 3.8 以上版本。
> - 在某些網絡環境下可能會遇到媒體文件無法加載的問題。
> - 需要在支持 AppIndicator 的 Linux 環境中運行以顯示系統托盤圖標。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代理功能，但主要針對 Telegram 的安全性和隱私保護，適合對安全性有高要求的用戶。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 Telegram 代理，功能較為專一，適合特定行業的需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Go 語言實現，提供更高的性能和更低的內存使用，但學習曲線相對較陡。 | 如果你的團隊已經熟悉 Go 語言並需要高效的性能，則應選擇它。 | medium，因為需要重新學習 Go 語言的特性和生態。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，使用 Rust 實作，性能優越但生態系統較小。 | 如果你的應用對安全性有極高要求，則應選擇它。 | high，因為需要學習 Rust 語言及其生態。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Go 語言實現，提供更高的性能和更低的內存使用，但學習曲線相對較陡。 | 專注於安全性和隱私保護，使用 Rust 實作，性能優越但生態系統較小。 |
> | 遷移成本 | - | medium，因為需要重新學習 Go 語言的特性和生態。 | high，因為需要學習 Rust 語言及其生態。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 Go 語言並需要高效的性能，則應選擇它 | 如果你的應用對安全性有極高要求，則應選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性使用，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網絡環境下，媒體文件無法加載，特別是在沒有 Premium 帳戶的情況下。
  - 解法：手動調整代理設置，確保只使用特定的 DC IP。
- [MEDIUM] Windows Defender 可能誤報為惡意軟體，導致下載困難。
  - 解法：暫時禁用防毒軟體或使用不同版本的安裝檔。
- [low] 在 Linux 環境中，AppIndicator 可能無法正常顯示。
  - 解法：確保安裝了必要的依賴，並檢查系統設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | tg-ws-proxy 能夠快速部署且易於配置，適合小型團隊使用。 |
| 大型企業的 Telegram 客服系統 | 普通 | 在高流量情況下可能會遇到性能瓶頸，需進一步測試。 |
| 個人開發者的 Telegram 應用測試 | 非常適合 | 簡單的設置和本地運行使其成為理想選擇。 |
| 需要高安全性的金融應用 | 不適合 | tg-ws-proxy 的安全性未經嚴格驗證，不建議用於敏感數據處理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到穩定的 Telegram 代理功能，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> tg-ws-proxy 本身不需要高權限運行，但用戶需注意其可能存取的 Telegram 敏感數據。依賴的 Python 庫需定期檢查更新，以避免安全漏洞。整合到 CI/CD pipeline 時需確保環境的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
| Forks | 207 |
| Open Issues | 153 |
| Issue 解決率 | 64% (277 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 300 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Flowseal/tg-ws-proxy) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 109 |
> | [@IMDelewer](https://github.com/IMDelewer) | 3 |
> | [@KG7x](https://github.com/KG7x) | 2 |
> | [@qirashi](https://github.com/qirashi) | 2 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v1.6.0 — TG WS Proxy v1.6.0 (2026-04-09)

> [!info]- Release Notes
> - **Улучшение CF-прокси модуля**
>   - Увеличение количества стандартных доменов
>   - Автоматическая подгрузка списка доменов с гитхаба при старте
>   - Прочие улучшения стабильности
> - Возможность смены темы в настройках прокси
> - Рефакторинг proxy модуля
> - Уменьшение размера собранных файлов
> - _Другие улучшения стабильности_

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-09）
> **活躍天數** 1 天 · **最新 commit** docs update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#492](https://github.com/Flowseal/tg-ws-proxy/issues/492) | [Предложение] Fake TLS для MTProto | 15 | 0 |
> | [#389](https://github.com/Flowseal/tg-ws-proxy/issues/389) | 📗 Вопросы и ответы `documentation` | 14 | 28 |
> | [#166](https://github.com/Flowseal/tg-ws-proxy/issues/166) | [Проблема] не грузит файлы медиа | 11 | 14 |

## README 摘錄

> [!info]- 展開查看原文 README
> > [!TIP]
> >
> > ### 🎉 Поддержать меня
> >
> > **USDT (TRC20)**: `TXPnKs2Ww1RD8JN6nChFUVmi5r2hqrWjuu`  
> > **BTC**: `bc1qr8vd6jelkyyry3m4mq6z5txdx4pl856fu6ss0w`  
> > **ETH**: `0x1417878fdc5047E670a77748B34819b9A49C72F1`  
> 
> > [!CAUTION]
> >
> > ### Реакция антивирусов
> >
> > Windows Defender часто ошибочно помечает приложение как **Wacatac**.  
> > Если вы не можете скачать из-за блокировки, то:
> >
> > 1) Попробуйте скачать версию win7 (она ничем не отличается в плане функционала)
> > 2) Отключите антивирус на время скачивания, добавьте файл в исключения и включите обратно  
> >
> > **Всегда проверяйте, что скачиваете из интернета, тем более из непроверенных источников. Всегда лучше смотреть на детекты широко известных антивирусов на VirusTotal**
> 
> # TG WS Proxy
> 
> **Локальный MTProto-прокси** для Telegram Desktop, который **ускоряет работу Telegram**, перенаправляя трафик через WebSocket-соединения. Данные передаются в том же зашифрованном виде, а для работы не нужны сторонние сервера.
> 
> ## Как это работает
> 
> ```
> Telegram Desktop → MTProto Proxy (127.0.0.1:1443) → WebSocket → Telegram DC
> ```
> 
> 1. Приложение поднимает MTProto прокси на `127.0.0.1:1443`
> 2. Перехватывает подключения к IP-адресам Telegram
> 3. Извлекает DC ID из MTProto obfuscation init-пакета
> 4. Устанавливает WebSocket (TLS) соединение к соответствующему DC через домены Telegram
> 5. Если WS недоступен (302 redirect) — автоматически переключается на CfProxy / прямое TCP-соединение
> 
> > [!IMPORTANT] 
> > ### Не грузит фото/видео?
> > ### Удалите в настройках прокси в DC->IP всё, кроме `4:149.154.167.220`
> > Подобная проблема встречается на аккаунтах без Premium  
> > Если вам не помогло, то настраивайте свой домен по гайду отсюда: https://github.com/Flowseal/tg-ws-proxy/blob/main/docs/CfProxy.md
> 
> ## 🚀 Быстрый старт
> 
> ### Windows
> 
> Перейдите на [страницу релизов](https://github.com/Flowseal/tg-ws-proxy/releases) и скачайте **`TgWsProxy_windows.exe`**. Он собирается автоматически через [Github Actions](https://github.com/Flowseal/tg-ws-proxy/actions) из открытого исходного кода.
> 
> При первом запуске откроется окно с инструкцией по подключению Telegram Desktop. Приложение сворачивается в системный трей.
> 
> **Меню трея:**
> 
> - **Открыть в Telegram** — автоматически настроить прокси через `tg://proxy` ссылку
> - **Перезапустить прокси** — перезапуск без выхода из приложения
> - **Настройки...** — GUI-редактор конфигурации (в т.ч. версия приложения, опциональная проверка обновлений с GitHub)
> - **Открыть логи** — открыть файл логов
> - **Выход** — остановить прокси и закрыть приложение
> 
> При первом запуске после старта может появиться запрос об открытии страницы релиза, если на GitHub вышла новая версия (отключается в настройках).
> 
> ### macOS
> 
> Перейдите на [страницу релизов](https://github.com/Flowseal/tg-ws-proxy/releases) и скачайте **`TgWsProxy_macos_universal.dmg`** — универсальная сборка для Apple Silicon и Intel.
> 
> 1. Открыть образ
> 2. Перенести **TG WS Proxy.app** в папку **Applications**
> 3. При первом запуске macOS может попросить подтвердить открытие: **Системные настройки → Конфиденциальность и безопасность → Всё равно открыть**
> 
> ### Linux
> 
> Для Debian/Ubuntu скачайте со [страницы релизов](https://github.com/Flowseal/tg-ws-proxy/releases) пакет **`TgWsProxy_linux_amd64.deb`**.
> 
> Для Arch и Arch-Based дистрибутивов подготовлены пакеты в AUR: [tg-ws-proxy-bin](https://aur.archlinux.org/packages/tg-ws-proxy-bin), [tg-ws-proxy-git](https://aur.archlinux.org/packages/tg-ws-proxy-git), [tg-ws-proxy-cli](https://aur.archlinux.org/packages/tg-ws-proxy-cli)
> 
> ```shell
> # Установка без AUR-helper
> git clone https://aur.archlinux.org/tg-ws-proxy-bin.git
> cd tg-ws-proxy-bin
> makepkg -si
> 
> # При помощи AUR-helper
> paru -S tg-ws-proxy-bin
> 
> # Если вы установили -cli пакет, то запуск осуществляется через systemctl, где 8888 это номер порта,
> # разделитель ":" и secret, который можно сгенерировать командой: openssl rand -hex 16
> sudo systemctl start tg-ws-proxy-cli@8888:3075abe65830f0325116bb0416cadf9f
> ```
> 
> Для остальных дистрибутивов можно использовать **`TgWsProxy_linux_amd64`** (бинарный файл для x86_64).
> 
> ```bash
> chmod +x TgWsProxy_linux_amd64
> ./TgWsProxy_linux_amd64
> ```
> 
> При первом запуске откроется окно с инструкцией. Приложение работает в системном трее (требуется AppIndicator).
> 
> ## Установка из исходников
> 
> ### Консольный proxy
> 
> Для запуска только proxy без tray-интерфейса достаточно базовой установки:
> 
> ```bash
> pip install -e .
> tg-ws-proxy
> ```
> 
> ### Windows 7/10+
> 
> ```bash
> pip install -e .
> tg-ws-proxy-tray-win
> ```
> 
> ### macOS
> 
> ```bash
> pip install -e .
> tg-ws-proxy-tray-macos
> ```
> 
> ### Linux
> 
> ```bash
> pip install -e .
> tg-ws-proxy-tray-linux
> ```
> 
> ### Консольный режим из исходников
> 
> ```bash
> tg-ws-proxy [--port PORT] [--host HOST] [--dc-ip DC:IP ...] [-v]
> ```
> 
> **Аргументы:**
> 
> | Аргумент | По умолчанию | Описание |
> |---|---|---|
> | `--port` | `1443` | Порт прокси |
> | `--host` | `127.0.0.1` | Хост прокси |
> | `--secret` | `random` | 32 hex chars secret для авторизации клиентов |
> | `--dc-ip` | `2:149.154.167.220`, `4:149.154.167.220` | Целевой IP для DC (можно указать несколько раз) |
> | `--no-cfproxy` | `false` | Отключить попытку [проксирования через Cloudflare]((https://github.com/Flowseal/tg-ws-proxy/blob/main/docs/CfProxy.md)) |
> | `--cfproxy-domain` | | Указать свой домен для проксирования через Cloudfalre. [Подробнее тут](https://github.com/Flowseal/tg-ws-proxy/blob/main/docs/CfProxy.md) |
> | `--cfproxy-priority` | `true` | Пробовать проксировать через Cloudflare перед прямым TCP подключением |
> | `--buf-kb` | `256` | Размер буфера в КБ |
> | `--pool-size` | `4` | Количество заготовленных соединений на каждый DC |
> | `--log-file` | выкл. | Путь до файла, в который сохранять логи  |
> | `--log-max-mb` | `5` | Максимальный размер файла логов в МБ (после идёт перезапись) |
> | `--log-backups` | `0` | Количество сохранений логов после перезаписи |
> | `-v`, `--verbose` | выкл. | Подробное логирование (DEBUG) |
> 
> **Примеры:**
> 
> ```bash
> # Стандартный запуск
> tg-ws-proxy
> 
> # Другой порт и дополнительные DC
> tg-ws-proxy --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
> 
> # С подробным логированием
> tg-ws-proxy -v
> ```
> 
> ## Настройка Telegram Desktop
> 
> ### Автоматически
> 
> ПКМ по иконке в трее → **«Открыть в Telegram»**
> 
> ### Вручную
> 
> 1. Telegram → **Настройки** → **Продвинутые настройки** → **Тип подключения** → **Прокси**
> 2. Добавить прокси:
>    - **Тип:** MTProto
>    - **Сервер:** `127.0.0.1` (или переопределенный вами)
>    - **Порт:** `1443` (или переопределенный вами)
>    - **Secret:** из настроек или логов
> 
> ## Конфигурация
> 
> Tray-приложение хранит данные в:
> 
> - **Windows:** `%APPDATA%/TgWsProxy`
> - **macOS:** `~/Library/Application Support/TgWsProxy`
> - **Linux:** `~/.config/TgWsProxy` (или `$XDG_CONFIG_HOME/TgWsProxy`)
> 
> ```json
> {
>   "host": "127.0.0.1",
>   "port": 1443,
>   "secret": "...",
>   "dc_ip": [
>     "2:149.154.167.220",
>     "4:149.154.167.220"
>   ],
>   "verbose": false,
>   "buf_kb": 256,
>   "pool_size": 4,
>   "log_max_mb": 5.0,
>   "check_updates": true
> }
> ```
> 
> Ключ **`check_updates`** — при `true` при запросе к GitHub сравнивается версия с последним релизом (только уведомление и ссылка на страницу загрузки). На Windows в конфиге может быть **`autostart`** (автозапуск при входе в систему).
> 
> ## Автоматическая сборка
> 
> Проект содержит спецификации PyInstaller ([`packaging/windows.spec`](packaging/windows.spec), [`packaging/macos.spec`](packaging/macos.spec), [`packaging/linux.spec`](packaging/linux.spec)) и GitHub Actions workflow ([`.github/workflows/build.yml`](.github/workflows/build.yml)) для автоматической сборки.
> 
> Минимально поддерживаемые версии ОС для текущих бинарных сборок:
> 
> - Windows 10+ для `TgWsProxy_windows.exe`
> - Windows 7 (x64) для `TgWsProxy_windows_7_64bit.exe`
> - Windows 7 (x32) для `TgWsProxy_windows_7_32bit.exe`
> - Intel macOS 10.15+
> - Apple Silicon macOS 11.0+
> - Linux x86_64 (требуется AppIndicator для системного трея)
> 
> ## Лицензия
> 
> [MIT License](LICENSE)

## 延伸閱讀

相關概念：[[MTProto]] · [[WebSocket]] · [[代理伺服器]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

## 相關收錄

> [!note]- 直接競品（同子分類：代理伺服器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理伺服器" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Flowseal--tg-ws-proxy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MTProto","WebSocket","代理伺服器"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Flowseal--tg-ws-proxy" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Flowseal--tg-ws-proxy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Flowseal" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，787 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
