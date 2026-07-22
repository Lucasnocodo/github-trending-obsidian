---
repo: v-modal/vmodal_sdk_flutter
url: https://github.com/v-modal/vmodal_sdk_flutter
owner: v-modal
owner_type: Organization
language: Dart
license: MIT
description: "V- Modal AI: Search anything anywhere SDK Flutter"
homepage: ""
stars: 782
stars_per_day: 156
forks: 2
open_issues: 1
created: 2026-07-16
pushed_at: 2026-07-19
first_seen: 2026-07-22
week: "2026-W30"
month: "2026-07"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-22
use_case: "提供多模態記憶的 Flutter SDK，讓應用程式能夠快速搜尋影片中的特定時刻。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-29"
contributor_count: 1
engagement: "low"
issue_close_rate: 92
repo_size_kb: 1763
readme_length: 6869
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-22"
star_history: "2026-07-22:782"
tags:
  - github
  - "category/開發工具"
  - "lang/dart"
  - org
  - easy_install
aliases:
  - "vmodal_sdk_flutter"
  - "v-modal/vmodal_sdk_flutter"
  - "提供多模態記憶的 Flutter SDK，讓應用程式能夠快速搜尋影片中的特定時刻。"
---

# vmodal_sdk_flutter

**782** stars · **156** stars/天 · 建立 5 天前 · Dart · MIT

