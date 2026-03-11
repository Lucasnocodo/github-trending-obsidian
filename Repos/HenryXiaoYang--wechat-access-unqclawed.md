---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 350
stars_per_day: 350
forks: 93
open_issues: 2
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "插件"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "透過微信掃碼登入獲取 token，實現與 AGP WebSocket 的雙向消息通訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
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
  - "透過微信掃碼登入獲取 token，實現與 AGP WebSocket 的雙向消息通訊。"
---

# wechat-access-unqclawed

**350** stars · **350** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信掃碼登入獲取 token，實現與 AGP WebSocket 的雙向消息通訊。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (350 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人
> **適合** 需要在微信平台上開發機器人並希望簡化登入流程的開發者。
> **一句話重點** 這個專案展示了如何有效整合微信登入功能，並利用 WebSocket 進行即時通訊。

> [!abstract] 核心創新
> 這個專案的創新在於簡化了微信掃碼登入的流程，並實現了 token 的自動持久化。

## 專案簡介

這個專案提供了一個 OpenClaw 的微信通道插件，使用者可以透過微信掃碼登入來獲取 token，並且連接 AGP WebSocket 網關進行消息的收發。具體流程是：使用者在終端執行登入指令，系統會生成一個二維碼，使用者掃碼後獲得一個授權碼，然後將該碼輸入到指定的文件中，完成登入後 token 會自動保存。技術上，這個插件使用 TypeScript 開發，並且依賴於 AGP 協議進行 WebSocket 的雙向通訊，支持流式文本和工具調用。與其他類似工具相比，這個專案的獨特之處在於它的 token 持久化機制，能夠在重啟後自動恢復登入狀態，這樣使用者不需要每次都手動登入。它的設計也考慮了生產和測試環境的切換，讓開發者能夠靈活配置。對於小型團隊或個人開發者來說，這個插件的成熟度已經足夠高，值得立即使用。建議在需要與微信進行交互的場景中使用，但如果不需要 WebSocket 通訊，則可以考慮其他較簡單的解決方案。

**技術棧**：`TypeScript`

## 重點功能

- 微信掃碼登入 — 透過終端生成二維碼，使用者掃碼後獲得授權碼。
- Token 自動持久化 — 登入後 token 會自動保存，重啟後免登入。
- AGP 協議 WebSocket 支持 — 實現流式文本和工具調用的雙向通訊。
- 邀請碼驗證 — 可選擇配置是否跳過邀請碼驗證。
- 環境切換支持 — 可以在生產和測試環境之間靈活切換。

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
這條指令會顯示微信二維碼，掃碼後獲得授權碼並完成登入。

## 為什麼值得關注

> [!tip] 爆紅原因
> HenryXiaoYang 是一位活躍的開發者，過去有多個開源專案，這個工具解決了微信登入的繁瑣流程，讓開發者能夠快速接入。近期在社群中引起討論，特別是在需要與微信進行集成的開發者中。這個工具的出現正好滿足了對於微信機器人開發的需求，特別是在 AGP 協議的背景下。

## 適合誰使用

**目標受眾**：需要在微信平台上開發機器人並希望簡化登入流程的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速集成微信登入功能，因為這樣可以節省手動處理 token 的時間，提升開發效率。
> - 產品經理用它來測試微信機器人的功能，因為它支持生產和測試環境的切換，能夠快速迭代。
> - 獨立開發者用它來構建個人微信機器人，因為它的安裝和配置過程簡單，適合小型專案。

## 架構分析

這是一個插件架構，主要由 OpenClaw 作為基礎。用戶輸入 → 掃碼登入 → 獲取 token → 連接 WebSocket。關鍵技術決策包括使用 AGP 協議進行雙向通訊，並且在設計上考慮了 token 的持久化。專案目錄結構清晰，包含了認證、WebSocket 客戶端和消息處理等模組。

## 技術深入分析

這個專案的核心技術機制在於使用 AGP 協議進行 WebSocket 通訊，這使得消息的雙向傳遞變得高效且即時。它能夠處理大量的即時消息，並且在設計上考慮了 token 的持久化，這樣在重啟後用戶無需重新登入。選擇 TypeScript 作為開發語言，帶來了靜態類型檢查的優勢，降低了潛在的錯誤率。設計上，這個插件的架構清晰，模組化程度高，便於未來的擴展和維護。隨著使用者數量的增加，WebSocket 的連接數量可能會成為瓶頸，這需要在架構上進行優化以應對高並發的需求。安全性方面，需確保 token 的保護，避免未經授權的訪問。整體而言，這個專案在即時通訊和用戶認證方面提供了一個有效的解決方案。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並包含了範例指令。安裝過程相對順暢，沒有明顯的坑。文件中未提供多語言支持，主要以英文為主，但整體上對新手友好。

## 優缺點分析

> [!success] 優點
> - 簡化微信登入流程，提升開發效率。
> - 支持 token 自動持久化，減少重複登入的麻煩。
> - 靈活的環境切換，適合開發和測試。

> [!danger] 缺點
> - 僅限於 OpenClaw 環境，無法獨立使用。
> - 需要穩定的網路連接以維持 WebSocket 通訊。
> - 對於不熟悉 AGP 協議的開發者可能需要額外學習成本。

> [!warning] 注意事項
> - 僅支援 OpenClaw 環境，需依賴其配置。
> - 需要微信帳號進行掃碼登入，無法使用其他登入方式。
> - WebSocket 連接需要穩定的網路環境，否則可能影響消息收發。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這個工具專注於 Telegram 的消息處理，與本專案的微信通道功能不同，適用於不同的即時通訊平台。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這個專案是針對醫療領域的 OpenClaw 擴展，功能上更專注於特定應用場景，而本專案則是通用的微信通道插件。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，與本專案的即時通訊功能不同。 | 如果需要文件同步而非即時通訊功能，則應選擇它。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 針對 Telegram 的 WebSocket 代理，與本專案的微信通道功能不同。 | 在需要 Telegram 整合時，這個工具會更合適。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 93 |
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

**社群活躍度**：社群活躍度中等，持續有更新和維護。

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

相關概念：[[AGP]] · [[WebSocket]] · [[OAuth]] · [[即時通訊]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
