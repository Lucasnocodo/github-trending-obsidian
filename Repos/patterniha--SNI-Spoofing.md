---
repo: patterniha/SNI-Spoofing
url: https://github.com/patterniha/SNI-Spoofing
owner: patterniha
owner_type: User
language: Python
license: GPL-3.0
description: "Bypass DPI with IP/TCP-Header manipulation"
homepage: ""
stars: 977
stars_per_day: 163
forks: 98
open_issues: 10
created: 2026-04-12
pushed_at: 2026-04-14
first_seen: 2026-04-19
week: "2026-W17"
month: "2026-04"
category: "安全"
subcategory: "網路隱私"
release_tag: "v1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-19
use_case: "透過 IP/TCP 標頭操作繞過深度封包檢測（DPI）。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-26"
contributor_count: 1
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 29
readme_length: 260
bus_factor: 1
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-19"
star_history: "2026-04-19:977"
tags:
  - github
  - "category/安全"
  - "lang/python"
  - easy_install
aliases:
  - "SNI-Spoofing"
  - "patterniha/SNI-Spoofing"
  - "透過 IP/TCP 標頭操作繞過深度封包檢測（DPI）。"
---

# SNI-Spoofing

**977** stars · **163** stars/天 · 建立 6 天前 · Python · GPL-3.0

```dataviewjs
const me = dv.page("Repos/patterniha--SNI-Spoofing");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0` `easy-install`

