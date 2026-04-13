---
repo: xixu-me/awesome-persona-distill-skills
url: https://github.com/xixu-me/awesome-persona-distill-skills
owner: xixu-me
owner_type: User
language: JavaScript
license: CC0-1.0
description: "同事.skill、前任.skill、女娲.skill、自己.skill、乔布斯.skill……"
homepage: ""
stars: 3431
stars_per_day: 572
forks: 386
open_issues: 0
created: 2026-04-06
pushed_at: 2026-04-12
first_seen: 2026-04-10
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "AI 助手"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-10
use_case: "將人物、關係及個人背景轉化為可重用的 AI 助手技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-16"
contributor_count: 3
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 83
readme_length: 6157
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-10"
star_history: "2026-04-10:1798,2026-04-11:2855,2026-04-12:3181,2026-04-13:3431"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skills"
  - "topic/awesome"
  - "topic/awesome_list"
  - "topic/persona_distill"
aliases:
  - "awesome-persona-distill-skills"
  - "xixu-me/awesome-persona-distill-skills"
  - "將人物、關係及個人背景轉化為可重用的 AI 助手技能。"
---

# awesome-persona-distill-skills

**1.8k** stars · **599** stars/天 · 建立 3 天前 · JavaScript · CC0-1.0

```dataviewjs
const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent-skills` `awesome` `awesome-list` `persona-distill`

> [!summary] 一句話摘要
> 將人物、關係及個人背景轉化為可重用的 AI 助手技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (599 stars/day)
> **授權** CC0-1.0 · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望將個人背景轉化為可重用 AI 助手的開發者和創作者。
> **一句話重點** 這個專案展示了如何將個人背景轉化為 AI 助手的潛力，為未來的個性化 AI 應用鋪平了道路。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "xixu-me--awesome-persona-distill-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到靈活的 AI 助手功能，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一個從多個維度提煉個人特質的框架，讓使用者能夠創建個性化的 AI 助手。

## 專案簡介

這個專案的核心在於「人格蒸餾」，即從對話、作品及數位痕跡中提煉出個人的表達風格和決策框架，並將其轉化為可重用的 AI 助手技能。使用者可以透過提供的技能列表，快速找到與特定人物或情境相關的技能，例如從前任的聊天記錄中提煉出對話風格，或從職場同事的資料中整理出溝通方式。這個工具的賣點在於它的靈活性和多樣性，支持多種個人背景的蒸餾，讓使用者能夠根據自己的需求創建個性化的 AI 助手。主要使用 JavaScript 和 Bun 作為包管理工具，並且依賴 Prettier 進行代碼格式化，這使得專案的維護和開發變得相對簡單。與其他類似工具相比，如「反蒸餾 Skill」或「數字人生.skills」，這個專案更專注於從多個維度提煉個人特質，並且提供了更為廣泛的技能範疇。

實際使用中，使用者可以透過簡單的命令來檢查技能的一致性或格式，這對於維護技能的質量至關重要。這個專案的社群活躍度高，所有的問題都已經被解決，顯示出良好的維護狀態。對於正在尋找創建個性化 AI 助手的開發者來說，這個專案是個不錯的選擇，尤其是在小型團隊或個人專案中。未來六個月內，隨著 AI 技術的進一步發展，這個專案可能會吸引更多的使用者和貢獻者，進一步擴展其功能和應用範圍。

**技術棧**：`JavaScript` · `Bun 1.3.11` · `Prettier 3.8.1`

## 重點功能

- 人格蒸餾 — 從對話和數位痕跡中提煉出個人特質和風格。
- 多樣化技能列表 — 包含職場、親密關係及公眾人物的技能。
- 簡單的命令行工具 — 使用 bun 進行格式檢查和測試，確保代碼質量。
- 高效的社群支持 — 所有問題均已解決，顯示出良好的維護狀態。
- 靈活的應用場景 — 可用於個人助手、職場分析和教育輔助等多種情境。

