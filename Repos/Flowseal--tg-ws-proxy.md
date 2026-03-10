---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 774
stars_per_day: 129
forks: 14
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v1.0.4"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - python
---

# tg-ws-proxy

**774** stars · **129** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理加速 Telegram 的加載速度。

> [!abstract] 核心創新
> 透過 SOCKS5 代理加速 Telegram 的加載速度，改善用戶體驗。

## 專案簡介

它讓 Telegram Desktop 用戶能透過本地 SOCKS5 代理來加速連接，改善消息和媒體的加載速度。使用 Python 實現，並透過 WebSocket 連接 Telegram 的伺服器。與直接連接 Telegram 相比，這個工具能有效減少延遲，特別是在網路不穩定的情況下。對於經常使用 Telegram 的人來說，這是一個值得一試的工具。

**技術棧**：`Python`

## 重點功能

- 建立本地 SOCKS5 代理以加速 Telegram 連接。
- 自動切換至直接 TCP 連接以應對 WebSocket 不可用的情況。
- 簡單易用的設置流程，適合各類用戶。

## 快速開始

1. 下載最新版本的 TgWsProxy.exe
```bash
訪問 https://github.com/Flowseal/tg-ws-proxy/releases
```
2. 啟動 TgWsProxy.exe 並按照指示進行設置
```bash
運行 TgWsProxy.exe
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者專注於 Telegram 的使用者需求，特別是在網路環境不佳的情況下。其簡單的設置和明顯的效益吸引了不少用戶。

## 適合誰使用

**目標受眾**：Telegram Desktop 用戶和開發者。

> [!example] 使用場景
> - [Telegram 用戶] 用它來 加速訊息加載，因為這樣可以更快接收重要信息。
> - [開發者] 用它來 測試 Telegram 應用的性能，因為能模擬不同的網路環境。
> - [技術愛好者] 用它來 研究 Telegram 的網路架構，因為能深入了解其流量模式。

> [!warning] 注意事項
> 僅支援 Telegram Desktop。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 14 |
| Open Issues | 4 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 78 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 19 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v1.0.4 — TG WS Proxy v1.0.4 (2026-03-10)

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
> - **Выход*

## 延伸閱讀

相關概念：[[SOCKS5 代理]] · [[WebSocket]] · [[MTProto]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
