---
repo: aiming-lab/MetaClaw
url: https://github.com/aiming-lab/MetaClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: MIT
description: "🦞 Just talk to your agent — it learns and EVOLVES 🧬."
homepage: "https://arxiv.org/abs/2603.17187"
stars: 2610
stars_per_day: 174
forks: 268
open_issues: 5
created: 2026-03-09
pushed_at: 2026-03-24
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "agent"
release_tag: "v0.3.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "讓 AI 代理透過每次對話不斷學習與進化。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-19"
contributor_count: 5
engagement: "medium"
issue_close_rate: 81
repo_size_kb: 70401
readme_length: 9844
bus_factor: 2
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:980,2026-03-14:981,2026-03-15:1139,2026-03-15:1141,2026-03-16:1323,2026-03-16:1325,2026-03-17:1470,2026-03-18:1646,2026-03-19:1870,2026-03-20:2071,2026-03-21:2216,2026-03-22:2274,2026-03-24:2527,2026-03-25:2610"
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
  - "讓 AI 代理透過每次對話不斷學習與進化。"
---

# MetaClaw

**2.6k** stars · **174** stars/天 · 建立 15 天前 · Python · MIT

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

`ORG` `v0.3.3` `easy-install`

`agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` `online-learning` `openclaw` `reinforcement-learning` `skill-learning` `tinker`

