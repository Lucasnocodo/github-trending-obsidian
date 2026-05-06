---
repo: Fokkyp/SoftwareCopyright-Skill
url: https://github.com/Fokkyp/SoftwareCopyright-Skill
owner: Fokkyp
owner_type: User
language: Python
license: MIT
description: "中国软件著作权申请材料 生成器 Skills，本 Skills 通过阅读本地项目，自动生成全套 .docx 软著申请材料，全开源，无须再付费购买任何软著申请服务"
homepage: ""
stars: 713
stars_per_day: 119
forks: 149
open_issues: 0
created: 2026-04-29
pushed_at: 2026-04-29
first_seen: 2026-05-06
week: "2026-W19"
month: "2026-05"
category: "其他"
subcategory: "文檔生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-06
use_case: "自動生成中國軟件著作權申請材料，省去付費代辦的麻煩。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-13"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 1771
readme_length: 4940
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-06"
star_history: "2026-05-06:713"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "SoftwareCopyright-Skill"
  - "Fokkyp/SoftwareCopyright-Skill"
  - "自動生成中國軟件著作權申請材料，省去付費代辦的麻煩。"
---

# SoftwareCopyright-Skill

**713** stars · **119** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 自動生成中國軟件著作權申請材料，省去付費代辦的麻煩。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (119 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要進行中國軟著申請但不想依賴外部代辦服務的開發者。
> **一句話重點** 這個專案讓開發者能夠在不依賴外部服務的情況下，自動生成軟著申請材料，省下時間和金錢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "文檔生成" && p.file.name !== "Fokkyp--SoftwareCopyright-Skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 文檔生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 本專案提供了一個完全免費的方式來自動生成中國軟件著作權申請材料，避免了傳統的付費代辦服務。

## 專案簡介

這個專案的核心功能是自動生成中國軟件著作權的申請材料，開發者只需將本地項目交給 Codex，系統會引導填寫關鍵信息，並生成完整的文檔。具體流程包括從項目分析到生成操作手冊、申請表信息等，所有材料均可在本地生成，確保資料的真實性和安全性。使用者只需執行 `使用 software-copyright-materials 生成当前项目的软件著作权申请资料` 指令，Codex 會根據項目內容生成所需文檔，避免了傳統上需要付費的代辦服務。技術上，這個工具依賴 Python 3 進行項目分析和文檔生成，並可選擇性使用 .NET SDK 以增強 DOCX 文件的生成能力，這樣的設計讓使用者能夠在不依賴外部服務的情況下，獲得完整的申請材料。

與傳統的代辦服務相比，這個工具提供了更高的資料控制權和透明度，因為所有生成的材料均來自於開發者的真實項目代碼，而非 AI 編造的內容。這對於對資料真實性有高要求的開發者來說尤為重要。使用者在生成過程中可以隨時確認關鍵節點，減少錯誤的風險。整體來看，這個專案適合需要進行軟著申請的開發者，特別是那些希望節省成本並保持資料控制的人士。

**技術棧**：`Python 3`

## 重點功能

- 自動生成全套申請材料 — 包括操作手冊、代碼材料和申請表信息，無需外部代辦。
- 從真實項目中提取代碼 — 確保生成的材料真實可靠，避免 AI 編造的內容。
- 支持 DOCX 和 TXT 格式輸出 — 一鍵生成可編輯的操作手冊和代碼材料，方便修改和提交。
- 關鍵節點確認 — 在生成過程中，開發者可以隨時確認和修改關鍵信息，降低錯誤風險。
- 本地生成資料 — 所有材料均在本地生成，開發者可以完全控制資料的安全性和隱私。

## 快速開始

1. 下載代碼
```bash
git clone https://github.com/Fokkyp/SoftwareCopyright-Skill.git
```
2. 安裝到 Codex
```bash
mkdir -p ~/.codex/skills && cp -R software-copyright-materials ~/.codex/skills/
```
3. 重啟 Codex
```bash
重新打開 Codex 會話或刷新技能列表
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 713 stars（119/天），forks 149（20.9%），顯示出強烈的社群興趣。Fokkyp 是這個專案的主要貢獻者，過去的經驗可能讓他對開發者的需求有深刻理解。這個工具解決了開發者在申請軟著過程中面臨的繁瑣文檔整理問題，之前的解決方案往往需要付費代辦，這使得許多開發者不得不依賴外部服務。隨著開源文化的推廣，這個工具的出現正好滿足了開發者對於成本和資料控制的需求。社群的反應也表明，這個工具的需求是持續增長的。

## 適合誰使用

**目標受眾**：需要進行中國軟著申請但不想依賴外部代辦服務的開發者。

> [!example] 使用場景
> - 獨立開發者用它來生成軟著申請材料，因為可以省下數千元的代辦費用，並且能夠完全控制材料的真實性。
> - 小型團隊用它來快速整理和提交軟著申請，因為可以自動生成所需文檔，節省了大量人力資源。
> - 企業開發部門用它來確保所有軟著申請材料的準確性，因為它能從真實項目中提取代碼，避免了資料不一致的風險。

## 架構分析

這個專案採用 Codex Skill 的架構，主要由 Python 腳本負責項目分析和文檔生成。資料流從開發者提供的項目代碼開始，經過分析後生成相應的申請材料。選擇 Python 是因為其在文本處理和文件生成方面的強大能力，並且能夠方便地與 Codex 環境整合。

這樣的設計使得開發者能夠在本地生成資料，避免了資料的外洩風險。整體架構的擴展性良好，但依賴 Codex 環境可能限制了其在某些場景下的應用。未來可能需要考慮如何在不依賴 Codex 的情況下提供相似功能。

## 技術深入分析

這個專案的核心技術機制是通過 Python 腳本分析開發者的項目代碼，並根據中國軟著申請的要求自動生成相應的文檔。使用者只需將項目代碼提供給 Codex，系統會引導他們填寫必要的信息，並生成操作手冊和申請表等資料。效能上，這個工具能夠快速生成文檔，具體的生成速度取決於項目代碼的大小和複雜度。選擇 Python 作為開發語言是因為其在文本處理和文件生成方面的優勢，並且能夠方便地與 Codex 環境整合。

這樣的選擇使得專案的依賴樹相對輕量，降低了維護成本。技術風險方面，依賴 Codex 環境可能會在未來的版本更新中帶來不穩定性，開發者需要隨時關注 Codex 的變化。整合方面，這個工具與現有的開發流程相容性良好，能夠輕鬆融入到開發者的工作流中。整體來看，這個專案在自動化文檔生成方面具有很大的潛力，未來可能會進一步擴展功能以支持更多的文檔格式和生成選項。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟；安裝過程相對順暢，但需要在 Codex 環境中運行；有提供 demo 以便使用者理解生成的資料格式；文件目前僅提供中文，可能對非中文使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 完全免費，無需支付代辦費用。
> - 生成的材料來自真實項目，確保資料的真實性。
> - 提供關鍵節點確認，降低錯誤風險。

> [!danger] 缺點
> - 需要在 Codex 環境中運行，無法獨立使用。
> - 對於不熟悉 Codex 的開發者可能有學習曲線。
> - 生成的文件需要手動轉換為 PDF 格式。

> [!warning] 注意事項
> - 僅支援 Python 3 環境，無法在 Python 2 上運行。
> - 需要 Codex 環境，無法獨立運行。
> - 生成的文件需手動轉換為 PDF 格式以供提交。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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
| Forks | 149 |
| Open Issues | 0 |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-29 |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Fokkyp/SoftwareCopyright-Skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Fokkyp](https://github.com/Fokkyp) | 4 |

## 社群與生態

**社群活躍度**：社群活躍，最近有提交更新。
**連結**：[文件](https://github.com/Fokkyp/SoftwareCopyright-Skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-29 ~ 2026-04-29）
> **活躍天數** 1 天 · **最新 commit** docs: add project repository link

## README 摘錄

> [!info]- 展開查看原文 README
> # Software Copyright Materials Skill
> 
> 这是一个用于生成中文软件著作权申请资料的 Codex Skill 开源仓库。
> 
> 项目地址：https://github.com/Fokkyp/SoftwareCopyright-Skill
> 
> 真正的 Skill 位于：
> 
> ```text
> software-copyright-materials/
> ```
> 
> 安装时应将 `software-copyright-materials/` 目录复制或安装到用户的 Codex skills 目录中，而不是把本仓库根目录整体作为一个 skill。
> 
> ## 功能概览
> 
> > **本项目完全免费。请不要相信任何使用本项目包装出来的付费服务。**
> 
> 软件著作权申请本身不神秘，真正麻烦的是整理材料：申请表字段要写对，操作手册要像样，代码材料要按规则截取，软件名称、版本号、页数还要保持一致。很多开发者最后会把这件事交给付费代办或资料整理服务，花钱买的往往也只是这些文档整理工作。
> 
> 这个 skill 的目标很直接：让开发者不用再为整理软著材料额外付费，也不用把项目代码和产品细节交给外部商家来回沟通。把真实项目交给 Codex，它会按流程引导你确认关键信息，并在本地生成一整套可检查、可修改、可提交前再导出的软著申请资料。
> 
> - **自己生成整套资料**：从项目分析、业务理解、申请表信息、操作手册到代码材料，一套流程跑完，不再依赖外部代办整理文档。
> - **从真实源码抽取代码**：代码材料只来自开发者已有项目，禁止 AI 编造源码，适合对材料真实性敏感的开发者。
> - **自动处理前 30 页 / 后 30 页规则**：源码足够时按常见鉴别材料要求生成前 30 页和后 30 页；不足 60 页时按规则生成全部代码材料。
> - **操作手册不套模板**：先理解项目业务、页面和功能，再写面向审核员的操作说明，避免只有空泛功能列表。
> - **申请表字段集中整理**：软件名称、版本号、著作权人、开发环境、运行环境、源程序量、功能说明等字段统一生成到 `申请表信息.txt`，官网填报时可以对照复制。
> - **关键节点都让你确认**：业务口径、申请表字段、代码选择、截图方式、最终 Markdown 草稿都会停下来让开发者确认，减少材料写偏的风险。
> - **Word/TXT 一键输出**：确认后生成操作手册 DOCX、代码材料 DOCX 和申请表 TXT，文件统一放在 `软件著作权申请资料/正式资料/`。
> - **本地生成，资料可控**：默认在当前项目目录生成材料，代码、文档和草稿都留在本地，方便开发者自行审阅、修改和归档。
> - **提供完整 demo**：仓库内提供 [`生成demo/软件著作权申请资料/`](生成demo/软件著作权申请资料/)，可以直接点击查看生成后的草稿、正式资料和填报辅助文件。
> 
> ## 演示截图
> 
> | 生成流程 | 生成流程 |
> |---------|---------|
> |  |  |
> |  |  |
> |  |  |
> 
> ## 目录结构
> 
> ```text
> .
> ├── docs/
> │   └── screenshots/
> │       ├── demo-1.png
> │       ├── demo-2.png
> │       ├── demo-3.png
> │       ├── demo-4.png
> │       ├── demo-5.png
> │       ├── demo-6.png
> │       └── 著作权申请表.png
> ├── software-copyright-materials/
> │   ├── SKILL.md
> │   ├── agents/
> │   ├── references/
> │   ├── scripts/
> │   └── vendor/
> └── 生成demo/
>     └── 软件著作权申请资料/
>         ├── 草稿/
>         └── 正式资料/
>             ├── 申请表信息.txt
>             ├── 软件名称_操作手册.docx
>             ├── 软件名称-代码(前30页).docx
>             └── 软件名称-代码(后30页).docx
> ```
> 
> ## 下载并安装
> 
> 推荐按下面顺序操作。
> 
> ### 第一步：下载代码
> 
> 会用 Git 的用户执行：
> 
> ```bash
> git clone https://github.com/Fokkyp/SoftwareCopyright-Skill.git
> cd SoftwareCopyright-Skill
> ```
> 
> 不会用 Git 的用户：
> 
> 打开 GitHub 仓库页面，点击 `Code`，再点击 `Download ZIP`。下载后解压，进入解压出来的目录。
> 
> 进入目录后，应能看到这个文件夹：
> 
> ```text
> software-copyright-materials/
> ```
> 
> ### 第二步：安装到 Codex
> 
> 把 `software-copyright-materials/` 复制到 Codex 的 skills 目录：
> 
> ```bash
> mkdir -p ~/.codex/skills
> cp -R software-copyright-materials ~/.codex/skills/
> ```
> 
> 安装完成后，应看到：
> 
> ```text
> ~/.codex/skills/software-copyright-materials/SKILL.md
> ```
> 
> ### 第三步：重启 Codex
> 
> 重新打开 Codex 会话或刷新技能列表，然后在项目中提出“生成软著申请资料”等请求即可使用。
> 
> ## 运行要求和环境校验
> 
> ### 必需环境
> 
> - **Codex**：本仓库提供的是 Codex Skill，需要在 Codex 中使用。
> - **Python 3**：生成流程依赖 `software-copyright-materials/scripts/` 下的 Python 脚本，用于分析项目、生成草稿、抽取真实代码、校验字段和生成正式资料。
> - **可读取的项目源码**：代码材料必须从真实项目中抽取，所以需要在 Codex 中打开或指定你的项目目录。
> 
> ### 可选环境
> 
> - **.NET SDK**：用于启用更完整的 DOCX OpenXML 生成和校验能力。没有 .NET SDK 也可以继续使用基础 DOCX 兜底生成。
> - **Chrome DevTools MCP**：只有在你希望自动截取网页截图时才需要。
> - **Codex Computer Use**：只有在你希望通过桌面界面操作并截图时才需要。
> - **用户自行截图**：如果没有 MCP 或 Computer Use，也可以手动把截图放到指定目录，或者直接跳过截图。
> 
> ### 使用过程中会自动检查吗？
> 
> 会。每次开始生成资料时，skill 会先运行环境检查，并在当前目录生成：
> 
> ```text
> 软件著作权申请资料/环境检查.md
> 软件著作权申请资料/环境检查.json
> ```
> 
> 环境检查会告诉你：
> 
> - Markdown 草稿、TXT、基础 DOCX 是否可用。
> - 完整 DOCX OpenXML 环境是否可用。
> - `.NET SDK` 是否缺失。
> - 当前会把材料生成到哪里。
> 
> 如果完整 DOCX 环境缺失，Codex 会停下来让你选择：
> 
> 1. 安装完整 DOCX 环境。
> 2. 使用基础 DOCX 兜底继续。
> 
> 它不会在你不确认的情况下静默安装依赖。截图也一样，会先让你选择 Chrome DevTools MCP、Codex Computer Use、用户自行截图或跳过截图；如果你跳过截图，操作手册里会保留可见的截图预留位置。
> 
> ### 安装到某个项目内
> 
> 如果只想让某个项目使用这个 skill，在你希望下载本仓库的目录执行下面这一行命令。把 `` 替换成真实项目路径：
> 
> ```bash
> PROJECT_DIR="" && git clone https://github.com/Fokkyp/SoftwareCopyright-Skill.git && mkdir -p "$PROJECT_DIR/.codex/skills" && cp -R SoftwareCopyright-Skill/software-copyright-materials "$PROJECT_DIR/.codex/skills/"
> ```
> 
> 安装后应为：
> 
> ```text
> /.codex/skills/software-copyright-materials/SKILL.md
> ```
> 
> ## 基本使用
> 
> 安装完成后，在 Codex 中打开需要生成软著资料的项目，然后直接说：
> 
> ```text
> 使用 software-copyright-materials 生成当前项目的软件著作权申请资料
> ```
> 
> Codex 会按流程引导填写信息、确认草稿，并在当前项目目录下生成 `软件著作权申请资料/`。
> 
> ## 开源协议
> 
> 本项目采用 [MIT License](LICENSE) 开源。你可以自由使用、复制、修改、分发，也可以基于它继续开发自己的版本。使用者仍需自行核对生成材料是否符合实际项目和官网当前要求。
> 
> ## 代码材料说明
> 
> 依据软件著作权申请材料要求，代码鉴别材料应来自申请软件本身。本 skill 不通过 AI 生成项目代码，也不编造不存在的源码内容。
> 
> 本 skill 的作用是帮助开发者从已有项目中理解业务、选择代码文件、提取前后代码材料，并整理为便于编辑和提交的文档格式。开发者应在提交前自行核对代码材料是否来自真实项目、软件名称和版本号是否与申请表保持一致。
> 
> ## 官网填报和提交
> 
> 官方入口：
> 
> - 中国版权保护中心：https://www.ccopyright.com.cn/
> - 著作权登记系统：https://register.ccopyright.com.cn/login.html
> - 法规依据：《计算机软件著作权登记办法》：https://www.gov.cn/zhengce/2002-02/20/content_5724627.htm
> 
> 官方页面可能会调整，实际填报时以官网当前页面为准。
> 
> ### 著作权申请表填写示例
> 
> 著作权申请表按照以下图片填写。
> 
> ### 申请流程
> 
> 1. 打开中国版权保护中心官网，进入著作权登记系统。
> 2. 注册或登录账号，并按页面提示完成实名认证。
> 3. 进入软件著作权相关业务，选择计算机软件著作权登记申请。
> 4. 在线填写申请表。可以打开本工具生成的 `正式资料/申请表信息.txt`，把软件名称、版本号、开发完成日期、开发环境、运行环境、功能说明等内容复制到官网对应字段。
> 5. 上传申请材料。根据官网要求上传 PDF 格式文件和其他证明材料。
> 6. 核对信息无误后提交申请，并按官网提示查看受理、补正或登记结果。
> 
> ### 生成文件怎么用
> 
> `申请表信息.txt` 是填报辅助文件，用来帮助开发者在官网填写申请表，不是直接上传的申请材料。
> 
> `docx` 文件是本地编辑稿，方便开发者在 Word、WPS 或 Pages 中继续修改。提交官网前，请将需要上传的 `docx` 文件导出或另存为 PDF，再按官网要求上传。
> 
> 实际文件名会包含软件名称。通常需要转换为 PDF 的文件包括：
> 
> - `操作手册.docx`
> - `代码(前30页).docx`
> - `代码(后30页).docx`
> - 不足 60 页时生成的全部代码材料
> 
> 申请人身份证明、权属证明、委托材料等其他文件，请按官网页面要求另行准备并上传。
> 
> 友情连接：Linux Do 社区 · V2EX

## 延伸閱讀

相關專案：[[tw93--Kami|tw93/Kami]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/Fokkyp/SoftwareCopyright-Skill)

## 相關收錄

> [!note]- 直接競品（同子分類：文檔生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "文檔生成" AND file.name != "Fokkyp--SoftwareCopyright-Skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Fokkyp--SoftwareCopyright-Skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Fokkyp--SoftwareCopyright-Skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "Fokkyp--SoftwareCopyright-Skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Fokkyp--SoftwareCopyright-Skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Fokkyp" AND file.name != "Fokkyp--SoftwareCopyright-Skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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
> const me = dv.page("Repos/Fokkyp--SoftwareCopyright-Skill");
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

> **2026-05-06** — 首次收錄
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

- [[2026-05-06|2026-05-06]] — 首次收錄，713 stars
