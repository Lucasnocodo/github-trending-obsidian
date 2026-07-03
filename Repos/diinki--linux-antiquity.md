---
repo: diinki/linux-antiquity
url: https://github.com/diinki/linux-antiquity
owner: diinki
owner_type: User
language: QML
license: MIT
description: "A highly tasteful Linux-theme, reminiscent of art-nouveau and old drawings related to astronomy, science, and mythology."
homepage: ""
stars: 505
stars_per_day: 101
forks: 10
open_issues: 1
created: 2026-06-27
pushed_at: 2026-06-30
first_seen: 2026-07-03
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "桌面主題"
release_tag: "v0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-03
use_case: "提供一個藝術風格的 Linux 主題，靈感來自於藝術新風格和古老的天文、科學及神話插圖。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-10"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 100967
readme_length: 5845
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-03"
star_history: "2026-07-03:505"
tags:
  - github
  - "category/其他"
  - "lang/qml"
aliases:
  - "linux-antiquity"
  - "diinki/linux-antiquity"
  - "提供一個藝術風格的 Linux 主題，靈感來自於藝術新風格和古老的天文、科學及神話插圖。"
---

# linux-antiquity

**505** stars · **101** stars/天 · 建立 5 天前 · QML · MIT

```dataviewjs
const me = dv.page("Repos/diinki--linux-antiquity");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1`

> [!summary] 一句話摘要
> 提供一個藝術風格的 Linux 主題，靈感來自於藝術新風格和古老的天文、科學及神話插圖。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 喜愛藝術風格並希望在 Linux 桌面上展現個性化的使用者。
> **一句話重點** 這個專案不僅是一個主題，更是一個藝術表達的實驗，讓使用者在桌面環境中感受到藝術的魅力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/diinki--linux-antiquity");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "桌面主題" && p.file.name !== "diinki--linux-antiquity" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 桌面主題 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，得到獨特的藝術桌面體驗，值得藝術愛好者嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將藝術新風格與現代桌面環境相結合，創造出獨特的視覺體驗。

## 專案簡介

Linux Antiquity 是一個以藝術新風格為靈感的 Linux 主題，專為喜愛古典美學的使用者設計。使用者可以透過安裝腳本 `./install.sh` 來快速安裝，該腳本會自動移動相關目錄到 `~/.config`，並在發現依賴缺失時提供通知。主題包含多種小工具，例如天氣小工具，使用者需要手動編輯配置檔案來設置監視器細節和壁紙路徑。這個主題的賣點在於其獨特的視覺風格，讓使用者的桌面環境充滿藝術感。技術上，它依賴於 `Hyprland`、`Kitty` 和 `Nemo` 等工具，這些工具的選擇使得主題能夠在現代 Linux 環境中運行。

與其他主題相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，Linux Antiquity 更加專注於藝術表現，而非功能性，這使得它在視覺上更具吸引力，但在性能優化上尚未成熟。由於目前版本為 v0.1，許多功能仍在開發中，使用者需謹慎使用。社群活躍度不高，只有一個開放問題，顯示出這個專案仍在起步階段。對於喜愛個性化桌面環境的使用者來說，這是一個值得關注的選擇，但不建議在生產環境中使用。

**技術棧**：`QML` · `JavaScript` · `Shell` · `Lua`

## 重點功能

- 藝術風格設計 — 主題靈感來自藝術新風格和古老的插圖，提供獨特的視覺體驗。
- 自訂化選項 — 使用者可手動編輯配置檔案來設置監視器和壁紙。
- 天氣小工具 — 支援透過 Open Weather Map API 顯示即時天氣資訊。
- 安裝腳本 — 透過 `./install.sh` 自動安裝並備份現有配置。
- 多種依賴支持 — 需要 `Hyprland`、`Kitty` 和 `Nemo` 等現代工具以確保功能正常。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/diinki/linux-antiquity.git && cd linux-antiquity
```
2. 運行安裝腳本
```bash
./install.sh
```
3. 手動編輯配置檔案以設置監視器和壁紙
```bash
nano ~/.config/hypr/hyprland.lua
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 505 stars（101/天），forks 10（2.0%），顯示出一定的關注度。作者 diinki 似乎專注於藝術風格的桌面主題，解決了市場上缺乏美學主題的痛點。這個專案的推出可能受到社群對於個性化桌面環境需求的驅動。forks/stars 比率低，顯示出使用者對於這個主題的實際修改意願不高，可能是因為它仍處於早期開發階段。

