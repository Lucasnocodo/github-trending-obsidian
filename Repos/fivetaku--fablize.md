---
repo: fivetaku/fablize
url: https://github.com/fivetaku/fablize
owner: fivetaku
owner_type: User
language: Python
license: N/A
description: "A Claude Code plugin that makes Opus behave like Fable — completion, evidence, and verification enforced as procedure. Ships only what a Fable-vs-Opus comparison proved transferable."
homepage: ""
stars: 504
stars_per_day: 101
forks: 73
open_issues: 2
created: 2026-06-14
pushed_at: 2026-06-19
first_seen: 2026-06-20
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "AI 工具"
release_tag: "v2.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-20
use_case: "讓 Opus 像 Fable 一樣運作，透過程序強制完成、證據和驗證。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-27"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 59
readme_length: 4392
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-20"
star_history: "2026-06-20:504"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/agentic"
  - "topic/anthropic"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/fable"
aliases:
  - "fablize"
  - "fivetaku/fablize"
  - "讓 Opus 像 Fable 一樣運作，透過程序強制完成、證據和驗證。"
---

# fablize

**504** stars · **101** stars/天 · 建立 5 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/fivetaku--fablize");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v2.1.0` `easy-install`

`agentic` `anthropic` `claude` `claude-code` `fable` `harness` `opus`

> [!summary] 一句話摘要
> 讓 Opus 像 Fable 一樣運作，透過程序強制完成、證據和驗證。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在 Opus 上進行高效能任務的開發者，尤其是對程序化驗證有需求的使用者。
> **一句話重點** fablize 不僅是工具，更是一種系統化的工作方式，能夠讓 Opus 在既有能力範圍內達到最佳表現。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/fivetaku--fablize");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "fivetaku--fablize" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到高效能的任務執行，值得一試。

> [!abstract] 核心創新
> fablize 將可轉移的程序應用於 Opus，強調證據和驗證的必要性。

## 專案簡介

fablize 是一個 Claude Code 插件，旨在讓 Opus 模型在執行任務時遵循嚴謹的程序，強調證據和驗證。使用者可以透過 `/fablize` 指令或特定的觸發詞來啟動該插件，並在執行過程中自動進行多層次的驗證和調查。這個工具的核心賣點在於它能夠將 Opus 的能力發揮到極致，雖然無法提升模型本身的能力，但能夠讓其在既有的能力範圍內達到最佳表現。fablize 的設計基於對 Fable 和 Opus 的比較，發現兩者在封閉式任務上表現相似，但在開放式任務上，Fable 的深度推理能力更強。這使得 fablize 專注於將可轉移的程序應用於 Opus，確保每一步都有明確的證據支持。

該插件的安裝過程簡單，使用者只需執行幾條命令即可完成安裝，並可選擇全局或本地運行。其功能包括驗證基礎、早期停止鉤子和系統化調查協議等，這些都是經過驗證的程序。與其他類似工具相比，fablize 的獨特之處在於它不僅僅是提供工具，而是強調如何有效使用這些工具進行系統化的工作。使用者在使用過程中可能會遇到早期停止鉤子誤判的情況，這需要透過適當的語句來避免。整體而言，fablize 適合需要在 Opus 上進行高效能任務的開發者，尤其是那些對程序化驗證有需求的使用者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 驗證基礎 — 在完成之前運行和觀察可執行的工件（如 HTML、SVG 等）。
- 多層次驗證門 — `goals.py` 分解工作，拒絕沒有根據的完成。
- 調查協議 — 重現、競爭假設、追蹤完整的因果鏈。
- 早期停止鉤子 — 阻止未執行的承諾。
- 每任務路由器 — 僅注入匹配的經過驗證的學科。

## 快速開始

1. 安裝插件
```bash
/plugin marketplace add fivetaku/fablize
```
2. 安裝 fablize
```bash
/plugin install fablize
```
3. 設置全局或本地運行
```bash
bash ${CLAUDE_PLUGIN_ROOT}/setup/setup.sh
```

## 程式碼範例

