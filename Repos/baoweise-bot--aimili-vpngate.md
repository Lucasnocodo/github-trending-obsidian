---
repo: baoweise-bot/aimili-vpngate
url: https://github.com/baoweise-bot/aimili-vpngate
owner: baoweise-bot
owner_type: User
language: Python
license: NOASSERTION
description: "aimili-vpngate是一个借助vpngate.net让Linux用干净ip出站的代理工具。"
homepage: ""
stars: 512
stars_per_day: 102
forks: 206
open_issues: 8
created: 2026-05-25
pushed_at: 2026-05-30
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
use_case: "提供一個智能 VPN 代理管理工具，幫助 Linux VPS 用戶以乾淨的 IP 出站。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-07"
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
star_history: "2026-05-30:401,2026-05-30:413,2026-05-31:512"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "aimili-vpngate"
  - "baoweise-bot/aimili-vpngate"
  - "提供一個智能 VPN 代理管理工具，幫助 Linux VPS 用戶以乾淨的 IP 出站。"
---

# aimili-vpngate

**413** stars · **103** stars/天 · 建立 4 天前 · Python · NOASSERTION

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
> 提供一個智能 VPN 代理管理工具，幫助 Linux VPS 用戶以乾淨的 IP 出站。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在 Linux VPS 上穩定使用 VPN 的系統管理員和開發者。
> **一句話重點** AimiliVPN 的自動節點管理和防鎖定設計使其在 VPN 工具中脫穎而出，特別適合需要穩定連線的用戶。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、1 小時整合，得到穩定的 VPN 連線，值得嘗試。

> [!abstract] 核心創新
> 自動收集 VPNGate 節點並進行多線程可用性測試，提供高性能的代理服務。

## 專案簡介

AimiliVPN 是一個專為 Linux VPS 設計的 VPN 代理管理工具，能自動收集 VPNGate 的開放節點，並進行多線程可用性測試與延遲過濾。用戶只需在 Ubuntu VPS 上執行一行指令，即可輕鬆安裝並配置。這個工具的核心賣點在於它能透過 OpenVPN 隧道與策略路由，實現安全的出站網路，並提供高性能的 HTTP/SOCKS5 代理服務，適合用於 Xray 等上游代理。技術上，AimiliVPN 使用了多線程來定期抓取節點，並進行延遲測試，確保用戶始終使用高品質的 VPN 服務。

它的策略路由設計讓 SSH 會話不受 VPN 影響，並且在 VPN 斷開時能即時阻止請求，避免 IP 泄露。與其他 VPN 工具相比，如 Shadowsocks 和 V2Ray，AimiliVPN 提供了更高的安全性和穩定性，特別是在防止 VPS 被鎖定的情況下。使用者在使用過程中可能會遇到如無法拉取免費 VPN 列表等問題，但社群活躍度高，能快速獲得支援。這個專案目前處於早期階段，適合需要穩定 VPN 連線的開發者和系統管理員，未來可能會增加更多功能以提升用戶體驗。

**技術棧**：`Python` · `Shell`

## 重點功能

- 自動收集與多線程探測 — 定期從 VPNGate 獲取節點，並進行延遲測試以維持高品質節點池。
- 防鎖定路由 — 透過策略路由將流量導向虛擬適配器，避免影響 SSH 會話。
- 漏洩保護 — 出站連接被強制綁定至虛擬網卡，VPN 斷開時即時阻止請求。
- 現代化 Web UI 面板 — 提供實時地理位置、ISP、延遲等資訊，預設端口為 8787。
- 高性能 HTTP/SOCKS5 代理 — 適合用於 Xray 等上游代理，提供穩定的出站服務。

## 快速開始

1. 在 Ubuntu VPS 上安裝 AimiliVPN
```bash
bash /dev/null
```
2. 清理鎖文件
```bash
sudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock
```
3. 修復受損包並更新源
```bash
sudo dpkg --configure -a && sudo apt-get update
```

## 程式碼範例

