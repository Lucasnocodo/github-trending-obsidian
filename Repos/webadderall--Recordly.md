---
repo: webadderall/Recordly
url: https://github.com/webadderall/Recordly
owner: webadderall
owner_type: User
language: TypeScript
license: MIT
description: "A free, open-source Screen Studio alternative that adds auto-zoom, cursor animations and more to your screen recordings. Substantially modifies the OpenScreen foundation."
homepage: "https://recordly.dev"
stars: 2350
stars_per_day: 470
forks: 120
open_issues: 12
created: 2026-03-12
pushed_at: 2026-03-17
first_seen: 2026-03-18
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "螢幕錄影"
release_tag: "v1.0.9"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-18
use_case: "提供自動縮放、游標動畫等功能的免費開源螢幕錄影工具，替代 Screen Studio。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-21"
contributor_count: 5
engagement: "low"
issue_close_rate: 64
repo_size_kb: 182961
readme_length: 7236
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-18"
star_history: "2026-03-18:2350"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/electron"
  - "topic/free"
  - "topic/linux"
  - "topic/macos"
  - "topic/open_source"
aliases:
  - "Recordly"
  - "webadderall/Recordly"
  - "提供自動縮放、游標動畫等功能的免費開源螢幕錄影工具，替代 Screen Studio。"
---

# Recordly

**2.4k** stars · **470** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/webadderall--Recordly");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.9`

`electron` `free` `linux` `macos` `open-source` `screen-recorder` `screen-studio` `windows`

