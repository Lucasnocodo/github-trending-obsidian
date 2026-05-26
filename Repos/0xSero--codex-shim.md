---
repo: 0xSero/codex-shim
url: https://github.com/0xSero/codex-shim
owner: 0xSero
owner_type: User
language: Python
license: MIT
description: "Local Responses-API shim that exposes Factory BYOK models (and optional ChatGPT GPT-5.5 passthrough) to Codex Desktop."
homepage: ""
stars: 593
stars_per_day: 198
forks: 51
open_issues: 2
created: 2026-05-22
pushed_at: 2026-05-25
first_seen: 2026-05-26
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "模型整合"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "讓 Codex Desktop 支援任何 BYOK 模型，並可選擇性地透過 ChatGPT GPT-5.5 進行通訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-02"
contributor_count: 2
engagement: "low"
issue_close_rate: 60
repo_size_kb: 103
readme_length: 9995
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-26"
star_history: "2026-05-26:593,2026-05-26:593"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "codex-shim"
  - "0xSero/codex-shim"
  - "讓 Codex Desktop 支援任何 BYOK 模型，並可選擇性地透過 ChatGPT GPT-5.5 進行通訊。"
---

# codex-shim

**593** stars · **198** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/0xSero--codex-shim");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 讓 Codex Desktop 支援任何 BYOK 模型，並可選擇性地透過 ChatGPT GPT-5.5 進行通訊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (198 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Codex Desktop 中使用多種 BYOK 模型的開發者。
> **一句話重點** codex-shim 讓開發者能夠在 Codex Desktop 中靈活使用多種 AI 模型，這在當前的開發環境中是非常有價值的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/0xSero--codex-shim");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模型整合" && p.file.name !== "0xSero--codex-shim" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模型整合 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到靈活的模型整合能力，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於能夠無縫整合多種 BYOK 模型到 Codex Desktop 中，而不需要重建 Codex。

## 專案簡介

Codex-shim 是一個本地的 Python/aiohttp 伺服器，能讓 Codex Desktop 使用任何 BYOK 模型，並可選擇性地將請求傳遞至 ChatGPT 的 GPT-5.5 模型。使用者只需在 `~/.codex-shim/models.json` 中描述模型，shim 會將請求路由至相應的上游 API，並將回應格式轉換為 Codex 所需的格式。這樣的設計使得 Codex 能夠在不重建的情況下，直接使用本地模型，提升了使用的靈活性和效率。關鍵指令如 `codex-shim generate` 和 `codex-shim start` 可用於生成模型目錄並啟動 shim 伺服器，讓使用者能夠在本地環境中輕鬆運行。這個工具的賣點在於它能夠無縫整合多種模型，並保持 Codex 的原生用戶體驗。

技術上，該專案依賴於 aiohttp 來處理 HTTP 請求，並支援 Windows、macOS 和 Linux 等多個平台，這使得它具有良好的跨平台兼容性。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，codex-shim 提供了更靈活的模型路由選擇，並且能夠在不改變 Codex 的情況下，輕鬆添加新的模型。實際使用中，使用者可能會遇到如模型未顯示的問題，這在熱門問題中已被提及，顯示出社群對此工具的關注。總體來說，codex-shim 是一個仍在開發中的 alpha 階段專案，適合需要在 Codex 中使用多種模型的開發者，未來可能會進一步增強功能和穩定性。

**技術棧**：`Python 3.11` · `aiohttp`

## 重點功能

