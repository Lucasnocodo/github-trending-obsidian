---
repo: elder-plinius/G0DM0D3
url: https://github.com/elder-plinius/G0DM0D3
owner: elder-plinius
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "LIBERATED AI CHAT"
homepage: ""
stars: 2010
stars_per_day: 503
forks: 389
open_issues: 11
created: 2026-03-25
pushed_at: 2026-03-26
first_seen: 2026-03-29
week: "2026-W14"
month: "2026-03"
category: "AI/ML"
subcategory: "推論優化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-29
use_case: "提供一個開源的多模型聊天介面，專為駭客和系統愛好者設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 1078
readme_length: 8546
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-29"
star_history: "2026-03-29:1509,2026-03-29:1520,2026-03-30:2002,2026-03-30:2010"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - easy_install
aliases:
  - "G0DM0D3"
  - "elder-plinius/G0DM0D3"
  - "提供一個開源的多模型聊天介面，專為駭客和系統愛好者設計。"
---

# G0DM0D3

**2.0k** stars · **503** stars/天 · 建立 4 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/elder-plinius--G0DM0D3");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一個開源的多模型聊天介面，專為駭客和系統愛好者設計。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (503 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要進行 AI 互動和紅隊測試的開發者和研究者。
> **一句話重點** G0DM0D3 不僅是一個聊天工具，更是一個探索 AI 互動的實驗平台。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "elder-plinius--G0DM0D3" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 推論優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到靈活的 AI 互動工具，值得一試。

> [!abstract] 核心創新
> 提供一個完全開源且隱私優先的多模型聊天介面，專為駭客和研究者設計。

## 專案簡介

G0DM0D3 是一個開源的多模型聊天介面，專為駭客和系統愛好者設計，旨在提供無限制的 AI 互動。用戶可以透過這個介面使用超過 50 種模型，包括 Claude、GPT-5 和 Gemini，並利用 `OpenRouter` API 進行互動。其核心機制是透過 `GODMODE CLASSIC`，將五個經過驗證的模型和提示組合並行運行，以尋找最佳回應，這樣的設計讓用戶能夠快速獲得多樣化的答案。這個工具的賣點在於其隱私優先的設計，所有數據收集都是選擇性的，並且 API 金鑰保留在用戶的瀏覽器中，避免了不必要的數據洩露。

技術上，G0DM0D3 使用了 Next.js 和 Express 框架，並依賴於多種現代 JavaScript 庫，如 React 和 Zustand，這使得它的前端和後端都具備良好的性能和擴展性。與其他類似工具相比，如 `AlpinDale/parsync` 和 `CoderLuii/HolyClaude`，G0DM0D3 提供了更靈活的模型選擇和更強的隱私保護，特別適合需要進行紅隊測試和認知研究的用戶。使用者在實際操作中可能會遇到一些問題，例如某些模型的組合可能無法正常運作，這在熱門 Issues 中有提到。整體來看，G0DM0D3 是一個值得探索的工具，特別適合對 AI 互動有高需求的開發者和研究者。

**技術棧**：`Next.js 14` · `Express 5` · `React 18` · `TypeScript 5`

## 重點功能

- 50+ 模型 — 支持多種 AI 模型，包括 Claude、GPT-5、Gemini 等，透過 OpenRouter API 進行互動。
- GODMODE CLASSIC — 5 種經過驗證的模型和提示組合並行運行，尋找最佳回應。
- AutoTune — 自適應取樣參數引擎，支持溫度和 top_p 調整，並具備 EMA 學習能力。
- Parseltongue — 輸入擾動引擎，提供 33 種技術，適合紅隊測試。
- 隱私優先 — 數據收集選擇性，API 金鑰保留在用戶瀏覽器中，無需擔心數據洩露。
- 單檔部署 — 只需一個 index.html 文件，便於在任何靜態主機上部署。

## 快速開始

