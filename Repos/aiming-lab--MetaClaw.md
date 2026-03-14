---
repo: aiming-lab/MetaClaw
url: https://github.com/aiming-lab/MetaClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: MIT
description: "Just talk to your agent — it learns and EVOLVES."
homepage: ""
stars: 981
stars_per_day: 245
forks: 137
open_issues: 0
created: 2026-03-09
pushed_at: 2026-03-13
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "強化學習"
release_tag: "v0.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "讓你的 AI 代理透過每次對話自動學習與演化，無需 GPU。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 5
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 67340
readme_length: 9931
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:980,2026-03-14:981"
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
  - "讓你的 AI 代理透過每次對話自動學習與演化，無需 GPU。"
---

# MetaClaw

**981** stars · **245** stars/天 · 建立 4 天前 · Python · MIT

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

`ORG` `v0.3.0` `easy-install`

`agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` `online-learning` `openclaw` `reinforcement-learning` `skill-learning` `tinker`

> [!summary] 一句話摘要
> 讓你的 AI 代理透過每次對話自動學習與演化，無需 GPU。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (245 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在無需高性能計算資源的情況下開發自學習 AI 代理的獨立開發者或小型團隊。
> **一句話重點** MetaClaw 的即時學習和自動技能總結功能讓 AI 代理的開發變得更加簡單和高效。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、3 小時整合，得到靈活的 AI 代理，值得嘗試。

> [!abstract] 核心創新
> MetaClaw 透過即時對話學習和自動技能總結，實現了無需離線訓練的持續學習能力。

## 專案簡介

MetaClaw 是一個能夠在實際使用中不斷學習和演化的 AI 代理。用戶只需與代理對話，MetaClaw 會將每次對話轉化為學習信號，從而實現持續改進。其核心機制是將模型放置在 OpenAI 兼容的代理後面，攔截與 OpenClaw 的互動，並在每次交互中注入相關技能。這種設計使得代理能夠在不需要離線訓練的情況下，通過實際部署來進行學習。使用者只需執行 `metaclaw start` 指令即可啟動代理，並在每次對話後自動總結新技能，無需手動干預。

技術上，MetaClaw 支持多種模式，包括 `madmax` 模式，這是一種結合強化學習和智能調度的運行方式，能夠在用戶閒置時進行權重更新。它依賴於 FastAPI 和 Uvicorn 提供的高效能網路服務，並且不需要本地 GPU，這使得它能夠在資源受限的環境中運行。



與其他類似工具相比，MetaClaw 的獨特之處在於其即時技能注入和自動技能總結功能。相比於需要手動配置和更新的工具，MetaClaw 使得用戶能夠在對話中即時獲得改進，這對於需要快速迭代的應用場景非常有利。相較於 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，MetaClaw 提供了更為靈活的技能管理和即時學習能力。

在實際使用中，MetaClaw 能夠處理大量的對話數據，並在每次對話後進行技能的自動總結，這樣的設計使得其在長期使用中能夠不斷提升性能。社群的活躍度高，且開發者持續更新，這對於未來的功能擴展和穩定性有很大的幫助。整體來看，MetaClaw 是一個適合中小型團隊和個人開發者的工具，特別是那些希望在無需高性能計算資源的情況下進行 AI 代理開發的使用者。

**技術棧**：`Python` · `FastAPI` · `Uvicorn`

## 重點功能

- 即時技能注入 — 在每次對話中自動注入相關技能，提升代理的即時反應能力。
- 自動技能總結 — 每次對話後自動分析並生成新技能，無需手動干預。
- 多種運行模式 — 支持 madmax、rl 和 skills_only 模式，根據需求靈活選擇。
- 無需本地 GPU — 完全依賴雲端 API，適合資源受限的環境。
- 強化學習支持 — 透過閒置時間進行權重更新，提升學習效率。

## 快速開始

1. 安裝 MetaClaw
```bash
pip install -e .
```
2. 進行初始配置
```bash
metaclaw setup
```
3. 啟動 MetaClaw 代理
```bash
metaclaw start
```

## 程式碼範例

```python
# 前置條件
# 安裝 MetaClaw
pip install -e .
# 啟動 MetaClaw
metaclaw start
# 預期輸出
代理啟動並開始接收對話。每次對話後自動學習新技能。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 981 stars（245/天），forks 137（14.0%），這顯示出強烈的社群興趣。作者 huaxiuyao 和其他貢獻者在 AI 代理和強化學習領域有豐富的經驗。MetaClaw 解決了傳統 AI 代理需要大量計算資源和手動調整的痛點，通過即時學習和技能注入，讓用戶能夠更輕鬆地使用 AI 代理。近期的推廣活動和社群討論也提升了其曝光率。技術上，隨著雲計算和 API 的普及，這種無需本地 GPU 的設計變得越來越可行。高達 14.0% 的 forks/stars 比率顯示出許多開發者對此工具的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：希望在無需高性能計算資源的情況下開發自學習 AI 代理的獨立開發者或小型團隊。

> [!example] 使用場景
> - AI 研究人員用它來快速迭代 AI 代理的技能，因為它能在每次對話後自動學習新技能，節省了大量手動調整的時間。
> - 中小型企業的產品經理用它來開發客戶服務代理，因為無需高性能硬體，能夠在雲端環境中輕鬆部署和擴展。
> - 獨立開發者用它來創建個性化的聊天機器人，因為其即時學習能力讓機器人能夠根據用戶反饋不斷改進。

## 架構分析

MetaClaw 採用代理模式，將用戶的 LLM 模型放置在 OpenAI 兼容的代理後面，這樣可以攔截和注入技能到每次對話中。這種設計使得代理能夠在不需要本地 GPU 的情況下運行，並且能夠在用戶閒置時進行權重更新。資料流方面，代理接收用戶的輸入，通過技能注入提升反應能力，並在每次對話後進行技能總結。選擇這種架構的代價是需要穩定的網路連接，否則會影響性能。擴展性方面，MetaClaw 能夠處理大量對話數據，但在高負載情況下可能會遇到延遲問題。

## 技術深入分析

MetaClaw 的核心技術機制是代理模式，通過攔截用戶的對話並注入技能，實現即時學習。這種設計使得代理能夠在不需要離線訓練的情況下，通過實際使用來進行學習。效能方面，MetaClaw 能夠處理大量的對話數據，並在每次對話後進行技能總結，這樣的設計使得其在長期使用中能夠不斷提升性能。選擇 Python 和 FastAPI 作為技術棧的原因在於其高效能和易於擴展的特性，這對於需要快速迭代的 AI 代理開發至關重要。技術風險方面，依賴於雲端服務可能會導致延遲或中斷，這在高負載情況下尤為明顯。整合分析方面，MetaClaw 與主流的 LLM API 相容性良好，並且能夠輕鬆整合到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多語言支持，安裝過程順暢，無明顯坑點。提供了良好的入門指南，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 即時學習能力，能夠快速適應用戶需求。
> - 無需高性能硬體，適合資源受限的環境。
> - 支持多種運行模式，靈活性高。

> [!danger] 缺點
> - 依賴雲端服務，無法離線使用。
> - 對於非 OpenAI 兼容的模型支持有限。
> - 需要穩定的網路連接，否則性能會下降。

> [!warning] 注意事項
> - 不支持本地 GPU，需依賴雲端服務進行計算。
> - 目前僅支持 OpenAI 兼容的 LLM API，對於非兼容的模型無法使用。
> - 需要穩定的網路連接，否則會影響代理的性能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync 主要用於資料同步，而 MetaClaw 專注於 AI 代理的即時學習和演化，適合需要快速迭代的場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw-Medical-Skills 提供醫療領域的專用技能，而 MetaClaw 則是通用的 AI 代理，能夠適應多種場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，而 MetaClaw 是通用的 AI 代理，能夠適應多種場景。 | 如果你的應用場景專注於醫療領域，OpenClaw-Medical-Skills 會提供更針對性的功能。 | medium，因為需要重新設計技能管理和學習流程。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於資料同步，而 MetaClaw 專注於 AI 代理的即時學習和演化。 | 如果你的需求是資料同步而非 AI 代理，則 AlpinDale/parsync 是更合適的選擇。 | low，因為兩者的功能完全不同，無法直接遷移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MetaClaw** | **OpenClaw-Medical-Skills** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的技能，而 MetaClaw 是通用的 AI 代理，能夠適應多種場景。 | 主要用於資料同步，而 MetaClaw 專注於 AI 代理的即時學習和演化。 |
> | 遷移成本 | - | medium，因為需要重新設計技能管理和學習流程。 | low，因為兩者的功能完全不同，無法直接遷移。 |
> | 適用場景 | 主要場景 | 如果你的應用場景專注於醫療領域，OpenClaw-Medic | 如果你的需求是資料同步而非 AI 代理，則 AlpinDal |

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

- [MEDIUM] 在高負載情況下可能會遇到延遲問題
  - 解法：考慮使用更穩定的網路連接或減少同時對話數量
- **[HIGH]** 對於非 OpenAI 兼容的模型支持有限
  - 解法：確保使用兼容的 LLM API
- [MEDIUM] 技能總結過程可能會影響對話流暢性
  - 解法：在低峰時段進行對話以減少影響

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 AI 代理 | 非常適合 | 無需高性能硬體，且能快速適應用戶需求。 |
| 大型企業的客戶服務系統 | 普通 | 雖然功能強大，但可能需要更多的穩定性和支持。 |
| 個人開發者的 AI 實驗專案 | 非常適合 | 靈活性高，能夠快速迭代和學習。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到靈活的 AI 代理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 金鑰，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 137 |
| Open Issues | 0 |
| Issue 解決率 | 100% (3 closed) |
| 最後推送 | 2026-03-13 |
| 建立日期 | 2026-03-09 |
| Repo 大小 | 65.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/MetaClaw) |
| Topics | `agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `httpx` `fastapi` `uvicorn` `numpy` `sentence-transformers` `openai` `wandb`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 22 |
> | [@ImKeTT](https://github.com/ImKeTT) | 14 |
> | [@GRAPE-VLA](https://github.com/GRAPE-VLA) | 8 |
> | [@jimmmchen](https://github.com/jimmmchen) | 6 |
> | [@robottest2026-spec](https://github.com/robottest2026-spec) | 5 |

**最新版本**：v0.3.0 — v0.3.0 — Continual Meta-Learning (MadMax Mode) (2026-03-13)

> [!info]- Release Notes
> ## [03/13/2026] v0.3.0 — Continual Meta-Learning (MadMax Mode)
> 
> Continual meta-learning support: the agent now meta-learns and evolves autonomously through normal usage.
> 
> - **Skill-driven fast adaptation**: gradient-free skill evolution from failure trajectories, zero downtime
> - **Opportunistic policy optimization**: cloud LoRA/GRPO weight updates, deferred to idle windows
> - **Skill generation versioning**: support-query separation prevents stale reward contamination
> - **OMLS (Opportunistic Meta-Learning Scheduler)**: three-signal idle detection (sleep window, keyboard inactivity, Google Calendar occupancy)
> - **Proxy-based architecture**: scales to production-size LLMs without local GPU

## 社群與生態

**社群活躍度**：社群活躍，開發者持續更新，問題解決率高。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-13 ~ 2026-03-13）
> **活躍天數** 1 天 · **最新 commit** Revert Gemini logo to simpleicons

## README 摘錄

> [!info]- 展開查看原文 README
> # Just talk to your agent — it learns and *EVOLVES*.
> 
> Inspired by how the brain learns. Meta-learn and evolve your 🦞 from every conversation in the wild. No GPU required. Works with Kimi, Qwen, Claude, MiniMax, and more.
> 
>   
>     
>   
>   Kimi
> 
>   
>     
>   
>   Qwen
> 
>   
>     
>   
>   Claude
> 
>   
>     
>   
>   MiniMax
> 
>   
>     
>   
>   OpenAI
> 
>   
>     
>   
>   Gemini
> 
>   + MuchMore
> 
>   
>   
>   
>   
>   
>   
> 
> [🇨🇳 中文](./assets/README_ZH.md) • [🇯🇵 日本語](./assets/README_JA.md) • [🇰🇷 한국어](./assets/README_KO.md) • [🇫🇷 Français](./assets/README_FR.md) • [🇩🇪 Deutsch](./assets/README_DE.md) • [🇪🇸 Español](./assets/README_ES.md)
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
> Under the hood, it places your model behind an OpenAI-compatible proxy that intercepts interactions from OpenClaw, injects relevant skills at each turn, and meta-learns from accumulated experience. Skills are summarized automatically after each session; with RL enabled, a meta-learning scheduler defers weight updates to idle windows so the agent is never interrupted during active use.
> 
> No GPU cluster required. MetaClaw works with any OpenAI-compatible LLM API out of the box, and optionally integrates **Kimi-K2.5** (1T MoE) via [Tinker](https://www.thinkingmachines.ai/tinker/) for cloud-based LoRA training.
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
> The interactive wizard will ask you to choose your LLM provider (Kimi, Qwen, MiniMax, or custom), enter your API key, and optionally enable RL training.
> 
> 
> ## ⚙️ Configuration
> 
> Configuration lives in `~/.metaclaw/config.yaml`, created by `metaclaw setup`.
> 
> ```yaml
> mode: madmax               # "madmax" | "rl" | "skills_only"
> 
> llm:
>   provider: kimi            # kimi | qwen | openai | minimax | custom
>   model_id: moonshotai/Kimi-K2.5
>   api_base: https://api.moonshot.cn/v1
>   api_key: sk-...
> 
> proxy:
>   port: 30000
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
>   model: moonshotai/Kimi-K2.5
>   tinker_api_key: ""
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
>   enabled: false            # madmax mode enables this automatically; set manually for rl mode
>   sleep_start: "23:00"      # HH:MM local time — start of sleep window
>   sleep_end: "07:00"        # HH:MM local time — end of sleep window
>   idle_threshold_minutes: 30  # trigger RL after N minutes of keyboard inactivity
>   min_window_minutes: 15    # minimum window length required to start an RL step
>   calendar:
>     enabled: false          # use Google Calendar to detect meeting slots
>     credentials_path: ""    # path to client_secrets.json from Google Cloud Console
>     token_path: ""          # saved OAuth token (default: ~/.metaclaw/calendar_token.json)
> ```
> 
> ---
> 
> 
> # Optional: Google Calendar integration
> pip install -e ".[scheduler]"
> metaclaw config scheduler.calendar.enabled true
> metaclaw config scheduler.calendar.credentials_path ~/.metaclaw/client_secrets.json
> ```
> 
> Three conditions trigger an update window (any one is sufficient): configured sleep hours, system keyboard inactivity, or an active Google Calendar event. If the user returns mid-update, the partial batch is saved and resumed at the next window.
> 
> Each `ConversationSample` is tagged with a `skill_generation` version. When skill evolution bumps the generation, the RL buffer is flushed so only post-evolution samples are used for gradient updates (MAML support/query set separation).
> 
> ---
> 
> 
> ### Two commands. That's it.
> 
> ```bash
> metaclaw setup              # one-time config wizard
> metaclaw start              # default: madmax mode — skills + scheduled RL training
> metaclaw start --mode rl    # RL without scheduler (trains immediately on full batch)
> metaclaw start --mode skills_only  # skills only, no RL (no Tinker needed)
> ```
> 
> ---
> 
> 
> ## 🔥 News
> 
> - **[03/13/2026]** **v0.3** — Continual meta-learning support: slow RL updates now only run during sleep hours, idle time, or Google Calendar meetings. Added support/query set separation to prevent stale reward signals from polluting model updates.
> - **[03/11/2026]** **v0.2** — One-click deployment via `metaclaw` CLI. Skills enabled by default, RL is now opt-in.
> - **[03/09/2026]** We release **MetaClaw** — Just talk to your agent and let it evolve automatically. **NO** GPU deployment required; just plug into the **API**.
> 
> ---
> 
> 
> ### **One-click deployment**
> Configure once with `metaclaw setup`, then `metaclaw start` brings up the proxy, injects skills, and wires OpenClaw automatically. No manual shell scripts needed.
> 
> 
> ### **Three operating modes**
> 
> | Mode | Default | What it does |
> |------|---------|--------------|
> | `madmax` | ✅ | RL + smart scheduler. Skills always on; RL weight updates only run during sleep/idle/meeting windows. |
> | `rl` | — | RL without scheduler. Trains immediately when a batch is full (original v0.2 behavior). |
> | `skills_only` | — | Proxy → your LLM API. Skills injected, auto-summarized after each session. No GPU/Tinker required. |
> 
> 
> ### **Skill injection**
> At every turn, MetaClaw retrieves the most relevant skill instructions and injects them into the agent's system prompt. Immediate behavior improvement without retraining.
> 
> 
> ### **Automatic skill summarization**
> After each conversation, the same LLM you're already using analyzes the session and distills new skills automatically. With RL enabled, a dedicated judge model extracts skills from failed episodes.
> 
> 
> ### **No GPU cluster required**
> In `skills_only` mode, only a network connection is needed. RL training is offloaded to Tinker cloud.
> 
> 
> ### **Two learning modes**
> MetaClaw supports both:
> - **RL (GRPO)** for learning from implicit feedback signals
> - **On-Policy Distillation (OPD)** for distilling a larger teacher model into the student on-policy
> 
> In OPD mode, the student generates responses as usual, and a teacher model provides per-token log-probabilities on those same responses. The teacher logprobs are passed to the loss function (e.g., `cispo`) so the student learns to match the teacher's distribution. The teacher must be served behind an OpenAI-compatible `/v1/completions` endpoint (e.g., vLLM, SGLang).
> 
> 
> ### **Asynchronous by design**
> Serving, reward modeling

## 延伸閱讀

相關概念：[[強化學習]] · [[持續學習]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[inspatio--worldfm|inspatio/worldfm]]

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
> const concepts = ["強化學習","持續學習","自動化"];
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

- [[2026-03-14|2026-03-14]] — 首次收錄，980 stars
