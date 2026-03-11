---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 797
stars_per_day: 133
forks: 17
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "網路代理"
release_tag: "v1.0.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供 Telegram 的 SOCKS5 代理服務，幫助加速 Telegram 的加載速度。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 2
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794,2026-03-11:797"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供 Telegram 的 SOCKS5 代理服務，幫助加速 Telegram 的加載速度。"
---

# tg-ws-proxy

**797** stars · **133** stars/天 · 建立 6 天前 · Python · MIT

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

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的 SOCKS5 代理服務，幫助加速 Telegram 的加載速度。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (133 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望在不穩定網路環境中提高 Telegram 使用體驗的普通用戶。
> **一句話重點** 這個專案提供了一個針對 Telegram 的專用代理解決方案，能有效改善用戶的使用體驗。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到顯著的 Telegram 使用體驗提升，值得一試。

> [!abstract] 核心創新
> 提供了一個專為 Telegram 設計的 SOCKS5 代理，能夠自動切換連接以提高穩定性。

## 專案簡介

TG WS Proxy 是一個本地 SOCKS5 代理伺服器，專為 Telegram Desktop 設計，旨在透過 WebSocket 連接來加速 Telegram 的加載和下載。用戶只需將 Telegram 的代理設置為 `127.0.0.1:1080`，然後代理會自動處理與 Telegram 伺服器的連接，並在必要時切換到直接 TCP 連接。這樣的設計讓用戶能夠在不改變 Telegram 客戶端的情況下，獲得更快的加載速度和更流暢的使用體驗。此專案使用 Python 開發，依賴於幾個輕量級的庫，如 `cryptography` 和 `psutil`，使其在性能上相對輕量，適合在各種環境下運行。與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，TG WS Proxy 的主要優勢在於其專注於 Telegram 的特定需求，並且提供了 GUI 介面來簡化設置過程。

用戶可以輕鬆地從系統托盤管理代理，並且支持多個 DC 的配置，這使得它在多變的網路環境中更具彈性。儘管目前僅支持 Windows，但社群對於 Linux 和 macOS 的支持需求正在增加，這可能會成為未來的發展方向。對於需要在 Telegram 上進行大量下載或使用的用戶，這個工具提供了顯著的性能提升，特別是在網路不穩定的情況下。整體而言，TG WS Proxy 是一個值得考慮的工具，特別是對於那些希望改善 Telegram 使用體驗的用戶。

**技術棧**：`Python 3.8` · `cryptography 46.0.5` · `psutil 7.0.0`

## 重點功能

- 本地 SOCKS5 代理 — 在 `127.0.0.1:1080` 提供代理服務，支持 Telegram Desktop 的流量轉發。
- 自動切換連接 — 當 WebSocket 連接失敗時，自動切換到直接 TCP 連接，確保穩定性。
- GUI 設置介面 — 提供系統托盤的 GUI 介面，方便用戶管理代理設置和查看日誌。
- 多 DC 支持 — 允許用戶指定多個 DC 的 IP 地址，靈活應對不同的網路環境。
- 詳細日誌功能 — 支持詳細的日誌記錄，方便用戶進行故障排查和性能分析。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動代理
```bash
python proxy/tg_ws_proxy.py
```
3. 設置 Telegram 代理
```bash
在 Telegram 中設置 SOCKS5 代理為 127.0.0.1，端口為 1080
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 797 stars（133/天），forks 17（2.1%），這顯示出一定的社群關注度。作者 Flowseal 在 Telegram 相關工具方面有一定的經驗，這個專案解決了 Telegram 用戶在加載速度上的痛點，特別是在網路環境不佳的情況下。最近的推廣活動和社群反饋也促進了這個專案的曝光。隨著 Telegram 用戶數量的增加，對於加速工具的需求也隨之上升，這使得 TG WS Proxy 成為一個受歡迎的選擇。

## 適合誰使用

**目標受眾**：希望在不穩定網路環境中提高 Telegram 使用體驗的普通用戶。

> [!example] 使用場景
> - Telegram 用戶用它來加速加載 Telegram 的消息和媒體，因為在網路不穩定的環境中，使用此代理能顯著提高加載速度。
> - 開發者用它來測試 Telegram 應用的性能，因為能夠輕鬆配置不同的 DC 伺服器，並且提供詳細的日誌以便於調試。
> - 網路管理員用它來監控 Telegram 的流量，因為可以輕鬆地設置 SOCKS5 代理並獲取流量數據。

## 架構分析

TG WS Proxy 採用單一 Python 應用架構，這樣的設計使得部署和運行都相對簡單。應用啟動後會在本地創建一個 SOCKS5 代理，並監聽來自 Telegram 的請求。當請求到達時，代理會解析 Telegram 的 MTProto 初始化包，提取 DC ID，並建立 WebSocket 連接。

若 WebSocket 連接失敗，則會自動切換到 TCP 連接，這樣的設計確保了用戶在不同網路環境中的穩定性。這種架構的代價在於，若 Telegram 的伺服器地址或協議變更，可能需要快速更新代理邏輯。整體而言，這個架構在小型專案中表現良好，但在大規模使用時可能會面臨性能瓶頸，特別是在高併發的情況下。

## 技術深入分析

TG WS Proxy 的核心技術機制是通過 SOCKS5 代理和 WebSocket 連接來加速 Telegram 的流量。當 Telegram Desktop 發送請求時，代理會攔截並解析請求，提取出 DC ID，然後建立 WebSocket 連接。這種設計使得用戶能夠在不改變 Telegram 客戶端的情況下，獲得更快的加載速度。效能上，這個代理能夠在大多數情況下提供穩定的連接，但在高併發的情況下可能會出現瓶頸。

選擇 Python 作為開發語言使得這個專案在開發和維護上相對簡單，但也可能在性能上有所妥協。依賴的庫如 `cryptography` 和 `psutil` 都是輕量級的，這使得整個應用的啟動和運行都相對快速。設計上，這個代理的主要風險在於對 Telegram 伺服器的依賴，若伺服器地址或協議變更，可能需要快速更新代理邏輯。整合方面，TG WS Proxy 可以輕鬆與 Telegram Desktop 配合使用，但在其他應用場景中可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用說明，安裝過程相對順暢，沒有明顯的坑。雖然沒有專門的入門指南，但快速啟動部分已經涵蓋了基本的使用流程。文件目前僅提供英文版本，這可能對非英語用戶造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用，能夠快速設置和運行。
> - 提供 GUI 介面，方便用戶管理和配置。
> - 支持多個 DC 的配置，靈活應對不同的網路環境。

> [!danger] 缺點
> - 目前僅支持 Windows，對於其他平台的支持仍在開發中。
> - 需要手動設置 Telegram 的代理，對於新手用戶可能不夠友好。
> - 在某些網路環境中可能無法完全解決加載問題。

> [!warning] 注意事項
> - 目前僅支持 Windows 平台，Linux 和 macOS 的支持仍在開發中。
> - 需要手動設置 Telegram 的 SOCKS5 代理，對於不熟悉的用戶可能會有一定的學習曲線。
> - 在某些網路環境中，可能無法完全解決所有加載問題，效果因環境而異。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於文件同步，而 TG WS Proxy 專注於 Telegram 的流量加速，功能範圍不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的代理功能，但不專注於 Telegram，因此在 Telegram 使用上可能不如 TG WS Proxy 方便。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而 TG WS Proxy 專注於 Telegram 的流量加速，功能範圍不同。 | 如果你的需求是文件同步而非流量加速，則應選擇 AlpinDale/parsync。 | low，因為兩者的功能範圍不同，遷移成本較低。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的代理功能，但不專注於 Telegram，因此在 Telegram 使用上可能不如 TG WS Proxy 方便。 | 如果需要一個通用的代理解決方案，則可以考慮 BigBodyCobain/Shadowbroker。 | medium，因為需要重新配置和調整使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，而 TG WS Proxy 專注於 Telegram 的流量加速，功能範圍不同。 | 提供更廣泛的代理功能，但不專注於 Telegram，因此在 Telegram 使用上可能不如 TG WS Proxy 方便。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移成本較低。 | medium，因為需要重新配置和調整使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是文件同步而非流量加速，則應選擇 AlpinDa | 如果需要一個通用的代理解決方案，則可以考慮 BigBodyC |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境中，WebSocket 連接可能會失敗，導致代理無法正常工作。
  - 解法：可以手動切換到 TCP 連接以繞過此問題。
- [MEDIUM] 如果 Telegram 的伺服器地址變更，可能需要更新代理配置。
  - 解法：定期檢查 GitHub 頁面以獲取最新的伺服器地址。
- [low] 在使用 GUI 時，可能會出現配置不生效的情況。
  - 解法：重新啟動代理應用以確保配置生效。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在不穩定網路環境中使用 Telegram 的用戶 | 非常適合 | 能顯著提高 Telegram 的加載速度和穩定性。 |
| 開發者需要測試 Telegram 應用的性能 | 適合 | 提供詳細的日誌記錄，方便進行性能分析。 |
| 普通用戶希望簡化 Telegram 的代理設置 | 普通 | 雖然提供 GUI，但仍需手動設置 Telegram 代理。 |
| 需要在 Linux 或 macOS 上使用 Telegram 的用戶 | 不適合 | 目前僅支持 Windows 平台。 |
| 希望在大型企業環境中使用 Telegram 的團隊 | 未測試 | 尚未進行大規模的性能測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的 Telegram 使用體驗提升，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅在本地運行，不存取敏感資料。依賴的庫均為知名開源項目，安全性相對可靠。

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
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 17 |
| Open Issues | 4 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 78 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Flowseal/tg-ws-proxy) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `cryptography` `customtkinter` `Pillow` `psutil` `pystray` `pyperclip`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 19 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v1.0.4 — TG WS Proxy v1.0.4 (2026-03-10)

> [!info]- Release Notes
> ## TG WS Proxy v1.0.4
> - Добавлена конфигурация хоста (для возможности подключения других устройств в локальной сети. Например `0.0.0.0` и вместо айпи используем локальный адрес)
> - Улучшен механизм проверки запущенного приложения
> - Добавлено уведомление, если порт уже занят

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和回應。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-10）
> **活躍天數** 3 天 · **最新 commit** unknown behavior on mobiles with media dcs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#39](https://github.com/Flowseal/tg-ws-proxy/issues/39) | [Предложение] Поддержка на Linux | 3 | 1 |
> | [#5](https://github.com/Flowseal/tg-ws-proxy/issues/5) | [Предложение] Сборка под Android | 2 | 7 |
> | [#36](https://github.com/Flowseal/tg-ws-proxy/issues/36) | [предложение] macos support | 0 | 5 |
> | [#35](https://github.com/Flowseal/tg-ws-proxy/issues/35) | SOCKS5 to MTPROTO | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
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

相關概念：[[SOCKS5]] · [[WebSocket]] · [[MTProto]]

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
> const concepts = ["SOCKS5","WebSocket","MTProto"];
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
