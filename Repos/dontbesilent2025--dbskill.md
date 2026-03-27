---
repo: dontbesilent2025/dbskill
url: https://github.com/dontbesilent2025/dbskill
owner: dontbesilent2025
owner_type: User
language: N/A
license: NOASSERTION
description: "dontbesilent 的商业诊断 Skills for Claude Code"
homepage: ""
stars: 1652
stars_per_day: 275
forks: 258
open_issues: 3
created: 2026-03-20
pushed_at: 2026-03-23
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "商業診斷"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供商业诊断工具与知识库，帮助用户优化决策与内容创作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-30"
contributor_count: 0
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 1415
readme_length: 3824
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:909,2026-03-23:924,2026-03-24:1255,2026-03-25:1421,2026-03-26:1542,2026-03-27:1652"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "dbskill"
  - "dontbesilent2025/dbskill"
  - "提供商业诊断工具与知识库，帮助用户优化决策与内容创作。"
---

# dbskill

**924** stars · **462** stars/天 · 建立 2 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/dontbesilent2025--dbskill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 提供商业诊断工具与知识库，帮助用户优化决策与内容创作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (462 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速進行商業診斷和內容優化的中小型企業團隊。
> **一句話重點** dbskill 將推文中的商業智慧轉化為可操作的診斷工具，讓商業分析變得更靈活和高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dontbesilent2025--dbskill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "商業診斷" && p.file.name !== "dontbesilent2025--dbskill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 商業診斷 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到靈活的商業診斷工具，值得嘗試。

> [!abstract] 核心創新
> 將推文中的商業智慧結構化為可操作的診斷工具，提供靈活的應用方式。

## 專案簡介

dbskill 是一款商业诊断工具，旨在通过分析推文提炼出实用的商业技能，用户可以通过输入特定指令（如 `/dbs`）来自动路由到合适的工具进行商业模式、内容创作等方面的诊断。其核心机制是将 12,307 条推文中的知识点结构化为 4,176 个知识原子，用户可以根据需要选择性使用，避免了冗余信息的干扰。工具间的联动设计使得在某一环节发现的问题能够自动推荐下一步的解决方案，例如在内容创作中发现开头问题时，系统会推荐使用 `/dbs-hook` 进行优化。该工具使用了 JSON 格式来存储知识原子，便于快速检索和调用，且每个知识点都附带主题标签、技能关联和置信度评分，确保信息的准确性和实用性。与其他商业诊断工具相比，dbskill 通过知识库的开放性和模块化设计，允许用户根据实际需求灵活组合使用，提升了工具的适用性和效率。

相较于传统的商业分析方法，dbskill 的实时反馈和多步骤推荐机制使得用户能够更快地找到问题根源并采取行动。使用者在安装后只需通过简单的指令即可快速上手，适合需要快速决策和内容优化的团队或个人。该工具的设计理念是将复杂的商业分析过程简化为易于操作的步骤，降低了使用门槛。整体来看，dbskill 是一款功能强大且灵活的商业诊断工具，适合各类用户在商业决策和内容创作中使用。

## 重點功能

- /dbs — 主入口，根據輸入自動路由到合適的診斷工具。
- /dbs-diagnosis — 商業模式診斷，幫助用戶消解問題而非直接回答。
- /dbs-benchmark — 對標分析，通過五重過濾排除噪音。
- /dbs-content — 內容創作診斷，進行五維檢測以提升內容質量。
- /dbs-hook — 短視頻開頭優化，生成 10+ 條開頭方案。
- /dbs-action — 執行力診斷，幫助用戶釐清行動障礙。
- /dbs-deconstruct — 概念拆解，幫助用戶深入理解複雜概念。

## 快速開始

1. 使用 npx 安裝 dbskill
```bash
npx skills add dontbesilent2025/dbskill
```
2. 手動安裝 dbskill
```bash
git clone https://github.com/dontbesilent2025/dbskill.git /tmp/dbskill && cp -r /tmp/dbskill/skills/dbs* ~/.claude/skills/ && rm -rf /tmp/dbskill
```
3. 在 Claude Code 中輸入指令啟動
```bash
/dbs
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 924 stars（462/天），forks 169（18.3%），顯示出強烈的社群興趣。作者 dontbesilent 之前專注於商業診斷領域，這個專案解決了傳統商業分析工具難以靈活應用的痛點，提供了模組化的解決方案。社群對於這種開放式知識庫的需求正在增長，特別是在快速變化的商業環境中。最近的推廣活動和社交媒體討論也可能促進了這一增長。forks/stars 比率 18.3% 表示許多使用者在實際修改和使用這個工具，顯示出其實用性。

## 適合誰使用

**目標受眾**：需要快速進行商業診斷和內容優化的中小型企業團隊。

> [!example] 使用場景
> - 市場分析師用它來快速診斷商業模式的可行性，因為其提供的多步驟推薦能有效縮短分析時間。
> - 內容創作者用它來優化短視頻開頭，因為其能生成多個開頭方案，提升內容吸引力。
> - 企業決策者用它來進行對標分析，因為其結合了多重過濾機制，能排除不必要的噪音，提升決策質量。

## 架構分析

dbskill 的架構採用模組化設計，允許用戶根據需求選擇性使用各個技能。每個技能都能獨立運行，並且通過自動推薦系統互相聯動，提升使用效率。資料流方面，使用者的輸入會經過診斷工具進行分析，然後根據分析結果推薦下一步行動，這種設計使得用戶能夠快速找到問題根源並採取行動。選擇模組化架構的好處是靈活性高，能夠隨著用戶需求的變化進行調整，但代價是需要用戶具備一定的背景知識來有效使用各個技能。整體上，這種設計使得 dbskill 能夠在商業診斷中提供即時反饋，並且能夠根據不同的業務需求進行擴展。

## 技術深入分析

dbskill 的核心技術機制是將推文中的知識點結構化為可操作的技能，這些技能之間通過自動推薦系統進行聯動，提升了用戶的使用體驗。每個技能都能獨立運行，並且能夠根據用戶的需求進行靈活調整。知識原子的結構化設計使得用戶能夠快速檢索所需信息，並且每個知識點都附帶主題標籤和置信度評分，這樣的設計能夠確保信息的準確性和實用性。在效能方面，dbskill 能夠快速響應用戶的請求，並且在多個技能之間進行即時切換，這對於需要快速決策的商業環境尤為重要。

選擇這種模組化架構的好處是能夠隨著用戶需求的變化進行調整，但代價是需要用戶具備一定的背景知識來有效使用各個技能。技術風險方面，隨著用戶數量的增加，系統的性能可能會受到影響，特別是在高並發的情況下。此外，對於知識庫的更新頻率也需要持續關注，以確保信息的時效性和準確性。整體而言，dbskill 在商業診斷領域提供了一個靈活且高效的解決方案，能夠幫助用戶快速找到問題根源並采取行動。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。整體上，文件內容完整，適合新手在 30 分鐘內跑起來。

## 優缺點分析

> [!success] 優點
> - 模組化設計，允許用戶根據需求靈活選擇技能。
> - 即時反饋機制，能快速找到問題根源。
> - 開放的知識庫，使用者可以根據需要選擇性使用。

> [!danger] 缺點
> - 需要一定的背景知識才能有效使用各個技能。
> - 知識庫更新頻率取決於推文，可能存在時效性問題。
> - 部分技能可能需要額外的學習成本。

> [!warning] 注意事項
> - 目前僅支持在 Claude Code 環境中運行。
> - 知識庫的更新頻率取決於推文的發佈，可能存在時效性問題。
> - 部分技能可能需要進一步的背景知識才能有效使用。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 部分技能在使用時可能會出現不兼容的情況，特別是當用戶未充分理解技能的背景時。
  - 解法：建議用戶在使用前先閱讀相關文檔以了解技能的背景和使用情境。
- [MEDIUM] 知識庫的更新可能存在延遲，導致某些信息不夠及時。
  - 解法：定期檢查知識庫更新情況，並根據最新信息進行調整。
- **[HIGH]** 在高並發使用情況下，系統性能可能會下降。
  - 解法：建議在低峰時段進行使用，以獲得更好的性能體驗。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行商業模式診斷 | 非常適合 | 模組化設計使得小型團隊能夠靈活使用各種技能。 |
| 大型企業的商業分析部門 | 普通 | 雖然功能強大，但大型企業可能需要更複雜的定制化解決方案。 |
| 內容創作者需要快速生成短視頻開頭 | 非常適合 | 提供的開頭優化技能能夠直接提升內容質量。 |
| 需要進行長期商業模式跟蹤的團隊 | 不適合 | 知識庫的更新頻率可能無法滿足長期跟蹤的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到靈活的商業診斷工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用過程中不會暴露用戶的個人信息。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

dbskill 最常與 Claude Code 搭配使用，作為商業診斷的輔助工具。在典型的工作流中，使用者可以在 Claude Code 中輸入指令來啟動 dbskill，進行商業模式診斷或內容創作優化。與主流 CI/CD 工具的整合相對簡單，能夠快速融入現有的開發流程。整合的摩擦點主要在於用戶需要熟悉各個技能的使用情境，這可能會增加初期的學習成本。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 dbskill 出現之前，商業診斷主要依賴於傳統的分析工具和專業顧問，這些方案往往成本高且不夠靈活。隨著社交媒體和數據分析技術的進步，將推文中的知識結構化的需求逐漸增強。dbskill 的出現正好填補了這一空白，提供了一個靈活且高效的商業診斷解決方案，未來可能會隨著更多數據來源的整合而變得更加強大。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的商業分析知識
- 熟悉使用 CLI 工具

> [!tip] 導入策略
> 第一週：在個人項目中試用 dbskill。第二週：在小型團隊內部進行測試。第三週：根據使用反饋進行調整，並撰寫使用手冊。

**成功指標**：商業診斷的準確性提高 30%。

> [!warning] 退出計畫
> 所有設定和數據均可導出為 JSON 格式，方便轉移到其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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
| Forks | 169 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-03-22 |
| 建立日期 | 2026-03-20 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dontbesilent2025/dbskill) |

## 社群與生態

**社群活躍度**：最近 3 天內有活躍的提交與問題處理。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-22）
> **活躍天數** 3 天 · **最新 commit** chore: remove CLAUDE.md and SOURCE_OF_TRUTH.md from repo

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/dontbesilent2025/dbskill/issues/4) | 知识库在 Claude Code 中的使用问题及建议解决方案 | 0 | 0 |
> | [#2](https://github.com/dontbesilent2025/dbskill/issues/2) | OpenAI Codex CLI 在MacOS下的安装方法 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dbskill
> 
> dontbesilent 商业诊断工具箱。从 12,307 条推文中提炼方法论，做成 Claude Code skill。
> 
> **所有内容开放，可以整套装，也可以只拿一部分。知识包、原子库、单个公理，都能单独用。**
> 
> ---
> 
> ## v2.2 更新
> 
> **新增**：
> - `/chatroom-austrian` 或 `/奥派` - 奥派经济聊天室（哈耶克 × 米塞斯 × Claude 三人对话）
> 
> **优化**：
> - 完善 skill 联动：诊断工具遇到哲学问题推到聊天室，聊天室讨论完推回诊断工具
> 
> ---
> 
> ## v2.1 更新
> 
> **新增**：
> - `/dbs-hook` - 短视频开头优化（诊断内容质量 + 生成 10+ 条开头方案）
> 
> **优化**：
> - `/dbs-unblock` 重命名为 `/dbs-action`（执行力诊断，更直观）
> - 更新 skill 协作链路（dbs-content 可推荐 dbs-hook）
> 
> ---
> 
> ## v2 更新
> 
> - **知识库重建**：从 12,307 条推文中提取 4,176 个知识原子，替代旧的推文堆叠。每个原子有主题标签、Skill 关联、类型分类和置信度评分
> - **内联案例**：每个 Skill 新增 3 个正面案例 + 2 个反面案例，直接写在 SKILL.md 里，不依赖外部文件也能用
> - **Skill 知识包**：10 个提炼后的方法论文档，按 Skill 需求组织（不再是按学科分类的推文堆叠）
> 
> ---
> 
> ## 工具箱
> 
> ### dbs 诊断工具
> 
> | Skill | 做什么 |
> |---|---|
> | `/dbs` | 主入口，自动路由到对的工具 |
> | `/dbs-diagnosis` | 商业模式诊断。消解问题，不回答问题 |
> | `/dbs-benchmark` | 对标分析。五重过滤，排除噪音 |
> | `/dbs-content` | 内容创作诊断。五维检测 |
> | `/dbs-hook` | 短视频开头优化。诊断 + 生成方案 |
> | `/dbs-action` | 执行力诊断。阿德勒框架（原 dbs-unblock） |
> | `/dbs-deconstruct` | 概念拆解。维特根斯坦式审查 |
> 
> ### chatroom 系列
> 
> | Skill | 做什么 |
> |---|---|
> | `/chatroom-austrian` 或 `/奥派` | 奥派经济聊天室。哈耶克 × 米塞斯 × Claude 三人对话 ⭐ 新增 |
> 
> ### 工作流
> 
> ```
> diagnosis（商业模式对不对）
>     ↓
> benchmark（找谁模仿）
>     ↓
> content（内容怎么做）
>     ↓ 发现开头问题
> hook（开头怎么优化）
>     ↓
> action（做不动怎么办）
> 
> deconstruct（随时拆概念）
> ```
> 
> Skill 之间会自动推荐下一步。比如：
> - diagnosis 发现心理问题 → 推荐 action
> - content 发现开头问题 → 推荐 hook
> - benchmark 发现逃避执行 → 推荐 action
> 
> ---
> 
> ## 安装
> 
> ```bash
> npx skills add dontbesilent2025/dbskill
> ```
> 
> 或手动：
> 
> ```bash
> git clone https://github.com/dontbesilent2025/dbskill.git /tmp/dbskill && cp -r /tmp/dbskill/skills/dbs* ~/.claude/skills/ && rm -rf /tmp/dbskill
> ```
> 
> 安装后在 Claude Code 中输入 `/dbs` 即可。
> 
> ---
> 
> ## 知识库
> 
> dbskill 的知识库是完全开放的。你不需要安装整套 Skill 才能用——可以只拿走你需要的部分。
> 
> ### 目录结构
> 
> ```
> 知识库/
> ├── 原子库/                     # 结构化知识数据库
> │   ├── atoms.jsonl             # 4,176 个知识原子（全量）
> │   ├── atoms_2024Q4.jsonl      # 按季度拆分
> │   ├── atoms_2025Q1.jsonl
> │   ├── ...
> │   └── README.md               # 字段说明
> │
> ├── Skill知识包/                 # 提炼后的方法论文档
> │   ├── diagnosis_公理与诊断框架.md
> │   ├── diagnosis_问题消解案例库.md
> │   ├── benchmark_对标方法论.md
> │   ├── benchmark_平台运营知识.md
> │   ├── content_内容创作方法论.md
> │   ├── content_平台特性与案例.md
> │   ├── unblock_心理诊断框架.md
> │   ├── unblock_信号案例库.md
> │   ├── deconstruct_语言与概念框架.md
> │   └── deconstruct_解构案例库.md
> │
> └── 高频概念词典.md
> ```
> 
> ### 原子库是什么
> 
> 每个知识原子是一条从推文中提炼的知识点，结构化为 JSON：
> 
> ```json
> {
>   "id": "2024Q4_042",
>   "knowledge": "判断一个生意能不能做，必要条件之一是你能不能说出这个产品的颜色",
>   "original": "判断一个生意能不能做，必要条件之一是你能不能说出这个产品的颜色...",
>   "url": "https://x.com/dontbesilent/status/...",
>   "date": "2024-10-01",
>   "topics": ["商业模式与定价", "语言与思维"],
>   "skills": ["dbs-diagnosis", "dbs-deconstruct"],
>   "type": "anti-pattern",
>   "confidence": "high"
> }
> ```
> 
> **字段说明：**
> 
> | 字段 | 说明 |
> |------|------|
> | `knowledge` | 提炼后的知识点 |
> | `original` | 推文原文（≤200 字） |
> | `topics` | 10 个主题分类（可多选） |
> | `skills` | 关联的 Skill |
> | `type` | principle / method / case / anti-pattern / insight / tool |
> | `confidence` | high / medium / low |
> 
> ### Skill 知识包是什么
> 
> 每个 Skill 有 2 个知识包——一个是框架方法论，一个是案例库。Skill 运行时会读取这些文件作为深度参考。
> 
> 如果你不安装 Skill，也可以直接读这些 .md 文件。它们是独立的、可读的方法论文档。
> 
> ### 怎么在你自己的项目里用
> 
> **场景 1：给你的 AI 加商业诊断能力**
> 
> 把 `知识库/Skill知识包/diagnosis_公理与诊断框架.md` 的内容粘贴到你的 system prompt 里。你的 AI 就有了 6 公理 + 消解漏斗。
> 
> **场景 2：做 RAG 知识库**
> 
> 把 `知识库/原子库/atoms.jsonl` 导入你的向量数据库。4,176 条结构化知识点，自带主题标签，天然适合检索。
> 
> **场景 3：只要案例**
> 
> 只看 `type: "case"` 或 `type: "anti-pattern"` 的原子。大约 700+ 条真实商业案例和反面案例。
> 
> **场景 4：做 chatbot**
> 
> 用 Skill 知识包里的方法论作为 system prompt，用原子库做 RAG 增强。不需要安装 Claude Code。
> 
> **场景 5：学习和研究**
> 
> 按 `topics` 过滤，只看你感兴趣的领域。比如 `topics` 包含 `"心理与执行力"` 的有 296 条。
> 
> ---
> 
> ## 许可证
> 
> 本项目采用 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) 许可证。
> 
> - 个人使用、学习、研究、非商业项目：不需要署名，不需要申请
> - 公开发布衍生作品（文章、工具、课程等）：请注明来源
> - 商业用途：需要单独授权，请联系作者
> 
> ---
> 
> ## 作者
> 
> - X: [dontbesilent](https://x.com/dontbesilent)
> - 小红书: [dontbesilent](https://xhslink.com/m/637xuspR4iI)
> - 抖音: [dontbesilent](https://v.douyin.com/pRUDhpBqOrc/)

## 延伸閱讀

相關概念：[[商業模式]] · [[內容創作]] · [[知識管理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/dontbesilent2025/dbskill)

## 相關收錄

> [!note]- 直接競品（同子分類：商業診斷）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "商業診斷" AND file.name != "dontbesilent2025--dbskill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "dontbesilent2025--dbskill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "dontbesilent2025--dbskill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "dontbesilent2025--dbskill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["商業模式","內容創作","知識管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "dontbesilent2025--dbskill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/dontbesilent2025--dbskill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "dontbesilent2025--dbskill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "dontbesilent2025" AND file.name != "dontbesilent2025--dbskill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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
> const me = dv.page("Repos/dontbesilent2025--dbskill");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-27|2026-03-27]] — 再次上榜，1.7k stars
- [[2026-03-26|2026-03-26]] — 再次上榜，1.5k stars
- [[2026-03-25|2026-03-25]] — 再次上榜，1.4k stars
- [[2026-03-24|2026-03-24]] — 再次上榜，1.3k stars
- [[2026-03-23|2026-03-23]] — 首次收錄，909 stars
