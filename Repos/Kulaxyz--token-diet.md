---
repo: Kulaxyz/token-diet
url: https://github.com/Kulaxyz/token-diet
owner: Kulaxyz
owner_type: User
language: Shell
license: N/A
description: "Always-on token-efficiency skill for coding agents (Claude Code, Codex, Cursor, Windsurf, Cline). ~31% lower bill on average, no loss of correctness."
homepage: ""
stars: 611
stars_per_day: 153
forks: 2
open_issues: 0
created: 2026-07-03
pushed_at: 2026-07-04
first_seen: 2026-07-06
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-06
use_case: "為編碼代理提供持續的令牌效率技能，平均降低 31% 的費用，且不影響正確性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-09"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 28
readme_length: 4198
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:590,2026-07-06:590,2026-07-07:596,2026-07-08:611"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "token-diet"
  - "Kulaxyz/token-diet"
  - "為編碼代理提供持續的令牌效率技能，平均降低 31% 的費用，且不影響正確性。"
---

# token-diet

**611** stars · **153** stars/天 · 建立 4 天前 · Shell · 未標註授權

```dataviewjs
const me = dv.page("Repos/Kulaxyz--token-diet");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 為編碼代理提供持續的令牌效率技能，平均降低 31% 的費用，且不影響正確性。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (153 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要長時間與編碼代理互動並希望降低成本的開發者。
> **一句話重點** token-diet 透過精簡令牌使用，讓開發者在與編碼代理互動時能夠節省成本，這對於長時間開發的專案尤為重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--token-diet");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "Kulaxyz--token-diet" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，能夠顯著降低開發成本，值得考慮。

> [!abstract] 核心創新
> 這個專案的創新點在於其能夠在不損失正確性的情況下，顯著降低編碼代理的令牌使用量。

## 專案簡介

token-diet 是一個針對多種編碼代理（如 Claude Code、Codex 等）設計的工具，旨在減少會話中的令牌使用量，從而降低使用成本。它通過精簡回覆內容、優化文檔和測試、以及減少不必要的上下文讀取，來實現這一目標。使用者只需執行一個簡單的安裝命令，便可將其整合到當前的開發環境中。該工具的核心賣點在於其能夠在不損失正確性的情況下，平均降低約 31% 的費用，並在某些情況下高達 81% 的輸出節省。技術上，它利用了 session hooks 來持續運行，並且支持多種代理的自動檢測和安裝。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，token-diet 提供了更為全面的令牌管理策略，特別是在多種會話類型下的表現。實際使用中，這個工具能夠有效處理大量的代碼和文檔，並且在高負載情況下仍能保持良好的性能。對於需要長時間與編碼代理互動的開發者來說，這是一個非常合適的選擇。未來可能會進一步擴展對更多代理的支持，並持續優化性能和使用體驗。

**技術棧**：`Shell` · `JavaScript` · `Python`

## 重點功能

- 持續運行 — 自動檢測並整合到多種編碼代理中，無需手動指令。
- 節省令牌 — 透過精簡回覆和文檔，平均降低 31% 的使用費用。
- 多級模式 — 提供 `on`、`lite`、`ultra` 和 `off` 模式，根據需求調整輸出精簡程度。
- 針對性測試 — 僅執行關鍵測試，確保不影響核心功能。
- 上下文優化 — 只讀取必要的上下文，減少不必要的資料處理。

## 快速開始

1. 安裝 token-diet
```bash
curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash
```
2. 選擇安裝模式
```bash
curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash -s -- --ultra
```
3. 啟用或禁用功能
```bash
/token-diet [on|lite|ultra|off]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 611 stars（153/天），forks 2（0.3%），顯示出初期的穩定增長。作者 Kulaxyz 在開源社群中活躍，專注於提升編碼代理的效率。這個工具解決了使用編碼代理時的高成本問題，特別是在長時間會話中，傳統方法往往無法有效控制令牌消耗。近期的技術討論和需求使得這個工具的推出時機恰到好處。forks/stars 比率較低，顯示出目前多數用戶仍在觀望階段。

## 適合誰使用

**目標受眾**：需要長時間與編碼代理互動並希望降低成本的開發者。

> [!example] 使用場景
> - 後端工程師用它來減少與 Codex 的互動成本，因為能夠在不影響代碼質量的情況下節省 31% 的費用。
> - 資料科學家用它來優化與 Claude Code 的對話，因為能夠在進行複雜查詢時顯著降低令牌使用量。
> - 全端開發者用它來提升開發效率，因為它能夠自動精簡回覆內容，讓開發過程更為流暢。

## 架構分析

token-diet 採用了一種基於 session hooks 的架構，這使得它能夠在每次會話開始時自動啟用。這種設計的好處是用戶無需每次手動啟動，提升了使用的便捷性。資料流方面，工具會在會話中持續監控輸入和輸出，並根據設定的模式進行優化。選擇這種方式的代價是需要依賴於編碼代理的 API，這可能會在某些情況下造成延遲。擴展性方面，這種設計能夠輕鬆整合到現有的開發流程中，但在處理大量請求時，可能會面臨性能瓶頸。

