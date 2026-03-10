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
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - easy_install
  - "topic/minecraft"
  - "topic/minecraft_client"
  - "topic/minecraft_launcher"
  - "topic/minecraftlauncher"
  - "topic/minecraftlce"
aliases:
  - "LegacyLauncher"
  - "gradenGnostic/LegacyLauncher"
  - "提供一個自訂的 Minecraft Legacy Console Edition 啟動器，支援多平台。"
---

# LegacyLauncher

**306** stars · **51** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1` `easy-install`

> [!summary] 一句話摘要
> 提供一個自訂的 Minecraft Legacy Console Edition 啟動器，支援多平台。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (51 stars/day)
> **適合** 希望在 Windows 和 Linux 上輕鬆啟動 Minecraft Legacy Console Edition 的玩家。
> **一句話重點** LegacyLauncher 的設計不僅注重功能性，還強調了遊戲的視覺體驗，讓玩家感受到更強的沉浸感。

> [!abstract] 核心創新
> LegacyLauncher 提供了一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，具有獨特的 Minecraft 風格界面。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，提供了 Minecraft 風格的 GUI 和自動更新功能。它支援 Windows 和 Linux 平台，並允許用戶保存遊戲配置和追蹤遊玩時間。使用者可以透過簡單的指令來設置 IP、端口和伺服器模式，並且可以輕鬆地從 GitHub 獲取最新版本。與其他啟動器相比，LegacyLauncher 的界面更具 Minecraft 的風格，並且提供了多種兼容性層選項，特別是對於 Linux 用戶來說，這一點尤為重要。使用者只需執行幾個簡單的命令即可安裝和運行，並且可以透過配置選項來自訂啟動器的行為。這個專案對於喜愛 Minecraft 的玩家來說，提供了一個方便的工具來管理和啟動遊戲。

**技術棧**：`Electron` · `Node.js`

## 重點功能

- Minecraft 風格的 GUI — 提供真實的像素化界面，增強遊戲體驗。
- 自動更新功能 — 自動從 GitHub 獲取最新版本，保持啟動器的最新狀態。
- 跨平台支援 — 同時支援 Windows 和 Linux，方便不同用戶使用。
- 配置選項 — 允許用戶自訂 IP、端口和伺服器模式，靈活性高。
- 用戶資料管理 — 保存用戶名和遊玩時間，方便追蹤遊戲進度。

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
> LegacyLauncher 的開發者對 Minecraft 有深厚的熱情，並且針對 Legacy Console Edition 的需求進行了定制化開發。隨著 Minecraft 社群對於自訂啟動器的需求增加，這個專案正好滿足了這一需求，並且提供了易於使用的界面和功能，使其迅速受到關注。

## 適合誰使用

**目標受眾**：希望在 Windows 和 Linux 上輕鬆啟動 Minecraft Legacy Console Edition 的玩家。

> [!example] 使用場景
> - Minecraft 玩家用它來快速啟動 Legacy Console Edition，因為其自動更新功能能夠確保他們總是使用最新版本。
> - Linux 用戶用它來運行 Minecraft，因為它提供了多種兼容性選項，讓他們能夠輕鬆運行 Windows 執行檔。
> - 遊戲開發者用它來測試不同版本的 Minecraft，因為它允許用戶自訂啟動選項，方便進行版本切換。

## 架構分析

LegacyLauncher 採用單體架構，使用 Electron 作為前端框架，並透過 Node.js 處理後端邏輯。用戶輸入 → 啟動器處理 → 遊戲啟動。關鍵技術決策包括使用自訂的 Minecraft 風格 CSS 來增強用戶體驗。目錄結構中，主要入口為 main.js。

## 優缺點分析

> [!success] 優點
> - 提供 Minecraft 風格的界面，增強遊戲體驗。
> - 自動更新功能，確保用戶使用最新版本。
> - 跨平台支援，方便不同操作系統的用戶。

> [!danger] 缺點
> - 僅限於 Legacy Console Edition，無法支援其他版本。
> - Linux 用戶需額外配置，增加使用難度。
> - 可能存在兼容性問題，特別是在不同的 Linux 環境中。

> [!warning] 注意事項
> - 僅支援 Legacy Console Edition，無法運行其他版本的 Minecraft。
> - Linux 用戶需要安裝 Wine 或 Proton 來運行 Windows 執行檔。
> - 可能會遇到兼容性問題，特別是在不同的 Linux 發行版上。

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

**社群活躍度**：社群活躍，持續有更新和改進。
**連結**：[文件](https://gradengnostic.github.io/legacylauncherweb/)

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

相關概念：[[微服務]] · [[容器化]]

[GitHub](https://github.com/gradenGnostic/LegacyLauncher) · [官方網站](https://gradengnostic.github.io/legacylauncherweb/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "gradenGnostic--LegacyLauncher"
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
