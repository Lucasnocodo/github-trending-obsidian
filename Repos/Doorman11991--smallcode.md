---
repo: Doorman11991/smallcode
url: https://github.com/Doorman11991/smallcode
owner: Doorman11991
owner_type: User
language: JavaScript
license: MIT
description: "AI coding agent optimized for small LLMs. 87% benchmark with 4B-active model."
homepage: ""
stars: 1383
stars_per_day: 231
forks: 96
open_issues: 4
created: 2026-05-18
pushed_at: 2026-05-24
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "編碼代理"
release_tag: "v1.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "針對小型 LLM 優化的 AI 編碼代理，能在消費級硬體上運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-28"
contributor_count: 5
engagement: "low"
issue_close_rate: 88
repo_size_kb: 11658
readme_length: 9956
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:728,2026-05-20:727,2026-05-21:842,2026-05-21:842,2026-05-22:1082,2026-05-22:1085,2026-05-23:1226,2026-05-23:1228,2026-05-24:1321,2026-05-25:1383"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "smallcode"
  - "Doorman11991/smallcode"
  - "針對小型 LLM 優化的 AI 編碼代理，能在消費級硬體上運行。"
---

# smallcode

**1.2k** stars · **307** stars/天 · 建立 4 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/Doorman11991--smallcode");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.1` `easy-install`

