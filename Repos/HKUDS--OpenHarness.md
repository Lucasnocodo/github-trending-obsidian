---
repo: HKUDS/OpenHarness
url: https://github.com/HKUDS/OpenHarness
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenHarness: Open Agent Harness\""
homepage: ""
stars: 7764
stars_per_day: 1109
forks: 1375
open_issues: 18
created: 2026-04-01
pushed_at: 2026-04-08
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供輕量級的代理人基礎架構，支援多種工具和技能的整合。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 58
repo_size_kb: 9536
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7142,2026-04-08:7164,2026-04-09:7764"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "OpenHarness"
  - "HKUDS/OpenHarness"
  - "提供輕量級的代理人基礎架構，支援多種工具和技能的整合。"
---

# OpenHarness

**7.8k** stars · **1.1k** stars/天 · 建立 7 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HKUDS--OpenHarness");
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
> 提供輕量級的代理人基礎架構，支援多種工具和技能的整合。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望快速構建和測試代理人系統的開發者，特別是對 AI 和自動化有興趣的團隊。
> **一句話重點** OpenHarness 的靈活性和擴展性使其成為構建多代理系統的理想選擇。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "HKUDS--OpenHarness" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到靈活的代理人系統，值得投入。

> [!abstract] 核心創新
> 提供了靈活的插件生態系統，允許用戶根據需求加載技能和工具。

## 專案簡介

OpenHarness 是一個開源的代理人基礎架構，專為多代理協作設計，能夠輕鬆整合各種工具和技能。用戶只需透過一個命令 `oh` 即可啟動整個系統，並支援 CLI 代理整合，如 OpenClaw 和 nanobot。其核心功能包括流式工具調用循環、API 重試、並行工具執行、以及成本追蹤等，這些設計使得在多任務環境下的操作更加高效。技術上，OpenHarness 使用 Python 和 TypeScript，並依賴多個現代庫，如 `httpx` 和 `rich`，以確保高效的網絡請求和美觀的終端輸出。

與同類工具相比，如 `0xGF/boneyard` 和 `FreedomIntelligence/OpenClaw-Medical-Skills`，OpenHarness 提供了更靈活的插件生態系統，允許用戶根據需求加載技能和工具，這在處理複雜任務時特別有用。實際使用中，OpenHarness 能夠處理大量的請求和數據，但用戶需注意其配置的複雜性，特別是在多通道支持時。該專案目前處於 beta 階段，適合希望快速構建和測試代理人系統的開發者，未來可能會進一步增強其社群支持和功能擴展。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，特別是在需要快速實驗和迭代的情境下。

**技術棧**：`Python 3.10` · `TypeScript` · `Node.js 18+`

## 重點功能

- 流式工具調用循環 — 支援實時的工具調用和回應，提升多任務處理效率。
- 並行工具執行 — 同時運行多個工具，減少整體執行時間。
- API 重試與指數回退 — 在 API 請求失敗時自動重試，提升穩定性。
- 43 種工具支援 — 包括文件、Shell、搜索等，滿足多樣化需求。
- 持久記憶功能 — 能夠記錄和恢復會話歷史，增強用戶體驗。

## 快速開始

