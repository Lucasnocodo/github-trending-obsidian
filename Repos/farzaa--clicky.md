---
repo: farzaa/clicky
url: https://github.com/farzaa/clicky
owner: farzaa
owner_type: User
language: Swift
license: MIT
description: ""
homepage: ""
stars: 4080
stars_per_day: 680
forks: 721
open_issues: 44
created: 2026-04-07
pushed_at: 2026-04-10
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "AI 助手"
release_tag: "v3"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "提供一個 AI 助手，能在螢幕旁邊協助用戶，像是真實的老師一樣。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-17"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 11111
readme_length: 5504
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:2241,2026-04-09:2250,2026-04-10:3156,2026-04-10:3169,2026-04-11:3566,2026-04-12:3780,2026-04-13:3946,2026-04-14:4080"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "clicky"
  - "farzaa/clicky"
  - "提供一個 AI 助手，能在螢幕旁邊協助用戶，像是真實的老師一樣。"
---

# clicky

**3.2k** stars · **1.6k** stars/天 · 建立 2 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/farzaa--clicky");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v3`

> [!summary] 一句話摘要
> 提供一個 AI 助手，能在螢幕旁邊協助用戶，像是真實的老師一樣。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.6k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在 macOS 上使用 AI 助手來提升工作效率的開發者和學生。
> **一句話重點** Clicky 的設計讓 AI 助手可以無縫地融入用戶的日常工作流程，提供即時的反饋和指導。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "farzaa--clicky" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時的 AI 助手，值得一試。

> [!abstract] 核心創新
> Clicky 是一個能夠即時互動的 AI 助手，能夠在用戶的螢幕旁提供即時的反饋和指導。

## 專案簡介

Clicky 是一個 AI 助手，能夠在用戶的螢幕旁邊提供即時協助。用戶可以透過語音與 Clicky 互動，並且它能夠透過屏幕錄影和語音識別技術來理解用戶的需求。使用者首先需要在 macOS 上安裝必要的環境，然後透過 Cloudflare Worker 來管理 API 金鑰，這樣可以確保金鑰不會直接嵌入應用程式中。主要的指令包括 `npx wrangler secret put` 來設置 API 金鑰，並且使用 `npx wrangler deploy` 部署 Worker。這個工具的賣點在於它能夠將 AI 助手的功能無縫集成到用戶的工作流程中，並且提供即時的反饋和指導。技術上，Clicky 使用 Swift 來開發 macOS 應用，並且依賴於多個 API，如 Anthropic 和 AssemblyAI，來實現語音識別和文本轉語音的功能。

這些 API 都是通過 Cloudflare Worker 進行代理，這樣的設計使得應用的安全性和靈活性更高。與其他類似工具相比，Clicky 的特點在於其即時互動和多功能性，特別適合需要即時反饋的開發者或學習者。使用者可能會遇到的問題包括 API 金鑰的管理和應用的權限設置，這些都需要在安裝過程中仔細處理。整體來說，Clicky 是一個值得嘗試的工具，尤其對於那些希望在工作中引入 AI 助手的用戶來說。未來幾個月內，這個專案可能會持續增強其功能，並改善 Windows 支援。

**技術棧**：`Swift` · `Node.js 18+` · `Cloudflare Worker`

## 重點功能