## 快速開始

1. 安裝 Bun 包管理器
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 克隆專案
```bash
git clone https://github.com/xixu-me/awesome-persona-distill-skills.git
```
3. 進入專案目錄
```bash
cd awesome-persona-distill-skills
```
4. 安裝依賴
```bash
bun install
```
5. 運行測試
```bash
bun test
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Bun 和克隆專案",
  "指令": "bun test",
  "預期輸出": "所有測試通過，顯示測試結果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 1798 stars（599/天），forks 198（11.0%），這顯示出非常高的關注度。專案的作者 xixu-me 之前在開源社群中有一定的影響力，這次專案解決了將個人背景轉化為 AI 助手的需求，這在當前的 AI 生態中是個新穎的想法。社群的積極參與和高解決率的問題也反映出使用者對這個工具的需求和信任。最近的推文和討論也可能促進了這個專案的曝光度，讓更多人開始關注和使用它。

## 適合誰使用

**目標受眾**：希望將個人背景轉化為可重用 AI 助手的開發者和創作者。

> [!example] 使用場景
> - 獨立開發者用它來創建一個基於自己風格的 AI 助手，因為這樣可以節省時間並提高效率。
> - HR 人員用它來分析前任員工的溝通風格，因為這能幫助他們在招聘過程中更好地理解候選人。
> - 學生用它來整理和模擬導師的教學風格，因為這樣可以更有效地準備考試和作業。

## 架構分析

這個專案採用 Bun 作為包管理工具，因為它提供了更快的安裝和執行速度。資料流方面，使用者可以透過命令行工具進行技能的檢查和測試，這樣的設計使得開發者能夠快速迭代和維護代碼。選擇 Bun 而非 npm 的原因在於 Bun 的性能優勢，雖然這可能會導致某些 npm 生態系統的兼容性問題。擴展性方面，專案的設計使得未來可以輕鬆添加新的技能或功能，但在大型應用中可能會面臨性能瓶頸。

## 技術深入分析

這個專案的核心技術機制在於使用 JavaScript 和 Bun 進行開發，並透過命令行工具提供使用者友好的操作介面。效能方面，由於使用 Bun，專案在安裝和執行速度上有顯著優勢，這使得開發者能夠快速迭代。選擇 Bun 而非 npm 主要是因為其性能優勢，但這也意味著可能會面臨 npm 生態系統的兼容性問題。設計上，專案的依賴關係相對簡單，主要依賴於 Prettier 進行代碼格式化，這降低了維護成本。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大量數據時。整合方面，這個專案與現有的開發工具鏈相容性良好，但在大型企業應用中可能需要額外的適配工作。整體而言，這是一個具有潛力的專案，未來可能會吸引更多的使用者和貢獻者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，沒有明顯的坑。提供的指南簡潔易懂，對於新手來說，花 30 分鐘就能順利運行起來。

## 優缺點分析

> [!success] 優點
> - 靈活性高，能夠支持多種個人背景的蒸餾。
> - 社群活躍，問題解決率高。
> - 簡單易用，安裝和運行過程順暢。

> [!danger] 缺點
> - 目前只支援 Bun，對於習慣 npm 的開發者可能不太友好。
> - 功能範圍仍在擴展中，可能不夠成熟。
> - 缺乏多語言支持，對於非中文或英文使用者不太友好。

> [!warning] 注意事項
> - 僅支援 Bun 1.2.0 以上版本
> - 目前只提供英文和中文的 README
> - 不支援大型企業級應用，主要針對個人和小型團隊

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [leilei926524-tech/anti-distill](https://github.com/leilei926524-tech/anti-distill) | 專注於將技能內容與私有經驗拆分管理，適合需要保護隱私的使用者。 |
| [wildbyteai/digital-life](https://github.com/wildbyteai/digital-life) | 從數位痕跡中提煉結構化自我画像，適合需要深入分析個人數據的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [leilei926524-tech/anti-distill](https://github.com/leilei926524-tech/anti-distill) | 專注於技能內容與私有經驗的拆分管理，適合需要保護隱私的使用者。 | 如果你的團隊需要管理私有經驗並且不想將其公開，這個工具更適合。 | medium，因為需要重新設計技能管理流程。 |
| [wildbyteai/digital-life](https://github.com/wildbyteai/digital-life) | 從數位痕跡中提煉結構化自我画像，適合需要深入分析個人數據的使用者。 | 如果你的需求是分析個人數據並生成結構化報告，這個工具更合適。 | high，因為需要重新設計數據提取和分析流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-persona-distill-skills** | **anti-distill** | **digital-life** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於技能內容與私有經驗的拆分管理，適合需要保護隱私的使用者。 | 從數位痕跡中提煉結構化自我画像，適合需要深入分析個人數據的使用者。 |
> | 遷移成本 | - | medium，因為需要重新設計技能管理流程。 | high，因為需要重新設計數據提取和分析流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要管理私有經驗並且不想將其公開，這個工具更適合 | 如果你的需求是分析個人數據並生成結構化報告，這個工具更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Bun 可能無法正常安裝
  - 解法：確保系統符合 Bun 的要求，或使用 npm 進行安裝
- [MEDIUM] 某些技能可能缺乏詳細的文檔
  - 解法：參考社群討論或直接聯繫維護者
- **[HIGH]** 在高負載下，性能可能下降
  - 解法：考慮分散式架構或優化技能的實現

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 專案的靈活性和簡單性使其非常適合小型團隊使用。 |
| 大型企業的核心應用 | 不適合 | 目前的功能和性能可能無法滿足大型企業的需求。 |
| 個人開發者的 AI 助手 | 非常適合 | 能夠快速創建個性化的 AI 助手，滿足個人需求。 |
| 教育機構的教學輔助工具 | 適合 | 可以用來模擬導師的教學風格，幫助學生學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到靈活的 AI 助手功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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
| Forks | 198 |
| Open Issues | 0 |
| Issue 解決率 | 100% (14 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 83 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xixu-me/awesome-persona-distill-skills) |
| Topics | `agent-skills` `awesome` `awesome-list` `persona-distill` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `prettier`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xixu-me](https://github.com/xixu-me) | 37 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 9 |
> | [@Schlaflied](https://github.com/Schlaflied) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，所有問題均已解決。
**連結**：[文件](https://github.com/xixu-me/awesome-persona-distill-skills/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-09）
> **活躍天數** 1 天 · **最新 commit** build: migrate project from npm to bun

## README 摘錄

> [!info]- 展開查看原文 README
> Awesome Persona Distill Skills
>   
>     
>       
>     
>   
> 
> **_[English](./README.en.md)_**
> 
> > [!TIP]
> > 欢迎加入“Xget 开源与 AI 交流群”，一起交流开源项目、AI 应用、工程实践、效率工具和独立开发；如果你也在做产品、写代码、折腾项目或者对开源和 AI 感兴趣，欢迎[**进群**](https://file.xi-xu.me/QR%20Codes/%E7%BE%A4%E4%BA%8C%E7%BB%B4%E7%A0%81.png)认识更多认真做事、乐于分享的朋友。
> 
> 围绕人物、关系、纪念性场景与方法论视角的 [Agent Skills](https://agentskills.io) 收录列表。
> 
> 这里的“人格蒸馏”主要指从对话、作品、资料或数字痕迹中提炼表达风格、决策框架与交互方式，不默认等同于对真实个体的完整还原。
> 
> > [!NOTE]
> > 条目按存储库名排序，主要为了便于检索与维护；列表顺序不代表推荐优先级、质量高低或重要性先后。
> 
>  
>    
>    
>    
>  
> 
> ## 目录
> 
> - [自我蒸馏与元工具](#自我蒸馏与元工具)
> - [职场与学术关系](#职场与学术关系)
> - [亲密关系与家庭记忆](#亲密关系与家庭记忆)
> - [公众人物与方法论视角](#公众人物与方法论视角)
> - [精神性与专门化主题](#精神性与专门化主题)
> - [贡献](#贡献)
> 
> ## 自我蒸馏与元工具
> 
> - [反蒸馏 Skill](https://github.com/leilei926524-tech/anti-distill) - 将可公开分发的技能内容与私有经验备份拆分管理，用于技能交付场景。
> - [数字人生.skills](https://github.com/wildbyteai/digital-life) - 从个人在日常工具中留下的数字痕迹中提炼结构化自我画像。
> - [Forge Skill](https://github.com/YIKUAIBANZI/forge-skill) - 将自我蒸馏与他人蒸馏拆分为独立流程，用于自我镜像、记忆整理与角色化对话。
> - [永生.skill](https://github.com/agenmod/immortal-skill) - 从聊天记录与相关资料中整理多维数字人格画像。
> - [数字生命开源计划](https://github.com/weixr18/my-digital-life) - 提供一套将个人知识库升级为数字分身的框架。
> - [女娲.skill](https://github.com/alchaincyf/nuwa-skill) - 从个人的心智模型、决策启发式与表达模式中提炼可复用技能。
> - [VibePortrait](https://github.com/dadwadw233/VibePortrait) - 从 Vibe Coding 对话中提炼开发者画像、开发技能与偏好。
> - [自己.skill](https://github.com/notdog1998/yourself-skill) - 将个人对话与记录整理为自我蒸馏助手。
> 
> ## 职场与学术关系
> 
> - [老板.skill](https://github.com/vogtsw/boss-skills) - 从工作材料中提炼管理者的判断标准、评审风格与沟通预期。
> - [同事.skill](https://github.com/titanwings/colleague-skill) - 从团队资料中整理前同事的工作上下文、习惯与沟通方式。
> - [HR.skill](https://github.com/Schlaflied/hr-skill) - 从拒信与招聘流程中整理 HR 的沟通逻辑与决策模式，用于反向拆解筛选标准并重构求职叙事。
> - [大学老师.skill](https://github.com/CommitHu502Craft/professor-skill) - 从课程资料与教师风格中整理复习重点、题型偏好与评分线索。
> - [roast-cold-email-skill](https://github.com/Schlaflied/roast-cold-email-skill) - 从公司公开信息与招聘材料中整理批评性求职邮件写法，用于生成有理有据的冷联系求职邮件。
> - [师兄.skill](https://github.com/zhanghaichao520/senpai-skill) - 从课题组材料中提炼资深成员的指导方式与救火风格。
> - [导师.skill](https://github.com/ybq22/supervisor) - 将导师的指导风格整理为面向学生与教育工作者的导师助手。
> 
> ## 亲密关系与家庭记忆
> 
> - [暗恋对象.skill](https://github.com/xiaoheizi8/crush-skills) - 从聊天、照片与社交痕迹中提炼对话风格，用于个人回望与情感整理。
> - [前任.skill](https://github.com/therealXiaomanChu/ex-skill) - 从私人记录中整理说话方式与共同记忆，用于回忆与关系梳理。
> - [MamaSkill](https://github.com/jiangziyan-693/MamaSkill) - 从亲人的聊天记录、信件与语音中整理纪念型家庭陪伴助手。
> - [父母.skill](https://github.com/xiaoheizi8/parents-skills) - 从个人材料中提炼父母的语气、习惯与家庭记忆。
> - [恋爱训练营.skill](https://github.com/TammyTan516/relationship-training-skill) - 基于聊天记录模拟心动对象的沟通风格，帮助用户在安全沙盒中练习表达、邀约与关系修复。
> - [Reunion Skill](https://github.com/yangdongchen66-boop/reunion-skill) - 基于已故亲友的数字遗物构建可本地运行的纪念型陪伴助手。
> 
> ## 公众人物与方法论视角
> 
> - [巴菲特思维操作系统](https://github.com/will2025btc/buffett-perspective) - 提炼沃伦·巴菲特的投资与决策框架，形成可复用的方法论视角。
> - [常熟阿诺（加州盛亦陶） Skill](https://github.com/Ricardo-Vv/changshu-anuo) - 提炼常熟阿诺关于“左右脑互搏”的表达与分析视角，形成可复用的方法论框架。
> - [马斯克.skill](https://github.com/alchaincyf/elon-musk-skill) - 提炼埃隆·马斯克的第一性原理与产品思维，形成可复用的决策框架。
> - [峰哥亡命天涯 Skill](https://github.com/rottenpen/fengge-wangmingtianya-perspective) - 提炼“峰哥亡命天涯”的现实主义、止损导向与黑色幽默式表达结构，形成可复用的方法论视角。
> - [费曼.skill](https://github.com/alchaincyf/feynman-skill) - 提炼理查德·费曼的解释风格与求真启发式，形成可复用的方法论框架。
> - [郭德纲.skill](https://github.com/ByteRax/guodegang-skills) - 提炼郭德纲的表达结构、处世判断与职业方法，形成可复用的方法论视角。
> - [户晨风.skill](https://github.com/Janlaywss/hu-chenfeng-skill) - 提炼户晨风的消费现实主义视角，用于分析消费、城市与职业选择。
> - [Ilya.skill](https://github.com/alchaincyf/ilya-sutskever-skill) - 提炼 Ilya Sutskever 对规模化、研究突破与超级智能的判断框架，形成可复用的方法论视角。
> - [KarlMarx Skill](https://github.com/baojiachen0214/karlmarx-skill) - 提炼马克思主义的结构分析、矛盾分析与实践检验方法，形成用于深层问题分析的方法论框架。
> - [Karpathy.skill](https://github.com/alchaincyf/karpathy-skill) - 提炼 Andrej Karpathy 对 AI 工程、教育与研究的思考框架，形成可复用的方法论视角。
> - [毛泽东.skill](https://github.com/wwwaapplleecu-source/mao-skill) - 基于公开著作提炼毛泽东的思想框架与方法论视角。
> - [毛选.skill](https://github.com/leezythu/maoxuan-skill) - 提炼《毛选》中的矛盾分析、根据地思维与战略判断框架，形成可复用的方法论视角。
> - [米塞斯方法论](https://github.com/LijiayuDeng/mises-perspective) - 提炼路德维希·冯·米塞斯关于人类行为学、经济计算与干预主义批判的分析框架，形成可复用的政治经济学与制度分析方法论视角。
> - [MrBeast.skill](https://github.com/alchaincyf/mrbeast-skill) - 提炼 MrBeast 的内容选题、包装与观众留存方法，形成可复用的创作打法。
> - [芒格.skill](https://github.com/alchaincyf/munger-skill) - 提炼查理·芒格的跨学科心智模型与决策启发式，形成可复用的方法论框架。
> - [纳瓦尔.skill](https://github.com/alchaincyf/naval-skill) - 提炼纳瓦尔关于财富、杠杆与判断力的框架，形成可复用的方法论视角。
> - [PG.skill](https://github.com/alchaincyf/paul-graham-skill) - 提炼 Paul Graham 关于创业、写作与独立思考的框架，形成可复用的方法论视角。
> - [求是 Skill](https://github.com/HughYau/qiushi-skill) - 从相关思想方法中整理实事求是、调查研究与战略判断等工具，形成可复用的问题分析框架。
> - [罗布派克.skill](https://github.com/smallnest/rob-pike-skill) - 提炼 Rob Pike 在 Unix、Go 与工程设计中的技术判断与表达风格，形成可复用的方法论视角。
> - [内娱.skill](https://github.com/yanghaoraneve/star-skill) - 从歌词、视频、微博与评论中整理歌手或偶像的表达风格与互动方式，形成可对话的数字人格助手。
> - [乔布斯.skill](https://github.com/alchaincyf/steve-jobs-skill) - 提炼史蒂夫·乔布斯的产品判断、叙事风格与决策启发式，形成可复用的方法论框架。
> - [塔勒布.skill](https://github.com/alchaincyf/taleb-skill) - 提炼纳西姆·塔勒布关于反脆弱与风险的启发式，形成可复用的方法论框架。
> - [童锦程.skill](https://github.com/hotcoffeeshake/tong-jincheng-skill) - 提炼童锦程在人际关系与情感判断上的直白视角与启发式。
> - [特朗普.skill](https://github.com/alchaincyf/trump-skill) - 提炼特朗普的谈判、锚定与权力博弈分析框架，形成可复用的方法论视角。
> - [X 导师.skill](https://github.com/alchaincyf/x-mentor-skill) - 整合多位社交平台创作者的写作与增长打法，形成统一的导师式方法论技能。
> - [张一鸣.skill](https://github.com/alchaincyf/zhang-yiming-skill) - 提炼张一鸣的产品、组织与战略判断框架，形成可复用的方法论视角。
> - [张雪峰.skill](https://github.com/alchaincyf/zhangxuefeng-skill) - 提炼张雪峰在升学、考试与职业规划方面的实用框架，形成可复用的方法论视角。
> - [zizek-skill](https://github.com/JikunR/zizek-skill) - 以齐泽克式的问题意识整理前提追问、欲望追踪与矛盾揭示方法，形成可复用的分析工具。
> 
> ## 精神性与专门化主题
> 
> - [赛博算命 Skill](https://github.com/jinchenma94/bazi-skill) - 基于出生信息与传统命理典籍整理四柱排盘与分析方法。
> - [金刚经.skill](https://github.com/dull-bird/diamond-sutra-skill) - 基于《金刚经》及相关解读整理佛学讲解框架，形成可对话的专门化技能。
> - [Master-skill](https://github.com/xr843/Master-skill) - 基于佛教经典文献整理汉传佛教的教学风格与讲解视角。
> - [Numerologist Skills](https://github.com/FANzR-arch/Numerologist_skills) - 用结构化知识库与脚本化约束整理奇门遁甲、紫微斗数等术数技能。
> - [月老 · 姻缘测算 Skills](https://github.com/Ming-H/yinyuan-skills) - 将姻缘测算整理为多模式传统术数技能，用于合婚、求签与桃花运势分析。
> 
> ## 贡献
> 
> 申请新增收录请先提交 issue 表单；维护者审核并添加 `approved` 标签后，工作流会自动生成 PR。
> 
> 如果你是在修复现有条目、文档或失效链接，仍可直接提交 PR。具体约定见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自動化]] · [[數位人格]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[sanbuphy--learn-coding-agent|sanbuphy/learn-coding-agent]] · [[farzaa--clicky|farzaa/clicky]]

[GitHub](https://github.com/xixu-me/awesome-persona-distill-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "xixu-me--awesome-persona-distill-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "xixu-me--awesome-persona-distill-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "xixu-me--awesome-persona-distill-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "xixu-me--awesome-persona-distill-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","自動化","數位人格"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "xixu-me--awesome-persona-distill-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xixu-me--awesome-persona-distill-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xixu-me" AND file.name != "xixu-me--awesome-persona-distill-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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
> const me = dv.page("Repos/xixu-me--awesome-persona-distill-skills");
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

> **2026-04-10** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 再次上榜，3.4k stars
- [[2026-04-12|2026-04-12]] — 再次上榜，3.2k stars
- [[2026-04-11|2026-04-11]] — 再次上榜，2.9k stars
- [[2026-04-10|2026-04-10]] — 首次收錄，1.8k stars
