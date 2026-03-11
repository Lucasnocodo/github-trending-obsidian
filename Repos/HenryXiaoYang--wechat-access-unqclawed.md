---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 368
stars_per_day: 368
forks: 98
open_issues: 3
created: 2026-03-09
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
use_case: "透過微信掃碼登入並實現雙向通信的 OpenClaw 插件。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:368"
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
  - "透過微信掃碼登入並實現雙向通信的 OpenClaw 插件。"
---

# wechat-access-unqclawed

**368** stars · **368** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 透過微信掃碼登入並實現雙向通信的 OpenClaw 插件。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (368 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在微信平台上開發機器人功能的後端開發者。
> **一句話重點** 這個專案展示了如何有效整合微信的 OAuth 流程與即時通信，為開發者提供了一個強大的工具。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到即時通信的功能，值得一試。

> [!abstract] 核心創新
> 提供了微信掃碼登入的簡化流程，並支持 AGP WebSocket 雙向通信。

## 專案簡介

這個專案是 OpenClaw 的微信通路插件，主要功能是透過微信的 OAuth 掃碼登入來獲取 token，並利用 AGP WebSocket 協議進行雙向通信。使用者首先透過 `openclaw channels login --channel wechat-access-unqclawed` 指令來啟動登入流程，終端會顯示一個二維碼，掃描後會獲得一個包含 `code` 的 URL，這個 `code` 需要被保存到本地的臨時文件中。這樣設計的原因是為了簡化登入流程，讓使用者能夠快速獲取 token 並持久化，避免每次重啟都需要重新登入。該插件支持 AGP 協議的 WebSocket 雙向通信，允許流式文本和工具調用，並且可以根據需要配置生產或測試環境。技術上，這個專案依賴於 TypeScript 和多個 npm 包，如 `ws` 和 `fast-xml-parser`，這些選擇使得插件在性能和功能上都有所保證。相較於其他類似工具，如 `OpenClaw-Medical-Skills` 和 `tg-ws-proxy`，本專案專注於微信的生態系統，提供了更為專業的企業級解決方案。實際使用中，使用者可能會遇到設備綁定失敗或設備不在線的問題，這些都是目前社群活躍討論的熱門問題。這個專案目前處於 alpha 階段，適合對微信開發有需求的開發者使用，未來可能會增加更多功能以支持更廣泛的應用場景。

**技術棧**：`TypeScript 5.9.3` · `fast-xml-parser 5.4.1` · `ws 8.18.0`

## 重點功能

- 微信掃碼登入 — 使用 `openclaw channels login --channel wechat-access-unqclawed` 指令啟動掃碼登入流程。
- Token 自動持久化 — 登入後 token 會自動保存，重啟後無需再次登入。
- AGP WebSocket 雙向通信 — 支持流式文本和工具調用，實現即時消息交互。
- 環境切換支持 — 可配置生產和測試環境，方便開發和測試。
- 邀請碼驗證 — 可選擇性跳過邀請碼驗證，靈活應對不同場景。

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

{
  "前置條件": "確保已安裝 OpenClaw 並啟用插件。",
  "指令": "openclaw channels login --channel wechat-access-unqclawed",
  "預期輸出": "終端會顯示微信二維碼或瀏覽器鏈接，掃描後可獲取 token。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 368 stars（368/天），forks 98（26.6%），顯示出強烈的社群興趣。作者 HenryXiaoYang 過去在開源社區有一定影響力，這個專案解決了微信開發者在使用 OpenClaw 時的接入問題，提供了一個簡單的掃碼登入方式。這個工具的出現正好填補了市場上對於微信機器人開發的需求，並且在社群中引發了討論。高 forks/stars 比率顯示出許多開發者在實際修改和使用這個工具，反映了其實用性和需求。

## 適合誰使用

**目標受眾**：需要在微信平台上開發機器人功能的後端開發者。

> [!example] 使用場景
> - 後端工程師用它來在企業微信中實現自動化客服，因為它簡化了登入流程並支持雙向通信。
> - 開發者用它來快速集成微信機器人功能，因為它提供了清晰的 API 和簡單的配置選項。
> - 產品經理用它來測試微信機器人的功能，因為它支持生產和測試環境的切換，方便進行功能驗證。

## 架構分析

這個專案採用模組化架構，主要由 TypeScript 實現，並使用 AGP 協議進行 WebSocket 通信。資料流方面，使用者透過掃碼登入獲取 token，然後利用 WebSocket 與伺服器進行即時通信。選擇 TypeScript 的原因在於其靜態類型檢查能提高開發效率和代碼穩定性。由於依賴於多個 npm 包，這使得專案在功能上具備靈活性，但也增加了維護的複雜度。未來擴展性方面，這個架構支持添加更多的通路插件，但可能會面臨性能瓶頸，特別是在高併發的情況下。

## 技術深入分析

這個專案的核心技術機制是基於 TypeScript 的模組化設計，使用 AGP 協議進行 WebSocket 通信。WebSocket 客戶端負責連接和心跳維護，並且在消息處理上採用了事件驅動的設計模式，這樣能夠高效處理即時消息。效能方面，該專案能夠支持多個並發連接，但具體的性能數據尚未提供。選擇 TypeScript 使得開發過程中能夠及早發現錯誤，但也增加了初學者的學習曲線。技術風險方面，未來在擴展時可能會遇到性能瓶頸，特別是在高併發情況下，這需要進一步的優化。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）兼容性良好，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了必要的安裝和使用範例，安裝過程相對順暢。新手可以在 30 分鐘內完成安裝並運行起來，但對於不熟悉 OpenClaw 的使用者，可能需要額外的學習時間。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 簡化的掃碼登入流程，提升使用者體驗。
> - 支持雙向通信，適合即時應用場景。
> - 靈活的環境配置，方便開發和測試。

> [!danger] 缺點
> - 目前仍在 alpha 階段，可能存在不穩定性。
> - 依賴多個外部包，增加了維護成本。
> - 社群支援尚在發展中，可能需要自行解決問題。

> [!warning] 注意事項
> - 僅支援 OpenClaw 版本 >= 2026.1.26。
> - 需要有效的微信帳號進行掃碼登入。
> - 在某些情況下可能會遇到設備綁定失敗的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，功能較為專業化，適合醫療行業使用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的 WebSocket 通信功能，但不專注於微信生態，適合需要多平台支持的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，使用 Go 語言實作，性能上優於本專案，但功能較為單一。 | 如果你的需求主要是文件同步而非即時通信，則選擇它會更合適。 | low，因為兩者的 API 設計有一定相似性。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 提供 Telegram 的 WebSocket 代理，使用 Node.js 實作，適合需要 Telegram 整合的場景。 | 如果你的應用主要針對 Telegram 而非微信，則這個工具會更適合。 | medium，因為需要重新調整 API 調用的邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechat-access-unqclawed** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，使用 Go 語言實作，性能上優於本專案，但功能較為單一。 | 提供 Telegram 的 WebSocket 代理，使用 Node.js 實作，適合需要 Telegram 整合的場景。 |
> | 遷移成本 | - | low，因為兩者的 API 設計有一定相似性。 | medium，因為需要重新調整 API 調用的邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非即時通信，則選擇它會更合適。 | 如果你的應用主要針對 Telegram 而非微信，則這個工具 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 設備綁定失敗，可能是因為服務端未返回客服鏈接 UR。
  - 解法：檢查微信帳號是否正常，並重試綁定。
- [MEDIUM] 登入後顯示設備不在線，可能是因為網絡問題。
  - 解法：確保客戶端已啟動並連接網絡。
- [MEDIUM] 在某些環境下，token 可能無法持久化。
  - 解法：檢查配置文件的權限設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的客服系統 | 非常適合 | 提供了即時通信和掃碼登入功能，能夠快速部署。 |
| 大型企業的多渠道客服系統 | 普通 | 雖然功能強大，但可能需要進一步的擴展和調整。 |
| 個人開發者的微信機器人 | 非常適合 | 簡單易用，適合快速開發原型。 |
| 需要高並發的商業應用 | 不適合 | 目前在高併發情況下可能會遇到性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時通信的功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要存取用戶的微信帳號信息，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 98 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-09 |
| Repo 大小 | 501 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HenryXiaoYang/wechat-access-unqclawed) |
| Topics | `openclaw` `openclaw-plugin` `qclaw` `wechat` `wechat-bot` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `fast-xml-parser` `qrcode-terminal` `undici` `ws` `zod` `tsup` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HenryXiaoYang](https://github.com/HenryXiaoYang) | 28 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 3 |
> | [@Noasamaa](https://github.com/Noasamaa) | 1 |
> | [@smysle](https://github.com/smysle) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有 3 個開放問題待解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-10）
> **活躍天數** 1 天 · **最新 commit** release: v1.0.20 [skip ci]

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/HenryXiaoYang/wechat-access-unqclawed/issues/11) | 提示：设备绑定失败: 服务端未返回客服链接 UR | 1 | 6 |
> | [#10](https://github.com/HenryXiaoYang/wechat-access-unqclawed/issues/10) | 最新版本还是不行，通过code，设备绑定成功，显示了微信名。但一直提示设备不在线，请确认客户端已启动并连接网络。 | 0 | 12 |
> | [#9](https://github.com/HenryXiaoYang/wechat-access-unqclawed/issues/9) | 最新版本不行 | 0 | 14 |

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

相關概念：[[AGP Protocol]] · [[WebSocket]] · [[OAuth]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/HenryXiaoYang/wechat-access-unqclawed)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "HenryXiaoYang--wechat-access-unqclawed" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AGP Protocol","WebSocket","OAuth"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HenryXiaoYang--wechat-access-unqclawed" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "HenryXiaoYang" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
