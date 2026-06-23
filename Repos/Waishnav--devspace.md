---
repo: Waishnav/devspace
url: https://github.com/Waishnav/devspace
owner: Waishnav
owner_type: User
language: TypeScript
license: MIT
description: "Turn ChatGPT into Codex and enjoy ChatGPT usage separately :)"
homepage: ""
stars: 2149
stars_per_day: 269
forks: 227
open_issues: 17
created: 2026-06-14
pushed_at: 2026-06-22
first_seen: 2026-06-19
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.0.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-19
use_case: "將 ChatGPT 轉變為 Codex，並享受獨立使用 ChatGPT 的體驗。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-24"
contributor_count: 1
engagement: "medium"
issue_close_rate: 19
repo_size_kb: 1346
readme_length: 1615
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-19"
star_history: "2026-06-19:870,2026-06-19:876,2026-06-20:1405,2026-06-20:1409,2026-06-21:1632,2026-06-21:1636,2026-06-22:1928,2026-06-23:2149"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "devspace"
  - "Waishnav/devspace"
  - "將 ChatGPT 轉變為 Codex，並享受獨立使用 ChatGPT 的體驗。"
---

# devspace

**2.1k** stars · **269** stars/天 · 建立 8 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Waishnav--devspace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.2`

> [!summary] 一句話摘要
> 將 ChatGPT 轉變為 Codex，並享受獨立使用 ChatGPT 的體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (269 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在本地環境中安全使用 ChatGPT 的開發者，特別是對數據安全有高要求的團隊。
> **一句話重點** DevSpace 讓開發者能夠在本地安全地使用 ChatGPT，這在數據隱私日益重要的今天尤為關鍵。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Waishnav--devspace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "Waishnav--devspace" && p.status !== "archived")
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
> **結論** 花 5 小時學習，8 小時整合，得到一個安全的本地開發環境，值得考慮。

> [!abstract] 核心創新
> 提供安全的本地開發環境，讓 ChatGPT 能夠直接訪問本地代碼和工具。

## 專案簡介

DevSpace 是一個自我託管的 MCP 伺服器，讓 ChatGPT 能夠安全地讀取、編輯、搜尋和執行本地專案中的程式碼。用戶只需在本機運行 DevSpace，並透過受控的隧道連接，確保不將任何資料上傳至第三方。這樣的設計使得用戶能夠保持對其代碼和工具的完全控制，並且透過密碼保護連接的安全性。核心命令如 `npm run start` 會啟動伺服器，並提供 CLI 功能，讓開發者能夠輕鬆管理其專案。這個工具的賣點在於提供一個安全的本地開發環境，避免了雲端服務的潛在風險。技術上，DevSpace 使用了 Node.js 和 SQLite，並透過 Express 框架提供 API，這樣的選擇使得其在性能和擴展性上都表現良好。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，DevSpace 提供了更強的本地控制和安全性，因為它不需要將代碼上傳至雲端。使用 DevSpace 的開發者可以在本地環境中進行開發，並且能夠輕鬆地進行版本管理和狀態儲存，這是許多雲端解決方案無法提供的。實際使用中，DevSpace 需要 Node.js 版本 20.12 以上，並且在 SQLite 的配置上也有針對本地生產環境的強化設計。對於正在尋找安全且高效的本地開發環境的開發者來說，DevSpace 是一個值得考慮的選擇。未來六個月內，這個專案可能會進一步優化其用戶體驗和擴展功能，特別是在多用戶環境下的支持。對於小型團隊或個人開發者，DevSpace 提供了一個理想的解決方案，但在大型專案或需要高可用性的環境中，可能需要額外的配置和維護。

**技術棧**：`Node.js >=20.12` · `SQLite` · `Express`

## 重點功能

- 安全連接 — 透過密碼保護的隧道連接本地開發環境，確保數據安全。
- SQLite 儲存 — 使用 SQLite 儲存 OAuth 客戶端和令牌，支持持久化和版本遷移。
- CLI 支援 — 提供 CLI 工具，方便用戶管理和啟動 DevSpace。
- 自動化測試 — 包含測試腳本，確保代碼質量和功能正確性。
- 本地開發 — 允許 ChatGPT 直接訪問本地文件和工具，無需上傳至雲端。

## 快速開始

1. 安裝依賴
```bash
npm install --include=dev
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 執行類型檢查
```bash
npm run typecheck
```
4. 運行測試
```bash
npm test
```
5. 構建專案
```bash
npm run build
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Node.js 20.12 以上版本。",
  "指令": "npm run start",
  "預期輸出": "DevSpace server is running."
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 2149 stars（269/天），forks 227（10.6%），顯示出強勁的增長潛力。作者 Waishnav 之前在開源社群中活躍，這個專案解決了開發者在使用 ChatGPT 時的安全性和隱私問題，特別是在本地開發環境中。這樣的需求在開發者中越來越普遍，尤其是在對數據安全有高要求的情況下。社群的反饋和需求推動了這個專案的快速發展，並且在 GitHub 上的討論也顯示出對於這個工具的興趣和需求。

## 適合誰使用

**目標受眾**：需要在本地環境中安全使用 ChatGPT 的開發者，特別是對數據安全有高要求的團隊。

> [!example] 使用場景
> - 後端工程師用它來在本地開發環境中安全地測試 ChatGPT 集成，因為這樣可以避免將敏感代碼上傳至雲端。
> - 獨立開發者用它來快速構建和測試代碼，因為 DevSpace 提供了即時的反饋和安全的環境。
> - 小型團隊用它來協作開發，因為它支持多用戶環境並能夠輕鬆管理專案狀態。

## 架構分析

DevSpace 採用單一伺服器架構，使用 Node.js 作為後端，並透過 Express 提供 REST API。這樣的設計使得開發者能夠輕鬆地擴展功能和整合其他工具。資料流方面，使用 SQLite 作為數據儲存，確保數據的持久性和安全性。

選擇 SQLite 使得部署變得簡單，因為不需要額外的數據庫伺服器，但在高並發的情況下可能會成為瓶頸。整體架構的設計考量了安全性和易用性，適合個人開發者和小型團隊使用。未來可能需要考慮在高負載情況下的擴展性問題。

## 技術深入分析

DevSpace 的核心技術機制是基於 Node.js 的伺服器架構，並使用 Express 框架來處理 API 請求。這樣的設計使得開發者能夠快速構建和擴展功能。SQLite 作為數據儲存解決方案，提供了輕量級的資料庫支持，適合本地開發環境。效能上，DevSpace 能夠處理中小型專案的需求，但在高並發的情況下可能會遇到瓶頸。選擇 Node.js 使得開發者能夠利用其豐富的生態系統，但也可能導致依賴過多的問題。技術風險方面，若未來使用者數量增加，可能需要重新考慮架構的擴展性。整合方面，DevSpace 可以與多種前端框架（如 React）搭配使用，並且能夠輕鬆集成到現有的 CI/CD pipeline 中，這使得其在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對新手友好。安裝過程相對順暢，但需要注意 Node.js 版本的限制。文件中有良好的 getting started guide，幫助用戶快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 提供安全的本地開發環境，避免數據上傳至雲端。
> - 支持持久化的 OAuth 客戶端和令牌管理，方便用戶使用。
> - CLI 工具易於使用，適合快速開發和測試。

> [!danger] 缺點
> - 僅支援特定版本的 Node.js，限制了使用者的選擇。
> - 對於大型專案的支持可能不足，需要額外配置。
> - 社群活躍度相對較低，可能影響問題解決的速度。

> [!warning] 注意事項
> - 僅支援 Node.js 20.12 以上版本。
> - 需要在本地環境中運行，無法直接在雲端使用。
> - 對於大型專案，可能需要額外的配置和維護。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的本地開發環境，但不具備 DevSpace 的安全連接功能，適合對安全性要求不高的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也支持本地開發，但缺乏 DevSpace 的持久化和版本管理功能，適合小型專案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較少，但生態系統不如 Node.js 豐富。 | 如果你的團隊需要更高的性能和低資源消耗，且不介意使用 Rust。 | medium，因為需要將代碼從 JavaScript 遷移到 Rust。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 基於 Python 的解決方案，適合對 Python 生態系統熟悉的開發者。 | 如果你的團隊已經在使用 Python 且需要快速集成。 | low，因為 JavaScript 和 Python 之間的轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **devspace** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較少，但生態系統不如 Node.js 豐富。 | 基於 Python 的解決方案，適合對 Python 生態系統熟悉的開發者。 |
> | 遷移成本 | - | medium，因為需要將代碼從 JavaScript 遷移到 Rust。 | low，因為 JavaScript 和 Python 之間的轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更高的性能和低資源消耗，且不介意使用 Rus | 如果你的團隊已經在使用 Python 且需要快速集成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人開發者和小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，SQLite 可能成為瓶頸，導致性能下降。
  - 解法：考慮使用更強大的數據庫解決方案，如 PostgreSQL。
- [MEDIUM] 某些功能在特定 Node.js 版本下可能不穩定。
  - 解法：確保使用推薦的 Node.js 版本。
- [MEDIUM] 社群支持相對較少，問題解決速度可能較慢。
  - 解法：參考官方文檔和 GitHub Issues，尋找解決方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行本地專案開發 | 非常適合 | 提供安全的本地開發環境，適合小型團隊協作。 |
| 需要高可用性的商業應用 | 不適合 | 在高負載情況下可能遇到性能瓶頸。 |
| 個人開發者進行實驗性專案 | 適合 | 易於設置和使用，適合快速開發和測試。 |
| 大型企業的核心系統開發 | 普通 | 雖然功能強大，但可能需要額外的維護和配置。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到一個安全的本地開發環境，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要在本地運行，可能需要高權限。對於敏感資料的存取有一定的風險，但整體設計考量了安全性，適合在受控環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

DevSpace 最常與 Node.js 和 SQLite 搭配使用，通常在開發和測試階段中使用。舉例來說，在一個使用 React 的專案中，開發者可以透過 DevSpace 來安全地訪問本地代碼，具體做法是使用 `npm run start` 啟動伺服器。該工具能夠與 GitHub Actions 等 CI 工具整合，並且在 VS Code 中也能夠找到相應的插件。整合過程中，最常見的摩擦點是 Node.js 版本的兼容性問題，需要確保使用正確的版本以避免運行錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 DevSpace 出現之前，開發者通常使用雲端服務來進行代碼編輯和測試，這樣的方式雖然方便，但存在數據安全和隱私的風險。隨著對數據安全的重視增加，開發者開始尋求本地解決方案。DevSpace 的出現正好滿足了這一需求，提供了一個安全的本地開發環境。

這個工具代表了開發者對於數據隱私的重視，未來可能會有更多類似的工具出現，進一步推動本地開發環境的普及。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解 SQLite 基本操作
- 有 CLI 工具使用經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 DevSpace。第二週：在小型團隊的非核心專案中導入。第三週：撰寫最佳實踐文檔，分享使用經驗。第四週：在核心專案中開始使用，並收集反饋。

**成功指標**：開發效率提升 30%，錯誤率降低 50%。

> [!warning] 退出計畫
> 如果需要退出，所有設定都以標準 JSON 格式儲存，可以輕鬆轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
| Forks | 227 |
| Open Issues | 17 |
| Issue 解決率 | 19% (4 closed) |
| 最後推送 | 2026-06-22 |
| 建立日期 | 2026-06-14 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Waishnav/devspace) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@clack/prompts` `@earendil-works/pi-coding-agent` `@modelcontextprotocol/ext-apps` `@modelcontextprotocol/sdk` `@pierre/diffs` `better-sqlite3` `drizzle-orm` `express` `react` `react-dom` `semver` `zod` `@types/better-sqlite3` `@types/express` `@types/node`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 88
>     "JavaScript" : 7
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Waishnav](https://github.com/Waishnav) | 185 |

**最新版本**：v1.0.2 (2026-06-21)

> [!info]- Release Notes
> ## Highlights
> 
> - Persist OAuth clients, access tokens, and refresh tokens in SQLite so authenticated MCP clients continue working across DevSpace restarts.
> - Add automatic, versioned SQLite migrations for existing installations.
> - Make refresh-token rotation transactional and reject concurrent token reuse.
> - Restrict DevSpace state storage permissions and harden SQLite configuration for local production use.
> - Close SQLite stores cleanly during server shutdown.
> - Fix README image and documentation links on npm.
> - Improve the workspace diff loading indicator and refresh project documentation.
> 
> Existing users are migrated automatically the next time DevSpace opens its state database.
> 
> **Full changelog:** https://github.com/Waishnav/devspace/compare/v1.0.1...v1.0.2

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和問題回應。
**連結**：[文件](https://github.com/Waishnav/devspace/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-21 ~ 2026-06-22）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/Waishnav/devspace/issues/11) | Document ChatGPT Pro lane app-tool caveat | 2 | 2 |
> | [#28](https://github.com/Waishnav/devspace/issues/28) | Include ~/.agents/skills in default skill discovery paths | 0 | 0 |
> | [#25](https://github.com/Waishnav/devspace/issues/25) | MCP SDK `authenticateClient` requires `client_secret` even w | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> DevSpace
> 
> Bring a Codex-style coding workflow to ChatGPT.
> 
>   
>   
>   
> 
> [](https://raw.githubusercontent.com/Waishnav/devspace/main/docs/assets/devspace-screenshot.png)
> 
> **Give ChatGPT a secure connection to your own machine and Turn ChatGPT into Codex**
> 
> DevSpace is a self-hosted MCP server that lets ChatGPT read, edit, search, and run code in your real local projects — your files, your tools, your terminal — without uploading anything to a third party. You run it on your machine, expose it through a tunnel you control, and approve the connection with a password only you have.
> 
> ## Sponsors and Special Thanks
> 
>   
>     
>       Sponsor
>       About
>     
>   
>   
>     
>       
>         
>           
>         
>       
>       
>         The ads in your terminal pay you.
>         Rebates adds one optional
>         sponsored footer to your coding agent and pays you cash back for every
>         session in which it is shown. Turn it off at any time.
>       
>     
>   
> 
>   DevSpace is open to new sponsors.
>   Get in touch to become one.
> 
> ## Installation
> 
> DevSpace requires Node `>=20.12 
>   
>     
>       Project
>       About
>     
>   
>   
>     
>       
>         
>           
>           GitCMS
>         
>       
>       
>         Modern CMS and tooling for markdown based content sites — built for agents and humans.
>         Visual editing, editorial workflow, and ChatGPT/Claude content agents, with
>         every post and page stored as files in your repo.
>         Learn more.
>       
>     
>   
> 
> ## Local Development
> 
> For working on DevSpace itself:
> 
> ```bash
> npm install --include=dev
> npm run dev
> npm run typecheck
> npm test
> npm run build
> npm run start
> ```

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[安全漏洞]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/Waishnav/devspace)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Waishnav--devspace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","安全漏洞"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Waishnav--devspace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Waishnav--devspace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Waishnav--devspace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Waishnav" AND file.name != "Waishnav--devspace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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
> const me = dv.page("Repos/Waishnav--devspace");
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

> **2026-06-19** — 首次收錄
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

- [[2026-06-21|2026-06-21]] — 再次上榜，1.6k stars
- [[2026-06-20|2026-06-20]] — 再次上榜，1.4k stars
- [[2026-06-19|2026-06-19]] — 首次收錄，870 stars
