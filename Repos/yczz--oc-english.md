---
repo: yczz/oc-english
url: https://github.com/yczz/oc-english
owner: yczz
owner_type: User
language: JavaScript
license: N/A
description: "养成类游戏英语学习"
homepage: ""
stars: 823
stars_per_day: 206
forks: 9
open_issues: 0
created: 2026-09-01
pushed_at: 2026-09-05
first_seen: 2026-09-06
week: "2026-W37"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-06
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-09"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 6645
readme_length: 4157
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-06"
star_history: "2026-09-06:823"
tags:
  - github
  - "category/other"
  - "lang/javascript"
aliases:
  - "oc-english"
  - "yczz/oc-english"
---

# oc-english

**823** stars · **206** stars/天 · 建立 4 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/yczz--oc-english");
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
> 养成类游戏英语学习

## 專案簡介

养成类游戏英语学习

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yczz--oc-english");
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
> const me = dv.page("Repos/yczz--oc-english");
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
| Forks | 9 |
| Open Issues | 0 |
| 最後推送 | 2026-09-05 |
| 建立日期 | 2026-09-01 |
| Repo 大小 | 6.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yczz/oc-english) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@tauri-apps/cli` `jsdom` `puppeteer-core`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 65
>     "Rust" : 26
>     "CSS" : 6
>     "HTML" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yczz](https://github.com/yczz) | 5 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-01 ~ 2026-09-05）
> **活躍天數** 3 天 · **最新 commit** init

## README 摘錄

> [!info]- 展開查看原文 README
> # 带着OC学英语
> 
> > 创建一只属于你的 Q 版 OC，给它捏脸、换装、布置小家——而赚积分的唯一方式，是**认真学英语**。
> 
> **Tauri 2.0 桌面应用** · Rust 后端 + Vanilla JS 前端 · SVG 矢量 Q 版角色 · PixiJS 等距 2.5D 房间 · macOS
> 
> ---
> 
> ## 📸 界面一览
> 
> | 注册档案 | 捏脸工坊 |
> | :---: | :---: |
> |  |  |
> 
> | 衣橱换装（一键同款蝴蝶少女） | 2.5D 小家 |
> | :---: | :---: |
> |  |  |
> 
> | 商店 | 学习中心（13 册教材） |
> | :---: | :---: |
> |  |  |
> 
> | 跟练（四选一 + 听力） | 单元考成绩单 |
> | :---: | :---: |
> |  |  |
> 
> > 截图由 `npm run screenshots` 自动生成（无头 Chrome + 契约级后端 mock 跑真实前端）。
> 
> ---
> 
> ## 🎮 游戏介绍
> 
> ### 🧒 创建你的 OC（免费 · 不限数量）
> 
> 起个名字就能迎接一只空白小人。可以创建多只 OC，每只都有独立的脸蛋、衣柜和小家，随时在人物栏一键切换。
> 
> ### 🎨 捏脸 + 换装
> 
> - **捏脸全免费**：肤色 4 档、眼型 6 款（圆溜溜 / 害羞粉桃眼 / 弯弯笑眼…）、瞳色 6 色、发型 8 款、发色 8 色、嘴巴 5 款 +「不画嘴」、腮红开关
> - **9 部位换装系统**：帽子 / 眼镜 / 上衣 / 下装 / 鞋子 / 手持 / 背饰 / 耳饰，共 **50 件装扮**
> - **一键同款**：内置「🦋 蝴蝶少女」预设——姬式长直发 + 粉桃眼 + 绿色羽织队服 + 蝴蝶翅膀 + 黑鞘短刀 + 玉耳坠，已拥有的部件一键上身，缺的会提示去商店补
> - 角色为纯 SVG 矢量绘制，任意缩放不糊；素体严格按参考模板实现
> 
> ### 🏠 2.5D 温馨小家
> 
> - 等距 2.5D 视角：左墙 + 后墙（带窗户挂画）+ 菱形地砖，家具有贴地投影和立体层次
> - **18 件家具**：三张床、书桌、书架、沙发、电视、钢琴、地毯、猫窝（里面睡着一只猫）…
> - 布置模式下拖动家具自由摆放，自动吸附网格；放不下会回弹；右键收进收纳箱
> 
> ### 📖 学英语（人教版同步）
> 
> - **13 册教材**：人教版小学英语三年级上~六年级下（8 册）+ 初中七年级上~九年级（5 册），单元与课本同步
> - **语法卡**：每册配套语法讲解，学习前先翻卡
> - **跟练**：每个单词两张卡——词义四选一 + 🔊 听力辨词，答对即学会
> - **单元考**：跟练全部完成后解锁，15 题（8 词义 + 4 听力 + 3 语法），**≥12 题通过**
> - 答题带朗读（系统 TTS），错题附解析
> 
> ### ⭐ 积分经济
> 
> 积分是唯一的货币，**只能靠学习赚取**，用来买装扮和家具装扮 OC 与小家。
> 
> | 事件 | 积分 |
> | --- | ---: |
> | 🎁 新手礼包 | +200 |
> | 🎵 跟练答对一张卡 | +2 |
> | 🏆 单元考首次通过 | +100 |
> | 📈 再次通过且刷新最佳 | 每多对 1 题 +10 |
> 
> ---
> 
> ## 🛠️ 技术栈
> 
> | 层 | 技术 |
> | --- | --- |
> | 壳 | Tauri 2.0（Rust），包体 ~10MB |
> | 后端 | Rust：存档/商店/题库/出题/考试判分全部在 Rust 侧，数据编译进二进制 |
> | 前端 | Vanilla JS（ES Modules，零框架零打包器） |
> | 角色 | SVG 矢量分层组装（素体 → 装扮 9 层 → 五官 → 发型） |
> | 房间 | PixiJS（WebGL）等距 2.5D 场景，SVG → 纹理 |
> | 存档 | JSON，位于系统应用支持目录 |
> 
> ## 📁 目录结构
> 
> ```
> ├── src/                    # 前端（Vanilla JS）
> │   ├── index.html          # 单页界面（注册/主界面/学习中心 + 7 个弹窗）
> │   ├── main.js             # 交互逻辑（捏脸/衣橱/预设/商店/房间/跟练/考试）
> │   ├── styles.css          # 暖色卡通主题
> │   ├── lib/pixi.min.js     # PixiJS（本地 UMD）
> │   └── js/
> │       ├── api.js          #   Tauri invoke 封装
> │       ├── character.js    #   素体 + 五官/发型/装扮分层渲染器
> │       ├── wardrobe.js     #   50 件装扮 SVG 素材（9 部位）
> │       ├── furniture.js    #   18 件家具 SVG 素材
> │       ├── room.js         #   等距 2.5D 房间（Pixi，拖拽/吸附/深度排序）
> │       └── tts.js          #   单词朗读
> ├── src-tauri/              # Rust 后端
> │   ├── src/
> │   │   ├── models.rs       #   存档数据结构（档案/人物/脸型/装扮/进度）
> │   │   ├── commands.rs     #   Tauri 指令（注册/创建/换装/购买/摆放…）
> │   │   ├── content.rs      #   13 册教材 + 语法卡加载
> │   │   ├── questions.rs    #   跟练卡与 15 题考卷生成、判分
> │   │   └── shop.rs         #   商店目录（50 装扮 + 18 家具）
> │   └── data/               # books/（13 册 JSON）+ wardrobe/furniture/grammar
> ├── test/                   # 冒烟测试（jsdom 全流程 / 渲染 / 契约）
> ├── scripts/screenshots.mjs # README 截图自动生成
> └── docs/DESIGN.md          # 设计稿
> ```
> 
> 存档位置：`~/Library/Application Support/com.zhengzhong.oc-english/player.json`
> 
> ---
> 
> ## 💻 安装步骤
> 
> ### 1. 环境要求（macOS）
> 
> | 依赖 | 版本 | 安装 |
> | --- | --- | --- |
> | Xcode Command Line Tools | — | `xcode-select --install` |
> | Rust | stable | `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs \| sh` |
> | Node.js | ≥ 22 | 官网下载或 `brew install node` |
> 
> ### 2. 获取代码并安装依赖
> 
> ```bash
> git clone  OC学英语
> cd OC学英语
> npm install          # 仅两个开发依赖：@tauri-apps/cli、jsdom（npm 建议配国内镜像）
> ```
> 
> ### 3. 开发模式运行（日常迭代推荐）
> 
> ```bash
> npm run tauri dev
> ```
> 
> 首次会编译 Rust 依赖（几分钟），之后热更新秒级生效。
> 
> ### 4. 打包成正式 App
> 
> ```bash
> npm run tauri build
> ```
> 
> 产物：
> 
> ```
> src-tauri/target/release/bundle/macos/带着OC学英语.app   ← 双击即用
> src-tauri/target/release/bundle/dmg/带着OC学英语_0.1.0_aarch64.dmg
> ```
> 
> > ⚠️ 未做 Apple 签名公证，首次打开若被 Gatekeeper 拦截：**右键 → 打开**，或执行
> > `xattr -cr 带着OC学英语.app`
> 
> ---
> 
> ## ✅ 测试
> 
> ```bash
> npm test
> ```
> 
> | 套件 | 覆盖 |
> | --- | --- |
> | `test:rust` | Rust 单测 + 全流程集成（注册→学习→考试→购买） |
> | `test:contract` | 前端 api.js 与 Rust 指令契约对齐 |
> | `test:render` | 50 装扮 + 18 家具素材完整性、SVG 合法性（xmllint） |
> | `test:ui` | jsdom 全流程冒烟：注册→捏脸→商店→换装→房间→跟练→考试→登出 |
> 
> README 截图再生成：`npm run screenshots`（需要本机装有 Google Chrome）。
> 
> ---
> 
> ## 🗺️ 路线图
> 
> - [x] M1 SVG 矢量角色渲染器 + 分层装扮系统
> - [x] M2 Rust 数据层（多档案多 OC 存档）+ 可打包桌面应用
> - [x] M3 13 册人教版教材 + 语法卡 + 跟练/单元考 + 积分商店
> - [x] M4 素体按参考模板重制 + 50 件装扮精致化 + 蝴蝶少女一键同款
> - [x] M5 等距 2.5D 房间 + 家具质感升级
> - [ ] M6 iOS 手机版（Tauri 2 移动端，进行中）
> - [ ] M7 安卓手机版
> - [ ] M8 豆豆助手聊天 / 好友串门

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/yczz/oc-english)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "yczz--oc-english"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "yczz--oc-english" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "yczz--oc-english"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/yczz--oc-english");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yczz--oc-english" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yczz" AND file.name != "yczz--oc-english"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yczz--oc-english");
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
> const me = dv.page("Repos/yczz--oc-english");
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
> const me = dv.page("Repos/yczz--oc-english");
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
> const me = dv.page("Repos/yczz--oc-english");
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
> const me = dv.page("Repos/yczz--oc-english");
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

> **2026-09-06** — 首次收錄
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

- [[2026-09-06|2026-09-06]] — 首次收錄，823 stars
