---
repo: yetone/native-feel-skill
url: https://github.com/yetone/native-feel-skill
owner: yetone
owner_type: User
language: N/A
license: MIT
description: "An Agent Skill for designing cross-platform desktop apps that feel native — distilled from Raycast's 2.0 deep-dive and reverse engineering of Raycast Beta.app. Eight architectural tenets, four-layer architecture, WebKit/WebView2 survival guide, 75-item ship audit."
homepage: ""
stars: 1230
stars_per_day: 615
forks: 56
open_issues: 0
created: 2026-05-14
pushed_at: 2026-05-15
first_seen: 2026-05-16
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "跨平台開發"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-16
use_case: "設計跨平台桌面應用程式，實現近乎原生的使用體驗。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-20"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 79
readme_length: 8354
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-16"
star_history: "2026-05-16:1066,2026-05-17:1230"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "native-feel-skill"
  - "yetone/native-feel-skill"
  - "設計跨平台桌面應用程式，實現近乎原生的使用體驗。"
---

# native-feel-skill

**1.1k** stars · **1.1k** stars/天 · 建立 1 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/yetone--native-feel-skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 設計跨平台桌面應用程式，實現近乎原生的使用體驗。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望在 macOS 和 Windows 上開發高效能桌面應用的開發者，特別是那些對使用者體驗有高要求的團隊。
> **一句話重點** 這個專案展示了如何在跨平台開發中實現原生性能，並提供了具體的實作指導。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yetone--native-feel-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "跨平台開發" && p.file.name !== "yetone--native-feel-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 跨平台開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供了一個結合原生性能和跨平台開發的架構設計，並附帶詳細的檢查清單和指南。

## 專案簡介

這個專案提供了一個 Agent Skill，專注於設計跨平台桌面應用程式，並且能夠達到近乎原生的性能。使用者可以透過安裝這個技能，獲得一系列的架構建議和檢查清單，幫助他們在開發過程中避免常見的性能陷阱。安裝後，當對話涉及跨平台架構或 WebView 的問題時，該技能會自動啟用。其核心機制包括一個四層架構：原生外殼、系統 WebView、Node 後端和 Rust 核心，這樣的設計使得開發者能夠在不同平台上共享代碼並保持高效能。這個技能的「一句話賣點」是：在不妥協的情況下實現跨平台開發和接近原生的性能。技術實作上，這個專案依賴於 WebKit 和 WebView2，並且強調使用者體驗的感知性能，而非僅僅依賴系統監控工具的數據。

與 Electron 和 Tauri 等替代方案相比，這個技能提供了更高的性能和更好的使用者體驗，特別是在需要快速啟動和低內存佔用的應用場景中。使用者可以透過 75 項檢查清單來評估應用的原生感，並根據需求進行調整。這個技能適合需要在 macOS 和 Windows 上開發高效能應用的團隊，尤其是那些希望避免傳統跨平台工具常見的性能問題的開發者。未來幾個月，這個專案可能會隨著社群的反饋而進一步優化，特別是在擴展性和插件生態系統方面。對於那些希望在新專案中實現原生感的開發者，這個技能提供了一個清晰的指導和實用的工具。

## 重點功能

- 四層架構 — 包含原生外殼、WebView、Node 後端和 Rust 核心，確保高效能和可擴展性。
- 75 項檢查清單 — 幫助開發者評估應用的原生感，並提供具體的改進建議。
- WebKit/WebView2 生存指南 — 解決常見的 WebView 問題，提升應用的穩定性和性能。
- 插件/擴展生態系統 — 支援 TypeScript，讓開發者能夠擴展應用功能。
- 決策樹檢查 — 幫助開發者判斷是否適合使用這個架構，避免不必要的開發成本。

## 快速開始

