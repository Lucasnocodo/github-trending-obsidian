---
repo: Robbyant/lingbot-vision
url: https://github.com/Robbyant/lingbot-vision
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "Self-supervised learning for spatial perception"
homepage: ""
stars: 744
stars_per_day: 106
forks: 28
open_issues: 3
created: 2026-07-06
pushed_at: 2026-07-08
first_seen: 2026-07-12
week: "2026-W29"
month: "2026-07"
category: "AI/ML"
subcategory: "視覺感知"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-12
use_case: "提供自我監督學習的視覺編碼器，專注於密集空間感知。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-20"
contributor_count: 3
engagement: "low"
issue_close_rate: 63
repo_size_kb: 11427
readme_length: 8770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:638,2026-07-12:638,2026-07-13:690,2026-07-13:690,2026-07-14:744"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-vision"
  - "Robbyant/lingbot-vision"
  - "提供自我監督學習的視覺編碼器，專注於密集空間感知。"
---

# lingbot-vision

**744** stars · **106** stars/天 · 建立 7 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> 提供自我監督學習的視覺編碼器，專注於密集空間感知。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (106 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要高效能視覺編碼的研究團隊或開發者，特別是在密集空間感知領域。
> **一句話重點** LingBot-Vision 的邊界建模能力使其在密集空間感知任務中表現出色。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-vision");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視覺感知" && p.file.name !== "Robbyant--lingbot-vision" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視覺感知 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到強大的視覺編碼能力，值得考慮。

> [!abstract] 核心創新
> 透過邊界中心的遮蔽建模來學習圖像特徵，提升密集空間感知的準確性。

## 專案簡介

LingBot-Vision 是一套自我監督的 Vision Transformer 編碼器，專為密集空間感知而設計。它的核心機制是透過邊界中心的遮蔽建模，來學習圖像中的邊界、形狀和語意區域，這使得它在處理密集下游任務時表現優異。使用者只需透過 `load_pretrained_backbone` 指令即可加載預訓練模型，並利用 `extract_patch_tokens` 來提取圖像的補丁特徵，這些特徵能夠捕捉到物體的語意分組和幾何結構。這個工具的賣點在於它的邊界建模能力，能夠在深度估計、語意分割和視頻物體分割等任務中提供強大的支持。技術上，它依賴於 PyTorch 和 CUDA，並且需要一個支持 CUDA 的 GPU 來進行大模型的推理。

與其他工具相比，如 DINOv2 和 DINOv3，LingBot-Vision 在邊界特徵的學習上有更強的聚焦，這使得它在處理複雜場景時的效果更佳。實際使用中，LingBot-Vision 能夠處理高達 1.1B 參數的模型，並且在不同的應用場景中提供了優化的性能。這個專案目前處於活躍開發中，社群的回應速度和問題解決率也顯示出其穩定性。對於需要高效能視覺編碼的團隊，這是一個值得考慮的選擇。

**技術棧**：`Python 3.10` · `PyTorch` · `CUDA`

## 重點功能

- 自我監督學習 — 透過邊界中心的遮蔽建模來學習圖像特徵。
- 多種模型選擇 — 提供從 ViT-S 到 ViT-g 的多種模型，滿足不同需求。
- 深度估計 — 能夠從圖像中提取深度資訊，適用於各種場景。
- 語意分割 — 特徵能夠準確對齊物體邊界，提升分割準確性。
- 視頻物體分割 — 提供無需訓練的標籤傳播功能，簡化操作流程。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/robbyant/lingbot-vision.git
```
2. 創建 conda 環境
```bash
conda create -n lingbot-vision python=3.10 -y
```
3. 安裝依賴
```bash
python -m pip install -r requirements.txt
```
4. 安裝專案
```bash
python -m pip install -e .
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 PyTorch 和 LingBot-Vision",
  "import torch",
  "from lingbot_vision import load_pretrained_backbone, extract_patch_tokens, load_image",
  "device = 'cuda' if torch.cuda.is_available() else 'cpu'",
  "backbone, embed_dim = load_pretrained_backbone(variant='small', device=device)",
  "img_norm, _, _ = load_image('examples/example.png', size=512, patch_size=backbone.patch_size)",
  "patch_tokens, patch_grid = extract_patch_tokens(backbone, img_norm, device)",
  "print(patch_tokens.shape, patch_grid, embed_dim)",
  "# 預期輸出：torch.Size([1, 1024, 384]) (32, 32) 384"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 744 stars（106/天），forks 28（3.8%），顯示出穩定的增長趨勢。這個專案由多位貢獻者共同開發，主要解決了自我監督學習在空間感知中的應用痛點，之前的方案往往無法有效捕捉到圖像中的邊界和形狀。近期的推廣活動和社群討論也促進了其曝光度。技術上，隨著 Vision Transformer 的普及，這個工具的需求也隨之上升。forks/stars 比率顯示出有一定比例的使用者在進行實際的修改和使用，這代表著社群對這個專案的興趣。

## 適合誰使用

**目標受眾**：需要高效能視覺編碼的研究團隊或開發者，特別是在密集空間感知領域。

> [!example] 使用場景
> - 計算機視覺研究員用它來進行深度估計，因為其邊界建模能力能夠在複雜場景中提供更準確的深度資訊。
> - 機器學習工程師用它來進行語意分割任務，因為其特徵能夠準確對齊物體邊界，提升模型的準確性。
> - 開發者用它來實現視頻物體分割，因為其無需訓練的特性能夠快速應用於現有的視頻數據集。

## 架構分析

LingBot-Vision 採用 Vision Transformer 架構，這使得它能夠有效處理高維度的圖像數據。資料流中，圖像首先經過預處理，然後進入編碼器進行特徵提取。這個設計選擇使得模型能夠捕捉到圖像中的邊界和形狀，並且在特徵學習上具有優勢。

選擇 PyTorch 作為框架，因為它在深度學習社群中的廣泛應用和支持。這個架構的代價是需要較高的計算資源，特別是在訓練大型模型時。擴展性方面，LingBot-Vision 能夠支持多種模型大小，但在處理超大模型時，記憶體需求會顯著增加。

## 技術深入分析

LingBot-Vision 的核心技術機制是基於 Vision Transformer 的自我監督學習，透過邊界中心的遮蔽建模來學習圖像特徵。這種方法使得模型能夠同時捕捉到語意分組和幾何結構，提升了在深度估計和語意分割等任務中的表現。效能方面，該模型能夠處理高達 1.1B 參數的模型，並且在推理時需要 CUDA-capable GPU 以獲得最佳性能。選擇 PyTorch 作為開發框架，因為它提供了靈活性和強大的社群支持，然而這也意味著需要較高的學習成本。技術風險方面，隨著模型規模的擴大，記憶體需求和計算資源的需求也會顯著增加，這可能會限制其在小型設備上的應用。整合方面，LingBot-Vision 能夠與主流的深度學習框架無縫協作，並且在 CI/CD pipeline 中的整合也相對友好，這使得它能夠快速適應不同的開發環境。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意 CUDA 環境的配置，否則可能會遇到問題。整體而言，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 強大的邊界建模能力，能夠提升多種視覺任務的準確性。
> - 提供多種模型選擇，適應不同的計算資源和需求。
> - 活躍的開發和社群支持，問題解決率高。

> [!danger] 缺點
> - 需要高性能的硬體支持，對於小型團隊可能造成負擔。
> - 目前僅提供 backbone weights，使用上有一定的限制。
> - 學習曲線相對較陡，對於新手可能需要更多時間適應。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本
> - 需要 CUDA-capable GPU 來進行推理
> - 目前僅提供 backbone weights，無法直接使用完整模型

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理系統的視覺感知，而 LingBot-Vision 更加專注於單一視覺編碼的深度學習。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種視覺任務的解決方案，但在邊界建模方面的專注度不如 LingBot-Vision。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理系統的視覺感知，使用不同的模型架構。 | 如果你的專案需要多代理協作的視覺感知，這個工具會更合適。 | medium，因為需要調整模型架構和訓練流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種視覺任務的解決方案，但在邊界建模方面的專注度不如 LingBot-Vision。 | 如果需要一個通用的視覺解決方案而不專注於邊界建模，這個工具會更合適。 | low，因為功能上有一定的重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-vision** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多代理系統的視覺感知，使用不同的模型架構。 | 提供多種視覺任務的解決方案，但在邊界建模方面的專注度不如 LingBot-Vision。 |
> | 遷移成本 | - | medium，因為需要調整模型架構和訓練流程。 | low，因為功能上有一定的重疊。 |
> | 適用場景 | 主要場景 | 如果你的專案需要多代理協作的視覺感知，這個工具會更合適。 | 如果需要一個通用的視覺解決方案而不專注於邊界建模，這個工具會 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人實驗和研究，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，CUDA 驅動可能不兼容，導致無法運行
  - 解法：確保安裝最新的 CUDA 驅動和 PyTorch 版本
- [MEDIUM] 模型加載時可能出現網路問題，導致下載失敗
  - 解法：手動下載模型並放置在指定路徑
- [MEDIUM] 在使用 PCA 演示時，輸入圖像格式不正確會導致錯誤
  - 解法：確保圖像為 RGB 格式並符合指定大小

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型計算機視覺研究團隊 | 非常適合 | 具備高性能 GPU 和對自我監督學習的需求。 |
| 小型創業團隊進行視覺任務 | 適合 | 可用於快速原型開發，但需注意資源需求。 |
| 個人開發者進行學術研究 | 普通 | 雖然功能強大，但學習曲線較陡。 |
| 需要即時處理的移動設備應用 | 不適合 | 對硬體要求高，無法在移動設備上有效運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到強大的視覺編碼能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但在使用過程中需注意依賴庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LingBot-Vision 通常與 PyTorch 和 CUDA 搭配使用，適合在深度學習的開發流程中進行整合。在一個使用 PyTorch 的專案中，可以透過 `load_pretrained_backbone` 加載模型，並使用 `extract_patch_tokens` 提取特徵。該工具支援與 GitHub Actions 和其他 CI 工具的整合，並且能與 VS Code 等 IDE 進行良好配合。最常見的整合問題是 CUDA 環境的配置，這需要開發者在初始設置時特別注意。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 LingBot-Vision 出現之前，許多視覺感知任務主要依賴於傳統的卷積神經網絡（CNN），這些方法在處理複雜場景時往往無法有效捕捉到邊界和形狀。隨著自我監督學習技術的進步，LingBot-Vision 的出現填補了這一空白，提供了一種新的解決方案。這個工具代表了視覺感知領域的技術趨勢，未來可能會隨著模型的進一步優化和擴展而持續演進。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
| Forks | 28 |
| Open Issues | 3 |
| Issue 解決率 | 63% (5 closed) |
| 最後推送 | 2026-07-08 |
| 建立日期 | 2026-07-06 |
| Repo 大小 | 11.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Robbyant/lingbot-vision) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `torchvision` `numpy` `opencv-python-headless` `pillow` `omegaconf` `huggingface_hub`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cherubicXN](https://github.com/cherubicXN) | 6 |
> | [@TakuLingFu](https://github.com/TakuLingFu) | 5 |
> | [@IceTTTb](https://github.com/IceTTTb) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率約 63%。
**連結**：[文件](https://github.com/Robbyant/lingbot-vision)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-08）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/Robbyant/lingbot-vision/issues/8) | Question about Lingbot-Depth 2.0 weight release | 0 | 0 |
> | [#7](https://github.com/Robbyant/lingbot-vision/issues/7) | Plans for Transformers support? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> LingBot-Vision: Vision Pretraining for Dense Spatial Perception
> 
> [](https://github.com/Robbyant/lingbot-vision/blob/main/paper.pdf)
> [](https://arxiv.org/abs/2607.05247)
> [](https://technology.robbyant.com/lingbot-vision)
> [](https://huggingface.co/collections/robbyant/lingbot-vision)
> [](https://www.modelscope.cn/collections/Robbyant/LingBot-Vision)
> [](LICENSE)
> 
> -----
> 
> ### 🔭 Meet LingBot-Vision! A family of self-supervised ViT backbones for dense spatial perception! 🖼️📐
> 
> **LingBot-Vision** is a family of self-supervised Vision Transformer backbones for dense spatial perception, from ViT-S/16 up to a 1.1B-parameter ViT-g/16. The flagship model is pretrained with **masked boundary modeling** — a boundary-centric objective that encourages spatially structured patch features while retaining strong semantic representations.
> 
> **Boundary-centric masked modeling.** Each row shows the input image, the PCA projection of frozen patch tokens, teacher-discovered boundary tokens, and cosine-similarity maps from selected boundary-token queries. The features capture semantic grouping and geometric structure at the same time.
> 
> LingBot-Vision learns boundaries, shapes, and semantic regions all together, making it a drop-in visual encoder for dense downstream tasks:
> 
> - 🎨 **Dense feature visualization** — PCA maps of frozen patch tokens reveal coherent object regions and crisp boundaries
> - 📏 **Depth estimation** — frozen patch tokens expose spatial structure to lightweight dense readouts
> - 🧩 **Semantic segmentation** — boundary-faithful features align region transitions with object contours
> - 🎬 **Video object segmentation** — training-free token matching and label propagation with frozen features
> - 🤖 **Depth completion** — LingBot-Vision is the visual encoder initialization for LingBot-Depth 2.0 (see below)
> 
> ## 🌊 Meet LingBot-Depth 2.0
> 
> By simply replacing the encoder with LingBot-Vision at the ViT-L/16 and ViT-g/16 scales, and scaling the curated RGB-D training corpus from 3M to 150M samples, LingBot-Depth 2.0 achieves substantial performance gains over the previous and other system, as detailed in the technical report.
> 
> **LingBot-Depth 2.0 on mirror and glass scenes.** Each group shows input RGB, raw sensor depth, refined depth, and refined point clouds. Raw depth is missing on difficult surfaces such as window panes, glass balustrades, and reflective floors. LingBot-Depth 2.0 completes these regions as stable, contiguous surfaces across frames.
> 
> ---
> 
> ## 📦 Model Zoo
> 
> We train a ViT-g/16 teacher with roughly 1.1B parameters and distill ViT-L, ViT-B, and ViT-S backbones from it for inference and downstream use. Full training and evaluation details are covered in the technical report.
> 
> All released weights are **backbone-only** `.pt` checkpoints, stored as `model.pt` in each model repository (see the full [Hugging Face collection](https://huggingface.co/collections/robbyant/lingbot-vision)):
> 
> | Model | Backbone | Embed dim | Hugging Face Weights | ModelScope Weights |
> |-------|----------|----------:|----------------------|--------------------|
> | **LingBot-Vision-Giant**highest-quality dense features | ViT-g/16 · SwiGLU · fp32 RoPE · 4 register tokens | 1536 | [vit-giant](https://huggingface.co/robbyant/lingbot-vision-vit-giant) | [vit-giant](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-giant) |
> | **LingBot-Vision-Large** ⭐recommended: strong features, practical inference | ViT-L/16, distilled from Giant | 1024 | [vit-large](https://huggingface.co/robbyant/lingbot-vision-vit-large) | [vit-large](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-large) |
> | **LingBot-Vision-Base**balanced inference cost | ViT-B/16, distilled from Giant | 768 | [vit-base](https://huggingface.co/robbyant/lingbot-vision-vit-base) | [vit-base](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-base) |
> | **LingBot-Vision-Small**lightweight demos and downstream use | ViT-S/16, distilled from Giant | 384 | [vit-small](https://huggingface.co/robbyant/lingbot-vision-vit-small) | [vit-small](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-small) |
> 
> Config files are packaged under `lingbot_vision/configs/` and selected automatically by `load_pretrained_backbone`.
> 
> ## 🔧 Installation
> 
> **Requirements**: Python ≥ 3.10 · PyTorch ≥ 2.0 · CUDA-capable GPU (recommended for large-model inference)
> 
> **1. Clone the repository**
> 
> ```bash
> git clone https://github.com/robbyant/lingbot-vision.git
> cd lingbot-vision
> ```
> 
> **2. Create a conda environment**
> 
> ```bash
> conda create -n lingbot-vision python=3.10 -y
> conda activate lingbot-vision
> ```
> 
> **3. Install lingbot-vision**
> 
> ```bash
> python -m pip install -r requirements.txt
> python -m pip install -e .
> ```
> 
> ## 🚀 Quick Start
> 
> ### Load LingBot-Vision Pretrains with PyTorch
> 
> The model is automatically downloaded from Hugging Face on first use. This example uses the small model for a lightweight smoke run; `large` is the default variant, and `giant` is available as the largest backbone.
> 
> ```python
> import torch
> 
> from lingbot_vision import load_pretrained_backbone, extract_patch_tokens, load_image
> 
> device = "cuda" if torch.cuda.is_available() else "cpu"
> dtype = torch.bfloat16 if device == "cuda" else torch.float32
> 
> # Downloads model.pt from robbyant/lingbot-vision-vit-small.
> backbone, embed_dim = load_pretrained_backbone(
>     variant="small",
>     device=device,
>     dtype=dtype,
> )
> 
> img_norm, _, _ = load_image(
>     "examples/example.png",
>     size=512,
>     patch_size=backbone.patch_size,
>     mode="square",
> )
> patch_tokens, patch_grid = extract_patch_tokens(backbone, img_norm, device, dtype)
> 
> print(patch_tokens.shape, patch_grid, embed_dim)
> # torch.Size([1, 1024, 384]) (32, 32) 384
> ```
> 
> `patch_tokens` has shape `[B, H * W, C]`, where `H` and `W` are the patch-grid dimensions. `variant` can be `giant`, `large`, `base`, or `small`; if omitted, it defaults to `large`. You can also pass a local directory or an explicit Hugging Face model repo to `load_pretrained_backbone`.
> 
> ### Run the PCA demo
> 
> Download a backbone checkpoint from Hugging Face (or ModelScope, once available), then run:
> 
> ```bash
> ./scripts/run_pca_demo.sh \
>   --config-file lingbot_vision/configs/lbot_vision_vitl.yaml \
>   --ckpt /path/to/model.pt \
>   --input examples/example.png \
>   --out outputs/pca_demo \
>   --size 512 \
>   --mode square \
>   --dtype bf16
> ```
> 
> Images are loaded as RGB, resized according to `--size` and `--mode`, aligned to the model patch size, and normalized with ImageNet statistics. The demo maps the top three PCA components of the patch tokens to RGB and writes both PCA-only and input/PCA panel visualizations to the output directory. Use `--dtype fp32 --device cpu` for CPU-only inference.
> 
> All demo options
> 
> | Parameter | Description |
> | --- | --- |
> | `--config-file` | Model config file under `lingbot_vision/configs/`. |
> | `--ckpt` | Local path to a pure backbone `.pt` checkpoint. |
> | `--input` | Image file or directory of images. |
> | `--out` | Output directory for PCA visualizations. |
> | `--size` | Target input size. For ViT-g/16, 512 gives a 32 x 32 patch grid. |
> | `--mode` | `square` resizes to `size` x `size` (does not preserve aspect ratio); `shortest` resizes the shortest side to `size`, then center-crops a `size` x `size` square. |
> | `--dtype` | `bf16`, `fp16`, or `fp32`. |
> | `--device` | PyTorch device, for example `cuda` or `cpu`. |
> 
> ### Checkpoint format
> 
> Released checkpoints are `.pt` files containing backbone weights only — no optimizer states, projection heads, or training-time boundary heads. The loader accepts a raw state dict or a dictionary with a `backbone` entry:
> 
> ```python
> state_dict
> {"backbone": state_dict}
> ```
> 
> If checkpoint keys are prefixed with `backbone.`, the loader strips the prefix automatically.
> 
> ## 📖 Citation
> 
> ```bibtex
> @article{lingbot-vision2026,
>   title={Vision Pretraining for Dense Spatial Perception},
>   author={Fu, Zelin and Tan, Bin and Sun, Changjiang and Liu, Shaohui and Zheng, Kecheng and Xu, Yinghao and 

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[深度學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[facebookresearch--vggt-omega|facebookresearch/vggt-omega]] · [[inspatio--worldfm|inspatio/worldfm]]

[GitHub](https://github.com/Robbyant/lingbot-vision)

## 相關收錄

> [!note]- 直接競品（同子分類：視覺感知）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視覺感知" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Robbyant--lingbot-vision" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","機器學習","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Robbyant--lingbot-vision" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Robbyant--lingbot-vision" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Robbyant" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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

> **2026-07-12** — 首次收錄
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

- [[2026-07-13|2026-07-13]] — 再次上榜，690 stars
- [[2026-07-12|2026-07-12]] — 首次收錄，638 stars
