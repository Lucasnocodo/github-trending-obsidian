---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 1438
stars_per_day: 131
forks: 37
open_issues: 25
created: 2026-03-04
pushed_at: 2026-03-16
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "網路代理"
release_tag: "v1.1.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個本地 SOCKS5 代理伺服器，部分繞過 Telegram 載入問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "low"
issue_close_rate: 79
repo_size_kb: 33
readme_length: 3699
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794,2026-03-11:797,2026-03-13:910,2026-03-14:985,2026-03-15:1159,2026-03-16:1438"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供一個本地 SOCKS5 代理伺服器，部分繞過 Telegram 載入問題。"
---

# tg-ws-proxy

**1.4k** stars · **131** stars/天 · 建立 11 天前 · Python · MIT

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

`v1.1.1`

> [!summary] 一句話摘要
> 提供一個本地 SOCKS5 代理伺服器，部分繞過 Telegram 載入問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (131 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在不穩定網路環境中使用 Telegram 的用戶。
> **一句話重點** TG WS Proxy 提供了一個針對 Telegram 的專用加速解決方案，特別適合在不穩定網路環境中使用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路代理" && p.file.name !== "Flowseal--tg-ws-proxy" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到穩定的 Telegram 使用體驗，值得考慮。

> [!abstract] 核心創新
> 透過 WebSocket 連接加速 Telegram 的載入速度，並提供自動切換功能以確保穩定性。

## 專案簡介

TG WS Proxy 是一個本地 SOCKS5 代理伺服器，旨在透過 WebSocket 連接加速 Telegram 的載入速度。使用者只需將 Telegram Desktop 的流量導向本地代理（127.0.0.1:1080），代理會自動轉發請求至 Telegram 的資料中心，並在無法連接時自動切換至 TCP 連接。這種設計能有效減少因網路延遲造成的載入時間，特別是在高延遲環境中。使用者可以透過簡單的命令行參數設定代理的端口和目標資料中心 IP，並且支援詳細的日誌記錄，方便追蹤問題。這個工具的賣點在於它能夠改善 Telegram 的使用體驗，特別是在某些地區的網路環境下。

技術上，它使用 Python 實作，依賴幾個輕量的庫如 `cryptography` 和 `psutil`，使得整體架構相對簡單且易於維護。與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，TG WS Proxy 更專注於 Telegram 的特定需求，提供了更針對性的解決方案。實際使用中，使用者可能會遇到防毒軟體誤報的問題，這需要手動調整防毒設定來解決。該專案目前處於活躍開發階段，社群反饋良好，並且有持續的更新和問題解決。對於需要在網路環境不佳的情況下使用 Telegram 的用戶來說，這是一個值得考慮的工具。

**技術棧**：`Python 3.9` · `cryptography 46.0.5` · `psutil 7.0.0`

## 重點功能

- 本地 SOCKS5 代理 — 在 127.0.0.1:1080 提供 SOCKS5 代理服務，方便 Telegram 使用。
- WebSocket 轉發 — 使用 WSS 連接 Telegram 的資料中心，提升載入速度。
- 自動切換連接 — 當 WebSocket 連接失敗時，自動切換至 TCP 連接以確保穩定性。
- 詳細日誌記錄 — 支援 -v 參數以啟用詳細的日誌，方便排查問題。
- 簡單的命令行參數 — 可透過 --port 和 --dc-ip 參數輕鬆設定代理端口和目標資料中心。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動代理
```bash
python proxy/tg_ws_proxy.py
```
3. 設定 Telegram Desktop
```bash
右鍵點擊系統托盤圖示，選擇「打開 Telegram」
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Python 和相關依賴",
  "指令": "python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220",
  "預期輸出": "啟動 SOCKS5 代理並連接至指定的 Telegram 資料中心"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 1438 stars（131/天），forks 37（2.6%），顯示出穩定的增長趨勢。這個專案由 Flowseal 團隊開發，他們在開源社群中有一定的影響力。這個工具解決了 Telegram 在某些地區載入緩慢的問題，之前用戶可能需要依賴 VPN 或其他複雜的解決方案。近期的社群討論和需求反饋也促進了這個專案的曝光和使用。由於 Telegram 的使用者基數龐大，這個工具的需求自然隨之上升，特別是在需要繞過網路限制的情況下。

## 適合誰使用

**目標受眾**：需要在不穩定網路環境中使用 Telegram 的用戶。

> [!example] 使用場景
> - 遠端工作者用它來加速 Telegram 的文件傳輸，因為在高延遲網路環境下，這能顯著減少等待時間。
> - 開發者用它來測試 Telegram 應用的網路性能，因為透過 SOCKS5 代理可以模擬不同的網路條件。
> - 學生用它來在學校網路中繞過限制，因為這能讓他們更順利地使用 Telegram 進行學習交流。

## 架構分析

TG WS Proxy 的架構設計為一個本地 SOCKS5 代理，主要功能是攔截 Telegram 的流量並轉發至 Telegram 的資料中心。使用者的請求先經過本地代理，然後透過 WebSocket 連接至 Telegram 的伺服器，這樣的設計能夠降低延遲並提高載入速度。當 WebSocket 連接失敗時，系統會自動切換到 TCP 連接，這樣的容錯機制確保了使用者的連接穩定性。這種設計的代價在於需要持續監控 WebSocket 的狀態，並在失敗時迅速切換，這可能會增加系統的複雜度。整體而言，這個架構相對輕量，適合在資源有限的環境中運行。

## 技術深入分析

TG WS Proxy 的核心技術機制是透過本地 SOCKS5 代理攔截 Telegram 的流量，並使用 WebSocket 進行轉發。這樣的設計不僅能夠提高載入速度，還能在 WebSocket 連接失敗時自動切換至 TCP 連接，確保連接的穩定性。效能方面，該工具能夠在高延遲的網路環境中顯著改善使用體驗，尤其是在需要頻繁下載媒體和文件的情況下。設計上選擇 Python 作為開發語言，這使得整體架構相對簡單，依賴的庫也較少，降低了維護成本。與其他類似工具相比，TG WS Proxy 更專注於 Telegram 的特定需求，提供了更針對性的解決方案。技術風險方面，主要在於對 WebSocket 的依賴，若 Telegram 的伺服器端改變了協議或連接方式，可能會影響工具的穩定性。整合方面，該工具能夠輕鬆融入現有的 Telegram 使用流程，並且支援簡單的命令行參數設置，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝步驟和使用範例。安裝過程相對順暢，但需注意防毒軟體的誤報問題。文件中提供了快速上手指南，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 能有效提高 Telegram 的載入速度，特別是在高延遲網路環境中。
> - 簡單易用的命令行介面，適合快速上手。
> - 支援自動切換連接，增加了使用的穩定性。

> [!danger] 缺點
> - 目前僅支援 Windows，對其他平台的支持有限。
> - 可能會被防毒軟體誤報，使用時需注意防毒設定。
> - 對於某些地區的網路限制可能無法完全繞過，效果不一。

> [!warning] 注意事項
> - 僅支援 Windows 平台，其他平台的支持仍在開發中。
> - 可能會被防毒軟體誤報為惡意軟體，需要手動調整防毒設定。
> - 對於某些地區的網路限制可能無法完全繞過，效果因地而異。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步而非即時通訊，適合需要高效檔案傳輸的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的代理功能，但配置較為複雜，適合進階用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步，提供高效的檔案傳輸功能。 | 如果你的需求主要是檔案同步而非即時通訊，這個工具會更合適。 | medium，因為需要重新配置同步的目標和來源。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的代理功能，適合進階用戶。 | 如果需要更複雜的代理設置和功能，這個工具會更適合。 | high，因為需要重新學習和配置新的代理設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於檔案同步，提供高效的檔案傳輸功能。 | 提供更廣泛的代理功能，適合進階用戶。 |
> | 遷移成本 | - | medium，因為需要重新配置同步的目標和來源。 | high，因為需要重新學習和配置新的代理設置。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是檔案同步而非即時通訊，這個工具會更合適。 | 如果需要更複雜的代理設置和功能，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 防毒軟體可能會誤報為惡意軟體，導致無法下載或運行。
  - 解法：需要手動調整防毒設定，或使用不同的下載版本。
- [MEDIUM] 某些地區的網路限制可能無法完全繞過。
  - 解法：嘗試使用其他 VPN 或代理工具作為輔助。
- [MEDIUM] WebSocket 連接不穩定可能導致使用體驗下降。
  - 解法：在設定中手動指定多個資料中心 IP，以提高連接成功率。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在不穩定網路環境中使用 Telegram 的遠端工作者 | 非常適合 | 能有效提高 Telegram 的載入速度，改善使用體驗。 |
| 開發者需要測試 Telegram 的網路性能 | 適合 | 提供簡單的命令行介面，方便快速測試。 |
| 學生在學校網路中繞過限制使用 Telegram | 非常適合 | 能夠有效繞過網路限制，提升使用便利性。 |
| 大型企業需要穩定的 Telegram 連接 | 不適合 | 目前僅支援 Windows，對其他平台的支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到穩定的 Telegram 使用體驗，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，主要存取 Telegram 的流量，但需注意防毒軟體的誤報問題。

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
| Forks | 37 |
| Open Issues | 25 |
| Issue 解決率 | 79% (92 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 33 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Flowseal/tg-ws-proxy) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `cryptography` `customtkinter` `Pillow` `psutil` `pystray` `pyperclip`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 34 |
> | [@Copilot](https://github.com/Copilot) | 2 |
> | [@nullptr-deref](https://github.com/nullptr-deref) | 1 |

**最新版本**：v1.1.1 — TG WS Proxy v1.1.1 (2026-03-16)

> [!info]- Release Notes
> ## TG WS Proxy v1.1.1
> - Исправлена загрузка медии/файлов, которая частично сломалась в 1.0.5

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達79%。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-15 ~ 2026-03-16）
> **活躍天數** 2 天 · **最新 commit** typos

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#81](https://github.com/Flowseal/tg-ws-proxy/issues/81) | Сборка под Android и другие ОС | 5 | 3 |
> | [#39](https://github.com/Flowseal/tg-ws-proxy/issues/39) | [Предложение] Поддержка на Linux | 5 | 3 |
> | [#5](https://github.com/Flowseal/tg-ws-proxy/issues/5) | [Предложение] Сборка под Android | 5 | 8 |
> | [#134](https://github.com/Flowseal/tg-ws-proxy/issues/134) | [Проблема] Не грузятся медиа | 4 | 2 |
> | [#147](https://github.com/Flowseal/tg-ws-proxy/issues/147) | [Проблема]  не грузят ЧУЖИЕ файлы, медиа и видео | 3 | 7 |

## README 摘錄

> [!info]- 展開查看原文 README
> > [!CAUTION]
> >
> > ### Реакция антивирусов
> > Windows Defender часто ошибочно помечает приложение как **Wacatac**.  
> > Если вы не можете скачать из-за блокировки, то:
> > 1) Попробуйте скачать версию win7 (она ничем не отличается в плане функционала)
> > 2) Отключите антивирус на время скачивания, добавьте файл в исключения и включите обратно  
> >
> > **Всегда проверяйте, что скачиваете из интернета, тем более из непроверенных источников. Всегда лучше смотреть на детекты широко известных антивирусов на VirusTotal**
> 
> # TG WS Proxy
> 
> Локальный SOCKS5-прокси для Telegram Desktop, который перенаправляет трафик через WebSocket-соединения к указанным серверам, помогая частично ускорить работу Telegram.  
>   
> **Ожидаемый результат аналогичен прокидыванию hosts для Web Telegram**: ускорение загрузки и скачивания файлов, загрузки сообщений и части медиа.
> 
> ## Как это работает
> 
> ```
> Telegram Desktop → SOCKS5 (127.0.0.1:1080) → TG WS Proxy → WSS (kws*.web.telegram.org) → Telegram DC
> ```
> 
> 1. Приложение поднимает локальный SOCKS5-прокси на `127.0.0.1:1080`
> 2. Перехватывает подключения к IP-адресам Telegram
> 3. Извлекает DC ID из MTProto obfuscation init-пакета
> 4. Устанавливает WebSocket (TLS) соединение к соответствующему DC через домены `kws{N}.web.telegram.org`
> 5. Если WS недоступен (302 redirect) — автоматически переключается на прямое TCP-соединение
> 
> ## 🚀 Быстрый старт
> 
> ### Windows
> Перейдите на [страницу релизов](https://github.com/Flowseal/tg-ws-proxy/releases) и скачайте **`TgWsProxy.exe`**. Он собирается автоматически через [Github Actions](https://github.com/Flowseal/tg-ws-proxy/actions) из открытого исходного кода.
> 
> При первом запуске откроется окно с инструкцией по подключению Telegram Desktop. Приложение сворачивается в системный трей.
> 
> **Меню трея:**
> - **Открыть в Telegram** — автоматически настроить прокси через `tg://socks` ссылку
> - **Перезапустить прокси** — перезапуск без выхода из приложения
> - **Настройки...** — GUI-редактор конфигурации
> - **Открыть логи** — открыть файл логов
> - **Выход** — остановить прокси и закрыть приложение
> 
> ## Установка из исходников
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> ### Windows (Tray-приложение)
> 
> ```bash
> python windows.py
> ```
> 
> ### Консольный режим
> 
> ```bash
> python proxy/tg_ws_proxy.py [--port PORT] [--dc-ip DC:IP ...] [-v]
> ```
> 
> **Аргументы:**
> 
> | Аргумент | По умолчанию | Описание |
> |---|---|---|
> | `--port` | `1080` | Порт SOCKS5-прокси |
> | `--dc-ip` | `2:149.154.167.220`, `4:149.154.167.220` | Целевой IP для DC (можно указать несколько раз) |
> | `-v`, `--verbose` | выкл. | Подробное логирование (DEBUG) |
> 
> **Примеры:**
> 
> ```bash
> # Стандартный запуск
> python proxy/tg_ws_proxy.py
> 
> # Другой порт и дополнительные DC
> python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
> 
> # С подробным логированием
> python proxy/tg_ws_proxy.py -v
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
>    - **Тип:** SOCKS5
>    - **Сервер:** `127.0.0.1`
>    - **Порт:** `1080`
>    - **Логин/Пароль:** оставить пустыми
> 
> ## Конфигурация
> 
> Tray-приложение хранит данные в `%APPDATA%/TgWsProxy`:
> 
> ```json
> {
>   "port": 1080,
>   "dc_ip": [
>     "2:149.154.167.220",
>     "4:149.154.167.220"
>   ],
>   "verbose": false
> }
> ```
> 
> ## Автоматическая сборка
> 
> Проект содержит спецификацию PyInstaller ([`windows.spec`](packaging/windows.spec)) и GitHub Actions workflow ([`.github/workflows/build.yml`](.github/workflows/build.yml)) для автоматической сборки.
> 
> ```bash
> pip install pyinstaller
> pyinstaller packaging/windows.spec
> ```
> 
> ## Лицензия
> 
> [MIT License](LICENSE)

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[網路代理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

## 相關收錄

> [!note]- 直接競品（同子分類：網路代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路代理" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Flowseal--tg-ws-proxy"
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
> const concepts = ["CLI/TUI","自動化","網路代理"];
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
