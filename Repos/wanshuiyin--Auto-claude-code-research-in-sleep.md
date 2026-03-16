---
repo: wanshuiyin/Auto-claude-code-research-in-sleep
url: https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep
owner: wanshuiyin
owner_type: User
language: Python
license: MIT
description: "ARIS ⚔️ (Auto-Research-In-Sleep) — Claude Code skills for autonomous ML research: cross-model review loops, idea discovery, and experiment automation via Codex MCP"
homepage: ""
stars: 1296
stars_per_day: 259
forks: 120
open_issues: 6
created: 2026-03-10
pushed_at: 2026-03-16
first_seen: 2026-03-16
week: "2026-W12"
month: "2026-03"
category: "AI/ML"
subcategory: "研究自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-16
use_case: "讓 Claude Code 在你睡覺時自動進行研究，早上醒來就能看到評分、識別的弱點、運行的實驗和重寫的論文。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-19"
contributor_count: 5
engagement: "low"
issue_close_rate: 45
repo_size_kb: 5809
readme_length: 10000
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-16"
star_history: "2026-03-16:1296"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/ai_research"
  - "topic/ai_tools"
  - "topic/aris"
  - "topic/autonomous_agent"
  - "topic/claude"
aliases:
  - "Auto-claude-code-research-in-sleep"
  - "wanshuiyin/Auto-claude-code-research-in-sleep"
  - "讓 Claude Code 在你睡覺時自動進行研究，早上醒來就能看到評分、識別的弱點、運行的實驗和重寫的論文。"
---

# Auto-claude-code-research-in-sleep

