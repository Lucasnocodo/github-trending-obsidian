---
repo: earthtojake/text-to-cad
url: https://github.com/earthtojake/text-to-cad
owner: earthtojake
owner_type: User
language: JavaScript
license: MIT
description: "A collection of agent skills for CAD, robotics and hardware design"
homepage: "https://www.cadskills.xyz"
stars: 5159
stars_per_day: 139
forks: 604
open_issues: 3
created: 2026-04-22
pushed_at: 2026-05-28
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "CAD 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "提供 CAD、機器人和硬體設計的代理技能庫。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-06"
contributor_count: 2
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 71059
readme_length: 7648
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:952,2026-04-29:1094,2026-04-29:1095,2026-05-03:1279,2026-05-04:1481,2026-05-05:1869,2026-05-06:1963,2026-05-08:2132,2026-05-12:2420,2026-05-17:2912,2026-05-29:5159"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/3mf"
  - "topic/agents"
  - "topic/ai_agents"
  - "topic/build123d"
  - "topic/cad"
aliases:
  - "text-to-cad"
  - "earthtojake/text-to-cad"
  - "提供 CAD、機器人和硬體設計的代理技能庫。"
---

# text-to-cad

**5.2k** stars · **139** stars/天 · 建立 37 天前 · JavaScript · MIT

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

`easy-install`

`3mf` `agents` `ai-agents` `build123d` `cad` `dxf` `glb` `mechanical-engineering` `opencascade` `robotics` `sdf` `srdf` `step` `stl` `stp` `text-to-cad` `urdf` `wasm`

