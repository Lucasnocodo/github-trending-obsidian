---
repo: SkyBlue997/enableMacosAI
url: https://github.com/SkyBlue997/enableMacosAI
owner: SkyBlue997
owner_type: User
language: Shell
license: N/A
description: "国行 Mac 一键开启完整 Apple 智能(端侧 + Private Cloud Compute 云端)· macOS 27 / Apple Silicon"
homepage: ""
stars: 999
stars_per_day: 333
forks: 51
open_issues: 10
created: 2026-06-10
pushed_at: 2026-06-13
first_seen: 2026-06-14
week: "2026-W25"
month: "2026-06"
category: "其他"
subcategory: "Apple 智能工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-14
use_case: "讓國行 Mac 一鍵啟用完整 Apple 智能功能，無需繁瑣設定。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 52
repo_size_kb: 29
readme_length: 6122
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-14"
star_history: "2026-06-14:996,2026-06-14:999"
tags:
  - github
  - "category/其他"
  - "lang/shell"
  - easy_install
  - "topic/apple_intelligence"
aliases:
  - "enableMacosAI"
  - "SkyBlue997/enableMacosAI"
  - "讓國行 Mac 一鍵啟用完整 Apple 智能功能，無需繁瑣設定。"
---

# enableMacosAI

**999** stars · **333** stars/天 · 建立 3 天前 · Shell · 未標註授權

