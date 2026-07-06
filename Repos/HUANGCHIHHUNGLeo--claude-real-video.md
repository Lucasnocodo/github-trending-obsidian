---
repo: HUANGCHIHHUNGLeo/claude-real-video
url: https://github.com/HUANGCHIHHUNGLeo/claude-real-video
owner: HUANGCHIHHUNGLeo
owner_type: User
language: Python
license: MIT
description: "Let Claude (or any LLM) actually watch a video — scene-aware, deduplicated frames + transcript, from a URL or local file. Runs locally, MIT."
homepage: ""
stars: 1029
stars_per_day: 206
forks: 62
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-05
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "開發工具"
subcategory: "視頻處理"
release_tag: "v0.4.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-04
use_case: "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持從 URL 或本地文件導入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-09"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 643
readme_length: 9159
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:569,2026-07-04:572,2026-07-05:768,2026-07-06:1029"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "claude-real-video"
  - "HUANGCHIHHUNGLeo/claude-real-video"
  - "讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持從 URL 或本地文件導入。"
---

# claude-real-video

**572** stars · **191** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.4.0` `easy-install`

> [!summary] 一句話摘要
> 讓 Claude（或任何 LLM）實際觀看視頻，提供場景感知、去重的幀和轉錄，支持從 URL 或本地文件導入。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (191 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要從視頻中提取信息並與 LLM 互動的開發者和研究人員。
> **一句話重點** 這個專案讓 LLM 能夠真正理解視頻內容，打破了傳統工具的限制。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻處理" && p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效的視頻分析工具，值得投入。

> [!abstract] 核心創新
> 這個專案的創新點在於能夠讓 LLM 實際觀看視頻，提取關鍵幀並生成轉錄文本，從而提升 LLM 的理解能力。

## 專案簡介

這個專案的核心功能是讓 LLM 能夠真正理解視頻內容，而不僅僅是依賴轉錄文本。用戶可以通過簡單的命令行指令，如 `crv "https://www.youtube.com/watch?v=..."`，將視頻中的重要幀提取出來，並生成相應的轉錄文本。這樣的設計使得 LLM 能夠接收到更具上下文的資訊，避免了傳統方法中固定幀率取樣導致的資訊遺失。專案使用 ffmpeg 和 faster-whisper 進行本地處理，所有數據都不會上傳，確保用戶隱私。這種方法不僅提升了 LLM 的理解能力，還能減少不必要的計算資源浪費，因為只提取有意義的幀。

相較於其他工具，如 ChatGPT 或 Gemini，這個工具能夠更精確地捕捉視頻中的關鍵場景，並且完全在本地運行，避免了網絡延遲和隱私問題。使用者可以將提取的幀和轉錄文本直接輸入到 LLM 中進行進一步的分析或提問。這樣的設計使得它在需要視頻分析的場景中，特別是對於需要高效處理大量視頻資料的開發者和研究人員來說，顯得尤為重要。整體而言，這是一個針對視頻內容理解的高效工具，能夠顯著提升 LLM 的應用範圍和效果。

**技術棧**：`Python 3.10` · `ffmpeg` · `faster-whisper`

## 重點功能

- 場景感知幀提取 — 只提取視頻中實際變化的幀，避免冗餘資料。
- 本地處理 — 所有數據在本地運行，無需上傳，保護用戶隱私。
- 支持多種視頻來源 — 可從 URL 或本地文件導入視頻進行處理。
- 生成轉錄文本 — 自動生成視頻的音頻轉錄，便於 LLM 理解。
- MANIFEST.txt — 記錄觀看目的，幫助 LLM 知道要關注什麼內容。

## 快速開始

1. 安裝套件
```bash
pip install claude-real-video
```
2. 提取視頻幀和轉錄
```bash
crv "https://www.youtube.com/watch?v=..."
```
3. 查看輸出結果
```bash
ls crv-out/
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 claude-real-video 套件。",
  "指令": "crv \"https://www.youtube.com/watch?v=...\"",
  "預期輸出": "crv-out/frames/*.jpg + crv-out/transcript.txt + crv-out/MANIFEST.txt"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 572 stars（191/天），forks 22（3.8%），這顯示出快速增長的潛力。作者 HUANGCHIHHUNGLeo 以開源社群的貢獻聞名，這個專案填補了 LLM 在視頻理解方面的空白，之前的工具多數只能處理文本或固定幀率的視頻內容。這一點在 HN 的討論中引起了廣泛關注，因為許多開發者對於如何讓 LLM 直接理解視頻內容感到困惑。隨著視頻內容的增長，這個工具的需求也隨之上升，特別是在教育和內容創作領域。forks/stars 比率顯示出用戶對於這個工具的實際使用和修改意願，顯示出其潛在的實用性。

