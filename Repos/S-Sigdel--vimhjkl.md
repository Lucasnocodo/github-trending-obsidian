---
repo: S-Sigdel/vimhjkl
url: https://github.com/S-Sigdel/vimhjkl
owner: S-Sigdel
owner_type: User
language: Python
license: MIT
description: "learn vim from your terminal with spaced repetition"
homepage: ""
stars: 403
stars_per_day: 67
forks: 6
open_issues: 2
created: 2026-06-01
pushed_at: 2026-06-07
first_seen: 2026-06-08
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "學習工具"
release_tag: "v0.4.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-08
use_case: "透過真實的 Vim 環境學習高級技巧，並使用間隔重複法進行練習。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-15"
contributor_count: 1
engagement: "low"
issue_close_rate: 67
repo_size_kb: 673
readme_length: 5636
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-08"
star_history: "2026-06-08:403"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "vimhjkl"
  - "S-Sigdel/vimhjkl"
  - "透過真實的 Vim 環境學習高級技巧，並使用間隔重複法進行練習。"
---

# vimhjkl

**403** stars · **67** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/S-Sigdel--vimhjkl");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.4.1` `easy-install`

> [!summary] 一句話摘要
> 透過真實的 Vim 環境學習高級技巧，並使用間隔重複法進行練習。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (67 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在終端中高效學習 Vim 技巧的開發者和程式設計師。
> **一句話重點** 這個專案讓學習 Vim 的過程變得更具互動性和效率，特別適合希望深入掌握 Vim 技巧的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "學習工具" && p.file.name !== "S-Sigdel--vimhjkl" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 學習工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，1 小時整合，能顯著提升 Vim 使用效率，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一個基於真實 Vim 環境的間隔重複學習系統，讓用戶能夠高效掌握高級技巧。

## 專案簡介

vimhjkl 是一個專為學習 Vim 技巧而設計的終端訓練工具，透過真實的 Vim 或 Neovim 環境進行練習，並根據用戶的實際按鍵進行評分。用戶可以透過多種模式進行練習，包括學習模式、盲模式和重複練習，並能夠在練習過程中即時查看目標。這個工具的賣點在於它提供了 222 個經過驗證的挑戰，讓用戶能夠在實際編輯中掌握 Vim 的技巧。使用者可以透過 `vimhjkl --drill` 指令進入練習模式，並透過 `--reps` 參數設定重複次數，這樣能有效提升使用者的熟練度。這個工具的設計選擇了使用 Leitner 間隔重複法來追蹤用戶的學習進度，這樣可以確保用戶在掌握每個技巧後，能夠持續進行有效的練習。

**技術棧**：`Python 3.11` · `Ruby` · `Shell`

## 重點功能

- 多種練習模式 — 包括學習、盲練、重複練習等，滿足不同學習需求。
- 222 個經過驗證的挑戰 — 每個挑戰都基於真實的 Vim 環境，確保學習的有效性。
- Leitner 間隔重複法 — 追蹤用戶的學習進度，確保重複練習的效率。
- 即時反饋 — 在練習過程中即時顯示目標，幫助用戶掌握技巧。
- 自定義鍵位映射 — 允許用戶根據個人習慣自定義鍵位，提升使用體驗。

## 快速開始

1. 安裝 vimhjkl
```bash
brew install S-Sigdel/tap/vimhjkl
```
2. 啟動練習
```bash
vimhjkl --drill
```
3. 查看課程進度
```bash
vimhjkl --list
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 vim 或 nvim 並在 PATH 中可用。",
  "指令": "vimhjkl --drill",
  "預期輸出": "進入練習模式，開始學習和練習 Vim 技巧。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 403 stars（67 stars/天），forks 6（1.5%），顯示出穩定的增長潛力。作者 S-Sigdel 是一位專注於 Vim 教學的開發者，解決了傳統 Vim 教學資源不足以涵蓋高級技巧的痛點。這個工具的出現正好填補了這一空白，並且在社群中引發了討論。技術上，這個工具的設計使得用戶能夠在真實環境中進行練習，而不是依賴模擬器，這種設計在學習效率上有顯著提升。forks/stars 比率較低，顯示出使用者對於這個工具的實際應用還在觀望中。

## 適合誰使用

**目標受眾**：希望在終端中高效學習 Vim 技巧的開發者和程式設計師。

> [!example] 使用場景
> - 初學者用它來學習 Vim 的基本操作，因為它提供了結構化的練習和即時反饋，能有效提升學習效率。
> - 有經驗的開發者用它來精進高級 Vim 技巧，因為它的挑戰設計能夠針對個別技巧進行深入練習。
> - 教學工作者用它來輔助 Vim 課程，因為它能夠提供實際的練習環境，並且跟蹤學生的學習進度。

## 架構分析

這個專案採用純 Python 實作，無需額外的第三方依賴，僅需確保 vim 或 nvim 在 PATH 中可用。用戶的每次練習都在真實的 Vim 環境中進行，這樣的設計使得學習更加真實和有效。資料流方面，使用者的每一次按鍵都會被記錄並根據正確性和效率進行評分，這樣的設計能夠即時反饋用戶的學習進度。選擇使用純標準庫的方式，降低了安裝和使用的複雜度，但可能在某些功能擴展上有所限制。整體架構輕量且易於維護，適合個人使用或小型團隊的學習需求。

## 技術深入分析

vimhjkl 的核心技術機制是基於真實的 Vim 環境進行練習，這意味著用戶的每一次操作都是在實際的編輯器中進行，而不是模擬器。這樣的設計不僅提高了學習的真實感，也讓用戶能夠在實際環境中應用所學技巧。效能方面，因為使用的是純 Python 實作，對於資源的需求相對較低，適合在一般的開發機上運行。設計上選擇了標準庫，這樣的選擇使得安裝和使用變得簡單，但在功能擴展上可能會受到限制。技術風險方面，由於目前社群活躍度中等，未來的維護和更新可能會受到影響，特別是在用戶需求增長的情況下。整合方面，這個工具可以輕鬆融入現有的開發流程中，特別是對於已經在使用 Vim 的開發者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的步驟；安裝過程順暢，無需複雜的配置；有良好的入門指南，適合新手快速上手；目前僅提供英文文件，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供真實的 Vim 環境練習，學習效果顯著。
> - 結構化的練習模式，適合不同程度的用戶。
> - 無需額外依賴，安裝簡單。

> [!danger] 缺點
> - 僅支援 Linux 和 macOS，Windows 用戶無法使用。
> - 目前功能相對較少，尚未有豐富的擴展性。
> - 社群活躍度較低，可能缺乏即時的技術支援。

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本。
> - 需要安裝 vim 或 nvim 並在 PATH 中可用。
> - 不支援 Windows 環境。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，練習模式可能會出現延遲反應。
  - 解法：確保 Vim 的配置沒有過多插件影響性能。
- [MEDIUM] 某些高級技巧的挑戰可能需要特定的 Vim 配置。
  - 解法：參考官方文檔調整 Vim 配置以符合挑戰要求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發團隊 | 非常適合 | 提供結構化的學習方式，能快速提升團隊的 Vim 使用效率。 |
| 大型企業的開發團隊 | 普通 | 雖然能提升個別開發者的技能，但不一定能滿足團隊的多樣化需求。 |
| 個人開發者希望提升 Vim 技能 | 非常適合 | 專注於高級技巧的學習，能有效提升個人編輯效率。 |
| 對 Vim 完全不熟悉的初學者 | 適合 | 提供基礎到高級的學習資源，適合循序漸進的學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，1 小時整合，能顯著提升 Vim 使用效率，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，僅需訪問用戶的 Vim 環境，不會存取敏感資料。依賴鏈簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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
| Forks | 6 |
| Open Issues | 2 |
| Issue 解決率 | 67% (4 closed) |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-01 |
| Repo 大小 | 673 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/S-Sigdel/vimhjkl) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Ruby" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@S-Sigdel](https://github.com/S-Sigdel) | 24 |

**最新版本**：v0.4.1 (2026-06-07)

> [!info]- Release Notes
> Content quality pass + a new in-drill option.
> 
> - **Every challenge vetted, challenge by challenge** — buffers scale-matched to the technique (`:sort` on 10-line lists, `:g`/block-range on scattered lines, marks on real multi-line code), solutions re-derived and verified through real vim.
> - **Dropped the junk** — toy/abstract buffers, whimsical prose, contrived solutions, near-duplicates, and an off-skill example. **549 → 222 challenges**, ~4 per skill, all 61 lessons kept.
> - **Tighter in-vim text** — every why/hint trimmed to fit the goal pane.
> - **New: turn a lesson off mid-drill** — press `o` on the result screen to switch the current skill off so it stops coming up (re-enable in Settings ▸ Lessons).

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和維護。
**連結**：[文件](https://github.com/S-Sigdel/vimhjkl)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-07）
> **活躍天數** 2 天 · **最新 commit** bump version to 0.4.1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/S-Sigdel/vimhjkl/issues/2) | No clear way to handle transferring keymaps. | 0 | 3 |
> | [#1](https://github.com/S-Sigdel/vimhjkl/issues/1) | chinese please | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ⚔ vimhjkl
> 
> **The Vim techniques `vimtutor` never taught you — drilled in real vim/nvim, graded on your actual keystrokes.**
> 
> [](https://aur.archlinux.org/packages/vimhjkl)
> [](LICENSE)
> 
> ⭐ Star it if it makes you faster — it helps a lot!
> 
> The dot command, operator + motion grammar, text objects, registers, macros, ex
> commands (`:g`, `:normal`, ranges), and substitution — **61 lessons, 222
> hand-vetted challenges**, every one replayed through real vim so the "optimal" it shows you
> actually works. While you edit, the goal sits in a pane beside the buffer, so you
> practise the move instead of remembering it.
> 
> ## Contents
> 
> - [Install](#install)
> - [Usage](#usage)
> - [How it works](#how-it-works)
>   - [Progression](#progression)
> - [Contributing](#contributing)
> - [License](#license)
> - [Star History](#star-history)
> 
> ## Install
> 
> ### macOS / Linux ([Homebrew](https://brew.sh))
> 
> ```sh
> brew install S-Sigdel/tap/vimhjkl
> ```
> 
> ### Arch Linux ([AUR](https://aur.archlinux.org/packages/vimhjkl))
> 
> ```sh
> paru -S vimhjkl      # or: yay -S vimhjkl
> ```
> 
> ### From source
> 
> Needs [uv](https://docs.astral.sh/uv/) and `vim` or `nvim` on `PATH` — no other
> dependencies.
> 
> ```sh
> git clone https://github.com/S-Sigdel/vimhjkl && cd vimhjkl
> uv sync && uv run vimhjkl
> ```
> 
> ## Usage
> 
> ```sh
> vimhjkl                                     # interactive menu   (from source: uv run vimhjkl)
> vimhjkl --drill                             # Learn: read the move, then drill it
> vimhjkl --drill --mode blind                # Blind: before/after only, recall it yourself
> vimhjkl --drill --mode blind --blind-all    # endless blind sweep of every skill, no repeats
> vimhjkl --practice                          # retry the skills you keep missing
> vimhjkl --reps 6 [--skill ID]               # Grind: pick a skill, drill it N× back-to-back
> vimhjkl --review                            # no-editor flashcards
> vimhjkl --list                              # curriculum, mastery, belt (and skill IDs)
> ```
> 
> Other flags: `-n/--count N` (challenges per session), `--gate D` (only introduce
> skills up to difficulty D), `--hide-moves`.
> 
> | Mode     | What it does                                            |
> |----------|--------------------------------------------------------|
> | Learn    | Shows the technique and idiomatic move before you edit |
> | Blind    | Before/after only — recall the move; names the expected technique so you aren't blindsided |
> | Blind-all| Endless sweep over every skill, free-form (any path), skips ones you've passed |
> | Practice | Your weakest skills, retry until you pass              |
> | Grind    | Pick a skill, drill it N times back-to-back (`--reps N`, `--skill ID`) |
> | Review   | Read-only flashcards, self-rated, no editor            |
> 
> **Settings** (in the menu): turn lessons on/off, and remap any key in any mode
> (e.g. `jk` or `` → ``, `;` → `:`) — your key shows in the suggested move
> and is graded as the original.
> 
> ## How it works
> 
> You edit in **real vim**, not an emulator, with the goal pinned in a read-only
> pane beside the buffer:
> 
> Keystrokes are logged with `-W` and scored on correctness *and* efficiency
> against a verified par. Command drills (`:s`, `:g`, `:normal`) require an actual
> ex command — you can't hand-edit your way to the goal. Mastery is tracked per
> skill with Leitner spaced repetition and a belt rank that unlocks harder material
> as your boxes fill.
> 
> More screenshots
> 
> A lesson in Learn mode:
> 
> The curriculum and your mastery:
> 
> ### Progression
> 
> There is **one** mastery model, shared by every mode. Learn, Blind, Practice,
> Grind, and even the no-editor Review flashcards all write to the same boxes — the
> mode only changes how much help you see *before* you edit, never whether the
> result counts. You don't "level up from Blind only"; a clean solve in Learn counts
> exactly the same.
> 
> What moves the needle is committing a **passing** attempt: correct *and* efficient
> (no more than 2× the verified par in keystrokes). Quitting a buffer drill without
> saving is an *abstain* — it leaves your mastery untouched, so stopping early never
> costs you.
> 
> Mastery has two axes:
> 
> - **Leitner box (1 → 5)** — *do you know the move?* A fast, clean solve bumps the box
>   up; a slow-but-correct one holds it; a wrong answer knocks it down — and one slip at
>   the top box is forgiven. The box drives how soon a skill comes back, your belt rank,
>   and which new skills unlock.
> - **Reps toward grooved (25)** — *have you drilled it into muscle memory?* A
>   box-maxed skill keeps resurfacing on the normal schedule until it has 25 clean
>   reps; only then is it `✦ grooved` and moves to a rare maintenance schedule. A
>   later miss drops the box and pulls it back into active review.
> 
> New material is gated by difficulty: harder skills unlock only once the tier below
> them is mastered, so the curriculum opens up as your boxes fill rather than
> dumping everything at once.
> 
> | Mode     | Recording                                                       |
> |----------|----------------------------------------------------------------|
> | Learn    | One outcome per attempt                                        |
> | Blind    | One outcome per attempt                                        |
> | Practice | One outcome per skill (best of your retries — no thrash)       |
> | Grind    | Every rep counts (depth toward the 25)                         |
> | Review   | Self-rated: `j` promote · `f` demote · `k` skip                |
> 
> ## Contributing
> 
> Adding a technique is a data change, not an engine change. See
> [CONTRIBUTING.md](CONTRIBUTING.md) for the setup, the challenge schema, and how to
> run the tests.
> 
> ## License
> 
> [MIT](LICENSE)
> 
> ## Star History

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化測試]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]]

[GitHub](https://github.com/S-Sigdel/vimhjkl)

## 相關收錄

> [!note]- 直接競品（同子分類：學習工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "學習工具" AND file.name != "S-Sigdel--vimhjkl"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "S-Sigdel--vimhjkl"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "S-Sigdel--vimhjkl" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "S-Sigdel--vimhjkl"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "S-Sigdel--vimhjkl" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "S-Sigdel--vimhjkl" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "S-Sigdel" AND file.name != "S-Sigdel--vimhjkl"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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
> const me = dv.page("Repos/S-Sigdel--vimhjkl");
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

> **2026-06-08** — 首次收錄
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

- [[2026-06-08|2026-06-08]] — 首次收錄，403 stars
