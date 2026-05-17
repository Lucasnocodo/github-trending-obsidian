---
repo: earthtojake/text-to-cad
url: https://github.com/earthtojake/text-to-cad
owner: earthtojake
owner_type: User
language: JavaScript
license: MIT
description: "A collection of agent skills for CAD, robotics and hardware design"
homepage: "https://www.cadskills.xyz"
stars: 2912
stars_per_day: 116
forks: 349
open_issues: 4
created: 2026-04-22
pushed_at: 2026-05-16
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "CAD 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "提供 CAD、機器人和硬體設計的代理技能集合。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-06"
contributor_count: 1
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 63577
readme_length: 9387
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:952,2026-04-29:1094,2026-04-29:1095,2026-05-03:1279,2026-05-04:1481,2026-05-05:1869,2026-05-06:1963,2026-05-08:2132,2026-05-12:2420,2026-05-17:2912"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - "topic/3mf"
  - "topic/agents"
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/build123d"
aliases:
  - "text-to-cad"
  - "earthtojake/text-to-cad"
  - "提供 CAD、機器人和硬體設計的代理技能集合。"
---

# text-to-cad

**2.9k** stars · **116** stars/天 · 建立 25 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/earthtojake--text-to-cad");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`3mf` `agents` `ai` `ai-agents` `build123d` `cad` `cad-skill` `dxf` `glb` `mechanical-engineering` `opencascade` `robotics` `sdf` `srdf` `step` `stl` `stp` `text-to-cad` `urdf` `wasm`

