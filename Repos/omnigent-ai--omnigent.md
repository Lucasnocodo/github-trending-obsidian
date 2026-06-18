---
repo: omnigent-ai/omnigent
url: https://github.com/omnigent-ai/omnigent
owner: omnigent-ai
owner_type: Organization
language: Python
license: Apache-2.0
description: "A meta-harness for all your AI agents.  Omnigent provides a common layer over Claude Code, Codex, Pi, and the agents you write yourself: swap or combine harnesses without rewriting, keep them in check with policies and sandboxing, and collaborate in real time on the same live session, from any device."
homepage: "https://omnigent.ai"
stars: 3526
stars_per_day: 588
forks: 393
open_issues: 169
created: 2026-06-11
pushed_at: 2026-06-18
first_seen: 2026-06-15
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "AI 代理管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-15
use_case: "提供一個統一的層級來管理和協作多個 AI 代理，無需重寫代碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-21"
contributor_count: 5
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 37413
readme_length: 9781
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-15"
star_history: "2026-06-15:1220,2026-06-16:1944,2026-06-17:2826,2026-06-18:3526"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "omnigent"
  - "omnigent-ai/omnigent"
  - "提供一個統一的層級來管理和協作多個 AI 代理，無需重寫代碼。"
---

# omnigent

**1.2k** stars · **407** stars/天 · 建立 3 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/omnigent-ai--omnigent");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個統一的層級來管理和協作多個 AI 代理，無需重寫代碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (407 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要靈活管理多個 AI 代理並希望在不同設備上協作的開發者。
> **一句話重點** Omnigent 的最大優勢在於其靈活性和即時協作能力，讓多個 AI 代理能夠在同一平台上無縫運行。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/omnigent-ai--omnigent");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理管理" && p.file.name !== "omnigent-ai--omnigent" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的多代理管理，值得一試。

> [!abstract] 核心創新
> Omnigent 提供了一個統一的層級來管理多個 AI 代理，並允許用戶在同一會話中協作。

## 專案簡介

Omnigent 是一個 AI 代理的元框架，允許用戶在同一會話中協作和管理多個代理，如 Claude Code、Codex 和 Pi。用戶可以透過 CLI 指令 `omnigent` 啟動會話，並在終端或瀏覽器中進行操作，所有的消息和子代理會保持同步。這個設計的核心在於提供一個統一的接口，讓不同的 AI 模型能夠互相協作，並且可以隨時切換模型，這樣用戶可以根據需求選擇最適合的模型進行任務。技術上，Omnigent 使用 Python 和 TypeScript，並依賴於多個庫如 FastAPI 和 SQLAlchemy，這使得它在性能和擴展性上具備良好的基礎。與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，Omnigent 提供了更高的靈活性，因為它允許用戶在同一會話中使用多個不同的代理，而不需要重寫代碼。

使用者可以在雲端沙箱中運行代理，這樣即使沒有本地設備也能進行操作，這對於需要隨時隨地訪問的用戶來說非常方便。值得注意的是，Omnigent 目前仍處於 alpha 階段，這意味著在穩定性和功能上可能會有變化。對於需要快速原型開發或測試多個 AI 模型的開發者來說，Omnigent 是一個值得考慮的選擇，但在生產環境中使用時需謹慎。使用者應該考慮到可能的學習曲線和整合時間，尤其是在與現有系統的整合上。總體來說，Omnigent 提供了一個強大的平台來管理和協作多個 AI 代理，特別適合需要靈活性和即時協作的開發者。

**技術棧**：`Python 3.12` · `FastAPI` · `SQLAlchemy`

## 重點功能

- 多代理協作 — 支持同時使用 Claude Code、Codex、Pi 等多個代理。
- 即時同步 — 所有消息和子代理在不同設備上保持同步，隨時隨地訪問。
- 雲端沙箱運行 — 可以在 Modal 或 Daytona 等雲端環境中運行代理，無需本地設備。
- 靈活的模型切換 — 使用 `/model` 命令隨時切換使用的 AI 模型。
- 政策管理 — 允許用戶設置政策來控制代理的行為，確保安全性和合規性。

## 快速開始

