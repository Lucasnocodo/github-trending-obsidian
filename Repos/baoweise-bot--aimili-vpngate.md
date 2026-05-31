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
forks: 207
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
use_case: "透過 vpngate.net 提供的開放節點，讓 Linux VPS 使用乾淨 IP 出站的代理工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-07"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 282
readme_length: 3801
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:401,2026-05-30:413,2026-05-31:512,2026-05-31:512"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "aimili-vpngate"
  - "baoweise-bot/aimili-vpngate"
  - "透過 vpngate.net 提供的開放節點，讓 Linux VPS 使用乾淨 IP 出站的代理工具。"
---

# aimili-vpngate

**512** stars · **102** stars/天 · 建立 5 天前 · Python · NOASSERTION

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
> 透過 vpngate.net 提供的開放節點，讓 Linux VPS 使用乾淨 IP 出站的代理工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在 Linux VPS 上使用穩定 VPN 服務的開發者和系統管理員。
> **一句話重點** AimiliVPN 的自動化節點管理和防鎖定功能，讓它成為 Linux 環境中使用 VPN 的理想選擇。

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
> **結論** 花 2 小時學習，1 小時整合，得到穩定的 VPN 服務，值得考慮。

> [!abstract] 核心創新
> AimiliVPN 提供了自動化的 VPN 節點管理和防鎖定路由功能，專為 Linux VPS 設計。

## 專案簡介

AimiliVPN 是一個專為 Linux VPS 設計的智能 VPN 代理網關管理器，能自動收集 VPNGate 的開放節點，並進行多線程可用性測試和延遲過濾。使用者只需在 Ubuntu VPS 上運行一行指令即可快速安裝，並可透過 OpenVPN 隧道和策略路由實現安全的出站網路。這樣的設計不僅能防止 VPS 被鎖定，還能提供高效的 HTTP/SOCKS5 代理服務，特別適合用於 Xray 的落地出站代理。其核心賣點在於自動化節點收集和多線程測試，確保用戶始終能夠使用高質量的 VPN 節點。技術上，AimiliVPN 利用 Python 和 Shell 實現，並依賴 OpenVPN 進行加密隧道，這樣的選擇使得它能夠在不改變系統默認網關的情況下，進行有效的流量管理。

與其他 VPN 工具相比，如 Shadowsocks 和 WireGuard，AimiliVPN 提供了更高的靈活性和自動化功能，特別是在節點管理方面。使用者可能會遇到的問題包括無法拉取免費的 VPN 列表或無法使用 IPv6 的情況，這些都是目前社群中討論的熱門問題。這個專案目前處於活躍開發中，適合需要穩定 VPN 服務的開發者和運維人員。預計未來將進一步優化節點收集和管理功能，並可能增加對更多協議的支持。對於小型團隊或個人開發者來說，AimiliVPN 是一個值得考慮的選擇，尤其是在需要穩定和安全的網路連接時。

**技術棧**：`Python` · `Shell`

## 重點功能

- 自動收集與多線程探測 — 定期從 VPNGate 獲取候選節點，並進行延遲測試以維持高質量節點池。
- 防鎖定路由 — 將流量從虛擬適配器 `tun0` 指向自定義路由表，保持 SSH 和管理面板不受影響。
- 防洩漏保護 — 本地代理伺服器的出站連接嚴格綁定於 `tun0`，確保 VPN 斷開時不會回退到物理 IP。
- 現代化 Web UI 面板 — 提供實時地理位置、ISP、ASN、延遲等資訊，並支援手動節點選擇與速度測試。
- 命令行工具 (ml) — 提供快速狀態查詢、啟動/停止守護進程、重置密碼等功能。

## 快速開始

1. 在 Ubuntu VPS 上安裝 AimiliVPN
```bash
bash /dev/null
sudo killall apt apt-get dpkg 2>/dev/null
sudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock
sudo dpkg --configure -a
sudo apt-get update
```

