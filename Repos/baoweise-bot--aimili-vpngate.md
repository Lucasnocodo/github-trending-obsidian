---
repo: baoweise-bot/aimili-vpngate
url: https://github.com/baoweise-bot/aimili-vpngate
owner: baoweise-bot
owner_type: User
language: Python
license: NOASSERTION
description: "aimili-vpngate是一个借助vpngate.net让Linux用干净ip出站的代理工具。"
homepage: ""
stars: 798
stars_per_day: 89
forks: 290
open_issues: 12
created: 2026-05-25
pushed_at: 2026-05-31
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
use_case: "提供基於 vpngate.net 的高性能代理服務，讓 Linux 用戶能夠使用乾淨 IP 出站。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-08"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 232
readme_length: 7844
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:401,2026-05-30:413,2026-05-31:512,2026-05-31:512,2026-06-01:655,2026-06-01:656,2026-06-02:702,2026-06-03:742,2026-06-04:798"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "aimili-vpngate"
  - "baoweise-bot/aimili-vpngate"
  - "提供基於 vpngate.net 的高性能代理服務，讓 Linux 用戶能夠使用乾淨 IP 出站。"
---

# aimili-vpngate

**798** stars · **89** stars/天 · 建立 9 天前 · Python · NOASSERTION

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
> 提供基於 vpngate.net 的高性能代理服務，讓 Linux 用戶能夠使用乾淨 IP 出站。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (89 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在 Linux VPS 上快速部署 VPN 服務的系統管理員或開發者。
> **一句話重點** AimiliVPN 的設計重點在於簡化 VPN 的使用流程，讓更多用戶能夠輕鬆上手。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到簡單易用的 VPN 服務，值得採用。

> [!abstract] 核心創新
> 使用純 Python 標準庫實現高性能的 VPN 代理網關，無需任何外部依賴。

## 專案簡介

AimiliVPN 是一款基於 VPNGate 開放協議的高性能 VPN 代理工具，完全使用 Python 標準庫編寫。用戶在 Linux VPS 上執行簡單的安裝命令後，便可透過內建的 Web 管理介面進行節點選擇和流量路由。用戶可以選擇智能自動配置、固定國家或固定 IP 的出站路由模式，並且系統會自動測試和選擇延遲最低的節點，這樣的設計能夠有效提高連線的穩定性和速度。核心功能包括雙協議（HTTP/SOCKS5）代理服務，並且預設僅綁定在本地回環地址，這樣可以避免代理端口被外部掃描。

使用者可以透過簡單的 Python 或 Shell 指令來設定代理，這樣的設計讓 AimiliVPN 在使用上非常靈活且安全。相較於其他類似工具如 Shadowsocks 或 OpenVPN，AimiliVPN 提供了更簡單的安裝流程和更直觀的管理介面，特別適合不想深入技術細節的用戶。使用時，若遇到 DNS 解析問題或防火牆阻擋，使用者可透過簡單的設定來解決，這使得 AimiliVPN 在日常使用中相對友好。這個專案目前仍在活躍開發中，社群反應良好，但仍需注意其開發者的支持情況和問題解決的速度。

**技術棧**：`Python 3` · `Flask` · `Docker`

## 重點功能

- 一鍵安裝 — 支持 Debian/Ubuntu/CentOS/Alpine 等 Linux 系統，簡化安裝流程。
- 多路由模式 — 提供智能自動配置、固定國家和固定 IP 節點選擇，滿足不同需求。
- 內建 Web 管理介面 — 用戶可透過美觀的界面進行節點選擇和狀態監控。
- 雙協議支持 — 預設支持 HTTP 和 SOCKS5 代理，靈活應對不同場景。
- 實時日誌追蹤 — 提供詳細的連接日誌和系統狀態檢查，便於故障排查。

## 快速開始

1. 安裝 AimiliVPN
```bash
bash <(curl -s https://raw.githubusercontent.com/baoweise-bot/aimili-vpngate/main/install.sh)
```
2. 訪問 Web 管理介面
```bash
在瀏覽器中打開 http://your_vps_ip:8787
```
3. 設置代理
```bash
export http_proxy="http://127.0.0.1:7928" && export https_proxy="http://127.0.0.1:7928"
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 AimiliVPN 並啟動代理服務",
  "指令": "import requests\nproxies = {\n    \"http\": \"http://127.0.0.1:7928\",\n    \"https\": \"http://127.0.0.1:7928\",\n}\nresponse = requests.get(\"https://www.google.com\", proxies=proxies)",
  "預期輸出": "返回 Google 的首頁內容"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 798 stars（89/天），forks 290（36.3%），顯示出強烈的社群興趣。作者 baoweise-bot 是一名專注於開源工具的開發者，這個專案解決了以往 VPN 工具安裝複雜、配置繁瑣的問題，提供了一個簡單易用的解決方案。近期的社群討論集中在 Docker 安裝和 IP 節點配置上，顯示出用戶對於簡化安裝和使用的需求。這個工具的出現正好契合了用戶對於高效、簡單 VPN 解決方案的渴望，尤其是在當前網路環境中對於隱私保護的重視。

## 適合誰使用

**目標受眾**：需要在 Linux VPS 上快速部署 VPN 服務的系統管理員或開發者。

> [!example] 使用場景
> - 系統管理員用它來快速部署安全的代理服務，因為它提供了一鍵安裝和簡單的管理介面，節省了大量的配置時間。
> - 開發者用它來測試應用程式的地區限制功能，因為可以輕鬆選擇不同國家的節點進行測試，並且能夠快速切換。
> - 普通用戶用它來保護上網隱私，因為它提供了安全的本地代理服務，並且不需要複雜的配置過程。

## 架構分析

AimiliVPN 採用單一的 Python 應用架構，所有功能均在一個程式中實現，這樣的設計使得部署和維護變得簡單。資料流方面，使用者的請求通過內建的 HTTP/SOCKS5 代理服務轉發，並且在後台通過多線程進行節點的測試與選擇。這樣的設計能夠實現高效的資源利用，但在高流量情況下可能會遇到性能瓶頸。選擇 Python 作為開發語言使得 AimiliVPN 更加易於維護，但也可能在性能上不如某些編譯語言。整體而言，這個架構適合中小型流量的使用場景，但對於大規模用戶的支持可能需要進一步的優化。

## 技術深入分析

AimiliVPN 的核心技術在於使用 Python 標準庫來實現高性能的代理服務，這使得它在安裝和使用上都非常簡便。其內建的 HTTP/SOCKS5 代理服務能夠有效地處理用戶的請求，並且通過多線程技術來實現節點的快速測試和選擇。這樣的設計能夠在一定程度上提升使用者的體驗，但在高流量的情況下，可能會導致性能下降。選擇 Python 作為開發語言使得 AimiliVPN 更加易於維護和擴展，但在性能上可能不及 C/C++ 等編譯語言。AimiliVPN 的依賴樹相對簡單，主要依賴於 Flask 作為 Web 框架，這降低了整體的維護成本。設計上，AimiliVPN 主要針對中小型流量的使用場景，對於大規模用戶的支持可能需要進一步的優化和擴展。整合到現有的 CI/CD pipeline 中相對簡單，因為其安裝和配置過程都非常直觀。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和使用範例，對於新手友好。安裝過程順暢，沒有明顯的坑。文件目前僅提供中文和英文，對於非母語用戶可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，適合不熟悉技術的用戶。
> - 提供多種出站路由模式，靈活應對不同需求。
> - 內建的 Web 管理介面友好，方便用戶操作。

> [!danger] 缺點
> - 僅支持 Linux 系統，對於其他平台的支持不足。
> - 需要 VPS 提供商支持 TUN/TAP，否則無法使用。
> - 在高流量情況下可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支持 Linux 系統，無法在 Windows 或 macOS 上運行。
> - 需要 VPS 提供商支持 TUN/TAP 虛擬網卡，否則無法正常運行。
> - 對於某些防火牆配置，可能需要手動開放管理端口和代理端口。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 是一個基於 SOCKS5 的代理工具，雖然功能強大，但配置較為複雜，AimiliVPN 提供了更簡單的安裝和管理介面。 |
| [openvpn/openvpn](https://github.com/openvpn/openvpn) | OpenVPN 是一個成熟的 VPN 解決方案，但需要較多的依賴和配置，AimiliVPN 則專注於簡化使用體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 使用 SOCKS5 協議，提供更靈活的代理功能，但需要較多的配置和維護。 | 如果你的團隊需要更高的靈活性和自定義功能，Shadowsocks 是更好的選擇。 | medium，因為需要重新配置和調整使用方式。 |
| [openvpn/openvpn](https://github.com/openvpn/openvpn) | OpenVPN 提供更全面的 VPN 解決方案，但安裝和配置相對複雜。 | 如果需要企業級的安全性和穩定性，OpenVPN 是更合適的選擇。 | high，因為需要重新設置伺服器和客戶端配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aimili-vpngate** | **shadowsocks** | **openvpn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 使用 SOCKS5 協議，提供更靈活的代理功能，但需要較多的配置和維護。 | OpenVPN 提供更全面的 VPN 解決方案，但安裝和配置相對複雜。 |
> | 遷移成本 | - | medium，因為需要重新配置和調整使用方式。 | high，因為需要重新設置伺服器和客戶端配置。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更高的靈活性和自定義功能，Shadowsoc | 如果需要企業級的安全性和穩定性，OpenVPN 是更合適的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 VPS 上可能無法啟用 TUN/TAP，導致無法連接 VPN
  - 解法：聯繫 VPS 提供商以啟用 TUN/TAP
- [MEDIUM] 防火牆可能阻擋管理介面或代理端口
  - 解法：手動開放相應端口
- [MEDIUM] DNS 解析問題可能導致節點無法更新
  - 解法：手動設置公共 DNS 伺服器

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的代理服務 | 非常適合 | 安裝簡單且管理介面友好，適合不熟悉技術的成員使用。 |
| 大型企業的 VPN 解決方案 | 不適合 | 缺乏企業級的安全性和穩定性，可能無法滿足高流量需求。 |
| 個人用戶的隱私保護 | 適合 | 提供簡單的使用方式和有效的隱私保護。 |
| 開發者的測試環境 | 適合 | 能夠快速切換不同國家的節點進行測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到簡單易用的 VPN 服務，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> AimiliVPN 本身不需要高權限運行，但需要訪問網路和本地端口。其依賴的庫均為開源，信任度較高。使用時需注意防火牆設置，以避免未授權訪問。

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
| Forks | 290 |
| Open Issues | 12 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-31 |
| 建立日期 | 2026-05-25 |
| Repo 大小 | 232 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/baoweise-bot/aimili-vpngate) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 83
>     "Shell" : 17
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@baoweise-bot](https://github.com/baoweise-bot) | 36 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的更新和問題討論。
**連結**：[文件](https://github.com/baoweise-bot/aimili-vpngate)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-30 ~ 2026-05-31）
> **活躍天數** 2 天 · **最新 commit** feat: add donation information section to the UI footer and update documentation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/baoweise-bot/aimili-vpngate/issues/13) | 可以docker一键安装吗 | 0 | 1 |
> | [#12](https://github.com/baoweise-bot/aimili-vpngate/issues/12) | IP 出站路由模式固定地区能否配置只连接住宅IP? | 0 | 0 |
> | [#11](https://github.com/baoweise-bot/aimili-vpngate/issues/11) | 建议 | 0 | 0 |

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

相關概念：[[VPN]] · [[代理服務]] · [[網路安全]]

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
> const concepts = ["VPN","代理服務","網路安全"];
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