## 適合誰使用

**目標受眾**：需要從視頻中提取信息並與 LLM 互動的開發者和研究人員。

> [!example] 使用場景
> - 數據科學家用它來分析 YouTube 教學視頻，提取關鍵幀和轉錄，因為這樣能夠更有效地整理和回顧學習內容。
> - 內容創作者用它來快速生成視頻摘要，提取重要場景並製作短片，因為這樣能節省大量編輯時間。
> - 研究人員用它來分析視頻資料集，提取場景變化以進行行為識別，因為這樣能提高模型訓練的準確性。

## 架構分析

這個專案採用本地處理架構，所有視頻處理和數據提取都在用戶的機器上完成，這樣可以避免網絡延遲和隱私問題。數據流從視頻源開始，經過 ffmpeg 提取幀，然後使用 faster-whisper 進行音頻轉錄，最後將結果輸出到指定的文件夾。這樣的設計使得用戶能夠快速獲得所需的幀和文本，並且可以靈活地將這些數據輸入到 LLM 中進行進一步分析。選擇本地處理的代價是需要用戶擁有一定的計算資源，但這樣的設計也使得工具在隱私和速度上有顯著優勢。擴展性方面，這個工具可以輕鬆集成到現有的視頻處理工作流中，並且支持多種視頻來源，這使得它在不同場景下都能發揮作用。

## 技術深入分析

這個專案的核心技術機制是使用 ffmpeg 進行視頻幀的提取，並利用 faster-whisper 進行音頻轉錄。這樣的設計使得用戶能夠快速獲得視頻中的關鍵幀，並生成相應的文本，從而提高 LLM 的理解能力。效能方面，這個工具能夠在本地快速處理視頻，避免了網絡延遲，並且能夠處理多種格式的視頻。設計選擇上，選擇 Python 作為開發語言，這使得工具易於擴展和維護，但也可能導致在處理大型視頻時的性能瓶頸。技術風險方面，對於長視頻的處理可能會導致資源消耗過大，影響系統性能。整合方面，這個工具可以輕鬆與現有的視頻處理工作流結合，並且支持多種 CI/CD 工具的整合，這使得其在團隊協作中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。提供的指令簡潔明瞭，易於新手上手，適合在 30 分鐘內完成基本設置。

## 優缺點分析

> [!success] 優點
> - 能夠本地處理視頻，保護用戶隱私。
> - 提取幀的效率高，只保留有意義的幀。
> - 生成的轉錄文本便於 LLM 理解視頻內容。
> - 支持多種視頻來源，靈活性高。

