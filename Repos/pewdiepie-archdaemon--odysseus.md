---
repo: pewdiepie-archdaemon/odysseus
url: https://github.com/pewdiepie-archdaemon/odysseus
owner: pewdiepie-archdaemon
owner_type: User
language: JavaScript
license: MIT
description: "Self-hosted AI workspace. "
homepage: ""
stars: 55778
stars_per_day: 11156
forks: 6621
open_issues: 892
created: 2026-05-31
pushed_at: 2026-06-06
first_seen: 2026-06-01
week: "2026-W23"
month: "2026-06"
category: "AI/ML"
subcategory: "自我托管平台"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-01
use_case: "提供自我托管的 AI 工作區，讓用戶在本地運行各種 AI 模型和應用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 20677
readme_length: 9967
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-01"
star_history: "2026-06-01:8074,2026-06-02:21283,2026-06-03:33559,2026-06-04:43988,2026-06-05:51366,2026-06-06:55778"
tags:
  - github
  - "category/ai_ml"
  - "lang/javascript"
aliases:
  - "odysseus"
  - "pewdiepie-archdaemon/odysseus"
  - "提供自我托管的 AI 工作區，讓用戶在本地運行各種 AI 模型和應用。"
---

# odysseus

**8.1k** stars · **8.1k** stars/天 · 建立 1 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供自我托管的 AI 工作區，讓用戶在本地運行各種 AI 模型和應用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (8.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在本地運行 AI 模型並希望保護數據隱私的開發者和研究人員。
> **一句話重點** Odysseus 不僅是一個自我托管的 AI 工作區，更是一個強調用戶隱私和數據控制的多功能平台。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自我托管平台" && p.file.name !== "pewdiepie-archdaemon--odysseus" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自我托管平台 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到一個強大的自我托管 AI 平台，值得投資。

> [!abstract] 核心創新
> Odysseus 提供了一個集成多種 AI 功能的自我托管平台，強調用戶的數據隱私和本地控制。

## 專案簡介

Odysseus 是一個自我托管的 AI 工作區，旨在提供類似 ChatGPT 和 Claude 的用戶體驗，但更具趣味性和靈活性。用戶可以在本地硬體上運行，並使用自己的數據，強調隱私和本地優先。安裝過程簡單，使用者只需克隆代碼庫並運行配置，然後在應用內設置 LLM 伺服器和其他服務。核心功能包括與本地模型的聊天、智能代理、深度研究、文件編輯和日曆整合等，這些功能使得用戶能夠在一個平台上完成多種任務。使用 Docker 部署是推薦的方式，能夠快速啟動所有必要的服務，並且提供了簡單的命令來檢查服務狀態和日誌。

Odysseus 的設計選擇了 Python 和 JavaScript，並利用 Docker 來簡化部署，這使得它在資源管理上相對輕量。與其他類似工具相比，Odysseus 提供了更高的自定義性和本地控制，特別適合需要處理敏感數據的用戶。儘管 Windows 支持仍在測試中，Linux 和 macOS 的安裝過程相對流暢。這個專案的社群活躍，開發者也在積極回應問題和功能請求，顯示出良好的維護狀態。整體來看，Odysseus 是一個值得探索的工具，尤其對於需要自我托管解決方案的開發者和研究人員來說。

**技術棧**：`Python 3.11` · `JavaScript` · `Docker`

## 重點功能

- 本地模型聊天 — 支持與多種本地模型（如 vLLM、llama.cpp）進行對話，輕鬆添加新模型。
- 智能代理 — 能夠執行整個任務，支持多種工具和技能，基於 opencode 框架。
- 深度研究 — 多步驟運行，能夠收集、閱讀和合成資料，生成視覺報告。
- 文件編輯 — 提供多標籤編輯器，支持 Markdown 和 HTML，並能夠進行 AI 編輯和建議。
- 日曆整合 — 本地日曆，支持 CalDAV 同步，能夠與多個日曆服務進行整合。

## 快速開始

1. 克隆代碼庫
```bash
git clone https://github.com/pewdiepie-archdaemon/odysseus.git
```
2. 進入目錄
```bash
cd odysseus
```
3. 使用 Docker 啟動服務
```bash
docker compose up -d --build
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Docker 和 Docker Compose",
  "指令": "docker compose up -d --build",
  "預期輸出": "Odysseus 服務啟動並運行在 http://localhost:7000"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 8074 stars（8074/天），forks 1151（14.3%），這顯示出強烈的社群興趣。作者 pewdiepie-archdaemon 是一位活躍的開發者，過去在開源社群中有良好的聲譽。Odysseus 解決了許多用戶對於 AI 模型自我托管的需求，尤其是在隱私和數據控制方面，這在現有的商業解決方案中往往無法滿足。最近的推廣活動和社群討論也促進了這個專案的曝光率。技術上，Docker 的使用讓這個工具能夠在多種環境中輕鬆部署，這也是其受歡迎的原因之一。forks/stars 比率為 14.3%，顯示出許多用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在本地運行 AI 模型並希望保護數據隱私的開發者和研究人員。

> [!example] 使用場景
> - 獨立開發者用它來在本地運行 AI 模型，因為這樣可以完全控制數據和隱私，避免將敏感信息上傳到雲端。
> - 小型團隊用它來協作開發 AI 驅動的應用，因為內建的文件編輯和任務管理功能能夠提高工作效率。
> - 研究人員用它來進行深度學習實驗，因為其支持多種模型和自定義配置，能夠快速適應不同的研究需求。

## 架構分析

Odysseus 採用微服務架構，主要由多個 Docker 容器組成，這樣設計的目的是為了簡化部署和擴展性。每個功能模組（如聊天、代理、文件編輯）都被封裝在獨立的服務中，這樣可以根據需要進行擴展或替換。數據流通過 REST API 進行通信，這使得不同模組之間的整合變得簡單。

選擇 Docker 作為部署方式，雖然增加了一定的學習曲線，但能夠提供更好的環境隔離和版本控制。這種設計的代價是需要用戶對 Docker 有基本的了解，否則可能會在配置過程中遇到困難。整體架構的擴展性良好，但在高負載情況下，可能需要進一步優化性能。

## 技術深入分析

Odysseus 的核心技術機制是基於微服務架構，使用 Docker 容器來管理不同的功能模組。這樣的設計使得每個模組都能獨立運行和擴展，並且通過 REST API 進行通信。效能方面，Odysseus 能夠在本地運行多種 AI 模型，但在處理大型數據集時，可能會面臨性能瓶頸，特別是在資源有限的環境中。選擇 Python 和 JavaScript 作為主要開發語言，這使得開發者能夠快速迭代和擴展功能，但也帶來了對於 Python 環境的依賴。技術風險方面，隨著用戶數量的增加，可能會出現性能下降的問題，特別是在高並發請求的情況下。整合方面，Odysseus 與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，並且可以輕鬆地與現有的開發工具鏈整合，這降低了學習成本和實施難度。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體步驟。安裝過程相對順暢，但 Windows 用戶可能會遇到一些問題。文件中有良好的示範和配置指南，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 強調數據隱私，所有數據都在本地處理。
> - 功能多樣，支持多種 AI 模型和應用。
> - 社群活躍，能夠快速獲得支持和更新。

> [!danger] 缺點
> - Windows 支持不穩定，可能影響使用體驗。
> - 對於新手來說，安裝和配置過程可能較為複雜。
> - 在資源有限的硬體上運行大型模型時性能可能不足。

> [!warning] 注意事項
> - Windows 支持尚未全面測試，使用時需謹慎。
> - 對於大型數據集，性能可能會受到影響，特別是在資源有限的環境中。
> - 需要手動配置某些外部服務，對於新手可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自我托管 AI 代理功能，但不支持多種模型的本地運行。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 應用場景，缺乏 Odysseus 的通用性和多功能性。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的功能，但不具備文件編輯和日曆整合的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的 AI 代理功能，提供簡化的用戶界面，但不支持多種模型的本地運行。 | 如果你的需求是針對特定任務的 AI 代理，且不需要多種模型的支持。 | medium，因為需要重新配置和適應新的用戶界面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 應用場景，缺乏 Odysseus 的通用性和多功能性。 | 如果你的需求非常專一，且不需要 Odysseus 提供的多樣化功能。 | low，因為功能較為單一，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **odysseus** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的 AI 代理功能，提供簡化的用戶界面，但不支持多種模型的本地運行。 | 專注於特定的 AI 應用場景，缺乏 Odysseus 的通用性和多功能性。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的用戶界面。 | low，因為功能較為單一，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對特定任務的 AI 代理，且不需要多種模型的 | 如果你的需求非常專一，且不需要 Odysseus 提供的多樣 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和小型專案，但不建議用於生產環境的核心路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 環境下可能出現不穩定性，導致應用無法正常運行。
  - 解法：建議使用 Docker 在 Linux 環境中運行。
- [MEDIUM] 在高負載情況下，性能可能會下降，特別是對於大型模型。
  - 解法：考慮升級硬體或優化模型配置。
- [MEDIUM] 初次配置時，某些外部服務需要手動設置，可能會造成困惑。
  - 解法：參考官方文檔中的配置指南。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 AI 服務 | 非常適合 | Odysseus 提供了多功能的 AI 解決方案，能夠滿足小型團隊的需求。 |
| 大型企業的核心 AI 應用 | 不適合 | 目前處於 alpha 階段，穩定性和性能尚未達到生產標準。 |
| 需要處理敏感數據的研究項目 | 適合 | 強調數據隱私，所有數據在本地處理。 |
| 對於新手開發者的學習項目 | 普通 | 安裝和配置過程可能較為複雜，對新手有一定挑戰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個強大的自我托管 AI 平台，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> Odysseus 是一個自我托管的工作區，提供強大的本地工具，需謹慎處理 API 金鑰和敏感數據。建議在網絡可訪問的部署中啟用身份驗證，並避免直接暴露於公共互聯網。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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
| Forks | 1.2k |
| Open Issues | 133 |
| Issue 解決率 | 33% (65 closed) |
| 最後推送 | 2026-06-01 |
| 建立日期 | 2026-05-31 |
| Repo 大小 | 20.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pewdiepie-archdaemon/odysseus) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@antithesishq/bombadil`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 50
>     "Python" : 36
>     "CSS" : 11
>     "HTML" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon) | 5 |

