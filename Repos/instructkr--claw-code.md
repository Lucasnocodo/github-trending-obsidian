---
repo: ultraworkers/claw-code
url: https://github.com/ultraworkers/claw-code
owner: ultraworkers
owner_type: Organization
language: Rust
license: N/A
description: "The repo is finally unlocked. enjoy the party! The fastest repo in history to surpass 100K stars ⭐. Join Discord: https://discord.gg/5TUQKqFWd Built in Rust using oh-my-codex."
homepage: ""
stars: 171023
stars_per_day: 34205
forks: 103707
open_issues: 1413
created: 2026-03-31
pushed_at: 2026-04-06
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "提供一個快速的 CLI 工具，讓開發者能夠輕鬆使用和管理 AI 代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 2
engagement: "high"
issue_close_rate: 0
repo_size_kb: 7120
readme_length: 2770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:63551,2026-04-06:171023"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "claw-code"
  - "ultraworkers/claw-code"
  - "提供一個快速的 CLI 工具，讓開發者能夠輕鬆使用和管理 AI 代理。"
---

# claw-code

**171.0k** stars · **34.2k** stars/天 · 建立 5 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/ultraworkers--claw-code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供一個快速的 CLI 工具，讓開發者能夠輕鬆使用和管理 AI 代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (34.2k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要快速開發和管理 AI 代理的開發者和工程師。
> **一句話重點** Claw Code 的設計理念在於提供一個高效且易於使用的 CLI 工具，讓開發者能夠快速管理 AI 代理。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "ultraworkers--claw-code" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到高效能的 AI 代理管理工具，值得嘗試。

> [!abstract] 核心創新
> 提供一個高效的 CLI 工具來管理和使用 AI 代理。

## 專案簡介

Claw Code 是一個用 Rust 實作的 CLI 工具，專為管理和使用 AI 代理而設計。使用者可以透過 `claw` 命令行介面來執行各種操作，例如使用 `prompt` 指令來生成摘要。這個工具的設計目的是提供一個高效且可擴展的環境，讓開發者能夠輕鬆整合和管理 AI 代理的功能。使用者首先需要透過 API 金鑰或 OAuth 流程進行身份驗證，然後就可以使用 CLI 進行各種操作。這樣的設計使得開發者能夠快速上手，並且能夠在不同的環境中靈活運用。核心功能包括支持多種命令和配置選項，並且提供了詳細的使用說明文件。

這個專案的技術棧主要是 Rust，並且包含 Python 和 Shell 腳本，這樣的選擇使得它在性能和可擴展性上都表現優異。與其他類似工具相比，Claw Code 提供了更為直觀的 CLI 介面和更高的執行效率，特別是在需要快速響應的場景下。使用者可以在各種環境中運行這個工具，無論是本地開發還是雲端部署。儘管目前有 1413 個開放問題，但這並不影響其核心功能的穩定性。對於需要快速開發和測試 AI 代理的團隊來說，這是一個非常合適的選擇。未來幾個月內，預期會有更多功能和改進推出，特別是在社群的活躍參與下。

**技術棧**：`Rust` · `Python` · `Shell` · `Dockerfile`

## 重點功能

- CLI 操作 — 使用 `./target/debug/claw prompt` 指令生成摘要，簡化操作流程。
- 身份驗證支持 — 支持 API 金鑰和 OAuth 流程，方便用戶登錄。
- 測試套件 — 使用 `cargo test --workspace` 指令運行測試，確保穩定性。
- 詳細文檔 — 提供多個文檔檔案，幫助用戶快速上手和了解功能。
- Rust 實作 — 基於 Rust 的高性能實現，適合需要高效能的場景。

## 快速開始

1. 切換到 Rust 目錄
```bash
cd rust
```
2. 構建工作區
```bash
cargo build --workspace
```
3. 查看 CLI 幫助信息
```bash
./target/debug/claw --help
```
4. 進行身份驗證
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```
5. 運行測試套件
```bash
cargo test --workspace
```

## 程式碼範例

```rust
[
  "# 前置條件：已經構建工作區",
  "./target/debug/claw prompt \"summarize this repository\"",
  "# 預期輸出：生成該倉庫的摘要"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 171023 stars（34205/天），forks 103707（60.6%），這顯示出極高的使用興趣。作者 Yeachan-Heo 和 code-yeongyu 在開源社群中有一定的影響力，這個專案解決了開發者在使用 AI 代理時的複雜性問題，提供了一個簡單的 CLI 工具來管理這些代理。近期的社交媒體討論和 Discord 社群的活躍也促進了專案的快速成長。這個工具的出現正好契合了開發者對於高效能和易用性的需求，特別是在 AI 領域的快速發展背景下。高達 60.6% 的 forks/stars 比率顯示出許多開發者正在積極修改和使用這個工具，這對於未來的發展是個好兆頭。

## 適合誰使用

**目標受眾**：需要快速開發和管理 AI 代理的開發者和工程師。

> [!example] 使用場景
> - 後端工程師用它來快速生成 AI 代理的摘要，因為使用 `claw prompt` 指令能夠節省大量時間，並提高工作效率。
> - DevOps 工程師用它來管理和部署 AI 代理，因為它的 CLI 工具能夠輕鬆整合到 CI/CD pipeline 中，提升自動化程度。
> - AI 研究人員用它來測試不同的 AI 模型，因為它支持多種配置和測試用例，方便進行快速迭代。

## 架構分析

Claw Code 採用 Rust 作為主要開發語言，這使得它在性能上具有優勢。整體架構分為 CLI 和 Rust 工作區，CLI 負責用戶交互，Rust 工作區則處理核心邏輯。使用者通過 CLI 發出指令，這些指令會被轉換為 Rust 函數調用，並返回結果。

這樣的設計使得用戶能夠快速獲得反饋，並且在需要擴展功能時能夠輕鬆添加新的指令。選擇 Rust 而非 Python 是因為其性能更佳，特別是在處理大量數據時。這樣的選擇雖然增加了學習曲線，但帶來了更高的執行效率。

整體來說，這個架構能夠支持高併發的請求，並且在未來擴展性方面也表現良好。

## 技術深入分析

Claw Code 的核心技術機制是基於 Rust 的 CLI 工具，這使得它在性能和響應速度上具有優勢。使用者可以通過簡單的命令行指令來與 AI 代理進行互動，這樣的設計使得開發者能夠快速上手並進行測試。效能方面，Rust 的編譯特性使得執行速度非常快，適合需要高效能的應用場景。設計上選擇 Rust 而非其他語言，主要是考量到性能和安全性，這樣的選擇雖然增加了學習成本，但長期來看能夠提供更穩定的運行環境。在技術風險方面，開放問題的數量顯示出目前的穩定性仍需加強，未來可能需要更多的測試和修正。整合方面，Claw Code 能夠與現有的開發工具鏈無縫對接，特別是在 CI/CD 流程中，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和範例，讓新手能夠快速上手。安裝過程相對順暢，但對於不熟悉 Rust 的用戶可能需要一些學習時間。文件目前僅提供英文版本，可能對非英語使用者造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 高效能 — 基於 Rust 的實現，適合高負載場景。
> - 易於使用 — 提供直觀的 CLI 操作，降低了使用門檻。
> - 活躍的社群 — 擁有大量的 forks 和 stars，顯示出強大的社群支持。

> [!danger] 缺點
> - 開放問題較多，可能影響穩定性。
> - 對於新手來說，Rust 的學習曲線較陡峭。
> - 目前功能尚未完全穩定，可能會有變動。

> [!warning] 注意事項
> - 目前有 1413 個開放問題，可能影響使用體驗。
> - 對於大型項目，可能需要額外的配置和調整。
> - 尚未有穩定的版本釋出，功能可能會頻繁變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的 CLI 工具，但主要針對資料同步，功能範圍較窄。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，與 Claw Code 的 AI 代理管理功能不同。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 提供源碼映射功能，適合需要深入分析的開發者，但不具備 Claw Code 的 CLI 操作便利性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，使用 Python 實作，適合需要處理大量資料的場景。 | 如果你的專案主要是資料同步，且團隊熟悉 Python，這是個不錯的選擇。 | low，因為 Python 的學習曲線相對較平緩。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，使用 Java 實作，功能範圍較窄。 | 如果你的專案需要強調數據隱私，且團隊熟悉 Java，這是更合適的選擇。 | medium，因為需要重新學習 Java 的生態系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，使用 Python 實作，適合需要處理大量資料的場景。 | 專注於數據隱私和安全，使用 Java 實作，功能範圍較窄。 |
> | 遷移成本 | - | low，因為 Python 的學習曲線相對較平緩。 | medium，因為需要重新學習 Java 的生態系統。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是資料同步，且團隊熟悉 Python，這是個 | 如果你的專案需要強調數據隱私，且團隊熟悉 Java，這是更合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和開發，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些環境下，Rust 的編譯時間可能較長，影響開發效率。
  - 解法：使用更高效的硬體或進行編譯優化。
- **[HIGH]** 開放問題數量較多，可能影響使用體驗。
  - 解法：定期檢查更新，並參與社群討論。
- [MEDIUM] 對於不熟悉 CLI 的用戶，使用門檻較高。
  - 解法：參考官方文檔，並尋求社群幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 這個工具能夠快速集成 AI 代理，提升開發效率。 |
| 大型企業的數據處理任務 | 普通 | 雖然性能優越，但開放問題可能影響穩定性。 |
| AI 研究團隊進行快速原型開發 | 非常適合 | 提供了靈活的 CLI 操作，適合快速迭代。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到高效能的 AI 代理管理工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需注意依賴的庫是否存在已知漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Claw Code 通常與其他 UltraWorkers 工具鏈搭配使用，例如 clawhip 和 oh-my-openagent。在一個典型的開發流程中，Claw Code 可以用來快速生成和測試 AI 代理，具體做法是使用 CLI 指令來執行各種操作。它能夠與 GitHub Actions 整合，支持 CI/CD 流程，並且可以在 VS Code 中使用相關插件進行開發。整合的摩擦點主要在於 Rust 的學習曲線，對於不熟悉 Rust 的團隊可能需要額外的時間來適應。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Claw Code 出現之前，開發者主要依賴於各種分散的工具來管理 AI 代理，這些工具往往功能不全且難以整合。隨著 AI 技術的快速發展，對於高效能和易用性的需求越來越迫切。Claw Code 的出現正好填補了這一空白，提供了一個集成化的解決方案。

它代表了開發者對於簡化工作流程和提高效率的追求，未來可能會隨著 AI 技術的進一步發展而持續演進。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
| Forks | 103.7k |
| Open Issues | 1413 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 7.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ultraworkers/claw-code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 96
>     "Python" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Yeachan-Heo](https://github.com/Yeachan-Heo) | 416 |
> | [@code-yeongyu](https://github.com/code-yeongyu) | 52 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://github.com/ultraworkers/claw-code) · [Discord](https://discord.gg/5TUQKqFWd)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-06）
> **活躍天數** 2 天 · **最新 commit** Emit structured doctor JSON diagnostics

## README 摘錄

> [!info]- 展開查看原文 README
> # Claw Code
> 
>   ultraworkers/claw-code
>   ·
>   Usage
>   ·
>   Rust workspace
>   ·
>   Parity
>   ·
>   Roadmap
>   ·
>   UltraWorkers Discord
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
> Claw Code is the public Rust implementation of the `claw` CLI agent harness.
> The canonical implementation lives in [`rust/`](./rust), and the current source of truth for this repository is **ultraworkers/claw-code**.
> 
> > [!IMPORTANT]
> > Start with [`USAGE.md`](./USAGE.md) for build, auth, CLI, session, and parity-harness workflows. Make `claw doctor` your first health check after building, use [`rust/README.md`](./rust/README.md) for crate-level details, read [`PARITY.md`](./PARITY.md) for the current Rust-port checkpoint, and see [`docs/container.md`](./docs/container.md) for the container-first workflow.
> 
> ## Current repository shape
> 
> - **`rust/`** — canonical Rust workspace and the `claw` CLI binary
> - **`USAGE.md`** — task-oriented usage guide for the current product surface
> - **`PARITY.md`** — Rust-port parity status and migration notes
> - **`ROADMAP.md`** — active roadmap and cleanup backlog
> - **`PHILOSOPHY.md`** — project intent and system-design framing
> - **`src/` + `tests/`** — companion Python/reference workspace and audit helpers; not the primary runtime surface
> 
> ## Quick start
> 
> ```bash
> cd rust
> cargo build --workspace
> ./target/debug/claw --help
> ./target/debug/claw prompt "summarize this repository"
> ```
> 
> Authenticate with either an API key or the built-in OAuth flow:
> 
> ```bash
> export ANTHROPIC_API_KEY="sk-ant-..."
> # or
> cd rust
> ./target/debug/claw login
> ```
> 
> Run the workspace test suite:
> 
> ```bash
> cd rust
> cargo test --workspace
> ```
> 
> ## Documentation map
> 
> - [`USAGE.md`](./USAGE.md) — quick commands, auth, sessions, config, parity harness
> - [`rust/README.md`](./rust/README.md) — crate map, CLI surface, features, workspace layout
> - [`PARITY.md`](./PARITY.md) — parity status for the Rust port
> - [`rust/MOCK_PARITY_HARNESS.md`](./rust/MOCK_PARITY_HARNESS.md) — deterministic mock-service harness details
> - [`ROADMAP.md`](./ROADMAP.md) — active roadmap and open cleanup work
> - [`PHILOSOPHY.md`](./PHILOSOPHY.md) — why the project exists and how it is operated
> 
> ## Ecosystem
> 
> Claw Code is built in the open alongside the broader UltraWorkers toolchain:
> 
> - [clawhip](https://github.com/Yeachan-Heo/clawhip)
> - [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
> - [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
> - [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
> - [UltraWorkers Discord](https://discord.gg/5TUQKqFWd)
> 
> ## Ownership / affiliation disclaimer
> 
> - This repository does **not** claim ownership of the original Claude Code source material.
> - This repository is **not affiliated with, endorsed by, or maintained by Anthropic**.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--opencli|jackwener/opencli]]

[GitHub](https://github.com/ultraworkers/claw-code)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "ultraworkers--claw-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ultraworkers--claw-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ultraworkers--claw-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ultraworkers--claw-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ultraworkers" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-01|2026-04-01]] — 首次收錄，63.6k stars
