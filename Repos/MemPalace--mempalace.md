---
repo: MemPalace/mempalace
url: https://github.com/MemPalace/mempalace
owner: MemPalace
owner_type: Organization
language: Python
license: MIT
description: "The best-benchmarked open-source AI memory system. And it's free."
homepage: "http://mempalaceofficial.com/"
stars: 49482
stars_per_day: 2474
forks: 6489
open_issues: 509
created: 2026-04-05
pushed_at: 2026-04-24
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "記憶系統"
release_tag: "v3.3.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供一個本地的 AI 記憶系統，讓用戶能夠儲存和檢索對話歷史。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-15"
contributor_count: 5
engagement: "medium"
issue_close_rate: 28
repo_size_kb: 16443
readme_length: 6991
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:41802,2026-04-12:41809,2026-04-13:43509,2026-04-14:44893,2026-04-15:45915,2026-04-16:46607,2026-04-17:47148,2026-04-18:47576,2026-04-19:47861,2026-04-20:48135,2026-04-21:48498,2026-04-22:48797,2026-04-23:49029,2026-04-24:49281,2026-04-25:49482"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - easy_install
  - "topic/ai"
  - "topic/chromadb"
  - "topic/llm"
  - "topic/mcp"
  - "topic/memory"
aliases:
  - "mempalace"
  - "MemPalace/mempalace"
  - "提供一個本地的 AI 記憶系統，讓用戶能夠儲存和檢索對話歷史。"
---

# mempalace

**49.5k** stars · **2.5k** stars/天 · 建立 20 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/MemPalace--mempalace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v3.3.3` `easy-install`

`ai` `chromadb` `llm` `mcp` `memory` `python`

> [!summary] 一句話摘要
> 提供一個本地的 AI 記憶系統，讓用戶能夠儲存和檢索對話歷史。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (2.5k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在本地環境中管理 AI 記憶的開發者，尤其是對數據隱私有高要求的團隊。
> **一句話重點** MemPalace 提供了一個強大的本地 AI 記憶系統，讓用戶能夠在不依賴雲端的情況下安全管理資料。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MemPalace--mempalace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶系統" && p.file.name !== "MemPalace--mempalace" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到高效的本地 AI 記憶管理，值得投入。

> [!abstract] 核心創新
> 提供一個完全本地化的 AI 記憶系統，無需 API 金鑰，並且支持高效的語意搜尋。

## 專案簡介

MemPalace 是一個開源的 AI 記憶系統，專注於將對話歷史以逐字文本形式儲存，並透過語意搜尋進行檢索。用戶可以使用 `mempalace mine` 指令將專案文件或對話內容挖掘進入記憶宮殿，並透過 `mempalace search` 指令進行查詢。這種設計使得用戶能夠在本地環境中管理和檢索資料，無需依賴 API 或雲端服務，這對於隱私保護至關重要。MemPalace 的索引結構將人員和項目視為「翼」，主題視為「房間」，內容則存放在「抽屜」中，這樣的設計便於用戶進行有範圍的搜尋，而不是在平坦的資料庫中進行搜尋。

技術上，MemPalace 使用 ChromaDB 作為預設的向量儲存後端，並允許用戶替換為其他後端，這樣的靈活性使得系統可擴展性更強。

根據基準測試，MemPalace 在 LongMemEval 測試中獲得了 96.6% 的檢索回憶率，且不需要任何 LLM 或 API 金鑰，這使得其在性能上具有競爭優勢。

與其他類似工具相比，MemPalace 的設計更注重本地數據的儲存和檢索，這與如 0xGF/boneyard 和 Zep 等工具不同，後者可能依賴於雲端服務或不同的數據處理方式。MemPalace 的使用者可以在不擔心數據外洩的情況下，進行個性化的資料管理。

然而，該專案目前仍在 beta 階段，存在一定的穩定性風險，且社群活躍度中等，對於新手來說可能需要一些時間來熟悉其功能和命令。對於需要在本地環境中進行 AI 記憶管理的開發者，MemPalace 提供了一個強大的解決方案，但在大規模商業應用上仍需謹慎考量其穩定性和社群支持情況。

**技術棧**：`Python 3.9+` · `ChromaDB`

## 重點功能

- 逐字儲存 — 將對話歷史以逐字文本形式儲存，無需摘要或提煉。
- 語意搜尋 — 使用 ChromaDB 進行語意搜尋，支持精確檢索。
- 靈活的後端 — 支援多種向量儲存後端，方便用戶自定義。
- 無需 API 金鑰 — 完全本地運行，無需依賴外部服務。
- 高效能檢索 — 在 LongMemEval 測試中達到 96.6% 的檢索回憶率。

## 快速開始

1. 安裝 MemPalace
```bash
pip install mempalace
```
2. 初始化記憶宮殿
```bash
mempalace init ~/projects/myapp
```
3. 挖掘內容
```bash
mempalace mine ~/projects/myapp
```
4. 進行搜尋
```bash
mempalace search "why did we switch to GraphQL"
```
5. 喚醒上下文
```bash
mempalace wake-up
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 MemPalace 並初始化記憶宮殿。",
  "指令": "mempalace mine ~/projects/myapp",
  "預期輸出": "將專案文件挖掘進入記憶宮殿，並可進行後續檢索。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 20 天內累積 49482 stars（2474/天），forks 6489（13.1%），顯示出強烈的社群興趣。這個專案的主要貢獻者包括 igorls 和 bensig，他們在開源社群中有一定的影響力。MemPalace 解決了以往 AI 記憶系統需要依賴雲端服務的痛點，提供了一個完全本地化的解決方案，這在隱私日益受到重視的當下尤為重要。社群中對於其基準測試結果的關注，也促進了該專案的快速增長。

