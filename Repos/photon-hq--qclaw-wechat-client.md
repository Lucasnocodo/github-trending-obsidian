---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 301
stars_per_day: 301
forks: 98
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
use_case: "提供一個 TypeScript 客戶端，以便於使用 QClaw 的 WeChat Access API 進行身份驗證和數據交互。"
priority: medium
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
  - "提供一個 TypeScript 客戶端，以便於使用 QClaw 的 WeChat Access API 進行身份驗證和數"
---

# qclaw-wechat-client

**301** stars · **301** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端，以便於使用 QClaw 的 WeChat Access API 進行身份驗證和數據交互。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (301 stars/day)
> **適合** 需要在應用中整合 WeChat 登錄功能的 TypeScript 開發者。
> **一句話重點** 這個專案讓開發者能夠輕鬆整合 WeChat 登錄功能，省去繁瑣的身份驗證流程。

> [!abstract] 核心創新
> 這個專案提供了一個完整的 TypeScript 客戶端來實現 QClaw 的 WeChat Access API，並支持 QR 碼登錄流程。

## 專案簡介

這個專案是一個反向工程的 TypeScript 客戶端，專門用來與 QClaw 的 WeChat Access API 進行交互。它的核心流程包括：首先透過 QR 碼獲取用戶的登錄狀態，然後用戶掃描 QR 碼進行身份驗證，接著交換授權碼以獲得會話，最後構建 OpenClaw 配置。技術上，這個庫實現了與 Tencent 後端伺服器的 jprx 協議通訊，並提供了多種 API 方法來處理用戶登錄、設備管理和配置生成等功能。與其他類似工具相比，它專注於 WeChat OAuth2 的 QR 碼登錄流程，並且提供了完整的 AGP WebSocket 客戶端實現。使用效果上，這個庫能夠快速完成身份驗證並獲取用戶資料，但需要注意的是，它依賴於 WeChat 的 OAuth2 流程，可能會受到 WeChat 政策的影響。這個專案目前處於穩定階段，適合中小型團隊使用，尤其是需要整合 WeChat 登錄的應用。建議在需要與 WeChat 進行深度整合的情況下使用，但如果只是簡單的 API 調用，則可能不需要這麼複雜的解決方案。

**技術棧**：`TypeScript` · `Node.js`

## 重點功能

- QR 碼登錄 — 使用 `getWxLoginState` 獲取 CSRF 狀態，並用 `buildWxLoginUrl` 生成 QR 碼登錄網址。
- 會話管理 — 使用 `wxLogin` 方法交換授權碼以獲取 JWT 和通道令牌。
- 用戶資料獲取 — 使用 `getUserInfo` 獲取當前用戶的個人資料。
- 設備管理 — 提供 `queryDeviceByGuid` 和 `disconnectDevice` 方法來管理設備狀態。
- 配置生成 — 使用 `buildPostLoginConfig` 生成 OpenClaw 配置對象，方便後續 API 調用。

## 快速開始

1. 安裝 qclaw-wechat-client
```bash
npm install qclaw-wechat-client
```
2. 初始化 QClawClient
```bash
const client = new QClawClient({ env: 'production' });
```
3. 獲取登錄狀態
```bash
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
```
4. 生成 QR 碼網址
```bash
const qrUrl = client.buildWxLoginUrl(state!);
```
5. 登錄並獲取配置
```bash
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });
```

## 程式碼範例

```typescript
import { QClawClient } from 'qclaw-wechat-client';
const client = new QClawClient({ env: 'production' });
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
const qrUrl = client.buildWxLoginUrl(stateRes.state);
console.log('Scan this:', qrUrl);
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: stateRes.state });
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 qwerzl 具備豐富的開發經驗，專注於開源工具的開發，滿足了開發者對於 WeChat API 的需求。隨著 WeChat 在中國的普及，越來越多的開發者需要整合這個平台的功能，這使得這個專案在近期受到關注。

## 適合誰使用

**目標受眾**：需要在應用中整合 WeChat 登錄功能的 TypeScript 開發者。

> [!example] 使用場景
> - 前端工程師用它來實現 WeChat 登錄功能，因為它提供了完整的 QR 碼登錄流程，省去自行實現的時間和精力。
> - 後端開發者用它來管理用戶會話和設備狀態，因為它提供了多種 API 方法來輕鬆獲取用戶資料和管理設備連接。
> - 產品經理用它來快速搭建一個與 WeChat 整合的原型，因為這個庫的使用簡單且文檔清晰，能夠快速上手。

## 架構分析

這是一個單體架構的 TypeScript 客戶端，主要用於與 QClaw 的 WeChat Access API 進行交互。用戶輸入 → 獲取登錄狀態 → 生成 QR 碼 → 用戶掃描 → 獲取會話。關鍵技術決策包括使用 TypeScript 來確保類型安全，並實現了 jprx 協議的通訊。專案目錄結構中，主要檔案包括 `src/index.ts` 和 `src/api.ts`，負責主要的 API 實現。

## 技術深入分析

> [!note]- 展開深入分析
> 這個庫的核心在於實現了與 QClaw 的 WeChat Access API 的通訊，特別是 QR 碼登錄的流程。它使用 TypeScript 來確保類型安全，並且提供了多種 API 方法來處理用戶的登錄、資料獲取和設備管理。效能方面，這個庫的設計使得 API 調用快速且穩定，能夠滿足一般應用的需求。與其他類似工具相比，它的專注點在於 WeChat 的 OAuth2 流程，這使得它在這一領域具有優勢，但也限制了其在其他場景的應用。

## 優缺點分析

> [!success] 優點
> - 簡單易用，提供清晰的 API 接口，方便開發者快速上手。
> - 支持完整的 WeChat 登錄流程，包括 QR 碼生成和會話管理。
> - 良好的文檔和範例，幫助開發者理解使用方法。

> [!danger] 缺點
> - 功能相對專一，僅針對 WeChat 登錄，無法滿足其他需求。
> - 依賴於 WeChat 的 API，若有變更可能會影響使用。
> - 不支持多語言，僅限於 TypeScript 開發者使用。

> [!warning] 注意事項
> - 僅支援 WeChat OAuth2 登錄，無法用於其他身份驗證方式。
> - 需要用戶手動掃描 QR 碼，無法自動化登錄流程。
> - 依賴於 WeChat 的 API，若 WeChat 政策改變可能會影響功能。
> - 目前僅支持 TypeScript，對於其他語言的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[photon-hq--qclaw\|photon-hq/qclaw]] | qclaw 是一個完整的 QClaw API 實現，而 qclaw-wechat-client 專注於 WeChat 登錄和訪問，適合需要 WeChat 整合的場景。 |
| [[wechaty--wechaty\|wechaty/wechaty]] | Wechaty 是一個通用的 WeChat 機器人框架，功能更為廣泛，但不專注於 QClaw 的 API，適合需要多種功能的開發者。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 98 |
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

**社群活躍度**：社群活躍度中等，有定期更新和維護。
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

相關概念：[[API 設計]] · [[OAuth2]] · [[WebSocket]] · [[自動化測試]]

相關專案：[[photon-hq--qclaw|photon-hq/qclaw]] · [[wechaty--wechaty|wechaty/wechaty]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]]

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
