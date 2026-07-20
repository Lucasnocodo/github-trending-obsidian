---
repo: Fei-Away/Codex-Dream-Skin
url: https://github.com/Fei-Away/Codex-Dream-Skin
owner: Fei-Away
owner_type: User
language: JavaScript
license: N/A
description: "Codex Dream Skin"
homepage: ""
stars: 10551
stars_per_day: 2638
forks: 1089
open_issues: 103
created: 2026-07-15
pushed_at: 2026-07-19
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "主題工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "為 Codex 桌面端提供可自定義的主題和皮膚，增強使用氛圍。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-23"
contributor_count: 5
engagement: "medium"
issue_close_rate: 21
repo_size_kb: 21867
readme_length: 3655
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:6371,2026-07-17:6404,2026-07-18:8857,2026-07-18:8879,2026-07-19:9838,2026-07-19:9839,2026-07-20:10545,2026-07-20:10551"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "Codex-Dream-Skin"
  - "Fei-Away/Codex-Dream-Skin"
  - "為 Codex 桌面端提供可自定義的主題和皮膚，增強使用氛圍。"
---

# Codex-Dream-Skin

**10.6k** stars · **2.6k** stars/天 · 建立 4 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> 為 Codex 桌面端提供可自定義的主題和皮膚，增強使用氛圍。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.6k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望為 Codex 桌面應用增強視覺效果的開發者和設計師。
> **一句話重點** Codex Dream Skin 不僅是一個主題工具，更是提升開發者工作氛圍的利器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "主題工具" && p.file.name !== "Fei-Away--Codex-Dream-Skin" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 主題工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到提升工作氛圍的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於使用本機 CDP 注入技術來實現主題切換，無需修改官方安裝包。

## 專案簡介

Codex Dream Skin 是一個為 Codex 桌面應用提供主題和皮膚的工具，允許用戶自定義界面以增強使用體驗。用戶可以通過簡單的命令行指令，如 `~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh --id preset-gothic-void-crusade`，輕鬆切換主題，並且不需要修改官方安裝包。這個工具的設計理念是提供一個可交互的界面，讓用戶能夠在編碼時享受更好的視覺氛圍。它使用本機 CDP 注入技術，確保不改變官方的二進制文件，從而保持安全性。技術上，它依賴於 JavaScript 和 PowerShell，並且支持多種平台，包括 macOS 和 Windows，這使得它在不同環境下都能運行。

與其他主題工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Codex Dream Skin 的優勢在於其不需要修改原始應用，並且能夠保留原生控件的交互性。使用者可以隨意更換背景圖，並且支持自定義主題的保存和切換，這在其他工具中並不常見。實際使用中，這個工具的效果取決於用戶提供的背景圖，並且需要注意背景圖的解析度和格式。社群的活躍度相對較高，但目前的問題解決率僅為 21%，顯示出一些使用上的挑戰。這個專案目前處於早期階段，適合對 Codex 有需求的開發者和設計師，但在生產環境中使用時需謹慎考量其穩定性和安全性。

**技術棧**：`JavaScript` · `PowerShell` · `Shell` · `CSS`

## 重點功能

- 可交互控件 — 侧栏、建议卡、项目选择、输入框均为原生控件，增强用户体验。
- 主题切换 — 通过命令行轻松切换主题，如 `~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh --id preset-gothic-void-crusade`。
- 背景图自定义 — 用户可以上传自己的背景图，系统自动调整焦点和配色。
- 主题保存 — 支持在 macOS 菜单栏和 Windows 系统托盘中保存和切换本地主题。
- 安全性高 — 使用本机 CDP 注入，不修改官方二进制文件，确保安全性。

## 快速開始

1. 安裝 macOS 主題
```bash
cd macos && ./scripts/install-dream-skin-macos.sh --no-launch
```
2. 啟動主題切換
```bash
~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh --id preset-arina-hashimoto
```
3. 安裝 Windows 主題
```bash
powershell -ExecutionPolicy Bypass -File .\windows\scripts\install-dream-skin.ps1
```

## 程式碼範例

