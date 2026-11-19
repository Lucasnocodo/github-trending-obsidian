---
repo: duwqijlk/muse-protocol
url: https://github.com/duwqijlk/muse-protocol
owner: duwqijlk
owner_type: User
language: Python
license: NOASSERTION
description: "muse.ai 注册与邀请码兑换协议研究（纯 HTTP Python 实现）"
homepage: ""
stars: 1635
stars_per_day: 327
forks: 645
open_issues: 2
created: 2026-11-14
pushed_at: 2026-11-15
first_seen: 2026-11-17
week: "2026-W47"
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
last_reviewed: 2026-11-17
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-22"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 60
readme_length: 5236
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-17"
star_history: "2026-11-17:1524,2026-11-18:1609,2026-11-19:1635"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "muse-protocol"
  - "duwqijlk/muse-protocol"
---

# muse-protocol

**1.5k** stars · **508** stars/天 · 建立 3 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/duwqijlk--muse-protocol");
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
> muse.ai 注册与邀请码兑换协议研究（纯 HTTP Python 实现）

## 專案簡介

muse.ai 注册与邀请码兑换协议研究（纯 HTTP Python 实现）

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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
| Forks | 608 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-11-15 |
| 建立日期 | 2026-11-14 |
| Repo 大小 | 60 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/duwqijlk/muse-protocol) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `curl_cffi`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@duwqijlk](https://github.com/duwqijlk) | 9 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-14 ~ 2026-11-15）
> **活躍天數** 2 天 · **最新 commit** Add multi-account batch runner with sticky proxy scheduling and OTP polling

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/duwqijlk/muse-protocol/issues/3) | 协议失败: register-completion 400 | 1 | 2 |
> | [#2](https://github.com/duwqijlk/muse-protocol/issues/2) | 选定节点后，邮箱验证码校验成功，账号选择接口返回 200。页面进入 /access/verification，激活接口仍 | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # muse.ai 注册 / 邀请码兑换 协议分析
> 
> 补充一下，记得用JP 节点， JP 不需要绑卡，直接过
> 
> 纯 HTTP 实现 muse.ai 的注册与邀请码兑换流程，不依赖浏览器。本文记录的是通过抓包逐字段比对得出的协议细节。
> 
> ## 快速开始
> 
> ```bash
> pip install -r requirements.txt
> cp config.example.json config.json   # 填入邮箱与可选代理
> python example_register.py
> ```
> 
> ## 目录结构
> 
> ```
> musepy/
>   client.py    注册 + 兑换的完整协议客户端
>   runner.py    多账号批量调度（sticky 代理 / 预算 / 停止语义）
>   otp.py       验证码轮询（幂等：只取 send 之后的最新码）
>   falco.py     行为埋点上报（可选）
>   caa.py       注册漏斗事件上报（可选）
> example_register.py        单账号端到端示例
> example_batch.py           多账号批量示例
> config.example.json        配置模板
> test_onboarding_smoke.py   离线冒烟（披露解析纯函数）
> test_runner_smoke.py       离线冒烟（批量调度，mock 网络）
> ```
> 
> ## 协议流程
> 
> ```
> GET  /                                   拿初始 cookie
> POST /api/auth/native/restart            → 201 {csrf_token}
> POST /api/auth/native/send-otp           → 201
> POST /api/auth/native/confirm-otp        → 200 {registration_state:"completion_required",
>                                                tos:{content_version}}（动态 TOS 版本）
> POST /api/auth/native/register-completion→ 200 {auth_meta_session:{frl_access_token, frl_account_id}}
> POST auth.meta.com/hatch/session/bootstrap/ → 302…→ muse.ai 200 HTML（会话引导，必须）
>      └ 从 muse.ai 文档解析动态披露 disclosure_text/disclosure_version 与状态门
>        （resolvedDestination/isGeoGated/waitlist → 地区受限）
> POST /api/hatch/accept-tos               → 200（单次调用；正文用服务端动态披露，非硬编码）
> GET  /api/hatch/invite                   → 200 表示账号有效
> POST /api/hatch/vm/wake                  → 200（必须，否则兑换误报 invalid；
>                                              wake_trigger=mount + open_id + away_ms=0）
> POST /api/hatch/stateful-sharing         → 200
> POST /api/hatch/invite-code/redeem       → 200 {redemptionStatus:"redeemed"}
> POST /api/hatch/invite                   → 200 {code}（取回自己的码，不等于页面刮开 reveal）
> ```
> 
> ## 几个容易踩的坑
> 
> ### 1. `confirm-otp` 必须带 `supports_muse_link_transparency: true`
> 
> ```json
> {"otp_code":"123456","remember_device":true,"supports_muse_link_transparency":true}
> ```
> 
> ### 2. `register-completion` 的姓名字段语义
> 
> ```json
> {
>   "date_of_birth": "1993-11-14",
>   "first_name": "三郎",     // 名（given name）
>   "last_name": "近藤",      // 姓（family name）
>   "tos_content_version": "ntm_create_account:default_v1_meta_account_v3+docs_v2",
>   "remember_device": true
> }
> ```
> 
> `first_name` 是名、`last_name` 是姓，与直觉相反。生日早于约 18 年前会返回 403——同一会话同一份姓名，只把生日从 2013 改成 1993 就能从 403 变 200。
> 
> ### 3. `restart` 的 body 不是空对象
> 
> ```json
> {"resume": false}
> ```
> 
> ### 4. `accept-tos` 是会话激活开关，且必须先引导会话
> 
> 注册完成后**必须先走 `POST auth.meta.com/hatch/session/bootstrap/`**（form 表单只带
> `frl_access_token`，手动跟随 302/301/303 跳转落到 muse.ai 200 文档），否则后续
> hatch 接口一律 403。引导落地的 muse.ai 文档里带有 Next Flight 序列化的动态披露
> （`disclosureText` / `disclosureVersion`，当前实测版本为 `HATCH_ROW_v0`），`accept-tos`
> 的正文必须用服务端返回的这份动态文案（**不是**硬编码常量），`Referer` 用披露页
> URL；单次调用即可，不重试，403 时把响应体前 200 字符带出来便于诊断。
> 
> 引导后若服务端判定 `resolvedDestination == "waitlist"` 或 `isGeoGated == true`，
> 属于**地区受限**：注册已完成、账号保留，但未证明已加入名单。
> 
> ### 5. `vm/wake` 缺失会让兑换误报
> 
> 不调 `vm/wake` 直接兑换，即使是有效码也会返回：
> 
> ```json
> {"success":false,"reason":"invalid","detail":"この招待コードは存在しません"}
> ```
> 
> 需要先从已登录页面提取 `vmId`：
> 
> ```python
> re.search(r'vmId[\\"]*:[\\"]*([0-9a-fA-F-]{36})', html)
> ```
> 
> `wake` 的 body 实测为：`wake_trigger: "mount"`（首连）、`open_id`（新 uuid）、
> `away_ms: 0`，而不是早期的 `resume`。
> 
> ### 6. 兑换失败原因的含义
> 
> | reason | 含义 |
> |---|---|
> | `redeemed` | 成功 |
> | `already_redeemed` | 本账号已经兑换过一个码 |
> | `used_up` | 该码达到 30 次使用上限 |
> | `invalid` | 码不存在，或没调 `vm/wake` |
> 
> ## Cookie
> 
> 注册成功后 `hatch_sess` 由 `register-completion` 的响应头下发（约 886 字符），这是后续所有 hatch 接口的凭证。`hatch_vml` 在注册阶段一直是被清空状态（`Max-Age=0`），不属于必需项。
> 
> ## 多账号批量（musepy/runner.py）
> 
> ```bash
> python example_batch.py [count]
> ```
> 
> `config.json` 里的批量字段：
> 
> | 字段 | 说明 |
> |---|---|
> | `otp_file` | 邮箱清单，每行 `email----otp源URL`（otp 源返回 `[{"otp","time"},...]` JSON） |
> | `proxy_file` | sticky 代理池，每行 `host:port:user:pass`（或 `host:port`） |
> | `codes_file` | 可选，待兑换邀请码池，每行一个 |
> | `output_dir` / `tried_file` | 每账号结果 JSON 目录 / 已尝试邮箱清单 |
> | `workers` / `max_per_ip` | worker 数（默认 5）/ 每条代理的验证成功上限（默认 6） |
> | `resolve_ip` | 是否通过 ipify 解析出口 IP（默认 true） |
> | `send_caa` | 批量模式下是否上报注册漏斗埋点 |
> 
> 调度语义（与本地实现一致，不承诺任何绕过行为）：
> 
> - **worker 独占 sticky 代理**：一条代理行同一时刻只归一个 worker（claim/release），
>   不抢他人的行；代理池耗尽才共享并打日志。
> - **max_per_ip 按验证成功数计**：达到上限释放当前行并换另一行，原行本轮避开。
> - **pre-send 传输失败重试**：`bootstrap`/`restart` 等**未发出 OTP 前**的网络失败，
>   释放当前代理并**同邮箱换代理重试，上限 3 次**，不消耗新邮箱；仍失败标记 tried。
> - **业务拒绝 / pending / 已发 OTP 后的失败：整批停止**——不换行、不重试、不补号。
> - **region_waitlist**：账号已注册但地区受限——记录 `registered_waitlist`、账号保留，
>   整批停止。
> - **预算 = 领取的不同邮箱数**：失败不补号；结束打印 batch_summary JSON
>   （queued/started/remaining/ok/pending/server_rejected/transport_error/failed/
>   ip_switches/stopped/stop_reason）。
> 
> 每账号结果写入 `output_dir/.json`，字段：`email/status/stage/registered/
> own_code/own_code_status/reveal_status/is_revealed/ip/last_error`。
> `frl_access_token` 与 `hatch_sess` 仅在内存中使用，**不落盘**。
> 
> OTP 轮询幂等：每次 `send_otp` 前记录开始时间，`musepy/otp.py` 只取该时间之后的
> 最新 6 位验证码（45 秒超时、0.6 秒间隔、单请求 15 秒超时）。
> 
> ## 埋点说明
> 
> 站点前端会上报两类遥测：
> 
> - **falco**（`POST /api/falco`）—— 性能指标与业务交互事件，`machineId` 固定为 `not_set`
> - **caa-events**（`POST /api/auth/caa-events`）—— 注册漏斗，通过 `navigator.sendBeacon` 逐步骤上报，同一 `waterfall_id` 贯穿全程
> 
> 两者都不参与注册判定，缺省不影响流程能跑通。`musepy/falco.py` 与 `musepy/caa.py` 保留了完整实现，可通过配置关闭。
> 
> ## 使用声明
> 
> 本项目仅供个人、非商业的学习与研究使用，不采用 MIT 等开源许可证。不得用于商业用途或再分发。实际使用时请遵守目标站点的服务条款与当地法律法规。
> 
> 交流群 t.me/muihbb

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/duwqijlk/muse-protocol)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "duwqijlk--muse-protocol"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "duwqijlk--muse-protocol" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "duwqijlk--muse-protocol"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/duwqijlk--muse-protocol");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "duwqijlk--muse-protocol" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "duwqijlk" AND file.name != "duwqijlk--muse-protocol"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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
> const me = dv.page("Repos/duwqijlk--muse-protocol");
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

> **2026-11-17** — 首次收錄
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

- [[2026-11-19|2026-11-19]] — 再次上榜，1.6k stars
- [[2026-11-18|2026-11-18]] — 再次上榜，1.6k stars
- [[2026-11-17|2026-11-17]] — 首次收錄，1.5k stars
