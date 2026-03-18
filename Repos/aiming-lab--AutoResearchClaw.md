---
repo: aiming-lab/AutoResearchClaw
url: https://github.com/aiming-lab/AutoResearchClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: N/A
description: "Fully autonomous research from idea to paper. Chat an Idea. Get a Paper. Fully Autonomous. 🦞"
homepage: ""
stars: 4186
stars_per_day: 2093
forks: 445
open_issues: 1
created: 2026-03-15
pushed_at: 2026-03-18
first_seen: 2026-03-17
week: "2026-W12"
month: "2026-03"
category: "AI/ML"
subcategory: "自動化研究"
release_tag: "v0.2.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-17
use_case: "從研究想法到論文的全自動化流程，讓你只需輸入想法即可獲得完整的學術論文。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-21"
contributor_count: 5
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 7252
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-17"
star_history: "2026-03-17:1449,2026-03-17:1460,2026-03-18:4186"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/autonomous_research"
  - "topic/citation_verification"
  - "topic/llm_agents"
  - "topic/multi_agent_debate"
  - "topic/openclaw"
aliases:
  - "AutoResearchClaw"
  - "aiming-lab/AutoResearchClaw"
  - "從研究想法到論文的全自動化流程，讓你只需輸入想法即可獲得完整的學術論文。"
---

# AutoResearchClaw

**1.5k** stars · **1.5k** stars/天 · 建立 1 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.2.0`

`autonomous-research` `citation-verification` `llm-agents` `multi-agent-debate` `openclaw` `paper-generation` `scientific-discovery`

> [!summary] 一句話摘要
> 從研究想法到論文的全自動化流程，讓你只需輸入想法即可獲得完整的學術論文。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速生成學術論文的研究者和學術團隊，尤其是那些希望減少手動操作的使用者。
> **一句話重點** AutoResearchClaw 的全自動化研究流程能夠顯著提高學術研究的效率，特別適合需要快速產出成果的情境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化研究" && p.file.name !== "aiming-lab--AutoResearchClaw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化研究 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的研究生成工具，值得投資。

> [!abstract] 核心創新
> 這個專案的核心創新在於其全自動化的研究生成流程，結合多代理系統和質量審核機制。

## 專案簡介

AutoResearchClaw 是一個全自動的研究管道，能夠將任何研究想法轉化為完整的學術論文。使用者只需輸入一個研究主題，系統會自動生成實驗代碼、收集文獻、進行數據分析，並撰寫符合會議標準的論文。其核心機制包括多個代理系統，如 CodeAgent 和 BenchmarkAgent，這些系統分別負責生成代碼和選擇基準數據。這樣的設計不僅提高了生成的研究質量，還能自動修復代碼中的錯誤，並進行多輪質量審核。技術上，該專案使用 Python 和 Docker，並依賴於多個庫如 pyyaml 和 rich，這使得它在執行時能夠自動檢測硬體環境並調整代碼生成策略。

與傳統的研究方法相比，這個工具能夠大幅度減少人力干預，並且在實驗失敗時具有自我修復的能力。使用者只需運行一個命令，即可獲得包括 LaTeX 格式的論文、實驗結果和參考文獻的完整輸出。相較於其他類似工具，AutoResearchClaw 的多代理系統和自我學習能力使其在處理複雜研究時更具優勢，特別是在需要多輪迭代和質量保證的情境下。實際使用中，這個工具能夠處理大量的文獻資料，並自動生成符合會議要求的論文，適合需要快速產出研究成果的學術團隊或研究者。

**技術棧**：`Python 3.11` · `Docker` · `pyyaml` · `rich`

## 重點功能

- 多來源文獻檢索 — 自動從 arXiv 和 Semantic Scholar 獲取真實文獻，並進行去重處理。
- 四層引用驗證 — 檢查 arXiv ID、CrossRef/DataCite DOI 和 LLM 相關性，並自動移除虛假引用。
- 硬體感知執行 — 自動檢測 GPU 和 CPU 環境，調整代碼生成和實驗規模。
- 沙箱實驗 — 代碼經 AST 驗證，並具備自我修復和迭代改進能力。
- 會議級寫作 — 支援 NeurIPS/ICML/ICLR 模板，並具備反抄襲和修訂長度限制的功能。

## 快速開始

1. 克隆並安裝
```bash
git clone https://github.com/aiming-lab/AutoResearchClaw.git && cd AutoResearchClaw && python3 -m venv .venv && source .venv/bin/activate && pip install -e .
```
2. 配置 YAML 文件
```bash
cp config.researchclaw.example.yaml config.arc.yaml
```
3. 運行研究生成
```bash
researchclaw run --topic 'Your research idea here' --auto-approve
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1460 stars（1460/天），forks 194（13.3%），顯示出極高的使用興趣。這個專案由一群活躍的貢獻者推動，解決了傳統研究流程中效率低下和人力成本高的痛點。之前的解決方案往往需要大量的手動操作和反覆的文獻檢索，而 AutoResearchClaw 則通過自動化的方式大幅簡化了這一過程。這種全自動化的研究生成方式在學術界引起了廣泛的關注，尤其是在需要快速產出研究成果的情境下。社群的活躍度和開放的測試邀請也促進了其快速成長。

