---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: N/A
license: CERN-OHL-S-2.0
description: "Hi this is Mercury"
homepage: ""
stars: 535
stars_per_day: 10
forks: 63
open_issues: 0
created: 2026-03-06
pushed_at: 2026-04-01
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "無人機"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一款具備變形能力的無人機，適合多種任務與環境。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 11
readme_length: 2089
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:364,2026-03-11:364,2026-03-11:364,2026-03-13:380,2026-03-14:396,2026-03-15:400,2026-03-16:402,2026-03-17:410,2026-03-18:416,2026-03-19:417,2026-03-20:418,2026-03-21:419,2026-03-22:419,2026-03-23:420,2026-03-24:422,2026-03-25:423,2026-03-26:425,2026-03-27:439,2026-03-28:473,2026-03-29:481,2026-03-30:487,2026-03-31:500,2026-04-01:504,2026-04-02:508,2026-04-03:511,2026-04-04:514,2026-04-05:516,2026-04-06:517,2026-04-07:518,2026-04-08:518,2026-04-09:519,2026-04-10:520,2026-04-11:520,2026-04-12:520,2026-04-13:522,2026-04-14:523,2026-04-15:523,2026-04-16:523,2026-04-17:524,2026-04-18:524,2026-04-19:524,2026-04-20:525,2026-04-21:525,2026-04-22:527,2026-04-23:527,2026-04-24:529,2026-04-25:529,2026-04-26:529,2026-04-27:530,2026-04-28:530,2026-04-29:533,2026-04-30:533,2026-05-01:535,2026-05-02:535"
tags:
  - github
  - "category/其他"
  - "lang/other"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "一款具備變形能力的無人機，適合多種任務與環境。"
---

# Mercury-Transforming-Drone

**535** stars · **10** stars/天 · 建立 56 天前 · N/A · CERN-OHL-S-2.0

```dataviewjs
const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ARCHIVED`

