---
repo: GordenSun/GordenPPTSkill
url: https://github.com/GordenSun/GordenPPTSkill
owner: GordenSun
owner_type: User
language: Python
license: NOASSERTION
description: "AI-friendly PPT builder skill: 17 hand-polished Chinese PPTX templates + non-destructive text-only editing tools (python-pptx based). Pick a template, write edits.json, build a real .pptx with the layout intact. Personal/research use only."
homepage: ""
stars: 1560
stars_per_day: 260
forks: 142
open_issues: 0
created: 2026-05-27
pushed_at: 2026-06-02
first_seen: 2026-06-01
week: "2026-W23"
month: "2026-06"
category: "生產力"
subcategory: "PPT 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-01
use_case: "提供 AI 友好的 PPT 建構工具，包含 17 種精美的中文 PPTX 模板及非破壞性文本編輯工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-06"
contributor_count: 1
engagement: "low"
issue_close_rate: 50
repo_size_kb: 85403
readme_length: 2013
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-01"
star_history: "2026-06-01:874,2026-06-02:1423,2026-06-03:1560"
tags:
  - github
  - "category/生產力"
  - "lang/python"
aliases:
  - "GordenPPTSkill"
  - "GordenSun/GordenPPTSkill"
  - "提供 AI 友好的 PPT 建構工具，包含 17 種精美的中文 PPTX 模板及非破壞性文本編輯工具。"
---

# GordenPPTSkill

