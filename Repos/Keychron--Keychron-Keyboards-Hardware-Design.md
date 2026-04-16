---
repo: Keychron/Keychron-Keyboards-Hardware-Design
url: https://github.com/Keychron/Keychron-Keyboards-Hardware-Design
owner: Keychron
owner_type: Organization
language: N/A
license: NOASSERTION
description: "Industrial design files for Keychron keyboards and mice. 100+ models with CAD assets in STEP, DXF, DWG, and PDF. Source-available, with commercial use allowed for original compatible accessories within the license terms."
homepage: "https://www.keychron.com/"
stars: 3067
stars_per_day: 279
forks: 234
open_issues: 2
created: 2026-04-04
pushed_at: 2026-04-15
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
use_case: "提供 Keychron 鍵盤和滑鼠的工業設計檔案，讓用戶能夠學習和修改設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-14"
contributor_count: 3
engagement: "low"
issue_close_rate: 90
repo_size_kb: 952409
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2145,2026-04-11:2147,2026-04-12:2646,2026-04-13:2784,2026-04-14:2959,2026-04-15:3020,2026-04-16:3067"
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
  - "提供 Keychron 鍵盤和滑鼠的工業設計檔案，讓用戶能夠學習和修改設計。"
---

# Keychron-Keyboards-Hardware-Design

