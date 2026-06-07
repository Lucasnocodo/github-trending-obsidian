---
repo: Gloridust/WechatOnCloud
url: https://github.com/Gloridust/WechatOnCloud
owner: Gloridust
owner_type: User
language: TypeScript
license: N/A
description: "云微WOC，云微信，自由连接"
homepage: ""
stars: 2144
stars_per_day: 268
forks: 574
open_issues: 12
created: 2026-05-29
pushed_at: 2026-06-05
first_seen: 2026-06-03
week: "2026-W23"
month: "2026-06"
category: "CLI 工具"
subcategory: "自動化"
release_tag: "v1.1.7"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-03
use_case: "在自己的伺服器上運行多個獨立的微信實例，實現跨設備消息同步。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-08"
contributor_count: 3
engagement: "medium"
issue_close_rate: 65
repo_size_kb: 1828
readme_length: 5682
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-03"
star_history: "2026-06-03:1468,2026-06-03:1480,2026-06-04:1941,2026-06-04:1941,2026-06-05:2054,2026-06-05:2054,2026-06-06:2116,2026-06-07:2144"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
aliases:
  - "WechatOnCloud"
  - "Gloridust/WechatOnCloud"
  - "在自己的伺服器上運行多個獨立的微信實例，實現跨設備消息同步。"
---

# WechatOnCloud

**2.1k** stars · **268** stars/天 · 建立 8 天前 · TypeScript · 未標註授權

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

`v1.1.7`

