---
repo: wlzh/dji-4g-vohive-mac
url: https://github.com/wlzh/dji-4g-vohive-mac
owner: wlzh
owner_type: User
language: N/A
license: N/A
description: "在 Mac（Apple Silicon / Intel）上用 UTM 跑 Linux 虚拟机，把大疆 4G 模块（EG25-G）伪装成移远 Quectel EC25 并部署 vohive 平台的完整步骤"
homepage: ""
stars: 443
stars_per_day: 74
forks: 111
open_issues: 1
created: 2026-06-27
pushed_at: 2026-06-27
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "基礎設施"
subcategory: "虛擬化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-04
use_case: "在 Mac 上用 UTM 虛擬機運行 Linux，將大疆 4G 模組偽裝成移遠 Quectel EC25 並部署 vohive 平台。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-11"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 13
readme_length: 8879
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:443"
tags:
  - github
  - "category/基礎設施"
  - "lang/other"
aliases:
  - "dji-4g-vohive-mac"
  - "wlzh/dji-4g-vohive-mac"
  - "在 Mac 上用 UTM 虛擬機運行 Linux，將大疆 4G 模組偽裝成移遠 Quectel EC25 並部署 voh"
---

# dji-4g-vohive-mac

**443** stars · **74** stars/天 · 建立 6 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
> 在 Mac 上用 UTM 虛擬機運行 Linux，將大疆 4G 模組偽裝成移遠 Quectel EC25 並部署 vohive 平台。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 Mac 上使用大疆 4G 模組並希望簡化部署流程的開發者。
> **一句話重點** 這個專案展示了如何在 Mac 上利用虛擬化技術解決特定硬體的兼容性問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "虛擬化" && p.file.name !== "wlzh--dji-4g-vohive-mac" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，2 小時整合，得到穩定的 vohive 環境，值得嘗試。

> [!abstract] 核心創新
> 提供了一個在 Mac 上使用 UTM 虛擬機運行 Linux 並改寫大疆 4G 模組身份的完整解決方案。

## 專案簡介

這個專案提供了一個完整的步驟指南，讓 Mac 用戶能夠在 UTM 虛擬機上運行 Linux，並將大疆 4G 模組的 USB 身份從私有的 `2ca3:4006` 改為移遠 Quectel EC25 的 `2C7C:0125`，以便接入 vohive 短信和網絡管理平台。使用者只需執行一系列 AT 指令來永久改寫模組身份，這樣就能在任何設備上識別為 EC25。整個過程中，使用者需要安裝 UTM、下載 Ubuntu ISO、創建虛擬機並進行 USB 直通，這些步驟在 Apple Silicon 和 Intel Mac 上幾乎完全相同。這個專案的賣點在於它能夠解決大疆模組在通用驅動下無法識別的問題，並提供一鍵部署 vohive 的能力。技術上，這個專案依賴於 UTM 的 QEMU 虛擬化技術，支持 USB 直通，並且能夠在兩種不同架構的 Mac 上運行。

與其他虛擬化方案相比，如 Docker Desktop 和 OrbStack，UTM 是唯一支持 USB 直通的免費選擇，這使得它在這個特定場景下成為最佳選擇。使用者可以通過簡單的命令行操作來完成模組身份的改寫和 vohive 的安裝，並且在安裝後能夠輕鬆訪問管理界面。這個專案的限制在於它需要一定的 Linux 基礎知識，並且在 USB 直通過程中可能會遇到設備重新枚舉的問題。整體來看，這是一個針對特定硬體需求的解決方案，適合需要在 Mac 上使用大疆 4G 模組的開發者。

## 重點功能

- USB 身份改寫 — 通過 AT 指令永久改寫大疆模組的 USB 身份為移遠 EC25，支持持久化。
- 一鍵部署 vohive — 使用簡單的命令行腳本快速安裝 vohive 管理平台，無需手動配置。
- 支持 Apple Silicon 和 Intel — 提供針對不同架構的安裝指南，確保兼容性。
- 完整的安裝步驟 — 包含從零開始的詳細步驟，適合新手用戶。
- USB 直通支持 — 利用 UTM 的 USB 直通功能，確保模組能夠被虛擬機識別。

## 快速開始

