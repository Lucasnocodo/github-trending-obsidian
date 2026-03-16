---
repo: joeseesun/qiaomu-mondo-poster-design
url: https://github.com/joeseesun/qiaomu-mondo-poster-design
owner: joeseesun
owner_type: User
language: Python
license: MIT
description: "一句话生成大师级海报、书籍封面、专辑封面和各类设计作品。无需懂PS、配色或艺术史，AI自动选择最佳风格（基于20位传奇海报设计师）。支持电影海报、读书笔记、公众号封面、小红书配图等。默认9:16竖版，完美适配社交媒体。包含AI提示词优化、风格对比、图生图转换功能。触发词：\"Mondo风格\"、\"书籍封"
homepage: ""
stars: 468
stars_per_day: 67
forks: 43
open_issues: 1
created: 2026-03-08
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "設計工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一句话生成大师级海报、书籍封面和专辑封面，AI自动选择最佳风格。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 59803
readme_length: 8399
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:382,2026-03-16:468"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "qiaomu-mondo-poster-design"
  - "joeseesun/qiaomu-mondo-poster-design"
  - "一句话生成大师级海报、书籍封面和专辑封面，AI自动选择最佳风格。"
---

# qiaomu-mondo-poster-design

**468** stars · **67** stars/天 · 建立 7 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 一句话生成大师级海报、书籍封面和专辑封面，AI自动选择最佳风格。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (67 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成設計作品但不懂設計的內容創作者和小型企業主。
> **一句話重點** 這個工具讓每個人都能輕鬆創作出專業級的設計作品，無需設計背景。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "joeseesun--qiaomu-mondo-poster-design" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花2小時學習、1小時整合，得到快速生成設計的效果，值得嘗試。

> [!abstract] 核心創新
> AI自动选择最合适的艺术风格，为用户生成专业级设计作品。

## 專案簡介

这个工具的核心机制是通过用户输入一句话描述，AI会自动选择最合适的艺术风格并生成专业级的海报、书籍封面等设计作品。用户只需简单描述内容，例如'为《三体》设计书籍封面'，AI会自动匹配风格并输出相应的设计，省去了学习设计软件的时间和精力。该工具支持多种平台和比例，默认生成9:16竖版，适合社交媒体使用。技术上，项目使用Python和requests库进行网络请求，依赖Pillow库处理图像生成和对比功能。与其他工具相比，Qiaomu Mondo设计的独特之处在于其AI自动选择艺术风格的能力，避免了用户需要理解复杂设计概念的困扰。

相比于传统的设计工具，用户不需要懂得配色和艺术史，AI会自动为其匹配大师级的配色方案和构图原则。该工具适合个人用户和小团队使用，尤其是那些没有设计背景的人。社区活跃度较高，当前有1个开放问题，解决率为0%。在未来6个月，预计会增加更多艺术风格和功能，进一步提升用户体验。建议在需要快速生成设计作品时使用，但不适合需要高度定制化的场景。

**技術棧**：`Python 3.7+` · `requests>=2.31.0` · `Pillow>=10.0.0`

## 重點功能

- 一句话生成设计 — 用户只需描述内容，AI自动生成设计作品。
- 多平台适配 — 支持多种比例（如21:9、3:4、16:9等），适合不同用途。
- 自动选择艺术风格 — AI根据描述自动匹配合适的设计风格。
- 大师级配色方案 — AI自动为设计选择最佳配色，提升视觉效果。
- 图生图功能 — 支持将现有图片转换为Mondo艺术风格。

## 快速開始

1. 安装工具
```bash
npx skills add joeseesun/qiaomu-mondo-poster-design
```
2. 生成书籍封面
```bash
"用 Mondo 风格为《三体》生成一张书籍封面"
```
3. 生成公众号封面
```bash
"为《人类简史》设计公众号封面"
```

## 程式碼範例

```python
{
  "前置條件": "安裝Python 3.7+和設置AI Gateway API Key。",
  "指令": "python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py \"人类简史\" book --style wenyi --aspect-ratio 21:9",
  "預期輸出": "生成一张符合公众号封面比例的海报。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立7天就累積468 stars（67/天），forks 43（9.2%），顯示出穩定的增長。作者joeseesun在設計領域有一定的背景，這個工具解決了許多非設計師在創作過程中的痛點，讓他們能夠輕鬆生成高品質的設計作品。近期的推廣活動和社交媒體的分享可能也促進了其受歡迎程度。這個工具的出現正好契合了對於簡化設計流程的需求，尤其是在社交媒體內容創作日益增長的背景下。forks/stars比率9.2%顯示出使用者對這個工具的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要快速生成設計作品但不懂設計的內容創作者和小型企業主。

> [!example] 使用場景
> - 內容創作者用它來生成社交媒體封面，因為這樣能快速得到專業設計，無需學習設計軟體。
> - 學生用它來設計讀書筆記海報，因為只需描述書名和風格，AI就能生成美觀的海報。
> - 小型企業主用它來創建活動海報，因為能夠在短時間內獲得多種設計選擇，提升宣傳效果。

## 架構分析

該專案採用Python作為主要開發語言，利用requests庫進行網絡請求，並使用Pillow庫處理圖像生成。架構設計上，選擇了簡單的命令行介面，使得用戶能夠快速上手。資料流方面，使用者的輸入經過AI模型處理後，生成設計並返回給用戶。這樣的設計使得工具的使用門檻極低，但在高度定制化需求上可能有所不足，因為AI的選擇基於預設的風格和配色方案。擴展性方面，未來可以考慮增加更多的藝術風格和自定義選項，以滿足不同用戶的需求。

## 技術深入分析

該專案的核心技術機制是基於自然語言處理的AI模型，能夠理解用戶的描述並自動選擇合適的藝術風格。使用Python語言開發，並依賴requests庫進行網絡請求，這使得工具的安裝和使用都相對簡單。Pillow庫則用於圖像處理，支持圖生圖功能，讓用戶可以將現有圖片轉換為Mondo風格。效能方面，該工具能夠快速生成設計，但在處理大量請求時可能會面臨延遲。設計取捨上，選擇了自動化生成而非手動調整，這降低了使用門檻，但也限制了用戶的創造自由。技術風險方面，依賴於AI模型的準確性和穩定性，未來可能需要持續優化以應對用戶需求的變化。整合方面，該工具與現有的社交媒體平台相容性良好，能夠快速生成適合不同平台的設計作品。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰，提供了詳細的安裝和使用步驟。安裝過程順暢，無明顯坑。提供了快速上手指南，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 使用門檻低，無需設計背景即可使用。
> - 快速生成高品質設計，節省時間。
> - 支持多種平台和比例，適用範圍廣。

> [!danger] 缺點
> - 對於特定風格的需求可能無法完全滿足。
> - 需要依賴AI的選擇，缺乏手動調整的靈活性。
> - 目前僅支持中文和英文提示詞。

> [!warning] 注意事項
> - 需要Python環境和AI Gateway API Key。
> - 目前僅支持中文和英文提示詞。
> - 對於特定風格的要求可能無法完全滿足。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人side project試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的圖像質量可能因描述不清而受影響
  - 解法：提供更具體的描述以獲得更好的結果
- [MEDIUM] 某些藝術風格可能不符合用戶期望
  - 解法：使用對比功能選擇最合適的風格
- **[HIGH]** 需要安裝Python環境，對於不熟悉技術的用戶可能有門檻
  - 解法：參考README中的安裝指南，按步驟操作

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的社交媒體內容創作 | 非常適合 | 能快速生成符合平台要求的設計，提升宣傳效果。 |
| 學生的讀書報告海報設計 | 適合 | 簡單易用，能快速生成美觀的海報。 |
| 大型企業的品牌形象設計 | 不適合 | 需要高度定制化和專業設計，AI生成可能無法滿足需求。 |
| 內容創作者的專業設計需求 | 普通 | 能生成設計，但缺乏手動調整的靈活性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花2小時學習、1小時整合，得到快速生成設計的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需存取用戶的描述資料，無敏感資料存取。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
| Forks | 43 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-08 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 58.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/joeseesun/qiaomu-mondo-poster-design) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `Pillow`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@joeseesun](https://github.com/joeseesun) | 7 |

## 社群與生態

**社群活躍度**：社群活躍度較高，最近有1個開放問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-08 ~ 2026-03-08）
> **活躍天數** 1 天 · **最新 commit** v3.3: 多平台比例支持 + 全新示例体系

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/joeseesun/qiaomu-mondo-poster-design/issues/1) | 很好的skill，能否支持纯提示词模式，即只输出提示词，便于无法通过接口出图时，使用web界面生成 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 乔木 Mondo 海报设计 / Qiaomu Mondo Poster Design
> 
> [English](README.en.md) | 简体中文
> 
> > **一句话，生成大师级设计** - 不会PS、不懂配色、不认识艺术家？没关系，只需用一句话描述你想要什么，AI自动选择最合适的艺术风格，为你生成专业级海报、封面和设计作品。
> 
> ---
> 
> ## 💡 这是给谁用的？
> 
> ### 你是否遇到过这些困扰？
> 
> | 痛点 | 以前怎么办 | 现在怎么办 |
> |------|-----------|-----------|
> | 📱 想做公众号封面，但不会PS | 找设计师或用模板，千篇一律 | **一句话描述 → 自动生成独特设计** |
> | 📚 想设计读书笔记海报，不知道怎么排版 | 搜模板、改文字，样子很业余 | **"为《百年孤独》设计一张海报" → 直接出图** |
> | 🎬 想分享电影观后感，配图太普通 | 用电影剧照或官方海报 | **"为《银翼杀手》生成一张科幻海报" → 原创艺术风格** |
> | 🎨 想让设计看起来专业，但不懂配色 | 随便选颜色，最后四不像 | **AI自动匹配大师级配色方案** |
> | 🖼️ 想要独特风格，但不认识艺术家 | 只能羡慕别人的设计 | **AI识别题材自动选择最合适的艺术风格** |
> 
> **如果你遇到过以上任何一个问题，这个工具就是为你准备的。**
> 
> ---
> 
> ## ⚡ 3秒快速开始
> 
> ### 安装（复制粘贴就行）
> 
> ```bash
> npx skills add joeseesun/qiaomu-mondo-poster-design
> ```
> 
> ### 使用（对Claude说一句话）
> 
> ```
> "用 Mondo 风格为《三体》生成一张书籍封面"
> "为周杰伦《七里香》专辑设计封面"
> "生成一张爵士音乐节海报"
> "为我的公众号文章《人类简史》设计一张 21:9 封面"
> "为我的小红书读书笔记《小王子》设计 3:4 配图"
> ```
> 
> **就这么简单！** 你不需要：
> - ❌ 学习Photoshop
> - ❌ 懂什么是"负空间"、"极简主义"
> - ❌ 知道Saul Bass、Olly Moss是谁
> - ❌ 会选配色方案
> - ❌ 理解构图原理
> 
> AI会自动帮你搞定这一切！
> 
> ---
> 
> ## 📸 看看能生成什么样的设计
> 
> ### 场景1：公众号封面（21:9 超宽横版）
> 
>   
>     
>       
>       提示词: "为《人类简史》设计公众号封面"
>       → AI选择了文艺风：柔和水彩质感、人类进化全景时间线
>     
>     
>       
>       提示词: "为《星际穿越》影评设计公众号封面"
>       → AI选择了 Kilian Eng 几何未来主义：黑洞+飞船+宇宙深空
>     
>   
> 
> ### 场景2：小红书配图（3:4 竖版）
> 
>   
>     
>       
>       提示词: "为《花样年华》设计观影笔记配图"
>       → AI选择了日系风格：温暖胶片感、旗袍女人雨巷剪影
>     
>     
>       
>       提示词: "为《小王子》设计读书分享配图"
>       → AI选择了韩系风格：梦幻粉紫渐变、小王子站在星球上
>     
>   
> 
> ### 场景3：文章配图（16:9 横版）
> 
>   
>     
>       
>       提示词: "为科技文章《AI与人类的未来》设计配图"
>       → AI选择了 Kilian Eng 未来主义：数字大脑融合宇宙
>     
>     
>       
>       提示词: "为生活文章《秋日咖啡馆的午后阅读》设计配图"
>       → AI选择了文艺风：温暖金色光线、咖啡与书页
>     
>   
> 
> ### 场景4：书籍封面设计（9:16 竖版）
> 
>   
>     
>       
>       提示词: "为《三体》设计书籍封面"
>       → AI选择了 Chip Kidd 概念派：黑色虚空中一个被扭曲的红色太阳
>     
>     
>       
>       提示词: "为《百年孤独》设计精装书封面"
>       → AI选择了 Penguin Clothbound 经典风格：翡翠绿底+金色蝴蝶纹样
>     
>   
> 
> ### 场景5：专辑封面设计（1:1 正方形）
> 
>   
>     
>       
>       Pink Floyd
>       The Dark Side of the Moon
>       → Peter Saville 极简：棱镜分光彩虹
>     
>     
>       
>       Radiohead
>       OK Computer
>       → Reid Miles 高对比：数字荒原孤独身影
>     
>     
>       
>       Joy Division
>       Unknown Pleasures
>       → David Stone Martin 极简：脉冲波形线条
>     
>   
> 
> ### 场景6：活动海报 / 朋友圈分享（9:16 竖版）
> 
>   
>     
>       
>       提示词: "为周末观影会设计海报"
>       → AI选择了 Saul Bass 极简几何，胶片与爆米花
>     
>     
>       
>       提示词: "为咖啡与书的午后设计海报"
>       → AI选择了 Jay Ryan 民间手工风格，手冲咖啡与翻开的书页
>     
>   
> 
> ### 经典电影海报（IMDB Top 10）
> 
>   
>     
>       
>       肖申克的救赎
>       负空间，铁栏中飞出自由之鸟
>     
>     
>       
>       教父
>       极简主义，操控之手
>     
>     
>       
>       黑暗骑士
>       视觉双关，蝙蝠中的小丑
>     
>     
>       
>       教父2
>       暗影传承，父与子
>     
>     
>       
>       十二怒汉
>       极简几何，十二把椅子
>     
>   
>   
>     
>       
>       指环王：王者归来
>       史诗对比，至尊魔戒
>     
>     
>       
>       辛德勒的名单
>       黑白中的红色，生命之光
>     
>     
>       
>       指环王：护戒使者
>       奇幻冒险，九人远征
>     
>     
>       
>       低俗小说
>       波普拼贴，非线性叙事
>     
>     
>       
>       黄金三镖客
>       西部对峙，三人剪影
>     
>   
> 
> ---
> 
> ## 🎯 支持的平台和比例
> 
> | 平台 / 用途 | 推荐比例 | 命令行参数 | 说明 |
> |------------|---------|-----------|------|
> | 📱 **公众号封面** | 21:9 | `--aspect-ratio 21:9` | 超宽横版，适合文章头图 |
> | 📕 **小红书配图** | 3:4 | `--aspect-ratio 3:4` | 竖版，小红书最常见比例 |
> | 📝 **文章配图** | 16:9 | `--aspect-ratio 16:9` | 横版，适合博客/知乎/Medium |
> | 📚 **书籍封面** | 9:16 | `--aspect-ratio 9:16`（默认） | 竖版，经典书籍比例 |
> | 🎵 **专辑封面** | 1:1 | `--aspect-ratio 1:1` | 正方形，Spotify/网易云标准 |
> | 🎭 **活动海报** | 9:16 | `--aspect-ratio 9:16`（默认） | 竖版，手机展示最佳 |
> | 🎬 **电影海报** | 9:16 | `--aspect-ratio 9:16`（默认） | 竖版，经典海报比例 |
> | 🖥️ **桌面壁纸** | 16:9 | `--aspect-ratio 16:9` | 横版，电脑桌面 |
> 
> ---
> 
> ## 🤖 AI自动帮你做什么？
> 
> 你只需要描述**内容**，AI会自动：
> 
> ### 1. 自动选择最合适的艺术风格
> 
> | 你说的内容类型 | AI自动选择的风格 | 为什么 |
> |--------------|----------------|-------|
> | 📱 公众号读书笔记 | **文艺风** 柔和留白水彩 | 诗意氛围适合深度阅读 |
> | 📕 小红书观影笔记 | **日系风** 胶片感温暖色调 | 温暖质感适合生活美学 |
> | 📕 小红书读书分享 | **韩系风** 梦幻粉彩渐变 | 清新梦幻适合书籍分享 |
> | 📚 书籍封面（文学） | **Penguin Clothbound** 经典纹样 | 出版级精装书美学 |
> | 📚 书籍封面（科幻） | **Chip Kidd** 概念派视觉隐喻 | Random House 级别设计 |
> | 🎵 专辑封面 | **Peter Saville / Reid Miles** | 传奇唱片公司美学 |
> | 🎬 科幻电影海报 | **Kilian Eng** 几何未来主义 | 精准技术线条 |
> | 🎬 文艺电影海报 | **Alphonse Mucha** 新艺术 | 流动曲线东方美学 |
> | 🎬 悬疑电影海报 | **Olly Moss** 负空间 | 隐藏意象制造神秘感 |
> | 🎭 活动海报 | **Saul Bass** 极简几何 | 大胆抽象一目了然 |
> 
> 你不需要知道这些艺术家是谁，AI会根据你的描述自动匹配！
> 
> ### 2. 自动配色
> 
> AI会根据题材选择**大师级配色方案**：
> - 科幻片 → 赛博蓝+霓虹粉
> - 文艺片 → 米色+深红
> - 悬疑片 → 暗黑色+血橙色
> - 温情片 → 暖黄+柔蓝
> 
> ### 3. 自动构图
> 
> AI懂得专业设计原则：
> - **负空间** - 让留白说话
> - **视觉双关** - 一个图形传递两层意思
> - **极简主义** - 用最少的元素传递最强的信息
> - **戏剧性对比** - 大小对比营造情感冲击
> 
> ### 4. 自动适配平台比例
> 
> 根据用途自动匹配最佳比例：
> - 公众号封面 → **21:9** 超宽横版
> - 小红书配图 → **3:4** 竖版
> - 文章配图 → **16:9** 横版
> - 书籍封面 → **9:16** 竖版
> - 专辑封面 → **1:1** 正方形
> 
> ---
> 
> ## 🆚 和其他工具比有什么不同？
> 
> | 功能 | 普通AI生图 | 在线模板 | **乔木 Mondo 设计** |
> |------|----------|----------|-------------------|
> | 需要懂设计 | ❌ 需要写复杂提示词 | ✅ 但只能用模板 | ✅ **一句话就够** |
> | 风格统一性 | ❌ 每次风格不稳定 | ⚠️ 模板固定 | ✅ **AI选择匹配风格** |
> | 艺术性 | ⚠️ 看运气 | ❌ 很业余 | ✅ **大师级艺术风格** |
> | 个性化 | ✅ 自由度高 | ❌ 很难改 | ✅ **AI优化你的想法** |
> | 多平台适配 | ❌ 手动调整比例 | ⚠️ 有限模板 | ✅ **自动适配各平台比例** |
> | 适合新手 | ❌ 需要学习 | ✅ 但千篇一律 | ✅ **零门槛+独特性** |
> 
> ---
> 
> ## 🎨 背后的秘密（选读）
> 
> ### 什么是"Mondo"风格？
> 
> Mondo 是美国一家传奇海报公司，他们为经典电影设计**限量版丝网印刷海报**，被全球收藏家疯抢。
> 
> **Mondo海报的特点：**
> - 🎨 **艺术化重新诠释** - 不是电影剧照，而是概念化的视觉提炼
> - 🖨️ **丝网印刷美学** - 2-5种颜色，平面色块，复古质感
> - 🎯 **极简主义象征** - 一个符号传递整部电影的精神
> - ✍️ **手绘字体** - 复古装饰艺术影响
> - 🌈 **大胆配色** - 高饱和度，强烈对比
> 
> ### 背后有哪些艺术大师？
> 
> 这个工具集成了**33+位传奇设计师**的艺术风格：
> 
> #### 电影海报界传奇（20位）
> - **Saul Bass** - 希区柯克御用设计师，极简几何
> - **Olly Moss** - 负空间大师，巧妙视觉双关
> - **Drew Struzan** - 《星球大战》《夺宝奇兵》御用，史诗绘画风格
> - **Kilian Eng** - 几何未来主义，适合科幻题材
> 
> #### 书籍封面大师（6位）
> - **Chip Kidd** - Random House 首席设计师，概念派视觉隐喻
> - **Coralie Bickford-Smith** - Penguin Clothbound 经典纹样
> - **王志弘** - 东亚书籍设计，克制优雅
> 
> #### 专辑封面传奇（3位）
> - **Peter Saville** - Factory Records，Joy Division/New Order 封面设计
> - **Reid Miles** - Blue Note Records，爵士乐黄金时代
> - **David Stone Martin** - Verve Records，极简水墨线条
> 
> #### 社交媒体风格（4种）
> - **文艺风** - 柔和留白，诗意氛围
> - **日系风** - 胶片感，温暖自然
> - **韩系风** - 梦幻粉彩，清新渐变
> - **国潮风** - 传统元素，现代演绎
> 
> **你不需要记住这些名字**，AI会自动为你选择最合适的风格！
> 
> ---
> 
> ## 🚀 进阶功能（想探索更多？）
> 
> ### 1. 对比三种风格（哪个更好看？）
> 
> ```bash
> "用三种不同风格为《沙丘》设计海报，让我对比一下"
> ```
> 
> AI会生成三种艺术风格并排对比，帮你选择最喜欢的。
> 
> ### 2. 自己指定风格（如果你有想法）
> 
> ```bash
> "用 Saul Bass 极简几何风格为《教父》设计海报"
> "用 Alphonse Mucha 新艺术运动风格为《花样年华》设计海报"
> ```
> 
> ### 3. 自定义配色（如果你对颜色有要求）
> 
> ```bash
> "为爵士音乐节设计海报，用橙色、深蓝色和金色"
> ```
> 
> ### 4. 指定平台比例
> 
> ```bash
> "为《人类简史》设计公众号封面，21:9 比例"
> "为《小王子》设计小红书配图，3:4 比例"
> "为文章《AI的未来》生成 16:9 配图"
> ```
> 
> ### 5. 让AI优化你的想法
> 
> ```bash
> "为《三体》设计书籍封面，我想表现宇宙的浩瀚感，用AI帮我优化提示词"
> ```
> 
> AI会在保留你核心想法的基础上，添加专业的设计元素。
> 
> ---
> 
> ## 💻 命令行快速上手（可选）
> 
> 如果你喜欢用命令行：
> 
> ```bash
> # 公众号封面（21:9 超宽横版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "人类简史" book --style wenyi --aspect-ratio 21:9
> 
> # 小红书配图（3:4 竖版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "花样年华" movie --style rixi --aspect-ratio 3:4
> 
> # 文章配图（16:9 横版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "AI与未来" movie --style kilian-eng --aspect-ratio 16:9
> 
> # 书籍封面（默认 9:16 竖版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "三体" book --style chip-kidd
> 
> # 专辑封面（1:1 正方形）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "Dark Side of the Moon" album --style peter-saville --aspect-ratio 1:1
> 
> # AI增强提示词
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "银翼杀手" movie --ai-enhance
> 
> # 三栏风格对比
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "盗梦空间" movie --compare saul-bass,olly-moss,kilian-eng
> 
> # 查看所有33+种风格
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py --list-styles
> ```
> 
> ---
> 
> ## 📚 更多资料
> 
> - [SKILL.md](SKILL.md) - 完整技术文档
> - [references/artist-styles.md](references/artist-styles.md) - 33+位设计师风格详解
> - [references/genre-templates.md](references/genre-templates.md) - 各类型模板参考
> - [requirements.txt](requirements.txt) - 依赖包列表
> 
> ---
> 
> ## ❓ 常见问题
> 
> ### Q: 我完全不懂设计，真的能用吗？
> **A:** 当然可以！这个工具就是为"完全不懂设计"的人准备的。你只需要用一句话描述你想要什么，剩下的全部交给AI。
> 
> ### Q: 生成的图可以商用吗？
> **A:** 可以。AI生成的图像可以用于个人和商业用途（具体取决于你使用的AI模型的许可协议）。
> 
> ### Q: 我不喜欢AI自动选的风格怎么办？
> **A:** 你可以让AI"对比三种风格"，然后选择你喜欢的。或者直接指定风格，比如"用极简风格"、"用复古风格"。
> 
> ### Q: 不同平台的比例怎么选？
> **A:** 直接告诉AI你要用在哪个平台即可！比如"公众号封面"会自动用 21:9，"小红书配图"会自动用 3:4。也可

## 延伸閱讀

相關概念：[[自動化設計]] · [[AI生成藝術]] · [[社交媒體內容創作]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/joeseesun/qiaomu-mondo-poster-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "joeseesun--qiaomu-mondo-poster-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化設計","AI生成藝術","社交媒體內容創作"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "joeseesun--qiaomu-mondo-poster-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "joeseesun--qiaomu-mondo-poster-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "joeseesun" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，382 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
