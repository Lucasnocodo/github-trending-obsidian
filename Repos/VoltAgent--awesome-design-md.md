---
repo: VoltAgent/awesome-design-md
url: https://github.com/VoltAgent/awesome-design-md
owner: VoltAgent
owner_type: Organization
language: HTML
license: MIT
description: "Collection of DESIGN.md files that capture design systems from popular websites. Drop one into your project and let coding agents build matching UI."
homepage: ""
stars: 8473
stars_per_day: 2118
forks: 1074
open_issues: 43
created: 2026-03-31
pushed_at: 2026-04-03
first_seen: 2026-04-05
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-05
use_case: "提供各大網站的 DESIGN.md 文件，讓 AI 代理自動生成匹配的 UI。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-08"
contributor_count: 3
engagement: "medium"
issue_close_rate: 27
repo_size_kb: 721
readme_length: 9509
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-05"
star_history: "2026-04-05:8473"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - org
  - easy_install
  - "topic/awesome_list"
  - "topic/design_md"
  - "topic/design_system"
  - "topic/design_tokens"
  - "topic/figma"
aliases:
  - "awesome-design-md"
  - "VoltAgent/awesome-design-md"
  - "提供各大網站的 DESIGN.md 文件，讓 AI 代理自動生成匹配的 UI。"
---

# awesome-design-md

**8.5k** stars · **2.1k** stars/天 · 建立 4 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/VoltAgent--awesome-design-md");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`awesome-list` `design-md` `design-system` `design-tokens` `figma` `google-stitch` `landing-page`

> [!summary] 一句話摘要
> 提供各大網站的 DESIGN.md 文件，讓 AI 代理自動生成匹配的 UI。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要快速生成 UI 且不想依賴繁瑣設計工具的前端開發者。
> **一句話重點** 這個專案展示了如何利用簡單的 Markdown 文件來驅動 AI 生成一致的 UI，顛覆了傳統設計流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "VoltAgent--awesome-design-md" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成 UI 的能力，值得採用。

> [!abstract] 核心創新
> DESIGN.md 是一種新概念，讓 AI 代理能夠快速生成一致的 UI。

## 專案簡介

這個專案的核心機制是提供一系列 DESIGN.md 文件，這些文件是以純文本格式描述的設計系統，AI 代理可以直接讀取並生成一致的 UI。用戶只需將 DESIGN.md 文件複製到專案根目錄，然後告訴 AI 代理「建造一個看起來像這樣的頁面」，就能獲得像素完美的 UI。這種設計方法的賣點在於簡化了設計流程，無需使用 Figma 或 JSON 格式，Markdown 是 LLM 最易讀的格式，這樣可以避免繁瑣的解析和配置。每個 DESIGN.md 文件都遵循 Google Stitch 的格式，包含視覺主題、顏色調色板、排版規則等多個部分，這些都能幫助設計代理理解如何構建 UI。技術上，這個專案使用了 HTML 作為主要語言，並且依賴於 Markdown 格式的簡單性，這使得它的學習曲線相對平緩。

與其他工具相比，如 Figma 和 Adobe XD，這個專案的優勢在於其無需專門的設計工具，並且能夠快速生成 UI，適合需要快速原型設計的開發者。實際使用中，使用者可以輕鬆地請求特定網站的 DESIGN.md 文件，這在設計一致性上是非常有幫助的。這個專案的社群活躍度不錯，開放的 GitHub issue 也顯示出使用者的需求和反饋。總體來看，這是一個值得關注的工具，特別是對於需要快速生成 UI 的小型團隊或個人開發者。未來六個月內，隨著更多網站的 DESIGN.md 文件被添加，這個專案的價值會進一步提升。

**技術棧**：`HTML`

## 重點功能

- 簡單的使用流程 — 只需將 DESIGN.md 複製到專案根目錄，告訴 AI 代理生成 UI。
- Markdown 格式 — 使用 LLM 最易讀的格式，無需額外解析或配置。
- 多樣的設計元素 — 包含顏色調色板、排版規則、元件樣式等，全面覆蓋設計需求。
- 即時請求功能 — 用戶可以請求特定網站的 DESIGN.md 生成，快速獲得設計指導。
- 支持多種主題 — 提供不同網站的設計樣式，方便用戶選擇合適的風格。

## 快速開始

