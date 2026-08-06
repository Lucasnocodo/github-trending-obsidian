---
repo: imsai-sh/zhuzhiliao
url: https://github.com/imsai-sh/zhuzhiliao
owner: imsai-sh
owner_type: User
language: HTML
license: N/A
description: "竹知了 —— 一转就哇哇叫的传统玩具，Web 模拟版。零依赖单文件，真实录音采样，移动端优先。"
homepage: "https://zhuzhiliao.imsai.cc"
stars: 2101
stars_per_day: 525
forks: 270
open_issues: 9
created: 2026-08-01
pushed_at: 2026-08-04
first_seen: 2026-08-04
week: "2026-W32"
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
last_reviewed: 2026-08-04
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 760
readme_length: 2727
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-04"
star_history: "2026-08-04:946,2026-08-05:1744,2026-08-06:2101"
tags:
  - github
  - "category/other"
  - "lang/html"
aliases:
  - "zhuzhiliao"
  - "imsai-sh/zhuzhiliao"
---

# zhuzhiliao

**946** stars · **473** stars/天 · 建立 2 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
> 竹知了 —— 一转就哇哇叫的传统玩具，Web 模拟版。零依赖单文件，真实录音采样，移动端优先。

## 專案簡介

竹知了 —— 一转就哇哇叫的传统玩具，Web 模拟版。零依赖单文件，真实录音采样，移动端优先。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
| Forks | 120 |
| Open Issues | 48 |
| Issue 解決率 | 8% (4 closed) |
| 最後推送 | 2026-08-03 |
| 建立日期 | 2026-08-01 |
| 官方網站 | [Link](https://zhuzhiliao.imsai.cc) |
| Repo 大小 | 760 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/imsai-sh/zhuzhiliao) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 75
>     "JavaScript" : 25
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@imsai-sh](https://github.com/imsai-sh) | 20 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-02 ~ 2026-08-03）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #6 from imsai-sh/readme-trim-star-copy

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#37](https://github.com/imsai-sh/zhuzhiliao/issues/37) | 项目改名 | 21 | 4 |
> | [#1](https://github.com/imsai-sh/zhuzhiliao/issues/1) | 啊则个则个 则个似不似1000w token以内能coding出的最好的仓库 | 20 | 3 |
> | [#3](https://github.com/imsai-sh/zhuzhiliao/issues/3) | 有这么好的网站咋不早点告诉我 | 10 | 0 |
> | [#45](https://github.com/imsai-sh/zhuzhiliao/issues/45) | 有老哥给加上了【哇声大作战】功能，笑死我了，要听取蛙声一片了 | 7 | 0 |
> | [#26](https://github.com/imsai-sh/zhuzhiliao/issues/26) | bug: 自动甩转速不均匀 | 7 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 竹知了
> 
> 一转就"哇哇"叫的传统玩具，Web 模拟版。零依赖单文件，手机优先。
> 
> **在线试玩：**
> 
> [](https://github.com/imsai-sh/zhuzhiliao/stargazers)
> 
> > 甩两下要是听见了小时候那声"哇——哇——"，顺手点个 ⭐ **Star** 吧。
> 
> ## 玩法
> 
> 直接用浏览器打开 `index.html` 即可（无需构建、无需联网）。
> 
> - **按住屏幕画圈**：像甩真玩具一样，转得越快叫得越响（触屏时锚点会自动抬到指尖上方，避免手挡住小蝉）
> - **自动甩**：不想动手就点它（空格键也行）
> - **甩手机**（手机端，需 HTTPS 或本地文件）：握住手机划圈，重力方向在机身坐标里转动，直接驱动甩杆（iOS 首次需授权动作传感器；普通 http 局域网地址下浏览器不派发传感器事件，该按钮会自动隐藏）
> 
> ### 局域网试玩
> 
> 在项目目录起个静态服务，手机连同一 Wi-Fi 访问 `http://:8123`：
> 
> ```bash
> python3 -m http.server 8123
> ```
> 
> ## 真实玩具的发声原理
> 
> 竹筒一端蒙竹膜，膜心系一根涂了**松香**的线，线的另一头拴在小竹签上。
> 甩起来转圈时，线在松香上"黏–滑"交替摩擦，脉冲沿线传到竹膜，
> 膜与筒腔共鸣放大——就是那声"哇——哇——"。
> 
> ## 声音
> 
> 主音源是**真实竹知了的录音采样**：从实拍视频里截取 1.72 秒（恰好 4 个"哇"周期、
> 包络边界自动搜索对齐），尾部 50ms 等功率交叉淡化烘进头部做成无缝循环，
> 以 AAC 内嵌在 HTML 里保持单文件。回放速率随甩动转速变化
> （录音里的甩速约 2.33 圈/秒，甩得越快叫得越急越高），再叠每圈相位的音高微摆。
> 
> 采样解码失败时回退到纯合成链：
> 
> | 真实玩具 | 合成兜底实现 |
> |---|---|
> | 松香黏滑摩擦产生脉冲 | 锯齿波振荡器，频率随转速升高（55~195 Hz），tanh 软削波增毛糙谐波 |
> | 蝉鸣颗粒感 | 24~45 Hz 正弦低频调幅 + 带通摩擦噪声底 |
> | 竹膜 + 筒腔共鸣 | 三个并联带通共振峰（1050 / 2150 / 3350 Hz） |
> | 转圈带来的"哇——哇——" | 带通滤波器中心频率随转动相位扫频 |
> 
> ## 物理
> 
> 竹筒是绳系质点（重力 + 只拉不推的弹性绳 + 空气阻力，1/240s 定步长积分）。
> 发声核心变量是**绳方向的角速度**：竹筒绕甩杆转得越快、绳越紧，声音越响越亮；
> 角速度低于约 1.1 圈/秒或绳未张紧时不发声，松手后靠惯性余音渐歇。
> 
> ## 技术
> 
> - 单文件 `index.html`：Canvas 2D 渲染 + Web Audio API，无任何依赖（含内嵌录音）
> - SEO：head 里有 OG/Twitter 卡片与 JSON-LD（WebSite + WebApplication/VideoGame）；`` 里有一段
>   玩具介绍作为无 JS 环境（含不执行 JS 的百度蜘蛛）可读的静态正文，正常用户不可见；根目录 `robots.txt`、
>   `sitemap.xml`、`og-image.jpg`（1200×630 页面实拍）、`404.html`（有了它 Cloudflare Pages 才会对未知路径
>   返回真 404，否则任意路径都是 200 + 首页的 soft-404）
> - 移动端优先：安全区适配、绳长随屏幕缩放、拇指小圈即可甩响（触摸时锚点自动上移避免手挡）、多点触控互斥、`devicemotion` 体感模式
> - 音频在首次触摸/点击时初始化，触摸在抬手时补解锁（user activation 规则）；iOS 的 `interrupted` 状态与旧内核 `roundRect` 均有兜底
> - 静态场景预合成为离屏层，静置 8 秒自动挂起音频线程省电
> 
> ## 实时计数
> 
> 页面底部有一行全站统计：**此刻在线 · 唯一来客 · 访问次数 · 全球哇数**，外加只存在浏览器
> localStorage 里的**个人哇数**。手动甩出的每一圈记一"哇"，自动甩不计。
> 
> 后端是 `worker/` 里的一个 Cloudflare Worker + 单实例 SQLite **Durable Object**：
> 
> - **实时推送**：所有在线玩家挂在同一个 DO 的 WebSocket（Hibernation API）上，任何人甩出哇，
>   350ms 合并广播推给全场；挂机连接休眠零费用，心跳 ping/pong 由运行时自动应答不唤醒 DO
> - **同步策略**：客户端本地先累计，1.2s 批量走 WS 上报；页面关闭用 `sendBeacon` 兜底补报；
>   断线指数退避重连，重连不重复计访问
> - **成本控制**：计数在内存自增、2 秒合并落盘（SQLite 行写入有限额）；免费套餐足够跑
> - **防刷**：单连接哇数限速（10s 滑动窗口）、单条消息哇数上限、并发连接上限、
>   按 IP 的连接/补报频控、单连接 hi 去重
> - **路由**：`zhuzhiliao.imsai.cc/api/*` 走 zone route 进 Worker，其余流量走 Pages；
>   唯一访客用 localStorage 里的随机 UUID 在 DO 的 SQLite 表去重
> 
> 部署：`cd worker && npx wrangler deploy`（Pages 部署页面本体，Worker 承接 `/api/*`）。
> 
> ## 点个 Star ⭐
> 
> 竹知了是小时候路边摊上几块钱的玩意儿，会响、会烦人、会被大人没收，现在实物越来越难找了。
> 这个 Web 版想做的事很简单：让它继续能被随手甩响 —— 一个 HTML 文件，零依赖、零构建，
> 存下来断网也能玩，二十年后双击照样出声。
> 
> 如果它甩响了你的某段回忆，或者你觉得这套「真实录音采样 + 绳系质点物理 + Durable Object
> 实时计数」塞进单文件的做法有点意思：
> 
> - 点个 [⭐ Star](https://github.com/imsai-sh/zhuzhiliao/stargazers) —— Star 多了才排得上 GitHub 的搜索和推荐
> - 把  甩给一个也玩过竹知了的人，看他愣两秒
> - 有 Bug、有想法、有更像真玩具的调参，欢迎提 Issue / PR
> 
> 全球哇数正在页面底部实时跳动，你的每一圈都算数。

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityDev--WilonityLoader|WilonityDev/WilonityLoader]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]]

[GitHub](https://github.com/imsai-sh/zhuzhiliao) · [官方網站](https://zhuzhiliao.imsai.cc)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "imsai-sh--zhuzhiliao"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "imsai-sh--zhuzhiliao" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "imsai-sh--zhuzhiliao"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "imsai-sh--zhuzhiliao" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "imsai-sh" AND file.name != "imsai-sh--zhuzhiliao"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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
> const me = dv.page("Repos/imsai-sh--zhuzhiliao");
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

> **2026-08-04** — 首次收錄
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

- [[2026-08-06|2026-08-06]] — 再次上榜，2.1k stars
- [[2026-08-05|2026-08-05]] — 再次上榜，1.7k stars
- [[2026-08-04|2026-08-04]] — 首次收錄，946 stars
