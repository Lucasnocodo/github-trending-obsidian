---
repo: photon-hq/qclaw-wechat-client
url: https://github.com/photon-hq/qclaw-wechat-client
owner: photon-hq
owner_type: Organization
language: TypeScript
license: N/A
description: "Reverse-engineered TypeScript client for QClaw's WeChat Access API."
homepage: "https://photon.codes"
stars: 289
stars_per_day: 289
forks: 94
open_issues: 4
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
---

# qclaw-wechat-client

**289** stars · **289** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個 TypeScript 客戶端來訪問 QClaw 的 WeChat 接入 API。

> [!abstract] 核心創新
> 這個專案提供了一個專門針對 QClaw 的 WeChat 接入 API 的 TypeScript 客戶端。

## 專案簡介

這個專案讓開發者能夠使用 TypeScript 來與 QClaw 的 WeChat 接入 API 進行互動。它通過逆向工程的方式實現了與 Tencent 後端的通信協議，並提供了一個獨立的模組。與其他 WeChat API 客戶端相比，它專注於 QClaw 的特定需求，提供了更精細的控制和功能。這是一個成熟的解決方案，值得開發者嘗試，尤其是那些需要與 QClaw 整合的應用。

**技術棧**：`TypeScript`

## 重點功能

- 實現了 QClaw 的 WeChat 接入 API 的通信協議。
- 提供 TypeScript 模組，方便與其他 TypeScript 應用整合。
- 支持 QR-code 登入的 OAuth2 認證流程。

## 快速開始

1. 安裝 qclaw-wechat-client
```bash
npm install qclaw-wechat-client
```
2. 導入並初始化 QClawClient
```bash
import { QClawClient } from 'qclaw-wechat-client'; const client = new QClawClient({ env: 'production' });
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者具備逆向工程的專業背景，能夠精確實現 API 的功能；針對 QClaw 的需求，開發者對這類工具的需求日益增加。

## 適合誰使用

**目標受眾**：需要與 QClaw 整合的 TypeScript 開發者。

> [!example] 使用場景
> - [前端開發者] 用它來 [整合 QClaw 的功能]，因為 [能夠輕鬆訪問 WeChat 接入 API]。
> - [後端開發者] 用它來 [建立與 QClaw 的通信]，因為 [提供了簡單的 TypeScript 介面]。
> - [產品經理] 用它來 [快速原型設計]，因為 [能夠迅速測試 QClaw 的功能]。

> [!warning] 注意事項
> 僅支援 QClaw 的特定 API，無法通用於其他 WeChat 應用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 94 |
| Open Issues | 4 |
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
> const loginRes = await client.wxLogin({ guid: "machine-id"

## 延伸閱讀

相關概念：[[API 逆向工程]] · [[TypeScript]] · [[OAuth2 認證]]

[GitHub](https://github.com/photon-hq/qclaw-wechat-client) · [官方網站](https://photon.codes)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，282 stars
