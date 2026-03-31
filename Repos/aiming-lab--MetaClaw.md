---
repo: aiming-lab/MetaClaw
url: https://github.com/aiming-lab/MetaClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: MIT
description: "🦞 Just talk to your agent — it learns and EVOLVES 🧬."
homepage: "https://arxiv.org/abs/2603.17187"
stars: 3051
stars_per_day: 145
forks: 301
open_issues: 5
created: 2026-03-09
pushed_at: 2026-03-29
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "agent"
release_tag: "v0.4.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "讓 AI 代理透過對話學習與進化，持續優化其能力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-19"
contributor_count: 5
engagement: "low"
issue_close_rate: 83
repo_size_kb: 78604
readme_length: 9887
bus_factor: 2
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:980,2026-03-14:981,2026-03-15:1139,2026-03-15:1141,2026-03-16:1323,2026-03-16:1325,2026-03-17:1470,2026-03-18:1646,2026-03-19:1870,2026-03-20:2071,2026-03-21:2216,2026-03-22:2274,2026-03-24:2527,2026-03-25:2610,2026-03-26:2663,2026-03-27:2751,2026-03-28:2837,2026-03-29:2913,2026-03-30:2989,2026-03-31:3051"
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
  - "讓 AI 代理透過對話學習與進化，持續優化其能力。"
---

# MetaClaw

**3.1k** stars · **145** stars/天 · 建立 21 天前 · Python · MIT

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

`ORG` `v0.4.0` `easy-install`

`agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` `online-learning` `openclaw` `reinforcement-learning` `skill-learning` `tinker`