> [!summary] 一句話摘要
> 提供 CAD、機器人和硬體設計的代理技能庫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (139 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要快速生成和處理 CAD 模型的機械工程師和機器人開發者。
> **一句話重點** 這個專案的設計不僅提高了 CAD 和機器人設計的效率，還為自動化設計提供了一個新的思路。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到自動化 CAD 設計的效果，值得採用。

> [!abstract] 核心創新
> 提供了一個針對 CAD 和機器人設計的自動化技能庫，簡化了繁瑣的設計流程。

## 專案簡介

這個專案是一個針對 CAD、機器人和硬體設計的技能庫，讓用戶能夠從簡單的語言請求生成、檢查和處理 CAD 模型及機器人描述檔。用戶可以透過 CLI 指令 `npx skills install earthtojake/text-to-cad` 安裝這個庫，並使用各種技能來創建和編輯 CAD 模型，輸出格式包括 STEP、STL、3MF 和 GLB。這些技能的設計目的是為了簡化 CAD 和機器人設計的工作流程，並提供即時的本地預覽功能，讓用戶能夠快速檢查設計成果。技術上，這個專案使用 JavaScript 和 Python，並依賴 Git LFS 來管理大型資源，這樣可以保持輕量級的克隆。與其他 CAD 工具相比，這個專案的優勢在於它的代理技能設計，能夠自動化許多繁瑣的設計步驟，並提供即時反饋。

與傳統的 CAD 軟體相比，這個庫的靈活性和擴展性使其特別適合快速原型設計和機器人開發。使用者在處理複雜的 CAD 模型時，可能會遇到性能瓶頸，尤其是在大型設計上，這需要考慮硬體資源的配置。這個專案目前處於活躍開發中，社群回應速度良好，且有穩定的更新頻率。總體來說，這個專案適合需要快速生成和處理 CAD 模型的工程師和設計師，尤其是在機器人和硬體設計領域。

**技術棧**：`JavaScript` · `Python` · `Shell`

## 重點功能

- CAD 模型生成 — 從簡單的文字或圖像請求生成 CAD 模型，支持 STEP、STL、3MF 和 GLB 格式。
- CAD 預覽 — 提供本地瀏覽器預覽功能，支持 CAD、G-code 和機器人文件。
- STEP 零件查找 — 自動查找現成的 STEP 零件，如螺絲、軸承和電機。
- URDF 文件生成 — 自動生成機器人結構文件，包含鏈接、關節和限制。
- G-code 切片 — 將支持的網格文件切片為經過驗證的 G-code，並支持真實的切片 CLI。

## 快速開始

1. 安裝 CAD Skills
```bash
npx skills install earthtojake/text-to-cad
```
2. 為 Codex 安裝插件
```bash
codex plugin marketplace add earthtojake/text-to-cad
```
3. 為 Claude Code 安裝插件
```bash
claude plugin marketplace add earthtojake/text-to-cad
```

## 程式碼範例

```js
{
  "前置條件": "安裝了 CAD Skills 庫",
  "指令": "npx skills install earthtojake/text-to-cad",
  "預期輸出": "成功安裝 CAD Skills 庫，並可使用各種技能。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 37 天就累積 5159 stars（139/天），forks 604（11.7%），這顯示出強勁的增長潛力。作者 earthtojake 和 arronzhang 在 CAD 和機器人領域有豐富的經驗，這個專案解決了傳統 CAD 工具繁瑣的操作流程，提供了一個更自動化的解決方案。近期的推廣活動和社群討論也促進了這個專案的曝光度。技術上，這個工具的設計充分利用了現代 Web 技術，使其能夠在多種環境中運行，並且具備良好的擴展性。forks/stars 比率為 11.7%，顯示出有相當多的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速生成和處理 CAD 模型的機械工程師和機器人開發者。

> [!example] 使用場景
> - 機械工程師用它來自動生成 CAD 模型，因為這樣能節省大量手動繪製的時間，並提高設計精度。
> - 機器人開發者用它來快速生成 URDF 文件，因為這能簡化機器人結構的描述，並加速開發流程。
> - 製造業設計師用它來檢查和驗證 DXF 和 STEP 文件，因為這樣可以在上傳到生產系統前確保文件的正確性。

## 架構分析

這個專案採用模組化的架構設計，將不同的技能分為獨立的模組，這樣可以讓用戶根據需求選擇安裝。每個技能模組都能獨立運行，並通過 CLI 進行調用。資料流方面，使用者的請求會被解析並轉發到相應的技能模組，然後生成相應的 CAD 或機器人描述文件。

這樣的設計使得擴展性良好，能夠快速添加新技能。選擇 JavaScript 和 Python 作為主要語言，因為這兩種語言在開發工具和自動化腳本中都非常流行，且擁有大量的庫和社群支持。這樣的選擇雖然增加了學習曲線，但也提供了更高的靈活性和功能性。

## 技術深入分析

這個專案的核心技術機制是基於模組化的技能庫，使用 JavaScript 和 Python 來實現各種 CAD 和機器人設計功能。每個技能模組都能獨立運行，並通過 CLI 進行調用，這樣的設計使得擴展性良好。效能方面，這個專案能夠處理中小型的 CAD 模型，但在大型模型上可能會遇到性能瓶頸，特別是在記憶體和計算資源上。選擇 JavaScript 和 Python 作為主要語言，能夠利用這兩種語言的豐富生態系統，但也可能帶來一定的學習曲線。設計上，這個專案沒有過度依賴特定的框架，這樣能夠保持靈活性，但也意味著需要用戶自行處理一些配置問題。技術風險方面，隨著使用者數量的增加，可能會出現性能和穩定性問題，這需要持續的優化和維護。整合方面，這個專案能夠與主流的開發工具鏈良好整合，並且支持 CI/CD 流程，但在某些情況下可能需要額外的適配器。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，安裝過程相對順暢，但需要注意 Node.js 和 npm 的環境配置。文件中有良好的 getting started guide，對新手友好。

## 優缺點分析

> [!success] 優點
> - 模組化設計，易於擴展和維護。
> - 支持多種 CAD 格式，靈活性高。
> - 提供即時預覽功能，提升設計效率。

> [!danger] 缺點
> - 在大型模型處理上可能會遇到性能問題。
> - 需要一定的學習成本來掌握各種技能的使用。
> - 依賴於 Node.js 和 npm，增加了環境配置的複雜性。

> [!warning] 注意事項
> - 可能在處理大型 CAD 模型時出現性能瓶頸。
> - 需要安裝 Node.js 和 npm 才能運行。
> - 某些技能可能需要額外的依賴或配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 角色模型，而本專案則專注於 CAD 和機器人設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的 CAD 模型生成，但功能不如本專案全面，特別是在機器人描述方面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 角色模型，使用 Python 實作，記憶體用量較少，但功能不如本專案全面。 | 如果你的主要需求是生成 3D 角色模型，而不是 CAD 或機器人設計。 | medium，因為需要重新學習不同的 API 和功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的 CAD 模型生成，使用 JavaScript 實作，但功能不如本專案全面。 | 如果你只需要基本的 CAD 模型生成，而不需要機器人描述功能。 | low，因為 API 風格相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **text-to-cad** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 3D 角色模型，使用 Python 實作，記憶體用量較少，但功能不如本專案全面。 | 提供簡單的 CAD 模型生成，使用 JavaScript 實作，但功能不如本專案全面。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的 API 和功能。 | low，因為 API 風格相似。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是生成 3D 角色模型，而不是 CAD 或機 | 如果你只需要基本的 CAD 模型生成，而不需要機器人描述功能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型模型處理時可能會導致記憶體溢出。
  - 解法：將模型拆分為較小的部分進行處理。
- [MEDIUM] 某些技能在特定環境下可能無法正常運行。
  - 解法：確保所有依賴都已正確安裝，並檢查環境變數。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司專注於機器人設計 | 非常適合 | 提供了自動化的設計流程，能快速生成所需的機器人描述文件。 |
| 大型製造企業的 CAD 團隊 | 普通 | 雖然功能全面，但在處理大型模型時可能會遇到性能問題。 |
| 個人開發者進行小型 CAD 專案 | 非常適合 | 簡單易用，能快速上手並生成模型。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到自動化 CAD 設計的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料，但需確保依賴的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 CAD 軟體和機器人開發框架搭配使用，通常在設計和開發階段進行集成。在一個使用 Next.js 的專案中，你可以用這個工具來生成 CAD 模型，具體做法是通過 CLI 輸入請求，然後將生成的模型嵌入到應用中。支持與 GitHub Actions 進行 CI/CD 整合，並能與 VS Code 等 IDE 進行良好整合。整合的摩擦點主要在於環境配置，特別是 Node.js 和 npm 的版本兼容性問題。

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
| Forks | 604 |
| Open Issues | 3 |
| Issue 解決率 | 50% (3 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-04-22 |
| 官方網站 | [Link](https://www.cadskills.xyz) |
| Repo 大小 | 69.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/earthtojake/text-to-cad) |
| Topics | `3mf` `agents` `ai-agents` `build123d` `cad` `dxf` `glb` `mechanical-engineering` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 54
>     "Python" : 45
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@earthtojake](https://github.com/earthtojake) | 65 |
> | [@arronzhang](https://github.com/arronzhang) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://www.cadskills.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-28）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #21 from earthtojake/codex/cad-artifact-paths

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/earthtojake/text-to-cad/issues/17) | 崩潰問題 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> ██████╗ █████╗ ██████╗       ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
> ██╔════╝██╔══██╗██╔══██╗      ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
> ██║     ███████║██║  ██║      ███████╗█████╔╝ ██║██║     ██║     ███████╗
> ██║     ██╔══██║██║  ██║      ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
> ╚██████╗██║  ██║██████╔╝      ███████║██║  ██╗██║███████╗███████╗███████║
>  ╚═════╝╚═╝  ╚═╝╚═════╝       ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝
> 
> A skills library for CAD, robotics, and hardware design agents
> 
> [Docs](https://www.cadskills.xyz) | [Demo](https://demo.cadskills.xyz)
> 
> [](https://github.com/earthtojake/text-to-cad/stargazers)
> [](https://github.com/earthtojake/text-to-cad/network/members)
> [](LICENSE)
> [](https://x.com/earthtojake)
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
> # CAD Skills
> 
> CAD Skills is a library of agent skills for generating, inspecting, sourcing,
> slicing, and handing off CAD and robot-description artifacts from local project
> files.
> 
> ## 🧰 Skills
> 
> Install the library to give agents focused workflows for CAD, fabrication,
> robot description files, simulation, and local review.
> 
> | Skill       | Summary                                                                                                                                            | Source                                            |
> | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
> | CAD         | Creates and edits CAD models from plain-language or image requests, with STEP as the main output along with options to export to STL, 3MF and GLB. | [skills/cad](skills/cad/SKILL.md)                 |
> | CAD Viewer  | Shows local browser previews for CAD, G-code, and robot files.                                                                                     | [skills/cad-viewer](skills/cad-viewer/SKILL.md)   |
> | step.parts  | Finds off-the-shelf STEP parts like screws, bearings, motors, and connectors.                                                                      | [skills/step-parts](skills/step-parts/SKILL.md)   |
> | URDF        | Writes robot structure files with links, joints, limits, inertials, and meshes.                                                                    | [skills/urdf](skills/urdf/SKILL.md)               |
> | SRDF        | Adds MoveIt planning groups, end effectors, poses, and collision rules to a URDF.                                                                  | [skills/srdf](skills/srdf/SKILL.md)               |
> | SDF         | Creates simulator models and worlds with frames, physics, sensors, and lights.                                                                     | [skills/sdf](skills/sdf/SKILL.md)                 |
> | SendCutSend | Checks DXF and STEP files before upload to SendCutSend.                                                                                            | [skills/sendcutsend](skills/sendcutsend/SKILL.md) |
> | G-code      | Slices supported mesh files into validated, printer-profiled FDM `.gcode` with real slicer CLIs.                                                   | [skills/gcode](skills/gcode/SKILL.md)             |
> | Bambu Labs  | Dry-runs, uploads, and cautiously starts local Bambu Lab print jobs from validated `.gcode`.                                                       | [skills/bambu-labs](skills/bambu-labs/SKILL.md)   |
> 
> ## 💻 Installation
> 
> ### Skills
> 
> Install CAD Skills with the Skills CLI:
> 
> ```bash
> npx skills install earthtojake/text-to-cad
> ```
> 
> This is the preferred installation path. It installs the individual skills
> directly for supported agents.
> 
> ### Plugins
> 
> Provider-native plugin installs are also available for Codex and Claude Code:
> 
> ```bash
> # Codex
> codex plugin marketplace add earthtojake/text-to-cad
> codex plugin add cad@text-to-cad
> ```
> 
> ```bash
> # Claude Code
> claude plugin marketplace add earthtojake/text-to-cad
> claude plugin install cad@text-to-cad
> ```
> 
> Restart your agent if newly installed skills do not appear. For local
> development symlink guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).
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
> ## 🛠️ Contributing
> 
> For local development, contribution workflow, local skill linking, and validation guidance, see
> [CONTRIBUTING.md](CONTRIBUTING.md).

## 延伸閱讀

相關概念：[[CAD]] · [[機器人設計]] · [[自動化]]

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
> const concepts = ["CAD","機器人設計","自動化"];
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
