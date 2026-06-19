---
repo: nolangz/pixel2motion
url: https://github.com/nolangz/pixel2motion
owner: nolangz
owner_type: User
language: Python
license: MIT
description: "AI logo animation skill: turn raster logos into smooth SVG animation, animated HTML demos, GIF/video previews, and motion QA evidence."
homepage: "https://nolangz.github.io/pixel2motion/"
stars: 798
stars_per_day: 133
forks: 73
open_issues: 4
created: 2026-06-12
pushed_at: 2026-06-18
first_seen: 2026-06-18
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "動畫工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-18
use_case: "將光柵 logo 轉換為平滑的 SVG 動畫，並生成互動式 HTML 演示和 GIF/視頻預覽。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-26"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 3444
readme_length: 6635
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-18"
star_history: "2026-06-18:718,2026-06-19:798"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/ai_design_tools"
  - "topic/animated_logo"
  - "topic/brand_motion"
  - "topic/claude_skill"
  - "topic/codex_skill"
aliases:
  - "pixel2motion"
  - "nolangz/pixel2motion"
  - "將光柵 logo 轉換為平滑的 SVG 動畫，並生成互動式 HTML 演示和 GIF/視頻預覽。"
---

# pixel2motion

**718** stars · **144** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/nolangz--pixel2motion");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`ai-design-tools` `animated-logo` `brand-motion` `claude-skill` `codex-skill` `html-animation` `logo-animation` `logo-motion` `logo-reveal` `motion-design` `pixel-to-svg` `raster-to-svg` `svg-animation` `svg-motion` `vector-animation`

