---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 325
stars_per_day: 325
forks: 83
open_issues: 2
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - typescript
  - openclaw
  - openclaw_plugin
  - qclaw
  - wechat
  - wechat_bot
aliases:
  - "wechat-access-unqclawed"
  - "HenryXiaoYang/wechat-access-unqclawed"
  - "透過微信 OAuth 獲取 token，連接 AGP WebSocket 網關進行消息收發。"
---

# wechat-access-unqclawed

**325** stars · **325** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信 OAuth 獲取 token，連接 AGP WebSocket 網關進行消息收發。

> [!abstract] 核心創新
> 通過微信 OAuth 獲取 token，實現與 AGP WebSocket 的無縫連接。

## 專案簡介

這個專案是一個微信通路插件，通過微信的 OAuth 授權機制來獲取 token，並連接 AGP WebSocket 網關進行消息的雙向傳輸。它提供了簡單的安裝步驟，並支持自動持久化 token，讓用戶在重啟後無需重新登錄。與其他微信集成工具相比，這個專案專注於 AGP 協議的實現，並提供了更為靈活的配置選項。使用者反映，這個插件能夠有效地簡化微信的消息處理流程，但需要注意其對於環境的配置要求。整體來說，這是一個值得使用的工具，特別是對於需要頻繁使用微信的開發者來說。

**技術棧**：`TypeScript`

## 重點功能

- 微信掃碼登錄，簡化用戶認證過程。
- 自動持久化 token，重啟後無需重新登錄。
- 支持 AGP 協議的 WebSocket 雙向通信。
- 靈活的配置選項，支持生產和測試環境切換。
- 簡單的安裝步驟，快速上手。

## 快速開始

1. 安裝插件
```bash
openclaw plugins install @henryxiaoyang/wechat-access-unqclawed
```
2. 啟用渠道
```bash
openclaw config set channels.wechat-access-unqclawed.enabled true
```
3. 首次登錄
```bash
openclaw channels login --channel wechat-access-unqclawed
```

## 為什麼值得關注

> [!tip] 爆紅原因
> HenryXiaoYang 是一位活躍的開發者，專注於開源項目，這個插件正好滿足了開發者對於微信集成的需求。隨著 AGP 協議的普及，這個專案在短時間內獲得了關注。

## 適合誰使用

**目標受眾**：需要將微信功能集成到應用中的開發者。

> [!example] 使用場景
> - 開發者用它來快速集成微信功能，因為這樣可以節省開發時間。
> - 系統管理員用它來管理微信消息，因為它能夠自動處理 token 的持久化。
> - 用戶用它來方便地發送和接收微信消息，因為它簡化了操作流程。

## 架構分析

這個插件的架構是基於 OpenClaw 平台，通過微信 OAuth 獲取 token，並使用 WebSocket 進行消息的雙向傳輸。

## 優缺點分析

> [!success] 優點
> - 簡化了微信的登錄和消息處理流程。
> - 自動持久化 token，提升用戶體驗。
> - 靈活的配置選項，適應不同環境。

> [!danger] 缺點
> - 需要依賴 AGP WebSocket 網關。
> - 對於新手用戶可能需要一定的學習成本。
> - 目前功能較為基礎，未來可能需要擴展。

> [!warning] 注意事項
> - 需要配置 AGP WebSocket 網關才能正常使用。
> - 對於某些環境可能需要額外的設置。
> - 目前僅支持微信的基本功能，未來可能會擴展。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 83 |
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
> AGP (Agent Gateway P

## 延伸閱讀

相關概念：[[微信 API]] · [[OAuth 認證]] · [[WebSocket]]

[GitHub](https://github.com/HenryXiaoYang/wechat-access-unqclawed)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
