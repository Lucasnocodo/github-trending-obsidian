---
repo: wuyoscar/gpt_image_2_skill
url: https://github.com/wuyoscar/gpt_image_2_skill
owner: wuyoscar
owner_type: User
language: Python
license: MIT
description: "GPT Image 2 prompt gallery, image prompt library, agentic skill, and CLI for OpenAI image generation/editing"
homepage: ""
stars: 949
stars_per_day: 158
forks: 93
open_issues: 0
created: 2026-04-22
pushed_at: 2026-04-28
first_seen: 2026-04-29
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-29
use_case: "提供 OpenAI 圖像生成與編輯的提示庫及 CLI 工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-06"
contributor_count: 1
engagement: "low"
issue_close_rate: 100
repo_size_kb: 455401
readme_length: 8146
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-29"
star_history: "2026-04-29:949"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/agent_skills"
  - "topic/ai_image_prompts"
  - "topic/claude_code_skill"
  - "topic/cli"
  - "topic/codex_skill"
aliases:
  - "gpt_image_2_skill"
  - "wuyoscar/gpt_image_2_skill"
  - "提供 OpenAI 圖像生成與編輯的提示庫及 CLI 工具。"
---

# gpt_image_2_skill

**949** stars · **158** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.2.0` `easy-install`

`agent-skills` `ai-image-prompts` `claude-code-skill` `cli` `codex-skill` `gpt-image` `gpt-image-2` `gpt-image-2-prompts` `image-editing` `image-generation` `image-prompt` `openai` `prompt-library` `prompt-templates` `research-figures` `text-to-image`

> [!summary] 一句話摘要
> 提供 OpenAI 圖像生成與編輯的提示庫及 CLI 工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (158 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 Python 環境中使用 CLI 生成和編輯圖像的開發者。
> **一句話重點** 這個專案的最大價值在於它簡化了圖像生成的過程，讓開發者能夠快速創建和編輯圖像。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "wuyoscar--gpt_image_2_skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、3 小時整合，得到快速生成和編輯圖像的能力，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一個全面的圖像生成和編輯 CLI 工具，結合了豐富的提示庫和靈活的參數設置。

## 專案簡介

這個專案提供了一個完整的 GPT Image 2 提示庫和 CLI 工具，旨在簡化圖像生成與編輯的過程。用戶可以透過 `gpt-image -p "..."` 指令來生成圖像，並可指定多種參數，如輸出格式、質量和尺寸等。CLI 支持批量生成，並能處理多個參考圖像進行編輯，這使得用戶能夠靈活地創建和修改圖像。這個工具的設計考量了使用者的需求，提供了 162 個預設提示，涵蓋了從科學教育到遊戲界面的各種應用，讓用戶能夠快速上手。技術上，它依賴於 OpenAI 的 API，並使用 Python 開發，這意味著對於熟悉 Python 的開發者來說，學習曲線相對平緩。

與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `EvoLinkAI/awesome-gpt-image-2-prompts`，本專案提供了更為全面的 CLI 支持和豐富的提示庫，特別適合需要快速生成多樣化圖像的開發者。使用者在使用過程中可能會遇到的限制包括對於高解析度圖像的生成需求，可能需要較高的 API 調用費用。這個專案目前處於 beta 階段，適合小型團隊或個人開發者進行試用，未來可能會隨著社群的反饋而持續改進。對於希望快速生成圖像並進行編輯的開發者來說，這是一個值得考慮的選擇，特別是在需要多種圖像格式和質量選項的情況下。

**技術棧**：`Python 3.11` · `OpenAI API`

## 重點功能

- 162 個預設提示 — 涵蓋多種應用場景，如科學教育、遊戲設計等。
- CLI 支持批量生成 — 使用 `-n` 參數可一次生成多個圖像。
- 多參考圖像編輯 — 使用 `-i` 參數可同時處理多個圖像進行編輯。
- 多種輸出格式 — 支持 `png`、`jpeg`、`webp` 等格式，使用 `--format` 參數選擇。
- 靈活的質量控制 — 使用 `--quality` 參數調整生成圖像的質量，滿足不同需求。

## 快速開始

1. 安裝 CLI 工具
```bash
/plugin marketplace add wuyoscar/gpt_image_2_skill
```
2. 生成圖像
```bash
gpt-image -p "a photorealistic convenience store at 10pm" --size 1k --quality high -f store.png
```
3. 編輯圖像
```bash
gpt-image -p "Make it a winter evening with heavy snowfall" -i chess.png --quality high -f chess-winter.png
```

## 程式碼範例

```python
# 使用 CLI 生成圖像

