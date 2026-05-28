---
repo: DepthFirstDisclosures/Nginx-Rift
url: https://github.com/DepthFirstDisclosures/Nginx-Rift
owner: DepthFirstDisclosures
owner_type: User
language: Python
license: N/A
description: "exploit for CVE-2026-42945"
homepage: ""
stars: 815
stars_per_day: 54
forks: 150
open_issues: 8
created: 2026-05-12
pushed_at: 2026-05-13
first_seen: 2026-05-18
week: "2026-W21"
month: "2026-05"
category: "安全"
subcategory: "漏洞利用"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-18
use_case: "針對 CVE-2026-42945 的遠端代碼執行漏洞利用工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-25"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 7
readme_length: 2007
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-18"
star_history: "2026-05-18:674,2026-05-18:674,2026-05-19:711,2026-05-20:732,2026-05-21:753,2026-05-22:782,2026-05-23:792,2026-05-24:795,2026-05-25:803,2026-05-26:811,2026-05-27:813,2026-05-28:815"
tags:
  - github
  - "category/安全"
  - "lang/python"
aliases:
  - "Nginx-Rift"
  - "DepthFirstDisclosures/Nginx-Rift"
  - "針對 CVE-2026-42945 的遠端代碼執行漏洞利用工具。"
---

# Nginx-Rift

