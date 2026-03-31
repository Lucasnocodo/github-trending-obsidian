---
repo: Infatoshi/OpenSquirrel
url: https://github.com/Infatoshi/OpenSquirrel
owner: Infatoshi
owner_type: User
language: Rust
license: MIT
description: "For people who get distracted by agents. A native Rust/GPUI control plane for running Claude Code, Codex, Cursor, and OpenCode side by side — because if you're going to be squirrely, you might as well optimize for it."
homepage: ""
stars: 1321
stars_per_day: 88
forks: 86
open_issues: 4
created: 2026-03-15
pushed_at: 2026-03-24
first_seen: 2026-03-22
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "多代理管理"
release_tag: ""
install_complexity: "hard"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-22
use_case: "提供一個原生的 Rust/GPUI 控制平面，讓使用者能夠並行運行多個 AI 編碼代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-25"
contributor_count: 1
engagement: "low"
issue_close_rate: 20
repo_size_kb: 48972
readme_length: 3792
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-22"
star_history: "2026-03-22:1235,2026-03-22:1236,2026-03-23:1270,2026-03-24:1290,2026-03-25:1312,2026-03-26:1316,2026-03-27:1315,2026-03-28:1314,2026-03-29:1315,2026-03-30:1317,2026-03-31:1321"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "OpenSquirrel"
  - "Infatoshi/OpenSquirrel"
  - "提供一個原生的 Rust/GPUI 控制平面，讓使用者能夠並行運行多個 AI 編碼代理。"
---

# OpenSquirrel

**1.3k** stars · **88** stars/天 · 建立 15 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/Infatoshi--OpenSquirrel");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `need-GPU/Docker`

> [!summary] 一句話摘要
> 提供一個原生的 Rust/GPUI 控制平面，讓使用者能夠並行運行多個 AI 編碼代理。