**1.3k** stars · **259** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ai-research` `ai-tools` `aris` `autonomous-agent` `claude` `claude-code` `claude-code-skills` `codex` `deep-learning` `gpt` `idea-generation` `llm` `machine-learning` `mcp` `mcp-server` `ml-research` `openai` `paper-review` `paper-writing` `research-automation`

> [!summary] 一句話摘要
> 讓 Claude Code 在你睡覺時自動進行研究，早上醒來就能看到評分、識別的弱點、運行的實驗和重寫的論文。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (259 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在機器學習研究中提高效率並自動化流程的學術團隊和獨立研究者。
> **一句話重點** ARIS 的核心在於利用交叉模型評審來提升研究質量，這在自動化研究工具中是前所未有的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "研究自動化" && p.file.name !== "wanshuiyin--Auto-claude-code-research-in-sleep" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 研究自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習、10 小時整合，能夠顯著提高研究效率，值得投入。

> [!abstract] 核心創新
> ARIS 提供了跨模型的自動化研究流程，通過 Claude Code 和 Codex 的協作，顯著提升了研究效率和質量。

## 專案簡介

ARIS（Auto-Research-In-Sleep）是一個利用 Claude Code 和 Codex MCP 進行自動化機器學習研究的工具。用戶可以透過簡單的指令，讓 Claude Code 自動進行文獻調查、實驗運行和論文撰寫，並在過程中進行交叉模型的評審。這種設計的核心在於避免單一模型自我評審的盲點，透過兩個模型的協作來提高研究質量。使用者只需安裝必要的技能，並配置 Claude Code 和 Codex，便可開始自動化流程。關鍵指令如 `claude mcp add codex -s user -- codex mcp-server` 和 `cp -r skills/* ~/.claude/skills/` 是設置的重點。

這個工具的賣點在於其高效的自動化能力，能在一夜之間將研究從邊緣拒絕提升到可提交的狀態，並且支持多種模型的靈活組合，無需依賴 OpenAI API。技術上，ARIS 結合了快速執行的 Claude Code 和嚴謹評審的 Codex，形成了速度與嚴謹的互補，從而產生更好的研究結果。與傳統的單一模型方法相比，這種交叉評審的方式能更有效地識別研究中的弱點，並促進創新思維的產生。實際使用中，使用者可透過多達 20 種可組合的技能來滿足不同的研究需求，並可選擇人機協作的模式進行關鍵決策的確認。這使得 ARIS 特別適合需要高效研究流程的學術團隊和個人研究者。

**技術棧**：`Python` · `TeX`

## 重點功能

- 20 種可組合技能 — 允許用戶根據需求混合和匹配技能，形成完整的研究流程。
- 自動文獻調查 — 支持多來源文獻搜索，並進行新穎性驗證。
- 自動評審循環 — 透過多輪自動評審，顯著提升論文質量。
- 論文撰寫 — 從敘述到大綱、圖表、LaTeX 和 PDF 的全自動化流程。
- 跨模型協作 — Claude Code 和 Codex 的協同工作，利用速度與嚴謹的優勢。

## 快速開始

1. 克隆專案並安裝技能
```bash
git clone https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep.git && cp -r Auto-claude-code-research-in-sleep/skills/* ~/.claude/skills/
```
2. 安裝 Codex CLI 並設置為 MCP 伺服器
```bash
npm install -g @openai/codex && claude mcp add codex -s user -- codex mcp-server
```
3. 設置 LaTeX 環境（可選）
```bash
brew install --cask mactex && brew install poppler
```

## 程式碼範例

```python
# 安裝技能
cp -r skills/* ~/.claude/skills/
# 驗證技能是否正常工作
claude
# 預期輸出
[系統補充] 所有技能已正確安裝。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1296 stars（259/天），forks 120（9.3%），這顯示出強烈的社群興趣。作者 wanshuiyin 及其團隊在 AI 研究和自動化領域有豐富經驗，這個專案解決了傳統研究流程中效率低下和盲點問題。特別是交叉模型評審的概念，讓研究者能夠更全面地評估自己的工作，這在過去是難以實現的。社群中對於自動化研究的需求日益增加，ARIS 正好滿足了這一需求，並且在相關討論中獲得了關注。

## 適合誰使用

**目標受眾**：需要在機器學習研究中提高效率並自動化流程的學術團隊和獨立研究者。

> [!example] 使用場景
> - 研究人員用它來自動生成研究論文，因為它能在一夜之間將初稿提升到可提交的狀態，節省了大量的時間和精力。
> - 學術團隊用它來進行文獻調查和實驗設計，因為其交叉模型評審能有效識別研究中的弱點，促進更高質量的研究成果。
> - 獨立開發者用它來探索新想法並進行實驗，因為它能快速生成和評估多個研究方向，幫助他們找到最具潛力的研究路徑。

## 架構分析

ARIS 的架構基於 Claude Code 和 Codex MCP 的協作，設計上旨在實現高效的自動化研究。Claude Code 負責快速執行研究任務，而 Codex 則提供嚴謹的評審。這種設計的好處在於能夠避免單一模型的盲點，通過交叉評審來提高研究質量。

資料流中，Claude Code 會執行實驗並生成初步結果，然後由 Codex 進行評審，提出改進建議。這樣的架構能夠在一夜之間完成多輪評審和實驗，顯著提升研究效率。選擇兩個模型而非更多是因為增加模型數量會帶來協調成本和效益遞減的問題，這樣的設計在實際使用中表現出色。

## 技術深入分析

ARIS 的核心技術機制是利用 Claude Code 和 Codex 的協作來實現自動化研究。Claude Code 負責快速執行研究任務，而 Codex 則提供嚴謹的評審，這種設計使得研究者能夠在一夜之間完成多輪評審和實驗。效能上，這種架構能夠處理多達 20 次的 GPU 實驗，並在每輪中進行評分和改進。選擇 Python 作為開發語言，因為它在機器學習和自動化領域有廣泛的應用，並且擁有豐富的庫支持。

這種選擇使得 ARIS 能夠快速集成各種外部工具和模型。技術風險方面，依賴於 Claude Code 和 Codex 的性能，若這些模型的質量下降，將直接影響到整體研究的效果。整合到現有的 CI/CD pipeline 中相對容易，因為其設計考慮到了與其他工具的兼容性，使用者只需進行簡單的配置即可。整體而言，ARIS 提供了一個創新的自動化研究解決方案，能夠顯著提升研究效率和質量。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用指南，並且有中文版可供參考。安裝過程中需要配置多個工具，對於新手來說可能會遇到一些挑戰，但整體流程相對順暢。文件中有清晰的範例和說明，能幫助使用者快速上手。

## 優缺點分析

> [!success] 優點
> - 高效的自動化研究流程，能在一夜之間完成多輪評審。
> - 支持多種模型的靈活組合，無需依賴 OpenAI API。
> - 能夠識別研究中的盲點，提升研究質量。

> [!danger] 缺點
> - 對於非 Claude 模型的支持可能需要額外調整。
> - 安裝和配置過程相對複雜，對新手不太友好。
> - 自動化流程的效果依賴於所使用模型的質量。

> [!warning] 注意事項
> - 僅支援 Claude Code 和 Codex，其他模型可能需要額外調整。
> - 對於 LaTeX 環境的需求，未安裝者無法使用論文撰寫功能。
> - 自動評審循環的效果依賴於模型的質量，較差的模型可能無法達到預期效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 這個工具專注於自動化研究過程，但不支持交叉模型評審，可能導致盲點。 |
| [openai/codex](https://github.com/openai/codex) | Codex 本身是個強大的模型，但缺乏專門針對研究自動化的工作流程設計。 |
| [bigscience/bloom](https://github.com/bigscience/bloom) | Bloom 是一個大型開源模型，但不具備 ARIS 的自動化研究功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 專注於自動化研究過程，但不支持交叉模型評審，可能導致盲點。 | 如果需要一個簡單的自動化研究工具，且不需要複雜的模型協作。 | medium，因為需要重新設計研究流程以適應單一模型的限制。 |
| [openai/codex](https://github.com/openai/codex) | Codex 是一個強大的模型，但缺乏專門針對研究自動化的工作流程設計。 | 如果已經在使用 OpenAI 的生態系統，並且需要一個強大的編程助手。 | low，因為 Codex 可以直接用於多種編程任務。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Auto-claude-code-research-in-sleep** | **autoresearch** | **codex** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化研究過程，但不支持交叉模型評審，可能導致盲點。 | Codex 是一個強大的模型，但缺乏專門針對研究自動化的工作流程設計。 |
> | 遷移成本 | - | medium，因為需要重新設計研究流程以適應單一模型的限制。 | low，因為 Codex 可以直接用於多種編程任務。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的自動化研究工具，且不需要複雜的模型協作。 | 如果已經在使用 OpenAI 的生態系統，並且需要一個強大的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在小型研究項目中試用，但不建議用於關鍵生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用非 Claude 模型時，可能需要調整技能以適應不同的 API 調用模式。
  - 解法：在開始使用前，讓模型先讀取整個專案以確保技能正確解析。
- [MEDIUM] LaTeX 環境未正確配置時，無法使用論文撰寫功能。
  - 解法：確保安裝必要的 LaTeX 工具和依賴。
- [MEDIUM] 自動評審循環的效果依賴於模型的質量，較差的模型可能無法達到預期效果。
  - 解法：選擇高質量的模型並進行必要的調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以上的學術團隊進行機器學習研究 | 非常適合 | 能夠自動化多輪評審和實驗，顯著提高研究效率。 |
| 獨立研究者進行文獻調查和實驗設計 | 適合 | 提供了靈活的技能組合，能夠滿足個別需求。 |
| 小型專案或個人側項目 | 普通 | 雖然可以使用，但可能過於複雜，且不一定能充分發揮其優勢。 |
| 對自動化研究流程有高需求的企業團隊 | 不適合 | 目前仍在 beta 階段，穩定性和生產準備度不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習、10 小時整合，能夠顯著提高研究效率，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。使用時需注意依賴的模型和 API 的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ARIS 最常與 Claude Code 和 Codex 這些工具搭配使用，處於研究開發的核心環節。用戶可以在現有的 CI/CD pipeline 中輕鬆整合 ARIS，通過簡單的配置來啟用自動化流程。具體來說，在一個使用 GitHub Actions 的專案中，用戶可以設置一個 workflow 來自動運行 ARIS 的評審循環，並在每次提交後自動生成報告。整合過程中，最常見的問題是模型的配置不當，這可能導致技能無法正確運行，因此建議用戶在開始使用前仔細檢查設定。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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
| Forks | 120 |
| Open Issues | 6 |
| Issue 解決率 | 45% (5 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-10 |
| Repo 大小 | 5.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wanshuiyin/Auto-claude-code-research-in-sleep) |
| Topics | `ai-research` `ai-tools` `aris` `autonomous-agent` `claude` `claude-code` `claude-code-skills` `codex` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 79
>     "TeX" : 21
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wanshuiyin](https://github.com/wanshuiyin) | 8 |
> | [@Joseph-li343](https://github.com/Joseph-li343) | 4 |
> | [@maoli17](https://github.com/maoli17) | 3 |
> | [@justinfjx](https://github.com/justinfjx) | 1 |
> | [@Allenjin123](https://github.com/Allenjin123) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新並回應問題。
**連結**：[文件](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-15 ~ 2026-03-16）
> **活躍天數** 2 天 · **最新 commit** docs: complete Customization section with pass-through chain and missing skills

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/12) | claude code接入飞书 双向交互模式能收到消息但没有回复 | 0 | 2 |
> | [#11](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/11) | 想确认一下：当前自动化流程是否只能在单次 Claude Code 会话中持续运行？ | 0 | 3 |
> | [#8](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/issues/8) | Your project was featured on AI Digital Crew 🎉 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Auto-claude-code-research-in-sleep (ARIS ⚔️)
> 
> [中文版 README](README_CN.md) | English
> 
> > 🌙 **Let Claude Code do research while you sleep.** Wake up to find your paper scored, weaknesses identified, experiments run, and narrative rewritten — autonomously.
> 
> [](https://mp.weixin.qq.com/s/tDniVryVGjDkkkWl-5sTkQ) · [](https://github.com/VoltAgent/awesome-agent-skills) · [-orange?style=flat)](https://aidigitalcrew.com) · [💬 Join Community](#-community) · [](#-citation)
> 
> Custom [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skills for autonomous ML research workflows. These skills orchestrate **cross-model collaboration** — Claude Code drives the research while an external LLM (via [Codex MCP](https://github.com/openai/codex)) acts as a critical reviewer. 🔀 **Also supports [alternative model combinations](#-alternative-model-combinations) (GLM, MiniMax, Kimi, LongCat, DeepSeek, etc.) — no Claude or OpenAI API required.**
> 
> > 💭 **Why not self-play with a single model?** Using Claude Code subagents or agent teams for both execution and review is technically possible, but tends to fall into **local minima** — the same model reviewing its own patterns creates blind spots.
> >
> > *Think of it like adversarial vs. stochastic bandits: a single model self-reviewing is the stochastic case (predictable reward noise), while cross-model review is adversarial (the reviewer actively probes weaknesses the executor didn't anticipate) — and adversarial bandits are fundamentally harder to game.*
> >
> > 💭 **Why two models, not more?** Two is the minimum needed to break self-play blind spots, and 2-player games converge to Nash equilibrium far more efficiently than n-player ones. Adding more reviewers increases API cost and coordination overhead with diminishing returns — the biggest gain is going from 1→2, not 2→4.
> >
> > Claude Code's strength is fast, fluid execution; Codex (GPT-5.4 xhigh) is slower but more deliberate and rigorous in critique. These complementary styles — **speed × rigor** — produce better outcomes than either model talking to itself.
> 
> 
> ## 🚀 Quick Start
> 
> ```bash
> 
> # 1. Install skills
> git clone https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep.git
> cp -r Auto-claude-code-research-in-sleep/skills/* ~/.claude/skills/
> 
> 
> ## ⚙️ Setup
> 
> 
> ### Prerequisites
> 
> 1. [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed
> 2. (For review skills) [Codex CLI](https://github.com/openai/codex) installed and configured as MCP server:
>    ```bash
>    npm install -g @openai/codex
>    claude mcp add codex -s user -- codex mcp-server
>    ```
> 3. (For Workflow 3: paper writing) **LaTeX** environment with `latexmk` and `pdfinfo`:
>    ```bash
>    # macOS
>    brew install --cask mactex    # or: brew install basictex
>    brew install poppler          # provides pdfinfo
> 
>    # Ubuntu/Debian
>    sudo apt install texlive-full latexmk poppler-utils
> 
>    # Verify
>    latexmk --version && pdfinfo -v
>    ```
>    > If you only need Workflow 1 & 2 (idea discovery + auto review), LaTeX is not required.
> 
> 
> ### Install Skills
> 
> ```bash
> git clone https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep.git
> cd Auto-claude-code-research-in-sleep
> 
> 
> # Install all skills globally
> cp -r skills/* ~/.claude/skills/
> 
> 
> # Or install specific skills
> cp -r skills/auto-review-loop ~/.claude/skills/
> cp -r skills/research-lit ~/.claude/skills/
> ```
> 
> 
> # Install
> uv tool install zotero-mcp-server   # or: pip install zotero-mcp-server
> 
> 
> ### After Setup: Install Skills & Verify
> 
> ```bash
> git clone https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep.git
> cd Auto-claude-code-research-in-sleep
> cp -r skills/* ~/.claude/skills/
> claude
> ```
> 
> > **⚠️ For non-Claude executors (GLM, Kimi, etc.):** Let the model read through the project once to ensure skills are correctly parsed. This is especially important if you've [rewritten skills](#-alternative-model-combinations) to use a different reviewer MCP (e.g., `mcp__llm-chat__chat` instead of `mcp__codex__codex`) — the new executor needs to understand the changed tool call patterns:
> >
> > ```
> > Read through this project and verify all skills are working:
> > /idea-creator, /research-review, /auto-review-loop, /novelty-check,
> > /idea-discovery, /research-pipeline, /research-lit, /run-experiment,
> > /analyze-results, /monitor-experiment, /pixel-art
> > ```
> 
> > ⚠️ **Note:** Alternative models may behave differently from Claude and GPT-5.4. You may need to tune prompt templates for best results. The core cross-model architecture remains the same.
> 
> 
> ### Usage
> 
> ```
> 
> ## ✨ Features
> 
> - 📊 **20 composable skills** — mix and match, or chain into full pipelines (`/idea-discovery`, `/auto-review-loop`, `/paper-writing`, `/research-pipeline`)
> - 🔍 **Literature & novelty** — multi-source paper search (**[Zotero](#-zotero-integration-optional)** + **[Obsidian](#-obsidian-integration-optional)** + **local PDFs** + arXiv/Scholar) + cross-model novelty verification
> - 💡 **Idea discovery** — literature survey → brainstorm 8-12 ideas → novelty check → GPU pilot experiments → ranked report
> - 🔄 **Auto review loop** — 4-round autonomous review, 5/10 → 7.5/10 overnight with 20+ GPU experiments
> - 📝 **Paper writing** — narrative → outline → figures → LaTeX → PDF → auto-review (4/10 → 8.5/10), one command
> - 🤖 **Cross-model collaboration** — Claude Code executes, GPT-5.4 xhigh reviews. Adversarial, not self-play
> - 📝 **Peer review** — review others' papers as a conference reviewer, with structured scoring and meta-review
> - 🖥️ **GPU deployment** — auto rsync, screen sessions, multi-GPU parallel experiments, live monitoring
> - 🔀 **Flexible models** — default Claude × GPT-5.4, also supports [GLM, MiniMax, Kimi, LongCat, DeepSeek, etc.](#-alternative-model-combinations) — no Claude or OpenAI API required
> - 🛑 **Human-in-the-loop** — configurable checkpoints at key decisions. `AUTO_PROCEED=true` for full autopilot, `false` to approve each step
> - 📱 **[Feishu/Lark notifications](#-feishulark-integration-optional)** — three modes: **off (default, strongly recommended for most users)**, push-only (webhook, mobile alerts), interactive (approve/reject from Feishu). Zero impact when unconfigured
> 
>   
>   Preview: Push cards (group) &amp; Interactive chat (private)
> 
>   **Push Only** — group chat cards (experiment done, checkpoint, error, pipeline complete):
> 
>   
> 
>   **Interactive** — private chat with Claude Code (approve/reject, custom instructions):
> 
>   
> 
>   
> 
> - 🧩 **Extensible** — domain-specific skills welcome! Add a `SKILL.md` and open a PR. See [community skills](#-all-skills) like [`dse-loop`](skills/dse-loop/SKILL.md) (architecture/EDA)
> 
> ---
> 
> 
> ### 🌙 Auto-Allow for Overnight Runs (Optional)
> 
> To run the auto-review loop without clicking permission prompts, add to `.claude/settings.local.json`:
> 
> ```json
> {
>   "permissions": {
>     "allow": [
>       "mcp__codex__codex",
>       "mcp__codex__codex-reply",
>       "Write",
>       "Edit",
>       "Skill(auto-review-loop)"
>     ]
>   }
> }
> ```
> 
> 🖥️ GPU Server Setup (For Auto-Experiments)
> 
> When GPT-5.4 says "run an ablation study" or "add a baseline comparison", Claude Code automatically writes the experiment script and deploys it to your GPU server. For this to work, Claude Code needs to know your server environment.
> 
> Add your server info to your project's `CLAUDE.md`:
> 
> ```markdown
> 
> # Add to Claude Code (Local API — requires Zotero desktop running)
> claude mcp add zotero -s user -- zotero-mcp -e ZOTERO_LOCAL=true
> 
> 
> # Or use Web API (works without Zotero running)
> claude mcp add zotero -s user -- zotero-mcp \
>   -e ZOTERO_API_KEY=your_key -e ZOTERO_USER_ID=your_id
> ```
> 
> > Get your API key at https://www.zotero.org/settings/keys
> 
> **What it enables in `/research-lit`:**
> - 🔍 Search your Zotero library by topic (including semantic/vector search)
> - 📂 Browse collections and tags
> - 📝 Read your PDF annotations and highlights (what you personally found important)
> - 📄 Export BibTeX for direct use in paper writing
> 
> **Not using Zotero?** No problem — `/research-lit` autom

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[自然語言處理]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--MetaClaw|aiming-lab/MetaClaw]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[tanweai--pua|tanweai/pua]] · [[xstongxue--best-skills|xstongxue/best-skills]]

[GitHub](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)

## 相關收錄

> [!note]- 直接競品（同子分類：研究自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "研究自動化" AND file.name != "wanshuiyin--Auto-claude-code-research-in-sleep"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "wanshuiyin--Auto-claude-code-research-in-sleep"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "wanshuiyin--Auto-claude-code-research-in-sleep" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "wanshuiyin--Auto-claude-code-research-in-sleep"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","機器學習","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wanshuiyin--Auto-claude-code-research-in-sleep" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wanshuiyin--Auto-claude-code-research-in-sleep" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wanshuiyin" AND file.name != "wanshuiyin--Auto-claude-code-research-in-sleep"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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
> const me = dv.page("Repos/wanshuiyin--Auto-claude-code-research-in-sleep");
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

> **2026-03-16** — 首次收錄
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

- [[2026-03-16|2026-03-16]] — 首次收錄，1.3k stars
