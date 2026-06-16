---
repo: baoweise-bot/aimili-vpngate
url: https://github.com/baoweise-bot/aimili-vpngate
owner: baoweise-bot
owner_type: User
language: Python
license: NOASSERTION
description: "aimili-vpngate是一个借助vpngate.net让Linux用干净ip出站的代理工具。"
homepage: ""
stars: 1073
stars_per_day: 51
forks: 370
open_issues: 16
created: 2026-05-25
pushed_at: 2026-06-13
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
use_case: "提供基於 VPNGate 的高性能代理服務，讓 Linux 用戶能夠使用乾淨的 IP 出站。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-08"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 142
readme_length: 7844
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:401,2026-05-30:413,2026-05-31:512,2026-05-31:512,2026-06-01:655,2026-06-01:656,2026-06-02:702,2026-06-03:742,2026-06-04:798,2026-06-05:832,2026-06-06:870,2026-06-07:911,2026-06-08:928,2026-06-09:981,2026-06-10:992,2026-06-11:1012,2026-06-12:1024,2026-06-13:1034,2026-06-14:1049,2026-06-15:1062,2026-06-16:1073"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "aimili-vpngate"
  - "baoweise-bot/aimili-vpngate"
  - "提供基於 VPNGate 的高性能代理服務，讓 Linux 用戶能夠使用乾淨的 IP 出站。"
---

# aimili-vpngate

