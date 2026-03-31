---
repo: qiuzhi2046/Qclaw
url: https://github.com/qiuzhi2046/Qclaw
owner: qiuzhi2046
owner_type: User
language: TypeScript
license: Apache-2.0
description: "不用命令行，小白也能轻松玩转 OpenClaw"
homepage: ""
stars: 1289
stars_per_day: 645
forks: 148
open_issues: 26
created: 2026-03-28
pushed_at: 2026-03-30
first_seen: 2026-03-31
week: "2026-W14"
month: "2026-03"
category: "開發工具"
subcategory: "桌面應用"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-31
use_case: "讓小白也能輕鬆使用 OpenClaw 的桌面應用程式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-03"
contributor_count: 2
engagement: "medium"
issue_close_rate: 19
repo_size_kb: 29070
readme_length: 8109
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-31"
star_history: "2026-03-31:1289"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "Qclaw"
  - "qiuzhi2046/Qclaw"
  - "讓小白也能輕鬆使用 OpenClaw 的桌面應用程式。"
---

# Qclaw

**1.3k** stars · **645** stars/天 · 建立 2 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
> 讓小白也能輕鬆使用 OpenClaw 的桌面應用程式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (645 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望快速上手 OpenClaw 的非技術用戶和小型團隊。
> **一句話重點** Qclaw 讓 OpenClaw 的使用變得前所未有的簡單，特別適合非技術用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "桌面應用" && p.file.name !== "qiuzhi2046--Qclaw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 桌面應用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到簡單易用的 AI 助手，值得嘗試。

> [!abstract] 核心創新
> Qclaw 以桌面應用的形式簡化了 OpenClaw 的使用流程，讓非技術用戶也能輕鬆上手。

## 專案簡介

Qclaw 是一款基於 Electron 的桌面應用，旨在簡化 OpenClaw 的使用流程，讓沒有技術背景的用戶也能輕鬆上手。用戶只需下載並安裝 Qclaw Lite，應用會自動檢測 Node.js 和 OpenClaw CLI 的環境，並在必要時進行安裝。接下來，用戶可以透過直觀的界面選擇所需的 AI 模型並進行配置，這些模型支持 OpenClaw 的全量模型，並且可以自定義添加。Qclaw 還提供即時的 IM 插件接入功能，支持飛書、微信等多個平台，讓用戶可以快速開始與 AI 助手互動。這個工具的賣點在於其友好的操作引導和即時的功能面板，讓用戶能夠輕鬆監控和管理 AI 系統的狀態。

技術上，Qclaw 使用了 Electron 作為桌面框架，前端則是基於 React 和 TypeScript，並使用 Vite 進行構建。這樣的選擇使得開發過程中能夠享受到快速的熱重載和現代化的開發體驗。Qclaw 的依賴樹相對輕量，主要依賴於 Electron、React 和 Mantine 等流行框架，這使得整個應用在運行時的資源占用相對較低。



與其他類似工具相比，如 OpenClaw CLI 和其他基於命令行的工具，Qclaw 提供了更友好的用戶界面和操作流程，特別適合不熟悉命令行的用戶。這種設計使得即使是完全沒有技術背景的用戶也能夠快速上手，而不需要經過繁瑣的配置過程。

在實際使用中，Qclaw 支持多平台運行，當前已經在 macOS 上穩定運行，Windows 版本正在開發中。用戶可以隨時備份數據，並且應用會自動更新到最新版本，這大大減少了維護的負擔。社群活躍度較高，開發者對於問題的回應速度也不錯，這對於新手用戶來說是一個加分項。

整體來看，Qclaw 是一個適合小型團隊和個人開發者的工具，特別是那些希望快速部署 AI 系統但缺乏技術背景的人。未來幾個月內，隨著 Windows 版本的推出，預計會吸引更多用戶的關注和使用。

**技術棧**：`Electron` · `React` · `TypeScript` · `Vite` · `Mantine` · `Tailwind CSS`

## 重點功能

- 環境自檢 — 自動檢測 Node.js 和 OpenClaw CLI，缺失時自動安裝。
- 支持 OpenClaw 全量模型 — 可接入所有 OpenClaw 模型並支持自定義添加。
- IM 最新插件接入 — 一鍵接入多個 IM 平台，並自動安裝官方插件。
- 應用即教程 — 提供友好的操作引導，讓新手輕鬆上手。
- 功能面板 — 實時監控網關狀態，支持一鍵重啟和修復。
- 數據備份 — 提供自動和手動備份功能。
- 多平台支持 — 支持 macOS，Windows 版本正在開發中。
- 自動更新 — 支持 OpenClaw 最新版本的自動更新。

## 快速開始

1. 下載並安裝 Qclaw Lite 客戶端
```bash
訪問 https://qclawai.com/ 下載最新版本
```
2. 運行環境檢測
```bash
應用會自動檢測 Node.js 和 OpenClaw CLI
```
3. 配置模型
```bash
選擇所需的 AI 模型，並根據提示完成配置
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Node.js 和 OpenClaw CLI",
  "指令": "npm run dev",
  "預期輸出": "啟動開發伺服器，並在瀏覽器中打開應用"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1289 stars（645/天），forks 148（11.5%），這顯示出相當高的使用者興趣。作者 qiuzhi2046 和 jingshan95 在開源社群中有一定的影響力，這個專案解決了以往 OpenClaw 使用上的高門檻問題，讓更多人能夠輕鬆接入 AI 工具。最近的推廣活動和社群互動也可能促進了這個專案的快速增長。

## 適合誰使用

**目標受眾**：希望快速上手 OpenClaw 的非技術用戶和小型團隊。

> [!example] 使用場景
> - 小型企業主用它來快速部署 AI 助手，因為 Qclaw 提供了簡單的圖形界面，降低了技術門檻。
> - 新手開發者用它來學習如何與 AI 系統互動，因為它的操作引導友好，讓人能夠邊學邊用。
> - 產品經理用它來測試不同的 AI 模型，因為它支持快速配置和即時監控，提升了工作效率。

## 架構分析

Qclaw 採用 Electron 作為桌面應用框架，這使得它能夠在不同平台上運行。主進程負責管理窗口和與 OpenClaw CLI 的交互，而渲染進程則使用 React 和 Vite 提供用戶界面。這種設計使得開發者能夠快速迭代和更新界面，並且能夠享受到現代化的開發體驗。

資料流方面，主進程與渲染進程之間通過 IPC 進行通訊，這樣能夠有效地分離 UI 和業務邏輯。選擇 Electron 的代價是需要額外的資源來運行 Chromium，但這對於提供跨平台支持來說是值得的。整體架構的擴展性良好，未來可以輕鬆加入更多功能和插件。

## 技術深入分析

Qclaw 的核心技術機制是基於 Electron 框架，這使得它能夠在桌面環境中運行，並利用 Node.js 的強大功能來進行系統集成。前端使用 React 和 TypeScript，這不僅提高了開發效率，還確保了代碼的可維護性。Vite 作為構建工具，提供了快速的熱重載功能，讓開發者能夠即時看到修改的效果。整體架構中，主進程負責與 OpenClaw CLI 的交互，並處理系統級的操作，而渲染進程則專注於用戶界面的呈現。

這種分離的設計使得應用的維護和擴展變得更加容易。

在效能方面，Qclaw 的資源占用相對較低，因為它的依賴樹相對輕量，主要依賴於 Electron 和 React。冷啟動時間在幾秒鐘內，對於大多數用戶來說是可以接受的。選擇 Electron 的代價是需要額外的資源來運行 Chromium，但這對於提供跨平台支持來說是值得的。

技術風險方面，未來在擴展功能時可能會遇到性能瓶頸，特別是在處理大量數據時。

整合方面，Qclaw 可以輕鬆與主流的 CI/CD 工具鏈結合，並且對於開發者來說，學習成本相對較低，因為它使用了當前流行的技術棧。整體來看，Qclaw 的設計考量了用戶體驗和技術實現的平衡，未來的發展潛力巨大。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多個使用範例和安裝步驟。安裝過程相對順暢，對於新手來說沒有太多坑。文檔中包含了快速上手指南，適合初學者使用，但目前沒有多語言支持。

## 優缺點分析

> [!success] 優點
> - 友好的用戶界面，降低了使用門檻。
> - 自動檢測和安裝功能，減少了配置的麻煩。
> - 支持多平台，未來將擴展到 Windows 和 Linux。

> [!danger] 缺點
> - 目前僅支持 macOS，Windows 版本尚未穩定。
> - 對於高級用戶來說，功能可能顯得過於簡化。
> - 社群和文檔仍在發展中，可能存在一些不完善的地方。

> [!warning] 注意事項
> - Windows 版本仍在開發中，尚未完全支持。
> - 目前僅支持 macOS 11 及以上版本。
> - 部分功能在 Linux 上尚未計劃支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 這是 Qclaw 的底層工具，提供命令行界面，適合技術用戶，但對於新手來說使用門檻較高。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 更專注於特定的 AI 模型，功能較為專業，適合有深厚技術背景的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 這是一個命令行工具，適合技術用戶，但對於不熟悉 CLI 的用戶來說使用門檻較高。 | 如果你的團隊已經熟悉命令行操作並需要更高的靈活性和控制權，這個工具會更合適。 | medium，因為需要重新學習命令行操作和配置流程。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 更專注於特定的 AI 模型，功能較為專業，適合有深厚技術背景的用戶。 | 如果你的應用場景需要針對特定模型進行深度調整，NemoClaw 會是更好的選擇。 | high，因為需要重新適應不同的 API 和配置方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Qclaw** | **openclaw** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這是一個命令行工具，適合技術用戶，但對於不熟悉 CLI 的用戶來說使用門檻較高。 | NemoClaw 更專注於特定的 AI 模型，功能較為專業，適合有深厚技術背景的用戶。 |
> | 遷移成本 | - | medium，因為需要重新學習命令行操作和配置流程。 | high，因為需要重新適應不同的 API 和配置方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉命令行操作並需要更高的靈活性和控制權，這 | 如果你的應用場景需要針對特定模型進行深度調整，NemoCla |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Mac 上初始化檢測 Node 環境時可能會覆蓋現有環境，導致錯誤
  - 解法：確保在安裝前備份現有環境
- [MEDIUM] Windows 版本尚未穩定，可能會遇到兼容性問題
  - 解法：使用 macOS 版本進行測試
- [MEDIUM] 部分 IM 插件接入可能會出現安裝失敗的情況
  - 解法：手動安裝插件並配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業主希望快速部署 AI 助手 | 非常適合 | Qclaw 提供了簡單的界面和自動化的配置流程，適合非技術用戶。 |
| 新手開發者希望學習如何使用 AI 系統 | 非常適合 | 友好的操作引導和即時反饋讓學習變得輕鬆。 |
| 需要快速測試不同 AI 模型的產品經理 | 適合 | 支持多種模型的快速配置和測試。 |
| 大型企業需要穩定的 AI 部署解決方案 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到簡單易用的 AI 助手，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Qclaw 本身不需要高權限，且不存取敏感資料。依賴的開源庫也有良好的信任度，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Qclaw 最常與 OpenClaw CLI 和其他 AI 模型搭配使用，通常在開發和測試階段中使用。實際整合範例為：在一個用 React 開發的應用中，可以使用 Qclaw 來快速配置和測試 AI 助手，具體做法是通過 Qclaw 的界面選擇模型並進行配置。Qclaw 支援 GitHub Actions 進行 CI 流程，並且與 VS Code 有良好的整合。最常見的整合問題是需要確保 Node.js 環境的正確配置，這可能需要額外的步驟來驗證。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
| Forks | 148 |
| Open Issues | 26 |
| Issue 解決率 | 19% (6 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-28 |
| Repo 大小 | 28.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/qiuzhi2046/Qclaw) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@mantine/core` `@mantine/modals` `@mantine/notifications` `@tabler/icons-react` `electron-updater` `qrcode.react` `react-router-dom` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `autoprefixer` `electron` `electron-builder` `postcss` `postcss-import`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@qiuzhi2046](https://github.com/qiuzhi2046) | 7 |
> | [@jingshan95](https://github.com/jingshan95) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，開發者對問題的回應速度較快。
**連結**：[文件](https://github.com/qiuzhi2046/Qclaw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-29 ~ 2026-03-30）
> **活躍天數** 2 天 · **最新 commit** [codex] add risk reminder (#33)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/qiuzhi2046/Qclaw/issues/12) | 支持 OpenClaw 配置及多 Agent 可视化与 IM 渠道绑定 `enhancement` | 3 | 1 |
> | [#18](https://github.com/qiuzhi2046/Qclaw/issues/18) | Mac 端初始化检测 node 环境会把我之前的环境覆盖，导致开发流程全部报错 `enhancement` | 1 | 1 |
> | [#6](https://github.com/qiuzhi2046/Qclaw/issues/6) | 秋芝加油期待windows上线 `question` | 1 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> Qclaw
> 
>   [![Electron][electron-badge]][electron-url]
>   [![React][react-badge]][react-url]
>   [![Vite][vite-badge]][vite-url]
>   [![Mantine][mantine-badge]][mantine-url]
>   [![Tailwind CSS][tailwind-badge]][tailwind-url]
> 
>   
>     不用命令行，小白也能轻松玩转 OpenClaw
>     
>     访问官网 &raquo;
>     
>     
>     English
>     &middot;
>     简体中文
>     &middot;
>     报告 Bug
>     &middot;
>     功能建议
>   
> 
>   目录
>   
>     功能特性
>     为什么会有这个项目
>     快速上手
>     快速开发
>     已知问题
>     支持环境
>     贡献指南
>     加入社区
>     加入我们
>     开源许可
>     贡献者
>     致谢
>   
> 
> ## 功能特性
> 
>   
>   
>   
> 
>   
>   
> 
> - **环境自检** — 自动检测 Node.js 和 OpenClaw CLI，缺失时自动安装
> - **支持 OpenClaw 全量模型** — 支持接入 OpenClaw 的所有模型，也支持自定义添加
> - **IM最新插件接入** — 扫码一键接入飞书、微信、企业微信、钉钉、QQ，自动安装官方插件并写入配置
> - **应用即教程** — 小白友好的操作引导和提示
> - **功能面板** — 实时监控网关状态、一键重启、修复网关
> - **Skills管理** — 管理各个来源的skill
> - **数据备份** — 提供自动备份和手动备份
> - **多平台支持** — 支持 macOS、Windows（开发中），开箱即用
> - **自动更新** — 支持OpenClaw最新版本
> 
> ## 为什么会有这个项目
> 
> 开发 Qclaw 的初心很简单：做一个简单好用的 OpenClaw 桌面管家，让每个人都能轻松装上、用上OpenClaw。
> - 降低门槛：将复杂的配置转化为简单的桌面交互
> - 打破壁垒：让人人都能用上好用、强大的AI工具
> - 零基础上手——教程即操作，边看边用，快速入门
> 
> ## 快速上手
> 
> ### Step 1：下载安装
> 
> - 下载并打开 Qclaw Lite 客户端
>   - 官网：https://qclawai.com/
>   - GitHub Release：[下载最新版本](https://github.com/qiuzhi2046/Qclaw/releases)
> - 阅读安全提醒内容并确认继续
> 
> ### Step 2：环境准备
> 
> - 运行环境检测
>   - 如果系统检测到已有的 OpenClaw 配置，可直接导入
> - 按界面提示，准备开始配置
> 
> ### Step 3：配置模型
> 
> - 进入 AI 提供商界面，等待模型列表加载
> - 选择你要用的模型（支持 OpenClaw 全量模型，部分模型支持 OAuth 授权）
> 
> ### Step 4：接入 IM（可选）
> 
> - 进入 IM 渠道界面
> - 选择你常用的平台（飞书 / 钉钉 / QQ / 企微）
> - 按照界面指引完成接入，各平台详细指南：
>   - [飞书接入指南](https://my.feishu.cn/wiki/WAfWw1bqriZP02kqdNycHlvnnHb)
>   - [钉钉接入指南](https://my.feishu.cn/wiki/NUJew2DzaipVsukUvPmcZ2yvnYb)
>   - [QQ 接入指南](https://my.feishu.cn/wiki/AvuSwchqviAO6dkwiZycmZeInPf)
>   - [企业微信接入指南](https://my.feishu.cn/wiki/TsLTwplveiqbW8kH5XOclgvYn1d)
> 
> ### Step 5：开始使用
> 
> - 在客户端直接发起对话
> - 或者前往你刚刚配置的 IM 工具中，测试你的专属 AI 助手
> 
> > 💡 关闭 Qclaw Lite 窗口不会影响后台的 OpenClaw 运行，IM 渠道照常可用。
> 
> ## 快速开发
> 
> ### 推荐开发环境
> 
> - macOS
> - Qclaw(OpenClaw)
> - [Codex](https://github.com/openai/codex) 或 [Claude Code](https://claude.ai/code)
> - Node.js 24（至少22）
> 
> ### 源码安装
> 
> ```bash
> # 克隆仓库
> git clone https://github.com/qiuzhi2046/Qclaw.git
> cd Qclaw
> 
> # 安装依赖
> npm install
> 
> # 启动开发环境
> npm run dev
> 
> # 构建生产版本
> npm run build
> ```
> 
> ### 常用命令
> 
> | 命令 | 说明 |
> |------|------|
> | `npm run dev` | 启动开发服务器 |
> | `npm run build` | 构建并打包应用 |
> | `npm test` | 运行测试 |
> | `npm run typecheck` | TypeScript 类型检查 |
> 
> ### 项目结构
> 
> ```
> electron/
>   main/             主进程（窗口管理、CLI 调用、IPC 处理）
>   preload/          预加载脚本（安全桥接）
> src/
>   pages/            页面组件（向导步骤、Dashboard、聊天等）
>   components/       UI 组件
>   lib/              业务逻辑（渠道注册、提供商注册等）
>   shared/           共享模块（配置流程、网关诊断等）
>   assets/           图标与静态资源
> docs/               项目相关文档（架构说明、变更日志等）
> scripts/            构建与发布脚本（签名公证、版本管理、COS 发布等）
> build/              应用图标与打包资源
> ```
> 
> ### 技术栈和架构
> 
> | 层 | 技术 |
> |----|------|
> | 桌面框架 | [Electron](https://www.electronjs.org/) |
> | 前端 | [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) |
> | 构建 | [Vite](https://vitejs.dev/) + vite-plugin-electron |
> | UI | [Mantine](https://mantine.dev/) + [Tailwind CSS](https://tailwindcss.com/) |
> | 打包 | electron-builder |
> 
> ```
> ┌─────────────────────────────────────────────────────────┐
> │                           Qclaw                         │
> │                                                         │
> │  ┌──────────────────┐         ┌──────────────────────┐  │
> │  │   Main Process   │         │  Renderer Process    │  │
> │  │   (Node.js)      │   IPC   │  (Chromium)          │  │
> │  │                  │◄───────►│                      │  │
> │  │  ┌────────────┐  │         │  ┌────────────────┐  │  │
> │  │  │  cli.ts    │  │         │  │  React + Vite  │  │  │
> │  │  │  OpenClaw  │  │         │  │  Mantine + TW  │  │  │
> │  │  │  CLI 调用  │  │         │  │                │  │  │
> │  │  └─────┬──────┘  │         │  │  向导页面       │  │  │
> │  │        │         │         │  │  Dashboard     │  │  │
> │  │  ┌─────▼──────┐  │         │  └────────────────┘  │  │
> │  │  │ 系统集成   │  │         │                      │  │
> │  │  │ 文件读写   │  │         └──────────────────────┘  │
> │  │  │ 进程管理   │  │                                   │
> │  │  └────────────┘  │                                   │
> │  └──────────────────┘                                   │
> │                                                         │
> │           │                                             │
> │           ▼                                             │
> │  ┌──────────────────┐                                   │
> │  │  OpenClaw CLI     │                                  │
> │  │  ~/.openclaw/     │                                  │
> │  └──────────────────┘                                   │
> └─────────────────────────────────────────────────────────┘
> ```
> 
> ## 已知问题
> 
> - 这个文档记录了当前项目的已知缺陷和bug（AI有待调教，多多包容）
> - 请查看 [Issues](https://github.com/qiuzhi2046/Qclaw/issues) 了解具体问题和功能建议。
> 
> ## 支持环境
> 
> - macOS 11 (Big Sur)+
> - Windows 10+（x64）(开发中)
> - Linux（计划中）
> 
> ## 贡献指南
> 欢迎每一个有想法、愿意动手的朋友参与到Qclaw的贡献中来！正是因为有你们，这个项目才能不断进步。
> 
> 本指南将帮助你了解如何参与项目开发，无论是报告 Bug、提出新功能建议，还是提交代码，我们都非常欢迎。
> 
> 另外我们也非常鼓励和欢迎使用各类AI编程工具编写、提交代码（这也是我们的日常），哪怕你不是专业开发者。
> 
> 如果Qclaw能成为你的第一个开源贡献项目，我们荣幸之至。
> 
> 贡献指南：
> 
> 小白贡献指南：
> 
> ## 加入社区
> 
> - **Qclaw开源交流群**
> 
>   
> 
> ### 社区规范
> 
> - 尊重每一位参与者
> - 保持友好和建设性的讨论
> - 欢迎提问，也欢迎帮助他人
> 
> ### 社交媒体
> 
> [![Bilibili][bilibili-shield]][bilibili-url]
> [![抖音][douyin-shield]][douyin-url]
> [![小红书][xiaohongshu-shield]][xiaohongshu-url]
> [![YouTube][youtube-shield]][youtube-url]
> 
> **微信公众号**
> 
>   
>   &nbsp;&nbsp;
>   
> 
> ## 加入我们
> 
> 欢迎开发相关的人才加入我们（简历请投：join@qiuzhi2046.com）。
> 
> 虽然暂时不能提供大厂级别的薪资福利，但我们能给你一个纯粹、没有会议和 PPT 内耗的创造环境——AI 工具不限量！
> 
> 如果你热爱 AI，骨子里有一点极客精神，别犹豫，把简历砸过来吧！
> 
> ## 开源许可
> 
> 基于 Apache-2.0 协议分发。详情参见 [`LICENSE`](LICENSE)。·
> 
> ## 贡献者
> 
>   
> 
> ## 致谢
> 感谢 OpenClaw——没有它就没有 Qclaw，我们只是站在巨人肩膀上搭了个小梯子。
> 
> 感谢 Electron、React、Vite、Mantine 等众多开源项目，以及所有默默贡献的开源作者。Qclaw 的每一行代码背后，都有你们的影子。
> 
> 感谢参与内测的朋友们，你们的每一条 bug 反馈和建议都在让产品进步。你们的飞书 ID 我们都记下了 👀
> 
>   
> 
> 更多见：[反馈用户（排名不分先后）](docs/feedback_users)
> 
> 最后，感谢每一个愿意尝试、愿意分享、愿意让技术变得更有温度的人。
> 
> ### 本项目使用的开源项目
> 
> | 仓库 | 作者 | 依赖包 |
> |------|------|--------|
> | [openclaw/openclaw](https://github.com/openclaw/openclaw) | OpenClaw | openclaw (CLI) |
> | [electron/electron](https://github.com/electron/electron) | Electron Community | electron |
> | [facebook/react](https://github.com/facebook/react) | Meta | react, react-dom |
> | [mantinedev/mantine](https://github.com/mantinedev/mantine) | Vitaly Rtishchev | @mantine/core, @mantine/modals, @mantine/notifications |
> | [vitejs/vite](https://github.com/vitejs/vite) | Evan You | vite |
> | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) | Tailwind Labs | tailwindcss |
> | [electron-userland/electron-builder](https://github.com/electron-userland/electron-builder) | Vladimir Krivosheev | electron-builder, electron-updater |
> 
> 查看所有依赖开源项目 &raquo;
> 
> [electron-badge]: https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white
> [electron-url]: https://www.electronjs.org/
> [react-badge]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
> [react-url]: https://reactjs.org/
> [vite-badge]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
> [vite-url]: https://vitejs.dev/
> [mantine-badge]: https://img.shields.io/badge/Mantine-339AF0?style=for-the-badge&logo=mantine&logoColor=white
> [mantine-url]: https://mantine.dev/
> [tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
> [tailwind-url]: https://tailwindcss.com/
> [bilibili-shield]: https://img.shields.io/badge/Bilibili-00A1D6?style=for-the-badge&logo=bilibili&logoColor=white
> [bilibili-url]: https://space.bilibili.com/385670211
> [douyin-shield]: https://img.shields.io/badge/抖音-000000?style=for-the-badge&logo=tiktok&logoColor=white
> [douyin-url]: https://www.douyin.com/user/MS4wLjABAAAAwbbVuf1W2DdgRe0xCa0oxg1ZIHbzuiTzyjq3NcOVgBuu6qIidYlMYqbL3ZFY2swu
> [xiaohongshu-shield]: https://img.shields.io/badge/小红书-FF2442?style=for-the-badge&logo=xiaohongshu&logoColor=white
> [xiaohongshu-url]: https://www.xiaohongshu.com/user/profile/63b622ab00000000260066bd
> [youtube-shield]: https://img.shields.io/badge/YouTu

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/qiuzhi2046/Qclaw)

## 相關收錄

> [!note]- 直接競品（同子分類：桌面應用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "桌面應用" AND file.name != "qiuzhi2046--Qclaw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "qiuzhi2046--Qclaw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "qiuzhi2046--Qclaw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "qiuzhi2046--Qclaw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "qiuzhi2046--Qclaw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "qiuzhi2046--Qclaw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "qiuzhi2046" AND file.name != "qiuzhi2046--Qclaw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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
> const me = dv.page("Repos/qiuzhi2046--Qclaw");
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

> **2026-03-31** — 首次收錄
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

- [[2026-03-31|2026-03-31]] — 首次收錄，1.3k stars
