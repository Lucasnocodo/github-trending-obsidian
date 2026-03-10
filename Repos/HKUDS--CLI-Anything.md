---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2408
stars_per_day: 1204
forks: 233
open_issues: 10
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "讓任何軟體都能成為 AI agent 控制的工具，簡化自動化流程。"
---

# CLI-Anything

**2.4k** stars · **1.2k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 讓任何軟體都能成為 AI agent 控制的工具，簡化自動化流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **適合** 希望將現有桌面應用程式轉變為 AI agent 控制的開發者。
> **一句話重點** CLI-Anything 讓所有軟體都能被 AI agent 控制，這是未來自動化的關鍵一步。

> [!abstract] 核心創新
> CLI-Anything 使所有軟體都能成為 agent-native，無需重建或複雜的 API。

## 專案簡介

CLI-Anything 透過一個命令行介面，將任何軟體轉變為 AI agent 可控制的工具。使用者只需執行 `/cli-anything ./gimp`，即可自動生成 GIMP 的完整 CLI，這個過程包括分析源碼、設計命令群組、實作 CLI、計劃測試、撰寫測試、更新文檔及發佈。技術上，它依賴於 Python 3.10+ 和 Claude Code 的插件架構，並且強調結構化的 JSON 輸出以簡化 agent 的解析。與傳統的 API 或 GUI 控制方式相比，CLI-Anything 省去了繁瑣的重建或包裝過程，讓任何應用程式都能無縫接入 AI agent。使用效果上，這個工具能夠快速提升軟體的自動化能力，但需要確保目標軟體已安裝且兼容。對於希望將現有應用程式轉變為 agent-native 的開發團隊來說，這是一個成熟且值得使用的解決方案。建議在需要快速集成多個應用程式時使用，但如果目標軟體不支持 CLI，則無法使用。

**技術棧**：`Python 3.10` · `Claude Code`

## 重點功能

- 一鍵生成 CLI — 透過 `/cli-anything ./gimp` 自動生成 GIMP 的完整 CLI。
- 結構化 JSON 輸出 — 使 agent 控制更簡單，避免解析複雜性。
- 自動化測試生成 — 生成 TEST.md 包含單元測試和端到端測試計劃。
- 無需重建或包裝 — 直接控制任何應用程式，省去繁瑣的 API 開發。
- 支持多種應用 — 包括 GIMP、Blender、LibreOffice 等多種流行軟體。

## 快速開始

1. 添加市場插件
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
3. 生成 GIMP 的 CLI
```bash
/cli-anything ./gimp
```

## 程式碼範例

