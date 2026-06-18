---
repo: joeseesun/qiaomu-goal-meta-skill
url: https://github.com/joeseesun/qiaomu-goal-meta-skill
owner: joeseesun
owner_type: User
language: Python
license: MIT
description: "Turn vague or complex Codex tasks into strong `/goal` commands with outcome, verification, constraints, boundaries, iteration policy, completion evide"
homepage: ""
stars: 648
stars_per_day: 108
forks: 47
open_issues: 2
created: 2026-06-11
pushed_at: 2026-06-11
first_seen: 2026-06-18
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-18
use_case: "將模糊或複雜的 Codex 任務轉化為強大的 `/goal` 命令，包含結果、驗證、約束、邊界、迭代策略和完成證據。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-25"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 52
readme_length: 5737
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-18"
star_history: "2026-06-18:648"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "qiaomu-goal-meta-skill"
  - "joeseesun/qiaomu-goal-meta-skill"
  - "將模糊或複雜的 Codex 任務轉化為強大的 `/goal` 命令，包含結果、驗證、約束、邊界、迭代策略和完成證據。"
---

# qiaomu-goal-meta-skill

**648** stars · **108** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
> 將模糊或複雜的 Codex 任務轉化為強大的 `/goal` 命令，包含結果、驗證、約束、邊界、迭代策略和完成證據。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (108 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望將模糊需求轉化為具體可執行任務的開發者和團隊。
> **一句話重點** 這個專案最厲害的不是功能，而是它證明了如何將模糊需求轉化為具體可執行的任務，從而提高 AI agent 的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "joeseesun--qiaomu-goal-meta-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到明確的任務執行框架，值得嘗試。

> [!abstract] 核心創新
> qiaomu-goal-meta-skill 將模糊需求轉化為具體的 Codex `/goal` 命令，並提供詳細的驗證和約束條件。

## 專案簡介

qiaomu-goal-meta-skill 的核心機制是將模糊的需求轉化為可直接執行的 Codex `/goal` 命令，這個過程包括提供明確的驗證標準、約束條件、邊界設定、迭代策略和完成條件。使用者只需輸入模糊的需求，工具會自動生成一段可複製的命令，並附上簡短的理由，讓使用者了解選擇的依據。這樣的設計使得 Codex 在執行任務前能夠獲得更清晰的指導，避免因為需求不明確而導致的失敗。技術上，這個工具使用 Python 實現，並依賴 Node.js 和 npx 來安裝和執行，這樣的選擇使得它能夠輕鬆集成到現有的開發環境中。與其他類似工具相比，如 0xGF/boneyard 和 0x0funky/agent-sprite-forge，qiaomu-goal-meta-skill 提供了更具體的執行框架和驗證機制，特別適合需要清晰目標的複雜任務。

實際使用中，這個工具能夠處理多種需求，包括網站、應用程式和遊戲的開發，並且能夠針對特定的需求進行調整。使用者可能會遇到的問題包括安裝環境的配置和對於模糊需求的理解，這些都需要在使用前進行確認。這個專案目前處於初始階段，適合對 Codex 進行深入探索的開發者，未來可能會隨著社群的反饋而進一步完善。總的來說，這是一個值得嘗試的工具，特別是對於那些希望提高 Codex 執行效率的開發者。

**技術棧**：`Python` · `Node.js`

## 重點功能

- 自動生成 `/goal` 命令 — 將模糊需求轉化為可執行的命令，包含驗證、約束和邊界。
- 提供可選調整 — 用戶可以選擇不同的項目形態、畫面形式和驗證方式，靈活應對需求變化。
- 內置質量檢查 — 使用輕量 linter 檢查生成的目標命令，確保其可執行性和完整性。
- 支持多語言 — 提供英文兼容鏡像，方便在多語言環境中使用。
- 明確的迭代策略 — 提供針對任務的具體迭代和完成條件，幫助用戶有效管理開發流程。

## 快速開始

1. 安裝 qiaomu-goal-meta-skill
```bash
npx skills add joeseesun/qiaomu-goal-meta-skill
```
2. 確認安裝成功
```bash
test -f ~/.agents/skills/qiaomu-goal-meta-skill/SKILL.md
```
3. 使用範例命令生成目標
```bash
用 qiaomu-goal-meta-skill 幫我把這個需求寫成 Codex /goal。
```

## 程式碼範例

```python
# 前置條件
npx skills add joeseesun/qiaomu-goal-meta-skill
# 預期輸出
推荐执行版（中文，可直接复制）
/goal 开发一个第一版原创 GTA-like 网页游戏 MVP，用户可以在浏览器中进入一个俯视 2D 城市场景，控制角色步行、上车驾驶、完成一个简单任务，并看到基础状态反馈。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 648 stars（108/天），forks 47（7.3%），顯示出穩定的增長潛力。作者 joeseesun 在開源社群中活躍，這個工具解決了 Codex 在處理模糊需求時的痛點，之前的解決方案往往缺乏明確的執行框架和驗證標準。這個工具的推出正好填補了這一空白，並且在社群中引起了討論和關注。技術上，隨著對 AI agent 的需求增加，這個工具的實用性也隨之提升，特別是在複雜任務的自動化方面。forks/stars 比率為 7.3%，顯示出使用者對這個工具的實際修改和使用意願。

## 適合誰使用

**目標受眾**：希望將模糊需求轉化為具體可執行任務的開發者和團隊。

> [!example] 使用場景
> - 前端工程師用它來將模糊的 App 開發需求轉化為可執行的 Codex `/goal`，因為這樣能夠避免因需求不明確而導致的開發失敗。
> - 產品經理用它來設計一個新的 UI 原型，因為它能夠提供清晰的驗證標準和約束條件，讓開發團隊更容易理解需求。
> - 遊戲開發者用它來生成一個 GTA 類型的網頁遊戲的開發目標，因為它能夠自動生成符合版權要求的執行計劃。

## 架構分析

qiaomu-goal-meta-skill 採用簡單的架構，主要由 Python 實現，並透過 Node.js 和 npx 進行安裝和執行。這樣的設計使得它能夠快速集成到現有的開發環境中。資料流方面，使用者的模糊需求經過工具的處理後，生成具體的 `/goal` 命令，並附上驗證和約束條件。

這樣的選擇使得工具能夠在保持靈活性的同時，提供清晰的執行框架。選擇 Python 作為開發語言的好處在於其簡潔性和廣泛的社群支持，但可能在性能上不如某些編譯型語言。整體而言，這個工具的架構設計旨在降低使用門檻，並提高 Codex 的執行效率。

## 技術深入分析

qiaomu-goal-meta-skill 的核心技術機制是將模糊的需求轉化為具體的 Codex `/goal` 命令，這一過程涉及多個步驟，包括選擇保守的默認值、生成推薦執行版、補充驗證和約束條件等。這個工具使用 Python 作為開發語言，並依賴 Node.js 進行安裝和執行，這使得它能夠快速集成到現有的開發環境中。從效能上看，這個工具的設計旨在降低使用門檻，並提高 Codex 的執行效率，特別是在處理複雜任務時。選擇 Python 的好處在於其簡潔性和廣泛的社群支持，但可能在性能上不如某些編譯型語言。設計取捨方面，這個工具選擇了簡化使用流程，從而犧牲了一些靈活性，這在處理特定需求時可能會成為瓶頸。技術風險方面，這個工具在處理陌生領域的需求時可能會遇到挑戰，特別是在涉及法律、醫療或金融等專業領域時。整合分析方面，這個工具能夠與主流的開發框架良好整合，但在特定情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要確認 Node.js 和 npx 的環境配置。文件中有多語言支持，對於中文用戶友好，能夠降低使用門檻。

## 優缺點分析

> [!success] 優點
> - 能夠將模糊需求轉化為具體的執行命令，避免開發過程中的不確定性。
> - 提供詳細的驗證和約束條件，幫助使用者更好地管理開發流程。
> - 支持多語言，方便在不同語言環境中使用。

> [!danger] 缺點
> - 僅支援 Node.js 和 npx 環境，對於其他開發環境的兼容性較差。
> - 不適合簡單的翻譯或改寫任務，主要針對複雜需求。
> - 需要用戶提供明確的模糊需求，否則生成的目標可能不符合預期。

> [!warning] 注意事項
> - 僅支援 Node.js 和 npx 環境，無法在其他環境中運行。
> - 不適合簡單的翻譯或改寫任務，主要針對複雜需求。
> - 需要用戶提供明確的模糊需求，否則生成的目標可能不符合預期。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一些自動化工具，但缺乏 qiaomu-goal-meta-skill 的具體驗證和約束機制，適合簡單任務的自動化。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 專注於遊戲開發，但不提供針對模糊需求的具體轉化功能，適合已有明確需求的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一些自動化工具，但缺乏 qiaomu-goal-meta-skill 的具體驗證和約束機制，適合簡單任務的自動化。 | 如果你的需求較為簡單，且不需要具體的驗證和約束條件，boneyard 可能更合適。 | low，因為兩者的使用方式相似，且都能處理自動化任務。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 專注於遊戲開發，但不提供針對模糊需求的具體轉化功能，適合已有明確需求的開發者。 | 如果你的團隊已經在進行遊戲開發，且需求已經明確，agent-sprite-forge 可能更適合。 | medium，因為需要調整開發流程以適應 agent-sprite-forge 的特定功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **qiaomu-goal-meta-skill** | **boneyard** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 提供了一些自動化工具，但缺乏 qiaomu-goal-meta-skill 的具體驗證和約束機制，適合簡單任務的自動化。 | agent-sprite-forge 專注於遊戲開發，但不提供針對模糊需求的具體轉化功能，適合已有明確需求的開發者。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似，且都能處理自動化任務。 | medium，因為需要調整開發流程以適應 agent-sprite-forge 的特定功能。 |
> | 適用場景 | 主要場景 | 如果你的需求較為簡單，且不需要具體的驗證和約束條件，bone | 如果你的團隊已經在進行遊戲開發，且需求已經明確，agent- |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝後未能正確加載 skill，可能是環境配置問題。
  - 解法：確認 Node.js 和 npx 的安裝，並檢查安裝路徑。
- [MEDIUM] 生成的目標命令中包含占位符，無法直接執行。
  - 解法：要求工具生成可直接複製的版本，避免使用占位符。
- [MEDIUM] 對於模糊需求的理解不夠準確，生成的命令不符合預期。
  - 解法：提供更具體的需求描述，幫助工具生成更準確的目標命令。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創團隊開發一個 MVP 應用 | 非常適合 | 能夠快速將模糊需求轉化為具體的開發目標，降低開發風險。 |
| 大型企業進行複雜的產品開發 | 普通 | 雖然能提供幫助，但可能需要更多的自定義和調整以符合企業需求。 |
| 個人開發者進行小型專案 | 適合 | 能夠快速生成目標，幫助個人開發者集中精力於核心功能。 |
| 需要簡單翻譯或改寫的任務 | 不適合 | 這個工具主要針對複雜需求，不適合處理簡單的文本轉換。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到明確的任務執行框架，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度較高，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
| Forks | 47 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-11 |
| 建立日期 | 2026-06-11 |
| Repo 大小 | 52 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/joeseesun/qiaomu-goal-meta-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@joeseesun](https://github.com/joeseesun) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開發者在 GitHub 上有定期更新。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-11）
> **活躍天數** 1 天 · **最新 commit** Initial release: qiaomu-goal-meta-skill

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/joeseesun/qiaomu-goal-meta-skill/issues/2) | English Version? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # qiaomu-goal-meta-skill
> 
> > 你只想说一句“帮我做个 App”，但 Codex 真正需要的是一个能执行、能验证、知道边界、知道何时停下来的目标。
> > qiaomu-goal-meta-skill turns vague work into a copy-ready Codex `/goal` command with defaults, verification, boundaries, and pause conditions.
> 
>   
>   
>   
>   
>   
> 
> **中文** | [English](#english)
> 
> ```bash
> npx skills add joeseesun/qiaomu-goal-meta-skill
> ```
> 
> ## 为什么值得用
> 
> 很多 agent 任务失败，不是因为模型不会写代码。
> 
> 而是因为目标一开始就太松：
> 
> - “做得高级一点”
> - “帮我开发一个 App”
> - “修一下这个问题”
> - “做个类似 GTA 的网页游戏”
> 
> 这些话对人类有感觉，对 agent 却缺少几个关键东西：怎么验证、哪里不能碰、失败后怎么迭代、什么时候必须暂停。
> 
> 这个 skill 的目标很简单：
> 
> 让 Codex 在开工前拿到一份更像“任务合同”的 `/goal`。
> 
> 它会默认给你一段可直接复制的推荐执行版，而不是让你先填表。
> 
> ## 它会怎么帮你
> 
> ### 1. 先给可直接复制的推荐版
> 
> 中文用户默认先看到：
> 
> ```text
> 推荐执行版（中文，可直接复制）
> /goal 开发一个第一版原创 GTA-like 网页游戏 MVP，用户可以在浏览器中进入一个俯视 2D 城市场景，控制角色步行、上车驾驶、完成一个简单任务，并看到基础状态反馈。
> 验证：如果已有项目，先读取项目脚本和运行方式；否则新建最小网页游戏项目，启动本地开发服务，在浏览器中完整走通一次进入游戏、移动角色、上车驾驶、触发任务、完成任务、查看状态反馈流程，并检查桌面和移动端布局与控制区无重叠。
> 约束：不使用 GTA、Rockstar 或任何真实游戏的名称、Logo、角色、地图、音乐、音效、美术素材或受版权保护内容；第一版不加入登录、后端、联机、付费 API、真实暴力血腥表现、复杂 AI 或营销落地页。
> 边界：如果新建项目，只写入新项目目录；如果在现有项目中工作，只修改与网页游戏画布、输入控制、游戏状态、样式和直接相关测试有关的文件。
> 迭代策略：先实现可玩的核心循环，再补任务、状态反馈和响应式控制；每次有意义改动后重跑项目检查并启动本地服务验证，遇到运行时或浏览器错误先读控制台日志；最多做 3 轮聚焦体验改进。
> 完成条件：本地游戏可运行，玩家能完成移动、驾驶、任务触发和任务完成的核心流程，项目检查通过或明确说明缺少配置，并且桌面和移动端验证无布局破损。
> 暂停条件：需要使用 GTA 官方 IP 或素材、真实版权素材授权、联机服务器、账号系统、支付、上架发布、复杂 3D 开放世界、真实暴力血腥表现或更完整游戏策划时暂停。
> ```
> 
> 用户可以直接复制这一段执行。
> 
> ### 2. 再给一句默认理由
> 
> ```text
> 默认选择理由：先做原创俯视 2D MVP，因为它能最快验证“城市移动、驾驶、任务”核心乐趣，同时避开版权和 3D 开放世界的高成本。
> ```
> 
> 这句理由很短，但能让你知道 skill 为什么这么选。
> 
> ### 3. 给懒人选择题
> 
> ```text
> 可选调整
> 1. 项目形态：A 新建本地网页游戏 MVP（默认） / B 改现有项目 / C 先做可交互原型
> 2. 画面形式：A 俯视 2D（默认） / B 像素风 2D / C Three.js 3D
> 3. 第一版范围：A 步行+驾驶+一个任务（默认） / B 加警戒/追逐系统 / C 加多任务和商店
> 4. 验证方式：A 本地浏览器桌面+移动检查（默认） / B 加自动化测试 / C 部署后线上验证
> 
> 你可以直接回复：按默认，或回复类似 1A 2B 3B 4A。
> ```
> 
> 不用写长句，回选项就能继续收敛。
> 
> ### 4. 同时给英文兼容镜像
> 
> 英文版字段保留 `Verification`、`Constraints`、`Boundaries`、`Iteration policy`、`Stop when`、`Pause if`，方便复制到偏英文的 agent 环境或团队文档。
> 
> ## 什么时候用
> 
> 适合：
> 
> - 开发一个网站、App、游戏、Chrome 插件、自动化脚本
> - 修 bug、做重构、加测试、跑发布
> - 设计一个 UI 或产品原型
> - 创建、整理、发布 agent skill
> - 做多步骤研究或文档交付
> - 把一句模糊需求变成可执行任务
> 
> 不适合：
> 
> - 一句话翻译
> - 简单改写
> - 一行 shell 输出
> - 不需要持续执行和验证的小任务
> 
> ## 安装
> 
> ```bash
> npx skills add joeseesun/qiaomu-goal-meta-skill
> ```
> 
> 安装后确认：
> 
> ```bash
> test -f ~/.agents/skills/qiaomu-goal-meta-skill/SKILL.md
> ```
> 
> ## 你可以这样说
> 
> - “用 qiaomu-goal-meta-skill 帮我把这个需求写成 Codex /goal。”
> - “我要开发一个 iOS 提词器，帮我写 goal。”
> - “我要做一个 GTA 网页游戏，帮我写一个安全可执行的 goal。”
> - “这个任务太模糊，先给推荐执行版，再给我几个可选调整。”
> - “帮我把修 bug 的任务写成带验证和暂停条件的 goal。”
> - “给这个发布任务写一个不能直接乱推主分支的 goal。”
> - “这个是医疗/金融/版权相关任务，帮我写发现优先的 goal。”
> 
> ## 工作方式
> 
> ```mermaid
> flowchart LR
>   A["用户的模糊需求"] --> B["选择保守默认值"]
>   B --> C["生成推荐执行版 /goal"]
>   C --> D["补验证、约束、边界"]
>   D --> E["补迭代、完成、暂停条件"]
>   E --> F["给编号可选调整"]
>   F --> G["给英文兼容镜像"]
> ```
> 
> ## 内置原则
> 
> ### 默认先推进
> 
> 低风险不确定性，不拦用户填表。
> 
> 它会做明确假设，给最佳默认方案。
> 
> ### 高风险才暂停
> 
> 遇到这些情况会写进 `暂停条件`：
> 
> - 凭证、账号、支付
> - 生产数据、破坏性操作
> - 法律、医疗、金融判断
> - 版权素材、官方授权
> - 上架发布、真实部署
> - 所有权或产品方向不清
> 
> ### 陌生领域先发现
> 
> meta skill 不假装懂所有专业领域。
> 
> 如果任务涉及医疗、金融、合规、复杂专业数据，它会生成“发现优先”的 goal：
> 
> ```text
> /goal 创建一个安全的医疗影像标注工具第一版，先读取工作区内的项目文档、样例数据说明和可用脚本，再实现最小可验证标注流程。
> 验证：识别并读取项目文档、样例数据说明、现有脚本或官方参考资料；运行最小相关检查；用样例数据完整走通一次导入、标注、保存、重新打开流程，并以日志、截图或导出文件作为证据。
> 约束：不编造医学结论、合规声明、数据语义或诊断用途；不处理生产患者数据；不改变未理解的数据格式。
> 边界：只修改第一版标注流程直接需要的界面、状态和样例数据处理文件；不触碰生产配置、凭证或无关模块。
> 迭代策略：先完成发现阶段并列出工作假设，再实现一个聚焦切片；每次失败后基于日志或文档调整，最多做 3 轮聚焦改进。
> 完成条件：样例数据下的最小标注流程有运行证据证明可用，检查通过或明确说明缺少配置，未解决的领域问题被列出。
> 暂停条件：需要医疗判断、合规审批、真实患者数据、外部付费服务、生产部署或破坏性数据迁移时暂停。
> ```
> 
> ### 模糊词不删除，翻译成验证
> 
> “高级”“有质感”“专业”“像官网”不是坏词。
> 
> 坏的是把它们当完成标准。
> 
> 这个 skill 会把它们变成：
> 
> - 设计方向
> - 截图检查
> - 层级、间距、字体、可读性
> - 最多 3 轮聚焦视觉改进
> 
> ## 本地质量检查
> 
> 这个仓库带了一个轻量 linter：
> 
> ```bash
> python3 ~/.agents/skills/qiaomu-goal-meta-skill/scripts/lint_goal_command.py goal.txt
> ```
> 
> 它会拦住：
> 
> - `/目标` 这种不可执行前缀
> - `[Outcome]`、`TODO`、`待定` 这类占位符
> - `make sure it works`
> - `随便改`
> - `edit anything`
> - `keep trying`
> - 缺少具体证据的验证条件
> 
> ## 前置要求
> 
> - [ ] 已安装支持 Agent Skills 的运行环境，例如 Codex、Claude Code 或兼容工具。
> - [ ] 已安装 Node.js 和 `npx`，用于执行 `npx skills add`。
> - [ ] 运行环境能读取 `~/.agents/skills`。
> 
> ## Troubleshooting
> 
> | 问题 | 原因 | 解决方法 |
> |---|---|---|
> | 没有触发这个 skill | 运行环境未加载本地 skills，或安装路径不对 | 运行 `test -f ~/.agents/skills/qiaomu-goal-meta-skill/SKILL.md`，确认安装位置 |
> | 输出还是 `/目标` | 使用了中文别名而不是 Codex 可执行命令 | 要求它“命令前缀必须保持 `/goal`，正文可以中文” |
> | 输出像模板，有占位符 | 没有按推荐执行版生成 | 要求“不要输出 `[Outcome]` 等占位符，给可直接复制版” |
> | 验证太空 | 目标里只有“确认可用” | 要求补充命令、日志、截图、浏览器/模拟器检查或产物路径 |
> | agent 太早停下 | `暂停条件` 写得过宽 | 把低风险不确定性改成工作假设，只保留账号、付费、生产、版权、发布等高风险暂停 |
> 
> ## 边界
> 
> - 这个 skill 只创建 `/goal` 指令，不默认执行目标本身。
> - 它不会替用户绕过版权、账号、支付、生产数据或合规判断。
> - 它不会把陌生领域的专业规则编造成“事实”。
> - 它默认生成 MVP 级目标；完整产品策略、商业化、部署和发布需要明确要求。
> 
> ## License
> 
> MIT
> 
> Copyright (c) 向阳乔木  
> X: https://x.com/vista8  
> GitHub: https://github.com/joeseesun/
> 
> ## English
> 
> qiaomu-goal-meta-skill turns vague work into a copy-ready Codex `/goal` command.
> 
> It is built for people who do not want to fill out a planning form.
> 
> It chooses conservative defaults, explains them in one sentence, gives numbered options when a choice really matters, and mirrors the final goal with English-compatible field labels.
> 
> Install:
> 
> ```bash
> npx skills add joeseesun/qiaomu-goal-meta-skill
> ```
> 
> Use it like this:
> 
> - "Use qiaomu-goal-meta-skill to turn this vague app idea into a Codex goal."
> - "Write a goal for an iOS teleprompter MVP."
> - "Write a safe goal for a GTA-like browser game without copyrighted IP."
> - "This domain is unfamiliar. Make the goal discovery-first."
> 
> It produces goals with:
> 
> - outcome
> - verification evidence
> - constraints
> - write boundaries
> - iteration policy
> - stop conditions
> - pause conditions
> 
> It intentionally avoids:
> 
> - placeholders in executable drafts
> - vague verification like "make sure it works"
> - broad permissions like "edit anything"
> - infinite retry language like "keep trying"
> - unsafe scope expansion into auth, payment, production data, copyrighted assets, or regulated decisions
> 
> Author:
> 
> Copyright (c) 向阳乔木  
> X: https://x.com/vista8  
> GitHub: https://github.com/joeseesun/

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[機器學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/joeseesun/qiaomu-goal-meta-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "joeseesun--qiaomu-goal-meta-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "joeseesun--qiaomu-goal-meta-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "joeseesun--qiaomu-goal-meta-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "joeseesun--qiaomu-goal-meta-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "joeseesun--qiaomu-goal-meta-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "joeseesun--qiaomu-goal-meta-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "joeseesun" AND file.name != "joeseesun--qiaomu-goal-meta-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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
> const me = dv.page("Repos/joeseesun--qiaomu-goal-meta-skill");
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

> **2026-06-18** — 首次收錄
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

- [[2026-06-18|2026-06-18]] — 首次收錄，648 stars
