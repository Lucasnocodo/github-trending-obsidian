---
repo: ikow/php2shell-poc
url: https://github.com/ikow/php2shell-poc
owner: ikow
owner_type: User
language: Python
license: MIT
description: "CVE-2026-109618/109619 — 5 RCE chains + detection rules (Suricata, Sigma, ModSecurity). PHP session.upload_progress pre-auth exploit research."
homepage: ""
stars: 1842
stars_per_day: 368
forks: 631
open_issues: 5
created: 2026-10-21
pushed_at: 2026-10-22
first_seen: 2026-10-23
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-23
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-10-30"
contributor_count: 1
engagement: "high"
issue_close_rate: 67
repo_size_kb: 2716
readme_length: 8313
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-23"
star_history: "2026-10-23:1574,2026-10-24:1707,2026-10-25:1763,2026-10-26:1800,2026-10-27:1842"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/cve_2026_109618"
  - "topic/cve_2026_109619"
  - "topic/detection_rules"
  - "topic/exploit"
  - "topic/php_exploit"
aliases:
  - "php2shell-poc"
  - "ikow/php2shell-poc"
---

# php2shell-poc

**1.6k** stars · **1.6k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/ikow--php2shell-poc");
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

`cve-2026-109618` `cve-2026-109619` `detection-rules` `exploit` `php-exploit` `php-security` `php2shell` `poc` `rce` `session-upload-progress` `suricata-rules` `vulnerability-research` `waf-rules` `wordpress-security`

> [!summary] 一句話摘要
> CVE-2026-109618/109619 — 5 RCE chains + detection rules (Suricata, Sigma, ModSecurity). PHP session.upload_progress pre-auth exploit research.

## 專案簡介

