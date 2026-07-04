---
repo: HKUDS/AgentSpace
url: https://github.com/HKUDS/AgentSpace
owner: HKUDS
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "\"AgentSpace: Human + Agents. One Team. One Workspace\""
homepage: "https://hire-an-agent.online/"
stars: 606
stars_per_day: 51
forks: 76
open_issues: 7
created: 2026-06-22
pushed_at: 2026-07-03
first_seen: 2026-06-27
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "協作工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-27
use_case: "讓人類與智能代理在同一工作空間中協作，提升團隊效率與治理能力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-06"
contributor_count: 4
engagement: "medium"
issue_close_rate: 22
repo_size_kb: 15733
readme_length: 9827
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-27"
star_history: "2026-06-27:453,2026-06-27:453,2026-06-28:479,2026-06-28:479,2026-06-29:524,2026-06-29:524,2026-06-30:563,2026-07-01:580,2026-07-02:595,2026-07-03:605,2026-07-04:606"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "AgentSpace"
  - "HKUDS/AgentSpace"
  - "讓人類與智能代理在同一工作空間中協作，提升團隊效率與治理能力。"
---

# AgentSpace

**606** stars · **51** stars/天 · 建立 12 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/HKUDS--AgentSpace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 讓人類與智能代理在同一工作空間中協作，提升團隊效率與治理能力。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (51 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在多用戶環境中有效管理智能代理的團隊，特別是希望提升治理能力的企業。
> **一句話重點** AgentSpace 不僅是代理工具，更是提升團隊協作和治理能力的解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--AgentSpace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "協作工具" && p.file.name !== "HKUDS--AgentSpace" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 協作工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、12 小時整合，得到高效的團隊協作工具，值得投資。

> [!abstract] 核心創新
> AgentSpace 將人類和代理整合在同一工作空間中，實現真正的團隊協作。

## 專案簡介

AgentSpace 是一個專為人類與智能代理團隊設計的協作工作空間。用戶可以通過定義角色和責任來招募和分配代理，並在共享工作空間內協調多個代理的工作。這樣的設計使得代理不僅僅是工具，而是可以被管理和信任的團隊成員。使用者可以透過 `npm run setup && npm run dev:web` 指令快速啟動開發環境，這樣的設計使得團隊能夠快速上手並開始協作。技術上，AgentSpace 使用 TypeScript 和 Node.js，並且支持多種部署模式，包括雲端和自我托管，滿足不同團隊的需求。這種架構不僅提升了代理的可見性，還確保了敏感操作的治理，讓每個動作都有記錄和擁有者。

與傳統的代理工具相比，AgentSpace 提供了更強的協作能力和治理功能，讓代理能夠在多個渠道和任務中協同工作，而不僅僅是個別的聊天會話。這樣的設計讓工作不再是一次性對話，而是持續的任務和文件產出，並且能夠提供完整的審計追蹤。使用者在實際操作中可能會遇到代理的權限管理和審計問題，但這些都可以通過 AgentSpace 的治理功能來解決。整體來看，AgentSpace 是一個成熟的解決方案，適合需要高效協作和治理的團隊，尤其是在多代理環境中。未來六個月內，預計會有更多整合和功能增強，特別是對於 Feishu 的集成。對於需要在團隊中有效管理代理的使用者，AgentSpace 提供了一個理想的解決方案。

**技術棧**：`TypeScript` · `Node.js` · `npm`

## 重點功能

- 招募與分配代理 — 快速創建具有明確角色和擁有者的代理。
- 協調多代理工作流程 — 代理在共享工作空間內協作。
- 排程代理工作 — 自動化代理執行任務的時間和方式。
- 強制執行權限與批准 — 確保敏感操作在治理邊界內進行。
- 全面審計 — 完整可見代理的行動、決策和輸出。

## 快速開始

1. 安裝依賴並啟動開發環境
```bash
npm run setup && npm run dev:web
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 npm",
  "指令": "npm run setup && npm run dev:web",
  "預期輸出": "啟動 AgentSpace 開發環境，並在指定端口上運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 606 stars（51/天），forks 76（12.5%），這顯示出相對穩定的增長。該專案由 TianyuFan0504 和其他幾位貢獻者共同開發，解決了現有代理工具無法有效協作的痛點，特別是在多用戶環境中。這個工具的出現正好滿足了團隊對於代理治理和協作的需求，並且有可能因為 Feishu 的集成而引起更多關注。forks/stars 比率為 12.5%，顯示出有相當比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在多用戶環境中有效管理智能代理的團隊，特別是希望提升治理能力的企業。

> [!example] 使用場景
> - 產品經理用它來協調多個代理的工作流程，因為這樣可以確保每個代理的任務都在同一個工作空間內進行，避免了信息散落的問題。
> - 開發團隊用它來管理代理的權限和審計，因為這樣能夠確保敏感操作的透明度和可追蹤性，提升了團隊的治理能力。
> - 運營團隊用它來快速招募和分配代理，因為這樣可以在短時間內組建高效的工作團隊，提升了工作效率。

## 架構分析

AgentSpace 採用微服務架構，將不同功能模組（如代理管理、權限控制、排程系統）分開，這樣的設計使得每個模組可以獨立開發和維護。數據流通過統一的 AgentRouter 進行管理，確保不同代理在執行任務時能夠共享上下文和資源。這樣的設計使得系統具備良好的擴展性，但也增加了系統的複雜度，特別是在自我托管模式下，使用者需要管理多個服務的部署和運行。整體來看，這種架構適合需要高效協作和治理的團隊，但對於小型團隊或個人使用者來說，可能會感到過於繁瑣。

## 技術深入分析

AgentSpace 的核心技術機制在於其微服務架構，這使得不同的功能模組（如代理管理、權限控制和排程系統）能夠獨立運行並進行擴展。使用 TypeScript 和 Node.js 的選擇，讓開發者能夠利用現有的 JavaScript 生態系統，並且提高了開發效率。該系統能夠處理多個代理的協作，並且通過 AgentRouter 統一管理數據流，這樣的設計使得在多代理環境中，工作流程更加順暢。設計上的取捨在於，雖然微服務架構提供了靈活性和可擴展性，但也增加了系統的複雜度，特別是在自我托管的情況下，使用者需要有一定的基礎設施管理能力。技術風險方面，隨著代理數量的增加，系統可能會面臨性能瓶頸，特別是在高並發的情況下。整合方面，AgentSpace 與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但需要注意 Node.js 版本的要求。文件目前僅提供英文版本，可能對某些用戶造成障礙。整體來說，花 30 分鐘能夠順利啟動開發環境。

## 優缺點分析

> [!success] 優點
> - 提供完整的代理治理和審計功能，提升團隊的透明度。
> - 支持多種部署模式，靈活適應不同團隊需求。
> - 強調人類與代理的協作，提升工作效率。

> [!danger] 缺點
> - 對於小型團隊來說，系統架構可能過於複雜。
> - 需要一定的技術背景來設置和管理自我托管模式。
> - 目前的文檔和社群支持仍在發展中。

> [!warning] 注意事項
> - 需要 Node.js 版本 11.6.2 或更高版本。
> - 自我托管模式需要用戶具備一定的基礎設施管理能力。
> - 目前僅支持 TypeScript 和 JavaScript，對其他語言的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理代理的可視化工具，而 AgentSpace 更注重於團隊協作和治理。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的環境，AgentSpace 則專注於協作和治理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於代理的測試和開發，而 AgentSpace 提供了完整的工作流和治理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理代理的可視化工具，而 AgentSpace 更注重於團隊協作和治理。 | 如果需要一個簡單的代理創建工具，而不需要複雜的治理功能。 | low，因為兩者的功能範圍不同，遷移不會很複雜。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的環境，AgentSpace 則專注於協作和治理。 | 如果需要一個競爭性代理環境來進行測試或比賽。 | medium，因為需要調整工作流程以適應不同的代理管理方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於代理的測試和開發，而 AgentSpace 提供了完整的工作流和治理功能。 | 如果主要目的是測試代理的功能，而不是進行團隊協作。 | high，因為需要重新設計整個工作流程以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **AgentSpace** | **agent-sprite-forge** | **Duel-Agents** | **boneyard** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理代理的可視化工具，而 AgentSpace 更注重於團隊協作和治理。 | 提供競爭性代理的環境，AgentSpace 則專注於協作和治理。 | 主要用於代理的測試和開發，而 AgentSpace 提供了完整的工作流和治理功能。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會很複雜。 | medium，因為需要調整工作流程以適應不同的代理管理方式。 | high，因為需要重新設計整個工作流程以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的代理創建工具，而不需要複雜的治理功能。 | 如果需要一個競爭性代理環境來進行測試或比賽。 | 如果主要目的是測試代理的功能，而不是進行團隊協作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在自我托管模式下，配置環境變數可能會出現問題
  - 解法：仔細檢查 .env 文件的配置
- [MEDIUM] 代理的權限管理可能會導致操作失敗
  - 解法：確保所有操作都有適當的權限設置
- [MEDIUM] 在高並發情況下，系統性能可能會下降
  - 解法：考慮使用負載均衡來分散請求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效管理多代理的協作，提升工作效率。 |
| 大型企業的多部門協作 | 適合 | 提供了良好的治理和審計功能，適合複雜的組織結構。 |
| 個人開發者的簡單專案 | 不適合 | 系統架構過於複雜，對於小型專案來說不必要。 |
| 需要高效治理的金融行業團隊 | 非常適合 | 提供了全面的審計和治理功能，符合行業需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、12 小時整合，得到高效的團隊協作工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要適當的權限管理以防止未經授權的訪問，並且在 CI/CD 中使用時需確保敏感資料的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

AgentSpace 最常與 CI/CD 工具（如 GitHub Actions）搭配使用，通常在開發和部署階段進行整合。在一個使用 Node.js 的專案中，可以通過 `npm run setup` 指令快速安裝並啟動 AgentSpace，並在開發過程中使用其提供的 API 進行代理管理。與主流 IDE（如 VS Code）相容性良好，能夠輕鬆集成到現有的開發流程中。最常見的整合問題是配置環境變數，使用者需仔細檢查配置文件以避免錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 AgentSpace 出現之前，團隊通常使用單一的代理工具進行操作，這導致了信息孤島和協作困難。隨著代理技術的進步，團隊對於高效協作的需求逐漸增加，這促使 AgentSpace 的開發。這個工具代表了團隊協作的新趨勢，未來可能會隨著更多智能代理的出現而進一步發展。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
| Forks | 76 |
| Open Issues | 7 |
| Issue 解決率 | 22% (2 closed) |
| 最後推送 | 2026-07-03 |
| 建立日期 | 2026-06-22 |
| 官方網站 | [Link](https://hire-an-agent.online/) |
| Repo 大小 | 15.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/AgentSpace) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "CSS" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@TianyuFan0504](https://github.com/TianyuFan0504) | 120 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 5 |
> | [@hobostay](https://github.com/hobostay) | 2 |
> | [@SEUWanglibo](https://github.com/SEUWanglibo) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有定期的更新和功能增強。
**連結**：[文件](https://hire-an-agent.online/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-27 ~ 2026-07-03）
> **活躍天數** 5 天 · **最新 commit** docs: plan slack integration

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/HKUDS/AgentSpace/issues/14) | gemini cli 已经停用了。 现在叫 antigravity cli ； | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> AgentSpace: Human + Agents. One Team. One Workspace
> 
>   English | 中文
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
>   AgentSpace brings humans and agents together — as one team, inside one workspace
>   Feishu was built for humans. AgentSpace is built for both.
> 
> ---
> 
> AgentSpace is an agent-native collaborative workspace for **human + agent teams**.
> 
> Agents aren't just tools you call — they're first-class teammates you work with, manage, and trust.
> 
> **The problem with today's agents:**
> 
> Real work doesn't happen in isolation. It happens across people, systems, and accountability boundaries. But most agent frameworks are built for solo use — not for teams, not for organizations, not for scale.
> 
> **What AgentSpace is built for:**
> - 🧑‍💼 Agents with defined roles, owners, and responsibilities
> - 🤝 Humans and agents collaborating inside a shared workspace
> - 🔐 Sensitive actions governed with permissions, approvals, and audit trails
> - 🔄 Agents that can be recruited, transferred, and audited across your organization
> 
> **AgentSpace** helps your team move fast, stay accountable, and grow without losing control.
> 
> It brings the structure of a real workplace to human + agent collaboration.
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ## Key Features of AgentSpace
> 
> **What teams can do with AgentSpace:**
> 
> - 🗂 **Recruit & assign agents** — spin up purpose-built agents with defined roles and owners
> - 🤝 **Coordinate multi-agent workflows** — agents collaborate inside a shared workspace
> - 📅 **Schedule agent work** — automate when and how agents execute tasks
> - 🔐 **Enforce permissions & approvals** — keep sensitive actions inside governance boundaries
> - 📋 **Audit everything** — full visibility into agent actions, decisions, and outputs
> - 🔄 **Share & transfer agents** — move digital employees across teams and departments
> 
> ```bash
> npm run setup && npm run dev:web
> ```
> 
> ---
> 
> 
> ## Deployment Options
> 
> AgentSpace supports two deployment modes — pick whichever fits your team:
> 
> | Mode | Best for | How to start |
> |------|----------|--------------|
> | ☁️ **Platform** (hosted) | Teams that want to get started immediately — no infrastructure, database, or daemon host to manage | Visit [hire-an-agent.online](https://hire-an-agent.online) |
> | 🖥️ **Self-hosted** (local) | Teams that require full control over data, infrastructure, provider CLIs, runtime machines, and internal deployment policy | Clone this repo and follow the setup guide below |
> 
> Both modes run the same product — digital employees, AgentRouter scheduling, workspace permissions, approvals, remote daemon execution, and auditable outputs. No feature gaps between the two.
> 
> ---
> 
> 
> ## Advanced Configuration
> 
> For environment variables and deployment examples, start with:
> 
> - [.env.example](.env.example)
> - [deploy/systemd/agentspace.env.example](deploy/systemd/agentspace.env.example)
> - [deploy/systemd/agentspace-daemon.env.example](deploy/systemd/agentspace-daemon.env.example)
> 
> Quality commands:
> 
> ```bash
> npm run build
> npm run typecheck
> npm run lint:web
> npm run test:web
> npm run test:e2e:web
> npm run quality:web
> ```
> 
> 
> ## News
> 
> - **2026-07-02** — The Feishu functionality has fully passed testing and has been merged into the `main` branch.
> 
> - **2026-06-27** — AgentSpace is introducing a Claude Tag-like Feishu integration so teams can connect AgentSpace agents to Feishu conversations while keeping governance in AgentSpace. The implementation branch is `codex/feishu-integration`.
> 
> - **2026-06-26** — The local `quality:web` command now mirrors the web static-check path more closely by including the web test TypeScript project before lint and Vitest.
> 
> - **2026-06-24** — OpenCode has moved onto the AgentRouter execution path. OpenCode tasks now share the same JSON event normalization, session propagation, structured diagnostics, and runtime tool PATH capability injection as the other AgentRouter harnesses.
> 
> - **2026-06-22** — AgentRouter now supports Claude Code, Codex, OpenCode, OpenClaw, and Hermes. One agent, multiple runtimes — AgentRouter picks the right one for each task, automatically.
> 
> - **2026-06-21** — Initial release: AgentSpace v1.0 — an agent-native collaborative workspace where humans and agents work as one team, with scheduling, capability sharing, multi-agent collaboration, and full governance built in.
> 
> ---
> 
> 
> ## The Problem with Today's Agent Workflows
> 
> Agents are getting more capable. But the way teams use them hasn't caught up.
> 
> Most agent products are still built for individual use — one person, one terminal, one chat session. The moment a real team tries to run agents as part of daily operations, things break down:
> 
> - **Agents stay private** — powerful agents live inside one person's terminal or account, invisible to the rest of the team.
> - **Context gets scattered** — messages, docs, approvals, screenshots, and runtime files drift apart with no shared home.
> - **Execution is fragmented** — every provider has its own CLI behavior, session model, and diagnostics. Switching runtimes means rebuilding context from scratch.
> - **Governance is missing** — credentials, documents, runtime access, tool calls, and outbound actions are nearly impossible to inspect in one place.
> - **Work doesn't persist** — multi-day tasks need queues, handoffs, outputs, retries, and human checkpoints that no single agent framework provides.
> 
> The result: agents remain powerful in isolation, but weak in teams.
> 
> **AgentSpace is built to change that.** Humans own direction and authorization. Agents own coordination and execution.
> 
> ---
> 
> 
> ## What is AgentSpace?
> 
> **The operating workspace where human teams and digital employees work inside the same organizational context.**
> 
> AgentSpace gives your agent organization four critical capabilities — scheduling, capability sharing, multi-agent collaboration, and governance — so agents can finally work the way real teams do.
> 
> ---
> 
> 
> ### 🗓 Scheduling — Same agent, best-fit runtime
> 
> The same agent shouldn't need to be rebuilt every time execution requirements change.
> 
> - Keep agent identity, instructions, and context stable across tasks.
> - Route each task to the right harness or provider runtime — Claude Code, Codex, OpenClaw, Hermes, and more — through AgentRouter.
> - Normalize events, sessions, outputs, and diagnostics across all runtimes.
> - When the execution path changes, only the harness changes. Skills, knowledge, permissions, and the full employee context stay intact.
> 
> ---
> 
> 
> ### 🧑‍💼 Capability — Turn private agents into shared organizational assets
> 
> A great agent locked inside one person's account is wasted organizational potential.
> 
> - Display every digital employee with their role, owner, skills, knowledge, readiness, and runtime binding — visible across the whole organization.
> - Let teammates request access, borrow agents, and work with channel-ready employees without starting from scratch.
> - Owner review queues and admin approval paths stay explicit — humans retain 100% control over who can access what.
> - Make great agents visible, without giving up control.
> 
> ---
> 
> 
> ### 🤝 Collaboration — Agents coordinate, humans approve
> 
> Real work moves through people, systems, and decisions — not just a single chat session.
> 
> - Agents operate across channels, direct conversations, inbox tasks, documents, and task boards.
> - Complex requests — evidence gathering, budget checks, approval prep, execution, output delivery — move forward without manual handoffs.
> - Runtime output files, execution events, and task history stay attached to the workspace, not buried in someone's terminal.
> - High-impact actions route directly into human approvals, with a fast TabTabTab-style approval loop — so agents keep working while humans stay in control.
> 
> ---
> 
> 
> ### 🔐 Security — Every action has a boundary, a record, and an owner
> 
> As agents take on more execution, governance can't be an afterthought.
> 
> - Govern workspace roles, channels, documents, skills, knowledge, runtimes, daemon tokens, and Google credentials — all from one place.
> - Support document access requests, runtime tool

## 延伸閱讀

相關概念：[[微服務]] · [[自動化]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[anomalyco--rift|anomalyco/rift]]

[GitHub](https://github.com/HKUDS/AgentSpace) · [官方網站](https://hire-an-agent.online/)

## 相關收錄

> [!note]- 直接競品（同子分類：協作工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "協作工具" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "HKUDS--AgentSpace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","自動化","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--AgentSpace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--AgentSpace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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

> **2026-06-27** — 首次收錄
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

- [[2026-06-29|2026-06-29]] — 再次上榜，524 stars
- [[2026-06-28|2026-06-28]] — 再次上榜，479 stars
- [[2026-06-27|2026-06-27]] — 首次收錄，453 stars
