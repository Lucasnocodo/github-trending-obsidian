---
repo: Robbyant/lingbot-world-v2
url: https://github.com/Robbyant/lingbot-world-v2
owner: Robbyant
owner_type: Organization
language: Python
license: NOASSERTION
description: "Infinite Worlds with Versatile Interactions"
homepage: "https://technology.robbyant.com/lingbot-world-v2"
stars: 709
stars_per_day: 355
forks: 21
open_issues: 2
created: 2026-07-08
pushed_at: 2026-07-10
first_seen: 2026-07-11
week: "2026-W28"
month: "2026-07"
category: "AI/ML"
subcategory: "互動模型"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-11
use_case: "提供無限互動世界的高效能模型，讓用戶能夠進行多樣化的互動。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-14"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 9924
readme_length: 6409
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-11"
star_history: "2026-07-11:709"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-world-v2"
  - "Robbyant/lingbot-world-v2"
  - "提供無限互動世界的高效能模型，讓用戶能夠進行多樣化的互動。"
---

# lingbot-world-v2

**709** stars · **355** stars/天 · 建立 2 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
> 提供無限互動世界的高效能模型，讓用戶能夠進行多樣化的互動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (355 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在互動式應用中實現高效能和多樣化行為的開發者。
> **一句話重點** LingBot-World 2.0 的代理式架構使其在互動性和反應速度上達到了新的高度。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "互動模型" && p.file.name !== "Robbyant--lingbot-world-v2" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 互動模型 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到高效能的互動模型，值得嘗試。

> [!abstract] 核心創新
> 引入了代理式架構，將角色行為規劃和環境元素合成分開處理。

## 專案簡介

LingBot-World 2.0（也稱為 LingBot-World-Infinity）是一個進階的互動模型，專為無限互動世界設計。它的核心機制是透過一個精心設計的因果預訓練範式來實現無限制的互動範圍，並保證輸出質量穩定。用戶可以透過 `generate.py` 指令進行因果推理，並利用 KV 緩存來逐幀處理視頻流，支持 720p 60fps 的實時響應。這個模型的賣點在於其快速的響應時間和多樣的互動元素，包括攻擊、射箭、施法等多種行為。

技術上，它依賴於 PyTorch 和多個深度學習庫，並使用了高效的多 GPU 訓練策略。與同類工具相比，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，LingBot-World 2.0 提供了更高的互動性和更豐富的行為選擇，特別適合需要高頻互動的應用場景。實際使用中，這個模型能夠處理 14B 參數的模型，並且在多個平台上提供實時體驗，但目前尚未釋出完整的部署代碼，這可能對某些用戶造成限制。這個專案目前處於早期階段，社群活躍度尚可，但仍需關注其開發進度和問題解決情況。

**技術棧**：`Python` · `PyTorch >= 2.4.0` · `torchvision >= 0.19.0` · `torchaudio` · `opencv-python >= 4.9.0.80`

## 重點功能

- 無限制互動範圍 — 利用因果預訓練範式，實現穩定的輸出質量。
- 快速響應時間 — 支持 720p 60fps 的視頻流，適合實時互動。
- 多樣化互動元素 — 包含攻擊、施法等行為，提升用戶互動體驗。
- 多 GPU 訓練 — 支持高效能的模型訓練，能處理 14B 參數的模型。
- 實時推理 — 使用 `generate.py` 指令進行逐幀視頻處理，支持 KV 緩存。

## 快速開始

1. 克隆代碼庫
```bash
git clone https://github.com/robbyant/lingbot-world-v2.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 下載模型
```bash
huggingface-cli download robbyant/lingbot-world-v2-14b-causal-fast --local-dir ./lingbot-world-v2-14b-causal-fast
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝 PyTorch 和相關依賴",
  "指令": "torchrun --nproc_per_node=8 generate.py --task i2v-A14B --size 480*832 --ckpt_dir lingbot-world-v2-14b-causal-fast --image examples/03/image.jpg --action_path examples/03 --dit_fsdp --t5_fsdp --ulysses_size 8 --frame_num 361 --local_attn_size 18 --sink_size 6 --prompt \"A serene lakeside scene with a lone tree standing in calm water...\"",
  "預期輸出": "生成的視頻幀將展示一個平靜的湖邊場景，包含樹木和雪山的反射。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 709 stars（354.5/天），forks 21（3.0%），顯示出一定的興趣增長。作者團隊來自 Robbyant，專注於互動模型的開發，這個專案解決了以往互動模型在反應速度和多樣性上的不足。近期的技術報告釋出和多平台支持也可能吸引了更多的使用者關注。這個工具的可行性得益於深度學習技術的進步，特別是在多 GPU 訓練和因果推理方面。forks/stars 比率中等，顯示出部分用戶正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在互動式應用中實現高效能和多樣化行為的開發者。

> [!example] 使用場景
> - 遊戲開發者用它來創建無限互動的遊戲世界，因為其快速響應和多樣化的互動元素能提升玩家體驗。
> - 研究人員用它來模擬複雜的社會互動場景，因為其高效能模型能處理大量的互動行為。
> - 教育工作者用它來設計互動式學習環境，因為其多樣的行為選擇能促進學生的參與感。

## 架構分析

LingBot-World 2.0 採用多層次的代理架構，分為角色代理和導演代理。角色代理負責角色行為的規劃與執行，而導演代理則負責隨著場景進展合成新的環境元素。這樣的設計使得模型能夠在互動中保持靈活性與多樣性，並且能夠在多個場景中進行高效的推理。

資料流方面，模型使用因果推理技術，並透過 KV 緩存來優化性能，這樣可以在處理視頻幀時減少延遲。選擇這種架構的代價在於可能會增加系統的複雜性，但能夠顯著提升互動的真實感和多樣性。擴展性方面，這個架構能夠支持多 GPU 訓練，適合大規模的模型訓練與推理。

## 技術深入分析

LingBot-World 2.0 的核心技術機制是基於因果推理的模型架構，使用了多層次的代理設計來提升互動的靈活性和多樣性。模型的訓練依賴於 PyTorch 框架，並使用多 GPU 訓練來加速推理過程。這個模型能夠處理高達 14B 的參數，並且在實時推理中能夠支持 720p 的視頻流，這在同類工具中是相對領先的。選擇這種架構的好處是能夠在多樣化的互動場景中保持高效能，但代價是系統的複雜性可能會增加，對於新手用戶來說，安裝和配置的難度也會提升。技術風險方面，隨著使用者規模的擴大，可能會面臨性能瓶頸，特別是在多用戶同時互動的情況下。整合方面，這個工具能夠與主流的深度學習框架良好整合，但在 CI/CD pipeline 的友好度上仍需進一步提升。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和範例，但對於新手來說，安裝過程可能稍顯複雜。整體而言，文件質量良好，能夠幫助用戶快速上手。安裝過程中需注意依賴版本的兼容性，並且目前沒有提供中文或多語言支持。

## 優缺點分析

> [!success] 優點
> - 高效能的實時互動，支持 720p 60fps 的視頻流。
> - 多樣化的互動行為選擇，提升用戶體驗。
> - 先進的代理架構，能夠靈活應對不同場景需求。

> [!danger] 缺點
> - 尚未釋出完整的部署代碼，限制了用戶的自定義能力。
> - 社群活躍度尚可，但問題解決率為 0%。
> - 對於新手而言，安裝和配置過程可能稍顯複雜。

> [!warning] 注意事項
> - 尚未釋出完整的部署代碼，限制了用戶的自定義部署能力。
> - 目前僅支持特定版本的 PyTorch 和相關依賴，可能影響兼容性。
> - 社群活躍度尚可，但問題解決率為 0%，可能影響使用者體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建互動式角色，但不如 LingBot-World 2.0 提供多樣化的行為選擇和高效能的響應時間。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理互動，但在互動範圍和反應速度上不及 LingBot-World 2.0。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建互動式角色，使用較為傳統的行為樹模型進行角色行為的設計。 | 如果你的專案需要更簡單的角色互動設計，且不需要高效能的實時反應。 | medium，因為需要重新設計角色行為邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理互動，但在互動範圍和反應速度上不及 LingBot-World 2.0，使用較簡單的代理模型。 | 如果你的應用場景不需要高頻互動，且對響應速度要求不高。 | low，因為其架構較為簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-world-v2** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建互動式角色，使用較為傳統的行為樹模型進行角色行為的設計。 | 提供多代理互動，但在互動範圍和反應速度上不及 LingBot-World 2.0，使用較簡單的代理模型。 |
> | 遷移成本 | - | medium，因為需要重新設計角色行為邏輯。 | low，因為其架構較為簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的專案需要更簡單的角色互動設計，且不需要高效能的實時反 | 如果你的應用場景不需要高頻互動，且對響應速度要求不高。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和研究，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到依賴版本不兼容的問題。
  - 解法：確保使用正確版本的 PyTorch 和相關依賴，參考 README 中的要求。
- [MEDIUM] 目前社群問題解決率為 0%，可能會遇到未解決的 bug。
  - 解法：定期檢查 GitHub Issues，並參與社群討論以尋求解決方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 遊戲開發團隊需要創建高互動性的遊戲環境 | 非常適合 | 其高效能和多樣化的互動元素能夠提升遊戲體驗。 |
| 教育機構希望設計互動式學習平台 | 適合 | 能夠提供多樣的互動行為，促進學生參與。 |
| 小型開發團隊進行原型設計 | 普通 | 雖然功能強大，但安裝和配置過程可能對新手造成挑戰。 |
| 大型企業需要穩定的生產環境 | 不適合 | 目前處於 alpha 階段，尚未準備好用於生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到高效能的互動模型，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需注意依賴鏈的安全性，特別是在使用第三方庫時。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LingBot-World 2.0 通常與 PyTorch 和其他深度學習庫搭配使用，適合在開發/建置階段進行整合。在一個使用 PyTorch 的專案中，可以通過 `generate.py` 指令來進行視頻生成，具體做法是將模型下載到本地，並使用相關指令進行推理。與主流 CI 工具如 GitHub Actions 兼容，但目前缺乏官方的插件支持，可能需要手動配置。整合過程中，最常見的問題是依賴版本不兼容，需仔細檢查相依性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
| Forks | 21 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-07-08 |
| 官方網站 | [Link](https://technology.robbyant.com/lingbot-world-v2) |
| Repo 大小 | 9.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Robbyant/lingbot-world-v2) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `torchvision` `torchaudio` `opencv-python` `diffusers` `transformers` `tokenizers` `accelerate` `tqdm` `imageio` `easydict` `ftfy` `imageio-ffmpeg` `flash_attn` `numpy`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zelingao98](https://github.com/zelingao98) | 2 |
> | [@JingyeChen](https://github.com/JingyeChen) | 1 |
> | [@zliucz](https://github.com/zliucz) | 1 |
> | [@EzioBy](https://github.com/EzioBy) | 1 |
> | [@qiuyu96](https://github.com/qiuyu96) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有更新，但問題解決率為 0%。
**連結**：[文件](https://technology.robbyant.com/lingbot-world-v2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-10）
> **活躍天數** 3 天 · **最新 commit** Update .gitignore

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/Robbyant/lingbot-world-v2/issues/2) | Black Screen issue | 0 | 0 |
> | [#1](https://github.com/Robbyant/lingbot-world-v2/issues/1) | Release remaining LingBot-World-v2 models on Hugging Face | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Infinite Worlds with Versatile Interactions
> 
> Robbyant Team
> 
> [](https://technology.robbyant.com/lingbot-world-v2)
> [](https://arxiv.org/abs/2607.07534)
> [](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)
> [](https://modelscope.cn/models/Robbyant/lingbot-world-v2-14b-causal-fast)
> [](LICENSE.txt)
> 
> -----
> 
> We present **LingBot-World 2.0** (also known as **LingBot-World-Infinity**), an advanced iteration of [LingBot-World](https://technology.robbyant.com/lingbot-world) featuring four distinct upgrades.
> - **Unbounded Interaction Horizon**: Our model achieves an unbounded interaction horizon while maintaining consistent output quality, benefiting from a carefully crafted causal pretraining paradigm.
> - **Rapid Response Time**: Through distilling a real-time variant from the base model, our system guarantees rapid response time, sufficient to drive 720p video streams at 60 fps.
> - **Highly Diverse Interactive Elements**: Compared to the previous version, this update introduces highly diverse interactive elements, comprising a broader spectrum of actions (*e.g.*, attacking, archery, spell-casting, and shooting) alongside a richer variety of text-driven events.
> - **Agentic Harness**: We pioneer the integration of an agentic harness within the domain of world modeling, wherein a pilot agent is tasked with planning and executing character behaviors, while a director agent is responsible for synthesizing novel environmental elements as the scene progresses.
> 
> ## 🚀 Try it now
> The real-time version of LingBot-World-Infinity is available on two platforms. We thank [Reactor](https://www.reactor.inc/lingbot-world-v2) and [LingGuang](https://www.lingguang.com/support) for their support:
> - **International (Web)**: Experience it on [Reactor](https://www.reactor.inc/lingbot-world-v2).
> - **Domestic (Mobile)**: Experience it on [LingGuang](https://www.lingguang.com/support).
> 
> > **Note:** Reactor and LingGuang provide a convenient way to try LingBot-World-Infinity in real time. In our official setup, the model runs at full capability. To experience our official demo, join us at [WAIC 2026](https://waica2026.worldaic.com.cn/).
> 
> ## 🎬 Demo Gallery
> 
>    
>    
>    
>    
>    
>    
> 
> ✨ For more high-fidelity and compelling demos, please visit our Project Page.
> 
> ## 🔥 News
> - Jul. 9, 2026: 🎉 We release the technical report, inference code, and models for LingBot-World-Infinity.
> 
> ## 📋 TODO
> - [x] Release the causal-fast inference code and model of the 14B model
> - [ ] Release the causal-pretrained model of the 14B model
> - [ ] Release the bidirectional model of the 14B model
> - [ ] Release the causal-fast and causal-pretrained models of the 1.3B model
> 
> ## ⚙️ Quick Start
> This codebase is built upon [Wan2.2](https://github.com/Wan-Video/Wan2.2). Please refer to their documentation for installation instructions.
> ### Installation
> Clone the repo:
> ```sh
> git clone https://github.com/robbyant/lingbot-world-v2.git
> cd lingbot-world-v2
> ```
> Install dependencies:
> ```sh
> # Ensure torch >= 2.4.0
> pip install -r requirements.txt
> ```
> Install [`flash_attn`](https://github.com/Dao-AILab/flash-attention):
> ```sh
> pip install flash-attn --no-build-isolation
> ```
> ### Model Download
> 
> | Model | Model Type | Model Size | Download Links |
> | :---  | :--- | :--- | :--- |
> | **lingbot-world-v2-14b-causal-fast** | causal-fast | 14B | 🤗 [HuggingFace](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) 🤖 [ModelScope](https://www.modelscope.cn/models/Robbyant/lingbot-world-v2-14b-causal-fast) |
> | **lingbot-world-v2-14b-causal-pretrain** | causal-pretrain | 14B | TODO |
> 
> Download models using huggingface-cli:
> ```sh
> pip install "huggingface_hub[cli]"
> huggingface-cli download robbyant/lingbot-world-v2-14b-causal-fast --local-dir ./lingbot-world-v2-14b-causal-fast
> ```
> Download models using modelscope-cli:
>  ```sh
> pip install modelscope
> modelscope download robbyant/lingbot-world-v2-14b-causal-fast --local_dir ./lingbot-world-v2-14b-causal-fast
> ```
> 
> ### Inference
> 
> We provide `generate.py` for causal inference with KV caching, which processes video frames chunk-by-chunk instead of all at once.
> 
> - `causal_fast` — 480P, multi-GPU:
>   ``` sh
>   torchrun --nproc_per_node=8 generate.py --task i2v-A14B --size 480*832 --ckpt_dir lingbot-world-v2-14b-causal-fast --image examples/03/image.jpg --action_path examples/03 --dit_fsdp --t5_fsdp --ulysses_size 8 --frame_num 361 --local_attn_size 18 --sink_size 6 --prompt "A serene lakeside scene with a lone tree standing in calm water, surrounded by distant snow-capped mountains under a bright blue sky with drifting white clouds — gentle ripples reflect the tree and sky, creating a tranquil, meditative atmosphere."
>   ```
> 
> You can also use the provided `run_fast.sh` script:
> ``` sh
> bash run_fast.sh  
> # e.g. bash run_fast.sh lingbot-world-v2-14b-causal-fast 361
> ```
> 
> ### Deployment
> We do NOT plan to release our deployment code. If you would like to deploy our model yourself, please refer to the LingBot-World deployment in [SGLang](https://docs.sglang.io/cookbook/diffusion/LingBot-World/LingBot-World-2.0) or [flashdreams](https://github.com/NVIDIA/flashdreams).
> 
> ## 📚 Related Projects
> - [LingBot-World](https://github.com/robbyant/lingbot-world)
> 
> ## 📜 License
> This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0). The project is available for non-commercial use only: you may share and adapt it with proper attribution, but derivative works must be distributed under the same license. Please refer to the [LICENSE file](LICENSE.txt) for the full text, including details on rights and restrictions.
> 
> ## ✨ Acknowledgement
> We would like to express our gratitude to the Wan Team for open-sourcing their code and models. Their contributions have been instrumental to the development of this project.
> 
> ## 📖 Citation
> If you find this work useful for your research, please cite our paper:
> 
> ```
> @article{lingbot-world-v2,
>       title={Infinite Worlds with Versatile Interactions}, 
>       author={Zelin Gao and Qiuyu Wang and Jiapeng Zhu and Jingye Chen and Zichen Liu and Qingyan Bai and Jiahao Wang and Yufeng Yuan and Hanlin Wang and Yichong Lu and Ka Leong Cheng and Haojie Zhang and Jian Gao and Tianrui Feng and Yuzheng Liu and Yao Yao and Yinghao Xu and Xing Zhu and Yujun Shen and Hao Ouyang},
>       journal={arXiv preprint arXiv:2607.07534},
>       year={2026}
> }
> ```

## 延伸閱讀

相關概念：[[多模態]] · [[Agent 框架]] · [[深度學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[QwenLM--Qwen-AgentWorld|QwenLM/Qwen-AgentWorld]] · [[boogu-project--Boogu-Image|boogu-project/Boogu-Image]]

[GitHub](https://github.com/Robbyant/lingbot-world-v2) · [官方網站](https://technology.robbyant.com/lingbot-world-v2)

## 相關收錄

> [!note]- 直接競品（同子分類：互動模型）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "互動模型" AND file.name != "Robbyant--lingbot-world-v2"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Robbyant--lingbot-world-v2"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Robbyant--lingbot-world-v2" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "Robbyant--lingbot-world-v2"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","Agent 框架","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Robbyant--lingbot-world-v2" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Robbyant--lingbot-world-v2" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Robbyant" AND file.name != "Robbyant--lingbot-world-v2"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
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

> **2026-07-11** — 首次收錄
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

- [[2026-07-11|2026-07-11]] — 首次收錄，709 stars
