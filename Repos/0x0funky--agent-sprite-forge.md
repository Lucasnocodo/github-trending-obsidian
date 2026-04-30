---
repo: 0x0funky/agent-sprite-forge
url: https://github.com/0x0funky/agent-sprite-forge
owner: 0x0funky
owner_type: User
language: Python
license: MIT
description: "Agent Skill for generating 2D sprite sheets and map, transparent PNG frames, and animated GIFs from prompts."
homepage: ""
stars: 1245
stars_per_day: 208
forks: 123
open_issues: 2
created: 2026-04-23
pushed_at: 2026-04-28
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "遊戲資產生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "將自然語言提示轉換為遊戲準備的 2D 精靈和分層 2D 地圖。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-03"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 58219
readme_length: 9824
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:871,2026-04-28:871,2026-04-29:1042,2026-04-29:1042,2026-04-30:1245"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/agent_skills"
  - "topic/codex"
  - "topic/pixel_art"
  - "topic/sprite_generator"
aliases:
  - "agent-sprite-forge"
  - "0x0funky/agent-sprite-forge"
  - "將自然語言提示轉換為遊戲準備的 2D 精靈和分層 2D 地圖。"
---

# agent-sprite-forge

**1.0k** stars · **208** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/0x0funky--agent-sprite-forge");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`agent-skills` `codex` `pixel-art` `sprite-generator`