## 適合誰使用

**目標受眾**：喜愛藝術風格並希望在 Linux 桌面上展現個性化的使用者。

> [!example] 使用場景
> - 藝術設計師用它來美化自己的 Linux 桌面環境，因為它的藝術風格能夠激發創意，提升工作氛圍。
> - 喜愛自訂桌面的使用者用它來打造獨特的視覺體驗，因為它提供了多種可自訂的選項，讓桌面不再單調。
> - Linux 使用者用它來展示個人品味，因為這個主題的獨特設計能夠引起他人的注意，成為話題。
> - 開發者用它來在開發環境中增添藝術氛圍，因為它的設計能夠減輕長時間編碼的疲勞感。

## 架構分析

Linux Antiquity 採用模組化的設計，主要由 QML 和 Lua 組成，這使得主題能夠靈活地與 Hyprland 整合。資料流方面，使用者的配置會被安裝腳本自動移動到指定目錄，並在運行時讀取這些配置。這樣的設計使得使用者能夠快速上手，但也帶來了手動編輯配置的需求，這對於新手來說可能是一個挑戰。選擇 QML 作為主要語言是因為其在 UI 開發中的優勢，但這也意味著對於不熟悉 QML 的使用者來說，學習曲線會稍微陡峭。整體架構的擴展性良好，但依賴於多個外部工具可能會在未來造成整合上的摩擦。

## 技術深入分析

Linux Antiquity 的核心技術機制在於使用 QML 和 Lua 來構建其 UI，這使得主題能夠靈活地與 Hyprland 整合。由於 QML 專注於 UI 開發，這使得主題在視覺呈現上具有優勢，但也要求使用者對 QML 有一定的了解。效能方面，由於目前版本尚未優化，使用者在使用過程中可能會遇到延遲或卡頓的情況，尤其是在資源有限的系統上。設計選擇上，使用 Lua 作為配置語言使得使用者能夠靈活地編輯配置，但這也增加了學習成本。整體架構的依賴性較高，使用者需要安裝多個外部工具，這可能會在未來造成整合上的摩擦。對於新手來說，手動編輯配置檔案的需求可能會成為一個障礙，但這也為有經驗的使用者提供了更大的靈活性。整合到現有的 Linux 桌面環境中，使用者需要考慮到與其他主題或工具的相容性，這可能會影響整體使用體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和配置說明，但缺乏具體的範例。安裝過程相對順暢，安裝腳本能夠自動處理大部分配置。沒有提供詳細的入門指南，對於新手來說可能需要額外的學習時間。文件目前僅有英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 獨特的藝術風格，讓桌面環境更具個性。
> - 可自訂化選項，滿足不同使用者的需求。
> - 安裝腳本簡化了安裝過程，降低了使用門檻。
> - 支援天氣小工具，增強了實用性。

> [!danger] 缺點
> - 性能優化尚未完成，可能影響使用體驗。
> - 需要手動編輯配置檔案，對新手不友好。
> - 目前版本功能有限，尚在開發中。
> - 依賴多個外部工具，增加了安裝複雜度。

