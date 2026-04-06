---
repo: Gitlawb/openclaude
url: https://github.com/Gitlawb/openclaude
owner: Gitlawb
owner_type: Organization
language: TypeScript
license: NOASSERTION
description: "Open Claude Is Open-source coding-agent CLI for OpenAI, Gemini, DeepSeek, Ollama, Codex, GitHub Models, and 200+ models via OpenAI-compatible APIs."
homepage: ""
stars: 16481
stars_per_day: 4120
forks: 5767
open_issues: 81
created: 2026-04-01
pushed_at: 2026-04-05
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供統一 CLI 介面，整合多種 AI 模型的編碼代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-09"
contributor_count: 5
engagement: "high"
issue_close_rate: 52
repo_size_kb: 10064
readme_length: 8272
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3599,2026-04-02:3635,2026-04-03:7609,2026-04-03:7630,2026-04-04:11768,2026-04-04:11794,2026-04-05:14725,2026-04-05:14735,2026-04-06:16481"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "openclaude"
  - "Gitlawb/openclaude"
  - "提供統一 CLI 介面，整合多種 AI 模型的編碼代理。"
---

# openclaude

**14.7k** stars · **4.9k** stars/天 · 建立 3 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Gitlawb--openclaude");
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
> 提供統一 CLI 介面，整合多種 AI 模型的編碼代理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (4.9k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要快速接入多種 AI 模型的開發者，特別是在使用 CLI 工具的環境中。
> **一句話重點** OpenClaude 的最大優勢在於其能夠統一多種 AI 模型的使用，讓開發者在同一 CLI 環境中高效工作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "Gitlawb--openclaude" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學、1 小時整合，得到統一的多模型接入工具，值得嘗試。

> [!abstract] 核心創新
> 提供統一的 CLI 介面來接入多種 AI 模型，簡化開發者的工作流程。

## 專案簡介

OpenClaude 是一個開源的編碼代理 CLI，旨在整合多個 AI 模型的使用，讓開發者可以通過一個統一的命令行介面來接入 OpenAI、Gemini、Codex、Ollama 等多種模型。使用者只需執行 `openclaude` 指令，即可啟動 CLI，並透過 `/provider` 指令進行模型的設置與管理。這種設計使得開發者可以在同一個環境中流暢地切換不同的 AI 服務，避免了傳統上需要多個 CLI 工具的繁瑣。技術上，OpenClaude 利用 TypeScript 和多個 Node.js 套件來實現其功能，並提供了多種開發指令，如 `npm install -g @gitlawb/openclaude` 來進行安裝，並支援多種環境變數設置以快速配置。這個工具的賣點在於其能夠將多個 AI 服務整合在一個 CLI 中，並且支援即時的命令輸入與回應，提升了開發效率。

與其他工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，OpenClaude 提供了更為直觀的用戶介面和更廣泛的模型支援，特別是在與 GitHub 模型的整合上，使用者可以通過 `/onboard-github` 指令進行簡單的設置。這使得 OpenClaude 在需要多模型支援的開發環境中，特別適合快速迭代和測試的場景。使用者在使用過程中，可能會遇到如安裝依賴不全的問題，需確保系統中安裝了 `ripgrep` 等工具。整體來看，OpenClaude 目前處於 beta 階段，對於需要快速接入多種 AI 模型的開發者來說，這是一個值得考慮的工具。

**技術棧**：`TypeScript` · `Node.js` · `Bun`

## 重點功能

- 統一 CLI 介面 — 支援 OpenAI、Gemini、Codex 等 200+ 模型，讓開發者不需切換多個工具。
- 簡單的模型設置 — 使用 `/provider` 指令進行模型配置，快速上手。
- VS Code 擴展支援 — 提供 VS Code 插件，方便在開發環境中直接使用。
- 即時命令輸入 — 支援流式輸出，提升使用者互動體驗。
- 多環境支援 — 可在 macOS、Linux 和 Windows 上運行，並提供相應的安裝指令。

## 快速開始

1. 全域安裝 OpenClaude
```bash
npm install -g @gitlawb/openclaude
```
2. 啟動 OpenClaude
```bash
openclaude
```
3. 設置 OpenAI 模型
```bash
export CLAUDE_CODE_USE_OPENAI=1; export OPENAI_API_KEY=sk-your-key-here; export OPENAI_MODEL=gpt-4o; openclaude
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 OpenClaude 並設置環境變數",
  "指令": "openclaude",
  "預期輸出": "啟動 OpenClaude CLI，準備接收命令"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 14735 stars（4912/天），forks 5147（34.9%），這顯示出強烈的社群參與。作者 kevincodex1 和團隊在開源社群中有一定的影響力，這個工具解決了開發者在使用多個 AI 模型時的繁瑣流程，之前開發者通常需要分別安裝和配置不同的 CLI 工具，這樣的方式效率低下。近期的推廣和討論也促進了這個專案的曝光率，特別是在 Reddit 和 Hacker News 的討論中引起了關注。這個工具的出現正好填補了市場上對於統一 AI 模型接入工具的需求，並且其高 forks/stars 比率（34.9%）表明許多開發者正在實際使用並修改這個工具。

## 適合誰使用

**目標受眾**：需要快速接入多種 AI 模型的開發者，特別是在使用 CLI 工具的環境中。

> [!example] 使用場景
> - 後端工程師用它來整合多種 AI 模型進行代碼生成，因為可以通過一個 CLI 簡化多模型的使用流程。
> - 資料科學家用它來快速測試不同的模型效果，因為可以在同一個環境中切換不同的 AI 提供者。
> - 初創公司開發者用它來加速產品開發，因為能夠快速接入多種 AI 服務，提升開發效率。

## 架構分析

OpenClaude 採用模組化的架構設計，主要由 TypeScript 實現，並利用 Node.js 作為執行環境。CLI 的核心功能集中在 `cli.mjs` 中，並透過多個指令來管理不同的 AI 模型。這種設計使得開發者可以輕鬆擴展和維護各種模型的接入。

資料流方面，使用者的命令會被解析並轉發至對應的模型提供者，並將結果即時回傳。選擇使用 Node.js 的原因在於其豐富的生態系和良好的非同步處理能力，這對於需要即時反應的 CLI 工具至關重要。這樣的設計雖然增加了初期的學習成本，但長期來看能夠提供更靈活的擴展性，尤其是在面對不斷變化的 AI 模型市場時。

整體來說，這種架構設計使得 OpenClaude 在面對多變的需求時，能夠快速適應和調整。

## 技術深入分析

OpenClaude 的核心技術機制在於其模組化設計，使用 TypeScript 實現，並利用 Node.js 進行非同步處理。這使得 CLI 能夠快速解析使用者輸入的命令，並將其轉發至相應的 AI 模型提供者。效能方面，該工具能夠即時回應使用者的請求，並在多種環境中保持穩定運行。設計上，選擇 Node.js 是因為其豐富的生態系和良好的非同步處理能力，這對於需要即時反應的 CLI 工具至關重要。這種選擇雖然增加了初期的學習成本，但長期來看能夠提供更靈活的擴展性。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在高併發的情況下。整合方面，OpenClaude 可以與主流的 CI/CD 工具如 GitHub Actions 無縫對接，並且支援 VS Code 插件，這使得開發者能夠在熟悉的環境中使用該工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導，並包含範例指令。安裝過程相對順暢，但需注意安裝依賴的要求。文件中有針對不同平台的快速入門指南，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 整合多種 AI 模型，提升開發效率。
> - 提供即時命令輸入和流式輸出，改善使用者體驗。
> - 支援多平台運行，方便不同環境的開發者使用。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在穩定性問題。
> - 需要額外安裝依賴，增加安裝複雜度。
> - 對某些模型的支援可能不夠完善，使用者需自行測試。

> [!warning] 注意事項
> - 需要安裝 `ripgrep` 作為依賴，否則無法正常啟動。
> - 目前仍在 beta 階段，可能存在未解決的 bug。
> - 對於某些模型的支援可能不夠完善，使用者需自行測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供多種資料同步功能，但不支援多模型接入，適合單一任務的資料處理。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於特定模型的使用，而 OpenClaude 提供更廣泛的模型支援和統一的 CLI 介面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步功能，並不支援多模型接入，適合單一任務的資料處理。 | 如果你的需求主要是資料同步，而不需要多模型的支援。 | low，因為功能範圍較小，易於替換。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於特定模型的使用，無法提供 OpenClaude 的廣泛模型支援。 | 如果你的團隊已經在使用 HolyClaude，且不需要其他模型的整合。 | medium，因為需要重新適應不同的 CLI 工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaude** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步功能，並不支援多模型接入，適合單一任務的資料處理。 | 專注於特定模型的使用，無法提供 OpenClaude 的廣泛模型支援。 |
> | 遷移成本 | - | low，因為功能範圍較小，易於替換。 | medium，因為需要重新適應不同的 CLI 工具。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步，而不需要多模型的支援。 | 如果你的團隊已經在使用 HolyClaude，且不需要其他模 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝時可能會遇到 `ripgrep not found` 的錯誤
  - 解法：確保系統中已安裝 `ripgrep` 並可用
- [MEDIUM] 某些模型的支援可能不夠完善，使用者需自行測試
  - 解法：在使用前進行充分的測試
- **[HIGH]** 在高併發情況下可能會出現性能瓶頸
  - 解法：考慮使用負載平衡或分散式架構

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速接入多種 AI 模型，提升開發效率。 |
| 大型企業的核心系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 資料科學團隊進行模型測試 | 適合 | 支援多種模型，便於快速迭代和測試。 |
| 個人開發者的 side project | 非常適合 | 簡單易用，能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到統一的多模型接入工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需注意 API 金鑰的安全性。依賴鏈的信任程度較高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
| Forks | 5.1k |
| Open Issues | 87 |
| Issue 解決率 | 52% (96 closed) |
| 最後推送 | 2026-04-04 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 9.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gitlawb/openclaude) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kevincodex1](https://github.com/kevincodex1) | 102 |
> | [@gnanam1990](https://github.com/gnanam1990) | 44 |
> | [@Vasanthdev2004](https://github.com/Vasanthdev2004) | 36 |
> | [@auriti](https://github.com/auriti) | 20 |
> | [@anandh8x](https://github.com/anandh8x) | 14 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和討論。
**連結**：[文件](https://github.com/Gitlawb/openclaude)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-04）
> **活躍天數** 1 天 · **最新 commit** feat: activate buddy system in open build (#346)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#297](https://github.com/Gitlawb/openclaude/issues/297) | agent mascot... | 6 | 1 |
> | [#368](https://github.com/Gitlawb/openclaude/issues/368) | ‼️ can you help spread the awareness about this malware repo | 5 | 0 |
> | [#363](https://github.com/Gitlawb/openclaude/issues/363) | I am still unable to type | 5 | 13 |
> | [#300](https://github.com/Gitlawb/openclaude/issues/300) | 
# Bug: OpenClaude ignora OPENAI_MODEL e tenta usar gemini-2 | 2 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaude
> 
> OpenClaude is an open-source coding-agent CLI for cloud and local model providers.
> 
> Use OpenAI-compatible APIs, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, and other supported backends while keeping one terminal-first workflow: prompts, tools, agents, MCP, slash commands, and streaming output.
> 
> [](https://github.com/Gitlawb/openclaude/actions/workflows/pr-checks.yml)
> [](https://github.com/Gitlawb/openclaude/tags)
> [](https://github.com/Gitlawb/openclaude/discussions)
> [](SECURITY.md)
> [](LICENSE)
> 
> [Quick Start](#quick-start) | [Setup Guides](#setup-guides) | [Providers](#supported-providers) | [Source Build](#source-build-and-local-development) | [VS Code Extension](#vs-code-extension) | [Community](#community)
> 
> ## Why OpenClaude
> 
> - Use one CLI across cloud APIs and local model backends
> - Save provider profiles inside the app with `/provider`
> - Run with OpenAI-compatible services, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, and other supported providers
> - Keep coding-agent workflows in one place: bash, file tools, grep, glob, agents, tasks, MCP, and web tools
> - Use the bundled VS Code extension for launch integration and theme support
> 
> ## Quick Start
> 
> ### Install
> 
> ```bash
> npm install -g @gitlawb/openclaude
> ```
> 
> If the install later reports `ripgrep not found`, install ripgrep system-wide and confirm `rg --version` works in the same terminal before starting OpenClaude.
> 
> ### Start
> 
> ```bash
> openclaude
> ```
> 
> Inside OpenClaude:
> 
> - run `/provider` for guided provider setup and saved profiles
> - run `/onboard-github` for GitHub Models onboarding
> 
> ### Fastest OpenAI setup
> 
> macOS / Linux:
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-your-key-here
> export OPENAI_MODEL=gpt-4o
> 
> openclaude
> ```
> 
> Windows PowerShell:
> 
> ```powershell
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_API_KEY="sk-your-key-here"
> $env:OPENAI_MODEL="gpt-4o"
> 
> openclaude
> ```
> 
> ### Fastest local Ollama setup
> 
> macOS / Linux:
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_BASE_URL=http://localhost:11434/v1
> export OPENAI_MODEL=qwen2.5-coder:7b
> 
> openclaude
> ```
> 
> Windows PowerShell:
> 
> ```powershell
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_BASE_URL="http://localhost:11434/v1"
> $env:OPENAI_MODEL="qwen2.5-coder:7b"
> 
> openclaude
> ```
> 
> ## Setup Guides
> 
> Beginner-friendly guides:
> 
> - [Non-Technical Setup](docs/non-technical-setup.md)
> - [Windows Quick Start](docs/quick-start-windows.md)
> - [macOS / Linux Quick Start](docs/quick-start-mac-linux.md)
> 
> Advanced and source-build guides:
> 
> - [Advanced Setup](docs/advanced-setup.md)
> - [Android Install](ANDROID_INSTALL.md)
> 
> ## Supported Providers
> 
> | Provider | Setup Path | Notes |
> | --- | --- | --- |
> | OpenAI-compatible | `/provider` or env vars | Works with OpenAI, OpenRouter, DeepSeek, Groq, Mistral, LM Studio, and other compatible `/v1` servers |
> | Gemini | `/provider` or env vars | Supports API key, access token, or local ADC workflow on current `main` |
> | GitHub Models | `/onboard-github` | Interactive onboarding with saved credentials |
> | Codex | `/provider` | Uses existing Codex credentials when available |
> | Ollama | `/provider` or env vars | Local inference with no API key |
> | Atomic Chat | advanced setup | Local Apple Silicon backend |
> | Bedrock / Vertex / Foundry | env vars | Additional provider integrations for supported environments |
> 
> ## What Works
> 
> - **Tool-driven coding workflows**: Bash, file read/write/edit, grep, glob, agents, tasks, MCP, and slash commands
> - **Streaming responses**: Real-time token output and tool progress
> - **Tool calling**: Multi-step tool loops with model calls, tool execution, and follow-up responses
> - **Images**: URL and base64 image inputs for providers that support vision
> - **Provider profiles**: Guided setup plus saved `.openclaude-profile.json` support
> - **Local and remote model backends**: Cloud APIs, local servers, and Apple Silicon local inference
> 
> ## Provider Notes
> 
> OpenClaude supports multiple providers, but behavior is not identical across all of them.
> 
> - Anthropic-specific features may not exist on other providers
> - Tool quality depends heavily on the selected model
> - Smaller local models can struggle with long multi-step tool flows
> - Some providers impose lower output caps than the CLI defaults, and OpenClaude adapts where possible
> 
> For best results, use models with strong tool/function calling support.
> 
> ## Agent Routing
> 
> OpenClaude can route different agents to different models through settings-based routing. This is useful for cost optimization or splitting work by model strength.
> 
> Add to `~/.claude/settings.json`:
> 
> ```json
> {
>   "agentModels": {
>     "deepseek-chat": {
>       "base_url": "https://api.deepseek.com/v1",
>       "api_key": "sk-your-key"
>     },
>     "gpt-4o": {
>       "base_url": "https://api.openai.com/v1",
>       "api_key": "sk-your-key"
>     }
>   },
>   "agentRouting": {
>     "Explore": "deepseek-chat",
>     "Plan": "gpt-4o",
>     "general-purpose": "gpt-4o",
>     "frontend-dev": "deepseek-chat",
>     "default": "gpt-4o"
>   }
> }
> ```
> 
> When no routing match is found, the global provider remains the fallback.
> 
> > **Note:** `api_key` values in `settings.json` are stored in plaintext. Keep this file private and do not commit it to version control.
> 
> ## Web Search and Fetch
> 
> By default, `WebSearch` works on non-Anthropic models using DuckDuckGo. This gives GPT-4o, DeepSeek, Gemini, Ollama, and other OpenAI-compatible providers a free web search path out of the box.
> 
> > **Note:** DuckDuckGo fallback works by scraping search results and may be rate-limited, blocked, or subject to DuckDuckGo's Terms of Service. If you want a more reliable supported option, configure Firecrawl.
> 
> For Anthropic-native backends and Codex responses, OpenClaude keeps the native provider web search behavior.
> 
> `WebFetch` works, but its basic HTTP plus HTML-to-markdown path can still fail on JavaScript-rendered sites or sites that block plain HTTP requests.
> 
> Set a [Firecrawl](https://firecrawl.dev) API key if you want Firecrawl-powered search/fetch behavior:
> 
> ```bash
> export FIRECRAWL_API_KEY=your-key-here
> ```
> 
> With Firecrawl enabled:
> 
> - `WebSearch` can use Firecrawl's search API while DuckDuckGo remains the default free path for non-Claude models
> - `WebFetch` uses Firecrawl's scrape endpoint instead of raw HTTP, handling JS-rendered pages correctly
> 
> Free tier at [firecrawl.dev](https://firecrawl.dev) includes 500 credits. The key is optional.
> 
> ## Source Build And Local Development
> 
> ```bash
> bun install
> bun run build
> node dist/cli.mjs
> ```
> 
> Helpful commands:
> 
> - `bun run dev`
> - `bun run smoke`
> - `bun run doctor:runtime`
> - `bun run verify:privacy`
> - focused `bun test ...` runs for the areas you touch
> 
> ## Repository Structure
> 
> - `src/` - core CLI/runtime
> - `scripts/` - build, verification, and maintenance scripts
> - `docs/` - setup, contributor, and project documentation
> - `python/` - standalone Python helpers and their tests
> - `vscode-extension/openclaude-vscode/` - VS Code extension
> - `.github/` - repo automation, templates, and CI configuration
> - `bin/` - CLI launcher entrypoints
> 
> ## VS Code Extension
> 
> The repo includes a VS Code extension in [`vscode-extension/openclaude-vscode`](vscode-extension/openclaude-vscode) for OpenClaude launch integration, provider-aware control-center UI, and theme support.
> 
> ## Security
> 
> If you believe you found a security issue, see [SECURITY.md](SECURITY.md).
> 
> ## Community
> 
> - Use [GitHub Discussions](https://github.com/Gitlawb/openclaude/discussions) for Q&A, ideas, and community conversation
> - Use [GitHub Issues](https://github.com/Gitlawb/openclaude/issues) for confirmed bugs and actionable feature work
> 
> ## Contributing
> 
> Contributions are welcome.
> 
> For larger changes, open an issue first so the scope is clear before implementation. Helpful validation commands include:
> 
> - `bun run build`
> - `bun run smoke`
> - focused `bun test ...` runs for touched areas
> 
> ## Disclaimer
> 
> OpenClaude is an independent community project and is not affiliated with, endorsed by, or sponsored by Anthropic.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[wong2--weixin-agent-sdk|wong2/weixin-agent-sdk]]

[GitHub](https://github.com/Gitlawb/openclaude)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Gitlawb--openclaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","多模態","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Gitlawb--openclaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Gitlawb--openclaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Gitlawb--openclaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Gitlawb" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-06|2026-04-06]] — 再次上榜，16.5k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，14.7k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，11.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.6k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，3.6k stars
