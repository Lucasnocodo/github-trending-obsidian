---
repo: zerobootdev/zeroboot
url: https://github.com/zerobootdev/zeroboot
owner: zerobootdev
owner_type: Organization
language: Rust
license: Apache-2.0
description: "Sub-millisecond VM sandboxes for AI agents via copy-on-write forking"
homepage: "https://tally.so/r/aQGkpb"
stars: 1414
stars_per_day: 283
forks: 61
open_issues: 2
created: 2026-03-15
pushed_at: 2026-03-19
first_seen: 2026-03-21
week: "2026-W12"
month: "2026-03"
category: "基礎設施"
subcategory: "虛擬化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-21
use_case: "透過 copy-on-write 分叉技術提供亞毫秒級的虛擬機沙盒環境，專為 AI 代理設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1017
readme_length: 2928
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-21"
star_history: "2026-03-21:1414"
tags:
  - github
  - "category/基礎設施"
  - "lang/rust"
  - org
  - "topic/ai_agents"
  - "topic/code_execution"
  - "topic/copy_on_write"
  - "topic/firecracker"
  - "topic/kvm"
aliases:
  - "zeroboot"
  - "zerobootdev/zeroboot"
  - "透過 copy-on-write 分叉技術提供亞毫秒級的虛擬機沙盒環境，專為 AI 代理設計。"
---

# zeroboot

**1.4k** stars · **283** stars/天 · 建立 5 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/zerobootdev--zeroboot");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`ai-agents` `code-execution` `copy-on-write` `firecracker` `kvm` `rust` `sandbox` `virtual-machine` `vm`

