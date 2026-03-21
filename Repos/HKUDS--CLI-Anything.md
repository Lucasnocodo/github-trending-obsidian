---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 19980
stars_per_day: 1665
forks: 1738
open_issues: 50
created: 2026-03-08
pushed_at: 2026-03-20
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "讓任何軟體都能成為 AI 代理的命令行工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 23
repo_size_kb: 6778
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:3381,2026-03-11:3472,2026-03-13:8931,2026-03-13:8970,2026-03-14:11721,2026-03-14:11739,2026-03-15:13789,2026-03-15:13796,2026-03-16:15263,2026-03-17:16691,2026-03-18:17798,2026-03-19:18612,2026-03-20:19370,2026-03-21:19980"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "讓任何軟體都能成為 AI 代理的命令行工具。"
---

# CLI-Anything

**20.0k** stars · **1.7k** stars/天 · 建立 12 天前 · Python · 未標註授權

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓任何軟體都能成為 AI 代理的命令行工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.7k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將現有軟體轉換為 AI 代理可用的開發者，尤其是在小型專案中。
> **一句話重點** CLI-Anything 讓開發者能夠輕鬆將任何軟體轉換為 AI 代理可用的命令行，實現自動化操作。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到快速構建 AI 代理的能力，值得嘗試。

> [!abstract] 核心創新
> 將所有軟體轉換為 AI 代理可用的命令行工具，實現無縫整合。

## 專案簡介

CLI-Anything 的核心機制是將各種軟體轉換為 AI 代理可用的命令行介面，這樣使用者可以透過簡單的命令來操作軟體。使用者首先需要安裝目標軟體（如 GIMP 或 Blender），然後透過 CLI-Anything 的插件來構建 CLI。這個工具的賣點在於它能夠讓多種軟體在 AI 代理的環境中運行，實現自動化操作。具體來說，使用者可以透過 `/cli-anything build a CLI for ./gimp` 來為 GIMP 構建 CLI，並利用五個預設的指令來進行操作。技術上，CLI-Anything 使用 Python 和 Shell 實現，並依賴於一系列 AI 編碼代理，如 Claude Code 和 OpenClaw，這樣的設計使得它能夠快速適應不同的軟體環境。

與其他工具相比，如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy，CLI-Anything 提供了一個更通用的解決方案，能夠支持更多的軟體和平台。實際使用中，CLI-Anything 需要 Python 3.10 以上版本，並且對於 Windows 使用者，需安裝 Git for Windows 或 WSL 以確保命令能正常執行。雖然目前有 50 個開放的 Issues，但活躍的社群和持續的更新顯示出這個專案的潛力。對於小型團隊或個人開發者而言，這是一個值得考慮的工具，特別是在需要快速構建 AI 代理的情境下。未來六個月內，隨著社群的擴展和功能的增強，CLI-Anything 可能會成為更廣泛使用的工具。

**技術棧**：`Python 3.10+` · `Shell` · `PowerShell`

## 重點功能

- 一鍵構建 CLI — 使用 `/cli-anything build a CLI for ./gimp` 指令為 GIMP 構建命令行介面。
- 多平台支援 — 支援多種 AI 編碼代理，如 Claude Code 和 OpenClaw。
- 社群插件中心 — 透過 CLI-Hub 瀏覽和安裝社群提供的各種 CLI。
- 全域安裝選項 — 可選擇全域安裝或專案級安裝，靈活應用於不同場景。
- 中文和日文文檔 — 提供多語言支持，方便不同語言的使用者。

## 快速開始

1. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
2. 為 GIMP 構建 CLI
```bash
cp CLI-Anything/opencode-commands/*.md ~/.config/opencode/commands/
```
3. 使用 CLI-Anything 指令
```bash
@cli-anything build a CLI for ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 19980 stars（1665/天），forks 1738（8.7%），顯示出強烈的興趣和參與度。主要貢獻者來自不同背景，顯示出多樣化的開發者社群。這個工具解決了將現有軟體與 AI 代理整合的痛點，之前的解決方案往往需要手動配置或不夠靈活。最近的推文和社群討論也引發了對這個工具的關注，尤其是在 AI 代理日益普及的背景下。高比例的 forks/stars 表示許多人正在嘗試修改和擴展這個工具，顯示出其實用性和潛力。

## 適合誰使用

**目標受眾**：需要將現有軟體轉換為 AI 代理可用的開發者，尤其是在小型專案中。

> [!example] 使用場景
> - 後端工程師用它來為 GIMP 構建 CLI，因為這樣可以自動化圖像處理流程，節省手動操作的時間。
> - AI 開發者用它來快速整合各種軟體到 AI 代理中，因為這樣可以提高開發效率，並利用 AI 進行自動化測試。
> - 獨立開發者用它來將自己的應用程式轉換為 AI 代理可用，因為這樣可以擴展應用的功能，並吸引更多用戶。

## 架構分析

CLI-Anything 的架構設計為一個插件系統，允許用戶將各種軟體轉換為 AI 代理可用的命令行介面。這個系統的核心是使用 Python 和 Shell 腳本來處理命令的解析和執行。資料流方面，使用者透過 CLI 指令與系統互動，系統再將指令轉換為對應的軟體操作。

選擇這種插件架構的原因在於其靈活性和可擴展性，能夠快速適應不同的軟體需求。這樣的設計也使得未來可以輕鬆添加新的功能或支援更多的軟體。擴展性方面，雖然目前的設計能夠支持多種軟體，但在面對大型軟體時可能會遇到性能瓶頸，特別是在命令解析和執行的效率上。

整體而言，這種架構模式使得 CLI-Anything 能夠快速迭代和更新，滿足不斷變化的需求。

## 技術深入分析

CLI-Anything 的核心技術機制是通過插件系統將各種軟體轉換為 AI 代理可用的命令行介面，這樣的設計使得使用者能夠透過簡單的指令來操作複雜的軟體。技術上，它使用 Python 和 Shell 腳本來實現命令的解析和執行，這樣的選擇使得它能夠快速適應不同的環境和需求。效能方面，CLI-Anything 在處理小型軟體時表現良好，但在面對大型軟體時，可能會出現性能瓶頸，特別是在命令解析和執行的效率上。設計上，這種插件架構提供了靈活性和可擴展性，能夠快速添加新的功能或支援更多的軟體，但也可能帶來一定的維護成本。技術風險方面，隨著使用者數量的增加，可能會出現更多的使用場景和需求，這對於維護者來說是一個挑戰。整合方面，CLI-Anything 能夠與主流的開發工具鏈良好整合，但在特定環境下可能需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但 Windows 使用者需注意環境配置。文件有提供中文和日文的支持，方便不同語言的使用者上手。

## 優缺點分析

> [!success] 優點
> - 能夠快速將現有軟體轉換為 AI 代理可用的命令行，提升工作效率。
> - 支持多種 AI 編碼代理，靈活應用於不同場景。
> - 社群活躍，持續更新和擴展功能。

> [!danger] 缺點
> - 對於 Windows 使用者需額外安裝環境，增加使用門檻。
> - 目前仍有開放的 Issues，可能影響使用體驗。
> - 對於大型軟體的支持可能不夠完善，需進一步優化。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - Windows 使用者需安裝 Git for Windows 或 WSL。
> - 目前仍有 50 個開放的 Issues，可能影響使用體驗。
> - 對於某些軟體，可能需要額外的配置才能正常運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，但不支持將軟體轉換為 AI 代理命令行。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 WebSocket 代理，無法直接將軟體轉換為 AI 代理命令行。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，無法將軟體轉換為 AI 代理命令行。 | 如果你的需求主要是資料同步而非將軟體轉換為命令行，則應選擇它。 | low，因為兩者的功能範圍不同，無需進行複雜的遷移。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 WebSocket 代理，無法直接將軟體轉換為 AI 代理命令行。 | 如果你的需求是 WebSocket 代理，則選擇它會更合適。 | low，因為功能和應用場景不同，無需進行複雜的遷移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CLI-Anything** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，無法將軟體轉換為 AI 代理命令行。 | 主要用於 WebSocket 代理，無法直接將軟體轉換為 AI 代理命令行。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，無需進行複雜的遷移。 | low，因為功能和應用場景不同，無需進行複雜的遷移。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非將軟體轉換為命令行，則應選擇它 | 如果你的需求是 WebSocket 代理，則選擇它會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些命令在 Windows 環境下可能無法正常執行，特別是缺少 bash 環境時。
  - 解法：確保安裝 Git for Windows 或使用 WSL。
- [MEDIUM] 對於大型軟體的支持可能不夠完善，導致命令執行失敗。
  - 解法：在使用前檢查支持的軟體列表，避免使用不兼容的軟體。
- [MEDIUM] 某些功能可能在不同版本的 Python 中表現不一致。
  - 解法：確保使用 Python 3.10 以上版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發環境 | 非常適合 | 能夠快速將現有軟體轉換為 AI 代理，提升開發效率。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 獨立開發者的個人專案 | 非常適合 | 能夠快速構建 AI 代理，適合小型專案。 |
| 需要高穩定性的商業應用 | 不適合 | 目前的功能和穩定性尚未達到商業應用的要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到快速構建 AI 代理的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CLI-Anything 本身不需要高權限，主要操作本地軟體，不存取敏感資料。依賴的第三方庫需定期檢查安全性。

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
| Forks | 1.7k |
| Open Issues | 50 |
| Issue 解決率 | 23% (15 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 6.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/CLI-Anything) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 58 |
> | [@Bortlesboat](https://github.com/Bortlesboat) | 17 |
> | [@sehawq](https://github.com/sehawq) | 17 |
> | [@panxiaojun233](https://github.com/panxiaojun233) | 11 |
> | [@Lin-Jiong-HDU](https://github.com/Lin-Jiong-HDU) | 6 |

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和討論。
**連結**：[文件](https://hkuds.github.io/CLI-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-20）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #83 from sehawq/codex/gimp-file-load-fix

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/HKUDS/CLI-Anything/issues/19) | Unknown skill: cli-anything `bug` `documentation` `compatibility` | 4 | 8 |
> | [#34](https://github.com/HKUDS/CLI-Anything/issues/34) | can i use this for gemini-cli? `question` | 1 | 0 |
> | [#109](https://github.com/HKUDS/CLI-Anything/issues/109) | [Feature]: 如果给一个api-docs，怎么使用这个cli-anything？ `feature-request` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
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
> **🌐 [CLI-Hub](https://hkuds.github.io/CLI-Anything/hub/)**: Browse & install all community CLIs in one place. Have a CLI for a new software? [Open a PR](https://github.com/HKUDS/CLI-Anything/blob/main/CONTRIBUTING.md) — the hub updates instantly.
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
> - A supported AI coding agent: [Claude Code](#-claude-code) | [OpenClaw](#-openclaw) | [OpenCode](#-opencode) | [Codex](#-codex) | [Qodercli](#-qodercli) | [More Platforms](#-more-platforms-coming-soon)
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
> - **2026-03-17** 🌐 Launched the **[CLI-Hub](https://hkuds.github.io/CLI-Anything/hub/)** — a central registry where you can browse, search, and install any CLI with a single `pip` command. Contributors can add new CLIs or update existing ones by simply opening a PR with a `registry.json` entry. The hub updates automatically on merge.
> 
> - **2026-03-16** 🤖 Added **SKILL.md generation** (Phase 6.5) — every generated CLI now ships with an AI-discoverable skill definition inside the Python package. ReplSkin auto-detects the skill file after `pip install`, and the REPL banner displays the absolute path for agents. Includes `skill_generator.py`, Jinja2 template, `package_data` in all setup.py files, and 51 new tests.
> 
> - **2026-03-15** 🐾 Support for **OpenClaw** from the community! Merged Windows `cygpath` guard to ensure CLI-Anything works reliably in Windows bash environments. Community contributions continue to strengthen cross-platform support.
> 
> - **2026-03-14** 🔒 Fixed a GIMP Script-Fu path injection vulnerability and added **Japanese README** translation. OpenCode version requirements documented alongside several Windows compatibility improvements.
> 
> Earlier news
> 
> - **2026-03-13** 🔌 **Qodercli** plugin officially merged as a community contribution with dedicated setup scripts. Codex skill gained a Windows install script, and placeholder URLs were cleaned up across the project.
> 
> - **2026-03-12** 📦 **Codex skill** integration landed, bringing CLI-Anything to yet another AI coding platform. Qodercli support was also introduced, and documentation was updated with limitations and experimental labels.
> 
> - **2026-03-11** 📞 **Zoom** video conferencing harness added as the 11th supported application. Multiple community fixes shipped for Shotcut auto-save, LibreOffice Windows/macOS backend, and OpenCode support.
> 
> ---
> 
> 
> ### Pick Your Platform
> 
> ⚡ Claude Code
> 
> **Step 1: Add the Marketplace**
> 
> CLI-Anything is distributed as a Claude Code plugin marketplace hosted on GitHub.
> 
> ```bash
> 
> # Add the CLI-Anything marketplace
> /plugin marketplace add HKUDS/CLI-Anything
> ```
> 
> **Step 2: Install the Plugin**
> 
> ```bash
> 
> # /cli-anything:cli-anything 
> 
> # Generate a complete CLI for GIMP (all 7 phases)
> /cli-anything:cli-anything ./gimp
> 
> 
> # Note: If your Claude Code is under 2.x, use "/cli-anything" instead.
> ```
> 
> This runs the full pipeline:
> 1. 🔍 **Analyze** — Scans source code, maps GUI actions to APIs
> 2. 📐 **Design** —

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[Agent 框架]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[karpathy--agenthub|karpathy/agenthub]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/HKUDS/CLI-Anything)

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
> const concepts = ["CLI/TUI","Agent 框架","自動化"];
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
