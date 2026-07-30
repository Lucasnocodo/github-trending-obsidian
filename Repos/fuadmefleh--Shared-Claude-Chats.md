---
repo: fuadmefleh/Shared-Claude-Chats
url: https://github.com/fuadmefleh/Shared-Claude-Chats
owner: fuadmefleh
owner_type: User
language: Python
license: N/A
description: "An archive of public Claude and Grok conversations, exported from their share links as plain markdown, plus the two scripts that produce it."
homepage: ""
stars: 936
stars_per_day: 234
forks: 154
open_issues: 1
created: 2026-07-26
pushed_at: 2026-07-29
first_seen: 2026-07-29
week: "2026-W31"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-29
use_case: "匯總公共 Claude 和 Grok 對話的存檔，方便查閱和分享。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-02"
contributor_count: 2
engagement: "medium"
issue_close_rate: 88
repo_size_kb: 13552
readme_length: 9182
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-29"
star_history: "2026-07-29:721,2026-07-30:936"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "Shared-Claude-Chats"
  - "fuadmefleh/Shared-Claude-Chats"
  - "匯總公共 Claude 和 Grok 對話的存檔，方便查閱和分享。"
---

# Shared-Claude-Chats

**721** stars · **240** stars/天 · 建立 3 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 匯總公共 Claude 和 Grok 對話的存檔，方便查閱和分享。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (240 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要整理和分享 AI 對話資料的研究人員和開發者。
> **一句話重點** 這個專案讓 AI 對話的整理和分享變得簡單而高效，特別適合需要大量資料的使用者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "fuadmefleh--Shared-Claude-Chats" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效的對話整理工具，值得投入。

> [!abstract] 核心創新
> 這個專案的創新在於能夠自動化匯出多個來源的 AI 對話，並以結構化的格式保存。

## 專案簡介

這個專案提供了一個公共的 Claude 和 Grok 對話存檔，包含 1,528 條對話和 16,394 條訊息，總大小約 66 MB。使用者可以透過簡單的 Python 腳本，將分享連結轉換為 Markdown 格式的對話檔案，並且支援多個來源（如 Claude、Grok、Kimi 等）。核心賣點是能夠快速匯出和整理這些對話，方便後續查閱或分享。使用者只需準備分享連結，然後執行相應的腳本，例如 `python3 scripts/claude_share_export.py link_lists/claudeaisharelinks.txt -o claude_chats`，即可將對話存檔到指定目錄。這樣的設計使得使用者能夠輕鬆地管理大量對話，並保持資料的結構化。

這個專案的技術實作上，依賴 `curl_cffi` 和 `requests` 兩個庫，這使得它在處理 HTTP 請求時相對輕量且高效。相較於其他類似工具，如 `AgriciDaniel/claude-obsidian`，這個專案的優勢在於其多來源的匯出能力和簡單的使用流程。使用者可以在不同的場景下應用這個工具，例如學術研究、開發文檔或是社群討論。儘管目前只有一個開放的 Issue，但專案的活躍度和社群支持度都相對良好，這對於未來的維護和功能擴展是有利的。整體來說，這是一個適合需要整理和分享 AI 對話的開發者或研究者的工具，尤其在資料量較大的情況下，能夠有效提高工作效率。

**技術棧**：`Python 3.x` · `curl_cffi` · `requests`

## 重點功能

- 多來源支持 — 支援從 Claude、Grok、Kimi 等多個平台匯出對話。
- Markdown 格式輸出 — 將對話以結構化的 Markdown 格式保存，方便閱讀和分享。
- 簡單的命令行介面 — 使用者只需執行簡單的 Python 腳本即可完成匯出。
- 自動跳過已存檔對話 — 重複執行時會自動跳過已經存檔的對話，節省時間。
- 可選內容標誌 — 提供選項來包含思考過程或引用來源，增加對話的豐富性。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 準備分享連結
```bash
將分享連結放入 link_lists/*.txt 檔案中
```
3. 執行匯出腳本
```bash
python3 scripts/claude_share_export.py link_lists/claudeaisharelinks.txt -o claude_chats
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 721 stars（240/天），forks 118（16.4%），這顯示出相對穩定的增長。作者 fuadmefleh 和 DragonflyerHD 在這個領域有一定的經驗，解決了以往對話資料整理的繁瑣問題。之前的解決方案往往需要手動整理或缺乏多來源的支持，而這個專案提供了一個自動化的解決方案。社群的反應也表明了對這個工具的需求，特別是在 AI 對話資料日益增多的背景下。forks/stars 比率在 16.4%，顯示出不少人對這個工具有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：需要整理和分享 AI 對話資料的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來整理和分析 AI 對話資料，因為它能快速匯出多個來源的對話，節省手動整理的時間。
> - 開發者用它來生成測試資料，因為可以從實際的對話中提取範例，提升測試的真實性。
> - 內容創作者用它來收集靈感和素材，因為能方便地查閱過去的對話，激發創意。

## 架構分析

這個專案採用簡單的 Python 腳本架構，主要由多個匯出腳本組成，每個腳本針對不同的對話來源。資料流從使用者提供的分享連結開始，經過 HTTP 請求獲取對話內容，然後轉換為 Markdown 格式並存儲。這樣的設計使得使用者能夠快速擴展對話來源，並保持資料的結構化。

選擇 Python 作為開發語言的原因在於其強大的庫支持和簡單的語法，這使得專案的維護和擴展都相對容易。對於依賴的管理，使用 `requirements.txt` 來確保環境的一致性，降低了使用者的上手難度。整體架構輕量且易於擴展，未來可以考慮加入更多的對話來源或功能。

## 技術深入分析

這個專案的核心技術機制是透過 Python 腳本自動化匯出多個 AI 對話平台的內容，使用了 `curl_cffi` 和 `requests` 來處理 HTTP 請求，確保了資料的快速獲取。效能上，對於小型到中型的對話資料集，處理速度相對較快，但對於大型資料集可能會遇到性能瓶頸。設計上選擇 Python 是因為其語法簡單且有豐富的庫支持，這使得專案的擴展性和維護性都較高。技術風險方面，依賴於外部 API 的穩定性，若 API 變更可能會導致功能失效。整合方面，這個工具可以輕鬆與其他 Python 生態系統的工具鏈結合，並且能夠在 CI/CD pipeline 中使用，進一步提升開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的使用範例，安裝過程順暢，沒有明顯的坑。文件中有良好的 getting started guide，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多個 AI 平台的對話匯出，增加了使用的靈活性。
> - Markdown 格式便於後續的資料處理和分享。
> - 自動跳過已存檔的對話，提升使用效率。

> [!danger] 缺點
> - 目前僅支持公共分享的對話，無法處理私密對話。
> - 對於大型資料集的處理可能會受到性能影響。
> - 依賴於外部 API 的穩定性，若 API 改變可能影響功能。

> [!warning] 注意事項
> - 僅支援 Python 3.x 環境
> - 需要有效的分享連結才能匯出對話
> - 對於非公共分享的對話無法進行匯出

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於將 Claude 對話整合到 Obsidian 知識庫中，功能較為專一，適合已在使用 Obsidian 的用戶。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更為複雜的對話生成和管理功能，但學習曲線較陡，適合需要高自定義的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於將 Claude 對話整合到 Obsidian 知識庫中，提供更為專一的功能。 | 如果你的團隊已經在使用 Obsidian 並希望將對話資料整合進去，這個工具會更合適。 | medium，因為需要將對話格式轉換為 Obsidian 支援的格式。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更為複雜的對話生成和管理功能，適合需要高自定義的開發者。 | 如果你的專案需要更複雜的對話管理和生成能力，這個工具會更適合。 | high，因為需要重新設計資料流和管理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shared-Claude-Chats** | **claude-obsidian** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於將 Claude 對話整合到 Obsidian 知識庫中，提供更為專一的功能。 | 提供更為複雜的對話生成和管理功能，適合需要高自定義的開發者。 |
> | 遷移成本 | - | medium，因為需要將對話格式轉換為 Obsidian 支援的格式。 | high，因為需要重新設計資料流和管理邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Obsidian 並希望將對話資料整 | 如果你的專案需要更複雜的對話管理和生成能力，這個工具會更適合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於非公共分享的對話無法進行匯出，可能會造成資料損失。
  - 解法：確保使用的分享連結是公共的。
- [MEDIUM] 大型資料集的處理速度可能較慢，導致使用者等待時間過長。
  - 解法：考慮分批匯出對話。
- **[HIGH]** 若 API 改變，可能會導致匯出功能失效。
  - 解法：定期檢查 API 文檔，及時更新腳本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速整理和分享 AI 對話，提升團隊效率。 |
| 大型企業的資料分析團隊 | 普通 | 雖然能夠處理資料，但對於大型資料集的性能可能不足。 |
| 學術研究團隊 | 適合 | 能夠快速匯出並整理大量的對話資料，便於後續分析。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的對話整理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，主要存取公開的對話資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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
| Forks | 118 |
| Open Issues | 1 |
| Issue 解決率 | 88% (7 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-26 |
| Repo 大小 | 13.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/fuadmefleh/Shared-Claude-Chats) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `curl_cffi` `requests`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@fuadmefleh](https://github.com/fuadmefleh) | 2 |
> | [@DragonflyerHD](https://github.com/DragonflyerHD) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度良好，開放的 Issue 數量少，且有定期的更新。
**連結**：[文件](https://github.com/fuadmefleh/Shared-Claude-Chats)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-28）
> **活躍天數** 2 天 · **最新 commit** Add 58 more exported DeepSeek conversations

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/fuadmefleh/Shared-Claude-Chats/issues/13) | LOL | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Shared AI Chats
> 
> An archive of public Claude, Grok, Kimi, Qwen, and DeepSeek conversations,
> exported from their share links as plain markdown, plus the five scripts that
> produce it. A handful of other conversations, added by hand from sources with
> no public share link, live alongside them.
> 
> 1,528 conversations, 16,394 messages, ~66 MB.
> 
> | Directory | Source | Conversations | Messages | Longest |
> | --- | --- | --- | --- | --- |
> | `claude_chats/` | `claude.ai/share` | 755 | 7,865 | 282 |
> | `grok_chats/` | `grok.com/share` | 519 | 7,210 | 4,308 |
> | `kimi_chats/` | `kimi.com/share` | 57 | 171 | 28 |
> | `qwen_chats/` | `chat.qwen.ai/s` | 23 | 132 | 24 |
> | `deepseek_chats/` | `chat.deepseek.com/share` | 171 | 1,010 | 382 |
> | `aistudio_chats/` | Google AI Studio (manual) | 3 | 6 | 4 |
> 
> 
> ## Layout
> 
> ```
> scripts/claude_share_export.py                exporter for claude.ai shares
> scripts/grok_share_export.py                  exporter for grok.com shares
> scripts/kimi_share_export.py                  exporter for kimi.com shares
> scripts/qwen_share_export.py                  exporter for chat.qwen.ai shares
> scripts/deepseek_share_export.py              exporter for chat.deepseek.com shares
> scripts/aistudio_export.py                    converter for raw Google AI Studio page copies
> link_lists/claudeaisharelinks.txt             the claude.ai links this archive was built from
> link_lists/grokaisharelinks.txt               the grok.com links this archive was built from
> link_lists/kimiaisharelinks.txt               the kimi.com links this archive was built from
> link_lists/qwenaisharelinks.txt               the chat.qwen.ai links this archive was built from
> link_lists/qwendeploysharelinks.txt           chat.qwen.ai/s/deploy/... links -- not exportable, see below
> link_lists/deepseeksharelinks.txt             the chat.deepseek.com links this archive was built from
> raw_google_dumps/                             raw AI Studio page copies aistudio_export.py reads
> claude_chats/                                 one markdown file per Claude conversation
> grok_chats/                                   one markdown file per Grok conversation
> kimi_chats/                                   one markdown file per Kimi conversation
> qwen_chats/                                   one markdown file per Qwen conversation
> deepseek_chats/                               one markdown file per DeepSeek conversation
> aistudio_chats/                               one markdown file per AI Studio conversation
> 
> claude_chats/.claude-share-export.json        manifest for claude_chats/
> grok_chats/.grok-share-export.json            manifest for grok_chats/
> kimi_chats/.kimi-share-export.json            manifest for kimi_chats/
> qwen_chats/.qwen-share-export.json            manifest for qwen_chats/
> deepseek_chats/.deepseek-share-export.json    manifest for deepseek_chats/
> aistudio_chats/.aistudio-export.json          manifest for aistudio_chats/
> ```
> 
> Every conversation is one markdown file, named from its title:
> 
> ```
> Adding-Kerberos-Authentication-to-Hadoop-Cluster-on-EC2.md
> AI-inflection-point-and-the-future-of-automation.md
> 네이버-AI-모델서비스-기획-직무-기업조사-리포트.md
> ```
> 
> Titles keep their original script rather than being transliterated, so non-Latin
> filenames are expected. A conversation with no usable title falls back to its
> snapshot UUID (`18754235-198d-446b-afc6-26191ea62d27.md`).
> 
> 
> ## File format
> 
> All six converters write the same shape: a metadata header, then alternating
> turns separated by a horizontal rule.
> 
> ```markdown
> 
> # 네이버 AI 모델/서비스 기획 직무 기업조사 리포트
> 
> - Source: https://claude.ai/share/b76ffb8c-8a9d-43fb-b02d-0990e2e2fc7c
> - Author: 쏠테크
> - Created: 2026-02-04
> - Messages: 2
> 
> ---
> 
> 
> ## Human
> 
> 당신은 자기소개서 작성을 돕기 위해…
> 
> ---
> 
> 
> ## Assistant
> 
> 
> # 조사 전략
> …
> ```
> 
> The `---` before each turn is load-bearing. Message bodies contain their own
> markdown headings, so without it a `## Assistant` turn marker would be
> indistinguishable from a heading written inside a reply.
> 
> The headers differ slightly by source: Claude and Kimi transcripts carry
> `Author`, Grok and AI Studio transcripts carry `Model`, and Qwen transcripts
> carry neither (the share API exposes no author or model name). DeepSeek
> transcripts carry `Model` only when the share exposes something more specific
> than the generic literal `default` its API otherwise reports. Grok
> transcripts may also include generated-image links, attachment names, and —
> when exported with the relevant flags — quoted thinking steps and cited web/X
> sources. Kimi transcripts may include quoted `Tool:` blocks — web search, code
> execution, or other tool calls the assistant made mid-turn, rendered inline
> rather than gated behind a flag. Qwen and DeepSeek transcripts may include a
> quoted `Thinking` block (reasoning models' `reasoning_content` /
> `thinking_content`) when exported with `--include-thinking`, and
> `_Attachments: ..._` names for uploaded files. AI Studio transcripts may
> include `[Attachment: name (size)]` markers for uploaded files, and omit
> `Source` entirely when the raw dump didn't record a `LINK:` line.
> 
> 
> ## Manifests
> 
> `claude_chats/.claude-share-export.json`, `grok_chats/.grok-share-export.json`,
> `kimi_chats/.kimi-share-export.json`, `qwen_chats/.qwen-share-export.json`,
> `deepseek_chats/.deepseek-share-export.json`, and
> `aistudio_chats/.aistudio-export.json` map each conversation to the file
> written for it, plus title, message count, and export timestamp. Each
> converter reads its own manifest to skip conversations it already has, so
> re-running the same input is cheap. Deleting a manifest means the next run
> reconverts everything it covered.
> 
> For the five share-link exporters, a manifest is looked for in the output
> directory and then just above it, and a transcript that has since been moved
> into a subdirectory is recognised by name rather than downloaded again.
> `aistudio_export.py`'s manifest keys on a hash of the raw dump's own bytes,
> since dumps have no id of their own.
> 
> 
> ## Adding more
> 
> Claude and Grok need `curl_cffi`; Kimi, Qwen, and DeepSeek need `requests`:
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> Put share links in a file, one per line — blank lines and `#` comments are
> ignored:
> 
> ```
> 
> # new batch
> https://claude.ai/share/b76ffb8c-8a9d-43fb-b02d-0990e2e2fc7c
> https://claude.ai/share/7a9b58a6-0903-4964-8207-cbe44de743ff
> ```
> 
> Then export into the matching directory:
> 
> ```bash
> python3 scripts/claude_share_export.py   link_lists/claudeaisharelinks.txt -o claude_chats
> python3 scripts/grok_share_export.py     link_lists/grokaisharelinks.txt   -o grok_chats
> python3 scripts/kimi_share_export.py     link_lists/kimiaisharelinks.txt   -o kimi_chats
> python3 scripts/qwen_share_export.py     link_lists/qwenaisharelinks.txt   -o qwen_chats
> python3 scripts/deepseek_share_export.py link_lists/deepseeksharelinks.txt -o deepseek_chats
> ```
> 
> Any of the five also takes bare links or ids as positional arguments, `-f
> FILE` (repeatable) instead of a positional links file, and `-o` defaults to
> the current directory. Kimi links may carry a locale segment
> (`kimi.com/share/en/`) and tracking query strings (`?ra=1`); both are
> stripped down to the bare id before fetching. Qwen links may carry a tracking
> query string (`?fev=...`); the UUID is extracted from the path regardless.
> DeepSeek share ids are an 18-character alphanumeric string rather than a
> UUID (e.g. `t119blfapmrbckthu2`); the exporter matches that pattern instead.
> 
> Already-archived conversations are skipped, so it's safe to keep appending to
> one links file and re-run it. Use `--force` to re-fetch a conversation that has
> gained messages since it was archived — the archive is a snapshot, not a live
> mirror.
> 
> Optional content flags, off by default (Kimi has none, its tool-call blocks
> are always included):
> 
> - `--include-thinking` (Claude, Qwen, DeepSeek) — thinking / reasoning blocks, where the snapshot exposes them
> - `--include-sources` (Grok only) — web pages and X posts cited by each answer
> 
> 
> ### AI Studio (manual)
> 
> Google AI Studio prompts (`aistudio.google.co

## 延伸閱讀

相關概念：[[自動化]] · [[資料視覺化]] · [[API 設計]]

相關專案：[[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[CopilotKit--OpenTag|CopilotKit/OpenTag]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[EEliberto--IPA-Download|EEliberto/IPA-Download]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]]

[GitHub](https://github.com/fuadmefleh/Shared-Claude-Chats)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "fuadmefleh--Shared-Claude-Chats"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "fuadmefleh--Shared-Claude-Chats"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "fuadmefleh--Shared-Claude-Chats" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "fuadmefleh--Shared-Claude-Chats"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","資料視覺化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "fuadmefleh--Shared-Claude-Chats" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "fuadmefleh--Shared-Claude-Chats" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "fuadmefleh" AND file.name != "fuadmefleh--Shared-Claude-Chats"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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
> const me = dv.page("Repos/fuadmefleh--Shared-Claude-Chats");
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

> **2026-07-29** — 首次收錄
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

- [[2026-07-30|2026-07-30]] — 再次上榜，936 stars
- [[2026-07-29|2026-07-29]] — 首次收錄，721 stars
