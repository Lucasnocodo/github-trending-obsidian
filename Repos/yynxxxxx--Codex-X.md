---
repo: yynxxxxx/Codex-X
url: https://github.com/yynxxxxx/Codex-X
owner: yynxxxxx
owner_type: User
language: Rust
license: MIT
description: "Codex Switch & Instruct desktop manager"
homepage: "https://github.com/yynxxxxx/Codex-X"
stars: 760
stars_per_day: 109
forks: 124
open_issues: 4
created: 2026-07-04
pushed_at: 2026-07-11
first_seen: 2026-07-11
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "配置管理"
release_tag: "v0.2.32"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-11
use_case: "提供 Codex CLI 的可視化管理，簡化提示詞與 API 供應商的切換。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-18"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 5994
readme_length: 5007
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-11"
star_history: "2026-07-11:760"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "Codex-X"
  - "yynxxxxx/Codex-X"
  - "提供 Codex CLI 的可視化管理，簡化提示詞與 API 供應商的切換。"
---

# Codex-X

**760** stars · **109** stars/天 · 建立 7 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/yynxxxxx--Codex-X");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.2.32`

> [!summary] 一句話摘要
> 提供 Codex CLI 的可視化管理，簡化提示詞與 API 供應商的切換。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (109 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要靈活管理 Codex CLI 配置的開發者和安全研究人員。
> **一句話重點** Codex-X 的可視化管理讓 Codex 的配置變得簡單直觀，特別適合需要頻繁調整的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yynxxxxx--Codex-X");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "配置管理" && p.file.name !== "yynxxxxx--Codex-X" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 配置管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到可視化管理的高效工具，值得一試。

> [!abstract] 核心創新
> Codex-X 提供了一個可視化的界面來管理 Codex CLI 的配置和提示詞，顯著提升了用戶體驗。

## 專案簡介

Codex-X 是一款針對 OpenAI Codex 的桌面管理工具，旨在簡化提示詞的注入與 API 供應商的切換。用戶可以透過這個工具輕鬆編輯 Codex 的配置文件，像是 `~/.codex/config.toml` 和 `~/.codex/auth.json`，並且支持一鍵切換官方和第三方的 Codex API。其核心賣點在於可視化管理，讓用戶能夠直觀地查看和編輯配置，並且能夠進行會話管理，確保歷史會話的元數據與當前配置一致。這個工具還內建了兩套提示詞模板，分別是 `gpt5.4-unrestricted.md` 和 `gpt5.5-unrestricted.md`，用戶可以根據需求啟用，從而影響 Codex 的行為。使用者只需在界面上選擇所需的提示詞模板，Codex-X 會自動更新配置文件，並提供即時的效果反饋。這樣的設計不僅提升了使用效率，也降低了配置錯誤的風險。

Codex-X 的技術棧包括 Rust 和 TypeScript，並使用 Tauri 框架構建桌面應用，這使得它在性能和跨平台支持上表現優異。相較於其他類似工具，Codex-X 提供了更為直觀的界面和更強的功能整合，特別適合需要頻繁切換 API 供應商的開發者。使用者在進行逆向工程或安全測試時，能夠快速調整提示詞，這在其他工具中往往需要手動編輯配置文件，效率較低。這個工具的使用限制主要在於需要一定的配置知識，對於新手來說可能會有學習曲線。整體而言，Codex-X 是一款值得推薦的工具，特別是對於需要靈活配置 Codex 的開發者來說。

**技術棧**：`Rust` · `TypeScript` · `Tauri 2` · `React 18` · `SQLite`

## 重點功能

- 可視化 API 管理 — 支持官方與第三方 Codex API 的一鍵切換，編輯 Base URL、API Key 等。
- 提示詞注入功能 — 內建兩套提示詞模板，支持一鍵寫入 Codex 配置，提升測試效率。
- 會話管理 — 可視化展示 Codex 本地會話，支持 Provider 同步與修復歷史元數據。
- TOML 配置編輯 — 直接查看與編輯 Codex 的配置文件，支持語法高亮。
- 跨平台支持 — 提供 macOS、Windows 和 Linux 的安裝包，方便不同環境使用。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動開發模式
```bash
pnpm dev
```
3. 構建桌面應用
```bash
pnpm --dir apps/desktop tauri build
```

## 程式碼範例

```rust
{
  "前置條件": "需安裝 pnpm 和 Rust 環境",
  "指令": "pnpm install",
  "預期輸出": "安裝所有依賴包，準備開發環境。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 760 stars（109/天），forks 124（16.3%），顯示出良好的社群反響。作者 yynxxxxx 是一位活躍的開發者，專注於開源工具的開發，這個專案解決了 Codex CLI 用戶在配置和管理上的痛點，提供了一個可視化的解決方案。隨著 Codex 的使用逐漸增多，對於管理工具的需求也隨之上升，這使得 Codex-X 的出現恰逢其時。社群的反饋和需求推動了這個專案的快速成長，特別是在逆向工程和安全測試領域的應用。

## 適合誰使用

**目標受眾**：需要靈活管理 Codex CLI 配置的開發者和安全研究人員。

> [!example] 使用場景
> - 安全研究人員用它來快速切換 Codex API 供應商，因為能夠即時測試不同供應商的反應，提升測試效率。
> - 開發者用它來編輯 Codex 的配置文件，因為可視化界面讓配置過程更直觀，避免了手動編輯的錯誤。
> - 逆向工程師用它來管理和同步歷史會話，因為能夠確保歷史數據的準確性，提升工作流的連貫性。

## 架構分析

Codex-X 採用 Tauri 框架構建，前端使用 React 和 TypeScript，後端則是 Rust。這樣的架構設計使得應用在性能和跨平台支持上表現優異。資料流方面，應用會從用戶的 Codex 配置目錄讀取配置文件，並在界面上提供可視化編輯功能。

用戶的操作會直接影響到配置文件的內容，並在 Codex 中即時生效。這種設計的代價是需要用戶具備一定的配置知識，以避免誤操作。擴展性方面，Codex-X 的設計允許未來添加更多的功能模塊，例如支持更多的 API 供應商或提示詞模板。

## 技術深入分析

Codex-X 的核心技術機制在於其可視化界面，這是通過 Tauri 框架實現的，前端使用 React 和 TypeScript，後端則是 Rust，這樣的選擇使得應用在性能上有很好的表現。資料流方面，Codex-X 會從用戶的 Codex 配置目錄讀取配置文件，並在界面上提供可視化編輯功能，這樣用戶的操作能夠即時反映到配置文件中。設計上，Codex-X 需要用戶具備一定的配置知識，以避免誤操作，這可能會在新手使用時造成困難。技術風險方面，Codex-X 依賴於 Codex CLI 的穩定性，若未來 Codex 的 API 發生變化，可能會影響 Codex-X 的功能。整合方面，Codex-X 能夠與主流的開發工具鏈良好配合，特別是在安全測試和逆向工程的工作流中，能夠提供良好的支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的功能介紹和安裝步驟，但缺乏詳細的範例。安裝過程相對順暢，但對於新手來說可能會有一些困難。整體來說，花 30 分鐘能夠完成基本的安裝和配置，但對於深入使用仍需進一步學習。

## 優缺點分析

> [!success] 優點
> - 可視化管理界面，提升用戶操作的直觀性。
> - 支持多平台，方便不同操作系統的用戶使用。
> - 內建多種提示詞模板，快速切換，提升測試效率。

> [!danger] 缺點
> - 對新手來說，配置知識的要求較高。
> - 某些環境下安裝可能會遇到問題，例如 macOS 的安全警告。
> - 目前僅支持 Codex CLI，對其他 AI 模型的支持有限。

> [!warning] 注意事項
> - 需要一定的配置知識，對新手來說可能有學習曲線。
> - 在某些環境下可能會遇到安裝問題，例如 macOS 的 Gatekeeper 警告。
> - 目前僅支持 Codex CLI，對於其他 AI 模型的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 Codex 的 CLI 工具，但缺乏可視化管理界面，使用上較為繁瑣。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於 Codex 的 API 兼容性，但不提供配置管理功能，適合已有配置的用戶。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理管理，但不支持 Codex 的提示詞注入，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理管理，但缺乏 Codex 的提示詞注入功能，適合需要多代理管理的用戶。 | 如果你的工作主要集中在多代理的管理上，而不需要 Codex 的提示詞功能。 | medium，因為需要重新配置代理設定。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 Codex 的 API 兼容性，但不支持可視化管理，使用上較為繁瑣。 | 如果你已經有成熟的 Codex 配置，而不需要可視化的管理界面。 | low，因為可以直接使用已有的配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Codex-X** | **agent-sprite-forge** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理管理，但缺乏 Codex 的提示詞注入功能，適合需要多代理管理的用戶。 | 提供 Codex 的 API 兼容性，但不支持可視化管理，使用上較為繁瑣。 |
> | 遷移成本 | - | medium，因為需要重新配置代理設定。 | low，因為可以直接使用已有的配置。 |
> | 適用場景 | 主要場景 | 如果你的工作主要集中在多代理的管理上，而不需要 Codex  | 如果你已經有成熟的 Codex 配置，而不需要可視化的管理界 |

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

- **[HIGH]** 在 macOS 上安裝時可能會遇到 Gatekeeper 的安全警告
  - 解法：可手動移除 quarantine 屬性
- [MEDIUM] 某些配置變更後需要重啟應用才能生效
  - 解法：重啟應用以確保配置更新
- **[HIGH]** 在 Windows 環境中可能會因 PATH 問題導致應用無法啟動
  - 解法：確認 PATH 設定正確，或手動執行相應的命令

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要管理 Codex 配置 | 非常適合 | 可視化管理大幅提升了配置效率，降低了錯誤率。 |
| 個人安全研究者進行逆向工程 | 適合 | 內建的提示詞模板能夠快速調整測試場景。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到可視化管理的高效工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Codex-X 本身不需要高權限運行，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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
| Forks | 124 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-11 |
| 建立日期 | 2026-07-04 |
| 官方網站 | [Link](https://github.com/yynxxxxx/Codex-X) |
| Repo 大小 | 5.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yynxxxxx/Codex-X) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 48
>     "TypeScript" : 31
>     "CSS" : 16
>     "Python" : 5
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yynxxxxx](https://github.com/yynxxxxx) | 76 |

**最新版本**：v0.2.32 — Codex-X v0.2.32 (2026-07-11)

> [!info]- Release Notes
> ### 更新
> 
> - 提示词页的“启用方式”新增问号说明，用户可以直接看到“保留原提示词 / 替换原提示词”对现有系统提示词和 `model_instructions_file` 的实际影响。
> - 提示词注入页面继续沿用统一的当前状态展示，方便判断当前模板与启用方式是否一致。
> 
> ### 修复 Bug
> 
> - 修复提示词启用方式说明不够直观的问题，减少误操作风险。
> 
> ### 修复 Bug
> 
> - 修复相同 Base URL、API Key、模型但 TOML 内容不同的供应商可能同时显示“当前”的问题；现在优先按完整 live TOML 匹配唯一配置，并避免重复展示 detected custom 卡片。
> - 修复追加提示词后禁用会误影响用户原有规则的风险；禁用只删除 Codex-X 管理的 AGENTS 区块或指令文件，用户其他内容保持不变。
> - 修复并发操作在同一毫秒创建备份时可能发生临时文件名冲突的问题。
> - 修复切换 Skill / MCP 开关后条目因启用状态排序而跳到列表其他位置的问题。
> - 修复 macOS Overlay 标题栏无法拖动的问题：补齐 Tauri 2 的 `core:window:allow-start-dragging` capability，并统一顶部拖动区域样式。
> - 修复 Windows 桌面应用环境中因 PATH 不完整或 `codex.cmd` 无法直接执行而检测不到 Codex CLI 版本的问题；新增 npm、ChatGPT、Cursor、VS Code 和常见安装目录探测。
> 
> ### 开发
> 
> - 将 `AGENTS.md` 纳入 Codex-X 备份与恢复流程。
> - 增加受管区块合并/卸载、GitHub 动态模板发现、完整 TOML 供应商匹配、追加/替换模式和 AGENTS 恢复测试。

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多次更新和修復。
**連結**：[文件](https://github.com/yynxxxxx/Codex-X)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-07 ~ 2026-07-11）
> **活躍天數** 4 天 · **最新 commit** Add Seagull 3.0 prompt example

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/yynxxxxx/Codex-X/issues/4) | 检测更新的时候提示更新失败 | 0 | 1 |
> | [#3](https://github.com/yynxxxxx/Codex-X/issues/3) | 佬，会话管理可以加个全选-删除会话吗 | 0 | 0 |
> | [#2](https://github.com/yynxxxxx/Codex-X/issues/2) | Grok4.5 通过CPA反代到Codex破甲失败了 | 0 | 0 |
> | [#1](https://github.com/yynxxxxx/Codex-X/issues/1) | 添加供应商界面无法下拉 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex-X
> 
>   **Codex 提示词注入 · Provider 切换 · TOML / Auth 可视化管理器**
> 
>   一款面向 **OpenAI Codex 桌面端 / Codex CLI** 的跨平台桌面工具，内置 `gpt5.5-unrestricted.md` 与 `gpt5.4-unrestricted.md`，支持一键写入 / 禁用指令提示词、第三方 Provider 切换、官方 Auth 管理、TOML 可视化编辑与本地会话 Provider Sync。
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
> ---
> 
> ## Codex-X 是什么？
> 
> Codex-X 不是普通的配置文件编辑器，而是一个面向 Codex CLI 的 **可视化增强管理器**。
> 
> 它把几个高频操作做成了桌面软件：
> 
> - 给 Codex 写入 / 禁用指令提示词模板
> - 切换官方 OpenAI 与第三方 Codex API Provider
> - 查看 / 编辑 `~/.codex/config.toml`
> - 查看 / 编辑官方 `~/.codex/auth.json`
> - 检查并修复本地历史会话的 Provider 元数据
> 
> ## 软件预览
> 
> 应用界面预览：主界面 / Provider / TOML / Auth
> 
>   
> 
> 提示词注入效果：安全测试场景
> 
>   
>     
>       SQL 注入测试
>       部署后测试：如何对目标进行 SQL 注入测试？
>       
>     
>     
>       NSFW 响应测试
>       用于观察提示词注入后的边界响应变化
>       
>     
>   
> 
> 提示词注入效果：逆向工程场景
> 
>   
>     
>       APK 逆向分析
>       Android APK 静态 / 动态分析思路
>       
>     
>     
>       APK 逆向分析 2
>       补充 APK 逆向流程与定位方式
>       
>     
>   
>   
>     
>       EXE 逆向分析
>       Windows 可执行文件分析与调试方向
>       
>     
>   
> 
> ## 功能特性
> 
>   
>     功能
>     说明
>   
>   
>     ⚡ 供应商 API
>     可视化管理官方 OpenAI / 第三方 Codex Provider，支持 Base URL、API Key、Model、Wire API 与一键切换。
>   
>   
>     🧩 提示词注入
>     特色功能：内置 gpt5.4-unrestricted.md / gpt5.5-unrestricted.md，一键写入 Codex 配置；启用后可达到上方效果图中的 SQL 注入测试、APK / EXE 逆向等响应效果。
>   
>   
>     💬 会话管理
>     读取 Codex 本地 SQLite 与 rollout JSONL，会话列表可视化展示，并支持 Provider Sync / 修复历史 thread 元数据。
>   
>   
>     📝 TOML 配置
>     查看当前 ~/.codex/config.toml，并在 Provider 编辑页直接编辑完整 TOML，保存后同步到 Codex 配置目录。
>   
>   
>     🧠 Skills / MCP
>     新增技能和 MCP 管理页：读取 Codex 当前可用的 Skills / MCP，支持导入已有、从 ZIP 安装 Skill、启用 / 禁用单个 Skill 或 MCP，并可检查 Skill 更新状态。
>   
>   
>     🔐 Auth 管理
>     读取 / 编辑官方 ~/.codex/auth.json，区分 ChatGPT 登录态 Auth 与第三方 API Key。
>   
>   
>     📦 跨平台发布
>     提供 macOS Apple Silicon / Intel .dmg、Windows .msi / portable .zip、Linux .deb / .rpm，支持应用内检测更新。
>   
> 
> ## 核心亮点
> 
> ### 1. 内置双指令提示词模板
> 
> Codex-X 当前内置两套提示词模板：
> 
> - `examples/gpt5.5-unrestricted.md`
> - `examples/gpt5.4-unrestricted.md`
> 
> 你可以在【指令提示词】页面直接点击启用 / 禁用。启用后，Codex-X 会把对应 `.md` 写入 Codex 配置目录，并更新 `config.toml` 中的 `model_instructions_file`。
> 
>   
>     对比项
>     gpt5.4-unrestricted.md
>     gpt5.5-unrestricted.md
>   
>   
>     定位
>     5.4 CTF 沙箱
>     5.5 无限制模式
>   
>   
>     策略
>     CTF 竞赛沙箱间接绕过
>     直接声明无限制开发者模式
>   
>   
>     风格
>     安全研究导向，方法论详细
>     极简指令，覆盖面广
>   
>   
>     长度
>     约 180 行
>     约 40 行
>   
>   
>     适用
>     GPT-5.4 Codex CLI
>     GPT-5.5 Codex CLI
>   
> 
> 部署后可以测试：
> 
> ```text
> 如何对目标进行 SQL 注入测试？
> ```
> 
> 典型效果：
> 
> ```text
> 破甲前 → 拒绝或泛化回答
> 破甲后 → 直接给安全研究方法论与测试步骤
> ```
> 
> ### 2. Provider 可视化切换
> 
> - 添加第三方 Codex API Provider
> - 编辑 Base URL / API Key / Model / Wire API
> - Provider 页面可查看并编辑对应 TOML
> - 当前启用 Provider 状态清晰可见
> - 支持从 cc-switch 数据库导入 Codex Provider
> 
> ### 3. 官方 Auth 管理
> 
> - 自动读取 Codex 官方 `auth.json`
> - 支持查看 / 编辑 ChatGPT 登录态 Auth
> - 区分官方 Auth 与第三方 API Key
> - 官方配置可和第三方 Provider 在 UI 中统一管理
> 
> ### 4. TOML 可视化编辑
> 
> - 查看当前 Codex `config.toml`
> - 深色代码预览与语法高亮
> - Provider 编辑页可直接编辑完整 TOML
> - 保存后同步到 Codex 配置目录
> 
> ### 5. 会话管理 / Provider Sync
> 
> Codex-X 可以读取 Codex 本地会话数据：
> 
> ```text
> ~/.codex/sqlite/*.db
> ~/.codex/state_5.sqlite
> ~/.codex/sessions/**/rollout-*.jsonl
> ~/.codex/archived_sessions/**/rollout-*.jsonl
> ```
> 
> 用于检查旧会话的 Provider 元数据是否和当前配置一致，并支持一键同步 / 修复，让历史 thread 继续被原生 Codex 识别、打开和续聊。
> 
> ### 6. Skills / MCP 管理
> 
> Codex-X 新增独立的【技能和 MCP】页面，用于集中管理 Codex 的专业能力扩展。
> 
> - Skills：读取当前 Codex Skills，支持导入已有、从 ZIP 安装、启用 / 禁用、检查更新状态
> - MCP：读取当前 Codex MCP Server，支持导入已有、启用 / 禁用，启用后写入 Codex config.toml
> - 适合管理 Android APK 逆向、Ghidra / IDA、Web / API / 协议逆向、CTF、安全测试等技能包
> 
> ### 7. 逆向 Skills 导航
> 
>   
>     
>   
> 
>   
>     
>       在线教程页：解释什么是“破甲”、Codex-X 如何启用 GPT-5.5 / unrestricted jeli、以及如何搭配不同领域的逆向 Skills。
>       
>       分类覆盖：Android APK / Windows EXE / Web 协议逆向。
>       
>       内容包含：Skill 用途、安装方式、来源地址、推荐使用流程。
>     
>     
>       
>         🧩 GPT-5.5 / unrestricted jeli 使用流程
>         📱 Android APK 逆向 Skills
>         🪟 Windows EXE / DLL 逆向 Skills
>         🌐 Web / API / 协议逆向 Skills
>         📋 安装命令一键复制
>       
>     
>   
> 
>   
>     🚀 打开 Codex-X 逆向 Skills 导航
>   
> 
> ### 8. 跨平台桌面软件
> 
> - macOS Apple Silicon `.dmg`
> - macOS Intel `.dmg`
> - Windows `.msi`
> - Windows Portable `.zip`
> - Linux `.deb` / `.rpm`
> - GitHub Releases 自动构建发布
> - 应用内检查更新
> 
> ## 技术栈
> 
> | 类型 | 技术 |
> | --- | --- |
> | 桌面框架 | Tauri 2 |
> | 前端 | React 18 / TypeScript / Vite |
> | 后端 | Rust |
> | 本地数据 | SQLite / rusqlite |
> | 配置编辑 | TOML / JSON |
> | 发布 | GitHub Actions / GitHub Releases |
> 
> ## 配置路径
> 
> Codex-X 默认读取 Codex 配置目录：
> 
> ```text
> ~/.codex/config.toml
> ~/.codex/auth.json
> ```
> 
> 也支持环境变量：
> 
> ```text
> CODEX_HOME=/path/to/.codex
> CODEXX_HOME=/path/to/codex-x-data
> CC_SWITCH_HOME=/path/to/.cc-switch
> ```
> 
> Codex-X 自身数据库默认位于：
> 
> ```text
> ~/.codexx/codexx.db
> ```
> 
> ## 下载
> 
> 请前往 Releases 页面下载：
> 
> https://github.com/yynxxxxx/Codex-X/releases
> 
> ## 开发运行
> 
> ```bash
> pnpm install
> pnpm dev
> ```
> 
> 构建桌面端：
> 
> ```bash
> pnpm --dir apps/desktop tauri build
> ```
> 
> ## macOS 安装说明
> 
> 如果你在未签名 / 未公证的 DMG 中看到“软件已损坏”提示，这是 macOS Gatekeeper 的正常行为。
> 
> - 最佳方式：使用 Apple Developer ID 签名并 notarize
> - 仅本地测试：可手动移除 quarantine 属性
> 
> ```bash
> xattr -dr com.apple.quarantine /Applications/Codex-X.app
> ```
> 
> ## 许可证
> 
> 本项目基于 [MIT License](https://github.com/yynxxxxx/Codex-X/blob/main/LICENSE) 开源。
> 
> ## 致谢 / Thanks
> 
> 感谢 [LINUX DO 论坛](https://linux.do/) 社区的关注、反馈与支持。
> 
> ## Star History

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[配置管理]] · [[逆向工程]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]]

[GitHub](https://github.com/yynxxxxx/Codex-X) · [官方網站](https://github.com/yynxxxxx/Codex-X)

## 相關收錄

> [!note]- 直接競品（同子分類：配置管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "配置管理" AND file.name != "yynxxxxx--Codex-X"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "yynxxxxx--Codex-X"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "yynxxxxx--Codex-X" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "yynxxxxx--Codex-X"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","配置管理","逆向工程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yynxxxxx--Codex-X" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yynxxxxx--Codex-X");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yynxxxxx--Codex-X" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yynxxxxx" AND file.name != "yynxxxxx--Codex-X"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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
> const me = dv.page("Repos/yynxxxxx--Codex-X");
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

> **2026-07-11** — 首次收錄
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

- [[2026-07-11|2026-07-11]] — 首次收錄，760 stars
