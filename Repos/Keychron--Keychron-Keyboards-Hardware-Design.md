---
repo: Keychron/Keychron-Keyboards-Hardware-Design
url: https://github.com/Keychron/Keychron-Keyboards-Hardware-Design
owner: Keychron
owner_type: Organization
language: N/A
license: NOASSERTION
description: "Industrial design files for Keychron keyboards and mice. 100+ models with CAD assets in STEP, DXF, DWG, and PDF. Source-available, with commercial use allowed for original compatible accessories within the license terms."
homepage: "https://www.keychron.com/"
stars: 3153
stars_per_day: 243
forks: 244
open_issues: 1
created: 2026-04-04
pushed_at: 2026-04-17
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "硬體設計"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "提供 Keychron 鍵盤和滑鼠的工業設計檔案，讓使用者能夠學習、修改和創建兼容配件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-14"
contributor_count: 4
engagement: "low"
issue_close_rate: 95
repo_size_kb: 952416
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2145,2026-04-11:2147,2026-04-12:2646,2026-04-13:2784,2026-04-14:2959,2026-04-15:3020,2026-04-16:3067,2026-04-17:3114,2026-04-18:3153"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - org
  - easy_install
  - "topic/3d_printing"
  - "topic/cad"
  - "topic/gaming"
  - "topic/gaming_keyboard"
  - "topic/gaming_mouse"
aliases:
  - "Keychron-Keyboards-Hardware-Design"
  - "Keychron/Keychron-Keyboards-Hardware-Design"
  - "提供 Keychron 鍵盤和滑鼠的工業設計檔案，讓使用者能夠學習、修改和創建兼容配件。"
---

# Keychron-Keyboards-Hardware-Design

**3.2k** stars · **243** stars/天 · 建立 13 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`3d-printing` `cad` `gaming` `gaming-keyboard` `gaming-mouse` `hardware-designs` `keyboard` `keyboard-firmware` `keychron` `mechanical-keyboard` `mouse` `qmk` `qmk-firmware` `zephyr` `zmk` `zmk-firmware`