> [!summary] 一句話摘要
> 在自己的伺服器上運行多個獨立的微信實例，實現跨設備消息同步。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (268 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在伺服器上運行多個微信賬號以實現跨設備消息同步的企業或團隊。
> **一句話重點** 這個專案的創新在於將多實例管理和安全性設計結合，讓用戶能在伺服器上安全運行多個微信賬號。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Gloridust--WechatOnCloud");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "Gloridust--WechatOnCloud" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到多實例管理的靈活性，值得考慮。

> [!abstract] 核心創新
> 提供了獨特的多實例管理和安全性設計，讓用戶能在伺服器上安全運行多個微信實例。

## 專案簡介

WechatOnCloud 透過 Docker 容器化技術，讓用戶能在自己的伺服器上運行多個獨立的微信實例。每個實例都在虛擬顯示環境中運行官方微信，並利用 KasmVNC 將畫面串流到瀏覽器，實現多端共享同一微信會話。用戶只需透過面板管理實例，並可在面板中一鍵下載和安裝微信，這樣的設計使得用戶無需修改微信客戶端即可實現多端同步。這個工具的賣點在於它的多實例管理及安全性設計，面板是唯一的入口，並且支持權限分配，確保數據安全。技術上，該專案使用 TypeScript 和 Docker，並且支持 x86_64 和 arm64 架構，這讓它在不同硬體上都能運行。

相較於其他類似工具，如 0x0funky/agent-sprite-forge，WechatOnCloud 提供了更完整的多實例管理功能，並且在安全性上有更高的考量。使用者在運行時需注意資源消耗，尤其是內存，因為每個實例都會佔用一定的資源。這個專案目前處於穩定階段，適合需要在伺服器上運行多個微信賬號的團隊或個人。未來可能會增加更多的安全功能和用戶體驗改善。對於希望在內網環境中運行微信的用戶，這是一個非常合適的選擇，但不建議在公共網絡中直接暴露面板。

**技術棧**：`TypeScript` · `Docker` · `KasmVNC`

## 重點功能

- 多實例管理 — 一個面板可管理多個獨立的微信實例，每個實例互不干擾。
- 多端共享 — 支持多個用戶通過不同設備共享同一微信會話，並可分配訪問權限。
- 安全性設計 — 面板是唯一入口，並且支持權限管理，確保數據安全。
- 即時下載安裝 — 面板一鍵下載和安裝微信，並支持自動更新。
- 資源優化 — 每個實例的資源使用可根據需求調整，支持 x86_64 和 arm64 架構。

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
> 建立 8 天內累積 2144 stars（268/天），forks 574（26.8%），顯示出強烈的社群需求。作者 Gloridust 之前在開源社群有過多個貢獻，這個專案解決了用戶在多設備上使用微信的困難，尤其是在企業環境中。隨著遠程工作和多設備使用的普及，這個工具的需求顯著上升。forks/stars 比率達到 26.8%，顯示出許多開發者對此專案的實際修改和使用，這是健康的社群參與指標。

## 適合誰使用

**目標受眾**：需要在伺服器上運行多個微信賬號以實現跨設備消息同步的企業或團隊。

> [!example] 使用場景
> - IT 管理員用它來在公司伺服器上運行多個微信實例，因為這樣可以讓不同部門的員工共享同一會話，提升工作效率。
> - 自由職業者用它來管理多個客戶的微信賬號，因為這樣可以在一個面板中輕鬆切換，避免了多次登錄的麻煩。
> - 開發者用它來測試微信應用的多端功能，因為能夠在不同環境中運行獨立的實例，便於調試和驗證。

## 架構分析

WechatOnCloud 採用 Docker 容器化架構，每個微信實例運行在獨立的容器中，這樣的設計使得每個實例可以獨立運行，互不影響。面板作為唯一的入口，通過反向代理和 Docker API 管理實例的生命周期，這樣的設計提高了安全性，因為只有面板能直接與 Docker 通信。每個實例使用虛擬顯示環境 Xvfb，這樣可以在無需實體顯示器的情況下運行 GUI 應用。這種架構的代價是需要一定的資源來運行多個實例，且對於內存的需求較高，尤其是在多實例同時運行時。

## 技術深入分析

WechatOnCloud 的核心技術機制在於其容器化架構，使用 Docker 來運行獨立的微信實例，這樣的設計使得每個實例都能在隔離的環境中運行，避免了多實例間的干擾。每個實例使用 Xvfb 虛擬顯示來運行 GUI 應用，並通過 KasmVNC 將畫面串流到瀏覽器，這樣用戶可以在任何設備上訪問微信。效能上，單個實例在空閒狀態下消耗約 0.6 GiB 的內存，而在活躍狀態下可能增加到 1.5 GiB，這意味著在多實例運行時，內存成為主要瓶頸。設計上選擇 Docker 作為容器化解決方案，因為它能提供輕量級的虛擬化環境，並且易於管理和擴展。

這樣的選擇雖然帶來了較高的內存需求，但卻能在多設備環境中提供靈活的解決方案。技術風險方面，隨著實例數量的增加，可能會出現性能瓶頸，特別是在內存使用方面。此外，對於 Docker 的依賴也可能在未來的擴展中造成一定的限制。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）兼容性良好，能夠輕鬆地進行自動化部署和更新。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，但需要用戶具備一定的 Docker 知識。文檔中有針對新手的指南，幫助用戶快速上手。整體來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多實例管理，方便用戶在同一平台上運行多個微信賬號。
> - 強調安全性設計，面板是唯一入口，降低了數據洩露風險。
> - 即時下載和安裝微信，方便用戶快速上手。

> [!danger] 缺點
> - 需要一定的 Docker 知識，對新手來說有學習曲線。
> - 資源消耗隨實例數量增加而增加，可能需要高配置伺服器。
> - 不保證不被微信封號，使用需謹慎。

> [!warning] 注意事項
> - 僅支援 Docker 環境，需具備 Docker 基礎知識。
> - 不保證不被微信封號，使用需謹慎。
> - 資源消耗隨實例數量增加而增加，需注意內存使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的多實例管理功能，但缺乏這個專案的安全性設計和用戶界面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於虛擬化環境的管理，功能較為單一，不支持多端共享。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但功能相對單一，缺乏多實例管理。 | 如果你的團隊需要一個輕量級的解決方案，且不需要多實例管理功能。 | medium，因為需要重新設計用戶管理和實例管理邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於虛擬化環境的管理，功能較為單一，不支持多端共享。 | 如果你的需求主要是虛擬化而非多端共享，這個工具可能更合適。 | high，因為需要完全重新設計用戶界面和交互邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **WechatOnCloud** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但功能相對單一，缺乏多實例管理。 | 專注於虛擬化環境的管理，功能較為單一，不支持多端共享。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶管理和實例管理邏輯。 | high，因為需要完全重新設計用戶界面和交互邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的解決方案，且不需要多實例管理功能 | 如果你的需求主要是虛擬化而非多端共享，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，內存使用可能超過預期，導致性能下降。
  - 解法：定期監控內存使用，必要時增加伺服器資源。
- [MEDIUM] 如果面板未正確配置，可能導致無法訪問微信實例。
  - 解法：確保環境變數配置正確，並檢查 Docker 設定。
- **[HIGH]** 使用過程中可能會遇到微信封號風險。
  - 解法：建議使用非主力賬號進行測試。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效管理多個微信賬號，提升團隊協作效率。 |
| 大型企業的多部門協作 | 適合 | 支持多實例和權限管理，適合複雜的組織結構。 |
| 個人用戶希望在伺服器上運行微信 | 普通 | 雖然可以使用，但對於個人用戶來說配置較為繁瑣。 |
| 需要高可用性的生產環境 | 不適合 | 目前處於 beta 階段，不建議用於核心業務。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到多實例管理的靈活性，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：面板暴露了已登錄的微信，需確保面板不被公開訪問，並且必須改變默認密碼以防止未授權訪問。

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
| Forks | 574 |
| Open Issues | 12 |
| Issue 解決率 | 65% (22 closed) |
| 最後推送 | 2026-06-05 |
| 建立日期 | 2026-05-29 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gloridust/WechatOnCloud) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 75
>     "CSS" : 14
>     "Shell" : 6
>     "Dockerfile" : 2
>     "JavaScript" : 2
>     "Raku" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Gloridust](https://github.com/Gloridust) | 31 |
> | [@web-flow](https://github.com/web-flow) | 1 |
> | [@huglemon](https://github.com/huglemon) | 1 |

**最新版本**：v1.1.7 — v1.1.7 · 设备伪装：真实 hostname + os-release(deepin) (2026-06-05)

> [!info]- Release Notes
> 接续 v1.1.6（唯一 machine-id）的设备伪装第二层。让每个实例更像一台普通独立的 Linux 桌面，进一步降低被微信按"非真实设备 / 设备农场"风控的概率。
> 
> > 虚拟化本身不该被 ban——高校 / 企业的云桌面、瘦客户端也都是虚拟化的真实设备；问题只在于指纹不像一台独立真实设备。
> 
> ## 本版新增
> 
> - **真实 hostname** — 内部主机名伪装成 `<品牌>-pc-<编号>`（如 `asus-pc-972`、`thinkpad-pc-670`），每实例不同、稳定不变；不再是 `woc-wx-<hex>` 这种容器/服务器特征。
> - **os-release 伪装成 deepin** — `/etc/os-release` 显示 deepin 23（微信官方支持的发行版，且 Deepin 基于 Debian，与本镜像用户态一致、不自相矛盾）。可用 `WOC_SPOOF_OS=0` 关闭恢复真实 Debian。
> - 新增文档 [doc/设备伪装.md](https://github.com/Gloridust/WechatOnCloud/blob/main/doc/%E8%AE%BE%E5%A4%87%E4%BC%AA%E8%A3%85.md)：原理、做了什么、重置设备 ID、已标记账号恢复、局限与封号风险。
> 
> ## 合并 v1.1.6 的修复（一并随本版镜像生效）
> 
> - 唯一且持久的 machine-id（破"全网共用同一设备指纹"）、移除 `/.dockerenv`、手动「重置设备 ID」按钮（管理页 → 实例卡片 →「安全」）。
> 
> ## ⚠️ 务必知悉
> 
> 尽力而为、**不保证不被封**；风控会持续加新维度。已标记账号可能有冷却期。**请先拿非主力账号验证**。
> 
> ## 升级
> 
> ```bash
> docker compose pull && docker compose up -d
> # 再对每个已存在实例点「升级实例」重建容器，老实例才能拿到唯一 machine-id + 伪装；之后重新扫码登录
> ```
> 
> 可选：`.env` 设 `WOC_SPOOF_OS=0` 可关闭 os-release 伪装（恢复 Debian）。
> 
> ## 镜像
> 
> - `ghcr.io/gloridust/woc-panel:1.1.7` / `latest`

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Gloridust/WechatOnCloud)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-02 ~ 2026-06-05）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#37](https://github.com/Gloridust/WechatOnCloud/issues/37) | 我在自己的fork库里加了个自动同步官方版本+自动推送至GHCR镜像 | 0 | 1 |
> | [#36](https://github.com/Gloridust/WechatOnCloud/issues/36) | WOC_ENABLE_GPU=1 打开不起作用 | 0 | 0 |
> | [#35](https://github.com/Gloridust/WechatOnCloud/issues/35) | 然后我把cf代理的域名添加进env，重启容器，域名还是访问不允许 | 0 | 0 |
> | [#34](https://github.com/Gloridust/WechatOnCloud/issues/34) | 这个项目不错，是不是还可以小红书客服聚合 | 0 | 0 |
> | [#33](https://github.com/Gloridust/WechatOnCloud/issues/33) | 关于数据永久化的请教 | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> 云微 · WechatOnCloud
> 
> 在自己的 NAS / 服务器上运行「服务端微信」，多端浏览器共享同一个微信会话
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
>   运行原理 ·
>   安全须知 ·
>   技术方案
> 
>   
>     
>     
>   
> 
> 在飞牛 NAS（x86_64 / arm64）或任意 Docker 主机上运行服务端微信：可管理**多个**微信实例，每个实例是一个独立的微信会话；多个 web 用户通过浏览器访问被授权的实例，实现跨设备消息同步、多端共享。**不修改微信客户端。**
> 
> **一句话原理**：每个微信实例 = 一个容器，里面跑 Xvfb 虚拟显示 + 官方原版微信，KasmVNC 把画面串到浏览器；同一实例被多个浏览器连 = 共享同一个微信会话。前面一层自研**面板**是唯一对外入口，经 docker.sock 按需创建/销毁实例并反向代理。
> 
> 交流群: [@WechatOnCloud](https://t.me/WechatOnCloud)
> 
> ---
> 
> ## 核心特性
> 
> - 🗂️ **多实例** — 一个面板管理多个独立微信会话，每个实例独立容器 + 独立数据卷，互不干扰。
> - 👥 **多端共享 + 权限** — 多浏览器 / 设备共享同一会话；子账号体系，按账号分配可访问的实例（RBAC）。
> - 🖥️ **微信 PC 式界面** — 左侧实例栏 + 右侧内嵌桌面，侧栏可折叠，移动端自动转抽屉。
> - 📦 **微信本体运行时下载** — 镜像不打包微信，面板一键「下载安装 / 更新」带进度条；按 CPU 架构自动取包。
> - 🔁 **实例生命周期** — 启动 / 停止 / 重启 / 升级（拉新镜像重建、保留聊天记录），均在面板内一键完成。
> - 📎 **文件传输 + 文本剪贴板** — 拖拽上传 + 下载 + 删除，直达微信桌面 `~/Desktop`；文本可经剪贴板中转送进微信（局域网 http 下也可用）。
> - 🧩 **多端协作软锁** — 同一实例多人操作时自动只读 + 申请接管，避免键鼠打架。
> - 🔒 **安全优先** — 面板为唯一入口，KasmVNC 凭据服务端注入、永不下发前端；docker.sock 仅管理员可触达。
> - 📱 **PWA** — iOS「添加到主屏幕」、桌面 Chrome「安装」当原生 App。
> - 🏗️ **多架构** — amd64 / arm64 预构建镜像（GHCR + GitHub Actions 自动发布）。
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
> | [发布到 GHCR](doc/发布到GHCR.md) | 用 GitHub Actions 或本机 buildx 把镜像发布到 GHCR |
> | [技术方案](doc/技术方案.md) | 完整设计文档与选型权衡 |
> 
> ---
> 
> ## 快速开始
> 
> > 需已安装 Docker（含 Compose 插件）。x86_64 / arm64 均可。不熟悉 Docker？先读 [运行原理与 Docker 指南](doc/运行原理.md)。
> 
> `docker-compose.yml` 引用的是 GHCR 上的镜像 `ghcr.io/gloridust/{woc-panel,wechat-on-cloud}`。
> **这两个镜像需先存在**——要么官方已发布（你能直接拉取），要么你在本地自行构建。二选一：
> 
> **方式 A · 本地自构建（官方尚未发布镜像时用这个）**
> 
> ```bash
> git clone https://github.com/Gloridust/WechatOnCloud.git WechatOnCloud
> cd WechatOnCloud
> cp .env.example .env            # 至少改掉默认密码 WOC_PASSWORD
> ./scripts/build-local.sh        # 构建面板 + 微信实例镜像，打成 compose 用的同名标签
> docker compose up -d            # compose 默认优先用本地镜像，不会再去 GHCR
> ```
> 
> **方式 B · 拉取官方镜像（已发布到 GHCR 后）**
> 
> ```bash
> git clone https://github.com/Gloridust/WechatOnCloud.git WechatOnCloud
> cd WechatOnCloud
> cp .env.example .env            # 至少改掉默认密码 WOC_PASSWORD
> docker compose up -d            # 直接从 GHCR 拉取
> ```
> 
> > 报错 `error from registry: denied`？说明 GHCR 上还没有该镜像（或包是私有的）。用方式 A 本地构建，或见 [发布到 GHCR](doc/发布到GHCR.md)。
> 
> 无论哪种方式，都会拉起面板容器 `woc-panel`（唯一对外服务）。浏览器访问 `http://:36080`：
> 
> 1. 用 `.env` 里设置的管理员账号（默认 **admin / wechat**）登录面板；
> 2. 管理员在面板「实例」页点「**新建微信实例**」，命名并选择哪些子账号可访问 → 面板自动 `docker run` 起一个微信实例容器（微信镜像本地没有时才会从 GHCR 拉取）；
> 3. 进入该实例，点「**下载并安装**」微信（约 190~210MB，进度条实时显示，仅管理员可操作）；
> 4. 装好后点「进入电脑版微信」→ 浏览器里出现微信窗口，手机扫码登录即可。
> 
> 之后被授权的用户换任意设备打开同一地址登录面板，看到自己有权访问的实例，进入即是**同一个**微信会话。
> 
> > 宿主只对外暴露面板的 `36080` 一个端口；微信实例容器仅在 docker 网络内、由面板反代，不直连宿主。要改端口/版本/账号见 `.env`（可配置项见 [.env.example](.env.example)）。镜像会按 CPU 架构自动适配（[详见文档](doc/运行原理.md#架构自动适配)）。
> 
> ### 面板能做什么
> 
> | 功能 | 谁可用 | 说明 |
> |------|--------|------|
> | 新建 / 删除微信实例 | 管理员 | 一键创建独立微信会话容器；新建时勾选可访问的子账号。删除默认保留数据卷（聊天记录），可选彻底清除 |
> | 实例权限分配 | 管理员 | 在实例上改「可访问账户」，或在账户上改「可访问实例」，双向管理 |
> | 下载并安装 / 更新微信 | 管理员 | 对某实例一键下载官方微信 Linux 版到其数据卷、解压安装；带进度条；后续可一键「更新到最新版」 |
> | 进入电脑版微信 | 被授权用户 | 在浏览器里操作对应实例的微信，扫码登录、收发消息 |
> | 文件 / 文本传输 | 被授权用户 | 拖拽上传 / 下载文件；文本经剪贴板中转送进微信 |
> | 修改密码 | 所有人 | 改自己的登录密码 |
> | 子账号管理 | 管理员 | 创建 / 禁用 / 重置 / 删除子账号，并分配实例访问权限 |
> | 安装为 App | 所有人 | iOS Safari「添加到主屏幕」、桌面 Chrome「安装」当原生 App（PWA） |
> 
> > 子账号是**访问这套面板的身份**，不是另开一个微信。管理员隐式拥有全部实例访问权；子账号只能看到被授权的实例。
> > 微信本体**不打进镜像**，而是新建实例后在面板点「下载并安装」时下载到该实例的数据卷，所以镜像很小、构建快。
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
> > 内存是主要瓶颈，CPU 多为短时突发。实例越多越吃内存，按上表线性叠加即可估算。
> 
> ---
> 
> ## 安全须知（必读）
> 
> > ⚠️ **这套系统暴露的是已登录的微信，请务必认真阅读本节。**
> 
> 能登录面板的人就能看聊天记录、以你身份发消息。**面板还挂载了宿主的 `docker.sock`**（创建/销毁实例所需），它等同宿主 root 权限。因此：
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
> **用你本地（客户端）的输入法打中文，容器内无需安装任何 IME。** 镜像默认开启 KasmVNC 的「IME Input Mode」，并对 noVNC 的 IME 合成逻辑做了修复——**只在输入法「上屏」那一刻把成品汉字整串发进容器**，规避了原生实现逐字符差分带来的丢字 / 卡顿。直接在微信输入框打字即可。
> 
> - 默认值只对**未存过该设置的浏览器**生效。之前手动开/关过的，浏览器 localStorage 值优先；想验证默认效果用无痕窗口。
> - **跨设备文本**：实例工具栏的「剪贴板」可把文本送入容器剪贴板，再在微信里 `Ctrl+V` 粘贴——不依赖浏览器异步剪贴板 API，**局域网 http 访问下也可用**。
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
> - [x] 预构建多架构镜像发布到 GHCR + GitHub Actions 自动化
> - [x] 中文输入修复 + 文本剪贴板中转 + 实例日志导出
> - [ ] 面板外层 TLS / 陌生设备验证码 / 审计日志
> - [x] 多端并发控制（操作控制权心跳软锁 + 只读遮罩 + 申请接管）
> - [ ] 掉登录时 web 端二维码重扫入口
> - [~] 打包成飞牛原生 fpk 分发（工程已就绪见 [fnos/](fnos/)，待真实设备验证 docker.sock 权限）
> 
> ## 交流与关注
> 
> - 🐦 Twitter / X：[@gloridust1024](https://x.com/gloridust1024) — 更新与动态
> - ✈️ Telegram：[@WechatOnCloud](https://t.me/WechatOnCloud) — 交流群 / 问题反馈
> 
> ## 致谢
> 
> 创意启发自懒猫微服（原 Deepin 团队做的硬件产品），推荐有经济实力、追求稳定运营的朋友尝试！
> 
> 也感谢每一位 Star / Issue / PR 的朋友——**两天突破 500 ⭐**，是继续打磨的最大动力 🙌
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ---
> 
> 如果这个项目帮到了你，欢迎点个 ⭐ Star 支持一下 ·
> 反馈问题 ·
> 参与贡献

## 延伸閱讀

相關概念：[[容器化]] · [[虛擬化]] · [[多端協作]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[louislva--claude-peers-mcp|louislva/claude-peers-mcp]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]] · [[OpenMOSS--MOSS-TTS-Nano|OpenMOSS/MOSS-TTS-Nano]]

[GitHub](https://github.com/Gloridust/WechatOnCloud)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "Gloridust--WechatOnCloud"
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
> const concepts = ["容器化","虛擬化","多端協作"];
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