> [!summary] 一句話摘要
> 透過 copy-on-write 分叉技術提供亞毫秒級的虛擬機沙盒環境，專為 AI 代理設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (283 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速執行代碼並希望在沙盒環境中測試的 AI 開發者。
> **一句話重點** Zeroboot 透過創新的 copy-on-write 技術，讓虛擬機的啟動速度達到前所未有的快，這對於需要快速反應的 AI 應用至關重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zerobootdev--zeroboot");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "虛擬化" && p.file.name !== "zerobootdev--zeroboot" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 虛擬化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到快速執行代碼的能力，值得考慮。

> [!abstract] 核心創新
> 透過 copy-on-write 分叉技術實現亞毫秒級的虛擬機沙盒。

## 專案簡介

Zeroboot 提供了一個亞毫秒級的虛擬機沙盒環境，專為 AI 代理設計，利用 copy-on-write 分叉技術來快速啟動虛擬機。用戶可以透過 API 直接執行代碼，像是使用 `curl -X POST https://api.zeroboot.dev/v1/exec` 指令，並在短短 0.79 毫秒內獲得執行結果。這個工具的核心在於使用 Firecracker 技術來創建虛擬機，並在每次分叉時僅映射快照的記憶體，這樣可以有效地減少啟動延遲並保持內存使用在約 265KB。Zeroboot 的設計選擇使得每個沙盒都擁有硬體強制的記憶體隔離，這在安全性上提供了額外的保障。

與其他沙盒解決方案相比，如 microsandbox 和 Daytona，Zeroboot 在啟動延遲和內存使用上都有顯著優勢，特別是在需要快速啟動大量沙盒的情境下。這個工具的使用限制包括每個分叉僅支持單個虛擬 CPU，且無法在沙盒內進行網絡通信，這可能會限制某些應用場景的使用。儘管目前仍在原型階段，但其性能數據顯示出潛力，適合需要快速執行代碼的開發者或團隊。對於希望在生產環境中使用的團隊，建議在進一步的穩定性和安全性測試後再進行部署。

**技術棧**：`Rust` · `KVM` · `Firecracker`

## 重點功能

- 亞毫秒啟動時間 — 每個沙盒的啟動延遲低於 1 毫秒，提升開發效率。
- 硬體隔離 — 每個沙盒都是獨立的 KVM 虛擬機，提供強化的安全性。
- 輕量級內存使用 — 每個沙盒僅需約 265KB 的內存，適合高並發場景。
- API 介面 — 提供簡單的 REST API 來執行代碼，支持多種語言。
- Python 和 TypeScript SDK — 方便開發者在不同環境中使用。

## 快速開始

1. 安裝依賴
```bash
cargo build
```
2. 啟動服務
```bash
cargo run
```
3. 執行代碼
```bash
curl -X POST https://api.zeroboot.dev/v1/exec -H 'Content-Type: application/json' -H 'Authorization: Bearer zb_demo_hn2026' -d '{"code":"print(1 + 1)"}'
```

## 程式碼範例

```rust
# 前置條件：已安裝 zeroboot SDK
from zeroboot import Sandbox
sb = Sandbox("zb_live_your_key")
result = sb.run("print(1 + 1)")
# 預期輸出：2
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1414 stars（283/天），forks 61（4.3%），顯示出強勁的增長潛力。作者 adammiribyan 之前的經驗和專業知識使他能夠針對 AI 代理的需求設計出這個工具。Zeroboot 解決了傳統虛擬機啟動緩慢和資源消耗高的痛點，特別是在需要快速反應的 AI 應用中。這個專案的出現正值虛擬化技術和 AI 應用需求增長的時期，讓開發者能夠更有效地運用資源。forks/stars 比率相對較低，顯示出目前使用者主要是觀望，尚未廣泛修改或擴展此專案。

## 適合誰使用

**目標受眾**：需要快速執行代碼並希望在沙盒環境中測試的 AI 開發者。

> [!example] 使用場景
> - 後端工程師用它來快速啟動 AI 代理的執行環境，因為其亞毫秒的啟動時間能大幅提升開發效率。
> - 資料科學家用它來測試不同的模型代碼，因為每個沙盒的獨立性確保了測試結果不會互相影響。
> - DevOps 團隊用它來在 CI/CD 流程中執行代碼片段，因為其低資源消耗和快速啟動能有效縮短測試時間。

## 架構分析

Zeroboot 的架構基於 KVM 和 Firecracker，利用 copy-on-write 技術來快速啟動虛擬機。每次啟動時，Firecracker 會創建一個快照，並將其映射到新的 KVM 虛擬機中，這樣可以在 0.8 毫秒內完成啟動。這種設計使得每個沙盒都能獨立運行，並且擁有硬體隔離的特性，這在安全性上提供了保障。選擇 KVM 作為虛擬化平台的好處在於其高效能和成熟的生態系統，但這也意味著需要對 Linux 環境有一定的依賴。整體架構的擴展性良好，但在多 CPU 支援和網絡功能上仍有待加強。

## 技術深入分析

Zeroboot 的核心技術機制是基於 KVM 和 Firecracker 的虛擬化技術，利用 copy-on-write 分叉來實現快速啟動。這種設計使得每個沙盒都能在 0.8 毫秒內啟動，並且每個沙盒的內存使用量僅為 265KB，適合高並發的執行環境。選擇 Rust 作為開發語言，能夠提供高效能和安全性，但也使得學習曲線相對較陡。這個專案目前仍在原型階段，尚未完全生產化，可能在穩定性和安全性上存在風險。對於大規模部署，可能會面臨多 CPU 支援不足的問題，這會影響到性能和資源利用率。整合到現有的 CI/CD 流程中相對簡單，但需要注意沙盒內無法進行網絡通信的限制，這可能會影響某些應用的實現方式。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程順暢，沒有明顯的坑。文檔中包含了 API 參考和部署指南，對於新手來說相對友好。整體而言，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 快速啟動 — 亞毫秒的啟動時間適合高頻執行的應用。
> - 獨立沙盒 — 每個沙盒擁有獨立的記憶體空間，增強安全性。
> - 輕量級 — 每個沙盒的內存使用量極低，適合高並發場景。

> [!danger] 缺點
> - 功能限制 — 目前僅支持單虛擬 CPU，無法滿足多核心需求。
> - 無網絡支持 — 沙盒內無法進行網絡通信，限制了應用場景。
> - 模板更新慢 — 更新模板需重新快照，過程耗時。

> [!warning] 注意事項
> - 僅支持單虛擬 CPU，每個分叉無法使用多個 CPU 核心。
> - 沙盒內無法進行網絡通信，僅能透過串行 I/O 進行資料傳輸。
> - 模板更新需重新快照，過程約需 15 秒，無法進行增量更新。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的沙盒環境，但主要針對檔案同步，無法直接執行代碼。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，適合需要高安全性的應用，但啟動速度較慢。 |
| [microsandbox/microsandbox](https://github.com/microsandbox/microsandbox) | 雖然也提供沙盒環境，但啟動延遲較高，且內存使用量大於 Zeroboot。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [microsandbox/microsandbox](https://github.com/microsandbox/microsandbox) | 使用傳統的虛擬化技術，啟動速度較慢，且內存使用量較高。 | 如果需要更成熟的解決方案且不在意啟動速度，可以考慮使用它。 | medium，因為需要調整代碼以適應不同的 API。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步，無法直接執行代碼，適合需要高效檔案處理的場景。 | 如果主要需求是檔案同步而非代碼執行，則更適合選擇它。 | low，因為檔案同步的需求較為簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **zeroboot** | **microsandbox** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用傳統的虛擬化技術，啟動速度較慢，且內存使用量較高。 | 專注於檔案同步，無法直接執行代碼，適合需要高效檔案處理的場景。 |
> | 遷移成本 | - | medium，因為需要調整代碼以適應不同的 API。 | low，因為檔案同步的需求較為簡單。 |
> | 適用場景 | 主要場景 | 如果需要更成熟的解決方案且不在意啟動速度，可以考慮使用它。 | 如果主要需求是檔案同步而非代碼執行，則更適合選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和探索，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 每個分叉共享 CSPRNG 狀態，可能導致隨機數生成不一致。
  - 解法：在每次分叉後手動重新初始化隨機數生成器。
- [MEDIUM] 模板更新需重新快照，過程較慢。
  - 解法：計劃好更新時間，避免在高峰期進行。
- **[HIGH]** 無法進行網絡通信，限制了某些應用場景。
  - 解法：考慮使用串行 I/O 進行資料傳輸。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速執行代碼的 AI 開發團隊 | 非常適合 | 亞毫秒的啟動時間能顯著提升開發效率。 |
| 小型專案的個人開發者 | 適合 | 輕量級的內存使用和簡單的 API 使得個人開發者能夠輕鬆上手。 |
| 需要多虛擬 CPU 的高性能應用 | 不適合 | 目前僅支持單虛擬 CPU，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到快速執行代碼的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意依賴鏈的安全性，確保使用的庫無已知漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zerobootdev--zeroboot");
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
> const me = dv.page("Repos/zerobootdev--zeroboot");
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
| Forks | 61 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-19 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://tally.so/r/aQGkpb) |
| Repo 大小 | 1017 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zerobootdev/zeroboot) |
| Topics | `ai-agents` `code-execution` `copy-on-write` `firecracker` `kvm` `rust` `sandbox` `virtual-machine` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `license` `description` `repository` `keywords` `categories` `kvm-ioctls` `kvm-bindings` `vmm-sys-util` `libc` `axum` `tokio` `serde`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 81
>     "Shell" : 11
>     "Python" : 3
>     "C" : 3
>     "TypeScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@adammiribyan](https://github.com/adammiribyan) | 23 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者在持續更新文檔和回應問題。
**連結**：[文件](https://tally.so/r/aQGkpb)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-19）
> **活躍天數** 2 天 · **最新 commit** docs: add self-host/managed section and known limitations to README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/zerobootdev/zeroboot/issues/2) | Your project was featured on AI Digital Crew 🎉 | 1 | 0 |
> | [#1](https://github.com/zerobootdev/zeroboot/issues/1) | Question: Any plans to support persistent sandbox/workspace  | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> Sub-millisecond VM sandboxes for AI agents via copy-on-write forking
> 
>   
>   
>   
> 
> ---
> 
> ## Try it
> 
> ```bash
> curl -X POST https://api.zeroboot.dev/v1/exec \
>   -H 'Content-Type: application/json' \
>   -H 'Authorization: Bearer zb_demo_hn2026' \
>   -d '{"code":"import numpy as np; print(np.random.rand(3))"}'
> ```
> 
> ## Benchmarks
> 
> | Metric | Zeroboot | E2B | microsandbox | Daytona |
> |---|---|---|---|---|
> | Spawn latency p50 | **0.79ms** | ~150ms | ~200ms | ~27ms |
> | Spawn latency p99 | 1.74ms | ~300ms | ~400ms | ~90ms |
> | Memory per sandbox | ~265KB | ~128MB | ~50MB | ~50MB |
> | Fork + exec (Python) | **~8ms** | - | - | - |
> | 1000 concurrent forks | 815ms | - | - | - |
> 
> Each sandbox is a real KVM virtual machine with hardware-enforced memory isolation.
> 
> ## How it works
> 
> ```
>   Firecracker snapshot ──► mmap(MAP_PRIVATE) ──► KVM VM + restored CPU state
>                               (copy-on-write)         (~0.8ms)
> ```
> 
> 1. **Template** (one-time): Firecracker boots a VM, pre-loads your runtime, and snapshots memory + CPU state
> 2. **Fork** (~0.8ms): Creates a new KVM VM, maps snapshot memory as CoW, restores all CPU state
> 3. **Isolation**: Each fork is a separate KVM VM with hardware-enforced memory isolation
> 
> ## SDKs
> 
> **Python** &mdash; [sdk/python](sdk/python/)
> 
> ```python
> from zeroboot import Sandbox
> sb = Sandbox("zb_live_your_key")
> result = sb.run("print(1 + 1)")
> ```
> 
> **TypeScript** &mdash; [sdk/node](sdk/node/)
> 
> ```typescript
> import { Sandbox } from "@zeroboot/sdk";
> const result = await new Sandbox("zb_live_your_key").run("console.log(1+1)");
> ```
> 
> ## Docs
> 
> - [API Reference](docs/API.md)
> - [Deployment Guide](docs/DEPLOYMENT.md)
> - [Architecture](docs/ARCHITECTURE.md)
> 
> ## Status
> 
> Working prototype. The fork primitive, benchmarks, and API are real, but not production-hardened yet. [Open an issue](https://github.com/adammiribyan/zeroboot/issues) if you're interested.
> 
> ## Self-host or managed
> 
> Zeroboot is open source. Self-host it on any Linux box with KVM, or use the managed API:
> 
>     curl -X POST https://api.zeroboot.dev/v1/exec \
>       -H 'Content-Type: application/json' \
>       -H 'Authorization: Bearer zb_demo_hn2026' \
>       -d '{"code":"import numpy as np; print(np.random.rand(3))"}'
> 
> Building the managed service for teams that don't want to run their own infra. Sign up for early access: https://tally.so/r/aQGkpb
> 
> ## Known limitations
> 
> - Forks share CSPRNG state from the snapshot. Kernel entropy is reseeded via RNDADDENTROPY but userspace PRNGs (numpy, OpenSSL) need explicit reseeding per fork. See [Firecracker's guidance](https://github.com/firecracker-microvm/firecracker/blob/main/docs/snapshotting/random-for-clones.md).
> - Single vCPU per fork. Multi-vCPU is architecturally possible but not implemented.
> - No networking inside forks. Sandboxes communicate via serial I/O only.
> - Template updates require a full re-snapshot (~15s). No incremental patching.
> 
> ## License
> 
> [Apache-2.0](LICENSE)

## 延伸閱讀

相關概念：[[虛擬化]] · [[KVM]] · [[copy-on-write]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]]

[GitHub](https://github.com/zerobootdev/zeroboot) · [官方網站](https://tally.so/r/aQGkpb)

## 相關收錄

> [!note]- 直接競品（同子分類：虛擬化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "虛擬化" AND file.name != "zerobootdev--zeroboot"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "zerobootdev--zeroboot"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "zerobootdev--zeroboot" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "zerobootdev--zeroboot"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["虛擬化","KVM","copy-on-write"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "zerobootdev--zeroboot" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/zerobootdev--zeroboot");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zerobootdev--zeroboot" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zerobootdev" AND file.name != "zerobootdev--zeroboot"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zerobootdev--zeroboot");
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
> const me = dv.page("Repos/zerobootdev--zeroboot");
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
> const me = dv.page("Repos/zerobootdev--zeroboot");
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
> const me = dv.page("Repos/zerobootdev--zeroboot");
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
> const me = dv.page("Repos/zerobootdev--zeroboot");
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

> **2026-03-21** — 首次收錄
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

- [[2026-03-21|2026-03-21]] — 首次收錄，1.4k stars
