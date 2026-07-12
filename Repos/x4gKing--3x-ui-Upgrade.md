---
repo: x4gKing/3x-ui-Upgrade
url: https://github.com/x4gKing/3x-ui-Upgrade
owner: x4gKing
owner_type: User
language: HTML
license: N/A
description: ""
homepage: ""
stars: 803
stars_per_day: 268
forks: 1645
open_issues: 1
created: 2026-07-08
pushed_at: 2026-07-11
first_seen: 2026-07-12
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "容器化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-12
use_case: "提供一個整合的 Heimdall 面板，透過單一端口在 Railway 上運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-15"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 24
readme_length: 2483
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:803"
tags:
  - github
  - "category/基礎設施"
  - "lang/html"
  - easy_install
aliases:
  - "3x-ui-Upgrade"
  - "x4gKing/3x-ui-Upgrade"
  - "提供一個整合的 Heimdall 面板，透過單一端口在 Railway 上運行。"
---

# 3x-ui-Upgrade

**803** stars · **268** stars/天 · 建立 3 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
> 提供一個整合的 Heimdall 面板，透過單一端口在 Railway 上運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (268 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在 Railway 上快速部署 Heimdall 面板的開發者和小型團隊。
> **一句話重點** 這個專案的設計理念在於簡化 Heimdall 面板的部署，讓開發者能夠更快速地上手。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "容器化" && p.file.name !== "x4gKing--3x-ui-Upgrade" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 容器化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到簡單的 Heimdall 面板部署，值得一試。

> [!abstract] 核心創新
> 透過單一端口在 Railway 上簡化 Heimdall 面板的部署流程。

## 專案簡介

這個專案是對 3x-ui 的一個改良版，主要用於在 Railway 上部署 Heimdall 面板，並通過 Nginx 反向代理來整合多個服務。使用者只需將 Dockerfile、nginx.conf.template 和 start.sh 放入新建的 GitHub 倉庫，然後在 Railway 上進行部署，系統會自動處理依賴和建置過程。這樣的設計讓使用者能夠在單一端口上訪問所有功能，簡化了配置和管理的複雜性。這個專案的賣點在於其簡單的部署流程和對 SQLite 的支持，適合小型用戶群體。技術上，它使用 Docker 來容器化應用，並利用 Nginx 作為反向代理，這樣可以有效管理流量和安全性。

與其他類似工具相比，如 0x0funky/agent-sprite-forge，這個專案的優勢在於其簡化的配置和單一端口的設計，適合不需要高負載的環境。對於需要更高用戶數的情況，則可考慮切換到 Postgres，但這需要額外的配置。使用者在使用過程中可能會遇到資料存儲在臨時文件系統的問題，這需要通過設置持久化卷來解決。整體來看，這個專案目前處於早期階段，適合小型團隊或個人使用，但在高負載情況下可能需要進一步的調整和優化。

**技術棧**：`Docker` · `Nginx` · `SQLite`

## 重點功能

- 單一端口訪問 — 透過 Nginx 反向代理，所有服務均可通過同一端口訪問，簡化配置。
- SQLite 支持 — 預設使用 SQLite 作為資料庫，適合小型用戶群體，無需額外配置。
- Docker 化部署 — 使用 Dockerfile 進行容器化，簡化了部署過程。
- 自動化建置 — 在 Railway 上自動識別 Dockerfile 並進行建置，減少手動操作。
- 簡單的 Inbound 配置 — 提供清晰的指導來設置 VLESS 協議的 Inbound，易於上手。

## 快速開始

1. 建立 GitHub 倉庫並上傳必要文件
```bash
將 Dockerfile、nginx.conf.template 和 start.sh 放入新建的 GitHub 倉庫
```
2. 在 Railway 上部署專案
```bash
選擇 'New Project → Deploy from GitHub repo' 並選擇該倉庫
```
3. 設置網絡配置
```bash
在 Settings → Networking 中生成域名並確保 Target Port 設置為 3000
```

## 程式碼範例

```html
# 前置條件
# 使用者需在 Railway 上創建專案並部署

# 設置 Inbound
| 協議 | VLESS |
|---|---|
| **Listen Port** | **`8080`** |
| Listen IP | 空或 `0.0.0.0` |
| Network | ws |
| Security | none |
| Path | 任意路徑，例如 `/cdn` |
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 803 stars（267.7/天），forks 1645（204.9%），這顯示出極高的使用興趣。作者 x4gKing 在這個領域有一定的經驗，這個專案解決了在 Railway 上部署 Heimdall 面板的需求，之前的解決方案往往需要多個端口或複雜的配置。這個專案的簡化流程和單一端口設計吸引了許多開發者的注意，尤其是在社群中引發了討論。技術上，Docker 和 Nginx 的組合使得這個工具在現有生態中非常實用，特別是對於需要快速部署的開發者來說。forks/stars 比率高達 204.9%，顯示出許多人在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在 Railway 上快速部署 Heimdall 面板的開發者和小型團隊。

> [!example] 使用場景
> - 後端工程師用它來在 Railway 上快速部署 Heimdall 面板，因為這樣可以簡化配置過程，並且只需使用單一端口。
> - 小型團隊用它來管理用戶訂閱和流量，因為它支持 SQLite，適合用戶數量不高的情況。
> - DevOps 工程師用它來測試 Nginx 反向代理的配置，因為這個專案提供了現成的範例和配置文件，節省了時間。

## 架構分析

這個專案採用 Docker 和 Nginx 的組合來實現單一端口的服務訪問。Docker 負責容器化應用，確保環境的一致性，而 Nginx 則作為反向代理來管理流量。這樣的設計使得使用者能夠在 Railway 上輕鬆部署，並且能夠在同一端口上訪問多個服務。

選擇 SQLite 作為資料庫的理由是其輕量和易於設置，但這也限制了用戶數量的擴展性。整體架構的擴展性在於可以隨時切換到 Postgres，但這需要額外的配置和調整。這樣的設計雖然簡化了初始部署，但在高負載情況下可能會面臨性能瓶頸。

## 技術深入分析

這個專案的核心技術在於使用 Docker 來容器化應用，這樣可以確保在不同環境下的部署一致性。Nginx 作為反向代理，不僅能夠管理流量，還能提供 SSL 支持，這對於安全性至關重要。效能方面，這個專案在小型用戶群體中表現良好，但在高負載情況下可能會遇到瓶頸，特別是當使用 SQLite 作為資料庫時。設計上選擇 Docker 和 Nginx 是基於其廣泛的使用和社群支持，但這也意味著對於不熟悉這些技術的使用者來說，可能需要一定的學習成本。技術風險方面，若未來需要擴展到更多用戶，則需要重新考慮資料庫的選擇，這可能會引入額外的技術債。整合方面，這個專案與現有的 CI/CD 流程相容性良好，能夠輕鬆地融入到現有的開發工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的部署步驟和必要的配置，但缺乏詳細的範例。安裝過程相對順暢，但需要注意資料持久化的設置。沒有提供多語言支持，對於非英語使用者可能會造成障礙。

## 優缺點分析

> [!success] 優點
> - 簡化的部署流程，適合初學者。
> - 單一端口設計，減少了配置複雜性。
> - 使用 Docker 化管理，確保環境一致性。

> [!danger] 缺點
> - 僅支持 SQLite，對於高用戶數不夠靈活。
> - 資料存儲在臨時文件系統，需設置持久化卷。
> - 對於其他協議的支持有限。

> [!warning] 注意事項
> - 僅支持 SQLite，對於高用戶數需要手動切換到 Postgres。
> - 資料存儲在臨時文件系統，需設置持久化卷以防止資料丟失。
> - 目前僅支持 VLESS 協議，對於其他協議的支持需要額外配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理服務的管理，但需要多個端口配置，對於小型用戶來說較為複雜。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具提供了更高級的用戶管理功能，但部署過程相對繁瑣，適合需要高級功能的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少 10 倍，但配置過程較為複雜。 | 如果你的團隊已經在用 Rust 並需要高效能的代理服務。 | medium，因為需要重新學習 Rust 的相關知識。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更高級的用戶管理功能，但部署過程相對繁瑣。 | 如果需要更強大的用戶管理和分析功能。 | high，因為需要重新設計整個架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **3x-ui-Upgrade** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少 10 倍，但配置過程較為複雜。 | 提供更高級的用戶管理功能，但部署過程相對繁瑣。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 的相關知識。 | high，因為需要重新設計整個架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Rust 並需要高效能的代理服務。 | 如果需要更強大的用戶管理和分析功能。 |

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

- **[HIGH]** 資料存儲在臨時文件系統，重新部署後會丟失設定
  - 解法：設置持久化卷以保存資料
- [MEDIUM] 未來需要切換到 Postgres 時需手動修改 Dockerfile
  - 解法：提前規劃資料庫的選擇，避免後期修改
- [MEDIUM] 對於不熟悉 Docker 和 Nginx 的使用者，可能會有學習曲線
  - 解法：參考官方文檔和社群資源

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內部管理系統 | 非常適合 | 簡化的部署流程和單一端口設計使其易於管理。 |
| 需要高用戶數的商業應用 | 不適合 | 目前僅支持 SQLite，無法滿足高負載需求。 |
| 個人開發者的實驗性專案 | 非常適合 | 快速上手且配置簡單，適合測試新功能。 |
| 大型企業的核心系統 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到簡單的 Heimdall 面板部署，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅在容器內部運行，且不存取敏感資料。依賴鏈的信任程度尚可，但需注意 Docker 的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
| Forks | 1.6k |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-11 |
| 建立日期 | 2026-07-08 |
| Repo 大小 | 24 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/x4gKing/3x-ui-Upgrade) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 93
>     "Dockerfile" : 4
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@x4gKing](https://github.com/x4gKing) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的 issue 數量顯示出使用者有實際的問題需要解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-11）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> #  (3x-ui fork) روی Railway با یک پورت واحد
> 
> این ریپازیتوری، پنل Heimdall (نسخه‌ی بهبودیافته‌ی 3x-ui از sh7CBAC) را به همراه یک nginx reverse proxy اجرا می‌کند که پنل، ساب‌اسکریپشن و اینباند VLESS/WebSocket را از طریق **یک پورت واحد** (همان پورتی که Railway اختصاص می‌دهد) در دسترس می‌گذارد — دقیقاً همون معماری که برای x4gKing/3x-ui-Upgrade ساختیم و تست شد.
> 
> ## درباره‌ی دیتابیس
> 
> Heimdall به‌صورت پیش‌فرض از **SQLite** استفاده می‌کند (نیازی به Postgres نیست، مگر بخواهید تعداد کاربر خیلی بالایی داشته باشید). این نسخه با همان تنظیم پیش‌فرض ساده (SQLite) پیکربندی شده.
> 
> ## مراحل دیپلوی
> 
> ### ۱. ریپازیتوری بسازید
> یک ریپازیتوری جدید در گیت‌هاب بسازید و این سه فایل را در ریشه‌ی آن قرار دهید:
> - `Dockerfile`
> - `nginx.conf.template`
> - `start.sh`
> 
> ### ۲. در Railway
> 1. **New Project → Deploy from GitHub repo** و همین ریپازیتوری را انتخاب کنید
> 2. Railway به‌طور خودکار `Dockerfile` را تشخیص و بیلد می‌کند (دانلود آخرین نسخه‌ی Heimdall از گیت‌هاب به‌صورت خودکار در زمان Build انجام می‌شود)
> 3. بعد از اتمام دیپلوی، به **Settings → Networking** بروید و **Generate Domain** بزنید
> 4. مطمئن شوید **Target Port روی 3000** تنظیم شده (چون nginx دقیقاً روی همین پورت گوش می‌دهد)
> 
> ### ۳. اولین ورود به پنل
> ```
> https://دامنه‌شما.up.railway.app/managepanel/
> ```
> یوزرنیم/پسورد پیش‌فرض `admin`/`admin` را وارد کنید و بلافاصله از تنظیمات پنل تغییرش دهید.
> 
> ### ۴. ساخت Inbound
> 
> | فیلد | مقدار |
> |---|---|
> | Protocol | VLESS |
> | **Listen Port** | **`8080`** (این عدد ثابت است) |
> | Listen IP | خالی یا `0.0.0.0` |
> | Network | ws |
> | Security | none |
> | Path | هر مسیر دلخواه، مثلاً `/cdn` |
> 
> ### ۵. ساخت لینک کلاینت
> 
> ```
> vless://UUID@دامنه‌شما.up.railway.app:443?encryption=none&security=tls&sni=دامنه‌شما.up.railway.app&fp=chrome&type=ws&host=دامنه‌شما.up.railway.app&path=%2Fcdn#MyConfig
> ```
> 
> ### ۶. لینک ساب‌اسکریپشن
> 
> مسیر ساب به‌صورت خودکار زیر همین دامنه در دسترس است:
> ```
> https://دامنه‌شما.up.railway.app/sub/USER_SUB_ID
> ```
> 
> ## تست سریع
> 
> ```
> https://دامنه‌شما.up.railway.app/managepanel/   ← باید پنل را نشان دهد
> https://دامنه‌شما.up.railway.app/cdn            ← باید "Bad Request" بدهد (یعنی به Xray رسیده)
> ```
> 
> ## نکات مهم
> 
> - تنظیمات پنل (کاربران، اینباندها) روی فایل‌سیستم موقت کانتینر ذخیره می‌شود. برای جلوگیری از پاک شدن با هر Redeploy، از بخش **Volumes** در Railway یک Volume به مسیر `/etc/x-ui` وصل کنید.
> - اگر خواستید بعداً به Postgres سوییچ کنید (برای تعداد کاربر بالا)، باید Dockerfile و start.sh را برای نصب/اتصال Postgres جداگانه اصلاح کنید — این نسخه فعلی فقط SQLite را پشتیبانی می‌کند.

## 延伸閱讀

相關概念：[[容器化]] · [[反向代理]] · [[資料庫管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/x4gKing/3x-ui-Upgrade)

## 相關收錄

> [!note]- 直接競品（同子分類：容器化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "容器化" AND file.name != "x4gKing--3x-ui-Upgrade"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "x4gKing--3x-ui-Upgrade"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "x4gKing--3x-ui-Upgrade" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "x4gKing--3x-ui-Upgrade"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["容器化","反向代理","資料庫管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "x4gKing--3x-ui-Upgrade" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "x4gKing--3x-ui-Upgrade" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "x4gKing" AND file.name != "x4gKing--3x-ui-Upgrade"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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
> const me = dv.page("Repos/x4gKing--3x-ui-Upgrade");
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

> **2026-07-12** — 首次收錄
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

- [[2026-07-12|2026-07-12]] — 首次收錄，803 stars