> [!warning] 注意事項
> - 目前版本為 v0.1，許多功能仍在開發中。
> - 性能優化尚未完成，可能在某些環境下運行不流暢。
> - 需要手動編輯配置檔案，對於新手可能不友好。
> - 僅支援特定的 Linux 環境，依賴於多個外部工具。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的工具，功能性強於美學，而 Linux Antiquity 更注重於視覺藝術表現。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種桌面主題選擇，但缺乏 Linux Antiquity 的藝術風格和個性化設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的工具，功能性強於美學，而 Linux Antiquity 更注重於視覺藝術表現。 | 如果你的專案需要強大的功能性和擴展性，而不僅僅是美學，則應選擇此工具。 | medium，因為需要重新設計 UI 和功能邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種桌面主題選擇，但缺乏 Linux Antiquity 的藝術風格和個性化設計。 | 如果你需要多樣化的主題選擇而不特別關注藝術風格，則應選擇此工具。 | low，因為主題的整合相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **linux-antiquity** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建 AI 代理的工具，功能性強於美學，而 Linux Antiquity 更注重於視覺藝術表現。 | 提供多種桌面主題選擇，但缺乏 Linux Antiquity 的藝術風格和個性化設計。 |
> | 遷移成本 | - | medium，因為需要重新設計 UI 和功能邏輯。 | low，因為主題的整合相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案需要強大的功能性和擴展性，而不僅僅是美學，則應選 | 如果你需要多樣化的主題選擇而不特別關注藝術風格，則應選擇此工 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合藝術愛好者試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上安裝過程可能會因缺少依賴而失敗
  - 解法：確保所有依賴都已安裝，安裝腳本會提供通知
- [MEDIUM] 手動編輯配置檔案可能會導致錯誤
  - 解法：仔細按照 README 中的註解進行編輯
- [MEDIUM] 性能未優化可能導致使用體驗不佳
  - 解法：在資源較好的系統上運行，並定期檢查更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 藝術設計師的個人桌面環境 | 非常適合 | 主題的藝術風格能夠激發創意，提升工作氛圍。 |
| 喜愛自訂桌面的 Linux 使用者 | 非常適合 | 提供多種自訂化選項，滿足不同需求。 |
| 需要穩定性能的生產環境 | 不適合 | 目前版本尚未優化，可能影響使用體驗。 |
| 新手 Linux 使用者 | 普通 | 需要手動編輯配置檔案，對新手不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到獨特的藝術桌面體驗，值得藝術愛好者嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴的外部工具需自行評估安全性，但整體風險較低。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Linux Antiquity 最常與 Hyprland、Kitty 和 Nemo 等工具搭配使用，這些工具在桌面環境中負責不同的功能。使用者可以在 Hyprland 中運行該主題，並利用 Kitty 進行終端操作。在一個使用 Hyprland 的環境中，安裝 Linux Antiquity 後，可以透過 `./install.sh` 自動配置相關設置。與主流工具鏈的相容性良好，但需要注意版本依賴，某些功能可能在不同版本中表現不一。整合的摩擦點主要在於手動配置的需求，這可能會對新手造成困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Linux 桌面環境中，許多主題專注於功能性而非美學，導致使用者在個性化方面受到限制。Linux Antiquity 的出現填補了這一空白，將藝術風格引入現代桌面環境。隨著對個性化和美學的需求增加，這個專案的推出正好符合了使用者的期待。

未來，隨著更多藝術主題的出現，Linux Antiquity 可能會成為一個重要的參考案例，推動桌面環境的美學進化。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Linux 環境
- 了解 QML 基本語法
- 有一定的藝術設計感

> [!tip] 導入策略
> 第一週：在個人電腦上試用，收集使用反饋。第二週：在小型團隊內部分享，鼓勵其他成員使用。第三週：根據反饋進行調整，優化使用體驗。第四週：撰寫使用手冊，分享最佳實踐。

**成功指標**：使用者滿意度提升，桌面環境美觀度提高。

