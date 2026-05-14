---
repo: HermannBjorgvin/Clawdmeter
url: https://github.com/HermannBjorgvin/Clawdmeter
owner: HermannBjorgvin
owner_type: User
language: C
license: N/A
description: "ESP32 desk dashboard that shows Claude Code usage"
homepage: ""
stars: 683
stars_per_day: 342
forks: 41
open_issues: 1
created: 2026-05-11
pushed_at: 2026-05-12
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "基礎設施"
subcategory: "硬體監控"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "提供一個 ESP32 控制面板來監控 Claude Code 的使用情況。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 11365
readme_length: 9501
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:683"
tags:
  - github
  - "category/基礎設施"
  - "lang/c"
aliases:
  - "Clawdmeter"
  - "HermannBjorgvin/Clawdmeter"
  - "提供一個 ESP32 控制面板來監控 Claude Code 的使用情況。"
---

# Clawdmeter

**683** stars · **342** stars/天 · 建立 2 天前 · C · 未標註授權

```dataviewjs
const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
> 提供一個 ESP32 控制面板來監控 Claude Code 的使用情況。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (342 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要監控 Claude Code 使用情況的開發者和硬體愛好者。
> **一句話重點** 這個專案不僅提供了實用的功能，還通過趣味動畫提升了用戶的互動體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "硬體監控" && p.file.name !== "HermannBjorgvin--Clawdmeter" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 硬體監控 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到即時監控的效果，值得投入。

> [!abstract] 核心創新
> 結合了實時監控和趣味動畫的 ESP32 儀表板，專為 Claude Code 使用者設計。

## 專案簡介

Clawdmeter 是一個基於 ESP32 的桌面儀表板，專為監控 Claude Code 使用情況而設計。用戶可以通過藍牙將其與筆記本電腦配對，並在 2.16 吋的 AMOLED 顯示屏上查看使用率。該設備的中間按鈕可在使用率和藍牙狀態之間切換，並且會根據使用率的變化播放不同的 Clawd 動畫。這樣的設計不僅提供了實用的使用數據，還增添了趣味性。

用戶需要在 Linux 系統上安裝 PlatformIO 並使用 curl 和 bluetoothctl 進行藍牙配對，這樣才能順利運行。該專案的核心功能是每 60 秒通過一個守護進程輪詢 Claude 的使用情況，並將數據發送到 ESP32，這樣用戶就能即時獲取使用率。這個過程涉及到 API 調用和 JSON 數據傳輸，並且使用了 BLE HID 協議來發送按鍵事件。Clawdmeter 的設計選擇了 ESP32-S3 平台，這使得它在性能和功能上都具備了良好的平衡，並且能夠支持豐富的顯示和互動功能。

**技術棧**：`ESP32-S3` · `PlatformIO` · `BlueZ`

## 重點功能

- 即時使用率顯示 — 每 60 秒更新一次 Claude Code 使用數據。
- 藍牙配對功能 — 使用 bluetoothctl 進行簡單的藍牙設備配對。
- 多種動畫效果 — 根據使用率變化自動切換 Clawd 動畫，增添趣味性。
- 支持 Linux 和 MacOS — 雖然主要在 Linux 上測試，但也支持 MacOS，需用戶貢獻。
- 簡單的固件更新 — 使用 PlatformIO 進行固件的編譯和上傳。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/HermannBjorgvin/Clawdmeter.git && cd Clawdmeter
```
2. 編譯並上傳固件
```bash
cd firmware && pio run -t upload --upload-port /dev/ttyACM0
```
3. 啟動使用情況守護進程
```bash
./install.sh && systemctl --user start claude-usage-daemon
```

## 程式碼範例