**1.1k** stars · **51** stars/天 · 建立 21 天前 · Python · NOASSERTION

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
> 提供基於 VPNGate 的高性能代理服務，讓 Linux 用戶能夠使用乾淨的 IP 出站。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (51 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在 Linux 環境中快速設置 VPN 代理的用戶，尤其是對技術細節不太熟悉的使用者。
> **一句話重點** AimiliVPN 的設計理念是簡化 VPN 使用流程，讓非技術用戶也能輕鬆上手。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到一個簡單易用的 VPN 代理工具，值得嘗試。

> [!abstract] 核心創新
> AimiliVPN 提供了一個零依賴的高性能 VPN 代理解決方案，專為 Linux 環境設計。

## 專案簡介

AimiliVPN 是一款基於 VPNGate 開放協議的高性能 VPN 代理工具，專為 Linux 系統設計。用戶只需在 VPS 上執行簡單的部署命令，即可快速設置代理服務。其核心功能包括自動節點測試、智能路由選擇和本地代理設置，能夠有效地隱藏用戶的真實 IP。用戶可以透過 Web 管理界面輕鬆管理和監控代理狀態，並且支持 SOCKS5 和 HTTP 協議。這個工具的賣點在於其零依賴的設計，讓用戶無需額外安裝其他庫或工具。

技術上，AimiliVPN 使用 Python 標準庫編寫，這意味著它的部署和運行環境相對輕量。相比於其他 VPN 工具如 Shadowsocks 和 OpenVPN，AimiliVPN 提供了更簡單的管理界面和更高的自動化程度，特別適合不想深入技術細節的用戶。儘管如此，使用者仍需注意 VPS 的防火牆設置，因為未開放必要端口可能會導致無法訪問管理界面或代理服務。這個工具目前處於活躍開發階段，社群反饋和問題解決率較低，可能會影響使用體驗。總體來說，AimiliVPN 是一個適合需要快速設置 VPN 代理的用戶，特別是對於 Linux 環境的支持非常友好。

**技術棧**：`Python 3` · `Shell`

## 重點功能

- 一鍵部署 — 支持 Debian/Ubuntu/CentOS/Alpine 等 Linux 系統，使用簡單的 bash 命令進行安裝。
- 智能路由選擇 — 提供自動配置和固定國家/地區的選擇，方便用戶根據需求切換。
- 本地代理服務 — 默認僅綁定在本地回環地址，確保安全性，使用 `127.0.0.1:7928` 作為代理端口。
- 多路由模式 — 支持多個出口節點，並能自動切換到延遲最低的節點。
- 實時日誌監控 — 提供詳細的系統診斷和日誌追蹤功能，方便用戶檢查連接狀態。

## 快速開始

1. 在 VPS 上執行部署命令
```bash
bash <(curl -s https://raw.githubusercontent.com/baoweise-bot/aimili-vpngate/main/install.sh)
```
2. 訪問管理界面
```bash
在瀏覽器中打開 http://your_vps_ip:8787
```
3. 設置本地代理
```bash
export http_proxy="http://127.0.0.1:7928" && export https_proxy="http://127.0.0.1:7928"
```

## 程式碼範例

```python
{
  "前置條件": "已經成功部署 AimiliVPN 並啟動代理服務。",
  "指令": "import requests\nproxies = {\n    \"http\": \"http://127.0.0.1:7928\",\n    \"https\": \"http://127.0.0.1:7928\",\n}\nresponse = requests.get(\"https://www.google.com\", proxies=proxies)",
  "預期輸出": "返回 Google 的網頁內容。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天內累積 1073 stars（51/天），forks 370（34.5%），顯示出強烈的社群參與。作者 baoweise-bot 似乎專注於開發簡單易用的 VPN 解決方案，這解決了許多用戶在使用傳統 VPN 工具時的複雜性和依賴問題。此工具的推出正值對於隱私和安全需求上升的時期，特別是在全球範圍內對於網路監控的擔憂加劇。社群中對於其功能的需求和反饋也促進了其快速成長，儘管目前有多個開放的問題尚未解決。

## 適合誰使用

**目標受眾**：需要在 Linux 環境中快速設置 VPN 代理的用戶，尤其是對技術細節不太熟悉的使用者。

> [!example] 使用場景
> - 系統管理員用它來在 VPS 上快速設置 VPN 代理，因為它支持一鍵部署，節省了大量配置時間。
> - 開發者用它來測試應用的地區限制功能，因為可以輕鬆切換不同國家的 IP，提升測試效率。
> - 普通用戶用它來保護上網隱私，因為其簡單的管理界面和自動節點切換功能降低了使用門檻。

## 架構分析

AimiliVPN 採用單一 Python 應用架構，所有功能均在一個程式中實現，這樣的設計使得部署和維護變得簡單。資料流方面，使用者的請求通過本地代理端口發送，然後由 AimiliVPN 轉發至 VPNGate 的節點。這種設計的優勢在於簡化了用戶的操作流程，降低了使用門檻，但也可能在高流量時導致性能瓶頸。若使用者需要處理大量請求，可能會遇到延遲問題。整體而言，AimiliVPN 的架構適合小型到中型的使用場景，對於大型企業級應用則可能需要更強大的架構設計。

## 技術深入分析

AimiliVPN 的核心技術機制在於其基於 Python 標準庫的實現，這使得它在安裝和運行上無需額外依賴。其使用的多線程技術能夠在節點測試時顯著提高效率，這對於需要快速連接的用戶來說是個優勢。從效能上看，AimiliVPN 能夠支持多個用戶同時連接，但在高流量的情況下可能會出現延遲。設計上，選擇 Python 作為開發語言使得開發和維護成本較低，但也可能在性能上不如 C/C++ 實現的工具。技術風險方面，隨著用戶數量的增加，可能會對 VPS 的資源造成壓力，導致性能下降。整合方面，AimiliVPN 目前並未提供與主流 CI/CD 工具的整合支持，這可能會影響其在開發流程中的應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指南，對於新手來說相對友好。安裝過程中需要注意 VPS 的防火牆設置，這可能會造成一些困擾。整體上，文件的結構合理，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的部署過程，適合新手用戶。
> - 自動節點切換功能，提升了連接的穩定性。
> - 內建的日誌追蹤功能，方便用戶監控和排查問題。

> [!danger] 缺點
> - 僅支持 Linux 系統，對於其他平台的支持不足。
> - 社群活躍度較低，問題解決速度慢。
> - 需要 VPS 提供商支持 TUN/TAP 設備，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Linux 系統，對於 Windows 或 macOS 用戶不友好。
> - 需要 VPS 提供商支持 TUN/TAP 設備，否則無法正常運行。
> - 目前社群反饋和問題解決率低，可能影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 是一個輕量級的代理工具，專注於隱私保護，但需要更多的配置和管理，適合技術用戶。 |
| [openvpn/openvpn](https://github.com/openvpn/openvpn) | OpenVPN 提供更全面的 VPN 解決方案，支持多種平台，但配置複雜，對於新手不友好。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 使用了更複雜的加密技術，提供更高的安全性，但配置過程相對繁瑣。 | 如果需要更高的安全性和靈活性，並且不介意進行更多的配置，則 Shadowsocks 是更好的選擇。 | medium，因為需要重新配置代理設置和可能的服務器環境。 |
| [openvpn/openvpn](https://github.com/openvpn/openvpn) | OpenVPN 提供全面的 VPN 解決方案，支持多種平台和協議，但相對於 AimiliVPN，使用上更為複雜。 | 適合需要跨平台支持和高級功能的用戶，尤其是企業級應用。 | high，因為需要重新設置 VPN 服務和用戶端配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aimili-vpngate** | **shadowsocks** | **openvpn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 使用了更複雜的加密技術，提供更高的安全性，但配置過程相對繁瑣。 | OpenVPN 提供全面的 VPN 解決方案，支持多種平台和協議，但相對於 AimiliVPN，使用上更為複雜。 |
> | 遷移成本 | - | medium，因為需要重新配置代理設置和可能的服務器環境。 | high，因為需要重新設置 VPN 服務和用戶端配置。 |
> | 適用場景 | 主要場景 | 如果需要更高的安全性和靈活性，並且不介意進行更多的配置，則  | 適合需要跨平台支持和高級功能的用戶，尤其是企業級應用。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和學習，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** VPS 未啟用 TUN/TAP 會導致無法運行
  - 解法：聯繫 VPS 提供商啟用 TUN/TAP 功能
- **[HIGH]** 防火牆未開放端口會導致無法訪問管理界面
  - 解法：確保開放 8787 和 7928 端口
- [MEDIUM] 節點測試過程中可能會出現連接失敗
  - 解法：手動更新節點列表，檢查網路狀態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 VPN 代理需求 | 非常適合 | 簡單的部署和管理流程，適合不具備技術背景的用戶。 |
| 需要高安全性的企業環境 | 不適合 | 缺乏強加密和安全性設計，可能不符合企業需求。 |
| 個人使用的科學上網需求 | 適合 | 能夠快速設置和使用，滿足個人隱私需求。 |
| 大型企業的多用戶 VPN 解決方案 | 普通 | 雖然支持多用戶，但在高流量下性能可能不佳。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到一個簡單易用的 VPN 代理工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> AimiliVPN 本身不需要高權限運行，但使用時需注意防火牆設置以避免未授權訪問。其依賴的 Python 標準庫相對安全，但仍需定期檢查依賴的安全性。

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
| Forks | 370 |
| Open Issues | 16 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-13 |
| 建立日期 | 2026-05-25 |
| Repo 大小 | 142 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/baoweise-bot/aimili-vpngate) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 85
>     "Shell" : 15
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@baoweise-bot](https://github.com/baoweise-bot) | 54 |

## 社群與生態

**社群活躍度**：社群活躍度較低，開放問題解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-05 ~ 2026-06-08）
> **活躍天數** 3 天 · **最新 commit** chore: remove test development version instructions from README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/baoweise-bot/aimili-vpngate/issues/20) | macos在Edge中访问应用网页后台有问题 | 0 | 0 |
> | [#19](https://github.com/baoweise-bot/aimili-vpngate/issues/19) | 全部节点都变成不可用了 | 0 | 0 |
> | [#18](https://github.com/baoweise-bot/aimili-vpngate/issues/18) | 不能自定义本地代理的账号密码吗？ | 0 | 0 |
> | [#17](https://github.com/baoweise-bot/aimili-vpngate/issues/17) | 能否添加多端口 多出口，配合3x-ui 实现代理不同国家？ | 0 | 0 |
> | [#16](https://github.com/baoweise-bot/aimili-vpngate/issues/16) | more different ips | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # AimiliVPN 🌐
> 
> Bilingual: [中文](#中文) | [English](#english)
> 
> ---
> 
> ## 中文 (Chinese)
> 
> AimiliVPN 是一款基于官方 VPNGate 开放协议的高性能、零依赖 VPN 代理网关。它以纯 Python 标准库编写，内置美观响应式的管理网页，提供智能并发测速、多路由模式、出站代理网关、实时日志等强大功能。
> 
> ### 📢 官方交流与反馈
> [](https://t.me/arestemple)
> [](https://339936.xyz)
> [](https://www.youtube.com/watch?v=s-ATfXR8BpI)
> [](mailto:yaohunse7@gmail.com)
> 
> ---
> 
> ### 🚀 一键极速部署 (支持 Debian/Ubuntu/CentOS/Alpine 等 Linux 系统)
> 
> 在您的 Linux VPS 上以 root 用户执行以下对应命令：
> 
> #### 🌟 正式稳定版本 (main 分支)
> ```bash
> bash  💡 **小贴士**：部署完成后，终端会输出管理网页的专属链接（含随机安全后缀，如 `http://your_vps_ip:8787/u71e9IXp4TPx`）。在终端中输入 `ml` 命令可以随时调出交互式命令行管理菜单。
> 
> ---
> 
> ### 💡 快速使用指南 (小白必看)
> 
> 部署成功后，如何使用它进行科学上网？
> 
> #### 第一步：登录 Web 管理后台
> 打开浏览器，访问部署完成时提示的专属后台地址（含安全后缀），即可进入精美的暗黑玻璃拟物风管理界面。
> 
> #### 第二步：获取并连接节点
> 1. 首次进入后台，节点列表可能正在进行首次自动测速与拉取。
> 2. 点击 **“更新节点”** 按钮（或通过网页下方的网关/日志进行状态检查），程序会在后台通过多线程并发测速，自动筛选出延迟最低、可连接的 VPNGate 节点。
> 3. 选择您喜欢的出站路由模式：
>    - **智能自动配置**（推荐）：如果当前连接的节点失效，系统会在数秒内自动漂移连接至其他备用健康节点，无需手动干预。
>    - **固定国家地区**：只选择指定国家（如日本 JP、韩国 KR、美国 US）的最佳节点。
>    - **固定 IP 节点**：始终锁定连接到这一个特定节点。
> 
> #### 第三步：使用本机代理 (核心步骤)
> 为了防止代理端口暴露至公网被恶意扫描和滥用，AimiliVPN 的双效代理服务（默认端口 **`7928`**，自适应支持 SOCKS5 和 HTTP 协议）**默认仅绑定在本地回环地址（`127.0.0.1`）**，只接收 VPS 本机上的流量，不对外机提供代理。
> 
> * **🐍 Python 脚本中使用代理**:
>   ```python
>   import requests
>   proxies = {
>       "http": "http://127.0.0.1:7928",
>       "https": "http://127.0.0.1:7928",
>   }
>   response = requests.get("https://www.google.com", proxies=proxies)
>   ```
> * **🐚 Shell 终端环境中使用代理**:
>   在命令行执行以下命令，可以让当前终端的后续命令（如 `curl`、`wget` 等）走代理出口：
>   ```bash
>   export http_proxy="http://127.0.0.1:7928"
>   export https_proxy="http://127.0.0.1:7928"
>   ```
> * **⚙️ 本地其他服务配置**:
>   将本机的其他代理工具、爬虫框架或服务的出战代理设置为 `127.0.0.1:7928`。
> 
> > 💡 **小贴士**：如果您确实需要对公网其他设备开放此代理端口，可以通过设置环境变量 `export LOCAL_PROXY_HOST="::"` 重新启动服务以允许公网接入。
> 
> ---
> 
> ### 🛠️ 核心功能与操作说明
> 
> * **合并操作面板**：将“更新节点”与“立即检测补齐”合并，一键触发多线程拉取与测速。
> * **网关状态面板**：
>   - **系统诊断**：检测网关心跳及后台各个子守护线程（网页服务、VPN连接管理、出站网关服务）是否正常运行。若有脚本未运行，会提示具体的异常原因。
>   - **本地代理出口检测**：在网页端直接一键检测 VPS 后台对海外的实际连通状况，并回显真实的代理出站 IP 和所在地理位置。
> * **日志追踪面板**：
>   - **分类过滤**：可精准筛选查看特定功能的日志（如 VPN 连接日志、API 请求日志、系统异常等）。
>   - **实时滚动与管理**：日志实时滚动加载，支持一键复制代码、一键导出 `.log` 日志文件到本地。
> 
> ---
> 
> ### ⚠️ 小白安装与运行常见问题 (FAQ)
> 
> #### 1. 提示 `Cannot allocate tun` 或 `Cannot open tun/tap dev`
> * **原因**：VPS 宿主机未启用虚拟网卡（TUN/TAP 设备）。这种情况常见于 LXC 或 OpenVZ 架构的轻量 VPS。
> * **解决办法**：请登录您的 VPS 服务商控制面板（如 SolusVM/Proxmox），找到 **Enable TUN/TAP** / **开启 TUN** 选项并启用，然后重启 VPS。如无此选项，请工单联系客服开启。
> 
> #### 2. 网页管理后台无法打开（链接超时或拒绝连接）
> * **原因 1**：VPS 本身自带防火墙（如 UFW、firewalld 或 iptables）阻断了管理端口（默认 `8787`）或代理端口（默认 `7928`）。
> * **解决办法 1**：请在终端放行对应端口：
>   * **UFW (Ubuntu/Debian)**: `ufw allow 8787/tcp && ufw allow 7928/tcp`
>   * **Firewalld (CentOS/RHEL)**: `firewall-cmd --zone=public --add-port=8787/tcp --permanent && firewall-cmd --zone=public --add-port=7928/tcp --permanent && firewall-cmd --reload`
> * **原因 2**：云服务商的“安全组”或“网络访问控制列表 (ACL)”未放行端口。
> * **解决办法 2**：**非常重要！** 登录云服务商控制台（如阿里云、腾讯云、AWS、Oracle Cloud等），找到您 VPS 实例的 **安全组规则 (Security Group)**，在入站规则中添加：
>   - **协议类型**: `TCP`
>   - **端口范围**: `8787` (管理网页) 和 `7928` (代理端口)
>   - **授权对象/源IP**: `0.0.0.0/0` (允许所有人，或指定您自己的家庭公网 IP 提高安全性)
> 
> #### 3. 页面提示 `API Domain Blocked` 且备选节点显示为 0
> * **原因**：您的 VPS DNS 解析异常，或者官方 VPNGate 域名遭防火墙拦截污染，导致无法下载节点列表。
> * **解决办法**：
>   * **设置上游代理**：如果您有其他可用的代理服务，可在网页管理面板中打开“管理员 -> 代理及网络设置”，配置有效的 HTTP/SOCKS5 上游代理，后台会自动通过该代理拉取更新。
>   * **修改 DNS 解析器**：在终端修改 `/etc/resolv.conf`，将域名服务器替换为公共 DNS（如 `nameserver 8.8.8.8` 和 `nameserver 1.1.1.1`）。
> 
> #### 4. VPN 已成功连接，但客户端设置代理后无法上网 (无流量)
> * **原因**：部分系统启用了严格的反向路径过滤（`rp_filter`），导致策略路由的入站/出站数据包被系统误判丢弃。
> * **解决办法**：在终端输入 `ml` 命令打开交互菜单，工具会自动检测并提示您将 `rp_filter` 修复为宽松模式（值为 `2`）。
> 
> ---
> 
> ### 🎁 捐赠支持项目开发
> 
> 如果您觉得这个项目对您有所帮助，欢迎捐赠支持我们的后续开发与维护：
> 
> * **BNB (BSC / BEP20)**: `0xB6d78c42CEB0687A31B8cfEBE4b51b6eB8953C17`
> * **TRX (TRC20)**: `TSdzCW6JvsrqcppodYjhSrku4mYmDJ9pxf`
> 
> 感谢您的慷慨与支持！❤️
> 
> ---
> 
> ## English
> 
> AimiliVPN is a high-performance, zero-dependency VPN proxy gateway built entirely using Python's standard library. It parses official VPNGate servers, benchmarks latency, and routes traffic through a built-in dual-protocol (HTTP/SOCKS5) proxy server.
> 
> ### 📢 Community & Feedback
> - **Telegram Group**: [arestemple](https://t.me/arestemple)
> - **Discussion Forum**: [339936.xyz](https://339936.xyz)
> - **Video Tutorial**: [YouTube Guide](https://www.youtube.com/watch?v=s-ATfXR8BpI)
> - **Email Contact**: yaohunse7@gmail.com
> 
> ---
> 
> ### 🚀 One-Click Installation
> 
> Run the corresponding command on your Linux VPS as root:
> 
> #### 🌟 Stable Release (main branch)
> ```bash
> bash  💡 **Quick Note**: Once installed, copy the printed URL from the terminal to access the Web UI. Type the `ml` command in the terminal to summon the interactive CLI management console.
> 
> ---
> 
> ### 💡 Quick Start Guide
> 
> #### Step 1: Access the Web UI
> Open your browser and navigate to the printed URL (e.g. `http://your_vps_ip:8787/u71e9IXp4TPx`).
> 
> #### Step 2: Select Node and Mode
> 1. Wait for the program to complete its first automatic node speed benchmarks.
> 2. Under "Admin", you can trigger node fetching. The backend concurrently tests official VPNGate nodes and ranks them by latency.
> 3. Switch routes mode (Smart Auto, Specific Region, or Specific Server Node) according to your needs.
> 
> #### Step 3: Use Localhost Proxy (Core Step)
> To prevent unauthorized scanning and abuse of the proxy port on the public internet, the built-in HTTP/SOCKS5 proxy server (default port **`7928`**) **binds to localhost (`127.0.0.1`) by default**. It is designed to route traffic generated locally on the VPS, rather than acting as a public proxy server.
> 
> * **🐍 Proxy in Python**:
>   ```python
>   import requests
>   proxies = {
>       "http": "http://127.0.0.1:7928",
>       "https": "http://127.0.0.1:7928",
>   }
>   response = requests.get("https://www.google.com", proxies=proxies)
>   ```
> * **🐚 Proxy in Shell terminal**:
>   ```bash
>   export http_proxy="http://127.0.0.1:7928"
>   export https_proxy="http://127.0.0.1:7928"
>   ```
> * **⚙️ Other local services**:
>   Configure your scrapers, frameworks, or utility tools on this VPS to send traffic via `127.0.0.1:7928`.
> 
> > 💡 **Quick Note**: If you really need to open this proxy port to the public internet, you can set the environment variable `export LOCAL_PROXY_HOST="::"` before running the manager.
> 
> ---
> 
> ### ⚠️ Common Troubleshooting (FAQ)
> 
> #### 1. Error: `Cannot allocate tun` or `Cannot open tun/tap dev`
> * **Reason**: Virtual network adapter (TUN/TAP device) is disabled. This is common in OpenVZ/LXC VPS instances.
> * **Solution**: Enable **TUN/TAP** in your VPS SolusVM/KiwiVM control panel, or submit a support ticket to your hosting provider.
> 
> #### 2. Cannot open the Web UI in the browser
> * **Reason 1**: The built-in firewall (UFW or firewalld) is blocking ports `8787` (Web UI) and `7928` (Proxy).
> * **Solution 1**: Allow the ports in your OS firewall:
>   * **UFW**: `ufw allow 8787/tcp && ufw allow 7928/tcp`
>   * **Firewalld**: `firewall-cmd --add-port=8787/tcp --permanent && firewall-cmd --add-port=7928/tcp --permanent && firewall-cmd --reload`
> * **Reason 2**: Service provider security group blocking ports.
> * **Solution 2**: **Crucial!** Log in to your cloud provider console (AWS, Aliyun, Oracle Cloud, etc.), locate the **Security Group** for your instance, and add an inbound TCP rule to allow ports `8787` and `7928` from `0.0.0.0/0`.
> 
> #### 3. "API Domain Blocked" / Candidate nodes pool is empty (0 nodes)
> * **Reason**: The official VPNGate domain is blocked or DNS resolution failed on your VPS.
> * **Solution**: Add an HTTP/SOCKS5 upstream proxy in the settings panel (Admin -> Proxy Settings), or configure public DNS in `/etc/resolv.conf` (e.g., `nameserver 8.8.8.8`).
> 
> ---
> 
> ### 🎁 Donation Support
> 
> If you find this project helpful, you can support its development and maintenance via donation:
> 
> * **BNB (BSC / BEP20)**: `0xB6d78c42CEB0687A31B8cfEBE4b51b6eB8953C17`
> * **TRX (TRC20)**: `TSdzCW6JvsrqcppodYjhSrku4mYmDJ9pxf`
> 
> Thank you for your generosity and support! ❤️

## 延伸閱讀

相關概念：[[VPN]] · [[代理服務]] · [[隱私保護]]

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
> const concepts = ["VPN","代理服務","隱私保護"];
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

- [[2026-06-01|2026-06-01]] — 再次上榜，655 stars
- [[2026-05-31|2026-05-31]] — 再次上榜，512 stars
- [[2026-05-30|2026-05-30]] — 首次收錄，401 stars
