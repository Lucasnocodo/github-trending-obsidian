---
repo: Jakeschincariol/day-trader-skill
url: https://github.com/Jakeschincariol/day-trader-skill
owner: Jakeschincariol
owner_type: User
language: Python
license: MIT
description: "11 Claude skills for day trading: scan thousands of charts, track breaking news, time every entry and exit, and replay every outcome before you risk a dollar."
homepage: ""
stars: 1726
stars_per_day: 345
forks: 370
open_issues: 8
created: 2026-10-20
pushed_at: 2026-10-20
first_seen: 2026-10-26
week: "2026-W44"
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
last_reviewed: 2026-10-26
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-29"
contributor_count: 1
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 414
readme_length: 8968
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-26"
star_history: "2026-10-26:1726"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/backtesting"
  - "topic/claude"
  - "topic/claude_skills"
  - "topic/day_trading"
  - "topic/stock_market"
aliases:
  - "day-trader-skill"
  - "Jakeschincariol/day-trader-skill"
---

# day-trader-skill

**1.7k** stars · **345** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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

`backtesting` `claude` `claude-skills` `day-trading` `stock-market`

> [!summary] 一句話摘要
> 11 Claude skills for day trading: scan thousands of charts, track breaking news, time every entry and exit, and replay every outcome before you risk a dollar.

## 專案簡介

