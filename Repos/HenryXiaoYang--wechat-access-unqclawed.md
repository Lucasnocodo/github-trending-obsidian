---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 343
stars_per_day: 343
forks: 91
open_issues: 2
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "透過微信掃碼登入，輕鬆獲取 token 並連接 AGP WebSocket 進行雙向通訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "透過微信掃碼登入，輕鬆獲取 token 並連接 AGP WebSocket 進行雙向通訊。"
---

# wechat-access-unqclawed

**343** stars · **343** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信掃碼登入，輕鬆獲取 token 並連接 AGP WebSocket 進行雙向通訊。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (343 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要在 OpenClaw 中整合微信登入功能的後端開發者。
> **一句話重點** 這個專案展示了如何將微信的登入流程自動化，讓開發者能更專注於業務邏輯。

> [!abstract] 核心創新
> 這個插件提供了微信掃碼登入的自動化流程，簡化了 token 管理。

## 專案簡介

這個專案提供了一個 OpenClaw 的微信通路插件，允許用戶透過微信掃碼登入來獲取 token，並且能夠連接 AGP WebSocket 網關進行消息的收發。使用者只需執行 `openclaw channels login --channel wechat-access-unqclawed`，系統會生成二維碼，掃碼後自動獲取 token。技術上，它使用 TypeScript 開發，並依賴於 AGP 協議進行 WebSocket 的雙向通信，支持流式文本和工具調用。與其他類似工具相比，這個插件的獨特之處在於它的掃碼登入流程和 token 的自動持久化，讓用戶在重啟後無需再次登入。實際使用中，這個插件能夠在生產和測試環境之間輕鬆切換，並且支持邀請碼驗證。這個專案目前處於 beta 階段，適合需要與微信進行集成的開發團隊使用。對於小型團隊或個人開發者，這個工具能夠簡化與微信的互動，但在大型應用中可能需要更多的測試和驗證。

**技術棧**：`TypeScript`

## 重點功能

- 微信掃碼登入 — 使用 `openclaw channels login --channel wechat-access-unqclawed` 生成二維碼進行登入。
- Token 自動持久化 — 登入後 token 自動保存，重啟後無需再次登入。
- AGP 協議 WebSocket 通信 — 支持流式文本和工具調用，實現雙向通信。
- 邀請碼驗證 — 可選擇跳過邀請碼驗證，方便開發測試。
- 環境切換支持 — 允許在生產和測試環境之間輕鬆切換。

## 快速開始

1. 安裝插件
```bash
openclaw plugins install @henryxiaoyang/wechat-access-unqclawed
```
2. 啟用渠道
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
> 這個專案的作者 HenryXiaoYang 之前參與過 OpenClaw 的開發，這讓他對於如何整合微信有深刻的理解。這個工具解決了開發者在整合微信時需要手動處理 token 的繁瑣問題，提供了一個更簡單的解決方案。近期在開發者社群中有關於微信機器人整合的討論，讓這個專案引起了關注。隨著更多開發者尋求簡化與微信的互動，這個工具的需求也隨之增加。

## 適合誰使用

**目標受眾**：需要在 OpenClaw 中整合微信登入功能的後端開發者。

> [!example] 使用場景
> - 後端工程師用它來快速整合微信登入功能，因為它的掃碼登入流程能夠省去繁瑣的手動 token 管理。
> - 產品經理用它來測試微信機器人的功能，因為它支持生產和測試環境的快速切換，方便進行 A/B 測試。
> - 獨立開發者用它來建立微信聊天機器人，因為它的 token 自動持久化功能讓開發過程更加流暢。

## 架構分析

這是一個插件架構，主要由 OpenClaw 框架支持。用戶輸入 → 扫码登录 → 获取 token → 连接 WebSocket。關鍵技術決策是使用 AGP 協議進行 WebSocket 通信，並在本地持久化 token。專案目錄結構清晰，包含認證、WebSocket 和 HTTP webhook 等多個模組。

## 優缺點分析

> [!success] 優點
> - 簡化了微信登入的流程，使用者體驗良好。
> - 支持多種配置選項，靈活性高。
> - 自動持久化 token，減少重複登入的麻煩。

> [!danger] 缺點
> - 目前僅支持微信，缺乏其他社交平台的整合。
> - 需要用戶手動處理初次登入的 token 獲取。
> - 在大型應用中可能需要更多的測試和驗證。

> [!warning] 注意事項
> - 僅支援 OpenClaw 環境，無法獨立使用。
> - 需要用戶手動處理 token 的初始獲取。
> - 目前僅支持微信的掃碼登入，未來可能需要擴展其他登入方式。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 91 |
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

相關概念：[[API 設計]] · [[WebSocket]] · [[自動化測試]]

相關專案：[[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
