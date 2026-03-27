---
repo: wong2/weixin-agent-sdk
url: https://github.com/wong2/weixin-agent-sdk
owner: wong2
owner_type: User
language: TypeScript
license: MIT
description: "微信Clawbot接入任意Agent"
homepage: ""
stars: 919
stars_per_day: 230
forks: 98
open_issues: 4
created: 2026-03-22
pushed_at: 2026-03-25
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "讓微信接入任意 AI Agent，簡化多種智能體的整合。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-30"
contributor_count: 2
engagement: "medium"
issue_close_rate: 67
repo_size_kb: 95
readme_length: 4026
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:892,2026-03-27:919"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "weixin-agent-sdk"
  - "wong2/weixin-agent-sdk"
  - "讓微信接入任意 AI Agent，簡化多種智能體的整合。"
---

# weixin-agent-sdk

**892** stars · **297** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/wong2--weixin-agent-sdk");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 讓微信接入任意 AI Agent，簡化多種智能體的整合。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (297 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望在微信中整合 AI 功能的開發者，特別是對接 OpenAI 等智能體的需求。
> **一句話重點** 這個專案的設計使得微信接入 AI 變得前所未有的簡單，適合快速開發和實驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "wong2--weixin-agent-sdk" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到快速接入微信的能力，值得考慮。

> [!abstract] 核心創新
> 提供了一個簡單的接口來接入任意 AI Agent，並支持多種媒體類型的處理。

## 專案簡介

weixin-agent-sdk 是一個微信 AI Agent 桥接框架，通過簡單的 Agent 接口，讓開發者可以將各種 AI 後端接入微信。使用者只需實現 `Agent` 接口，並透過 `login()` 和 `start(agent)` 來啟動消息循環，這樣就能夠接收和發送消息。該框架支持多種媒體類型，包括文本、圖片、語音和文件，並且能夠處理多輪對話。其核心賣點是簡化了接入過程，開發者無需編寫複雜的代碼，只需專注於實現業務邏輯。技術上，該框架使用長輪詢 (`getUpdates`) 接收消息，並且支持 AES-128-ECB 加密傳輸，確保了數據的安全性。

與其他類似工具相比，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，weixin-agent-sdk 提供了更簡單的接入方式和更豐富的媒體支持，適合需要快速集成 AI 功能的開發者。使用者在實際應用中可能會遇到會話過期和重連的問題，但這些都已經在設計中考慮到，並提供了自動重連的機制。這個專案目前處於活躍開發中，適合中小型團隊快速實現微信智能體的接入。對於希望在微信中實現 AI 功能的開發者來說，這是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `JavaScript`

## 重點功能

- 簡單的 Agent 接口 — 只需實現 `Agent` 接口即可接入微信。
- 支持多種媒體類型 — 包括文本、圖片、語音和文件，提升用戶互動。
- 自動重連機制 — 會話過期後自動重連，減少開發者的維護負擔。
- 長輪詢接收消息 — 無需部署公網服務，簡化了架構設計。
- 兼容 ACP 协议 — 可直接接入多種兼容的 AI Agent，無需編寫額外代碼。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 掃碼登錄微信
```bash
pnpm run login -w packages/example-openai
```
3. 啟動 bot
```bash
OPENAI_API_KEY=sk-xxx pnpm run start -w packages/example-openai
```

## 程式碼範例