> [!summary] 一句話摘要
> 將自然語言提示轉換為遊戲準備的 2D 精靈和分層 2D 地圖。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (208 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成 2D 遊戲資產的獨立開發者或小型遊戲團隊。
> **一句話重點** 這個專案的最大亮點在於其將自然語言處理與遊戲資產生成結合，讓開發者能夠用更簡單的方式創作遊戲內容。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "遊戲資產生成" && p.file.name !== "0x0funky--agent-sprite-forge" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 遊戲資產生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到快速生成 2D 資產的能力，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於將 Codex 整合進資產生成流程，實現自然語言到遊戲資產的直接轉換。

## 專案簡介

Agent Sprite Forge 是一個專為遊戲開發者設計的工具，能夠將自然語言提示轉換為 2D 精靈和地圖。用戶可以使用指令 $generate2dsprite 生成角色動畫資源，或使用 $generate2dmap 創建地圖，並且能夠導出透明 PNG、GIF 和可用於遊戲的場景數據。這個工具的核心在於 Codex 的整合，讓整個資產生成流程更為簡潔，避免了額外的 API 連接和服務器需求。Python 腳本僅負責執行確定性的像素操作，讓用戶能夠專注於創意而非技術細節。

這樣的設計使得資產生成過程更為高效，特別適合需要快速迭代的遊戲開發環境。使用者可以生成各種資產，包括角色、法術、地圖和碰撞數據，並且可以根據需求調整生成的內容。這個工具的優勢在於其靈活性和高效性，能夠滿足不同遊戲類型的需求，從 RPG 到側捲軸遊戲皆可應用。整體而言，Agent Sprite Forge 提供了一個完整的解決方案，讓開發者能夠快速生成遊戲資產，並且在 Codex 的幫助下，實現更高的創作自由度和效率。

**技術棧**：`Python 3.8+` · `Pillow` · `numpy`

## 重點功能

- 自然語言生成 — 使用 $generate2dsprite 和 $generate2dmap 指令，將提示轉換為 2D 精靈和地圖。
- 多樣化資產類型 — 支持生成角色、法術、地圖和碰撞數據等多種遊戲資產。
- 透明 PNG 和 GIF 輸出 — 能夠導出清晰的透明精靈圖和動畫，方便直接用於遊戲中。
- Codex 整合 — 直接在工作流程中生成圖像，避免了額外的 API 連接。
- 分層地圖生成 — 支持生成可編輯的分層地圖，適合用於各種遊戲引擎。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/0x0funky/agent-sprite-forge.git && cd agent-sprite-forge && python -m pip install -r requirements.txt
```
2. 將技能複製到 Codex 目錄
```bash
mkdir -p ~/.codex/skills && cp -R ./skills/* ~/.codex/skills/
```
3. 啟動 Codex 會話
```bash
啟動新的 Codex 會話以加載技能。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1042 stars（208/天），forks 107（10.3%），顯示出強勁的增長潛力。這個專案由 0x0funky 開發，專注於遊戲資產生成，解決了傳統資產生成流程繁瑣的問題。之前，開發者通常需要依賴多個工具和 API 來生成資產，這樣的流程不僅耗時，還容易出錯。Codex 的整合讓這一切變得簡單，開發者只需透過自然語言提示即可生成所需資產。社群對這個工具的反應熱烈，顯示出其在遊戲開發領域的潛力。

## 適合誰使用

**目標受眾**：需要快速生成 2D 遊戲資產的獨立開發者或小型遊戲團隊。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成 RPG 角色動畫，因為傳統手動繪製過程耗時且容易出錯。
> - 獨立遊戲設計師用它來創建 2D 地圖，因為能夠透過簡單的提示生成複雜的場景，節省了大量時間。
> - 教育工作者用它來設計遊戲化學習內容，因為可以輕鬆生成各種教學資源，提升學生的學習興趣。

## 架構分析

這個專案採用 Python 作為主要開發語言，並利用 Codex 進行圖像生成。整體架構設計上，將生成過程簡化為單一流程，避免了傳統資產生成中多個 API 的繁瑣連接。資料流方面，使用者通過自然語言提示，Codex 解析後直接生成圖像，並由 Python 腳本進行後處理。

這樣的設計使得用戶能夠快速生成所需資產，並且減少了錯誤的可能性。選擇 Python 是因為其強大的圖像處理庫支持，然而這也帶來了對 Python 環境的依賴，可能會影響某些開發者的使用體驗。整體而言，這種設計使得資產生成更為高效，特別適合快速迭代的開發需求。

## 技術深入分析

Agent Sprite Forge 的核心技術在於將 Codex 整合進資產生成流程，這使得用戶能夠通過自然語言提示生成 2D 精靈和地圖。這個工具使用了 Python 的 Pillow 和 numpy 進行圖像處理，能夠有效地處理透明背景和動畫 GIF 的生成。效能方面，這個工具能夠快速生成多種資產類型，並且支持高效的後處理，如背景去除和幀拆分。選擇 Python 作為開發語言是因為其豐富的圖像處理庫，但這也意味著需要用戶有一定的 Python 環境配置能力。設計上，這個工具避免了傳統資產生成中的多個 API 連接，讓整個流程更為簡潔。技術風險方面，依賴 Codex 的生成能力可能會在未來的版本中面臨不穩定性，特別是在生成質量和準確性上。整合方面，這個工具能夠與多種遊戲引擎兼容，特別是 Godot，並且在 CI/CD pipeline 中的應用也相對友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用範例和安裝指導。安裝過程相對順暢，但需要用戶具備基本的 Python 環境配置能力。文件目前僅提供英文和繁體中文版本，對於多語言支持的需求還有提升空間。

## 優缺點分析

> [!success] 優點
> - 快速生成遊戲資產，節省開發時間。
> - 支持多種資產類型，靈活應用於不同遊戲。
> - Codex 整合使得流程簡潔，避免繁瑣的 API 連接。

> [!danger] 缺點
> - 僅支援 2D 資產生成，無法處理 3D 資產。
> - 依賴 Python 環境，對某些開發者可能造成不便。
> - 生成的資產可能需要進一步的手動調整以符合特定需求。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要安裝 Pillow 和 numpy 等依賴。
> - 不支援生成 3D 資產。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的精靈生成，但主要專注於 3D 資產，適合需要更高維度的開發者。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 專注於將圖像轉換為提示，而本專案則是將提示轉換為圖像，功能上有明顯差異。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 3D 資產生成，提供更高維度的資產設計。 | 如果你的遊戲需要 3D 資產，這個工具會更適合。 | medium，因為需要重新設計資產生成流程。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 專注於將圖像轉換為提示，而本專案則是將提示轉換為圖像。 | 如果你的需求是從現有圖像生成提示，這個工具會更合適。 | low，因為可以直接使用現有圖像進行轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agent-sprite-forge** | **boneyard** | **awesome-gpt-image-2-prompts** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 3D 資產生成，提供更高維度的資產設計。 | 專注於將圖像轉換為提示，而本專案則是將提示轉換為圖像。 |
> | 遷移成本 | - | medium，因為需要重新設計資產生成流程。 | low，因為可以直接使用現有圖像進行轉換。 |
> | 適用場景 | 主要場景 | 如果你的遊戲需要 3D 資產，這個工具會更適合。 | 如果你的需求是從現有圖像生成提示，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的資產可能需要手動調整以符合特定需求
  - 解法：在生成後進行手動編輯以達到預期效果
- **[HIGH]** 對 Python 環境的依賴可能造成使用上的困難
  - 解法：確保安裝正確的 Python 版本和依賴
- [MEDIUM] Codex 的生成質量可能不穩定
  - 解法：多次嘗試不同的提示以獲得最佳結果

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型獨立遊戲開發團隊 | 非常適合 | 能夠快速生成所需的 2D 資產，提升開發效率。 |
| 大型遊戲開發公司 | 普通 | 雖然功能強大，但可能無法滿足複雜的資產需求。 |
| 教育機構用於遊戲化學習 | 適合 | 能夠快速生成教學資源，提升學生參與度。 |
| 需要 3D 資產的遊戲開發 | 不適合 | 僅支持 2D 資產生成，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到快速生成 2D 資產的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴的庫有一定的信任度，但仍需注意供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Agent Sprite Forge 最常與 Codex 和各種 2D 遊戲引擎搭配使用，特別是 Godot。在一個使用 Godot 的專案中，你可以使用 $generate2dsprite 生成角色動畫，並使用 $generate2dmap 創建地圖，具體做法是將生成的資產直接導入 Godot 的資產庫。這個工具與 GitHub Actions 等 CI 工具的整合也相對友好，能夠實現自動化資產生成。整合的摩擦點主要在於需要用戶具備一定的 Python 環境配置能力，對於不熟悉 Python 的開發者可能會造成困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Agent Sprite Forge 出現之前，遊戲資產生成通常依賴多個工具和 API，這樣的流程不僅耗時，還容易出錯。隨著 Codex 的發展，將自然語言處理與資產生成結合的可能性變得可行，這使得開發者能夠用更簡單的方式創作遊戲內容。這個工具代表了遊戲開發中對於資產生成流程簡化的趨勢，未來可能會有更多類似的工具出現，進一步提升開發效率。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python 基本操作
- 了解遊戲資產生成的基本概念

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的非關鍵項目中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個模組中開始使用。

**成功指標**：資產生成時間減少 50%。

> [!warning] 退出計畫
> 所有設定以標準 JSON 格式保存，便於轉換為其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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
| Forks | 107 |
| Open Issues | 0 |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-23 |
| Repo 大小 | 56.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/0x0funky/agent-sprite-forge) |
| Topics | `agent-skills` `codex` `pixel-art` `sprite-generator` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `numpy` `Pillow`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@0x0funky](https://github.com/0x0funky) | 20 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/0x0funky/agent-sprite-forge)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-28）
> **活躍天數** 4 天 · **最新 commit** Add Godot map showcase

## README 摘錄

> [!info]- 展開查看原文 README
> # Agent Sprite Forge
> 
> Traditional Chinese README: [README.zh-TW.md](./README.zh-TW.md)
> 
> > Turn natural-language prompts into game-ready 2D sprites and layered 2D maps with Codex.
> >
> > Plan with an agent. Render with built-in image generation. Export clean transparent sheets, GIFs, maps, props, and collision-ready scene data.
> 
> 
> ## Install
> 
> 
> ### Character / Monster Examples
> 
> ```text
> Use  $generate2dsprite to create Omegamon attack and right-move animation assets.
> ```
> 
> ```text
> Use  $generate2dsprite to create a golden divine boar 2x2 idle animation.
> ```
> 
> ```text
> Use  $generate2dsprite to create a Naruto-style rasengan cast sheet in 2x3.
> ```
> 
> 
> ### Map Examples
> 
> ```text
> Use $generate2dmap to create a small fixed-screen pixel-art battle arena with simple collision.
> ```
> 
> ```text
> Use $generate2dmap to create a top-down RPG forest shrine map. Use a layered raster pipeline, a 3x3 prop pack for small environmental props, precise collision, encounter grass zones, a rest point, and actors that can walk in front of and behind tall props.
> ```
> 
> ```text
> Use $generate2dmap to revise this existing map into a layered raster map. Keep the background baked, but split the gate and lanterns into reusable transparent props with y-sort placement metadata.
> ```
> 
> 
> ## What It Can Generate
> 
> - Creatures
> - Characters
> - Players and NPCs
> - Spell casts
> - Projectiles
> - Impacts and explosions
> - FX sheets
> - Small bundles such as `unit_bundle`, `spell_bundle`, and `combat_bundle`
> - Reference-guided sprite variants, animation sheets, and evolution lines
> - Single baked 2D maps
> - Clean HD hand-painted layered maps
> - Layered base maps with transparent props
> - Dressed-reference guided layered maps
> - 2D map prop packs such as `2x2`, `3x3`, and `4x4`
> - Collision and zone metadata for playable maps
> - Flattened map previews for QA and showcase
> - Godot-ready editable maps with `TileMapLayer`, separate props, `Area2D` encounter grass, `StaticBody2D` collision, exit zones, and debug player scenes
> 
> 
> ### Option 1: Windows PowerShell
> 
> Clone the repo, install the local processor dependencies, then copy both skills into your Codex skills directory:
> 
> ```powershell
> git clone https://github.com/0x0funky/agent-sprite-forge.git
> cd .\agent-sprite-forge
> python -m pip install -r .\requirements.txt
> New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\skills" | Out-Null
> Copy-Item -Recurse -Force `
>   ".\skills\*" `
>   "$env:USERPROFILE\.codex\skills\"
> ```
> 
> 
> ### Option 2: macOS / Linux
> 
> ```bash
> git clone https://github.com/0x0funky/agent-sprite-forge.git
> cd ./agent-sprite-forge
> python3 -m pip install -r ./requirements.txt
> mkdir -p ~/.codex/skills
> cp -R ./skills/* ~/.codex/skills/
> ```
> 
> Start a new Codex session after installation so the skill is loaded cleanly.
> 
> 
> ## Why Codex First
> 
> This repo is intentionally Codex-first because Codex can generate images directly inside the same workflow.
> 
> That gives you a much cleaner pipeline:
> 
> - No separate image API wiring
> - No external sprite backend
> - No extra prompt-builder service
> - One agent decides the asset plan
> - One local processor handles deterministic cleanup and export
> 
> The script is not the creative brain. The agent decides:
> 
> - Asset type
> - Action type
> - Bundle shape
> - Sheet layout
> - Frame count
> - Alignment strategy
> - Whether detached effects should be kept or filtered
> 
> The Python script only performs deterministic pixel operations.
> 
> 
> ## Showcase
> 
> 
> ### Text To Sprite
> 
>   
>     
>       
>       
>       Goku with Kamehameha
>       
>       help me to use $generate2dsprite to create a goku is attacking with Kamehameha
>     
>     
>       
>       
>       Naruto using Rasengan
>       
>       使用 $generate2dsprite 幫我做一個鳴人使用螺旋丸的元素
>     
>   
> 
> 
> ### Spell Bundle / Cast, Projectile, Impact
> 
>   
>     
>       
>       
>       Cast
>     
>     
>       
>       
>       Projectile
>     
>     
>       
>       
>       Impact
>     
>   
> 
> Prompt:
> 
> ```text
> Use  $generate2dsprite to create a fire mage cast animation with projectile and impact.
> ```
> 
> 
> ### Game Sprite / Four-Direction Walk
> 
>   
>     
>       
>       
>       Down
>     
>     
>       
>       
>       Left
>     
>     
>       
>       
>       Right
>     
>     
>       
>       
>       Up
>     
>   
> 
> Prompt:
> 
> ```text
> Use Generate 2D Sprite to create a top-down 4x4 player_sheet for a wandering young samurai with a red scarf and short katana.
> Make a four-direction walk sprite sheet with 4 frames per direction.
> Row order: down, left, right, up.
> Same character, same outfit, same proportions, same pixel scale in every frame.
> Solid #FF00FF background.
> Each frame must fit fully inside its cell, with clear margin on all sides.
> Retro JRPG pixel-art style.
> ```
> 
> 
> ### Reference To Sprite
> 
>   
>     
>       
>       
>       Reference
>     
>     
>       
>       
>       Generated sprite animation
>       
>       幫我使用 $generate2dsprite 做一個這隻鱷魚玩手上石頭的元素
>     
>   
>   
>     
>       
>       
>       Reference
>     
>     
>       
>       
>       Generated sprite animation
>       
>       Use  $generate2dsprite to create this male character teaching.
>     
>   
> 
> 
> ### Codex One-Shot Playable Games
> 
> End-to-end playable games designed and built by Codex in a single prompt, with sprites and props produced through `$generate2dsprite` and map scenes planned through `$generate2dmap` when the game needs structured maps.
> 
> #### Neon Breach — Cyberpunk Side-Scroller
> 
>   
> 
> Prompt:
> 
> ```text
> use $generate2dsprite to create a 2D side-scrolling game similar to Mega Man. It should include attack mechanics, map elements, and all the essential features. I would like you to design it, and all the necessary assets should be created using this skill. It needs to be an actually playable game, with a cyberpunk story setting.
> ```
> 
> #### 晴嵐御魂錄 — Sengoku-Era Pokémon-like
> 
>   
>     
>       
>       
>       Starter selection
>     
>     
>       
>       
>       Battle scene
>     
>   
> 
> Prompt:
> 
> ```text
> Use $generate2dsprite to create a 2D game similar to Pokemon. You only need to build one scene for now. It must include a starter monster selection mechanic, a battle screen, and all basic gameplay functions. I would like you to design all the elements and the story, and you can also decide which game engine to use. Use this skill to create any assets you need. The story should be set in the Sengoku period. Can you try putting this together for me?
> Please also pay attention to the size of the elements (the generated sprites need to be proportionally correct when placed into the game), and a game map must be generated as well. Basically, just help me make a game like this—I believe you won't have any problem doing this with that skill! Just one scene is enough, and there's no need for too many monster characters. Let's just start with a few, and we can slowly expand on it later!
> ```
> 
> 
> ### Layered RPG Map / Clean HD Reference Pipeline
> 
> `$generate2dmap` now models maps as a production pipeline instead of a single strategy label. It chooses a visual model, runtime object model, collision model, art direction, and export target. For layered raster maps it defaults to a clean hand-painted HD game-map style for readability, generates a ground-only base map, uses that visible base as a wrapper reference for a dressed planning pass, batches small props into a 3x3 prop pack, extracts transparent props, places them with y-sort metadata, and composes a flattened preview.
> 
>   
>     
>       
>       
>       Ground-only base map
>     
>     
>       
>       
>       Dressed reference pass
>     
>     
>       
>       
>       3x3 generated prop pack
>     
>   
> 
>   
>   
>   Flattened layered RPG map preview
> 
> Pipeline:
> 
> ```text
> layered_raster + y_sorted_props + precise_shapes + trigger_zones + raw_canvas
> ```
> 
> Reference-guided layered maps use this flow:
> 
> 1. Pick the art direction: `clean_hd` by default for readable game maps, `pixel_inspired` for a softer pixel-adjacent look, or `retro_pixel` only when the user asks for classic pixel art.
> 2. Generate a ground-only base map.
> 3. Show the base map in the conversation context and generate a dressed reference from it.
> 4. Generate one-by-one props or a tightly margined prop pack from the dress

## 延伸閱讀

相關概念：[[遊戲資產生成]] · [[自然語言處理]] · [[2D 像素藝術]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/0x0funky/agent-sprite-forge)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲資產生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲資產生成" AND file.name != "0x0funky--agent-sprite-forge"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "0x0funky--agent-sprite-forge"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "0x0funky--agent-sprite-forge" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "0x0funky--agent-sprite-forge"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲資產生成","自然語言處理","2D 像素藝術"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "0x0funky--agent-sprite-forge" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "0x0funky--agent-sprite-forge" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "0x0funky" AND file.name != "0x0funky--agent-sprite-forge"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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
> const me = dv.page("Repos/0x0funky--agent-sprite-forge");
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

- [[2026-04-30|2026-04-30]] — 再次上榜，1.2k stars
- [[2026-04-29|2026-04-29]] — 再次上榜，1.0k stars
- [[2026-04-28|2026-04-28]] — 首次收錄，871 stars
