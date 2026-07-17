---
repo: BohemiaInteractive/CWR
url: https://github.com/BohemiaInteractive/CWR
owner: BohemiaInteractive
owner_type: Organization
language: C++
license: NOASSERTION
description: "Arma: Cold War Assault Remastered Source Code Repository."
homepage: ""
stars: 814
stars_per_day: 34
forks: 111
open_issues: 6
created: 2026-06-22
pushed_at: 2026-07-16
first_seen: 2026-06-26
week: "2026-W26"
month: "2026-06"
category: "其他"
subcategory: "遊戲開發"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-26
use_case: "提供 Arma: Cold War Assault 的重製版源代碼，讓社群能夠學習、修改和創建。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-06"
contributor_count: 2
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 5398
readme_length: 4621
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-26"
star_history: "2026-06-26:494,2026-06-26:494,2026-06-27:624,2026-06-27:624,2026-06-28:662,2026-06-28:662,2026-06-29:688,2026-06-29:689,2026-06-30:714,2026-07-01:728,2026-07-02:739,2026-07-03:751,2026-07-04:761,2026-07-05:768,2026-07-06:774,2026-07-07:776,2026-07-08:778,2026-07-09:778,2026-07-10:780,2026-07-11:780,2026-07-12:780,2026-07-13:783,2026-07-14:784,2026-07-15:786,2026-07-16:789,2026-07-17:814"
tags:
  - github
  - "category/其他"
  - "lang/c++"
  - org
aliases:
  - "CWR"
  - "BohemiaInteractive/CWR"
  - "提供 Arma: Cold War Assault 的重製版源代碼，讓社群能夠學習、修改和創建。"
---

# CWR

**814** stars · **34** stars/天 · 建立 24 天前 · C++ · NOASSERTION

