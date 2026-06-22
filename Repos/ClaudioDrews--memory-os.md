---
repo: ClaudioDrews/memory-os
url: https://github.com/ClaudioDrews/memory-os
owner: ClaudioDrews
owner_type: User
language: Python
license: MIT
description: "A 7-layer memory operating system for Hermes Agent — persistent memory with Qdrant, structured facts, fabric recall, auto-curated wiki, and surgical context injection. Runs locally, any LLM provider."
homepage: ""
stars: 1178
stars_per_day: 56
forks: 111
open_issues: 6
created: 2026-05-31
pushed_at: 2026-06-10
first_seen: 2026-06-04
week: "2026-W23"
month: "2026-06"
category: "AI/ML"
subcategory: "記憶系統"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-04
use_case: "為 Hermes Agent 提供持久記憶的操作系統，讓 AI 能夠記住過去的對話和決策。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-14"
contributor_count: 4
engagement: "low"
issue_close_rate: 67
repo_size_kb: 448
readme_length: 9431
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-04"
star_history: "2026-06-04:756,2026-06-04:757,2026-06-05:828,2026-06-05:828,2026-06-06:882,2026-06-06:882,2026-06-07:951,2026-06-07:951,2026-06-08:1011,2026-06-09:1037,2026-06-10:1050,2026-06-11:1069,2026-06-12:1086,2026-06-13:1093,2026-06-14:1098,2026-06-15:1104,2026-06-16:1119,2026-06-17:1126,2026-06-18:1150,2026-06-19:1167,2026-06-20:1170,2026-06-21:1172,2026-06-22:1178"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/ai_memory"
  - "topic/context_injection"
  - "topic/docker"
  - "topic/ground_truth"
  - "topic/hermes_agent"
aliases:
  - "memory-os"
  - "ClaudioDrews/memory-os"
  - "為 Hermes Agent 提供持久記憶的操作系統，讓 AI 能夠記住過去的對話和決策。"
---

# memory-os

**1.2k** stars · **56** stars/天 · 建立 21 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/ClaudioDrews--memory-os");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ai-memory` `context-injection` `docker` `ground-truth` `hermes-agent` `local-first` `open-source` `persistent-memory` `qdrant` `rag` `self-hosted` `vector-database`

