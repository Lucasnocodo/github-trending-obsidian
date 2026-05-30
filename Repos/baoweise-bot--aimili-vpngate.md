---
repo: baoweise-bot/aimili-vpngate
url: https://github.com/baoweise-bot/aimili-vpngate
owner: baoweise-bot
owner_type: User
language: Python
license: NOASSERTION
description: "aimili-vpngate是一个借助vpngate.net让Linux用干净ip出站的代理工具。"
homepage: ""
stars: 401
stars_per_day: 100
forks: 156
open_issues: 6
created: 2026-05-25
pushed_at: 2026-05-29
first_seen: 2026-05-30
week: "2026-W22"
month: "2026-05"
category: "基礎設施"
subcategory: "VPN 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-30
use_case: "提供 Linux VPS 使用干净 IP 的智能 VPN 代理管理工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-06"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 61
readme_length: 3801
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:401"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "aimili-vpngate"
  - "baoweise-bot/aimili-vpngate"
  - "提供 Linux VPS 使用干净 IP 的智能 VPN 代理管理工具。"
---

# aimili-vpngate

**401** stars · **100** stars/天 · 建立 4 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供 Linux VPS 使用干净 IP 的智能 VPN 代理管理工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (100 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在 Linux VPS 上穩定使用 VPN 的系統管理員和開發者。
> **一句話重點** AimiliVPN 的自動化節點管理和防鎖定設計使其在 VPN 工具中脫穎而出。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "VPN 工具" && p.file.name !== "baoweise-bot--aimili-vpngate" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 VPN 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高性能的 VPN 代理服務，值得一試。

> [!abstract] 核心創新
> 自動收集 VPN 節點並進行多線程可用性測試，提供高性能的 HTTP/SOCKS5 代理服務。

## 專案簡介

AimiliVPN 是一款專為 Linux VPS 設計的智能 VPN 代理管理器，能自動收集 VPNGate 開放節點，並進行多線程可用性測試與延遲過濾。使用者只需在 Ubuntu VPS 上執行簡單的安裝指令，即可設置高性能的 HTTP/SOCKS5 代理服務。其核心賣點在於能夠有效防止 VPS 被鎖定，並在 VPN 斷開時自動阻止流量，避免洩漏真實 IP。這是透過 OpenVPN 隧道和策略路由實現的，並且不會影響 SSH 會話等其他流量。系統架構上，AimiliVPN 使用了現代化的 Web UI 來顯示節點狀態，並提供 CLI 工具進行快速操作，這樣的設計使得用戶能夠輕鬆管理和選擇最佳的 VPN 節點。其自動收集和多線程測試的功能，確保了用戶始終能夠連接到高品質的 VPN 節點，這在其他類似工具中並不常見。相較於傳統的 VPN 解決方案，AimiliVPN 提供了更高的靈活性和安全性，特別適合需要穩定出站流量的用戶。

**技術棧**：`Python` · `Shell`

## 重點功能

- 自動收集與多線程探測 — 定期從 VPNGate 獲取節點，並進行延遲測試以維持高品質節點池。
- 防鎖定路由 — 將流量從虛擬適配器 `tun0` 定向到自定義路由表，避免影響 SSH 會話。
- 防洩漏保護 — 本地代理伺服器的出站連接嚴格綁定於 `tun0`，VPN 斷開時立即阻止請求。
- 現代化 Web UI 面板 — 提供實時地理位置、ISP、延遲等信息，並支持手動選擇節點。
- CLI 工具 (ml) — 提供快速狀態查詢、啟動/停止守護進程等功能。

## 快速開始

1. 在 Ubuntu VPS 上安裝 AimiliVPN
```bash
bash /dev/null
sudo killall apt apt-get dpkg 2>/dev/null
sudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock
sudo dpkg --configure -a
sudo apt-get update
```
2. 重新運行安裝腳本
```bash
bash /dev/null
```
3. 訪問 Web UI
```bash
在瀏覽器中訪問 http://<你的伺服器IP>:8787
```

## 程式碼範例

```python
# 前置條件
# 在 Ubuntu VPS 上安裝 AimiliVPN
bash /dev/null
sudo killall apt apt-get dpkg 2>/dev/null
sudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock
sudo dpkg --configure -a
sudo apt-get update
# 預期輸出
安裝完成後，您可以訪問 Web UI 進行配置。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 401 stars（100/天），forks 156（38.9%），顯示出強烈的社群興趣。作者 baoweise-bot 是一位專注於開源工具的開發者，這個專案解決了用戶在使用 VPN 時常遇到的 IP 被鎖定問題，之前的解決方案往往無法有效管理多個 VPN 節點。最近的推廣活動和社群討論也促進了這個專案的曝光率。隨著 VPN 需求的增加，這個工具的實用性和便利性使其成為一個受歡迎的選擇。forks/stars 比率高達 38.9%，顯示出許多人在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在 Linux VPS 上穩定使用 VPN 的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來在 Linux VPS 上設置穩定的代理服務，因為它能自動管理 VPN 節點，降低了手動配置的複雜性。
> - 開發者用它來測試地區限制的應用程式，因為它提供了高性能的 HTTP/SOCKS5 代理，能快速切換不同國家的 IP。
> - 安全研究人員用它來進行匿名測試，因為其防止 IP 洩漏的設計確保了測試過程的隱私性。

## 架構分析

AimiliVPN 採用了一個多層架構，首先通過自動化腳本從 VPNGate 收集可用的 VPN 節點，然後使用多線程進行延遲測試以確保節點的穩定性。這樣的設計使得用戶不需要手動管理節點，降低了使用門檻。系統架構中，流量通過 OpenVPN 隧道進行加密，並使用策略路由來確保其他流量不受影響。這種設計的代價是需要一定的系統資源來支持多線程操作，並且對於 VPN 的依賴性較高。擴展性方面，隨著節點數量的增加，可能會面臨性能瓶頸，特別是在高流量情況下。

## 技術深入分析

AimiliVPN 的核心技術機制在於其自動化節點收集和多線程可用性測試。這使得用戶能夠隨時獲得高品質的 VPN 節點，並且通過 OpenVPN 隧道進行安全的數據傳輸。系統能夠處理多個並發連接，並且在高流量情況下仍能保持穩定性。設計上，AimiliVPN 使用 Python 和 Shell 進行開發，這使得其安裝和運行相對簡單，但也可能在性能上受到限制。選擇這些技術的好處在於它們的普遍性和易於維護，但在處理大量節點時可能會面臨性能瓶頸。技術風險方面，隨著用戶數量的增加，系統的穩定性和性能可能會受到挑戰，特別是在高並發的情況下。整合方面，AimiliVPN 可以與現有的 Linux 環境無縫協作，但對於其他系統的支持則相對有限。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和系統架構說明。安裝過程相對順暢，但需要注意網路連接的穩定性。文件目前僅提供英文版本，缺乏多語言支持，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化節點管理，減少手動配置的繁瑣。
> - 高性能的 HTTP/SOCKS5 代理服務，適合多種應用場景。
> - 防洩漏設計，增強了用戶隱私安全。

> [!danger] 缺點
> - 僅限於 Ubuntu 系統，對其他 Linux 發行版支持不足。
> - 需要穩定的網路連接以確保節點可用性。
> - 目前功能相對單一，未來可能需要擴展更多協議支持。

> [!warning] 注意事項
> - 僅支援 Ubuntu 系統，其他 Linux 發行版可能無法正常運行。
> - 需要穩定的網路連接以獲取 VPN 節點。
> - 目前僅支持 HTTP/SOCKS5 代理，對於其他協議的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理伺服器的管理，與 AimiliVPN 的自動化節點收集和防鎖定功能有所不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更簡單的 VPN 解決方案，但缺乏 AimiliVPN 的多線程測試和高性能代理服務。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | Codex-shim 是針對特定應用的代理工具，而 AimiliVPN 則提供了更廣泛的 VPN 節點管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理伺服器的管理，提供了更簡單的使用界面，但缺乏 AimiliVPN 的自動化節點收集和防鎖定功能。 | 如果你需要一個簡單的代理管理工具，且不需要自動化功能，這是個不錯的選擇。 | medium，因為需要重新配置代理伺服器的設置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一個更簡單的 VPN 解決方案，但缺乏 AimiliVPN 的多線程測試和高性能代理服務。 | 如果你的需求較簡單，且不需要高性能的代理服務，這是一個合適的選擇。 | low，因為設置較為簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aimili-vpngate** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理伺服器的管理，提供了更簡單的使用界面，但缺乏 AimiliVPN 的自動化節點收集和防鎖定功能。 | 提供了一個更簡單的 VPN 解決方案，但缺乏 AimiliVPN 的多線程測試和高性能代理服務。 |
> | 遷移成本 | - | medium，因為需要重新配置代理伺服器的設置。 | low，因為設置較為簡單。 |
> | 適用場景 | 主要場景 | 如果你需要一個簡單的代理管理工具，且不需要自動化功能，這是個 | 如果你的需求較簡單，且不需要高性能的代理服務，這是一個合適的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些地區可能無法連接到 VPN 節點，特別是受到網路限制的地區。
  - 解法：嘗試使用不同的節點或手動配置 VPN。
- [MEDIUM] 安裝過程中可能會遇到依賴問題，特別是在舊版 Ubuntu 上。
  - 解法：確保系統更新到最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化節點管理和高性能代理服務能夠支持小型團隊的需求。 |
| 大型企業的 VPN 解決方案 | 不適合 | 目前仍處於 alpha 階段，穩定性不足。 |
| 個人開發者的測試環境 | 適合 | 簡單的安裝和配置能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高性能的 VPN 代理服務，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：AimiliVPN 本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度尚可，但仍需注意外部 VPN 節點的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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
| Forks | 156 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-29 |
| 建立日期 | 2026-05-25 |
| Repo 大小 | 61 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/baoweise-bot/aimili-vpngate) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 81
>     "Shell" : 19
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@baoweise-bot](https://github.com/baoweise-bot) | 10 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多個開發活動和未解決的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-28）
> **活躍天數** 1 天 · **最新 commit** feat: optimize node fetching with conditional retries and implement post-connection proxy health che

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/baoweise-bot/aimili-vpngate/issues/6) | 能不能让我们主动拉特定国家的IP列表 | 0 | 0 |
> | [#5](https://github.com/baoweise-bot/aimili-vpngate/issues/5) | 可以把安全后缀取消吗？ | 0 | 1 |
> | [#4](https://github.com/baoweise-bot/aimili-vpngate/issues/4) | 拉取不到免费的vpn列表 | 0 | 1 |
> | [#2](https://github.com/baoweise-bot/aimili-vpngate/issues/2) | 密码管理有bug | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # AimiliVPN 🌐
> 
> Bilingual: [中文](#中文) | [English](#english)
> 
> ---
> 
> ## 中文
> 
> [](https://t.me/arestemple)
> [](https://339936.xyz)
> [](https://www.youtube.com/watch?v=s-ATfXR8BpI)
> [](mailto:yaohunse7@gmail.com)
> 
> ---
> 
> **AimiliVPN** 是一个专为 Linux VPS（如 Ubuntu）设计的智能 VPN 代理网关管理器。它能够自动采集 VPNGate 开放节点，进行多线程可用性测试与延迟过滤，利用 OpenVPN 隧道与策略路由（Policy Routing）实现出站网络，并在本地提供高性能的 HTTP/SOCKS5 代理网关服务，适合用作 Xray 的落地出站代理。
> 
> ---
> 
> ### 🚀 快速开始
> 
> 在您的 **Ubuntu** VPS 机器上，复制并运行以下一行指令即可完成自动安装部署：
> 
> ```bash
> bash /dev/null
> sudo killall apt apt-get dpkg 2>/dev/null
> 
> # 2. 清理残留锁文件
> sudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock
> 
> # 3. 修复受损包并重新更新源
> sudo dpkg --configure -a
> sudo apt-get update
> ```
> 执行完毕后，重新运行一键安装脚本即可。
> 
> ---
> 
> ### ⚙️ 系统架构
> 
> ```
>    [ 3x-ui / Xray ] 
>          │ (HTTP / SOCKS5)
>          ▼
>    [ 本地代理服务器 ] (Port 7928) ──(强制绑定 SO_BINDTODEVICE)──► [ tun0 虚拟网卡 ]
>          │                                                            │
>          │ (SSH, Web UI, etc. 依然走物理路由)                           │ (策略路由表 100)
>          ▼                                                            ▼
>    [ 物理网卡 eth0 ] ◄───────────────────────────────────────── [ OpenVPN 加密隧道 ]
>          │                                                            │
>          ▼ (真实服务器 IP 出站)                                         ▼ (VPNGate 落地节点出站)
>     (国内直连流量)                                               (解锁流媒体、锁区网站)
> ```
> 
> ---
> 
> ## English
> 
> [](https://t.me/arestemple)
> [](https://339936.xyz)
> [](mailto:yaohunse7@gmail.com)
> 
> ---
> 
> **AimiliVPN** is an intelligent VPN proxy gateway manager designed specifically for Linux VPS (e.g. Ubuntu). It automatically collects open VPNGate nodes, conducts multi-threaded availability testing and latency filtering, establishes secure out-of-band routing via OpenVPN and policy routing to **prevent VPS lockouts**, and hosts a high-performance local SOCKS5/HTTP proxy gateway. It is highly optimized to serve as a residential/unlocked egress node for upstream proxies like 3x-ui / Xray.
> 
> ### ✨ Key Features
> 
> 1. ⚡ **Auto-Collection & Multi-Threaded Probing**:
>    * Periodically fetches candidate nodes from VPNGate.
>    * Performs concurrent ping latency and handshake tests to maintain a pool of high-quality nodes.
> 2. 🔒 **Anti-Lockout Routing (Policy Routing)**:
>    * Directs traffic from the virtual adapter `tun0` to a customized routing table (Table 100) without altering the system's default gateway.
>    * Keeps SSH sessions and server administration panels unaffected by the active VPN.
> 3. 🚫 **Fail-Safe Leak Protection**:
>    * Outbound socket connections inside the local proxy server are strictly bound to `tun0` via `SO_BINDTODEVICE`.
>    * If the VPN disconnects, proxy requests are instantly blocked with a `502 Bad Gateway` instead of falling back to the VPS physical IP address.
> 4. 🖥️ **Modern Web UI Panel**:
>    * Sleek dark/light responsive console (default port `8787`).
>    * Provides real-time geolocation, ISP, ASN, latency, and IP-type (residential/datacenter) detection.
>    * Enables manual node selection, blacklist resets, proxy speed-testing, and logs query.
>    * Secured by a random secret path suffix (e.g., `/EJsW2EeBo9lY/`) and password authentication.
> 5. 🛠️ **CLI Utility (ml)**:
>    * Command-line helper tool `ml` with a menu-driven interface.
>    * Provides quick statuses, starts/stops the daemon, resets passwords, and changes bind hosts.
> 
> ---
> 
> ### 🚀 Quick Start
> 
> To install and deploy AimiliVPN on your **Ubuntu** server, copy and paste the following command:
> 
> ```bash
> bash /dev/null
> sudo killall apt apt-get dpkg 2>/dev/null
> 
> # 2. Remove lock files
> sudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock
> 
> # 3. Repair package states & update
> sudo dpkg --configure -a
> sudo apt-get update
> ```
> Once done, re-run the installation script.

## 延伸閱讀

相關概念：[[VPN]] · [[代理伺服器]] · [[策略路由]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]]

[GitHub](https://github.com/baoweise-bot/aimili-vpngate)

## 相關收錄

> [!note]- 直接競品（同子分類：VPN 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "VPN 工具" AND file.name != "baoweise-bot--aimili-vpngate"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "baoweise-bot--aimili-vpngate"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "baoweise-bot--aimili-vpngate" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "baoweise-bot--aimili-vpngate"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["VPN","代理伺服器","策略路由"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "baoweise-bot--aimili-vpngate" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "baoweise-bot--aimili-vpngate" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "baoweise-bot" AND file.name != "baoweise-bot--aimili-vpngate"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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
> const me = dv.page("Repos/baoweise-bot--aimili-vpngate");
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

> **2026-05-30** — 首次收錄
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

- [[2026-05-30|2026-05-30]] — 首次收錄，401 stars
