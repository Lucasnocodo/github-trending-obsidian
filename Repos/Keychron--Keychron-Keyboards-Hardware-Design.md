---
repo: Keychron/Keychron-Keyboards-Hardware-Design
url: https://github.com/Keychron/Keychron-Keyboards-Hardware-Design
owner: Keychron
owner_type: Organization
language: Python
license: NOASSERTION
description: "Industrial design files for Keychron keyboards and mice. 100+ models with CAD assets in STEP, DXF, DWG, and PDF. Source-available, with commercial use allowed for original compatible accessories within the license terms."
homepage: "https://www.keychron.com/"
stars: 2145
stars_per_day: 358
forks: 155
open_issues: 4
created: 2026-04-04
pushed_at: 2026-04-10
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "硬體設計"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "提供 Keychron 鍵盤和滑鼠的工業設計檔案，包含 100 多個模型的 CAD 資產。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-14"
contributor_count: 3
engagement: "low"
issue_close_rate: 69
repo_size_kb: 952374
readme_length: 8752
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2145"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - org
  - "topic/3d_printing"
  - "topic/cad"
  - "topic/gaming"
  - "topic/gaming_keyboard"
  - "topic/gaming_mouse"
aliases:
  - "Keychron-Keyboards-Hardware-Design"
  - "Keychron/Keychron-Keyboards-Hardware-Design"
  - "提供 Keychron 鍵盤和滑鼠的工業設計檔案，包含 100 多個模型的 CAD 資產。"
---

# Keychron-Keyboards-Hardware-Design

**2.1k** stars · **358** stars/天 · 建立 6 天前 · Python · NOASSERTION

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

`ORG`

`3d-printing` `cad` `gaming` `gaming-keyboard` `gaming-mouse` `hardware-designs` `keyboard` `keyboard-firmware` `keychron` `mechanical-keyboard` `mouse` `qmk` `qmk-firmware` `zephyr` `zmk` `zmk-firmware`

