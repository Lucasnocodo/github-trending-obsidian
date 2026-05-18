---
repo: TencentARC/Pixal3D
url: https://github.com/TencentARC/Pixal3D
owner: TencentARC
owner_type: Organization
language: Python
license: NOASSERTION
description: "[SIGGRAPH 2026] Pixal3D: Pixel-Aligned 3D Generation from Images"
homepage: "https://ldyang694.github.io/projects/pixal3d/"
stars: 936
stars_per_day: 134
forks: 83
open_issues: 12
created: 2026-05-10
pushed_at: 2026-05-17
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
use_case: "從單一圖像生成高保真 3D 資產，提供精確的像素對應。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-24"
contributor_count: 2
engagement: "low"
issue_close_rate: 8
repo_size_kb: 80076
readme_length: 9770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-15"
star_history: "2026-05-15:640,2026-05-15:640,2026-05-16:732,2026-05-16:732,2026-05-17:799,2026-05-17:800,2026-05-18:936"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "Pixal3D"
  - "TencentARC/Pixal3D"
  - "從單一圖像生成高保真 3D 資產，提供精確的像素對應。"
---

# Pixal3D

**936** stars · **134** stars/天 · 建立 7 天前 · Python · NOASSERTION

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
> 從單一圖像生成高保真 3D 資產，提供精確的像素對應。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (134 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要從靜態圖像生成高保真 3D 資產的開發者和研究者。
> **一句話重點** Pixal3D 的創新在於其精確的像素對應技術，使得從圖像生成 3D 資產的過程更為高效和精確。

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
> **結論** 花 5 小時學習、8 小時整合，得到高品質的 3D 資產生成，值得投入。

> [!abstract] 核心創新
> Pixal3D 透過明確的像素對應來提升 3D 資產生成的精度，這在以往的技術中並不常見。

## 專案簡介

Pixal3D 是一個能夠從單一圖像生成高保真 3D 資產的工具，透過將像素特徵明確地提升至 3D，建立直接的像素到 3D 的對應關係。這種設計使得生成的 3D 模型在幾何和 PBR 材質上達到接近重建級的真實度。使用者可以透過 `python inference.py --image assets/images/0_img.png --output ./output.glb` 指令生成 GLB 格式的 3D 模型，並且支持低 VRAM 模式以減少記憶體佔用。Pixal3D 的訓練過程分為三個階段，分別是稀疏結構、形狀和紋理，每個階段都需要不同的數據鍵來描述數據集佈局，這樣的設計能夠逐步提高生成的解析度。

技術上，Pixal3D 基於 TRELLIS.2 框架，利用 pixel-aligned projection conditioning 來進行模型訓練，這使得其在處理複雜的 3D 結構時表現優異。與其他工具相比，Pixal3D 的優勢在於其精確的像素對應和高解析度的生成能力，這在需要高保真 3D 資產的應用場景中尤其重要。使用者在實際操作中可能會遇到依賴性問題，特別是在配置環境時，這需要注意。整體來看，Pixal3D 是一個在 3D 資產生成領域中具有潛力的工具，適合需要高品質 3D 模型的開發者和研究者。

**技術棧**：`Python` · `Gradio` · `PyTorch`

## 重點功能

- 高保真 3D 資產生成 — 從單一圖像生成接近重建級的 3D 模型。
- 三階段訓練流程 — 包含稀疏結構、形狀和紋理三個階段，逐步提高解析度。
- 低 VRAM 模式 — 透過按需加載模型來減少記憶體佔用，適合資源有限的環境。
- 支持 GLB 輸出格式 — 生成的 3D 模型可直接用於網頁和應用程式中。
- 簡單的命令行介面 — 使用者可透過簡單的指令進行訓練和推理。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 安裝 utils3d
```bash
pip install https://github.com/LDYang694/Storages/releases/download/20260430/utils3d-0.0.2-py3-none-any.whl
```
3. 生成 3D 模型
```bash
python inference.py --image assets/images/0_img.png --output ./output.glb
```

## 程式碼範例

```python
# 前置條件
# 安裝依賴和 utils3d
pip install -r requirements.txt
pip install https://github.com/LDYang694/Storages/releases/download/20260430/utils3d-0.0.2-py3-none-any.whl
# 生成 3D 模型
python inference.py --image assets/images/0_img.png --output ./output.glb
# 預期輸出
生成的 3D 模型將保存在 output.glb 中。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 936 stars（134/天），forks 83（8.9%），顯示出不錯的增長潛力。這個專案由來自清華大學和騰訊 ARC 實驗室的團隊主導，解決了以往方法在 3D 生成中對圖像特徵注入不夠精確的問題。之前的工具多數依賴於模糊的特徵映射，而 Pixal3D 則透過明確的像素對應來提升生成質量。近期的 SIGGRAPH 2026 發表也為其帶來了關注，促進了社群的討論和參與。這樣的技術進步使得 Pixal3D 在當前的 3D 生成生態中顯得尤為重要。

## 適合誰使用

**目標受眾**：需要從靜態圖像生成高保真 3D 資產的開發者和研究者。

> [!example] 使用場景
> - 3D 藝術家用它來從靜態圖像生成高保真的 3D 模型，因為這樣可以節省大量手動建模的時間，並且生成的模型質量更高。
> - 遊戲開發者用它來快速生成遊戲中的 3D 資產，因為其能夠從單一圖像生成完整的 3D 模型，提升開發效率。
> - 研究人員用它來進行 3D 視覺化研究，因為其高精度的 3D 重建能力能夠提供更真實的數據分析基礎。

## 架構分析

Pixal3D 採用三階段的級聯架構，這樣的設計使得每個階段都能專注於特定的生成任務。第一階段專注於稀疏結構的生成，第二階段則專注於形狀的細化，最後一階段則是紋理的添加。這樣的分階段訓練不僅提升了最終模型的質量，也使得訓練過程更具可控性。

每個階段的資料流都依賴於前一階段的輸出，這樣的設計使得模型能夠逐步學習更複雜的特徵。選擇這種架構的代價在於需要更多的訓練時間和資源，但最終能夠獲得更高的生成質量。擴展性方面，這種設計也使得未來可以輕鬆地添加新的生成階段或改進現有階段。

## 技術深入分析

Pixal3D 的核心技術機制在於其使用 pixel-aligned projection conditioning，這種方法能夠有效地將圖像中的像素特徵轉換為 3D 空間中的幾何形狀。訓練過程中，模型經歷三個階段，分別針對稀疏結構、形狀和紋理進行專門的優化。這種分階段的設計使得模型能夠逐步學習，從而在每個階段都能夠達到更高的生成質量。效能方面，Pixal3D 能夠處理高達 1536 的解析度，並且在低 VRAM 模式下也能有效運行，這對於資源有限的使用者來說非常重要。設計取捨方面，選擇這種三階段的架構雖然需要更多的訓練時間，但最終能夠獲得更高的質量和更精確的生成結果。技術風險方面，隨著模型的擴大，可能會出現記憶體不足的問題，這需要使用者在實際應用中進行調整。整合分析方面，Pixal3D 與主流的深度學習框架如 PyTorch 的整合相對簡單，並且支持多種 GPU 環境，這使得它在現有的技術生態中具有良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意依賴性問題，特別是 TRELLIS.2 的安裝。整體上，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 能夠生成高保真的 3D 模型，適合需要高質量資產的應用。
> - 支持低 VRAM 模式，適合資源有限的環境。
> - 三階段訓練流程提供了靈活性，能夠逐步提高模型質量。

> [!danger] 缺點
> - 安裝和配置過程可能對新手不友好。
> - 對於某些 GPU 架構可能存在兼容性問題。
> - 目前的文檔可能不夠詳細，特別是在數據準備方面。

> [!warning] 注意事項
> - 需要安裝 TRELLIS.2 作為基礎環境。
> - 對於某些 GPU 架構可能不兼容，特別是在 Hugging Face Spaces 中使用。
> - 目前的文檔對於新手來說可能不夠詳細，特別是在數據準備方面。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，而 Pixal3D 專注於 3D 模型生成，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 模型的簡單編輯功能，而 Pixal3D 則專注於從圖像生成高保真模型。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，與 Pixal3D 的圖像到 3D 的轉換無直接關聯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈生成，與 Pixal3D 的 3D 生成有明顯區別。 | 如果你的專案主要是 2D 遊戲或應用，這個工具會更合適。 | low，因為兩者的使用場景和需求不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的 3D 模型編輯功能，而 Pixal3D 則專注於從圖像生成模型。 | 如果你需要對現有模型進行編輯，這個工具會更適合。 | medium，因為需要重新適應不同的工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Pixal3D** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 2D 精靈生成，與 Pixal3D 的 3D 生成有明顯區別。 | 提供簡單的 3D 模型編輯功能，而 Pixal3D 則專注於從圖像生成模型。 |
> | 遷移成本 | - | low，因為兩者的使用場景和需求不同。 | medium，因為需要重新適應不同的工作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是 2D 遊戲或應用，這個工具會更合適。 | 如果你需要對現有模型進行編輯，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 GPU 環境下可能會遇到兼容性問題，特別是對於低端顯卡。
  - 解法：考慮使用更高性能的 GPU 或調整模型參數以適應硬體限制。
- [MEDIUM] 安裝過程中可能會遇到依賴性問題，特別是 TRELLIS.2 的版本不兼容。
  - 解法：確保安裝的 TRELLIS.2 版本與 Pixal3D 相容。
- [MEDIUM] 生成的 3D 模型在某些情況下可能不夠精細，特別是在低解析度下。
  - 解法：嘗試提高解析度參數以獲得更好的結果。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要快速生成 3D 資產 | 非常適合 | 其高效的 3D 生成能力能夠顯著提升開發效率。 |
| 大型企業的 3D 視覺化專案 | 適合 | 雖然需要更多的資源，但生成的質量足以滿足商業需求。 |
| 個人開發者的側項目 | 普通 | 雖然功能強大，但安裝和配置過程可能對新手不友好。 |
| 需要即時生成 3D 資產的應用 | 不適合 | 目前的性能可能無法滿足即時生成的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、8 小時整合，得到高品質的 3D 資產生成，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性風險相對較低，因為該工具不需要高權限運行，且不會存取敏感資料。依賴鏈中未發現已知的供應鏈風險，使用於 CI/CD 中相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Pixal3D 最常與深度學習框架如 PyTorch 搭配使用，通常在模型訓練和推理的環節中發揮作用。在一個使用 PyTorch 的專案中，你可以透過 `python train.py` 指令來訓練模型，並使用 `python inference.py` 進行推理。它支持與 GitHub Actions 等 CI 工具的整合，並且可以在 VS Code 等 IDE 中進行開發。整合的摩擦點主要在於依賴的版本管理，特別是在不同環境中可能會遇到的兼容性問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Pixal3D 出現之前，3D 資產生成主要依賴於手動建模或使用其他低效的自動化工具，這些工具在生成質量上往往無法滿足需求。隨著深度學習技術的進步，特別是圖像處理和生成模型的發展，Pixal3D 的出現使得從圖像生成高品質 3D 模型成為可能。這一工具代表了 3D 生成技術的一個重要進步，未來可能會隨著更多數據和算法的改進而進一步演變。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解深度學習基礎
- 有 3D 建模經驗

> [!tip] 導入策略
> 第一週：在個人側項目中試用。第二週：在小型內部專案中導入。第三週：撰寫最佳實踐文檔。第四週：在主要產品中進行測試。

**成功指標**：生成的 3D 資產質量提升 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他 3D 生成工具的格式。

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
| Forks | 83 |
| Open Issues | 12 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-05-17 |
| 建立日期 | 2026-05-10 |
| 官方網站 | [Link](https://ldyang694.github.io/projects/pixal3d/) |
| Repo 大小 | 78.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TencentARC/Pixal3D) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `git+https://github.com/microsoft/MoGe.git` `natten` `diffusers` `accelerate` `gradio` `plyfile`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 95
>     "HTML" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LDYang694](https://github.com/LDYang694) | 8 |
> | [@capteen-hook](https://github.com/capteen-hook) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個 commit 和討論。
**連結**：[文件](https://ldyang694.github.io/projects/pixal3d/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-17）
> **活躍天數** 4 天 · **最新 commit** feat: add training pipeline and data preprocessing toolkit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/TencentARC/Pixal3D/issues/11) | Change License.md to "MIT-License" or "Apache-2.0-License" o | 2 | 1 |
> | [#10](https://github.com/TencentARC/Pixal3D/issues/10) | ComfyUI Ready | 2 | 2 |
> | [#2](https://github.com/TencentARC/Pixal3D/issues/2) | UV env support | 1 | 2 |
> | [#15](https://github.com/TencentARC/Pixal3D/issues/15) | Intel XPU support | 0 | 0 |
> | [#13](https://github.com/TencentARC/Pixal3D/issues/13) | Make the dependencies correct | 0 | 1 |

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
> 
> ## 🚀 Getting Started
> 
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
> 
> ### Quick Start
> 
> ```sh
> python train.py \
>   --config  \
>   --output_dir  \
>   --data_dir ''
> ```
> 
> `--data_dir` is a JSON string describing the dataset layout. Different stages require different keys:
> 
> | Stage | Required keys |
> |-------|---------------|
> | Sparse Structure | `base`, `ss_latent`, `render_cond` |
> | Shape | `base`, `shape_latent`, `render_cond` |
> | Texture | `base`, `shape_latent`, `pbr_latent`, `render_cond` |
> 
> 
> ### Usage
> 
> #### Inference
> 
> Generate a GLB mesh from a single image:
> 
> ```bash
> python inference.py --image assets/images/0_img.png --output ./output.glb
> ```
> 
> **Low-VRAM mode** (reduces peak VRAM by loading models on-demand):
> 
> ```bash
> python inference.py --image assets/images/0_img.png --output ./output.glb --low_vram
> ```
> 
> By default, the pipeline resolution is **1536** (standard mode) or **1024** (low-VRAM mode). You can override this with `--resolution`:
> 
> ```bash
> 
> ### Web Demo
> 
> We provide a Gradio web demo for Pixal3D, which allows you to generate 3D meshes from images interactively.
> 
> ```bash
> python app.py 
> ```
> 
> Low-VRAM mode is also available for the web demo. The frontend default resolution will automatically switch to 1024 in low-VRAM mode (1536 otherwise), but can be changed manually in the UI.
> 
> ```bash
> python app.py --low_vram
> 
> ### Example: Training All Three Stages
> 
> Below we show the full training sequence using ObjaverseXL as an example. Each higher-resolution step requires updating `finetune_ckpt` in its config JSON to point to the previous checkpoint.
> 
> Stage 1: Sparse Structure (32 → 64)
> 
> ```sh
> 
> ### Overview
> 
> Pixal3D is trained as a three-stage cascade, each progressively increasing resolution:
> 
> | Stage | Model | Resolutions | Config Prefix |
> |-------|-------|-------------|---------------|
> | 1 | Sparse Structure | 32 → 64 | `ss_flow_img_dit_*_proj_finetune` |
> | 2 | Shape | 256 → 512 → 1024 | `slat_flow_img2shape_*_proj_finetune` |
> | 3 | Texture | 256 → 512 → 1024 | `slat_flow_imgshape2tex_*_proj_finetune` |
> 
> All stages use **pixel-aligned projection conditioning** and **view-aligned latents** (2 views by default). Within each stage, start from the lowest resolution and progressively fine-tune to higher resolutions by setting `finetune_ckpt` in the config.
> 
> 
> ### Additional Options
> 
> All command-line arguments
> 
> | Argument | Description | Default |
> |----------|-------------|---------|
> | `--config` | Config JSON path | *required* |
> | `--output_dir` | Output directory | *required* |
> | `--data_dir` | Dataset JSON string | `./data/` |
> | `--load_dir` | Checkpoint load directory | `output_dir` |
> | `--ckpt` | Resume from step | `latest` |
> | `--auto_retry` | Retries on failure | `3` |
> | `--tryrun` | Dry run | `false` |
> | `--profile` | Profiling | `false` |
> | `--num_nodes` | Number of nodes | `1` |
> | `--node_rank` | Current node rank | `0` |
> | `--num_gpus` | GPUs per node | all |
> | `--master_addr` | Master address | `localhost` |
> | `--master_port` | Master port | `12666` |
> | `--use_wandb` | Enable W&B logging | `false` |
> | `--wandb_project` | W&B project | `trellis2-training` |
> | `--wandb_name` | W&B run name | basename of `output_dir` |
> | `--wandb_id` | W&B run ID (resume) | — |
> 
> 
> ## ✨ News
> 
> - **May 2026**: Release training code and data preparation toolkit. 🔧
> - **May 2026**: Release the improved version based on [Trellis.2](https://github.com/microsoft/TRELLIS.2) backbone. 💪
> - **May 2026**: Release inference code and online demo. 🤗
> - **Apr 2026**: Our paper is accepted to SIGGRAPH 2026! 🎉
> 
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
> 
> ## 🎮 Try It Online
> 
> You can try Pixal3D directly in your browser without any installation via our Hugging Face Gradio demo:
> 
> 👉 [**Launch Demo**](https://huggingface.co/spaces/TencentARC/Pixal3D)
> 
> 
> # Force 1536 even in low-VRAM mode
> python inference.py --image assets/images/0_img.png --output ./output.glb --low_vram --resolution 1536
> 
> 
> # Force 1024 in standard mode
> python inference.py --image assets/images/0_img.png --output ./output.glb --resolution 1024
> ```
> 
> **Tip**: If you don't have `flash_attn` installed, you can use PyTorch's built-in SDPA backend instead:
> > ```bash
> > ATTN_BACKEND=sdpa python inference.py --image assets/images/0_img.png --output ./output.glb --low_vram
> > ```
> 
> 
> # or via environment variable:
> LOW_VRAM=1 python app.py
> ```
> 
> ## 🔧 Training
> 
> We provide the full training codebase for reproducing Pixal3D from scratch.
> 
> 
> ### Data Preparation
> 
> Prepare view-aligned O-Voxel data and rendered condition images by following the data toolkit instructions:
> 
> > 📂 **[data_toolkit/README.md](data_toolkit/README.md)**
> 
> 
> # Resolution 32
> python train.py \
>   --config configs/gen/ss_flow_img_dit_1_3B_32_bf16_proj_finetune.json \
>   --output_dir results/ss_32 \
>   --data_dir '{"ObjaverseXL_sketchfab": {"base": "datasets/ObjaverseXL_sketchfab", "ss_latent": "datasets/ObjaverseXL_sketchfab/ss_latents/ss_enc_conv3d_16l8_fp16_64_view", "render_cond": "datasets/ObjaverseXL_sketchfab/renders_cond"}}'
> 
> 
> # Resolution 64 (set finetune_ckpt → results/ss_32 checkpoint)
> python train.py \
>   --config configs/gen/ss_flow_img_dit_1_3B_32_bf16_proj_finetune_ft64.json \
>   --output_dir results/ss_ft64 \
>   --data_dir '{"ObjaverseXL_sketchfab": {"base": "datasets/ObjaverseXL_sketchfab", "ss_latent": "datasets/ObjaverseXL_sketchfab/ss_latents/ss_enc_conv3d_16l8_fp16_64_view", "render_cond": "datasets/ObjaverseXL_sketchfab/renders_cond"}}'
> ```
> 
> Stage 2: Shape (256 → 512 → 1024)
> 
> ```sh
> 
> # Resolution 256
> python train.py \
>   --config configs/gen/slat_flow_img2shape_dit_1_3B_256_bf16_proj_finetune.json \
>   --output_dir results/shape_256 \
>   --data_dir '{"ObjaverseXL_sketchfab": {"base": "datasets/ObjaverseXL_sketchfab", "shape_latent": "datasets/ObjaverseXL_sketchfab/shape_latents/shape_enc_next_dc_f16c32_fp16_256_view", "render_cond": "datasets/ObjaverseXL_sketchfab/renders_cond"}}'
> 
> 
> # Resolution 512
> python train.py \
>   --config configs/gen/slat_flow_img2shape_dit_1_3B_256_bf16_proj_finetun

## 延伸閱讀

相關概念：[[3D 生成]] · [[視覺化]] · [[深度學習]]

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
> const concepts = ["3D 生成","視覺化","深度學習"];
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

- [[2026-05-17|2026-05-17]] — 再次上榜，799 stars
- [[2026-05-16|2026-05-16]] — 再次上榜，732 stars
- [[2026-05-15|2026-05-15]] — 首次收錄，640 stars
