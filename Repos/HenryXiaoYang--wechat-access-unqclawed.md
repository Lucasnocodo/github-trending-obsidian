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
> 這個專案提供了微信通道的支持，讓OpenClaw能夠輕鬆接入中國市場。

## 專案簡介

這個專案提供了一個微信通道插件，讓OpenClaw能夠通過微信OAuth進行用戶身份驗證和消息收發。使用者可以透過掃碼登錄，並且系統會自動持久化token，簡化了用戶的登錄流程。這個插件的特點在於其雙向通信能力，能夠實現流式文本和工具調用，提升了用戶互動體驗。與其他通道插件相比，這個專案專注於微信平台，提供了針對中國市場的解決方案。實際使用中，這個插件能夠快速連接OpenClaw和微信，適合需要在微信上進行AI交互的開發者。這是一個值得關注的工具，特別是對於希望在中國市場推廣的AI應用。

**技術棧**：`TypeScript`

## 重點功能

- 支持微信掃碼登錄，簡化用戶身份驗證流程。
- 自動持久化token，重啟後免登錄。
- 實現AGP協議的WebSocket雙向通信。
- 支持生產和測試環境切換。
- 提供配置選項以自定義通道行為。

## 快速開始

1. 安裝插件
```bash
openclaw plugins install @henryxiaoyang/wechat-access-unqclawed
```
2. 啟用微信通道
```bash
openclaw config set channels.wechat-access-unqclawed.enabled true
```
3. 首次登錄
```bash
openclaw channels login --channel wechat-access-unqclawed
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著微信在中國的普及，開發者對於將AI應用整合進微信的需求日益增加。這個專案的作者針對這一需求提供了具體的解決方案，讓OpenClaw能夠輕鬆接入微信。近期的市場需求也促使這樣的工具變得更加重要。

## 適合誰使用

**目標受眾**：希望在微信平台上整合AI應用的開發者和企業。

> [!example] 使用場景
> - 開發者 用它來 在微信上實現AI聊天機器人，因為這樣可以觸及更廣泛的用戶群體。
> - 企業 用它來 提供客戶服務，因為能夠通過微信進行即時互動。
> - 研究人員 用它來 收集用戶反饋，因為能夠輕鬆在微信平台上進行調查。

## 架構分析

專案基於OpenClaw架構，通過微信OAuth實現用戶身份驗證，並使用WebSocket進行雙向通信。用戶可以透過掃碼登錄，系統會自動管理token，簡化了整個流程。

## 優缺點分析

> [!success] 優點
> - 簡化了微信用戶的登錄流程，提升了使用體驗。
> - 支持雙向通信，能夠實現即時互動。
> - 針對中國市場的需求，提供了具體解決方案。

> [!danger] 缺點
> - 僅限於微信平台，對於其他通道的支持不足。
> - 需要用戶手動處理token，增加了使用複雜性。
> - 可能需要額外配置以滿足特定需求。

> [!warning] 注意事項
> - 僅支持微信平台，對於其他平台的支持有限。
> - 需要用戶手動處理token，增加了使用複雜性。
> - 可能需要針對特定需求進行額外配置。

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

相關概念：[[OAuth認證]] · [[WebSocket通信]] · [[即時消息]] · [[AI聊天機器人]] · [[用戶交互]]

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
