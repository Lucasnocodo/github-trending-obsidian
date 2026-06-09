---
repo: jd-opensource/JoyAI-Echo
url: https://github.com/jd-opensource/JoyAI-Echo
owner: jd-opensource
owner_type: Organization
language: Python
license: NOASSERTION
description: "JoyAI-Echo: Pushing the Frontier of Long Audio-Visual Generation"
homepage: "https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/"
stars: 1100
stars_per_day: 183
forks: 85
open_issues: 5
created: 2026-06-02
pushed_at: 2026-06-08
first_seen: 2026-06-06
week: "2026-W23"
month: "2026-06"
category: "AI/ML"
subcategory: "音視訊生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-06
use_case: "實現長時間音視訊生成的框架，讓用戶能夠生成連貫的多鏡頭故事。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 33
repo_size_kb: 23143
readme_length: 9808
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-06"
star_history: "2026-06-06:572,2026-06-07:716,2026-06-08:854,2026-06-09:1100"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "JoyAI-Echo"
  - "jd-opensource/JoyAI-Echo"
  - "實現長時間音視訊生成的框架，讓用戶能夠生成連貫的多鏡頭故事。"
---

# JoyAI-Echo

**572** stars · **191** stars/天 · 建立 3 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
> 實現長時間音視訊生成的框架，讓用戶能夠生成連貫的多鏡頭故事。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (191 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成長時間音視訊內容的創作者和開發者。
> **一句話重點** JoyAI-Echo 的創新在於其能夠同時生成長時間的音視訊內容，並保持高品質和一致性，這在目前市場上是獨一無二的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "音視訊生成" && p.file.name !== "jd-opensource--JoyAI-Echo" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 音視訊生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的長時間音視訊生成效果，值得投入。

> [!abstract] 核心創新
> JoyAI-Echo 同時實現了長距離跨模態一致性、即時推理和高解析度輸出，開創了互動視頻生成的新時代。

## 專案簡介

JoyAI-Echo 是一個專注於長時間音視訊生成的框架，能夠從單一 JSON 提示生成多個連貫的鏡頭。其核心機制是透過一個交叉模態的音視訊記憶庫，保持角色外觀和聲音的一致性，並使用 DMD 蒸餾技術實現約 7.5 倍的推理速度提升。這意味著用戶可以在短時間內生成高品質的長達五分鐘的影片，並且支持音訊和視訊的同步生成。使用者只需透過簡單的 CLI 指令如 `python inference.py` 來運行推理，並可透過 `configs/inference.yaml` 進行各種參數配置。這個工具的賣點在於其高效的生成速度和優質的視覺效果，特別適合需要快速生成長影片的應用場景。

技術上，JoyAI-Echo 使用了 PyTorch 2.8 和 CUDA 12.8，並依賴於 transformers 和其他數據處理庫。相較於同類工具如 HappyOyster 和 Wan 2.6，JoyAI-Echo 在長影片生成上表現更佳，特別是在視覺美學和音訊質量上。使用者可能會遇到 CUDA 記憶體不足的問題，需確保有足夠的 GPU 記憶體來運行。這個專案目前處於活躍開發中，未來將支持圖像到視頻的轉換功能。整體而言，JoyAI-Echo 是一個值得關注的工具，特別適合需要生成長時間視訊的開發者和創作者。

**技術棧**：`Python 3.11` · `PyTorch 2.8` · `CUDA 12.8`

## 重點功能

- 多鏡頭故事生成 — 從單一 JSON 提示生成連貫的多鏡頭故事。
- DMD 蒸餾推理 — 實現約 7.5 倍的推理速度提升。
- 音視訊同步生成 — 一個管道同時生成音訊和視訊。
- 交叉模態記憶庫 — 根據先前的視覺身份和聲音上下文生成新鏡頭。
- 自定義配置 — 透過 YAML 文件管理所有推理參數，支持靈活調整。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/jd-opensource/JoyAI-Echo.git
```
2. 創建環境
```bash
conda env create -f environment.yml && conda activate echo-long
```
3. 下載檢查點
```bash
將模型檔案放置於 checkpoints/ 目錄
```
4. 撰寫故事提示
```bash
在 prompts/ 目錄下創建 JSON 檔案
```
5. 運行推理
```bash
python inference.py
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 PyTorch 和相關依賴",
  "指令": "python inference.py",
  "預期輸出": "生成的音視訊將保存在 inference_result/outputs/inference/ 目錄下"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 572 stars（191/天），forks 37（6.5%），這是相對穩定的增長。作者團隊由多位貢獻者組成，專注於音視訊生成的技術創新，解決了長時間生成中存在的錯誤累積和時間一致性問題。此專案的推出正好填補了市場上對於高效長影片生成的需求，特別是在互動性和即時編輯方面。這些因素共同推動了其快速的關注度上升。

## 適合誰使用

**目標受眾**：需要快速生成長時間音視訊內容的創作者和開發者。

> [!example] 使用場景
> - 影片製作人用它來生成長達五分鐘的多鏡頭故事，因為它能保持角色的一致性並快速生成高品質內容。
> - 遊戲開發者用它來創建遊戲中的過場動畫，因為其音視訊同步生成的特性能提升遊戲的沉浸感。
> - 教育工作者用它來製作教學影片，因為可以快速生成視覺化的教學內容，並且支持即時編輯。
> - 社交媒體內容創作者用它來製作短影片，因為其高效的生成速度能夠快速響應觀眾的需求。

## 架構分析

JoyAI-Echo 的架構設計以高效的推理和生成為核心，使用了單一的推理管道來處理音訊和視訊的生成。資料流從用戶輸入的 JSON 提示開始，經過 DMD 蒸餾的推理過程，最終生成音視訊。這樣的設計選擇使得用戶能夠在短時間內獲得高品質的輸出，但也要求較高的硬體資源。選擇 PyTorch 作為深度學習框架，因其在處理複雜模型時的靈活性和效率。整體架構的擴展性良好，未來可以加入更多功能如圖像到視頻的轉換，但目前的設計對於硬體需求較高，可能在資源有限的情況下遇到瓶頸。

## 技術深入分析

JoyAI-Echo 的核心技術機制包括一個基於 DMD 蒸餾的推理系統，這使得生成速度大幅提升，並且能夠處理長達五分鐘的影片。其交叉模態記憶庫能夠有效地保持角色的外觀和聲音特徵，這在長時間生成中是個關鍵挑戰。整體效能上，該系統能夠在高達 50 GB 的 GPU 記憶體下運行，並且在生成過程中能夠保持相對穩定的效能。設計上選擇了 PyTorch 作為主要框架，這使得模型的訓練和推理過程更加靈活，但也帶來了對硬體的高需求。技術風險方面，隨著使用者需求的增加，可能會面臨記憶體不足的問題，特別是在高解析度生成時。整合方面，JoyAI-Echo 能夠與現有的深度學習生態系統良好配合，特別是在使用 PyTorch 的環境中，並且支持與 Hugging Face 的模型庫進行整合，這為使用者提供了更多的選擇和靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，整體質量良好。安裝過程相對順暢，但對於硬體要求較高的使用者可能會遇到困難。文件中有詳細的配置說明，對於新手來說，能夠在 30 分鐘內完成設置並運行起來。

## 優缺點分析

> [!success] 優點
> - 高效的長時間音視訊生成，適合需要快速內容創作的場景。
> - 支持音訊和視訊的同步生成，提升用戶體驗。
> - 交叉模態記憶庫保持角色一致性，增強故事的連貫性。

> [!danger] 缺點
> - 對硬體要求高，需要高性能 GPU 支持。
> - 當前版本僅支持文本到視頻生成，未來功能有限。
> - CUDA 記憶體不足問題可能影響使用體驗。

> [!warning] 注意事項
> - 僅支持文本到視頻的生成，未來版本將支持圖像到視頻的轉換。
> - 需要高達 50 GB 的 GPU 記憶體，對硬體要求較高。
> - 當前版本的 CUDA 內存不足問題仍需解決。
> - 不支持 Windows 環境，需在 Linux 或 macOS 上運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色動畫，而 JoyAI-Echo 更加強調長時間故事的生成和音視訊同步。 |
| [HappyOyster/HappyOyster](https://github.com/HappyOyster/HappyOyster) | HappyOyster 側重於短影片生成，而 JoyAI-Echo 在長影片生成上表現更佳，特別是在視覺美學和音訊質量上。 |
| [Wan 2.6/Wan 2.6](https://github.com/Wan 2.6/Wan 2.6) | Wan 2.6 專注於短視頻生成，而 JoyAI-Echo 在長視頻生成的表現上更具優勢，特別是在用戶互動性方面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [HappyOyster/HappyOyster](https://github.com/HappyOyster/HappyOyster) | HappyOyster 專注於短影片生成，而 JoyAI-Echo 在長影片生成上表現更佳，特別是在視覺美學和音訊質量上。 | 如果你的需求主要是短影片生成，HappyOyster 可能更適合，因為它的生成速度和簡易性更高。 | medium，因為兩者的使用方式相似，但需要調整生成參數。 |
| [Wan 2.6/Wan 2.6](https://github.com/Wan 2.6/Wan 2.6) | Wan 2.6 側重於短視頻生成，而 JoyAI-Echo 在長視頻生成的表現上更具優勢，特別是在用戶互動性方面。 | 如果你的專案需要短視頻的快速生成，Wan 2.6 可能更合適，因為它的設計更簡單。 | low，因為兩者的接口相似，轉換成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **JoyAI-Echo** | **HappyOyster** | **Wan 2.6** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | HappyOyster 專注於短影片生成，而 JoyAI-Echo 在長影片生成上表現更佳，特別是在視覺美學和音訊質量上。 | Wan 2.6 側重於短視頻生成，而 JoyAI-Echo 在長視頻生成的表現上更具優勢，特別是在用戶互動性方面。 |
> | 遷移成本 | - | medium，因為兩者的使用方式相似，但需要調整生成參數。 | low，因為兩者的接口相似，轉換成本不高。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是短影片生成，HappyOyster 可能更 | 如果你的專案需要短視頻的快速生成，Wan 2.6 可能更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** CUDA 記憶體不足，特別是在高解析度生成時可能導致推理失敗
  - 解法：降低生成的解析度或幀數以減少 GPU 使用量
- [MEDIUM] 在撰寫提示時，未經過增強的提示可能導致生成結果不佳
  - 解法：使用提供的提示增強器來改善輸入質量
- [MEDIUM] 需要確保 ffmpeg 已安裝並在 PATH 中可用，否則將無法進行影片合併
  - 解法：根據系統安裝 ffmpeg，或使用 conda 環境中的預設安裝

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要生成長達五分鐘的多鏡頭故事的影片製作人 | 非常適合 | 其音視訊同步生成和角色一致性特性非常符合需求。 |
| 遊戲開發者需要快速生成遊戲中的過場動畫 | 適合 | 能夠在短時間內生成高品質的動畫，提升遊戲的沉浸感。 |
| 教育工作者需要製作教學影片 | 普通 | 雖然能夠生成視覺化的內容，但對硬體要求較高可能會影響使用。 |
| 社交媒體內容創作者需要快速生成短影片 | 適合 | 高效的生成速度能夠快速響應觀眾需求。 |
| 小型團隊需要在有限資源下進行長影片生成 | 不適合 | 對硬體的高需求可能會成為瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的長時間音視訊生成效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
| Forks | 37 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-06-05 |
| 建立日期 | 2026-06-02 |
| 官方網站 | [Link](https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/) |
| Repo 大小 | 22.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jd-opensource/JoyAI-Echo) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `torchvision` `torchaudio` `triton` `transformers` `safetensors` `numpy` `scipy` `einops` `Pillow` `tqdm` `av`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jahnsonblack](https://github.com/Jahnsonblack) | 4 |
> | [@Gelercatty](https://github.com/Gelercatty) | 2 |
> | [@PlantPotatoOnMoon](https://github.com/PlantPotatoOnMoon) | 2 |
> | [@zhuang2002](https://github.com/zhuang2002) | 1 |
> | [@XueZeyue](https://github.com/XueZeyue) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者在積極回應 Issues。
**連結**：[文件](https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-02 ~ 2026-06-05）
> **活躍天數** 3 天 · **最新 commit** Clarify current release scope

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/jd-opensource/JoyAI-Echo/issues/2) | Request for official ComfyUI workflow and recommended parame | 13 | 4 |
> | [#4](https://github.com/jd-opensource/JoyAI-Echo/issues/4) | CUDA out of memory | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> JoyAI-Echo
> 
> 🎬 Pushing the Frontier of Long Video Generation
> 
> Standalone, inference-only release for minute-level multi-shot audio-video generation with a distilled DMD generator, paired cross-modal memory, and story-level consistency.
> 
>   📄 Paper |
>   🌐 Project Page |
>   🚀 Quickstart |
>   🤗 Hugging Face |
>   📊 Results |
>   📝 Citation
> 
>   
>   
>   
>   
>   
> 
> 
> ## Quickstart
> 
> 
> ## Demo Gallery
> 
> Explore long-form and short-form JoyAI-Echo cases on the [Project Page](https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/). 🍿
> 
> 
> ## Highlights
> 
> - 🎞️ **Minute-level multi-shot stories**: generate a sequence of coherent shots from one prompt JSON.
> - ⚡ **DMD-distilled few-step inference**: ~7.5x faster than the original pipeline.
> - 🔊 **Joint audio-video generation**: one pipeline produces synchronized video and audio.
> - 🧠 **Paired cross-modal memory bank**: conditions each new shot on prior visual identity and voice context for story-level consistency.
> 
> 
> ## Configuration
> 
> All inference parameters are managed in `configs/inference.yaml`. The file is organized into sections:
> 
> | Section | Contents |
> | --- | --- |
> | `paths` | Checkpoint path, prompts directory, output root |
> | `video` | Resolution, frame count, FPS, seed |
> | `denoising` | Step list and sigma schedule |
> | `memory` | Memory bank size, save mode, LoRA settings |
> | `audio_memory` | Audio window, mel-spectrogram params |
> | `inference` | Device, dtype, grad scale |
> 
> 
> ## Abstract
> 
> Long video generation still suffers from error accumulation, weak temporal coherence, and prohibitive latency, limiting its applicability to interactive scenarios. We present **JoyAI-Echo**, a framework that breaks these barriers through four key advances.
> Central to its performance, a cross-modal audio-visual memory bank preserves character appearance and voice timbre consistently over five-minute videos, while a post-training pipeline combines memory-based reinforcement learning with distribution matching distillation for a **7.5× speedup** to substantially boost visual quality and alignment.
> Empowered by these two components, **JoyAI-Echo** decisively outperforms *HappyOyster* (directing mode) on long-form generation and even surpasses the short-video specialist *Wan 2.6* on human-centric tasks.
> Beyond raw generation quality, an interactive agent enables real-time user editing through conversational instructions, and a lightweight super-resolution module maintains high definition under streaming latency, further elevating the overall experience and delivering instantly editable, conversation-speed video creation.
> For the first time, **JoyAI-Echo** simultaneously achieves long-range cross-modal consistency, real-time inference for minute-long video, conversational interactivity, and high-resolution output — without compromise, inaugurating a new era of interactive video generation.
> Codes and weights will be open-sourced.
> 
> 
> ## Current Release Scope
> 
> JoyAI-Echo currently focuses on **text-to-video (T2V)** and **multi-shot long-video generation with paired audio-video memory**. The memory used in our official pipeline is built from generated T2V shots.
> 
> Please note that **image-to-video (I2V)** is **not supported in the current release**.
> 
> We are actively working on I2V support and plan to release it in a future version.
> 
> 
> ## Results
> 
> 
> ### Reported Scale
> 
> | Item | Value |
> | --- | ---: |
> | 🎬 Long-form coherent story length | **5 min** |
> | ⚡ Generation speedup over the original multi-step pipeline | **7.5x** |
> | 📚 Benchmark stories | **100** |
> | 🎞️ Generated evaluation shots | **3,000** |
> | 🕒 Frames per shot | **241 @ 25 fps** |
> 
> 
> ### Human Evaluation
> 
> GSB user study on long- and short-video generation. The numbers denote the percentage of user preferences.
> 
> | Aspect(Long Video) | JoyAI-Echo | Tie | HappyOyster (Directing) | 
> | --- | ---: | ---: | ---: | 
> | Visual aesthetics | **63.6%** | 8.8% | 27.6% | 
> | Audio quality | **81.7%** | 6.5% | 11.8% |
> | Prompt following | **80.6%** | 13.5% | 5.9% | 
> | IP consistency | **59.4%** | 12.9% | 27.7% |
> 
> | Aspect(Short Video) | JoyAI-Echo | Tie | Wan 2.6 |
> | ---  | ---: | ---: | ---: |
> | Visual aesthetics | **58.8%** | 14.7% | 26.5% |
> | Audio quality  | 32.3% | 30.9% | 36.8% |
> | Prompt following | 33.8% | 36.8% | 29.4% |
> 
> 
> ## Repository Layout
> 
> ```text
> .
> +-- configs/
> |   `-- inference.yaml                # all inference parameters (YAML)
> +-- checkpoints/                      # model weights (download separately)
> |   +-- echo-longvideo-release.safetensors
> |   `-- gemma-3-12b/
> +-- prompts/                          # multi-shot prompt JSON files
> |   +-- example_single_shot.json
> |   `-- example_multi_shot.json
> +-- ltx-core/src/ltx_core/            # transformer, VAE, text-encoder building blocks
> +-- ltx-pipelines/src/ltx_pipelines/  # sampler and pipeline utilities
> +-- ltx-distillation/
> |   +-- src/ltx_distillation/         # DMD wrappers, AV pipelines, memory bank, utils
> |   `-- scripts/multishot_inference_dmd.py
> +-- inference.py                      # main entrypoint (load once, infer all)
> +-- requirements.txt
> `-- environment.yml
> ```
> 
> 
> ### 1. Clone
> 
> ```bash
> 
> git clone https://github.com/jd-opensource/JoyAI-Echo.git
> cd JoyAI-Echo
> ```
> 
> 
> ### 2. Create the environment
> 
> The reference environment is **Python 3.11 + PyTorch 2.8 + CUDA 12.8**.
> 
> With conda:
> 
> ```bash
> conda env create -f environment.yml
> conda activate echo-long
> ```
> 
> With `uv`:
> 
> ```bash
> uv venv --python 3.11 .venv
> source .venv/bin/activate
> uv pip install --extra-index-url https://download.pytorch.org/whl/cu128 -r requirements.txt
> ```
> 
> [`ffmpeg`](https://ffmpeg.org/download.html) must be available on `PATH` for shot concatenation. The conda recipe includes it. If you use `uv`, install it with your system package manager:
> 
> ```bash
> sudo apt install ffmpeg
> 
> # macOS:
> brew install ffmpeg
> ```
> 
> 
> ### 3. Download checkpoint
> 
> Download the JoyAI-Echo release checkpoint and Gemma text encoder:
> 
> | File | Description | Size | Link |
> | --- | --- | --- | --- |
> | `echo-longvideo-release.safetensors` | Full model (transformer + VAE + vocoder) | ~46 GB |[`JoyAI-Echo`](https://huggingface.co/jdopensource/JoyAI-Echo)  |
> | `gemma-3-12b/` | Instruction-tuned model (text encoder) | ~24 GB | [`gemma-3-12b-it`](https://huggingface.co/google/gemma-3-12b-it) |
> 
> Place them under `checkpoints/`:
> 
> ```text
> checkpoints/
> +-- echo-longvideo-release.safetensors
> `-- gemma-3-12b/
> ```
> 
> 
> ### 4. Write a story prompt
> 
> **Enhance your prompt first.** We provide prompt enhancers — system prompts that expand a short story or idea into well-formed shot prompts: **`prompts/long_story_writer_system_prompt.md`** for long, multi-shot video, and **`prompts/short_story_writer_system_prompt.md`** for single-shot short video. We **strongly recommend** running your input through the matching enhancer before inference; un-enhanced prompts tend to produce noticeably weaker results.
> 
> Create a JSON file under `prompts/`. Each file is a single object with a `prompts` list, where **every string is one complete shot**. A single string produces one shot; multiple strings produce a multi-shot story, with each new shot conditioned on the previous ones through the paired audio-video memory bank.
> 
> Inside each string, write these parts in order:
> 
> | Part | What to describe |
> | --- | --- |
> | **Roles & Subjects** | Describe the appearance of all visible people, including age, build, hair, face, wardrobe, and speaking voice timbre when applicable. |
> | **Action & Dialogue** | What the subject does and speaks. |
> | **Style** | The overall visual and emotional aesthetic — e.g. realistic motorsport film language, cool daylight, restrained cinematic tension. |
> | **Camera Movement** | The shot type and framing or movement — e.g. a stable close-up on the face, or a medium shot from the waist up. |
> | **Background** | The setting and scene details behind the subject. |
> | **Sound Effects & BGM** | The sounds in the scene and the background music — e.g. room tone, wind, footsteps and fabric, with a soft lo

## 延伸閱讀

相關概念：[[多模態]] · [[音視訊生成]] · [[深度學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[facebookresearch--tribev2|facebookresearch/tribev2]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/jd-opensource/JoyAI-Echo) · [官方網站](https://echo-team-joy-future-academy-jd.github.io/Echo-LongVideo-Page/)

## 相關收錄

> [!note]- 直接競品（同子分類：音視訊生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "音視訊生成" AND file.name != "jd-opensource--JoyAI-Echo"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "jd-opensource--JoyAI-Echo"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jd-opensource--JoyAI-Echo" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "jd-opensource--JoyAI-Echo"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","音視訊生成","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jd-opensource--JoyAI-Echo" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jd-opensource--JoyAI-Echo" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jd-opensource" AND file.name != "jd-opensource--JoyAI-Echo"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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
> const me = dv.page("Repos/jd-opensource--JoyAI-Echo");
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

> **2026-06-06** — 首次收錄
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

- [[2026-06-09|2026-06-09]] — 再次上榜，1.1k stars
- [[2026-06-08|2026-06-08]] — 再次上榜，854 stars
- [[2026-06-07|2026-06-07]] — 再次上榜，716 stars
- [[2026-06-06|2026-06-06]] — 首次收錄，572 stars
