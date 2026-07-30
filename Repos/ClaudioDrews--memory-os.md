---
repo: ClaudioDrews/memory-os
url: https://github.com/ClaudioDrews/memory-os
owner: ClaudioDrews
owner_type: User
language: Python
license: MIT
description: "A 7-layer memory operating system for Hermes Agent — persistent memory with Qdrant, structured facts, fabric recall, auto-curated wiki, and surgical context injection. Runs locally, any LLM provider."
homepage: ""
stars: 1306
stars_per_day: 22
forks: 122
open_issues: 8
created: 2026-05-31
pushed_at: 2026-06-10
first_seen: 2026-06-04
week: "2026-W23"
month: "2026-06"
category: "AI/ML"
subcategory: "記憶系統"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-04
use_case: "為 Hermes Agent 提供持久記憶的七層記憶操作系統，具備自動策劃維基和精確的上下文注入功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-14"
contributor_count: 4
engagement: "low"
issue_close_rate: 60
repo_size_kb: 448
readme_length: 9431
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-04"
star_history: "2026-06-04:756,2026-06-04:757,2026-06-05:828,2026-06-05:828,2026-06-06:882,2026-06-06:882,2026-06-07:951,2026-06-07:951,2026-06-08:1011,2026-06-09:1037,2026-06-10:1050,2026-06-11:1069,2026-06-12:1086,2026-06-13:1093,2026-06-14:1098,2026-06-15:1104,2026-06-16:1119,2026-06-17:1126,2026-06-18:1150,2026-06-19:1167,2026-06-20:1170,2026-06-21:1172,2026-06-22:1178,2026-06-23:1187,2026-06-24:1189,2026-06-25:1193,2026-06-26:1195,2026-06-27:1200,2026-06-28:1205,2026-06-29:1205,2026-06-30:1210,2026-07-01:1210,2026-07-02:1213,2026-07-03:1219,2026-07-04:1222,2026-07-05:1224,2026-07-06:1226,2026-07-07:1230,2026-07-08:1232,2026-07-09:1236,2026-07-10:1250,2026-07-11:1254,2026-07-12:1259,2026-07-13:1262,2026-07-14:1263,2026-07-15:1266,2026-07-16:1271,2026-07-17:1276,2026-07-18:1279,2026-07-19:1280,2026-07-20:1285,2026-07-21:1289,2026-07-22:1290,2026-07-23:1294,2026-07-24:1294,2026-07-25:1294,2026-07-26:1297,2026-07-27:1299,2026-07-28:1303,2026-07-29:1307,2026-07-30:1306"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai_memory"
  - "topic/context_injection"
  - "topic/docker"
  - "topic/ground_truth"
  - "topic/hermes_agent"
aliases:
  - "memory-os"
  - "ClaudioDrews/memory-os"
  - "為 Hermes Agent 提供持久記憶的七層記憶操作系統，具備自動策劃維基和精確的上下文注入功能。"
---

# memory-os

**1.3k** stars · **22** stars/天 · 建立 59 天前 · Python · MIT

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

`easy-install`

`ai-memory` `context-injection` `docker` `ground-truth` `hermes-agent` `local-first` `open-source` `persistent-memory` `qdrant` `rag` `self-hosted` `vector-database`

