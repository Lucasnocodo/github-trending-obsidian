---
repo: designfuchen/word-atlas
url: https://github.com/designfuchen/word-atlas
owner: designfuchen
owner_type: User
language: TypeScript
license: NOASSERTION
description: "词光 · Word Atlas — Illustrated IELTS vocabulary with 7,298 words, UK/US audio and FSRS review. Open-source app + CC BY 4.0 dataset."
homepage: "https://0xlei.tech/words/"
stars: 2760
stars_per_day: 1380
forks: 624
open_issues: 21
created: 2026-10-25
pushed_at: 2026-10-27
first_seen: 2026-10-27
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
last_reviewed: 2026-10-27
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-31"
contributor_count: 1
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 669564
readme_length: 4719
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-27"
star_history: "2026-10-27:1917,2026-10-28:2760"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/chinese"
  - "topic/dataset"
  - "topic/english_learning"
  - "topic/flashcards"
  - "topic/fsrs"
aliases:
  - "word-atlas"
  - "designfuchen/word-atlas"
---

# word-atlas

**1.9k** stars · **1.9k** stars/天 · 建立 1 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/designfuchen--word-atlas");
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

`chinese` `dataset` `english-learning` `flashcards` `fsrs` `ielts` `language-learning` `pwa` `react` `spaced-repetition` `vocabulary` `webgl`

> [!summary] 一句話摘要
> 词光 · Word Atlas — Illustrated IELTS vocabulary with 7,298 words, UK/US audio and FSRS review. Open-source app + CC BY 4.0 dataset.

## 專案簡介

