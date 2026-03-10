---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2340
stars_per_day: 1170
forks: 223
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
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉變為AI代理可用的命令行工具。"
---

# CLI-Anything

**2.3k** stars · **1.2k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將所有軟體轉變為AI代理可用的命令行工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **適合** 希望將現有軟體轉變為AI代理可用的開發者。
> **一句話重點** 這個專案展示了如何通過簡單的命令將傳統軟體轉變為AI友好的工具，提升開發效率。

> [!abstract] 核心創新
> 這個專案能夠將任何軟體快速轉變為AI代理可用的命令行工具。

## 專案簡介

CLI-Anything 是一個旨在將任何軟體轉變為AI代理可用的命令行工具的專案。使用者只需一個命令，即可為目標軟體生成完整的CLI，這個過程包括分析源代碼、設計命令結構、實現CLI、計劃測試和生成文檔。專案的核心在於提供結構化的命令輸出，讓AI代理能夠輕鬆控制各種應用程式。與傳統的API或GUI控制方式相比，CLI-Anything的優勢在於其輕量級和通用性，能夠無需重建或複雜包裝即可直接控制應用。這個專案適合希望將現有軟體轉變為AI代理友好的開發者，並且目前處於穩定階段，值得立即使用。對於不需要AI代理控制的簡單應用，則可能不需要這樣的轉換。

**技術棧**：`Python` · `Shell`

## 重點功能

- 一鍵生成CLI — 只需一條命令即可為任何應用生成完整的CLI。
- 自動化測試生成 — 自動生成測試計劃和測試套件，確保CLI的穩定性。
- 結構化JSON輸出 — 提供一致的結果，方便AI代理使用。
- 支持多種應用 — 能夠轉變多種流行軟體為AI代理可控制的工具。
- 輕量級設計 — 無需重建或複雜包裝，直接控制應用。

## 快速開始

1. 添加CLI-Anything市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝CLI-Anything插件
```bash
/plugin install cli-anything
```
3. 生成GIMP的CLI
```bash
/cli-anything ./gimp
```

## 程式碼範例

```bash
# 使用CLI-Anything生成GIMP的CLI
/cli-anything ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由多位貢獻者共同開發，背景涵蓋AI和軟體開發，切中將現有軟體轉變為AI友好的需求。隨著AI技術的快速發展，開發者對於如何將傳統應用轉變為AI代理可用的工具的需求日益增加。

## 適合誰使用

**目標受眾**：希望將現有軟體轉變為AI代理可用的開發者。

> [!example] 使用場景
> - 軟體開發者用它來將Blender轉變為AI代理可控制的工具，因為這樣可以自動化渲染流程，節省了手動操作的時間。
> - 數據科學家用它來為JupyterLab生成CLI，因為這樣能夠快速執行數據處理和分析任務，提高工作效率。
> - 創意工作者用它來控制GIMP的圖像編輯流程，因為這樣可以通過命令行自動化重複性任務，提升創作效率。

## 架構分析

該專案採用插件架構，使用者透過Claude Code與CLI-Anything進行互動。用戶輸入 → CLI-Anything處理 → 返回生成的CLI。核心技術決策在於使用自動化生成流程，並支持多種應用。專案目錄結構包含多個模組，負責不同的功能。

## 優缺點分析

> [!success] 優點
> - 能夠快速將現有軟體轉變為AI代理可用的工具。
> - 自動化測試功能確保生成CLI的穩定性。
> - 輕量級設計，無需複雜的依賴或重建。

> [!danger] 缺點
> - 僅支持特定的應用，對於不在支持列表的應用無法使用。
> - 生成的CLI可能需要手動調整以符合特定需求。
> - 需要一定的技術背景來安裝和配置。

> [!warning] 注意事項
> - 需要Claude Code和Python 3.10+。
> - 僅支持特定應用，對於不在支持列表的應用無法使用。
> - 生成的CLI可能需要進一步的調整以符合特定需求。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 223 |
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

**社群活躍度**：社群活躍，持續有貢獻者更新功能和修復問題。

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
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--CLI-Anything"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