```c
{
  "前置條件": "必須安裝 PlatformIO 和相關依賴",
  "指令": "bluetoothctl scan le",
  "預期輸出": "顯示可用的藍牙設備列表，包括 'Claude Controller'"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 683 stars（341.5/天），forks 41（6.0%），顯示出不錯的增長潛力。作者 HermannBjorgvin 之前有其他開源專案，這次專案解決了用戶在使用 Claude Code 時缺乏實時監控工具的痛點。這個專案的出現正好填補了這一需求，並且其趣味性設計吸引了不少開發者的注意。社群的反應也顯示出對於這類硬體項目的興趣，尤其是結合了動畫和實用功能的設計。forks/stars 比率在中等範圍，意味著不少人有實際修改或使用的意圖。

## 適合誰使用

**目標受眾**：需要監控 Claude Code 使用情況的開發者和硬體愛好者。

> [!example] 使用場景
> - 開發者用它來監控 Claude Code 的使用情況，因為可以即時獲取使用數據並進行調整。
> - 硬體愛好者用它來探索 ESP32 的功能，因為這個專案展示了如何將藍牙和顯示功能結合。
> - 設計師用它來展示創意作品，因為 Clawd 動畫增添了趣味性，讓展示更具吸引力。

## 架構分析

Clawdmeter 的架構基於 ESP32-S3 平台，選擇這個平台是因為其強大的藍牙和顯示能力。數據流從 Claude Code 的 API 調用開始，守護進程每 60 秒獲取使用數據，然後通過 BLE 將數據發送到 ESP32。這個設計使得用戶能夠即時查看使用情況，而不需要手動查詢。

選擇 BLE HID 協議來發送按鍵事件，這樣可以直接在任何有焦點的應用中觸發功能，增加了靈活性。這樣的設計雖然增加了開發複雜度，但卻提供了更好的用戶體驗。擴展性方面，這個專案的架構可以支持未來添加更多的功能或顯示選項。

## 技術深入分析

Clawdmeter 的核心技術機制是基於 ESP32-S3 的硬體平台，利用其藍牙和顯示能力來實現即時監控。守護進程通過 API 調用獲取 Claude Code 的使用數據，然後將其轉換為 JSON 格式，通過 BLE 傳輸到 ESP32。這個過程需要用戶提供 OAuth token，這樣可以安全地訪問 API。效能方面，該設備能夠在 60 秒內更新使用數據，對於大多數用戶來說是足夠的。

設計上選擇了 PlatformIO 來進行固件的編譯和上傳，這樣可以簡化開發流程。這個選擇雖然增加了一些依賴，但卻提供了更好的開發體驗。未來可能需要考慮擴展功能，例如支持更多的顯示選項或用戶自定義的動畫。整體來看，Clawdmeter 在設計上考慮到了用戶的互動需求，並且提供了一個有趣的使用體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，但需要用戶具備一定的技術背景。文件中沒有提供中文或多語言支持，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 即時監控使用情況，幫助用戶隨時掌握 Claude Code 的使用狀態。
> - 趣味性設計，Clawd 動畫增添了使用過程中的趣味。
> - 簡單的固件更新流程，降低了使用門檻。

> [!danger] 缺點
> - 目前僅支援 Linux 和 MacOS，Windows 用戶需自行修改。
> - 對於新手來說，安裝和配置過程可能有些複雜。
> - 社群互動較少，可能影響未來的支持和更新。

> [!warning] 注意事項
> - 僅支援 Linux 和 MacOS，Windows 用戶需自行修改。
> - 需要安裝 PlatformIO 和其他依賴，對新手可能有一定門檻。
> - 目前僅有一個開放的 Issue，顯示社群互動較少。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理 AI 代理的動畫，而 Clawdmeter 是用於實時監控使用情況的儀表板。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 提供了更全面的硬體管理功能，而 Clawdmeter 專注於 Claude Code 的使用監控。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於提供一個可視化的 AI 代理管理工具，而 Clawdmeter 專注於實時監控使用情況。 | 如果你的需求是管理多個 AI 代理的使用情況，而不僅僅是 Claude Code 的話，這個工具會更合適。 | medium，因為需要重新設計用戶界面和數據流。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 提供了更全面的硬體管理功能，而 Clawdmeter 專注於 Claude Code 的使用監控。 | 如果你需要一個更通用的硬體監控解決方案，這個工具會更適合。 | high，因為需要重構整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Clawdmeter** | **boneyard** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於提供一個可視化的 AI 代理管理工具，而 Clawdmeter 專注於實時監控使用情況。 | 提供了更全面的硬體管理功能，而 Clawdmeter 專注於 Claude Code 的使用監控。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶界面和數據流。 | high，因為需要重構整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的需求是管理多個 AI 代理的使用情況，而不僅僅是 C | 如果你需要一個更通用的硬體監控解決方案，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或開發者探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 藍牙配對過程中可能會出現連接問題，特別是在 Linux 系統上。
  - 解法：確保藍牙服務正常運行，並重啟設備。
- [MEDIUM] 在某些情況下，守護進程可能無法正確獲取使用數據。
  - 解法：檢查 OAuth token 是否正確，並確保網路連接正常。
- [MEDIUM] Clawd 動畫在某些設備上可能無法正常顯示。
  - 解法：檢查顯示設置，並確保固件已正確上傳。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發者需要實時監控 Claude Code 使用情況 | 非常適合 | 提供即時的使用數據和趣味性設計，提升開發效率。 |
| 大型企業的 IT 團隊需要一個全面的硬體監控解決方案 | 不適合 | 專案目前功能較為單一，無法滿足大規模需求。 |
| 硬體愛好者想要探索 ESP32 的功能 | 適合 | 專案展示了 ESP32 的多種應用，適合學習和實驗。 |
| 需要在 Windows 環境下使用的開發者 | 普通 | 目前僅支援 Linux 和 MacOS，Windows 用戶需自行修改。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時監控的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具不需要高權限，但需要訪問 Claude Code 的 OAuth token，這可能涉及敏感資料的存取。依賴鏈的信任程度較高，因為主要依賴於知名的開源庫，整體安全性較好。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
| Forks | 41 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-11 |
| Repo 大小 | 11.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HermannBjorgvin/Clawdmeter) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 96
>     "C++" : 3
>     "Shell" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HermannBjorgvin](https://github.com/HermannBjorgvin) | 38 |

## 社群與生態

**社群活躍度**：最近 2 天有活躍的更新和提交。
**連結**：[文件](https://github.com/HermannBjorgvin/Clawdmeter)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-12）
> **活躍天數** 2 天 · **最新 commit** Update README to reflect changes in demo and animations

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/HermannBjorgvin/Clawdmeter/issues/3) | hvar fær maður esp32 device??? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Clawdmeter
> 
> A small ESP32 dashboard I made for my desk to keep an eye on Claude Code usage.
> 
> It runs on a [Waveshare ESP32-S3-Touch-AMOLED-2.16](https://docs.waveshare.com/ESP32-S3-Touch-AMOLED-2.16) and pairs with my laptop over Bluetooth, and the splash screen plays pixel-art Clawd animations that get
> busier when your usage rate climbs. The two side buttons send Space and
> Shift+Tab over BLE HID for Claude Code's voice mode and mode-toggle shortcuts.
> 
> |              Usage meter              |              Clawd animation screen              |
> | :-----------------------------------: | :----------------------------------------------: |
> |  |  |
> 
> The Clawd animations come from [claudepix](https://claudepix.vercel.app), [@amaanbuilds](https://x.com/amaanbuilds)'s library of pixel-art Clawd sprites, check it out, it's lovely.
> 
> ## Screens
> 
> The device boots into the splash and stays there until you press the middle (PWR) button, which cycles between Usage and Bluetooth. Tap the screen anywhere (except the Reset zone on the Bluetooth screen) to flip back to the splash; tap again to dismiss it.
> 
> |              Splash               |              Usage              |                Bluetooth                |
> | :-------------------------------: | :-----------------------------: | :-------------------------------------: |
> |  |  |  |
> |   Splash; touch-toggle anytime    | Session and weekly utilization  |    Connection status and bond reset     |
> 
> While the splash is up, the middle button cycles animations instead of screens. The firmware also auto-rotates every 20 s within the current usage-rate group, so a long stretch on the splash isn't just one Clawd on loop.
> 
> ## Hardware
> 
> - [Waveshare ESP32-S3-Touch-AMOLED-2.16](https://docs.waveshare.com/ESP32-S3-Touch-AMOLED-2.16) — ESP32-S3R8, 2.16" 480×480 AMOLED (CO5300 QSPI), CST9220 cap touch, AXP2101 PMU + Li-Po battery, QMI8658 IMU
> - USB-C cable for flashing firmware and charging
> - 3.7V Li-Po battery (MX1.25 2-pin connector, optional)
> 
> ## Prerequisites
> 
> - Linux (tested on Ubuntu)
> - [PlatformIO CLI](https://docs.platformio.org/en/latest/core/installation/index.html)
> - `curl`, `bluetoothctl`, `busctl` (BlueZ Bluetooth stack)
> - Claude Code with an active subscription
> 
> ## MacOS support
> 
> MacOS is fully supported, that is as soon as you prompt it and create a pull request for it!
> 
> I run Linux myself so it's harder for me to test this but anyone who wants MacOS support is welcome to contribute.
> 
> ## Flash the firmware
> 
> ```bash
> cd firmware
> pio run -t upload --upload-port /dev/ttyACM0
> ```
> 
> ## Bluetooth pairing
> 
> After flashing, the device advertises as "Claude Controller". Pair it once:
> 
> ```bash
> # Scan for the device
> bluetoothctl scan le
> 
> # When "Claude Controller" appears, pair and trust it
> bluetoothctl pair F4:12:FA:C0:8F:E5    # use your device's MAC
> bluetoothctl trust F4:12:FA:C0:8F:E5
> ```
> 
> The MAC address is shown on the Bluetooth screen — press the middle (PWR) button to cycle to it.
> 
> ## Install the daemon
> 
> The daemon polls your Claude usage every 60 seconds and sends it to the display over BLE.
> 
> ```bash
> ./install.sh
> systemctl --user start claude-usage-daemon
> ```
> 
> Check status: `systemctl --user status claude-usage-daemon`
> 
> View logs: `journalctl --user -u claude-usage-daemon -f`
> 
> ## How it works
> 
> 1. The daemon reads your Claude Code OAuth token from `~/.claude/.credentials.json`.
> 2. It makes a minimal API call to `api.anthropic.com/v1/messages` — one token of Haiku, basically free.
> 3. The usage numbers come straight out of the response headers (`anthropic-ratelimit-unified-5h-utilization` and friends).
> 4. The daemon connects to the ESP32 over BLE and writes a JSON payload to the GATT RX characteristic.
> 5. The firmware parses it and updates the LVGL dashboard.
> 6. The firmware also tracks the rate of change of session % over a 5-minute window and picks splash animations from the matching mood group.
> 7. The two side buttons are independent of all of this — they send Space and Shift+Tab as BLE HID keyboard input to the paired host directly.
> 
> ## Physical buttons
> 
> The board has three side buttons. Left and right do the same thing on every screen; the middle button is screen-aware.
> 
> | Button           | GPIO         | Function                                                       |
> | ---------------- | ------------ | -------------------------------------------------------------- |
> | **Left**         | GPIO 0       | Hold to send Space (Claude Code voice-mode push-to-talk)       |
> | **Middle** (PWR) | AXP2101 PKEY | Cycle screens (Usage ↔ Bluetooth); on splash, cycle animations |
> | **Right**        | GPIO 18      | Press to send Shift+Tab (Claude Code mode toggle)              |
> 
> Space and Shift+Tab go out as standard BLE HID keyboard reports, so they trigger in whatever window has focus on the paired host — not just Claude Code.
> 
> ## BLE protocol
> 
> The device advertises a custom GATT service alongside the standard HID keyboard service:
> 
> |                            | UUID                                   |
> | -------------------------- | -------------------------------------- |
> | **Data Service**           | `4c41555a-4465-7669-6365-000000000001` |
> | RX Characteristic (write)  | `4c41555a-4465-7669-6365-000000000002` |
> | TX Characteristic (notify) | `4c41555a-4465-7669-6365-000000000003` |
> | **HID Service**            | `00001812-0000-1000-8000-00805f9b34fb` |
> 
> JSON payload format (written to RX):
> 
> ```json
> { "s": 45, "sr": 120, "w": 28, "wr": 7200, "st": "allowed", "ok": true }
> ```
> 
> Fields: `s` = session %, `sr` = session reset (minutes), `w` = weekly %, `wr` = weekly reset (minutes), `st` = status, `ok` = success flag.
> 
> ## Recompiling fonts
> 
> The `firmware/src/font_*.c` files are pre-compiled LVGL bitmap fonts. Sizes
> are roughly 1.9× larger than the Panlee 165 PPI panel this project started on,
> to match the 314 PPI of the 2.16" AMOLED.
> 
> ```bash
> npm install -g lv_font_conv
> ```
> 
> Generate each one (one at a time — `lv_font_conv` doesn't like loop-driven invocations) with `--no-compress` (required for LVGL 9):
> 
> ```bash
> # Tiempos Text (titles, 56px)
> lv_font_conv --font assets/TiemposText-400-Regular.otf -r 0x20-0x7E \
>   --size 56 --format lvgl --bpp 4 --no-compress \
>   -o firmware/src/font_tiempos_56.c --lv-include "lvgl.h"
> 
> # Styrene B (large numbers 48, panel labels 28, small text 24, minimal 20)
> for size in 48 28 24 20; do
>   lv_font_conv --font assets/StyreneB-Regular.otf -r 0x20-0x7E \
>     --size $size --format lvgl --bpp 4 --no-compress \
>     -o firmware/src/font_styrene_${size}.c --lv-include "lvgl.h"
> done
> 
> # DejaVu Sans Mono (32px, with spinner Unicode chars)
> lv_font_conv --font assets/DejaVuSansMono.ttf \
>   -r 0x20-0x7E,0xB7,0x2026,0x2722,0x2733,0x2736,0x273B,0x273D \
>   --size 32 --format lvgl --bpp 4 --no-compress \
>   -o firmware/src/font_mono_32.c --lv-include "lvgl.h"
> ```
> 
> **Important:** `lv_font_conv` v1.5.3 outputs LVGL 8 format. Each generated file must be patched for LVGL 9 compatibility:
> 
> 1. Remove `#if LVGL_VERSION_MAJOR >= 8` guards around `font_dsc` and the font struct
> 2. Remove the `.cache` field from `font_dsc`
> 3. Add `.release_glyph = NULL`, `.kerning = 0`, `.static_bitmap = 0` to the font struct
> 4. Add `.fallback = NULL`, `.user_data = NULL` to the font struct
> 
> Without these patches, fonts compile but render as invisible.
> 
> ## Converting Lucide icons
> 
> The UI uses a small set of [Lucide](https://lucide.dev) icons (bluetooth + battery states) converted to RGB565 / RGB565A8 C arrays for LVGL.
> 
> ```bash
> node tools/png_to_lvgl.js assets/icon_bluetooth_48.png icon_bluetooth_data ICON_BLUETOOTH_WIDTH ICON_BLUETOOTH_HEIGHT
> ```
> 
> Default tint is white (`0xFFFFFF`); Lucide PNGs ship as black-on-transparent and would render invisible against the dark UI without it. Pass `--no-tint` for pre-coloured artwork like the logo. Battery icons use RGB565A8 (alpha plane) so they blend cleanly over the splash; the rest are baked RGB565 over the panel colour. Paste the converter output into `firmware/src/icons.h`.
> 
> ## Splash animati

## 延伸閱讀

相關概念：[[BLE HID]] · [[物聯網]] · [[實時數據監控]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]]

[GitHub](https://github.com/HermannBjorgvin/Clawdmeter)

## 相關收錄

> [!note]- 直接競品（同子分類：硬體監控）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "硬體監控" AND file.name != "HermannBjorgvin--Clawdmeter"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "HermannBjorgvin--Clawdmeter"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "HermannBjorgvin--Clawdmeter" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "HermannBjorgvin--Clawdmeter"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["BLE HID","物聯網","實時數據監控"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HermannBjorgvin--Clawdmeter" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HermannBjorgvin--Clawdmeter" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HermannBjorgvin" AND file.name != "HermannBjorgvin--Clawdmeter"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
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

> **2026-05-14** — 首次收錄
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

- [[2026-05-14|2026-05-14]] — 首次收錄，683 stars
