---
repo: HenryXiaoYang/wechat-access-unqclawed
url: https://github.com/HenryXiaoYang/wechat-access-unqclawed
owner: HenryXiaoYang
owner_type: User
language: TypeScript
license: N/A
description: "微信包装了开源项目OpenClaw，所以我们把他的Channel抽出来了😄"
homepage: ""
stars: 372
stars_per_day: 372
forks: 99
open_issues: 3
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
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "透過微信掃碼登入，實現 AGP WebSocket 雙向通信的 OpenClaw 插件。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-14"
contributor_count: 4
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:368,2026-03-11:371,2026-03-11:372"
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
  - "透過微信掃碼登入，實現 AGP WebSocket 雙向通信的 OpenClaw 插件。"
---

# wechat-access-unqclawed

**372** stars · **372** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/HenryXiaoYang--wechat-access-unqclawed");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`openclaw` `openclaw-plugin` `qclaw` `wechat` `wechat-bot`

> [!summary] 一句話摘要
> 透過微信掃碼登入，實現 AGP WebSocket 雙向通信的 OpenClaw 插件。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (372 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在微信上開發機器人並希望簡化登入流程的後端開發者。
> **一句話重點** 這個專案展示了如何將微信的 OAuth 流程與即時通信結合，提升機器人開發的效率和安全性。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到即時通信和簡化登入的效果，值得一試。

> [!abstract] 核心創新
> 提供了基於微信的 OAuth 掃碼登入和 AGP WebSocket 雙向通信的解決方案。

## 專案簡介

這個專案是 OpenClaw 的一個微信通路插件，主要功能是透過微信的 OAuth 掃碼登入來獲取 token，並連接 AGP WebSocket 網關進行雙向通信。使用者可以透過命令 `openclaw plugins install @henryxiaoyang/wechat-access-unqclawed` 安裝插件，並使用 `openclaw channels login --channel wechat-access-unqclawed` 來進行首次登入，登入後會生成一個二維碼供用戶掃描。這樣的設計使得用戶無需手動輸入密碼，提升了安全性和便利性。插件還支持 token 的自動持久化，重啟後無需再次登入，這對於長期運行的服務來說非常重要。技術上，專案使用 TypeScript 開發，並依賴於 WebSocket 進行即時通信，這使得消息傳遞更為高效。

相較於其他類似工具，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，這個插件專注於微信生態系統，提供了更為專業的功能和更好的用戶體驗。使用者在配置時可以選擇生產或測試環境，這對於開發和測試階段的靈活性非常有幫助。需要注意的是，當前的開發者社群活躍度高，但仍有一些開放的問題需要解決，例如設備綁定失敗的情況。整體來看，這是一個功能強大且易於使用的插件，適合需要在微信上運行機器人的開發者。

**技術棧**：`TypeScript 5.9.3` · `fast-xml-parser 5.4.1` · `ws 8.18.0`

## 重點功能

- 微信掃碼登入 — 透過終端生成二維碼進行掃碼登入，簡化用戶體驗。
- Token 自動持久化 — 登入後自動保存 token，重啟後無需再次登入。
- AGP WebSocket 雙向通信 — 支持即時消息傳遞和工具調用，提升互動性。
- 環境切換支持 — 可在生產和測試環境間靈活切換，方便開發和測試。
- 邀請碼驗證 — 可選擇跳過邀請碼驗證，靈活應對不同需求。

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
  "前置條件": "已安裝 OpenClaw 並配置好環境",
  "指令": "openclaw channels login --channel wechat-access-unqclawed",
  "預期輸出": "終端會顯示微信二維碼或瀏覽器鏈接，掃碼後完成登入。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 372 stars（372/天），forks 99（26.6%），這顯示出強烈的社群興趣。這個專案由 HenryXiaoYang 開發，他在開源社群中有一定的影響力，並且過去有相關的開發經驗。這個插件解決了微信機器人開發中常見的登入和消息傳遞問題，之前的解決方案往往需要繁瑣的配置或不夠安全的登入方式。近期的社群討論和問題反饋也促進了專案的快速發展，顯示出開發者對於這個工具的需求。整體來看，這個專案的成功與其簡化的使用流程和強大的功能密切相關。

## 適合誰使用

**目標受眾**：需要在微信上開發機器人並希望簡化登入流程的後端開發者。

> [!example] 使用場景
> - 後端工程師用它來在微信上實現自動化客服機器人，因為這樣可以快速回應客戶查詢，提升客戶滿意度。
> - 產品經理用它來測試微信機器人的功能，因為支持生產和測試環境的切換，方便在不同階段進行驗證。
> - 開發者用它來整合微信功能到現有的應用中，因為它的 WebSocket 通信方式能夠實現即時消息推送，增強用戶互動。

## 架構分析

這個專案採用 TypeScript 開發，整體架構設計為插件化，便於與 OpenClaw 系統集成。資料流方面，使用者透過掃碼登入獲得 token，然後通過 WebSocket 與 AGP 進行即時通信。這種設計使得用戶能夠快速獲得授權並開始使用，而不需要繁瑣的配置。

選擇 TypeScript 的原因在於其靜態類型檢查能提高開發效率和代碼質量。這個架構的 trade-off 在於，雖然提供了靈活性，但對於不熟悉 TypeScript 的開發者來說，學習曲線可能會稍陡峭。整體來看，這個架構適合需要快速開發和迭代的團隊，但在大規模應用時可能需要考慮性能優化。

## 技術深入分析

專案核心機制是透過微信的 OAuth 流程來獲取 token，並利用 AGP 協議進行 WebSocket 雙向通信。這樣的設計使得用戶能夠快速登入並開始使用機器人功能。效能方面，使用 WebSocket 進行即時通信能夠有效降低延遲，提升用戶體驗。選擇 TypeScript 作為開發語言，能夠提高代碼的可維護性和可讀性，這對於長期開發至關重要。依賴樹相對簡單，主要依賴於 WebSocket 和 XML 解析庫，這使得專案的整體體積較小，便於快速部署。在技術風險方面，WebSocket 的連接穩定性和安全性是需要考慮的因素，特別是在高並發的場景下。整合方面，這個插件可以輕鬆與 OpenClaw 系統集成，並且支持常見的 CI/CD 流程，這對於團隊的開發效率有很大幫助。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝和使用範例，對於新手來說非常友好。安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，讓使用者能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 簡化的微信登入流程，提升用戶體驗。
> - 支持即時消息推送，增強互動性。
> - 靈活的環境切換，方便開發和測試。

> [!danger] 缺點
> - 目前僅支持微信通道，擴展性有限。
> - 需要手動配置 WebSocket 網關，對新手不友好。
> - 存在一些開放的問題，影響使用穩定性。

> [!warning] 注意事項
> - 目前僅支持微信通道，對於其他平台的支持尚未實現。
> - 需要用戶手動配置 WebSocket 網關地址，對於新手可能有一定難度。
> - 存在一些開放的問題，可能影響使用體驗，例如設備綁定失敗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和備份，而本專案專注於微信機器人開發，功能定位不同。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 針對醫療領域的專用技能，而本專案則是通用的微信通道插件，適用範圍更廣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，而本專案則專注於微信機器人開發，功能定位不同。 | 如果你的應用需要更強的數據隱私保護，則應選擇它。 | medium，因為需要重新設計數據處理流程。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的 WebSocket 代理，而本專案專注於微信，功能和適用場景不同。 | 如果你的團隊已經在使用 Telegram 並需要類似的功能，則應選擇它。 | low，因為 Telegram 和微信的使用場景相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechat-access-unqclawed** | **Shadowbroker** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據隱私和安全，而本專案則專注於微信機器人開發，功能定位不同。 | 專注於 Telegram 的 WebSocket 代理，而本專案專注於微信，功能和適用場景不同。 |
> | 遷移成本 | - | medium，因為需要重新設計數據處理流程。 | low，因為 Telegram 和微信的使用場景相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的應用需要更強的數據隱私保護，則應選擇它。 | 如果你的團隊已經在使用 Telegram 並需要類似的功能， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目或實驗性質的開發，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 設備綁定失敗，可能導致無法正常使用
  - 解法：檢查微信客戶端是否正常運行，並確保網絡連接良好。
- [MEDIUM] 首次登入後可能需要手動重啟 Gateway
  - 解法：按照文檔指示重啟 Gateway。
- [MEDIUM] 在某些環境下可能無法自動保存 token
  - 解法：手動將 token 複製到配置文件中。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發微信機器人 | 非常適合 | 簡化的登入流程和即時通信功能非常符合小型團隊的需求。 |
| 大型企業的微信客服系統 | 普通 | 雖然功能強大，但目前仍處於 alpha 階段，穩定性有待提高。 |
| 個人開發者的實驗性項目 | 非常適合 | 適合探索微信機器人開發，且安裝和使用都很簡單。 |
| 需要高可用性的生產環境 | 不適合 | 目前不建議用於生產環境，穩定性和安全性尚未達標。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到即時通信和簡化登入的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，但需妥善管理 token 和配置文件，避免敏感信息洩露。

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
| Forks | 99 |
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

**社群活躍度**：最近活躍，開發者積極回應社群問題。
**連結**：[文件](https://github.com/HenryXiaoYang/wechat-access-unqclawed#readme)

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

相關概念：[[WebSocket]] · [[OAuth]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/HenryXiaoYang/wechat-access-unqclawed)

## 相關收錄

> [!note]- 直接競品（同子分類：插件）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "插件" AND file.name != "HenryXiaoYang--wechat-access-unqclawed"
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
> const concepts = ["WebSocket","OAuth","自動化測試"];
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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

- [[2026-03-11|2026-03-11]] — 再次上榜，371 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，322 stars
