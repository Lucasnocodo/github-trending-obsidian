---
repo: slvDev/esp32-ai
url: https://github.com/slvDev/esp32-ai
owner: slvDev
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 2354
stars_per_day: 392
forks: 269
open_issues: 7
created: 2026-07-23
pushed_at: 2026-07-26
first_seen: 2026-07-26
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "嵌入式 AI"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-26
use_case: "在 $8 的 ESP32 微控制器上運行 28.9M 參數的語言模型，實現無伺服器的本地生成文本。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-08-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1085
readme_length: 4216
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-26"
star_history: "2026-07-26:875,2026-07-27:1436,2026-07-28:1788,2026-07-29:2103,2026-07-30:2354"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "esp32-ai"
  - "slvDev/esp32-ai"
  - "在 $8 的 ESP32 微控制器上運行 28.9M 參數的語言模型，實現無伺服器的本地生成文本。"
---

# esp32-ai

**875** stars · **438** stars/天 · 建立 2 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/slvDev--esp32-ai");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 在 $8 的 ESP32 微控制器上運行 28.9M 參數的語言模型，實現無伺服器的本地生成文本。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (438 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在資源有限的嵌入式系統上運行 AI 模型的開發者。
> **一句話重點** 這個專案展示了如何在極低成本的硬體上實現大型語言模型的運行，開啟了嵌入式 AI 的新可能性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/slvDev--esp32-ai");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "嵌入式 AI" && p.file.name !== "slvDev--esp32-ai" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 嵌入式 AI 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，能夠在小型嵌入式設備上運行大型模型，值得探索。

> [!abstract] 核心創新
> 這個專案的創新在於將大型語言模型適應於資源極其有限的微控制器上運行。

## 專案簡介

這個專案的核心是將一個 28.9 百萬參數的語言模型運行在 ESP32-S3 微控制器上，這個微控制器的成本約為 $8。模型的運行完全在設備上，沒有任何數據發送到伺服器，並且以每秒約 9 個 token 的速度將生成的文本輸出到連接的小螢幕上。這個模型的設計突破了以往只能在小型微控制器上運行 260,000 參數模型的限制，因為它使用了 Google 的 Per-Layer Embeddings 概念，將大部分模型存儲在閃存中，而非 RAM。這樣的設計使得模型的運行成本幾乎為零，因為大部分參數不需要一次性加載，而是根據需要逐步讀取。這個模型主要訓練於 TinyStories 數據集，專注於生成簡短且連貫的故事，但不具備回答問題或執行指令的能力。使用者可以透過 `firmware/esp32_llm/README.md` 中的指導來運行這個模型，並且其訓練和量化的代碼位於 `src/` 和 `experiments/` 目錄下。這個專案的賣點在於其架構設計，展示了如何將大型模型適應於小型設備，而非模型本身的表現。

**技術棧**：`Python 3.12` · `ESP-IDF` · `PyTorch 2.13.0`

## 重點功能

- 本地運行 — 模型完全在 ESP32-S3 上運行，無需伺服器支持。
- 高參數數量 — 支持 28.9M 參數，顯著超過傳統微控制器模型。
- 低成本 — 使用約 $8 的 ESP32-S3 微控制器，實現高效能。
- 快速生成 — 每秒約 9 個 token 的生成速度，適合即時應用。
- 創新架構 — 使用 Per-Layer Embeddings 將大部分模型存儲在閃存中，節省 RAM 使用。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/slvDev/esp32-ai.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 燒錄固件
```bash
esptool.py --chip esp32 write_flash -z 0x1000 firmware/esp32_llm.bin
```

## 程式碼範例

