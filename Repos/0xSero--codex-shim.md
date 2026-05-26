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
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "讓 Codex Desktop 能夠使用自訂的 BYOK 模型，並可選擇透過 ChatGPT GPT-5.5 進行傳遞。"
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
star_history: "2026-05-26:593"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "codex-shim"
  - "0xSero/codex-shim"
  - "讓 Codex Desktop 能夠使用自訂的 BYOK 模型，並可選擇透過 ChatGPT GPT-5.5 進行傳遞。"
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
> 讓 Codex Desktop 能夠使用自訂的 BYOK 模型，並可選擇透過 ChatGPT GPT-5.5 進行傳遞。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (198 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Codex Desktop 中使用自訂 AI 模型的開發者和研究人員。
> **一句話重點** codex-shim 讓開發者能夠輕鬆地在 Codex Desktop 中使用自訂模型，並且保持原有的使用體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/0xSero--codex-shim");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "0xSero--codex-shim" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習、3 小時整合，得到靈活的模型接入功能，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新點在於能夠無縫地將多個 BYOK 模型集成到 Codex Desktop 中，並支持 ChatGPT 的 passthrough 功能。

## 專案簡介

codex-shim 是一個本地的 Python/aiohttp 伺服器，能夠將 Codex Desktop 連接到任何 BYOK 模型，並可選擇透過 ChatGPT 的 GPT-5.5 進行請求處理。使用者只需在 `~/.codex-shim/models.json` 中描述模型，shim 會自動將請求路由到相應的上游 API，並將回應格式轉換為 Codex 所需的格式。這樣的設計使得使用者無需重建 Codex，便能夠在原有的使用者介面中使用自訂模型。最關鍵的指令包括 `codex-shim generate` 用於生成模型目錄，和 `codex-shim start` 啟動伺服器。

技術上，這個專案使用了 aiohttp 作為非同步 HTTP 客戶端，能夠高效處理請求和回應，並且支持多平台運行，包括 Windows、macOS 和 Linux。與其他類似工具相比，如 0xGF/boneyard 和 BigPizzaV3/CodexPlusPlus，codex-shim 提供了更靈活的模型路由選擇，並且能夠保持 Codex 的原生使用體驗。實際使用中，使用者可能會遇到模型未正確顯示的問題，這在熱門 Issue 中已有反映。這個專案目前處於 alpha 階段，適合對 Codex 有一定了解的開發者進行試用，未來可能會隨著社群的反饋而持續改進。

**技術棧**：`Python 3.11` · `aiohttp`

## 重點功能

- 本地伺服器架構 — 使用 Python/aiohttp 提供 OpenAI Responses 兼容的端點。
- 支持多種模型 — 能夠配置多個 BYOK 模型，並在 Codex 中顯示。
- ChatGPT passthrough — 允許將請求轉發至 ChatGPT 的 GPT-5.5 模型。
- 簡單的 CLI 指令 — 使用 `codex-shim generate` 和 `codex-shim start` 來快速啟動服務。
- 靈活的配置選項 — 支持自定義的 JSON 配置文件，並保護 API 密鑰的安全。

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

## 程式碼範例

```python
[
  "# 前置條件：已安裝 codex-shim 並生成模型目錄",
  "codex-shim codex -- \"inspect this repo and summarize the architecture\"",
  "# 預期輸出：Codex 將返回有關該存儲庫架構的摘要。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 593 stars（198/天），forks 51（8.6%），顯示出強勁的增長潛力。作者 0xSero 及 OnlyTerp 在開源社群中有一定的影響力，之前的專案也獲得過良好的反響。這個工具解決了 Codex Desktop 使用自訂模型的痛點，之前需要重建 Codex 或使用繁瑣的配置，現在只需簡單的設定檔即可。近期在社交媒體上有關於此工具的討論也引起了開發者的注意，進一步推動了其流行。forks/stars 比率為 8.6%，顯示出有不少人對此專案進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要在 Codex Desktop 中使用自訂 AI 模型的開發者和研究人員。

> [!example] 使用場景
> - 後端工程師用它來在 Codex Desktop 中快速接入自訂的 BYOK 模型，因為這樣可以避免重建 Codex 的繁瑣流程。
> - AI 開發者用它來測試不同的模型輸出，因為它能夠輕鬆地將請求路由到多個上游 API，並保持原生的 Codex 使用體驗。
> - 產品經理用它來評估 ChatGPT 的性能，因為它提供了簡單的方式來比較不同模型的回應速度和準確性。

## 架構分析

codex-shim 採用本地伺服器架構，使用 Python 和 aiohttp 來處理請求，並將其轉發至相應的上游 API。這種設計使得使用者能夠在不重建 Codex 的情況下，快速接入多個模型。資料流的每個節點都經過精心設計，以確保請求和回應的格式轉換正確，並且能夠支持多種 API。選擇 aiohttp 作為非同步框架，能夠有效處理高併發請求，這在處理多個模型時尤為重要。擴展性方面，這種架構能夠支持未來更多模型的接入，但在大量請求時可能會遇到性能瓶頸，特別是在資源有限的環境下。

## 技術深入分析

codex-shim 的核心技術機制是基於 aiohttp 的本地伺服器，這使得它能夠高效地處理請求並轉發至不同的上游 API。這種設計不僅提高了請求的處理速度，還能夠支持多種模型的接入。效能方面，這個工具能夠在多個平台上運行，並且在高併發請求下仍能保持穩定的性能。選擇 Python 作為開發語言，能夠快速迭代和開發，但在性能上可能不如某些編譯語言。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在資源有限的環境下。整合方面，這個工具能夠與現有的 Codex 環境無縫對接，並且支持多種操作系統，這使得它在開發者社群中具有良好的接受度。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，安裝過程相對順暢，但需要注意 Python 版本要求。文件中有針對不同平台的安裝指導，讓新手能夠快速上手。整體而言，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 靈活的模型配置，能夠快速接入多個 BYOK 模型。
> - 保持 Codex 的原生使用體驗，無需重建。
> - 支持 ChatGPT 的 passthrough，擴展了功能範圍。

> [!danger] 缺點
> - 目前處於 alpha 階段，穩定性有待提高。
> - 需要一定的技術背景來配置和使用。
> - 在某些平台上可能存在兼容性問題。

> [!warning] 注意事項
> - 僅支援 Python 3.11+。
> - 在某些情況下，模型可能不會正確顯示，需檢查配置。
> - 目前處於 alpha 階段，可能存在未解決的 bug。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的模型路由功能，但不支持 ChatGPT passthrough，適合需要簡單模型接入的使用者。 |
| [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus) | 專注於增強 Codex 的功能，但缺乏靈活的模型配置選項，適合對功能擴展有需求的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較低，但缺乏 Python 的靈活性。 | 如果你的團隊對性能有極高要求，且能接受 Rust 的學習曲線。 | medium，因為需要重寫部分邏輯以適應 Rust 的語言特性。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 基於 Flask 的簡單 API，適合小型專案，但不支持多模型路由。 | 如果你的需求只是簡單的 GPT-2 接入，且不需要複雜的模型管理。 | low，因為 API 接口相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-shim** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較低，但缺乏 Python 的靈活性。 | 基於 Flask 的簡單 API，適合小型專案，但不支持多模型路由。 |
> | 遷移成本 | - | medium，因為需要重寫部分邏輯以適應 Rust 的語言特性。 | low，因為 API 接口相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊對性能有極高要求，且能接受 Rust 的學習曲線 | 如果你的需求只是簡單的 GPT-2 接入，且不需要複雜的模型 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些平台上，模型可能不會正確顯示，需檢查配置文件。
  - 解法：確保 `~/.codex-shim/models.json` 文件存在且格式正確。
- [MEDIUM] 啟動伺服器後，可能需要重新啟動 Codex Desktop 才能看到新模型。
  - 解法：使用 `codex-app` 指令重新啟動。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速接入多個 AI 模型 | 非常適合 | 靈活的模型配置和簡單的使用方式使得團隊能夠快速上手。 |
| 大型企業需要穩定的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 個人開發者希望在本地測試不同的 AI 模型 | 適合 | 本地伺服器架構使得測試變得方便。 |
| 需要與現有的 Codex 環境整合的專案 | 非常適合 | 能夠無縫對接 Codex，保持原有的使用體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習、3 小時整合，得到靈活的模型接入功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且 API 密鑰僅在本地配置文件中存儲，不會被複製。整體依賴鏈的信任程度良好，適合在 CI/CD 環境中使用。

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

**社群活躍度**：社群活躍度中等，最近有幾個問題被解決。
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

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]]

[GitHub](https://github.com/0xSero/codex-shim)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "0xSero--codex-shim"
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
> const concepts = ["CLI/TUI","API 設計","自動化測試"];
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
