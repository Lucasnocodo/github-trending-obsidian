---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 331
stars_per_day: 331
forks: 87
open_issues: 2
created: 2026-03-09
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
use_case: "透過微信掃碼登入獲取 token，實現與 AGP WebSocket 網關的雙向通信。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/openclaw"
  - "topic/openclaw_plugin"
  - "topic/qclaw"
  - "topic/wechat"
  - "topic/wechat_bot"
aliases:
  - "wechat-access-unqclawed"
  - "HenryXiaoYang/wechat-access-unqclawed"
  - "透過微信掃碼登入獲取 token，實現與 AGP WebSocket 網關的雙向通信。"
---

# wechat-access-unqclawed

**331** stars · **331** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信掃碼登入獲取 token，實現與 AGP WebSocket 網關的雙向通信。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (331 stars/day)
> **適合** 需要在 OpenClaw 中集成微信通道的開發者，特別是想要簡化用戶登入流程的團隊。
> **一句話重點** 這個插件展示了如何將微信的掃碼登入功能與現代的 WebSocket 通信結合，為開發者提供了高效的解決方案。

> [!abstract] 核心創新
> 這個專案將微信的 OAuth 登入流程與 AGP WebSocket 通信無縫結合，提供了一個簡單的集成方案。

## 專案簡介

這個專案是一個 OpenClaw 插件，專門用於微信通道的整合。它的核心流程是用戶透過微信掃碼登入，獲取 token，並利用該 token 連接 AGP WebSocket 網關進行消息的收發。技術上，它使用 TypeScript 實現，並依賴於 AGP 協議進行雙向通信，支持流式文本和工具調用。與其他類似工具相比，它的獨特之處在於支持微信的 OAuth 登入流程，並且能夠自動持久化 token，減少重複登入的麻煩。實際使用中，這個插件能夠在生產和測試環境之間靈活切換，並且支持邀請碼的驗證。對於需要與微信進行集成的開發者來說，這是一個相對成熟的解決方案，適合中小型團隊使用。建議在需要快速集成微信功能時使用，但如果不需要微信或 AGP 的支持，則可以考慮其他通道插件。

**技術棧**：`TypeScript`

## 重點功能

- 微信掃碼登入 — 透過終端顯示二維碼或提供瀏覽器鏈接進行登入。
- Token 自動持久化 — 登入後 token 自動保存，重啟後無需再次登入。
- AGP 協議 WebSocket 通信 — 支持流式文本和工具調用的雙向通信。
- 邀請碼驗證 — 可選擇性配置是否跳過邀請碼驗證。
- 生產/測試環境切換 — 支持靈活配置，方便開發和測試。

## 快速開始

1. 安裝插件
```bash
openclaw plugins install @henryxiaoyang/wechat-access-unqclawed
```
2. 啟用通道
```bash
openclaw config set channels.wechat-access-unqclawed.enabled true
```
3. 首次登入
```bash
openclaw channels login --channel wechat-access-unqclawed
```

## 程式碼範例

