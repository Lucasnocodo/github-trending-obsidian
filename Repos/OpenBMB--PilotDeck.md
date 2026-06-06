---
repo: OpenBMB/PilotDeck
url: https://github.com/OpenBMB/PilotDeck
owner: OpenBMB
owner_type: Organization
language: TypeScript
license: AGPL-3.0
description: "Task-oriented AI Agent productivity platform"
homepage: "https://pilotdeck.openbmb.cn"
stars: 3013
stars_per_day: 215
forks: 315
open_issues: 80
created: 2026-05-22
pushed_at: 2026-06-05
first_seen: 2026-05-29
week: "2026-W22"
month: "2026-05"
category: "生產力"
subcategory: "AI 代理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-29
use_case: "一個以任務為導向的 AI 代理生產力平台，重新定義操作邊界和記憶演進。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-01"
contributor_count: 5
engagement: "medium"
issue_close_rate: 32
repo_size_kb: 18455
readme_length: 9950
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-29"
star_history: "2026-05-29:1524,2026-05-29:1540,2026-05-30:1980,2026-05-31:2262,2026-06-01:2545,2026-06-02:2738,2026-06-03:2850,2026-06-04:2914,2026-06-05:2963,2026-06-06:3013"
tags:
  - github
  - "category/生產力"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "PilotDeck"
  - "OpenBMB/PilotDeck"
  - "一個以任務為導向的 AI 代理生產力平台，重新定義操作邊界和記憶演進。"
---

# PilotDeck

**3.0k** stars · **215** stars/天 · 建立 14 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/OpenBMB--PilotDeck");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 一個以任務為導向的 AI 代理生產力平台，重新定義操作邊界和記憶演進。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (215 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要高效管理多任務的開發者和團隊，特別是在 AI 代理技術上有需求的使用者。
> **一句話重點** PilotDeck 的白盒記憶和智能路由功能使其在多任務管理上具備優勢，特別適合需要高效資源管理的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理" && p.file.name !== "OpenBMB--PilotDeck" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的多任務管理工具，值得投入。

> [!abstract] 核心創新
> PilotDeck 提供了可追蹤的白盒記憶管理和智能路由功能，這在當前的 AI 代理工具中是獨特的。

## 專案簡介

PilotDeck 是一個開源的 AI 代理操作系統，專注於多任務生產力，並以「工作空間」為核心概念。使用者可以透過簡單的 CLI 指令如 `pilotdeck` 啟動伺服器，並利用 `pilotdeck status` 檢查運行狀態。這個平台的設計重點在於提供白盒記憶管理，讓使用者能夠追蹤和編輯記憶條目，避免傳統黑盒代理的記憶污染問題。此外，PilotDeck 具備智能路由功能，能根據任務難度自動選擇合適的模型，從而顯著降低運行成本。它還支持持續運行的背景執行，讓代理在用戶離開時自動發現任務並生成結果。

這些設計使得 PilotDeck 在處理多項目並行工作時，能夠有效管理資源和提高生產力。整體架構使用 TypeScript 和 Node.js，並且以 Model Context Protocol (MCP) 為基礎，確保系統的擴展性和兼容性。與其他工具相比，PilotDeck 提供了更高的記憶可追蹤性和任務成本優化，特別適合需要長期運行和多任務處理的場景。使用者在實際操作中可能會遇到一些配置上的挑戰，但整體上，PilotDeck 是一個值得考慮的生產力工具，特別是對於需要高效管理多項任務的開發者和團隊。

**技術棧**：`TypeScript` · `Node.js` · `Docker`

## 重點功能

- 工作空間級隔離 — 每個項目擁有獨立的文件系統和記憶存儲，避免任務間的干擾。
- 可追蹤的白盒記憶 — 記憶生成和存取過程透明，使用者可隨時編輯和刪除記憶條目。
- 智能路由與成本優化 — 根據任務難度自動選擇模型，顯著降低運行成本。
- 持續運行的背景執行 — 代理在用戶離開時自動發現任務並生成結果。
- 開放的插件架構 — 支持自定義工具和技能，方便擴展功能。

## 快速開始

