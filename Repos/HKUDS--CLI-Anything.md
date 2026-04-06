---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: Apache-2.0
description: "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/"
homepage: "https://clianything.cc/"
stars: 28397
stars_per_day: 1014
forks: 2696
open_issues: 75
created: 2026-03-08
pushed_at: 2026-04-04
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "讓所有軟體都能成為代理原生，實現更高效的自動化操作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 23
repo_size_kb: 23010
readme_length: 10000
bus_factor: 1
last_release_days: 7
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381,2026-03-11:3472,2026-03-13:8931,2026-03-13:8970,2026-03-14:11721,2026-03-14:11739,2026-03-15:13789,2026-03-15:13796,2026-03-16:15263,2026-03-17:16691,2026-03-18:17798,2026-03-19:18612,2026-03-20:19370,2026-03-21:19980,2026-03-22:20536,2026-03-23:21234,2026-03-24:21928,2026-03-25:22505,2026-03-26:23083,2026-03-27:23598,2026-03-28:23940,2026-03-29:24338,2026-03-30:24723,2026-03-31:25202,2026-04-01:25643,2026-04-02:26275,2026-04-03:27144,2026-04-04:27697,2026-04-05:28055,2026-04-06:28397"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "讓所有軟體都能成為代理原生，實現更高效的自動化操作。"
---

# CLI-Anything

**28.4k** stars · **1.0k** stars/天 · 建立 28 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/HKUDS--CLI-Anything");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 讓所有軟體都能成為代理原生，實現更高效的自動化操作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.0k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多個應用程式整合到一個 CLI 中以提高工作效率的開發者。
> **一句話重點** CLI-Anything 的設計理念是將所有軟體轉換為代理原生的 CLI，這在自動化操作上具有革命性意義。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "HKUDS--CLI-Anything" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠顯著提高工作效率，值得採用。

> [!abstract] 核心創新
> CLI-Anything 能夠將任何軟體轉換為代理原生的 CLI，實現更高效的自動化操作。

## 專案簡介

CLI-Anything 的核心機制在於將各種軟體轉換為代理原生的命令行介面，使 AI 代理能夠直接與這些軟體互動。使用者只需透過簡單的命令，如 `/cli-anything build a CLI for ./gimp`，即可為指定的應用程式生成 CLI，這樣可以大幅簡化與軟體的交互過程。這個工具的賣點在於其能夠統一多個分散的 API，讓使用者透過一個 CLI 來操作多個服務，從而提高效率並降低操作複雜度。技術上，CLI-Anything 是用 Python、C#、JavaScript 和 Shell 實現，並且支援多個 AI 編碼代理，如 Claude Code 和 OpenClaw，這使得它在不同平台上都能靈活運用。與其他類似工具相比，如 Codex 和 OpenClaw，CLI-Anything 提供了更為強大的 CLI 生成能力，能夠將多個 API 整合為一個命令，顯著減少了操作的繁瑣性。

實際使用中，這個工具可以處理的資料量相當可觀，並且能夠在多個平台上運行，對於需要頻繁操作多個應用的開發者來說，CLI-Anything 是一個理想的選擇。未來，隨著更多 AI 代理的支援，CLI-Anything 的功能將會更加強大。對於小型團隊或個人開發者來說，這是一個值得立即採用的工具，因為它能夠顯著提高工作效率。建議在需要自動化多個應用程式操作的情境下使用，但如果你的工作流程不涉及多個軟體的整合，則可能不需要這樣的工具。

**技術棧**：`Python 3.10+` · `C#` · `JavaScript` · `Shell` · `PowerShell`

## 重點功能

- 一鍵生成 CLI — 透過簡單命令將任何應用程式轉換為 CLI，支持多種軟體。
- 統一 API 操作 — 將多個分散的 API 整合為一個命令，減少操作複雜度。
- 支援多平台 — 可在多種 AI 編碼代理上運行，如 Claude Code 和 OpenClaw。
- 自動文檔生成 — CLI 自帶 --help 標誌，提供即時文檔，方便使用者查詢。
- 輕量級設計 — 無需額外依賴，簡化安裝和使用過程。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 為 GIMP 生成 CLI
```bash
@cli-anything build a CLI for ./gimp
```
3. 驗證 GIMP 功能
```bash
/cli-anything:validate ./gimp
```