- 即時語音互動 — 用戶可以透過語音與 Clicky 互動，獲得即時反饋。
- 屏幕錄影功能 — 能夠錄製螢幕內容，並根據用戶的需求提供建議。
- 多 API 整合 — 支援 Anthropic 和 AssemblyAI 等多個 API 來實現語音識別和文本轉語音。
- Cloudflare Worker 代理 — 確保 API 金鑰的安全性，避免直接嵌入應用程式中。
- 簡單的安裝流程 — 提供詳細的手動設置步驟，方便用戶快速上手。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/farzaa/clicky.git
```
2. 安裝 Cloudflare Worker 依賴
```bash
cd worker && npm install
```
3. 設置 API 金鑰
```bash
npx wrangler secret put ANTHROPIC_API_KEY
```
4. 部署 Cloudflare Worker
```bash
npx wrangler deploy
```
5. 在 Xcode 中打開專案
```bash
open leanring-buddy.xcodeproj
```

## 程式碼範例

```swift
{
  "前置條件": "需要安裝 Node.js 和 Cloudflare Worker。",
  "指令": "npx wrangler secret put ANTHROPIC_API_KEY",
  "預期輸出": "將 API 金鑰安全地存儲在 Cloudflare Worker 中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 3169 stars（1585/天），forks 561（17.7%），顯示出強烈的社群興趣。作者 Farzaa 先前在社交媒體上展示了 Clicky 的功能，吸引了大量關注。這個專案解決了用戶在學習和開發過程中缺乏即時反饋的痛點，過去的方案往往無法提供這樣的互動性。最近的推文和展示活動可能是觸發其快速增長的原因。技術上，Clicky 的設計利用了現有的 API 生態系統，讓這個工具能夠快速實現其功能，並且能夠隨著需求的變化而調整。forks/stars 比率為 17.7%，顯示出許多人對這個專案有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：希望在 macOS 上使用 AI 助手來提升工作效率的開發者和學生。

> [!example] 使用場景
> - 學生用它來在學習過程中獲得即時的問題解答，因為 Clicky 能夠理解語音指令並提供反饋。
> - 開發者用它來在編碼時獲得即時的建議和指導，因為它能夠分析螢幕內容並給出具體的建議。
> - 設計師用它來在設計過程中獲得即時的反饋，因為它能夠透過語音識別理解設計需求。

## 架構分析

Clicky 採用的是一個基於 Cloudflare Worker 的架構，這樣的設計讓 API 金鑰的管理變得更加安全。應用程式本身是用 Swift 開發，並且運行在 macOS 環境中，這樣可以充分利用 macOS 的特性，如 ScreenCaptureKit。資料流方面，應用會通過 websocket 與 AssemblyAI 進行語音流傳輸，並將轉錄的文本和螢幕截圖發送給 Claude 進行處理。這種設計的好處在於能夠實現即時的語音互動，但代價是需要用戶配置多個 API 金鑰和管理 Cloudflare Worker。擴展性方面，這個架構可以輕鬆地添加新的 API 或功能，但對於不熟悉這些技術的用戶來說，學習曲線可能較陡峭。

## 技術深入分析

Clicky 的核心技術機制是利用 Cloudflare Worker 來管理 API 金鑰，這樣可以確保金鑰不會直接嵌入應用程式中。它使用 Swift 開發 macOS 應用，並且依賴於多個 API 來實現語音識別和文本轉語音的功能。效能上，Clicky 能夠即時處理語音輸入，並且通過 websocket 進行實時通訊，這樣可以減少延遲。設計上，選擇 Cloudflare Worker 作為 API 代理的好處在於能夠輕鬆管理金鑰，但代價是需要用戶進行額外的配置。技術風險方面，若未來 API 變更或停止服務，將會影響 Clicky 的功能。整合方面，Clicky 與 macOS 的生態系統相容性良好，但對於不熟悉 Cloudflare 的用戶來說，學習成本較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和配置步驟，對於新手來說相對清晰。安裝過程中需要配置多個 API 金鑰，這可能會造成一些困難。整體來說，文件的結構合理，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 即時語音互動，提升用戶體驗。
> - 多 API 整合，功能強大。
> - 安全的 API 金鑰管理，避免安全風險。

> [!danger] 缺點
> - 僅支援 macOS，限制了使用者範圍。
> - 安裝和配置過程較為複雜，對新手不友好。
> - 目前尚未支援 Windows 平台。

> [!warning] 注意事項
> - 僅支援 macOS 14.2+ 和 Xcode 15+。
> - 需要有效的 Cloudflare 帳戶和 API 金鑰。
> - 目前不支援 Windows 平台。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 助手功能，但主要針對開發者，缺乏即時語音互動。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 專注於 Claude API 的整合，功能較為單一，無法提供 Clicky 的多功能性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，功能較為單一，無法提供 Clicky 的即時互動性。 | 如果你的需求主要是資料同步而非即時互動，這是一個不錯的選擇。 | low，因為功能範圍較小，容易上手。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 使用 NVIDIA 的技術來實現語音識別，專注於高效能的語音處理。 | 如果你的應用需要高效能的語音識別，且已經在使用 NVIDIA 的生態系統，這是更好的選擇。 | medium，因為需要調整到不同的技術棧。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clicky** | **parsync** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和傳輸，功能較為單一，無法提供 Clicky 的即時互動性。 | 使用 NVIDIA 的技術來實現語音識別，專注於高效能的語音處理。 |
> | 遷移成本 | - | low，因為功能範圍較小，容易上手。 | medium，因為需要調整到不同的技術棧。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非即時互動，這是一個不錯的選擇。 | 如果你的應用需要高效能的語音識別，且已經在使用 NVIDIA |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 API 金鑰配置的問題，特別是對於不熟悉 Cloudflare 的用戶。
  - 解法：仔細閱讀 README 中的配置步驟，並確保所有金鑰都正確設置。
- [MEDIUM] 應用在某些 macOS 版本上可能會出現兼容性問題。
  - 解法：確保使用最新的 macOS 版本，並檢查相關的系統要求。
- **[HIGH]** 使用過程中可能會因為 API 限制而導致功能無法正常運作。
  - 解法：定期檢查 API 的使用限制，並根據需要調整使用方式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發環境 | 非常適合 | 能夠提供即時的反饋，提升團隊的工作效率。 |
| 個人學習者的學習工具 | 適合 | 能夠在學習過程中提供即時的指導和幫助。 |
| 大型企業的生產環境 | 不適合 | 目前尚未穩定，存在高風險。 |
| 需要高效能語音識別的應用 | 普通 | 雖然有語音識別功能，但可能不如專門的語音處理工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時的 AI 助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：Clicky 需要訪問用戶的螢幕和麥克風，並且依賴多個外部 API，這可能會引入安全隱患。使用時需謹慎管理 API 金鑰，並確保不洩漏敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Clicky 最常與 macOS 生態系統中的其他開發工具搭配使用，特別是在開發和學習環境中。用戶可以在 Xcode 中直接開啟 Clicky 專案，並透過 Cloudflare Worker 來管理 API 金鑰。在與其他工具的整合上，Clicky 支援與 Node.js 的無縫連接，並且可以在 CI/CD pipeline 中使用。最常見的整合問題是 API 金鑰的配置和管理，這需要用戶在初始設置時特別注意。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Clicky 出現之前，許多 AI 助手的功能都無法提供即時的互動性，通常只能在特定的應用中使用。隨著語音識別和自然語言處理技術的進步，Clicky 能夠將這些技術整合到一個易於使用的工具中。這個工具代表了 AI 助手在日常工作中的應用趨勢，未來可能會有更多類似的工具出現，進一步提升用戶的工作效率。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 macOS 開發
- 了解 API 管理
- 有基本的 Node.js 知識

> [!tip] 導入策略
> 第一週：在個人項目中試用 Clicky。第二週：在小型團隊的內部工具中導入。第三週：根據使用反饋進行調整和優化。第四週：在主要產品中逐步推廣使用。

**成功指標**：用戶滿意度提高 30%，開發效率提升 20%。

> [!warning] 退出計畫
> 若需退出，所有配置和數據均可導出為標準格式，並可輕鬆轉換至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
| Forks | 561 |
| Open Issues | 33 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-04-07 |
| Repo 大小 | 10.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/farzaa/clicky) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 95
>     "Shell" : 4
>     "TypeScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@farzaa](https://github.com/farzaa) | 19 |

