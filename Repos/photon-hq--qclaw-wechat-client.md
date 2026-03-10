---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 296
stars_per_day: 296
forks: 95
open_issues: 5
created: 2026-03-10
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
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/agent"
  - "topic/openclaw"
  - "topic/qclaw"
  - "topic/wechat"
aliases:
  - "qclaw-wechat-client"
  - "photon-hq/qclaw-wechat-client"
  - "提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的 API。"
---

# qclaw-wechat-client

**296** stars · **296** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的 API。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (296 stars/day)
> **適合** 需要整合 WeChat 登入功能的前端或後端開發者。
> **一句話重點** 這個專案讓開發者能夠輕鬆地整合 WeChat 登入功能，並且提供了完整的 API 方法來簡化開發流程。

> [!abstract] 核心創新
> 這個專案提供了一個完整的 TypeScript 客戶端，專門針對 QClaw 的 WeChat Access API，簡化了與 Tencent 後端的交互流程。

## 專案簡介

這個專案是一個反向工程的 TypeScript 客戶端，專為 QClaw 的 WeChat Access API 設計。它的工作流程是：首先透過 QR 碼獲取 CSRF token，然後用這個 token 進行 WeChat 登入，接著獲取 session 並建立 OpenClaw 配置。技術上，它使用了 TypeScript 和 jprx 協議來與 Tencent 的後端進行通訊。與其他類似工具相比，這個專案專注於 WeChat 的 OAuth2 流程，並且提供了完整的 API 方法來處理用戶認證和設備管理。實際使用中，這個客戶端能夠快速處理登入流程，但需要注意的是，它依賴於 WeChat 的 OAuth2 機制，這可能會限制某些用戶的使用。這個專案目前處於 beta 階段，適合需要與 QClaw 進行整合的開發者使用。建議在需要快速接入 WeChat 認證的情況下使用，但如果需要更廣泛的 API 支持，則可能需要考慮其他選擇。

**技術棧**：`TypeScript`

## 重點功能

- QR 碼登入 — 使用 `getWxLoginState` 獲取 CSRF token，並用 `buildWxLoginUrl` 生成 QR 碼網址。
- 用戶認證 — 透過 `wxLogin` 方法交換 WeChat 認證碼以獲取 JWT 和 channel token。
- 設備管理 — 提供 `queryDeviceByGuid` 和 `disconnectDevice` 方法來管理設備連接。
- API 密鑰生成 — 使用 `createApiKey` 方法來生成 QClaw 模型提供者的 API 密鑰。
- 即時更新 — 支持 `checkUpdate` 方法來檢查應用更新。

## 快速開始

1. 安裝 qclaw-wechat-client
```bash
npm install qclaw-wechat-client
```
2. 初始化 QClawClient
```bash
const client = new QClawClient({ env: 'production' });
```
3. 獲取登入狀態
```bash
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
```

## 程式碼範例

