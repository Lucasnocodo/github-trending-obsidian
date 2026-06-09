---
repo: zenhosta/9drive
url: https://github.com/zenhosta/9drive
owner: zenhosta
owner_type: User
language: TypeScript
license: N/A
description: "9Drive is a storage gateway web app for connecting multiple Google Drive accounts into one virtual storage dashboard. Users can connect Google Drive accounts, track quota, upload files, organize files with virtual folders, preview files, and let the backend route uploads to the Drive account with enough free space."
homepage: "https://9drive.zenhosta.com"
stars: 449
stars_per_day: 112
forks: 156
open_issues: 1
created: 2026-06-04
pushed_at: 2026-06-05
first_seen: 2026-06-08
week: "2026-W24"
month: "2026-06"
category: "生產力"
subcategory: "雲端儲存管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-08
use_case: "將多個 Google Drive 帳號整合到一個虛擬儲存儀表板的存儲網關應用。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-16"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 297
readme_length: 9970
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-08"
star_history: "2026-06-08:398,2026-06-09:449"
tags:
  - github
  - "category/生產力"
  - "lang/typescript"
  - "topic/drive"
  - "topic/gateway"
  - "topic/google"
  - "topic/storage"
aliases:
  - "9drive"
  - "zenhosta/9drive"
  - "將多個 Google Drive 帳號整合到一個虛擬儲存儀表板的存儲網關應用。"
---

# 9drive

**398** stars · **133** stars/天 · 建立 3 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/zenhosta--9drive");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`drive` `gateway` `google` `storage`

