---
repo: SMNETSTUDIO/WeChat-AI
url: https://github.com/SMNETSTUDIO/WeChat-AI
owner: SMNETSTUDIO
owner_type: User
language: TypeScript
license: Apache-2.0
description: ""
homepage: ""
stars: 1769
stars_per_day: 295
forks: 1259
open_issues: 0
created: 2026-08-10
pushed_at: 2026-08-16
first_seen: 2026-08-11
week: "2026-W33"
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
last_reviewed: 2026-08-11
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-08-20"
contributor_count: 1
engagement: "high"
issue_close_rate: 100
repo_size_kb: 762
readme_length: 6064
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-11"
star_history: "2026-08-11:903,2026-08-12:1450,2026-08-13:1571,2026-08-14:1689,2026-08-15:1713,2026-08-16:1744,2026-08-17:1769"
tags:
  - github
  - "category/other"
  - "lang/typescript"
aliases:
  - "WeChat-AI"
  - "SMNETSTUDIO/WeChat-AI"
---

# WeChat-AI

**903** stars · **903** stars/天 · 建立 1 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
| Forks | 669 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-08-11 |
| 建立日期 | 2026-08-10 |
| Repo 大小 | 762 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/SMNETSTUDIO/WeChat-AI) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 55
>     "HTML" : 42
>     "JavaScript" : 2
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@SMNETSTUDIO](https://github.com/SMNETSTUDIO) | 4 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-10 ~ 2026-08-11）
> **活躍天數** 2 天 · **最新 commit** chore: switch to Apache-2.0 with Commons Clause (no commercial use / no resale)

## README 摘錄

> [!info]- 展開查看原文 README
> # WeChat-AI
> 
> **自托管微信角色扮演对话服务** · Self-hosted WeChat roleplay chatbot service
> 
> 直连腾讯 **iLink**，数据存 **远端 Redis**，登录用 **LINUX DO OAuth**。
> Connects directly to Tencent **iLink**, stores data in **remote Redis**, and authenticates via **LINUX DO OAuth**.
> 
> [功能 Features](#功能-features) · [架构 Architecture](#架构-architecture) · [快速开始 Quick Start](#快速开始-quick-start) · [文档 Docs](#文档-docs) · [许可证 License](#许可证-license)
> 
> [](https://linux.do/) [](https://t.me/smnet_group/105727)
> 
> ---
> 
> ## 功能 Features
> 
> | 中文 | English |
> |------|---------|
> | LINUX DO OAuth 登录（用户 / 管理员） | LINUX DO OAuth login (user / admin) |
> | 用户中心：扫码添加/删除微信机器人、批准私聊用户、分配人设 | User center: scan-QR add/remove WeChat bots, approve chat peers, assign personas |
> | 用户对话：绑定 LINUX DO 后微信内 `@用户名` 请求对话，对方 `/同意` 后双向中继 | P2P chat: after binding, `@username` in WeChat to request a chat, peer replies `/agree` to relay messages both ways |
> | 管理后台：数据面板、Token 用量、用户与机器人、部署节点、表情包审核 | Admin dashboard: stats, token usage, users & bots, deploy nodes, sticker moderation |
> | 表情包广场：投稿 / 我的库 / 公开需审核；恶意图过滤 | Sticker square: submit / my library / public needs review; malicious-image filtering |
> | 回复文字与图片表情（主人表情库 → 模型引用 slug → iLink CDN 发图） | Text + image sticker replies (owner sticker library → model references slug → sent via iLink CDN) |
> | 输入状态指示（getconfig + sendtyping，回复送达即消失） | Typing indicator (getconfig + sendtyping, disappears when reply is delivered) |
> | 入站图片理解（`VISION_ENABLED`，默认关闭；caption 模式人设模型无需视觉） | Inbound image understanding (`VISION_ENABLED`, off by default; `caption` mode needs no vision-capable roleplay model) |
> | 入站语音转写（微信自带转写，默认开启） | Inbound voice transcription (WeChat built-in STT, on by default) |
> | 远端 Redis 存储（bot token 与表情包均在 Redis） | Remote Redis storage (bot tokens & stickers in Redis) |
> | OpenAI 兼容 LLM + 按日 Token 统计 | OpenAI-compatible LLM + daily token stats |
> | 用户自定义模型 + 联网搜索（经 HF 工具网关出站，主站不直连用户 API） | User custom models + web search (egress only via HF tools gateway) |
> | Chatflow：可视化编排（`/chatflow`），人设可选 prompt / chatflow 模式 | Chatflow: visual orchestration (`/chatflow`), personas support prompt / chatflow mode |
> | 多节点同构部署 + Cloudflare Worker 负载均衡 | Multi-node homogeneous deployment + Cloudflare Worker LB |
> | OTA 增量更新（文件差量 + 自动重启） | OTA incremental updates (file diff + auto restart) |
> 
> ## 架构 Architecture
> 
> ```
> 微信用户 ──► 腾讯 iLink ──► 本系统多节点 (收消息 / 人设+记忆 / LLM / 回消息)
> WeChat user ──► Tencent iLink ──► multi-node system (receive / persona+memory / LLM / reply)
> 
> 浏览器 ──► 主域名 CF Worker LB ──► Node-1…N (同一镜像, 共享 Redis)
> Browser ──► main domain CF Worker LB ──► Node-1…N (same image, shared Redis)
> ```
> 
> ## 快速开始 Quick Start
> 
> ### 本地开发 Local Development
> 
> ```bash
> pnpm install
> cp .env.example .env
> # 必填 Required: REDIS_URL（Upstash 用 rediss://）、LLM_API_KEY（平台）、LINUXDO_* 、LINUXDO_ADMIN_IDS
> # 用户自定义 LLM / 联网搜索：部署 huggingface/wechat-ai-tools，配置 TOOLS_BASE_URL + TOOLS_API_KEY
> 
> pnpm db:seed
> pnpm diag
> pnpm dev
> ```
> 
> 页面 / Pages：
> 
> | 路径 Path | 说明 Description |
> |-----------|------------------|
> | `/` | 功能落地页 + OG 分享图 Landing page |
> | `/app` | 用户中心 User center (LINUX DO login) |
> | `/docs` | 使用文档 Documentation |
> | `/admin` | 管理后台 Admin dashboard |
> | `/chatflow` | Chatflow 编辑器 Chatflow editor |
> 
> ### Docker 一键部署 One-Click Deploy
> 
> ```bash
> # 配置好 .env 后 After configuring .env
> docker compose up -d --build
> ```
> 
> 详见 / See `docs/docker.md`。
> 
> ### 多节点 Multi-Node
> 
> 每台服务器运行**同一镜像**，共享同一个 Upstash Redis，用户只访问主域名。Cloudflare Worker 负责健康检查与轮询分流，源站地址只写在 Worker 的 `ORIGINS` 中。详见 / See `cloudflare-worker/README.md`。
> 
> Each server runs the **same image**, shares one Upstash Redis; users only visit the main domain. A Cloudflare Worker handles health checks and round-robin, origin addresses live only in the Worker's `ORIGINS`.
> 
> ## 文档 Docs
> 
> | 文档 Doc | 内容 Content |
> |----------|-------------|
> | [docs/upstash-redis.md](docs/upstash-redis.md) | Upstash Redis 配置 Redis setup |
> | [docs/oauth-linuxdo.md](docs/oauth-linuxdo.md) | LINUX DO OAuth 配置 |
> | [docs/docker.md](docs/docker.md) | Docker / 多节点部署 Multi-node deploy |
> | [docs/cloudflare.md](docs/cloudflare.md) | Cloudflare 缓存 Cache |
> | [cloudflare-worker/README.md](cloudflare-worker/README.md) | CF Worker 多源站 LB |
> | [docs/ai-gateway.md](docs/ai-gateway.md) | AI 网关（主站 ↔ HF）AI gateway |
> | [docs/chatflow.md](docs/chatflow.md) | Chatflow 编排 |
> | [docs/admin-api.md](docs/admin-api.md) | 管理 API |
> | [docs/runbook.md](docs/runbook.md) | 运维手册 Ops runbook |
> | [docs/e2e-checklist.md](docs/e2e-checklist.md) | 真机验收清单 E2E checklist |
> 
> ## 仓库结构 Repository Structure
> 
> ```
> apps/api           # REST + iLink worker + Admin/App/Chatflow UI (public/*.html)
> packages/ilink     # iLink HTTP 客户端 iLink HTTP client
> packages/db        # Redis 仓储 / seed / 人设与模型连接 Redis repos / seed
> packages/llm       # OpenAI 兼容 chat + tools 网关客户端
> packages/core      # 会话、人设、记忆、路由、chatflow 引擎
> huggingface/       # wechat-ai-tools：唯一外网 AI/搜索出口（可独立部署）
> cloudflare-worker  # 主域名负载均衡 Cloudflare Worker LB
> docs/              # runbook、E2E 清单、ADR
> scripts/           # 构建 / 打包 / 验收脚本 build / pack / accept scripts
> ```
> 
> ## 验收 Acceptance
> 
> ```bash
> pnpm accept          # 离线自动化门禁 offline automated gate
> ```
> 
> 真机清单 / Real-device checklist：`docs/e2e-checklist.md` · 状态 / Status：`docs/ACCEPTANCE.md`
> 
> ## 合规与风险 Compliance & Risk
> 
> - 使用腾讯 **微信 ClawBot / iLink** 能力，须遵守相关使用条款。
>   Using Tencent **WeChat ClawBot / iLink** capabilities requires compliance with the applicable terms.
> - 个人 Bot 存在限流与处置风险；默认 **白名单用户** 才可对话。
>   Personal bots face rate-limit and takedown risks; by default only **approved users** can chat.
> - 角色扮演内容会经 LLM API 出机；请自行评估隐私。
>   Roleplay content leaves the machine via LLM APIs; assess your own privacy posture.
> - iLink 协议以实测为准，字段可能变更；适配层见 `packages/ilink`。
>   The iLink protocol is based on observed behavior and may change; the adapter lives in `packages/ilink`.
> 
> ## 许可证 License
> 
> [Apache-2.0 with Commons Clause](LICENSE)
> 
> **禁止商用与转卖**：仅允许个人/非商业使用；不得以任何形式收取费用、提供付费托管/咨询服务，或将本代码用于商业产品转售。详见 [LICENSE](LICENSE)。
> 
> **No commercial use / no resale**: personal & non-commercial use only. You may not charge fees, offer paid hosting/support, or resell the code in commercial products. See [LICENSE](LICENSE).

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/SMNETSTUDIO/WeChat-AI)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "SMNETSTUDIO--WeChat-AI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "SMNETSTUDIO--WeChat-AI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "SMNETSTUDIO--WeChat-AI"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "SMNETSTUDIO--WeChat-AI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "SMNETSTUDIO" AND file.name != "SMNETSTUDIO--WeChat-AI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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
> const me = dv.page("Repos/SMNETSTUDIO--WeChat-AI");
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

> **2026-08-11** — 首次收錄
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

- [[2026-08-17|2026-08-17]] — 再次上榜，1.8k stars
- [[2026-08-16|2026-08-16]] — 再次上榜，1.7k stars
- [[2026-08-15|2026-08-15]] — 再次上榜，1.7k stars
- [[2026-08-14|2026-08-14]] — 再次上榜，1.7k stars
- [[2026-08-13|2026-08-13]] — 再次上榜，1.6k stars
- [[2026-08-12|2026-08-12]] — 再次上榜，1.4k stars
- [[2026-08-11|2026-08-11]] — 首次收錄，903 stars