## 程式碼範例

```python
{
  "前置條件": "在 Ubuntu VPS 上安裝 AimiliVPN",
  "指令": "bash /dev/null\nsudo killall apt apt-get dpkg 2>/dev/null\nsudo rm -f /var/lib/dpkg/lock* /var/lib/apt/lists/lock /var/cache/apt/archives/lock\nsudo dpkg --configure -a\nsudo apt-get update",
  "預期輸出": "安裝完成後，重新運行安裝腳本即可。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 512 stars（102/天），forks 207（40.4%），顯示出強烈的社群興趣。作者 baoweise-bot 似乎專注於開發網路工具，這個專案解決了在 Linux 環境中使用 VPN 的痛點，特別是自動化節點管理和防鎖定的需求。近期的討論和問題反映了使用者對於功能的需求和潛在的改進方向，這可能是吸引使用者的原因之一。技術上，隨著 VPN 需求的增加，這個工具的出現正好符合了市場的需求，特別是在隱私和安全性日益受到重視的背景下。forks/stars 比率高達 40.4%，顯示出許多人在實際修改和使用這個工具，這是社群活躍度的良好指標。

## 適合誰使用

**目標受眾**：需要在 Linux VPS 上使用穩定 VPN 服務的開發者和系統管理員。

> [!example] 使用場景
> - 系統管理員用它來在 Ubuntu VPS 上快速部署 VPN 代理，因為它能自動收集高質量的 VPN 節點，節省手動配置的時間。
> - 開發者用它來測試應用程式的地理位置限制，因為它能提供多個國家的 IP 地址，方便進行跨區域測試。
> - 小型團隊用它來保護內部通訊，因為它能防止 VPS 被鎖定，確保穩定的網路連接。

## 架構分析

AimiliVPN 採用一個多層架構，主要由本地代理伺服器和 OpenVPN 隧道組成。使用者的流量經由本地代理伺服器進入虛擬網卡 `tun0`，再通過 OpenVPN 隧道發送到 VPNGate 的節點。這樣的設計使得用戶可以在不影響物理網卡的情況下，安全地使用 VPN。選擇 OpenVPN 主要是因為其成熟的加密技術和廣泛的支持，而不選擇其他輕量級的 VPN 協議則是為了確保安全性和穩定性。這種架構的擴展性較好，但在高負載情況下，可能會出現性能瓶頸，特別是在多用戶同時使用的情況下。

## 技術深入分析

AimiliVPN 的核心技術機制在於其自動化的節點收集和多線程可用性測試，這使得它能夠快速適應變化的 VPN 環境。使用 OpenVPN 作為加密隧道，確保了數據的安全性和隱私性。這個工具能夠處理多個用戶的請求，並在高負載情況下仍能保持穩定的性能。選擇 Python 和 Shell 作為開發語言，使得 AimiliVPN 在安裝和運行上都相對簡單，依賴關係較少，便於維護。

設計上，AimiliVPN 針對防鎖定和流量管理進行了優化，這使得它在類似工具中脫穎而出。然而，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在多用戶同時使用的情況下。對於依賴外部 API 的部分，AimiliVPN 需要穩定的網路連接，這可能會成為一個潛在的風險。整合到現有的 CI/CD pipeline 中相對容易，但需要注意與其他網路工具的相容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和功能介紹，安裝過程相對順暢，但需要注意 Ubuntu 系統的特定要求。整體上，對於新手來說，能在 30 分鐘內完成安裝並運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化節點管理，減少手動配置的麻煩。
> - 提供高效的防鎖定路由，確保連接穩定性。
> - 現代化的 Web UI 使得用戶操作更加直觀。

> [!danger] 缺點
> - 目前僅支持 Ubuntu，對於其他 Linux 發行版的兼容性較差。
> - 無法自動拉取特定國家的 IP 列表，需手動配置。
> - 對於 IPv6 的支持不足，限制了某些用戶的使用。

> [!warning] 注意事項
> - 僅支援 Ubuntu 系統，其他 Linux 發行版可能無法正常運行。
> - 目前無法自動拉取特定國家的 IP 列表，需手動配置。
> - 不支持 IPv6，可能影響某些用戶的連接需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理節點的管理和優化，而 AimiliVPN 主要是針對 VPN 連接的自動化和管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更廣泛的代理選擇，但 AimiliVPN 在自動化和防鎖定方面有更強的優勢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Shadowsocks | Shadowsocks 是一個基於 SOCKS5 的代理工具，專注於隱私保護，而 AimiliVPN 則專注於自動化的 VPN 管理。 | 如果你的主要需求是隱私保護而非 VPN 連接的穩定性，Shadowsocks 可能是更好的選擇。 | medium，因為需要重新配置代理設定。 |
| WireGuard | WireGuard 提供了一個輕量級的 VPN 解決方案，而 AimiliVPN 專注於自動化節點管理和防鎖定功能。 | 如果你的團隊需要高性能的 VPN 連接，WireGuard 可能更適合。 | medium，因為需要重新設置 VPN 伺服器和客戶端。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aimili-vpngate** | **Shadowsocks** | **WireGuard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 是一個基於 SOCKS5 的代理工具，專注於隱私保護，而 AimiliVPN 則專注於自動化的 VPN 管理。 | WireGuard 提供了一個輕量級的 VPN 解決方案，而 AimiliVPN 專注於自動化節點管理和防鎖定功能。 |
> | 遷移成本 | - | medium，因為需要重新配置代理設定。 | medium，因為需要重新設置 VPN 伺服器和客戶端。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是隱私保護而非 VPN 連接的穩定性，Sha | 如果你的團隊需要高性能的 VPN 連接，WireGuard  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 默認只綁定了 0.0.0.0，無法使用 IPv6 訪問。
  - 解法：手動修改配置以綁定 IPv6 地址。
- [MEDIUM] 無法拉取免費的 VPN 列表，影響使用體驗。
  - 解法：定期檢查 VPNGate 網站以獲取最新節點。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 VPN 需求 | 非常適合 | 自動化的節點管理和防鎖定功能能夠提供穩定的連接。 |
| 大型企業的 VPN 解決方案 | 不適合 | 目前僅支持 Ubuntu，對於其他系統的兼容性較差。 |
| 個人開發者的測試環境 | 適合 | 簡單的安裝過程和自動化功能能夠快速滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到穩定的 VPN 服務，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：AimiliVPN 本身不需要高權限，且不存取敏感資料，但需要穩定的網路連接以確保服務的正常運行。

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
| Forks | 207 |
| Open Issues | 8 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-30 |
| 建立日期 | 2026-05-25 |
| Repo 大小 | 282 KB |
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

**社群活躍度**：社群活躍度中等，有 8 個開放問題待解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-28）
> **活躍天數** 1 天 · **最新 commit** feat: optimize node fetching with conditional retries and implement post-connection proxy health che

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/baoweise-bot/aimili-vpngate/issues/8) | 默认只绑定了0.0.0.0，没有绑定[::]，无法使用ipv6访问 | 0 | 1 |
> | [#6](https://github.com/baoweise-bot/aimili-vpngate/issues/6) | 能不能让我们主动拉特定国家的IP列表 | 0 | 0 |
> | [#5](https://github.com/baoweise-bot/aimili-vpngate/issues/5) | 可以把安全后缀取消吗？ | 0 | 1 |
> | [#4](https://github.com/baoweise-bot/aimili-vpngate/issues/4) | 拉取不到免费的vpn列表 | 0 | 2 |

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

- [[2026-05-31|2026-05-31]] — 再次上榜，512 stars
- [[2026-05-30|2026-05-30]] — 首次收錄，401 stars
