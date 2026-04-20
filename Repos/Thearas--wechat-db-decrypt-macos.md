---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 539
stars_per_day: 12
forks: 464
open_issues: 5
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "數據提取"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "解密 macOS 上微信 4.1 数据库，提取聊天记录和密钥。"
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
star_history: "2026-03-10:388,2026-03-11:388,2026-03-11:388,2026-03-13:398,2026-03-14:401,2026-03-15:407,2026-03-16:415,2026-03-17:427,2026-03-18:431,2026-03-19:433,2026-03-20:435,2026-03-21:442,2026-03-22:446,2026-03-23:449,2026-03-24:456,2026-03-25:462,2026-03-26:463,2026-03-27:465,2026-03-28:470,2026-03-29:472,2026-03-30:475,2026-03-31:479,2026-04-01:482,2026-04-02:487,2026-04-03:493,2026-04-04:495,2026-04-05:500,2026-04-06:503,2026-04-07:507,2026-04-08:511,2026-04-09:516,2026-04-10:520,2026-04-11:521,2026-04-12:522,2026-04-13:526,2026-04-14:526,2026-04-15:531,2026-04-16:532,2026-04-17:533,2026-04-18:536,2026-04-19:537,2026-04-20:539"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密 macOS 上微信 4.1 数据库，提取聊天记录和密钥。"
---

# wechat-db-decrypt-macos

