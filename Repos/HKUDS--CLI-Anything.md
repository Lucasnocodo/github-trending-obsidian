---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2373
stars_per_day: 1187
forks: 227
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
  - "讓任何軟體都能被 AI agent 控制，無需重建或複雜包裝。"
---

# CLI-Anything

**2.4k** stars · **1.2k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓任何軟體都能被 AI agent 控制，無需重建或複雜包裝。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **適合** 需要將現有 GUI 軟體轉換為 AI agent 可控制工具的開發者。
> **一句話重點** 這個專案讓開發者能夠快速將任何軟體轉換為 AI agent 可控制的工具，顛覆了傳統的軟體開發流程。

> [!abstract] 核心創新
> 通過一條命令將任何軟體轉換為 agent 可控制的工具，無需重建或複雜包裝。

## 專案簡介

CLI-Anything 透過一條命令將任何軟體轉換為 agent 可控制的工具。使用者只需執行 `/cli-anything ./gimp`，系統會自動分析源碼、設計命令群組、實作 CLI 並生成測試計畫。這個過程利用 Python 和 CLI 結構，並且不需要額外的依賴，確保了輕量和跨平台的兼容性。與其他工具相比，CLI-Anything 的獨特之處在於它的 agent-first 設計，結構化的 JSON 輸出消除了解析的複雜性。實際使用中，這個工具能夠快速將 GUI 軟體轉換為可編程的 CLI，並且支援多種應用場景，如數據分析、開發工具等。這個專案目前處於 beta 階段，對於需要快速實現 agent 控制的團隊來說，值得一試。建議在開發過程中使用，但對於小型專案或不需要 agent 控制的情況則不必使用。

**技術棧**：`Python 3.10+` · `Claude Code`

## 重點功能

- 一鍵生成 CLI — 使用 `/cli-anything ./gimp` 生成完整的 GIMP CLI，涵蓋所有功能。
- 自動化測試計畫 — 生成 TEST.md 包含單元測試和端到端測試計畫。
- 結構化 JSON 輸出 — 確保 agent 行為的可預測性，避免解析錯誤。
- 輕量級設計 — 無需額外依賴，適用於各種操作系統。
- 支援多種應用 — 包括數據分析、開發工具、創意媒體等多個領域。

## 快速開始

1. 添加市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝插件
```bash
/plugin install cli-anything
```
3. 生成 CLI
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
> 作者背景強大，專注於 AI agent 的應用需求，並且提供了簡單的 CLI 轉換流程。隨著 AI agent 應用的增長，這個工具正好切中市場需求，並且在開源社群中獲得了廣泛的關注。

## 適合誰使用

**目標受眾**：需要將現有 GUI 軟體轉換為 AI agent 可控制工具的開發者。

> [!example] 使用場景
> - 後端工程師用它來將 GIMP 軟體轉換為 CLI 工具，因為這樣可以快速自動化圖像處理流程，提升工作效率。
> - 數據科學家用它來將 JupyterLab 轉換為 agent 控制的環境，因為這樣可以讓模型訓練和數據分析自動化，節省手動操作的時間。
> - DevOps 工程師用它來將 Jenkins 轉換為 CLI 工具，因為這樣可以簡化 CI/CD 流程，並且減少手動配置的錯誤。

## 架構分析

CLI-Anything 採用微服務架構，使用者輸入 → 系統分析 → 生成 CLI。核心資料流簡單明瞭，關鍵技術決策在於無需依賴的輕量設計。專案目錄結構清晰，包含插件和測試計畫等關鍵檔案。

## 優缺點分析

> [!success] 優點
> - 快速生成 CLI，節省開發時間。
> - 無需重建現有軟體，降低實施成本。
> - 支援多種應用場景，靈活性高。

> [!danger] 缺點
> - 目前仍在 beta 階段，穩定性需觀察。
> - 對於小型專案可能過於複雜。
> - 需要特定環境配置，使用門檻較高。

> [!warning] 注意事項
> - 需要 Claude Code 支援。
> - 僅支援 Python 3.10 以上版本。
> - 不支援 Windows 環境。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 227 |
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

**社群活躍度**：社群活躍，持續更新中。
**連結**：[文件](https://github.com/HKUDS/CLI-Anything)

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
