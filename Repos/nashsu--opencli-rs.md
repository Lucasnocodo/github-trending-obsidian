---
repo: nashsu/opencli-rs
url: https://github.com/nashsu/opencli-rs
owner: nashsu
owner_type: User
language: Rust
license: N/A
description: "Opencli-rs is a  Blazing fast, memory-safe command-line tool — Fetch information from any website with a single command. Covers Twitter/X, Reddit, YouTube, HackerNews, Bilibili, Zhihu, Xiaohongshu, and 55+ sites, with support for controlling Electron desktop apps, integrating local CLI tools (gh, docker, kubectl)"
homepage: ""
stars: 982
stars_per_day: 196
forks: 72
open_issues: 4
created: 2026-03-24
pushed_at: 2026-03-29
first_seen: 2026-03-30
week: "2026-W14"
month: "2026-03"
category: "CLI 工具"
subcategory: "命令行工具"
release_tag: "v0.1.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-30
use_case: "一個快速且安全的命令行工具，讓你透過單一指令從各大網站獲取資訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-06"
contributor_count: 2
engagement: "low"
issue_close_rate: 43
repo_size_kb: 1413
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-30"
star_history: "2026-03-30:982"
tags:
  - github
  - "category/cli_工具"
  - "lang/rust"
  - easy_install
aliases:
  - "opencli-rs"
  - "nashsu/opencli-rs"
  - "一個快速且安全的命令行工具，讓你透過單一指令從各大網站獲取資訊。"
---

# opencli-rs

**982** stars · **196** stars/天 · 建立 5 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/nashsu--opencli-rs");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.3` `easy-install`