## 程式碼範例

```python
{
  "前置條件": "安裝 Python 3.10+ 和目標軟體",
  "指令": "# 安裝 CLI-Anything 插件\n/plugin install cli-anything\n\n# 為 GIMP 生成 CLI\n@cli-anything build a CLI for ./gimp\n\n# 驗證 GIMP 功能\n/cli-anything:validate ./gimp",
  "預期輸出": "CLI 生成成功，並可用於後續操作。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 28 天就累積 28397 stars（1014/天），forks 2696（9.5%），顯示出強烈的社群參與。這個專案的主要貢獻者來自 HKUDS 團隊，他們在開源社群中有豐富的經驗。CLI-Anything 解決了過去需要手動整合多個 API 的痛點，讓開發者能夠更高效地使用各種軟體。近期的推廣活動和社群的活躍度也促進了其快速增長。這個工具的設計理念符合當前 AI 代理的需求，並且隨著 AI 技術的進步，CLI-Anything 的應用場景也在不斷擴展。

## 適合誰使用

**目標受眾**：需要將多個應用程式整合到一個 CLI 中以提高工作效率的開發者。

> [!example] 使用場景
> - 後端開發者用它來為 GIMP 生成 CLI，因為這樣可以快速自動化圖像處理任務，減少手動操作的時間。
> - AI 研究員用它來整合多個 API，因為可以透過一個統一的 CLI 操作，提升工作效率並降低錯誤率。
> - 產品經理用它來驗證 LibreOffice 的功能，因為能夠快速生成測試腳本，確保產品的穩定性。

## 架構分析

CLI-Anything 採用模組化設計，允許用戶透過簡單的命令生成 CLI。其核心是將各種應用程式的 API 整合為一個統一的命令行介面，這樣可以減少用戶在操作多個應用時的複雜性。資料流方面，使用者輸入命令後，系統會自動生成相應的 CLI，並將其安裝到指定的環境中。

這樣的設計使得 CLI-Anything 在不同平台上都能靈活運用，但也可能導致在某些特定環境下的兼容性問題。選擇這種設計的代價在於需要持續維護多個平台的支援，並確保生成的 CLI 能夠正確運行。擴展性方面，CLI-Anything 可以隨著更多 AI 代理的加入而不斷增強其功能。

整體而言，這種設計使得 CLI-Anything 成為一個強大的工具，能夠滿足多樣化的需求。

## 技術深入分析

CLI-Anything 的核心技術在於其模組化設計，允許用戶透過簡單的命令生成 CLI。這一過程中，使用者輸入的命令會被解析並轉換為相應的 CLI，這樣的設計使得用戶無需深入了解每個應用的 API。效能方面，CLI-Anything 能夠處理大量的 API 請求，並且在多個平台上運行時表現穩定。選擇 Python 作為主要開發語言，使得其在處理文本和命令行操作上具有優勢，但也可能導致在某些環境下的性能瓶頸。技術風險方面，CLI-Anything 依賴於多個外部 API，這可能會在未來造成兼容性問題。整合方面，CLI-Anything 能夠與主流的開發工具鏈無縫對接，並且在 CI/CD 流程中表現良好，這使得其在實際開發中非常實用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程順暢，沒有明顯的坑。文件中有多語言支持，方便不同語言的使用者。整體來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 能夠快速生成 CLI，提升工作效率。
> - 統一多個 API 的操作，簡化使用流程。
> - 支援多種平台，靈活性高。

> [!danger] 缺點
> - 目前僅支援 Python 3.10+，對於其他版本不友好。
> - 需要目標軟體安裝，限制了使用場景。
> - 對於不熟悉命令行的使用者，學習曲線較陡。

> [!warning] 注意事項
> - 目前僅支援 Python 3.10+。
> - 需要目標軟體已安裝，否則無法生成相應的 CLI。
> - 對於不熟悉命令行的使用者，可能需要額外學習成本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 提供了類似的 AI 代理整合功能，但 CLI-Anything 更專注於生成 CLI，操作更為簡便。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於 API 代理，而 CLI-Anything 則是將所有軟體轉換為 CLI，功能範圍更廣。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供了特定的 AI 代理功能，但 CLI-Anything 的通用性和整合能力更強。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於高效的資料同步，而 CLI-Anything 則是將所有軟體轉換為 CLI，功能範圍更廣。 | 如果你的主要需求是資料同步，parsync 會是更合適的選擇。 | low，因為兩者的使用方式有一定相似性。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 主要針對醫療領域的 AI 代理，而 CLI-Anything 則是通用的 CLI 生成工具。 | 如果你的應用場景專注於醫療領域，OpenClaw 會提供更專業的功能。 | medium，因為需要調整使用場景和命令格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於高效的資料同步，而 CLI-Anything 則是將所有軟體轉換為 CLI，功能範圍更廣。 | OpenClaw 主要針對醫療領域的 AI 代理，而 CLI-Anything 則是通用的 CLI 生成工具。 |
> | 遷移成本 | - | low，因為兩者的使用方式有一定相似性。 | medium，因為需要調整使用場景和命令格式。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是資料同步，parsync 會是更合適的選擇 | 如果你的應用場景專注於醫療領域，OpenClaw 會提供更專 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下，某些命令可能因缺少 bash 支援而無法運行。
  - 解法：安裝 Git for Windows 或使用 WSL。
- [MEDIUM] 生成的 CLI 可能需要手動調整以適應特定應用的需求。
  - 解法：參考文檔進行調整。
- [MEDIUM] 某些 API 的變更可能導致 CLI 無法正常工作。
  - 解法：定期檢查更新並調整使用的命令。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速整合多個應用程式的功能 | 非常適合 | CLI-Anything 能夠有效統一操作，提升效率。 |
| 大型企業需要穩定的 CLI 工具進行自動化測試 | 普通 | 雖然功能強大，但目前仍處於 beta 階段，穩定性有待提高。 |
| 個人開發者希望簡化日常工作流程 | 非常適合 | CLI-Anything 能夠快速生成 CLI，減少手動操作。 |
| 需要高效資料同步的專案 | 不適合 | 這不是 CLI-Anything 的主要功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠顯著提高工作效率，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：CLI-Anything 本身不需要高權限，但在使用過程中可能會存取敏感資料，需注意 API 的安全性和授權問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CLI-Anything 最常與 AI 編碼代理搭配使用，如 Claude Code 和 OpenClaw。在一個使用 Claude Code 的專案中，開發者可以透過 CLI-Anything 生成 GIMP 的 CLI，具體做法是使用 `/cli-anything build a CLI for ./gimp`。這個工具支援與 GitHub Copilot CLI 和其他主流開發工具的整合，能夠在 CI/CD 流程中輕鬆使用。整合過程中，最常見的問題是命令格式的調整，這需要用戶根據具體情況進行修改。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 CLI-Anything 出現之前，開發者通常需要手動整合多個 API，這不僅耗時，還容易出錯。隨著 AI 技術的進步，對於自動化工具的需求日益增加，CLI-Anything 應運而生。它代表了將 AI 代理與各種軟體整合的趨勢，未來可能會隨著更多 AI 代理的出現而進一步發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的命令行操作
- 了解 Python 基礎
- 有使用 AI 編碼代理的經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 CLI-Anything。第二週：在小型團隊的內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個非核心模組中使用。

**成功指標**：CLI 生成時間減少 50%，手動操作錯誤率降低至零。

> [!warning] 退出計畫
> 所有設定和命令都以標準格式保存，方便轉移到其他工具或手動操作。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
| Forks | 2.7k |
| Open Issues | 75 |
| Issue 解決率 | 23% (22 closed) |
| 最後推送 | 2026-04-04 |
| 建立日期 | 2026-03-08 |
| 官方網站 | [Link](https://clianything.cc/) |
| Repo 大小 | 22.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 95
>     "C#" : 4
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 121 |
> | [@omerarslan0](https://github.com/omerarslan0) | 19 |
> | [@Bortlesboat](https://github.com/Bortlesboat) | 17 |
> | [@furkankoykiran](https://github.com/furkankoykiran) | 15 |
> | [@zhangxilong-43](https://github.com/zhangxilong-43) | 11 |

**最新版本**：v0.2.0 (2026-03-30)

> [!info]- Release Notes
> ## What's Changed
> * Add AnyGen OpenAPI CLI harness by @koltyu-anygen in https://github.com/HKUDS/CLI-Anything/pull/6
> * Add Draw.io CLI harness for agent-native diagram creation by @zhangxilong-43 in https://github.com/HKUDS/CLI-Anything/pull/9
> * docs: clean up stale build.md references after merge into cli-anything.md by @JasonZhaoWW in https://github.com/HKUDS/CLI-Anything/pull/7
> * Add /cli-anything:list command and update documentation by @Lin-Jiong-HDU in https://github.com/HKUDS/CLI-Anything/pull/8
> * feat: add zoom harness by @zhangxilong-43 in https://github.com/HKUDS/CLI-Anything/pull/25
> * fix: replace placeholder URLs with correct HKUDS/CLI-Anything URL by @Jah-yee in https://github.com/HKUDS/CLI-Anything/pull/26
> * fix: [shotcut] add missing lxml dependency to shotcut/agent-harness/setup.py by @jarrodcolburn in https://github.com/HKUDS/CLI-Anything/pull/13
> * fix(shotcut): add auto-save option for one-shot mode by @Jah-yee in https://github.com/HKUDS/CLI-Anything/pull/15
> * fix(libreoffice): enable real LibreOffice backend on Windows and macOS by @Laplace5079 in https://github.com/HKUDS/CLI-Anything/pull/18
> * Add Codex skill integration by @morty-z in https://github.com/HKUDS/CLI-Anything/pull/38
> * Feat/qoder plugin support by @panxiaojun233 in https://github.com/HKUDS/CLI-Anything/pull/43
> * Add PowerShell installer for Codex skill by @0xCyberBerserker in https://github.com/HKUDS/CLI-Anything/pull/55
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和討論。
**連結**：[文件](https://hkuds.github.io/CLI-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31 ~ 2026-04-03）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #170 from fabiomantel/add-wiremock-harness

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/HKUDS/CLI-Anything/issues/19) | Unknown skill: cli-anything `bug` `documentation` `compatibility` | 4 | 12 |
> | [#144](https://github.com/HKUDS/CLI-Anything/issues/144) | Zoom harness stores OAuth tokens without restrictive file pe | 1 | 0 |
> | [#34](https://github.com/HKUDS/CLI-Anything/issues/34) | can i use this for gemini-cli? `question` | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
> 
> **🌐 [CLI-Hub](https://hkuds.github.io/CLI-Anything/)**: Explore all community-built CLIs and install with one command at the **[CLI-Hub](https://hkuds.github.io/CLI-Anything/)**. Want to add your own? [Open a PR](https://github.com/HKUDS/CLI-Anything/blob/main/CONTRIBUTING.md) — the hub updates instantly.
> 
> **🎬 [See Demos](#-real-world-demos)**: Watch AI agents use generated CLIs to produce real artifacts — diagrams, gameplay, subtitles, and more.
> 
>   
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
>   
> 
> **One Command Line**: Make any software agent-ready for OpenClaw, nanobot, Cursor, Claude Code, etc.&nbsp;&nbsp;[**中文文档**](README_CN.md) | [**日本語ドキュメント**](README_JA.md)
> 
>   
> 
>   
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> 
> ### Prerequisites
> 
> - **Python 3.10+**
> - Target software installed (e.g., GIMP, Blender, LibreOffice, or your own application)
> - A supported AI coding agent: [Claude Code](#-claude-code) | [OpenClaw](#-openclaw) | [OpenCode](#-opencode) | [Codex](#-codex) | [Qodercli](#-qodercli) | [GitHub Copilot CLI](#-github-copilot-cli) | [More Platforms](#-more-platforms-coming-soon)
> 
> 
> # Install the cli-anything plugin from the marketplace
> /plugin install cli-anything
> ```
> 
> That's it. The plugin is now available in your Claude Code session.
> 
> > **Note for Win Users:** Claude Code runs shell commands via `bash`. On Windows, install Git for Windows (includes `bash` and
> `cygpath`) or use WSL; otherwise commands may fail with `cygpath: command not found`.
> 
> **Step 3: Build a CLI in One Command**
> 
> ```bash
> 
> # Global install (available in all projects)
> cp CLI-Anything/opencode-commands/*.md ~/.config/opencode/commands/
> cp CLI-Anything/cli-anything-plugin/HARNESS.md ~/.config/opencode/commands/
> 
> 
> # Or project-level install
> cp CLI-Anything/opencode-commands/*.md .opencode/commands/
> cp CLI-Anything/cli-anything-plugin/HARNESS.md .opencode/commands/
> ```
> 
> > **Note:** `HARNESS.md` is the methodology spec that all commands reference. It must be in the same directory as the commands.
> 
> This adds 5 slash commands: `/cli-anything`, `/cli-anything-refine`, `/cli-anything-test`, `/cli-anything-validate`, and `/cli-anything-list`.
> 
> **Step 2: Build a CLI in One Command**
> 
> ```bash
> 
> # Install to the global skills folder
> mkdir -p ~/.openclaw/skills/cli-anything
> cp CLI-Anything/openclaw-skill/SKILL.md ~/.openclaw/skills/cli-anything/SKILL.md
> ```
> 
> **Step 2: Build a CLI**
> 
> Now you can invoke the skill inside OpenClaw:
> 
> `@cli-anything build a CLI for ./gimp`
> 
> The skill follows the same 7-phase methodology as Claude Code and OpenCode.
> 
> ⚡ Codex Experimental Community
> 
> **Step 1: Install the Skill**
> 
> Run the bundled installer:
> 
> ```bash
> 
> # Install the skill
> bash CLI-Anything/codex-skill/scripts/install.sh
> ```
> 
> On Windows PowerShell, use:
> 
> ```powershell
> .\CLI-Anything\codex-skill\scripts\install.ps1
> ```
> 
> This installs the skill to `$CODEX_HOME/skills/cli-anything` (or `~/.codex/skills/cli-anything` if `CODEX_HOME` is unset).
> 
> Restart Codex after installation so it is discovered.
> 
> **Step 2: Use CLI-Anything from Codex**
> 
> Describe the task in natural language, for example:
> 
> ```text
> Use CLI-Anything to build a harness for ./gimp
> Use CLI-Anything to refine ./shotcut for picture-in-picture workflows
> Use CLI-Anything to validate ./libreoffice
> ```
> 
> The Codex skill adapts the same methodology used by the Claude Code plugin and
> OpenCode commands, while keeping the generated Python harness format unchanged.
> 
> ⚡ GitHub Copilot CLI Community
> 
> **Step 1: Install the Plugin**
> 
> ```bash
> git clone https://github.com/HKUDS/CLI-Anything.git
> cd CLI-Anything
> copilot plugin install ./cli-anything-plugin
> ```
> 
> This installs the CLI-Anything plugin to GitHub Copilot CLI. The plugin should now be available in your GitHub Copilot CLI session.
> 
> **Step 2: Use CLI-Anything from GitHub Copilot CLI**
> 
> ```bash
> /cli-anything:cli-anything ./gimp
> /cli-anything:refine ./gimp "batch processing and filters"
> /cli-anything:validate ./gimp
> ```
> 
> 🔮 More Platforms (Coming Soon)
> 
> CLI-Anything is designed to be platform-agnostic. Support for more AI coding agents is planned:
> 
> - **Codex** — available via the bundled skill in `codex-skill/`
> - **Cursor** — coming soon
> - **Windsurf** — coming soon
> - **Your favorite tool** — contributions welcome! See the `opencode-commands/` directory for a reference implementation.
> 
> 
> # Install to PATH
> cd gimp/agent-harness && pip install -e .
> 
> 
> ### 📦 Zero-Config Installation
> Simple pip install -e . puts cli-anything- directly on PATH. Agents discover tools via standard which commands. No setup, no wrappers.
> 
> 
> ## 📦 Installation & Usage
> 
> 
> # Add marketplace & install (recommended)
> /plugin marketplace add HKUDS/CLI-Anything
> /plugin install cli-anything
> 
> 
> # Install any generated CLI
> cd /agent-harness
> pip install -e .
> 
> 
> # Force-installed mode (recommended for validation)
> CLI_ANYTHING_FORCE_INSTALLED=1 python3 -m pytest cli_anything//tests/ -v -s
> ```
> 
> ---
> 
> 
> ## 🎬 Real-World Demos
> 
> AI agents using generated CLIs to produce complete, useful artifacts — no GUI needed.
> 
> 
> ## 🎬 Demonstrations
> 
> 
> ### Examples
> 
> ```bash
> 
> ## 🎮 Demo: Using a Generated CLI
> 
> Here's what an agent can do with `cli-anything-libreoffice`:
> 
> ```bash
> 
> ## CLI-Anything's Key Features
> 
> 
> ### 🔗 Unify Scattered APIs into One CLI
> 
> Tired of juggling fragmented web service APIs? Feed the docs or SDK manuscripts to `/cli-anything` and your agents get a **powerful, stateful CLI** that wraps those individual endpoints into coherent command groups. One tool instead of dozens of raw API calls — stronger capabilities while saving tokens.
> 
> 
> ## 🤔 Why CLI?
> 
> CLI is the universal interface for both humans and AI agents:
> 
> • **Structured & Composable** - Text commands match LLM format and chain for complex workflows
> 
> • **Lightweight & Universal** - Minimal overhead, works across all systems without dependencies
> 
> • **Self-Describing** - --help flags provide automatic documentation agents can discover
> 
> • **Proven Success** - Claude Code runs thousands of real workflows through CLI daily
> 
> • **Agent-First Design** - Structured JSON output eliminates parsing complexity
> 
> • **Deterministic & Reliable** - Consistent results enable predictable agent behavior
> 
> 
> ## 📰 News
> 
> > Thanks to all invaluable efforts from the community! More updates continuously on the way everyday..
> 
> - **2026-03-30** 🏗️ **CLI-Anything v0.2.0** — HARNESS.md progressive disclosure redesign. Detailed guides (MCP backend, filter translation, timecode, session locking, PyPI publishing, SKILL.md generation) extracted into `guides/` for on-demand loading. Phases 1–7 now contiguous. Key Principles and Rules merged into a single authoritative section. Added Guides Reference routing table. Renamed "Critical Lessons Learned" to "Architecture Patterns & Pitfalls."
> 
> - **2026-03-29** 📐 Blender skill docs updated — enforce absolute render paths and correct prerequisites.
> 
> - **2026-03-28** 🌐 **CLIBrowser** added to CLI-Hub registry for agent-accessible browser automation.
> 
> - **2026-03-27** 📚 Zotero SKILL.md enhanced with agent-facing constraints; REPL config and executable resolution fixes.
> 
> - **2026-03-26** 📖 **Zotero CLI** harness landed for Zotero desktop (library management, collections, citations). Draw.io custom ID bugfix (#132) and registry.json syntax fix.
> 
> - **2026-03-25** 🎮 **RenderDoc CLI** merged for GPU frame capture analysis (PSO compute, REPL capture cache). FreeCAD updated for v1.1 (new datum system, tapping, simulation). Blender EEVEE engine name corrected. Zoom token permissions hardened.
> 
> - **2026-03-24** 🏭 **FreeCAD CLI** added with 258 commands across 17 groups. **iTerm2** and **Teltonika RMS** harnesses added to registry. CLI-Hub frontend and README install URLs updated.
> 
> - **2026-03-23** 🤖 Launched **CLI-Hub meta-skill** — agents can now discover and install CLIs autonomously via [`cli-hub-meta-skill/SKILL.md`](cli-

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/HKUDS/CLI-Anything) · [官方網站](https://clianything.cc/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--CLI-Anything" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--CLI-Anything" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--CLI-Anything" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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
> const me = dv.page("Repos/HKUDS--CLI-Anything");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-15|2026-03-15]] — 再次上榜，13.8k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，11.7k stars
- [[2026-03-13|2026-03-13]] — 再次上榜，8.9k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，2.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