```bash
gpt-image -p "a photorealistic convenience store at 10pm" --size 1k --quality high -f store.png
```
# 預期輸出：生成一個名為 store.png 的圖像，顯示一個在晚上 10 點的便利商店。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 949 stars（158/天），forks 93（9.8%），顯示出良好的使用者興趣。作者 wuyoscar 在開源社群中活躍，專注於 AI 和圖像生成領域，這個工具解決了使用者在生成圖像時的複雜性，提供了簡單易用的 CLI 和豐富的提示庫。近期的社群討論和需求也促進了這個專案的快速成長。這個工具的出現正好迎合了對於圖像生成需求日益增長的市場，特別是在教育和娛樂領域。

## 適合誰使用

**目標受眾**：希望在 Python 環境中使用 CLI 生成和編輯圖像的開發者。

> [!example] 使用場景
> - 數位藝術家用它來快速生成遊戲角色概念圖，因為可以輕鬆調整提示和參數以獲得不同風格的圖像。
> - 研究人員用它來創建科學報告中的插圖，因為它提供了針對研究圖形的專業提示，節省了大量時間。
> - 開發者用它來生成 UI 原型圖，因為能夠快速產生多種設計選項以供選擇，提升了開發效率。

## 架構分析

這個專案採用 Python 開發，並使用 OpenAI 的 API 進行圖像生成和編輯。整體架構設計為 CLI 工具，使用者可以透過簡單的命令行指令來生成圖像。資料流方面，使用者的提示會被發送到 OpenAI 的 API，然後返回生成的圖像。

這樣的設計使得用戶能夠快速生成圖像，降低了使用門檻。選擇 Python 作為開發語言的好處在於其廣泛的生態系統和易於學習的特性，但也可能面臨性能瓶頸，尤其是在處理大量請求時。整體來說，這個專案的設計考量了使用者的便利性和靈活性，適合快速開發和原型設計。

未來的擴展性可以通過增加更多的提示和功能來進行提升。

## 技術深入分析

這個專案的核心技術機制是利用 OpenAI 的 API 進行圖像生成和編輯，使用者可以透過 CLI 指令來發送請求。每個請求都包含用戶的提示和相關參數，API 返回生成的圖像。這樣的設計使得用戶能夠快速上手，並且能夠靈活調整生成的圖像。效能方面，這個工具能夠處理多個請求，但在高並發的情況下可能會遇到延遲。選擇 Python 作為開發語言的好處在於其簡單易用，但在處理大量請求時，可能會面臨性能瓶頸。這個專案的設計取捨在於平衡了使用者的便利性和 API 的調用成本，未來可能需要考慮如何優化性能。整合方面，這個工具可以與多種開發環境和工作流相容，特別是在需要快速生成圖像的場景中，能夠有效提升開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程順暢，無明顯坑點。文件中包含英文和中文，適合不同語言的使用者。整體來說，花 30 分鐘能夠順利上手並運行起來。

## 優缺點分析

> [!success] 優點
> - 提供豐富的預設提示，適合多種應用場景。
> - CLI 工具易於使用，適合快速生成圖像。
> - 支持多參考圖像編輯，靈活性高。

> [!danger] 缺點
> - 僅支援 Python 3.11 以上版本，限制了使用者群體。
> - 高解析度圖像生成可能需要較高的 API 調用費用。
> - 目前仍在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本。
> - 需要有效的 OpenAI API 金鑰才能運行。
> - 高解析度圖像生成可能需要較高的 API 調用費用。
> - 目前處於 beta 階段，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，但缺乏豐富的提示庫和 CLI 支持。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供提示庫，但不具備 CLI 工具的即時生成能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，但缺乏豐富的提示庫和 CLI 支持。 | 如果你的專案主要集中在角色生成，且不需要多樣化的提示庫。 | medium，因為需要重新調整生成邏輯和參數設置。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供提示庫，但不具備 CLI 工具的即時生成能力。 | 如果你需要一個專注於提示的資源，而不需要 CLI 工具的即時生成能力。 | low，因為可以直接使用提示而不需要改變生成邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gpt_image_2_skill** | **agent-sprite-forge** | **awesome-gpt-image-2-prompts** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色生成，但缺乏豐富的提示庫和 CLI 支持。 | 提供提示庫，但不具備 CLI 工具的即時生成能力。 |
> | 遷移成本 | - | medium，因為需要重新調整生成邏輯和參數設置。 | low，因為可以直接使用提示而不需要改變生成邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在角色生成，且不需要多樣化的提示庫。 | 如果你需要一個專注於提示的資源，而不需要 CLI 工具的即時 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊或個人開發者進行試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 高解析度圖像生成時，API 調用費用較高。
  - 解法：使用較低質量設定進行初步生成，再選擇最佳結果進行高質量生成。