```bash
cli-anything-gimp project new --width 1920 --height 1080 -o poster.json
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者背景強大，專注於將現有軟體轉變為 AI agent 控制的工具，切中自動化需求。隨著 AI agent 應用的增長，對於簡化軟體控制的需求日益增加，這使得 CLI-Anything 在市場上迅速受到關注。

## 適合誰使用

**目標受眾**：希望將現有桌面應用程式轉變為 AI agent 控制的開發者。

> [!example] 使用場景
> - 後端工程師用它來將 GIMP 轉變為可由 AI 控制的工具，因為這樣可以自動化圖像處理流程，節省手動操作的時間。
> - 數據科學家用它來將 JupyterLab 轉變為 agent 控制的環境，因為這樣可以透過命令自動化數據分析，提升工作效率。
> - 產品經理用它來將 LibreOffice 的文檔處理自動化，因為這樣可以快速生成報告，減少重複性工作。

## 架構分析

CLI-Anything 採用插件架構，使用者透過命令行介面進行操作。用戶輸入 → CLI-Anything 解析並生成 CLI → 輸出 JSON 格式的結果。關鍵技術決策是結構化的 JSON 輸出，簡化了 agent 的控制過程。專案目錄結構包含 README、插件代碼和測試文件。

## 優缺點分析

> [!success] 優點
> - 簡化了將現有應用程式轉變為 agent-native 的流程。
> - 支持多種流行軟體，擴展性強。
> - 自動生成測試計劃，提升開發效率。

> [!danger] 缺點
> - 需要目標軟體的支持，無法處理不支持 CLI 的應用。
> - 依賴於 Claude Code，需確保環境配置正確。
> - 對於複雜應用，生成的 CLI 可能需要進一步調整。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要安裝目標軟體（如 GIMP、Blender 等）。
> - 依賴於 Claude Code 的插件架構，需確保環境配置正確。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 233 |
| Open Issues | 10 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 6.3 MB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 10 |
> | [@Lin-Jiong-HDU](https://github.com/Lin-Jiong-HDU) | 6 |
> | [@zhangxilong-43](https://github.com/zhangxilong-43) | 2 |
> | [@JasonZhaoWW](https://github.com/JasonZhaoWW) | 1 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
> 
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
>   
> 
> **One Command Line**: Make any software agent-ready for OpenClaw, nanobot, Cursor, Claude Code, etc.&nbsp;&nbsp;[**中文文档**](README_CN.md)
> 
>   
> 
>   
> 
> ---
> 
> ## 🤔 Why CLI?
> 
> CLI is the universal interface for both humans and AI agents:
> 
> • **Structured & Composable** - Text commands match LLM format and chain for complex workflows
> 
> • **Lightweight & Universal** - Minimal overhead, works across all systems without dependencies
> 
> • **Self-Describing** - --help flags provide automatic documentation agents can discover
> 
> • **Proven Success** - Claude Code runs thousands of real workflows through CLI daily
> 
> • **Agent-First Design** - Structured JSON output eliminates parsing complexity
> 
> • **Deterministic & Reliable** - Consistent results enable predictable agent behavior
> 
> ## 🚀 Quick Start
> 
> ### Prerequisites
> 
> - **Claude Code** (with plugin support)
> - **Python 3.10+**
> - Target software installed (e.g., GIMP, Blender, LibreOffice, or your own application)
> 
> ### Step 1: Add the Marketplace
> 
> CLI-Anything is distributed as a Claude Code plugin marketplace hosted on GitHub.
> 
> ```bash
> # Add the CLI-Anything marketplace
> /plugin marketplace add HKUDS/CLI-Anything
> ```
> 
> ### Step 2: Install the Plugin
> 
> ```bash
> # Install the cli-anything plugin from the marketplace
> /plugin install cli-anything
> ```
> 
> That's it. The plugin is now available in your Claude Code session.
> 
> ### Step 3: Build a CLI in One Command
> 
> ```bash
> # /cli-anything 
> # Generate a complete CLI for GIMP (all 7 phases)
> /cli-anything ./gimp
> ```
> 
> This runs the full pipeline:
> 1. 🔍 **Analyze** — Scans source code, maps GUI actions to APIs
> 2. 📐 **Design** — Architects command groups, state model, output formats
> 3. 🔨 **Implement** — Builds Click CLI with REPL, JSON output, undo/redo
> 4. 📋 **Plan Tests** — Creates TEST.md with unit + E2E test plans
> 5. 🧪 **Write Tests** — Implements comprehensive test suite
> 6. 📝 **Document** — Updates TEST.md with results
> 7. 📦 **Publish** — Creates `setup.py`, installs to PATH
> 
> ### Step 4: Use the CLI
> 
> ```bash
> # Install to PATH
> cd gimp/agent-harness && pip install -e .
> 
> # Use from anywhere
> cli-anything-gimp --help
> cli-anything-gimp project new --width 1920 --height 1080 -o poster.json
> cli-anything-gimp --json layer add -n "Background" --type solid --color "#1a1a2e"
> 
> # Enter interactive REPL
> cli-anything-gimp
> ```
> 
> Alternative: Manual Installation
> 
> If you prefer not to use the marketplace:
> 
> ```bash
> # Clone the repo
> git clone https://github.com/HKUDS/CLI-Anything.git
> 
> # Copy plugin to Claude Code plugins directory
> cp -r CLI-Anything/cli-anything-plugin ~/.claude/plugins/cli-anything
> 
> # Reload plugins
> /reload-plugins
> ```
> 
> ---
> 
> ## 💡 CLI-Anything's Vision: Building Agent-Native Software
> 
> • 🌐 **Universal Access** - Every software becomes instantly agent-controllable through structured CLI.
> 
> • 🔗 **Seamless Integration** - Agents control any application without APIs, GUI, rebuilding or complex wrappers.
> 
> • 🚀 **Future-Ready Ecosystem** - Transform human-designed software into agent-native tools with one command.
> 
> ---
> 
> ## 🔧 When to Use CLI-Anything
> 
> | Category | How to be Agent-native | Notable Examples |
> |----------|----------------------|----------|
> | **📂 GitHub Repositories** | Transform any open-source project into agent-controllable tools through automatic CLI generation | VSCodium, WordPress, Calibre, Zotero, Joplin, Logseq, Penpot, Super Productivity |
> | **🤖 AI/ML Platforms** | Automate model training, inference pipelines, and hyperparameter tuning through structured commands | Stable Diffusion WebUI, ComfyUI, InvokeAI, Text-generation-webui, Open WebUI, Fooocus, Kohya_ss, AnythingLLM, SillyTavern |
> | **📊 Data & Analytics** | Enable programmatic data processing, visualization, and statistical analysis workflows | JupyterLab, Apac

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[機器學習]]

[GitHub](https://github.com/HKUDS/CLI-Anything)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "HKUDS--CLI-Anything"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
