---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 3381
stars_per_day: 1691
forks: 324
open_issues: 19
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓所有軟體都能成為智能代理的命令行介面解決方案。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "讓所有軟體都能成為智能代理的命令行介面解決方案。"
---

# CLI-Anything

**3.4k** stars · **1.7k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓所有軟體都能成為智能代理的命令行介面解決方案。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.7k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望將現有軟體轉換為智能代理的開發者，特別是那些需要快速整合多個工具的團隊。
> **一句話重點** CLI-Anything 提供了一個通用的解決方案，能夠將各種軟體轉換為智能代理可用的 CLI，這在當前 AI 代理的熱潮中顯得尤為重要。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到簡化多 API 的交互過程，值得一試。

> [!abstract] 核心創新
> CLI-Anything 將所有軟體轉換為智能代理可用的命令行介面，簡化了多 API 的交互過程。

## 專案簡介

CLI-Anything 的核心機制是將任何軟體轉換為智能代理可用的命令行介面（CLI）。用戶只需透過一個命令 `/cli-anything`，便能將目標軟體（如 GIMP 或 LibreOffice）轉換為可被 AI 代理使用的 CLI，這樣可以簡化與多個 API 的互動，並提高工作效率。該工具的設計理念是將分散的 API 統一為一個 CLI，這樣不僅能減少 API 調用的複雜性，還能提升代理的能力，並節省計算資源。CLI-Anything 透過分析源碼和映射 GUI 行為來自動生成命令，這使得它在處理複雜工作流時表現優異。



技術上，CLI-Anything 使用 Python 3.10+ 和 Shell 作為開發語言，並且支援無需配置的安裝方式，這意味著用戶可以輕鬆地將其安裝到系統路徑中，無需繁瑣的設置過程。與其他類似工具相比，CLI-Anything 的優勢在於其結構化的 JSON 輸出，這使得代理的行為更加可預測，並且能夠在多種系統上運行而不需要額外的依賴。

相較於 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，CLI-Anything 提供了一個更通用的解決方案，因為它不僅限於特定的應用場景，而是能夠適用於各種軟體，並且能夠自動生成 CLI。這使得它在需要快速整合多個工具的情況下特別有用。



在實際使用中，CLI-Anything 能夠處理複雜的工作流，並且其設計使得用戶能夠輕鬆地將新工具整合進現有的系統中。然而，使用者需要注意的是，這個工具目前仍在活躍開發中，可能會遇到一些未解決的問題，像是 #19 的未知技能問題。

總體來說，CLI-Anything 是一個值得關注的專案，特別是對於那些希望將現有軟體轉換為智能代理的開發者。預計在未來幾個月內，這個專案將會持續增長，並吸引更多的使用者和貢獻者。

**技術棧**：`Python 3.10+` · `Shell`

## 重點功能

- 一鍵生成 CLI — 透過 `/cli-anything ./gimp` 命令自動生成 GIMP 的完整 CLI。
- 統一 API — 將多個分散的 API 整合為一個命令行介面，簡化使用流程。
- 零配置安裝 — 只需 `pip install -e .` 即可將 CLI-Anything 安裝到系統路徑。
- 自描述性 — CLI 支援 `--help` 標誌，自動生成文檔，方便代理發現。
- 結構化輸出 — 使用 JSON 格式輸出，減少解析複雜性，提升可預測性。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 將 CLI-Anything 加入市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
3. 生成 GIMP 的 CLI
```bash
/cli-anything ./gimp
```

## 程式碼範例