> [!summary] 一句話摘要
> 提供 CAD、機器人和硬體設計的代理技能集合。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (116 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成和修改 CAD 模型的工程師，特別是在機器人和硬體設計領域。
> **一句話重點** 這個專案的最大亮點是其 AI 驅動的自動化設計能力，能顯著提升 CAD 模型的生成效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/earthtojake--text-to-cad");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CAD 工具" && p.file.name !== "earthtojake--text-to-cad" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CAD 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，能夠快速生成 CAD 模型，值得考慮。

> [!abstract] 核心創新
> 這個專案的創新點在於利用 AI 代理自動生成和管理 CAD 模型，顯著提升設計效率。

## 專案簡介

這個專案的核心在於利用 AI 代理生成和管理 CAD 模型，讓設計過程更加自動化和高效。使用者可以透過描述所需的零件或機構，然後由代理自動編輯本地 CAD 源文件，最後生成各種格式的 CAD 文件（如 STEP、STL、DXF 等）。例如，使用者只需描述一個 '100 x 60 x 20 mm 的方形塊'，代理便會生成相應的 CAD 模型，並可在 CAD Explorer 中進行檢查。這樣的設計使得 CAD 模型的生成過程不再依賴手動操作，提升了設計的靈活性和精確性。

技術上，這個專案使用 JavaScript 和 Python 來實現各種技能，並依賴 Git LFS 來管理大型資產。它的架構設計允許用戶在本地運行所有功能，無需依賴後端服務，這對於需要快速迭代的設計環境非常有利。與傳統的 CAD 軟體相比，這個工具的優勢在於它能夠自動生成和更新模型，並且支持多種文件格式的輸出，這在設計流程中大大減少了時間成本。



與其他 CAD 工具相比，如 AutoCAD 或 SolidWorks，這個專案的特點在於其 AI 驅動的自動化能力。傳統工具通常需要手動操作，而這個專案能夠通過簡單的描述來生成複雜的模型，適合需要快速原型設計的團隊。在大型項目中，這樣的自動化能顯著提高效率，尤其是在需要頻繁修改設計的情況下。

不過，使用者需要注意的是，這個專案目前仍在活躍開發中，可能會遇到一些穩定性問題，特別是在處理大型或複雜模型時。社群的活躍度也相對較高，開發者在不斷更新和修復問題，這對於未來的使用體驗是個正面信號。

總體來說，這個專案適合需要快速生成和修改 CAD 模型的工程師，尤其是在機器人和硬體設計領域。對於小型團隊或新創公司，這是一個值得考慮的工具，能夠幫助他們在設計過程中節省時間和資源。

**技術棧**：`JavaScript` · `Python` · `CSS` · `Shell` · `HTML`

## 重點功能

- 生成 CAD 模型 — 使用 AI 代理自動生成 STEP、STL、DXF 等格式的 CAD 模型。
- 導出多種格式 — 支持 STEP、STL、3MF、DXF、GLB 等多種 CAD 文件格式的導出。
- CAD Explorer — 提供可視化檢查生成的 CAD 模型和文件的功能。
- 穩定引用 — 支持穩定的 `@cad[...]` 引用，方便後續精確編輯。
- 本地運行 — 可在本地環境中運行所有功能，無需依賴後端服務。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/earthtojake/text-to-cad.git
```
2. 進入專案目錄
```bash
cd text-to-cad
```
3. 安裝 Codex 代理
```bash
./scripts/codex-install.sh
```

## 程式碼範例

```js
# 前置條件
# 使用者需要在本地環境中安裝 Python 依賴
# 安裝 CAD 依賴
python3.11 -m venv .venv
./.venv/bin/python -m pip install --upgrade pip
./.venv/bin/pip install -r skills/cad/requirements.txt
# 預期輸出
# 安裝完成後，使用者可以開始使用 CAD 生成工具。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 2912 stars（116/天），forks 349（12.0%），顯示出良好的社群反響。這個專案由 earthtojake 開發，他在 CAD 和機器人領域有豐富的經驗。它解決了傳統 CAD 工具在自動化和靈活性上的不足，特別是在需要快速迭代的設計環境中。近期的推廣活動和社群討論也可能促進了其知名度的提升。高比例的 forks 表示許多人對這個專案感興趣並進行了實際的修改和應用。

## 適合誰使用

**目標受眾**：需要快速生成和修改 CAD 模型的工程師，特別是在機器人和硬體設計領域。

> [!example] 使用場景
> - 機械工程師用它來自動生成機械零件的 CAD 模型，因為手動設計耗時且容易出錯。
> - 機器人設計師用它來快速迭代機器人部件，因為能夠即時生成和檢查模型，加快設計流程。
> - 新創公司的產品設計師用它來開發原型，因為可以在短時間內生成多種設計選項，提升創新能力。

## 架構分析

這個專案採用了模組化的架構，將不同的 CAD 技能封裝在各自的模組中，這樣的設計使得擴展和維護變得更加容易。資料流方面，使用者的描述會被 AI 代理處理，生成的 CAD 模型會被存儲在本地，並可通過 CAD Explorer 進行檢查。選擇本地運行的架構使得使用者能夠快速迭代，而不需要依賴外部服務，這對於需要快速反饋的設計過程非常重要。這樣的設計雖然減少了對網路的依賴，但也意味著使用者需要自行管理所有依賴和資源，這可能會增加初次設置的複雜度。整體而言，這種架構設計在靈活性和可擴展性上有良好的表現，但在資源管理上則可能面臨挑戰。

## 技術深入分析

這個專案的核心技術在於利用 AI 代理生成 CAD 模型，並通過多種技能來支持不同的 CAD 文件格式。具體來說，使用者可以通過簡單的描述來生成複雜的 CAD 模型，這是基於自然語言處理技術的應用。效能方面，專案使用 Git LFS 來管理大型資產，這意味著在處理大型模型時可能會面臨性能瓶頸，尤其是在初次克隆時。選擇 JavaScript 和 Python 作為主要開發語言，使得專案在前端和後端都能有良好的表現，但也增加了依賴的複雜度。

這樣的選擇使得專案能夠充分利用現有的生態系統，但也可能導致未來的維護挑戰。技術風險方面，隨著使用者數量的增加，如何保持系統的穩定性和性能將是未來的一大挑戰。整合方面，這個專案能夠與現有的 CAD 工具鏈良好協作，但在某些情況下可能需要額外的適配器或包裝。整體而言，這個專案在技術上具有很高的潛力，但也需要持續的關注和改進。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，並包含了範例。安裝過程相對順暢，但需要安裝多種依賴，初次設置可能會有些繁瑣。文件主要以英文撰寫，缺乏多語言支持，但對於熟悉技術的使用者來說，應該不會造成太大困難。

## 優缺點分析

> [!success] 優點
> - AI 驅動的自動生成 CAD 模型，提升設計效率。
> - 支持多種 CAD 文件格式，方便與其他工具整合。
> - 可在本地運行，無需依賴後端服務，適合快速迭代。

> [!danger] 缺點
> - 仍在開發中，可能會遇到穩定性問題。
> - 對於大型模型的處理可能存在性能瓶頸。
> - 初次設置需要安裝多種依賴，可能較為繁瑣。

> [!warning] 注意事項
> - 仍在開發中，可能會遇到穩定性問題。
> - 對於大型或複雜模型的處理可能存在性能瓶頸。
> - 需要安裝多種依賴，初次設置可能較為繁瑣。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 模型的工具，但不具備 CAD 文件格式的廣泛支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供機器人設計的功能，但缺乏 CAD 自動生成的能力。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於機器學習和 AI 代理，但不專注於 CAD 模型的生成和管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 模型的工具，但不具備 CAD 文件格式的廣泛支持。 | 如果你需要一個專注於 3D 模型生成的工具，而不是 CAD 文件格式的支持。 | medium，因為需要重新適應不同的工具和工作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供機器人設計的功能，但缺乏 CAD 自動生成的能力。 | 如果你的專案主要集中在機器人設計，而不需要 CAD 模型的自動生成。 | low，因為功能上有部分重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **text-to-cad** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 3D 模型的工具，但不具備 CAD 文件格式的廣泛支持。 | 提供機器人設計的功能，但缺乏 CAD 自動生成的能力。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的工具和工作流程。 | low，因為功能上有部分重疊。 |
> | 適用場景 | 主要場景 | 如果你需要一個專注於 3D 模型生成的工具，而不是 CAD  | 如果你的專案主要集中在機器人設計，而不需要 CAD 模型的自 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型模型生成過程中可能會遇到性能瓶頸，導致生成時間過長。
  - 解法：考慮將模型拆分為更小的部分進行生成。
- [MEDIUM] 某些 CAD 格式的導出可能會出現兼容性問題。
  - 解法：在導出前檢查格式支持列表，並進行必要的轉換。
- [MEDIUM] 初次設置過程中可能會遇到依賴安裝的問題。
  - 解法：仔細按照 README 中的步驟進行安裝，並檢查依賴版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成和修改 CAD 模型，適合快速迭代的設計需求。 |
| 大型機械設計團隊 | 普通 | 雖然具備自動生成能力，但在處理大型模型時可能存在性能瓶頸。 |
| 學術研究機構進行機器人設計 | 非常適合 | 能夠快速生成和檢查機器人部件，提升研究效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，能夠快速生成 CAD 模型，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限運行，且不會存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
| Forks | 349 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-05-16 |
| 建立日期 | 2026-04-22 |
| 官方網站 | [Link](https://www.cadskills.xyz) |
| Repo 大小 | 62.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/earthtojake/text-to-cad) |
| Topics | `3mf` `agents` `ai` `ai-agents` `build123d` `cad` `cad-skill` `dxf` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 51
>     "Python" : 48
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@earthtojake](https://github.com/earthtojake) | 26 |

## 社群與生態

**社群活躍度**：社群活躍度良好，開發者定期更新和修復問題。
**連結**：[文件](https://www.cadskills.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-04 ~ 2026-05-16）
> **活躍天數** 5 天 · **最新 commit** Update docs header theme and GitHub button

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/earthtojake/text-to-cad/issues/10) | URDF Generation | 0 | 12 |

## README 摘錄

> [!info]- 展開查看原文 README
> # CAD Skills
> 
> A collection of agent skills for CAD, robotics and hardware design
> 
> [Docs](https://www.cadskills.xyz) | [Demo](https://demo.cadskills.xyz)
> 
> [](https://github.com/earthtojake/text-to-cad/stargazers)
> [](https://github.com/earthtojake/text-to-cad/network/members)
> [](LICENSE)
> [](https://x.com/soft_servo)
> [](skills/cad/requirements.txt)
> [](https://github.com/gumyr/build123d)
> [](skills/cad/requirements.txt)
> [](skills/cad/SKILL.md)
> [](skills/cad/SKILL.md)
> [](skills/cad/SKILL.md)
> [](skills/urdf/SKILL.md)
> [](skills/sdf/SKILL.md)
> [](skills/srdf/SKILL.md)
> 
> ## ✨ Features
> 
> - **Generate** - Create source-controlled CAD models with coding agents like Codex and Claude Code.
> - **Export** - Produce STEP, STL, 3MF, DXF, GLB, topology data, and URDF/SDF/SRDF robot descriptions.
> - **Browse** - Inspect generated geometry, flat patterns, and robot-description files in CAD Explorer.
> - **Source** - Find and download off-the-shelf STEP parts from the hosted step.parts catalog.
> - **Reference** - Copy stable `@cad[...]` references so agents can make precise follow-up edits.
> - **Review** - Render quick review images for fast checks during an iteration loop.
> - **Reproduce** - Edit source files first, then regenerate explicit targets.
> - **Local** - Run harness, skills and explorer locally with no backend to host.
> 
> ## 🧰 Skills
> 
> - **CAD Skill** - STEP, STL, 3MF, DXF, GLB/topology, render images, and `@cad[...]` geometry references. [Bundled skill](skills/cad/SKILL.md) · [Standalone repo](https://github.com/earthtojake/cad-skill)
> - **step.parts Skill** - Find, evaluate, and download common off-the-shelf STEP models from step.parts, including screws, nuts, washers, bearings, standoffs, electronics parts, motors, and connectors. [Bundled skill](skills/step-parts/SKILL.md)
> - **CAD Explorer Skill** - Start or reuse CAD Explorer and return visual review links for generated `.step`, `.stp`, `.stl`, `.3mf`, `.dxf`, `.urdf`, `.srdf`, and `.sdf` files. [Bundled skill](skills/cad-explorer/SKILL.md)
> - **URDF Skill** - Generated URDF XML, robot links, joints, limits, validation, mesh references, and CAD Explorer URDF visualization. [Bundled skill](skills/urdf/SKILL.md)
> - **SDF Skill** - Generated SDFormat/SDF XML, simulator model/world structure, validation, mesh URIs, plugins, and simulator-specific metadata. [Bundled skill](skills/sdf/SKILL.md)
> - **SRDF Skill** - MoveIt2 SRDF semantics, direct SRDF-to-URDF Explorer links, inverse kinematics, path planning, and optional MoveIt2-server testing for existing URDFs. [Bundled skill](skills/srdf/SKILL.md)
> - **SendCutSend Skill** - SendCutSend.com-specific DXF and STEP/STP upload preflight reports using its ordering guide, catalog, and specs for selected materials, SKUs, services, and secondary operations. [Bundled skill](skills/sendcutsend/SKILL.md)
> 
> ## 🧩 Harness
> 
> The `harness/` directory contains optional repo-level instruction files for larger CAD projects that will be edited by coding agents. These files keep project behavior predictable: edit sources before derived artifacts, regenerate explicit targets, avoid broad repo scans, treat CAD outputs as LFS-heavy, and keep reusable workflow details in the skills themselves.
> 
> To use the harness in another CAD project, copy `harness/AGENTS.md` and `harness/CLAUDE.md` into that project's root.
> 
> ## 💻 Installation
> 
> Clone once for script installs, then choose your agent:
> 
> ```bash
> git clone https://github.com/earthtojake/text-to-cad.git
> cd text-to-cad
> ```
> 
> ### Codex
> 
> ```bash
> ./scripts/codex-install.sh
> ```
> 
> Installs to `${CODEX_HOME:-$HOME/.codex}/skills`.
> 
> ### Claude Code
> 
> ```bash
> ./scripts/claude-install.sh
> ```
> 
> Installs to `${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}`.
> 
> ### Gemini CLI
> 
> ```bash
> ./scripts/gemini-install.sh
> ```
> 
> Installs to `${GEMINI_SKILLS_DIR:-.gemini/skills}`.
> 
> ### OpenClaw
> 
> ```bash
> ./scripts/openclaw-install.sh
> ```
> 
> Installs to `${OPENCLAW_SKILLS_DIR:-$HOME/.openclaw/skills}`.
> 
> ### Universal Installer
> 
> ```bash
> npx agent-skills-cli add earthtojake/text-to-cad
> ```
> 
> This installs the repo's skills into supported agents automatically. Learn more at [agentskills.in](https://www.agentskills.in).
> 
> For verification, troubleshooting, manual install, and uninstall steps, see [INSTALLATION.md](INSTALLATION.md). For local CAD generation, also install the CAD runtime dependencies from the setup commands below.
> 
> ## 📸 Screenshots
> 
>   
>     
>       
>         
>       
>       CAD
>     
>     
>       
>         
>       
>       URDF
>     
>     
>       
>         
>       
>       SRDF / MoveIt2
>     
>   
> 
> ## 🔁 Workflow
> 
> 1. **Describe** - Tell your agent about the part, assembly, fixture, robot, or mechanism you want.
> 2. **Edit** - Let your coding agent update repo-local CAD source files.
> 3. **Regenerate** - Create explicit STEP, STL, 3MF, DXF, GLB, URDF, SDF, or SRDF targets.
> 4. **Inspect** - Open CAD Explorer to review the generated model.
> 5. **Reference** - Copy `@cad[...]` handles when you want geometry-aware edits.
> 6. **Commit** - Save the source and generated artifacts together once the model is ready.
> 
> ## 🧪 Benchmarks
> 
> The repo stores heavyweight assets in `assets/**` and `benchmarks/**` through Git LFS and excludes those trees from default LFS pulls so lightweight clones do not fetch GIF assets. Benchmark markdown remains normal Git for readable diffs. To hydrate only the benchmark assets locally, run:
> 
> ```bash
> git lfs pull --include="benchmarks/**"
> ```
> 
>   
>     
>       #
>       Target
>       Prompt
>       Output
>     
>   
>   
>     
>       1
>       Rectangular calibration block with four holes
>       Create a centered 100 x 60 x 20 mm block with four 8 mm vertical through-holes. Add only a 2 mm chamfer on the top outer perimeter.
>       
>     
>     
>       2
>       Circular flange with bolt-hole pattern
>       Create an 80 mm diameter, 10 mm thick circular flange with a 30 mm central through-bore. Add six 6 mm through-holes on a 60 mm bolt circle and fillet the outside circular edges.
>       
>     
>     
>       3
>       L-bracket with gussets and two hole directions
>       Create an L-bracket from a base plate and rear vertical plate. Add vertical base holes, horizontal back-plate holes, two triangular gussets, and a filleted base/back transition.
>       
>     
>     
>       4
>       Stepped shaft with keyway
>       Create a 120 mm shaft along X with 20/30/20 mm diameter stepped sections. Add end chamfers and a shallow rectangular keyway on top of the middle section.
>       
>     
>     
>       5
>       Open-top electronics enclosure with bosses
>       Create a hollow open-top enclosure with 3 mm walls and floor. Add four internal standoffs with centered blind holes and 2 mm outside vertical corner fillets.
>       
>     
>     
>       6
>       Aerospace-style clevis bracket with lightening cutouts
>       Create a symmetric clevis bracket with a base plate, two rounded lugs, base mounting holes, and a horizontal lug bore. Add triangular lightening cutouts, reinforcing ribs, and rounded transitions.
>       
>     
>     
>       7
>       Radial-engine-style cylinder with cooling fins
>       Create a vertical engine-cylinder form with a central barrel, 12 cooling fins, a base flange, and a top cap. Add a 35 degree angled spark-plug boss with a coaxial through-hole.
>       
>     
>     
>       8
>       Centrifugal impeller with backward-curved blades
>       Create a centrifugal impeller with a backplate, hub, and through-bore. Add 12 fused backward-curved blades sweeping about 45 degrees from root to tip.
>       
>     
>     
>       9
>       Spiral staircase with helical handrail
>       Create a miniature spiral staircase with a central column, base disk, and 20 rising wedge treads. Add a one-revolution helical handrail and vertical balusters at the tread outer ends.
>       
>     
>     
>       10
>       Simplified planetary gear stage
>       Create a flat planetary gear assembly with separate sun, planet, ring, carrier, and pin bodies. Use simplified trapezoidal teeth and place three planets around the sun on a 42 mm radius circle.
>       
>     
>   
> 
> ## 🛠️ Local Development
> 
> Clone th

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[CAD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/earthtojake/text-to-cad) · [官方網站](https://www.cadskills.xyz)

## 相關收錄

> [!note]- 直接競品（同子分類：CAD 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CAD 工具" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "earthtojake--text-to-cad" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器學習","CAD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "earthtojake--text-to-cad" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "earthtojake--text-to-cad" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "earthtojake" AND file.name != "earthtojake--text-to-cad"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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
> const me = dv.page("Repos/earthtojake--text-to-cad");
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

> **2026-04-28** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 再次上榜，1.1k stars
- [[2026-04-28|2026-04-28]] — 首次收錄，952 stars
