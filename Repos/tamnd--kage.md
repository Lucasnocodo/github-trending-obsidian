---
repo: tamnd/kage
url: https://github.com/tamnd/kage
owner: tamnd
owner_type: User
language: Go
license: MIT
description: "Shadow any website for offline viewing, with the JavaScript stripped out"
homepage: "https://kage.tamnd.com"
stars: 2166
stars_per_day: 361
forks: 69
open_issues: 12
created: 2026-06-14
pushed_at: 2026-06-20
first_seen: 2026-06-16
week: "2026-W25"
month: "2026-06"
category: "其他"
subcategory: "網站克隆"
release_tag: "v0.3.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-16
use_case: "讓網站離線瀏覽，並去除所有 JavaScript 代碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 42
repo_size_kb: 1308
readme_length: 9866
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-16"
star_history: "2026-06-16:1546,2026-06-17:1762,2026-06-18:1863,2026-06-19:2010,2026-06-20:2098,2026-06-21:2166"
tags:
  - github
  - "category/其他"
  - "lang/go"
aliases:
  - "kage"
  - "tamnd/kage"
  - "讓網站離線瀏覽，並去除所有 JavaScript 代碼。"
---

# kage

**1.5k** stars · **1.5k** stars/天 · 建立 1 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/tamnd--kage");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.3.2`

> [!summary] 一句話摘要
> 讓網站離線瀏覽，並去除所有 JavaScript 代碼。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要離線保存網站內容但又不想被 JavaScript 干擾的開發者或研究人員。
> **一句話重點** kage 的創新在於它能夠在克隆網站時自動去除 JavaScript，確保用戶在離線環境中獲得完整的網站體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tamnd--kage");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網站克隆" && p.file.name !== "tamnd--kage" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網站克隆 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到一個強大的網站克隆工具，值得一試。

> [!abstract] 核心創新
> kage 能夠在克隆網站時自動去除所有 JavaScript，確保離線瀏覽的完整性。

## 專案簡介

kage 是一個網站克隆工具，能將網站內容離線保存，並去除所有 JavaScript 代碼，確保用戶在離線環境中也能正常瀏覽。用戶只需透過 `kage clone <網站>` 指令，kage 會啟動一個無頭 Chrome 瀏覽器，等待頁面加載完成後，抓取最終的 DOM 結構，並將 CSS、圖像等資源下載到本地。這樣的設計避免了傳統的「另存為」方式常見的問題，確保用戶獲得的是一份完整且可用的網站副本。kage 的賣點在於其簡單易用的 CLI 指令，並且能夠生成一個可執行的二進制文件，讓用戶無需安裝其他軟體即可離線訪問網站。技術上，kage 使用 Go 語言開發，並依賴多個輕量級的庫，如 `go-rod` 來控制 Chrome 瀏覽器，這使得其在性能上表現優異。

與其他網站克隆工具相比，kage 的優勢在於其能夠自動處理 JavaScript 的移除，並提供了靈活的爬取選項，如 `--max-pages` 和 `--max-depth`，用戶可以輕鬆控制爬取的範圍。實際使用中，kage 能夠處理大量頁面，並且支持重新渲染以捕捉新內容。這個工具適合需要長期保存網站內容的用戶，特別是在無法保證網路連接的情況下。未來，kage 可能會進一步增強對不同網站結構的兼容性，並改善用戶界面。對於需要在特定環境下進行網站資料保存的開發者，kage 是一個值得考慮的選擇。

**技術棧**：`Go 1.26.4` · `Chromium`

## 重點功能

- 網站克隆 — 使用 `kage clone <網站>` 指令，將網站內容克隆到本地。
- 無頭瀏覽器 — 透過無頭 Chrome 瀏覽器加載網站，確保獲取的內容是最終呈現的結果。
- 去除 JavaScript — 自動移除所有 JavaScript 代碼，避免網頁在離線環境中出現錯誤。
- 支持多種輸出格式 — 透過 `kage pack <網站>` 指令，將克隆的網站打包成 ZIM 檔案或可執行的二進制文件。
- 靈活的爬取選項 — 支持 `--max-pages` 和 `--max-depth` 等參數，讓用戶能控制爬取的範圍和深度。