{
  "前置條件": "需要安裝 Claude Code 和 Python 3.10+",
  "指令": "/cli-anything ./gimp",
  "預期輸出": "生成 GIMP 的完整 CLI，包含所有命令和參數。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 3381 stars（1691/天），forks 324（9.6%），顯示出強烈的使用者興趣。這個專案的作者 yuh-yang 和其他貢獻者在開源社區中有一定的影響力，並且解決了將各種軟體轉換為智能代理的需求，這在當前的 AI 代理熱潮中顯得尤為重要。該專案的出現正好填補了市場上對於簡化多 API 交互的需求，特別是在 AI 代理日益普及的背景下。高比例的 forks/stars 也顯示出許多開發者對此工具的實際修改和使用需求。

## 適合誰使用

**目標受眾**：希望將現有軟體轉換為智能代理的開發者，特別是那些需要快速整合多個工具的團隊。

> [!example] 使用場景
> - 後端工程師用它來將 GIMP 轉換為智能代理可用的 CLI，因為這樣可以簡化圖像處理的自動化流程，節省大量手動操作的時間。
> - AI 開發者用它來快速整合多個 API，因為 CLI-Anything 能夠將分散的 API 統一為一個命令行介面，減少了開發的複雜性。
> - 數據科學家用它來自動化 LibreOffice 的報告生成，因為透過 CLI-Anything，他們可以用簡單的命令來控制報告的生成過程。

## 架構分析

CLI-Anything 採用插件架構，允許用戶透過 Claude Code 的市場輕鬆安裝和使用。其資料流從用戶輸入的命令開始，經過分析和設計階段，最終生成一個可用的 CLI。這樣的設計使得用戶無需進行繁瑣的配置，並且能夠快速集成到現有的工作流中。選擇使用 Python 和 Shell 的原因在於這兩者的跨平台特性和廣泛的社群支持，這樣可以確保工具在多種環境中運行良好。擴展性方面，CLI-Anything 目前主要依賴於 Claude Code 的生態系統，未來可能會面臨與其他工具的整合挑戰。

## 技術深入分析

CLI-Anything 的核心技術機制在於其能夠自動分析和生成命令行介面。透過對源碼的分析，CLI-Anything 能夠將 GUI 行為映射到 API，並設計出結構化的命令組。這種設計不僅提高了使用的便利性，還能夠減少用戶在與多個 API 交互時的複雜性。從效能上看，CLI-Anything 能夠快速生成 CLI，並且在處理複雜的工作流時表現穩定。

由於其依賴於 Python 和 Shell，這使得它在不同平台上都能夠運行，並且不需要額外的依賴。

在設計取捨方面，選擇 Python 作為開發語言使得 CLI-Anything 能夠利用豐富的庫和資源，但也可能導致在某些高效能需求的場景下性能不足。技術風險方面，CLI-Anything 目前仍在開發中，未來可能會面臨與其他工具的整合挑戰，特別是在 API 的穩定性和兼容性上。

整合方面，CLI-Anything 能夠輕鬆與 Claude Code 等平台整合，並且支援多種 CI/CD 工具，這使得它在現代開發流程中具有良好的適應性。

整體來看，CLI-Anything 是一個值得關注的工具，特別是對於希望將現有軟體轉換為智能代理的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，無需繁瑣的配置。文件中提供了中文文檔，對於中文使用者來說非常友好。

## 優缺點分析

> [!success] 優點
> - 簡化多 API 的交互過程，提升工作效率。
> - 支持零配置安裝，降低使用門檻。
> - 生成的 CLI 自描述性強，方便用戶理解和使用。

> [!danger] 缺點
> - 目前僅支援特定版本的 Claude Code，限制了使用範圍。
> - 仍在開發中，可能存在未解決的問題。
> - 對於不熟悉命令行的用戶，可能需要額外的學習成本。

> [!warning] 注意事項
> - 目前僅支援特定版本的 Claude Code。
> - 需要目標軟體已安裝，否則無法生成 CLI。
> - 仍在開發中，可能會遇到未解決的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步，而 CLI-Anything 提供更廣泛的 CLI 生成能力，適用於多種應用場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，而 CLI-Anything 則是通用的解決方案，適用於各種軟體。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步，CLI-Anything 提供更廣泛的 CLI 生成能力。 | 如果你的需求主要是檔案同步，parsync 會是更專注的選擇。 | low，因為兩者的使用方式相似。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，而 CLI-Anything 則是通用的解決方案。 | 如果你的應用場景主要在醫療領域，OpenClaw 會提供更專業的功能。 | medium，因為需要調整到特定的醫療 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於檔案同步，CLI-Anything 提供更廣泛的 CLI 生成能力。 | 專注於醫療領域的技能，而 CLI-Anything 則是通用的解決方案。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要調整到特定的醫療 API。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是檔案同步，parsync 會是更專注的選擇 | 如果你的應用場景主要在醫療領域，OpenClaw 會提供更專 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝過程可能會遇到權限問題
  - 解法：使用 sudo 安裝或檢查安裝目錄的權限
- [MEDIUM] 生成的 CLI 可能不完全符合用戶需求
  - 解法：手動調整生成的命令或參數
- [MEDIUM] 對於不熟悉命令行的用戶，可能需要額外的學習成本
  - 解法：提供額外的學習資源或指導

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速整合多個工具，提升開發效率。 |
| 大型企業的複雜系統整合 | 普通 | 可能需要更多的自定義和調整以滿足特定需求。 |
| 個人開發者的 side project | 非常適合 | 簡化了多 API 的交互過程，降低了開發門檻。 |
| 對命令行不熟悉的團隊 | 不適合 | 需要一定的命令行操作基礎才能有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到簡化多 API 的交互過程，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CLI-Anything 本身不需要高權限，且不存取敏感資料。依賴的庫和工具在開源社區中有良好的信任度，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 324 |
| Open Issues | 19 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 6.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 10 |
> | [@Lin-Jiong-HDU](https://github.com/Lin-Jiong-HDU) | 6 |
> | [@zhangxilong-43](https://github.com/zhangxilong-43) | 2 |
> | [@JasonZhaoWW](https://github.com/JasonZhaoWW) | 1 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個合併請求和問題回應。
**連結**：[文件](README_CN.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-09 ~ 2026-03-10）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #8 from Lin-Jiong-HDU/feature/list-command

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/HKUDS/CLI-Anything/issues/19) | Unknown skill: cli-anything | 3 | 3 |
> | [#5](https://github.com/HKUDS/CLI-Anything/issues/5) | 国内能用opencode | 1 | 4 |
> | [#3](https://github.com/HKUDS/CLI-Anything/issues/3) | Docs: Replace hardcoded /root/ paths with portable examples | 1 | 4 |

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
> 
> ## 🚀 Quick Start
> 
> 
> ### Prerequisites
> 
> - **Claude Code** (with plugin support)
> - **Python 3.10+**
> - Target software installed (e.g., GIMP, Blender, LibreOffice, or your own application)
> 
> 
> ### Step 2: Install the Plugin
> 
> ```bash
> 
> # Install the cli-anything plugin from the marketplace
> /plugin install cli-anything
> ```
> 
> That's it. The plugin is now available in your Claude Code session.
> 
> 
> # Install to PATH
> cd gimp/agent-harness && pip install -e .
> 
> 
> ### 📦 Zero-Config Installation
> Simple pip install -e . puts cli-anything- directly on PATH. Agents discover tools via standard which commands. No setup, no wrappers.
> 
> 
> ## 📦 Installation & Usage
> 
> 
> # Add marketplace & install (recommended)
> /plugin marketplace add HKUDS/CLI-Anything
> /plugin install cli-anything
> 
> 
> # Install any generated CLI
> cd /agent-harness
> pip install -e .
> 
> 
> # Force-installed mode (recommended for validation)
> CLI_ANYTHING_FORCE_INSTALLED=1 python3 -m pytest cli_anything//tests/ -v -s
> ```
> 
> ---
> 
> 
> ## 🎬 Demonstrations
> 
> 
> ### Examples
> 
> ```bash
> 
> ## 🎮 Demo: Using a Generated CLI
> 
> Here's what an agent can do with `cli-anything-libreoffice`:
> 
> ```bash
> 
> ## CLI-Anything's Key Features
> 
> 
> ### 🔗 Unify Scattered APIs into One CLI
> 
> Tired of juggling fragmented web service APIs? Feed the docs or SDK manuscripts to `/cli-anything` and your agents get a **powerful, stateful CLI** that wraps those individual endpoints into coherent command groups. One tool instead of dozens of raw API calls — stronger capabilities while saving tokens.
> 
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
> 
> ### Step 1: Add the Marketplace
> 
> CLI-Anything is distributed as a Claude Code plugin marketplace hosted on GitHub.
> 
> ```bash
> 
> # Add the CLI-Anything marketplace
> /plugin marketplace add HKUDS/CLI-Anything
> ```
> 
> 
> ### Step 3: Build a CLI in One Command
> 
> ```bash
> 
> # /cli-anything 
> 
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
> 
> ### Step 4: Use the CLI
> 
> ```bash
> 
> # Use from anywhere
> cli-anything-gimp --help
> cli-anything-gimp project new --width 1920 --height 1080 -o poster.json
> cli-anything-gimp --json layer add -n "Background" --type solid --color "#1a1a2e"
> 
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
> 
> # Clone the repo
> git clone https://github.com/HKUDS/CLI-Anything.git
> 
> 
> # Copy plugin to Claude Code plugins directory
> cp -r CLI-Anything/cli-anything-plugin ~/.claude/plugins/cli-anything
> 
> 
> # Reload plugins
> /reload-plugins
> ```
> 
> ---
> 
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
> 
> ## 🔧 When to Use CLI-Anything
> 
> | Category | How to be Agent-native | Notable Examples |
> |----------|----------------------|----------|
> | **📂 GitHub Repositories** | Transform any open-source project into agent-controllable tools through automatic CLI generation | VSCodium, WordPress, Calibre, Zotero, Joplin, Logseq, Penpot, Super Productivity |
> | **🤖 AI/ML Platforms** | Automate model training, inference pipelines, and hyperparameter tuning through structured commands | Stable Diffusion WebUI, ComfyUI, InvokeAI, Text-generation-webui, Open WebUI, Fooocus, Kohya_ss, AnythingLLM, SillyTavern |
> | **📊 Data & Analytics** | Enable programmatic data processing, visualization, and statistical analysis workflows | JupyterLab, Apache Superset, Metabase, Redash, DBeaver, KNIME, Orange, OpenSearch Dashboards, Lightdash |
> | **💻 Development Tools** | Streamline code editing, building, testing, and deployment processes via command interfaces | Jenkins, Gitea, Hoppscotch, Portainer, pgAdmin, SonarQube, ArgoCD, OpenLens, Insomnia, Beekeeper Studio |
> | **🎨 Creative & Media** | Control content creation, editing, and rendering workflows programmatically | Blender, GIMP, OBS Studio, Audacity, Krita, Kdenlive, Shotcut, Inkscape, Darktable, LMMS, Ardour |
> | **🔬 Scientific Computing** | Automate research workflows, simulations, and complex calculations | ImageJ, FreeCAD, QGIS, ParaView, Gephi, LibreCAD, Stellarium, KiCad, JASP, Jamovi |
> | **🏢 Enterprise & Office** | Convert business applications and productivity tools into agent-accessible systems | NextCloud, GitLab, Grafana, Mattermost, LibreOffice, AppFlowy, NocoDB, Odoo (Community), Plane, ERPNext |
> | **📐 Diagramming & Visualization** | Create and manipulate diagrams, flowcharts, architecture diagrams, and visual documentation programmatically | Draw.io (diagrams.net), Mermaid, PlantUML, Excalidraw, yEd |
> | **✨ AI Content Generation** | Generate professional deliverables (slides, docs, diagrams, websites, research reports) through AI-powered cloud APIs | [AnyGen](https://www.anygen.io), Gamma, Beautiful.ai, Tome |
> 
> ---
> 
> 
> ### The Agent-Software Gap
> AI agents are great at reasoning but terrible at using real professional software. Current solutions are fragile UI automation, limited APIs, or dumbed-down reimplementations that miss 90% of functionality.
> 
> **CLI-Anything's Solution**: Transform any professional software into agent-native tools without losing capabilities.
> 
> | **Current Pain Point** | **CLI-Anything's Fix** |
> |----------|----------------------|
> | 🤖 "AI can't use real tools" | Direct integration with actual software backends (Blender, LibreOffice, FFmpeg) — full professional capabilities, zero compromises |
> | 💸 "UI automation breaks constantly" | No screenshots, no clicking, no RPA fragility. Pure command-line reliability with structured interfaces |
> | 📊 "Agents need structured data" | Built-in JSON output for seamless agent consumption + human-readable formats for debugging |
> | 🔧 "Custom integrations are expensive" | One Claude plugin auto-generates CLIs for ANY codebase through proven 7-phase pipeline |
> | ⚡ "Prototype vs Production gap" | 1,436+ tests with real software validation. Battle-tested across 9 major applications |
> 
> ---
> 
> 
> ## 🎯 What Can You Do with CLI-Anything?
> 
> 
> ### 🛠️ Let Agents Take Your Workflows
> 
> Professional or everyday — just throw the codebase at `/cli-anything`. GIMP, Blender, Shotcut for creative work. LibreOffice, OBS Studio for daily tasks. Don't have the source? Find an open-source alternative and throw *that* in. You'll instantly get a full CLI your agents can use.
> 
> 
> ### 🚀 Replace or Supercharge GUI Agents
> 
> CLI-Anyth

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[karpathy--agenthub|karpathy/agenthub]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[openai--cli-toolkit|openai/cli-toolkit]] · [[nasa--agent-cli|nasa/agent-cli]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/HKUDS/CLI-Anything)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--CLI-Anything" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--CLI-Anything" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "HKUDS" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，2.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
