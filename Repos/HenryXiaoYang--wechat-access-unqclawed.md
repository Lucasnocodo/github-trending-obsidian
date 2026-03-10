---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 327
stars_per_day: 327
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
  - "category/其他"
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
  - "透過微信OAuth實現OpenClaw的通道連接。"
---

# wechat-access-unqclawed

**327** stars · **327** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信OAuth實現OpenClaw的通道連接。

> [!abstract] 核心創新
> 這個專案提供了專為微信設計的OpenClaw通道插件，支持掃碼登錄和雙向通信。

## 專案簡介

這個專案提供了一個微信通道插件，讓OpenClaw能夠通過微信OAuth進行用戶身份驗證和消息收發。使用者可以通過掃碼登錄，並且系統會自動持久化token，避免重複登錄。與其他通道插件相比，這個專案特別針對微信進行了優化，提供了雙向通信的功能。實際使用中，這個插件能夠簡化用戶登錄流程，但仍需注意微信的API限制和安全性問題。這是一個實用的專案，適合希望在微信平台上運行OpenClaw的開發者。

**技術棧**：`TypeScript`

## 重點功能

- 支持微信掃碼登錄，簡化用戶身份驗證過程。
- 自動持久化token，避免重複登錄。
- 支持AGP協議的WebSocket雙向通信。
- 可配置生產/測試環境切換，方便開發和測試。
- 提供詳細的配置選項，靈活應用。

## 快速開始

1. 安裝插件
```bash
openclaw plugins install @henryxiaoyang/wechat-access-unqclawed
```
2. 啟用通道
```bash
openclaw config set channels.wechat-access-unqclawed.enabled true
```
3. 首次登錄
```bash
openclaw channels login --channel wechat-access-unqclawed
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案由活躍的開發者維護，針對微信的需求而設計，切中用戶對於便捷登錄的需求。隨著微信使用者數量的增加，對於這類插件的需求也隨之上升。

## 適合誰使用

**目標受眾**：希望在微信平台上運行OpenClaw的開發者和企業。

> [!example] 使用場景
> - 開發者用它來整合OpenClaw與微信，因為它能簡化用戶登錄流程。
> - 產品經理用它來收集用戶反饋，因為它支持雙向消息通信。
> - 系統管理員用它來監控用戶活動，因為token自動持久化，方便管理。

## 架構分析

專案基於OpenClaw架構，通過WebSocket實現雙向通信，數據流從用戶掃碼登錄到token持久化，再到消息的收發。

## 優缺點分析

> [!success] 優點
> - 簡化用戶登錄流程，提升用戶體驗。
> - 支持雙向通信，方便用戶互動。
> - 自動持久化token，減少管理負擔。

> [!danger] 缺點
> - 依賴於微信的API，可能面臨限制。
> - 需要用戶手動操作，對於自動化流程不利。
> - 配置過程對新手有一定挑戰。

> [!warning] 注意事項
> - 依賴於微信的API，可能受到限制。
> - 需要用戶手動掃碼登錄，對於自動化流程有影響。
> - 配置過程需要一定的技術背景。

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

相關概念：[[OAuth]] · [[WebSocket]] · [[用戶身份驗證]] · [[即時通訊]] · [[插件開發]]

[GitHub](https://github.com/HenryXiaoYang/wechat-access-unqclawed)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