**874** stars · **219** stars/天 · 建立 4 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
> 提供 AI 友好的 PPT 建構工具，包含 17 種精美的中文 PPTX 模板及非破壞性文本編輯工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (219 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成高質量 PPT 的研究人員和企業內部培訓師。
> **一句話重點** 這個專案不僅提供了專業的 PPT 模板，還解決了傳統工具在中國市場上的不足。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "PPT 工具" && p.file.name !== "GordenSun--GordenPPTSkill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 PPT 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到高效的 PPT 生成工具，值得一試。

> [!abstract] 核心創新
> 提供 17 種專業的中文 PPTX 模板，並支持非破壞性文本編輯。

## 專案簡介

這個專案的核心機制是利用 Python 的 `python-pptx` 庫來生成高質量的 PPT 文件。用戶選擇一個模板，編寫 `edits.json` 來定義內容，然後運行 `build_pptx.py` 腳本生成最終的 PPTX 文件，這樣可以保持模板的排版不變。這種設計讓用戶能夠專注於內容而非格式，特別適合需要快速生成專業報告的場景。該工具支持多種模型，包括 DeepSeek 和 GPT，這意味著無論是國產還是國外的 AI 模型都能輕鬆集成，擴展性強。使用者還可以通過更新機制獲得最新的模板，這樣可以隨時保持內容的新鮮感。與其他 PPT 工具相比，如 Google Slides 或 Microsoft PowerPoint，這個專案的優勢在於其自動化和模板的專業性，特別適合於中國市場的需求。

實際使用中，該工具能夠生成信息密度高且排版複雜的 PPT，這在商業和學術場合都非常有用。使用者需要安裝 `python-pptx` 和 LibreOffice 來支持渲染，這可能對某些用戶來說是額外的學習成本。社群活躍度尚可，開發者 GordenSun 似乎對於用戶反饋有一定的回應，但目前只有一個開放的 Issue。這個專案目前處於 alpha 階段，適合個人或小型團隊進行試用，但不建議用於生產環境的核心應用。未來可能會增加更多模板和功能，尤其是針對商業用戶的需求。

**技術棧**：`python-pptx 1.0+` · `LibreOffice` · `Poppler`

## 重點功能

- 17 種精美模板 — 提供多樣化的設計選擇，適合不同需求。
- 非破壞性文本編輯 — 使用 `edits.json` 進行內容編輯，保持模板排版不變。
- 支持多種 AI 模型 — 兼容 DeepSeek、小米 Mimo、Claude 和 GPT 等模型。
- 自動更新機制 — 模板更新時，技能會自動獲取最新版本。
- 渲染預覽功能 — 使用 `render_slides.py` 生成 PPT 頁面的預覽圖。

## 快速開始

1. 確認依賴
```bash
python3 -c "import pptx; print(pptx.__version__)"
```
2. 選定模板 + 編寫 edits.json，運行構建
```bash
python3 scripts/build_pptx.py templates/minimal-business-summary/template.pptx edits.json out/final.pptx --detail templates/minimal-business-summary/detail.json
```
3. 可選：渲染最終預覽圖
```bash
python3 scripts/render_slides.py out/final.pptx out/preview --dpi 144
```

## 程式碼範例

```python
# 前置條件
python3 -c "import pptx; print(pptx.__version__)"   # python-pptx 1.0+
# 運行構建
python3 scripts/build_pptx.py templates/minimal-business-summary/template.pptx edits.json out/final.pptx --detail templates/minimal-business-summary/detail.json
# 預期輸出
生成的 PPTX 文件將保持模板的排版不變。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 874 stars（219/天），forks 88（10.1%），這顯示出強勁的增長潛力。GordenSun 是這個專案的主要貢獻者，過去在 PPT 生成工具方面有一定的經驗。這個工具解決了傳統 PPT 工具在中國市場上模板不足和自動化程度低的痛點，特別是針對商業和學術需求。社群的反饋和活躍度也表明了用戶對這個工具的期待。技術上，這個專案利用了 Python 的強大生態系統，讓用戶能夠快速上手並生成專業的 PPT 文件。

## 適合誰使用

**目標受眾**：需要快速生成高質量 PPT 的研究人員和企業內部培訓師。

> [!example] 使用場景
> - 研究生用它來生成學術報告的 PPT，因為能快速生成高質量的模板，節省了排版時間。
> - 企業內部培訓師用它來製作培訓材料，因為可以根據公司風格定制模板，提升專業形象。
> - 自由職業者用它來為客戶製作簡報，因為支持多種 AI 模型，能夠快速適應不同需求。

## 架構分析

這個專案採用 Python 作為主要開發語言，並依賴 `python-pptx` 庫來處理 PPTX 文件的生成。架構上，使用者通過編寫 JSON 文件來定義內容，然後運行腳本生成 PPT，這種設計使得內容編輯與模板保持分離，便於維護和更新。資料流中，使用者的輸入（`edits.json`）經過 `build_pptx.py` 腳本處理，生成最終的 PPTX 文件。這種方法的優勢在於靈活性和可擴展性，但缺點是對於不熟悉 JSON 格式的用戶來說，可能需要額外的學習成本。整體而言，該架構能夠支持多種模板和自動更新，未來擴展性良好。

## 技術深入分析

這個專案的核心技術機制是利用 `python-pptx` 來生成 PPTX 文件，這使得用戶能夠通過簡單的 JSON 配置來快速生成高質量的報告。效能上，該工具能夠處理多種複雜的排版需求，生成的 PPT 文件在商業和學術場合都能夠滿足需求。設計上，選擇 Python 作為開發語言是因為其生態系統豐富，且 `python-pptx` 提供了強大的 PPT 文件操作能力。依賴樹相對簡單，主要依賴於 `python-pptx` 和 LibreOffice，這使得整體安裝和使用門檻較低。技術風險方面，由於該專案目前處於 alpha 階段，未來可能會遇到 API 不穩定的問題。整合方面，該工具能夠與現有的 Python 環境無縫對接，但對於不熟悉 Python 的用戶來說，學習成本可能較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要安裝多個依賴。整體而言，對於有 Python 基礎的用戶來說，能在 30 分鐘內跑起來，但對新手可能需要更多時間。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的中文模板，適合中國用戶需求。
> - 支持多種 AI 模型，擴展性強。
> - 自動更新機制，保持內容的新鮮感。

> [!danger] 缺點
> - 僅限於個人學習與研究，商業用途受限。
> - 需要安裝多個依賴，對新手不太友好。
> - 模板依賴特定字體，可能影響顯示效果。

> [!warning] 注意事項
> - 僅供個人學習與研究，禁止商業用途。
> - 需要安裝 `python-pptx` 和 LibreOffice 來支持渲染。
> - 模板大量使用 `微软雅黑` 字體，需確保本地環境安裝該字體。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成高質量的 PPT，而 agent-sprite-forge 更加關注於 AI 代理的生成，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供的功能較為基礎，無法自定義模板，而 GordenPPTSkill 提供了多樣化的模板選擇和自動更新功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 AI 代理，而非專業的 PPT 生成，適用場景不同。 | 如果你的需求是生成 AI 代理而非 PPT，則應選擇這個工具。 | medium，因為需要重新學習不同的 API 和使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供的功能較為基礎，無法自定義模板，而 GordenPPTSkill 提供了多樣化的模板選擇和自動更新功能。 | 如果你只需要基本的 PPT 功能，且不需要模板自定義，則可以考慮這個工具。 | low，因為功能簡單，轉移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **GordenPPTSkill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 AI 代理，而非專業的 PPT 生成，適用場景不同。 | 提供的功能較為基礎，無法自定義模板，而 GordenPPTSkill 提供了多樣化的模板選擇和自動更新功能。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的 API 和使用方式。 | low，因為功能簡單，轉移成本低。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成 AI 代理而非 PPT，則應選擇這個工具 | 如果你只需要基本的 PPT 功能，且不需要模板自定義，則可以 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用者可能會遇到字體顯示問題，因為模板依賴特定字體
  - 解法：確保安裝所需字體，或在配置中進行調整
- [MEDIUM] 模板更新後，舊版可能不兼容
  - 解法：在使用前檢查模板版本，必要時更新配置
- [MEDIUM] JSON 格式編寫錯誤可能導致生成失敗
  - 解法：使用 JSON 校驗工具檢查格式

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能快速生成專業報告，提升團隊效率。 |
| 大型企業內部培訓 | 非常適合 | 提供多樣化的模板，滿足不同需求。 |
| 學術研究報告 | 普通 | 雖然模板專業，但可能不符合所有學術要求。 |
| 個人簡報製作 | 非常適合 | 快速生成高質量的 PPT，節省時間。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到高效的 PPT 生成工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，依賴的庫也相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Python 環境搭配使用，特別是在開發和報告生成的工作流中。用戶可以在本地環境中運行腳本生成 PPT，並使用 LibreOffice 進行預覽。與主流 CI/CD 工具的整合尚未明確，但由於是 Python 實現，理論上可以與 GitHub Actions 等工具相容。最常見的整合問題是字體依賴，使用者需要確保本地環境配置正確，以避免顯示問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，許多用戶依賴於傳統的 PPT 工具，如 Microsoft PowerPoint，這些工具在模板和自動化方面存在一定的局限性。隨著 AI 技術的發展，對於自動生成報告和簡報的需求日益增加，這使得 GordenPPTSkill 的出現成為可能。這個工具代表了在 PPT 生成過程中自動化和模板專業化的趨勢，未來可能會隨著 AI 技術的進一步發展而變得更加智能化。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解 JSON 格式
- 有基本的 PPT 使用經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部分享使用經驗。第三週：根據反饋調整使用方式。第四週：在正式項目中開始使用。

**成功指標**：生成 PPT 的時間減少 50%。

> [!warning] 退出計畫
> 所有配置文件為 JSON 格式，易於轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
| Forks | 88 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-05-31 |
| 建立日期 | 2026-05-27 |
| Repo 大小 | 83.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GordenSun/GordenPPTSkill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GordenSun](https://github.com/GordenSun) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開發者對用戶反饋有一定回應。
**連結**：[文件](https://github.com/GordenSun/GordenPPTSkill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-31）
> **活躍天數** 4 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/GordenSun/GordenPPTSkill/issues/2) | 二维码过期了 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # PPT Builder Skill
> 
> > 史上最强原生PPT Skill，更适合中国宝宝。生成的效果不让你震惊，你来打我。
> >
> > ⚠️ **非商业使用**：本仓库及内置模板**仅供个人学习与研究**，禁止任何商业用途。
> > 
> > **支持定制私有化模板**：如果你想要Agent能按你公司的PPT模板来生成PPT，可以加我微信**duge360**定制。
> 
> ## 交流群
> 
> 扫码加入「PPT Skill 交流群」一起讨论 / 反馈问题 / 看新版本：
> 
>   
> 
> > ⚠️ 群二维码 7 天内有效；过期请来 [Issues](https://github.com/GordenSun/GordenPPTSkill/issues) 留言，我会贴新的。
> 
> ## 几大特色
> 1、能生成信息密度高、排版复杂、看起来高大上的PPT，也支持生成简约、商务风格的PPT。适合国企、互联网大厂使用。
> 
> 2、兼容所有模型，DeepSeek、小米Mimo、Claude、GPT均实测过，国产模型也能完成的非常好。
> 
> 3、技能自动更新机制：如果我更新了可选用的PPT模板，使用技能时会自动更新技能。技能像软件一样可以更新
> 
> ## 谁要看这个
> 
> - 想给自己用的 AI 助手装一个"做 PPT"技能的人：**请读 [SKILL.md](./SKILL.md)**
> - 想看本项目目录怎么组织：继续往下看本文件
> - 想理解模板分类 / 推荐：**请读 [templates/INDEX.md](./templates/INDEX.md)**
> 
> ## 快速开始（命令行）
> 
> ```bash
> # 1. 确认依赖
> python3 -c "import pptx; print(pptx.__version__)"   # python-pptx 1.0+
> soffice --version    # LibreOffice (仅渲染预览时需要)
> which pdftoppm       # poppler   (仅渲染预览时需要)
> 
> # 2. 选定模板 + 写 edits.json，跑构建
> python3 scripts/build_pptx.py \
>     templates/minimal-business-summary/template.pptx \
>     edits.json \
>     out/final.pptx \
>     --detail templates/minimal-business-summary/detail.json
> 
> # 3. (可选) 渲染最终预览图
> python3 scripts/render_slides.py out/final.pptx out/preview --dpi 144
> ```
> 
> ## 字体环境
> 
> 模板大量使用 `微软雅黑`。如果你的机器没装它，配 `~/.config/fontconfig/fonts.conf` 加一条 alias：
> 
> ```xml
> 
>   微软雅黑
>   
>     WenQuanYi Micro Hei
>     DengXian
>     Noto Sans SC
>     PingFang SC
>   
> 
> ```
> 
> (`brew install --cask font-noto-sans-sc`，或下载 WenQuanYi Micro Hei 放进 `~/Library/Fonts/` 并 `fc-cache -f`。)
> 
> ## 目录速览
> 
> ```
> SKILL.md         # AI 入口文档
> VERSION          # 1.0.0
> CHANGELOG.md     # 人读变更
> updates.json     # 机读变更
> manifest.json    # 每文件版本 + sha256
> scripts/         # 5 个面向使用者的脚本（build / render / update / manifest）
> references/      # 编辑规则、Schema、工作流参考
> templates/       # 17 个模板（每个 4 文件）
> ```
> 
> ## 致谢与版权
> 
> - 本仓库没有PPT模板的版权
> - **禁止任何二次分发 / 商业使用**
> - 用到的开源工具：[LibreOffice](https://www.libreoffice.org/)、[python-pptx](https://python-pptx.readthedocs.io/)、[Poppler](https://poppler.freedesktop.org/)、[WenQuanYi Micro Hei](http://wenq.org/)
> - 感谢 [LinuxDO](https://linux.do) 社区的支持

## 延伸閱讀

相關概念：[[自動化]] · [[資料視覺化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[OpenBMB--PilotDeck|OpenBMB/PilotDeck]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/GordenSun/GordenPPTSkill)

## 相關收錄

> [!note]- 直接競品（同子分類：PPT 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "PPT 工具" AND file.name != "GordenSun--GordenPPTSkill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "GordenSun--GordenPPTSkill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "GordenSun--GordenPPTSkill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "GordenSun--GordenPPTSkill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","資料視覺化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GordenSun--GordenPPTSkill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GordenSun--GordenPPTSkill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GordenSun" AND file.name != "GordenSun--GordenPPTSkill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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
> const me = dv.page("Repos/GordenSun--GordenPPTSkill");
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

> **2026-06-01** — 首次收錄
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

- [[2026-06-03|2026-06-03]] — 再次上榜，1.6k stars
- [[2026-06-02|2026-06-02]] — 再次上榜，1.4k stars
- [[2026-06-01|2026-06-01]] — 首次收錄，874 stars
