---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 330
stars_per_day: 330
forks: 86
open_issues: 2
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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

**330** stars · **330** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信OAuth實現OpenClaw的通道連接。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (330 stars/day)
> **適合** 需要將OpenClaw與微信整合的開發者。
> **一句話重點** 這個專案展示了如何通過簡單的配置將OpenClaw與微信整合，提升用戶互動的便利性。

> [!abstract] 核心創新
> 這個插件簡化了OpenClaw與微信的整合過程，提升了用戶體驗。

## 專案簡介

wechat-access-unqclawed 是一個專為OpenClaw設計的微信通道插件，通過微信OAuth實現用戶登錄和消息收發。使用者可以透過掃碼登錄獲取token，並利用AGP協議進行雙向通信。這個插件的獨特之處在於其簡化的登錄流程和自動持久化token的功能，讓用戶在重啟後無需重新登錄。與其他通道插件相比，這個插件提供了更方便的微信集成方式，適合需要將OpenClaw與微信連接的開發者。這個專案目前處於穩定階段，值得立即使用。對於不需要微信集成的項目，則可能不需要這個插件。

**技術棧**：`TypeScript`

## 重點功能

- 微信掃碼登錄 — 提供簡單的掃碼登錄流程，方便用戶使用。
- Token自動持久化 — 登錄後token自動保存，重啟後無需重新登錄。
- AGP協議支持 — 支持雙向通信，實現流式文本和工具調用。
- 環境切換支持 — 可以方便地在生產和測試環境之間切換。
- 邀請碼驗證 — 可選的邀請碼驗證功能，提升安全性。

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

## 程式碼範例

```bash
# 啟用微信通道
openclaw config set channels.wechat-access-unqclawed.enabled true
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由多位貢獻者共同開發，背景涵蓋微信和開源技術，切中將OpenClaw與微信連接的需求。隨著微信在中國的廣泛使用，開發者對於如何將其與AI助手整合的需求日益增加。

## 適合誰使用

**目標受眾**：需要將OpenClaw與微信整合的開發者。

> [!example] 使用場景
> - 開發者用它來將OpenClaw與微信連接，因為這樣可以方便用戶通過微信進行交互，提升用戶體驗。
> - 企業用戶用它來實現微信客服功能，因為這樣能夠利用OpenClaw的AI能力自動回應用戶問題。
> - 個人開發者用它來創建微信機器人，因為這樣可以快速搭建一個智能助手，無需複雜的後端開發。

## 架構分析

該專案採用插件架構，使用者透過OpenClaw與微信通道進行互動。用戶輸入 → 插件處理 → 返回微信消息。核心技術決策在於使用OAuth進行登錄，並支持AGP協議進行雙向通信。專案目錄結構包含auth、websocket等模組，負責不同的功能。

## 優缺點分析

> [!success] 優點
> - 簡化的登錄流程，提升用戶體驗。
> - 自動持久化token，無需重複登錄。
> - 支持雙向通信，方便用戶互動。

> [!danger] 缺點
> - 僅支持微信登錄，對於其他平台無法使用。
> - 需要一定的配置來適應特定需求。
> - 依賴於OpenClaw框架，無法獨立使用。

> [!warning] 注意事項
> - 需要OpenClaw框架運行。
> - 僅支持微信登錄，對於其他登錄方式不支持。
> - 可能需要額外的配置來適應特定的業務需求。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 86 |
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

## 社群與生態

**社群活躍度**：社群活躍，持續有貢獻者更新功能和修復問題。

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

相關概念：[[即時通訊]] · [[API 設計]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
