---
repo: aiming-lab/MetaClaw
url: https://github.com/aiming-lab/MetaClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: MIT
description: "🦞 Just talk to your agent — it learns and EVOLVES 🧬."
homepage: ""
stars: 1870
stars_per_day: 208
forks: 205
open_issues: 3
created: 2026-03-09
pushed_at: 2026-03-18
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "強化學習"
release_tag: "v0.3.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "讓 AI 代理透過對話學習並持續進化。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-19"
contributor_count: 5
engagement: "medium"
issue_close_rate: 77
repo_size_kb: 70661
readme_length: 9950
bus_factor: 2
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:980,2026-03-14:981,2026-03-15:1139,2026-03-15:1141,2026-03-16:1323,2026-03-16:1325,2026-03-17:1470,2026-03-18:1646,2026-03-19:1870"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - easy_install
  - "topic/agent"
  - "topic/ai_agent"
  - "topic/continual_learning"
  - "topic/fine_tuning"
  - "topic/llm"
aliases:
  - "MetaClaw"
  - "aiming-lab/MetaClaw"
  - "讓 AI 代理透過對話學習並持續進化。"
---

# MetaClaw

**1.9k** stars · **208** stars/天 · 建立 9 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/aiming-lab--MetaClaw");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.3.2` `easy-install`

`agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` `online-learning` `openclaw` `reinforcement-learning` `skill-learning` `tinker`

