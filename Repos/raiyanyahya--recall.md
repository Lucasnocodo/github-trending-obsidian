---
repo: raiyanyahya/recall
url: https://github.com/raiyanyahya/recall
owner: raiyanyahya
owner_type: User
language: Python
license: MIT
description: "Stop wasting tokens and re-explaining your project every session. Recall gives Claude Code durable memory — entirely offline."
homepage: "https://recallplugin.dev"
stars: 543
stars_per_day: 91
forks: 27
open_issues: 1
created: 2026-06-19
pushed_at: 2026-06-25
first_seen: 2026-06-26
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "記憶管理"
release_tag: "v0.3.6"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-26
use_case: "為 Claude Code 提供持久的本地記憶，避免每次會話重複解釋專案。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-03"
contributor_count: 1
engagement: "low"
issue_close_rate: 67
repo_size_kb: 125
readme_length: 9112
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-26"
star_history: "2026-06-26:543"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/anthropic"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "recall"
  - "raiyanyahya/recall"
  - "為 Claude Code 提供持久的本地記憶，避免每次會話重複解釋專案。"
---

# recall

**543** stars · **91** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/raiyanyahya--recall");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.3.6` `easy-install`

`ai` `ai-agents` `anthropic` `claude` `claude-code` `claude-code-plugin` `claude-plugin` `context` `developer-tools` `llm` `local-first` `memory` `offline` `privacy` `productivity` `python` `summarization` `textrank`