## 適合誰使用

**目標受眾**：需要在本地環境中管理 AI 記憶的開發者，尤其是對數據隱私有高要求的團隊。

> [!example] 使用場景
> - 後端工程師用它來將專案文件挖掘進記憶宮殿，因為這樣可以在本地快速檢索過去的對話和決策，提升工作效率。
> - 產品經理用它來管理會議記錄和專案進度，因為能夠透過語意搜尋快速找到相關資訊，避免重複工作。
> - AI 開發者用它來儲存和檢索訓練數據和模型參數，因為這樣可以在不依賴外部服務的情況下，進行快速迭代和測試。

## 架構分析

MemPalace 採用本地化架構，所有數據儲存在用戶的機器上，這樣設計的目的是為了提高數據隱私和安全性。系統的核心是 ChromaDB 作為向量儲存後端，並提供了可插拔的後端接口，允許用戶根據需求替換後端。資料流從用戶的輸入開始，通過 `mempalace mine` 指令將資料挖掘進入記憶宮殿，接著用戶可以透過 `mempalace search` 指令進行檢索。

這種設計使得用戶能夠在不依賴外部服務的情況下，快速檢索和管理資料。選擇本地化架構的代價是需要用戶自行管理資料的安全性和完整性，但這也使得系統在隱私保護上具有明顯優勢。擴展性方面，由於後端可替換，未來可以根據需求進行擴展。

## 技術深入分析

