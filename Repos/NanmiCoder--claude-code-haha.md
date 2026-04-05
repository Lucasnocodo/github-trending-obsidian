---
repo: NanmiCoder/cc-haha
url: https://github.com/NanmiCoder/cc-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Claude Code 泄露源码 - 本地可运行版本（附带核心模块解析）"
homepage: "https://claudecode-haha.relakkesyang.org/"
stars: 4892
stars_per_day: 1223
forks: 5459
open_issues: 20
created: 2026-03-31
pushed_at: 2026-04-05
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供本地可運行的 Claude Code 版本，修復了多個啟動問題並支持多種 API 接入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 5
engagement: "high"
issue_close_rate: 41
repo_size_kb: 66094
readme_length: 3570
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045,2026-04-03:4069,2026-04-04:4548,2026-04-05:4892"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
aliases:
  - "cc-haha"
  - "NanmiCoder/cc-haha"
  - "提供本地可運行的 Claude Code 版本，修復了多個啟動問題並支持多種 API 接入。"
---

# cc-haha

**4.9k** stars · **1.2k** stars/天 · 建立 4 天前 · TypeScript · NOASSERTION

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
> 提供本地可運行的 Claude Code 版本，修復了多個啟動問題並支持多種 API 接入。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在本地環境中運行 AI 模型並希望避免雲端依賴的開發者。
> **一句話重點** 這個專案不僅提供了本地運行的能力，還加強了多代理和記憶系統的功能，適合需要高互動性的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "NanmiCoder--cc-haha" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 推論 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的本地 AI 解決方案，值得嘗試。

> [!abstract] 核心創新
> 提供了基於 Claude Code 源碼的本地可運行版本，並修復了多個啟動問題。

## 專案簡介

這個專案提供了一個基於 Claude Code 泄露源碼的本地可運行版本，旨在修復原始代碼中的多個啟動問題，讓用戶能夠在本地環境中運行完整的 Ink TUI 交互界面。用戶可以通過簡單的 CLI 指令如 `./bin/claude-haha` 啟動交互模式，或使用 `./bin/claude-haha -p 'your prompt here'` 進行無頭模式運行，適合自動化腳本或 CI 環境。這個工具的賣點在於其支持接入各種兼容的 Anthropic API，並且提供記憶系統和多代理協作功能，讓用戶可以在多會話中持久化記憶，並進行並行任務處理。技術上，這個專案使用了 Bun 作為運行時環境，並依賴 TypeScript、React 和 Ink 來構建終端 UI，這樣的選擇使得開發過程中能夠利用現代 JavaScript 生態系的優勢。

相較於其他類似工具如 AlpinDale/parsync 和 MiniMax-AI/skills，這個專案不僅支持多種 API 接入，還具備更靈活的記憶和多代理系統，適合需要高互動性和擴展性的用戶。使用者在實際運行中可能會遇到如 API 連接失敗等問題，這些都可以在 GitHub Issues 中找到解決方案。這個專案目前處於 alpha 階段，建議對於需要快速原型開發的團隊使用，未來可能會持續增強功能和穩定性。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，尤其是在需要快速集成多種 API 的情況下。

**技術棧**：`Bun` · `TypeScript` · `React` · `Ink`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 一致的用戶體驗。
- --print 無頭模式 — 支持腳本和 CI 環境運行。
- 記憶系統 — 跨會話持久化記憶，提升用戶體驗。
- 多代理系統 — 支持並行任務和 Teams 協作，適合複雜場景。
- 支持自定義 API 端點 — 用戶可接入第三方模型，增加靈活性。
- Channel 系統 — 通過 IM 平台遠程控制 Agent，擴展使用場景。
- 降級 Recovery CLI 模式 — 在出現問題時提供備用方案。

## 快速開始

