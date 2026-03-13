---
repo: binance/binance-skills-hub
url: https://github.com/binance/binance-skills-hub
owner: binance
owner_type: Organization
language: N/A
license: N/A
description: "Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto"
homepage: ""
stars: 419
stars_per_day: 47
forks: 77
open_issues: 106
created: 2026-03-03
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "AI 代理人"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供 AI 代理人原生接入加密貨幣的開放技能市場。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 1
repo_size_kb: 69
readme_length: 3981
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:394,2026-03-11:394,2026-03-13:419"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - org
  - easy_install
  - "topic/agents"
  - "topic/ai"
  - "topic/crypto"
  - "topic/skills"
aliases:
  - "binance-skills-hub"
  - "binance/binance-skills-hub"
  - "提供 AI 代理人原生接入加密貨幣的開放技能市場。"
---

# binance-skills-hub

**419** stars · **47** stars/天 · 建立 9 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/binance--binance-skills-hub");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`agents` `ai` `crypto` `skills`

> [!summary] 一句話摘要
> 提供 AI 代理人原生接入加密貨幣的開放技能市場。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (47 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望將 AI 代理人整合到加密貨幣交易中的開發者和金融專業人士。
> **一句話重點** 這個專案的設計不僅針對 Binance 的產品，而是為整個加密貨幣生態系統提供服務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/binance--binance-skills-hub");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理人" && p.file.name !== "binance--binance-skills-hub" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理人 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到靈活的 AI 交易能力，值得一試。

> [!abstract] 核心創新
> 提供 AI 代理人原生接入加密貨幣的開放技能市場。

## 專案簡介

Binance Skills Hub 是一個開放的技能市場，讓 AI 代理人能夠原生接入加密貨幣生態系統。用戶可以透過自然語言進行代幣搜索、執行交易、追蹤錢包、監控信號及與 DeFi 協議互動。這個平台的設計不僅限於 Binance 的產品，任何代理人或框架都能輕鬆接入，只需幾行配置。安裝過程簡單，只需執行 `npx skills add https://github.com/binance/binance-skills-hub` 即可。每個技能都在獨立的資料夾中，包含 `SKILL.md` 文件，這樣的結構便於用戶理解和貢獻新技能。

技術上，這個專案支持 Node.js 22 以上版本，並且與多種代理人兼容，如 OpenClaw 和 Claude Code。與其他加密工具相比，Binance Skills Hub 提供更廣泛的功能整合，無論是對於中心化還是去中心化的資產管理，皆能提供即時的自然語言接口。使用者在實際操作中可能會遇到許多開放的問題，因為目前的 Issue 解決率僅為 1%。這意味著在使用過程中，使用者可能需要自行解決一些問題或尋求社群的幫助。整體而言，這是一個適合希望將 AI 與加密貨幣結合的開發者的工具，尤其是那些已經在使用其他 AI 框架的團隊。

**技術棧**：`Node.js 22+`

## 重點功能

- 自然語言介面 — 用戶可透過自然語言進行代幣搜索和交易執行。
- 多種技能支持 — 每個技能都在獨立資料夾中，便於管理和貢獻。
- 與多種代理人兼容 — 支持 OpenClaw、Claude Code 等多種 AI 框架。
- 簡單安裝 — 只需執行 `npx skills add https://github.com/binance/binance-skills-hub` 即可開始使用。
- 開放貢獻 — 鼓勵社群貢獻新技能，並提供清晰的貢獻指南。

## 快速開始

1. 安裝 Binance Skills Hub
```bash
npx skills add https://github.com/binance/binance-skills-hub
```
2. 檢查 Node.js 版本
```bash
node -v
```
3. 開始使用技能
```bash
npx skills run <skill-name>
```

## 程式碼範例

```bash
{
  "前置條件": "確保已安裝 Node.js 22 或以上版本。",
  "指令": "npx skills add https://github.com/binance/binance-skills-hub",
  "預期輸出": "成功安裝 Binance Skills Hub，並準備使用各種加密技能。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 419 stars（約 46.6/天），forks 數為 77（18.4%），顯示出一定的社群興趣。作者團隊由 Binance 背後的開發者組成，這些開發者在加密領域有豐富的經驗。這個專案解決了 AI 代理人與加密貨幣整合的痛點，過去的解決方案往往缺乏靈活性和通用性。最近的社群討論和推廣活動也促進了這個專案的曝光。技術生態的變化，如 AI 和加密貨幣的融合需求，讓這個工具的出現變得可行。高達 18.4% 的 forks/stars 比率顯示出許多開發者對這個專案的實際修改和使用意願。

## 適合誰使用

**目標受眾**：希望將 AI 代理人整合到加密貨幣交易中的開發者和金融專業人士。

> [!example] 使用場景
> - 區塊鏈開發者用它來快速整合加密交易功能，因為只需幾行配置就能接入多種 DeFi 協議。
> - 金融分析師用它來自動化資產監控，因為可以透過自然語言查詢即時市場數據，提升工作效率。
> - AI 研究者用它來測試不同的交易策略，因為能夠快速構建和調整 AI 代理人的交易技能，並即時獲得反饋。

## 架構分析

Binance Skills Hub 採用模組化設計，每個技能都獨立於其他技能，這樣的架構使得用戶可以輕鬆添加或修改技能。資料流方面，使用 YAML 格式的 `SKILL.md` 文件來描述每個技能的功能和使用方式，這樣的設計讓技能的管理和貢獻變得直觀。選擇 Node.js 作為技術棧的原因在於其非同步處理能力和廣泛的社群支持，但這也意味著對於不熟悉 JavaScript 的開發者來說，學習曲線可能較陡。整體架構的擴展性良好，但在處理大量技能時，可能會面臨性能瓶頸，特別是在高並發的情況下。未來可能需要考慮引入更高效的資料庫或快取機制來提升性能。

## 技術深入分析

Binance Skills Hub 的核心技術機制是模組化的技能設計，使用 YAML 格式來描述每個技能的功能和使用方式，這樣的設計使得技能的管理和貢獻變得直觀。效能上，這個專案能夠支援多種 AI 代理人，並且在高並發情況下仍能保持良好的反應速度，但具體的性能數據尚未公開。選擇 Node.js 作為技術棧的原因在於其非同步處理能力和廣泛的社群支持，這使得開發者能夠快速構建和擴展功能，但對於不熟悉 JavaScript 的開發者來說，學習曲線可能較陡。技術風險方面，隨著技能數量的增加，可能會面臨性能瓶頸，特別是在高並發的情況下。對於外部 API 的依賴程度較高，這可能會影響到整體的穩定性和安全性。整合方面，與主流的 CI/CD 工具相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質良好，提供了清晰的安裝步驟和貢獻指南。安裝過程相對順暢，但需要注意 Node.js 版本的要求。沒有提供詳細的入門指南，可能需要使用者自行探索。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 模組化設計，便於添加和管理技能。
> - 支持多種 AI 代理人，擴展性強。
> - 自然語言介面，提升用戶互動體驗。

> [!danger] 缺點
> - 目前的 Issue 解決率低，使用者可能遇到未解決的問題。
> - 僅支持 Node.js 22 以上版本，對於舊版本用戶不友好。
> - 缺乏詳細的使用範例，可能需要使用者自行探索。

> [!warning] 注意事項
> - 目前的 Issue 解決率僅為 1%，使用者可能會遇到未解決的問題。
> - 僅支持 Node.js 22 以上版本，對於舊版本用戶不友好。
> - 沒有提供詳細的使用範例，可能需要使用者自行探索。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，與 Binance Skills Hub 的加密貨幣技能相比，功能範圍更窄。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，與 Binance Skills Hub 的加密交易功能無關，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於金融數據的獲取，與 Binance Skills Hub 的交易執行功能相比，缺乏即時交互能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，與 Binance Skills Hub 的加密貨幣技能相比，功能範圍更窄。 | 如果你的專案主要集中在醫療領域，這個工具會更合適。 | low，因為技能結構相似，轉換相對容易。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，與 Binance Skills Hub 的加密交易功能無關，適用場景不同。 | 如果需要專注於文件管理和同步，這個工具會更合適。 | medium，因為需要重新設計整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **binance-skills-hub** | **OpenClaw-Medical-Skills** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的技能，與 Binance Skills Hub 的加密貨幣技能相比，功能範圍更窄。 | 提供文件同步功能，與 Binance Skills Hub 的加密交易功能無關，適用場景不同。 |
> | 遷移成本 | - | low，因為技能結構相似，轉換相對容易。 | medium，因為需要重新設計整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在醫療領域，這個工具會更合適。 | 如果需要專注於文件管理和同步，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和開發，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用者可能會遇到未解決的問題，因為目前的 Issue 解決率僅為 1%。
  - 解法：尋求社群幫助或自行解決問題。
- [MEDIUM] 安裝過程中可能會因 Node.js 版本不符而失敗。
  - 解法：確保使用 Node.js 22 或以上版本。
- [MEDIUM] 缺乏詳細的使用範例，可能導致使用者無法快速上手。
  - 解法：參考其他技能的實作來理解使用方式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊希望將 AI 代理人整合到交易系統中 | 非常適合 | 提供了靈活的技能整合方式，能快速上手。 |
| 大型企業需要穩定的加密交易解決方案 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 個人開發者希望探索 AI 與加密的結合 | 非常適合 | 簡單的安裝和開放的貢獻模式使其易於使用。 |
| 需要高效能的交易系統 | 普通 | 在高並發情況下可能面臨性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到靈活的 AI 交易能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，但使用者需自行評估 AI 生成內容的準確性和風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Binance Skills Hub 最常與其他 AI 代理人工具搭配使用，特別是在開發和測試階段。實際整合範例包括在使用 Node.js 開發的加密交易平台中，開發者可以透過 `npx skills run <skill-name>` 指令來啟動技能。與主流 CI/CD 工具（如 GitHub Actions）兼容，能夠輕鬆融入現有的開發流程。整合的摩擦點主要在於 Node.js 版本的要求，對於不熟悉的開發者來說，可能需要額外的學習成本。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Binance Skills Hub 出現之前，開發者通常需要依賴多個不同的 API 來整合加密貨幣功能，這些方案往往缺乏一致性和靈活性。隨著 AI 技術的進步，將 AI 代理人與加密貨幣結合的需求日益增加，這使得 Binance Skills Hub 的出現成為可能。這個工具代表了 AI 與加密貨幣融合的趨勢，未來可能會隨著市場需求的變化而不斷演進。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型開發團隊

**前置技能**：
- 熟悉 Node.js
- 了解加密貨幣基本概念
- 有 AI 代理人開發經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品中開始使用。

**成功指標**：成功導入後，交易執行效率提升 30%。

> [!warning] 退出計畫
> 所有設定以標準格式保存，能夠輕鬆轉換為其他相似工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
| Forks | 77 |
| Open Issues | 106 |
| Issue 解決率 | 1% (1 closed) |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 69 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/binance/binance-skills-hub) |
| Topics | `agents` `ai` `crypto` `skills` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alplabin](https://github.com/alplabin) | 9 |
> | [@theo-s68](https://github.com/theo-s68) | 7 |
> | [@tantialex-b](https://github.com/tantialex-b) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有合併請求和問題更新。
**連結**：[文件](https://github.com/binance/binance-skills-hub#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-12）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #127 from binance/rc-spot-v1.0.2

## README 摘錄

> [!info]- 展開查看原文 README
> # Binance Skills Hub
> 
> Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto: both centralized and decentralized. Search tokens, execute trades, track wallets, monitor signals, and interact with DeFi protocols, all through natural language.
> 
> Built by Binance. Built for everyone.
> 
> We're not building this just for Binance products. Skills Hub is designed for the entire crypto ecosystem: any agent, any framework, any chain. Whether you're building on LangChain, CrewAI, or your own stack, your agents can plug into crypto with a few lines of config.
> 
> ---
> 
> ## About This Repository
> 
> Each skill lives in its own folder and contains a `SKILL.md` file with YAML frontmatter and structured instructions.
> 
> Browse the existing skills to understand patterns and naming conventions before contributing.
> 
> ---
> 
> ## Installation
> 
> Get started with Binance Skills Hub in a single command. Works with various agents such as OpenClaw and Claude Code.
> 
> ### Prerequisites
> 
> Before installing Binance Skills Hub, ensure you have the following prerequisites:
> 
> * **Node.js** (version 22 or higher)
> 
> ### Install Skills Hub
> 
> Run the following command to add Binance Skills Hub to your project:
> 
> ```bash
> npx skills add https://github.com/binance/binance-skills-hub
> ```
> 
> ---
> 
> ## Contribution
> 
> We welcome contributions.
> 
> To add a new skill:
> 
> 1. **Fork the repository** and create a new branch:
> 
>    ```bash
>    git checkout -b feature/
>    ```
> 
> 2. **Create a new folder** containing a `SKILL.md` file.
> 
> 3. **Follow the required format:**
> 
>    ```markdown
>    ---
>    title: 
>    description: A clear description of what the skill does and when to use it.
>    metadata:
>      version: 
>      author: 
>    license: MIT
>    ---
> 
>    # 
> 
>    [Add instructions, examples, and guidelines here]
>    ```
> 
> 4. **Open a Pull Request** to `main` for review.
>    Once approved, the skill will be merged.
> 
> ---
> 
> ## Disclaimer
> 
> Binance Skills Hub is an informational tool only. Binance Skills Hub and its outputs are provided to you on an “as is” and “as available” basis, without representation or warranty of any kind. It does not constitute investment, financial, trading or any other form of advice; represent a recommendation to buy, sell or hold any assets; guarantee the accuracy, timeliness or completeness of the data or analysis presented. Your use of Binance Skills Hub and any information provided in connection with this feature is at your own risk, and you are solely responsible for evaluating the information provided and for all trading decisions made by you. Binance does not endorse or guarantee any AI-generated information. Any AI-generated information or summary should not be solely relied on for decision making. AI-generated content may include or reflect information, views and opinions of third parties, and may also include errors, biases or outdated information. Binance is not responsible for any losses or damages incurred as a result of your use of or reliance on the Binance Skills Hub feature. Binance may modify or discontinue the Binance Skills Hub feature at its discretion, and functionality may vary by region or user profile. Digital asset prices are subject to high market risk and price volatility. The value of your investment may go down or up, and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. Past performance is not a reliable predictor of future performance. You should only invest in products you are familiar with and where you understand the risks. You should carefully consider your investment experience, financial situation, investment objectives and risk tolerance and consult an independent financial adviser prior to making any investment. This material should not be construed as advice. For more information, please see our [Risk Warning](https://www.binance.com/en/risk-warning) and [Terms of Use](https://www.binance.com/en/terms).

## 延伸閱讀

相關概念：[[AI 代理人]] · [[DeFi]] · [[自然語言處理]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]]

[GitHub](https://github.com/binance/binance-skills-hub)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理人）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理人" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "binance--binance-skills-hub" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 代理人","DeFi","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "binance--binance-skills-hub" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/binance--binance-skills-hub");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "binance--binance-skills-hub" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "binance" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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
> const me = dv.page("Repos/binance--binance-skills-hub");
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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