```python
{
  "前置條件": "在 Ubuntu VPS 上安裝 AimiliVPN",
  "指令": "bash /dev/null",
  "預期輸出": "成功安裝 AimiliVPN，並開始自動收集 VPN 節點。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 413 stars（103/天），forks 156（37.8%），顯示出強烈的社群興趣。作者 baoweise-bot 是一位專注於開源工具的開發者，這個工具解決了 Linux 用戶在使用 VPN 時的 IP 泄露問題，特別是在需要穩定連線的情況下。近期的推特和社群討論也引起了不少關注，讓更多人了解這個工具的潛力。技術上，隨著 VPN 使用需求的增加，這個工具正好迎合了市場的需求。高達 37.8% 的 forks/stars 比率顯示出許多用戶對其進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要在 Linux VPS 上穩定使用 VPN 的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來保護伺服器的真實 IP，因為它能防止 VPN 斷線時的 IP 泄露，避免被封鎖。
> - 開發者用它來測試地區限制的應用程式，因為它能快速切換到不同國家的 IP，提升測試效率。
> - 小型企業用它來安全地訪問外部服務，因為它提供高性能的代理服務，適合多用戶同時使用。

## 架構分析

AimiliVPN 採用單一的 Python 腳本來管理 VPN 連線和代理服務，這樣的設計使得安裝和維護變得簡單。資料流方面，流量從物理網卡經過 OpenVPN 隧道，並通過策略路由轉發至虛擬網卡，這樣可以保護 SSH 會話不受影響。選擇 Python 作為開發語言，因為其在網路編程方面的靈活性和豐富的庫支持。這種設計雖然降低了依賴的複雜度，但在高流量時可能會導致性能瓶頸，特別是在多用戶同時使用的情況下。整體而言，AimiliVPN 的架構適合小型到中型的使用場景，但在大規模部署時可能需要進一步的優化。

## 技術深入分析

AimiliVPN 的核心技術機制在於其自動化節點收集和多線程可用性測試，這使得用戶能夠快速獲得高品質的 VPN 服務。它使用 OpenVPN 作為加密隧道，並透過策略路由來確保流量的安全性，這樣的設計減少了對系統預設網關的干擾，保持了 SSH 會話的穩定性。效能方面，該工具能夠在多用戶同時使用的情況下保持良好的響應速度，但在高流量時可能會出現瓶頸。選擇 Python 作為開發語言，因為其在網路編程中的優勢，並且依賴的庫相對較少，降低了維護成本。技術風險方面，隨著使用者數量的增加，可能會面臨性能下降的問題，特別是在多線程處理上。整合方面，AimiliVPN 可以輕鬆與現有的 Linux 環境結合，但在與其他 VPN 解決方案的整合時，可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和功能說明。安裝過程相對順暢，但需要注意 Ubuntu 系統的兼容性。沒有提供多語言支持，僅有中英文版本。

## 優缺點分析

> [!success] 優點
> - 自動化節點管理，減少手動配置的麻煩。
> - 高性能的代理服務，適合多用戶使用。
> - 簡單的安裝過程，適合新手使用。

> [!danger] 缺點
> - 目前僅支持 Ubuntu 系統，限制了使用範圍。
> - 對 IPv6 的支持尚未實現，可能影響某些用戶。
> - 社群支持仍在建立中，問題解決速度可能較慢。

> [!warning] 注意事項
> - 僅支援 Ubuntu 系統，其他 Linux 發行版可能無法正常運行。
> - 目前僅支持 IPv4，對 IPv6 的支持尚未實現。
> - 需要穩定的網路連接以確保節點的有效性測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 是一個輕量級的代理工具，適合快速設置，但缺乏 AimiliVPN 的自動節點管理和防鎖定功能。 |
| [v2ray/v2ray-core](https://github.com/v2ray/v2ray-core) | V2Ray 提供了更靈活的路由選項，但設置較為複雜，AimiliVPN 提供了更簡單的安裝和使用體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 是一個輕量級的代理工具，專注於快速設置和使用，與 AimiliVPN 的自動節點管理形成對比。 | 如果需要快速設置且不需要自動化功能，Shadowsocks 會是更好的選擇。 | low，因為 Shadowsocks 的配置相對簡單，易於上手。 |
| [v2ray/v2ray-core](https://github.com/v2ray/v2ray-core) | V2Ray 提供了更靈活的路由選項，適合複雜的網路需求，而 AimiliVPN 更加專注於簡化使用體驗。 | 如果需要高度自定義的路由功能，V2Ray 是更好的選擇。 | medium，因為 V2Ray 的配置較為複雜，可能需要重新學習。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aimili-vpngate** | **shadowsocks** | **v2ray-core** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 是一個輕量級的代理工具，專注於快速設置和使用，與 AimiliVPN 的自動節點管理形成對比。 | V2Ray 提供了更靈活的路由選項，適合複雜的網路需求，而 AimiliVPN 更加專注於簡化使用體驗。 |
> | 遷移成本 | - | low，因為 Shadowsocks 的配置相對簡單，易於上手。 | medium，因為 V2Ray 的配置較為複雜，可能需要重新學習。 |
> | 適用場景 | 主要場景 | 如果需要快速設置且不需要自動化功能，Shadowsocks  | 如果需要高度自定義的路由功能，V2Ray 是更好的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 默認只綁定了 0.0.0.0，無法使用 IPv6 訪問。
  - 解法：手動修改配置以支持 IPv6。
- [MEDIUM] 可能無法拉取免費的 VPN 列表。
  - 解法：檢查網路連接或使用其他來源的 VPN 列表。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的 VPN 需求 | 非常適合 | 提供穩定的 VPN 連線，適合多用戶同時使用。 |
| 個人開發者的測試環境 | 適合 | 簡單的安裝過程，能快速設置 VPN 測試環境。 |
| 大型企業的核心系統 | 不適合 | 目前處於 alpha 階段，穩定性不足，不建議用於生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到穩定的 VPN 連線，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> AimiliVPN 本身不需要高權限，但在使用過程中會存取網路和環境變數。依賴鏈的信任程度較高，無已知的供應鏈風險。

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
| Open Issues | 7 |
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

**社群活躍度**：社群活躍度高，最近有多個提交和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-28）
> **活躍天數** 1 天 · **最新 commit** feat: optimize node fetching with conditional retries and implement post-connection proxy health che

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/baoweise-bot/aimili-vpngate/issues/8) | 默认只绑定了0.0.0.0，没有绑定[::]，无法使用ipv6访问 | 0 | 0 |
> | [#6](https://github.com/baoweise-bot/aimili-vpngate/issues/6) | 能不能让我们主动拉特定国家的IP列表 | 0 | 0 |
> | [#5](https://github.com/baoweise-bot/aimili-vpngate/issues/5) | 可以把安全后缀取消吗？ | 0 | 1 |
> | [#4](https://github.com/baoweise-bot/aimili-vpngate/issues/4) | 拉取不到免费的vpn列表 | 0 | 1 |

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

相關概念：[[VPN]] · [[代理服務]] · [[策略路由]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]] · [[denuitt1--mhr-cfw|denuitt1/mhr-cfw]]

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
> const concepts = ["VPN","代理服務","策略路由"];
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

- [[2026-05-31|2026-05-31]] — 再次上榜，512 stars
- [[2026-05-30|2026-05-30]] — 首次收錄，401 stars