1. 一鍵安裝 OpenHarness
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
```
2. 從源碼安裝（供貢獻者使用）
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash -s -- --from-source
```
3. 運行範例命令
```bash
ANTHROPIC_API_KEY=your_key uv run oh -p "Inspect this repository and list the top 3 refactors"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 7764 stars（1109/天），forks 1375（17.7%），顯示出強烈的社群興趣。該專案由多位活躍貢獻者推動，解決了現有代理人系統在整合和擴展性上的不足。過去，開發者通常需要依賴多個不相容的工具來構建代理人系統，這不僅耗時，還增加了維護成本。最近的社交媒體討論和開源社群的反饋進一步推動了其曝光率。隨著開源生態的發展，這樣的工具越來越受到重視，特別是在 AI 和自動化領域。

## 適合誰使用

**目標受眾**：希望快速構建和測試代理人系統的開發者，特別是對 AI 和自動化有興趣的團隊。

> [!example] 使用場景
> - 後端工程師用它來快速構建多代理系統，因為其一鍵安裝和靈活的插件生態系統大幅降低了開發時間。
> - 數據科學家用它來整合多個 LLM 供應商，因為其支持多種 API 和工具的整合，能夠在不同模型間快速切換。
> - DevOps 工程師用它來監控和管理代理人執行的成本，因為其內建的成本追蹤功能能夠實時提供數據分析。

## 架構分析

OpenHarness 採用模組化設計，核心架構由 Python 和 TypeScript 組成，並使用 Node.js 提供的 React 終端 UI。這種設計使得用戶能夠根據需求靈活擴展功能，並能夠快速集成新的工具和技能。資料流方面，系統通過 API 調用和事件驅動的方式進行交互，確保了高效的響應時間和資源利用率。

選擇 Python 作為主要語言的原因在於其豐富的庫和活躍的社群，這使得開發和維護變得更加高效。儘管如此，這樣的設計也帶來了配置的複雜性，特別是在多通道支持的情況下，可能會導致用戶在初始設置時遇到困難。整體而言，這種模組化的架構使得 OpenHarness 在擴展性和靈活性上具有優勢，但也需要用戶具備一定的技術背景以充分發揮其潛力。

## 技術深入分析

OpenHarness 的核心技術機制是基於 Python 和 TypeScript 的模組化架構，這使得用戶能夠靈活地整合各種工具和技能。系統使用事件驅動的方式進行資料流處理，這樣的設計不僅提高了響應速度，還能有效管理資源。效能方面，OpenHarness 能夠處理大量的 API 請求，並支援並行執行，這對於需要高效能的應用場景非常重要。選擇 Python 作為主要開發語言的原因在於其強大的生態系統和豐富的庫，這使得開發者能夠快速實現功能，並降低了開發成本。

然而，這也帶來了配置的複雜性，特別是在多通道支持的情況下，可能會讓新手感到困惑。技術風險方面，隨著使用者數量的增加，系統的穩定性和效能可能會受到挑戰，特別是在高負載情況下。此外，對外部 API 的依賴程度也需要考慮，因為這可能會影響整體系統的可靠性。整合方面，OpenHarness 與主流工具鏈的相容性良好，能夠輕鬆集成到 CI/CD pipeline 中，這對於現代開發流程至關重要。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，對於新手來說相對友好。安裝過程流暢，並且提供了一鍵安裝的選項，減少了配置的麻煩。文件中有多種語言版本，對於不同背景的使用者來說更加方便。整體而言，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 模組化設計，便於擴展和整合新工具。
> - 豐富的功能支持，能夠滿足多樣化的需求。
> - 活躍的社群和貢獻者，持續推動專案發展。

> [!danger] 缺點
> - 配置過於複雜，對新手不友好。
> - 需要多個依賴，增加了安裝和維護成本。
> - 目前仍在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 配置過於複雜，特別是對於多通道支持時。
> - 需要安裝 Node.js 18+ 以使用 React 終端 UI，增加了環境依賴。
> - 目前仍在 beta 階段，可能存在不穩定的功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的代理人架構，但缺乏 OpenHarness 的靈活插件系統，適合對功能要求不高的簡單應用。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療領域的技能整合，而 OpenHarness 更加通用，適合多種場景的應用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的代理人架構，但缺乏 OpenHarness 的靈活插件系統。 | 如果你的需求不高，且希望使用一個簡單的代理人架構，Boneyard 會是一個不錯的選擇。 | low，因為兩者的基本概念相似，遷移成本較低。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療領域的技能整合，而 OpenHarness 更加通用，適合多種場景的應用。 | 如果你的應用場景專注於醫療領域，OpenClaw 會提供更專業的工具和技能支持。 | medium，因為需要根據不同的功能需求進行調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenHarness** | **boneyard** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供類似的代理人架構，但缺乏 OpenHarness 的靈活插件系統。 | OpenClaw 專注於醫療領域的技能整合，而 OpenHarness 更加通用，適合多種場景的應用。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，遷移成本較低。 | medium，因為需要根據不同的功能需求進行調整。 |
> | 適用場景 | 主要場景 | 如果你的需求不高，且希望使用一個簡單的代理人架構，Boney | 如果你的應用場景專注於醫療領域，OpenClaw 會提供更專 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 配置過於複雜，特別是在多通道支持時，可能導致安裝失敗。
  - 解法：仔細閱讀文檔，確保所有依賴都已安裝。
- [MEDIUM] 在某些環境下，API 請求可能會超時。
  - 解法：檢查網絡連接並調整 API 重試設置。
- [MEDIUM] 某些工具的兼容性問題，可能導致功能無法正常運行。
  - 解法：查看社群討論，尋找相似問題的解決方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 其一鍵安裝和靈活的插件生態系統能夠快速滿足需求。 |
| 大型企業的多代理系統 | 普通 | 雖然功能強大，但配置複雜性可能會成為障礙。 |
| AI 研究團隊的實驗環境 | 適合 | 其靈活性和快速迭代的能力非常適合實驗性質的工作。 |
| 個人開發者的工具整合 | 非常適合 | 簡單的安裝流程和多樣的功能支持使其成為理想選擇。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到靈活的代理人系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenHarness 本身不需要高權限，但需妥善管理 LLM API 密鑰，避免敏感資料外洩。依賴的庫需定期更新以防止安全漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
| Forks | 1.4k |
| Open Issues | 18 |
| Issue 解決率 | 58% (25 closed) |
| 最後推送 | 2026-04-08 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 9.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/OpenHarness) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "TypeScript" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 124 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 32 |
> | [@siaochuan](https://github.com/siaochuan) | 5 |
> | [@glitch-ux](https://github.com/glitch-ux) | 4 |
> | [@yohaann196](https://github.com/yohaann196) | 4 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/HKUDS/OpenHarness/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-08）
> **活躍天數** 1 天 · **最新 commit** release: ship 0.1.5

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/HKUDS/OpenHarness/issues/18) | [Discussion] Run-level evidence layer: structured archive fo | 1 | 1 |
> | [#10](https://github.com/HKUDS/OpenHarness/issues/10) | [Feature]: Need demo or README.md for how to add various LLM `enhancement` | 1 | 1 |
> | [#81](https://github.com/HKUDS/OpenHarness/issues/81) | [Bug]: 交互界面一直闪烁 `bug` | 0 | 0 |
> | [#77](https://github.com/HKUDS/OpenHarness/issues/77) | Configuration is too complex | 0 | 1 |
> | [#75](https://github.com/HKUDS/OpenHarness/issues/75) | [Bug]: run bash  xxx and  write_file report Permission denie `bug` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; oh — OpenHarness: Open Agent Harness
> 
>   English ·
>   简体中文
> 
> **OpenHarness** delivers core lightweight agent infrastructure: tool-use, skills, memory, and multi-agent coordination.
> 
> **Join the community**: contribute **Harness** for open agent development.
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
>   
> 
> One Command (**oh**) to Launch **OpenHarness** and Unlock All Agent Harnesses. 
> 
> Supports CLI agent integration including OpenClaw, nanobot, Cursor, and more.
> 
>   
> 
>   
> 
> ---
> 
> ## 🚀 Quick Start
> 
> 
> ### One-Click Install
> 
> The fastest way to get started — a single command handles OS detection, dependency checks, and installation:
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
> ```
> 
> **Options:**
> 
> | Flag | Description |
> |------|-------------|
> | `--from-source` | Clone from GitHub and install in editable mode (`pip install -e .`) |
> | `--with-channels` | Also install IM channel dependencies (`slack-sdk`, `python-telegram-bot`, `discord.py`) |
> 
> ```bash
> 
> # Install from source (for contributors / latest code)
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash -s -- --from-source
> 
> 
> # Install with IM channel support
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash -s -- --with-channels
> 
> 
> ### Prerequisites
> 
> - **Python 3.10+** and [uv](https://docs.astral.sh/uv/)
> - **Node.js 18+** (optional, for the React terminal UI)
> - An LLM API key
> 
> 
> ### Install & Run
> 
> ```bash
> 
> # Clone and install
> git clone https://github.com/HKUDS/OpenHarness.git
> cd OpenHarness
> uv sync --extra dev
> 
> 
> # Development setup
> git clone https://github.com/HKUDS/OpenHarness.git
> cd OpenHarness
> uv sync --extra dev
> uv run pytest -q  # Verify everything works
> ```
> 
> Useful contributor entry points:
> 
> - [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup, checks, and PR expectations
> - [`CHANGELOG.md`](CHANGELOG.md) for user-visible changes
> - [`docs/SHOWCASE.md`](docs/SHOWCASE.md) for real-world usage patterns worth documenting
> 
> ---
> 
> 
> ### One-Command Demo
> 
> ```bash
> ANTHROPIC_API_KEY=your_key uv run oh -p "Inspect this repository and list the top 3 refactors"
> ```
> 
> 
> # Example: use Kimi as the backend
> export ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic
> export ANTHROPIC_API_KEY=your_kimi_api_key
> export ANTHROPIC_MODEL=kimi-k2.5
> 
> 
> ## ✨ OpenHarness's Key Harness Features
> 
> 🔄 Agent Loop
> 
>   
> 
> • Streaming Tool-Call Cycle
> • API Retry with Exponential Backoff
> • Parallel Tool Execution
> • Token Counting & Cost Tracking
> 
> 🔧 Harness Toolkit
> 
>   
> 
> • 43 Tools (File, Shell, Search, Web, MCP)
> • On-Demand Skill Loading (.md)
> • Plugin Ecosystem (Skills + Hooks + Agents)
> • Compatible with anthropics/skills & plugins
> 
> 🧠 Context & Memory
> 
>   
> 
> • CLAUDE.md Discovery & Injection
> • Context Compression (Auto-Compact)
> • MEMORY.md Persistent Memory
> • Session Resume & History
> 
> 🛡️ Governance
> 
>   
> 
> • Multi-Level Permission Modes
> • Path-Level & Command Rules
> • PreToolUse / PostToolUse Hooks
> • Interactive Approval Dialogs
> 
> 🤝 Swarm Coordination
> 
>   
> 
> • Subagent Spawning & Delegation
> • Team Registry & Task Management
> • Background Task Lifecycle
> • ClawTeam Integration (Roadmap)
> 
> ---
> 
> 
> ## ✨ Features
> 
> 
> ### Configure A Workflow
> 
> Use the unified setup flow instead of manually thinking about `auth -> provider -> model`:
> 
> ```bash
> uv run oh setup
> ```
> 
> `oh setup` walks through:
> 
> 1. Choose a workflow:
>    - `Anthropic-Compatible API`
>    - `Claude Subscription`
>    - `OpenAI-Compatible API`
>    - `Codex Subscription`
>    - `GitHub Copilot`
> 2. For compatible API families, choose a concrete backend preset
> 3. If needed, authenticate the selected workflow
> 4. Pick or confirm the model
> 5. Save and activate the profile
> 
> Compatible API families currently guide you through presets such as:
> 
> - `Anthropic-Compatible API`:
>   - Claude official
>   - Moonshot / Kimi
>   - Zhipu / GLM
>   - MiniMax
> - `OpenAI-Compatible API`:
>   - OpenAI official
>   - OpenRouter
> 
> Arbitrary compatible endpoints are still supported through advanced profile commands:
> 
> ```bash
> oh provider add my-endpoint \
>   --label "My Endpoint" \
>   --provider anthropic \
>   --api-format anthropic \
>   --auth-source anthropic_api_key \
>   --model my-model \
>   --base-url https://example.com/anthropic
> ```
> 
> OpenHarness stores API-key-backed compatible profiles with profile-scoped credentials when appropriate, so different compatible endpoints do not have to share one global key.
> 
>   
> 
> 
> ### Compatible API Families
> 
> #### Anthropic-Compatible API
> 
> Typical examples:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **Claude official** | `https://api.anthropic.com` | `claude-sonnet-4-6`, `claude-opus-4-6` |
> | **Moonshot / Kimi** | `https://api.moonshot.cn/anthropic` | `kimi-k2.5` |
> | **Zhipu / GLM** | custom Anthropic-compatible endpoint | `glm-4.5` |
> | **MiniMax** | custom Anthropic-compatible endpoint | `minimax-m1` |
> 
> #### OpenAI-Compatible API
> 
> Any provider implementing the OpenAI `/v1/chat/completions` style API works:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **OpenAI** | `https://api.openai.com/v1` | `gpt-5.4`, `gpt-4.1` |
> | **OpenRouter** | `https://openrouter.ai/api/v1` | provider-specific |
> | **Alibaba DashScope** | `https://dashscope.aliyuncs.com/compatible-mode/v1` | `qwen3.5-flash`, `qwen3-max`, `deepseek-r1` |
> | **DeepSeek** | `https://api.deepseek.com` | `deepseek-chat`, `deepseek-reasoner` |
> | **GitHub Models** | `https://models.inference.ai.azure.com` | `gpt-4o`, `Meta-Llama-3.1-405B-Instruct` |
> | **SiliconFlow** | `https://api.siliconflow.cn/v1` | `deepseek-ai/DeepSeek-V3` |
> | **Groq** | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
> | **Ollama (local)** | `http://localhost:11434/v1` | any local model |
> 
> 
> ### GitHub Copilot Format (`--api-format copilot`)
> 
> Use your existing GitHub Copilot subscription as the LLM backend. Authentication uses GitHub's OAuth device flow — no API keys needed.
> 
> ```bash
> 
> # Configure gateway channels and pick a provider profile
> ohmo config
> 
> 
> ## 🤔 What is an Agent Harness?
> 
> An **Agent Harness** is the complete infrastructure that wraps around an LLM to make it a functional agent. The model provides intelligence; the harness provides **hands, eyes, memory, and safety boundaries**.
> 
>   
> 
> OpenHarness is an open-source Python implementation designed for **researchers, builders, and the community**:
> 
> - **Understand** how production AI agents work under the hood
> - **Experiment** with cutting-edge tools, skills, and agent coordination patterns
> - **Extend** the harness with custom plugins, providers, and domain knowledge
> - **Build** specialized agents on top of proven architecture
> 
> ---
> 
> 
> ## 📰 What's New
> 
> - **2026-04-06** 🚀 **v0.1.2** — Unified setup flows and `ohmo` personal-agent app:
>   - `oh setup` now guides provider selection as workflows instead of exposing raw auth/provider internals
>   - Compatible API setup is now profile-scoped, so Anthropic/OpenAI-compatible endpoints can keep separate keys
>   - `ohmo` ships as a packaged app with `~/.ohmo` workspace, gateway, bootstrap prompts, and channel config flow
> - **2026-04-01** 🎨 **v0.1.0** — Initial **OpenHarness** open-source release featuring complete Harness architecture: 
> 
>   Start here:
>   Quick Start ·
>   Provider Compatibility ·
>   Showcase ·
>   Contributing ·
>   Changelog
> 
> ---
> 
> 
> # Or run locally after cloning
> bash scripts/install.sh --from-source --with-channels
> ```
> 
> The script will:
> 1. Detect your OS (Linux / macOS / WSL)
> 2. Verify Python ≥ 3.10 and Node.js ≥ 18
> 3. Install OpenHarness via `pip`
> 4. Set up the React TUI (`npm install`) if Node.js is available
> 5. Create `~/.openharness/` config directory
> 6. Confirm with `oh --version`
> 
> 
> # Launch
> oh                    # if venv is activated
> uv run oh             # without activating venv
> ```
> 
> 
> ### Non-Interactive Mode (Pipes & Scripts)
> 
> ```bash
> 
> # Single prompt → stdout
> oh -p "Explain this codebase"
> 
> 
> # JSON output for programmatic use
> oh -p "List all functions in main.py

## 延伸閱讀

相關概念：[[自動化]] · [[多模態]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]]

[GitHub](https://github.com/HKUDS/OpenHarness)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--OpenHarness" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","多模態","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--OpenHarness" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--OpenHarness" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 首次收錄，7.1k stars