## 快速開始

1. 克隆網站
```bash
kage clone paulgraham.com
```
2. 啟動本地伺服器
```bash
kage serve $HOME/data/kage/paulgraham.com
```
3. 打包網站成 ZIM 檔案
```bash
kage pack paulgraham.com
```

## 程式碼範例

```go
{
  "前置條件": "安裝 kage 並確保有 Chrome 瀏覽器",
  "指令": "kage clone paulgraham.com",
  "預期輸出": "將網站克隆到本地，並可透過本地伺服器訪問。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1546 stars（1546/天），forks 36（2.3%），這顯示出用戶對於這個工具的高度興趣。作者 tamnd 是一位活躍的開發者，過去在 GitHub 上有多個開源專案，這使得其具備一定的信譽。kage 解決了傳統網站保存方式的痛點，特別是對於需要去除 JavaScript 的需求，這在現有工具中並不常見。最近的推廣活動和社群討論也可能促進了其曝光率。隨著網路內容日益增長，對於離線存取的需求也在增加，這使得 kage 的出現正好符合市場需求。forks/stars 比率的相對偏低，顯示出目前仍有許多用戶在觀望，尚未進行實際修改。

## 適合誰使用

**目標受眾**：需要離線保存網站內容但又不想被 JavaScript 干擾的開發者或研究人員。

> [!example] 使用場景
> - 內容創作者用它來保存網站資料，因為可以確保未來離線訪問時不會受到網路變化影響。
> - 研究人員用它來克隆學術網站，因為能夠在沒有網路的情況下進行資料分析，避免資料丟失。
> - 學生用它來下載課程網站，因為可以在沒有網路的情況下隨時訪問學習資源。

## 架構分析

kage 採用 Go 語言開發，並使用無頭 Chrome 瀏覽器進行網站渲染。這種設計使得 kage 能夠獲取最終的 DOM 結構，並在本地生成可瀏覽的網站副本。資料流方面，kage 先從網站獲取 HTML，再通過無頭瀏覽器加載所有資源，最後將這些資源下載到本地。

選擇 Go 語言的原因在於其高效能和簡潔性，而無頭 Chrome 則提供了強大的渲染能力。這種架構的代價是需要安裝 Chrome 瀏覽器，並且在某些情況下可能會受到網站的反爬蟲機制影響。擴展性方面，kage 目前能夠處理大多數靜態網站，但對於動態內容的支持仍有待加強。

未來可能會考慮增加對更多網站結構的兼容性。這樣的設計使得 kage 在網站克隆工具中具備了獨特的優勢。

## 技術深入分析

kage 的核心技術機制在於使用無頭 Chrome 瀏覽器來渲染網站，這使得它能夠獲取最終的 DOM 結構。這種方式相比傳統的靜態 HTML 抓取方法更為可靠，因為它能夠處理 JavaScript 動態生成的內容。效能方面，kage 能夠在合理的時間內處理大量頁面，並且支持並行渲染，這對於大型網站的克隆特別重要。設計上，選擇 Go 語言是因為其高效能和良好的並發支持，而無頭 Chrome 則提供了強大的渲染能力。這樣的選擇雖然增加了安裝的複雜性，但卻大幅提升了工具的靈活性和可靠性。技術風險方面，kage 可能會在面對一些網站的反爬蟲機制時遇到挑戰，這需要不斷調整爬取策略。整合方面，kage 可以輕鬆地與現有的開發工具鏈結合，並且支持多種操作系統，這使得它在跨平台使用時非常方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了詳細的指令和範例，安裝過程相對順暢，但需要用戶自行安裝 Chrome。getting started guide 也提供了簡單的步驟，讓新手能快速上手。文件目前僅提供英文版本，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 能夠有效去除 JavaScript，確保離線瀏覽的完整性。
> - 支持多種輸出格式，方便用戶分享和使用。
> - 簡單易用的 CLI 接口，適合各種用戶。

> [!danger] 缺點
> - 需要安裝 Chrome 或 Chromium，增加了使用門檻。
> - 對於某些網站的支持可能有限，特別是動態網站。
> - 在爬取過程中可能會受到 robots.txt 的限制。

> [!warning] 注意事項
> - 需要安裝 Chrome 或 Chromium 瀏覽器。
> - 對於某些網站可能無法完全克隆，特別是那些依賴大量 JavaScript 的網站。
> - 在爬取過程中可能會受到 robots.txt 的限制，需手動設置忽略該限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成網站的代理，並不專注於離線保存內容。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的網站克隆功能，但未必去除 JavaScript，可能會影響離線瀏覽體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於網站內容的長期保存，但不提供去除 JavaScript 的功能。 | 如果需要長期保存網站內容而不在意 JavaScript 的影響，boneyard 可能更適合。 | medium，因為需要重新設計保存流程。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的網站克隆功能，但未必去除 JavaScript，可能會影響離線瀏覽體驗。 | 如果需要一個快速的網站克隆工具，而不在意 JavaScript 的影響，Shadowbroker 可能更合適。 | low，因為工具的使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **kage** | **boneyard** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於網站內容的長期保存，但不提供去除 JavaScript 的功能。 | 提供類似的網站克隆功能，但未必去除 JavaScript，可能會影響離線瀏覽體驗。 |
> | 遷移成本 | - | medium，因為需要重新設計保存流程。 | low，因為工具的使用方式相似。 |
> | 適用場景 | 主要場景 | 如果需要長期保存網站內容而不在意 JavaScript 的影 | 如果需要一個快速的網站克隆工具，而不在意 JavaScrip |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網站上，JavaScript 可能仍然會影響頁面顯示，特別是使用大量 AJAX 的網站。
  - 解法：嘗試使用 `--no-robots` 參數來繞過限制，或手動調整爬取策略。
- [MEDIUM] 克隆過程中可能會因為網路不穩定導致部分資源無法下載。
  - 解法：在穩定的網路環境下重試克隆，或使用 `--refresh` 參數重新渲染。
- [MEDIUM] 對於某些網站，可能需要手動設置 Chrome 的路徑。
  - 解法：使用 `--chrome` 參數指定 Chrome 的路徑。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要保存學術網站資料的研究人員 | 非常適合 | kage 能夠去除 JavaScript，確保資料的完整性。 |
| 需要長期保存網站內容的內容創作者 | 適合 | kage 提供了簡單的克隆和打包功能，方便分享。 |
| 需要快速克隆網站的開發者 | 普通 | 雖然 kage 易於使用，但對於某些網站可能無法完全克隆。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個強大的網站克隆工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：kage 本身不需要高權限，且不會存取敏感資料。依賴鏈中沒有已知的供應鏈風險，使用時在 CI/CD 中也相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

kage 最常與無頭 Chrome 和 Docker 搭配使用，通常在開發和資料保存的環節中使用。在一個使用 Docker 的專案中，kage 可以透過 `docker run` 指令快速啟動，並將網站克隆到指定目錄。支援 GitHub Actions 等 CI 工具，方便在自動化流程中集成。與主流 IDE 的整合相對簡單，但可能需要手動設置路徑。整合的摩擦點主要在於 Chrome 的安裝和配置，這可能會對某些用戶造成困擾。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 kage 出現之前，網站保存主要依賴於瀏覽器的「另存為」功能，但這種方式常常無法保證內容的完整性。隨著網路內容的增長和多樣化，對於離線保存的需求也日益增加。kage 的出現正好填補了這一空白，提供了一個高效且可靠的解決方案。

未來，隨著網路技術的進步，kage 可能會進一步提升對動態網站的支持，並增強用戶體驗。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Go 語言
- 了解基本的 CLI 操作

> [!tip] 導入策略
> 第一週：在個人專案中試用 kage。第二週：在內部工具中導入，測試其穩定性。第三週：撰寫最佳實踐文件，分享給團隊成員。

**成功指標**：網站克隆成功率達到 95%。

> [!warning] 退出計畫
> 若要退出，所有設定和克隆的網站資料都存儲在指定目錄中，方便轉移到其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tamnd--kage");
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
> const me = dv.page("Repos/tamnd--kage");
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
| Forks | 36 |
| Open Issues | 7 |
| Issue 解決率 | 42% (5 closed) |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-14 |
| 官方網站 | [Link](https://kage.tamnd.com) |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tamnd/kage) |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `module` `charm.land/lipgloss/v2` `github.com/charmbracelet/fang` `github.com/go-rod/rod` `github.com/go-rod/stealth` `github.com/google/uuid` `github.com/klauspost/compress` `github.com/parquet-go/parquet-go` `github.com/spf13/cobra` `github.com/webview/webview_go` `golang.org/x/image` `golang.org/x/net` `github.com/andybalholm/brotli` `github.com/charmbracelet/colorprofile` `github.com/charmbracelet/ultraviolet`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 97
>     "Python" : 2
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tamnd](https://github.com/tamnd) | 53 |

**最新版本**：v0.3.2 (2026-06-15)

> [!info]- Release Notes
> ## Changelog
> ### Other
> * 16c9fcbcfecb44b335dafa26a96c329272d225a1: Add a meta charset to saved pages so text does not mojibake (@tamnd)
> * 3ec5c8fdaf620fa9bfc9e61e9c10343b9e66a5d0: Cut the v0.3.2 release notes (@tamnd)

## 社群與生態

**社群活躍度**：社群活躍度中等，有一定的開發支持。
**連結**：[文件](https://kage.tamnd.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-15 ~ 2026-06-15）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #31 from tamnd/release-0.3.2

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/tamnd/kage/issues/6) | limit crawling | 3 | 0 |
> | [#9](https://github.com/tamnd/kage/issues/9) | Cookies? | 2 | 0 |
> | [#5](https://github.com/tamnd/kage/issues/5) | crawl a subset | 1 | 0 |
> | [#32](https://github.com/tamnd/kage/issues/32) | Polution of user's "Downloads" folder | 0 | 4 |
> | [#21](https://github.com/tamnd/kage/issues/21) | homebrew tap 404 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # kage
> 
> [](https://github.com/tamnd/kage/actions/workflows/ci.yml)
> [](https://github.com/tamnd/kage/releases/latest)
> [](https://pkg.go.dev/github.com/tamnd/kage)
> [](https://goreportcard.com/report/github.com/tamnd/kage)
> [](./LICENSE)
> 
> **kage** (影, "shadow") clones a website into a folder you can browse offline, with every script stripped out. It opens each page in real headless Chrome, waits for the page to settle, snapshots the DOM a human would have seen, then deletes all the JavaScript and pulls the CSS, images, and fonts down to local paths. What lands on disk looks like the live site and runs no code.
> 
> [Install](#install) • [Quick start](#quick-start) • [Commands](#commands) • [Clone](#clone) • [Pack](#pack-it-into-one-file) • [Double-click app](#a-double-click-app) • [Native window](#a-real-window-not-a-browser-tab) • [How it works](#how-it-works)
> 
> You already know the problem. You hit "Save As" on a page you want to keep, and six months later you open it to find a blank screen, a spinner that never stops, or a copy that still tries to phone home to an analytics server that no longer exists. The page was never really yours. It was a thin client for someone else's JavaScript.
> 
> kage takes the other road. It drives a real browser, lets the page finish doing whatever it does, grabs the finished result, and then rips every script out of it. No tracking, no network calls, no surprises. Just `.html` files you can open straight off disk, hand to a friend, or pack into a single file and forget about for a decade.
> 
> Full docs and guides live at **[kage.tamnd.com](https://kage.tamnd.com)**.
> 
> 
> ## Install
> 
> ```bash
> go install github.com/tamnd/kage/cmd/kage@latest
> ```
> 
> Prefer a prebuilt binary? Grab an archive, a `.deb`/`.rpm`/`.apk`, or a checksum from [releases](https://github.com/tamnd/kage/releases). Or skip installing Chrome yourself and use the container image, which bundles Chromium:
> 
> ```bash
> docker run --rm -v "$PWD/out:/out" ghcr.io/tamnd/kage clone paulgraham.com
> ```
> 
> kage drives a real browser, so it needs Chrome or Chromium on the host. It finds a system install on its own; point it somewhere specific with `--chrome` or the `KAGE_CHROME` environment variable. The container needs nothing extra.
> 
> Shell completion ships in the box: `kage completion bash|zsh|fish|powershell`.
> 
> 
> ## Quick start
> 
> Let's mirror Paul Graham's essays so you can read them on a plane, on a laptop with no wifi, or in the year 2050 after the site has finally changed its design:
> 
> ```bash
> 
> # 1. Clone the site into $HOME/data/kage/paulgraham.com/
> kage clone paulgraham.com
> 
> 
> # 2. Read it back offline in your browser
> kage serve $HOME/data/kage/paulgraham.com
> 
> # open http://127.0.0.1:8800
> ```
> 
> That's the whole loop. Every essay, every image, every stylesheet, frozen on your disk and runnable with zero network. The next two steps are optional but nice: collapse the whole thing into one file, and pop it open in its own window.
> 
> ```bash
> 
> # 3. Squeeze the mirror into a single shareable file
> kage pack paulgraham.com               # -> paulgraham.com.zim
> kage open paulgraham.com.zim
> 
> 
> # 4. Or into one executable that *is* the site
> kage pack paulgraham.com --format binary -o paulgraham
> ./paulgraham                           # serves itself, needs nothing installed
> ```
> 
> 
> ## Commands
> 
> | Command | What it does |
> | --- | --- |
> | `kage clone ` | render a site in headless Chrome and write a browsable, script-free mirror |
> | `kage serve [dir]` | preview a cloned folder over a local HTTP server |
> | `kage pack ` | collapse a mirror into one ZIM archive, a self-contained viewer binary, or a double-click app |
> | `kage open ` | serve a packed ZIM back for offline reading |
> 
> 
> ## Clone
> 
> ```bash
> 
> # The whole site, into $HOME/data/kage//
> kage clone https://paulgraham.com
> 
> 
> # Just the first 50 pages, two links deep, for a quick taste
> kage clone paulgraham.com --max-pages 50 --max-depth 2
> 
> 
> # Only one section of a bigger site
> kage clone go.dev --scope-prefix /doc
> 
> 
> # Pull in subdomains too, and scroll each page to trip lazy-loaded images
> kage clone example.com --subdomains --scroll
> 
> 
> # Come back next month and re-render in place to catch new essays
> kage clone paulgraham.com --refresh
> ```
> 
> A clone is a polite, breadth-first crawl. It reads `robots.txt`, seeds itself from `sitemap.xml`, and stays on the seed host unless you tell it otherwise. It is also stubbornly idempotent: each page is keyed by the file it writes, so the same essay reached over http and https, with or without a trailing slash, gets fetched exactly once. Hit Ctrl-C and it saves its place on the way out; run it again and it picks up where it stopped. `--refresh` re-renders in place, `--force` wipes the host and starts clean.
> 
> The flags you'll actually reach for:
> 
> | Flag | Default | Meaning |
> |------|---------|---------|
> | `-o, --out` | `$HOME/data/kage` | Output root; the mirror lands in `//` |
> | `-p, --max-pages` | `0` | Stop after N pages (0 = no limit) |
> | `-d, --max-depth` | `0` | How many links deep to follow (0 = no limit) |
> | `--scope-prefix` | | Only crawl paths starting with this prefix |
> | `--subdomains` | `false` | Treat subdomains of the seed host as in scope |
> | `--exclude` | | Path prefixes to skip (repeatable) |
> | `--scroll` | `false` | Auto-scroll each page to trigger lazy loading |
> | `--workers` | `4` | How many pages to render at once |
> | `--no-robots` | `false` | Ignore `robots.txt` (be nice) |
> | `-f, --force` | `false` | Delete any existing mirror for the host first |
> | `--chrome` | | Path to the Chrome/Chromium binary |
> 
> `kage clone --help` has the rest, including render-timing, concurrency, and asset-size knobs.
> 
> 
> ### Serve
> 
> `kage serve` runs a tiny static file server over a cloned folder so links and assets resolve the way they would on a real host:
> 
> ```bash
> kage serve $HOME/data/kage/paulgraham.com
> 
> # open http://127.0.0.1:8800
> ```
> 
> 
> ## Pack it into one file
> 
> A mirror is a folder, which is great for browsing and lousy for moving around. Copying thousands of little files is slow, and "here, have this directory" is a clumsy thing to hand someone. `kage pack` collapses the whole mirror into one artifact, and you choose the shape: an open ZIM archive, or a single executable that *is* the site.
> 
> 
> ### A single ZIM file
> 
> ```bash
> kage pack paulgraham.com               # -> paulgraham.com.zim
> kage open paulgraham.com.zim
> ```
> 
> ZIM is an open file format built for exactly this: a whole website (or a whole Wikipedia) squeezed into one compressed, indexed, read-only file. kage writes the entire mirror into it, text zstd-compressed and media stored as-is. It is the format behind [Kiwix](https://kiwix.org), the offline-content project people use to carry Wikipedia, Stack Overflow, and Project Gutenberg onto boats, into classrooms with no internet, and onto a phone for a long flight. Because the format is a documented standard and not a kage invention, a `paulgraham.com.zim` you make today will still open in any ZIM reader years from now.
> 
> So you are not locked into kage. `kage open` is the quickest way back in, but the very same file works across the wider Kiwix ecosystem:
> 
> ```bash
> kage open paulgraham.com.zim            # read it back with kage
> kiwix-serve paulgraham.com.zim          # or serve it with Kiwix at http://localhost
> ```
> 
> You can also double-click the file in the [Kiwix desktop app](https://kiwix.org/en/applications/), or load it on [Kiwix for Android or iOS](https://kiwix.org/en/applications/) to read your mirror on your phone. One caveat: kage writes a structurally valid archive with the standard metadata, but it does not build the full-text search index that Kiwix's own packs ship with, so browsing and clicking work everywhere while in-reader search is limited.
> 
> Packing is deterministic. The same mirror always produces a byte-identical file, with the archive UUID derived from the content instead of randomized, so a pack is safe to checksum and cache. A bare host name resolves against the default output directory, which

## 延伸閱讀

相關概念：[[自動化]] · [[爬蟲]] · [[CLI/TUI]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/tamnd/kage) · [官方網站](https://kage.tamnd.com)

## 相關收錄

> [!note]- 直接競品（同子分類：網站克隆）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網站克隆" AND file.name != "tamnd--kage"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "tamnd--kage"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "tamnd--kage" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "tamnd--kage"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","爬蟲","CLI/TUI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tamnd--kage" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tamnd--kage");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tamnd--kage" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tamnd" AND file.name != "tamnd--kage"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tamnd--kage");
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
> const me = dv.page("Repos/tamnd--kage");
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
> const me = dv.page("Repos/tamnd--kage");
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
> const me = dv.page("Repos/tamnd--kage");
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
> const me = dv.page("Repos/tamnd--kage");
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

> **2026-06-16** — 首次收錄
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

- [[2026-06-21|2026-06-21]] — 再次上榜，2.2k stars
- [[2026-06-20|2026-06-20]] — 再次上榜，2.1k stars
- [[2026-06-19|2026-06-19]] — 再次上榜，2.0k stars
- [[2026-06-18|2026-06-18]] — 再次上榜，1.9k stars
- [[2026-06-17|2026-06-17]] — 再次上榜，1.8k stars
- [[2026-06-16|2026-06-16]] — 首次收錄，1.5k stars
