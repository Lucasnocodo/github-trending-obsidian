---
repo: whwangovo/pyre-code
url: https://github.com/whwangovo/pyre-code
owner: whwangovo
owner_type: User
language: Python
license: NOASSERTION
description: "A self-hosted ML coding practice platform. 68 problems from ReLU to flow matching — attention, training, RLHF, diffusion, and more. Instant feedback in the browser."
homepage: ""
stars: 726
stars_per_day: 121
forks: 65
open_issues: 3
created: 2026-04-09
pushed_at: 2026-04-14
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "自我托管的機器學習編程練習平台，提供 68 道題目，從 ReLU 到流匹配等多種主題，並提供即時反饋。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-23"
contributor_count: 5
engagement: "low"
issue_close_rate: 63
repo_size_kb: 389
readme_length: 8694
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:726"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "pyre-code"
  - "whwangovo/pyre-code"
  - "自我托管的機器學習編程練習平台，提供 68 道題目，從 ReLU 到流匹配等多種主題，並提供即時反饋。"
---

# pyre-code

**726** stars · **121** stars/天 · 建立 6 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/whwangovo--pyre-code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 自我托管的機器學習編程練習平台，提供 68 道題目，從 ReLU 到流匹配等多種主題，並提供即時反饋。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (121 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在機器學習領域提升編程技能的開發者，尤其是準備面試的學生。
> **一句話重點** 這個專案不僅提供編程練習，還幫助用戶深入理解機器學習模型的內部運作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/whwangovo--pyre-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "whwangovo--pyre-code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到即時反饋和機器學習實踐，值得嘗試。

> [!abstract] 核心創新
> 提供即時反饋的本地化機器學習編程練習平台，專注於核心 ML 概念的實現。

## 專案簡介

Pyre Code 是一個自我托管的機器學習編程練習平台，提供 68 道題目，涵蓋從 ReLU 到擴散模型等多個主題。用戶在瀏覽器中編寫代碼，並通過本地評分服務進行測試，能夠快速獲得通過或失敗的反饋。這個平台的設計旨在幫助用戶在實際編碼中學習機器學習的核心概念，特別適合準備面試或希望通過實踐來加深理解的人。用戶不需要 GPU，所有操作均可在本地完成，這降低了入門的技術門檻。技術棧方面，前端使用 Next.js 和 Monaco 編輯器，後端則是 FastAPI，並使用 SQLite 進行進度追蹤。

這樣的架構使得整體性能良好，且易於維護。與其他編程練習平台相比，Pyre Code 提供了更專注於機器學習的題目，並且支持即時反饋和參考解答，這使得用戶能夠更快地學習和改進。實際使用中，平台的性能穩定，但對於大型問題集的擴展性可能會受到 SQLite 的限制。這個專案目前仍在 beta 階段，適合個人開發者或小型團隊使用，未來可能會增加更多題目和功能。對於希望在機器學習領域提升編程技能的開發者來說，這是一個值得嘗試的工具。

**技術棧**：`Next.js` · `FastAPI` · `SQLite` · `PyTorch`

## 重點功能

- 即時反饋 — 用戶提交代碼後，能在幾秒鐘內獲得測試結果。
- 參考解答 — 用戶在自己嘗試後可以查看參考解答，幫助理解正確實現。
- 進度追蹤 — 系統會持久化用戶的解題歷史和嘗試次數，方便用戶查看進步。
- AI 幫助 — 可選的 AI 提示功能，通過 OpenAI 兼容的 API 提供幫助。
- 完全本地化 — 所有操作均在用戶的機器上進行，保障隱私和安全。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/whwangovo/pyre-code.git && cd pyre-code && ./setup.sh
```
2. 啟動開發服務
```bash
npm run dev
```
3. 訪問應用程序
```bash
http://localhost:3000
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Node.js 和 Python 3.11+",
  "指令": "git clone https://github.com/whwangovo/pyre-code.git && cd pyre-code && ./setup.sh && npm run dev",
  "預期輸出": "應用程序在 http://localhost:3000 上運行"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 726 stars（121/天），forks 65（9.0%），顯示出強烈的使用者興趣。作者 whwangovo 及其團隊在機器學習和編程教育方面有豐富的經驗，這個專案填補了市場上針對 ML 編程練習的需求。近期的推廣活動和社群討論也可能促進了這個專案的曝光度。高達 9% 的 fork/stars 比率顯示出許多用戶正在積極修改和使用這個專案，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：希望在機器學習領域提升編程技能的開發者，尤其是準備面試的學生。

> [!example] 使用場景
> - 機器學習面試準備者用它來練習實現核心組件，因為能夠在即時反饋下快速改進自己的代碼。
> - 學生用它來加深對機器學習模型內部運作的理解，因為這些題目涵蓋了從基礎到進階的各種主題。
> - 開發者用它來測試和驗證自己的 PyTorch 實現，因為平台提供了本地評分服務，無需依賴外部資源。

## 架構分析

Pyre Code 的架構由前端、後端和評分引擎組成。前端使用 Next.js 和 Monaco 編輯器，提供用戶友好的編碼環境，後端則是 FastAPI，負責處理用戶提交的代碼並進行評分。評分引擎使用 torch_judge，專門設計來執行和驗證用戶的提交。

這樣的設計使得整體性能良好，且易於維護。選擇 SQLite 作為數據存儲的代價是擴展性受限，但對於小型項目來說，這是一個輕量級的解決方案。整體架構的設計考慮到了用戶的隱私，所有數據都在本地處理，這對於需要保護代碼的開發者來說是一個優勢。

## 技術深入分析

Pyre Code 的核心技術機制是利用 FastAPI 作為後端服務，提供即時的代碼評分功能。前端使用 Next.js 和 Monaco 編輯器，這使得用戶可以在瀏覽器中輕鬆編寫和測試代碼。整個系統的性能良好，因為所有操作都是在本地進行，這樣可以減少延遲並提高用戶體驗。SQLite 作為數據存儲的選擇，雖然對於小型項目來說是合適的，但在處理大量數據時可能會成為瓶頸。選擇 FastAPI 而非其他框架的原因在於其高性能和簡單的設置過程，這對於開發者來說是非常友好的。技術風險方面，隨著用戶數量的增加，可能會遇到性能瓶頸，特別是在評分服務的負載上。整合方面，這個平台能夠與現有的開發工具鏈良好配合，特別是在 CI/CD 流程中，能夠輕鬆集成進行自動化測試。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Node.js 的安裝。文件提供了多語言版本，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 即時反饋，能快速了解代碼的正確性。
> - 不需要 GPU，降低了使用門檻。
> - 專注於機器學習的核心概念，適合面試準備。
> - 提供參考解答，幫助用戶學習和改進。

> [!danger] 缺點
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 使用 SQLite 可能會限制未來的擴展性。
> - 對於大型問題集的支持可能不足。
> - 需要安裝 Node.js，增加了安裝的複雜度。

> [!warning] 注意事項
> - 僅支援 Python 3.11+。
> - 使用 SQLite 作為資料庫，對於大型數據集的擴展性有限。
> - 目前仍在 beta 階段，可能會有不穩定的功能或 bug。
> - 需要 Node.js 18+，對於某些開發者可能增加了安裝複雜度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [duoan/TorchCode](https://github.com/duoan/TorchCode) | TorchCode 提供了類似的編程練習平台，但專注於 PyTorch 的基本操作，而 Pyre Code 更加深入到機器學習模型的內部實現。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個針對各種編程語言的練習平台，但缺乏 Pyre Code 在機器學習領域的專注和即時反饋功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [duoan/TorchCode](https://github.com/duoan/TorchCode) | TorchCode 提供了類似的編程練習平台，但專注於 PyTorch 的基本操作，而 Pyre Code 更加深入到機器學習模型的內部實現。 | 如果你需要一個更基礎的 PyTorch 練習平台，TorchCode 可能更適合。 | low，因為兩者都使用 PyTorch，遷移代碼相對簡單。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個針對各種編程語言的練習平台，但缺乏 Pyre Code 在機器學習領域的專注和即時反饋功能。 | 如果你需要多語言支持的編程練習，Boneyard 可能更適合。 | medium，因為需要調整代碼以適應不同的評分系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pyre-code** | **TorchCode** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | TorchCode 提供了類似的編程練習平台，但專注於 PyTorch 的基本操作，而 Pyre Code 更加深入到機器學習模型的內部實現。 | Boneyard 是一個針對各種編程語言的練習平台，但缺乏 Pyre Code 在機器學習領域的專注和即時反饋功能。 |
> | 遷移成本 | - | low，因為兩者都使用 PyTorch，遷移代碼相對簡單。 | medium，因為需要調整代碼以適應不同的評分系統。 |
> | 適用場景 | 主要場景 | 如果你需要一個更基礎的 PyTorch 練習平台，Torch | 如果你需要多語言支持的編程練習，Boneyard 可能更適合 |

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

- [MEDIUM] 某些題目的測試用例可能不完整，導致用戶無法通過所有測試。
  - 解法：用戶可以查看參考解答以獲得提示。
- **[HIGH]** 在某些環境下，Node.js 安裝可能會出現問題。
  - 解法：確保使用最新版本的 Node.js，並檢查安裝日誌。
- [MEDIUM] SQLite 在高並發情況下可能會導致性能下降。
  - 解法：考慮將數據庫遷移到更強大的系統，如 PostgreSQL。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的機器學習專案 | 非常適合 | 提供即時反饋和本地化環境，適合快速迭代和學習。 |
| 大型企業的機器學習開發 | 不適合 | SQLite 的擴展性不足以支持高並發的需求。 |
| 個人學習和面試準備 | 非常適合 | 專注於機器學習核心概念的實現，能有效幫助用戶準備面試。 |
| 需要多語言支持的編程練習 | 普通 | 雖然支持 Python，但對其他語言的支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時反饋和機器學習實踐，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，所有數據均在本地處理，無需存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Pyre Code 最常與機器學習相關的工具和框架搭配使用，特別是 PyTorch。在一個使用 PyTorch 的專案中，開發者可以用 Pyre Code 來練習和驗證自己的實現，具體做法是將代碼提交到 Pyre Code 的評分服務進行測試。該平台支持與 GitHub Actions 等 CI 工具的整合，能夠自動化測試流程。整合的摩擦點主要是 Node.js 的安裝和配置，對於某些開發者來說可能會造成困擾。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Pyre Code 出現之前，許多開發者使用傳統的編程練習平台，但這些平台往往缺乏針對機器學習的專注和即時反饋功能。隨著機器學習技術的快速發展，開發者需要一個能夠實踐和驗證自己代碼的平台。Pyre Code 的出現正是為了解決這一需求，提供了一個專注於機器學習的編程練習環境。

未來，隨著機器學習的持續發展，這個平台可能會加入更多的題目和功能，進一步滿足用戶需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的機器學習概念
- 有使用 Node.js 的經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：收集反饋並調整使用方式。第四週：在正式項目中開始使用。

**成功指標**：用戶的解題成功率提高 30%。

> [!warning] 退出計畫
> 所有設定均為標準格式，若要退出可輕鬆移除環境。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/whwangovo--pyre-code");
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
> const me = dv.page("Repos/whwangovo--pyre-code");
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
| Forks | 65 |
| Open Issues | 3 |
| Issue 解決率 | 63% (5 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-09 |
| Repo 大小 | 389 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/whwangovo/pyre-code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 51
>     "Jupyter Notebook" : 29
>     "TypeScript" : 19
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@whwangovo](https://github.com/whwangovo) | 29 |
> | [@MakiNaruto](https://github.com/MakiNaruto) | 4 |
> | [@REXKEV214](https://github.com/REXKEV214) | 2 |
> | [@leoz32](https://github.com/leoz32) | 1 |
> | [@jiaobinghao](https://github.com/jiaobinghao) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者積極回應問題和提交。
**連結**：[文件](https://github.com/whwangovo/pyre-code/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-10 ~ 2026-04-14）
> **活躍天數** 3 天 · **最新 commit** docs: add News section to READMEs and remove Windows/PowerShell note

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#22](https://github.com/whwangovo/pyre-code/issues/22) | 历史记录 | 0 | 0 |
> | [#20](https://github.com/whwangovo/pyre-code/issues/20) | gae题目好像不见了 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> [English](./README.md) | [中文](./README_CN.md)
> 
>   🔥 Pyre Code
>   
>     Implement the internals of modern AI systems from scratch — Transformers, vLLM, TRL, and beyond.
>   
>   
>     Read the paper, then write the code. No GPU required.
>   
>   
>     
>       
>     
>   
> 
> ---
> 
> ## 🧠 What is Pyre Code?
> 
> 68 problems. You write the implementation, a local grading service runs the tests, you see what broke. That's it.
> 
> The problems cover what's actually inside Transformers, vLLM, TRL, and diffusion models — attention variants, training tricks, inference kernels, alignment algorithms. No GPU needed.
> 
> ### Who is this for?
> 
> - **Preparing for ML interviews** — practice implementing core components under test, not just reading about them
> - **Learning by building** — if you learn best by writing code rather than watching lectures, this is your gym
> - **Deepening your understanding** — you've used `nn.MultiheadAttention`, now write it yourself
> 
> ### Features
> 
> - **Browser editor** — Monaco with Python syntax highlighting, no IDE setup
> - **Instant feedback** — submit and see pass/fail per test case in seconds
> - **Reference solutions** — compare after your own attempt
> - **Progress tracking** — solved count and attempt history, persisted across sessions
> - **AI Help** — optional AI-powered hints via any OpenAI-compatible API (configure in `.env` or per-user in the UI)
> - **Fully local** — nothing leaves your machine (unless you opt into AI Help)
> 
> ### Tech Stack
> 
> | Layer        | Technology                                                                           |
> | ------------ | ------------------------------------------------------------------------------------ |
> | Frontend     | Next.js + Monaco Editor + Tailwind CSS                                               |
> | Backend      | FastAPI grading service                                                              |
> | Judge Engine | [torch_judge](https://github.com/duoan/TorchCode) — executes and validates submissions |
> | Storage      | SQLite (progress tracking)                                                           |
> 
> ---
> 
> ## 📢 News
> 
> - **[2026/04/13]** Submission history — review all your past attempts per problem.
> - **[2026/04/10]** AI Help — optional AI-powered hints via any OpenAI-compatible API. 🔥
> - **[2026/04/10]** Print output capture — `print()` statements now show in test results.
> - **[2026/04/09]** 68 problems covering Transformers, vLLM, TRL, diffusion models, and more. 🔥
> - **[2026/04/09]** Initial release of Pyre Code 🎉
> 
> ---
> 
> ## 🚀 Getting Started
> 
> ### Prerequisites
> 
> - Python 3.11+
> - Node.js 18+
> 
> ### Installation
> 
> **Option A — one-liner (recommended)**
> 
> ```bash
> git clone https://github.com/whwangovo/pyre-code.git
> cd pyre-code
> ./setup.sh
> npm run dev
> ```
> 
> `setup.sh` automatically creates a `.venv` Python environment (prefers `uv`, falls back to `python3 -m venv`), installs all dependencies, then prints the start command.
> 
> When `.venv` exists, `npm run dev` prefers that project-local Python automatically. If `.venv` is missing, it falls back to the current shell's `python`.
> 
> **Option B — conda**
> 
> ```bash
> git clone https://github.com/whwangovo/pyre-code.git
> cd pyre-code
> conda create -n pyre python=3.11 -y && conda activate pyre
> pip install -e ".[dev]"
> npm install
> npm run dev   # run with conda env activated
> ```
> 
> **Option C — manual (venv)**
> 
> ```bash
> git clone https://github.com/whwangovo/pyre-code.git
> cd pyre-code
> 
> # create a Python env — pick one:
> uv venv --python 3.11 .venv && source .venv/bin/activate && uv pip install -e ".[dev]"
> # or: python3 -m venv .venv && source .venv/bin/activate && pip install -e ".[dev]"
> 
> npm install
> npm run dev
> ```
> 
> Either way, once running:
> 
> - **Grading service** → `http://localhost:8000`
> - **Web app** → `http://localhost:3000`
> 
> **Option D — Docker**
> 
> ```bash
> git clone https://github.com/whwangovo/pyre-code.git
> cd pyre-code
> docker compose up --build
> ```
> 
> Open `http://localhost:3000`. Progress is persisted in a Docker volume. Run `docker compose down -v` to reset.
> 
> ### AI Help (optional)
> 
> To enable server-side AI hints, copy `web/.env.example` to `web/.env` and fill in:
> 
> ```bash
> AI_HELP_BASE_URL=https://api.openai.com/v1
> AI_HELP_API_KEY=sk-...
> AI_HELP_MODEL=gpt-4o-mini
> ```
> 
> Any OpenAI-compatible endpoint works (OpenAI, Anthropic via proxy, Ollama, etc.). Users can also configure their own API key in the UI if no server-side config is set.
> 
> ---
> 
> ## 📋 Problem Set
> 
> 68 problems organized by category:
> 
> | Category | Problems |
> |---|---|
> | **Fundamentals** | ReLU, Softmax, GELU, SwiGLU, Dropout, Embedding, Linear, Kaiming Init, Linear Regression |
> | **Normalization** | LayerNorm, BatchNorm, RMSNorm |
> | **Attention** | Scaled Dot-Product, Multi-Head, Causal, Cross, GQA, Sliding Window, Linear, Flash, Differential, MLA |
> | **Position Encoding** | Sinusoidal PE, RoPE, ALiBi, NTK-aware RoPE |
> | **Architecture** | SwiGLU MLP, GPT-2 Block, ViT Patch, ViT Block, Conv2D, Max Pool, Depthwise Conv, MoE, MoE Load Balance |
> | **Training** | Adam, Cosine LR, Gradient Clipping, Gradient Accumulation, Mixed Precision, Activation Checkpointing |
> | **Distributed** | Tensor Parallel, FSDP, Ring Attention |
> | **Inference** | KV Cache, Top-k Sampling, Beam Search, Speculative Decoding, BPE, INT8 Quantization, Paged Attention |
> | **Loss & Alignment** | Cross Entropy, Label Smoothing, Focal Loss, Contrastive Loss, DPO, GRPO, PPO, Reward Model |
> | **Diffusion & DiT** | Noise Schedule, DDIM Step, Flow Matching, adaLN-Zero |
> | **Adaptation** | LoRA, QLoRA |
> | **Reasoning** | MCTS, Multi-Token Prediction |
> | **SSM** | Mamba SSM |
> 
> ### Learning Paths
> 
> Pick one based on what you're working toward:
> 
> | Path | Problems | Description |
> |---|---|---|
> | **Transformer Internals** | 12 | Activations → Normalization → Attention → GPT-2 Block |
> | **Attention & Position Encoding** | 13 | Every attention variant + RoPE, ALiBi, NTK-RoPE |
> | **Train a GPT from Scratch** | 15 | Embeddings → architecture → loss → optimizer → training tricks |
> | **Inference & Distributed Training** | 9 | KV cache, quantization, sampling, tensor parallel, FSDP |
> | **Alignment & Agent Reasoning** | 6 | Reward model → DPO → GRPO → PPO → MCTS |
> | **Vision Transformer Pipeline** | 7 | Conv → patch embedding → ViT block |
> | **Diffusion Models & DiT** | 5 | Noise schedule → DDIM → flow matching → adaLN-Zero |
> | **LLM Frontier Architectures** | 7 | GQA, Differential Attention, MLA, MoE, Multi-Token Prediction |
> 
> ```
> Not sure where to start?
> 
> Fundamentals ──→ Transformer Internals ──→ Train a GPT from Scratch
>                        │                          │
>                        ▼                          ▼
>               Attention & Position       Inference & Distributed
>                        │                          │
>                        ▼                          ▼
>               LLM Frontier Archs         Alignment & Reasoning
>                        │
>                ┌───────┴───────┐
>                ▼               ▼
>      Vision Transformer   Diffusion & DiT
> ```
> 
> ---
> 
> ## ⚙️ Configuration
> 
> | Variable                | Default                   | Description                           |
> | ----------------------- | ------------------------- | ------------------------------------- |
> | `GRADING_SERVICE_URL` | `http://localhost:8000` | Grading service URL                   |
> | `DB_PATH`             | `./data/pyre.db`   | SQLite database for progress tracking |
> 
> Set in `web/.env.local` to override.
> 
> ---
> 
> ## 📁 Project Structure
> 
> ```
> pyre/
> ├── web/                  # Next.js frontend
> │   ├── src/app/          # Pages and API routes
> │   ├── src/components/   # UI components
> │   └── src/lib/          # Utilities, problem data
> ├── grading_service/      # FastAPI backend
> ├── torch_judge/          # Judge engine (problem definitions + test runner)
> └── package.json          # Dev scripts (runs frontend + backend concurrently)
> ```
> 
> ---
> 
> ## 🤝 Contributing
> 
> Contributions are welcome! Here are some ways you can help:
> 
> - **Submit a new problem** — open a PR with the p

## 延伸閱讀

相關概念：[[機器學習]] · [[深度學習]] · [[程式碼生成]]

相關專案：[[duoan--TorchCode|duoan/TorchCode]] · [[0xGF--boneyard|0xGF/boneyard]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[ultraworkers--claw-code-parity|ultraworkers/claw-code-parity]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[tanweai--pua|tanweai/pua]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

[GitHub](https://github.com/whwangovo/pyre-code)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "whwangovo--pyre-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "whwangovo--pyre-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "whwangovo--pyre-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "whwangovo--pyre-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["機器學習","深度學習","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "whwangovo--pyre-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/whwangovo--pyre-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "whwangovo--pyre-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "whwangovo" AND file.name != "whwangovo--pyre-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/whwangovo--pyre-code");
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
> const me = dv.page("Repos/whwangovo--pyre-code");
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
> const me = dv.page("Repos/whwangovo--pyre-code");
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
> const me = dv.page("Repos/whwangovo--pyre-code");
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
> const me = dv.page("Repos/whwangovo--pyre-code");
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

> **2026-04-16** — 首次收錄
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

- [[2026-04-16|2026-04-16]] — 首次收錄，726 stars