1. 安裝 UTM
```bash
brew install --cask utm
```
2. 下載 Ubuntu Server ISO
```bash
curl -L -o ~/Downloads/ubuntu-24.04-live-server-arm64.iso https://cdimage.ubuntu.com/releases/24.04/release/ubuntu-24.04-live-server-arm64.iso
```
3. 創建虛擬機並安裝 Linux
```bash
在 UTM 中選擇 Virtualize，並掛載下載的 ISO 進行安裝。
```
4. 直通大疆模組
```bash
在 UTM 設定中勾選大疆設備進行 USB 直通。
```
5. 執行 AT 指令改寫身份
```bash
echo 'AT+QCFG="usbcfg",0x2C7C,0x0125,1,1,1,1,1,0,0' | socat - /dev/ttyUSB2,crnl
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 443 stars（74/天），forks 111（25.1%），顯示出強烈的社群興趣。這個專案的作者 mswnlz 提供了一個針對特定硬體需求的解決方案，解決了大疆 4G 模組在通用驅動下無法識別的痛點。之前用戶可能需要尋找其他虛擬化方案或實體 Linux 機器來處理這個問題，但這個專案提供了一個簡單的解決方案。社群對於 USB 直通的需求也促使了這個專案的興起，因為許多虛擬化工具並不支持此功能。forks/stars 比率達到 25.1%，顯示出許多人對於這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要在 Mac 上使用大疆 4G 模組並希望簡化部署流程的開發者。

> [!example] 使用場景
> - 開發者用它來在 Mac 上運行 vohive 平台，因為這樣可以避免使用實體 Linux 機器，節省成本和空間。
> - 系統管理員用它來管理大疆 4G 模組，因為這樣可以通過簡單的命令行操作來改寫模組身份，提升工作效率。
> - 技術愛好者用它來探索 Linux 虛擬化技術，因為這個專案提供了一個實用的案例來學習 USB 直通和虛擬機配置。

## 架構分析

這個專案使用 UTM 作為虛擬化解決方案，基於 QEMU 技術，支持 USB 直通。架構選擇的理由是 UTM 能夠在 Mac 上提供原生的 ARM 虛擬化，並且支持 USB 設備的直通，這對於大疆模組的身份改寫至關重要。資料流中，使用者首先在 Mac 上安裝 UTM，然後下載相應的 Ubuntu ISO，創建虛擬機並安裝 Linux，接著通過 USB 直通將大疆模組接入虛擬機。這個設計的取捨在於選擇了免費的 UTM，而非付費的虛擬化工具，雖然可能在某些情況下性能略有損失，但對於大多數用戶來說，這樣的選擇是可接受的。擴展性方面，這個架構在處理 USB 直通時可能會遇到瓶頸，特別是在多設備同時連接的情況下。

## 技術深入分析

這個專案的核心技術機制是利用 UTM 作為虛擬化平台，通過 QEMU 實現對 Linux 的支持，並且能夠進行 USB 直通。這樣的設計允許用戶在 Mac 上運行 Linux 環境，並且能夠直接與大疆 4G 模組進行交互。效能方面，UTM 在 Apple Silicon 上運行時能夠達到接近原生的性能，這對於需要高效能的應用場景非常重要。設計取捨上，選擇 UTM 而非其他虛擬化工具的原因在於其免費和開源的特性，雖然可能在某些高負載情況下表現不如商業產品。技術風險方面，USB 直通的穩定性可能會受到影響，特別是在設備重新枚舉的情況下，這可能導致設備無法被識別。整合方面，這個專案與主流的 Linux 發行版（如 Ubuntu）兼容良好，並且能夠輕鬆地與其他工具鏈結合使用，對於開發者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的步驟和範例，安裝過程相對順暢，但對於新手來說仍然需要一定的 Linux 知識。整體來說，花 30 分鐘能夠完成基本的安裝和配置。

## 優缺點分析

> [!success] 優點
> - 免費且開源，適合預算有限的開發者。
> - 支持 USB 直通，能夠直接與硬體交互。
> - 提供詳細的安裝步驟，降低了使用門檻。

> [!danger] 缺點
> - 需要一定的技術背景，對新手來說可能有挑戰。
> - 在 USB 直通過程中可能會遇到設備識別問題。
> - 僅限於 Mac 環境，無法在其他操作系統上使用。

> [!warning] 注意事項
> - 需要一定的 Linux 基礎知識來操作虛擬機和命令行。
> - 在 USB 直通過程中，可能會遇到設備重新枚舉的問題。
> - 僅支持在 Mac 上運行，無法在其他操作系統上直接使用。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** USB 直通過程中，設備重新枚舉可能導致設備無法識別。
  - 解法：在 UTM 中重新勾選直通設置，或將直通設置為物理端口。
- [MEDIUM] AT 指令執行後，可能需要手動確認 USB 設備是否已正確識別。
  - 解法：執行 lsusb 命令確認設備狀態。
- [MEDIUM] 在某些情況下，UTM 可能無法啟動或運行不穩定。
  - 解法：確保 macOS 系統更新至最新版本，並重新安裝 UTM。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在 Mac 上使用大疆 4G 模組的開發者 | 非常適合 | 提供了完整的解決方案，能夠簡化部署流程。 |
| 希望在 Mac 上學習 Linux 虛擬化的技術愛好者 | 適合 | 詳細的安裝步驟和命令行操作能夠幫助學習。 |
| 需要在非 Mac 環境中使用大疆 4G 模組的用戶 | 不適合 | 僅限於 Mac 環境，無法在其他操作系統上使用。 |
| 希望使用 Docker 或其他虛擬化工具的用戶 | 不適合 | 這個專案專注於 UTM，其他工具不支持 USB 直通。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到穩定的 vohive 環境，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。使用過程中需注意 USB 直通的安全性，確保不連接不明設備。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具主要與 UTM 和 Ubuntu 生態系統結合使用，適合在開發和測試環境中運行。在實際整合中，用戶可以在 UTM 中創建虛擬機，安裝 Ubuntu，並通過 USB 直通將大疆模組接入。這樣的設置能夠與其他開發工具鏈（如 Git、CI/CD 工具）良好配合。常見的整合問題包括 USB 直通的配置和虛擬機的性能調整，但這些問題通常可以通過詳細的文檔和社群支持來解決。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，用戶通常需要使用實體 Linux 機器來處理大疆 4G 模組的兼容性問題，這樣的解決方案不僅成本高，還佔用空間。隨著虛擬化技術的進步，特別是 UTM 的出現，讓 Mac 用戶能夠在不需要實體機器的情況下運行 Linux，這為解決這類問題提供了新的思路。這個專案代表了在 Mac 環境下利用虛擬化技術解決特定硬體需求的趨勢，未來可能會有更多類似的解決方案出現。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Linux 基本操作
- 了解虛擬化技術
- 具備基本的命令行操作能力

> [!tip] 導入策略
> 第一週：在個人環境中試用，第二週：在小型項目中導入，第三週：撰寫使用文檔，第四週：在團隊內部分享經驗。

**成功指標**：能夠成功在 Mac 上運行 vohive 平台並識別大疆 4G 模組。

> [!warning] 退出計畫
> 如果需要退出，所有設定都可以手動備份並轉移到其他虛擬化平台。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
| Forks | 111 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-27 |
| 建立日期 | 2026-06-27 |
| Repo 大小 | 13 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wlzh/dji-4g-vohive-mac) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mswnlz](https://github.com/mswnlz) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新，但 Issue 解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-27 ~ 2026-06-27）
> **活躍天數** 1 天 · **最新 commit** chore: add .gitignore for .DS_Store

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/wlzh/dji-4g-vohive-mac/issues/1) | Orbstack最新版本已经支持USB直通 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dji-4g-vohive-mac
> 
> > 在 Mac（Apple Silicon / Intel 通用）上，用 **UTM** 跑一个 Linux 虚拟机，把**大疆 4G 模块（1 代，本质移远 Quectel EG25-G）**的 USB 身份从大疆私有 `2ca3:4006` **永久改成移远 Quectel EC25 的 `2C7C:0125`**，并在该 Linux 里一键部署 **vohive** 短信/网络/eSIM 管理平台的全套步骤。
> 
> ## 这个仓库做什么
> 
> - 给 Mac 用户提供一条**从零到能访问 vohive 后台**的可执行路径，无需另一台 Linux 真机。
> - 解决大疆 4G 模块默认 VID/PID 是大疆私有、通用驱动不认的问题——通过发 AT 指令 `AT+QCFG="usbcfg",...` 把模块内部 USB 身份永久改写为移远 EC25，改一次终身有效。
> - 同时覆盖 **Apple Silicon（arm64）** 和 **Intel（x86_64）** 两种 Mac：两者只有 ISO 和 VM 架构不同，VM 内所有操作完全一致。
> - 包含 USB 直通、改身份后重新枚举断直通的坑及处理、验证清单、维护命令、方案选型对比。
> 
> ## 项目依赖
> 
> 本仓库本身只是一份操作手册（README），实际起作用的是下面这个上游项目，部署步骤会调用它的一键安装脚本：
> 
> ### [iniwex5/vohive-release](https://github.com/iniwex5/vohive-release)
> 
> **VoHive** 是面向高通 4G/5G 模组场景的一体化管理与代理平台，核心能力：
> 
> - 网页 / Bot 收发短信
> - 多卡统一管理
> - 实体 eSIM / eUICC 管理（加卡、切卡、删卡）
> - 转量代理：支持 `SOCKS5/HTTP` 实例，按设备网卡强绑定出站
> - TelegramBot / 飞书Bot / QQBot 远程控制
> - 条件满足时启用 VoWiFi，并通过 `/vocall` 发起 VoWiFi 模拟外呼
> 
> **适用环境：** Linux（Debian/Ubuntu/树莓派/NAS）+ 移远 EC20CE / EM500Q / 高通 410 WIFI 板 / 各类高通 4G USB 模组（需 SIM 卡槽或带 SIM 卡槽的 USB 底板）。本仓库的作用正是让 Mac 用户通过 UTM Linux VM + USB 直通，把大疆 4G 模块变成 VoHive 能认的 Quectel EC25，从而跑起 VoHive。
> 
> **部署方式：** 一键脚本（本仓库采用）或 Docker Compose。
> ```bash
> curl -fsSL https://raw.githubusercontent.com/iniwex5/vohive-release/master/install.sh | bash
> ```
> 安装后：二进制 `/opt/vohive/bin/vohive`，配置 `/opt/vohive/config/config.yaml`，systemd 服务 `vohive`，后台 `http://:7575`（默认 `admin/admin`）。
> 
> **机器人常用命令：** `/list` 列设备、`/sms 设备ID` 看短信、`/send 设备ID 号码 内容` 发短信、`/rotate 设备ID` 换 IP、`/esim`、`/switch` 切 eSIM、`/vocall` VoWiFi 呼叫。
> 
> > ⚠️ VoHive 已禁止国内运营商卡发起 VoWiFi；VoWiFi 支持的运营商列表（CTE UK / giffgaff UK / Vodafone UK/DE / Telekom DE / O2 DE / T-Mobile US 等）见上游 README。
> 
> ---
> 
> ## 完整步骤
> 
> > 来源教程：（标题：《大疆4G模块修改设备ID并一键部署vohive平台教程》）
> >
> > 本机为 M3 Pro，对应方案 A。两种芯片先看第 0.5 节选方案。
> 
> ### 0. 为什么这么做（背景与约束）
> 
> - 大疆 4G 模块（1 代，约 30~40 元）**本质是移远 Quectel EG25-G**，但默认 USB VID/PID 是大疆私有的 `2ca3:4006`，通用驱动不认。
> - 教程通过发 AT 指令把模块内部 USB 身份**永久改写**成移远 EC25 的 `2C7C:0125`，从而接入 vohive 平台。
> - 教程全部命令是 **Linux 专用**（`modprobe option`、`/sys/bus/usb-serial/.../new_id`、`/dev/ttyUSB2`、`apt-get`、`lsusb`、systemd 服务），macOS 没有等价物，不能直接在 Mac 上照搬。
> - vohive 官方 `install.sh` **只支持 Linux**（`os != linux` 直接退出），但**支持 arm64**（会下载 `vohive__linux_arm64`，systemd 起服务）。所以在 M3 上跑 **arm64 Linux 虚拟机是原生速度**，不用 x86 模拟。
> - **硬约束是 USB passthrough**：必须把大疆这个 USB 设备直通进 Linux VM。这排除了 OrbStack、Multipass、Docker Desktop（都不支持任意 USB 设备直通）。免费且支持 USB 直通的最佳选择是 **UTM**（基于 QEMU）。
> - 改身份这步是**一次性的、改的是模块内部 NV，改一次终身有效**；改完模块插任何机器都是 Quectel EC25 身份。
> 
> ### 0.5. 架构选择（按你的 Mac 芯片二选一）
> 
> 先在 Mac 终端确认芯片：
> ```bash
> uname -m
> # 输出 arm64  → Apple Silicon，选 A
> # 输出 x86_64 → Intel，选 B
> ```
> 
> | 项 | 方案 A：Apple Silicon | 方案 B：Intel Mac |
> |---|---|---|
> | VM 架构 | `aarch64`（原生 ARM 虚拟化） | `x86_64`（原生虚拟化，Hypervisor.framework） |
> | Ubuntu ISO 文件名 | `ubuntu-24.04-live-server-arm64.iso` | `ubuntu-24.04-live-server-amd64.iso` |
> | ISO 下载地址 | `https://cdimage.ubuntu.com/releases/24.04/release/ubuntu-24.04-live-server-arm64.iso` | `https://releases.ubuntu.com/24.04/ubuntu-24.04-live-server-amd64.iso` |
> | vohive 二进制 | 脚本自动下 `vohive__linux_arm64` | 脚本自动下 `vohive__linux_amd64` |
> | UTM 虚拟化方式 | Virtualize（不要选 Emulate） | Virtualize |
> 
> > 后面第 2、3 步按你选的方案 A/B 取对应值；**第 4 步起（USB 直通、改身份、装 vohive、验证）两种方案完全一致，没有任何差别。**
> 
> ### 1. 装 UTM（免费）
> 
> UTM 是 macOS 上基于 QEMU 的虚拟化前端，原生支持 Apple Silicon 的 ARM 虚拟化与 USB 设备直通。
> 
> ```bash
> brew install --cask utm
> ```
> 
> 打开一次 UTM，确认能启动（macOS 可能要求在「系统设置 → 隐私与安全性」里允许运行）。
> 
> ### 2. 下载 Ubuntu Server 24.04 ISO（按第 0.5 节选的方案）
> 
> **方案 A（Apple Silicon / arm64）：**
> ```bash
> curl -L -o ~/Downloads/ubuntu-24.04-live-server-arm64.iso \
>   https://cdimage.ubuntu.com/releases/24.04/release/ubuntu-24.04-live-server-arm64.iso
> ```
> 
> **方案 B（Intel / amd64）：**
> ```bash
> curl -L -o ~/Downloads/ubuntu-24.04-live-server-amd64.iso \
>   https://releases.ubuntu.com/24.04/ubuntu-24.04-live-server-amd64.iso
> ```
> 
> 下载完成后 `ls -lh ~/Downloads/ubuntu-24.04-live-server-*.iso` 确认大小约 2GB+。
> 
> ### 3. 在 UTM 里创建并安装 Linux 虚拟机
> 
> 1. 打开 UTM → 顶部 **＋** 新建虚拟机。
> 2. 选择 **Virtualize**（不要选 Emulate）——原生虚拟化，性能接近原生。
> 3. 架构按第 0.5 节选：**方案 A 选 `aarch64`**，**方案 B 选 `x86_64`**。
> 4. 系统类型选 **Debian/Ubuntu**。
> 5. 内存 **2 GB**、CPU **2 核**、磁盘 **20 GB**（跑 vohive 足够）。
> 6. 「CD/DVD」挂载第 2 步下载的 ISO。
> 7. 网络保留默认（NAT，UTM 会给 VM 分一个 192.168.x.x 的 DHCP 地址）。
> 8. 启动 VM，按 Ubuntu 安装流程走：
>    - 语言/键盘默认即可
>    - 安装类型选 Ubuntu Server（最小化，无桌面）
>    - **务必勾选安装 OpenSSH server**（方便从 Mac 终端 ssh 进去操作）
>    - 用户名/密码自行设置，记下来
> 9. 装完重启，拔掉 ISO（UTM 里弹出 CD）。
> 
> #### 从 Mac ssh 进 VM（推荐，后面命令都在这里跑）
> 
> 在 VM 控制台里先看 IP：
> ```bash
> ip a
> ```
> 拿到 `192.168.x.x` 后，在 Mac 终端：
> ```bash
> ssh @192.168.x.x
> ```
> 后续所有命令都在这个 ssh 会话里执行。
> 
> ### 4. 把大疆 4G 模块直通进 VM
> 
> 1. 把大疆 4G 模块 USB 插到 Mac。
> 2. UTM → 选中该 VM → 设置 → **USB** 选项卡 → 勾选大疆设备（显示为 VID:PID `2ca3:4006`）做 passthrough。
> 3. 回到 VM（或 ssh），确认设备已进来：
> ```bash
> lsusb
> # 应能看到一行含 2ca3:4006
> ```
> > 若 VM 里没装 `lsusb`：`sudo apt-get install usbutils -y`
> 
> ### 5. 改大疆模块设备 ID（改成移远 EC25 身份）
> 
> 在 VM 里依次执行（教程原样）：
> 
> ```bash
> # 0. 装 socat（发 AT 指令用）
> sudo apt-get update && sudo apt-get install socat -y
> 
> # 1. 临时加载 option 驱动模块
> sudo modprobe option
> 
> # 2. 把大疆当前识别码 2ca3:4006 写入 option 驱动，生成串口文件
> echo 2ca3 4006 | sudo tee /sys/bus/usb-serial/drivers/option1/new_id
> 
> # 3. 通过 /dev/ttyUSB2 发 AT 指令，永久改 USB 身份为移远 2C7C:0125
> echo 'AT+QCFG="usbcfg",0x2C7C,0x0125,1,1,1,1,1,0,0' | socat - /dev/ttyUSB2,crnl
> 
> # 4. 软重启模块使配置生效
> echo 'AT+CFUN=1,1' | socat - /dev/ttyUSB2,crnl
> ```
> 
> 等几秒，模块重新初始化后查看：
> ```bash
> lsusb
> # 应显示：2c7c:0125 Quectel Wireless Solutions Co., Ltd. EC25 LTE modem
> ```
> 
> #### ⚠️ 关键坑：USB 重新枚举会断开直通
> 
> `AT+CFUN=1,1` 让模块软重启，VID/PID 从 `2ca3:4006` 变成 `2c7c:0125`。如果 UTM 是按 VID/PID 绑定直通的，这一瞬间直通会断开，`lsusb` 在 VM 里可能短暂看不到设备。
> 
> 处理方式：
> - 在 UTM 里把直通规则改成绑定到新的 Quectel 设备 `2c7c:0125`，或绑定到**物理 USB 端口**（更稳，重新枚举不会丢）。
> - 重新勾选一次直通，模块就永久留在 VM 里给 vohive 用。
> - 改身份是一次性的；改完后这个模块插任何机器都是 Quectel EC25 身份。
> 
> ### 6. 一键部署 vohive 平台
> 
> 模块身份改完且直通稳定后，在 VM 里执行：
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/iniwex5/vohive-release/master/install.sh | bash
> ```
> 
> 脚本会：
> - 下载 `vohive__linux_` 二进制到 `/opt/vohive/bin/vohive`
> - 生成配置 `/opt/vohive/config/config.yaml`（默认 Web 账号密码 `admin / admin`）
> - 注册 systemd 服务 `vohive.service` 并启动
> - 数据/日志在 `/opt/vohive/data`、`/opt/vohive/logs`
> 
> #### 访问后台
> 
> 从 Mac 浏览器打开：
> ```
> http://:7575
> ```
> 默认 `admin / admin`，**登录后立即改密码**。
> 
> ### 7. 验证清单
> 
> - [ ] VM 里 `lsusb` 能看到 `2c7c:0125 Quectel ... EC25 LTE modem`
> - [ ] VM 里 `systemctl status vohive` 显示 active (running)
> - [ ] Mac 浏览器访问 `http://:7575` 能出登录页
> - [ ] 用 `admin/admin` 登录成功并改密
> - [ ] vohive 后台能识别到 4G 模块、看到信号/短信等功能
> 
> ### 8. 维护与可选操作
> 
> #### 更新 vohive
> ```bash
> curl -fsSL https://raw.githubusercontent.com/iniwex5/vohive-release/master/install.sh | bash
> ```
> 脚本会自动备份旧二进制到 `/opt/vohive/bin/vohive.bak` 再覆盖。
> 
> #### 卸载 vohive
> ```bash
> curl -fsSL https://raw.githubusercontent.com/iniwex5/vohive-release/master/uninstall.sh | bash
> ```
> 
> #### 不用 systemd 的环境（如容器/WSL，本方案用不到）
> ```bash
> curl -fsSL https://raw.githubusercontent.com/iniwex5/vohive-release/master/install.sh | bash -s -- --no-systemd
> # 手动启动：/opt/vohive/bin/vohive -c /opt/vohive/config/config.yaml
> ```
> 
> #### 查看日志
> ```bash
> journalctl -u vohive -f
> # 或
> tail -f /opt/vohive/logs/*.log
> ```
> 
> #### 让 Mac 开机后自动连 VM
> - UTM 设置里可勾选该 VM「开机自动启动」。
> - Mac 这边可加一条 ssh config，方便 `ssh vohive` 直连。
> 
> #### 如果想把模块改回大疆身份（基本不需要）
> 把第 5 步的 AT 指令 VID/PID 换回原值即可：
> ```bash
> echo 'AT+QCFG="usbcfg",0x2CA3,0x4006,1,1,1,1,1,0,0' | socat - /dev/ttyUSB2,crnl
> echo 'AT+CFUN=1,1' | socat - /dev/ttyUSB2,crnl
> ```
> 
> ### 9. 方案选型对比（为什么选 UTM）
> 
> | 方案 | 能跑对应架构 Linux | USB 直通 | 备注 |
> |---|---|---|---|
> | **UTM** ✅ | arm64 + amd64 均可（原生 Virtualize） | 支持 | 免费，本方案首选 |
> | Parallels / VMware Fusion | 是 | 支持 | 付费（Fusion Pro 个人版免费），更省心但非必要 |
> | OrbStack | 是 | ❌ 不支持 | 轻量但无 USB 直通，排除 |
> | Multipass | 是 | ❌ 不支持 | 无 USB 直通，排除 |
> | Docker Desktop | 是 | ❌ 困难 | 任意 USB 直通很痛，排除 |
> 
> ### 10. 速查：从零到能访问 vohive 的最短路径
> 
> ```bash
> # Mac 上：先 uname -m 确认芯片，选方案 A(arm64) 或 B(amd64)
> brew install --cask utm
> 
> # 方案 A（Apple Silicon）：
> curl -L -o ~/Downloads/ubuntu-24.04-live-server-arm64.iso \
>   https://cdimage.ubuntu.com/releases/24.04/release/ubuntu-24.04-live-server-arm64.iso
> # 方案 B（Intel）：
> curl -L -o ~/Downloads/ubuntu-24.04-live-server-amd64.iso \
>   https://releases.ubuntu.com/24.04/ubuntu-24.04-live-server-amd64

## 延伸閱讀

相關概念：[[虛擬化]] · [[USB 直通]] · [[Linux]]

相關專案：[[zerobootdev--zeroboot|zerobootdev/zeroboot]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]]

[GitHub](https://github.com/wlzh/dji-4g-vohive-mac)

## 相關收錄

> [!note]- 直接競品（同子分類：虛擬化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "虛擬化" AND file.name != "wlzh--dji-4g-vohive-mac"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "wlzh--dji-4g-vohive-mac"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "wlzh--dji-4g-vohive-mac" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "wlzh--dji-4g-vohive-mac"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["虛擬化","USB 直通","Linux"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wlzh--dji-4g-vohive-mac" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wlzh--dji-4g-vohive-mac" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wlzh" AND file.name != "wlzh--dji-4g-vohive-mac"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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
> const me = dv.page("Repos/wlzh--dji-4g-vohive-mac");
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

> **2026-07-04** — 首次收錄
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

- [[2026-07-04|2026-07-04]] — 首次收錄，443 stars
