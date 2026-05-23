---
repo: bytedance/Lance
url: https://github.com/bytedance/Lance
owner: bytedance
owner_type: Organization
language: Python
license: Apache-2.0
description: "A 3B-active-parameter native unified multimodal model for image and video understanding, generation, and editing."
homepage: "https://lance-project.github.io"
stars: 764
stars_per_day: 109
forks: 40
open_issues: 11
created: 2026-05-15
pushed_at: 2026-05-22
first_seen: 2026-05-22
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "多模態"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-22
use_case: "一個統一的多模態模型，專注於圖像和視頻的理解、生成和編輯。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-29"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 104084
readme_length: 7902
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-22"
star_history: "2026-05-22:665,2026-05-23:764"
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
  - "一個統一的多模態模型，專注於圖像和視頻的理解、生成和編輯。"
---

# Lance

**764** stars · **109** stars/天 · 建立 7 天前 · Python · Apache-2.0

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
> 一個統一的多模態模型，專注於圖像和視頻的理解、生成和編輯。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (109 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在多模態應用中整合圖像和視頻處理的開發者。
> **一句話重點** Lance 的設計讓多模態處理變得更為簡單和高效，特別適合需要同時處理圖像和視頻的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態" && p.file.name !== "bytedance--Lance" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多模態 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，能夠快速實現多模態應用，值得一試。

> [!abstract] 核心創新
> Lance 是一個統一的多模態模型，能夠在單一框架內處理圖像和視頻的理解、生成及編輯。

## 專案簡介

Lance 是一個擁有 30 億個活躍參數的多模態模型，專門用於圖像和視頻的理解、生成及編輯。用戶可以透過簡單的指令進行圖像生成和視頻編輯，並且支持多輪一致性編輯，這使得它在創意工作流程中非常靈活。安裝過程中，使用者需要先克隆代碼庫，然後設置 Python 環境並安裝相應的依賴，這些步驟都在 README 中有詳細說明。Lance 的設計重點在於高效性，僅用 3B 的參數量就能在多項基準測試中表現出色，這是因為它採用了分階段的多任務訓練方法，並且完全從零開始訓練，除了 ViT 和 VAE 編碼器。與其他大型模型相比，Lance 的資源需求相對較低，僅需 128 台 A100 GPU 進行訓練。

與同類工具如 OpenAI 的 DALL-E 和 Google 的 Imagen 相比，Lance 在資源使用上更具優勢，且能在多模態任務上提供更好的整合性。實際使用中，使用者可能會遇到環境配置的問題，特別是對於依賴包的安裝，這些問題在 GitHub Issues 中已有反映。這個專案目前處於活躍開發中，社群反應迅速，對於錯誤修正和功能建議也持開放態度。總體來看，Lance 是一個值得關注的多模態模型，特別適合需要高效圖像和視頻處理的開發者。

**技術棧**：`Python 3.11` · `PyTorch 2.5.1` · `FlashAttention 2.8.3`

## 重點功能

- 統一多模態模型 — 同時支持圖像和視頻的理解、生成和編輯。
- 高效性能 — 僅用 3B 活躍參數，卻在多項基準測試中表現優異。
- 從零開始訓練 — 除了 ViT 和 VAE 編碼器外，所有部分均從頭訓練，確保模型的專一性。
- 多輪一致性編輯 — 支持在視頻編輯中保持風格一致性，適合創意工作流。
- 簡單的安裝流程 — 提供詳細的安裝步驟，方便用戶快速上手。

## 快速開始

1. 克隆代碼庫
```bash
git clone https://github.com/bytedance-seed/Lance.git
```
2. 設置環境
```bash
conda create -n Lance python=3.11 -y && conda activate Lance
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Hugging Face Hub。",
  "指令": "from huggingface_hub import snapshot_download\n\nsave_dir = \"./downloads/\"\nrepo_id = \"bytedance-research/Lance\"\ncache_dir = save_dir + \"/cache\"\nsnapshot_download(cache_dir=cache_dir,\n  local_dir=save_dir,\n  repo_id=repo_id,\n  local_dir_use_symlinks=False,\n  resume_download=True,\n  allow_patterns=[\"*.json\", \"*.safetensors\", \"*.bin\", \"*.py\", \"*.md\", \"*.txt\",\"*.pth\",],)",
  "預期輸出": "下載模型權重至指定目錄。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 764 stars（109/天），forks 40（5.2%），這顯示出一定的社群關注度。作者團隊來自 ByteDance，擁有豐富的 AI 研究背景，解決了多模態任務整合的痛點，之前的方案往往需要多個模型協同工作，這使得開發和維護變得複雜。最近的推廣活動和社群反饋也促進了這個專案的曝光度。技術上，隨著 GPU 性能的提升，訓練大型模型變得可行，這使得 Lance 的推出正好符合市場需求。forks/stars 比率在 5% 左右，顯示出有一定的實際使用者在進行修改和適配。

## 適合誰使用

**目標受眾**：需要在多模態應用中整合圖像和視頻處理的開發者。

> [!example] 使用場景
> - AI 藝術家用它來生成高質量的圖像，因為 Lance 的圖像生成能力在多項基準測試中表現出色。
> - 視頻編輯師用它來快速編輯視頻，因為 Lance 支持多輪一致性編輯，能夠在不同場景間保持風格一致。
> - 開發者用它來構建多模態應用，因為 Lance 的統一框架簡化了圖像和視頻的處理流程。

## 架構分析

Lance 採用了一個統一的多模態架構，將圖像和視頻處理整合在同一模型中。這種設計使得用戶可以在同一環境中進行多種任務，降低了開發的複雜度。資料流方面，模型使用了多任務學習的策略，通過共享參數來提高效率。

這種方法的代價在於可能會影響某些特定任務的性能，但整體上提升了模型的通用性。擴展性方面，模型的設計使得未來可以輕鬆添加新功能，但對於資源的需求仍然相對較高，特別是在訓練階段。整體而言，這種架構適合需要高效多模態處理的應用場景。

## 技術深入分析

Lance 的核心技術機制是基於多任務學習的統一多模態模型，使用了先進的 Transformer 架構來處理不同類型的數據。這使得模型在圖像和視頻生成方面都能保持高效性能。根據 README，模型的訓練需要 128 台 A100 GPU，這顯示出其對資源的需求相對較高。設計上，選擇 PyTorch 作為主要框架，這使得模型在開發和部署上都能夠利用 PyTorch 的生態系統，降低了學習曲線。技術上，Lance 依賴於多個外部庫，如 FlashAttention 和 Hugging Face Hub，這些依賴的穩定性對於整體性能至關重要。未來在擴展性方面，Lance 的設計允許輕鬆添加新功能，但在處理更大規模數據時可能會遇到瓶頸。整合方面，Lance 可以與主流的 CI/CD 工具鏈進行良好整合，但在特定環境下可能會遇到依賴衝突的問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用範例，對於新手來說非常友好。安裝過程中，使用者需要注意依賴包的安裝，這可能會造成一些困難。整體而言，花 30 分鐘應該能夠順利跑起來，尤其是對於有 Python 環境經驗的開發者。

## 優缺點分析

> [!success] 優點
> - 統一框架，簡化多模態任務的開發流程。
> - 高效能，僅用 3B 參數即可達到良好效果。
> - 支持多輪一致性編輯，適合創意工作流。

> [!danger] 缺點
> - 安裝過程中可能會遇到依賴問題。
> - 需要高性能的 GPU 支持，對硬體要求較高。
> - 目前僅支持 Python 3.11，對於舊版本的兼容性差。

> [!warning] 注意事項
> - 需要 NVIDIA GPU 進行訓練和推理。
> - 安裝過程中可能會遇到依賴包缺失的問題。
> - 目前只支持 Python 3.11，對於舊版本的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [openai/DALL-E](https://github.com/openai/DALL-E) | DALL-E 專注於圖像生成，而 Lance 則整合了圖像和視頻的生成及編輯功能，適合需要多模態處理的應用。 |
| [google/Imagen](https://github.com/google/Imagen) | Imagen 在圖像生成方面表現卓越，但缺乏視頻生成能力，Lance 提供了一個更全面的解決方案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/DALL-E](https://github.com/openai/DALL-E) | DALL-E 專注於圖像生成，並且在生成質量上表現優異，但缺乏視頻生成能力。 | 如果你的需求主要是圖像生成，且希望使用一個成熟的生態系統，DALL-E 會是更好的選擇。 | medium，因為需要重新適配 API 和數據格式。 |
| [google/Imagen](https://github.com/google/Imagen) | Imagen 在圖像生成方面表現卓越，但不支持視頻生成，這使得 Lance 在多模態應用上更具優勢。 | 如果你的需求僅限於高質量的圖像生成，Imagen 會是更好的選擇。 | medium，因為需要重新設計數據流和模型調用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Lance** | **DALL-E** | **Imagen** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | DALL-E 專注於圖像生成，並且在生成質量上表現優異，但缺乏視頻生成能力。 | Imagen 在圖像生成方面表現卓越，但不支持視頻生成，這使得 Lance 在多模態應用上更具優勢。 |
> | 遷移成本 | - | medium，因為需要重新適配 API 和數據格式。 | medium，因為需要重新設計數據流和模型調用。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是圖像生成，且希望使用一個成熟的生態系統，D | 如果你的需求僅限於高質量的圖像生成，Imagen 會是更好的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於試驗性項目，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到依賴包缺失的問題，特別是在不同的操作系統上。
  - 解法：確保使用 conda 環境，並仔細檢查 requirements.txt 中的依賴。
- [MEDIUM] 模型權重下載過程中可能會出現網絡問題，導致下載失敗。
  - 解法：使用 resume_download 參數來繼續未完成的下載。
- [MEDIUM] 在某些環境下，flash-attn 的安裝可能會失敗。
  - 解法：可以嘗試安裝預編譯的 wheel 文件。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創意團隊需要快速生成視頻內容 | 非常適合 | Lance 的多模態功能可以快速滿足創意需求。 |
| 大型企業需要穩定的圖像生成服務 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 學術研究需要探索多模態模型的潛力 | 適合 | Lance 提供了豐富的多模態功能，適合研究用途。 |
| 個人開發者想要快速實現圖像生成應用 | 適合 | 安裝和使用流程相對簡單，能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠快速實現多模態應用，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴的庫來自於知名的開源社群，安全性相對較高。

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
| Forks | 40 |
| Open Issues | 11 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-22 |
| 建立日期 | 2026-05-15 |
| 官方網站 | [Link](https://lance-project.github.io) |
| Repo 大小 | 101.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/bytedance/Lance) |
| Topics | `image-editing` `image-generation` `image-understanding` `unified-multimodal-models` `video-generation` `video-understanding` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `absl-py` `accelerate` `addict` `albumentations` `annotated-types` `bitsandbytes` `certifi` `cffi` `charset-normalizer` `click` `Cython` `decord` `einops` `einops-exts` `filelock`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@fengyifu2000](https://github.com/fengyifu2000) | 44 |
> | [@cleardusk](https://github.com/cleardusk) | 34 |
> | [@Corleone-Huang](https://github.com/Corleone-Huang) | 4 |
> | [@fenfenfenfan](https://github.com/fenfenfenfan) | 1 |
> | [@oss-bd](https://github.com/oss-bd) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，對於問題的回應速度較快。
**連結**：[文件](https://lance-project.github.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-22 ~ 2026-05-22）
> **活躍天數** 1 天 · **最新 commit** chore(env): refine dependency setup

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/bytedance/Lance/issues/4) | Thank you for your excellent work. Will open-source the trai | 1 | 2 |
> | [#18](https://github.com/bytedance/Lance/issues/18) | 不是缺包就是缺环境 `enhancement` | 0 | 1 |
> | [#17](https://github.com/bytedance/Lance/issues/17) | KeyError: 'default' issue | 0 | 0 |
> | [#16](https://github.com/bytedance/Lance/issues/16) | 脚本上没有提供prompt.json的参数，也没有设置存放的位置，只有example文件夹，那怎么去推理 | 0 | 1 |
> | [#15](https://github.com/bytedance/Lance/issues/15) | 没有图生视频 | 0 | 1 |

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
> git clone https://github.com/bytedance-seed/Lance.git
> cd Lance
> ```
> 
> Then, set up the environment:
> 
> ```bash
> conda create -n Lance python=3.11 -y
> conda activate Lance
> pip install torch==2.5.1+cu124 torchvision==0.20.1+cu124 torchaudio==2.5.1+cu124 --index-url https://download.pytorch.org/whl/cu124
> pip install -r requirements.txt
> pip install flash-attn==2.8.3 --no-build-isolation
> ```
> 
> > **Note:** If installing `flash-attn` from source fails, you can install the prebuilt wheel instead:
> >
> > ```bash
> > pip install --no-cache-dir --no-deps --force-reinstall \
> > "https://github.com/Dao-AILab/flash-attention/releases/download/v2.8.3/flash_attn-2.8.3%2Bcu12torch2.5cxx11abiFALSE-cp311-cp311-linux_x86_64.whl"
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
> 
> ### Gradio
> ```bash
> python lance_gradio_t2v_v2t.py --gpus 0 --server-port 7860
> ```
> 
> 
> ## 📞 Contact
> 
> For questions, issues, or collaborations, please contact [Mengqi Huang](https://corleone-huang.github.io/) and [Jianzhu Guo](https://guojianzhu.com/).

## 延伸閱讀

相關概念：[[多模態]] · [[圖像生成]] · [[視頻生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/bytedance/Lance) · [官方網站](https://lance-project.github.io)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態" AND file.name != "bytedance--Lance"
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