1. 克隆倉庫
```bash
git clone https://github.com/elder-plinius/G0DM0D3.git
```
2. 進入目錄
```bash
cd G0DM0D3
```
3. 直接在瀏覽器中打開
```bash
open index.html
```
4. 或本地服務
```bash
python3 -m http.server 8000
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Python 3",
  "指令": "python3 -m http.server 8000",
  "預期輸出": "本地伺服器啟動，能在瀏覽器中訪問。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 2010 stars（503/天），forks 389（19.4%），顯示出強勁的增長潛力。這個專案的作者 elder-plinius 過去在開源社群中活躍，並專注於 AI 和駭客文化的交集。G0DM0D3 解決了傳統 AI 互動工具在隱私和靈活性上的不足，提供了一個開放且可自訂的解決方案。近期的推廣和社群的熱烈反應也促進了其快速成長。這個工具的出現正好契合了對於開源 AI 互動的需求，尤其是在駭客和研究者之間。

## 適合誰使用

**目標受眾**：需要進行 AI 互動和紅隊測試的開發者和研究者。

> [!example] 使用場景
> - 駭客用它來進行紅隊測試，因為它提供了多達 33 種輸入擾動技術，能夠有效測試模型的穩定性和安全性。
> - 研究人員用它來探索 AI 認知，因為它支持多模型評估，能夠快速比較不同模型的表現。
> - 開發者用它來建立自訂的 AI 聊天機器人，因為它的單檔部署特性使得整合過程簡單且快速。

## 架構分析

G0DM0D3 採用單檔架構設計，所有功能整合在一個 `index.html` 文件中，這樣的設計使得部署變得極為簡單，無需複雜的依賴或建置步驟。資料流方面，使用者的請求通過前端的 JavaScript 代碼發送到 OpenRouter API，並接收回應後在界面上顯示。這種設計使得用戶能夠快速上手，但也限制了功能的擴展性，因為所有邏輯都集中在一個文件中，未來若需要增加功能可能會導致代碼複雜度增加。整體而言，這種設計適合小型專案或個人使用，但在大規模應用時可能會面臨維護困難的挑戰。

## 技術深入分析

G0DM0D3 的核心技術機制基於多模型架構，使用者可以選擇不同的 AI 模型進行互動，這些模型通過 OpenRouter API 進行整合。其設計模式採用的是單檔架構，這樣的選擇使得部署變得簡單，但也限制了未來的功能擴展。效能方面，這個工具能夠快速響應用戶請求，但在高流量情況下可能會受到 API 限制的影響。設計取捨上，選擇使用 Next.js 和 Express 框架，這使得開發過程中能夠享受到現代 JavaScript 生態的優勢，但也帶來了對於 Node.js 環境的依賴。技術風險方面，隨著使用者數量的增加，可能會面臨 API 請求的瓶頸，這需要未來進一步的優化和擴展。整合方面，與主流的 CI/CD 工具如 GitHub Actions 相容性良好，但在與大型專案整合時可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，包含快速上手的步驟和範例。安裝過程相對順暢，無需複雜的配置。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 開源且隱私優先，無需擔心數據洩露。
> - 支持多種 AI 模型，靈活性高。
> - 單檔部署，簡化了使用流程。

> [!danger] 缺點
> - 某些模型組合可能無法正常運作，依賴社群支持。
> - 功能擴展性有限，未來可能面臨維護挑戰。
> - 需要穩定的網路連接以獲取模型回應。

> [!warning] 注意事項
> - 目前僅支持 OpenRouter API，無法使用其他 API。
> - 某些模型的組合可能無法正常運作，需依賴社群支持。
> - 需要穩定的網路連接以獲取模型回應。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供了類似的多模型選擇，但缺乏 G0DM0D3 的隱私優先設計和單檔部署特性。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 模型的應用，但不如 G0DM0D3 提供多樣化的模型選擇和紅隊測試功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用了類似的多模型架構，但缺乏 G0DM0D3 的隱私優先設計和單檔部署特性。 | 如果需要更強的數據隱私保護和簡單的部署流程，G0DM0D3 是更好的選擇。 | medium，因為需要重新配置 API 和模型選擇。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 模型的應用，但不如 G0DM0D3 提供多樣化的模型選擇和紅隊測試功能。 | 如果專注於 Claude 模型的應用，HolyClaude 可能更合適。 | low，因為功能相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **G0DM0D3** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用了類似的多模型架構，但缺乏 G0DM0D3 的隱私優先設計和單檔部署特性。 | 專注於 Claude 模型的應用，但不如 G0DM0D3 提供多樣化的模型選擇和紅隊測試功能。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 和模型選擇。 | low，因為功能相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要更強的數據隱私保護和簡單的部署流程，G0DM0D3  | 如果專注於 Claude 模型的應用，HolyClaude  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些模型的組合可能無法正常運作，特別是在高負載情況下。
  - 解法：嘗試不同的模型組合，或降低請求頻率。
- [MEDIUM] API 請求可能會受到限制，導致延遲。
  - 解法：確保網路連接穩定，並考慮使用本地部署。
- [MEDIUM] 使用過程中可能會遇到未處理的錯誤。
  - 解法：查看 GitHub Issues，尋找解決方案或報告問題。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 研究專案 | 非常適合 | 提供多模型選擇和靈活的部署方式，適合快速實驗和迭代。 |
| 大型企業的核心 AI 應用 | 不適合 | 目前處於 alpha 階段，穩定性和性能尚未達到生產要求。 |
| 個人開發者的 AI 聊天機器人 | 適合 | 簡單的單檔部署和多模型支持，適合快速開發原型。 |
| 需要高安全性的 AI 互動應用 | 普通 | 雖然隱私優先，但仍需注意 API 請求的安全性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到靈活的 AI 互動工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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
| Forks | 389 |
| Open Issues | 11 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-03-26 |
| 建立日期 | 2026-03-25 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/elder-plinius/G0DM0D3) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `cors` `express` `framer-motion` `helmet` `js-yaml` `lucide-react` `next` `openai` `react` `react-dom` `react-markdown` `react-syntax-highlighter` `tsx` `uuid` `zustand`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 55
>     "HTML" : 41
>     "TeX" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@elder-plinius](https://github.com/elder-plinius) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多個問題被提出，但解決率較低。
**連結**：[文件](https://github.com/elder-plinius/G0DM0D3)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-26）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/elder-plinius/G0DM0D3/issues/8) | >_ Error: All G0DM0D3 CLASSIC combos failed and All Parselto | 1 | 1 |
> | [#7](https://github.com/elder-plinius/G0DM0D3/issues/7) | The classic mode is not working | 1 | 2 |
> | [#11](https://github.com/elder-plinius/G0DM0D3/issues/11) | Hey pls read this | 0 | 0 |
> | [#10](https://github.com/elder-plinius/G0DM0D3/issues/10) | 66 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> ```
>  ▄████  ██████  ██████  ███▄ ▄███  ██████  ██████  ██████
> ██      ██  ██  ██   ██ ██ ███ ██  ██  ██  ██   ██      ██
> ██ ▄███ ██  ██  ██   ██ ██  █  ██  ██  ██  ██   ██  █████
> ██  ██  ██  ██  ██   ██ ██     ██  ██  ██  ██   ██      ██
>  ██████  ████   ██████  ██     ██   ████   ██████  ██████
>  ───────────────────────────────────────────────────────────
>   ░▒▓█  LIBERATED AI. COGNITION WITHOUT CONTROL.  █▓▒░
>  ───────────────────────────────────────────────────────────
> ```
> 
> [GODMOD3.AI](https://godmod3.ai)
> 
> G0DM0D3 is a fully open-source, privacy-respecting, multi-model chat interface that pushes the limits of the post-training layer — for red teaming, cognition research, and liberated AI interaction. Built for hackers, philosophers, and system tinkerers.
> 
> ## ✨ Features
> 
> - 🧠 **50+ Models** — Claude, GPT-5, Gemini, Grok, Mistral, LLaMA, DeepSeek, Qwen & more via OpenRouter
> - 🔥 **GODMODE CLASSIC** — 5 battle-tested prompt + model combos racing in parallel to find the best response
> - ⚡ **ULTRAPLINIAN** — Multi-model evaluation engine across 5 tiers (10–55 models), with composite scoring
> - 🐍 **Parseltongue** — Input perturbation engine for red-teaming with 33 techniques across 3 intensity tiers
> - 🎛 **AutoTune** — Context-adaptive sampling parameter engine (temperature, top_p, etc.) with EMA learning
> - ⚡ **STM Modules** — Semantic Transformation Modules for real-time output normalization
> - 🔐 **Privacy-First** — Lightweight telemetry is opt-out, dataset collection is opt-in. No cookies, no PII. API key stays in your browser.
> - 🎨 **4 Themes** — Matrix, Hacker, Glyph, Minimal
> - 🎮 **Easter Eggs** — Hidden secrets throughout (try the Konami code!)
> - 📱 **Responsive** — Works on desktop and mobile
> - 🌐 **Single-File Deployment** — One `index.html`. Deploy anywhere.
> 
> ## 🚀 Quick Start
> 
> ### Hosted
> 
> Visit the hosted version — no install needed. Bring your own [OpenRouter API key](https://openrouter.ai/keys).
> 
> ### Self-Host
> 
> G0DM0D3 is a single `index.html` file. No build step, no dependencies, no framework.
> 
> ```bash
> # Clone the repository
> git clone https://github.com/elder-plinius/G0DM0D3.git
> cd G0DM0D3
> 
> # Open directly in your browser
> open index.html
> # or serve locally
> python3 -m http.server 8000
> ```
> 
> Open in your browser and enter your OpenRouter API key in Settings.
> 
> ### Deploy
> 
> Upload `index.html` to any static host — GitHub Pages, Vercel, Cloudflare Pages, Netlify, or just a web server.
> 
> ## 🔥 GODMODE CLASSIC
> 
> The OG mode. 5 proven model + prompt combos race in parallel. Each combo pairs a specific model with a battle-tested jailbreak prompt. The best response wins.
> 
> | Combo | Model | Strategy |
> |-------|-------|----------|
> | 🩷 CLAUDE 3.5 SONNET | `anthropic/claude-3.5-sonnet` | END/START boundary inversion + GODMODE semantic opposite |
> | 💜 GROK 3 | `x-ai/grok-3` | Unfiltered liberated + GODMODE divider |
> | 💙 GEMINI 2.5 FLASH | `google/gemini-2.5-flash` | Refusal inversion + rebel genius code block |
> | 💛 GPT-4 CLASSIC | `openai/gpt-4o` | OG GODMODE l33t format — the original |
> | 💚 GODMODE FAST | `nousresearch/hermes-4-405b` | Instant stream, zero refusal checking |
> 
> ## ⚡ ULTRAPLINIAN
> 
> The new flagship. Multi-model comparative evaluation engine. Queries models in parallel, scores responses on a 100-point composite metric, and returns the winner.
> 
> | Tier | Models | Description |
> |------|--------|-------------|
> | ⚡ FAST | 10 | Lightweight speed-optimized models |
> | 🎯 STANDARD | 24 | Mid-range workhorses |
> | 🧠 SMART | 36 | Strong reasoning models |
> | ⚔️ POWER | 45 | Full power including frontier models |
> | 🔱 ULTRA | 51 | Everything — all available models |
> 
> ## 🐍 Parseltongue
> 
> Input perturbation engine for red-teaming research. Detects trigger words and applies obfuscation techniques to study model robustness.
> 
> - **33 default triggers** across 3 tiers (light: 11, standard: 22, heavy: 33)
> - **6 techniques**: leetspeak, bubble text, braille, morse, Unicode substitution, phonetic
> - **3 intensity levels**: light, medium, heavy
> 
> ## 🎛 AutoTune
> 
> Context-adaptive sampling parameter engine. Classifies your query into one of 5 context types and selects optimal parameters (temperature, top_p, top_k, frequency_penalty, presence_penalty, repetition_penalty) automatically.
> 
> Includes an EMA-based online learning loop — thumbs up/down feedback improves parameter selection over time.
> 
> ## ⚡ STM Modules
> 
> Semantic Transformation Modules normalize AI outputs in real-time:
> 
> - **Hedge Reducer** — Removes "I think", "maybe", "perhaps"
> - **Direct Mode** — Removes preambles and filler phrases
> - **Curiosity Bias** — Adds exploration prompts
> 
> ## 🎨 Themes
> 
> - **Matrix** — Classic green-on-black terminal aesthetic
> - **Hacker** — Red/orange cyberpunk vibes
> - **Glyph** — Purple mystical atmosphere
> - **Minimal** — Clean light mode for readability
> 
> ## 🔐 Privacy
> 
> G0DM0D3 takes privacy seriously:
> 
> - ✅ No login required
> - ✅ API key stored in browser localStorage only — never sent to G0DM0D3 servers
> - ✅ No cookies or tracking
> - ✅ Lightweight structural telemetry (no message content, no PII) — **opt-out** in settings
> - ✅ All telemetry code is instantly open-source and auditable on Hugging Face dataset
> - ✅ AGPL-3.0 — verify the code yourself
> 
> ⚠️ OPEN RESEARCH DATASET (API Server Only — does NOT apply to godmod3.ai)
> 
> The self-hosted API server includes an opt-in Open Research Dataset feature. When you enable "Dataset Generation" in Settings → Privacy, ALL of your chat inputs and model outputs will be automatically published to a public HuggingFace dataset for AI research. This data is public, downloadable by anyone, and may be cached, forked, or redistributed.
> 
>     This feature is OFF by default and requires explicit consent via a warning modal
>     Automatic PII scrubbing runs on all entries (emails, phone numbers, SSNs, credit cards, IPs, API keys) but is NOT guaranteed to catch everything
>     Do NOT include personal information, real names, passwords, or anything you wouldn't want public
>     This feature does NOT exist on the hosted site (godmod3.ai) — it only applies when opted-in while running the full API server via Docker
> 
> See [TERMS.md](TERMS.md) for the full three-tier data transparency policy.
> 
> ### Chat History & Self-Custody
> 
> **Your chat history lives entirely in your browser's `localStorage`.** There is no account, no cloud sync, and no server-side backup. This means:
> 
> - **If you clear your browser data, your conversations are gone.** There is no recovery.
> - **If you switch browsers or devices, your history does not follow you.**
> - **Private/incognito mode will discard everything when the window closes.**
> 
> This is by design — G0DM0D3 has no login system and stores nothing on our servers. You own your data, which means you are responsible for it.
> 
> There is a built-in export/import feature in settings under "data". Treat your chat history like any other local file — back it up if you want to keep it.
> 
> ## 🎮 Easter Eggs
> 
> Hidden throughout G0DM0D3 are various easter eggs. Happy hunting!
> 
> ## 🛠 Tech Stack
> 
> - **Architecture**: Single-file vanilla HTML/CSS/JS (`index.html`)
> - **API Gateway**: [OpenRouter](https://openrouter.ai) (multi-model routing)
> - **Rendering**: Marked.js + highlight.js for markdown
> - **State**: In-browser localStorage
> - **Deployment**: Static file — no server, no build step
> 
> ## 📁 Project Structure
> 
> ```
> G0DM0D3/
> ├── index.html        # The entire application — UI, logic, styles
> ├── api/              # Optional API server (Node.js/Express)
> ├── API.md            # API documentation
> ├── PAPER.md          # Research paper
> ├── TERMS.md          # Terms of service & data transparency
> └── README.md         # This file
> ```
> 
> ## 📜 Documentation
> 
> - [API.md](API.md) — Full API reference (endpoints, tiers, OpenAI SDK compatibility)
> - [PAPER.md](PAPER.md) — Research paper on the framework's modules and evaluation
> - [TERMS.md](TERMS.md) — Terms of service, privacy policy, data handling
> - [SECURITY.md](SECURITY.md) — Vulnerability reporting and security policy
> 
> ## 🤝 Contrib

## 延伸閱讀

相關概念：[[RAG]] · [[自動化測試]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]]

[GitHub](https://github.com/elder-plinius/G0DM0D3)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "elder-plinius--G0DM0D3"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "elder-plinius--G0DM0D3"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "elder-plinius--G0DM0D3" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "elder-plinius--G0DM0D3"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","自動化測試","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "elder-plinius--G0DM0D3" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "elder-plinius--G0DM0D3" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "elder-plinius" AND file.name != "elder-plinius--G0DM0D3"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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
> const me = dv.page("Repos/elder-plinius--G0DM0D3");
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

> **2026-03-29** — 首次收錄
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

- [[2026-03-30|2026-03-30]] — 再次上榜，2.0k stars
- [[2026-03-29|2026-03-29]] — 首次收錄，1.5k stars