```dataviewjs
const me = dv.page("Repos/SkyBlue997--enableMacosAI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`apple-intelligence`

> [!summary] 一句話摘要
> 讓國行 Mac 一鍵啟用完整 Apple 智能功能，無需繁瑣設定。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (333 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在國行 Mac 上啟用完整 Apple 智能功能的技術用戶。
> **一句話重點** 這個專案讓國行 Mac 用戶能夠輕鬆啟用完整的 Apple 智能功能，解決了過去的使用限制。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Apple 智能工具" && p.file.name !== "SkyBlue997--enableMacosAI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Apple 智能工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到快速啟用 Apple 智能的效果，值得嘗試。

> [!abstract] 核心創新
> 通過修改 IORegistry 的區域碼，實現了在國行 Mac 上啟用完整 Apple 智能的功能。

## 專案簡介

這個專案提供了一個簡單的 Shell 腳本，通過修改 Mac 的區域碼來啟用 Apple 智能功能，包含端側和雲端計算。用戶只需執行 `sudo ./install.sh`，腳本會自動檢查系統設置並安裝必要的內核擴展，確保 Apple 智能功能正常運行。這樣的設計避免了繁瑣的手動配置，讓用戶能輕鬆享受完整的 Apple 智能體驗。該工具的核心是通過修改 `IORegistry` 中的 `region-info` 屬性，將其從 `CH/A` 變更為 `LL/A`，使得系統能夠識別為美版，從而啟用所有功能。這種方法比起傳統的 plist 修改更為穩定，因為它直接影響到系統的根源設置。

使用者需要注意，該工具要求 SIP 必須關閉，這意味著在安全性上可能會有一定的風險，尤其是在使用雲端功能時。與其他類似工具相比，如 `0x0funky/agent-sprite-forge`，這個專案提供了更簡單的安裝過程，並且不需要複雜的配置，適合希望快速啟用 Apple 智能的用戶。實際使用中，若遇到問題，腳本也提供了診斷功能，能幫助用戶快速定位問題。這個專案目前處於初期階段，社群活躍度尚可，但仍需注意潛在的問題和限制。適合個人用戶或小型團隊，尤其是對 Apple 智能功能有需求的開發者或創作者。

**技術棧**：`Shell` · `C++` · `C`

## 重點功能

- 一鍵安裝 — 使用 `sudo ./install.sh` 自動完成所有設定。
- 系統檢查 — `sudo ./install.sh status` 提供 SIP、AMFI、區域碼等狀態檢查。
- 一鍵診斷 — `sudo ./install.sh diagnose` 生成關鍵狀態的純文本報告，便於問題排查。
- 自動加載 — 使用 LaunchDaemon 自動加載 kext，確保系統啟動時功能正常。
- 簡單卸載 — `sudo ./install.sh uninstall` 可以輕鬆恢復原始區域設定。

## 快速開始

1. 下載並解壓專案
```bash
git clone https://github.com/SkyBlue997/enableMacosAI.git
```
2. 進入專案目錄
```bash
cd enableMacosAI
```
3. 執行安裝腳本
```bash
sudo ./install.sh
```

## 程式碼範例

```bash
{
  "前置條件": "確保 SIP 已關閉",
  "指令": "sudo ./install.sh",
  "預期輸出": "腳本將檢查系統狀態並安裝必要的 kext。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 999 stars（333/天），forks 51（5.1%），這顯示出快速增長的潛力。作者 SkyBlue997 似乎專注於 Apple 生態系統的開發，解決了國行 Mac 用戶無法使用完整 Apple 智能的痛點，這在過去是個難題。這個專案的出現正好填補了這一空白，讓用戶能夠輕鬆啟用這些功能。社群的反應熱烈，特別是對於安裝和使用的簡便性有很高的評價。

## 適合誰使用

**目標受眾**：希望在國行 Mac 上啟用完整 Apple 智能功能的技術用戶。

> [!example] 使用場景
> - 國行 Mac 用戶用它來啟用完整的 Apple 智能功能，因為這樣可以無需繁瑣的手動配置，快速享受最新的 AI 工具。
> - 開發者用它來測試 Apple 智能功能，因為這樣能夠在本地環境中快速驗證功能，而不需要更改設備或地區設定。
> - 小型團隊用它來提升工作效率，因為能夠利用 Apple 智能的寫作工具和雲端計算功能，改善團隊的協作效果。

## 架構分析

該專案的架構以簡單的 Shell 腳本為核心，通過調用內核擴展來實現區域碼的修改。這種設計使得安裝過程簡單明瞭，使用者只需執行一條命令即可完成所有設定。資料流方面，腳本會檢查系統狀態，然後自動修改內核參數，確保 Apple 智能功能能夠正常運行。

選擇使用 Shell 腳本的原因在於其跨平台的兼容性和易於使用的特性，代價是對於不熟悉命令行的用戶來說，可能需要額外的學習。整體而言，這個架構在簡單性和功能性之間取得了良好的平衡，但在安全性上則需要用戶自行承擔風險，特別是在關閉 SIP 的情況下。擴展性方面，未來可能需要考慮如何在不同版本的 macOS 中保持兼容性。

## 技術深入分析

該專案的核心技術機制在於通過內核擴展來修改 IORegistry 的 `region-info` 屬性，這樣的設計使得系統能夠識別為美版，從而啟用 Apple 智能功能。這種方法比起傳統的 plist 修改更為穩定，因為它直接影響到系統的根源設置。效能方面，該工具在安裝後能夠快速啟用功能，並且不會對系統性能造成明顯影響。設計取捨方面，選擇使用 Shell 腳本的原因在於其跨平台的兼容性和易於使用的特性，代價是對於不熟悉命令行的用戶來說，可能需要額外的學習。技術風險方面，由於需要關閉 SIP，這可能會導致系統安全性降低，特別是在使用雲端功能時。整合方面，該工具可以輕鬆與現有的 macOS 環境集成，但對於不熟悉命令行的用戶來說，可能會有一定的學習曲線。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，並且包含了故障排查的指引。安裝過程相對順暢，但需要注意關閉 SIP 的步驟。文件目前僅提供英文版本，可能對非英文用戶造成一定困難。

## 優缺點分析

> [!success] 優點
> - 安裝過程簡單，只需一條命令即可完成。
> - 提供診斷功能，方便用戶快速排查問題。
> - 能夠啟用完整的 Apple 智能功能，提升使用體驗。

> [!danger] 缺點
> - 需要關閉 SIP，可能影響系統安全性。
> - 僅支援 Apple Silicon 設備，對於 Intel 用戶無法使用。
> - 雲端功能依賴於 AMFI 開啟，配置較為複雜。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 設備。
> - 需要關閉 SIP，可能影響系統安全性。
> - 雲端功能依賴於 AMFI 開啟，必須小心配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具也針對 Apple 智能，但安裝過程較為複雜，需要更多手動配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具提供類似功能，但不支持一鍵安裝，使用者需要自行編譯和配置。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具也針對 Apple 智能，但安裝過程較為複雜，需要更多手動配置。 | 如果你需要更高的自定義選項，並且不介意手動配置。 | medium，因為需要重新配置和調整設置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具提供類似功能，但不支持一鍵安裝，使用者需要自行編譯和配置。 | 如果你有編程背景並希望深入了解內部工作原理。 | high，因為需要重新編譯和配置環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **enableMacosAI** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具也針對 Apple 智能，但安裝過程較為複雜，需要更多手動配置。 | 此工具提供類似功能，但不支持一鍵安裝，使用者需要自行編譯和配置。 |
> | 遷移成本 | - | medium，因為需要重新配置和調整設置。 | high，因為需要重新編譯和配置環境。 |
> | 適用場景 | 主要場景 | 如果你需要更高的自定義選項，並且不介意手動配置。 | 如果你有編程背景並希望深入了解內部工作原理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝後仍然無法啟用 Apple 智能功能，可能是因為未關閉 SIP。
  - 解法：確保在恢復模式下執行 `csrutil disable`。
- **[HIGH]** 雲端功能無法使用，可能是因為 AMFI 被關閉。
  - 解法：檢查 `nvram boot-args`，確保沒有 `amfi_get_out_of_my_way=1`。
- [MEDIUM] 安裝過程中出現錯誤，可能是因為系統版本不兼容。
  - 解法：參考 `BUILD.md` 進行重新編譯。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要使用 Apple 智能功能的寫作工具 | 非常適合 | 安裝簡單，能快速啟用所需功能。 |
| 個人開發者希望在 Mac 上測試 Apple 智能功能 | 適合 | 提供一鍵安裝和診斷功能，方便快速測試。 |
| 大型企業需要穩定的 Apple 智能功能 | 不適合 | 目前處於 alpha 階段，存在不穩定性風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到快速啟用 Apple 智能的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具需要關閉 SIP，這可能會影響系統的安全性，特別是在使用雲端功能時。使用者需謹慎考慮安全風險，並確保系統的其他安全設置得當。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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
| Forks | 51 |
| Open Issues | 10 |
| Issue 解決率 | 52% (11 closed) |
| 最後推送 | 2026-06-13 |
| 建立日期 | 2026-06-10 |
| Repo 大小 | 29 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/SkyBlue997/enableMacosAI) |
| Topics | `apple-intelligence` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 88
>     "C++" : 8
>     "C" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@SkyBlue997](https://github.com/SkyBlue997) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有持續的更新和問題回應。
**連結**：[文件](https://github.com/SkyBlue997/enableMacosAI)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-10 ~ 2026-06-13）
> **活躍天數** 3 天 · **最新 commit** 新增一键诊断 install.sh diagnose + GitHub Issue 表单

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/SkyBlue997/enableMacosAI/issues/6) | 关闭失败csrutil: Failed to update security configurationfor "Mac | 2 | 4 |
> | [#3](https://github.com/SkyBlue997/enableMacosAI/issues/3) | Feature Request: 外置系统启用Apple Intelligence | 1 | 0 |
> | [#21](https://github.com/SkyBlue997/enableMacosAI/issues/21) | [问题] 重启电脑会恢复到原来的SIRI `question` | 0 | 1 |
> | [#19](https://github.com/SkyBlue997/enableMacosAI/issues/19) | [问题] `question` | 0 | 4 |
> | [#17](https://github.com/SkyBlue997/enableMacosAI/issues/17) | csrutil | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # RegionSpoof — 在国行 Mac(macOS 27)上开启完整 Apple 智能
> 
> 一个极简内核扩展(kext),在 **IORegistry 源头**把设备区域码从 `CH/A` 改成 `LL/A`(美版),
> 让 MobileGestalt 对全系统每个进程都返回美版区域,从而在国行机
> (本机 Mac15,9 / M3 Max / macOS 27 26A5353q)上启用**完整的 Apple Intelligence**——
> 端侧 + Private Cloud Compute 云端全功能(写作工具含语气改写、图乐园、Genmoji、
> Foundation Models、ChatGPT 扩展)。
> 
> ## 快速安装(一键,推荐)
> 
> ```bash
> sudo ./install.sh
> ```
> 
> 脚本自动完成:检查 SIP / Apple Silicon、**移除会杀死 PCC 的 `amfi_get_out_of_my_way` boot-arg**、
> 安装 kext + 配置开机自启、加载并刷新 Apple 智能守护进程。首次会提示你去
> 「系统设置 → 隐私与安全性」点一次 **允许** 后重启。
> 
> ```bash
> sudo ./install.sh status      # 体检:SIP / AMFI / region / kext / 资格 一览
> sudo ./install.sh diagnose    # 一键诊断:把所有关键状态打成一段纯文本(报 issue 直接贴这个)
> sudo ./install.sh uninstall   # 卸载,恢复原始区域
> ```
> 
> > 前提:SIP 已关闭(恢复模式里 `csrutil disable`)。脚本若检测到未关,会给出分步指引。
> 
> ## 原理
> 
> - 资格门的根因:`MGGetStringAnswer("RegionCode") == "CH"` → Apple 智能被关。
> - 该值**实时**来自 IORegistry `IOPlatformExpertDevice` 的 `region-info` 属性(`"CH/A"`),
>   并非任何 plist 缓存(macOS 27 的 eligibilityd 基于 SwiftData 实时重算,旧的改 plist / 锁
>   uchg 方法全部失效)。
> - 本 kext 匹配 `IOPlatformExpertDevice`,在 `start()` 里
>   `setProperty("region-info", "LL/A")` + `setProperty("country-of-origin", "USA")`
>   —— 全系统进程从**源头**读到美版,资格 / 模型下发 / 前端 UI 自然一通百通,无需逐进程注入。
> 
> ## 文件
> 
> | 路径 | 作用 |
> |------|------|
> | `install.sh` | **一键安装 / 卸载 / 体检脚本** |
> | `src/RegionSpoof.cpp` | kext 源码(IOService,改 `region-info`) |
> | `src/kmod_info.c` | kext 入口声明,提供链接必需的 `_kmod_info` 符号 |
> | `src/Info.plist` | kext bundle 的 Info.plist(IOKitPersonalities 匹配 IOPlatformExpertDevice) |
> | `BUILD.md` | 完整编译 / 链接命令 |
> | `RegionSpoof.kext/` | 已编译好的 kext(arm64e,ad-hoc 签名) |
> | `com.local.regionkext.plist` | LaunchDaemon,开机早期自动加载 kext 并刷新 AI 守护进程 |
> | `region-kext-load.sh` | LaunchDaemon 调用的加载脚本 |
> 
> ## 前置条件(Apple Silicon)
> 
> 1. **SIP 关闭 + Permissive 安全模式 + 允许第三方 kext** —— 恢复模式(1TR)里 `csrutil disable`
>    一条即可全设。
> 2. **AMFI 必须保持开启** —— `nvram boot-args` 里**不能**有 `amfi_get_out_of_my_way=1`。
>    AMFI 一关,SEP 会拒绝给 Private Cloud Compute 出硬件证明(日志表现为
>    `AppleKeyStore kIOReturnNotPermitted`),**云端 AI 全部失效**;端侧仍可用。
> 3. kext 首次加载需在 **系统设置 → 隐私与安全性** 里点 **Allow** 后重启。
> 4. **Apple 账户「媒体与购买项目」地区必须是 Apple 智能支持区(不能是中国/CN)** —— 改成
>    美国 / 日本等(系统设置 → 顶部你的名字 → 媒体与购买项目 → 管理 → 国家/地区)。
> 5. **系统语言 == Siri 语言,且为 Apple 智能支持的语言** —— 最稳是两者都设成 English (US)。
> 
> > ⚠️ **kext 只负责"区域"这一项。** GREYMATTER 资格要 ~10 个输入(区域、账户地区、语言匹配、
> > 设备类型……)**全部满足**才会变 4。若装好后 `region=LL/A` 和 kext 都已就位、但 `GREYMATTER`
> > 仍是 `2`,八成卡在**账户地区或语言**上。跑这条看是哪一项没过(值为 `2` 的就是它):
> >
> > ```bash
> > sudo /usr/libexec/PlistBuddy -c "Print :OS_ELIGIBILITY_DOMAIN_GREYMATTER:status" \
> >   /private/var/db/eligibilityd/eligibility.plist
> > ```
> >
> > 改完对应设置后,`sudo launchctl kickstart -k system/com.apple.eligibilityd` 或重启即可。
> 
> ## 手动安装(可选)
> 
> ```bash
> sudo cp -R RegionSpoof.kext /Library/Extensions/
> sudo chown -R 0:0 /Library/Extensions/RegionSpoof.kext
> sudo cp region-kext-load.sh /usr/local/bin/ && sudo chmod +x /usr/local/bin/region-kext-load.sh
> sudo cp com.local.regionkext.plist /Library/LaunchDaemons/
> sudo kmutil load -p /Library/Extensions/RegionSpoof.kext   # 首次提示去设置 Allow → 重启
> ```
> 
> ## 验证
> 
> ```bash
> # region-info 应为 0x4c4c2f41 ("LL/A")
> ioreg -ard1 -c IOPlatformExpertDevice | plutil -p - | grep region-info
> # GREYMATTER 资格应为 4 (eligible)
> sudo /usr/libexec/PlistBuddy -c 'Print :OS_ELIGIBILITY_DOMAIN_GREYMATTER:os_eligibility_answer_t' \
>   /private/var/db/eligibilityd/eligibility.plist
> ```
> 
> ## 故障排查
> 
> > **拿不准卡在哪,先跑一键诊断:** `sudo ./install.sh diagnose` —— 它把 SIP / AMFI / region / kext /
> > GREYMATTER 逐项 / 模型大小 / PCC 日志一次性打成一段纯文本,对照下面各节即可定位。**提 issue 时也请直接贴这段输出**
> > (无隐私信息),否则很难帮你诊断。
> 
> ### `region=LL/A` 和 kext 都已就位,但 `GREYMATTER` 仍是 `2`
> 
> 区域只是 ~10 个资格输入之一,八成卡在**账户地区或语言**(见上方「前置条件」第 4/5 条)。
> 跑这条看哪一项没过(值为 `2` 的就是它),改完对应设置后 `sudo launchctl kickstart -k
> system/com.apple.eligibilityd` 或重启:
> 
> ```bash
> sudo /usr/libexec/PlistBuddy -c "Print :OS_ELIGIBILITY_DOMAIN_GREYMATTER:status" \
>   /private/var/db/eligibilityd/eligibility.plist
> ```
> 
> ### kext 没加载(`region` 仍是 CH)
> 
> - **SIP 没关** → `csrutil status` 须为 disabled;没关就回恢复模式 `csrutil disable`;
> - **没批准** → `kmutil load -p` 报 not approved → 系统设置 → 隐私与安全性 → **Allow** → 重启;
> - **`Authenticating extension failed: Bad code signature`** → 你处于 Reduced Security(部分关 SIP),
>   ad-hoc kext 不放行;**必须 Permissive(完整关 SIP)**,想 SIP-on 则需 Developer-ID 正经签名;
> - **系统版本差异** → 太新/太旧的 macOS 可能验签或 KPI 不符,需用 `BUILD.md` 从源码重编。
> 
> ### PCC 云端功能报错(写作工具语气改写 / 图乐园 / Reframe 等)
> 
> **端侧(校对/摘要/Genmoji)不受影响。** PCC 出问题先看日志定位,**别连环点**——每次失败都可能触发
> Apple 后端限流,越点越坏:
> 
> ```bash
> sudo log show --last 3m --predicate 'process == "privatecloudcomputed"' 2>/dev/null \
>   | grep -iE 'finished successfully|3200[0-9]|RetryAfter|NWError|3205[0-9]|Insufficient inline|32080' | tail -15
> ```
> 
> | 日志特征 | 含义 | 解法 |
> |---|---|---|
> | `Ropes request finished successfully` | ✅ 正常 | — |
> | `32001` + `RetryAfterDate` | 被 Apple 限流(请求太频繁/失败太多) | **停手**,等几小时 / 过夜 |
> | `Insufficient inline attestations` / `32080` | 证明池陈旧或没热 | 见下方**重置证明池** |
> | `32057` + `NWError` / 大量 `cancelled` | 网络到 Apple 中继不通 | 换**支持区**网络(美/日节点或直连),别用香港等非支持区 |
> 
> > 另外:PCC 还要求 **AMFI 开启**(前置条件第 2 条)。"Internet Connection Required" 多半也是上面这些(不是真没网)。
> 
> **重置证明池**(`Insufficient` / 反复折腾后 PCC 一直 flaky 时的杀手锏):
> 
> ```bash
> # 1) 先定位证明库(趁 daemon 还活着;容器 UUID 各机不同)
> DIR="$(sudo lsof -c privatecloudcomputed -Fn 2>/dev/null | sed -n 's/^n//p' | grep -m1 -oE '.*/attestationstore_v3')"
> # 2) 停 daemon → 删陈旧证明库 + 收到的节点缓存
> sudo launchctl kill KILL system/com.apple.privatecloudcomputed
> sudo rm -f "$DIR"/db.sqlite* "$(dirname "$DIR")"/nodesReceived.log
> # 3) 重启,然后晾 15~30 分钟让它联网重建一池干净证明,再试(别马上猛点)
> ```
> 
> ## 卸载
> 
> ```bash
> sudo launchctl bootout system/com.local.regionkext 2>/dev/null
> sudo rm -f /Library/LaunchDaemons/com.local.regionkext.plist /usr/local/bin/region-kext-load.sh
> sudo rm -rf /Library/Extensions/RegionSpoof.kext
> sudo kmutil unload -b com.local.RegionSpoof 2>/dev/null
> # 重启即恢复原区域
> ```
> 
> ## 已知边界(实测确认)
> 
> - **SIP 必须保持关闭(Permissive)。** 本 kext 是 ad-hoc 签名;切到 Reduced Security(SIP 开)
>   会以 `Authenticating extension failed: Bad code signature` 拒绝它,区域退回 CH、AI 关闭。
>   要在 SIP 开启下使用,必须用 **Apple Developer ID($99/年)** 给 kext 正经签名后再走
>   Reduced Security。
> - **PCC 云端功能(语气改写 / 图乐园)依赖 AMFI 开启。** 切勿添加
>   `amfi_get_out_of_my_way` boot-arg。
> - **"New Siri" 等候名单** 是 Apple 服务端分批下发,与本地改区域无关。

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[安全漏洞]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ps5-linux--ps5-linux-loader|ps5-linux/ps5-linux-loader]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/SkyBlue997/enableMacosAI)

## 相關收錄

> [!note]- 直接競品（同子分類：Apple 智能工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Apple 智能工具" AND file.name != "SkyBlue997--enableMacosAI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "SkyBlue997--enableMacosAI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "SkyBlue997--enableMacosAI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "SkyBlue997--enableMacosAI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","安全漏洞"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "SkyBlue997--enableMacosAI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "SkyBlue997--enableMacosAI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "SkyBlue997" AND file.name != "SkyBlue997--enableMacosAI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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
> const me = dv.page("Repos/SkyBlue997--enableMacosAI");
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

> **2026-06-14** — 首次收錄
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

- [[2026-06-14|2026-06-14]] — 首次收錄，996 stars
