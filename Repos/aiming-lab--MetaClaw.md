---
repo: aiming-lab/MetaClaw
url: https://github.com/aiming-lab/MetaClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: MIT
description: "Just talk to your agent — it learns and EVOLVES."
homepage: ""
stars: 1325
stars_per_day: 221
forks: 172
open_issues: 2
created: 2026-03-09
pushed_at: 2026-03-14
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "強化學習"
release_tag: "v0.3.1"
install_complexity: "medium"
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
issue_close_rate: 71
repo_size_kb: 67589
readme_length: 9523
bus_factor: 2
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:980,2026-03-14:981,2026-03-15:1139,2026-03-15:1141,2026-03-16:1323,2026-03-16:1325"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
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

**1.3k** stars · **221** stars/天 · 建立 6 天前 · Python · MIT

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

`ORG` `v0.3.1`

`agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` `online-learning` `openclaw` `reinforcement-learning` `skill-learning` `tinker`

> [!summary] 一句話摘要
> 讓 AI 代理透過對話學習並持續進化。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (221 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望開發能夠持續學習的 AI 代理的開發者。
> **一句話重點** MetaClaw 的設計讓 AI 代理能夠在實際使用中不斷學習，這是傳統方法無法實現的。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到即時學習的 AI 代理，值得一試。

> [!abstract] 核心創新
> MetaClaw 透過即時對話學習，實現了 AI 代理的持續進化。

## 專案簡介

MetaClaw 是一個能夠在實際對話中進行元學習的 AI 代理。用戶只需與代理對話，MetaClaw 便會將每次交互轉化為學習信號，讓代理能夠在實際運行中不斷改進，而非僅依賴離線訓練。其核心機制是將模型放置在一個兼容 OpenAI 的代理後面，攔截交互並在每次交互中注入相關技能，並從累積的經驗中進行元學習。使用者可以透過簡單的指令如 `metaclaw config rl.backend mint` 來設定使用的 RL 後端，並透過 `metaclaw config rl.api_key` 來配置 API 金鑰。這種設計的優勢在於無需 GPU 集群，並且能夠即時學習，讓代理在活躍使用中不被打斷。技術上，MetaClaw 使用了 Tinker 和 MinT 作為 RL 訓練後端，並且支持多種 LLM 提供者，如 Kimi 和 Qwen，這使得它在多樣性和靈活性上具有優勢。

相較於其他工具，MetaClaw 的獨特之處在於其即時學習能力，這使得它在需要快速適應變化的場景中表現出色。使用者在實際操作中可能會遇到配置依賴的問題，特別是在使用 MinT 時需要額外安裝相應的兼容包。這個專案目前處於穩定的 beta 階段，適合希望在 AI 代理中實現持續學習的開發者。未來六個月內，預期將會有更多的後端支持和功能擴展。適合的使用情境包括需要快速反應的客戶服務代理或教育輔助工具，而在需要高效能計算的場景下可能會感到不適合。

**技術棧**：`Python 3.8` · `FastAPI` · `Torch` · `Transformers >=4.51.1`

## 重點功能

- 即時學習 — 透過每次對話將學習信號轉化為改進，無需離線訓練。
- 多後端支持 — 支持 Tinker 和 MinT 作為 RL 訓練後端，靈活配置。
- 兼容多種 LLM — 可與 Kimi、Qwen、Claude 等多個 LLM 提供者配合使用。
- 自動技能注入 — 在每次交互中自動注入相關技能，提升對話質量。
- 輕量安裝 — 無需 GPU，簡單的 pip 安裝即可運行。

## 快速開始

1. 安裝基本依賴
```bash
pip install -e .
```
2. 安裝 RL 訓練支持
```bash
pip install -e '.[rl]'
```
3. 配置 RL 後端為 MinT
```bash
metaclaw config rl.backend mint
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1325 stars（221/天），forks 172（13.0%），顯示出強勁的增長潛力。作者 huaxiuyao 和團隊在 AI 和機器學習領域有豐富的經驗，解決了傳統 AI 代理在實時學習上的不足，讓代理能夠在實際運行中不斷進化。此專案的推出引起了社群的廣泛關注，尤其是在 AI 代理和強化學習的交集上。技術上，隨著 LLM 和 RL 的進步，這個工具的可行性大幅提升。forks/stars 比率為 13.0%，顯示出不少使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望開發能夠持續學習的 AI 代理的開發者。

> [!example] 使用場景
> - 客服專員用它來即時回應客戶問題，因為它能從每次對話中學習並改進回應質量。
> - 教育工作者用它來輔助學生學習，因為它能根據學生的反饋不斷調整教學策略。
> - 開發者用它來測試和優化 AI 代理的性能，因為它支持多種 LLM 提供者，靈活性高。

## 架構分析

MetaClaw 採用模組化設計，核心是將 LLM 代理放置在 OpenAI 兼容的代理後面，這樣可以攔截和處理用戶的交互。資料流中，代理會在每次交互中注入技能，並將學習信號回饋給模型。這種設計使得代理能夠在活躍使用中進行學習，而不會影響用戶體驗。選擇 Tinker 和 MinT 作為後端的原因在於它們提供了靈活的 RL 訓練支持，代價是需要額外的配置和依賴管理。擴展性方面，MetaClaw 能夠支持多種 LLM，但在大型模型的運行效率上可能會受到限制，特別是在資源有限的環境中。

## 技術深入分析

MetaClaw 的核心技術在於其元學習能力，使用了強化學習算法來持續改進代理的性能。其資料流設計允許在每次用戶交互中注入技能，這樣可以在不影響用戶體驗的情況下進行學習。效能上，MetaClaw 不需要 GPU，這使得它能夠在資源有限的環境中運行，但這也意味著在處理大型模型時可能會遇到瓶頸。選擇 Python 作為開發語言的好處在於其豐富的生態系統和對機器學習的良好支持，但這也可能導致依賴管理的複雜性。技術風險方面，MetaClaw 依賴於外部 API 的穩定性，這可能在高負載時影響性能。整合方面，與主流框架的兼容性良好，但在實際使用中可能需要針對特定情境進行調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多語言支持，安裝過程相對順暢，但需要注意依賴包的配置。提供了良好的入門指南，讓新手能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 支持即時學習，能夠快速適應用戶需求。
> - 靈活的後端選擇，適合不同的使用場景。
> - 無需高性能硬體，降低了使用門檻。

> [!danger] 缺點
> - 需要額外安裝依賴包，增加了配置複雜度。
> - 對於大型模型的支持可能需要更多的資源。
> - 目前仍處於 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支持 Python 環境，無法在其他語言中使用。
> - 需要額外安裝 MinT 兼容包以支持特定功能。
> - 對於大型模型的支持可能需要額外的計算資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [aiming-lab/OpenClaw](https://github.com/aiming-lab/OpenClaw) | OpenClaw 專注於特定領域的技能學習，而 MetaClaw 提供更廣泛的即時學習能力。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，而 MetaClaw 的應用範圍更廣，支持多種 LLM。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於資料同步，而 MetaClaw 專注於即時學習和進化。 | 如果你的需求是資料同步而非即時學習，parsync 會是更合適的選擇。 | low，因為兩者的功能範圍不同，遷移不會涉及太多重疊。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了更強的安全性功能，而 MetaClaw 更加專注於學習和適應。 | 如果你的應用需要強化的安全性，Shadowbroker 會是更好的選擇。 | medium，因為需要重新設計部分功能以適應安全性需求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MetaClaw** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於資料同步，而 MetaClaw 專注於即時學習和進化。 | Shadowbroker 提供了更強的安全性功能，而 MetaClaw 更加專注於學習和適應。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會涉及太多重疊。 | medium，因為需要重新設計部分功能以適應安全性需求。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非即時學習，parsync 會是更合 | 如果你的應用需要強化的安全性，Shadowbroker 會是 |

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

- **[HIGH]** 在使用 MinT 時，可能會遇到依賴包未安裝的問題。
  - 解法：確保先安裝 mindlab-toolkit。
- [MEDIUM] 在高負載情況下，可能會影響代理的即時反應。
  - 解法：考慮使用較小的模型以減少資源消耗。
- [MEDIUM] 在某些 LLM 上，可能會出現兼容性問題。
  - 解法：檢查 LLM 的兼容性列表，選擇支持的模型。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 AI 代理 | 非常適合 | 能夠快速適應用戶需求，並且無需高性能硬體。 |
| 大型企業的客服系統 | 普通 | 在高負載情況下可能會影響即時反應。 |
| 教育機構的輔助教學工具 | 非常適合 | 能夠根據學生的反饋不斷調整教學策略。 |
| 需要高效能計算的 AI 應用 | 不適合 | 對於大型模型的支持可能需要額外的計算資源。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到即時學習的 AI 代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶的對話資料，依賴鏈的信任程度高，適合在 CI/CD 中使用。

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
| Forks | 172 |
| Open Issues | 2 |
| Issue 解決率 | 71% (5 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-09 |
| Repo 大小 | 66.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/MetaClaw) |
| Topics | `agent` `ai-agent` `continual-learning` `fine-tuning` `llm` `lora` `meta-learning` `metaclaw` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `httpx` `fastapi` `uvicorn` `numpy` `sentence-transformers` `openai` `wandb`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 26 |
> | [@ImKeTT](https://github.com/ImKeTT) | 15 |
> | [@GRAPE-VLA](https://github.com/GRAPE-VLA) | 14 |
> | [@jimmmchen](https://github.com/jimmmchen) | 6 |
> | [@robottest2026-spec](https://github.com/robottest2026-spec) | 5 |

**最新版本**：v0.3.1 — v0.3.1 — MinT Backend Support (2026-03-14)

> [!info]- Release Notes
> ## What's New
> 
> - **MinT backend support**: RL training now works with both Tinker and MinT. Configurable via `rl.backend` (auto/tinker/mint).
> - **Backend abstraction**: New `rl.backend`, `rl.api_key`, and `rl.base_url` config keys. Legacy `rl.tinker_api_key` / `rl.tinker_base_url` still accepted.
> - **Auto detection**: `rl.backend=auto` (default) infers MinT from Mint-style credentials when the MinT package is installed.
> - **Optional dependency**: MinT compatibility via [`mindlab-toolkit`](https://github.com/MindLab-Research/mindlab-toolkit), installed separately to keep the default package lightweight.
> 
> ## Quick Start with MinT
> 
> ```bash
> metaclaw config rl.backend mint
> metaclaw config rl.api_key sk-mint-...
> metaclaw config rl.base_url https://mint.macaron.xin/
> metaclaw config rl.model Qwen/Qwen3-4B-Instruct-2507
> metaclaw start
> ```
> 
> **Full Changelog**: https://github.com/aiming-lab/MetaClaw/compare/v0.3.0...v0.3.1

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多次提交和問題解決。
**連結**：[文件](https://github.com/aiming-lab/MetaClaw#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-14 ~ 2026-03-14）
> **活躍天數** 1 天 · **最新 commit** [bug] fixed issue 11&12

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/aiming-lab/MetaClaw/issues/14) | Modal Support | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Just talk to your agent — it learns and *EVOLVES*.
> 
> Inspired by how the brain learns. Meta-learn and evolve your 🦞 from every conversation in the wild. No GPU required. Works with Kimi, Qwen, Claude, MiniMax, and more.
> 
> ⚡ Supported LLM Providers & Platforms
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
> 🧬 RL Training Backends for Weight Evolution
> 
>   
>     
>   
>   Tinker
> 
>   
>     
>   
>   MinT
> 
>   MoreComing
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
> [Overview](#-overview) • [Quick Start](#-quick-start) • [Configuration](#️-configuration) • [Skills Mode](#-skills-mode) • [RL Mode](#-rl-mode) • [MadMax Mode](#-madmax-mode-default) • [Citation](#-citation)
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
> The interactive wizard will ask you to choose your LLM provider (Kimi, Qwen, MiniMax, or custom), enter your API key, and optionally enable RL training.
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
> metaclaw start --mode rl        # Force RL mode (no scheduler) for this session
> metaclaw start --mode skills_only  # Force skills-only mode for this session
> metaclaw stop                   # Stop a running MetaClaw instance
> metaclaw status                 # Check proxy health, running mode, and scheduler state
> metaclaw config show            # View current configuration
> metaclaw config KEY VALUE       # Set a config value
> ```
> 
> Full config reference (click to expand)
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
>   enabled: false            # madmax mode enables this automatically; set manually for rl mode
>   sleep_start: "23:00"
>   sleep_end: "07:00"
>   idle_threshold_minutes: 30
>   min_window_minutes: 15
>   calendar:
>     enabled: false
>     credentials_path: ""
>     token_path: ""
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
> If the user returns mid-update, the partial batch is saved and resumed at the next window.
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
> - **[03/13/2026]** **v0.3.1** — MinT backend support: RL training now works with both Tinker and MinT. Configurable via `rl.backend` (auto/tinker/mint).
> - **[03/13/2026]** **v0.3** — Continual meta-learning support: slow RL updates now only run during sleep hours, idle time, or Google Calendar me

## 延伸閱讀

相關概念：[[強化學習]] · [[元學習]] · [[持續學習]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[inspatio--worldfm|inspatio/worldfm]]

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
> const concepts = ["強化學習","元學習","持續學習"];
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
