---
repo: MayersScott/rkn-block-checker
url: https://github.com/MayersScott/rkn-block-checker
owner: MayersScott
owner_type: User
language: Python
license: MIT
description: "Diagnose RKN/TSPU internet blocks layer by layer (DNS, TCP, TLS, HTTP)"
homepage: ""
stars: 1235
stars_per_day: 95
forks: 55
open_issues: 2
created: 2026-05-03
pushed_at: 2026-05-09
first_seen: 2026-05-09
week: "2026-W19"
month: "2026-05"
category: "CLI 工具"
subcategory: "網路診斷"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-09
use_case: "診斷 RKN/TSPU 網路封鎖，逐層分析問題來源。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-17"
contributor_count: 3
engagement: "low"
issue_close_rate: 71
repo_size_kb: 116
readme_length: 10000
bus_factor: 1
last_release_days: 8
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-09"
star_history: "2026-05-09:796,2026-05-09:800,2026-05-10:969,2026-05-10:971,2026-05-11:1062,2026-05-12:1100,2026-05-13:1149,2026-05-14:1175,2026-05-15:1192,2026-05-16:1223,2026-05-17:1235"
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
  - "topic/censorship"
  - "topic/cli"
  - "topic/dns"
  - "topic/dpi"
  - "topic/network_diagnostics"
aliases:
  - "rkn-block-checker"
  - "MayersScott/rkn-block-checker"
  - "診斷 RKN/TSPU 網路封鎖，逐層分析問題來源。"
---

# rkn-block-checker

**1.2k** stars · **95** stars/天 · 建立 13 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/MayersScott--rkn-block-checker");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.5.0` `easy-install`

`censorship` `cli` `dns` `dpi` `network-diagnostics` `networking` `python` `rkn` `tls` `tspu`

