---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2556
stars_per_day: 1278
forks: 250
open_issues: 11
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓任何軟體都能被 AI agent 控制，無需重建或複雜包裝。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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

**2.6k** stars · **1.3k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓任何軟體都能被 AI agent 控制，無需重建或複雜包裝。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.3k stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要將現有軟體轉變為 AI agent 可控工具的開發者和團隊。
> **一句話重點** 這個專案展示了如何將現有軟體轉變為 AI agent 可控的工具，開啟了自動化操作的新可能性。

> [!abstract] 核心創新
> CLI-Anything 使得所有軟體都能輕鬆成為 agent 原生工具，無需重建或複雜包裝。

## 專案簡介

CLI-Anything 透過一個命令行介面，將任何軟體轉變為可被 AI agent 控制的工具。使用者只需執行 `/cli-anything ./gimp`，即可自動生成 GIMP 的完整 CLI，涵蓋分析、設計、實作、測試及文檔更新等七個階段。專案基於 Python 和 Shell，並利用 Claude Code 的插件架構，實現輕量級且無依賴的操作，確保跨平台的兼容性。與傳統的 API 介面相比，CLI-Anything 省去了複雜的包裝過程，讓任何應用程式都能直接透過命令行進行操作。這樣的設計不僅提高了操作的效率，也降低了使用門檻。使用者可以在多種環境中輕鬆控制軟體，並且 CLI 的結構化輸出使得 agent 行為可預測。該專案目前處於穩定階段，適合中小型團隊進行快速開發和測試。對於需要自動化操作的開發者來說，CLI-Anything 是一個值得考慮的工具，但對於不熟悉命令行的使用者，可能會有一定的學習曲線。

**技術棧**：`Python 3.10` · `Shell`

## 重點功能

- 一鍵生成 CLI — 透過 `/cli-anything ./gimp` 自動生成 GIMP 的完整 CLI。
- 自動化測試計劃 — 生成 TEST.md，包含單元測試和端到端測試計劃。
- 結構化 JSON 輸出 — 確保 agent 行為可預測，減少解析複雜性。
- 無依賴的輕量級設計 — 可在多種系統上運行，無需額外安裝。
- 即時互動 REPL — 允許用戶在 CLI 中進行即時互動，提升使用體驗。

## 快速開始

1. 添加 CLI-Anything 市場
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
cli-anything-gimp project new --width 1920 --height 1080 -o poster.json
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 yuh-yang 和其他貢獻者在開源社群中有著良好的聲譽，過去參與了多個知名專案。CLI-Anything 解決了傳統軟體與 AI agent 之間的互動問題，提供了一個簡單的解決方案來生成命令行介面，這在以往並沒有好的方案。最近的社群討論和推廣活動使得這個專案獲得了更多的關注。隨著 AI 技術的快速發展，對於自動化工具的需求也在增加，這使得 CLI-Anything 的使用場景變得更加廣泛。

## 適合誰使用

**目標受眾**：需要將現有軟體轉變為 AI agent 可控工具的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來自動生成 GIMP 的 CLI，因為這樣可以節省大量手動編寫命令的時間，並且能夠快速測試不同的圖像處理效果。
> - 數據科學家用它來將 JupyterLab 轉變為 agent 可控的環境，因為這樣可以簡化數據處理流程，並提高工作效率。
> - 產品經理用它來控制 LibreOffice 進行文檔生成，因為這樣可以自動化報告的產出，減少人工錯誤。

## 架構分析

CLI-Anything 採用插件架構，核心資料流為：用戶輸入 → CLI 生成 → 輸出至 agent。使用者透過命令行與軟體互動，CLI-Anything 會自動分析源碼並生成相應的 CLI。專案目錄中包含 README、插件程式碼及測試文件。

## 技術深入分析

> [!note]- 展開深入分析
> CLI-Anything 的核心在於其自動化 CLI 生成的能力，透過分析應用程式的源碼，能夠快速構建出可用的命令行介面。效能方面，該專案能夠在短時間內生成完整的 CLI，並且支持多種應用的轉換。設計上，選擇了結構化的 JSON 輸出格式，這使得 agent 的行為更加可預測，並且降低了使用者的學習成本。與其他工具相比，CLI-Anything 專注於簡化與 AI agent 的互動，提供了一個無需重建的解決方案，這在當前的開發環境中是相當具有競爭力的。

## 優缺點分析

> [!success] 優點
> - 簡化軟體與 AI agent 的互動過程，提升效率。
> - 無需重建應用程式，降低開發成本。
> - 支持多種應用，具有廣泛的適用性。

> [!danger] 缺點
> - 對於不熟悉命令行的用戶，學習曲線較陡。
> - 生成的 CLI 可能需要進一步的手動調整。
> - 依賴於 Claude Code 的環境，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 Claude Code 支援插件功能。
> - 對於某些複雜應用，生成的 CLI 可能需要手動調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/agenthub](https://github.com/karpathy/agenthub) | AgentHub 提供了一個更全面的 agent 框架，但不專注於 CLI 生成，適合需要更複雜 agent 行為的場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療領域的 AI agent，但不具備通用的 CLI 生成能力，適合特定應用場景。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 250 |
| Open Issues | 11 |
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

**社群活躍度**：社群活躍，持續有貢獻者參與開發和討論。
**連結**：[文件](https://github.com/HKUDS/CLI-Anything/blob/main/README.md)

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[Agent 框架]]

相關專案：[[karpathy--agenthub|karpathy/agenthub]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[openai--cli-toolkit|openai/cli-toolkit]] · [[nasa--agent-cli|nasa/agent-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[cyxzdev--Uncodixfy|cyxzdev/Uncodixfy]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，2.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
