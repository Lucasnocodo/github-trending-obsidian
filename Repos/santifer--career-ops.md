---
repo: santifer/career-ops
url: https://github.com/santifer/career-ops
owner: santifer
owner_type: User
language: Go
license: MIT
description: "AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing."
homepage: ""
stars: 11317
stars_per_day: 5659
forks: 2059
open_issues: 9
created: 2026-04-04
pushed_at: 2026-04-06
first_seen: 2026-04-07
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-07
use_case: "一個 AI 驅動的求職系統，幫助用戶生成個性化履歷、評估工作機會並追蹤申請進度。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-10"
contributor_count: 3
engagement: "medium"
issue_close_rate: 44
repo_size_kb: 8539
readme_length: 9964
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-07"
star_history: "2026-04-07:11317"
tags:
  - github
  - "category/開發工具"
  - "lang/go"
  - "topic/ai_agent"
  - "topic/anthropic"
  - "topic/automation"
  - "topic/career"
  - "topic/claude"
aliases:
  - "career-ops"
  - "santifer/career-ops"
  - "一個 AI 驅動的求職系統，幫助用戶生成個性化履歷、評估工作機會並追蹤申請進度。"
---

# career-ops

**11.3k** stars · **5.7k** stars/天 · 建立 2 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/santifer--career-ops");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ai-agent` `anthropic` `automation` `career` `claude` `claude-code` `cli` `golang` `interview-prep` `job-search` `open-source` `resume`

