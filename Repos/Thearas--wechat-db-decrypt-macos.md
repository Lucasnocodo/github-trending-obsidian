---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 532
stars_per_day: 13
forks: 460
open_issues: 5
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "數據解密"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "解密 macOS arm64 微信 4.1 数据库，提取聊天记录和密钥。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "high"
issue_close_rate: 38
repo_size_kb: 2321
readme_length: 1139
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:388,2026-03-11:388,2026-03-11:388,2026-03-13:398,2026-03-14:401,2026-03-15:407,2026-03-16:415,2026-03-17:427,2026-03-18:431,2026-03-19:433,2026-03-20:435,2026-03-21:442,2026-03-22:446,2026-03-23:449,2026-03-24:456,2026-03-25:462,2026-03-26:463,2026-03-27:465,2026-03-28:470,2026-03-29:472,2026-03-30:475,2026-03-31:479,2026-04-01:482,2026-04-02:487,2026-04-03:493,2026-04-04:495,2026-04-05:500,2026-04-06:503,2026-04-07:507,2026-04-08:511,2026-04-09:516,2026-04-10:520,2026-04-11:521,2026-04-12:522,2026-04-13:526,2026-04-14:526,2026-04-15:531,2026-04-16:532"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密 macOS arm64 微信 4.1 数据库，提取聊天记录和密钥。"
---

# wechat-db-decrypt-macos

**532** stars · **13** stars/天 · 建立 41 天前 · Python · WTFPL

