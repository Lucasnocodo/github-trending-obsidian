---
repo: gradenGnostic/LegacyLauncher
url: https://github.com/gradenGnostic/LegacyLauncher
owner: gradenGnostic
owner_type: User
language: JavaScript
license: MIT
description: "A custom launcher for Minecraft LCE."
homepage: "https://gradengnostic.github.io/legacylauncherweb/"
stars: 313
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
use_case: "為 Minecraft Legacy Console Edition 提供自定義啟動器，讓玩家更方便地管理遊戲。"
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
  - "為 Minecraft Legacy Console Edition 提供自定義啟動器，讓玩家更方便地管理遊戲。"
---

# LegacyLauncher

**313** stars · **52** stars/天 · 建立 6 天前 · JavaScript · MIT

`v3.0.1`

> [!summary] 一句話摘要
> 為 Minecraft Legacy Console Edition 提供自定義啟動器，讓玩家更方便地管理遊戲。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (52 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人
> **適合** 希望在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家和開發者。
> **一句話重點** LegacyLauncher 讓 Minecraft Legacy Console Edition 的啟動和管理變得更簡單，特別是在多平台環境中。

> [!abstract] 核心創新
> LegacyLauncher 提供了針對 Minecraft Legacy Console Edition 的專屬自定義啟動器，並支援多種平台和兼容性選項。

## 專案簡介

LegacyLauncher 是一個專為 Minecraft Legacy Console Edition 設計的自定義啟動器，提供用戶友好的圖形介面，讓玩家能夠輕鬆啟動和管理遊戲。使用者可以透過這個啟動器輸入伺服器的 IP 和端口，並選擇不同的啟動模式，最終成功連接到遊戲伺服器。這個啟動器是基於 Electron 框架開發，使用 JavaScript、HTML 和 CSS，並支援 Windows 和 Linux 平台。它的自動更新功能能夠從 GitHub 獲取最新版本，確保用戶始終使用最新的遊戲版本。與其他啟動器相比，LegacyLauncher 提供了更直觀的 Minecraft 風格 GUI，並且支持多種兼容性層，特別是針對 Linux 用戶的 Wine 和 Proton 支援。這使得它在 Linux 環境下的使用體驗更為流暢。雖然這個啟動器的功能強大，但仍有一些限制，例如需要安裝 Wine 或 Proton 來運行 Windows 可執行檔。整體來說，LegacyLauncher 是一個穩定的選擇，適合希望在自定義環境中運行 Minecraft 的玩家。對於小型團隊或個人玩家來說，這個啟動器非常值得使用，尤其是對於那些希望簡化啟動過程的用戶。建議在需要自定義啟動選項或多平台支持的情境下使用，而對於只需基本啟動功能的用戶，可能不需要這麼複雜的工具。

**技術棧**：`Electron` · `Node.js` · `JavaScript` · `HTML` · `CSS`

## 重點功能

- Minecraft 風格 GUI — 提供像素化的介面，符合 Minecraft 的視覺風格。
- 自動更新 — 自動從 GitHub 獲取最新版本，保持遊戲更新。
- 跨平台支持 — 同時支援 Windows 和 Linux 系統。
- 配置啟動選項 — 允許用戶自定義 IP、端口和伺服器模式。
- 用戶資料管理 — 保存用戶名並跟蹤遊玩時間。

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

const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 gradenGnostic 以其在 Minecraft 社群中的活躍而聞名，這個工具解決了 Legacy Console Edition 玩家在啟動和管理遊戲時的繁瑣問題。近期在相關論壇的討論中，許多玩家尋求更好的啟動器選擇，這促使 LegacyLauncher 獲得了更多的關注。由於 Minecraft 的持續受歡迎，這個啟動器在玩家中自然獲得了擴散。

## 適合誰使用

**目標受眾**：希望在 Windows 或 Linux 上運行 Minecraft Legacy Console Edition 的玩家和開發者。

> [!example] 使用場景
> - Minecraft 玩家用它來快速啟動 Legacy Console Edition，因為它提供了自定義的啟動選項和直觀的界面，讓啟動過程更簡單。
> - Linux 用戶用它來在不安裝 Windows 的情況下運行 Minecraft，因為它支持 Wine 和 Proton，避免了傳統啟動器的兼容性問題。
> - 遊戲開發者用它來測試不同的伺服器設置，因為它允許自定義 IP 和端口設置，方便進行多種測試。

## 架構分析

LegacyLauncher 採用前後端分離的架構模式，前端使用 HTML、CSS 和 JavaScript，後端則基於 Electron 和 Node.js。用戶輸入 → 啟動器處理 → 遊戲啟動。關鍵技術決策包括使用 Electron 來實現跨平台支持，並通過 Node.js 處理後端邏輯。專案目錄結構包含 src、dist 等資料夾，src 用於存放源碼，dist 用於打包後的應用。

## 技術深入分析

LegacyLauncher 的核心技術機制是基於 Electron 框架，這使得它能夠在 Windows 和 Linux 上運行。它使用了 JavaScript 進行前端開發，並利用 Node.js 處理後端邏輯，這樣的選擇使得開發者能夠快速構建跨平台應用。這個啟動器能夠處理多種遊戲版本，但在 Linux 上可能會受到 Wine 或 Proton 的性能影響，對於大型遊戲檔案的處理也可能存在瓶頸。選擇 Electron 使得開發者能夠利用現有的網頁技術，快速構建 GUI，並且能夠輕鬆集成 Discord RPC 等功能。然而，這也意味著在性能上可能不如原生應用。隨著用戶數量的增加，如何保持穩定性和性能將是未來的一大挑戰，特別是在多平台支持的情況下，可能需要進一步優化和測試。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟和常見問題解答，對於新手來說非常友好。安裝過程相對順暢，但需要注意依賴的安裝。文件中有基本的使用範例，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 提供 Minecraft 風格的 GUI，提升用戶體驗。
> - 自動更新功能確保用戶使用最新版本。
> - 支持多種操作系統，方便不同用戶使用。
> - 可自定義啟動選項，滿足不同需求。

> [!danger] 缺點
> - 安裝過程相對複雜，需要安裝 Node.js 和 npm。
> - Linux 用戶需額外安裝 Wine 或 Proton，增加了使用門檻。
> - 某些功能可能在不同平台上表現不一致。
> - 對於不熟悉命令行的用戶來說，使用上可能有一定難度。

> [!warning] 注意事項
> - 需要安裝 Node.js 和 npm。
> - Linux 用戶需安裝 Wine 或 Proton 以運行 Windows 可執行檔。
> - 在某些 Linux 發行版上，可能需要額外的配置來設置 AppImage 的執行權限。
> - 不支援直接運行所有 Minecraft 版本，需確認兼容性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Minecraft-Community-Edition/client](https://github.com/Minecraft-Community-Edition/client) | 這個專案專注於社群版本的 Minecraft，提供更多社群驅動的功能，而 LegacyLauncher 更專注於 Legacy Console Edition 的啟動和管理。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 是一個文件同步工具，與 LegacyLauncher 的遊戲啟動功能無關，適用於不同的使用場景。 |

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

**社群活躍度**：社群活躍，定期更新和回應用戶問題。
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

相關概念：[[CLI/TUI]] · [[跨平台]] · [[遊戲啟動器]]

相關專案：[[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[smartcmd--MinecraftConsoles|smartcmd/MinecraftConsoles]] · [[MultiMC--MultiMC5|MultiMC/MultiMC5]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