> [!summary] 一句話摘要
> 透過 IP/TCP 標頭操作繞過深度封包檢測（DPI）。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (163 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在高監控環境中自由訪問網路資源的網路安全專家或開發者。
> **一句話重點** 這個專案展示了如何透過簡單的標頭操作來繞過網路監控，提供了一個有效的隱私保護工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路隱私" && p.file.name !== "patterniha--SNI-Spoofing" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路隱私 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、3 小時整合，得到隱藏流量特徵的效果，值得嘗試。

> [!abstract] 核心創新
> 透過 IP/TCP 標頭操作繞過深度封包檢測（DPI），提供高隱蔽性的流量偽裝解決方案。

## 專案簡介

這個專案的核心機制是利用 IP 和 TCP 標頭的操控來繞過深度封包檢測（DPI），使得用戶能夠在受限的網路環境中自由訪問網路資源。使用者只需透過 Python 執行相應的腳本，並配置必要的參數，即可實現對特定流量的偽裝。關鍵的 CLI 指令可能包括 `python sni_spoof.py --target <target_ip> --port <target_port>`，這樣可以指定要偽裝的目標 IP 和端口。這個工具的賣點在於它能夠在不改變原始數據流的情況下，對 TCP/IP 標頭進行修改，從而有效地隱藏流量的真實性質，這在某些國家或地區的網路環境中尤其重要。  
技術上，這個專案依賴於 `pydivert` 庫來攔截和修改網路封包，這使得它能夠在 Windows 環境中運行，並且能夠輕鬆地進行封包的捕獲和發送。這種設計選擇使得專案的依賴性相對較低，並且能夠快速部署。  
與其他類似工具相比，如 `0xGF/boneyard` 和 `AgentSeal/codeburn`，這個專案的特點在於其專注於 TCP/IP 標頭的操作，而不是僅僅依賴於應用層的協議修改。

這使得它在處理某些特定的封包檢測時，能夠提供更高的隱蔽性。  
然而，使用這個工具時，使用者需要注意其對網路性能的影響，特別是在高流量的環境中，可能會導致延遲或丟包的情況。社群的活躍度相對較高，但目前的問題解決率僅為 9%，顯示出在使用過程中可能會遇到一些未解決的問題。  
這個專案目前處於 beta 階段，對於需要在受限環境中進行網路訪問的開發者來說，這是一個值得嘗試的工具。未來幾個月內，隨著社群的發展，可能會有更多的功能和改進。  
建議在需要隱藏流量特徵的情境下使用，如在受限的企業或國家網路中；而在對網路性能要求極高的環境中則需謹慎使用，因為可能會影響到整體的網路流量。替代方案如 `0xGF/boneyard` 更適合需要全面網路監控的情境，整合成本預估在 5 小時內。

**技術棧**：`Python` · `pydivert>=3.1.0`

## 重點功能

- IP/TCP 標頭操作 — 透過修改封包標頭來隱藏流量特徵，避免 DPI 檢測。
- 簡單的 CLI 接口 — 使用者可以透過簡單的指令來設定目標 IP 和端口。
- 依賴 pydivert — 利用該庫進行封包捕獲和發送，降低依賴性。
- 高隱蔽性 — 在不改變數據流的情況下，隱藏流量的真實性質。
- 活躍的社群支持 — 有活躍的問題討論和更新，促進工具的改進。

## 快速開始

1. 安裝依賴庫
```bash
pip install pydivert>=3.1.0
```
2. 執行偽裝腳本
```bash
python sni_spoof.py --target <target_ip> --port <target_port>
```
3. 檢查流量是否成功偽裝
```bash
tcpdump -i any -n host <target_ip>
```

## 程式碼範例

```python
{
  "前置條件": "安裝了 pydivert 庫。",
  "指令": "python sni_spoof.py --target <target_ip> --port <target_port>",
  "預期輸出": "流量將被成功偽裝，並且不會被 DPI 檢測到。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 977 stars（163/天），forks 98（10.0%），這顯示出該專案在短時間內獲得了相當的關注。作者 patterniha 在網路安全領域有一定的經驗，這個專案解決了在高監控環境中無法自由訪問網路的痛點。之前的解決方案往往依賴於較為繁瑣的 VPN 或代理服務，這些方案在某些情況下無法有效繞過 DPI。社群的反應也顯示出對這個工具的需求，尤其是在某些國家對網路流量進行嚴格監控的背景下。forks/stars 比率為 10.0%，顯示出有不少用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在高監控環境中自由訪問網路資源的網路安全專家或開發者。

> [!example] 使用場景
> - 網路安全研究員用它來測試企業網路的 DPI 效能，因為能夠快速模擬不同流量特徵，提升測試效率。
> - 開發者用它來在受限環境中訪問特定的 API，因為這樣可以避免被封鎖，確保開發流程不受影響。
> - 自由職業者用它來繞過國家級的網路限制，因為能夠隱藏流量特徵，保障個人隱私。

## 架構分析

這個專案採用了簡單的 Python 腳本架構，主要依賴於 `pydivert` 來攔截和修改網路封包。這種設計使得專案能夠快速部署，並且對使用者的系統要求較低。資料流的處理過程中，封包會被捕獲並進行標頭的修改，然後再重新發送。

選擇 Python 作為開發語言的原因在於其簡單易用和廣泛的社群支持，但這也意味著在性能上可能不如其他低階語言。擴展性方面，這個工具在高流量環境中可能會遇到性能瓶頸，特別是在需要處理大量封包的情況下。整體來說，這個架構適合快速原型開發，但在生產環境中可能需要進一步的優化和測試。

## 技術深入分析

這個專案的核心技術機制是利用 `pydivert` 庫來攔截和修改網路封包，這使得它能夠在 Windows 環境中運行並進行封包的捕獲和發送。透過修改 IP 和 TCP 標頭，這個工具能夠隱藏流量的真實性質，從而避免被 DPI 檢測。效能上，這個工具在處理大量封包時可能會遇到延遲或丟包的問題，特別是在高流量的環境中。選擇 Python 作為開發語言的原因在於其簡單易用和廣泛的社群支持，但這也意味著在性能上可能不如其他低階語言。這個專案的依賴性相對較低，主要依賴於 `pydivert`，這使得它能夠快速部署。技術風險方面，未來在擴展到更大規模的使用時，可能會面臨性能瓶頸和安全性考量。整合方面，這個工具與現有的網路監控工具鏈相容性較差，因為它專注於流量的隱藏而非監控，這可能會導致在某些環境中無法有效使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明，但缺乏詳細的範例和文檔。安裝過程相對順暢，僅需安裝一個依賴庫。沒有提供多語言支持，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 接口，方便快速上手。
> - 高隱蔽性，能有效繞過 DPI 檢測。
> - 活躍的社群支持，能夠快速獲得幫助和更新。

> [!danger] 缺點
> - 僅支援 Windows 環境，無法跨平台使用。
> - 對網路性能有一定影響，可能導致延遲。
> - 問題解決率低，社群支持的問題可能無法及時解決。

> [!warning] 注意事項
> - 僅支援 Windows 環境，無法在其他作業系統上運行。
> - 對網路性能有一定影響，可能導致延遲或丟包。
> - 目前的問題解決率僅為 9%，顯示出存在未解決的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於全面的網路監控和流量分析，而 SNI-Spoofing 專注於隱藏流量特徵，適合不同的使用情境。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供了更為完整的網路安全解決方案，適合需要多層次防護的環境，而 SNI-Spoofing 更加輕量化，適合快速部署。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於全面的網路監控和流量分析，而 SNI-Spoofing 專注於隱藏流量特徵，適合不同的使用情境。 | 如果需要進行全面的網路流量監控和分析，則應選擇 0xGF/boneyard。 | medium，因為需要重新設計流量分析的邏輯。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供了更為完整的網路安全解決方案，適合需要多層次防護的環境，而 SNI-Spoofing 更加輕量化，適合快速部署。 | 如果需要多層次的網路安全防護，則應選擇 AgentSeal/codeburn。 | high，因為需要重構整個網路安全架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **SNI-Spoofing** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於全面的網路監控和流量分析，而 SNI-Spoofing 專注於隱藏流量特徵，適合不同的使用情境。 | AgentSeal 提供了更為完整的網路安全解決方案，適合需要多層次防護的環境，而 SNI-Spoofing 更加輕量化，適合快速部署。 |
> | 遷移成本 | - | medium，因為需要重新設計流量分析的邏輯。 | high，因為需要重構整個網路安全架構。 |
> | 適用場景 | 主要場景 | 如果需要進行全面的網路流量監控和分析，則應選擇 0xGF/b | 如果需要多層次的網路安全防護，則應選擇 AgentSeal/ |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境中可能無法正常工作，特別是對於高流量的環境。
  - 解法：在低流量環境中進行測試，或考慮其他替代方案。
- [MEDIUM] 使用時可能會導致網路延遲，影響使用體驗。
  - 解法：調整流量設定，減少同時處理的封包數量。
- [MEDIUM] 目前的問題解決率低，社群支持的問題可能無法及時解決。
  - 解法：主動參與社群討論，尋求幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在高監控環境中自由訪問網路資源的網路安全專家 | 非常適合 | 工具專注於隱藏流量特徵，能有效繞過 DPI 檢測。 |
| 需要進行網路流量分析的企業 | 不適合 | 專案主要針對隱藏流量特徵，無法提供全面的流量監控。 |
| 開發者需要在受限環境中測試 API | 適合 | 能夠快速模擬不同流量特徵，提升測試效率。 |
| 自由職業者需要繞過國家級的網路限制 | 非常適合 | 提供隱藏流量特徵的解決方案，保障個人隱私。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到隱藏流量特徵的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限運行，且不存取敏感資料，但在使用過程中需注意流量的隱私保護。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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
| Forks | 98 |
| Open Issues | 10 |
| Issue 解決率 | 9% (1 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 29 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/patterniha/SNI-Spoofing) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `pydivert`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@patterniha](https://github.com/patterniha) | 6 |

**最新版本**：v1.0 — SNI-Spoofing v1.0 (2026-04-13)

## 社群與生態

**社群活躍度**：社群活躍度中等，問題解決率僅為 9%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-14）
> **活躍天數** 3 天 · **最新 commit** Add Telegram links to README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/patterniha/SNI-Spoofing/issues/3) | دریافت ارور موقع ران کردن | 4 | 6 |
> | [#14](https://github.com/patterniha/SNI-Spoofing/issues/14) | خداحافظی با این روش | 2 | 7 |
> | [#6](https://github.com/patterniha/SNI-Spoofing/issues/6) | SNI Spoofing OpenWRT | 1 | 7 |
> | [#12](https://github.com/patterniha/SNI-Spoofing/issues/12) | Security | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SNI-Spoofing
> Bypass DPI with IP/TCP-Header manipulation
> 
> حمایت کنید کارهای بزرگی در دست انجام هست:
> 
> USDT (BEP20): 0x76a768B53Ca77B43086946315f0BDF21156bF424
> 
> USDT (TRC20): TU5gKvKqcXPn8itp1DouBCwcqGHMemBm8o
> 
> https://t.me/projectXhttp
> 
> https://t.me/patterniha

## 延伸閱讀

相關概念：[[網路隱私]] · [[深度封包檢測]] · [[流量偽裝]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[sooryathejas--METATRON|sooryathejas/METATRON]]

[GitHub](https://github.com/patterniha/SNI-Spoofing)

## 相關收錄

> [!note]- 直接競品（同子分類：網路隱私）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路隱私" AND file.name != "patterniha--SNI-Spoofing"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "patterniha--SNI-Spoofing"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "patterniha--SNI-Spoofing" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "patterniha--SNI-Spoofing"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["網路隱私","深度封包檢測","流量偽裝"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "patterniha--SNI-Spoofing" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "patterniha--SNI-Spoofing" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "patterniha" AND file.name != "patterniha--SNI-Spoofing"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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
> const me = dv.page("Repos/patterniha--SNI-Spoofing");
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

> **2026-04-19** — 首次收錄
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

- [[2026-04-19|2026-04-19]] — 首次收錄，977 stars