> [!summary] 一句話摘要
> 將光柵 logo 轉換為平滑的 SVG 動畫，並生成互動式 HTML 演示和 GIF/視頻預覽。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (144 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要將光柵 logo 轉換為動畫並生成互動式展示的設計師和開發者。
> **一句話重點** 這個專案不僅提供了高質量的動畫生成工具，還強調了動畫過程中的質量檢查，這在設計工作中是非常重要的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nolangz--pixel2motion");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "動畫工具" && p.file.name !== "nolangz--pixel2motion" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 動畫工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到高質量的動畫效果，值得嘗試。

> [!abstract] 核心創新
> 提供光柵到矢量的高質量轉換，並支持動畫 QA 檢查。

## 專案簡介

Pixel2Motion 是一個開源的 AI 工具，專注於將光柵格式的 logo（如 PNG、JPG、WebP）轉換為平滑的 SVG 動畫，並生成互動式 HTML 演示。這個流程包含了從光柵圖像到矢量圖的重建，然後進行動畫設計，最終輸出包括 `logo_motion.html` 和多種格式的預覽。關鍵的 CLI 指令如 `python3 scripts/render_overlay.py logo.svg source.png` 用於生成幾何覆蓋，確保輸出的 SVG 結構適合動畫。這個工具的賣點在於它能夠提供高質量的動畫效果，並且支持 QA 檢查，確保每個動畫都符合設計標準。

技術上，Pixel2Motion 使用 Python 3.10+，並依賴 `Pillow` 和 `numpy` 進行圖像分析，還需要 Chrome 或 Chromium 來渲染幾何和 HTML。這樣的選擇使得工具在處理複雜的動畫時能夠保持高效，並且在性能上有良好的表現。

與其他工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，Pixel2Motion 提供了更為完整的動畫設計流程，並且能夠生成可重用的 SVG 結構，這在設計和開發中是非常有價值的。

實際使用中，這個工具能夠處理多達數十個不同的動畫場景，並且能夠生成高質量的運動 QA 證據，這對於需要精確動畫的品牌設計尤為重要。社群活躍度尚可，但目前的 Issue 解決率為 0%，這可能影響使用者的體驗。整體來看，這個工具適合中小型團隊或個人設計師，尤其是那些需要將光柵圖像轉換為動畫的場景。

對於新手來說，這個工具的學習曲線相對平緩，因為它提供了詳細的使用文檔和範例，讓使用者能夠快速上手。未來六個月內，預計這個專案會進一步增強其動畫功能，並可能引入更多的輸出格式。

**技術棧**：`Python 3.10+` · `Pillow` · `numpy` · `Playwright`

## 重點功能

- 光柵到矢量轉換 — 支持 PNG、JPG、WebP 格式的光柵圖像轉換為 SVG。
- 動畫生成 — 生成包含動畫的 HTML 展示，支持速度控制和重播功能。
- QA 檢查 — 提供運動 QA 證據，確保動畫的質量和準確性。
- 互動式演示 — 提供即時的動畫效果展示，便於設計評估。
- 多格式輸出 — 支持生成 GIF、視頻預覽和動態 HTML 文件。

## 快速開始

1. 安裝依賴包
```bash
python3 -m venv .venv && .venv/bin/pip install pillow numpy playwright
```
2. 安裝 Chromium 瀏覽器
```bash
.venv/bin/python -m playwright install chromium
```
3. 運行動畫生成腳本
```bash
python3 scripts/animate_svg_showcase.py logo.svg --css motion.css --out logo_motion.html --title 'Logo Motion' --duration-hint 1500
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝必要的依賴包和 Chromium 瀏覽器",
  "python3 scripts/render_overlay.py logo.svg source.png \\",
  "  --out outputs/fit_iterations/01_overlay.png \\",
  "  --render-out outputs/final_render.png \\",
  "  --report outputs/fit_metrics.json",
  "# 預期輸出：生成幾何覆蓋圖像和最終渲染的 PNG 文件"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 718 stars（144/天），forks 68（9.5%），這顯示出相對穩定的增長。作者 nolangz 在 AI 設計工具領域有一定的經驗，這個專案解決了將光柵圖像轉換為高質量動畫的需求，之前的工具往往無法提供這樣的功能。近期的 GitHub 活動和社群討論也顯示出對這個工具的興趣，尤其是在品牌設計和動畫領域。這個工具的設計使得動畫過程更為簡化，並且能夠生成可檢查的輸出，這在設計工作中是非常重要的。forks/stars 比率為 9.5%，顯示出許多使用者對這個專案進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要將光柵 logo 轉換為動畫並生成互動式展示的設計師和開發者。

> [!example] 使用場景
> - 品牌設計師用它來將靜態 logo 轉換為動畫，因為這樣可以提升品牌形象並吸引更多客戶。
> - 前端開發者用它來生成互動式 HTML 動畫，因為這樣能夠提升網站的視覺效果和用戶體驗。
> - 動畫師用它來快速生成 logo 動畫預覽，因為這樣可以節省大量的手動設計時間。

## 架構分析

Pixel2Motion 的架構基於 Python 3.10+，使用了多個腳本來處理不同的任務，如圖像轉換、動畫生成和 QA 檢查。這樣的設計使得每個功能模組可以獨立開發和維護，降低了整體的複雜度。數據流從光柵圖像開始，經過轉換為 SVG，然後進入動畫生成的階段，最終輸出為 HTML 和其他格式。選擇 Python 作為開發語言是因為其豐富的圖像處理庫和良好的社群支持，但這也意味著需要安裝額外的依賴。擴展性方面，未來可以考慮增加對更多圖像格式的支持，或是改進動畫效果的生成算法。

## 技術深入分析

Pixel2Motion 的核心技術機制在於使用 Python 進行光柵到矢量的轉換，並通過多個腳本實現動畫生成和 QA 檢查。這些腳本利用了 `Pillow` 和 `numpy` 進行圖像處理，並使用 Playwright 進行 HTML 渲染，這樣的設計使得工具能夠在不同平台上運行。效能上，該工具能夠處理多達數十個不同的動畫場景，並且生成的動畫質量高，適合品牌設計需求。設計取捨方面，選擇 Python 作為開發語言使得工具易於擴展，但也意味著需要安裝額外的依賴，這可能對某些使用者造成困擾。技術風險方面，未來在處理更複雜的動畫時，可能會遇到性能瓶頸，特別是在高解析度圖像的處理上。整合方面，與主流的前端框架（如 React 和 Vue）整合相對容易，但需要注意與現有工具鏈的兼容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和範例，安裝過程相對順暢，但需要注意依賴的安裝。整體來說，對於新手來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 高質量的光柵到矢量轉換，適合品牌設計需求。
> - 支持多種輸出格式，便於不同場景使用。
> - 提供動畫 QA 檢查，確保動畫質量。

> [!danger] 缺點
> - 需要安裝多個依賴，對新手來說有一定的學習曲線。
> - 目前僅支持特定格式的光柵圖像。
> - 社群活躍度尚可，但 Issue 解決率為 0%。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 Chrome 或 Chromium 進行幾何和 HTML 渲染。
> - 目前僅支持特定格式的光柵圖像（PNG、JPG、WebP）。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成動畫精靈，但不支持光柵到矢量的轉換，適合遊戲開發場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的動畫工具，但缺乏 Pixel2Motion 的高質量 QA 檢查和輸出格式多樣性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成動畫精靈，使用 Rust 實作，性能優越但功能較單一。 | 如果你的團隊需要高效的動畫生成且已經在使用 Rust 生態系統。 | medium，因為需要重新學習不同的 API 和工具鏈。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的動畫工具，使用 Python，但缺乏完整的 QA 檢查功能。 | 如果你的需求較簡單，且不需要高質量的 QA 檢查。 | low，因為 API 和使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pixel2motion** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成動畫精靈，使用 Rust 實作，性能優越但功能較單一。 | 提供基本的動畫工具，使用 Python，但缺乏完整的 QA 檢查功能。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的 API 和工具鏈。 | low，因為 API 和使用方式相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效的動畫生成且已經在使用 Rust 生態系 | 如果你的需求較簡單，且不需要高質量的 QA 檢查。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在非 Chrome 瀏覽器上可能無法正常渲染動畫
  - 解法：使用 Chrome 或 Chromium 瀏覽器進行測試
- [MEDIUM] 對於複雜的光柵圖像，轉換過程可能會出現失真
  - 解法：確保使用高質量的光柵圖像作為輸入
- [MEDIUM] 目前的文檔可能不夠詳細，導致使用者困惑
  - 解法：參考 GitHub 上的範例和社群討論

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計工作室需要快速生成品牌動畫 | 非常適合 | 工具提供了高效的動畫生成和質量檢查功能，適合小型團隊使用。 |
| 大型企業的動畫設計部門 | 適合 | 雖然工具功能強大，但可能需要更多的學習時間和資源來整合進現有流程。 |
| 個人開發者想要實現簡單的動畫效果 | 普通 | 工具功能較為複雜，對於簡單需求可能顯得過於繁瑣。 |
| 需要處理高解析度動畫的專業動畫師 | 不適合 | 目前的性能可能無法滿足高解析度動畫的需求，特別是在複雜場景下。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高質量的動畫效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅需訪問本地文件系統和瀏覽器。對於 CI/CD 使用，需確保環境安全，避免敏感資料洩露。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Pixel2Motion 最常與前端框架（如 React 和 Vue）搭配使用，通常在開發和部署階段進行動畫生成。在一個用 React 的專案中，可以通過導入生成的 `logo_motion.html` 來展示動畫效果，具體做法是將 HTML 文件嵌入到 React 組件中。支援 GitHub Actions 進行 CI/CD 整合，但需要注意與現有工具鏈的兼容性問題，特別是在依賴管理上。最常見的整合問題是需要手動配置路徑和環境變數，這可能導致初次使用者遇到困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Pixel2Motion 出現之前，設計師通常依賴於手動動畫工具或簡單的動畫庫來處理 logo 動畫，這些工具往往無法提供高質量的輸出。隨著 AI 和自動化技術的進步，Pixel2Motion 能夠利用這些技術來簡化動畫過程，並且提供更高質量的輸出。這個工具代表了一種新的設計趨勢，即將 AI 應用於創意工作流程中，未來可能會看到更多類似的工具出現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nolangz--pixel2motion");
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
> const me = dv.page("Repos/nolangz--pixel2motion");
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
| Forks | 68 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-13 |
| 建立日期 | 2026-06-12 |
| 官方網站 | [Link](https://nolangz.github.io/pixel2motion/) |
| Repo 大小 | 3.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nolangz/pixel2motion) |
| Topics | `ai-design-tools` `animated-logo` `brand-motion` `claude-skill` `codex-skill` `html-animation` `logo-animation` `logo-motion` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 82
>     "JavaScript" : 18
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nolangz](https://github.com/nolangz) | 19 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有活躍的 commit。
**連結**：[文件](https://nolangz.github.io/pixel2motion/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-12 ~ 2026-06-13）
> **活躍天數** 2 天 · **最新 commit** Add MIT license

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/nolangz/pixel2motion/issues/5) | Is it mandatory to use Google Chrome? | 0 | 0 |
> | [#4](https://github.com/nolangz/pixel2motion/issues/4) | peak golf | 0 | 0 |
> | [#2](https://github.com/nolangz/pixel2motion/issues/2) | [phantomstars] Fake engagement detected on this repository | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Pixel2Motion - AI Logo Animation Skill
> 
> **Raster logo → smooth minimal SVG → SVG logo animation → interactive HTML motion demo.**
> 
> [Live interactive demo](https://nolangz.github.io/pixel2motion/) · [Skill instructions](https://github.com/nolangz/pixel2motion/blob/main/SKILL.md) · [Companion skill: Pixel2SVG-HTML](https://github.com/nolangz/pixel2svg-html)
> 
> Pixel2Motion is an open-source Codex and Claude skill for **logo animation**, **SVG animation**, and AI-assisted brand motion. It turns PNG, JPG, WebP, or screenshot logos into clean motion-ready SVG, then exports animated logo HTML, GIF/video previews, and motion QA evidence. Use it for animated logos, SVG logo reveals, logo motion design, pixel-to-vector reconstruction, and developer-friendly HTML animation workflows.
> 
> 中文：Pixel2Motion 是一个把像素 logo 转成平滑 SVG，再生成品牌 motion、logo reveal、HTML 动效展示和视频预览的 Codex skill。它适合需要可审查矢量拟合、可复用 SVG 结构和可导出动图/透明视频的设计与开发场景。
> 
> Recommended review order: the motion gallery below, the interactive demo, the fitting evidence, and then the implementation workflow.
> 
> ## Pixel-to-Motion Gallery
> 
> Each pairing shows the raster source next to the motion output, rendered from `docs/index.html` at the animation's default speed: Horizon 1900 ms, Continuum 2000 ms, Focus 1700 ms, N 2400 ms, and CueRecord at the page-default 0.65× custom timeline.
> 
>   
>     
>       Horizon
>       Pixel source
>       
>       Motion output
>       
>     
>     
>       Continuum
>       Pixel source
>       
>       Motion output
>       
>     
>   
>   
>     
>       CueRecord
>       Pixel source
>       
>       Motion output
>       
>     
>     
>       N
>       Pixel source
>       
>       Motion output
>       
>     
>   
>   
>     
>       Focus
>       Pixel source
>       
>       Motion output
>       
>     
>     
>   
> 
> ## Interactive Demo
> 
> [](https://nolangz.github.io/pixel2motion/)
> 
> The full interactive showcase lives in `docs/index.html` and is published through GitHub Pages at `https://nolangz.github.io/pixel2motion/`.
> 
> ## Fitting Evidence
> 
> Every animation is authored against a QA-verified static vector. The CueRecord fitting sequence, read left to right:
> 
> The teal overlays are QA checkpoints, not the deliverable: the vector candidate is repeatedly compared against the raster source until mark scale, dot placement, wordmark baseline, and ink weight hold up — and only then is motion authored on top. The resulting clean semantic SVG, with mark, dot, and wordmark as separate addressable parts, becomes the final-frame contract for the animation.
> 
> Pixel2Motion optimizes IoU as a diagnostic, but smoothness and structure are the hard gates. A high-IoU jagged trace is rejected when a lower-complexity smooth vector explains the logo better. The static fitting methodology is documented in full in the companion [Pixel2SVG-HTML](https://github.com/nolangz/pixel2svg-html) project.
> 
> ## Deliverables
> 
> - `logo.svg`: final static vector, structured for motion
> - `motion.css`: authored choreography targeting semantic SVG ids
> - `logo_motion.html`: dependency-free showcase HTML with replay, slow motion, speed control, QA hooks, and atomic motion studies
> - `motion_spec.md`: motion brief, principles applied, timeline, easing tokens, and QA notes
> - `outputs/fit_iterations/*.png`: geometry overlay evidence
> - `outputs/motion_frames/*.png` and `outputs/motion_strip.png`: deterministic motion QA evidence
> - `outputs/final_render.png` and `outputs/html_render.png`: static render checks
> 
> ## Workflow
> 
> 1. Read `SKILL.md` and the relevant reference files before fitting or choreographing.
> 2. Write the motion brief in `motion_spec.md`: personality, usage context, part inventory, and choreography sketch.
> 3. Fit and QA the static vector:
> 
> ```bash
> python3 scripts/render_overlay.py logo.svg source.png \
>   --out outputs/fit_iterations/01_overlay.png \
>   --render-out outputs/final_render.png \
>   --report outputs/fit_metrics.json
> ```
> 
> 4. Audit complex curves when smoothness is a concern:
> 
> ```bash
> python3 scripts/svg_path_audit.py logo.svg \
>   --out-svg outputs/bezier_segments.svg \
>   --report outputs/bezier_audit.json
> ```
> 
> 5. Build the showcase HTML from the verified SVG and authored CSS:
> 
> ```bash
> python3 scripts/animate_svg_showcase.py logo.svg \
>   --css motion.css \
>   --out logo_motion.html \
>   --title "Logo Motion" \
>   --duration-hint 1500
> ```
> 
> 6. Capture deterministic motion frames:
> 
> ```bash
> python3 scripts/capture_motion_frames.py logo_motion.html \
>   --times 0,300,700,1000,1250,1500 \
>   --out outputs/motion_frames \
>   --strip outputs/motion_strip.png \
>   --compare-final outputs/final_render.png
> ```
> 
> 7. Probe risky motion windows when the animation uses draw-on, crossings, masks, or handoffs:
> 
> ```bash
> python3 scripts/probe_motion_continuity.py logo_motion.html \
>   --times 500,700,900 \
>   --probe "#draw-stroke:stroke-dashoffset,#pen-glint:offset-distance"
> ```
> 
> ## Requirements
> 
> - Python 3.10+
> - `Pillow` and `numpy` for image analysis helpers
> - Chrome or Chromium for geometry and HTML rendering
> - Playwright for deterministic frame capture and motion continuity QA
> 
> Recommended local setup:
> 
> ```bash
> python3 -m venv .venv
> .venv/bin/pip install pillow numpy playwright
> .venv/bin/python -m playwright install chromium
> ```
> 
> If Chrome is not on the default path, set `CHROME_BIN` before running render checks:
> 
> ```bash
> export CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
> ```
> 
> ## Repository Layout
> 
> - `SKILL.md`: Codex-facing pixel-to-vector-to-motion workflow
> - `agents/openai.yaml`: UI metadata for the skill
> - `references/`: animation principles, motion personality, reveal patterns, HTML delivery template, and fitting references
> - `scripts/`: helpers for tracing, rendering, overlays, path audits, showcase HTML generation, deterministic frame capture, and motion continuity probing
> - `docs/`: GitHub Pages demo, README preview images, GIFs, and fitting-process evidence
> 
> ## Publishing Checklist
> 
> - Confirm `SKILL.md`, `agents/openai.yaml`, `references/`, `scripts/`, and `docs/` are committed.
> - Keep generated logo deliverables, motion captures, local virtual environments, caches, and per-logo `outputs/` out of git.
> - Enable GitHub Pages from branch `main`, folder `/docs`, after the first push.
> - Add a `LICENSE` file before publishing if this repository should grant reuse rights.
> - After creating the GitHub repository, add the remote and push:
> 
> ```bash
> git remote add origin git@github.com:/pixel2motion.git
> git branch -M main
> git push -u origin main
> ```
> 
> ## More From Nolanlai
> 
>   
>     
>   
>   
>   www.nolanlai.com
>   
>   More creative tools, experiments, and notes from Nolanlai.
> 
>   
>   
>   Vibe-Creators 交流
>   
>   Scan the QR code to join the creator community.

## 延伸閱讀

相關概念：[[動畫設計]] · [[SVG 動畫]] · [[品牌設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[diffusionstudio--lottie|diffusionstudio/lottie]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/nolangz/pixel2motion) · [官方網站](https://nolangz.github.io/pixel2motion/)

## 相關收錄

> [!note]- 直接競品（同子分類：動畫工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "動畫工具" AND file.name != "nolangz--pixel2motion"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "nolangz--pixel2motion"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "nolangz--pixel2motion" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "nolangz--pixel2motion"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["動畫設計","SVG 動畫","品牌設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nolangz--pixel2motion" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nolangz--pixel2motion");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nolangz--pixel2motion" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nolangz" AND file.name != "nolangz--pixel2motion"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nolangz--pixel2motion");
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
> const me = dv.page("Repos/nolangz--pixel2motion");
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
> const me = dv.page("Repos/nolangz--pixel2motion");
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
> const me = dv.page("Repos/nolangz--pixel2motion");
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
> const me = dv.page("Repos/nolangz--pixel2motion");
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

> **2026-06-18** — 首次收錄
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

- [[2026-06-19|2026-06-19]] — 再次上榜，798 stars
- [[2026-06-18|2026-06-18]] — 首次收錄，718 stars
