---
repo: tandpfun/wardrobe
url: https://github.com/tandpfun/wardrobe
owner: tandpfun
owner_type: User
language: JavaScript
license: MIT
description: "Your clothes, extracted and organized with gpt-image."
homepage: ""
stars: 1064
stars_per_day: 532
forks: 159
open_issues: 2
created: 2026-07-16
pushed_at: 2026-07-16
first_seen: 2026-07-18
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-18
use_case: "透過 gpt-image 提取和組織你的衣物。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 3191
readme_length: 2502
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-18"
star_history: "2026-07-18:909,2026-07-19:1064"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "wardrobe"
  - "tandpfun/wardrobe"
  - "透過 gpt-image 提取和組織你的衣物。"
---

# wardrobe

**909** stars · **909** stars/天 · 建立 1 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/tandpfun--wardrobe");
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
> 透過 gpt-image 提取和組織你的衣物。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (909 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望將衣物數位化並進行個性化搭配的獨立開發者或時尚愛好者。
> **一句話重點** Wardrobe 將衣物管理數位化，並強調用戶隱私，這在當前市場中具有獨特的價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tandpfun--wardrobe");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "tandpfun--wardrobe" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的衣物管理工具，值得一試。

> [!abstract] 核心創新
> Wardrobe 提供了一個本地優先的 AI 衣櫥管理解決方案，結合了圖像生成和數據隱私的考量。

## 專案簡介

Wardrobe 是一個本地優先的 AI 衣櫥畫廊，利用 OpenAI 的 API 來管理和生成衣物的數位化展示。用戶可以透過簡單的 CLI 指令，如 `$import-clothes` 和 `$generate-outfits`，將衣物從指定資料夾導入並生成造型照片。這個工具的賣點在於其能夠自動檢測照片中的衣物，提取乾淨的產品剪影，並生成編輯預覽，讓用戶能夠在本地保存所有資料，避免雲端存儲的隱私風險。技術上，它使用了 React 和 Vite 框架，並依賴 OpenAI 的多個模型來進行圖像處理和生成，這使得其在處理速度和質量上都表現優異。

與其他類似工具相比，如 0xGF/boneyard 和 0x0funky/agent-sprite-forge，Wardrobe 提供了更為直觀的用戶界面和本地化的數據管理，特別適合注重隱私的用戶。這個專案目前處於初期階段，社群活躍度尚可，但解決問題的速度需要提高，因為目前有 2 個未解決的問題。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，尤其是對於那些希望將衣物數位化並進行個性化搭配的用戶。未來幾個月，隨著功能的增強和社群的擴展，這個專案的潛力將會更加明顯。

**技術棧**：`React 19.2.0` · `Vite 6.4.3` · `OpenAI API`

## 重點功能

- 衣物導入 — 使用 `$import-clothes` 指令從指定資料夾導入衣物並生成造型照片。
- 造型生成 — 使用 `$generate-outfits` 指令生成搭配建議，並可選擇生成的造型數量。
- 本地數據管理 — 所有資料（原始照片、生成圖片和 JSON 數據庫）均保存在本地，保障用戶隱私。
- 多種配置選項 — 支援多個 OpenAI 模型和參數設定，讓用戶能夠自定義體驗。
- 直觀的 Web UI — 提供用戶友好的界面，方便用戶進行衣物管理和搭配生成。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/tandpfun/wardrobe.git
```
2. 安裝依賴
```bash
cd wardrobe && npm install
```
3. 配置環境變數
```bash
cp .env.example .env
```
4. 啟動開發伺服器
```bash
npm run dev
```

## 程式碼範例

```js
{
  "前置條件": "需要配置 OPENAI_API_KEY 和 model-reference PNG。",
  "指令": "$import-clothes Import the clothes from ~/Pictures/outfits, create modeled photos, and add them to this wardrobe.",
  "預期輸出": "將衣物導入並生成相應的造型照片。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 909 stars（909/天），forks 132（14.5%），顯示出強烈的市場需求。作者 tandpfun 之前有開發相關的 AI 工具，這個專案解決了用戶在管理衣物時的繁瑣流程，特別是在數位化和搭配方面。近期的社交媒體推廣可能也促進了這個專案的曝光。技術上，隨著 OpenAI API 的普及，這個工具的可行性大幅提升。高達 14.5% 的 forks/stars 比率顯示出許多人對這個專案的興趣，可能會進行實際的修改和使用。

## 適合誰使用

**目標受眾**：希望將衣物數位化並進行個性化搭配的獨立開發者或時尚愛好者。

> [!example] 使用場景
> - 時尚設計師用它來快速生成衣物搭配的數位化展示，因為這樣可以節省時間並提升創意靈感。
> - 獨立開發者用它來構建個性化的衣物管理應用，因為其本地數據存儲方式能夠保護用戶隱私。
> - 服裝零售商用它來展示新產品的搭配，因為自動生成的造型照片能夠提高顧客的購買意願。

## 架構分析

Wardrobe 採用單頁應用架構，前端使用 React 和 Vite 進行開發，後端則依賴 OpenAI 的 API 進行圖像處理。資料流方面，使用者上傳的衣物照片經過 OpenAI 的圖像模型進行處理，生成的數據存儲在本地的 JSON 文件中。這樣的設計使得用戶能夠完全控制自己的數據，避免了雲端存儲的隱私風險。選擇使用 OpenAI 的 API 是因為其在圖像處理上的強大能力，但這也意味著對外部服務的依賴，可能在 API 變更時影響功能。整體架構的擴展性良好，但在處理大量圖片時可能會遇到性能瓶頸，特別是在生成造型時需要較高的計算資源。

## 技術深入分析

Wardrobe 的核心技術機制依賴於 OpenAI 的圖像處理 API，能夠自動檢測和提取衣物，並生成相應的造型預覽。這使得用戶能夠快速地將實體衣物數位化，並進行搭配生成。效能方面，依賴於 OpenAI 的服務，可能在高峰時段出現延遲，尤其是在處理大量圖片時。設計上選擇使用 React 和 Vite 是因為它們能夠提供快速的開發和良好的用戶體驗，但這也意味著需要一定的前端技術基礎。技術風險方面，對 OpenAI API 的依賴可能會在未來帶來不穩定性，特別是當 API 更新或改變時。整合方面，Wardrobe 可以輕鬆地與現有的前端工具鏈搭配，但對於後端的擴展性仍需進一步考量，特別是在需要處理大量資料時。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程順暢，但需要注意配置環境變數。文件目前僅提供英文版本，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 本地數據存儲，保障用戶隱私。
> - 直觀的用戶界面，易於使用。
> - 自動化的衣物導入和造型生成，節省時間。

> [!danger] 缺點
> - 需要有效的 OPENAI_API_KEY，增加使用門檻。
> - 目前社群支持有限，解決問題的速度較慢。
> - 僅支援 PNG 格式的參考照片，限制了使用靈活性。

> [!warning] 注意事項
> - 需要有效的 OPENAI_API_KEY 才能使用導入功能。
> - 目前僅支援 PNG 格式的參考照片。
> - 社群支持尚未成熟，解決問題的速度較慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的衣物管理功能，但缺乏本地數據存儲，可能會影響用戶隱私。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色造型，功能上不如 Wardrobe 直觀，且不支援衣物導入。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的衣物管理功能，但缺乏本地數據存儲，可能會影響用戶隱私。 | 如果你的團隊已經在使用雲端解決方案，並且不太關心數據隱私問題。 | medium，因為需要重新設計數據存儲方案。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色造型，功能上不如 Wardrobe 直觀，且不支援衣物導入。 | 如果你的專案需要生成角色造型而非衣物管理。 | low，因為功能範圍不同，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wardrobe** | **boneyard** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的衣物管理功能，但缺乏本地數據存儲，可能會影響用戶隱私。 | 專注於生成角色造型，功能上不如 Wardrobe 直觀，且不支援衣物導入。 |
> | 遷移成本 | - | medium，因為需要重新設計數據存儲方案。 | low，因為功能範圍不同，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用雲端解決方案，並且不太關心數據隱私問題 | 如果你的專案需要生成角色造型而非衣物管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 導入功能需要有效的 OPENAI_API_KEY，否則無法使用。
  - 解法：確保在 .env 文件中正確配置 API 金鑰。
- [MEDIUM] 僅支援 PNG 格式的參考照片，其他格式無法使用。
  - 解法：轉換照片為 PNG 格式後再上傳。
- [MEDIUM] 社群支持有限，解決問題的速度較慢。
  - 解法：定期檢查 GitHub Issues，尋找解決方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 時尚設計師的個人作品集管理 | 非常適合 | 提供了高效的衣物數位化和搭配生成功能。 |
| 小型團隊的衣物管理系統 | 適合 | 本地數據存儲能夠保障團隊隱私。 |
| 大型企業的服裝零售展示 | 普通 | 雖然功能強大，但可能需要更多的企業級支持。 |
| 個人愛好者的衣物整理 | 非常適合 | 簡單易用，適合個人使用。 |
| 需要高效雲端存儲的服裝管理 | 不適合 | 專案強調本地存儲，無法滿足雲端需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的衣物管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，僅需存取本地檔案系統，且不會存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tandpfun--wardrobe");
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
> const me = dv.page("Repos/tandpfun--wardrobe");
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
| Forks | 132 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-16 |
| 建立日期 | 2026-07-16 |
| Repo 大小 | 3.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tandpfun/wardrobe) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@fontsource-variable/instrument-sans` `@phosphor-icons/react` `@unpic/react` `@vitejs/plugin-react` `ipx` `react` `react-dom` `sharp` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 74
>     "CSS" : 25
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tandpfun](https://github.com/tandpfun) | 9 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但解決問題的速度需要提高。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-16 ~ 2026-07-16）
> **活躍天數** 1 天 · **最新 commit** Add modeled outfit generation skills

## README 摘錄

> [!info]- 展開查看原文 README
> # Wardrobe
> 
> Your clothes, extracted and organized with gpt-image.
> 
> [](LICENSE)
> [](package.json)
> 
> [See the original post →](https://x.com/cdngdev/status/2076812846793650485)
> 
> ## Quick start
> 
> ```bash
> git clone https://github.com/tandpfun/wardrobe.git
> cd wardrobe
> npm install
> cp .env.example .env
> npm run dev
> ```
> 
> ⚠️ The importer stays disabled until you add `OPENAI_API_KEY` to `.env` and place a PNG reference photo of yourself at `data/model-reference.png`.
> 
> Open [localhost:5173](http://localhost:5173).
> 
> ## Import with Codex
> 
> This repo includes two Codex skills: one imports clothes and generates modeled item photos; the other styles complete outfits and generates a modeled lookbook.
> 
> ```text
> $import-clothes Import the clothes from ~/Pictures/outfits, create modeled photos, and add them to this wardrobe.
> $generate-outfits Create modeled outfit ideas from my wardrobe.
> ```
> 
> Open the cloned repo in Codex and run either prompt. The import skill asks for a local model-reference PNG when needed, reviews every cutout and modeled photo, then writes to `data/library.json` and `data/imported/`. The outfit skill asks how many looks to create, then curates, generates, verifies, and saves the complete collection under `data/`.
> 
> ### For agents
> 
> If you are setting up Wardrobe for a user, ask how they want to import their clothes:
> 
> - **Codex:** Ask for a folder or camera-roll location and a model-reference PNG, then extract, model, and import the individual pieces by following [the bundled import skill](.agents/skills/import-clothes/SKILL.md). Afterward, offer to create a requested number of modeled looks with [the outfit-generation skill](.agents/skills/generate-outfits/SKILL.md).
> - **Web UI:** Help the user configure their own `OPENAI_API_KEY` and `data/model-reference.png`, then let them import through the app.
> 
> ## What it does
> 
> - Detects every garment in a photo with the OpenAI Responses API
> - Extracts clean product cutouts with the OpenAI Images API
> - Generates an optional modeled editorial preview
> - Keeps originals, jobs, generated images, and the JSON database local in `data/`
> - Supports drag, drop, paste, editing, review, regeneration, and approval
> 
> ## Configuration
> 
> | Variable | Default |
> | --- | --- |
> | `OPENAI_API_KEY` | Required |
> | `OPENAI_VISION_MODEL` | `gpt-5.4-mini` |
> | `OPENAI_IMAGE_MODEL` | `gpt-image-2` |
> | `OPENAI_IMAGE_QUALITY` | `high` |
> | `WARDROBE_MODEL_REFERENCE` | `data/model-reference.png` |
> | `WARDROBE_DATA_DIR` | `data` |
> 
> ## License
> 
> [MIT](LICENSE)

## 延伸閱讀

相關概念：[[自動化]] · [[AI 圖像生成]] · [[隱私保護]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[CopilotKit--OpenTag|CopilotKit/OpenTag]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[momenbasel--PureMac|momenbasel/PureMac]]

[GitHub](https://github.com/tandpfun/wardrobe)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "tandpfun--wardrobe"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "tandpfun--wardrobe"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "tandpfun--wardrobe" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "tandpfun--wardrobe"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 圖像生成","隱私保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tandpfun--wardrobe" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tandpfun--wardrobe");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tandpfun--wardrobe" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tandpfun" AND file.name != "tandpfun--wardrobe"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tandpfun--wardrobe");
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
> const me = dv.page("Repos/tandpfun--wardrobe");
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
> const me = dv.page("Repos/tandpfun--wardrobe");
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
> const me = dv.page("Repos/tandpfun--wardrobe");
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
> const me = dv.page("Repos/tandpfun--wardrobe");
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

> **2026-07-18** — 首次收錄
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

- [[2026-07-19|2026-07-19]] — 再次上榜，1.1k stars
- [[2026-07-18|2026-07-18]] — 首次收錄，909 stars