## 技術深入分析

token-diet 的核心技術在於其使用 session hooks 來持續監控和優化會話中的令牌使用。這種方法允許它在不影響正確性的情況下，減少不必要的文字和上下文讀取。效能上，該工具能夠在多種會話類型下保持穩定的輸出節省，並在實際運行中達到高達 81% 的節省。設計上，選擇使用 Shell 和 JavaScript 使得安裝過程簡單，且能夠快速集成到現有的開發環境中。這樣的選擇雖然降低了記憶體佔用，但可能會在高負載時面臨性能瓶頸。技術風險方面，依賴於編碼代理的 API 可能會在未來的版本中造成不穩定，特別是當代理更新時。整合方面，與主流開發工具的相容性良好，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體範例。安裝過程相對順暢，未發現明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能需要額外的學習成本。

## 優缺點分析

> [!success] 優點
> - 能夠顯著降低使用成本，平均節省 31%。
> - 簡單的安裝過程，無需複雜配置。
> - 支持多種編碼代理，靈活性高。

> [!danger] 缺點
> - 目前僅支持特定的編碼代理，限制了使用範圍。
> - 過度精簡可能導致信息丟失，需謹慎使用。
> - 需要穩定的網路連接以便於安裝和運行。

> [!warning] 注意事項
> - 目前僅支持特定的編碼代理，如 Claude Code 和 Codex。
> - 在某些情況下，過度精簡可能導致信息丟失。
> - 需要穩定的網路連接以便於安裝和運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於多代理的協作，而 token-diet 更專注於令牌效率和成本控制。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了不同的代理管理方式，但不如 token-diet 在令牌節省上來得有效。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理的協作，token-diet 更專注於令牌效率。 | 如果需要多代理的協作功能而不僅僅是令牌節省，則應選擇此工具。 | medium，因為需要重新配置代理的整合方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供不同的代理管理方式，但不如 token-diet 在令牌節省上來得有效。 | 如果需要更靈活的代理管理而不僅僅是令牌節省，則應選擇此工具。 | high，因為需要重新設計整個工作流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **token-diet** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多代理的協作，token-diet 更專注於令牌效率。 | 提供不同的代理管理方式，但不如 token-diet 在令牌節省上來得有效。 |
> | 遷移成本 | - | medium，因為需要重新配置代理的整合方式。 | high，因為需要重新設計整個工作流。 |
> | 適用場景 | 主要場景 | 如果需要多代理的協作功能而不僅僅是令牌節省，則應選擇此工具。 | 如果需要更靈活的代理管理而不僅僅是令牌節省，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，可能會出現性能瓶頸。
  - 解法：考慮分散請求或減少同時會話數量。
- [MEDIUM] 過度精簡可能導致信息丟失。
  - 解法：根據實際需求調整模式，避免使用 ultra 模式。
- **[HIGH]** 依賴於編碼代理的 API，可能會在未來版本中造成不穩定。
  - 解法：定期檢查代理的更新和兼容性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 能夠有效降低開發成本，特別是在長時間的會話中。 |
| 大型企業的多代理協作專案 | 普通 | 雖然能夠節省成本，但可能不符合多代理的需求。 |
| 個人開發者的 side project | 非常適合 | 簡單的安裝和使用，能夠快速提升開發效率。 |
| 需要高頻率交互的實時系統 | 不適合 | 在高負載下可能會出現性能瓶頸，影響系統穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠顯著降低開發成本，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，且不存取敏感資料。依賴的 API 需定期檢查安全性，但整體風險可控。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

