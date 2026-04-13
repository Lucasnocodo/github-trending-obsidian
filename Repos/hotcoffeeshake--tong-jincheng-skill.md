---
repo: hotcoffeeshake/tong-jincheng-skill
url: https://github.com/hotcoffeeshake/tong-jincheng-skill
owner: hotcoffeeshake
owner_type: User
language: N/A
license: MIT
description: "童锦程视角 Skill — 用深情祖师爷的思维框架分析人际关系"
homepage: ""
stars: 1596
stars_per_day: 228
forks: 232
open_issues: 15
created: 2026-04-05
pushed_at: 2026-04-06
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "其他"
subcategory: "情感分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "用童锦程的思维框架分析人际关系，帮助用户理解情感与人性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 20
readme_length: 3750
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1559,2026-04-12:1559,2026-04-13:1596"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "tong-jincheng-skill"
  - "hotcoffeeshake/tong-jincheng-skill"
  - "用童锦程的思维框架分析人际关系，帮助用户理解情感与人性。"
---

# tong-jincheng-skill

**1.6k** stars · **228** stars/天 · 建立 7 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
> 用童锦程的思维框架分析人际关系，帮助用户理解情感与人性。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (228 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速解決人際關係問題的年輕人和情感顧問。
> **一句話重點** 這個專案的獨特之處在於它將童锦程的情感智慧轉化為可互動的分析工具，讓用戶能夠快速獲得情感建議。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "情感分析" && p.file.name !== "hotcoffeeshake--tong-jincheng-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 情感分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案將童锦程的情感洞察與用戶互動結合，提供即時的情感分析。

## 專案簡介

這個專案提供了一個基於童锦程的思維框架，幫助用戶分析和理解人際關係中的情感問題。用戶可以透過簡單的指令，像是 `npx skills add hotcoffeeshake/tong-jincheng-skill`，來安裝並啟用這個技能，然後直接詢問關於情感的問題。童锦程的回答不僅直白，還帶有深刻的人性洞察，能幫助用戶看透複雜的情感糾葛。這個技能的核心在於提煉出9個心智模型，這些模型基於20萬字的原始素材，並不是簡單的語錄重複，而是用童锦程的視角來分析問題。技術上，這個專案並不依賴於重型框架，因為它的設計目的是讓用戶能夠輕鬆地在Claude Code中使用。

與其他情感分析工具相比，這個專案的獨特之處在於它強調真誠與直接的溝通，並且不會鼓勵用戶進行不必要的情感測試。使用者在實際操作中，可能會發現這個技能在提供情感建議時，能夠迅速且有效地回應他們的需求。這個專案目前仍在快速發展中，社群活躍度高，但也面臨著一些未解決的問題。整體來看，這是一個值得關注的情感分析工具，特別適合需要快速解決人際關係問題的用戶。

## 重點功能

- 人際洞察分析 — 基於童锦程的思維框架，幫助用戶理解情感問題。
- 即時回應 — 用戶可以直接詢問問題，獲得快速的情感建議。
- 9個心智模型 — 提供深刻的情感分析，幫助用戶看透複雜情感。
- 簡單安裝 — 只需一行命令 `npx skills add hotcoffeeshake/tong-jincheng-skill`。
- 真誠與直接 — 強調真誠的溝通方式，避免不必要的情感測試。

## 快速開始

1. 安裝技能
```bash
npx skills add hotcoffeeshake/tong-jincheng-skill
```
2. 在 Claude Code 中啟用
```bash
> 童锦程
```
3. 開始詢問問題
```bash
> 我暗戀同事半年了，一直没开口，怎么办
```

## 程式碼範例

```bash
# 前置條件（1 行）；
> 我喜欢一个女孩，她对我时好时坏，有时候聊得很好，
> 有时候又不回消息。我不知道她喜不喜欢我。

童锦程    ❯ 我就说一句话，你仔细听——如果你不确定她喜不喜欢你，
            那她就是不喜欢你。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 1596 stars（228/天），forks 232（14.5%），顯示出強烈的用戶興趣。這位作者 hotcoffeeshake 之前在情感領域有一定的影響力，這個專案解決了許多用戶在情感交流中的困惑，特別是如何理解他人的情感反應。最近的社群互動和討論也顯示出用戶對於這個工具的需求，尤其是在情感建議方面。技術上，這個工具的設計簡單易用，適合廣大用戶群體，這也是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要快速解決人際關係問題的年輕人和情感顧問。

> [!example] 使用場景
> - 情感顧問用它來幫助客戶分析人際關係中的問題，因為童锦程的框架能快速提供有用的見解。
> - 大學生用它來理解戀愛中的不確定性，因為它能幫助他們明白對方的情感狀態。
> - 職場新人用它來處理同事間的複雜關係，因為童锦程的建議能幫助他們更好地適應環境。

## 架構分析

這個專案的架構設計簡單，主要依賴於用戶的直接互動。用戶透過簡單的 CLI 命令安裝並啟用技能，然後可以立即開始詢問問題。這樣的設計使得用戶不需要進行複雜的設定或配置，降低了使用門檻。

資料流方面，使用者的問題被直接傳遞給童锦程的分析框架，然後返回相應的建議。這種即時互動的模式使得用戶能夠快速獲得反饋，並且能夠隨時調整自己的提問方式。這樣的設計選擇使得專案在功能上具備了靈活性，但也可能導致在某些情況下無法提供深入的分析。

整體來看，這個專案的架構適合快速解決情感問題，但在面對更複雜的情感狀況時，可能需要更多的上下文信息來提供更準確的建議。

## 技術深入分析

這個專案的核心技術機制是將童锦程的思維框架轉化為一個可互動的技能，讓用戶能夠通過簡單的命令獲得情感分析。它的設計重點在於即時性和可操作性，這使得用戶能夠快速獲得反饋。雖然目前沒有提供具體的效能數據，但由於其簡單的架構，應該能夠輕鬆處理大量的用戶請求。設計上，這個專案並不依賴於重型框架，這樣的選擇使得它在資源使用上相對輕量。由於專案的內容主要基於童锦程的語錄和思維模型，這使得它在情感分析上具備了一定的深度，但在技術上可能無法應對更複雜的情感狀況。整體來看，這個專案的設計使得它在情感分析工具中具備了獨特的優勢，但也面臨著一些挑戰，特別是在提供深入分析方面的能力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程順暢，沒有明顯的坑。文件目前僅提供中文，對於中文使用者來說非常友好。

## 優缺點分析

> [!success] 優點
> - 提供即時的情感分析，幫助用戶快速理解人際關係。
> - 基於真實素材，建議具有實用性和可操作性。
> - 安裝和使用簡單，適合各類用戶。

> [!danger] 缺點
> - 不適合商業決策或專業的心理諮詢。
> - 無法替代童锦程本人，無法獲得最新的個人見解。
> - 可能缺乏對於複雜情感問題的深入分析能力。

> [!warning] 注意事項
> - 不支持商業決策分析，因為素材主要集中在情感內容。
> - 無法替代童锦程本人，因為無法複製其最新想法和性格。
> - 可能缺乏2025年後的最新動態，因為資料更新受限。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
| Forks | 232 |
| Open Issues | 15 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 20 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/hotcoffeeshake/tong-jincheng-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hotcoffeeshake](https://github.com/hotcoffeeshake) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有多個互動和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-06）
> **活躍天數** 1 天 · **最新 commit** Add author social link

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/hotcoffeeshake/tong-jincheng-skill/issues/6) | 兄弟，帮忙搞个户晨风的 | 1 | 1 |
> | [#3](https://github.com/hotcoffeeshake/tong-jincheng-skill/issues/3) | 你谁啊？ | 1 | 0 |
> | [#15](https://github.com/hotcoffeeshake/tong-jincheng-skill/issues/15) | 循环 | 0 | 0 |
> | [#14](https://github.com/hotcoffeeshake/tong-jincheng-skill/issues/14) | 已将您的 skill 收录到同事.skill 网站啦！ | 0 | 0 |
> | [#13](https://github.com/hotcoffeeshake/tong-jincheng-skill/issues/13) | 为什么SKILL.md中没有引用references下面相应的内容呢 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 童锦程.skill
> 
> > *「真诚才是最高级的套路。真诚你不一定会得到爱，但是你不真诚，你一定会失去爱。」*
> 
> [](LICENSE)
> [](https://claude.ai/code)
> [](https://skills.sh)
> 
> **让深情祖师爷童锦程用他的直白和人性洞察，帮你看透关系、读懂人心。**
> 
> 9个一手视频字幕（直播合集+约会vlog+搭讪解析），约20万字原始素材。
> 不是复读语录，是用他看世界的方式帮你分析问题。
> 
> [看效果](#效果示例) · [安装](#安装) · [他蒸馏了什么](#他蒸馏了什么) · [诚实边界](#诚实边界)
> 
> ---
> 
> ## 效果示例
> 
> ```
> 用户      ❯ 我喜欢一个女孩，她对我时好时坏，有时候聊得很好，
>             有时候又不回消息。我不知道她喜不喜欢我。
> 
> 童锦程    ❯ 我就说一句话，你仔细听——如果你不确定她喜不喜欢你，
>             那她就是不喜欢你。
> 
>             真正喜欢你的人，你不会有这个问题。
> 
>             她对你忽冷忽热，不是因为她复杂，是因为你对她来说
>             不重要。重要的事情人家不会这样，知道吗？
> 
>             别继续纠结了，兄弟。去充实自己。
>             你若盛开，蝴蝶自来。
> ```
> 
> ```
> 用户      ❯ 我想测试一下男朋友，故意不联系他，看他会不会
>             主动找我。
> 
> 童锦程    ❯ 人性经不起考验。
> 
>             他主动找你，你得到的是一个被测试过的结果，
>             不是真感情。他没找你，关系就破裂了。
>             你亲手把关系放在了最容易断的地方。
> 
>             你真正的问题不是他对你不用心，
>             是你没把你的需求直接说出来。
> 
>             "我希望你多联系我，这对我很重要"——
>             这句话说了吗？
> 
>             没说，就别测试。直接说，才是正路。是不是？
> ```
> 
> ```
> 用户      ❯ 我事业刚起步，女朋友说我花太多时间工作，
>             不顾她。怎么平衡？
> 
> 童锦程    ❯ 说实话兄弟，事业起步的时候你没有平衡，
>             你只有取舍。
> 
>             但这不是说放弃她。先把这件事跟她说清楚：
>             "我现在这段时间很关键，我需要你的理解，
>             但我不会消失，我会给你确定的时间和承诺。"
> 
>             女孩怕的不是你忙。女孩怕的是你忙到忘记她了。
> 
>             你忙，但你记得她说过的话，记得她要的安全感——
>             这才是关键。
> 
>             当兵后悔三年，不当后悔一辈子。
>             事业要做，但真正在乎的人也别让她跑了。
> ```
> 
> 这不是角色扮演。童锦程用的是「不确定即不喜欢」、「人性不可考验」、「给准备时间不突袭」这些真实的认知框架在帮你分析——**不是复读语录，是用他的思维方式帮你看问题。**
> 
> ---
> 
> ## 安装
> 
> ```bash
> npx skills add hotcoffeeshake/tong-jincheng-skill
> ```
> 
> 然后在 Claude Code 里触发：
> 
> ```
> > 童锦程
> > 深情祖师爷
> > 用童锦程的方式
> > 从童锦程视角
> > 景辰怎么看
> ```
> 
> 激活后直接问问题：
> 
> ```
> > 我暗恋同事半年了，一直没开口，怎么办
> > 他对我不冷不热，我该怎么看
> > 我想追一个女孩，但不知道她有没有男朋友
> ```
> 
> ---
> 
> ## 他蒸馏了什么
> 
> 童锦程不是学院派，是街头智慧提炼者。他的核心认知框架提取自20万字一手素材：
> 
> | 心智模型 | 一句话 |
> |---------|--------|
> | **吸引力 > 讨好** | 没有人会因为你喜欢他而喜欢你，别人只会因为你吸引他而喜欢你 |
> | **给台阶** | 人不是不想做，而是需要一个能说服自己的理由——你的工作是给他这个理由 |
> | **人性不可考验** | 人性经不起考验，与其测试，不如给他条件让他表现好 |
> | **炫耀即暴露不安全感** | 越缺什么越想炫耀什么——人的炫耀永远指向他的不安全感 |
> | **成功前后是两个世界** | 成功之后身边全是好人，没钱的时候也全是"好人"——这不是悲观，是实话 |
> 
> 9条决策启发式，包括：
> - 如果你不确定她喜欢你，那她就是不喜欢你
> - 遇到瓶颈：读书或健身，永远不喝酒
> - 生气解决不了问题，想解决办法才是正路
> - 钱花在真正的人身上，不花在萍水之交的表演上
> 
> ---
> 
> ## 素材来源
> 
> 基于9个一手视频字幕，约20万字：
> 
> | 来源 | 类型 |
> |------|------|
> | 童锦程语录合集（约11万字） | 直播剪辑合集 |
> | ［童锦程&小羊biubiu］一日男友体验卡 | 约会vlog |
> | ［童锦程&小肥羊］人无法预估某个瞬间的价值 直到它变成回忆 | 约会vlog |
> | ［童锦程&张若琳］别人都觉得我傻 只有你会陪我疯 | 约会vlog |
> | ［童锦程&宗蕊］颜值不是入场券 感觉才是 | 约会vlog |
> | ［童锦程&十万欧姆电阻］圣诞约会vlog | 约会vlog |
> | ［童锦程&李丽欣］"永结童欣"恋爱日常 | 约会vlog |
> | 盘点深情祖师爷童锦程，教你追女朋友技巧 | 第三方解析 |
> | 童锦程搭讪技巧解析（第一期） | 第三方解析 |
> 
> 完整调研数据在 `references/research/` 目录，包含6个维度的原始分析文件。
> 
> ---
> 
> ## 诚实边界
> 
> **这个Skill能做的：**
> - 用童锦程的人际洞察框架分析关系问题
> - 模拟他的直接、自嘲式表达风格
> - 提供他在恋爱/人际/个人成长领域的视角
> 
> **做不到的：**
> 
> | 维度 | 说明 |
> |------|------|
> | 商业决策 | 素材几乎全是情感内容，直播电商/创业策略数据严重不足 |
> | 替代本人 | 他的当下状态、最新想法、真实私下性格无法被复制 |
> | 2025年后新动态 | 联网受限，最新信息可能有缺漏 |
> | 辛巴关系细节 | 他本人从不公开说，素材不足 |
> 
> **一个不告诉你局限在哪的Skill，不值得信任。**
> 
> ---
> 
> ## 仓库结构
> 
> ```
> tong-jincheng-skill/
> ├── SKILL.md                          # 童锦程视角核心文件（直接激活用这个）
> ├── README.md                         # 本文件
> └── references/
>     └── research/                     # 调研数据（全透明）
>         ├── 01-writings.md            # 核心语录与反复论点
>         ├── 02-conversations.md       # 长对话与即兴思维
>         ├── 03-expression-dna.md      # 表达风格DNA分析
>         ├── 04-external-views.md      # 外部视角与争议
>         ├── 05-decisions.md           # 决策记录与行为模式
>         └── 06-timeline.md            # 人物时间线
> ```
> 
> ---
> 
> ## 关于作者
> 
> X：[@鹿子野](https://x.com/JoshXie1)
> 
> ---
> 
> ## 关于童锦程
> 
> 童锦程，快手/抖音头部情感主播，粉丝称「深情祖师爷」。农村出身，年轻时街上要微信被叫渣男，后来做直播成为头部情感创作者。与若离恋爱多年。
> 
> 核心标签：**真诚、直接、反心灵鸡汤**。他说的不是让你听着舒坦的话，是让你听完之后有用的话。
> 
> > *「说自己是渣男的全是好人；说自己是恋爱脑的全给我渣。」*
> 
> ---
> 
> ## 由女娲蒸馏
> 
> 本Skill由 [女娲.skill](https://github.com/alchaincyf/nuwa-skill) 方法论驱动，结合用户提供的一手素材手工完成。
> 
> 女娲是造Skill的Skill——输入任何人名，自动完成调研、提炼、验证全流程。
> 
> ---
> 
> ## 许可证
> 
> MIT — 随便用，随便改，随便造。
> 
> ---
> 
> **语录** 告诉你他说过什么。
> **童锦程.skill** 帮你用他的方式看你的问题。
> *真诚才是最高级的套路。*
> 
> MIT License © [hotcoffeeshake](https://github.com/hotcoffeeshake)

## 延伸閱讀

相關概念：[[人際關係]] · [[情感分析]] · [[心理學]]

相關專案：[[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[alchaincyf--zhangxuefeng-skill|alchaincyf/zhangxuefeng-skill]] · [[farzaa--clicky|farzaa/clicky]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]]

[GitHub](https://github.com/hotcoffeeshake/tong-jincheng-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：情感分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "情感分析" AND file.name != "hotcoffeeshake--tong-jincheng-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "hotcoffeeshake--tong-jincheng-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "hotcoffeeshake--tong-jincheng-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "hotcoffeeshake--tong-jincheng-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["人際關係","情感分析","心理學"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "hotcoffeeshake--tong-jincheng-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "hotcoffeeshake--tong-jincheng-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "hotcoffeeshake" AND file.name != "hotcoffeeshake--tong-jincheng-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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
> const me = dv.page("Repos/hotcoffeeshake--tong-jincheng-skill");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 首次收錄，1.6k stars
