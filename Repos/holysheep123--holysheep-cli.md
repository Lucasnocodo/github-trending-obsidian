---
repo: holysheep123/holysheep-cli
url: https://github.com/holysheep123/holysheep-cli
owner: holysheep123
owner_type: User
language: JavaScript
license: N/A
description: "🐑 One command to configure all AI coding tools — Claude Code, Codex, Gemini CLI, Cursor, Aider & more"
homepage: "https://shop.holysheep.ai"
stars: 306
stars_per_day: 102
forks: 0
open_issues: 1
created: 2026-03-07
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
use_case: "一條命令配置所有 AI 編程工具，無需手動編輯配置文件。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/ai"
  - "topic/aider"
  - "topic/api"
  - "topic/china"
  - "topic/claude"
aliases:
  - "holysheep-cli"
  - "holysheep123/holysheep-cli"
  - "一條命令配置所有 AI 編程工具，無需手動編輯配置文件。"
---

# holysheep-cli

**306** stars · **102** stars/天 · 建立 3 天前 · JavaScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，無需手動編輯配置文件。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在中國環境中快速配置多個 AI 編程助手的開發者。
> **一句話重點** HolySheep CLI 讓開發者能夠快速配置多個 AI 工具，特別是在中國的環境下，這是一個非常實用的解決方案。

> [!abstract] 核心創新
> HolySheep CLI 提供了一個簡單的命令來自動配置多個 AI 編程工具，特別適合在中國使用。

## 專案簡介

HolySheep CLI 是一個命令行工具，通過一條命令自動配置多個 AI 編程助手，使用 HolySheep API 來訪問 Claude、GPT 和 Gemini API，無需 VPN。用戶只需執行 `hs setup`，輸入 API 金鑰，選擇要配置的工具，便可完成設置。該工具支持的助手包括 Claude Code、Codex CLI、Aider 等，並能自動生成相應的配置文件。與其他工具相比，HolySheep CLI 省去了手動編輯配置的繁瑣過程，並且支持在中國地區直接使用。這個工具的設計使得開發者能夠快速上手，特別是在需要多個 AI 工具的環境中，能夠節省大量時間。使用者只需 Node.js 16+ 環境即可運行，並且能夠輕鬆檢查配置狀態和賬戶餘額。這個專案目前處於穩定階段，適合需要快速配置 AI 工具的開發團隊。對於需要在中國使用 AI 工具的開發者來說，HolySheep CLI 是一個非常合適的選擇，而對於不需要多個工具的簡單開發者來說，可能就不那麼必要了。

**技術棧**：`Node.js 16+`

## 重點功能

- 一鍵配置 — 使用 `hs setup` 命令自動配置多個 AI 工具。
- 支持多種工具 — 包括 Claude Code、Codex CLI、Aider 等，並自動生成配置文件。
- API 金鑰管理 — 使用 `hs login` 命令安全保存 API 金鑰。
- 配置檢查 — 使用 `hs doctor` 命令檢查配置狀態和連通性。
- 賬戶餘額查詢 — 使用 `hs balance` 命令查看 API 賬戶餘額。

## 快速開始

1. 使用 npx 安裝並設置
```bash
npx @simonyea/holysheep-cli@latest setup
```
2. 全局安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
3. 運行設置命令
```bash
hs setup
```

## 程式碼範例

bash
# 用戶輸入 API 金鑰並選擇要配置的工具
hs setup
# 預期輸出：配置完成，所有選擇的工具已成功設置。

## 為什麼值得關注

> [!tip] 爆紅原因
> HolySheep CLI 的作者在 AI 工具整合方面有豐富的經驗，這個工具解決了在中國使用多個 AI 編程助手的配置問題，特別是對於需要訪問外部 API 的開發者。最近的推廣活動和社群討論使得這個工具的曝光率上升，並且隨著 AI 工具的普及，對於簡化配置的需求也在增加。

## 適合誰使用

**目標受眾**：需要在中國環境中快速配置多個 AI 編程助手的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速配置多個 AI 編程助手，因為手動配置繁瑣且容易出錯。
> - 全端開發者用它來統一管理不同 AI 工具的 API 設定，因為可以節省大量的時間和精力。
> - AI 研究人員用它來在中國環境下無縫接入 Claude 和 GPT，因為它解決了 VPN 的需求問題。