```typescript
const client = new QClawClient({ env: 'production' });
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
const qrUrl = client.buildWxLoginUrl(state!);
console.log('Scan this:', qrUrl);
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 qwerzl 對 QClaw 的 API 有深入的了解，並且反向工程的過程讓這個工具能夠直接解決開發者的需求。隨著 WeChat 在中國的普及，對於這類工具的需求也隨之上升。這個專案的推出正好切中這個需求，並且提供了一個簡單易用的解決方案。

## 適合誰使用

**目標受眾**：需要整合 WeChat 登入功能的前端或後端開發者。

> [!example] 使用場景
> - 後端工程師用它來整合 WeChat 登入功能到自己的應用中，因為這樣可以快速獲得用戶的授權和信息。
> - 全端開發者用它來測試 QClaw 的 API，因為它提供了完整的 API 方法和範例，讓測試變得簡單。
> - 產品經理用它來驗證 WeChat 登入流程的可行性，因為它能夠快速實現並測試整個流程。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速集成 WeChat 登入功能。
> - 提供完整的 API 方法，方便開發者使用。
> - 支持即時更新和設備管理功能。

> [!danger] 缺點
> - 需要 WeChat 帳號，對於某些用戶來說可能不方便。
> - 僅支援 TypeScript，對於其他語言的開發者不友好。
> - 依賴於 Tencent 的後端服務，若服務中斷將無法使用。

> [!warning] 注意事項
> - 需要 WeChat 帳號進行 OAuth2 認證。
> - 僅支援 TypeScript，對於其他語言的支持有限。
> - 依賴於 Tencent 的後端服務，若服務中斷，將無法使用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 95 |
| Open Issues | 5 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-10 |
| 官方網站 | [Link](https://photon.codes) |
| Repo 大小 | 42 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@qwerzl](https://github.com/qwerzl) | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # qclaw-wechat-client
> 
> [中文文档](./README.zh-CN.md)
> 
> Reverse-engineered TypeScript client for QClaw's WeChat Access API.
> 
> QClaw (管家 OpenClaw) is a Tencent Electron desktop app that wraps an OpenClaw AI Gateway service. It authenticates exclusively through WeChat OAuth2 QR-code login and communicates with Tencent backend servers via a jprx gateway protocol. This library implements that protocol as a standalone TypeScript module.
> 
> ## Origin
> 
> Extracted from `QClaw.app` -> `Contents/Resources/app.asar` (unencrypted). The API service class (`tS` / `openclawApiService`) was found in the bundled renderer at `out/renderer/assets/platform-QEsQ5tXh.js`.
> 
> ## Install
> 
> ```bash
> npm install qclaw-wechat-client
> # or
> pnpm add qclaw-wechat-client
> ```
> 
> ## Development
> 
> ```bash
> pnpm install      # install dependencies
> pnpm build        # bundle with tsdown
> pnpm typecheck    # type-check only
> ```
> 
> ## Quick start
> 
> ```typescript
> import { QClawClient } from "qclaw-wechat-client";
> import type { WxLoginStateData, WxLoginData } from "qclaw-wechat-client";
> 
> const client = new QClawClient({ env: "production" });
> 
> // Step 1 - get login state (CSRF token)
> const stateRes = await client.getWxLoginState({ guid: "machine-id" });
> const state = QClawClient.unwrap(stateRes)?.state;
> 
> // Step 2 - show QR code to user
> const qrUrl = client.buildWxLoginUrl(state!);
> console.log("Scan this:", qrUrl);
> 
> // Step 3 - exchange auth code (from WeChat redirect) for session
> const loginRes = await client.wxLogin({ guid: "machine-id", code: authCode, state: state! });
> 
> // Step 4 - build OpenClaw config patch
> const channelToken = QClawClient.unwrap(loginRes)?.openclaw_channel_token;
> const config = await client.buildPostLoginConfig(channelToken!);
> // -> { channels: { "wechat-access": { token } }, models: { providers: { qclaw: { apiKey } } } }
> ```
> 
> ## Demo
> 
> The included example walks through the full WeChat login flow with an echo bot:
> 
> ```bash
> pnpm demo          # interactive full-flow demo (login + AGP echo bot)
> ```
> 
> ## API
> 
> ### `new QClawClient(options?)`
> 
> | Option | Type | Default | Description |
> |---|---|---|---|
> | `env` | `"production" \| "test"` | `"production"` | Target environment |
> | `jwtToken` | `string` | -- | Restore a JWT from a previous session |
> | `userInfo` | `UserInfo` | -- | Restore user info from a previous session |
> | `webVersion` | `string` | `"1.4.0"` | Version string sent in every request body |
> 
> ### Properties
> 
> | Property | Type | Description |
> |---|---|---|
> | `client.envUrls` | `EnvUrls` | Current environment URLs |
> | `client.wxLoginConfig` | `WxLoginConfig` | WeChat OAuth appid & redirect |
> | `client.currentUser` | `UserInfo \| null` | Logged-in user (auto-set after `wxLogin`) |
> | `client.token` | `string \| null` | Current JWT (auto-renewed) |
> 
> ### Methods
> 
> #### Authentication
> 
> | Method | Endpoint | Description |
> |---|---|---|
> | `getWxLoginState({ guid })` | `data/4050/forward` | Get CSRF state for QR login |
> | `wxLogin({ guid, code, state })` | `data/4026/forward` | Exchange WeChat auth code for JWT + channel token |
> | `getUserInfo({ guid })` | `data/4027/forward` | Fetch user profile |
> | `wxLogout({ guid })` | `data/4028/forward` | Invalidate session |
> | `buildWxLoginUrl(state)` | -- | Build the WeChat OAuth QR-code URL |
> 
> #### Keys & tokens
> 
> | Method | Endpoint | Returns | Description |
> |---|---|---|---|
> | `createApiKey()` | `data/4055/forward` | `ApiResponse` | Create API key for qclaw model provider |
> | `refreshChannelToken()` | `data/4058/forward` | `string \| null` | Refresh the wechat-access channel token (returns token string directly, not wrapped in `ApiResponse`) |
> 
> #### Invite codes
> 
> | Method | Endpoint | Description |
> |---|---|---|
> | `checkInviteCode({ guid })` | `data/4056/forward` | Check invite code status |
> | `submitInviteCode({ guid, invite_code })` | `data/4057/forward` | Submit an invite code |
> 
> #### Device management
> 
> | Method | Endpoint | Description |
> |---|---|---|
> | `queryDeviceByGuid(params)` | `data/4019/forward` | Query device status

## 延伸閱讀

相關概念：[[OAuth2]] · [[API 設計]] · [[微服務]]

[GitHub](https://github.com/photon-hq/qclaw-wechat-client) · [官方網站](https://photon.codes)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "photon-hq--qclaw-wechat-client"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
