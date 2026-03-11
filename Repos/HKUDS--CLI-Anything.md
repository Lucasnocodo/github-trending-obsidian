---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2658
stars_per_day: 1329
forks: 258
open_issues: 14
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
use_case: "讓任何軟體都能被 AI 代理控制，無需重建或複雜包裝。"
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
  - "讓任何軟體都能被 AI 代理控制，無需重建或複雜包裝。"
---

# CLI-Anything

**2.7k** stars · **1.3k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓任何軟體都能被 AI 代理控制，無需重建或複雜包裝。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.3k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人
> **適合** 希望將現有軟體轉變為 AI 代理友好的工具的開發團隊。
> **一句話重點** CLI-Anything 的最大價值在於其能夠將現有軟體轉變為 AI 代理友好的工具，顯著提升自動化程度。

> [!abstract] 核心創新
> CLI-Anything 使得任何軟體都能夠無縫整合進 AI 代理的生態系統中，無需重建或複雜包裝。

## 專案簡介

CLI-Anything 透過一條命令將任何軟體轉變為 AI 代理可控制的工具。使用者只需執行 `/cli-anything ./gimp`，系統會分析源碼、設計命令群組、實作 CLI、計劃測試、撰寫測試、更新文件，並最終發佈可執行的 CLI。這個過程中，CLI-Anything 利用 Python 3.10+ 和 Claude Code 插件架構，確保生成的 CLI 具備結構化 JSON 輸出，讓 AI 代理能夠輕鬆理解和操作。與傳統的 UI 自動化或 API 方案相比，CLI-Anything 直接與實際軟體後端整合，保留了專業功能，避免了功能損失。這個工具能夠處理各種應用程式，從 GIMP 到 LibreOffice，並且能夠在各種平台上運行，無需額外依賴。CLI-Anything 目前在 GitHub 上的星數達到 2658，顯示出其受歡迎程度。這個專案仍在快速發展中，對於需要將現有軟體轉變為 AI 代理友好的工具的團隊來說，這是一個值得考慮的選擇。

**技術棧**：`Python 3.10+` · `Claude Code`

## 重點功能

- 一條命令生成 CLI — 使用 `/cli-anything ./gimp` 生成 GIMP 的完整 CLI。
- 自動化測試生成 — 生成的 CLI 包含單元測試和端到端測試計劃。
- 結構化 JSON 輸出 — 使 AI 代理能夠輕鬆解析和操作命令。
- 無需重建或複雜包裝 — 直接與現有軟體後端整合，保留專業功能。
- 支持多種應用程式 — 可用於 GIMP、Blender、LibreOffice 等多種軟體。

## 快速開始

1. 添加 CLI-Anything 市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝插件
```bash
/plugin install cli-anything
```
3. 生成 GIMP 的 CLI
```bash
/cli-anything ./gimp
```

## 程式碼範例

```bash
# 生成 GIMP 的 CLI
/cli-anything ./gimp

# 使用生成的 CLI
cli-anything-gimp --help
cli-anything-gimp project new --width 1920 --height 1080 -o poster.json
```


## 為什麼值得關注

> [!tip] 爆紅原因
> CLI-Anything 的主要貢獻者包括 yuh-yang 和 Lin-Jiong-HDU，他們在開源社群中有著良好的聲譽。這個工具解決了 AI 代理無法有效使用現有專業軟體的痛點，提供了一種簡單的解決方案來生成可控制的 CLI。最近的討論和推廣使得這個專案獲得了更多的關注，尤其是在 AI 和自動化領域的快速發展中，這種需求越來越明顯。

## 適合誰使用

**目標受眾**：希望將現有軟體轉變為 AI 代理友好的工具的開發團隊。

> [!example] 使用場景
> - AI 工程師用它來將 GIMP 轉變為 AI 代理可控制的工具，因為這樣可以自動化圖像處理流程，節省大量手動操作時間。
> - 數據科學家用它來將 JupyterLab 轉變為可編程的數據分析工具，因為這樣能夠通過命令行快速執行複雜的數據處理任務。
> - 開發者用它來自動生成 LibreOffice 的 CLI，因為這樣可以簡化文檔生成和編輯的過程，提升工作效率。

## 架構分析

CLI-Anything 採用插件架構，核心資料流為：用戶輸入 → CLI 生成 → 輸出可執行的 CLI。關鍵技術決策包括使用 Claude Code 作為插件平台，並利用 Python 進行命令生成和測試。專案目錄結構中包含了插件和測試計劃的相關文件。

## 技術深入分析

CLI-Anything 的核心技術機制在於其能夠自動生成 CLI，這是通過分析源碼和映射 GUI 操作來實現的。這種方法能夠處理複雜的應用程式，並生成結構化的 JSON 輸出，讓 AI 代理能夠輕鬆使用。效能方面，CLI-Anything 能夠快速生成 CLI，並且能夠支持多個應用程式，無需額外的依賴。選擇 Python 作為開發語言使得這個工具能夠利用現有的生態系統和庫，提升開發效率。隨著使用者需求的增加，未來可能會面臨擴展性和維護上的挑戰，尤其是在支持更多應用程式和功能時。安全性方面，對於生成的 CLI 需要進行適當的權限管理，以防止潛在的安全風險。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含中文文檔，安裝過程相對簡單，使用者只需執行幾個命令即可完成安裝。文件中有明確的範例和步驟，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 簡化了將現有軟體轉變為 AI 代理的過程。
> - 保留了專業軟體的全部功能，無需妥協。
> - 支持多種應用程式，具有廣泛的適用性。

> [!danger] 缺點
> - 目前僅支援特定版本的 Python。
> - 依賴於 Claude Code，對於不使用該平台的用戶不友好。
> - 對於某些應用程式，可能需要進一步的手動配置。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 Claude Code 進行插件安裝和使用。
> - 對於某些特定應用程式，可能需要額外的配置或調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/agenthub](https://github.com/karpathy/agenthub) | AgentHub 提供了一個框架來構建 AI 代理，但不專注於 CLI 生成，因此可能無法直接控制現有軟體。 |
| [RunanywhereAI/RCLI](https://github.com/RunanywhereAI/RCLI) | RCLI 主要針對遠端命令執行，而 CLI-Anything 專注於將現有軟體轉變為 AI 代理友好的工具。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 258 |
| Open Issues | 14 |
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

**社群活躍度**：社群活躍，持續更新和擴展功能。
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[karpathy--agenthub|karpathy/agenthub]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[openai--cli-toolkit|openai/cli-toolkit]] · [[nasa--agent-cli|nasa/agent-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，2.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
