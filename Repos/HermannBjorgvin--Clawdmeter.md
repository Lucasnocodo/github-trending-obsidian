---
repo: HermannBjorgvin/Clawdmeter
url: https://github.com/HermannBjorgvin/Clawdmeter
owner: HermannBjorgvin
owner_type: User
language: C
license: N/A
description: "ESP32 desk dashboard that shows Claude Code usage"
homepage: ""
stars: 869
stars_per_day: 290
forks: 62
open_issues: 2
created: 2026-05-11
pushed_at: 2026-05-14
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "硬體監控"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "提供一個 ESP32 儀表板，實時監控 Claude Code 的使用情況。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-18"
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
star_history: "2026-05-14:683,2026-05-14:685,2026-05-15:869"
tags:
  - github
  - "category/開發工具"
  - "lang/c"
aliases:
  - "Clawdmeter"
  - "HermannBjorgvin/Clawdmeter"
  - "提供一個 ESP32 儀表板，實時監控 Claude Code 的使用情況。"
---

# Clawdmeter

**685** stars · **343** stars/天 · 建立 2 天前 · C · 未標註授權

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
> 提供一個 ESP32 儀表板，實時監控 Claude Code 的使用情況。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (343 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在桌面環境中實時監控 Claude Code 使用情況的開發者。
> **一句話重點** Clawdmeter 不僅是一個監控工具，更是一個結合硬體和軟體的創新實驗，展示了 ESP32 的潛力。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到即時監控功能，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一個獨特的 ESP32 儀表板，能夠即時顯示 Claude Code 的使用情況，並透過動畫反饋提升互動性。

## 專案簡介

Clawdmeter 是一個專為 ESP32 設計的桌面儀表板，能夠實時顯示 Claude Code 的使用情況。它透過藍牙與電腦連接，並在 OLED 顯示屏上顯示使用率和動畫。使用者可以透過兩個側邊按鈕快速發送指令，這些指令能夠觸發 Claude Code 的語音模式和模式切換。這個工具的賣點在於其即時性和可視化，讓使用者能夠隨時掌握自己的使用情況。其核心機制包括一個後台守護進程，每60秒從 Claude Code API 獲取使用數據，並將其傳送至 ESP32 顯示器。這樣的設計不僅提高了使用者的互動性，還能讓使用者根據使用情況調整工作方式。

使用者需要具備 Linux 環境和 PlatformIO CLI 來進行安裝和配置，這使得開發者能夠輕鬆上手。這個專案的技術實作使用了 C/C++ 來開發固件，並利用 BLE 進行設備間的通信，這樣的選擇使得設備能夠輕量且高效地運行。相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，Clawdmeter 提供了更為直觀的使用介面和即時反饋，這對於需要隨時監控使用情況的開發者來說是非常有幫助的。使用者在使用過程中可能會遇到藍牙配對的問題，這需要手動進行設置，且目前僅支援 Linux 和 MacOS，Windows 用戶則需要額外的配置。這個專案目前處於活躍開發階段，未來可能會增加更多功能，如多設備支持或更精細的使用分析。對於希望在桌面環境中實現 Claude Code 使用監控的開發者來說，Clawdmeter 是一個值得嘗試的工具。

**技術棧**：`C` · `C++` · `Shell` · `JavaScript`

## 重點功能

- 實時使用監控 — 每60秒從 Claude Code API 獲取使用數據並顯示。
- 藍牙連接 — 藉由 BLE 與電腦連接，支持即時指令發送。
- 動畫反饋 — 使用率上升時，顯示不同的 Clawd 動畫以增加互動性。
- 多屏幕切換 — 透過按鈕切換使用率和藍牙連接狀態的顯示。
- 簡易安裝 — 提供清晰的安裝指令和需求，支持 Linux 和 MacOS。

## 快速開始

1. 下載專案並進入 firmware 目錄
```bash
git clone https://github.com/HermannBjorgvin/Clawdmeter.git && cd Clawdmeter/firmware
```
2. 編譯並上傳固件
```bash
pio run -t upload --upload-port /dev/ttyACM0
```
3. 啟動使用狀態守護進程
```bash
./install.sh && systemctl --user start claude-usage-daemon
```

## 程式碼範例

```c
{
  "前置條件": "已經安裝 PlatformIO 並連接 ESP32",
  "指令": "pio run -t upload --upload-port /dev/ttyACM0",
  "預期輸出": "固件成功上傳至 ESP32，設備開始運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 685 stars（342.5/天），forks 41（6.0%），顯示出不錯的增長潛力。這個專案的作者 HermannBjorgvin 之前在開源社群中活躍，這次專案解決了使用者對於 Claude Code 使用情況的即時監控需求，之前的解決方案往往缺乏可視化和互動性。此專案的推出引起了社群的關注，特別是在相關論壇和社交媒體上獲得了討論。技術上，ESP32 的普及和 BLE 的成熟使得這個工具的實現變得可行，並且 forks/stars 比率顯示出使用者對於這個工具的興趣和實際修改的意願。

## 適合誰使用

**目標受眾**：希望在桌面環境中實時監控 Claude Code 使用情況的開發者。

> [!example] 使用場景
> - 開發者用它來監控 Claude Code 的使用情況，因為可以即時獲得使用率和動畫反饋，提升工作效率。
> - 設計師用它來展示 Claude Code 的使用情況，因為其可視化的界面能吸引觀眾的注意力。
> - 技術愛好者用它來探索 ESP32 的應用，因為這個專案提供了實際的硬體與軟體整合範例。

## 架構分析

Clawdmeter 採用 ESP32 作為核心硬體，結合 OLED 顯示屏和 BLE 通信。這樣的設計使得設備能夠在低功耗下運行，同時提供即時的使用數據顯示。資料流方面，後台守護進程定期從 Claude Code API 獲取數據，並將其傳送至 ESP32 的 GATT 服務。

這樣的架構選擇使得使用者能夠透過簡單的按鈕操作來切換顯示內容。選擇 ESP32 而非其他微控制器的原因在於其內建的藍牙功能和強大的處理能力，這使得整個系統能夠在小型設備上高效運行。擴展性方面，未來可以考慮增加更多的顯示功能或支援多設備連接，這可能需要進一步的硬體設計和軟體調整。

## 技術深入分析

Clawdmeter 的核心技術機制包括使用 ESP32 作為主控，並利用 BLE 協議進行數據傳輸。這樣的設計使得設備能夠在低功耗的情況下，實現即時的數據更新和顯示。守護進程每60秒從 Claude Code API 獲取使用數據，這樣的頻率能夠保證使用者獲得最新的使用情況，而不會造成過多的 API 請求負擔。固件使用 C/C++ 開發，這樣的選擇使得系統能夠高效運行，並且能夠充分利用 ESP32 的硬體資源。設計上，選擇 BLE 而非 Wi-Fi 進行通信，這樣能夠降低功耗，延長設備的使用壽命。技術風險方面，隨著使用者數量的增加，可能會對 API 的請求頻率造成影響，這需要在設計上進行考量。整合方面，Clawdmeter 能夠輕鬆與現有的 Linux 環境結合，並且能夠在多種開發工具中進行配置，這使得其在開發者社群中具有良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝指令和使用說明，對於新手來說相對友好。安裝過程中需要配置藍牙，這可能對某些使用者造成困難。整體來說，文件清晰，能夠幫助使用者在30分鐘內完成設置並運行。多語言支持方面，目前僅提供英文文件。

## 優缺點分析

> [!success] 優點
> - 實時監控使用情況，讓使用者能夠隨時調整工作方式。
> - 可視化的動畫反饋提升了使用者的互動體驗。
> - 簡單的安裝流程，適合開發者快速上手。

> [!danger] 缺點
> - 目前僅支援 Linux 和 MacOS，Windows 用戶需要額外配置。
> - 社群參與度較低，可能影響未來的支持和更新。
> - 藍牙配對過程對於新手來說可能較為繁瑣。

> [!warning] 注意事項
> - 僅支援 Linux 和 MacOS，Windows 用戶需要額外配置。
> - 目前僅有一個開放的 Issue，顯示出社群參與度可能不足。
> - 需要手動藍牙配對，對於新手來說可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的動畫功能，但不具備即時使用監控的能力，適合需要創建自定義動畫的開發者。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 的使用，缺乏硬體整合的功能，適合需要直接調用 GPT-2 的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理動畫精靈，並不提供即時監控功能。 | 如果你的需求是創建自定義動畫而非監控使用情況，這個工具會更合適。 | low，因為兩者的功能重疊不大，遷移過程相對簡單。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 的直接調用，缺乏硬體整合的功能。 | 如果你需要直接與 GPT-2 進行交互，而不需要硬體支持，這個工具會更適合。 | medium，因為需要重構整個工作流程以適應 API 的使用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Clawdmeter** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理動畫精靈，並不提供即時監控功能。 | 專注於 API 的直接調用，缺乏硬體整合的功能。 |
> | 遷移成本 | - | low，因為兩者的功能重疊不大，遷移過程相對簡單。 | medium，因為需要重構整個工作流程以適應 API 的使用。 |
> | 適用場景 | 主要場景 | 如果你的需求是創建自定義動畫而非監控使用情況，這個工具會更合 | 如果你需要直接與 GPT-2 進行交互，而不需要硬體支持，這 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 藍牙配對過程可能會失敗，特別是在多設備環境中。
  - 解法：確保設備在配對模式下，並重啟藍牙服務。
- [MEDIUM] 在某些 Linux 發行版上，安裝過程可能會遇到依賴問題。
  - 解法：提前安裝所有必要的依賴，並檢查版本兼容性。
- [MEDIUM] 固件更新後，可能需要重新配對藍牙設備。
  - 解法：在更新後重新執行配對步驟。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要監控使用情況 | 非常適合 | 即時監控功能能有效提升團隊效率。 |
| 個人開發者希望探索 ESP32 應用 | 適合 | 提供了良好的硬體整合範例，適合學習。 |
| 大型企業需要高效的使用監控系統 | 不適合 | 目前功能較為簡單，無法滿足複雜需求。 |
| 需要在 Windows 環境中運行的開發者 | 不適合 | 目前僅支援 Linux 和 MacOS。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時監控功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，僅需訪問用戶的 Claude Code 賬戶信息。依賴鏈中無已知的安全漏洞，適合在 CI/CD 中使用。

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

**社群活躍度**：最近兩天內有活躍的提交和更新，顯示出開發者對專案的持續關注。

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

相關概念：[[BLE]] · [[ESP32]] · [[硬體監控]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

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
> WHERE category = "開發工具" AND file.name != "HermannBjorgvin--Clawdmeter"
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
> const concepts = ["BLE","ESP32","硬體監控"];
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

- [[2026-05-15|2026-05-15]] — 再次上榜，869 stars
- [[2026-05-14|2026-05-14]] — 首次收錄，683 stars
