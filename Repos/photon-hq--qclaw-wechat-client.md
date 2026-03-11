---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 326
stars_per_day: 326
forks: 110
open_issues: 5
created: 2026-03-10
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
use_case: "提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的服務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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

**326** stars · **326** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的服務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (326 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要整合 WeChat 登入功能的前端和後端開發者。
> **一句話重點** 這個專案展示了如何有效整合 WeChat 登入和即時通訊功能，讓開發者能夠快速構建社交應用。

> [!abstract] 核心創新
> 這個專案提供了一個完整的 TypeScript 客戶端，專為 QClaw 的 WeChat Access API 設計，簡化了整合流程。

## 專案簡介

這個專案是一個反向工程的 TypeScript 客戶端，專為 QClaw 的 WeChat Access API 設計。使用者輸入 WeChat 登入資訊，透過 QR 碼進行身份驗證，然後獲得一個 JWT 和 channel token，最終能夠與 OpenClaw 服務進行互動。它使用 jprx 協議與 Tencent 後端伺服器通訊，並提供了一個完整的 API，包括獲取用戶資訊、登出、創建 API 金鑰等功能。這個庫還實現了 AGP（Agent Gateway Protocol），支持 WebSocket 實時消息交換，讓開發者能夠即時處理用戶消息。與其他類似工具相比，如 HenryXiaoYang/wechat-access-unqclawed，這個專案提供了更全面的 API 支持和更簡單的 TypeScript 整合。它能夠處理大量的即時消息，並且設計上考慮了高效能的實時通訊需求。這個專案目前處於穩定階段，適合中小型團隊使用，特別是需要整合 WeChat 登入的應用。建議在需要快速開發 WeChat 應用時使用，但如果只需要簡單的 API 調用，則可以考慮使用更輕量的替代方案。

**技術棧**：`TypeScript` · `pnpm`

## 重點功能

- QR 登入流程 — 提供完整的 WeChat OAuth2 登入流程，包括獲取 CSRF token 和交換 auth code。
- AGP WebSocket 支持 — 實現即時消息交換，支持 server-push 模式，適合需要即時反應的應用。
- API 金鑰管理 — 提供創建和刷新 API 金鑰的功能，方便管理用戶訪問。
- 用戶資訊獲取 — 透過 API 獲取用戶資料，支持自動更新用戶狀態。
- 環境配置 — 支持多個環境（生產/測試）配置，方便開發和測試。

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
4. 顯示 QR 碼
```bash
const qrUrl = client.buildWxLoginUrl(state!); console.log('Scan this:', qrUrl);
```
5. 交換 auth code
```bash
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });
```

## 程式碼範例

import { QClawClient } from 'qclaw-wechat-client';
const client = new QClawClient({ env: 'production' });
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
const state = QClawClient.unwrap(stateRes)?.state;
const qrUrl = client.buildWxLoginUrl(state!);
console.log('Scan this:', qrUrl);
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 qwerzl 開發，他在開源社群中有一定的知名度。它解決了開發者在整合 WeChat 登入時的複雜性，特別是針對 QClaw 的需求。最近在開發者社群中有討論這個工具的需求，可能促進了它的流行。現在的技術生態中，對於即時通訊和社交媒體的整合需求越來越高，這使得這個工具變得更加實用。

## 適合誰使用

**目標受眾**：需要整合 WeChat 登入功能的前端和後端開發者。

> [!example] 使用場景
> - 前端工程師用它來實現 WeChat 登入功能，因為它簡化了 OAuth2 流程，讓用戶體驗更流暢。
> - 後端開發者用它來整合 QClaw 的 API，因為它提供了完整的 API 文檔和 TypeScript 支持，減少了開發時間。
> - AI 開發者用它來建立即時回應的聊天機器人，因為 AGP 支持 WebSocket 實時消息交換，讓回應更快速。

## 架構分析

這是一個單體架構的 TypeScript 客戶端，主要用於與 QClaw 的 WeChat Access API 進行交互。用戶輸入 WeChat 登入資訊 → 通過 API 獲取 JWT 和 channel token → 與 OpenClaw 服務進行互動。關鍵技術決策包括使用 WebSocket 實現即時消息交換，並提供完整的 API 支持。專案目錄結構中，主要檔案包括 QClawClient 和 AGPClient 的實現。

## 技術深入分析

這個專案的核心技術機制是使用 TypeScript 實現的 API 客戶端，專為 QClaw 的 WeChat Access API 設計。它使用 jprx 協議與 Tencent 後端伺服器進行通訊，並且實現了 AGP 協議以支持 WebSocket 實時消息交換。這使得它能夠處理大量即時消息，並且設計上考慮了高效能的實時通訊需求。選擇 TypeScript 作為開發語言，讓開發者能夠享受靜態類型檢查的優勢，減少錯誤發生的機會。隨著使用者需求的增加，這個專案在未來可能面臨擴展性挑戰，特別是在高併發的情況下，可能需要進一步優化性能和資源管理。

## 優缺點分析

> [!success] 優點
> - 簡化的 WeChat 登入流程，提升用戶體驗。
> - 完整的 API 支持，方便開發者快速上手。
> - 即時消息交換功能，適合需要快速反應的應用。

> [!danger] 缺點
> - 僅支援 TypeScript，對於 JavaScript 開發者不友好。
> - 需要 WeChat 帳號，無法離線使用。
> - AGP WebSocket 依賴穩定網路，可能影響使用體驗。

> [!warning] 注意事項
> - 僅支援 TypeScript，不適用於純 JavaScript 環境。
> - 需要 WeChat 帳號進行登入，無法離線使用。
> - AGP WebSocket 需要穩定的網路連接，否則可能影響即時消息的傳遞。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [henryxiaoyang/wechat-access-unqclawed](https://github.com/henryxiaoyang/wechat-access-unqclawed) | 這個工具提供了類似的 WeChat 登入功能，但缺乏完整的 API 支持和 TypeScript 整合。 |
| [freedomintelligence/openclaw-medical-skills](https://github.com/freedomintelligence/openclaw-medical-skills) | 這個工具專注於醫療領域的技能整合，功能較為專一，適合特定應用場景。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 110 |
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

**社群活躍度**：社群活躍度中等，定期更新和維護。
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

相關概念：[[API 設計]] · [[即時通訊]] · [[OAuth2]]

相關專案：[[photon-hq--qclaw|photon-hq/qclaw]] · [[wechaty--wechaty|wechaty/wechaty]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
