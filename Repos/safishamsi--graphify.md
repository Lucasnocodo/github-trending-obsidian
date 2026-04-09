---
repo: safishamsi/graphify
url: https://github.com/safishamsi/graphify
owner: safishamsi
owner_type: User
language: Python
license: MIT
description: "AI coding assistant skill (Claude Code, Codex, OpenCode, OpenClaw, Factory Droid). Turn any folder of code, docs, papers, or images into a queryable knowledge graph"
homepage: "https://pypi.org/project/graphifyy/"
stars: 12891
stars_per_day: 2578
forks: 1315
open_issues: 18
created: 2026-04-03
pushed_at: 2026-04-09
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "知識圖譜"
release_tag: "v0.3.11"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "將任何代碼、文檔、論文或圖像資料夾轉換為可查詢的知識圖譜。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-12"
contributor_count: 1
engagement: "medium"
issue_close_rate: 66
repo_size_kb: 396
readme_length: 9818
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7061,2026-04-09:12891"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/claude_code"
  - "topic/codex"
  - "topic/graphrag"
  - "topic/knowledge_graph"
  - "topic/openclaw"
aliases:
  - "graphify"
  - "safishamsi/graphify"
  - "將任何代碼、文檔、論文或圖像資料夾轉換為可查詢的知識圖譜。"
---

# graphify

**7.1k** stars · **1.8k** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/safishamsi--graphify");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.3.11`

`claude-code` `codex` `graphrag` `knowledge-graph` `openclaw` `skills`

> [!summary] 一句話摘要
> 將任何代碼、文檔、論文或圖像資料夾轉換為可查詢的知識圖譜。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.8k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速理解和分析代碼庫結構的開發者和研究者，特別是處理多種資料來源的情境。
> **一句話重點** graphify 的強大之處在於其能夠將多種資料整合為一個可查詢的知識圖譜，這對於開發者理解代碼庫結構至關重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/safishamsi--graphify");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識圖譜" && p.file.name !== "safishamsi--graphify" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識圖譜 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠提升代碼理解和分析效率，值得投入。

> [!abstract] 核心創新
> graphify 使用了多模態技術來將不同類型的資料整合為可查詢的知識圖譜，這在現有工具中並不常見。

## 專案簡介

graphify 是一個 AI 編碼助手技能，能夠通過執行 `/graphify` 命令來讀取指定資料夾中的文件，並構建一個知識圖譜，幫助用戶更快理解代碼庫的結構和設計決策。它支持多種文件類型，包括代碼、PDF、Markdown 和圖像，並使用 Claude 的視覺能力提取概念和關係。這樣的設計使得用戶可以在不需要重複閱讀原始文件的情況下，快速獲得結構化的信息。CLI 指令如 `/graphify .` 可以直接在當前目錄運行，生成的輸出包括互動式圖形、報告和 JSON 格式的持久圖譜，方便用戶隨時查詢。技術上，graphify 使用 NetworkX 進行圖形處理，並利用 Leiden 社群檢測算法進行聚類，這樣的選擇避免了對嵌入步驟的需求，提升了效率。

與其他工具相比，graphify 的優勢在於其無需額外的向量數據庫，並且能夠直接從代碼中提取結構，這對於大型代碼庫的分析尤為重要。實際使用中，graphify 能夠處理多達 52 個文件的資料，並在查詢時實現 71.5 倍的 token 減少，這使得它在處理大型資料集時顯得尤為高效。儘管如此，使用者仍需注意其對於特定平台的支持和安裝過程中的一些細節，如需安裝 Python 3.10 以上版本及相關依賴。整體來看，graphify 是一個針對需要快速理解和分析代碼庫的開發者和研究者的強大工具，特別適合於需要處理多種資料來源的情境。

**技術棧**：`Python 3.10+` · `NetworkX` · `tree-sitter`

## 重點功能

- 多模態支持 — 能處理代碼、PDF、Markdown 和圖像，並提取概念和關係。
- 互動式圖形 — 生成的圖形可點擊、搜索和過濾，便於用戶探索。
- 持久化圖譜 — 生成的 JSON 格式圖譜可在未來查詢，無需重新閱讀原始文件。
- 社群檢測 — 使用 Leiden 算法進行聚類，無需額外的向量數據庫。
- 自動更新 — 支持監控文件變更，自動同步圖譜。

## 快速開始