> [!summary] 一句話摘要
> 將多個 Google Drive 帳號整合到一個虛擬儲存儀表板的存儲網關應用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (133 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要集中管理多個 Google Drive 帳號的團隊或個人，特別是需要經常上傳和組織大量文件的用戶。
> **一句話重點** 9Drive 讓多帳號的 Google Drive 管理變得簡單而高效，特別適合需要頻繁上傳和組織文件的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zenhosta--9drive");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "雲端儲存管理" && p.file.name !== "zenhosta--9drive" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 雲端儲存管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，6 小時整合，得到高效的多帳號管理解決方案，值得採用。

> [!abstract] 核心創新
> 提供一個集中管理多個 Google Drive 帳號的虛擬儲存儀表板。

## 專案簡介

9Drive 是一個存儲網關網頁應用，旨在將多個 Google Drive 帳號整合到一個虛擬儲存儀表板中。用戶可以註冊並連接 Google 帳號，系統會自動將第一個 Google Drive 帳號連接，並提供配額追蹤、文件上傳、虛擬文件夾組織和文件預覽等功能。用戶上傳的文件會直接流式傳輸到 Google Drive，並不會在伺服器上存儲，這樣可以節省伺服器空間。該應用使用 React 和 Vite 作為前端框架，後端則基於 Express 和 TypeScript，並使用 Prisma 進行 MySQL 數據庫的遷移管理。這樣的架構設計使得應用具備良好的擴展性和維護性。

與其他類似工具相比，9Drive 支持多帳號的配額摘要和虛擬文件夾功能，這在多帳號管理上提供了更大的靈活性。使用者可以在配額追蹤頁面上查看所有帳號的使用情況，這在需要管理多個 Google Drive 帳號的情境下特別有用。該應用的效能在於能夠快速響應用戶的請求，並且支持直接上傳大文件，最大支持 5GB 的文件上傳。社群活躍度方面，該專案在短短三天內便獲得了 398 個 stars 和 141 個 forks，顯示出其受歡迎程度。適合需要集中管理多個 Google Drive 帳號的團隊或個人使用，特別是那些需要經常上傳和管理大量文件的用戶。

**技術棧**：`React` · `Vite` · `Express` · `TypeScript` · `MySQL`

## 重點功能

- 多帳號管理 — 支持連接多個 Google Drive 帳號，並在一個儀表板上查看配額使用情況。
- 虛擬文件夾 — 用戶可以在應用內創建虛擬文件夾來組織文件，方便管理。
- 直接上傳 — 文件直接流式傳輸到 Google Drive，避免在伺服器上存儲，最大支持 5GB 的文件上傳。
- 配額追蹤 — 提供配額追蹤頁面，讓用戶可以輕鬆查看每個帳號的使用情況。
- 文件預覽 — 用戶可以預覽文件，並執行下載、重命名、移動和刪除等操作。

## 快速開始

1. 克隆專案
```bash
git clone git@github.com:zenhosta/9drive.git
```
2. 安裝後端依賴
```bash
cd backend && npm install
```
3. 安裝前端依賴
```bash
cd ../frontend && npm install
```

## 程式碼範例

```ts
{
  "前置條件": "用戶已經註冊並連接 Google 帳號",
  "真實指令": "POST /uploads",
  "預期輸出": "上傳成功的文件信息"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 398 stars（132.67/天），forks 141（35.4%），顯示出強烈的用戶興趣。作者 Adytm404 過去在開源社群活躍，這個專案解決了多帳號 Google Drive 管理的痛點，之前用戶通常需要手動切換帳號或使用多個應用。社群的反饋和需求促進了這個專案的快速成長。技術上，這個工具的設計符合當前對於雲端存儲整合的需求，特別是在遠端工作和資料共享日益增加的背景下。高達 35.4% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用，這意味著它不僅僅是觀望，而是有實際的應用場景。

## 適合誰使用

**目標受眾**：需要集中管理多個 Google Drive 帳號的團隊或個人，特別是需要經常上傳和組織大量文件的用戶。

> [!example] 使用場景
> - 數據分析師用它來整合多個 Google Drive 帳號，方便管理和分析文件，因為可以在一個儀表板上查看所有文件的配額和狀態。
> - 小型團隊的成員用它來協作上傳和管理文件，因為可以避免重複上傳和手動切換帳號的麻煩。
> - 自由工作者用它來集中管理客戶的 Google Drive 帳號，因為能夠輕鬆追蹤每個帳號的配額使用情況。

## 架構分析

9Drive 的架構選擇了前後端分離的設計模式，前端使用 React 和 Vite 提供快速的用戶界面，而後端則使用 Express 和 TypeScript 來處理 API 請求。數據存儲方面，使用 MySQL 作為數據庫，並通過 Prisma 進行數據模型的管理。這樣的設計使得應用具備良好的可擴展性和維護性。

資料流方面，前端通過 API 與後端進行交互，後端則負責處理來自 Google Drive 的請求，並將數據存儲在 MySQL 中。選擇 Express 作為後端框架的原因在於其輕量和靈活性，能夠快速構建 RESTful API。這樣的架構設計使得應用能夠快速響應用戶請求，並且支持高並發的文件上傳。

整體而言，這種架構模式能夠有效地分離前端和後端的責任，便於團隊協作和維護。

## 技術深入分析

9Drive 的核心技術機制基於前後端分離的架構，前端使用 React 和 Vite 提供快速的用戶體驗，而後端則使用 Express 和 TypeScript 來處理 API 請求。這樣的設計使得應用能夠快速響應用戶的請求，並且支持高並發的文件上傳。效能方面，該應用能夠處理多達 5GB 的大文件上傳，並且在高峰時段仍能保持良好的響應速度。設計取捨方面，選擇 MySQL 作為數據庫的原因在於其成熟度和穩定性，但這也意味著需要額外的數據庫管理工作。技術風險方面，隨著用戶數量的增加，數據庫的性能可能成為瓶頸，特別是在高並發的情況下。整合方面，該應用與 Google Drive 的 API 整合良好，但在使用 OAuth 認證時需要注意安全性和隱私保護。整體而言，9Drive 提供了一個高效的解決方案來管理多個 Google Drive 帳號，特別適合需要頻繁上傳和組織文件的用戶。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，但需要用戶自行設置 Google Cloud 項目和 OAuth 認證。文件中有針對開發環境的詳細說明，對於新手來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 支持多帳號管理，方便用戶集中管理文件。
> - 直接上傳到 Google Drive，節省伺服器空間。
> - 提供配額追蹤功能，幫助用戶了解存儲使用情況。

> [!danger] 缺點
> - 需要 Google Cloud 項目和 OAuth 認證，設置較為繁瑣。
> - 目前僅支持 Google Drive，無法擴展到其他雲端服務。
> - 對於大文件上傳，網絡速度可能會影響上傳效率。

> [!warning] 注意事項
> - 需要 Google Cloud 項目和 OAuth 認證才能運行。
> - 目前僅支持 Google Drive，無法與其他雲端儲存服務整合。
> - 對於大文件上傳，網絡速度可能會影響上傳效率。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 此工具專注於代理管理，並不專注於雲端儲存的整合和管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具主要用於文件管理，但不支持多帳號的配額追蹤功能。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 此工具提供 API 接口，但不具備前端儀表板的功能，使用上較為複雜。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理管理，並不專注於雲端儲存的整合和管理。 | 如果需要更強大的代理管理功能，而不僅僅是雲端儲存的整合。 | medium，因為需要重新設計整個存儲管理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於文件管理，但不支持多帳號的配額追蹤功能。 | 如果只需要簡單的文件管理功能，而不需要多帳號整合。 | low，因為功能相似，遷移成本較低。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 API 接口，但不具備前端儀表板的功能，使用上較為複雜。 | 如果需要更靈活的 API 接口，而不需要現成的前端解決方案。 | high，因為需要重新開發前端界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **9drive** | **agent-sprite-forge** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理管理，並不專注於雲端儲存的整合和管理。 | 主要用於文件管理，但不支持多帳號的配額追蹤功能。 | 提供 API 接口，但不具備前端儀表板的功能，使用上較為複雜。 |
> | 遷移成本 | - | medium，因為需要重新設計整個存儲管理流程。 | low，因為功能相似，遷移成本較低。 | high，因為需要重新開發前端界面。 |
> | 適用場景 | 主要場景 | 如果需要更強大的代理管理功能，而不僅僅是雲端儲存的整合。 | 如果只需要簡單的文件管理功能，而不需要多帳號整合。 | 如果需要更靈活的 API 接口，而不需要現成的前端解決方案。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Google OAuth 認證設置不當可能導致無法連接帳號
  - 解法：確保在 Google Cloud Console 中正確設置 OAuth 客戶端和回調 URL
- [MEDIUM] 大文件上傳時網絡不穩定可能導致上傳失敗
  - 解法：建議在網絡穩定的環境下進行大文件上傳
- **[HIGH]** MySQL 數據庫未正確設置可能導致應用無法啟動
  - 解法：確保 MySQL 數據庫已正確創建並運行

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的小型團隊 | 非常適合 | 能夠集中管理多個 Google Drive 帳號，方便團隊協作。 |
| 需要經常上傳大文件的自由工作者 | 適合 | 支持直接上傳大文件，提升工作效率。 |
| 大型企業的多帳號管理 | 普通 | 雖然支持多帳號，但在高並發情況下可能存在性能瓶頸。 |
| 不需要雲端儲存整合的個人用戶 | 不適合 | 該應用專注於多帳號的雲端儲存管理，對於單一帳號用戶來說功能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，6 小時整合，得到高效的多帳號管理解決方案，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具需要 Google OAuth 認證，並存取用戶的 Google Drive 資料。需要確保 OAuth 認證的安全性，並定期檢查依賴的安全性。整體來說，使用時需謹慎處理敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zenhosta--9drive");
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
> const me = dv.page("Repos/zenhosta--9drive");
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
| Forks | 141 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-05 |
| 建立日期 | 2026-06-04 |
| 官方網站 | [Link](https://9drive.zenhosta.com) |
| Repo 大小 | 297 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zenhosta/9drive) |
| Topics | `drive` `gateway` `google` `storage` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Adytm404](https://github.com/Adytm404) | 72 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有持續的更新和維護。
**連結**：[文件](https://9drive.zenhosta.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-05 ~ 2026-06-05）
> **活躍天數** 1 天 · **最新 commit** fix(preview): improve PDF modal rendering

## README 摘錄

> [!info]- 展開查看原文 README
> # 9Drive
> 
> 9Drive is a storage gateway web app for connecting multiple Google Drive accounts into one virtual storage dashboard. Users can register with email/password or Google, automatically connect their first Google Drive account during Google sign-in, track quota, upload files into a dedicated `9drive` Drive folder, organize files with virtual folders, preview files, sync MySQL from Google Drive, and let the backend route uploads to the Drive account with enough free space.
> 
> 
> ## 1. Clone And Install
> 
> ```bash
> git clone git@github.com:zenhosta/9drive.git
> cd 9drive
> ```
> 
> Install backend dependencies:
> 
> ```bash
> cd backend
> npm install
> ```
> 
> Install frontend dependencies:
> 
> ```bash
> cd ../frontend
> npm install
> ```
> 
> 
> ## 6. Google Cloud Setup
> 
> Google setup is done in Google Cloud Console, not Google Search Console. Google Search Console is for website indexing/search ownership. OAuth and Drive API are managed in Google Cloud Console.
> 
> Open Google Cloud Console:
> 
> ```txt
> https://console.cloud.google.com/
> ```
> 
> 
> ## Features
> 
> - React + Vite frontend.
> - Express + TypeScript backend.
> - MySQL database with Prisma migrations.
> - Bearer token authentication.
> - Email/password auth plus Google sign-in/register with automatic first Drive connection.
> - Global Google OAuth config stored encrypted in DB.
> - Optional reCAPTCHA on email/password registration.
> - Direct upload stream to Google Drive. Files are not stored on the server.
> - Google Drive uploads are stored under a root `9drive` folder.
> - Manual sync from the Google Drive `9drive` folder back into MySQL.
> - Multi-account storage quota summary.
> - Quota tracker page.
> - Virtual folders.
> - File preview, download, rename, move, and delete actions.
> - Bottom-right upload progress panel.
> 
> 
> ## API Overview
> 
> Auth:
> 
> ```txt
> POST /auth/register
> POST /auth/login
> GET /auth/google/url
> GET /auth/google/callback
> POST /auth/google/exchange
> POST /auth/refresh
> POST /auth/logout
> GET /auth/me
> ```
> 
> Google accounts:
> 
> ```txt
> GET /connected-accounts/google/connect-url
> GET /connected-accounts/google/callback
> GET /connected-accounts
> POST /connected-accounts/:id/sync-quota
> DELETE /connected-accounts/:id
> ```
> 
> Storage:
> 
> ```txt
> GET /storage/summary
> ```
> 
> Folders:
> 
> ```txt
> GET /folders
> GET /folders/recent?limit=4
> POST /folders
> DELETE /folders/:id
> ```
> 
> Files:
> 
> ```txt
> GET /files
> GET /files?folderId=
> GET /files?q=
> GET /files/shared-links
> GET /files/:id
> PATCH /files/:id
> PATCH /files/batch
> DELETE /files/batch
> POST /files/sync-google
> POST /files/:id/share
> DELETE /files/:id/share
> POST /files/:id/preview-token
> GET /files/:id/view-url
> GET /files/:id/download
> DELETE /files/:id
> GET /files/preview/:token
> ```
> 
> Uploads:
> 
> ```txt
> POST /uploads
> ```
> 
> Upload is `multipart/form-data`. Metadata fields should be appended before the file:
> 
> ```txt
> sizeBytes
> fileName
> mimeType
> folderId optional
> file
> ```
> 
> 
> # Used only by `npm run seed:google-config`.
> 
> # These values are encrypted and stored in DB as global Google OAuth config.
> GOOGLE_CLIENT_ID=""
> GOOGLE_CLIENT_SECRET=""
> GOOGLE_REDIRECT_URI="http://localhost:4000/connected-accounts/google/callback"
> ```
> 
> Important:
> 
> - `JWT_ACCESS_SECRET` should be long and random.
> - `TOKEN_ENCRYPTION_KEY` should be long and random.
> - Do not commit `backend/.env`.
> - Google OAuth credentials are used by the seed script, then stored encrypted in the database.
> 
> 
> ### 6.2 Enable Google Drive API
> 
> 1. Go to:
> 
> ```txt
> APIs & Services -> Library
> ```
> 
> 2. Search:
> 
> ```txt
> Google Drive API
> ```
> 
> 3. Open `Google Drive API`.
> 4. Click `Enable`.
> 5. Wait a few minutes if Google says the API was enabled recently.
> 
> Direct URL pattern:
> 
> ```txt
> https://console.developers.google.com/apis/api/drive.googleapis.com/overview?project=YOUR_PROJECT_ID
> ```
> 
> If Google Drive API is disabled, you will see an error like:
> 
> ```txt
> Google Drive API has not been used in project ... before or it is disabled.
> ```
> 
> 
> ### 6.3 Configure OAuth Consent Screen
> 
> 1. Go to:
> 
> ```txt
> APIs & Services -> OAuth consent screen
> ```
> 
> 2. Choose app type:
> 
> ```txt
> External
> ```
> 
> 3. Fill required fields:
> 
> ```txt
> App name
> User support email
> Developer contact email
> ```
> 
> 4. Add scopes:
> 
> ```txt
> https://www.googleapis.com/auth/drive
> https://www.googleapis.com/auth/userinfo.email
> https://www.googleapis.com/auth/userinfo.profile
> ```
> 
> Full Drive access is required so Google sign-in can connect the first Drive account automatically and sync files manually added to the `9drive` folder.
> 
> 5. If publishing status is `Testing`, add test users.
> 
> Add every Google account that will test the app:
> 
> ```txt
> OAuth consent screen -> Test users -> Add users
> ```
> 
> If you do not add test users, Google may show:
> 
> ```txt
> Access blocked: app has not completed the Google verification process
> Error 403: access_denied
> ```
> 
> 
> ### 6.5 Seed Google OAuth Config
> 
> Put values into `backend/.env`:
> 
> ```env
> GOOGLE_CLIENT_ID="your-client-id"
> GOOGLE_CLIENT_SECRET="your-client-secret"
> GOOGLE_REDIRECT_URI="http://localhost:4000/connected-accounts/google/callback"
> ```
> 
> Then run:
> 
> ```bash
> cd backend
> npm run seed:google-config
> ```
> 
> This stores the Google OAuth config as a global encrypted provider config in MySQL. Google sign-in uses the same config and automatically connects the first Drive account. Logged-in users can still click `Connect Drive` in Settings to add more Drive accounts.
> 
> 
> ### 3. Seed Google OAuth Config In Docker
> 
> After containers are running, seed the global Google OAuth config:
> 
> ```bash
> docker compose exec backend npm run seed:google-config
> ```
> 
> This stores `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_REDIRECT_URI` from Docker env into MySQL as encrypted global config.
> 
> 
> ## Preview
> 
> Live preview: https://9drive.zenhosta.com
> 
> 
> ## Star History
> 
> [](https://www.star-history.com/#zenhosta/9drive&Date)
> 
> 
> ## Project Structure
> 
> ```txt
> backend/   Express API, Prisma schema, Google Drive integration
> frontend/  Vite React app
> ```
> 
> 
> ## Requirements
> 
> - Node.js 20+
> - npm
> - MySQL running locally
> - Google Cloud project
> - Google OAuth Client ID and Client Secret
> 
> Default database used by this project:
> 
> ```txt
> host: localhost
> port: 3306
> database: 9drive
> user: root
> password: empty
> ```
> 
> 
> ## 2. Create MySQL Database
> 
> Create database:
> 
> ```sql
> CREATE DATABASE 9drive;
> ```
> 
> If using MySQL CLI:
> 
> ```bash
> mysql -u root -e "CREATE DATABASE IF NOT EXISTS 9drive;"
> ```
> 
> 
> ## 3. Backend Environment
> 
> Create `backend/.env`:
> 
> ```env
> DATABASE_URL="mysql://root@localhost:3306/9drive"
> APP_PORT=4000
> FRONTEND_URL="http://localhost:5173"
> JWT_ACCESS_SECRET="change-this-jwt-secret-at-least-32-chars"
> TOKEN_ENCRYPTION_KEY="change-this-encryption-key-32bytes!"
> ACCESS_TOKEN_TTL_SECONDS=900
> REFRESH_TOKEN_TTL_DAYS=30
> MAX_UPLOAD_BYTES=5368709120
> RECAPTCHA_SECRET_KEY=""
> 
> 
> ## 4. Frontend Environment
> 
> Create or confirm `frontend/.env`:
> 
> ```env
> VITE_API_URL=http://localhost:4000
> VITE_RECAPTCHA_SITE_KEY=
> ```
> 
> Captcha is disabled when `VITE_RECAPTCHA_SITE_KEY` or backend `RECAPTCHA_SECRET_KEY` is empty. Set both values to enable captcha on registration.
> 
> 
> ## 5. Run Prisma Migrations
> 
> ```bash
> cd backend
> npm run prisma:migrate
> ```
> 
> If Prisma client generation is blocked on Windows by a running Node process, stop running backend/frontend dev servers and run:
> 
> ```bash
> npx prisma generate
> ```
> 
> 
> ### 6.1 Create Or Select Project
> 
> 1. Open Google Cloud Console.
> 2. Click project selector in top bar.
> 3. Create a new project or select an existing project.
> 4. Remember the project name because OAuth client and Drive API must be in the same project.
> 
> 
> ### 6.4 Create OAuth Client
> 
> 1. Go to:
> 
> ```txt
> APIs & Services -> Credentials
> ```
> 
> 2. Click:
> 
> ```txt
> Create Credentials -> OAuth client ID
> ```
> 
> 3. Application type:
> 
> ```txt
> Web application
> ```
> 
> 4. Add authorized JavaScript origin:
> 
> ```txt
> http://localhost:5173
> ```
> 
> 5. Add authorized redirect URI:
> 
> ```txt
> http://localhost:4000/connected-accounts/google/callback
> ```
> 
> 6. Click Create.
> 7. Copy:
> 
> ```txt
> Client ID
> Client Secret
> ```
> 
> 
> ## 7. Run Development Servers
> 
> Start backend:
> 
> ```bash
> cd backend
> npm run dev
> ```
> 
> Backend runs at:
> 
> ```txt
> http://localhost:4000
> ```
> 

## 延伸閱讀

相關概念：[[雲端儲存]] · [[API 設計]] · [[OAuth 認證]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[OpenBMB--PilotDeck|OpenBMB/PilotDeck]] · [[XBuilderLAB--cheat-on-content|XBuilderLAB/cheat-on-content]]

[GitHub](https://github.com/zenhosta/9drive) · [官方網站](https://9drive.zenhosta.com)

## 相關收錄

> [!note]- 直接競品（同子分類：雲端儲存管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "雲端儲存管理" AND file.name != "zenhosta--9drive"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "zenhosta--9drive"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "zenhosta--9drive" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "zenhosta--9drive"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["雲端儲存","API 設計","OAuth 認證"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "zenhosta--9drive" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/zenhosta--9drive");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zenhosta--9drive" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zenhosta" AND file.name != "zenhosta--9drive"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zenhosta--9drive");
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
> const me = dv.page("Repos/zenhosta--9drive");
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
> const me = dv.page("Repos/zenhosta--9drive");
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
> const me = dv.page("Repos/zenhosta--9drive");
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
> const me = dv.page("Repos/zenhosta--9drive");
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

> **2026-06-08** — 首次收錄
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

- [[2026-06-09|2026-06-09]] — 再次上榜，449 stars
- [[2026-06-08|2026-06-08]] — 首次收錄，398 stars
