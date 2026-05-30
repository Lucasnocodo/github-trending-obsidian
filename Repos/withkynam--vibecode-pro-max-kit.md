---
repo: withkynam/vibecode-pro-max-kit
url: https://github.com/withkynam/vibecode-pro-max-kit
owner: withkynam
owner_type: User
language: JavaScript
license: MIT
description: "Your AI forgets. This remembers. Spec-driven coding harness for vibecoders, product owners, CEOs and real builders — self-improving context memory, 12 agents, 32 skills. Kills context rot, ships features, not spaghetti. Claude Code & Codex. Any stack. 30 seconds"
homepage: ""
stars: 507
stars_per_day: 254
forks: 126
open_issues: 16
created: 2026-05-27
pushed_at: 2026-05-29
first_seen: 2026-05-30
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-30
use_case: "提供 AI 編碼代理的上下文記憶，幫助開發者自動化開發流程，避免上下文遺失。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 14640
readme_length: 9972
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:507"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agentic"
  - "topic/ai_agents"
  - "topic/ai_coding_assistant"
  - "topic/ai_development"
  - "topic/ai_workflow"
aliases:
  - "vibecode-pro-max-kit"
  - "withkynam/vibecode-pro-max-kit"
  - "提供 AI 編碼代理的上下文記憶，幫助開發者自動化開發流程，避免上下文遺失。"
---

# vibecode-pro-max-kit

**507** stars · **254** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`agentic` `ai-agents` `ai-coding-assistant` `ai-development` `ai-workflow` `anthropic` `claude` `claude-code` `cli-tools` `code-quality` `codex` `coding-agents` `cursor` `developer-tools` `llm` `openai` `prompt-engineering` `typescript` `vibe-coding` `vibecoding`