```dataviewjs
const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
> 提供多模態記憶的 Flutter SDK，讓應用程式能夠快速搜尋影片中的特定時刻。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (156 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 Flutter 應用中實現多模態影片搜尋功能的移動應用開發者。
> **一句話重點** 這個 SDK 的設計讓開發者能夠專注於用戶體驗，而不必擔心後端的複雜性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "v-modal--vmodal_sdk_flutter" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到快速的影片搜尋功能，值得考慮。

> [!abstract] 核心創新
> 提供多模態影片搜尋功能，讓開發者能夠使用自然語言查詢影片內容。

## 專案簡介

VModal SDK 讓開發者能在 Flutter 應用中實現多模態影片搜尋功能，使用者可以透過自然語言查詢影片中的特定時刻。使用者首先需要在應用中上傳影片，SDK 會處理上傳過程，並提供進度追蹤和取消功能。開發者可以透過簡單的 API，使用 `vmodal.searches.searchVideo` 方法來進行搜尋，並獲取符合條件的結果。這個 SDK 的賣點在於它的輕量化設計，讓開發者能夠專注於應用的界面，而不必擔心後端的複雜性。SDK 支援 Android 和 iOS，但目前不支援 Flutter Web，這意味著它專注於移動端的最佳化。技術上，SDK 依賴於 Dart 語言，並使用流式上傳和即時進度回報來提升使用者體驗。

與其他影片搜尋工具相比，VModal 提供了更強的語意搜尋能力，並且不強制開發者使用預設的登入介面，這樣的設計讓開發者能夠更靈活地控制用戶體驗。使用者在搜尋時，必須確保 API 金鑰與影片集合的對應性，否則可能會遇到 404 錯誤。這個 SDK 的設計考量了移動應用的生命週期，能夠在應用關閉時取消操作，並且支持快速的 API 金鑰輪換，這對於需要頻繁切換帳號的應用場景特別有用。整體而言，VModal SDK 是一個針對需要影片搜尋功能的 Flutter 開發者的理想選擇，特別是對於那些希望提供流暢用戶體驗的應用。未來幾個月，隨著功能的增強和社群的活躍，這個專案可能會吸引更多開發者的注意。

**技術棧**：`Dart` · `Flutter 3.44.0`

## 重點功能

- 多模態搜尋 — 支援語音、文字和影像的搜尋功能，讓用戶可以透過自然語言查詢影片內容。
- 即時上傳進度 — 提供上傳進度的實時回報，使用者可以隨時了解上傳狀態。
- 取消操作 — 提供每個操作的取消功能，讓用戶可以在需要時隨時中止上傳或搜尋。
- 靈活的 API 金鑰管理 — 支援在應用中動態輪換 API 金鑰，無需重啟應用。
- Typed collection 和 index 管理 — 提供類型安全的集合和索引管理功能，方便開發者操作資料。

## 快速開始

1. 將 SDK 加入專案依賴
```bash
flutter pub get
```
2. 初始化 VModal 客戶端
```bash
final vmodal = VmodalClient(config: SdkConfig(apiKeyProvider: keys));
```
3. 搜尋影片
```bash
final results = await vmodal.searches.searchVideo(SearchRequest(queryText: 'the cyclist crossing the bridge at sunset', groupName: group.groupName, searchSources: const ['image'], versionLancedb: version, limit: 20));
```

## 程式碼範例

```dart
{
  "前置條件": "已經初始化 VModal 客戶端並獲得 API 金鑰。",
  "程式碼": "final results = await vmodal.searches.searchVideo(SearchRequest(queryText: 'the cyclist crossing the bridge at sunset', groupName: group.groupName, searchSources: const ['image'], versionLancedb: version, limit: 20));",
  "預期輸出": "找到的影片時刻數量。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 782 stars（156/天），forks 2（0.3%），這顯示出一定的關注度。作者 arita37 似乎專注於開發與多媒體相關的工具，這個 SDK 解決了移動應用中對於影片搜尋的需求，之前的方案往往缺乏靈活性和易用性。這個專案的推出可能受到開發者對於多模態搜尋需求的增長影響，尤其是在移動端應用中。forks/stars 比率較低，顯示出目前使用者主要是觀望，尚未進行實質修改。

## 適合誰使用

**目標受眾**：需要在 Flutter 應用中實現多模態影片搜尋功能的移動應用開發者。

> [!example] 使用場景
> - 移動應用開發者用它來實現影片中的語音搜尋功能，因為這樣可以讓用戶更快速地找到特定片段，提升用戶體驗。
> - 內容創作者用它來上傳和管理自己的影片資料庫，因為這樣可以方便地搜尋和索引影片內容，節省時間。
> - 教育應用開發者用它來製作互動式學習平台，因為用戶能夠透過自然語言查詢學習資源，增強學習效果。

## 架構分析

VModal SDK 採用 Dart 語言設計，專注於移動端的使用體驗。它的架構分為數個模組，包括身份驗證、搜尋、上傳和索引管理，這樣的設計讓開發者能夠針對特定功能進行調整和擴展。SDK 使用流式上傳技術，避免將整個影片載入記憶體，這樣可以在處理大型影片時減少資源消耗。

每個模組都獨立運作，這樣的設計讓開發者能夠靈活地管理資源和操作。選擇 Dart 和 Flutter 作為開發語言，能夠充分利用其跨平台特性，並提供流暢的用戶體驗。整體架構的設計考量了移動應用的生命週期，能夠在應用關閉時自動取消操作，這對於用戶體驗至關重要。

## 技術深入分析

VModal SDK 的核心技術機制在於其多模態搜尋能力，使用了語音識別和影像識別技術來實現影片內容的搜尋。這個 SDK 允許開發者透過簡單的 API 進行複雜的操作，並且提供了即時的上傳進度回報，這對於用戶體驗至關重要。SDK 的設計考量了移動端的特性，能夠在應用關閉時自動取消操作，這樣的設計能夠減少不必要的資源浪費。選擇 Dart 和 Flutter 作為開發語言，能夠充分利用其跨平台特性，並提供流暢的用戶體驗。

SDK 的依賴樹相對輕量，主要依賴於 Dart 的核心庫，這樣的設計讓開發者能夠快速上手。隨著使用者需求的增長，這個 SDK 可能會面臨擴展性挑戰，特別是在處理大量影片資料時。對於外部 API 的依賴程度較高，開發者需要確保 API 的穩定性和安全性。整合到現有的 Flutter 應用中相對簡單，能夠快速適應現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中包含了良好的入門指南，讓使用者能夠在短時間內開始使用 SDK。

## 優缺點分析

> [!success] 優點
> - 提供多模態搜尋功能，提升用戶體驗。
> - 即時上傳進度回報，讓用戶能夠掌握上傳狀態。
> - 靈活的 API 金鑰管理，方便開發者進行帳號切換。

> [!danger] 缺點
> - 目前不支援 Flutter Web，限制了使用範圍。
> - 對於 API 金鑰的管理需要謹慎，否則可能導致錯誤。
> - Multipart 上傳功能尚在實驗階段，穩定性有待加強。

> [!warning] 注意事項
> - 目前不支援 Flutter Web。
> - 對於影片搜尋的 API 金鑰必須與影片集合對應，否則會返回 404 錯誤。
> - Multipart 上傳功能尚在實驗階段，需明確啟用。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** API 金鑰與影片集合不匹配時會返回 404 錯誤。
  - 解法：確保 API 金鑰與影片集合正確對應。
- [MEDIUM] Multipart 上傳功能尚在實驗階段，可能不穩定。
  - 解法：使用單一上傳作為預設選項。
- [MEDIUM] 在應用關閉時未能正確取消操作，可能導致資源浪費。
  - 解法：確保在應用關閉時調用取消功能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發移動應用 | 非常適合 | SDK 提供了簡單易用的 API，適合小型團隊快速開發。 |
| 大型企業的影片管理系統 | 普通 | 雖然功能強大，但目前穩定性和擴展性仍需加強。 |
| 教育機構開發互動學習平台 | 適合 | 多模態搜尋功能能夠提升學習效果，符合需求。 |
| 需要在 Web 上實現影片搜尋的應用 | 不適合 | 目前不支援 Flutter Web，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到快速的影片搜尋功能，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：SDK 不需要高權限，且不會存取敏感資料。對於 API 金鑰的管理需謹慎，避免洩漏風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

VModal SDK 最常與 Flutter 應用搭配使用，通常在開發階段進行整合。開發者可以在 Flutter 應用中使用 SDK 來實現影片搜尋功能，具體做法是將 SDK 加入依賴後，透過簡單的 API 進行操作。SDK 支援與主流 CI/CD 工具的整合，並且可以在 VS Code 等 IDE 中進行開發。整合的摩擦點主要在於 API 金鑰的管理，開發者需要確保金鑰的安全性和有效性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 VModal SDK 出現之前，開發者通常需要依賴多個工具來實現影片搜尋功能，這樣的方案往往缺乏整合性和靈活性。隨著移動應用需求的增長，對於多模態搜尋的需求也隨之上升。VModal SDK 的出現正好填補了這一空白，提供了一個統一的解決方案，未來可能會隨著技術的進步而不斷演化。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
| Forks | 2 |
| Open Issues | 1 |
| Issue 解決率 | 92% (11 closed) |
| 最後推送 | 2026-07-19 |
| 建立日期 | 2026-07-16 |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/v-modal/vmodal_sdk_flutter) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Dart" : 92
>     "Shell" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@arita37](https://github.com/arita37) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和問題回應。
**連結**：[文件](https://v-modal.github.io/vmodal_sdk_flutter/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-18 ~ 2026-07-19）
> **活躍天數** 2 天 · **最新 commit** Release Flutter SDK from 445867a02d6f0648b06dc1286b28df11200f5f1b

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/v-modal/vmodal_sdk_flutter/issues/1) | CI/CD | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> VModal for Flutter
>   Give your Android and iOS apps a multimodal memory.
>   Upload video. Find moments by meaning, speech, text, or imagery.Keep the experience fast, native, and 100% Flutter.
>   
>   
>   
>   
>   
>   
>   
> 
> Turn every video library into an experience your users can explore.
> 
> ## Build the feature people remember
> 
> VModal brings multimodal video search and mobile-friendly uploads to Dart with a small, typed API. Your app owns the interface; the SDK handles the VModal gateway, request models, responses, upload streams, progress, and cancellation.
> 
> | Your Flutter experience | VModal gives you |
> |---|---|
> | “Find the cyclist in the red jacket” | Semantic video and image search |
> | Search words spoken or shown on screen | ASR and OCR search sources |
> | Upload from a picker or camera flow | Streamed, signed uploads with live progress |
> | A cancel button that really cancels | Per-operation cancellation tokens |
> | Collection and indexing screens | Typed collection, index, usage, and image resources |
> | Login and account switching your way | App-owned runtime credentials—no login UI imposed |
> 
> ## Start in minutes
> 
> The public package source is available on GitHub. Add it to your app:
> 
> ```yaml
> dependencies:
>   vmodal_sdk_flutter:
>     git:
>       url: https://github.com/v-modal/vmodal_sdk_flutter.git
>       ref: main
> ```
> 
> Then run:
> 
> ```bash
> flutter pub get
> ```
> 
> Create one client from the API key already loaded by your authenticated app:
> 
> ```dart
> import 'package:vmodal_sdk_flutter/vmodal_sdk_flutter.dart';
> 
> final keys = MutableApiKeyProvider(runtimeApiKey);
> final vmodal = VmodalClient(
>   config: SdkConfig(apiKeyProvider: keys),
> );
> ```
> 
> > The SDK never owns your login screen or persists your API key. It receives an in-memory credential from your application at runtime.
> 
> ## Search video with natural language
> 
> ```dart
> final groups = await vmodal.collections.listGroups(mode: 'vid_file');
> if (groups.data.isEmpty) {
>   throw StateError('No video collection exists for this API key');
> }
> final group = groups.data.first;
> final version = group.latestLancedbVersion;
> if (version == null) {
>   throw StateError('The collection has no searchable LanceDB version');
> }
> 
> final results = await vmodal.searches.searchVideo(
>   SearchRequest(
>     queryText: 'the cyclist crossing the bridge at sunset',
>     groupName: group.groupName,
>     searchSources: const ['image'],
>     versionLancedb: version,
>     limit: 20,
>   ),
> );
> 
> print('${results.cntActual} moments found');
> for (final moment in results.data) {
>   print(moment);
> }
> ```
> 
> The collection must be a `vid_file` `GroupItem` returned
> for the current runtime API key. Collection access is key-scoped; a name copied
> from another account or environment can return HTTP 404 even when the search
> route is healthy. The example name `flutter_example` is valid only after that
> key has uploaded or otherwise created the collection and a refreshed
> `listGroups()` response contains it. Search must also send an advertised
> `lancedbVersions` value; `latestLancedbVersion` converts values such as `v1`
> to the numeric request field `version_lancedb: 1`.
> 
> The response stays typed where the contract is stable and preserves the raw JSON so new server fields remain available immediately.
> 
> ## Upload with progress and cancellation
> 
> The SDK reads an app-accessible `File` as a stream. It does not load the entire video into memory.
> 
> ```dart
> import 'dart:io';
> 
> final task = vmodal.collections.videoUpload(
>   UploadSource.fromFile(File(videoPath)),
>   collectionName: 'travel_diaries',
>   subCollectionName: 'mobile_uploads',
> );
> 
> final progress = task.progress.listen((value) {
>   print('Uploading ${value.percent}%');
> });
> 
> // Connect this to your Flutter cancel button when needed:
> // task.cancel();
> 
> final uploaded = await task.result;
> await progress.cancel();
> print('Ready: ${uploaded.fileName}');
> ```
> 
> Signed single upload is the production default for every file size. Multipart upload is experimental and must be enabled explicitly with `VideoUploadOptions(multipart: true)`; it fails with `FeatureDisabled` when the complete backend route family is unavailable.
> 
> ## Designed for real mobile lifecycles
> 
> - Rotate credentials without rebuilding the client: `keys.rotate(newApiKey)`.
> - Cancel search or upload work when a screen closes.
> - Show upload progress from a broadcast Dart stream.
> - Keep file picking, secure storage, background scheduling, and lifecycle UI in the parent app.
> - Close network resources deterministically with `await vmodal.close()`.
> 
> For logout or account switching, cancel active work, clear upload persistence, call `keys.clear()`, close the client, and create a new client for the next identity. Key rotation alone is not an identity switch.
> 
> ## One client, focused resources
> 
> ```text
> vmodal.auth          identity and health
> vmodal.searches      multimodal video search
> vmodal.collections   upload and collection lifecycle
> vmodal.indexes       create, inspect, and delete indexes
> vmodal.admin         usage and cache statistics
> vmodal.r2            presigned object-storage operations
> vmodal.images        image retrieval
> ```
> 
> Gateway mode is the safe default and sends caller identity only as a bearer credential. `VmodalClient.unsafeDirect` is reserved for trusted private networks.
> 
> ## Platform support
> 
> | Platform | Status | Notes |
> |---|---:|---|
> | Android | ✅ Supported | Flutter-native Dart API |
> | iOS | ✅ Supported | Flutter-native Dart API |
> | Flutter Web | ⛔ Not supported | Not part of the 1.0 release contract |
> | macOS, Windows, Linux | ⏳ Not targeted | Mobile-first release |
> 
> Minimum toolchain: Flutter `3.44.0` and Dart `3.12.0`.
> 
> ## Explore the SDK
> 
> - [Browse the public SDK reference](https://v-modal.github.io/vmodal_sdk_flutter/)
> - [Run the complete example app](https://github.com/v-modal/vmodal_sdk_flutter/tree/main/example)
> - [Read the SDK guide](https://github.com/v-modal/vmodal_sdk_flutter/blob/main/doc/sdk_doc.md)
> - [Manage API keys safely](https://github.com/v-modal/vmodal_sdk_flutter/blob/main/doc/manage_api_key.md)
> - [Build a search experience](https://github.com/v-modal/vmodal_sdk_flutter/blob/main/doc/search_app.md)
> - [Review the API contract](https://github.com/v-modal/vmodal_sdk_flutter/blob/main/doc/sdk_contract.md)
> - [Open an issue](https://github.com/v-modal/vmodal_sdk_flutter/issues)
> 
> ## Development
> 
> ```bash
> git clone https://github.com/v-modal/vmodal_sdk_flutter.git
> cd vmodal_sdk_flutter
> bash install.sh install
> bash test.sh all
> ```
> 
> The offline gate analyzes the package, runs the SDK and example tests, checks route synchronization, and validates Android/iOS example builds. Live tests require the repository's existing test credentials and are intentionally separate.
> 
> ---
> 
> Build video experiences people can search, not just scroll.
> 
> Flutter and the related logo are trademarks of Google LLC. VModal is not endorsed by or affiliated with Google LLC.

## 延伸閱讀

相關概念：[[多模態]] · [[API 設計]] · [[自動化測試]]

相關專案：[[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Sophomoresty--gemini-web2api|Sophomoresty/gemini-web2api]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[Michaelliv--pi-dynamic-workflows|Michaelliv/pi-dynamic-workflows]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/v-modal/vmodal_sdk_flutter)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "v-modal--vmodal_sdk_flutter"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "v-modal--vmodal_sdk_flutter"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Dart" AND file.name != "v-modal--vmodal_sdk_flutter" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "v-modal--vmodal_sdk_flutter"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","API 設計","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "v-modal--vmodal_sdk_flutter" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "v-modal--vmodal_sdk_flutter" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "v-modal" AND file.name != "v-modal--vmodal_sdk_flutter"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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
> const me = dv.page("Repos/v-modal--vmodal_sdk_flutter");
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

> **2026-07-22** — 首次收錄
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

- [[2026-07-22|2026-07-22]] — 首次收錄，782 stars
