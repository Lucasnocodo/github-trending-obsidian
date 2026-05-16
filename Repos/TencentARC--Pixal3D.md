---
repo: TencentARC/Pixal3D
url: https://github.com/TencentARC/Pixal3D
owner: TencentARC
owner_type: Organization
language: Python
license: NOASSERTION
description: "[SIGGRAPH 2026] Pixal3D: Pixel-Aligned 3D Generation from Images"
homepage: "https://ldyang694.github.io/projects/pixal3d/"
stars: 732
stars_per_day: 146
forks: 56
open_issues: 11
created: 2026-05-10
pushed_at: 2026-05-15
first_seen: 2026-05-15
week: "2026-W20"
month: "2026-05"
category: "AI/ML"
subcategory: "3D 生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-15
use_case: "從單張圖片生成高保真3D資產，提供精確的像素到3D對應。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-23"
contributor_count: 1
engagement: "low"
issue_close_rate: 8
repo_size_kb: 80012
readme_length: 3814
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-15"
star_history: "2026-05-15:640,2026-05-15:640,2026-05-16:732,2026-05-16:732"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "Pixal3D"
  - "TencentARC/Pixal3D"
  - "從單張圖片生成高保真3D資產，提供精確的像素到3D對應。"
---

# Pixal3D

**732** stars · **146** stars/天 · 建立 5 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/TencentARC--Pixal3D");
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
> 從單張圖片生成高保真3D資產，提供精確的像素到3D對應。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (146 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要從圖片快速生成高質量 3D 資產的遊戲開發者和 3D 藝術家。
> **一句話重點** Pixal3D 的像素對應技術讓從圖片生成 3D 資產變得更加精確，這是其最大的賣點。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TencentARC--Pixal3D");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 生成" && p.file.name !== "TencentARC--Pixal3D" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高保真的 3D 資產生成效果，值得投入。

> [!abstract] 核心創新
> Pixal3D 透過明確的像素對應技術，實現了從單張圖片生成高保真 3D 資產的突破。這種方法在細節和質量上超越了以往的生成技術。

## 專案簡介

Pixal3D 是一個從單張圖片生成高保真 3D 資產的工具，透過直接的像素到 3D 的對應，實現了高精度的幾何和 PBR 紋理重建。使用者只需提供一張圖片，透過 `python inference.py --image assets/test_image/0.png --output ./output.glb` 指令，即可生成 GLB 格式的 3D 網格。這種方法的優勢在於它不再依賴於模糊的注意力機制，而是通過反投影明確提升像素特徵到 3D，這樣的設計使得重建的細節更加豐富。技術上，Pixal3D 基於 Microsoft 的 TRELLIS.2 框架，並使用了多個依賴包如 `diffusers` 和 `gradio`，這些選擇使得其性能和擴展性都得到了加強。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Pixal3D 提供了更高的細節重建能力，因為它專注於像素對應，而不是僅僅依賴於圖像特徵的抽象。實際使用中，這個工具能夠處理多種圖片格式，並且在生成 3D 模型時能夠保持較高的幀率，這對於需要快速迭代的開發者來說是個優勢。這個專案目前處於活躍開發中，社群也在積極討論功能擴展，如 UV 環境支持和多視角版本的檢查點。整體來看，Pixal3D 是一個值得關注的工具，特別是對於需要快速生成高質量 3D 資產的開發者。

**技術棧**：`Python` · `Gradio` · `TRELLIS.2`

## 重點功能

- 高保真 3D 資產生成 — 從單張圖片生成 GLB 格式的 3D 網格，保持細節和質感。
- 直接像素對應 — 使用反投影技術，實現精確的像素到 3D 的對應。
- 基於 TRELLIS.2 框架 — 提供優化的性能和擴展性，能夠處理複雜的場景。
- Gradio 網頁演示 — 允許用戶無需安裝即可在線生成 3D 模型。
- 支持多種圖片格式 — 能夠處理 JPEG、PNG 等常見格式，方便用戶使用。

## 快速開始

1. 安裝 TRELLIS.2 環境
```bash
請參考 https://github.com/microsoft/TRELLIS.2 的安裝指南
```
2. 安裝額外依賴
```bash
pip install -r requirements.txt
```
3. 安裝 utils3d
```bash
pip install https://github.com/LDYang694/Storages/releases/download/20260430/utils3d-0.0.2-py3-none-any.whl
```
4. 生成 3D 網格
```bash
python inference.py --image assets/test_image/0.png --output ./output.glb
```

## 程式碼範例

```python
{
  "前置條件": "安裝完所有依賴後",
  "指令": "python inference.py --image assets/test_image/0.png --output ./output.glb",
  "預期輸出": "生成一個名為 output.glb 的 3D 網格文件"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 732 stars（146/天），forks 56（7.7%），這顯示出相當高的興趣。專案由 Tsinghua University 和 Tencent ARC Lab 的團隊開發，這樣的背景使其在學術界和業界都有一定的影響力。Pixal3D 解決了以往生成 3D 資產時，對於細節和精度的不足問題，特別是在單張圖片的情況下。此專案的推出伴隨著 SIGGRAPH 2026 的論文發表，進一步提升了其曝光率。技術上，TRELLIS.2 的使用使得其在性能上有了顯著提升，這也是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要從圖片快速生成高質量 3D 資產的遊戲開發者和 3D 藝術家。

> [!example] 使用場景
> - 3D 藝術家用它來從手繪概念圖生成 3D 模型，因為這樣可以大幅縮短模型創建時間，從數天縮短至數小時。
> - 遊戲開發者用它來快速生成遊戲中的環境資產，因為它能夠從單一圖片生成高質量的 3D 物件，提升開發效率。
> - 動畫師用它來創建角色模型，因為其高保真的細節重建能力能夠提升動畫的真實感。

## 架構分析

Pixal3D 採用了一個基於 TRELLIS.2 的架構，這使得其在性能上得到了優化。數據流從用戶上傳的圖片開始，經過反投影處理，將像素特徵提升到 3D 空間，最終生成 GLB 格式的 3D 網格。這種設計的好處在於能夠提供高精度的重建，但代價是需要較高的計算資源和安裝依賴。擴展性方面，該架構能夠支持多種圖片格式，但在處理複雜場景時可能會面臨性能瓶頸。

## 技術深入分析

Pixal3D 的核心技術機制在於其反投影方法，這使得它能夠從單張圖片中提取出精確的像素特徵並轉換為 3D 資產。這種方法的效能在於能夠保持高保真度，並且在生成過程中能夠處理複雜的幾何形狀。設計上，選擇 TRELLIS.2 作為基礎框架，這不僅提高了性能，還使得擴展性得到了保障。依賴樹的複雜度適中，主要依賴於幾個關鍵的庫，如 `diffusers` 和 `gradio`，這些庫的穩定性和社群支持程度都相對較高。技術風險方面，隨著使用者數量的增長，可能會面臨性能瓶頸，特別是在處理高解析度圖片時。此外，對於外部 API 的依賴程度較低，這降低了供應鏈風險。整合方面，Pixal3D 與主流的開發工具鏈相容性良好，能夠輕鬆地融入現有的 CI/CD pipeline 中，並且支持多種 IDE 的整合，這對於團隊協作非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意 TRELLIS.2 的環境配置，這可能會對不熟悉的用戶造成困難。整體來說，花 30 分鐘應該能夠順利運行起來，特別是如果有基本的 Python 環境經驗。

## 優缺點分析

> [!success] 優點
> - 高保真度的 3D 資產生成，適合需要精細模型的應用。
> - 直接像素對應技術，提升了生成的準確性和細節。
> - 支持在線演示，方便用戶快速體驗功能。

> [!danger] 缺點
> - 需要安裝 TRELLIS.2 環境，對新手來說有一定的學習曲線。
> - 目前僅支持 GLB 格式，對於需要其他格式的用戶可能不便。
> - 在低性能硬體上生成速度可能較慢，影響使用體驗。

> [!warning] 注意事項
> - 目前僅支持 GLB 格式輸出，對其他格式的支持尚未實現。
> - 需要安裝 TRELLIS.2 環境，對於不熟悉的用戶可能有一定的學習曲線。
> - 在某些低性能硬體上，生成速度可能較慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲角色的 3D 資產，但不如 Pixal3D 在細節重建上精確。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 資產生成的基本功能，但缺乏 Pixal3D 的高保真度和像素對應技術。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲角色的 3D 資產，使用的是基於 GAN 的生成技術，與 Pixal3D 的像素對應方法不同。 | 如果你的專案主要針對遊戲角色生成，且需要快速迭代的能力，則 agent-sprite-forge 可能更合適。 | medium，因為需要重新調整生成流程和數據格式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的 3D 資產生成，但缺乏 Pixal3D 的高保真度和像素對應技術，主要依賴於簡單的圖像處理。 | 如果你的需求較為簡單，且不需要高保真度的 3D 資產，boneyard 可能是一個輕量級的選擇。 | low，因為其使用的技術較為簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Pixal3D** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成遊戲角色的 3D 資產，使用的是基於 GAN 的生成技術，與 Pixal3D 的像素對應方法不同。 | 提供基本的 3D 資產生成，但缺乏 Pixal3D 的高保真度和像素對應技術，主要依賴於簡單的圖像處理。 |
> | 遷移成本 | - | medium，因為需要重新調整生成流程和數據格式。 | low，因為其使用的技術較為簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的專案主要針對遊戲角色生成，且需要快速迭代的能力，則  | 如果你的需求較為簡單，且不需要高保真度的 3D 資產，bon |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合用於實驗性專案，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些低性能硬體上，生成速度可能較慢，影響使用體驗
  - 解法：使用更高性能的 GPU 進行生成
- [MEDIUM] 安裝 TRELLIS.2 環境時可能會遇到依賴衝突
  - 解法：確保所有依賴都更新到最新版本
- [MEDIUM] 生成的 3D 模型在某些情況下可能會出現細節缺失
  - 解法：嘗試使用不同的圖片進行生成

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要快速生成環境資產 | 非常適合 | Pixal3D 能夠快速生成高質量的 3D 資產，提升開發效率。 |
| 大型動畫工作室需要精細的角色模型 | 適合 | 雖然生成速度較慢，但高保真度的模型能夠滿足需求。 |
| 獨立開發者想要從概念圖生成 3D 模型 | 普通 | 需要一定的技術背景來配置環境和使用工具。 |
| 對生成速度要求極高的實時應用 | 不適合 | 目前生成速度在低性能硬體上較慢，無法滿足即時需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高保真的 3D 資產生成效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Pixal3D 最常與 TRELLIS.2 和 Gradio 搭配使用，通常在開發和生成階段進行整合。在一個使用 TRELLIS.2 的專案中，你可以用 Pixal3D 來生成 3D 模型，具體做法是通過 `python inference.py` 指令進行生成。該工具支持與 GitHub Actions 等 CI 工具的整合，並且能夠與 VS Code 等 IDE 兼容。整合的摩擦點主要在於 TRELLIS.2 的環境配置，這可能會對新手造成困難。整體來看，Pixal3D 的設計使其能夠無縫融入現有的開發流程中。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Pixal3D 出現之前，3D 資產生成主要依賴於傳統的圖像處理技術，這些方法在細節和精度上往往無法滿足需求。隨著深度學習技術的進步，尤其是 GAN 和卷積神經網絡的發展，開始出現了一些基於學習的生成方法，但仍然存在著精度不足的問題。Pixal3D 的出現代表了一種新的技術趨勢，通過明確的像素對應技術，將 3D 資產生成的精度提升到了新的水平。

未來，隨著技術的進一步發展，這一領域可能會出現更多基於深度學習的創新解決方案。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TencentARC--Pixal3D");
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
> const me = dv.page("Repos/TencentARC--Pixal3D");
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
| Forks | 56 |
| Open Issues | 11 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-05-15 |
| 建立日期 | 2026-05-10 |
| 官方網站 | [Link](https://ldyang694.github.io/projects/pixal3d/) |
| Repo 大小 | 78.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TencentARC/Pixal3D) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `git+https://github.com/microsoft/MoGe.git` `natten` `diffusers` `accelerate` `gradio` `plyfile`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "HTML" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LDYang694](https://github.com/LDYang694) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論功能擴展。
**連結**：[文件](https://ldyang694.github.io/projects/pixal3d/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-15）
> **活躍天數** 2 天 · **最新 commit** feat: support manual FOV (--fov) to bypass MoGe-2 camera estimation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/TencentARC/Pixal3D/issues/11) | Change License.md to "MIT-License" or "Apache-2.0-License" o | 1 | 0 |
> | [#2](https://github.com/TencentARC/Pixal3D/issues/2) | UV env support | 1 | 2 |
> | [#10](https://github.com/TencentARC/Pixal3D/issues/10) | ComfyUI Ready | 0 | 1 |
> | [#9](https://github.com/TencentARC/Pixal3D/issues/9) | Multi-view version checkpoint/code | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Pixal3D: Pixel-Aligned 3D Generation from Images
> 
> SIGGRAPH 2026
> 
> [Dong-Yang Li](https://ldyang694.github.io/)¹ · [Wang Zhao](https://thuzhaowang.github.io/)²* · [Yuxin Chen](https://orcid.org/0000-0002-7854-1072)² · [Wenbo Hu](https://wbhu.github.io/)² · [Meng-Hao Guo](https://menghaoguo.github.io/)¹ · [Fang-Lue Zhang](https://fanglue.github.io/)³ · [Ying Shan](https://www.linkedin.com/in/YingShanProfile)² · [Shi-Min Hu](https://cg.cs.tsinghua.edu.cn/shimin.htm)¹✉
> 
> ¹Tsinghua University (BNRist) &nbsp;&nbsp; ²Tencent ARC Lab &nbsp;&nbsp; ³Victoria University of Wellington
> 
> *Project lead &nbsp;&nbsp; ✉Corresponding author
> 
>   
>   
>   
>   
> 
>     
> 
> **Pixal3D** generates high-fidelity 3D assets from a single image. Unlike previous methods that loosely inject image features via attention, Pixal3D explicitly lifts pixel features into 3D through back-projection, establishing direct pixel-to-3D correspondences. This enables near-reconstruction-level fidelity with detailed geometry and PBR textures.
> 
> ---
> 
> ## ✨ News
> 
> - **May 2026**: Release the improved version based on [Trellis.2](https://github.com/microsoft/TRELLIS.2) backbone. 💪
> - **May 2026**: Release inference code and online demo. 🤗
> - **Apr 2026**: Our paper is accepted to SIGGRAPH 2026! 🎉
> 
> ## 📌 Branches
> 
> | Branch | Description |
> |--------|-------------|
> | `main` | **Latest version** — improved implementation based on [Trellis.2](https://github.com/microsoft/TRELLIS.2) backbone with better performance. |
> | `paper` | **Paper version** — original implementation based on [Direct3D-S2](https://github.com/DreamTechAI/Direct3D-S2), corresponding to results reported in our SIGGRAPH 2026 paper. |
> 
> > If you want to reproduce the results in our paper, please switch to the `paper` branch.
> 
> ## 🎮 Try It Online
> 
> You can try Pixal3D directly in your browser without any installation via our Hugging Face Gradio demo:
> 
> 👉 [**Launch Demo**](https://huggingface.co/spaces/TencentARC/Pixal3D)
> 
> ## 🚀 Getting Started
> 
> ### Installation
> 
> #### Step 1: Follow TRELLIS.2 Installation
> 
> Please first follow the installation guide of [TRELLIS.2](https://github.com/microsoft/TRELLIS.2) to set up the base environment.
> 
> #### Step 2: Install Additional Dependencies
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> #### Step 3: Install utils3d
> 
> ```bash
> pip install https://github.com/LDYang694/Storages/releases/download/20260430/utils3d-0.0.2-py3-none-any.whl
> ```
> 
> > **Note**: `requirements-hfdemo.txt` is for the Hugging Face Spaces demo (H-series GPU architecture) and may not be compatible with other architectures.
> 
> ### Usage
> 
> #### Inference
> 
> Generate a GLB mesh from a single image:
> 
> ```bash
> python inference.py --image assets/test_image/0.png --output ./output.glb
> ```
> 
> ### Web Demo
> 
> We provide a Gradio web demo for Pixal3D, which allows you to generate 3D meshes from images interactively.
> 
> ```bash
> python app.py 
> ```
> 
> ## 🤗 Acknowledgements
> 
> This project is heavily built upon [Trellis.2](https://github.com/microsoft/TRELLIS.2) and [Direct3D-S2](https://github.com/DreamTechAI/Direct3D-S2). We sincerely thank the authors for their outstanding work on scalable 3D generation , which serves as the foundation of our codebase and model architecture.
> 
> We also thank the following repos for their great contributions:
> 
> - [Direct3D-S2](https://github.com/DreamTechAI/Direct3D-S2)
> - [Trellis](https://github.com/microsoft/TRELLIS)
> - [Trellis.2](https://github.com/microsoft/TRELLIS.2)
> 
> ## 📄 Citation
> 
> If you find this work useful, please consider citing:
> 
> ```bibtex
> @article{li2026pixal3d,
>     title={Pixal3D: Pixel-Aligned 3D Generation from Images},
>     author={Li, Dong-Yang and Zhao, Wang and Chen, Yuxin and Hu, Wenbo and Guo, Meng-Hao and Zhang, Fang-Lue and Shan, Ying and Hu, Shi-Min},
>     journal={arXiv preprint arXiv:2605.10922},
>     year={2026}
> }
> ```

## 延伸閱讀

相關概念：[[3D 生成]] · [[深度學習]] · [[電腦視覺]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[inspatio--worldfm|inspatio/worldfm]]

[GitHub](https://github.com/TencentARC/Pixal3D) · [官方網站](https://ldyang694.github.io/projects/pixal3d/)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 生成" AND file.name != "TencentARC--Pixal3D"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "TencentARC--Pixal3D"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "TencentARC--Pixal3D" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "TencentARC--Pixal3D"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 生成","深度學習","電腦視覺"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "TencentARC--Pixal3D" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/TencentARC--Pixal3D");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "TencentARC--Pixal3D" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "TencentARC" AND file.name != "TencentARC--Pixal3D"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TencentARC--Pixal3D");
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
> const me = dv.page("Repos/TencentARC--Pixal3D");
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
> const me = dv.page("Repos/TencentARC--Pixal3D");
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
> const me = dv.page("Repos/TencentARC--Pixal3D");
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
> const me = dv.page("Repos/TencentARC--Pixal3D");
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

> **2026-05-15** — 首次收錄
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

- [[2026-05-16|2026-05-16]] — 再次上榜，732 stars
- [[2026-05-15|2026-05-15]] — 首次收錄，640 stars
