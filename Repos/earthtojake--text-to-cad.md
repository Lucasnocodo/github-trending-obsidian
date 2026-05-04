---
repo: earthtojake/text-to-cad
url: https://github.com/earthtojake/text-to-cad
owner: earthtojake
owner_type: User
language: JavaScript
license: MIT
description: "An open source harness for generating CAD models"
homepage: ""
stars: 1481
stars_per_day: 123
forks: 217
open_issues: 3
created: 2026-04-22
pushed_at: 2026-04-30
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
use_case: "一個開源工具，讓你用程式碼生成 CAD 模型。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-06"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 60895
readme_length: 3834
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:952,2026-04-29:1094,2026-04-29:1095,2026-05-03:1279,2026-05-04:1481"
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
  - "一個開源工具，讓你用程式碼生成 CAD 模型。"
---

# text-to-cad

**1.5k** stars · **123** stars/天 · 建立 12 天前 · JavaScript · MIT

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

`3mf` `agents` `ai` `ai-agents` `build123d` `cad` `cad-skill` `dxf` `glb` `mechanical-engineering` `opencascade` `robotics` `step` `stl` `text-to-cad` `wasm`

> [!summary] 一句話摘要
> 一個開源工具，讓你用程式碼生成 CAD 模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (123 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要自動化 CAD 模型生成的工程師和開發者。
> **一句話重點** 這個專案讓 CAD 模型生成變得自動化，適合需要快速迭代的工程設計。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到自動化 CAD 模型生成的效果，值得投資。

> [!abstract] 核心創新
> 這個專案的核心創新在於將編碼代理與 CAD 模型生成結合，實現自動化設計流程。

## 專案簡介

這個專案提供了一個開源的框架，讓開發者可以通過編碼生成 3D CAD 模型。使用者可以描述所需的零件或機構，然後由編碼代理（如 Codex 或 Claude Code）自動更新 CAD 源文件，並生成各種格式的 CAD 文件（如 STEP、STL、DXF 等）。這樣的設計使得 CAD 模型的生成過程變得自動化且可重複，特別適合需要快速迭代的工程設計環境。關鍵的 CLI 指令包括 `git clone` 和 `npm run dev:ensure`，這些指令能讓使用者快速啟動本地開發環境。這個工具的賣點在於它的靈活性和自動化程度，使用者不僅能生成模型，還能在 CAD Explorer 中檢視和編輯生成的幾何圖形。技術上，專案使用 JavaScript 和 Python，並依賴於多個 CAD 相關的庫，這使得它在功能上相當強大。

與傳統的 CAD 軟體相比，這個工具的優勢在於它的源代碼控制和自動化生成能力，能夠顯著提高設計效率。與其他 CAD 工具相比，像是 SolidWorks 或 AutoCAD，這個專案更適合需要程式化生成模型的開發者，而不是單純的圖形界面使用者。實際使用中，使用者可以快速生成和檢查模型，並在需要時進行精確的編輯。這個專案目前處於活躍開發中，社群也相對健康，開放的問題數量較少，顯示出良好的維護狀態。對於希望將 CAD 自動化整合進現有工作流的團隊來說，這個工具非常值得考慮。

**技術棧**：`JavaScript` · `Python` · `CSS` · `Shell` · `HTML`

## 重點功能

- 生成 CAD 模型 — 使用編碼代理生成 STEP、STL、3MF、DXF、GLB 等格式的 CAD 模型。
- 本地運行 — 無需後端，能在本地運行 CAD Explorer 和生成工具。
- 參考穩定性 — 提供穩定的 `@cad[...]` 參考，便於後續精確編輯。
- 快速檢查 — 在迭代過程中快速渲染快照，便於檢查生成的幾何圖形。
- 編輯源文件 — 先編輯源文件，再生成明確的目標 CAD 文件。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/earthtojake/text-to-cad.git
```
2. 安裝 Python CAD 依賴
```bash
python3.11 -m venv .venv && ./.venv/bin/python -m pip install --upgrade pip && ./.venv/bin/pip install -r .agents/skills/cad/requirements.txt
```
3. 安裝 CAD Explorer 依賴
```bash
npm --prefix .agents/skills/cad/explorer install
```
4. 運行 CAD Explorer
```bash
npm --prefix .agents/skills/cad/explorer run dev:ensure
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Python 和 Node.js，並克隆專案。",
  "指令": "npm --prefix .agents/skills/cad/explorer run dev:ensure",
  "預期輸出": "啟動本地 CAD Explorer，並可在 http://localhost:4178 訪問。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 1481 stars（123/天），forks 217（14.7%），顯示出強勁的增長潛力。作者 earthtojake 在開源社群中活躍，這個專案填補了自動化 CAD 模型生成的市場空白，之前的工具多數依賴手動操作，效率低下。這個工具的出現讓開發者能夠更高效地生成和管理 CAD 模型，特別是在需要快速迭代的工程設計中。社群的反饋和需求也促進了這個專案的快速發展，顯示出其潛在的廣泛應用場景。

## 適合誰使用

**目標受眾**：需要自動化 CAD 模型生成的工程師和開發者。

> [!example] 使用場景
> - 機械工程師用它來自動生成機械零件的 CAD 模型，因為這樣可以節省手動設計的時間，提升工作效率。
> - 機器人開發者用它來生成 URDF 檔案，因為這能夠快速整合 CAD 模型到 ROS 環境中，縮短開發週期。
> - 產品設計師用它來迭代產品原型，因為能夠快速檢視和修改 CAD 模型，提升設計的靈活性。

## 架構分析

這個專案採用模組化架構，將 CAD 生成和編輯功能分為多個技能模組，如 CAD Skill 和 URDF Skill。這樣的設計使得使用者可以根據需要選擇安裝特定的技能，降低了不必要的依賴。資料流方面，使用者描述的需求經由編碼代理轉化為 CAD 源文件的更新，然後生成多種格式的 CAD 文件。

這樣的設計使得生成過程靈活且可重複，適合快速迭代的設計環境。選擇 Python 和 JavaScript 作為主要語言，能夠充分利用這兩種語言在數據處理和前端展示上的優勢，但也帶來了一定的學習曲線。擴展性方面，隨著需求的增長，可能需要增加更多的技能模組，這需要考慮到現有架構的兼容性。

## 技術深入分析

專案的核心技術機制在於結合了編碼代理和 CAD 模型生成的能力，使用者可以通過自然語言描述需求，然後由 Codex 或 Claude Code 自動生成 CAD 源文件。效能方面，專案能夠處理中小型的 CAD 模型，但在生成大型模型時可能會遇到性能瓶頸，這需要進一步的優化。選擇 Python 和 JavaScript 作為主要技術棧，能夠充分利用這兩種語言的優勢，但也增加了學習曲線。技術風險方面，隨著使用者需求的增長，可能需要擴展更多的技能模組，這可能會影響到現有架構的穩定性。整合方面，與主流的 CAD 工具鏈相容性良好，但在某些情況下，可能需要額外的適配層來處理不同格式的轉換。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對新手友好。安裝過程中可能會遇到一些依賴問題，但整體流程順暢。文件沒有提供多語言支持，僅有英文版本，但內容詳盡，易於理解。

## 優缺點分析

> [!success] 優點
> - 自動化生成 CAD 模型，節省時間和人力成本。
> - 支持多種 CAD 文件格式，靈活應用於不同場景。
> - 本地運行，無需依賴外部服務，保障數據安全。

> [!danger] 缺點
> - 安裝和配置過程相對複雜，對新手不太友好。
> - 目前功能仍在開發中，可能存在不穩定性。
> - 對大型模型的支持可能有限，需進一步優化性能。

> [!warning] 注意事項
> - 目前只支援特定的 CAD 格式，未來可能需要擴展。
> - 對於大型模型的生成，性能可能會受到影響，需要進一步優化。
> - 依賴於多個外部庫，可能會增加安裝和配置的複雜性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成 2D 圖形，而本專案專注於 3D CAD 模型生成，適合不同的設計需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具提供了更強的機器人運動模擬功能，而本專案則更專注於 CAD 模型的生成和管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 圖形生成，使用簡化的 API，而本專案則專注於 3D CAD 模型生成，功能更為複雜。 | 如果你的需求主要是 2D 圖形生成，這個工具會更簡單易用。 | low，因為兩者的 API 設計有一定相似性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供機器人運動模擬功能，而本專案專注於 CAD 模型生成，適合不同的需求。 | 如果你的專案需要強大的機器人運動模擬，這個工具會更合適。 | medium，因為需要重新調整模型生成的邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **text-to-cad** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 2D 圖形生成，使用簡化的 API，而本專案則專注於 3D CAD 模型生成，功能更為複雜。 | 提供機器人運動模擬功能，而本專案專注於 CAD 模型生成，適合不同的需求。 |
> | 遷移成本 | - | low，因為兩者的 API 設計有一定相似性。 | medium，因為需要重新調整模型生成的邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是 2D 圖形生成，這個工具會更簡單易用。 | 如果你的專案需要強大的機器人運動模擬，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上安裝依賴時可能會出現錯誤，特別是 Python 環境配置不當時。
  - 解法：確保使用正確版本的 Python 和虛擬環境。
- [MEDIUM] 生成大型模型時可能會導致性能下降。
  - 解法：考慮將模型拆分為多個小型模型進行生成。
- [MEDIUM] 某些 CAD 格式的支持可能不完整，導致生成文件無法正確打開。
  - 解法：在生成前檢查格式支持，必要時選擇其他格式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行產品設計 | 非常適合 | 能夠快速生成和迭代 CAD 模型，提升設計效率。 |
| 大型企業的 CAD 團隊 | 普通 | 雖然功能強大，但可能需要更多的穩定性和支持。 |
| 學術研究機構進行機器人研究 | 非常適合 | 能夠生成 URDF 檔案，方便整合到 ROS 環境中。 |
| 個人開發者進行小型 CAD 項目 | 非常適合 | 簡單易用，能夠快速上手並生成模型。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到自動化 CAD 模型生成的效果，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 CAD 軟體和機器人開發框架搭配使用，通常在設計和模擬階段使用。實際整合範例包括在使用 ROS 環境中，開發者可以使用該工具生成 URDF 檔案，然後將其整合到機器人模擬中。支援 GitHub Actions 和其他 CI 工具，能夠方便地集成到現有的開發流程中。整合的摩擦點主要在於依賴的版本管理，可能需要確保所有依賴的版本相容。

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
| Forks | 217 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-30 |
| 建立日期 | 2026-04-22 |
| Repo 大小 | 59.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/earthtojake/text-to-cad) |
| Topics | `3mf` `agents` `ai` `ai-agents` `build123d` `cad` `cad-skill` `dxf` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 61
>     "Python" : 38
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@earthtojake](https://github.com/earthtojake) | 16 |

## 社群與生態

**社群活躍度**：社群活躍，開放問題數量少，維護良好。
**連結**：[文件](https://text-to-cad.earthtojake.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-30）
> **活躍天數** 4 天 · **最新 commit** Trim CAD Explorer breakpoint helper

## README 摘錄

> [!info]- 展開查看原文 README
> # ⚙ Open Source Text to CAD Harness ⚙
> 
> An open source harness for generating 3D models with your favorite coding agent
> 
> [Demo project](https://text-to-cad.earthtojake.com)
> 
> [](https://github.com/earthtojake/text-to-cad/stargazers)
> [](https://github.com/earthtojake/text-to-cad/network/members)
> [](LICENSE)
> [](https://x.com/soft_servo)
> [](.agents/skills/cad/requirements.txt)
> [](https://github.com/gumyr/build123d)
> [](.agents/skills/cad/requirements.txt)
> [](.agents/skills/cad/SKILL.md)
> [](.agents/skills/cad/SKILL.md)
> [](.agents/skills/cad/SKILL.md)
> [](.agents/skills/urdf/SKILL.md)
> [](.agents/skills/robot-motion/SKILL.md)
> [](.agents/skills/cad/explorer/package.json)
> [](.agents/skills/cad/explorer/package.json)
> [](.agents/skills/cad/explorer/package.json)
> 
> ## ✨ Features
> 
> - **Generate** - Create source-controlled CAD models with coding agents like Codex and Claude Code.
> - **Export** - Produce STEP, STL, 3MF, DXF, GLB, topology data, and URDF robot descriptions.
> - **Browse** - Inspect generated geometry in CAD Explorer.
> - **Reference** - Copy stable `@cad[...]` references so agents can make precise follow-up edits.
> - **Review** - Render quick snapshots for fast checks during an iteration loop.
> - **Reproduce** - Edit source files first, then regenerate explicit targets.
> - **Local** - Run the harness and CAD Explorer locally with no backend to host.
> 
> ## 🧰 Bundled Skills
> 
> This harness vendors file-targeted skills for CAD, robot-description, robot-motion, and manufacturing-preflight work. Use the bundled copies here for local CAD projects, or use the dedicated repositories when installing the skills outside this harness.
> 
> - **CAD Skill** - STEP, STL, 3MF, DXF, GLB/topology, snapshots, and `@cad[...]` geometry references. [Bundled docs](.agents/skills/cad/README.md) · [Standalone repo](https://github.com/earthtojake/cad-skill)
> - **URDF Skill** - Generated URDF XML, robot links, joints, limits, validation, and mesh references. [Bundled docs](.agents/skills/urdf/README.md) · [Standalone repo](https://github.com/earthtojake/urdf-skill)
> - **Robot Motion Skill** - ROS 2/MoveIt setup, CAD Explorer motion artifacts, inverse kinematics, path planning, and motion-server testing for existing URDFs. [Bundled docs](.agents/skills/robot-motion/README.md)
> 
> Skills live canonically under `.agents/skills` for Codex. Claude Code compatibility is provided by per-skill symlinks in `.claude/skills`.
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
>       Robot Motion
>     
>   
> 
> ## 🔁 Workflow
> 
> 1. **Describe** - Tell your agent about the part, assembly, fixture, robot, or mechanism you want.
> 2. **Edit** - Let your coding agent update repo-local CAD source files.
> 3. **Regenerate** - Create explicit STEP, STL, 3MF, DXF, GLB, or URDF targets.
> 4. **Inspect** - Open CAD Explorer to review the generated model.
> 5. **Reference** - Copy `@cad[...]` handles when you want geometry-aware edits.
> 6. **Commit** - Save the source and generated artifacts together once the model is ready.
> 
> ## 🚀 Quick Start
> 
> Clone the repo:
> 
> ```bash
> git clone https://github.com/earthtojake/text-to-cad.git
> cd text-to-cad
> ```
> 
> Install Python CAD dependencies:
> 
> ```bash
> python3.11 -m venv .venv
> ./.venv/bin/python -m pip install --upgrade pip
> ./.venv/bin/pip install -r .agents/skills/cad/requirements.txt
> ```
> 
> Install other bundled skill requirements only when you need those workflows:
> 
> ```bash
> ./.venv/bin/pip install -r .agents/skills/urdf/requirements.txt
> ```
> 
> Install CAD Explorer dependencies:
> 
> ```bash
> npm --prefix .agents/skills/cad/explorer install
> ```
> 
> Run the local CAD Explorer from the project directory you want to scan:
> 
> ```bash
> npm --prefix .agents/skills/cad/explorer run dev:ensure
> ```
> 
> Then open [http://localhost:4178](http://localhost:4178).

## 延伸閱讀

相關概念：[[CAD]] · [[機器人運動]] · [[自動化設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[alchaincyf--hermes-agent-orange-book|alchaincyf/hermes-agent-orange-book]]

[GitHub](https://github.com/earthtojake/text-to-cad)

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
> const concepts = ["CAD","機器人運動","自動化設計"];
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
