---
repo: bytedance/Lance
url: https://github.com/bytedance/Lance
owner: bytedance
owner_type: Organization
language: Python
license: Apache-2.0
description: "A 3B-active-parameter native unified multimodal model for image and video understanding, generation, and editing."
homepage: "https://lance-project.github.io"
stars: 893
stars_per_day: 89
forks: 56
open_issues: 14
created: 2026-05-15
pushed_at: 2026-05-25
first_seen: 2026-05-22
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "多模態生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-22
use_case: "提供統一的多模態模型，支持圖像和視頻的理解、生成及編輯。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-29"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 103917
readme_length: 8544
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-22"
star_history: "2026-05-22:665,2026-05-23:764,2026-05-24:796,2026-05-25:842,2026-05-26:893"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/image_editing"
  - "topic/image_generation"
  - "topic/image_understanding"
  - "topic/unified_multimodal_models"
  - "topic/video_generation"
aliases:
  - "Lance"
  - "bytedance/Lance"
  - "提供統一的多模態模型，支持圖像和視頻的理解、生成及編輯。"
---

# Lance

**893** stars · **89** stars/天 · 建立 10 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/bytedance--Lance");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`image-editing` `image-generation` `image-understanding` `unified-multimodal-models` `video-generation` `video-understanding`

> [!summary] 一句話摘要
> 提供統一的多模態模型，支持圖像和視頻的理解、生成及編輯。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (89 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在多模態生成任務中尋求高效解決方案的開發者和研究者。
> **一句話重點** Lance 的設計使其在多模態生成任務中具備高效性和靈活性，是一個值得關注的工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態生成" && p.file.name !== "bytedance--Lance" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多模態生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的多模態生成能力，值得投入。

> [!abstract] 核心創新
> Lance 是一個統一的多模態模型，支持圖像和視頻的理解、生成及編輯，並且在 3B 的參數規模下表現出色。

## 專案簡介

Lance 是一個擁有 30 億活躍參數的統一多模態模型，專注於圖像和視頻的理解、生成與編輯。用戶可以透過簡單的 API 來進行圖像生成和視頻編輯，具體來說，使用者只需提供文本提示，模型便能生成相應的視頻或圖像。這樣的設計使得 Lance 在處理多模態任務時具備更高的效率和靈活性，尤其是在 3B 的參數規模下，仍能保持強大的性能。安裝過程中，使用者需要配置 PyTorch 和 CUDA 環境，並安裝相關依賴，這意味著對於不熟悉深度學習環境的用戶來說，初期設置可能會有些挑戰。Lance 的訓練完全從零開始，這使得它在多任務學習上具備更好的適應性，尤其是針對圖像生成和視頻生成的基準測試表現優異。與其他模型相比，Lance 的設計使其在多模態任務上表現出色，尤其是在生成和編輯方面。

與 DALL-E 3 和 SDXL 相比，Lance 在生成視頻的能力上顯示出更高的靈活性和一致性。實際使用中，Lance 需要至少 40GB 的 GPU 記憶體，這對於小型團隊或個人開發者來說可能是一個限制。社群活躍度尚可，但目前仍有 14 個未解決的問題，顯示出這個專案仍在積極發展中。對於希望在多模態生成任務中尋求高效解決方案的開發者來說，Lance 是一個值得關注的選擇。未來幾個月內，隨著社群的貢獻和改進，Lance 可能會變得更加穩定和功能豐富。

**技術棧**：`Python 3.11` · `PyTorch 2.8.0` · `CUDA 12.4`

## 重點功能

- 統一多模態模型 — 支持圖像和視頻的理解、生成及編輯，提升創作效率。
- 高效性能 — 僅用 3B 活躍參數，卻在多項基準測試中表現優異。
- 從零開始訓練 — 透過多任務學習，模型在多模態任務上具備更好的適應性。
- 簡單的安裝步驟 — 提供清晰的安裝指令，方便用戶快速上手。
- 支持多種環境 — 能夠在不同的 GPU 環境下運行，靈活性高。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/bytedance/Lance.git && cd Lance
```
2. 設置環境
```bash
conda create -n Lance python=3.11 -y && conda activate Lance && pip install -r requirements.txt
```
3. 下載模型權重
```bash
from huggingface_hub import snapshot_download; snapshot_download(repo_id='bytedance-research/Lance', local_dir='./downloads/')
```

## 程式碼範例

```python
# 前置條件：安裝了必要的依賴
from huggingface_hub import snapshot_download

save_dir = './downloads/'
repo_id = 'bytedance-research/Lance'
snapshot_download(local_dir=save_dir, repo_id=repo_id)
# 預期輸出：模型權重下載到指定目錄
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 893 stars（89.3/天），forks 56（6.3%），這顯示出一定的關注度。這個專案由字節跳動的團隊開發，這意味著背後有強大的技術支持和資源。Lance 解決了多模態生成任務中缺乏統一模型的痛點，之前的方案如 DALL-E 和其他生成模型在多任務處理上存在局限。隨著多媒體內容需求的增加，這個工具的實用性和需求也隨之上升。社群的活躍度和開放的問題反映出使用者對於功能和穩定性的期待。

## 適合誰使用

**目標受眾**：需要在多模態生成任務中尋求高效解決方案的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來生成高質量的視頻內容，因為 Lance 在視頻生成上表現優異，能夠快速產出符合需求的視覺效果。
> - 內容創作者用它來編輯和生成社交媒體視頻，因為 Lance 的多模態能力能夠簡化工作流程，提升創作效率。
> - 開發者用它來進行多模態應用的原型設計，因為 Lance 提供統一的 API，方便快速實現不同的功能需求。

## 架構分析

Lance 採用統一的多模態架構，設計目的是為了簡化多任務學習的流程。模型的核心是基於 Transformer 的架構，並使用 ViT 和 VAE 作為編碼器。這樣的設計使得模型能夠在不同的任務中共享知識，提升學習效率。

資料流方面，使用者提供的文本提示會經過編碼器處理，然後進入 Transformer 模型進行生成。選擇這種架構的代價是需要較高的計算資源，尤其是在訓練階段。擴展性方面，雖然在小型專案中表現良好，但在大規模應用中可能會遇到性能瓶頸，特別是在推理時需要大量的 GPU 記憶體。

## 技術深入分析

Lance 的核心技術機制是基於 Transformer 的架構，這使得它能夠在多模態任務中共享知識。使用 ViT 和 VAE 作為編碼器，這樣的選擇使得模型在處理圖像時具備更好的特徵提取能力。效能方面，Lance 能夠在 128-A100-GPU 的預算內完成訓練，這對於大多數研究者來說是可行的。設計取捨上，選擇從零開始訓練的方式雖然能夠獲得更好的適應性，但也意味著需要更多的計算資源和時間。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在推理階段需要大量的 GPU 記憶體。整合方面，Lance 與主流的深度學習框架如 PyTorch 的整合相對簡單，但在 CI/CD pipeline 的友善度上仍有提升空間。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，對於新手來說相對友好。安裝過程中可能會遇到環境配置的問題，但整體流程還是順暢的。文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 統一的多模態支持，能夠同時處理圖像和視頻。
> - 性能優異，特別是在多任務學習上。
> - 清晰的安裝步驟，降低了使用門檻。

> [!danger] 缺點
> - 需要高性能的硬體支持，限制了使用者範圍。
> - 安裝過程中可能會遇到環境配置問題。
> - 目前的穩定性和社群支持尚待提高。

> [!warning] 注意事項
> - 需要至少 40GB 的 GPU 記憶體進行推理。
> - 安裝過程中可能會遇到環境配置問題，特別是 flash-attn 的安裝。
> - 目前仍有 14 個未解決的問題，顯示出穩定性尚待提高。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於動畫生成，Lance 提供更廣泛的多模態支持，適合需要同時處理圖像和視頻的應用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於圖像生成，Lance 在視頻生成和編輯方面的能力更強，適合多媒體內容創作。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要針對程式碼生成，Lance 提供多模態支持，適合需要圖像和視頻的應用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| DALL-E 3 | 專注於圖像生成，Lance 提供更廣泛的多模態支持，適合需要同時處理圖像和視頻的應用。 | 如果你的需求主要是圖像生成，且不需要視頻功能，DALL-E 3 會是更合適的選擇。 | medium，因為需要重新適應不同的 API 和功能。 |
| SDXL | 主要針對圖像生成，Lance 在視頻生成和編輯方面的能力更強，適合多媒體內容創作。 | 如果你的團隊已經在使用 SDXL 進行圖像生成，且不需要視頻功能，則可以繼續使用 SDXL。 | high，因為需要重構整個工作流程以適應新的多模態架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Lance** | **DALL-E 3** | **SDXL** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於圖像生成，Lance 提供更廣泛的多模態支持，適合需要同時處理圖像和視頻的應用。 | 主要針對圖像生成，Lance 在視頻生成和編輯方面的能力更強，適合多媒體內容創作。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的 API 和功能。 | high，因為需要重構整個工作流程以適應新的多模態架構。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是圖像生成，且不需要視頻功能，DALL-E  | 如果你的團隊已經在使用 SDXL 進行圖像生成，且不需要視頻 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 flash-attn 的安裝問題
  - 解法：可以安裝預編譯的 wheel 版本
- [MEDIUM] 在某些環境下無法啟動
  - 解法：檢查依賴和環境配置
- [MEDIUM] 模型下載過程中可能出現網路問題
  - 解法：重試下載或使用代理

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的視頻內容生成 | 非常適合 | Lance 的多模態能力能夠簡化視頻生成流程，提升效率。 |
| 大型企業的圖像編輯需求 | 普通 | 雖然性能優異，但對於大型企業的需求可能需要更多的穩定性。 |
| 個人開發者的多模態應用原型 | 適合 | Lance 提供統一的 API，方便快速實現不同的功能需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的多模態生成能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但在使用過程中需注意依賴的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
| Open Issues | 14 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-15 |
| 官方網站 | [Link](https://lance-project.github.io) |
| Repo 大小 | 101.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/bytedance/Lance) |
| Topics | `image-editing` `image-generation` `image-understanding` `unified-multimodal-models` `video-generation` `video-understanding` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `accelerate` `decord` `diffusers` `einops` `huggingface-hub` `imageio` `imageio-ffmpeg` `Jinja2` `numpy` `opencv-python` `packaging` `pillow` `protobuf` `PyYAML` `regex`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@fengyifu2000](https://github.com/fengyifu2000) | 45 |
> | [@cleardusk](https://github.com/cleardusk) | 35 |
> | [@Corleone-Huang](https://github.com/Corleone-Huang) | 4 |
> | [@fenfenfenfan](https://github.com/fenfenfenfan) | 1 |
> | [@oss-bd](https://github.com/oss-bd) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但存在多個未解決的問題。
**連結**：[文件](https://lance-project.github.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-22 ~ 2026-05-25）
> **活躍天數** 3 天 · **最新 commit** feat: clean the code and support understanding inference with KVcache (#25)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/bytedance/Lance/issues/18) | 不是缺包就是缺环境 `enhancement` | 3 | 5 |
> | [#4](https://github.com/bytedance/Lance/issues/4) | Thank you for your excellent work. Will open-source the trai | 1 | 2 |
> | [#24](https://github.com/bytedance/Lance/issues/24) | RTX PRO 6000不支持flash-attn，按ChatGPT的建议fake了一个假包，但是生成的视频只有噪声，能 | 0 | 0 |
> | [#23](https://github.com/bytedance/Lance/issues/23) | 无法启动 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Lance: Unified Multimodal Modeling by Multi-Task Synergy
>   
>     
>     Fengyi Fu*, 
>     Mengqi Huang*,✉, 
>     Shaojin Wu*, 
>     Yunsheng Jiang*, 
>     Yufei Huo, 
>     Jianzhu Guo✉,§
>     
>     Hao Li, 
>     Yinghang Song, 
>     Fei Ding, 
>     Qian He, 
>     Zheren Fu, 
>     Zhendong Mao, 
>     Yongdong Zhang
>     
>     ByteDance
>     
>     * Equal contribution &nbsp;&nbsp; ✉ Corresponding authors &nbsp;&nbsp; § Project lead
>   
>   
>     
>     
>     
>     
>     English | 简体中文
>   
> 
> 
> ## 🚀 Installation
> 
> 
> ### Installation Steps
> 
> First, clone the repository:
> 
> ```bash
> git clone https://github.com/bytedance/Lance.git
> cd Lance
> ```
> 
> Then, set up the environment:
> 
> ```bash
> conda create -n Lance python=3.11 -y
> conda activate Lance
> pip install torch==2.8.0 torchvision==0.23.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/cu126
> pip install -r requirements.txt
> pip install flash-attn==2.8.3 --no-build-isolation
> ```
> 
> > **Note:** If installing `flash-attn` from source fails, you can install a prebuilt wheel instead. The wheelhouse below is from a third-party repository and is provided for **reference only**; please verify that any wheel you install matches your Python, PyTorch and CUDA versions.
> 
> > ```bash
> > pip install --no-cache-dir --no-deps --force-reinstall \
> > "https://huggingface.co/strangertoolshf/flash_attention_2_wheelhouse/resolve/main/wheelhouse-flash_attn-2.8.3/linux_x86_64/torch2.8/cu12/abiTRUE/cp311/flash_attn-2.8.3+cu12torch2.8cxx11abiTRUE-cp311-cp311-linux_x86_64.whl"
> > ```
> 
> Then, download the model weights from [Lance-3B on Hugging Face](https://huggingface.co/bytedance-research/Lance) and place them in the `downloads/` directory:
> 
> ```bash
> from huggingface_hub import snapshot_download
> 
> save_dir = "./downloads/"
> repo_id = "bytedance-research/Lance" 
> cache_dir = save_dir + "/cache"
> 
> snapshot_download(cache_dir=cache_dir,
>   local_dir=save_dir,
>   repo_id=repo_id,
>   local_dir_use_symlinks=False,
>   resume_download=True,
>   allow_patterns=["*.json", "*.safetensors", "*.bin", "*.py", "*.md", "*.txt","*.pth",],
> )
> ```
> 
> 
> ## 🎨 Demo
> 
> Show demo results
> 
>   🔥 We recommend visiting our homepage for more visual results. 🔥
> 
> Text-to-Video
> 
>   
>     
>     
>     
>     
>   
>   
>     
>     
>     
>     
>   
> 
> Video Editing
> 
>   
>     
>     
>     
>     
>   
>   
>     
>     
>     
>     
>   
> 
> Multi-turn Consistency Editing
> 
>   
>     
>   
> 
> Intelligent Video Generation
> 
>   
>     
>     
>     
>     
>   
> 
> 
> ## 📚 Usage
> 
> 
> ## 🌟 Highlights
> 
> **Lance** is a 3B native unified multimodal model that supports **image and video understanding, generation, and editing** within a single framework.
> 
> - **Efficient at 3B scale.** With only **3B active parameters**, Lance delivers strong performance across image generation, image editing, and video generation benchmarks.
> - **Trained from scratch.** Lance is built with a staged multi-task recipe and trained entirely from scratch (except for the ViT and VAE encoders; the transformer backbone is trained entirely from scratch) within a **128-A100-GPU** budget.
> 
> We are actively updating and improving this repository. If you find any bugs or have suggestions, please feel free to open an issue or submit a pull request (PR) 💖.
> 
>   
> 
> 
> ### Benchmarks
> 
> DPG-Bench Evaluation
> 
>   
>     
>       Models
>       #&nbsp;Params.
>       Global
>       Entity
>       Attribute
>       Relation
>       Other
>       Overall
>     
>   
>   
>     
>       Generation-only Models
>     
>     
>       SDXL3.5B83.2782.4380.9186.7680.4174.65
>     
>     
>       DALL-E 3-90.9789.6188.3990.5889.8383.50
>     
>     
>       SD3-Medium2B87.9091.0188.8380.7088.6884.08
>     
>     
>       FLUX.1-dev12B74.3590.0088.9690.8788.3383.84
>     
>     
>       Qwen-Image20B91.3291.5692.0294.3192.7388.32
>     
>     
>       Unified Models
>     
>     
>       Janus-Pro-7B7B86.9088.9089.4089.3289.4884.19
>     
>     
>       OmniGen24B88.8188.8390.1889.3790.2783.57
>     
>     
>       Show-o27B89.0091.7889.9691.8191.6486.14
>     
>     
>       BAGEL†7B88.9490.3791.2990.8288.6785.07
>     
>     
>       InternVL-U1.7B90.3990.7890.6890.2988.7785.18
>     
>     
>       TUNA7B90.4291.6890.9491.8790.7386.76
>     
>     
>       TUNA-27B89.5091.4092.0791.9188.8186.54
>     
>     
>       🌟 Lance (Ours)3B83.8991.0789.3693.3880.8084.67
>     
>   
> 
> † indicates methods that use LLM rewriters for prompt rewriting before generation.
> 
> GenEval Evaluation
> 
>   
>     
>       Models
>       #&nbsp;Params.
>       1-Obj.
>       2-Obj.
>       Count
>       Colors
>       Position
>       Attr.
>       Overall
>     
>   
>   
>     
>       Generation-only Models
>     
>     
>       SDXL3.5B0.980.740.390.850.150.230.55
>     
>     
>       DALL-E 3-0.960.870.470.830.430.450.67
>     
>     
>       SD3-Medium2B0.990.940.720.890.330.600.74
>     
>     
>       FLUX.1-dev12B0.980.930.750.930.680.650.82
>     
>     
>       Qwen-Image20B0.990.920.890.880.760.770.87
>     
>     
>       Unified Models
>     
>     
>       Janus-Pro-7B7B0.990.890.590.900.790.660.80
>     
>     
>       OmniGen24B1.000.950.640.880.550.760.80
>     
>     
>       Show-o27B1.000.870.580.920.520.620.76
>     
>     
>       BAGEL†7B0.980.950.840.950.780.770.88
>     
>     
>       Mogao7B1.000.970.830.930.840.800.89
>     
>     
>       InternVL-U1.7B0.990.940.740.910.770.740.85
>     
>     
>       TUNA7B1.000.970.810.910.880.830.90
>     
>     
>       TUNA-27B0.990.960.800.910.840.760.87
>     
>     
>       🌟 Lance (Ours)3B1.000.940.840.970.870.810.90
>     
>   
> 
> † indicates methods that use LLM rewriters for prompt rewriting before generation.
> 
> GEdit-Bench Evaluation
> 
>   
>     
>       Models
>       #&nbsp;Params.
>       BC
>       CA
>       MM
>       MC
>       PB
>       ST
>       SA
>       SR
>       SRp
>       TM
>       TT
>       Avg/G_O
>     
>   
>   
>     
>       Generation-only Models
>     
>     
>       Gemini 2.0------------6.32
>     
>     
>       GPT Image 1-6.966.857.105.416.747.447.518.738.558.458.697.49
>     
>     
>       Qwen-Image-Edit20B8.238.307.338.057.496.748.578.098.298.488.508.01
>     
>     
>       Unified Models
>     
>     
>       Lumina-DiMOO8B3.434.273.082.774.745.194.443.804.382.684.203.91
>     
>     
>       Ovis-U11.2B7.496.886.214.795.986.467.497.257.274.486.316.42
>     
>     
>       BAGEL7B7.326.916.384.754.576.157.907.167.027.326.226.52
>     
>     
>       InternVL-U1.7B7.087.056.387.026.036.277.136.556.336.596.856.66
>     
>     
>       InternVL-U (w/ CoT)1.7B7.057.876.506.995.776.107.337.167.127.366.466.88
>     
>     
>       🌟 Lance (Ours)3B7.737.747.287.837.507.037.647.857.714.467.577.30
>     
>   
> 
> VBench Evaluation (Video Generation)
> 
>   
>     
>       Type
>       Model
>       #&nbsp;Params.
>       Total Score ↑
>     
>   
>   
>     
>       Gen. Only
>       ModelScope1.7B75.75
>     
>     
>       LaVie3B77.08
>     
>     
>       Show-16B78.93
>     
>     
>       AnimateDiff-V2-80.27
>     
>     
>       VideoCrafter-2.0-80.44
>     
>     
>       CogVideoX5B81.61
>     
>     
>       Kling-81.85
>     
>     
>       Open-Sora-2.0-81.71
>     
>     
>       Gen-3-82.32
>     
>     
>       Step-Video-T2V30B81.83
>     
>     
>       Hunyuan Video-83.43
>     
>     
>       Wan2.1-T2V14B83.69
>     
>     
>       Unified
>       HaproOmni7B78.10
>     
>     
>       Emu38B80.96
>     
>     
>       VILA-U7B74.01
>     
>     
>       Show-o22B81.34
>     
>     
>       TUNA1.5B84.06
>     
>     
>       🌟 Lance (Ours)3B85.11
>     
>   
> 
> #### Running Benchmarks
> 
> Ready-to-run benchmark scripts are provided under `benchmarks/`:
> 
> | Benchmark              | Modality | Script                                                        |
> |------------------------|----------|---------------------------------------------------------------|
> | GenEVAL (image gen)    | Image    | `benchmarks/image_gen/GenEVAL/sample_GenEVAL.sh`              |
> | DPG (image gen)        | Image    | `benchmarks/image_gen/DPG/sample_DPG.sh`                      |
> | GEdit (image edit)     | Image    | `benchmarks/image_gen/GEdit/sample_GEdit.sh`                  |
> | VBench (video gen)     | Video    | `benchmarks/video_gen/Vbench/sample_vbench.sh`                |
> 
> 
> ### Recommended Environment
> 
> - **Software:** Python 3.10+, CUDA 12.4+ (required)
> - **Hardware:** A GPU with at least 40GB VRAM is required for inference
> 
> We have tested the following dependency combinations on NVIDIA A100:
> 
> - PyTorch 2.8.0 + cu126 + flash-attn 2.8.3
> -

## 延伸閱讀

相關概念：[[多模態]] · [[圖像生成]] · [[視頻生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]]

[GitHub](https://github.com/bytedance/Lance) · [官方網站](https://lance-project.github.io)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態生成" AND file.name != "bytedance--Lance"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "bytedance--Lance"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "bytedance--Lance" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "bytedance--Lance"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","圖像生成","視頻生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "bytedance--Lance" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/bytedance--Lance");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "bytedance--Lance" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "bytedance" AND file.name != "bytedance--Lance"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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

> **2026-05-22** — 首次收錄
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

- [[2026-05-22|2026-05-22]] — 首次收錄，665 stars