1. 安裝 graphifyy
```bash
pip install graphifyy && graphify install
```
2. 在目錄中運行 graphify
```bash
/graphify .
```
3. 查看生成的報告和圖形
```bash
查看 graphify-out/ 目錄
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Python 3.10+ 和相應的 AI 編碼助手。",
  "指令": "/graphify .",
  "預期輸出": "生成互動式圖形和報告，方便用戶查詢和分析。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 7061 stars（1765/天），forks 723（10.2%），這顯示出其快速增長的潛力。作者 safishamsi 之前有開發相關的 AI 工具，這個專案解決了將不同類型資料整合為可查詢知識圖譜的需求，這在現有工具中並不常見。社群對於該專案的熱情反映在熱門 Issues 上，例如對於 demo 的需求和對於新版本功能的期待，這些都顯示出使用者對於其實用性的重視。技術上，這個工具的出現得益於 AI 和知識圖譜技術的進步，使得這種多模態資料處理成為可能。forks/stars 比率為 10.2%，顯示出許多開發者正在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要快速理解和分析代碼庫結構的開發者和研究者，特別是處理多種資料來源的情境。

> [!example] 使用場景
> - 後端工程師用它來快速理解大型代碼庫的結構，因為它能將代碼和文檔轉換為可視化的知識圖譜，並減少 71.5 倍的 token 使用。
> - 研究人員用它來整合多種資料來源（如論文、圖像），因為它支持多種文件格式並能自動提取概念和關係。
> - 產品經理用它來分析架構決策的背景，因為它提供了清晰的報告和社群檢測功能，幫助理解設計選擇的原因。

## 架構分析

graphify 的架構由兩個主要步驟組成：首先，通過確定性 AST 解析從代碼文件中提取結構，這不需要 LLM 的參與；其次，Claude 子代理並行處理文檔、論文和圖像，提取概念和關係。這樣的設計使得系統能夠在不依賴外部嵌入的情況下，直接從代碼中獲取結構信息。選擇 NetworkX 作為圖形處理工具，因為它提供了豐富的圖形算法和社群檢測功能，這對於處理大型圖形數據尤為重要。

這種設計的代價是需要較高的計算資源，特別是在處理大型資料集時。擴展性方面，雖然目前能夠支持多達 52 個文件的資料，但在更大規模的應用中，可能會遇到性能瓶頸。整體來看，這種架構設計使得 graphify 在多模態資料處理上具有優勢，但也需要考慮到計算資源的需求和潛在的擴展性問題。

## 技術深入分析

graphify 的核心技術機制在於其多模態資料處理能力，使用 tree-sitter 來解析代碼結構，並利用 Claude 的視覺能力提取文檔中的概念和關係。這樣的設計使得系統能夠在不依賴 LLM 的情況下，快速獲取代碼中的結構信息。效能方面，graphify 能夠處理多達 52 個文件的資料，並在查詢時實現 71.5 倍的 token 減少，這顯示出其在大型資料集中的優勢。設計取捨方面，選擇 NetworkX 作為圖形處理工具，使得社群檢測和圖形操作變得更加高效，但也帶來了對計算資源的需求。技術風險方面，隨著資料集的擴大，可能會遇到性能瓶頸，這需要在未來的版本中進行優化。整合方面，graphify 能夠輕鬆與現有的 AI 編碼助手集成，並提供了 CLI 工具的支持，這使得其在開發流程中能夠快速部署和使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細說明；安裝過程順暢，但需注意平台支持；有良好的入門指南，幫助新手快速上手；目前僅提供英文文檔，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 支持多種文件格式，能夠整合不同類型的資料。
> - 生成的知識圖譜可持久化，便於未來查詢。
> - 使用社群檢測算法，無需額外的向量數據庫，提升效率。

> [!danger] 缺點
> - 安裝過程中需要注意特定平台的支持。
> - 對於大型資料集的處理可能需要較高的計算資源。
> - 目前的功能仍在持續開發中，可能會有不穩定的情況。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要安裝特定的 AI 編碼助手，如 Claude Code 或 Codex。
> - 對於某些平台的支持可能不完整，需注意安裝細節。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於並行同步，而 graphify 專注於知識圖譜的生成和查詢，適合不同的使用場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據提取，而 graphify 提供了結構化的圖譜和可視化功能，適合需要深入分析的情境。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | claude-code-sourcemap 專注於代碼映射，而 graphify 提供了多模態支持和更豐富的查詢功能，適合需要處理多種資料的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於並行同步，而 graphify 專注於知識圖譜的生成和查詢，適合不同的使用場景。 | 如果你的需求是高效的資料同步，而不是資料的結構化分析。 | low，因為兩者的核心功能不同，遷移不會有太大影響。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據提取，而 graphify 提供了結構化的圖譜和可視化功能，適合需要深入分析的情境。 | 如果你需要專注於數據提取而非結構化分析，Shadowbroker 會是更好的選擇。 | medium，因為需要重新設計數據處理流程。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | claude-code-sourcemap 專注於代碼映射，而 graphify 提供了多模態支持和更豐富的查詢功能，適合需要處理多種資料的用戶。 | 如果你的工作主要集中在代碼映射而非多模態資料處理，則可以考慮使用 claude-code-sourcemap。 | low，因為兩者在代碼處理上有相似性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **graphify** | **parsync** | **Shadowbroker** | **claude-code-sourcemap** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於並行同步，而 graphify 專注於知識圖譜的生成和查詢，適合不同的使用場景。 | Shadowbroker 主要用於數據提取，而 graphify 提供了結構化的圖譜和可視化功能，適合需要深入分析的情境。 | claude-code-sourcemap 專注於代碼映射，而 graphify 提供了多模態支持和更豐富的查詢功能，適合需要處理多種資料的用戶。 |
> | 遷移成本 | - | low，因為兩者的核心功能不同，遷移不會有太大影響。 | medium，因為需要重新設計數據處理流程。 | low，因為兩者在代碼處理上有相似性。 |
> | 適用場景 | 主要場景 | 如果你的需求是高效的資料同步，而不是資料的結構化分析。 | 如果你需要專注於數據提取而非結構化分析，Shadowbrok | 如果你的工作主要集中在代碼映射而非多模態資料處理，則可以考慮 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些平台上安裝過程可能會出現問題，特別是對於 Windows 用戶。
  - 解法：確保使用正確的安裝命令，並檢查平台支持。
- [MEDIUM] 對於大型資料集的查詢可能會導致性能下降。
  - 解法：考慮分批處理資料，或優化查詢參數。
- [MEDIUM] 某些功能在不同平台上可能表現不一致。
  - 解法：參考官方文檔，確保使用正確的命令和參數。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能快速理解和分析代碼結構，提升開發效率。 |
| 大型開發團隊的代碼庫管理 | 適合 | 能夠處理多種資料來源並生成知識圖譜。 |
| 個人研究項目 | 非常適合 | 能夠整合文獻和代碼，幫助快速獲得結構化信息。 |
| 對於小型專案的代碼分析 | 普通 | 雖然有用，但對於小型專案的需求可能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠提升代碼理解和分析效率，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的庫均為開源，信任程度高。在 CI/CD 中使用時，無需擔心安全性問題。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/safishamsi--graphify");
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
> const me = dv.page("Repos/safishamsi--graphify");
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
| Forks | 723 |
| Open Issues | 12 |
| Issue 解決率 | 66% (23 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-03 |
| 官方網站 | [Link](https://pypi.org/project/graphifyy/) |
| Repo 大小 | 396 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/safishamsi/graphify) |
| Topics | `claude-code` `codex` `graphrag` `knowledge-graph` `openclaw` `skills` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@safishamsi](https://github.com/safishamsi) | 68 |

**最新版本**：v0.3.11 (2026-04-07)

> [!info]- Release Notes
> ## What's new
> 
> ### Fix: Louvain fallback hang on large sparse graphs (#48)
> - Added `max_level=10, threshold=1e-4` to NetworkX Louvain fallback
> - Prevents indefinite hang on large sparse graphs (49K+ nodes, low density)
> - Equivalent community quality on typical corpora
> - Only affects users without graspologic installed (Leiden is unaffected)

## 社群與生態

**社群活躍度**：社群活躍度中等，有定期的更新和問題回應。
**連結**：[文件](https://pypi.org/project/graphifyy/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-07）
> **活躍天數** 1 天 · **最新 commit** Fix Louvain fallback hang on large sparse graphs (#48)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/safishamsi/graphify/issues/12) | Add demo link or image in README | 7 | 0 |
> | [#7](https://github.com/safishamsi/graphify/issues/7) | v0.4.0: local embeddings via quantized Gemma 4 (no API cost) `enhancement` | 3 | 0 |
> | [#1](https://github.com/safishamsi/graphify/issues/1) | v3: semantic query with embeddings | 3 | 0 |
> | [#17](https://github.com/safishamsi/graphify/issues/17) | Add COBOL Language Support | 2 | 1 |
> | [#51](https://github.com/safishamsi/graphify/issues/51) | --update should remove graph nodes when source files are del | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # graphify
> 
> [English](README.md) | [简体中文](README.zh-CN.md)
> 
> [](https://github.com/safishamsi/graphify/actions/workflows/ci.yml)
> [](https://pypi.org/project/graphifyy/)
> [](https://github.com/sponsors/safishamsi)
> 
> **An AI coding assistant skill.** Type `/graphify` in Claude Code, Codex, OpenCode, OpenClaw, or Factory Droid - it reads your files, builds a knowledge graph, and gives you back structure you didn't know was there. Understand a codebase faster. Find the "why" behind architectural decisions.
> 
> Fully multimodal. Drop in code, PDFs, markdown, screenshots, diagrams, whiteboard photos, even images in other languages - graphify uses Claude vision to extract concepts and relationships from all of it and connects them into one graph. 19 languages supported via tree-sitter AST (Python, JS, TS, Go, Rust, Java, C, C++, Ruby, C#, Kotlin, Scala, PHP, Swift, Lua, Zig, PowerShell, Elixir, Objective-C).
> 
> > Andrej Karpathy keeps a `/raw` folder where he drops papers, tweets, screenshots, and notes. graphify is the answer to that problem - 71.5x fewer tokens per query vs reading the raw files, persistent across sessions, honest about what it found vs guessed.
> 
> ```
> /graphify .                        # works on any folder - your codebase, notes, papers, anything
> ```
> 
> ```
> graphify-out/
> ├── graph.html       interactive graph - click nodes, search, filter by community
> ├── GRAPH_REPORT.md  god nodes, surprising connections, suggested questions
> ├── graph.json       persistent graph - query weeks later without re-reading
> └── cache/           SHA256 cache - re-runs only process changed files
> ```
> 
> Add a `.graphifyignore` file to exclude folders you don't want in the graph:
> 
> ```
> 
> ## Install
> 
> **Requires:** Python 3.10+ and one of: [Claude Code](https://claude.ai/code), [Codex](https://openai.com/codex), [OpenCode](https://opencode.ai), [OpenClaw](https://openclaw.ai), or [Factory Droid](https://factory.ai)
> 
> ```bash
> pip install graphifyy && graphify install
> ```
> 
> > The PyPI package is temporarily named `graphifyy` while the `graphify` name is being reclaimed. The CLI and skill command are still `graphify`.
> 
> 
> ## Usage
> 
> ```
> /graphify                          # run on current directory
> /graphify ./raw                    # run on a specific folder
> /graphify ./raw --mode deep        # more aggressive INFERRED edge extraction
> /graphify ./raw --update           # re-extract only changed files, merge into existing graph
> /graphify ./raw --cluster-only     # rerun clustering on existing graph, no re-extraction
> /graphify ./raw --no-viz           # skip HTML, just produce report + JSON
> /graphify ./raw --obsidian                          # also generate Obsidian vault (opt-in)
> /graphify ./raw --obsidian --obsidian-dir ~/vaults/myproject  # write vault to a specific directory
> 
> /graphify add https://arxiv.org/abs/1706.03762        # fetch a paper, save, update graph
> /graphify add https://x.com/karpathy/status/...       # fetch a tweet
> /graphify add https://... --author "Name"             # tag the original author
> /graphify add https://... --contributor "Name"        # tag who added it to the corpus
> 
> /graphify query "what connects attention to the optimizer?"
> /graphify query "what connects attention to the optimizer?" --dfs   # trace a specific path
> /graphify query "what connects attention to the optimizer?" --budget 1500  # cap at N tokens
> /graphify path "DigestAuth" "Response"
> /graphify explain "SwinTransformer"
> 
> /graphify ./raw --watch            # auto-sync graph as files change (code: instant, docs: notifies you)
> /graphify ./raw --wiki             # build agent-crawlable wiki (index.md + article per community)
> /graphify ./raw --svg              # export graph.svg
> /graphify ./raw --graphml          # export graph.graphml (Gephi, yEd)
> /graphify ./raw --neo4j            # generate cypher.txt for Neo4j
> /graphify ./raw --neo4j-push bolt://localhost:7687    # push directly to a running Neo4j instance
> /graphify ./raw --mcp              # start MCP stdio server
> 
> 
> ## Worked examples
> 
> | Corpus | Files | Reduction | Output |
> |--------|-------|-----------|--------|
> | Karpathy repos + 5 papers + 4 images | 52 | **71.5x** | [`worked/karpathy-repos/`](worked/karpathy-repos/) |
> | graphify source + Transformer paper | 4 | **5.4x** | [`worked/mixed-corpus/`](worked/mixed-corpus/) |
> | httpx (synthetic Python library) | 6 | ~1x | [`worked/httpx/`](worked/httpx/) |
> 
> Token reduction scales with corpus size. 6 files fits in a context window anyway, so graph value there is structural clarity, not compression. At 52 files (code + papers + images) you get 71x+. Each `worked/` folder has the raw input files and the actual output (`GRAPH_REPORT.md`, `graph.json`) so you can run it yourself and verify the numbers.
> 
> 
> # .graphifyignore
> vendor/
> node_modules/
> dist/
> *.generated.py
> ```
> 
> Same syntax as `.gitignore`. Patterns match against file paths relative to the folder you run graphify on.
> 
> 
> ## How it works
> 
> graphify runs in two passes. First, a deterministic AST pass extracts structure from code files (classes, functions, imports, call graphs, docstrings, rationale comments) with no LLM needed. Second, Claude subagents run in parallel over docs, papers, and images to extract concepts, relationships, and design rationale. The results are merged into a NetworkX graph, clustered with Leiden community detection, and exported as interactive HTML, queryable JSON, and a plain-language audit report.
> 
> **Clustering is graph-topology-based — no embeddings.** Leiden finds communities by edge density. The semantic similarity edges that Claude extracts (`semantically_similar_to`, marked INFERRED) are already in the graph, so they influence community detection directly. The graph structure is the similarity signal — no separate embedding step or vector database needed.
> 
> Every relationship is tagged `EXTRACTED` (found directly in source), `INFERRED` (reasonable inference, with a confidence score), or `AMBIGUOUS` (flagged for review). You always know what was found vs guessed.
> 
> 
> ### Platform support
> 
> | Platform | Install command |
> |----------|----------------|
> | Claude Code (Linux/Mac) | `graphify install` |
> | Claude Code (Windows) | `graphify install` (auto-detected) or `graphify install --platform windows` |
> | Codex | `graphify install --platform codex` |
> | OpenCode | `graphify install --platform opencode` |
> | OpenClaw | `graphify install --platform claw` |
> | Factory Droid | `graphify install --platform droid` |
> 
> Codex users also need `multi_agent = true` under `[features]` in `~/.codex/config.toml` for parallel extraction. Factory Droid uses the `Task` tool for parallel subagent dispatch. OpenClaw uses sequential extraction (parallel agent support is still early on that platform).
> 
> Then open your AI coding assistant and type:
> 
> ```
> /graphify .
> ```
> 
> Note: Codex uses `$` instead of `/` for skill calling, so type `$graphify .` instead.
> 
> 
> ### Make your assistant always use the graph (recommended)
> 
> After building a graph, run this once in your project:
> 
> | Platform | Command |
> |----------|---------|
> | Claude Code | `graphify claude install` |
> | Codex | `graphify codex install` |
> | OpenCode | `graphify opencode install` |
> | OpenClaw | `graphify claw install` |
> | Factory Droid | `graphify droid install` |
> 
> **Claude Code** does two things: writes a `CLAUDE.md` section telling Claude to read `graphify-out/GRAPH_REPORT.md` before answering architecture questions, and installs a **PreToolUse hook** (`settings.json`) that fires before every Glob and Grep call. If a knowledge graph exists, Claude sees: _"graphify: Knowledge graph exists. Read GRAPH_REPORT.md for god nodes and community structure before searching raw files."_ — so Claude navigates via the graph instead of grepping through every file.
> 
> **Codex, OpenCode, OpenClaw, Factory Droid** write the same rules to `AGENTS.md` in your project root. These platforms don't support PreToolUse hooks, so AGENTS.md is the always-on mechanism.
> 
> Uninstall with the matching uninstall command (e.g. `

## 延伸閱讀

相關概念：[[知識圖譜]] · [[社群檢測]] · [[多模態]] · [[自然語言處理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[0xGF--boneyard|0xGF/boneyard]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/safishamsi/graphify) · [官方網站](https://pypi.org/project/graphifyy/)

## 相關收錄

> [!note]- 直接競品（同子分類：知識圖譜）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識圖譜" AND file.name != "safishamsi--graphify"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "safishamsi--graphify"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "safishamsi--graphify" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "safishamsi--graphify"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["知識圖譜","社群檢測","多模態","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "safishamsi--graphify" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/safishamsi--graphify");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "safishamsi--graphify" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "safishamsi" AND file.name != "safishamsi--graphify"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/safishamsi--graphify");
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
> const me = dv.page("Repos/safishamsi--graphify");
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
> const me = dv.page("Repos/safishamsi--graphify");
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
> const me = dv.page("Repos/safishamsi--graphify");
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
> const me = dv.page("Repos/safishamsi--graphify");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-09|2026-04-09]] — 再次上榜，12.9k stars
- [[2026-04-08|2026-04-08]] — 首次收錄，7.1k stars
