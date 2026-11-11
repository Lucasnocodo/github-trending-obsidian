---
repo: mmdoctor/google-pro-helper
url: https://github.com/mmdoctor/google-pro-helper
owner: mmdoctor
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 1675
stars_per_day: 279
forks: 575
open_issues: 2
created: 2026-11-05
pushed_at: 2026-11-05
first_seen: 2026-11-11
week: "2026-W46"
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
last_reviewed: 2026-11-11
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-14"
contributor_count: 1
engagement: "high"
issue_close_rate: 50
repo_size_kb: 94
readme_length: 3057
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-11"
star_history: "2026-11-11:1675"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "google-pro-helper"
  - "mmdoctor/google-pro-helper"
---

# google-pro-helper

**1.7k** stars · **279** stars/天 · 建立 6 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
| Forks | 575 |
| Open Issues | 2 |
| Issue 解決率 | 50% (2 closed) |
| 最後推送 | 2026-11-05 |
| 建立日期 | 2026-11-05 |
| Repo 大小 | 94 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mmdoctor/google-pro-helper) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 60
>     "HTML" : 33
>     "JavaScript" : 6
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mmdoctor](https://github.com/mmdoctor) | 9 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-05 ~ 2026-11-05）
> **活躍天數** 1 天 · **最新 commit** Clarify batch version usage in README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/mmdoctor/google-pro-helper/issues/3) | 第四步进行不了怎么办？ | 0 | 0 |
> | [#1](https://github.com/mmdoctor/google-pro-helper/issues/1) | Google疑似开始反制 | 0 | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Google Pro Helper
> 
> 本仓库收录两个独立版本：浏览器扩展版与批量版，分别保留各自的目录结构和原有代码。
> 
> | 版本 | 目录 | 简介 |
> | --- | --- | --- |
> | 浏览器扩展版 | [extension](./extension/) | 在浏览器中使用的扩展项目，包含扩展清单、弹窗页面、脚本与图标。 |
> | 批量版 | [batch](./batch/) | 用于批量账号任务管理的本地控制台项目，包含网页界面、后端、启动脚本与测试。 |
> 
> ## 目录结构
> 
> ```text
> google-pro-helper/
> ├── extension/   # 浏览器扩展版
> ├── batch/       # 批量版
> ├── .gitignore
> └── README.md
> ```
> 
> ## 浏览器扩展版
> 
> Linuxdo原帖在此:
> 
> [https://linux.do/t/topic/3123997](https://linux.do/t/topic/3123997)
> 
> （💰 免费激活 Google AI Pro 12 / 24 个月」| offer token 注入）
> 
> （我本人大部分号是用的是注册机批量搞的，原理都一样，总共整了七个目前都活过了半个月，不过被这么大批量薅，估计也活不久了）
> 
> > **在此提示，不要用大号！！！！**
> 
> ### **1.在chrome浏览器上点击"加载未打包的拓展程序"，注意打开开发者模式**
> 
> ### **2.然后打开 one.google.com/plans，按照拓展里步骤，先开12月的，注意正上方的绿色提示，和右下角的提示**
> 
> ### **3.然后选择pro套餐，进行绑卡（需要卡里有至少1u验证，u卡基本都行，测试卡：starryblu/maya/bybit/mexc/招行master/中行2233master/bitEU/wise/savo卡全都可以）付款前一定要看清，第一个步骤首月必定是0元的**
> 
> > PS：这里需要说明如果是已经给了折扣的情况，如下图，付款时有极大概率需要付款首月的youtube会员，小心别被反薅，正常显示的都是在下个月才收费
> 
> ### **4.然后如果不再出订购页面的话，不要着急，也不要取消订阅（其实取消了也无所谓）。**
> 
> 先把拓展切换到六个月，再重新进入页面，接着点击切换到年付
> 
> 就会再次出现订购页面，这里会出现2028.5.5付款（示例日期），不要担心，这个其实还是免费的，到2028.5.5才会付款；同样的方法再次操作，切换下一个6个月，就能实现2年pro会员了
> 
> > ps：
> >
> > 最后一定注意取消订阅，不要被反薅，因为附带有一个每月的youtube会员需要付费，不取消的话下个月就会被反薅
> 
> **L站佬友补充：**
> 
> > Fy6666:
> >
> > YouTube Premium Individual Add On无法使用。您可以单独订阅此套装中的其他商品。提示这样子怎么办呢？查了，是YouTube那个会员资格只有美国、加拿大、巴西、法国、德国、日本哦，这6个国家可以
> 
> > aikavvak12una:
> >
> > 账号地区不对可以直接先添加美国的付款方式就再订阅就行了
> >
> > 我的一个小号条款地区甚至是中国 🤣
> 
> 更改play商店支付方式即可，和谷歌账号属地无关
> 
> ## 批量版
> 
> **Google AI Pro (5 TB) 零成本两年 (US$0.00 -> 24个月) 全自动控制台**
> 
> > 以上述“零成本两年”为项目目标，不代表已验证的订阅结果。原说明中的“全程 0 扣费”不能作为保证，实际费用和权益以结账页面及上游结果为准。
> 
> ### 一、运行环境要求
> 1. Windows 10 / 11 系统
> 2. 已安装 Google Chrome 浏览器（默认路径即可）
> 3. 已安装 Python 3.10 或更高版本（安装时勾选 Add Python to PATH）
> 4. 网络环境：本机开启美区（US）代理，或在控制台左侧填写代理模板
> 
> ### 二、快速启动步骤
> 1. 首次使用请双击运行：【1_首次运行_安装依赖并启动.bat】
> 2. 之后日常使用直接双击：【2_启动控制台.bat】
> 3. 浏览器会自动打开控制台页面：http://127.0.0.1:8765
> 
> ### 三、自定义填写支付卡 & 跑号说明
> #### 1. 填写支付卡（必填）：
>    - 在网页左侧【全局配置与内联免税绑卡】区域，填入你自己的 Visa 或 Mastercard 外币卡：
>      * 卡号（16位数字）
>      * 有效期（月 / 年，如 08 / 29）
>      * 安全码（3位 CVC）
>      * 持卡人英文姓名
>      * 免税邮编默认已填好 97201（美国俄勒冈免税州），无需修改
>    - 填写后点击【💾 保存配置】。
>    - 注：脚本内置严格 0 元消费保护，仅在结账弹窗确认为 US$0.00 时才会点击订阅，全程 0 扣费。
> 
> #### 2. 批量导入 Google 账号：
>    - 在网页右侧【批量放号导入区】粘贴账号（每行一个），支持以下任意格式：
>      * 邮箱----密码----辅助邮箱
>      * 邮箱----密码----辅助邮箱----2FA密钥
>      * 邮箱----密码----2FA密钥
>    - 点击【➕ 一键导入账号列表】。
> 
> #### 3. 开始全自动执行：
>    - 点击单个账号右侧的【▶ 执行】或顶部的【▶ 批量全自动执行】。
>    - 脚本会自动完成：
>      - Step 1: 自动登录 Google 并通过辅助邮箱 / 2FA 验证
>      - Step 2: 内联免税绑卡 + 首层 12 个月免费包 (US$0.00)
>      - Step 3: 叠加二层 6 个月免费包 (US$0.00 -> 18个月)
>      - Step 4: 叠加三层 6 个月免费包 (US$0.00 -> 24个月封顶)
>      - Step 5: 自动前往 Google Play 取消自动续订，锁死 2 年到期权益并截图验真
> 
> ### 四、隔离与敏感数据
> 
> - 浏览器扩展版位于 `extension/`，批量版位于 `batch/`，两者分目录存放。批量版原启动脚本使用当前 Python 环境安装依赖，未提供独立虚拟环境，不能宣称依赖完全隔离。
> - 批量版按账号使用独立浏览器配置目录，但这不等于虚拟机或安全沙箱。
> - 账号密码、2FA 密钥、支付卡信息和浏览器登录数据属于敏感信息；本地配置、浏览器配置目录、截图、日志及缓存不应提交到仓库。
> 
> ## 使用入口
> 
> - **浏览器扩展版**：打开 Chrome 扩展管理页，开启开发者模式，选择“加载已解压的扩展程序”，加载 `extension` 目录。
> - **批量版**：在 Windows 下进入 `batch` 目录，首次使用运行 `1_首次运行_安装依赖并启动.bat`，之后运行 `2_启动控制台.bat`。
> 
> 两个版本独立使用。本次整理仅增加仓库分层和本页介绍，不修改项目源代码。
> 
> 本地账号与支付配置（`config*.json`）、环境变量文件、缓存和运行数据不提交到仓库；批量版的配置请在本地填写。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/mmdoctor/google-pro-helper)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "mmdoctor--google-pro-helper"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "mmdoctor--google-pro-helper" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "mmdoctor--google-pro-helper"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mmdoctor--google-pro-helper" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mmdoctor" AND file.name != "mmdoctor--google-pro-helper"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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
> const me = dv.page("Repos/mmdoctor--google-pro-helper");
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

> **2026-11-11** — 首次收錄
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

- [[2026-11-11|2026-11-11]] — 首次收錄，1.7k stars