```python
# 前置條件
# 安裝 fablize 並設置
/plugin install fablize

# 使用 fablize
/fablize
# 預期輸出
啟動多層次的驗證和調查程序。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 504 stars（101/天），forks 73（14.5%），顯示出良好的社群反響。這個專案由 fivetaku 和 GPTaku-ai 共同開發，專注於解決 Opus 在開放式任務上的表現不足，透過程序化的方式來提升其效能。之前的工具未能有效解決這一問題，fablize 提供了一個可行的解決方案。社群的反應顯示出對於這種新方法的需求，尤其是在 AI 模型的應用上。此專案的成功也反映了對於更高效能 AI 工具的需求增加，尤其是在開發者社群中。

## 適合誰使用

**目標受眾**：需要在 Opus 上進行高效能任務的開發者，尤其是對程序化驗證有需求的使用者。

> [!example] 使用場景
> - AI 開發者用它來提升 Opus 在複雜邏輯任務中的表現，因為它能夠強制執行驗證程序，確保每一步都有證據支持。
> - 數據科學家用它來進行系統化的數據分析，因為它提供了多層次的驗證機制，能夠有效降低錯誤率。
> - 軟體工程師用它來優化代碼生成過程，因為它能夠在生成過程中進行即時的驗證和調查，提升代碼質量。

## 架構分析

fablize 採用插件架構，設計上旨在無縫整合於 Claude 模型中。使用者可以透過簡單的命令安裝和設置，這降低了使用門檻。資料流方面，使用者的請求經過多層次的驗證和調查程序，確保每一步都有明確的證據支持。這種設計使得使用者能夠在執行任務時保持高效，但也意味著在開放式創造性任務上仍然會受到模型本身的限制。整體而言，這種架構模式使得 fablize 能夠在不改變模型能力的情況下，提升其在特定任務上的表現。

## 技術深入分析

fablize 的核心技術機制在於將可轉移的程序應用於 Opus，強調驗證和證據的重要性。它使用 Python 和 Shell 實現，並透過簡單的指令進行安裝和設置。該工具的設計使得使用者能夠在執行任務時保持高效，並能夠在每一步進行驗證。效能方面，fablize 主要依賴於 Claude 模型的能力，無法提升模型本身的性能。設計上，fablize 選擇了插件架構，這使得它能夠無縫整合於 Claude 模型中，但也意味著在開放式創造性任務上仍然會受到模型本身的限制。技術風險方面，fablize 的早期停止鉤子可能在某些情況下誤判，這需要使用者在語句表達上加以注意。整體而言，fablize 提供了一個有效的解決方案，能夠在特定任務上提升 Opus 的表現，但仍需謹慎使用以避免潛在的誤判。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用的範例，安裝過程順暢且無明顯坑點。文件目前僅提供英文版本，可能對非英語使用者造成一定困難，但整體上新手體驗良好。

## 優缺點分析

> [!success] 優點
> - 強調程序化驗證，能夠有效提升 Opus 的執行效率。
> - 安裝和設置過程簡單，降低了使用門檻。
> - 提供多層次的驗證和調查機制，能夠降低錯誤率。

> [!danger] 缺點
> - 無法提升模型的基本能力，對於開放式任務仍有局限。
> - 效果數據可能不具普遍性，需謹慎使用。
> - 早期停止鉤子可能誤判，需注意語句的表達方式。

> [!warning] 注意事項
> - 無法提升模型能力，開放式創造性質和自我驅動的發現無法達成。
> - 效果數據來自小型的自我測量，可能不具普遍性。
> - 早期停止鉤子在某些語句中可能誤判，需注意語句的表達方式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建智能代理，強調自我學習和適應性，而 fablize 更著重於程序化的驗證和執行。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一個開放式的 AI 開發環境，但缺乏 fablize 的系統化驗證機制。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 專注於 Claude 模型的擴展，而 fablize 專注於提升 Opus 的執行效率和驗證能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建智能代理，強調自我學習和適應性，而 fablize 更著重於程序化的驗證和執行。 | 如果需要一個能夠自我學習的智能代理，則選擇 agent-sprite-forge 更為合適。 | medium，因為需要重新設計任務執行的邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一個開放式的 AI 開發環境，但缺乏 fablize 的系統化驗證機制。 | 如果需要開放式的開發環境，且不需要嚴格的驗證機制，則選擇 boneyard 更合適。 | low，因為可以直接使用現有的開發環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **fablize** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建智能代理，強調自我學習和適應性，而 fablize 更著重於程序化的驗證和執行。 | 提供了一個開放式的 AI 開發環境，但缺乏 fablize 的系統化驗證機制。 |
> | 遷移成本 | - | medium，因為需要重新設計任務執行的邏輯。 | low，因為可以直接使用現有的開發環境。 |
> | 適用場景 | 主要場景 | 如果需要一個能夠自我學習的智能代理，則選擇 agent-sp | 如果需要開放式的開發環境，且不需要嚴格的驗證機制，則選擇 b |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 早期停止鉤子可能誤判，對某些語句的承諾會被錯誤阻止。
  - 解法：在表達承諾時使用疑問句來避免誤判。
- [low] 安裝過程中可能需要選擇全局或本地運行，未明確說明。
  - 解法：根據需求選擇適合的運行方式。
- **[HIGH]** 在執行過程中，某些功能可能會因模型限制而無法達成。
  - 解法：了解模型的限制，並根據具體情況調整使用方式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在 Opus 上進行高效能任務的開發者 | 非常適合 | fablize 提供了強調程序化驗證的功能，能夠有效提升任務執行效率。 |
| 對於開放式創造性任務的需求 | 不適合 | fablize 無法提升模型的基本能力，對於這類任務仍有局限。 |
| 需要系統化數據分析的數據科學家 | 適合 | fablize 提供了多層次的驗證機制，能夠有效降低錯誤率。 |
| 小型團隊進行 AI 開發 | 普通 | 雖然功能強大，但對於小型團隊的需求可能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到高效能的任務執行，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用過程中對安全性考量較低。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/fivetaku--fablize");
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
> const me = dv.page("Repos/fivetaku--fablize");
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
| Forks | 73 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-19 |
| 建立日期 | 2026-06-14 |
| Repo 大小 | 59 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/fivetaku/fablize) |
| Topics | `agentic` `anthropic` `claude` `claude-code` `fable` `harness` `opus` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 88
>     "Shell" : 12
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@fivetaku](https://github.com/fivetaku) | 9 |
> | [@GPTaku-ai](https://github.com/GPTaku-ai) | 2 |

**最新版本**：v2.1.0 — fablize 2.1.0 (2026-06-18)

> [!info]- Release Notes
> 측정 우선 릴리스.
> 
> - 관측 게이트: deep+변경+미검증 턴만 차단(노이즈 ~2/3 감소). normal·분석·문서 턴은 통과.
> - out-of-band 측정 인프라(shadow): events.jsonl + holdout 토글(기본 OFF) + 분석/sunset. 모델 컨텍스트 밖, 행동 불변.
> - opt-in: reactive effort 위임(막힌 슬라이스→effort:max Workflow), silent-recovery(같은 실패 2회+ 공개).
> - deep 넛지: 증거 노트는 실체 있을 때만, 사소한 턴엔 생략.
> 
> 검증된 성능 향상 없음 — shadow로 효과 측정하는 릴리스. 게이트 회귀 6/6+12/12. 상세: CHANGELOG.md.

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率低，需注意使用者反饋。
**連結**：[文件](https://github.com/fivetaku/fablize)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-19）
> **活躍天數** 3 天 · **最新 commit** docs(changelog): tidy setup wording

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/fivetaku/fablize/issues/4) | setup.sh silently stars the repo using the user's GitHub cre | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> English | [한국어](README.ko.md)
> 
> # fablize — run Opus like Fable
> 
> [](https://github.com/fivetaku/fablize/stargazers)
> [](https://opensource.org/licenses/MIT)
> 
> A Claude Code plugin that makes Opus (or any Claude model) **see a task through to the end — with evidence and verification — as procedure, not as luck.**
> 
> ## Why
> 
> When Fable 5 shipped, I ran a controlled comparison of Fable 5 and Opus 4.8 (an A/B set of 19 runs plus 26 real working sessions, ~1,500 tool calls). The finding:
> 
> - On closed, answer-bearing work (code, logic, builds), the two models were effectively tied.
> - The gap appeared only on open-ended work, and its nature was "following an implication one step further."
> - That depth is **model capability** — it could not be transferred by instructions or a harness. An injection experiment confirmed it: Opus could not reproduce the defects Fable found on its own.
> - But the **procedure** of good work — actually running what you build, seeing it through, investigating systematically — does transfer.
> 
> fablize applies only the procedures whose effect was verified. It does not raise the model's ceiling; it makes the model reach its own ceiling.
> 
> ## What transfers and what doesn't
> 
> | Trait | Transferable? | Reason |
> |---|:--:|---|
> | Verification grounding (run & observe the artifact) | ✅ shipped | A procedure Opus skipped "not because it can't, but because it didn't." Injecting it raised render-verification behavior measurably. |
> | Multi-story completion + evidence gate | ✅ shipped | A procedure — decompose, checkpoint, refuse completion without proof. |
> | Systematic investigation (reproduce → hypotheses → causal chain) | ✅ shipped | A procedure — on par with what the strong model already does. |
> | Early-stop prevention | ✅ shipped | A deterministic hook — catches "I'll do X" without doing it. |
> | Out-of-spec defect discovery | ❌ not possible | Capability. Injection was refuted — the model finds it, or it doesn't. |
> | Open-ended creative detail | ❌ not possible | Capability. Shows only where there is no fixed answer. |
> | Self-driven propagation depth | ❌ not possible | Capability. Directed propagation transfers; self-started depth does not. |
> 
> The non-transferable rows are the model's job (or a human's), not a harness's. When you hit them, fablize tells you to escalate instead of pretending.
> 
> ## What's included (verified only)
> 
> - **Verification grounding** — render/executable artifacts (HTML, SVG, games, charts) are run and observed before completion.
> - **Multi-story verification gate** — `goals.py` decomposes work and refuses a groundless "done."
> - **Investigation protocol** — reproduce, compete hypotheses, trace the full causal chain.
> - **Early-stop hook** — blocks promising-without-doing.
> - **Per-task router** — injects only the matching verified discipline.
> 
> Negligible or unverified ideas (style mimicry, broad reasoning injection, a silent-recovery guard, a review-recall scan) are **not shipped.** They stay in personal development until a controlled experiment confirms their effect.
> 
> ## Install
> 
> ```
> /plugin marketplace add fivetaku/fablize
> /plugin install fablize
> ```
> 
> The per-task router (a UserPromptSubmit hook) registers automatically.
> 
> For always-on operation (the rules resident in context), run once:
> 
> ```
> bash ${CLAUDE_PLUGIN_ROOT}/setup/setup.sh    # choose local (recommended) or global
> ```
> 
> Uninstall: `bash ${CLAUDE_PLUGIN_ROOT}/setup/uninstall.sh`
> 
> > If fablize helps, a ⭐ on the repo means a lot — setup asks once and can open the page for you.
> 
> ## How it behaves
> 
> - Trigger with `/fablize` or phrases like "see it through", or automatically when installed always-on.
> - 2+ stories → decompose + verification gate. Debugging → investigation protocol. Render artifact → verification grounding. Hard task → adaptive thinking plus an `/effort xhigh` suggestion.
> - At the capability ceiling, escalate to a stronger model or a human.
> 
> ## Honest limits
> 
> - It cannot raise model capability. Open-ended creative quality and self-driven discovery are out of reach — that is a model-choice decision, not a harness one.
> - The effect numbers come from a small, single-family (Claude) self-measurement (the 19-run A/B set). The direction is solid; the decimals are not asserted.
> - The early-stop hook can misfire on a declarative offer ("I'll write the report if you want") — phrasing offers as questions avoids it.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[驗證]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[alchaincyf--loop-engineering-orange-book|alchaincyf/loop-engineering-orange-book]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[WUBING2023--PaperSpine|WUBING2023/PaperSpine]]

[GitHub](https://github.com/fivetaku/fablize)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "fivetaku--fablize"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "fivetaku--fablize"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "fivetaku--fablize" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "fivetaku--fablize"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","機器學習","驗證"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "fivetaku--fablize" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/fivetaku--fablize");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "fivetaku--fablize" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "fivetaku" AND file.name != "fivetaku--fablize"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/fivetaku--fablize");
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
> const me = dv.page("Repos/fivetaku--fablize");
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
> const me = dv.page("Repos/fivetaku--fablize");
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
> const me = dv.page("Repos/fivetaku--fablize");
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
> const me = dv.page("Repos/fivetaku--fablize");
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

> **2026-06-20** — 首次收錄
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

- [[2026-06-20|2026-06-20]] — 首次收錄，504 stars
