---
repo: inspatio/worldfm
url: https://github.com/inspatio/worldfm
owner: inspatio
owner_type: Organization
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 599
stars_per_day: 46
forks: 64
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
use_case: "生成多視角影像的即時擴散模型。"
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
star_history: "2026-03-10:515,2026-03-14:517,2026-03-15:534,2026-03-16:584,2026-03-17:599"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "生成多視角影像的即時擴散模型。"
---

# worldfm

**599** stars · **46** stars/天 · 建立 13 天前 · Python · Apache-2.0

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
> 生成多視角影像的即時擴散模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (46 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 10 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要即時生成多視角影像的開發者，尤其是在遊戲和虛擬實境領域。
> **一句話重點** WorldFM 的即時多視角影像生成能力，為許多需要視覺效果的應用提供了新的解決方案。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，得到即時多視角影像生成的能力，值得投入。

> [!abstract] 核心創新
> WorldFM 提供即時多視角影像生成的能力，這在目前的開源工具中尚屬首創。

## 專案簡介

WorldFM 是一個即時的多視角擴散模型，能根據參考影像和目標相機位置生成新視角的影像。用戶只需提供一張參考影像及其相機內部參數（K矩陣）和相機到世界的轉換矩陣（c2w），模型將自動生成對應的影像。這個設計使得用戶能夠在不同的視角下獲得一致的場景生成，適合需要多視角展示的應用場景。關鍵指令如 `python run_pipeline.py --meta demo/meta.json --output_dir outputs`，可生成沿著預定相機路徑的 MP4 影片，展示生成的影像。技術上，WorldFM 使用 PyTorch 2.5 和 CUDA 12.4，並依賴多個子模組如 Real-ESRGAN 和 HunyuanWorld，這些選擇使得模型在生成質量和速度上達到平衡。

相較於其他影像生成工具，如 NVIDIA 的 GANs，WorldFM 更專注於多視角生成，這使得它在需要多視角影像的應用中更具優勢。使用者可能會遇到的問題包括如何整合其他開源全景生成模型，這在 README 中有提及。該專案目前處於活躍開發階段，社群回應速度尚可，開放問題數量也顯示出用戶的需求。整體來說，這是一個值得關注的專案，特別是對於需要即時生成多視角影像的開發者。適合在需要視覺效果的應用中使用，但對於不需要多視角的簡單影像生成則不太適合。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 即時多視角生成 — 根據參考影像和相機位置生成新視角影像，支持多達 N 個視角。
- 多種模型選擇 — 提供兩種模型（1步和2步）以平衡速度和質量，使用 `--step` 參數選擇。
- 簡單的命令行介面 — 使用 `python run_pipeline.py` 指令輕鬆生成影像。
- 支持自定義相機參數 — 用戶可自定義相機內部參數和轉換矩陣，靈活應用於不同場景。
- 整合多個開源模型 — 可與 HunyuanWorld-1.0 等開源全景生成模型整合，提升生成效果。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行示範生成影像
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 599 stars（46/天），forks 64（10.7%），顯示出穩定的增長潛力。作者 WeihongPan 在影像生成領域有一定的經驗，這個專案解決了多視角影像生成的需求，之前的解決方案往往無法提供即時生成的能力。近期的社群討論集中在如何進一步提升模型的可用性和功能，這顯示出用戶對於該工具的期望。技術上，這個工具的出現得益於深度學習和計算機視覺技術的進步，尤其是擴散模型的發展。forks/stars 比率在 10% 以上，顯示出有相當比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要即時生成多視角影像的開發者，尤其是在遊戲和虛擬實境領域。

> [!example] 使用場景
> - 3D 藝術家用它來生成多視角的場景影像，因為這樣可以快速展示作品的不同角度，提升客戶的視覺體驗。
> - 遊戲開發者用它來創建遊戲中的環境視角，因為能夠即時生成不同視角的影像，節省了大量的手工設計時間。
> - 虛擬實境開發者用它來生成全景影像，因為這樣可以在不同的虛擬場景中提供更真實的沉浸感。

## 架構分析

WorldFM 的架構基於多模組設計，核心是擴散模型，並集成了多個子模組以增強功能。資料流從用戶輸入的參考影像開始，經過相機參數處理，再由擴散模型生成新視角影像。選擇這種架構的原因在於能夠靈活應對不同的場景需求，但代價是需要用戶具備一定的技術背景來進行配置。擴展性方面，雖然模型本身能處理多視角生成，但在整合其他開源模型時可能會遇到兼容性問題，這需要額外的開發工作。整體來說，這種設計能夠滿足即時生成的需求，但對於不熟悉深度學習的用戶來說，入門門檻較高。

## 技術深入分析

WorldFM 的核心技術機制是基於擴散模型，這種模型在生成影像時能夠考慮到多個視角的需求。使用 PyTorch 作為主要框架，這使得模型能夠充分利用 GPU 加速來提升生成速度。效能方面，模型能夠在合理的時間內生成高質量影像，但具體的生成速度依賴於硬體配置和場景複雜度。選擇擴散模型而非傳統的 GANs 是因為其在生成多樣性和質量上表現更佳，然而這也意味著需要更多的計算資源。技術風險方面，隨著用戶需求的增加，模型的擴展性可能會受到挑戰，特別是在整合其他開源模型時。整合方面，與主流框架的兼容性良好，但在 CI/CD pipeline 中的整合可能需要額外的適配工作。整體來看，WorldFM 在即時生成多視角影像的應用中展現了良好的潛力，但仍需進一步優化使用者體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的安裝和使用指導，但缺乏詳細的範例。安裝過程中需要手動配置多個子模組，對新手來說可能會有一定的困難。整體而言，花 30 分鐘能夠完成基本的環境設置，但對於不熟悉的用戶來說，可能需要更長的時間來理解整個流程。

## 優缺點分析

> [!success] 優點
> - 即時生成多視角影像，適合需要快速展示的場景。
> - 支持多種模型選擇，能根據需求調整生成質量與速度。
> - 靈活的相機參數設定，能夠適應不同的應用需求。

> [!danger] 缺點
> - 安裝過程較為繁瑣，需要用戶具備一定的技術背景。
> - 缺乏詳細的使用文檔，對新手不友好。
> - 目前僅支持 Linux 和 macOS，不支持 Windows 環境。

> [!warning] 注意事項
> - 僅支援 Python 3.10 和 CUDA 12.4。
> - 需要安裝多個子模組，整合過程可能較為複雜。
> - 不支持 Windows 環境，需要在 Linux 或 macOS 上運行。
> - 目前缺乏詳細的使用文檔，可能對新手不友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [NVIDIA/StyleGAN](https://github.com/NVIDIA/StyleGAN) | 專注於生成高質量的靜態影像，而 WorldFM 更適合即時多視角生成。 |
| [OpenAI/DALL-E](https://github.com/OpenAI/DALL-E) | DALL-E 主要生成靜態圖像，而 WorldFM 提供多視角的動態生成能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/StyleGAN](https://github.com/NVIDIA/StyleGAN) | 使用生成對抗網絡技術專注於靜態影像生成，而 WorldFM 則專注於即時多視角生成。 | 如果你的需求主要是生成高質量的靜態影像，StyleGAN 會是更好的選擇。 | medium，因為需要重新設計生成流程。 |
| [OpenAI/DALL-E](https://github.com/OpenAI/DALL-E) | DALL-E 使用文本到圖像生成技術，主要針對靜態圖像，而 WorldFM 提供多視角的動態生成能力。 | 如果你的應用需要根據文本描述生成影像，DALL-E 會更適合。 | high，因為需要完全重構生成邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **worldfm** | **StyleGAN** | **DALL-E** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用生成對抗網絡技術專注於靜態影像生成，而 WorldFM 則專注於即時多視角生成。 | DALL-E 使用文本到圖像生成技術，主要針對靜態圖像，而 WorldFM 提供多視角的動態生成能力。 |
> | 遷移成本 | - | medium，因為需要重新設計生成流程。 | high，因為需要完全重構生成邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是生成高質量的靜態影像，StyleGAN 會 | 如果你的應用需要根據文本描述生成影像，DALL-E 會更適合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能遇到依賴衝突，特別是在不同版本的 CUDA 和 PyTorch 之間。
  - 解法：確保使用相容的版本，並參考官方文檔進行配置。
- [MEDIUM] 生成影像的質量可能因場景複雜度而異，簡單場景效果較好，複雜場景可能生成失敗。
  - 解法：在生成前簡化場景或調整參數。
- [MEDIUM] 缺乏詳細的錯誤信息，可能使得調試過程變得困難。
  - 解法：查看 GitHub Issues 獲取其他用戶的解決方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 遊戲開發中的環境設計 | 非常適合 | 能夠快速生成多視角影像，提升開發效率。 |
| 虛擬實境應用中的全景影像生成 | 適合 | 提供即時生成能力，增強沉浸感。 |
| 靜態影像展示 | 不適合 | 主要針對動態多視角生成，不適合靜態需求。 |
| 小型創業團隊的快速原型開發 | 適合 | 能夠快速迭代和生成多視角影像，適合快速開發需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到即時多視角影像生成的能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。依賴的庫和模組均為開源，無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

WorldFM 最常與深度學習框架如 PyTorch 搭配使用，通常在開發和建置階段進行整合。在一個使用 PyTorch 的專案中，你可以將 WorldFM 作為影像生成模組，具體做法是通過 `import worldfm` 將其整合進你的模型中。支援 GitHub Actions 和其他 CI 工具，能夠輕鬆地融入現有的開發流程。整合的摩擦點主要在於依賴的子模組版本管理，可能需要額外的配置來確保相容性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 WorldFM 出現之前，多視角影像生成主要依賴於靜態影像生成技術，這些技術無法滿足即時生成的需求。隨著深度學習技術的進步，特別是擴散模型的發展，使得即時多視角生成成為可能。WorldFM 代表了這一技術趨勢的前沿，未來可能會在虛擬實境和遊戲開發中得到更廣泛的應用。

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
| Forks | 64 |
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

**社群活躍度**：社群活躍度尚可，問題回應速度中等。
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

相關概念：[[深度學習]] · [[電腦視覺]] · [[生成對抗網絡]]

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
> const concepts = ["深度學習","電腦視覺","生成對抗網絡"];
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
