---
repo: Gloridust/WechatOnCloud
url: https://github.com/Gloridust/WechatOnCloud
owner: Gloridust
owner_type: User
language: TypeScript
license: N/A
description: "云微WOC，云微信，自由连接"
homepage: ""
stars: 2883
stars_per_day: 152
forks: 700
open_issues: 5
created: 2026-05-29
pushed_at: 2026-06-17
first_seen: 2026-06-03
week: "2026-W23"
month: "2026-06"
category: "CLI 工具"
subcategory: "社交媒體管理"
release_tag: "v1.2.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-03
use_case: "在自己的伺服器上運行服務端微信，實現多端共享與同步。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-08"
contributor_count: 4
engagement: "medium"
issue_close_rate: 92
repo_size_kb: 1922
readme_length: 8402
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-03"
star_history: "2026-06-03:1468,2026-06-03:1480,2026-06-04:1941,2026-06-04:1941,2026-06-05:2054,2026-06-05:2054,2026-06-06:2116,2026-06-07:2144,2026-06-08:2176,2026-06-09:2260,2026-06-10:2286,2026-06-11:2305,2026-06-12:2318,2026-06-13:2335,2026-06-14:2531,2026-06-15:2694,2026-06-16:2784,2026-06-17:2829,2026-06-18:2883"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
aliases:
  - "WechatOnCloud"
  - "Gloridust/WechatOnCloud"
  - "在自己的伺服器上運行服務端微信，實現多端共享與同步。"
---

# WechatOnCloud

**2.9k** stars · **152** stars/天 · 建立 19 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Gloridust--WechatOnCloud");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.2.2`