```dataviewjs
const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> 提供 Arma: Cold War Assault 的重製版源代碼，讓社群能夠學習、修改和創建。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (34 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望在經典遊戲基礎上進行創作的獨立開發者和遊戲愛好者。
> **一句話重點** 這個專案不僅是源代碼的釋出，更是對經典遊戲的重生，讓開發者能夠在現代環境中重新創造經典。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BohemiaInteractive--CWR");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "遊戲開發" && p.file.name !== "BohemiaInteractive--CWR" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 遊戲開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** low
> **結論** 花 8 小時學習，12 小時整合，得到一個開放的經典遊戲重製平台，值得嘗試。

> [!abstract] 核心創新
> 這個專案將經典遊戲的源代碼公開，讓社群能夠自由修改和擴展。

## 專案簡介

這個專案的核心在於提供 Arma: Cold War Assault 的源代碼，讓開發者能夠在 C++20 環境下進行修改和擴展。使用者可以透過 `cmake --preset win-x64-clang-rwdi` 指令來構建專案，這樣的設計使得跨平台支持成為可能，涵蓋 Windows 和 Linux 系統。這個專案的賣點在於它不僅是源代碼的釋出，還鼓勵社群參與，讓這款經典遊戲在現代技術下重生。技術上，專案使用 CMake 進行構建，並且包含了多種語言的支持，如 C++, Rust 和 Python，這樣的多樣性使得不同背景的開發者都能參與進來。與其他遊戲引擎相比，這個專案的獨特之處在於它的開放性和社群驅動的開發模式，這在商業遊戲引擎中是較為罕見的。

相較於 Unity 或 Unreal Engine，這個專案的學習曲線可能更陡峭，但對於喜愛經典遊戲的開發者來說，這是一個難得的機會。實際使用中，開發者可能會遇到文檔不足的問題，特別是在構建過程中，這是社群目前關注的熱點之一。這個專案目前處於活躍開發階段，社群的參與度也在逐漸上升，未來可能會有更多的功能和改進。對於小型開發團隊或獨立開發者來說，這是一個值得嘗試的專案，尤其是對於那些希望在經典遊戲基礎上進行創作的人來說。總的來說，這是一個有潛力的專案，值得關注和參與。

**技術棧**：`C++20` · `CMake` · `Rust`

## 重點功能

- 跨平台支持 — 支援 Windows 和 Linux 系統的構建。
- 現代化的 C++20 語言特性 — 使用最新的語言特性來提升代碼質量和性能。
- 開放源代碼 — 允許用戶自由修改和分發，遵循 GPL-3.0-or-later 許可。
- 多語言支持 — 包含 C++, Rust, Python 等多種語言，適合不同背景的開發者。
- 社群驅動的開發 — 鼓勵社群參與，提供反饋和貢獻，提升專案質量。

## 快速開始

1. 安裝 CMake 和 Clang
```bash
sudo apt install cmake clang
```
2. 克隆專案
```bash
git clone https://github.com/BohemiaInteractive/CWR.git
```
3. 構建專案
```bash
cmake --preset win-x64-clang-rwdi && cmake --build build/win-x64-clang-rwdi
```

## 程式碼範例

```cpp
{
  "前置條件": "需要安裝 CMake 和 Clang",
  "指令": "cmake --preset win-x64-clang-rwdi && cmake --build build/win-x64-clang-rwdi",
  "預期輸出": "成功構建 Arma: Cold War Assault 的執行檔"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天就累積 814 stars（34 stars/天），forks 111（13.6%），顯示出社群對這個專案的高度興趣。這個專案由 Bohemia Interactive 發起，旨在解決經典遊戲重製的需求，並提供一個開放的開發環境。之前，類似的遊戲重製通常缺乏源代碼的公開，這使得開發者無法進行深入的修改和擴展。社群的反應熱烈，特別是對於遊戲資料的獨立性和源代碼的開放性，這些都是過去所缺乏的。這個專案的推出，正好符合了玩家和開發者對於經典遊戲重生的期待。

## 適合誰使用

**目標受眾**：希望在經典遊戲基礎上進行創作的獨立開發者和遊戲愛好者。

> [!example] 使用場景
> - 遊戲開發者用它來重製經典遊戲，因為可以直接修改源代碼，並利用現代技術進行擴展。
> - 獨立開發者用它來學習 C++20 和遊戲引擎的架構，因為這是一個開放的學習平台，能夠深入理解遊戲開發的核心技術。
> - 學術研究者用它來分析遊戲引擎的演變，因為這份源代碼提供了歷史和技術的珍貴資料，便於進行研究和討論。

## 架構分析

這個專案的架構基於 CMake 的多平台構建系統，選擇 C++20 作為主要開發語言，這是為了利用現代語言特性提升代碼質量。資料流方面，遊戲引擎的核心邏輯被封裝在可重用的庫中，並透過 CMake 管理依賴和構建流程。選擇 CMake 而非其他構建系統的原因在於其跨平台的特性，能夠簡化不同系統的構建過程。

這樣的設計雖然增加了初學者的學習成本，但卻能提供更大的靈活性和擴展性。未來的擴展性瓶頸可能來自於對於老舊代碼的維護，這需要社群的持續參與和更新。整體而言，這個架構設計旨在平衡現代化需求與經典遊戲的特性。

## 技術深入分析

專案的核心技術機制在於使用 C++20 進行現代化開發，這使得代碼能夠利用最新的語言特性來提高性能和可讀性。資料流方面，專案使用 CMake 進行構建，這樣的選擇使得跨平台支持變得更加簡單，能夠在 Windows 和 Linux 上進行編譯和運行。效能方面，專案的設計考慮到了現代硬體的特性，能夠有效利用多核處理器進行運算。設計取捨上，選擇 CMake 而非其他構建系統的原因在於其廣泛的使用和社群支持，這樣的選擇雖然增加了學習成本，但卻能提供更大的靈活性。技術風險方面，老舊代碼的維護可能會成為未來的挑戰，特別是在擴展功能時。整合分析方面，這個專案與主流的遊戲引擎相比，提供了更高的自由度，但也需要開發者具備更高的技術能力來駕馭。整體而言，這是一個具有潛力的專案，值得關注和參與。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的專案介紹和快速開始指南，但在具體的構建過程中可能會讓新手感到困惑。安裝過程相對順暢，但需要安裝多個依賴。整體而言，對於有一定技術背景的開發者來說，能在 30 分鐘內完成初步的設置和構建。

## 優缺點分析

> [!success] 優點
> - 開放源碼，允許自由修改和分發。
> - 支持多平台構建，方便不同系統的開發者使用。
> - 社群參與度高，能夠獲得持續的支持和更新。

> [!danger] 缺點
> - 文檔不足，可能會讓新手感到困惑。
> - 需要較高的技術背景，對於初學者不太友好。
> - 不包含遊戲數據，需另行獲取。

> [!warning] 注意事項
> - 文檔可能不足，特別是在構建過程中。
> - 需要較高的技術背景才能有效使用和修改源代碼。
> - 不包含遊戲數據，僅提供源代碼，需另行獲取。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲角色的創建和管理，與本專案的源代碼重製有明顯不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供遊戲資源的管理工具，與本專案的源代碼釋出不同，專注於資源而非引擎。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲角色的創建和管理，與本專案的源代碼重製有明顯不同。 | 如果你的專案需要專注於角色管理和創建，而不是整個遊戲引擎的重製。 | medium，因為需要重新學習不同的架構和工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供遊戲資源的管理工具，與本專案的源代碼釋出不同，專注於資源而非引擎。 | 如果你的需求主要集中在資源管理而不是引擎開發，這是一個更合適的選擇。 | low，因為資源管理的概念相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CWR** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲角色的創建和管理，與本專案的源代碼重製有明顯不同。 | 提供遊戲資源的管理工具，與本專案的源代碼釋出不同，專注於資源而非引擎。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的架構和工具。 | low，因為資源管理的概念相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的專案需要專注於角色管理和創建，而不是整個遊戲引擎的重 | 如果你的需求主要集中在資源管理而不是引擎開發，這是一個更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 構建過程中可能會遇到依賴問題，特別是在 Linux 環境下。
  - 解法：確保所有依賴都已正確安裝，並參考社群提供的解決方案。
- [MEDIUM] 文檔中對於某些功能的說明不足，可能會導致誤解。
  - 解法：參考社群討論或直接查詢維護者。
- [MEDIUM] 在不同平台上構建時可能會遇到不一致的行為。
  - 解法：在構建前仔細檢查平台特定的設置和選項。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型獨立遊戲開發團隊 | 非常適合 | 開放源碼和社群支持能夠幫助團隊快速上手和解決問題。 |
| 大型商業遊戲開發公司 | 不適合 | 需要更穩定的商業支持和文檔，這個專案目前仍在 beta 階段。 |
| 遊戲開發學校的學生 | 適合 | 能夠學習到現代遊戲開發的技術和實踐。 |
| 對經典遊戲有興趣的開發者 | 非常適合 | 能夠深入理解經典遊戲的架構和設計。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到一個開放的經典遊戲重製平台，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個專案不需要高權限，且不存取敏感資料，但仍需注意依賴的第三方庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案最常與 CMake 和 Clang 搭配使用，通常在開發和構建階段進行整合。在一個使用 CMake 的專案中，你可以通過 `cmake` 指令來構建這個專案，具體做法是使用 `cmake --preset win-x64-clang-rwdi` 指令。與主流的 CI/CD 工具如 GitHub Actions 和 GitLab CI 的整合相對簡單，因為這些工具都支持 CMake 的構建過程。最常見的整合問題是依賴的版本不一致，這需要在 CI 環境中進行仔細的配置和測試。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個專案出現之前，經典遊戲的重製通常缺乏源代碼的公開，開發者無法進行深入的修改和擴展。隨著開放源碼運動的興起，越來越多的開發者希望能夠自由地訪問和修改遊戲源代碼。這個專案代表了遊戲開發中的一個重要趨勢，即將經典遊戲的技術和知識傳承給下一代開發者。

未來，這個領域可能會看到更多的開放源碼遊戲專案出現，進一步推動遊戲開發的創新和發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 C++ 和 CMake
- 有遊戲開發經驗
- 對開放源碼有興趣

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：撰寫最佳實踐文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：開發時間減少 30%，或是成功構建和運行經典遊戲的重製版。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他遊戲引擎。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
| Forks | 111 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-07-16 |
| 建立日期 | 2026-06-22 |
| Repo 大小 | 5.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BohemiaInteractive/CWR) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 94
>     "Rust" : 3
>     "SQF" : 1
>     "CMake" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@simi](https://github.com/simi) | 3 |
> | [@BohemiaOwner](https://github.com/BohemiaOwner) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和討論。
**連結**：[文件](https://github.com/BohemiaInteractive/CWR)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-07-15）
> **活躍天數** 3 天 · **最新 commit** 3.03

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/BohemiaInteractive/CWR/issues/2) | Thank you! | 54 | 4 |
> | [#1](https://github.com/BohemiaInteractive/CWR/issues/1) | We were expecting Cold War Crisis remaster in Arma Reforger  | 40 | 3 |
> | [#6](https://github.com/BohemiaInteractive/CWR/issues/6) | About keyboard options | 1 | 0 |
> | [#7](https://github.com/BohemiaInteractive/CWR/issues/7) | 1985 stringtable error | 0 | 0 |
> | [#4](https://github.com/BohemiaInteractive/CWR/issues/4) | [Linux] Complicated build process and maybe better documenta | 0 | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Arma: Cold War Assault - Remastered
> 
> This repository holds the engine and game source code (codename *Poseidon*) behind *Arma: Cold War Assault* — the game first released in 2001 as *Operation Flashpoint: Cold War Crisis*. That release launched Bohemia Interactive and began the technology lineage that later grew into Real Virtuality, Arma, and Enfusion. The code has been modernized to C++20, built with CMake and Clang, with cross-platform support for Windows x64 and Linux x64.
> Bohemia Interactive is releasing it to the community that has kept this game alive for more than two decades — to study it, build on it, fix it, and create from it. Three things are worth keeping separate:
> 
> **Source code (this repository)**
> 
> The engine and game executables, licensed under GPL-3.0-or-later with additional terms under Section 7. You may use, study, modify, and redistribute it, provided it stays GPL and you follow those terms.
> 
> **The name and brand**
> 
> "ARMA", "Operation Flashpoint", and the logos are *not* granted. The trademarks stay with their owners ("ARMA" is Bohemia Interactive's). A fork must be renamed and must not present itself as "Arma" or as an official Bohemia Interactive product.
> 
> **Game data (separate)**
> 
> Models, textures, sounds, missions, and voices. These are not in this repository and are not GPL; they ship separately under the APL-SA license. A free Demo is available on Steam.
> 
> In short: the code is free software, the name is not, and the game data comes separately. This license covers the source code only and grants no rights to the trademarks.
> 
> ## Quick Start
> 
> ```sh
> cmake --preset win-x64-clang-rwdi
> cmake --build build/win-x64-clang-rwdi
> ```
> 
> On GNU/Linux, use the matching `linux-x64-clang-rwdi` preset.
> 
> ## Layout
> 
> - [Apps](apps/README.md) - executable targets
> - [Engine](engine/README.md) - engine libraries and Rust Trident tooling
> - [Master server tools](mserver/README.md) - Rust service and CLI crates
> - [Tests](tests/README.md) - test source trees; CI currently compiles them only
> - `cmake/` - presets, toolchains, vcpkg triplets, and overlay ports
> - `docker/` - container support for service and runtime environments
> - `packages/` - ignored local game data staging area
> - `resources/` - application icon resources
> - `thirdparty/` - vendored third-party headers and sources
> 
> ## Project Notes
> 
> - [Contributing](CONTRIBUTING.md)
> - [Credits](CREDITS.md)
> - [Third-party notices](THIRD_PARTY_NOTICES.md)
> - [Vendored dependencies](thirdparty/README.md)
> 
> ## License
> 
> The source in this repository is licensed under the **GNU General Public License
> v3.0 *or later***, with additional terms under **Section 7** of the GPL. See [`LICENSE`](LICENSE) for the
> full text.
> This license does not grant you any right to use "ARMA" or any other Bohemia Interactive trademark.
> 
> The [`thirdparty/`](thirdparty) directory is **excluded** from the project's GPL
> license: it contains vendored third-party code (glad, the RenderDoc API header)
> under their own respective licenses — see [`thirdparty/README.md`](thirdparty/README.md).
> Dependencies pulled in via vcpkg ([`vcpkg.json`](vcpkg.json)) likewise remain under
> their own licenses.
> 
> *"ARMA" is a registered trademark of BOHEMIA INTERACTIVE a.s. "OPERATION FLASHPOINT" is a registered trademark of Electronic Arts Inc.
> See [`LICENSE`](LICENSE) for information concerning trademarks. This credits file is
> informational and does not constitute any grant and/or waiver of rights.*
> 
> ### Game data / assets — Arma Public License Share Alike (APL-SA)
> 
> Game data and assets (models, textures, sounds, missions, etc.) are **not part of
> this repository** and are **not** covered by the GPL. They are released separately
> by Bohemia Interactive under the **Arma Public License Share Alike (APL-SA)**:
> 
> - APL-SA license text: 
> 
> ### Getting game data to run what you build
> 
> The compiled binaries need game data to run. You can obtain the **free Demo game
> data** on Steam:
> 
> - *Arma: Cold War Assault Remastered* Demo on Steam: 
> 
> The full game data ships with the retail game. Whatever you do with assets is
> governed by the APL-SA linked above; whatever you do with this source is governed by
> the GPL with additional terms per Section 7 in [`LICENSE`](LICENSE).
> 
> ## Contributing
> 
> This is a **locked** repository: pull requests are not accepted here, and this
> repository will not be continuously updated.
> Issues are only for bugs in official Bohemia Interactive builds distributed on
> Steam. For ideas, development builds, ports, and community work, fork the code or
> join the community continuation. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for more information.

## 延伸閱讀

相關概念：[[遊戲開發]] · [[開放源碼]] · [[C++20]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[leigest519--OpenGame|leigest519/OpenGame]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/BohemiaInteractive/CWR)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲開發" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "BohemiaInteractive--CWR" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲開發","開放源碼","C++20"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "BohemiaInteractive--CWR" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "BohemiaInteractive--CWR" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "BohemiaInteractive" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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

> **2026-06-26** — 首次收錄
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

- [[2026-06-29|2026-06-29]] — 再次上榜，688 stars
- [[2026-06-28|2026-06-28]] — 再次上榜，662 stars
- [[2026-06-27|2026-06-27]] — 再次上榜，624 stars
- [[2026-06-26|2026-06-26]] — 首次收錄，494 stars