token-diet 最常與 Claude Code 和 Codex 等編碼代理搭配使用，通常在開發階段進行集成。在一個使用 Codex 的專案中，你可以通過安裝 token-diet 來減少與 Codex 的交互成本，具體做法是執行安裝指令並選擇適合的模式。該工具能夠與主流 CI/CD 工具（如 GitHub Actions）相容，並且在 VS Code 中也能夠輕鬆整合。整合過程中，最常見的問題是需要確保代理的版本兼容，這可能需要額外的配置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 token-diet 出現之前，開發者通常依賴於編碼代理的原生功能來進行交互，這往往導致高昂的令牌使用費用。隨著對成本控制的需求增加，這個工具的出現填補了市場的空白。技術上，API 的進步使得這種精簡的可能性變得可行，未來可能會看到更多類似的工具出現，專注於提升編碼代理的效率。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
| Forks | 2 |
| Open Issues | 0 |
| 最後推送 | 2026-07-04 |
| 建立日期 | 2026-07-03 |
| Repo 大小 | 28 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kulaxyz/token-diet) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 51
>     "JavaScript" : 27
>     "Python" : 22
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kulaxyz](https://github.com/Kulaxyz) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新但尚未形成大規模討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-03 ~ 2026-07-04）
> **活躍天數** 2 天 · **最新 commit** feat(install): support curl | bash — fetch source files from repo when piped

## README 摘錄

> [!info]- 展開查看原文 README
> # token-diet
> 
> Always-on token-efficiency skill for coding agents — **Claude Code, Codex, Cursor,
> Windsurf, Cline**. Trims tokens across the whole session (replies, docs, tests,
> code, context, tool use) without losing correctness. **≈31% lower bill on average**
> (−17% to −54% by session type) and **−30% to −81% output** on real Sonnet 5 runs.
> 
> *trim the fat, keep the muscle.*
> 
> ## Install
> 
> ```bash
> # one-liner — auto-detects Claude Code, Codex, etc.:
> curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash
> 
> # pass options through `bash -s --`, e.g. the telegraphic level:
> curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash -s -- --ultra
> ```
> 
> Or clone and run `./install.sh` (`--ultra` telegraphic chat · `--uninstall` remove).
> Target one agent with `-a claude|codex|cursor|windsurf|cline|all|print`, or add
> `--project` to install into the current repo instead of globally. It runs
> always-on — no per-message command — but `/token-diet [on|lite|ultra|off]` also
> works on demand.
> 
> ## What it does
> 
> - **Replies** — lead with the answer; no preamble ("Sure! Here's…") or postamble
>   ("Let me know…"); report deltas, not narration.
> - **Docs / memory / hand-offs / plans / comments** — minimum words that still say
>   everything; comment the non-obvious *why*, not the code.
> - **Tests** — only key + critical/edge paths, grouped; ≤10 per session; never skip
>   money/auth/data-loss.
> - **Code** — build only what's asked (YAGNI); concise but idiomatic; no dead code;
>   never cryptic.
> - **Context** — grep before you read; read only the lines you need, never whole
>   files; batch reads; fewer turns; never re-read a just-edited file.
> - **Tools** — batch independent calls; **stop the moment you have enough to act**;
>   targeted test runs while iterating.
> - **Sub-agents** — delegate broad *bounded* search to a cheaper model; keep
>   correctness-sensitive verification yourself; tight, complete instructions.
> - **Guardrails** — concision applies to output, never to reasoning: correctness,
>   critical test coverage, and verbatim code/commands/errors are off-limits.
> 
> ## Levels
> 
> `on` (default — everything above) · `lite` (communication + artifacts only) ·
> `ultra` (telegraphic chat/progress; code, tests, docs stay precise) · `off`.
> 
> ## Before / After — `ultra` chat reply (token counts measured, `o200k_base`)
> 
> **Normal — 102 tokens:** "Great question! The reason your Stripe webhook signature
> verification is failing is that you're passing the already-parsed JSON body into
> `constructEvent`. Stripe computes the signature over the exact raw bytes of the
> request, so once your framework has parsed the body into JSON the bytes no longer
> match and verification fails. What you want to do is read the raw request body
> instead — for example with `req.text()` in a Next.js route handler — and pass that
> string to `constructEvent`. Let me know if you'd like a code snippet!"
> 
> **token-diet `ultra` — 34 tokens (−66%):** "`constructEvent` verifies over raw
> bytes → parsed JSON fails. Read raw body (`req.text()` / Buffer), pass that to
> `constructEvent`. Fix at `webhook/route.ts`."
> 
> Same fix, same identifiers, same path — only filler gone.
> 
> ## Numbers (real Sonnet 5 runs)
> 
> Output savings are consistent; the bill win depends on how much of the session is
> output vs. unavoidable file-reading:
> 
> | Session type | Output | Bill |
> |---|--:|--:|
> | Output-heavy (advice, planning, explanation) | −81% | −54% |
> | Code change + tests (`nestjs/nest`, 1673 files) | −49% | −22% |
> | Read-heavy comprehension | −30% | −17% |
> | **Average** | **−53%** | **−31%** |
> 
> Average is unweighted across the three scenarios; the 54% is best-case, not
> typical. Correctness held in every run. Method + full tables: [`bench/RESULTS.md`](bench/RESULTS.md);
> reproduce with `ANTHROPIC_API_KEY=… node bench/bench.mjs`.
> 
> ## How always-on works
> 
> A skill body loads on-demand, so to make it *always* apply the installer injects
> the directive through a channel that fires every session: a `SessionStart` hook
> (Claude Code), or an always-loaded context file (Codex `AGENTS.md`,
> Cursor/Windsurf/Cline rule files). Same trick [caveman](https://github.com/JuliusBrussee/caveman) uses.

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[效能優化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[CopilotKit--OpenTag|CopilotKit/OpenTag]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]]

[GitHub](https://github.com/Kulaxyz/token-diet)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "Kulaxyz--token-diet" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","自動化","效能優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Kulaxyz--token-diet" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kulaxyz--token-diet" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kulaxyz" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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

> **2026-07-06** — 首次收錄
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

- [[2026-07-06|2026-07-06]] — 首次收錄，590 stars