```js
{
  "前置條件": "用戶已安裝 Codex 並下載 Codex Dream Skin。",
  "指令": "~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh --id preset-gothic-void-crusade",
  "預期輸出": "主題成功切換至 Gothic Void Crusade。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 10551 stars（2638/天），forks 1089（10.3%），這顯示出強烈的用戶興趣。作者 Fei-Away 和其他貢獻者在開源社群中有一定的影響力，這個專案解決了 Codex 用戶在界面自定義上的需求，之前的工具多數需要修改官方安裝包，這樣的做法風險較高。最近的推廣活動和社群討論也可能促進了這個專案的曝光。技術上，這個工具利用了本機 CDP 注入技術，這在過去的主題工具中並不常見，讓它在功能上具備了獨特性。forks/stars 比率為 10.3%，顯示出許多用戶對於這個工具的實際修改和應用有興趣。

## 適合誰使用

**目標受眾**：希望為 Codex 桌面應用增強視覺效果的開發者和設計師。

> [!example] 使用場景
> - 前端開發者用它來為 Codex 應用設計自定義主題，因為這樣可以提升工作環境的氛圍感，增加創造力。
> - UI 設計師用它來測試不同的視覺風格，因為可以快速切換主題，並且不影響 Codex 的原生功能。
> - 開發者用它來在不同的專案中保持一致的視覺風格，因為它支持自定義背景圖和主題保存，方便管理。

## 架構分析

Codex Dream Skin 採用本機 CDP 注入架構，這種設計使得用戶能夠在不改變官方應用的情況下，實現主題的切換和自定義。資料流方面，主題的切換是通過命令行指令觸發的，這些指令會調用內部腳本來實現主題的加載和應用。選擇這種架構的好處是安全性高，因為不會修改官方的二進制文件，但代價是可能會限制某些高級功能的實現。擴展性方面，這種設計在未來可以支持更多的主題和自定義選項，但目前的實現仍然依賴於用戶提供的背景圖，這可能會成為一個瓶頸。

## 技術深入分析

Codex Dream Skin 的核心技術在於其使用的本機 CDP 注入技術，這使得用戶能夠在不改變官方應用的情況下，實現主題的切換和自定義。這種設計模式使得用戶界面保持了原生控件的交互性，這在其他主題工具中並不常見。效能方面，這個工具的資源需求相對較低，因為它主要依賴於用戶提供的背景圖，而不需要額外的資源來生成內容。設計上，選擇 JavaScript 和 PowerShell 作為主要語言，這使得它在跨平台支持上具備了一定的靈活性，但也可能導致在某些環境下的兼容性問題。技術風險方面，CDP 注入的安全性依賴於用戶的操作，若用戶在運行期間執行不明程序，可能會導致安全隱患。整合方面，這個工具與主流開發環境的兼容性良好，但在 CI/CD pipeline 的整合上可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，安裝過程相對順暢，但對於新手來說，可能需要一些時間來熟悉命令行操作。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供可自定義的主題選擇，增強使用者體驗。
> - 不需要修改官方安裝包，確保安全性。
> - 支持多平台使用，方便不同環境的開發者。

> [!danger] 缺點
> - 目前僅支持 macOS 和 Windows，Linux 用戶無法使用。
> - 對於背景圖的解析度有要求，過低的解析度會影響顯示效果。
> - 問題解決率較低，顯示出使用上的挑戰。

> [!warning] 注意事項
> - 目前僅支持 macOS 和 Windows，Linux 用戶無法使用。
> - 對於背景圖的解析度有要求，過低的解析度會影響顯示效果。
> - 目前的問題解決率僅為 21%，顯示出一些使用上的挑戰。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具主要用於生成 AI 代理的視覺元素，而 Codex Dream Skin 專注於主題切換和界面美化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更為靜態的主題選擇，而 Codex Dream Skin 允許用戶自定義和動態切換主題。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成 AI 代理的視覺元素，而 Codex Dream Skin 專注於主題切換和界面美化。 | 如果你的需求是生成 AI 代理的視覺元素，而不是單純的主題切換，則應選擇這個工具。 | low，因為兩者的功能有明顯的差異，並不需要直接遷移。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更為靜態的主題選擇，而 Codex Dream Skin 允許用戶自定義和動態切換主題。 | 如果你需要一個簡單的靜態主題而不需要頻繁切換，則可以考慮這個工具。 | medium，因為需要重新設計主題的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Codex-Dream-Skin** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於生成 AI 代理的視覺元素，而 Codex Dream Skin 專注於主題切換和界面美化。 | Boneyard 提供了更為靜態的主題選擇，而 Codex Dream Skin 允許用戶自定義和動態切換主題。 |
> | 遷移成本 | - | low，因為兩者的功能有明顯的差異，並不需要直接遷移。 | medium，因為需要重新設計主題的使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成 AI 代理的視覺元素，而不是單純的主題切 | 如果你需要一個簡單的靜態主題而不需要頻繁切換，則可以考慮這個 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上使用時，可能會遇到 ChatGPT/Codex 反复闪退的问题。
  - 解法：尝试重新安装主题或检查系统兼容性。
- [MEDIUM] 加载超大图时可能导致内存溢出。
  - 解法：确保上传的背景图符合推荐的解析度和大小。
- [low] 主题切换后，可能需要手动调整某些控件的显示。
  - 解法：在切换主题后，检查并调整控件设置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發團隊 | 非常適合 | 這樣的團隊可以利用主題工具提升工作氛圍，增強團隊的創造力。 |
| 大型企業的生產環境 | 不適合 | 目前的穩定性和安全性尚未達到生產環境的要求。 |
| 自由職業者的個人專案 | 適合 | 自由職業者可以利用這個工具提升個人專案的視覺效果，增加吸引力。 |
| 學術研究團隊 | 普通 | 雖然可以使用，但可能不會對研究工作有直接的幫助。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到提升工作氛圍的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，且不會存取敏感資料，但使用時需注意不運行來路不明的程序。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Codex Dream Skin 能夠與主流開發工具良好整合，特別是在使用 Codex 的開發環境中。用戶可以在 macOS 和 Windows 環境中輕鬆安裝和切換主題，並且不會影響 Codex 的原生功能。與 CI/CD 工具的整合需要額外的配置，但整體上不會造成太大摩擦。常見的整合問題包括背景圖的格式和解析度，這需要用戶在使用前進行確認。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
| Forks | 1.1k |
| Open Issues | 103 |
| Issue 解決率 | 21% (28 closed) |
| 最後推送 | 2026-07-19 |
| 建立日期 | 2026-07-15 |
| Repo 大小 | 21.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Fei-Away/Codex-Dream-Skin) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 42
>     "PowerShell" : 27
>     "Shell" : 22
>     "CSS" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Fei-Away](https://github.com/Fei-Away) | 7 |
> | [@rwang23](https://github.com/rwang23) | 5 |
> | [@Finderchangchang](https://github.com/Finderchangchang) | 1 |
> | [@wasim-builds](https://github.com/wasim-builds) | 1 |
> | [@nightt5879](https://github.com/nightt5879) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在一些未解決的問題。
**連結**：[文件](https://github.com/Fei-Away/Codex-Dream-Skin)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-19）
> **活躍天數** 2 天 · **最新 commit** fix(ui): align Windows pause/resume with macOS (live remove + loading) (#168)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#121](https://github.com/Fei-Away/Codex-Dream-Skin/issues/121) | [Feature]: codex 2007 `enhancement` `needs-triage` | 1 | 1 |
> | [#66](https://github.com/Fei-Away/Codex-Dream-Skin/issues/66) | [Bug] load-image-theme 在校验尺寸前用 sips 全解码图片,超大图内存炸弹 / sips ful `bug` | 1 | 0 |
> | [#175](https://github.com/Fei-Away/Codex-Dream-Skin/issues/175) | [Feature]: codex模式下，背景图显示正常，但chatgpt模式下，背景图显示虚化 `enhancement` `needs-triage` | 0 | 0 |
> | [#174](https://github.com/Fei-Away/Codex-Dream-Skin/issues/174) | [Bug]: [Bug]: macOS使用ChatGPT/Codex安装皮肤后 ChatGPT/Codex 反复闪退；C `bug` `needs-triage` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex Dream Skin
> 
>   中文 · English
> 
>   给 Codex 桌面端换一张会呼吸的脸。
>   外部主题 / 换肤工具 · 本机 CDP 注入 · 不改官方安装包
> 
>   一张图，一种心情 · 写代码，也要有氛围感
> 
>   非 OpenAI 官方产品。不修改 .app / app.asar / WindowsApps。
> 
> ## 赞助商
> 
>   
>     
>   
> 
>   更智能的连接 · 更热爱的创造
>   热爱驱动 · 无限可能 · Connect AI · Power Creation
> 
>   感谢 passion8.cc 赞助本项目。
>   满血 AI 中转：官方模型直连，无降智、无套壳；一行配置接入 Codex / Claude Code / Grok。
> 
>   
>     换肤与 API 配置互相独立，本项目不会自动改写你的模型供应商设置。
>   
> 
> ## 实测精选预设
> 
> ### Gothic Void Crusade / 哥特虚空远征
> 
> **特别感谢 [@seansong-ideogram](https://github.com/seansong-ideogram) 为社区设计并贡献这套精美、极具氛围感的原创哥特科幻作品。** 它是当前实测精选的第一套预设，也是 macOS 全新安装时默认启用的主题。
> 
>   
>   真实 Codex 首页注入效果（仅预览）
> 
> macOS 安装后可从「已保存主题」直接切换，也可以运行：
> 
> ```bash
> ~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh \
>   --id preset-gothic-void-crusade
> ```
> 
> ### 桥本有菜 / Arina Hashimoto
> 
> 下面这套「桥本有菜 / Arina Hashimoto」已经在真实 Codex 首页分别验证浅色和暗色外观。用户提供的源 PNG 为 `1672 × 941`，主题包在保持源图近 16:9 构图的前提下派生导出 `2560 × 1440` JPEG，并不代表增加了源图细节。截图中的侧栏、卡片、项目选择和输入框都是 Codex 原生控件。
> 
>   
>   浅色 · 真实注入截图（未发送输入已在截图时遮蔽，仅预览）
> 
>   
>   暗色 · 真实注入截图（未发送输入已在截图时遮蔽，仅预览）
> 
> 从仓库安装并一键切换（macOS）：
> 
> ```bash
> cd macos
> ./scripts/install-dream-skin-macos.sh --no-launch
> ~/.codex/codex-dream-skin-studio/scripts/switch-theme-macos.sh \
>   --id preset-arina-hashimoto
> ```
> 
> Windows 使用本地主题仓库与系统托盘，并会预置同一套「桥本有菜」。首次从仓库使用：
> 
> ```powershell
> powershell -ExecutionPolicy Bypass -File .\windows\scripts\install-dream-skin.ps1
> powershell -ExecutionPolicy Bypass -File .\windows\scripts\start-dream-skin.ps1
> ```
> 
> 启动后可直接从「已保存主题 → 桥本有菜」切换；不需要跨目录手动导入。托盘里的「更换背景图」仍可导入你自己的纯背景，保存后继续一键切换。
> 
> > 可下载的用户源图是 [`docs/images/presets/arina-hashimoto-source.png`](./docs/images/presets/arina-hashimoto-source.png)（`1672 × 941`）；macOS 一键预设使用 [`macos/presets/preset-arina-hashimoto/background.jpg`](./macos/presets/preset-arina-hashimoto/background.jpg)（规范化派生 `2560 × 1440`）。上面两个效果图包含真实 UI，**只作预览，绝不能当背景导入**。背景为用户提供的 AI 生成示例，不代表 OpenAI/Codex 官方视觉或背书；公开再分发前请确认人物与素材权利。
> 
> ## 概念效果图（不可直接导入）
> 
> 下面八张图用于表达可实现的视觉方向，但它们是带界面的概念效果图，不是可直接使用的主题背景。需要同类效果时，先按[参考生图提示词](./docs/reference-background-prompt-guide.md)生成无 UI 的 `2560 × 1440` 素材；八种风格的详细拆解见[概念图提示词](./docs/background-generation-prompts.md)。
> 
>   
>   粉系定制
> 
>   
>   财神打工版
> 
>   
>   红白科幻
> 
>   
>   清透定制
> 
>   
>   灵感小宇宙
> 
>   
>   紫夜限定
> 
>   
>   青蓝虚拟歌姬
> 
>   
>   舞台黑金
> 
> ## 它能做什么
> 
> - **真·可交互**：侧栏、建议卡、项目选择、输入框都是原生控件，不是整窗假截图贴上去
> - **真背景层**：一张 16:9 纯壁纸连续铺满整窗，首页突出氛围，任务页自动降低干扰
> - **可换图**：换一张喜欢的纯背景，自适应焦点、安全区和配色后变成你的主题
> - **可存主题**：macOS 菜单栏与 Windows 系统托盘都能保存/切换本地主题
> - **可恢复**：一键还原官方外观
> - **相对安全**：本机回环 CDP 注入，不改官方二进制与签名
> 
> ## 快速开始
> 
> 仓库内按平台放了现成脚本（实现细节不同，效果都是「主题化 Codex」）：
> 
> | 平台 | 目录 | 入口 |
> |------|------|------|
> | Apple Silicon / Intel Mac | [`macos/`](./macos/) | 双击 `Install Codex Dream Skin.command` |
> | Windows | [`windows/`](./windows/) | `scripts/install-dream-skin.ps1` → `start-dream-skin.ps1` |
> 
> 更细的说明：
> 
> - Mac：[`macos/README.md`](./macos/README.md)
> - Windows：[`windows/SKILL.md`](./windows/SKILL.md)
> - 路径对照：[`docs/platforms.md`](./docs/platforms.md)
> - 可直接复制的参考生图模板：[`docs/reference-background-prompt-guide.md`](./docs/reference-background-prompt-guide.md)
> - 八种概念方向详细提示词：[`docs/background-generation-prompts.md`](./docs/background-generation-prompts.md)
> - 项目记录：[`docs/PROJECT.md`](./docs/PROJECT.md)
> 
> ## 反馈与贡献
> 
> - **Issue：** 请用 [Issue 模板](./.github/ISSUE_TEMPLATE/)（Bug / 功能）；已关闭空白 Issue。提交前建议先跑 Verify / Restore 自检。
> - **PR：** 请按 [PR 模板](./.github/pull_request_template.md) 写清改动，并勾选对应自测（如 `macos/tests/run-tests.sh`、verify / restore）。
> 
> ## 安全边界
> 
> - CDP 只绑 `127.0.0.1`，主题运行期间勿跑来路不明的本机程序
> - 不修改官方安装目录与代码签名
> - **不会**自动改写 API Key / Base URL；中转与换肤分开
> 
> ## 许可与声明
> 
> - 见 [`macos/LICENSE`](./macos/LICENSE)（MIT）与 [`macos/NOTICE.md`](./macos/NOTICE.md)
> - 非 OpenAI 官方产品；Codex 及相关权利归其权利人
> - 随仓库预设及效果图中的人物 / IP 素材仅作主题示意；商用或公开再分发请自行确认肖像、素材与商标权利
> 
> ---
> 
> Star 一下，然后挑一张图，把你的 Codex 变成今天想要的样子。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[UI/UX 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

[GitHub](https://github.com/Fei-Away/Codex-Dream-Skin)

## 相關收錄

> [!note]- 直接競品（同子分類：主題工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "主題工具" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Fei-Away--Codex-Dream-Skin" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","UI/UX 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Fei-Away--Codex-Dream-Skin" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Fei-Away--Codex-Dream-Skin" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Fei-Away" AND file.name != "Fei-Away--Codex-Dream-Skin"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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
> const me = dv.page("Repos/Fei-Away--Codex-Dream-Skin");
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

> **2026-07-17** — 首次收錄
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

- [[2026-07-20|2026-07-20]] — 再次上榜，10.5k stars
- [[2026-07-19|2026-07-19]] — 再次上榜，9.8k stars
- [[2026-07-18|2026-07-18]] — 再次上榜，8.9k stars
- [[2026-07-17|2026-07-17]] — 首次收錄，6.4k stars
