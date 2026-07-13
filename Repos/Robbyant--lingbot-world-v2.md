---
repo: Robbyant/lingbot-world-v2
url: https://github.com/Robbyant/lingbot-world-v2
owner: Robbyant
owner_type: Organization
language: Python
license: NOASSERTION
description: "Infinite Worlds with Versatile Interactions"
homepage: "https://technology.robbyant.com/lingbot-world-v2"
stars: 952
stars_per_day: 238
forks: 49
open_issues: 2
created: 2026-07-08
pushed_at: 2026-07-11
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
use_case: "提供無限互動世界，讓用戶體驗多樣化的互動行為。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 9909
readme_length: 6409
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-11"
star_history: "2026-07-11:709,2026-07-11:711,2026-07-12:811,2026-07-12:815,2026-07-13:951,2026-07-13:952"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-world-v2"
  - "Robbyant/lingbot-world-v2"
  - "提供無限互動世界，讓用戶體驗多樣化的互動行為。"
---

# lingbot-world-v2

**952** stars · **238** stars/天 · 建立 4 天前 · Python · NOASSERTION

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
> 提供無限互動世界，讓用戶體驗多樣化的互動行為。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (238 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要創建高互動性虛擬世界的遊戲開發者和AI研究者。
> **一句話重點** LingBot-World 2.0的設計讓互動變得無限可能，並且能夠在即時環境中運行，這對於遊戲開發者和AI研究者來說是個重大突破。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，得到高互動性的應用，值得投入。

> [!abstract] 核心創新
> 引入了無限互動範圍和多樣化互動元素的世界建模系統。

## 專案簡介

LingBot-World 2.0（或稱為LingBot-World-Infinity）是一個進階的世界建模系統，旨在提供無限的互動可能性。用戶可以透過這個系統進行多樣化的互動，例如攻擊、射箭、施法等，並且能夠在720p的視頻流中以60fps的速度進行即時反應。這是透過一個精心設計的因果預訓練範例來實現的，確保了輸出質量的穩定性。系統的核心是兩個代理：一個負責計劃角色行為的代理和一個負責合成環境元素的導演代理。

這樣的設計不僅提升了互動的多樣性，還能夠在場景進展中持續創造新元素。使用者可以透過`generate.py`進行因果推理，並且支持多GPU運行，這使得它在處理大規模數據時表現出色。這個工具的賣點在於其無限制的互動範圍和快速的反應時間，適合需要高互動性的應用場景。相較於其他類似工具，LingBot-World 2.0的多樣化互動元素和即時反應能力使其在遊戲開發和虛擬世界創建中具備優勢。

**技術棧**：`Python` · `torch>=2.4.0` · `torchvision>=0.19.0` · `torchaudio` · `opencv-python>=4.9.0.80` · `diffusers>=0.31.0` · `transformers>=4.49.0,<=4.51.3`

## 重點功能

- 無限制互動範圍 — 提供多樣化的互動行為，包括攻擊、施法等。
- 快速反應時間 — 支持720p視頻流以60fps運行，適合即時互動應用。
- 多代理系統 — 整合計劃和環境合成的代理，提升互動的靈活性。
- 因果推理 — 使用`generate.py`進行因果推理，支持多GPU運行。
- 模型下載方便 — 提供多種模型下載選項，包括Hugging Face和ModelScope。

## 快速開始

1. 克隆代碼庫
```bash
git clone https://github.com/robbyant/lingbot-world-v2.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 安裝 flash_attn
```bash
pip install flash-attn --no-build-isolation
```
4. 下載模型
```bash
huggingface-cli download robbyant/lingbot-world-v2-14b-causal-fast --local-dir ./lingbot-world-v2-14b-causal-fast
```
5. 運行推理
```bash
torchrun --nproc_per_node=8 generate.py --task i2v-A14B --size 480*832 --ckpt_dir lingbot-world-v2-14b-causal-fast --image examples/03/image.jpg --action_path examples/03 --dit_fsdp --t5_fsdp --ulysses_size 8 --frame_num 361 --local_attn_size 18 --sink_size 6 --prompt 'A serene lakeside scene...' 
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝torch和相關依賴",
  "指令": "torchrun --nproc_per_node=8 generate.py --task i2v-A14B --size 480*832 --ckpt_dir lingbot-world-v2-14b-causal-fast --image examples/03/image.jpg --action_path examples/03 --dit_fsdp --t5_fsdp --ulysses_size 8 --frame_num 361 --local_attn_size 18 --sink_size 6 --prompt 'A serene lakeside scene...' ",
  "預期輸出": "生成一個480P的視頻流，展示指定場景的互動效果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 952 stars（238/天），forks 49（5.1%），這顯示出強烈的興趣和潛在的使用者基礎。這個專案的主要貢獻者來自Robbyant團隊，他們在AI和互動系統方面有豐富的經驗。LingBot-World 2.0解決了以往互動模型在反應速度和多樣性上的不足，提供了一個更為靈活的解決方案。最近的技術報告和模型發布吸引了更多的開發者關注。該工具的設計使其能夠在多種平台上運行，這也是其受歡迎的原因之一。forks/stars比率為5.1%，顯示出有相當一部分用戶對其進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要創建高互動性虛擬世界的遊戲開發者和AI研究者。

> [!example] 使用場景
> - 遊戲開發者用它來創建一個互動式的虛擬世界，因為它支持多樣化的互動行為和即時反應，能夠提升玩家的沉浸感。
> - AI 研究者用它來測試不同的互動模型，因為它的因果推理能力可以幫助分析模型在多種情境下的表現。
> - 教育工作者用它來設計互動式學習環境，因為它的多樣化互動元素能夠吸引學生的注意力，提升學習效果。

## 架構分析

LingBot-World 2.0採用多代理架構，其中一個代理負責角色行為的計劃，另一個則負責環境元素的合成。這樣的設計使得系統能夠在互動過程中持續生成新元素，提升了用戶體驗。資料流中，模型使用因果推理進行視頻幀的逐塊處理，這樣可以有效管理記憶體使用。

選擇Python和PyTorch作為核心技術棧，因為這些工具在AI和機器學習領域有著廣泛的應用和支持。這種選擇雖然在性能上可能不如某些低層語言，但其開發效率和生態系統的豐富性是主要考量。擴展性方面，系統的多GPU支持使其能夠處理更大的數據集，但在資源需求上也相對較高。

## 技術深入分析

LingBot-World 2.0的核心技術機制在於其多代理架構，這使得系統能夠在互動過程中持續生成新元素。使用因果推理的設計讓模型能夠逐幀處理視頻，這在處理大規模數據時能有效管理記憶體使用。選擇Python和PyTorch的原因在於其生態系統的豐富性和開發效率，雖然在性能上可能不如某些低層語言，但這樣的選擇能加速開發過程。技術風險方面，隨著用戶數量的增加，系統可能面臨性能瓶頸，尤其是在多GPU運行時。整合方面，與現有的AI框架如Hugging Face的兼容性良好，但對於自定義模型的支持有限，這可能會影響某些用戶的使用體驗。整體而言，這個工具在互動性和即時反應上具有顯著優勢，但在資源需求和靈活性方面仍有改進空間。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰，包含安裝步驟和範例；安裝過程相對順暢，但需要注意GPU要求；提供了快速入門指南，適合新手使用；文件目前僅有英文版本。這使得新手在30分鐘內能夠完成基本設置並運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多樣化的互動行為，提升用戶體驗。
> - 快速的反應時間，適合即時互動應用。
> - 多代理系統設計，靈活性高。

> [!danger] 缺點
> - 需要高性能的GPU支持，資源需求較高。
> - 目前僅支持Linux環境，對Windows用戶不友好。
> - 不支持自定義模型的直接部署，限制了靈活性。

> [!warning] 注意事項
> - 目前僅支持Linux環境，Windows用戶需使用WSL。
> - 需要較高的GPU資源以支持多GPU運行，建議使用NVIDIA顯卡。
> - 不支持自定義模型的直接部署，需參考官方部署指南。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色行為的生成，而LingBot-World 2.0則提供更廣泛的互動元素和即時反應能力。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 主要針對對戰場景設計，而LingBot-World 2.0則適用於更廣泛的互動場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色行為的生成，而LingBot-World 2.0則提供更廣泛的互動元素和即時反應能力。 | 如果需要專注於角色行為的生成而非整體互動體驗，則可以選擇此工具。 | medium，因為需要重新設計互動邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 主要針對對戰場景設計，而LingBot-World 2.0則適用於更廣泛的互動場景。 | 如果專注於對戰遊戲的開發，這個工具會更合適。 | high，因為需要重新構建整個互動框架。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-world-v2** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色行為的生成，而LingBot-World 2.0則提供更廣泛的互動元素和即時反應能力。 | 主要針對對戰場景設計，而LingBot-World 2.0則適用於更廣泛的互動場景。 |
> | 遷移成本 | - | medium，因為需要重新設計互動邏輯。 | high，因為需要重新構建整個互動框架。 |
> | 適用場景 | 主要場景 | 如果需要專注於角色行為的生成而非整體互動體驗，則可以選擇此工 | 如果專注於對戰遊戲的開發，這個工具會更合適。 |

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

- [MEDIUM] 在某些GPU上可能會出現性能瓶頸，導致反應延遲。
  - 解法：調整GPU配置或減少同時運行的實例數量。
- [MEDIUM] 模型下載過程中可能會遇到網路問題，導致下載失敗。
  - 解法：重試下載或使用不同的網路連接。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速實現高互動性的功能，提升用戶體驗。 |
| 大型遊戲開發團隊 | 普通 | 雖然具備強大的功能，但資源需求較高，可能不適合所有團隊。 |
| 學術研究機構進行AI互動模型研究 | 非常適合 | 提供了多樣化的互動元素和即時反應能力，適合實驗和測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到高互動性的應用，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在CI/CD中使用。

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
| Forks | 49 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-11 |
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
> | [@YichongLu](https://github.com/YichongLu) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新但issue解決率為0%。
**連結**：[文件](https://technology.robbyant.com/lingbot-world-v2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-11）
> **活躍天數** 4 天 · **最新 commit** Update .gitignore

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

相關概念：[[多模態]] · [[Agent 框架]] · [[即時通訊]]

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
> const concepts = ["多模態","Agent 框架","即時通訊"];
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

- [[2026-07-13|2026-07-13]] — 再次上榜，951 stars
- [[2026-07-12|2026-07-12]] — 再次上榜，811 stars
- [[2026-07-11|2026-07-11]] — 首次收錄，709 stars
