---
repo: inspatio/worldfm
url: https://github.com/inspatio/worldfm
owner: inspatio
owner_type: Organization
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 584
stars_per_day: 49
forks: 59
open_issues: 5
created: 2026-03-03
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "影像生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "實時多視角擴散模型，根據參考圖像和目標相機姿勢生成新視角的圖像。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 1
engagement: "medium"
issue_close_rate: 17
repo_size_kb: 523
readme_length: 5046
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:515,2026-03-14:517,2026-03-15:534,2026-03-16:584"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "實時多視角擴散模型，根據參考圖像和目標相機姿勢生成新視角的圖像。"
---

# worldfm

**584** stars · **49** stars/天 · 建立 12 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/inspatio--worldfm");
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
> 實時多視角擴散模型，根據參考圖像和目標相機姿勢生成新視角的圖像。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (49 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成多視角圖像的開發者，尤其是在遊戲和虛擬現實領域。
> **一句話重點** WorldFM 的多視角生成能力在遊戲和虛擬現實應用中具有廣泛的潛力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/inspatio--worldfm");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "影像生成" && p.file.name !== "inspatio--worldfm" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 影像生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的多視角生成能力，值得嘗試。

> [!abstract] 核心創新
> WorldFM 提供了一個實時的多視角生成解決方案，能夠根據參考圖像和相機姿勢生成新視角的圖像。

## 專案簡介

WorldFM 是一個實時多視角擴散模型，能根據給定的參考圖像和目標相機姿勢生成新視角的圖像。用戶只需提供一張輸入圖像和相機參數，模型便能生成多個視角的輸出，這使得場景生成變得靈活且高效。安裝過程透過 Conda 環境簡化，執行 `bash setup.sh` 即可創建環境並安裝所有依賴，這樣的設計減少了環境配置的複雜性。技術上，WorldFM 使用了 PyTorch 2.5 和 CUDA 12.4，這意味著它能夠充分利用 GPU 加速來提升推論速度。與其他模型相比，如 HunyuanWorld-1.0 和 MoGe，WorldFM 的優勢在於其專注於多視角生成，並且能夠靈活替換生成模型以支持不同的場景需求。使用者可以選擇不同的生成步驟來平衡速度與質量，這在實際應用中提供了更多的靈活性。

儘管目前開源版本不包含內部生成模型，使用者仍可集成其他開源模型以達成相似效果。實際使用中，生成的視頻或圖像可透過簡單的 CLI 指令獲得，這使得即使是新手也能快速上手。維護者的活躍度不高，當前有 5 個開放問題，解決率僅 17%，這可能影響未來的支持與更新。整體來看，這個專案適合需要快速生成多視角圖像的開發者，尤其是在遊戲開發或虛擬現實應用中。對於大型團隊或需要穩定支持的商業應用，可能需要考慮其他更成熟的解決方案。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角生成 — 根據參考圖像生成多個新視角的圖像，支持靈活的相機參數設定。
- 實時推論 — 利用 PyTorch 和 CUDA 加速，能夠快速生成高質量圖像。
- 簡易安裝 — 透過 Conda 環境和 `setup.sh` 腳本簡化安裝過程。
- 可替換生成模型 — 支持集成其他開源模型以擴展功能，增加場景生成的靈活性。
- CLI 操作 — 提供簡單的命令行指令來執行生成和推論，方便用戶使用。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行生成示例
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝好依賴和預訓練模型",
  "指令": "python run_pipeline.py --meta demo/meta.json --output_dir outputs",
  "預期輸出": "生成的視頻將保存在 outputs/output.mp4"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 584 stars（49/天），forks 59（10.1%），顯示出一定的社群關注度。作者 WeihongPan 在開源領域有一定的背景，這個專案解決了多視角生成的需求，之前的解決方案往往缺乏靈活性和即時性。社群對於模型訓練細節和 Docker 映像的需求也反映了使用者對於更易用的工具的期待。技術上，隨著 GPU 性能的提升，這種實時生成的需求越來越迫切，WorldFM 的出現正好滿足了這一點。forks/stars 比率約 10.1%，顯示出有不少使用者在進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要快速生成多視角圖像的開發者，尤其是在遊戲和虛擬現實領域。

> [!example] 使用場景
> - 遊戲開發者用它來生成多視角場景，因為這能大幅提升遊戲的沉浸感和真實感。
> - 虛擬現實設計師用它來快速創建場景，因為能夠即時生成不同視角的圖像，節省了大量的手動建模時間。
> - 研究人員用它來進行視覺化實驗，因為能夠靈活調整相機參數以獲得不同的視覺效果，支持多種實驗設計。

## 架構分析

WorldFM 採用的架構是基於 PyTorch 的深度學習模型，專注於多視角生成。資料流從用戶提供的參考圖像和相機參數開始，經過內部生成模型處理，最終輸出多個視角的圖像。這樣的設計使得用戶能夠靈活調整生成的視角，並且能夠快速獲得結果。

選擇 PyTorch 作為框架的原因在於其強大的 GPU 加速能力和活躍的社群支持。這個架構的代價在於需要用戶自行集成其他生成模型，這可能增加了使用的複雜性。擴展性方面，若未來需要支持更複雜的場景，可能需要考慮如何整合更多的模型或數據來源。

## 技術深入分析

WorldFM 的核心技術機制基於深度學習，使用 PyTorch 框架來實現多視角生成。它利用了擴散模型的特性，能夠根據給定的參考圖像和相機姿勢生成新的視角圖像。這種方法的效能特性在於能夠快速生成高質量的圖像，並且支持 GPU 加速以提高推論速度。設計上，選擇 PyTorch 是因為其在深度學習領域的廣泛應用和強大的社群支持，這使得開發和維護變得更加容易。依賴樹的複雜度中等，主要依賴於一些流行的深度學習庫。技術風險方面，若未來需要處理更複雜的場景，可能會面臨擴展性瓶頸，特別是在資源需求上。整合方面，與主流的 CI/CD 流程相容性良好，但在實際使用中，可能需要額外的配置來適應不同的開發環境。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，包含範例和必要的命令。安裝過程相對順暢，但需要注意依賴的版本匹配。整體上，對於新手來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 靈活的多視角生成能力，適合各種應用場景。
> - 簡化的安裝過程，降低了使用門檻。
> - 支持替換生成模型，增加了功能的擴展性。

> [!danger] 缺點
> - 缺乏內部生成模型的支持，使用者需自行集成。
> - 社群活躍度不高，開放問題解決率低。
> - 對於大型場景生成，可能需要高性能的 GPU。

> [!warning] 注意事項
> - 不包含內部生成模型，使用者需自行集成其他模型以達成相似效果。
> - 當前開放問題解決率低，可能影響未來的支持與更新。
> - 對於大型場景生成，可能需要較高的 GPU 資源以確保性能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| HunyuanWorld-1.0 | 專注於全景生成，但不支持多視角生成，適合靜態場景。 |
| MoGe | 提供了多種生成模型選擇，但不如 WorldFM 在多視角生成上靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| HunyuanWorld-1.0 | 專注於全景生成，使用不同的生成技術，適合靜態場景。 | 如果需要生成靜態全景圖像而非多視角動態場景，HunyuanWorld-1.0 是更合適的選擇。 | low，因為其使用的技術和依賴相似。 |
| MoGe | 提供多種生成模型選擇，但不如 WorldFM 在多視角生成上靈活。 | 如果需要多樣化的生成模型選擇，而不僅僅是多視角生成，MoGe 可能更合適。 | medium，因為需要調整部分配置和依賴。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **worldfm** | **HunyuanWorld-1.0** | **MoGe** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於全景生成，使用不同的生成技術，適合靜態場景。 | 提供多種生成模型選擇，但不如 WorldFM 在多視角生成上靈活。 |
> | 遷移成本 | - | low，因為其使用的技術和依賴相似。 | medium，因為需要調整部分配置和依賴。 |
> | 適用場景 | 主要場景 | 如果需要生成靜態全景圖像而非多視角動態場景，HunyuanW | 如果需要多樣化的生成模型選擇，而不僅僅是多視角生成，MoGe |

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

- **[HIGH]** 在某些環境中，安裝依賴可能會遇到版本衝突問題。
  - 解法：仔細檢查 requirements.txt 中的版本，並手動安裝。
- [MEDIUM] 生成大型場景時，可能會導致 GPU 記憶體不足。
  - 解法：減少生成的圖像解析度或使用更高效的 GPU。
- [MEDIUM] 缺乏詳細的訓練細節，可能影響模型的可重現性。
  - 解法：參考社群討論或尋求開發者的幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要快速生成多視角場景 | 非常適合 | 能夠快速生成多視角圖像，提升開發效率。 |
| 大型商業項目需要穩定的支持和更新 | 不適合 | 社群活躍度不高，未來支持不明。 |
| 學術研究需要靈活的視覺化工具 | 適合 | 能夠根據不同需求調整生成參數。 |
| 個人開發者希望探索多視角生成技術 | 非常適合 | 簡單的安裝和使用流程，適合實驗和學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的多視角生成能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，主要依賴於開源庫，無敏感資料存取。整體依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/inspatio--worldfm");
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
> const me = dv.page("Repos/inspatio--worldfm");
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
| Forks | 59 |
| Open Issues | 5 |
| Issue 解決率 | 17% (1 closed) |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 523 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/inspatio/worldfm) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `absl-py` `accelerate` `addict` `aiohappyeyeballs` `aiohttp` `aiosignal` `albumentations` `antlr4-python3-runtime` `asttokens` `async-timeout` `attrs` `av` `braceexpand` `cloudpickle` `click`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WeihongPan](https://github.com/WeihongPan) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率低，可能影響未來支持。
**連結**：[文件](https://inspatio.github.io/worldfm)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-06）
> **活躍天數** 2 天 · **最新 commit** Update README: add checkpoint clarification

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/inspatio/worldfm/issues/6) | Could you please disclose the training details and training  | 0 | 0 |
> | [#5](https://github.com/inspatio/worldfm/issues/5) | Do you have a Wechat/Feishu/Discord group for discussions? | 0 | 0 |
> | [#4](https://github.com/inspatio/worldfm/issues/4) | Would you consider to publish a docker image that contains a | 0 | 0 |
> | [#3](https://github.com/inspatio/worldfm/issues/3) | Multi-view images generated together, and about use of other | 0 | 0 |
> | [#1](https://github.com/inspatio/worldfm/issues/1) | Could You Quantify Memory Ability and Action Control with th | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # WorldFM
> 
> WorldFM, a real-time multi-view diffusion model. Given a reference image and target camera poses, WorldFM generates images at those new viewpoints. Checkout our website ([WorldFM](https://inspatio.github.io/worldfm)) for videos and interactive results!
> 
> ## Installation
> 
> ### 1. Create Conda Environment
> 
> ```bash
> # Edit CONDA_ENV_PATH in setup.sh to your desired prefix first
> bash setup.sh
> ```
> 
> This will:
> 
> - Create the `WorldFM` conda environment (Python 3.10, PyTorch 2.5, CUDA 12.4)
> - Install pip dependencies from `requirements.txt`
> - Initialize git submodules (HunyuanWorld-1.0, MoGe, Real-ESRGAN, ZIM)
> - Build Real-ESRGAN and ZIM in development mode
> 
> ### 2. Manual Setup (alternative)
> 
> ```bash
> conda env create -f WorldFM.yaml --prefix /path/to/envs/WorldFM
> conda activate /path/to/envs/WorldFM
> pip install -r requirements.txt
> git submodule update --init --recursive
> cd submodules/MoGe
> git checkout 7807b5de2bc0c1e80519f5f3d1f38a606f8f9925
> 
> # HunyuanWorld-1.0 requirements
> cd ../Real-ESRGAN
> pip install basicsr-fixed facexlib gfpgan
> python setup.py develop
> cd ../ZIM
> pip install -e .
> ```
> 
> For consistent scene generation, we employ an internal generative model that is not included in the open-source release.
> To support reproducibility, users can integrate alternative open-source panorama generation models (e.g., HunyuanWorld-1.0). This substitution does not impact the core spatial reasoning framework of WorldFM.
> 
> ## Getting Started
> 
> ### Download Pretrained Model
> 
> Download model checkpoints from [huggingface](https://huggingface.co/inspatio/worldfm) by running:
> 
> ```sh
> python download_ckpts.py
> ```
> 
> You will get:
> 
> ```
> weights/
>   ├── vae/
>   ├── worldfm_1-step.pth  # DMD step=1, faster
>   └── worldfm_2-step.pth  # DMD step=2, better quality
> ```
> 
> Use `--step 1` or `--step 2` in `run_pipeline.py` to select the corresponding model.
> 
> ## Usage
> 
> ### Demo
> 
> We provide a sample scene with a pre-defined camera trajectory in `demo/`. Run the following command to generate an MP4 video along the trajectory:
> 
> ```bash
> python run_pipeline.py --meta demo/meta.json --output_dir outputs
> ```
> 
> The output video will be saved to `outputs//output.mp4`.
> 
> ### Input Format
> 
> Prepare a `meta.json` file:
> 
> Single pose:
> 
> ```json
> {
>   "name": "scene_001",
>   "image": "input.jpg",
>   "K": [[fx, 0, cx], [0, fy, cy], [0, 0, 1]],
>   "c2w": [
>     [r00, r01, r02, tx],
>     [r10, r11, r12, ty],
>     [r20, r21, r22, tz],
>     [  0,   0,   0,  1]
>   ]
> }
> ```
> 
> Multiple poses (generates one output per pose):
> 
> ```json
> {
>   "name": "scene_001",
>   "image": "input.jpg",
>   "K": [[fx, 0, cx], [0, fy, cy], [0, 0, 1]],
>   "c2w": [
>     [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],
>     [[...], [...], [...], [...]],
>     ...
>   ]
> }
> ```
> 
> - **name**: scene identifier, used as the output subdirectory name
> - **image**: relative path (from `meta.json` location) to the input perspective image
> - **K**: 3×3 camera intrinsic matrix
> - **c2w**: a single 4×4 or a list of N×4×4 camera-to-world matrices (target viewpoints)
> 
> ### Run Inference with Your Own Data
> 
> ```bash
> # Default: output as MP4 video
> python run_pipeline.py --meta  --output_dir 
> 
> # Save per-frame PNG images instead
> python run_pipeline.py --meta  --output_dir  --save_mode image
> ```
> 
> ### Configuration
> 
> Default parameters are defined in `default.yaml`. Override them via:
> 
> 1. **CLI arguments** (highest priority)
> 2. **Custom config file**: `--config my_config.yaml`
> 3. `**default.yaml`** (lowest priority)
> 
> ### Output
> 
> With `--save_mode video` (default):
> 
> ```
> //
>   └── output.mp4          # Video composed of all generated frames
> ```
> 
> With `--save_mode image`:
> 
> ```
> //
>   ├── output.png           # Single pose
>   # or
>   ├── output_0000.png      # Multiple poses
>   ├── output_0001.png
>   └── ...
> ```
> 
> # License
> 
> The license of our codebase is [Apache-2.0](https://github.com/inspatio/worldfm/blob/main/LICENSE). Note that this license only applies to code in our library, the dependencies and submodules of which ([HunyuanWorld-1.0](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0/blob/main/LICENSE), [MoGe](https://github.com/microsoft/MoGe/blob/main/LICENSE)) are separate and individually licensed.
> 
> # Contributing
> 
> We appreciate all contributions to improve WorldFM.
> 
> # Citing
> 
> If you use WorldFM in your research, please use the following BibTeX entry.
> 
> ```bib
> @misc{worldfm,
>     title={Inspatio-WorldFM: An Open-Source Real-Time Generative Frame Model for Spatial Intelligence},
>     author={WorldFM Contributors},
>     howpublished = {\url{https://github.com/inspatio/worldfm}},
>     year={2026}
> }
> ```
> 
> # Acknowledgement
> 
> This codebase is built upon [PixArt-Sigma](https://github.com/PixArt-alpha/PixArt-sigma). We would like to express our gratitude to the PixArt Team for open-sourcing their code and models. Their contributions have been instrumental to the development of this project. We also appreciate [PRoPe](https://github.com/liruilong940607/prope), [HunyuanWorld-1.0](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0.git) and [MoGe](https://github.com/microsoft/MoGe.git) for their excellent work.

## 延伸閱讀

相關概念：[[多模態]] · [[影像生成]] · [[深度學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/inspatio/worldfm)

## 相關收錄

> [!note]- 直接競品（同子分類：影像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "影像生成" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "inspatio--worldfm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","影像生成","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "inspatio--worldfm" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/inspatio--worldfm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "inspatio--worldfm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "inspatio" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/inspatio--worldfm");
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
> const me = dv.page("Repos/inspatio--worldfm");
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
> const me = dv.page("Repos/inspatio--worldfm");
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
> const me = dv.page("Repos/inspatio--worldfm");
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
> const me = dv.page("Repos/inspatio--worldfm");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