> [!summary] 一句話摘要
> 讓 AI 代理透過對話學習並持續進化。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (208 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在 AI 代理中實現即時學習和進化的開發者。
> **一句話重點** MetaClaw 的即時學習能力讓 AI 代理能夠在實際對話中持續進化，這是傳統 AI 代理所無法實現的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--MetaClaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "強化學習" && p.file.name !== "aiming-lab--MetaClaw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 強化學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、10 小時整合，得到即時學習的 AI 代理，值得一試。

> [!abstract] 核心創新
> MetaClaw 能夠在實際對話中即時學習並進化，這在其他 AI 代理中是前所未有的。

## 專案簡介

MetaClaw 是一個能夠在實際對話中學習和進化的 AI 代理。用戶只需與代理進行對話，MetaClaw 便能將每次互動轉化為學習信號，從而在實際部署中不斷改進。其核心機制是將模型放置在代理後面，攔截與用戶的互動，並在每次對話中注入相關技能，實現持續的元學習。用戶可以透過 `metaclaw setup` 指令選擇代理類型（如 OpenClaw、CoPaw 等），並使用 `metaclaw start` 啟動代理。這種設計使得 MetaClaw 能夠在不需要 GPU 的情況下運行，並且支持多種 LLM API，讓使用者能夠靈活選擇。技術上，MetaClaw 使用 FastAPI 和 Uvicorn 作為後端，並依賴 PyTorch 和 Transformers 進行模型訓練和推理。與其他類似工具相比，如 OpenClaw 和 Tinker，MetaClaw 提供了更強的即時學習能力，因為它能在用戶互動中即時更新模型，而不是依賴離線訓練。

這使得它在需要快速適應變化的場景中表現更佳。使用者可以在不同的模式下運行 MetaClaw，如僅技能模式或強化學習模式，這提供了更大的靈活性。實際使用中，MetaClaw 可以處理大量的對話數據，並且在資源需求上相對輕量。這個專案目前處於 beta 階段，適合希望在 AI 代理中實現即時學習的開發者。未來六個月內，預計將會增加更多的代理類型和功能，進一步提升其靈活性和易用性。使用者應該在需要快速迭代和學習的場景中考慮使用 MetaClaw，而在對性能要求極高的情況下，可能需要評估其他選擇。

**技術棧**：`Python 3.8` · `FastAPI` · `PyTorch 1.9` · `Transformers 4.51.1`

## 重點功能

- 即時學習 — 透過對話即時更新代理的技能和知識。
- 多代理支持 — 支援多種代理類型（如 OpenClaw、CoPaw 等），用戶可根據需求選擇。
- 靈活的配置 — 使用 `metaclaw setup` 指令進行簡單配置，快速上手。
- 無需 GPU — 在不需要高性能硬體的情況下運行，適合各種環境。
- 強化學習模式 — 支援強化學習訓練，提升代理的適應能力。

## 快速開始

1. 安裝 MetaClaw
```bash
pip install -e .
```
2. 選擇代理類型
```bash
metaclaw setup
```
3. 啟動 MetaClaw
```bash
metaclaw start
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 MetaClaw 並完成配置",
  "指令": "metaclaw start",
  "預期輸出": "MetaClaw 代理啟動並運行"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1870 stars（208/天），forks 205（11.0%），顯示出強勁的增長潛力。作者 huaxiuyao 和其他貢獻者在 AI 和機器學習領域有豐富的經驗，這使得 MetaClaw 能夠解決即時學習和適應的痛點，這在傳統的 AI 代理中往往難以實現。最近的推廣活動和社群討論也為其增長提供了助力。技術上，MetaClaw 的設計使其能夠在不需要高性能硬體的情況下運行，這對於許多開發者來說是個重要的優勢。其 forks/stars 比率顯示出相對較高的實際修改和使用意圖，這意味著社群對於這個工具有著積極的參與。

## 適合誰使用

**目標受眾**：希望在 AI 代理中實現即時學習和進化的開發者。

> [!example] 使用場景
> - AI 研究員用它來快速測試不同的代理類型，因為可以在對話中即時學習，提升研究效率。
> - 產品經理用它來收集用戶反饋並即時調整 AI 代理的行為，因為這樣可以在實際使用中獲得更準確的數據。
> - 開發者用它來構建個性化的聊天機器人，因為 MetaClaw 的即時學習能力能夠讓機器人更好地適應用戶需求。

## 架構分析

MetaClaw 採用代理模式，將 AI 模型放置於代理後面，攔截用戶的互動。這種設計使得模型能夠在不需要高性能硬體的情況下運行，並且能夠即時學習。資料流方面，MetaClaw 使用 FastAPI 作為後端，並透過 Uvicorn 提供高效的 API 服務。

這樣的架構使得 MetaClaw 能夠在多種環境中靈活運行。選擇這種架構的代價是需要用戶提供 API 金鑰，並且在高負載情況下可能會影響性能。整體而言，這種架構能夠支持即時學習和多代理的靈活配置，適合快速迭代的開發環境。

## 技術深入分析

MetaClaw 的核心技術在於其即時學習能力，這是透過攔截用戶與代理的對話來實現的。使用者的每次互動都會被視為學習信號，並且在後端進行處理。這樣的設計使得代理能夠在實際使用中不斷改進，而不是依賴於離線訓練。效能方面，MetaClaw 可以處理大量的對話數據，並且在資源需求上相對輕量，適合各種環境。設計上，選擇使用 FastAPI 和 Uvicorn 作為後端框架，這樣的選擇使得系統能夠在高並發的情況下保持穩定。技術風險方面，MetaClaw 依賴於外部 API 的穩定性，這可能會在高負載時影響其性能。整合方面，MetaClaw 能夠與主流的 LLM API 無縫對接，並且提供了靈活的配置選項，這使得它能夠輕鬆融入現有的技術生態中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清楚且提供了詳細的安裝和配置指導，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 API 金鑰的配置。文件提供了多語言支持，這對於不同語言的使用者非常友好。

## 優缺點分析

> [!success] 優點
> - 即時學習能力強，能夠快速適應用戶需求。
> - 多代理支持，靈活性高。
> - 無需高性能硬體即可運行，降低了使用門檻。

> [!danger] 缺點
> - 目前僅支援 Python 環境，限制了使用範圍。
> - 在高負載下可能影響學習效果。
> - 需要用戶提供 API 金鑰，增加了使用複雜度。

> [!warning] 注意事項
> - 目前僅支援 Python 環境，其他語言尚未實現。
> - 在高負載情況下，可能會影響即時學習的效果。
> - 需要用戶提供 API 金鑰以使用 LLM 功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [aiming-lab/OpenClaw](https://github.com/aiming-lab/OpenClaw) | OpenClaw 是一個基於傳統方法的 AI 代理，無法即時學習，而 MetaClaw 則能在對話中持續進化。 |
| [aiming-lab/Tinker](https://github.com/aiming-lab/Tinker) | Tinker 專注於模型訓練，而 MetaClaw 則強調即時學習和用戶互動的整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [aiming-lab/OpenClaw](https://github.com/aiming-lab/OpenClaw) | OpenClaw 是一個基於傳統方法的 AI 代理，無法即時學習，而 MetaClaw 則能在對話中持續進化。 | 如果需要一個穩定的代理且不需要即時學習功能，OpenClaw 可能是更好的選擇。 | medium，因為需要重新設計學習流程。 |
| [aiming-lab/Tinker](https://github.com/aiming-lab/Tinker) | Tinker 專注於模型訓練，而 MetaClaw 則強調即時學習和用戶互動的整合。 | 如果你的重點是模型的離線訓練而非即時學習，Tinker 會是更合適的選擇。 | high，因為需要重構整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MetaClaw** | **OpenClaw** | **Tinker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 是一個基於傳統方法的 AI 代理，無法即時學習，而 MetaClaw 則能在對話中持續進化。 | Tinker 專注於模型訓練，而 MetaClaw 則強調即時學習和用戶互動的整合。 |
> | 遷移成本 | - | medium，因為需要重新設計學習流程。 | high，因為需要重構整個系統架構。 |
> | 適用場景 | 主要場景 | 如果需要一個穩定的代理且不需要即時學習功能，OpenClaw | 如果你的重點是模型的離線訓練而非即時學習，Tinker 會是 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，代理可能無法即時學習，影響用戶體驗。
  - 解法：減少同時運行的代理數量以降低負載。
- [MEDIUM] API 金鑰配置不當可能導致無法連接 LLM。
  - 解法：仔細檢查配置文件中的 API 金鑰。
- [MEDIUM] 某些代理類型在特定環境下可能無法正常運行。
  - 解法：測試不同的代理類型以找到最佳配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司希望快速開發 AI 代理 | 非常適合 | MetaClaw 的即時學習能力能夠快速適應用戶需求，適合小型團隊的靈活開發。 |
| 大型企業需要穩定的 AI 代理進行客戶服務 | 不適合 | 目前仍處於 beta 階段，穩定性和性能可能無法滿足大型企業的需求。 |
| 個人開發者想要實現一個學習型聊天機器人 | 非常適合 | MetaClaw 的設計使得個人開發者能夠輕鬆實現即時學習的功能。 |
| 學術研究需要一個可持續進化的 AI 代理 | 適合 | MetaClaw 的元學習特性非常適合用於學術研究中的實驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到即時學習的 AI 代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MetaClaw 本身不需要高權限運行，但需要用戶提供 API 金鑰。對於外部 API 的依賴性需謹慎評估，特別是在生產環境中使用時。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MetaClaw 可以與多種 LLM API 進行整合，並且能夠輕鬆融入現有的開發環境。它的設計使得在使用 FastAPI 和 Uvicorn 的應用中，能夠快速部署和啟動。實際整合中，使用者可以透過 `metaclaw setup` 進行配置，然後使用 `metaclaw start` 啟動代理，這樣的流程簡化了整合的複雜性。MetaClaw 也能夠與主流的 CI/CD 工具相容，並提供了良好的文檔支持，降低了使用的摩擦點。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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
| Forks | 205 |
| Open Issues | 3 |
| Issue 解決率 | 77% (10 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-09 |
| Repo 大小 | 69.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/MetaClaw) |
| Topics | `agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `httpx` `fastapi` `uvicorn` `numpy` `sentence-transformers` `openai` `wandb`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 34 |
> | [@GRAPE-VLA](https://github.com/GRAPE-VLA) | 21 |
> | [@ImKeTT](https://github.com/ImKeTT) | 20 |
> | [@jimmmchen](https://github.com/jimmmchen) | 6 |
> | [@robottest2026-spec](https://github.com/robottest2026-spec) | 5 |

**最新版本**：v0.3.2 — v0.3.2 — Multi-Claw Support & OpenRouter (2026-03-16)

> [!info]- Release Notes
> Release Notes:                                                                                                                            
>    
>   ## What's New in v0.3.2        
>                                                                                                                        
>   ### 🐾 Multi-Claw Support
> 
>   MetaClaw now works with 7 CLI agent variants. In addition to OpenClaw, you can now use:                                   
>   - IronClaw — configure via `claw_type: ironclaw`
>   - PicoClaw — configure via `claw_type: picoclaw`                                                                            
>   - ZeroClaw — configure via `claw_type: zeroclaw`            
>   - CoPaw — configure via `claw_type: copaw`
>   - NanoClaw — configure via `claw_type: nanoclaw`
>   - NemoClaw — configure via `claw_type: nemoclaw`
> 
>   The `claw_adapter` layer auto-configures the active agent to route through the MetaClaw proxy on startup.
> 
>   ### 🤝 NanoClaw Integration
> 
>   NanoClaw uses the Anthropic SDK natively and expects an Anthropic-format endpoint.
>   MetaClaw now exposes a `/v1/messages` Anthropic-compatible proxy endpoint alongside the existing `/v1/chat/completions`, so
>   NanoClaw works without any modification to the agent itself.
> 
>   The adapter auto-discovers NanoClaw's .env file by probing launchd plist WorkingDirectory (macOS), systemd service
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度高，定期更新和回應問題。
**連結**：[文件](https://github.com/aiming-lab/MetaClaw/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-18）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #25 from octo-patch/feature/upgrade-minimax-m27

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/aiming-lab/MetaClaw/issues/18) | MinT API key ? | 0 | 1 |
> | [#14](https://github.com/aiming-lab/MetaClaw/issues/14) | Modal Support | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Just talk to your agent — it learns and *EVOLVES*.
> 
> Inspired by how brains learn. Meta-learn and evolve your 🦞 from every conversation in the wild. No GPU required.
>   
> 
>   
>   
>   
>   
>   
>   
> 
> [🇨🇳 中文](./assets/README_ZH.md) • [🇯🇵 日本語](./assets/README_JA.md) • [🇰🇷 한국어](./assets/README_KO.md) • [🇫🇷 Français](./assets/README_FR.md) • [🇩🇪 Deutsch](./assets/README_DE.md) • [🇪🇸 Español](./assets/README_ES.md) • [🇧🇷 Português](./assets/README_PT.md) • [🇷🇺 Русский](./assets/README_RU.md) • [🇮🇹 Italiano](./assets/README_IT.md) • [🇻🇳 Tiếng Việt](./assets/README_VI.md) • [🇦🇪 العربية](./assets/README_AR.md) • [🇮🇳 हिन्दी](./assets/README_HI.md)
> 
> [Overview](#-overview) • [Quick Start](#-quick-start) • [Multi-Claw Support](#-multi-claw-support) • [Configuration](#️-configuration) • [Skills Mode](#-skills-mode) • [RL Mode](#-rl-mode) • [MadMax Mode](#-madmax-mode-default) • [Citation](#-citation)
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> 
> ### 1. Install
> 
> ```bash
> pip install -e .                        # skills_only mode (lightweight)
> pip install -e ".[rl]"                  # + RL training support (torch, transformers, tinker)
> pip install -e ".[evolve]"              # + skill evolution via OpenAI-compatible LLM
> pip install -e ".[scheduler]"           # + Google Calendar integration for scheduler
> pip install -e ".[rl,evolve,scheduler]" # recommended for full RL + scheduler setup
> ```
> 
> If you want to run `rl.backend=mint`, install the MinT compatibility package separately in the same environment, for example [`mindlab-toolkit`](https://github.com/MindLab-Research/mindlab-toolkit). MetaClaw keeps that dependency out of the default package so RL users can choose Tinker or MinT explicitly.
> 
> 
> ### Setup
> 
> Pick your agent during `metaclaw setup` (the first question in the wizard):
> 
> ```
> Personal agent to configure (openclaw/copaw/ironclaw/picoclaw/zeroclaw/nanoclaw/nemoclaw/none) [openclaw]:
> ```
> 
> Or set it directly at any time:
> 
> ```bash
> metaclaw config claw_type copaw      # switch to CoPaw
> metaclaw config claw_type ironclaw   # switch to IronClaw
> metaclaw config claw_type picoclaw   # switch to PicoClaw
> metaclaw config claw_type zeroclaw   # switch to ZeroClaw
> metaclaw config claw_type nanoclaw   # switch to NanoClaw
> metaclaw config claw_type nemoclaw   # switch to NemoClaw
> metaclaw config claw_type none       # manual / custom agent
> ```
> 
> Then run `metaclaw start` as usual — the proxy comes up and the chosen agent is wired automatically.
> 
> 
> ## 🎥 Demo
> 
> https://github.com/user-attachments/assets/d86a41a8-4181-4e3a-af0e-dc453a6b8594
> 
> ---
> 
> 
> ## 📖 Overview
> 
> **MetaClaw is an agent that meta-learns and evolves in the wild.**
> Just talk to your agent as you normally would — MetaClaw turns every live conversation into a learning signal, enabling the agent to continuously improve through real-world deployment rather than offline training alone.
> 
> Under the hood, it places your model behind a proxy that intercepts interactions from your personal agent (OpenClaw, CoPaw, IronClaw, PicoClaw, ZeroClaw, NanoClaw, NemoClaw, or any OpenAI-compatible client), injects relevant skills at each turn, and meta-learns from accumulated experience. For Anthropic-native agents like NanoClaw, MetaClaw also exposes a `/v1/messages` Anthropic-compatible endpoint so the full pipeline works without any agent-side changes. Skills are summarized automatically after each session; with RL enabled, a meta-learning scheduler defers weight updates to idle windows so the agent is never interrupted during active use.
> 
> No GPU cluster required. MetaClaw works with any OpenAI-compatible LLM API out of the box, and uses a Tinker-compatible backend for cloud-based LoRA training. [Tinker](https://www.thinkingmachines.ai/tinker/) is the default reference path, and MinT can be enabled through a separate compatibility package when needed.
> 
> 
> ## 🤖 Key Features
> 
> 
> ### 2. Configure
> 
> ```bash
> metaclaw setup
> ```
> 
> The interactive wizard will ask you to:
> 1. **Choose your personal agent** — `openclaw`, `copaw`, `ironclaw`, `picoclaw`, `zeroclaw`, `nanoclaw`, `nemoclaw`, or `none` (MetaClaw will auto-configure it on start)
> 2. **Choose your LLM provider** — Kimi, Qwen, MiniMax, or custom
> 3. **Enter your API key** and optionally enable RL training
> 
> MetaClaw's RL path can switch explicitly between `tinker` and `mint`. `auto` is the recommended default and will still infer MinT from Mint-like credentials or base URLs when the MinT package is installed.
> 
> **Tinker**:
> 
> ```bash
> metaclaw config rl.backend tinker
> metaclaw config rl.api_key sk-...
> metaclaw config rl.model moonshotai/Kimi-K2.5
> ```
> 
> **MinT**:
> 
> ```bash
> metaclaw config rl.backend mint
> metaclaw config rl.api_key sk-mint-...
> metaclaw config rl.base_url https://mint.macaron.xin/
> metaclaw config rl.model Qwen/Qwen3-4B-Instruct-2507
> ```
> 
> Legacy aliases `rl.tinker_api_key` and `rl.tinker_base_url` are still accepted for backward compatibility.
> 
> 
> ## ⚙️ Configuration
> 
> Configuration lives in `~/.metaclaw/config.yaml`, created by `metaclaw setup`.
> 
> **CLI commands:**
> 
> ```
> metaclaw setup                  # Interactive first-time configuration wizard
> metaclaw start                  # Start MetaClaw (default: madmax mode)
> metaclaw start --daemon         # Start MetaClaw in background
> metaclaw start --daemon --log-file /tmp/metaclaw.log  # Custom daemon log path
> metaclaw start --mode rl        # Force RL mode (no scheduler) for this session
> metaclaw start --mode skills_only  # Force skills-only mode for this session
> metaclaw stop                   # Stop a running MetaClaw instance
> metaclaw status                 # Check proxy health, running mode, and scheduler state
> metaclaw config show            # View current configuration
> metaclaw config KEY VALUE       # Set a config value
> ```
> 
> When you start MetaClaw with `--daemon`, the command waits until the local proxy becomes healthy before returning. Use `metaclaw status` to verify readiness and `metaclaw stop` to stop the background process.
> 
> Full config reference (click to expand)
> 
> ```yaml
> mode: madmax               # "madmax" | "rl" | "skills_only"
> claw_type: openclaw        # "openclaw" | "copaw" | "ironclaw" | "picoclaw" | "zeroclaw" | "nanoclaw" | "nemoclaw" | "none"
> 
> llm:
>   provider: kimi            # kimi | qwen | openai | minimax | custom
>   model_id: moonshotai/Kimi-K2.5
>   api_base: https://api.moonshot.cn/v1
>   api_key: sk-...
> 
> proxy:
>   port: 30000
>   api_key: ""              # optional bearer token for the local MetaClaw proxy
> 
> skills:
>   enabled: true
>   dir: ~/.metaclaw/skills   # your skill library
>   retrieval_mode: template  # template | embedding
>   top_k: 6
>   task_specific_top_k: 10   # cap task-specific skills (default 10)
>   auto_evolve: true         # auto-summarize skills after each session
> 
> rl:
>   enabled: false            # set to true to enable RL training
>   backend: auto             # "auto" | "tinker" | "mint"
>   model: moonshotai/Kimi-K2.5
>   api_key: ""
>   base_url: ""              # optional backend endpoint, e.g. https://mint.macaron.xin/ for MinT
>   tinker_api_key: ""        # legacy alias for api_key
>   tinker_base_url: ""       # legacy alias for base_url
>   prm_url: https://api.openai.com/v1
>   prm_model: gpt-5.2
>   prm_api_key: ""
>   lora_rank: 32
>   batch_size: 4
>   resume_from_ckpt: ""      # optional checkpoint path to resume training
>   evolver_api_base: ""      # leave empty to reuse llm.api_base
>   evolver_api_key: ""
>   evolver_model: gpt-5.2
> 
> opd:
>   enabled: false            # set to true to enable OPD (teacher distillation)
>   teacher_url: ""           # teacher model base URL (OpenAI-compatible /v1/completions)
>   teacher_model: ""         # teacher model name (e.g., Qwen/Qwen3-32B)
>   teacher_api_key: ""       # teacher model API key
>   kl_penalty_coef: 1.0      # KL penalty coefficient for OPD
> 
> max_context_tokens: 20000   # prompt token cap before truncation
> 
> scheduler:                  # v0.3: meta-learning scheduler (auto-enabled in madmax mode)
>   enabled: false            # madmax mode enables this automatically; set manua

## 延伸閱讀

相關概念：[[強化學習]] · [[元學習]] · [[即時學習]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/aiming-lab/MetaClaw)

## 相關收錄

> [!note]- 直接競品（同子分類：強化學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "強化學習" AND file.name != "aiming-lab--MetaClaw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "aiming-lab--MetaClaw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "aiming-lab--MetaClaw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "aiming-lab--MetaClaw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["強化學習","元學習","即時學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "aiming-lab--MetaClaw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/aiming-lab--MetaClaw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "aiming-lab--MetaClaw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "aiming-lab" AND file.name != "aiming-lab--MetaClaw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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
> const me = dv.page("Repos/aiming-lab--MetaClaw");
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

> **2026-03-14** — 首次收錄
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

- [[2026-03-16|2026-03-16]] — 再次上榜，1.3k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，1.1k stars
- [[2026-03-14|2026-03-14]] — 首次收錄，980 stars