MemPalace 的核心技術機制是將對話歷史以逐字文本形式儲存，並透過 ChromaDB 進行語意搜尋。這種設計使得用戶能夠精確檢索資料，而不需要進行任何摘要或提煉。系統的檢索性能在 LongMemEval 測試中達到 96.6%，這表明其在無需 API 金鑰的情況下，依然能提供高效的檢索能力。MemPalace 的架構選擇了本地化的方式，這使得用戶的數據不會被上傳至雲端，從而提高了隱私性和安全性。選擇 ChromaDB 作為向量儲存後端的好處在於其高效能和可擴展性，但這也意味著用戶需要自行管理資料的安全性。技術風險方面，隨著用戶數據量的增加，檢索性能可能會受到影響，這需要未來的版本進一步優化。整合方面，MemPalace 可以與多種工具和框架進行搭配，特別是在本地開發環境中，能夠與現有的 CI/CD 流程無縫整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中包含了詳細的 getting started guide，對於新用戶非常友好。可惜的是，目前文件僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 完全本地化，無需依賴外部服務，保護用戶隱私。
> - 高效的語意搜尋能力，檢索回憶率高達 96.6%。
> - 靈活的後端設計，支持多種向量儲存後端。

> [!danger] 缺點
> - 仍在 beta 階段，穩定性和功能可能不夠完善。
> - 對於大型資料集的性能可能受到影響。
> - 社群活躍度中等，文檔和支援可能不夠充分。

> [!warning] 注意事項
> - 目前仍在 beta 階段，可能存在穩定性問題。
> - 對於大型資料集的檢索性能可能會受到影響。
> - 社群支持和文檔仍在持續完善中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要依賴雲端服務進行數據管理，而 MemPalace 完全本地化，提供更高的數據隱私。 |
| Zep | Zep 提供的功能較為廣泛，但在本地數據儲存和檢索方面不如 MemPalace 專注。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要依賴雲端服務進行數據管理，而 MemPalace 完全本地化，提供更高的數據隱私。 | 如果你的團隊已經在使用雲端服務，且不太關心數據隱私，Boneyard 可能更適合。 | medium - 需要將數據從本地遷移到雲端，並調整工作流程。 |
| Zep | Zep 提供的功能較為廣泛，但在本地數據儲存和檢索方面不如 MemPalace 專注。 | 如果需要更全面的數據管理功能，Zep 可能更適合。 | high - 需要重構現有的數據管理流程以適應 Zep 的架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mempalace** | **boneyard** | **Zep** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 主要依賴雲端服務進行數據管理，而 MemPalace 完全本地化，提供更高的數據隱私。 | Zep 提供的功能較為廣泛，但在本地數據儲存和檢索方面不如 MemPalace 專注。 |
> | 遷移成本 | - | medium - 需要將數據從本地遷移到雲端，並調整工作流程。 | high - 需要重構現有的數據管理流程以適應 Zep 的架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用雲端服務，且不太關心數據隱私，Bone | 如果需要更全面的數據管理功能，Zep 可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Linux 環境中安裝時可能會遇到依賴問題，特別是與 Python 版本相關的問題。
  - 解法：確保使用 Python 3.9 以上版本，並檢查依賴包的版本。
- [MEDIUM] 對於大型數據集，檢索性能可能會下降。
  - 解法：考慮使用更高效的向量儲存後端或優化查詢方式。
- [MEDIUM] 在使用過程中可能會遇到插件不兼容的問題。
  - 解法：定期檢查插件更新，並參考官方文檔進行配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 本地化設計能有效保護數據隱私，且易於管理。 |