11 Claude skills for day trading: scan thousands of charts, track breaking news, time every entry and exit, and replay every outcome before you risk a dollar.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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
| Forks | 370 |
| Open Issues | 8 |
| Issue 解決率 | 11% (1 closed) |
| 最後推送 | 2026-10-20 |
| 建立日期 | 2026-10-20 |
| Repo 大小 | 414 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Jakeschincariol/day-trader-skill) |
| Topics | `backtesting` `claude` `claude-skills` `day-trading` `stock-market` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jakeschincariol](https://github.com/Jakeschincariol) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-20）
> **活躍天數** 1 天 · **最新 commit** The Trader skill v2: 11 day-trading skills

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Jakeschincariol/day-trader-skill/issues/9) | فایل من | 0 | 1 |
> | [#7](https://github.com/Jakeschincariol/day-trader-skill/issues/7) | rst | 0 | 0 |
> | [#5](https://github.com/Jakeschincariol/day-trader-skill/issues/5) | Windows: one character outside the console code page kills t | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # The Day Trader skill
> 
> 11 Claude skills for day trading: scan thousands of charts, track breaking news, time every entry and exit, and replay every outcome before you risk a dollar.
> 
> Free, MIT, no signup, no API key. The tools are plain Python that read free
> public data: Yahoo Finance charts, Nasdaq Trader's symbol lists, SEC EDGAR
> and the House Clerk.
> 
> One scans thousands of charts for setups. Another tracks breaking news on
> every stock you watch. One watches a setup bar by bar and tells you the moment
> to get in, and another sets your stop and your target before you do. And the
> craziest one is the Time Machine: before you risk a dollar, it replays the
> rest of the session 10,000 times from the stock's own recent bars, plus every
> past day the same setup fired, and tells you the honest odds.
> 
> And no trade goes through until you say yes. Nothing in this pack can place
> an order on its own. Paper trading is the default.
> 
> > **Looking for the original Trader skill?** Copy an investor's 13F, the
> > stock screener, tax lots and rebalancing live in
> > [github.com/Jakeschincariol/trader-skill](https://github.com/Jakeschincariol/trader-skill).
> > This repo is its day-trading sequel: the Trader skill v2.
> 
> 
> ## Install
> 
> Paste this into Claude:
> 
> ```
> https://github.com/Jakeschincariol/day-trader-skill
> 
> install skill
> ```
> 
> Or as a plugin, in Claude Code:
> 
> ```
> /plugin marketplace add Jakeschincariol/day-trader-skill
> /plugin install day-trader-skill@day-trader-skill
> ```
> 
> Claude Code namespaces plugin skills, so installed as a plugin they show up as
> `/day-trader-skill:trader-scanner` and so on. Copy the folders instead if you want
> plain `/trader-scanner`:
> 
> ```bash
> git clone https://github.com/Jakeschincariol/day-trader-skill.git
> cp -r day-trader-skill/trader-* ~/.claude/skills/
> ```
> 
> Project-local instead of global: copy the same folders into your repo's
> `.claude/skills/`. No Claude Code at all? Paste any single `SKILL.md` at the
> top of a chat and it runs as a mode. You lose the Python tools, but the method
> works.
> 
> The tools need Python 3.8 or newer. Nothing to pip install. The SEC tools
> (news filings, the analyst) ask you to identify yourself: put your name and
> email in `trader/config.json` (`"sec_user_agent": "Your Name you@example.com"`)
> or in the `SEC_USER_AGENT` environment variable.
> 
> 
> ## How to use it
> 
> Everything lands in a `trader/` folder in your project, and each skill reads
> what the last one wrote:
> 
> ```
> scanner -> news -> entry -> exit -> timemachine -> budget -> risk -> broker   (one trade)
> alerts: stop, target, flat by the close                                       (while it is open)
> news / analyst / pelosi                                                        (on a schedule)
> ```
> 
> An example, the trade in the reel: Tesla, Monday October 19 2026, real data.
> 
> 1. **`/trader-scanner`** at 10:15 AM ET: of the 231 charts in the reel's
>    scan, 42 had closed above their 15-minute opening range. TSLA is one: range 354.47 to 362.18,
>    the 10:10 candle closed at 364.18, 0.55 % over the top.
> 2. **`/trader-news`**: the morning's TSLA headlines, in New York time
>    ("Tesla-SpaceX Merger Mania Strikes Wall Street Ahead of Earnings", 8:04,
>    tagged earnings and deal). Tesla reports this week: a day trade is out
>    before the close, so it is not exposed to the report.
> 3. **`/trader-entry`** watched TSLA bar by bar. At 10:12 it said waiting (the
>    10:10 bar was still forming). At 10:15 it said triggered: the first
>    5-minute close above the range, 364.18.
> 4. **`/trader-exit`** set the plan before the entry: stop at the range's
>    midpoint, 358.32, so 5.86 a share at risk; target one times that risk,
>    370.04; flat by 3:55 PM either way.
> 5. **`/trader-timemachine`** replayed the rest of the day 10,000 times, each
>    5-minute candle drawn from TSLA's own candles at that time of day over the
>    previous 59 sessions (seed 19, so anyone can repeat it): target first
>    29.4 %, stop first 25.5 %, still open at the close 45.1 %. It also re-ran
>    the same rule on those 59 real sessions: it fired 33 times, 13 hit the
>    target, 15 the stop, 5 neither. Its verdict: close to a coin flip. That is
>    the point of looking before you risk a dollar.
> 6. **`/trader-budget`** with a $5,000 account and a $50 max loss per trade:
>    50 / 5.86 = 8 shares ($2,913.44). If the stop fills at 358.32, the loss is
>    $46.88. It writes one bracket order: buy 8 TSLA, stop-loss 358.32,
>    take-profit 370.04.
> 7. **`/trader-risk`** checks it against your limits: the max loss, the daily
>    loss limit, trades per day, reward to risk, the entry window, position
>    size and cash. PASS or BLOCK, with the reason.
> 8. **`/trader-broker`** shows you the ticket in plain words. You type yes for
>    that exact order. Claude calls your brokerage connector (Alpaca's MCP
>    server, paper account by default), and Claude's own "Allow once / Deny"
>    card asks you one more time.
> 9. **`/trader-alerts`** rings on the stop, the target and at 3:55 PM to
>    flatten whatever is still open.
> 
> 
> ## The eleven
> 
> | command | job | what it does |
> | --- | --- | --- |
> | `/trader-scanner` | Chart Scanner | Scans thousands of charts for setups: opening-range breakouts, flags, oversold bounces. |
> | `/trader-news` | News Monitor | Tracks breaking news on every stock you watch and flags what moves it. |
> | `/trader-entry` | Entry Timer | Watches a setup bar by bar and tells you the moment to get in. |
> | `/trader-exit` | Exit Planner | Sets your stop and your target before you enter, so you know when to get out. |
> | `/trader-timemachine` | Time Machine | Replays every possible outcome of a trade before you risk a dollar: 10,000 simulated sessions plus every past time the setup fired. |
> | `/trader-risk` | Risk Manager | Checks every trade against your limits and stops anything over them. |
> | `/trader-budget` | Budget Manager | Sizes every position to your budget and your max loss per trade. |
> | `/trader-broker` | Order Executor | Sends approved orders to your broker, paper trading by default, never without your yes. |
> | `/trader-alerts` | Price Alerts | Rings when a price, a stop or the opening bell hits. |
> | `/trader-analyst` | Earnings Analyst | Reads earnings reports and sums up what changed. |
> | `/trader-pelosi` | Pelosi Tracker | Reads Congress's stock-trade disclosures the minute they are filed. |
> 
> 
> ## The tools
> 
> All standard-library Python. The data tools read public endpoints and are
> polite about it.
> 
> ```bash
> python3 trader-scanner/scan.py universe                                # ~5,900 US stocks, Nasdaq Trader
> python3 trader-scanner/scan.py daily                                   # pre-market setups, whole universe
> python3 trader-scanner/scan.py orb --at 10:15                          # opening-range breakouts so far
> python3 trader-news/news.py --tickers TSLA --hours 12                  # headlines, 8-Ks, today's move
> python3 trader-entry/entry.py check TSLA --setup orb                   # waiting / triggered / expired
> python3 trader-entry/entry.py watch TSLA --every 30                    # bar by bar until it triggers
> python3 trader-exit/exit.py plan --stop or-mid --target 1R --write     # -> trader/plan.json
> python3 trader-timemachine/timemachine.py run --write                  # 10,000 replays + the history
> python3 trader-budget/size.py --write                                  # -> trader/orders.json
> python3 trader-risk/check.py                                           # PASS / BLOCK per order
> python3 trader-broker/ticket.py show                                   # the tickets, READY or not
> python3 trader-alerts/alerts.py add --from-plan                        # stop, target, flat by close
> python3 trader-alerts/alerts.py check                                  # rings what hit, once
> python3 trader-analyst/facts.py TSLA                                   # quarters, growth, EPS
> python3 trader-pelosi/ptr.py index --member pelosi                     # her PTRs this year
> ```
> 
> ```bash
> python3 -m unittest discover -s tests -v
> ```
> 
> The tests 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Jakeschincariol/day-trader-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Jakeschincariol--day-trader-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Jakeschincariol--day-trader-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "Jakeschincariol--day-trader-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Jakeschincariol--day-trader-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Jakeschincariol" AND file.name != "Jakeschincariol--day-trader-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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
> const me = dv.page("Repos/Jakeschincariol--day-trader-skill");
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

> **2026-10-26** — 首次收錄
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

- [[2026-10-26|2026-10-26]] — 首次收錄，1.7k stars