> [!summary] 一句話摘要
> 提供 Keychron 鍵盤和滑鼠的工業設計檔案，包含 100 多個模型的 CAD 資產。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (358 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 對鍵盤設計和改裝有興趣的硬體愛好者和工程師。
> **一句話重點** 這個專案不僅提供設計檔案，更是促進硬體設計社群成長的重要資源。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，能夠獲得豐富的設計資源，值得投入。

> [!abstract] 核心創新
> 這個專案提供了開放的硬體設計檔案，讓使用者能夠學習和改編真實的工業設計。

## 專案簡介

這個專案提供了 Keychron 鍵盤和滑鼠的生產級硬體設計檔案，讓使用者可以研究、改編和製作兼容的配件。用戶可以從 CAD 檔案中學習實際的設計決策，並利用這些資源製作自定義的外殼、底板和配件。透過指令如 `repo_inventory.py`，使用者能夠生成當前的檔案庫，並且可以使用 STEP、DXF、DWG 和 PDF 格式的檔案進行設計。這個專案的賣點在於它降低了進入門檻，讓愛好者和學生能夠接觸到真實的設計檔案，進而促進硬體社群的成長。技術上，這些檔案的開放性設計使得社群能夠探索更深層的硬體變更和創新，並且提供了實際的教育價值。

與其他專案相比，如 0xGF/boneyard 和 AlpinDale/parsync，這個專案專注於鍵盤和滑鼠的設計，並且支持商業用途的兼容配件，這在硬體設計領域中是相對少見的。使用者可以在 Keychron Discord 社群中交流和分享他們的設計，這進一步增強了社群的互動性和支持。這個專案的活躍度相對較高，最近的更新顯示出持續的維護和增長。對於想要進行硬體設計或改裝的開發者來說，這是一個非常值得考慮的資源。

**技術棧**：`Python`

## 重點功能

- 多種檔案格式 — 提供 STEP、DXF、DWG 和 PDF 格式的設計檔案，方便不同需求的使用者。
- 兼容配件設計 — 允許商業用途的兼容配件，促進社群創新。
- 豐富的模型庫 — 包含 100 多個鍵盤和滑鼠模型，滿足各種設計需求。
- 社群支持 — 提供 Discord 社群平台，讓使用者交流和分享設計。
- 詳細的文件指引 — 包含檔案格式指南和入門指南，幫助新手快速上手。

## 快速開始

1. 克隆庫
```bash
git clone https://github.com/Keychron/Keychron-Keyboards-Hardware-Design.git
```
2. 查看檔案
```bash
cd Keychron-Keyboards-Hardware-Design
```
3. 生成檔案庫
```bash
python scripts/repo_inventory.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 2145 stars（358/天），forks 155（7.2%），這顯示出強烈的社群興趣。這個專案由 Keychron 團隊開發，他們在鍵盤市場上已有良好的聲譽，並且提供了之前沒有的開放設計檔案，讓使用者能夠自定義和改裝硬體。這樣的開放性設計在硬體領域中相對少見，吸引了許多愛好者和設計師的關注。社群的活躍度和持續的更新也促進了使用者的參與和貢獻。

## 適合誰使用

**目標受眾**：對鍵盤設計和改裝有興趣的硬體愛好者和工程師。

> [!example] 使用場景
> - 硬體設計師用它來研究 Keychron 鍵盤的設計，因為可以直接獲得真實的 CAD 檔案，降低了設計的學習曲線。
> - 學生用它來學習工業設計，因為可以從實際的設計檔案中獲得靈感，並進行改編和實驗。
> - DIY 鍵盤愛好者用它來製作兼容的配件，因為這些設計檔案支持商業用途，能夠創造獨特的產品。

## 架構分析

這個專案的架構基於開放的硬體設計檔案，使用者可以通過 CAD 軟體來查看和修改這些檔案。設計選擇上，專案使用了多種檔案格式（如 STEP 和 DXF），以便於不同的設計需求。這樣的選擇使得使用者能夠在不同的環境中使用這些檔案，但也增加了學習的複雜度。擴展性方面，這些檔案的開放性設計使得社群能夠創造兼容的配件，進一步增強了生態系統的發展。整體而言，這個專案的設計考量了使用者的需求和社群的參與，並且在商業用途上保持了合理的限制。

## 技術深入分析

這個專案的核心技術機制在於提供開放的 CAD 檔案，使用者可以透過 STEP 和 DXF 格式進行設計和修改。這些檔案的設計考量了實際的生產需求，讓使用者能夠學習到真實的工業設計原則。效能方面，這些檔案的大小和複雜度取決於具體的模型，使用者需要一定的計算資源來處理大型檔案。設計選擇上，使用 Python 進行檔案管理和生成，這使得整體架構相對輕量，但對於不熟悉 Python 的使用者來說，可能會增加學習成本。技術風險方面，隨著社群的擴展，如何保持檔案的質量和一致性將是未來的一個挑戰。整合方面，這些檔案可以與主流的 CAD 軟體兼容，但使用者需要根據具體的需求進行調整，這可能會造成一定的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指引和範例，安裝過程相對順暢。新手可以通過入門指南快速上手，並且文件有多語言支持，降低了學習門檻。

## 優缺點分析

> [!success] 優點
> - 提供多種檔案格式，方便不同使用者使用。
> - 社群支持強大，能夠獲得即時幫助和建議。
> - 開放的設計促進了創新和自定義的可能性。

> [!danger] 缺點
> - 商業用途受到限制，無法直接販售設計檔案。
> - 對於新手來說，學習曲線可能較陡峭。
> - 缺乏對特定硬體的全面支持，可能需要額外的調整。

> [!warning] 注意事項
> - 不允許複製和銷售 Keychron 鍵盤或滑鼠。
> - 不支援對 Keychron 商標的使用。
> - 檔案僅限於個人和教育用途，商業用途需遵循授權條款。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於鍵盤的設計和改裝，但不提供如此多的模型和檔案格式。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供硬體設計檔案，但主要針對特定的設備，功能範圍較窄。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於鍵盤的設計和改裝，但不提供如此多的模型和檔案格式。 | 如果你需要專注於特定鍵盤的設計，並且不需要多種檔案格式。 | medium，因為需要重新適應不同的檔案結構和格式。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供硬體設計檔案，但主要針對特定的設備，功能範圍較窄。 | 如果你的需求非常專注於某一特定設備的設計，這可能是更合適的選擇。 | low，因為檔案格式和結構相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Keychron-Keyboards-Hardware-Design** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於鍵盤的設計和改裝，但不提供如此多的模型和檔案格式。 | 提供硬體設計檔案，但主要針對特定的設備，功能範圍較窄。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的檔案結構和格式。 | low，因為檔案格式和結構相對簡單。 |
> | 適用場景 | 主要場景 | 如果你需要專注於特定鍵盤的設計，並且不需要多種檔案格式。 | 如果你的需求非常專注於某一特定設備的設計，這可能是更合適的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人學習和實驗，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些模型的檔案可能缺失，需手動查找或請求更新。
  - 解法：在 GitHub 提交問題，等待社群回應。
- [MEDIUM] 對於新手來說，檔案格式的多樣性可能造成混淆。
  - 解法：參考文件中的檔案格式指南。
- **[HIGH]** 商業用途的限制可能影響某些使用者的需求。
  - 解法：確保遵循授權條款，並尋求兼容的設計方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行硬體設計 | 非常適合 | 提供了豐富的設計資源，能夠快速上手。 |
| 大型企業進行生產級硬體設計 | 不適合 | 商業用途受到限制，無法直接販售設計檔案。 |
| 學生進行工業設計學習 | 非常適合 | 提供真實的設計檔案，能夠學習到實際的設計原則。 |
| DIY 鍵盤愛好者進行自定義設計 | 適合 | 開放的設計檔案支持創新和自定義。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠獲得豐富的設計資源，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該專案不需要高權限，且不存取敏感資料，適合在 CI/CD 中使用。

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
| Forks | 155 |
| Open Issues | 4 |
| Issue 解決率 | 69% (9 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-04-04 |
| 官方網站 | [Link](https://www.keychron.com/) |
| Repo 大小 | 930.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Keychron/Keychron-Keyboards-Hardware-Design) |
| Topics | `3d-printing` `cad` `gaming` `gaming-keyboard` `gaming-mouse` `hardware-designs` `keyboard` `keyboard-firmware` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@keychron-dev](https://github.com/keychron-dev) | 200 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 3 |
> | [@codex](https://github.com/codex) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和互動。
**連結**：[文件](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/docs) · [Discord](https://discord.com/invite/HAYbRrTsjN)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-10 ~ 2026-04-10）
> **活躍天數** 1 天 · **最新 commit** add keycap photo

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/issues/40) | Missing files for K8 HE `enhancement` | 0 | 1 |
> | [#39](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/issues/39) | Q0 HE `enhancement` | 0 | 1 |
> | [#38](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/issues/38) | No files for K4 HE `enhancement` | 0 | 1 |
> | [#35](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/issues/35) | Add files for the K10 wireless keyboard `enhancement` | 0 | 1 |

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
> > This project is source-available. Personal and educational use is allowed, and commercial use is allowed for compatible accessories. You may not copy and sell Keychron keyboards or mice, and you may not use Keychron trademarks as your own branding.
> 
> ## Latest Updates
> 
> - **2026-04-10:** Added more K0 Max files, Q12 HE and more Q6 Max files and more keycap profiles.
> - **2026-04-09:** Added K10 HE, Q6 Max and K0 Max design files. Update: make the accessories not subject to licensing.
> - **2026-04:** Added Q HE and mouse design files.
> - **2026-03:** Expanded K Max coverage.
> - More milestone updates will be published in [GitHub Releases](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/releases).
> 
> ## Start Here
> 
> If you're new, begin with one of these paths:
> 
> - **Browse keyboard files**  
>   Explore C Pro, Q, Q Pro, Q HE, Q Max, Q Ultra 8K, K Pro, K Max, K HE, V Max, and P HE models.
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
>   Read [Contributing](CONTRIBUTING.md) for workflow, file standards, and submission rules.
> 
> - **Join the community**  
>   Join the [Keychron Discord](https://discord.com/invite/HAYbRrTsjN) to share builds, ask questions, and help grow the hardware modding community.
> 
> - **Understand the license before building**  
>   Read the [License FAQ](docs/license-faq.md).
> 
> ## What You Can Do With This Repository
> 
> - Study real industrial design and hardware packaging files
> - Create case, plate, and accessory remixes
> - Inspect dimensions, structure, and component integration
> - Build community mods and compatible add-ons
> - Contribute documentation, corrections, and new variants that fit the license
> 
> ## What's Inside
> 
> | Series | Type | Models | Components |
> |---|---|---|---|
> | **C Pro Series** | Keyboard | C3 Pro | Plate, Full Model |
> | **Q Series** | Keyboard | Q0 Plus, Q1–Q12, Q60, Q65 | Case, Plate, Encoder, Full Model, Stabilizer, OSA Keycap |
> | **Q Pro Series** | Keyboard | Q1 Pro–Q14 Pro (10 models) | Case, Plate, Encoder, Full Model, Stabilizer, KSA Keycap |
> | **Q HE Series** | Hall Effect | Q1 HE, Q3 HE, Q5 HE, Q6 HE, Q12 HE | Plate, Full Model, selected case parts |
> | **Q Max Series** | Keyboard | Q6 Max | Case, Plate, Full Model, Stabilizer |
> | **Q Ultra 8K Series** | Keyboard | Q6 Ultra 8K | Plate |
> | **K Pro Series** | Keyboard | K1 Pro–K17 Pro (16 models) | Case, Plate, Full Model, Stabilizer |
> | **K Max Series** | Keyboard | K0 Max, K1 Max–K17 Max (12 models) | Case, Plate, Full Model, Stabilizer, Keycap on selected models |
> | **K HE Series** | Hall Effect | K2 HE–K10 HE | Case, Plate, Full Model, Stabilizer, Keycap (K2 HE; other models pending) |
> | **L Series** | Keyboard | L1, L3 | Case, Plate, Knob, Full Model, Stabilizer |
> | **V Max Series** | Keyboard | V1 Max–V10 Max | Case, Plate, Encoder, Full Model, Stabilizer, OSA Keycap |
> | **P HE Series** | Hall Effect | P1 HE | Case, Plate, Full Model, Stabilizer, Keycap |
> | **Mouse Series** | Mouse | M1–M7, G1, G2 (11 models) | Shell, Full Model |
> 
> **88 device models. 686+ design files. Source-available. Accessory-friendly.**
> 
> ## Directory Structure
> 
> ```
> C-Pro-Series/
>   C3 Pro/               — Plate and full-model files for the C3 Pro
> Q-Series/
>   Q0 Plus/              — Numpad files alongside Q1–Q12, Q60, and Q65
> Q-HE-Series/
>   Q12 HE/               — Hall Effect files alongside Q1 HE, Q3 HE, Q5 HE, and Q6 HE
> Q-Pro-Series/
>   Q1 Pro/               — Wireless Q-series hardware files across 10 models
> Q-Max-Series/
>   Q6 Max/               — Wireless Q-series case, plate, full model, and stabilizer files
> Q-Ultra-8K-Series/
>   Q6 Ultra 8K/          — Ultra 8K plate files
> K-Pro-Series/
>   K1 Pro/               — Low-profile and standard K Pro models through K17 Pro
>   K8 Pro/               — Example model folder with `K8-Pro-Keycap.stp`
> K-Max-Series/
>   K0 Max/               — Numpad files alongside K1 Max–K17 Max keyboard models
> K-HE-Series/
>   K2 HE/                — Example model folder with Cherry and OSA keycap STEP files
> V-Max-Series/
>   V1 Max/               — Tri-mode keyboard hardware files across V1–V10 Max
> P-HE-Series/
>   P1 HE/                — Lemokey Hall Effect keyboard files
> L-Series/
>   L1/                   — Aluminum keyboard files with plate, case, knob, and stabilizers
> Mice/
>   M1/                   — Shell and full model
> Keycap Profiles/
>   Cherry Profile/       — Reference profile docs alongside KSA, LSA, MDA, OEM, and OSA
> docs/
>   file-format-guide.md  — How to open and edit these files
>   getting-started.md    — First-stop guide for browsing and remixing
>   3d-printing-guide.md  — Practical printing guidance for compatible parts
> scripts/
>   repo_inventory.py     — Regenerates the repository inventory from the live tree
> ```
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
> The license is designed to support the ecosystem around Keychron products while still protecting Keychron's core hardware business. In practice, that means compatible accessories and add-ons can grow around the platform, but copying and selling Keychron keyboards or mice, or trading on Keychron trademarks, is not allowed.
> 
> ## Contributing
> 
> **Ways to contribute:**
> - Fix dimensional errors or tolerances in existing models
> - Add ISO layout plate variants
> - Improve documentation and guides
> - Report issues with downloaded files
> 
> **Note:** This project is source-available with limited commercial use for compatible accessories. By contributing, you agree your work falls under the same license.
> 
> ## License
> 
> This project is **source-available**. The files may be used for personal and educational work, and for commercial compatible accessories as described in the license.
> 
> **You may not use these files to copy, manufacture, sell, or distribute Keychron keyboards or mice, or substantially similar products, and you may not use Keychron trademarks as your own branding.** Commercial accessory use is allowed within the limits of the license.
> 
> See the [LICENSE](LICENSE) file for full terms.
> 
> ## Links
> 
> - [Keychron Website](https://www.keychron.com)
> - [Open Source Design Center](https://www.keychron.com/collections/keychron-open-source)
> 

## 延伸閱讀

相關概念：[[3D 打印]] · [[硬體設計]] · [[開源設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[alchaincyf--zhangxuefeng-skill|alchaincyf/zhangxuefeng-skill]]

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
> WHERE language = "Python" AND file.name != "Keychron--Keychron-Keyboards-Hardware-Design" AND status != "archived"
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
> const concepts = ["3D 打印","硬體設計","開源設計"];
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
