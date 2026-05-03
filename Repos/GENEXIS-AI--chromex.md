---
repo: GENEXIS-AI/chromex
url: https://github.com/GENEXIS-AI/chromex
owner: GENEXIS-AI
owner_type: User
language: TypeScript
license: MIT
description: "A Codex-powered Chrome side-panel assistant for page context, tabs, voice, and image workflows."
homepage: ""
stars: 755
stars_per_day: 189
forks: 63
open_issues: 6
created: 2026-04-28
pushed_at: 2026-04-30
first_seen: 2026-05-01
week: "2026-W18"
month: "2026-05"
category: "開發工具"
subcategory: "瀏覽器擴展"
release_tag: "v0.1.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-01
use_case: "提供 Codex 驅動的 Chrome 側邊面板助手，協助用戶在瀏覽器中進行多種工作流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-10"
contributor_count: 4
engagement: "low"
issue_close_rate: 14
repo_size_kb: 5422
readme_length: 7869
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:687,2026-05-01:687,2026-05-02:738,2026-05-02:738,2026-05-03:755,2026-05-03:755"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "chromex"
  - "GENEXIS-AI/chromex"
  - "提供 Codex 驅動的 Chrome 側邊面板助手，協助用戶在瀏覽器中進行多種工作流程。"
---

# chromex

**755** stars · **189** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/GENEXIS-AI--chromex");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.2`