词光 · Word Atlas — Illustrated IELTS vocabulary with 7,298 words, UK/US audio and FSRS review. Open-source app + CC BY 4.0 dataset.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/designfuchen--word-atlas");
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
> const me = dv.page("Repos/designfuchen--word-atlas");
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
| Forks | 483 |
| Open Issues | 17 |
| Issue 解決率 | 11% (2 closed) |
| 最後推送 | 2026-10-26 |
| 建立日期 | 2026-10-25 |
| 官方網站 | [Link](https://0xlei.tech/words/) |
| Repo 大小 | 653.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/designfuchen/word-atlas) |
| Topics | `chinese` `dataset` `english-learning` `flashcards` `fsrs` `ielts` `language-learning` `pwa` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@fontsource-variable/fraunces` `lucide-react` `react` `react-dom` `ts-fsrs` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `playwright` `prettier` `tsx` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 59
>     "CSS" : 22
>     "Python" : 13
>     "JavaScript" : 5
>     "Shell" : 1
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@designfuchen](https://github.com/designfuchen) | 11 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-25 ~ 2026-10-26）
> **活躍天數** 2 天 · **最新 commit** Polish bilingual project presentation and contributor entry points

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/designfuchen/word-atlas/issues/16) | [Content] 感谢大佬的分享，祝你每天都开心愉快，生活健康幸福美满 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 词光 · Word Atlas
> 
> **把单词变成画面，让复习有迹可循。**
> 
> 7,298 个雅思词条 · 原创插画 · 英美发音 · FSRS 间隔复习
> 
> [**立即体验 ↗**](https://0xlei.tech/words/)　 /　 [48 秒介绍](docs/assets/launch.mp4)　 /　 [下载词库](data/)　 /　 [English](README.en.md)
> 
> [](LICENSE)
> [](CONTENT_LICENSE.md)
> [](https://x.com/yangleiocx3)
> 
> ---
> 
> 词光是一款以插画和语境为核心的雅思背词应用。看画面理解词义，听发音建立联系，再用主动回忆和间隔复习巩固记忆。无需账号，学习进度保存在自己的设备上。
> 
> > **版本说明**：这个仓库提供词光的开源基础版及配套数据集。在线网站独立迭代，功能与仓库可能不同；仓库里的代码和内容分别遵循下方的 MIT / CC BY 4.0 授权。
> 
> [产品预览](#产品预览) · [学习方式](#学习方式) · [本地运行](#本地运行) · [开放数据](#开放数据) · [参与贡献](#参与贡献)
> 
> ## 产品预览
> 
> ### 一本可以听、可以练的单词图鉴
> 
> 每日计划，把注意力放在今天插画、词义、发音，在一张词卡里
> 
> 以上为仓库开源版的实际界面。页首为品牌概念插画。
> 
> ### 学过的词，汇成自己的星图
> 
> 19 个话题组成词汇星图。拖动旋转、滚动缩放，点击星星打开词卡；学习状态用不同亮度呈现。采用 WebGL2 渲染，不支持的设备提供降级显示。
> 
> 看 48 秒宣传片
> 
> [播放完整视频（含声音）](docs/assets/launch.mp4)
> 
> ## 学习方式
> 
> | 环节 | 你会做什么 |
> | :--- | :--- |
> | **看见** | 每个词配一幅插画、中英释义、两条原创例句，以及搭配、词族和用法提示。 |
> | **听见** | 切换英音、美音，听日常例句朗读；部分词条另含第二条例句录音。 |
> | **想起** | 看义选词、看图补句、听音辨词、拼写，逐步练习主动回忆。 |
> | **复习** | FSRS 根据学习记录安排复习，目标记忆率可调。只有首次作答计入正确率。 |
> | **积累** | 星图展示学习进度；打字练习独立统计；支持导出和恢复本地进度。 |
> 
> **本地优先。** 无需注册；看过的词条与媒体可缓存供离线使用。换设备前，请先导出进度备份。
> 
> 听发音、例句与环境声样本
> 
> 拿 *abandon* 举例，点开就能听（在线播放）：
> 
> | | |
> |---|---|
> | 🇬🇧 英音 | [abandon /əˈbændən/](https://0xlei.tech/words/atlas/audio/uk/abandon.mp3) |
> | 🇺🇸 美音 | [abandon /əˈbændən/](https://0xlei.tech/words/atlas/audio/us/abandon.mp3) |
> | 📖 例句朗读 | [We had to abandon our car in the snow.](https://0xlei.tech/words/atlas/audio/ex/abandon.mp3) |
> 
> 全部 7,298 个词都有英音、美音和例句朗读，还有 1,011 个重点词的第二条例句也配了朗读。
> 
> ### 环境声与交互声音
> 
> | | |
> |---|---|
> | 🎙 **开屏配音** | [「欢迎打开雅思大门」](https://0xlei.tech/words/sfx/splash-voice.mp3)：星尘汇聚成“词光”，大门打开 |
> | 🌌 **星图配音** | [「这是你的词汇星图。每学会一个词，就点亮一颗星。」](https://0xlei.tech/words/sfx/voice-galaxy-hello.mp3) |
> | 🎵 **星空音乐** | [一段可无缝循环的原创配乐](https://0xlei.tech/words/sfx/amb-stars.mp3)，默认陪你背词 |
> | 🌧 **6 段环境声** | [雨天图书馆](https://0xlei.tech/words/sfx/amb-rain.mp3) · [清晨海岸](https://0xlei.tech/words/sfx/amb-sea.mp3) · [林间早晨](https://0xlei.tech/words/sfx/amb-forest.mp3) · [夜晚壁炉](https://0xlei.tech/words/sfx/amb-fire.mp3) · [远航船舱](https://0xlei.tech/words/sfx/amb-voyage.mp3) · [安静咖啡馆](https://0xlei.tech/words/sfx/amb-cafe.mp3) |
> | ✨ **界面音效** | 答对、答错、翻卡、打字、连胜、点亮星星……每个操作都有自己的声音；读单词时背景音会自动压低 |
> 
> 全部素材都在仓库里：插画在 `public/atlas/img/`，录音在 `public/atlas/audio/`，这两类按 CC BY 4.0 开放；界面声音和配乐在 `public/sfx/`，随应用一起提供。
> 
> ## 本地运行
> 
> 需要 **Node.js 20+** 和 npm。仓库含完整图片与录音，首次下载可能较久。
> 
> ```bash
> git clone --depth 1 https://github.com/designfuchen/word-atlas.git
> cd word-atlas
> npm ci
> npm run dev
> ```
> 
> 打开 **http://localhost:5188**。
> 
> ```bash
> npm test             # 单元测试
> npm run check:atlas  # 词库结构与媒体校验
> npm run build        # 构建到 dist/
> ```
> 
> 子路径部署：`ATLAS_BASE=/words/ npm run build`。完整说明见 [部署文档](docs/deployment.md)。
> 
> **技术栈**：React 19 · TypeScript · Vite · ts-fsrs · WebGL2
> 
> ## 开放数据
> 
> 不仅可以直接使用应用，也可以把词库用于自己的学习工具、Anki 牌组或研究项目。
> 
> | 资源 | 开源版内容 | 入口 |
> | :--- | :--- | :--- |
> | 词条 | **7,298** 条，CEFR A1–C2、19 个话题 | [JSON](data/word-atlas.json) · [CSV](data/word-atlas.csv) |
> | 例句 | **14,596** 条，日常与雅思语境，附中文翻译 | [字段说明](docs/dataset.md) |
> | 插画 | **7,298** 幅，512 px WebP，另有缩略图 | [图片目录](public/atlas/img/) |
> | 录音 | **22,905** 段，英音、美音与例句朗读 | [音频目录](public/atlas/audio/) |
> 
> ```python
> import json
> from pathlib import Path
> 
> words = json.loads(Path("data/word-atlas.json").read_text(encoding="utf-8"))
> b2_environment = [w for w in words if w["cefr"] == "B2" and w["topic"] == "environment"]
> ```
> 
> 查看一条词条的数据结构
> 
> ```json
> {
>   "id": "principle",
>   "w": "principle",
>   "uk": "/ˈprɪnsəpəl/",
>   "us": "/ˈprɪnsəpəl/",
>   "senses": [{ "pos": "n.", "zh": "原则；行为准则", "en": "A belief or rule that guides decisions and behaviour." }],
>   "ex": [
>     { "en": "I refused the extra money as a matter of principle.", "zh": "出于原则，我拒绝了那笔额外的钱。" },
>     { "en": "The principle of equal opportunity should guide policies designed to improve access to higher education.", "zh": "…" }
>   ],
>   "col": ["in principle｜原则上", "basic principle｜基本原则"],
>   "fam": ["principled (adj.)"],
>   "tip": "principle 是原则；principal 是校长、主要的。",
>   "cefr": "B2",
>   "topic": "thinking"
> }
> ```
> 
> ### 内容来源与局限
> 
> 释义、例句、插画和录音为本项目生成：文字与插画使用生成式 AI，语音使用 ElevenLabs。内容经过自动结构与一致性校验，**尚未逐条人工审校**，可能出现释义、例句、插画或发音错误。它不是官方雅思词表，也不承诺提分。
> 
> [内容生成流程](docs/pipeline.md) · [记忆模型](docs/learning-model.md) · [生成脚本](scripts/atlas/)
> 
> ## 参与贡献
> 
> 发现问题时，请附上**词条 ID、复现步骤和预期结果**。内容纠错如有词典或其他可靠依据，也请一并提供。
> 
> - [报告问题](https://github.com/designfuchen/word-atlas/issues/new/choose)：词条纠错、界面问题或使用建议。
> - [贡献指南](CONTRIBUTING.md)：数据同步、代码规范和提交前检查。
> - [安全政策](SECURITY.md)：安全问题的反馈方式。
> 
> ## 授权
> 
> | 范围 | 许可 |
> | :--- | :--- |
> | 应用代码 | [MIT](LICENSE) |
> | 词库文本、插画与词条录音 | [CC BY 4.0](CONTENT_LICENSE.md)，署名 Word Atlas contributors（词光） |
> | 第三方依赖与字体 | 遵循各自许可，详见相应文件 |
> 
> ---
> 
> 由 [@designfuchen](https://github.com/designfuchen) 制作。产品进展与制作过程见 [X · @yangleiocx3](https://x.com/yangleiocx3)。
> 
> 如果词光对你有用，欢迎 Star，或把它分享给正在学英语的朋友。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/designfuchen/word-atlas) · [官方網站](https://0xlei.tech/words/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "designfuchen--word-atlas"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "designfuchen--word-atlas" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "designfuchen--word-atlas"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/designfuchen--word-atlas");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "designfuchen--word-atlas" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "designfuchen" AND file.name != "designfuchen--word-atlas"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/designfuchen--word-atlas");
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
> const me = dv.page("Repos/designfuchen--word-atlas");
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
> const me = dv.page("Repos/designfuchen--word-atlas");
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
> const me = dv.page("Repos/designfuchen--word-atlas");
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
> const me = dv.page("Repos/designfuchen--word-atlas");
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

> **2026-10-27** — 首次收錄
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

- [[2026-10-28|2026-10-28]] — 再次上榜，2.8k stars
- [[2026-10-27|2026-10-27]] — 首次收錄，1.9k stars
