---
repo: facebookresearch/vggt-omega
url: https://github.com/facebookresearch/vggt-omega
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "[CVPR 2026 Oral] VGGT Omega"
homepage: ""
stars: 984
stars_per_day: 246
forks: 23
open_issues: 6
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
use_case: "提供高效的相機姿態估計和深度推斷模型，適用於多視角影像處理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-22"
contributor_count: 1
engagement: "low"
issue_close_rate: 40
repo_size_kb: 40622
readme_length: 4799
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-19"
star_history: "2026-05-19:984"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "vggt-omega"
  - "facebookresearch/vggt-omega"
  - "提供高效的相機姿態估計和深度推斷模型，適用於多視角影像處理。"
---

# vggt-omega

**984** stars · **246** stars/天 · 建立 4 天前 · Python · NOASSERTION

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
> 提供高效的相機姿態估計和深度推斷模型，適用於多視角影像處理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (246 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要進行相機姿態估計和深度推斷的研究團隊或開發者，尤其是在自駕車或虛擬現實領域工作的人。
> **一句話重點** VGGT Omega 的設計使得相機姿態估計和深度推斷變得更加高效，特別適合需要處理多視角影像的應用場景。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到高效的相機姿態估計和深度推斷，值得投入。

> [!abstract] 核心創新
> VGGT Omega 提供了高效的相機姿態估計和深度推斷能力，特別適合多視角影像處理。

## 專案簡介

VGGT Omega 是一個專為相機姿態估計和深度推斷設計的深度學習模型，支持從多視角影像中提取相機內外參數。用戶只需提供影像路徑，模型會自動處理並輸出相機姿態和深度資訊。核心賣點在於其高效的推斷能力，能在單個 NVIDIA A100 GPU 上處理多達 500 幅影像，並且對於每幅影像的峰值 GPU 記憶體需求不超過 43.15 GB。技術上，VGGT Omega 使用 PyTorch 框架，並依賴於 einops 和 opencv-python 等庫來進行影像處理和數據加載。這使得模型在處理複雜的影像數據時能夠保持高效性。與其他同類工具相比，如 Meta 的其他視覺模型，VGGT Omega 提供了更精確的相機姿態估計，尤其在多視角環境下的表現更為突出。

使用者可以透過簡單的 Python 代碼來加載模型並進行推斷，這降低了使用門檻。實際使用中，模型的記憶體需求隨著輸入影像數量的增加而增加，這意味著在大規模應用時需要考慮硬體配置。該專案目前處於活躍開發階段，社群回應速度良好，並且有持續的更新和問題解決。未來幾個月，預期會有更多功能和改進，特別是在多視角影像處理的精度上。適合需要進行相機姿態估計和深度推斷的研究團隊或開發者，尤其是那些在自駕車或虛擬現實領域工作的團隊。

**技術棧**：`PyTorch` · `torchvision` · `numpy` · `opencv-python`

## 重點功能

- 相機姿態估計 — 能從多視角影像中準確推斷相機的內外參數。
- 深度推斷 — 提供深度資訊，支持多達 500 幅影像的處理。
- 簡單的 API — 透過幾行 Python 代碼即可使用，降低使用門檻。
- 高效的記憶體管理 — 在單個 NVIDIA A100 GPU 上，峰值記憶體需求不超過 43.15 GB。
- 支持文本對齊 — 提供文本對齊的檢查點，適用於需要文本資訊的應用場景。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone git@github.com:facebookresearch/vggt-omega.git && cd vggt-omega && pip install -r requirements.txt && pip install -e .
```
2. 加載模型並進行推斷
```bash
import torch
from vggt_omega.models import VGGTOmega
model = VGGTOmega().to('cuda').eval()
```
3. 執行推斷並獲取結果
```bash
predictions = model(images)
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 PyTorch 和相關依賴",
  "import torch\nfrom vggt_omega.models import VGGTOmega\nfrom vggt_omega.utils.load_fn import load_and_preprocess_images\ncheckpoint_path = 'path/to/vggt_omega_1b_512.pt'\nimage_names = ['path/to/imageA.png', 'path/to/imageB.png', 'path/to/imageC.png']\nmodel = VGGTOmega().to('cuda').eval()\nmodel.load_state_dict(torch.load(checkpoint_path, map_location='cpu'))\nimages = load_and_preprocess_images(image_names, image_resolution=512).to('cuda')\nwith torch.inference_mode():\n    predictions = model(images)",
  "# 預期輸出：predictions 包含相機姿態和深度資訊"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 984 stars（246/天），forks 23（2.3%），這顯示出社群對於其功能的高度興趣。作者 Jianyuan Wang 等人來自於牛津大學的視覺幾何組和 Meta AI，這樣的背景為專案提供了強大的技術支持。VGGT Omega 解決了多視角影像處理中相機姿態估計的準確性問題，之前的解決方案往往無法有效處理不同視角的影像。此專案的推出正好填補了這一空白，特別是在自駕車和虛擬現實等應用場景中。社群的活躍度和問題解決率也反映了其實用性和需求。

## 適合誰使用

**目標受眾**：需要進行相機姿態估計和深度推斷的研究團隊或開發者，尤其是在自駕車或虛擬現實領域工作的人。

> [!example] 使用場景
> - 自駕車工程師用它來從多視角影像中推斷相機姿態，因為其高效的推斷能力能夠在短時間內處理大量影像。
> - 虛擬現實開發者用它來生成深度圖，因為模型能夠提供準確的深度資訊，提升使用者的沉浸感。
> - 研究人員用它來進行相機內外參數的估計，因為其簡單的 API 使得實驗設計變得更加靈活和高效。

## 架構分析

VGGT Omega 採用模組化設計，主要由模型架構和數據處理模組組成。模型部分使用 PyTorch 框架，便於擴展和修改。數據處理模組負責影像的加載和預處理，確保輸入數據符合模型要求。

這種設計使得模型能夠靈活應對不同的影像格式和解析度。選擇 PyTorch 而非其他框架，因為其在深度學習社群中的廣泛應用和支持。這樣的選擇雖然增加了學習曲線，但也帶來了更強的社群支持和資源。

整體架構的擴展性良好，但在處理大規模數據時，可能會面臨記憶體瓶頸，特別是在高解析度影像的情況下。

## 技術深入分析

VGGT Omega 的核心技術機制在於其深度學習模型，使用了先進的卷積神經網絡來進行相機姿態估計和深度推斷。模型的設計考慮到了多視角影像的特性，能夠有效提取影像中的空間信息。效能方面，模型在單個 NVIDIA A100 GPU 上的峰值記憶體需求為 43.15 GB，這使得其在高解析度影像處理時仍能保持高效。選擇 PyTorch 作為開發框架，因為其在深度學習領域的廣泛應用和強大的社群支持，這樣的選擇雖然增加了學習曲線，但也帶來了更多的資源和工具。技術風險方面，隨著數據量的增加，記憶體需求可能成為一個瓶頸，特別是在大規模應用時需要謹慎考量。與主流框架的整合難度較低，因為其設計上已考慮到與其他工具的兼容性，並且支持常見的 CI/CD 流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要注意 GPU 的要求。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習成本。

## 優缺點分析

> [!success] 優點
> - 高效的相機姿態估計和深度推斷能力，適合多視角影像處理。
> - 簡單的 API 設計，降低了使用門檻。
> - 良好的社群支持和活躍的開發進度。

> [!danger] 缺點
> - 需要高效能的 GPU，對硬體要求較高。
> - 目前僅支持特定格式的影像輸入，靈活性不足。
> - 在大規模影像處理時，記憶體需求可能成為瓶頸。

> [!warning] 注意事項
> - 需要高效能 GPU 進行推斷，建議使用 NVIDIA A100 或同等效能的顯示卡。
> - 目前僅支持特定格式的影像輸入，需確保影像符合要求。
> - 對於大規模影像處理，需考慮記憶體需求，可能需要進行分批處理。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了相似的相機姿態估計功能，但主要針對遊戲開發場景，並不專注於深度推斷。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於深度學習模型的訓練和推斷，功能範圍更廣，但在相機姿態估計上不如 VGGT Omega 精確。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的相機姿態估計，並不專注於深度推斷。 | 如果你的主要需求是遊戲開發中的相機控制，而非深度推斷，則應選擇此工具。 | low，因為 API 設計相似，且功能重疊。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於深度學習模型的訓練和推斷，功能範圍更廣，但在相機姿態估計上不如 VGGT Omega 精確。 | 如果需要更廣泛的深度學習功能，而不僅僅是相機姿態估計，則應選擇此工具。 | medium，因為需要適應不同的 API 和功能範圍。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **vggt-omega** | **agent-sprite-forge** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的相機姿態估計，並不專注於深度推斷。 | 專注於深度學習模型的訓練和推斷，功能範圍更廣，但在相機姿態估計上不如 VGGT Omega 精確。 |
> | 遷移成本 | - | low，因為 API 設計相似，且功能重疊。 | medium，因為需要適應不同的 API 和功能範圍。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是遊戲開發中的相機控制，而非深度推斷，則應選 | 如果需要更廣泛的深度學習功能，而不僅僅是相機姿態估計，則應選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 下載檢查點時可能會遇到拒絕問題，無法直接下載。
  - 解法：需先提交請求並等待審核。
- [MEDIUM] 對於不同視角的影像支持有限，可能無法處理所有類型的影像。
  - 解法：需確保影像符合要求，或進行預處理。
- [MEDIUM] 記憶體需求隨著輸入影像數量增加而增加，可能導致性能下降。
  - 解法：建議分批處理影像以降低記憶體壓力。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 自駕車影像處理系統 | 非常適合 | 能夠準確推斷相機姿態和深度，提升系統的安全性和可靠性。 |
| 虛擬現實應用開發 | 適合 | 提供深度資訊，增強使用者的沉浸感。 |
| 小型研究團隊的相機姿態估計 | 普通 | 雖然功能強大，但對硬體要求較高，可能不適合資源有限的團隊。 |
| 大型影像處理任務 | 不適合 | 記憶體需求高，可能導致性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到高效的相機姿態估計和深度推斷，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，主要依賴於影像數據，並不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

VGGT Omega 最常與深度學習框架如 PyTorch 搭配使用，通常在模型訓練和推斷的環節中發揮作用。在一個使用 PyTorch 的專案中，可以通過簡單的 import 語句來整合 VGGT Omega，並利用其 API 進行相機姿態估計和深度推斷。該工具支持與 GitHub Actions 等 CI 工具的整合，並且與 VS Code 等 IDE 兼容良好。整合過程中，最常見的問題是記憶體不足，特別是在處理高解析度影像時，建議提前進行測試以確保性能。

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
| Forks | 23 |
| Open Issues | 6 |
| Issue 解決率 | 40% (4 closed) |
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

**社群活躍度**：社群活躍，問題解決率達到 40%。
**連結**：[文件](https://huggingface.co/facebook/VGGT-Omega)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-18）
> **活躍天數** 1 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/facebookresearch/vggt-omega/issues/7) | How can I obtain a downloadable CKPT file? My application is | 2 | 3 |
> | [#14](https://github.com/facebookresearch/vggt-omega/issues/14) | About dynamic sequences | 0 | 0 |
> | [#13](https://github.com/facebookresearch/vggt-omega/issues/13) | About the matching loss | 0 | 0 |
> | [#11](https://github.com/facebookresearch/vggt-omega/issues/11) | The storation of camera extrinsic information | 0 | 1 |
> | [#8](https://github.com/facebookresearch/vggt-omega/issues/8) | Does vggt-omega currently support inference from different F | 0 | 2 |

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

相關概念：[[深度學習]] · [[相機姿態估計]] · [[多視角影像處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

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
> const concepts = ["深度學習","相機姿態估計","多視角影像處理"];
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

- [[2026-05-19|2026-05-19]] — 首次收錄，984 stars