> [!summary] 一句話摘要
> 提供 Codex 驅動的 Chrome 側邊面板助手，協助用戶在瀏覽器中進行多種工作流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (189 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在 Chrome 瀏覽器中進行多模態工作流程的開發者和專業用戶。
> **一句話重點** Chromex 的設計不僅強調功能性，還重視用戶的安全和隱私。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "瀏覽器擴展" && p.file.name !== "GENEXIS-AI--chromex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 瀏覽器擴展 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的多模態工作流程，值得投入。

> [!abstract] 核心創新
> Chromex 透過本地原生橋接提供了安全的 Codex 整合，避免了敏感資料的存儲問題。

## 專案簡介

Chromex 是一個基於 Chrome MV3 的側邊面板助手，透過本地原生橋接連接到 Codex，讓用戶能夠與當前頁面、選定的標籤、上傳的文件、語音輸入和圖像進行互動。用戶可以透過此工具進行網頁內容的聊天、摘要、比較等操作，並能夠編輯或生成圖像，這些功能都不會將憑證存儲在擴展中。安裝過程中，使用者需要從源碼安裝，並確保在正確的目錄中運行 npm 命令，這樣可以避免常見的安裝錯誤。Chromex 的一個賣點是它的安全性設計，避免存儲敏感資料，並且只有在用戶請求時才會使用頁面內容和標籤數據。

技術上，Chromex 使用了 TypeScript 和 JavaScript，並依賴於多個 npm 包來實現功能，這使得它在性能上相對輕量。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Chromex 提供了更為全面的多模態工作流程支持，並且能夠直接與 Chrome 瀏覽器進行深度整合。實際使用中，可能會遇到 Windows 環境下的安裝問題，但文檔中提供了詳細的解決方案。這個專案目前仍在快速發展中，適合需要在 Chrome 中進行高效工作流程的開發者和用戶。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `HTML`

## 重點功能

- 多模態交互 — 支持與當前網頁、選定標籤、上傳文件和語音進行互動。
- 安全性設計 — 不在擴展存儲中保存敏感憑證，確保用戶資料安全。
- 即時語音轉錄 — 提供語音輸入功能，並能進行即時建議。
- 圖像編輯功能 — 支持對上傳的圖像進行非破壞性編輯。
- 自定義配置文件 — 允許用戶選擇不同的工作流程和設置。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/GENEXIS-AI/chromex.git && cd chromex && npm install
```
2. 構建專案
```bash
npm run build
```
3. 安裝本地原生主機
```bash
node scripts/install-native-host.mjs
```

## 程式碼範例

```ts
{
  "前置條件": "確保已經安裝 Node.js 和 npm。",
  "指令": "npm install && npm run build && node scripts/install-native-host.mjs",
  "預期輸出": "成功安裝並配置 Chromex 擴展。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 755 stars（189/天），forks 63（8.3%），這顯示出穩定的增長趨勢。專案的主要貢獻者 GenexisAI 具備相關背景，並且這個工具解決了在 Chrome 瀏覽器中整合 Codex 的需求，之前的解決方案往往缺乏本地支持或安全性考量。最近的推廣活動和社群討論可能也促進了其知名度。這個工具的設計使得它能夠在當前的技術生態中有效運作，尤其是在多模態應用的需求上升的背景下。forks/stars 比率為 8.3%，顯示出有相當比例的用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在 Chrome 瀏覽器中進行多模態工作流程的開發者和專業用戶。

> [!example] 使用場景
> - 前端開發者用它來快速生成網頁內容摘要，因為這能節省手動查找和整理資料的時間，提升工作效率。
> - 數據分析師用它來處理和分析上傳的 CSV 和 Excel 文件，因為它支持直接與這些文件進行交互，避免了繁瑣的轉換過程。
> - 內容創作者用它來編輯和生成圖像，因為它提供了 Codex 的圖像工作流程，使得創作過程更為直觀和高效。

## 架構分析

Chromex 採用模組化設計，將功能劃分為多個包，包括擴展、橋接和本地主機。這樣的設計使得每個部分可以獨立開發和測試，降低了維護成本。資料流從 Chrome 擴展經過本地消息主機到達 Codex 應用伺服器，這樣的架構確保了即時性和安全性。

選擇 TypeScript 使得類型檢查更為嚴謹，降低了潛在的錯誤。這種模組化的設計也使得未來的擴展和功能添加變得更加容易，但可能會增加初學者的學習曲線。整體架構的擴展性良好，未來可以支持更多的功能和集成。

## 技術深入分析

Chromex 的核心技術機制是透過本地原生橋接來連接 Codex，這使得它能夠在不存儲敏感資料的情況下進行多模態交互。使用 TypeScript 進行開發，提供了更強的類型安全和開發效率。效能方面，Chromex 能夠快速處理用戶的請求，並且在本地執行代碼以降低延遲。設計上，選擇模組化架構使得各個功能可以獨立開發，這樣的選擇雖然增加了初學者的學習難度，但也為未來的擴展提供了便利。技術風險方面，對於本地橋接的依賴可能在未來的擴展中帶來挑戰，特別是在不同操作系統上的兼容性問題。整合方面，Chromex 能夠與現有的 Chrome 瀏覽器生態系統無縫對接，並且支持與多種開發工具的集成，這使得它在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，對於新手來說相對清晰。安裝過程中，特別是在 Windows 環境下，可能會遇到一些問題，但文檔中有針對性的解決方案。整體來說，花 30 分鐘應該能夠順利安裝並運行起來。

## 優缺點分析

> [!success] 優點
> - 多模態支持，能夠處理多種文件和輸入方式。
> - 強大的安全性設計，避免敏感資料的存儲。
> - 模組化架構，便於未來擴展和維護。

> [!danger] 缺點
> - 安裝過程複雜，特別是在 Windows 環境下。
> - 目前功能仍在開發中，可能存在不穩定性。
> - 對於新手來說，學習曲線較陡。

> [!warning] 注意事項
> - 僅支援 Windows 和 Linux，對 macOS 的支持尚未實現。
> - 安裝過程對於新手來說可能較為複雜，特別是在 Windows 環境下。
> - 目前功能仍在開發中，可能會遇到不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的多模態交互功能，但缺乏對 Chrome 的深度整合。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也支持多種文件格式，但不具備即時語音轉錄和編輯功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但功能較為簡單。 | 如果需要一個輕量級的解決方案，並且不需要多模態支持。 | low，因為功能相似，且 API 設計簡單。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 基於 Python 的解決方案，功能較為全面，但性能較差。 | 如果團隊已經熟悉 Python，且需要更強的數據處理能力。 | medium，因為需要重新學習 API 和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **chromex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但功能較為簡單。 | 基於 Python 的解決方案，功能較為全面，但性能較差。 |
> | 遷移成本 | - | low，因為功能相似，且 API 設計簡單。 | medium，因為需要重新學習 API 和功能。 |
> | 適用場景 | 主要場景 | 如果需要一個輕量級的解決方案，並且不需要多模態支持。 | 如果團隊已經熟悉 Python，且需要更強的數據處理能力。 |

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

- **[HIGH]** Windows 環境下安裝時可能遇到本地橋接失敗的問題
  - 解法：確保在正確的目錄中運行 npm 命令，並重啟 Chrome 瀏覽器。
- [MEDIUM] 某些功能在特定網站上無法正常運作
  - 解法：檢查 Chrome 的權限設置，並確保已經授予必要的訪問權限。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行網頁內容分析 | 非常適合 | 提供了多種文件和網頁的交互功能，能夠提升團隊效率。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 自由職業者進行內容創作 | 適合 | 能夠快速生成和編輯內容，提升工作效率。 |
| 需要高安全性的應用場景 | 非常適合 | 設計上強調安全性，避免敏感資料存儲。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的多模態工作流程，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，設計上強調用戶的安全和隱私。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
| Forks | 63 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-04-30 |
| 建立日期 | 2026-04-28 |
| Repo 大小 | 5.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GENEXIS-AI/chromex) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/chrome` `@types/node` `esbuild` `jszip` `playwright-core` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "JavaScript" : 3
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GENEXIS-AI](https://github.com/GENEXIS-AI) | 32 |
> | [@pomcro](https://github.com/pomcro) | 19 |
> | [@eramax](https://github.com/eramax) | 1 |
> | [@1939869736luosi](https://github.com/1939869736luosi) | 1 |

**最新版本**：v0.1.2 — Chromex 0.1.2 (2026-04-29)

> [!info]- Release Notes
> Chromex 0.1.2 patch release, refreshed from verified main commit 79f8eaa.
> 
> Highlights:
> - Simplifies Windows setup by making GitHub Releases source-only and removing the confusing prebuilt browser-folder ZIP path.
> - Updates onboarding copy so users run npm commands only from the Chromex source folder that contains package.json.
> - Points Windows users to npm-based Codex CLI installation when Microsoft Store / winget fails with TLS certificate-chain errors such as 0x8a15005e.
> - Keeps Chrome Web Store upload packaging local and out of GitHub Releases.
> 
> Validation completed locally:
> - npm run typecheck
> - npm test
> - npm run build
> - npm run release:audit
> - npm run audit
> - npm run smoke
> - npm run package:webstore
> - npm run package:public
> 
> GitHub release assets:
> - chromex-0.1.2-public-source-20260430080215.zip
> - chromex-public-source.zip
> 
> Chrome Web Store upload package is intentionally not attached to this public GitHub Release.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/GENEXIS-AI/chromex)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-30 ~ 2026-04-30）
> **活躍天數** 1 天 · **最新 commit** Simplify Windows source install guidance

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/GENEXIS-AI/chromex/issues/12) | [Windows] Chromex 0.1.2 - 로컬 브리지 연결 실패: "Codex native host i | 0 | 0 |
> | [#11](https://github.com/GENEXIS-AI/chromex/issues/11) | Windows에서 로컬 브리지 연결 실패 | 0 | 0 |
> | [#10](https://github.com/GENEXIS-AI/chromex/issues/10) | Regenerate uses the current composer profile instead of the  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Chromex
> 
> [](https://github.com/GENEXIS-AI/chromex/actions/workflows/ci.yml)
> [](./LICENSE)
> [](https://github.com/GENEXIS-AI/chromex/stargazers)
> [](./README.md)
> [](./readmes/README.ko.md)
> [](./readmes/README.ja.md)
> [](./readmes/README.zh-CN.md)
> 
> Chromex is a Chrome MV3 side-panel assistant that connects Chrome to Codex through a local native bridge. It helps users work with the current page, selected tabs, uploaded files, voice input, images, and browser workflows while keeping credentials out of extension storage.
> 
> Published by **GenexisAI CHOI**.
> 
> ## What It Does
> 
> - Chat with the current webpage, selected open tabs, screenshots, uploaded files, PDFs, Office files, images, and browser history when requested.
> - Summarize and compare page content, YouTube videos, news articles, research pages, PDFs, and arXiv papers.
> - Edit or generate images through Codex image workflows with local output handling.
> - Use voice transcription, live voice mode, page-aware suggestions, custom profiles, and optional Codex skills.
> - Run browser-control workflows through Chrome content scripts with visible in-page activity indicators.
> 
> ## Install From Source
> 
> GitHub Releases publish source code only. They do not ship a separate `chromex-extension` unpacked-extension ZIP because users were mixing that browser UI folder with the source folder and running `npm install` where no `package.json` exists.
> 
> Use the source checkout or [`chromex-public-source.zip`](https://github.com/GENEXIS-AI/chromex/releases/latest/download/chromex-public-source.zip):
> 
> ```bash
> git clone https://github.com/GENEXIS-AI/chromex.git
> cd chromex
> npm install
> npm run build
> node scripts/install-native-host.mjs
> ```
> 
> Then open `chrome://extensions`, enable **Developer mode**, select **Load unpacked**, and choose:
> 
> ```text
> packages/extension/dist
> ```
> 
> Important: run `npm install`, `npm run build`, and `install-native-host.mjs` from the `chromex` source folder that contains `package.json`. If Windows reports `ENOENT Could not read package.json`, you are in the wrong folder.
> 
> ### Windows Local Bridge Setup
> 
> On Windows, install Node.js 20 LTS or newer, then install and verify the Codex CLI first:
> 
> ```powershell
> npm install -g @openai/codex
> codex --version
> ```
> 
> Use the npm install path above even if `winget install Codex -s msstore` fails. `0x8a15005e: The server certificate did not match any of the expected values` is a Windows Store / TLS certificate-chain problem outside Chromex, not a Chromex install step.
> 
> Then use **PowerShell** from the `chromex` source folder:
> 
> ```powershell
> npm install
> npm run build
> node scripts/install-native-host.mjs --browser=chrome
> ```
> 
> Then open `chrome://extensions`, click **Reload** on Chromex, and press **Check connection** in the Chromex side panel.
> 
> If the side panel still says the local bridge is waiting:
> 
> 1. Confirm Chromex is loaded from `packages/extension/dist`.
> 2. Copy the extension ID shown on the Chromex card in `chrome://extensions`.
> 3. Re-run the installer with that ID:
> 
> ```powershell
> node scripts/install-native-host.mjs  --browser=chrome
> ```
> 
> The expected public release ID is `menmlhahmendmkiicbjihgjhppkgaeom`. If Chrome shows a different ID, use the ID shown in Chrome.
> 
> If login fails with `Failed to start codex app-server`, Chromex can reach the local bridge but cannot start the Codex CLI. Re-run `codex --version`. If Windows cannot find it, set the optional Codex binary path to `%APPDATA%\npm\codex.cmd`, or set the folder to `%APPDATA%\npm`. Do not put your workspace folder in the Codex binary field; the workspace folder and Codex executable path are separate settings.
> 
> ## Runtime Boundary
> 
> Chromex uses this boundary:
> 
> ```text
> Chrome Extension -> Native Messaging Host -> Local Bridge -> codex app-server
> ```
> 
> The source tree is organized as:
> 
> - `packages/extension`: Chrome MV3 side-panel extension
> - `packages/bridge`: local bridge daemon for Codex app-server and multimodal workflows
> - `packages/native-host`: Chrome Native Messaging relay
> - `packages/shared`: shared types, policies, profiles, and helpers
> 
> ## Language Support
> 
> Chromex follows the browser language automatically by default. Users can also choose a language in **Settings > General > App UI language**.
> 
> The extension ships Chrome `_locales` entries for English, Korean, Japanese, Chinese, Arabic, French, German, Spanish, Portuguese, Hindi, Vietnamese, Thai, Turkish, Ukrainian, and many other Chrome-compatible locales. Model responses are instructed to follow the selected UI language unless the user asks for another language.
> 
> ## Security And Privacy Defaults
> 
> - The extension does not store raw OpenAI API keys, OAuth tokens, or ChatGPT session tokens in Chrome extension storage.
> - Codex OAuth / ChatGPT login is handled through the local Codex app-server flow.
> - API-key login is an optional local fallback and is never used automatically without user confirmation.
> - Page content, tab data, screenshots, browser history, microphone input, and browser actions are used only for user-requested workflows.
> - `history`, `tabs`, screen capture, microphone, and site access are requested only when a feature needs them.
> - Conversation history is session-only by default. Persistent local chat history is opt-in.
> - Native-host child processes and workspace hooks run with a reduced environment allowlist.
> - Generated image originals, temporary uploads, and diagnostics are handled by the local bridge.
> 
> Read [SECURITY.md](./SECURITY.md) and [PRIVACY.md](./PRIVACY.md) before publishing or deploying a modified build.
> 
> ## Features
> 
> - Persistent MV3 side panel with chat-first UX.
> - Automatic routing for page, file, image, history, voice, and browser-control requests.
> - `@` picker for selecting one or more open tabs.
> - `/` picker for profile selection.
> - Attachments for images, text, PDF, DOCX, CSV, TSV, XLSX, and XLSM.
> - Read strategy policy for DOM, vision, hybrid, and site-adapter workflows.
> - Site-aware suggestions for YouTube, news, research, mail, collaboration, notes, task tools, shopping, travel, and Korean work services.
> - YouTube adapter with current timestamp context and seek actions.
> - Non-destructive image editing for uploaded images, page images, or visible screen captures.
> - Markdown rendering with code blocks, tables, links, and copy controls.
> - Optional Codex skills loaded from a user's local `.codex/skills/*/SKILL.md` only when enabled.
> 
> ## Development
> 
> ```bash
> npm install
> npm run typecheck
> npm run test
> npm run build
> npm run release:audit
> ```
> 
> Optional browser smoke test:
> 
> ```bash
> npm run smoke
> ```
> 
> If no compatible browser exists, install the Playwright Chromium runtime:
> 
> ```bash
> npm run smoke:install-browser
> ```
> 
> The built extension is emitted to:
> 
> ```text
> packages/extension/dist
> ```
> 
> ## Release Management
> 
> Chromex uses normal open-source release history from `0.1.1` onward. Versioning, pull request flow, and release checklist are documented in [RELEASE.md](./RELEASE.md).
> 
> ## Troubleshooting
> 
> - **Native host missing or forbidden**: run `npm run build`, then `node scripts/install-native-host.mjs --browser=chrome`, reload the extension in `chrome://extensions`, and check Chromex onboarding/system status. If Chrome shows a different extension ID, run `node scripts/install-native-host.mjs  --browser=chrome`.
> - **Model list does not load**: confirm the native bridge is connected, then sign in through the app-server-backed login flow.
> - **Page context is unavailable**: open Chromex from the target tab or approve the Chrome site permission prompt when the workflow requests access.
> - **Chrome still shows old UI**: run `npm run build`, reload the extension card, and confirm Chrome is loading `packages/extension/dist`.
> - **Browser smoke test fails because no browser exists**: run `npm run smoke:install-browser`, then `npm run smoke`.
> 
> ## License
> 
> MIT. See [LICENSE](./LICENSE).
> 
> ## Star History

## 延伸閱讀

相關概念：[[多模態]] · [[瀏覽器擴展]] · [[即時通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/GENEXIS-AI/chromex)

## 相關收錄

> [!note]- 直接競品（同子分類：瀏覽器擴展）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "瀏覽器擴展" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "GENEXIS-AI--chromex" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","瀏覽器擴展","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GENEXIS-AI--chromex" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GENEXIS-AI--chromex" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GENEXIS-AI" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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

> **2026-05-01** — 首次收錄
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

- [[2026-05-03|2026-05-03]] — 再次上榜，755 stars
- [[2026-05-02|2026-05-02]] — 再次上榜，738 stars
- [[2026-05-01|2026-05-01]] — 首次收錄，687 stars