> [!info] 速覽
> **安裝難度** Hard · **專案狀態** Recent · **熱度** Growing (88 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在終端中高效運行多個 AI 編碼代理的開發者。
> **一句話重點** 這個專案的教訓是，終端操作的靈活性和效率遠超過任何 GUI 解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多代理管理" && p.file.name !== "Infatoshi--OpenSquirrel" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多代理管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Hard (需環境) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，但由於專案不再維護，未來可能面臨高維護成本，建議謹慎考慮。

> [!abstract] 核心創新
> 這個專案的核心創新在於將多個 AI 編碼代理的管理集中在一個 GUI 中，但最終發現終端已經是最佳解決方案。

## 專案簡介

OpenSquirrel 是一個原生的 GPU 渲染平鋪管理器，旨在讓使用者能夠同時運行多個 AI 編碼代理，如 Claude Code、Codex 和 Cursor。其核心機制是通過 Rust 和 GPUI 技術，實現自動子代理委派、SSH 遠端機器目標和持久會話。這個工具的「一句話賣點」是，讓使用者能夠在一個界面中高效管理多個 AI 編碼代理的工作流。技術上，OpenSquirrel 使用了 Rust 語言的高效性能，並依賴於 GPUI 來進行 GPU 渲染，這使得它在處理圖形界面時具有優越的性能和流暢度。然而，開發者在實作過程中發現，終端已經是最優解，因為所有 AI 編碼 CLI 都提供了良好的終端用戶界面，這使得開發一個新的 GUI 顯得多餘。

與其他工具相比，OpenSquirrel 的設計過於複雜，因為它試圖將多個代理的操作集中在一個 GUI 中，而實際上，使用者更習慣於在終端中直接運行命令。這導致了開發過程中的反饋循環不斷延遲，並使得功能開發的效率大幅下降。使用者在實際操作中，可能會發現使用終端的靈活性和效率遠超於任何 GUI。這個專案的成熟度目前為 alpha 階段，因為它已被標記為不再積極維護，建議使用者考慮其他替代方案。對於需要多代理協作的使用者，建議直接在終端中運行各種 CLI 工具，而不是依賴於這個 GUI 工具。

**技術棧**：`Rust` · `GPUI`

## 重點功能

- GPU 渲染 — 使用 GPUI 技術進行高效的圖形渲染。
- 自動子代理委派 — 支持自動化管理多個 AI 編碼代理的任務。
- SSH 遠端管理 — 能夠通過 SSH 遠端控制多個機器的 AI 編碼任務。
- 持久會話 — 保存和恢復工作狀態，方便使用者隨時接續工作。
- 多代理並行運行 — 允許同時運行多個 AI 編碼代理，提升工作效率。

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 1321 stars（88/天），forks 86（6.5%），顯示出一定的關注度。作者 Infatoshi 之前在開源社群中有其他專案經驗，但這個專案因為發現終端已經是最好的解決方案而被標記為不再維護。這個工具解決了在多個 AI 編碼代理之間進行協作的需求，但最終結論是，使用 CLI 工具的靈活性和效率更高。沒有明顯的觸發事件，但社群對於多代理協作的需求持續存在。由於這個工具的 forks/stars 比率為 6.5%，顯示出有一定的實際使用者在進行修改或實驗。

## 適合誰使用

**目標受眾**：希望在終端中高效運行多個 AI 編碼代理的開發者。

> [!example] 使用場景
> - AI 開發者用它來並行運行多個 AI 編碼代理，因為這樣可以更高效地管理多個任務，避免在不同窗口之間切換的麻煩。
> - 系統管理員用它來遠端管理多個機器的 AI 編碼任務，因為它支持 SSH 遠端目標，能夠在一個界面中集中控制。
> - 研究人員用它來測試不同 AI 編碼代理的性能，因為它提供了持久會話的功能，能夠保存和恢復工作狀態。

## 架構分析

OpenSquirrel 的架構基於 Rust 和 GPUI 技術，旨在提供一個 GPU 渲染的圖形界面。這種設計使得它在處理圖形渲染時具有優越的性能，但也帶來了複雜的開發過程。資料流方面，使用者的輸入通過 Rust 程式碼解析，然後將結果以 GPU 渲染的方式呈現。

這樣的架構選擇雖然提供了高效的渲染能力，但在實際開發中，開發者發現與現有 CLI 工具的整合存在困難，因為它需要解析 JSON 輸出並重新渲染，這導致了開發效率的低下。選擇 Rust 而非其他語言的原因在於其性能和安全性，但這也使得學習曲線變陡。最終，這個專案的架構設計未能達到預期的效果，因為使用者更習慣於終端操作，這使得 GUI 的需求顯得不必要。

## 技術深入分析

OpenSquirrel 的核心技術機制是基於 Rust 和 GPUI，這使得它能夠實現高效的 GPU 渲染。這個專案的設計初衷是希望能夠提供一個集中的 GUI 來管理多個 AI 編碼代理，但在實際開發中，開發者發現這樣的設計與現有的 CLI 工具存在架構上的不匹配。使用者的輸入需要經過 Rust 程式碼解析，然後以 GPU 渲染的方式呈現，這樣的資料流設計雖然理論上可行，但實際上卻導致了開發效率的低下。這個專案的效能特性在於其 GPU 渲染能力，但在實際使用中，開發者發現終端操作的靈活性和效率更高。選擇 Rust 作為開發語言的原因在於其性能和安全性，但這也使得學習曲線變陡。技術風險方面，這個專案的設計決策可能在未來的擴展中出現問題，因為它對於現有 CLI 工具的依賴程度較高，這可能導致未來的維護困難。整合分析方面，這個工具與主流的 CLI 工具整合難度較高，因為它需要解析 JSON 輸出並重新渲染，這使得使用者在實際操作中可能會遇到困難。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡短且明確，但缺乏具體的使用範例。安裝過程可能會遇到一些挑戰，因為需要配置 Rust 環境。沒有提供好的入門指南，且文件缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 使用 Rust 提供高效性能和安全性。
> - 支持 GPU 渲染，提升圖形界面的流暢度。
> - 能夠實現多代理的並行運行，提升工作效率。

> [!danger] 缺點
> - 不再積極維護，未來可能存在安全風險。
> - 設計過於複雜，導致使用者學習成本高。
> - 與現有 CLI 工具整合困難，開發效率低下。

> [!warning] 注意事項
> - 不再積極維護，可能存在未修復的 bug。
> - 設計過於複雜，可能導致使用者學習成本高。
> - 不支持最新的 AI 編碼代理，因為專案已經存檔。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的多代理管理功能，但專注於數據同步而非 GUI 管理，適合需要數據一致性的場景。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude Code 的擴展，提供更專業的功能，而非通用的多代理管理。 |
| [GAIR-NLP/daVinci-MagiHuman](https://github.com/GAIR-NLP/daVinci-MagiHuman) | 針對自然語言處理的多代理協作，功能更專注於 NLP 領域的需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，而非 GUI 管理，適合需要數據一致性的場景。 | 如果你的團隊需要在多個系統之間保持數據一致性，parsync 將是更好的選擇。 | low，因為其設計簡單，容易上手。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude Code 的擴展，提供更專業的功能。 | 如果你的工作主要依賴於 Claude Code，HolyClaude 將提供更合適的功能。 | medium，因為需要調整工作流以適應新工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSquirrel** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步，而非 GUI 管理，適合需要數據一致性的場景。 | 專注於 Claude Code 的擴展，提供更專業的功能。 |
> | 遷移成本 | - | low，因為其設計簡單，容易上手。 | medium，因為需要調整工作流以適應新工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要在多個系統之間保持數據一致性，parsync | 如果你的工作主要依賴於 Claude Code，HolyCl |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 不建議在生產環境中使用，因為專案已經不再維護。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 開發過程中可能會遇到與現有 CLI 工具整合的困難。
  - 解法：建議直接使用 CLI 工具，而非依賴於 GUI。
- **[HIGH]** 不再積極維護，未來可能存在安全風險。
  - 解法：使用者需自行評估風險，並考慮使用其他替代方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要同時運行多個 AI 編碼代理的開發團隊 | 不適合 | 因為專案已經不再維護，且使用者更習慣於終端操作。 |
| 希望集中管理多個 AI 編碼任務的系統管理員 | 不適合 | 因為這個工具的設計過於複雜，且不再維護。 |
| 需要靈活運用 CLI 工具的開發者 | 非常適合 | 因為終端操作的靈活性和效率更高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | high |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，但由於專案不再維護，未來可能面臨高維護成本，建議謹慎考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險，但由於專案不再維護，未來可能存在安全性問題，使用者需自行評估風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenSquirrel 主要與 CLI 工具搭配使用，通常在開發和測試階段中運作。使用者可以在終端中直接運行各種 AI 編碼代理，並通過配置文件進行管理。在一個使用 Rust 的專案中，可以將 OpenSquirrel 作為一個選項，但由於其不再維護，建議使用者考慮其他更活躍的工具。與主流工具鏈的相容性較低，因為它需要解析 JSON 輸出並重新渲染，這使得整合過程中可能會遇到問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenSquirrel 出現之前，開發者主要依賴終端來管理多個 AI 編碼代理，這些工具的 CLI 已經提供了良好的用戶體驗。隨著 AI 編碼代理的普及，對於集中管理的需求逐漸增加，但 OpenSquirrel 的出現並未能解決這一需求，反而因為設計上的不匹配而被標記為不再維護。這個專案的教訓在於，終端操作的靈活性和效率遠超過任何 GUI 解決方案，未來的發展方向應該是等待更成熟的工作流出現後再進行產品化。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
| Forks | 86 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-03-24 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 47.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Infatoshi/OpenSquirrel) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `gpui` `async-channel` `serde` `serde_json` `toml` `anyhow` `gpui-terminal` `portable-pty` `ctrlc` `libc`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Infatoshi](https://github.com/Infatoshi) | 17 |

## 社群與生態

**社群活躍度**：社群活躍度低，因為專案已經不再維護。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-24）
> **活躍天數** 4 天 · **最新 commit** Archive project: update README with learnings, fix assistant message parsing

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Infatoshi/OpenSquirrel/issues/9) | Screenshots? | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> OpenSquirrel
> 
>   This project is no longer actively maintained.
>   Fork it, customize it, make it yours.
> 
>   
> 
> ## What it was
> 
> A native, GPU-rendered tiling manager for AI coding agents. Rust + GPUI. Run Claude Code, Codex, Cursor, Gemini, and OpenCode side by side with automatic sub-agent delegation, remote machine targeting via SSH, and persistent sessions.
> 
> ## Why it's archived
> 
> After a week of building this, I arrived at a simpler conclusion: **you don't need a custom GUI to orchestrate AI agents.**
> 
> Here's what I learned:
> 
> **The terminal already won.** Every AI coding CLI (Claude Code, Codex, Cursor Agent, Gemini CLI, OpenCode) ships with a polished terminal TUI. Building a Rust GUI that parses their JSON output and re-renders it will always be worse than just... using the native TUI. Users are comfortable in their terminal. They don't want a new window.
> 
> **Delegation is a prompt, not a product.** The entire coordinator/worker delegation system -- spawning sub-agents across runtimes, collecting results, feeding them back -- can be done with 4 lines in a `CLAUDE.md` file telling the model to use `cursor agent --print` or `codex exec` via Bash. No orchestration daemon needed. No hooks. No middleware. Claude Code's Agent tool already handles internal delegation. For external CLIs, just run them headless.
> 
> **Token tracking already exists.** [CodexBar](https://github.com/steipete/CodexBar) sits in your macOS menu bar and tracks usage across Claude, Codex, Cursor, Gemini, and more by reading their local data files. No need to build this into a GUI.
> 
> **The architectural mismatch.** Using Claude Code (a Node/Bun process) to build and iterate on a Rust GPU application through JSON stream parsing is a bizarre feedback loop. The model is trained on terminal interactions, not on debugging GPUI render pipelines. Every feature took 10x longer than it should have because the tooling fought the workflow.
> 
> **Models aren't good enough yet for opinionated UX.** Nobody knows the right workflow for multi-agent coding. Building a rigid UI around one workflow locks you in. The terminal is infinitely flexible. Wait for patterns to emerge before building products around them.
> 
> ## What works instead
> 
> The setup I actually use now:
> 
> - **Terminal**: Ghostty (or whatever you prefer)
> - **Agents**: Run them directly -- `claude`, `codex`, `cursor agent`, `gemini`
> - **Delegation**: Instructions in `~/.claude/CLAUDE.md` telling Claude to run external CLIs via Bash when asked
> - **Token tracking**: CodexBar (menu bar app, reads local files)
> - **Multi-agent**: Just open multiple terminal tabs/panes
> 
> That's it. No custom software. The orchestration layer is a config file.
> 
> ## If you want to use or fork this
> 
> The code works. The `legacy` branch at commit `78f1bf2` has the full feature set:
> 
> - Multi-agent grid with auto-layout
> - Coordinator/worker delegation across runtimes
> - Remote SSH targeting with tmux session persistence
> - Reusable UI components (FuzzyList, modal builders, selectable rows)
> - Model picker with fuzzy search (Cmd+M)
> - Token/cost tracking per agent
> - 7 themes, persistent state, MCP integration
> - 93 passing tests
> 
> ### Build & run
> 
> ```bash
> cargo build --release
> # Run as .app bundle:
> cp target/release/opensquirrel dist/OpenSquirrel.app/Contents/MacOS/OpenSquirrel-bin
> open dist/OpenSquirrel.app
> ```
> 
> Requires Rust 1.85+ and macOS (Metal GPU). Linux (Vulkan) compiles and tests pass.
> 
> ### Config
> 
> `~/.osq/config.toml` -- runtimes, machines, MCPs, themes, settings.
> 
> ### Supported runtimes
> 
> | Runtime | CLI | Mode |
> |---------|-----|------|
> | Claude Code | `claude` | Persistent multi-turn |
> | Codex | `codex` | One-shot |
> | Cursor Agent | `cursor agent` | One-shot |
> | Gemini CLI | `gemini` | One-shot |
> | OpenCode | `opencode` | One-shot |
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/Infatoshi/OpenSquirrel)

## 相關收錄

> [!note]- 直接競品（同子分類：多代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多代理管理" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Infatoshi--OpenSquirrel" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Infatoshi--OpenSquirrel" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Infatoshi--OpenSquirrel" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Infatoshi" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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

> **2026-03-22** — 首次收錄
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

- [[2026-03-22|2026-03-22]] — 首次收錄，1.2k stars