1. 安裝 PilotDeck
```bash
curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
```
2. 啟動伺服器
```bash
pilotdeck
```
3. 檢查運行狀態
```bash
pilotdeck status
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 3013 stars（215/天），forks 315（10.5%），顯示出穩定的增長潛力。這個專案由清華大學和其他機構共同開發，針對多任務生產力的需求，提供了之前缺乏的白盒記憶和智能路由功能。隨著 AI 代理技術的興起，PilotDeck 的設計理念正好滿足了市場的需求。社群的活躍度也顯示出對於這個工具的期待和支持。

## 適合誰使用

**目標受眾**：需要高效管理多任務的開發者和團隊，特別是在 AI 代理技術上有需求的使用者。

> [!example] 使用場景
> - 開發者用它來管理多個項目的 AI 代理，因為 PilotDeck 的工作空間隔離能有效避免記憶污染。
> - 產品經理用它來自動生成市場調查報告，因為智能路由功能能降低成本並提高效率。
> - 內容創作者用它來推廣社交媒體內容，因為它能在背景中持續運行，並自動生成結果文件。

## 架構分析

PilotDeck 的架構基於工作空間的概念，將每個項目獨立隔離，這樣可以避免記憶污染。系統使用 TypeScript 和 Node.js，並且支持 Model Context Protocol (MCP)，確保與其他 AI 模型的兼容性。資料流方面，記憶的生成、提取、存儲和檢索都是可見的，這樣用戶可以追蹤和編輯記憶條目。選擇這種架構的代價是需要額外的配置來支持多個模型和插件的擴展。整體上，這樣的設計使得 PilotDeck 在處理多任務時能夠高效且靈活，但也可能在初始設置上需要更多的時間和精力。

## 技術深入分析

PilotDeck 的核心技術機制圍繞著工作空間的概念，這使得每個項目都能獨立運行，避免了記憶的交叉污染。系統使用 TypeScript 和 Node.js，並且整合了 Model Context Protocol (MCP)，這樣的選擇使得 PilotDeck 能夠與多種 AI 模型兼容。效能上，PilotDeck 在處理多任務時能夠保持高效，並且智能路由功能能夠根據任務的難度自動選擇合適的模型，從而降低運行成本。設計上，這種架構的代價是需要用戶在初始設置時進行較多的配置，特別是在支持多個模型和插件的情況下。技術風險方面，隨著用戶數量的增加，系統的資源需求可能會增加，這可能會影響到性能。整合方面，PilotDeck 與主流的開發工具鏈（如 VS Code）相容性良好，但在某些情況下可能需要額外的適配器來支持特定功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢，但對於新手來說，配置可能會有些挑戰。整體上，文件質量良好，能夠幫助使用者快速上手。

## 優缺點分析

> [!success] 優點
> - 提供白盒記憶管理，使用者可追蹤和編輯記憶條目。
> - 智能路由功能能顯著降低運行成本，特別是在處理簡單任務時。
> - 支持持續運行的背景執行，讓代理在用戶離開時自動執行任務。

> [!danger] 缺點
> - 初始設置可能較為複雜，需要配置多個模型和插件。
> - 對於大型媒體資產的支持需要 Git LFS，增加了安裝的複雜性。
> - 在某些環境中，Docker 的配置可能會遇到問題。

> [!warning] 注意事項
> - 需要 Node.js 22 以上版本。
> - 對於大型媒體資產的處理需要 Git LFS 支持。
> - 在某些環境中可能需要額外的配置來支持 Docker。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理的工具，但缺乏 PilotDeck 的白盒記憶功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多任務管理功能，但不支持智能路由和成本優化。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於代碼生成的 AI 代理，無法提供 PilotDeck 的多項目隔離和記憶管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理，提供了一些類似的功能，但缺乏 PilotDeck 的白盒記憶管理。 | 如果你的團隊需要一個專注於代理創建的工具，而不需要複雜的記憶管理功能。 | medium，因為需要重新設計記憶管理的流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多任務管理功能，但不支持智能路由和成本優化，適合簡單的任務管理。 | 如果你的需求主要是簡單的任務管理，而不需要高效的資源使用。 | low，因為功能上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PilotDeck** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理，提供了一些類似的功能，但缺乏 PilotDeck 的白盒記憶管理。 | 提供多任務管理功能，但不支持智能路由和成本優化，適合簡單的任務管理。 |
> | 遷移成本 | - | medium，因為需要重新設計記憶管理的流程。 | low，因為功能上有相似之處。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個專注於代理創建的工具，而不需要複雜的記憶 | 如果你的需求主要是簡單的任務管理，而不需要高效的資源使用。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對 AI 代理技術有興趣的開發者進行試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，Docker 的配置可能會遇到問題，導致無法啟動服務。
  - 解法：確保 Docker 已正確安裝並配置，必要時查閱官方文檔。
- [MEDIUM] 使用 Git LFS 下載大型媒體資產時可能會遇到網路問題。
  - 解法：使用 `GIT_LFS_SKIP_SMUDGE=1` 跳過下載，手動添加必要的資產。
- [MEDIUM] 在配置模型提供者時，可能會因為格式錯誤導致無法啟動。
  - 解法：仔細檢查 `pilotdeck.yaml` 文件的格式，確保所有必要的參數都已正確設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要管理多個 AI 代理 | 非常適合 | PilotDeck 的工作空間隔離能有效避免記憶污染，適合小型團隊的多任務管理。 |
| 大型企業需要處理高頻率的社交媒體內容生成 | 適合 | 智能路由功能能顯著降低運行成本，適合高頻率的任務需求。 |
| 個人開發者希望快速搭建 AI 代理原型 | 普通 | 雖然功能強大，但初始設置可能對新手有挑戰。 |
| 需要高效處理單一任務的團隊 | 不適合 | PilotDeck 的設計更適合多任務處理，對於單一任務可能顯得過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的多任務管理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PilotDeck 本身不需要高權限，且不存取敏感資料，但使用者需確保 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

PilotDeck 最常與 Node.js 和 Docker 搭配使用，適合在開發和部署階段進行整合。在一個使用 Node.js 的專案中，可以透過 `npm install` 安裝依賴，然後使用 `pilotdeck` 啟動服務。與主流 CI 工具（如 GitHub Actions）相容良好，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於初始配置，特別是在 Docker 環境中，可能需要額外的適配器來支持特定功能。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 PilotDeck 出現之前，許多 AI 代理工具都集中於單一任務的處理，缺乏對多任務和記憶管理的支持。隨著 AI 技術的進步，對於能夠有效管理多項任務的工具需求日益增加。PilotDeck 的出現正是為了解決這些痛點，並且在設計上強調了記憶的可追蹤性和任務的智能路由。

未來，這個工具可能會隨著 AI 代理技術的進一步發展而持續演進。

## 團隊採用指南

**建議團隊規模**：1-10 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解 Docker 基本操作
- 有多任務管理經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 PilotDeck。第二週：在小型團隊的非關鍵項目中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品中開始使用。

**成功指標**：任務處理效率提高 30%。

> [!warning] 退出計畫
> 如果需要退出，可以將所有設定導出為標準格式，並使用官方工具轉換為其他平台。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
| Forks | 315 |
| Open Issues | 80 |
| Issue 解決率 | 32% (38 closed) |
| 最後推送 | 2026-06-05 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://pilotdeck.openbmb.cn) |
| Repo 大小 | 18.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/OpenBMB/PilotDeck) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@larksuiteoapi/node-sdk` `@modelcontextprotocol/sdk` `@types/react` `@types/turndown` `@vscode/ripgrep` `edgeclaw-memory-core` `ink` `ink-text-input` `js-tiktoken` `jsonrepair` `mupdf` `react` `sharp` `slice-ansi` `string-width`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 70
>     "JavaScript" : 23
>     "Python" : 4
>     "HTML" : 1
>     "Shell" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Mingwwww](https://github.com/Mingwwww) | 222 |
> | [@Kaguya-19](https://github.com/Kaguya-19) | 216 |
> | [@Gucc111](https://github.com/Gucc111) | 186 |
> | [@mmrdmn](https://github.com/mmrdmn) | 53 |
> | [@zhengdaqi](https://github.com/zhengdaqi) | 29 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題回應速度尚可。
**連結**：[文件](https://pilotdeck.openbmb.cn)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-05 ~ 2026-06-05）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #169 from Kaguya-19/Kaguya-19/fix/big_file_v2

## README 摘錄

> [!info]- 展開查看原文 README
> Task-oriented AI Agent productivity platform — redefining operational boundaries and memory evolution, one WorkSpace at a time.
> 
>   
>   
>   
>   
>   
>   
>   
>   &nbsp;
>   
>   &nbsp;
>   
>   
> 
>   English | 简体中文
>   
>   Website · Live Demo · Tutorial · Quick Start · Highlights · Use Cases · Community
> 
> ---
> 
> **News** 🔥
> 
> - **[2026.05.28]** PilotDeck is now open source! Visit our official website at [pilotdeck.openbmb.cn](https://pilotdeck.openbmb.cn). We welcome contributions, feedback, and stars from the community.
> 
> ---
> 
> 
> ## 📦 Installation & Quick Start
> 
> We provide a one-line installer for macOS / Linux, plus a source-based workflow for developers.
> 
> 
> ### Option A: One-line install (recommended, macOS / Linux)
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
> ```
> 
> The script auto-installs Node.js 22, clones the repo, installs dependencies, and builds the frontend. Once it finishes:
> 
> ```bash
> pilotdeck            # starts the server at http://localhost:3001
> pilotdeck status     # check runtime status
> ```
> 
> 
> ## 🖥️ UI & Demo
> 
> PilotDeck ships an out-of-the-box Web UI with full WorkSpace management, white-box memory editing, and visualization of multi-agent collaboration.
> 
> 
> ## 💡 About PilotDeck
> 
> **PilotDeck** is an open-source agent operating system designed around the concept of "WorkSpace". It is jointly developed and open-sourced by Tsinghua University [THUNLP](https://nlp.csai.tsinghua.edu.cn/), [ModelBest](https://modelbest.cn/), [OpenBMB](https://www.openbmb.cn/), and [AI9Stars](https://github.com/AI9Stars). Targeting general-purpose, multi-task scenarios, PilotDeck is built to be a true *productivity tool* for the Agent era.
> 
> A wave of excellent AI Agent harnesses has emerged in recent years, each with its own focus: **Claude Code / Cursor / Trae Solo** brought model reasoning deep into the programming IDE; **Claude Cowork** introduced the notion of project-level isolation to desktop-side knowledge work; **WorkBuddy** connected agents to IM ecosystems such as WeCom and Feishu so AI is one message away.
> 
> When we shift the lens from "one-shot programming" or "immediate Q&A" to **long-running, multi-project productivity work**, however, several questions remain open:
> 
> - When many projects run in parallel, can memory be **white-box and traceable**? When the AI gets something wrong, can you pinpoint which memory entry caused it and edit it directly — without starting a new chat from scratch?
> - Can token cost be **tracked per task**, so that running agents in the background actually becomes economically viable?
> - Can tasks of different difficulty **automatically be matched to different models**, instead of burning the flagship model on trivial calls?
> - When you step away from the keyboard, can the work keep moving? Can the agent **proactively discover what's worth doing, report progress, and land results as files on disk**?
> 
> PilotDeck is an incremental exploration around exactly these questions. It uses the WorkSpace as the fundamental unit — completely isolating files, memory and skills per project — and pairs it with three pillar capabilities: **White-box Memory**, **Smart Routing** and **Always-on**. The entire system natively supports the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) and behaves consistently across front-ends (Web / CLI / IM).
> 
> 
> ### ✨ Key Highlights
> 
> **WorkSpace-Level Isolation & Accretion**
> 
> Every project gets its own file system, memory store and skill set. Parallel work no longer interferes with itself, retrieval has a bounded scope, and skills accrete naturally as each task grows — no more global context pollution.
> 
>   
> 
> **Traceable White-box Memory**
> 
> Memory generation, extraction, storage and retrieval are visible end-to-end. When the AI mis-remembers, you can pinpoint and fix the offending entry. Built-in **Dream Mode** consolidates memory in idle windows, and supports one-click rollback.
> 
>   
> 
> **Smart Routing & Cost Optimization**
> 
> Task difficulty is auto-detected; complex calls go to flagship models (e.g. Claude 3.5 Sonnet / GPT-4o), simple ones drop to lighter models. Through on-device / cloud co-orchestration and precise matching, token spend shrinks dramatically without sacrificing quality.
> 
>   
> 
> **Always-on Background Execution**
> 
> PilotDeck breaks the "you ask, it answers" loop: after you sign off, the agent keeps discovering candidate tasks, running long-horizon monitors, and finally lands deliverables as local files with a summary report waiting for you.
> 
>   
> 
> 
> ### Option B: From source (for developers)
> 
> **1. Clone and install dependencies**
> 
> > This repo uses [Git LFS](https://git-lfs.com/) for large media assets. Make sure `git lfs` is installed before cloning.
> > If you don't need the demo videos/GIFs, add `GIT_LFS_SKIP_SMUDGE=1` before `git clone` to skip downloading them.
> 
> ```bash
> git clone https://github.com/OpenBMB/PilotDeck.git
> cd PilotDeck
> 
> npm install              # root deps (Gateway runtime)
> cd ui && npm install     # UI deps
> cd ..
> ```
> 
> **2. Configure a model provider**
> 
> PilotDeck reads `~/.pilotdeck/pilotdeck.yaml`. You can create it manually, let the bootstrap script generate one, **or just open the Web UI and configure providers visually in the settings panel.**
> Supported protocols include OpenAI, Anthropic, DeepSeek, Qwen, Kimi, MiniMax and other OpenAI-compatible endpoints.
> 
> ```yaml
> schemaVersion: 1
> agent:
>   model: deepseek/deepseek-v4-pro
> model:
>   providers:
>     deepseek:
>       protocol: openai
>       url: https://api.deepseek.com/v1
>       apiKey: sk-your-api-key
> ```
> 
> **3. Start the services**
> 
> ```bash
> cd ui && npm run dev     # dev mode (HMR), visit http://localhost:5173
> 
> ### Option C: Docker Compose
> 
> If Docker is installed, you can start PilotDeck with:
> 
> ```bash
> docker compose up -d
> ```
> 
> ---
> 
> 
> ### 📊 Real-world Numbers
> 
> The three pillar capabilities have shown clear advantages in production-grade workflows:
> 
> #### 1. Smart Routing — ~70% cost savings on social-media workloads
> 
> In Xiaohongshu-style social-media operations, enabling Smart Routing automatically demotes simple polishing / layout tasks to a sub-agent (e.g. Sonnet 4.5) and only invokes Opus 4.5 at planning checkpoints:
> 
> Setup
> Model configuration
> Cost
> Multiplier
> 
> Smart Routing ON
> Opus 4.5 (main) + Sonnet 4.5 (sub)
> $2.83
> 1.1×
> 
> Smart Routing OFF
> All Opus 4.5 (main + sub)
> $12.58
> 5.0×
> 
> Monolithic
> Single Opus 4.5 long-react (estimated)
> $12.20
> 4.8×
> 
> #### 2. Smart Routing — 1/6 the cost while beating frontier models on hard tasks
> 
> The research team benchmarked 7 complex tasks (multilingual podcast push, multi-source data reports, domain-specific literature review, codebase architecture docs, etc.). The "strong main + light sub" routing setup matches or beats the frontier single-model setup at a fraction of the cost:
> 
> Setting
> Score
> Cost
> 
> MiniMax-M2.7 single-agent
> 37.1
> $1.90
> 
> Claude Sonnet 4.6 single-agent
> 69.1
> $18.36
> 
> Sonnet 4.6 (main) + MiniMax-M2.7 (sub)
> 70.6
> $3.15
> 
> #### 3. White-box Memory — layout & tone never bleed across projects
> 
> In black-box agents, mixing tasks in a shared context pool inevitably pollutes memory. PilotDeck's WorkSpace-scoped white-box memory addresses this end-to-end:
> 
>   Dimension
>   Current AI Agents (black-box)
>   PilotDeck (white-box)
> 
>   Visibility
>   You can't see what the AI remembers, only what it outputs
>   View every memory entry: what was stored, when, and which WorkSpace
> 
>   Control
>   Once written, memory can't be edited or removed
>   Edit / delete entries, pin critical decisions so they don't drift
> 
>   Traceability
>   When it goes wrong, you can't find the root cause
>   Generation → extraction → storage → retrieval, all auditable
> 
>   Isolation
>   One shared pool — projects bleed into each other
>   Scoped per WorkSpace; A's memory never reaches B
> 
>   Reversible
>   After compression, the original is gone
>   Dream-mode supports one-click rollback to the prior state
> 
> ---
> 
> 
> ### Use Cases
> 
> > All demos below are generated entirely by edge-side models via PilotDeck's Smart Routing — no cloud-side 

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[自動化]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[XBuilderLAB--cheat-on-content|XBuilderLAB/cheat-on-content]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/OpenBMB/PilotDeck) · [官方網站](https://pilotdeck.openbmb.cn)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "OpenBMB--PilotDeck" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "OpenBMB--PilotDeck" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "OpenBMB--PilotDeck" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "OpenBMB" AND file.name != "OpenBMB--PilotDeck"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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
> const me = dv.page("Repos/OpenBMB--PilotDeck");
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

> **2026-05-29** — 首次收錄
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

- [[2026-05-29|2026-05-29]] — 首次收錄，1.5k stars
