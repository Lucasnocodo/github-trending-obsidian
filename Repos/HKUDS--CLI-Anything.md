---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2479
stars_per_day: 1240
forks: 236
open_issues: 10
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓任何軟體都能成為 AI agent 的控制對象，簡化自動化流程。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "讓任何軟體都能成為 AI agent 的控制對象，簡化自動化流程。"
---

# CLI-Anything

**2.4k** stars · **1.2k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓任何軟體都能成為 AI agent 的控制對象，簡化自動化流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **適合** 希望將現有應用程式轉變為 AI agent 控制的開發者。
> **一句話重點** CLI-Anything 的核心在於將所有軟體轉變為 agent-native，這將徹底改變自動化的方式。

> [!abstract] 核心創新
> CLI-Anything 使所有軟體都能成為 agent-native，無需重建或複雜包裝。

## 專案簡介

CLI-Anything 透過一條命令將任何軟體轉變為 agent 可控制的工具，讓 AI agent 能夠直接透過 CLI 進行操作。使用者只需執行 `/cli-anything ./gimp`，系統會自動分析源碼並生成完整的 CLI，包括命令群組、狀態模型、測試計畫等。這個專案使用 Python 和 Shell，並且與 Claude Code 整合，提供了無需額外 API 或 GUI 的輕量級解決方案。與其他工具相比，CLI-Anything 的獨特之處在於其結構化的 JSON 輸出和自描述的命令行介面，這使得 agent 的行為更可預測且可靠。實際使用中，CLI-Anything 能夠快速將現有的應用程式轉變為 agent-native 工具，支援多種應用程式如 GIMP、Blender 等。這個專案目前處於穩定階段，適合中小型團隊快速導入自動化流程。建議在需要將現有軟體轉變為 agent 控制時使用，但對於不熟悉 CLI 的使用者可能會有學習曲線。

**技術棧**：`Python 3.10+` · `Shell`

## 重點功能

- 自動生成 CLI — 透過一條命令生成完整的 CLI，支援 GIMP 等多個應用程式。
- 結構化 JSON 輸出 — 提供清晰的輸出格式，方便 agent 解析和使用。
- 無需 API 或 GUI — 直接控制應用程式，降低集成複雜度。
- 自描述命令 — 使用 --help 標誌自動生成文檔，方便 agent 發現功能。
- 支持多種應用 — 包括 GIMP、Blender、LibreOffice 等，適用範圍廣泛。

## 快速開始

1. 添加市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝插件
```bash
/plugin install cli-anything
```
3. 生成 GIMP CLI
```bash
/cli-anything ./gimp
```

## 程式碼範例

```bash
cli-anything-gimp --help
cli-anything-gimp project new --width 1920 --height 1080 -o poster.json
cli-anything-gimp --json layer add -n "Background" --type solid --color "#1a1a2e"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者團隊在 AI 和自動化領域有豐富的經驗，這個專案切中當前對於簡化 AI agent 操作的需求。隨著 AI 技術的普及，越來越多的開發者希望能夠將現有軟體轉變為 agent-native 工具，這使得 CLI-Anything 的需求急劇上升。

## 適合誰使用

**目標受眾**：希望將現有應用程式轉變為 AI agent 控制的開發者。

> [!example] 使用場景
> - 後端工程師用它來將 GIMP 轉變為 agent 控制的工具，因為這樣可以自動化圖像處理流程，節省手動操作的時間。
> - 數據科學家用它來自動化 JupyterLab 的數據分析工作，因為可以快速生成命令行介面，方便 AI agent 執行複雜的數據處理任務。
> - 產品經理用它來整合多個應用程式的功能，因為能夠透過統一的 CLI 進行操作，提升工作效率。

## 架構分析

CLI-Anything 採用插件架構，使用者透過 Claude Code 插件市場安裝。用戶輸入 → CLI 生成 → 輸出 JSON 結果。關鍵技術決策包括自動生成 CLI 和結構化 JSON 輸出，專案目錄結構中包含主要的插件和命令生成邏輯。

## 技術深入分析

> [!note]- 展開深入分析
> CLI-Anything 的核心在於其自動生成 CLI 的能力，透過分析源碼來映射 GUI 操作到 API，這使得使用者能夠快速獲得可用的命令行介面。效能方面，專案支持多種應用程式，並且能夠在不需要額外依賴的情況下運行。設計上，選擇結構化的 JSON 輸出是為了減少解析的複雜性，這與其他工具相比，提供了更高的可靠性和可預測性。

## 優缺點分析

> [!success] 優點
> - 快速將現有應用程式轉變為 agent 控制工具。
> - 無需額外的 API 或 GUI，降低集成成本。
> - 結構化的命令行介面提高了可預測性和可靠性。

> [!danger] 缺點
> - 對於不熟悉 CLI 的使用者有學習曲線。
> - 需要特定的環境和版本要求。
> - 不支援 Windows 系統，限制了使用範圍。

> [!warning] 注意事項
> - 需要 Claude Code 支援插件功能。
> - 僅支援 Python 3.10 以上版本。
> - 對於不熟悉 CLI 的使用者可能會有學習曲線。
> - 不支援 Windows 系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openai--cli-toolkit\|openai/cli-toolkit]] | CLI-Toolkit 提供了一個通用的 CLI 工具集，但不具備自動生成 CLI 的能力，適合需要自定義命令的開發者。 |
| [[nasa--agent-cli\|nasa/agent-cli]] | Agent-CLI 專注於特定任務的自動化，而 CLI-Anything 則是通用的解決方案，適用於各種應用程式。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 236 |
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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續更新中。
**連結**：[文件](https://github.com/HKUDS/CLI-Anything/blob/main/README_CN.md)

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

相關專案：[[openai--cli-toolkit|openai/cli-toolkit]] · [[nasa--agent-cli|nasa/agent-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，2.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