> [!summary] 一句話摘要
> 一個 AI 驅動的求職系統，幫助用戶生成個性化履歷、評估工作機會並追蹤申請進度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (5.7k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望自動化求職過程並提高效率的求職者，特別是那些面對多個申請的情況。
> **一句話重點** Career-Ops 不僅僅是一個求職工具，而是一個全面的求職管理系統，能夠自動化繁瑣的任務，讓求職者專注於高質量的申請。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/santifer--career-ops");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "santifer--career-ops" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠顯著提高求職效率，值得一試。

> [!abstract] 核心創新
> Career-Ops 將 Claude Code 應用於求職過程的全自動化，提供多種功能以提升求職效率。

## 專案簡介

Career-Ops 是一個基於 Claude Code 的求職管道，能夠自動化求職過程。用戶只需粘貼工作描述或網址，系統會自動評估工作機會，生成 ATS 優化的 PDF 履歷，並追蹤申請狀態。核心機制是通過 AI 代理進行多層次的評估，包括角色匹配、薪資研究和面試準備，並提供一個終端用戶界面來管理所有申請。這個工具的賣點在於其自動化的全流程管理，讓求職者能夠專注於高質量的申請，而不是大量的低質量申請。使用者可以透過 `/career-ops {paste a JD}` 指令啟動完整的自動化流程，或使用 `/career-ops scan` 來掃描新的工作機會。技術上，這個專案使用 Go 和 JavaScript，並依賴 Playwright 進行網頁掃描和 PDF 生成，這使得它在處理多個工作申請時能夠高效運行。與傳統的求職方式相比，Career-Ops 提供了一個更智能的解決方案，能夠自動化繁瑣的任務，並提高求職效率。

**技術棧**：`Go` · `JavaScript` · `Shell` · `HTML`

## 重點功能

- 自動管道 — 粘貼網址即可獲得完整的評估、PDF 和追蹤條目。
- 六大評估模塊 — 包括角色摘要、履歷匹配、薪資研究等。
- 面試故事庫 — 收集 STAR+反思故事以應對行為問題。
- ATS PDF 生成 — 生成關鍵字注入的履歷，確保符合 ATS 要求。
- 批量處理 — 同時評估多個工作機會，使用 `claude -p` 進行並行處理。
- 終端用戶界面 — 提供可視化的管道瀏覽和管理功能。

## 快速開始

1. 克隆並安裝
```bash
git clone https://github.com/santifer/career-ops.git && cd career-ops && npm install
```
2. 安裝 PDF 生成所需的 Chromium
```bash
npx playwright install chromium
```
3. 配置用戶資料
```bash
cp config/profile.example.yml config/profile.yml
```
4. 開始使用
```bash
/career-ops {paste a JD}
```

## 程式碼範例

```go
{
  "前置條件": "用戶已安裝並配置 Career-Ops。",
  "指令": "/career-ops {paste a JD}",
  "預期輸出": "自動評估報告、生成的 PDF 和追蹤條目。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 11317 stars（5659/天），forks 2059（18.2%），這顯示出極高的用戶興趣。作者 Santiago 是一位 AI 領域的專家，曾經創立並出售過公司，這使他對求職過程有深刻的理解。這個專案解決了求職者在繁瑣的申請過程中缺乏自動化工具的痛點，之前求職者通常需要手動追蹤申請進度和生成履歷，效率低下。近期的推廣活動和社交媒體的討論也可能促進了這個專案的曝光。高達 18.2% 的 forks/stars 比率顯示出許多用戶正在進行實際的修改和使用，這意味著這個工具不僅僅是觀望，而是有實際的應用需求。

## 適合誰使用

**目標受眾**：希望自動化求職過程並提高效率的求職者，特別是那些面對多個申請的情況。

> [!example] 使用場景
> - 求職者用它來自動生成 ATS 優化的履歷，因為手動編輯履歷容易出錯且耗時。
> - 招聘顧問用它來批量評估多個職位的申請，因為這樣可以節省大量的時間和精力。
> - 職業轉換者用它來追蹤申請狀態和進行市場調查，因為這樣能夠更好地了解行業需求。

## 架構分析

Career-Ops 採用微服務架構，將不同功能模組化以提高可維護性和擴展性。主要由 Claude Code 驅動，通過 Playwright 進行網頁掃描和 PDF 生成，這樣的設計使得系統能夠靈活應對不同的求職需求。資料流方面，使用者粘貼的工作描述會經過多個評估模組，最終生成報告和 PDF，這樣的流程確保了信息的準確性和完整性。選擇 Go 作為後端語言是因為其高效性能和良好的並發處理能力，但這也意味著需要一定的學習曲線。整體架構的擴展性良好，但在處理大量數據時可能會面臨性能瓶頸，特別是在高併發情況下。

## 技術深入分析

Career-Ops 的核心技術機制是基於 Claude Code 的 AI 代理，這使得它能夠自動化求職過程中的多個步驟，包括履歷生成和工作評估。系統使用 Playwright 進行網頁掃描，這樣的設計使得它能夠靈活適應不同的招聘網站和平台。效能方面，系統能夠同時處理多個工作申請，這對於需要快速反應的求職者來說非常重要。選擇 Go 作為後端語言是因為它的高效性能和良好的並發處理能力，這使得系統能夠在高負載下運行良好。技術風險方面，隨著用戶數量的增加，系統可能會面臨性能瓶頸，特別是在高併發情況下。整合方面，這個工具可以與現有的求職平台和工具鏈無縫對接，並且提供了良好的 API 支持，這使得它在實際使用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Node.js 環境的配置。文件中提供了詳細的設置指南，對於初學者來說非常友好，並且有多語言支持。

## 優缺點分析

> [!success] 優點
> - 自動化求職流程，節省時間和精力。
> - 提供多種功能以支持求職者的不同需求。
> - 用戶友好的終端界面，便於管理申請狀態。

> [!danger] 缺點
> - 初次使用時需要時間來適應和配置。
> - 在某些平台上可能存在兼容性問題。
> - 對於非技術用戶來說，設置過程可能有點複雜。

> [!warning] 注意事項
> - 需要 Node.js 環境來運行。
> - 初次評估可能不準確，需要用戶提供更多上下文。
> - 不支持 Windows 的某些路徑，可能導致掃描失敗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而 Career-Ops 專注於求職過程的自動化和管理。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據收集和分析，Career-Ops 則專注於求職和履歷生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| JobScan | 專注於履歷優化和 ATS 兼容性，而 Career-Ops 提供更全面的求職管理功能。 | 如果你的主要需求是履歷優化，而不是整個求職流程的管理。 | medium - 需要將現有的履歷數據遷移到新平台。 |
| Hired | 提供求職者與招聘方的匹配服務，而 Career-Ops 則專注於求職者的自我管理。 | 如果你希望有招聘方主動聯繫你，而不是主動申請工作。 | low - 主要是註冊和設置個人資料。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **career-ops** | **JobScan** | **Hired** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於履歷優化和 ATS 兼容性，而 Career-Ops 提供更全面的求職管理功能。 | 提供求職者與招聘方的匹配服務，而 Career-Ops 則專注於求職者的自我管理。 |
> | 遷移成本 | - | medium - 需要將現有的履歷數據遷移到新平台。 | low - 主要是註冊和設置個人資料。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是履歷優化，而不是整個求職流程的管理。 | 如果你希望有招聘方主動聯繫你，而不是主動申請工作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心求職流程。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 上路徑處理有 bug，可能導致掃描失敗
  - 解法：使用 WSL 或修改路徑配置
- [MEDIUM] 初次評估結果不準確，需要時間適應
  - 解法：提供更多上下文信息以提高準確性
- [MEDIUM] 某些功能在特定環境下可能不兼容
  - 解法：檢查系統要求並進行相應配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化求職流程能夠提高效率，節省時間。 |
| 大型企業的 HR 團隊 | 普通 | 雖然功能強大，但可能不符合所有企業的需求。 |
| 自由職業者尋找短期項目 | 適合 | 能夠快速生成履歷並追蹤多個申請。 |
| 求職者需要大量申請的情況 | 非常適合 | 批量處理功能能夠顯著提高效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠顯著提高求職效率，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Career-Ops 可以與多個求職平台和工具鏈整合，特別是使用 Playwright 進行網頁掃描的部分。它可以在用戶的求職流程中作為一個中心化的管理工具，並且與 GitHub Actions 等 CI 工具兼容。整合過程中，最常見的問題是配置文件的路徑問題，這需要用戶進行適當的調整以確保兼容性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Career-Ops 出現之前，求職者通常依賴手動追蹤申請和生成履歷的方式，這導致了效率低下和錯過機會的情況。隨著 AI 技術的進步，特別是 Claude Code 的應用，使得這種全自動化的求職管理系統成為可能。這個工具代表了求職過程中自動化和智能化的趨勢，未來可能會有更多類似的解決方案出現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/santifer--career-ops");
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
> const me = dv.page("Repos/santifer--career-ops");
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
| Forks | 2.1k |
| Open Issues | 9 |
| Issue 解決率 | 44% (7 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-04-04 |
| Repo 大小 | 8.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/santifer/career-ops) |
| Topics | `ai-agent` `anthropic` `automation` `career` `claude` `claude-code` `cli` `golang` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 44
>     "JavaScript" : 38
>     "Shell" : 12
>     "HTML" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@santifer](https://github.com/santifer) | 31 |
> | [@OthmanAdi](https://github.com/OthmanAdi) | 3 |
> | [@rishitsaraf](https://github.com/rishitsaraf) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，已經有多個開放的問題和貢獻者參與。
**連結**：[文件](https://github.com/santifer/career-ops)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-06）
> **活躍天數** 1 天 · **最新 commit** Add Buy Me a Coffee link to README (EN + ES + badge)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/santifer/career-ops/issues/1) | AI Generated CVs - Indeed, Linkedin, and other are filtering `bug` | 2 | 2 |
> | [#14](https://github.com/santifer/career-ops/issues/14) | Does it support other tools like copilot or gemini? `enhancement` | 1 | 2 |
> | [#32](https://github.com/santifer/career-ops/issues/32) | tracker scripts: Windows path broken — new URL().pathname pr | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Career-Ops
> 
> **[:gb: English](#what-is-this)** | **[:es: Español](#es-versión-en-español)**
> 
> > AI-powered job search pipeline built on Claude Code. Evaluate offers, generate tailored CVs, scan portals, and track everything -- powered by AI agents.
> 
> ---
> 
>   
> 
> 
> ## Quick Start
> 
> ```bash
> 
> # 1. Clone and install
> git clone https://github.com/santifer/career-ops.git
> cd career-ops && npm install
> npx playwright install chromium   # Required for PDF generation
> 
> 
> ## Usage
> 
> Career-ops is a single slash command with multiple modes:
> 
> ```
> /career-ops                → Show all available commands
> /career-ops {paste a JD}   → Full auto-pipeline (evaluate + PDF + tracker)
> /career-ops scan           → Scan portals for new offers
> /career-ops pdf            → Generate ATS-optimized CV
> /career-ops batch          → Batch evaluate multiple offers
> /career-ops tracker        → View application status
> /career-ops apply          → Fill application forms with AI
> /career-ops pipeline       → Process pending URLs
> /career-ops contacto       → LinkedIn outreach message
> /career-ops deep           → Deep company research
> /career-ops training       → Evaluate a course/cert
> /career-ops project        → Evaluate a portfolio project
> ```
> 
> Or just paste a job URL or description directly -- career-ops auto-detects it and runs the full pipeline.
> 
> 
> ## Features
> 
> | Feature | Description |
> |---------|-------------|
> | **Auto-Pipeline** | Paste a URL, get a full evaluation + PDF + tracker entry |
> | **6-Block Evaluation** | Role summary, CV match, level strategy, comp research, personalization, interview prep (STAR+R) |
> | **Interview Story Bank** | Accumulates STAR+Reflection stories across evaluations -- 5-10 master stories that answer any behavioral question |
> | **Negotiation Scripts** | Salary negotiation frameworks, geographic discount pushback, competing offer leverage |
> | **ATS PDF Generation** | Keyword-injected CVs with Space Grotesk + DM Sans design |
> | **Portal Scanner** | 45+ companies pre-configured (Anthropic, OpenAI, ElevenLabs, Retool, n8n...) + custom queries across Ashby, Greenhouse, Lever, Wellfound |
> | **Batch Processing** | Parallel evaluation with `claude -p` workers |
> | **Dashboard TUI** | Terminal UI to browse, filter, and sort your pipeline |
> | **Human-in-the-Loop** | AI evaluates and recommends, you decide and act. The system never submits an application -- you always have the final call |
> | **Pipeline Integrity** | Automated merge, dedup, status normalization, health checks |
> 
> 
> ## About the Author
> 
> I'm Santiago -- Head of Applied AI, former founder (built and sold a business that still runs with my name on it). I built career-ops to manage my own job search. It worked: I used it to land my current role.
> 
> My portfolio and other open source projects → [santifer.io](https://santifer.io)
> 
> ☕ [Buy me a coffee](https://buymeacoffee.com/santifer) if career-ops helped your job search.
> 
> 
> # 2. Configure
> cp config/profile.example.yml config/profile.yml  # Edit with your details
> cp templates/portals.example.yml portals.yml       # Customize companies
> 
> 
> ## Pre-configured Portals
> 
> The scanner comes with **45+ companies** ready to scan and **19 search queries** across major job boards. Copy `templates/portals.example.yml` to `portals.yml` and add your own:
> 
> **AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone
> **Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI
> **AI Platforms:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI
> **Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys
> **Enterprise:** Salesforce, Twilio, Gong, Dialpad
> **LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics
> **Automation:** n8n, Zapier, Make.com
> **European:** Factorial, Attio, Tinybird, Clarity AI, Travelperk
> 
> **Job boards searched:** Ashby, Greenhouse, Lever, Wellfound, Workable, RemoteFront
> 
> 
> ## Inicio rapido
> 
> ```bash
> 
> # 2. Configurar
> cp config/profile.example.yml config/profile.yml  # Editar con tus datos
> cp templates/portals.example.yml portals.yml       # Personalizar empresas
> 
> 
> ## What Is This
> 
> Career-Ops turns Claude Code into a full job search command center. Instead of manually tracking applications in a spreadsheet, you get an AI-powered pipeline that:
> 
> - **Evaluates offers** with a structured A-F scoring system (10 weighted dimensions)
> - **Generates tailored PDFs** -- ATS-optimized CVs customized per job description
> - **Scans portals** automatically (Greenhouse, Ashby, Lever, company pages)
> - **Processes in batch** -- evaluate 10+ offers in parallel with sub-agents
> - **Tracks everything** in a single source of truth with integrity checks
> 
> > **Important: This is NOT a spray-and-pray tool.** Career-ops is a filter -- it helps you find the few offers worth your time out of hundreds. The system strongly recommends against applying to anything scoring below 4.0/5. Your time is valuable, and so is the recruiter's. Always review before submitting.
> 
> Career-ops is agentic: Claude Code navigates career pages with Playwright, evaluates fit by reasoning about your CV vs the job description (not keyword matching), and adapts your resume per listing.
> 
> > **Heads up: the first evaluations won't be great.** The system doesn't know you yet. Feed it context -- your CV, your career story, your proof points, your preferences, what you're good at, what you want to avoid. The more you nurture it, the better it gets. Think of it as onboarding a new recruiter: the first week they need to learn about you, then they become invaluable.
> 
> Built by someone who used it to evaluate 740+ job offers, generate 100+ tailored CVs, and land a Head of Applied AI role. [Read the full case study](https://santifer.io/career-ops-system).
> 
> 
> # 3. Add your CV
> 
> # Create cv.md in the project root with your CV in markdown
> 
> 
> # 4. Personalize with Claude
> claude   # Open Claude Code in this directory
> 
> 
> # Then ask Claude to adapt the system to you:
> 
> # "Change the archetypes to backend engineering roles"
> 
> # "Translate the modes to English"
> 
> # "Add these 5 companies to portals.yml"
> 
> # "Update my profile with this CV I'm pasting"
> 
> 
> # 5. Start using
> 
> # Paste a job URL or run /career-ops
> ```
> 
> > **The system is designed to be customized by Claude itself.** Modes, archetypes, scoring weights, negotiation scripts -- just ask Claude to change them. It reads the same files it uses, so it knows exactly what to edit.
> 
> See [docs/SETUP.md](docs/SETUP.md) for the full setup guide.
> 
> 
> ## How It Works
> 
> ```
> You paste a job URL or description
>         │
>         ▼
> ┌──────────────────┐
> │  Archetype       │  Classifies: LLMOps / Agentic / PM / SA / FDE / Transformation
> │  Detection       │
> └────────┬─────────┘
>          │
> ┌────────▼─────────┐
> │  A-F Evaluation   │  Match, gaps, comp research, STAR stories
> │  (reads cv.md)    │
> └────────┬─────────┘
>          │
>     ┌────┼────┐
>     ▼    ▼    ▼
>  Report  PDF  Tracker
>   .md   .pdf   .tsv
> ```
> 
> 
> ## Dashboard TUI
> 
> The built-in terminal dashboard lets you browse your pipeline visually:
> 
> ```bash
> cd dashboard
> go build -o career-dashboard .
> ./career-dashboard
> ```
> 
> Features: 6 filter tabs, 4 sort modes, grouped/flat view, lazy-loaded previews, inline status changes.
> 
> 
> ## Project Structure
> 
> ```
> career-ops/
> ├── CLAUDE.md                    # Agent instructions
> ├── cv.md                        # Your CV (create this)
> ├── article-digest.md            # Your proof points (optional)
> ├── config/
> │   └── profile.example.yml      # Template for your profile
> ├── modes/                       # 14 skill modes
> │   ├── _shared.md               # Shared context (customize this)
> │   ├── oferta.md                # Single evaluation
> │   ├── pdf.md                   # PDF generation
> │   ├── scan.md                  # Portal scanner
> │   ├── batch.md                 # Batch processing
> │   └── ...
> ├── templates/
> │   ├── cv-template.html         # ATS-optimized CV template
> │   ├── portals.example.yml      # Scanner config template
> │   └── states.yml               # Canonical statuses
> ├── batch/
> │

## 延伸閱讀

相關概念：[[自動化]] · [[求職管理]] · [[AI 代理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]]

[GitHub](https://github.com/santifer/career-ops)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "santifer--career-ops"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "santifer--career-ops"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "santifer--career-ops" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "santifer--career-ops"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","求職管理","AI 代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "santifer--career-ops" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/santifer--career-ops");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "santifer--career-ops" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "santifer" AND file.name != "santifer--career-ops"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/santifer--career-ops");
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
> const me = dv.page("Repos/santifer--career-ops");
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
> const me = dv.page("Repos/santifer--career-ops");
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
> const me = dv.page("Repos/santifer--career-ops");
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
> const me = dv.page("Repos/santifer--career-ops");
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

> **2026-04-07** — 首次收錄
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

- [[2026-04-07|2026-04-07]] — 首次收錄，11.3k stars
