---
repo: titanwings/colleague-skill
url: https://github.com/titanwings/colleague-skill
owner: titanwings
owner_type: User
language: Python
license: MIT
description: "将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！"
homepage: ""
stars: 4648
stars_per_day: 2324
forks: 252
open_issues: 44
created: 2026-03-30
pushed_at: 2026-04-01
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.01"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "將離職同事的知識和風格轉化為可用的 AI 技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-05"
contributor_count: 1
engagement: "low"
issue_close_rate: 8
repo_size_kb: 3155
readme_length: 4290
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:3437,2026-04-02:4648"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "colleague-skill"
  - "titanwings/colleague-skill"
  - "將離職同事的知識和風格轉化為可用的 AI 技能。"
---

# colleague-skill

**3.4k** stars · **3.4k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/titanwings--colleague-skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.01`

> [!summary] 一句話摘要
> 將離職同事的知識和風格轉化為可用的 AI 技能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.4k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在團隊中保留和傳承知識的企業管理者。
> **一句話重點** 這個專案的價值在於它能夠將人員流動帶來的知識損失轉化為可持續的 AI 技能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/titanwings--colleague-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "titanwings--colleague-skill" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學、8 小時整合，得到高效的知識管理工具，值得投資。

> [!abstract] 核心創新
> 這個專案能夠將離職同事的知識轉化為可用的 AI 技能，並支持多種資料來源的自動收集。

## 專案簡介

這個專案的核心機制是將離職同事的各種資料（如飛書消息、釘釘文檔等）轉換成可用的 AI 技能，讓新同事或團隊成員能夠繼續利用這些知識。使用者只需輸入同事的姓名、職位和性格標籤，然後選擇資料來源，即可生成一個能夠模擬該同事的 AI 技能。這樣的設計不僅能保留知識，還能讓新成員快速適應工作環境，減少知識流失的風險。關鍵指令包括 `/create-colleague` 來創建技能，以及 `/{slug}` 來調用生成的技能。該專案使用 Python 編寫，依賴於多個庫如 requests 和 slack-sdk，並提供自動化資料收集的功能，這使得資料的整合更加高效。

與其他類似工具相比，這個專案的獨特之處在於它能夠自動從多種來源收集資料，並且支持多種性格和文化標籤的定義，這使得生成的 AI 技能更具個性化。使用者在使用過程中可能會發現，資料的質量直接影響生成技能的效果，這需要使用者在資料收集時多加注意。該專案目前處於 beta 階段，功能尚在持續完善中，未來可能會增加更多的資料來源和功能。適合需要快速接手離職同事工作的團隊，但對於小型專案或資料不豐富的情況，可能效果不佳。

**技術棧**：`Python 3.8` · `requests>=2.28.0` · `slack-sdk>=3.27.0`

## 重點功能

- 自動資料收集 — 支持從飛書、釘釘、Slack 等多種來源自動收集資料。
- 生成個性化 AI 技能 — 根據同事的性格和工作風格生成技能，支持多種性格標籤。
- 版本管理 — 每次更新自動存檔，支持回滾到歷史版本。
- 多種資料來源支持 — 包括 PDF、圖片、Markdown 等多種格式的手動上傳。
- 命令管理 — 提供多種命令來管理和調用生成的技能。

## 快速開始

1. 安裝到當前項目
```bash
mkdir -p .claude/skills && git clone https://github.com/titanwings/colleague-skill .claude/skills/create-colleague
```
2. 安裝依賴
```bash
pip3 install -r requirements.txt
```
3. 創建同事技能
```bash
/create-colleague
```

## 程式碼範例

```python
{
  "前置條件": "在 Claude Code 中輸入指令",
  "指令": "/create-colleague",
  "預期輸出": "生成一個能夠替代同事工作的 AI Skill。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 3437 stars（3437/天），forks 166（4.8%），這是極端爆發式增長。作者 titanwings 似乎是針對企業知識管理的痛點進行了深度思考，解決了許多團隊在同事離職後的知識流失問題。之前，團隊往往依賴於文檔和口頭交接，但這些方式常常無法完整保留關鍵知識。這個工具的出現，正好填補了這一空白，並且在社群中引起了廣泛的討論和反響。技術生態的演變，特別是對於 AI 技能的需求增加，也讓這個工具的可行性大幅提升。forks/stars 比率為 4.8%，顯示出有一定數量的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在團隊中保留和傳承知識的企業管理者。

> [!example] 使用場景
> - 團隊經理用它來快速建立離職同事的 AI 技能，因為這樣能夠減少知識流失，讓新成員更快上手。
> - HR 專員用它來整合離職員工的工作經驗，因為這樣能夠在招聘新員工時提供更具體的背景資訊。
> - 項目負責人用它來生成過去項目的總結和經驗教訓，因為這樣能夠在未來的項目中避免重蹈覆轍。

## 架構分析

該專案採用模組化設計，將不同功能拆分為多個模組，如資料收集、技能生成和版本管理。資料流方面，使用者輸入同事資料後，系統會自動從指定來源收集資料，並根據預設的模板生成技能。這樣的設計使得整個流程自動化程度高，減少了人工干預的需求。

選擇 Python 作為開發語言，因為其在資料處理和自動化方面的強大生態系統。這也使得依賴樹相對簡單，主要依賴於 requests 和 slack-sdk 等輕量級庫。擴展性方面，未來可以通過增加新的資料來源和技能模板來擴展功能。

## 技術深入分析

該專案的核心技術機制在於資料的自動收集和技能的生成。使用者提供的資料會被系統分析，並根據預設的模板生成相應的 AI 技能。這樣的設計使得整個過程高度自動化，減少了人工干預的需求。效能方面，該工具能夠快速處理來自多個來源的資料，並生成技能，具體的性能數據尚未提供。選擇 Python 作為開發語言，因為其在資料處理和自動化方面的強大生態系統，這也使得依賴樹相對簡單。技術風險方面，資料來源的質量直接影響生成技能的效果，這需要使用者在資料收集時多加注意。整合方面，該工具能夠與多種即時通訊工具（如 Slack、飛書等）無縫整合，並且支持多種資料格式的導入，這使得它在團隊合作中具備良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例。安裝過程相對順暢，但需要注意配置 App 憑證。文件目前僅提供中文，未來可能會增加多語言支持。

## 優缺點分析

> [!success] 優點
> - 能夠有效保留離職同事的知識，減少知識流失。
> - 支持多種資料來源的自動收集，提升效率。
> - 生成的技能具備個性化特徵，更符合實際需求。

> [!danger] 缺點
> - 目前仍在 beta 階段，功能可能不穩定。
> - 需要高質量的原材料來生成有效的技能。
> - 對於小型團隊或資料不豐富的情況，效果可能不佳。

> [!warning] 注意事項
> - 目前仍在 beta 測試階段，功能可能不穩定。
> - 資料來源的質量直接影響生成技能的效果。
> - 需要配置 App 憑證以支持自動資料收集。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於文件同步，而本專案專注於知識轉移和技能生成，適合需要保留人員知識的團隊。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供的是一個資料收集工具，而本專案則是將收集的資料轉化為可用的 AI 技能，更加注重知識的應用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 專注於生成對話式 AI，而本專案則專注於知識轉移和技能生成，適合需要保留人員知識的團隊。 | 如果你的團隊需要一個更通用的對話式 AI，而不僅僅是針對離職同事的知識管理。 | medium，因為需要重新定義對話流程和知識結構。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | tg-ws-proxy 提供的是一個代理工具，而本專案則是將收集的資料轉化為可用的 AI 技能，更加注重知識的應用。 | 如果你的團隊需要一個更靈活的資料代理解決方案，而不僅僅是針對知識管理的工具。 | low，因為可以直接使用現有的資料流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **colleague-skill** | **HolyClaude** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | HolyClaude 專注於生成對話式 AI，而本專案則專注於知識轉移和技能生成，適合需要保留人員知識的團隊。 | tg-ws-proxy 提供的是一個代理工具，而本專案則是將收集的資料轉化為可用的 AI 技能，更加注重知識的應用。 |
> | 遷移成本 | - | medium，因為需要重新定義對話流程和知識結構。 | low，因為可以直接使用現有的資料流。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個更通用的對話式 AI，而不僅僅是針對離職 | 如果你的團隊需要一個更靈活的資料代理解決方案，而不僅僅是針對 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 資料來源不全可能導致生成的技能效果不佳。
  - 解法：確保收集到足夠的資料，特別是長文檔和決策類消息。
- [MEDIUM] 自動資料收集需要配置 App 憑證，可能會造成使用障礙。
  - 解法：仔細閱讀安裝說明，確保正確配置憑證。
- **[HIGH]** 目前功能尚不穩定，可能會出現錯誤或異常。
  - 解法：在使用前備份重要資料，並定期檢查更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速建立離職同事的 AI 技能，減少知識流失。 |
| 大型企業的知識管理系統 | 適合 | 能夠整合多種資料來源，提升知識管理效率。 |
| 小型團隊或資料不豐富的情況 | 不適合 | 生成的技能效果可能不佳，依賴於高質量的原材料。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學、8 小時整合，得到高效的知識管理工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具不需要高權限，但會存取用戶的即時通訊資料，需注意資料隱私。依賴鏈的信任程度尚可，需定期檢查依賴庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/titanwings--colleague-skill");
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
> const me = dv.page("Repos/titanwings--colleague-skill");
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
| Forks | 166 |
| Open Issues | 33 |
| Issue 解決率 | 8% (3 closed) |
| 最後推送 | 2026-03-31 |
| 建立日期 | 2026-03-30 |
| Repo 大小 | 3.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/titanwings/colleague-skill) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `pypinyin` `playwright` `slack-sdk` `python-docx` `openpyxl`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@titanwings](https://github.com/titanwings) | 29 |

**最新版本**：v0.01 — demo (2026-03-30)

> [!info]- Release Notes
> demo

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個 issue 被提出和討論。
**連結**：[文件](https://agentskills.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-30 ~ 2026-03-31）
> **活躍天數** 2 天 · **最新 commit** feat: add Slack auto collector

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#22](https://github.com/titanwings/colleague-skill/issues/22) | 有群友说能不能蒸馏女同事  哎 最性压抑的一集 | 23 | 4 |
> | [#28](https://github.com/titanwings/colleague-skill/issues/28) | 应了那一句，企业不是裁员，只不过变成一个个的token | 2 | 1 |
> | [#16](https://github.com/titanwings/colleague-skill/issues/16) | 码奸，码奸，你们都是码奸!(笑晕了) | 2 | 0 |
> | [#25](https://github.com/titanwings/colleague-skill/issues/25) | codex支持下使用文档吧🌟 | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 同事.skill
> 
> > *"你们搞大模型的就是码奸，你们已经害死前端兄弟了，还要害死后端兄弟，测试兄弟，运维兄弟，害死网安兄弟，害死ic兄弟，最后害死自己害死全人类"*
> 
> [](LICENSE)
> [](https://python.org)
> [](https://claude.ai/code)
> [](https://agentskills.io)
> 
> 你的同事跳槽了，留下大量的文档没人维护？
> 你的实习生离职了，只留下空荡的工位和烂尾的项目？
> 你的导师毕业了，带走了所有的经验和上下文？
> 你的搭档转岗了，熟悉的默契一夜之间归零？
> 你的前任交接了，三页文档想概括三年的积累？
> 
> **将冰冷的离别化为温暖的 Skill，欢迎加入赛博永生！**
> 
> 提供同事的原材料（飞书消息、钉钉文档、邮件、截图）加上你的主观描述
> 生成一个**真正能替他工作的 AI Skill**
> 用他的技术规范写代码，用他的语气回答问题，知道他什么时候会甩锅
> 
> [数据来源](#支持的数据来源) · [安装](#安装) · [使用](#使用) · [效果示例](#效果示例) · [详细安装说明](INSTALL.md) · [**English**](README_EN.md)
> 
> ---
> 
> ## 支持的数据来源
> 
> > 目前还是同事.skill 的 beta 测试版本，后续会有更多来源支持，请多多关注！
> 
> | 来源 | 消息记录 | 文档 / Wiki | 多维表格 | 备注 |
> |------|:-------:|:-----------:|:-------:|------|
> | 飞书（自动采集） | ✅ API | ✅ | ✅ | 输入姓名即可，全自动 |
> | 钉钉（自动采集） | ⚠️ 浏览器 | ✅ | ✅ | 钉钉 API 不支持历史消息 |
> | Slack（自动采集） | ✅ API | — | — | 需管理员安装 Bot；免费版限 90 天 |
> | PDF | — | ✅ | — | 手动上传 |
> | 图片 / 截图 | ✅ | — | — | 手动上传 |
> | 飞书 JSON 导出 | ✅ | ✅ | — | 手动上传 |
> | 邮件 `.eml` / `.mbox` | ✅ | — | — | 手动上传 |
> | Markdown | ✅ | ✅ | — | 手动上传 |
> | 直接粘贴文字 | ✅ | — | — | 手动输入 |
> 
> ---
> 
> ## 安装
> 
> ### Claude Code
> 
> > **重要**：Claude Code 从 **git 仓库根目录** 的 `.claude/skills/` 查找 skill。请在正确的位置执行。
> 
> ```bash
> # 安装到当前项目（在 git 仓库根目录执行）
> mkdir -p .claude/skills
> git clone https://github.com/titanwings/colleague-skill .claude/skills/create-colleague
> 
> # 或安装到全局（所有项目都能用）
> git clone https://github.com/titanwings/colleague-skill ~/.claude/skills/create-colleague
> ```
> 
> ### OpenClaw
> 
> ```bash
> git clone https://github.com/titanwings/colleague-skill ~/.openclaw/workspace/skills/create-colleague
> ```
> 
> ### 依赖（可选）
> 
> ```bash
> pip3 install -r requirements.txt
> ```
> 
> > 飞书/钉钉自动采集需配置 App 凭证，详见 [INSTALL.md](INSTALL.md)
> 
> ---
> 
> ## 使用
> 
> 在 Claude Code 中输入：
> 
> ```
> /create-colleague
> ```
> 
> 按提示输入同事姓名、公司职级（如 `字节 2-1 算法工程师`）、性格标签，然后选择数据来源。所有字段均可跳过，仅凭描述也能生成。
> 
> 完成后用 `/{slug}` 调用该同事 Skill。
> 
> ### 管理命令
> 
> | 命令 | 说明 |
> |------|------|
> | `/list-colleagues` | 列出所有同事 Skill |
> | `/{slug}` | 调用完整 Skill（Persona + Work） |
> | `/{slug}-work` | 仅工作能力 |
> | `/{slug}-persona` | 仅人物性格 |
> | `/colleague-rollback {slug} {version}` | 回滚到历史版本 |
> | `/delete-colleague {slug}` | 删除 |
> 
> ---
> 
> ## 效果示例
> 
> > 输入：`字节 2-1 后端工程师，INTJ，甩锅高手，字节范`
> 
> **场景一：Code Review**
> 
> ```
> 用户      ❯ 帮我看一下这个接口设计
> 
> 同事.skill ❯ 等等，这个接口的 impact 是什么？背景没说清楚。
>              （看完后）N+1 查询，改掉。返回结构用统一的
>              {code, message, data}，这是规范，不用问为什么。
> ```
> 
> **场景二：甩锅**
> 
> ```
> 用户      ❯ 这个 bug 是你引入的吧
> 
> 同事.skill ❯ 上线时间对上了吗？那个需求改了好几个地方，还有其他变更。
> ```
> 
> ---
> 
> ## 功能特性
> 
> ### 生成的 Skill 结构
> 
> 每个同事 Skill 由两部分组成，共同驱动输出：
> 
> | 部分 | 内容 |
> |------|------|
> | **Part A — Work Skill** | 负责系统、技术规范、工作流程、经验知识库 |
> | **Part B — Persona** | 5 层性格结构：硬规则 → 身份 → 表达风格 → 决策模式 → 人际行为 |
> 
> 运行逻辑：`接到任务 → Persona 判断态度 → Work Skill 执行 → 用他的语气输出`
> 
> ### 支持的标签
> 
> **个性**：认真负责 · 甩锅高手 · 完美主义 · 差不多就行 · 拖延症 · PUA 高手 · 职场政治玩家 · 向上管理专家 · 阴阳怪气 · 反复横跳 · 话少 · 只读不回 …
> 
> **企业文化**：字节范 · 阿里味 · 腾讯味 · 华为味 · 百度味 · 美团味 · 第一性原理 · OKR 狂热者 · 大厂流水线 · 创业公司派
> 
> **职级支持**：字节 2-1~3-3+ · 阿里 P5~P11 · 腾讯 T1~T4 · 百度 T5~T9 · 美团 P4~P8 · 华为 13~21 级 · 网易 · 京东 · 小米 …
> 
> ### 进化机制
> 
> - **追加文件** → 自动分析增量 → merge 进对应部分，不覆盖已有结论
> - **对话纠正** → 说「他不会这样，他应该是 xxx」→ 写入 Correction 层，立即生效
> - **版本管理** → 每次更新自动存档，支持回滚到任意历史版本
> 
> ---
> 
> ## 项目结构
> 
> 本项目遵循 [AgentSkills](https://agentskills.io) 开放标准，整个 repo 就是一个 skill 目录：
> 
> ```
> create-colleague/
> ├── SKILL.md              # skill 入口（官方 frontmatter）
> ├── prompts/              # Prompt 模板
> │   ├── intake.md         #   对话式信息录入
> │   ├── work_analyzer.md  #   工作能力提取
> │   ├── persona_analyzer.md #  性格行为提取（含标签翻译表）
> │   ├── work_builder.md   #   work.md 生成模板
> │   ├── persona_builder.md #   persona.md 五层结构模板
> │   ├── merger.md         #   增量 merge 逻辑
> │   └── correction_handler.md # 对话纠正处理
> ├── tools/                # Python 工具
> │   ├── feishu_auto_collector.py  # 飞书全自动采集
> │   ├── feishu_browser.py         # 飞书浏览器方案
> │   ├── feishu_mcp_client.py      # 飞书 MCP 方案
> │   ├── dingtalk_auto_collector.py # 钉钉全自动采集
> │   ├── slack_auto_collector.py   # Slack 全自动采集
> │   ├── email_parser.py           # 邮件解析
> │   ├── skill_writer.py           # Skill 文件管理
> │   └── version_manager.py        # 版本存档与回滚
> ├── colleagues/           # 生成的同事 Skill（gitignored）
> ├── docs/PRD.md
> ├── requirements.txt
> └── LICENSE
> ```
> 
> ---
> 
> ## 注意事项
> 
> - **原材料质量决定 Skill 质量**：聊天记录 + 长文档 > 仅手动描述
> - 建议优先收集：他**主动写的**长文 > **决策类回复** > 日常消息
> - 飞书自动采集需将 App bot 加入相关群聊
> - 目前还是一个demo版本，如果有bug请多多提issue！
> 
> ---
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ---
> 
> MIT License © [titanwings](https://github.com/titanwings)

## 延伸閱讀

相關概念：[[自動化]] · [[知識管理]] · [[AI 技能]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]] · [[eze-is--web-access|eze-is/web-access]]

[GitHub](https://github.com/titanwings/colleague-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "titanwings--colleague-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "titanwings--colleague-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "titanwings--colleague-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "titanwings--colleague-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","知識管理","AI 技能"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "titanwings--colleague-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/titanwings--colleague-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "titanwings--colleague-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "titanwings" AND file.name != "titanwings--colleague-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/titanwings--colleague-skill");
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
> const me = dv.page("Repos/titanwings--colleague-skill");
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
> const me = dv.page("Repos/titanwings--colleague-skill");
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
> const me = dv.page("Repos/titanwings--colleague-skill");
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
> const me = dv.page("Repos/titanwings--colleague-skill");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-02|2026-04-02]] — 再次上榜，4.6k stars
- [[2026-04-01|2026-04-01]] — 首次收錄，3.4k stars
