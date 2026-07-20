---
repo: Robbyant/lingbot-world-v2
url: https://github.com/Robbyant/lingbot-world-v2
owner: Robbyant
owner_type: Organization
language: Python
license: NOASSERTION
description: "Infinite Worlds with Versatile Interactions"
homepage: "https://technology.robbyant.com/lingbot-world-v2"
stars: 1310
stars_per_day: 119
forks: 82
open_issues: 4
created: 2026-07-08
pushed_at: 2026-07-14
first_seen: 2026-07-11
week: "2026-W28"
month: "2026-07"
category: "AI/ML"
subcategory: "互動式AI"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-11
use_case: "實現無限世界與多樣互動的模型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-22"
contributor_count: 5
engagement: "low"
issue_close_rate: 20
repo_size_kb: 9912
readme_length: 6409
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-11"
star_history: "2026-07-11:709,2026-07-11:711,2026-07-12:811,2026-07-12:815,2026-07-13:951,2026-07-13:952,2026-07-14:1048,2026-07-14:1050,2026-07-15:1122,2026-07-15:1123,2026-07-16:1187,2026-07-17:1233,2026-07-18:1283,2026-07-19:1295,2026-07-20:1310"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-world-v2"
  - "Robbyant/lingbot-world-v2"
  - "實現無限世界與多樣互動的模型。"
---

# lingbot-world-v2