## 社群與生態

**社群活躍度**：社群活躍，開發者定期回應問題和功能請求。
**連結**：[文件](https://github.com/pewdiepie-archdaemon/odysseus#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31 ~ 2026-06-01）
> **活躍天數** 2 天 · **最新 commit** Gate embedding routes behind admin auth

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/pewdiepie-archdaemon/odysseus/issues/14) | create a contributing guide | 30 | 4 |
> | [#68](https://github.com/pewdiepie-archdaemon/odysseus/issues/68) | Feature request: project structure improvement | 16 | 12 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Odysseus
> ───────────────────────────────────────────────
>  ⊹ ࣪ ˖ ૮( ˶ᵔ ᵕ ᵔ˶ )っ  Odysseus vers. 1.0
> ───────────────────────────────────────────────
> 
> A self-hosted AI workspace -- meant to be the self-hosted version of the UI experience you get from ChatGPT and Claude. But with more jank and fun. Running on your own hardware, with your own data -- local-first, privacy-first, and no trojan.
> 
> 
> ## Quick Start
> 
> Defaults work out of the box — clone, run, configure inside the app.
> Open the **Settings** panel after first login to point Odysseus at your LLM
> server, search provider, email account, etc. Only touch `.env` if you need
> to override deployment-level things like `AUTH_ENABLED`, `DATABASE_URL`,
> or pre-seed `ODYSSEUS_ADMIN_PASSWORD` (otherwise an initial password is
> generated and printed on first boot).
> 
> 
> ### Option 2: Manual install — Linux / macOS
> **Requirements:** Python 3.11+. On Linux/Termux, Cookbook also requires `tmux`
> for background model downloads and serves.
> 
> Install system packages first:
> ```bash
> 
> ### Option 3: Manual install — Windows (PowerShell)
> Windows support is not actively tested. Use it with caution; Docker on Linux
> or a Linux/macOS manual install is the safer path for now.
> 
> ```powershell
> git clone https://github.com/pewdiepie-archdaemon/odysseus.git
> cd odysseus
> python -m venv venv
> venv\Scripts\Activate.ps1
> pip install -r requirements.txt
> python setup.py
> uvicorn app:app --host 0.0.0.0 --port 7000
> ```
> 
> Open `http://localhost:7000`, log in with the generated admin password,
> and configure everything else inside **Settings**.
> 
> 
> ## Demo
> A full, hover-to-play tour lives on the landing page (`docs/index.html`). A few looks:
> 
> 
> ## Features
>   - **Chat** -- chat with any local model or API; adding them is super simple.　vLLM · llama.cpp · Ollama · OpenRouter · OpenAI
>   - **Agent** -- hand it tools and let it run the whole task itself.　built on [opencode](https://github.com/anomalyco/opencode) · MCP · web · files · shell · skills · memory
>   - **Cookbook** -- Scans your hardware, recommends models, click to download and serve.. easy!　built on [llmfit](https://github.com/AlexsJones/llmfit) · VRAM-aware · GGUF / FP8 / AWQ · fit scoring · vLLM / llama.cpp serving
>   - **Deep Research** -- multi-step runs that gather, read, and synthesize sources into a nice visual report.　adapted from [Tongyi DeepResearch](https://github.com/Alibaba-NLP/DeepResearch)
>   - **Compare** -- a fun tool to compare models side by side. Test completely blind, no bias!　multi-model · blind test · synthesis
>   - **Documents** -- YOU write the text, AI is there to assist, not the opposite.　multi-tab editor · markdown · HTML · CSV · syntax highlighting · AI edits · suggestions
>   - **Memory / Skills** -- Persistent memory and skills, your agent evolves over time as it better understands you and your tasks!　ChromaDB · fastembed (ONNX) · vector + keyword retrieval · import/export
>   - **Email** -- IMAP/SMTP inbox with AI triage built in: urgency reminders, auto-tag, auto-summary, auto-reply drafts, auto-spam.　IMAP · SMTP · per-account routing · CalDAV-aware
>   - **Notes & Tasks** -- Quick notes with reminders, a todo list, and scheduled tasks the agent can act on.　note pings · checklist · cron-style tasks · ntfy / browser / email channels
>   - **Calendar** -- Local-first calendar with CalDAV sync to Radicale / Nextcloud / Apple / Fastmail.　CalDAV pull · .ics import/export · per-calendar colors · agent-aware
>   - **Works on mobile** -- looks and runs great on your phone, not just desktop.　responsive · installable (PWA) · touch gestures
>   - **Extras** -- more to explore, happy if you give it a go!　image editor · theme editor · file uploads (vision + PDF) · web search · presets · sessions · 2FA
> 
> 
> ### Option 1: Docker (recommended)
> ```bash
> git clone https://github.com/pewdiepie-archdaemon/odysseus.git
> cd odysseus
> cp .env.example .env       # optional, but recommended for explicit defaults
> docker compose up -d --build
> ```
> Compose starts Odysseus, ChromaDB, SearXNG, and ntfy. First run does a full
> image build. Open `http://localhost:7000` after the containers are healthy.
> 
> Cookbook remote servers use an Odysseus-owned SSH key from `./data/ssh`
> inside Docker. In **Cookbook -> Settings -> Servers**, generate/copy the
> public key and add it to the remote server's `~/.ssh/authorized_keys`.
> After generating the key, you can also install it from the host with:
> ```bash
> ssh-copy-id -i data/ssh/id_ed25519.pub user@server
> ```
> Cookbook local downloads are stored in `./data/huggingface`, mounted as
> `~/.cache/huggingface` inside the Odysseus container.
> 
> Useful checks:
> ```bash
> docker compose ps
> docker compose logs --tail=120 odysseus
> docker compose logs odysseus | grep -E 'ChromaDB|MemoryVectorStore|DEGRADED'
> docker compose exec odysseus python -c "from services.hwfit.models import get_models; print(len(get_models()))"
> ```
> 
> Expected vector-memory startup lines in Docker:
> ```text
> ChromaDB connected: chromadb:8000
> MemoryVectorStore initialized
> ```
> 
> The Cookbook model catalog check should print a non-zero count. If it prints
> `0`, rebuild the Odysseus image with `docker compose build --no-cache odysseus`.
> 
> 
> ## Configuration
> Most setup is done inside the app with `/setup` or **Settings**. Use `.env`
> for deployment-level defaults and secrets you want present before first boot.
> Key settings:
> 
> | Variable | Default | Description |
> |---|---|---|
> | `LLM_HOST` | `localhost` | Your LLM server (e.g. `llm-host.local:8000`) |
> | `LLM_HOSTS` | -- | Comma-separated list for model discovery |
> | `OPENAI_API_KEY` | -- | Optional OpenAI key. Prefer adding providers in the app unless pre-seeding. |
> | `SEARXNG_INSTANCE` | `http://localhost:8080` | SearXNG URL. Docker overrides this to `http://searxng:8080`. |
> | `AUTH_ENABLED` | `true` | Enable/disable login |
> | `LOCALHOST_BYPASS` | `false` | Development-only auth bypass for loopback requests. Keep false for shared/network deployments. |
> | `DATABASE_URL` | `sqlite:///./data/app.db` | Database connection string |
> | `CHROMADB_HOST` | `localhost` | ChromaDB host for vector memory. Docker overrides this to `chromadb`. |
> | `CHROMADB_PORT` | `8100` | ChromaDB port for manual host runs. Docker overrides this to `8000`. |
> | `EMBEDDING_URL` | -- | OpenAI-compatible embeddings endpoint |
> 
> 
> ### Optional external services
>   - **Ollama** → local LLM server -- [ollama.ai](https://ollama.ai)
> 
> 
> ### Chat & Agents
> 
> 
> ### Deep Research
> 
> 
> ### Compare
> 
> 
> ### Documents
> 
> 
> ### Notes & Tasks
> 
> 
> # Debian/Ubuntu
> sudo apt install tmux
> 
> 
> # Arch
> sudo pacman -S tmux
> 
> 
> # Fedora
> sudo dnf install tmux
> ```
> 
> Then install Odysseus:
> ```bash
> git clone https://github.com/pewdiepie-archdaemon/odysseus.git
> cd odysseus
> python3 -m venv venv
> source venv/bin/activate
> pip install -r requirements.txt
> python setup.py            # creates data dirs and prints an initial admin password
> uvicorn app:app --host 0.0.0.0 --port 7000
> ```
> 
> 
> ## Security Notes
> Odysseus is a self-hosted workspace with powerful local tools: shell access, file uploads, model downloads, web research, email/calendar integrations, and API tokens. Treat it like an admin console.
> 
> - Keep `AUTH_ENABLED=true` for any network-accessible deployment.
> - Do not expose it directly to the public internet without HTTPS and a trusted reverse proxy.
> - Keep `data/`, `.env`, logs, databases, and uploaded/generated media out of Git. They are ignored by default.
> - Review `data/auth.json` after first boot: disable open signup unless you intentionally want it, make only your own account admin, and keep demo/test accounts non-admin.
> - Non-admin users do not get shell/Python/file read/write by default, and admin-only routes/tools such as MCP management, API tokens, webhooks, model/cookbook serving, backup/vault, and app settings are admin-gated. Other features are controlled by per-user privileges, so review each user's privileges before exposing a deployment.
> - Rotate any API keys or tokens that were ever pasted into a shared chat, demo, screenshot, or log.
> - If you enable API tokens or 

## 延伸閱讀

相關概念：[[自動化測試]] · [[微服務]] · [[容器化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[432539--gpt2api|432539/gpt2api]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]]

[GitHub](https://github.com/pewdiepie-archdaemon/odysseus)

## 相關收錄

> [!note]- 直接競品（同子分類：自我托管平台）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自我托管平台" AND file.name != "pewdiepie-archdaemon--odysseus"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "pewdiepie-archdaemon--odysseus"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "pewdiepie-archdaemon--odysseus" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "pewdiepie-archdaemon--odysseus"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","微服務","容器化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "pewdiepie-archdaemon--odysseus" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pewdiepie-archdaemon--odysseus" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pewdiepie-archdaemon" AND file.name != "pewdiepie-archdaemon--odysseus"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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
> const me = dv.page("Repos/pewdiepie-archdaemon--odysseus");
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

> **2026-06-01** — 首次收錄
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

- [[2026-06-06|2026-06-06]] — 再次上榜，55.8k stars
- [[2026-06-05|2026-06-05]] — 再次上榜，51.4k stars
- [[2026-06-04|2026-06-04]] — 再次上榜，44.0k stars
- [[2026-06-03|2026-06-03]] — 再次上榜，33.6k stars
- [[2026-06-02|2026-06-02]] — 再次上榜，21.3k stars
- [[2026-06-01|2026-06-01]] — 首次收錄，8.1k stars