> [!warning] 退出計畫
> 若需退出，將所有配置備份並恢復原有主題即可。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/diinki--linux-antiquity");
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
> const me = dv.page("Repos/diinki--linux-antiquity");
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
| Forks | 10 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-30 |
| 建立日期 | 2026-06-27 |
| Repo 大小 | 98.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/diinki/linux-antiquity) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "QML" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@diinki](https://github.com/diinki) | 5 |

**最新版本**：v0.1 — Linux Antiquity v0.1 - First version. (2026-06-28)

> [!info]- Release Notes
> # Linux Antiquity v0.1
> 
> The first early version of the Linux Antiquity theme.
> 
> Please be mindful of using this version! As stated in the readme of v0.1, it is first and foremost an art project.
> 
> A lot of the code is in a proof-of-concept state and will be refactored, and a lot of the designs may improve and change.
> Optimization was likewise not a priority for this version.
> 
> All that being said, it works and runs well for me.

## 社群與生態

**社群活躍度**：社群活躍度不高，目前只有一個開放問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-27 ~ 2026-06-30）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #1 from fizzli-mochi/kitty-zoom-fix

## README 摘錄

> [!info]- 展開查看原文 README
> #  Linux Antiquity 
> 
>  **A highly tasteful, customizable & feature-rich Linux-theme reminiscent of art-nouveau and old drawings related to astronomy, science, and mythology.** 
> 
>  
>  
>  
> 
> | theme picker                       | 
> | ---------------------------------- | 
> |  |
> |                                    |                                   
> 
> | weather widgets                     |                                    |
> | ----------------------------------  | ---------------------------------- |
> | ||
> |                                     |          
> 
> *And much more...* Wallpapers can be found in my [wallpapers repo](https://github.com/diinki/wallpapers).
> 
> ___
> 
> > [!CAUTION]
> > This theme is first and foremost an art project which entails that as of version 0.1 the main focus was to get a proof of concept done and ready for my video about this theme, so **INSTALL AND USE AT YOUR OWN RISK!**
> >
> >A lot of the code, a **large** portion will be refactored post version 0.1, and a lot of designs may change and be improved.
> >
> >Performance of the UI was not a concern as of version 0.1, but regardless it runs well for me. Just keep in mind that it isn't optimized yet.
> >
> >If you intend to use this theme, do subscribe/follow this repo to be notified of any updates. I recommend installing the latest version of the theme often from the releases page.
> >
> >I'm quite busy, but I will try to improve and update this theme as much as I can since I will be using this as my main theme.
> ____
> 
> ### Dependencies 📦
> 
> > [!TIP]
> > The install script should notify you if anything is missing. It will also create backups if any existing directories are found.
> 
> **Required Software:**
> * `Hyprland` (>0.55) - we use lua now!
> * `Hyprpaper` *For wallpapers*
> * `Quickshell` (>0.3.0)
> * `Kitty` *Terminal configs use by default*
> * `Nemo` *File explorer configs use by default*
> * `Mako`
> * `jq`
> * `socat`
> 
> **Recommended Software:**
> * `nwg-look` To easily set icon theme, gtk theme, cursors etc
> * `dconf` & `dconf-editor` To easily set environment variables related to the theme.
> 
> ### Editing crucial sections ⚠️
> Things such as Monitor details, wallpaper directories, and also creating an open weather map account for weather widget data have to be done manually for now.
> 
> Edit `~/.config/hypr/hyprland.lua` & `~/.config/hypr/hyprpaper.conf`
> to set monitor details, I've commented the files in a detailed manner so it shouldn't be hard to figure this out.
> 
> To enable weather widget support simply open the settings menu of the theme using the left side-bar buttons.
> 
> You'll be able to see where to input [open weather map](https://openweathermap.org/) details. Its free and lets you use the beautiful weather widget!
> 
> > [!NOTE]
> > Open weather map is lovely! They provide more than enough free API calls and  detailed data that is used by the theme weather widgets.
> 
> > [!NOTE]
> > I am considering creating a settings tab specifically for setting monitor data in order to reduce the amount of config file editing, do look forward to that!
> 
> ### Setting quickshell-specific Icon Themes 🎨
> You can find and use your own icon theme but you will need to customize the top lines of code in the `~/.config/quickshell/shell.qml` directory to set the icon theme in the quickshell UI specifically. Namely:
> 
> `~/.config/quickshell/shell.qml`:
> ```
> /* NOTE: CHANGE THESE IF YOU WANT TO USE A DIFFERENT ICON THEME:*/
> //@ pragma IconTheme buuf-nestort
> //@ pragma Env QS_ICON_THEME=buuf-nestort
> ```
> 
> I have included an icon theme that I think fits well in this repo as well (buuf-nestort). But feel free to pick your own.
> 
> Make sure to place the icon theme folders in `~/.local/share/icons` in order for them to be found.
> 
> ### External Themes 🎨
> I decided to not include things such as GTK theme and cursor theme into this repo, because those are highly up to you and I think there's a wide range of styles that would look well with this theme.
> 
> ### Installation ⬇️
> Simply run the install script `./install.sh` and it should move the relevant directories to your `~/.config` folder. If you prefer to do this yourself then you can simply find the config directories in this repo and move them manually.
> 
> The install script will create backups of existing directories before it replaces them, and it will also notify you if any dependencies are missing.
> 
> This theme does require some manual config file editing in order to setup wallpapers, monitors, and also set the kitty terminal theme to whichever one you want.
> 
> I've made a set of kitty terminal themes that match each relevant theme that comes with Linux Antiquity by default.
> 
> > [!NOTE]
> >I might also make a more detailed installation video guide later on, I'll link that here in the future.
> 
> ### Default keybinds *️⃣
> You can edit and view the default keybinds in `~/.config/hypr/hyprland.lua`.
> These are just my personal preferences, so feel entirely free to edit them.
> 
> > [!NOTE]
> > I might make editing keybinds part of the settings menu in the future, along with other things you'd usually edit config files manually for!
> 
> - `mod` = the super key, (the windows key, as some people refer to it as). You can re-bind mod to something else if you wish.
> 
> - `mod` + `Enter` = launch terminal.
> - `mod` + `D` = open application launcher popup.
> - `mod` + `E` = open file explorer launcher popup.
> - `mod` + `[any number, 1-9]` = switch focus to the workspace equivalent to the number.
> - `mod` + `Shift` + ` [any number, 1-9]` = move the focused/hovered window to the workspace equivalent to the number.
> - `mod` + `Shift` + ` Space` = toggle floating mode for the focused/hovered window.
> - `mod` + `Q` = Exit/Kill the focused/hovered window.
> - `mod` + `F` = toggle full-screen mode for the focused/hovered window.
> - `mod` + `Right Mouse Button` + `move mouse` = re-size a window
> - `mod` + `Left Mouse Button` + ``move mouse``= move a window

## 延伸閱讀

相關概念：[[桌面主題]] · [[自訂化]] · [[藝術設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/diinki/linux-antiquity)

## 相關收錄

> [!note]- 直接競品（同子分類：桌面主題）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "桌面主題" AND file.name != "diinki--linux-antiquity"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "diinki--linux-antiquity"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "QML" AND file.name != "diinki--linux-antiquity" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "diinki--linux-antiquity"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["桌面主題","自訂化","藝術設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "diinki--linux-antiquity" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/diinki--linux-antiquity");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "diinki--linux-antiquity" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "diinki" AND file.name != "diinki--linux-antiquity"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/diinki--linux-antiquity");
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
> const me = dv.page("Repos/diinki--linux-antiquity");
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
> const me = dv.page("Repos/diinki--linux-antiquity");
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
> const me = dv.page("Repos/diinki--linux-antiquity");
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
> const me = dv.page("Repos/diinki--linux-antiquity");
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

> **2026-07-03** — 首次收錄
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

- [[2026-07-03|2026-07-03]] — 首次收錄，505 stars
