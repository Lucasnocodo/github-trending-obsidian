---
repo: ShadowAqueduct/watermark-remover
url: https://github.com/ShadowAqueduct/watermark-remover
owner: ShadowAqueduct
owner_type: User
language: Python
license: MIT
description: "Purge multi-vendor AI watermarks: clean Unicode text, apply statistical rewrite hooks, and clear C2PA plus metadata from PNG, JPEG, SVG, PDF, DOCX, HTML, and MD."
homepage: ""
stars: 833
stars_per_day: 139
forks: 78
open_issues: 6
created: 2026-08-23
pushed_at: 2026-08-23
first_seen: 2026-08-24
week: "2026-W35"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-24
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-09-06"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1803
readme_length: 8293
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-24"
star_history: "2026-08-24:760,2026-08-25:773,2026-08-26:792,2026-08-27:811,2026-08-30:833"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/claude_ai"
  - "topic/claude_code"
  - "topic/claude_code_plugin"
  - "topic/claude_skills"
  - "topic/codex"
aliases:
  - "watermark-remover"
  - "ShadowAqueduct/watermark-remover"
---

# watermark-remover

**760** stars · **760** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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

`個人專案`

`claude-ai` `claude-code` `claude-code-plugin` `claude-skills` `codex` `codex-cli` `codex-skill` `codex-skills` `watermark`

> [!summary] 一句話摘要
> Purge multi-vendor AI watermarks: clean Unicode text, apply statistical rewrite hooks, and clear C2PA plus metadata from PNG, JPEG, SVG, PDF, DOCX, HTML, and MD.

## 專案簡介