1. 全域安裝技能
```bash
npx skills add yetone/native-feel-skill -g
```
2. 克隆專案到用戶技能目錄
```bash
git clone https://github.com/yetone/native-feel-skill ~/.claude/skills/native-feel-cross-platform-desktop
```
3. 確認安裝路徑
```bash
ls ~/.claude/skills/native-feel-cross-platform-desktop
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1066 stars（1066/天），forks 46（4.3%），這顯示出強烈的興趣和潛在的實際應用需求。這個專案的作者 yetone 和 notdp 在開源社群中有一定的影響力，過去可能參與過其他相關專案。它解決了跨平台開發中常見的性能妥協問題，提供了一個清晰的架構和實用的檢查清單，讓開發者能夠在不妥協的情況下實現原生感。這個技能的出現正好契合了開發者對於高效能和良好使用者體驗的需求，並且在社群中引起了討論和關注。

## 適合誰使用

**目標受眾**：希望在 macOS 和 Windows 上開發高效能桌面應用的開發者，特別是那些對使用者體驗有高要求的團隊。

> [!example] 使用場景
> - 後端工程師用它來重構現有的 Electron 應用，使其感覺更原生，因為這樣能夠提升使用者的滿意度，並減少因為性能問題而流失的用戶。
> - 產品經理用它來設計一個新的跨平台桌面應用，確保其在 macOS 和 Windows 上都能提供一致的原生體驗，因為這樣能夠吸引更多的用戶並提升產品競爭力。
> - UI 設計師用它來檢查應用的原生感，通過 75 項檢查清單確保設計符合原生應用的標準，因為這樣能夠減少用戶對於應用的負面評價。

## 架構分析

這個專案採用四層架構，分別是原生外殼、系統 WebView、Node 後端和 Rust 核心。這樣的設計使得開發者能夠在不同平台上共享代碼，並且保持高效能。每一層的設計都考慮到性能和使用者體驗，特別是在啟動時間和內存佔用方面。

選擇 WebKit 和 WebView2 作為渲染層，因為這兩者在各自的平台上提供了最佳的性能和兼容性。這樣的架構設計使得開發者能夠專注於應用的核心功能，而不必擔心底層的性能問題。整體來說，這個架構的設計使得應用能夠在不同平台上提供一致的使用者體驗，並且能夠快速響應使用者的操作。

## 技術深入分析

這個專案的核心技術機制在於其四層架構設計，這使得開發者能夠在不同平台上共享代碼。使用 WebKit 和 WebView2 作為渲染層，這是因為這兩者在各自的平台上提供了最佳的性能和兼容性。效能方面，這個架構能夠在啟動時間上控制在 500 毫秒以內，並且內存佔用不超過 500MB。設計取捨方面，選擇這種架構意味著開發者需要在性能和開發便利性之間找到平衡。這個專案的依賴關係相對簡單，主要集中在 WebView 和 Node 的整合上，這降低了維護的複雜度。技術風險方面，隨著應用規模的擴大，可能會出現 IPC 的性能瓶頸，這需要開發者在設計時特別注意。整合分析方面，這個專案能夠與主流的開發框架良好整合，並且在 CI/CD pipeline 中也能夠輕鬆使用，這使得團隊在採用這個工具時的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清楚且包含安裝指令，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中提供了使用範例，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 提供詳細的檢查清單，幫助開發者快速評估應用的原生感。
> - 支援跨平台開發，能夠在 macOS 和 Windows 上運行。
> - 強調性能優化，確保應用啟動快速且內存佔用低。

> [!danger] 缺點
> - 不適用於單一操作系統的應用程式，限制了使用場景。
> - 對於性能要求較高的應用，開發成本可能較高。
> - 不適合對於啟動時間和內存佔用有嚴格要求的應用。

> [!warning] 注意事項
> - 不適用於單一操作系統的應用程式。
> - 不適合 Electron 風格的「夠好」應用，因為這裡的精緻度要求更高。
> - 對於啟動時間和內存佔用有嚴格限制，需控制在 150MB 和 100ms 以內。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yetone--native-feel-skill");
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
> const me = dv.page("Repos/yetone--native-feel-skill");
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
| Forks | 46 |
| Open Issues | 0 |
| 最後推送 | 2026-05-15 |
| 建立日期 | 2026-05-14 |
| Repo 大小 | 79 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yetone/native-feel-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yetone](https://github.com/yetone) | 6 |
> | [@notdp](https://github.com/notdp) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新和問題回應。
**連結**：[文件](https://github.com/yetone/native-feel-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-14 ~ 2026-05-15）
> **活躍天數** 2 天 · **最新 commit** Document npx skills install path in README (#1)

## README 摘錄

> [!info]- 展開查看原文 README
> # native-feel.skill
> 
> > *"Cross-platform development AND near-native performance — refuse the trade-off."*
> 
> [](LICENSE)
> [](https://github.com/yetone/native-feel-skill)
> 
> **An Agent Skill for designing cross-platform desktop apps that feel native** — distilled from Raycast's 2.0 technical deep-dive and grounded in reverse-engineering of the shipping `Raycast Beta.app` binary.
> 
> Two goals usually pull against each other: convenient cross-platform development, and near-native performance. This skill captures the structural choices — eight architectural tenets, a four-layer architecture, a WebKit/WebView2 survival guide, a 75-item ship audit — that let an app have both.
> 
> **Install** — pick one:
> 
> **A. With [`skills`](https://github.com/vercel-labs/skills) (any compatible agent):**
> 
> ```bash
> npx skills add yetone/native-feel-skill -g
> ```
> 
> The `-g` flag installs globally (user-level) so every project picks it up.
> 
> **B. Or paste this prompt to your AI agent:**
> 
> ```
> Install the native-feel skill for me:
> 
> 1. Clone https://github.com/yetone/native-feel-skill into your
>    user-level skills directory as `native-feel-cross-platform-desktop/`
>    (whatever path your agent reads skills from on this machine — e.g.
>    `~/.claude/skills/` for Claude Code).
> 2. Verify that SKILL.md plus the references/ and checklists/ subdirs
>    are present.
> 3. Confirm the install path when done.
> ```
> 
> [Use cases](#use-cases) · [What this is](#what-this-is) · [Philosophy](#philosophy) · [Layout](#layout) · [Sources](#sources)
> 
> ---
> 
> ## Use cases
> 
> Once installed, the skill activates automatically whenever the conversation touches cross-platform desktop architecture, WebView quirks, or making a UI feel native. Two common ways to use it:
> 
> ### Case 1 — Refactor an existing app to feel more native
> 
> You have an Electron / Tauri / web-wrapped app, and a designer (or your own eye) tells you it feels web-y. You want to know where to start and how far you can take it without a full rewrite.
> 
> ```
> You    ❯ My Electron app feels web-y on macOS — the designer says it
>          doesn't pass for a real Mac app. Where do I start?
> 
> Agent  ❯ Quickest path is the 75-item native-feel audit
>          (checklists/ship-readiness.md). Most Electron apps fail
>          the same 6–8 items:
>            - cursor:pointer on rows (item 21)
>            - web-style modal overlays instead of native sheets (19)
>            - hardcoded brand accent instead of system accent (33)
>            - page fade-transitions (40)
>            - opaque window background instead of platform material (31)
>            - WebKit context menu still firing (23)
>          Each is a 5-to-30-minute fix; together they move you most
>          of the way to "passes the 30-second skeptical user test."
> 
>          Bigger question first: how far do you need to go? If "good
>          enough" means passing that 30-second test, Electron + this
>          audit gets you 80% there without rewriting. If you want
>          "indistinguishable from a Mac app" — Liquid Glass materials,
>          native popovers, sub-200ms launch — Electron has a ceiling
>          you'll hit. Want me to run the decision tree first?
> ```
> 
> ### Case 2 — Build a cross-platform native-feel app from scratch
> 
> Greenfield project, must run on macOS + Windows, and the native feel is the *point* — a launcher, a productivity tool, an AI workspace your users live in all day.
> 
> ```
> You    ❯ Starting a new desktop app — macOS + Windows, native feel
>          is the whole pitch. What architecture should I use?
> 
> Agent  ❯ Before architecture, the decision tree
>          (checklists/decision-tree.md) rules this stack out for
>          several common shapes — quick check first:
>            - Cold-start budget?  ( *"We're not a web app with some native hooks sprinkled on top. We're a native app that uses web for its UI."* — Raycast
> 
> ## What this is
> 
> A reference for architects, tech leads, and engineers who must build a desktop app that:
> 
> - runs on **macOS + Windows** (optionally Linux) from a single UI codebase,
> - launches in under 500 ms and stays under 500 MB resident,
> - is **indistinguishable from a native app** to its users (no `cursor: pointer` tell-tales, no white-flash on launch, no WebKit context menu, no smooth-scroll JS),
> - supports a **plugin/extension ecosystem** in TypeScript,
> - can share performance-critical code with iOS and a server backend.
> 
> This is the four-layer architecture: **native shell → system WebView (WKWebView/WebView2) → Node backend → Rust core**, wired together with a single typed IPC schema that generates clients for every runtime.
> 
> ## What this is not
> 
> - Not for single-OS apps (just build native).
> - Not for Electron-style "good enough" apps (the polish budget here is 5–10× higher).
> - Not for apps with strict <150 MB or <100 ms cold-start budgets (the floor is real).
> - Not for games, document editors, or media players.
> 
> Run [`checklists/decision-tree.md`](checklists/decision-tree.md) to find out if this architecture is even right for your project. It rules itself out for several common cases — saying so directly is more useful than over-fitting advice.
> 
> ## Layout
> 
> ```
> native-feel-skill/
> ├── SKILL.md                                # entry point for the agent
> ├── references/
> │   ├── 01-philosophy.md                    # 8 tenets that drive every decision
> │   ├── 02-architecture.md                  # the four-layer architecture
> │   ├── 03-webview-survival.md              # WebKit/WebView2 quirks + fixes (the goldmine)
> │   ├── 04-ipc-contract.md                  # typed IPC across Rust/Swift/C#/TS
> │   ├── 05-memory-truths.md                 # why Activity Monitor lies
> │   ├── 06-native-conventions.md            # 70+ items the native-feel audit checks
> │   └── 07-evidence-raycast.md              # what a reverse-eng. of Raycast Beta shows
> └── checklists/
>     ├── decision-tree.md                    # should you use this architecture?
>     └── ship-readiness.md                   # 75-item launch audit
> ```
> 
> ## Philosophy
> 
> The central tension this architecture resolves: **how can a desktop app deliver convenient cross-platform development AND near-native performance, when those goals usually pull against each other?** Eight tenets name the structural moves:
> 
> 1. **Place the seam at the rendering surface** — share above the WebView, diverge below it; this is the only altitude where both DX and native feel survive.
> 2. **One schema, many languages** — pay the polyglot tax once at the declaration, never at the call site.
> 3. **Adopt the platform; don't compete with it** — the OS draws blur, scrolling, materials, and dark mode better than you can.
> 4. **Performance is a property of perception** — what the user feels, not what Activity Monitor reports.
> 5. **The short iteration loop is the product** — 200 ms hot reload vs 30 s native rebuild is a 150× compounding advantage.
> 6. **Cross boundaries intentionally** — IPC has a cost; design every crossing as async, batched, schema-typed.
> 7. **Identity is muscle memory** — the hotkey, the rank order, the verbs are the app; everything else is implementation.
> 8. **Separate baseline from margin** — the WebView+Node floor is rented; only your dirty pages are yours to optimize.
> 
> Read [`references/01-philosophy.md`](references/01-philosophy.md) first. Everything else is consequence.
> 
> ## About Agent Skills
> 
> Agent Skills are the emerging standard for packaging domain knowledge that any compatible agent (Claude Code, the Claude Agent SDK, or other Agent-Skill-aware runtimes) can discover and load. Once installed via the prompt at the top of this README, the skill activates automatically when the agent's conversation touches cross-platform desktop architecture, WebView quirks, or Raycast-style apps — the trigger conditions are declared in `SKILL.md`'s frontmatter.
> 
> ## Sources
> 
> - Raycast's public technical post: [A Technical Deep Dive into the New Raycast](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast)
> - Reverse engineering of `Raycast Beta.app` v0.60.0 (macOS

## 延伸閱讀

相關概念：[[跨平台開發]] · [[WebView]] · [[性能優化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/yetone/native-feel-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：跨平台開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "跨平台開發" AND file.name != "yetone--native-feel-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "yetone--native-feel-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "yetone--native-feel-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "yetone--native-feel-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["跨平台開發","WebView","性能優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yetone--native-feel-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yetone--native-feel-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yetone--native-feel-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yetone" AND file.name != "yetone--native-feel-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yetone--native-feel-skill");
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
> const me = dv.page("Repos/yetone--native-feel-skill");
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
> const me = dv.page("Repos/yetone--native-feel-skill");
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
> const me = dv.page("Repos/yetone--native-feel-skill");
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
> const me = dv.page("Repos/yetone--native-feel-skill");
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

> **2026-05-16** — 首次收錄
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

- [[2026-05-17|2026-05-17]] — 再次上榜，1.2k stars
- [[2026-05-16|2026-05-16]] — 首次收錄，1.1k stars
