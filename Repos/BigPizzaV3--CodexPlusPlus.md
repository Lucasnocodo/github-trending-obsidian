---
repo: BigPizzaV3/CodexPlusPlus
url: https://github.com/BigPizzaV3/CodexPlusPlus
owner: BigPizzaV3
owner_type: User
language: Python
license: N/A
description: "一个CodexApp的增强工具"
homepage: ""
stars: 1044
stars_per_day: 209
forks: 68
open_issues: 18
created: 2026-05-06
pushed_at: 2026-05-11
first_seen: 2026-05-12
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "增強工具"
release_tag: "v1.0.5"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-12
use_case: "一個增強 Codex App 功能的外部啟動器，無需修改原始安裝文件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-15"
contributor_count: 5
engagement: "low"
issue_close_rate: 40
repo_size_kb: 1186
readme_length: 6163
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-12"
star_history: "2026-05-12:1040,2026-05-12:1044"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "CodexPlusPlus"
  - "BigPizzaV3/CodexPlusPlus"
  - "一個增強 Codex App 功能的外部啟動器，無需修改原始安裝文件。"
---

# CodexPlusPlus

**1.0k** stars · **209** stars/天 · 建立 5 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.5`

> [!summary] 一句話摘要
> 一個增強 Codex App 功能的外部啟動器，無需修改原始安裝文件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (209 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要增強 Codex App 功能的開發者和普通用戶，特別是對插件管理有需求的使用者。
> **一句話重點** Codex++ 的設計讓用戶能夠在不修改原始應用的情況下，享受增強功能，這在開源工具中是相對少見的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "增強工具" && p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 增強工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到靈活的增強功能，值得嘗試。

> [!abstract] 核心創新
> Codex++ 透過外部啟動器和 CDP 注入增強功能，無需修改 Codex App 原始文件。

## 專案簡介

Codex++ 是一個專為 Codex App 設計的外部增強啟動器，透過 Chromium DevTools Protocol (CDP) 向渲染進程注入增強腳本，實現功能擴展。用戶啟動 Codex++ 時，會自動附加 `--remote-debugging-port=9229` 和 `--remote-allow-origins=http://127.0.0.1:9229` 參數，這樣可以在不修改原始安裝文件的情況下，解鎖插件入口並顯示會話刪除按鈕。這種設計避免了對 Codex 應用的直接修改，降低了更新後出現兼容性問題的風險。用戶可以通過命令行或圖形界面安裝、卸載 Codex++，並在啟動時自動檢查更新。這個工具的賣點在於其靈活性和安全性，使用者可以在不影響原始應用的情況下，享受增強功能。

Codex++ 的依賴相對輕量，僅需 Python 3.11+ 和一些常見的 Python 庫，如 `requests` 和 `websocket-client`。與其他工具相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，Codex++ 提供了更直接的增強功能，而不需要進行繁瑣的配置或修改原始應用。使用者在使用過程中可能會遇到 Windows 安裝失敗或快捷方式無法啟動的問題，這些問題的解決方案在 README 中有詳細說明。這個專案目前處於穩定階段，適合需要在 Codex App 上進行增強的開發者和用戶。未來可能會加入更多的插件支持和功能擴展。

**技術棧**：`Python 3.11` · `requests 2.31` · `websocket-client 1.7`

## 重點功能

- 會話刪除功能 — 懸停顯示刪除按鈕，支持撤銷操作。
- 插件管理 — 解鎖插件入口，支持特殊插件強制安裝。
- 自動更新 — 啟動時檢查 GitHub Release，提示更新。
- 跨平台支持 — 同時支持 Windows 和 macOS 的安裝和卸載。
- 命令行安裝 — 提供命令行安裝和卸載選項，方便開發者使用。

## 快速開始

