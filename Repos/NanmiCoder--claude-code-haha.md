---
repo: NanmiCoder/cc-haha
url: https://github.com/NanmiCoder/cc-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Claude Code 泄露源码 - 本地可运行版本（附带核心模块解析）"
homepage: "https://claudecode-haha.relakkesyang.org/"
stars: 5761
stars_per_day: 576
forks: 6135
open_issues: 29
created: 2026-03-31
pushed_at: 2026-04-09
first_seen: 2026-04-02
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
last_reviewed: 2026-04-02
use_case: "提供本地可運行的 Claude Code 版本，解決原始碼啟動問題並支持多種 API 接入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 5
engagement: "high"
issue_close_rate: 36
repo_size_kb: 69897
readme_length: 3570
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045,2026-04-03:4069,2026-04-04:4548,2026-04-05:4892,2026-04-06:5070,2026-04-07:5250,2026-04-08:5424,2026-04-09:5565,2026-04-10:5672,2026-04-11:5761"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "cc-haha"
  - "NanmiCoder/cc-haha"
  - "提供本地可運行的 Claude Code 版本，解決原始碼啟動問題並支持多種 API 接入。"
---

# cc-haha

**5.8k** stars · **576** stars/天 · 建立 10 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/NanmiCoder--cc-haha");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供本地可運行的 Claude Code 版本，解決原始碼啟動問題並支持多種 API 接入。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (576 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在本地運行 AI 模型並希望靈活接入多種 API 的開發者。
> **一句話重點** 這個專案不僅提供了本地運行的 AI 解決方案，還支持多種 API 接入，極大提升了靈活性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "NanmiCoder--cc-haha" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到靈活的本地 AI 解決方案，值得一試。

> [!abstract] 核心創新
> 提供了完整的本地可運行版本，並支持多種 API 接入，解決了原始碼無法運行的問題。

## 專案簡介

Claude Code Haha 是一個基於泄露的 Claude Code 源碼修復而成的本地可運行版本，旨在解決原始碼無法直接運行的問題。使用者可以透過簡單的 CLI 指令如 `./bin/claude-haha` 啟動交互式 TUI 界面，或使用 `./bin/claude-haha -p 'your prompt here'` 進入無頭模式，適合自動化腳本或 CI 場景。這個專案的賣點在於它提供了完整的 Ink TUI 交互界面，並支持接入任意兼容的 Anthropic API，如 MiniMax 和 OpenRouter，讓開發者能夠靈活使用不同的模型和插件。技術上，專案使用了 Bun 作為運行時，並結合 TypeScript 和 React 來構建終端 UI，這樣的選擇使得開發過程中能夠享受到現代 JavaScript 生態系的優勢。

與其他類似工具相比，這個專案不僅支持多代理系統和記憶系統，還能通過 Telegram、Discord 等 IM 平台進行遠程控制，這在同類產品中是相對少見的。使用者在實際操作中可能會遇到 API 錯誤或文檔不一致的問題，這些都是目前社群中熱門的討論話題。這個專案目前處於活躍開發中，適合對本地 AI 解決方案有需求的開發者，特別是那些希望在無網絡環境下運行的使用者。未來六個月內，預期會進一步增強多代理協作和插件系統的功能，提升使用體驗。

**技術棧**：`Bun` · `TypeScript` · `React` · `Ink` · `Commander.js`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 一致的用戶體驗。
- 無頭模式支持 — 使用 `./bin/claude-haha -p 'your prompt here'` 進行自動化操作。
- 記憶系統 — 跨會話持久化記憶，提升使用者體驗，參考 [使用指南](docs/memory/01-usage-guide.md)。
- 多代理系統 — 支持多代理協作和並行任務，參考 [使用指南](docs/agent/01-usage-guide.md)。
- 支持自定義 API 端點 — 方便接入第三方模型，參考 [第三方模型使用指南](docs/guide/third-party-models.md)。

## 快速開始

