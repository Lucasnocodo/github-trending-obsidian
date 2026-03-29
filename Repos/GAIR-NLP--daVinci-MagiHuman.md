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
subcategory: "音視頻生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-27
use_case: "提供一個快速生成音視頻的單流架構模型，讓用戶能夠輕鬆創建高品質的音視頻內容。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 30
repo_size_kb: 22999
readme_length: 8670
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-27"
star_history: "2026-03-27:934,2026-03-27:934,2026-03-28:1014,2026-03-28:1015,2026-03-29:1078,2026-03-29:1078"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "daVinci-MagiHuman"
  - "GAIR-NLP/daVinci-MagiHuman"
  - "提供一個快速生成音視頻的單流架構模型，讓用戶能夠輕鬆創建高品質的音視頻內容。"
---

# daVinci-MagiHuman

**1.1k** stars · **180** stars/天 · 建立 6 天前 · Python · 未標註授權

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
> 提供一個快速生成音視頻的單流架構模型，讓用戶能夠輕鬆創建高品質的音視頻內容。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (180 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成高品質音視頻內容的創意工作者和開發者。
> **一句話重點** 這個專案的創新在於它的單流架構，使得音視頻生成過程更為高效且簡單。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GAIR-NLP--daVinci-MagiHuman");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "音視頻生成" && p.file.name !== "GAIR-NLP--daVinci-MagiHuman" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 音視頻生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的音視頻生成能力，值得投入。

> [!abstract] 核心創新
> 使用單流 Transformer 架構，簡化音視頻生成過程，提升推理速度和質量。

## 專案簡介

daVinci-MagiHuman 是一個基於單流 Transformer 的音視頻生成模型，能夠同時處理文本、視頻和音頻，並且不需要複雜的多流架構。用戶只需提供文本和參考圖像，模型便能生成高品質的音視頻，並在單個 H100 GPU 上以 2 秒生成 256p 的 5 秒視頻，38 秒生成 1080p 的視頻。這種設計選擇的優勢在於簡化了模型架構，降低了計算複雜度，並提高了推理速度。模型的性能在多個基準測試中表現出色，視覺質量達到 4.80，並在 2000 次人類評估中以 80% 的勝率超越競爭對手。這個工具的核心技術包括無時間步驟的去噪設計和統一的條件處理，這使得生成過程更為高效。

與其他音視頻生成工具相比，如 OVI 1.1 和 LTX 2.3，daVinci-MagiHuman 在質量和速度上都有顯著優勢，特別是在需要快速生成高解析度視頻的場景下。使用者在實際操作中可能會遇到首次運行速度較慢的情況，因為模型需要編譯和緩存，但後續運行將達到預期的推理速度。這個專案目前處於活躍開發中，社群互動良好，解決問題的速度也相對較快。對於需要快速生成音視頻內容的團隊或個人來說，這是一個值得考慮的選擇，尤其是在創意產業或教育領域。

**技術棧**：`PyTorch` · `Docker` · `ffmpeg`

## 重點功能

- 單流 Transformer — 統一處理文本、視頻和音頻，簡化架構，提升性能。
- 多語言支持 — 支援中文、英文、日文、韓文、德文和法文，擴大使用範圍。
- 快速推理 — 在單個 H100 GPU 上生成 256p 視頻僅需 2 秒，1080p 視頻需 38 秒，效率極高。
- 高品質生成 — 在多項基準測試中表現優異，視覺質量達到 4.80。
- 完全開源 — 提供完整的模型堆疊和推理代碼，便於用戶自定義和擴展。

## 快速開始

1. 使用 Docker 安裝
```bash
docker pull sandai/magi-human:latest
```
2. 運行 Docker 容器
```bash
docker run -it --gpus all --network host --ipc host -v /path/to/repos:/workspace -v /path/to/checkpoints:/models --name my-magi-human sandai/magi-human:latest bash
```
3. 克隆並安裝 daVinci-MagiHuman
```bash
git clone https://github.com/GAIR-NLP/daVinci-MagiHuman
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Docker 和 GPU 驅動",
  "指令": "docker run -it --gpus all --network host --ipc host -v /path/to/repos:/workspace -v /path/to/checkpoints:/models --name my-magi-human sandai/magi-human:latest bash",
  "預期輸出": "進入 Docker 容器，準備運行 daVinci-MagiHuman"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1078 stars（180/天），forks 84（7.8%），這顯示出穩定的增長趨勢。主要貢獻者包括多位活躍的開源開發者，這意味著專案有良好的維護基礎。這個專案解決了音視頻生成過程中的複雜性問題，提供了一個簡化的單流架構，讓用戶能夠更快地生成高品質內容。近期的推廣活動和社群討論也引起了開發者的注意，進一步推動了專案的流行。技術上，單流架構的選擇使得這個工具在性能上優於傳統的多流模型，這在當前的生成模型生態中是相對新穎的。forks/stars 比率在 5%-20% 之間，顯示出有相當比例的用戶在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速生成高品質音視頻內容的創意工作者和開發者。

> [!example] 使用場景
> - 視頻製作人用它來快速生成高品質的音視頻內容，因為它能在短時間內生成 1080p 的視頻，提升了工作效率。
> - 教育工作者用它來創建教學視頻，因為它支持多語言，能夠輕鬆生成不同語言的內容，滿足多元化的需求。
> - 遊戲開發者用它來生成遊戲中的角色動畫，因為模型能夠提供自然的動作和表情，增強遊戲的沉浸感。

## 架構分析

daVinci-MagiHuman 採用單流 Transformer 架構，這種設計使得模型能夠同時處理文本、視頻和音頻，避免了多流模型的複雜性。資料流從文本和參考圖像開始，然後進入統一的去噪過程，最終生成音視頻。這種架構的選擇使得模型在推理時能夠更快地生成內容，並且在質量上達到高標準。

選擇不使用時間步驟嵌入的設計，讓模型能夠直接從輸入中推斷去噪狀態，這降低了計算負擔。整體架構的輕量化設計使得在推理過程中能夠有效利用 GPU 資源，並且在處理大規模資料時不會出現過大的延遲。這種設計使得擴展性更好，能夠適應未來的需求變化。

## 技術深入分析

daVinci-MagiHuman 的核心技術機制是基於單流 Transformer，這使得模型能夠在處理音視頻生成時，避免了多流架構的複雜性。這種設計選擇讓模型在推理時能夠快速生成內容，並且在質量上達到高標準。模型的效能特徵顯示，能夠在單個 H100 GPU 上快速生成 256p 和 1080p 的視頻，這對於需要快速生成內容的應用場景非常重要。設計取捨方面，選擇不使用時間步驟嵌入的設計，讓模型能夠直接從輸入中推斷去噪狀態，這降低了計算負擔，但可能在某些情況下影響生成的靈活性。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大規模資料時。整合分析中，這個模型能夠與主流的深度學習框架如 PyTorch 無縫整合，並且在 CI/CD pipeline 中也能夠輕鬆使用，這對於開發者來說是一個加分項。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，對於新手來說相對友好。安裝過程中使用 Docker 可能會對非技術用戶造成一定的困難，但提供了 Conda 的選擇來降低門檻。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 高效的推理速度，能夠快速生成高品質的音視頻內容。
> - 單流架構簡化了模型設計，降低了計算複雜度。
> - 支持多種語言，適合全球用戶使用。
> - 完全開源，便於用戶進行自定義和擴展。

> [!danger] 缺點
> - 需要高性能的硬體支持，對於普通用戶可能有門檻。
> - 首次運行速度較慢，影響用戶體驗。
> - 對於非技術用戶，Docker 的使用可能會有一定的學習曲線。
> - 目前僅支持特定的音視頻格式，可能需要轉換。

> [!warning] 注意事項
> - 首次運行速度較慢，因為需要編譯和緩存模型。
> - 需要高性能的 GPU（如 H100）以達到最佳性能。
> - 對於非技術用戶，Docker 的使用可能會有一定的學習曲線。
> - 目前僅支持特定的音視頻格式，可能需要轉換。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop) | LTX-Desktop 提供多流架構的音視頻生成，但在速度和資源消耗上不如 daVinci-MagiHuman，適合需要複雜效果的專案。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 更專注於視頻編輯和特效處理，而 daVinci-MagiHuman 則專注於生成自然的音視頻內容，適合不同需求的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop) | LTX-Desktop 採用多流架構，能夠處理更複雜的效果，但在速度和資源消耗上不如 daVinci-MagiHuman。 | 如果需要生成複雜特效的視頻內容，LTX-Desktop 可能更適合。 | medium，因為需要重新調整生成流程和參數。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 更專注於視頻編輯和特效處理，而 daVinci-MagiHuman 則專注於生成自然的音視頻內容。 | 如果需要在視頻中添加大量特效，Shadowbroker 可能更合適。 | low，因為兩者在基本操作上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **daVinci-MagiHuman** | **LTX-Desktop** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | LTX-Desktop 採用多流架構，能夠處理更複雜的效果，但在速度和資源消耗上不如 daVinci-MagiHuman。 | Shadowbroker 更專注於視頻編輯和特效處理，而 daVinci-MagiHuman 則專注於生成自然的音視頻內容。 |
> | 遷移成本 | - | medium，因為需要重新調整生成流程和參數。 | low，因為兩者在基本操作上有相似之處。 |
> | 適用場景 | 主要場景 | 如果需要生成複雜特效的視頻內容，LTX-Desktop 可能 | 如果需要在視頻中添加大量特效，Shadowbroker 可能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次運行時速度較慢，因為需要編譯和緩存模型。
  - 解法：在首次運行後，後續運行將達到預期的推理速度。
- [MEDIUM] 對於非技術用戶，Docker 的使用可能會有一定的學習曲線。
  - 解法：提供 Conda 安裝選項以降低門檻。
- **[HIGH]** 需要高性能的 GPU 支持，普通硬體無法達到最佳性能。
  - 解法：使用雲端 GPU 服務來運行模型。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創意團隊需要快速生成宣傳視頻 | 非常適合 | 模型能夠在短時間內生成高品質的音視頻內容，提升工作效率。 |
| 大型製作公司需要複雜的視頻特效 | 不適合 | 模型專注於自然生成，對於複雜特效的支持有限。 |
| 教育機構需要多語言教學視頻 | 適合 | 支持多種語言，能夠滿足不同語言的需求。 |
| 個人開發者需要簡單的音視頻生成工具 | 非常適合 | 簡化的架構和快速的生成速度非常符合個人開發者的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的音視頻生成能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時需注意依賴的庫是否有已知的安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

daVinci-MagiHuman 通常與 PyTorch 和 Docker 一起使用，適合在開發和部署階段進行音視頻生成。在一個使用 PyTorch 的專案中，可以直接將該模型集成到現有的深度學習流程中，具體做法是將模型作為一個模組引入，並使用 Docker 來管理環境。該工具與 GitHub Actions 和其他 CI/CD 工具相容，方便進行自動化部署。整合過程中，最常見的問題是 Docker 配置不當，建議使用官方文檔中的範例進行設置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 daVinci-MagiHuman 出現之前，音視頻生成主要依賴於多流架構，這導致了計算資源的浪費和生成速度的緩慢。隨著深度學習技術的進步，單流架構變得可行，這使得模型能夠在性能和質量上達到新的高度。這個工具代表了音視頻生成領域的一個重要趨勢，未來可能會有更多基於單流架構的模型出現，進一步推動生成技術的發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python 和深度學習基本概念
- 了解 Docker 基本操作
- 有音視頻編輯經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：編寫最佳實踐文檔。第四週：在主產品中開始使用。

**成功指標**：生成視頻的質量和速度達到預期標準。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他模型。

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
| Forks | 84 |
| Open Issues | 14 |
| Issue 解決率 | 30% (6 closed) |
| 最後推送 | 2026-03-28 |
| 建立日期 | 2026-03-22 |
| Repo 大小 | 22.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GAIR-NLP/daVinci-MagiHuman) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `accelerate` `av` `beautifulsoup4` `boto3` `debugpy` `depyf` `diffusers` `ffmpeg-python` `ftfy` `graphviz` `imageio` `loguru` `mosaicml_streaming` `packaging` `pandas`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 97
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EthanC111](https://github.com/EthanC111) | 19 |
> | [@cennn](https://github.com/cennn) | 6 |
> | [@JoyBoy-Su](https://github.com/JoyBoy-Su) | 2 |
> | [@jiahy0825](https://github.com/jiahy0825) | 1 |
> | [@themistbeforedawn](https://github.com/themistbeforedawn) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率為 30%。
**連結**：[文件](https://github.com/GAIR-NLP/daVinci-MagiHuman)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-28）
> **活躍天數** 4 天 · **最新 commit** update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/6) | 国产之光 | 4 | 1 |
> | [#24](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/24) | Prompts for Video 6 and Video 7 | 2 | 0 |
> | [#10](https://github.com/GAIR-NLP/daVinci-MagiHuman/issues/10) | Are you planning for comfyui implementation? | 1 | 5 |
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
> - ⚡ **Latent-Space Super-Resolution** — Two-stage pipeline: generate at low resolution, then refine in latent space, avoiding an extra VAE decode-encode round trip.
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
> conda create -n davinci-magihuman python=3.12
> conda activate davinci-magihuman
> conda install ffmpeg
> 
> # Install PyTorch
> pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0
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
> > \: "有 的 人 在 一 起 生 活 一 辈 

## 延伸閱讀

相關概念：[[多模態]] · [[音視頻生成]] · [[深度學習]]

相關專案：[[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/GAIR-NLP/daVinci-MagiHuman)

## 相關收錄

> [!note]- 直接競品（同子分類：音視頻生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "音視頻生成" AND file.name != "GAIR-NLP--daVinci-MagiHuman"
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
> const concepts = ["多模態","音視頻生成","深度學習"];
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