> [!summary] 一句話摘要
> 讓 AI 代理透過對話學習與進化，持續優化其能力。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (145 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在 AI 代理中實現持續學習與適應的開發者和研究人員。
> **一句話重點** MetaClaw 的創新在於其持續學習能力，能夠在實時對話中不斷優化代理的技能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--MetaClaw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "agent" && p.file.name !== "aiming-lab--MetaClaw" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 agent 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的 AI 代理，值得一試。

> [!abstract] 核心創新
> MetaClaw 提供了持續學習的能力，能夠在實時對話中自動更新技能。

## 專案簡介

MetaClaw 是一個能夠在實際對話中學習與進化的 AI 代理。使用者只需與代理進行對話，MetaClaw 會將每次交互轉化為學習信號，從而使代理能夠在實際部署中不斷改進。這個過程中，MetaClaw 將模型放在代理後面，攔截互動並在每次交互中注入相關技能，並從累積的經驗中進行元學習。其核心賣點在於無需 GPU，能夠與任何 OpenAI 兼容的 LLM API 無縫整合。安裝過程中，使用者可以選擇不同的代理類型，並在 `metaclaw setup` 中進行配置，這使得整個過程非常簡便。

使用者可以選擇 `madmax` 模式，這樣在空閒時進行 RL 訓練而不會干擾到使用者的對話。這種設計使得 MetaClaw 在實時學習與使用者交互時能夠保持高效。其記憶層能夠持久化跨會話的事實、偏好和項目歷史，這樣代理能夠記住使用者的需求，即使在數週後也能提供相關的上下文。整體來看，MetaClaw 提供了一個靈活且強大的平台，適合需要持續學習與適應的 AI 應用場景。

**技術棧**：`Python` · `TypeScript` · `FastAPI` · `Torch` · `Transformers`

## 重點功能

- 持續學習 — 透過每次對話自動更新技能，無需離線訓練。
- 長期記憶 — 能夠持久化使用者偏好與項目歷史，並在每次交互中注入相關上下文。
- 多種代理支持 — 支援多種代理類型如 OpenClaw、CoPaw 等，使用者可根據需求選擇。
- 靈活的 RL 訓練 — 提供多種 RL 訓練模式，包括即時訓練與計劃訓練。
- 簡單的安裝與配置 — 透過 `metaclaw setup` 指令快速完成配置。

## 快速開始

1. 下載並解壓 MetaClaw 插件
```bash
curl -LO https://github.com/aiming-lab/MetaClaw/releases/download/v0.4.0/metaclaw-plugin.zip && unzip metaclaw-plugin.zip -d ~/.openclaw/extensions
```
2. 啟用插件並重啟服務
```bash
openclaw plugins enable metaclaw-openclaw && openclaw gateway restart
```
3. 運行設置向導
```bash
metaclaw setup
```

## 程式碼範例

```python
{
  "前置條件": "安裝 MetaClaw 並配置代理",
  "指令": "metaclaw start",
  "預期輸出": "MetaClaw 啟動代理，並自動配置所選的個人代理。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天內累積 3051 stars（145/天），forks 301（9.9%），顯示出強勁的增長潛力。這個專案的作者 huaxiuyao 和其他貢獻者在 AI 代理和持續學習領域有豐富的經驗。MetaClaw 解決了傳統 AI 代理在實時學習上的限制，之前的方案往往需要大量的離線訓練，無法快速適應使用者的需求。這個專案的推出引起了社群的關注，尤其是在 AI 代理的實用性和靈活性方面。高達 9.9% 的 forks/stars 比率顯示出許多開發者對這個專案的實際修改和使用意願。

## 適合誰使用

**目標受眾**：希望在 AI 代理中實現持續學習與適應的開發者和研究人員。

> [!example] 使用場景
> - 產品經理用它來持續優化 AI 代理的功能，因為它能夠根據實際對話學習並適應使用者需求。
> - 開發者用它來快速部署一個能夠學習的聊天機器人，因為無需 GPU 的設計降低了硬體要求。
> - 研究人員用它來測試不同的 RL 策略，因為它支持多種後端並能夠靈活配置。

## 架構分析

MetaClaw 採用代理模式，將使用者的模型放置在一個代理後面，並攔截所有的交互。這樣的設計使得系統能夠在不影響使用者體驗的情況下進行學習。透過配置的記憶層，系統能夠持久化使用者的偏好和歷史，這樣在每次交互時都能提供相關的上下文。

這種設計的代價是需要一定的配置時間，但能夠帶來更靈活的使用體驗。擴展性方面，由於系統架構是模組化的，可以根據需求添加或移除不同的功能模組。整體來看，這種設計使得 MetaClaw 能夠在多種場景中靈活應用。

## 技術深入分析

MetaClaw 的核心技術機制在於其元學習能力，能夠在每次對話中自動更新技能。這是通過將模型放在代理後面，並攔截所有的交互來實現的。系統的效能特性表現在無需 GPU 的設計上，使得它可以在多種環境中運行。設計取捨方面，選擇了模組化的架構，這樣可以根據需求靈活調整功能，但也帶來了一定的配置複雜性。技術風險方面，隨著使用者數量的增加，系統的擴展性可能受到挑戰，特別是在資料處理和記憶管理上。整合方面，MetaClaw 能夠與多種 LLM API 無縫整合，並且支援多種後端，這使得它在現有的技術生態中具有良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和配置指引，並包含多語言支持。安裝過程相對順暢，但初期配置可能需要一些時間。整體來說，對於新手來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 無需 GPU，降低了硬體要求。
> - 支持多種代理類型和後端，靈活性高。
> - 持續學習和記憶功能，使得代理能夠適應使用者需求。

> [!danger] 缺點
> - 初期配置可能較為繁瑣。
> - 對於大規模資料處理可能需要進一步優化。
> - 目前僅支援 Python 和 TypeScript，限制了使用範圍。

> [!warning] 注意事項
> - 目前僅支援 Python 和 TypeScript 環境。
> - 需要一定的配置時間來設置各種代理和後端。
> - 對於大規模的資料處理可能需要額外的性能優化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [aiming-lab/OpenClaw-Medical-Skills](https://github.com/aiming-lab/OpenClaw-Medical-Skills) | 專注於醫療領域的 AI 代理，提供特定的醫療技能，而 MetaClaw 更加通用，適用於多種場景。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 主要針對語音和語言處理，而 MetaClaw 提供更廣泛的代理功能和持續學習能力。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於開發醫療技能的 AI 代理，MetaClaw 則支持多種代理類型和靈活的學習模式。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於語音和語言處理，而 MetaClaw 提供更廣泛的代理功能和持續學習能力。 | 如果你的專案專注於語音處理，NemoClaw 可能是更好的選擇。 | medium，因為需要重新設計部分交互邏輯。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於開發醫療技能的 AI 代理，MetaClaw 則支持多種代理類型和靈活的學習模式。 | 如果你需要針對醫療領域的專用技能，這個工具會更適合。 | high，因為需要重新設計整個代理架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MetaClaw** | **NemoClaw** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | NemoClaw 專注於語音和語言處理，而 MetaClaw 提供更廣泛的代理功能和持續學習能力。 | 專注於開發醫療技能的 AI 代理，MetaClaw 則支持多種代理類型和靈活的學習模式。 |
> | 遷移成本 | - | medium，因為需要重新設計部分交互邏輯。 | high，因為需要重新設計整個代理架構。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於語音處理，NemoClaw 可能是更好的選 | 如果你需要針對醫療領域的專用技能，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案和實驗性質的應用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝依賴可能會出現衝突
  - 解法：確保使用虛擬環境進行安裝
- [MEDIUM] 記憶功能在高並發情況下可能會導致性能下降
  - 解法：考慮增加記憶層的處理能力
- [MEDIUM] 某些代理類型的配置可能不夠直觀
  - 解法：參考官方文檔中的配置示例

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 AI 代理 | 非常適合 | 其輕量級設計和持續學習能力非常符合小型團隊的需求。 |
| 需要快速部署的聊天機器人 | 適合 | 無需 GPU 的設計使得部署成本低。 |
| 大型企業的核心 AI 系統 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| AI 研究機構的實驗性質專案 | 普通 | 雖然具備創新性，但可能需要更多的測試和調整。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的 AI 代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MetaClaw 本身不需要高權限，但在使用過程中可能需要存取 API 金鑰等敏感資訊，建議妥善管理這些憑證。

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
| Forks | 301 |
| Open Issues | 5 |
| Issue 解決率 | 83% (25 closed) |
| 最後推送 | 2026-03-29 |
| 建立日期 | 2026-03-09 |
| 官方網站 | [Link](https://arxiv.org/abs/2603.17187) |
| Repo 大小 | 76.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/MetaClaw) |
| Topics | `agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `httpx` `fastapi` `uvicorn` `numpy` `sentence-transformers` `openai` `wandb`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 97
>     "TypeScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 36 |
> | [@ImKeTT](https://github.com/ImKeTT) | 23 |
> | [@GRAPE-VLA](https://github.com/GRAPE-VLA) | 21 |
> | [@robottest2026-spec](https://github.com/robottest2026-spec) | 16 |
> | [@richard-peng-xia](https://github.com/richard-peng-xia) | 14 |

**最新版本**：v0.4.0 — v0.4.0 — Contexture Layer (2026-03-25)

> [!info]- Release Notes
> ## What's New
> 
> **Contexture layer**: MetaClaw now persists cross-session memory for users and projects. Relevant facts, preferences, and project history are automatically retrieved and injected into prompts. Includes adaptive memory policy, background consolidation, and an optional memory sidecar service.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度尚可。
**連結**：[文件](https://arxiv.org/abs/2603.17187)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26 ~ 2026-03-29）
> **活躍天數** 4 天 · **最新 commit** fix: use correct HTTP-Referer URL for OpenRouter headers

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#41](https://github.com/aiming-lab/MetaClaw/issues/41) | 🚀 Growth Strategy Offer — Maximize MetaClaw's Launch Moment | 0 | 0 |
> | [#32](https://github.com/aiming-lab/MetaClaw/issues/32) | ADD DOCKER DEPLOYMENT | 0 | 1 |
> | [#26](https://github.com/aiming-lab/MetaClaw/issues/26) | Release MetaClaw benchmarks and skill bank on Hugging Face | 0 | 0 |
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
> 
> [🇨🇳 中文](./assets/README_ZH.md) • [🇯🇵 日本語](./assets/README_JA.md) • [🇰🇷 한국어](./assets/README_KO.md) • [🇫🇷 Français](./assets/README_FR.md) • [🇩🇪 Deutsch](./assets/README_DE.md) • [🇪🇸 Español](./assets/README_ES.md) • [🇧🇷 Português](./assets/README_PT.md) • [🇷🇺 Русский](./assets/README_RU.md) • [🇮🇹 Italiano](./assets/README_IT.md) • [🇻🇳 Tiếng Việt](./assets/README_VI.md) • [🇦🇪 العربية](./assets/README_AR.md) • [🇮🇳 हिन्दी](./assets/README_HI.md)
> 
> [Overview](#-overview) • [Quick Start](#-quick-start) • [Multi-Claw Support](#-multi-claw-support) • [Configuration](#️-configuration) • [Skills Mode](#-skills-mode) • [RL Mode](#-rl-mode) • [MadMax Mode](#-madmax-mode-default) • [Memory](#-memory) • [Citation](#-citation)
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> 
> ### 1. Install
> 
> **OpenClaw (one-click):** use the [v0.4.0](https://github.com/aiming-lab/MetaClaw/releases/tag/v0.4.0) release—run the snippet below, then `metaclaw setup` and `metaclaw start`. More detail (Windows, mirrors, config, troubleshooting): [`extensions/metaclaw-openclaw/README.md`](./extensions/metaclaw-openclaw/README.md).
> 
> ```bash
> curl -LO https://github.com/aiming-lab/MetaClaw/releases/download/v0.4.0/metaclaw-plugin.zip
> unzip metaclaw-plugin.zip -d ~/.openclaw/extensions
> openclaw plugins enable metaclaw-openclaw && openclaw gateway restart
> ```
> 
> **pip** (PyPI or this repo):
> 
> ```bash
> pip install -e .                        # skills_only mode (lightweight)
> pip install -e ".[rl]"                  # + RL training support (torch, transformers, tinker)
> pip install -e ".[evolve]"              # + skill evolution via OpenAI-compatible LLM
> pip install -e ".[scheduler]"           # + Google Calendar integration for scheduler
> pip install -e ".[rl,evolve,scheduler]" # recommended for full RL + scheduler setup
> ```
>  (Optional) WeChat integration uses the official [`@tencent-weixin/openclaw-weixin`](https://github.com/nicepkg/openclaw-weixin) plugin. MetaClaw auto-installs it when WeChat is enabled:
> 
> ```bash
> metaclaw config wechat.enabled true
> metaclaw start
> ```
> 
> The plugin is installed automatically on `metaclaw start`. You can also install it manually:
> 
> ```bash
> npx -y @tencent-weixin/openclaw-weixin-cli@latest install
> ```
> 
> To switch WeChat accounts (re-login with a new QR code):
> 
> ```bash
> metaclaw start --wechat-relogin
> ```
> 
> If you want to run `rl.backend=mint`, install the MinT compatibility package separately in the same environment, for example [`mindlab-toolkit`](https://github.com/MindLab-Research/mindlab-toolkit). Similarly, for `rl.backend=weaver`, install [`nex-weaver`](https://github.com/nex-agi/weaver) separately. MetaClaw keeps these dependencies out of the default package so RL users can choose Tinker, MinT, or Weaver explicitly.
> 
> 
> ### Setup
> 
> Pick your agent during `metaclaw setup` (the first question in the wizard):
> 
> ```
> Personal agent to configure (openclaw/copaw/ironclaw/picoclaw/zeroclaw/nanoclaw/nemoclaw/hermes/none) [openclaw]:
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
> metaclaw config claw_type hermes     # switch to Hermes Agent
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
> No GPU cluster required. MetaClaw works with any OpenAI-compatible LLM API out of the box, and uses a Tinker-compatible backend for cloud-based LoRA training. [Tinker](https://www.thinkingmachines.ai/tinker/) is the default reference path; MinT and Weaver can be enabled through separate compatibility packages when needed.
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
> 2. **Choose your LLM provider** — Kimi, Qwen, OpenAI, Volcano Engine, or custom
> 3. **Enter your API key** and optionally enable RL training
> 
> MetaClaw's RL path can switch explicitly between `tinker`, `mint`, and `weaver`. `auto` is the recommended default and will infer the backend from credentials, base URLs, or environment variables when the corresponding package is installed.
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
> **Weaver**:
> 
> ```bash
> metaclaw config rl.backend weaver
> metaclaw config rl.api_key sk-...
> metaclaw config rl.base_url https://weaver-console.nex-agi.cn
> metaclaw config rl.model Qwen/Qwen3-8B
> ```
> 
> Legacy aliases `rl.tinker_api_key` and `rl.tinker_base_url` are still accepted for backward compatibility.
> 
> 
> # Optional: Google Calendar integration
> pip install -e ".[scheduler]"
> metaclaw config scheduler.calendar.enabled true
> metaclaw config scheduler.calendar.credentials_path ~/.metaclaw/client_secrets.json
> ```
> 
> If the user returns mid-update, the partial batch is saved and resumed at the next window.
> 
> Each `ConversationSample` is tagged with a `skill_generation` version. When skill evolution bumps the generation, the RL buffer is flushed so only post-evolution samples are used for gradient updates (MAML support/query set separation).
> 
> ---
> 
> 
> ### Configuration
> 
> ```yaml
> memory:
>   enabled: false
>   top_k: 5                       # memories injected per turn
>   max_tokens: 800                # token budget for memory block
>   retrieval_mode: hybrid         # keyword | semantic | hybrid
>   consolidation_interval: 10     # consolidate every N sessions
>   store_path: ~/.metaclaw/memory # local storage path
> ```
> 
> 
> ### Memory sidecar (optional)
> 
> For deployments that require process isolation, MetaClaw ships with a standalone memory sidecar service (`openclaw-metaclaw-memory`). When configured, the main proxy delegates all memory reads and writes to the sidecar over a local HTTP API.
> 
> ```bash
> metaclaw config memory.sidecar_url http://127.0.0.1:30001
> ```
> 
> ---
> 
> 
> ### Two commands. That's it.
> 
> ```bash
> metaclaw setup              # one-time config wizard
> metaclaw start              # default: madmax mode — skills + scheduled RL training
> metaclaw start --daemon     # run in background, logs -> ~/.metaclaw/metaclaw.log
> metaclaw start --daemo

## 延伸閱讀

相關概念：[[持續學習]] · [[強化學習]] · [[元學習]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/aiming-lab/MetaClaw) · [官方網站](https://arxiv.org/abs/2603.17187)

## 相關收錄

> [!note]- 直接競品（同子分類：agent）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "agent" AND file.name != "aiming-lab--MetaClaw"
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
> const concepts = ["持續學習","強化學習","元學習"];
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
