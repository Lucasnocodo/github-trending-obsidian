---
repo: tobi/walgit
url: https://github.com/tobi/walgit
owner: tobi
owner_type: User
language: Rust
license: MIT
description: ""
homepage: ""
stars: 2203
stars_per_day: 734
forks: 117
open_issues: 8
created: 2026-08-23
pushed_at: 2026-08-27
first_seen: 2026-08-25
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
last_reviewed: 2026-08-25
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-30"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 955
readme_length: 9289
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-25"
star_history: "2026-08-25:1082,2026-08-26:1575,2026-08-27:2203"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "walgit"
  - "tobi/walgit"
---

# walgit

**1.1k** stars · **1.1k** stars/天 · 建立 1 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/tobi--walgit");
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

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tobi--walgit");
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
> const me = dv.page("Repos/tobi--walgit");
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
| Forks | 58 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-24 |
| 建立日期 | 2026-08-23 |
| Repo 大小 | 955 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tobi/walgit) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `license` `rust-version` `walgit-proto` `walgit-store` `walgit-config` `walgit-git` `walgit-wal` `walgit-server` `walgit-bundle` `anyhow` `thiserror`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 90
>     "TypeScript" : 7
>     "CSS" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tobi](https://github.com/tobi) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-23）
> **活躍天數** 1 天 · **最新 commit** walgit: initial public release

## README 摘錄

> [!info]- 展開查看原文 README
> # walgit — a git server that is one binary in front of an object store
> 
> walgit hosts git repositories with **no database, no leader and no local state that matters**. You run a
> single binary, point it at an S3 or GCS bucket, and you have: smart HTTP (v0/v2) fetch and push, `bundle-uri`
> clones served as static files, Git LFS, a browsing web UI, a JSON API with an SDK, per-repository push policy,
> webhooks — and a server that scales to repositories **larger than the machine it runs on**. Every machine that
> runs walgit is a disposable cache; the bucket is the repository.
> 
> ```sh
> 
> # 1. a bucket (any S3-compatible store or GCS) and a config
> cat > walgit.toml /` namespaces, sha1 and sha256 repositories. Upstream `git` does upload-pack/repack/bundle; walgit does receive-pack, the WAL and the plumbing. |
> | **bundle-uri** | Bundles cut on calendar slots (weekly full, chained dailies, hourlies) as a pure function of the WAL: a fresh clone downloads the newest full plus the chain above it from the bucket and asks the server only for the remainder; a catch-up downloads exactly the slots it missed. Two lists per repo: `bundles/list` for clones, `bundles/catchup` for fetches. Blobless families for `--filter=blob:none`. |
> | **LFS** | Batch API + basic transfer, objects in the bucket, optional read-through from an upstream LFS server for imported repositories. |
> | **web UI + API** | A React UI (tree, blob, commits, diffs, the WAL's own health page) on a read-mostly JSON API under `/{owner}/{repo}/api/*`; sha-addressed answers are immutable and cached everywhere; long answers stream progress as SSE. `repos.js` is a dependency-free SDK for pages, agents and scripts. |
> | **policy** | Per-repository push rules (`policy.json`): protected refs, groups, fast-forward only, bypass lists. `docs/POLICY.md`. |
> | **settings** | Per-repository config (bundle schedules, compaction, upstream follow) published into the WAL with history. |
> | **events** | A small bridge tails the WAL and POSTs ref events to a webhook, exactly-once per (repo, seq, ref) with a durable cursor. `docs/EVENTS.md`. |
> | **maintenance** | Checkpoints, bundle builds, geometric compaction, base rebuilds, connectivity audits and repairs — one loop that computes the desired state from (config, WAL) every pass and does one bounded unit of the most important missing work. Self-healing by construction: an outage leaves no holes; a deleted artefact is "missing" and rebuilt identically. |
> | **auth** | `none` (loopback), `token` (static tokens), `oidc` (any OpenID Connect issuer: browser sign-in, ID tokens, and walgit-issued access tokens for git). `/services/public/install.sh` sets a developer's machine up in one idempotent command. |
> | **stores** | S3 and S3-compatible (AWS, MinIO, rustfs, R2, Ceph, …) and GCS, first class; an in-memory store for tests. |
> 
> 
> ## How it works, briefly
> 
> **The repository is a WAL in the bucket.** Under `repos///`: `manifest.pb` (tiny, CAS-rewritten:
> head sequence, the live pack set, checkpoint pointer, settings — *the linearization point*), `log/.pb`
> (immutable entries: PUSH, COMPACT, CHECKPOINT, SETTINGS), `wal/.pack|.idx|.rev|.bitmap|.commit-graph`
> (immutable, content-addressed packs with their side-files), `checkpoints//` (folded ref snapshot + pack
> inventory so a cold start is snapshot + tail), `bundles/`, `leases/` (CAS with TTL — the only cross-instance
> mutex), `policy.json`, `lfs/objects/`, `events/cursor.json`.
> 
> **A push**: our receive-pack indexes the pack (`git index-pack --fix-thin --rev-index` in a scratch dir), checks
> connectivity and policy, uploads `pack ∥ idx ∥ log entry`, then CASes the manifest. On a 412 it re-reads,
> re-validates every ref's old value and retries. Concurrent pushes to one repository on one instance are group
> committed into one CAS. The client sees `ok` only after the bucket does.
> 
> **A read**: one conditional GET of the manifest; 304 → serve from the local copy, 200 → apply the new entries.
> What "apply" means depends on what the request needs: **refs** (snapshot + log → `packed-refs`, no packs:
> advertisements, the API, bundle lists), **serve** (the pack set *as this machine can hold it*: small packs and the
> history pack local, a too-large base read by range), **full** (everything local, for repacks), **objects** (the
> remote reader, for the UI on a repository that does not fit). Pack downloads run on their own runtime and never
> block a refs request.
> 
> **Placement is configuration.** `[placement] serve / maintain` globs say which repositories a host does object
> work for; refs-level reads work everywhere. One box: leave the defaults. Several: put the monorepo on the host with
> the SSD (`cache.mode = "disk"`), everything else on the small ones, and route by `//` in front.
> 
> **Nothing waits silently.** Anything slow is a *task* with an id, a log and a progress stream — narrated to git on
> sideband 2 (`remote: * …`) and to the browser as SSE.
> 
> `AGENTS.md` is the full architecture and operating manual: constraints, the WAL strategies, every design decision
> with its reasoning, the invariants, and the cost model (round trips to the bucket are the budget).
> 
> 
> ## Running it
> 
> ```sh
> 
> # build (needs rust per rust-toolchain.toml, protoc, node 24 + pnpm for the web UI)
> just web-build && cargo build --release -p walgit-cli
> 
> # or: nix build .#walgit        or: podman build -t walgit -f Containerfile .
> 
> 
> # one box, TLS by walgit itself, a local S3 store (rustfs in a container)
> just dev-store
> ./target/release/walgit-server --config walgit.standalone.toml
> open https://walgit.localhost:8080/
> ```
> 
> * `walgit.standalone.toml` — the one-machine shape (self-signed TLS, rustfs, every role). Start here.
> * `walgit.example.toml` — every key with its default and a comment.
> * `Containerfile`, `flake.nix` — an OCI image and a Nix package/devshell.
> * `deploy/nginx.conf.example` — an optional nginx in front: public TLS, one `auth_request` per credential, and
>   **byte offload**: walgit answers bundle/LFS downloads with `X-Accel-Redirect` and nginx streams + caches the
>   object from the bucket itself (S3 presigned or GCS with walgit's bearer). The file documents the contract.
> 
> Roles (`server.roles`): `serve` (git, API, UI, bundles, LFS), `maintain` (checkpoints, bundles, compaction,
> fsck/repair), `events` (the webhook bridge). Empty = all. Any number of `serve` hosts may point at one bucket; give
> each repository one maintainer (placement globs) and you are done.
> 
> 
> ### Authentication
> 
> | mode | who gets in | how git authenticates |
> |---|---|---|
> | `none` | everyone is `anon` with write — loopback experiments | nothing |
> | `token` | static `tokens` in the config (`token_env` reads the secret from the environment) | `Authorization: Bearer `, or the token as an HTTP Basic password |
> | `oidc` | any OpenID Connect issuer (`issuer`, `oauth_client_id/secret`, `allowed_domains`/`allowed_emails`): Google, Entra, Okta, Auth0, Keycloak, Dex, GitLab… | a **walgit access token**: sign in once in the browser, create one at `/_auth/tokens`, paste it into the installer. Stateless (HMAC with `session_secret`, `access_token_ttl`); rotating the secret revokes all. ID tokens from the issuer (`audiences`) and static `tokens` work too. |
> 
> Developer setup is one idempotent command — `sh -c "$(curl -fsSL 'https://git.example.com/services/public/install.sh')"` —
> which stores the token in a file only the user can read, installs a tiny git credential helper (git ≥ 2.46: it
> answers `get` with `authtype=Bearer`, and on a real 401 `erase`s the token and says where a new one comes from),
> and turns on `transfer.bundleURI`. `?repo=owner/name` clones right after.
> 
> 
> ### Developing
> 
> ```sh
> just test          # fast hermetic tier (< 1 min): unit + quick integration, in-memory store, real git
> just e2e           # real git against the server (~20 s)
> just warnings      # zero rustc warnings across all targets
> just ci            # all of the above
> cargo test -p walgit-server --test sim     # fault-injection simulation (crashes, partitions, s

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/tobi/walgit)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "tobi--walgit"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "tobi--walgit" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W35" AND file.name != "tobi--walgit"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/tobi--walgit");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tobi--walgit" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tobi" AND file.name != "tobi--walgit"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tobi--walgit");
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
> const me = dv.page("Repos/tobi--walgit");
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
> const me = dv.page("Repos/tobi--walgit");
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
> const me = dv.page("Repos/tobi--walgit");
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
> const me = dv.page("Repos/tobi--walgit");
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

> **2026-08-25** — 首次收錄
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

- [[2026-08-27|2026-08-27]] — 再次上榜，2.2k stars
- [[2026-08-26|2026-08-26]] — 再次上榜，1.6k stars
- [[2026-08-25|2026-08-25]] — 首次收錄，1.1k stars