> [!summary] 一句話摘要
> 一個快速且安全的命令行工具，讓你透過單一指令從各大網站獲取資訊。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (196 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要快速從多個網站獲取資訊的開發者，尤其是對 AI 代理有需求的團隊。
> **一句話重點** opencli-rs 不僅提升了從多個網站獲取資訊的效率，還為 AI 代理提供了強大的支持。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nashsu--opencli-rs");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "命令行工具" && p.file.name !== "nashsu--opencli-rs" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 命令行工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，能夠快速獲取多個網站的資訊，值得投資。

> [!abstract] 核心創新
> 這個專案的核心創新在於其速度和內存效率，能夠在多個網站上實現高效的信息獲取。

## 專案簡介

opencli-rs 是一個用 Rust 重寫的命令行工具，旨在快速、安全地從 55 多個網站（如 Twitter、Reddit、YouTube 等）獲取資訊。用戶只需透過簡單的命令，如 `opencli-rs hackernews top --limit 10`，即可獲得 Hacker News 的最新消息。這個工具的賣點在於其速度，據測試顯示，opencli-rs 在某些命令上比其 TypeScript 版本快 12 倍，並且記憶體使用量低至 15MB，相較於 Node.js 版本的 99MB，效能提升顯著。其架構設計上，opencli-rs 以單一 4.7MB 的靜態二進位檔運行，無需任何運行時依賴，這使得部署變得簡單。

與其他類似工具相比，如 jackwener/opencli，opencli-rs 不僅在速度上有顯著優勢，還能透過瀏覽器擴展重用會話，無需管理 token，這在需要頻繁登入的網站上特別有用。使用者可以透過 `opencli-rs explore` 命令來分析網站 API，並自動生成適配器，這對於需要快速開發的開發者來說非常方便。這個工具的設計考量了 AI 的整合，能夠讓 AI 代理自動發現可用工具，增強了其使用場景的廣泛性。對於需要從多個網站提取資訊的開發者，opencli-rs 提供了一個高效的解決方案，但在 macOS 環境下可能會遇到一些插件加載的問題，這需要注意。

**技術棧**：`Rust 1.60` · `Tokio 1` · `Serde 1`

## 重點功能

- 55 個網站支持 — 包含 Twitter、Reddit、YouTube 等，提供 333 條命令。
- 瀏覽器會話重用 — 透過 Chrome 擴展重用已登入的會話，無需管理 token。
- 聲明式 YAML 管道 — 使用 YAML 描述數據抓取工作流，無需編寫代碼。
- AI 原生發現 — 自動分析網站 API 並生成適配器，簡化開發流程。
- 多格式輸出 — 支持表格、JSON、YAML、CSV、Markdown 等多種格式。

## 快速開始

1. 安裝 opencli-rs
```bash
curl -fsSL https://raw.githubusercontent.com/nashsu/opencli-rs/main/scripts/install.sh | sh
```
2. 設置 Chrome 擴展
```bash
下載 opencli-rs-chrome-extension.zip 並加載到 Chrome 擴展中
```
3. 查看可用命令
```bash
opencli-rs --help
```

## 程式碼範例

```rust
[
  "# 獲取 Hacker News 的最新故事",
  "opencli-rs hackernews top --limit 10",
  "# 預期輸出：返回最新的 10 條 Hacker News 故事的 JSON 格式數據。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 982 stars（196/天），forks 72（7.3%），這顯示出穩定的增長。作者 nashsu 之前在開源社群活躍，這個專案解決了從多個網站獲取資訊的繁瑣過程，特別是對於需要快速獲取數據的開發者來說，這是一個高效的工具。社群對於其效能和易用性表現出興趣，特別是在 AI 代理的應用場景中。最近的推文和討論也引起了更多開發者的注意，進一步推動了其流行。

## 適合誰使用

**目標受眾**：需要快速從多個網站獲取資訊的開發者，尤其是對 AI 代理有需求的團隊。

> [!example] 使用場景
> - 後端工程師用它來從 Hacker News 獲取最新技術文章，因為這樣可以節省手動查找的時間，並且能夠自動化過程。
> - 數據分析師用它來下載 Bilibili 的熱門視頻，因為它能快速獲取視頻數據並進行分析，避免了繁瑣的手動操作。
> - AI 開發者用它來整合多個 CLI 工具，因為它能讓 AI 代理自動發現和調用本地工具，提升工作效率。

## 架構分析

opencli-rs 採用純 Rust 實現，這使得它在性能上優於基於 Node.js 的版本。其架構設計為單一靜態二進位檔，無需運行時依賴，這降低了部署的複雜性。數據流方面，使用者透過命令行輸入指令，工具內部則通過異步處理來獲取和處理數據。

這種設計使得工具能夠在高並發的情況下保持穩定性。選擇 Rust 的原因在於其內存安全性和高效能，這對於需要快速響應的命令行工具至關重要。擴展性方面，開發者可以通過 YAML 文件輕鬆添加自定義適配器，這樣的設計使得工具能夠靈活應對不同的需求。

## 技術深入分析

opencli-rs 的核心技術機制是基於 Rust 的異步編程模型，這使得它在處理高並發請求時能夠保持高效能。使用 Tokio 作為異步運行時，能夠有效管理 I/O 操作，減少延遲。從效能和規模特性來看，opencli-rs 能夠在短時間內處理大量請求，並且在內存使用上表現優異。設計上選擇 Rust 而非其他語言，主要是考量到內存安全性和執行速度，這對於命令行工具至關重要。依賴樹相對簡單，主要依賴於幾個核心庫，這降低了潛在的供應鏈風險。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下。整合方面，opencli-rs 能夠輕鬆與現有的 CLI 工具鏈整合，並且支持多種輸出格式，這使得它在開發流程中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了多種安裝和使用範例。安裝過程順暢，無需複雜的配置。文件支持多語言，對於新手友好。

## 優缺點分析

> [!success] 優點
> - 速度快，某些命令的執行速度比 Node.js 版本快 12 倍。
> - 內存使用量低，對於資源有限的環境非常友好。
> - 支持多種網站和命令，功能覆蓋面廣。

> [!danger] 缺點
> - 某些命令需要用戶登入，增加了使用的複雜性。
> - 在 macOS 環境下可能會遇到插件加載問題。
> - 目前的文檔可能對新手不夠友好。

> [!warning] 注意事項
> - 目前在 macOS 下的某些環境可能會遇到插件加載問題。
> - 需要安裝 Chrome 擴展才能使用瀏覽器命令。
> - 某些網站的命令需要用戶登入，需處理 Cookie。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/opencli](https://github.com/jackwener/opencli) | 這個工具是 opencli-rs 的前身，基於 TypeScript 實現，速度較慢且內存使用量較高。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行工具，但不支持多網站整合，功能較為單一。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/opencli](https://github.com/jackwener/opencli) | 基於 TypeScript 實現，速度較慢且內存使用量較高。 | 如果你的團隊已經熟悉 Node.js 生態，並且不需要極端的性能優化。 | medium，因為需要重新適配命令和環境。 |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行工具，功能較為單一。 | 如果你的需求僅限於 Twitter 數據的獲取，且不需要多網站支持。 | low，因為命令結構相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli-rs** | **opencli** | **twitter-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 基於 TypeScript 實現，速度較慢且內存使用量較高。 | 專注於 Twitter 的命令行工具，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新適配命令和環境。 | low，因為命令結構相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 Node.js 生態，並且不需要極端的 | 如果你的需求僅限於 Twitter 數據的獲取，且不需要多網 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 下使用時，可能會遇到插件加載問題，導致命令無法執行。
  - 解法：檢查擴展是否正確加載，必要時重啟 Chrome。
- [MEDIUM] 某些命令需要用戶手動登入，增加了使用的複雜性。
  - 解法：提前在瀏覽器中登入，並確保 Cookie 可用。
- [MEDIUM] 在高並發情況下，可能會出現性能瓶頸。
  - 解法：適當調整命令的執行頻率，避免過度請求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要快速獲取市場資訊 | 非常適合 | 能夠快速從多個網站獲取資訊，提升決策效率。 |
| 大型企業需要整合多個 CLI 工具 | 適合 | 支持多種外部 CLI 工具的整合，方便管理。 |
| 個人開發者需要從社交媒體獲取數據 | 普通 | 雖然功能強大，但某些命令需要登入，增加了使用的複雜性。 |
| 對性能要求極高的金融服務 | 不適合 | 目前仍處於 alpha 階段，穩定性和性能尚未達到生產要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠快速獲取多個網站的資訊，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限運行，主要存取用戶的 Cookie 和基本網絡請求。依賴鏈簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nashsu--opencli-rs");
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
> const me = dv.page("Repos/nashsu--opencli-rs");
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
| Forks | 72 |
| Open Issues | 4 |
| Issue 解決率 | 43% (3 closed) |
| 最後推送 | 2026-03-29 |
| 建立日期 | 2026-03-24 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nashsu/opencli-rs) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `license` `tokio` `serde` `serde_json` `serde_yaml` `thiserror` `anyhow` `async-trait` `tracing` `tracing-subscriber` `lto`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 87
>     "TypeScript" : 6
>     "Shell" : 6
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nashsu](https://github.com/nashsu) | 69 |
> | [@mayneyao](https://github.com/mayneyao) | 2 |

**最新版本**：v0.1.3 (2026-03-29)

> [!info]- Release Notes
> ## What's Changed
> * add weread shelf cover and omit footer in JSON/YAML/CSV by @mayneyao in https://github.com/nashsu/opencli-rs/pull/7
> 
> ## New Contributors
> * @mayneyao made their first contribution in https://github.com/nashsu/opencli-rs/pull/7
> 
> **Full Changelog**: https://github.com/nashsu/opencli-rs/compare/v0.1.2...v0.1.3

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/nashsu/opencli-rs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26 ~ 2026-03-29）
> **活躍天數** 3 天 · **最新 commit** chore: bump version to 0.1.3

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/nashsu/opencli-rs/issues/5) | macOS 下 browser 模式一直报 "[timeout] Daemon did not become ready | 2 | 1 |
> | [#6](https://github.com/nashsu/opencli-rs/issues/6) | 插件加载错误 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # opencli-rs
> **[English](README.md) | [中文](README.zh.md) | [日本語](README.ja.md)**
> 
> Blazing fast, memory-safe command-line tool — **Fetch information from any website with a single command**. Covers Twitter/X, Reddit, YouTube, HackerNews, Bilibili, Zhihu, Xiaohongshu,  and [55+ sites](#built-in-commands), with support for controlling Electron desktop apps, integrating local CLI tools (`gh`, `docker`, `kubectl`), powered by browser session reuse and AI-native discovery capabilities.
> 
> A **complete rewrite in pure Rust** based on [OpenCLI](https://github.com/jackwener/opencli) (TypeScript). Feature-equivalent, **up to 12x faster**, **10x less memory**, **single 4.7MB binary**, zero runtime dependencies.
> 
> **The perfect companion for OpenClaw/Agent** — Give your AI Agent the ability to reach information across the entire web, fetching real-time data from 55+ sites with a single command.
> **Built for AI Agents:** Configure `opencli-rs list` in `AGENT.md` or `.cursorrules`, and AI can automatically discover all available tools. Register your local CLI (`opencli-rs register mycli`), and AI can seamlessly invoke all your tools.
> 
> **CLI-fy All Desktop Apps!** Turn any Electron app into a command-line tool — Cursor, ChatGPT, Notion, Discord, and more. Reorganize, script, and extend desktop apps; AI can natively control itself — endless possibilities.
> 
> 
> ## Installation
> > **Just one file, download and use.** No Node.js, Python, or any runtime needed — just put it in your PATH and go.
> 
> 
> ### One-line Install Script (macOS / Linux)
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/nashsu/opencli-rs/main/scripts/install.sh | sh
> ```
> 
> Automatically detects your system and architecture, downloads the corresponding binary, and installs to `/usr/local/bin/`.
> 
> 
> ### Chrome Extension Setup (required for browser commands)
> 
> 1. Download `opencli-rs-chrome-extension.zip` from [GitHub Releases](https://github.com/nashsu/opencli-rs/releases/latest)
> 2. Extract to any directory
> 3. Open Chrome and go to `chrome://extensions`
> 4. Enable "Developer mode" (top right toggle)
> 5. Click "Load unpacked" and select the extracted folder
> 6. The extension will automatically connect to the opencli-rs daemon
> 
> > Public mode commands (hackernews, devto, lobsters, etc.) work without the extension.
> 
> 
> ## Skill Install
> 
> One-click install opencli-rs skill for your AI Agent:
> 
> ```bash
> npx skills add https://github.com/nashsu/opencli-rs-skill
> ```
> 
> 
> ## Quick Start
> 
> ```bash
> 
> # ✅ Generated adapter: example hot
> 
> #    Saved to: ~/.opencli-rs/adapters/example/hot.yaml
> 
> #    Run it now: opencli-rs example hot
> 
> 
> ## Features
> 
> - **55 sites, 333 commands** — Covers Bilibili, Twitter, Reddit, Zhihu, Xiaohongshu, YouTube, Hacker News, and more
> - **Browser session reuse** — Reuse logged-in sessions via Chrome extension, no need to manage tokens
> - **Declarative YAML Pipeline** — Describe data scraping workflows in YAML, add new adapters with zero code
> - **AI-native discovery** — `explore` analyzes website APIs, `generate` auto-creates adapters with one command, `cascade` probes authentication strategies
> - **Download media & articles** — Download videos (via yt-dlp), articles as Markdown with images localized
> - **External CLI passthrough** — Integrate GitHub CLI, Docker, Kubernetes, and other tools
> - **Multi-format output** — table, JSON, YAML, CSV, Markdown
> - **Single binary** — Compiles to a 4MB static binary with zero runtime dependencies
> 
> 
> # Get Hacker News top stories (public API, no browser needed)
> opencli-rs hackernews top --limit 10
> 
> 
> # Explore website API surface (endpoints, framework, stores)
> opencli-rs explore https://www.example.com --site mysite
> 
> 
> # With interactive fuzzing (click buttons to trigger hidden APIs)
> opencli-rs explore https://www.example.com --auto --click "Comments,CC"
> 
> 
> ## Configuration
> 
> 
> ## 🚀 Performance Comparison
> 
> | Metric | 🦀 opencli-rs (Rust) | 📦 opencli (Node.js) | Improvement |
> |------|:-----------------:|:-----------------:|:----:|
> | 💾 **Memory Usage (Public Commands)** | 15 MB | 99 MB | **6.6x** |
> | 💾 **Memory Usage (Browser Commands)** | 9 MB | 95 MB | **10.6x** |
> | 📏 **Binary Size** | 4.7 MB | ~50 MB (node_modules) | **10x** |
> | 🔗 **Runtime Dependencies** | None | Node.js 20+ | **Zero deps** |
> | ✅ **Test Pass Rate** | 103/122 (84%) | 104/122 (85%) | Near parity |
> 
> **⚡ Real-world Command Timing Comparison:**
> 
> | Command | 🦀 opencli-rs | 📦 opencli | Speedup |
> |------|:----------:|:-------:|:------:|
> | `bilibili hot` | **1.66s** | 20.1s | 🔥 **12x** |
> | `zhihu hot` | **1.77s** | 20.5s | 🔥 **11.6x** |
> | `xueqiu search 茅台` | **1.82s** | 9.2s | ⚡ **5x** |
> | `xiaohongshu search` | **5.1s** | 14s | ⚡ **2.7x** |
> 
> > Based on automated testing of 122 commands (55 sites), macOS Apple Silicon environment.
> 
> 
> # Comparison and logic
> "${{ item.score > 10 }}"
> "${{ item.title && !item.deleted }}"
> 
> 
> ### Windows (PowerShell)
> 
> ```powershell
> Invoke-WebRequest -Uri "https://github.com/nashsu/opencli-rs/releases/latest/download/opencli-rs-x86_64-pc-windows-msvc.zip" -OutFile opencli-rs.zip
> Expand-Archive opencli-rs.zip -DestinationPath .
> Move-Item opencli-rs.exe "$env:LOCALAPPDATA\Microsoft\WindowsApps\"
> ```
> 
> 
> ### Manual Download (Simplest)
> 
> Download the file for your platform from [GitHub Releases](https://github.com/nashsu/opencli-rs/releases/latest):
> 
> | Platform | File |
> |------|------|
> | macOS (Apple Silicon) | `opencli-rs-aarch64-apple-darwin.tar.gz` |
> | macOS (Intel) | `opencli-rs-x86_64-apple-darwin.tar.gz` |
> | Linux (x86_64) | `opencli-rs-x86_64-unknown-linux-musl.tar.gz` |
> | Linux (ARM64) | `opencli-rs-aarch64-unknown-linux-musl.tar.gz` |
> | Windows (x64) | `opencli-rs-x86_64-pc-windows-msvc.zip` |
> 
> After extracting, place `opencli-rs` (or `opencli-rs.exe` on Windows) in your system PATH.
> 
> 
> ### Build from Source
> 
> ```bash
> git clone https://github.com/nashsu/opencli-rs.git
> cd opencli-rs
> cargo build --release
> cp target/release/opencli-rs /usr/local/bin/   # macOS / Linux
> ```
> 
> 
> ### Update
> 
> Simply re-run the install command or download the latest release to overwrite the existing binary.
> 
> 
> # View all available commands
> opencli-rs --help
> 
> 
> # View commands for a specific site
> opencli-rs hackernews --help
> 
> 
> # JSON format output
> opencli-rs hackernews top --limit 5 --format json
> 
> 
> # Get Bilibili trending videos (requires browser + Cookie)
> opencli-rs bilibili hot --limit 20
> 
> 
> # Search Twitter (requires browser + login)
> opencli-rs twitter search "rust lang" --limit 10
> 
> 
> # Run diagnostics
> opencli-rs doctor
> 
> 
> # Generate shell completions
> opencli-rs completion bash >> ~/.bashrc
> opencli-rs completion zsh >> ~/.zshrc
> opencli-rs completion fish > ~/.config/fish/completions/opencli-rs.fish
> ```
> 
> 
> ## AI Discovery Capabilities
> 
> One command to discover APIs, auto-generate adapters, and start using them immediately:
> 
> ```bash
> 
> # One-shot: explore + synthesize + save adapter
> opencli-rs generate https://www.example.com --goal hot
> 
> # Auto-detect authentication strategy (PUBLIC → COOKIE → HEADER)
> opencli-rs cascade https://api.example.com/hot
> ```
> 
> **Discovery features:**
> - `.json` suffix probing (Reddit-style REST discovery)
> - `__INITIAL_STATE__` extraction (SSR sites like Bilibili, Xiaohongshu)
> - Pinia/Vuex store discovery and action mapping
> - Auto search endpoint discovery with `--goal search`
> - Framework detection (Vue/React/Next.js/Nuxt)
> 
> 
> ## Download
> 
> Download media and articles from supported sites:
> 
> ```bash
> 
> # Download Bilibili video (requires yt-dlp)
> opencli-rs bilibili download BV1xxx --output ./videos --quality 1080p
> 
> 
> # Download Zhihu article as Markdown with images
> opencli-rs zhihu download "https://zhuanlan.zhihu.com/p/xxx" --output ./articles
> 
> 
> # Download WeChat article as Markdown with images
> opencli-rs weixin download "https://mp.weixin.qq.com/s/xxx" --output ./articles
> 
> 
> # Download Twitter/X media (images + videos)
> opencli-rs twitter download nash_su --limit 10 --output ./twitter
> opencli-rs twitter download --tweet-url "https://x.com/user/status/123" --output ./twitter
> ```
> 
> **Download features:**
> - Vide

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[jackwener--opencli|jackwener/opencli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[Narcooo--inkos|Narcooo/inkos]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

[GitHub](https://github.com/nashsu/opencli-rs)

## 相關收錄

> [!note]- 直接競品（同子分類：命令行工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "命令行工具" AND file.name != "nashsu--opencli-rs"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "nashsu--opencli-rs"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "nashsu--opencli-rs" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "nashsu--opencli-rs"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nashsu--opencli-rs" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nashsu--opencli-rs");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nashsu--opencli-rs" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nashsu" AND file.name != "nashsu--opencli-rs"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nashsu--opencli-rs");
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
> const me = dv.page("Repos/nashsu--opencli-rs");
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
> const me = dv.page("Repos/nashsu--opencli-rs");
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
> const me = dv.page("Repos/nashsu--opencli-rs");
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
> const me = dv.page("Repos/nashsu--opencli-rs");
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

> **2026-03-30** — 首次收錄
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

- [[2026-03-30|2026-03-30]] — 首次收錄，982 stars