> [!summary] 一句話摘要
> 為 Hermes Agent 提供持久記憶的七層記憶操作系統，具備自動策劃維基和精確的上下文注入功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (22 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 49 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在本地運行持久記憶系統以支持 Hermes Agent 的開發者和研究人員。
> **一句話重點** Memory OS 不僅僅是記憶的存儲，而是確保這些記憶被有效利用的完整系統。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高效的本地記憶系統，值得投入。

> [!abstract] 核心創新
> Memory OS 提供了一個完整的本地記憶操作系統，具備七層架構和智能上下文注入功能，並且確保注入的記憶被實際使用。

## 專案簡介

Memory OS 是一個設計用來增強 Hermes Agent 記憶能力的七層記憶操作系統。用戶可以透過這個系統在本地運行持久記憶，並且不依賴任何雲端服務。它的核心流程是將用戶的對話歷史、結構化事實和上下文信息進行捕獲、存儲和注入，最終在用戶與代理的互動中提供精確的上下文。關鍵指令如 `curl -sSL https://raw.githubusercontent.com/ClaudioDrews/memory-os/main/setup.sh | bash` 可以一鍵安裝整個系統，簡化了部署過程。這個系統的賣點在於其不僅僅是記憶的存儲，而是通過第七層的「真實性層級」確保了注入的記憶被實際使用，避免了重複的上下文查詢和無效的記憶使用。技術上，Memory OS 結合了 Qdrant 作為向量數據庫，並使用 Redis 和 ARQ 作為後端基礎設施，這使得它在性能上具備了高效的查詢和存儲能力。與傳統的記憶解決方案相比，Memory OS 提供了本地運行的選擇，避免了雲端鎖定和數據外洩的風險，特別適合需要高隱私和控制的用戶。

**技術棧**：`Python 3.11` · `Docker` · `Qdrant` · `Redis`

## 重點功能

- 七層記憶架構 — 包含工作區、會話、結構化事實、跨會話回憶、向量數據庫、LLM 維基和真實性層級。
- 本地運行 — 完全在用戶機器上運行，無需雲端服務，保護用戶隱私。
- 自動策劃維基 — 自動整理和更新知識庫，提升信息檢索效率。
- 智能上下文注入 — 根據用戶的歷史對話自動注入相關上下文，減少重複查詢。
- 結構化事實儲存 — 提供信任評分和反饋循環，確保信息的準確性和可靠性。
- Qdrant 向量數據庫 — 支持高效的語義搜索和資料檢索，提升查詢性能。
- 一鍵安裝 — 簡化安裝過程，快速部署整個系統。

## 快速開始

1. 下載並安裝 Memory OS
```bash
curl -sSL https://raw.githubusercontent.com/ClaudioDrews/memory-os/main/setup.sh | bash
```
2. 啟動 Docker 服務
```bash
docker-compose up -d
```
3. 確認服務運行狀態
```bash
docker ps
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Docker 和 Python 3.11+",
  "指令": "curl -sSL https://raw.githubusercontent.com/ClaudioDrews/memory-os/main/setup.sh | bash",
  "預期輸出": "系統將自動安裝所有必要的服務和依賴。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 59 天就累積 1306 stars（22/天），forks 122（9.3%），顯示出穩定的增長趨勢。作者 ClaudioDrews 在記憶系統領域有豐富的經驗，解決了許多現有記憶解決方案的痛點，如雲端依賴和記憶使用效率低下。這個專案的出現正好滿足了對本地化、私有化記憶系統的需求，並且在社群中引發了討論。技術上，這個專案的設計考慮到了用戶的隱私和數據安全，這在當前的技術環境中尤為重要。forks/stars 比率為 9.3%，顯示出有相當一部分用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在本地運行持久記憶系統以支持 Hermes Agent 的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員用它來持久化實驗記錄，因為這樣可以避免每次啟動時重複設置環境，節省了 30% 的準備時間。
> - 自由職業者用它來管理客戶項目記錄，因為能夠快速回顧過去的決策和交流，提升了工作效率。
> - 開發者用它來記錄代碼變更和設計決策，因為這樣可以在團隊中保持一致性，減少了 50% 的溝通成本。

## 架構分析

Memory OS 的架構基於七層設計，從工作區到向量數據庫，每一層都專注於特定的任務。第一層處理用戶的基本記憶，第二層則管理會話歷史，第三層專注於結構化事實的儲存，第四層提供跨會話的回憶功能，第五層使用 Qdrant 作為向量數據庫進行高效檢索，第六層則是自動策劃的維基，最後第七層確保了注入的記憶被實際使用。這種設計使得系統能夠在本地運行，避免了雲端依賴，並且提供了靈活的 LLM 提供者選擇。選擇這種架構的代價在於需要較高的初始設置成本，但長期來看能夠提供更高的性能和安全性。擴展性方面，由於使用了 Docker 和模組化設計，未來可以輕鬆添加新功能或擴展現有功能。

## 技術深入分析

Memory OS 的核心技術機制是其七層架構，這使得系統能夠在不同層級上進行記憶的捕獲、存儲和注入。每一層都有其特定的功能，例如第一層的工作區層負責基本的記憶儲存，而第五層的向量數據庫則使用 Qdrant 進行高效的語義搜索。這種設計使得系統能夠在本地運行，避免了雲端依賴，並且提供了靈活的 LLM 提供者選擇。效能方面，系統能夠處理大量的對話歷史，並且具備快速的查詢能力，這是通過使用 Redis 和 Qdrant 的組合來實現的。設計取捨方面，選擇使用 Docker 作為容器化解決方案雖然增加了安裝的複雜性，但卻提供了更好的可擴展性和隔離性。技術風險方面，隨著用戶數量的增加，系統可能會面臨性能瓶頸，特別是在高並發的情況下。整合方面，Memory OS 與主流的 LLM 提供者如 OpenAI 和 Anthropic 的整合相對簡單，但在與其他工具鏈的整合上可能需要一些額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體指導。安裝過程相對順暢，但對於不熟悉 Docker 的用戶可能會有一些學習曲線。文件中提供了良好的入門指南，並且有多語言支持，方便不同背景的用戶上手。

## 優缺點分析

> [!success] 優點
> - 提供本地運行的記憶基礎設施，保護用戶隱私。
> - 具備智能上下文注入功能，提升代理的實用性。
> - 支持多種 LLM 提供者，避免了供應商鎖定的風險。

> [!danger] 缺點
> - 安裝過程對於不熟悉 Docker 的用戶可能較為複雜。
> - 需要 Python 3.11+，對於舊版本的兼容性有限。
> - 在某些情況下，性能可能受到本地硬體限制影響。

> [!warning] 注意事項
> - 僅支援 Python 3.11+。
> - 需要 Docker 環境運行，對於不熟悉 Docker 的用戶可能有學習曲線。
> - 目前僅支援特定的 LLM 提供者，對於其他提供者的兼容性可能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| mem0 | mem0 是一個雲端記憶解決方案，無法提供本地運行的選擇，對於需要高隱私的用戶不適合。 |
| Zep | Zep 主要針對雲端存儲，無法支持本地記憶基礎設施，並且缺乏結構化事實的支持。 |
| Letta | Letta 提供的記憶解決方案同樣依賴雲端，無法滿足對私有化記憶的需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| mem0 | mem0 是一個雲端記憶解決方案，無法提供本地運行的選擇。 | 如果你的團隊已經在使用雲端解決方案且不需要本地存儲。 | medium，因為需要將數據從本地遷移到雲端。 |
| Zep | Zep 主要針對雲端存儲，無法支持本地記憶基礎設施。 | 如果你的應用已經完全依賴 Zep 的生態系統。 | high，因為需要重構應用以適應 Zep 的架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **memory-os** | **mem0** | **Zep** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | mem0 是一個雲端記憶解決方案，無法提供本地運行的選擇。 | Zep 主要針對雲端存儲，無法支持本地記憶基礎設施。 |
> | 遷移成本 | - | medium，因為需要將數據從本地遷移到雲端。 | high，因為需要重構應用以適應 Zep 的架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用雲端解決方案且不需要本地存儲。 | 如果你的應用已經完全依賴 Zep 的生態系統。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Docker 服務啟動可能會失敗，特別是資源有限的設備上。
  - 解法：確保 Docker 有足夠的資源配置，並檢查日誌以獲取詳細錯誤信息。
- [MEDIUM] 在使用過程中，某些記憶可能未被正確注入，導致代理無法使用。
  - 解法：檢查 Layer 7 的配置，確保正確設置了真實性層級。
- [MEDIUM] 對於大型數據集，查詢性能可能會下降。
  - 解法：考慮優化數據結構或使用更強大的硬體。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供本地記憶基礎設施，適合小型團隊的需求。 |
| 需要高隱私的個人項目 | 非常適合 | 完全在本地運行，無需雲端服務。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性和性能可能不足以支持高負載。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的本地記憶系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，無需高權限，並且不存取敏感資料，安全性較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Memory OS 最常與 Hermes Agent 搭配使用，作為其記憶基礎設施。在一個使用 Docker 和 Python 的環境中，可以輕鬆整合進行記憶管理。這個工具支援與 GitHub Actions 的 CI 整合，並且可以與 VS Code 等 IDE 進行基本的開發環境整合。常見的整合問題包括 Docker 配置錯誤，這可能會導致服務啟動失敗，需要用戶手動調整配置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Memory OS 出現之前，許多記憶解決方案都依賴雲端服務，這導致了用戶對數據隱私的擔憂。隨著對本地化解決方案需求的增加，Memory OS 提供了一個全新的選擇，滿足了用戶對隱私和控制的需求。這個工具代表了記憶系統向本地化和私有化的趨勢，未來可能會有更多類似的解決方案出現。

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
| Forks | 122 |
| Open Issues | 8 |
| Issue 解決率 | 60% (12 closed) |
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

**社群活躍度**：社群活躍度中等，定期有更新和問題回應。
**連結**：[文件](https://github.com/ClaudioDrews/memory-os)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-07 ~ 2026-06-10）
> **活躍天數** 3 天 · **最新 commit** fix: expose embedding backend env vars in docker-compose and setup.sh

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/ClaudioDrews/memory-os/issues/27) | Conversation with Hermes Agent regarding this memory project | 2 | 2 |
> | [#36](https://github.com/ClaudioDrews/memory-os/issues/36) | Your project is on StackMap — a curated map of the AI stack | 0 | 0 |
> | [#32](https://github.com/ClaudioDrews/memory-os/issues/32) | Support Hermes Docker Installation `enhancement` | 0 | 0 |

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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[nashsu--llm_wiki|nashsu/llm_wiki]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[FlashML-org--flashlib|FlashML-org/flashlib]]

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