**815** stars · **54** stars/天 · 建立 15 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
> 針對 CVE-2026-42945 的遠端代碼執行漏洞利用工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (54 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 14 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 專注於 NGINX 安全測試的安全研究人員和滲透測試工程師。
> **一句話重點** 這個專案展示了如何利用長期存在的漏洞，並提供了簡單的工具來協助安全測試。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞利用" && p.file.name !== "DepthFirstDisclosures--Nginx-Rift" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 漏洞利用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到有效的安全測試工具，值得投入。

> [!abstract] 核心創新
> 提供了一個針對 NGINX 的特定漏洞的直接利用方式，簡化了安全測試流程。

## 專案簡介

Nginx-Rift 是一個針對 CVE-2026-42945 的遠端代碼執行漏洞利用工具，這個漏洞源於 NGINX 的 `ngx_http_rewrite_module`，允許未經身份驗證的攻擊者執行任意代碼。該漏洞利用了 NGINX 的兩階段處理過程：第一階段計算所需的緩衝區大小，第二階段將資料複製到該緩衝區。當 `rewrite` 替換中包含 `?` 時，`is_args` 標誌會影響資料的處理，導致在複製過程中緩衝區溢出。這個工具的賣點在於其簡單的使用方式，僅需執行 `python3 poc.py --shell` 即可觸發漏洞。使用者需要在 Ubuntu 24.04.3 LTS 上進行測試，並透過 Docker 環境啟動易受攻擊的 NGINX 伺服器。

這個專案的技術實作依賴於 Python 和 Shell，並且在 Docker 環境中運行，這使得其部署和測試相對簡單。相較於其他漏洞利用工具，Nginx-Rift 專注於特定的 NGINX 版本，並且提供了直接的 shell 獲取功能，這在安全測試中非常有用。使用者在實際操作中可能會遇到與 ASLR 繞過相關的問題，這需要額外的注意和調整。這個專案目前處於活躍開發中，社群反饋也顯示出一些使用上的挑戰，特別是在不同版本的 NGINX 上的兼容性問題。整體來看，這是一個針對特定漏洞的專業工具，適合安全研究人員和滲透測試專家使用。

**技術棧**：`Python` · `Shell` · `Docker`

## 重點功能

- 遠端代碼執行 — 利用 CVE-2026-42945 漏洞，實現未經身份驗證的 RCE。
- 簡單的使用方式 — 只需執行 `python3 poc.py --shell` 即可獲取 shell。
- Docker 支援 — 提供 Docker 環境，方便快速部署和測試。
- 針對特定版本 — 專注於 NGINX 的特定版本，確保利用的有效性。
- 社群支持 — 活躍的社群反饋，持續改進和更新。

## 快速開始

1. 建立 Docker 環境
```bash
./setup.sh
```
2. 啟動易受攻擊的 NGINX 伺服器
```bash
docker compose -f env/docker-compose.yml up
```
3. 執行漏洞利用腳本
```bash
python3 poc.py --shell
```

## 程式碼範例

```python
{
  "前置條件": "在 Ubuntu 24.04.3 LTS 上，並已啟動 NGINX 伺服器。",
  "指令": "python3 poc.py --shell",
  "預期輸出": "獲取到的 shell 介面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 815 stars（54/天），forks 150（18.4%），顯示出強烈的社群關注。這個專案的主要貢獻者 Markakd 在安全領域有一定的經驗，並且這個工具解決了 NGINX 中一個長期存在的漏洞，提供了簡單的利用方式。社群中的討論和問題反映出使用者在實際環境中遇到的挑戰，這促進了更多的關注和使用。隨著對安全漏洞的重視，這類工具的需求也在增加。

## 適合誰使用

**目標受眾**：專注於 NGINX 安全測試的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究員用它來測試 NGINX 伺服器的安全性，因為它提供了針對 CVE-2026-42945 的直接利用方式。
> - 滲透測試工程師用它來評估客戶的 NGINX 部署，因為能快速驗證是否存在此漏洞，並提供修補建議。
> - 開發人員用它來驗證自家應用的安全性，因為能夠在本地環境中模擬攻擊情境，進行安全測試。

## 架構分析

Nginx-Rift 的架構設計是基於 Docker 容器化，這使得環境的搭建和測試變得簡單且一致。使用者首先透過 `setup.sh` 建立 Docker 環境，然後使用 Docker Compose 啟動一個易受攻擊的 NGINX 伺服器。這樣的設計使得使用者能夠快速重現漏洞環境，進行測試和驗證。

資料流方面，漏洞利用腳本 `poc.py` 直接與 NGINX 伺服器進行交互，利用其內部的弱點來獲取 shell。選擇 Docker 的好處在於其輕量級和可攜性，但代價是需要使用者具備一定的 Docker 知識。整體來看，這個架構適合快速迭代和測試，但在實際環境中可能需要更多的配置和調整。

## 技術深入分析

Nginx-Rift 的核心技術機制是利用 NGINX 的內部邏輯漏洞，這涉及到兩階段的資料處理過程。首先，當 NGINX 處理 `rewrite` 指令時，會計算所需的緩衝區大小，然後在第二階段將資料複製到該緩衝區。這個過程中的 `is_args` 標誌影響了資料的處理，導致了緩衝區溢出。該工具的效能在於能夠快速觸發漏洞，並獲取 shell，這在安全測試中非常有價值。

設計上選擇了 Python 和 Shell 作為開發語言，這使得工具易於使用和擴展，但也意味著需要使用者具備相應的編程基礎。這個專案的依賴相對較少，主要依賴於 Docker 環境，這降低了使用的門檻。技術風險方面，使用者在不同版本的 NGINX 上可能會遇到兼容性問題，這需要進一步的測試和調整。整合方面，這個工具可以輕鬆地與現有的安全測試流程結合，但在 CI/CD pipeline 中的使用仍需謹慎考量。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用指導，安裝過程相對順暢，但需要使用者具備 Docker 的基本知識。文件中有簡單的範例，能幫助新手快速上手。整體來說，花 30 分鐘可以順利運行起來。

## 優缺點分析

> [!success] 優點
> - 快速部署 — Docker 環境使得測試變得簡單。
> - 針對性強 — 專注於特定漏洞，提供有效的利用方式。
> - 社群活躍 — 有助於快速解決使用者問題。

> [!danger] 缺點
> - 版本依賴 — 僅適用於特定版本的 NGINX。
> - 需要安全知識 — 使用者需具備一定的安全背景知識。
> - 社群支持有限 — 雖然活躍，但仍有許多未解決的問題。

> [!warning] 注意事項
> - 僅支援特定版本的 NGINX，其他版本可能無法正常工作。
> - 需要在特定的環境中進行測試，可能不適用於所有作業系統。
> - 對於 ASLR 繞過的需求，使用者需具備相應的知識和經驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於其他漏洞的利用，可能不針對 NGINX，但提供了類似的利用框架。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種漏洞利用工具，涵蓋範圍更廣，但不專注於特定的 NGINX 漏洞。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 針對不同的漏洞進行利用，技術路線與本專案不同，適用於其他環境。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用不同的漏洞利用技術，專注於多種漏洞的利用。 | 如果需要一個多功能的漏洞利用工具，可以考慮這個選擇。 | medium，因為需要重新學習不同的使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種漏洞利用工具，涵蓋範圍更廣，但不專注於特定的 NGINX 漏洞。 | 如果需要針對多個漏洞進行測試，這個工具會更合適。 | low，因為使用方式相似。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於特定的漏洞利用，技術路線與本專案不同。 | 如果你的環境不支持 NGINX，這個工具可能更適合。 | high，因為需要重新適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Nginx-Rift** | **agent-sprite-forge** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用不同的漏洞利用技術，專注於多種漏洞的利用。 | 提供了多種漏洞利用工具，涵蓋範圍更廣，但不專注於特定的 NGINX 漏洞。 | 專注於特定的漏洞利用，技術路線與本專案不同。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的使用方式。 | low，因為使用方式相似。 | high，因為需要重新適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果需要一個多功能的漏洞利用工具，可以考慮這個選擇。 | 如果需要針對多個漏洞進行測試，這個工具會更合適。 | 如果你的環境不支持 NGINX，這個工具可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合在測試環境中使用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 不同版本的 NGINX 可能無法正常工作，特別是版本不匹配的情況。
  - 解法：確保使用與工具相容的 NGINX 版本。
- [MEDIUM] ASLR 繞過的需求可能會導致利用失敗。
  - 解法：使用者需具備相應的安全知識來調整配置。
- [MEDIUM] Docker 環境的配置可能會出現問題，特別是在不同作業系統上。
  - 解法：仔細檢查 Docker 設定，確保環境一致。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的 NGINX 伺服器安全測試 | 非常適合 | 專注於特定漏洞，能有效評估安全性。 |
| 大型企業的多伺服器環境 | 普通 | 可能需要額外的配置和調整以適應不同版本。 |
| 開發人員的本地測試環境 | 適合 | 簡單的部署和使用方式，適合快速測試。 |
| 對於不熟悉 Docker 的使用者 | 不適合 | 需要一定的 Docker 知識才能順利運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到有效的安全測試工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，但使用時需注意環境的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Nginx-Rift 最常與 Docker 和 NGINX 搭配使用，主要在安全測試的開發和測試環節。使用者可以在 Docker 環境中啟動 NGINX 伺服器，然後使用該工具進行漏洞測試。與主流 CI 工具（如 GitHub Actions）整合時，需注意 Docker 的配置和環境一致性。整合的摩擦點主要在於不同作業系統上的 Docker 環境配置問題，這可能會影響使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 NGINX 出現 CVE-2026-42945 之前，許多安全測試工具無法針對特定的 NGINX 漏洞進行有效測試。隨著對安全漏洞的重視，這類專案的需求逐漸增加。此工具的出現使得安全測試變得更加簡單和高效，並且能夠針對特定漏洞進行深入分析。

未來，隨著更多漏洞的發現，這類工具可能會進一步演化，提供更全面的安全測試解決方案。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型安全團隊

**前置技能**：
- 熟悉 Docker
- 了解 NGINX 配置
- 具備基本的安全知識

> [!tip] 導入策略
> 第一週：在個人環境中試用。第二週：在小型專案中進行測試。第三週：撰寫使用文檔和最佳實踐。第四週：在更大的專案中進行實施。

**成功指標**：成功測試到 NGINX 的安全漏洞，並提供修補建議。

> [!warning] 退出計畫
> 若需退出，所有設定均可轉換為標準 Docker 配置，方便切換到其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
| Forks | 150 |
| Open Issues | 8 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-13 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 7 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DepthFirstDisclosures/Nginx-Rift) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "Shell" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Markakd](https://github.com/Markakd) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，持續有問題被提出，但解決率低。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-13）
> **活躍天數** 2 天 · **最新 commit** update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/4) | Hardcoded HEAP_BASE, LIBC_BASE, and PREREAD_HEAP_OFFSET do n | 2 | 1 |
> | [#7](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/7) | Might be worth making the need for an ASLR bypass more visib | 0 | 1 |
> | [#6](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/6) | poc.py isn't working, my Nginx version: 1.26.3, please see m | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NGINX Rift
> 
> RCE Proof of concept for **CVE-2026-42945**, a critical heap buffer overflow in NGINX's `ngx_http_rewrite_module` introduced in 2008. The bug enables unauthenticated remote code execution against servers using `rewrite` and `set` directives.
> 
> This vulnerability — along with three other memory corruption issues (CVE-2026-42946, CVE-2026-40701, CVE-2026-42934) — was autonomously discovered by [depthfirst](https://depthfirst.com)'s security analysis system after a single click of onboarding the NGINX source.
> 
> > Want to find issues like this in your own code? Try the same system at ****.
> 
> ## The Bug (TL;DR)
> 
> NGINX's script engine uses a two-pass process: first compute the required buffer size, then copy data in. The `is_args` flag is set on the main engine when a `rewrite` replacement contains `?`, but the length-calculation pass runs on a freshly zeroed sub-engine. So:
> 
> - **Length pass** sees `is_args = 0` → returns raw capture length.
> - **Copy pass** sees `is_args = 1` → calls `ngx_escape_uri` with `NGX_ESCAPE_ARGS`, expanding each escapable byte to 3 bytes.
> 
> The copy overflows the undersized heap buffer with attacker-controlled URI data. Exploitation uses cross-request heap feng shui to corrupt an adjacent `ngx_pool_t`'s `cleanup` pointer (sprayed via POST bodies, since URI bytes can't contain null bytes), redirecting it to a fake `ngx_pool_cleanup_s` invoking `system()` on pool destruction.
> 
> Read more about this bug in our [technical write-up](https://depthfirst.com/research/nginx-rift-achieving-nginx-rce-via-an-18-year-old-vulnerability).
> 
> ## Affected & Fixed Versions
> 
> | Product | Affected | Fixed in |
> | --- | --- | --- |
> | NGINX Open Source | 0.6.27 – 1.30.0 | 1.31.0, 1.30.1 |
> | NGINX Plus | R32 – R36 | R36 P4, R35 P2, R32 P6 |
> 
> Full vendor advisory: 
> 
> ## Usage
> 
> Tested on Ubuntu 24.04.3 LTS.
> 
> 1. `./setup.sh` — build the container.
> 2. `docker compose -f env/docker-compose.yml up` — start the vulnerable NGINX server.
> 3. `python3 poc.py --shell` — pop a shell.

## 延伸閱讀

相關概念：[[安全漏洞]] · [[遠端代碼執行]] · [[滲透測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[Nightmare-Eclipse--YellowKey|Nightmare-Eclipse/YellowKey]] · [[V4bel--dirtyfrag|V4bel/dirtyfrag]]

[GitHub](https://github.com/DepthFirstDisclosures/Nginx-Rift)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞利用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞利用" AND file.name != "DepthFirstDisclosures--Nginx-Rift"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "DepthFirstDisclosures--Nginx-Rift"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "DepthFirstDisclosures--Nginx-Rift" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "DepthFirstDisclosures--Nginx-Rift"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","遠端代碼執行","滲透測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DepthFirstDisclosures--Nginx-Rift" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DepthFirstDisclosures--Nginx-Rift" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DepthFirstDisclosures" AND file.name != "DepthFirstDisclosures--Nginx-Rift"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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
> const me = dv.page("Repos/DepthFirstDisclosures--Nginx-Rift");
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

> **2026-05-18** — 首次收錄
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

- [[2026-05-18|2026-05-18]] — 首次收錄，674 stars