## 適合誰使用

**目標受眾**：需要快速生成學術論文的研究者和學術團隊，尤其是那些希望減少手動操作的使用者。

> [!example] 使用場景
> - 研究生用它來快速生成學術論文，因為手動撰寫和文獻檢索耗時且容易出錯。
> - 學術團隊用它來自動化研究流程，因為這樣能夠節省人力成本並提高研究效率。
> - 獨立研究者用它來驗證研究想法，因為它能夠快速生成實驗和分析結果，幫助他們決定是否深入研究。

## 架構分析

AutoResearchClaw 採用多代理系統架構，這使得各個功能模組能夠獨立運行並協同工作。主要的資料流包括：使用者輸入研究主題，系統通過 CodeAgent 生成實驗代碼，BenchmarkAgent 負責選擇適合的數據集，並進行質量審核。這樣的設計使得系統能夠在不同階段進行自我修復和調整，確保生成的論文質量。選擇這種架構的代價在於需要較高的計算資源和複雜的配置，但能夠顯著提高研究效率和質量。擴展性方面，隨著使用者需求的增加，系統能夠通過增加更多的代理來擴展功能。

## 技術深入分析

AutoResearchClaw 的核心技術機制包括多代理系統和自動化文獻檢索。它使用 LLM 生成實驗代碼，並通過靜態分析進行深度驗證，確保代碼質量。系統能夠處理大量的文獻資料，並自動生成符合會議要求的論文。效能方面，該系統能夠在 GPU 和 CPU 環境下運行，並根據硬體自動調整執行策略。選擇 Python 作為主要開發語言使得其擁有豐富的生態系統，但也帶來了較高的記憶體使用需求。技術風險方面，隨著使用者數量的增加，系統可能面臨性能瓶頸，特別是在高並發的情況下。整合方面，與主流的 CI/CD 工具和 IDE 的相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Python 環境的配置。提供了良好的入門指南，並且文件支持多語言，適合不同背景的使用者。

## 優缺點分析

> [!success] 優點
> - 全自動化流程，減少人力干預。
> - 多代理系統提高了研究質量和效率。
> - 支持多種硬體環境，自動調整執行策略。

> [!danger] 缺點
> - 安裝和配置過程相對複雜。
> - 對硬體要求較高，可能不適合所有使用者。
> - 目前僅支援特定的學術會議模板，靈活性有限。

