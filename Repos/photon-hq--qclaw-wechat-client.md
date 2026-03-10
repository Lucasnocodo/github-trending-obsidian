---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 298
stars_per_day: 298
forks: 96
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
  - "提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的服務。"
---

# qclaw-wechat-client

**298** stars · **298** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的服務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (298 stars/day)
> **適合** 需要在應用中集成 WeChat 登入的 TypeScript 開發者。
> **一句話重點** 這個專案展示了如何通過反向工程來實現與大型平台的 API 整合，並提供了易於使用的 TypeScript 客戶端。

> [!abstract] 核心創新
> 這個專案提供了一個完整的 TypeScript 客戶端來實現 WeChat OAuth2 登入流程，簡化了開發者的集成工作。

## 專案簡介

這個專案是一個反向工程的 TypeScript 客戶端，專門用於 QClaw 的 WeChat Access API。它的工作流程是：首先透過 QR 碼獲取 CSRF 狀態，然後用 WeChat 的授權碼交換 JWT 和頻道令牌，最後構建 OpenClaw 的配置。技術上，它使用 TypeScript 實現了與 Tencent 的 jprx 協議的通訊，並提供了完整的 API 方法來進行用戶認證和設備管理。與其他類似工具相比，它專注於 WeChat 的 OAuth2 流程，並提供了簡單的 API 來處理用戶登入和配置。實際使用中，這個庫的效能表現良好，但需要注意的是，它依賴於 WeChat 的授權流程，因此無法離線使用。這個專案目前處於穩定階段，適合中小型團隊使用。對於需要集成 WeChat 登入的應用，這是一個不錯的選擇，但如果不需要 WeChat 支持，則可以考慮其他通用的 OAuth2 客戶端。

**技術棧**：`TypeScript` · `Node.js`

## 重點功能

- QR 碼登入 — 使用 `getWxLoginState` 獲取 CSRF 狀態，並用 `buildWxLoginUrl` 生成 QR 碼網址。
- JWT 認證 — 透過 `wxLogin` 方法交換 WeChat 授權碼以獲取 JWT 和頻道令牌。
- 用戶管理 — 使用 `getUserInfo` 獲取用戶資料，並可用 `wxLogout` 來登出。
- 設備管理 — 提供 `queryDeviceByGuid` 和 `disconnectDevice` 方法來管理設備狀態。
- 配置生成 — 使用 `buildPostLoginConfig` 來生成 OpenClaw 配置對象，簡化後續操作。

## 快速開始

1. 安裝套件
```bash
npm install qclaw-wechat-client
```
2. 初始化客戶端
```bash
const client = new QClawClient({ env: 'production' });
```
3. 獲取登入狀態
```bash
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
```
4. 生成 QR 碼網址
```bash
const qrUrl = client.buildWxLoginUrl(state!);
```
5. 用授權碼登入
```bash
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });
```

## 程式碼範例

```typescript
import { QClawClient } from 'qclaw-wechat-client';
const client = new QClawClient({ env: 'production' });
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
const state = QClawClient.unwrap(stateRes)?.state;
const qrUrl = client.buildWxLoginUrl(state!);
console.log('Scan this:', qrUrl);
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由於其獨特的功能和反向工程的背景，吸引了不少開發者的注意。作者 qwerzl 在開源社群中有一定的影響力，並且這個專案滿足了對於 WeChat 登入的需求，特別是在中國市場。隨著越來越多的應用需要集成 WeChat 登入，這個專案的實用性也隨之提升。

## 適合誰使用

**目標受眾**：需要在應用中集成 WeChat 登入的 TypeScript 開發者。

> [!example] 使用場景
> - 前端工程師用它來實現 WeChat 登入功能，因為這樣可以快速集成用戶認證，減少開發時間。
> - 後端工程師用它來管理用戶的會話和設備，因為它提供了簡單的 API 來處理 JWT 和頻道令牌。
> - 產品經理用它來測試 WeChat 登入流程的穩定性，因為它包含了完整的示範和 API 文檔，方便快速上手。

## 架構分析

這是一個單體架構的 TypeScript 庫，主要用於與 QClaw 的 WeChat Access API 進行通訊。用戶輸入 → 獲取登入狀態 → 生成 QR 碼 → 用戶掃描 → 獲取 JWT → 輸出用戶資料。關鍵技術決策是使用 TypeScript 實現 API 的類型安全，並提供了簡單的 API 方法來進行用戶認證和設備管理。專案目錄結構中，`src` 目錄包含了所有的核心功能實現。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 API，快速集成 WeChat 登入功能。
> - 完整的示範和文檔，方便開發者上手。
> - 支持 JWT 認證，安全性高。

> [!danger] 缺點
> - 僅限於 WeChat 登入，無法用於其他平台。
> - 需要依賴 WeChat 的授權流程，無法離線使用。
> - 對於高流量應用，可能需要進一步的性能優化。

> [!warning] 注意事項
> - 僅支援 WeChat OAuth2 登入，無法用於其他認證方式。
> - 需要有效的 WeChat 帳號進行測試，無法離線使用。
> - 目前僅在 TypeScript 環境中測試，其他語言支持有限。
> - 對於高流量應用，可能需要進一步的性能優化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[photon-hq--qclaw\|photon-hq/qclaw]] | 這是 QClaw 的核心庫，主要用於後端服務，而 qclaw-wechat-client 專注於 WeChat 登入的前端實現。 |
| oauth2-client | 這是一個通用的 OAuth2 客戶端，適用於多種認證服務，而 qclaw-wechat-client 專門針對 WeChat 的 API。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 96 |
| Open Issues | 5 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-10 |
| 官方網站 | [Link](https://photon.codes) |
| Repo 大小 | 42 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@qwerzl](https://github.com/qwerzl) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新和維護。
**連結**：[文件](https://photon.codes)

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

相關概念：[[OAuth2]] · [[API 設計]] · [[用戶認證]]

相關專案：[[photon-hq--qclaw|photon-hq/qclaw]]

[GitHub](https://github.com/photon-hq/qclaw-wechat-client) · [官方網站](https://photon.codes)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "photon-hq--qclaw-wechat-client"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "photon-hq--qclaw-wechat-client"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