> [!summary] 一句話摘要
> 為 Claude Code 提供持久的本地記憶，避免每次會話重複解釋專案。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (91 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在本地運行 Claude Code 並希望避免重複解釋專案的開發者。
> **一句話重點** Recall 的最大優勢在於其完全本地化的設計，讓用戶能夠在不擔心隱私的情況下，持久記錄專案進度。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/raiyanyahya--recall");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶管理" && p.file.name !== "raiyanyahya--recall" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的本地記憶管理，值得採用。

> [!abstract] 核心創新
> Recall 提供了一個完全本地化的記憶解決方案，無需依賴外部 API 或模型。

## 專案簡介

Recall 是一個為 Claude Code 提供的本地記憶插件，旨在解決每次會話開始時的冷啟動問題。它通過在本地記錄會話活動並生成摘要，讓用戶能夠在新會話中快速恢復之前的工作進度。用戶只需運行 `/recall:save` 指令，Recall 會將當前會話的歷史記錄寫入 `history.md`，並生成 `context.md` 作為摘要，這一切都在本地完成，無需 API 認證或外部模型。這樣的設計不僅節省了使用者的模型代幣，還能保護用戶的隱私，因為所有數據都不會離開本機。技術上，Recall 使用 TF-IDF 和 TextRank 進行摘要生成，這意味著它不依賴於大型模型，而是利用經典的文本處理技術來達成目標。與其他記憶工具相比，如 Claude 的內建記憶功能，Recall 提供了一個自動化且持久的記錄，減少了手動維護的需求，並且能夠以更低的成本恢復會話。這使得 Recall 特別適合需要長期專案記錄的開發者，尤其是在本地環境中運行 Claude Code 的用戶。

**技術棧**：`Python 3.9`

## 重點功能

- 本地記憶 — 所有數據完全在本地處理，無需網絡連接或 API 鍵。
- /recall:save 指令 — 用於保存當前會話的歷史記錄並生成摘要。
- TF-IDF + TextRank 摘要生成 — 使用經典算法進行文本摘要，無需大型模型。
- 自動捕捉歷史 — 會話過程中自動記錄活動，無需手動維護。
- 隱私保護 — 不會將任何數據發送到外部服務，確保用戶隱私。

## 快速開始

1. 從市場安裝插件
```bash
/plugin marketplace add raiyanyahya/recall
```
2. 安裝 Recall 插件
```bash
/plugin install recall@recall
```
3. 啟動 Claude Code 並加載插件
```bash
claude --plugin-dir /path/to/recall
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Recall 插件並啟動 Claude Code。",
  "指令": "/recall:save",
  "預期輸出": "將當前會話的歷史記錄寫入 `history.md`，並生成 `context.md`。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 543 stars（90.5/天），forks 27（5.0%），這顯示出使用者對於本地記憶解決方案的需求。作者 raiyanyahya 之前在 AI 領域有豐富的經驗，這個專案解決了用戶在使用 Claude Code 時的冷啟動問題，避免了重複解釋專案的麻煩。最近的更新修復了 Windows 環境中的幾個關鍵問題，這也促進了使用者的參與和反饋。這個工具的可行性得益於本地計算能力的提升，讓用戶能夠在不依賴雲端服務的情況下，獲得持久的記憶功能。forks/stars 比率適中，顯示出有一定的實際使用和修改需求。

## 適合誰使用

**目標受眾**：需要在本地運行 Claude Code 並希望避免重複解釋專案的開發者。

> [!example] 使用場景
> - 後端工程師用它來記錄專案會話，因為可以避免每次重複解釋專案背景，節省時間。
> - 自由職業者用它來管理多個客戶專案，因為能夠快速回顧上次會話的內容，提升工作效率。
> - 團隊成員用它來共享專案進度，因為可以將 `context.md` 提交到版本控制系統，保持團隊同步。

## 架構分析

Recall 的架構設計以本地運行為核心，避免了對外部服務的依賴。它通過在會話過程中自動記錄活動，並在會話結束時生成摘要，實現了持久記憶的功能。數據流從用戶的會話活動開始，經過本地的 TF-IDF 和 TextRank 算法處理，最終生成可讀的摘要文件。這樣的設計使得 Recall 在隱私和性能上都有優勢，但也意味著無法利用雲端的計算能力來進行更複雜的分析。擴展性方面，由於完全依賴本地環境，對於大型專案的支持可能會受到限制。

## 技術深入分析

Recall 的核心技術機制在於其本地記憶的實現，使用 TF-IDF 和 TextRank 進行摘要生成，這些算法在處理文本時能夠有效提取出關鍵信息。效能方面，Recall 能夠處理大約 200,000 字符的輸入，並且在沒有大型模型的情況下，依然能夠生成高質量的摘要。設計上，Recall 選擇使用 Python 標準庫，這樣能夠減少依賴，降低使用門檻，但也意味著在某些計算密集型任務上可能會受到性能限制。技術風險方面，由於完全依賴本地環境，若用戶的機器性能不足，可能會影響 Recall 的運行效率。整合方面，Recall 能夠與 Claude Code 進行良好的配合，使用者只需簡單的指令即可進行操作，並且能夠輕鬆地與現有的開發流程結合。整體來看，Recall 提供了一個簡單而有效的本地記憶解決方案，適合希望在本地環境中運行的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對簡單，沒有複雜的依賴問題。文件提供了良好的入門指南，讓用戶能夠在短時間內開始使用 Recall。

## 優缺點分析

> [!success] 優點
> - 完全本地化，無需擔心數據隱私問題。
> - 簡單的安裝和使用流程，無需複雜的配置。
> - 能夠自動記錄會話，減少手動維護的需求。

> [!danger] 缺點
> - 僅支援 Python 3.9 以上版本，對於舊版本用戶不友好。
> - 在 Windows 環境中可能需要額外的配置。
> - 無法利用雲端計算資源進行更高效的數據處理。

> [!warning] 注意事項
> - 僅支援 Python 3.9+。
> - 在某些 Windows 環境中可能需要手動調整配置。
> - 不支援直接從雲端服務獲取數據，完全依賴本地環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供的記憶功能依賴於雲端存儲，而 Recall 完全在本地運行，這樣能更好地保護用戶隱私。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供的記憶功能需要額外的配置和安裝，而 Recall 的安裝過程簡單，無需 pip 安裝。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供了一個基於雲端的記憶管理系統，而 Recall 則完全在本地運行，這樣能更好地保護用戶隱私。 | 如果你的團隊已經在使用雲端服務並需要跨設備同步記憶，Agent Sprite Forge 可能更適合。 | medium — 需要將現有的雲端記憶數據轉移到本地系統。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供了一個基於 LLM 的記憶管理系統，而 Recall 則使用本地算法，這樣能減少使用成本。 | 如果需要更高級的記憶功能並且不介意使用 LLM，HolyClaude 可能更合適。 | high — 需要重新設計記憶管理流程以適應 LLM 的使用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **recall** | **agent-sprite-forge** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Agent Sprite Forge 提供了一個基於雲端的記憶管理系統，而 Recall 則完全在本地運行，這樣能更好地保護用戶隱私。 | HolyClaude 提供了一個基於 LLM 的記憶管理系統，而 Recall 則使用本地算法，這樣能減少使用成本。 |
> | 遷移成本 | - | medium — 需要將現有的雲端記憶數據轉移到本地系統。 | high — 需要重新設計記憶管理流程以適應 LLM 的使用。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用雲端服務並需要跨設備同步記憶，Agen | 如果需要更高級的記憶功能並且不介意使用 LLM，HolyCl |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境中，可能會因為找不到 python3 而導致插件無法正常運行。
  - 解法：確保使用 python 命令而不是 python3，或手動調整配置。
- [MEDIUM] 在某些情況下，歷史記錄可能無法正確捕捉。
  - 解法：檢查插件的配置文件，確保 capture_history 設置為 true。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的專案開發 | 非常適合 | 能夠有效記錄會話並減少重複解釋的需求。 |
| 個人開發者的長期專案 | 適合 | 提供本地記憶功能，適合需要長期跟蹤進度的開發者。 |
| 需要高頻更新的專案 | 普通 | 在高頻更新的情況下，可能需要更高效的記憶管理解決方案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的本地記憶管理，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Recall 不需要高權限，所有數據處理都在本地完成，並且不會存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/raiyanyahya--recall");
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
> const me = dv.page("Repos/raiyanyahya--recall");
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
| Forks | 27 |
| Open Issues | 1 |
| Issue 解決率 | 67% (2 closed) |
| 最後推送 | 2026-06-25 |
| 建立日期 | 2026-06-19 |
| 官方網站 | [Link](https://recallplugin.dev) |
| Repo 大小 | 125 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/raiyanyahya/recall) |
| Topics | `ai` `ai-agents` `anthropic` `claude` `claude-code` `claude-code-plugin` `claude-plugin` `context` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@raiyanyahya](https://github.com/raiyanyahya) | 19 |

**最新版本**：v0.3.6 — Recall 0.3.6 (2026-06-25)

> [!info]- Release Notes
> Recall now works on a standard Windows install. Previously the plugin would
>   install and the slash commands would appear, but **nothing was ever captured or
>   surfaced** — every failure was swallowed by the defensive handling that keeps
>   Recall from crashing a Claude Code session. Three independent Windows-specific
>   bugs were responsible, all reported in #6 by @driano1221.
> 
>   ## 🪟 Fixed
> 
>   - **`python3` not found.** The hooks and `/recall:save` invoked `python3`, which
>     a standard Windows install doesn't provide, so capture and the session recap
>     never ran. They now fall back to `python` (`python3 … || python …`, valid in
>     both `cmd` and POSIX `sh`).
>   - **Transcript directory never matched.** Recall didn't reproduce Claude Code's
>     Windows project-dir encoding — the drive colon, backslashes and spaces all
>     become `-` (e.g. `C:\foo bar` → `C--foo-bar`) — so `/recall:save` and session
>     resume reported "no session transcript found." It now derives the name
>     correctly, which also fixes Unix/macOS paths that contain spaces.
>   - **Recap crashed on emoji.** The session-start recap printed non-ASCII that
>     raised `UnicodeEncodeError` under Windows' default cp1252 console, silently
>     dropping the recap even when a saved `context.md` existed. Output is now UTF-8.
> 
>   These preserve Recall's core guarantee — failures stay silent so they can never
>   break your session — they just no longer make the plugin invisible on Windows.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續修復問題並更新功能。
**連結**：[文件](https://recallplugin.dev)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-20 ~ 2026-06-25）
> **活躍天數** 4 天 · **最新 commit** Recall 0.3.6 — fix three silent Windows failures (python3, path encoding, cp1252)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/raiyanyahya/recall/issues/8) | Feature request: /recall:search command to search history.md | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 🔁
> Recall — fully-local project memory for Claude Code
> 
>   
>   
>   
>   
>   
> 
> > Claude Code starts every session cold. Recall keeps a local log of your
> > sessions and condenses it into a resume-ready summary — **entirely on your
> > machine**. No API key, no external model, nothing sent anywhere. It's built for
> > people running Claude Code locally on a subscription: the only AI in the loop is
> > Claude Code itself; the summarization is done by a classical Python summarizer.
> 
> 
> ## Install
> 
> **From the marketplace** (this repo is its own marketplace):
> 
> ```
> /plugin marketplace add raiyanyahya/recall
> /plugin install recall@recall
> ```
> 
> **Local dev** (no install step):
> 
> ```
> claude --plugin-dir /path/to/recall
> ```
> 
> No `pip install` — the summarizer is vendored and stdlib-only (numpy used as an
> optional accelerator if present). Work a session, run `/recall:save`, and open
> a fresh session — Recall greets you with where you left off.
> 
> 
> ## Configuration — `recall.config.json`
> 
> Drop this in your project root to override defaults:
> 
> | Key | Default | Purpose |
> |---|---|---|
> | `output_dir` | `".recall"` | Where `history.md` / `context.md` live. |
> | `capture_history` | `true` | Append session activity to `history.md`. |
> | `auto_save_context` | `"off"` | Regenerate `context.md` when a session ends: `"off"` or `"on_end"`. |
> | `summary_sentences` | `8` | How many sentences the summary keeps. |
> | `redact` | `true` | Strip obvious secrets before writing the md files. |
> | `include_git` | `true` | Add `git diff --stat` + recent commits to `context.md`. |
> | `max_input_chars` | `200000` | Cap on text fed to the summarizer (oldest dropped). |
> 
> **Pause logging** for a project without editing config: create
> `.recall/.capture-paused`. Delete it to resume.
> 
> 
> ## Why Recall
> 
> - **Free on your subscription.** It solves the cold-start problem — no more
>   re-explaining the project each session — without a metered summarizer running up
>   a bill. The summary is a local algorithm, not an LLM call, so persistent memory
>   costs you nothing beyond the subscription you already pay for.
> - **Saves your usage credits.** Two ways: (1) the summary is built locally, so
>   capturing and updating your memory spends **zero** model tokens; and (2)
>   resuming from a compact `context.md` (~1–2K tokens) instead of re-explaining the
>   project from scratch each session means far fewer tokens spent per session —
>   stretching your subscription's usage limits (or, on the API, lowering billed
>   credits).
> - **Nothing leaves your machine.** Your transcripts (code, paths, sometimes
>   secrets) are never sent to any API. Most "memory" tools pipe your context to a
>   model endpoint; Recall makes a privacy guarantee they can't. See
>   [PRIVACY.md](PRIVACY.md) for the full policy.
> - **Zero-friction.** No `pip install`, no local model to run, no key to configure,
>   works offline. It starts working the moment the plugin loads.
> 
> Two files, written into your project under `.recall/`:
> 
> - **`history.md`** — *the log.* Append-only. Every session is captured here as it
>   happens (your prompts, Claude's replies, the files touched and commands run).
> - **`context.md`** — *the summary.* Overwritten by the local summarizer — the
>   condensed "where are we right now" you load into the next session: goal,
>   summary, **next steps / open threads**, files touched, and where you left off.
> 
> 
> ## "Doesn't Claude Code already have memory?"
> 
> It does — and Recall is complementary, not a replacement. The built-in options
> solve different problems:
> 
> - **`CLAUDE.md` (and the `#` shortcut)** is *hand-written* memory: rules and notes
>   **you** curate, loaded as **instructions Claude follows**. Great for "how I want
>   you to work," but it's manual upkeep and it doesn't record what actually
>   happened in a session.
> - **`--continue` / `--resume`** replays a *prior conversation* — full fidelity, but
>   it reloads the whole transcript (token-heavy) and is tied to your local session
>   history on one machine, not a portable, readable digest.
> - **Context compaction** condenses a conversation *within* a session; it isn't a
>   durable record you reopen days later.
> 
> Recall fills the gap between these: an **automatic, deterministic record of what
> each session did**, condensed into a compact resume point.
> 
> | | `CLAUDE.md` / `#` | `--continue` / `--resume` | **Recall** |
> |---|---|---|---|
> | What it is | Hand-written notes & rules | Reloads a prior conversation | Auto-captured session log + local summary |
> | Upkeep | Manual | None (you pick the session) | None — written as you work |
> | Holds | Instructions to follow | The full prior transcript | Goal, files, commands, where you left off, next steps |
> | Cost to resume | Small | Large (replays full transcript) | ~1–2K tokens (compact digest) |
> | Form | Markdown you edit | Local session state | Plaintext in `.recall/` — diffable & shareable |
> | How Claude treats it | As instructions | As the conversation | Fenced as **untrusted reference data** |
> 
> In short: `CLAUDE.md` is *how I want you to work*; Recall is *here's what we did
> last time and where we stopped* — produced offline, with no model tokens spent.
> 
> 
> ## How it works
> 
> | Moment | What happens |
> |---|---|
> | **During the session** | The `Stop` / `SessionEnd` hooks append new activity to `.recall/history.md`. Capture is incremental (only new turns) and fully local. |
> | **At session start** | The `SessionStart` hook surfaces `context.md` and has Claude ask you two things: resume from the saved context? and keep logging this session? |
> | **Before you wrap up** | You run `/recall:save`. The **local summarizer** reads `history.md` and (over)writes `context.md`. |
> | **…or automatically** | Set `auto_save_context: "on_end"` and `context.md` regenerates every time a session ends — no `/recall:save` needed. |
> 
> There is no LLM call anywhere — the summary is produced by **TF-IDF + TextRank**
> (extractive summarization) running locally.
> 
> 
> ## The summarizer
> 
> `scripts/summarizer.py` ranks the most central sentences of your session:
> 
> 1. TF-IDF sentence vectors
> 2. a cosine-similarity graph between sentences
> 3. **TextRank** — PageRank power iteration over that graph — to score sentences
> 4. the top *N* are kept in original order
> 
> `context.md` wraps that summary with deterministic facts pulled straight from the
> transcript and git: the goal (your first ask), files touched, commands run, where
> you left off, and `git diff --stat`.
> 
> **No installs required.** The whole TF-IDF + TextRank implementation is vendored
> in `summarizer.py`. If `numpy` happens to be importable it's used to vectorize the
> math (faster on big sessions); if not, an identical pure-Python TextRank runs
> instead. Same algorithm, same result — numpy is an optional accelerator, never a
> requirement. The save output tells you which path ran.
> 
> 
> ## Commands
> 
> - `/recall:save` — run the local summarizer → (over)write `context.md`.
> - `/recall:show` — print `context.md`.
> - `/recall:log` — tail `history.md`.
> 
> 
> ## Privacy & security
> 
> Recall makes **no network calls, uses no API key, and loads no third-party
> model.** The summarizer is local Python; the hooks are stdlib-only (numpy is an
> optional accelerator). It reads your session transcript and writes only under
> `output_dir`. Concretely:
> 
> - **No credentials, ever.** The plugin has zero references to API keys, auth,
>   `ANTHROPIC_*`, or HTTP. If `claude` itself shows *"Invalid API key"*, that's the
>   CLI's own auth — usually a stale `ANTHROPIC_API_KEY` env var shadowing your
>   subscription login. `unset ANTHROPIC_API_KEY` (or run `env -u ANTHROPIC_API_KEY
>   claude …`). It has nothing to do with Recall.
> - **Redaction.** A best-effort pass strips common secret shapes (API keys, tokens,
>   `.env` assignments, PEM keys) before writing, since `context.md` / `history.md`
>   may be committed. Best-effort, not a guarantee — review before committing.
> - **Hardened git.** `git diff`/`log` are run with `core.fsmonitor`,
>   `diff.external`, hooks, and the pager disabled, so an untrusted cloned repo
>   can't use its o

## 延伸閱讀

相關概念：[[記憶管理]] · [[隱私保護]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]]

[GitHub](https://github.com/raiyanyahya/recall) · [官方網站](https://recallplugin.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶管理" AND file.name != "raiyanyahya--recall"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "raiyanyahya--recall"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "raiyanyahya--recall" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "raiyanyahya--recall"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["記憶管理","隱私保護","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "raiyanyahya--recall" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/raiyanyahya--recall");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "raiyanyahya--recall" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "raiyanyahya" AND file.name != "raiyanyahya--recall"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/raiyanyahya--recall");
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
> const me = dv.page("Repos/raiyanyahya--recall");
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
> const me = dv.page("Repos/raiyanyahya--recall");
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
> const me = dv.page("Repos/raiyanyahya--recall");
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
> const me = dv.page("Repos/raiyanyahya--recall");
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

> **2026-06-26** — 首次收錄
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

- [[2026-06-26|2026-06-26]] — 首次收錄，543 stars