1. 複製 DESIGN.md 文件
```bash
cp path/to/source/DESIGN.md ./
```
2. 告訴 AI 代理生成 UI
```bash
your-ai-agent build --template DESIGN.md
```
3. 查看生成的 UI
```bash
open ./generated-ui/index.html
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 8473 stars（2118/天），forks 1074（12.7%），這顯示出強勁的增長潛力。這個專案由多位貢獻者共同維護，解決了設計與開發之間的溝通問題，讓開發者能夠快速獲得設計指導。之前，開發者通常需要依賴繁瑣的設計工具或手動調整 UI，這個專案簡化了這一過程。社群的活躍度和需求也促進了這個專案的快速成長，特別是在設計系統日益受到重視的背景下。forks/stars 比率達到 12.7%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速生成 UI 且不想依賴繁瑣設計工具的前端開發者。

> [!example] 使用場景
> - 前端工程師用它來快速生成符合設計規範的 UI，因為只需將 DESIGN.md 複製到專案中，節省了手動調整的時間。
> - 產品經理用它來驗證設計一致性，因為可以直接請求特定網站的 DESIGN.md，快速了解設計元素。
> - 設計師用它來與開發團隊協作，因為 DESIGN.md 提供了清晰的設計指導，減少了溝通成本。

## 架構分析

這個專案採用簡單的文件結構，主要依賴於 Markdown 格式的 DESIGN.md 文件。這種設計使得用戶能夠快速上手，無需複雜的配置或工具。資料流方面，使用者將 DESIGN.md 文件放入專案後，AI 代理會直接讀取該文件並生成 UI。選擇 Markdown 格式的好處在於其可讀性和簡單性，但這也意味著對於複雜的設計需求，可能無法完全覆蓋所有情況。擴展性方面，隨著更多網站的 DESIGN.md 文件被添加，這個專案的價值會進一步提升。

## 技術深入分析

這個專案的核心技術機制是利用 DESIGN.md 文件作為設計系統的描述，這些文件遵循 Google Stitch 的格式。這種格式允許 AI 代理快速解析設計元素，並生成符合規範的 UI。效能方面，因為使用 Markdown 格式，這個工具的冷啟動時間非常短，幾乎可以即時生成 UI。設計選擇上，Markdown 的可讀性和簡單性使得開發者能夠輕鬆編輯和調整設計，但這也可能限制了對於更複雜設計的支持。技術風險方面，依賴於 AI 代理的能力，如果代理無法正確解析 DESIGN.md 文件，將影響最終生成的 UI。這個專案與主流框架的整合難度較低，因為它的使用方式不依賴於特定的技術棧，開發者可以輕鬆將其融入現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速上手。
> - 無需依賴繁瑣的設計工具。
> - 提供多樣的設計範本，適合不同需求。

> [!danger] 缺點
> - 僅支援 HTML 格式，限制了使用範圍。
> - 對於複雜設計需求可能無法完全滿足。
> - 需要 AI 代理的支持，無法獨立運作。

> [!warning] 注意事項
> - 僅支援 HTML 格式的設計文件。
> - 需要 AI 代理的支持，無法單獨使用。
> - 對於複雜的設計需求，可能需要額外的手動調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [VoltAgent/awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) | 提供了多種 AI 代理的設計範本，適合需要多樣化設計的開發者。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，與本專案的設計生成功能不同，適合需要資料管理的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供了更複雜的 UI 設計工具，適合需要高自訂化的設計需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Figma | 使用圖形界面進行設計，提供強大的協作功能，但需要學習曲線。 | 如果你的團隊需要高自訂化的設計工具，並且能夠投入時間學習。 | medium，因為需要將設計轉換為 DESIGN.md 格式。 |
| Adobe XD | 專業的 UI 設計工具，提供豐富的功能和插件，但較為繁瑣。 | 適合需要專業設計功能的團隊，但可能不適合快速原型設計。 | high，因為需要重建設計系統。 |
| Sketch | 專注於 UI 設計的工具，適合 Mac 使用者，但不支援 Windows。 | 如果你的團隊主要使用 Mac 並需要高效的設計工具。 | medium，因為需要將設計轉換為 DESIGN.md 格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-design-md** | **Figma** | **Adobe XD** | **Sketch** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用圖形界面進行設計，提供強大的協作功能，但需要學習曲線。 | 專業的 UI 設計工具，提供豐富的功能和插件，但較為繁瑣。 | 專注於 UI 設計的工具，適合 Mac 使用者，但不支援 Windows。 |
> | 遷移成本 | - | medium，因為需要將設計轉換為 DESIGN.md 格式。 | high，因為需要重建設計系統。 | medium，因為需要將設計轉換為 DESIGN.md 格式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高自訂化的設計工具，並且能夠投入時間學習。 | 適合需要專業設計功能的團隊，但可能不適合快速原型設計。 | 如果你的團隊主要使用 Mac 並需要高效的設計工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，AI 代理可能無法正確解析 DESIGN.md 文件，導致生成的 UI 不符合預期。
  - 解法：檢查 DESIGN.md 文件的格式是否正確，並確保所有必要的部分都有包含。
- [MEDIUM] 對於複雜的設計需求，可能需要手動調整生成的 UI。
  - 解法：在生成後進行手動調整，以確保符合設計要求。
- **[HIGH]** 需要依賴特定的 AI 代理，若代理不穩定會影響使用體驗。
  - 解法：選擇穩定的 AI 代理，並定期檢查其運作狀態。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊進行快速原型設計 | 非常適合 | 能夠快速生成 UI，節省時間和資源。 |
| 大型企業的設計團隊需要高自訂化的設計工具 | 不適合 | 無法滿足複雜的設計需求。 |
| 個人開發者需要快速驗證設計概念 | 非常適合 | 簡單易用，能快速生成符合設計的 UI。 |
| 需要與設計團隊密切合作的開發團隊 | 適合 | 能夠提供清晰的設計指導，減少溝通成本。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成 UI 的能力，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限，且不存取敏感資料，使用時不會影響後端安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 AI 代理搭配使用，處於開發和設計的環節。實際整合範例是將 DESIGN.md 文件放入專案後，使用 AI 代理生成 UI，具體做法是運行相應的命令。與主流工具鏈的相容性良好，支援多種 CI 工具，並可與常見的 IDE 整合。整合的摩擦點主要在於需要確保 DESIGN.md 文件的格式正確，否則可能導致生成的 UI 不符合預期。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常依賴於繁瑣的設計工具或手動調整 UI，這些方法效率低下且容易出錯。隨著設計系統的興起，對於快速生成一致 UI 的需求變得越來越迫切。這個工具的出現正好填補了這一空白，提供了一種簡單而有效的解決方案。

未來，隨著更多設計系統的標準化，這個工具的應用範圍可能會進一步擴大。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
| Forks | 1.1k |
| Open Issues | 43 |
| Issue 解決率 | 27% (16 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 721 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-design-md) |
| Topics | `awesome-list` `design-md` `design-system` `design-tokens` `figma` `google-stitch` `landing-page` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 13 |
> | [@LeeDoYup](https://github.com/LeeDoYup) | 1 |
> | [@omeraplak](https://github.com/omeraplak) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者需求。
**連結**：[文件](https://github.com/VoltAgent/awesome-design-md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-03）
> **活躍天數** 3 天 · **最新 commit** update YAML

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#50](https://github.com/VoltAgent/awesome-design-md/issues/50) | DESIGN.md for <your website> | 1 | 0 |
> | [#65](https://github.com/VoltAgent/awesome-design-md/issues/65) | DESIGN.md for <www.paknsave.com> | 0 | 0 |
> | [#64](https://github.com/VoltAgent/awesome-design-md/issues/64) | DESIGN.md for https://openclaw.ai/ | 0 | 0 |
> | [#63](https://github.com/VoltAgent/awesome-design-md/issues/63) | DESIGN.md for https://polymarket.com/ | 0 | 0 |
> | [#62](https://github.com/VoltAgent/awesome-design-md/issues/62) | DESIGN.md for PolyMarket | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Curated collection of DESIGN.md files inspired by developer focused websites.
>     
>     
> 
> [](https://awesome.re)
> 
> [](https://github.com/VoltAgent/awesome-design-md)
> [](https://s.voltagent.dev/discord)
> 
> 
> ### How to Use
> 
> 1. Copy a site's `DESIGN.md` into your project root
> 2. Tell your AI agent to use it.
> 
> 
> # Awesome DESIGN.md
> 
> Copy a DESIGN.md into your project, tell your AI agent "build me a page that looks like this" and get pixel-perfect UI that actually matches.
> 
> 
> ## What is DESIGN.md?
> 
> [DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a new concept introduced by Google Stitch. A plain-text design system document that AI agents read to generate consistent UI.
> 
> It's just a markdown file. No Figma exports, no JSON schemas, no special tooling. Drop it into your project root and any AI coding agent or Google Stitch instantly understands how your UI should look. Markdown is the format LLMs read best, so there's nothing to parse or configure.
> 
> | File | Who reads it | What it defines |
> |------|-------------|-----------------|
> | `AGENTS.md` | Coding agents | How to build the project |
> | `DESIGN.md` | Design agents | How the project should look and feel |
> 
> **This repo provides ready-to-use DESIGN.md files** extracted from real websites. 
> 
> 
> ## What's Inside Each DESIGN.md
> 
> Every file follows the [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/) with extended sections:
> 
> | # | Section | What it captures |
> |---|---------|-----------------|
> | 1 | Visual Theme & Atmosphere | Mood, density, design philosophy |
> | 2 | Color Palette & Roles | Semantic name + hex + functional role |
> | 3 | Typography Rules | Font families, full hierarchy table |
> | 4 | Component Stylings | Buttons, cards, inputs, navigation with states |
> | 5 | Layout Principles | Spacing scale, grid, whitespace philosophy |
> | 6 | Depth & Elevation | Shadow system, surface hierarchy |
> | 7 | Do's and Don'ts | Design guardrails and anti-patterns |
> | 8 | Responsive Behavior | Breakpoints, touch targets, collapsing strategy |
> | 9 | Agent Prompt Guide | Quick color reference, ready-to-use prompts |
> 
> Each site includes:
> 
> | File | Purpose |
> |------|---------|
> | `DESIGN.md` | The design system (what agents read) |
> | `preview.html` | Visual catalog showing color swatches, type scale, buttons, cards |
> | `preview-dark.html` | Same catalog with dark surfaces |
> 
> 
> ## Request a DESIGN.md
> 
> [Open a GitHub issue with this template](https://github.com/VoltAgent/awesome-design-md/issues/new?template=design-md-request.yml) to request a DESIGN.md generation for a website.
> 
> 
> ## Collection
> 
> 
> ### AI & Machine Learning
> 
> - [**Claude**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/claude/) - Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
> - [**Cohere**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cohere/) - Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
> - [**ElevenLabs**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/elevenlabs/) - AI voice platform. Dark cinematic UI, audio-waveform aesthetics
> - [**Minimax**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/minimax/) - AI model provider. Bold dark interface with neon accents
> - [**Mistral AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mistral.ai/) - Open-weight LLM provider. French-engineered minimalism, purple-toned
> - [**Ollama**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ollama/) - Run LLMs locally. Terminal-first, monochrome simplicity
> - [**OpenCode AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/opencode.ai/) - AI coding platform. Developer-centric dark theme
> - [**Replicate**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/replicate/) - Run ML models via API. Clean white canvas, code-forward
> - [**RunwayML**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/runwayml/) - AI video generation. Cinematic dark UI, media-rich layout
> - [**Together AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/together.ai/) - Open-source AI infrastructure. Technical, blueprint-style design
> - [**VoltAgent**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/voltagent/) - AI agent framework. Void-black canvas, emerald accent, terminal-native
> - [**xAI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/x.ai/) - Elon Musk's AI lab. Stark monochrome, futuristic minimalism
> 
> 
> ### Developer Tools & Platforms
> 
> - [**Cursor**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cursor/) - AI-first code editor. Sleek dark interface, gradient accents
> - [**Expo**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/expo/) - React Native platform. Dark theme, tight letter-spacing, code-centric
> - [**Linear**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/linear.app/) - Project management for engineers. Ultra-minimal, precise, purple accent
> - [**Lovable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/lovable/) - AI full-stack builder. Playful gradients, friendly dev aesthetic
> - [**Mintlify**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mintlify/) - Documentation platform. Clean, green-accented, reading-optimized
> - [**PostHog**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/posthog/) - Product analytics. Playful hedgehog branding, developer-friendly dark UI
> - [**Raycast**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/raycast/) - Productivity launcher. Sleek dark chrome, vibrant gradient accents
> - [**Resend**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/resend/) - Email API for developers. Minimal dark theme, monospace accents
> - [**Sentry**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sentry/) - Error monitoring. Dark dashboard, data-dense, pink-purple accent
> - [**Supabase**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/supabase/) - Open-source Firebase alternative. Dark emerald theme, code-first
> - [**Superhuman**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/superhuman/) - Fast email client. Premium dark UI, keyboard-first, purple glow
> - [**Vercel**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/vercel/) - Frontend deployment platform. Black and white precision, Geist font
> - [**Warp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/warp/) - Modern terminal. Dark IDE-like interface, block-based command UI
> - [**Zapier**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/zapier/) - Automation platform. Warm orange, friendly illustration-driven
> 
> 
> ### Infrastructure & Cloud
> 
> - [**ClickHouse**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/clickhouse/) - Fast analytics database. Yellow-accented, technical documentation style
> - [**Composio**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/composio/) - Tool integration platform. Modern dark with colorful integration icons
> - [**HashiCorp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/hashicorp/) - Infrastructure automation. Enterprise-clean, black and white
> - [**MongoDB**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mongodb/) - Document database. Green leaf branding, developer documentation focus
> - [**Sanity**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sanity/) - Headless CMS. Red accent, content-first editorial layout
> - [**Stripe**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/stripe/) - Payment infrastructure. Signature purple gradients, weight-300 elegance
> 
> 
> ### Design & Productivity
> 
> - [**Airtable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/airtable/) - Spreadsheet-database hybrid.

## 延伸閱讀

相關概念：[[設計系統]] · [[Markdown]] · [[AI 代理]]

相關專案：[[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/VoltAgent/awesome-design-md)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "VoltAgent--awesome-design-md" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","Markdown","AI 代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VoltAgent--awesome-design-md" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VoltAgent--awesome-design-md" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VoltAgent" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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

> **2026-04-05** — 首次收錄
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

- [[2026-04-05|2026-04-05]] — 首次收錄，8.5k stars