Purge multi-vendor AI watermarks: clean Unicode text, apply statistical rewrite hooks, and clear C2PA plus metadata from PNG, JPEG, SVG, PDF, DOCX, HTML, and MD.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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
| Forks | 72 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-23 |
| 建立日期 | 2026-08-23 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ShadowAqueduct/watermark-remover) |
| Topics | `claude-ai` `claude-code` `claude-code-plugin` `claude-skills` `codex` `codex-cli` `codex-skill` `codex-skills` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 2
>     "PowerShell" : 1
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ShadowAqueduct](https://github.com/ShadowAqueduct) | 4 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-23 ~ 2026-08-23）
> **活躍天數** 1 天 · **最新 commit** Update install-skill.sh

## README 摘錄

> [!info]- 展開查看原文 README
> ```
> _ _ _ ____ ___ ____ ____ _  _ ____ ____ _  _ ____    ____ ____ _  _ ____ _  _ ____ ____
> | | | |__|  |  |___ |__/ |\/| |__| |__/ |_/  [__  __ |__/ |___ |\/| |  | |  | |___ |__/
> |_|_| |  |  |  |___ |  \ |  | |  | |  \ | \_ ___]    |  \ |___ |  | |__|  \/  |___ |  \
> ```
> 
> # watermarks-remover
> 
> [](https://github.com/guillaumemeyer/watermarks-remover/actions/workflows/ci.yml)
> [](https://github.com/guillaumemeyer/watermarks-remover/releases)
> [](https://github.com/guillaumemeyer/watermarks-remover/stargazers)
> 
> Agent skill + stdlib Python service that strips multi-vendor AI provenance marks from text and files. For privacy and hygiene on content **you own**.
> 
> The skill is a thin HTTP client — the agent host needs no Python. All work runs in the service.
> 
> **Author:** ShadowAqueduct
> 
> **Latest release:** [v0.5.0](https://github.com/guillaumemeyer/watermarks-remover/releases/tag/v0.5.0)
> 
> | Layer | Target | Method |
> | --- | --- | --- |
> | **A** | Invisible Unicode, exotic spaces, bidi, tag chars | Deterministic Python |
> | **B** | Statistical (token-sampling) text watermarks | Agent rewrite + optional `rewrite_text.py` |
> | **Files** | C2PA / EXIF / XMP / doc props | PNG, JPEG, WebP, AVIF, HEIC, BMP, GIF, TIFF, SVG, PDF, DOCX, XLSX, PPTX, EPUB, ODT, HTML, Markdown, MP4/MOV/M4A/M4V, WAV, MP3, FLAC |
> 
> Covers class-level marks from Claude, Gemini/SynthID-Text, OpenAI provenance surfaces, and open-LLM schemes (Kirchenbauer green-list, keyed-Gumbel / Aaronson EXP).
> 
> ---
> 
> ## Install
> 
> Skill ships **no code** — it calls the service over HTTP. Install the skill, start the service, set `WATERMARKS_SERVICE_URL` if it is not `http://127.0.0.1:8765`.
> 
> One installer (Python 3.10+, stdlib only):
> 
> ```bash
> python3 install_skill.py --skill remove-ai-marks --target claude-code
> ```
> 
> | Host | Target | Lands in |
> | --- | --- | --- |
> | Claude Code (personal) | `--target claude-code` | `~/.claude/skills/` |
> | Claude Code (project) | `--target claude-project --project-dir PATH` | `PATH/.claude/skills/` |
> | Cowork / claude.ai / cloud | `--target cowork` | `dist/.zip` (upload under Customize → Skills) |
> | Cursor | `--target cursor` | `~/.cursor/skills/` |
> 
> Shipped skills: `remove-ai-marks` (full, service-backed) and `clean-user-facing-text` (text only, self-contained). Use `--list` to see them. Existing installs are kept as backups unless you pass `--force`. `--link` symlinks the checkout for live edits.
> 
> ### Claude Code plugin (marketplace)
> 
> ```
> /plugin marketplace add guillaumemeyer/watermarks-remover
> /plugin install watermarks-remover@watermarks-remover
> ```
> 
> Skills load as `/watermarks-remover:remove-ai-marks` and `/watermarks-remover:clean-user-facing-text`. Update with `/plugin marketplace update watermarks-remover`.
> 
> ### Grok
> 
> ```bash
> mkdir -p ~/.grok/skills
> ln -sfn "$(pwd)/skills/remove-ai-marks" ~/.grok/skills/remove-ai-marks
> ```
> 
> ### Start the service
> 
> ```bash
> make serve                 # http://127.0.0.1:8765
> # or:
> python3 service/scripts/server.py --host 127.0.0.1 --port 8765
> ```
> 
> Optional system tools (used when present): `c2patool`, `exiftool`, `qpdf`. Core scripts need only Python 3.10+ stdlib.
> 
> ---
> 
> ## Automatic cleaning via hook
> 
> A skill is an instruction — the model decides whether to run it. A **hook** runs on every matching tool call and does not need model cooperation.
> 
> The plugin registers a `PostToolUse` hook on `Write|Edit|MultiEdit|NotebookEdit` that runs `service/scripts/hook_written_file.py`:
> 
> | Mode | Behaviour |
> | --- | --- |
> | `check` (default) | Reports marks, leaves the file alone |
> | `clean` | Strips marks in place, notifies the model |
> 
> Set mode via plugin settings (`Hook mode`) or `WATERMARKS_HOOK_MODE=clean`. Without the plugin, add the hook yourself in `~/.claude/settings.json`.
> 
> Hooks cover files the agent writes and the pre-commit gate. Chat transcript text still depends on the skill (best-effort).
> 
> ---
> 
> ## Quick use
> 
> ```bash
> SCRIPTS=service/scripts
> 
> python3 "$SCRIPTS/inspect_file.py" draft.md
> python3 "$SCRIPTS/clean_file.py" draft.md -o draft.cleaned.md
> python3 "$SCRIPTS/clean_file.py" photo.png -o photo.cleaned.png
> python3 "$SCRIPTS/clean_file.py" notes.docx -o notes.cleaned.docx
> 
> # Text Layer A
> python3 "$SCRIPTS/inspect_text.py" draft.md
> python3 "$SCRIPTS/clean_text.py" draft.md -o draft.cleaned.md --stats
> 
> # Layer B rewrite (default: print prompt only)
> python3 "$SCRIPTS/rewrite_text.py" draft.md --backend print-prompt --strength paraphrase
> ```
> 
> Text tools refuse binary input (DOCX, PDF, images) and point you at `inspect_file.py` / `clean_file.py`. Unrecognized formats are never auto-cleaned.
> 
> ---
> 
> ## HTTP service
> 
> Same machinery as a stdlib HTTP server (`service/scripts/server.py`):
> 
> | Method | Path | Returns |
> | --- | --- | --- |
> | GET | `/health` | `{"ok": true, "version": ...}` |
> | GET | `/capabilities` | optional tools / backends |
> | GET | `/openapi.json` | OpenAPI 3.0.3 spec |
> | POST | `/inspect` | kind, suspicious, report |
> | POST | `/detect` | detections |
> | POST | `/clean` | cleaned base64 + report |
> | POST | `/inspect/batch`, `/clean/batch` | per-file results (max 50) |
> 
> ```bash
> WM="http://127.0.0.1:8765"
> curl -s "$WM/health"
> curl -s -X POST "$WM/clean" -H 'Content-Type: application/json' \
>   -d "{\"file\": \"$(base64 `, XMP |
> | PDF | exiftool → qpdf (structural) → optional Ghostscript deep image pass |
> | DOCX / XLSX / PPTX / ODT / EPUB | Scrub props, customXml, OPF, embedded media |
> | HTML / Markdown | Strip meta / JSON-LD / AI frontmatter keys + Layer A |
> | MP4 / MOV / M4A / M4V / WAV / MP3 / FLAC | Drop C2PA / ID3 / LIST chunks |
> 
> PDF needs `qpdf` for a real strip (exiftool alone is incremental and leaves recoverable bytes). Ghostscript handles metadata inside embedded images. Soft-bound C2PA and pure pixel/audio/video watermarks remain out of scope for the core path.
> 
> ---
> 
> ## Optional backends
> 
> | Backend | Role | Notes |
> | --- | --- | --- |
> | reverse-SynthID | Image SynthID score | External checkout; detection only |
> | CtrlRegen | Pixel-domain removal | External; heavy; conservative strength default |
> | MarkLLM | Text watermark verify (KGW / SynthID) | Same-config only, not a vendor oracle |
> | MarkDiffusion | Image watermark harness + DiffusionPurification | Same-config only |
> | keyed-Gumbel (`detect_gumbel.py`) | Model-free same-key replay | Stdlib; needs the generation key |
> 
> Bootstrap scripts live under `service/scripts/` (`setup_synthid.sh`, `setup_ctrlregen.sh`, `setup_markllm.sh`, `setup_markdiffusion.sh`). Layer B rewrite is iterative and can be driven by these detectors when configured.
> 
> ---
> 
> ## How text marking works
> 
> - **Layer A** removes edit-based Unicode carriers (testable, lossless).
> - **Layer B** attacks sampling watermarks via heavy rewrite (best-effort; costs style and voice).
> - **File cleaners** strip C2PA / XMP / props from supported containers.
> 
> No tool can certify that a vendor detector will fail. Prefer a non-origin model for Layer B so you do not re-stamp the text.
> 
> Skip Layer B when quality matters more than hygiene: use Layer A + file cleaners and keep the original prose.
> 
> ---
> 
> ## Pre-commit
> 
> ```yaml
> # .pre-commit-config.yaml
> repos:
>   - repo: https://github.com/guillaumemeyer/watermarks-remover
>     rev: v0.5.0
>     hooks:
>       - id: watermarks-remover-check   # fail on marks
>       # - id: watermarks-remover-clean # opt-in: clean in place
> ```
> 
> ---
> 
> ## Ethics
> 
> For privacy and research on content you own or are authorized to process. Not for academic fraud or false “human-written” claims. Users must follow local law. The authors disclaim liability for misuse.
> 
> See `skills/remove-ai-marks/references/ethics.md`.
> 
> ---
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).
> 
> ## Bibliography (selected)
> 
> - [How Claude marks AI-generated content](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content)
> - Dathathri et al., *Scalable watermarking for identifying large language model outputs* (SynthID-Text, Nature 2024)
> - Kirchenbauer et al., *A Watermark for Large Language Models* (arXiv:2301.10226)
> - C2

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/ShadowAqueduct/watermark-remover)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ShadowAqueduct--watermark-remover"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "ShadowAqueduct--watermark-remover" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W35" AND file.name != "ShadowAqueduct--watermark-remover"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ShadowAqueduct--watermark-remover" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ShadowAqueduct" AND file.name != "ShadowAqueduct--watermark-remover"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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
> const me = dv.page("Repos/ShadowAqueduct--watermark-remover");
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

> **2026-08-24** — 首次收錄
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

- [[2026-08-30|2026-08-30]] — 再次上榜，833 stars
- [[2026-08-27|2026-08-27]] — 再次上榜，811 stars
- [[2026-08-26|2026-08-26]] — 再次上榜，792 stars
- [[2026-08-25|2026-08-25]] — 再次上榜，773 stars
- [[2026-08-24|2026-08-24]] — 首次收錄，760 stars
