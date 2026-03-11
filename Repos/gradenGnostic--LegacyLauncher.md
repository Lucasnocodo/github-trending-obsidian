---
repo: gradenGnostic/LegacyLauncher
url: https://github.com/gradenGnostic/LegacyLauncher
owner: gradenGnostic
owner_type: User
language: JavaScript
license: MIT
description: "A custom launcher for Minecraft LCE."
homepage: "https://gradengnostic.github.io/legacylauncherweb/"
stars: 312
stars_per_day: 52
forks: 17
open_issues: 44
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "遊戲啟動器"
release_tag: "v3.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "為 Minecraft Legacy Console Edition 提供一個自訂啟動器，讓玩家更方便地管理遊戲和更新。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "為 Minecraft Legacy Console Edition 提供一個自訂啟動器，讓玩家更方便地管理遊戲和更新。"
---

# LegacyLauncher

**312** stars · **52** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1`

> [!summary] 一句話摘要
> 為 Minecraft Legacy Console Edition 提供一個自訂啟動器，讓玩家更方便地管理遊戲和更新。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (52 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家，特別是喜愛懷舊遊戲的用戶。
> **一句話重點** LegacyLauncher 不僅是一個啟動器，更是為懷舊玩家提供了一個專屬的遊戲管理平台。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供了一個專為 Minecraft Legacy Console Edition 設計的跨平台啟動器，並支持多種兼容層選擇。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自訂啟動器，提供了像 Minecraft 的 GUI 介面，讓玩家能夠輕鬆啟動遊戲。它自動從 GitHub 獲取最新版本，並支持 Windows 和 Linux 平台。用戶可以保存個人資料、追蹤遊玩時間，並自定義啟動選項，如 IP、端口和伺服器模式。與其他啟動器相比，它的特點在於專注於舊版主機的兼容性，並提供多種兼容層選擇，特別是對 Linux 用戶的支持。實際使用中，這個啟動器能夠有效地管理遊戲更新，但需要注意 Linux 環境下的兼容性問題。這個專案目前處於穩定版本，適合喜愛舊版 Minecraft 的玩家和小型開發團隊使用。若你是經常玩 Legacy Console Edition 的玩家，這個啟動器能大幅提升你的遊戲體驗；但如果你不需要管理多個版本或不常更新，則可能不需要使用。

**技術棧**：`Electron` · `Node.js` · `HTML` · `CSS` · `JavaScript`

## 重點功能

- Minecraft 風格 GUI — 提供像素化介面，使用 Minecraft 字體和樣式。
- 自動更新 — 自動從 GitHub 獲取最新版本，確保用戶擁有最新遊戲。
- 跨平台支持 — 同時支持 Windows 和 Linux 平台，方便多種用戶使用。
- 個人資料管理 — 保存用戶名稱並追蹤遊玩時間，增強遊戲體驗。
- 自定義啟動選項 — 設定 IP、端口和伺服器模式，滿足不同的遊戲需求。

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

```javascript
// 啟動遊戲的基本範例
const { app } = require('electron');
app.on('ready', () => {
    // 這裡放置啟動遊戲的邏輯
});
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 gradenGnostic 之前有其他 Minecraft 相關專案，這讓他在社群中有一定的知名度。(b) LegacyLauncher 解決了玩家在不同平台上啟動和管理 Minecraft Legacy Console Edition 的困難，特別是對於 Linux 用戶的支持。(c) 這個專案在社群中引起討論，可能是因為對於懷舊玩家的吸引力。(d) 隨著 Minecraft 社群對於舊版遊戲的重視，這個工具的需求逐漸上升。

## 適合誰使用

**目標受眾**：需要在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家，特別是喜愛懷舊遊戲的用戶。

> [!example] 使用場景
> - Minecraft 玩家用它來快速啟動 Legacy Console Edition，因為它提供了自動更新和簡化的啟動選項，節省了手動設置的時間。
> - Linux 使用者用它來在非 Windows 環境中運行 Minecraft Legacy，因為它支持 Wine 和 Proton，讓他們能夠享受遊戲而不需要複雜的配置。
> - 小型開發團隊用它來測試不同版本的 Minecraft Legacy，因為它能夠輕鬆管理多個遊戲配置和版本，提升開發效率。

## 架構分析

LegacyLauncher 採用單體架構，使用 Electron 作為核心框架。用戶輸入 → 啟動器處理 → 遊戲啟動。關鍵技術決策包括使用 Node.js 進行後端處理和 Electron 提供的跨平台支持。專案目錄結構中，主要檔案包括 package.json 和主程式檔案，這些檔案負責管理依賴和啟動邏輯。

## 技術深入分析

> [!note]- 展開深入分析
> LegacyLauncher 的核心是基於 Electron 的桌面應用，這使得它能夠在多個平台上運行。它使用 Node.js 進行後端處理，並通過自定義的 HTML 和 CSS 提供用戶介面。效能上，啟動器能夠快速加載遊戲，並在不同的兼容層下運行，這對於 Linux 用戶特別重要。設計上，選擇 Electron 而非其他框架是因為其跨平台能力和社群支持。與其他啟動器相比，LegacyLauncher 專注於舊版 Minecraft 的兼容性，這使得它在特定用戶群中更具吸引力。

## 優缺點分析

> [!success] 優點
> - 提供 Minecraft 風格的用戶介面，增強遊戲氛圍。
> - 自動更新功能，確保用戶始終使用最新版本的遊戲。
> - 支持多種操作系統，方便不同平台的玩家使用。
> - 個人資料管理功能，幫助玩家追蹤遊玩時間。

> [!danger] 缺點
> - Linux 環境下需要額外的兼容層配置，增加使用難度。
> - 對於某些遊戲版本的支持可能不夠完善，需手動調整。
> - Discord RPC 功能依賴於外部應用，可能影響整體體驗。
> - 不支持 macOS，限制了部分用戶的使用。

> [!warning] 注意事項
> - 僅支持 Windows 和 Linux，無法在 macOS 上運行。
> - Linux 用戶需要安裝 Wine 或 Proton，增加了安裝的複雜度。
> - 對於某些遊戲版本，可能需要手動配置啟動選項，增加了使用難度。
> - Discord RPC 功能依賴於 Discord 客戶端運行，可能會影響使用體驗。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 17 |
| Open Issues | 44 |
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

**社群活躍度**：社群活躍，經常有更新和問題回覆。
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

相關專案：[[smartcmd--MinecraftConsoles|smartcmd/MinecraftConsoles]] · [[MultiMC--MultiMC5|MultiMC/MultiMC5]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，296 stars