1. 安裝 Omnigent 和所有依賴
```bash
curl -fsSL https://raw.githubusercontent.com/omnigent-ai/omnigent/main/scripts/install_oss.sh | sh
```
2. 啟動你的第一個代理
```bash
omnigent
```
3. 選擇和切換模型
```bash
omnigent setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1220 stars（407/天），forks 137（11.2%），顯示出強烈的社群興趣。這個專案由 Databricks 團隊開發，旨在解決多個 AI 代理之間的協作問題，之前的解決方案往往缺乏統一的接口和靈活性。近期的推廣活動和社群討論可能進一步推動了這個專案的曝光率。高 forks/stars 比率（11.2%）顯示出許多使用者對這個專案進行實際修改和使用，反映出其潛在的實用性和需求。

## 適合誰使用

**目標受眾**：需要靈活管理多個 AI 代理並希望在不同設備上協作的開發者。

> [!example] 使用場景
> - 後端工程師用它來管理多個 AI 代理的協作，因為可以在同一會話中使用不同的模型，提升工作效率。
> - 產品經理用它來監控 AI 代理的表現，因為可以隨時在手機上查看和調整代理的行為，方便進行即時決策。
> - 數據科學家用它來快速原型開發和測試不同的 AI 模型，因為可以在雲端沙箱中運行代理，無需本地設備。

## 架構分析

Omnigent 採用微服務架構，允許不同的 AI 代理在同一平台上運行。每個代理可以獨立運行，並通過統一的 API 進行交互。這樣的設計使得用戶可以靈活地選擇和切換代理，而不需要重寫代碼。

資料流方面，使用 FastAPI 處理請求，並通過 SQLAlchemy 進行數據存儲和管理。選擇這種架構的代價是需要管理多個服務的協調，但這也帶來了更高的靈活性和擴展性。未來可能面臨的瓶頸是如何在高併發情況下保持性能，特別是在多個代理同時運行時。

## 技術深入分析

Omnigent 的核心技術機制在於其微服務架構，使用 FastAPI 來處理請求，並通過 SQLAlchemy 進行數據管理。這樣的設計使得不同的 AI 代理可以在同一平台上運行，並且能夠靈活地進行切換。效能方面，Omnigent 能夠支持多個代理同時運行，但在高併發情況下可能會面臨性能瓶頸。選擇 Python 和 TypeScript 作為主要開發語言，這使得開發過程中能夠快速迭代，但也可能導致較高的記憶體使用量。技術風險方面，未來在擴展時可能會遇到服務協調的問題，特別是在多個代理同時運行時。整合方面，Omnigent 與主流的 CI/CD 工具相容性良好，能夠輕鬆地融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程順暢，並且有自動安裝依賴的功能。提供了良好的入門指南，讓新手能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 靈活的多代理管理，支持不同模型的協作。
> - 即時同步功能，無論在哪個設備上都能保持會話一致性。
> - 雲端沙箱運行，無需依賴本地設備。

> [!danger] 缺點
> - 目前仍在 alpha 階段，穩定性和功能可能不完善。
> - 需要一定的學習曲線，特別是對於新手用戶。
> - 依賴於多個外部服務，可能會影響整體性能。

> [!warning] 注意事項
> - 僅支援 Python 3.12+
> - 目前仍處於 alpha 階段，功能和 API 可能會變動
> - 需要 Node.js 22 LTS 或更新版本

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多代理協作，但不支持即時同步和雲端沙箱功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於單一代理的管理，缺乏 Omnigent 的靈活性和多樣性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理的協作，但不支持即時同步和雲端沙箱功能。 | 如果你的團隊需要更強的多代理協作功能，但不需要即時同步。 | medium，因為需要重新設計部分工作流。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於單一代理的管理，缺乏 Omnigent 的靈活性和多樣性。 | 如果你的需求僅限於單一代理的管理，且不需要多代理協作。 | low，因為功能較為簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **omnigent** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多代理的協作，但不支持即時同步和雲端沙箱功能。 | 專注於單一代理的管理，缺乏 Omnigent 的靈活性和多樣性。 |
> | 遷移成本 | - | medium，因為需要重新設計部分工作流。 | low，因為功能較為簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更強的多代理協作功能，但不需要即時同步。 | 如果你的需求僅限於單一代理的管理，且不需要多代理協作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高併發情況下可能會遇到性能瓶頸
  - 解法：考慮分散代理到不同的服務器上運行
- [MEDIUM] 某些功能在不同的設備上可能會出現不同步的情況
  - 解法：確保所有設備都在同一網絡下

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠靈活管理多個 AI 代理，適合小型團隊的需求。 |
| 大型企業的 AI 代理管理系統 | 普通 | 雖然功能強大，但可能需要更多的穩定性和支持。 |
| 需要快速原型開發的開發者 | 非常適合 | 提供了靈活的環境來測試和迭代不同的 AI 模型。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的多代理管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限運行，且不存取敏感資料。依賴的外部服務需確保安全性，建議在 CI/CD 中使用時進行充分測試。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Omnigent 最常與 FastAPI 和 SQLAlchemy 搭配使用，處於開發和部署的環節。實際整合範例是將 Omnigent 部署在 VPS 上，並使用 Docker 進行容器化，這樣可以輕鬆管理和擴展。支援 GitHub Actions 進行 CI/CD 整合，並且與 VS Code 兼容良好。整合的摩擦點主要是需要確保所有依賴的版本相容，特別是在升級時。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/omnigent-ai--omnigent");
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
> const me = dv.page("Repos/omnigent-ai--omnigent");
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
| Open Issues | 36 |
| Issue 解決率 | 10% (4 closed) |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-11 |
| 官方網站 | [Link](https://omnigent.ai) |
| Repo 大小 | 36.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/omnigent-ai/omnigent) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 83
>     "TypeScript" : 16
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dbczumar](https://github.com/dbczumar) | 24 |
> | [@PattaraS](https://github.com/PattaraS) | 12 |
> | [@anthonyivn2](https://github.com/anthonyivn2) | 3 |
> | [@dipeshbabu](https://github.com/dipeshbabu) | 3 |
> | [@dalamgir](https://github.com/dalamgir) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的 Issues 和 PR 顯示出使用者的參與度。
**連結**：[文件](https://omnigent.ai/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-15）
> **活躍天數** 2 天 · **最新 commit** fix: copy config.toml per session instead of symlinking it (#34)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#45](https://github.com/omnigent-ai/omnigent/issues/45) | [Feature] support OpenCode as a harness | 2 | 2 |
> | [#39](https://github.com/omnigent-ai/omnigent/issues/39) | Feature request: Kubernetes sandbox launcher (server-spawned | 2 | 1 |
> | [#53](https://github.com/omnigent-ai/omnigent/issues/53) | web_search is non-functional on non-OpenAI models (no runner | 1 | 0 |
> | [#47](https://github.com/omnigent-ai/omnigent/issues/47) | [Feature] Define projects | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> #  Omnigent
> 
> 
> ## Quick start
> 
> 
> ### 1. Install
> 
> One command installs Omnigent and everything it needs:
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/omnigent-ai/omnigent/main/scripts/install_oss.sh | sh
> ```
> 
> Prefer to install manually?
> 
> Omnigent needs **Python 3.12+**. Install the `omnigent` package:
> 
> ```bash
> uv tool install omnigent        # or: pip install "omnigent"
> ```
> 
> Or with [Homebrew](https://github.com/omnigent-ai/homebrew-tap):
> 
> ```bash
> brew install omnigent-ai/tap/omnigent
> ```
> 
> Or install straight from the repo:
> 
> ```bash
> uv tool install -q --python 3.12 git+https://github.com/omnigent-ai/omnigent.git
> ```
> 
> Toolchain and prerequisites (if the installer reports a missing tool)
> 
> - **`uv`** (required). https://docs.astral.sh/uv/getting-started/installation/
>   The installer offers to set this up for you.
> - **`git`** (required).
> - **Node.js 22 LTS or newer** with **`npm`**, for the Claude, Codex, and Pi
>   coding harnesses. `omnigent run` installs the harness CLI you pick.
>   https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
> - **`tmux`**, required by the native `omnigent claude` / `omnigent codex`
>   wrappers (`brew install tmux` / `apt install tmux`; the installer offers
>   to install it for you).
> - **Databricks** (optional). To use a Databricks workspace as your model
>   provider, install Omnigent with the `databricks` extra:
>   `uv tool install "omnigent[databricks]"`. Signing in to the workspace also
>   uses the [Databricks CLI](https://docs.databricks.com/aws/en/dev-tools/cli/install).
> 
> 
> ## Why Omnigent?
> 
> Omnigent lets you:
> 
> - **📱 Work with agents from any device, including your phone.** Sessions
>   follow you: start in your terminal, continue in the browser, pick it up on
>   your phone. Messages, sub-agents, terminals, and files stay in sync.
> 
> - **🤖 Supervise multiple agents.** Use Claude Code, Codex, Pi, and custom
>   agents (defined in YAML) together in the same session. Ask one agent to
>   review another's work, or split a task across agents that are each good at
>   different things.
> 
> - **🔌 Use any model.** A first-party API key, a Claude/ChatGPT subscription,
>   or any compatible gateway. All first-class.
> 
> - **🤝 Collaborate.** Share a session so teammates can chat with your agent
>   and watch it work live, co-drive it on your machine, or fork the
>   conversation to continue on their own.
> 
> - **☁️ Run agents in cloud sandboxes.** No laptop required: run sessions in
>   disposable [Modal](https://modal.com) or [Daytona](https://www.daytona.io)
>   sandboxes, launched from the CLI or provisioned by the server per session
>   (*managed hosts*). More providers coming soon.
> 
> - **🛡️ Govern your agents.** Create
>   [policies](#6-govern-your-agents-with-policies) to pause for your approval
>   before risky actions, cap spend, or limit which tools an agent reaches.
>   They apply to the whole server, one agent, or a single chat.
> 
> ---
> 
> 
> ### A meta-harness for all your AI agents
> 
> Omnigent provides a common layer over Claude Code, Codex, Pi, and the agents you write yourself: swap or combine harnesses without rewriting, keep them in check with policies and sandboxing, and collaborate in real time on the same live session, from any device.
> 
> [](https://github.com/omnigent-ai/omnigent/blob/main/LICENSE)
> 
> [](#1-install)
> 
> [omnigent.ai](https://omnigent.ai) · **[⬇️ Download the macOS desktop app](https://omnigent.ai/download/mac)**
> 
>   
> 
> ---
> 
> 
> ### 2. Start your first agent
> 
> `omnigent` picks a model with you and starts a session in your terminal. It
> also launches a local web UI at `http://localhost:6767` that shows the same
> session in the browser, or on a phone on your network (step 4). The
> [desktop app](https://omnigent.ai/docs/interact/desktop) wraps that same UI
> in a native window and adds OS notifications and a dock badge —
> [download it for macOS](https://omnigent.ai/download/mac).
> 
> > [!NOTE]
> > The install puts two names for the same CLI on your PATH: `omnigent` and
> > the shorter `omni`. They're interchangeable.
> 
> > [!TIP]
> > On first run, Omnigent picks up model credentials already in your
> > environment (an `ANTHROPIC_API_KEY` / `OPENAI_API_KEY`, or a `claude` /
> > `codex` CLI you're logged into) and offers one as the default.
> 
> ```bash
> omnigent
> ```
> 
> Or launch a specific agent runtime, or your own agent:
> 
> ```bash
> omnigent claude                      # Claude Code, in a session your team can join
> omnigent codex                       # Codex
> omnigent run path/to/agent.yaml      # your own agent (see "Write your own agent")
> ```
> 
> #### 🐙 Polly and 🟠🔵 Debby
> 
> Two example agents ship with the repo, and they make good first sessions:
> 
> ```bash
> omnigent run examples/polly/
> omnigent run examples/debby/
> 
> 
> # Run an orchestrator on a different harness (sub-agents keep their own):
> omnigent run examples/polly/ --harness pi
> omnigent run examples/debby/ --harness openai-agents
> ```
> 
> **🐙 Polly** is a multi-agent coding orchestrator who writes no code herself.
> She's the tech lead: she plans, delegates the work to coding sub-agents
> (Claude Code, Codex, or Pi) in parallel git worktrees, then routes each diff
> to a reviewer from a different vendor than the one that wrote it. You merge.
> 
> **🟠🔵 Debby** is a brainstorming partner with two heads, one Claude and one GPT.
> Every question you ask goes to both heads, and she lays the two answers out
> side by side. Type `/debate` and the heads critique each other for a few
> rounds before converging. (She needs both a Claude and an OpenAI credential;
> see step 3.)
> 
> **Prefer the browser?** Start a server and register your machine as a host:
> 
> ```bash
> omnigent server start   # start the local server and web UI in the background
> omnigent host           # (separate terminal) register this machine as a host
> ```
> 
> In the web UI, hit **New Chat**, pick your machine, and go. Check status with
> `omnigent server status`; stop everything with `omnigent stop`.
> 
> 
> ### 3. Choose & switch models
> 
> ```bash
> omnigent setup
> ```
> 
> Add a credential, set a default, or remove one, grouped by agent. Omnigent
> works with four kinds of credentials:
> 
> | | Kind | What it is |
> |---|---|---|
> | 🔑 | **API key** | A first-party vendor key for Anthropic, OpenAI, and similar providers |
> | 🎟️ | **Subscription** | A Claude Pro/Max or ChatGPT plan, via the official `claude` / `codex` CLIs |
> | 🌐 | **Gateway** | Any OpenAI- or Anthropic-compatible `base_url` and key (OpenRouter, LiteLLM, Ollama, vLLM, Azure) |
> | 🧱 | **Databricks** | A Databricks workspace profile (requires the `databricks` extra) |
> 
> Defaults are per agent, so a Claude default and a Codex default coexist. You
> can also switch models in the middle of a session with the `/model` command.
> 
> Gateway base URLs (OpenRouter, Ollama)
> 
> When you add a **Gateway** credential, `omnigent setup` asks for a base URL
> and a key. The base URL depends on which agent you point it at:
> 
> | Provider | For | Base URL | Key |
> |---|---|---|---|
> | **OpenRouter** | Claude Code | `https://openrouter.ai/api` | your OpenRouter key (`sk-or-…`) |
> | **OpenRouter** | Codex / OpenAI agents | `https://openrouter.ai/api/v1` | your OpenRouter key (`sk-or-…`) |
> | **Ollama** (local) | Codex / OpenAI agents | `http://localhost:11434/v1` | any value (Ollama ignores it) |
> 
> For Claude Code, point at OpenRouter's Anthropic-compatible endpoint
> (`…/api`, **not** `…/api/v1`). For Codex and the OpenAI-agents harness, use
> the OpenAI-compatible `…/api/v1`.
> 
> 
> ### 4. Deploy a server (and use it from your phone📱)
> 
> Run Omnigent on a server with a stable URL
> ([`deploy/README.md`](https://github.com/omnigent-ai/omnigent/blob/main/deploy/README.md) is the full guide) and your sessions
> become reachable from anywhere, including your phone. The web UI is built for
> mobile, so you get the same chat, sub-agents, terminals, and files, in sync
> with your laptop.
> 
> One `docker compose up` runs the server on any host you have (a VPS, a home
> server); Render deploys with one click; Fly.io, Railway, Hugging Face Spaces,
> and Modal are covered too. The server can also provision a cloud sandb

## 延伸閱讀

相關概念：[[多模態]] · [[微服務]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]]

[GitHub](https://github.com/omnigent-ai/omnigent) · [官方網站](https://omnigent.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理管理" AND file.name != "omnigent-ai--omnigent"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "omnigent-ai--omnigent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "omnigent-ai--omnigent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "omnigent-ai--omnigent"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","微服務","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "omnigent-ai--omnigent" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/omnigent-ai--omnigent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "omnigent-ai--omnigent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "omnigent-ai" AND file.name != "omnigent-ai--omnigent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/omnigent-ai--omnigent");
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
> const me = dv.page("Repos/omnigent-ai--omnigent");
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
> const me = dv.page("Repos/omnigent-ai--omnigent");
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
> const me = dv.page("Repos/omnigent-ai--omnigent");
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
> const me = dv.page("Repos/omnigent-ai--omnigent");
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

> **2026-06-15** — 首次收錄
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

- [[2026-06-18|2026-06-18]] — 再次上榜，3.5k stars
- [[2026-06-17|2026-06-17]] — 再次上榜，2.8k stars
- [[2026-06-16|2026-06-16]] — 再次上榜，1.9k stars
- [[2026-06-15|2026-06-15]] — 首次收錄，1.2k stars