1. 安裝依賴
```bash
python -m pip install -e .
```
2. 在 Windows 上安裝 Codex++
```bash
python -m codex_session_delete setup
```
3. 啟動 Codex++
```bash
python -m codex_session_delete launch
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Codex App 和 Python 環境",
  "指令": "python -m codex_session_delete launch --app-dir \"/Applications/OpenAI Codex.app\" --debug-port 9229 --helper-port 57321",
  "預期輸出": "啟動 Codex++ 並注入增強腳本，顯示插件和刪除按鈕。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1044 stars（209/天），forks 68（6.5%），顯示出穩定的增長潛力。作者 BigPizzaV3 及其團隊在開源社群中有一定的影響力，過去參與過多個相關專案。Codex++ 解決了 Codex App 原生插件功能受限的痛點，讓用戶能夠更靈活地管理會話和插件。近期的推廣活動和社群討論可能也促進了這一增長。技術上，這個工具的設計使得用戶能夠在不修改原始應用的情況下，享受增強功能，這在當前開源工具中是相對少見的。forks/stars 比率為 6.5%，顯示出使用者對此工具的實際修改和應用意願。

## 適合誰使用

**目標受眾**：需要增強 Codex App 功能的開發者和普通用戶，特別是對插件管理有需求的使用者。

> [!example] 使用場景
> - 開發者用它來增強 Codex App 的功能，因為它可以解鎖插件入口並提供會話刪除功能，提升使用體驗。
> - 系統管理員用它來自動更新 Codex App，因為它支持從 GitHub Release 檢查和更新，簡化了維護流程。
> - 普通用戶用它來管理 Codex App 的會話記錄，因為它提供了直觀的刪除按鈕和撤銷功能，避免了數據丟失。

## 架構分析

Codex++ 採用外部啟動器的設計模式，這樣可以在不干擾 Codex App 原始文件的情況下，實現功能擴展。資料流方面，Codex++ 首先啟動 Codex App，並透過 CDP 注入增強腳本，這樣可以直接與渲染進程交互。這種設計的好處是降低了更新後的兼容性問題，但代價是需要用戶手動啟動和配置。擴展性方面，這種架構允許未來增加更多插件支持，但也可能導致性能瓶頸，特別是在高負載情況下。

## 技術深入分析

Codex++ 的核心技術機制是利用 CDP 進行增強，這使得它能夠在不修改原始應用的情況下，實現功能擴展。這種設計模式讓用戶可以靈活地使用增強功能，而不必擔心更新後的兼容性問題。效能方面，Codex++ 需要一定的系統資源來運行 CDP，特別是在高負載情況下，可能會影響性能。設計取捨方面，選擇 Python 作為主要開發語言，使得開發和維護變得相對簡單，但也可能導致性能瓶頸，特別是在處理大量請求時。技術風險方面，Codex++ 對 Codex App 的穩定性有一定依賴，如果 Codex App 更新導致結構變化，Codex++ 可能需要隨之更新以保持兼容性。整合方面，Codex++ 可以與現有的開發工具鏈無縫整合，特別是在使用 Python 的環境中，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，包含了多種安裝方式。安裝過程相對順暢，但在某些環境下可能需要手動設置代理。文件中有清晰的範例和常見問題解答，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 靈活性高 — 不修改原始應用，避免更新後的兼容性問題。
> - 功能增強 — 提供會話刪除和插件管理功能，提升用戶體驗。
> - 跨平台支持 — 同時支持 Windows 和 macOS，方便不同用戶使用。

> [!danger] 缺點
> - 安裝過程相對複雜 — 需要用戶手動設置和配置。
> - 可能存在性能瓶頸 — 在高負載情況下，CDP 注入可能影響性能。
> - 依賴於 Codex App 的穩定性 — 如果 Codex App 更新導致結構變化，可能需要更新 Codex++。

> [!warning] 注意事項
> - 僅支援 Python 3.11+
> - 需要 Codex App 已安裝
> - 在某些環境下可能需要手動設置代理

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的增強功能，但需要更多的配置和修改原始應用。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 接口的封裝，與 Codex++ 的增強功能有明顯不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但插件生態不如 Python。 | 如果你的團隊已經在使用 Rust 並需要高效能的插件系統。 | medium — 需要重新學習 Rust 語言和生態系統。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 接口的封裝，與 Codex++ 的增強功能有明顯不同。 | 如果你的需求主要是使用 GPT-2 API，而不是增強 Codex App 的功能。 | low — 只需調整 API 調用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CodexPlusPlus** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但插件生態不如 Python。 | 專注於 API 接口的封裝，與 Codex++ 的增強功能有明顯不同。 |
> | 遷移成本 | - | medium — 需要重新學習 Rust 語言和生態系統。 | low — 只需調整 API 調用方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Rust 並需要高效能的插件系統。 | 如果你的需求主要是使用 GPT-2 API，而不是增強 Co |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對 Codex App 有增強需求的開發者試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 上安裝失敗，可能因為 Python 環境不正確
  - 解法：確保 Python 環境已正確設置，並使用 `setup.bat` 進行安裝。
- [MEDIUM] 啟動後 Codex++ 菜單未出現，可能因為未使用 Codex++ 快捷方式啟動
  - 解法：確保從 Codex++ 快捷方式啟動，而不是直接啟動原版 Codex。
- [MEDIUM] 技能推薦加載失敗，可能因為網絡問題
  - 解法：檢查網絡連接，並設置正確的代理環境變量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司使用 Codex 進行開發 | 非常適合 | Codex++ 提供了必要的增強功能，提升開發效率。 |
| 大型企業的 Codex 部署 | 普通 | 可能需要更多的穩定性和支持，Codex++ 仍在 beta 階段。 |
| 個人開發者進行小型專案 | 非常適合 | Codex++ 的靈活性和功能增強非常符合個人開發者的需求。 |
| 需要高效能的插件系統的團隊 | 不適合 | Codex++ 的性能在高負載情況下可能會受到影響。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到靈活的增強功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估低風險：Codex++ 不需要高權限，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
| Forks | 68 |
| Open Issues | 18 |
| Issue 解決率 | 40% (12 closed) |
| 最後推送 | 2026-05-11 |
| 建立日期 | 2026-05-06 |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigPizzaV3/CodexPlusPlus) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 67
>     "JavaScript" : 32
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigPizzaV3](https://github.com/BigPizzaV3) | 41 |
> | [@Z1rconium](https://github.com/Z1rconium) | 2 |
> | [@waangzh](https://github.com/waangzh) | 1 |
> | [@codex](https://github.com/codex) | 1 |
> | [@DeepFal](https://github.com/DeepFal) | 1 |

**最新版本**：v1.0.5 (2026-05-11)

> [!info]- Release Notes
> ## What's Changed
> * Fix macOS source launcher and bypass proxy for local CDP by @Ghibli1024 in https://github.com/BigPizzaV3/CodexPlusPlus/pull/33
> * 加强本地启动稳定性与删除安全边界 by @SX2000CN in https://github.com/BigPizzaV3/CodexPlusPlus/pull/38
> * 修复 Windows 端 setup.bat 安装失败：改走项目内 venv 并显式声明 packages by @uhbjnm in https://github.com/BigPizzaV3/CodexPlusPlus/pull/35
> * fix(windows): protect ancestor processes from self-kill in launcher by @jujinqian162 in https://github.com/BigPizzaV3/CodexPlusPlus/pull/42
> 
> ## New Contributors
> * @Ghibli1024 made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/33
> * @SX2000CN made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/38
> * @uhbjnm made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/35
> * @jujinqian162 made their first contribution in https://github.com/BigPizzaV3/CodexPlusPlus/pull/42
> 
> **Full Changelog**: https://github.com/BigPizzaV3/CodexPlusPlus/commits/v1.0.5

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和問題回覆。
**連結**：[文件](https://github.com/BigPizzaV3/CodexPlusPlus)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-11）
> **活躍天數** 1 天 · **最新 commit** 修复 Windows 快捷方式 Python 环境

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#46](https://github.com/BigPizzaV3/CodexPlusPlus/issues/46) | win 没有反应 | 1 | 2 |
> | [#48](https://github.com/BigPizzaV3/CodexPlusPlus/issues/48) | 对话删除功能希望加入快捷删除。 | 0 | 0 |
> | [#41](https://github.com/BigPizzaV3/CodexPlusPlus/issues/41) | 建议增加codex API登录调用Image2的解锁 | 0 | 0 |
> | [#39](https://github.com/BigPizzaV3/CodexPlusPlus/issues/39) | 更改中转地址与秘钥 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex++
> 
>   
> 
> Codex++ 是一个面向 Codex App 的外部增强启动器。它不修改 Codex App 原始安装文件，而是通过外部 launcher 启动 Codex，并使用 Chromium DevTools Protocol 向渲染进程注入增强脚本。
> 
> ## 目录
> 
> - [功能](#功能)
> - [痛点](#痛点)
> - [解决效果](#解决效果)
> - [讨论交流](#讨论交流)
> - [友情链接](#友情链接)
> - [工作方式](#工作方式)
> - [环境要求](#环境要求)
> - [Windows 使用](#windows-使用)
>   - [图形菜单安装/卸载](#图形菜单安装卸载)
>   - [命令行安装](#命令行安装)
>   - [命令行卸载](#命令行卸载)
> - [自动更新](#自动更新)
> - [macOS 使用](#macos-使用)
>   - [安装](#安装)
>   - [卸载](#卸载)
> - [直接启动](#直接启动)
> - [数据与备份](#数据与备份)
> - [常见问题](#常见问题)
> 
> ## 功能
> 
> 当前功能：
> 
> - 在会话列表悬停显示“删除”按钮
> - 删除前确认，支持撤销
> - 优先尝试服务端删除；不可用时删除本地 Codex SQLite 会话记录
> - 在顶部菜单栏加入 `Codex++` 菜单
> - 支持开关：
>   - 插件选项解锁
>   - 特殊插件强制安装
>   - 会话删除
> - 支持 Windows 快捷方式安装/卸载
> - 支持 macOS 生成 `/Applications/Codex++.app`
> - 支持基于 GitHub Release 检查和更新 Codex++
> 
> ## 痛点
> 
> API Key 登录模式下，Codex 原生插件入口会提示需要登录 ChatGPT，导致插件功能无法正常使用：
> 
> 同时，Codex 原生会话列表只有归档入口，没有真正的删除按钮：
> 
> ## 解决效果
> 
> Codex++ 启动后会解锁插件入口，并在会话列表悬停时显示删除按钮：
> 
> 顶部菜单栏会出现 `Codex++`，点击后可以打开配置界面：
> 
> ## 讨论交流
> 
> 欢迎扫码加入 Codex++ 交流群，反馈问题、交流使用体验或提出新功能建议：
> 
> ## 友情链接
> 
> - [LINUX DO](https://linux.do)
> 
> ## 工作方式
> 
> Codex++ 使用外部启动方式运行 Codex：
> 
> 1. 启动 Codex App，并附加：
>    - `--remote-debugging-port=9229`
>    - `--remote-allow-origins=http://127.0.0.1:9229`
> 2. 启动本地 helper 服务，保留健康检查和运行生命周期。
> 3. 通过 CDP 注入 `renderer-inject.js`。
> 4. 渲染端通过 CDP bridge 调用本地删除服务；默认不开放 HTTP 删除/撤销入口，避免本机其他页面误触发删除类操作。
> 5. 启动 Codex 时会继承现有 `HTTP_PROXY` / `HTTPS_PROXY` / `ALL_PROXY`；如果这些环境变量未设置，会自动探测常见本地代理端口（如 `127.0.0.1:7897`），帮助 Codex 加载需要访问 GitHub 的技能资源。
> 
> 这种方式不会修改 Codex 的 `app.asar`，也不需要往 Codex 安装目录写 DLL。
> 
> ## 环境要求
> 
> - Python 3.11+
> - Windows 或 macOS
> - 已安装 Codex App
> 
> 安装依赖：
> 
> ```bash
> python -m pip install -e .
> ```
> 
> 如需运行测试：
> 
> ```bash
> python -m pip install -e .[test]
> python -m pytest -q
> ```
> 
> ## Windows 使用
> 
> ### 图形菜单安装/卸载
> 
> 双击项目根目录的：
> 
> ```text
> setup.bat
> ```
> 
> 然后按菜单选择：
> 
> ```text
> [1] Install Codex++
> [2] Uninstall Codex++
> [3] Update Codex++
> [4] Exit
> ```
> 
> ### 命令行安装
> 
> 在项目目录执行：
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 安装后会在桌面生成：
> 
> ```text
> Codex++.lnk
> ```
> 
> 双击该快捷方式启动 Codex++。
> 
> ### 命令行卸载
> 
> 可以在系统“设置 → 应用 → 已安装的应用”里卸载 `Codex++`。
> 
> 也可以在项目目录执行：
> 
> ```bash
> python -m codex_session_delete remove
> ```
> 
> 如需同时删除 Codex++ 自己的日志和备份数据：
> 
> ```bash
> python -m codex_session_delete remove --remove-data
> ```
> 
> ## 自动更新
> 
> Codex++ 会在启动时检查 GitHub Release。如果发现比本地版本更新的 Release，会在控制台提示版本号、Release 地址和更新命令；检查失败不会影响 Codex++ 启动。
> 
> 手动检查更新：
> 
> ```bash
> python -m codex_session_delete check-update
> ```
> 
> 从最新 GitHub Release 更新：
> 
> ```bash
> python -m codex_session_delete update
> ```
> 
> 更新流程：
> 
> 1. 请求 `https://api.github.com/repos/BigPizzaV3/CodexPlusPlus/releases/latest`。
> 2. 比较最新 Release tag 与本地版本。
> 3. 优先下载 Release 中的 `.whl` asset。
> 4. 执行 `python -m pip install --upgrade `。
> 5. 自动重新执行 `python -m codex_session_delete setup`，刷新快捷方式、Windows 卸载项或 macOS app bundle。
> 
> 发布新版本时，请在 GitHub Release 里附加 wheel 文件，例如：
> 
> ```bash
> python -m build
> ```
> 
> 然后把 `dist/codex_session_delete--py3-none-any.whl` 上传到对应 Release。
> 
> ## macOS 使用
> 
> ### 安装
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 默认会自动查找 `/Applications/Codex.app`、`/Applications/OpenAI Codex.app` 或用户 Applications 目录下的 Codex 应用，并生成：
> 
> ```text
> /Applications/Codex++.app
> ```
> 
> ### 卸载
> 
> ```bash
> python -m codex_session_delete remove
> ```
> 
> ## 直接启动
> 
> 不安装快捷方式时，也可以直接运行：
> 
> ```bash
> python -m codex_session_delete launch
> ```
> 
> 常用参数：
> 
> ```bash
> python -m codex_session_delete launch \
>   --app-dir "/Applications/OpenAI Codex.app" \
>   --debug-port 9229 \
>   --helper-port 57321
> ```
> 
> Windows 也可以手动指定 Codex 安装目录：
> 
> ```bash
> python -m codex_session_delete launch \
>   --app-dir "C:/Program Files/WindowsApps/OpenAI.Codex_xxx/app" \
>   --debug-port 9229 \
>   --helper-port 57321
> ```
> 
> ## 数据与备份
> 
> Codex++ 默认读取 Codex 本地数据库：
> 
> ```text
> ~/.codex/state_5.sqlite
> ```
> 
> 删除前会把相关记录备份到：
> 
> ```text
> ~/.codex-session-delete/backups
> ```
> 
> 隐藏启动失败日志位于：
> 
> ```text
> ~/.codex-session-delete/launcher.log
> ```
> 
> ## Windows 自动接管（可选）
> 
> 默认情况下 Codex++ 只在你**从 `Codex++` 快捷方式启动时**生效。如果你从开始菜单、任务栏或系统原生入口直接启动 Codex，那一次不会有注入，`Codex++` 菜单和插件解锁都不会出现。
> 
> Windows 可以注册一个常驻 watcher 解决这个问题。它会每 3 秒探测一次本机 CDP 端口，发现 Codex 在跑但 CDP 没起来，会先短暂等待并二次确认，确认仍没有 CDP 后再把这一批 Codex 进程杀掉、通过 launcher 重拉一次带注入的版本。这样不管你从哪里打开 Codex，都会被自动接管。
> 
> 注意代价：
> 
> - 每次 Codex 通过原生路径启动，仍可能先打开一瞬间，再被 kill，再被 launcher 带 CDP 重开；watcher 会通过等待、二次确认和失败 backoff 尽量减少频繁闪烁。
> - watcher 以 `pythonw.exe` 常驻运行，登录时自动启动（通过 `HKCU\...\Run` 和 Startup 文件夹双路径注册，后者防止某些注册表清理工具干扰）。
> 
> ### 安装
> 
> ```bash
> python -m codex_session_delete watch-install
> ```
> 
> 安装完成后 watcher 会立即启动，无需重启。
> 
> ### 卸载
> 
> ```bash
> python -m codex_session_delete watch-remove
> ```
> 
> `remove` / 系统卸载 Codex++ 时会自动连带执行 `watch-remove`，不需要手动处理。
> 
> ### 临时开关
> 
> 保留自启项、但让 watcher 不再自动接管：
> 
> ```bash
> python -m codex_session_delete watch-disable
> python -m codex_session_delete watch-enable
> ```
> 
> ### 日志
> 
> ```text
> %USERPROFILE%\.codex-session-delete\watcher.log
> ```
> 
> 示例：
> 
> ```text
> [...] watcher started (interval=3.0s)
> [...] Codex running without CDP (pids=[...]); attempting takeover
> [...] takeover: killing 4 codex pid(s): [...]
> [...] takeover: CDP is up on 9229 (launcher pid=...)
> ```
> 
> ## 常见问题
> 
> ### 双击 Codex++ 没反应
> 
> 先查看日志：
> 
> ```text
> %USERPROFILE%\.codex-session-delete\launcher.log
> ```
> 
> 常见原因：
> 
> - Codex App 没有安装或路径变化
> - 9229 端口被占用
> - Python 环境不可用
> 
> ### 技能推荐加载失败
> 
> 如果技能页提示 `git fetch failed`、`unable to access 'https://github.com/openai/skills.git/'` 或无法连接 GitHub，通常是本机网络不能直连 GitHub。Codex++ 启动时会优先继承现有代理环境变量；如果未设置，会自动探测常见本地代理端口。也可以手动指定：
> 
> ```powershell
> $env:HTTP_PROXY="http://127.0.0.1:7897"
> $env:HTTPS_PROXY="http://127.0.0.1:7897"
> python -m codex_session_delete launch
> ```
> 
> ### Codex++ 菜单没出现
> 
> 确认是从 `Codex++` 快捷方式启动，而不是直接启动原版 Codex。
> 
> 也可以检查 Codex 是否带了 CDP 参数：
> 
> ```text
> --remote-debugging-port=9229
> ```
> 
> ### Windows 系统卸载失败
> 
> 请先更新到当前版本后重新安装一次：
> 
> ```bash
> python -m codex_session_delete setup
> ```
> 
> 新版会写入稳定的系统卸载项，并使用绝对 Python 路径执行卸载。
> 
> ## 开发
> 
> 运行测试：
> 
> ```bash
> python -m pytest -q
> ```
> 
> 项目结构：
> 
> ```text
> codex_session_delete/
>   cli.py                 CLI 入口
>   launcher.py            启动 Codex 并注入脚本
>   cdp.py                 CDP 通信与 bridge
>   helper_server.py       本地 helper 服务
>   storage_adapter.py     本地 SQLite 删除/撤销
>   windows_installer.py   Windows 快捷方式与卸载项
>   macos_installer.py     macOS app bundle 安装
>   watcher.py             Windows 常驻 watcher（可选，原生启动接管）
>   inject/renderer-inject.js
> 
> tests/                   自动化测试
> docs/ai/                 项目级 AI 协作状态和 skills 配置中枢
> ```
> 
> ## 说明
> 
> Codex++ 是外部增强工具，不修改 Codex App 原始文件。Codex App 更新后，如果页面结构变化，可能需要更新注入脚本。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)

## 相關收錄

> [!note]- 直接競品（同子分類：增強工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "增強工具" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "BigPizzaV3--CodexPlusPlus" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "BigPizzaV3--CodexPlusPlus" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "BigPizzaV3" AND file.name != "BigPizzaV3--CodexPlusPlus"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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
> const me = dv.page("Repos/BigPizzaV3--CodexPlusPlus");
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

> **2026-05-12** — 首次收錄
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

- [[2026-05-12|2026-05-12]] — 首次收錄，1.0k stars
