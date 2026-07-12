---
repo: 514-labs/dnsglobe
url: https://github.com/514-labs/dnsglobe
owner: 514-labs
owner_type: Organization
language: Rust
license: MIT
description: "Global DNS propagation checker TUI — watch a DNS record propagate across 34 public resolvers worldwide, on a world map in your terminal"
homepage: ""
stars: 818
stars_per_day: 117
forks: 23
open_issues: 0
created: 2026-07-05
pushed_at: 2026-07-11
first_seen: 2026-07-10
week: "2026-W28"
month: "2026-07"
category: "CLI 工具"
subcategory: "DNS 工具"
release_tag: "v0.3.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-10
use_case: "在終端機中檢查全球 DNS 記錄的傳播情況。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-19"
contributor_count: 3
engagement: "low"
issue_close_rate: 40
repo_size_kb: 1363
readme_length: 6125
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-10"
star_history: "2026-07-10:774,2026-07-10:774,2026-07-11:798,2026-07-11:798,2026-07-12:818"
tags:
  - github
  - "category/cli_工具"
  - "lang/rust"
  - org
  - "topic/cli"
  - "topic/dns"
  - "topic/dns_checker"
  - "topic/dns_propagation"
  - "topic/ratatui"
aliases:
  - "dnsglobe"
  - "514-labs/dnsglobe"
  - "在終端機中檢查全球 DNS 記錄的傳播情況。"
---

# dnsglobe

**798** stars · **133** stars/天 · 建立 6 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/514-labs--dnsglobe");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.3.1`

`cli` `dns` `dns-checker` `dns-propagation` `ratatui` `rust` `tui`

