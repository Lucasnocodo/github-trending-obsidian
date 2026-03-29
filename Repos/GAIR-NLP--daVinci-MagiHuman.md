---
repo: GAIR-NLP/daVinci-MagiHuman
url: https://github.com/GAIR-NLP/daVinci-MagiHuman
owner: GAIR-NLP
owner_type: Organization
language: Python
license: N/A
description: ""
homepage: ""
stars: 1078
stars_per_day: 180
forks: 84
open_issues: 14
created: 2026-03-22
pushed_at: 2026-03-28
first_seen: 2026-03-27
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "多模態生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-27
use_case: "提供一個快速的音視頻生成基礎模型，簡化多模態處理流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 30
repo_size_kb: 22983
readme_length: 8645
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-27"
star_history: "2026-03-27:934,2026-03-27:934,2026-03-28:1014,2026-03-28:1015,2026-03-29:1078"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "daVinci-MagiHuman"
  - "GAIR-NLP/daVinci-MagiHuman"
  - "提供一個快速的音視頻生成基礎模型，簡化多模態處理流程。"
---

# daVinci-MagiHuman

**1.0k** stars · **203** stars/天 · 建立 5 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
> 提供一個快速的音視頻生成基礎模型，簡化多模態處理流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (203 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成高質量音視頻內容的開發者和研究者。
> **一句話重點** 這個專案透過單流架構顯著簡化了多模態生成的複雜性，並提升了推理速度。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態生成" && p.file.name !== "GAIR-NLP--daVinci-MagiHuman" && p.status !== "archived")
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
> **結論** 花 5 小時學習，10 小時整合，能夠快速生成高質量音視頻內容，值得投入。

> [!abstract] 核心創新
> 使用單流 Transformer 架構，簡化多模態生成過程，提升推理速度和質量。

## 專案簡介

daVinci-MagiHuman 是一個基於單一流架構的音視頻生成模型，專為快速生成而設計。它使用一個 15B 參數的 Transformer，通過自注意力機制同時處理文本、視頻和音頻，避免了多流複雜性。這個模型能在單個 H100 GPU 上生成 5 秒的 256p 視頻僅需 2 秒，1080p 視頻則需 38 秒，顯示出其優異的推理速度。其設計中採用了「三明治架構」，前後 4 層使用特定模態的投影，中間 32 層則共享參數，這樣的設計使得模型在處理多模態數據時能保持高效。與其他模型相比，daVinci-MagiHuman 在人類評估中表現出色，對比 Ovi 1.1 和 LTX 2.3 的勝率分別為 80% 和 60.9%。

在功能上，它支持多語言，包括中文、英文、日文等，並且提供完整的開源模型堆棧，包括基礎模型和超分辨率模型。使用者可以選擇 Docker 或 Conda 進行安裝，並能輕鬆執行各種生成任務。這個專案的成熟度高，適合需要快速生成高質量音視頻內容的開發者和研究者。未來可能會進一步優化推理速度和擴展模型的多樣性。

**技術棧**：`Python` · `Shell` · `PyTorch 2.9.0`

## 重點功能

- 單流 Transformer — 使用 15B 參數的模型，通過自注意力處理文本、視頻和音頻。
- 快速推理 — 在單個 H100 GPU 上生成 256p 視頻僅需 2 秒，1080p 視頻需 38 秒。
- 多語言支持 — 支援中文、英文、日文、韓文、德文和法文等多種語言。
- 完整開源 — 提供基礎模型、蒸餾模型和超分辨率模型的完整堆棧。
- 高質量生成 — 在人類評估中，達到 80% 的勝率對比 Ovi 1.1。

## 快速開始

1. 使用 Docker 安裝
```bash
docker pull sandai/magi-human:latest
```
2. 運行 Docker 容器
```bash
docker run -it --gpus all --network host --ipc host -v /path/to/repos:/workspace -v /path/to/checkpoints:/models --name my-magi-human sandai/magi-human:latest bash
```
3. 克隆 daVinci-MagiHuman
```bash
git clone https://github.com/GAIR-NLP/daVinci-MagiHuman
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Docker 和 NVIDIA GPU。",
  "指令": "bash example/base/run.sh",
  "預期輸出": "生成 256p 視頻的結果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1015 stars（203/天），forks 78（7.7%），顯示出穩定的增長趨勢。作者團隊 SII-GAIR 和 Sand.ai 在音視頻生成領域有豐富的經驗，這個專案解決了以往多模態生成模型的複雜性問題，提供了一個更簡單的解決方案。社群對於其性能和多語言支持的需求也促進了其熱度。技術上，單流架構的選擇使得模型在處理速度和質量上都有顯著提升，這在當前的生成模型中是相對少見的。forks/stars 比率為 7.7%，顯示出有相當一部分用戶在進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要快速生成高質量音視頻內容的開發者和研究者。

> [!example] 使用場景
> - 視頻製作人用它來快速生成高質量的音視頻內容，因為其在單個 H100 GPU 上能在 2 秒內生成 256p 視頻，顯著提升了工作效率。
> - 遊戲開發者用它來創建角色動畫，因為其能生成自然的面部表情和動作，提升遊戲的沉浸感。
> - 教育工作者用它來製作多語言教學視頻，因為其支持多種語言，能夠吸引更廣泛的學習者。

## 架構分析

daVinci-MagiHuman 採用單流 Transformer 架構，這意味著所有模態的數據都在同一個流中處理，避免了多流系統的複雜性。這種設計使得模型在推理時能夠更快，因為不需要進行多次的數據轉換和同步。模型的前四層和後四層使用特定模態的投影，而中間的 32 層則共享參數，這樣的設計使得模型在處理不同模態時能夠保持一致性。這種架構的代價是可能在某些特定模態的性能上有所妥協，但整體上提升了處理速度。由於模型是基於 Transformer 的架構，因此在擴展性上具有良好的潛力，但在處理非常大的數據集時，可能會遇到記憶體瓶頸。

## 技術深入分析

daVinci-MagiHuman 的核心技術機制是基於單流 Transformer，這使得模型能夠同時處理文本、視頻和音頻數據。這種設計避免了傳統多模態模型中常見的複雜性，並提高了推理效率。模型在推理時能夠在單個 H100 GPU 上生成高達 1080p 的視頻，這在當前的生成模型中是相對少見的。選擇 PyTorch 作為框架，使得開發和擴展變得更加靈活，並且社群支持良好。這個專案的依賴樹相對簡單，主要依賴於 PyTorch 和一些常見的數據處理庫，這降低了學習曲線。技術風險方面，隨著數據集的增大，模型可能會面臨記憶體瓶頸，這需要在硬體上進行投資。整合方面，與主流的 CI/CD 工具和開發環境相容性良好，能夠輕鬆集成到現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，對於新手來說非常友好。安裝過程相對順暢，但需要注意 GPU 硬體的要求。文件中有詳細的快速入門指南，幫助使用者快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 高效的推理速度，能快速生成高質量視頻。
> - 支持多種語言，適合全球用戶。
> - 完整開源，便於社群貢獻和擴展。

> [!danger] 缺點
> - 需要高性能的 GPU 硬體支持。
> - 首次運行時可能會有較長的加載時間。
> - 對於某些高解析度生成，可能需要額外的內存資源。

> [!warning] 注意事項
> - 需要 NVIDIA H100 GPU 以達到最佳性能。
> - 首次運行時模型編譯和緩存加載會較慢。
> - 對於某些高解析度生成，可能需要額外的內存資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於語音合成，而 daVinci-MagiHuman 提供多模態生成，能同時處理音頻和視頻。 |
| [Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop) | LTX-Desktop 主要針對視頻編輯，而 daVinci-MagiHuman 專注於生成，提供更高的自動化和質量。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 使用多流架構來處理音視頻數據，而 daVinci-MagiHuman 則採用單流架構，這使得後者在推理速度上更具優勢。 | 如果你的專案需要處理多種不同來源的音視頻數據，parsync 可能更合適。 | medium，因為需要重構數據流和處理邏輯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 專注於音頻生成，而 daVinci-MagiHuman 提供更全面的多模態生成能力。 | 如果你的專案主要集中在音頻生成，Shadowbroker 可能會提供更專業的功能。 | low，因為兩者在音頻處理上有相似的基礎。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **daVinci-MagiHuman** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 使用多流架構來處理音視頻數據，而 daVinci-MagiHuman 則採用單流架構，這使得後者在推理速度上更具優勢。 | Shadowbroker 專注於音頻生成，而 daVinci-MagiHuman 提供更全面的多模態生成能力。 |
> | 遷移成本 | - | medium，因為需要重構數據流和處理邏輯。 | low，因為兩者在音頻處理上有相似的基礎。 |
> | 適用場景 | 主要場景 | 如果你的專案需要處理多種不同來源的音視頻數據，parsync | 如果你的專案主要集中在音頻生成，Shadowbroker 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於研究和開發，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次運行時模型編譯時間較長，可能影響用戶體驗
  - 解法：建議在空閒時間運行，並提前下載所需的模型檔案
- **[HIGH]** 對於高解析度視頻生成，可能需要額外的 GPU 記憶體
  - 解法：確保使用者的硬體配置符合要求，或考慮使用雲端服務
- [MEDIUM] 多語言支持可能在某些語言上表現不佳
  - 解法：使用者可以針對特定語言進行調整和優化

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速生成音視頻內容的創作者 | 非常適合 | 其推理速度和生成質量都能滿足高需求的創作工作。 |
| 小型團隊進行多模態研究 | 適合 | 開源特性和多語言支持使其成為研究的良好選擇。 |
| 大型企業的核心產品開發 | 不適合 | 目前仍在 beta 階段，可能不夠穩定。 |
| 教育機構製作多語言教學視頻 | 非常適合 | 支持多種語言，能夠吸引更廣泛的學習者。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠快速生成高質量音視頻內容，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料。依賴的庫和模型來自於可信的來源，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

daVinci-MagiHuman 可與多種工具鏈整合，特別是在音視頻生成和編輯的工作流中。它可以與 Docker 和 Conda 環境搭配使用，並能輕鬆集成到 CI/CD 流程中。舉例來說，在一個使用 GitHub Actions 的專案中，可以設置自動化生成視頻的流程，具體做法是將生成指令放入 CI 配置文件中。與主流 IDE（如 VS Code）兼容良好，能夠提供即時的開發支持。整合過程中，最常見的問題是模型依賴的版本不一致，這需要在安裝時注意。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
| Forks | 78 |
| Open Issues | 14 |
| Issue 解決率 | 30% (6 closed) |
| 最後推送 | 2026-03-26 |
| 建立日期 | 2026-03-22 |
| Repo 大小 | 22.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GAIR-NLP/daVinci-MagiHuman) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `accelerate` `av` `beautifulsoup4` `boto3` `debugpy` `depyf` `diffusers` `ffmpeg-python` `ftfy` `graphviz` `imageio` `loguru` `mosaicml_streaming` `packaging` `pandas`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EthanC111](https://github.com/EthanC111) | 14 |
> | [@cennn](https://github.com/cennn) | 6 |
> | [@JoyBoy-Su](https://github.com/JoyBoy-Su) | 2 |
> | [@jiahy0825](https://github.com/jiahy0825) | 1 |
> | [@piddnad](https://github.com/piddnad) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://huggingface.co/GAIR/daVinci-MagiHuman)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-26）
> **活躍天數** 2 天 · **最新 commit** update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/6) | 国产之光 | 3 | 1 |
> | [#10](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/10) | Are you planning for comfyui implementation? | 1 | 5 |
> | [#24](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/24) | Prompts for Video 6 and Video 7 | 0 | 0 |
> | [#23](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/23) | The object undergoes significant deformation during movement | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> -----
> 
> # daVinci-MagiHuman
> 
> ### Speed by Simplicity: A Single-Stream Architecture for Fast Audio-Video Generative Foundation Model
> 
>   SII-GAIR &nbsp;&amp;&nbsp; Sand.ai
> 
> [](https://arxiv.org/abs/2603.21986)
> [](https://huggingface.co/spaces/SII-GAIR/daVinci-MagiHuman)
> [](https://huggingface.co/GAIR/daVinci-MagiHuman)
> [](https://opensource.org/licenses/Apache-2.0)
> [](https://www.python.org/)
> [](https://pytorch.org/)
> 
> ## ✨ Highlights
> 
> - 🧠 **Single-Stream Transformer** — A unified 15B-parameter, 40-layer Transformer that jointly processes text, video, and audio via self-attention only. No cross-attention, no multi-stream complexity.
> - 🎭 **Exceptional Human-Centric Quality** — Expressive facial performance, natural speech-expression coordination, realistic body motion, and accurate audio-video synchronization.
> - 🌍 **Multilingual** — Supports Chinese (Mandarin & Cantonese), English, Japanese, Korean, German, and French.
> - ⚡ **Blazing Fast Inference** — Generates a 5-second 256p video in **2 seconds** and a 5-second 1080p video in **38 seconds** on a single H100 GPU.
> - 🏆 **State-of-the-Art Results** — Achieves **80.0%** win rate vs Ovi 1.1 and **60.9%** vs LTX 2.3 in pairwise human evaluation over 2,000 comparisons.
> - 📦 **Fully Open Source** — We release the complete model stack: base model, distilled model, super-resolution model, and inference code.
> 
> ## 🎬 Demo
> 
> https://github.com/user-attachments/assets/7050a191-38ef-4e36-8b48-0084ccc694f1
> 
> https://github.com/user-attachments/assets/c6cc056f-56ca-4285-80f3-bb6052228d23
> 
> ## 🏗️ Architecture
> 
> daVinci-MagiHuman uses a single-stream Transformer that takes text tokens, a reference image latent, and noisy video and audio tokens as input, and jointly denoises the video and audio within a unified token sequence.
> 
> Key design choices:
> 
> | Component | Description |
> |---|---|
> | 🥪 **Sandwich Architecture** | First and last 4 layers use modality-specific projections; middle 32 layers share parameters across modalities |
> | 🕐 **Timestep-Free Denoising** | No explicit timestep embeddings — the model infers the denoising state directly from input latents |
> | 🔀 **Per-Head Gating** | Learned scalar gates with sigmoid activation on each attention head for training stability |
> | 🔗 **Unified Conditioning** | Denoising and reference signals handled through a minimal unified interface — no dedicated conditioning branches |
> 
> ## 📊 Performance
> 
> ### Quantitative Quality Benchmark
> 
> | Model | Visual Quality ↑ | Text Alignment ↑ | Physical Consistency ↑ | WER ↓ |
> |---|:---:|:---:|:---:|:---:|
> | OVI 1.1 | 4.73 | 4.10 | 4.41 | 40.45% |
> | LTX 2.3 | 4.76 | 4.12 | **4.56** | 19.23% |
> | **daVinci-MagiHuman** | **4.80** | **4.18** | 4.52 | **14.60%** |
> 
> ### Human Evaluation (2,000 Pairwise Comparisons)
> 
> | Matchup | daVinci-MagiHuman Win | Tie | Opponent Win |
> |---|:---:|:---:|:---:|
> | vs Ovi 1.1 | **80.0%** | 8.2% | 11.8% |
> | vs LTX 2.3 | **60.9%** | 17.2% | 21.9% |
> 
> ### Inference Speed (5-second video, on a single H100 GPU)
> 
> | Resolution | Base (s) | Super-Res (s) | Decode (s) | **Total (s)** |
> |---|:---:|:---:|:---:|:---:|
> | 256p | 1.6 | — | 0.4 | **2.0** |
> | 540p | 1.6 | 5.1 | 1.3 | **8.0** |
> | 1080p | 1.6 | 31.0 | 5.8 | **38.4** |
> 
> ## 🚀 Efficient Inference Techniques
> 
> - ⚡ **Latent-Space Super-Resolution** — Two-stage pipeline: generate at low resolution, then refine in latent space (not pixel space), avoiding an extra VAE decode-encode round trip.
> - 🔄 **Turbo VAE Decoder** — A lightweight re-trained decoder that substantially reduces decoding overhead.
> - 🔧 **Full-Graph Compilation** — [MagiCompiler](https://github.com/SandAI-org/MagiCompiler) fuses operators across Transformer layers for ~1.2x speedup.
> - 💨 **Distillation** — DMD-2 distillation enables generation with only 8 denoising steps (no CFG), without sacrificing quality.
> 
> ## 📦 Getting Started
> 
> ### Option 1: Docker (Recommended)
> 
> ```bash
> # Recommended: use the prebuilt MagiHuman image (supports full pipeline including SR 1080p)
> docker pull sandai/magi-human:latest
> 
> docker run -it --gpus all --network host --ipc host \
>   -v /path/to/repos:/workspace \
>   -v /path/to/checkpoints:/models \
>   --name my-magi-human \
>   sandai/magi-human:latest \
>   bash
> 
> # Install MagiCompiler
> git clone https://github.com/SandAI-org/MagiCompiler.git
> cd MagiCompiler
> pip install -r requirements.txt
> pip install .
> cd ..
> 
> # Clone daVinci-MagiHuman
> git clone https://github.com/GAIR-NLP/daVinci-MagiHuman
> cd daVinci-MagiHuman
> ```
> 
> If you prefer manual setup, follow Option 2 (Conda) below.
> 
> ### Option 2: Conda
> 
> ```bash
> # Create environment
> conda create -n davinci python=3.12
> conda activate davinci
> 
> # Install PyTorch
> pip install torch==2.9.0 torchvision==0.24.0 torchaudio==2.9.0
> 
> # Install Flash Attention (Hopper)
> git clone https://github.com/Dao-AILab/flash-attention
> cd flash-attention/hopper && python setup.py install && cd ../..
> 
> # Install MagiCompiler
> git clone https://github.com/SandAI-org/MagiCompiler.git
> cd MagiCompiler
> pip install -r requirements.txt
> pip install .
> cd ..
> 
> # Clone and install daVinci-MagiHuman
> git clone https://github.com/GAIR-NLP/daVinci-MagiHuman
> cd daVinci-MagiHuman
> pip install -r requirements.txt
> pip install --no-deps -r requirements-nodeps.txt
> 
> # Optional (only for sr-1080p): Install MagiAttention
> git clone --recursive https://github.com/SandAI-org/MagiAttention.git
> cd MagiAttention
> git checkout v1.0.5
> git submodule update --init --recursive
> pip install -r requirements.txt
> pip install --no-build-isolation .
> ```
> 
> ### Download Model Checkpoints
> 
> Download the complete model stack from [HuggingFace](https://huggingface.co/GAIR/daVinci-MagiHuman) and update the paths in the config files under `example/`.
> 
> You will also need the following external models:
> 
> | Model | Source |
> |---|---|
> | Text Encoder | [t5gemma-9b-9b-ul2](https://huggingface.co/google/t5gemma-9b-9b-ul2) |
> | Audio Model | [stable-audio-open-1.0](https://huggingface.co/stabilityai/stable-audio-open-1.0) |
> | VAE | [Wan2.2-TI2V-5B](https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B) |
> 
> ## 🎯 Usage
> 
> Before running, update the checkpoint paths in the config files (`example/*/config.json`) to point to your local model directory.
> 
> > **Note:** The first run will be slower due to model compilation and cache warmup. Subsequent runs will match the reported inference speeds.
> 
> **Base Model (256p)**
> ```bash
> bash example/base/run.sh
> ```
> 
> **Distilled Model (256p, 8 steps, no CFG)**
> ```bash
> bash example/distill/run.sh
> ```
> 
> **Super-Resolution to 540p**
> ```bash
> bash example/sr_540p/run.sh
> ```
> 
> **Super-Resolution to 1080p**
> ```bash
> bash example/sr_1080p/run.sh
> ```
> 
> ## ✍️ Prompt Guidance
>  
> daVinci-MagiHuman uses an **Enhanced Prompt** system that rewrites user inputs into detailed performance directions optimized for avatar-style video generation. For the full system prompt specification, see [`prompts/enhanced_prompt_design.md`](prompts/enhanced_prompt_design.md).
> 
> Below is a quick reference for writing effective prompts.
> 
> ### Output Structure
>  
> Every enhanced prompt has **three parts**:
>  
> 1. **Main Body** (150–200 words) — A clinical, chronological description of the character's appearance, facial dynamics, vocal delivery, and static cinematography. Written in English regardless of dialogue language.
>  
> 2. **Dialogue** — Repeats all spoken lines in a structured format:
>    ```
>    Dialogue:
>    : "Line content"
>    ```
>  
> 3. **Background Sound** — Specifies the most prominent ambient sound:
>    ```
>    Background Sound:
>    
>    ```
>    Use `` if none.
> 
> ### Quick Example
>  
> **User input:** A man in a yellow shirt says "有的人在一起生活一辈子，还带着假面具呢"
>  
> **Enhanced prompt (abbreviated):**
>  
> > A young man with short dark hair, wearing a bright yellow polo shirt, sits stationary. His disposition is earnest and slightly agitated... He speaks with a rapid, emphatic tone, his mouth opening wide as he says, "有 的 人 在 一 起 生 活 一 辈 子，还 带 着 假 面 具 呢..." His brow furrows, lip muscles showing distinct dynamics...
> >
> > Dialogue:
> > \: "有 的 人 在 一 起 生 活 一 辈 子，还 带 着 假 面 具 呢..."
> >
> > B

## 延伸閱讀

相關概念：[[多模態]] · [[生成模型]] · [[自注意力]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/GAIR-NLP/daVinci-MagiHuman)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態生成" AND file.name != "GAIR-NLP--daVinci-MagiHuman"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "GAIR-NLP--daVinci-MagiHuman"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "GAIR-NLP--daVinci-MagiHuman" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "GAIR-NLP--daVinci-MagiHuman"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","生成模型","自注意力"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GAIR-NLP--daVinci-MagiHuman" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GAIR-NLP--daVinci-MagiHuman" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GAIR-NLP" AND file.name != "GAIR-NLP--daVinci-MagiHuman"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
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

> **2026-03-27** — 首次收錄
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

- [[2026-03-29|2026-03-29]] — 再次上榜，1.1k stars
- [[2026-03-28|2026-03-28]] — 再次上榜，1.0k stars
- [[2026-03-27|2026-03-27]] — 首次收錄，934 stars