```python
[
  "# 前置條件：安裝了必要的依賴和固件",
  "pip install -r requirements.txt",
  "# 預期輸出：安裝所需的所有 Python 依賴"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 875 stars（438/天），forks 98（11.2%），這顯示出高水平的社群參與。作者 slvDev 之前在 AI 和微控制器領域有過相關經驗，這個專案解決了在資源有限的設備上運行大型語言模型的痛點，之前的方案無法滿足這個需求。這個專案的推出引起了對於微控制器 AI 應用的廣泛討論，特別是在社群平台上。技術上，這個專案的成功依賴於對於記憶體使用的創新設計，讓它在小型設備上運行成為可能。forks/stars 比率為 11.2%，顯示出有相當一部分使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望在資源有限的嵌入式系統上運行 AI 模型的開發者。

> [!example] 使用場景
> - 硬體工程師用它來在 ESP32 上開發本地語言生成應用，因為它能在不依賴雲端的情況下運行大型模型，節省了網路成本。
> - 嵌入式系統開發者用它來創建智能家居設備，因為這個模型能在資源有限的環境中生成自然語言響應，提升用戶互動體驗。
> - AI 研究者用它來探索微控制器上的 AI 應用，因為它展示了如何在小型設備上實現大型模型的運行，開啟了新的研究方向。

## 架構分析

這個專案的架構設計基於 ESP32-S3 微控制器，將大部分模型參數存儲在閃存中，僅將必要的計算部分放在快速的 SRAM 中。這樣的設計使得模型能夠在資源有限的環境中運行，並且避免了傳統方法中對 RAM 的過度依賴。資料流方面，模型在每次生成 token 時僅從閃存中讀取必要的參數，這樣可以有效減少內存使用。這種方法的 trade-off 是在處理速度上可能會受到閃存讀取速度的影響，但整體上能夠在小型設備上實現高效能。擴展性方面，由於設計上依賴於特定的硬體，未來的擴展可能需要針對不同的微控制器進行調整。

## 技術深入分析

這個專案的核心技術機制是將大型語言模型的參數存儲在閃存中，並利用快速的 SRAM 進行計算，這樣的設計使得在資源有限的微控制器上運行成為可能。模型的效能特性顯示，每秒約 9 個 token 的生成速度，這在嵌入式系統中是相當可觀的。由於大部分模型參數存儲在閃存中，這樣的設計能夠有效減少 RAM 的使用，從而降低了運行成本。選擇 ESP32-S3 作為硬體平台的原因在於其具備足夠的閃存和 PSRAM 來支持模型的運行，然而這也限制了未來的擴展性，因為不同的微控制器可能需要不同的設計考量。技術風險方面，隨著模型的擴大，可能會面臨閃存讀取速度的瓶頸，這可能會影響到生成速度。整合方面，這個專案與現有的嵌入式開發工具鏈相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要一定的硬體知識。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 能在低成本微控制器上運行大型模型，降低了進入門檻。
> - 完全本地運行，無需依賴網路，提升了隱私性。
> - 創新的記憶體管理技術，能有效利用有限的資源。

> [!danger] 缺點
> - 功能限制，無法處理複雜的任務或查詢。
> - 需要一定的硬體知識來進行設置和維護。
> - 目前僅支持特定的微控制器，擴展性有限。

> [!warning] 注意事項
> - 僅支持 ESP32-S3 微控制器，無法在其他平台運行。
> - 不支持複雜的問答或指令執行，僅能生成簡單故事。
> - 需要一定的硬體知識來進行燒錄和連接。
> - 目前只支持 Python 3.12 及以上版本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的框架，而不是直接在微控制器上運行模型。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種 AI 模型的運行環境，但不專注於微控制器的資源限制。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的框架，並不專注於微控制器的資源限制。 | 如果你的團隊需要一個更通用的 AI 代理框架，而不僅僅是針對微控制器的解決方案。 | medium，因為需要重新設計整個架構以適應不同的需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種 AI 模型的運行環境，但不專注於微控制器的資源限制。 | 如果你的應用需要多樣化的 AI 模型而不僅限於微控制器環境。 | high，因為需要重構應用以適應新的模型和環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **esp32-ai** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建 AI 代理的框架，並不專注於微控制器的資源限制。 | 提供了多種 AI 模型的運行環境，但不專注於微控制器的資源限制。 |
> | 遷移成本 | - | medium，因為需要重新設計整個架構以適應不同的需求。 | high，因為需要重構應用以適應新的模型和環境。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個更通用的 AI 代理框架，而不僅僅是針對 | 如果你的應用需要多樣化的 AI 模型而不僅限於微控制器環境。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前不建議在生產環境中使用，適合個人實驗和研究。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在特定條件下，閃存讀取速度可能會影響生成速度
  - 解法：優化閃存的使用方式，減少不必要的讀取
- **[HIGH]** 需要特定的硬體設置才能運行
  - 解法：仔細遵循 README 中的硬體連接指導
- [MEDIUM] 模型生成的文本可能不夠多樣化，限制了應用場景
  - 解法：考慮使用不同的訓練數據集進行微調

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型 IoT 設備開發團隊 | 非常適合 | 能在資源有限的環境中運行大型模型，適合 IoT 應用。 |
| 大型 AI 研究機構 | 普通 | 雖然有創新，但功能限制不符合高需求的研究。 |
| 個人開發者進行嵌入式 AI 實驗 | 非常適合 | 提供了低成本的實驗平台，適合個人探索。 |
| 商業產品開發 | 不適合 | 目前不穩定，且功能限制不符合商業需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠在小型嵌入式設備上運行大型模型，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，但使用時需注意閃存的安全性和數據完整性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 ESP-IDF 和其他嵌入式開發工具搭配使用，處於開發和部署的環節。在一個使用 ESP-IDF 的專案中，你可以用這個工具來運行大型語言模型，具體做法是按照 README 中的指導進行燒錄和連接。它與主流的 CI/CD 工具如 GitHub Actions 兼容，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於硬體設置的複雜性，使用者需要確保正確的連接和配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/slvDev--esp32-ai");
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
> const me = dv.page("Repos/slvDev--esp32-ai");
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
| Forks | 98 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-23 |
| 建立日期 | 2026-07-23 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/slvDev/esp32-ai) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 49
>     "C" : 28
>     "C++" : 17
>     "Shell" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@slvDev](https://github.com/slvDev) | 30 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有數個提交和問題討論。
**連結**：[文件](https://github.com/slvDev/esp32-ai/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-21 ~ 2026-07-23）
> **活躍天數** 3 天 · **最新 commit** docs: update readme with demo gif

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/slvDev/esp32-ai/issues/2) | support Needle for tool calling | 1 | 0 |
> | [#6](https://github.com/slvDev/esp32-ai/issues/6) | for vision multimodal chat conversational model in 29m you m | 0 | 0 |
> | [#5](https://github.com/slvDev/esp32-ai/issues/5) | Request: publish the trained model.bin (or upload to Hugging | 0 | 0 |
> | [#3](https://github.com/slvDev/esp32-ai/issues/3) | How to increase the context window, if you have some RAM. | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Running a 28.9M parameter LLM on an $8 microcontroller
> 
>   Open to Work &nbsp;·&nbsp;
>   𝕏 slvDev &nbsp;·&nbsp;
>   LinkedIn
> 
> This is a 28.9 million parameter language model that generates text on an ESP32-S3,
> a microcontroller that costs about $8. It runs on the chip itself, with nothing
> sent to a server, and it writes each word to a small screen wired to the chip at
> roughly 9 tokens per second. The last language model people ran on a chip like this had 260
> thousand parameters, so this one holds about a hundred times more. It fits because
> most of the model lives in flash instead of RAM, using an idea from Google's Gemma
> models called Per-Layer Embeddings.
> 
> ## The numbers
> 
> |              |                                                               |
> | ------------ | ------------------------------------------------------------- |
> | Parameters   | 28.9M stored (25M of them in a flash lookup table)            |
> | Chip         | ESP32-S3, about $8, with 512KB SRAM, 8MB PSRAM and 16MB flash |
> | Speed        | about 9.5 tok/s end to end (9.7 tok/s of pure compute)        |
> | Connectivity | none, everything runs on the device                           |
> | Model size   | 14.9MB at 4-bit                                               |
> 
> ## Why it is hard, and how it fits anyway
> 
> A microcontroller has very little fast memory. The ESP32-S3 gives you 512KB of SRAM.
> Normally the whole model has to be reachable from there, which keeps you stuck with
> tiny models, and that is why the previous model on a chip like this had only 260
> thousand parameters.
> 
> The way around it is to stop putting the model in fast memory at all. Most of a
> language model's parameters sit in an embedding table, which the model reads from
> rather than computes on. So you can leave that 25 million row table in slow flash
> and pull only the few rows each token needs, about 450 bytes, while the small part
> that does the actual work stays in fast memory. The large model then costs almost
> nothing to run, because you never load most of it. It just sits in flash and gets
> sampled a little at a time.
> 
> That idea is Google's Per-Layer Embeddings, from Gemma 3n and Gemma 4. Here it runs
> on the memory layout of a microcontroller instead of a phone or a GPU. As far as I
> can tell, nobody had tried it on a chip this small.
> 
> ```
>   SRAM  (fast, tiny)   the "thinking" core, used on every token
>   PSRAM (medium)       the output head and working memory
>   FLASH (huge, slow)   the 25M-param table, about 6 rows read per token (~450 B)
> ```
> 
> ## What it does, and what it does not
> 
> The model was trained on TinyStories, so it writes short, simple stories and mostly
> keeps them coherent. It will not answer questions, follow instructions, write code,
> or know facts. That limit comes from the small part of the model that does the
> reasoning, and the memory trick does not change it. What is interesting here is the
> architecture, fitting a large model onto a tiny chip, rather than what a 28.9 million
> parameter model can say.
> 
> ## Running it yourself
> 
> The firmware, the wiring, and the flashing steps live in
> [`firmware/esp32_llm/README.md`](firmware/esp32_llm/README.md). The training,
> ablation, and quantization code is in `src/` and `experiments/`. The full method,
> the ablations, and the on-chip measurements are written up in
> [`RESULTS.md`](RESULTS.md).
> 
> ## Credit
> 
> TinyStories is the dataset this trains on: short synthetic stories simple enough
> that a small model can still learn to write coherently (Ronen Eldan and Yuanzhi Li,
> Microsoft Research, [arXiv:2305.07759](https://arxiv.org/abs/2305.07759)). The other
> half is Per-Layer Embeddings, Google's design from the Gemma models, which is what
> lets a big model fit on a small chip.
> 
> Andrej Karpathy's [llama2.c](https://github.com/karpathy/llama2.c) is why a lot of
> people, me included, believe you can train a tiny language model and run it in plain
> C at all. This grew out of that.
> 
> ## How this actually went
> 
> I left the messy history in the repo on purpose. That includes a bug I found in my
> own parameter accounting, which had inflated an early number, and the corrected
> result that followed once I fixed it. The commit history and `RESULTS.md` show where
> the numbers moved and why.

## 延伸閱讀

相關概念：[[微服務]] · [[嵌入式]] · [[自然語言處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Blaizzy--nativ|Blaizzy/nativ]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Forsy-AI--agent-apprenticeship|Forsy-AI/agent-apprenticeship]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/slvDev/esp32-ai)

## 相關收錄

> [!note]- 直接競品（同子分類：嵌入式 AI）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "嵌入式 AI" AND file.name != "slvDev--esp32-ai"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "slvDev--esp32-ai"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "slvDev--esp32-ai" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "slvDev--esp32-ai"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","嵌入式","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "slvDev--esp32-ai" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/slvDev--esp32-ai");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "slvDev--esp32-ai" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "slvDev" AND file.name != "slvDev--esp32-ai"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/slvDev--esp32-ai");
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
> const me = dv.page("Repos/slvDev--esp32-ai");
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
> const me = dv.page("Repos/slvDev--esp32-ai");
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
> const me = dv.page("Repos/slvDev--esp32-ai");
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
> const me = dv.page("Repos/slvDev--esp32-ai");
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

> **2026-07-26** — 首次收錄
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

- [[2026-07-30|2026-07-30]] — 再次上榜，2.4k stars
- [[2026-07-29|2026-07-29]] — 再次上榜，2.1k stars
- [[2026-07-28|2026-07-28]] — 再次上榜，1.8k stars
- [[2026-07-27|2026-07-27]] — 再次上榜，1.4k stars
- [[2026-07-26|2026-07-26]] — 首次收錄，875 stars
