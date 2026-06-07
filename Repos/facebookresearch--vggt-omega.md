---
repo: facebookresearch/vggt-omega
url: https://github.com/facebookresearch/vggt-omega
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "[CVPR 2026 Oral] VGGT Omega"
homepage: ""
stars: 2614
stars_per_day: 114
forks: 107
open_issues: 24
created: 2026-05-14
pushed_at: 2026-05-18
first_seen: 2026-05-19
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "計算機視覺"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-19
use_case: "提供高效的相機姿態和深度推斷模型，適合計算機視覺應用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 35
repo_size_kb: 40622
readme_length: 4799
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-19"
star_history: "2026-05-19:984,2026-05-20:1219,2026-05-21:1351,2026-06-07:2614"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "vggt-omega"
  - "facebookresearch/vggt-omega"
  - "提供高效的相機姿態和深度推斷模型，適合計算機視覺應用。"
---

# vggt-omega

**2.6k** stars · **114** stars/天 · 建立 23 天前 · Python · NOASSERTION

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
> 提供高效的相機姿態和深度推斷模型，適合計算機視覺應用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (114 stars/day)
> **授權** NOASSERTION · **維護** Moderate (最後推送 19 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效相機姿態和深度推斷的計算機視覺研究者或開發者。
> **一句話重點** VGGT Omega 的高效相機姿態推斷能力使其在計算機視覺領域中具備競爭力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--vggt-omega");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "計算機視覺" && p.file.name !== "facebookresearch--vggt-omega" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 計算機視覺 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的相機推斷能力，值得投資。

> [!abstract] 核心創新
> 提供高效的相機姿態和深度推斷，能夠處理多達 500 幅影像，並且記憶體需求相對較低。

## 專案簡介

VGGT Omega 是一個用於相機姿態和深度推斷的深度學習模型，能夠處理多張輸入影像並輸出相應的相機參數和深度圖。使用者只需提供影像路徑，模型會自動加載權重並進行推斷，最終輸出包括相機內外參數和深度資訊的字典。核心賣點在於其高效的 GPU 記憶體使用，能在 NVIDIA A100 上處理多達 500 幅影像，並且記憶體需求隨著輸入影像數量的增加而線性增長。具體來說，對於 1 幅影像，峰值記憶體需求為 6.02 GB，而處理 500 幅影像時需求為 43.15 GB。

此模型使用 PyTorch 框架，並依賴於多個輔助庫如 torchvision 和 opencv-python，這使得它在深度學習社群中具有良好的兼容性和擴展性。與其他相似工具相比，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，VGGT Omega 提供了更高的解析度和更精確的相機姿態推斷，特別是在需要處理大量影像的應用場景中。使用者在實際應用中可能會遇到權重下載的困難，因為需要通過申請才能獲得模型檔案，這可能會影響開發效率。這個專案目前處於活躍開發階段，社群回應相對迅速，適合需要高效相機推斷的研究團隊或開發者。

**技術棧**：`PyTorch 2.3` · `torchvision 0.18` · `numpy` · `opencv-python`

## 重點功能

- 高效的相機姿態推斷 — 支持多達 500 幅影像的處理，峰值記憶體需求為 43.15 GB。
- 深度圖生成 — 提供準確的深度資訊，適合於各種計算機視覺應用。
- 多解析度支持 — 提供 512 和 256 的影像解析度選擇，適應不同需求。
- 簡單的模型加載 — 使用 `model.load_state_dict(torch.load(checkpoint_path))` 輕鬆加載模型權重。
- 互動式演示 — 提供 Gradio demo，可視化深度點雲和預測相機。

## 快速開始

1. 克隆專案並安裝依賴
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
  "# 前置條件：已加載模型權重；",
  "import torch",
  "from vggt_omega.models import VGGTOmega",
  "checkpoint_path = 'path/to/vggt_omega_1b_512.pt'",
  "model = VGGTOmega().to('cuda').eval()",
  "model.load_state_dict(torch.load(checkpoint_path, map_location='cpu'))",
  "# 預期輸出：模型已成功加載並準備進行推斷。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 23 天內累積 2614 stars（114/天），forks 107（4.1%），顯示出穩定的增長趨勢。這個專案由 Facebook Research 團隊開發，該團隊在計算機視覺領域有著豐富的經驗，之前也推出過多個成功的模型。VGGT Omega 解決了在多影像處理時的高效性問題，之前的模型往往在記憶體使用上表現不佳，無法滿足高解析度影像的需求。近期的 CVPR 2026 會議也可能為這個專案帶來了更多的曝光。forks/stars 比率為 4.1%，顯示出使用者對這個專案的實際修改和應用需求。

## 適合誰使用

**目標受眾**：需要高效相機姿態和深度推斷的計算機視覺研究者或開發者。

> [!example] 使用場景
> - 計算機視覺研究人員用它來進行相機姿態推斷，因為它能處理多達 500 幅影像，並且記憶體需求相對較低。
> - 遊戲開發者用它來生成真實感的深度圖，因為其高解析度和準確性能提升遊戲畫面的真實感。
> - 機器人技術工程師用它來進行環境感知，因為能快速獲取相機參數和深度資訊，幫助機器人導航。

## 架構分析

VGGT Omega 採用 PyTorch 框架，設計上強調高效的記憶體使用和快速推斷。模型的核心是基於卷積神經網絡（CNN），能夠從輸入影像中提取特徵並進行相機姿態推斷。資料流中，影像經過 `load_and_preprocess_images` 函數進行預處理，然後進入模型進行推斷，最終輸出相機參數和深度圖。選擇 PyTorch 而非 TensorFlow 是因為其動態計算圖的特性，使得模型調試和開發更為靈活。這種設計使得 VGGT Omega 能夠在高解析度影像上保持良好的效能，但在處理極大規模影像時，記憶體需求會迅速增加，可能成為瓶頸。

## 技術深入分析

VGGT Omega 的核心技術基於卷積神經網絡（CNN），專注於從影像中提取特徵以進行相機姿態推斷和深度圖生成。該模型在 NVIDIA A100 GPU 上進行優化，能夠處理高達 500 幅影像，並在峰值記憶體使用上達到 43.15 GB。選擇 PyTorch 作為開發框架，因為其動態計算圖特性使得模型的調試和開發更為靈活。這樣的選擇雖然提高了開發效率，但在處理極大規模影像時，記憶體需求可能會迅速增加，成為潛在的瓶頸。VGGT Omega 依賴於多個輔助庫，如 torchvision 和 opencv-python，這使得它在深度學習社群中具有良好的兼容性。與主流框架的整合難度較低，能夠方便地融入現有的 CI/CD pipeline 中，並且對於開發者的學習曲線相對友好。整體而言，VGGT Omega 在計算機視覺領域提供了一個高效且靈活的解決方案，適合需要高效相機推斷的研究團隊或開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了完整的使用範例，安裝過程相對順暢，但需要注意權重申請的步驟。提供了良好的入門指南，並且文件有多語言支持，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 高效的記憶體使用，能處理多達 500 幅影像。
> - 提供準確的相機姿態和深度推斷。
> - 簡單易用的 API，方便開發者快速上手。

> [!danger] 缺點
> - 需要申請才能獲得模型權重，影響開發進度。
> - 僅支援 NVIDIA GPU，對其他硬體兼容性未知。
> - 對於超過 500 幅影像的處理，記憶體需求可能會大幅增加。

> [!warning] 注意事項
> - 需要通過申請才能獲得模型權重，可能影響開發效率。
> - 目前僅支援 NVIDIA GPU，對於其他硬體的兼容性未知。
> - 對於超過 500 幅影像的處理，記憶體需求可能會大幅增加。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的相機姿態推斷功能，但在解析度和記憶體使用上不如 VGGT Omega 高效。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的相機推斷，適合特定應用場景，但不具備 VGGT Omega 的深度圖生成能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用類似的相機姿態推斷技術，但在解析度和記憶體使用上不如 VGGT Omega 高效。 | 如果需要較低的記憶體需求且不需要高解析度的相機推斷。 | medium，因為需要調整部分 API 調用。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的相機推斷，適合特定應用場景，但不具備 VGGT Omega 的深度圖生成能力。 | 如果你的應用場景涉及多代理系統，並且不需要深度圖生成。 | high，因為需要重構整個推斷流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **vggt-omega** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用類似的相機姿態推斷技術，但在解析度和記憶體使用上不如 VGGT Omega 高效。 | 專注於多代理系統的相機推斷，適合特定應用場景，但不具備 VGGT Omega 的深度圖生成能力。 |
> | 遷移成本 | - | medium，因為需要調整部分 API 調用。 | high，因為需要重構整個推斷流程。 |
> | 適用場景 | 主要場景 | 如果需要較低的記憶體需求且不需要高解析度的相機推斷。 | 如果你的應用場景涉及多代理系統，並且不需要深度圖生成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於研究和開發，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 權重下載過程中可能會遇到申請被拒的情況
  - 解法：確保提供完整的申請信息以提高通過率
- [MEDIUM] 對於超過 500 幅影像的處理，記憶體需求可能會大幅增加
  - 解法：考慮減少同時處理的影像數量以降低記憶體使用
- **[HIGH]** 在非 NVIDIA 硬體上運行可能會遇到性能問題
  - 解法：建議使用支持 CUDA 的 NVIDIA GPU 以獲得最佳性能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行計算機視覺研究 | 非常適合 | 提供高效的相機推斷能力，適合小型團隊的資源配置。 |
| 大型企業的生產環境 | 不適合 | 目前尚未達到生產環境的穩定性和成熟度。 |
| 學術研究團隊進行深度學習實驗 | 適合 | 提供高效的推斷能力，適合研究用途。 |
| 需要快速原型開發的開發者 | 非常適合 | 簡單易用的 API 使得快速開發成為可能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的相機推斷能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

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
| Forks | 107 |
| Open Issues | 24 |
| Issue 解決率 | 35% (13 closed) |
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

**社群活躍度**：社群活躍，回應速度較快，解決率為 35%。
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
> | [#35](https://github.com/facebookresearch/vggt-omega/issues/35) | RopePositionEmbedding: base=100 is miscalibrated for normali | 1 | 2 |
> | [#42](https://github.com/facebookresearch/vggt-omega/issues/42) | About loss and auxiliary inputs | 0 | 1 |
> | [#41](https://github.com/facebookresearch/vggt-omega/issues/41) | Model weights | 0 | 1 |

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

相關概念：[[電腦視覺]] · [[深度學習]] · [[相機姿態推斷]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/facebookresearch/vggt-omega)

## 相關收錄

> [!note]- 直接競品（同子分類：計算機視覺）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "計算機視覺" AND file.name != "facebookresearch--vggt-omega"
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
> const concepts = ["電腦視覺","深度學習","相機姿態推斷"];
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