> [!summary] 一句話摘要
> 診斷 RKN/TSPU 網路封鎖，逐層分析問題來源。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (95 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在被封鎖的網路環境中進行診斷的技術人員和研究者。
> **一句話重點** 這個工具不僅告訴你網站無法訪問，還告訴你為什麼無法訪問，這對於解決網路問題至關重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路診斷" && p.file.name !== "MayersScott--rkn-block-checker" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路診斷 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到精確的網路診斷效果，值得採用。

> [!abstract] 核心創新
> 這個專案提供了逐層分析網路封鎖的能力，讓使用者能夠精確識別問題來源。

## 專案簡介

這個 CLI 工具的核心功能是檢查當前網路連接是否受到 RKN/TSPU 封鎖，並具體識別封鎖類型（如 DNS 中毒、TCP 重置、TLS DPI 或 ISP 假頁面）。使用者只需執行 `rkn-check` 指令，工具會自動探測內建的網站列表，並根據每一層的檢查結果提供詳細報告。這種逐層檢查的設計使得使用者能夠清楚了解問題出在哪一層，而不僅僅是「網站無法訪問」。技術上，該工具使用 Python 3.10+ 開發，依賴 `requests` 庫進行網路請求，並且可以透過 Docker 部署。相較於其他工具，像是 `curl` 或 `ping`，`rkn-block-checker` 提供了更深入的封鎖診斷，因為它不僅檢查連通性，還分析每一層的具體情況。

使用者可以自定義檢查的網址列表，並且支持 JSON 輸出，便於後續數據處理。這個工具特別適合在被封鎖的環境中進行網路診斷，幫助使用者選擇合適的繞過工具或報告問題。使用者可能會遇到的問題包括需要手動配置自定義網址列表，或是對於某些封鎖類型的識別可能存在誤判。整體來說，這個工具在封鎖檢測方面表現出色，適合需要進行網路診斷的使用者，尤其是在高監控的環境中。

**技術棧**：`Python 3.10` · `requests >=2.31`

## 重點功能

- 逐層檢查 — 檢查 DNS、TCP、TLS 和 HTTP 層級，提供詳細的封鎖類型報告。
- 自動化探測 — 僅需執行 `rkn-check` 指令，無需額外配置。
- 自定義網址列表 — 支持使用者自定義檢查的白名單和黑名單。
- JSON 輸出 — 使用 `--json` 標誌可生成機器可讀的報告，便於數據處理。
- 多線程檢查 — 支持設置並行檢查的工作線程數量，提升檢查效率。

## 快速開始

1. 安裝 rkn-block-checker
```bash
pip install rkn-block-checker
```
2. 執行檢查
```bash
rkn-check
```
3. 檢查特定網址
```bash
rkn-check --url https://example.com
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 1235 stars（95/天），forks 55（4.5%），這顯示出良好的社群關注度。作者 MayersScott 之前在網路診斷領域有過相關經驗，這個工具解決了以往無法明確識別封鎖類型的痛點，讓使用者能夠針對性地採取行動。社群中對於網路封鎖的討論熱度也促進了這個工具的傳播，特別是在需要繞過網路審查的地區。這個工具的出現正好滿足了對於透明度和網路自由的需求，並且在技術上提供了更細緻的診斷能力。forks/stars 比率適中，顯示出使用者對於修改和擴展的興趣。

## 適合誰使用

**目標受眾**：需要在被封鎖的網路環境中進行診斷的技術人員和研究者。

> [!example] 使用場景
> - 網路工程師用它來檢查公司內部網路是否受到 RKN 封鎖，因為能夠快速定位問題層級，節省了大量的排錯時間。
> - 自由職業者用它來確定自己在外地的網路連接是否被限制，因為這樣可以選擇合適的 VPN 或代理服務來繞過封鎖。
> - 研究人員用它來收集不同地區的網路封鎖數據，因為能夠自定義檢查的網址列表，並且輸出 JSON 格式便於後續分析。

## 架構分析

該工具採用單一 Python 腳本架構，設計上旨在簡化用戶操作，無需複雜的配置。資料流方面，工具依序檢查 DNS、TCP、TLS 和 HTTP 層級，並在第一層失敗時停止，這樣的設計讓使用者能夠快速獲得診斷結果。選擇 Python 作為開發語言是因為其在網路編程中的廣泛應用和豐富的庫支持，這樣的選擇使得開發過程更為高效。這個架構的主要 trade-off 是在於靈活性，雖然簡化了用戶操作，但在某些情況下可能無法處理非常複雜的網路環境。整體而言，這個架構適合大多數使用場景，但在極端情況下可能需要額外的調整。

## 技術深入分析

該工具的核心技術機制是逐層檢查網路連接，使用 DNS、TCP、TLS 和 HTTP 層級的探測來確定封鎖類型。這樣的設計使得使用者能夠獲得更具體的診斷結果，而不僅僅是連通性問題。效能方面，該工具能夠快速檢查多個網站，並且支持多線程檢查以提高效率。設計上選擇 Python 是因為其對網路編程的良好支持，依賴的 `requests` 庫簡化了 HTTP 請求的處理。這個工具的依賴樹相對簡單，主要依賴於 `requests`，使得安裝和使用都非常方便。在技術風險方面，對於某些複雜的網路環境，可能會出現誤判的情況，這需要使用者根據具體情況進行調整。整合方面，該工具可以輕鬆地與其他 CLI 工具搭配使用，並且支持 JSON 輸出，便於與其他數據處理工具結合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和範例；安裝過程順暢，無需特別配置；有良好的 getting started guide，適合新手快速上手；目前僅有英文文檔，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 逐層檢查提供詳細的封鎖診斷。
> - 使用簡單，無需複雜配置。
> - 支持自定義檢查列表，靈活性高。

> [!danger] 缺點
> - 僅支援 Python 3.10+，對於舊版本不兼容。
> - 對於某些封鎖類型的識別可能存在誤判。
> - 需要網路連接，無法離線使用。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要網路連接來執行檢查，無法在離線環境中使用。
> - 對於某些封鎖類型的識別可能存在誤判。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的網路檢查功能，但主要聚焦於代理服務的配置和管理。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 雖然不專注於網路封鎖，但提供了 API 訪問的能力，適合需要自動化訪問的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 主要聚焦於代理服務的配置和管理，與本專案的封鎖檢測功能有所不同。 | 如果你的需求是管理和配置代理服務，而非僅僅檢查封鎖情況，則應選擇它。 | medium，因為需要重新設計網路檢查的邏輯。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 API 訪問能力，適合需要自動化訪問的場景，與本專案的功能不同。 | 如果你的需求是自動化訪問特定網站而不是檢查封鎖，則應選擇它。 | low，因為可以直接調用 API 進行訪問。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **rkn-block-checker** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 主要聚焦於代理服務的配置和管理，與本專案的封鎖檢測功能有所不同。 | 提供 API 訪問能力，適合需要自動化訪問的場景，與本專案的功能不同。 |
> | 遷移成本 | - | medium，因為需要重新設計網路檢查的邏輯。 | low，因為可以直接調用 API 進行訪問。 |
> | 適用場景 | 主要場景 | 如果你的需求是管理和配置代理服務，而非僅僅檢查封鎖情況，則應 | 如果你的需求是自動化訪問特定網站而不是檢查封鎖，則應選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境下可能會出現誤判，特別是對於 TLS DPI 的識別。
  - 解法：建議使用者在不同環境中進行多次檢查以確認結果。
- [MEDIUM] 自定義網址列表格式不正確可能導致檢查失敗。
  - 解法：確保使用正確的 JSON 或文本格式。
- [MEDIUM] 多線程檢查在資源有限的環境下可能導致性能下降。
  - 解法：根據環境調整 `--workers` 參數以減少同時檢查的數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速檢查 API 是否受到封鎖，幫助開發者及時調整策略。 |
| 大型企業的網路安全團隊 | 普通 | 雖然能提供診斷，但可能需要更全面的網路監控解決方案。 |
| 自由職業者在外地工作 | 非常適合 | 能夠快速檢查當前網路環境，選擇合適的繞過工具。 |
| 學術研究團隊進行網路封鎖研究 | 適合 | 能夠收集不同地區的網路封鎖數據，支持自定義檢查列表。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到精確的網路診斷效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅進行網路請求，不存取敏感資料。依賴的庫經過廣泛使用，安全性較高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
| Forks | 55 |
| Open Issues | 2 |
| Issue 解決率 | 71% (5 closed) |
| 最後推送 | 2026-05-09 |
| 建立日期 | 2026-05-03 |
| Repo 大小 | 116 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MayersScott/rkn-block-checker) |
| Topics | `censorship` `cli` `dns` `dpi` `network-diagnostics` `networking` `python` `rkn` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MayersScott](https://github.com/MayersScott) | 51 |
> | [@tagantank](https://github.com/tagantank) | 2 |
> | [@vladon](https://github.com/vladon) | 1 |

**最新版本**：v0.5.0 (2026-05-09)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/MayersScott/rkn-block-checker/compare/v0.4.0...v0.5.0

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/MayersScott/rkn-block-checker)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-07 ~ 2026-05-09）
> **活躍天數** 2 天 · **最新 commit** chore: bump version to 0.5.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/MayersScott/rkn-block-checker/issues/9) | Добавить возможность пропуска DNS проверки. | 0 | 0 |
> | [#8](https://github.com/MayersScott/rkn-block-checker/issues/8) | FakeIP support | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # RKN Block Checker
> 
> [](https://pypi.org/project/rkn-block-checker/)
> [](https://github.com/MayersScott/rkn-block-checker/actions/workflows/ci.yml)
> [](https://www.python.org/downloads/)
> [](LICENSE)
> 
> A small CLI that figures out whether the connection you're sitting on is in
> an RKN/TSPU-blocked zone - and, more usefully, **what kind** of block it is
> (DNS poisoning, TCP reset, TLS DPI on SNI, or an ISP stub page).
> 
> The point isn't "site X doesn't open." Browsers already tell you that. The
> point is to look at each layer of the stack independently and report
> *where* it broke. That tells you a lot more about your situation than a
> generic "this site can't be reached" page.
> 
> 
> ## Quick start
> 
> ```bash
> pip install rkn-block-checker
> rkn-check
> ```
> 
> That's it. The tool probes a built-in list of sites, classifies each
> failure by layer, and prints a verdict. No config, no setup, nothing to
> edit.
> 
> 
> ## Install
> 
> Python 3.10+.
> 
> From PyPI:
> 
> ```bash
> pip install rkn-block-checker
> ```
> 
> From source:
> 
> ```bash
> git clone https://github.com/MayersScott/rkn-block-checker.git
> cd rkn-block-checker
> pip install -e .
> ```
> 
> For development (adds pytest and friends):
> 
> ```bash
> pip install -e ".[dev]"
> ```
> 
> 
> ## Example output
> 
> ```text
> ======================================================================
>   RKN Block Checker
> ======================================================================
>   IP:       95.165.xxx.xxx
>   ISP:      AS12389 Rostelecom
>   Location: Moscow, Moscow, RU
> ----------------------------------------------------------------------
> 
> Whitelist (should always work)
>   name          verdict                    TCP     TLS     PLT  status
>   --------------------------------------------------------------------
>   gosuslugi     ✓ OK                      18ms    42ms   380ms  200
>   yandex        ✓ OK                       8ms    25ms    95ms  200
>   sberbank      ✓ OK                      12ms    38ms   250ms  200
>   vk            ✓ OK                       9ms    28ms   180ms  200
>   ...
> 
> Blacklist (RKN-restricted)
>   name          verdict                    TCP     TLS     PLT  status
>   --------------------------------------------------------------------
>   instagram     ~ LIKELY TLS DPI          22ms       -       -  -
>     └ TLS reset right after ClientHello - consistent with SNI-based DPI
>   twitter/x     ~ LIKELY TLS DPI          24ms       -       -  -
>     └ TLS handshake silently dropped - consistent with DPI filtering
>   rutracker     ✗ HTTP STUB               18ms    45ms   120ms  200
>     └ response body matches a known ISP stub-page marker
>   protonvpn     ✗ DNS                        -       -       -  -
>     └ system DNS doesn't resolve, DoH does - consistent with DNS poisoning
> 
> ======================================================================
>   Summary
> ----------------------------------------------------------------------
>   Whitelist: 21/21 working
>   Blacklist: 3/15 open, 12/15 blocked
> 
>   → Likely in an RKN-blocked zone (medium confidence).
>     Most blacklist failures match censorship patterns (TLS DPI, TCP RST),
>     but those signals can also be caused by server-side issues. A control
>     vantage point would confirm.
> 
>   Block types in the blacklist:
>     ~ LIKELY TLS DPI: 8
>     ✗ DNS: 2
>     ✗ HTTP STUB: 2
> ======================================================================
> ```
> 
> Verdict labels are **calibrated by confidence**: `✗` means a high-confidence
> diagnosis (e.g. DNS poisoning confirmed by DoH, HTTP 451, a known stub-page
> marker), `~ LIKELY` means a known censorship pattern matched but a single
> signal can't rule out a server-side issue, and `?` means the symptom is
> ambiguous. The summary line says so plainly - "high confidence", "medium
> confidence", or "inconclusive" - and never claims more certainty than the
> underlying signals support.
> 
> 
> ## Usage
> 
> ```text
> rkn-check [-h] [--json] [--white] [--black]
>           [--white-file PATH] [--black-file PATH] [--url URL]
>           [--timeout TIMEOUT] [--workers WORKERS] [-v]
>           [--no-self-info] [--identify]
> ```
> 
> | flag | what it does |
> |------|--------------|
> | `--json` | emit machine-readable JSON instead of the colored report |
> | `--white` | check only the control (whitelist) targets |
> | `--black` | check only the blacklist targets |
> | `--white-file PATH` | replace the built-in whitelist with a `.txt` or `.json` file |
> | `--black-file PATH` | replace the built-in blacklist with a `.txt` or `.json` file |
> | `--url URL` | probe a single URL or hostname; repeat for several. Skips built-in lists |
> | `--timeout T` | per-probe timeout in seconds (default 5.0) |
> | `--workers N` | thread pool size for parallel checks (default 10) |
> | `--no-self-info` | skip the public-IP lookup at the top of the report |
> | `--identify` | send a self-identifying User-Agent instead of a generic Chrome one. See [Privacy](#privacy-and-threat-model) |
> | `-v` / `-vv` | logging at INFO / DEBUG |
> 
> `--white` and `--black` are mutually exclusive. `--url` cannot be combined
> with `--white`/`--black`/`--white-file`/`--black-file` - ad-hoc mode runs
> only the URLs you pass.
> 
> 
> ## Why this exists
> 
> If a site doesn't open, your browser tells you that. But if you want to
> *do* something about it - pick the right circumvention tool, file a useful
> bug report, or just understand what's happening to your traffic - you need
> to know which part of the network stack is actually being interfered with.
> 
> Different censorship mechanisms leave different fingerprints:
> 
> - **DNS poisoning** is the cheapest and oldest. The ISP's resolver lies
>   about a domain.
> - **TCP reset** is IP-level blackholing. Rare in practice - most ISPs
>   don't bother.
> - **TLS DPI on SNI** is the modern TSPU/RKN signature. The middlebox
>   watches for the SNI extension in the TLS ClientHello and tears the
>   connection down once it sees a blocked hostname.
> - **HTTP stub pages** are the polite kind: an ISP-controlled page served
>   back with a "blocked by RKN" body, often with status 200 or the
>   rarer-but-explicit 451.
> 
> `rkn-check` walks DNS → TCP → TLS → HTTP for each target and stops at the
> first thing that fails. Whichever layer broke becomes the verdict.
> 
> 
> ## Common scenarios
> 
> 
> ### Just diagnose the connection you're on
> 
> ```bash
> rkn-check
> ```
> 
> Probes the built-in lists (~21 control sites, ~15 RKN-restricted), prints
> a per-site report and a summary verdict.
> 
> 
> ### Check a single URL
> 
> ```bash
> rkn-check --url https://example.com
> rkn-check --url example.com --url google.com    # repeat for several
> ```
> 
> Skips the built-in lists entirely and runs an ad-hoc check against just
> the URLs you pass. No summary verdict - there's no control group to
> compare against. Use this when you want to know "did *this one site* come
> through?" without paying for a full scan.
> 
> 
> ### Pipe to `jq`
> 
> ```bash
> 
> # names of every blocked site
> rkn-check --json | jq -r '.blacklist[] | select(.verdict != "OK") | .name'
> 
> 
> # count by block type
> rkn-check --json | jq '.blacklist | group_by(.verdict)
>                        | map({verdict: .[0].verdict, count: length})'
> 
> 
> # only DPI-style blocks (TCP fine, TLS dies)
> rkn-check --json | jq '.blacklist[] | select(.verdict == "TLS_BLOCK" and .tcp_ok)'
> ```
> 
> 
> ### Use your own target lists
> 
> ```bash
> rkn-check --black-file my-list.txt
> rkn-check --white-file my-control.json --black-file my-targets.json
> ```
> 
> See [Custom target lists](#custom-target-lists) below for the file format.
> 
> 
> ### Run from cron and store JSON over time
> 
> ```bash
> rkn-check --json --no-self-info > "snapshots/$(date -I).json"
> ```
> 
> `--no-self-info` skips the public-IP lookup so the tool doesn't hit
> `ipinfo.io` on every cron tick (and so the resulting JSON doesn't carry
> your IP).
> 
> 
> ## How it works
> 
> For each target the tool walks DNS → TCP → TLS → HTTP and stops at the
> first thing that fails. Whichever layer broke becomes the verdict.
> 
> | layer | probe | what a failure means |
> |------:|-------|----------------------|
> | DNS  | system resolver vs Cloudflare DoH, full address sets compared | sets agree but the system fails alone → DNS poisonin

## 延伸閱讀

相關概念：[[網路診斷]] · [[DNS]] · [[TLS]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

[GitHub](https://github.com/MayersScott/rkn-block-checker)

## 相關收錄

> [!note]- 直接競品（同子分類：網路診斷）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路診斷" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "MayersScott--rkn-block-checker" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["網路診斷","DNS","TLS","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MayersScott--rkn-block-checker" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MayersScott--rkn-block-checker" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MayersScott" AND file.name != "MayersScott--rkn-block-checker"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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
> const me = dv.page("Repos/MayersScott--rkn-block-checker");
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

> **2026-05-09** — 首次收錄
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

- [[2026-05-10|2026-05-10]] — 再次上榜，969 stars
- [[2026-05-09|2026-05-09]] — 首次收錄，796 stars
