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
use_case: "讓你在終端機上透過間隔重複學習 Vim 技巧。"
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
star_history: "2026-06-08:403,2026-06-08:403"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "vimhjkl"
  - "S-Sigdel/vimhjkl"
  - "讓你在終端機上透過間隔重複學習 Vim 技巧。"
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
> 讓你在終端機上透過間隔重複學習 Vim 技巧。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (67 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望透過實際操作提升 Vim 技能的開發者。
> **一句話重點** 這個專案讓學習 Vim 的過程變得更加互動和高效，特別適合希望提升編輯技巧的開發者。

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
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案提供了在真實 Vim 環境中進行的即時練習和評分系統，讓學習過程更具互動性。

## 專案簡介

vimhjkl 是一個專為 Vim 使用者設計的終端訓練工具，透過 61 課程和 222 個經過驗證的挑戰，幫助用戶在真實的 Vim 環境中練習和掌握進階技巧。使用者可以透過命令 `vimhjkl --drill` 進行練習，系統會在編輯器旁邊顯示目標，讓用戶專注於實際操作而非記憶。這種設計使得學習過程更具互動性和實用性，並且每次練習都會根據用戶的正確性和效率進行評分，進而提升學習效果。技術上，這個工具依賴於 Vim 或 Neovim，並且不需要其他外部依賴，這使得它的安裝和使用都相對簡單。與其他 Vim 學習工具相比，vimhjkl 的獨特之處在於它的實時練習和即時反饋機制，這讓用戶能夠在實際編輯中學習，而不是僅僅依賴於靜態的教學資料。

這種方法不僅能提高學習效率，還能幫助用戶在實際工作中更快地掌握 Vim 的高效操作。使用者在學習過程中可以選擇不同的模式，如 `--blind` 模式，強調記憶和回憶技巧，或是 `--practice` 模式，專注於重複練習薄弱的技能。這種靈活的學習方式使得 vimhjkl 適合各種程度的 Vim 使用者，從初學者到進階用戶都能找到合適的學習路徑。整體而言，這是一個針對 Vim 使用者的高效學習工具，值得在日常開發中使用。

**技術棧**：`Python 3.11` · `Ruby` · `Shell`

## 重點功能

- 61 課程和 222 個挑戰 — 每個挑戰都經過驗證，確保學習內容的質量。
- 即時反饋 — 用戶的每次操作都會被記錄並根據正確性和效率進行評分。
- 多種練習模式 — 包括 `--drill`、`--blind`、`--practice` 等，滿足不同學習需求。
- 靈活的設定 — 用戶可以在菜單中隨時開啟或關閉課程，並重新映射按鍵。
- 無需額外依賴 — 僅需 Vim 或 Neovim，安裝簡單。

## 快速開始

1. 安裝 vimhjkl
```bash
brew install S-Sigdel/tap/vimhjkl
```
2. 啟動互動菜單
```bash
vimhjkl
```
3. 開始練習技巧
```bash
vimhjkl --drill
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 403 stars（67/天），forks 6（1.5%），這顯示出不錯的初期關注度。作者 S-Sigdel 在 Vim 社群中有一定的知名度，之前也有其他 Vim 相關的項目。這個專案解決了許多使用者在學習 Vim 時面臨的問題，特別是缺乏有效的實踐機會。社群對於這種實時練習的需求使得這個工具迅速受到關注。技術上，這個工具的設計充分利用了 Vim 的強大功能，並且提供了一個簡單的安裝過程，這使得它在技術生態中顯得格外吸引人。forks/stars 比率較低，顯示出大部分使用者對此專案的興趣仍然停留在觀望階段。

## 適合誰使用

**目標受眾**：希望透過實際操作提升 Vim 技能的開發者。

> [!example] 使用場景
> - 新手開發者用它來學習基本的 Vim 操作，因為它提供了即時反饋和實際操作的機會，能有效提升學習效率。
> - 經驗豐富的開發者用它來精進進階的 Vim 技巧，因為它的挑戰設計能幫助他們在實際編輯中練習高效操作。
> - 教學者用它來輔助教學 Vim 課程，因為它的課程結構清晰，並且能夠跟蹤學習進度。

## 架構分析

vimhjkl 採用純 Python 實作，並依賴 Vim 或 Neovim 作為編輯器。這種設計使得使用者能夠在真實環境中進行練習，而不是依賴模擬器。資料流方面，使用者的每次操作都會被記錄並評分，這些數據用於跟蹤學習進度和掌握程度。選擇這種架構的好處是簡化了安裝過程，因為不需要額外的依賴，代價是無法提供更複雜的功能。擴展性方面，由於專案依賴於 Vim 的功能，未來的擴展可能會受到 Vim 本身的限制。

## 技術深入分析

vimhjkl 的核心技術機制在於其即時反饋和練習模式，這使得用戶能夠在真實的 Vim 環境中進行有效的學習。它利用了 Vim 的命令和操作，並將這些操作轉化為可練習的挑戰，這樣的設計使得學習過程不僅僅是記憶，而是實際操作。效能方面，因為它依賴於 Vim 的執行效率，理論上可以處理相當大的資料集，但具體效能會受到用戶機器性能的影響。設計上，選擇 Python 作為主要開發語言，這使得開發過程相對簡單，但也可能導致性能瓶頸，特別是在處理大量用戶輸入時。技術風險方面，若 Vim 的更新影響到此工具的運作，可能會導致使用者體驗不佳。此外，因為它依賴於用戶的編輯器環境，這在某些情況下可能會造成不便。整合方面，這個工具可以輕鬆融入現有的 Vim 使用者工作流，但對於不熟悉終端的使用者來說，學習成本可能會較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝和使用說明，包含了多個範例。安裝過程相對順暢，僅需安裝 Vim 或 Neovim。文件目前僅提供英文版本，對於非英語使用者可能會有障礙。

## 優缺點分析

> [!success] 優點
> - 即時反饋機制提升學習效率。
> - 課程內容經過驗證，質量高。
> - 多種練習模式滿足不同需求。

> [!danger] 缺點
> - 不支援 Windows 系統，限制了使用者範圍。
> - 僅支援 Python 3.11+，對於舊版本不友好。
> - 缺乏 GUI，對於不熟悉終端的使用者可能有學習曲線。

> [!warning] 注意事項
> - 僅支援 Python 3.11+。
> - 需要在 PATH 中有 vim 或 nvim 的可執行檔。
> - 不支援 Windows 系統。

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

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[程式碼生成]]

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
> const concepts = ["CLI/TUI","自動化測試","程式碼生成"];
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
