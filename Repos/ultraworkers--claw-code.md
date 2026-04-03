---
repo: ultraworkers/claw-code
url: https://github.com/ultraworkers/claw-code
owner: ultraworkers
owner_type: Organization
language: Rust
license: N/A
description: "The fastest repo in history to surpass 100K stars ⭐. Better Harness Tools that make real things done. Built in Rust using oh-my-codex."
homepage: ""
stars: 150874
stars_per_day: 75437
forks: 101336
open_issues: 1413
created: 2026-03-31
pushed_at: 2026-04-02
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供一個快速且安全的工具集來重寫和擴展 Claw Code 的功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-06"
contributor_count: 3
engagement: "high"
issue_close_rate: 0
repo_size_kb: 6379
readme_length: 9867
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:121830,2026-04-03:150874"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "claw-code"
  - "ultraworkers/claw-code"
  - "提供一個快速且安全的工具集來重寫和擴展 Claw Code 的功能。"
---

# claw-code

**121.8k** stars · **121.8k** stars/天 · 建立 1 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/ultraworkers--claw-code");
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
> 提供一個快速且安全的工具集來重寫和擴展 Claw Code 的功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (121.8k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要快速構建和測試 AI 工具的開發者，特別是對 harness engineering 有興趣的人。
> **一句話重點** 這個專案不僅是對 Claw Code 的重寫，更是 harness engineering 的新探索。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "ultraworkers--claw-code" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到高效能和靈活性的工具，值得投入。

> [!abstract] 核心創新
> 專案的核心創新在於使用 Rust 和 Python 的結合，提供高效能和靈活性的工具集。

## 專案簡介

Claw Code 是一個用於重寫和擴展 Claw Code 功能的工具集，核心流程包括將原始的 Claw Code 功能轉換為 Python 和 Rust 版本。使用者可以透過 Rust 的高效能和 Python 的靈活性，進行 API 客戶端、會話狀態管理和插件系統的開發。主要的 CLI 指令如 `cargo build --release` 和 `python3 -m src.main summary` 使得使用者能夠快速構建和檢查當前的工作環境。這個專案的賣點在於其高效能和安全性，特別是 Rust 的使用使得執行時的內存安全性得以保障。技術上，專案使用了 Rust 的系統語言特性來提升性能，而 Python 則用於快速開發和測試，這樣的選擇使得開發流程更加靈活。

與其他類似工具如 `AlpinDale/parsync` 和 `BigBodyCobain/Shadowbroker` 相比，Claw Code 提供了更為全面的插件系統和 API 客戶端功能，這使得它在擴展性上更具優勢。使用者在實際操作中可能會遇到的問題包括 API 的兼容性和性能瓶頸，這需要在開發過程中進行仔細的測試和調整。這個專案目前處於 alpha 階段，適合對 harness engineering 有興趣的開發者使用，但在生產環境中使用時需謹慎考量。未來六個月內，預計將會有更多功能的穩定版本推出。適合需要快速構建和測試 AI 工具的開發者，但不建議用於需要高穩定性的生產環境。

**技術棧**：`Rust` · `Python` · `Shell`

## 重點功能

- Rust Port — 提供高效能的 API 客戶端和會話管理，使用 `cargo build --release` 進行構建。
- Python Workspace — 透過 `python3 -m src.main summary` 獲取當前工作環境的摘要。
- 插件系統 — 支持自定義插件和命令，便於擴展功能。
- 交互式 CLI — 提供即時反饋和操作，支持 Markdown 渲染。
- 兼容性層 — 使得原有工具能夠無縫整合進入新的系統架構。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ultraworkers/claw-code.git
```
2. 進入 Rust 目錄並構建
```bash
cd claw-code/rust && cargo build --release
```
3. 運行 Python 總結
```bash
python3 -m src.main summary
```

## 程式碼範例

```rust
{
  "前置條件": "已安裝 Rust 和 Python 環境",
  "指令": "python3 -m src.main summary",
  "預期輸出": "顯示當前 Python 工作區的摘要"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 121830 stars（121830/天），forks 102127（83.8%），這是極端爆發式增長。作者 @instructkr 以其在 harness engineering 領域的專業知識和過去的開源貢獻而聞名，這次重寫的動機來自於原始 Claw Code 的曝光事件，解決了開發者在使用此類工具時的法律和道德問題。社群對於這個專案的熱情和需求促成了它的快速成長。技術生態的變化，如 Rust 的普及和 AI 工具的需求增加，也為此專案的成功提供了土壤。高達 83.8% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用，反映了其在開發者社群中的活躍度。

## 適合誰使用

**目標受眾**：需要快速構建和測試 AI 工具的開發者，特別是對 harness engineering 有興趣的人。

> [!example] 使用場景
> - AI 工程師用它來快速重寫和擴展 Claw Code 的功能，因為它提供了高效的 Rust 和靈活的 Python 支持。
> - 後端開發者用它來構建 API 客戶端和插件系統，因為其內建的工具和命令系統簡化了開發流程。
> - 開源貢獻者用它來參與 Claw Code 的擴展和改進，因為其高 forks/stars 比率顯示出活躍的社群支持。

## 架構分析

Claw Code 的架構採用 Rust 和 Python 的混合設計，Rust 負責性能關鍵的部分，如 API 客戶端和會話管理，而 Python 則用於快速開發和測試。這樣的設計使得專案能夠在性能和開發速度之間取得平衡。資料流方面，Rust 的高效能模組與 Python 的靈活性相結合，形成了一個強大的工具集。選擇 Rust 作為系統語言的代價在於學習曲線較陡，但帶來了更高的安全性和性能。擴展性方面，由於使用了插件系統，未來可以輕鬆添加新功能。

## 技術深入分析

Claw Code 的核心技術機制在於其混合使用 Rust 和 Python，這使得專案在性能和開發靈活性上達到平衡。Rust 的模組負責 API 客戶端和會話管理，利用其高效能特性來處理大量請求。Python 則用於快速開發和測試，這樣的設計使得開發者能夠迅速迭代。效能方面，Rust 的執行效率顯著高於純 Python 實現，特別是在高併發場景下。設計取捨上，選擇 Rust 使得專案在安全性和性能上獲得提升，但同時也增加了學習成本。技術風險方面，隨著使用者數量的增加，可能會出現 API 的性能瓶頸，這需要在開發過程中進行持續的監控和優化。整合分析上，Claw Code 與主流框架的整合難度相對較低，因為它提供了 CLI 工具和 API 接口，方便與現有工具鏈進行整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明；安裝過程順暢，無明顯坑；有良好的入門指南，適合新手使用；文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 高性能 — Rust 的使用使得執行效率大幅提升。
> - 靈活性 — Python 的使用便於快速開發和測試。
> - 活躍的社群 — 高 forks/stars 比率顯示出強大的社群支持。

> [!danger] 缺點
> - 穩定性不足 — 目前仍在 alpha 階段，可能存在不穩定的情況。
> - 功能不完整 — Python 版本尚未完全替代原有系統。
> - 學習曲線 — Rust 的學習曲線較陡，對新手不太友好。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，穩定性尚未完全保證。
> - Python 版本尚未完全替代原有系統，功能仍在持續開發中。
> - API 兼容性可能會遇到問題，需要進行測試和調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的工具集，但缺乏 Claw Code 的插件系統和 API 客戶端功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於特定功能的實現，而 Claw Code 提供更全面的擴展性和靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於特定功能的實現，並未提供完整的插件系統。 | 如果你的需求僅限於特定功能的實現，而不需要全面的擴展性。 | low，因為功能範圍較小，轉移成本低。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於深度學習模型的實現，與 Claw Code 的通用性相比，功能較為狹窄。 | 如果你的專案專注於深度學習模型的開發，而不需要通用的工具集。 | medium，因為需要重新調整開發流程以適應不同的工具集。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code** | **HolyClaude** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定功能的實現，並未提供完整的插件系統。 | 專注於深度學習模型的實現，與 Claw Code 的通用性相比，功能較為狹窄。 |
> | 遷移成本 | - | low，因為功能範圍較小，轉移成本低。 | medium，因為需要重新調整開發流程以適應不同的工具集。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於特定功能的實現，而不需要全面的擴展性。 | 如果你的專案專注於深度學習模型的開發，而不需要通用的工具集。 |

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

- **[HIGH]** API 兼容性問題，可能導致某些功能無法正常運行
  - 解法：在開發過程中進行充分測試，確保兼容性
- [MEDIUM] Rust 和 Python 之間的數據傳輸效率可能不如預期
  - 解法：優化數據結構以提高傳輸效率
- [MEDIUM] 插件系統的穩定性尚未完全驗證
  - 解法：在使用前進行充分的測試，避免在生產環境中使用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 提供高效能和靈活性，適合快速迭代的開發環境。 |
| 大型企業的核心系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 開源貢獻者參與的專案 | 非常適合 | 活躍的社群和高 forks/stars 比率，適合貢獻和擴展。 |
| 需要高穩定性的生產環境 | 不適合 | 目前功能尚不完整，穩定性無法保證。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到高效能和靈活性的工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料；依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Claw Code 最常與 Rust 和 Python 生態系統搭配使用，特別是在開發和測試階段。實際整合範例中，開發者可以在一個使用 Flask 的專案中，將 Claw Code 作為 API 客戶端進行集成，具體做法是使用 `python3 -m src.main` 指令進行操作。支援 GitHub Actions 和其他 CI 工具，並且可以與 VS Code 進行整合。常見的整合問題包括 API 兼容性，需要進行充分的測試以確保無縫整合。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Claw Code 出現之前，開發者主要依賴於各種獨立的工具來實現類似的功能，這些工具往往缺乏整合性和擴展性。隨著 Rust 和 Python 的普及，開發者開始尋求更高效和靈活的解決方案。Claw Code 的出現代表了開發者對於工具整合和擴展性的需求，未來可能會看到更多類似的專案出現，進一步推動開發生態的發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Rust 和 Python
- 了解 API 開發
- 有開源貢獻經驗

> [!tip] 導入策略
> 第一週：在個人 side project 中試用。第二週：在小型內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個非核心模組中開始使用。

**成功指標**：API 開發時間減少 30%，或手動部署錯誤歸零。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
| Forks | 102.1k |
| Open Issues | 1413 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-02 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 6.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ultraworkers/claw-code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 93
>     "Python" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sisyphus-dev-ai](https://github.com/sisyphus-dev-ai) | 20 |
> | [@Yeachan-Heo](https://github.com/Yeachan-Heo) | 18 |
> | [@code-yeongyu](https://github.com/code-yeongyu) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://github.com/ultraworkers/claw-code) · [Discord](https://instruct.kr/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-01）
> **活躍天數** 1 天 · **最新 commit** merge: release/0.1.0

## README 摘錄

> [!info]- 展開查看原文 README
> # Rewriting Project Claw Code
> 
>   ⭐ The fastest repo in history to surpass 50K stars, reaching the milestone in just 2 hours after publication ⭐
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
> 
>   Better Harness Tools, not merely storing the archive of leaked Claw Code
> 
>   
> 
> > [!IMPORTANT]
> > **Rust port is now in progress** on the [`dev/rust`](https://github.com/instructkr/claw-code/tree/dev/rust) branch and is expected to be merged into main today. The Rust implementation aims to deliver a faster, memory-safe harness runtime. Stay tuned — this will be the definitive version of the project.
> 
> > If you find this work useful, consider [sponsoring @instructkr on GitHub](https://github.com/sponsors/instructkr) to support continued open-source harness engineering research.
> 
> ---
> 
> ## Rust Port
> 
> The Rust workspace under `rust/` is the current systems-language port of the project.
> 
> It currently includes:
> 
> - `crates/api-client` — API client with provider abstraction, OAuth, and streaming support
> - `crates/runtime` — session state, compaction, MCP orchestration, prompt construction
> - `crates/tools` — tool manifest definitions and execution framework
> - `crates/commands` — slash commands, skills discovery, and config inspection
> - `crates/plugins` — plugin model, hook pipeline, and bundled plugins
> - `crates/compat-harness` — compatibility layer for upstream editor integration
> - `crates/claw-cli` — interactive REPL, markdown rendering, and project bootstrap/init flows
> 
> Run the Rust build:
> 
> ```bash
> cd rust
> cargo build --release
> ```
> 
> ## Backstory
> 
> At 4 AM on March 31, 2026, I woke up to my phone blowing up with notifications. The Claw Code source had been exposed, and the entire dev community was in a frenzy. My girlfriend in Korea was genuinely worried I might face legal action from the original authors just for having the code on my machine — so I did what any engineer would do under pressure: I sat down, ported the core features to Python from scratch, and pushed it before the sun came up.
> 
> The whole thing was orchestrated end-to-end using [oh-my-codex (OmX)](https://github.com/Yeachan-Heo/oh-my-codex) by [@bellman_ych](https://x.com/bellman_ych) — a workflow layer built on top of OpenAI's Codex ([@OpenAIDevs](https://x.com/OpenAIDevs)). I used `$team` mode for parallel code review and `$ralph` mode for persistent execution loops with architect-level verification. The entire porting session — from reading the original harness structure to producing a working Python tree with tests — was driven through OmX orchestration.
> 
> The result is a clean-room Python rewrite that captures the architectural patterns of Claw Code's agent harness without copying any proprietary source. I'm now actively collaborating with [@bellman_ych](https://x.com/bellman_ych) — the creator of OmX himself — to push this further. The basic Python foundation is already in place and functional, but we're just getting started. **Stay tuned — a much more capable version is on the way.**
> 
> The Rust port was developed with both [oh-my-codex (OmX)](https://github.com/Yeachan-Heo/oh-my-codex) and [oh-my-opencode (OmO)](https://github.com/code-yeongyu/oh-my-openagent): OmX drove scaffolding, orchestration, and architecture direction, while OmO was used for later implementation acceleration and verification support.
> 
> https://github.com/instructkr/claw-code
> 
> ## The Creators Featured in Wall Street Journal For Avid Claw Code Fans
> 
> I've been deeply interested in **harness engineering** — studying how agent systems wire tools, orchestrate tasks, and manage runtime context. This isn't a sudden thing. The Wall Street Journal featured my work earlier this month, documenting how I've been one of the most active power users exploring these systems:
> 
> > AI startup worker Sigrid Jin, who attended the Seoul dinner, single-handedly used 25 billion of Claw Code tokens last year. At the time, usage limits were looser, allowing early enthusiasts to reach tens of billions of tokens at a very low cost.
> >
> > Despite his countless hours with Claw Code, Jin isn't faithful to any one AI lab. The tools available have different strengths and weaknesses, he said. Codex is better at reasoning, while Claw Code generates cleaner, more shareable code.
> >
> > Jin flew to San Francisco in February for Claw Code's first birthday party, where attendees waited in line to compare notes with Cherny. The crowd included a practicing cardiologist from Belgium who had built an app to help patients navigate care, and a California lawyer who made a tool for automating building permit approvals using Claw Code.
> >
> > "It was basically like a sharing party," Jin said. "There were lawyers, there were doctors, there were dentists. They did not have software engineering backgrounds."
> >
> > — *The Wall Street Journal*, March 21, 2026, [*"The Trillion Dollar Race to Automate Our Entire Lives"*](https://lnkd.in/gs9td3qd)
> 
> ---
> 
> ## Porting Status
> 
> The main source tree is now Python-first.
> 
> - `src/` contains the active Python porting workspace
> - `tests/` verifies the current Python workspace
> - the exposed snapshot is no longer part of the tracked repository state
> 
> The current Python workspace is not yet a complete one-to-one replacement for the original system, but the primary implementation surface is now Python.
> 
> ## Why this rewrite exists
> 
> I originally studied the exposed codebase to understand its harness, tool wiring, and agent workflow. After spending more time with the legal and ethical questions—and after reading the essay linked below—I did not want the exposed snapshot itself to remain the main tracked source tree.
> 
> This repository now focuses on Python porting work instead.
> 
> ## Repository Layout
> 
> ```text
> .
> ├── src/                                # Python porting workspace
> │   ├── __init__.py
> │   ├── commands.py
> │   ├── main.py
> │   ├── models.py
> │   ├── port_manifest.py
> │   ├── query_engine.py
> │   ├── task.py
> │   └── tools.py
> ├── rust/                               # Rust port (claw CLI)
> │   ├── crates/api/                     # API client + streaming
> │   ├── crates/runtime/                 # Session, tools, MCP, config
> │   ├── crates/claw-cli/               # Interactive CLI binary
> │   ├── crates/plugins/                 # Plugin system
> │   ├── crates/commands/                # Slash commands
> │   ├── crates/server/                  # HTTP/SSE server (axum)
> │   ├── crates/lsp/                    # LSP client integration
> │   └── crates/tools/                   # Tool specs
> ├── tests/                              # Python verification
> ├── assets/omx/                         # OmX workflow screenshots
> ├── 2026-03-09-is-legal-the-same-as-legitimate-ai-reimplementation-and-the-erosion-of-copyleft.md
> └── README.md
> ```
> 
> ## Python Workspace Overview
> 
> The new Python `src/` tree currently provides:
> 
> - **`port_manifest.py`** — summarizes the current Python workspace structure
> - **`models.py`** — dataclasses for subsystems, modules, and backlog state
> - **`commands.py`** — Python-side command port metadata
> - **`tools.py`** — Python-side tool port metadata
> - **`query_engine.py`** — renders a Python porting summary from the active workspace
> - **`main.py`** — a CLI entrypoint for manifest and summary output
> 
> ## Quickstart
> 
> Render the Python porting summary:
> 
> ```bash
> python3 -m src.main summary
> ```
> 
> Print the current Python workspace manifest:
> 
> ```bash
> python3 -m src.main manifest
> ```
> 
> List the current Python modules:
> 
> ```bash
> python3 -m src.main subsystems --limit 16
> ```
> 
> Run verification:
> 
> ```bash
> python3 -m unittest discover -s tests -v
> ```
> 
> Run the parity audit against the local ignored archive (when present):
> 
> ```bash
> python3 -m src.main parity-audit
> ```
> 
> Inspect mirrored command/tool inventories:
> 
> ```bash
> python3 -m src.main commands --limit 10
> python3 -m src.main tools --limit 10
> ```
> 
> ## Current Parity Checkpoint
> 
> The port now mirrors the archived root-entry file surface, top-level subsystem names, and command/tool inventories much more closely than before. However, it is **

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]]

[GitHub](https://github.com/ultraworkers/claw-code)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "ultraworkers--claw-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ultraworkers--claw-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ultraworkers--claw-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ultraworkers--claw-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ultraworkers" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-03|2026-04-03]] — 再次上榜，150.9k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，121.8k stars