```dataviewjs
const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 解密 macOS arm64 微信 4.1 数据库，提取聊天记录和密钥。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (13 stars/day)
> **授權** WTFPL · **維護** Slow (最後推送 37 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要在 macOS 上解密微信數據庫並提取聊天記錄的開發者或研究者。
> **一句話重點** 這個專案不僅解決了微信數據解密的需求，還讓 AI 能夠直接查詢這些數據，開啟了新的應用場景。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數據解密" && p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 數據解密 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到靈活的數據導出功能，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一個針對 macOS arm64 的微信數據庫解密解決方案，填補了市場上對於該平台的需求。

## 專案簡介

這個專案的核心功能是解密微信的本地數據庫，讓使用者能夠提取聊天記錄和密鑰。使用者需在 macOS arm64 環境下運行微信 4.x，並需禁用 SIP 以執行密鑰提取。透過執行 `PYTHONPATH=$(lldb -P) python3 find_key_memscan.py`，密鑰會被保存至 `wechat_keys.json`，隨後可用 `python3 decrypt_db.py` 解密數據庫。這個工具的賣點在於能夠直接導出聊天記錄，並且支持模糊匹配和關鍵字搜索，讓使用者能夠靈活查詢所需的對話紀錄。技術上，專案依賴 Python 和 SQLCipher，並使用了 LLVM 來進行內存掃描，這樣的設計使得解密過程相對高效且不需要過多的外部依賴。

與其他解密工具相比，如 ylytdeng/wechat-decrypt，這個專案專注於 macOS arm64 環境，並提供了更為簡單的使用流程和更強的功能，如 MCP Server 的集成，讓 AI 可以直接查詢微信數據。使用者在導出聊天記錄時，可以選擇導出所有會話或特定會話，並支持多種查詢方式，這在其他工具中並不常見。實際使用中，使用者可能會遇到提取密鑰失敗或導出內容出現亂碼的問題，這些都是目前社群反映的痛點。這個專案目前處於 beta 階段，適合對微信數據有需求的開發者或研究者，未來可能會隨著微信版本更新而需要調整。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需謹慎考量其穩定性。

**技術棧**：`Python` · `SQLCipher` · `LLVM`

## 重點功能

- 密鑰提取 — 使用 `PYTHONPATH=$(lldb -P) python3 find_key_memscan.py` 提取微信數據庫密鑰，保存至 `wechat_keys.json`。
- 數據庫解密 — 使用 `python3 decrypt_db.py` 解密 SQLCipher 加密的微信數據庫。
- 聊天記錄導出 — 支持多種導出方式，如 `python3 export_messages.py -c '卡比'` 導出指定會話，或 `--all` 導出所有會話。
- 關鍵字搜索 — 使用 `python3 export_messages.py -s '关键词'` 搜索聊天記錄中的特定關鍵字。
- MCP Server 集成 — 安裝 `fastmcp` 並註冊後，AI 可以直接查詢微信數據，支持多種查詢功能。

## 快速開始

1. 安裝依賴
```bash
brew install llvm sqlcipher
```
2. 提取密鑰
```bash
PYTHONPATH=$(lldb -P) python3 find_key_memscan.py
```
3. 解密數據庫
```bash
python3 decrypt_db.py
```

## 程式碼範例

```python
{
  "前置條件": "確保微信已登錄並正在運行；",
  "指令": "PYTHONPATH=$(lldb -P) python3 find_key_memscan.py",
  "預期輸出": "密鑰保存到 `wechat_keys.json`。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 41 天內累積 532 stars（約 13 stars/天），forks 數量達 460（86.5%），顯示出強烈的社群參與。專案的主要貢獻者包括 jackwener 和 jalen0x，他們在相關領域有一定的經驗。這個工具解決了微信數據庫解密的需求，特別是在 macOS 環境下，之前的解決方案多為 Windows 平台，導致 macOS 使用者缺乏有效的工具。近期的社群討論和問題反饋也顯示出使用者對於提取密鑰和導出數據的需求，這進一步推動了專案的關注度。

## 適合誰使用

**目標受眾**：需要在 macOS 上解密微信數據庫並提取聊天記錄的開發者或研究者。

> [!example] 使用場景
> - 數據分析師用它來提取微信聊天記錄，因為需要分析用戶互動模式，並且這個工具支持多種導出選項，讓數據處理更靈活。
> - 開發者用它來測試微信的數據安全性，因為能直接解密數據庫並導出數據，便於進行安全性評估和漏洞測試。
> - 研究人員用它來收集社交媒體數據，因為能夠快速導出大量聊天記錄，並進行文本分析，這在其他工具中難以實現。

## 架構分析

這個專案採用了 Python 作為主要開發語言，並利用 SQLCipher 來處理加密的數據庫。架構上，密鑰提取使用內存掃描技術，這樣可以在不直接訪問文件的情況下獲取密鑰，這樣的設計提高了安全性，但也增加了實作的複雜度。數據流方面，從提取密鑰到解密數據庫的過程中，依賴 LLVM 進行內存管理，這樣可以降低對系統資源的需求。選擇 Python 作為語言的原因在於其強大的庫支持和開發效率，但這也可能導致性能瓶頸，特別是在處理大量數據時。擴展性方面，這個專案目前僅針對微信 4.x 版本，未來若微信更新，可能需要進行相應的調整，以保持工具的有效性。

## 技術深入分析

這個專案的核心技術在於使用 Python 和 SQLCipher 來解密微信的本地數據庫。密鑰提取過程中，使用了內存掃描技術，這樣可以在不直接訪問文件的情況下獲取密鑰，這在安全性上有一定的優勢。效能方面，因為依賴於 Python 的執行效率，處理大量數據時可能會出現性能瓶頸，特別是在高負載的情況下。設計選擇上，使用 LLVM 來進行內存管理，這樣可以降低對系統資源的需求，但也增加了實作的複雜度。技術風險方面，若微信版本更新，可能會導致工具失效，這需要持續的維護和更新。整合方面，這個工具與現有的 Python 生態系統相容性良好，能夠輕鬆整合到現有的開發流程中，並且支持 CI/CD 流程的集成。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要禁用 SIP，這可能會讓一些使用者感到困惑。文件中沒有提供多語言支持，但整體上能讓使用者在 30 分鐘內上手。整體體驗良好。

## 優缺點分析

> [!success] 優點
> - 支持微信 4.x 版本的數據庫解密，填補了 macOS 平台的需求。
> - 提供多種聊天記錄導出選項，靈活性高。
> - 集成 MCP Server，讓 AI 能夠直接查詢微信數據，擴展性強。

> [!danger] 缺點
> - 僅支持最新的微信版本，舊版本不兼容。
> - 需要禁用 SIP，可能影響系統安全。
> - 導出的數據可能出現亂碼，影響使用體驗。

> [!warning] 注意事項
> - 僅支持微信 4.1 及以上版本，4.0 以下版本不兼容。
> - 需要禁用 SIP，這可能會帶來安全風險。
> - 導出的聊天數據中可能出現表情包、圖片等內容的亂碼問題。
> - 目前僅在 macOS arm64 環境下測試，其他平台未經驗證。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具主要針對 Windows 平台，無法在 macOS 上使用，且功能相對較少。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於數據恢復，並不專門針對微信數據庫解密，功能範圍不同。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 這個工具提供了更廣泛的數據解密功能，但未針對微信進行優化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具主要針對 Windows 平台，無法在 macOS 上使用，且功能相對較少。 | 如果你的團隊主要在 Windows 環境下工作，且需要解密微信數據，這個工具可能更合適。 | medium，因為需要重新適應不同的環境和工具使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於數據恢復，並不專門針對微信數據庫解密，功能範圍不同。 | 如果你的需求是數據恢復而非專門的微信解密，這個工具會更合適。 | low，因為功能範圍不同，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechat-db-decrypt-macos** | **wechat-decrypt** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具主要針對 Windows 平台，無法在 macOS 上使用，且功能相對較少。 | 這個工具專注於數據恢復，並不專門針對微信數據庫解密，功能範圍不同。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的環境和工具使用方式。 | low，因為功能範圍不同，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要在 Windows 環境下工作，且需要解密微 | 如果你的需求是數據恢復而非專門的微信解密，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 提取密鑰時可能會失敗，特別是在不同版本的微信中使用時。
  - 解法：確保使用最新的微信版本，並檢查系統設置。
- [MEDIUM] 導出的聊天數據中可能出現表情包、圖片等內容的亂碼。
  - 解法：目前無法解決，需手動處理導出的數據。
- **[HIGH]** 需要禁用 SIP，這可能會影響系統的安全性。
  - 解法：在使用後重新啟用 SIP，確保系統安全。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行微信數據分析 | 非常適合 | 工具提供靈活的數據導出和查詢功能，適合數據分析需求。 |
| 個人研究者需要提取微信聊天記錄 | 適合 | 能夠快速提取和導出聊天記錄，滿足研究需求。 |
| 大型企業需要穩定的數據解密工具 | 不適合 | 目前處於 beta 階段，穩定性不足，不建議用於生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到靈活的數據導出功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要禁用 SIP，這可能會影響系統安全；工具本身不存取敏感資料，但需注意依賴的庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Python 生態系統中的其他數據處理工具搭配使用，通常在數據分析和處理的環節中發揮作用。在一個使用 Python 的數據分析專案中，你可以用這個工具來提取微信數據，具體做法是執行 `PYTHONPATH=$(lldb -P) python3 find_key_memscan.py` 提取密鑰，然後使用 `python3 decrypt_db.py` 解密數據庫。這個工具與主流的 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於需要禁用 SIP，這對某些使用者來說可能是一個障礙。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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
| Forks | 460 |
| Open Issues | 5 |
| Issue 解決率 | 38% (3 closed) |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Thearas/wechat-db-decrypt-macos) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 11 |
> | [@jalen0x](https://github.com/jalen0x) | 3 |
> | [@Thearas](https://github.com/Thearas) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有合併請求和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-09）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #4 from jalen0x/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Thearas/wechat-db-decrypt-macos/issues/9) | 提取密钥失败：Results: 0/19 keys found in WeChat 4.1.8.67 @ macOS 1 | 0 | 0 |
> | [#3](https://github.com/Thearas/wechat-db-decrypt-macos/issues/3) | 导出的聊天数据中表情包、图片等内容出现乱码，只有纯文字正常 | 0 | 0 |
> | [#2](https://github.com/Thearas/wechat-db-decrypt-macos/issues/2) | 提取密钥时报错 | 0 | 5 |
> | [#1](https://github.com/Thearas/wechat-db-decrypt-macos/issues/1) | windows的可以吗? | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # macOS 微信数据库解密
> 
> 提取微信 (WeChat) 数据库密钥，解密 SQLCipher 加密的本地数据库，导出聊天记录。支持 MCP Server，让 AI 直接查询微信数据。
> 
> ## 快速开始
> 
> ### 1. 前置条件
> 
> - macOS arm64，微信 4.x
> - 禁用 SIP：`csrutil disable`
> - 安装依赖：`brew install llvm sqlcipher`
> 
> ### 2. 提取密钥
> 
> 确保微信已登录并正在运行：
> 
> ```bash
> PYTHONPATH=$(lldb -P) python3 find_key_memscan.py
> ```
> 
> 密钥保存到 `wechat_keys.json`。
> 
> ### 3. 解密数据库
> 
> ```bash
> python3 decrypt_db.py
> ```
> 
> ### 4. 导出聊天记录
> 
> ```bash
> # 列出所有会话
> python3 export_messages.py
> 
> # 导出指定会话（支持模糊匹配联系人名）
> python3 export_messages.py -c "卡比"
> python3 export_messages.py -c wxid_xxx
> python3 export_messages.py -c 12345@chatroom
> 
> # 导出最近 N 条
> python3 export_messages.py -c "卡比" -n 50
> 
> # 搜索关键词
> python3 export_messages.py -s "关键词"
> 
> # 导出所有会话
> python3 export_messages.py --all
> ```
> 
> ### 5. MCP Server（让 AI 直接查询）
> 
> 安装依赖并注册到 Claude Code：
> 
> ```bash
> pip3 install fastmcp
> claude mcp add wechat -- python3 $(pwd)/mcp_server.py
> ```
> 
> 注册后 AI 可以直接调用以下能力：
> 
> | Tool | 功能 |
> |------|------|
> | `get_recent_sessions` | 获取最近会话列表 |
> | `get_chat_history` | 查看聊天记录（支持模糊匹配） |
> | `search_messages` | 跨会话搜索关键词 |
> | `get_contacts` | 搜索联系人 |
> 
> ## Thanks
> 
> - [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) — 内存搜索方案参考

## 延伸閱讀

相關概念：[[數據解密]] · [[社交媒體數據分析]] · [[內存掃描]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[jackwener--opencli|jackwener/opencli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 直接競品（同子分類：數據解密）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數據解密" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Thearas--wechat-db-decrypt-macos" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["數據解密","社交媒體數據分析","內存掃描"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Thearas" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，388 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