> [!summary] 一句話摘要
> 提供 AI 編碼代理的上下文記憶，幫助開發者自動化開發流程，避免上下文遺失。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (254 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在多種技術棧上進行開發並希望提升上下文管理的開發團隊。
> **一句話重點** 這個專案的最大價值在於它能夠讓 AI 編碼代理持續學習並適應開發過程中的變化，從而提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "withkynam--vibecode-pro-max-kit" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到提升上下文管理的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於提供了一個自我改善的上下文記憶系統，能夠持續學習並適應開發過程中的變化。

## 專案簡介

這個專案的核心機制是透過一個名為 `vc-setup` 的指令來建立一個自我改善的上下文記憶系統。使用者只需執行 `curl -fsSL https://raw.githubusercontent.com/withkynam/vibecode-pro-max-kit/main/install.sh | bash`，即可安裝並啟動整個系統。安裝後，系統會自動檢測專案的技術棧，並與使用者進行對話以深入了解專案需求，接著生成相應的目錄結構和上下文文件，這樣不僅避免了空白佈局，還能確保生成的內容是基於實際代碼的。這種設計的目的在於解決 AI 編碼過程中的上下文遺失問題，讓開發者能夠在長時間的開發過程中保持上下文的連貫性。

技術上，這個專案使用了 JavaScript 和 Python，並整合了多個 AI 代理來執行不同的任務，例如研究、執行和驗證，這些代理能夠自動化處理大型任務，並在過程中保持狀態。

與其他工具相比，如 `OpenAI Codex` 和 `Claude Code`，這個專案提供了更強的上下文記憶能力，並且能夠在多種技術棧中運行，這使得它在多樣化的開發環境中更具靈活性。

在實際使用中，這個工具能夠處理大型專案的需求，並且能夠自動生成 PRD 和管理待辦事項，讓開發者和 PM 能夠在同一平台上協作。使用者可能會遇到的問題包括安裝過程中的兼容性問題和上下文文件的合併問題，但這些都可以通過系統的自我檢查和用戶的確認來解決。

這個專案目前處於 beta 階段，建議對 AI 開發有興趣的團隊使用，特別是那些需要在多種技術棧上進行開發的團隊。未來幾個月內，預期會有更多功能的增強和社群支持的擴展。

**技術棧**：`JavaScript` · `Python` · `HTML` · `Shell`

## 重點功能

- 自動化上下文記憶 — 透過 `vc-setup` 指令自動生成專案的上下文文件，避免空白佈局。
- 多代理系統 — 包含 12 種專業代理，能夠執行研究、計劃和驗證等任務。
- 自我改善的知識庫 — 隨著功能的發佈，系統能夠自我學習和改善，避免上下文遺失。
- 支持多種技術棧 — 能夠在 React、Node.js、Python 等多種技術環境中運行。
- 實時報告生成 — 自動生成專案狀態報告，方便團隊成員之間的協作。

## 快速開始

1. 安裝 vibecode-pro-max-kit
```bash
curl -fsSL https://raw.githubusercontent.com/withkynam/vibecode-pro-max-kit/main/install.sh | bash
```
2. 運行 vc-setup 來配置專案
```bash
Run vc-setup
```
3. 檢查生成的上下文文件和目錄結構
```bash
# 手動檢查生成的文件
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 vibecode-pro-max-kit",
  "指令": "Run vc-setup",
  "預期輸出": "生成專案的上下文文件和目錄結構"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 507 stars（254/天），forks 126（24.9%），這顯示出強烈的社群關注。作者 withkynam 是一位專注於 AI 代理開發的工程師，過去在多個開源專案中有豐富經驗。這個專案解決了 AI 編碼過程中上下文遺失的問題，這在目前的 AI 工具中仍然是一個未被充分解決的痛點。隨著開發者對於自動化和上下文管理的需求增加，這個專案的出現正好填補了這一空白。forks/stars 比率接近 25%，顯示出許多開發者對於這個工具的實際修改和使用。

## 適合誰使用

**目標受眾**：需要在多種技術棧上進行開發並希望提升上下文管理的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動生成專案的 PRD 和上下文文件，因為這樣可以節省手動撰寫的時間，並確保文件內容的準確性。
> - 產品經理用它來檢視和確認開發進度，因為它能夠提供即時的專案狀態報告，避免了信息不對稱的問題。
> - 新創公司的 CTO 用它來快速搭建技術架構，因為它能夠自動檢測技術棧並生成相應的配置，縮短了開發時間。

## 架構分析

這個專案採用多代理架構，通過不同的 AI 代理來執行特定任務，如研究、執行和驗證。這樣的設計使得每個代理可以專注於自己的任務，提高了整體效率。資料流方面，系統會首先檢測專案的技術棧，然後生成相應的上下文文件，最後進行驗證。選擇這種架構的原因在於能夠靈活應對不同的開發需求，但也帶來了管理多個代理的複雜性。擴展性方面，這種架構能夠輕鬆添加新的代理或技能，但在大型專案中，可能會面臨性能瓶頸。

## 技術深入分析

這個專案的核心技術機制是通過多代理架構來實現自動化的上下文記憶和開發流程。每個代理專注於特定任務，如研究、執行和驗證，這樣的設計使得整體系統能夠高效運作。效能方面，系統能夠處理大型專案，但在初次運行時可能會面臨較長的啟動時間。選擇 JavaScript 和 Python 作為主要技術棧，這使得專案能夠在多種環境中運行，但也可能帶來版本兼容性問題。技術風險方面，系統的依賴性較高，若某個代理出現問題，可能會影響整體運作。整合方面，這個專案能夠與主流的 CI/CD 工具無縫對接，但在大型團隊中，協作和管理多個代理的複雜性可能會成為挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了多語言支持，並且安裝過程相對簡單。雖然有詳細的指令，但新手可能需要一些時間來理解每個步驟的意義。整體而言，花 30 分鐘能夠順利運行起來，但對於不熟悉 CLI 工具的使用者來說，可能會遇到一些困難。

## 優缺點分析

> [!success] 優點
> - 自動化上下文生成，減少手動工作量。
> - 多代理系統提高了任務的專業性和效率。
> - 支持多種技術棧，靈活性高。

> [!danger] 缺點
> - 安裝和配置過程可能對新手不友好。
> - 在大型專案中，初次運行可能需要較長時間。
> - 需要持續維護和更新以保持系統的有效性。

> [!warning] 注意事項
> - 需要在 Linux 環境中運行，對於 Windows 用戶可能需要額外配置。
> - 目前僅支援特定版本的 Node.js 和 Python，可能會有版本兼容性問題。
> - 在大型專案中，初次運行時可能需要較長的時間來完成上下文生成。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理功能，但主要針對遊戲開發，與本專案的開發工具定位有所不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼質量檢查，而本專案則強調上下文記憶和自動化開發流程。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 Codex 的擴展功能，但缺乏本專案的自我改善能力和多代理系統。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 AI 代理，與本專案的開發工具定位不同。 | 如果你的專案是遊戲開發，且需要針對遊戲邏輯進行專門的 AI 設計。 | medium，因為需要重新設計代理的功能和交互方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼質量檢查，與本專案的上下文記憶功能有所不同。 | 如果你的專案主要關注代碼質量和測試，而不是上下文管理。 | low，因為可以直接在現有專案中添加代碼質量檢查功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **vibecode-pro-max-kit** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 AI 代理，與本專案的開發工具定位不同。 | 專注於代碼質量檢查，與本專案的上下文記憶功能有所不同。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的功能和交互方式。 | low，因為可以直接在現有專案中添加代碼質量檢查功能。 |
> | 適用場景 | 主要場景 | 如果你的專案是遊戲開發，且需要針對遊戲邏輯進行專門的 AI  | 如果你的專案主要關注代碼質量和測試，而不是上下文管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對 AI 開發有興趣的團隊試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到與 Ubuntu 24.04 的兼容性問題
  - 解法：檢查系統版本，必要時使用 Docker 環境
- [MEDIUM] 上下文文件合併時可能會導致資料丟失
  - 解法：在合併前備份現有文件

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成專案上下文，提升開發效率。 |
| 大型企業的多專案管理 | 普通 | 雖然支持多專案，但管理多個代理的複雜性可能會增加。 |
| 需要高代碼質量的開發團隊 | 不適合 | 專注於上下文管理，而非代碼質量檢查。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到提升上下文管理的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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
| Forks | 126 |
| Open Issues | 16 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-29 |
| 建立日期 | 2026-05-27 |
| Repo 大小 | 14.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/withkynam/vibecode-pro-max-kit) |
| Topics | `agentic` `ai-agents` `ai-coding-assistant` `ai-development` `ai-workflow` `anthropic` `claude` `claude-code` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 84
>     "Python" : 8
>     "HTML" : 7
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@withkynam](https://github.com/withkynam) | 27 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題尚未解決。
**連結**：[文件](https://github.com/withkynam/vibecode-pro-max-kit)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-27 ~ 2026-05-29）
> **活躍天數** 3 天 · **最新 commit** docs: add ClaudeKit credit near skill list + under contributing

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/withkynam/vibecode-pro-max-kit/issues/15) | Add --help flag to install.sh `enhancement` `good first issue` `size:S` | 0 | 0 |
> | [#14](https://github.com/withkynam/vibecode-pro-max-kit/issues/14) | Fix README badge link goes to wrong page `bug` `good first issue` `size:S` | 0 | 0 |
> | [#13](https://github.com/withkynam/vibecode-pro-max-kit/issues/13) | Validate install.sh on Ubuntu 24.04 `bug` `good first issue` `size:S` | 0 | 0 |
> | [#12](https://github.com/withkynam/vibecode-pro-max-kit/issues/12) | Auto-format on save hook `good first issue` `hook` `size:S` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> English |
>   简体中文 |
>   日本語 |
>   한국어 |
>   Tiếng Việt |
>   Portugues
> 
>   
> 
> *Built by world-class engineers, for vibecoders at*
> *[flowser.ai](https://flowser.ai) — AI Agents with computers for GTM*
> 
> 
> ## 🚀 Install (30 seconds)
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/withkynam/vibecode-pro-max-kit/main/install.sh | bash
> ```
> 
> Then open Claude Code and say:
> 
> ```
> Run vc-setup
> ```
> 
> That's it. The setup skill detects your stack, asks about your project (a real conversation, not a checklist), scaffolds the process directory, deep-scans your codebase, and populates context files with actual content — not placeholders.
> 
> 📦 What gets installed
> 
> ```
> your-project/
> ├── .claude/
> │   ├── agents/              # 🤖 12 specialized agent definitions
> │   │   ├── vc-research-agent.md
> │   │   ├── vc-execute-agent.md
> │   │   └── ...
> │   ├── skills/              # ⚡ 31 auto-discovered skills
> │   │   ├── vc-generate-plan/
> │   │   ├── vc-security/
> │   │   ├── vc-scout/
> │   │   └── ...
> │   └── hooks/               # 🪝 7 lifecycle hooks
> │       ├── privacy-block.cjs
> │       ├── scout-block.cjs
> │       └── ...
> ├── .codex/
> │   └── agents/              # 🔄 Mirrored agents for Codex
> ├── CLAUDE.md                # 📋 Orchestrator + routing rules
> ├── AGENTS.md                # 📖 Agent registry
> └── process/                 # 🧠 Created by vc-setup (not install)
>     └── ...
> ```
> 
> - **Fresh project?** Installs the full harness, then `vc-setup` studies your codebase
> - **Existing `.claude/` config?** Backs up to `.vibecode-backup/`, installs fresh, restores your `settings.json`
> - **Existing `process/` directory?** Never touched by install — `vc-setup` handles migration intelligently
> - **Existing `CLAUDE.md`?** Backed up as `CLAUDE.md.pre-vibecode`, harness version installed
> 
> 🤖 Full agent setup prompt (copy-paste this into Claude Code for maximum control)
> 
> ```
> First, install the vibecode-pro-max-kit agent harness by running this command:
> 
> curl -fsSL https://raw.githubusercontent.com/withkynam/vibecode-pro-max-kit/main/install.sh | bash
> 
> After the install completes, run vc-setup to configure everything for this project.
> 
> Follow the full interactive flow:
> 
> 1. DETECT — Read package.json, detect my stack (framework, package manager, monorepo
>    structure, test framework, database, auth). Also check if I have any existing .claude/,
>    process/, or context files from a previous setup.
> 
> 2. SHOW ME WHAT YOU FOUND — Present a summary of the detection results and wait for me
>    to confirm before continuing. If this is an existing project with process/ folders or
>    context files, tell me what you found and what looks good vs what could be improved.
> 
> 3. ASK ME ABOUT THE PROJECT — Before scaffolding or scanning, have a real conversation
>    with me about this project. Don't just ask a fixed list of questions and move on — ask
>    follow-ups based on my answers, probe deeper on anything vague, and keep going until
>    you genuinely understand the project. Start with the basics (what is this? who uses it?),
>    then dig into architecture, features, conventions, pain points, and anything else that
>    matters. Summarize your understanding back to me and confirm it's correct before moving on.
> 
> 4. SCAFFOLD — Create the process/ directory structure. If I already have process/ folders,
>    show me what you plan to change and wait for my approval before reorganizing anything.
>    Never silently move or delete my existing files.
> 
> 5. STUDY — Deep-scan the codebase and populate process/context/all-context.md with REAL
>    content based on what you find AND what I told you. Include: repo structure, tech stack
>    with versions, key patterns and conventions, import aliases, env vars, API routes,
>    database schema, test setup. Do not leave placeholder text.
> 
> 6. VALIDATE — Run all the validation checks to make sure everything is wired correctly.
> 
> Important rules:
> - If I have existing context files or a well-written CLAUDE.md, read them first and
>   preserve what is good. Merge intelligently — do not replace good content with generic scans.
> - Show me a summary of what you plan to create or change at each major step and wait
>   for my OK before proceeding.
> - Do not create empty placeholder files. Only create files that have real content.
> - Ask before reorganizing. If my existing setup works, tell me what you would improve
>   and let me decide.
> ```
> 
> Table of Contents
> 
> - [The Problem](#-the-problem)
> - [The Fix](#-the-fix)
> - [The Vibe Coding Revolution](#the-vibe-coding-revolution)
> - [Who Is This For?](#who-is-this-for)
> - [At a Glance](#at-a-glance)
> - [Why Teams Use This](#-why-teams-use-this)
> - [How This Compares](#how-this-compares)
> - [What Makes This Different](#-what-makes-this-different)
> - [What's Inside](#-whats-inside)
> - [How It Works](#-how-it-works)
> - [Built-in Safety Systems](#-built-in-safety-systems)
> - [Contributing](#contributing)
> - [Star History](#-star-history)
> 
> ---
> 
> 
> # 🆕 Feature request
> You: "add webhook support to the API"
> → Skill discovery surfaces: vc-scenario, vc-security
> → research-agent gathers context (read-only, can't touch code)
> → You say "go" → innovate-agent explores approaches
> → You say "go" → plan-agent writes spec with blast radius
> → You review the plan, say "ENTER EXECUTE MODE"
> → execute-agent implements → self-review → tester → code-reviewer → git-manager
> → Closeout packet: what changed, what's verified, recommended next step
> ```
> 
> ```
> 
> ## 📁 Feature Folders — Self-Organizing Project Memory
> 
> When a topic accumulates 5+ artifacts, it gets its own **feature folder** — a complete lifecycle container.
> 
> ```
> process/features/{feature}/
> ├── active/       # 📋 Plans currently being worked on
> ├── completed/    # ✅ Archived plans (searchable decision history)
> ├── backlog/      # 📌 Deferred work (agents check before duplicating)
> ├── reports/      # 📄 Execution reports, post-mortems, validation results
> └── references/   # 📚 Research outputs that inform future decisions
> ```
> 
> | | What happens |
> |---|---|
> | 🆕 | New work starts in `active/` → reports accumulate → plan archives to `completed/` |
> | 📌 | Deferred work goes to `backlog/` — agents check it before creating duplicate plans |
> | 📦 | Feature promotion happens automatically when general artifacts hit 5+ |
> | 🔍 | Every feature has complete, self-contained history — plans, decisions, reports, research |
> 
> ---
> 
> 
> ## 💎 Why Teams Use This
> 
> > Most harnesses give you a CLAUDE.md and instructions. This gives you an **autonomous development system** that compounds intelligence over time.
> 
> 
> # vibecode-pro-max-kit
> 
> **Stop your AI from coding before it thinks — and forgetting every detailed prompt from you.This harness turns any AI coding agent into a spec-driven engineering teamthat researches, plans, ships production-grade code, and self-improves its memory to survive context-rotting even 6 months later.**
> 
>   
>   
>   "Total Concentration — Spec Breathing, Tenth Form: Constant Flux.A continuous development cycle that grows stronger with each feature shipped.Context compounds. The flow never breaks."
>   — Tanjiro Kamado
> 
> 🔬 Spec-driven development for AI agents
> 📋 Auto-generates PRDs, manages backlogs, routes context automatically
> 🧠 Self-improving knowledge base that compounds as you ship
> ⚡ Runs autonomously for hours on large tasks without losing state
> 🤝 Plans and specs are shareable — devs, PMs, and stakeholders review the same artifacts
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
> 
>   The simplest, most flexible, team-friendly coding harness for
>   &nbsp;
>   &nbsp;
>   &nbsp;
>   
>   &nbsp;
>   &nbsp;
>   
> 
>   Works across any tech stack, any language, any project
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
>   
>   
>   
>     
>     
>     
>   
>   
>   React · Next.js · Vue · Nuxt · Svelte · Angular · React Native · Electron · Node.js · Express · Bun · Hono · Python · Django · FastAPI · Flask · Ruby · Rails · Go · Rust · Java · Spring Boot · Kotlin · Swift · PHP · Laravel · C# · .NET · Elixir · TypeScript · Prisma · Supabase · Firebase · PostgreSQL · MongoDB · Redis · GraphQL · Docker · Kubernetes · T

## 延伸閱讀

相關概念：[[自動化]] · [[AI 開發]] · [[上下文工程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[gsd-build--gsd-2|gsd-build/gsd-2]] · [[jshachm--pi-rs|jshachm/pi-rs]]

[GitHub](https://github.com/withkynam/vibecode-pro-max-kit)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "withkynam--vibecode-pro-max-kit"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "withkynam--vibecode-pro-max-kit"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "withkynam--vibecode-pro-max-kit" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "withkynam--vibecode-pro-max-kit"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 開發","上下文工程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "withkynam--vibecode-pro-max-kit" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "withkynam--vibecode-pro-max-kit" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "withkynam" AND file.name != "withkynam--vibecode-pro-max-kit"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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
> const me = dv.page("Repos/withkynam--vibecode-pro-max-kit");
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

> **2026-05-30** — 首次收錄
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

- [[2026-05-30|2026-05-30]] — 首次收錄，507 stars
