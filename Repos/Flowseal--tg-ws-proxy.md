---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 794
stars_per_day: 132
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
last_reviewed: 2026-03-10
use_case: "提供本地 SOCKS5 代理伺服器以部分繞過 Telegram 加載問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 2
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供本地 SOCKS5 代理伺服器以部分繞過 Telegram 加載問題。"
---

# tg-ws-proxy

**794** stars · **132** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供本地 SOCKS5 代理伺服器以部分繞過 Telegram 加載問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (132 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望在不穩定網絡環境中提升 Telegram 使用體驗的普通用戶。
> **一句話重點** 這個專案的設計讓 Telegram 用戶能夠在不穩定的網絡環境中獲得更好的使用體驗，特別是在文件下載和消息加載方面。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到穩定的 Telegram 使用體驗，值得採用。

> [!abstract] 核心創新
> 透過 WebSocket 連接來加速 Telegram 的數據傳輸，顯著提升用戶體驗。

## 專案簡介

TG WS Proxy 是一個本地 SOCKS5 代理伺服器，設計用來加速 Telegram Desktop 的連接。其工作流程是將 Telegram 的流量通過本地代理轉發，並使用 WebSocket 連接到 Telegram 的數據中心（DC）。具體來說，當用戶的 Telegram Desktop 連接到 SOCKS5 代理（127.0.0.1:1080）時，代理會攔截連接請求，提取 DC ID，然後建立 WebSocket 連接，從而加速消息和媒體的加載。如果 WebSocket 連接失敗，則會自動切換到直接的 TCP 連接，確保連接的穩定性。這種設計使得用戶能夠在不改變 Telegram 客戶端的情況下，享受更快的加載速度。主要指令包括 `python proxy/tg_ws_proxy.py`，用戶可以通過參數自定義端口和目標 DC IP。這個工具的賣點在於其簡單的設置和自動化的連接切換機制，特別適合在網絡環境不佳的情況下使用。

**技術棧**：`Python 3.8` · `cryptography 46.0.5` · `customtkinter 5.2.2`

## 重點功能

- 本地 SOCKS5 代理 — 在 127.0.0.1:1080 提供 SOCKS5 代理服務。
- 自動切換連接 — 當 WebSocket 連接失敗時，自動切換到 TCP 連接。
- 簡單的 GUI 設定 — 提供系統托盤應用，方便用戶進行設置和監控。
- 詳細日誌記錄 — 支持詳細的日誌記錄，便於故障排查。
- 多 DC 支援 — 用戶可以指定多個 DC IP 以提高連接穩定性。

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
在 Telegram 中設置 SOCKS5 代理為 127.0.0.1，端口 1080
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 794 stars（132/天），forks 17（2.1%），顯示出一定的社群關注度。這個專案的作者 Flowseal 似乎專注於 Telegram 相關工具的開發，解決了 Telegram 用戶在某些地區遇到的加載速度問題。之前用戶可能需要手動調整 hosts 檔案來改善連接，而這個工具提供了一個更簡單的解決方案。社群的反饋也在 GitHub Issues 中顯示出對於 Linux 和 Android 支援的需求，顯示出其潛在的擴展性。這些因素共同促進了專案的快速增長。

## 適合誰使用

**目標受眾**：希望在不穩定網絡環境中提升 Telegram 使用體驗的普通用戶。

> [!example] 使用場景
> - Telegram 用戶用它來加速消息加載，因為在網絡不穩定的情況下，這個代理能顯著提升使用體驗。
> - 開發者用它來測試 Telegram 應用的性能，因為能夠快速切換連接方式，方便調試。
> - 系統管理員用它來監控 Telegram 流量，因為可以輕鬆設置並獲取日誌信息，便於分析。

## 架構分析

TG WS Proxy 採用 Python 實現，架構上使用了簡單的 SOCKS5 代理模式，並通過 WebSocket 與 Telegram 的數據中心進行連接。這種設計使得用戶能夠在本地快速設置代理，減少了對於複雜配置的需求。資料流方面，當 Telegram 客戶端發送請求時，代理會攔截並解析請求，提取所需的 DC ID，然後建立 WebSocket 連接。這種方法的優勢在於可以動態切換連接方式，確保連接的穩定性，但也可能在某些情況下導致延遲增加，特別是在 WebSocket 連接失敗時。整體來說，這個架構適合小型用戶群體，但在高流量情況下可能會出現性能瓶頸。

## 技術深入分析

TG WS Proxy 的核心技術在於使用 SOCKS5 代理和 WebSocket 連接來優化 Telegram 的數據傳輸。這個工具的設計模式簡單明瞭，通過攔截 Telegram 的連接請求，並根據需要建立 WebSocket 連接，從而加速數據的加載。效能方面，這個工具能夠在大多數情況下提供穩定的連接，但在高流量時可能會出現延遲。選擇 Python 作為開發語言使得這個工具的開發和維護變得相對簡單，但也可能在性能上有所妥協，特別是在處理大量並發連接時。這個專案的依賴樹相對簡單，主要依賴於幾個輕量級的庫，降低了使用的門檻。技術風險方面，這個工具在高流量情況下可能會出現性能瓶頸，特別是在 WebSocket 連接失敗時，可能會導致用戶體驗下降。整體來說，這個工具的整合難度較低，適合快速部署和使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了詳細的安裝和使用說明，讓新手能夠快速上手。安裝過程順暢，沒有明顯的坑。提供了 GUI 設定和命令行選項，滿足不同用戶的需求。

## 優缺點分析

> [!success] 優點
> - 簡單易用的設置過程，適合普通用戶。
> - 自動切換連接方式，提升了連接的穩定性。
> - 支持詳細日誌記錄，便於故障排查。

> [!danger] 缺點
> - 目前僅支援 Windows，其他平台的支援尚未完善。
> - 需要用戶手動設置 Telegram 的代理，增加了使用門檻。
> - 在高流量情況下可能會出現性能瓶頸。

> [!warning] 注意事項
> - 目前僅支援 Windows 平台，Linux 和 Android 支援正在開發中。
> - 需要用戶手動設置 Telegram 的 SOCKS5 代理，無法自動配置。
> - 在某些情況下，WebSocket 連接可能會失敗，需依賴 TCP 連接作為備援。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的代理功能，但專注於文件同步而非即時通訊。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更全面的代理解決方案，支持多種協議，但設置較為複雜。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供全面的代理解決方案，支持多種協議，適合需要多功能的用戶。 | 如果你的需求不僅限於 Telegram，並且需要一個多功能的代理工具。 | medium，因為需要重新配置和學習新工具的使用方式。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，提供簡單的代理功能，但不支持即時通訊。 | 如果你的主要需求是文件同步，並且不需要即時通訊功能。 | low，因為功能相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **Shadowbroker** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供全面的代理解決方案，支持多種協議，適合需要多功能的用戶。 | 專注於文件同步，提供簡單的代理功能，但不支持即時通訊。 |
> | 遷移成本 | - | medium，因為需要重新配置和學習新工具的使用方式。 | low，因為功能相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的需求不僅限於 Telegram，並且需要一個多功能的 | 如果你的主要需求是文件同步，並且不需要即時通訊功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用或小型專案，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網絡環境下，WebSocket 連接可能會失敗，導致需要手動切換到 TCP 連接。
  - 解法：用戶需手動檢查連接狀態，並在需要時重新啟動代理。
- [MEDIUM] Windows 以外的系統尚未支援，使用者需等待未來更新。
  - 解法：考慮使用其他代理工具，或等待開發者提供支援。
- [MEDIUM] 在高流量情況下，可能會出現性能瓶頸，導致延遲。
  - 解法：減少同時連接數量，或考慮使用更高效的代理方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊使用 Telegram 進行溝通 | 非常適合 | 能夠提升消息加載速度，改善團隊協作。 |
| 大型企業需要穩定的 Telegram 連接 | 不適合 | 在高流量情況下可能會出現性能瓶頸。 |
| 開發者需要測試 Telegram 應用的性能 | 適合 | 提供詳細的日誌記錄，便於故障排查。 |
| 普通用戶希望在不穩定的網絡環境中使用 Telegram | 非常適合 | 能夠顯著提升使用體驗，特別是在文件下載方面。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到穩定的 Telegram 使用體驗，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅在本地運行，且不存取敏感資料。依賴的庫也相對安全，無已知的供應鏈風險。

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

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有 4 個開放問題待解決。
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
> | [#36](https://github.com/Flowseal/tg-ws-proxy/issues/36) | [предложение] macos support | 0 | 4 |
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

相關概念：[[網路代理]] · [[SOCKS5]] · [[WebSocket]]

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
> const concepts = ["網路代理","SOCKS5","WebSocket"];
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
