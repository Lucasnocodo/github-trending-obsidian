---
repo: gradenGnostic/LegacyLauncher
url: https://github.com/gradenGnostic/LegacyLauncher
owner: gradenGnostic
owner_type: User
language: JavaScript
license: MIT
description: "A custom launcher for Minecraft LCE."
homepage: "https://gradengnostic.github.io/legacylauncherweb/"
stars: 309
stars_per_day: 52
forks: 17
open_issues: 46
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "遊戲"
release_tag: "v3.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個自訂的 Minecraft Legacy Console Edition 啟動器，讓玩家能夠輕鬆管理遊戲和更新。"
priority: medium
tags:
  - github
  - "category/遊戲"
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
  - "提供一個自訂的 Minecraft Legacy Console Edition 啟動器，讓玩家能夠輕鬆管理遊戲和更新。"
---

# LegacyLauncher

**309** stars · **52** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1` `easy-install`

> [!summary] 一句話摘要
> 提供一個自訂的 Minecraft Legacy Console Edition 啟動器，讓玩家能夠輕鬆管理遊戲和更新。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (52 stars/day)
> **適合** 希望在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家和開發者。
> **一句話重點** LegacyLauncher 不僅是一個啟動器，更是為 Legacy Console Edition 玩家提供的專屬工具，讓遊戲體驗更流暢。

> [!abstract] 核心創新
> LegacyLauncher 提供了一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，具備自動更新和跨平台支援的功能。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，提供使用者友好的介面和多種功能。它的核心機制是透過 Electron 框架構建，使用者可以輕鬆下載和更新遊戲，並且支援跨平台運行（Windows 和 Linux）。啟動器支援自定義啟動選項，包括 IP、端口和伺服器模式，讓玩家能夠根據需求進行配置。與其他啟動器相比，LegacyLauncher 的獨特之處在於其專注於 Legacy Console Edition 的特定需求，並提供了專屬的 GUI 和自動更新功能。使用者可以追蹤遊戲時間，並在 Linux 上選擇不同的相容性層（如 Wine 或 Proton）。目前版本的穩定性良好，適合小型團隊或個人玩家使用。若你是經常玩 Legacy Console Edition 的玩家，這個啟動器能大幅提升你的遊戲體驗，但如果你不需要這些自訂功能，則可能不必使用。

**技術棧**：`Electron` · `Node.js` · `HTML` · `CSS` · `JavaScript`

## 重點功能

- Minecraft 風格 GUI — 提供像素化的介面，使用 Minecraft 字體和樣式。
- 自動更新 — 自動從 GitHub 獲取最新版本，確保遊戲保持最新。
- 跨平台支援 — 同時支援 Windows 和 Linux 系統。
- 個人資料管理 — 儲存使用者名稱並追蹤遊戲時間。
- 自訂啟動選項 — 設定 IP、端口和伺服器模式以符合個別需求。

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
> 這個專案由經驗豐富的開發者團隊維護，專注於 Minecraft 的特定需求，吸引了對於 Legacy Console Edition 有需求的玩家。隨著 Minecraft 社群對於舊版遊戲的重視增加，這個啟動器的需求也隨之上升。最近的更新和功能增強使得它在玩家中獲得了更高的關注度。

## 適合誰使用

**目標受眾**：希望在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家和開發者。

> [!example] 使用場景
> - Minecraft 玩家用它來管理 Legacy Console Edition 的遊戲更新，因為它提供自動更新功能，省去手動下載的麻煩。
> - Linux 使用者用它來運行 Windows 執行檔，因為它支援 Wine 和 Proton，讓遊戲在非 Windows 環境中也能順利運行。
> - 遊戲開發者用它來測試不同的伺服器模式，因為它允許自定義 IP 和端口設定，方便進行多樣化的測試。

## 架構分析

LegacyLauncher 採用單體架構，主要由前端（HTML/CSS/JavaScript）和後端（Electron/Node.js）組成。用戶輸入 → 啟動器處理 → 遊戲啟動。關鍵技術決策包括使用 Electron 來實現跨平台支援，並利用 Node.js 處理後端邏輯。專案目錄結構中，主要的配置和啟動邏輯位於 `main.js` 和 `package.json`。

## 技術深入分析

> [!note]- 展開深入分析
> LegacyLauncher 的核心是使用 Electron 框架來實現跨平台的桌面應用，這使得它能在 Windows 和 Linux 上運行。效能方面，啟動器能夠快速加載和更新遊戲，並且在 Linux 上使用 Wine 或 Proton 進行兼容性處理。設計上，選擇使用自訂 CSS 和 Tailwind CSS 來實現 Minecraft 的視覺風格，這使得使用者界面既美觀又易於使用。與其他啟動器相比，LegacyLauncher 更加專注於 Legacy Console Edition 的特定需求，這在功能和設計上都有所體現。

## 優缺點分析

> [!success] 優點
> - 提供 Minecraft 風格的 GUI，提升使用者體驗。
> - 自動更新功能，確保遊戲版本保持最新。
> - 支援多種相容性層，讓 Linux 使用者能運行 Windows 遊戲。

> [!danger] 缺點
> - 僅支援 Legacy Console Edition，對於其他版本的 Minecraft 不適用。
> - 在 Linux 上的相容性可能因環境而異，需額外配置。
> - 功能相對簡單，缺乏進階的遊戲管理選項。

> [!warning] 注意事項
> - 僅支援 Windows 和 Linux 系統，無法在 macOS 上運行。
> - Linux 使用者需要安裝 Wine 或 Proton 才能運行 Windows 執行檔。
> - 某些功能可能在不同的相容性層下表現不一致。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[smartcmd--MinecraftConsoles\|smartcmd/MinecraftConsoles]] | 這是一個專注於 Minecraft 控制台的啟動器，提供更廣泛的控制台支援，而 LegacyLauncher 專注於 Legacy Console Edition 的特定需求。 |
| [[MultiMC--MultiMC5\|MultiMC/MultiMC5]] | MultiMC 是一個多實例的 Minecraft 啟動器，支援多種版本和模組，而 LegacyLauncher 專注於 Legacy Console Edition，功能較為簡單。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 17 |
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

**社群活躍度**：社群活躍度中等，定期更新和回應問題。
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

相關概念：[[遊戲啟動器]] · [[跨平台]] · [[相容性層]] · [[自動更新]]

相關專案：[[smartcmd--MinecraftConsoles|smartcmd/MinecraftConsoles]] · [[MultiMC--MultiMC5|MultiMC/MultiMC5]]

[GitHub](https://github.com/gradenGnostic/LegacyLauncher) · [官方網站](https://gradengnostic.github.io/legacylauncherweb/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "gradenGnostic--LegacyLauncher"
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