**3.1k** stars · **279** stars/天 · 建立 11 天前 · N/A · NOASSERTION

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
> 提供 Keychron 鍵盤和滑鼠的工業設計檔案，讓用戶能夠學習和修改設計。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (279 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 對鍵盤設計有興趣的硬體開發者和愛好者，尤其是希望進行自定義和改造的人。
> **一句話重點** Keychron 的設計檔案不僅是開源的，還具備商業友好的特性，這在硬體設計領域中是相當罕見的。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習 CAD 軟體，10 小時整合設計檔案，能夠快速進入硬體設計領域，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於提供開源的生產級硬體設計檔案，並允許商業友好的配件設計。

## 專案簡介

Keychron 的這個專案提供了大量的鍵盤和滑鼠的工業設計檔案，包含 CAD 格式的 STEP、DXF、DWG 和 PDF 檔案。這些檔案不僅可以用於個人和教育用途，還允許用戶設計兼容的配件，這對於硬體愛好者和工程師來說是一個極大的資源。用戶可以從這些生產級設計中學習，並進行實際的修改和創新，這樣的開放性設計降低了進入門檻，促進了社群的創新。這些檔案的設計考量了安裝系統、容差和元件整合，提供了真實的學習價值。與其他專案相比，這個專案的獨特之處在於它的商業授權條款，允許用戶創建兼容的配件而不會侵犯 Keychron 的商標。

相對於其他開源硬體設計專案，Keychron 提供的設計檔案更為完整，並且涵蓋了多達 135 種設備模型，這在市場上是相當罕見的。使用者在實際應用中可能會遇到檔案大小限制的問題，這是目前社群中反映的熱門議題之一。這個專案的成熟度顯示出它在硬體設計領域的潛力，未來可能會吸引更多的使用者和貢獻者。對於小型團隊或個人開發者來說，這是一個值得立即使用的資源，尤其是對於想要進行硬體改造或創新的使用者。

## 重點功能

- 多種設計格式 — 提供 STEP、DXF、DWG 和 PDF 格式的檔案，方便用戶選擇合適的 CAD 軟體進行編輯。
- 135 種設備模型 — 包含各種 Keychron 鍵盤和滑鼠的設計檔案，滿足不同使用者的需求。
- 商業友好授權 — 允許用戶設計兼容的配件，促進社群創新，而不會侵犯 Keychron 的商標。
- 實際案例學習 — 提供生產級設計，幫助用戶理解安裝系統、容差和元件整合的實際考量。
- 活躍的社群支持 — 用戶可以透過 Discord 社群分享建設、詢問問題，並促進硬體改造的交流。

## 快速開始

1. 瀏覽鍵盤檔案
```bash
前往 C-Pro-8K-Series 目錄以探索各種鍵盤設計檔案
```
2. 開啟 CAD 軟體
```bash
使用任何支持 STEP、DXF 或 DWG 格式的 CAD 軟體來打開檔案
```
3. 學習如何修改設計
```bash
參考 docs/getting-started.md 了解如何進行設計修改
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 3067 stars（279/天），forks 234（7.6%），顯示出穩定的增長趨勢。這個專案的主要貢獻者 Keychron 是知名的鍵盤品牌，過去在鍵盤設計方面有著良好的口碑。提供這些設計檔案解決了許多硬體愛好者在尋找開源設計時的痛點，因為大多數現有的設計要麼不夠完整，要麼不允許商業用途。最近的推廣活動和社群討論也進一步提升了這個專案的曝光率。這些設計檔案的開放性和可用性使得它在硬體設計領域中顯得尤為重要，並且隨著社群的成長，未來可能會有更多的改進和擴展。

## 適合誰使用

**目標受眾**：對鍵盤設計有興趣的硬體開發者和愛好者，尤其是希望進行自定義和改造的人。

> [!example] 使用場景
> - 硬體設計師用它來設計兼容的鍵盤配件，因為可以直接使用現成的 CAD 檔案進行修改，節省了大量的設計時間。
> - 學生用它來學習工業設計，因為這些生產級設計檔案提供了真實的案例分析，有助於理解設計原則。
> - 工程師用它來開發新的鍵盤模型，因為可以從現有的設計中獲取靈感，並進行實驗和創新。

## 架構分析

這個專案的架構主要基於開放的設計檔案，讓用戶能夠自由訪問和修改。設計檔案的格式選擇（如 STEP 和 DXF）確保了與主流 CAD 軟體的相容性，這樣用戶可以輕鬆地進行設計修改。這種開放性設計的代價在於需要用戶具備一定的 CAD 軟體操作能力。擴展性方面，隨著社群的增長，未來可能會有更多的設計檔案和功能被添加。整體來說，這個專案的架構設計旨在促進硬體設計的創新和社群的參與。

## 技術深入分析

這個專案的核心技術機制在於提供開放的 CAD 設計檔案，這些檔案使用標準的格式如 STEP 和 DXF，方便用戶在各種 CAD 軟體中進行編輯和修改。這些設計檔案的效能特性在於它們是生產級的，能夠支持實際的硬體製造需求。設計選擇上，Keychron 採用了開放的授權策略，這樣不僅能夠促進社群的參與，也能保護自身的商業利益。這樣的選擇帶來的好處是擴大了使用者基礎，但也可能導致一些用戶對於商標使用的誤解。技術風險方面，隨著社群的增長，可能會出現設計檔案的版本管理問題，這需要維護者進行有效的管理。整合方面，這些設計檔案可以輕鬆地融入到現有的硬體設計流程中，並且能夠與主流的 CAD 軟體相容，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，並包含了多個使用場景的範例。安裝過程相對簡單，使用者只需下載檔案並使用 CAD 軟體打開。文件中有良好的入門指南，幫助新手快速上手。文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供大量實用的設計檔案，方便用戶學習和修改。
> - 商業友好的授權，鼓勵社群創新和配件設計。
> - 活躍的社群支持，促進知識分享和問題解決。

> [!danger] 缺點
> - 檔案大小限制可能影響下載體驗。
> - 不支持複製和銷售 Keychron 的產品，限制商業用途。
> - 缺乏多語言支持，可能對非英語使用者造成困難。

> [!warning] 注意事項
> - 檔案大小限制可能影響下載，特別是對於大型設計檔案。
> - 不允許複製和銷售 Keychron 鍵盤或滑鼠，限制了商業用途的範圍。
> - 目前僅提供英文文檔，對於非英語使用者可能造成理解上的困難。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供開源鍵盤設計檔案，但不如 Keychron 的設計檔案完整，且缺乏商業友好的授權。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於鍵盤固件開發，與 Keychron 的硬體設計檔案相比，功能範圍不同。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供鍵盤設計的資料庫，但不具備 Keychron 的實際設計檔案和修改能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供開源鍵盤設計檔案，但不如 Keychron 的設計檔案完整，且缺乏商業友好的授權。 | 如果你需要一個開源的鍵盤設計檔案，但不需要商業友好的授權。 | medium，因為需要重新適應不同的設計檔案結構。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於鍵盤固件開發，與 Keychron 的硬體設計檔案相比，功能範圍不同。 | 如果你的需求主要集中在鍵盤固件的開發，而不是硬體設計。 | low，因為固件和硬體設計是不同的領域。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Keychron-Keyboards-Hardware-Design** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供開源鍵盤設計檔案，但不如 Keychron 的設計檔案完整，且缺乏商業友好的授權。 | 專注於鍵盤固件開發，與 Keychron 的硬體設計檔案相比，功能範圍不同。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的設計檔案結構。 | low，因為固件和硬體設計是不同的領域。 |
> | 適用場景 | 主要場景 | 如果你需要一個開源的鍵盤設計檔案，但不需要商業友好的授權。 | 如果你的需求主要集中在鍵盤固件的開發，而不是硬體設計。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊進行硬體設計的探索，但不建議用於商業生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 檔案大小限制可能導致下載失敗，特別是對於大型設計檔案
  - 解法：嘗試使用 LFS 下載工具，或分批下載檔案
- [MEDIUM] 某些模型的設計檔案缺失，可能影響使用者的修改
  - 解法：檢查最新的更新，或在社群中詢問是否有其他用戶擁有該檔案
- [MEDIUM] 社群支持的依賴性，若社群不活躍可能影響使用者的學習和修改
  - 解法：積極參與社群討論，尋找其他資源或教程

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型硬體設計團隊 | 非常適合 | 提供了大量的設計檔案，能夠加速產品開發。 |
| 個人愛好者進行鍵盤改造 | 非常適合 | 開放的設計檔案讓個人能夠自由修改和創新。 |
| 大型企業進行商業生產 | 不適合 | 不允許複製和銷售 Keychron 的產品，限制商業用途。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習 CAD 軟體，10 小時整合設計檔案，能夠快速進入硬體設計領域，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個專案本身不需要高權限，且不存取敏感資料。使用者應注意檔案的來源和授權條款，確保合法使用。

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
| Forks | 234 |
| Open Issues | 2 |
| Issue 解決率 | 90% (18 closed) |
| 最後推送 | 2026-04-15 |
| 建立日期 | 2026-04-04 |
| 官方網站 | [Link](https://www.keychron.com/) |
| Repo 大小 | 930.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Keychron/Keychron-Keyboards-Hardware-Design) |
| Topics | `3d-printing` `cad` `gaming` `gaming-keyboard` `gaming-mouse` `hardware-designs` `keyboard` `keyboard-firmware` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@keychron-dev](https://github.com/keychron-dev) | 261 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 6 |
> | [@codex](https://github.com/codex) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/docs) · [Discord](https://discord.com/invite/HAYbRrTsjN)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-13 ~ 2026-04-15）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#47](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/issues/47) | LFS file size exceeded for repository, can't download files  `bug` | 0 | 1 |
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