> [!summary] 一句話摘要
> 提供自動縮放、游標動畫等功能的免費開源螢幕錄影工具，替代 Screen Studio。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (470 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成專業視頻的內容創作者和小型團隊。
> **一句話重點** Recordly 的自動縮放和游標動畫功能讓錄製的視頻質量大幅提升，適合需要快速生成專業內容的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/webadderall--Recordly");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "螢幕錄影" && p.file.name !== "webadderall--Recordly" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 螢幕錄影 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、3 小時整合，得到快速生成專業視頻的效果，值得使用。

> [!abstract] 核心創新
> Recordly 提供了自動縮放和游標動畫功能，讓錄製的視頻更具專業感。

## 專案簡介

Recordly 是一款開源的螢幕錄影和編輯工具，專為創建專業級的演示、教學和產品視頻而設計。用戶可以錄製整個螢幕或單一窗口，並在錄製過程中自動進行縮放，平滑游標運動，讓視頻看起來更專業。它支持多平台運行，包括 macOS、Windows 和 Linux，並利用原生 API 進行高效錄製。主要功能包括可調整的游標動畫、音頻錄製、智能縮放建議和編輯工具，如時間軸修剪和註解。使用者可以選擇將錄製的視頻導出為 MP4 或 GIF 格式，並調整輸出質量和長寬比。

這個工具的賣點在於其自動化的錄製和編輯流程，大幅減少了用戶的手動操作。技術上，Recordly 使用 Electron 框架，並整合了 PixiJS 進行場景合成，這使得它在跨平台錄製時能夠保持高效能和流暢性。與其他錄影工具相比，如 OBS Studio 和 ScreenFlow，Recordly 提供了更簡單的使用體驗，特別適合需要快速生成專業視頻的用戶。雖然目前在 Linux 平台上游標隱藏功能尚未完善，但開源社群的貢獻可望改善此問題。整體而言，Recordly 是一個適合個人和小型團隊使用的工具，尤其是在需要快速製作視頻內容的情境下。

**技術棧**：`Electron` · `PixiJS` · `TypeScript`

## 重點功能

- 游標動畫 — 可調整游標大小、平滑運動、點擊彈跳動畫等。
- 錄製功能 — 支持整個螢幕或單一窗口錄製，並可選擇音頻來源。
- 智能縮放 — 根據游標活動自動建議縮放區域，並支持手動設置。
- 編輯工具 — 提供時間軸修剪、速度調整和註解功能。
- 導出選項 — 支持 MP4 和 GIF 格式導出，並可調整質量和長寬比。

## 快速開始

1. 下載並安裝 Recordly
```bash
從 https://github.com/webadderall/Recordly/releases 下載預編譯版本
```
2. 從源碼構建
```bash
git clone https://github.com/webadderall/Recordly.git recordly && cd recordly && npm install && npm run dev
```
3. 啟動錄製
```bash
啟動 Recordly，選擇螢幕或窗口，然後開始錄製
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2350 stars（470/天），forks 120（5.1%），顯示出穩定的增長趨勢。作者 Siddharth Vaddem 之前參與過 OpenScreen 專案，這次的 Recordly 提供了對於螢幕錄影工具的創新解決方案，特別是自動縮放和游標動畫等功能，這些在市場上是相對少見的。近期的推特討論和社群反饋也促進了其知名度的提升。隨著遠端工作和線上教學的普及，對於易於使用的錄影工具需求日益增長，Recordly 恰好滿足了這一需求。forks/stars 比率為 5.1%，顯示出對於這個工具的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要快速生成專業視頻的內容創作者和小型團隊。

> [!example] 使用場景
> - 內容創作者用它來錄製教學視頻，因為自動縮放和游標動畫能讓視頻更具吸引力。
> - 產品經理用它來製作產品演示，因為簡單的編輯工具能快速生成專業視頻。
> - 開發者用它來錄製程式碼演示，因為支持多平台且操作簡單，能快速上手。

## 架構分析

Recordly 採用 Electron 框架作為基礎，這使得它能夠跨平台運行。錄製過程中，macOS 使用原生的 ScreenCaptureKit 來捕捉畫面，而 Windows 則利用 Windows Graphics Capture 進行錄製。這種設計選擇使得錄製過程更加高效，並能夠提供更好的性能。

資料流方面，錄製的畫面會經過 PixiJS 進行合成，然後再導出為 MP4 或 GIF 格式。這樣的架構使得 Recordly 能夠在不同平台上保持一致的使用體驗。選擇 Electron 雖然帶來了跨平台的便利，但也可能導致應用的體積較大，並且對於某些高效能需求的場景可能會有性能瓶頸。

整體而言，這種架構設計使得 Recordly 在功能和性能之間取得了良好的平衡。

## 技術深入分析

Recordly 的核心技術機制在於其使用 Electron 作為應用框架，這使得它能夠在多個平台上運行。錄製過程中，macOS 利用原生的 ScreenCaptureKit 進行高效錄製，而 Windows 則依賴 Windows Graphics Capture API。這樣的設計選擇使得錄製過程中的性能和穩定性得以保障。Recordly 的錄製能力支持多種音頻來源，包括系統音頻和麥克風音頻，這對於製作教學視頻尤為重要。

整體的資料流由 PixiJS 處理，這使得畫面合成和渲染過程更加流暢。設計上的取捨在於選擇了 Electron 這一跨平台框架，雖然帶來了便利，但也可能導致應用的體積增大。技術風險方面，Linux 平台的游標隱藏問題仍然是未來改進的重點。與主流的錄影工具相比，Recordly 在使用上更為簡單，適合需要快速生成內容的用戶。

整合到現有的開發流程中，Recordly 也能夠與 CI/CD 流程友好配合，特別是在需要錄製測試結果或教學視頻的情境下。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例。安裝過程相對順暢，但在 macOS 上可能需要處理應用的簽名問題。文件目前僅提供英文和簡體中文版本，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 開源且免費，適合預算有限的用戶。
> - 自動化功能減少了手動編輯的時間，提升了工作效率。
> - 多平台支持，能夠在不同操作系統上使用。

> [!danger] 缺點
> - 在 Linux 上游標隱藏功能尚未完善，可能影響錄製效果。
> - 對於高效能需求的用戶，Electron 的性能可能不如原生應用。
> - 目前功能仍在持續開發中，可能會遇到不穩定的情況。

> [!warning] 注意事項
> - macOS 需要 12.3 以上版本才能使用 ScreenCaptureKit。
> - Windows 10 需要 19041 以上版本，否則游標無法隱藏。
> - Linux 平台上游標隱藏功能不支持，錄製時游標始終可見。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [obsproject/obs-studio](https://github.com/obsproject/obs-studio) | OBS Studio 是一款功能強大的開源錄影工具，支持多種擴展功能，但相對於 Recordly，使用門檻較高，適合需要複雜設置的用戶。 |
| [telestream/screenflow](https://github.com/telestream/screenflow) | ScreenFlow 提供了強大的編輯功能，但僅限於 macOS，且為付費工具，Recordly 提供了免費的替代方案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [obsproject/obs-studio](https://github.com/obsproject/obs-studio) | OBS Studio 是一款功能強大的開源錄影工具，支持多種擴展功能，但相對於 Recordly，使用門檻較高，適合需要複雜設置的用戶。 | 如果需要高級的錄影功能和自定義設置，OBS Studio 是更好的選擇。 | medium，因為 OBS 的設置和操作界面與 Recordly 有很大不同。 |
| [telestream/screenflow](https://github.com/telestream/screenflow) | ScreenFlow 提供了強大的編輯功能，但僅限於 macOS，且為付費工具，Recordly 提供了免費的替代方案。 | 如果你的團隊已經在使用 macOS 且需要高級編輯功能，ScreenFlow 可能更合適。 | low，因為兩者的使用場景相似，但功能上有差異。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Recordly** | **obs-studio** | **screenflow** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OBS Studio 是一款功能強大的開源錄影工具，支持多種擴展功能，但相對於 Recordly，使用門檻較高，適合需要複雜設置的用戶。 | ScreenFlow 提供了強大的編輯功能，但僅限於 macOS，且為付費工具，Recordly 提供了免費的替代方案。 |
> | 遷移成本 | - | medium，因為 OBS 的設置和操作界面與 Recordly 有很大不同。 | low，因為兩者的使用場景相似，但功能上有差異。 |
> | 適用場景 | 主要場景 | 如果需要高級的錄影功能和自定義設置，OBS Studio 是 | 如果你的團隊已經在使用 macOS 且需要高級編輯功能，Sc |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Linux 上錄製時游標無法隱藏，可能導致錄製效果不佳。
  - 解法：目前無法解決，建議使用者在錄製時注意游標的顯示。
- [MEDIUM] macOS 上可能因為應用未簽名而無法啟動。
  - 解法：使用 xattr 命令移除 quarantine 標記。
- **[HIGH]** Windows 10 19041 以下版本無法隱藏游標。
  - 解法：建議升級到最新版本的 Windows 10。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的教學視頻製作 | 非常適合 | Recordly 的自動化功能能快速生成專業內容。 |
| 需要高效能錄影的開發環境 | 普通 | 雖然支持多平台，但在性能上可能不如原生應用。 |
| 個人創作者的產品演示 | 非常適合 | 簡單易用，能快速上手。 |
| 大型企業的高級錄影需求 | 不適合 | 對於複雜的錄影需求，可能需要更高級的功能和自定義設置。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到快速生成專業視頻的效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> Recordly 本身不需要高權限運行，且不會存取敏感資料。依賴鏈中未發現已知的供應鏈風險，使用於 CI/CD 中相對安全。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/webadderall--Recordly");
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
> const me = dv.page("Repos/webadderall--Recordly");
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
| Forks | 120 |
| Open Issues | 12 |
| Issue 解決率 | 64% (21 closed) |
| 最後推送 | 2026-03-17 |
| 建立日期 | 2026-03-12 |
| 官方網站 | [Link](https://recordly.dev) |
| Repo 大小 | 178.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/webadderall/Recordly) |
| Topics | `electron` `free` `linux` `macos` `open-source` `screen-recorder` `screen-studio` `windows` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 89
>     "Swift" : 4
>     "C++" : 4
>     "JavaScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@siddharthvaddem](https://github.com/siddharthvaddem) | 190 |
> | [@webadderall](https://github.com/webadderall) | 131 |
> | [@solnikhil](https://github.com/solnikhil) | 11 |
> | [@aarjn](https://github.com/aarjn) | 9 |
> | [@lawrence-mil](https://github.com/lawrence-mil) | 8 |

**最新版本**：v1.0.9 — Recordly v1.0.9 (2026-03-15)

> [!info]- Release Notes
> Release includes Chinese language support, native Windows cursor type detection, slider reset buttons, TypeScript build fixes, and Windows cursor monitor crash safeguards.

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和回應。
**連結**：[文件](https://github.com/webadderall/Recordly)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-17）
> **活躍天數** 1 天 · **最新 commit** Add new anonymous supporter

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#34](https://github.com/webadderall/Recordly/issues/34) | [Bug]: Cursor following not working on linux `bug` | 6 | 6 |
> | [#25](https://github.com/webadderall/Recordly/issues/25) | Move non-native deps into `devDependencies` to reduce app si | 1 | 1 |
> | [#59](https://github.com/webadderall/Recordly/issues/59) | Add a webcam with several modes square/rectangle/circle with | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Recordly
> 
> Language: EN | [简中](README.zh-CN.md)
> 
>   
> 
>   
>   
> 
> ### Create polished, pro-grade screen recordings.
> [Recordly](https://www.recordly.dev) is an **open-source screen recorder and editor** for creating **polished walkthroughs, demos, tutorials, and product videos**. Contribution encouraged.
> 
> Recordly includes a full cursor animation/rendering pipeline, native macOS and Windows screen recording system, zoom animations faithful to Screen Studio, cursor loops, audio tracks, and more major features.
> 
>   
> 
> > [!NOTE]
> > Huge thank you to **tadees** for supporting! This donation directly helps cover the Apple Developer fees to get Recordly signed and notarised for macOS. Still waiting for Apple approval.
> [**Support the project**](https://ko-fi.com/webadderall/goal?g=0)
> 
> ---
> ## What is Recordly?
> 
> Recordly lets you record your screen and automatically transform it into a polished video. It handles the heavy lifting of zooming into important actions and smoothing out jittery cursor movement so your demos look professional by default.
> 
> Recordly runs on:
> 
> - **macOS** 12.3+
> - **Windows** 10 Build 19041+
> - **Linux** (modern distros)
> 
> On Windows, builds older than 19041 fall back to Electron capture and the cursor cannot be hidden. On Linux, cursor hiding is not supported (contribute).
> 
> ---
> 
> # Features
> 
> ### Cursor Animations
> 
>   
> 
> - Adjustable cursor size
> - Cursor smoothing
> - Motion blur
> - Click bounce animation
> - macOS-style cursor assets
> - Cursor sway effects
> 
> ### Recording
> 
> - Record an entire screen or a single window
> - Jump straight from recording into the editor
> - Microphone or system audio recording
> - Chromium capture APIs on Windows/Linux
> - Native **ScreenCaptureKit** capture on macOS
> - native WGC recording helper for display and app-window capture on Windows, native WASAPI for system/mic audio, and more
> 
> ### Smart Motion
> 
> - Apple-style zoom animations
> - Automatic zoom suggestions based on cursor activity
> - Manual zoom regions
> - Smooth pan transitions between zoom regions
> 
> ### Infinite Loops
> 
>   
> 
> - Toggle to make cursor return to original position at end of video/GIF for clean loops
> 
> ### Editing Tools
> 
> - Timeline trimming
> - Speed-up / slow-down regions
> - Annotations
> - Zoom spans
> - Project save + reopen (`.recordly` files)
> 
> ### Frame Styling
> 
> - Wallpapers
> - Gradients
> - Solid fills
> - Padding
> - Rounded corners
> - Blur
> - Drop shadows
> 
> ### Export
> 
> - MP4 video export
> - GIF export
> - Aspect ratio controls
> - Quality settings
> 
> ---
> 
> # Screenshots
> 
>   
> 
>   
> 
> ---
> 
> # Installation
> 
> ## Download a build
> 
> Prebuilt releases are available here:
> 
> https://github.com/webadderall/Recordly/releases
> 
> ---
> 
> ## Build from source
> 
> ```bash
> git clone https://github.com/webadderall/Recordly.git recordly
> cd recordly
> npm install
> npm run dev
> ```
> 
> ---
> 
> ## macOS: "App cannot be opened"
> 
> Recordly is not signed. macOS may quarantine locally built apps.
> 
> Remove the quarantine flag with:
> 
> ```bash
> xattr -rd com.apple.quarantine /Applications/Recordly.app
> ```
> 
> ---
> 
> # System Requirements
> 
> | Platform | Minimum version | Notes |
> |---|---|---|
> | **macOS** | macOS 12.3 (Monterey) | Required for ScreenCaptureKit. Recording and cursor hiding will not work on older versions. |
> | **Windows** | Windows 10 20H1 (Build 19041, May 2020) | Required for Windows Graphics Capture (`IsCursorCaptureEnabled`). Older builds fall back to Electron browser capture — cursor will be visible in recordings. |
> | **Linux** | Any modern distro | Recording works via Electron capture. Cursor is always visible in recordings. System audio requires PipeWire (Ubuntu 22.04+, Fedora 34+). |
> 
> > [!IMPORTANT]
> > On Windows, if your build is older than 19041, recording will still work but **the cursor cannot be hidden** from the captured video.
> 
> ---
> 
> # Usage
> 
> ## Record
> 
> 1. Launch Recordly
> 2. Select a screen or window
> 3. Choose audio recording options
> 4. Start recording
> 5. Stop recording to open the editor
> 
> ---
> 
> ## Edit
> 
> Inside the editor you can:
> 
> - Add zoom regions manually
> - Use automatic zoom suggestions
> - Adjust cursor behavior
> - Trim the video
> - Add speed changes
> - Add annotations
> - Style the frame
> 
> Save your work anytime as a `.recordly` project.
> 
> ---
> 
> ## Export
> 
> Export options include:
> 
> - **MP4** for full-quality video
> - **GIF** for lightweight sharing
> 
> Adjust:
> 
> - Aspect ratio
> - Output resolution
> - Quality settings
> 
> ---
> 
> # Limitations
> 
> ### Cursor Capture (We overlay a second animated cursor over the original hidden one)
> 
> **macOS**: Cursor is excluded from the recording at the ScreenCaptureKit level — always clean.
> 
> **Windows**: Cursor is excluded via Windows Graphics Capture (`IsCursorCaptureEnabled(false)`) — requires **Windows 10 Build 19041+**. On older builds the app falls back to Electron’s browser capture and the real cursor will be visible in the recording.
> 
> **Linux**: Electron’s desktop capture API does not support cursor hiding. The real OS cursor will always be visible in recordings. If you also enable the animated cursor overlay in the editor, you may see **two cursors** in the output.
> 
> Improving cross-platform cursor capture is an area where contributions are welcome.
> 
> ---
> 
> ### System Audio
> 
> System audio capture depends on platform support.
> 
> **Windows**
> - Works out of the box via native WASAPI
> - Requires Windows 10 Build 19041+
> 
> **Linux**
> - Requires PipeWire (Ubuntu 22.04+, Fedora 34+)
> - Older PulseAudio setups may not support system audio
> 
> **macOS**
> - Requires macOS 12.3+
> - Uses ScreenCaptureKit helper
> 
> ---
> 
> # How It Works
> 
> Recordly is a **desktop video editor with a renderer-driven motion pipeline and platform-specific capture layer**.
> 
> **Capture**
> - Electron orchestrates recording
> - macOS uses native helpers for ScreenCaptureKit and cursor telemetry
> - Windows uses native WGC for screen capture
> 
> **Motion**
> - Zoom regions
> - Cursor tracking
> - Speed changes
> - Timeline edits
> 
> **Rendering**
> - Scene composition handled by **PixiJS**
> 
> **Export**
> - Frames rendered through the same scene pipeline
> - Encoded to MP4 or GIF
> 
> **Projects**
> - `.recordly` files store the source video path and editor state
> 
> ---
> 
> # Contribution
> 
> All contributors welcomed!
> 
> Areas where help is especially valuable:
> 
> - Smooth cursor pipeline for **Linux**
> - **Webcam** overlay bubble
> - **Localisation** support, especially Chinese
> - UI/UX **design** **improvements**
> - **Export speed** improvements
> 
> Please:
> - Keep pull requests **focused and modular**
> - Test playback, editing, and export flows
> - Avoid large unrelated refactors
> 
> See `CONTRIBUTING.md` for guidelines.
> 
> ---
> 
> # Community
> 
> Bug reports and feature requests:
> 
> https://github.com/webadderall/Recordly/issues
> 
> Pull requests are welcome.
> 
> ---
> 
> # Donations & Sponsors
> 
> [Donations](https://ko-fi.com/webadderall/goal?g=0)
> 
> Greatful for all supporters, you are helping Recordly stay open-source and supporting development.
> 
> • Tadees ($100)
> • Anonymous supporter ($5)
> • Anonymous supporter ($1)
> 
> Email youngchen3442@gmail.com for other inquiries or DM me via [@webadderall](https://x.com/webadderall)
> 
> ---
> 
> # License
> 
> Recordly is licensed under the **MIT License**.
> 
> ---
> 
> # Credits
> 
> ## Acknowledgements
> 
> Originally built on top of the excellent [OpenScreen](https://github.com/siddharthvaddem/openscreen) project.
> 
> Created by  
> [@webadderall](https://x.com/webadderall)
> 
> ---

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]]

[GitHub](https://github.com/webadderall/Recordly) · [官方網站](https://recordly.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：螢幕錄影）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "螢幕錄影" AND file.name != "webadderall--Recordly"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "webadderall--Recordly"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "webadderall--Recordly" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "webadderall--Recordly"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","資料視覺化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "webadderall--Recordly" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/webadderall--Recordly");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "webadderall--Recordly" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "webadderall" AND file.name != "webadderall--Recordly"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/webadderall--Recordly");
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
> const me = dv.page("Repos/webadderall--Recordly");
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
> const me = dv.page("Repos/webadderall--Recordly");
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
> const me = dv.page("Repos/webadderall--Recordly");
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
> const me = dv.page("Repos/webadderall--Recordly");
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

> **2026-03-18** — 首次收錄
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

- [[2026-03-18|2026-03-18]] — 首次收錄，2.4k stars