> [!summary] 一句話摘要
> 在終端機中檢查全球 DNS 記錄的傳播情況。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (133 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在終端機中即時監控 DNS 記錄的網路管理者和開發者。
> **一句話重點** dnsglobe 讓 DNS 記錄的監控變得即時且視覺化，適合需要快速反應的網路管理者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/514-labs--dnsglobe");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "DNS 工具" && p.file.name !== "514-labs--dnsglobe" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 DNS 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到即時的 DNS 監控效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供一個終端用戶界面來即時監控 DNS 記錄的傳播情況。

## 專案簡介

dnsglobe 是一款用 Rust 實作的終端用戶界面 (TUI) 工具，能夠同時查詢全球 34 個公共 DNS 解析器，並在地圖上顯示 DNS 記錄的傳播狀態。用戶可以透過簡單的命令，如 `dnsglobe example.com`，即時查詢並持續監控 DNS 記錄的更新，這對於網域管理者及開發者來說非常實用。這個工具的賣點在於其即時監控功能，能夠顯示每個解析器的當前狀態，並且在終端中以地圖形式呈現，讓用戶一目了然。技術上，dnsglobe 使用了任何播送網絡技術，確保每個解析器的查詢都是直接的，這樣用戶可以獲得最準確的結果。相較於其他工具，如 dnschecker.org，dnsglobe 提供了更具互動性的終端體驗，並且支持多種記錄類型的查詢。

使用者可以自定義解析器，並透過 TOML 配置文件進行擴展，這在其他類似工具中並不常見。這個工具的效能在於其能夠快速回應並顯示多個解析器的結果，適合需要即時監控 DNS 記錄的開發者和系統管理員。社群活躍度中等，開發者能夠在 GitHub 上找到活躍的問題回應和更新。整體而言，dnsglobe 是一個值得嘗試的工具，特別是對於需要頻繁檢查 DNS 記錄的用戶。

**技術棧**：`Rust 1.85` · `Nix`

## 重點功能

- 全球解析器查詢 — 同時查詢 34 個公共 DNS 解析器，顯示每個解析器的當前狀態。
- 即時監控 — 使用 `dnsglobe example.com` 開始監控，並每 30 秒重新查詢，直到傳播達到 100%。
- 視覺化地圖 — 在終端中顯示全球地圖，根據解析器的狀態顯示顏色（綠色、紅色、黃色等）。
- 自定義解析器 — 支持使用 TOML 配置文件自定義解析器，方便用戶擴展功能。
- 多種記錄類型支持 — 支持查詢 A、AAAA、CNAME、MX、NS、TXT、SOA 等多種記錄類型。

## 快速開始

1. 安裝 dnsglobe
```bash
brew install 514-labs/tap/dnsglobe
```
2. 查詢特定域名
```bash
dnsglobe example.com
```
3. 查詢 TXT 記錄
```bash
dnsglobe example.com TXT
```

## 程式碼範例

```rust
# 直接查詢一個域名

```sh
dnsglobe example.com
```
# 預期輸出：顯示該域名在各個解析器的查詢結果。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 798 stars（133/天），forks 20（2.5%），這顯示出一定的興趣增長。主要貢獻者包括 callicles 和 BarbUk，他們在開源社群中有一定的影響力。這個工具解決了 DNS 記錄傳播檢查的痛點，之前的工具往往無法提供即時的視覺化反饋。這個工具的推出正好滿足了對於 DNS 監控需求的上升，特別是在 DevOps 和網路管理領域。社群的反饋也顯示出對於功能擴展的需求，例如調整顏色方案和設定 ECS 的請求，這些都在熱門問題中被提及。

## 適合誰使用

**目標受眾**：需要在終端機中即時監控 DNS 記錄的網路管理者和開發者。

> [!example] 使用場景
> - 網路工程師用它來監控新域名的 DNS 記錄傳播，因為它能提供即時的視覺化反饋，避免手動查詢的繁瑣。
> - 系統管理員用它來確認 DNS 記錄的變更是否成功，因為它能顯示每個解析器的當前狀態，快速定位問題。
> - 開發者用它來測試應用程式的 DNS 配置，因為它支持多種記錄類型，並且能夠自定義解析器。

## 架構分析

dnsglobe 採用 Rust 語言實作，並使用 TUI 框架來提供用戶界面，這樣的選擇使得工具在性能上表現優異，並且能夠在終端中提供流暢的互動體驗。資料流方面，工具會直接查詢 34 個公共 DNS 解析器，並將結果以地圖形式呈現，這樣用戶可以直觀地看到每個解析器的狀態。選擇 Rust 作為開發語言的好處在於其高效能和安全性，但也帶來了較高的學習曲線。這個工具的擴展性良好，使用者可以透過配置文件自定義解析器，這在其他類似工具中並不常見。整體架構設計考慮到了用戶的即時需求，並且在多種解析器的查詢中保持了高效能。

## 技術深入分析

dnsglobe 的核心技術機制在於使用 Rust 語言和 TUI 框架，這使得它在性能和用戶互動上都能保持高效。它能夠同時查詢多個 DNS 解析器，並將結果以地圖形式呈現，這樣的設計讓用戶能夠快速理解 DNS 記錄的傳播狀態。效能方面，dnsglobe 可以在短時間內處理多個解析器的查詢，並且在每次查詢後能夠快速更新結果。選擇 Rust 作為開發語言的好處在於其內存安全性和執行效率，但這也意味著開發者需要具備一定的 Rust 知識。設計取捨方面，dnsglobe 的選擇使得它能夠提供即時的反饋，但在使用上對於不熟悉 CLI 的用戶來說可能會有一定的挑戰。技術風險方面，若未來需要擴展更多解析器或功能，可能會面臨性能瓶頸。整合方面，dnsglobe 可以與現有的 CI/CD 流程結合，但對於需要圖形界面的用戶來說，整合的摩擦點會較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝和使用說明，讓新手能夠快速上手。安裝過程相對順暢，沒有太多坑。文件中提供了基本的使用範例，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 即時監控 DNS 記錄，提供快速反饋。
> - 支持多種記錄類型，靈活性高。
> - 視覺化地圖讓用戶更直觀地理解傳播狀態。

> [!danger] 缺點
> - 對於不熟悉 CLI 的用戶來說使用門檻較高。
> - 需要穩定的網路連接以獲取即時數據。
> - 僅支持在終端機中使用，無法提供圖形界面。

> [!warning] 注意事項
> - 僅支持在終端機中使用，對於不熟悉 CLI 的用戶來說可能不友好。
> - 需要穩定的網路連接以獲取解析器的即時數據。
> - 對於某些私有 DNS 解析器，可能無法獲取結果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| dnschecker.org | 提供網頁界面來檢查 DNS 記錄的傳播，但缺乏終端的即時監控功能。 |
| whatsmydns.net | 同樣提供 DNS 查詢服務，但不支持自定義解析器和視覺化地圖。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| dnschecker.org | 提供網頁界面來檢查 DNS 記錄的傳播，但缺乏終端的即時監控功能。 | 如果你的團隊偏好使用圖形界面而非終端工具，dnschecker.org 會更適合。 | low，因為兩者的功能相似，轉換不會有太大困難。 |
| whatsmydns.net | 同樣提供 DNS 查詢服務，但不支持自定義解析器和視覺化地圖。 | 如果你需要一個簡單的網頁工具來檢查 DNS 記錄，whatsmydns.net 是不錯的選擇。 | low，因為功能相似，轉換過程簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **dnsglobe** | **dnschecker.org** | **whatsmydns.net** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供網頁界面來檢查 DNS 記錄的傳播，但缺乏終端的即時監控功能。 | 同樣提供 DNS 查詢服務，但不支持自定義解析器和視覺化地圖。 |
> | 遷移成本 | - | low，因為兩者的功能相似，轉換不會有太大困難。 | low，因為功能相似，轉換過程簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊偏好使用圖形界面而非終端工具，dnschecke | 如果你需要一個簡單的網頁工具來檢查 DNS 記錄，whats |

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

- [MEDIUM] 在某些網路環境中，可能無法查詢到特定的私有 DNS 解析器。
  - 解法：使用公共 DNS 解析器進行查詢。
- **[HIGH]** 對於不熟悉 CLI 的用戶，使用上可能會有困難。
  - 解法：建議提供圖形界面的替代方案。
- [low] 在某些終端中，顯示的地圖可能不完整。
  - 解法：確保終端寬度至少為 150 列。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的網路管理 | 非常適合 | 能夠即時監控多個 DNS 記錄，適合快速反應的需求。 |
| 大型企業的 DNS 記錄管理 | 適合 | 雖然功能強大，但對於不熟悉 CLI 的用戶來說可能有學習曲線。 |
| 個人開發者的 DNS 測試 | 非常適合 | 提供靈活的查詢和自定義解析器功能，滿足個人需求。 |
| 需要圖形界面的使用者 | 不適合 | 該工具僅支持 CLI，對於不熟悉終端的用戶來說不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時的 DNS 監控效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但使用者需確保查詢的 DNS 解析器是可信的。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

dnsglobe 最常與其他網路監控工具搭配使用，特別是在 DevOps 環境中。用戶可以在 CI/CD 流程中集成此工具，透過命令行進行自動化測試。在使用時，建議將其與 GitHub Actions 結合，透過自動化腳本進行 DNS 監控。整合時，最常見的問題是需要確保終端環境的兼容性，特別是在不同操作系統上使用時。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 dnsglobe 出現之前，網路管理者主要依賴於網頁工具來檢查 DNS 記錄的傳播，這些工具通常缺乏即時反饋和視覺化呈現。隨著 DevOps 實踐的普及，對於即時監控工具的需求日益增加，dnsglobe 正好填補了這一空白。這個工具的出現代表了終端工具在網路管理領域的重要性，未來可能會有更多類似的工具出現以滿足日益增長的需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 CLI 操作
- 了解 DNS 基礎知識

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主要產品中進行測試。

**成功指標**：能夠在 30 秒內獲得 DNS 記錄的即時反饋。

> [!warning] 退出計畫
> 若要退出，所有配置均以 TOML 格式保存，易於轉換至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
| Forks | 20 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-07-05 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/514-labs/dnsglobe) |
| Topics | `cli` `dns` `dns-checker` `dns-propagation` `ratatui` `rust` `tui` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `rust-version` `description` `keywords` `categories` `license` `homepage` `repository` `readme` `anyhow` `clap` `crossterm` `futures`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 99
>     "Nix" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@callicles](https://github.com/callicles) | 19 |
> | [@BarbUk](https://github.com/BarbUk) | 1 |
> | [@levonk](https://github.com/levonk) | 1 |

**最新版本**：v0.3.1 — 0.3.1 - 2026-07-06 (2026-07-07)

> [!info]- Release Notes
> ## Release Notes
> 
> ### Fixed
> 
> - SERVFAIL answers now count as a propagation signal instead of being
>   discarded as unreachable. A resolver answering SERVFAIL is saying "I tried
>   to resolve this name and could not" — the exact state of a resolver stuck
>   on a delegation whose old nameservers were deleted mid-NS-migration (or a
>   DNSSEC validation failure). Such resolvers now hold the propagation
>   percentage below 100% and keep watch mode polling; they show as
>   `✗ SERVFAIL` in the table (`FAIL` in `--once` output) with their own
>   footer count. Previously they were lumped in with timeouts/refusals, so a
>   broken delegation could report as fully propagated.
>   ([#23](https://github.com/514-labs/dnsglobe/pull/23))
> 
> ## Install dnsglobe 0.3.1
> 
> ### Install prebuilt binaries via shell script
> 
> ```sh
> curl --proto '=https' --tlsv1.2 -LsSf https://github.com/514-labs/dnsglobe/releases/download/v0.3.1/dnsglobe-installer.sh | sh
> ```
> 
> ### Install prebuilt binaries via Homebrew
> 
> ```sh
> brew install 514-labs/tap/dnsglobe
> ```
> 
> ## Download dnsglobe 0.3.1

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者能夠找到問題回應和更新。
**連結**：[文件](https://github.com/514-labs/dnsglobe)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-07）
> **活躍天數** 2 天 · **最新 commit** Add Nix flake and Devbox support (#21)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#25](https://github.com/514-labs/dnsglobe/issues/25) | Adjust color scheme | 0 | 1 |
> | [#14](https://github.com/514-labs/dnsglobe/issues/14) | Feature: allow setting ECS in requests | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dnsglobe
> 
> [](https://crates.io/crates/dnsglobe)
> [](https://aur.archlinux.org/packages/dnsglobe/)
> [](https://aur.archlinux.org/packages/dnsglobe-bin/)
> [](LICENSE)
> 
> **A global DNS propagation checker for your terminal** — a Rust TUI that
> queries 34 public DNS resolvers around the world in parallel, compares their
> answers, and shows the propagation of your record on a world map.
> 
> Think dnschecker.org / whatsmydns.net, but in your terminal, with watch mode:
> start a check and it re-polls until the record has propagated everywhere.
> 
> Resolvers span the global anycast networks (Google, Cloudflare, Quad9),
> North America, Europe, Russia, the Middle East, East Asia, and the southern
> hemisphere (Telstra AU, SafeSurfer NZ, UOL BR) — each queried directly, so
> you see every server's own current view of the record.
> 
> Each resolver is queried directly (no cache, EDNS0, TCP fallback for
> truncated answers), so what you see is each server's own current view of the
> record. Answers sharing any record are grouped together — so round-robin DNS
> (each resolver caching a different subset of an IP pool) counts as one
> consistent answer, not twenty conflicting ones. The propagation gauge shows
> how many resolvers are in the majority group; outliers are flagged
> `≠ DIFFERS` once all results are in.
> 
> On terminals ≥150 columns wide, a world map appears on the right with one
> dot per resolver, colored by status (green agrees, magenta differs, red
> error, yellow in flight).
> 
> Anycast networks are asked which of their sites is answering you: Quad9
> (`TXT id.server.on.quad9.net`), Cloudflare (`CH TXT id.server`), Google
> (egress subnet via `TXT o-o.myaddr.l.google.com` matched against
> `TXT locations.publicdns.goog`), OpenDNS (`TXT debug.opendns.com`),
> CleanBrowsing, and Neustar UltraDNS. The discovered site shows in the Loc
> column as `→YUL`-style codes, and the resolver's map dot moves to the POP
> actually serving your queries.
> 
> ## Usage
> 
> Install:
> 
> ```sh
> brew install 514-labs/tap/dnsglobe   # Homebrew (macOS/Linux)
> cargo install dnsglobe               # from crates.io
> yay -S dnsglobe                      # from archlinux aur (compile from source)
> yay -S dnsglobe-bin                  # from archlinux aur (install prebuilt binary)
> nix run github:514-labs/dnsglobe     # Nix flakes (builds from source)
> # or grab a prebuilt binary from the GitHub Releases page
> ```
> 
> Run:
> 
> ```sh
> dnsglobe                            # start empty, type a domain
> dnsglobe example.com                # query immediately and watch
> dnsglobe example.com TXT            # same, starting on TXT records
> dnsglobe --once example.com TXT     # no TUI: print results, exit (for scripts)
> ```
> 
> ### Keys
> 
> | Key            | Action                          |
> | -------------- | ------------------------------- |
> | type / ⌫ / Del | edit domain                     |
> | ←/→ / Home/End | move cursor in the domain field |
> | Enter          | start the check and watch: re-polls every 30 s until propagation reaches 100% |
> | Ctrl+R         | stop or resume watching         |
> | Tab / Shift-Tab | select record type (A, AAAA, CNAME, MX, NS, TXT, SOA) |
> | ↑/↓ / PgUp/PgDn | scroll the resolver table |
> | Ctrl+S         | cycle table sort: resolver / location / time / status / answer |
> | Ctrl+U         | clear domain                    |
> | Esc / Ctrl+C   | quit                            |
> 
> ## Configuration
> 
> Optionally, add your own resolvers — or replace the built-in list entirely —
> with a TOML config file at `~/.config/dnsglobe/config.toml`
> (`$XDG_CONFIG_HOME/dnsglobe/config.toml` if set). Set `DNSGLOBE_CONFIG` to
> use a different path.
> 
> ```toml
> # Set to true to replace the built-in list instead of extending it —
> # e.g. to watch propagation across your own nameservers only.
> replace = false
> 
> [[resolvers]]
> name = "Corp DNS"        # required — shown in the Resolver column
> ip = "10.0.0.53"         # required — IPv4 or IPv6, queried on port 53
> location = "HQ"          # optional — Loc column / location sort
> lat = 40.7               # optional — position on the world map;
> lon = -74.0              #            omit both to leave it off the map
> 
> [[resolvers]]
> name = "NS1 (public)"
> ip = "198.51.100.53"
> ```
> 
> Invalid config (bad IP, unknown key, `lat` without `lon`, `replace = true`
> with no resolvers) is reported at startup with the offending entry named.
> 
> ## Notes
> 
> - Several resolvers are anycast networks, so the responding node is the one
>   nearest to you. Networks with an identification query report the actual
>   answering site (`→YUL`); for the rest the location column is the
>   operator's home region.
> - The built-in resolver list lives in `src/resolvers.rs`; use the config file
>   above to extend or replace it without rebuilding. Every built-in entry was
>   verified to answer external queries; many well-known ISP resolvers (and,
>   notably, all major African ones) refuse queries from outside their network,
>   so they can't be included.
> 
> ## Nix
> 
> The project provides optional Nix flake outputs for users who already use Nix. The flake builds from source.
> 
> ```bash
> # Latest source from default branch
> nix run github:514-labs/dnsglobe
> 
> # Specific release (uses the flake at that git tag)
> nix run github:514-labs/dnsglobe/v0.3.1
> 
> # Named outputs (if the flake exposes them): #latest, #source
> nix run github:514-labs/dnsglobe#source
> 
> # Build / develop
> nix build github:514-labs/dnsglobe
> nix develop github:514-labs/dnsglobe
> ```
> 
> The flake exposes `packages..default`, `apps..default`, `devShells..default`, and `overlays.default`.
> 
> Update through the same Nix workflow you used to install. For profile installs, run `nix profile list` and then `nix profile upgrade `. For flake inputs, run `nix flake update ` in your own flake and rebuild.
> 
> ## Devbox
> 
> For reproducible development environments, use Devbox:
> 
> ```bash
> # Install Devbox first (if not already installed)
> curl -fsSL https://get.jetify.dev/devbox | bash
> 
> # Initialize the environment
> devbox shell
> 
> # Build the project
> devbox run build
> ```
> 
> Or install Devbox via Homebrew:
> 
> ```bash
> brew install jetify-com/devbox/devbox
> ```
> 
> ---
> 
> Made with ❤️ by the folks working on [514.ax](https://www.514.ax).

## 延伸閱讀

相關概念：[[DNS]] · [[終端用戶界面]] · [[網路監控]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[baairon--torlink|baairon/torlink]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]]

[GitHub](https://github.com/514-labs/dnsglobe)

## 相關收錄

> [!note]- 直接競品（同子分類：DNS 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "DNS 工具" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "514-labs--dnsglobe" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["DNS","終端用戶界面","網路監控"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "514-labs--dnsglobe" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/514-labs--dnsglobe");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "514-labs--dnsglobe" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "514-labs" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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

> **2026-07-10** — 首次收錄
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

- [[2026-07-12|2026-07-12]] — 再次上榜，818 stars
- [[2026-07-11|2026-07-11]] — 再次上榜，798 stars
- [[2026-07-10|2026-07-10]] — 首次收錄，774 stars
