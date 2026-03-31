---
repo: yetone/voice-input-src
url: https://github.com/yetone/voice-input-src
owner: yetone
owner_type: User
language: N/A
license: N/A
description: ""
homepage: ""
stars: 1044
stars_per_day: 1044
forks: 101
open_issues: 3
created: 2026-03-29
pushed_at: 2026-03-30
first_seen: 2026-03-31
week: "2026-W14"
month: "2026-03"
category: "開發工具"
subcategory: "語音輸入"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-31
use_case: "實現一個 macOS 菜單欄語音輸入應用，支持多語言及即時轉錄。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-03"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 25
readme_length: 3420
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-31"
star_history: "2026-03-31:1044"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
aliases:
  - "voice-input-src"
  - "yetone/voice-input-src"
  - "實現一個 macOS 菜單欄語音輸入應用，支持多語言及即時轉錄。"
---

# voice-input-src

**1.0k** stars · **1.0k** stars/天 · 建立 1 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/yetone--voice-input-src");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 實現一個 macOS 菜單欄語音輸入應用，支持多語言及即時轉錄。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.0k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 macOS 上實現語音輸入功能的開發者，特別是針對多語言支持的需求。
> **一句話重點** 這個專案不僅是一個語音輸入工具，更是一個結合了多語言支持和即時反饋的創新應用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yetone--voice-input-src");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "語音輸入" && p.file.name !== "yetone--voice-input-src" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 語音輸入 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 結合了即時語音轉錄和 LLM 來提高識別準確性，特別是在多語言環境中。

## 專案簡介

這個專案的核心機制是透過按下 Fn 鍵來啟動語音錄製，並在釋放後將轉錄的文本注入到當前聚焦的輸入框中。它使用 Apple 的語音識別框架進行即時轉錄，並支持多種語言的切換，預設為簡體中文。設計上，應用會顯示一個優雅的浮動窗口，包含音量波形動畫和即時轉錄文本，這些元素會隨著語音的強度而變化，提供視覺反饋。這樣的設計不僅增強了用戶體驗，還能有效地避免在使用 CJK 輸入法時出現的問題，透過剪貼簿和模擬 Cmd+V 的方式來注入文本。這個工具的賣點在於其結合了 LLM 來提高語音識別的準確性，特別是在中英混合的場景中，並提供了靈活的 API 設定選項。使用者可以輕鬆配置 API 基礎 URL 和金鑰，並在錄製後等待 LLM 的回應來進一步優化文本。整體來看，這個專案不僅是語音輸入的工具，還是一個結合了語音識別和自然語言處理的創新應用。

**技術棧**：`Swift` · `Apple Speech Recognition framework`

## 重點功能

