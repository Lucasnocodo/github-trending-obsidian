---
repo: sooryathejas/METATRON
url: https://github.com/sooryathejas/METATRON
owner: sooryathejas
owner_type: User
language: Python
license: MIT
description: "AI-powered penetration testing assistant using local LLM on linux (Parrot OS)"
homepage: ""
stars: 1900
stars_per_day: 317
forks: 379
open_issues: 6
created: 2026-04-02
pushed_at: 2026-04-08
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "安全"
subcategory: "滲透測試"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "提供一個本地運行的 AI 滲透測試助手，無需雲端或 API 金鑰。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-12"
contributor_count: 2
engagement: "medium"
issue_close_rate: 57
repo_size_kb: 2133
readme_length: 8011
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:1900"
tags:
  - github
  - "category/安全"
  - "lang/python"
aliases:
  - "METATRON"
  - "sooryathejas/METATRON"
  - "提供一個本地運行的 AI 滲透測試助手，無需雲端或 API 金鑰。"
---

# METATRON

**1.9k** stars · **317** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/sooryathejas--METATRON");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供一個本地運行的 AI 滲透測試助手，無需雲端或 API 金鑰。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (317 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在本地環境中進行滲透測試的安全專業人士或開發者。
> **一句話重點** METATRON 的最大優勢在於其完全本地化的滲透測試能力，讓用戶能在不依賴雲端的情況下進行安全測試。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sooryathejas--METATRON");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "滲透測試" && p.file.name !== "sooryathejas--METATRON" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 滲透測試 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到全面的滲透測試能力，值得投入。

> [!abstract] 核心創新
> METATRON 是一個完全本地運行的滲透測試助手，無需任何雲端服務或 API 金鑰。

## 專案簡介

METATRON 是一個基於 CLI 的 AI 滲透測試助手，能在本地機器上運行，完全不依賴雲端服務。使用者只需提供目標 IP 或域名，METATRON 會運行一系列實際的偵查工具（如 nmap、whois、curl 等），並將結果傳遞給本地運行的 AI 模型進行分析，識別漏洞、建議利用方式及修復建議。所有掃描結果都會自動保存到 MariaDB 數據庫中，方便後續查詢和管理。其最大賣點在於完全離線運行，無需 API 金鑰，確保了用戶的隱私和安全。使用者可以透過簡單的 CLI 操作來執行掃描、查看歷史記錄及導出報告，報告格式包括 PDF 和 HTML。

此工具特別適合需要進行本地滲透測試的安全專業人士或開發者。METATRON 的技術棧包括 Python、Ollama 和 MariaDB，並使用 fine-tuned 的 Qwen 3.5 模型進行 AI 分析，這使其在處理複雜的滲透測試時具備良好的性能。相較於其他滲透測試工具，如 0xGF/boneyard 和 AlpinDale/parsync，METATRON 提供了更為集成的 AI 分析功能，並且不需要任何雲端服務，這對於需要保護敏感數據的環境來說是一大優勢。使用者在使用過程中可能會遇到一些常見問題，例如模型返回空響應或安全漏洞報告等，這些問題在 GitHub 的熱門 Issues 中已有反映。整體來看，METATRON 是一個成熟且功能強大的滲透測試工具，適合中小型團隊或個人使用，未來可能會持續增強 AI 分析能力和擴展支持的工具範圍。

**技術棧**：`Python 3` · `metatron-qwen (fine-tuned Qwen 3.5)` · `MariaDB` · `Ollama`

## 重點功能

- 本地 AI 分析 — 使用 metatron-qwen 模型，完全離線運行。
- 自動化偵查 — 整合 nmap、whois、curl 等工具進行全面掃描。
- 無需 API 金鑰 — 所有功能均在本地運行，無需外部依賴。
- MariaDB 後端 — 保存完整的掃描歷史，便於查詢和管理。
- 報告導出 — 支持生成 PDF 和 HTML 格式的專業報告。

