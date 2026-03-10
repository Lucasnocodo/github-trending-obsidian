---
repo: gradenGnostic/LegacyLauncher
url: https://github.com/gradenGnostic/LegacyLauncher
owner: gradenGnostic
owner_type: User
language: JavaScript
license: MIT
description: "A custom launcher for Minecraft LCE."
homepage: "https://gradengnostic.github.io/legacylauncherweb/"
stars: 300
stars_per_day: 50
forks: 16
open_issues: 45
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
  - "category/開發工具"
  - "lang/javascript"
  - "topic/minecraft"
  - "topic/minecraft_client"
  - "topic/minecraft_launcher"
  - "topic/minecraftlauncher"
  - "topic/minecraftlce"
aliases:
  - "LegacyLauncher"
  - "gradenGnostic/LegacyLauncher"
  - "為 Minecraft Legacy Console Edition 提供自定義啟動器，簡化遊戲啟動流程。"
---

# LegacyLauncher

**300** stars · **50** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1`

> [!summary] 一句話摘要
> 為 Minecraft Legacy Console Edition 提供自定義啟動器，簡化遊戲啟動流程。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自定義啟動器，提供了友好的 GUI 和自動更新功能。它使用 Electron 框架構建，支持 Windows 和 Linux 平台，並能夠根據用戶需求配置啟動選項。與其他啟動器相比，LegacyLauncher 提供了更具 Minecraft 風格的界面，並支持多種兼容性層，讓 Linux 用戶能夠輕鬆運行 Windows 執行檔。這個啟動器能夠自動跟蹤遊戲時間，並保存用戶配置，讓玩家能夠更方便地管理遊戲。總體來看，LegacyLauncher 是一個穩定且易於使用的工具，適合各類 Minecraft 玩家。

**技術棧**：`JavaScript` · `Electron` · `HTML` · `CSS`

## 重點功能

- 提供 Minecraft 風格的 GUI，增強用戶體驗。
- 自動更新功能，確保用戶使用最新版本。
- 支持 Windows 和 Linux 平台，擴大使用範圍。
- 保存用戶配置，跟蹤遊戲時間。
- 支持自定義啟動選項，滿足不同需求。

## 快速開始

1. 克隆或下載這個倉庫
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
> 作者對 Minecraft 社群有深入了解，LegacyLauncher 直接解決了玩家在啟動遊戲過程中的繁瑣問題。隨著 Minecraft 的持續流行，對於更好的啟動器需求也隨之增加，這使得該工具在玩家中受到關注。

## 適合誰使用

**目標受眾**：喜愛 Minecraft 的玩家，特別是使用 Legacy Console Edition 的用戶。

> [!example] 使用場景
> - Minecraft 玩家用它來快速啟動遊戲，因為它提供了自動更新和配置選項。
> - Linux 用戶用它來運行 Minecraft，因為它支持多種兼容性層。
> - 開發者用它來測試 Minecraft 版本，因為它能夠輕鬆管理不同的啟動配置。

## 架構分析

LegacyLauncher 採用 Electron 框架構建，前端使用 HTML 和 CSS 提供用戶界面，後端使用 Node.js 處理啟動邏輯。用戶的配置和遊戲資料會被保存，方便未來使用。

## 優缺點分析

> [!success] 優點
> - 界面友好，符合 Minecraft 的風格。
> - 自動更新功能，減少手動操作。
> - 支持多平台，擴大了使用者基礎。

> [!danger] 缺點
> - 僅限於 Legacy Console Edition，無法支持其他版本。
> - Linux 用戶需額外配置，增加使用複雜度。
> - 可能需要手動調整某些啟動選項。

> [!warning] 注意事項
> - 僅支持 Legacy Console Edition。
> - Linux 用戶需要安裝額外的兼容性層。
> - 對於某些功能可能需要手動配置。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 16 |
| Open Issues | 45 |
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

**社群活躍度**：社群活躍，定期更新和修復問題。

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

相關概念：[[跨平台應用]] · [[遊戲啟動器]] · [[用戶界面設計]]

[GitHub](https://github.com/gradenGnostic/LegacyLauncher) · [官方網站](https://gradengnostic.github.io/legacylauncherweb/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "gradenGnostic--LegacyLauncher"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，296 stars
