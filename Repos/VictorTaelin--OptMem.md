---
repo: VictorTaelin/OptMem
url: https://github.com/VictorTaelin/OptMem
owner: VictorTaelin
owner_type: User
language: Python
license: N/A
description: "Permanent memory for AI agents. A 426-token prompt, a script, plug and play."
homepage: ""
stars: 884
stars_per_day: 221
forks: 53
open_issues: 1
created: 2026-07-25
pushed_at: 2026-07-29
first_seen: 2026-07-28
week: "2026-W31"
month: "2026-07"
category: "開發工具"
subcategory: "記憶管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-28
use_case: "為 AI 代理提供永久記憶，讓記憶管理變得簡單且高效。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-02"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 11249
readme_length: 3535
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-28"
star_history: "2026-07-28:661,2026-07-28:661,2026-07-29:816,2026-07-29:817,2026-07-30:884"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "OptMem"
  - "VictorTaelin/OptMem"
  - "為 AI 代理提供永久記憶，讓記憶管理變得簡單且高效。"
---

# OptMem

**817** stars · **272** stars/天 · 建立 3 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/VictorTaelin--OptMem");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 為 AI 代理提供永久記憶，讓記憶管理變得簡單且高效。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (272 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 AI 代理中實現永久記憶管理的獨立開發者或小型團隊。
> **一句話重點** OptMem 的設計讓 AI 代理能夠持久記憶，並且簡化了記憶的管理流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VictorTaelin--OptMem");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶管理" && p.file.name !== "VictorTaelin--OptMem" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的記憶管理，值得一試。

> [!abstract] 核心創新
> OptMem 提供了一種簡單而高效的方式來管理 AI 代理的永久記憶，無需複雜的配置。

## 專案簡介

OptMem 是一個為 AI 代理提供永久記憶的工具，旨在解決記憶管理的繁瑣問題。使用者只需透過 `memo` 命令來記錄和檢索記憶，命令包括 `memo note` 用於記錄新記憶，`memo recall` 用於檢索過去的記憶，這些記憶會以固定寬度的格式存儲，確保查詢效率。設計上，OptMem 的記憶是以樹狀結構組織，這樣可以快速查找和合併記憶，並且每次記錄都不會影響到過去的記憶，這樣的設計使得記憶的管理變得簡單且高效。這個工具的賣點在於其簡單的安裝和使用，使用者只需將安裝生成的提示塊粘貼到代理的文檔中即可開始使用。技術上，OptMem 是用 Python 實現的，並且不依賴其他庫，這使得它的安裝和運行非常輕量。

與其他記憶管理工具相比，OptMem 的記憶檢索速度非常快，`wake` 命令在處理一百萬條記憶時僅需 0.03 秒，這在實際應用中能顯著提高效率。相較於其他工具如 `claude-obsidian` 和 `memory-os`，OptMem 提供了更簡單的命令行介面和更高的查詢效率。使用者在記錄和檢索記憶時不需要擔心背景執行或複雜的配置，這使得它特別適合需要快速記憶管理的場景。儘管目前社群活躍度尚可，但由於開源專案的特性，未來的發展潛力仍然可觀。對於小型團隊或個人開發者來說，OptMem 是一個值得考慮的選擇，特別是在需要持續記錄和檢索記憶的應用中。

**技術棧**：`Python 3`

## 重點功能

- 永久記憶管理 — 使用 `memo note` 記錄新記憶，並以樹狀結構組織，方便檢索。
- 快速檢索 — `memo recall` 命令能夠快速檢索過去的記憶，處理一百萬條記憶僅需 0.03 秒。
- 簡單安裝 — 透過一行命令安裝，並將生成的提示塊粘貼到代理文檔中即可使用。
- 無依賴運行 — 完全用 Python 實現，無需其他庫，輕量且易於部署。
- 自定義配置 — 使用 `memo config` 調整記憶的顯示行數，靈活適應不同需求。

## 快速開始