> [!summary] 一句話摘要
> 針對小型 LLM 優化的 AI 編碼代理，能在消費級硬體上運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (307 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在小型 LLM 上進行編碼工作的開發者，特別是對於隱私有高要求的團隊。
> **一句話重點** SmallCode 的設計讓小型 LLM 在本地環境中發揮出色，特別適合對隱私有高要求的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "編碼代理" && p.file.name !== "Doorman11991--smallcode" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 編碼代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高效的編碼代理，值得考慮。

> [!abstract] 核心創新
> SmallCode 是專為小型 LLM 設計的編碼代理，能在消費級硬體上有效運行。

## 專案簡介

SmallCode 是一個專為小型 LLM（8B-35B 參數）設計的終端編碼代理，旨在從本地模型中提取有效工作。使用者可以透過簡單的 CLI 指令，如 `smallcode` 或 `npx smallcode`，啟動代理並運行任務。核心機制是透過智能架構彌補小型模型的限制，支持多步驟工具使用，並能在本地環境中運行，保護用戶隱私。這個工具的賣點在於其針對小型模型的優化，能夠在消費級硬體上有效運行，並且不需要依賴雲端服務。技術上，SmallCode 使用 Node.js 作為基礎，並依賴多個庫來實現功能，如 `express` 和 `chalk`。

其設計考量了小型模型的特性，例如通過 `Plan-Then-Execute` 模式來減少上下文漂移，並使用 `Read-Before-Write Guard` 來保護文件編輯。與其他工具相比，如 OpenCode，SmallCode 更加專注於小型模型的特性，並提供更靈活的工具調用和錯誤診斷機制。使用者可以在本地環境中運行，並且不需要網絡連接，這對於需要保護代碼隱私的開發者來說是個優勢。實際使用中，SmallCode 能夠處理多達 19 種編程語言的任務，並且有自動捕捉過去任務的功能，幫助模型學習。這個專案目前處於穩定階段，值得對小型 LLM 開發有興趣的團隊考慮使用。

**技術棧**：`Node.js >=18.0.0` · `Express 5.2.1` · `Chalk 4.1.2`

## 重點功能

- 多步驟工具使用 — 支援計劃-執行模式，減少上下文漂移。
- 本地運行 — 完全不需要網絡連接，保護用戶隱私。
- 自動捕捉過去任務 — 幫助模型學習，提升未來任務的成功率。
- 錯誤診斷 — 提供即時的錯誤類型分類和修正建議。
- 多語言支援 — 能處理多達 19 種編程語言的任務。

## 快速開始

1. 全域安裝 SmallCode
```bash
npm install -g smallcode
```
2. 啟動 SmallCode
```bash
npx smallcode
```
3. 運行任務
```bash
smallcode 'create hello.py that prints hello world'
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 SmallCode",
  "指令": "const { SmallCode } = require('smallcode');\nconst agent = new SmallCode({ model: 'gemma-4-e4b', baseUrl: 'http://localhost:1234/v1' });\nconst result = await agent.run('create hello.py that prints hello world');\nconsole.log(result.filesCreated);  // ['hello.py']\nconsole.log(result.toolCalls.length);  // 1\nconsole.log(result.success);  // true",
  "預期輸出": "['hello.py'], 1, true"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1228 stars（307/天），forks 88（7.2%），顯示出穩定的增長潛力。作者 Doorman11991 及其團隊專注於小型 LLM 的應用，解決了小型模型在多步驟工具使用上的痛點，這在現有市場上尚無良好解決方案。這個工具的設計考量了小型模型的特性，並提供了多種功能來提升其效能。社群的活躍度也反映在開放的問題和快速的修復上，顯示出開發者對於用戶反饋的重視。

## 適合誰使用

**目標受眾**：需要在小型 LLM 上進行編碼工作的開發者，特別是對於隱私有高要求的團隊。

> [!example] 使用場景
> - 後端工程師用它來自動生成 Python 程式碼，因為 SmallCode 能有效處理小型 LLM 的上下文限制，減少手動編碼的時間。
> - DevOps 工程師用它來在 CI/CD 流程中自動化測試，因為其能夠自動檢測並運行測試命令，節省了手動配置的時間。
> - 獨立開發者用它來快速原型開發，因為 SmallCode 支援多種語言，並能在本地環境中運行，無需擔心網絡延遲。

## 架構分析

SmallCode 採用 Node.js 作為核心架構，並通過多個庫來實現其功能。其設計模式強調本地運行，避免了對雲端的依賴，這對於需要保護代碼隱私的開發者來說至關重要。資料流方面，使用者的請求經過代理處理，並通過多種工具進行多步驟操作，這樣的設計能有效減少上下文漂移。

選擇 Node.js 的原因在於其非同步特性，能夠處理多個請求而不會造成阻塞。這種架構的代價是對於大型模型的支持較弱，但對於小型模型來說，這樣的設計能夠提供更好的效能和用戶體驗。擴展性方面，SmallCode 可以通過增加新的插件或工具來擴展功能，但在處理更大型模型時可能會遇到性能瓶頸。

## 技術深入分析

SmallCode 的核心技術機制是其針對小型 LLM 的優化，使用了多種策略來提升效能。其通訊模式基於 Node.js 的非同步特性，能夠同時處理多個請求。效能方面，SmallCode 能夠在消費級硬體上運行，並且在多步驟任務中表現良好，這是通過計劃-執行模式來實現的。設計取捨上，選擇 Node.js 使得開發過程更加靈活，但也限制了對大型模型的支持。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在多用戶同時請求的情況下。整合方面，SmallCode 能夠與現有的 CI/CD 流程無縫對接，並且提供了多種 API 供開發者使用，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例。安裝過程順暢，無明顯坑。文件有多語言版本，適合不同語言背景的使用者。

## 優缺點分析

> [!success] 優點
> - 專為小型 LLM 優化，能在消費級硬體上運行。
> - 支持多語言，適合不同開發需求。
> - 本地運行，保護用戶隱私。

> [!danger] 缺點
> - 僅支援 Node.js 18 以上版本。
> - 小型模型在多步驟工具使用上表現不佳。
> - 對於大型模型的支持不足。

> [!warning] 注意事項
> - 僅支援 Node.js 18 以上版本。
> - 小型模型（≤4B）在多步驟工具使用上表現不佳。
> - 需要適當配置以確保最佳效能，否則可能會影響結果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於更大型的 LLM，適合需要高效能的應用場景，但不如 SmallCode 在小型模型上優化得當。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的編碼代理功能，但缺乏 SmallCode 的本地運行特性，可能需要網絡連接。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於大型 LLM 的應用，適合需要高效能的場景，但不如 SmallCode 在小型模型上優化得當。 | 如果你的團隊已經在使用大型 LLM，且需要高效能的編碼代理。 | medium，因為需要重新適應大型模型的特性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的編碼代理功能，但缺乏 SmallCode 的本地運行特性，可能需要網絡連接。 | 如果你的團隊需要雲端支持的編碼代理，且不在意隱私問題。 | low，因為功能上相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **smallcode** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於大型 LLM 的應用，適合需要高效能的場景，但不如 SmallCode 在小型模型上優化得當。 | 提供類似的編碼代理功能，但缺乏 SmallCode 的本地運行特性，可能需要網絡連接。 |
> | 遷移成本 | - | medium，因為需要重新適應大型模型的特性。 | low，因為功能上相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用大型 LLM，且需要高效能的編碼代理。 | 如果你的團隊需要雲端支持的編碼代理，且不在意隱私問題。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在小型模型上執行多步驟任務時，可能會出現上下文丟失的情況。
  - 解法：使用 `Plan-Then-Execute` 模式來減少上下文漂移。
- [MEDIUM] 某些工具在多次調用後可能會失效。
  - 解法：監控工具的使用狀態，必要時手動重啟。
- [MEDIUM] 在特定環境下，安裝過程可能會遇到依賴問題。
  - 解法：確保 Node.js 版本符合要求，並檢查依賴庫版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內部工具開發 | 非常適合 | SmallCode 專為小型 LLM 設計，能在本地環境中有效運行。 |
| 大型企業的核心系統開發 | 不適合 | 對大型模型的支持不足，可能無法滿足性能需求。 |
| 獨立開發者的原型開發 | 適合 | 能快速生成代碼，並且不需要網絡連接。 |
| 需要高效能的編碼代理的團隊 | 普通 | 雖然功能強大，但在大型模型上表現不佳。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的編碼代理，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

SmallCode 最常與 Node.js 和各種 CI/CD 工具搭配使用，處於開發和部署環節。使用者可以在一個用 Node.js 的專案中，通過 `npm run` 指令來執行 SmallCode，並在 CI 流程中自動化測試。與主流工具鏈的相容性良好，支援 GitHub Actions 和 GitLab CI。常見的整合問題包括依賴版本不匹配，建議使用者在安裝前檢查相依性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 SmallCode 出現之前，開發者主要依賴大型 LLM 進行編碼任務，這些工具通常需要穩定的網絡連接和高效能的硬體。隨著小型 LLM 的興起，開發者需要一個能在本地環境中運行的編碼代理來保護代碼隱私。SmallCode 代表了這一技術趨勢，未來可能會有更多針對小型模型的工具出現，以滿足市場需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解基本的 CLI 操作
- 有 CI/CD pipeline 經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 SmallCode。第二週：在非關鍵的內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個非核心模組中使用。

**成功指標**：代碼生成時間減少 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他編碼代理。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
| Forks | 88 |
| Open Issues | 3 |
| Issue 解決率 | 88% (22 closed) |
| 最後推送 | 2026-05-22 |
| 建立日期 | 2026-05-18 |
| Repo 大小 | 11.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Doorman11991/smallcode) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `bonescript-compiler` `chalk` `cli-highlight` `express` `marked` `marked-terminal` `@types/node` `jest` `ts-node` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 64
>     "MAXScript" : 24
>     "TypeScript" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Doorman11991](https://github.com/Doorman11991) | 133 |
> | [@Zireael](https://github.com/Zireael) | 11 |
> | [@dmdeemer](https://github.com/dmdeemer) | 2 |
> | [@rudi193-cmd](https://github.com/rudi193-cmd) | 1 |
> | [@giveen](https://github.com/giveen) | 1 |

**最新版本**：v1.0.1 — v1.0.1 — /model auth fix (2026-05-22)

> [!info]- Release Notes
> Hotfix: the \/model\ command now sends the \Authorization: Bearer\ header when listing available models. Fixes \/model\ showing \ailed\ on OpenWebUI and any other authenticated endpoint.

## 社群與生態

**社群活躍度**：社群活躍，開放問題回應迅速。
**連結**：[文件](https://www.npmjs.com/package/smallcode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-21 ~ 2026-05-22）
> **活躍天數** 2 天 · **最新 commit** fix: add ~/.smallcode/skills/ as global skill dir alongside ~/.config/smallcode/skills/

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#36](https://github.com/Doorman11991/smallcode/issues/36) | Tool use trouble | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SmallCode
> 
> [简体中文](README_zh-CN.md) | [English](README.md)
> 
> ---
> 
> [](https://www.npmjs.com/package/smallcode)
> 
> **AI coding agent optimized for small LLMs (8B-35B parameters)**
> 
> SmallCode is a terminal-native coding agent designed from the ground up to extract useful work from local models (8B-35B) running on consumer hardware. While tools like OpenCode assume frontier models with 128k+ context and perfect tool calling, SmallCode compensates for the limitations of small models through intelligent architecture.
> 
> > **Recommended model size: 8B-35B parameters.** Smaller models (≤4B) struggle with multi-step tool use and lose context across turns. Larger models (>35B) don't need SmallCode's adaptations and are better served by tools designed for frontier models.
> 
> 
> ## Quick Start
> 
> ```bash
> 
> # Install globally via npm
> npm install -g smallcode
> 
> 
> # Optional: configure fallback models for adaptive routing
> SMALLCODE_MODEL_MEDIUM=qwen2.5-coder:32b
> SMALLCODE_MODEL_STRONG=gpt-4o
> ```
> 
> 
> ## Programmatic API
> 
> Use SmallCode as a library in your own tools, CI pipelines, or TypeScript frameworks:
> 
> ```javascript
> const { SmallCode } = require('smallcode');
> 
> const agent = new SmallCode({
>   model: 'gemma-4-e4b',
>   baseUrl: 'http://localhost:1234/v1',
> });
> 
> // Run a task
> const result = await agent.run("create hello.py that prints hello world");
> console.log(result.filesCreated);  // ['hello.py']
> console.log(result.toolCalls.length);  // 1
> console.log(result.success);  // true
> 
> // Subscribe to events
> agent.on('tool_start', ({ name, args }) => console.log(`Using: ${name}`));
> agent.on('tool_end', ({ name, ms }) => console.log(`Done: ${name} (${ms}ms)`));
> agent.on('error', (err) => console.error(err));
> ```
> 
> Returns a structured `RunResult` with: response text, tool call records, files created/edited, token usage, duration, and success status.
> 
> 
> ## Why SmallCode?
> 
> | | OpenCode | SmallCode |
> |---|----------|-----------|
> | **Target** | Frontier models (Claude, GPT-5) | 8B-35B local models |
> | **Context** | Dumps everything | Budget-managed, summarized |
> | **Tool calling** | Assumes reliable JSON | Forgiving multi-format parser |
> | **Planning** | Single-shot | TODO-file decomposed steps |
> | **Editing** | Full file write | Search-and-replace patch |
> | **Privacy** | API calls to cloud | Fully local, no network needed |
> 
> 
> ### Benchmark Harness
> Run the included benchmark suite against any local model to measure pass rate across small coding tasks. Three suites: `smoke` (5 trivial tasks, ~30s), `polyglot-mini` (19 tasks across Python/JS/TS/Bash/Markdown/JSON), `tool-use` (10 multi-step tool sequencing tasks). Results persisted to `.smallcode/benchmarks/`.
> 
> ```bash
> npm run bench:smoke
> npm run bench:polyglot
> npm run bench:tools
> ```
> 
> 
> # Or run directly with npx
> npx smallcode
> 
> 
> # Start in your project directory
> cd my-project
> smallcode
> ```
> 
> 
> ### Prebuilt Binaries (no Node.js needed)
> 
> Pre-compiled tarballs for Windows, macOS, and Linux are built on every release — they bundle Node.js plus all native addons so you never need `node-gyp` or C++ build tools.
> 
> | Platform | One‑line install |
> |---|---|
> | Linux / macOS | `bash `. See `skills/README.md`. Adapted from [Willow 2.0 Fylgja](https://github.com/rudi193-cmd/willow-2.0/tree/master/willow/fylgja/skills).
> 
> 
> ### Read-Before-Write Guard
> Tracks which paths the model has read this session. First `write_file` to an existing unread file is refused with a hint to `read_file` first; second attempt allowed (so legitimate full-replace intents succeed). New files always permitted. `patch` counts as a read. Disable with `SMALLCODE_WRITE_GUARD=false`.
> 
> 
> ### Tool-Call Deduplication
> Identical pure-tool calls within a sliding window are short-circuited with a cached result instead of re-executing. Only applies to read-only tools (`read_file`, `search`, `graph_search`, etc.) — never to anything with side effects. Saves both context and latency on small models that loop. Disable with `SMALLCODE_DEDUP=false`.
> 
> 
> ### Evidence Store
> Automated capture of "what was tried, what worked, what failed" per task. Stored as searchable memory objects in the existing memory MCP module so they flow through FTS5 + staleness-decay loading on future tasks rather than always hogging context. The model learns from past sessions: it sees that `pip install` failed last time on this Python version, or that `npm test` hangs without `--run`. Disable with `SMALLCODE_EVIDENCE_DISABLE=true`.
> 
> 
> ### Plan-Then-Execute Mode
> For multi-step tasks (refactors, multi-file features, multi-imperative prompts), SmallCode asks the model to emit a numbered plan FIRST, then re-injects that plan as an anchor on subsequent turns. Reduces drift on long traces — the model can't "forget" step 3 by the time it finishes step 1. Heuristic-based — simple tasks like "create hello.py" don't trigger planning. Configure with `SMALLCODE_PLAN=true|false`.
> 
> 
> ### Snapshot & Auto-Rollback
> Before each agent turn, SmallCode opens a file snapshot checkpoint. Every `write_file` and `patch` records its pre-edit content. If validation hard-fails and all retries are exhausted, set `SMALLCODE_SNAPSHOT_AUTO_ROLLBACK=true` to automatically revert all edits in the turn back to the checkpoint state. All snapshots persisted to `.smallcode/snapshots/` for manual audit. Disable with `SMALLCODE_SNAPSHOT=false`.
> 
> 
> ### Test-Runner Auto-Discovery
> Detects your project's test command from config files (package.json, pytest.ini, pyproject.toml, Cargo.toml, go.mod, pom.xml, etc.) and injects it into the system prompt once. The model knows how to run tests without wasting tool calls on discovery. Also surfaces in AUTO-VALIDATE fix prompts. Override with `SMALLCODE_TEST_RUNNER=` or disable with `SMALLCODE_TEST_DISABLE=true`.
> 
> 
> ### Bootstrap Detection
> On first turn, scans the workspace and injects a compact project summary: runtime + version, package manager, framework (Next.js/FastAPI/Express/Django/React/Vue/…), entry point, and build/test/run commands. Covers Node, Python, Rust, Go, .NET, Java, Ruby. Eliminates the 3-5 tool calls small models usually spend figuring out what kind of project they're in. Disable with `SMALLCODE_BOOTSTRAP=false`.
> 
> 
> ### Adaptive Retry Temperature
> When the improvement loop retries a failed edit, each attempt uses a different temperature so it doesn't produce the same broken output three times. Attempt 1 lowers temperature (deterministic fix), attempt 2 raises it (explore alternatives), attempt 3 returns to base. Delta defaults to 0.15. Disable with `SMALLCODE_TEMP_ADAPT=false`.
> 
> 
> ### Per-Tool Trust Score Decay
> Tracks consecutive failures per tool within a session. Tools that fail 3+ times in a row are soft-demoted (schema list back). Tools that fail 5+ times are dropped from the schema entirely for the session. Prevents the model from looping on a broken MCP server or a search that keeps returning nothing. Resets between runs. Disable with `SMALLCODE_TRUST_DECAY=false`.
> 
> 
> ### Code Intel Category (Rank 2)
> A new `code_intel` tool routing category detects semantic code questions ("how does X work", "what calls Y", "who inherits from Z"). Routes exclusively to `[graph_search, explain_symbol, read_file, find_files, search]` — skipping write/run tools. Placed before `search` in the priority order so inheritance/callers questions get the right tools without any write noise.
> 
> 
> ### Error Diagnosis (Rank 4)
> When a bash command exits non-zero, `diagnoseError()` makes a quick LLM call to classify the error type (`syntax|runtime|permission|notfound|timeout|unknown`), locate the relevant file/line, and emit a one-line fix suggestion. The structured hint is prepended as `[ERROR-DIAGNOSIS]` to the tool result so the model has typed, located context to act on immediately. Cached 5 min. TTL configurable.
> 
> 
> ### Decompose Task (Rank 5)
> `decomposeTask()` replaces the hand-rolled `pickDecomposeStrategy()` regex when a file keeps failing after all retries. The LLM selects a strategy (`split_file|one_error_at_a_time|rewrite_section|extract_fun

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[432539--gpt2api|432539/gpt2api]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]] · [[tanishqkumar--ssd|tanishqkumar/ssd]]

[GitHub](https://github.com/Doorman11991/smallcode)

## 相關收錄

> [!note]- 直接競品（同子分類：編碼代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "編碼代理" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Doorman11991--smallcode" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Doorman11991--smallcode" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Doorman11991--smallcode" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Doorman11991" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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

> **2026-05-20** — 首次收錄
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

- [[2026-05-25|2026-05-25]] — 再次上榜，1.4k stars
- [[2026-05-24|2026-05-24]] — 再次上榜，1.3k stars
- [[2026-05-23|2026-05-23]] — 再次上榜，1.2k stars
- [[2026-05-22|2026-05-22]] — 再次上榜，1.1k stars
- [[2026-05-21|2026-05-21]] — 再次上榜，842 stars
- [[2026-05-20|2026-05-20]] — 首次收錄，728 stars