## 架構分析

HolySheep CLI 是一個單體命令行工具，核心資料流為：用戶輸入 API 金鑰 → 工具配置 → 輸出成功提示。選擇 JavaScript 作為開發語言使得它能夠輕鬆與 Node.js 環境整合。專案目錄結構中，主要的執行檔案為 `index.js`，負責處理用戶輸入和配置邏輯。

## 技術深入分析

HolySheep CLI 使用 JavaScript 開發，並依賴 Node.js 環境來運行。核心技術機制是通過命令行界面與用戶互動，並根據用戶輸入的 API 金鑰自動生成配置文件。這個工具能夠處理多個 AI 工具的配置，並且在中國環境中無需 VPN 直接訪問 API。設計上，HolySheep CLI 旨在簡化開發者的工作流程，特別是對於需要使用多個 AI 編程助手的情況。選擇 Node.js 作為開發語言使得這個工具能夠快速部署和更新，但也意味著需要 Node.js 環境的支持。隨著 AI 工具的普及，HolySheep CLI 的設計理念能夠滿足開發者對於簡化配置的需求，未來可能會面臨擴展性和兼容性方面的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟，提供了多種使用範例。安裝過程相對順暢，但需要注意 Node.js 版本要求。整體上，對於新手來說，30 分鐘內能夠順利運行。文件有中英文版本，方便不同語言的用戶使用。

## 優缺點分析

> [!success] 優點
> - 簡化配置過程，節省時間。
> - 支持多個流行的 AI 工具，易於擴展。
> - 無需 VPN 即可在中國使用，解決了訪問問題。

> [!danger] 缺點
> - 不支持所有 AI 工具，存在限制。
> - 需要 Node.js 環境，對於某些用戶來說可能不方便。
> - 某些功能需要手動配置，增加了複雜性。

> [!warning] 注意事項
> - 僅支持 Node.js 16+ 環境。
> - 對於某些工具（如 Cursor）需要手動配置。
> - 不支持 Gemini CLI 的配置。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 0 |
| Open Issues | 1 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://shop.holysheep.ai) |
| Repo 大小 | 2.4 MB |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://shop.holysheep.ai)

## README 摘錄