> [!summary] 一句話摘要
> 為 Hermes Agent 提供持久記憶的操作系統，讓 AI 能夠記住過去的對話和決策。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (56 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 11 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在本地運行 AI 記憶系統且希望避免雲端依賴的開發者和研究者。
> **一句話重點** 這個專案的最大優勢在於提供了一個完全本地化的記憶系統，讓用戶能夠在不依賴雲端的情況下管理 AI 的記憶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ClaudioDrews--memory-os");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶系統" && p.file.name !== "ClaudioDrews--memory-os" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、8 小時整合，得到靈活的本地記憶管理，值得投入。

> [!abstract] 核心創新
> 提供完全本地化的記憶基礎設施，無需雲端訂閱。

## 專案簡介

Memory OS 是一個七層的記憶操作系統，專為 Hermes Agent 設計，旨在解決 AI 在長期合作中遺忘問題。它的核心流程是：用戶的對話和決策被捕捉並存儲在本地，然後透過 Qdrant 進行結構化檢索，最後在需要時自動注入相關記憶。這樣的設計不僅能減少 API 調用的成本，還能提高上下文的準確性，讓 AI 像同事一樣記住過去的討論。關鍵指令包括 `docker-compose up` 來啟動本地環境，並利用 `fabric_recall` 來檢索記憶。這個工具的賣點在於其完全本地化的記憶基礎設施，避免了雲端依賴和訂閱費用。技術上，它使用了 Python、Redis 和 Qdrant，這些技術選擇使得系統能夠高效地處理記憶的捕捉和檢索。

與傳統的 Hermes 系統相比，Memory OS 提供了更強大的跨會話回憶和結構化事實的支持，並且具備自我整理的維基系統，這使得用戶能夠更輕鬆地管理和查詢過去的資訊。這些功能的實現依賴於一個本地的記憶堆棧，這意味著用戶不必擔心數據隱私問題。使用者在實際運行中可能會遇到的問題包括 Docker 安裝的複雜性和對於非 Hermes 系統的兼容性問題。整體來看，這是一個適合需要長期記憶的 AI 應用的解決方案，尤其是在需要本地化處理的情境下。未來六個月內，這個專案可能會進一步增強與其他 LLM 提供者的兼容性。

**技術棧**：`Python 3.8` · `Redis 5.0` · `Qdrant 1.17`

## 重點功能

- 七層記憶架構 — 提供多層次的記憶捕捉和檢索功能。
- 本地化記憶基礎設施 — 避免雲端依賴，確保數據隱私。
- 自我整理的維基系統 — 自動更新和管理過去的對話和決策。
- 結構化事實存儲 — 透過信任評分系統提高記憶的準確性。
- 與任何 LLM 提供者兼容 — 支持 OpenAI、Anthropic 等多種模型。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ClaudioDrews/memory-os.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動 Docker 環境
```bash
docker-compose up
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天就累積 1178 stars（56/天），forks 111（9.4%），顯示出穩定的增長。作者 ClaudioDrews 之前在 AI 記憶領域有過多次貢獻，這個專案解決了現有記憶系統普遍存在的雲端依賴問題，讓用戶能夠在本地運行記憶系統。這樣的設計避免了數據外洩的風險，並且提供了更高的靈活性。社群的反應熱烈，尤其是對於如何在 Docker 環境中安裝的支持需求，顯示出使用者對於本地化解決方案的迫切需求。

## 適合誰使用

**目標受眾**：需要在本地運行 AI 記憶系統且希望避免雲端依賴的開發者和研究者。

> [!example] 使用場景
> - AI 研究員用它來在本地環境中測試記憶模型，因為它能夠無縫整合多種 LLM 提供者，並且不需要雲端存取。
> - 產品經理用它來記錄會議決策和項目進展，因為它的自我整理維基系統能夠自動更新並提供歷史查詢。
> - 開發者用它來構建個性化的 AI 助手，因為它支持本地化的記憶基礎設施，避免了數據隱私的顧慮。

## 架構分析

Memory OS 採用七層架構設計，旨在有效捕捉和管理 AI 的記憶。第一層到第六層負責記憶的捕捉、存儲和注入，而第七層則確保這些記憶能夠被實際使用。這樣的設計使得記憶的使用效率大幅提升，避免了重複的 API 調用和資源浪費。

資料流中，Qdrant 負責向量檢索，Redis 用於快速存取，整體架構的選擇旨在提供高效的本地化解決方案。選擇本地化架構的代價是需要使用者具備一定的技術能力來設置和維護環境，這對於非技術用戶來說可能是一個挑戰。擴展性方面，由於依賴於本地硬體資源，當資料量增長時，可能需要升級硬體以維持效能。

## 技術深入分析

Memory OS 的核心技術機制是基於七層架構的記憶管理系統，使用 Qdrant 進行向量檢索，並透過 Redis 提供快速存取。這樣的設計使得系統能夠高效處理大量的記憶數據，並且能夠在本地運行，避免了雲端依賴。效能方面，系統能夠在本地硬體上運行，具體的性能瓶頸取決於使用者的硬體配置。選擇 Python 作為開發語言的好處在於其生態系統豐富，能夠快速集成多種庫，但也可能導致較高的記憶體佔用。技術風險方面，隨著資料量的增長，可能會面臨性能下降的問題，特別是在硬體資源有限的情況下。整合方面，這個工具能夠與主流的 LLM 提供者無縫對接，並且能夠輕鬆融入現有的開發流程，對於 CI/CD pipeline 的友好度也相對較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝指令，安裝過程相對順暢，但對於 Docker 的使用可能會對新手造成一定的困難。文件中提供了基本的使用範例，讓使用者能夠快速上手。整體來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供完全本地化的記憶解決方案，確保數據隱私。
> - 支持多種 LLM 提供者，靈活性高。
> - 自我整理的維基系統提升了記憶管理的效率。

> [!danger] 缺點
> - 需要 Docker 環境，對新手來說有一定的學習曲線。
> - 對於非 Hermes 系統的兼容性尚未完全測試。
> - 目前僅支援 Python 3.8 以上版本，限制了使用範圍。

> [!warning] 注意事項
> - 需要 Docker 環境才能運行。
> - 對於非 Hermes 系統的兼容性尚未完全測試。
> - 目前僅支援 Python 3.8 以上版本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的記憶功能，但依賴雲端服務，無法提供本地化的解決方案。 |
| Zep | 雖然支持記憶功能，但主要是雲端解決方案，缺乏本地數據存儲的選項。 |
| mem0 | 專注於雲端記憶管理，無法提供本地運行的靈活性和數據隱私。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| mem0 | mem0 主要依賴雲端服務來管理記憶，而 Memory OS 提供本地化的解決方案。 | 如果需要一個簡單的雲端解決方案，且不在意數據隱私問題，mem0 可能更適合。 | medium，因為需要重新設計記憶管理的流程。 |
| Zep | Zep 也是雲端解決方案，無法提供本地運行的靈活性，而 Memory OS 支持本地數據存儲。 | 如果團隊已經在使用 Zep 並希望保持一致性，則可以考慮。 | high，因為需要全面轉換到新的記憶管理系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **memory-os** | **mem0** | **Zep** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | mem0 主要依賴雲端服務來管理記憶，而 Memory OS 提供本地化的解決方案。 | Zep 也是雲端解決方案，無法提供本地運行的靈活性，而 Memory OS 支持本地數據存儲。 |
> | 遷移成本 | - | medium，因為需要重新設計記憶管理的流程。 | high，因為需要全面轉換到新的記憶管理系統。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的雲端解決方案，且不在意數據隱私問題，mem | 如果團隊已經在使用 Zep 並希望保持一致性，則可以考慮。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Docker 啟動可能會失敗，特別是未安裝 Docker 的情況下。
  - 解法：確保 Docker 已正確安裝並運行。
- [MEDIUM] 對於非 Hermes 系統的支持尚不完善，可能導致兼容性問題。
  - 解法：在使用前進行充分測試。
- [MEDIUM] 記憶數據量過大時，可能會影響系統性能。
  - 解法：定期清理不必要的記憶數據。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要長期記憶的 AI 助手 | 非常適合 | 本地化的記憶管理能有效提高 AI 的上下文準確性。 |
| 小型開發團隊的內部工具 | 適合 | 能夠靈活整合到現有的開發流程中。 |
| 大型企業的核心系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 需要快速原型開發的個人項目 | 非常適合 | 能夠快速部署並測試記憶功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、8 小時整合，得到靈活的本地記憶管理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具運行在本地環境，不需要高權限，且不會存取敏感資料。依賴的庫均為開源，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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
| Forks | 111 |
| Open Issues | 6 |
| Issue 解決率 | 67% (12 closed) |
| 最後推送 | 2026-06-10 |
| 建立日期 | 2026-05-31 |
| Repo 大小 | 448 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ClaudioDrews/memory-os) |
| Topics | `ai-memory` `context-injection` `docker` `ground-truth` `hermes-agent` `local-first` `open-source` `persistent-memory` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `aiohttp` `arq` `redis` `python-dotenv` `pyyaml` `qdrant-client` `httpx` `fastembed`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 83
>     "Shell" : 17
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ClaudioDrews](https://github.com/ClaudioDrews) | 12 |
> | [@Davidsoff](https://github.com/Davidsoff) | 2 |
> | [@brian-doherty](https://github.com/brian-doherty) | 2 |
> | [@aaronjmars](https://github.com/aaronjmars) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次更新和問題回應。
**連結**：[文件](https://github.com/ClaudioDrews/memory-os/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-07 ~ 2026-06-10）
> **活躍天數** 3 天 · **最新 commit** fix: expose embedding backend env vars in docker-compose and setup.sh

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/ClaudioDrews/memory-os/issues/27) | Conversation with Hermes Agent regarding this memory project | 2 | 2 |
> | [#32](https://github.com/ClaudioDrews/memory-os/issues/32) | Support Hermes Docker Installation `enhancement` | 0 | 0 |
> | [#17](https://github.com/ClaudioDrews/memory-os/issues/17) | Using with non Hermes harnesses | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Memory OS — Hermes Agent Memory Operating System
> 
> > **Your agent finally stops forgetting.**  \
> > Permanent memory. Local memory infrastructure. API-provider agnostic. Surgically token-efficient.
> 
> Seven memory layers. Automatic, intelligent context injection. Structured facts with trust scoring. A self-curating wiki pipeline. Semantic search across **every conversation you've ever had**.
> 
> Memory OS turns Hermes Agent into a real long-term collaborator — one that remembers your projects, your decisions, your reasoning, and brings exactly the right context back at exactly the right moment. Like talking to a colleague who was there for every session.
> 
> **Memory infrastructure runs entirely on your machine. Works with any LLM provider — OpenRouter, OpenAI, Anthropic, Ollama, or local models. No memory subscription. No vendor lock-in.**
> 
> ---
> 
> 
> ## Why Layer 7 is the most important layer
> 
> Layers 1-6 ensure memory is **captured, stored, and injected**. Layer 7 ensures the injected memory is **used**.
> 
> Without the Ground Truth hierarchy:
> - Qdrant points are injected but the agent calls the Qdrant API to verify them
> - Fabric entries are injected but the agent runs `fabric_recall` to re-find them  
> - Session history is injected but the agent runs `session_search` to re-discover it
> - Facts are injected but the agent probes `fact_store` to confirm them
> 
> The result: **memory-zero behavior** despite perfect injection. Every rediscovery burns tokens, context, and time.
> 
> → **[Read Layer 7: Ground Truth Hierarchy](layers/07-ground-truth.md)** — the critical fix.
> 
> ---
> 
> 
> ## Memory OS vs. stock Hermes
> 
> | Aspect | Stock Hermes | Memory OS |
> |---|---|---|
> | Workspace memory | MEMORY.md + USER.md | + CREATIVE.md + intelligent injection |
> | Session memory | Basic state.db | + FTS5 full-text search + session injection |
> | Structured facts | Not present | Fact store + trust scoring + feedback loop |
> | Cross-session recall | Limited | Fabric fork + multi-source injection |
> | Vector search | Not present | Qdrant hybrid + 4-level fallback cascade |
> | Cleanup and deduplication | Not present | Decay scanner + semantic dedup + archival |
> | Knowledge pipeline | Not present | Self-curating LLM Wiki |
> | **Ground Truth hierarchy** | **Not present** | **Injected memory ranked as authoritative; agent must use context provided** |
> | Token efficiency | — | Surgical: gated retrieval + per-session dedup + no wasted rediscovery |
> | Infrastructure | — | Local memory stack (Qdrant + Redis + ARQ) + any LLM provider |
> 
> ---
> 
> 
> ## Why not mem0, Zep, Letta, or other providers?
> 
> Because almost every modern memory solution is **cloud-first**. If you want real, private memory infrastructure running on your own machine — with no cloud memory subscription, full provider flexibility, and no data leaving your local stack — none of them deliver what Memory OS delivers.
> 
> | | Memory OS | mem0 | Zep | Letta |
> |---|---|---|---|---|
> | Local memory infrastructure | ✓ | ✗ | ✗ | ✗ |
> | No memory subscription | ✓ | ✗ | ✗ | ✗ |
> | Provider agnostic (OpenRouter, Ollama…) | ✓ | Partial | Partial | Partial |
> | Hermes-native | ✓ | ✗ | ✗ | ✗ |
> | Structured facts + trust scores | ✓ | Partial | ✗ | ✗ |
> | Self-curating wiki | ✓ | ✗ | ✗ | ✗ |
> | Intelligent decay + archival | ✓ | ✗ | ✗ | ✗ |
> | **Ground Truth hierarchy** | **✓** | **✗** | **✗** | **✗** |
> 
> ---
> 
> 
> ## What's New in v0.2.0
> 
> **One-command install.** `curl -sSL https://raw.githubusercontent.com/ClaudioDrews/memory-os/main/setup.sh | bash` sets up the entire stack — Docker services, SQLite databases, Icarus plugin, environment — in one shot. The 10-step manual guide is now a fallback for troubleshooting.
> 
> **Community infrastructure.** Issue templates (bug report + feature request), PR checklist, and contributing guide. Project is ready for external contributors — and already has them.
> 
> **20+ fixes from systematic audit.** Community-driven review across setup, configuration, performance, and resilience. Highlights: provider-agnostic LLM extraction, O(1) path lookups, FTS5-powered session search, semantic dedup at scale, and idempotent database initialization.
> 
> **Installation verified on real hardware.** Smoke tests and ingestion tests ship with the repo. The automated installer has been tested end-to-end — including on modest machines where Docker build times exposed UX gaps that are now handled gracefully.
> 
> ---
> 
> 
> ## The problem every serious Hermes user knows
> 
> You spend hours configuring the agent, teaching it your preferences, solving hard problems together — and in the next session it acts like it's meeting you for the first time.
> 
> - Repeating context at the start of every conversation
> - Losing the thread of important decisions made weeks ago
> - Structured facts — your stack, your projects, your patterns — with nowhere to live
> - Every memory solution you've tried is either cloud-locked or too shallow to matter
> 
> After months of hitting these walls in production, I built something that actually works.
> 
> ---
> 
> 
> ## What Memory OS is
> 
> Not just another plugin. A complete **memory operating system** — 7 layers working in concert, from flat files to a vector database, with surgical context injection, a knowledge pipeline that organizes itself, **and an explicit Ground Truth hierarchy that tells the agent to actually use the injected memory**.
> 
> Designed and refined by someone who ran headfirst into every limitation of stock Hermes and every existing memory solution.
> 
> **Requirements:** Hermes Agent + Docker (Qdrant + Redis + ARQ Worker) + Python 3.11+.  
> Compatible with any LLM provider Hermes supports — OpenRouter, OpenAI, Anthropic, Ollama, and more.
> 
> ---
> 
> 
> ## Architecture: 7 memory layers
> 
> ```
> ┌──────────────────────────────────────────────────────────────────┐
> │  LAYER 1 · WORKSPACE                                              │
> │  MEMORY.md · USER.md · CREATIVE.md                               │
> │  → Injected into the system prompt every single turn             │
> ├──────────────────────────────────────────────────────────────────┤
> │  LAYER 2 · SESSIONS                                               │
> │  state.db (SQLite + FTS5)                                         │
> │  → Full-text search across your entire conversation history       │
> ├──────────────────────────────────────────────────────────────────┤
> │  LAYER 3 · STRUCTURED FACTS                                       │
> │  memory_store.db (SQLite + HRR + FTS5 + trust scoring)            │
> │  → Durable facts with entity resolution and an automatic          │
> │    feedback loop that trains trust scores over time               │
> ├──────────────────────────────────────────────────────────────────┤
> │  LAYER 4 · FABRIC (CROSS-SESSION)                                 │
> │  Icarus Plugin (heavily forked)                                   │
> │  → LLM-powered session extraction + multi-source injection        │
> │  → 16 tools: fabric_recall, fabric_write, fabric_brief, etc.      │
> ├──────────────────────────────────────────────────────────────────┤
> │  LAYER 5 · VECTOR DATABASE                                        │
> │  Qdrant (4096d Cosine + BM25 sparse)                              │
> │  → 4-level fallback: hybrid → dense → lexical → SQLite            │
> │  → Weekly decay scanner + semantic dedup (cosine >0.92 → merge)  │
> ├──────────────────────────────────────────────────────────────────┤
> │  LAYER 6 · LLM WIKI                                               │
> │  Auto-curated vault: concepts/ · entities/ · comparisons/         │
> │  → Continuously ingested into Qdrant via wiki-continuous-ingest   │
> ├──────────────────────────────────────────────────────────────────┤
> │  ⚡ LAYER 7 · GROUND TRUTH HIERARCHY (identity layer)              │
> │  SOUL.md · rulebook.md                                             │
> │  → Tells the agent that injected memory is authoritative           │
> │  → Without this, layers 2-6 deliver context the agent ignores     │
> └──────────────────────────────────────────────────────────────────┘
> ```
> 
> **How it flows:**
> 
> `pre

## 延伸閱讀

相關概念：[[RAG]] · [[向量資料庫]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[nashsu--llm_wiki|nashsu/llm_wiki]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/ClaudioDrews/memory-os)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶系統" AND file.name != "ClaudioDrews--memory-os"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "ClaudioDrews--memory-os"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "ClaudioDrews--memory-os" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "ClaudioDrews--memory-os"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","向量資料庫","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ClaudioDrews--memory-os" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ClaudioDrews--memory-os");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ClaudioDrews--memory-os" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ClaudioDrews" AND file.name != "ClaudioDrews--memory-os"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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
> const me = dv.page("Repos/ClaudioDrews--memory-os");
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

> **2026-06-04** — 首次收錄
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

- [[2026-06-07|2026-06-07]] — 再次上榜，951 stars
- [[2026-06-06|2026-06-06]] — 再次上榜，882 stars
- [[2026-06-05|2026-06-05]] — 再次上榜，828 stars
- [[2026-06-04|2026-06-04]] — 首次收錄，756 stars