> [!summary] 一句話摘要
> 提供 Keychron 鍵盤和滑鼠的工業設計檔案，讓使用者能夠學習、修改和創建兼容配件。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (243 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 對鍵盤和滑鼠設計有興趣的硬體愛好者和工程師，特別是希望進行自定義和創新的使用者。
> **一句話重點** 這個專案不僅提供設計檔案，更是推動硬體設計社群成長的重要資源。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "硬體設計" && p.file.name !== "Keychron--Keychron-Keyboards-Hardware-Design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 硬體設計 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供生產級硬體設計檔案，讓使用者能夠學習和創建兼容配件。

## 專案簡介

這個專案提供了 Keychron 鍵盤和滑鼠的生產級硬體設計檔案，包含超過 100 種型號的 CAD 資產，格式涵蓋 STEP、DXF、DWG 和 PDF。使用者可以透過這些檔案學習真實的工業設計，並進行 Remix，以創建兼容的配件。這樣的設計不僅降低了入門門檻，還擴展了自定義的可能性，讓社群能夠探索更深層的硬體變更和創新。專案的授權設計支持 Keychron 生態系統的擴展，允許原創兼容配件的商業使用，但禁止複製和銷售 Keychron 的產品。

關鍵指令包括瀏覽鍵盤和滑鼠檔案，開啟 CAD 軟體檢視檔案，並學習如何 Remix 設計。這個專案的賣點在於其開放性和教育價值，讓使用者能夠從實際的設計決策中學習。隨著社群的成長，這些設計檔案有助於推動硬體改造和個人專案的發展。使用者可以透過 Discord 社群分享建設，進一步促進硬體改造的文化。

## 重點功能

- 多種格式支持 — 提供 STEP、DXF、DWG 和 PDF 格式的設計檔案，方便不同 CAD 軟體使用。
- 超過 100 種型號 — 包含 C Pro、Q 系列、K 系列等多種鍵盤和滑鼠的設計檔案。
- 開放授權 — 允許使用者創建兼容配件，並進行商業使用，促進社群創新。
- 詳細的文件指南 — 提供檔案格式指南和 Remix 教學，幫助使用者快速上手。
- 活躍社群支持 — 加入 Discord 社群，與其他使用者分享經驗和建議。

## 快速開始

1. 克隆倉庫
```bash
git clone https://github.com/Keychron/Keychron-Keyboards-Hardware-Design.git
```
2. 瀏覽鍵盤檔案
```bash
cd Keychron-Keyboards-Hardware-Design/C-Pro-8K-Series/
```
3. 開啟 CAD 軟體檔案
```bash
使用 CAD 軟體打開 .step 或 .dxf 檔案
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 3153 stars（243/天），forks 244（7.7%），顯示出強勁的增長潛力。這個專案由 Keychron 團隊主導，他們在鍵盤和滑鼠設計上有豐富經驗，這使得他們能夠提供高品質的設計檔案。專案解決了許多硬體愛好者在設計和製作兼容配件時面臨的困難，過去這些設計檔案通常不易獲得。社群的活躍度和開放的授權政策也促進了使用者的參與和貢獻，這些都是其受歡迎的原因。

## 適合誰使用

**目標受眾**：對鍵盤和滑鼠設計有興趣的硬體愛好者和工程師，特別是希望進行自定義和創新的使用者。

> [!example] 使用場景
> - 硬體設計學生用它來學習 CAD 設計，因為可以直接接觸到真實的工業設計檔案，提升實作能力。
> - DIY 鍵盤愛好者用它來創建自定義鍵盤配件，因為設計檔案的開放性讓他們能夠進行深入的修改和創新。
> - 工程師用它來開發兼容的鍵盤和滑鼠配件，因為可以利用現有的設計進行快速原型製作，節省時間和成本。

## 架構分析

這個專案採用開放式的設計架構，讓使用者能夠自由訪問和修改設計檔案。設計檔案的結構清晰，分為不同的系列和型號，便於使用者快速找到所需的資源。每個檔案夾包含了完整的設計檔案和說明，使用者可以根據自己的需求進行 Remix。這種架構的設計使得社群能夠在現有的基礎上進行創新，並且支持多種 CAD 軟體的使用，降低了學習曲線。這樣的設計也促進了社群的參與，使用者可以輕鬆地貢獻自己的修改和創新。

## 技術深入分析

這個專案的核心技術機制是提供多種格式的 CAD 設計檔案，讓使用者能夠學習和修改真實的工業設計。這些檔案涵蓋了多個型號和系列，使用者可以根據自己的需求進行 Remix。效能上，這些設計檔案能夠在主流 CAD 軟體中流暢使用，並且支持 3D 打印等應用。設計選擇上，這些檔案的開放性和社群支持使得使用者能夠快速上手，並且降低了學習曲線。技術風險方面，隨著社群的擴大，可能會出現版本不一致的問題，這需要維護者定期更新和管理。整合方面，這些設計檔案可以輕鬆融入現有的硬體設計流程，並且與多種 CAD 軟體相容，降低了整合的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指引和範例，讓新手能夠快速上手。安裝過程簡單，只需克隆倉庫即可。文件中包含了詳細的指南，對於新手非常友好，並且社群活躍，能夠提供即時的幫助。

## 優缺點分析

> [!success] 優點
> - 提供真實的 CAD 設計檔案，讓使用者能夠學習和實作。
> - 開放的授權政策促進社群創新和貢獻。
> - 多種型號的設計檔案滿足不同使用者的需求。

> [!danger] 缺點
> - 不允許商業使用 Keychron 的商標，限制了某些商業應用。
> - 某些設計檔案可能缺乏詳細的說明，對新手不太友好。
> - 需要一定的 CAD 軟體使用經驗才能充分利用這些檔案。

> [!warning] 注意事項
> - 不允許複製和銷售 Keychron 鍵盤或滑鼠。
> - 某些設計檔案可能缺乏詳細的說明，需自行探索。
> - 不支援直接商業使用 Keychron 的商標。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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
| Forks | 244 |
| Open Issues | 1 |
| Issue 解決率 | 95% (19 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-04 |
| 官方網站 | [Link](https://www.keychron.com/) |
| Repo 大小 | 930.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Keychron/Keychron-Keyboards-Hardware-Design) |
| Topics | `3d-printing` `cad` `gaming` `gaming-keyboard` `gaming-mouse` `hardware-designs` `keyboard` `keyboard-firmware` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@keychron-dev](https://github.com/keychron-dev) | 262 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 6 |
> | [@lewis1017](https://github.com/lewis1017) | 3 |
> | [@codex](https://github.com/codex) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/docs) · [Discord](https://discord.com/invite/HAYbRrTsjN)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-14 ~ 2026-04-17）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #49 from Keychron/test

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#46](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/issues/46) | K7 Pro – ISO Layout Files Missing `enhancement` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Keychron Hardware Design
> 
> [](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
> [](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
> [](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/tree/main/docs)
> [](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
> 
> Production-grade hardware design files for Keychron keyboards and mice.
> 
> Study real CAD. Remix plates and cases. Design compatible accessories. Learn from how real products are built.
> 
> > This project is source-available. Personal and educational use is allowed. Original compatible accessories and add-ons are not subject to the commercial-use restriction in this license, but you may not copy and sell Keychron keyboards or mice, and you may not use Keychron trademarks as your own branding.
> 
> 
> ## Why This Matters
> 
> Making production hardware files available is a meaningful contribution to the broader hardware and keyboard community.
> 
> - It lowers the barrier to entry by giving hobbyists, students, and engineers real STEP and DXF files they can study, remix, and build from instead of starting from zero.
> - It expands what customization can mean. With access to case, plate, and component designs, the community can explore deeper hardware changes, new materials, structural tweaks, and original variations.
> - It offers real educational value. These are production-level designs, so people can learn from actual decisions around mounting systems, tolerances, and component integration.
> - It helps the ecosystem grow by enabling compatible accessories, modifications, and personal projects that build around existing designs.
> - It also reflects trust and transparency. Sharing internal design files signals confidence in the products and supports users as creators, not just customers.
> 
> The license is designed to support the ecosystem around Keychron products while still protecting Keychron's core hardware business. In practice, original compatible accessories and add-ons are not subject to the commercial-use restriction in this license, but copying and selling Keychron keyboards or mice, or trading on Keychron trademarks, is not allowed.
> 
> 
> ## Latest Updates
> 
> - **2026-04-14:** Added more P6 Ultra 8K, K10 QMK and B6 Pro files.
> - **2026-04-13:** Added P6 Ultra 8K, K2 QMK, K10 QMK files.
> - **2026-04-12:** Added V1 8K, V3 8K, V5 8K, and V6 8K series folders and README pages.
> - **2026-04-12:** Added V0 Ultra 8K, V1 Ultra 8K, V3 Ultra 8K, V5 Ultra 8K, V6 Ultra 8K, and V10 Ultra 8K series folders and README pages.
> - **2026-04-12:** Added Q1 HE 8K, Q2 HE 8K, Q3 HE 8K, Q5 HE 8K, Q6 HE 8K, and Q16 HE 8K series folders and README pages.
> - **2026-04-12:** Added Q1 Ultra 8K, Q3 Ultra 8K, Q5 Ultra 8K, and Q13 Ultra 8K series folders and README pages.
> - **2026-04-11:** Added C3 Pro 8K, K4 HE, K8 HE, K2 QMK, Q0 HE, and Q12 HE.
> - **2026-04-10:** Added more K0 Max files, Q12 HE and more Q6 Max files and more keycap profiles.
> - **2026-04-09:** Added K10 HE, Q6 Max and K0 Max design files. Update: make the accessories not subject to licensing.
> - **2026-04:** Added Q HE and mouse design files.
> - **2026-03:** Expanded K Max coverage.
> - More milestone updates will be published in [GitHub Releases](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/releases).
> 
> 
> ## Start Here
> 
> If you're new, begin with one of these paths:
> 
> - **Browse keyboard files**  
>   Explore C Pro 8K, Q, Q Pro, Q HE, Q Max, Q Ultra 8K, K Pro, K Max, K HE, K QMK, V Max, and P HE models.
> 
> - **Browse mouse files**  
>   Explore shell and full-model files for M and G series mice.
> 
> - **Open the files in CAD software**  
>   Read the [File Format Guide](docs/file-format-guide.md) for STEP, DWG, DXF, and PDF compatibility.
> 
> - **Learn how to remix or modify a design**  
>   Start with the [Getting Started Guide](docs/getting-started.md).
> 
> - **See the current filesystem inventory**  
>   Open the [Repository Inventory](docs/repo-inventory.md) generated from the repo itself.
> 
> - **Contribute fixes or improvements**  
>   Read [Contributing](docs/CONTRIBUTING.md) for workflow, file standards, and submission rules.
> 
> - **Join the community**  
>   Join the [Keychron Discord](https://discord.com/invite/HAYbRrTsjN) to share builds, ask questions, and help grow the hardware modding community.
> 
> - **Understand the license before building**  
>   Read the [License FAQ](docs/license-faq.md).
> 
> 
> ## What You Can Do With This Repository
> 
> - Study real industrial design and hardware packaging files
> - Create case, plate, and accessory remixes
> - Inspect dimensions, structure, and component integration
> - Build community mods and compatible add-ons
> - Contribute documentation, corrections, and new variants that fit the license
> 
> 
> ## What's Inside
> 
> | Series | Type | Models | Components |
> |---|---|---|---|
> | **C Pro 8K Series** | Keyboard | C1 Pro 8K, C2 Pro 8K, C3 Pro 8K | Case, Plate, Full Model, Stabilizer |
> | **Q Series** | Keyboard | Q0 Plus, Q1–Q12, Q60, Q65 | Case, Plate, Encoder, Full Model, Stabilizer, OSA Keycap |
> | **Q Pro Series** | Keyboard | Q1 Pro–Q14 Pro (10 models) | Case, Plate, Encoder, Full Model, Stabilizer, KSA Keycap |
> | **Q HE Series** | Hall Effect | Q0 HE, Q1 HE, Q2 HE, Q3 HE, Q4 HE, Q5 HE, Q6 HE, Q12 HE | Published files for selected models; newer Q HE folders also include README/model pages for future CAD uploads |
> | **Q HE 8K Series** | Hall Effect | Q1 HE 8K, Q2 HE 8K, Q3 HE 8K, Q5 HE 8K, Q6 HE 8K, Q16 HE 8K | README/model pages prepared for future CAD uploads |
> | **Q Max Series** | Keyboard | Q0 Max, Q1 Max, Q2 Max, Q3 Max, Q5 Max, Q6 Max, Q8 Max, Q10 Max, Q12 Max, Q13 Max, Q14 Max, Q15 Max | Published CAD files for Q6 Max; README/model pages prepared for the others |
> | **Q Ultra 8K Series** | Keyboard | Q1 Ultra 8K, Q3 Ultra 8K, Q5 Ultra 8K, Q6 Ultra 8K, Q13 Ultra 8K | Published plate files for Q6 Ultra 8K; README/model pages prepared for the others |
> | **K Pro Series** | Keyboard | K1 Pro–K17 Pro (16 models) | Case, Plate, Full Model, Stabilizer |
> | **K Max Series** | Keyboard | K0 Max, K1 Max, K2 Max, K3 Max, K4 Max, K5 Max, K7 Max, K8 Max, K9 Max, K10 Max, K11 Max, K13 Max, K15 Max, K17 Max | Case, Plate, Full Model, Stabilizer, Keycap on selected models; README/model pages prepared for K4 Max and K9 Max |
> | **K HE Series** | Hall Effect | K2 HE, K4 HE, K6 HE, K8 HE, K10 HE | Published models include case, plate, full model, stabilizer, and selected keycap files; K6 HE is currently folder-only |
> | **K QMK Series** | Keyboard | K1 QMK, K2 QMK, K3 QMK, K4 QMK, K5 QMK, K8 QMK, K10 QMK | Published CAD files for K2 QMK; README/model pages prepared for the others |
> | **L Series** | Keyboard | L1, L3 | Case, Plate, Knob, Full Model, Stabilizer |
> | **V 8K Series** | Keyboard | V1 8K, V3 8K, V5 8K, V6 8K | README/model pages prepared for future CAD uploads |
> | **V Ultra 8K Series** | Keyboard | V0 Ultra 8K, V1 Ultra 8K, V3 Ultra 8K, V5 Ultra 8K, V6 Ultra 8K, V10 Ultra 8K | README/model pages prepared for future CAD uploads |
> | **V Max Series** | Keyboard | V1 Max–V10 Max | Case, Plate, Encoder, Full Model, Stabilizer, OSA Keycap |
> | **P HE Series** | Hall Effect | P1 HE, P2 HE, P3 HE | Published files for P1 HE; README/model pages prepared for P2 HE and P3 HE |
> | **Mouse Series** | Mouse | M1–M7, G1, G2 (11 models) | Shell, Full Model |
> 
> **135 device models. 734+ design files. Source-available. Accessory-friendly.**
> 
> 
> ## Directory Structure
> 
> ```
> C-Pro-8K-Series/
>   C3 Pro 8K/            — Wired C Pro 8K hardware files, with C1 Pro 8K and C2 Pro 8K also present
> Q-Series/
>   Q0 Plus/              — Numpad files alongside Q1–Q12, Q60, and Q65
> Q-HE-Series/
>   Q0 HE/                — Hall Effect numpad files alongside Q1, Q2, Q3, Q4, Q5, Q6, and Q12 HE models
> Q-HE-8K-Series/
>   Q1 HE 8K/             — README and product page reference, ready for future CAD uploads alongside Q2, Q3, Q5, Q6, and Q16 HE 8K
> Q-Pro-Series/
>   Q1 Pro/               — Wireless Q-series hardware files across 10 models
> Q-Max-Series/
>   Q0 Max/               — README 

## 延伸閱讀

相關概念：[[3D 打印]] · [[硬體設計]] · [[開源硬體]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[alchaincyf--zhangxuefeng-skill|alchaincyf/zhangxuefeng-skill]]

[GitHub](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design) · [官方網站](https://www.keychron.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：硬體設計）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "硬體設計" AND file.name != "Keychron--Keychron-Keyboards-Hardware-Design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Keychron--Keychron-Keyboards-Hardware-Design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "Keychron--Keychron-Keyboards-Hardware-Design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "Keychron--Keychron-Keyboards-Hardware-Design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 打印","硬體設計","開源硬體"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Keychron--Keychron-Keyboards-Hardware-Design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Keychron--Keychron-Keyboards-Hardware-Design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Keychron" AND file.name != "Keychron--Keychron-Keyboards-Hardware-Design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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
> const me = dv.page("Repos/Keychron--Keychron-Keyboards-Hardware-Design");
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

> **2026-04-11** — 首次收錄
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

- [[2026-04-11|2026-04-11]] — 首次收錄，2.1k stars