> [!summary] 一句話摘要
> 在自己的伺服器上運行服務端微信，實現多端共享與同步。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (152 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在本地伺服器上運行多個社交媒體應用的中小型企業或個人開發者。
> **一句話重點** 這個專案不僅解決了雲端運行微信的需求，還提供了多應用支持，讓用戶能夠在一個平台上管理多個社交媒體帳號。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "社交媒體管理" && p.file.name !== "Gloridust--WechatOnCloud" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 社交媒體管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學、2 小時整合，得到多端共享的社交媒體管理平台，值得一試。

> [!abstract] 核心創新
> 提供了一個多應用平台，允許用戶在雲端運行微信和其他社交媒體應用，實現多端共享。

## 專案簡介

WechatOnCloud 是一個基於 Docker 的平台，允許用戶在自己的 NAS 或伺服器上運行服務端微信和 Chromium 瀏覽器實例。每個實例都是獨立的容器，支持多用戶通過瀏覽器共享同一會話。用戶可以透過面板輕鬆管理多個實例，並在不同設備上實現跨平台的即時通訊和社交媒體互動。核心機制是使用 Xvfb 虛擬顯示和 KasmVNC 將畫面串流到瀏覽器，並且不需要修改微信客戶端。最關鍵的 CLI 指令是 `docker compose up -d`，這會啟動所有配置的容器。這個工具的賣點在於其多應用支持和簡單的管理界面，讓用戶能夠在一個平台上運行多個社交媒體應用。

技術上，該專案使用 TypeScript 和 Docker，並且支持多架構（amd64 和 arm64），這使得它在各種硬體上都能運行。相較於其他類似工具，WechatOnCloud 提供了更靈活的多實例管理和更簡單的用戶界面。與其他工具相比，如 `frp` 或 `ngrok`，它不僅僅是反向代理，而是提供完整的應用運行環境，適合需要長期運行社交媒體應用的用戶。使用時，資源占用主要集中在內存上，單個實例的內存需求約為 1-1.5 GiB，這對於運行多個實例的伺服器來說是一個考量。這個專案目前處於穩定階段，適合中小型團隊或個人使用，未來可能會進一步增強安全性和用戶管理功能。對於需要在內網環境中運行社交媒體應用的開發者來說，這是一個非常合適的選擇。

**技術棧**：`TypeScript` · `Docker` · `KasmVNC`

## 重點功能

- 多實例管理 — 一個面板可管理多個獨立的微信或 Chromium 實例，互不干擾。
- 跨設備共享 — 多個用戶可通過瀏覽器共享同一會話，實現即時通訊。
- 按需下載微信 — 微信實例可在面板中一鍵下載和安裝，無需手動配置。
- 文件傳輸 — 支持拖拽上傳和下載文件，方便用戶之間的資料共享。
- 安全優先 — 面板是唯一入口，並且使用 KasmVNC 憑據注入，保障用戶數據安全。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/Gloridust/WechatOnCloud.git WechatOnCloud && cd WechatOnCloud
```
2. 複製環境變數範本並修改密碼
```bash
cp .env.example .env
```
3. 啟動 Docker 容器
```bash
docker compose up -d
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天內累積 2883 stars（152/天），forks 700（24.3%），顯示出強烈的社群參與。作者 Gloridust 之前有其他開源專案經驗，這次專案解決了在雲端運行微信的痛點，特別是對於需要多端共享的用戶。近期的社群討論和問題反饋也促進了專案的快速成長，尤其是對於遠程桌面連接的穩定性修復。技術上，Docker 的流行使得這個工具的實現變得可行，並且能夠在多種硬體架構上運行。高達 24.3% 的 forks/stars 比率顯示出許多用戶在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在本地伺服器上運行多個社交媒體應用的中小型企業或個人開發者。

> [!example] 使用場景
> - 系統管理員用它來在公司伺服器上運行多個微信實例，因為這樣可以讓不同部門的員工在同一平台上共享信息，提升工作效率。
> - 開發者用它來測試微信的各種功能，因為可以在不同的實例中快速切換，無需重啟應用。
> - 社交媒體經營者用它來管理多個社交媒體帳號，因為可以在一個界面內同時運行 Telegram 和 Instagram，方便進行內容發布和互動。

## 架構分析

WechatOnCloud 採用 Docker 容器化架構，將每個應用實例獨立運行在不同的容器中。這樣的設計使得每個實例都可以獨立管理，並且不會互相影響。資料流方面，使用 Xvfb 虛擬顯示來運行應用，並通過 KasmVNC 將畫面串流到瀏覽器。

這種架構的優勢在於靈活性和擴展性，但也帶來了較高的資源需求，特別是內存方面。選擇 Docker 作為基礎架構的原因在於其便捷的部署和管理能力，然而這也意味著需要一定的 Docker 知識來進行維護。整體而言，這種架構適合需要長期運行和管理多個應用的場景。

## 技術深入分析

WechatOnCloud 的核心技術機制是基於 Docker 的容器化架構，這使得每個應用實例都能在獨立的環境中運行。使用 Xvfb 虛擬顯示技術來支持 GUI 應用的運行，並通過 KasmVNC 將畫面串流到瀏覽器，這樣的設計使得用戶可以在任何設備上訪問應用。效能方面，單個實例的內存需求在 1-1.5 GiB 之間，這對於伺服器的資源配置是一個考量。設計上選擇 Docker 是因為其便捷的部署和擴展能力，但這也意味著需要用戶具備一定的 Docker 知識。技術風險方面，若未妥善配置安全性，可能會導致數據洩露的風險。整合方面，該工具可以與主流的 CI/CD 工具鏈相容，並且能夠在多種硬體架構上運行，這使得它在不同的環境中都能夠靈活應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，對於新手來說相對友好。安裝過程順暢，並且有清晰的快速開始指南。整體來說，花 30 分鐘內能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多個社交媒體應用的運行，提供靈活的管理界面。
> - 容器化架構使得每個實例獨立，易於管理和維護。
> - 安全性設計優良，避免了數據洩露的風險。

> [!danger] 缺點
> - 對於不熟悉 Docker 的用戶來說，學習曲線較陡峭。
> - 資源需求較高，特別是在運行多個實例時。
> - 需要注意安全配置，避免面板暴露於公網。

> [!warning] 注意事項
> - 僅支援 Docker 環境，需具備基本的 Docker 使用知識。
> - 不建議將面板暴露於公網，需在內網或使用 VPN 進行訪問。
> - 實例的資源需求較高，運行多個實例時需注意伺服器的內存和 CPU 使用情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [frp/frp](https://github.com/frp/frp) | frp 是一個反向代理工具，主要用於內網穿透，而 WechatOnCloud 提供完整的應用運行環境，支持多個社交媒體應用的運行。 |
| [ngrok/ngrok](https://github.com/ngrok/ngrok) | ngrok 主要用於快速建立隧道，而 WechatOnCloud 則是專注於運行和管理多個社交媒體實例，提供更完整的功能和用戶管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [frp/frp](https://github.com/frp/frp) | frp 是一個反向代理工具，主要用於內網穿透，而 WechatOnCloud 提供完整的應用運行環境，支持多個社交媒體應用的運行。 | 如果你的需求僅僅是內網穿透，且不需要運行多個應用，frp 會是更輕量的選擇。 | low，因為兩者的功能重疊不大，轉換不會很複雜。 |
| [ngrok/ngrok](https://github.com/ngrok/ngrok) | ngrok 主要用於快速建立隧道，而 WechatOnCloud 則是專注於運行和管理多個社交媒體實例，提供更完整的功能和用戶管理。 | 如果你只需要快速的隧道服務，ngrok 是更簡單的選擇，但無法提供完整的應用運行環境。 | medium，因為需要重新設計應用架構以適應 ngrok 的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **WechatOnCloud** | **frp** | **ngrok** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | frp 是一個反向代理工具，主要用於內網穿透，而 WechatOnCloud 提供完整的應用運行環境，支持多個社交媒體應用的運行。 | ngrok 主要用於快速建立隧道，而 WechatOnCloud 則是專注於運行和管理多個社交媒體實例，提供更完整的功能和用戶管理。 |
> | 遷移成本 | - | low，因為兩者的功能重疊不大，轉換不會很複雜。 | medium，因為需要重新設計應用架構以適應 ngrok 的使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求僅僅是內網穿透，且不需要運行多個應用，frp 會 | 如果你只需要快速的隧道服務，ngrok 是更簡單的選擇，但無 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次新建實例若卡住報 `创建容器失败：… registry-1.docker.io … timeout`
  - 解法：在 NAS 的 Docker 界面手動拉取一次鏡像以避免超時。
- **[HIGH]** 面板默認使用的密碼未改，可能導致安全風險
  - 解法：部署前必須修改 `.env` 文件中的密碼。
- [MEDIUM] 運行多個實例時內存不足，可能導致系統不穩定
  - 解法：確保伺服器配置足夠，建議至少 4 核 / 8 GiB 的配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 可以在內部伺服器上運行，實現多端共享和即時通訊功能。 |
| 大型企業的社交媒體管理 | 普通 | 雖然支持多實例，但資源需求可能會影響運行效率。 |
| 個人開發者的社交媒體測試環境 | 非常適合 | 能夠快速搭建和管理多個社交媒體實例，方便進行測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學、2 小時整合，得到多端共享的社交媒體管理平台，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：面板需要訪問宿主的 docker.sock，這意味著潛在的安全風險。必須確保面板不暴露於公網，並且改變默認密碼以保護用戶數據。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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
| Forks | 700 |
| Open Issues | 5 |
| Issue 解決率 | 92% (56 closed) |
| 最後推送 | 2026-06-17 |
| 建立日期 | 2026-05-29 |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gloridust/WechatOnCloud) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 79
>     "CSS" : 12
>     "Shell" : 6
>     "Dockerfile" : 2
>     "JavaScript" : 1
>     "Raku" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Gloridust](https://github.com/Gloridust) | 79 |
> | [@web-flow](https://github.com/web-flow) | 1 |
> | [@huglemon](https://github.com/huglemon) | 1 |
> | [@mkblbj](https://github.com/mkblbj) | 1 |

**最新版本**：v1.2.2 — v1.2.2 · 远程桌面稳定性修复（致歉）+ 音频/麦克风开关 (2026-06-16)

> [!info]- Release Notes
> ## ⚠️ 致歉
> 
> 1.2.0 / 1.2.1 在「远程桌面连接」上引入了不稳定 —— 用一段时间会卡死、需要频繁重启实例，给使用的朋友添了麻烦,**非常抱歉** 🙏
> 
> 本版已对比稳定的旧版本定位到根因并修复(详见下)。**今后正式版发布前,都会先充分测试远程桌面连接等核心流程,不再未经测试就发布正式版。**
> 
> ## 🩹 修复:远程桌面「频繁卡死 / 重启」
> 
> 对比一直很稳的 v1.1.7 做回归排查后发现:1.1.7 之后陆续引入的「面板侧自动重连 / 自动重启 + VNC 响应性看门狗 + 音频桥」反而制造了频繁卡死与重启。本版**回退到 1.1.7 的稳定连接行为**:
> 
> - 撤掉所有面板侧的自动重连 / 自动重启逻辑 —— 连接由 noVNC 自带重连兜底,仍不行时用户手动「重新连接 / 重启实例」(与 1.1.7 一致,不再自动重启成一团)。
> - 看门狗的 VNC 响应性探测**默认关闭**(避免把正常实例误判为卡死而重启)。
> 
> ## 🔊 音频 / 麦克风改为开关,默认关
> 
> - 打开实例**不再自动占用麦克风** —— AirPods 等不会再被切到低音质通话模式。
> - 需要时在实例顶栏点「声音」听实例音频、点「麦克风」开启语音输入。默认都关,连接更稳。
> 
> ## 🔎 远程桌面连接诊断日志
> 
> - 新增 `[vnc]`(服务端连接尝试 / 建立 / 失败 / 关闭)与 `[client]`(前端 VNC 连接态)日志,写入实例日志,便于排查连接问题。
> 
> ## ⬆️ 升级
> 
> ```bash
> docker compose pull && docker compose up -d
> ```
> 
> ---
> 

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/Gloridust/WechatOnCloud)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-15 ~ 2026-06-17）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#64](https://github.com/Gloridust/WechatOnCloud/issues/64) | 能否增加自定义数据存储位置的设置 | 0 | 1 |
> | [#62](https://github.com/Gloridust/WechatOnCloud/issues/62) | 考虑有自动下载图片原图以及下载文件功能吗 | 0 | 2 |
> | [#36](https://github.com/Gloridust/WechatOnCloud/issues/36) | WOC_ENABLE_GPU=1 打开不起作用 | 0 | 1 |
> | [#35](https://github.com/Gloridust/WechatOnCloud/issues/35) | 然后我把cf代理的域名添加进env，重启容器，域名还是访问不允许 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> 云微 · WechatOnCloud
> 
> 在自己的 NAS / 服务器上运行「服务端微信」，多端浏览器共享同一会话
> 
> 不止微信——还能开 Chromium 浏览器实例，登录 Telegram / X / Instagram 等网页版社媒，常驻云端、多端同步
> 
>   
>   
>   
>   
>   
>   
>   
> 
>   快速开始 ·
>   核心特性 ·
>   浏览器实例 ·
>   运行原理 ·
>   安全须知 ·
>   技术方案
> 
>   
>     
>     
>   
> 
> 在飞牛 NAS（x86_64 / arm64）或任意 Docker 主机上运行服务端微信：面板可管理**多个**实例，每个实例都是一个独立容器——可以是一个**微信**会话，也可以是一个 **Chromium 浏览器**（用来登录 Telegram / X / Instagram 等网页版应用）。多个 web 用户通过浏览器访问被授权的实例，实现跨设备同步、多端共享。**不修改微信客户端。**
> 
> **一句话原理**：每个实例 = 一个容器，里面跑 Xvfb 虚拟显示 + 一个应用（官方原版微信，或 Chromium 浏览器），KasmVNC 把画面串到浏览器；同一实例被多个浏览器连 = 共享同一个会话。前面一层自研**面板**是唯一对外入口，经 docker.sock 按需创建/销毁实例并反向代理。
> 
> 交流群: [@WechatOnCloud](https://t.me/WechatOnCloud)
> 
> ---
> 
> ## 核心特性
> 
> - 🗂️ **多实例** — 一个面板管理多个独立实例，每个实例独立容器 + 独立数据卷，互不干扰。
> - 🌐 **多应用（微信 + 浏览器）** — 新建实例时可选**微信**或 **Chromium 浏览器**；浏览器实例用来登录 Telegram / X / Instagram 等网页版社媒，登录态写进数据卷、常驻云端、多端共享。
> - 👥 **多端共享 + 权限** — 多浏览器 / 设备共享同一会话；子账号体系，按账号分配可访问的实例（RBAC）。
> - 🖥️ **PC 式界面** — 左侧实例栏 + 右侧内嵌桌面，侧栏可折叠，移动端自动转抽屉；实例图标可自定义（内置图标 / 上传裁剪）。
> - 📦 **微信按需下载 · 浏览器开箱即用** — 镜像不打包微信，面板一键「下载安装 / 更新」带进度条、按架构取包；Chromium 已烤进镜像，创建即用、无需下载。
> - 🔁 **实例生命周期** — 启动 / 停止 / 重启 / 升级（拉新镜像重建、保留聊天记录），均在面板内一键完成。
> - 📎 **文件传输 + 文本剪贴板** — 拖拽上传 + 下载 + 删除，直达实例桌面 `~/Desktop`；文本可经剪贴板中转送进实例（局域网 http 下也可用）。
> - 🧩 **多端协作软锁** — 同一实例多人操作时自动只读 + 申请接管，避免键鼠打架。
> - 🔒 **安全优先** — 面板为唯一入口，KasmVNC 凭据服务端注入、永不下发前端；docker.sock 仅管理员可触达。
> - 📱 **PWA** — iOS「添加到主屏幕」、桌面 Chrome「安装」当原生 App。
> - 🏗️ **多架构** — amd64 / arm64 预构建镜像（Docker Hub + GHCR，GitHub Actions 自动发布）。
> 
> ---
> 
> ## 文档
> 
> | 文档 | 内容 |
> |------|------|
> | [运行原理与 Docker 指南](doc/运行原理.md) | 工作原理 + 架构图；面向 Docker 新手的逐步拆解、常用命令、架构自动适配 |
> | [部署与运维](doc/部署与运维.md) | 数据持久化、常见问题排查、忘记超管密码的离线找回、目录结构 |
> | [设备伪装与风控应对](doc/设备伪装.md) | 唯一 machine-id / 真实 hostname / os-release 伪装；账号被微信强制退出循环时怎么办 |
> | [数据卷管理与迁移](doc/数据卷管理.md) | 管理员在面板里备份/恢复整卷、上传 PC 微信数据、浏览管理实例 /config 文件 |
> | [发布到 GHCR](doc/发布到GHCR.md) | 用 GitHub Actions 或本机 buildx 把镜像发布到 GHCR |
> | [技术方案](doc/技术方案.md) | 完整设计文档与选型权衡 |
> 
> ---
> 
> ## 快速开始
> 
> > 需已安装 Docker（含 Compose 插件）。x86_64 / arm64 均可。不熟悉 Docker？先读 [运行原理与 Docker 指南](doc/运行原理.md)。
> 
> `docker-compose.yml` 默认引用 **Docker Hub** 上的镜像 `docker.io/gloridust/{woc-panel,wechat-on-cloud}`（同时也发布到 GHCR 作为备用源）。
> **这两个镜像需先存在**——要么官方已发布（你能直接拉取），要么你在本地自行构建。二选一：
> 
> **方式 A · 本地自构建（官方尚未发布镜像时用这个）**
> 
> ```bash
> git clone https://github.com/Gloridust/WechatOnCloud.git WechatOnCloud
> cd WechatOnCloud
> cp .env.example .env            # 至少改掉默认密码 WOC_PASSWORD
> ./scripts/build-local.sh        # 构建面板 + 微信实例镜像，打成 compose 用的同名标签
> docker compose up -d            # compose 默认优先用本地镜像，不会再去远端拉
> ```
> 
> **方式 B · 拉取官方镜像（推荐，无需 clone 整个仓库）**
> 
> 部署**只需要 `docker-compose.yml` 这一个文件**——它用 `image:` 直接拉官方镜像，面板数据放在该文件旁自动创建的 `./data-panel` 目录，不依赖仓库里的其它文件。
> 
> - **命令行**：丢进一个空目录拉起即可
>   ```bash
>   mkdir woc && cd woc
>   curl -fsSL https://raw.githubusercontent.com/Gloridust/WechatOnCloud/main/docker-compose.yml -o docker-compose.yml
>   docker compose up -d            # 默认从 Docker Hub 拉取（公开、amd64/arm64 多架构）
>   ```
>   > `raw.githubusercontent.com` 拉不动时，在 GitHub 网页打开根目录的 [docker-compose.yml](docker-compose.yml)，复制内容自己建个同名文件即可。
> 
> - **飞牛 OS（fnOS）/ 群晖 等 NAS**：在 **Docker → Compose 一键部署** 界面，把根目录 [docker-compose.yml](docker-compose.yml) 的内容**直接粘贴进去**即可部署，无需命令行、无需 clone。
> 
> > **改配置（强烈建议至少改密码）**：默认管理员 **admin / wechat**。登录后在「修改密码」里改；或部署前在 `docker-compose.yml` 旁放一个 `.env`（从 [.env.example](.env.example) 下载改名），又或在 NAS 的 Compose 环境变量里填 `WOC_PASSWORD`、`WOC_HTTP_PORT`、`WOC_IMAGE_PREFIX` 等（全部可配置项见 [.env.example](.env.example)）。
> 
> > **镜像源**：默认 Docker Hub（国内外通用、免登录，**飞牛等 NAS 还内置了 Docker Hub 加速**，通常比 GHCR 更稳）。拉不动时设 `WOC_IMAGE_PREFIX` 切到备用源 `ghcr.io/gloridust` 或国内反代 `ghcr.nju.edu.cn/gloridust`（更多源见 [.env.example](.env.example)）。报错 `denied` = 该源上还没有镜像，换源或用方式 A 本地构建。
> 
> 无论哪种方式，都会拉起面板容器 `woc-panel`（唯一对外服务）。浏览器访问 `http://:36080`：
> 
> 1. 用 `.env` 里设置的管理员账号（默认 **admin / wechat**）登录面板；
> 2. 在「实例」页点「**新建实例**」，选应用类型（**微信** 或 **Chromium 浏览器**）、命名、勾选可访问的子账号 → 面板自动 `docker run` 起一个实例容器（镜像本地没有时才会从镜像源拉取）；
> 3. **微信实例**：进入后点「**下载并安装**」微信（约 190~210MB，带进度条，仅管理员）；**浏览器实例**：随镜像就绪，跳过这步；
> 4. 点「**进入实例**」→ 微信扫码登录即可收发消息；浏览器则直接打开网页登录 Telegram / X / Instagram 等。
> 
> 之后被授权的用户换任意设备打开同一地址登录面板，看到自己有权访问的实例，进入即是**同一个**会话。
> 
> > **🛠️ NAS / 飞牛(fnOS) 用户必看——首次新建实例若卡住报 `创建容器失败：… registry-1.docker.io … timeout`**：
> > 这是 Docker **守护进程**拉取实例镜像超时。NAS 自带的「Docker Hub 加速」一般只作用于你在 NAS 界面**手动拉镜像**，不覆盖面板（经 docker.sock）触发的拉取，于是直连 `docker.io` 超时。
> > **最省事的解法**：先在 NAS 的 **Docker → 镜像 → 拉取** 里手动拉一次 `gloridust/wechat-on-cloud:latest`（和你拉 `woc-panel` 同样的方式）。镜像到本地后，面板新建实例会直接复用、不再联网拉取 → 立即成功。
> > 想一劳永逸：给 Docker 守护进程配「镜像加速器」（`/etc/docker/daemon.json` 的 `registry-mirrors`，改完重启 Docker），或把 `WOC_IMAGE_PREFIX` 换成国内可达源（如 `ghcr.nju.edu.cn/gloridust`）后重建面板。
> 
> > 宿主只对外暴露面板的 `36080` 一个端口；实例容器仅在 docker 网络内、由面板反代，不直连宿主。要改端口/版本/账号见 `.env`（可配置项见 [.env.example](.env.example)）。镜像会按 CPU 架构自动适配（[详见文档](doc/运行原理.md#架构自动适配)）。
> 
> ### 面板能做什么
> 
> | 功能 | 谁可用 | 说明 |
> |------|--------|------|
> | 新建 / 删除实例 | 管理员 | 一键创建独立实例容器（微信 / Chromium 浏览器）；新建时勾选可访问的子账号、可自定义图标。删除默认保留数据卷，可选彻底清除 |
> | 实例权限分配 | 管理员 | 在实例上改「可访问账户」，或在账户上改「可访问实例」，双向管理 |
> | 下载并安装 / 更新微信 | 管理员 | 微信实例一键下载官方 Linux 版到数据卷、解压安装、带进度条，后续可「更新到最新版」（浏览器实例无需此步） |
> | 进入实例 | 被授权用户 | 在浏览器里操作对应实例：微信扫码收发消息，或在 Chromium 里登录网页应用 |
> | 文件 / 文本传输 | 被授权用户 | 拖拽上传 / 下载文件；文本经剪贴板中转送入实例 |
> | 实例日志 | 管理员 | 查看实例日志，含**持久化历史**（重启原因 + 上一容器日志快照，跨容器重建保留） |
> | 修改密码 | 所有人 | 改自己的登录密码 |
> | 子账号管理 | 管理员 | 创建 / 禁用 / 重置 / 删除子账号，并分配实例访问权限 |
> | 安装为 App | 所有人 | iOS Safari「添加到主屏幕」、桌面 Chrome「安装」当原生 App（PWA） |
> 
> > 子账号是**访问这套面板的身份**，不是另开一个微信 / 账号。管理员隐式拥有全部实例访问权；子账号只能看到被授权的实例。
> > 微信本体**不打进镜像**，新建微信实例后在面板点「下载并安装」时才下载到该实例的数据卷（浏览器实例则已随镜像就绪），所以镜像小、构建快。
> 
> ---
> 
> ## 浏览器实例（登录网页版社媒）
> 
> 云微是个**多应用**平台：除了微信，新建实例时还可以选 **Chromium 浏览器**——相当于一台**常驻云端、多端共享的浏览器**，专门用来登录各种**网页版**应用：
> 
> - **社媒 / IM**：Telegram Web、X（Twitter）、Instagram、WhatsApp Web、Discord、Slack、微博、知乎…… 凡是有网页版的都行；
> - **邮箱 / 后台 / 工具**：Gmail、各类管理后台、需要长期保持登录的网页应用。
> 
> 和微信实例同一套体验与好处：
> 
> - **随镜像就绪、免下载** — Chromium 已烤进镜像，创建后点「进入实例」直接用（amd64 / arm64 均可）。
> - **登录态常驻、重启不掉** — 浏览器配置与 Cookie 写在实例数据卷 `/config`，容器重启 / 升级都保留登录。
> - **多端共享 + 同步** — 多设备打开同一实例看到的是**同一个**浏览器画面，跨设备无缝接力；多人操作有软锁保护。
> - **中文输入 / 文件 / 剪贴板** — 与微信实例共用一套：本地输入法直接打字，工具栏拖拽传文件、剪贴板中转文本。
> 
> > ⚠️ 浏览器实例登录着你的社媒账号，同样受[安全须知](#安全须知必读)约束——**切勿把面板暴露公网**。
> 
> ---
> 
> ## 资源占用
> 
> 实测（8 核 / 8 GiB 宿主，实例均已登录微信、含 Chromium 内核的 WeChatAppEx）：
> 
> | 状态 | CPU | 内存（RSS） |
> |------|-----|------------|
> | 单实例 · 空闲（已登录、无人观看） | ~0.1–0.2 核 | ~0.6 GiB |
> | 单实例 · 活跃（有人在浏览器操作 / 刷消息） | ~0.5–1 核（可突发） | ~1–1.5 GiB |
> | 面板本身 | 可忽略 | ~0.12 GiB |
> 
> - 容器**不设硬性 CPU/内存上限**：空闲时省，活跃时按宿主余量突发；每实例另预留 **1 GiB `/dev/shm`**（微信 Chromium 内核所需，tmpfs，按需占用）。
> - 估算：**面板 ≈ 0.15 GiB 常驻；每个微信实例按 1 vCPU + 1.5 GiB 内存预留**较从容（轻度使用可更低）。
> - 参考容量：**2 核 / 2 GiB** 跑 1 个实例（轻度）；**4 核 / 8 GiB** 跑 3–4 个实例；视频通话等重负载需再加预留。
> 
> > 内存是主要瓶颈，CPU 多为短时突发。实例越多越吃内存，按上表线性叠加即可估算。**Chromium 浏览器实例**的占用与微信实例同量级（取决于开的标签页数），可套用上表。
> 
> ---
> 
> ## 安全须知（必读）
> 
> > ⚠️ **这套系统暴露的是已登录的微信 / 社媒账号，请务必认真阅读本节。**
> 
> 能登录面板的人就能看你的聊天记录、以你身份发消息（浏览器实例则能用你登录的 Telegram / X / Instagram 等账号）。**面板还挂载了宿主的 `docker.sock`**（创建/销毁实例所需），它等同宿主 root 权限。因此：
> 
> - **绝不要把面板裸暴露公网**：只在内网访问，或经飞牛远程访问 / VPN / 内网穿透；
> - 务必改掉默认密码（默认 admin / wechat）：`cp .env.example .env` 后改 `WOC_PASSWORD`，或登录后在「修改密码」里改；
> - 实例的增删、微信安装/更新等触碰 docker 引擎的操作**仅限管理员**；docker API 绝不暴露给前端；
> - KasmVNC 凭据由面板服务端注入，**浏览器永远拿不到**；实例容器名由内部随机 ID 派生，避免注入；
> - 面板与外网之间再套一层 HTTPS 反代（飞牛自带反代 / Caddy / Nginx）获得正经 TLS；
> - 进一步加固（陌生设备验证码、审计日志、并发控制）见 [技术方案.md](doc/技术方案.md) 第 5 节。
> 
> ---
> 
> ## 中文输入
> 
> **用你本地（客户端）的输入法打中文，容器内无需安装任何 IME。** 镜像默认开启 KasmVNC 的「IME Input Mode」，并对 noVNC 的 IME 合成逻辑做了修复——**只在输入法「上屏」那一刻把成品汉字整串发进容器**，规避了原生实现逐字符差分带来的丢字 / 卡顿。在微信或浏览器的输入框直接打字即可（对所有实例通用）。
> 
> - 默认值只对**未存过该设置的浏览器**生效。之前手动开/关过的，浏览器 localStorage 值优先；想验证默认效果用无痕窗口。
> - **跨设备文本**：实例工具栏的「剪贴板」可把文本送入容器剪贴板，再在微信 / 网页里 `Ctrl+V` 粘贴——不依赖浏览器异步剪贴板 API，**局域网 http 访问下也可用**。
> - **文件**：用工具栏「文件」拖拽上传，微信收到的文件另存到桌面即可在此下载。
> 
> ---
> 
> ## 路线图
> 
> - [x] MVP：Docker + 微信原生版 + KasmVNC，浏览器扫码登录、收发消息
> - [x] 自研面板：cookie 鉴权 + 反代 + 子账号管理 + PWA（KasmVNC 凭据不下发前端）
> - [x] 微信本体运行时下载到数据卷：面板一键「下载并安装 / 更新」，带进度条
> - [x] 多实例管理 + 按账号的实例访问权限（RBAC）
> - [x] 多应用平台：微信 + Chromium 浏览器实例（登录 Telegram / X / Instagram 等网页版社媒）+ 自定义实例图标
> - [x] 预构建多架构镜像发布到 Docker Hub / GHCR + GitHub Actions 自动化
> - [x] 中文输入修复 + 文本剪贴板中转 + 实例日志持久化（跨容器重建保留重启原因与日志快照）
> - [ ] 面板外层 TLS / 陌生设备验证码 / 审计日志
> - [x] 多端并发控制（操作控制权心跳软锁 + 只读遮罩 + 申请接管）
> - [ ] 掉登录时 web 

## 延伸閱讀

相關概念：[[容器化]] · [[多模態]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[louislva--claude-peers-mcp|louislva/claude-peers-mcp]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]]

[GitHub](https://github.com/Gloridust/WechatOnCloud)

## 相關收錄

> [!note]- 直接競品（同子分類：社交媒體管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "社交媒體管理" AND file.name != "Gloridust--WechatOnCloud"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "Gloridust--WechatOnCloud"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Gloridust--WechatOnCloud" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "Gloridust--WechatOnCloud"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["容器化","多模態","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Gloridust--WechatOnCloud" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Gloridust--WechatOnCloud" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Gloridust" AND file.name != "Gloridust--WechatOnCloud"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
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

> **2026-06-03** — 首次收錄
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

- [[2026-06-05|2026-06-05]] — 再次上榜，2.1k stars
- [[2026-06-04|2026-06-04]] — 再次上榜，1.9k stars
- [[2026-06-03|2026-06-03]] — 首次收錄，1.5k stars
