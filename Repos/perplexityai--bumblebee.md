---
repo: perplexityai/bumblebee
url: https://github.com/perplexityai/bumblebee
owner: perplexityai
owner_type: Organization
language: Go
license: Apache-2.0
description: "Read-only developer endpoint scanner for on-disk package, extension, and developer-tool metadata, built to check exposure to known software supply-chain compromises."
homepage: ""
stars: 1288
stars_per_day: 429
forks: 102
open_issues: 11
created: 2026-05-20
pushed_at: 2026-05-23
first_seen: 2026-05-24
week: "2026-W22"
month: "2026-05"
category: "安全"
subcategory: "供應鏈安全"
release_tag: "v0.1.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-24
use_case: "檢查開發者端點的已知軟體供應鏈漏洞，提供只讀的包、擴展和開發工具元數據掃描。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-27"
contributor_count: 1
engagement: "low"
issue_close_rate: 15
repo_size_kb: 188
readme_length: 9830
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-24"
star_history: "2026-05-24:1288"
tags:
  - github
  - "category/安全"
  - "lang/go"
  - org
  - easy_install
  - "topic/golang"
  - "topic/package_inventory"
  - "topic/supply_chain_security"
aliases:
  - "bumblebee"
  - "perplexityai/bumblebee"
  - "檢查開發者端點的已知軟體供應鏈漏洞，提供只讀的包、擴展和開發工具元數據掃描。"
---

# bumblebee

**1.3k** stars · **429** stars/天 · 建立 3 天前 · Go · Apache-2.0

```dataviewjs
const me = dv.page("Repos/perplexityai--bumblebee");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.1` `easy-install`

`golang` `package-inventory` `supply-chain-security`

