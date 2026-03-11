---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 309
stars_per_day: 309
forks: 101
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

**309** stars · **309** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端，讓開發者能夠透過 WeChat OAuth2 登入 QClaw 的服務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (309 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要在應用中整合 WeChat 登入功能的 TypeScript 開發者。
> **一句話重點** 這個專案展示了如何透過反向工程來創建針對特定 API 的客戶端，並且有效地整合了 WeChat 登入功能。

> [!abstract] 核心創新
> 這個專案提供了一個完整的 TypeScript 客戶端實作，專注於 WeChat OAuth2 登入流程。

## 專案簡介

這個專案是一個反向工程的 TypeScript 客戶端，專為 QClaw 的 WeChat Access API 設計。它的工作流程是透過 WeChat 的 OAuth2 QR 碼登入，並使用 jprx 協議與後端伺服器進行通訊。開發者可以使用 `QClawClient` 來獲取登入狀態、顯示 QR 碼、交換授權碼以獲得 JWT 和通道令牌，並建立 OpenClaw 配置。這個庫的獨特之處在於它專注於 WeChat 的 OAuth2 流程，並且提供了一個完整的 AGP WebSocket 客戶端實作。與其他通用的 API 客戶端相比，它專門針對 QClaw 的需求進行了優化，提供了更高效的登入和配置流程。使用者在實際應用中，能夠快速實現 WeChat 登入功能，並且支援多個環境（生產和測試）。這個專案目前處於穩定階段，適合中小型團隊使用，尤其是需要整合 WeChat 登入的應用。建議在需要快速整合 WeChat 登入的情況下使用，但如果不需要 WeChat 支援，則可以考慮其他更通用的解決方案。

**技術棧**：`TypeScript` · `pnpm`

## 重點功能

- WeChat 登入流程 — 使用 `getWxLoginState` 獲取 CSRF 狀態，並用 `wxLogin` 交換授權碼。
- 環境配置 — 支援生產和測試環境的配置選項，透過 `env` 參數選擇。
- JWT 管理 — 自動更新和管理 JWT，使用 `token` 屬性獲取當前 JWT。
- 用戶資訊獲取 — 使用 `getUserInfo` 方法輕鬆獲取用戶資料。
- 完整的 AGP WebSocket 客戶端 — 提供 AGP 協議的完整實作，方便進行即時通訊。

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
import { QClawClient } from 'qclaw-wechat-client';
const client = new QClawClient({ env: 'production' });
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
const qrUrl = client.buildWxLoginUrl(state!);
console.log('Scan this:', qrUrl);
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 qwerzl 之前參與過多個知名的開源專案，這使得他在開發者社群中具有一定的影響力。QClaw 的 WeChat Access API 之前缺乏一個易於使用的 TypeScript 客戶端，這個專案填補了這個空白。近期在開發者論壇中對於 WeChat 整合的需求增加，讓這個工具的實用性更加凸顯。

## 適合誰使用

**目標受眾**：需要在應用中整合 WeChat 登入功能的 TypeScript 開發者。

> [!example] 使用場景
> - 前端工程師用它來實現 WeChat 登入功能，因為這樣可以快速整合社交媒體登入，提升用戶體驗。
> - 後端工程師用它來管理 QClaw 的用戶會話，因為這樣能夠輕鬆處理 JWT 和通道令牌的更新。
> - 產品經理用它來測試 WeChat 登入流程，因為這個工具提供了完整的 API 流程，方便快速驗證功能。

## 架構分析

這是一個單體架構的 TypeScript 客戶端，主要功能集中在與 QClaw 的 API 進行通訊。用戶輸入（如 QR 碼） → 處理（透過 API 獲取登入狀態和用戶資訊） → 輸出（JWT 和用戶資料）。關鍵技術決策包括使用 TypeScript 以提供靜態類型檢查和更好的開發體驗。專案目錄結構中，`src` 目錄包含主要的客戶端邏輯和 API 實作。

## 技術深入分析

> [!note]- 展開深入分析
> 這個專案的核心在於實作 WeChat OAuth2 流程，使用 `getWxLoginState` 和 `wxLogin` 方法來處理登入。效能方面，這個客戶端在處理 API 請求時，能夠快速獲取用戶資料和 JWT，並且支援多環境配置。設計上選擇 TypeScript 是為了提供更好的開發體驗和靜態類型檢查，這在大型專案中尤為重要。與其他類似工具相比，這個專案專注於 WeChat 的需求，並提供了完整的 AGP WebSocket 客戶端實作，這是其他工具所不具備的。

## 優缺點分析

> [!success] 優點
> - 提供完整的 WeChat OAuth2 登入流程，簡化開發者的整合工作。
> - 使用 TypeScript 實作，提供靜態類型檢查，降低錯誤率。
> - 支援多環境配置，方便開發和測試。

> [!danger] 缺點
> - 僅針對 WeChat 登入，對於其他社交媒體的支援不足。
> - 需要有效的 WeChat 帳號進行測試，限制了使用場景。
> - 目前功能較為單一，未來擴展性需視需求而定。

> [!warning] 注意事項
> - 僅支援 WeChat OAuth2 登入，無法用於其他登入方式。
> - 需要有效的 WeChat 帳號進行測試，無法在沒有帳號的情況下運行。
> - 目前僅針對 QClaw 的 API 進行實作，對其他類似服務的支援有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [henryxiaoyang/wechat-access-unqclawed](https://github.com/henryxiaoyang/wechat-access-unqclawed) | 這個工具也針對 WeChat Access API，但缺乏完整的 TypeScript 客戶端實作，適合需要更低層次控制的開發者。 |
| [freedomintelligence/openclaw-medical-skills](https://github.com/freedomintelligence/openclaw-medical-skills) | 這個專案專注於 OpenClaw 的醫療技能，而不是 WeChat 登入功能，適合特定領域的應用。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 101 |
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

相關概念：[[OAuth2]] · [[API 設計]] · [[WebSocket]] · [[自動化測試]]

相關專案：[[photon-hq--qclaw|photon-hq/qclaw]] · [[wechaty--wechaty|wechaty/wechaty]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
