---
repo: gradenGnostic/LegacyLauncher
url: https://github.com/gradenGnostic/LegacyLauncher
owner: gradenGnostic
owner_type: User
language: JavaScript
license: MIT
description: "A custom launcher for Minecraft LCE."
homepage: "https://gradengnostic.github.io/legacylauncherweb/"
stars: 306
stars_per_day: 51
forks: 16
open_issues: 46
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
release_tag: "v3.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - "topic/minecraft"
  - "topic/minecraft_client"
  - "topic/minecraft_launcher"
  - "topic/minecraftlauncher"
  - "topic/minecraftlce"
aliases:
  - "LegacyLauncher"
  - "gradenGnostic/LegacyLauncher"
  - "為 Minecraft Legacy Console Edition 提供自訂啟動器，讓玩家更方便地啟動遊戲。"
---

# LegacyLauncher

**306** stars · **51** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1`

> [!summary] 一句話摘要
> 為 Minecraft Legacy Console Edition 提供自訂啟動器，讓玩家更方便地啟動遊戲。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (51 stars/day)
> **適合** 希望在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家。
> **一句話重點** LegacyLauncher 讓 Minecraft Legacy Console Edition 的啟動變得更靈活，特別適合需要自訂啟動選項的玩家。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，提供了友好的 GUI 界面和多種配置選項。用戶可以透過此啟動器自動獲取最新的遊戲版本，並支持 Windows 和 Linux 平台。它的核心技術基於 Electron 框架，並使用 JavaScript、HTML 和 CSS 開發，確保了跨平台的兼容性。與其他啟動器相比，LegacyLauncher 提供了更高的自定義性，允許用戶設定 IP、端口和伺服器模式，這在許多其他啟動器中並不常見。使用者可以輕鬆保存個人資料和遊玩時間，這對於喜愛追蹤遊戲進度的玩家來說非常實用。系統需求方面，Windows 用戶可以直接執行可執行檔，而 Linux 用戶則需要使用 Wine 或 Proton。整體來說，這個專案已經達到穩定版本，適合各種規模的 Minecraft 玩家使用。對於希望在 Linux 環境下運行 Minecraft 的玩家來說，LegacyLauncher 是一個值得考慮的選擇，但如果你不需要自定義啟動選項，可能會有其他更簡單的啟動器可供選擇。

**技術棧**：`Electron` · `JavaScript` · `HTML` · `CSS` · `Tailwind CSS`

## 重點功能

- Minecraft-style GUI — 提供像素化的界面，使用 Minecraft 字體和樣式。
- Automatic Updates — 自動從 GitHub 獲取最新遊戲版本。
- Cross-platform Support — 支持 Windows 和 Linux 系統。
- Profiles — 保存用戶名並追蹤遊玩時間。
- Custom Launch Options — 設定 IP、端口和伺服器模式。

## 快速開始

1. 克隆或下載此倉庫
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

## 程式碼範例

```bash
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者團隊對 Minecraft 的熱情和專業背景使得這個專案能夠快速成長，並且切中了玩家對於自訂啟動器的需求。隨著 Minecraft 社群的擴大，對於更靈活的啟動方式的需求也隨之增加，這使得 LegacyLauncher 在玩家中受到青睞。

## 適合誰使用

**目標受眾**：希望在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家。

> [!example] 使用場景
> - Minecraft 玩家用它來快速啟動 Legacy Console Edition，因為它提供了自動更新和多平台支持，讓玩家不必擔心版本問題。
> - Linux 用戶用它來運行 Minecraft，因為它支持 Wine 和 Proton，讓在 Linux 上遊玩變得更簡單。
> - 開發者用它來測試 Minecraft 的不同版本，因為它允許自定義啟動選項，能夠方便地切換伺服器模式和其他參數。

## 架構分析

LegacyLauncher 採用前後端分離的架構，前端使用 HTML、CSS 和 JavaScript，後端則基於 Electron 和 Node.js。用戶輸入 → LegacyLauncher 進行處理 → 遊戲啟動。關鍵技術決策包括使用 Electron 來實現跨平台支持，並利用 Tailwind CSS 進行界面樣式設計。專案目錄結構中，主要的配置檔案和依賴都在 package.json 中。

## 優缺點分析

> [!success] 優點
> - 提供自動更新功能，確保用戶使用最新版本的遊戲。
> - 界面設計符合 Minecraft 主題，增強玩家的沉浸感。
> - 支持多種啟動選項，滿足不同玩家的需求。

> [!danger] 缺點
> - 對於新手用戶來說，安裝和配置過程可能較為複雜。
> - Linux 用戶需額外安裝 Wine 或 Proton，增加了使用門檻。
> - 缺乏對其他遊戲的支持，專注於 Minecraft。

> [!warning] 注意事項
> - 僅支援 Windows 和 Linux 系統。
> - Linux 用戶需要安裝 Wine 或 Proton 來運行 Windows 可執行檔。
> - 對於某些 Linux 發行版，可能需要額外的配置來運行 AppImage。

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
> 3. **Launch failures**: Try different compatibility layers on Linux
> 4. **Discord RPC issues**: Ensure Discord is running and RPC is enabled
> 
> ### Linux Specific
> - Install Wine: `sudo apt install wine` (Ubuntu/Debian)
> - For Proton: Requires Steam installation
> - AppImage permissions: `chmod +x LegacyLauncher-*.AppImage`
> 
> ## Contributing
> 
> Feel free to submit issues and pull requests for improvements.
> 
> ## Star History

## 延伸閱讀

[GitHub](https://github.com/gradenGnostic/LegacyLauncher) · [官方網站](https://gradengnostic.github.io/legacylauncherweb/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "gradenGnostic--LegacyLauncher"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "gradenGnostic--LegacyLauncher"
> SORT stars DESC
> ```

---

## 個人筆記

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
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，296 stars
