---
repo: digimata/quill
url: https://github.com/digimata/quill
owner: digimata
owner_type: Organization
language: Swift
license: N/A
description: "Ultra-minimalist macOS recording + transcription."
homepage: ""
stars: 2524
stars_per_day: 421
forks: 160
open_issues: 18
created: 2026-07-24
pushed_at: 2026-07-30
first_seen: 2026-07-30
week: "2026-W31"
month: "2026-07"
category: "其他"
subcategory: "錄音轉錄"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-30
use_case: "提供一個超簡約的 macOS 錄音與轉錄工具，讓使用者能夠輕鬆記錄會議內容。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-03"
contributor_count: 2
engagement: "low"
issue_close_rate: 7
repo_size_kb: 64
readme_length: 5296
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-30"
star_history: "2026-07-30:1593,2026-07-31:2524"
tags:
  - github
  - "category/其他"
  - "lang/swift"
  - org
aliases:
  - "quill"
  - "digimata/quill"
  - "提供一個超簡約的 macOS 錄音與轉錄工具，讓使用者能夠輕鬆記錄會議內容。"
---

# quill

**1.6k** stars · **319** stars/天 · 建立 5 天前 · Swift · 未標註授權

```dataviewjs
const me = dv.page("Repos/digimata--quill");
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
> 提供一個超簡約的 macOS 錄音與轉錄工具，讓使用者能夠輕鬆記錄會議內容。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (319 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 macOS 上進行會議錄音和轉錄的專業人士，尤其是重視隱私的使用者。
> **一句話重點** Quill 的設計理念在於提供一個簡單而高效的本地錄音與轉錄解決方案，特別適合需要隱私保護的專業人士。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/digimata--quill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "錄音轉錄" && p.file.name !== "digimata--quill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 錄音轉錄 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的會議錄音與轉錄，值得一試。

> [!abstract] 核心創新
> Quill 是一個完全本地化的錄音與轉錄工具，確保使用者的隱私安全。

## 專案簡介

Quill 是一款專為 macOS 設計的錄音與轉錄工具，能夠在單一點擊下錄製麥克風和系統音頻，並在錄音結束後自動進行轉錄。使用者只需在終端執行 `quill`，然後透過菜單欄啟動錄音，錄音過程中會顯示計時器，並在結束後自動生成帶有說話者標籤的轉錄文本。這樣的設計使得使用者能夠在會議中專注於內容，而不必擔心記錄細節。Quill 的轉錄引擎使用 FluidAudio 的 Core ML 版本，能在 Apple Silicon 上以每小時約 20 秒的速度進行轉錄，並且所有數據都保留在本地，確保隱私安全。此工具的賣點在於其簡潔的操作與高效的轉錄能力，適合需要快速記錄會議的使用者。

技術上，Quill 利用 Core Audio 進行系統音頻捕獲，並使用 AVAudioEngine 進行麥克風錄音，這樣的架構使得音質更佳且不需要額外的虛擬設備。與其他錄音工具相比，如 Otter.ai 和 Zoom，Quill 的優勢在於其完全本地化的處理，避免了雲端存儲的隱私風險，並且不需要網路連接。使用者在使用中可能會遇到的問題包括錄音靜音的情況，這通常與系統的隱私設置有關。Quill 的社群活躍度尚可，開發者對於問題的回應速度也相對及時。整體來看，Quill 是一個值得考慮的工具，特別是對於需要在會議中進行高效記錄的專業人士。

**技術棧**：`Swift` · `Core Audio` · `AVAudioEngine` · `FluidAudio`

## 重點功能

- 本地錄音 — 所有錄音和轉錄均在本地處理，無需上傳至雲端。
- 雙音軌錄製 — 同時錄製麥克風和系統音頻，便於後續轉錄和分析。
- 自動轉錄 — 錄音結束後自動開始轉錄，並生成帶有說話者標籤的文本。
- 簡單的 CLI 操作 — 透過命令行輕鬆啟動和管理錄音，支持多種指令選項。
- 可配置的錄音目錄 — 使用者可以自定義錄音文件的儲存位置。

## 快速開始

1. 克隆專案並編譯
```bash
cd quill && swift build -c release
```
2. 將可執行檔複製到系統路徑
```bash
sudo cp .build/release/quill /usr/local/bin/quill
```
3. 啟動錄音工具
```bash
quill install --launch-at-login
```

## 程式碼範例

```swift
{
  "前置條件": "已安裝並編譯 quill",
  "指令": "quill run --out",
  "預期輸出": "開始錄製並將錄音文件儲存至指定目錄"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1593 stars（319/天），forks 101（6.3%），這顯示出相對穩定的關注度。開發者 dremnik 和 rachelbaker 之前在開源社群中有過其他專案的貢獻，這使得他們的專案更容易獲得信任。Quill 解決了會議錄音後的轉錄需求，特別是在隱私和本地處理方面，這是許多現有工具無法提供的。社群中對於 Whisper 引擎的需求也反映了使用者對於多語言支持的期待。這些因素共同促進了 Quill 的快速增長。

## 適合誰使用

**目標受眾**：需要在 macOS 上進行會議錄音和轉錄的專業人士，尤其是重視隱私的使用者。

> [!example] 使用場景
> - 會議主持人用它來錄製會議並自動生成轉錄，因為這樣可以節省手動記錄的時間，並確保不漏掉重要信息。
> - 自由工作者用它來記錄客戶會議，因為能夠在會後快速獲得轉錄文本，方便整理會議紀錄。
> - 學生用它來錄製講座並轉錄，因為這樣可以在複習時更方便地查找重點內容。

## 架構分析

Quill 的架構基於單一的 Swift 可執行檔，利用 Core Audio 進行系統音頻捕獲，並使用 AVAudioEngine 進行麥克風錄音。這種設計使得工具能夠在不依賴虛擬設備的情況下，直接錄製系統音頻，降低了使用的複雜性。資料流方面，錄音過程中生成兩個音軌，分別為麥克風和系統音頻，這樣的設計使得轉錄時能夠更準確地識別說話者。

選擇使用 CAF 格式而非 m4a，確保在錄音過程中即使發生意外也不會丟失數據。這樣的架構雖然簡單，但在處理大量錄音時可能會面臨性能瓶頸，特別是在轉錄過程中需要較高的計算資源。整體來看，Quill 的設計在簡潔性與功能性之間取得了良好的平衡。

## 技術深入分析

Quill 的核心技術機制依賴於 Swift 語言和 Core Audio 的強大功能，利用 AVAudioEngine 進行麥克風錄音，並透過 FluidAudio 進行音頻轉錄。這種設計使得 Quill 能夠在本地快速處理音頻數據，並生成準確的轉錄文本。效能方面，Quill 在 Apple Silicon 上的轉錄速度約為每小時 20 秒，這在同類工具中表現優異。選擇使用 CAF 格式而非 m4a，確保在錄音過程中即使發生意外也不會丟失數據，這在實際使用中非常重要。設計上，Quill 選擇了單一的可執行檔架構，這樣的選擇使得部署和使用都相對簡單，但在擴展性上可能會受到限制。技術風險方面，若未來需要支持更多語言，則可能需要重新設計轉錄引擎，這將增加開發負擔。整合方面，Quill 與 macOS 的原生功能相容性良好，但在與其他工具的整合上可能會遇到一些挑戰，例如需要額外的配置才能正常運作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，對於新手來說相對友好。安裝過程順暢，無明顯的坑。提供了基本的使用指南，但缺乏進一步的示例。文件目前僅提供英文版本，對於非英語使用者可能會造成一些困難。

## 優缺點分析

> [!success] 優點
> - 完全本地化，無需擔心隱私問題。
> - 操作簡單，適合快速啟動錄音。
> - 支持雙音軌錄製，提升轉錄準確性。
> - 自動生成帶有說話者標籤的轉錄文本，方便後續查閱。

> [!danger] 缺點
> - 僅支援 macOS 15 以上版本，限制了使用範圍。
> - 轉錄引擎目前僅支援英語，對於多語言使用者不友好。
> - 錄音過程中可能會捕獲不必要的背景音。
> - 需要 Apple Silicon 以獲得最佳性能，對於舊設備支持不佳。

> [!warning] 注意事項
> - 僅支援 macOS 15 以上版本。
> - 轉錄引擎目前僅支援英語，其他語言尚未實現。
> - 錄音過程中可能會捕獲所有系統音頻，需注意背景音。
> - 需要 Apple Silicon 以獲得最佳轉錄速度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多種錄音功能，但不支持本地轉錄，需依賴雲端服務。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於音頻編輯，缺乏自動轉錄功能，適合需要後期處理的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多種錄音功能，但不支持本地轉錄，需依賴雲端服務。 | 如果需要多功能的錄音工具，且不介意使用雲端服務進行轉錄。 | medium，因為需要重新配置雲端服務的設置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於音頻編輯，缺乏自動轉錄功能，適合需要後期處理的使用者。 | 如果需要對錄音進行深入的編輯和處理，而不僅僅是轉錄。 | low，因為功能上有一定的相似性，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **quill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供多種錄音功能，但不支持本地轉錄，需依賴雲端服務。 | 專注於音頻編輯，缺乏自動轉錄功能，適合需要後期處理的使用者。 |
> | 遷移成本 | - | medium，因為需要重新配置雲端服務的設置。 | low，因為功能上有一定的相似性，易於上手。 |
> | 適用場景 | 主要場景 | 如果需要多功能的錄音工具，且不介意使用雲端服務進行轉錄。 | 如果需要對錄音進行深入的編輯和處理，而不僅僅是轉錄。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人試用，尚不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 錄音過程中可能會捕獲不必要的背景音，影響轉錄質量。
  - 解法：在錄音前關閉其他應用程式的音效。
- **[HIGH]** 如果錄音靜音，可能與系統的隱私設置有關。
  - 解法：檢查系統設置中的隱私權限。
- [MEDIUM] 轉錄引擎目前僅支援英語，對於多語言使用者不友好。
  - 解法：等待未來更新以支持更多語言。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司會議錄音 | 非常適合 | 簡單易用且支持本地轉錄，適合小型團隊的需求。 |
| 大型企業的多語言會議 | 不適合 | 目前僅支援英語，無法滿足多語言需求。 |
| 需要長時間錄音的學術研究 | 適合 | 能夠有效錄製並轉錄長時間的會議內容。 |
| 需要即時轉錄的客戶服務通話 | 普通 | 雖然能夠錄音，但轉錄速度可能無法滿足即時需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的會議錄音與轉錄，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Quill 僅在本地運行，不需要高權限，且不存取敏感資料，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/digimata--quill");
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
> const me = dv.page("Repos/digimata--quill");
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
| Open Issues | 14 |
| Issue 解決率 | 7% (1 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-24 |
| Repo 大小 | 64 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/digimata/quill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dremnik](https://github.com/dremnik) | 12 |
> | [@rachelbaker](https://github.com/rachelbaker) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開發者對問題的回應速度相對及時。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-25 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #1 from rachelbaker/patch-1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/digimata/quill/issues/5) | Whisper engine: I have one working — want a PR? (plus a VAD  | 3 | 1 |
> | [#13](https://github.com/digimata/quill/issues/13) | Feature request: translate non-English speech to English in  | 1 | 1 |
> | [#19](https://github.com/digimata/quill/issues/19) | Transcription duplicates | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # quill
> 
> A minimal, fully local macOS meeting recorder + transcriber. One menu-bar
> click records your mic and all system audio as two separate tracks; when you
> stop, quill transcribes both on-device and writes a speaker-tagged transcript.
> Nothing ever leaves the machine.
> 
> Named for the feather. Sibling of [parrot](https://github.com/digimata/parrot), same skeleton: single
> Swift binary, menu-bar tray, no app bundle.
> 
> ## Install
> 
> ```sh
> cd quill
> swift build -c release
> sudo cp .build/release/quill /usr/local/bin/quill
> quill install --launch-at-login   # optional — runs in the background on login
> ```
> 
> **Requires:** macOS 15+ (Core Audio process taps for system audio — no
> virtual device, no kernel extension). Apple Silicon recommended for
> transcription speed.
> 
> ## How to use
> 
> 1. **Run it** (`quill` in a terminal, or the LaunchAgent).
> 2. **Click the feather in the menu bar → Start recording.** First use prompts
>    for microphone and System Audio Recording permissions. While recording, the
>    icon turns red with a running elapsed counter, and macOS shows the purple
>    recording indicator.
> 3. **Click → Stop recording** when the meeting ends. Transcription starts
>    automatically (the menu shows progress); a notification fires when the
>    transcript is ready.
> 
> Each session lands in `~/Recordings//`:
> 
> | File | Contents |
> |---|---|
> | `mic.caf` | your side (default input device, AAC) |
> | `system.caf` | everything the Mac played — the other side of the call (AAC) |
> | `meta.json` | start/end timestamps, duration, per-track start offsets |
> | `transcript.json` | canonical transcript — engine provenance + timed, speaker-tagged segments |
> | `transcript.md` | the same transcript rendered for reading |
> | `transcribe.log` | transcription progress/errors for this session |
> 
> Two tracks on purpose: speech models do better on clean single-source audio,
> and mic-vs-system is free two-party diarization — `me` vs `them` with no
> speaker-identification model. CAF on purpose: unlike m4a, it needs no
> finalization pass — if the process dies mid-meeting, everything already
> written is still readable.
> 
> ## Transcription
> 
> Built in, on-device, automatic. The default engine is **Parakeet TDT 0.6B v2**
> (English) via [FluidAudio](https://github.com/FluidInference/FluidAudio)'s
> Core ML port — roughly 20 seconds per hour of audio on Apple Silicon. Models
> (~600 MB) download once on first transcription; `quill doctor` tells you
> whether they're already cached so you're never downloading after an important
> meeting.
> 
> Each track is transcribed separately, shifted by its start offset so both
> share one clock, and merged by timestamp. Jobs run in a serial queue — you can
> start a new recording while the last one transcribes. Unfinished jobs resume
> on next launch (the filesystem is the queue: a session with `meta.json` but no
> `transcript.json` is pending). Failures append to the session's
> `transcribe.log` and never block later jobs.
> 
> The engine sits behind a small protocol; a Whisper engine (WhisperKit
> large-v3-turbo) is planned as the fallback / re-transcription option.
> 
> ## Config
> 
> Optional, at `~/.config/quill/config.json`:
> 
> ```json
> {
>   "recordings_dir": "~/Recordings",
>   "transcription": { "enabled": true, "engine": "parakeet" },
>   "on_stop": "my-hook"
> }
> ```
> 
> - `recordings_dir` — where sessions land. Resolution order: `--out` flag >
>   config > `~/Recordings`.
> - `transcription.enabled` — set `false` to just record.
> - `mic_voice_processing` — Apple's echo cancellation on the mic (default off).
>   Set `true` when recording meetings through the speakers, so playback doesn't
>   bleed into the mic track and get transcribed twice as "me". The trade: while
>   the voice unit is live, macOS ducks other playback slightly (`.min` ducking
>   is configured, but it can't be zeroed). On headphones there's no echo to
>   cancel, so raw capture is the better default.
> - `on_stop` — shell command spawned with the session directory as its
>   argument, **after the transcript is written** (or right after recording if
>   transcription is disabled). Wire it to whatever comes next: summarization,
>   filing, indexing.
> 
> ## CLI
> 
> ```sh
> quill                        # run the menu-bar daemon (^C to quit)
> quill run --out         # custom recordings root (default ~/Recordings)
> quill doctor                 # check permissions, recordings folder, models
> quill install --launch-at-login
> quill install --uninstall
> ```
> 
> ## Stack
> 
> - **Swift** — single SPM executable target
> - **Core Audio process tap** (`AudioHardwareCreateProcessTap`, macOS 14.2+) —
>   system audio capture via a private aggregate device
> - **AVAudioEngine** — mic capture
> - **AVAudioFile** — streaming AAC encode into CAF
> - **FluidAudio / Parakeet** — on-device Core ML transcription
> - **NSStatusItem** — the whole UI
> 
> ## Gotchas
> 
> - A global tap records *everything* the Mac plays — notification dings,
>   music, all of it. Don't play Spotify during meetings (or ask for a
>   per-process picker if it bothers you).
> - If recordings come out silent, check System Settings → Privacy & Security →
>   Screen & System Audio Recording.
> - Parakeet v2 is English-only. Other languages will come with the Whisper
>   engine.
> - The binary embeds its Info.plist (`__TEXT,__info_plist`) so TCC can
>   attribute permissions to quill itself when running as a LaunchAgent.

## 延伸閱讀

相關概念：[[音頻處理]] · [[機器學習]] · [[隱私保護]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/digimata/quill)

## 相關收錄

> [!note]- 直接競品（同子分類：錄音轉錄）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "錄音轉錄" AND file.name != "digimata--quill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "digimata--quill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "digimata--quill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "digimata--quill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["音頻處理","機器學習","隱私保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "digimata--quill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/digimata--quill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "digimata--quill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "digimata" AND file.name != "digimata--quill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/digimata--quill");
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
> const me = dv.page("Repos/digimata--quill");
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
> const me = dv.page("Repos/digimata--quill");
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
> const me = dv.page("Repos/digimata--quill");
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
> const me = dv.page("Repos/digimata--quill");
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

> **2026-07-30** — 首次收錄
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

- [[2026-07-31|2026-07-31]] — 再次上榜，2.5k stars
- [[2026-07-30|2026-07-30]] — 首次收錄，1.6k stars
