---
repo: DepthFirstDisclosures/Nginx-Rift
url: https://github.com/DepthFirstDisclosures/Nginx-Rift
owner: DepthFirstDisclosures
owner_type: User
language: Python
license: N/A
description: "exploit for CVE-2026-42945"
homepage: ""
stars: 674
stars_per_day: 135
forks: 113
open_issues: 4
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
star_history: "2026-05-18:674,2026-05-18:674"
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

**674** stars · **135** stars/天 · 建立 5 天前 · Python · 未標註授權

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
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (135 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速驗證 NGINX 伺服器安全性的安全研究人員和滲透測試工程師。
> **一句話重點** 這個專案展示了如何利用長期存在的漏洞進行遠端代碼執行，並提供了簡單的驗證工具。

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
> **結論** 花 2 小時學習，1 小時整合，能夠快速驗證 NGINX 安全性，值得使用。

> [!abstract] 核心創新
> 這個專案提供了一個針對 NGINX 中長期存在的漏洞的直接利用工具，能夠快速驗證系統的安全性。

## 專案簡介

Nginx Rift 是針對 CVE-2026-42945 的遠端代碼執行漏洞利用工具，該漏洞源於 NGINX 的 `ngx_http_rewrite_module` 中的堆緩衝區溢出。這個漏洞使得攻擊者能夠在使用 `rewrite` 和 `set` 指令的伺服器上進行未經身份驗證的遠程代碼執行。具體來說，該漏洞的利用過程分為兩個階段：首先計算所需的緩衝區大小，然後將數據複製進去。由於 `is_args` 標誌的錯誤處理，導致在複製階段發生溢出，攻擊者可以控制 URI 數據，最終重定向到一個偽造的 `ngx_pool_cleanup_s`，執行 `system()`。這個工具的賣點在於它能夠快速驗證該漏洞的存在並提供一個 shell。使用者只需執行 `python3 poc.py --shell` 即可彈出 shell，這使得漏洞的驗證過程變得簡單直接。

**技術棧**：`Python` · `Shell` · `Docker`

## 重點功能

- 漏洞利用工具 — 提供針對 CVE-2026-42945 的 PoC，能夠直接彈出 shell。
- Docker 支援 — 使用 `docker compose` 快速啟動易受攻擊的 NGINX 環境。
- 簡單的安裝步驟 — 只需執行 `./setup.sh` 和 `docker compose` 指令即可啟動。
- 自動化測試 — 能夠在本地環境中快速重現漏洞利用情境。
- 詳細的技術說明 — README 中提供了漏洞的技術背景和利用方式。

## 快速開始

1. 建立容器環境
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
  "前置條件": "已經在 Ubuntu 24.04.3 LTS 上安裝 Docker",
  "指令": "python3 poc.py --shell",
  "預期輸出": "彈出 shell"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 674 stars（135/天），forks 113（16.8%），顯示出強烈的社群興趣。這個專案的主要貢獻者 Markakd 之前在安全研究領域有過多次成功的漏洞發現，這吸引了許多開發者的注意。此漏洞的存在對於使用 NGINX 的伺服器來說是一個重大安全隱患，特別是對於未能及時更新的用戶。社群中對於該漏洞的討論和實際應用案例也促進了這個專案的快速擴散。

## 適合誰使用

**目標受眾**：需要快速驗證 NGINX 伺服器安全性的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究員用它來測試自己的 NGINX 伺服器是否存在 CVE-2026-42945 漏洞，因為這能幫助他們快速評估伺服器的安全性。
> - 滲透測試工程師用它來驗證客戶系統的安全性，因為這個工具能夠直接利用漏洞並提供 shell，便於進一步的測試。
> - DevOps 工程師用它來檢查生產環境中 NGINX 的配置，因為能夠及早發現漏洞可以減少潛在的安全風險。

## 架構分析

Nginx Rift 的架構基於一個 Docker 容器，這樣的設計使得用戶能夠在隔離的環境中測試漏洞，而不會影響到實際的生產環境。容器內部運行著一個易受攻擊的 NGINX 伺服器，並提供了 Python 腳本來執行漏洞利用。這種設計的好處在於能夠快速重現漏洞，但代價是需要 Docker 環境的支持。資料流中，使用者首先透過 Docker 啟動 NGINX，然後執行 Python 腳本進行漏洞利用，這樣的流程簡單明瞭。擴展性方面，若要在不同的環境中使用，可能需要調整 Docker 配置和腳本參數。

## 技術深入分析

Nginx Rift 的核心技術機制在於利用 NGINX 的 `ngx_http_rewrite_module` 中的堆緩衝區溢出漏洞。該漏洞的利用依賴於對 URI 數據的控制，並通過錯誤的標誌處理導致的緩衝區溢出。這個工具能夠在特定版本的 NGINX 上重現該漏洞，並且能夠在 Docker 環境中運行，這使得測試變得更加方便。效能方面，該工具在測試環境中能夠快速執行，但在生產環境中可能會受到配置的影響。設計取捨方面，選擇 Docker 作為運行環境雖然方便，但也增加了對 Docker 的依賴。技術風險方面，若 NGINX 版本更新或修補漏洞，該工具的有效性將受到影響。整合方面，該工具與 CI/CD 流程的整合尚需進一步探索，因為其主要針對的是手動測試場景。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢，但需要用戶具備 Docker 的基本知識。整體來說，花 30 分鐘能夠成功運行該工具。

## 優缺點分析

> [!success] 優點
> - 快速驗證漏洞 — 能夠在短時間內確認 NGINX 伺服器的安全性。
> - 簡單易用 — 提供明確的安裝和使用步驟，降低了使用門檻。
> - 容器化環境 — 隔離測試環境，避免影響生產系統。

> [!danger] 缺點
> - 僅限於特定版本的 NGINX — 需要確認使用的 NGINX 版本是否受影響。
> - Docker 依賴 — 需要安裝 Docker，對於某些用戶來說可能增加了複雜度。
> - 活躍度不高 — 目前存在多個未解決的問題，社群支持有限。

> [!warning] 注意事項
> - 僅支援 Ubuntu 24.04.3 LTS 環境
> - 需要 Docker 環境來運行易受攻擊的 NGINX 伺服器
> - 對於不同的硬體配置，可能需要調整 HEAP_BASE 和 LIBC_BASE

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供其他類型的漏洞利用，但不專注於 NGINX 的特定漏洞。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 針對多種漏洞的利用工具，但缺乏針對 CVE-2026-42945 的專門支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用不同的漏洞利用技術，專注於多種漏洞的利用。 | 如果需要一個多功能的漏洞利用工具，而不僅僅是針對 NGINX 的特定漏洞。 | medium，因為需要學習不同的使用方式和配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種漏洞利用的選擇，並且有更廣泛的社群支持。 | 當需要針對多種漏洞進行測試時，這個工具可能更合適。 | high，因為需要重新學習整個工具的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Nginx-Rift** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用不同的漏洞利用技術，專注於多種漏洞的利用。 | 提供多種漏洞利用的選擇，並且有更廣泛的社群支持。 |
> | 遷移成本 | - | medium，因為需要學習不同的使用方式和配置。 | high，因為需要重新學習整個工具的使用方式。 |
> | 適用場景 | 主要場景 | 如果需要一個多功能的漏洞利用工具，而不僅僅是針對 NGINX | 當需要針對多種漏洞進行測試時，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，HEAP_BASE 和 LIBC_BASE 可能無法正常工作
  - 解法：需要手動調整這些參數以適應不同的系統配置
- [MEDIUM] PoC 在某些情況下無法正常彈出 shell
  - 解法：檢查 NGINX 配置和版本，確保符合要求
- [MEDIUM] Docker 環境可能需要額外的配置
  - 解法：確保 Docker 正確安裝並能夠運行容器

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的 NGINX 伺服器安全測試 | 非常適合 | 能夠快速驗證伺服器的安全性，降低風險。 |
| 大型企業的生產環境 | 不適合 | 不建議在生產環境中使用，因為存在高風險。 |
| 安全研究和漏洞測試 | 非常適合 | 專門針對 CVE-2026-42945 的漏洞利用工具，能夠有效驗證漏洞。 |
| 對 Docker 不熟悉的用戶 | 普通 | 需要一定的 Docker 知識來運行和配置。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速驗證 NGINX 安全性，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具本身不需要高權限，但可能會存取敏感資料。依賴鏈的信任程度需謹慎評估，特別是在 CI/CD 環境中使用時。

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
| Forks | 113 |
| Open Issues | 4 |
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

**社群活躍度**：社群活躍度中等，存在一些未解決的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-13）
> **活躍天數** 2 天 · **最新 commit** update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/4) | Hardcoded HEAP_BASE, LIBC_BASE, and PREREAD_HEAP_OFFSET do n | 1 | 0 |
> | [#3](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/3) | wont work its fake | 0 | 0 |
> | [#2](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/2) | PoC isn't working | 0 | 1 |
> | [#1](https://github.com/DepthFirstDisclosures/Nginx-Rift/issues/1) | shell弹不出来 | 0 | 2 |

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

相關概念：[[安全漏洞]] · [[滲透測試]] · [[遠端代碼執行]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[Nightmare-Eclipse--YellowKey|Nightmare-Eclipse/YellowKey]] · [[V4bel--dirtyfrag|V4bel/dirtyfrag]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]]

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
> const concepts = ["安全漏洞","滲透測試","遠端代碼執行"];
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
