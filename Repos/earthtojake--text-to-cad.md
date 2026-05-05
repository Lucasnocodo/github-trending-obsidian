---
repo: earthtojake/text-to-cad
url: https://github.com/earthtojake/text-to-cad
owner: earthtojake
owner_type: User
language: JavaScript
license: MIT
description: "An open source harness for generating CAD models"
homepage: ""
stars: 1869
stars_per_day: 144
forks: 227
open_issues: 2
created: 2026-04-22
pushed_at: 2026-05-04
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
use_case: "透過編碼代理生成 CAD 模型的開源工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-06"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 61099
readme_length: 6971
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:952,2026-04-29:1094,2026-04-29:1095,2026-05-03:1279,2026-05-04:1481,2026-05-05:1869"
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
  - "透過編碼代理生成 CAD 模型的開源工具。"
---

# text-to-cad

**1.9k** stars · **144** stars/天 · 建立 13 天前 · JavaScript · MIT

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
> 透過編碼代理生成 CAD 模型的開源工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (144 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成和迭代 CAD 模型的機械工程師和開發者。
> **一句話重點** 這個專案展示了如何利用編碼代理自動化 CAD 模型的生成，為設計流程帶來了革命性的改變。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到自動化 CAD 生成的能力，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一個開源的框架，讓用戶能夠利用編碼代理自動生成 CAD 模型。

## 專案簡介

這個專案提供了一個開源的工具，讓用戶可以利用編碼代理（如 Codex 和 Claude Code）生成 3D CAD 模型。用戶只需描述所需的部件或機構，系統會自動更新本地的 CAD 源文件並生成多種格式的輸出，如 STEP、STL、3MF 和 DXF。這樣的設計使得 CAD 模型的生成過程變得自動化且高效，特別適合需要快速迭代的機械工程和機器人設計領域。關鍵的 CLI 指令包括 `git clone` 來獲取代碼，然後使用 Python 和 npm 安裝所需的依賴，最後運行 CAD Explorer 來檢視生成的模型。這個工具的賣點在於它的靈活性和擴展性，使用者可以根據需要添加不同的技能包來滿足特定的 CAD 需求。

技術上，該專案使用 JavaScript 和 Python，並依賴於 Git LFS 來管理大型資產，這樣的選擇使得它在處理大型模型時更加高效。與其他 CAD 工具相比，如 AutoCAD 或 SolidWorks，這個工具的優勢在於其開源性和可擴展性，特別適合開發者和研究者使用。實際使用中，生成的模型可以直接在 CAD Explorer 中檢視，並且支持多種格式的導出，這對於需要快速原型設計的團隊來說是非常有利的。需要注意的是，這個專案目前仍在活躍開發中，可能會有不穩定的 API 變更。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在大規模商業應用中可能需要更多的測試和驗證。

**技術棧**：`JavaScript` · `Python` · `Shell`

## 重點功能

- 生成 CAD 模型 — 利用編碼代理自動生成各種 CAD 格式的模型，如 STEP、STL、DXF。
- 本地運行 — 無需後端支持，能在本地運行 CAD Explorer 進行模型檢視。
- 多格式導出 — 支持 STEP、STL、3MF、DXF、GLB 和 URDF 等多種格式的導出。
- 參考管理 — 提供穩定的 `@cad[...]` 引用，便於後續精確編輯。
- 快速檢視 — 能快速渲染模型的預覽圖，方便在迭代過程中進行檢查。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/earthtojake/text-to-cad.git
```
2. 安裝 Python CAD 依賴
```bash
python3.11 -m venv .venv && ./.venv/bin/python -m pip install --upgrade pip && ./.venv/bin/pip install -r .agents/skills/cad/requirements.txt
```
3. 運行 CAD Explorer
```bash
npm --prefix .agents/skills/cad/explorer run dev
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Python 和 npm，並克隆專案。",
  "指令": "git lfs pull --include=\".assets/benchmarks/**\"",
  "預期輸出": "拉取指定的基準資產以進行本地測試。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天內累積 1869 stars（144/天），forks 227（12.1%），這顯示出相對高的社群參與度。作者 earthtojake 在開源社群有一定的影響力，過去也有其他成功的專案。這個工具解決了 CAD 模型生成過程中的自動化需求，之前的工具往往需要手動操作，效率低下。社群的關注可能來自於對於 CAD 自動化的需求增加，以及開源工具的可擴展性。forks/stars 比率為 12.1%，顯示出許多人對此專案有實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要快速生成和迭代 CAD 模型的機械工程師和開發者。

> [!example] 使用場景
> - 機械工程師用它來自動生成 CAD 模型，因為手動繪製模型耗時且容易出錯。
> - 機器人開發者用它來快速生成 URDF 描述，因為這樣可以減少手動編寫 XML 的工作量。
> - 產品設計師用它來迭代設計，因為能夠快速生成和檢視模型，提升設計效率。

## 架構分析

這個專案採用模組化的架構設計，將 CAD 生成的功能分為多個技能包，這樣的設計使得用戶可以根據需求選擇安裝特定的技能。資料流方面，使用者首先描述所需的模型，然後編碼代理會更新本地的 CAD 源文件，接著生成所需的 CAD 格式。這樣的設計使得整個過程自動化且高效，降低了手動操作的錯誤率。

選擇使用 JavaScript 和 Python 的原因在於這兩種語言的生態系統豐富，並且有大量的庫支持 CAD 操作。擴展性方面，這個架構允許用戶添加新的技能包，但也可能導致依賴管理的複雜性增加。整體而言，這個架構設計兼顧了靈活性和可擴展性，適合快速迭代的開發環境。

## 技術深入分析

這個專案的核心技術機制在於利用編碼代理來自動生成 CAD 模型，這樣的設計使得用戶可以通過自然語言描述來生成複雜的幾何形狀。效能方面，專案使用 Git LFS 來管理大型模型資產，這樣可以有效減少克隆時的負擔，並且支持快速的模型生成。選擇使用 JavaScript 和 Python 是因為這兩種語言在 CAD 和機器人領域有著豐富的庫和工具支持，這樣的選擇使得開發者能夠快速集成各種功能。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大型模型時。整合方面，這個工具可以與主流的 CAD 軟體和機器人控制系統進行良好的整合，但在實際使用中，可能需要額外的適配工作來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意 Python 和 npm 的依賴安裝，可能會有一些小坑。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 開源且可擴展，適合開發者自定義功能。
> - 支持多種 CAD 格式的生成，方便與其他工具整合。
> - 本地運行，無需依賴後端服務，提升了使用的靈活性。

> [!danger] 缺點
> - 目前仍在開發中，可能存在不穩定的 API。
> - 對於大型模型的處理可能需要較高的計算資源。
> - 安裝過程相對複雜，需要安裝多個依賴。

> [!warning] 注意事項
> - 目前僅支援 Python 3.11+。
> - 需要安裝 Git LFS 來管理大型資產。
> - 對於大型模型的生成可能需要較高的計算資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 圖形，而本專案專注於 3D CAD 模型生成，適合不同的設計需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更多的機器人運動模擬功能，而本專案則專注於 CAD 模型的生成和編輯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 圖形，而本專案專注於 3D CAD 模型生成，適合不同的設計需求。 | 如果你的需求主要是 2D 設計，這個工具會更合適。 | low，因為兩者的操作方式有相似之處。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更多的機器人運動模擬功能，而本專案則專注於 CAD 模型的生成和編輯。 | 如果需要進行機器人運動模擬，這個工具會更合適。 | medium，因為需要調整工作流程以適應不同的功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **text-to-cad** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 2D 圖形，而本專案專注於 3D CAD 模型生成，適合不同的設計需求。 | 提供更多的機器人運動模擬功能，而本專案則專注於 CAD 模型的生成和編輯。 |
> | 遷移成本 | - | low，因為兩者的操作方式有相似之處。 | medium，因為需要調整工作流程以適應不同的功能。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是 2D 設計，這個工具會更合適。 | 如果需要進行機器人運動模擬，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到依賴衝突，特別是 Python 環境配置不當時。
  - 解法：建議使用虛擬環境來隔離依賴。
- [MEDIUM] 生成大型模型時可能會導致性能下降，特別是在低配置的機器上。
  - 解法：考慮使用更高配置的機器或雲端服務來運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 CAD 設計工作 | 非常適合 | 提供自動化生成和快速迭代的能力，能夠提升設計效率。 |
| 大型企業的核心 CAD 系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 個人開發者的機器人設計專案 | 適合 | 能夠快速生成 URDF 和 CAD 模型，降低開發門檻。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到自動化 CAD 生成的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限，且不會存取敏感資料。依賴鏈的信任程度較高，但仍需注意外部庫的安全性。

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
| Forks | 227 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-04 |
| 建立日期 | 2026-04-22 |
| Repo 大小 | 59.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/earthtojake/text-to-cad) |
| Topics | `3mf` `agents` `ai` `ai-agents` `build123d` `cad` `cad-skill` `dxf` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 54
>     "Python" : 45
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@earthtojake](https://github.com/earthtojake) | 17 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新專案。
**連結**：[文件](https://text-to-cad.earthtojake.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-05-04）
> **活躍天數** 5 天 · **最新 commit** Consolidate CAD skill tooling and Explorer workflows

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
> - **Review** - Render quick review images for fast checks during an iteration loop.
> - **Reproduce** - Edit source files first, then regenerate explicit targets.
> - **Local** - Run the harness and CAD Explorer locally with no backend to host.
> 
> ## 🧰 Bundled Skills
> 
> This harness vendors file-targeted skills for CAD, robot-description, robot-motion, and manufacturing-preflight work. Use the bundled copies here for local CAD projects, or use the dedicated repositories when installing the skills outside this harness.
> 
> - **CAD Skill** - STEP, STL, 3MF, DXF, GLB/topology, render images, and `@cad[...]` geometry references. [Bundled skill](.agents/skills/cad/SKILL.md) · [Standalone repo](https://github.com/earthtojake/cad-skill)
> - **URDF Skill** - Generated URDF XML, robot links, joints, limits, validation, and mesh references. [Bundled skill](.agents/skills/urdf/SKILL.md) · [Standalone repo](https://github.com/earthtojake/urdf-skill)
> - **Robot Motion Skill** - ROS 2/MoveIt setup, CAD Explorer motion artifacts, inverse kinematics, path planning, and motion-server testing for existing URDFs. [Bundled skill](.agents/skills/robot-motion/SKILL.md)
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
> ## 🧪 Benchmarks
> 
> The repo stores `.assets/**` through Git LFS and excludes that tree from default LFS pulls so lightweight clones do not fetch GIF assets or benchmark detail pages. To hydrate only the benchmark assets locally, run:
> 
> ```bash
> git lfs pull --include=".assets/benchmarks/**"
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
> npm --prefix .agents/skills/cad/explorer run dev
> ```
> 
> Then open [http://localhost:4178](http://localhost:4178).
> 
> For root-aware agent workflows across multiple projects, ask CAD Explorer to
> reuse a matching server or start one on a free port:
> 
> ```bash
> npm --prefix .agents/skills/cad/explorer run dev:ensure -- --file STEP/sample_part.step
> ```
> 
> Then open the URL printed by the command.

## 延伸閱讀

相關概念：[[機器人運動]] · [[CAD]] · [[自動化設計]]

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
> const concepts = ["機器人運動","CAD","自動化設計"];
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
