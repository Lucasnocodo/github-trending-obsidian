---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 322
stars_per_day: 322
forks: 83
open_issues: 2
created: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
  - typescript
  - openclaw
  - openclaw_plugin
  - qclaw
  - wechat
  - wechat_bot
---

# wechat-access-unqclawed

**322** stars · **322** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

> [!summary] 一句話摘要
> 透過微信掃碼登入並獲取 token，實現與 AGP WebSocket 的雙向通訊。

## 專案簡介

這個插件讓使用者可以透過微信掃碼登入，並自動獲取 token 以便與 AGP WebSocket 進行消息收發。它使用 TypeScript 開發，並整合了 OpenClaw 框架的功能。與其他類似的微信登入方案相比，它提供了更簡單的配置和自動化的 token 管理，讓使用者無需每次重啟都重新登入。這是一個值得嘗試的工具，特別是對於需要與 AGP 進行即時通訊的開發者。

## 重點功能

- 支持微信掃碼登入，提供終端和瀏覽器的二維碼選項。
- 自動持久化 token，重啟後無需再次登入。
- 實現 AGP 協議的 WebSocket 雙向通信，支持流式文本和工具調用。
- 可配置的邀請碼驗證選項，靈活性高。
- 支持生產和測試環境的切換，便於開發和測試。

## 快速開始

安裝插件: `openclaw plugins install @henryxiaoyang/wechat-access-unqclawed`,啟用渠道: `openclaw config set channels.wechat-access-unqclawed.enabled true`

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在開源社群中有一定的影響力，並且這個工具滿足了開發者對於簡化微信登入流程的需求。近期對於即時通訊的需求增加，促使這個專案受到關注。

## 適合誰使用

**目標受眾**：需要與 AGP WebSocket 進行即時通訊的開發者和測試人員。

> [!example] 使用場景
> - 開發者 用它來 透過微信登入 AGP 系統，因為這樣可以快速獲取 token 並進行消息收發。
> - 測試人員 用它來 測試微信通道的功能，因為它提供了簡單的配置和自動化流程。
> - 系統管理員 用它來 管理 AGP 的 WebSocket 通訊，因為它能夠自動持久化 token，減少重複登入的麻煩。

> [!warning] 注意事項
> 目前僅支持 AGP WebSocket，對於其他通訊協議的支持有限。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | N/A |
| Stars | 322 |
| Forks | 83 |
| Issues | 2 |
| 建立日期 | 2026-03-09 |

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
> | `environment` | 

## 延伸閱讀

相關概念：#WebSocket · #OAuth · #即時通訊

[GitHub](https://github.com/HenryXiaoYang/wechat-access-unqclawed)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