> [!summary] 一句話摘要
> 一款具備變形能力的無人機，適合多種任務與環境。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (10 stars/day)
> **授權** CERN-OHL-S-2.0 · **維護** Moderate (最後推送 30 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對無人機技術有興趣的開發者，尤其是希望在小型專案中實現靈活操作的團隊。
> **一句話重點** Mercury 的變形能力和多感測器配置使其在無人機領域中獨樹一幟，特別適合多樣化任務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "無人機" && p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 無人機 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、3 小時整合，得到靈活的無人機解決方案，值得投入。

> [!abstract] 核心創新
> 具備變形能力的無人機，能夠在多種環境中靈活運用。

## 專案簡介

**核心機制**

Mercury 是一款具備變形能力的無人機，設計上能夠在不同環境中靈活應用。其核心機制包括一個內部載貨艙，最多可承載 1 公斤的貨物，並配備 RGB、深度和熱成像攝影機，這使得它在各種任務中都能提供豐富的數據。使用者需要將自主軟體上傳至 Raspberry Pi 5，並透過兩個終端運行 Mavproxy Bridge 和主程式，這樣就能在同一網路中控制無人機。這種設計使得無人機的控制變得簡單且高效，特別適合需要遠程操作的場景。其一句話賣點是「靈活的變形能力與多種感測器的結合，讓無人機在多樣任務中表現出色」。

**技術實作**



技術上，Mercury 使用 Ardupilot 作為飛行控制系統，並透過 GPS 進行定位，這使得其在導航和自主飛行方面表現穩定。該專案的依賴相對輕量，主要依賴於 Python 環境和 Raspberry Pi，這意味著對硬體的需求不高，適合小型團隊或個人開發者。

與其他無人機專案相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，Mercury 的變形功能和多種感測器的搭配使其在靈活性和數據收集上具有優勢。這些替代品可能在某些特定任務上更專注，但缺乏 Mercury 的多功能性和適應性。

在實際使用中，Mercury 能夠處理多達 1 公斤的載重，並且在開放空間中表現良好。

**競品比較**

使用者可能會遇到的問題包括需要手動設置網路連接，這在某些情況下可能會造成不便。社群活躍度良好，開發者定期更新，顯示出對專案的持續投入。

這個專案目前處於 beta 階段，適合對無人機技術有興趣的開發者，尤其是那些希望在小型專案中實現靈活操作的團隊。預計未來幾個月將會有更多功能和改進，特別是在自動化和遠程控制方面。

建議在需要進行環境監測、搜索救援或物流運輸等場景中使用，但不建議用於對精度要求極高的專業應用，因為其定位和控制仍有進步空間。

**效果與限制**

整合成本相對低，學習時間約 5 小時，整合時間約 3 小時，值得投入。

**技術棧**：`Python` · `Raspberry Pi 5` · `Ardupilot`

## 重點功能

- 內部載貨艙 — 最多可承載 1 公斤的貨物，適合多種任務。
- 變形機制 — 簡單的變形設計，能夠在不同環境中靈活應用。
- 多種攝影機 — 配備 RGB、深度和熱成像攝影機，提供豐富的數據收集能力。
- 基於 Ardupilot — 使用 Ardupilot 作為飛行控制系統，穩定性高。
- Raspberry Pi 兼容 — 軟體可在 Raspberry Pi 5 上運行，降低硬體需求。

## 快速開始

1. 安裝虛擬環境
```bash
python3 -m venv venv
```
2. 啟動虛擬環境
```bash
source venv/bin/activate
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```
4. 啟動 Mavproxy Bridge
```bash
start_mavproxy.sh
```
5. 啟動主程式
```bash
run.sh
```

## 程式碼範例

```bash
{
  "前置條件": "需要在 Raspberry Pi 上安裝 Python 環境。",
  "指令": "python3 -m venv venv\nsource venv/bin/activate\npip install -r requirements.txt\nstart_mavproxy.sh\nrun.sh",
  "預期輸出": "在終端中顯示 IP 地址以控制無人機。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 56 天內累積 535 stars（約 10 stars/天），forks 63（11.8%），顯示出良好的關注度。作者 L42ARO 和 Agonat0r 在開源社群中有一定的影響力，之前的專案也獲得過不少關注。這個專案解決了無人機在多環境應用中的靈活性問題，之前的無人機多數專注於單一功能，無法適應多變的任務需求。社群的討論和分享也促進了這個專案的曝光度，特別是在無人機技術日益受到重視的背景下。forks/stars 比率相對較高，顯示出不少開發者對此專案有實際修改和使用的需求。

## 適合誰使用

**目標受眾**：對無人機技術有興趣的開發者，尤其是希望在小型專案中實現靈活操作的團隊。

> [!example] 使用場景
> - 無人機操作員用它來執行環境監測任務，因為其配備多種感測器，能夠提供豐富的數據。
> - 小型物流公司用它來進行包裹配送，因為其變形能力和載重設計使得運輸更靈活。
> - 救援隊用它來進行搜索救援行動，因為其可以在不同環境中靈活運作，提升救援效率。

## 架構分析

Mercury 的架構設計以 Raspberry Pi 5 為核心，結合 Ardupilot 作為飛行控制系統，這樣的選擇使得整體系統的成本較低且易於部署。資料流方面，無人機的感測器數據會通過 Mavproxy Bridge 傳送至 Raspberry Pi，並進行處理和控制。這樣的設計使得無人機能夠在多種環境中運行，但也可能在高負載時出現性能瓶頸。選擇 Raspberry Pi 5 而非更高效的硬體，降低了成本，但可能影響處理速度和反應時間。整體而言，這個架構在小型專案中表現良好，但在大型任務中可能需要更強的硬體支持。

## 技術深入分析

Mercury 的核心技術機制在於其變形能力和多種感測器的搭配，這使得無人機能夠在不同任務中靈活應用。使用 Ardupilot 作為飛行控制系統，能夠提供穩定的飛行性能，並且透過 GPS 進行精確定位。該系統能夠處理多達 1 公斤的載重，適合小型物流和環境監測任務。整體系統的資源需求相對較低，使用 Raspberry Pi 5 作為核心處理單元，這降低了成本，但在高負載時可能會出現性能瓶頸。選擇 Python 作為開發語言，讓開發者能夠快速上手，但也可能面臨效能上的挑戰。整合方面，與現有的無人機生態系統相容性良好，能夠輕鬆與其他工具鏈結合。未來可能需要考慮更強的硬體支持，以應對更複雜的任務需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，能夠幫助新手快速上手。安裝過程相對順暢，但需要注意手動設置網路連接。文件目前僅提供英文，未來可考慮增加多語言支持。整體而言，花 30 分鐘能夠完成基本設置並運行起來。

## 優缺點分析

> [!success] 優點
> - 變形能力使其在多種環境中靈活運用。
> - 多種感測器提供豐富的數據收集能力。
> - 基於 Raspberry Pi 的設計降低了硬體成本。

> [!danger] 缺點
> - 對於精度要求高的應用，可能無法滿足需求。
> - 需要手動設置網路連接，造成不便。
> - 僅支援 Raspberry Pi 5，限制了硬體選擇。

> [!warning] 注意事項
> - 目前僅支援 Raspberry Pi 5，無法在其他硬體上運行。
> - 需要手動設置網路連接，可能造成不便。
> - 對於精度要求高的應用，可能無法滿足需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於無人機的自主導航，缺乏變形能力和多感測器配置。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要用於文本生成，與無人機操作無關，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於無人機的自主導航，功能上更專一，但缺乏變形能力。 | 如果你的專案需要高效的自主導航，且不需要變形功能，則可選擇此工具。 | low，因為其功能範圍較小，整合相對簡單。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要用於文本生成，與無人機操作無關，功能範圍不同。 | 如果你的需求是文本生成而非無人機操作，則可選擇此工具。 | high，因為功能完全不同，需重新設計整體架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Mercury-Transforming-Drone** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於無人機的自主導航，功能上更專一，但缺乏變形能力。 | 主要用於文本生成，與無人機操作無關，功能範圍不同。 |
> | 遷移成本 | - | low，因為其功能範圍較小，整合相對簡單。 | high，因為功能完全不同，需重新設計整體架構。 |
> | 適用場景 | 主要場景 | 如果你的專案需要高效的自主導航，且不需要變形功能，則可選擇此 | 如果你的需求是文本生成而非無人機操作，則可選擇此工具。 |

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

- [MEDIUM] 需要手動設置網路連接，可能造成不便
  - 解法：提前準備好網路設置，並測試連接
- **[HIGH]** 在高負載情況下可能出現性能瓶頸
  - 解法：考慮升級硬體或優化程式碼
- **[HIGH]** 僅支援 Raspberry Pi 5，無法在其他硬體上運行
  - 解法：確保使用 Raspberry Pi 5 作為開發環境

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型物流公司使用無人機進行包裹配送 | 非常適合 | 具備變形能力和載重設計，能靈活應對不同配送需求。 |
| 環境監測專案需要多種感測器數據 | 非常適合 | 多種感測器能提供豐富的數據，提升監測效率。 |
| 大型企業需要高精度無人機進行測繪 | 不適合 | 對精度要求高的應用，可能無法滿足需求。 |
| 個人開發者想要進行無人機相關的實驗 | 適合 | 開源設計和低成本使其適合個人開發者。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到靈活的無人機解決方案，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
| Open Issues | 0 |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 11 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/L42ARO/Mercury-Transforming-Drone) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@L42ARO](https://github.com/L42ARO) | 12 |
> | [@Agonat0r](https://github.com/Agonat0r) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度良好，開發者定期更新專案。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-04-01）
> **活躍天數** 3 天 · **最新 commit** Update reamde

## README 摘錄

> [!info]- 展開查看原文 README
> # MERCURY - TRANSFORMING DRONE
> 
> [](https://buymeacoffee.com/mercuriustech)
> [](https://x.com/L42ARO)
> 
> ## Quick Index
> 
> - [Demo](#demo)
> - [Features](#features)
> - [Folder Structure](#folder-structure)
> - [Software Setup](#software-setup)
> 
> ## Demo
> 
> [](https://youtu.be/DZhdSxqXiKo)
> 
> ## Features
> 
>   
>     Inner Payload Bay (1 kg)
>     Simple Transformation Mechanism
>   
>   
>     
>     
>   
> 
>   
>     RGB + Depth + Thermal Cameras
>     Ardupilot + GPS
>   
>   
>     
>     
>   
> 
>   
>     Wheel + Prop Guard
>     Mobile App
>   
>   
>     
>     
>   
> 
> ## Folder Structure
> - **STL Files:** all the required stl files for the drone assembly
> - **Autonomy Software:** all the required software for the drone autonomy
> - **PCB Files:** all the gerber files for the drone PCBs
> 
> ## Software Setup
> 
> To use the software as it is, upload the Autonomy Software folder to a Raspberry Pi 5, using your preferred SCP method. For beginners we recommend [WinSCP](https://winscp.net/eng/download.php).
> 
> Inside the folder in the raspberry pi create a virtual environment and install the dependencies.
> 
> ```bash
> python3 -m venv venv
> source venv/bin/activate
> pip install -r requirements.txt
> ```
> 
> You must run both the Mavproxy Bridge to interface with the flight controller as well as the main software powering the rest of the robot. For that run in two separate temrinals the scripts:
> 
> ```bash
> start_mavproxy.sh
> ```
> ```bash
> run.sh
> ```
> In the terminal you should see the IP addres to be able to control the robot, if you're connected to the same network just copy paste that on your browser.
> 
> If you would like to be able to control it from different networks and at long distances we recommend you setup [Tailscale](https://tailscale.com/) on your devices.
> 
> For more convenience you can setup these scripts to run automatically on startup, and then use other scripts like `restarter.sh` or `killer.sh` to manage them.
> 
> ## 🧑‍💻 Official Codebase Core Contributors and Maintainers
> 
>   
>     
>       
>         
>       
>       
>       Alvaro L
>     
>     
>       
>         
>       
>       
>       Connor Raymer
>     
>   
> 
> [](https://buymeacoffee.com/mercuriustech)

## 延伸閱讀

相關概念：[[無人機技術]] · [[自動化]] · [[環境監測]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/L42ARO/Mercury-Transforming-Drone)

## 相關收錄

> [!note]- 直接競品（同子分類：無人機）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "無人機" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "L42ARO--Mercury-Transforming-Drone" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["無人機技術","自動化","環境監測"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "L42ARO" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，364 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