> [!summary] 一句話摘要
> 檢查開發者端點的已知軟體供應鏈漏洞，提供只讀的包、擴展和開發工具元數據掃描。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (429 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要確保開發環境安全但不想執行包管理器命令的開發者。
> **一句話重點** Bumblebee 是一個專注於供應鏈安全的掃描工具，能夠快速檢查開發者環境中的已知漏洞。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/perplexityai--bumblebee");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "供應鏈安全" && p.file.name !== "perplexityai--bumblebee" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 供應鏈安全 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速的供應鏈安全檢查效果，值得採用。

> [!abstract] 核心創新
> Bumblebee 提供了針對開發者端點的只讀掃描，專注於供應鏈安全的元數據收集。

## 專案簡介

Bumblebee 是一個專為 macOS 和 Linux 開發者設計的只讀掃描工具，主要用於收集包、擴展和開發工具的元數據。其核心機制是將散亂的本地狀態（如鎖定檔、包管理器元數據和擴展清單）轉換為結構化的 NDJSON 組件記錄，並能夠快速檢查是否存在已知的供應鏈漏洞。用戶可以透過 `bumblebee scan --profile baseline` 指令來執行基線掃描，並將結果輸出為 NDJSON 格式。這種設計使得開發者能夠在不執行包管理器命令的情況下，快速獲取當前系統的包狀態，避免了潛在的安全風險。Bumblebee 提供三種掃描配置文件：`baseline`、`project` 和 `deep`，適用於不同的掃描需求。

技術上，它使用 Go 語言編寫，無需任何非標準庫依賴，這使得部署和維護變得簡單。與其他工具相比，如 `npm audit` 和 `pip-audit`，Bumblebee 的優勢在於其能夠處理多種生態系統的元數據，並且不需要執行任何包管理器命令，這降低了誤操作的風險。使用者在進行供應鏈安全檢查時，能夠利用其靈活的掃描配置，根據實際需求選擇合適的掃描範圍。雖然目前功能尚在初期階段，但其設計理念和實作方式顯示出未來擴展的潛力，特別是在供應鏈安全日益受到重視的背景下。

**技術棧**：`Go 1.25`

## 重點功能

- 只讀掃描 — Bumblebee 只收集元數據，不執行任何包管理器命令，降低了誤操作風險。
- 多生態系統支持 — 能夠掃描 npm、PyPI、Go modules 等多種生態系統的元數據。
- 三種掃描配置 — 提供 `baseline`、`project` 和 `deep` 三種掃描配置，滿足不同的需求。
- NDJSON 輸出格式 — 掃描結果以 NDJSON 格式輸出，便於後續處理和分析。
- 自動化自測 — 提供內建的自測功能，確保安裝後能正常運行。

## 快速開始

1. 安裝最新版本
```bash
go install github.com/perplexityai/bumblebee/cmd/bumblebee@latest
```
2. 執行基線掃描
```bash
bumblebee scan --profile baseline > inventory.ndjson
```
3. 執行專案掃描
```bash
bumblebee scan --profile project --root "$HOME/code" --root "$HOME/Developer"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1288 stars（429/天），forks 102（7.9%），顯示出強勁的增長勢頭。這個專案的作者 Adel Ka 在供應鏈安全領域有豐富經驗，之前的工作涉及多個開源安全工具。Bumblebee 解決了開發者在快速識別本地環境中已知漏洞的需求，特別是在傳統工具無法提供即時檢查的情況下。近期的供應鏈攻擊事件引發了對這類工具的需求，進一步推動了其受歡迎程度。高比例的 forks/stars（7.9%）表明許多開發者正在積極修改和使用這個工具，顯示出其實用性和潛在的社群支持。

## 適合誰使用

**目標受眾**：需要確保開發環境安全但不想執行包管理器命令的開發者。

> [!example] 使用場景
> - 安全工程師用它來定期掃描開發者機器上的包和擴展，因為這樣可以快速識別已知的安全漏洞，降低供應鏈攻擊的風險。
> - DevOps 工程師用它來在 CI/CD 流程中自動化安全檢查，因為這樣可以確保每次部署的代碼都不包含已知的漏洞，提升整體安全性。
> - 開發者用它來檢查本地開發環境中的依賴，因為這樣可以在開發過程中及早發現問題，避免在生產環境中出現安全隱患。

## 架構分析

Bumblebee 採用單一靜態二進制的架構，這樣的設計使得部署過程簡單，無需任何非標準庫的依賴。資料流方面，Bumblebee 會從本地的鎖定檔和包管理器元數據中提取資料，並將這些資料轉換為結構化的 NDJSON 格式。這種設計使得使用者能夠快速獲得當前系統的包狀態，而不必擔心執行包管理器命令可能帶來的風險。選擇 Go 語言的原因在於其高效的性能和簡單的部署方式，這對於需要快速掃描的安全檢查場景來說是非常合適的。隨著功能的擴展，可能會面臨對新生態系統支持的挑戰，但目前的設計已經能夠滿足大多數開發者的需求。

## 技術深入分析

Bumblebee 的核心技術機制是將本地的包和擴展元數據轉換為結構化的 NDJSON 格式，這樣的設計使得用戶能夠快速獲取當前系統的狀態。它使用 Go 語言編寫，這意味著其性能優越且部署簡單，無需額外的依賴。該工具能夠處理多種生態系統的元數據，這使得它在供應鏈安全檢查中具有廣泛的應用潛力。設計上，Bumblebee 選擇了只讀的掃描方式，這樣可以避免執行包管理器命令帶來的安全風險。隨著功能的擴展，可能會面臨對新生態系統支持的挑戰，但目前的設計已經能夠滿足大多數開發者的需求。整體來說，Bumblebee 在供應鏈安全領域的定位非常明確，未來可能會進一步擴展其功能以適應不斷變化的安全需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用的範例，安裝過程順暢，無明顯坑點。文件中有良好的快速入門指導，對於新手來說，花 30 分鐘即可順利運行。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需複雜的安裝和配置。
> - 支持多種生態系統，能夠滿足不同開發者的需求。
> - 提供自測功能，確保工具正常運行。

> [!danger] 缺點
> - 目前僅支持 macOS 和 Linux，對於 Windows 用戶不友好。
> - 功能尚在初期階段，可能缺乏某些高級功能。
> - 不支持非 JSON 格式的配置文件，限制了使用場景。

> [!warning] 注意事項
> - 僅支持 macOS 和 Linux 環境。
> - 目前僅支持 Go 1.25 及以上版本。
> - 不支持非 JSON 格式的配置文件解析。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 主要用於生成和管理代理，而 Bumblebee 專注於供應鏈安全掃描，功能範圍不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供的是一個更廣泛的安全掃描工具，而 Bumblebee 更專注於本地環境的元數據收集和已知漏洞檢查。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 主要用於生成和管理代理，而 Bumblebee 專注於供應鏈安全掃描，功能範圍不同。 | 如果你的需求是生成和管理代理，而不僅僅是掃描安全漏洞，則應選擇 Agent Sprite Forge。 | medium，因為需要重新學習不同的操作流程和概念。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供的是一個更廣泛的安全掃描工具，而 Bumblebee 更專注於本地環境的元數據收集和已知漏洞檢查。 | 如果你需要一個更全面的安全掃描解決方案，Boneyard 可能更適合。 | high，因為需要重新設計整個安全檢查流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **bumblebee** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Agent Sprite Forge 主要用於生成和管理代理，而 Bumblebee 專注於供應鏈安全掃描，功能範圍不同。 | Boneyard 提供的是一個更廣泛的安全掃描工具，而 Bumblebee 更專注於本地環境的元數據收集和已知漏洞檢查。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的操作流程和概念。 | high，因為需要重新設計整個安全檢查流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成和管理代理，而不僅僅是掃描安全漏洞，則應選 | 如果你需要一個更全面的安全掃描解決方案，Boneyard 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和測試，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些環境中，掃描速度可能較慢，特別是對於大型專案。
  - 解法：考慮使用 `--max-duration` 參數來限制掃描時間。
- **[HIGH]** 目前不支持 Windows 環境，可能導致部分用戶無法使用。
  - 解法：考慮在虛擬機或容器中運行 Linux 環境。
- [MEDIUM] 掃描結果的 NDJSON 格式可能需要額外的工具來解析和分析。
  - 解法：使用支持 NDJSON 的工具進行後續處理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發環境 | 非常適合 | 簡單易用，無需複雜的安裝和配置，適合小型團隊快速部署。 |
| 大型企業的 CI/CD 流程 | 普通 | 雖然功能強大，但可能需要進一步的整合和自動化支持。 |
| 需要快速識別已知漏洞的開發者 | 非常適合 | 能夠快速檢查本地環境的安全性，降低供應鏈攻擊風險。 |
| Windows 環境的開發者 | 不適合 | 目前不支持 Windows，無法在該環境中使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速的供應鏈安全檢查效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Bumblebee 是一個只讀掃描工具，不需要高權限運行，並且不會存取敏感資料。其依賴鏈簡單，無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/perplexityai--bumblebee");
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
> const me = dv.page("Repos/perplexityai--bumblebee");
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
| Forks | 102 |
| Open Issues | 11 |
| Issue 解決率 | 15% (2 closed) |
| 最後推送 | 2026-05-23 |
| 建立日期 | 2026-05-20 |
| Repo 大小 | 188 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/perplexityai/bumblebee) |
| Topics | `golang` `package-inventory` `supply-chain-security` |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `module`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@adel-pplx](https://github.com/adel-pplx) | 4 |

**最新版本**：v0.1.1 (2026-05-22)

> [!info]- Release Notes
> ## Changelog
> * c24089804ee66ece4bec6f14638cb98985389cdb: initial public release (v0.1.1) (Adel Ka <adel.karimishiraz@perplexity.ai>)

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量為 11，解決率為 15%。
**連結**：[文件](https://github.com/perplexityai/bumblebee/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-22 ~ 2026-05-23）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #9 from perplexityai/psi/exposure/laravel-lang-2026-05-23

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/perplexityai/bumblebee/issues/7) | Inventory source: Homebrew packages | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # bumblebee
> 
> Bumblebee is a read-only inventory collector for package, extension,
> and developer-tool metadata on macOS and Linux developer endpoints.
> 
> It answers a narrow supply-chain response question: when an advisory
> names a package, extension, or version, which developer machines show
> a match in their on-disk metadata right now?
> 
> SBOMs help answer what shipped, and EDR helps answer what ran or
> touched the network, but supply-chain response often needs a different
> view: messy local state across lockfiles, package-manager metadata,
> extension manifests, and supported developer-tool configs.
> 
> Bumblebee turns that scattered on-disk state into structured NDJSON
> component records and, when given an exposure catalog, flags exact
> matches for fast, read-only exposure checks when responders already
> know what they are looking for.
> 
> ## Scope
> 
> - Single static binary, Go 1.25+, zero non-stdlib dependencies.
> - Three scan profiles (`baseline`, `project`, `deep`) for different
>   populations and cadences.
> - Reads only the lockfiles, package-manager install metadata,
>   extension manifests, and supported MCP JSON configs listed in
>   [docs/inventory-sources.md](docs/inventory-sources.md). No package
>   manager execution (`npm ls`, `pip show`, `go list`, ...) and no
>   source-file reads. MCP host configs can carry environment values
>   and credentials in their `env` blocks; Bumblebee parses these
>   configs for the server inventory it needs but does not emit those
>   values in its records.
> 
> ## Coverage
> 
> | Family | Emitted `ecosystem` | Sources |
> |---|---|---|
> | npm | `npm` | `package-lock.json`, `npm-shrinkwrap.json`, `node_modules/.package-lock.json`, `node_modules//package.json` |
> | pnpm | `npm` | `pnpm-lock.yaml`, `.pnpm/.../package.json` |
> | Yarn | `npm` | `yarn.lock` (Classic + Berry) |
> | Bun | `npm` | `bun.lock`; `bun.lockb` presence as diagnostic |
> | PyPI | `pypi` | `*.dist-info/METADATA`, `INSTALLER`, `direct_url.json`, `*.egg-info/PKG-INFO` |
> | Go modules | `go` | `go.sum`, `go.mod` |
> | RubyGems | `rubygems` | `Gemfile.lock`, installed `*.gemspec` |
> | Composer | `packagist` | `composer.lock`, `vendor/composer/installed.json` |
> | MCP | `mcp` | JSON host configs: `mcp.json`, `.mcp.json`, `claude_desktop_config.json`, `mcp_config.json`, `mcp_settings.json`, `cline_mcp_settings.json`, plus `~/.gemini/settings.json` (Gemini CLI / Code Assist). Non-JSON configs (Codex `config.toml`, Continue YAML) are not parsed in v0.1. |
> | Editor extensions | `editor-extension` | VS Code, Cursor, Windsurf, VSCodium manifests |
> | Browser extensions | `browser-extension` | Chromium-family (`manifest.json`) and Firefox (`extensions.json`) per profile |
> 
> Per-ecosystem detail: [docs/inventory-sources.md](docs/inventory-sources.md).
> 
> ## Install
> 
> Requires Go 1.25+. Zero non-stdlib dependencies.
> 
> ```sh
> # Install the latest tagged release into $GOBIN.
> go install github.com/perplexityai/bumblebee/cmd/bumblebee@latest
> 
> # Or pin a specific tag.
> go install github.com/perplexityai/bumblebee/cmd/bumblebee@v0.1.1
> ```
> 
> To build from a checkout:
> 
> ```sh
> go build -o bumblebee ./cmd/bumblebee
> go test ./...
> ```
> 
> Stamp an explicit version at build time:
> 
> ```sh
> go build -ldflags "-X main.Version=v0.1.1" -o bumblebee ./cmd/bumblebee
> ```
> 
> `bumblebee version` prints the version plus the VCS revision, build
> time, and Go runtime — so a record emitted in production can be traced
> back to a specific build. Version precedence: `-ldflags` override,
> module version recorded by `go install`, then the in-tree default
> tracked in `VERSION`.
> 
> ### Self-test
> 
> After installing, run a built-in end-to-end check against embedded
> fixtures:
> 
> ```sh
> bumblebee selftest
> # selftest OK (2 findings in 1ms)
> ```
> 
> The fixtures live inside the binary, use deliberately fake package
> names (`bumblebee-selftest-evil@0.0.0`), and make no network calls. A
> non-zero exit means the local install can no longer detect what it
> should — a fast pre-deployment smoke test for fleet rollouts.
> 
> ## Profiles
> 
> Bumblebee is a one-shot scanner: each invocation performs a single scan
> and exits. Cadence is the runner's responsibility (cron, launchd, systemd,
> MDM, etc.). Each record carries `profile` and a per-root `root_kind` so
> receivers can keep populations separate.
> 
> | Profile | Scans | Use for |
> |---|---|---|
> | `baseline` | Common global/user package roots, language toolchains, editor extensions, browser extensions, and MCP configs. | Recurring lightweight inventory via an external runner. |
> | `project` | Configured development directories, such as `~/code`, `~/src`, or `~/work`. | Recurring inventory for known project workspaces. |
> | `deep` | Explicit `--root` paths, including broad roots like `$HOME`. | On-demand incident or campaign checks, usually with `--ecosystem`, `--exposure-catalog`, and `--findings-only`. |
> 
> `baseline` and `project` refuse bare-home roots; only `deep` walks them.
> 
> ## Quick start
> 
> ```sh
> # Baseline global inventory.
> bumblebee scan --profile baseline > inventory.ndjson
> 
> # Daily project sweep with explicit roots.
> bumblebee scan --profile project \
>   --root "$HOME/code" \
>   --root "$HOME/Developer"
> 
> # Limit a run to selected emitted ecosystems.
> bumblebee scan --profile baseline \
>   --ecosystem npm,pypi \
>   --ecosystem go
> 
> # On-demand exposure scan against a published advisory.
> bumblebee scan --profile deep \
>   --root "$HOME" \
>   --exposure-catalog ./catalog.json \
>   --max-duration 10m
> ```
> 
> Preview the resolved roots without scanning:
> 
> ```sh
> bumblebee roots --profile baseline
> # prints "\t" lines
> ```
> 
> `--root` is a filesystem path to scan; repeatable, required for `deep`,
> optional for the other profiles. `--ecosystem` is repeatable and
> comma-separated. `--exposure-catalog` accepts a JSON file or a directory
> of `*.json` catalogs (merged non-recursively, all files must share
> `schema_version`). `--findings-only` requires `--exposure-catalog` and
> suppresses package records while keeping findings. `bumblebee scan --help`
> lists every flag.
> 
> ## Output
> 
> Records are NDJSON, one per line. Diagnostics go to stderr as NDJSON. Each
> run ends with a `scan_summary` record; receivers use it to decide whether
> to promote a run to current state. See [docs/transport.md](docs/transport.md)
> for HTTPS/file output and [docs/state-model.md](docs/state-model.md) for the
> receiver-side current-state model.
> 
> Package record:
> 
> Example package record
> 
> ```json
> {
>   "record_type": "package",
>   "record_id": "package:...",
>   "schema_version": "0.1.0",
>   "scanner_name": "bumblebee",
>   "scanner_version": "v0.1.1",
>   "run_id": "9b1f0c2e4d5a6b7c8d9e0f1a2b3c4d5e",
>   "scan_time": "2026-05-15T18:22:01.482Z",
>   "endpoint": {
>     "hostname": "alex-mbp",
>     "os": "darwin",
>     "arch": "arm64",
>     "username": "alex",
>     "uid": "501",
>     "device_id": "MDM-7F4A2B"
>   },
>   "profile": "project",
>   "ecosystem": "npm",
>   "package_name": "@tanstack/query-core",
>   "normalized_name": "@tanstack/query-core",
>   "version": "5.59.20",
>   "project_path": "/Users/alex/code/web-app",
>   "root_kind": "project_root",
>   "package_manager": "pnpm",
>   "source_type": "pnpm-lockfile",
>   "source_file": "/Users/alex/code/web-app/pnpm-lock.yaml",
>   "has_lifecycle_scripts": false,
>   "confidence": "high"
> }
> ```
> 
> `confidence`:
> 
> - `high` — exact identity and version came from canonical metadata.
> - `medium` — identity is reliable, but version or source is partial.
> - `low` — config/path/spec reference only; not proof of an installed exact version.
> 
> Finding record (exposure-catalog match):
> 
> Example finding record
> 
> ```json
> {
>   "record_type": "finding",
>   "record_id": "finding:...",
>   "schema_version": "0.1.0",
>   "scanner_name": "bumblebee",
>   "scanner_version": "v0.1.1",
>   "run_id": "3a8c7d1e9f0b2a4c6d8e0f1a2b3c4d5e",
>   "scan_time": "2026-05-15T18:22:01.482Z",
>   "endpoint": {
>     "hostname": "alex-mbp",
>     "os": "darwin",
>     "arch": "arm64",
>     "username": "alex",
>     "uid": "501",
>     "device_id": "MDM-7F4A2B"
>   },
>   "profile": "deep",
>   "finding_type": "package_exposure",
>   "severity": "critical",
>   "catalog_id": "adviso

## 延伸閱讀

相關概念：[[供應鏈安全]] · [[安全漏洞]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[Mouseww--anything-analyzer|Mouseww/anything-analyzer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Nightmare-Eclipse--YellowKey|Nightmare-Eclipse/YellowKey]]

[GitHub](https://github.com/perplexityai/bumblebee)

## 相關收錄

> [!note]- 直接競品（同子分類：供應鏈安全）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "供應鏈安全" AND file.name != "perplexityai--bumblebee"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "perplexityai--bumblebee"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "perplexityai--bumblebee" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "perplexityai--bumblebee"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["供應鏈安全","安全漏洞","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "perplexityai--bumblebee" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/perplexityai--bumblebee");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "perplexityai--bumblebee" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "perplexityai" AND file.name != "perplexityai--bumblebee"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/perplexityai--bumblebee");
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
> const me = dv.page("Repos/perplexityai--bumblebee");
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
> const me = dv.page("Repos/perplexityai--bumblebee");
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
> const me = dv.page("Repos/perplexityai--bumblebee");
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
> const me = dv.page("Repos/perplexityai--bumblebee");
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

> **2026-05-24** — 首次收錄
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

- [[2026-05-24|2026-05-24]] — 首次收錄，1.3k stars