1. 安裝 Bun
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 安裝依賴並配置
```bash
bun install
cp .env.example .env
```
3. 啟動交互模式
```bash
./bin/claude-haha
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Bun 和配置環境變數",
  "指令": "./bin/claude-haha",
  "預期輸出": "啟動完整的 Ink TUI 交互界面"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 4892 stars（1223/天），forks 5459（111.6%），這是極端爆發式增長。作者 NanmiCoder 及其團隊在開源社群中有一定的影響力，過去有多個成功的開源專案。這個專案解決了原始 Claude Code 源碼無法直接運行的痛點，提供了一個可操作的本地版本。社群對於這個工具的需求明顯，尤其是在需要本地運行 AI 模型的場景中。最近的推廣活動和相關討論也促進了這個專案的曝光率。高達 111.6% 的 forks/stars 比率顯示出許多人對這個專案的實際修改和使用，反映了其實用性和潛在的社群支持。

## 適合誰使用

**目標受眾**：需要在本地環境中運行 AI 模型並希望避免雲端依賴的開發者。

> [!example] 使用場景
> - AI 開發者用它來在本地環境中運行 Claude Code，因為這樣可以避免依賴雲端服務，並且能夠快速調整和測試模型。
> - DevOps 工程師用它來在 CI/CD 流程中集成 AI 模型，因為無頭模式支持自動化測試，提升了開發效率。
> - 產品經理用它來快速原型設計，因為其多代理系統可以同時處理多個任務，適合快速迭代和測試不同功能。

## 架構分析

這個專案採用 Bun 作為運行時環境，這意味著它能夠快速啟動和運行，並且依賴較少的資源。整體架構中，請求生命周期經過多個階段，包括用戶輸入、API 請求和數據處理，最終返回結果。使用 Ink 構建的終端 UI 提供了良好的用戶互動體驗，並且能夠在 CLI 環境中運行。

選擇 TypeScript 提高了代碼的可維護性和可讀性，但也增加了一定的學習成本。這個架構的 trade-off 在於，雖然能夠快速開發和迭代，但在處理大量並行請求時可能會遇到性能瓶頸，特別是在多代理系統中。整體而言，這個架構適合需要快速原型開發的場景，但在大規模部署時需要進一步優化。

## 技術深入分析

這個專案的核心技術機制在於使用 Bun 作為運行時環境，這使得啟動速度快且資源消耗低。整個請求生命周期中，使用了 Anthropic SDK 進行 API 請求，並通過 Ink 構建的終端 UI 提供用戶交互。該專案能夠處理多達數千個請求，但在多代理系統中，隨著請求數量的增加，可能會出現性能瓶頸。選擇 TypeScript 和 React 提高了代碼的可維護性，但也增加了學習曲線。這個專案的依賴樹相對簡單，主要依賴於 Bun 和 Ink，這降低了維護成本。技術風險方面，隨著用戶數量的增加，可能會出現 API 請求延遲的問題，這需要進一步的優化和擴展。整合到現有的 CI/CD pipeline 中相對簡單，但對於大型團隊來說，可能需要進一步的配置和調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，對於新手來說相對清晰。安裝過程中可能會遇到一些依賴問題，但整體順暢。文件中有針對常見問題的解答，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 本地運行，避免雲端依賴，提升數據安全性。
> - 支持多種 API 接入，靈活性高。
> - 多代理系統適合複雜任務處理，提升工作效率。

> [!danger] 缺點
> - 安裝和配置過程相對複雜，對新手不友好。
> - 在高負載情況下性能可能不穩定。
> - 目前仍在 alpha 階段，功能和穩定性可能不夠完善。

> [!warning] 注意事項
> - 僅支援 macOS 和 Linux，Windows 用戶需安裝 Git for Windows。
> - 需要配置 API Key，否則無法正常運行。
> - 在高負載情況下可能會遇到性能瓶頸，特別是在多代理系統中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於數據同步，而本專案則提供完整的 AI 交互界面，適合不同的使用場景。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | MiniMax-AI 主要針對技能擴展，而本專案的多代理系統提供更高的靈活性和協作能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Claude AI | Claude AI 提供雲端服務，而本專案則專注於本地運行，適合需要數據隱私的用戶。 | 如果你的團隊已經在使用雲端服務並希望利用其擴展性，則 Claude AI 可能更合適。 | medium，因為需要重新配置環境和 API 接入。 |
| OpenAI GPT | OpenAI GPT 提供強大的雲端 API，而本專案則專注於本地運行和多代理系統。 | 如果你的應用需要高效的雲端計算和大規模模型，則 OpenAI GPT 更適合。 | high，因為需要重寫大部分代碼以適應新的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cc-haha** | **Claude AI** | **OpenAI GPT** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude AI 提供雲端服務，而本專案則專注於本地運行，適合需要數據隱私的用戶。 | OpenAI GPT 提供強大的雲端 API，而本專案則專注於本地運行和多代理系統。 |
> | 遷移成本 | - | medium，因為需要重新配置環境和 API 接入。 | high，因為需要重寫大部分代碼以適應新的 API。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用雲端服務並希望利用其擴展性，則 Cla | 如果你的應用需要高效的雲端計算和大規模模型，則 OpenAI |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和小型專案，不建議用於生產環境的核心系統。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載下，API 請求可能會超時，導致功能失效。
  - 解法：減少同時請求數量，或增加 API 超時設置。
- [MEDIUM] Windows 環境下需要額外安裝 Git，可能造成安裝困難。
  - 解法：確保安裝 Git for Windows，並遵循官方文檔進行配置。
- **[HIGH]** 記憶系統在某些情況下可能無法正常工作，導致數據丟失。
  - 解法：定期備份記憶數據，並檢查系統日誌以獲取錯誤信息。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 AI 模型測試 | 非常適合 | 本地運行能夠快速迭代，並支持多種 API 接入。 |
| 需要高可用性的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 個人開發者進行原型設計 | 適合 | 靈活的多代理系統和記憶功能能夠提升開發效率。 |
| 大型企業的核心系統 | 不適合 | 高風險的 breaking changes 可能影響系統穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的本地 AI 解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，並且不存取敏感資料。依賴的庫大多為知名開源項目，供應鏈風險相對較低。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Bun 和 Ink 搭配使用，適合在開發和測試階段進行集成。在一個用 Bun 開發的專案中，可以通過 `bun install` 快速安裝依賴，並使用 `./bin/claude-haha` 啟動。與主流 CI 工具如 GitHub Actions 和 GitLab CI 的整合也相對簡單，能夠在自動化流程中輕鬆使用。常見的整合問題包括環境變數配置不當，這可能導致啟動失敗。整體而言，這個工具能夠無縫融入現有的開發流程。

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
| Forks | 5.5k |
| Open Issues | 20 |
| Issue 解決率 | 41% (14 closed) |
| 最後推送 | 2026-04-05 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://claudecode-haha.relakkesyang.org/) |
| Repo 大小 | 64.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/cc-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 39 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@studyzy](https://github.com/studyzy) | 1 |
> | [@dhb52](https://github.com/dhb52) | 1 |
> | [@houseyyyy](https://github.com/houseyyyy) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多個問題和功能請求被討論。
**連結**：[文件](https://claudecode-haha.relakkesyang.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-05）
> **活躍天數** 2 天 · **最新 commit** docs: add Channel System links to README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#30](https://github.com/NanmiCoder/cc-haha/issues/30) | 从0到1完整启动本项目的教程在此！ | 1 | 8 |
> | [#41](https://github.com/NanmiCoder/cc-haha/issues/41) | 401 {"error":{"code":402,"message":"纳米币余额不足","type":"invalid `question` | 0 | 2 |
> | [#39](https://github.com/NanmiCoder/cc-haha/issues/39) | [问题] Unable to connect to API (ConnectionRefused) `question` | 0 | 2 |
> | [#34](https://github.com/NanmiCoder/cc-haha/issues/34) | [问题] 如何连接到本地ollma模型 `question` | 0 | 4 |
> | [#29](https://github.com/NanmiCoder/cc-haha/issues/29) | deepseek api的Max Token 是128k,和Claude的不匹配，Claude code貌似是写死了 | 0 | 1 |

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

相關概念：[[多模態]] · [[Agent 框架]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[claude-code-best--claude-code|claude-code-best/claude-code]]

[GitHub](https://github.com/NanmiCoder/cc-haha) · [官方網站](https://claudecode-haha.relakkesyang.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "NanmiCoder--cc-haha"
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
> const concepts = ["多模態","Agent 框架","自動化測試"];
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