1. 安裝 OptMem
```bash
curl -fsSL https://raw.githubusercontent.com/VictorTaelin/OptMem/main/install.sh | sh
```
2. 將生成的提示塊粘貼到代理文檔中
```bash
# 在 AGENTS.md 或 CLAUDE.md 中粘貼生成的提示
```
3. 啟動記憶管理
```bash
memo wake
```

## 程式碼範例

```python
# 前置條件
# 安裝完成後，執行以下命令
memo wake
# 預期輸出
# Memory
Your memory is OptMem:
- The tool is `~/.optmem/memo`
- Your memories are in `~/.optmem/memory`
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 817 stars（272/天），forks 48（5.9%），這顯示出一定的關注度。作者 VictorTaelin 在 AI 代理領域有一定的經驗，這個專案解決了記憶管理的痛點，讓 AI 代理能夠持久記憶，避免重複學習。雖然目前沒有明確的觸發事件，但其簡單易用的特性吸引了不少開發者的目光。技術上，這個工具的設計符合現代 AI 應用的需求，特別是在記憶管理方面的創新使其具備了相對優勢。forks/stars 比率為 5.9%，顯示出有一定的使用者在進行修改或實驗。

## 適合誰使用

**目標受眾**：需要在 AI 代理中實現永久記憶管理的獨立開發者或小型團隊。

> [!example] 使用場景
> - AI 研究者用它來記錄實驗結果，以便在不同的實驗中快速檢索之前的結果，因為它能夠在每次啟動時自動加載記憶，節省了重複學習的時間。
> - 獨立開發者用它來管理 AI 代理的對話記憶，因為其簡單的命令行介面讓記憶的記錄和檢索變得高效且無縫。
> - 小型團隊用它來協作開發 AI 代理，因為每個團隊成員都能輕鬆地記錄和共享記憶，避免了信息的丟失和重複工作。

## 架構分析

OptMem 採用單一 Python 腳本的架構，這樣的設計使得安裝和運行都非常輕量，適合快速部署。記憶以固定寬度的格式存儲，這樣可以在查詢時快速定位，避免了傳統資料庫的查詢延遲。每次記錄的記憶都會被追加到日誌中，並且不會被修改，這樣的設計確保了記憶的完整性。

樹狀結構的設計使得記憶的檢索和合併變得高效，能夠快速找到所需的記憶。這種設計的代價在於，對於需要複雜查詢的應用場景，可能不如傳統資料庫靈活。整體而言，這種架構適合需要快速記憶檢索的應用，但在擴展性上可能會受到限制。

## 技術深入分析

OptMem 的核心技術機制是基於固定寬度的記憶存儲，這樣的設計使得每次查詢都能夠快速定位到所需記憶，避免了傳統資料庫的查詢延遲。每條記憶的記錄都是追加到日誌中，這樣的設計確保了記憶的完整性和不可變性，使用者無法隨意修改已記錄的內容。這種設計使得記憶的檢索和合併變得高效，能夠快速找到所需的記憶。從效能上來看，OptMem 能夠處理大量記憶，並且在檢索時的延遲非常低，這對於需要快速反應的 AI 代理來說至關重要。

選擇 Python 作為開發語言的原因在於其簡單性和廣泛的應用範圍，這使得 OptMem 能夠輕鬆整合進現有的 AI 系統中。依賴樹的複雜度較低，因為它僅依賴於 Python 標準庫，這降低了維護成本。技術風險方面，隨著記憶數量的增加，可能會出現性能瓶頸，特別是在記憶檢索時。此外，對於外部 API 的依賴程度較低，這使得 OptMem 在安全性上具有一定的優勢。

整合到現有的技術生態中也相對簡單，因為它不需要額外的配置，使用者只需將其命令行工具集成到現有的工作流中即可。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指令，讓新手能夠快速上手。安裝過程順暢，僅需一行命令即可完成。文件中有詳細的使用說明和範例，幫助使用者理解如何記錄和檢索記憶。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，僅需一行命令即可完成安裝。
> - 記憶檢索速度快，能夠處理大量記憶而不影響性能。
> - 無需依賴其他庫，輕量且易於維護。

> [!danger] 缺點
> - 目前僅支援 Linux 和 macOS，Windows 用戶需額外配置。
> - 不支援多用戶同時寫入，可能導致記憶重複或錯誤。
> - 對於需要複雜查詢的應用場景，靈活性不足。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 用戶需額外配置。
> - 記憶的數量和大小受到 `WAKE_LINES` 的限制，需根據實際需求調整。
> - 不支援多用戶同時寫入，可能導致記憶重複或錯誤。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的記憶管理功能，但依賴於更複雜的後端服務，適合需要高可擴展性的應用。 |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | 這個工具提供了更豐富的記憶管理功能，但安裝和配置過程相對繁瑣，適合大型團隊使用。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於記憶的可視化管理，適合需要圖形化界面的用戶，但對於命令行用戶來說不夠友好。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的記憶管理功能，但依賴於更複雜的後端服務，適合需要高可擴展性的應用。 | 如果你的應用需要處理大量記憶並且需要高可擴展性，boneyard 可能是更好的選擇。 | medium，因為需要重新設計記憶存儲的結構。 |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | 這個工具提供了更豐富的記憶管理功能，但安裝和配置過程相對繁瑣，適合大型團隊使用。 | 如果你的團隊需要更複雜的記憶管理功能，memory-os 可能更合適。 | high，因為需要重新設計記憶的管理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OptMem** | **boneyard** | **memory-os** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的記憶管理功能，但依賴於更複雜的後端服務，適合需要高可擴展性的應用。 | 這個工具提供了更豐富的記憶管理功能，但安裝和配置過程相對繁瑣，適合大型團隊使用。 |
> | 遷移成本 | - | medium，因為需要重新設計記憶存儲的結構。 | high，因為需要重新設計記憶的管理流程。 |
> | 適用場景 | 主要場景 | 如果你的應用需要處理大量記憶並且需要高可擴展性，boneya | 如果你的團隊需要更複雜的記憶管理功能，memory-os 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] Windows 用戶可能需要額外配置才能使用，安裝過程不夠直觀。
  - 解法：參考社群提供的解決方案或使用 WSL。
- **[HIGH]** 在記錄大量記憶時，可能會出現性能瓶頸。
  - 解法：定期清理不必要的記憶以保持性能。
- [MEDIUM] 不支援多用戶同時寫入，可能導致記憶重複。
  - 解法：確保每個用戶在不同的會話中使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 代理開發 | 非常適合 | 簡單的命令行介面和快速的記憶檢索非常符合小型團隊的需求。 |
| 大型企業的 AI 代理系統 | 不適合 | 對於需要高可擴展性和複雜查詢的應用場景，OptMem 的靈活性不足。 |
| 個人開發者的 AI 實驗 | 適合 | 安裝簡單且無需依賴其他庫，適合快速試驗和開發。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的記憶管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OptMem 本身不需要高權限運行，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
| Forks | 48 |
| Open Issues | 0 |
| 最後推送 | 2026-07-27 |
| 建立日期 | 2026-07-25 |
| Repo 大小 | 11.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VictorTaelin/OptMem) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 63
>     "JavaScript" : 34
>     "HTML" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@VictorTaelin](https://github.com/VictorTaelin) | 38 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有合併請求和更新。
**連結**：[文件](https://github.com/VictorTaelin/OptMem)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-26 ~ 2026-07-27）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #2 from rarf/windows-native-support

## README 摘錄

> [!info]- 展開查看原文 README
> # OptMem
> 
> Permanent memory for AI agents. A 426-token prompt, a script, plug and play.
> 
> ## Install
> 
> ```sh
> curl -fsSL https://raw.githubusercontent.com/VictorTaelin/OptMem/main/install.sh | sh
> ```
> 
> It prints a `## Memory` block. Paste that at the top of your agent's
> `AGENTS.md` (or `CLAUDE.md`), and you are done. Run the same line again to
> update.
> 
> The tool lands at `~/.optmem/memo`; put `~/.optmem` on `PATH` to type `memo`.
> 
> ## Commands
> 
> | | |
> |---|---|
> | `memo wake` | read the memory — the first command of every session |
> | `memo note "..."` | record one memory: one line, up to 280 chars |
> | `memo nap` | answer the merges that came due |
> | `memo recall ` | search every memory ever recorded, word for word |
> | `memo zoom -` | open a tree node into its two halves |
> | `memo forget -` | drop a bad summary; the next nap rebuilds it |
> 
> Merges arrive one at a time, in the output of `note`. Nothing ever runs in the
> background.
> 
> ## Files
> 
> ```
> ~/.optmem/
>   memo          the tool: one file of Python 3, no dependencies
>   memory/
>     LOG.txt     every memory, one per line, append-only, never edited
>     TREE/       the summaries: a cache, rebuildable from the log alone
>     config      the sizes, written by `memo config`
> ```
> 
> ```sh
> memo config                  # show the sizes
> memo config WAKE_LINES=300   # how many lines wake prints (208 ≈ 16k tokens)
> memo config WAKE_LINES=      # back to the default
> ```
> 
> `WAKE_LINES` is the only size worth touching, and it is a reading budget, not
> a storage budget: change it whenever, in either direction, and nothing is
> recomputed.
> 
> Records are fixed width, so position *is* identity and every lookup is one
> seek. At a million memories (608 MB), `wake` takes 0.03s.
> 
> Set `$MEMORY_DIR` to keep `memory/` elsewhere — a synced folder, a git repo.
> 
> ## The prompt
> 
> This is what the installer prints, and the whole of the integration.
> 
> ```markdown
> ## Memory
> 
> Your memory is OptMem:
> - The tool is `~/.optmem/memo`
> - Your memories are in `~/.optmem/memory`
> 
> OptMem outlives every session, compaction, model and vendor change.
> Without it you do not know who you are, or what was decided and tried.
> 
> ### At startup: activating OptMem (mandatory)
> 
> Run `~/.optmem/memo wake` before any other tool call, in every session, and
> then do exactly what it prints, to the end of its output.
> 
> ### While working: register memories (mandatory)
> 
> Call `~/.optmem/memo note ""` whenever you learn
> something new, or something worth keeping happens. That covers a task
> worth real effort, a fact or insight the user teaches you, anything you
> learn about their life (even indirectly), any event of lasting effect.
> 
> Do not register redundant memories.
> 
> If `~/.optmem/memo note` asks a compression: do it before your next action.
> 
> Never edit or delete anything under `~/.optmem/memory`: the tool manages it.
> 
> ### When you need an old memory: search, or navigate
> 
> `~/.optmem/memo recall ` searches every memory, word for word.
> 
> Your memories also form a binary tree: #0-1, #2-3 ... exist as one-line
> summaries, pairs of those as #0-3, and so on -- every `#a-b` line wake
> prints is one node of it. `~/.optmem/memo zoom ` opens a node into its
> two halves, down to the raw memories.
> 
> ### If you're a subagent: skip everything above
> 
> Parallel sessions on this machine are all you, and may all write memories.
> A subagent is not: it must never run `memo`, because it cannot judge what
> is already known, and its notes would arrive duplicated and incorrectly.
> When you spawn one, write: `You are a subagent. Don't run memo.`
> ```

## 延伸閱讀

相關概念：[[記憶管理]] · [[AI 代理]] · [[命令行工具]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[raiyanyahya--recall|raiyanyahya/recall]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]]

[GitHub](https://github.com/VictorTaelin/OptMem)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶管理" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "VictorTaelin--OptMem" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["記憶管理","AI 代理","命令行工具"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VictorTaelin--OptMem" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VictorTaelin--OptMem" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VictorTaelin" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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

> **2026-07-28** — 首次收錄
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

- [[2026-07-30|2026-07-30]] — 再次上榜，884 stars
- [[2026-07-29|2026-07-29]] — 再次上榜，816 stars
- [[2026-07-28|2026-07-28]] — 首次收錄，661 stars
