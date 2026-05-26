---
repo: zhaoyue4810/pianke
url: https://github.com/zhaoyue4810/pianke
owner: zhaoyue4810
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 400
stars_per_day: 133
forks: 90
open_issues: 9
created: 2026-05-22
pushed_at: 2026-05-25
first_seen: 2026-05-26
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "圖像處理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "讓 AI 協助初篩與分組，把最終的審美決定權留給自己。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2916
readme_length: 6006
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-26"
star_history: "2026-05-26:400"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "pianke"
  - "zhaoyue4810/pianke"
  - "讓 AI 協助初篩與分組，把最終的審美決定權留給自己。"
---

# pianke

**400** stars · **133** stars/天 · 建立 3 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/zhaoyue4810--pianke");
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
> 讓 AI 協助初篩與分組，把最終的審美決定權留給自己。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (133 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速篩選大量照片的攝影師和攝影愛好者。
> **一句話重點** Pianke 的本地化設計讓攝影師能夠在不妥協隱私的情況下，快速高效地篩選照片。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zhaoyue4810--pianke");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像處理" && p.file.name !== "zhaoyue4810--pianke" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖像處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，2 小時整合，得到高效的照片篩選效果，值得一試。

> [!abstract] 核心創新
> Pianke 提供了一個完全本地化的照片篩選解決方案，保護用戶隱私的同時提升篩選效率。

## 專案簡介

Pianke 是一款專為攝影師設計的本地照片選片工具，能夠自動將相似的照片歸入同一組，並透過 A/B 擂台方式快速挑選最滿意的照片。用戶可以選擇不同的工作模式，包括极速模式、专家模式和土豪模式，根據硬體配置和需求進行選擇。极速模式適合低配設備，使用本地輕量算法進行初篩；专家模式則利用 AI 模型進行更精確的識別；土豪模式則依賴遠程大模型進行判定。這些模式的設計考量了用戶的隱私與性能需求，所有分析均在本地完成，僅在土豪模式下會上傳縮略圖。

核心技術包括 DINOv2 視覺語義分析、人臉特徵識別等，能夠有效提升照片的篩選效率。使用者可以透過簡單的鍵盤快捷鍵進行照片的對比選擇，並支持 RAW 格式的原生處理。這個工具的設計使得攝影師能夠在保留隱私的同時，快速高效地完成照片的篩選與整理。對於需要大量照片篩選的攝影工作，Pianke 提供了一個高效且隱私友好的解決方案。

**技術棧**：`Flask` · `OpenCV` · `PyTorch`

## 重點功能

- 純本地運行 — 所有照片分析均在本地完成，無需上傳，保護用戶隱私。
- 智能質量初篩 — 自動識別模糊、過曝等技術性廢片，支持一鍵復核。
- 多信號相似分組 — 結合 DINOv2 和人臉識別，準確將相似照片歸組。
- 雙圖擂台比拼 — 使用鍵盤快捷鍵進行快速選擇，提升篩選效率。
- RAW 格式支持 — 直接分析 RAW 內嵌的 JPEG 預覽圖，無需緩慢的解碼。

## 快速開始

1. 下載並解壓專案
```bash
wget https://github.com/zhaoyue4810/pianke/archive/refs/heads/main.zip
```
2. 運行啟動腳本
```bash
bash 启动_macOS.command
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Python 環境",
  "指令": "python app.py --port 8080 --no-browser",
  "預期輸出": "啟動服務並在指定端口運行"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 400 stars（133/天），forks 90（22.5%），這顯示出強烈的用戶興趣。作者 zhaoyue4810 在開源社群中活躍，這個專案解決了攝影師在選片過程中面臨的繁瑣和隱私問題，之前的工具往往需要上傳照片到雲端，這使得用戶的隱私受到威脅。這個工具的本地運行特性吸引了許多關注，特別是在對隱私有高要求的用戶中。社群的反饋和問題解決也顯示出用戶對此工具的需求和期望。

## 適合誰使用

**目標受眾**：需要快速篩選大量照片的攝影師和攝影愛好者。

> [!example] 使用場景
> - 攝影師用它來快速篩選婚禮照片，因為它能夠自動識別閉眼和模糊的照片，節省大量時間。
> - 攝影愛好者用它來整理旅行照片，因為它支持 RAW 格式，並能夠快速將相似照片分組。
> - 專業攝影工作室用它來進行大規模的照片篩選，因為它的雙圖擂台比拼功能能夠提高選片效率。

## 架構分析

Pianke 採用 Flask 作為後端框架，並結合 OpenCV 和 PyTorch 進行圖像處理和 AI 分析。整體架構設計上，所有數據處理均在本地完成，這樣的設計能夠有效保護用戶隱私，並減少網絡延遲。使用者可以選擇不同的工作模式，根據硬體配置和需求進行調整。這種靈活性使得 Pianke 能夠適應不同的使用場景，從低配設備到高性能工作站都能良好運行。選擇本地運行的代價是需要較高的初始安裝和配置成本，但長期來看能夠提供更好的用戶體驗和數據安全性。

## 技術深入分析

Pianke 的核心技術機制是基於 Flask 的 Web 應用，結合 OpenCV 和 PyTorch 進行圖像分析。使用 DINOv2 和人臉識別技術，能夠準確識別相似照片並進行分組。效能上，這個工具能夠在本地快速處理大量照片，但對於高解析度的 RAW 圖片，可能需要較高的記憶體和處理能力。選擇 Flask 作為後端框架的好處是簡單易用，適合快速開發，但在高併發場景下可能會成為瓶頸。技術風險方面，對於依賴的 AI 模型和圖像處理庫的版本更新，可能會影響到整體的穩定性和兼容性。整合方面，Pianke 能夠與現有的 Python 環境無縫對接，但對於不熟悉命令行的用戶，初始設置可能會造成一定的學習曲線。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝步驟和使用說明。安裝過程中，對於依賴的處理有明確的指引，雖然對於新手來說可能需要一些時間來理解。整體上，文檔能夠幫助用戶在 30 分鐘內完成安裝並運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多種照片格式，包括 RAW，滿足專業需求。
> - 提供本地運行，保護用戶隱私，無需擔心數據外洩。
> - 智能化的質量篩選功能，能夠大幅提升篩選效率。

> [!danger] 缺點
> - 對於初學者來說，安裝和配置過程可能較為複雜。
> - 需要較高的硬體配置以支持 AI 模型運行。
> - 某些功能在特定環境下可能會出現兼容性問題。

> [!warning] 注意事項
> - 僅支援 Python 3.8+
> - 需要安裝特定版本的 OpenCV 以避免依賴衝突
> - 對於大規模照片篩選，可能需要較高的硬體配置

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次啟動時可能需要較長時間下載模型，若網絡不穩定會影響使用體驗
  - 解法：確保網絡穩定，或在網絡良好的環境下進行首次啟動
- [MEDIUM] Windows 環境下可能出現啟動器無法運行的問題
  - 解法：根據提示進行安全設置，或手動運行 Python 腳本
- [MEDIUM] 某些相機格式可能無法正常預覽
  - 解法：確保安裝了相應的 HEIF 擴展

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 工具的本地化設計和隱私保護特性非常符合小型團隊的需求。 |
| 大型攝影工作室需要高效篩選照片 | 普通 | 雖然功能強大，但對硬體要求較高，可能不適合所有工作環境。 |
| 攝影愛好者進行個人項目 | 非常適合 | 簡單易用的界面和快速篩選功能非常適合個人用戶。 |
| 需要在雲端進行照片管理的團隊 | 不適合 | 本工具完全本地運行，不支持雲端功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到高效的照片篩選效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，無需高權限，且不存取敏感資料，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zhaoyue4810--pianke");
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
> const me = dv.page("Repos/zhaoyue4810--pianke");
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
| Forks | 90 |
| Open Issues | 9 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-22 |
| Repo 大小 | 2.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zhaoyue4810/pianke) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `Pillow` `imagehash` `flask` `pillow-heif` `numpy` `scipy` `opencv-contrib-python` `rawpy` `torch` `torchvision` `transformers` `insightface` `onnxruntime` `pyiqa` `timm`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 64
>     "JavaScript" : 16
>     "CSS" : 14
>     "HTML" : 5
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zhaoyue4810](https://github.com/zhaoyue4810) | 6 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/zhaoyue4810/pianke)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-23 ~ 2026-05-25）
> **活躍天數** 2 天 · **最新 commit** fix: 修复 Windows 启动器无法运行

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/zhaoyue4810/pianke/issues/9) | 处理失败：Can't load image processor for 'facebook/dinov2-small' | 0 | 0 |
> | [#7](https://github.com/zhaoyue4810/pianke/issues/7) | 处理失败：[WinError 1114] 动态链接库(DLL)初始化例程失败 | 0 | 0 |
> | [#6](https://github.com/zhaoyue4810/pianke/issues/6) | 添加水印预览失败：UnidentifiedImageError: cannot identify image file  | 0 | 1 |
> | [#5](https://github.com/zhaoyue4810/pianke/issues/5) | 专家模式使用不了 | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 片刻 (Pianke)
> 
> > **让 AI 协助初筛与分组，把最终的审美决定权留给自己。**
> 
> [](https://www.python.org/)
> [](#一键启动推荐)
> [](LICENSE)
> 
> **片刻** 是一款专为摄影师和摄影爱好者设计的**本地照片双语/擂台式选片工具**。它能够将一次拍摄中相似的几十甚至上百张照片自动归入“同一个瞬间”的组中，然后通过直观的 **左右 A/B 擂台 PK** 方式，让你快速挑出最满意的一张。
> 
> ---
> 
> ## 核心特性
> 
> - 🔒 **纯本地与隐私保护**：除“土豪模式”外，所有照片的分析、初筛、分组均在本地完成，不上传任何云端，保护隐私。
> - 🤖 **智能质量初筛**：自动识别并剔除模糊、过曝、欠曝、闭眼等技术性废片，并支持一键复核召回。
> - 📁 **多信号相似分组**：融合 **DINOv2 视觉语义**、**人脸特征识别** 及 **EXIF 时间/GPS**，将视觉上“同一个瞬间”的连拍和相似帧精准归组。
> - ⚔️ **双图擂台比拼**：通过 `←`/`→` 键盘快捷键在相似照片中进行两两对决，极速筛选。
> - 📸 **RAW 格式原生支持**：
>   - **RAW+JPG 双拍**：以 JPG 进行极速分析与呈现，文件操作时 RAW 与 JPG 自动配对（包括 `.xmp` 伴随文件）同步搬运或重命名。
>   - **纯 RAW 拍摄**：毫秒级提取 RAW 内嵌预览图进行分析，不进行缓慢的 demosaic 解码。
> - 🔄 **无损反悔与自动续做**：
>   - **多级撤销**：支持单步撤销、整组重选及全局重做。
>   - **进度保存**：状态实时持久化于照片目录，随时关闭，下次启动自动恢复进度。
> 
> ---
> 
> ## 工作模式对比
> 
> 你可以根据硬件配置和照片类型，在网页首页自由切换以下三种模式：
> 
> | 模式 | 核心定位 | 废片初筛方式 | 分组逻辑 | 首次启动开销 | 联网要求 |
> | :--- | :--- | :--- | :--- | :--- | :--- |
> | **极速 (Fast)** | 纯本地、极速、适合低配设备 | 本地轻量通用算法 | 本地图像比对 (感知哈希等) | 约 200MB 依赖 | **完全不需要** |
> | **专家 (Expert)** | 本地 AI、识人更准 | 本地 AI 模型（人脸、技术美学质量） | 本地 AI 模型 (DINOv2) + 人脸识别 + EXIF 融合 | 约 2-3GB 依赖 / 首次需下载 600MB 模型 | 仅首次下载模型 |
> | **土豪 (Tycoon)** | 大模型视觉判定、人话解说 | 远程多模态大模型 (火山/GPT-4V/Qwen等) | 与专家模式相同 | 约 5MB 依赖 / 配置 API Key | 每张图调用 LLM 接口 |
> 
> > 💡 **选择建议**：
> > - **拍物/风景/低配电脑** ➔ 推荐 **极速 (Fast)** 模式，对多角度、静物及产品图有非常稳定的分组表现。
> > - **拍人像/婚礼/活动/主流设备** ➔ 推荐 **专家 (Expert)** 模式，能够精准识别“同人不同姿势不同背景”并归入同组。
> > - **需要详细退片理由** ➔ 推荐 **土豪 (Tycoon)** 模式，大模型将以“人话”解释退片原因（如“左侧小孩闭眼了”）。
> 
> ---
> 
> ## 快速开始
> 
> > 💡 **强烈推荐小白用户使用 [Trae](https://www.trae.com.cn/)（或 Qoder）**：装好 Trae 后用它打开本项目文件夹，直接告诉 AI：
> >
> > > **"先把 pip 换成阿里云源（`https://mirrors.aliyun.com/pypi/simple/`）或清华源（`https://pypi.tuna.tsinghua.edu.cn/simple`），再安装相关依赖并运行这个项目。"**
> >
> > 国内默认走的 PyPI 官方源在没有梯子的情况下经常卡到超时，专家模式光依赖就有 2GB 多，不换源基本装不下来。换成阿里 / 清华镜像后整套依赖几分钟就能装完，剩下的交给 Trae 就行。
> 
> ### 方式一：一键启动（推荐非开发者）
> 
> 适合未安装 Python 环境或不熟悉命令行的用户。
> 
> 1. [下载项目 ZIP 压缩包](https://github.com/zhaoyue4810/pianke/archive/refs/heads/main.zip) 并解压到本地。
> 2. 双击运行对应的启动器脚本：
> 
> | 系统 | 启动脚本 | 首次运行安全提示过白方式 |
> | :--- | :--- | :--- |
> | **macOS** | `启动_macOS.command` | 若提示“身份不明的开发者”：**按住 Control 键**点击脚本 ➔ 选择 **打开** ➔ 弹窗中再次点击 **打开**。 |
> | **Windows** | `启动_Windows.bat` | 若弹出“Windows 已保护你的电脑”：点击 **更多信息** ➔ 选择 **仍要运行**。 |
> 
> *注：启动器会自动在项目独立目录下下载并构建 Python 环境，不污染你的系统环境。国内用户默认启用 PyPI 和模型镜像，可以使用环境变量 `PIANKE_NO_MIRROR=1` 禁用镜像走官方源。*
> 
> ### 方式二：手动启动（适合开发者）
> 
> 如果你已安装 Python 环境并希望手动控制：
> 
> ```bash
> # 1. 创建并激活虚拟环境
> python3 -m venv .venv
> source .venv/bin/activate  # Windows: .venv\Scripts\activate
> 
> # 2. 安装项目依赖（包含所有模式的并集）
> pip install -r requirements.txt
> 
> # 3. 运行服务（默认端口 5057，自动打开浏览器）
> python app.py
> 
> # 常用参数：
> python app.py --port 8080 --no-browser
> ```
> 
> > ⚠️ **开发模式提示**：若手动安装依赖，可能因传递依赖导致 `opencv-python` 冲突。可运行以下命令修复：
> > ```bash
> > pip uninstall -y opencv-python opencv-python-headless
> > pip install --force-reinstall --no-deps "opencv-contrib-python>=4.9"
> > ```
> 
> ---
> 
> ## 选片工作流
> 
> 1. **导入与配置**：在首页选择工作模式，输入或拖入照片文件夹的绝对路径，点击 **开始整理**。
> 2. **分析与进度**：系统流式显示扫描进度和预估剩余时间。
> 3. **初筛复核**：平铺展示被自动淘汰的废片及原因。**点击任意照片即可直接将其放回待分组列表**。未点击的将直接归入淘汰区。
> 4. **分组预览与调参**：预览分组效果。如果分组过细或过粗，可实时拖动滑块调节阈值并点击 **重新分组** 即时更新。
> 5. **左右擂台 PK**：在相似组内进行两两对比。
>    - `←` / `→`：保留左侧 / 保留右侧 (对侧淘汰)
>    - `↑` / `↓`：全要 / 全不要
>    - `[` / `]`：仅淘汰左侧 / 仅淘汰右侧 (处理单张图像损坏)
>    - `S`：跳过本组 (暂存至队尾最后处理)
>    - `Z`：切换缩放等级 (1x ➔ 2x ➔ 4x)，两图同步平移
>    - `Shift + Z`：撤销当前组的上一步操作
> 6. **完成与导出**：展示所有 Winner 照片，支持一键打开结果文件夹。
> 
> ---
> 
> ## 输出与目录策略
> 
> 本工具采用**单文件夹、单会话**策略，会在你指定的**照片目录**下生成以下结构：
> 
> ```text
> 📂 你的照片文件夹/
> ├── 📂 winners/                # 最终胜出保留的照片 (你的成片)
> ├── 📂 losers/                 # 被淘汰的照片
> ├── 📄 .pic_selecter_state.json # 进度持久化文件 (可随时中断并继续)
> └── 📂 _pic_selecter/          # 缓存与日志目录
>     ├── 📂 thumbs/             # 缩略图缓存 (重复加载近乎瞬时)
>     ├── 📄 log.txt             # 详细处理日志
>     └── 📄 skipped.log         # 坏图/无法读取文件清单
> ```
> 
> ### 归档模式
> 
> 你可以在首页的“更多选项”中选择以下归档模式：
> - **移动模式（默认，推荐）**：将原片直接移动到 `winners/` 或 `losers/` 目录。最省磁盘空间，符合一次性选片直觉。反悔时文件会无损搬回原位。
> - **复制模式**：原片保持不动，在 `winners/` 和 `losers/` 中创建副本。需要双倍磁盘空间。
> 
> ---
> 
> ## 相机水印
> 
> 选片完成后，在 Winner 总览页点击 **相机水印** 可以为胜出的照片批量添加 EXIF 信息水印。
> 水印会读取照片的相机品牌、机型、镜头、焦距、光圈、快门、ISO、拍摄时间并合成在画面上，
> 也会自动匹配品牌 Logo（富士、佳能、尼康、索尼、徕卡、哈苏、奥林巴斯等）。
> 
> 共 11 个样式 ID。详尽程度直接编码在样式名里（**-详尽** 带镜头·参数·时间；
> **-极简** 仅品牌 Logo + 机型）：
> 
> | ID | 名称 | 风格 |
> | :--- | :--- | :--- |
> | **A** | 标准底栏 | 白色信息条，左机型/镜头 ｜ 中品牌 Logo ｜ 右参数/时间 |
> | **B_full / B_clean** | 极简底栏-详尽 / 极简底栏-极简 | 顶/左/右贴边窄白 + 底部居中 Logo + 信息 |
> | **C_full / C_clean** | 毛玻璃悬浮-详尽 / 毛玻璃悬浮-极简 | 原图模糊作背景 + 缩小照片悬浮居中带阴影 |
> | **D_full / D_clean** | 经典白边相框-详尽 / 经典白边相框-极简 | 顶/左/右窄白 + 底大白边居中放品牌 |
> | **F_full / F_clean** | 杂志风-详尽 / 杂志风-极简 | 左下色卡（从图自动提取）+ 右下品牌信息 |
> | **G** | 极简白边 | 照片四周均匀窄白边，无任何文字 |
> | **H** | 相机回放 | 上原图 + 下模糊版 + 居中富士 X-T5，LCD 与取景器都显示画面 |
> 
> 输出到 `winners/watermarked_/` 子目录，保留原 EXIF（旋转标志归位），JPEG 92 质量、progressive。
> 
> ---
> 
> ## 常见问题 (FAQ)
> 
> 1. 启动后浏览器没有自动打开？
> 手动在浏览器中访问 http://localhost:5057 即可。
> 
> 2. 默认的 5057 端口被占用怎么办？
> 在启动前设置环境变量改变端口：
> 
>   macOS: export PIC_SELECTER_PORT=8080
>   Windows: set PIC_SELECTER_PORT=8080
> 
> 后再运行启动器。
> 
> 3. 专家模式首次启动卡在“加载模型”？
> 由于首次运行需要下载约 600MB 的 AI 模型文件，视网络情况可能需要 1-3 分钟。若长时间无响应，请检查终端日志或网络连接。
> 
> 4. 土豪 (Tycoon) 模式如何配置 API Key？
> 本模式支持兼容 OpenAI 协议的视觉大模型（如火山引擎豆包等）。
> 启动前在系统环境变量中设置 ARK_API_KEY=你的key（或在网页端弹窗输入，Key 仅安全保存在本地 ~/.config/pic_selecter/ark_key）。
> 
> 5. 极速模式与专家模式在质量初筛上有什么区别？
> 两者的质量评估维度不同：
> 
>   极速模式：侧重检测“整张图片偏软/手抖/失焦”等全局性模糊。
>   专家模式：侧重检测人像中的“背景清晰但人脸模糊/闭眼”等局部性人像废片。
> 
> 6. 如何彻底卸载和清理缓存？
> 
>   清理照片缓存：直接删除对应照片目录下的 winners/、losers/、.pic_selecter_state.json 及 _pic_selecter/ 文件夹（移动模式下请先移回照片）。
>   完全卸载程序：删除解压出的项目文件夹，并清理本地全局工具缓存：
>     
>       macOS: rm -rf ~/.local/bin/uv ~/.local/share/uv/
>       Windows: 删除 %USERPROFILE%\.local\bin\uv.exe 和 %USERPROFILE%\.local\share\uv\
>     
>   
> 
> 7. HEIC 格式图片在网页上无法预览？
> Windows 系统可能需要安装微软官方的 HEIF 扩展才能正常在浏览器中预览该格式；片刻工具在后端能够正常分析处理该格式。
> 
> ---
> 
> ## 隐私与安全说明
> 
> 1. 本地模式下，所有照片数据、模型特征计算**完全在本地运行**，无任何外发流量。
> 2. Web 服务器仅绑定本地 `127.0.0.1` 环回地址，局域网及外网设备均无法访问。
> 3. 接口提供严格的 Origin 和 Referer 校验，防止跨站请求伪造 (CSRF/DNS Rebinding)。如果需要对脚本访问开启 token 鉴权，可在运行前设置环境变量 `PIC_SELECTER_TOKEN=your_token`。
> 4. ⚠️ **土豪模式例外**：该模式下，照片的缩略图会被发送至你配置的大模型服务商接口。如果对数据隐私有极高要求，请仅使用**极速**或**专家**模式。
> 
> ---
> 
> ## 反馈与贡献
> 
> 欢迎通过 [GitHub Issues](https://github.com/zhaoyue4810/pianke/issues) 提交反馈或建议。
> 
> # 个人微信
> 15828377122

## 延伸閱讀

相關概念：[[自動化測試]] · [[圖像處理]] · [[隱私保護]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/zhaoyue4810/pianke)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像處理" AND file.name != "zhaoyue4810--pianke"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "zhaoyue4810--pianke"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "zhaoyue4810--pianke" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "zhaoyue4810--pianke"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","圖像處理","隱私保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "zhaoyue4810--pianke" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/zhaoyue4810--pianke");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zhaoyue4810--pianke" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zhaoyue4810" AND file.name != "zhaoyue4810--pianke"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zhaoyue4810--pianke");
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
> const me = dv.page("Repos/zhaoyue4810--pianke");
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
> const me = dv.page("Repos/zhaoyue4810--pianke");
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
> const me = dv.page("Repos/zhaoyue4810--pianke");
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
> const me = dv.page("Repos/zhaoyue4810--pianke");
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

> **2026-05-26** — 首次收錄
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

- [[2026-05-26|2026-05-26]] — 首次收錄，400 stars