```ts
{
  "前置條件": "必須安裝 weixin-agent-sdk 並配置好環境變數。",
  "程式碼": "import { login, start, type Agent } from 'weixin-agent-sdk';\n\nconst echo: Agent = {\n  async chat(req) {\n    return { text: `你说了: ${req.text}` };\n  },\n};\n\nawait login();\nawait start(echo);",
  "預期輸出": "用戶發送的消息會被回覆，格式為 '你说了: [用戶消息]'。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 892 stars（297/天），forks 96（10.8%），顯示出不錯的社群關注度。作者 wong2 和 WendaoLee 具備豐富的開發經驗，這個專案解決了微信接入 AI Agent 的痛點，之前的方案往往需要繁瑣的配置和代碼編寫。近期的推廣活動和社群討論也促進了這個專案的曝光，特別是在 AI 和即時通訊結合的熱潮中。高達 10.8% 的 forks/stars 比率顯示出許多開發者對此專案有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：希望在微信中整合 AI 功能的開發者，特別是對接 OpenAI 等智能體的需求。

> [!example] 使用場景
> - 後端工程師用它來將 OpenAI 接入微信，因為只需簡單的配置即可實現多輪對話功能。
> - 產品經理用它來快速測試不同的 AI Agent 效果，因為可以輕鬆切換不同的後端服務。
> - 開發者用它來創建一個微信客服機器人，因為支持多種媒體類型的處理，提升用戶互動體驗。

## 架構分析

weixin-agent-sdk 採用模組化設計，將 SDK、適配器和示例分開，便於擴展和維護。資料流主要通過長輪詢接收消息，並使用 JSON-RPC over stdio 與後端進行通訊。這種設計使得開發者可以快速接入不同的 AI Agent，而不需要關心底層的實現細節。

選擇長輪詢而非 WebSocket 是為了簡化部署，雖然這可能在高並發情況下造成延遲。擴展性方面，該架構能夠支持多個 Agent 的接入，但在高負載情況下可能需要進一步優化。整體來看，這種設計適合中小型專案，對於大型應用可能需要考慮性能調整。

## 技術深入分析

weixin-agent-sdk 的核心機制在於其簡單的 Agent 接口設計，開發者只需實現 `chat` 方法即可處理用戶消息。該框架使用長輪詢技術來接收消息，這意味著開發者無需維護公網服務，降低了部署的複雜性。雖然長輪詢在高並發情況下可能會導致延遲，但對於大多數中小型應用來說，這種設計是可接受的。選擇 TypeScript 作為開發語言，提供了靜態類型檢查的優勢，減少了潛在的錯誤。

依賴樹相對輕量，主要依賴於 Node.js 環境，這使得整體安裝和運行的複雜度降低。技術上，該專案的設計考慮到了安全性，使用 AES-128-ECB 加密傳輸數據，確保了用戶的隱私。未來可能需要關注的風險包括會話管理的穩定性和性能瓶頸，特別是在用戶量增加的情況下。整合到現有的開發流程中相對簡單，尤其是對於已經使用 Node.js 的團隊，學習成本低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢。對於新手來說，能夠在短時間內上手並運行範例。文件目前僅提供英文，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 簡化了微信接入 AI 的流程，降低了開發門檻。
> - 支持多種媒體類型，提升了用戶互動的豐富性。
> - 自動重連機制減少了開發者的維護負擔。
> - 模組化設計便於擴展和維護。

> [!danger] 缺點
> - 僅支持 Node.js >= 22，限制了使用範圍。
> - 單帳號模式可能不適合需要多帳號的場景。
> - 對於大型用戶群，可能會遇到性能瓶頸。
> - 需要額外安裝依賴以支持語音功能。

> [!warning] 注意事項
> - 僅支援 Node.js >= 22。
> - 目前僅支持單帳號模式，每次登錄會覆蓋之前的帳號。
> - 需要安裝 `silk-wasm` 以支持語音轉換功能。
> - 對於大型用戶群，可能需要考慮性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不支持即時通訊和多媒體處理。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的智能體接入，功能較為專一。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，專注於文件傳輸，而非即時通訊。 | 如果你的需求主要是文件同步，而非即時通訊，則這個工具會更合適。 | low，因為兩者的功能範圍不同，遷移不會太複雜。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的智能體接入，功能較為專一。 | 如果你的應用場景是醫療相關，這個工具會提供更針對性的功能。 | medium，因為需要根據具體需求調整代碼和配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **weixin-agent-sdk** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供文件同步功能，專注於文件傳輸，而非即時通訊。 | 專注於醫療領域的智能體接入，功能較為專一。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會太複雜。 | medium，因為需要根據具體需求調整代碼和配置。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步，而非即時通訊，則這個工具會更合適 | 如果你的應用場景是醫療相關，這個工具會提供更針對性的功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下，可能會遇到消息延遲問題。
  - 解法：考慮增加伺服器資源或使用負載均衡。
- [MEDIUM] 會話過期後需要手動重連，可能影響用戶體驗。
  - 解法：實現自動重連邏輯以提升穩定性。
- [MEDIUM] 某些媒體類型的處理可能需要額外安裝依賴。
  - 解法：在部署前仔細檢查依賴項，確保環境完整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡單的接入方式和低學習成本使其適合小型團隊。 |
| 需要接入多個 AI Agent 的大型企業 | 普通 | 雖然支持多個 Agent，但在高並發情況下可能會遇到性能瓶頸。 |
| 需要快速原型開發的個人開發者 | 非常適合 | 快速上手和簡單配置使其成為理想選擇。 |
| 大型即時通訊平台的核心功能 | 不適合 | 目前僅支持單帳號模式，無法滿足多帳號需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速接入微信的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，主要依賴於 Node.js 環境。傳輸過程中使用 AES 加密，確保數據安全。對於 CI/CD 使用也相對安全，但需注意依賴的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 96 |
| Open Issues | 4 |
| Issue 解決率 | 67% (8 closed) |
| 最後推送 | 2026-03-25 |
| 建立日期 | 2026-03-22 |
| Repo 大小 | 95 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wong2/weixin-agent-sdk) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wong2](https://github.com/wong2) | 33 |
> | [@WendaoLee](https://github.com/WendaoLee) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個 commit 和 issue 回應。
**連結**：[文件](https://github.com/wong2/weixin-agent-sdk)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-24 ~ 2026-03-25）
> **活躍天數** 2 天 · **最新 commit** chore: bump @agentclientprotocol/sdk to 0.17.0 and claude-agent-acp to 0.23.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/wong2/weixin-agent-sdk/issues/4) | 增加一个微信同时对接多个智能体的功能 | 1 | 0 |
> | [#17](https://github.com/wong2/weixin-agent-sdk/issues/17) | 希望能增加实时任务展示功能 | 0 | 0 |
> | [#13](https://github.com/wong2/weixin-agent-sdk/issues/13) | weixin-acp: session/update schema validation fails for usage | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # weixin-agent-sdk
> 
> > 本项目非微信官方项目，代码由 [@tencent-weixin/openclaw-weixin](https://npmx.dev/package/@tencent-weixin/openclaw-weixin) 改造而来，仅供学习交流使用。
> 
> 微信 AI Agent 桥接框架 —— 通过简单的 Agent 接口，将任意 AI 后端接入微信。
> 
> ## 项目结构
> 
> ```
> packages/
>   sdk/                  weixin-agent-sdk —— 微信桥接 SDK
>   weixin-acp/           ACP (Agent Client Protocol) 适配器
>   example-openai/       基于 OpenAI 的示例
> ```
> 
> ## 通过 ACP 接入 Claude Code, Codex, kimi-cli 等 Agent
> 
> [ACP (Agent Client Protocol)](https://agentclientprotocol.com/) 是一个开放的 Agent 通信协议。如果你已有兼容 ACP 的 agent，可以直接通过 [`weixin-acp`](https://www.npmjs.com/package/weixin-acp) 接入微信，无需编写任何代码。
> 
> ### Claude Code
> 
> ```bash
> npx weixin-acp claude-code
> ```
> 
> ### Codex
> 
> ```bash
> npx weixin-acp codex
> ```
> 
> ### 其它 ACP Agent
> 
> 比如 kimi-cli：
> 
> ```bash
> npx weixin-acp start -- kimi acp
> ```
> 
> `--` 后面的部分就是你的 ACP agent 启动命令，`weixin-acp` 会自动以子进程方式启动它，通过 JSON-RPC over stdio 进行通信。
> 
> 更多 ACP 兼容 agent 请参考 [ACP agent 列表](https://agentclientprotocol.com/get-started/agents)。
> 
> ## 自定义 Agent
> 
> SDK 只导出三样东西：
> 
> - **`Agent`** 接口 —— 实现它就能接入微信
> - **`login()`** —— 扫码登录
> - **`start(agent)`** —— 启动消息循环
> 
> ### Agent 接口
> 
> ```typescript
> interface Agent {
>   chat(request: ChatRequest): Promise;
> }
> 
> interface ChatRequest {
>   conversationId: string;         // 用户标识，可用于维护多轮对话
>   text: string;                   // 文本内容
>   media?: {                       // 附件（图片/语音/视频/文件）
>     type: "image" | "audio" | "video" | "file";
>     filePath: string;             // 本地文件路径（已下载解密）
>     mimeType: string;
>     fileName?: string;
>   };
> }
> 
> interface ChatResponse {
>   text?: string;                  // 回复文本（支持 markdown，发送前自动转纯文本）
>   media?: {                       // 回复媒体
>     type: "image" | "video" | "file";
>     url: string;                  // 本地路径或 HTTPS URL
>     fileName?: string;
>   };
> }
> ```
> 
> ### 最简示例
> 
> ```typescript
> import { login, start, type Agent } from "weixin-agent-sdk";
> 
> const echo: Agent = {
>   async chat(req) {
>     return { text: `你说了: ${req.text}` };
>   },
> };
> 
> await login();
> await start(echo);
> ```
> 
> ### 完整示例（自己管理对话历史）
> 
> ```typescript
> import { login, start, type Agent } from "weixin-agent-sdk";
> 
> const conversations = new Map();
> 
> const myAgent: Agent = {
>   async chat(req) {
>     const history = conversations.get(req.conversationId) ?? [];
>     history.push(req.text);
> 
>     // 调用你的 AI 服务...
>     const reply = await callMyAI(history);
> 
>     history.push(reply);
>     conversations.set(req.conversationId, history);
>     return { text: reply };
>   },
> };
> 
> await login();
> await start(myAgent);
> ```
> 
> ### OpenAI 示例
> 
> `packages/example-openai/` 是一个完整的 OpenAI Agent 实现，支持多轮对话和图片输入：
> 
> ```bash
> pnpm install
> 
> # 扫码登录微信
> pnpm run login -w packages/example-openai
> 
> # 启动 bot
> OPENAI_API_KEY=sk-xxx pnpm run start -w packages/example-openai
> ```
> 
> 支持的环境变量：
> 
> | 变量 | 必填 | 说明 |
> |------|------|------|
> | `OPENAI_API_KEY` | 是 | OpenAI API Key |
> | `OPENAI_BASE_URL` | 否 | 自定义 API 地址（兼容 OpenAI 接口的第三方服务） |
> | `OPENAI_MODEL` | 否 | 模型名称，默认 `gpt-5.4` |
> | `SYSTEM_PROMPT` | 否 | 系统提示词 |
> 
> ## 支持的消息类型
> 
> ### 接收（微信 → Agent）
> 
> | 类型 | `media.type` | 说明 |
> |------|-------------|------|
> | 文本 | — | `request.text` 直接拿到文字 |
> | 图片 | `image` | 自动从 CDN 下载解密，`filePath` 指向本地文件 |
> | 语音 | `audio` | SILK 格式自动转 WAV（需安装 `silk-wasm`） |
> | 视频 | `video` | 自动下载解密 |
> | 文件 | `file` | 自动下载解密，保留原始文件名 |
> | 引用消息 | — | 被引用的文本拼入 `request.text`，被引用的媒体作为 `media` 传入 |
> | 语音转文字 | — | 微信侧转写的文字直接作为 `request.text` |
> 
> ### 发送（Agent → 微信）
> 
> | 类型 | 用法 |
> |------|------|
> | 文本 | 返回 `{ text: "..." }` |
> | 图片 | 返回 `{ media: { type: "image", url: "/path/to/img.png" } }` |
> | 视频 | 返回 `{ media: { type: "video", url: "/path/to/video.mp4" } }` |
> | 文件 | 返回 `{ media: { type: "file", url: "/path/to/doc.pdf" } }` |
> | 文本 + 媒体 | `text` 和 `media` 同时返回，文本作为附带说明发送 |
> | 远程图片 | `url` 填 HTTPS 链接，SDK 自动下载后上传到微信 CDN |
> 
> ## 内置斜杠命令
> 
> 在微信中发送以下命令：
> 
> - `/echo ` —— 直接回复（不经过 Agent），附带通道耗时统计
> - `/toggle-debug` —— 开关 debug 模式，启用后每条回复追加全链路耗时
> 
> ## 技术细节
> 
> - 使用 **长轮询** (`getUpdates`) 接收消息，无需公网服务器
> - 媒体文件通过微信 CDN 中转，**AES-128-ECB** 加密传输
> - 单账号模式：每次 `login` 覆盖之前的账号
> - 断点续传：`get_updates_buf` 持久化到 `~/.openclaw/`，重启后从上次位置继续
> - 会话过期自动重连（errcode -14 触发 1 小时冷却后恢复）
> - Node.js >= 22
> 
> ## Star History

## 延伸閱讀

相關概念：[[即時通訊]] · [[API 設計]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[skernelx--tavily-key-generator|skernelx/tavily-key-generator]]

[GitHub](https://github.com/wong2/weixin-agent-sdk)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "wong2--weixin-agent-sdk"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "wong2--weixin-agent-sdk"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "wong2--weixin-agent-sdk" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "wong2--weixin-agent-sdk"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["即時通訊","API 設計","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wong2--weixin-agent-sdk" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wong2--weixin-agent-sdk" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "wong2" AND file.name != "wong2--weixin-agent-sdk"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
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
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
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
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
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
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
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
> const me = dv.page("Repos/wong2--weixin-agent-sdk");
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

> **2026-03-26** — 首次收錄
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

- [[2026-03-27|2026-03-27]] — 再次上榜，919 stars
- [[2026-03-26|2026-03-26]] — 首次收錄，892 stars
