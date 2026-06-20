---
repo: facebookresearch/vggt-omega
url: https://github.com/facebookresearch/vggt-omega
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "[CVPR 2026 Oral] VGGT Omega"
homepage: ""
stars: 3093
stars_per_day: 86
forks: 141
open_issues: 25
created: 2026-05-14
pushed_at: 2026-05-18
first_seen: 2026-05-19
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "深度學習"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-19
use_case: "提供高效的深度相機和深度推斷模型，適合於計算機視覺應用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 34
repo_size_kb: 40622
readme_length: 4799
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-19"
star_history: "2026-05-19:984,2026-05-20:1219,2026-05-21:1351,2026-06-07:2614,2026-06-18:3047,2026-06-19:3074,2026-06-20:3093"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "vggt-omega"
  - "facebookresearch/vggt-omega"
  - "提供高效的深度相機和深度推斷模型，適合於計算機視覺應用。"
---

# vggt-omega

**3.1k** stars · **86** stars/天 · 建立 36 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/facebookresearch--vggt-omega");
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
> 提供高效的深度相機和深度推斷模型，適合於計算機視覺應用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (86 stars/day)
> **授權** NOASSERTION · **維護** Slow (最後推送 32 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效深度推斷模型的計算機視覺研究者和開發者。
> **一句話重點** VGGT Omega 是一個專注於深度推斷的高效模型，適合計算機視覺的多種應用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--vggt-omega");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "深度學習" && p.file.name !== "facebookresearch--vggt-omega" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 深度學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習、12 小時整合，得到高效的深度推斷能力，值得投入。

> [!abstract] 核心創新
> 提供高效的深度推斷模型，支持文本對齊功能以提升準確性。

## 專案簡介

VGGT Omega 是一個針對深度學習的計算機視覺模型，專注於相機姿態和深度推斷。用戶首先需要請求下載模型的權限，然後可以使用 PyTorch 加載和運行模型。核心流程是將圖像輸入模型，經過預處理後，模型會輸出相機的內外參數以及深度圖。這個設計使得用戶能夠在多種應用中進行高效的深度推斷，特別是在需要精確相機定位的場景中。使用者可以通過 `VGGTOmega` 類別來實現這一過程，並可選擇啟用文本對齊功能以獲得更好的結果。模型使用了 PyTorch 框架，並依賴於多個庫如 `torchvision` 和 `opencv-python`，這使得它在現有的深度學習生態系中具有良好的兼容性。

根據基準測試，單個 NVIDIA A100 GPU 在處理 624x416 的圖像時，最多可支持 500 幅圖像的推斷，峰值內存需求為 43.15 GB，這對於大型應用來說是一個重要的考量。與其他模型相比，如 `0x0funky/agent-sprite-forge` 和 `2aronS/Duel-Agents`，VGGT Omega 在深度推斷的精度和效率上具有優勢，特別是在需要高解析度輸出的情況下。使用者在實際操作中可能會遇到模型下載的限制和配置問題，這些都需要在使用前仔細考慮。總體來看，這個專案適合需要高效深度推斷的研究團隊和開發者，尤其是在計算機視覺領域中。未來六個月內，隨著模型的進一步優化和社群的支持，預期將會有更多的應用案例出現。

**技術棧**：`PyTorch 2.3` · `torchvision 0.18` · `numpy` · `opencv-python`

## 重點功能

- 高效深度推斷 — 支持多達 500 幅圖像的推斷，峰值內存需求為 43.15 GB。
- 文本對齊功能 — 使用 `VGGTOmega(enable_alignment=True)` 來獲得更好的結果。
- 簡單的模型加載 — 透過 `model.load_state_dict(torch.load(checkpoint_path, map_location='cpu'))` 輕鬆加載模型權重。
- 多種解析度支持 — 提供 512 和 256 的輸入解析度選擇，以適應不同的應用需求。
- 互動式演示 — 提供 Gradio demo，方便用戶上傳圖像或視頻進行推斷和可視化。

## 快速開始

1. 克隆這個倉庫並安裝依賴項
```bash
git clone git@github.com:facebookresearch/vggt-omega.git && cd vggt-omega && pip install -r requirements.txt && pip install -e .
```
2. 加載模型並進行推斷
```bash
model = VGGTOmega().to('cuda').eval()
```
3. 運行 Gradio demo
```bash
python demo_gradio.py --checkpoint checkpoints/VGGT-Omega-1B-512/model.pt --image-resolution 512
```

## 程式碼範例

```python
[
  "# 前置條件：確保已安裝必要的庫；",
  "import torch",
  "from vggt_omega.models import VGGTOmega",
  "checkpoint_path = 'path/to/vggt_omega_1b_512.pt'",
  "model = VGGTOmega().to('cuda').eval()",
  "model.load_state_dict(torch.load(checkpoint_path, map_location='cpu'))",
  "# 預期輸出：模型已成功加載，準備進行推斷。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 36 天內累積 3093 stars（86/天），forks 141（4.6%），顯示出穩定的增長趨勢。作者 Jianyuan Wang 和其團隊在計算機視覺領域有著豐富的經驗，這個專案解決了深度推斷模型的可用性問題，之前的模型往往需要繁瑣的配置和較低的效率。這個專案的推出正值深度學習技術快速發展的時期，並且在 Hugging Face 上的可用性使得它更容易被廣泛使用。forks/stars 比率為 4.6%，顯示出使用者對於修改和擴展的需求。

## 適合誰使用

**目標受眾**：需要高效深度推斷模型的計算機視覺研究者和開發者。

> [!example] 使用場景
> - 計算機視覺研究人員用它來進行3D重建，因為它能夠提供高精度的相機姿態和深度信息。
> - 遊戲開發者用它來實現真實感的場景渲染，因為其深度推斷能力能夠提升遊戲的視覺效果。
> - 機器人導航工程師用它來優化機器人的環境感知，因為其高效的推斷速度能夠實時處理來自多個攝像頭的數據。

## 架構分析

VGGT Omega 採用 PyTorch 框架，設計上選擇了模組化的結構，便於擴展和維護。模型的資料流從圖像輸入開始，經過預處理後進入 VGGTOmega 模型進行推斷，最終輸出相機的內外參數和深度圖。這種設計使得用戶能夠靈活地選擇不同的輸入解析度和文本對齊選項。選擇 PyTorch 作為框架的原因在於其強大的社群支持和靈活的計算圖，這對於深度學習模型的開發至關重要。擴展性方面，模型的設計考慮了多種應用場景，但在處理大規模數據時可能會遇到 GPU 記憶體的瓶頸。

## 技術深入分析

VGGT Omega 的核心技術機制在於其深度學習架構，使用了 PyTorch 框架，並結合了多種先進的計算機視覺技術。模型的設計考慮了相機姿態估計和深度推斷的需求，並使用了多層卷積神經網絡來處理輸入圖像。根據基準測試，模型在單個 NVIDIA A100 GPU 上的峰值內存需求為 43.15 GB，這對於高解析度圖像的處理是必要的。選擇 PyTorch 作為開發框架的原因在於其靈活性和強大的社群支持，這使得模型能夠快速迭代和優化。技術風險方面，隨著使用者數量的增加，可能會遇到性能瓶頸，特別是在處理大規模數據時。整合方面，VGGT Omega 可以輕鬆與現有的深度學習工具鏈進行整合，並且與主流的 CI/CD 流程兼容良好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了範例代碼。安裝過程相對順暢，但需要注意模型下載的請求流程。文件目前僅提供英文版本，對於非英語使用者可能會造成一定困難。

## 優缺點分析

> [!success] 優點
> - 高效的深度推斷能力，支持多達 500 幅圖像的同時推斷。
> - 簡單的模型加載和使用流程，適合快速開發。
> - 提供互動式演示，方便用戶測試和驗證模型效果。

> [!danger] 缺點
> - 模型下載需要請求權限，可能影響使用體驗。
> - 對硬體要求高，需要 NVIDIA GPU 支持。
> - 目前僅支持特定版本的依賴庫，限制了使用範圍。

> [!warning] 注意事項
> - 需要 NVIDIA GPU 以支持高效推斷。
> - 模型下載需要請求權限，可能影響使用流程。
> - 目前僅支持特定版本的 PyTorch 和 torchvision。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理生成，而 VGGT Omega 更加專注於深度推斷和相機姿態。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 主要用於遊戲 AI，而 VGGT Omega 更適合計算機視覺領域的深度推斷。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代理，而 VGGT Omega 專注於深度推斷和相機姿態。 | 如果你的應用主要集中在遊戲代理生成，而不是深度推斷，則應選擇此工具。 | medium，因為兩者在應用場景上有明顯差異。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 主要用於遊戲 AI，而 VGGT Omega 更適合計算機視覺領域的深度推斷。 | 如果你的專案需要專注於遊戲 AI 的策略生成，則應選擇此工具。 | high，因為需要重新設計整個工作流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **vggt-omega** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成代理，而 VGGT Omega 專注於深度推斷和相機姿態。 | Duel-Agents 主要用於遊戲 AI，而 VGGT Omega 更適合計算機視覺領域的深度推斷。 |
> | 遷移成本 | - | medium，因為兩者在應用場景上有明顯差異。 | high，因為需要重新設計整個工作流。 |
> | 適用場景 | 主要場景 | 如果你的應用主要集中在遊戲代理生成，而不是深度推斷，則應選擇 | 如果你的專案需要專注於遊戲 AI 的策略生成，則應選擇此工具 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合進行研究和開發，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 模型下載請求未通過時，無法獲取 CKPT 檔案
  - 解法：確保提供足夠的背景信息以提高請求通過的機率
- [MEDIUM] 在特定解析度下，GPU 記憶體不足導致推斷失敗
  - 解法：減少同時處理的圖像數量或降低輸入解析度
- [MEDIUM] 文本對齊功能在某些情況下可能不穩定
  - 解法：在使用前進行充分測試以確保效果

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型計算機視覺研究團隊 | 非常適合 | 提供高效的深度推斷能力，適合大規模數據處理。 |
| 小型遊戲開發團隊 | 普通 | 雖然可以用於遊戲，但主要針對深度推斷，可能不符合需求。 |
| 需要即時相機定位的應用 | 非常適合 | 模型能夠提供高精度的相機姿態估計，適合即時應用。 |
| 個人開發者進行小型專案 | 不適合 | 對硬體要求高，可能無法滿足個人開發者的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習、12 小時整合，得到高效的深度推斷能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但需注意依賴庫的安全性。整合到 CI/CD 中時，需確保依賴庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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
| Forks | 141 |
| Open Issues | 25 |
| Issue 解決率 | 34% (13 closed) |
| 最後推送 | 2026-05-18 |
| 建立日期 | 2026-05-14 |
| Repo 大小 | 39.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/facebookresearch/vggt-omega) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `torchvision` `numpy` `Pillow` `einops` `safetensors` `opencv-python`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jytime](https://github.com/jytime) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，問題解決率為 34%。
**連結**：[文件](https://huggingface.co/facebook/VGGT-Omega)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-18）
> **活躍天數** 1 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#29](https://github.com/facebookresearch/vggt-omega/issues/29) | Inquire about the availability of the 10B model | 2 | 2 |
> | [#7](https://github.com/facebookresearch/vggt-omega/issues/7) | How can I obtain a downloadable CKPT file? My application is | 2 | 4 |
> | [#35](https://github.com/facebookresearch/vggt-omega/issues/35) | RopePositionEmbedding: base=100 is miscalibrated for normali | 1 | 3 |
> | [#43](https://github.com/facebookresearch/vggt-omega/issues/43) | Clarification on the implementation details of Language Alig | 0 | 1 |
> | [#42](https://github.com/facebookresearch/vggt-omega/issues/42) | About loss and auxiliary inputs | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> VGGT-&Omega;
> 
>   Jianyuan Wang1,2
>   Minghao Chen1
>   Shangzhan Zhang1
>   Nikita Karaev1
>   
>   Johannes Schönberger2
>   Patrick Labatut2
>   Piotr Bojanowski2
>   David Novotny
>   
>   Andrea Vedaldi1,2
>   Christian Rupprecht1
> 
> **1[Visual Geometry Group, University of Oxford](https://www.robots.ox.ac.uk/~vgg/)**; **2[Meta AI](https://ai.facebook.com/research/)**
> 
> ## Pretrained models
> 
> Before using the models, please request access to the checkpoints [here](https://huggingface.co/facebook/VGGT-Omega). Once your request is approved, you can download the checkpoints. Please note that access requests are reviewed by an automated process based on the information provided in the request.
> 
> | Model | Resolution | Text alignment | Download |
> | :--- | :--- | :--- | :--- |
> | `VGGT-Omega-1B-512` | 512 | No | [Link](https://huggingface.co/facebook/VGGT-Omega/blob/main/vggt_omega_1b_512.pt) |
> | `VGGT-Omega-1B-256-Text-Alignment` | 256 | Yes | [Link](https://huggingface.co/facebook/VGGT-Omega/blob/main/vggt_omega_1b_256_text.pt) |
> 
> The authors are not involved in the review process and cannot approve or reject individual applications. However, the [🤗 Hugging Face demo](https://huggingface.co/spaces/facebook/vggt-omega) is available to everyone.
> 
> ## Quick Start
> 
> First, clone this repository and install the dependencies:
> 
> ```bash
> git clone git@github.com:facebookresearch/vggt-omega.git
> cd vggt-omega
> pip install -r requirements.txt
> pip install -e .
> ```
> 
> Now, try the model with a few lines of code:
> 
> ```python
> import torch
> 
> from vggt_omega.models import VGGTOmega
> from vggt_omega.utils.load_fn import load_and_preprocess_images
> from vggt_omega.utils.pose_enc import encoding_to_camera
> 
> checkpoint_path = "path/to/vggt_omega_1b_512.pt"
> image_names = ["path/to/imageA.png", "path/to/imageB.png", "path/to/imageC.png"]
> 
> model = VGGTOmega().to("cuda").eval()
> model.load_state_dict(torch.load(checkpoint_path, map_location="cpu"))
> 
> images = load_and_preprocess_images(image_names, image_resolution=512).to("cuda")
> 
> with torch.inference_mode():
>     predictions = model(images)
> 
> extrinsics, intrinsics = encoding_to_camera(
>     predictions["pose_enc"],
>     predictions["images"].shape[-2:],
> )
> 
> depth = predictions["depth"]
> depth_conf = predictions["depth_conf"]
> camera_and_register_tokens = predictions["camera_and_register_tokens"]
> camera_tokens = camera_and_register_tokens[:, :, :1]
> registers = camera_and_register_tokens[:, :, 1:]
> ```
> 
> For the text-aligned checkpoint, use `VGGTOmega(enable_alignment=True)` with `image_resolution=256` and read `predictions["text_alignment_embedding"]`.
> 
> ## Interactive Demo
> 
> Install the demo dependencies:
> 
> ```bash
> pip install -r requirements_demo.txt
> ```
> 
> Launch the Gradio demo with a local checkpoint path:
> 
> ```bash
> python demo_gradio.py \
>   --checkpoint checkpoints/VGGT-Omega-1B-512/model.pt \
>   --image-resolution 512
> ```
> 
> The demo accepts uploaded images or a video, runs camera and depth inference,
> and visualizes the depth-unprojected point cloud and predicted cameras as a GLB
> scene.
> 
> ## Runtime and GPU Memory
> 
> We benchmark the end-to-end peak GPU memory usage of `VGGT-Omega-1B-512` on a
> single NVIDIA A100 GPU with 624x416 input images. The measurement covers the full
> inference program, from loading the model weights onto the GPU through the
> forward pass, so it includes both the memory needed to store the model itself
> and the memory used by inference activations and buffers. In other words, a GPU
> with at least the listed available memory is able to run the corresponding
> number of input frames under this setup.
> 
> | **Input Frames** | 1 | 10 | 25 | 50 | 100 | 200 | 300 | 400 | 500 |
> |:----------------:|:-:|:--:|:--:|:--:|:---:|:---:|:---:|:---:|:---:|
> | **Peak Memory (GB)** | 6.02 | 6.67 | 7.80 | 9.66 | 13.37 | 20.82 | 28.26 | 35.71 | 43.15 |
> 
> The benchmark uses [`load_and_preprocess_images`](./vggt_omega/utils/load_fn.py)
> with the default `mode="balanced"` and `image_resolution=512`. For these roughly
> 3:2 landscape images, this produces 624x416 inputs. You can set
> `mode="max_size"` to resize the longest side to 512 instead; for the same aspect
> ratio, this gives about 512x336 inputs and uses less GPU memory.
> 
> ## License
> 
> See the [LICENSE](./LICENSE) file for details about the license under which
> this code is made available.
> 
> [^release]: This Release is intended to support the open source research community.
> 
> ```bibtex
> @misc{wang2026vggtomega,
>       title={VGGT-$\Omega$}, 
>       author={Jianyuan Wang and Minghao Chen and Shangzhan Zhang and Nikita Karaev and Johannes Schönberger and Patrick Labatut and Piotr Bojanowski and David Novotny and Andrea Vedaldi and Christian Rupprecht},
>       year={2026},
>       eprint={2605.15195},
>       archivePrefix={arXiv},
>       primaryClass={cs.CV},
>       url={https://arxiv.org/abs/2605.15195}, 
> }
> ```

## 延伸閱讀

相關概念：[[深度學習]] · [[電腦視覺]] · [[相機姿態估計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]]

[GitHub](https://github.com/facebookresearch/vggt-omega)

## 相關收錄

> [!note]- 直接競品（同子分類：深度學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "深度學習" AND file.name != "facebookresearch--vggt-omega"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "facebookresearch--vggt-omega"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "facebookresearch--vggt-omega" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "facebookresearch--vggt-omega"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["深度學習","電腦視覺","相機姿態估計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "facebookresearch--vggt-omega" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/facebookresearch--vggt-omega");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "facebookresearch--vggt-omega" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "facebookresearch" AND file.name != "facebookresearch--vggt-omega"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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
> const me = dv.page("Repos/facebookresearch--vggt-omega");
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

> **2026-05-19** — 首次收錄
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

- [[2026-05-21|2026-05-21]] — 再次上榜，1.4k stars
- [[2026-05-20|2026-05-20]] — 再次上榜，1.2k stars
- [[2026-05-19|2026-05-19]] — 首次收錄，984 stars