> [!warning] 注意事項
> - 僅支援 Python 3.11 及以上版本。
> - 需要 NVIDIA GPU 或 Apple MPS 以獲得最佳性能。
> - 目前僅支援特定的學術會議模板，可能不適用於所有期刊格式。
> - 在某些情況下，文獻檢索可能會受到 API 限制影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [aiming-lab/MetaClaw](https://github.com/aiming-lab/MetaClaw) | MetaClaw 提供了更強的多模態能力，適合需要結合不同數據源的研究，而 AutoResearchClaw 專注於自動生成學術論文。 |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | AutoResearch 提供了類似的自動化研究功能，但缺乏 AutoResearchClaw 的多代理系統和質量審核機制。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | AutoResearch 提供了自動化研究功能，但缺乏多代理系統和質量審核機制，這使得其在處理複雜研究時的靈活性較低。 | 如果你需要一個簡單的自動化研究工具，並且不需要多輪質量檢查，AutoResearch 可能更適合。 | medium，因為需要重新配置研究流程和代碼生成邏輯。 |
| [aiming-lab/MetaClaw](https://github.com/aiming-lab/MetaClaw) | MetaClaw 提供了多模態能力，適合需要結合不同數據源的研究，而 AutoResearchClaw 專注於自動生成學術論文。 | 如果你的研究需要整合多種數據來源，MetaClaw 會是更好的選擇。 | high，因為需要重新設計研究架構以適應多模態處理。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **AutoResearchClaw** | **autoresearch** | **MetaClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | AutoResearch 提供了自動化研究功能，但缺乏多代理系統和質量審核機制，這使得其在處理複雜研究時的靈活性較低。 | MetaClaw 提供了多模態能力，適合需要結合不同數據源的研究，而 AutoResearchClaw 專注於自動生成學術論文。 |
> | 遷移成本 | - | medium，因為需要重新配置研究流程和代碼生成邏輯。 | high，因為需要重新設計研究架構以適應多模態處理。 |
> | 適用場景 | 主要場景 | 如果你需要一個簡單的自動化研究工具，並且不需要多輪質量檢查， | 如果你的研究需要整合多種數據來源，MetaClaw 會是更好 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，文獻檢索可能會受到 API 限制影響，導致無法獲取完整資料。
  - 解法：使用多個 API 來源以確保資料完整性。
- [MEDIUM] 配置過程中可能會遇到依賴衝突，特別是在不同 Python 環境中。
  - 解法：建議使用虛擬環境來隔離依賴。
- [MEDIUM] 生成的論文可能需要手動調整格式以符合特定期刊要求。
  - 解法：在生成後使用 LaTeX 編輯器進行格式調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速生成學術論文的研究生 | 非常適合 | 全自動化流程能夠大幅減少手動操作和時間成本。 |
| 10 人以下的學術團隊 | 適合 | 能夠自動化研究流程，節省人力成本。 |
| 大型研究機構需要高質量的研究產出 | 普通 | 雖然能自動生成論文，但在高並發情況下可能面臨性能瓶頸。 |
| 不熟悉編程的獨立研究者 | 不適合 | 需要一定的技術背景來配置和運行系統。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的研究生成工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不存取敏感資料。依賴的第三方 API 需謹慎使用，確保其安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

AutoResearchClaw 通常與 OpenClaw 等 AI 助手搭配使用，能夠在研究開發過程中自動化文獻檢索和論文撰寫。在一個使用 Next.js + Vercel 部署的專案中，你可以用這個工具來自動生成研究論文，具體做法是運行 `researchclaw run --topic '...' --auto-approve`。支援 GitHub Actions 等 CI 工具，並能夠與 VS Code 等 IDE 整合，提供良好的開發體驗。整合的摩擦點主要在於需要正確配置 API 鍵和環境變數，否則會導致運行失敗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 AutoResearchClaw 出現之前，研究者通常依賴手動文獻檢索和撰寫論文，這一過程繁瑣且耗時。隨著 LLM 和自動化技術的進步，這個工具的出現使得研究流程得以顯著簡化。它代表了學術研究自動化的趨勢，未來可能會有更多類似工具出現，進一步推動學術界的效率提升。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型研究團隊

**前置技能**：
- 熟悉 Python 環境
- 了解文獻檢索流程
- 有基本的 LaTeX 使用經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：整理使用經驗並撰寫最佳實踐文檔。第四週：在核心研究項目中開始使用。

**成功指標**：研究論文生成時間減少 50%，文獻檢索準確率提高 30%。

> [!warning] 退出計畫
> 所有設定和資料均以標準格式保存，能夠輕鬆轉換為其他研究工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
| Forks | 194 |
| Open Issues | 6 |
| Issue 解決率 | 33% (3 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 7.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/AutoResearchClaw) |
| Topics | `autonomous-research` `citation-verification` `llm-agents` `multi-agent-debate` `openclaw` `paper-generation` `scientific-discovery` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "HTML" : 3
>     "TeX" : 1
>     "BibTeX Style" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jiaaqiliu](https://github.com/Jiaaqiliu) | 13 |
> | [@JasonOA888](https://github.com/JasonOA888) | 2 |
> | [@lupuleticatalin](https://github.com/lupuleticatalin) | 1 |
> | [@dl-m9](https://github.com/dl-m9) | 1 |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 1 |

**最新版本**：v0.2.0 — v0.2.0 — Multi-Agent Pipeline, Docker Sandbox & Quality Hardening (2026-03-16)

> [!info]- Release Notes
> ## Highlights
> 
> This release introduces **three multi-agent subsystems**, a **hardened Docker sandbox**, and **4 rounds of paper quality auditing** — significantly improving the end-to-end quality of generated research papers.
> 
> ## New Multi-Agent Subsystems
> 
> ### CodeAgent (4-phase architecture)
> - LLM generates multi-file experiment code (main.py + setup.py + requirements.txt)
> - Static analysis & deep validation (AST-based class/method checks)
> - LLM-guided code review with structured JSON feedback
> - Iterative repair loop (up to 3 rounds) with automatic UnboundLocalError fix
> 
> ### BenchmarkAgent (4 sub-agents: Surveyor → Selector → Acquirer → Validator)
> - Domain-aware dataset and baseline selection from 13-domain knowledge base
> - Automatic benchmark acquisition with Docker compatibility validation
> - Integrated at Stage 9 (experiment_design), output injected into Stage 10
> 
> ### FigureAgent (5 sub-agents: Planner → CodeGen → Renderer → Critic → Integrator)
> - Academic-quality chart generation with SciencePlots, 300 DPI, colorblind-safe palette
> - 6 built-in chart templates + LLM fallback for custom visualizations
> - Tri-modal critic review (data accuracy, aesthetics, academic convention)
> 
> ## Docker Sandbox Enhancements
> - Network-policy-aware code generation: `none` | `setup_only` | `pip_only` | `full`
> - Dynamic dependency installation via requirements.txt
> - Pre-cached datasets: CIFAR-10/100, MNIST, FashionMNIST, STL-10, SVHN
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者問題。
**連結**：[文件](https://github.com/aiming-lab/AutoResearchClaw/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-15 ~ 2026-03-16）
> **活躍天數** 2 天 · **最新 commit** docs: update badges, URLs, and config reference across all READMEs

## README 摘錄

> [!info]- 展開查看原文 README
> Chat an Idea. Get a Paper. Fully Autonomous.
> 
>   Just chat with OpenClaw: "Research X" → done.
> 
>   
> 
>   
>   
>   
>   
>   
> 
>   🇨🇳 中文 ·
>   🇯🇵 日本語 ·
>   🇰🇷 한국어 ·
>   🇫🇷 Français ·
>   🇩🇪 Deutsch ·
>   🇪🇸 Español ·
>   🇧🇷 Português ·
>   🇷🇺 Русский ·
>   🇸🇦 العربية
> 
>   📖 Integration Guide
> 
> ---
> 
> > **🧪 We're looking for testers!** Try the pipeline with your own research idea — from any field — and [tell us what you think](docs/TESTER_GUIDE.md). Your feedback directly shapes the next version. **[→ Testing Guide](docs/TESTER_GUIDE.md)** | **[→ 中文测试指南](docs/TESTER_GUIDE_CN.md)**
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> ```bash
> 
> # 1. Clone & install
> git clone https://github.com/aiming-lab/AutoResearchClaw.git
> cd AutoResearchClaw
> python3 -m venv .venv && source .venv/bin/activate
> pip install -e .
> 
> 
> # config.yaml — ACP example
> llm:
>   provider: "acp"
>   acp:
>     agent: "claude"   # Any ACP-compatible agent CLI command
>     cwd: "."          # Working directory for the agent
>   # No base_url or api_key needed — the agent handles its own auth.
> ```
> 
> ```bash
> 
> ## ✨ Key Features
> 
> | Feature | Description |
> |---------|------------|
> | **📚 Multi-Source Literature** | Real papers from arXiv (primary) + Semantic Scholar — query expansion, deduplication, circuit breaker with graceful degradation |
> | **🔍 4-Layer Citation Verification** | arXiv ID check → CrossRef/DataCite DOI → Semantic Scholar title match → LLM relevance scoring. Hallucinated refs auto-removed. |
> | **🖥️ Hardware-Aware Execution** | Auto-detects GPU (NVIDIA CUDA / Apple MPS / CPU-only) and adapts code generation, imports, and experiment scale accordingly |
> | **🧪 Sandbox Experiments** | AST-validated code, immutable harness, NaN/Inf fast-fail, self-healing repair, iterative refinement (up to 10 rounds), partial result capture |
> | **📝 Conference-Grade Writing** | NeurIPS/ICML/ICLR templates, section-by-section drafting (5,000-6,500 words), anti-fabrication guard, revision length guard, anti-disclaimer enforcement |
> | **📐 Template Switching** | `neurips_2025`, `iclr_2026`, `icml_2026` — Markdown → LaTeX with math, tables, figures, cross-refs, `\cite{}` |
> | **🚦 Quality Gates** | 3 human-in-the-loop gates (Stages 5, 9, 20) with rollback. Skip with `--auto-approve`. |
> 
> ---
> 
> 
> # 2. Configure
> cp config.researchclaw.example.yaml config.arc.yaml
> 
> # Edit config.arc.yaml — set your LLM API endpoint and key
> 
> 
> # config.arc.yaml
> openclaw_bridge:
>   use_cron: true              # ⏰ Scheduled research runs
>   use_message: true           # 💬 Progress notifications (Discord/Slack/Telegram)
>   use_memory: true            # 🧠 Cross-session knowledge persistence
>   use_sessions_spawn: true    # 🔀 Spawn parallel sub-sessions for concurrent stages
>   use_web_fetch: true         # 🌐 Live web search during literature review
>   use_browser: false          # 🖥️ Browser-based paper collection
> ```
> 
> Each flag activates a typed adapter protocol. When OpenClaw provides these capabilities, the adapters consume them without code changes. See [`docs/integration-guide.md`](docs/integration-guide.md) for full details.
> 
> 
> ## ⚙️ Configuration Reference
> 
> Click to expand full configuration reference
> 
> ```yaml
> 
> ## 🔥 News
> - **[03/16/2026]** [v0.2.0](https://github.com/aiming-lab/AutoResearchClaw/releases/tag/v0.2.0) — Three multi-agent subsystems (CodeAgent, BenchmarkAgent, FigureAgent), hardened Docker sandbox with network-policy-aware execution, 4-round paper quality audit (AI-slop detection, 7-dim review scoring, NeurIPS checklist), and 15+ bug fixes from production runs.
> - **[03/15/2026]** [v0.1.0](https://github.com/aiming-lab/AutoResearchClaw/releases/tag/v0.1.0) — We release AutoResearchClaw: a fully autonomous 23-stage research pipeline that turns a single research idea into a conference-ready paper. No human intervention required.
> 
> ---
> 
> 
> ## ⚡ One Command. One Paper.
> 
> ```bash
> pip install -e . && researchclaw run --topic "Your research idea here" --auto-approve
> ```
> 
> ---
> 
> 
> ## 🤔 What Is This?
> 
> **You think it. AutoResearchClaw writes it.**
> 
> Drop a research topic — get back a full academic paper with real literature from arXiv & Semantic Scholar, hardware-aware sandbox experiments (GPU/MPS/CPU auto-detected), statistical analysis, multi-agent peer review, and conference-ready LaTeX targeting NeurIPS/ICML/ICLR. No babysitting. No copy-pasting. No hallucinated references.
> 
> 📄paper_draft.mdFull academic paper (Introduction, Related Work, Method, Experiments, Results, Conclusion)
> 📐paper.texConference-ready LaTeX (NeurIPS / ICLR / ICML templates)
> 📚references.bibReal BibTeX references from Semantic Scholar and arXiv — auto-pruned to match inline citations
> 🔍verification_report.json4-layer citation integrity + relevance verification (arXiv, CrossRef, DataCite, LLM)
> 🧪experiment runs/Generated code + sandbox results + structured JSON metrics
> 📊charts/Auto-generated condition comparison charts with error bars and confidence intervals
> 📝reviews.mdMulti-agent peer review with methodology-evidence consistency checks
> 🧬evolution/Self-learning lessons extracted from each run
> 📦deliverables/All final outputs in one folder — compile-ready for Overleaf
> 
> The pipeline runs **end-to-end without human intervention**. When experiments fail, it self-heals. When hypotheses don't hold, it pivots. When citations are fake, it kills them.
> 
> ---
> 
> 
> # 3. Run
> export OPENAI_API_KEY="sk-..."
> researchclaw run --config config.arc.yaml --topic "Your research idea" --auto-approve
> ```
> 
> Output → `artifacts/rc-YYYYMMDD-HHMMSS-/deliverables/` — compile-ready LaTeX, BibTeX, experiment code, charts.
> 
> 📝 Minimum required config
> 
> ```yaml
> project:
>   name: "my-research"
> 
> research:
>   topic: "Your research topic here"
> 
> llm:
>   base_url: "https://api.openai.com/v1"
>   api_key_env: "OPENAI_API_KEY"
>   primary_model: "gpt-4o"
>   fallback_models: ["gpt-4o-mini"]
> 
> experiment:
>   mode: "sandbox"
>   sandbox:
>     python_path: ".venv/bin/python"
> ```
> 
> ---
> 
> 
> ## 🧠 What Makes It Different
> 
> | Capability | How It Works |
> |-----------|-------------|
> | **🔄 PIVOT / REFINE Loop** | Stage 15 autonomously decides: PROCEED, REFINE (tweak params), or PIVOT (new direction). Artifacts auto-versioned. |
> | **🤖 Multi-Agent Debate** | Hypothesis generation, result analysis, and peer review each use structured multi-perspective debate. |
> | **🧬 Self-Learning** | Lessons extracted per run (decision rationale, runtime warnings, metric anomalies) with 30-day time-decay. Future runs learn from past mistakes. |
> | **📚 Knowledge Base** | Every run builds structured KB across 6 categories (decisions, experiments, findings, literature, questions, reviews). |
> | **🛡️ Sentinel Watchdog** | Background quality monitor: NaN/Inf detection, paper-evidence consistency, citation relevance scoring, anti-fabrication guard. |
> 
> ---
> 
> 
> ## 🦞 OpenClaw Integration
> 
> **AutoResearchClaw is an [OpenClaw](https://github.com/openclaw/openclaw)-compatible service.** Install it in OpenClaw and launch autonomous research with a single message — or use it standalone via CLI, Claude Code, or any AI coding assistant.
> 
> 
> ### 🚀 Use with OpenClaw (Recommended)
> 
> If you already use [OpenClaw](https://github.com/openclaw/openclaw) as your AI assistant:
> 
> ```
> 1️⃣  Share the GitHub repo URL with OpenClaw
> 2️⃣  OpenClaw auto-reads RESEARCHCLAW_AGENTS.md → understands the pipeline
> 3️⃣  Say: "Research [your topic]"
> 4️⃣  Done — OpenClaw clones, installs, configures, runs, and returns results
> ```
> 
> **That's it.** OpenClaw handles `git clone`, `pip install`, config setup, and pipeline execution automatically. You just chat.
> 
> 💡 What happens under the hood
> 
> 1. OpenClaw reads `RESEARCHCLAW_AGENTS.md` → learns the research orchestrator role
> 2. OpenClaw reads `README.md` → understands installation and pipeline structure
> 3. OpenClaw copies `config.researchclaw.example.yaml` → `config.yaml`
> 4. Asks for your LLM API key (or uses your environment variable)
> 5. Runs `pip install -e .` + `researchclaw run --topic "..." --auto-approve`
> 6. Returns the paper, LaTeX, experiments, and citations
> 
> 
> ### 🔌 OpenClaw Bri

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[自然語言處理]]

相關專案：[[aiming-lab--MetaClaw|aiming-lab/MetaClaw]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[tanweai--pua|tanweai/pua]] · [[wanshuiyin--Auto-claude-code-research-in-sleep|wanshuiyin/Auto-claude-code-research-in-sleep]] · [[xstongxue--best-skills|xstongxue/best-skills]]

[GitHub](https://github.com/aiming-lab/AutoResearchClaw)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化研究）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化研究" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "aiming-lab--AutoResearchClaw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","機器學習","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "aiming-lab--AutoResearchClaw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "aiming-lab--AutoResearchClaw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "aiming-lab" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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

> **2026-03-17** — 首次收錄
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

- [[2026-03-18|2026-03-18]] — 再次上榜，4.2k stars
- [[2026-03-17|2026-03-17]] — 首次收錄，1.4k stars
