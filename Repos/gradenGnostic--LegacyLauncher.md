---
repo: gradenGnostic/LegacyLauncher
url: https://github.com/gradenGnostic/LegacyLauncher
owner: gradenGnostic
owner_type: User
language: JavaScript
license: MIT
description: "A custom launcher for Minecraft LCE."
homepage: "https://gradengnostic.github.io/legacylauncherweb/"
stars: 297
stars_per_day: 50
forks: 16
open_issues: 46
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v3.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - javascript
  - minecraft
  - minecraft_client
  - minecraft_launcher
  - minecraftlauncher
  - minecraftlce
aliases:
  - "LegacyLauncher"
  - "gradenGnostic/LegacyLauncher"
  - "提供一個自訂的啟動器來運行 Minecraft Legacy Console Edition。"
---

# LegacyLauncher

**297** stars · **50** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1`

> [!summary] 一句話摘要
> 提供一個自訂的啟動器來運行 Minecraft Legacy Console Edition。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，提供用戶友好的界面和多平台支持。它使用 Electron 框架構建，並具備自動更新功能，能夠從 GitHub 獲取最新版本。與其他啟動器相比，LegacyLauncher 的特色在於其 Minecraft 風格的 GUI 和簡單的配置選項，讓玩家能夠輕鬆設置遊戲環境。使用者可以保存個人資料並追蹤遊戲時間，這對於長期玩家來說非常實用。整體而言，這個啟動器適合所有喜愛 Minecraft 的玩家，特別是希望簡化啟動過程的用戶。

**技術棧**：`Electron` · `JavaScript` · `HTML` · `CSS`

## 重點功能

- 提供 Minecraft 風格的 GUI 界面。
- 自動更新功能，隨時獲取最新版本。
- 跨平台支持，兼容 Windows 和 Linux。
- 支持保存用戶名和追蹤遊戲時間。
- 可配置的啟動選項，包括 IP 和端口設置。

## 快速開始

1. 克隆或下載此存儲庫
```bash
git clone https://github.com/gradenGnostic/LegacyLauncher.git
```
2. 安裝依賴
```bash
npm install
```
3. 運行啟動器
```bash
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Minecraft 的持續受歡迎，玩家對於更好的啟動器需求增加。LegacyLauncher 提供的自訂化和易用性吸引了不少玩家的注意。開發者的活躍更新也讓這個專案受到關注。

## 適合誰使用

**目標受眾**：喜愛 Minecraft 並希望使用自訂啟動器的玩家。

> [!example] 使用場景
> - Minecraft 玩家 用它來 啟動遊戲，因為它提供了簡單的界面和自動更新功能。
> - 開發者 用它來 測試不同的 Minecraft 版本，因為它支持多個配置選項。
> - Linux 用戶 用它來 運行 Minecraft，因為它提供了 Wine 和 Proton 的兼容性選擇。

## 架構分析

LegacyLauncher 使用 Electron 框架構建，前端使用 HTML 和 CSS，後端使用 Node.js。數據流是 用戶輸入 → 啟動器配置 → 遊戲啟動。

## 優缺點分析

> [!success] 優點
> - 提供友好的用戶界面，易於使用。
> - 支持多平台，適合不同用戶。
> - 自動更新功能，保持最新版本。

> [!danger] 缺點
> - 需要安裝 Node.js 和 npm。
> - 在某些平台上可能需要額外配置。
> - 功能可能隨著更新而變動。

> [!warning] 注意事項
> - 需要安裝 Node.js 和 npm。
> - 對於 Linux 用戶，可能需要額外的兼容性設置。
> - 某些功能在不同平台上可能表現不一致。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 16 |
| Open Issues | 46 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://gradengnostic.github.io/legacylauncherweb/) |
| Repo 大小 | 1.3 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 67
>     "HTML" : 17
>     "CSS" : 16
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gradenGnostic](https://github.com/gradenGnostic) | 34 |
> | [@Dettomi](https://github.com/Dettomi) | 1 |
> | [@dtentiion](https://github.com/dtentiion) | 1 |

**最新版本**：v3.0.1 — LegacyLauncher v3.0.1 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍，持續更新，並有良好的使用者反饋。

## README 摘錄

> [!info]- 展開查看原文 README
> # LegacyLauncher
> 
> A custom launcher for Minecraft Legacy Console Edition.
> 
> ## Features
> 
> - **Minecraft-style GUI**: Authentic pixelated interface with Minecraft font and styling
> - **Automatic Updates**: Fetches latest releases from GitHub repositories
> - **Cross-platform Support**: Works on Windows and Linux
> - **Profiles**: Save your username and track playtime
> - **Custom Launch Options**: Configure IP, port, and server mode
> 
> ## Installation
> 
> ### From Source
> 1. Clone or download this repository
> 2. Install dependencies:
>    ```bash
>    npm install
>    ```
> 3. Run the launcher:
>    ```bash
>    npm start
>    ```
> 
> ## Building
> 
> ### Linux AppImage
> ```bash
> npm run dist
> ```
> 
> ### Windows Installer
> ```bash
> npm run dist:win
> ```
> 
> ## Configuration
> 
> ### Repository Source
> By default, the launcher fetches releases from `smartcmd/MinecraftConsoles`. You can change this in the Options menu.
> 
> ### Launch Options
> - **GitHub Repository**: Source repository for game releases
> - **Client Executable**: Name of the executable file (default: `Minecraft.Client.exe`)
> - **Compatibility Layer**: For Linux users - choose between direct execution, Wine, or Proton
> - **Connect/Bind IP**: Optional IP address for multiplayer
> - **Port**: Optional port number
> - **Server Mode**: Launch as headless server
> 
> ### Profile Settings
> - **Username**: Your in-game player name
> - **Playtime Tracking**: Automatically tracks total playtime
> 
> ## System Requirements
> 
> - **Windows**: Direct execution of Windows executables
> - **Linux**: Wine or Proton for running Windows executables
> - **Internet**: Required for downloading game updates
> 
> ## Compatibility Layers (Linux)
> 
> The launcher supports several compatibility options for Linux:
> 
> - **Direct**: Run native Linux executables (if available)
> - **Wine**: Wine compatibility layer
> - **Proton**: Steam's Proton compatibility layer
> 
> ## Dependencies
> 
> - **Electron**: Cross-platform desktop app framework
> - **discord-rpc**: Discord Rich Presence integration
> - **extract-zip**: ZIP archive extraction
> - **Tailwind CSS**: UI styling (via CDN)
> 
> ## Development
> 
> The launcher is built with:
> - **Frontend**: HTML, CSS, JavaScript
> - **Backend**: Electron with Node.js
> - **Styling**: Custom CSS with Minecraft theme + Tailwind CSS
> - **Build**: Electron Builder
> 
> ## Troubleshooting
> 
> ### Common Issues
> 
> 1. **Repository not found**: Check the repository name in Options
> 2. **Executable not found**: Verify the executable name matches the downloaded file
> 3. **Launch failures**: Try different compatibility lay

## 延伸閱讀

相關概念：[[Minecraft]] · [[啟動器]] · [[跨平台應用]]

[GitHub](https://github.com/gradenGnostic/LegacyLauncher) · [官方網站](https://gradengnostic.github.io/legacylauncherweb/)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，296 stars