1. 安裝 Bun
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 安裝依賴並配置環境變數
```bash
bun install && cp .env.example .env
```
3. 啟動交互模式
```bash
./bin/claude-haha
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 5761 stars（576/天），forks 6135（106.5%），這顯示出極高的使用者興趣。主要貢獻者 NanmiCoder 和其他開發者在開源社群中有一定的影響力，過去可能參與過其他知名專案。這個專案解決了原始 Claude Code 無法運行的痛點，提供了本地化的解決方案，讓開發者能夠在無網絡環境下使用 AI。近期的社群討論和問題反映出使用者對於功能和穩定性的需求，這也促進了專案的快速成長。技術上，Bun 的使用使得這個專案在性能上具備優勢，這是許多開發者所關注的焦點。forks/stars 比率超過 100% 代表著許多使用者不僅在觀望，還積極參與修改和擴展功能。

## 適合誰使用

**目標受眾**：需要在本地運行 AI 模型並希望靈活接入多種 API 的開發者。

> [!example] 使用場景
> - AI 開發者用它來在本地環境測試和運行 Claude Code，因為它提供了完整的 TUI 界面和多種 API 接入選項，方便調試和開發。
> - 系統管理員用它來自動化日常任務，因為支持無頭模式的 CLI 操作能夠輕鬆集成到 CI/CD 流程中。
> - 研究人員用它來探索不同的 AI 模型，因為可以靈活接入多種第三方模型，並進行比較和分析。

## 架構分析

這個專案採用 Bun 作為運行時，結合 TypeScript 和 React 來構建終端 UI，這樣的架構設計使得開發者能夠利用現代 JavaScript 生態的優勢。請求處理流程中，使用 Commander.js 進行 CLI 解析，並透過 Ink 提供的組件來渲染終端界面。多代理系統的設計使得使用者可以同時運行多個代理，這在其他同類工具中較為少見。選擇 Bun 作為運行時的代價是需要額外安裝，但其性能優勢使得整體響應速度更快。擴展性方面，這個架構能夠支持未來的功能擴展，如更多的 API 接入和插件系統。

## 技術深入分析

Claude Code Haha 的核心技術機制在於其基於 Bun 的運行時環境，這使得它在性能上具備優勢。專案使用 TypeScript 和 React 組合來構建終端 UI，這樣的選擇讓開發者能夠利用現代 JavaScript 生態的優勢。效能方面，這個專案能夠在本地環境中快速響應用戶請求，並支持多代理系統，這在同類產品中相對少見。設計上，選擇 Bun 作為運行時的代價是需要額外安裝，但其性能優勢使得整體響應速度更快。技術風險方面，API 錯誤處理不夠成熟，可能在高負載情況下出現問題。整合方面，與主流 CI/CD 工具的相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件質量良好，提供了安裝和使用的詳細步驟。安裝過程相對順暢，但需要注意環境變數的配置。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 支持多種 API 接入，靈活性高。
> - 提供完整的本地運行環境，無需依賴雲端服務。
> - 多代理系統設計，適合團隊協作和並行任務。

> [!danger] 缺點
> - 安裝過程較為繁瑣，需要額外安裝 Bun 和配置環境變數。
> - 目前文檔不夠完善，使用者可能會遇到不一致的問題。
> - API 錯誤處理不夠成熟，可能影響使用體驗。

> [!warning] 注意事項
> - 需要安裝 Bun 作為運行時環境。
> - 目前僅支持 Linux 和 macOS，Windows 用戶需要額外安裝 Git for Windows。
> - API 錯誤處理不夠完善，可能會遇到 503 錯誤。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了類似的本地 AI 解決方案，但功能較為簡單，缺乏多代理系統的支持。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 專注於技能擴展和插件系統，但不支持本地運行，需依賴雲端服務。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案提供了類似的本地 AI 解決方案，但功能較為簡單，缺乏多代理系統的支持。 | 如果你需要一個簡單的本地 AI 解決方案，並且不需要多代理功能，這個工具會是個不錯的選擇。 | low，因為功能相似，轉移成本不高。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 專注於技能擴展和插件系統，但不支持本地運行，需依賴雲端服務。 | 如果你的團隊已經在使用雲端服務並需要擴展能力，這個工具會更適合。 | medium，因為需要重新設計整個架構以適應雲端環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cc-haha** | **boneyard** | **skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個專案提供了類似的本地 AI 解決方案，但功能較為簡單，缺乏多代理系統的支持。 | 專注於技能擴展和插件系統，但不支持本地運行，需依賴雲端服務。 |
> | 遷移成本 | - | low，因為功能相似，轉移成本不高。 | medium，因為需要重新設計整個架構以適應雲端環境。 |
> | 適用場景 | 主要場景 | 如果你需要一個簡單的本地 AI 解決方案，並且不需要多代理功 | 如果你的團隊已經在使用雲端服務並需要擴展能力，這個工具會更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和開發，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** API 錯誤處理不夠完善，可能會遇到 503 錯誤
  - 解法：檢查 API Key 是否正確，並確保服務可用。
- [MEDIUM] 文檔不夠詳細，使用者可能會遇到不一致的問題
  - 解法：參考社群討論或 GitHub Issues 獲取解決方案。
- [MEDIUM] Windows 環境下需要安裝 Git for Windows，增加安裝複雜度
  - 解法：在 Linux 或 macOS 環境中運行以簡化安裝過程。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要本地運行 AI 模型 | 非常適合 | 提供了靈活的 API 接入和本地運行能力，滿足開發需求。 |
| 大型企業需要穩定的雲端 AI 解決方案 | 不適合 | 目前尚未成熟，可能不符合生產環境的需求。 |
| 研究人員需要探索不同的 AI 模型 | 適合 | 支持多種 API 接入，方便進行模型比較和分析。 |
| 需要快速原型開發的創業公司 | 非常適合 | 本地運行的特性使得開發過程更加靈活和高效。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到靈活的本地 AI 解決方案，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，但需妥善管理 API Key 和環境變數，避免敏感資料洩露。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Claude Code Haha 最常與 Bun 和其他 JavaScript 生態系工具搭配使用，特別是在開發和測試階段。實際整合範例中，開發者可以在一個使用 React 的專案中，通過 `./bin/claude-haha` 命令啟動本地 AI 模型，並在終端中進行交互。與主流 CI/CD 工具如 GitHub Actions 的相容性良好，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於環境變數的配置，使用者需要確保正確設置以避免啟動失敗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Claude Code Haha 出現之前，開發者主要依賴雲端服務來運行 AI 模型，但這樣的方案在無網絡環境下無法使用。隨著本地運行需求的增加，這個專案的出現正好填補了這一空白。技術上，Bun 的出現使得本地運行的性能得以提升，這在過去是難以實現的。

這個工具代表了本地 AI 解決方案的趨勢，未來可能會有更多類似的工具出現，滿足不同場景的需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解 Bun 的基本操作
- 有 CLI 工具使用經驗

> [!tip] 導入策略
> 第一週：在個人 side project 中試用。第二週：在內部工具中導入，測試功能。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品的非核心模組中開始使用。

**成功指標**：使用後開發效率提升 30%，錯誤率降低至 5% 以下。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方提供的工具轉換為其他平台的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
| Forks | 6.1k |
| Open Issues | 29 |
| Issue 解決率 | 36% (16 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://claudecode-haha.relakkesyang.org/) |
| Repo 大小 | 68.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/cc-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 41 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@studyzy](https://github.com/studyzy) | 1 |
> | [@dhb52](https://github.com/dhb52) | 1 |
> | [@houseyyyy](https://github.com/houseyyyy) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://claudecode-haha.relakkesyang.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-09）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #53 from octo-patch/feature/add-minimax-provider

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#43](https://github.com/NanmiCoder/cc-haha/issues/43) | api 503错误咋解决 `question` | 1 | 2 |
> | [#30](https://github.com/NanmiCoder/cc-haha/issues/30) | 从0到1完整启动本项目的教程在此！ | 1 | 9 |
> | [#29](https://github.com/NanmiCoder/cc-haha/issues/29) | deepseek api的Max Token 是128k,和Claude的不匹配，Claude code貌似是写死了 | 1 | 2 |
> | [#52](https://github.com/NanmiCoder/cc-haha/issues/52) | [BUG]/agents看不到智能体清单 `bug` | 0 | 1 |
> | [#51](https://github.com/NanmiCoder/cc-haha/issues/51) | Discrepancy between documentation/examples and OpenRouter en `bug` `documentation` `question` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Haha
> 
>   
> 
> [](https://github.com/NanmiCoder/cc-haha/stargazers)
> [](https://github.com/NanmiCoder/cc-haha/network/members)
> [](https://github.com/NanmiCoder/cc-haha/issues)
> [](https://github.com/NanmiCoder/cc-haha/pulls)
> [](https://github.com/NanmiCoder/cc-haha/blob/main/LICENSE)
> [](README.md)
> [](README.en.md)
> [](https://claudecode-haha.relakkesyang.org)
> 
> 基于 Claude Code 泄露源码修复的**本地可运行版本**，支持接入任意 Anthropic 兼容 API（如 MiniMax、OpenRouter 等）。
> 
> > 原始泄露源码无法直接运行。本仓库修复了启动链路中的多个阻塞问题，使完整的 Ink TUI 交互界面可以在本地工作。
> 
>   功能 · 架构概览 · 快速开始 · 环境变量 · FAQ · 全局使用 · 更多文档
> 
> ---
> 
> ## 功能
> 
> - 完整的 Ink TUI 交互界面（与官方 Claude Code 一致）
> - `--print` 无头模式（脚本/CI 场景）
> - 支持 MCP 服务器、插件、Skills
> - 支持自定义 API 端点和模型（[第三方模型使用指南](docs/guide/third-party-models.md)）
> - **记忆系统**（跨会话持久化记忆）— [使用指南](docs/memory/01-usage-guide.md)
> - **多 Agent 系统**（多代理编排、并行任务、Teams 协作）— [使用指南](docs/agent/01-usage-guide.md) | [实现原理](docs/agent/02-implementation.md)
> - **Skills 系统**（可扩展能力插件、自定义工作流）— [使用指南](docs/skills/01-usage-guide.md) | [实现原理](docs/skills/02-implementation.md)
> - **Channel 系统**（通过 Telegram/飞书/Discord 等 IM 远程控制 Agent）— [架构解析](docs/channel/01-channel-system.md)
> - **Computer Use 桌面控制** — [功能指南](docs/features/computer-use.md) | [架构解析](docs/features/computer-use-architecture.md)
> - 降级 Recovery CLI 模式（`CLAUDE_CODE_FORCE_RECOVERY_CLI=1 ./bin/claude-haha`）
> 
> ---
> 
> ## 架构概览
> 
>   
>     整体架构
>     请求生命周期
>     工具系统
>     多 Agent 架构
>   
>   
>     终端 UI
>     权限与安全
>     服务层
>     状态与数据流
>   
> 
> ---
> 
> ## 快速开始
> 
> ### 1. 安装 Bun
> 
> ```bash
> # macOS / Linux
> curl -fsSL https://bun.sh/install | bash
> 
> # macOS (Homebrew)
> brew install bun
> 
> # Windows (PowerShell)
> powershell -c "irm bun.sh/install.ps1 | iex"
> ```
> 
> > 精简版 Linux 如提示 `unzip is required`，先运行 `apt update && apt install -y unzip`
> 
> ### 2. 安装依赖并配置
> 
> ```bash
> bun install
> cp .env.example .env
> # 编辑 .env 填入你的 API Key，详见 docs/guide/env-vars.md
> ```
> 
> ### 3. 启动
> 
> #### macOS / Linux
> 
> ```bash
> ./bin/claude-haha                          # 交互 TUI 模式
> ./bin/claude-haha -p "your prompt here"    # 无头模式
> ./bin/claude-haha --help                   # 查看所有选项
> ```
> 
> #### Windows
> 
> > **前置要求**：必须安装 [Git for Windows](https://git-scm.com/download/win)
> 
> ```powershell
> # PowerShell / cmd 直接调用 Bun
> bun --env-file=.env ./src/entrypoints/cli.tsx
> 
> # 或在 Git Bash 中运行
> ./bin/claude-haha
> ```
> 
> ### 4. 全局使用（可选）
> 
> 将 `bin/` 加入 PATH 后可在任意目录启动，详见 [全局使用指南](docs/guide/global-usage.md)：
> 
> ```bash
> export PATH="$HOME/path/to/claude-code-haha/bin:$PATH"
> ```
> 
> ---
> 
> ## 技术栈
> 
> | 类别 | 技术 |
> |------|------|
> | 运行时 | [Bun](https://bun.sh) |
> | 语言 | TypeScript |
> | 终端 UI | React + [Ink](https://github.com/vadimdemedes/ink) |
> | CLI 解析 | Commander.js |
> | API | Anthropic SDK |
> | 协议 | MCP, LSP |
> 
> ---
> 
> ## 更多文档
> 
> | 文档 | 说明 |
> |------|------|
> | [环境变量](docs/guide/env-vars.md) | 完整环境变量参考和配置方式 |
> | [第三方模型](docs/guide/third-party-models.md) | 接入 OpenAI / DeepSeek / Ollama 等非 Anthropic 模型 |
> | [记忆系统](docs/memory/01-usage-guide.md) | 跨会话持久化记忆的使用与实现 |
> | [多 Agent 系统](docs/agent/01-usage-guide.md) | 多代理编排、并行任务执行与 Teams 协作 |
> | [Skills 系统](docs/skills/01-usage-guide.md) | 可扩展能力插件、自定义工作流与条件激活 |
> | [Channel 系统](docs/channel/01-channel-system.md) | 通过 Telegram/飞书/Discord 等 IM 平台远程控制 Agent |
> | [Computer Use](docs/features/computer-use.md) | 桌面控制功能（截屏、鼠标、键盘）— [架构解析](docs/features/computer-use-architecture.md) |
> | [全局使用](docs/guide/global-usage.md) | 在任意目录启动 claude-haha |
> | [常见问题](docs/guide/faq.md) | 常见错误排查 |
> | [源码修复记录](docs/reference/fixes.md) | 相对于原始泄露源码的修复内容 |
> | [项目结构](docs/reference/project-structure.md) | 代码目录结构说明 |
> 
> ---
> 
> ## Disclaimer
> 
> 本仓库基于 2026-03-31 从 Anthropic npm registry 泄露的 Claude Code 源码。所有原始源码版权归 [Anthropic](https://www.anthropic.com) 所有。仅供学习和研究用途。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]]

[GitHub](https://github.com/NanmiCoder/cc-haha) · [官方網站](https://claudecode-haha.relakkesyang.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "NanmiCoder--cc-haha" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","多模態","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NanmiCoder--cc-haha" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NanmiCoder--cc-haha" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NanmiCoder" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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

- [[2026-04-02|2026-04-02]] — 首次收錄，3.0k stars
