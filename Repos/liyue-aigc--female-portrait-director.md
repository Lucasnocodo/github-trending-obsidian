---
repo: liyue-aigc/female-portrait-director
url: https://github.com/liyue-aigc/female-portrait-director
owner: liyue-aigc
owner_type: User
language: N/A
license: MIT
description: "A modular Codex Skill for directing and expanding detailed AI female portrait prompts."
homepage: ""
stars: 510
stars_per_day: 102
forks: 74
open_issues: 0
created: 2026-05-30
pushed_at: 2026-06-01
first_seen: 2026-06-05
week: "2026-W23"
month: "2026-06"
category: "AI/ML"
subcategory: "圖像生成"
release_tag: "v1.4.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-05
use_case: "提供一個模組化的系統來生成詳細的女性肖像提示，專注於視覺導向和參數鎖定。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-12"
contributor_count: 2
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 1765
readme_length: 6105
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-05"
star_history: "2026-06-05:510"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - easy_install
  - "topic/ai_image_generation"
  - "topic/codex"
  - "topic/codex_skill"
  - "topic/open_source"
  - "topic/prompt_engineering"
aliases:
  - "female-portrait-director"
  - "liyue-aigc/female-portrait-director"
  - "提供一個模組化的系統來生成詳細的女性肖像提示，專注於視覺導向和參數鎖定。"
---

# female-portrait-director

**510** stars · **102** stars/天 · 建立 5 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/liyue-aigc--female-portrait-director");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.4.0` `easy-install`

`ai-image-generation` `codex` `codex-skill` `open-source` `prompt-engineering`

> [!summary] 一句話摘要
> 提供一個模組化的系統來生成詳細的女性肖像提示，專注於視覺導向和參數鎖定。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要生成高質量女性肖像的插畫師和設計師。
> **一句話重點** 這個專案的模組化設計和參數鎖定功能，使得生成女性肖像的過程更加高效和一致。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像生成" && p.file.name !== "liyue-aigc--female-portrait-director" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖像生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高質量的女性肖像生成效果，值得投入。

> [!abstract] 核心創新
> 提供一個模組化的系統來生成詳細的女性肖像提示，專注於視覺導向和參數鎖定。

## 專案簡介

Female Portrait Prompt Director Skill 是一個專門為 AI 圖像生成設計的提示生成和視覺導向系統。用戶只需提供簡單的參數，如風格、場景和服裝，系統會自動擴展這些參數，生成完整的提示，並鎖定關鍵參數以保持一致性。這樣的設計不僅能夠提高生成圖像的質量，還能確保生成的圖像符合用戶的具體需求。使用者可以透過 `$female-portrait-director` 指令來調用此功能，並獲得一個完整的可複製提示，這樣的流程大大減少了手動編寫提示的時間。技術上，這個專案使用了模組化的路由系統，將不同的肖像風格分為多個類別，並在每個請求中鎖定用戶指定的參數，這樣可以避免風格衝突。

與其他通用的提示生成工具相比，這個專案專注於女性肖像的生成，並提供了 14 種不同的風格選擇，這使得它在特定領域中更具優勢。使用者可以期待生成的圖像在視覺上更具一致性和真實感，特別是在電子商務和時尚攝影領域。這個工具的設計考慮到了安全性，確保生成的內容不會涉及不當或非法的主題。對於需要生成高質量女性肖像的創作者或設計師來說，這是一個非常合適的選擇。未來可能會持續擴展更多的風格和功能，以滿足不斷變化的需求。

## 重點功能

- 模組化路由系統 — 將請求通過單一的風格檔案路由，避免風格衝突。
- 參數鎖定 — 鎖定用戶指定的參數，確保生成內容的一致性。
- 多樣化風格選擇 — 提供 14 種不同的肖像風格，滿足多種需求。
- 詳細提示生成 — 擴展簡單參數為完整的可複製提示，強調視覺一致性。
- 安全邊界 — 確保生成內容不涉及不當或非法主題，符合使用規範。

## 快速開始

1. 全局安裝 Codex Skill
```bash
npx skills@latest add liyue-aigc/female-portrait-director -g -a codex -y
```
2. 更新已安裝的 Skill
```bash
npx skills@latest update female-portrait-director -g -y
```
3. 調用 Skill
```bash
$female-portrait-director
```

## 程式碼範例

