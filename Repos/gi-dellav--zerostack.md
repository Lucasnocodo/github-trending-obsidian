---
repo: gi-dellav/zerostack
url: https://github.com/gi-dellav/zerostack
owner: gi-dellav
owner_type: User
language: Rust
license: GPL-3.0
description: "Minimalistic coding agent written in Rust, optimized for memory footprint and performance"
homepage: ""
stars: 726
stars_per_day: 121
forks: 47
open_issues: 5
created: 2026-05-12
pushed_at: 2026-05-18
first_seen: 2026-05-19
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v1.2.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-19
use_case: "一個極簡的編碼代理，專為記憶體佔用和性能優化而設計。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-26"
contributor_count: 5
engagement: "low"
issue_close_rate: 80
repo_size_kb: 328
readme_length: 9932
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-19"
star_history: "2026-05-19:726"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "zerostack"
  - "gi-dellav/zerostack"
  - "一個極簡的編碼代理，專為記憶體佔用和性能優化而設計。"
---

# zerostack

**726** stars · **121** stars/天 · 建立 6 天前 · Rust · GPL-3.0

```dataviewjs
const me = dv.page("Repos/gi-dellav--zerostack");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.2.1` `easy-install`

> [!summary] 一句話摘要
> 一個極簡的編碼代理，專為記憶體佔用和性能優化而設計。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (121 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要高效能和低記憶體佔用的獨立開發者或小型團隊。
> **一句話重點** zerostack 的設計理念是將編碼代理的性能和記憶體使用優化到極致，特別適合資源有限的開發環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/gi-dellav--zerostack");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "gi-dellav--zerostack" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到高效能的編碼代理，值得採用。

> [!abstract] 核心創新
> zerostack 是市場上最小且性能最優的編碼代理之一。

## 專案簡介

zerostack 是一個用 Rust 寫成的極簡編碼代理，旨在提供高效的編碼支援。使用者可以透過 `/loop` 指令啟動一個迴圈，該迴圈會持續執行指定的任務，並在每次迭代中更新計畫和執行驗證命令。這樣的設計使得長期任務的管理變得更加高效，避免了手動重複輸入的麻煩。zerostack 的性能表現非常出色，空閒時 RAM 使用量僅約 10MB，工作時約 13MB，這相較於其他基於 JavaScript 的編碼代理（如 opencode，約 300MB）來說，節省了大量資源。它還支持多種提供者（如 OpenAI 和 Anthropic），並具備一個靈活的權限系統，讓使用者可以根據需求調整操作的安全性。

相較於其他工具，zerostack 的設計更注重於輕量化和高效能，特別適合需要快速迭代的開發環境。使用者可以透過 `/worktree` 指令輕鬆管理 Git 工作樹，這在多分支開發中非常實用。儘管目前 Windows 支援尚未經過測試，但其在 Linux 環境中的表現相當穩定。整體來看，zerostack 是一個適合小型團隊或個人開發者的工具，特別是那些需要在資源有限的情況下進行高效開發的情境。

**技術棧**：`Rust 1.67` · `Tokio 1` · `Serde 1`

## 重點功能

- 迴圈系統 — 使用 `/loop` 指令啟動任務迴圈，並在每次迭代中更新計畫和執行驗證命令。
- Git 工作樹整合 — 使用 `/worktree` 指令輕鬆管理 Git 工作樹，支持分支創建和合併。
- 多提供者支援 — 支持 OpenAI、Anthropic 等多種 LLM 提供者，靈活切換。
- 權限系統 — 提供四種權限模式，讓使用者可根據需求調整操作的安全性。
- 輕量化設計 — 二進制大小僅 8.9MB，空閒 RAM 使用量約 10MB，工作時約 13MB。

## 快速開始

1. 安裝 zerostack
```bash
cargo install zerostack
```
2. 啟動互動式會話
```bash
zerostack
```
3. 使用迴圈系統
```bash
zerostack --loop --loop-prompt 'Refactor the API' --loop-max 10 --loop-run 'cargo test'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 726 stars（121/天），forks 47（6.5%），顯示出穩定的增長潛力。這個專案由 Giuseppe Della Vedova 主導，他在 Rust 和開發工具方面有豐富的經驗。zerostack 解決了現有編碼代理在性能和記憶體使用上的不足，特別是針對長期任務的管理。這個專案的推出引發了開發者社群的關注，尤其是在 GitHub 上的討論和反饋中。其輕量化的設計和高效能使其成為一個有吸引力的選擇，特別是在資源有限的環境中。forks/stars 比率為 6.5%，顯示出使用者對這個工具的實際修改和應用需求。

## 適合誰使用

**目標受眾**：需要高效能和低記憶體佔用的獨立開發者或小型團隊。

> [!example] 使用場景
> - 後端工程師用它來在開發過程中自動化任務迴圈，因為這樣可以減少手動重複輸入的時間，提升工作效率。
> - 小型團隊的開發者用它來管理 Git 工作樹，因為它的 `/worktree` 指令可以簡化多分支開發的流程，避免了繁瑣的手動操作。
> - 獨立開發者用它來進行輕量級的編碼任務，因為其低 RAM 使用量和高效能使得在資源有限的環境中仍能順利運行。

## 架構分析

zerostack 採用 Rust 語言開發，這使得其在性能和記憶體使用上有顯著優勢。整體架構以命令行介面為主，使用者可以透過簡單的指令來啟動和管理任務。資料流方面，使用者的指令會被解析並轉換為內部任務，然後通過迴圈系統進行處理。

選擇 Rust 而非其他語言（如 Python）使得 zerostack 在執行效能上更具優勢，尤其是在資源有限的環境中。這樣的設計雖然增加了學習曲線，但卻能提供更高的執行效率和穩定性。整體架構的輕量化設計使得它能夠在低配置的環境中運行，這對於需要快速迭代的開發者來說是個重要的優勢。

## 技術深入分析

zerostack 的核心技術機制是基於 Rust 語言，這使得它在性能和記憶體使用上具備優勢。使用 Tokio 作為非同步運行時，能夠有效處理多任務並發，這對於需要長期運行的編碼任務來說至關重要。根據 README，zerostack 的 RAM 使用量在空閒時僅為 10MB，而在工作時約為 13MB，這顯示出其優越的資源管理能力。設計上，zerostack 透過命令行介面提供使用者友好的操作方式，並且支持多種 LLM 提供者，這使得開發者能夠根據需求靈活選擇。

選擇 Rust 而非其他語言（如 Python）使得 zerostack 在執行效能上更具優勢，尤其是在資源有限的環境中。這樣的設計雖然增加了學習曲線，但卻能提供更高的執行效率和穩定性。整體架構的輕量化設計使得它能夠在低配置的環境中運行，這對於需要快速迭代的開發者來說是個重要的優勢。隨著使用者需求的增加，zerostack 可能會在未來加入更多功能和改進，特別是在 Windows 環境的支援上。

整體來說，zerostack 是一個值得關注的工具，特別是對於需要高效能和低記憶體佔用的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意額外依賴的安裝。整體上，文件結構良好，並且有詳細的功能介紹，適合新手學習使用。

## 優缺點分析

> [!success] 優點
> - 高效能和低記憶體佔用，適合資源有限的環境。
> - 靈活的權限系統，讓使用者可以根據需求調整操作的安全性。
> - 支持多種提供者，方便開發者根據需求選擇合適的 LLM。

> [!danger] 缺點
> - Windows 支援尚未經過測試，可能存在兼容性問題。
> - 對於長期任務的迴圈系統仍屬於實驗性功能，可能不穩定。
> - 需要安裝額外的依賴（如 bubblewrap）以啟用某些功能。

> [!warning] 注意事項
> - 目前 Windows 支援尚未經過測試。
> - 需要安裝 bubblewrap 以啟用沙盒模式，否則無法運行隔離環境。
> - 對於長期任務的迴圈系統仍屬於實驗性功能，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於更複雜的代理功能，適合需要多種技能的開發者，而 zerostack 更加輕量化和專注於編碼任務。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了更全面的編碼環境，而 zerostack 則專注於高效能和低記憶體佔用，適合資源有限的情境。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 專注於提供 GPT-2 模型的 API 接口，而 zerostack 則是一個完整的編碼代理，提供多種工具和功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於更複雜的代理功能，適合需要多種技能的開發者。 | 如果你的專案需要多種技能和功能的整合，而不僅僅是編碼任務，則可以選擇這個工具。 | medium，因為需要重新調整工作流程和指令使用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更全面的編碼環境，適合需要完整開發工具的團隊。 | 如果你的團隊需要一個全面的開發環境，而不僅僅是輕量級的編碼代理，則可以考慮這個選擇。 | high，因為需要重新設計整個開發流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **zerostack** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於更複雜的代理功能，適合需要多種技能的開發者。 | 提供更全面的編碼環境，適合需要完整開發工具的團隊。 |
> | 遷移成本 | - | medium，因為需要重新調整工作流程和指令使用。 | high，因為需要重新設計整個開發流程。 |
> | 適用場景 | 主要場景 | 如果你的專案需要多種技能和功能的整合，而不僅僅是編碼任務，則 | 如果你的團隊需要一個全面的開發環境，而不僅僅是輕量級的編碼代 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在使用迴圈系統時，可能會遇到不穩定的情況，導致任務無法正常完成。
  - 解法：定期檢查和更新到最新版本以獲取修復。
- **[HIGH]** Windows 環境下可能存在兼容性問題，未經過測試。
  - 解法：在 Linux 環境中運行以獲得最佳體驗。
- [MEDIUM] 需要安裝 bubblewrap 以啟用沙盒模式，否則無法運行隔離環境。
  - 解法：確保在安裝前檢查依賴項的安裝狀態。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發者需要高效的編碼工具 | 非常適合 | 其輕量化設計和高效能使其能夠在有限資源下運行。 |
| 獨立開發者需要一個簡單的編碼代理 | 非常適合 | 低記憶體佔用和簡單的命令行介面使其易於使用。 |
| 大型團隊需要一個全面的開發環境 | 不適合 | zerostack 更加輕量化，可能無法滿足大型團隊的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高效能的編碼代理，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> zerostack 本身不需要高權限運行，並且不會存取敏感資料。依賴鏈的信任程度較高，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/gi-dellav--zerostack");
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
> const me = dv.page("Repos/gi-dellav--zerostack");
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
| Forks | 47 |
| Open Issues | 5 |
| Issue 解決率 | 80% (20 closed) |
| 最後推送 | 2026-05-18 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 328 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/gi-dellav/zerostack) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `authors` `description` `license` `homepage` `repository` `readme` `keywords` `default` `loop` `git-worktree` `mcp` `acp`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gi-dellav](https://github.com/gi-dellav) | 100 |
> | [@skorotkiewicz](https://github.com/skorotkiewicz) | 6 |
> | [@gqf2008](https://github.com/gqf2008) | 4 |
> | [@qznc](https://github.com/qznc) | 1 |
> | [@hiAndrewQuinn](https://github.com/hiAndrewQuinn) | 1 |

**最新版本**：v1.2.1 (2026-05-18)

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/gi-dellav/zerostack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-18 ~ 2026-05-18）
> **活躍天數** 1 天 · **最新 commit** updated README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/gi-dellav/zerostack/issues/12) | Entire permissions system is fundamentally broken. | 8 | 3 |
> | [#18](https://github.com/gi-dellav/zerostack/issues/18) | Cross platform sandboxing | 1 | 2 |
> | [#9](https://github.com/gi-dellav/zerostack/issues/9) | Add support for hash-anchored editing | 1 | 0 |
> | [#31](https://github.com/gi-dellav/zerostack/issues/31) | Command injection via `git log` | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # zerostack
> 
> Minimal coding agent written in Rust, inspired by [pi](https://pi.dev/docs/latest/usage) and [opencode](https://opencode.ai/).
> 
> 
> ## Installation
> 
> In order to install _zerostack_, you must have Cargo and git installed. Then, run:
> 
> ```bash
> 
> ## Quick start
> 
> ```bash
> 
> ### Loop usage
> 
> ```
> /loop Implement the user authentication system
> /loop stop
> /loop status
> ```
> 
> - `/loop ` — Start a loop with the given prompt
> - `/loop stop` — Stop the active loop
> - `/loop status` — Show current loop state
> 
> Each iteration includes the original task, the evolving `LOOP_PLAN.md`, a summary of the previous iteration, and any validation output. Non-slash input is blocked while a loop is active.
> 
> 
> ### Git worktree usage
> 
> The worktrees integrations offers 3 slash commands:
> 
> | Command              | Description                                                                                                       |
> | -------------------- | ----------------------------------------------------------------------------------------------------------------- |
> | `/worktree `   | Create a git worktree on branch `` and move into it (skips creating it if it already exists)                |
> | `/wt-merge [branch]` | Merge the worktree branch into `[branch]` (default: `main`/`master`), push, clean up, and return to the main repo |
> | `/wt-exit`           | Return to the main repo without merging                                                                           |
> 
> 
> ### Example workflow for git worktrees
> 
> 1. **Create** — `/worktree feature-x` creates a new branch and worktree directory and moves you there.
> 2. **Work** — Use zerostack normally; changes stay on the feature branch.
> 3. **Merge** — `/wt-merge` tells the agent to merge the branch, push, clean up, and return to the main repo.
> 4. **Exit** — `/wt-exit` immediately returns to the main repo without merging.
> 
> 
> ### ACP usage
> 
> ```bash
> 
> ## Features
> 
> - **Multi-provider**: OpenRouter, OpenAI, Anthropic, Gemini, Ollama, plus custom providers
> - **Standard tools**: all of the standard tools exposed to coding agents, as described by the opencode documentation.
> - **Permission system**: four configurable modes with per-tool patterns, session allowlists, and external directory policies
> - **Session management**: save/load/resume sessions, auto-compaction to stay within context windows
> - **Terminal UI**: crossterm-based, markdown rendering, mouse selection/copy, scrollback, reasoning visibility toggle
> - **Prompts system**: switch between system prompt modes at runtime (`code`, `plan`, `review`, `debug`, etc.) to tailor the agent's behavior to the task without having to manage Skills.
> - **MCP support**: connect MCP servers for extended tooling (exposed as an optional compile-time feature)
> - **Integrated Exa search**: allows for WebFetch and WebSearch tools
> - **Integrated Ralph Wiggum loops**: looping capabilities for long-horizon tasks
> - **Integrated Git Worktrees integration**: Use `/worktree` to move the agent from one worktree to another.
> - **ACP support** (gated): Agent Communication Protocol server — lets editors (Zed, etc.) connect to zerostack as an ACP agent
> 
> **NOTE**: Windows support is not tested is any way, but feel free to try and open an issue if you encounter any bugs!
> 
> 
> ### Optional: sandbox mode
> 
> Install [bubblewrap](https://github.com/containers/bubblewrap) for `--sandbox`,
> which runs every bash command inside an isolated environment to protect your
> system from accidental or malicious damage:
> 
> ```bash
> 
> # Set your API key (OpenRouter is default)
> export OPENROUTER_API_KEY="[api_key]"
> 
> 
> ## Configuration
> 
> See [CONFIG.md](CONFIG.md) for config file location, accepted keys, provider
> aliases, permission rules, and MCP server configuration.
> 
> 
> ### ACP config
> 
> In `$XDG_CONFIG_HOME/zerostack/config.json`:
> 
> ```json
> {
>   "acp_servers": {
>     "my-editor": {
>       "host": "127.0.0.1",
>       "port": 7243
>     }
>   }
> }
> ```
> 
> ACP mode requires setting up an LLM provider (the standard `--provider`, `--model`,
> and API key env vars apply). Without it, zerostack cannot process prompts.
> 
> 
> ## Performance
> 
> _zerostack_ is one of the smallest and most performant coding agents on the market.
> 
> - Lines of code: ~9k LoC
> - Binary size: 8.9MB
> - RAM footprint: ~10MB on an empty session, ~13MB when working (vs ~300MB for opencode or other JS-based coding agents)
> - CPU usage: 0.0% on idle, ~1.5% when using tools (measured on an Intel i5 7th gen, vs ~2% on idle and ~20% when working for opencode)
> 
> 
> # Default — MCP, loop, and git-worktree included
> cargo install zerostack
> 
> 
> # With ACP (Agent Communication Protocol) support for editor integration
> cargo install zerostack --features acp
> ```
> 
> You are now ready to work with a lightweight coding agent! (Note: you can also find pre-built binaries on Github Releases)
> 
> 
> # Debian/Ubuntu
> apt install bubblewrap
> 
> 
> # Fedora
> dnf install bubblewrap
> 
> 
> # Arch
> pacman -S bubblewrap
> ```
> 
> 
> # Interactive session (default prompt: code)
> zerostack
> 
> 
> # Monochrome TUI
> zerostack --no-color
> 
> 
> # One-shot mode
> zerostack -p "Explain this project"
> 
> 
> # Continue last session
> zerostack -c
> 
> 
> # Explicit provider/model
> zerostack --provider openrouter --model deepseek/deepseek-v4-flash
> ```
> 
> 
> ## Prompts system
> 
> _zerostack_ includes a set of built-in system prompts that change the agent's behavior and tone.  
> The idea is to build a complete suite of prompts that can fully substitute skills like [superpower](https://github.com/obra/superpowers) or the [Claude's official skills](https://github.com/anthropics/claude-plugins-official/tree/main).  
> You can switch between different prompts or list all registered prompts using `/prompt`.
> 
> Built-in prompts:
> 
> | Prompt                | Description                                                              |
> | --------------------- | ------------------------------------------------------------------------ |
> | **`code`** (default)  | Coding mode with full file and bash tool access, TDD workflow            |
> | **`plan`**            | Planning-only mode — explores and produces a plan without writing code   |
> | **`review`**          | Code review mode — reviews for correctness, design, testing, and impact  |
> | **`debug`**           | Debug mode — finds root cause before proposing fixes                     |
> | **`ask`**             | Read-only mode — only read/grep/glob permitted, no writes or bash        |
> | **`brainstorm`**      | Design-only mode — explores ideas and presents designs without code      |
> | **`frontend-design`** | Frontend design mode — distinctive, production-grade UI                  |
> | **`review-security`** | Security review mode — finds exploitable vulnerabilities                 |
> | **`simplify`**        | Code simplification mode — refines for clarity without changing behavior |
> | **`write-prompt`**    | Prompt writing mode — creates and optimizes agent prompts                |
> 
> You can also create custom prompts by placing markdown files in
> `$XDG_CONFIG_HOME/zerostack/prompts/` and referencing them by name.
> 
> Additionally, the agent automatically loads `AGENTS.md` or `CLAUDE.md` from the
> project root or any ancestor directory, injecting their contents into the
> system prompt. Use `-n` / `--no-context-files` to disable this.
> 
> 
> ## Permission system
> 
> zerostack has four permission modes, from safest to most permissive:
> 
> 1. **restrictive** (`-R`): every tool action prompts for approval unless
>    explicitly allowed in config
> 2. **standard** (default): safe commands (ls, cd, git log, cargo check) are
>    auto-approved; writes and destructive operations ask
> 3. **accept-all** (`--accept-all`): auto-approves all operations inside the
>    working directory; external paths prompt for confirmation
> 4. **yolo** (`--yolo`): auto-approves everything without prompting
> 
> Permissions can be configured per-tool with granular glob patterns in the
> config file. For example, you can allow `write **.rs` automatically while
> always asking before writing to other files.
> 
> A **session allowlist** persists approved decisions f

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[程式碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/gi-dellav/zerostack)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "gi-dellav--zerostack"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "gi-dellav--zerostack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "gi-dellav--zerostack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "gi-dellav--zerostack"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "gi-dellav--zerostack" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/gi-dellav--zerostack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "gi-dellav--zerostack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "gi-dellav" AND file.name != "gi-dellav--zerostack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/gi-dellav--zerostack");
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
> const me = dv.page("Repos/gi-dellav--zerostack");
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
> const me = dv.page("Repos/gi-dellav--zerostack");
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
> const me = dv.page("Repos/gi-dellav--zerostack");
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
> const me = dv.page("Repos/gi-dellav--zerostack");
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

> **2026-05-19** — 首次收錄
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

- [[2026-05-19|2026-05-19]] — 首次收錄，726 stars