> [!info]- 展開查看原文 README
> # 🐑 HolySheep CLI
> 
> **[English](#english) | [中文](#chinese)**
> 
> [](https://www.npmjs.com/package/@simonyea/holysheep-cli)
> [](https://www.npmjs.com/package/@simonyea/holysheep-cli)
> [](LICENSE)
> 
> **One command to configure all AI coding tools with HolySheep API**
> **一条命令，配置所有 AI 编程工具**
> 
> [🚀 Quick Start](#quick-start) · [📦 npm](https://www.npmjs.com/package/@simonyea/holysheep-cli) · [🌐 holysheep.ai](https://holysheep.ai)
> 
> ---
> 
> ## 🇬🇧 English
> 
> ### What is HolySheep CLI?
> 
> **HolySheep CLI** (`hs`) is a command-line tool that automatically configures all popular AI coding assistants to use [HolySheep API](https://holysheep.ai) — a relay service for accessing Claude, GPT, and Gemini APIs in China without a VPN.
> 
> Instead of manually editing config files for each tool, run one command and you're done.
> 
> ### Supported Tools
> 
> | Tool | Config File | Status |
> |------|-------------|--------|
> | [Claude Code](https://docs.anthropic.com/claude-code) | `~/.claude/settings.json` | ✅ Auto |
> | [Codex CLI](https://github.com/openai/codex) | `~/.codex/config.toml` | ✅ Auto |
> | [Aider](https://aider.chat) | `~/.aider.conf.yml` | ✅ Auto |
> | [Continue.dev](https://continue.dev) | `~/.continue/config.yaml` | ✅ Auto |
> | [OpenCode](https://github.com/anomalyco/opencode) | `~/.config/opencode/opencode.json` | ✅ Auto |
> | [OpenClaw](https://openclaw.ai) | `~/.openclaw/openclaw.json` | ✅ Auto |
> | [Cursor](https://cursor.sh) | GUI (encrypted storage) | ⚠️ Manual |
> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google protocol only | ❌ Not supported |
> 
> ### Quick Start
> 
> ```bash
> npx @simonyea/holysheep-cli@latest setup
> ```
> 
> Or install globally:
> 
> ```bash
> npm install -g @simonyea/holysheep-cli
> hs setup
> ```
> 
> You'll be prompted for your API Key (`cr_xxx`), then select the tools to configure. Done!
> 
> ### OpenClaw Setup
> 
> [OpenClaw](https://openclaw.ai) is a powerful AI agent gateway with a web dashboard. After running `hs setup`:
> 
> 1. A new terminal window opens running the OpenClaw Gateway
> 2. Open your browser: **http://127.0.0.1:18789/**
> 3. Start chatting — no token required
> 
> > **Keep the gateway window open** while using OpenClaw. The gateway must be running for the browser UI to work.
> 
> To restart the gateway later:
> ```bash
> npx openclaw gateway --port 18789
> ```
> 
> ### Commands
> 
> | Command | Description |
> |---------|-------------|
> | `hs setup` | Configure AI tools interactively |
> | `hs login` | Save your API Key locally |
> | `hs doctor` | Check configuration & connectivity |
> | `hs balance` | View account balance |
> | `hs tools` | List all supported tools |
> | `hs reset` | Remove all HolySheep configuration |
> 
> ### API Endpoints
> 
> | Usage | URL |
> |-------|-----|
> | Anthropic SDK / Claude Code | `https://api.holysheep.ai` (no `/v1`) |
> | OpenAI-compatible / Codex / Aider | `https://api.holysheep.ai/v1` (with `/v1`) |
> 
> ---
> 
> ## 🇨🇳 中文
> 
> ### 什么是 HolySheep CLI？
> 
> **HolySheep CLI**（命令 `hs`）是一个命令行工具，帮你一键配置所有主流 AI 编程助手接入 [HolySheep API](https://holysheep.ai)。
> 
> 无需 VPN，无需手动改配置文件，运行一条命令即可接入 Claude、GPT、Gemini。
> 
> ### 支持的工具
> 
> | 工具 | 状态 | 说明 |
> |------|------|------|
> | [Claude Code](https://docs.anthropic.com/claude-code) | ✅ 自动 | Anthropic 官方 CLI |
> | [Codex CLI](https://github.com/openai/codex) | ✅ 自动 | OpenAI 官方 CLI |
> | [Aider](https://aider.chat) | ✅ 自动 | AI 结对编程 |
> | [Continue.dev](https://continue.dev) | ✅ 自动 | VS Code/JetBrains 插件 |
> | [OpenCode](https://github.com/anomalyco/opencode) | ✅ 自动 | 终端 AI 编程助手 |
> | [OpenClaw](https://openclaw.ai) | ✅ 自动 | AI 智能体网关 + Web 界面 |
> | [Cursor](https://cursor.sh) | ⚠️ 手动 | 需在 GUI 中手动配置 |
> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | ❌ 不支持 | 仅支持 Google 官方协议 |
> 
> ### 快速开始
> 
> ```bash
> npx @simonyea/holysheep-cli@latest setup
> ```
> 
> 或全局安装：
> 
> ```bash
> npm install -g @simonyea/holysheep-cli
> hs setup
> ```
> 
> 按提示输入 API Key（`cr_xxx`），选择要配置的工具，完成！
> 
> ### OpenClaw 使用说明
> 
> [OpenClaw](https://openclaw.ai) 是一个 AI 智能体网关，提供浏览器 Web 界面，支持聊天、任务、工具调用等功能。
> 
> **`hs setup` 配置完成后：**
> 
> 1. 自动弹出一个新终端窗口，运行 OpenClaw Gateway
> 2. 打开浏览器访问：**http://127.0.0.1:18789/**
> 3. 直接开始聊天，无需填写 t

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://shop.holysheep.ai)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "holysheep123--holysheep-cli"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