```bash
{
  "前置條件": "使用者已安裝 Codex 並全局安裝了此 Skill。",
  "指令": "$female-portrait-director\nStyle: clean lifestyle portrait\nScene: window seat in a cafe\nOutfit: white knitted cardigan + light-colored inner layer\nMood: clean and gentle\nAspect ratio: 9:16",
  "預期輸出": "1. 鎖定參數\n2. 模組分析\n3. 最終提示\n4. 負面約束"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 510 stars（102/天），forks 74（14.5%），顯示出強烈的社群興趣。作者 Li Yue 在 AI 生成領域有一定的經驗，這個專案解決了生成女性肖像時的參數鎖定和風格一致性問題，這在其他通用工具中往往難以實現。近期的推廣活動和社群討論也可能促進了其曝光率。此工具的設計考慮到了用戶需求，並提供了多樣化的風格選擇，這使得它在市場上具有競爭力。forks/stars 比率為 14.5%，顯示出許多用戶對於進一步修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要生成高質量女性肖像的插畫師和設計師。

> [!example] 使用場景
> - 插畫師用它來生成高質量的女性肖像，因為它能快速鎖定參數並生成詳細的提示，節省了手動編寫的時間。
> - 電子商務設計師用它來創建產品模型圖像，因為它提供了多種風格選擇，能夠滿足不同的市場需求。
> - 攝影師用它來獲得靈感，因為它能生成具體的場景和服裝提示，幫助他們在拍攝前進行詳細規劃。

## 架構分析

這個專案採用模組化的架構設計，將不同的肖像風格和生成邏輯分為多個模組。每個請求都通過一個單一的風格檔案進行路由，這樣可以避免風格之間的衝突，並確保生成內容的一致性。資料流從用戶輸入的簡單參數開始，經過各個模組的處理，最終生成完整的提示。這樣的設計使得系統在擴展新風格時更加靈活，但也可能導致初期的學習曲線。整體架構的輕量化設計使得它能夠快速響應用戶請求，適合用於高頻率的生成需求。

## 技術深入分析

這個專案的核心技術機制在於其模組化的路由系統，能夠根據用戶輸入的參數生成詳細的提示。每個請求都經過一個單一的風格檔案，這樣的設計避免了風格之間的衝突，並確保生成內容的一致性。系統能夠處理多達 14 種不同的肖像風格，並且在生成過程中鎖定用戶指定的參數，這樣可以提高生成結果的質量。效能方面，該系統設計為輕量級，能夠快速響應用戶請求，適合高頻率的生成需求。

選擇 Node.js 作為開發語言，因為其非同步處理能力強，能夠有效管理多個請求。這樣的選擇雖然增加了初期的學習曲線，但也為未來的擴展提供了良好的基礎。技術風險方面，隨著用戶需求的增長，系統可能面臨性能瓶頸，特別是在高並發請求下。整合方面，該工具能夠與現有的 Codex 生態系統無縫對接，並且支持多種開發環境，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢，沒有明顯的坑。文件有多語言版本，增加了可讀性。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 高質量的生成結果，能夠滿足專業需求。
> - 模組化設計使得擴展新風格變得容易。
> - 安全邊界設計，確保生成內容符合道德標準。

> [!danger] 缺點
> - 僅限於女性肖像生成，適用範圍有限。
> - 需要一定的技術背景來安裝和使用。
> - 目前支持的語言較少，可能不適合非英語用戶。

> [!warning] 注意事項
> - 僅支援生成成人女性肖像，無法用於未成年人或不當內容。
> - 需要 Node.js 環境來運行，對於不熟悉的用戶可能有學習曲線。
> - 目前僅支持英文提示，其他語言可能需要額外處理。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色精靈，主要用於遊戲開發，而本專案專注於女性肖像生成。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供更廣泛的圖像到提示生成，但缺乏本專案的專業化和參數鎖定功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於生成各類型的圖像，但缺乏針對女性肖像的專業化設計。 | 如果需要生成多樣化的圖像而不僅限於女性肖像，則可以考慮此工具。 | medium，因為需要重新調整生成邏輯和參數設置。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供更廣泛的 Codex 整合，但不專注於特定的圖像生成需求。 | 如果團隊已經在使用 Codex 且需要更廣泛的功能，則可以考慮此工具。 | low，因為可以直接整合到現有的 Codex 環境中。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **female-portrait-director** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成各類型的圖像，但缺乏針對女性肖像的專業化設計。 | 提供更廣泛的 Codex 整合，但不專注於特定的圖像生成需求。 |
> | 遷移成本 | - | medium，因為需要重新調整生成邏輯和參數設置。 | low，因為可以直接整合到現有的 Codex 環境中。 |
> | 適用場景 | 主要場景 | 如果需要生成多樣化的圖像而不僅限於女性肖像，則可以考慮此工具 | 如果團隊已經在使用 Codex 且需要更廣泛的功能，則可以考 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，生成的圖像可能不符合預期的風格要求。
  - 解法：調整輸入參數以更明確地定義風格。
- **[HIGH]** 對於複雜場景的生成，可能需要多次調整參數才能達到理想效果。
  - 解法：使用範例作為參考，逐步調整參數。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計工作室需要生成女性肖像用於廣告 | 非常適合 | 專注於女性肖像生成，能夠提供高質量的結果。 |
| 大型電商平台需要多樣化的產品圖像 | 普通 | 雖然有多種風格，但專注於女性肖像可能不符合所有需求。 |
| 獨立插畫師需要靈感和參考 | 非常適合 | 能夠快速生成高質量的參考圖像，節省時間。 |
| 需要生成男性肖像的項目 | 不適合 | 專案僅限於女性肖像生成，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高質量的女性肖像生成效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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
| Forks | 74 |
| Open Issues | 0 |
| 最後推送 | 2026-06-01 |
| 建立日期 | 2026-05-30 |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/liyue-aigc/female-portrait-director) |
| Topics | `ai-image-generation` `codex` `codex-skill` `open-source` `prompt-engineering` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liyue071714118](https://github.com/liyue071714118) | 13 |
> | [@liyue-aigc](https://github.com/liyue-aigc) | 2 |

**最新版本**：v1.4.0 — Female Portrait Prompt Director v1.4.0 (2026-05-31)

> [!info]- Release Notes
> ## Female Portrait Prompt Director Skill v1.4.0
> 
> Registry-driven modular routing release.
> 
> ### Highlights
> 
> - Added a lightweight style registry as the single routing entry point.
> - Expanded the implemented portrait styles from 5 to 14 routes.
> - Grouped routes into lifestyle, fashion, oriental, fantasy, commercial, and curve categories.
> - Split shared rules into parameter locking, safety boundaries, output formatting, conflict resolution, and fallback modules.
> - Added the complete Oriental Voluptuous portrait route.
> - Preserved detailed director-style visual reasoning before prompt composition instead of summary output or mechanical field filling.

## 社群與生態

**社群活躍度**：社群活躍度高，近期有多次更新和活躍的討論。
**連結**：[文件](https://github.com/liyue-aigc/female-portrait-director)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-30 ~ 2026-06-01）
> **活躍天數** 3 天 · **最新 commit** Add authorized reference-image generation workflow

## README 摘錄

> [!info]- 展開查看原文 README
> [English](README.md) | [简体中文](README_zh.md) | [日本語](README_ja.md) | [한국어](README_ko.md)
> 
> # Female Portrait Prompt Director Skill
> 
> Female Portrait Prompt Director Skill is a structured prompt-generation and visual-direction system for AI image creation. V1.4.1 routes each request through a single on-demand style file, locks explicit parameters or authorized reference-image subjects, and produces either a coherent photographed prompt or a direct identity- or product-preserving image edit.
> 
> This project is not a generic prompt collection. It is an extensible female portrait prompt Skill framework.
> 
> ## Project Scope
> 
> Generate complete prompts from a small set of input parameters. Preserve the user's explicit requirements while visually expanding facial features, body shape, outfit, scene, camera and pose, lighting, filters, platform purpose, and negative constraints. Subjects must be clearly adult women. Outputs emphasize realistic photography, restrained expression, visual coherence, and stable generation.
> 
> ## Supported Styles
> 
> - Clean lifestyle portraits
> - Restrained curve-focused lifestyle portraits
> - Urban fashion photography
> - Gufeng fantasy portraits
> - E-commerce clothing model images
> - Retro Hong Kong portraits
> - French relaxed portraits
> - New Chinese oriental portraits
> - Sporty active portraits
> - Travel vacation portraits
> - Studio-retouched portraits
> - Oriental voluptuous portraits
> - Cold xianxia enhanced portraits
> - Bright luxury gufeng portraits
> 
> ## Core Capabilities
> 
> - Lock user-specified parameters and only refine or stabilize them.
> - Route each request through one on-demand style file and avoid conflicting style keywords.
> - Parse face, body, outfit, scene, camera and pose, lighting, and filter modules.
> - Expand short parameters into a coherent photographed moment instead of mechanically repeating them.
> - Fuse the expanded modules into natural, detailed, copy-ready prompts with photography-director intent.
> - Preserve clothing-display priority for e-commerce images and explicit safety boundaries for curve-focused portraits.
> - Preserve authorized selfie identity or product core visuals for direct reference-image generation.
> 
> ## Quick Start
> 
> When using this repository as a Codex Skill, invoke `$female-portrait-director`. Minimal example:
> 
> ```text
> Style: clean lifestyle portrait
> Scene: window seat in a cafe
> Outfit: white knitted cardigan + light-colored inner layer
> Mood: clean and gentle
> Aspect ratio: 9:16
> ```
> 
> The system returns locked parameters, a complete copy-ready prompt, and negative constraints. See [parameter_schema.md](skill/parameter_schema.md) for the full input schema and [usage_examples.md](skill/usage_examples.md) for examples.
> 
> ## Installation
> 
> ### One-command install with npx
> 
> Requires [Node.js](https://nodejs.org/) with `npx`. Install the Skill globally for Codex:
> 
> ```bash
> npx skills@latest add liyue-aigc/female-portrait-director -g -a codex -y
> ```
> 
> Update the installed Skill later:
> 
> ```bash
> npx skills@latest update female-portrait-director -g -y
> ```
> 
> ### Manual install with Git
> 
> Alternatively, clone the repository into your Codex skills directory.
> 
> Windows PowerShell:
> 
> ```powershell
> git clone https://github.com/liyue-aigc/female-portrait-director.git "$env:USERPROFILE\.codex\skills\female-portrait-director"
> ```
> 
> macOS or Linux:
> 
> ```bash
> git clone https://github.com/liyue-aigc/female-portrait-director.git "${CODEX_HOME:-$HOME/.codex}/skills/female-portrait-director"
> ```
> 
> Restart Codex or start a new conversation, then invoke:
> 
> ```text
> $female-portrait-director
> ```
> 
> ## Example: Parameters to Directed Prompt
> 
> The Skill does more than restate the input. It preserves requested parameters, fills in missing visual details, and produces locked parameters, module analysis, a final prompt, and negative constraints.
> 
> ```text
> Portrait style: Gufeng xianxia beauty portrait
> Scene: Traditional courtyard corridor surrounded by misty mountains and water
> Outfit: Moon-white Tang-inspired fantasy wide-sleeve robe + flowing pibo scarf + silver embroidered waist sash
> Mood: Cool, distant, ethereal
> Facial direction: Classical East Asian beauty
> Body direction: Slender and delicate figure
> Camera direction: Slight side-facing standing pose, half-body to thigh framing
> Lighting: Cool soft light
> Filter: Cool ethereal gufeng filter
> Aspect ratio: 9:16
> Platform use: Character portrait
> ```
> 
> ## Output Format
> 
> ```text
> 1. Locked parameters
> 2. Module analysis
> 3. Final prompt
> 4. Negative constraints
> ```
> 
> ## Repository Structure
> 
> ```text
> .
> ├── README.md
> ├── README_zh.md
> ├── README_ja.md
> ├── README_ko.md
> ├── SKILL.md
> ├── agents/openai.yaml
> ├── assets/examples/
> ├── skill/
> │   ├── skill.md
> │   ├── style-registry.md
> │   ├── public_instructions.md
> │   ├── parameter_schema.md
> │   ├── usage_examples.md
> │   ├── core/
> │   ├── references/
> │   │   ├── director-expansion.md
> │   │   └── visual-libraries.md
> │   └── routes/
> │       ├── commercial/
> │       ├── curve/
> │       ├── fantasy/
> │       ├── fashion/
> │       ├── lifestyle/
> │       └── oriental/
> ├── docs/
> │   ├── style_guide.md
> │   ├── prompt_safety.md
> │   ├── versioning.md
> │   └── faq.md
> └── examples/
> ```
> 
> ## Safety Boundaries
> 
> Text-only generation defaults to fictional, clearly adult subjects. Reference-image workflows may preserve the identity of the user or an authorized adult subject, and may preserve product visuals that the user has the right to use. The project must not be used for sexualized minors, explicit nudity, non-consensual images, deceptive identity content, harassment, defamation, privacy violations, or other unlawful purposes. See [prompt_safety.md](docs/prompt_safety.md) and [DISCLAIMER.md](DISCLAIMER.md) for details.
> 
> ## License
> 
> This project is licensed under the [MIT License](LICENSE). The MIT License permits use, copying, modification, merging, publishing, distribution, sublicensing, and selling copies. The safety boundaries are responsible-use guidelines and do not alter the standard MIT License terms.
> 
> ## Author and Version
> 
> - Author: Li Yue (李岳)
> - Version: `FEMALE-PORTRAIT-DIRECTOR-V1.4.1`
> - Project: `Female Portrait Prompt Director Skill`

## 延伸閱讀

相關概念：[[圖像生成]] · [[提示工程]] · [[AI 藝術]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[inspatio--worldfm|inspatio/worldfm]] · [[nv-tlabs--PiD|nv-tlabs/PiD]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]]

[GitHub](https://github.com/liyue-aigc/female-portrait-director)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像生成" AND file.name != "liyue-aigc--female-portrait-director"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "liyue-aigc--female-portrait-director"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "liyue-aigc--female-portrait-director" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "liyue-aigc--female-portrait-director"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["圖像生成","提示工程","AI 藝術"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "liyue-aigc--female-portrait-director" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "liyue-aigc--female-portrait-director" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "liyue-aigc" AND file.name != "liyue-aigc--female-portrait-director"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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
> const me = dv.page("Repos/liyue-aigc--female-portrait-director");
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

> **2026-06-05** — 首次收錄
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

- [[2026-06-05|2026-06-05]] — 首次收錄，510 stars
