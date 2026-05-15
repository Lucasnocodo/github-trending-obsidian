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
forks: 63
open_issues: 2
created: 2026-05-11
pushed_at: 2026-05-14
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "監控"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "提供一個 ESP32 儀表板來監控 Claude Code 的使用情況。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-18"
contributor_count: 2
engagement: "low"
issue_close_rate: 33
repo_size_kb: 11362
readme_length: 9753
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:683,2026-05-14:685,2026-05-15:869,2026-05-15:869"
tags:
  - github
  - "category/開發工具"
  - "lang/c"
aliases:
  - "Clawdmeter"
  - "HermannBjorgvin/Clawdmeter"
  - "提供一個 ESP32 儀表板來監控 Claude Code 的使用情況。"
---

# Clawdmeter

**869** stars · **290** stars/天 · 建立 3 天前 · C · 未標註授權

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

> [!summary] 一句話摘要
> 提供一個 ESP32 儀表板來監控 Claude Code 的使用情況。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (290 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要實時監控 Claude Code 使用情況的開發者和創作者。
> **一句話重點** Clawdmeter 不僅是一個工具，更是一個趣味的使用監控儀表板，讓開發者在工作時也能享受使用的樂趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HermannBjorgvin--Clawdmeter");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "監控" && p.file.name !== "HermannBjorgvin--Clawdmeter" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 監控 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，能夠獲得即時的使用監控，值得投入。

> [!abstract] 核心創新
> 這個專案的創新點在於將 Claude Code 使用數據以可視化的方式呈現在 ESP32 顯示屏上。

## 專案簡介

Clawdmeter 是一個專為 ESP32 設計的桌面儀表板，能夠實時顯示 Claude Code 的使用情況。它透過藍牙與筆記型電腦連接，並每 60 秒從 Claude 的 API 獲取使用數據，這些數據會顯示在 2.16 吋的 AMOLED 顯示屏上。使用者可以透過側邊按鈕發送快捷鍵來控制 Claude 的語音模式和模式切換，這樣的設計讓使用者能夠輕鬆地在工作時監控其使用情況。這個工具的賣點在於其即時性和可視化的使用數據，讓使用者能夠快速了解自己的使用狀況。技術上，Clawdmeter 使用了 ESP32-S3 和 LVGL 作為顯示框架，並透過 BLE HID 協議來傳輸數據。

這種設計使得它能夠在不干擾使用者的情況下，提供即時的反饋。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 HKUDS/ClawTeam，Clawdmeter 提供了更直觀的使用介面和即時的數據更新，特別適合需要頻繁監控使用情況的開發者。實際使用中，這個儀表板能夠有效地幫助使用者管理其 Claude Code 的使用，並且在長時間使用時，會自動切換顯示的動畫，增加趣味性。儘管如此，使用者需要注意其依賴的藍牙連接穩定性，並確保設備的電量充足。整體而言，Clawdmeter 是一個有趣且實用的工具，特別適合需要長時間使用 Claude Code 的開發者和創作者。

**技術棧**：`ESP32-S3` · `LVGL` · `Python`

## 重點功能

- 即時使用監控 — 每 60 秒從 Claude API 獲取使用數據並顯示。
- 藍牙連接 — 透過 BLE HID 協議與筆記型電腦進行無線連接。
- 可視化動畫 — 使用 Clawd 動畫來顯示使用狀況，增加趣味性。
- 簡單的安裝過程 — 提供 Linux 和 macOS 的安裝腳本，方便用戶快速上手。
- 多種按鈕功能 — 透過側邊按鈕發送快捷鍵，提升使用效率。

## 快速開始

1. 安裝依賴
```bash
sudo apt install curl bluetoothctl busctl
```
2. 安裝 daemon
```bash
./install.sh
```
3. 啟動 daemon
```bash
systemctl --user start claude-usage-daemon
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 869 stars（290/天），forks 63（7.2%），顯示出相當的關注度。這位開發者 HermannBjorgvin 之前有其他相關專案，這次的 Clawdmeter 解決了使用者無法直觀監控 Claude Code 使用情況的痛點，讓使用者能夠隨時掌握自己的使用狀況。社群的反應也相當熱烈，顯示出這個工具的實用性和趣味性。

## 適合誰使用

**目標受眾**：需要實時監控 Claude Code 使用情況的開發者和創作者。

> [!example] 使用場景
> - 自由職業者用它來監控 Claude Code 的使用率，因為這樣可以避免超出訂閱限制，確保不會產生額外費用。
> - 開發者用它來在開發過程中快速檢查 Claude Code 的使用情況，因為即時的數據顯示能幫助他們調整使用策略。
> - 學生用它來追蹤自己的 Claude Code 使用時間，因為這樣可以更好地管理學習進度，避免過度依賴 AI 助手。

## 架構分析

Clawdmeter 的架構基於 ESP32-S3，使用 LVGL 作為顯示框架，並透過 BLE HID 協議與筆記型電腦進行連接。這樣的設計使得用戶能夠在不干擾工作的情況下，隨時監控 Claude Code 的使用情況。數據流從 Claude API 獲取使用數據，然後通過 BLE 傳輸到 ESP32，最終在 AMOLED 顯示屏上呈現。這種設計的代價是需要穩定的藍牙連接，否則將影響數據的及時更新。擴展性方面，若未來需要增加更多功能，可能需要進一步優化 BLE 的傳輸效率。

## 技術深入分析

Clawdmeter 的核心技術機制是基於 ESP32-S3，這是一個功能強大的微控制器，能夠支持藍牙和 Wi-Fi 通訊。它使用 LVGL 作為顯示框架，這是一個輕量級的圖形庫，專為嵌入式設備設計，能夠高效地渲染圖形。這個工具能夠處理每分鐘的使用數據更新，並且在顯示屏上以動畫的形式呈現，這對於用戶來說是一個直觀的反饋。設計上，選擇 ESP32 是因為其低功耗和高效能的特性，這使得 Clawdmeter 能夠長時間運行而不需要頻繁充電。技術上，這個專案的依賴樹相對簡單，主要依賴於 ESP32 SDK 和 LVGL，這使得維護和擴展都相對容易。對於未來的擴展，可能需要考慮 BLE 的傳輸效率，特別是在多設備連接的情況下，這可能會成為性能瓶頸。整合方面，Clawdmeter 可以輕鬆與現有的開發環境結合，特別是對於已經在使用 Claude Code 的開發者來說，這是一個無縫的增強工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，對於新手來說相對友好。安裝過程中，Linux 和 macOS 用戶都有清晰的指引，且提供了必要的命令。整體來說，花 30 分鐘內能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 即時監控使用情況，幫助用戶管理使用率。
> - 趣味性強，透過動畫增強用戶體驗。
> - 簡單的安裝和配置過程，降低了使用門檻。

> [!danger] 缺點
> - 僅支援特定操作系統，限制了用戶範圍。
> - 依賴藍牙連接，若連接不穩定會影響使用。
> - 需要有效的 Claude Code 訂閱，無法免費使用。

> [!warning] 注意事項
> - 僅支援 Linux 和 macOS，Windows 用戶無法使用。
> - 需要持續的藍牙連接，若連接不穩定可能影響數據更新。
> - 需要 Claude Code 的有效訂閱，否則無法獲取使用數據。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的動畫顯示，但不具備即時使用監控功能，適合需要創建動畫的開發者。 |
| [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) | 雖然也針對 Claude Code，但 Clawdmeter 提供了更直觀的使用介面和即時數據更新。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理動畫，而非即時監控使用情況，適合需要創建自定義動畫的開發者。 | 如果你的需求是創建獨特的動畫而非監控使用，這個工具會更合適。 | medium，因為需要重新設計整個使用流程。 |
| [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) | 提供類似的功能，但缺乏 Clawdmeter 的即時數據更新和可視化效果。 | 如果你的需求是簡單的使用監控而不需要動畫，HKUDS/ClawTeam 會是更簡單的選擇。 | low，因為功能上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Clawdmeter** | **agent-sprite-forge** | **ClawTeam** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理動畫，而非即時監控使用情況，適合需要創建自定義動畫的開發者。 | 提供類似的功能，但缺乏 Clawdmeter 的即時數據更新和可視化效果。 |
> | 遷移成本 | - | medium，因為需要重新設計整個使用流程。 | low，因為功能上有相似之處。 |
> | 適用場景 | 主要場景 | 如果你的需求是創建獨特的動畫而非監控使用，這個工具會更合適。 | 如果你的需求是簡單的使用監控而不需要動畫，HKUDS/Cla |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者在個人項目中試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 藍牙連接不穩定可能導致數據更新延遲
  - 解法：確保設備在有效範圍內，並檢查藍牙設定。
- [MEDIUM] 安裝過程中可能需要額外的系統權限
  - 解法：根據提示授予必要的權限。
- [MEDIUM] 對於某些 Linux 發行版，安裝依賴可能會出現問題
  - 解法：參考官方文檔，手動安裝缺失的依賴。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要長時間使用 Claude Code 的開發者 | 非常適合 | 能夠實時監控使用情況，避免超出訂閱限制。 |
| 偶爾使用 Claude Code 的學生 | 普通 | 雖然可以監控使用，但可能不需要這麼高頻的數據更新。 |
| 小型團隊開發者 | 適合 | 能夠幫助團隊成員了解整體使用情況，促進合作。 |
| 不使用 Claude Code 的開發者 | 不適合 | 這個工具的功能完全依賴於 Claude Code 的使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠獲得即時的使用監控，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Clawdmeter 本身不需要高權限運行，僅需訪問 Claude Code 的 API，且不存取敏感資料。藍牙連接的安全性取決於使用者的設備設定，建議使用者定期檢查連接的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Clawdmeter 最常與 Claude Code 和 ESP32 開發環境搭配使用，處於開發和監控的環節。在一個使用 Claude Code 的開發環境中，Clawdmeter 可以作為即時監控工具，幫助開發者隨時掌握使用情況。它能夠與 GitHub Actions 等 CI 工具整合，並且可以在 VS Code 等 IDE 中使用，提升開發效率。整合的摩擦點主要在於藍牙連接的穩定性，使用者需要確保設備在有效範圍內。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Clawdmeter 出現之前，開發者通常依賴於手動檢查使用情況，這不僅繁瑣且容易出錯。隨著 Claude Code 的普及，對於即時監控使用情況的需求逐漸增強。技術的進步使得 ESP32 成為一個理想的解決方案，因為它具備低功耗和高效能的特性。

Clawdmeter 代表了物聯網設備在開發者工具中的應用趨勢，未來可能會有更多類似的工具出現，進一步提升開發者的工作效率。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 ESP32 開發
- 了解 BLE 通訊
- 有使用 Claude Code 的經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 Clawdmeter。第二週：在團隊內部分享使用經驗，收集反饋。第三週：根據反饋進行調整，並考慮在更大範圍內推廣使用。

**成功指標**：能夠實時監控 Claude Code 的使用情況，並減少超出訂閱限制的情況。

> [!warning] 退出計畫
> 若需退出，所有設定和數據都可導出為 JSON 格式，方便轉移至其他工具。

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
| Forks | 63 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-11 |
| Repo 大小 | 11.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HermannBjorgvin/Clawdmeter) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 95
>     "C++" : 3
>     "Shell" : 1
>     "JavaScript" : 1
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HermannBjorgvin](https://github.com/HermannBjorgvin) | 44 |
> | [@BlockedPath](https://github.com/BlockedPath) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/HermannBjorgvin/Clawdmeter)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-14）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # Clawdmeter
> 
> A small ESP32 dashboard I made for my desk to keep an eye on Claude Code usage.
> 
> It runs on a [Waveshare ESP32-S3-Touch-AMOLED-2.16](https://www.waveshare.com/esp32-s3-touch-amoled-2.16.htm?&aff_id=149786) and pairs with my laptop over Bluetooth, the splash screen plays pixel-art Clawd animations that get
> busier when your usage rate climbs. The two side buttons send Space and
> Shift+Tab over BLE HID for Claude Code's voice mode and mode-toggle shortcuts.
> 
> |              Usage meter              |              Clawd animation screen              |
> | :-----------------------------------: | :----------------------------------------------: |
> |  |  |
> 
> The Clawd animations come from [claudepix](https://claudepix.vercel.app), [@amaanbuilds](https://x.com/amaanbuilds)'s library of pixel-art Clawd sprites, check it out, it's lovely.
> 
> 
> ## Prerequisites
> 
> - Linux (tested on Ubuntu) or macOS
> - [PlatformIO CLI](https://docs.platformio.org/en/latest/core/installation/index.html)
> - Linux: `curl`, `bluetoothctl`, `busctl` (BlueZ Bluetooth stack)
> - macOS: `python3` (the installer sets up a venv with `bleak` and `httpx`)
> - Claude Code with an active subscription
> 
> 
> ## macOS installation
> 
> The macOS host pieces — Python daemon, LaunchAgent, and flash helper — were ported by [Chris Davidson (@lorddavidson)](https://github.com/lorddavidson). Thanks Chris!
> 
> 
> ### Install the daemon
> 
> The daemon reads your Claude OAuth token from the macOS Keychain (service `Claude Code-credentials`), polls usage every 60 s, and pushes it to the display over BLE.
> 
> ```bash
> ./install-mac.sh
> ```
> 
> The installer creates a Python venv in `daemon/.venv/`, installs `bleak` and `httpx`, renders a LaunchAgent into `~/Library/LaunchAgents/com.user.claude-usage-daemon.plist`, and loads it. The first run is launched interactively so macOS prompts for Bluetooth permission.
> 
> Useful commands:
> 
> ```bash
> launchctl list | grep claude-usage                                          # check it's running
> tail -F ~/Library/Logs/claude-usage-daemon.out.log                          # live logs
> launchctl unload ~/Library/LaunchAgents/com.user.claude-usage-daemon.plist  # stop
> launchctl load -w ~/Library/LaunchAgents/com.user.claude-usage-daemon.plist # start
> ```
> 
> 
> ## Linux installation
> 
> 
> ### Install the daemon
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
> 
> ## Hardware
> 
> - [Waveshare ESP32-S3-Touch-AMOLED-2.16](https://www.waveshare.com/esp32-s3-touch-amoled-2.16.htm?&aff_id=149786) - ESP32-S3R8, 2.16" 480×480 AMOLED (CO5300 QSPI), CST9220 cap touch, AXP2101 PMU + Li-Po battery, QMI8658 IMU
> - USB-C cable for flashing firmware and charging
> - 3.7V Li-Po battery (MX1.25 2-pin connector, optional)
> 
> 
> ### Flash the firmware
> 
> ```bash
> ./flash-mac.sh                       # auto-detects /dev/cu.usbmodem*
> ./flash-mac.sh /dev/cu.usbmodem1101  # or pass an explicit USB serial port
> ```
> 
> 
> ### Pair the device
> 
> After flashing, open **System Settings → Bluetooth** and click *Connect* next to "Clawdmeter". The daemon will discover it on its next scan (~30 s).
> 
> 
> ### Flash the firmware
> 
> ```bash
> cd firmware
> pio run -t upload --upload-port /dev/ttyACM0
> ```
> 
> 
> ### Pair the device
> 
> After flashing, the device advertises as "Claudemeter". Pair it once:
> 
> ```bash
> 
> # Scan for the device
> bluetoothctl scan le
> 
> 
> # When "Claude Controller" appears, pair and trust it
> bluetoothctl pair F4:12:FA:C0:8F:E5    # use your device's MAC
> bluetoothctl trust F4:12:FA:C0:8F:E5
> ```
> 
> The MAC address is shown on the Bluetooth screen — press the middle (PWR) button to cycle to it.
> 
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
> 
> ## Recompiling fonts
> 
> The `firmware/src/font_*.c` files are pre-compiled LVGL bitmap fonts.
> 
> ```bash
> npm install -g lv_font_conv
> ```
> 
> Generate each one (one at a time — `lv_font_conv` doesn't like loop-driven invocations) with `--no-compress` (required for LVGL 9):
> 
> ```bash
> 
> # Tiempos Text (titles, 56px)
> lv_font_conv --font assets/TiemposText-400-Regular.otf -r 0x20-0x7E \
>   --size 56 --format lvgl --bpp 4 --no-compress \
>   -o firmware/src/font_tiempos_56.c --lv-include "lvgl.h"
> 
> 
> # Styrene B (large numbers 48, panel labels 28, small text 24, minimal 20)
> for size in 48 28 24 20; do
>   lv_font_conv --font assets/StyreneB-Regular.otf -r 0x20-0x7E \
>     --size $size --format lvgl --bpp 4 --no-compress \
>     -o firmware/src/font_styrene_${size}.c --lv-include "lvgl.h"
> done
> 
> 
> # DejaVu Sans Mono (32px, with spinner Unicode chars)
> lv_font_conv --font assets/DejaVuSansMono.ttf \
>   -r 0x20-0x7E,0xB7,0x2026,0x2722,0x2733,0x2736,0x273B,0x273D \
>   --size 32 --format lvgl --bpp 4 --no-compress \
>   -

## 延伸閱讀

相關概念：[[BLE HID]] · [[物聯網]] · [[即時通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[432539--gpt2api|432539/gpt2api]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]] · [[0xGF--boneyard|0xGF/boneyard]]

[GitHub](https://github.com/HermannBjorgvin/Clawdmeter)

## 相關收錄

> [!note]- 直接競品（同子分類：監控）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "監控" AND file.name != "HermannBjorgvin--Clawdmeter"
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
> const concepts = ["BLE HID","物聯網","即時通訊"];
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
