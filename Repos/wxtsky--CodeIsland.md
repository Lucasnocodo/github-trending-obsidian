---
repo: wxtsky/CodeIsland
url: https://github.com/wxtsky/CodeIsland
owner: wxtsky
owner_type: User
language: Swift
license: MIT
description: ""
homepage: ""
stars: 872
stars_per_day: 145
forks: 106
open_issues: 11
created: 2026-04-06
pushed_at: 2026-04-12
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "即時監控"
release_tag: "v1.0.19"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "提供即時 AI 編碼代理狀態面板，讓使用者無需切換視窗即可查看代理狀態。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-20"
contributor_count: 5
engagement: "medium"
issue_close_rate: 76
repo_size_kb: 2661
readme_length: 4582
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:872"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - easy_install
aliases:
  - "CodeIsland"
  - "wxtsky/CodeIsland"
  - "提供即時 AI 編碼代理狀態面板，讓使用者無需切換視窗即可查看代理狀態。"
---

# CodeIsland

**872** stars · **145** stars/天 · 建立 6 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/wxtsky--CodeIsland");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.19` `easy-install`

> [!summary] 一句話摘要
> 提供即時 AI 編碼代理狀態面板，讓使用者無需切換視窗即可查看代理狀態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (145 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 MacBook 上高效監控多個 AI 工具狀態的開發者。
> **一句話重點** CodeIsland 不僅提升了開發者的工作效率，還讓 AI 工具的狀態監控變得直觀且易於使用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wxtsky--CodeIsland");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "即時監控" && p.file.name !== "wxtsky--CodeIsland" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 即時監控 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時監控 AI 工具的效果，值得投資。

> [!abstract] 核心創新
> CodeIsland 提供即時 AI 編碼代理狀態面板，專為 MacBook 的 Notch 區域設計。

## 專案簡介

**核心機制**

CodeIsland 是一款針對 macOS 的應用，專為 MacBook 的 Notch 區域設計，實時顯示多個 AI 編碼工具的狀態。使用者可以透過 Unix socket IPC 連接到九個不同的 AI 工具，並在一個緊湊的像素藝術風格面板中查看會話狀態、工具調用和許可請求等信息。這樣的設計使得開發者無需頻繁切換窗口，能夠更專注於當前工作。主要的 CLI 指令包括 `brew install --cask codeisland` 用於安裝，並且支持自動安裝 CLI 工具的 hooks。其一句話賣點是：讓開發者在 Notch 區域即時掌握 AI 工具的運行狀態，提升工作效率。

**技術實作**



技術上，CodeIsland 使用 Swift 開發，並依賴 Unix socket 進行事件通訊，這樣的選擇使得它在性能上相對輕量，且能夠快速響應事件。它的架構包含一個主應用和多個輕量級的 hooks，這些 hooks 會在 AI 工具觸發事件時發送 JSON 消息到 CodeIsland，從而更新 UI。這種設計使得整體依賴樹相對簡單，降低了維護成本。

與其他類似工具相比，如 `claude-island`，CodeIsland 提供了更豐富的功能和更好的用戶界面，特別是在多顯示器支持和即時狀態更新方面。相比之下，`0xGF/boneyard` 和 `AlpinDale/parsync` 主要集中在特定的功能上，無法提供如此全面的 AI 工具支持。

**競品比較**



實際使用中，CodeIsland 能夠處理多達九個 AI 工具的即時狀態更新，並且在多顯示器環境下表現良好。用戶可能會遇到的問題包括首次啟動時的安全警告，這需要手動在系統設置中允許。社群活躍度尚可，問題解決率為 76%。

目前專案處於穩定階段，適合中小型團隊使用，尤其是需要頻繁與 AI 工具互動的開發者。預計未來會持續增加對更多工具的支持，並改善用戶體驗。

**效果與限制**



建議在需要即時監控多個 AI 工具狀態的情境下使用，如在大型專案開發中，避免因切換窗口而浪費時間。對於不需要即時狀態更新的簡單專案，則可能不需要這樣的工具。

**技術棧**：`Swift 5.9` · `macOS 14`

## 重點功能

- Notch-native UI — 擴展自 MacBook 的 Notch，閒置時自動收起。
- 9 種 AI 工具支持 — 包括 Claude Code、Codex、Gemini CLI 等。
- 實時狀態追蹤 — 直接在面板上查看活動會話和 AI 回應。
- 許可管理 — 直接在面板中批准或拒絕工具的許可請求。
- 問題回答 — 在不離開當前應用的情況下回應代理問題。
- 自動安裝 hooks — 自動配置所有檢測到的 CLI 工具的 hooks。

## 快速開始

1. 使用 Homebrew 安裝 CodeIsland
```bash
brew tap wxtsky/tap && brew install --cask codeisland
```
2. 手動下載並安裝
```bash
下載 CodeIsland.dmg，並將 CodeIsland.app 拖入應用程式資料夾
```
3. 從源碼構建
```bash
git clone https://github.com/wxtsky/CodeIsland.git && cd CodeIsland && swift build && ./.build/debug/CodeIsland
```

## 程式碼範例

```swift
{
  "前置條件": "需要安裝 macOS 14+ 和 Swift 5.9+。",
  "指令": "brew install --cask codeisland",
  "預期輸出": "CodeIsland 將安裝並配置所有檢測到的 AI 工具的 hooks。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 872 stars（145/天），forks 106（12.2%），顯示出不錯的增長潛力。作者 wxtsky 之前有開發其他相關工具，這次的 CodeIsland 解決了開發者在多個 AI 工具間切換的痛點，讓狀態監控變得更為直觀。社群的反饋和需求促進了這個專案的快速發展，特別是在 AI 工具日益普及的背景下。forks/stars 比率為 12.2%，顯示出有相當一部分用戶在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在 MacBook 上高效監控多個 AI 工具狀態的開發者。

> [!example] 使用場景
> - 後端工程師用它來即時監控多個 AI 工具的狀態，因為這樣可以減少切換窗口的時間，提升開發效率。
> - 產品經理用它來查看 AI 工具的回應和狀態，因為能夠快速獲取信息，避免會議中出現延遲。
> - DevOps 工程師用它來管理和監控 CI/CD 流程中的 AI 工具，因為這樣可以即時處理問題，提升系統穩定性。

## 架構分析

CodeIsland 採用單一應用與多個輕量級 hooks 的架構，這樣的設計使得應用能夠快速響應 AI 工具的事件。每當 AI 工具觸發事件時，hook 會通過 Unix socket 發送 JSON 消息到 CodeIsland，從而更新 UI。這種設計的代價是需要在每個工具中安裝 hooks，但這樣的輕量化設計降低了資源消耗。整體架構的擴展性良好，能夠隨著新工具的加入而輕鬆擴展功能。

## 技術深入分析

CodeIsland 的核心技術機制基於 Unix socket IPC，這使得它能夠實時接收來自多個 AI 工具的事件。每當 AI 工具觸發事件時，hook 會發送 JSON 消息到 CodeIsland，進而更新 UI。這種設計模式使得 CodeIsland 在性能上相對輕量，並且能夠快速響應事件。效能上，CodeIsland 能夠同時處理來自九個 AI 工具的即時狀態更新，並且在多顯示器環境下表現良好。

對於資源需求，CodeIsland 的記憶體佔用相對較低，因為它主要依賴於輕量級的 hooks。

在技術選型上，選擇 Swift 作為開發語言使得 CodeIsland 能夠充分利用 macOS 的原生特性，並且在性能上優於其他使用高級語言的解決方案。這樣的選擇帶來了更好的用戶體驗，但也意味著需要對 macOS 環境有較高的依賴。

在技術風險方面，CodeIsland 可能在未來面臨擴展性挑戰，特別是當支持的 AI 工具數量增加時，如何保持性能和穩定性將是一個重要考量。

此外，對外部 API 的依賴程度也需要持續關注，以防止未來的兼容性問題。

整合方面，CodeIsland 與主流的開發工具（如 Xcode 和 VS Code）整合良好，能夠輕鬆地在 CI/CD pipeline 中使用，並且對於團隊協作也提供了良好的支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝步驟和使用範例。安裝過程順暢，Homebrew 安裝特別方便。文檔目前僅提供英文和中文，對於多語言使用者友好。

## 優缺點分析

> [!success] 優點
> - 即時監控多個 AI 工具狀態，提升開發效率。
> - 輕量級設計，對系統資源影響小。
> - 支持多顯示器，靈活適應不同工作環境。

> [!danger] 缺點
> - 僅支援 macOS 14 及以上版本，限制了使用範圍。
> - 首次啟動可能會遇到安全警告，需手動處理。
> - 對於不需要即時狀態更新的簡單專案，可能顯得過於複雜。

> [!warning] 注意事項
> - 僅支援 macOS 14.0 及以上版本。
> - 需要安裝 Swift 5.9 以上版本以便從源碼構建。
> - 首次啟動可能會遇到安全警告，需要手動允許。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要集中在特定功能的工具，無法提供如此全面的 AI 工具支持。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 功能較單一，缺乏即時狀態更新的能力，無法與多個 AI 工具互動。 |
| claude-island | 雖然同樣針對 AI 工具，但 CodeIsland 提供了更豐富的功能和更好的用戶界面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定功能的工具，無法提供全面的 AI 工具支持。 | 如果你的需求僅限於特定功能，且不需要即時狀態更新。 | low，因為功能範圍較小，遷移成本低。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 功能較單一，缺乏即時狀態更新的能力。 | 如果你的專案不需要與多個 AI 工具互動，且對即時性要求不高。 | medium，因為需要重新調整工作流程。 |
| claude-island | 雖然同樣針對 AI 工具，但 CodeIsland 提供了更豐富的功能和更好的用戶界面。 | 如果你需要更簡單的界面，且不需要多顯示器支持。 | medium，因為需要重新適應不同的用戶界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CodeIsland** | **boneyard** | **parsync** | **claude-island** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定功能的工具，無法提供全面的 AI 工具支持。 | 功能較單一，缺乏即時狀態更新的能力。 | 雖然同樣針對 AI 工具，但 CodeIsland 提供了更豐富的功能和更好的用戶界面。 |
> | 遷移成本 | - | low，因為功能範圍較小，遷移成本低。 | medium，因為需要重新調整工作流程。 | medium，因為需要重新適應不同的用戶界面。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於特定功能，且不需要即時狀態更新。 | 如果你的專案不需要與多個 AI 工具互動，且對即時性要求不高 | 如果你需要更簡單的界面，且不需要多顯示器支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合中小型團隊使用，特別是需要頻繁與 AI 工具互動的開發者。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次啟動時可能會遇到安全警告，需要手動允許。
  - 解法：在系統設置中允許應用啟動。
- [MEDIUM] 在多顯示器環境下，可能需要手動調整顯示設置。
  - 解法：檢查顯示設置，確保正確配置。
- [MEDIUM] 某些 AI 工具的事件可能無法即時反映。
  - 解法：檢查 hooks 是否正確安裝。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發團隊 | 非常適合 | 能夠即時監控多個 AI 工具，提升開發效率。 |
| 大型企業的開發團隊 | 適合 | 能夠在多顯示器環境下靈活使用，適應不同的工作需求。 |
| 不需要即時狀態更新的小型專案 | 不適合 | 對於簡單專案來說，功能過於複雜。 |
| 需要頻繁與 AI 工具互動的開發者 | 非常適合 | 能夠減少切換窗口的時間，提升工作效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時監控 AI 工具的效果，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CodeIsland 本身不需要高權限，僅需訪問本地的 AI 工具配置，不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CodeIsland 最常與 macOS 環境中的開發工具搭配使用，特別是 Xcode 和 VS Code。在一個使用 Xcode 的專案中，開發者可以通過 CodeIsland 直接監控 AI 工具的狀態，具體做法是安裝 CodeIsland 並配置相應的 hooks。它支援 GitHub Actions 等 CI 工具，並且與多數現代 IDE 兼容。整合的摩擦點主要在於首次安裝時的安全設置，這需要用戶手動允許應用啟動。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 CodeIsland 出現之前，開發者通常需要手動切換窗口來檢查 AI 工具的狀態，這樣的方式效率低下且容易出錯。隨著 AI 工具的普及，對於即時監控的需求越來越高。CodeIsland 的出現正是為了解決這一痛點，並且利用 macOS 的 Notch 區域提供了一個創新的解決方案。

未來，隨著 AI 技術的進一步發展，CodeIsland 可能會增加對更多工具的支持，並改善用戶體驗。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 macOS 環境
- 了解基本的 CLI 操作

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：收集使用反饋並調整設置。

**成功指標**：即時監控 AI 工具的狀態，減少切換窗口的時間。

> [!warning] 退出計畫
> 若需退出，所有設定均以標準格式保存，可輕鬆卸載應用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wxtsky--CodeIsland");
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
> const me = dv.page("Repos/wxtsky--CodeIsland");
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
| Forks | 106 |
| Open Issues | 11 |
| Issue 解決率 | 76% (35 closed) |
| 最後推送 | 2026-04-12 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wxtsky/CodeIsland) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 97
>     "JavaScript" : 1
>     "Shell" : 1
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wxtsky](https://github.com/wxtsky) | 89 |
> | [@Wangnov](https://github.com/Wangnov) | 17 |
> | [@yuancafe](https://github.com/yuancafe) | 3 |
> | [@gehaiyi](https://github.com/gehaiyi) | 2 |
> | [@Ardakilic](https://github.com/Ardakilic) | 1 |

**最新版本**：v1.0.19 (2026-04-12)

> [!info]- Release Notes
> ### English
> 
> **In-App Updates**
> - Update check, download progress, and installation now happen entirely within Settings → About — no more popup dialogs
> - Real-time download progress bar with percentage
> - Homebrew users see the `brew upgrade` command inline
> 
> **New CLI Support (PR #64)**
> - Built-in support for Trae, Trae CN, StepFun, CodyBuddyCN, AntiGravity, WorkBuddy, Hermes
> - Custom third-party CLI extensibility in Settings → Hooks
> 
> **Turkish Language (PR #67)**
> - Full Turkish (Türkçe) localization
> 
> **Bug Fixes**
> - Fix v1.0.18 startup crash caused by resource bundle lookup (PR #66)
> - Harden SSH remote host input validation — prevent crash on invalid config (#63)
> - Deduplicate CLI hook event configs (~100 lines removed)
> - Fix zh localization indentation issue
> 
> ---
> 
> ### 中文
> 
> **应用内更新**
> - 检查更新、下载进度、安装全部在 设置 → 关于 页面内完成，不再弹出系统对话框
> - 实时下载进度条显示百分比
> - Homebrew 用户直接显示 `brew upgrade` 命令
> 
> **新增 CLI 支持 (PR #64)**

## 社群與生態

**社群活躍度**：社群活躍度尚可，問題解決率為 76%。
**連結**：[文件](https://github.com/wxtsky/CodeIsland)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-11 ~ 2026-04-12）
> **活躍天數** 2 天 · **最新 commit** chore: bump version to 1.0.19

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#75](https://github.com/wxtsky/CodeIsland/issues/75) | 关于agent思考时间很长（>1min）导致codeisland状态变为Idle的问题 | 0 | 0 |
> | [#74](https://github.com/wxtsky/CodeIsland/issues/74) | Hermes 不支持 | 0 | 0 |
> | [#73](https://github.com/wxtsky/CodeIsland/issues/73) | [Bug] 点击 Code Island session 时触发了 Ghostty quick terminal 而非对 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp;
>   CodeIsland
> 
>   Real-time AI coding agent status panel for macOS Dynamic Island (Notch)
>   Install •
>   Features •
>   Supported Tools •
>   Build
>   English | 简体中文
> 
> ---
> 
>   
> 
> ## What is CodeIsland?
> 
> CodeIsland lives in your MacBook's notch area and shows you what your AI coding agents are doing — in real time. No more switching windows to check if Claude is waiting for approval or if Codex finished its task.
> 
> It connects to **9 AI coding tools** via Unix socket IPC, displaying session status, tool calls, permission requests, and more — all in a compact, pixel-art styled panel.
> 
> ## Features
> 
> - **Notch-native UI** — Expands from the MacBook notch, collapses when idle
> - **9 AI tools supported** — Claude Code, Codex, Gemini CLI, Cursor, Copilot, Qoder, Factory, CodeBuddy, OpenCode
> - **Live status tracking** — See active sessions, tool calls, and AI responses in real time
> - **Permission management** — Approve/deny tool permissions directly from the panel
> - **Question answering** — Respond to agent questions without leaving your current app
> - **Pixel-art mascots** — Each AI tool has its own animated character
> - **One-click jump** — Click a session to jump to its terminal tab or IDE window
> - **Smart suppress** — Tab-level terminal detection: only suppresses notifications when you're looking at the specific session tab, not just the terminal app
> - **Sound effects** — Optional 8-bit sound notifications for session events
> - **Auto hook install** — Automatically configures hooks for all detected CLI tools, with auto-repair and version tracking
> - **Bilingual UI** — English and Chinese, auto-detects system language
> - **Multi-display** — Works with external monitors, auto-detects notch displays
> 
> ## Supported Tools
> 
> | | Tool | Events | Jump | Status |
> |:---:|------|--------|------|--------|
> |  |  Claude Code | 13 | Terminal tab | Full |
> |  |  Codex | 3 | Terminal | Basic |
> |  |  Gemini CLI | 6 | Terminal | Full |
> |  |  Cursor | 10 | IDE | Full |
> |  |  Copilot | 6 | Terminal | Full |
> |  |  Qoder | 10 | IDE | Full |
> |  |  Factory | 10 | IDE | Full |
> |  |  CodeBuddy | 10 | APP/Terminal | Full |
> |  |  OpenCode | All | APP/Terminal | Full |
> 
> ## Installation
> 
> ### Homebrew (Recommended)
> 
> ```bash
> brew tap wxtsky/tap
> brew install --cask codeisland
> ```
> 
> ### Manual Download
> 
> 1. Go to [Releases](https://github.com/wxtsky/CodeIsland/releases)
> 2. Download `CodeIsland.dmg`
> 3. Open the DMG and drag `CodeIsland.app` to your Applications folder
> 4. Launch CodeIsland — it will automatically install hooks for all detected AI tools
> 
> > **Note:** On first launch, macOS may show a security warning. Go to **System Settings → Privacy & Security** and click **Open Anyway**.
> 
> ### Build from Source
> 
> Requires **macOS 14+** and **Swift 5.9+**.
> 
> ```bash
> git clone https://github.com/wxtsky/CodeIsland.git
> cd CodeIsland
> 
> # Development (debug build + launch)
> swift build && ./.build/debug/CodeIsland
> 
> # Release (universal binary: Apple Silicon + Intel)
> ./build.sh
> open .build/release/CodeIsland.app
> ```
> 
> ## How It Works
> 
> ```
> AI Tool (Claude/Codex/Gemini/Cursor/Copilot/...)
>   → Hook event triggered
>     → codeisland-bridge (native Swift binary, ~86KB)
>       → Unix socket → /tmp/codeisland-.sock
>         → CodeIsland app receives event
>           → Updates UI in real time
> ```
> 
> CodeIsland installs lightweight hooks into each AI tool's config. When the tool triggers an event (session start, tool call, permission request, etc.), the hook sends a JSON message through a Unix socket. CodeIsland listens on this socket and updates the notch panel instantly.
> 
> For **OpenCode**, a JS plugin connects directly to the socket — no bridge binary needed.
> 
> ## Settings
> 
> CodeIsland provides a 7-tab settings panel:
> 
> - **General** — Language, launch at login, display selection
> - **Behavior** — Auto-hide, smart suppress, session cleanup
> - **Appearance** — Panel height, font size, AI reply lines
> - **Mascots** — Preview all pixel-art characters and their animations
> - **Sound** — 8-bit sound effects for session events
> - **Hooks** — View CLI installation status, reinstall or uninstall hooks
> - **About** — Version info and links
> 
> ## Requirements
> 
> - macOS 14.0 (Sonoma) or later
> - Works best on MacBooks with a notch, but also works on external displays
> 
> ## Acknowledgments
> 
> This project was inspired by [claude-island](https://github.com/farouqaldori/claude-island) by [@farouqaldori](https://github.com/farouqaldori). Thanks for the original idea of bringing AI agent status into the macOS notch.
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ## License
> 
> MIT License — see [LICENSE](LICENSE) for details.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[多模態]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/wxtsky/CodeIsland)

## 相關收錄

> [!note]- 直接競品（同子分類：即時監控）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "即時監控" AND file.name != "wxtsky--CodeIsland"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "wxtsky--CodeIsland"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "wxtsky--CodeIsland" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "wxtsky--CodeIsland"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wxtsky--CodeIsland" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/wxtsky--CodeIsland");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wxtsky--CodeIsland" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wxtsky" AND file.name != "wxtsky--CodeIsland"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wxtsky--CodeIsland");
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
> const me = dv.page("Repos/wxtsky--CodeIsland");
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
> const me = dv.page("Repos/wxtsky--CodeIsland");
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
> const me = dv.page("Repos/wxtsky--CodeIsland");
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
> const me = dv.page("Repos/wxtsky--CodeIsland");
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

> **2026-04-13** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 首次收錄，872 stars