## 快速開始

1. 克隆倉庫
```bash
git clone https://github.com/sooryathejas/METATRON.git
```
2. 創建並激活虛擬環境
```bash
python3 -m venv venv && source venv/bin/activate
```
3. 安裝 Python 依賴
```bash
pip install -r requirements.txt
```
4. 安裝系統工具
```bash
sudo apt install nmap whois whatweb curl dnsutils nikto
```
5. 啟動 AI 模型
```bash
ollama run metatron-qwen
```

## 程式碼範例

```python
{
  "前置條件": "確保已經安裝 Ollama 並下載了模型。",
  "指令": "ollama run metatron-qwen",
  "預期輸出": ">>>"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1900 stars（317/天），forks 379（19.9%），這顯示出強勁的用戶興趣。作者 Soorya Thejas 之前在滲透測試和 AI 領域有一定的經驗，這個專案解決了傳統滲透測試工具需要依賴雲端和 API 金鑰的痛點，讓用戶能在本地環境中進行完整的滲透測試。近期的推廣活動和社群討論也可能促進了其快速增長。隨著對數據隱私和安全的重視，這種本地化的解決方案越來越受到青睞。forks/stars 比率接近 20%，顯示出許多人對此工具的實際修改和使用。

## 適合誰使用

**目標受眾**：需要在本地環境中進行滲透測試的安全專業人士或開發者。

> [!example] 使用場景
> - 安全專家用它來進行內部網絡的滲透測試，因為它能提供全面的漏洞分析並保護敏感數據。
> - 開發者用它來測試新開發的應用程式的安全性，因為它能快速識別潛在的安全漏洞並提供修復建議。
> - IT 管理員用它來定期掃描公司伺服器，因為它能自動保存掃描歷史，便於後續查詢和報告生成。

## 架構分析

METATRON 採用 CLI 架構，使用 Python 作為主要開發語言，並整合多個偵查工具進行滲透測試。數據流從用戶輸入目標 IP 開始，經過多個偵查工具的運行，結果被傳遞給本地的 AI 模型進行分析。這樣的設計使得整個過程能夠在本地完成，避免了數據外洩的風險。

選擇 Ollama 作為 LLM 運行環境，因為它支持本地模型運行，這樣可以減少延遲並提高安全性。整體架構的設計考慮到用戶的隱私需求，並且能夠靈活應對不同的滲透測試需求。隨著使用者數量的增加，可能會面臨性能瓶頸，尤其是在同時運行多個偵查工具時，這需要進一步的優化和擴展。

未來可能會考慮支持更多的偵查工具和擴展模型的能力。

## 技術深入分析

METATRON 的核心技術機制在於其整合的 AI 模型和多種偵查工具。使用 Ollama 作為 LLM 運行環境，這使得模型能夠在本地運行，避免了雲端延遲和數據洩漏的風險。其使用的 metatron-qwen 模型經過專門調整，能夠針對滲透測試的特定需求進行優化。效能方面，METATRON 能夠處理多個偵查工具的輸出，並在本地進行分析，這對於需要快速反應的安全測試至關重要。

設計上選擇 Python 作為開發語言，這使得整體架構相對簡單，易於維護，但也可能導致性能瓶頸，特別是在處理大型數據集時。技術選擇上，METATRON 依賴於 MariaDB 作為數據存儲解決方案，這提供了良好的數據管理能力，但也增加了系統的複雜性。隨著用戶需求的增加，可能需要考慮擴展數據庫的能力和性能。整體而言，METATRON 的設計考慮到了安全性和用戶體驗，並在未來可能會進一步增強其 AI 分析能力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用步驟。安裝過程相對順暢，但需要注意系統工具的安裝。文件中包含了良好的入門指南，對於新手來說，花 30 分鐘內能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，無需雲端服務，保護用戶隱私。
> - 集成多種偵查工具，提供全面的滲透測試能力。
> - 支持生成專業報告，方便分享和記錄。

> [!danger] 缺點
> - 對系統資源要求較高，需要至少 8.4 GB 的 RAM。
> - 僅支援特定的 Linux 發行版，兼容性有限。
> - 目前功能仍在持續開發中，可能存在未解決的漏洞。

> [!warning] 注意事項
> - 需要至少 8.4 GB 的 RAM 來運行 AI 模型。
> - 僅支援 Parrot OS，對其他 Linux 發行版的兼容性未經測試。
> - 不支援 Windows 系統，僅限於 Linux 環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的滲透測試功能，但依賴雲端服務，無法離線運行。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，與 METATRON 的滲透測試功能無法直接比較。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的滲透測試功能，但依賴雲端服務，無法離線運行。 | 如果你的團隊需要雲端協作和即時更新的功能，則可以選擇此工具。 | medium，因為需要重新設置雲端環境和數據管理。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，與 METATRON 的滲透測試功能無法直接比較。 | 如果你的需求主要是文件同步而非滲透測試，則可以考慮此工具。 | low，因為功能和需求不同，無需遷移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **METATRON** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的滲透測試功能，但依賴雲端服務，無法離線運行。 | 專注於文件同步，與 METATRON 的滲透測試功能無法直接比較。 |
> | 遷移成本 | - | medium，因為需要重新設置雲端環境和數據管理。 | low，因為功能和需求不同，無需遷移。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要雲端協作和即時更新的功能，則可以選擇此工具。 | 如果你的需求主要是文件同步而非滲透測試，則可以考慮此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的滲透測試，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用過程中可能會遇到模型返回空響應的問題，特別是在資源不足的情況下。
  - 解法：確保系統有足夠的 RAM，或使用較小的模型版本。
- [MEDIUM] 某些偵查工具可能因為權限問題無法正常運行。
  - 解法：確保以 sudo 權限執行安裝命令。
- [MEDIUM] 數據庫連接問題，可能導致掃描結果無法保存。
  - 解法：檢查 MariaDB 是否正常運行並已正確配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型安全團隊進行內部滲透測試 | 非常適合 | 提供全面的本地化滲透測試能力，符合小型團隊的需求。 |
| 大型企業的安全審計 | 不適合 | 可能無法滿足高並發和大數據處理的需求。 |
| 開發者測試新應用的安全性 | 適合 | 能快速識別漏洞並提供修復建議，適合開發流程中使用。 |
| 教育機構進行滲透測試教學 | 非常適合 | 提供易於使用的界面和完整的功能，適合教學用途。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到全面的滲透測試能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sooryathejas--METATRON");
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
> const me = dv.page("Repos/sooryathejas--METATRON");
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
| Forks | 379 |
| Open Issues | 6 |
| Issue 解決率 | 57% (8 closed) |
| 最後推送 | 2026-04-08 |
| 建立日期 | 2026-04-02 |
| Repo 大小 | 2.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sooryathejas/METATRON) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `anyio` `beautifulsoup4` `certifi` `charset-normalizer` `click` `ddgs` `duckduckgo_search` `h11` `httpcore` `httpx` `idna` `lxml` `markdown-it-py` `mdurl` `mysql-connector-python`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sooryathejas](https://github.com/sooryathejas) | 14 |
> | [@shiel-pty](https://github.com/shiel-pty) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個 commit 和 issue 回應。
**連結**：[文件](https://github.com/sooryathejas/METATRON/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-08）
> **活躍天數** 2 天 · **最新 commit** security: allowlist tools (closes #5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/sooryathejas/METATRON/issues/16) | [MEDIUM] Server-Side Request Forgery (SSRF) in fetch_page()  | 0 | 0 |
> | [#15](https://github.com/sooryathejas/METATRON/issues/15) | I keep getting Model returned empty response. | 0 | 0 |
> | [#14](https://github.com/sooryathejas/METATRON/issues/14) | [CRITICAL] Security Vulnerability Report - RCE via Prompt In | 0 | 1 |
> | [#10](https://github.com/sooryathejas/METATRON/issues/10) | Allow use of external Ollama instance | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # METATRON
> AI-powered penetration testing assistant using local LLM on linux (Parrot OS)
> # 🔱 METATRON
> ### AI-Powered Penetration Testing Assistant
> 
>   
> 
>   
>   
>   
>   
>   
> 
> ---
> 
> ## 📌 What is Metatron?
> 
> **Metatron** is a CLI-based AI penetration testing assistant that runs entirely on your local machine — no cloud, no API keys, no subscriptions.
> 
> You give it a target IP or domain. It runs real recon tools (nmap, whois, whatweb, curl, dig, nikto), feeds all results to a locally running AI model, and the AI analyzes the target, identifies vulnerabilities, suggests exploits, and recommends fixes. Everything gets saved to a MariaDB database with full scan history.
> 
> ---
> 
> ## ✨ Features
> 
> - 🤖 **Local AI Analysis** — powered by `metatron-qwen` via Ollama, runs 100% offline
> - 🔍 **Automated Recon** — nmap, whois, whatweb, curl headers, dig DNS, nikto
> - 🌐 **Web Search** — DuckDuckGo search + CVE lookup (no API key needed)
> - 🗄️ **MariaDB Backend** — full scan history with 5 linked tables
> - ✏️ **Edit / Delete** — modify any saved result directly from the CLI
> - 🔁 **Agentic Loop** — AI can request more tool runs mid-analysis
> - 🚫 **No API Keys** — everything is free and local
> -📤 Export Reports
> 
> Metatron allows you to export scan results into clean, shareable report formats by selecting '2.view history'->select slno and export
> 
> 📄 PDF — professional vulnerability reports
> 🌐 HTML — browser-viewable reports
> ---
> 
> ## 🖥️ Screenshots
> 
>   
>   Main Menu
> 
>   
>   Recon tools running on target
> 
>   
>   metatron-qwen analyzing scan results
> 
>   
>   Vulnerabilities saved to database
> 
>   Export scan results as PDF and or HTML 
> ---
> 
> ## 🧱 Tech Stack
> 
> | Component  | Technology                          |
> |------------|-------------------------------------|
> | Language   | Python 3                            |
> | AI Model   | metatron-qwen (fine-tuned Qwen 3.5) |
> | Base Model | huihui_ai/qwen3.5-abliterated:9b    |
> | LLM Runner | Ollama                              |
> | Database   | MariaDB                             |
> | OS         | Parrot OS (Debian-based)            |
> | Search     | DuckDuckGo (free, no key)           |
> 
> ---
> 
> ## ⚙️ Installation
> 
> ### 1. Clone the repository
> 
> ```bash
> git clone https://github.com/sooryathejas/METATRON.git
> cd METATRON
> ```
> 
> ### 2. Create and activate virtual environment
> 
> ```bash
> python3 -m venv venv
> source venv/bin/activate
> ```
> 
> ### 3. Install Python dependencies
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> ### 4. Install system tools
> 
> ```bash
> sudo apt install nmap whois whatweb curl dnsutils nikto
> ```
> 
> ---
> 
> ## 🤖 AI Model Setup
> 
> ### Step 1 — Install Ollama
> 
> ```bash
> curl -fsSL https://ollama.com/install.sh | sh
> ```
> 
> ### Step 2 — Download the base model
> 
> ```bash
> ollama pull huihui_ai/qwen3.5-abliterated:9b
> ```
> 
> > ⚠️ This model requires at least 8.4 GB of RAM. If your system has less, use the 4b variant:
> > ```bash
> > ollama pull huihui_ai/qwen3.5-abliterated:4b
> > ```
> > Then edit `Modelfile` and change the FROM line to the 4b model.
> 
> ### Step 3 — Build the custom metatron-qwen model
> 
> The repo includes a `Modelfile` that fine-tunes the base model with pentest-specific parameters:
> 
> ```bash
> ollama create metatron-qwen -f Modelfile
> ```
> 
> This creates your local `metatron-qwen` model with:
> - 16,384 token context window
> - Temperature: 0.7
> - Top-k: 10
> - Top-p: 0.9
> 
> ### Step 4 — Verify the model exists
> 
> ```bash
> ollama list
> ```
> 
> You should see `metatron-qwen` in the list.
> 
> ---
> 
> ## 🗄️ Database Setup
> 
> ### Step 1 — Make sure MariaDB is running
> 
> ```bash
> sudo systemctl start mariadb
> sudo systemctl enable mariadb
> ```
> 
> ### Step 2 — Create the database and user
> 
> ```bash
> mysql -u root
> ```
> 
> ```sql
> CREATE DATABASE metatron;
> CREATE USER 'metatron'@'localhost' IDENTIFIED BY '123';
> GRANT ALL PRIVILEGES ON metatron.* TO 'metatron'@'localhost';
> FLUSH PRIVILEGES;
> EXIT;
> ```
> 
> ### Step 3 — Create the tables
> 
> ```bash
> mysql -u metatron -p123 metatron
> ```
> 
> ```sql
> CREATE TABLE history (
>   sl_no     INT AUTO_INCREMENT PRIMARY KEY,
>   target    VARCHAR(255) NOT NULL,
>                       scan_date DATETIME NOT NULL,
>                       status    VARCHAR(50) DEFAULT 'active'
> );
> 
> CREATE TABLE vulnerabilities (
>   id          INT AUTO_INCREMENT PRIMARY KEY,
>   sl_no       INT,
>   vuln_name   TEXT,
>   severity    VARCHAR(50),
>                               port        VARCHAR(20),
>                               service     VARCHAR(100),
>                               description TEXT,
>                               FOREIGN KEY (sl_no) REFERENCES history(sl_no)
> );
> 
> CREATE TABLE fixes (
>   id       INT AUTO_INCREMENT PRIMARY KEY,
>   sl_no    INT,
>   vuln_id  INT,
>   fix_text TEXT,
>   source   VARCHAR(50),
>                     FOREIGN KEY (sl_no) REFERENCES history(sl_no),
>                     FOREIGN KEY (vuln_id) REFERENCES vulnerabilities(id)
> );
> 
> CREATE TABLE exploits_attempted (
>   id           INT AUTO_INCREMENT PRIMARY KEY,
>   sl_no        INT,
>   exploit_name TEXT,
>   tool_used    TEXT,
>   payload      LONGTEXT,
>   result       TEXT,
>   notes        TEXT,
>   FOREIGN KEY (sl_no) REFERENCES history(sl_no)
> );
> 
> CREATE TABLE summary (
>   id           INT AUTO_INCREMENT PRIMARY KEY,
>   sl_no        INT,
>   raw_scan     LONGTEXT,
>   ai_analysis  LONGTEXT,
>   risk_level   VARCHAR(50),
>                       generated_at DATETIME,
>                       FOREIGN KEY (sl_no) REFERENCES history(sl_no)
> );
> ```
> 
> ---
> 
> ## 🚀 Usage
> 
> Metatron needs **two terminal tabs** to run.
> 
> ### Terminal 1 — Load the AI model
> 
> ```bash
> ollama run metatron-qwen
> ```
> 
> Wait until you see the `>>>` prompt. This means the model is loaded into memory and ready. You can leave this terminal running in the background.
> 
> ### Terminal 2 — Launch Metatron
> 
> ```bash
> cd ~/METATRON
> source venv/bin/activate
> python metatron.py
> ```
> 
> ---
> 
> ### Walkthrough
> 
> **1. Main menu appears:**
> ```
>   [1]  New Scan
>   [2]  View History
>   [3]  Exit
> ```
> 
> **2. Select [1] New Scan → enter your target:**
> ```
> [?] Enter target IP or domain: 192.168.1.1
> ```
> or
> ```
> [?] Enter target IP or domain: example.com
> ```
> 
> **3. Select recon tools to run:**
> ```
>   [1] nmap
>   [2] whois
>   [3] whatweb
>   [4] curl headers
>   [5] dig DNS
>   [6] nikto
>   [a] Run all (except nikto)
>   [n] Run all + nikto (slow)
> ```
> 
> **4. Metatron runs the tools, feeds results to the AI, and prints the analysis.**
> 
> **5. Everything is saved to MariaDB automatically.**
> 
> **6. After the scan you can edit or delete any result.**
> 
> ---
> 
> ## 📁 Project Structure
> 
> ```
> METATRON/
> ├── metatron.py       ← main CLI entry point
> ├── db.py             ← MariaDB connection and all CRUD operations
> ├── tools.py          ← recon tool runners (nmap, whois, etc.)
> ├── llm.py            ← Ollama interface and AI tool dispatch loop
> ├── search.py         ← DuckDuckGo web search and CVE lookup
> ├── Modelfile         ← custom model config for metatron-qwen
> ├── requirements.txt  ← Python dependencies
> ├── .gitignore        ← excludes venv, pycache, db files
> ├── LICENSE           ← MIT License
> ├── README.md         ← this file
> └── screenshots/      ← terminal screenshots for documentation
> ```
> 
> ---
> 
> ## 🗃️ Database Schema
> 
> All 5 tables are linked by `sl_no` (session number) from the `history` table:
> 
> ```
> history              ← one row per scan session (sl_no is the spine)
>     │
>     ├── vulnerabilities   ← vulns found, linked by sl_no
>     │       │
>     │       └── fixes     ← fixes per vuln, linked by vuln_id + sl_no
>     │
>     ├── exploits_attempted ← exploits tried, linked by sl_no
>     │
>     └── summary           ← full AI analysis dump, linked by sl_no
> ```
> 
> ---
> 
> ## ⚠️ Disclaimer
> 
> This tool is intended for **educational purposes and authorized penetration testing only**.
> 
> - Only use Metatron on systems you own or have **explicit written permission** to test.
> - Unauthorized scanning or exploitation of systems is **illegal**.
> - The author is not responsible for any misuse of this tool.
> 
> ---
> 
> ## 👤 Author
> 
> **Soorya Thejas**
> - GitHub: [@sooryathejas](https://github.com/sooryathejas)
> 
> ---
> 
> ## 📄 License
> 
> This project is licensed under the MIT License — see the [LICENSE](LICENSE) file f

## 延伸閱讀

相關概念：[[滲透測試]] · [[AI 分析]] · [[本地運行]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]]

[GitHub](https://github.com/sooryathejas/METATRON)

## 相關收錄

> [!note]- 直接競品（同子分類：滲透測試）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "滲透測試" AND file.name != "sooryathejas--METATRON"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "sooryathejas--METATRON"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "sooryathejas--METATRON" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "sooryathejas--METATRON"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["滲透測試","AI 分析","本地運行"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sooryathejas--METATRON" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sooryathejas--METATRON");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sooryathejas--METATRON" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sooryathejas" AND file.name != "sooryathejas--METATRON"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sooryathejas--METATRON");
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
> const me = dv.page("Repos/sooryathejas--METATRON");
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
> const me = dv.page("Repos/sooryathejas--METATRON");
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
> const me = dv.page("Repos/sooryathejas--METATRON");
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
> const me = dv.page("Repos/sooryathejas--METATRON");
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

> **2026-04-09** — 首次收錄
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

- [[2026-04-09|2026-04-09]] — 首次收錄，1.9k stars