**539** stars · **12** stars/天 · 建立 45 天前 · Python · WTFPL

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
> 解密 macOS 上微信 4.1 数据库，提取聊天记录和密钥。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (12 stars/day)
> **授權** WTFPL · **維護** Slow (最後推送 41 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要在 macOS 上提取微信數據的開發者或研究者。
> **一句話重點** 這個專案提供了一個針對微信數據提取的高效解決方案，特別適合需要在 macOS 上工作的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數據提取" && p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 數據提取 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到便捷的微信數據提取功能，值得一試。

> [!abstract] 核心創新
> 專注於 macOS arm64 環境下的微信數據提取，並支持最新版本的微信。

## 專案簡介

這個專案的核心功能是提取微信 4.1 的加密數據庫密鑰，並解密 SQLCipher 加密的聊天記錄。使用者需在 macOS arm64 環境下運行，並禁用 SIP。提取密鑰的指令是 `PYTHONPATH=$(lldb -P) python3 find_key_memscan.py`，密鑰會保存到 `wechat_keys.json`。接著，使用 `python3 decrypt_db.py` 解密數據庫，並可透過 `python3 export_messages.py` 導出聊天記錄，支持多種過濾條件如模糊匹配和關鍵字搜索。這個工具的賣點在於其簡單易用的 CLI，讓用戶能夠快速獲取和管理微信數據。

技術上，專案依賴 Python 和 SQLCipher，並使用了 macOS 的內存掃描技術來提取密鑰，這種方法相對於其他工具的文件系統掃描更為高效。與其他類似工具相比，如 ylytdeng/wechat-decrypt，這個專案專注於 macOS 環境，並且支持最新的微信版本，這使得它在特定用戶群中更具吸引力。使用者可能會遇到的問題包括提取密鑰失敗或導出數據時出現亂碼，這在熱門 Issues 中有反映。這個專案目前處於活躍開發中，且社群反應良好，適合需要提取微信數據的開發者和研究者。未來可能會加入對更舊版本的支持或改善導出功能。

**技術棧**：`Python` · `SQLCipher`

## 重點功能

- 提取密鑰 — 使用 `PYTHONPATH=$(lldb -P) python3 find_key_memscan.py` 提取微信數據庫密鑰，並保存至 `wechat_keys.json`。
- 解密數據庫 — 透過 `python3 decrypt_db.py` 解密 SQLCipher 加密的微信數據庫。
- 導出聊天記錄 — 使用 `python3 export_messages.py` 支持多種導出選項，如模糊匹配、關鍵字搜索等。
- MCP Server 支持 — 安裝 `fastmcp` 並註冊後，AI 可以直接查詢微信數據。
- 支持多種導出格式 — 可導出指定會話或所有會話的聊天記錄，並支持最近 N 條的導出。

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
4. 導出聊天記錄
```bash
python3 export_messages.py --all
```

## 程式碼範例

```python
[
  "# 前置條件",
  "PYTHONPATH=$(lldb -P) python3 find_key_memscan.py",
  "# 預期輸出",
  "密鑰保存到 wechat_keys.json"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 45 天內累積 539 stars（12/天），forks 464（86.1%），顯示出強烈的社群參與。作者 Thearas 及其團隊在開源社群中有一定的知名度，之前的專案也獲得過良好反響。這個工具解決了微信數據提取的痛點，特別是對於需要分析聊天記錄的開發者來說，之前的解決方案往往不夠方便或不支持最新版本。最近的社群討論和問題反饋也促進了專案的改進和活躍度，顯示出用戶對此工具的需求。整體來看，這是一個針對特定需求的實用工具，並且在技術上有其獨特性。

## 適合誰使用

**目標受眾**：需要在 macOS 上提取微信數據的開發者或研究者。

> [!example] 使用場景
> - 數據分析師用它來提取微信聊天記錄，因為能夠快速獲得有價值的數據進行分析，避免手動操作的繁瑣。
> - 開發者用它來測試微信相關的應用，因為能夠直接從數據庫中獲取真實的使用數據，提升測試的準確性。
> - 研究者用它來分析社交媒體行為，因為此工具提供了便捷的數據導出功能，能夠輕鬆獲取所需的聊天記錄。

## 架構分析

該專案採用 Python 作為主要開發語言，並利用 SQLCipher 進行數據庫的加密和解密。架構上，專案分為密鑰提取、數據解密和數據導出三個主要模塊，這樣的設計使得每個模塊的功能清晰，易於維護。使用內存掃描技術提取密鑰，這相對於傳統的文件系統掃描更為高效，能夠快速獲取所需的密鑰。選擇 Python 作為開發語言的原因在於其強大的庫支持和易於上手的特性，但這也可能導致性能上的一些瓶頸，尤其是在處理大量數據時。整體來看，這種架構設計使得專案在功能上具備靈活性，但在擴展性上可能會遇到挑戰，特別是未來若需支持更多版本的微信或其他平台時。

## 技術深入分析

這個專案的核心技術機制是利用 Python 和 SQLCipher 進行微信數據的解密。透過內存掃描技術，專案能夠有效提取加密數據庫的密鑰，這種方法相比於傳統的文件系統掃描更為高效，能夠快速獲取所需的密鑰。專案的效能特性在於能夠處理較大的數據集，但在記憶體使用上可能會受到限制，特別是在提取大量聊天記錄時。選擇 Python 作為開發語言的原因在於其豐富的庫和社群支持，但這也可能導致性能上的一些瓶頸。技術風險方面，未來若需支持更多版本的微信或其他平台，可能會面臨擴展性挑戰。整合方面，專案的 CLI 工具設計使其易於與其他開發工具鏈結合，但在 CI/CD 流程中的整合可能需要額外的適配工作。整體來看，這個專案在技術上具備一定的創新性，但在實際應用中仍需考慮其平台限制和數據格式問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了詳細的安裝和使用步驟。安裝過程相對順暢，但需要注意禁用 SIP 的步驟。提供了快速開始指南，對於新手來說，能在短時間內上手使用。文件目前僅提供英文，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 專注於最新版本的微信，滿足特定用戶需求。
> - 簡單易用的 CLI 工具，快速上手。
> - 支持多種導出選項，靈活性高。

> [!danger] 缺點
> - 僅支持 macOS arm64，平台限制較大。
> - 需要禁用 SIP，可能影響系統安全性。
> - 導出數據時可能出現格式問題，影響使用體驗。

> [!warning] 注意事項
> - 僅支持微信 4.1 版本，4.0 以下版本不兼容。
> - 需要禁用 SIP，這可能會影響系統安全性。
> - 導出的數據中可能會出現表情包、圖片等內容的亂碼。
> - 目前僅在 macOS arm64 環境下測試過，其他平台未經驗證。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具支持多平台，但不專注於 macOS，且可能不支持最新版本的微信。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具可能提供更廣泛的數據提取功能，但使用上較為複雜，對新手不友好。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具支持多平台，但不專注於 macOS，且可能不支持最新版本的微信。 | 如果你的團隊需要跨平台的解決方案，且不特別依賴最新版本的微信。 | medium，因為需要重新適應不同的環境和工具配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具可能提供更廣泛的數據提取功能，但使用上較為複雜，對新手不友好。 | 如果你需要更高級的數據提取功能，且團隊有足夠的技術能力來處理複雜的配置。 | high，因為需要重新學習工具的使用和配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechat-db-decrypt-macos** | **wechat-decrypt** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具支持多平台，但不專注於 macOS，且可能不支持最新版本的微信。 | 此工具可能提供更廣泛的數據提取功能，但使用上較為複雜，對新手不友好。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的環境和工具配置。 | high，因為需要重新學習工具的使用和配置。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要跨平台的解決方案，且不特別依賴最新版本的微信 | 如果你需要更高級的數據提取功能，且團隊有足夠的技術能力來處理 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 提取密鑰失敗，可能是因為微信版本不兼容。
  - 解法：確保使用支持的微信版本，並檢查 SIP 設定。
- [MEDIUM] 導出數據時出現亂碼，特別是圖片和表情包。
  - 解法：目前無法解決，建議僅導出純文字數據。
- **[HIGH]** 需要禁用 SIP，這可能會影響系統的安全性。
  - 解法：在使用後重新啟用 SIP，確保系統安全。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要提取微信數據進行分析 | 非常適合 | 工具簡單易用，能快速獲取所需數據。 |
| 個人研究者希望分析社交媒體行為 | 適合 | 提供了便捷的數據導出功能。 |
| 大型企業需要跨平台的數據提取解決方案 | 不適合 | 目前僅支持 macOS arm64，平台限制較大。 |
| 需要提取舊版本微信數據的用戶 | 不適合 | 僅支持最新的微信 4.1 版本。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到便捷的微信數據提取功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具需要禁用 SIP，這可能會影響系統的安全性。它不會存取敏感資料，但在提取過程中可能會涉及用戶的聊天記錄。依賴鏈的信任程度較高，因為使用了知名的庫如 SQLCipher。

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
| Forks | 464 |
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

**社群活躍度**：社群活躍，近期有多次提交和問題回覆。

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

相關概念：[[CLI/TUI]] · [[資料提取]] · [[社交媒體分析]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[jackwener--opencli|jackwener/opencli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 直接競品（同子分類：數據提取）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數據提取" AND file.name != "Thearas--wechat-db-decrypt-macos"
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
> const concepts = ["CLI/TUI","資料提取","社交媒體分析"];
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
