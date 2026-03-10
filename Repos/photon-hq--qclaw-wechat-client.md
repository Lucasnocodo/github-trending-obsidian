---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 282
stars_per_day: 282
forks: 91
open_issues: 4
created: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
  - typescript
  - agent
  - openclaw
  - qclaw
  - wechat
---

# qclaw-wechat-client

**282** stars · **282** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端，讓開發者輕鬆接入 QClaw 的 WeChat API。

## 專案簡介

這個 TypeScript 客戶端讓開發者能夠方便地與 QClaw 的 WeChat Access API 進行交互，簡化了身份驗證和資料請求的流程。它是從 QClaw 的 Electron 應用中反向工程而來，實現了與 Tencent 後端的通訊協議。相比於其他 API 客戶端，這個專案專注於 WeChat 的 OAuth2 認證，並且提供了更簡單的使用方式。對於需要整合 WeChat 功能的開發者來說，這是一個值得一試的工具。

## 重點功能

- 簡化 WeChat API 的接入流程。
- 支持 OAuth2 QR 碼登錄，方便用戶身份驗證。
- 提供完整的 TypeScript 類型定義，提升開發效率。
- 反向工程而來，保證了與 Tencent 後端的兼容性。

## 快速開始

安裝客戶端：`npm install qclaw-wechat-client`,導入並使用客戶端：`import { QClawClient } from 'qclaw-wechat-client';`

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 WeChat 在中國的廣泛使用，開發者對於接入 WeChat API 的需求日益增加。這個專案的反向工程背景讓它在技術上具備了獨特性，吸引了開發者的注意。

## 適合誰使用

**目標受眾**：需要接入 WeChat API 的前端和後端開發者。

> [!example] 使用場景
> - 前端開發者 用它來 整合 WeChat 登錄功能，因為這樣可以提升用戶體驗。
> - 後端開發者 用它來 請求 WeChat API 數據，因為這樣可以簡化數據獲取流程。
> - 產品經理 用它來 監控 WeChat 整合的效果，因為這樣可以更好地評估產品需求。

> [!warning] 注意事項
> 僅支持 WeChat API，對於其他平台的整合能力有限。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | N/A |
| Stars | 282 |
| Forks | 91 |
| Issues | 4 |
| 建立日期 | 2026-03-10 |
| 官方網站 | [Link](https://photon.codes) |

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
> const loginRes = await client.wxLogin({ guid: "machine-id"

## 延伸閱讀

相關概念：#API_整合 · #OAuth2_認證 · #TypeScript_開發

[GitHub](https://github.com/photon-hq/qclaw-wechat-client)
 · [官方網站](https://photon.codes)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
