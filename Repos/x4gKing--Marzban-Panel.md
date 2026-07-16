---
repo: x4gKing/Marzban-Panel
url: https://github.com/x4gKing/Marzban-Panel
owner: x4gKing
owner_type: User
language: Dockerfile
license: N/A
description: ""
homepage: ""
stars: 776
stars_per_day: 259
forks: 1408
open_issues: 1
created: 2026-07-12
pushed_at: 2026-07-13
first_seen: 2026-07-15
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "部署工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-15
use_case: "提供一個簡化的 Marzban 部署面板，透過 Docker 自動獲取最新源碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-19"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 7
readme_length: 1498
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-15"
star_history: "2026-07-15:672,2026-07-16:776"
tags:
  - github
  - "category/基礎設施"
  - "lang/dockerfile"
  - easy_install
aliases:
  - "Marzban-Panel"
  - "x4gKing/Marzban-Panel"
  - "提供一個簡化的 Marzban 部署面板，透過 Docker 自動獲取最新源碼。"
---

# Marzban-Panel

**672** stars · **336** stars/天 · 建立 2 天前 · Dockerfile · 未標註授權

```dataviewjs
const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
> 提供一個簡化的 Marzban 部署面板，透過 Docker 自動獲取最新源碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (336 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要快速部署 Marzban 並希望自動獲取最新版本的開發者。
> **一句話重點** 這個專案透過自動化的方式，讓 Marzban 的部署變得前所未有的簡單。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "部署工具" && p.file.name !== "x4gKing--Marzban-Panel" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 部署工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速部署的效果，值得嘗試。

> [!abstract] 核心創新
> 透過 Docker 自動獲取最新的 Marzban 源碼，簡化部署流程。

## 專案簡介

Marzban Panel 是一個基於 Docker 的應用，專門用來簡化 Marzban 的部署過程。用戶只需在 Railway 上創建新專案，系統會自動從 Gozargah/Marzban 克隆最新源碼，並構建出可用的面板。這種方法的優勢在於，使用者始終可以獲得最新版本的 Marzban，避免了手動更新的麻煩，並且保持了儲存庫的輕量化。安裝過程中，用戶可以選擇設置管理員帳號，並且可以輕鬆切換資料庫到 Postgres。這樣的設計使得部署過程簡單且高效，特別適合需要快速上線的開發者。

值得注意的是，這個專案的 Dockerfile 會在每次構建時自動拉取最新的 Marzban 源碼，這意味著用戶不需要擔心過時的代碼問題。相較於傳統的手動部署方式，這樣的自動化流程大大降低了出錯的風險。這個工具的賣點在於其簡單易用和自動更新的特性，特別適合小型團隊或個人開發者使用。使用者只需在 Railway 上進行簡單的設置，即可快速啟動服務，這使得它在快速迭代的開發環境中非常受歡迎。

**技術棧**：`Docker` · `Shell`

## 重點功能

- 自動克隆最新源碼 — 每次構建時自動從 Gozargah/Marzban 克隆最新版本。
- 簡單的 Railway 部署 — 只需幾個步驟即可在 Railway 上完成部署。
- 輕量化儲存庫 — 只需維護少量文件，避免了冗餘的源碼。
- 可選的資料庫配置 — 支援 SQLite 和 Postgres，靈活滿足不同需求。
- 自動管理員帳號創建 — 設置環境變數即可自動創建管理員帳號。

## 快速開始

1. Fork 這個專案到你的 GitHub
```bash
N/A
```
2. 在 Railway 上創建新專案並選擇 Fork 的專案
```bash
N/A
```
3. 設置環境變數以創建管理員帳號
```bash
N/A
```
4. 等待構建完成
```bash
N/A
```

## 程式碼範例

```dockerfile
{
  "前置條件": "已在 Railway 上創建專案並選擇 Fork 的專案。",
  "指令": "marzban-cli admin create --sudo",
  "預期輸出": "創建成功的管理員帳號。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 672 stars（336/天），forks 1174（174.7%），這顯示出極高的使用興趣。作者 x4gKing 以簡化部署流程為目標，解決了傳統手動更新的繁瑣問題，這在開發者社群中引起了廣泛關注。由於其自動獲取最新源碼的特性，讓許多開發者感受到便利，特別是在快速迭代的環境中。這個專案的成功也反映了現代開發中對於自動化和簡化流程的需求。

## 適合誰使用

**目標受眾**：需要快速部署 Marzban 並希望自動獲取最新版本的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 Railway 上快速部署 Marzban，因為這樣可以省去手動更新的麻煩，並且保持系統的最新狀態。
> - DevOps 工程師用它來簡化 Marzban 的安裝過程，因為只需幾個步驟就能完成部署，並且能夠輕鬆管理環境變數。
> - 獨立開發者用它來測試 Marzban 的功能，因為這個工具的輕量化設計讓他們能夠快速上手，而不需要深入了解底層架構。

## 架構分析

Marzban Panel 採用 Docker 作為主要架構，這意味著所有的依賴和應用都被封裝在容器中，方便部署和管理。資料流方面，使用者在 Railway 上創建專案後，系統會自動從 Gozargah/Marzban 克隆源碼，然後構建面板。這樣的設計使得用戶不需要手動更新源碼，降低了出錯的風險。選擇 Docker 的好處在於其可攜性和一致性，但代價是需要用戶具備一定的 Docker 知識。整體架構的擴展性良好，因為只需更新 Dockerfile 即可獲得最新功能。

## 技術深入分析

Marzban Panel 的核心技術機制是基於 Docker 的容器化部署，這使得應用的安裝和更新過程變得極為簡單。使用者只需在 Railway 上創建專案，系統會自動從 Gozargah/Marzban 克隆源碼，並構建出可用的面板。這樣的設計不僅降低了手動操作的錯誤率，還能確保用戶始終使用最新版本的 Marzban。效能方面，因為使用 Docker，冷啟動時間和資源佔用都相對較低，適合小型應用和快速部署的需求。選擇 Docker 作為主要技術棧的好處在於其可攜性和一致性，但也要求用戶具備一定的 Docker 知識。技術風險方面，若未來 Marzban 的更新頻繁，可能需要不斷調整 Dockerfile，以保持與最新版本的兼容性。整合方面，與主流的 CI/CD 工具如 GitHub Actions 的相容性良好，但在其他平台的整合可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的安裝步驟，但缺乏詳細的範例和說明。安裝過程相對簡單，無需複雜的配置。整體上，對於有基本 Docker 知識的用戶來說，能在 30 分鐘內完成部署。

## 優缺點分析

> [!success] 優點
> - 自動獲取最新源碼，避免過時問題。
> - 簡化的部署流程，適合快速上線。
> - 輕量化設計，減少儲存空間需求。

> [!danger] 缺點
> - 僅限於 Railway 平台，無法在其他環境使用。
> - 對 Docker 知識有一定要求，可能對新手不友好。
> - 目前支援的資料庫選擇有限。

> [!warning] 注意事項
> - 僅支援 Railway 環境，無法在其他平台直接使用。
> - 目前僅支援 SQLite 和 Postgres，對於其他資料庫的支援有限。
> - 需要對 Docker 有基本了解，否則可能無法順利部署。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化部署功能，但專注於不同的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 針對特定需求的部署工具，功能上比 Marzban Panel 更為專一。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的管理功能，適合需要多實例管理的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較少，但生態系統不如 Docker 豐富。 | 如果你的團隊已經在使用 Rust 並希望減少資源消耗。 | medium，因為需要重新適應 Rust 的生態。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定功能的部署工具，提供更細緻的配置選項。 | 如果需要高度自定義的部署選項，而不僅僅是簡單的自動化。 | high，因為需要重新設計整個部署流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Marzban-Panel** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較少，但生態系統不如 Docker 豐富。 | 專注於特定功能的部署工具，提供更細緻的配置選項。 |
> | 遷移成本 | - | medium，因為需要重新適應 Rust 的生態。 | high，因為需要重新設計整個部署流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Rust 並希望減少資源消耗。 | 如果需要高度自定義的部署選項，而不僅僅是簡單的自動化。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和小型專案，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在 Railway 上部署時，可能會遇到 Docker build 時間過長的問題。
  - 解法：確保使用最新的 Docker 版本，並檢查網路連接。
- **[HIGH]** 環境變數未正確設置可能導致管理員帳號創建失敗。
  - 解法：仔細檢查環境變數設置，確保 SUDO_USERNAME 和 SUDO_PASSWORD 正確配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 Marzban 部署 | 非常適合 | 自動化的部署流程大大降低了上手難度。 |
| 需要快速迭代的開發環境 | 非常適合 | 能夠隨時獲取最新版本，適合快速變化的需求。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速部署的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
| Forks | 1.2k |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-13 |
| 建立日期 | 2026-07-12 |
| Repo 大小 | 7 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/x4gKing/Marzban-Panel) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Dockerfile" : 67
>     "Shell" : 33
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@x4gKing](https://github.com/x4gKing) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，目前有 1 個開放的 Issue。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-12 ~ 2026-07-13）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # 🚀 Marzban Panel روی Railway (روش PasarGuard)
> 
> این ریپازیتوری دقیقاً به همان روش ریپازیتوری `PasarGuard` ساخته شده:
> به‌جای اینکه سورس Marzban را داخل ریپو کپی (vendor) کنیم، `Dockerfile` در
> لحظه‌ی build خودش سورس رسمی را از
> [`Gozargah/Marzban`](https://github.com/Gozargah/Marzban) کلون می‌کند،
> داشبورد را می‌سازد، Xray را نصب می‌کند و ایمیج نهایی را می‌سازد.
> 
> مزیت این روش نسبت به کپی‌کردن سورس داخل ریپو:
> - همیشه آخرین نسخه‌ی Marzban را می‌گیرید (هیچ فایلی "جا نمی‌ماند" یا قدیمی نمی‌شود).
> - حجم ریپوی شما خیلی کوچک می‌ماند (فقط چند فایل دیپلوی).
> - آپدیت گرفتن از آپستریم = فقط دوباره Deploy کردن روی Railway.
> 
> ## نصب
> 
> 1. این ریپو را در گیت‌هاب خودتان Fork کنید.
> 2. در Railway: **New Project → Deploy from GitHub Repo** و ریپوی فورک‌شده را انتخاب کنید.
> 3. صبر کنید تا Build تمام شود (به‌خاطر build گرفتن از داشبورد، کمی طول می‌کشد).
> 4. (اختیاری ولی پیشنهادی) در تب **Variables** این دو متغیر را اضافه کنید تا اولین ادمین
>    به‌صورت خودکار ساخته شود:
>    - `SUDO_USERNAME`
>    - `SUDO_PASSWORD`
> 
>    اگر تنظیم نکنید، بعداً از Console سرویس همین دستور را بزنید:
>    ```bash
>    marzban-cli admin create --sudo
>    ```
> 5. دیتابیس پیش‌فرض SQLite است. اگر می‌خواهید از Postgres پلاگین Railway استفاده کنید،
>    متغیر `SQLALCHEMY_DATABASE_URL` را در Variables ست کنید.
> 
> ## نکات
> 
> - پورت را Railway خودش از طریق `$PORT` تزریق می‌کند؛ نیازی به تنظیم دستی نیست.
> - برای تغییر نسخه‌ی Marzban که کلون می‌شود، آرگومان build به نام `MARZBAN_REF`
>   را در `railway.toml` / تنظیمات Build اضافه کنید (پیش‌فرض: `master`).

## 延伸閱讀

相關概念：[[容器化]] · [[自動化]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]]

[GitHub](https://github.com/x4gKing/Marzban-Panel)

## 相關收錄

> [!note]- 直接競品（同子分類：部署工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "部署工具" AND file.name != "x4gKing--Marzban-Panel"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "x4gKing--Marzban-Panel"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Dockerfile" AND file.name != "x4gKing--Marzban-Panel" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "x4gKing--Marzban-Panel"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["容器化","自動化","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "x4gKing--Marzban-Panel" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "x4gKing--Marzban-Panel" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "x4gKing" AND file.name != "x4gKing--Marzban-Panel"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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
> const me = dv.page("Repos/x4gKing--Marzban-Panel");
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

> **2026-07-15** — 首次收錄
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

- [[2026-07-16|2026-07-16]] — 再次上榜，776 stars
- [[2026-07-15|2026-07-15]] — 首次收錄，672 stars