- 即時語音轉錄 — 使用 Apple 語音識別框架進行流式轉錄，支持簡體中文及其他語言。
- 多語言切換 — 提供簡體中文、繁體中文、英文、日文、韓文的選擇，並存儲用戶偏好。
- 浮動窗口顯示 — 在錄製時顯示音量波形和即時轉錄文本，提升視覺反饋。
- 剪貼簿注入 — 使用剪貼簿和模擬 Cmd+V 的方式來注入文本，避免 CJK 輸入法的干擾。
- LLM 整合 — 提供 API 設定選項，使用 LLM 來提高語音識別的準確性，特別是中英混合的場景。
- 用戶友好的設置 — 簡單的設置界面，支持 API 金鑰的清除和測試功能。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/yetone/voice-input-src.git
```
2. 進入專案目錄
```bash
cd voice-input-src
```
3. 使用 Swift Package Manager 構建
```bash
swift build
```

## 程式碼範例

```bash
[
  "# 前置條件：安裝 Swift 及相關依賴",
  "claude \\",
  "  --dangerously-skip-permissions \\",
  "  --output-format=stream-json \\",
  "  --verbose \\",
  "  -p \"Please implement a macOS menu-bar voice input app...\"",
  "# 預期輸出：應用將在菜單欄顯示，並開始錄製語音。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1044 stars（1044/天），forks 101（9.7%），這顯示出相對較高的實際使用和修改意圖。作者 yetone 似乎專注於語音識別和自然語言處理領域，這個專案解決了現有語音輸入工具在多語言支持和即時反饋上的不足。特別是針對 CJK 輸入法的處理，這在其他工具中往往被忽略。社群對於語音輸入的需求持續增長，這使得該工具在短時間內獲得了廣泛的關注。

## 適合誰使用

**目標受眾**：需要在 macOS 上實現語音輸入功能的開發者，特別是針對多語言支持的需求。

> [!example] 使用場景
> - macOS 開發者用它來實現語音輸入功能，因為它提供了即時轉錄和多語言支持，提升了用戶體驗。
> - 語音助手開發者用它來快速集成語音識別功能，因為可以利用 LLM 來提高識別準確性，特別是在中英混合的情境中。
> - 需要無障礙功能的應用開發者用它來增強應用的可用性，因為其設計考慮了用戶的多樣需求，特別是對於 CJK 輸入法的支持。

## 架構分析

這個專案採用 Swift 作為主要開發語言，並利用 Apple 的語音識別框架來實現語音轉錄。架構上，應用運行在 LSUIElement 模式，僅在菜單欄顯示，這樣的設計使得用戶不會被 Dock 圖標干擾。資料流方面，錄音過程中，音頻數據會即時傳送給語音識別引擎，轉錄結果則顯示在浮動窗口中。這種設計的好處是能夠即時反饋用戶的語音輸入，但代價是需要持續監控 Fn 鍵的狀態，這可能會影響系統性能。整體架構的擴展性良好，但在處理高並發的語音輸入時，可能會遇到性能瓶頸。

## 技術深入分析

專案的核心技術機制是利用 Apple 的語音識別框架進行即時轉錄，這使得應用能夠在用戶說話的同時進行文本轉換。透過使用 Swift 開發，專案能夠充分利用 macOS 的原生功能，提供流暢的用戶體驗。效能方面，這個應用能夠處理即時的音頻流，並在浮動窗口中顯示轉錄結果，這需要穩定的系統性能來支持。設計上，選擇了 LSUIElement 模式來避免干擾用戶的工作流程，但這也意味著應用的可見性較低，可能會影響用戶的使用習慣。選擇 Swift 而非其他語言（如 Python）是因為 Swift 更加適合於 macOS 的生態系統，能夠提供更好的性能和用戶體驗。技術風險方面，依賴於 Apple 的語音識別技術，若未來有重大變更，可能會影響應用的穩定性。整合方面，這個工具能夠輕鬆與其他 macOS 應用進行交互，但在與非 macOS 環境的整合上可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了中英文版本，清楚地描述了專案的功能和使用方式。安裝過程相對順暢，但需要用戶熟悉 Swift 的基本操作。文件中缺乏詳細的入門指南，可能會對新手造成一定困難。

## 優缺點分析

> [!success] 優點
> - 即時語音轉錄，提升用戶體驗。
> - 多語言支持，適合不同用戶需求。
> - 整合 LLM 提高識別準確性，特別是中英混合場景。

> [!danger] 缺點
> - 僅支援 macOS 14+，限制了使用範圍。
> - 對於非英語語言的支持可能不如預期。
> - 需要用戶手動切換語言，增加了操作複雜度。

> [!warning] 注意事項
> - 僅支援 macOS 14+。
> - 需要使用 Apple 的語音識別框架，對於非英語語言的支持可能有限。
> - 目前僅有簡體中文的預設語言，其他語言需手動切換。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yetone--voice-input-src");
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
> const me = dv.page("Repos/yetone--voice-input-src");
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
| Forks | 101 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-29 |
| Repo 大小 | 25 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yetone/voice-input-src) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yetone](https://github.com/yetone) | 16 |

## 社群與生態

**社群活躍度**：新專案，社群活躍度尚待觀察。
**連結**：[文件](https://github.com/yetone/voice-input-src/blob/main/README_CN.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-29 ~ 2026-03-30）
> **活躍天數** 2 天 · **最新 commit** docs: split README into separate English and Chinese files

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/yetone/voice-input-src/issues/4) | 用CodeX下午花了几个小时做出来了！！！ | 9 | 0 |
> | [#5](https://github.com/yetone/voice-input-src/issues/5) | 低版本适配 | 0 | 0 |
> | [#3](https://github.com/yetone/voice-input-src/issues/3) | are you ok | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **[中文](README_CN.md) | English**
> 
> ## Source Code
> 
> ```bash
> claude \
>   --dangerously-skip-permissions \
>   --output-format=stream-json \
>   --verbose \
>   -p "Please implement a macOS menu-bar voice input app (Swift, macOS 14+) with the following requirements:
> 
> 1. Hold the Fn key to record, release to inject the transcribed text into the currently focused input field. Use streaming transcription (Apple Speech Recognition framework) as preferred approach. Monitor Fn key globally via CGEvent tap, suppressing the Fn event to prevent triggering the emoji picker.
> 2. Default language must be Simplified Chinese (zh-CN), ensuring Chinese input recognition works out of the box. Also provide language switching options in the menu bar (English, Simplified Chinese, Traditional Chinese, Japanese, Korean). Language selection is stored in UserDefaults.
> 3. While recording, display an elegant frameless capsule-shaped floating window centered at the bottom of the screen — no traffic lights or titlebar. Use NSPanel (nonactivatingPanel) + NSVisualEffectView (.hudWindow material), sufficient height (56px, corner radius 28px), containing:
>    - 5 vertical bar waveform animation on the left (44×32px), driven by real-time audio RMS levels (no hardcoded fake animations) — louder speech produces larger waveforms, quiet moments produce smaller ones. Bar weights are [0.5, 0.8, 1.0, 0.75, 0.55] creating a natural center-high, sides-low effect. Smooth envelope (attack 40%, release 15%), add ±4% random jitter per bar for organic feel. Waveforms should be large enough to be clearly visible.
>    - Text label on the right (elastic width 160-560px) showing real-time transcription, capsule elastically widens as text grows
>    - Entry spring animation (0.35s), text width smooth transition (0.25s), exit scale animation (0.22s)
> 4. Text injection uses clipboard + simulated Cmd+V paste. Before injection, detect the current input method: if it is a CJK input method, temporarily switch to an ASCII input source (ABC/US keyboard) before pasting, then restore the original input method after paste completes — this prevents CJK input methods from intercepting Cmd+V. Restore original clipboard contents after injection.
> 5. Integrate LLM to improve speech recognition accuracy, especially for mixed Chinese-English scenarios. Use an OpenAI-compatible API (configurable API Base URL, API Key, Model) to refine transcribed text. The LLM system prompt must be very conservative in corrections: only fix obvious speech recognition errors (e.g., Chinese homophone errors, English technical terms mistakenly converted to Chinese like 配森→Python, 杰森→JSON). Never rewrite, polish, or remove any content that appears correct — if the input looks correct, return it as-is.
> 6. Provide an LLM Refinement submenu in the menu bar with an enable/disable toggle and a Settings entry. The Settings window contains three input fields: API Base URL, API Key, Model — the API Key field must support being fully cleared — plus Test and Save buttons. After releasing Fn, if LLM is enabled and configured, the floating window shows a Refining... status, waiting for the LLM response before injecting the final text.
> 7. The app runs in LSUIElement mode (menu bar icon only, no Dock icon). Build with Swift Package Manager, provide a Makefile (build/run/install/clean), build output is a signed .app bundle."
> ```
> 
> ## Dist
> 
> https://github.com/yetone/voice-input-dist

## 延伸閱讀

相關概念：[[語音合成]] · [[自然語言處理]] · [[即時通訊]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

[GitHub](https://github.com/yetone/voice-input-src)

## 相關收錄

> [!note]- 直接競品（同子分類：語音輸入）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "語音輸入" AND file.name != "yetone--voice-input-src"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "yetone--voice-input-src"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "yetone--voice-input-src" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "yetone--voice-input-src"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["語音合成","自然語言處理","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yetone--voice-input-src" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yetone--voice-input-src");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yetone--voice-input-src" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yetone" AND file.name != "yetone--voice-input-src"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yetone--voice-input-src");
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
> const me = dv.page("Repos/yetone--voice-input-src");
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
> const me = dv.page("Repos/yetone--voice-input-src");
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
> const me = dv.page("Repos/yetone--voice-input-src");
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
> const me = dv.page("Repos/yetone--voice-input-src");
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

> **2026-03-31** — 首次收錄
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

- [[2026-03-31|2026-03-31]] — 首次收錄，1.0k stars
