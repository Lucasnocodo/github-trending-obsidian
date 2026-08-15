---
repo: gvzdv/claudish-to-english
url: https://github.com/gvzdv/claudish-to-english
owner: gvzdv
owner_type: User
language: Shell
license: MIT
description: ""
homepage: ""
stars: 1106
stars_per_day: 277
forks: 72
open_issues: 3
created: 2026-08-10
pushed_at: 2026-08-13
first_seen: 2026-08-14
week: "2026-W33"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "assets"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-14
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 67
repo_size_kb: 33
readme_length: 9729
bus_factor: 2
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-14"
star_history: "2026-08-14:936,2026-08-15:1106"
tags:
  - github
  - "category/other"
  - "lang/shell"
aliases:
  - "claudish-to-english"
  - "gvzdv/claudish-to-english"
---

# claudish-to-english

**936** stars · **312** stars/天 · 建立 3 天前 · Shell · MIT

```dataviewjs
const me = dv.page("Repos/gvzdv--claudish-to-english");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!warning] AI 摘要產生失敗
> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。

`assets`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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
| Forks | 59 |
| Open Issues | 2 |
| Issue 解決率 | 67% (4 closed) |
| 最後推送 | 2026-08-13 |
| 建立日期 | 2026-08-10 |
| Repo 大小 | 33 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/gvzdv/claudish-to-english) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gvzdv](https://github.com/gvzdv) | 2 |
> | [@ArkfallBravo](https://github.com/ArkfallBravo) | 1 |
> | [@Gabriel-Dalton](https://github.com/Gabriel-Dalton) | 1 |
> | [@loxsmoke](https://github.com/loxsmoke) | 1 |
> | [@nicholasabottomley-ops](https://github.com/nicholasabottomley-ops) | 1 |

**最新版本**：assets — README assets (2026-08-11)

> [!info]- Release Notes
> Static images referenced by the README. Not part of the plugin; kept out of the repo tree so installs stay lean.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-10 ~ 2026-08-13）
> **活躍天數** 3 天 · **最新 commit** Add file-based prompt overrides; v0.3.0 (#13)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/gvzdv/claudish-to-english/issues/11) | ollama | 0 | 0 |
> | [#5](https://github.com/gvzdv/claudish-to-english/issues/5) | MessageDisplay block never renders in interactive TUI — upst | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claudish-to-english
> 
>   
> 
> A Claude Code plugin that shows a **plain-English rewrite** of each assistant
> message, produced by a **local LLM via ollama** (default), the **Anthropic
> API**, or any **OpenAI-compatible API**. It is **display-only**:
> Claude's own reasoning and the saved transcript keep the original text — only
> what you read on screen changes.
> 
> An optional second hook rewrites **Markdown files** into plain English when they
> are written or edited (opt-in, off by default).
> 
> > Status: working prototype. Every hook fails **open** — if anything goes wrong
> > (provider down, timeout, missing key or dependency), you simply see Claude's
> > original text. The plugin can never swallow or corrupt an answer.
> 
> ---
> 
> 
> ## Install
> 
> Directly from this repository (also serves its own marketplace):
> 
> ```shell
> /plugin marketplace add gvzdv/claudish-to-english
> /plugin install claudish-to-english@gvzdv-plugins
> ```
> 
> After review by the Anthropic team, the plugin will be available to install from the community marketplace:
> 
> ```shell
> /plugin marketplace add anthropics/claude-plugins-community
> /plugin install claudish-to-english@claude-community
> ```
> 
> If the install summary says `Run /reload-plugins to activate.`, run that command.
> 
> **Try before installing** (loads it for one session, no install):
> 
> ```bash
> claude --plugin-dir /path/to/claudish-to-english
> ```
> 
> Run `/reload-plugins` after edits; if it doesn't load, check the `/plugin`
> **Errors** tab.
> 
> ---
> 
> 
> ## Configuring the plugin
> 
> All behavior is controlled by `CLAUDISH_*` environment variables (full list in
> [Configuration](#configuration-env-vars) below). When you install from a
> marketplace, set them in Claude Code's **`env` block in `settings.json`** — do
> **not** edit the plugin's own `hooks/hooks.json`, which lives in the read-only
> plugin cache (`~/.claude/plugins/cache/…`) and is overwritten on every update.
> 
> For a personal, all-projects setup, use `~/.claude/settings.json`:
> 
> ```json
> {
>   "env": {
>     "CLAUDISH_MODEL": "gemma4:26b-mlx",
>     "CLAUDISH_MODE": "append"
>   }
> }
> ```
> 
> The hooks are subprocesses Claude Code spawns, so they inherit these. A few
> things to know:
> 
> - **Restart Claude Code after editing `env`.** The value is captured at launch,
>   so a running session keeps the old one.
> - **`env` does not merge across scopes.** The highest-precedence settings file
>   that defines `env` supplies the *entire* block — it isn't combined with lower
>   scopes. Precedence: managed → local → project → user. Keep all your
>   `CLAUDISH_*` vars in whichever file wins.
> - **Scopes:** `~/.claude/settings.json` (all your projects) ·
>   `.claude/settings.json` (shared with a repo, checked in) ·
>   `.claude/settings.local.json` (just you, just this repo).
> 
> Quick one-off without editing a file — hooks inherit the launching shell:
> 
> ```bash
> CLAUDISH_MODEL=llama3.2:3b claude
> ```
> 
> To confirm the hook is firing, set `CLAUDISH_DEBUG=1` and watch
> `"$TMPDIR"/claudish-to-english/debug.log`.
> 
> ---
> 
> 
> ## Markdown file rewrite (optional second hook)
> 
> A `PostToolUse` hook (`rewrite-md.sh`) rewrites Markdown **files** into plain
> English when they are written or edited. Unlike the display hook, this changes
> bytes on disk.
> 
> **Opt-in by directory.** It does nothing unless `CLAUDISH_MD_DIR` is set, and it
> only touches `*.md` files whose resolved path is inside that directory. Every
> other `README`, `CLAUDE.md`, or doc you edit is left alone.
> 
> | `CLAUDISH_MD_MODE` | Result | Notes |
> |---|---|---|
> | `sibling` (default) | Writes `NAME.plain.md` next to `NAME.md`. | Non-destructive; the original is never touched. |
> | `overwrite` | Replaces `NAME.md` in place. | Adds a `` marker so a re-write is skipped (idempotent). A weak model can degrade real docs — use with care. |
> 
> In both modes: YAML frontmatter is split off and re-attached **verbatim**, fenced
> code is left to the model instruction, short files are skipped, and the write is
> atomic. Fail-open here means the file is left **exactly as the agent wrote it**.
> 
> **Large files are slow.** `gemma4:26b-mlx` (the default) rewrites at roughly 60
> tokens/s, so a long plan or spec can take 30–120s. This hook allows up to
> `CLAUDISH_MD_TIMEOUT` (150s) inside a 180s `PostToolUse` hook budget; if a rewrite
> still times out you get the one-time notice above — raise those limits, or set
> `CLAUDISH_MODEL` to a smaller model.
> 
> Enable it for one directory, in sibling mode (the safe default), the same way
> as every other setting — the `env` block of your `settings.json`:
> 
> ```json
> {
>   "env": {
>     "CLAUDISH_MD_DIR": "/ABS/PATH/docs/plain",
>     "CLAUDISH_MD_MODE": "sibling"
>   }
> }
> ```
> 
> In `overwrite` mode the marker comment is written **after** any YAML
> frontmatter, so the frontmatter stays on line 1 where parsers expect it.
> 
> ---
> 
> 
> # A key is only required for api.openai.com — local servers work keyless.
> export CLAUDISH_PROVIDER=openai
> export CLAUDISH_OPENAI_URL=http://localhost:1234/v1
> export CLAUDISH_MODEL=qwen3-30b
> ```
> 
> Notes:
> 
> - `CLAUDISH_MODEL` overrides any provider's default model.
> - Requests to api.openai.com send `reasoning_effort: "none"` (GPT-5.6-class
>   models otherwise spend reasoning tokens on a plain rewrite). Custom
>   OpenAI-compatible URLs get no such field, since some local servers reject
>   unknown fields. Force one with `CLAUDISH_OPENAI_EFFORT`, or set it
>   **explicitly empty** (`CLAUDISH_OPENAI_EFFORT=`) to omit the field even for
>   api.openai.com — needed for models that reject `reasoning_effort` entirely.
> - The anthropic provider caps completions at `CLAUDISH_MAX_TOKENS` (default
>   4096, since the Messages API requires an explicit cap).
> - A rewrite that hits an output-token cap is **discarded**, not shown — on all
>   three providers (ollama's `done_reason: "length"` included): a half-finished
>   rewrite on screen is confusing, and in the Markdown hook's `overwrite` mode
>   it would replace your real document. You get the original text plus the
>   once-per-session notice suggesting a higher cap.
> - Every provider failure stays fail-open: missing key, bad key, unreachable
>   endpoint, or timeout just leaves the original text (plus the once-per-session
>   notice, unless `CLAUDISH_NOTICE=0`).
> 
> > **Privacy:** the cloud providers send each assistant message (and, for the
> > Markdown hook, file contents) to an external API. Read
> > [Privacy / egress](#privacy--egress) before switching away from ollama.
> 
> ---
> 
> 
> ## Customizing the rewrite prompt
> 
> Each hook ships with a default system prompt that asks the model for plain
> English while preserving facts, code, and structure. You can **replace** either
> prompt with your own to add specific rules or use wording that works
> better with your model. To do so, point the hook at a file that holds
> the prompt:
> 
> | Hook | Prompt file |
> |---|---|
> | Display (`rewrite.sh`) | `CLAUDISH_PROMPT_FILE` |
> | Markdown (`rewrite-md.sh`) | `CLAUDISH_MD_PROMPT_FILE` |
> 
> The file's contents **replace** the built-in prompt, so
> include every instruction you want the model to follow — otherwise the defaults
> (keep facts, leave code blocks alone, output only the rewrite) are gone. Keeping
> the prompt in a file avoids escaping a long, multi-line prompt inside a JSON
> string. If the variable is unset, or the file is empty or unreadable, the hook
> falls back to its built-in default, so a bad path never stops rewrites.
> 
> ```json
> {
>   "env": {
>     "CLAUDISH_PROMPT_FILE": "/ABS/PATH/prompts/plain.txt",
>     "CLAUDISH_MD_PROMPT_FILE": "/ABS/PATH/prompts/md-plain.txt"
>   }
> }
> ```
> 
> The display hook still appends the **original user question** to your prompt, as
> context to keep the rewrite on-topic (see
> [How the display hook works](#how-the-display-hook-works)). Your prompt
> replaces only the base instruction.
> 
> ---
> 
> 
> ## How the display hook works
> 
> Claude Code fires the `MessageDisplay` event **once per streamed chunk**, not
> once per message. Each fire is a separate process carrying `message_id`,
> `index`, a `final` flag, and this chunk's `delta` (a text fragment, not the
> whole message). So the hook **buffers every delta** to a temp file (k

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/gvzdv/claudish-to-english)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "gvzdv--claudish-to-english"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "gvzdv--claudish-to-english" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "gvzdv--claudish-to-english"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/gvzdv--claudish-to-english");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "gvzdv--claudish-to-english" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "gvzdv" AND file.name != "gvzdv--claudish-to-english"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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
> const me = dv.page("Repos/gvzdv--claudish-to-english");
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

> **2026-08-14** — 首次收錄
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

- [[2026-08-15|2026-08-15]] — 再次上榜，1.1k stars
- [[2026-08-14|2026-08-14]] — 首次收錄，936 stars