```bash
openclaw channels login --channel wechat-access-unqclawed
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 HenryXiaoYang 專注於開源社群，並且有著良好的技術背景。隨著越來越多的應用需要與微信進行集成，這個插件恰好滿足了這個需求，特別是在開發者需要快速實現掃碼登入的場景中。近期的開源趨勢也促使了這類工具的需求上升。

## 適合誰使用

**目標受眾**：需要在 OpenClaw 中集成微信通道的開發者，特別是想要簡化用戶登入流程的團隊。

> [!example] 使用場景
> - 後端工程師用它來實現微信掃碼登入，因為這樣可以簡化用戶登入流程，提升用戶體驗。
> - 產品經理用它來測試微信通道的消息推送功能，因為它支持生產和測試環境的靈活切換，方便進行功能驗證。
> - DevOps 工程師用它來監控 WebSocket 消息的流動，因為它提供了雙向通信的能力，能夠即時獲取系統狀態。

## 架構分析

這是一個插件架構的專案，主要由 OpenClaw 框架支持。用戶輸入 → 微信掃碼登入 → 獲取 token → 連接 AGP WebSocket 網關。關鍵技術決策是選擇 AGP 協議作為通信方式，並且使用 TypeScript 進行開發。專案目錄結構清晰，主要文件包括 index.ts（插件入口）和各種處理認證和 WebSocket 的模組。

## 優缺點分析

> [!success] 優點
> - 簡化了微信登入流程，提升用戶體驗。
> - 支持 token 自動持久化，減少重複登入的麻煩。
> - 靈活的環境配置，方便開發和測試。

> [!danger] 缺點
> - 需要用戶手動處理 token 的持久化，增加了操作步驟。
> - 對於不熟悉 AGP 協議的開發者，可能需要額外學習成本。
> - 僅限於 OpenClaw 環境，無法獨立使用。

> [!warning] 注意事項
> - 僅支持 OpenClaw 環境，無法獨立使用。
> - 需要用戶手動處理 token 的持久化，雖然有自動化流程，但仍需注意。
> - 對於不熟悉 AGP 協議的開發者，可能需要額外學習成本。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 87 |
| Open Issues | 2 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-09 |
| Repo 大小 | 501 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HenryXiaoYang](https://github.com/HenryXiaoYang) | 28 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 3 |
> | [@smysle](https://github.com/smysle) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # wechat-access-unqclawed
> 
> OpenClaw 微信通路插件 — 通过 WeChat OAuth 扫码登录获取 token，连接 AGP WebSocket 网关收发消息。
> 
> ## 安装
> 
> ```bash
> openclaw plugins install @henryxiaoyang/wechat-access-unqclawed
> ```
> 
> 启用渠道：
> 
> ```bash
> openclaw config set channels.wechat-access-unqclawed.enabled true
> ```
> 
> ## 首次登录
> 
> ```bash
> openclaw channels login --channel wechat-access-unqclawed
> ```
> 
> 终端会显示微信二维码（或浏览器链接），用微信扫码并确认后，浏览器会跳转到新页面，地址栏 URL 形如：
> 
> ```
> https://security.guanjia.qq.com/login?code=001j6y000...&state=64c077c4e078...
> ```
> 
> 复制 `code=` 后面的值（到 `&` 之前），在**另一个终端窗口**写入临时文件：
> 
> ```bash
> echo "001j6y0000MiZV1uYB300cEYDG1j6y0x" > ~/.openclaw/wechat-auth-code.tmp
> ```
> 
> 也可以直接粘贴完整 URL，会自动提取 `code`：
> 
> ```bash
> echo "https://security.guanjia.qq.com/login?code=001j6y0000MiZV1uYB300cEYDG1j6y0x&state=64c077..." > ~/.openclaw/wechat-auth-code.tmp
> ```
> 
> 原窗口会自动检测并完成登录，token 自动保存。然后重启 Gateway：
> 
> ```bash
> openclaw gateway restart
> ```
> 
> ## 功能
> 
> - 微信扫码登录（终端二维码 + 浏览器链接）
> - Token 自动持久化，重启免登录
> - AGP 协议 WebSocket 双向通信（流式文本、工具调用）
> - 邀请码验证（可配置跳过）
> - 支持生产/测试环境切换
> 
> ## 配置
> 
> 在 OpenClaw 配置文件的 `channels.wechat-access-unqclawed` 下：
> 
> ```json
> {
>   "channels": {
>     "wechat-access-unqclawed": {
>       "enabled": true,
>       "token": "",
>       "wsUrl": "",
>       "bypassInvite": false,
>       "environment": "production"
>     }
>   }
> }
> ```
> 
> | 字段 | 类型 | 说明 |
> |------|------|------|
> | `enabled` | boolean | 启用渠道（必须设为 `true`） |
> | `token` | string | 手动指定 channel token（留空则走扫码登录） |
> | `wsUrl` | string | WebSocket 网关地址（留空使用环境默认值） |
> | `bypassInvite` | boolean | 跳过邀请码验证 |
> | `environment` | string | `production` 或 `test` |
> | `authStatePath` | string | 自定义 token 持久化路径 |
> 
> ## Token 获取策略
> 
> 1. 读取配置中的 `token` — 如果有，直接使用
> 2. 读取本地保存的登录态（`~/.openclaw/wechat-access-auth.json`）
> 3. 以上都没有 — 运行 `openclaw channels login --channel wechat-access-unqclawed` 手动登录
> 
> ## 项目结构
> 
> ```
> index.ts                 # 插件入口，注册渠道、CLI、启停 WebSocket
> auth/
>   types.ts               # 认证相关类型
>   environments.ts        # 生产/测试环境配置
>   device-guid.ts         # 设备 GUID 生成（随机，持久化）
>   qclaw-api.ts           # QClaw JPRX 网关 API 客户端
>   state-store.ts         # Token 持久化
>   wechat-login.ts        # 扫码登录流程编排（交互式）
>   wechat-qr-poll.ts      # QR 码生成与轮询
> websocket/
>   types.ts               # AGP 协议类型
>   websocket-client.ts    # WebSocket 客户端（连接、心跳、重连）
>   message-handler.ts     # 消息处理（调用 Agent）
>   message-adapter.ts     # AGP  OpenClaw 消息适配
> common/
>   runtime.ts             # OpenClaw 运行时单例
>   agent-events.ts        # Agent 事件订阅
>   message-context.ts     # 消息上下文构建
> http/                    # HTTP webhook 通道（备用）
> ```
> 
> ## 协议
> 
> AGP (Agent Gateway Protocol) — 基于 WebSocket Text 帧的 JSON 消息协议，详见 `websocket.md`。
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[AGP Protocol]] · [[OAuth]] · [[WebSocket]]

[GitHub](https://github.com/HenryXiaoYang/wechat-access-unqclawed)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