**1.3k** stars · **119** stars/天 · 建立 11 天前 · Python · NOASSERTION

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
> 實現無限世界與多樣互動的模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (119 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 5 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要開發高互動性虛擬世界的遊戲開發者和研究人員。
> **一句話重點** LingBot-World 2.0 的創新在於其無限互動視野和代理式控制的整合，為互動式AI的應用開啟了新方向。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-world-v2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "互動式AI" && p.file.name !== "Robbyant--lingbot-world-v2" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 互動式AI 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到高互動性的AI模型，值得投入。

> [!abstract] 核心創新
> 引入代理式控制，提升角色行為規劃和環境元素合成的靈活性。

## 專案簡介

LingBot-World 2.0（或稱 LingBot-World-Infinity）是一個進階的互動模型，具備四大升級：無限互動視野、快速回應時間、多樣的互動元素以及代理式控制。用戶可以透過提供的 `generate.py` 指令進行因果推斷，並支持多GPU運行，實現720p視頻流的60fps輸出。這個模型的核心是基於精心設計的因果預訓練範式，確保輸出質量穩定。技術上，這個專案依賴於 PyTorch、TorchVision 和 Diffusers 等庫，並使用 KV 緩存來處理視頻幀，這意味著它能有效地處理大量數據，並且在多GPU環境下表現良好。

與 LingBot-World 的前一版本相比，這個版本在互動元素上更加多樣，支持如攻擊、射箭、施法等多種行為，並引入了代理式控制的概念，讓角色行為的規劃和環境元素的合成變得更為靈活。相較於其他工具，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，LingBot-World 2.0 提供了更高的互動性和視覺效果，特別適合需要高效能和多樣化互動的應用場景。使用者在實際運行中可能會遇到黑屏問題，這需要進一步的調試和社群支持。這個專案目前處於活躍開發階段，未來可能會釋出更多模型和功能，適合對互動式AI有需求的開發者使用。

**技術棧**：`Python` · `PyTorch >= 2.4.0` · `TorchVision >= 0.19.0` · `Diffusers >= 0.31.0`

## 重點功能

- 無限互動視野 — 模型支持多種行為，如攻擊、施法等，提升互動性。
- 快速回應時間 — 能夠以60fps驅動720p視頻流，適合即時互動應用。
- 多樣互動元素 — 提供豐富的文本驅動事件，增強用戶體驗。
- 代理式控制 — 整合代理式控制，讓角色行為和環境元素的合成更為靈活。
- 多GPU支持 — 使用 `torchrun` 指令可在多GPU環境下運行，提升性能。

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
5. 運行推斷
```bash
torchrun --nproc_per_node=8 generate.py --task i2v-A14B --size 480*832 --ckpt_dir lingbot-world-v2-14b-causal-fast --image examples/03/image.jpg --action_path examples/03 --frame_num 361 --prompt 'A serene lakeside scene...' 
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 PyTorch 和相關依賴",
  "指令": "torchrun --nproc_per_node=8 generate.py --task i2v-A14B --size 480*832 --ckpt_dir lingbot-world-v2-14b-causal-fast --image examples/03/image.jpg --action_path examples/03 --frame_num 361 --prompt 'A serene lakeside scene...'",
  "預期輸出": "生成一個480P的視頻幀，展示指定場景的互動效果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 1310 stars（119/天），forks 82（6.3%），顯示出穩定的增長趨勢。這個專案由 Robbyant 團隊開發，團隊成員在互動式AI領域有豐富經驗。LingBot-World 2.0 解決了以往模型在互動性和反應速度上的不足，提供了更為靈活的互動方式。近期的技術報告和模型釋出也吸引了不少關注，社群對於未來功能的期待也促進了討論。技術上，因果推斷的實現和多GPU支持使得這個模型在性能上具備優勢，適合需要高效能的應用場景。forks/stars 比率顯示出使用者對於這個專案的實際修改和應用興趣。

## 適合誰使用

**目標受眾**：需要開發高互動性虛擬世界的遊戲開發者和研究人員。

> [!example] 使用場景
> - 遊戲開發者用它來創建具有多樣互動的虛擬世界，因為它支持多種行為和快速的反應時間，能夠提升玩家的沉浸感。
> - 研究人員用它來探索因果推斷在互動式AI中的應用，因為它提供了高效的推斷模型和多GPU支持，能夠處理大量數據。
> - 教育工作者用它來設計互動式學習環境，因為其多樣的互動元素能夠吸引學生的注意力，提升學習效果。

## 架構分析

LingBot-World 2.0 採用模組化設計，核心是基於 PyTorch 的深度學習框架，並結合了多GPU支持以提升性能。資料流方面，模型使用 KV 緩存來逐幀處理視頻，這樣可以有效減少記憶體佔用並提升推斷速度。選擇 PyTorch 是因為其在深度學習領域的廣泛應用和社群支持，這使得開發者能夠快速迭代和測試新功能。這種設計雖然在初期可能增加了學習曲線，但長期來看卻能提供更高的靈活性和擴展性。擴展性方面，隨著用戶需求的增長，未來可以考慮引入更多的互動元素和行為選擇，這將進一步提升模型的應用範圍。

## 技術深入分析

LingBot-World 2.0 的核心技術機制基於 PyTorch 框架，利用深度學習模型進行因果推斷。這個模型的設計選擇了 KV 緩存來逐幀處理視頻，這樣可以在多GPU環境下有效提升性能，特別是在處理720p視頻流時。效能方面，模型能夠支持高達60fps的視頻輸出，這對於即時互動應用至關重要。設計上，選擇 PyTorch 是因為其強大的社群支持和靈活性，這使得開發者能夠快速實現新功能。技術風險方面，模型的複雜性可能在擴展時帶來挑戰，特別是在處理大量用戶請求時，可能會出現性能瓶頸。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，便於團隊進行持續集成和部署。整體來看，LingBot-World 2.0 在互動式AI領域具有很大的潛力，未來可能會引入更多的功能和擴展選項。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例。安裝過程相對順暢，但對於新手來說，可能需要一些時間來熟悉 PyTorch 和相關依賴。整體上，文件支持多語言，但主要以英文為主，對於非英語使用者可能會有一定障礙。

## 優缺點分析

> [!success] 優點
> - 高互動性，支持多種行為選擇。
> - 快速反應時間，適合即時互動應用。
> - 模組化設計，便於擴展和維護。

> [!danger] 缺點
> - 目前功能尚未完全釋出，部分模型仍在開發中。
> - 可能存在黑屏等技術問題，需社群支持解決。
> - 學習曲線相對較陡，對新手不太友好。

> [!warning] 注意事項
> - 目前不支持多提示生成，需要進一步開發。
> - 黑屏問題可能影響用戶體驗，需社群支持解決。
> - 尚未釋出所有模型，部分功能仍在開發中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色行為的生成，LingBot-World 2.0 提供更高的互動性和多樣化的行為選擇。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性互動，LingBot-World 2.0 更加強調多樣的互動元素和環境合成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色行為生成，使用較簡單的模型架構，適合小型專案。 | 如果你的專案需要快速開發且互動性要求不高，這個工具會是更好的選擇。 | low，因為架構較為簡單，易於上手。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性互動，使用基於規則的系統，適合特定場景。 | 如果你的應用需要強調對抗性互動，這個工具會更合適。 | medium，因為需要重新設計互動邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-world-v2** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色行為生成，使用較簡單的模型架構，適合小型專案。 | 專注於對抗性互動，使用基於規則的系統，適合特定場景。 |
> | 遷移成本 | - | low，因為架構較為簡單，易於上手。 | medium，因為需要重新設計互動邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案需要快速開發且互動性要求不高，這個工具會是更好的 | 如果你的應用需要強調對抗性互動，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和實驗性質的開發，不建議用於生產環境的核心系統。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下可能會出現黑屏問題
  - 解法：檢查依賴和環境配置，必要時重新安裝相關庫
- [MEDIUM] 多提示生成尚未支持，可能影響用戶體驗
  - 解法：等待未來版本更新或使用單一提示進行測試
- [MEDIUM] 模型下載過程中可能遇到網路問題
  - 解法：確保網路穩定，必要時重試下載

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發互動遊戲 | 非常適合 | 提供高互動性和快速反應，能夠提升遊戲體驗。 |
| 大型企業進行AI研究 | 普通 | 雖然功能強大，但可能需要較高的技術門檻和維護成本。 |
| 教育機構開發互動學習工具 | 適合 | 多樣的互動元素能夠吸引學生，提升學習效果。 |
| 個人開發者進行AI實驗 | 非常適合 | 適合用於探索互動式AI的潛力，並且社群活躍。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到高互動性的AI模型，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取模型和環境變數，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 82 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-07-14 |
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
> | [@pPetrichor](https://github.com/pPetrichor) | 1 |
> | [@JingyeChen](https://github.com/JingyeChen) | 1 |
> | [@zliucz](https://github.com/zliucz) | 1 |
> | [@EzioBy](https://github.com/EzioBy) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和釋出新功能。
**連結**：[文件](https://technology.robbyant.com/lingbot-world-v2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-14）
> **活躍天數** 6 天 · **最新 commit** Revise prompt description for video

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/Robbyant/lingbot-world-v2/issues/6) | Does it support generation with multiple prompts? | 0 | 0 |
> | [#5](https://github.com/Robbyant/lingbot-world-v2/issues/5) | Any plan to release Agentic Harness code? | 0 | 0 |
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

相關概念：[[互動式AI]] · [[因果推斷]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[QwenLM--Qwen-AgentWorld|QwenLM/Qwen-AgentWorld]]

[GitHub](https://github.com/Robbyant/lingbot-world-v2) · [官方網站](https://technology.robbyant.com/lingbot-world-v2)

## 相關收錄

> [!note]- 直接競品（同子分類：互動式AI）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "互動式AI" AND file.name != "Robbyant--lingbot-world-v2"
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
> const concepts = ["互動式AI","因果推斷","多模態"];
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

- [[2026-07-15|2026-07-15]] — 再次上榜，1.1k stars
- [[2026-07-14|2026-07-14]] — 再次上榜，1.0k stars
- [[2026-07-13|2026-07-13]] — 再次上榜，951 stars
- [[2026-07-12|2026-07-12]] — 再次上榜，811 stars
- [[2026-07-11|2026-07-11]] — 首次收錄，709 stars
