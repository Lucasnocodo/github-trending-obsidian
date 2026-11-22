---
repo: hatsunemiku-ai/google-one-tools
url: https://github.com/hatsunemiku-ai/google-one-tools
owner: hatsunemiku-ai
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 1152
stars_per_day: 1152
forks: 540
open_issues: 2
created: 2026-11-20
pushed_at: 2026-11-21
first_seen: 2026-11-22
week: "2026-W48"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-22
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-25"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 165
readme_length: 4287
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-22"
star_history: "2026-11-22:1152"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "google-one-tools"
  - "hatsunemiku-ai/google-one-tools"
---

# google-one-tools

**1.2k** stars · **1.2k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
| Forks | 540 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-11-21 |
| 建立日期 | 2026-11-20 |
| Repo 大小 | 165 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/hatsunemiku-ai/google-one-tools) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 94
>     "JavaScript" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hatsunemiku-ai](https://github.com/hatsunemiku-ai) | 3 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-20 ~ 2026-11-21）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/hatsunemiku-ai/google-one-tools/issues/2) | 30tb现在好像查询不到了？ | 0 | 3 |
> | [#1](https://github.com/hatsunemiku-ai/google-one-tools/issues/1) | Google_One_Pid=0 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Google One 工具包（MuMu 模拟器 + Frida）
> 
> **`g1.30tb`已在大部分区域下架，可以先搞搞3个月打折的Ultra 5X**
> 
> 通过 Frida 注入模拟器里的 Google One 进程，调用 Play BillingClient：
> **扫描账号可用的全部订阅 offer（免费/付费）**，以及**拉起任意 SKU 的 Play 收银台**（只弹出，不自动订阅）。
> 
> ---
> 
> ## 文件清单
> 
> | 文件 | 用途 |
> |---|---|
> | `ultra0_core.py` | 自包含核心（adb/frida-server/计费模块/注入模板，从原 ultra0.py 抽取） |
> | `extract_core.py` | 生成器：从原版 ultra0.py 重新抽取 ultra0_core.py（仅维护时用） |
> | `one_common.py` | 公共环境准备（选设备/root/frida-server/计费模块/Play 商店保活），所有脚本共用 |
> | `launch_checkout.py` + `launch_checkout.js` | **拉起任意 SKU 收银台**（主力脚本） |
> | `scan_all.py` | 全量扫描 70 个候选 SKU 的所有 offer（免费+付费+token），零风险 |
> | `query_sku.py` | 只查指定几个 SKU，零风险 |
> | `probe_env.py` | 环境诊断（frida 版本 / Java 桥 / Play 商店状态），出问题先跑它 |
> | `scan_everything.py` + `scan_offers.js` | 穷举账号全部 SKU，输出带定价阶段的原始 JSON 并渲染清单 |
> | `render_multi.py` | 合并多地区 JSON，生成 `SKU-清单.md` |
> | `scan_result_*.json` | 各地区扫描原始数据（已脱敏：serial 已掩码、token 已置空） |
> | `SKU-清单.md` | 多地区金额对照 + 人民币比价清单 |
> 
> > 整个文件夹**自包含、无外部依赖**：把 `google-one-tools` 拷到任何机器（装有
> > Python3.9+ 和 frida 16.x）都能直接跑，不需要原版仓库里的脚本。
> 
> ## 环境要求（缺一不可）
> 
> 1. **本机 frida 必须 16.x**（推荐 16.7.19）：
>    ```powershell
>    py -m pip install frida==16.7.19
>    ```
>    > ⚠️ frida 17.x 在 MuMu（Android 12 / x86_64）上 Java 桥损坏（`Java is not defined`），
>    > 所有功能静默失效。设备上的 frida-server 也必须同版本（脚本会自动下载匹配版）。
> 2. **自包含核心**：所有对原版 `ultra0.py` 的依赖已抽取进 `ultra0_core.py`，
>    本文件夹可整体拷贝到别处使用；要更新抽取范围，改 `extract_core.py` 后重跑 `py extract_core.py`。
> 3. 模拟器已 root、已登录 Google 账号、装有 Google One 和 Play 商店。
> 4. 用 `py` 而不是 `python`（本机的 `python` 是商店占位符，跑不了）。
> 
> ## 快速上手
> 
> ```powershell
> cd C:\path\to\google-one-tools
> 
> # 0. 环境自检（第一次先跑这个）
> py probe_env.py
> 
> # 1. 扫描当前账号的全部 offer（免费+付费，不下单）
> py scan_all.py                       # 自动选第一台模拟器
> py scan_all.py 127.0.0.1:16384       # 多开时指定实例
> 
> # 2. 只查某几个 SKU
> py query_sku.py g1.30tb g1.20tb
> 
> # 3. 拉起收银台（弹出后人工确认，脚本不点订阅）
> py launch_checkout.py --sku g1.20tb                    # 自动选设备
> py launch_checkout.py --sku g1.30tb 127.0.0.1:16384    # 指定实例
> ```
> 
> ## SKU 对照表
> 
> | 档位 | SKU | 说明 |
> |---|---|---|
> | 30 GB / 100GB / 200GB | `g1.30gb` / `g1.100gb` / `g1.200gb` | 基础存储 |
> | 2TB / 5TB / 10TB / 20TB / 30TB | `g1.2tb` / `g1.5tb` / `g1.10tb` / `g1.20tb` / `g1.30tb` | 基础存储 |
> | 年付版 | 上面任一 + `.annual`（如 `g1.2tb.annual`） | 部分档无年付 |
> | AI Plus (400GB) | `g1.play.helium` | 常有 12/6/3/1 月免费试用 |
> | AI Pro (5TB) | `g1.2tb.ai.subs_variant` | 常有 12+6+6+6 月免费试用 |
> | Ultra 20TB | `g1.play.20tb` | 试用看账号资格 |
> | Ultra AI Pro (30TB) | `g1.play.ai.pro` / `g1.30tb` | 多数号无试用 |
> | 2TB 首三月折扣 | `g1.2tb.3months_ip_85p.acq` | introprice，非免费 |
> 
> > 免费试用档基本只挂在**带 `play` 前缀**或 **`subs_variant`** 的 SKU 上；
> > 带 `.eft` 后缀的是试用专用 SKU。以 `scan_all.py` 的实际返回为准。
> 
> ## 多模拟器实例
> 
> - `pick_device` 默认选 adb 列表第一台。**多开时必须指定**：位置参数或环境变量 `SERIAL`：
>   ```powershell
>   py launch_checkout.py --sku g1.20tb 127.0.0.1:16384
>   $env:SERIAL="127.0.0.1:16384"; py scan_all.py
>   ```
>   （`16384` 只是 MuMu 12 的默认 ADB 端口；多开实例的实际端口以 `adb devices` 为准。）
> - frida 连接按 serial 精确匹配，不会串台。
> 
> ## VPN 共存（本工具包刻意支持）
> 
> - **不调用** `ultra0.ensure_network()`：不清设备代理、不杀 Clash/v2rayNG。
> - 注入走 adb 通道（127.0.0.1:xxxxx），与模拟器内 VPN 互不影响。
> - 建议 VPN 用**分应用模式**，排除这三个包让结算直连：
>   `com.android.vending`、`com.google.android.gms`、`com.google.android.apps.subscriptions.red`
>   （或 TUN 模式把 DNS 从 fake-ip 改 redir-host，否则 Play 结算可能连不上。）
> 
> ## 故障排查（按命中频率排序）
> 
> | 症状 | 原因 | 解法 |
> |---|---|---|
> | 收银台不弹出、Play 商店像是「死了」；logcat 有 `InAppBillingService ... crashed service` / `Monetization gRPC call timeout` / `:recovery_mode failed to attach` | **VPN（如 Surfshark）劫持了 Play 的网络**，结算服务崩溃重启 | ① Surfshark → 设置 → VPN 设置 → 分应用代理(Split tunneling) → 排除 `Google Play 商店`、`Google Play 服务`、`Google One`；② 或跑收银台前先断开 VPN |
> | 未收到 `launched` 事件 | Play 商店没在跑（脚本会自动拉，但可能拉不起来） | 跑 `py probe_env.py` 看 vending 状态 |
> | Play 商店反复 `failed to attach` / `start timeout` | Play 商店假死（连拉多次收银台后常见） | **重启模拟器**：`adb -s  reboot`，10 秒开机不亏 |
> | 收银台弹出瞬间 Play 商店崩（ScionFrontendAp SIGABRT） | MuMu 镜像上 Play 商店老版本 bug | 模拟器里升级 Play 商店，或清其数据 |
> | Java 桥 `hasJava:false` | 本机或设备 frida 是 17.x | `py -m pip install frida==16.7.19`，删设备 `/data/local/tmp/frida-server` 重跑 |
> | 重启模拟器后脚本报「没有 root」 | adb root 后 adbd 瞬断 | 本工具包的 `ensure_root_retry` 已自动重试；旧脚本需手动 `adb -s  root` |
> | 查询空 offer | frida 坏了（Java 桥死）或 SKU 在该账号地区不存在 | 先 `probe_env.py`；再看 SKU 是否在该地区上架 |
> 
> ## 重要注意
> 
> - `launchBillingFlow` 返回 code=0 **即可能消耗该账号的试用资格**，即使你最后没点订阅——别对同一个号反复拉免费档。
> - 收银台弹出不点订阅不会扣费；点了订阅按显示价格扣费。
> - 免费试用结束会自动续费，记得提前取消。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/hatsunemiku-ai/google-one-tools)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "hatsunemiku-ai--google-one-tools"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "hatsunemiku-ai--google-one-tools" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "hatsunemiku-ai--google-one-tools"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "hatsunemiku-ai--google-one-tools" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "hatsunemiku-ai" AND file.name != "hatsunemiku-ai--google-one-tools"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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
> const me = dv.page("Repos/hatsunemiku-ai--google-one-tools");
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

> **2026-11-22** — 首次收錄
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

- [[2026-11-22|2026-11-22]] — 首次收錄，1.2k stars