| 大型企業的數據管理系統 | 不適合 | 目前仍在 beta 階段，穩定性不足，無法滿足企業級需求。 |
| 需要快速檢索和管理對話歷史的開發團隊 | 適合 | 高效的語意搜尋能力能提升工作效率。 |
| 對數據隱私有高要求的個人開發者 | 非常適合 | 完全本地化的設計能有效保護用戶隱私。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的本地 AI 記憶管理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MemPalace 完全在本地運行，不需要高權限，且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MemPalace 最常與本地開發環境搭配使用，特別是在需要管理對話歷史的場景中。用戶可以在使用 Next.js 的專案中，透過 `mempalace mine` 指令將對話內容挖掘進入記憶宮殿，並使用 `mempalace search` 指令進行檢索。該工具支援與 GitHub Actions 整合，方便在 CI 流程中使用。整合的摩擦點主要在於需要確保所有依賴的版本相容，並定期檢查更新。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
| Forks | 6.5k |
| Open Issues | 509 |
| Issue 解決率 | 28% (194 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-05 |
| 官方網站 | [Link](http://mempalaceofficial.com/) |
| Repo 大小 | 16.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MemPalace/mempalace) |
| Topics | `ai` `chromadb` `llm` `mcp` `memory` `python` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "HTML" : 4
>     "CSS" : 3
>     "Vue" : 1
>     "JavaScript" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@igorls](https://github.com/igorls) | 197 |
> | [@bensig](https://github.com/bensig) | 112 |
> | [@milla-jovovich](https://github.com/milla-jovovich) | 29 |
> | [@jphein](https://github.com/jphein) | 26 |
> | [@tmuskal](https://github.com/tmuskal) | 26 |

**最新版本**：v3.3.3 — v3.3.3 — restore install integrity (2026-04-24)

> [!info]- Release Notes
> ### Bug Fixes
> 
> - **Install regression** — `mempalace-mcp` console script is now declared in `pyproject.toml` alongside `.claude-plugin/plugin.json`'s reference to it. In v3.3.2 the two drifted apart (plugin.json shipped the new `"command": "mempalace-mcp"` form before the matching entry point landed), so every fresh `pip install mempalace==3.3.2` produced a Claude Code plugin config pointing at a binary that wasn't installed. (#1093, #340)
> - Restore silent-save visibility after the Claude Code 2.1.114 client regression — production transcript saves were failing silently until this PR. (#1021)
> - Paginate `status`-path metadata fetches so large palaces don't trip SQLite variable limits. (#851)
> - Resolve the Claude plugin hook runner across platform / plugin-dir variations; previously broke on Windows and some macOS layouts. (#942)
> - Real `python3` resolution for `.sh` hooks with a `MEMPAL_PYTHON` override path. (#833)
> - Add optional `wing` parameter to `tool_diary_write` / `tool_diary_read` and derive per-project wing from the Claude Code transcript path when writing from the stop hook — diary entries from different projects no longer collapse into a shared default wing. (#659)
> - Treat empty string as "no filter" in `mempalace_search` `wing`/`room`; LLM agents that default to filling every optional parameter with `""` no longer get bounced with `must be a non-empty string`. (#1097, #1084)
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，持續更新中。
**連結**：[文件](http://mempalaceofficial.com/) · [Discord](https://discord.com/invite/ycTQQCu6kn)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-24）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1185 from MemPalace/perf/batched-upsert-gpu

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/MemPalace/mempalace/issues/27) | Multiple issues between README claims and codebase `bug` `documentation` | 332 | 39 |
> | [#125](https://github.com/MemPalace/mempalace/issues/125) | BEAM 100K benchmark results - first end-to-end answer qualit `documentation` | 29 | 9 |
> | [#39](https://github.com/MemPalace/mempalace/issues/39) | Independent benchmark reproduction on M2 Ultra — raw confirm `documentation` | 15 | 13 |
> | [#408](https://github.com/MemPalace/mempalace/issues/408) | Plugin assumes python3 -m mempalace — breaks on modern Linux `bug` `area/install` | 10 | 12 |

## README 摘錄

> [!info]- 展開查看原文 README
> > [!CAUTION]
> > **Scam alert.** The only official sources for MemPalace are this
> > [GitHub repository](https://github.com/MemPalace/mempalace), the
> > [PyPI package](https://pypi.org/project/mempalace/), and the docs site at
> > **[mempalaceofficial.com](https://mempalaceofficial.com)**. Any other
> > domain — including `mempalace.tech` — is an impostor and may distribute
> > malware. Details and timeline: [docs/HISTORY.md](docs/HISTORY.md).
> 
> # MemPalace
> 
> Local-first AI memory. Verbatim storage, pluggable backend, 96.6% R@5 raw on LongMemEval — zero API calls.
> 
> [![][version-shield]][release-link]
> [![][python-shield]][python-link]
> [![][license-shield]][license-link]
> [![][discord-shield]][discord-link]
> 
> ---
> 
> ## What it is
> 
> MemPalace stores your conversation history as verbatim text and retrieves
> it with semantic search. It does not summarize, extract, or paraphrase.
> The index is structured — people and projects become *wings*, topics
> become *rooms*, and original content lives in *drawers* — so searches
> can be scoped rather than run against a flat corpus.
> 
> The retrieval layer is pluggable. The current default is ChromaDB; the
> interface is defined in [`mempalace/backends/base.py`](mempalace/backends/base.py)
> and alternative backends can be dropped in without touching the rest of
> the system.
> 
> Nothing leaves your machine unless you opt in.
> 
> Architecture, concepts, and mining flows:
> [mempalaceofficial.com/concepts/the-palace](https://mempalaceofficial.com/concepts/the-palace.html).
> 
> ---
> 
> ## Install
> 
> ```bash
> pip install mempalace
> mempalace init ~/projects/myapp
> ```
> 
> ## Quickstart
> 
> ```bash
> # Mine content into the palace
> mempalace mine ~/projects/myapp                    # project files
> mempalace mine ~/.claude/projects/ --mode convos   # Claude Code sessions (scope with --wing per project)
> 
> # Search
> mempalace search "why did we switch to GraphQL"
> 
> # Load context for a new session
> mempalace wake-up
> ```
> 
> For Claude Code, Gemini CLI, MCP-compatible tools, and local models, see
> [mempalaceofficial.com/guide/getting-started](https://mempalaceofficial.com/guide/getting-started.html).
> 
> ---
> 
> ## Benchmarks
> 
> All numbers below are reproducible from this repository with the commands
> in [`benchmarks/BENCHMARKS.md`](benchmarks/BENCHMARKS.md). Full
> per-question result files are committed under `benchmarks/results_*`.
> 
> **LongMemEval — retrieval recall (R@5, 500 questions):**
> 
> | Mode | R@5 | LLM required |
> |---|---|---|
> | Raw (semantic search, no heuristics, no LLM) | **96.6%** | None |
> | Hybrid v4, held-out 450q (tuned on 50 dev, not seen during training) | **98.4%** | None |
> | Hybrid v4 + LLM rerank (full 500) | ≥99% | Any capable model |
> 
> The raw 96.6% requires no API key, no cloud, and no LLM at any stage. The
> hybrid pipeline adds keyword boosting, temporal-proximity boosting, and
> preference-pattern extraction; the held-out 98.4% is the honest
> generalisable figure.
> 
> The rerank pipeline promotes the best candidate out of the top-20
> retrieved sessions using an LLM reader. It works with any reasonably
> capable model — we have reproduced it with Claude Haiku, Claude Sonnet,
> and minimax-m2.7 via Ollama Cloud (no Anthropic dependency). The gap
> between raw and reranked is model-agnostic; we do not headline a "100%"
> number because the last 0.6% was reached by inspecting specific wrong
> answers, which `benchmarks/BENCHMARKS.md` flags as teaching to the test.
> 
> **Other benchmarks (full results in [`benchmarks/BENCHMARKS.md`](benchmarks/BENCHMARKS.md)):**
> 
> | Benchmark | Metric | Score | Notes |
> |---|---|---|---|
> | LoCoMo (session, top-10, no rerank) | R@10 | 60.3% | 1,986 questions |
> | LoCoMo (hybrid v5, top-10, no rerank) | R@10 | 88.9% | Same set |
> | ConvoMem (all categories, 250 items) | Avg recall | 92.9% | 50 per category |
> | MemBench (ACL 2025, 8,500 items) | R@5 | 80.3% | All categories |
> 
> We deliberately do not include a side-by-side comparison against Mem0,
> Mastra, Hindsight, Supermemory, or Zep. Those projects publish different
> metrics on different splits, and placing retrieval recall next to
> end-to-end QA accuracy is not an honest comparison. See each project's
> own research page for their published numbers.
> 
> **Reproducing every result:**
> 
> ```bash
> git clone https://github.com/MemPalace/mempalace.git
> cd mempalace
> pip install -e ".[dev]"
> # see benchmarks/README.md for dataset download commands
> python benchmarks/longmemeval_bench.py /path/to/longmemeval_s_cleaned.json
> ```
> 
> ---
> 
> ## Knowledge graph
> 
> MemPalace includes a temporal entity-relationship graph with validity
> windows — add, query, invalidate, timeline — backed by local SQLite.
> Usage and tool reference:
> [mempalaceofficial.com/concepts/knowledge-graph](https://mempalaceofficial.com/concepts/knowledge-graph.html).
> 
> ## MCP server
> 
> 29 MCP tools cover palace reads/writes, knowledge-graph operations,
> cross-wing navigation, drawer management, and agent diaries. Installation
> and the full tool list:
> [mempalaceofficial.com/reference/mcp-tools](https://mempalaceofficial.com/reference/mcp-tools.html).
> 
> ## Agents
> 
> Each specialist agent gets its own wing and diary in the palace.
> Discoverable at runtime via `mempalace_list_agents` — no bloat in your
> system prompt:
> [mempalaceofficial.com/concepts/agents](https://mempalaceofficial.com/concepts/agents.html).
> 
> ## Auto-save hooks
> 
> Two Claude Code hooks save periodically and before context compression:
> [mempalaceofficial.com/guide/hooks](https://mempalaceofficial.com/guide/hooks.html).
> 
> ---
> 
> ## Requirements
> 
> - Python 3.9+
> - A vector-store backend (ChromaDB by default)
> - ~300 MB disk for the default embedding model
> 
> No API key is required for the core benchmark path.
> 
> ## Docs
> 
> - Getting started → [mempalaceofficial.com/guide/getting-started](https://mempalaceofficial.com/guide/getting-started.html)
> - CLI reference → [mempalaceofficial.com/reference/cli](https://mempalaceofficial.com/reference/cli.html)
> - Python API → [mempalaceofficial.com/reference/python-api](https://mempalaceofficial.com/reference/python-api.html)
> - Full benchmark methodology → [benchmarks/BENCHMARKS.md](benchmarks/BENCHMARKS.md)
> - Release notes → [CHANGELOG.md](CHANGELOG.md)
> - Corrections and public notices → [docs/HISTORY.md](docs/HISTORY.md)
> 
> ## Contributing
> 
> PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).
> 
> [version-shield]: https://img.shields.io/badge/version-3.3.3-4dc9f6?style=flat-square&labelColor=0a0e14
> [release-link]: https://github.com/MemPalace/mempalace/releases
> [python-shield]: https://img.shields.io/badge/python-3.9+-7dd8f8?style=flat-square&labelColor=0a0e14&logo=python&logoColor=7dd8f8
> [python-link]: https://www.python.org/
> [license-shield]: https://img.shields.io/badge/license-MIT-b0e8ff?style=flat-square&labelColor=0a0e14
> [license-link]: https://github.com/MemPalace/mempalace/blob/main/LICENSE
> [discord-shield]: https://img.shields.io/badge/discord-join-5865F2?style=flat-square&labelColor=0a0e14&logo=discord&logoColor=5865F2
> [discord-link]: https://discord.com/invite/ycTQQCu6kn

## 延伸閱讀

相關概念：[[RAG]] · [[向量資料庫]] · [[記憶系統]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/MemPalace/mempalace) · [官方網站](http://mempalaceofficial.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶系統" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "MemPalace--mempalace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","向量資料庫","記憶系統"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MemPalace--mempalace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MemPalace--mempalace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MemPalace--mempalace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MemPalace" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 首次收錄，41.8k stars
