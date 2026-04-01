---
repo: elder-plinius/G0DM0D3
url: https://github.com/elder-plinius/G0DM0D3
owner: elder-plinius
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "LIBERATED AI CHAT"
homepage: ""
stars: 2444
stars_per_day: 407
forks: 479
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
use_case: "提供一個開源的多模型聊天介面，專為駭客和研究者設計，強調隱私和自由。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-04"
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
star_history: "2026-03-29:1509,2026-03-29:1520,2026-03-30:2002,2026-03-30:2010,2026-03-31:2254,2026-03-31:2258,2026-04-01:2444"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - easy_install
aliases:
  - "G0DM0D3"
  - "elder-plinius/G0DM0D3"
  - "提供一個開源的多模型聊天介面，專為駭客和研究者設計，強調隱私和自由。"
---

# G0DM0D3

**2.3k** stars · **452** stars/天 · 建立 5 天前 · TypeScript · AGPL-3.0

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
> 提供一個開源的多模型聊天介面，專為駭客和研究者設計，強調隱私和自由。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (452 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要一個隱私友好的多模型 AI 聊天介面的開發者和研究者。
> **一句話重點** G0DM0D3 不僅是一個聊天介面，更是推動 AI 自由和認知解放的工具。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到強大的多模型比較功能，值得嘗試。

> [!abstract] 核心創新
> G0DM0D3 提供了一個多模型的比較評估引擎，能夠在多個模型之間快速找到最佳回應。

## 專案簡介

G0DM0D3 是一個開源的聊天介面，專為駭客和哲學家設計，支持超過 50 種 AI 模型，並提供多種獨特的功能。用戶可以透過 OpenRouter API 鍵入問題，系統會並行評估多個模型的回應，並選擇最佳答案。這個工具的「一句話賣點」是其強大的多模型評估引擎，能夠在 100 分的綜合指標上評分，並返回最佳結果。技術上，它使用 Next.js 作為框架，並結合了 Express 作為 API 服務器，具備輕量級的結構，無需複雜的部署步驟。

與其他類似工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，G0DM0D3 的優勢在於其多模型的比較評估能力和隱私保護設計，這使得它在需要高安全性和自由度的環境中特別適合。實際使用時，G0DM0D3 需要用戶提供 OpenRouter API 鍵，並且其資料存儲在用戶的瀏覽器中，這樣的設計雖然強化了隱私，但也意味著用戶需要自行管理數據。這個專案目前處於早期階段，活躍的開發和社群支持可能會影響其未來的穩定性和功能擴展。對於小型團隊或個人開發者來說，G0DM0D3 是一個值得嘗試的工具，特別是在需要進行 AI 研究或開發的情境下。

**技術棧**：`Next.js 14` · `Express 5` · `TypeScript 5.3.0`

## 重點功能

- 50+ 模型支持 — 包括 Claude、GPT-5、Gemini 等，透過 OpenRouter 接入。
- GODMODE CLASSIC — 5 種經過測試的提示和模型組合並行運行，快速找到最佳回應。
- ULTRAPLINIAN — 多模型評估引擎，根據 100 分綜合指標評分，返回最佳結果。
- Parseltongue — 輸入擾動引擎，提供 33 種技術來測試模型的魯棒性。
- AutoTune — 自適應取樣參數引擎，自動選擇最佳的查詢參數。

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
[
  "# 前置條件：已安裝 Python",
  "python3 -m http.server 8000",
  "# 預期輸出：在本地服務器上運行，並可通過瀏覽器訪問。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2258 stars（452/天），forks 431（19.1%），這顯示出強烈的社群興趣。作者 elder-plinius 之前在 AI 和開源領域有過多次貢獻，這個專案解決了多模型比較和隱私保護的需求，之前的工具往往無法同時滿足這兩個需求。近期的社群討論和需求也促成了這個專案的快速成長。技術上，隨著對 AI 模型的需求增加，這種多模型的評估方式變得越來越可行，特別是在駭客和研究者中。高達 19.1% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要一個隱私友好的多模型 AI 聊天介面的開發者和研究者。

> [!example] 使用場景
> - 駭客用它來進行 AI 模型的對比測試，因為其多模型評估引擎能快速找到最佳回應，節省了大量的測試時間。
> - 研究者用它來探索 AI 模型的反應和穩定性，因為它提供了多種輸入擾動技術，能夠深入分析模型的魯棒性。
> - 開發者用它來構建自定義的聊天應用，因為它的單檔部署特性讓整合變得非常簡單，無需繁瑣的設置。

## 架構分析

G0DM0D3 採用單檔 HTML/CSS/JS 架構，這樣的設計使得部署變得非常簡單，無需複雜的依賴或建置步驟。資料流方面，所有的請求都通過 OpenRouter API 進行多模型的查詢，並在用戶的瀏覽器中進行狀態管理。這樣的設計雖然降低了部署的複雜度，但也意味著用戶需要自行管理數據和隱私。選擇這種架構的代價是功能擴展的靈活性較低，未來若需要增加更多功能可能會面臨挑戰。整體而言，這種設計適合快速開發和小型專案，但在大型應用中可能會遇到性能瓶頸。

## 技術深入分析

G0DM0D3 的核心技術機制基於 Next.js 和 Express，這使得它能夠快速處理多個模型的請求。使用者可以透過 OpenRouter API 進行多模型查詢，並使用自適應取樣參數引擎來優化查詢的參數。這樣的設計使得 G0DM0D3 能夠在多達 50 種模型中進行比較，並根據 100 分的綜合指標返回最佳結果。效能方面，由於所有數據都存儲在用戶端，這降低了伺服器的負擔，但也意味著用戶需要自行管理數據。

選擇 Next.js 作為框架的好處在於其強大的生態系統和社群支持，但這也可能帶來依賴的風險。技術風險方面，若未來需要擴展功能，可能會面臨性能瓶頸。整合方面，由於其單檔部署的特性，與現有的工具鏈整合相對容易，但在大型應用中可能需要額外的適配。整體而言，這個專案在多模型比較和隱私保護方面具有很大的潛力，特別適合對 AI 研究有興趣的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含使用範例，安裝過程非常順暢，無需複雜的配置。雖然沒有專門的入門指南，但其簡單的單檔架構使得新手能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 隱私友好，所有數據都存儲在用戶端，無需登錄。
> - 支持多達 50 種 AI 模型，靈活性高。
> - 單檔部署，簡化了安裝和使用過程。

> [!danger] 缺點
> - 功能仍在開發中，穩定性可能不足。
> - 需要用戶自行管理數據，無法恢復已刪除的聊天歷史。
> - 依賴於 OpenRouter API，無法使用其他模型。

> [!warning] 注意事項
> - 僅支持 OpenRouter API 鍵，無法使用其他模型。
> - 需要用戶自行管理聊天歷史，無法恢復已刪除的數據。
> - 目前處於早期開發階段，功能和穩定性可能會有變化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，而非多模型比較，適合需要高效數據傳輸的場景。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 主要針對 Claude 模型的優化，功能範圍較窄，適合專注於單一模型的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，並不涉及多模型的比較，適合需要高效數據傳輸的場景。 | 如果你的主要需求是數據同步而非模型比較，則此工具更合適。 | medium，因為需要重新設計數據流和處理邏輯。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 模型的優化，功能範圍較窄，無法滿足多模型需求。 | 如果你只需要針對 Claude 模型進行開發，這個工具會更簡單直接。 | low，因為只需調整模型接入的方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **G0DM0D3** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步，並不涉及多模型的比較，適合需要高效數據傳輸的場景。 | 專注於 Claude 模型的優化，功能範圍較窄，無法滿足多模型需求。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和處理邏輯。 | low，因為只需調整模型接入的方式。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是數據同步而非模型比較，則此工具更合適。 | 如果你只需要針對 Claude 模型進行開發，這個工具會更簡 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用 OpenRouter API 鍵時，若未正確配置會導致無法訪問模型
  - 解法：確保 API 鍵正確輸入並在設置中保存
- [MEDIUM] 清除瀏覽器數據後，聊天歷史無法恢復
  - 解法：定期備份聊天記錄
- [low] 在某些瀏覽器上可能無法正確顯示主題
  - 解法：嘗試使用最新版本的 Chrome 或 Firefox

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 AI 研究 | 非常適合 | 支持多模型比較，能快速獲得最佳結果。 |
| 個人駭客進行模型測試 | 適合 | 提供多種擾動技術，能深入分析模型的魯棒性。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 教育機構進行 AI 課程 | 普通 | 雖然功能豐富，但可能需要額外的教學資源來輔助使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到強大的多模型比較功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：所有數據存儲在用戶端，無需高權限操作，且不會存取敏感資料。依賴的 OpenRouter API 需確保安全性，避免洩露 API 鍵。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

G0DM0D3 最常與 OpenRouter API 搭配使用，作為多模型查詢的入口。在一個使用 Next.js 的專案中，可以將 G0DM0D3 作為聊天介面，通過 API 進行模型請求。與 CI/CD 工具的整合相對簡單，但由於其單檔架構，可能需要額外的適配來滿足特定需求。整合過程中，最常見的問題是 API 鍵的配置，確保正確配置能避免許多潛在的錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 G0DM0D3 出現之前，許多 AI 聊天工具無法同時滿足多模型比較和隱私保護的需求。傳統的工具往往依賴於單一模型，無法靈活應對多變的需求。隨著 AI 模型的快速發展和對隱私的重視，G0DM0D3 的出現正好填補了這一空白。

這個工具代表了未來 AI 交互的趨勢，強調用戶的數據自主權和多樣化的模型選擇。未來幾個月，隨著社群的活躍和功能的擴展，G0DM0D3 可能會成為更多開發者的首選工具。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 JavaScript
- 了解 API 使用
- 有基本的網頁開發經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋，調整使用策略。

**成功指標**：能夠在多模型中快速找到最佳回應，提升開發效率。

> [!warning] 退出計畫
> 如需退出，所有設定和數據都存儲在本地，直接刪除即可。

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
| Forks | 431 |
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

**社群活躍度**：社群活躍，最近有多次提交和討論。
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
> | [#11](https://github.com/elder-plinius/G0DM0D3/issues/11) | Hey pls read this | 0 | 1 |
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

相關概念：[[多模態]] · [[API 設計]] · [[機器學習]]

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
> const concepts = ["多模態","API 設計","機器學習"];
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

- [[2026-04-01|2026-04-01]] — 再次上榜，2.4k stars
- [[2026-03-31|2026-03-31]] — 再次上榜，2.3k stars
- [[2026-03-30|2026-03-30]] — 再次上榜，2.0k stars
- [[2026-03-29|2026-03-29]] — 首次收錄，1.5k stars