**最新版本**：v3 (2026-04-07)

> [!info]- Release Notes
> - Fixed issues with websocket.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續更新和回應問題。
**連結**：[文件](https://www.clicky.so/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-10）
> **活躍天數** 2 天 · **最新 commit** Remove hardcoded Anthropic API key from build settings

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/farzaa/clicky/issues/21) | add Windows version | 3 | 3 |
> | [#44](https://github.com/farzaa/clicky/issues/44) | Critical Security Issues | 2 | 1 |
> | [#22](https://github.com/farzaa/clicky/issues/22) | Anthropic API key committed | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Hi, this is Clicky.
> It's an AI teacher that lives as a buddy next to your cursor. It can see your screen, talk to you, and even point at stuff. Kinda like having a real teacher next to you.
> 
> Download it [here](https://www.clicky.so/) for free.
> 
> Here's the [original tweet](https://x.com/FarzaTV/status/2041314633978659092) that kinda blew up for a demo for more context.
> 
> This is the open-source version of Clicky for those that want to hack on it, build their own features, or just see how it works under the hood.
> 
> ## Get started with Claude Code
> 
> The fastest way to get this running is with [Claude Code](https://docs.anthropic.com/en/docs/claude-code).
> 
> Once you get Claude running, paste this:
> 
> ```
> Hi Claude.
> 
> Clone https://github.com/farzaa/clicky.git into my current directory.
> 
> Then read the CLAUDE.md. I want to get Clicky running locally on my Mac.
> 
> Help me set up everything — the Cloudflare Worker with my own API keys, the proxy URLs, and getting it building in Xcode. Walk me through it.
> ```
> 
> That's it. It'll clone the repo, read the docs, and walk you through the whole setup. Once you're running you can just keep talking to it — build features, fix bugs, whatever. Go crazy.
> 
> ## Manual setup
> 
> If you want to do it yourself, here's the deal.
> 
> ### Prerequisites
> 
> - macOS 14.2+ (for ScreenCaptureKit)
> - Xcode 15+
> - Node.js 18+ (for the Cloudflare Worker)
> - A [Cloudflare](https://cloudflare.com) account (free tier works)
> - API keys for: [Anthropic](https://console.anthropic.com), [AssemblyAI](https://www.assemblyai.com), [ElevenLabs](https://elevenlabs.io)
> 
> ### 1. Set up the Cloudflare Worker
> 
> The Worker is a tiny proxy that holds your API keys. The app talks to the Worker, the Worker talks to the APIs. This way your keys never ship in the app binary.
> 
> ```bash
> cd worker
> npm install
> ```
> 
> Now add your secrets. Wrangler will prompt you to paste each one:
> 
> ```bash
> npx wrangler secret put ANTHROPIC_API_KEY
> npx wrangler secret put ASSEMBLYAI_API_KEY
> npx wrangler secret put ELEVENLABS_API_KEY
> ```
> 
> For the ElevenLabs voice ID, open `wrangler.toml` and set it there (it's not sensitive):
> 
> ```toml
> [vars]
> ELEVENLABS_VOICE_ID = "your-voice-id-here"
> ```
> 
> Deploy it:
> 
> ```bash
> npx wrangler deploy
> ```
> 
> It'll give you a URL like `https://your-worker-name.your-subdomain.workers.dev`. Copy that.
> 
> ### 2. Run the Worker locally (for development)
> 
> If you want to test changes to the Worker without deploying:
> 
> ```bash
> cd worker
> npx wrangler dev
> ```
> 
> This starts a local server (usually `http://localhost:8787`) that behaves exactly like the deployed Worker. You'll need to create a `.dev.vars` file in the `worker/` directory with your keys:
> 
> ```
> ANTHROPIC_API_KEY=sk-ant-...
> ASSEMBLYAI_API_KEY=...
> ELEVENLABS_API_KEY=...
> ELEVENLABS_VOICE_ID=...
> ```
> 
> Then update the proxy URLs in the Swift code to point to `http://localhost:8787` instead of the deployed Worker URL while developing. Grep for `clicky-proxy` to find them all.
> 
> ### 3. Update the proxy URLs in the app
> 
> The app has the Worker URL hardcoded in a few places. Search for `your-worker-name.your-subdomain.workers.dev` and replace it with your Worker URL:
> 
> ```bash
> grep -r "clicky-proxy" leanring-buddy/
> ```
> 
> You'll find it in:
> - `CompanionManager.swift` — Claude chat + ElevenLabs TTS
> - `AssemblyAIStreamingTranscriptionProvider.swift` — AssemblyAI token endpoint
> 
> ### 4. Open in Xcode and run
> 
> ```bash
> open leanring-buddy.xcodeproj
> ```
> 
> In Xcode:
> 1. Select the `leanring-buddy` scheme (yes, the typo is intentional, long story)
> 2. Set your signing team under Signing & Capabilities
> 3. Hit **Cmd + R** to build and run
> 
> The app will appear in your menu bar (not the dock). Click the icon to open the panel, grant the permissions it asks for, and you're good.
> 
> ### Permissions the app needs
> 
> - **Microphone** — for push-to-talk voice capture
> - **Accessibility** — for the global keyboard shortcut (Control + Option)
> - **Screen Recording** — for taking screenshots when you use the hotkey
> - **Screen Content** — for ScreenCaptureKit access
> 
> ## Architecture
> 
> If you want the full technical breakdown, read `CLAUDE.md`. But here's the short version:
> 
> **Menu bar app** (no dock icon) with two `NSPanel` windows — one for the control panel dropdown, one for the full-screen transparent cursor overlay. Push-to-talk streams audio over a websocket to AssemblyAI, sends the transcript + screenshot to Claude via streaming SSE, and plays the response through ElevenLabs TTS. Claude can embed `[POINT:x,y:label:screenN]` tags in its responses to make the cursor fly to specific UI elements across multiple monitors. All three APIs are proxied through a Cloudflare Worker.
> 
> ## Project structure
> 
> ```
> leanring-buddy/          # Swift source (yes, the typo stays)
>   CompanionManager.swift    # Central state machine
>   CompanionPanelView.swift  # Menu bar panel UI
>   ClaudeAPI.swift           # Claude streaming client
>   ElevenLabsTTSClient.swift # Text-to-speech playback
>   OverlayWindow.swift       # Blue cursor overlay
>   AssemblyAI*.swift         # Real-time transcription
>   BuddyDictation*.swift     # Push-to-talk pipeline
> worker/                  # Cloudflare Worker proxy
>   src/index.ts              # Three routes: /chat, /tts, /transcribe-token
> CLAUDE.md                # Full architecture doc (agents read this)
> ```
> 
> ## Contributing
> 
> PRs welcome. If you're using Claude Code, it already knows the codebase — just tell it what you want to build and point it at `CLAUDE.md`.
> 
> Got feedback? DM me on X [@farzatv](https://x.com/farzatv).

## 延伸閱讀

相關概念：[[語音合成]] · [[自然語言處理]] · [[即時通訊]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[yetone--voice-input-src|yetone/voice-input-src]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/farzaa/clicky)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "farzaa--clicky"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "farzaa--clicky" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["語音合成","自然語言處理","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "farzaa--clicky" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/farzaa--clicky");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "farzaa--clicky" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "farzaa" AND file.name != "farzaa--clicky"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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
> const me = dv.page("Repos/farzaa--clicky");
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

> **2026-04-09** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 再次上榜，4.1k stars
- [[2026-04-13|2026-04-13]] — 再次上榜，3.9k stars
- [[2026-04-12|2026-04-12]] — 再次上榜，3.8k stars
- [[2026-04-11|2026-04-11]] — 再次上榜，3.6k stars
- [[2026-04-10|2026-04-10]] — 再次上榜，3.2k stars
- [[2026-04-09|2026-04-09]] — 首次收錄，2.2k stars