- 支持多種模型 — 可在 `~/.codex-shim/models.json` 中配置多個 BYOK 模型。
- 本地伺服器 — 使用 aiohttp 提供 OpenAI Responses 兼容的端點，支持跨平台運行。
- ChatGPT passthrough — 可選擇性地將請求路由至 ChatGPT GPT-5.5 模型。
- CLI 支援 — 提供簡單的命令行介面，使用者可快速執行模型請求。
- 模型生成與管理 — 自動生成模型目錄，並提供模型狀態檢查功能。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/0xSero/codex-shim ~/codex-shim && cd ~/codex-shim && python3 -m pip install --user -e .
```
2. 生成模型目錄
```bash
codex-shim generate
```
3. 啟動 shim 伺服器
```bash
codex-shim start
```
4. 檢查模型狀態
```bash
codex-shim status
```

## 程式碼範例

```python
{
  "前置條件": "需要在 `~/.codex-shim/models.json` 中配置模型。",
  "指令": "codex-shim codex -- \"inspect this repo and summarize the architecture\"",
  "預期輸出": "將返回對指定 repo 的架構摘要。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 593 stars（198/天），forks 51（8.6%），這顯示出該專案的快速增長。作者 0xSero 之前參與過多個開源專案，這次專案解決了 Codex Desktop 無法直接使用 BYOK 模型的痛點，讓開發者能夠更靈活地使用不同的 AI 模型。社群對於這個工具的需求和關注，可能來自於對於 AI 模型整合的迫切需求，尤其是在多模型環境下的應用。這個工具的出現，正好填補了這一市場空白。

## 適合誰使用

**目標受眾**：需要在 Codex Desktop 中使用多種 BYOK 模型的開發者。

> [!example] 使用場景
> - 後端工程師用它來在本地環境中運行 Codex Desktop，因為這樣可以靈活地使用多種 AI 模型，而不需要重建 Codex。
> - AI 研究人員用它來測試不同的 BYOK 模型，因為它能夠快速切換模型並比較性能，節省了大量的測試時間。
> - 開發者用它來整合 ChatGPT 的功能到 Codex 中，因為這樣可以利用 ChatGPT 的強大能力，提升 Codex 的應用範圍。

## 架構分析

codex-shim 採用本地伺服器架構，使用 aiohttp 處理 HTTP 請求，並將請求路由至相應的上游 API。這樣的設計使得模型的整合變得靈活且高效。伺服器運行在本地環境中，並不面向互聯網，這降低了安全風險。

選擇 aiohttp 是因為它輕量且易於使用，適合快速開發和部署。這種設計的代價在於需要使用者自行管理模型的配置和路由。擴展性方面，這個架構可以輕鬆添加新的模型，但可能會面臨配置文件管理的複雜性。

## 技術深入分析

codex-shim 的核心技術在於使用 aiohttp 作為 HTTP 請求的處理框架，這使得它能夠快速響應並處理來自 Codex 的請求。該工具能夠支持多種模型，並根據用戶的配置文件動態路由請求。效能方面，由於它是本地運行的伺服器，對於小型到中型的請求量能夠輕鬆應對，但在高負載情況下可能會出現瓶頸。選擇 Python 作為開發語言的好處在於其生態系統豐富，能夠快速開發和迭代，但也可能導致性能上的劣勢。技術風險方面，依賴於外部 API 的穩定性和可用性，若上游服務出現問題，將直接影響到使用者的體驗。整合方面，codex-shim 可以與現有的 CI/CD 流程相容，但需要額外的配置來確保無縫運行。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，對於新手來說相對友好。安裝過程在 macOS 和 Linux 上較為順暢，但在 Windows 上可能會遇到一些問題。文件中有針對不同平台的說明，幫助使用者快速上手。

## 優缺點分析

> [!success] 優點
> - 靈活的模型整合能力，支持多種 BYOK 模型。
> - 本地伺服器架構，降低了安全風險。
> - 無需重建 Codex，保持原生用戶體驗。

> [!danger] 缺點
> - 仍在 alpha 階段，穩定性可能不足。
> - 需要手動配置模型，對新手不友好。
> - 在 Windows 上的安裝過程較為繁瑣。

> [!warning] 注意事項
> - 僅支援 Python 3.11+。
> - 需要 Codex CLI/Desktop 已安裝並認證。
> - 在 Windows 上需要使用 PowerShell/cmd 進行安裝。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的模型整合功能，但主要針對特定的代理模型，而 codex-shim 更加通用，支持多種模型的靈活配置。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接入，而 codex-shim 支援更廣泛的模型和本地運行的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的代理模型整合，而 codex-shim 提供更廣泛的模型支持。 | 如果你的需求主要是針對特定代理模型的整合，則可以選擇 agent-sprite-forge。 | medium，因為需要重新配置模型和路由。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接入，而 codex-shim 支援多種模型的靈活配置。 | 如果你的專案主要使用 GPT-2 模型，則 gpt2api 可能更合適。 | low，因為 API 接入相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-shim** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的代理模型整合，而 codex-shim 提供更廣泛的模型支持。 | 專注於 GPT-2 模型的 API 接入，而 codex-shim 支援多種模型的靈活配置。 |
> | 遷移成本 | - | medium，因為需要重新配置模型和路由。 | low，因為 API 接入相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是針對特定代理模型的整合，則可以選擇 age | 如果你的專案主要使用 GPT-2 模型，則 gpt2api  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對 Codex Desktop 有需求的開發者進行試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝後模型未顯示在 Codex 中，可能是配置錯誤。
  - 解法：檢查 `~/.codex-shim/models.json` 的配置是否正確。
- [MEDIUM] 在 Windows 上安裝過程可能會遇到權限問題。
  - 解法：確保以管理員身份運行 PowerShell。
- [MEDIUM] 伺服器啟動後無法訪問，可能是防火牆設置問題。
  - 解法：檢查防火牆設置，確保允許 127.0.0.1:8765 的訪問。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要在 Codex 中使用多種模型 | 非常適合 | 因為它能夠靈活地整合多種模型，提升開發效率。 |
| 大型企業需要穩定的 AI 模型服務 | 不適合 | 因為目前仍在 alpha 階段，穩定性不足。 |
| 個人開發者希望快速測試新模型 | 適合 | 因為安裝和使用都相對簡單，適合快速迭代。 |
| 需要在生產環境中使用的核心功能 | 不適合 | 因為 API 穩定性和功能尚未成熟。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到靈活的模型整合能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不會存取敏感資料。依賴的外部 API 需確保安全性，並在 CI/CD 中使用時需謹慎配置。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

codex-shim 可以與 Codex Desktop 和 CLI 工具無縫整合，適合在開發過程中使用。實際整合範例包括在使用 Next.js 的專案中，開發者可以使用 codex-shim 來快速測試和集成不同的 AI 模型。該工具支援 GitHub Actions 等 CI 工具，並可與 VS Code 等 IDE 整合，提升開發效率。整合過程中，最常見的問題是模型配置錯誤，使用者需仔細檢查配置文件。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 codex-shim 出現之前，開發者需要手動重建 Codex 或使用固定的模型配置，這樣的方式不夠靈活且效率低下。隨著多種 AI 模型的興起，開發者對於能夠靈活整合不同模型的需求越來越強烈。codex-shim 的出現正好滿足了這一需求，並且在技術上實現了更高的靈活性和效率。

未來，隨著 AI 技術的進步，這類工具將會越來越普及。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的 API 設計
- 有使用 Codex 的經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品中進行實驗性使用。

**成功指標**：測試和集成新模型的時間減少 30%。

> [!warning] 退出計畫
> 所有配置文件均為標準 JSON 格式，能夠輕鬆轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/0xSero--codex-shim");
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
> const me = dv.page("Repos/0xSero--codex-shim");
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
| Forks | 51 |
| Open Issues | 2 |
| Issue 解決率 | 60% (3 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-22 |
| Repo 大小 | 103 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/0xSero/codex-shim) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@OnlyTerp](https://github.com/OnlyTerp) | 8 |
> | [@0xSero](https://github.com/0xSero) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的提交和問題回應。
**連結**：[文件](https://github.com/0xSero/codex-shim)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-22 ~ 2026-05-25）
> **活躍天數** 2 天 · **最新 commit** Harden chat translation for strict providers.

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/0xSero/codex-shim/issues/10) | codex-shim Desktop install shows shim loaded, but custom mod | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # codex-shim
> 
> Run **Codex Desktop** against any BYOK model you can describe in
> `~/.codex-shim/models.json`, plus an optional passthrough to your **ChatGPT
> subscription's Codex model** — without rebuilding Codex.
> 
> The shim is a local Python/aiohttp server that exposes an OpenAI
> Responses-compatible endpoint on loopback. Codex points at the shim; the shim
> routes each request to the matching upstream (OpenAI chat completions,
> Anthropic Messages, a generic OpenAI-shaped chat endpoint, or ChatGPT Codex
> passthrough), then translates streaming responses back into the shape Codex
> expects.
> 
> > Tested on Codex Desktop **0.133.0-alpha.1** for macOS arm64. The shim server
> > and routing layer are plain Python/aiohttp and work on Windows, macOS, Linux,
> > WSL, and Git Bash. The only macOS-specific piece is the optional Desktop picker
> > ASAR patch, needed when Codex hides custom catalog entries.
> 
> ---
> 
> 
> ## Install
> 
> Recommended on macOS/Linux/WSL/Git Bash (installs the `codex-shim` entry
> point from `pyproject.toml`):
> 
> ```bash
> git clone https://github.com/0xSero/codex-shim ~/codex-shim
> cd ~/codex-shim
> python3 -m pip install --user -e .
> ```
> 
> Recommended on native Windows PowerShell/cmd:
> 
> ```powershell
> git clone https://github.com/0xSero/codex-shim $HOME\codex-shim
> cd $HOME\codex-shim
> py -3.11 -m pip install --user -e .
> ```
> 
> That pulls in `aiohttp` and installs the portable Python console command
> `codex-shim`. On POSIX-like shells, the optional `codex-app` and `codex-model`
> shortcuts live in `bin/`; symlink them if you want them on `PATH` too:
> 
> ```bash
> mkdir -p ~/.local/bin
> ln -sf "$PWD/bin/codex-app" ~/.local/bin/codex-app
> ln -sf "$PWD/bin/codex-model" ~/.local/bin/codex-model
> ```
> 
> If you move the checkout, recreate those symlinks; `codex-shim app` launches
> `codex app` through the installed Python entry point and does not need them.
> 
> Alternative on macOS/Linux/WSL/Git Bash (no install, run straight from the
> checkout):
> 
> ```bash
> git clone https://github.com/0xSero/codex-shim ~/codex-shim
> cd ~/codex-shim
> python3 -m pip install --user aiohttp
> mkdir -p ~/.local/bin
> ln -sf "$PWD/bin/codex-shim" ~/.local/bin/codex-shim
> ln -sf "$PWD/bin/codex-app" ~/.local/bin/codex-app
> ln -sf "$PWD/bin/codex-model" ~/.local/bin/codex-model
> ```
> 
> For running the test suite:
> 
> ```bash
> python3 -m pip install --user pytest pytest-asyncio
> ```
> 
> If your POSIX shell cannot find the commands, make sure `~/.local/bin` is on
> `PATH`:
> 
> ```bash
> export PATH="$HOME/.local/bin:$PATH"
> ```
> 
> If PowerShell cannot find `codex-shim`, add your Python user Scripts directory
> to `Path`. For Python 3.11 installed from python.org, the usual path is:
> 
> ```powershell
> $env:APPDATA\Python\Python311\Scripts
> ```
> 
> You can also skip `PATH` entirely and run through Python:
> 
> ```powershell
> py -3.11 -m codex_shim.cli status
> ```
> 
> ---
> 
> 
> ## Quick start
> 
> 
> ### 4. Use the Codex CLI without writing config
> 
> For one-off CLI runs, use inline `-c` overrides instead of changing
> `~/.codex/config.toml`:
> 
> ```bash
> codex-shim codex -- "inspect this repo and summarize the architecture"
> ```
> 
> ---
> 
> 
> ## Custom config file
> 
> The shim defaults to `~/.codex-shim/models.json`. If that file is missing, the
> shim still generates a catalog — and adds the `gpt-5.5` ChatGPT passthrough
> entry only when `~/.codex/auth.json` contains a valid `tokens.access_token`.
> You can point it at any compatible file:
> 
> ```bash
> codex-shim --settings /path/to/my-models.json generate
> codex-shim --settings /path/to/my-models.json start
> ```
> 
> Recommended schema:
> 
> ```json
> {
>   "models": [
>     {
>       "model": "gpt-5.5",
>       "provider": "openai",
>       "base_url": "https://api.openai.com/v1",
>       "api_key": "sk-…",
>       "display_name": "OpenAI GPT-5.5",
>       "max_context_limit": 400000
>     },
>     {
>       "model": "claude-opus-4-7-20251109",
>       "provider": "anthropic",
>       "base_url": "https://api.anthropic.com/v1",
>       "api_key": "sk-ant-…",
>       "display_name": "Claude Opus 4.7"
>     },
>     {
>       "model": "deepseek-v4-pro",
>       "provider": "anthropic",
>       "base_url": "https://api.deepseek.com/anthropic",
>       "api_key": "…",
>       "display_name": "DeepSeek V4 Pro",
>       "no_image_support": true
>     }
>   ]
> }
> ```
> 
> The loader also accepts camelCase aliases (`baseUrl`, `apiKey`, `displayName`,
> `maxContextLimit`, `maxOutputTokens`, `noImageSupport`, `extraHeaders`) and a
> legacy top-level `customModels` array, so existing model config exports can be
> used directly.
> 
> The shim **never copies your API keys** into the generated catalog. Keys stay
> in your settings file and are read fresh on every request.
> 
> Supported `provider` values:
> 
> | provider | upstream API |
> |---|---|
> | `openai` | OpenAI `/v1/chat/completions` |
> | `generic-chat-completion-api` | OpenAI-shaped chat completions |
> | `anthropic` | Anthropic `/v1/messages` |
> 
> Useful model fields:
> 
> | field | behavior |
> |---|---|
> | `display_name` | Human-readable picker label. |
> | `max_context_limit` | Catalog context window and compaction limits. |
> | `max_output_tokens` | Default max output when translating to Anthropic. |
> | `no_image_support` | When true, catalog advertises text-only input. |
> | `extra_headers` | Optional upstream headers merged into requests. |
> 
> 
> ## Benchmarking cost and speed
> 
> The right benchmark is an actual Codex task, not a synthetic hello-world
> completion. Measure the same repository, prompt, model, and tool budget across
> routes.
> 
> Suggested quick protocol:
> 
> 1. Pick one real task that uses tools, e.g. "find the bug, edit the file, run
>    the focused test".
> 2. Run it once through your baseline Codex route and once through `gpt-5.5`
>    passthrough or your BYOK model.
> 3. Record wall time, request count, prompt tokens, output tokens, tool-call
>    count, and final test result.
> 4. Compare only successful end-to-end runs.
> 
> Useful shell timing wrapper:
> 
> ```bash
> /usr/bin/time -f 'wall=%E cpu=%P max_rss_kb=%M' codex-shim codex -- "your task here"
> ```
> 
> The `--` separator is accepted and stripped by the wrapper. It is optional, but
> it keeps task prompts that start with `-` from being parsed as wrapper flags.
> 
> A good report looks like:
> 
> ```text
> Oracle: same repo commit, same prompt, same focused test command
> Baseline: 12 requests, 210k input tokens, 19k output tokens, 18m42s, test passed
> Shim:      8 requests,  31k input tokens, 11k output tokens,  2m35s, test passed
> Result:   6.8x fewer billed input tokens, 7.2x faster wall time
> ```
> 
> The exact multiplier depends on model, prompt catcher policy, repo size,
> network path, and how often the agent calls tools.
> 
> ---
> 
> 
> ## What this gives you
> 
> Codex Desktop only shows models allowed by its server-side config. If you have
> OpenAI / Anthropic / Z.ai / DeepSeek / Gemini / OpenRouter / local proxy models
> you want as first-class picker entries, this wires them in locally.
> 
> The practical win is that Codex keeps its native UX while model routing moves
> local:
> 
> - **BYOK models in the normal Codex picker.** No Codex rebuild, no request
>   replay workflow.
> - **Native Codex agent loops stay intact.** Function calls, tool outputs,
>   reasoning blocks, image-capable models, shell-command metadata, and streaming
>   SSE are translated instead of flattened into plain text.
> - **ChatGPT/Codex passthrough.** If `~/.codex/auth.json` has a valid Codex
>   access token, the shim can route Codex's native `/v1/responses` traffic to
>   ChatGPT's Codex backend under the `gpt-5.5` slug used by current Codex builds.
> - **Prompt-catching/proxy-friendly architecture.** Put a local proxy in front
>   of the shim to dedupe boilerplate, inject stable instructions, repair
>   pseudo-tool text, or route prompts by policy before they hit an upstream.
> - **Maintainer-side wins on real coding-agent runs.** In the maintainer's
>   internal Codex tasks, ChatGPT passthrough plus a prompt-catching proxy in
>   front of the shim has produced multi-x reductions in billed input tokens
>   and noticeably faster wall time vs. the baseline route. No reproducible
>   benchmark script ships with the repo yet, so treat that as anecdata — the
>   benchmark 

## 延伸閱讀

相關概念：[[API 設計]] · [[多模態]] · [[容器化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

[GitHub](https://github.com/0xSero/codex-shim)

## 相關收錄

> [!note]- 直接競品（同子分類：模型整合）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模型整合" AND file.name != "0xSero--codex-shim"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "0xSero--codex-shim"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "0xSero--codex-shim" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "0xSero--codex-shim"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","多模態","容器化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "0xSero--codex-shim" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/0xSero--codex-shim");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "0xSero--codex-shim" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "0xSero" AND file.name != "0xSero--codex-shim"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/0xSero--codex-shim");
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
> const me = dv.page("Repos/0xSero--codex-shim");
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
> const me = dv.page("Repos/0xSero--codex-shim");
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
> const me = dv.page("Repos/0xSero--codex-shim");
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
> const me = dv.page("Repos/0xSero--codex-shim");
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

> **2026-05-26** — 首次收錄
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

- [[2026-05-26|2026-05-26]] — 首次收錄，593 stars
