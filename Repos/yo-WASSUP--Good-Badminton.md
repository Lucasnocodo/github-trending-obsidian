---
repo: yo-WASSUP/Good-Badminton
url: https://github.com/yo-WASSUP/Good-Badminton
owner: yo-WASSUP
owner_type: User
language: Python
license: Apache-2.0
description: "🏸  AI Badminton Hawk-Eye System"
homepage: ""
stars: 479
stars_per_day: 120
forks: 150
open_issues: 5
created: 2026-06-20
pushed_at: 2026-06-23
first_seen: 2026-06-25
week: "2026-W26"
month: "2026-06"
category: "其他"
subcategory: "運動分析"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-25
use_case: "提供基於計算機視覺的羽毛球比賽視頻分析工具，實現自動化的比賽數據統計與可視化。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-02"
contributor_count: 1
engagement: "high"
issue_close_rate: 44
repo_size_kb: 40484
readme_length: 7037
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-25"
star_history: "2026-06-25:479"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "Good-Badminton"
  - "yo-WASSUP/Good-Badminton"
  - "提供基於計算機視覺的羽毛球比賽視頻分析工具，實現自動化的比賽數據統計與可視化。"
---

# Good-Badminton

**479** stars · **120** stars/天 · 建立 4 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
> 提供基於計算機視覺的羽毛球比賽視頻分析工具，實現自動化的比賽數據統計與可視化。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (120 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要分析羽毛球比賽視頻並獲取運動數據的教練和運動分析師。
> **一句話重點** 這個專案展示了計算機視覺在運動分析中的強大潛力，特別是在自動化數據處理方面。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "運動分析" && p.file.name !== "yo-WASSUP--Good-Badminton" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 運動分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的羽毛球分析工具，值得嘗試。

> [!abstract] 核心創新
> 自動化的羽毛球比賽視頻分析系統，能夠實現即時的運動數據統計與可視化。

## 專案簡介

Good-Badminton 是一個基於計算機視覺的羽毛球比賽分析系統，能夠自動處理比賽視頻，並提供球員姿態檢測、羽毛球位置追蹤和運動統計等功能。用戶只需提供比賽視頻，系統會自動檢測球場邊界並生成分析結果，輸出包括帶標註的視頻和數據文件。核心賣點在於其自動化的分析流程，能夠大幅減少手動標註的時間，並提供即時的運動數據統計。系統使用了多種先進的模型，如 RTMPose 和 YOLO，來實現高效的姿態檢測和物體識別，並且支持 GPU 加速以提高處理速度。相較於傳統的手動分析方法，這個工具能夠在短時間內處理大量視頻數據，並且提供精確的運動統計，適合教練和運動分析師使用。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，Good-Badminton 更專注於羽毛球運動，並提供了針對該運動特定的數據分析功能。實際使用中，系統要求 GPU 支持以獲得最佳性能，並且對於高分辨率視頻的處理能力有所依賴。這個專案目前處於早期開發階段，功能仍在不斷迭代中，未來計劃增強擊球點識別和技術動作統計等功能。對於小型團隊或研究者來說，這是一個值得關注的工具，但在生產環境中使用時需謹慎考量其穩定性和功能完整性。

**技術棧**：`Python 3.8+` · `OpenCV 4.10.0` · `PyTorch 2.5.1` · `YOLO`

## 重點功能

- 球員姿態檢測 — 支持 RTMPose、RTMO 和 Ultralytics YOLO Pose，能夠準確識別人體關鍵點。
- 羽毛球檢測 — 使用 YOLO 模型檢測羽毛球位置，並在視頻中繪製其運動軌跡。
- 球場坐標映射 — 手動標註球場關鍵點，將圖像坐標映射到標準球場坐標。
- 運動統計分析 — 記錄球員移動距離、速度和回合數，並生成統計數據。
- 可視化輸出 — 生成帶骨架、軌跡和統計信息的分析視頻，並支持熱力圖和散點圖的生成。
- 中英文顯示 — 可通過 `--language zh/en` 切換可視化文字，方便不同語言使用者。
- 本地運行 — 所有視頻、模型和分析結果都保存在本地，方便管理和查詢。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 運行基本命令分析視頻
```bash
python main.py --video-path videos/demo.mp4
```
3. 選擇球場模板圖
```bash
按提示選擇一張球場模板圖
```

## 程式碼範例

```python
{
  "前置條件": "安裝 Python 和依賴包",
  "指令": "python main.py --video-path videos/demo.mp4",
  "預期輸出": "生成分析視頻和數據文件，包含球員位置和運動統計。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 479 stars（120/天），forks 150（31.3%），顯示出強烈的社群興趣。作者 yo-WASSUP 是一位專注於運動分析的開發者，這個專案解決了傳統羽毛球比賽分析中手動標註的繁瑣問題，提供自動化的解決方案。近期的推廣活動和社交媒體的討論也可能促進了其曝光度。技術上，計算機視覺的進步使得這類工具的實現變得可行，尤其是在 GPU 加速的支持下，能夠快速處理高分辨率視頻。高 forks/stars 比率顯示出許多開發者對這個專案進行實際修改和使用，反映出其在社群中的活躍度。

## 適合誰使用

**目標受眾**：需要分析羽毛球比賽視頻並獲取運動數據的教練和運動分析師。

> [!example] 使用場景
> - 運動分析師用它來分析比賽視頻，獲得球員的運動數據和技術動作統計，因為這樣能夠快速生成精確的分析報告，提升訓練效果。
> - 教練用它來回顧比賽過程，檢視球員的表現和策略，因為自動化的數據統計能夠節省大量的時間和精力。
> - 研究者用它來進行羽毛球運動的數據分析，因為該工具提供了強大的可視化功能，能夠幫助他們更好地理解運動動態。

## 架構分析

Good-Badminton 採用模組化設計，主要由視頻分析系統、球場標註、檢測和可視化等多個模組組成。視頻分析主流程由 `system.py` 控制，使用 OpenCV 進行視頻處理和模型推理。球場標註模組負責將圖像坐標映射到標準球場坐標，這是進行運動統計的基礎。

選擇 Python 作為開發語言，因為其在數據處理和計算機視覺領域的豐富生態。這種設計使得系統易於擴展，但也帶來了依賴管理的挑戰，特別是在不同平台上的兼容性問題。擴展性方面，隨著功能的增加，可能會影響到性能，特別是在處理高分辨率視頻時。

整體架構適合快速迭代和功能擴展，但在大規模應用時需謹慎考量性能瓶頸。

## 技術深入分析

Good-Badminton 的核心技術機制主要依賴於計算機視覺和深度學習模型，特別是 RTMPose 和 YOLO。這些模型能夠準確識別人體姿態和羽毛球位置，並在視頻中進行實時標註。系統能夠處理的視頻分辨率取決於 GPU 的性能，推薦使用 6GB 以上顯存的顯卡以獲得最佳效果。設計上，Python 和 OpenCV 的選擇使得開發過程相對簡單，但也帶來了依賴管理的挑戰，特別是在不同平台上的兼容性問題。技術風險方面，隨著功能的增加，系統可能會面臨性能瓶頸，特別是在處理高分辨率視頻時。與主流框架的整合難度相對較低，但在 CI/CD pipeline 中的友好度仍需進一步提升。整體而言，這是一個充滿潛力的專案，但在實際應用中需要考慮其穩定性和性能。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指南，並包含了範例命令。安裝過程相對順暢，但對於 GPU 加速的配置可能會有一定的學習曲線。整體來說，對於新手來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化分析流程，節省大量手動標註時間。
> - 提供精確的運動數據統計，幫助教練和分析師做出更好的決策。
> - 支持 GPU 加速，能夠快速處理高分辨率視頻。

> [!danger] 缺點
> - 目前功能仍在開發中，某些功能可能不穩定。
> - 需要較高的硬體要求，對於低配置系統支持不佳。
> - 依賴於外部模型和權重，可能會影響使用的靈活性。

> [!warning] 注意事項
> - 需要 GPU 支持以獲得最佳性能，否則處理速度會明顯變慢。
> - 目前功能仍在迭代中，某些實驗功能可能不穩定。
> - 對於高分辨率視頻，顯存需求較高，建議使用 6GB 以上顯卡。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多種運動的分析，但不如 Good-Badminton 專注於羽毛球的特定需求。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多種運動的數據分析，但缺乏羽毛球專用的檢測模型和功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多種運動的分析，但缺乏針對羽毛球的專用檢測模型和功能。 | 如果需要多運動類型的分析，且不特別針對羽毛球的需求。 | medium，因為需要重新適應不同的數據處理流程。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多種運動的數據分析，但不如 Good-Badminton 專注於羽毛球的特定需求。 | 如果需要針對多種運動的通用分析工具，而不僅限於羽毛球。 | high，因為需要重新設計數據流和分析邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Good-Badminton** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多種運動的分析，但缺乏針對羽毛球的專用檢測模型和功能。 | 提供多種運動的數據分析，但不如 Good-Badminton 專注於羽毛球的特定需求。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的數據處理流程。 | high，因為需要重新設計數據流和分析邏輯。 |
> | 適用場景 | 主要場景 | 如果需要多運動類型的分析，且不特別針對羽毛球的需求。 | 如果需要針對多種運動的通用分析工具，而不僅限於羽毛球。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性項目，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些視頻視角下，球場邊界自動檢測可能不準確
  - 解法：手動標註球場四角點以提高準確性
- [MEDIUM] GPU 驅動配置不當可能導致性能下降
  - 解法：確保安裝正確版本的 NVIDIA 驅動和 CUDA
- [MEDIUM] 部分功能仍在開發中，可能會出現不穩定情況
  - 解法：定期檢查更新，使用穩定版本進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速生成運動數據，提升訓練效果。 |
| 大型體育賽事的實時分析 | 普通 | 可能面臨性能瓶頸，需考慮硬體配置。 |
| 學術研究中的運動數據分析 | 非常適合 | 提供精確的數據和可視化功能，適合深入研究。 |
| 個人愛好者的羽毛球比賽回顧 | 適合 | 能夠輕鬆分析比賽視頻，獲得有用的運動數據。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的羽毛球分析工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，僅需訪問本地文件系統，且不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
| Forks | 150 |
| Open Issues | 5 |
| Issue 解決率 | 44% (4 closed) |
| 最後推送 | 2026-06-23 |
| 建立日期 | 2026-06-20 |
| Repo 大小 | 39.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yo-WASSUP/Good-Badminton) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `opencv-python` `opencv-contrib-python` `numpy` `pillow` `--extra-index-url https://download.pytorch.org/whl/cpu` `torch` `torchvision` `ultralytics` `rtmlib` `onnxruntime` `pandas` `matplotlib` `seaborn` `moviepy` `scipy`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yo-WASSUP](https://github.com/yo-WASSUP) | 4 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和問題回應。
**連結**：[文件](https://github.com/yo-WASSUP/Good-Badminton)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-19 ~ 2026-06-23）
> **活躍天數** 3 天 · **最新 commit** Added automatic court boundary detection

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/yo-WASSUP/Good-Badminton/issues/10) | 双打模式 | 0 | 0 |
> | [#8](https://github.com/yo-WASSUP/Good-Badminton/issues/8) | 多视角测量 | 0 | 0 |
> | [#7](https://github.com/yo-WASSUP/Good-Badminton/issues/7) | 视角 | 0 | 0 |
> | [#6](https://github.com/yo-WASSUP/Good-Badminton/issues/6) | 球检测模型训练数据问题 | 0 | 0 |
> | [#4](https://github.com/yo-WASSUP/Good-Badminton/issues/4) | 能不能出一个计算球速的功能 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Good-Badminton: AI 羽毛球鹰眼系统 🏸
> 
> [](https://github.com/yo-WASSUP/Good-Badminton/stargazers)
> [](https://github.com/yo-WASSUP/Good-Badminton/network/members)
> [](https://github.com/yo-WASSUP/Good-Badminton/blob/main/LICENSE)
> [](https://www.xiaohongshu.com/explore/6a37b1d20000000011016229?xsec_token=ABod3wXBTiDppp6W2Ou0QHlu2eotUkeu27-ha64nFRR74=&xsec_source=pc_user)
> 
> **基于计算机视觉的羽毛球比赛视频分析工具**
> 
> [中文](README.md) | [English](README_EN.md)
> 
> ## 🎬 效果预览
> 
> 视频效果在 `assets/demo.mp4`。
> 
> ## 🆕 更新日志
> - **2026-06-23**：增加自动球场边界检测。
> - **2026-06-20**：正式开源。
> - **2026-06-17**：整理项目介绍文档。
> - **当前版本**：支持球员姿态检测、羽毛球检测、球场坐标映射、轨迹统计、热力图/散点图和带标注视频输出。
> - **实验功能**：击球点分析和技术动作统计仍在迭代中，适合研究和二次开发使用。
> 
> ## 🔮 开发计划
> 
> - [x] 羽毛球比赛视频逐帧分析
> - [x] RTMPose / RTMO / YOLO Pose 多姿态模型支持
> - [x] YOLO 羽毛球检测模型接入
> - [x] 手动球场标注与球场坐标映射
> - [x] 球员移动轨迹、速度、距离和回合统计
> - [x] 中文 / 英文可视化文字
> - [x] 热力图、散点图和检测数据导出
> - [ ] 更稳定的击球点识别
> - [ ] 更精确的羽毛球检测模型
> - [ ] 更完整的技术动作统计
> - [x] 自动球场关键点检测
> - [ ] 批量视频分析工作流
> 
> ---
> 
> ## ✨ 功能
> 
> - **球员姿态检测** - 支持 RTMPose、RTMO 和 Ultralytics YOLO Pose，识别人体关键点和骨架。
> - **羽毛球检测** - 使用 YOLO 模型检测羽毛球位置，并在输出视频中绘制轨迹。
> - **球场坐标映射** - 手动标注球场关键点，将图像坐标映射到标准球场坐标。
> - **球员位置追踪** - 分别追踪上半场和下半场球员位置，记录移动轨迹。
> - **回合检测** - 根据连续球场视图自动判断回合开始和结束，并在视频叠加层和检测数据中记录回合编号。
> - **运动统计分析** - 统计移动距离、当前速度、最大速度和回合数量。
> - **可视化输出** - 生成带骨架、轨迹、统计信息和球场轨迹的分析视频。
> - **位置图表** - 自动生成球员位置热力图和散点图。
> - **中英文显示** - 可通过 `--language zh/en` 切换可视化文字。
> - **本地运行** - 视频、模型和分析结果都保存在本地。
> 
> ## 📋 系统要求
> 
> - Python 3.8+
> - FFmpeg，并已加入系统 `PATH`
> - 羽毛球 YOLO 检测权重，请从 [GitHub Releases](https://github.com/yo-WASSUP/Good-Badminton/releases/latest)  下载
> 
> ## 性能需求与参考速度
> 
> 推荐配置：
> 
> - GPU，建议 6GB+ 显存；显存越大，越适合更高分辨率视频和更大的姿态模型。
> - 16GB+ 系统内存。
> - SSD 存储，方便写入输出视频、`detections.jsonl` 和可视化图片。
> - CPU 可以运行完整流程，但姿态检测和羽毛球检测会明显变慢，更适合短视频或功能验证。
> 
> 参考速度会受显卡、视频分辨率、姿态模型、是否显示窗口、是否保留音频影响。
> 
> 以 720p 视频、`--pose-family yolo-pose --yolo-pose-model yolo11n-pose.pt` 和 `weights/yolo11s-ball.pt` 为例，GPU 推理日志通常接近：
> 
> ```text
> pose 0.02s, shuttlecock 0.02s, shuttle draw 0.00s, players draw 0.01s, court draw 0.00s
> ```
> 
> 开启 `--performance-stats` 可以每隔约 5 秒打印一次性能汇总，用于判断瓶颈在姿态推理、羽毛球检测还是绘制阶段。
> 
> ## 🚀 安装指南
> 
> 默认依赖使用 CPU 版 PyTorch 和 ONNX Runtime。
> 
> ### Windows
> 
> ```bash
> python -m venv .venv
> .\.venv\Scripts\activate
> python -m pip install --upgrade pip
> pip install -r requirements.txt
> ```
> 
> ### Linux / macOS
> 
> ```bash
> python -m venv .venv
> source .venv/bin/activate
> python -m pip install --upgrade pip
> pip install -r requirements.txt
> ```
> 
> ### GPU 加速（Windows / NVIDIA）
> 
> 前置要求：
> 
> - 已安装 NVIDIA 显卡驱动，`nvidia-smi` 可以正常输出显卡信息。
> - 推荐使用 CUDA 12.1 对应的 PyTorch wheel。
> 
> PowerShell：
> 
> ```bash
> .\.venv\Scripts\activate
> 
> pip uninstall -y torch torchvision onnxruntime onnxruntime-gpu
> pip install torch==2.5.1+cu121 torchvision==0.20.1+cu121 --index-url https://download.pytorch.org/whl/cu121
> pip install onnxruntime-gpu==1.20.1
> ```
> 
> 验证 GPU 是否生效：
> 
> ```bash
> python -c "import torch; print('torch:', torch.__version__); print('cuda:', torch.cuda.is_available()); print('gpu:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'not available')"
> python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
> ```
> 
> 期望看到：
> 
> ```text
> cuda: True
> CUDAExecutionProvider
> ```
> 
> > 注意：安装 GPU 版 ONNX Runtime 后，`pip check` 可能提示 `rtmlib requires onnxruntime, which is not installed`。只要 provider 验证能看到 `CUDAExecutionProvider`，就不要再安装 CPU 版 `onnxruntime`，否则可能覆盖 GPU 包。
> 
> 切回 CPU 版：
> 
> ```bash
> pip install --force-reinstall -r requirements.txt
> ```
> 
> ## 📝 使用指南
> 
> ### 第一次运行流程
> 
> 1. 准备输入视频和羽毛球检测权重。
> 2. 运行基础命令：
> 
> ```bash
> python main.py --video-path videos/demo.mp4
> ```
> 
> 3. 如果没有传 `--template-path`，程序会弹出文件选择框，让你选择一张球场模板图。模板图通常选视频里视角稳定、球场线清楚的一帧。
> 4. 程序会先尝试自动检测球场边界，并保存 `outputs//auto_court_preview.png`。预览窗口按 Enter/Y 接受自动结果；按 M/R/Esc 进入手动四角标注。
> 5. 如果进入手动标注，按图片顶部提示依次点击球场四个角点：左上、右上、右下、左下。
> 
> 6. 点完四个点后，窗口会显示绿色球场框和蓝色姿态检测 ROI 框。ROI 由程序根据球场自动生成。
> 7. 标注结果会保存到 `outputs//court_annotations.txt`。同一个输出目录下再次运行会复用这个文件，不会重复要求标注。
> 8. 分析结束后，查看 `outputs//detect_.mp4`、`detections.jsonl` 和 `position_visualizations/`。
> 
> 为什么要标注球场四点：
> 
> - 四个角点用于建立图像坐标到标准羽毛球场坐标的映射。
> - 球员过滤主要依赖球场坐标，能把观众、裁判、场外人员过滤掉。
> - 上下半场球员判断、移动距离、速度、回合统计、热力图和散点图都依赖这个映射。
> - 回合检测基于球场模板匹配：连续多帧识别为比赛视图时开始回合，连续多帧离开比赛视图时结束回合。
> - 姿态检测 ROI 只用于减少推理区域和提升速度；它会自动从球场范围扩展生成。
> - 羽毛球检测仍在整帧上执行，轨迹显示会按球场横向范围加 padding 做基础过滤。
> 
> 如果你换了视频视角、裁切方式或模板图，需要删除对应输出目录里的 `court_annotations.txt`，重新标注四点。
> 
> ### 姿态模型选择
> 
> ```bash
> # 默认：两阶段 RTMPose balanced
> python main.py --video-path videos/demo.mp4 --pose-family rtmpose --pose-mode balanced
> 
> # 更轻量的一阶段 RTMO
> python main.py --video-path videos/demo.mp4 --pose-family rtmo --pose-mode lightweight
> 
> # 使用 Ultralytics YOLO Pose
> python main.py --video-path videos/demo.mp4 --pose-family yolo-pose --yolo-pose-model yolo11n-pose.pt
> ```
> 
> RTMPose 模型档位：
> 
> - `lightweight`：速度优先。
> - `balanced`：默认配置，速度和效果折中。
> - `performance`：更大模型，速度更慢，通常更适合追求检测质量。
> 
> ### 常用参数
> 
> ```text
> --video-path                 输入视频路径，必填
> --output-dir                 输出目录，默认 outputs/
> --ball-model                 YOLO 羽毛球检测模型路径，默认 weights/yolo11s-ball.pt
> --pose-family                姿态模型族：rtmpose、rtmo 或 yolo-pose
> --pose-mode                  RTMPose / RTMO 档位：lightweight、balanced、performance
> --yolo-pose-model            YOLO pose 模型路径或模型名，默认 yolo11n-pose.pt
> --template-path              球场模板图路径；不传时会弹出文件选择框
> --pose-roi true|false                是否显示姿态检测 ROI 框，默认 true
> --display true|false                 是否显示 OpenCV 预览窗口，默认 true
> --skeletons true|false               是否显示人体骨架，默认 true
> --player-trajectories true|false     是否显示球员轨迹，默认 true
> --court-trajectory true|false        是否显示球场轨迹叠加层，默认 true
> --shuttlecock-trajectory true|false  是否显示羽毛球轨迹，默认 true
> --player-stats true|false            是否显示球员统计信息，默认 true
> --performance-stats                  打印性能耗时
> --save-images                        保存处理后的每帧图像
> --visualize-positions true|false     是否生成热力图和散点图，默认 true
> --audio true|false                   是否保留原视频音频，默认 true
> --language {zh,en}           选择界面语言
> ```
> 
> ## 📊 输出结果
> 
> 默认输出到 `outputs//`：
> 
> - `metadata.json`：视频、模型、球场标注和输出文件元数据。
> - `detections.jsonl`：逐帧检测记录，包含回合编号、球员、手部、球场坐标、速度和羽毛球坐标。
> - `detect_.mp4`：带骨架、轨迹、统计信息和回合编号叠加层的输出视频。
> - `court_annotations.txt`：球场标注坐标缓存。
> - `position_visualizations/heatmaps/`：球员位置热力图。
> - `position_visualizations/scatter_plots/`：球员位置散点图。
> 
> ### 位置可视化示例
> 
> | 热力图 | 散点图 |
> | --- | --- |
> |  |  |
> 
> ## 🧩 项目结构
> 
> ```text
> main.py              # 命令行入口和参数解析，保持 python main.py ... 的运行方式
> badminton_analysis/
> ├── system.py        # 视频分析主流程 BadmintonAnalysisSystem
> ├── court/           # 球场标注与坐标映射
> ├── data/            # JSON / JSONL 输出
> ├── detection/       # 羽毛球检测与姿态检测
> ├── media/           # 视频音频处理
> ├── tracking/        # 球员追踪
> └── visualization/   # 视频叠加层、统计图和位置图
> ```
> 
> ## 🙏 致谢
> 
> 感谢 RTMPose、RTMO 和 OpenMMLab 生态提供的姿态估计算法基础，以及 [Tau-J/rtmlib](https://github.com/Tau-J/rtmlib) 提供的轻量姿态估计运行库。
> 
> 感谢 [Ultralytics](https://github.com/ultralytics/ultralytics) 提供的 YOLO 目标检测算法与工具链。
> 
> 感谢 [yastrebksv/TrackNet](https://github.com/yastrebksv/TrackNet) 项目整理并公开羽毛球数据集，为本项目的羽毛球检测与轨迹分析提供了重要参考。
> 
> ## 📄 许可证
> 
> 本项目代码和 `weights/yolo11s-ball.pt` 使用 Apache License 2.0。随 Release 提供的 RTMPose / RTMO / YOLOX ONNX 权重来自 OpenMMLab / RTMPose 生态，按其上游 Apache License 2.0 授权使用，并保留原始归属。
> 
> ## Star History
> 
> [](https://www.star-history.com/#yo-WASSUP/Good-Badminton&Date)

## 延伸閱讀

相關概念：[[電腦視覺]] · [[運動分析]] · [[姿態檢測]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/yo-WASSUP/Good-Badminton)

## 相關收錄

> [!note]- 直接競品（同子分類：運動分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "運動分析" AND file.name != "yo-WASSUP--Good-Badminton"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "yo-WASSUP--Good-Badminton"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "yo-WASSUP--Good-Badminton" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "yo-WASSUP--Good-Badminton"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["電腦視覺","運動分析","姿態檢測"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yo-WASSUP--Good-Badminton" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yo-WASSUP--Good-Badminton" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yo-WASSUP" AND file.name != "yo-WASSUP--Good-Badminton"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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
> const me = dv.page("Repos/yo-WASSUP--Good-Badminton");
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

> **2026-06-25** — 首次收錄
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

- [[2026-06-25|2026-06-25]] — 首次收錄，479 stars
