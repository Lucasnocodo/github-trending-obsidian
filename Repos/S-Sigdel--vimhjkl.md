---
repo: S-Sigdel/vimhjkl
url: https://github.com/S-Sigdel/vimhjkl
owner: S-Sigdel
owner_type: User
language: Python
license: MIT
description: "learn vim from your terminal with spaced repetition"
homepage: ""
stars: 423
stars_per_day: 60
forks: 7
open_issues: 3
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
use_case: "透過真實的 Vim 環境進行間隔重複學習，提升你的 Vim 技巧。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-15"
contributor_count: 1
engagement: "low"
issue_close_rate: 57
repo_size_kb: 673
readme_length: 5636
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-08"
star_history: "2026-06-08:403,2026-06-08:403,2026-06-09:423"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "vimhjkl"
  - "S-Sigdel/vimhjkl"
  - "透過真實的 Vim 環境進行間隔重複學習，提升你的 Vim 技巧。"
---

# vimhjkl

**423** stars · **60** stars/天 · 建立 7 天前 · Python · MIT

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
> 透過真實的 Vim 環境進行間隔重複學習，提升你的 Vim 技巧。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (60 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在終端中有效學習 Vim 技巧的開發者，特別是那些已經有一定基礎但想要進一步提升的人。
> **一句話重點** 這個專案的設計理念是讓學習 Vim 技巧變得更有效率，透過真實操作和即時反饋來提升學習體驗。

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
> 這個專案提供了一種基於實際操作的 Vim 技巧學習方式，並結合了間隔重複的學習方法。

## 專案簡介

vimhjkl 是一個專為 Vim 使用者設計的終端訓練工具，透過 222 個經過驗證的挑戰來強化使用者的 Vim 技巧。使用者在編輯時，目標會顯示在緩衝區旁邊，讓他們能夠專注於實踐而非記憶。這個工具不僅提供了學習模式，還有盲測、練習和回顧等多種模式，讓使用者能夠根據自己的需求進行訓練。所有的挑戰都是基於真實的 Vim 環境進行，並且會根據使用者的按鍵輸入進行評分，這樣的設計使得學習過程更具互動性和實用性。使用者可以使用 `vimhjkl --drill` 來進行技能訓練，並且可以透過 `--reps` 參數來重複練習特定技能，這樣的設計使得學習過程不會感到單調。這個工具的核心賣點在於其針對性強的練習模式和實時反饋，讓使用者能夠在真實的編輯環境中不斷提升技能。

**技術棧**：`Python 3.11` · `Ruby` · `Shell`

## 重點功能

- 222 個挑戰 — 每個挑戰都經過驗證，確保其有效性和實用性。
- 多種練習模式 — 包括學習、盲測、練習和回顧，滿足不同學習需求。
- 即時反饋 — 根據使用者的按鍵輸入進行評分，幫助使用者了解自己的進步。
- Leitner 間隔重複 — 根據使用者的掌握情況調整挑戰的難度，確保學習效果。
- 自定義設置 — 使用者可以根據自己的需求調整挑戰的內容和難度。

## 快速開始

1. 安裝 vimhjkl
```bash
brew install S-Sigdel/tap/vimhjkl
```
2. 啟動互動菜單
```bash
vimhjkl
```
3. 開始練習技能
```bash
vimhjkl --drill
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 vim 或 nvim 並在 PATH 中可用",
  "指令": "vimhjkl --drill --mode blind",
  "預期輸出": "進入盲測模式，開始練習 Vim 技巧"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 423 stars（60/天），forks 7（1.7%），顯示出穩定的增長。作者 S-Sigdel 在 Vim 社群中有一定的影響力，並且這個工具解決了許多使用者在學習 Vim 時遇到的實際問題，例如缺乏有效的練習方式。這個工具的出現恰好填補了這一空白，並且在社群中引起了廣泛的關注。使用者對於這種基於實際操作的學習方式反應熱烈，這也促進了其快速增長。

## 適合誰使用

**目標受眾**：希望在終端中有效學習 Vim 技巧的開發者，特別是那些已經有一定基礎但想要進一步提升的人。

> [!example] 使用場景
> - 新手開發者用它來學習 Vim 的基本操作，因為它提供了即時反饋和針對性的挑戰，讓學習過程更有效率。
> - 資深開發者用它來精進高級 Vim 技巧，因為它的挑戰是基於真實的編輯環境，能夠幫助他們在日常工作中提升效率。
> - 教學者用它來輔助 Vim 課程，因為它的結構化挑戰能夠幫助學生在實踐中鞏固所學知識。

## 架構分析

這個工具的架構設計為一個終端應用，使用者透過命令行介面進行互動。所有的挑戰和練習都是在真實的 Vim 環境中進行，這樣的設計使得學習過程更具真實感。資料流方面，使用者的每一次輸入都會被記錄並評分，這些數據用於調整後續的挑戰難度。選擇使用 Python 作為主要開發語言，因為它的標準庫足夠強大，且不需要額外的依賴，這樣可以降低使用者的安裝成本。整體架構的設計使得工具的維護和擴展變得相對簡單，並且能夠快速適應使用者的需求。

## 技術深入分析

vimhjkl 的核心技術機制在於其基於真實 Vim 環境的學習方式，使用者在編輯時會看到目標，這樣的設計讓學習過程更具互動性。效能方面，因為所有挑戰都是在真實環境中進行，所以能夠準確評估使用者的技能水平。這個工具的設計選擇了 Python 作為主要開發語言，這使得開發過程相對簡單，且不需要外部依賴，降低了使用者的安裝成本。技術風險方面，這個工具依賴於使用者的 Vim 環境，因此在不同的系統上可能會遇到兼容性問題。整合方面，這個工具可以輕鬆地與現有的 Vim 工作流結合，並且不會對使用者的日常操作造成干擾。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，安裝過程相對順暢，但需要確保 Vim 環境可用。整體來說，新手在 30 分鐘內能夠順利上手。

## 優缺點分析

> [!success] 優點
> - 提供即時反饋，幫助使用者快速掌握技巧
> - 結合間隔重複學習法，提升學習效果
> - 挑戰內容經過驗證，確保實用性

> [!danger] 缺點
> - 僅支援特定版本的 Python
> - 需要使用者具備基本的 Vim 知識
> - 不支援 Windows 系統，限制了使用者範圍

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本
> - 需要安裝 vim 或 nvim 並確保其在 PATH 中可用
> - 不支援 Windows 系統

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
| Forks | 7 |
| Open Issues | 3 |
| Issue 解決率 | 57% (4 closed) |
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
**連結**：[文件](https://github.com/S-Sigdel/vimhjkl#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-07）
> **活躍天數** 2 天 · **最新 commit** bump version to 0.4.1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/S-Sigdel/vimhjkl/issues/9) | "Set a mark and snap back" challenge evaluation error | 0 | 0 |
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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[學習工具]]

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
> const concepts = ["CLI/TUI","自動化測試","學習工具"];
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