> [!danger] 缺點
> - 需要安裝額外的依賴，如 ffmpeg。
> - 對於長視頻，處理時間可能較長。
> - 不支援某些操作系統的功能。
> - 對於新手用戶，可能需要一些學習曲線。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要安裝 ffmpeg 和 faster-whisper 作為依賴。
> - 對於長視頻，提取過程可能需要較長時間。
> - 不支援 Windows 系統的某些功能，需在 Linux 或 macOS 上運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於視頻編輯和剪輯，而 claude-real-video 更專注於幀提取和 LLM 互動。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 該工具主要用於生成視頻內容，而本專案則是針對視頻分析和幀提取。 |
| [AlexandrosGounis/pdfx](https://github.com/AlexandrosGounis/pdfx) | pdfx 專注於 PDF 文件處理，而 claude-real-video 專注於視頻內容的理解。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於視頻編輯和剪輯，提供更豐富的編輯功能，而本專案則專注於幀提取和 LLM 互動。 | 如果需要進行視頻編輯和特效處理，則應選擇 boneyard。 | medium，因為需要重新設計工作流以適應編輯功能。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成視頻內容，提供創建新視頻的功能，而 claude-real-video 則是針對視頻分析和幀提取。 | 如果需要生成新的視頻內容而非分析現有視頻，則應選擇 agent-sprite-forge。 | high，因為需要完全改變使用場景和工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-real-video** | **boneyard** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於視頻編輯和剪輯，提供更豐富的編輯功能，而本專案則專注於幀提取和 LLM 互動。 | 專注於生成視頻內容，提供創建新視頻的功能，而 claude-real-video 則是針對視頻分析和幀提取。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流以適應編輯功能。 | high，因為需要完全改變使用場景和工具。 |
> | 適用場景 | 主要場景 | 如果需要進行視頻編輯和特效處理，則應選擇 boneyard。 | 如果需要生成新的視頻內容而非分析現有視頻，則應選擇 agen |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和實驗，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 處理長視頻時可能導致高資源消耗，影響系統性能
  - 解法：將視頻分割成較短的片段進行處理
- [MEDIUM] 某些操作系統可能無法完全支持 ffmpeg 的功能
  - 解法：使用 Docker 容器運行以避免兼容性問題
- [MEDIUM] 對於新手用戶，命令行操作可能不夠直觀
  - 解法：參考官方文檔中的範例進行操作

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要分析視頻內容 | 非常適合 | 能夠快速提取視頻中的關鍵幀和轉錄，提升工作效率。 |
| 大型企業需要處理大量視頻資料 | 普通 | 雖然能夠處理視頻，但對於長視頻的性能可能會成為瓶頸。 |
| 教育機構需要從教學視頻中提取內容 | 非常適合 | 能夠有效整理和回顧學習內容，提升教學質量。 |
| 個人開發者進行視頻分析的實驗 | 非常適合 | 簡單易用，適合快速實驗和迭代。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的視頻分析工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，不需要高權限，也不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與視頻處理工具和 LLM 搭配使用，通常在視頻分析的開發環節中發揮作用。在一個用 Python 開發的應用中，可以使用 `crv` 指令提取視頻幀，然後將生成的幀和轉錄文本直接輸入到 LLM 中進行分析。它與 GitHub Actions 等 CI 工具的整合相對簡單，並且可以與 VS Code 等 IDE 進行協作。最常見的整合問題是需要確保 ffmpeg 的安裝和配置正確，否則可能會導致處理失敗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，許多視頻分析工具只能基於固定幀率進行處理，導致重要資訊的遺失。隨著 LLM 的發展，對於視頻內容的理解需求日益增加，這促使了這個工具的誕生。這個工具代表了視頻分析技術的進步，未來可能會與更多的 AI 技術結合，進一步提升視頻理解的能力。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
| Forks | 22 |
| Open Issues | 0 |
| 最後推送 | 2026-07-03 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 643 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HUANGCHIHHUNGLeo/claude-real-video) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@HUANGCHIHHUNGLeo](https://github.com/HUANGCHIHHUNGLeo) | 13 |

**最新版本**：v0.4.0 — v0.4.0 — contact sheets, purpose-aware manifests, knowledge base (2026-07-03)

> [!info]- Release Notes
> ## What's new
> 
> - `--grid` — packs consecutive keyframes into 3×3 contact sheets so an LLM reads ordered sequences instead of isolated stills (a direct answer to the HN feedback that "keyframes are not video")
> - `--why` — records the purpose of your watch into MANIFEST.txt so the model knows what to look for
> - `--kb` — saves the digested summary as markdown into a local knowledge-base folder
> - Honest privacy wording: frames are extracted locally; whatever you feed your LLM goes to that LLM's provider
> 
> ## Install
> 
> ```
> pip install claude-real-video
> # or the LLM-agnostic alias:
> pip install llm-real-video
> ```
> 
> Runs 100% locally (ffmpeg + faster-whisper). MIT licensed.

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和問題回應。
**連結**：[文件](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-02 ~ 2026-07-03）
> **活躍天數** 2 天 · **最新 commit** docs: Pro section — mention --breakdown report module

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-real-video
> 
> [](https://pypi.org/project/claude-real-video/) [](https://pypi.org/project/claude-real-video/) [](LICENSE) [](https://news.ycombinator.com/item?id=48766005)
> 
> **Let Claude — or any LLM — actually watch a video.**
> 
> > Same 58-second clip: fixed 1 fps sampling = **58 frames**. crv keeps the **26 that actually differ** — and `--grid` packs them into **3 contact sheets**. Fewer tokens, nothing missed.
> 
> Most AI tools don't really *see* a video. Paste a YouTube link into ChatGPT and it
> reads the **transcript**, not the picture. Claude won't take a video file at all.
> Even Gemini, which *can* read video natively, has to send it up to Google and
> samples frames at a **fixed interval** (1 fps by default), so fast cuts slip past.
> 
> `claude-real-video` does it differently, and **locally**: point it at a URL or a
> file, and it pulls the frames that *actually matter* (every scene change, not a
> fixed quota), throws away the near-duplicates, transcribes the audio, and hands
> you a clean folder any LLM can read. All the processing happens on your own machine — what gets sent anywhere is only the frames/text *you* choose to paste into an LLM afterwards.
> 
> ```bash
> crv "https://www.youtube.com/watch?v=..."
> # → crv-out/frames/*.jpg  +  crv-out/transcript.txt  +  crv-out/MANIFEST.txt
> ```
> 
> Then drop the frames + `MANIFEST.txt` into Claude / ChatGPT / Gemini and ask away.
> 
> Not doing LLM work? It also works as a **general-purpose video keyframe extractor** —
> scene-change detection + dedup, no ML models to download.
> 
> **Using Claude Code?** Install it as a skill so Claude watches videos on its own:
> 
> ```bash
> pip install claude-real-video
> mkdir -p ~/.claude/skills && cp -r skills/claude-real-video ~/.claude/skills/
> ```
> 
> Then just paste a video link into Claude Code and ask about it.
> 
> **New in 0.3.0** — tell it *why* you're watching, and keep what it finds:
> 
> ```bash
> crv "https://youtu.be/..." --why "find the pricing strategy" --kb ~/notes
> ```
> 
> `--why` makes the analysis focus on what you care about instead of a generic summary;
> `--kb` saves the result as a dated note in your own notes folder, so it doesn't die in `crv-out`.
> 
> ---
> 
> ## Why not just sample frames?
> 
> Most "let an LLM watch a video" scripts (and Gemini's own pipeline) grab frames
> at a **fixed interval** — e.g. one per second. That over-samples a static
> screencast and under-samples a fast-cut reel. `claude-real-video` is smarter:
> 
> | | fixed-interval sampling | **claude-real-video** |
> |---|---|---|
> | Frame selection | every N seconds | **scene-change detection** + density floor |
> | Repeated shots (A-B-A cuts) | sent again every time | **sliding-window dedup** sends each shot once |
> | Static slide (10 min) | ~600 near-identical frames | **collapses to 1** (dedup) |
> | Fast-cut reel | misses frames between samples | catches each visual change |
> | Audio | often ignored | Whisper transcript w/ language detect |
> | Where the processing happens | often in someone's cloud | **on your machine** (you choose what to share with an LLM afterwards) |
> | Input | usually local file only | **URL (yt-dlp) or local file** |
> 
> You feed the model *fewer, more meaningful* frames — cheaper context, better
> understanding.
> 
> ---
> 
> ## Install
> 
> ```bash
> pip install claude-real-video              # core (frames + dedup)
> pip install "claude-real-video[whisper]"   # + audio transcription
> ```
> 
> ### System requirement: ffmpeg
> 
> `ffmpeg` / `ffprobe` are used for frame extraction and audio, and aren't
> pip-installable. Install them once:
> 
> | OS | command |
> |---|---|
> | **macOS** | `brew install ffmpeg` |
> | **Linux** | `sudo apt install ffmpeg` (or your distro's package manager) |
> | **Windows** | `winget install Gyan.FFmpeg` — or `choco install ffmpeg` — or [download a build](https://www.gyan.dev/ffmpeg/builds/) and add its `bin\` folder to your `PATH` |
> 
> Verify it's on your `PATH`:
> 
> ```bash
> ffmpeg -version
> ```
> 
> Transcription uses the `whisper` CLI (installed by the `[whisper]` extra, or
> `pip install openai-whisper`). Whisper also relies on ffmpeg.
> 
> Works on **macOS, Windows, and Linux** — Python 3.10+.
> 
> ---
> 
> ## Usage
> 
> ```bash
> # A YouTube / Instagram / TikTok / ... link
> crv "https://www.instagram.com/reel/XXXX/"
> 
> # A local file, English transcript, output to ./out
> crv lecture.mp4 -o out --lang en
> 
> # Frames only, no transcription
> crv clip.mp4 --no-transcribe
> 
> # A login-gated video (your own / authorised use): pass a Netscape cookie file
> crv "https://..." --cookies cookies.txt
> ```
> 
> `python -m claude_real_video ...` works as an alias for `crv` too.
> 
> ### Options
> 
> | flag | default | meaning |
> |---|---|---|
> | `-o, --out` | `crv-out` | output directory |
> | `--scene` | `0.30` | scene-change sensitivity (lower = more frames) |
> | `--fps-floor` | `1.0` | at least one frame every N seconds |
> | `--max-frames` | `150` | hard cap on total frames |
> | `--lang` | `auto` | Whisper language (`en`, `zh`, `auto`, ...) |
> | `--dedup-threshold` | `8` | % of pixels that must change for a frame to count as new; higher = fewer frames |
> | `--dedup-window` | `4` | compare against the last N kept frames — a shot the model already saw doesn't come back after a cutaway (`1` = consecutive-only) |
> | `--report` | off | keep dropped frames in `./dropped` + write `report.html` visualising every keep/drop decision |
> | `--no-transcribe` | off | skip audio |
> | `--keep-audio` | off | also save the **full soundtrack** (`audio.m4a`) so audio models can *hear* it |
> | `--why` | – | why you're watching, e.g. `--why "find the pricing strategy"` — written into `MANIFEST.txt` so the model analyses with that lens instead of a generic summary |
> | `--kb` | – | also save the analysis as a dated markdown note into this folder (your Obsidian vault, notes dir, ...) — so it joins your knowledge base instead of dying in `crv-out` |
> | `--cookies` | – | Netscape cookie file for login-gated sources |
> 
> ---
> 
> ### What `--grid` output looks like
> 
> One contact sheet = nine consecutive keyframes, in order, filenames on each cell — the model reads a sequence, not scattered stills:
> 
> ## Use it from Python
> 
> ```python
> from claude_real_video import process
> 
> r = process("https://youtu.be/...", "out", lang="en")
> print(r.frame_count, r.transcript_path)
> ```
> 
> ---
> 
> ## How it works
> 
> 1. **Fetch** — `yt-dlp` for URLs (optional cookies), or copy a local file.
> 2. **Extract** — one chronological `ffmpeg select` pass grabs every scene change
>    *plus* a density floor (at least one frame every `--fps-floor` seconds), so
>    fast cuts and slow screencasts are both covered.
> 3. **Dedup** — real pixel difference (downscaled RGB, not a perceptual hash — hashes
>    go blind on flat colours and equal-luma hue changes) against a **sliding window**
>    of the last `--dedup-window` kept frames, so an A-B-A cutaway doesn't re-send a
>    shot the model has already seen. `--report` writes `report.html` showing every
>    keep/drop decision with its diff %, for tuning.
> 4. **Text** — if the video **already has subtitles** (a sidecar `.srt`/`.vtt` next to a
>    local file, or an embedded subtitle track), those are used as the transcript —
>    faster and more accurate than re-transcribing. Only when there are no subtitles
>    does it fall back to **Whisper** on the audio (skipped cleanly if there's no audio).
> 5. **Audio** *(optional, `--keep-audio`)* — save the **full original soundtrack**
>    (`audio.m4a`: music + speech + effects, copied losslessly when possible). The
>    transcript only has the *words*; the audio file lets a model that can listen
>    (Gemini, GPT-4o, …) actually *hear* the music and tone.
> 6. **Manifest** — `MANIFEST.txt` summarises everything for the model.
> 
> So the model can **see** (key frames), **read** (transcript) and — with `--keep-audio` —
> **hear** (full soundtrack) the video. The transcript is plain text any model can read;
> the tool **doesn't burn subtitles into the video** — burning is a presentation choice,
> not something needed to make a video AI-readable.
> 
> ---
> 
> ## Notes
> 
> - Only download content you have the right to. The `--cookies` opti

## 延伸閱讀

相關概念：[[視頻處理]] · [[自然語言處理]] · [[機器學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

[GitHub](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻處理" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻處理","自然語言處理","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HUANGCHIHHUNGLeo--claude-real-video" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HUANGCHIHHUNGLeo" AND file.name != "HUANGCHIHHUNGLeo--claude-real-video"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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
> const me = dv.page("Repos/HUANGCHIHHUNGLeo--claude-real-video");
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

> **2026-07-04** — 首次收錄
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

- [[2026-07-06|2026-07-06]] — 再次上榜，1.0k stars
- [[2026-07-05|2026-07-05]] — 再次上榜，768 stars
- [[2026-07-04|2026-07-04]] — 首次收錄，569 stars