CVE-2026-109618/109619 — 5 RCE chains + detection rules (Suricata, Sigma, ModSecurity). PHP session.upload_progress pre-auth exploit research.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ikow--php2shell-poc");
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
> const me = dv.page("Repos/ikow--php2shell-poc");
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
| Forks | 555 |
| Open Issues | 2 |
| Issue 解決率 | 67% (4 closed) |
| 最後推送 | 2026-10-22 |
| 建立日期 | 2026-10-21 |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ikow/php2shell-poc) |
| Topics | `cve-2026-109618` `cve-2026-109619` `detection-rules` `exploit` `php-exploit` `php-security` `php2shell` `poc` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 70
>     "Shell" : 20
>     "PHP" : 6
>     "Lua" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ikow](https://github.com/ikow) | 13 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-21 ~ 2026-10-22）
> **活躍天數** 2 天 · **最新 commit** Add vulnerability scanner module + fix nginx DNS resolution

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/ikow/php2shell-poc/issues/1) | It works | 31 | 9 |
> | [#6](https://github.com/ikow/php2shell-poc/issues/6) | Chain D/E exploit scripts — any plan to ship them in exploit | 3 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> php2shell
> 
>   CVE-2026-109618 & CVE-2026-109619 — PHP Pre-Auth RCE Exploit & Detection Toolkit
> 
>   
>   
>   
>   
>   
> 
>   Exploits · Detection · Lab · Writeup
> 
> ---
> 
> Five independent RCE chains exploiting PHP's `session.upload_progress` and the Zend engine's OOM bailout. **14 years of vulnerable code** — PHP 5.4.0 (2012) through 8.5.11. Pre-auth. No application vulnerability required for some chains.
> 
> Impacts **78% of all websites** — including WordPress (43%), Joomla, Drupal, Laravel, Magento, and every default PHP installation.
> 
> **Author:** [Qi Deng](https://github.com/ikow) &nbsp;|&nbsp; **Writeup:** [Substack](https://qideng.substack.com/p/php2shell-dissecting-phps-critical) &nbsp;|&nbsp; **Date:** 2026-10-21
> 
> ## CVE Details
> 
> | CVE | GHSA | CVSS | Description |
> |-----|------|------|-------------|
> | CVE-2026-109618 | [GHSA-w8hw-w9fx-j79w](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w) | 9.2 | OOM → `longjmp()` leaves Zend engine state invalid → RCE |
> | CVE-2026-109619 | [GHSA-6wmf-4rv5-p3rp](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp) | 9.2 | Stale global state across FPM worker requests → UAF → RCE |
> 
> **Patch:** [Commit 3584a98](https://github.com/php/php-src/commit/3584a98bda) — 300 files changed across the Zend engine.
> 
> ## Attack Chains
> 
> | Chain | Vector | Pre-auth | Conditions | SAPI |
> |-------|--------|:--------:|------------|------|
> | **A** | Session injection + LFI | Yes | App has any LFI sink | All |
> | **B** | var_destroy UAF → handler overwrite | No | App calls `unserialize()` | All |
> | **C** | Handler mismatch → `__destruct` | Yes | Two dirs with different serialize_handler | FPM |
> | **D** | OOM corruption → stale `EG()` | Yes | **None** — any endpoint | mod_php |
> | **E** | FPM session OOM → stale `BG()` | Yes | Producer: any `session_start()` endpoint; Consumer: **any** endpoint | FPM |
> 
> Chain D is the most critical: **zero-dependency pre-auth RCE** against any Apache mod_php installation.
> 
> Chain E is nearly as broad on FPM: the producer needs any endpoint that calls `session_start()` (near-universal — WordPress, Laravel, Joomla, Drupal all do), and the **consumer can be any PHP endpoint** — the `rfc1867` upload_progress handler runs during SAPI startup before application code. Verified: `nosession.php` (no `session_start()` in code) triggers 502 crash when consuming stale `BG(unserialize)` state.
> 
> ## Exploits
> 
> Three RCE exploits (Chains A, B, C) are included in [`exploit/`](exploit/):
> 
> | File | Chain | What It Does |
> |------|-------|-------------|
> | `chain_a_session_lfi.py` | A | Injects PHP code via upload filename → LFI includes session file → RCE |
> | `chain_b_uaf_rce.php` | B | var_destroy UAF → discovers `zif_system` via EG() → overwrites `var_dump` handler via `/proc/self/mem` → RCE |
> | `chain_c_mismatch_rce.py` | C | Pollutes FPM worker `PS(serializer)` → injects serialized object via filename → `__destruct` fires on decode failure → RCE |
> 
> Chains D and E exploits are available to [paid subscribers](https://qideng.substack.com/p/php2shell-dissecting-phps-critical).
> 
> ```bash
> # Chain A: Session injection + LFI → RCE
> python3 exploit/chain_a_session_lfi.py --host TARGET --port 80 --command 'id'
> 
> # Chain B: var_destroy UAF → RCE (run on target or via uploaded webshell)
> php exploit/chain_b_uaf_rce.php
> 
> # Chain C: Handler mismatch → __destruct → RCE
> python3 exploit/chain_c_mismatch_rce.py --host TARGET --port 80 --command 'id'
> ```
> 
> ## Detection Rules
> 
> Pre-built IDS / WAF / SIEM rules in [`detection/`](detection/):
> 
> | File | Format | Signatures |
> |------|--------|-----------|
> | `php2shell.rules` | Suricata / Snort | 13 rules — request, response, and recon |
> | `php2shell.yaml` | Sigma | 5 rules — web logs, process creation, file events |
> | `modsecurity.conf` | ModSecurity v2/v3 | 7 rules — drop-in for Apache/Nginx |
> | `php2shell.lua` | OpenResty Lua | Lightweight reverse proxy module |
> 
> **Fastest mitigation:** block `PHP_SESSION_UPLOAD_PROGRESS` in multipart POST bodies. Near-zero legitimate use, covers the primary attack vector for both CVEs.
> 
> ## Quick Start
> 
> ```bash
> git clone https://github.com/ikow/php2shell-poc.git && cd php2shell-poc
> 
> # Start the lab (PHP-FPM + nginx + Apache mod_php)
> cd lab && docker compose up -d
> 
> # Verify each chain
> python3 ../poc/verify_session_injection.py --target http://127.0.0.1:18080
> python3 ../poc/verify_handler_mismatch.py --target http://127.0.0.1:18080
> python3 ../poc/verify_oom_trigger.py --host 127.0.0.1 --port 18081
> python3 ../poc/verify_fpm_stale_state.py --target http://127.0.0.1:18080
> 
> # Run an exploit
> python3 ../exploit/chain_a_session_lfi.py --host 127.0.0.1 --port 18080 --command 'id'
> ```
> 
> ## Repository Structure
> 
> ```
> php2shell-poc/
> ├── exploit/
> │   ├── chain_a_session_lfi.py        # RCE: session injection + LFI
> │   ├── chain_b_uaf_rce.php           # RCE: var_destroy UAF → handler overwrite
> │   └── chain_c_mismatch_rce.py       # RCE: handler mismatch → __destruct
> ├── detection/
> │   ├── php2shell.rules               # Suricata / Snort IDS rules
> │   ├── php2shell.yaml                # Sigma SIEM detection rules
> │   ├── modsecurity.conf              # ModSecurity WAF rules
> │   └── php2shell.lua                 # OpenResty / Nginx Lua WAF module
> ├── poc/
> │   ├── verify_session_injection.py   # Verify Chain A
> │   ├── verify_uaf_asan.php           # Verify Chain B (ASAN)
> │   ├── verify_handler_mismatch.py    # Verify Chain C
> │   ├── verify_oom_trigger.py         # Verify Chain D
> │   └── verify_fpm_stale_state.py     # Verify Chain E
> ├── lab/
> │   ├── docker-compose.yml            # PHP-FPM + nginx + Apache mod_php
> │   ├── setup.sh                      # One-click lab setup
> │   └── php.ini / php-apache.ini      # Vulnerable PHP configs
> └── docs/
>     ├── ANALYSIS.md                   # Full technical analysis
>     └── substack_article.md           # Writeup source
> ```
> 
> ## Mitigation
> 
> ```ini
> ; Immediate — reduces attack surface
> session.upload_progress.enabled = Off
> session.use_only_cookies = On
> ```
> 
> > **The only complete fix is patching PHP** to 8.2.35 / 8.3.36 / 8.4.27 / 8.5.12+. The OOM corruption (Chain D) is in the Zend engine core — no INI setting fixes it.
> 
> ## Downstream Impact
> 
> Wiz has demonstrated pre-auth RCE on stock container images:
> 
> | Platform | Vulnerable | Notes |
> |----------|:----------:|-------|
> | WordPress | Yes | Core doesn't use PHP sessions, but WooCommerce and many plugins do |
> | Joomla | Yes | Uses native PHP sessions by default |
> | Drupal | Yes | Uses native PHP sessions by default |
> | Magento | Yes | Vulnerable even in maintenance mode |
> | Laravel | Yes | `PendingBroadcast` is a known `__destruct` gadget |
> 
> ## References
> 
> - [PHP Security Advisory](https://www.php.net/archive/2026.php)
> - [GHSA-w8hw-w9fx-j79w](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w) — CVE-2026-109618
> - [GHSA-6wmf-4rv5-p3rp](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp) — CVE-2026-109619
> - [Patch commit 3584a98](https://github.com/php/php-src/commit/3584a98bda) — 300 files, Zend engine + extensions
> - [Cloudflare WAF coverage](https://blog.cloudflare.com/php-vulnerabilities-waf-protection/)
> - [Sansec analysis](https://sansec.io/research/php2shell) — PHPSESSID heap leak discovery
> - [Wiz downstream impact](https://www.wiz.io/blog/php2shell-php-rce)
> - [Corelight detection](https://github.com/corelight/php2shell-detect) — Zeek + Suricata community rules
> 
> ## Disclaimer
> 
> This repository is for **authorized security testing and educational purposes only**. Exploit code for Chains D and E (zero-dependency RCE) is available to [paid subscribers](https://qideng.substack.com/p/php2shell-dissecting-phps-critical) of the writeup.
> 
> ## License
> 
> MIT
> 
> ---
> 
>   
>     Keywords: php2shell, CVE-2026-109618, CVE-2026-109619, PHP RCE, PHP exploit, session.upload_progress,
>     pre-auth RCE, PHP vulnerability, PHP session injection, PHP deserialization, PHP OOM, PHP memory corruption,
>     use-after-free, GHSA-w8hw-w9fx-j79w, GHSA-6wmf-4rv5-p3r

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/ikow/php2shell-poc)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ikow--php2shell-poc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "ikow--php2shell-poc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "ikow--php2shell-poc"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ikow--php2shell-poc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ikow--php2shell-poc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ikow" AND file.name != "ikow--php2shell-poc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ikow--php2shell-poc");
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
> const me = dv.page("Repos/ikow--php2shell-poc");
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
> const me = dv.page("Repos/ikow--php2shell-poc");
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
> const me = dv.page("Repos/ikow--php2shell-poc");
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
> const me = dv.page("Repos/ikow--php2shell-poc");
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

> **2026-10-23** — 首次收錄
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

- [[2026-10-27|2026-10-27]] — 再次上榜，1.8k stars
- [[2026-10-26|2026-10-26]] — 再次上榜，1.8k stars
- [[2026-10-25|2026-10-25]] — 再次上榜，1.8k stars
- [[2026-10-24|2026-10-24]] — 再次上榜，1.7k stars
- [[2026-10-23|2026-10-23]] — 首次收錄，1.6k stars