> [!summary] 一句話摘要
> 讓 AI 代理透過每次對話不斷學習與進化。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (174 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在小型環境中快速實驗 AI 代理的開發者，特別是那些不具備高性能計算資源的團隊。
> **一句話重點** MetaClaw 的最大優勢在於其即時學習能力，能夠在實際對話中不斷進化，這在目前的 AI 代理工具中是相對獨特的。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到靈活的 AI 代理，值得一試。

> [!abstract] 核心創新
> MetaClaw 透過實時對話學習，實現了 AI 代理的持續進化，無需高性能硬體。

## 專案簡介

MetaClaw 是一個能夠在實際對話中進行 meta-learning 的 AI 代理，透過與用戶的互動不斷學習和進化。使用者只需與代理對話，MetaClaw 會將每次對話轉化為學習信號，從而在真實環境中持續改進，而不僅僅依賴離線訓練。安裝過程簡單，使用者只需執行 `metaclaw setup` 和 `metaclaw start` 來啟動代理。這個工具的賣點在於它不需要 GPU，並且可以與任何兼容 OpenAI 的 LLM API 一起使用，這使得它在資源有限的環境中也能運行。技術上，MetaClaw 在代理後面設置了一個代理伺服器，攔截與用戶的互動，並在每次交互中注入相關技能，這樣可以有效地進行學習。與其他工具相比，如 OpenClaw 和 CoPaw，MetaClaw 提供了更靈活的技能注入和學習機制，並且支持多種後端選擇，如 Tinker、MinT 和 Weaver。

這使得它在需要快速適應和進化的場景中表現出色。使用者可以選擇啟用強化學習模式，並根據需要調整配置，這在需要長期運行的應用中尤為重要。常見的問題包括安裝路徑不匹配和 Docker 部署需求，這些都在社群的活躍討論中有所反映。整體來看，MetaClaw 目前處於 beta 階段，對於需要快速迭代和持續學習的團隊來說，這是一個值得考慮的選擇。適合那些希望在小型團隊中快速實驗 AI 代理的開發者，但在大型生產環境中可能需要更多的穩定性和支持。

**技術棧**：`Python` · `TypeScript` · `FastAPI` · `Torch`

## 重點功能

- 即時學習 — 透過每次對話轉化為學習信號，實現持續進化。
- 多種代理支持 — 支援 OpenClaw、CoPaw、IronClaw 等多種代理選擇，靈活配置。
- 強化學習模式 — 可選擇啟用強化學習，根據實際使用情況進行調整。
- 簡單安裝 — 一鍵安裝和配置，快速上手，無需複雜的環境設置。
- 自動技能注入 — 在每次交互中自動注入相關技能，提升代理的適應性。

## 快速開始

1. 下載並安裝 MetaClaw 插件
```bash
curl -LO https://github.com/aiming-lab/MetaClaw/releases/download/v0.3.3/metaclaw-plugin.zip
```
2. 解壓並啟用插件
```bash
unzip metaclaw-plugin.zip -d ~/.openclaw/extensions/metaclaw-openclaw && openclaw plugins enable metaclaw-openclaw
```
3. 啟動 MetaClaw
```bash
metaclaw setup && metaclaw start
```

## 程式碼範例

```python
{
  "前置條件": "安裝 MetaClaw 並啟用插件",
  "指令": "metaclaw setup",
  "預期輸出": "啟動配置向導，選擇個人代理和 LLM 提供者"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 2610 stars（174/天），forks 268（10.3%），顯示出不錯的增長潛力。這個專案的作者 huaxiuyao 和其他貢獻者在 AI 和代理技術方面有豐富的經驗，之前的專案如 OpenClaw 也受到廣泛關注。MetaClaw 解決了現有代理在持續學習和適應性方面的不足，特別是在不需要 GPU 的情況下。社群中對於 Docker 部署的需求和技能庫的擴展引發了討論，顯示出使用者對於功能的期待和需求。這個工具的設計理念與當前 AI 代理技術的發展趨勢相符，特別是在強化學習和持續學習的應用場景中。forks/stars 比率為 10.3%，顯示出有相當一部分使用者對於修改和擴展的興趣。

## 適合誰使用

**目標受眾**：希望在小型環境中快速實驗 AI 代理的開發者，特別是那些不具備高性能計算資源的團隊。

> [!example] 使用場景
> - AI 研究人員用它來開發和測試自適應的 AI 代理，因為它能夠在實際對話中學習，提升代理的智能水平。
> - 小型創業團隊用它來快速構建客戶服務聊天機器人，因為不需要 GPU 的設計降低了硬體需求，適合資源有限的環境。
> - 教育工作者用它來創建互動式學習工具，因為它能夠根據學生的反饋不斷調整學習內容，提升學習效果。

## 架構分析

MetaClaw 採用代理伺服器架構，將用戶的代理模型置於代理後面，攔截並處理與用戶的互動。這樣的設計使得代理能夠在不改變用戶端的情況下進行技能注入和學習。資料流方面，MetaClaw 會在每次交互中記錄學習信號，並在空閒時間進行權重更新，這樣可以避免在活躍使用期間中斷服務。選擇這種架構的代價在於可能需要額外的配置和調整，但卻能提供靈活的擴展性。整體來看，這種設計能夠支持多種後端和代理類型，並且在未來的擴展中具有良好的適應性。

## 技術深入分析

MetaClaw 的核心技術機制在於其代理伺服器架構，這使得它能夠在不改變用戶端的情況下進行技能注入和學習。使用 FastAPI 作為後端框架，確保了高效的 API 請求處理。效能方面，MetaClaw 能夠在不需要 GPU 的情況下運行，這對於資源有限的環境而言是一大優勢。設計上，選擇 Python 和 TypeScript 作為主要開發語言，使得開發和維護相對簡單，但也可能帶來一定的性能瓶頸。技術風險方面，隨著使用者數量的增加，代理伺服器的負載可能成為瓶頸，需考慮擴展方案。整合方面，MetaClaw 能夠與多種 LLM 提供者無縫對接，並且支持與現有的 CI/CD 流程集成，這使得它在實際應用中具備良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和範例，對於新手來說相對友好。安裝過程順暢，但 Windows 用戶需注意路徑問題。文件提供多語言支持，方便不同語言的使用者理解。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 靈活的代理選擇，支持多種代理類型和 LLM 提供者。
> - 無需 GPU，降低了硬體需求，適合資源有限的環境。
> - 即時學習能力，能夠根據用戶的反饋不斷改進。

> [!danger] 缺點
> - 安裝過程中可能遇到路徑問題，特別是在 Windows 環境下。
> - 強化學習模式的配置可能對新手造成困難。
> - 在高負載情況下性能可能下降，需根據需求調整配置。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 用戶需注意安裝路徑問題。
> - 強化學習模式可能需要額外的配置，對新手來說有一定的學習曲線。
> - 在高負載情況下，代理的性能可能會受到影響，需根據實際需求調整配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [aiming-lab/OpenClaw](https://github.com/aiming-lab/OpenClaw) | OpenClaw 提供基本的代理功能，但不具備 MetaClaw 的即時學習和進化能力，適合靜態應用場景。 |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | AutoResearchClaw 專注於自動化研究任務，而 MetaClaw 更加靈活，適合多種交互場景。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於深度學習模型的訓練，而 MetaClaw 更加注重在實際對話中的學習和適應。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [aiming-lab/OpenClaw](https://github.com/aiming-lab/OpenClaw) | OpenClaw 提供基本的代理功能，但不具備 MetaClaw 的即時學習和進化能力。 | 如果需要一個穩定的代理工具且不需要即時學習功能，OpenClaw 是不錯的選擇。 | low，因為兩者的接口相似，遷移成本低。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於深度學習模型的訓練，而 MetaClaw 更加注重在實際對話中的學習和適應。 | 如果你的應用需要強大的深度學習支持，NemoClaw 可能更合適。 | medium，因為需要調整模型訓練的流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MetaClaw** | **OpenClaw** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 提供基本的代理功能，但不具備 MetaClaw 的即時學習和進化能力。 | NemoClaw 專注於深度學習模型的訓練，而 MetaClaw 更加注重在實際對話中的學習和適應。 |
> | 遷移成本 | - | low，因為兩者的接口相似，遷移成本低。 | medium，因為需要調整模型訓練的流程。 |
> | 適用場景 | 主要場景 | 如果需要一個穩定的代理工具且不需要即時學習功能，OpenCl | 如果你的應用需要強大的深度學習支持，NemoClaw 可能更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊進行實驗，不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 上安裝路徑不匹配，可能導致無法啟動
  - 解法：確保使用 PowerShell 並檢查路徑設置
- [MEDIUM] 強化學習模式配置複雜，可能對新手造成困難
  - 解法：參考官方文檔中的配置範例
- [MEDIUM] 在高負載情況下性能下降
  - 解法：根據實際需求調整代理配置，減少同時請求數量

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊開發 AI 聊天機器人 | 非常適合 | 能夠快速學習和適應用戶需求，降低硬體成本。 |
| 教育機構使用 AI 進行互動式學習 | 適合 | 即時學習能力能夠根據學生反饋調整教學內容。 |
| 大型企業需要穩定的 AI 代理 | 不適合 | 目前處於 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的 AI 代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MetaClaw 本身不需要高權限，且不存取敏感資料，但需注意依賴庫的安全性。

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
| Forks | 268 |
| Open Issues | 5 |
| Issue 解決率 | 81% (21 closed) |
| 最後推送 | 2026-03-24 |
| 建立日期 | 2026-03-09 |
| 官方網站 | [Link](https://arxiv.org/abs/2603.17187) |
| Repo 大小 | 68.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/MetaClaw) |
| Topics | `agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `httpx` `fastapi` `uvicorn` `numpy` `sentence-transformers` `openai` `wandb`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "TypeScript" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 36 |
> | [@ImKeTT](https://github.com/ImKeTT) | 23 |
> | [@GRAPE-VLA](https://github.com/GRAPE-VLA) | 21 |
> | [@jimmmchen](https://github.com/jimmmchen) | 8 |
> | [@richard-peng-xia](https://github.com/richard-peng-xia) | 7 |

**最新版本**：v0.3.3 — MetaClaw Plugin (2026-03-23)

> [!info]- Release Notes
> ## One-Click Install
> Download the zip, extract, enable — MetaClaw environment is set up automatically.
> ### macOS / Linux
> ```bash
> curl -LO https://github.com/aiming-lab/MetaClaw/releases/download/v0.3.3/metaclaw-plugin.zip
> unzip metaclaw-plugin.zip -d ~/.openclaw/extensions/metaclaw-openclaw
> openclaw plugins enable metaclaw-openclaw
> openclaw gateway restart
> ```
> ### Windows (PowerShell)
> ```powershell
> Invoke-WebRequest -Uri https://github.com/aiming-lab/MetaClaw/releases/download/v0.3.3/metaclaw-plugin.zip -OutFile metaclaw-plugin.zip
> Expand-Archive metaclaw-plugin.zip -DestinationPath $env:USERPROFILE\.openclaw\extensions\metaclaw-openclaw
> openclaw plugins enable metaclaw-openclaw
> openclaw gateway restart
> ```
> ### Then run
> ```bash
> metaclaw setup
> metaclaw start
> ```
> ### What the plugin does automatically
> - Creates an isolated Python virtual environment (`.venv`)
> - Installs MetaClaw (`[rl,evolve,scheduler]`) via pip
> - Installs `metaclaw` CLI wrapper and configures PATH (macOS / Linux / Windows)
> - Patches outbound LLM `fetch` to inject `X-Session-Id` / `X-Turn-Type` headers
> ### Requirements
> - Python ≥ 3.11
> - OpenClaw (any version)
> - macOS / Linux / Windows

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題，Issue 解決率達 81%。
**連結**：[文件](https://arxiv.org/abs/2603.17187)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-22 ~ 2026-03-24）
> **活躍天數** 3 天 · **最新 commit** [fix] fix windows installation path mismatch

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
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
> **OpenClaw (one-click):** use the [v0.3.3](https://github.com/aiming-lab/MetaClaw/releases/tag/v0.3.3) release—run the snippet below, then `metaclaw setup` and `metaclaw start`. More detail (Windows, mirrors, config, troubleshooting): [`extensions/metaclaw-openclaw/README.md`](./extensions/metaclaw-openclaw/README.md).
> 
> ```bash
> curl -LO https://github.com/aiming-lab/MetaClaw/releases/download/v0.3.3/metaclaw-plugin.zip
> unzip metaclaw-plugin.zip -d ~/.openclaw/extensions/metaclaw-openclaw
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
> 2. **Choose your LLM provider** — Kimi, Qwen, MiniMax, or custom
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
> claw_type: openclaw        # "openclaw" | "copaw" | "ironclaw" | "picoclaw" | "zeroclaw" | "nanoclaw" | "nemoclaw" | "hermes" | "none"
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
>   backend: auto             # "auto" | "tinker" | "mint" | "weaver"
>   model: moonshotai/Kimi-K2.5
>   api_key: ""
>   base_url: ""              # optional backend end

## 延伸閱讀

相關概念：[[強化學習]] · [[持續學習]] · [[元學習]]

相關專案：[[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

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
> const concepts = ["強化學習","持續學習","元學習"];
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