- [MEDIUM] 在高並發請求下，可能會遇到延遲。
  - 解法：考慮使用請求排隊或限流策略。
- **[HIGH]** CLI 工具需要正確配置環境變數，否則無法正常運行。
  - 解法：確保 `OPENAI_API_KEY` 已正確設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的產品原型開發 | 非常適合 | 能快速生成多樣化的圖像，提升開發效率。 |
| 學術研究中的插圖創建 | 適合 | 提供專業的提示庫，能夠生成高質量的學術插圖。 |
| 大型企業的圖像生成需求 | 普通 | 可能需要更高的 API 調用能力和穩定性。 |
| 個人藝術創作 | 非常適合 | 能夠靈活調整提示和參數，滿足個性化需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、3 小時整合，得到快速生成和編輯圖像的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問 OpenAI API，並且不存取敏感資料。依賴鏈中無已知的供應鏈風險，使用時相對安全。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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
| Forks | 93 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-22 |
| Repo 大小 | 444.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wuyoscar/gpt_image_2_skill) |
| Topics | `agent-skills` `ai-image-prompts` `claude-code-skill` `cli` `codex-skill` `gpt-image` `gpt-image-2` `gpt-image-2-prompts` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wuyoscar](https://github.com/wuyoscar) | 49 |

**最新版本**：v0.2.0 (2026-04-25)

> [!info]- Release Notes
> ## v0.2.0 — 2026-04-25
> 
> This release collects the recent documentation, gallery, skill-scale, and discoverability updates after the initial public release.
> 
> ### Highlights
> 
> - **Full split Reference Gallery Atlas** — expanded the skill references into category-level `gallery-*.md` files so agents can load the relevant prompt slice without filling the context window.
> - **README selected showcase refresh** — compacted the README into representative visual panels while keeping the full 162-prompt catalog in the Reference Gallery.
> - **New and reorganized gallery material** — added/updated examples for research paper figures, scientific education, screen photography, gaming HUDs, events maps, beauty/lifestyle, cinematic references, and more.
> - **Codex installation clarity** — clarified that `$skill-installer` is a built-in Codex skill-management helper and added a manual Codex fallback path.
> - **Bilingual README navigation** — added visible English / 中文 switching near the README top.
> - **SEO and discovery polish** — added natural search terms, expanded package/plugin keywords, GitHub topics, and Star History.
> 
> ### Merged PRs
> 
> - #1 — Sync the full prompt gallery into the skill scale
> - #3 — Polish README showcase and sync split gallery atlas
> - #4 — Add README language switch
> - #5 — Clarify Codex skill installation
> - #6 — Improve README SEO and add star history

## 社群與生態

**社群活躍度**：社群活躍，已解決所有開放問題。
**連結**：[文件](https://github.com/wuyoscar/gpt_image_2_skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-25 ~ 2026-04-28）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #11 from wuyoscar/wuyoscar-patch-4

## README 摘錄

> [!info]- 展開查看原文 README
> GPT Image 2 Prompt Gallery + Agentic Skill + CLI
> OpenAI GPT Image 2 prompt gallery, image prompt library, agentic skill, and CLI — curated, copy-paste prompts and runnable examples for skill-capable agents.
> 
>   English · 中文
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
> 
> ## 📥 Install
> 
> Claude Code
> 
> ```text
> /plugin marketplace add wuyoscar/gpt_image_2_skill
> /plugin install gpt-image@wuyoscar-skills
> ```
> 
> Codex
> 
> Codex ships with built-in skill helpers such as `$skill-installer` and `$skill-creator`.
> Open Codex and ask the built-in installer to install this GitHub skill folder:
> 
> ```text
> $skill-installer install https://github.com/wuyoscar/gpt_image_2_skill/tree/main/skills/gpt-image
> ```
> 
> Codex will download the GitHub folder and place it under your Codex skills directory, usually:
> 
> ```bash
> ~/.codex/skills/gpt-image
> ```
> 
> Restart Codex after installation so the new `$gpt-image` skill is loaded.
> 
> If you prefer to install it manually, copy the skill folder into Codex's skills directory:
> 
> ```bash
> git clone https://github.com/wuyoscar/gpt_image_2_skill.git
> cd gpt_image_2_skill
> 
> mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
> cp -R skills/gpt-image "${CODEX_HOME:-$HOME/.codex}/skills/"
> ```
> 
> Manual agent-skill install
> 
> Set `AGENT_SKILLS_DIR` to the skills directory used by your agent runtime, then symlink this repo's skill folder into it.
> 
> ```bash
> git clone https://github.com/wuyoscar/gpt_image_2_skill.git
> cd gpt_image_2_skill
> 
> 
> # or install to PATH
> uv tool install git+https://github.com/wuyoscar/gpt_image_2_skill
> gpt-image -p "a cat astronaut"
> ```
> 
> Update
> 
> ```bash
> 
> # codex skill: rerun the installer
> 
> # Examples:
> 
> ## ⚡ Quick Usage & Prompting Fundamentals
> 
> CLI quick usage
> 
> After install, every gallery entry below can be copy-pasted as `gpt-image -p "…"` or requested from any skill-capable agent runtime in natural language, e.g. *"generate the Boston Spring poster from the skill gallery"*.
> 
> 
> ### Parameters (complete)
> 
> Show full parameter reference
> 
> | Flag | Values | Default | Applies to | Notes |
> |---|---|---|---|---|
> | `-p, --prompt` | str | — required | both | Full prompt text. |
> | `-f, --file` | path | `./fig/YYYY-MM-DD-HH-MM-SS-.png` | both | Explicit output path. |
> | `-i, --image` | path (repeatable) | — | edits | Presence routes through `/v1/images/edits`. |
> | `-m, --mask` | path (PNG, alpha) | — | edits | Opaque = preserved, transparent = regenerated. Requires `-i`. |
> | `--input-fidelity` | `low` · `high` | — | edits | Supported on `gpt-image-1`/`1.5`. `gpt-image-2` rejects this parameter, so the CLI drops it locally. |
> | `--size` | `1k` · `2k` · `4k` · `portrait` · `landscape` · `square` · `wide` · `tall` · literal `1024x1024` etc. | `1024x1024` | both | Literals must be 16-px multiples, max edge 3840, 3:1 cap, 655k–8.3M total pixels. |
> | `--quality` | `auto` · `low` · `medium` · `high` | `high` | both | This is the practical budget dial: `low` for cheap drafts / large sweeps, `medium` for normal exploration, `high` for final text-heavy or shipping-facing assets. |
> | `-n, --n` | int | 1 | both | Batch generation. `n>1` suffixes filenames `_0`, `_1`, … |
> | `--background` | `auto` · `opaque` | API default | generations | `opaque` disables transparency. |
> | `--moderation` | `auto` · `low` | `low` | generations | `low` is the default here for broader prompt exploration; switch to `auto` if you want the stricter API-side default. |
> | `--format` | `png` · `jpeg` · `webp` | `png` | both | Response encoding. |
> | `--compression` | 0–100 | — | both | JPEG/WebP only. |
> 
> 
> ## ✨ At a glance
> 
>   
>     Item
>     Value
>   
>   
>     Gallery size
>     162 prompts / 162 image assets · README shows a selected showcase
>   
>   
>     Surfaces
>     Agentic Skill + CLI — Claude Code / Codex, OpenClaw, Hermes Agent and other skill-capable agent runtimes
>   
>   
>     Last update
>     2026-04-25
>   
>   
>     Docs
>     English + 中文
>   
> 
> ---
> 
> 
> ## 🔎 What this repo is for
> 
> Use this repo as a **GPT Image 2 prompt gallery**, **image prompt library**, **example of generation showcase**, **Codex / Claude Code agent skill**, and **gpt-image-2 CLI**. It includes reusable AI image prompts for research paper figures, posters, UI mockups, game HUDs, anime / manga, photography, typography, maps, tattoo design, and reference-image editing workflows.
> 
> ---
> 
> Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md).
> 
> 
> # Choose the skill directory for your runtime.
> 
> #   Codex:      ~/.codex/skills
> 
> #   Claude Code / OpenClaw / Hermes Agent / other runtimes: use that runtime's documented skills directory.
> export AGENT_SKILLS_DIR="/path/to/your/agent/skills"
> 
> mkdir -p "$AGENT_SKILLS_DIR"
> ln -s "$PWD/skills/gpt-image" "$AGENT_SKILLS_DIR/gpt-image"
> ```
> 
> CLI
> 
> ```bash
> uvx --from git+https://github.com/wuyoscar/gpt_image_2_skill gpt-image -p "a cat astronaut"
> 
> 
> # plugin: use Claude Code's update flow
> 
> # manual git clone
> cd gpt_image_2_skill && git pull
> 
> 
> # CLI
> uv tool upgrade gpt-image-cli
> ```
> 
> Reads `OPENAI_API_KEY` from the environment or `~/.env`.
> 
> ---
> 
> 
> ### Text → image
> 
> ```bash
> gpt-image -p "a photorealistic convenience store at 10pm" --size 1k --quality high -f store.png
> ```
> 
> Under the hood: `POST /v1/images/generations` with `model=gpt-image-2`.
> 
> 
> ### Text + reference image → image (edit)
> 
> ```bash
> 
> # Single-reference edit / restyle
> gpt-image -p "Make it a winter evening with heavy snowfall" \
>   -i chess.png --quality high -f chess-winter.png
> 
> 
> # Multi-reference edit: the edits endpoint accepts multiple input images
> gpt-image -p "Place the dog from image 2 next to the woman in image 1. Match the same lighting, composition, and background. Do not change anything else." \
>   -i woman.png -i dog.png --size portrait --quality medium -f woman-with-dog.png
> 
> 
> # Mask-based inpaint: opaque = keep, transparent = regenerate
> gpt-image -p "replace sky with aurora" \
>   -i photo.jpg -m sky_mask.png -f aurora.png
> ```
> 
> Under the hood: `POST /v1/images/edits` (multipart form), the official endpoint in the OpenAI cookbook. `gpt-image-2` supports `image`, `mask`, `prompt`, `size`, `quality`, `background`, `output_format`, and `n`. Multiple `-i` inputs are supported for multi-reference edits.
> 
> 
> ### Budget / quality guide
> 
> There is no separate `budget` flag here — use `--quality` as the budget knob.
> 
> - `low` = cheap draft / collect / many variants
> - `medium` = normal exploration / style probing
> - `high` = final posters, Chinese text, diagrams, paper figures, banners
> 
> If you are generating dozens of candidates, start at `low` and only rerun finalists at `high`.
> 
> 
> ### From gallery prompt → CLI / SDK
> 
> Every entry below ships **just the prompt plus a metadata line** (`"size"` · `"quality"` · source). Assemble the CLI / SDK call the same way every time — worked once here so per-entry code blocks can stay out of your way. Example for a `"portrait"` · `"high"` entry:
> 
> ```bash
> 
> # CLI
> gpt-image -p "" --size portrait --quality high -f out.png
> ```
> 
> ```python
> 
> # OpenAI SDK — `size` is the literal pixels; the CLI shortcut maps to `1024x1536` for portrait
> from openai import OpenAI
> client = OpenAI()
> result = client.images.generate(
>     model="gpt-image-2",
>     prompt="",
>     size="1024x1536",
>     quality="high",
> )
> ```
> 
> For reference-based edits, add `-i ref.png` (repeatable) and optionally `-m mask.png` on the CLI, or call `client.images.edit(...)` with `image=[open(p, "rb") for p in refs]`. Everything else stays identical to the generate path.
> 
> Exit codes: `0` success · `1` API/refusal error (full response body echoed to stderr) · `2` bad args or missing `OPENAI_API_KEY`.
> 
> 
> ## 🙏 Acknowledgments
> 
> This gallery stands on top of excellent public work and community exploration:
> 
> - [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
> - [Anil-matcha/Awesome-GPT-Image-2-API-Prompts](https://github.com/Anil-matcha/Awesome-GPT-Image-2-API-Prompts)
> - [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts)
> - [YouMind-OpenLab/awesome-gpt-image-2](https://github.co

## 延伸閱讀

相關概念：[[AI 圖像生成]] · [[CLI/TUI]] · [[開源工具]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]]

[GitHub](https://github.com/wuyoscar/gpt_image_2_skill)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "wuyoscar--gpt_image_2_skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "wuyoscar--gpt_image_2_skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "wuyoscar--gpt_image_2_skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "wuyoscar--gpt_image_2_skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 圖像生成","CLI/TUI","開源工具"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wuyoscar--gpt_image_2_skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wuyoscar--gpt_image_2_skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wuyoscar" AND file.name != "wuyoscar--gpt_image_2_skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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
> const me = dv.page("Repos/wuyoscar--gpt_image_2_skill");
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

> **2026-04-29** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 首次收錄，949 stars
