---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 290
stars_per_day: 290
forks: 95
open_issues: 5
created: 2026-03-10
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - typescript
  - agent
  - openclaw
  - qclaw
  - wechat
aliases:
  - "qclaw-wechat-client"
  - "photon-hq/qclaw-wechat-client"
  - "提供一個反向工程的 TypeScript 客戶端，讓開發者能夠使用 QClaw 的 WeChat 接入 API。"
---

# qclaw-wechat-client

**290** stars · **290** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個反向工程的 TypeScript 客戶端，讓開發者能夠使用 QClaw 的 WeChat 接入 API。

> [!abstract] 核心創新
> 這個專案提供了一個針對 QClaw 的 WeChat 接入 API 的完整 TypeScript 客戶端實現。

## 專案簡介

這個專案實現了一個 TypeScript 客戶端，專門用於 QClaw 的 WeChat 接入 API，讓開發者能夠輕鬆進行 WeChat OAuth2 登入。它的核心機制是通過 QR 碼讓用戶進行身份驗證，並與 Tencent 的後端服務進行通訊。專案使用 TypeScript 實現，並從 QClaw 的桌面應用中提取出 API 協議，確保了與原始服務的兼容性。相較於其他 WeChat API 客戶端，這個專案的獨特之處在於它專注於 QClaw 的特定需求，並提供了完整的登入流程示範。使用者可以透過簡單的 API 調用來實現複雜的登入邏輯，然而，這個專案仍然依賴於 WeChat 的 OAuth2 流程，限制了其在其他場景的應用。總體來看，這是一個針對特定需求的專案，適合需要與 QClaw 整合的開發者使用。

**技術棧**：`TypeScript`

## 重點功能

- 實現 WeChat OAuth2 QR 碼登入流程。
- 提供簡單的 API 調用來獲取登入狀態。
- 支持多環境配置（生產和測試）。
- 內建完整的登入流程示範。
- 支持用戶信息恢復和 JWT 恢復。

## 快速開始

1. 安裝 qclaw-wechat-client
```bash
npm install qclaw-wechat-client
```
2. 引入 QClawClient 並初始化
```bash
const client = new QClawClient({ env: 'production' });
```
3. 獲取登入狀態
```bash
const stateRes = await client.getWxLoginState({ guid: 'machine-id' });
```
4. 顯示 QR 碼給用戶掃描
```bash
const qrUrl = client.buildWxLoginUrl(state!); console.log('Scan this:', qrUrl);
```
5. 交換授權碼以獲取會話
```bash
const loginRes = await client.wxLogin({ guid: 'machine-id', code: authCode, state: state! });
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 qwerzl 在開源社群中活躍，專案切中開發者對於 WeChat 接入的需求，尤其是在 QClaw 的使用場景中。隨著越來越多的應用需要與 WeChat 整合，這個專案的實用性使其受到關注。

## 適合誰使用

**目標受眾**：需要與 QClaw 整合的開發者和企業。

> [!example] 使用場景
> - 開發者 用它來 整合 WeChat 登入功能，因為 這樣可以簡化用戶身份驗證流程。
> - 企業 用它來 連接 QClaw 服務，因為 這樣可以利用 WeChat 的廣泛用戶基礎。
> - 技術團隊 用它來 測試和調試 WeChat API，因為 這個客戶端提供了完整的 API 交互示範。

## 架構分析

專案採用前後端分離的架構，前端使用 TypeScript 實現 API 客戶端，與 QClaw 的後端服務進行通訊。資料流是 用戶掃描 QR 碼 → 客戶端獲取登入狀態 → 用戶授權 → 客戶端交換授權碼 → 獲取會話。

## 優缺點分析

> [!success] 優點
> - 簡化 WeChat 登入流程。
> - 提供完整的 API 使用示範。
> - 支持多環境配置。

> [!danger] 缺點
> - 僅限於 QClaw 的特定需求。
> - 依賴於 WeChat 的 OAuth2 流程。
> - 不支援其他登入方式。

> [!warning] 注意事項
> - 僅支援 WeChat OAuth2 流程。
> - 需要 QClaw 的後端服務支持。
> - 可能無法在非 QClaw 環境中使用。

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
> | `client.envUrls` | `EnvUrls` | C

## 延伸閱讀

相關概念：[[OAuth2 認證]] · [[API 整合]] · [[TypeScript 開發]]

[GitHub](https://github.com/photon-hq/qclaw-wechat-client) · [官方網站](https://photon.codes)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
